import { createApp } from 'vue/dist/vue.esm-bundler.js';
import { WebGLRenderer, Scene, AmbientLight, DirectionalLight, PerspectiveCamera, Clock, Raycaster, Object3D, Vector2, Vector3, LinearToneMapping, ReinhardToneMapping, sRGBEncoding, GridHelper, AxesHelper } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from './postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { HueSaturationShader } from 'three/examples/jsm/shaders/HueSaturationShader.js';
import { BrightnessContrastShader } from 'three/examples/jsm/shaders/BrightnessContrastShader.js';
import { GammaCorrectionShader } from 'three/examples/jsm/shaders/GammaCorrectionShader.js';
import { VignetteShader } from 'three/examples/jsm/shaders/VignetteShader.js';
import { ColorCorrectionShader } from 'three/examples/jsm/shaders/ColorCorrectionShader.js';
import { RGBShiftShader } from 'three/examples/jsm/shaders/RGBShiftShader.js';
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader.js';
import { CopyShader } from 'three/examples/jsm/shaders/CopyShader.js';
import { VRMLoaderPlugin } from '@pixiv/three-vrm';
import Stats from 'stats.js'
import anime from 'animejs/lib/anime.es.js';
import { TinySegmenter } from './tiny-segmenter.js';
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, getRedirectResult, signInWithCredential, signOut, updateProfile, onAuthStateChanged, GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider } from "firebase/auth";
import { getDatabase, ref as databaseRef, query, orderByChild, limitToFirst, limitToLast, startAt, endAt, get, push, child, runTransaction, onValue, off } from "firebase/database";
import { getStorage, ref as storageRef, getDownloadURL, getMetadata, uploadBytesResumable } from "firebase/storage";
import { initializeAnalytics } from "firebase/analytics";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

const firebaseConfig = {
    apiKey: "AIzaSyDTVxDJj7rqG9L-Clvba2Tao9B0hkcxjcE",
    authDomain: "auth.milchchan.com",
    databaseURL: "https://milchchan.firebaseio.com",
    projectId: "milchchan",
    storageBucket: "milchchan.appspot.com",
    messagingSenderId: "355698971889",
    appId: "1:355698971889:web:e3653c5c31bd7289cd4550",
    measurementId: "G-3998FJYNWX"
};
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);
const storage = getStorage(firebaseApp);

initializeAnalytics(firebaseApp);
initializeAppCheck(firebaseApp, {
    provider: new ReCaptchaV3Provider("6LdFDHYeAAAAAPlZYl6TB1vpjPNQPltkuKHLyRJi"),

    // Optional argument. If true, the SDK automatically refreshes App Check
    // tokens as needed.
    isTokenAutoRefreshEnabled: true
});

const debug = decodeURIComponent(window.location.hash.substring(1)) === "debug";
const databaseRoot = "bot";
const renderer = new WebGLRenderer({
    antialias: true,
    alpha: true,
    preserveDrawingBuffer: true
});

//renderer.setSize(window.innerWidth, window.outerHeight);
//renderer.setPixelRatio(window.devicePixelRatio);
renderer.setClearColor(0xffffff, 0);
//renderer.toneMappingExposure = 1;
//renderer.toneMapping = LinearToneMapping;
renderer.outputEncoding = sRGBEncoding;
//renderer.autoClear = false;
renderer.toneMapping = ReinhardToneMapping;
renderer.toneMappingExposure = 2; //Math.pow(1.75, 4.0);

const CAMERA_FOV = 60.0;
const CAMERA_Z = 1.5;
const camera = new PerspectiveCamera(CAMERA_FOV, renderer.domElement.width / renderer.domElement.height, 0.1, 1000);

camera.position.set(0.0, 1.1, -CAMERA_Z);

const controls = new OrbitControls(camera, renderer.domElement);

controls.enableKeys = false;
controls.screenSpacePanning = false;
controls.enableDamping = true;
controls.minPolarAngle = 0 * Math.PI / 180;
controls.maxPolarAngle = 180 * Math.PI / 180;
//controls.minAzimuthAngle = -180 * Math.PI / 180;
//controls.maxAzimuthAngle = 180 * Math.PI / 180;
controls.minDistance = 0.75;
controls.maxDistance = 5;
controls.target.set(0.0, 1.0, 0.0);
controls.update();

const scene = new Scene();
const directionallight = new DirectionalLight(0xffffff, 1.0);
//const hemisphereLight = new THREE.HemisphereLight(0xd7fbff, 0x7e94a8, 0.7);

//light.intensity = 0.9;
directionallight.position.set(0.0, 0.0, -1.0).normalize();

scene.add(new AmbientLight(0xFFFFFF, 0.25));
scene.add(directionallight);
//scene.add(hemisphereLight);

const lookAtTarget = new Object3D();

camera.add(lookAtTarget);

const composer = new EffectComposer(renderer);
const bloomPass = new UnrealBloomPass(new Vector2(renderer.domElement.width, renderer.domElement.height), 0.5, 0.0, 0.5);
const hueSaturation = new ShaderPass(HueSaturationShader);
var brightnessContrastShader = new ShaderPass(BrightnessContrastShader);
var gammaCorrectionShader = new ShaderPass(GammaCorrectionShader);
const effectCopy = new ShaderPass(CopyShader);
var vignette = new ShaderPass(VignetteShader);
var colorCorrection = new ShaderPass(ColorCorrectionShader);
const rgbShift = new ShaderPass(RGBShiftShader);
var fxaaShader = new ShaderPass(FXAAShader);

bloomPass.renderToScreen = true;
bloomPass.strength = 0.5;
bloomPass.radius = 0.0;
bloomPass.threshold = 0.5;

//hueSaturation.uniforms.hue.value = 0.1;
hueSaturation.uniforms.saturation.value = 0.5;
brightnessContrastShader.uniforms.brightness.value = 0.1;
brightnessContrastShader.uniforms.contrast.value = 0.1;
colorCorrection.uniforms.mulRGB.value = new Vector3(0.95, 0.95, 0.95);
colorCorrection.uniforms.powRGB.value = new Vector3(1, 1, 1);
rgbShift.uniforms.amount.value = 0.0001;
rgbShift.uniforms.angle.value = 0;
vignette.uniforms.darkness.value = 5.0;
vignette.uniforms.offset.value = 0.1;
effectCopy.renderToScreen = true;
fxaaShader.uniforms.resolution.value.set(1 / (renderer.domElement.width * window.devicePixelRatio), 1 / (renderer.domElement.height * window.devicePixelRatio));

composer.setSize(renderer.domElement.width, renderer.domElement.height);
composer.setPixelRatio(window.devicePixelRatio);
composer.addPass(new RenderPass(scene, camera));
composer.addPass(bloomPass);
composer.addPass(hueSaturation);
//composer.addPass(brightnessContrastShader);
//composer.addPass(colorCorrection);
composer.addPass(rgbShift);
//composer.addPass(vignette);
//composer.addPass(gammaCorrectionShader);
//composer.addPass(fxaaShader);
composer.addPass(effectCopy);

const stats = new Stats();

stats.domElement.style.position = "fixed";
stats.domElement.style.top = "auto";
stats.domElement.style.bottom = "0";
stats.domElement.style.left = "auto";
stats.domElement.style.right = "0";

if (debug) {
    renderer.setClearColor(0x000000, 1);
    scene.add(new GridHelper(10, 10));
    scene.add(new AxesHelper(5));
    controls.enabled = true;
} else {
    controls.enabled = false;
    stats.domElement.classList.add("is-hidden");
}

const clock = new Clock();
const raycaster = new Raycaster();
const mouse = new Vector2();
let vrmModel = null;
const vrmSpringBones = [];
let animationIndex = 0;
const animationSkipFrames = 2;
let idleTime = 0.0;
const blinkThreshold = 5.0;
let waitTime = 0.0;
const waitThreshold = 1.0;
let activateTime = 0.0;
const activateThreshold = 30.0;
let lookAnimation = null;
let randomWind = null;
let draggableBone = null;
let draggingBones = null;
let tapCount = 0;
let isTouching = false;

window.addEventListener("load", event => {
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("sw.js").then(registration => {
            registration.onupdatefound = function () {
                registration.update();
            }
        }).catch(error => {
            console.error(error.code, error.message);
        });
        navigator.serviceWorker.addEventListener("message", event => {
            if (navigator.serviceWorker.controller !== null && "command" in event.data && event.data.command === "caches") {
                navigator.serviceWorker.controller.postMessage({ command: "clear", caches: event.data.caches });
            }
        });
    }

    const app = createApp({
        data() {
            return {
                isDebug: debug,
                isDarkMode: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches,
                isVisible: true,
                isMuted: true,
                isLoading: false,
                isRevealed: false,
                isOverlayed: false,
                isUpdating: false,
                isPopup: false,
                isExpanded: false,
                isLearning: false,
                isAnimating: false,
                isHangingOn: false,
                isSubmitting: false,
                isStared: false,
                isLocked: false,
                isPosting: false,
                isTweeting: false,
                isPaused: false,
                isPreparing: false,
                isRetaining: false,
                mode: null,
                sequenceQueue: [],
                progress: null,
                animatedProgress: 0,
                uptime: 0,
                points: 0,
                animatedPoints: 0,
                maxPoints: 600,
                captures: { _resolve: async () => await Object.values(app.captures).filter(x => typeof (x) !== "function" && "image" in x).forEach(async x => x["image"]["url"] = await getDownloadURL(storageRef(storage, x.image.path))) },
                user: null,
                input: "",
                animatedInputLength: 0,
                maxInputLength: 100,
                inputHasError: false,
                messages: [],
                maxMessages: 10,
                word: null,
                words: [],
                likes: [],
                tags: [],
                maxTags: 100,
                logs: [],
                scrollTimeoutID: undefined,
                stars: -1,
                animatedStars: 0,
                counter: { words: -1, modifiers: -1 },
                screenshot: null,
                notifications: [],
                notificationHeight: 0,
                animatedNotificationHeight: 0,
                recentImages: [],
                backgroundQueue: [],
                background: { image: null, width: 0, height: 0, timestamp: 0, timeout: { id: null, duration: 10000 }, nonce: null },
                wall: { canvasSize: { width: 0, height: 0, deviceWidth: 0, deviceHeight: 0 }, blocks: [] },
                refreshRequired: false,
                isUploading: false,
                animations: {
                    /*idle1: { url: "/assets/animation-idle1.json" },
                    idle2: { url: "/assets/animation-idle2.json" },
                    idle3: { url: "/assets/animation-idle3.json" },
                    idle4: { url: "/assets/animation-idle4.json" },
                    jump: { url: "/assets/animation-jump.json" },
                    lose: { url: "/assets/animation-lose.json" },
                    run: { url: "/assets/animation-run.json" },
                    walk: { url: "/assets/animation-walk.json" },
                    win: { url: "/assets/animation-win.json" }*/
                },
                currentAnimations: [],
                blendShapeAnimations: [],
                animationQueue: [],
                canvasSize: { width: 0, height: 0, deviceWidth: 0, deviceHeight: 0, alternative: { width: 0, height: 0, deviceWidth: 0, deviceHeight: 0 } },
                cachedImages: {},
                cachedSprites: [],
                alternativeCachedSprites: [],
                insetTop: 0,
                insetBottom: 0,
                text: [],
                popupTextHeight: 0,
                animatedPopupTextHeight: 0,
                message: null,
                states: {},
                character: null,
                alternative: null,
                wordDictionary: {},
                reverseWordDictionary: {},
                attributes: ["名前", "組織", "時間", "場所", "する事", "生き物", "食べ物", "飲み物", "聞くもの", "見るもの", "読むもの", "使うもの", "身につけるもの", "乗り物", "部位", "状態"]
            }
        },
        watch: {
            isVisible(newValue) {
                try {
                    localStorage.setItem("character", JSON.stringify({ visible: newValue, mute: this.isMuted }));
                } catch (e) {
                    localStorage.removeItem("character");
                }
            },
            isMuted(newValue) {
                try {
                    localStorage.setItem("character", JSON.stringify({ visible: this.isVisible, mute: newValue }));
                } catch (e) {
                    localStorage.removeItem("character");
                }
            },
            progress(newValue) {
                const self = this;
                const obj = { count: this.animatedProgress };

                anime({
                    targets: obj,
                    count: newValue === null && self.animatedProgress > 0 ? 1 : newValue,
                    round: 100,
                    duration: 500,
                    easing: "linear",
                    update: () => {
                        self.animatedProgress = obj.count;
                    },
                    complete: () => {
                        if (newValue === null) {
                            self.animatedProgress = 0;
                        } else {
                            self.animatedProgress = newValue;
                        }
                    }
                });
            },
            points(newValue) {
                const self = this;
                const obj = { count: this.animatedPoints };

                anime({
                    targets: obj,
                    count: newValue,
                    round: 100,
                    duration: 500,
                    easing: "linear",
                    update: () => {
                        self.animatedPoints = obj.count;
                    },
                    complete: () => {
                        self.animatedPoints = newValue;
                    }
                });
            },
            captures: {
                handler: (newValue) => {
                    if (Object.keys(newValue).length > 0) {
                        try {
                            localStorage.setItem("captures", JSON.stringify(Object.values(newValue).filter(x => typeof (x) !== "function").map(x => {
                                x["checksum"] = [...String(x.timestamp)].reduce((x, y) => x + y, 0) + [...String(x.count)].reduce((x, y) => x + y, 0);

                                return x;
                            })));
                        } catch (e) {
                            localStorage.removeItem("captures");
                        }
                    } else {
                        localStorage.removeItem("captures");
                    }
                },
                deep: true
            },
            text: {
                handler: () => {
                    app.$nextTick(() => {
                        if (app.isPopup) {
                            app.popupTextHeight = app.$refs.popupText.getBoundingClientRect().height;
                        }
                    });
                },
                deep: true
            },
            popupTextHeight(newValue) {
                const self = this;
                const obj = { height: this.animatedPopupTextHeight };

                anime({
                    targets: obj,
                    height: newValue,
                    round: 1,
                    duration: 500,
                    easing: "linear",
                    update: () => {
                        self.animatedPopupTextHeight = obj.height
                    },
                    complete: () => {
                        self.animatedPopupTextHeight = newValue;
                    }
                });
            },
            notifications: {
                handler: () => {
                    app.$nextTick(() => {
                        app.notificationHeight = app.$refs.notifications.getBoundingClientRect().height;
                    });
                },
                deep: true
            },
            notificationHeight(newValue) {
                const self = this;
                const obj = { height: this.animatedNotificationHeight };

                anime({
                    targets: obj,
                    height: newValue,
                    round: 1,
                    duration: 500,
                    easing: "linear",
                    update: () => {
                        self.animatedNotificationHeight = obj.height
                    },
                    complete: () => {
                        self.animatedNotificationHeight = newValue;
                    }
                });
            },
            stars(newValue) {
                const self = this;
                const obj = { count: this.animatedStars };

                anime({
                    targets: obj,
                    count: newValue,
                    round: 1,
                    duration: 500,
                    easing: "linear",
                    update: () => {
                        self.animatedStars = obj.count
                    },
                    complete: () => {
                        self.animatedStars = newValue;
                    }
                });
            },
            input: {
                handler: () => {
                    app.$nextTick(() => {
                        const obj = { count: app.animatedInputLength };

                        anime({
                            targets: obj,
                            count: app.input.length,
                            round: 1,
                            duration: 500,
                            easing: "linear",
                            update: () => {
                                app.animatedInputLength = obj.count
                            },
                            complete: () => {
                                app.animatedInputLength = app.input.length;
                            }
                        });
                    });
                },
                deep: true
            }
        },
        methods: {
            signIn: async function (event) {
                if (event === GoogleAuthProvider.PROVIDER_ID) {
                    const provider = new GoogleAuthProvider();

                    provider.addScope("profile");
                    provider.addScope("email");

                    if (window.navigator.userAgent.indexOf("Safari") > -1 && !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                        try {
                            const result = await signInWithPopup(auth, provider);
                            const credential = GoogleAuthProvider.credentialFromResult(result);

                            for (const data of result.user.providerData) {
                                try {
                                    await updateProfile(this.user, {
                                        displayName: data.displayName,
                                        photoURL: data.photoURL
                                    });
                                } catch (e) {
                                    console.error(e.code, e.message);
                                }

                                break;
                            }

                            try {
                                localStorage.setItem("credential", JSON.stringify({ providerId: credential.providerId, accessToken: credential.accessToken, idToken: credential.idToken }));
                            } catch (e) {
                                localStorage.removeItem("credential");
                            }
                        } catch (error) {
                            console.error(error.code, error.message);
                        }
                    } else {
                        signInWithRedirect(auth, provider);
                    }
                } else if (event === FacebookAuthProvider.PROVIDER_ID) {
                    const provider = new FacebookAuthProvider();

                    provider.addScope("public_profile");

                    if (window.navigator.userAgent.indexOf("Safari") > -1 && !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                        try {
                            const result = await signInWithPopup(auth, provider);
                            const credential = FacebookAuthProvider.credentialFromResult(result);

                            for (const data of result.user.providerData) {
                                try {
                                    await updateProfile(this.user, {
                                        displayName: data.displayName,
                                        photoURL: data.photoURL
                                    });
                                } catch (e) {
                                    console.error(e.code, e.message);
                                }

                                break;
                            }

                            try {
                                localStorage.setItem("credential", JSON.stringify({ providerId: credential.providerId, accessToken: credential.accessToken }));
                            } catch (e) {
                                localStorage.removeItem("credential");
                            }
                        } catch (error) {
                            console.error(error.code, error.message);
                        }
                    } else {
                        signInWithRedirect(auth, provider);
                    }
                } else if (event === TwitterAuthProvider.PROVIDER_ID) {
                    const provider = new TwitterAuthProvider();

                    if (window.navigator.userAgent.indexOf("Safari") > -1 && !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                        try {
                            const result = await signInWithPopup(auth, provider);
                            const credential = TwitterAuthProvider.credentialFromResult(result);

                            for (const data of result.user.providerData) {
                                const photoUrl = data.photoURL.replace(/_normal\.jpg$/, '.jpg');

                                try {
                                    await updateProfile(this.user, {
                                        displayName: data.displayName,
                                        photoURL: photoUrl
                                    });
                                } catch (e) {
                                    console.error(e.code, e.message);
                                }

                                break;
                            }

                            this.user['link'] = `https://twitter.com/${result._tokenResponse.screenName}`;

                            try {
                                localStorage.setItem("credential", JSON.stringify({ providerId: credential.providerId, accessToken: credential.accessToken, secret: credential.secret }));
                            } catch (e) {
                                localStorage.removeItem("credential");
                            }
                        } catch (error) {
                            console.error(error.code, error.message);
                        }
                    } else {
                        signInWithRedirect(auth, provider);
                    }
                }
            },
            signOut: async function (event) {
                try {
                    await signOut(auth);

                    localStorage.removeItem("credential");

                    if ("serviceWorker" in navigator && navigator.serviceWorker.controller !== null) {
                        navigator.serviceWorker.controller.postMessage({ command: "caches" });
                    }
                } catch (error) {
                    console.error(error.code, error.message);
                }
            },
            refresh: function (event) {
                this.background.nonce = this.generateNonce(8);
                //this.refreshRequired = true;
                /*
                if (this.likes.some(x => typeof (x.text) === "object" && Object.values(x.text).some(x => typeof (x) === "object"))) {
                    this.isBlinded = true;
                } else {
                    this.activate();
                }

                activateTime = 0.0;*/
            },
            send: async function (event) {
                /*if (this.isDebug) {
                    if (this.input.length > 0) {
                        const tags = this.input.split(/\s/);
                        const keys = [];

                        for (const image of this.background.images) {
                            if (!keys.includes(image.id)) {
                                keys.push(image.id);
                            }
                        }

                        if (keys.length > 0 && tags.length > 0) {
                            for (const key of keys) {
                                runTransaction(databaseRef(database, `${databaseRoot}/images/${key}`), image => {
                                    image["tags"] = tags;

                                    return image;
                                });
                            }

                            this.isLearning = false;
                        } else if (this.input.length <= this.maxInputLength) {
                            this.learn({ name: this.input });
                            this.input = "";
                            this.isLearning = false;
                        }
                    }
                } else*/
                const text = this.input.trim();

                if (text.length > 0 && text.length <= this.maxInputLength) {
                    this.learn(text);
                    this.input = "";
                    this.isLearning = false;
                } else {
                    this.shake(this.$refs.input);
                }
            },
            change: function (event) {
                if (this.input.length <= this.maxInputLength) {
                    this.inputHasError = false;
                } else {
                    this.inputHasError = true;
                }
            },
            resizeImage: async function (dataURL, length) {
                try {
                    return await new Promise(async (resolve1, reject1) => {
                        const i = new Image();

                        i.onload = () => {
                            const canvas = document.createElement("canvas");

                            if (i.width > i.height) {
                                if (i.width > length) {
                                    canvas.width = length * window.devicePixelRatio;
                                    canvas.height =
                                        Math.floor((length / i.width) * i.height) *
                                        window.devicePixelRatio;
                                } else {
                                    canvas.width = i.width * window.devicePixelRatio;
                                    canvas.height = i.height * window.devicePixelRatio;
                                }
                            } else if (i.height > length) {
                                canvas.width =
                                    Math.floor((length / i.height) * i.width) * window.devicePixelRatio;
                                canvas.height = length * window.devicePixelRatio;
                            } else {
                                canvas.width = i.width * window.devicePixelRatio;
                                canvas.height = i.height * window.devicePixelRatio;
                            }

                            const ctx = canvas.getContext("2d");

                            ctx.imageSmoothingEnabled = true;
                            ctx.imageSmoothingQuality = "high";
                            ctx.drawImage(i, 0, 0, canvas.width, canvas.height);
                            ctx.canvas.toBlob(async (blob) => {
                                try {
                                    resolve1(
                                        await new Promise(async (resolve2, reject2) => {
                                            const reader = new FileReader();

                                            reader.onload = () => {
                                                resolve2(reader.result);
                                            };
                                            reader.onerror = () => {
                                                reject2(reader.error);
                                            };
                                            reader.readAsDataURL(blob);
                                        })
                                    );
                                } catch (e) {
                                    reject1(e);
                                }

                                ctx.canvas.width = ctx.canvas.height = 0;
                            }, "image/png");
                        };
                        i.onerror = (error) => {
                            reject1(error);
                        };
                        i.crossOrigin = "anonymous";
                        i.src = dataURL;
                    });
                } catch (e) {
                    console.error(e);
                }

                return null;
            },
            download: async function (url) {
                try {
                    const response = await fetch(url);

                    if (response.ok) {
                        const reader = response.body.getReader();
                        const contentType = response.headers.get("Content-Type");
                        const contentLength = +response.headers.get("Content-Length");
                        const chunks = [];
                        let receivedLength = 0;

                        while (true) {
                            const { done, value } = await reader.read();

                            if (done) {
                                break;
                            }

                            chunks.push(value);
                            receivedLength += value.length;
                            this.progress = receivedLength / contentLength;
                        }

                        if (receivedLength === contentLength) {
                            this.progress = null;

                            if (contentType === "application/json") {
                                return new TextDecoder("utf-8").decode(chunks.reduce((x, y) => {
                                    x.buffer.set(y, x.position);
                                    x.position += chunk.length;

                                    return x;
                                }, { buffer: new Uint8Array(receivedLength), position: 0 }).buffer);
                            } else {
                                return new Blob(chunks, { type: contentType });
                            }
                        }
                    }
                } catch (error) {
                    this.notify({ text: error.message, accent: this.character.accent, image: this.character.image });
                    console.error(error);
                }

                this.progress = null;

                return null;
            },
            upload: async function (event, data = null) {
                const timestamp = Math.floor(new Date() / 1000);

                this.isUploading = true;

                if ("files" in event.currentTarget) {
                    function generateUuid() {
                        // https://github.com/GoogleChrome/chrome-platform-analytics/blob/master/src/internal/identifier.js
                        // const FORMAT: string = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
                        let chars = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".split("");

                        for (let i = 0, len = chars.length; i < len; i++) {
                            switch (chars[i]) {
                                case "x":
                                    chars[i] = Math.floor(Math.random() * 16).toString(16);
                                    break;
                                case "y":
                                    chars[i] = (Math.floor(Math.random() * 4) + 8).toString(16);
                                    break;
                            }
                        }

                        return chars.join("");
                    }

                    const self = this;
                    const files = event.currentTarget.files;
                    let completed = 0;

                    for (const file of files) {
                        const uploadTask = uploadBytesResumable(storageRef(storage, `images/${generateUuid()}`), file, {
                            contentType: file.type
                        });

                        try {
                            const path = await new Promise(function (resolve, reject) {
                                uploadTask.on("state_changed", (snapshot) => {
                                    self.progress = snapshot.bytesTransferred / snapshot.totalBytes / files.length + completed / files.length;
                                }, (error) => {
                                    reject(error);
                                }, () => {
                                    resolve(uploadTask.snapshot.ref.fullPath);
                                });
                            });

                            if (data === null) {
                                await runTransaction(databaseRef(database, `${databaseRoot}/backgrounds/${push(child(databaseRef(database), `${databaseRoot}/backgrounds`)).key}`), current => {
                                    return { image: { path: path, type: file.type }, random: Math.random(), timestamp: timestamp };
                                });
                            } else if (data.type === null) {
                                data["image"] = { path: path, url: await getDownloadURL(storageRef(storage, path)), type: file.type };
                                data["timestamp"] = timestamp;
                            } else if (data.type === "backgrounds") {
                                await runTransaction(databaseRef(database, `${databaseRoot}/backgrounds/${push(child(databaseRef(database), `${databaseRoot}/backgrounds`)).key}`), current => {
                                    return { image: { path: path, type: file.type }, user: 'link' in this.user ? { id: this.user.uid, name: this.user.displayName, image: this.user.photoURL, link: this.user.link } : { id: this.user.uid, name: this.user.displayName, image: this.user.photoURL }, random: Math.random(), timestamp: timestamp };
                                });
                            } else {
                                const result = await runTransaction(databaseRef(database, `${databaseRoot}/${data.type}/${data.id}`), current => {
                                    if (current) {
                                        current["image"] = { path: path, type: file.type };
                                        current["timestamp"] = timestamp;
                                    }

                                    return current;
                                });

                                if (result.committed) {
                                    if (result.snapshot.exists()) {
                                        const d = result.snapshot.val()

                                        data["image"] = d["image"];
                                        data["image"]["url"] = await getDownloadURL(storageRef(storage, d["image"].path));
                                        data["timestamp"] = d["timestamp"];
                                    }
                                    else {
                                        data["image"] = { path: path, url: await getDownloadURL(storageRef(storage, path)), type: file.type };
                                        data["timestamp"] = timestamp;
                                    }
                                }
                            }
                        } catch (error) {
                            this.notify({ text: error.message, accent: this.character.accent, image: this.character.image });
                            console.error(error);
                        }

                        completed++;
                    }

                    //push(databaseRef(database, `${databaseRoot}/backgrounds`), { image: path, timestamp: Math.floor(new Date() / 1000) });

                    this.progress = null;
                } else if (data.type === null) {
                    data["image"] = null;
                    data["timestamp"] = timestamp;
                } else if (data.type === "backgrounds") {
                    try {
                        await runTransaction(databaseRef(database, `${databaseRoot}/${data.type}/${data.id}`), current => {
                            return null;
                        });
                    } catch (e) {
                        this.notify({ text: e.message, accent: this.character.accent, image: this.character.image });
                        console.error(e);
                    }
                } else {
                    try {
                        const result = await runTransaction(databaseRef(database, `${databaseRoot}/${data.type}/${data.id}`), current => {
                            if (current) {
                                current["image"] = null;
                                current["timestamp"] = timestamp;
                            }

                            return current;
                        });

                        if (result.committed && result.snapshot.exists()) {
                            const d = result.snapshot.val()

                            data["image"] = null;
                            data["timestamp"] = d["timestamp"];
                        }
                    } catch (e) {
                        this.notify({ text: e.message, accent: this.character.accent, image: this.character.image });
                        console.error(e);
                    }
                }

                this.isUploading = false;
            },
            check: function (event) {
                for (const attribute of this.word.attributes) {
                    if (attribute === event.target.dataset.attribute) {
                        attribute.value = event.target.checked;
                    }
                }
            },
            share: async function (word) {
                const self = this;
                const user = 'link' in this.user ? { id: this.user.uid, name: this.user.displayName, image: this.user.photoURL, link: this.user.link } : { id: this.user.uid, name: this.user.displayName, image: this.user.photoURL };
                const timestamp = Math.floor(new Date() / 1000);
                let wordsPath;
                let countPath;
                let deleteRequired = false;

                if (word.modifier.selected) {
                    wordsPath = `${databaseRoot}/dictionary/modifiers/words/${word.name}`;
                    countPath = `${databaseRoot}/dictionary/modifiers/count`;

                    if (word.modifier.enabled) {
                        delete word.attributes;
                    } else {
                        deleteRequired = true;
                    }
                } else {
                    wordsPath = `${databaseRoot}/dictionary/words/${word.name}`;
                    countPath = `${databaseRoot}/dictionary/count`;

                    if (word.attributes.every(x => !x.value)) {
                        deleteRequired = true;
                    } else {
                        word.attributes = word.attributes.reduce((x, y) => {
                            x[y.name] = y.value ? timestamp : 0;

                            return x;
                        }, {});
                    }

                    if (word.name in this.wordDictionary) {
                        delete this.wordDictionary[word.name];
                    }

                    Object.keys(this.reverseWordDictionary).forEach((key) => {
                        if (this.reverseWordDictionary[key].words.some((x) => x === word.name)) {
                            delete this.reverseWordDictionary[key];
                        }
                    });
                }

                this.isSubmitting = true;

                try {
                    if (deleteRequired) {
                        const result = await runTransaction(databaseRef(database, wordsPath), current => {
                            return null;
                        });

                        if (result.committed && !result.snapshot.exists()) {
                            await runTransaction(databaseRef(database, countPath), count => {
                                return (count || 1) - 1;
                            });

                            this.word = null;
                        }
                    } else {
                        const result = await runTransaction(databaseRef(database, wordsPath), current => {
                            if (current) {
                                current["user"] = user;
                                current["random"] = Math.random();
                                current["timestamp"] = timestamp - 1;
                            } else {
                                current = { user: user, random: Math.random(), timestamp: timestamp };
                            }

                            if ("image" in word && word.image !== null) {
                                current["image"] = { path: word.image.path, type: word.image.type };
                            }

                            if ("attributes" in word) {
                                current["attributes"] = word.attributes;
                            }

                            return current;
                        });

                        if (result.committed) {
                            if (result.snapshot.exists()) {
                                const dictionary = result.snapshot.val();

                                if (dictionary.timestamp === timestamp) {
                                    function format(format) {
                                        var args = arguments;

                                        return format.replace(/\{(\d)\}/g, function (m, c) { return args[parseInt(c) + 1] });
                                    }

                                    const result = await runTransaction(databaseRef(database, countPath), count => {
                                        return (count || 0) + 1;
                                    });

                                    if (result.committed && result.snapshot.exists() && ~~result.snapshot.val() % 10 === 0 && this.background.nonce === null) {
                                        try {
                                            await new Promise((resolve, reject) => {
                                                const i = new Image();

                                                i.onload = () => {
                                                    resolve();
                                                };
                                                i.onerror = (e) => {
                                                    reject(e);
                                                };
                                                i.src = window.devicePixelRatio > 1 ? `/images/Background@${String(Math.trunc(window.devicePixelRatio))}x.png` : "/images/Background.png";
                                            });
                                        } catch (e) {
                                            console.error(e);
                                        }

                                        this.background.image = undefined;
                                        this.preload();
                                    }

                                    for (const obj of this.prepare(this.character.sequences.filter((x) => x.name === "Learned"))) {
                                        if (obj.type === "Message") {
                                            this.notify({ text: format(obj.text, word.name), accent: this.character.accent, image: this.character.image });
                                        }
                                    }
                                }

                                /*if (this.points < this.maxPoints) {
                                    this.retain(Object.assign({ name: word.name }, dictionary));
                                    this.points = Math.min(this.points + 60, this.maxPoints);
                                }*/

                                this.isStared = true;

                                window.setTimeout(() => {
                                    self.isStared = false;
                                }, 3000);

                                if (!this.isMuted) {
                                    this.$refs.twinkle.play();
                                }

                                this.word = null;
                            }
                        }
                    }
                } catch (error) {
                    this.notify({ text: error.message, accent: this.character.accent, image: this.character.image });
                    console.error(error);
                }

                this.isSubmitting = false;
            },
            like: async function (message, canvas) {
                const user = 'link' in this.user ? { id: this.user.uid, name: this.user.displayName, image: this.user.photoURL, link: this.user.link } : { id: this.user.uid, name: this.user.displayName, image: this.user.photoURL };
                const timestamp = Math.floor(new Date() / 1000);

                try {
                    let result;

                    if (canvas === null) {
                        result = await runTransaction(databaseRef(database, `${databaseRoot}/likes/${await this.digestMessage(`${this.character.name}&${message.text}`)}`), current => {
                            if (current) {
                                return undefined;
                            }

                            return { text: message.original, author: this.character.name, user: user, timestamp: timestamp };
                        });
                    } else {
                        function generateUuid() {
                            // https://github.com/GoogleChrome/chrome-platform-analytics/blob/master/src/internal/identifier.js
                            // const FORMAT: string = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
                            let chars = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".split("");

                            for (let i = 0, len = chars.length; i < len; i++) {
                                switch (chars[i]) {
                                    case "x":
                                        chars[i] = Math.floor(Math.random() * 16).toString(16);
                                        break;
                                    case "y":
                                        chars[i] = (Math.floor(Math.random() * 4) + 8).toString(16);
                                        break;
                                }
                            }

                            return chars.join("");
                        }

                        const self = this;
                        const type = "image/png";
                        const uploadTask = uploadBytesResumable(storageRef(storage, `images/${generateUuid()}`), await new Promise(resolve => {
                            canvas.toBlob(blob => {
                                resolve(blob);
                            }, type);
                        }), {
                            contentType: type
                        });

                        try {
                            const path = await new Promise((resolve, reject) => {
                                uploadTask.on("state_changed", snapshot => {
                                    self.progress = snapshot.bytesTransferred / snapshot.totalBytes;
                                }, (error) => {
                                    reject(error);
                                }, () => {
                                    resolve(uploadTask.snapshot.ref.fullPath);
                                });
                            });

                            result = await runTransaction(databaseRef(database, `${databaseRoot}/likes/${await this.digestMessage(`${this.character.name}&${message.text}`)}`), current => {
                                if (current) {
                                    current["image"] = { path: path, type: type };
                                    current["timestamp"] = timestamp;

                                    return current;
                                }

                                return { text: message.original, author: this.character.name, image: { path: path, type: type }, user: user, timestamp: timestamp };
                            });
                        } finally {
                            this.progress = null;
                        }
                    }

                    if (result.committed && result.snapshot.exists()) {
                        /*const sequence = [];
 
                        for (const obj of this.prepare(this.character.alternative.sequences.filter((x) => x.name === "Liked"), null, this.character.alternative.sequences)) {
                            if (obj.type === "Message") {
                                sequence.push({ type: obj.type, speed: obj.speed, duration: obj.duration, character: this.character.alternative, text: obj.text });
                            } else {
                                obj["character"] = this.character.alternative;
                                sequence.push(obj);
                            }
                        }
 
                        if (sequence.length > 0) {
                            this.sequenceQueue.push(sequence);
                        }*/

                        for (const obj of this.prepare(this.character.alternative.sequences.filter((x) => x.name === "Liked"), null, this.character.alternative.sequences)) {
                            if (obj.type === "Message") {
                                this.notify({ text: obj.text, accent: this.character.alternative.accent, image: this.character.alternative.image });
                            }
                        }

                        if (this.points < this.maxPoints) {
                            //const nextPoints = Math.min(this.points + 30, this.maxPoints);

                            /*for (let i = parseInt(this.points) + 1; i <= nextPoints; i++) {
                                if (i % 60 === 0) {
                                    this.retain();
                                }
                            }*/

                            //this.points = nextPoints;
                        }

                        if (this.background.nonce === null) {
                            try {
                                await new Promise((resolve, reject) => {
                                    const i = new Image();

                                    i.onload = () => {
                                        resolve();
                                    };
                                    i.onerror = (e) => {
                                        reject(e);
                                    };
                                    i.src = window.devicePixelRatio > 1 ? `/images/Background@${String(Math.trunc(window.devicePixelRatio))}x.png` : "/images/Background.png";
                                });
                            } catch (e) {
                                console.error(e);
                            }

                            this.background.image = undefined;
                            this.preload();
                        }

                        if (!this.isMuted) {
                            this.$refs.like.play();
                        }
                    }
                } catch (e) {
                    this.notify({ text: e.message, accent: this.character.accent, image: this.character.image });
                    console.error(e);
                }
            },
            unlike: async function (message) {
                try {
                    const self = this;
                    const result = await runTransaction(databaseRef(database, `${databaseRoot}/likes/${await this.digestMessage(`${message.author}&${typeof (message.text) === 'string' ? message.text : Object.keys(message.text).sort((x, y) => x - y).reduce((x, y) => x + (typeof (message.text[y]) === 'string' ? message.text[y] : Array.isArray(message.text[y]) ? message.text[y][0] + message.text[y][1].name : message.text[y].name), '')}`)}`), current => {
                        if (current && "user" in current && current.user.id === self.user.uid) {
                            return null;
                        }

                        return undefined;
                    });

                    if (result.committed) {
                        return true;
                    }
                } catch (e) {
                    this.notify({ text: e.message, accent: this.character.accent, image: this.character.image });
                    console.error(e);
                }

                return false;
            },
            randomize: async function () {
                const snapshot1 = await get(query(databaseRef(database, `${databaseRoot}/dictionary/words`), orderByChild('random'), startAt(Math.random()), limitToFirst(10)));

                if (snapshot1.exists()) {
                    function choice(collection, func) {
                        const r = Math.random();
                        let sum = 0.0;
                        let index = 0;

                        for (let item of collection) {
                            const probability = func(item);

                            if (sum <= r && r < sum + probability) {
                                break;
                            }

                            sum += probability;
                            index++;
                        }

                        return collection[index];
                    }

                    function softmax(x, func1, func2) {
                        let y = [].concat(x);
                        let max = Number.MIN_VALUE;
                        let sum = 0.0;

                        for (let i = 0; i < x.length; i++) {
                            if (func1(x[i]) > max) {
                                max = func1(x[i]);
                            }
                        }

                        for (let i = 0; i < x.length; i++) {
                            sum += Math.exp(func1(x[i]) - max);
                        }

                        for (let i = 0; i < x.length; i++) {
                            func2(y[i], Math.exp(func1(x[i]) - max) / sum);
                        }

                        return y;
                    }

                    const dictionary1 = snapshot1.val();
                    const words1 = [];
                    const letters = [];

                    for (const key in dictionary1) {
                        dictionary1[key]["name"] = key;
                        dictionary1[key]["probability"] = 1;

                        words1.push(dictionary1[key]);

                        for (let i = 0; i < key.length; i++) {
                            if (letters.indexOf(key.charAt(i)) === -1 && key.charAt(i) !== "\n" && key.charAt(i).match(/\s/) === null) {
                                letters.push(key.charAt(i));
                            }
                        }
                    }

                    const word = choice(softmax(words1, x => x.probability, (x, y) => x.probability = y), x => x.probability);
                    let modifier = null;

                    if (Math.random() < 0.5) {
                        const snapshot2 = await get(query(databaseRef(database, `${databaseRoot}/dictionary/modifiers/words`), orderByChild('random'), startAt(Math.random()), limitToFirst(10)));

                        if (snapshot2.exists()) {
                            const dictionary2 = snapshot2.val();
                            const words2 = [];

                            for (const key in dictionary2) {
                                dictionary2[key]["name"] = key;
                                dictionary2[key]["probability"] = 1;

                                words2.push(dictionary2[key]);

                                for (let i = 0; i < key.length; i++) {
                                    if (letters.indexOf(key.charAt(i)) === -1 && key.charAt(i) !== "\n" && key.charAt(i).match(/\s/) === null) {
                                        letters.push(key.charAt(i));
                                    }
                                }
                            }

                            modifier = choice(softmax(words2, x => x.probability, (x, y) => x.probability = y), x => x.probability);
                        }
                    }

                    return { running: true, time: 0, duration: 0, elapsed: 0, type: { elapsed: -1, speed: 60, reverse: false, buffer: "", count: 0 }, text: modifier === null ? word.name : modifier.name + word.name, word: word, modifier: modifier, characters: [], letters: letters };
                } else {
                    return null;
                }
            },
            retain: async function (word = null) {
                if (word === null) {
                    this.isRetaining = true;

                    const snapshot = await get(query(databaseRef(database, `${databaseRoot}/words`), orderByChild('random'), startAt(Math.random()), limitToFirst(10)));

                    this.isRetaining = false;

                    if (snapshot.exists()) {
                        function choice(collection, func) {
                            const r = Math.random();
                            let sum = 0.0;
                            let index = 0;

                            for (let item of collection) {
                                const probability = func(item);

                                if (sum <= r && r < sum + probability) {
                                    break;
                                }

                                sum += probability;
                                index++;
                            }

                            return collection[index];
                        }

                        function softmax(x, func1, func2) {
                            let y = [].concat(x);
                            let max = Number.MIN_VALUE;
                            let sum = 0.0;

                            for (let i = 0; i < x.length; i++) {
                                if (func1(x[i]) > max) {
                                    max = func1(x[i]);
                                }
                            }

                            for (let i = 0; i < x.length; i++) {
                                sum += Math.exp(func1(x[i]) - max);
                            }

                            for (let i = 0; i < x.length; i++) {
                                func2(y[i], Math.exp(func1(x[i]) - max) / sum);
                            }

                            return y;
                        }

                        function format(format) {
                            var args = arguments;

                            return format.replace(/\{(\d)\}/g, function (m, c) { return args[parseInt(c) + 1] });
                        }

                        const dictionary = snapshot.val();
                        const words = [];

                        for (const key in dictionary) {
                            dictionary[key]["name"] = key;
                            dictionary[key]["probability"] = 1;

                            words.push(dictionary[key]);
                        }

                        word = choice(softmax(words, x => x.probability, (x, y) => x.probability = y), x => x.probability);
                    } else {
                        return;
                    }
                }

                if (word.name in this.captures) {
                    this.captures[word.name].name = word.name;
                    this.captures[word.name].attributes = word.attributes;
                    this.captures[word.name].timestamp = Math.floor(new Date() / 1000);
                    this.captures[word.name].count += 1;

                    if ("image" in word) {
                        this.captures[word.name]["image"] = word.image;
                    }

                    if ("user" in word) {
                        this.captures[word.name]["user"] = word.user;
                    }
                } else if ("user" in word) {
                    if ("image" in word) {
                        this.captures[word.name] = { name: word.name, attributes: word.attributes, image: word.image, user: word.user, timestamp: Math.floor(new Date() / 1000), count: 1 };
                    } else {
                        this.captures[word.name] = { name: word.name, attributes: word.attributes, user: word.user, timestamp: Math.floor(new Date() / 1000), count: 1 };
                    }
                } else if ("image" in word) {
                    this.captures[word.name] = { name: word.name, attributes: word.attributes, image: word.image, timestamp: Math.floor(new Date() / 1000), count: 1 };
                } else {
                    this.captures[word.name] = { name: word.name, attributes: word.attributes, timestamp: Math.floor(new Date() / 1000), count: 1 };
                }

                function format(format) {
                    var args = arguments;

                    return format.replace(/\{(\d)\}/g, function (m, c) { return args[parseInt(c) + 1] });
                }

                for (const obj of this.prepare(this.character.alternative.sequences.filter((x) => x.name === "Capture"), word.name)) {
                    if (obj.type === "Message") {
                        this.notify({ text: format(obj.text, word.name), accent: this.character.alternative.accent, image: this.character.alternative.image });
                    }
                }

                this.points = Math.max(0, this.points - 60);
            },
            release: function (words) {
                for (const word of words) {
                    if (word.name in this.captures) {
                        if (this.captures[word.name].count > 1) {
                            this.captures[word.name].count -= 1;
                        } else {
                            delete this.captures[word.name];
                        }
                    }
                }

                this.points -= 60 * words.length;
            },
            next: async function (path, offset, limit = 5) {
                const key = path.replace(/\//g, "_");
                const temp = this.mode[key];
                let snapshot;
                const data = [];

                this.mode[key] = null;

                /*if (offset === null) {
                    snapshot = await get(query(databaseRef(database, `${databaseRoot}/${key}`), orderByChild('timestamp'), limitToFirst(limit + 1)));
                } else {
                    snapshot = await get(query(databaseRef(database, `${databaseRoot}/${key}`), orderByChild('timestamp'), startAt(offset), limitToFirst(limit + 1)));
                }*/

                if (offset === null) {
                    if (limit === null) {
                        snapshot = await get(query(databaseRef(database, `${databaseRoot}/${path}`), orderByChild('timestamp')));
                    } else {
                        snapshot = await get(query(databaseRef(database, `${databaseRoot}/${path}`), orderByChild('timestamp'), limitToLast(limit + 1)));
                    }
                } else if (typeof (offset) === "object") {
                    if (limit === null) {
                        snapshot = await get(query(databaseRef(database, `${databaseRoot}/${path}`), orderByChild('timestamp'), startAt(Math.floor(offset.getTime() / 1000))));
                    } else {
                        snapshot = await get(query(databaseRef(database, `${databaseRoot}/${path}`), orderByChild('timestamp'), startAt(Math.floor(offset.getTime() / 1000)), limitToLast(limit + 1)));
                    }
                } else if (limit === null) {
                    snapshot = await get(query(databaseRef(database, `${databaseRoot}/${path}`), orderByChild('timestamp'), endAt(offset)));
                } else {
                    snapshot = await get(query(databaseRef(database, `${databaseRoot}/${path}`), orderByChild('timestamp'), endAt(offset), limitToLast(limit + 1)));
                }

                if (key in this.mode && snapshot.exists()) {
                    const dictionary = snapshot.val();

                    if (temp !== null && temp.length > 0) {
                        this.mode.indexes.push(temp[temp.length - 1]);
                    }

                    for (const id in dictionary) {
                        dictionary[id]["id"] = id;
                        dictionary[id]["date"] = new Date(dictionary[id].timestamp * 1000);

                        if ("image" in dictionary[id]) {
                            try {
                                const response = await fetch(await getDownloadURL(storageRef(storage, dictionary[id].image.path)));

                                if (response.ok) {
                                    const blob = await response.blob();

                                    dictionary[id]["image"]["url"] = await this.resizeImage(await new Promise(async (resolve, reject) => {
                                        const reader = new FileReader();

                                        reader.onload = () => {
                                            resolve(reader.result);
                                        };
                                        reader.onerror = () => {
                                            reject(reader.error);
                                        };
                                        reader.readAsDataURL(blob);
                                    }), 512);
                                }
                            } catch (e) {
                                console.error(e);
                            }
                        }

                        data.push(dictionary[id]);
                    }

                    data.sort((x, y) => {
                        if (x.timestamp < y.timestamp) {
                            return 1;
                        } else if (x.timestamp > y.timestamp) {
                            return -1;
                        }

                        return 0;
                    });

                    if (limit !== null && data.length === limit + 1) {
                        this.mode.next = data.pop();
                    } else {
                        this.mode.next = null;
                    }
                }

                this.mode[key] = data;
            },
            previous: async function (path, offset, limit = 5) {
                const key = path.replace(/\//g, "_");
                const temp = this.mode[key];

                this.mode[key] = null;

                const snapshot = await get(query(databaseRef(database, `${databaseRoot}/${path}`), orderByChild('timestamp'), startAt(offset), limitToFirst(limit)));
                const data = [];

                if (key in this.mode && snapshot.exists()) {
                    const dictionary = snapshot.val();

                    if (temp !== null && temp.length > 0) {
                        this.mode.next = temp[0];
                    }

                    for (const id in dictionary) {
                        dictionary[id]["id"] = id;

                        if ("image" in dictionary[id]) {
                            try {
                                const response = await fetch(await getDownloadURL(storageRef(storage, dictionary[id].image.path)));

                                if (response.ok) {
                                    const blob = await response.blob();

                                    dictionary[id]["image"]["url"] = await this.resizeImage(await new Promise(async (resolve, reject) => {
                                        const reader = new FileReader();

                                        reader.onload = () => {
                                            resolve(reader.result);
                                        };
                                        reader.onerror = () => {
                                            reject(reader.error);
                                        };
                                        reader.readAsDataURL(blob);
                                    }), 512);
                                }
                            } catch (e) {
                                console.error(e);
                            }
                        }

                        data.push(dictionary[id]);
                    }

                    data.sort((x, y) => {
                        if (x.timestamp < y.timestamp) {
                            return 1;
                        } else if (x.timestamp > y.timestamp) {
                            return -1;
                        }

                        return 0;
                    });
                }

                this.mode[key] = data;
            },
            learn: async function (word) {
                function format(format) {
                    var args = arguments;

                    return format.replace(/\{(\d)\}/g, function (m, c) { return args[parseInt(c) + 1] });
                }

                const sequence = [];
                const attributes = [];
                let modifier;
                let image = null;
                let wordName;

                if (typeof (word) === "string") {
                    const snapshot = await get(databaseRef(database, `${databaseRoot}/dictionary/words/${word}`));

                    if (snapshot.exists()) {
                        const w = snapshot.val();

                        for (const attribute of this.attributes) {
                            if (attribute in w.attributes) {
                                if (w.attributes[attribute] > 0) {
                                    attributes.push({ name: attribute, value: true });
                                } else {
                                    attributes.push({ name: attribute, value: false });
                                }
                            }
                        }

                        if ("image" in w) {
                            image = { path: w.image.path, url: await getDownloadURL(storageRef(storage, w.image.path)), type: w.image.type };
                        }

                        const s = await get(databaseRef(database, `${databaseRoot}/dictionary/modifiers/words/${word}`));

                        modifier = { enabled: s.exists(), selected: false };
                    } else {
                        for (const attribute of this.attributes) {
                            attributes.push({ name: attribute, value: false });
                        }

                        const s = await get(databaseRef(database, `${databaseRoot}/dictionary/modifiers/words/${word}`));

                        if (s.exists()) {
                            modifier = { enabled: true, selected: true };
                        } else {
                            modifier = { enabled: false, selected: false };
                        }
                    }

                    wordName = word;
                } else if ("attributes" in word) {
                    if (Array.isArray(word.attributes)) {
                        for (const attribute of this.attributes) {
                            if (word.attributes.includes(attribute)) {
                                attributes.push({ name: attribute, value: true });
                            } else {
                                attributes.push({ name: attribute, value: false });
                            }
                        }
                    } else {
                        for (const attribute of this.attributes) {
                            if (attribute in word.attributes) {
                                if (word.attributes[attribute] > 0) {
                                    attributes.push({ name: attribute, value: true });
                                } else {
                                    attributes.push({ name: attribute, value: false });
                                }
                            }
                        }
                    }

                    if ("image" in word) {
                        image = { path: word.image.path, url: await getDownloadURL(storageRef(storage, word.image.path)), type: word.image.type };
                    }

                    const s = await get(databaseRef(database, `${databaseRoot}/dictionary/modifiers/words/${word.name}`));

                    modifier = { enabled: s.exists(), selected: false };
                    wordName = word.name;
                } else {
                    const snapshot = await get(databaseRef(database, `${databaseRoot}/dictionary/words/${word.name}`));

                    if (snapshot.exists()) {
                        const w = snapshot.val();

                        for (const attribute of this.attributes) {
                            if (attribute in w.attributes) {
                                if (w.attributes[attribute] > 0) {
                                    attributes.push({ name: attribute, value: true });
                                } else {
                                    attributes.push({ name: attribute, value: false });
                                }
                            }
                        }

                        if ("image" in w) {
                            image = { path: w.image.path, url: await getDownloadURL(storageRef(storage, w.image.path)), type: w.image.type };
                        }
                    } else {
                        for (const attribute of this.attributes) {
                            attributes.push({ name: attribute, value: false });
                        }
                    }

                    modifier = { enabled: true, selected: true };
                    wordName = word.name;
                }

                this.word = image === null ? { name: wordName, attributes: attributes, modifier: modifier } : { name: wordName, image: image, attributes: attributes, modifier: modifier };

                /*for (const obj of this.prepare(this.character.alternative.sequences.filter((x) => x.name === "Learn"), word.name, this.character.alternative.sequences)) {
                    if (obj.type === "Message") {
                        sequence.push({ type: obj.type, speed: obj.speed, duration: obj.duration, character: this.character.alternative, text: format(obj.text, word.name) });
                    } else {
                        obj["character"] = this.character.alternative;
                        sequence.push(obj);
                    }
                }

                if (sequence.length > 0) {
                    this.sequenceQueue.push(sequence);
                }*/

                for (const obj of this.prepare(this.character.sequences.filter((x) => x.name === "Learn"))) {
                    if (obj.type === "Message") {
                        sequence.push({ type: obj.type, speed: obj.speed, duration: obj.duration, text: format(obj.text, wordName) });
                    } else {
                        sequence.push(obj);
                    }
                }

                if (sequence.length > 0) {
                    this.sequenceQueue.push(sequence);
                }
            },
            activate: async function (tokens = [], threshold = 0.5, logging = false) {
                let successful;
                let sequence;

                idleTime = activateTime = 0.0;

                if (Math.random() < threshold) {
                    function _random(min, max) {
                        min = Math.ceil(min);
                        max = Math.floor(max);

                        return Math.floor(Math.random() * (max - min)) + min;
                    }

                    const words = this.words.filter((x => "timestamp" in x))
                    const i = _random(0, words.length);

                    if (i > 0) {
                        function shuffle(array) {
                            let a = [].concat(array);
                            let n = array.length;

                            while (n > 1) {
                                const k = _random(0, n);

                                n--;

                                const temp = a[n];

                                a[n] = a[k];
                                a[k] = temp;
                            }

                            return a;
                        }

                        const selectedTokens = [];

                        for (const word of this.take(shuffle(words), i)) {
                            if (!tokens.some(x => (Array.isArray(x) ? x[1].name : typeof (x) === "object" ? x.name : x) === word.name) && word.name.indexOf(this.character.name) === -1) {
                                selectedTokens.push(word.name);
                            }
                        }

                        [successful, sequence] = await this.talk(selectedTokens.concat(tokens.filter((x) => (Array.isArray(x) ? x[1].name : typeof (x) === "object" ? x.name : x).indexOf(this.character.name) === -1)));

                        if (!successful) {
                            [successful, sequence] = await this.talk();
                        }

                        if (this.user !== null) {
                            if (logging) {
                                for (const token of tokens) {
                                    await this.log(Array.isArray(token) ? token[0] + token[1].name : typeof (token) === "object" ? token.name : token, 'link' in this.user ? { id: this.user.uid, name: this.user.displayName, image: this.user.photoURL, link: this.user.link } : { id: this.user.uid, name: this.user.displayName, image: this.user.photoURL });
                                }

                                for (const obj of sequence) {
                                    if (obj.type === "Message") {
                                        await this.log(obj.text, { name: this.character.name, accent: this.character.accent, image: this.character.image });
                                    }
                                }
                            }
                        }

                        return;
                    }
                }

                [successful, sequence] = await this.talk(tokens.filter((x) => (Array.isArray(x) ? x[1].name : typeof (x) === "object" ? x.name : x).indexOf(this.character.name) === -1))

                if (!successful) {
                    [successful, sequence] = await this.talk();
                }

                if (this.user !== null) {
                    if (logging) {
                        for (const token of tokens) {
                            await this.log(Array.isArray(token) ? token[0] + token[1].name : typeof (token) === "object" ? token.name : token, 'link' in this.user ? { id: this.user.uid, name: this.user.displayName, image: this.user.photoURL, link: this.user.link } : { id: this.user.uid, name: this.user.displayName, image: this.user.photoURL });
                        }

                        for (const obj of sequence) {
                            if (obj.type === "Message") {
                                await this.log(obj.text, { name: this.character.name, accent: this.character.accent, image: this.character.image });
                            }
                        }
                    }
                }
            },
            talk: async function (tokens = []) {
                let sequences = this.character.sequences.filter((x) => x.name === "Activate");
                let sequence = [];

                this.isLoading = true;

                if (tokens.length > 0) {
                    function _random(min, max) {
                        min = Math.ceil(min);
                        max = Math.floor(max);

                        return Math.floor(Math.random() * (max - min)) + min;
                    }

                    function shuffle(array) {
                        function _random(min, max) {
                            min = Math.ceil(min);
                            max = Math.floor(max);

                            return Math.floor(Math.random() * (max - min)) + min;
                        }

                        let a = [].concat(array);
                        let n = array.length;

                        while (n > 1) {
                            const k = _random(0, n);

                            n--;

                            const temp = a[n];

                            a[n] = a[k];
                            a[k] = temp;
                        }

                        return a;
                    }

                    const regex = new RegExp("[.#$\\[\\]]");
                    const timestamp = Math.floor(new Date() / 1000);
                    const timeout = 60 * 60;
                    const tempStates = Object.assign({}, this.states);
                    const segmenter = new TinySegmenter();
                    const attributes = [];
                    const tokenSet = [];

                    for (const token of tokens) {
                        if (typeof (token) === "string") {
                            if (!regex.test(token)) {
                                if (token in this.wordDictionary === false || timestamp - this.wordDictionary[token].timestamp >= timeout) {
                                    const snapshot = await get(databaseRef(database, databaseRoot + "/words/" + token));

                                    this.wordDictionary[token] = { attributes: [], timestamp: timestamp };

                                    if (snapshot.exists()) {
                                        const word = snapshot.val();

                                        for (const attribute in word.attributes) {
                                            if (typeof (word.attributes[attribute]) === "number" && word.attributes[attribute] > 0 && this.attributes.includes(attribute)) {
                                                this.wordDictionary[token].attributes.push(attribute);
                                            }
                                        }
                                    }
                                }

                                for (const attribute of this.wordDictionary[token].attributes) {
                                    if (!attributes.includes(attribute)) {
                                        attributes.push(attribute);
                                    }
                                }
                            }
                        } else {
                            const json = JSON.stringify(token);
                            const word = Array.isArray(token) ? token[1] : token;

                            if (json in this.wordDictionary === false || timestamp - this.wordDictionary[json].timestamp >= timeout) {
                                this.wordDictionary[json] = { attributes: [], timestamp: timestamp };

                                for (const attribute in word.attributes) {
                                    if (typeof (word.attributes[attribute]) === "number" && word.attributes[attribute] > 0 && this.attributes.includes(attribute)) {
                                        this.wordDictionary[json].attributes.push(attribute);
                                    }
                                }
                            }

                            for (const attribute of this.wordDictionary[json].attributes) {
                                if (!attributes.includes(attribute)) {
                                    attributes.push(attribute);
                                }
                            }
                        }
                    }

                    for (const s of shuffle(sequences)) {
                        const preparedSequence = this.prepare([s]);
                        let isAborted = false;

                        for (const o of preparedSequence) {
                            if (o.type == "Message") {
                                for (const token of Array.isArray(o.text) ? o.text : segmenter.segment(o.text)) {
                                    if (Array.isArray(token)) {
                                        for (const obj of preparedSequence) {
                                            if (obj.type == "Message") {
                                                const temp = await this.generate(obj.text, tokens);

                                                if (temp === null) {
                                                    isAborted = true;

                                                    break;
                                                } else {
                                                    let text;
                                                    let cache;

                                                    [text, cache] = temp;

                                                    sequence.push({ type: obj.type, speed: obj.speed, duration: obj.duration, text: text });
                                                }

                                            } else {
                                                sequence.push(obj);
                                            }
                                        }

                                        if (isAborted) {
                                            break;
                                        }

                                        if (sequence.length > 0) {
                                            this.sequenceQueue.push(sequence);
                                        }

                                        this.isLoading = false;

                                        return [true, sequence];
                                    } else if (token.length > 1 && !regex.test(token) && !tokenSet.includes(token)) {
                                        if (token in this.wordDictionary === false || timestamp - this.wordDictionary[token].timestamp >= timeout) {
                                            const snapshot = await get(databaseRef(database, databaseRoot + "/words/" + token));

                                            this.wordDictionary[token] = { attributes: [], timestamp: timestamp };

                                            if (snapshot.exists()) {
                                                const word = snapshot.val();

                                                for (const attribute in word.attributes) {
                                                    if (typeof (word.attributes[attribute]) === "number" && word.attributes[attribute] > 0 && this.attributes.includes(attribute)) {
                                                        this.wordDictionary[token].attributes.push(attribute);
                                                    }
                                                }
                                            }
                                        }

                                        for (const attribute of this.wordDictionary[token].attributes) {
                                            if (attributes.includes(attribute)) {
                                                for (const obj of preparedSequence) {
                                                    if (obj.type == "Message") {
                                                        const temp = await this.generate(obj.text, tokens);

                                                        if (temp === null) {
                                                            isAborted = true;

                                                            break;
                                                        } else {
                                                            let text;
                                                            let cache;

                                                            [text, cache] = temp;

                                                            sequence.push({ type: obj.type, speed: obj.speed, duration: obj.duration, text: text });
                                                        }
                                                    } else {
                                                        sequence.push(obj);
                                                    }
                                                }

                                                if (isAborted) {
                                                    break;
                                                }

                                                if (sequence.length > 0) {
                                                    this.sequenceQueue.push(sequence);
                                                }

                                                this.isLoading = false;

                                                return [true, sequence];
                                            }
                                        }

                                        tokenSet.push(token);
                                    }
                                }
                            }

                            if (isAborted) {
                                sequence.splice(0);

                                break;
                            }
                        }

                        this.states = tempStates;
                    }

                    this.isLoading = false;

                    return [false, null];
                }

                for (const obj of this.prepare(sequences)) {
                    if (obj.type === "Message") {
                        const temp = await this.generate(obj.text);

                        if (temp === null) {
                            this.isLoading = false;

                            return [false, null];
                        } else {
                            let text;
                            let cache;

                            [text, cache] = temp;

                            sequence.push({ type: obj.type, speed: obj.speed, duration: obj.duration, text: text });
                        }
                    } else {
                        sequence.push(obj);
                    }
                }

                if (sequence.length > 0) {
                    this.sequenceQueue.push(sequence);
                    this.isLoading = false;

                    return [true, sequence];
                }

                this.isLoading = false;

                return [false, null];
            },
            generate: async function (message, hints = [], strict = true) {
                function choice(probabilities) {
                    const r = Math.random();
                    let sum = 0.0;
                    let index = 0;

                    for (let probability of probabilities) {
                        if (sum <= r && r < sum + probability) {
                            break;
                        }

                        sum += probability;
                        index++;
                    }

                    return index;
                }

                function softmax(x) {
                    let y = [];
                    let max = Number.MIN_VALUE;
                    let sum = 0.0;

                    for (let i = 0; i < x.length; i++) {
                        if (x[i] > max) {
                            max = x[i];
                        }
                    }

                    for (let i = 0; i < x.length; i++) {
                        sum += Math.exp(x[i] - max);
                    }

                    for (let i = 0; i < x.length; i++) {
                        y.push(Math.exp(x[i] - max) / sum);
                    }

                    return y;
                }

                const timestamp = Math.floor(new Date() / 1000);
                const timeout = 60 * 60;
                const segmenter = new TinySegmenter();
                const tokens = Array.isArray(message) ? message : segmenter.segment(message);
                const hintDictionary = {};
                const tokenSet = [];
                const regex = new RegExp("[.#$\\[\\]]");
                const cachDictionary = {};
                const text = [];
                let index = 0;
                const epsilon = Math.pow(10, -6);
                const beamWidth = 10;
                let sequences = [{ sequence: [], score: 1.0 }]

                for (const token of hints) {
                    if (typeof (token) === "string") {
                        if (!regex.test(token)) {
                            if (token in this.wordDictionary === false || timestamp - this.wordDictionary[token].timestamp >= timeout) {
                                const snapshot = await get(databaseRef(database, databaseRoot + "/words/" + token));

                                this.wordDictionary[token] = { attributes: [], timestamp: timestamp };

                                if (snapshot.exists()) {
                                    const word = snapshot.val();

                                    for (const attribute in word.attributes) {
                                        if (typeof (word.attributes[attribute]) === "number" && word.attributes[attribute] > 0 && this.attributes.includes(attribute)) {
                                            this.wordDictionary[token].attributes.push(attribute);
                                        }
                                    }
                                }
                            }

                            for (const attribute of this.wordDictionary[token].attributes) {
                                if (attribute in hintDictionary) {
                                    hintDictionary[attribute].push(token);
                                } else {
                                    hintDictionary[attribute] = [token];
                                }
                            }
                        }
                    } else {
                        const json = JSON.stringify(token);
                        const word = Array.isArray(token) ? token[1] : token;

                        if (json in this.wordDictionary === false || timestamp - this.wordDictionary[json].timestamp >= timeout) {
                            this.wordDictionary[json] = { attributes: [], timestamp: timestamp };

                            for (const attribute in word.attributes) {
                                if (typeof (word.attributes[attribute]) === "number" && word.attributes[attribute] > 0 && this.attributes.includes(attribute)) {
                                    this.wordDictionary[json].attributes.push(attribute);
                                }
                            }
                        }

                        for (const attribute of this.wordDictionary[json].attributes) {
                            if (attribute in hintDictionary) {
                                hintDictionary[attribute].push(token);
                            } else {
                                hintDictionary[attribute] = [token];
                            }
                        }
                    }
                }

                for (const token of tokens) {
                    if (!tokenSet.includes(JSON.stringify(token))) {
                        if (Array.isArray(token)) {
                            const terms = [];
                            const scores = [];

                            for (const attribute of token) {
                                if (attribute in hintDictionary) {
                                    for (const obj of hintDictionary[attribute]) {
                                        if (typeof (obj) === "string") {
                                            if (!terms.some(x => x.name === obj)) {
                                                let isNew = true;

                                                terms.push({ name: obj, modifier: null, attributes: this.wordDictionary[obj].attributes });

                                                for (const tag of this.tags) {
                                                    if (obj === tag.name) {
                                                        scores.push(tag.score);
                                                        isNew = false;

                                                        break;
                                                    }
                                                }

                                                if (isNew) {
                                                    scores.push(epsilon);
                                                }
                                            }
                                        } else {
                                            let name;
                                            let modifier;

                                            if (Array.isArray(obj)) {
                                                name = obj[1].name;
                                                modifier = obj[0];
                                            } else {
                                                name = obj.name;
                                                modifier = null;
                                            }

                                            if (!terms.some(x => x.name === name && x.modifier === modifier)) {
                                                let isNew = true;

                                                terms.push({ name: name, modifier: modifier, attributes: this.wordDictionary[JSON.stringify(obj)].attributes });

                                                for (const tag of this.tags) {
                                                    if (name === tag.name) {
                                                        scores.push(tag.score);
                                                        isNew = false;

                                                        break;
                                                    }
                                                }

                                                if (isNew) {
                                                    scores.push(epsilon);
                                                }
                                            }
                                        }
                                    }
                                } else {
                                    if (attribute in this.reverseWordDictionary === false || timestamp - this.reverseWordDictionary[attribute].timestamp >= timeout) {
                                        const snapshot = await get(query(databaseRef(database, databaseRoot + "/words"), orderByChild(`attributes/${attribute}`), limitToLast(100), startAt(1)));

                                        this.reverseWordDictionary[attribute] = { words: [], timestamp: timestamp };

                                        if (snapshot.exists()) {
                                            const words = snapshot.val();

                                            for (const word in words) {
                                                this.reverseWordDictionary[attribute].words.push(word);
                                            }
                                        }
                                    }

                                    for (const word of this.reverseWordDictionary[attribute].words) {
                                        if (!terms.some(x => x.name === word)) {
                                            let isNew = true;

                                            if (word in this.wordDictionary === false) {
                                                const snapshot = await get(databaseRef(database, databaseRoot + "/words/" + word));

                                                this.wordDictionary[word] = { attributes: [], timestamp: timestamp };

                                                if (snapshot.exists()) {
                                                    const w = snapshot.val();

                                                    for (const a in w.attributes) {
                                                        if (typeof (w.attributes[a]) === "number" && w.attributes[a] > 0 && this.attributes.includes(a)) {
                                                            this.wordDictionary[word].attributes.push(a);
                                                        }
                                                    }
                                                }
                                            }

                                            terms.push({ name: word, modifier: null, attributes: this.wordDictionary[word].attributes });

                                            for (const tag of this.tags) {
                                                if (word == tag.name) {
                                                    scores.push(tag.score);
                                                    isNew = false;

                                                    break;
                                                }
                                            }

                                            if (isNew) {
                                                scores.push(epsilon);
                                            }
                                        }
                                    }
                                }
                            }

                            if (terms.length > 0 && scores.length > 0) {
                                const probabilities = softmax(scores);
                                let candidates = [];

                                for (let i = 0; i < sequences.length; i++) {
                                    for (let j = 0; j < probabilities.length; j++) {
                                        let sequence = [].concat(sequences[i].sequence);

                                        sequence.push({ index: index, term: terms[j] });
                                        candidates.push({ sequence: sequence, score: sequences[i].score * probabilities[j] });
                                    }
                                }

                                sequences.splice(0);

                                for (const candidate of this.take(candidates.sort((x, y) => y.score - x.score), beamWidth)) {
                                    sequences.push(candidate);
                                }
                            }
                        }

                        tokenSet.push(JSON.stringify(token));
                    }

                    index++;
                }

                if (strict && hints.length > 0) {
                    sequences = sequences.filter(x => x.sequence.some(y => hints.some(z => {
                        if (Array.isArray(z)) {
                            return z[1].name === y.term.name && z[0] === y.term.modifier;
                        } else if (typeof (z) === "object") {
                            return z.name === y.term.name;
                        }

                        return z === y.term.name;
                    })));

                    if (sequences.length === 0) {
                        return null;
                    }
                }

                const s = sequences[choice(softmax(sequences.map(x => x.score)))];

                for (let i = 0; i < tokens.length; i++) {
                    const key = JSON.stringify(tokens[i]);

                    if (key in cachDictionary) {
                        if (typeof cachDictionary[key] === "undefined") {
                            text.push(tokens[i]);
                        } else {
                            const term = cachDictionary[key];

                            if (term.modifier === null) {
                                text.push({ name: term.name, attributes: term.attributes });
                            } else {
                                text.push([term.modifier, { name: term.name, attributes: term.attributes }]);
                            }
                        }
                    } else {
                        let isNew = true;

                        for (let j = 0; j < s.sequence.length; j++) {
                            if (s.sequence[j].index == i) {
                                if (key == s.sequence[j].term.name) {
                                    cachDictionary[key] = undefined;
                                } else {
                                    cachDictionary[key] = s.sequence[j].term;

                                    if (s.sequence[j].term.modifier === null) {
                                        text.push({ name: s.sequence[j].term.name, attributes: s.sequence[j].term.attributes });
                                    } else {
                                        text.push([s.sequence[j].term.modifier, { name: s.sequence[j].term.name, attributes: s.sequence[j].term.attributes }]);
                                    }

                                    isNew = false;
                                }

                                break;
                            }
                        }

                        if (isNew) {
                            if (Array.isArray(tokens[i])) {
                                return null;
                            }

                            text.push(tokens[i]);
                        }
                    }
                }

                return [text, cachDictionary];
            },
            notify: function (data, duration = 3000) {
                const self = this;

                data["id"] = window.setTimeout((d) => {
                    for (let i = 0; i < self.notifications.length; i++) {
                        if (self.notifications[i].id === d.id) {
                            self.notifications.splice(i, 1);

                            break;
                        }
                    }
                }, duration, data);

                this.notifications.unshift(data);
            },
            preload: function () {
                if (Math.floor(new Date() / 1000) - this.background.timestamp >= 60) {
                    this.background.nonce = this.generateNonce(8);
                }
            },
            blinded: async function () {
                if (this.background.timeout.id === null) {
                    const nonce = this.background.nonce;

                    try {
                        const snapshot = await get(query(databaseRef(database, `${databaseRoot}/backgrounds`), orderByChild('random'), startAt(Math.random()), limitToFirst(10)));

                        if (snapshot.exists()) {
                            function choice(collection, func) {
                                const r = Math.random();
                                let sum = 0.0;
                                let index = 0;

                                for (let item of collection) {
                                    const probability = func(item);

                                    if (sum <= r && r < sum + probability) {
                                        break;
                                    }

                                    sum += probability;
                                    index++;
                                }

                                return collection[index];
                            }

                            function softmax(x, func1, func2) {
                                let y = [].concat(x);
                                let max = Number.MIN_VALUE;
                                let sum = 0.0;

                                for (let i = 0; i < x.length; i++) {
                                    if (func1(x[i]) > max) {
                                        max = func1(x[i]);
                                    }
                                }

                                for (let i = 0; i < x.length; i++) {
                                    sum += Math.exp(func1(x[i]) - max);
                                }

                                for (let i = 0; i < x.length; i++) {
                                    func2(y[i], Math.exp(func1(x[i]) - max) / sum);
                                }

                                return y;
                            }

                            const dictionary = snapshot.val();
                            const images = [];

                            for (const key in dictionary) {
                                dictionary[key]["probability"] = 1;

                                images.push(dictionary[key]);
                            }

                            const path = choice(softmax(images, x => x.probability, (x, y) => x.probability = y), x => x.probability).image.path;
                            const metadata = await getMetadata(storageRef(storage, path));

                            if (metadata.contentType === 'image/apng' || metadata.contentType === 'image/gif' || metadata.contentType === 'image/webp') {
                                try {
                                    const blob = await this.download(await getDownloadURL(storageRef(storage, path)));

                                    if (blob !== null && this.background.nonce === nonce) {
                                        const [image, width, height] = await new Promise(async (resolve, reject) => {
                                            const reader = new FileReader();

                                            reader.onload = () => {
                                                const image = new Image();

                                                image.src = reader.result;
                                                image.onload = () => {
                                                    resolve([reader.result, image.width, image.height]);
                                                };
                                                image.onerror = (e) => {
                                                    reject(e);
                                                };
                                            };
                                            reader.onerror = () => {
                                                reject(reader.error);
                                            };
                                            reader.readAsDataURL(blob);
                                        });
                                        this.background.image = image;
                                        this.background.width = width;
                                        this.background.height = height;
                                        this.background.timestamp = Math.floor(new Date() / 1000);
                                        this.background.nonce = null;

                                        const timeout = window.setTimeout(() => {
                                            this.background.timeout.id = timeout;
                                        }, this.background.timeout.duration);

                                        return;
                                    }
                                } catch (e) {
                                    console.error(e);
                                }
                            } else if (this.background.nonce === nonce) {
                                this.background.image = await new Promise(async (resolve, reject) => {
                                    const reader = new FileReader();

                                    reader.onload = () => {
                                        resolve(reader.result);
                                    };
                                    reader.onerror = () => {
                                        reject(reader.error);
                                    };
                                    reader.readAsDataURL(await this.getThumbnail(await getDownloadURL(storageRef(storage, path)), Math.max(window.screen.width, window.screen.height)));
                                });
                                this.background.timestamp = Math.floor(new Date() / 1000);
                                this.background.nonce = null;

                                const timeout = window.setTimeout(() => {
                                    this.background.timeout.id = timeout;
                                }, this.background.timeout.duration);

                                return;
                            }
                        }
                    } catch (e) {
                        this.notify({ text: e.message, accent: this.character.accent, image: this.character.image });
                        console.error(e);
                    }

                    if (this.background.nonce === nonce) {
                        this.background.image = undefined;
                        this.background.timestamp = 0;
                        this.background.nonce = null;
                    }
                } else {
                    this.background.image = null;
                    this.background.timestamp = 0;
                    this.background.timeout.id = null;
                    this.background.nonce = null;
                }

                /*if (this.backgroundQueue.length === 0) {
                    if (this.likes.length > 0) {
                        function shuffle(array) {
                            function _random(min, max) {
                                min = Math.ceil(min);
                                max = Math.floor(max);

                                return Math.floor(Math.random() * (max - min)) + min;
                            }

                            let a = [].concat(array);
                            let n = array.length;

                            while (n > 1) {
                                const k = _random(0, n);

                                n--;

                                const temp = a[n];

                                a[n] = a[k];
                                a[k] = temp;
                            }

                            return a;
                        }

                        for (const like of shuffle(this.likes)) {
                            if (typeof (like.text) === "object" && Object.values(like.text).some(x => typeof (x) === "object")) {
                                this.backgroundQueue.push(like);
                            }
                        }
                    } else {
                        this.backgroundQueue.push({});
                    }
                }

                const background = this.backgroundQueue.shift();

                this.background.images.splice(0);*/

                /*if ('color' in background) {
                    this.background.color = background.color;
                } else {
                    this.background.color = null;
                }*/

                /*if ('images' in background) {
                    for (const image of background.images) {
                        try {
                            const metadata = await getMetadata(storageRef(storage, image.path));

                            if (metadata.contentType === 'image/apng' || metadata.contentType === 'image/gif' || metadata.contentType === 'image/webp') {
                                try {
                                    const blob = await this.download(await getDownloadURL(storageRef(storage, image.path)));

                                    if (blob !== null) {
                                        this.background.images.push({
                                            id: background.id, url: await new Promise(async (resolve, reject) => {
                                                const reader = new FileReader();

                                                reader.onload = () => {
                                                    resolve(reader.result);
                                                };
                                                reader.onerror = () => {
                                                    reject(reader.error);
                                                };
                                                reader.readAsDataURL(blob);
                                            }), timestamp: background.timestamp
                                        });
                                    }
                                } catch (e) {
                                    console.error(e);
                                }
                            } else {
                                this.background.images.push({
                                    id: background.id, url: await new Promise(async (resolve, reject) => {
                                        const reader = new FileReader();

                                        reader.onload = () => {
                                            resolve(reader.result);
                                        };
                                        reader.onerror = () => {
                                            reject(reader.error);
                                        };
                                        reader.readAsDataURL(await this.getThumbnail(await getDownloadURL(storageRef(storage, image.path)), Math.max(window.screen.width, window.screen.height)));
                                    }), timestamp: background.timestamp
                                });
                            }
                        } catch (e) {
                            this.notify({ text: e.message, accent: this.character.accent, image: this.character.image });
                            console.error(e);
                        }
                    }
                }

                if ('image' in background) {
                    try {
                        const metadata = await getMetadata(storageRef(storage, background.image.path));

                        if (metadata.contentType === 'image/apng' || metadata.contentType === 'image/gif' || metadata.contentType === 'image/webp') {
                            try {
                                const blob = await this.download(await getDownloadURL(storageRef(storage, background.image.path)));

                                if (blob !== null) {
                                    this.background.images.push({
                                        id: background.id, url: await new Promise(async (resolve, reject) => {
                                            const reader = new FileReader();

                                            reader.onload = () => {
                                                resolve(reader.result);
                                            };
                                            reader.onerror = () => {
                                                reject(reader.error);
                                            };
                                            reader.readAsDataURL(blob);
                                        }), timestamp: background.timestamp
                                    });
                                }
                            } catch (e) {
                                console.error(e);
                            }
                        } else {
                            this.background.images.push({
                                id: background.id, url: await new Promise(async (resolve, reject) => {
                                    const reader = new FileReader();

                                    reader.onload = () => {
                                        resolve(reader.result);
                                    };
                                    reader.onerror = () => {
                                        reject(reader.error);
                                    };
                                    reader.readAsDataURL(await this.getThumbnail(await getDownloadURL(storageRef(storage, background.image.path)), Math.max(window.screen.width, window.screen.height)));
                                }), timestamp: background.timestamp
                            });
                        }
                    } catch (e) {
                        this.notify({ text: e.message, accent: this.character.accent, image: this.character.image });
                        console.error(e);
                    }
                }

                if ("text" in background) {
                    function _random(min, max) {
                        min = Math.ceil(min);
                        max = Math.floor(max);

                        return Math.floor(Math.random() * (max - min)) + min;
                    }

                    const response = await fetch("/images/ShootingStar.svg", {
                        method: "GET"
                    });

                    if (response.ok) {
                        const dataURL = await new Promise(async (resolve, reject) => {
                            const reader = new FileReader();

                            reader.onload = () => {
                                resolve(reader.result);
                            };
                            reader.onerror = () => {
                                reject(reader.error);
                            };
                            reader.readAsDataURL(await response.blob());
                        });

                        if (background.id in this.background.shootingStars === false) {
                            const self = this;
                            const offset = _random(-100, 100);
                            const degrees = -45;
                            const text = typeof (background.text) === "string" ? background.text : Object.keys(background.text).sort((x, y) => x - y).reduce((x, y) => x + (typeof (background.text[y]) === "string" ? background.text[y] : background.text[y].name), "");

                            this.background.shootingStars[background.id] = { text: text, author: background.author, url: dataURL, offset: offset, x: 100, y: 0, opacity: 0, rotation: degrees, delay: _random(0, 1000), duration: text.length * 1000, state: "running" };

                            anime({
                                targets: self.background.shootingStars[background.id],
                                x: [{ value: 0, delay: 0, easing: "linear" }],
                                y: [{ value: 100, delay: 0, easing: "linear" }],
                                opacity: [{ value: 1, easing: "easeOutSine" }, { value: 0, delay: 0, easing: "easeInSine" }],
                                delay: _random(0, 1000),
                                duration: text.length * 1000,
                                round: 100,
                                complete: () => {
                                    delete self.background.shootingStars[background.id];
                                }
                            });
                        }
                    }

                    this.background.tags = background.text.reduce((x, y) => {
                        if (typeof (y) === "object") {
                            x.push(y.name);
                        }

                        return x;
                    }, []);
                    this.activate(this.background.tags.filter((x) => x.indexOf(this.character.name) === -1), 0.0);
                } else if ("tags" in background) {
                    this.background.tags = background.tags.sort((x, y) => {
                        if (x > y) {
                            return 1;
                        } else if (x < y) {
                            return -1;
                        }

                        return 0;
                    });
                    this.activate(background.tags.filter((x) => x.indexOf(this.character.name) === -1), 0.0);
                } else {
                    this.background.tags = null;
                }*/

                //this.isBlinded = false;
            },
            timeout: function (duration, func) {
                window.setTimeout(() => {
                    func();
                }, duration);
            },
            update: async function (data, max) {
                this.isUpdating = true;

                try {
                    const results = await new Promise(resolve => {
                        const epsilon = Math.pow(10, -6);
                        let documents = [];
                        let filteredDocuments = [];
                        let termFrequencies = [];
                        let inverseDocumentFrequency = {};
                        const baseTime = new Date().getTime() - 24 * 60 * 60 * 1000;
                        const limit = 100;
                        let scoreDictionary = {};
                        let scores = [];
                        let maxScore = epsilon;

                        for (const key in data) {
                            if ("text" in data[key] && Array.isArray(data[key].text)) {
                                const tokens = data[key].text.reduce((x, y) => {
                                    if (Array.isArray(y)) {
                                        x.push(y[1].name);
                                    } else if (typeof (y) === "object") {
                                        x.push(y.name);
                                    }

                                    return x;
                                }, []);

                                if (tokens.length > 0) {
                                    const document = { tokens: tokens, timestamp: data[key].timestamp };
                                    const termSet = [];

                                    documents.push(document);

                                    for (const token of document.tokens) {
                                        if (!termSet.includes(token)) {
                                            if (token in inverseDocumentFrequency) {
                                                inverseDocumentFrequency[token] += 1.0;
                                            } else {
                                                inverseDocumentFrequency[token] = 1.0;
                                            }

                                            termSet.push(token);
                                        }
                                    }
                                }
                            }
                        }

                        for (const key in inverseDocumentFrequency) {
                            inverseDocumentFrequency[key] = Math.log(documents.length / (inverseDocumentFrequency[key] + epsilon));
                        }

                        for (const document of documents) {
                            if (document.timestamp * 1000 > baseTime) {
                                filteredDocuments.push(document);
                            }
                        }

                        if (filteredDocuments.length < limit) {
                            const min = Math.max(documents.length - limit, 0);

                            documents.sort((x, y) => x.timestamp - y.timestamp);
                            filteredDocuments.splice(0);

                            for (let i = documents.length - 1; i >= min; i--) {
                                filteredDocuments.unshift(documents[i]);
                            }
                        }

                        for (const document of filteredDocuments) {
                            let tf = {};

                            for (const token of document.tokens) {
                                if (token in tf) {
                                    tf[token] += 1.0;
                                } else {
                                    tf[token] = 1.0;
                                }
                            }

                            for (const key in tf) {
                                tf[key] /= document.tokens.length;

                                if (key in scoreDictionary === false) {
                                    scoreDictionary[key] = 0.0;
                                }
                            }

                            termFrequencies.push(tf);
                        }

                        for (const key in scoreDictionary) {
                            for (const termFrequency of termFrequencies) {
                                if (key in termFrequency) {
                                    const tfidf = termFrequency[key] * inverseDocumentFrequency[key];

                                    if (tfidf > scoreDictionary[key]) {
                                        scoreDictionary[key] = tfidf;
                                    }
                                }
                            }
                        }

                        for (const key in scoreDictionary) {
                            if (key.length > 1 && key != "...") {
                                scores.push({ term: key, value: scoreDictionary[key] });
                            }
                        }

                        scores.sort((x, y) => y.value - x.value);

                        if (scores.length > max) {
                            scores.splice(max);
                        }

                        for (const score of scores) {
                            if (score.value > maxScore) {
                                maxScore = score.value;
                            }
                        }

                        for (const score of scores) {
                            score.value /= maxScore;
                        }

                        scores.sort((x, y) => {
                            if (x.term > y.term) {
                                return 1;
                            } else if (x.term < y.term) {
                                return -1;
                            }

                            return 0;
                        });

                        resolve(scores);
                    });

                    this.tags.splice(0);

                    for (let i = 0; i < results.length; i++) {
                        this.tags.push({ index: i, name: results[i].term, score: results[i].value })
                    }
                } catch (e) {
                    this.notify({ text: e.message, accent: this.character.accent, image: this.character.image });
                    console.error(e);
                }

                this.isUpdating = false;
            },
            tweet: async function (status, image) {
                const credentialStorageItem = localStorage.getItem("credential");

                this.isTweeting = true;

                try {
                    if (credentialStorageItem) {
                        const credential = JSON.parse(credentialStorageItem);

                        if (credential.providerId === TwitterAuthProvider.PROVIDER_ID) {
                            const data = { access_token: credential.accessToken, secret: credential.secret, status: `${status} #${this.character.name} #milchchan https://milchchan.com/` };
                            let response;

                            if (image !== null) {
                                response = await fetch(image, {
                                    method: "GET"
                                });

                                if (response.ok) {
                                    data['image'] = await new Promise(async (resolve, reject) => {
                                        const reader = new FileReader();

                                        reader.onload = () => {
                                            resolve(reader.result);
                                        };
                                        reader.onerror = () => {
                                            reject(reader.error);
                                        };
                                        reader.readAsDataURL(await response.blob());
                                    });
                                }
                            }

                            response = await fetch("https://milchchan.com/api/tweet", {
                                mode: "cors",
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify(data)
                            });

                            if (response.ok) {
                                const self = this;

                                this.isTweeting = await response.json();

                                setTimeout(function () {
                                    self.isTweeting = false;
                                }, 3000);

                                return;
                            } else {
                                throw new Error(response.statusText);
                            }
                        }
                    }
                } catch (e) {
                    this.notify({ text: e.message, accent: this.character.accent, image: this.character.image });
                    console.error(e);
                }

                this.isTweeting = false;
            },
            mail: async function (text, author) {
                const user = 'link' in this.user ? { id: this.user.uid, name: this.user.displayName, image: this.user.photoURL, link: this.user.link } : { id: this.user.uid, name: this.user.displayName, image: this.user.photoURL };
                const timestamp = Math.floor(new Date() / 1000);

                this.isPosting = true;

                try {
                    const result = await runTransaction(databaseRef(database, `${databaseRoot}/mails/${push(child(databaseRef(database), `${databaseRoot}/mails`)).key}`), current => {
                        return { text: text, author: author, user: user, timestamp: timestamp };
                    });

                    if (result.committed && result.snapshot.exists()) {
                        const self = this;

                        this.isPosting = result.snapshot.val();

                        setTimeout(function () {
                            self.isPosting = false;
                        }, 3000);

                        return true;
                    }
                } catch (error) {
                    this.notify({ text: error.message, accent: this.character.accent, image: this.character.image });
                    console.error(error);
                }

                this.isPosting = false;

                return false;
            },
            log: async function (text, user) {
                const timestamp = Math.floor(new Date() / 1000);

                try {
                    await runTransaction(databaseRef(database, `${databaseRoot}/logs/${push(child(databaseRef(database), `${databaseRoot}/logs`)).key}`), current => {
                        return { text: text, user: user, timestamp: timestamp };
                    });
                } catch (error) {
                    this.notify({ text: error.message, accent: this.character.accent, image: this.character.image });
                    console.error(error);
                }

                return;
            },
            getThumbnail: async function (url, length) {
                try {
                    const blob = await this.download(url);

                    if (blob !== null) {
                        return await new Promise(async (resolve1, reject1) => {
                            const i = new Image();

                            i.onload = () => {
                                const canvas = document.createElement("canvas");

                                if (i.width > i.height) {
                                    if (i.width > length) {
                                        canvas.width = length * window.devicePixelRatio;
                                        canvas.height = Math.floor(length / i.width * i.height) * window.devicePixelRatio;
                                    } else {
                                        canvas.width = i.width * window.devicePixelRatio;
                                        canvas.height = i.height * window.devicePixelRatio;
                                    }
                                } else if (i.height > length) {
                                    canvas.width = Math.floor(length / i.height * i.width) * window.devicePixelRatio;
                                    canvas.height = length * window.devicePixelRatio;
                                } else {
                                    canvas.width = i.width * window.devicePixelRatio;
                                    canvas.height = i.height * window.devicePixelRatio;
                                }

                                const ctx = canvas.getContext("2d");

                                ctx.drawImage(i, 0, 0, canvas.width, canvas.height);
                                ctx.canvas.toBlob(blob => {
                                    resolve1(blob);
                                    ctx.canvas.width = ctx.canvas.height = 0;
                                }, "image/jpeg");
                            };
                            i.onerror = (error) => {
                                reject1(error);
                            };
                            i.crossOrigin = "anonymous";
                            i.src = await new Promise(async (resolve2, reject2) => {
                                const reader = new FileReader();

                                reader.onload = () => {
                                    resolve2(reader.result);
                                };
                                reader.onerror = () => {
                                    reject2(reader.error);
                                };
                                reader.readAsDataURL(blob);
                            });
                        });
                    }
                } catch (e) {
                    this.notify({ text: e.message, accent: this.character.accent, image: this.character.image });
                    console.error(e);
                }

                return null;
            },
            shake: function (element) {
                element.animate([
                    { transform: "translate3d(0, 0, 0)" },
                    { transform: "translate3d(8px, 0, 0)" },
                    { transform: "translate3d(-8px, 0, 0)" },
                    { transform: "translate3d(7px, 0, 0)" },
                    { transform: "translate3d(-7px, 0, 0)" },
                    { transform: "translate3d(6px, 0, 0)" },
                    { transform: "translate3d(-6px, 0, 0)" },
                    { transform: "translate3d(5px, 0, 0)" },
                    { transform: "translate3d(-5px, 0, 0)" },
                    { transform: "translate3d(4px, 0, 0)" },
                    { transform: "translate3d(-4px, 0, 0)" },
                    { transform: "translate3d(3px, 0, 0)" },
                    { transform: "translate3d(-3px, 0, 0)" },
                    { transform: "translate3d(2px, 0, 0)" },
                    { transform: "translate3d(-2px, 0, 0)" },
                    { transform: "translate3d(1px, 0, 0)" },
                    { transform: "translate3d(-1px, 0, 0)" },
                    { transform: "translate3d(0, 0, 0)" }],
                    { duration: 1000, iterations: 1 });
            },
            scrollToTop() {
                this.$nextTick(() => {
                    window.scroll(0, 0);
                });
            },
            scrollToEnd: function () {
                if (typeof this.scrollTimeoutID === "number") {
                    clearTimeout(this.scrollTimeoutID);
                }

                this.scrollTimeoutID = setTimeout(function () {
                    window.scrollTo(0, document.body.scrollHeight);
                }, 500);
            },
            digestMessage: async function (message) {
                const msgUint8 = new TextEncoder().encode(message);                           // encode as (utf-8) Uint8Array
                const hashBuffer = await crypto.subtle.digest("SHA-256", msgUint8);           // hash the message
                const hashArray = Array.from(new Uint8Array(hashBuffer));                     // convert buffer to byte array
                const hashHex = hashArray.map(b => b.toString(16).padStart(2, "0")).join(""); // convert bytes to hex string

                return hashHex;
            },
            generateNonce: function (length) {
                let text = "";
                const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

                for (let i = 0; i < length; i++) {
                    text += characters.charAt(Math.floor(Math.random() * characters.length));
                }

                return text;
            },
            animationStart: function (el) {
                this.isAnimating = true;
            },
            animationEnd: function (el) {
                const self = this;

                this.$nextTick(() => {
                    self.notificationHeight = self.$refs.notifications.getBoundingClientRect().height;
                });

                if (!this.isPopup) {
                    this.message = null;
                }

                this.isAnimating = false;
            },
            /*tickerUpdated: function (el) {
                const self = this;

                this.$nextTick(() => {
                    for (const clip of document.body.querySelectorAll(".container>.wrap>.frame .clip")) {
                        let width = 0;

                        for (const element of clip.querySelectorAll(":scope .ticker-wrap .ticker .item")) {
                            width += element.getBoundingClientRect().width;
                        }

                        if (width > 0) {
                            self.tickerWidth = Math.min(width / 2, document.body.querySelector(".container>.wrap>.frame .level").getBoundingClientRect().width);
                            clip.querySelector(":scope .ticker-wrap .ticker").style.width = width + "px";
                        }
                    }
                });
            },*/
            range: function (date, days) {
                const collection = [];

                for (const day of days) {
                    collection.push(new Date(new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()).getTime() + day * 24 * 60 * 60 * 1000));
                }

                return collection;
            },
            arrange: function (collection, limit = 5) {
                let rows = [];
                let columns = [];

                for (const item of collection) {
                    if (columns.length < limit) {
                        columns.push(item);
                    } else {
                        rows.push(columns);
                        columns = [item];
                    }
                }

                rows.push(columns);

                return rows;
            },
            take: function (collection, count) {
                if (collection.length > count) {
                    let temp = [].concat(collection);

                    temp.splice(count);

                    return temp;
                }

                return collection;
            },
            reverse: function (collection) {
                return [].concat(collection).reverse();
            },
            standardDeviation: function (collection) {
                let sum = 0.0;
                let variance = 0.0;

                for (const x of collection) {
                    sum += x;
                }

                const average = sum / collection.length;

                for (const x of collection) {
                    variance += (x - average) * (x - average);
                }

                variance /= collection.length;

                return Math.sqrt(variance);
            },
            prepare: function (sequences, state = null, selectedSequences = null) {
                function _random(min, max) {
                    min = Math.ceil(min);
                    max = Math.floor(max);

                    return Math.floor(Math.random() * (max - min)) + min;
                }

                let choosedSequences = [];
                let flattenedSequence = [];

                for (const s of sequences) {
                    let tempState = state;

                    if (state === null && s.name in this.states) {
                        tempState = this.states[s.name];
                    }

                    if (tempState !== null && "state" in s && s.state !== null) {
                        let regex = new RegExp(s.state);

                        if (regex.test(tempState)) {
                            choosedSequences.push(s);
                        }
                    }
                }

                if (choosedSequences.length === 0) {
                    for (const s of sequences) {
                        if ("state" in s === false || s.state === null) {
                            choosedSequences.push(s);
                        }
                    }

                    state = null;
                }

                if (choosedSequences.length > 0) {
                    let queue = [];

                    for (const s of choosedSequences[_random(0, choosedSequences.length)].sequence) {
                        if (state !== null) {
                            this.states[s.name] = state;
                        }

                        queue.push(s);
                    }

                    while (queue.length > 0) {
                        const obj = queue.shift();

                        if (obj.type == "Sequence") {
                            if ("sequence" in obj === false) {
                                let tracedSequences = [];
                                let callableSequences = [];

                                for (const s of selectedSequences === null ? this.character.sequences : selectedSequences) {
                                    let sequenceStack = this.getSequenceStack(s, obj);

                                    if (sequenceStack.length > 0) {
                                        let stack = [];

                                        do {
                                            let poppedSequence = sequenceStack.pop();

                                            if (sequenceStack.length > 0) {
                                                let tempStack = [];

                                                for (const o of sequenceStack[sequenceStack.length - 1].sequence) {
                                                    if (o.type == "Sequence") {
                                                        if ("sequence" in o) {
                                                            let isNew = true;

                                                            for (const tempSequence of stack) {
                                                                if (tempSequence === o) {
                                                                    isNew = false;

                                                                    break;
                                                                }
                                                            }

                                                            if (isNew) {
                                                                tempStack.push(o);
                                                            }
                                                        }

                                                        if (o === poppedSequence) {
                                                            break;
                                                        }
                                                    }
                                                }

                                                while (tempStack.length > 0) {
                                                    stack.push(tempStack.pop());
                                                }
                                            }

                                            if ("sequence" in poppedSequence) {
                                                let isNew = true;

                                                for (const tempSequence of stack) {
                                                    if (tempSequence === poppedSequence) {
                                                        isNew = false;

                                                        break;
                                                    }
                                                }

                                                if (isNew) {
                                                    stack.push(poppedSequence);
                                                }
                                            }
                                        } while (sequenceStack.length > 0);

                                        while (stack.length > 0) {
                                            tracedSequences.push(stack.pop());
                                        }
                                    }
                                    else {
                                        tracedSequences.push(s);
                                    }
                                }

                                if ("state" in obj) {
                                    this.states[obj.name] = obj.state;

                                    for (const s of tracedSequences) {
                                        if (s.name == obj.name) {
                                            let regex = new RegExp(s.state);

                                            if (!regex.test(obj.state)) {
                                                continue;
                                            }

                                            callableSequences.push(s);
                                        }
                                    }
                                } else {
                                    for (const s of tracedSequences) {
                                        if (s.name == obj.name) {
                                            if ("state" in s) {
                                                if (s.name in this.states === false) {
                                                    continue;
                                                }

                                                let regex = new RegExp(s.state);

                                                if (!regex.test(this.states[s.name])) {
                                                    continue;
                                                }
                                            }

                                            callableSequences.push(s);
                                        }
                                    }
                                }

                                if (callableSequences.length > 0) {
                                    let index = 0;

                                    for (const o of callableSequences[_random(0, callableSequences.length)].sequence) {
                                        queue.splice(index, 0, o);
                                        index++;
                                    }
                                }
                            }
                        } else {
                            flattenedSequence.push(obj);
                        }
                    }
                }

                return flattenedSequence;
            },
            getSequenceStack: function (sourceSequence, targetSequence) {
                let sequenceStack = [];

                sequenceStack.push(sourceSequence);

                if (sequenceStack[sequenceStack.length - 1] !== targetSequence) {
                    if ("sequence" in sourceSequence) {
                        for (const o of sourceSequence.sequence) {
                            if (o.type == "Sequence") {
                                let stack = this.getSequenceStack(o, targetSequence);

                                if (stack.length > 0 && stack[stack.length - 1] === targetSequence) {
                                    let tempStack = [];

                                    do {
                                        tempStack.push(stack.pop());
                                    } while (stack.length > 0);

                                    do {
                                        sequenceStack.push(tempStack.pop());
                                    } while (tempStack.length > 0);

                                    return sequenceStack;
                                }
                            }
                        }
                    }

                    sequenceStack.pop();
                }

                return sequenceStack;
            },
            animate: async function () {
                requestAnimationFrame(this.animate);

                stats.begin();

                const deltaTime = clock.getDelta();

                if (document.visibilityState === "visible" && this.character !== null && vrmModel) {
                    function _random(min, max) {
                        min = Math.ceil(min);
                        max = Math.floor(max);

                        return Math.floor(Math.random() * (max - min)) + min;
                    }

                    let isAnimating = false;
                    let isDeforming = false;
                    let animationData = null;
                    const updatedBlendShapeNames = [];

                    if (lookAnimation === null) {
                        lookAnimation = { time: 0.0, duration: 0.5, base: { x: lookAtTarget.position.x, y: lookAtTarget.position.y }, source: { x: lookAtTarget.position.x, y: lookAtTarget.position.y }, target: { x: lookAtTarget.position.x + _random(-1.0, 1.0) * 0.1, y: lookAtTarget.position.y + _random(-1.0, 1.0) * 0.1 } };
                    }

                    lookAnimation.time += deltaTime;

                    if (lookAnimation.time >= lookAnimation.duration) {
                        lookAtTarget.position.x = lookAnimation.target.x;
                        lookAtTarget.position.y = lookAnimation.target.y;

                        if (lookAnimation.base) {
                            lookAnimation = { time: 0.0, duration: 0.5, source: { x: lookAtTarget.position.x, y: lookAtTarget.position.y }, target: { x: lookAnimation.base.x, y: lookAnimation.base.y } };
                        } else {
                            lookAnimation = null;
                        }
                    } else {
                        const rate = lookAnimation.time / lookAnimation.duration;

                        lookAtTarget.position.x = lookAnimation.source.x + (lookAnimation.target.x - lookAnimation.source.x) * rate;
                        lookAtTarget.position.y = lookAnimation.source.y + (lookAnimation.target.y - lookAnimation.source.y) * rate;
                    }

                    let blinkOffset = Math.max(0, Math.min(-lookAtTarget.position.y, 1));
                    let blinkRequired = true;

                    if (this.currentAnimations.length > 0 && animationIndex < this.currentAnimations.length) {
                        animationData = this.currentAnimations[animationIndex];
                        animationIndex += animationSkipFrames;
                        isAnimating = true;
                    }

                    for (let i = this.blendShapeAnimations.length - 1; i >= 0; i--) {
                        let blendShapeAnimation = this.blendShapeAnimations[i];

                        if (!updatedBlendShapeNames.includes(blendShapeAnimation.name)) {
                            if (blendShapeAnimation.time <= blendShapeAnimation.duration) {
                                blendShapeAnimation.time += deltaTime;

                                if (blendShapeAnimation.time >= blendShapeAnimation.duration) {
                                    if (blendShapeAnimation.name == "blink") {
                                        if (vrmModel.expressionManager !== null) {
                                            vrmModel.expressionManager.setValue(blendShapeAnimation.name, 0.1 * blinkOffset + (1 - 0.1) * Math.abs(Math.sin(blendShapeAnimation.end / 2 * Math.PI)));
                                        }

                                        blinkRequired = false;
                                    } else if (vrmModel.expressionManager !== null) {
                                        vrmModel.expressionManager.setValue(blendShapeAnimation.name, Math.abs(Math.sin(blendShapeAnimation.end / 2 * Math.PI)));
                                    }

                                    this.blendShapeAnimations.splice(i, 1);
                                } else if (blendShapeAnimation.name == "blink") {
                                    if (vrmModel.expressionManager !== null) {
                                        vrmModel.expressionManager.setValue(blendShapeAnimation.name, 0.1 * blinkOffset + (1 - 0.1) * Math.abs(Math.sin((blendShapeAnimation.time / blendShapeAnimation.duration * (blendShapeAnimation.end - blendShapeAnimation.start) + blendShapeAnimation.start) / 2 * Math.PI)));
                                    }
                                    blinkRequired = false;
                                } else if (vrmModel.expressionManager !== null) {
                                    vrmModel.expressionManager.setValue(blendShapeAnimation.name, Math.abs(Math.sin((blendShapeAnimation.time / blendShapeAnimation.duration * (blendShapeAnimation.end - blendShapeAnimation.start) + blendShapeAnimation.start) / 2 * Math.PI)));
                                }

                                isDeforming = true;
                            }

                            updatedBlendShapeNames.push(blendShapeAnimation.name);
                        }
                    }

                    if (blinkRequired && vrmModel.expressionManager !== null) {
                        vrmModel.expressionManager.setValue("blink", 0.1 * blinkOffset);
                    }

                    if (this.sequenceQueue.length > 0 && Array.isArray(this.sequenceQueue[0])) {
                        idleTime = 0.0;
                    } else {
                        idleTime += deltaTime;

                        if (!this.isLoading) {
                            activateTime += deltaTime;
                        }

                        if (this.sequenceQueue.length == 0) {
                            if (activateTime >= activateThreshold) {
                                if (!this.isRevealed && !this.isLearning) {
                                    function _random(min, max) {
                                        min = Math.ceil(min);
                                        max = Math.floor(max);

                                        return Math.floor(Math.random() * (max - min)) + min;
                                    }

                                    //if (this.likes.some(x => typeof (x.text) === "object" && Object.values(x.text).some(x => typeof (x) === "object"))) {
                                    //    this.isBlinded = true;
                                    //} else {
                                    //    this.activate();
                                    //}

                                    if (~~_random(0, 10) % 2 === 0) {
                                        this.activate();
                                    } else {
                                        this.refreshRequired = true;
                                    }
                                }

                                idleTime = activateTime = 0.0;
                            } else if (idleTime >= blinkThreshold || animationData === null) {
                                this.sequenceQueue.push({ sequences: this.prepare(this.character.sequences.filter((x) => x.name === "Idle")) });
                                idleTime = 0.0;
                            }
                        }
                    }

                    if (!this.isPreparing && this.sequenceQueue.length > 0) {
                        const sequence = Array.isArray(this.sequenceQueue[0]) ? this.sequenceQueue[0] : this.sequenceQueue[0].sequences;

                        if (sequence.length > 0) {
                            if (sequence[0].type == "Animation") {
                                if ("frames" in sequence[0]) {
                                    for (const obj of sequence[0].frames) {
                                        if (Array.isArray(obj)) {
                                            if ("character" in sequence[0]) {
                                                this.animationQueue.push({ character: sequence[0].character, images: obj });
                                            } else {
                                                this.animationQueue.push({ character: this.character, images: obj });
                                            }
                                        } else if (typeof (obj) === "object") {
                                            if ("iterations" in obj) {
                                                if ("images" in obj) {
                                                    const c = "character" in sequence[0] ? sequence[0].character : this.character;

                                                    for (let i = 0; i < obj.iterations; i++) {
                                                        this.animationQueue.push({ character: c, images: obj.images });
                                                    }
                                                } else if ("sprites" in obj) {
                                                    const c = "character" in sequence[0] ? sequence[0].character : this.character;

                                                    for (let i = 0; i < obj.iterations; i++) {
                                                        this.animationQueue.push({ character: c, images: obj.sprites });
                                                    }
                                                }
                                            }
                                        }
                                    }

                                    sequence.shift();
                                } else if ("name" in sequence[0] && ("character" in sequence[0] === false || sequence[0].character.name === this.character.name)) {
                                    if ("resource" in sequence[0]) {
                                        let isDependency = false;

                                        if ("dependencies" in sequence[0]) {
                                            for (const animation of this.currentAnimations) {
                                                if (sequence[0].dependencies.includes(animation.name)) {
                                                    isDependency = true;

                                                    break;
                                                }
                                            }
                                        }

                                        if (!isDependency || !isAnimating) {
                                            this.isPreparing = true;

                                            const hash = await this.digestMessage(`${sequence[0].name}&${sequence[0].resource}`);

                                            if (hash in this.animations) {
                                                this.currentAnimations.splice(0);

                                                for (const animation of this.animations[hash].data) {
                                                    this.currentAnimations.push(animation);
                                                }

                                                this.animations[hash]["timestamp"] = Math.floor(new Date() / 1000);

                                                sequence.shift();

                                                animationIndex = 0;
                                                animationData = this.currentAnimations[animationIndex];
                                                animationIndex += animationSkipFrames;
                                            } else {
                                                try {
                                                    const response = await fetch(encodeURI(sequence[0].resource), {
                                                        mode: "cors",
                                                        method: "GET",
                                                        headers: {
                                                            "Content-Type": "application/x-www-form-urlencoded"
                                                        }
                                                    });

                                                    if (response.ok) {
                                                        const json = await response.json();

                                                        this.currentAnimations.splice(0);

                                                        for (const animation of json.data) {
                                                            this.currentAnimations.push(animation);
                                                        }

                                                        this.animations[hash] = { data: json.data, timestamp: Math.floor(new Date() / 1000) };

                                                        const self = this;
                                                        const timestamp = Math.floor(new Date(new Date().getTime() - 1 * 24 * 60 * 60 * 1000).getTime() / 1000);

                                                        Object.keys(this.animations).forEach(function (key) {
                                                            if ("timestamp" in self.animations[key] && self.animations[key].timestamp <= timestamp) {
                                                                delete self.animations[key];
                                                            }
                                                        });

                                                        const maxLength = 2;
                                                        const keys = Object.keys(this.animations).filter(x => "timestamp" in self.animations[x]).sort((x, y) => self.animations[y].timestamp - self.animations[x].timestamp);

                                                        if (keys.length > maxLength) {
                                                            keys.splice(maxLength, keys.length - maxLength).forEach(function (key) {
                                                                delete self.animations[key];
                                                            });
                                                        }
                                                    }
                                                    else {
                                                        throw new Error(response.statusText);
                                                    }

                                                    sequence.shift();

                                                    animationIndex = 0;
                                                    animationData = this.currentAnimations[animationIndex];
                                                    animationIndex += animationSkipFrames;
                                                } catch (e) {
                                                    console.error(e);
                                                }
                                            }

                                            /*const skipFrames = 60 / 12;
                                            let animations = this.animations[suggestion.animation];
                                            let maxFrames = Math.min(animations.length, 60);
                                            let offset = Math.floor(Math.max(0, random(0, animations.length - maxFrames - 1)) / 2);
                                            let length = Math.round(90 / 24);
                
                                            for (let i = 0; i < maxFrames; i += skipFrames) {
                                                for (let j = 0; j < length; j++) {
                                                    this.currentAnimations.push(animations[offset + i]);
                                                }
                                            }
                
                                            for (let i = this.currentAnimations.length - 1; i >= 0; i--) {
                                                this.currentAnimations.push(animations[offset + i]);
                                            }*/

                                            this.isPreparing = false;
                                        }
                                    } else {
                                        let isDependency = false;

                                        if ("dependencies" in sequence[0]) {
                                            for (const animation of this.blendShapeAnimations) {
                                                if (sequence[0].dependencies.includes(animation.name)) {
                                                    isDependency = true;

                                                    break;
                                                }
                                            }
                                        }

                                        if (!isDependency || !isDeforming) {
                                            let nameSet = [];

                                            this.blendShapeAnimations.unshift({ name: sequence[0].name, time: 0.0, duration: sequence[0].duration, start: sequence[0].start, end: sequence[0].end });
                                            sequence.shift();

                                            while (sequence.length > 0) {
                                                isDependency = false;

                                                if ("dependencies" in sequence[0]) {
                                                    for (const animation of this.blendShapeAnimations) {
                                                        if (sequence[0].dependencies.includes(animation.name)) {
                                                            isDependency = true;

                                                            break;
                                                        }
                                                    }
                                                }

                                                if (isDependency || sequence[0].type != "Animation" || sequence[0].name in this.animations) {
                                                    break;
                                                }

                                                this.blendShapeAnimations.unshift({ name: sequence[0].name, time: 0.0, duration: sequence[0].duration, start: sequence[0].start, end: sequence[0].end });
                                                sequence.shift();
                                            }

                                            for (let i = this.blendShapeAnimations.length - 1; i >= 0; i--) {
                                                let blendShapeAnimation = this.blendShapeAnimations[i];

                                                if (!nameSet.includes(blendShapeAnimation.name)) {
                                                    if (vrmModel.expressionManager !== null) {
                                                        vrmModel.expressionManager.setValue(blendShapeAnimation.name, Math.abs(Math.sin(blendShapeAnimation.start / 2 * Math.PI)));
                                                    }

                                                    nameSet.push(blendShapeAnimation.name);
                                                }
                                            }
                                        }
                                    }

                                    /*if (lookAtTarget.position.x != 0.0 || lookAtTarget.position.y != 0.0) {
                                        lookAnimation = { time: 0.0, duration: 0.5, source: { x: lookAtTarget.position.x, y: lookAtTarget.position.y }, target: { x: 0.0, y: 0.0 } };
                                    }*/
                                } else {
                                    sequence.shift();
                                }
                            } else if (sequence[0].type == "Message" && this.message === null && !isAnimating && !isDeforming && this.animationQueue.length === 0) {
                                let text = "";
                                const words = [];
                                const attributes = [];
                                const letters = [];

                                for (const inline of sequence[0].text) {
                                    if (Array.isArray(inline)) {
                                        for (const o of inline) {
                                            if (typeof (o) === "string") {
                                                attributes.push({ start: text.length, end: text.length + o.length });
                                                text += o;
                                            } else {
                                                attributes.push({ start: text.length, end: text.length + o.name.length });
                                                text += o.name;
                                                words.push(o);
                                            }
                                        }
                                    } else if (typeof (inline) === 'object') {
                                        attributes.push({ start: text.length, end: text.length + inline.name.length });
                                        text += inline.name;
                                        words.push(inline);
                                    } else {
                                        text += inline;
                                    }
                                }

                                for (let i = 0; i < text.length; i++) {
                                    if (letters.indexOf(text.charAt(i)) === -1 && text.charAt(i) !== "\n" && text.charAt(i).match(/\s/) === null) {
                                        letters.push(text.charAt(i));
                                    }
                                }

                                if ("character" in sequence[0]) {
                                    this.message = { time: 0, duration: sequence[0].duration, type: { elapsed: -1, speed: sequence[0].speed, reverse: false, buffer: "", count: 0 }, character: sequence[0].character, text: text, words: words, original: sequence[0].text, attributes: attributes, letters: letters };
                                } else {
                                    this.message = { time: 0, duration: sequence[0].duration, type: { elapsed: -1, speed: sequence[0].speed, reverse: false, buffer: "", count: 0 }, character: { name: this.character.name, accent: this.character.accent, image: this.character.image }, text: text, words: words, original: sequence[0].text, attributes: attributes, letters: letters };
                                }

                                lookAnimation = { time: 0.0, duration: 0.5, source: { x: lookAtTarget.position.x, y: lookAtTarget.position.y }, target: { x: 0.0, y: 0.0 } };

                                sequence.shift();

                                /*if (!this.isMuted) {
                                    const text = this.message.text;

                                    new Promise(async resolve => {
                                        try {
                                            const response = await fetch("https://ai.milchchan.com/api/synthesize?text=" + encodeURIComponent(text), {
                                                mode: "cors",
                                                method: "GET",
                                                headers: {
                                                    "Content-Type": "application/x-www-form-urlencoded"
                                                }
                                            });

                                            if (response.ok) {
                                                this.$refs.player.src = URL.createObjectURL(await response.blob());

                                                if (this.message !== null && text === this.message.text) {
                                                    this.$refs.player.currentTime = 0;
                                                    this.$refs.player.play();
                                                }
                                            }
                                            else {
                                                throw new Error(response.statusText);
                                            }
                                        } catch (e) {
                                            console.error(e);
                                        }

                                        resolve();
                                    });
                                }*/
                            }
                        } else if (this.message === null && !isAnimating && !isDeforming && this.animationQueue.length === 0) {
                            const self = this;

                            Object.keys(this.cachedImages).forEach(function (key) {
                                if (!self.cachedSprites.some(x => x.source === key)) {
                                    delete self.cachedImages[key];
                                }
                            });

                            this.sequenceQueue.shift();
                            this.character["visible"] = false;
                            this.alternative = null;
                        }
                    }

                    if (this.refreshRequired) {
                        for (const block of this.wall.blocks) {
                            let index = -1;

                            for (let i = block.inlines.length - 1; i >= 0; i--) {
                                if (block.inlines[i].running) {
                                    block.inlines[i].type.reverse = true;
                                    index = i;

                                    break;
                                }
                            }

                            if (index === -1) {
                                block.inlines[block.inlines.length - 1].running = true;
                            }
                        }

                        this.refreshRequired = false;
                    }

                    if (!this.wall.blocks.some(x => x.inlines.some(y => y.type.elapsed >= 0)) && this.likes.length > 0) {
                        function _random(min, max) {
                            min = Math.ceil(min);
                            max = Math.floor(max);

                            return Math.floor(Math.random() * (max - min)) + min;
                        }

                        this.wall.blocks.splice(0);

                        const length = _random(8, 16);
                        let start = this.likes.length - length;
                        let samples;

                        if (start >= 0) {
                            start = _random(0, start);
                            samples = this.likes.slice(start, start + length);
                        } else {
                            samples = this.likes;
                        }

                        for (const like of samples) {
                            let text;
                            const attributes = [];
                            const source = [];
                            const letters = [];

                            if (typeof (like.text) === "string") {
                                text = like.text.replace("\n", "");
                                source.push(text);
                            } else {
                                text = Object.keys(like.text).sort((x, y) => x - y).reduce((x, y) => {
                                    if (typeof (like.text[y]) === "string") {
                                        const s = like.text[y].replace("\n", "");

                                        x.text += s;

                                        if (x.source.length > 0 && typeof (x.source[x.source.length - 1]) === "string") {
                                            x.source[x.source.length - 1] += s;
                                        } else {
                                            x.source.push(s);
                                        }
                                    } else if (Array.isArray(like.text[y])) {
                                        const s = like.text[y].reduce((a, b) => a + (typeof (b) === "string" ? b : b.name).replace("\n", ""), "");

                                        x.attributes.push({ start: x.text.length, end: x.text.length + s.length });
                                        x.text += s;
                                        x.source.push({ name: s });
                                    } else {
                                        const text = like.text[y].name.replace("\n", "");

                                        x.attributes.push({ start: x.text.length, end: x.text.length + text.length });
                                        x.text += text;
                                        x.source.push({ name: text });
                                    }

                                    return x;
                                }, { text: "", attributes: attributes, source: source }).text;
                            }

                            for (let i = 0; i < text.length; i++) {
                                if (letters.indexOf(text.charAt(i)) === -1 && text.charAt(i) !== "\n" && text.charAt(i).match(/\s/) === null) {
                                    letters.push(text.charAt(i));
                                }
                            }

                            this.wall.blocks.push({
                                height: 100 / samples.length,
                                colors: { main: window.getComputedStyle(document.documentElement).getPropertyValue("--background-color"), accent: window.getComputedStyle(document.documentElement).getPropertyValue("--background-color") },
                                inlines: [
                                    { running: true, time: 0, duration: 0, type: { elapsed: -1, speed: 60, reverse: false, buffer: "", count: 0 }, text: text, attributes: attributes, characters: [], source: source, letters: letters },
                                    //{ running: false, time: 0, duration: 3, type: { elapsed: -1, speed: 60, reverse: false, buffer: "", count: 0 }, text: text, attributes: attributes, characters: [] }
                                ],
                                iterations: ~~Math.ceil(50 / text.length) * 2,
                                elapsed: 0,
                            });
                        }

                        /*this.$nextTick(() => {
                            const elements = document.body.querySelectorAll("#app>.container>.wrap>.frame>.wall>.wrap>.line");

                            for (const element of elements) {
                                element.animate([{ transform: "translate3d(0%, 0, 0)" }, { transform: "translate3d(-50%, 0, 0)" }], {
                                    fill: 'forwards',
                                    easing: 'linear',
                                    duration: 60000,
                                    iterations: Infinity
                                });
                            }
                        });*/
                    }

                    for (const block of this.wall.blocks) {
                        let index = 0;

                        for (const inline of block.inlines) {
                            if (inline.running) {
                                if (inline.type.reverse) {
                                    if (inline.type.count > 0) {
                                        inline.type.elapsed += deltaTime * 2;

                                        if (inline.type.elapsed >= 1.0 / inline.type.speed) {
                                            let index = inline.type.count - 1;

                                            if (index < inline.text.length) {
                                                const width = Math.floor(inline.text.length / 2);

                                                if (inline.type.buffer.length <= width && inline.type.count > 0) {
                                                    inline.type.count -= 1;
                                                }

                                                if (inline.type.buffer.length > 0) {
                                                    inline.type.buffer = inline.type.buffer.substring(0, inline.type.buffer.length - 1);
                                                }
                                            }

                                            inline.type.elapsed = 0;
                                        }
                                    } else {
                                        inline.time = 0;
                                        inline.type.elapsed = -1;
                                        inline.type.reverse = false;
                                        inline.running = false;

                                        if (index - 1 >= 0) {
                                            block.inlines[index - 1].running = true;
                                        }
                                    }
                                } else if (inline.type.buffer.length < inline.text.length) {
                                    if (inline.type.elapsed >= 0) {
                                        inline.type.elapsed += deltaTime;
                                    } else {
                                        inline.type.elapsed = deltaTime;
                                    }

                                    if (inline.type.elapsed >= 1.0 / inline.type.speed) {
                                        const index = inline.type.buffer.length;
                                        const width = Math.floor(inline.text.length / 2);
                                        const length = inline.text.length;

                                        if (inline.type.count >= width) {
                                            inline.type.buffer += inline.text.charAt(index);
                                        }

                                        if (inline.type.count < length) {
                                            inline.type.count += 1;
                                        }

                                        inline.type.elapsed = 0;
                                    }
                                } else {
                                    inline.time += deltaTime;

                                    if (inline.time >= inline.duration) {
                                        inline.type.reverse = true;
                                        inline.running = false;

                                        if (index + 1 < block.inlines.length) {
                                            block.inlines[index + 1].running = true;
                                        }
                                    }
                                }

                                if (inline.text.length === inline.type.buffer.length) {
                                    const characters = inline.text.split("");

                                    inline.characters.splice(0);

                                    for (let i = 0; i < characters.length; i++) {
                                        inline.characters.push({ key: i, value: characters[i], highlight: inline.attributes.some(x => i >= x.start && i < x.end) });
                                    }
                                } else {
                                    const charArray = inline.letters;
                                    let randomBuffer = "";

                                    for (let i = 0; i < inline.text.length; i++) {
                                        if (charArray.indexOf(inline.text.charAt(i)) === -1 && inline.text.charAt(i) !== "\n" && inline.text.charAt(i).match(/\s/) === null) {
                                            charArray.push(inline.text.charAt(i));
                                        }
                                    }

                                    if (charArray.length > 0) {
                                        for (let i = 0; i < inline.type.count; i++) {
                                            if (inline.text.charAt(i) === "\n") {
                                                randomBuffer += "\n";
                                            } else {
                                                randomBuffer += charArray[~~_random(0, charArray.length)];
                                            }
                                        }
                                    }

                                    if (randomBuffer.length > inline.type.buffer.length) {
                                        const characters = (inline.type.buffer + randomBuffer.substring(inline.type.buffer.length, randomBuffer.length)).split("");

                                        inline.characters.splice(0);

                                        for (let i = 0; i < characters.length; i++) {
                                            inline.characters.push({ key: i, value: characters[i], highlight: inline.attributes.some(x => i >= x.start && i < x.end) });
                                        }
                                    } else if (inline.characters.length !== inline.type.buffer.length) {
                                        const characters = inline.type.buffer.split("");

                                        inline.characters.splice(0);

                                        for (let i = 0; i < characters.length; i++) {
                                            inline.characters.push({ key: i, value: characters[i], highlight: inline.attributes.some(x => i >= x.start && i < x.end) });
                                        }
                                    }
                                }
                            }

                            index++;
                        }

                        block.elapsed += deltaTime;
                    }

                    this.renderBackground();

                    if (this.mode !== null && typeof (this.mode) === "object" && "talk" in this.mode && "next") {
                        if (this.mode.next !== null) {
                            if (this.mode.talk === null || this.mode.talk.type.elapsed < 0) {
                                this.mode.talk = this.mode.next;
                                this.mode.next = null;
                            } else {
                                this.mode.talk.type.reverse = true;
                                this.mode.talk.running = true;
                            }
                        }

                        if (this.mode.talk !== null) {
                            if (this.mode.talk.running) {
                                if (this.mode.talk.type.reverse) {
                                    if (this.mode.talk.type.count > 0) {
                                        this.mode.talk.type.elapsed += deltaTime * 2;

                                        if (this.mode.talk.type.elapsed >= 1.0 / this.mode.talk.type.speed) {
                                            let index = this.mode.talk.type.count - 1;

                                            if (index < this.mode.talk.text.length) {
                                                const width = Math.floor(this.mode.talk.text.length / 2);

                                                if (this.mode.talk.type.buffer.length <= width && this.mode.talk.type.count > 0) {
                                                    this.mode.talk.type.count -= 1;
                                                }

                                                if (this.mode.talk.type.buffer.length > 0) {
                                                    this.mode.talk.type.buffer = this.mode.talk.type.buffer.substring(0, this.mode.talk.type.buffer.length - 1);
                                                }
                                            }

                                            this.mode.talk.type.elapsed = 0;
                                        }
                                    } else {
                                        this.mode.talk.time = 0;
                                        this.mode.talk.type.elapsed = -1;
                                        this.mode.talk.type.reverse = false;
                                        this.mode.talk.running = false;
                                    }
                                } else if (this.mode.talk.type.buffer.length < this.mode.talk.text.length) {
                                    if (this.mode.talk.type.elapsed >= 0) {
                                        this.mode.talk.type.elapsed += deltaTime;
                                    } else {
                                        this.mode.talk.type.elapsed = deltaTime;
                                    }

                                    if (this.mode.talk.type.elapsed >= 1.0 / this.mode.talk.type.speed) {
                                        const index = this.mode.talk.type.buffer.length;
                                        const width = Math.floor(this.mode.talk.text.length / 2);
                                        const length = this.mode.talk.text.length;

                                        if (this.mode.talk.type.count >= width) {
                                            this.mode.talk.type.buffer += this.mode.talk.text.charAt(index);
                                        }

                                        if (this.mode.talk.type.count < length) {
                                            this.mode.talk.type.count += 1;
                                        }

                                        this.mode.talk.type.elapsed = 0;
                                    }
                                } else {
                                    this.mode.talk.time += deltaTime;
                                }

                                if (this.mode.talk.text.length === this.mode.talk.type.buffer.length) {
                                    const characters = this.mode.talk.text.split("");

                                    this.mode.talk.characters.splice(0);

                                    for (let i = 0; i < characters.length; i++) {
                                        this.mode.talk.characters.push({ key: i, value: characters[i]/*, highlight: this.mode.talk.attributes.some(x => i >= x.start && i < x.end)*/ });
                                    }
                                } else {
                                    const charArray = this.mode.talk.letters;
                                    let randomBuffer = "";

                                    if (charArray.length > 0) {
                                        for (let i = 0; i < this.mode.talk.type.count; i++) {
                                            if (this.mode.talk.text.charAt(i) === "\n") {
                                                randomBuffer += "\n";
                                            } else {
                                                randomBuffer += charArray[~~_random(0, charArray.length)];
                                            }
                                        }
                                    }

                                    if (randomBuffer.length > this.mode.talk.type.buffer.length) {
                                        const characters = (this.mode.talk.type.buffer + randomBuffer.substring(this.mode.talk.type.buffer.length, randomBuffer.length)).split("");

                                        this.mode.talk.characters.splice(0);

                                        for (let i = 0; i < characters.length; i++) {
                                            this.mode.talk.characters.push({ key: i, value: characters[i]/*, highlight: this.mode.talk.attributes.some(x => i >= x.start && i < x.end)*/ });
                                        }
                                    } else if (this.mode.talk.characters.length !== this.mode.talk.type.buffer.length) {
                                        const characters = this.mode.talk.type.buffer.split("");

                                        this.mode.talk.characters.splice(0);

                                        for (let i = 0; i < characters.length; i++) {
                                            this.mode.talk.characters.push({ key: i, value: characters[i]/*, highlight: this.mode.talk.attributes.some(x => i >= x.start && i < x.end)*/ });
                                        }
                                    }
                                }
                            }

                            this.mode.talk.elapsed += deltaTime;
                        }
                    }

                    if (this.message !== null) {
                        if (this.message.type.reverse) {
                            if (this.message.type.count > 0) {
                                this.message.type.elapsed += deltaTime * 2;

                                if (this.message.type.elapsed >= 1.0 / this.message.type.speed) {
                                    let index = this.message.type.count - 1;

                                    if (index < this.message.text.length) {
                                        const width = Math.floor(this.message.text.length / 2);

                                        if (this.message.type.buffer.length <= width && this.message.type.count > 0) {
                                            this.message.type.count -= 1;
                                        }

                                        if (this.message.type.buffer.length > 0) {
                                            this.message.type.buffer = this.message.type.buffer.substring(0, this.message.type.buffer.length - 1);
                                        }
                                    }

                                    this.message.type.elapsed = 0;
                                }
                            } else {
                                this.isPopup = false;
                            }
                        } else if (this.message.type.buffer.length < this.message.text.length) {
                            if (this.message.type.elapsed >= 0) {
                                this.message.type.elapsed += deltaTime;
                            } else if (!this.isAnimating) {
                                if (this.isPopup) {
                                    this.message.type.elapsed = deltaTime;
                                } else {
                                    this.isPopup = true;
                                }
                            }

                            if (this.message.type.elapsed >= 1.0 / this.message.type.speed) {
                                const index = this.message.type.buffer.length;
                                const width = Math.floor(this.message.text.length / 2);
                                const length = this.message.text.length;

                                if (this.message.type.count >= width) {
                                    this.message.type.buffer += this.message.text.charAt(index);
                                }

                                if (this.message.type.count < length) {
                                    this.message.type.count += 1;
                                }

                                this.message.type.elapsed = 0;
                            }
                        } else {
                            if (!this.isPaused) {
                                this.message.time += deltaTime;
                            }

                            if (this.message.time >= this.message.duration) {
                                this.message.type.reverse = true;
                            }
                        }

                        if (this.message.text.length === this.message.type.buffer.length) {
                            const characters = this.message.text.split("");

                            this.text.splice(0);

                            for (let i = 0; i < characters.length; i++) {
                                this.text.push({ key: i, value: characters[i], highlight: this.message.attributes.some(x => i >= x.start && i < x.end) });
                            }
                        } else {
                            const charArray = this.message.letters;
                            let randomBuffer = "";

                            if (charArray.length > 0) {
                                for (let i = 0; i < this.message.type.count; i++) {
                                    if (this.message.text.charAt(i) === "\n") {
                                        randomBuffer += "\n";
                                    } else {
                                        randomBuffer += charArray[~~_random(0, charArray.length)];
                                    }
                                }
                            }

                            if (randomBuffer.length > this.message.type.buffer.length) {
                                const characters = (this.message.type.buffer + randomBuffer.substring(this.message.type.buffer.length, randomBuffer.length)).split("");

                                this.text.splice(0);

                                for (let i = 0; i < characters.length; i++) {
                                    this.text.push({ key: i, value: characters[i], highlight: this.message.attributes.some(x => i >= x.start && i < x.end) });
                                }
                            } else if (this.text.length !== this.message.type.buffer.length) {
                                const characters = this.message.type.buffer.split("");

                                this.text.splice(0);

                                for (let i = 0; i < characters.length; i++) {
                                    this.text.push({ key: i, value: characters[i], highlight: this.message.attributes.some(x => i >= x.start && i < x.end) });
                                }
                            }
                        }
                    }

                    if (animationData) {
                        for (let animation of animationData.animations) {
                            switch (animation.bone) {
                                case "chest":
                                case "head":
                                case "hips":
                                case "jaw":
                                case "leftEye":
                                case "leftFoot":
                                case "leftHand":
                                case "leftIndexDistal":
                                case "leftIndexIntermediate":
                                case "leftIndexProximal":
                                case "leftLittleDistal":
                                case "leftLittleIntermediate":
                                case "leftLittleProximal":
                                case "leftLowerArm":
                                case "leftLowerLeg":
                                case "leftMiddleDistal":
                                case "leftMiddleIntermediate":
                                case "leftMiddleProximal":
                                case "leftRingDistal":
                                case "leftRingIntermediate":
                                case "leftRingProximal":
                                case "leftShoulder":
                                case "leftThumbDistal":
                                case "leftThumbIntermediate":
                                case "leftThumbProximal":
                                case "leftToes":
                                case "leftUpperArm":
                                case "leftUpperLeg":
                                case "neck":
                                case "rightEye":
                                case "rightFoot":
                                case "rightHand":
                                case "rightIndexDistal":
                                case "rightIndexIntermediate":
                                case "rightIndexProximal":
                                case "rightLittleDistal":
                                case "rightLittleIntermediate":
                                case "rightLittleProximal":
                                case "rightLowerArm":
                                case "rightLowerLeg":
                                case "rightMiddleDistal":
                                case "rightMiddleIntermediate":
                                case "rightMiddleProximal":
                                case "rightRingDistal":
                                case "rightRingIntermediate":
                                case "rightRingProximal":
                                case "rightShoulder":
                                case "rightThumbDistal":
                                case "rightThumbIntermediate":
                                case "rightThumbProximal":
                                case "rightToes":
                                case "rightUpperArm":
                                case "rightUpperLeg":
                                case "spine":
                                case "upperChest":
                                    break;
                                case "eye.L":
                                    animation.bone = "leftEye";
                                    break;
                                case "foot.L":
                                    animation.bone = "leftFoot";
                                    break;
                                case "hand.L":
                                    animation.bone = "leftHand";
                                    break;
                                case "f_index.03.L":
                                    animation.bone = "leftIndexDistal";
                                    break;
                                case "f_index.02.L":
                                    animation.bone = "leftIndexIntermediate";
                                    break;
                                case "f_index.01.L":
                                    animation.bone = "leftIndexProximal";
                                    break;
                                case "f_pinky.03.L":
                                    animation.bone = "leftLittleDistal";
                                    break;
                                case "f_pinky.02.L":
                                    animation.bone = "leftLittleIntermediate";
                                    break;
                                case "f_pinky.01.L":
                                    animation.bone = "leftLittleProximal";
                                    break;
                                case "lower_arm.L":
                                    animation.bone = "leftLowerArm";
                                    break;
                                case "shin.L":
                                    animation.bone = "leftLowerLeg";
                                    break;
                                case "f_middle.03.L":
                                    animation.bone = "leftMiddleDistal";
                                    break;
                                case "f_middle.02.L":
                                    animation.bone = "leftMiddleIntermediate";
                                    break;
                                case "f_middle.01.L":
                                    animation.bone = "leftMiddleProximal";
                                    break;
                                case "f_ring.03.L":
                                    animation.bone = "leftRingDistal";
                                    break;
                                case "f_ring.02.L":
                                    animation.bone = "leftRingIntermediate";
                                    break;
                                case "f_ring.01.L":
                                    animation.bone = "leftRingProximal";
                                    break;
                                case "shoulder.L":
                                    animation.bone = "leftShoulder";
                                    break;
                                case "thumb_distal.L":
                                    animation.bone = "leftThumbDistal";
                                    break;
                                case "thumb_intermediate.L":
                                    animation.bone = "leftThumbIntermediate";
                                    break;
                                case "thumb_proximal.L":
                                    animation.bone = "leftThumbProximal";
                                    break;
                                case "toe.L":
                                    animation.bone = "leftToes";
                                    break;
                                case "upper_arm.L":
                                    animation.bone = "leftUpperArm";
                                    break;
                                case "thigh.L":
                                    animation.bone = "leftUpperLeg";
                                    break;
                                case "eye.R":
                                    animation.bone = "rightEye";
                                    break;
                                case "foot.R":
                                    animation.bone = "rightFoot";
                                    break;
                                case "hand.R":
                                    animation.bone = "rightHand";
                                    break;
                                case "f_index.03.R":
                                    animation.bone = "rightIndexDistal";
                                    break;
                                case "f_index.02.R":
                                    animation.bone = "rightIndexIntermediate";
                                    break;
                                case "f_index.01.R":
                                    animation.bone = "rightIndexProximal";
                                    break;
                                case "f_pinky.03.R":
                                    animation.bone = "rightLittleDistal";
                                    break;
                                case "f_pinky.02.R":
                                    animation.bone = "rightLittleIntermediate";
                                    break;
                                case "f_pinky.01.R":
                                    animation.bone = "rightLittleProximal";
                                    break;
                                case "lower_arm.R":
                                    animation.bone = "rightLowerArm";
                                    break;
                                case "shin.R":
                                    animation.bone = "rightLowerLeg";
                                    break;
                                case "f_middle.03.R":
                                    animation.bone = "rightMiddleDistal";
                                    break;
                                case "f_middle.02.R":
                                    animation.bone = "rightMiddleIntermediate";
                                    break;
                                case "f_middle.01.R":
                                    animation.bone = "rightMiddleProximal";
                                    break;
                                case "f_ring.03.R":
                                    animation.bone = "rightRingDistal";
                                    break;
                                case "f_ring.02.R":
                                    animation.bone = "rightRingIntermediate";
                                    break;
                                case "f_ring.01.R":
                                    animation.bone = "rightRingProximal";
                                    break;
                                case "shoulder.R":
                                    animation.bone = "rightShoulder";
                                    break;
                                case "thumb_distal.R":
                                    animation.bone = "rightThumbDistal";
                                    break;
                                case "thumb_intermediate.R":
                                    animation.bone = "rightThumbIntermediate";
                                    break;
                                case "thumb_proximal.R":
                                    animation.bone = "rightThumbProximal";
                                    break;
                                case "toe.R":
                                    animation.bone = "rightToes";
                                    break;
                                case "upper_arm.R":
                                    animation.bone = "rightUpperArm";
                                    break;
                                case "thigh.R":
                                    animation.bone = "rightUpperLeg";
                                    break;
                                case "upper_chest":
                                    animation.bone = "upperChest";
                                    break;
                                default:
                                    animation.bone = null;
                            }

                            if (animation.bone && animation.rotation.length == 4) {
                                const boneNode = vrmModel.humanoid.getNormalizedBoneNode(animation.bone);

                                if (boneNode !== null) {
                                    boneNode.position.set(animation.position[0], animation.position[1], -animation.position[2]);
                                    boneNode.quaternion.set(animation.rotation[0], -animation.rotation[1], -animation.rotation[2], animation.rotation[3]);

                                    if (!vrmModel.scene.visible) {
                                        vrmModel.scene.visible = true;
                                    }
                                }
                            }
                        }
                    }

                    if (vrmSpringBones.length > 0) {
                        const mergedBoneAnimationDictionary = {};
                        let index = 0;

                        if (draggableBone === null) {
                            if (draggingBones !== null) {
                                draggingBones.time -= deltaTime;

                                if (draggingBones.time <= 0) {
                                    for (const key in draggingBones.bones) {
                                        mergedBoneAnimationDictionary[key] = { direction: draggingBones.bones[key].direction, force: draggingBones.bones[key].base };
                                    }

                                    draggingBones = null;
                                } else {
                                    for (const key in draggingBones.bones) {
                                        mergedBoneAnimationDictionary[key] = { direction: draggingBones.bones[key].direction, force: draggingBones.bones[key].base + draggingBones.bones[key].source + draggingBones.time / draggingBones.duration * (draggingBones.bones[key].target - draggingBones.bones[key].source - draggingBones.bones[key].base) };
                                    }
                                }
                            }
                        } else if (draggingBones === null) {
                            let bonePosition = null;
                            let springBoneIndex = 0;

                            for (const springBoneJoint of vrmModel.springBoneManager.joints) {
                                if (springBoneIndex === draggableBone.index) {
                                    bonePosition = springBoneJoint.bone.getWorldPosition(new Vector3());
                                }

                                springBoneIndex++;
                            }

                            if (bonePosition !== null) {
                                const range = 0.25;

                                springBoneIndex = 0;
                                draggingBones = { time: 0, duration: 0.5, center: bonePosition, bones: {} };

                                for (const springBoneJoint of vrmModel.springBoneManager.joints) {
                                    if (bonePosition.distanceTo(springBoneJoint.bone.getWorldPosition(new Vector3())) <= range) {
                                        draggingBones.bones[springBoneIndex] = { direction: new Vector3(draggableBone.direction.x, draggableBone.direction.y, 0), base: springBoneJoint.settings.gravityPower - vrmSpringBones[springBoneIndex].gravityPower, source: 0, target: -Math.min(0.01 * draggableBone.distance * Math.cos(bonePosition.distanceTo(springBoneJoint.bone.getWorldPosition(new Vector3())) / range), 5) };
                                        mergedBoneAnimationDictionary[springBoneIndex] = { direction: draggingBones.bones[springBoneIndex].direction, force: draggingBones.bones[springBoneIndex].source };
                                    }

                                    springBoneIndex++;
                                }
                            }
                        } else {
                            draggingBones.time += deltaTime;

                            if (draggingBones.time >= draggingBones.duration) {
                                const range = 0.25;
                                let springBoneIndex = 0;

                                for (const key in draggingBones.bones) {
                                    mergedBoneAnimationDictionary[key] = { direction: draggingBones.bones[key].direction, force: draggingBones.bones[key].target };
                                }

                                draggingBones.time = 0;

                                for (const springBoneJoint of vrmModel.springBoneManager.joints) {
                                    if (springBoneIndex in draggingBones.bones) {
                                        draggingBones.bones[springBoneIndex].direction = new Vector3(draggableBone.direction.x, draggableBone.direction.y, 0);
                                        draggingBones.bones[springBoneIndex].source = draggingBones.bones[springBoneIndex].target;
                                        draggingBones.bones[springBoneIndex].target = -Math.min(0.01 * draggableBone.distance * Math.cos(draggingBones.center.distanceTo(springBoneJoint.bone.getWorldPosition(new Vector3())) / range), 5);
                                    }

                                    springBoneIndex++;
                                }
                            } else {
                                for (const key in draggingBones.bones) {
                                    mergedBoneAnimationDictionary[key] = { direction: draggingBones.bones[key].direction, force: draggingBones.bones[key].base + draggingBones.bones[key].source + draggingBones.time / draggingBones.duration * (draggingBones.bones[key].target - draggingBones.bones[key].source - draggingBones.bones[key].base) };
                                }
                            }
                        }

                        if (randomWind === null) {
                            let springBoneIndex = 0;

                            randomWind = { time: 0, duration: 1.0, direction: new Vector3(1, 0, 0), force: 0.01 * (Math.random() - 0.5), sources: {} };

                            for (const springBoneJoint of vrmModel.springBoneManager.joints) {
                                if (springBoneIndex in mergedBoneAnimationDictionary === false) {
                                    randomWind.sources[springBoneIndex] = springBoneJoint.settings.gravityPower - vrmSpringBones[springBoneIndex].gravityPower;
                                }

                                springBoneIndex++;
                            }
                        } else {
                            randomWind.time += deltaTime;

                            if (randomWind.time >= randomWind.duration) {
                                for (const key in randomWind.sources) {
                                    if (key in mergedBoneAnimationDictionary === false) {
                                        mergedBoneAnimationDictionary[key] = { direction: randomWind.direction, force: randomWind.force };
                                    }
                                }

                                randomWind = null;
                            } else {
                                for (const key in randomWind.sources) {
                                    if (key in mergedBoneAnimationDictionary === false) {
                                        mergedBoneAnimationDictionary[key] = { direction: randomWind.direction, force: randomWind.sources[key] + randomWind.time / randomWind.duration * (randomWind.force - randomWind.sources[key]) };
                                    }
                                }
                            }
                        }

                        for (const springBoneJoint of vrmModel.springBoneManager.joints) {
                            if (index in mergedBoneAnimationDictionary) {
                                const vector = new Vector3(vrmSpringBones[index].gravityDir.x + mergedBoneAnimationDictionary[index].direction.x, vrmSpringBones[index].gravityDir.y + mergedBoneAnimationDictionary[index].direction.y, vrmSpringBones[index].gravityDir.z + mergedBoneAnimationDictionary[index].direction.z);

                                springBoneJoint.settings.gravityDir = vector.normalize();
                                springBoneJoint.settings.gravityPower = vrmSpringBones[index].gravityPower + mergedBoneAnimationDictionary[index].force;
                            }

                            index++;
                        }
                    }

                    vrmModel.update(deltaTime);

                    if (this.animationQueue.length > 0) {
                        const animation = this.animationQueue[0];

                        if (!this.isLocked) {
                            const animations = [];

                            for (const a of this.animationQueue) {
                                animations.push(a);
                            }

                            this.isLocked = true;

                            for (const a of animations) {
                                for (const sprite of a.images) {
                                    if (sprite.source in this.cachedImages === false) {
                                        try {
                                            const image = await new Promise(async (resolve, reject) => {
                                                const i = new Image();

                                                i.onload = () => {
                                                    resolve(i);
                                                };
                                                i.onerror = (e) => {
                                                    reject(e);
                                                };

                                                i.crossOrigin = "Anonymous";
                                                i.src = sprite.source;
                                            });

                                            this.cachedImages[sprite.source] = image;
                                        } catch (e) {
                                            console.error(e);
                                        }
                                    }
                                }
                            }

                            this.isLocked = false;

                            if (animation.character.name === this.character.name) {
                                this.character["visible"] = true;
                                this.cachedSprites.splice(0);

                                for (const sprite of this.renderForeground(this.$refs.canvas.getContext("2d"), this.canvasWidth, this.canvasHeight, animation.images)) {
                                    this.cachedSprites.push(sprite);
                                }
                            } else {
                                this.alternative = this.character.alternative;
                                this.alternativeCachedSprites.splice(0);

                                for (const sprite of this.renderForeground(this.$refs.alternative.getContext("2d"), this.alternativeCanvasWidth, this.alternativeCanvasHeight, animation.images)) {
                                    this.alternativeCachedSprites.push(sprite);
                                }
                            }

                            this.animationQueue.shift();
                        }
                    }

                    if (!this.isLearning) {
                        const points = parseInt(this.uptime + deltaTime) - parseInt(this.uptime);

                        if (points > 0 && points < 60 && this.points < this.maxPoints) {
                            const nextPoints = Math.min(this.points + points, this.maxPoints);

                            /*for (let i = parseInt(this.points) + 1; i <= nextPoints; i++) {
                                if (i % 60 === 0) {
                                    this.retain();
                                }
                            }*/

                            //this.points = nextPoints;
                        }

                        this.uptime += deltaTime;
                    }
                }

                if (this.isVisible) {
                    if (renderer.domElement.width !== renderer.domElement.clientWidth || renderer.domElement.height !== renderer.domElement.clientHeight) {
                        const width = renderer.domElement.clientWidth;
                        const height = renderer.domElement.clientHeight;

                        bloomPass.setSize(width, height);
                        fxaaShader.uniforms.resolution.value.set(1 / (width * window.devicePixelRatio), 1 / (height * window.devicePixelRatio));

                        renderer.setPixelRatio(window.devicePixelRatio);
                        renderer.setSize(width, height, false);

                        camera.aspect = width / height;
                        camera.updateProjectionMatrix();

                        composer.setPixelRatio(window.devicePixelRatio);
                        composer.setSize(width, height);
                    }

                    controls.update();

                    //renderer.render(scene, camera);
                    composer.render(deltaTime);
                }

                stats.end();
            },
            renderBackground: function () {
                const backCanvas = this.$refs.background.canvas;

                backCanvas.width = this.$refs.background.width;
                backCanvas.height = this.$refs.background.height;

                const backContext = backCanvas.getContext("2d");
                const frontContext = this.$refs.background.getContext("2d");
                const margin = 16;
                const lineHeight = backCanvas.height / this.wall.blocks.length;
                const fontSize = Math.floor(lineHeight / 2);
                const fontFamily = window.getComputedStyle(document.documentElement).getPropertyValue("--background-font-family");
                let index = 0;

                backContext.imageSmoothingEnabled = true;
                backContext.imageSmoothingQuality = "high";
                backContext.clearRect(0, 0, backCanvas.width, backCanvas.height);
                backContext.textAlign = "left";
                backContext.textBaseline = "middle";
                backContext.save();

                for (const block of this.wall.blocks) {
                    for (const inline of block.inlines) {
                        if (inline.characters.length > 0) {
                            const line = [{ text: inline.characters[0].value, highlight: inline.characters[0].highlight }];
                            let width = 0;
                            let offset = 0;

                            for (let i = 1; i < inline.characters.length; i++) {
                                if (inline.characters[i].highlight) {
                                    if (line[line.length - 1].highlight) {
                                        line[line.length - 1].text += inline.characters[i].value;
                                    } else {
                                        line.push({ text: inline.characters[i].value, highlight: true });
                                    }
                                } else if (line[line.length - 1].highlight) {
                                    line.push({ text: inline.characters[i].value, highlight: false });
                                } else {
                                    line[line.length - 1].text += inline.characters[i].value;
                                }
                            }

                            backContext.save();
                            backContext.font = `${fontSize}px ${fontFamily}`;

                            for (const s of inline.source) {
                                const textMetrics = backContext.measureText(typeof (s) === "string" ? s : s.name);

                                width += Math.abs(textMetrics.actualBoundingBoxLeft) + Math.abs(textMetrics.actualBoundingBoxRight) + margin;
                            }

                            backContext.translate(block.elapsed % 60 / 60 * -width, 0);

                            do {
                                for (let i = 0; i < 2; i++) {
                                    let x = 0;

                                    for (const segment of line) {
                                        if (segment.highlight) {
                                            backContext.globalAlpha = 1.0;
                                            backContext.fillStyle = `${block.colors.accent}`;
                                        } else {
                                            backContext.globalAlpha = 0.5;
                                            backContext.fillStyle = `${block.colors.main}`;
                                        }

                                        const textMetrics = backContext.measureText(segment.text);

                                        backContext.fillText(segment.text, Math.round(offset + x - textMetrics.actualBoundingBoxLeft), Math.round(lineHeight * index + (lineHeight - fontSize) / 2 + fontSize / 2));// - textMetrics.actualBoundingBoxDescent + (fontSize - textMetrics.actualBoundingBoxAscent) / 2));

                                        x += Math.abs(textMetrics.actualBoundingBoxLeft) + Math.abs(textMetrics.actualBoundingBoxRight) + margin;
                                    }

                                    for (const s of inline.source) {
                                        const textMetrics = backContext.measureText(typeof (s) === "string" ? s : s.name);

                                        offset += Math.abs(textMetrics.actualBoundingBoxLeft) + Math.abs(textMetrics.actualBoundingBoxRight) + margin;
                                    }
                                }
                            } while (offset - margin < backCanvas.width * 2);

                            backContext.restore();
                        }
                    }

                    index++;
                }

                backContext.restore();

                frontContext.clearRect(0, 0, backCanvas.width, backCanvas.height);
                frontContext.drawImage(backCanvas, 0, 0);
            },
            renderForeground: function (ctx, width, height, animation) {
                const offscreenCanvas = document.createElement("canvas");

                offscreenCanvas.width = ctx.canvas.width;
                offscreenCanvas.height = ctx.canvas.height;

                const offscreenContext = offscreenCanvas.getContext("2d");
                const sprites = [];

                offscreenContext.imageSmoothingEnabled = true;
                offscreenContext.imageSmoothingQuality = "high";
                offscreenContext.clearRect(0, 0, width, height);

                for (const sprite of animation) {
                    if (sprite.source in this.cachedImages) {
                        if ("opacity" in sprite) {
                            offscreenContext.globalAlpha = sprite.opacity;
                        } else {
                            offscreenContext.globalAlpha = 1;
                        }

                        offscreenContext.drawImage(this.cachedImages[sprite.source], sprite.x * window.devicePixelRatio, sprite.y * window.devicePixelRatio, sprite.width * window.devicePixelRatio, sprite.height * window.devicePixelRatio);
                    }

                    sprites.push(sprite);
                }

                ctx.clearRect(0, 0, width, height);
                ctx.drawImage(offscreenCanvas, 0, 0);

                offscreenCanvas.width = offscreenCanvas.height = 0;

                return sprites;
            }
        },
        updated: function () {
            //let container = this.$refs.container;

            this.insetTop = this.$refs.indicator.getBoundingClientRect().height;
            this.insetBottom = this.$refs.blank.getBoundingClientRect().height;

            //this.$refs.ticker.style.width = document.body.querySelector("#input .columns>.column .control:nth-last-of-type(1) .level:nth-last-of-type(1) form").getBoundingClientRect().width + 'px';

            //document.body.querySelector("#heading>.columns>.column>.columns:first-child>.column>.columns:last-child .level:first-child .level-item .field .ticker").style.width = "100%";
            /*this.$refs.ticker.style.width = document.body.querySelector("#input .columns>.column .control:nth-last-of-type(1) .level:nth-last-of-type(1) form").getBoundingClientRect().width + 'px';
            */
            /*for (const clip of document.body.querySelectorAll(".container>.wrap>.frame .clip")) {
                let width = 0;

                for (const element of clip.querySelectorAll(":scope .ticker-wrap .ticker .item")) {
                    width += element.getBoundingClientRect().width;
                }

                if (width > 0) {
                    this.tickerWidth = Math.min(width / 2, document.body.querySelector(".container>.wrap>.frame .level").getBoundingClientRect().width);
                    clip.querySelector(":scope .ticker-wrap .ticker").style.width = width + "px";
                }
            }*/
        },
        mounted: async function () {
            function choice(collection, func) {
                const r = Math.random();
                let sum = 0.0;
                let index = 0;

                for (let item of collection) {
                    const probability = func(item);

                    if (sum <= r && r < sum + probability) {
                        break;
                    }

                    sum += probability;
                    index++;
                }

                return collection[index];
            }

            function softmax(x, func1, func2) {
                let y = [].concat(x);
                let max = Number.MIN_VALUE;
                let sum = 0.0;

                for (let i = 0; i < x.length; i++) {
                    if (func1(x[i]) > max) {
                        max = func1(x[i]);
                    }
                }

                for (let i = 0; i < x.length; i++) {
                    sum += Math.exp(func1(x[i]) - max);
                }

                for (let i = 0; i < x.length; i++) {
                    func2(y[i], Math.exp(func1(x[i]) - max) / sum);
                }

                return y;
            }

            const self = this;
            const characterStorageItem = localStorage.getItem("character");
            const capturesStorageItem = localStorage.getItem("captures");
            const credentialStorageItem = localStorage.getItem("credential");
            let credential = null;
            const characters = window.location.hostname.endsWith("merkuchan.com") ? [{ path: "/assets/merku.json", probability: 0.99 }, { path: "/assets/milch.json", probability: 0.01 }] : [{ path: "/assets/milch.json", probability: 0.99 }, { path: "/assets/merku.json", probability: 0.01 }];
            const loader = new GLTFLoader();

            if (characterStorageItem) {
                try {
                    const character = JSON.parse(characterStorageItem);

                    if (character !== null) {
                        if ("visible" in character) {
                            this.isVisible = character.visible;
                        }

                        if ("mute" in character) {
                            this.isMuted = character.mute;
                        }
                    }
                } catch (e) {
                    localStorage.removeItem("character");
                }
            }

            if (capturesStorageItem) {
                try {
                    const captures = JSON.parse(capturesStorageItem);

                    if (captures !== null) {
                        for (const capture of captures) {
                            if (capture.checksum === [...String(capture.timestamp)].reduce((x, y) => x + y, 0) + [...String(capture.count)].reduce((x, y) => x + y, 0)) {
                                delete capture["checksum"];

                                //this.captures[capture.name] = capture;
                            }
                        }

                        //this.points = Object.values(this.captures).reduce((x, y) => x + (typeof (y) === "function" ? 0 : y.count), 0) * 60;
                    }
                } catch (e) {
                    localStorage.removeItem("captures");
                }
            }

            if (credentialStorageItem) {
                try {
                    credential = JSON.parse(credentialStorageItem);
                } catch (e) {
                    localStorage.removeItem("credential");
                }
            }

            if (window.location.pathname === "/about") {
                this.mode = "_about";
                this.isRevealed = true;
            } else if (window.location.pathname === "/milch") {
                this.mode = "_milch";
                this.isRevealed = true;
            } else if (window.location.pathname === "/merku") {
                this.mode = "_merku";
                this.isRevealed = true;
            } else if (window.location.pathname === "/settings") {
                this.mode = "_settings";
                this.isRevealed = true;
            } else if (window.location.pathname === "/help") {
                this.mode = "_help";
                this.isRevealed = true;
            } else if (window.location.pathname === "/talk") {
                this.mode = { collection: null, index: 0, selected: [], talk: null, next: null, reloading: true, disposable: true };
                this.isRevealed = true;
                this.randomize().then((x) => {
                    this.mode.next = x;
                    this.mode.reloading = false;
                });
            } else if (window.location.pathname === "/words") {
                this.mode = { dictionary_words: null, dictionary_modifiers_words: [], path: 'dictionary/words', next: null, indexes: [], selected: [], disposable: true };
                this.next("dictionary/words", this.mode.next);
                this.isRevealed = true;
            } else if (window.location.pathname === "/learn") {
                this.isLearning = true;
            } else if (window.location.pathname === "/likes") {
                this.mode = { likes: null, next: null, indexes: [], disposable: true };
                this.next("likes", this.mode.next, 1);
                this.isRevealed = true;
            } else if (window.location.pathname === "/stats") {
                this.mode = { stats: null, dictionary_words: null, dictionary_modifiers_words: null, likes: null, disposable: true };
                this.next('dictionary/words', new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000), null);
                this.next('dictionary/modifiers/words', new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000), null);
                this.next('likes', new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000), null);
                this.isRevealed = true;
            } else if (window.location.pathname === "/logs") {
                this.mode = { logs: this.logs, disposable: true };
                this.isRevealed = true;
            }

            const rect = this.$refs.wall.getBoundingClientRect();

            this.wall.canvasSize.width = rect.width;
            this.wall.canvasSize.height = rect.height;
            this.wall.canvasSize.deviceWidth = rect.width * window.devicePixelRatio;
            this.wall.canvasSize.deviceHeight = rect.height * window.devicePixelRatio;

            this.$refs.background["canvas"] = document.createElement("canvas");

            this.$refs.three.appendChild(renderer.domElement);
            this.$refs.three.after(stats.domElement);

            this.animate();

            this.insetTop = this.$refs.indicator.getBoundingClientRect().height;
            this.insetBottom = this.$refs.blank.getBoundingClientRect().height;

            try {
                const path = choice(characters, (x) => x.probability).path;
                const response1 = await fetch(path, {
                    mode: "cors",
                    method: "GET",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                });
                let character;

                if (response1.ok) {
                    character = await response1.json();
                }
                else {
                    throw new Error(response1.statusText);
                }

                const sequence = this.prepare(character.sequences.filter((x) => x.name === "Start"), null, character.sequences)

                for (let i = characters.length - 1; i >= 0; i--) {
                    if (characters[i].path === path) {
                        characters.splice(i, 1);
                    }
                }

                const response2 = await fetch(choice(softmax(characters, (x) => x.probability, (x, y) => x.probability = y), (x) => x.probability).path, {
                    mode: "cors",
                    method: "GET",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                });
                let alternative;

                if (response2.ok) {
                    alternative = await response2.json();
                } else {
                    throw new Error(response2.statusText);
                }

                this.canvasSize.width = character.width;
                this.canvasSize.height = character.height;
                this.canvasSize.deviceWidth = character.width * window.devicePixelRatio;
                this.canvasSize.deviceHeight = character.height * window.devicePixelRatio;
                this.canvasSize.alternative.width = alternative.width;
                this.canvasSize.alternative.height = alternative.height;
                this.canvasSize.alternative.deviceWidth = alternative.width * window.devicePixelRatio;
                this.canvasSize.alternative.deviceHeight = alternative.height * window.devicePixelRatio;

                for (const obj of sequence) {
                    if (obj.type == "Animation" && "frames" in obj && obj.frames.length > 0) {
                        let images = null;

                        if (Array.isArray(obj.frames[0])) {
                            images = obj.frames[0];
                        } else if (typeof (obj.frames[0]) === "object") {
                            if ("iterations" in obj.frames[0]) {
                                if ("images" in obj.frames[0] && obj.frames[0].images.length > 0) {
                                    images = obj.frames[0].images;
                                } else if ("sprites" in obj.frames[0] && obj.frames[0].sprites.length > 0) {
                                    images = obj.frames[0].sprites;
                                }
                            }
                        }

                        if (images !== null) {
                            for (const sprite of images) {
                                if (sprite.source in this.cachedImages === false) {
                                    try {
                                        const image = await new Promise(async (resolve, reject) => {
                                            const i = new Image();

                                            i.onload = () => {
                                                resolve(i);
                                            };
                                            i.onerror = (e) => {
                                                reject(e);
                                            };

                                            i.crossOrigin = "Anonymous";
                                            i.src = sprite.source;
                                        });

                                        this.cachedImages[sprite.source] = image;
                                    } catch (e) {
                                        console.error(e);
                                    }
                                }
                            }

                            this.cachedSprites.splice(0);

                            for (const sprite of this.renderForeground(this.$refs.canvas.getContext("2d"), this.canvasWidth, this.canvasHeight, images)) {
                                this.cachedSprites.push(sprite);
                            }
                        }

                        break;
                    }
                }

                this.character = character;
                this.character["visible"] = false;
                this.character["alternative"] = alternative;
                this.sequenceQueue.push(sequence);
            } catch (e) {
                console.error(e);
            }

            loader.register((parser) => {
                return new VRMLoaderPlugin(parser);
            });
            loader.crossOrigin = "anonymous";
            loader.load(
                await getDownloadURL(storageRef(storage, this.character.model)),
                async (gltf) => {
                    vrmModel = gltf.userData.vrm;
                    vrmModel.scene.visible = false;
                    vrmModel.scene.rotation.y = Math.PI;

                    if (vrmModel.lookAt !== undefined) {
                        vrmModel.lookAt.target = lookAtTarget;
                    }

                    vrmSpringBones.splice(0);

                    if (vrmModel.springBoneManager !== null) {
                        for (const springBoneJoint of vrmModel.springBoneManager.joints) {
                            vrmSpringBones.push({ gravityDir: springBoneJoint.settings.gravityDir.clone(), gravityPower: springBoneJoint.settings.gravityPower });
                        }
                    }

                    scene.add(vrmModel.scene);
                    self.progress = null;
                },
                (progress) => self.progress = progress.loaded / progress.total,
                (error) => console.error(error),
            );

            if (credential === null) {
                try {
                    const result = await getRedirectResult(auth);

                    if (result !== null && result.user !== null) {
                        if (result.providerId === GoogleAuthProvider.PROVIDER_ID) {
                            const credential = GoogleAuthProvider.credentialFromResult(result);

                            for (const data of result.user.providerData) {
                                try {
                                    await updateProfile(result.user, {
                                        displayName: data.displayName,
                                        photoURL: data.photoURL
                                    });
                                } catch (e) {
                                    console.error(e.code, e.message);
                                }

                                break;
                            }

                            try {
                                localStorage.setItem("credential", JSON.stringify({ providerId: credential.providerId, accessToken: credential.accessToken, idToken: credential.idToken }));
                            } catch (e) {
                                localStorage.removeItem("credential");
                            }

                            signInWithCredential(auth, GoogleAuthProvider.credential(credential.idToken));
                        } else if (result.providerId === FacebookAuthProvider.PROVIDER_ID) {
                            const credential = FacebookAuthProvider.credentialFromResult(result);

                            for (const data of result.user.providerData) {
                                try {
                                    await updateProfile(result.user, {
                                        displayName: data.displayName,
                                        photoURL: data.photoURL
                                    });
                                } catch (e) {
                                    console.error(e.code, e.message);
                                }

                                break;
                            }

                            try {
                                localStorage.setItem("credential", JSON.stringify({ providerId: credential.providerId, accessToken: credential.accessToken }));
                            } catch (e) {
                                localStorage.removeItem("credential");
                            }

                            signInWithCredential(auth, FacebookAuthProvider.credential(credential.accessToken));
                        } else if (result.providerId === TwitterAuthProvider.PROVIDER_ID) {
                            const credential = TwitterAuthProvider.credentialFromResult(result);

                            for (const data of result.user.providerData) {
                                const photoUrl = data.photoURL.replace(/_normal\.jpg$/, '.jpg');

                                try {
                                    await updateProfile(result.user, {
                                        displayName: data.displayName,
                                        photoURL: photoUrl
                                    });
                                } catch (e) {
                                    console.error(e.code, e.message);
                                }

                                break;
                            }

                            try {
                                localStorage.setItem("credential", JSON.stringify({ providerId: credential.providerId, accessToken: credential.accessToken, secret: credential.secret }));
                            } catch (e) {
                                localStorage.removeItem("credential");
                            }

                            const r = await signInWithCredential(auth, TwitterAuthProvider.credential(credential.accessToken, credential.secret));

                            this.user = r.user;
                            this.user['link'] = `https://twitter.com/${r._tokenResponse.screenName}`;
                        }
                    }
                } catch (e) {
                    self.notify({ text: e.message, accent: this.character.accent, image: this.character.image });
                    console.error(e.code, e.message);
                }
            } else {
                if (credential.providerId === GoogleAuthProvider.PROVIDER_ID) {
                    try {
                        signInWithCredential(auth, GoogleAuthProvider.credential(credential.idToken));
                    } catch (e) {
                        self.notify({ text: e.message, accent: this.character.accent, image: this.character.image });
                        console.error(e.code, e.message);
                    }
                } else if (credential.providerId === FacebookAuthProvider.PROVIDER_ID) {
                    try {
                        signInWithCredential(auth, FacebookAuthProvider.credential(credential.accessToken));
                    } catch (e) {
                        self.notify({ text: e.message, accent: this.character.accent, image: this.character.image });
                        console.error(e.code, e.message);
                    }
                } else if (credential.providerId === TwitterAuthProvider.PROVIDER_ID) {
                    try {
                        const result = await signInWithCredential(auth, TwitterAuthProvider.credential(credential.accessToken, credential.secret));

                        this.user = result.user;
                        this.user['link'] = `https://twitter.com/${result._tokenResponse.screenName}`;
                    } catch (e) {
                        self.notify({ text: e.message, accent: this.character.accent, image: this.character.image });
                        console.error(e.code, e.message);
                    }
                }
            }

            onAuthStateChanged(auth, user => {
                // Check for user status
                if (user) {
                    // User is signed in.
                    if (self.user === null) {
                        self.user = user;
                    }
                } else {
                    // User is signed out.
                    self.user = null;
                }
            });

            /*onValue(query(databaseRef(database, databaseRoot + "/backgrounds"), orderByChild("timestamp"), limitToLast(100)), snapshot => {
                if (snapshot.exists()) {
                    const backgrounds = snapshot.val();
                    let isUpdated = false;

                    for (const key in backgrounds) {
                        const index = self.recentImages.findIndex(x => x.id === key);

                        if (index >= 0) {
                            if (self.recentImages[index].timestamp < backgrounds[key].timestamp) {
                                self.recentImages.splice(index, 1);
                            } else {
                                continue;
                            }
                        }

                        backgrounds[key]["id"] = key;
                        self.recentImages.push(backgrounds[key]);
                        isUpdated = true;
                    }

                    //for (let i = self.recentImages.length - 1; i >= 0; i--) {
                    //    if (self.recentImages[i].id in backgrounds === false) {
                    //        self.recentImages.splice(i, 1);
                    //        isUpdated = true;
                    //    }
                    //}

                    if (isUpdated) {
                        self.recentImages.sort((x, y) => y.timestamp - x.timestamp);

                        if (self.recentImages.length > 100) {
                            self.recentImages.splice(100, self.recentImages.length - 100);
                        }

                        //self.update(self.recentImages, self.maxTags);
                        //self.isBlinded = true;
                    }
                }
            });*/
            onValue(databaseRef(database, databaseRoot + "/dictionary/count"), snapshot => {
                const count = snapshot.val();

                if (count === null) {
                    self.counter.words = 0;
                } else {
                    self.counter.words = count;
                }

                self.stars = self.counter.words + self.counter.modifiers;
            });
            onValue(databaseRef(database, databaseRoot + "/dictionary/modifiers/count"), snapshot => {
                const count = snapshot.val();

                if (count === null) {
                    self.counter.modifiers = 0;

                } else {
                    self.counter.modifiers = count;
                }

                self.stars = self.counter.words + self.counter.modifiers;
            });
            onValue(query(databaseRef(database, databaseRoot + "/words"), orderByChild("timestamp"), limitToLast(100)), async snapshot => {
                if (snapshot.exists()) {
                    const words = snapshot.val();
                    let isUpdated = false;

                    for (const key in words) {
                        const index = self.words.findIndex(x => x.name === key && "timestamp" in x);

                        if (index >= 0) {
                            if (self.words[index].timestamp < words[key].timestamp) {
                                if (key in self.wordDictionary) {
                                    delete self.wordDictionary[key];
                                }

                                Object.keys(self.reverseWordDictionary).forEach((k) => {
                                    if (self.reverseWordDictionary[k].words.some((x) => x === key)) {
                                        delete self.reverseWordDictionary[k];
                                    }
                                });

                                self.words.splice(index, 1);
                            } else {
                                continue;
                            }
                        }

                        self.words.push({ name: key, timestamp: words[key].timestamp });
                        isUpdated = true;
                    }

                    if (isUpdated) {
                        //const timestamp = Math.floor(new Date(new Date().getTime() - 1 * 24 * 60 * 60 * 1000).getTime() / 1000);
                        //let count = 0;

                        for (let i = self.words.length - 1; i >= 0; i--) {
                            if ("timestamp" in self.words[i] === false) {
                                self.words.splice(i, 1);
                            }
                            /*if ("timestamp" in self.words[i]) {
                                if (self.words[i].timestamp > timestamp) {
                                    count++;
                                }
                            } else {
                                self.words.splice(i, 1);
                            }*/
                        }

                        self.words.sort((x, y) => y.timestamp - x.timestamp);

                        /*if (self.words.length > 10) {
                            self.words.splice(10, self.words.length - 10);
                        }*/

                        for (const obj of self.prepare(self.character.sequences.filter((x) => x.name === "Alert"), self.words.length)) {
                            if (obj.type === "Message") {
                                self.words.splice(0, 0, { name: obj.text, image: self.character.image });
                            }
                        }

                        /*if (count > self.background.stars.length) {
                            function _random(min, max) {
                                min = Math.ceil(min);
                                max = Math.floor(max);

                                return Math.floor(Math.random() * (max - min)) + min;
                            }

                            const images = ["/images/Star1-Light.svg", "/images/Star2-Light.svg", "/images/Star3-Light.svg", "/images/Star4-Light.svg", "/images/Star1-Dark.svg", "/images/Star2-Dark.svg", "/images/Star3-Dark.svg", "/images/Star4-Dark.svg"];
                            const imageDictionary = {};

                            for (let i = self.background.stars.length; i < count; i++) {
                                const url = images[_random(0, images.length)]

                                if (url in imageDictionary) {
                                    self.background.stars.push({ url: imageDictionary[url], x: Math.random(), y: Math.random(), delay: _random(0, 1000), duration: _random(1000, 5000), state: 'running' });
                                } else {
                                    const response = await fetch(url, {
                                        method: "GET"
                                    });

                                    if (response.ok) {
                                        const dataURL = await new Promise(async (resolve, reject) => {
                                            const reader = new FileReader();

                                            reader.onload = () => {
                                                resolve(reader.result);
                                            };
                                            reader.onerror = () => {
                                                reject(reader.error);
                                            };
                                            reader.readAsDataURL(await response.blob());
                                        });

                                        imageDictionary[url] = dataURL;
                                        self.background.stars.push({ url: dataURL, x: Math.random(), y: Math.random(), delay: _random(0, 1000), duration: _random(1000, 5000), state: 'running' });
                                    }
                                }
                            }
                        } else if (count < self.background.stars.length) {
                            self.background.stars.splice(count);
                        }*/
                    }
                }
            });
            onValue(query(databaseRef(database, databaseRoot + "/likes"), orderByChild("timestamp"), limitToLast(100)), async snapshot => {
                if (snapshot.exists()) {
                    const likes = snapshot.val();
                    const updated = [];

                    for (const key in likes) {
                        const index = self.likes.findIndex(x => x.id === key);

                        if (index >= 0) {
                            if (self.likes[index].timestamp < likes[key].timestamp) {
                                self.likes.splice(index, 1);
                            } else {
                                continue;
                            }
                        }

                        likes[key]["id"] = key;
                        self.likes.push(likes[key]);
                        updated.push(likes[key]);
                    }

                    /*for (let i = self.likes.length - 1; i >= 0; i--) {
                        if (self.likes[i].id in likes === false) {
                            self.likes.splice(i, 1);
                            isUpdated = true;
                        }
                    }*/

                    if (updated.length > 0) {
                        const timestamp = Math.floor(new Date() / 1000);
                        const timeout = 60 * 60;

                        //const timestamp = Math.floor(new Date(new Date().getTime() - 1 * 24 * 60 * 60 * 1000).getTime() / 1000);
                        //const recent = updated.filter(x => x.timestamp > timestamp);

                        self.likes.sort((x, y) => y.timestamp - x.timestamp);

                        if (self.likes.length > 100) {
                            self.likes.splice(100, self.likes.length - 100);
                        }

                        for (const like of self.likes) {
                            if ("text" in like && Array.isArray(like.text)) {
                                for (const word of like.text.reduce((x, y) => {
                                    if (Array.isArray(y)) {
                                        x.push(y[1]);
                                    } else if (typeof (y) === "object") {
                                        x.push(y);
                                    }

                                    return x;
                                }, [])) {
                                    for (const attribute of word.attributes) {
                                        if (attribute in self.reverseWordDictionary === false || timestamp - self.reverseWordDictionary[attribute].timestamp >= timeout) {
                                            this.reverseWordDictionary[attribute] = { words: [word.name], timestamp: timestamp };
                                        } else if (!this.reverseWordDictionary[attribute].words.includes(word.name)) {
                                            this.reverseWordDictionary[attribute].words.push(word.name);
                                        }
                                    }
                                }
                            }
                        }

                        self.update(self.likes, self.maxTags);

                        /*if (recent.length > 0) {
                            function _random(min, max) {
                                min = Math.ceil(min);
                                max = Math.floor(max);

                                return Math.floor(Math.random() * (max - min)) + min;
                            }

                            const response = await fetch("/images/ShootingStar.svg", {
                                method: "GET"
                            });

                            if (response.ok) {
                                const dataURL = await new Promise(async (resolve, reject) => {
                                    const reader = new FileReader();

                                    reader.onload = () => {
                                        resolve(reader.result);
                                    };
                                    reader.onerror = () => {
                                        reject(reader.error);
                                    };
                                    reader.readAsDataURL(await response.blob());
                                });
                                const degrees = -45;

                                for (let i = 0; i < recent.length; i++) {
                                    const id = recent[i].id;

                                    if (id in self.background.shootingStars === false) {
                                        const offset = _random(-100, 100);
                                        const text = typeof (recent[i].text) === "string" ? recent[i].text : Object.keys(recent[i].text).sort((x, y) => x - y).reduce((x, y) => x + (typeof (recent[i].text[y]) === "string" ? recent[i].text[y] : recent[i].text[y].name), "");

                                        self.background.shootingStars[id] = { text: text, author: recent[i].author, url: dataURL, offset: offset, x: 100, y: 0, opacity: 0, rotation: degrees, delay: _random(0, 1000), duration: text.length * 1000, state: "running" };

                                        anime({
                                            targets: self.background.shootingStars[id],
                                            x: [{ value: 0, delay: 0, easing: "linear" }],
                                            y: [{ value: 100, delay: 0, easing: "linear" }],
                                            opacity: [{ value: 1, easing: "easeOutSine" }, { value: 0, delay: 0, easing: "easeInSine" }],
                                            delay: _random(0, 1000),
                                            duration: text.length * 1000,
                                            round: 100,
                                            complete: () => {
                                                delete self.background.shootingStars[id];
                                            }
                                        });
                                    }
                                }
                            }
                        }*/

                        self.refreshRequired = true;
                    }
                }
            });
            onValue(query(databaseRef(database, databaseRoot + "/logs"), orderByChild("timestamp"), limitToLast(100)), async snapshot => {
                if (snapshot.exists()) {
                    const logs = snapshot.val();
                    let updated = false;

                    for (const key in logs) {
                        const index = self.logs.findIndex(x => x.id === key);

                        if (index >= 0) {
                            if (self.logs[index].timestamp < logs[key].timestamp) {
                                self.logs.splice(index, 1);
                            } else {
                                continue;
                            }
                        }

                        logs[key]["id"] = key;
                        self.logs.push(logs[key]);
                        updated = true;
                    }

                    if (updated) {
                        self.logs.sort((x, y) => x.timestamp - y.timestamp);

                        if (self.logs.length > 100) {
                            self.logs.splice(0, self.logs.length - 100);
                        }
                    }
                }
            });
        },
        unmounted: function () {
            if (vrmModel !== null) {
                scene.remove(vrmModel.scene);
                vrmModel = null;
            }

            //off(query(databaseRef(database, databaseRoot + "/images"), limitToLast(100)));
            off(databaseRef(database, databaseRoot + "/stars"));
            off(query(databaseRef(database, databaseRoot + "/words"), orderByChild("timestamp"), limitToLast(10)));
            off(query(databaseRef(database, databaseRoot + "/likes"), orderByChild("timestamp"), limitToLast(100)));
            off(query(databaseRef(database, databaseRoot + "/logs"), orderByChild("timestamp"), limitToLast(100)));
        }
    }).mount("#app");

    window.addEventListener("resize", event => {
        //let container = app.$refs.container;
        const rect = app.$refs.wall.getBoundingClientRect();

        app.wall.canvasSize.width = rect.width;
        app.wall.canvasSize.height = rect.height;
        app.wall.canvasSize.deviceWidth = rect.width * window.devicePixelRatio;
        app.wall.canvasSize.deviceHeight = rect.height * window.devicePixelRatio;

        app.insetTop = app.$refs.indicator.getBoundingClientRect().height;
        app.insetBottom = app.$refs.blank.getBoundingClientRect().height;
        app.canvasSize.width = app.character.width;
        app.canvasSize.height = app.character.height;
        app.canvasSize.deviceWidth = app.character.width * window.devicePixelRatio;
        app.canvasSize.deviceHeight = app.character.height * window.devicePixelRatio;
        app.canvasSize.alternative.width = app.character.alternative.width;
        app.canvasSize.alternative.height = app.character.alternative.height;
        app.canvasSize.alternative.deviceWidth = app.character.alternative.width * window.devicePixelRatio;
        app.canvasSize.alternative.deviceHeight = app.character.alternative.height * window.devicePixelRatio;

        app.$nextTick(() => {
            app.renderBackground();
        });
        /*app.animationQueue.unshift({ character: app.character, images: [].concat(app.cachedSprites) });

        if (app.alternative !== null) {
            app.animationQueue.unshift({ character: app.character.alternative, images: [].concat(app.alternativeCachedSprites) });
        }*/

        //app.$refs.ticker.style.width = document.body.querySelector("#input .columns>.column .control:nth-last-of-type(1) .level:nth-last-of-type(1) form").getBoundingClientRect().width + 'px';

        /*const width = window.innerWidth;
        const height = window.outerHeight;
    
        bloomPass.setSize(width, height);
        fxaaShader.uniforms.resolution.value.set(1 / (width * window.devicePixelRatio), 1 / (height * window.devicePixelRatio));
    
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(width, height);
    
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    
        composer.setPixelRatio(window.devicePixelRatio);
        composer.setSize(width, height);*/

        /*app.$nextTick(() => {
            for (const clip of document.body.querySelectorAll(".container>.wrap>.frame .clip")) {
                let width = 0;

                for (const element of clip.querySelectorAll(":scope .ticker-wrap .ticker .item")) {
                    width += element.getBoundingClientRect().width;
                }

                if (width > 0) {
                    app.tickerWidth = Math.min(width / 2, document.body.querySelector(".container>.wrap>.frame .level").getBoundingClientRect().width);
                    clip.querySelector(":scope .ticker-wrap .ticker").style.width = width + "px";
                }
            }
        });*/
    });
    window.addEventListener("click", event => {
        if (app.isVisible) {
            const element = app.$refs.three;
            const x = event.clientX - element.offsetLeft - (window.innerWidth - element.offsetWidth);
            const y = event.clientY - element.offsetTop - (window.innerHeight - element.offsetHeight);
            const w = element.offsetWidth;
            const h = element.offsetHeight;

            mouse.x = (x / w) * 2 - 1;
            mouse.y = -(y / h) * 2 + 1;

            raycaster.setFromCamera(mouse, camera);

            const intersects = raycaster.intersectObjects(scene.children, true);

            for (let intersect of intersects) {
                if (intersect.object.name === "face") {
                    //app.blendShapeAnimationQueue.push([{ name: THREE.VRMSchema.BlendShapePresetName.BlinkL, time: 0.0, duration: 0.5, start: 0.0, end: 2.0 }, { name: THREE.VRMSchema.BlendShapePresetName.BlinkR, time: 0.0, duration: 0.5, start: 0.0, end: 2.0 }]);

                    break;
                } else if (intersect.object.name.indexOf("breast") >= 0) {
                    /*if (random(0, 1) === 0) {
                        app.blendShapeAnimationQueue.push([{ name: THREE.VRMSchema.BlendShapePresetName.BlinkL, time: 0.0, duration: 0.5, start: 0.0, end: 0.5 }, { name: THREE.VRMSchema.BlendShapePresetName.BlinkL, time: 0.0, duration: 3.0, start: 0.5, end: 0.5 }, { name: THREE.VRMSchema.BlendShapePresetName.BlinkL, time: 0.0, duration: 0.5, start: 0.5, end: 0.0 }, { name: THREE.VRMSchema.BlendShapePresetName.BlinkR, time: 0.0, duration: 0.5, start: 0.0, end: 0.5 }, { name: THREE.VRMSchema.BlendShapePresetName.BlinkR, time: 0.0, duration: 3.0, start: 0.5, end: 0.5 }, { name: THREE.VRMSchema.BlendShapePresetName.BlinkR, time: 0.0, duration: 0.5, start: 0.5, end: 0.0 }]);
                    } else {
                        app.blendShapeAnimationQueue.push([{ name: THREE.VRMSchema.BlendShapePresetName.Angry, time: 0.0, duration: 0.5, start: 0.0, end: 0.5 }, { name: THREE.VRMSchema.BlendShapePresetName.Angry, time: 0.0, duration: 3.0, start: 0.5, end: 0.5 }, { name: THREE.VRMSchema.BlendShapePresetName.Angry, time: 0.0, duration: 0.5, start: 0.5, end: 0.0 }, { name: THREE.VRMSchema.BlendShapePresetName.O, time: 0.0, duration: 0.5, start: 0.0, end: 1.0 }, { name: THREE.VRMSchema.BlendShapePresetName.O, time: 0.0, duration: 3.0, start: 1.0, end: 1.0 }, { name: THREE.VRMSchema.BlendShapePresetName.O, time: 0.0, duration: 0.5, start: 1.0, end: 0.0 }]);
                    }*/

                    break;
                }
            }
        }
    });
    window.addEventListener("dblclick", event => {
        if (app.isVisible) {
            const element = app.$refs.three;
            const x = event.clientX - element.offsetLeft - (window.innerWidth - element.offsetWidth);
            const y = event.clientY - element.offsetTop - (window.innerHeight - element.offsetHeight);
            const w = element.offsetWidth;
            const h = element.offsetHeight;

            mouse.x = (x / w) * 2 - 1;
            mouse.y = -(y / h) * 2 + 1;

            raycaster.setFromCamera(mouse, camera);

            if (raycaster.intersectObjects(scene.children, true).length > 0) {
                app.activate();
            }
        }
    });
    window.addEventListener("keydown", event => {
        if (!app.isDebug || event.ctrlKey) {
            controls.enabled = true;
        }
    });
    window.addEventListener("keyup", event => {
        if (!app.isDebug) {
            controls.enabled = false;
        }
    });
    window.addEventListener("mousedown", event => {
        if (app.isVisible && !controls.enabled && event.button === 0 && !isTouching) {
            let minDistance = Number.MAX_SAFE_INTEGER;
            let bestIntersect = null;
            const element = app.$refs.three;
            const x = event.clientX - element.offsetLeft - (window.innerWidth - element.offsetWidth);
            const y = event.clientY - element.offsetTop - (window.innerHeight - element.offsetHeight);
            const w = element.offsetWidth;
            const h = element.offsetHeight;

            mouse.x = (x / w) * 2 - 1;
            mouse.y = -(y / h) * 2 + 1;

            raycaster.setFromCamera(mouse, camera);

            for (let intersect of raycaster.intersectObjects(scene.children, true)) {
                if (intersect.distance < minDistance) {
                    bestIntersect = intersect;
                    minDistance = intersect.distance;
                }
            }

            if (bestIntersect !== null) {
                let springBoneIndex = 0;

                draggableBone = { point: { x: x, y: y }, direction: { x: 0, y: 0, }, distance: 0, index: -1 };
                minDistance = Number.MAX_SAFE_INTEGER;

                for (const springBoneJoint of vrmModel.springBoneManager.joints) {
                    const distance = springBoneJoint.bone.getWorldPosition(new Vector3()).distanceTo(bestIntersect.point);

                    if (distance < minDistance) {
                        draggableBone.index = springBoneIndex;
                        minDistance = distance;
                    }

                    springBoneIndex++;
                }

                if (app.character !== null) {
                    app.sequenceQueue.push(app.prepare(app.character.sequences.filter((x) => x.name === "TouchStart"), bestIntersect.object.name));
                }
            }
        }
    });
    window.addEventListener("mousemove", event => {
        /*if (vrmModel) {
     
            const range = CAMERA_Z * Math.tan(CAMERA_FOV / 360.0 * Math.PI);
            const px = (2.0 * event.clientX - window.innerWidth) / window.outerHeight * range;
            const py = -(2.0 * event.clientY - window.outerHeight) / window.outerHeight * range;
     
            vrmModel.humanoid.getBoneNode(THREE.VRMSchema.HumanoidBoneName.Hips).position.set(px, py, 0.0);
        }*/
        if (app.isVisible && !isTouching) {
            const element = app.$refs.three;
            const x = event.clientX - element.offsetLeft - (window.innerWidth - element.offsetWidth);
            const y = event.clientY - element.offsetTop - (window.innerHeight - element.offsetHeight);
            const w = element.offsetWidth;
            const h = element.offsetHeight;

            mouse.x = (x / w) * 2 - 1;
            mouse.y = -(y / h) * 2 + 1;

            if (!controls.enabled && event.button === 0) {
                if (draggableBone !== null) {
                    const vector = new Vector2(draggableBone.point.x - x, y - draggableBone.point.y);

                    draggableBone.direction = vector.normalize();
                    draggableBone.distance = Math.sqrt((draggableBone.point.x - x) * (draggableBone.point.x - x) + (draggableBone.point.y - y) * (draggableBone.point.y - y));
                }

                lookAnimation = { time: 0.0, duration: 0.5, source: { x: lookAtTarget.position.x, y: lookAtTarget.position.y }, target: { x: (x - 0.5 * w) / w * 10.0, y: (y - 0.5 * h) / h * -10.0 } };
            }
        }
    });
    window.addEventListener("mouseup", event => {
        if (app.isVisible && !controls.enabled && event.button === 0 && !isTouching) {
            draggableBone = null;

            if (app.character !== null) {
                app.sequenceQueue.push(app.prepare(app.character.sequences.filter((x) => x.name === "TouchEnd")));
            }
        }
    });
    window.addEventListener("touchstart", event => {
        event.stopPropagation();

        if (app.isVisible) {
            const element = app.$refs.three;
            const x = event.changedTouches[0].clientX - element.offsetLeft - (window.innerWidth - element.offsetWidth);
            const y = event.changedTouches[0].clientY - element.offsetTop - (window.innerHeight - element.offsetHeight);
            const w = element.offsetWidth;
            const h = element.offsetHeight;

            mouse.x = (x / w) * 2 - 1;
            mouse.y = -(y / h) * 2 + 1;

            raycaster.setFromCamera(mouse, camera);

            if (tapCount == 0) {
                tapCount++;

                setTimeout(() => {
                    tapCount = 0;
                }, 500);

                let minDistance = Number.MAX_SAFE_INTEGER;
                let bestIntersect = null;

                for (let intersect of raycaster.intersectObjects(scene.children, true)) {
                    if (intersect.distance < minDistance) {
                        bestIntersect = intersect;
                        minDistance = intersect.distance;
                    }
                }

                if (bestIntersect !== null) {
                    let springBoneIndex = 0;

                    draggableBone = { point: { x: x, y: y }, direction: { x: 0, y: 0, }, distance: 0, index: -1 };
                    minDistance = Number.MAX_SAFE_INTEGER;

                    for (const springBoneJoint of vrmModel.springBoneManager.joints) {
                        const distance = springBoneJoint.bone.getWorldPosition(new Vector3()).distanceTo(bestIntersect.point);

                        if (distance < minDistance) {
                            draggableBone.index = springBoneIndex;
                            minDistance = distance;
                        }

                        springBoneIndex++;
                    }

                    if (app.character !== null) {
                        app.sequenceQueue.push(app.prepare(app.character.sequences.filter((x) => x.name === "TouchStart"), bestIntersect.object.name));
                    }
                }

                lookAnimation = { time: 0.0, duration: 0.5, source: { x: lookAtTarget.position.x, y: lookAtTarget.position.y }, target: { x: (x - 0.5 * w) / w * 10.0, y: (y - 0.5 * h) / h * -10.0 } };
            } else {
                if (raycaster.intersectObjects(scene.children, true).length > 0) {
                    app.activate();
                }

                tapCount = 0;
            }
        }

        isTouching = true;
    });
    window.addEventListener("touchmove", event => {
        event.stopPropagation();

        if (app.isVisible) {
            const element = app.$refs.three;
            const x = event.changedTouches[0].clientX - element.offsetLeft - (window.innerWidth - element.offsetWidth);
            const y = event.changedTouches[0].clientY - element.offsetTop - (window.innerHeight - element.offsetHeight);
            const w = element.offsetWidth;
            const h = element.offsetHeight;

            mouse.x = (x / w) * 2 - 1;
            mouse.y = -(y / h) * 2 + 1;

            if (draggableBone !== null) {
                const vector = new Vector2(draggableBone.point.x - x, y - draggableBone.point.y);

                draggableBone.direction = vector.normalize();
                draggableBone.distance = Math.sqrt((draggableBone.point.x - x) * (draggableBone.point.x - x) + (draggableBone.point.y - y) * (draggableBone.point.y - y));
            }

            lookAnimation = { time: 0.0, duration: 0.5, source: { x: lookAtTarget.position.x, y: lookAtTarget.position.y }, target: { x: (x - 0.5 * w) / w * 10.0, y: (y - 0.5 * h) / h * -10.0 } };
        }
    });
    window.addEventListener("touchend", event => {
        event.stopPropagation();

        draggableBone = null;
        lookAnimation = { time: 0.0, duration: 0.5, source: { x: lookAtTarget.position.x, y: lookAtTarget.position.y }, target: { x: 0.0, y: 0.0 } };

        if (app.isVisible && app.character !== null) {
            app.sequenceQueue.push(app.prepare(app.character.sequences.filter((x) => x.name === "TouchEnd")));
        }

        isTouching = false;
    });
    window.addEventListener("touchcancel", event => {
        event.stopPropagation();

        draggableBone = null;
        lookAnimation = { time: 0.0, duration: 0.5, source: { x: lookAtTarget.position.x, y: lookAtTarget.position.y }, target: { x: 0.0, y: 0.0 } };
        isTouching = false;
    });
    window.addEventListener("dragover", (event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "copy";
    }, false);
    window.addEventListener("drop", (event) => {
        event.stopPropagation();
        event.preventDefault();

        for (let file of event.dataTransfer.files) {
            const name = file.name.toLowerCase();

            if (name.endsWith(".vrm")) {
                let reader = new FileReader();

                reader.addEventListener("load", (e) => {
                    const loader = new GLTFLoader();

                    loader.register((parser) => {
                        return new VRMLoaderPlugin(parser);
                    });
                    loader.crossOrigin = "anonymous";
                    loader.load(
                        e.target.result,
                        (gltf) => {
                            if (vrmModel !== null) {
                                scene.remove(vrmModel.scene);
                            }

                            vrmModel = gltf.userData.vrm;
                            vrmModel.visible = false;
                            vrmModel.scene.rotation.y = Math.PI;

                            if (vrm.lookAt !== undefined) {
                                vrm.lookAt.target = lookAtTarget;
                            }

                            vrmSpringBones.splice(0);

                            if (vrmModel.springBoneManager !== null) {
                                for (const springBoneJoint of vrmModel.springBoneManager.joints) {
                                    vrmSpringBones.push({ gravityDir: springBoneJoint.settings.gravityDir.clone(), gravityPower: springBoneJoint.settings.gravityPower });
                                }
                            }

                            scene.add(vrmModel.scene);
                            app.progress = null;
                        },
                        (progress) => app.progress = progress.loaded / progress.total,
                        (error) => console.error(error)
                    );
                });
                reader.readAsDataURL(file);
            } else if (name.endsWith(".json")) {
                let reader = new FileReader();

                reader.addEventListener("load", (e) => {
                    try {
                        app.character = JSON.parse(e.target.result);
                    } catch (e) {
                        app.notify({ text: error.message, accent: app.character.accent, image: app.character.image });
                        console.error(e);

                        return;
                    }

                    app.sequenceQueue.splice(0);
                    app.sequenceQueue.push(app.prepare(app.character.sequences.filter((x) => x.name === "Start")));
                });
                reader.readAsText(file);
            }
        }

    }, false);
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", e => {
        if (e.matches) {
            app.isDarkMode = true;
        } else {
            app.isDarkMode = false;
        }
    });
});
