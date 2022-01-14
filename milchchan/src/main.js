import { createApp } from 'vue/dist/vue.esm-bundler.js';
import * as THREE from 'three';
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
import { VRM } from '@pixiv/three-vrm';
import Stats from 'stats.js'
import anime from 'animejs/lib/anime.es.js';
import { TinySegmenter } from './tiny-segmenter.js';
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, signInWithCredential, signOut, updateProfile, onAuthStateChanged, GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider } from "firebase/auth";
import { getDatabase, ref as databaseRef, query, orderByChild, limitToLast, startAt, get, push, child, runTransaction, onValue, off } from "firebase/database";
import { getStorage, ref as storageRef, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { initializeAnalytics } from 'firebase/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyDTVxDJj7rqG9L-Clvba2Tao9B0hkcxjcE",
    authDomain: "milchchan.firebaseapp.com",
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

const debug = decodeURIComponent(window.location.hash.substring(1)) === "debug";
const databaseRoot = "bot";
const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    preserveDrawingBuffer: true
});

//renderer.setSize(window.innerWidth, window.outerHeight);
//renderer.setPixelRatio(window.devicePixelRatio);
renderer.setClearColor(0xffffff, 0);
renderer.toneMappingExposure = 1;
renderer.toneMapping = THREE.LinearToneMapping;
renderer.outputEncoding = THREE.sRGBEncoding;
//renderer.autoClear = false;

const CAMERA_FOV = 60.0;
const CAMERA_Z = 5;//1.25;
const camera = new THREE.PerspectiveCamera(CAMERA_FOV, renderer.domElement.width / renderer.domElement.height, 0.1, 1000);

camera.position.set(0.0, 1.5, CAMERA_Z);

const controls = new OrbitControls(camera, renderer.domElement);

controls.enabled = false;
controls.enableKeys = false;
controls.screenSpacePanning = false;
controls.enableDamping = true;
controls.minPolarAngle = 30 * Math.PI / 180;
controls.maxPolarAngle = 150 * Math.PI / 180;
controls.minAzimuthAngle = -45 * Math.PI / 180;
controls.maxAzimuthAngle = 45 * Math.PI / 180;
controls.minDistance = 0.75;
controls.maxDistance = 5;
controls.target.set(0.0, 2.5, 1.0);
controls.update();

const scene = new THREE.Scene();
const light = new THREE.DirectionalLight(0xffffff);
const hemisphereLight = new THREE.HemisphereLight(0xd7fbff, 0x7e94a8, 0.7);

light.intensity = 0.9;
light.position.set(0.0, 10.0, 10.0).normalize();

scene.add(light);
scene.add(hemisphereLight);
//scene.add(new THREE.GridHelper(10, 10));
//scene.add(new THREE.AxesHelper(5));

const lookAtTarget = new THREE.Object3D();

camera.add(lookAtTarget);

const composer = new EffectComposer(renderer);

var bloomPass = new UnrealBloomPass(new THREE.Vector2(renderer.domElement.width, renderer.domElement.height), 1.5, 0.4, 0.85);
var hueSaturation = new ShaderPass(HueSaturationShader);
var brightnessContrastShader = new ShaderPass(BrightnessContrastShader);
var gammaCorrectionShader = new ShaderPass(GammaCorrectionShader);
var effectCopy = new ShaderPass(CopyShader);
var vignette = new ShaderPass(VignetteShader);
var colorCorrection = new ShaderPass(ColorCorrectionShader);
var rgbShift = new ShaderPass(RGBShiftShader);
var fxaaShader = new ShaderPass(FXAAShader);

bloomPass.renderToScreen = true;
bloomPass.threshold = 0.5;
bloomPass.strength = 0.25;
bloomPass.radius = 0;

hueSaturation.uniforms.hue.value = -0.025;
hueSaturation.uniforms.saturation.value = 0.25;
//brightnessContrastShader.uniforms.brightness.value = 0.5;
brightnessContrastShader.uniforms.contrast.value = -0.1;
colorCorrection.uniforms.mulRGB.value = new THREE.Vector3(0.95, 0.95, 0.95);
colorCorrection.uniforms.powRGB.value = new THREE.Vector3(1, 1, 1);
rgbShift.uniforms.amount.value = 0.0001;
rgbShift.uniforms.angle.value = 0;
vignette.uniforms.darkness.value = 0.25;
vignette.uniforms.offset.value = 0.0
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
composer.addPass(vignette);
//composer.addPass(gammaCorrectionShader);
//composer.addPass(fxaaShader);
composer.addPass(effectCopy);

const stats = new Stats();

stats.domElement.style.position = "fixed";
stats.domElement.style.top = "auto";
stats.domElement.style.bottom = "0";
stats.domElement.style.left = "auto";
stats.domElement.style.right = "0";

if (!debug) {
    stats.domElement.classList.add("is-hidden");
}

const clock = new THREE.Clock();
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
let vrmModel = null;
let vrmSpringBones = [];
let animationIndex = 0;
const animationSkipFrames = 2;
let idleTime = 0.0;
const blinkThreshold = 5.0;
let waitTime = 0.0;
const waitThreshold = 1.0;
let activateTime = 0.0;
const activateThreshold = 10.0;
let alertTime = 0.0;
const alertThreshold = 30.0;
let lookAnimation = null;
let randomWind = null;
let backgroundTime = 30.0;
const backgroundThreshold = 30.0;
let draggableBone = null;
let draggingBones = null;
let tapCount = 0;

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
                isMuted: true,
                isLoading: false,
                isRevealed: false,
                isOverlayed: false,
                isUpdating: false,
                isBlinded: false,
                isPopup: false,
                isExpanded: false,
                isLearning: false,
                isAnimating: false,
                isHangingOn: false,
                isSubmitting: false,
                isStared: false,
                mode: null,
                feedQueue: [],
                sequenceQueue: [],
                progress: 0,
                user: null,
                input: "",
                animatedInputLength: 0,
                maxInputLength: 100,
                inputHasError: false,
                messages: [],
                maxMessages: 10,
                word: null,
                words: [],
                tags: [],
                maxTags: 10,
                scrollTimeoutID: undefined,
                stars: -1,
                animatedStars: 0,
                screenshot: null,
                notifications: [],
                notificationHeight: 0,
                animatedNotificationHeight: 0,
                recentImages: [],
                backgroundImagesQueue: [],
                backgroundImages: [],
                isUploading: false,
                animations: null,
                currentAnimations: [],
                blendShapeAnimations: [],
                insetTop: 0,
                insetBottom: 0,
                text: [],
                popupTextHeight: 0,
                animatedPopupTextHeight: 0,
                tickerWidth: 0,
                animatedTickerWidth: 0,
                message: null,
                states: {},
                character: null,
                wordDictionary: {},
                reverseWordDictionary: {},
                attributes: ["名前", "所属", "時間", "場所", "する事", "生き物", "食べ物", "飲み物", "聞くもの", "見るもの", "読むもの", "使う物", "身につけるもの", "乗り物", "部位", "病気"]
            }
        },
        watch: {
            isMuted(newValue) {
                try {
                    localStorage.setItem("character", JSON.stringify({ mute: newValue }));
                } catch (e) {
                    localStorage.removeItem("character");
                }
            },
            words: {
                handler: () => {
                    app.$nextTick(() => {
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
                    });
                },
                deep: true
            },
            tickerWidth(newValue) {
                const self = this;
                const obj = { width: this.animatedTickerWidth };

                anime({
                    targets: obj,
                    width: newValue,
                    round: 1,
                    duration: 500,
                    easing: "linear",
                    update: () => {
                        self.animatedTickerWidth = obj.width;
                    }
                });
            },
            backgroundImages: {
                handler: () => {
                    app.$nextTick(() => {
                        const elements = document.body.querySelectorAll("#app>.background>div");

                        if (elements.length > 1) {
                            const offset = elements.length - 1;
                            const frameRate = 15;
                            let index = 0;
                            let startTime = null;

                            for (const element of elements) {
                                const keyframes = [];

                                for (let i = 0; i < elements.length; i++) {
                                    if (i === index) {
                                        keyframes.push({ visibility: "visible" });
                                    } else {
                                        keyframes.push({ visibility: "hidden" });
                                    }
                                }

                                const animation = element.animate(keyframes, {
                                    fill: 'forwards',
                                    easing: 'steps(' + offset + ')',
                                    duration: 1000 / frameRate * elements.length,
                                    iterations: Infinity
                                });

                                if (startTime === null) {
                                    startTime = animation.startTime;
                                } else {
                                    animation.startTime = startTime;
                                }

                                index++;
                            }
                        }
                    });
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
                const obj = { height: this.animatedPopupTextHeight };

                anime({
                    targets: obj,
                    height: newValue,
                    round: 1,
                    duration: 500,
                    easing: "linear",
                    update: () => {
                        this.animatedPopupTextHeight = obj.height
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
                const obj = { height: this.animatedNotificationHeight };

                anime({
                    targets: obj,
                    height: newValue,
                    round: 1,
                    duration: 500,
                    easing: "linear",
                    update: () => {
                        this.animatedNotificationHeight = obj.height
                    }
                });
            },
            stars(newValue) {
                const obj = { count: this.animatedStars };

                anime({
                    targets: obj,
                    count: newValue,
                    round: 1,
                    duration: 500,
                    easing: "linear",
                    update: () => {
                        this.animatedStars = obj.count
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
                } else if (event === FacebookAuthProvider.PROVIDER_ID) {
                    const provider = new FacebookAuthProvider();

                    provider.addScope("public_profile");

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
                } else if (event === TwitterAuthProvider.PROVIDER_ID) {
                    const provider = new TwitterAuthProvider();

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

                        try {
                            localStorage.setItem("credential", JSON.stringify({ providerId: credential.providerId, accessToken: credential.accessToken, secret: credential.secret }));
                        } catch (e) {
                            localStorage.removeItem("credential");
                        }
                    } catch (error) {
                        console.error(error.code, error.message);
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
                this.isBlinded = true;
                activateTime = 0.0;
            },
            send: async function (event) {
                if (this.isDebug) {
                    if (this.input.length > 0) {
                        const tags = this.input.split(/\s/);
                        const keys = [];

                        for (const image of this.backgroundImages) {
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
                    } else {
                        for (const image of this.backgroundImages) {
                            this.input = image.id;

                            break;
                        }
                    }
                } else if (this.input.length > 0 && this.input.length <= this.maxInputLength) {
                    this.learn({ name: this.input });
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
            upload: async function (event) {
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
                const timestamp = Math.floor(new Date() / 1000);
                const files = [];
                const paths = [];

                for (const file of event.target.files) {
                    files.push(file);
                }

                this.isUploading = true;

                for (const file of files.sort((x, y) => {
                    if (x.name > y.name) {
                        return 1;
                    } else if (x.name < y.name) {
                        return -1;
                    }

                    return 0;
                })) {
                    const uploadTask = uploadBytesResumable(storageRef(storage, `images/${generateUuid()}`), file);

                    try {
                        await new Promise(function (resolve, reject) {
                            uploadTask.on("state_changed", (snapshot) => {
                                self.progress = snapshot.bytesTransferred / snapshot.totalBytes / files.length + paths.length / files.length;
                            }, (error) => {
                                reject(error);
                            }, () => {
                                resolve(uploadTask.snapshot.ref);
                            });
                        });
                    } catch (error) {
                        this.notify({ text: error.message, accent: this.character.accent, image: this.character.image });
                        console.error(error);
                    }

                    paths.push(uploadTask.snapshot.ref.fullPath);
                }

                try {
                    await runTransaction(databaseRef(database, `${databaseRoot}/images/${push(child(databaseRef(database), `${databaseRoot}/images`)).key}`), current => {
                        return { paths: paths, timestamp: timestamp };
                    });
                } catch (e) {
                    this.notify({ text: e.message, accent: this.character.accent, image: this.character.image });
                    console.error(e);
                }

                //push(databaseRef(database, `${databaseRoot}/images`), { paths: paths, timestamp: Math.floor(new Date() / 1000) });

                this.progress = null;
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
                const timestamp = Math.floor(new Date() / 1000);

                if (word.name in this.wordDictionary) {
                    delete this.wordDictionary[word.name];
                }

                Object.keys(this.reverseWordDictionary).forEach((key) => {
                    if (this.reverseWordDictionary[key].words.some((x) => x === word.name)) {
                        delete this.reverseWordDictionary[key];
                    }
                });

                this.isSubmitting = true;

                try {
                    const result = await runTransaction(databaseRef(database, databaseRoot + "/words/" + word.name), current => {
                        if (current) {
                            let updateRequired = false;

                            for (const attribute of word.attributes) {
                                if (attribute.name in current.attributes) {
                                    if (current.attributes[attribute.name] > 0) {
                                        if (!attribute.value) {
                                            updateRequired = true;

                                            break;
                                        }
                                    } else if (attribute.value) {
                                        updateRequired = true;

                                        break;
                                    }
                                } else {
                                    updateRequired = true;

                                    break;
                                }
                            }

                            if (updateRequired) {
                                let deleteRequired = true;
                                const c = { attributes: {} };

                                for (const attribute of word.attributes) {
                                    if (attribute.value) {
                                        if (attribute.name in current.attributes && current.attributes[attribute.name] > 0) {
                                            c.attributes[attribute.name] = current.attributes[attribute.name];
                                        } else {
                                            c.attributes[attribute.name] = timestamp - 1;
                                        }

                                        deleteRequired = false;
                                    } else {
                                        c.attributes[attribute.name] = 0;
                                    }
                                }

                                if (deleteRequired) {
                                    return null;
                                } else {
                                    c["timestamp"] = timestamp;

                                    return c;
                                }
                            } else {
                                return undefined;
                            }
                        } else {
                            current = { attributes: {}, timestamp: timestamp };

                            for (const attribute of word.attributes) {
                                if (attribute.value) {
                                    current.attributes[attribute.name] = timestamp;
                                } else {
                                    current.attributes[attribute.name] = 0;
                                }
                            }
                        }

                        return current;
                    });

                    if (result.committed) {
                        if (result.snapshot.exists()) {
                            const dictionary = result.snapshot.val();
                            let timestamps = [];

                            for (const key in dictionary.attributes) {
                                if (typeof dictionary.attributes[key] === "number" && dictionary.attributes[key] > 0 && this.attributes.includes(key)) {
                                    timestamps.push(dictionary.attributes[key]);
                                }
                            }

                            if (timestamps.length === 1 && timestamps[0] === dictionary.timestamp) {
                                function format(format) {
                                    var args = arguments;

                                    return format.replace(/\{(\d)\}/g, function (m, c) { return args[parseInt(c) + 1] });
                                }

                                runTransaction(databaseRef(database, databaseRoot + "/stars"), count => {
                                    return (count || 0) + 1;
                                });

                                for (const obj of this.prepare(this.character.sequences.filter((x) => x.name === "Learned"))) {
                                    if (obj.type === "Message") {
                                        this.notify({ text: format(obj.text, word.name), accent: this.character.accent, image: this.character.image });
                                    }
                                }

                                this.isStared = true;

                                window.setTimeout(() => {
                                    self.isStared = false;
                                }, 3000);

                                if (!this.isMuted) {
                                    this.$refs.twinkle.play();
                                }
                            }
                        } else {
                            runTransaction(databaseRef(database, databaseRoot + "/stars"), count => {
                                if (count) {
                                    return count - 1;
                                }

                                return undefined;
                            });
                        }

                        this.word = null;
                    }
                } catch (error) {
                    this.notify({ text: error.message, accent: this.character.accent, image: this.character.image });
                    console.error(error);
                }

                this.isSubmitting = false;
            },
            learn: async function (word) {
                function format(format) {
                    var args = arguments;

                    return format.replace(/\{(\d)\}/g, function (m, c) { return args[parseInt(c) + 1] });
                }

                const sequence = [];
                const attributes = [];

                if ("attributes" in word) {
                    for (const attribute of this.attributes) {
                        if (attribute in word.attributes) {
                            if (word.attributes[attribute] > 0) {
                                attributes.push({ name: attribute, value: true });
                            } else {
                                attributes.push({ name: attribute, value: false });
                            }
                        }
                    }
                } else {
                    const snapshot = await get(databaseRef(database, databaseRoot + "/words/" + word.name));

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
                    } else {
                        for (const attribute of this.attributes) {
                            attributes.push({ name: attribute, value: false });
                        }
                    }
                }

                this.word = { name: word.name, attributes: attributes };

                for (const obj of this.prepare(this.character.sequences.filter((x) => x.name === "Learn"))) {
                    if (obj.type === "Message") {
                        sequence.push({ type: obj.type, speed: obj.speed, duration: obj.duration, text: format(obj.text, word.name) });
                    } else {
                        sequence.push(obj);
                    }
                }

                if (sequence.length > 0) {
                    this.sequenceQueue.push(sequence);
                }
            },
            activate: async function (tokens = []) {
                idleTime = activateTime = 0.0;

                if (this.user.uid !== null) {
                    if (Math.random() < 0.5) {
                        function _random(min, max) {
                            min = Math.ceil(min);
                            max = Math.floor(max);
    
                            return Math.floor(Math.random() * (max - min)) + min;
                        }

                        const i = _random(0, this.words.length);

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

                            for (const word of this.take(shuffle(this.words), i)) {
                                if (word.name.indexOf(this.character.name) !== -1) {
                                    selectedTokens.push(word.name);
                                }
                            }

                            if (!await this.talk(selectedTokens.concat(tokens))) {
                                this.talk();
                            }

                            return;
                        }
                    }

                    if (!await this.talk(tokens)) {
                        this.talk();
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
                        if (!regex.test(token)) {
                            if (token in this.wordDictionary === false || timestamp - this.wordDictionary[token].timestamp >= timeout) {
                                const snapshot = await get(databaseRef(database, databaseRoot + "/words/" + token));

                                this.wordDictionary[token] = { attributes: [], timestamp: timestamp };

                                if (snapshot.exists()) {
                                    const word = snapshot.val();

                                    for (let attribute in word.attributes) {
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

                                        return true;
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

                                                return true;
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

                    return false;
                }

                for (const obj of this.prepare(sequences)) {
                    if (obj.type === "Message") {
                        const temp = await this.generate(obj.text);

                        if (temp === null) {
                            this.isLoading = false;

                            return false;
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

                    return true;
                }

                this.isLoading = false;

                return false;
            },
            generate: async function (message, hints = []) {
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
                let segmenter = new TinySegmenter();
                let tokens = Array.isArray(message) ? message : segmenter.segment(message);
                let hintDictionary = {};
                let tokenSet = [];
                const regex = new RegExp("[.#$\\[\\]]");
                let cachDictionary = {};
                const text = [];
                let index = 0;
                const epsilon = Math.pow(10, -6);
                const beamWidth = 10;
                let sequences = [{ sequence: [], score: 1.0 }]

                for (const token of hints) {
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
                }

                for (const token of tokens) {
                    if (!tokenSet.includes(token)) {
                        if (Array.isArray(token)) {
                            const terms = [];
                            const scores = [];

                            for (const attribute of token) {
                                if (attribute in hintDictionary) {
                                    for (const s of hintDictionary[attribute]) {
                                        if (!terms.includes(s)) {
                                            let isNew = true;

                                            terms.push({ name: s, attributes: this.wordDictionary[s].attributes });

                                            for (const tag of this.tags) {
                                                if (s === tag.name) {
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
                                        if (tokens.includes(word) && !terms.includes(word)) {
                                            let isNew = true;

                                            terms.push({ name: word, attributes: this.wordDictionary[word].attributes });

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
                        } else if (!regex.test(token)) {
                            const terms = [];
                            const scores = [];

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
                                    for (const key of hintDictionary[attribute]) {
                                        if (!terms.includes(key)) {
                                            let isNew = true;

                                            terms.push({ name: key, attributes: this.wordDictionary[key].attributes });

                                            for (const tag of this.tags) {
                                                if (key === tag.name) {
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
                                } else {
                                    if (attribute in this.reverseWordDictionary === false || timestamp - this.reverseWordDictionary[attribute].timestamp >= timeout) {
                                        const snapshot = await get(query(databaseRef(database, databaseRoot + "/words"), orderByChild(`attributes/${attribute}`), limitToLast(100), startAt(1)));

                                        this.reverseWordDictionary[attribute] = { words: [], timestamp: timestamp };

                                        if (snapshot.exists()) {
                                            const words = snapshot.val();

                                            for (let key in words) {
                                                this.reverseWordDictionary[attribute].words.push(key);
                                            }
                                        }
                                    }

                                    for (const word of this.reverseWordDictionary[attribute].words) {
                                        if (tokens.includes(word) && !terms.includes(word)) {
                                            let isNew = true;

                                            terms.push({ name: word, attributes: this.wordDictionary[word].attributes });

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

                        tokenSet.push(token);
                    }

                    index++;
                }

                const s = sequences[choice(softmax(sequences.map(x => x.score)))];

                for (let i = 0; i < tokens.length; i++) {
                    const key = JSON.stringify(tokens[i]);

                    if (key in cachDictionary) {
                        if (typeof cachDictionary[key] === "undefined") {
                            text.push(tokens[i]);
                        } else {
                            text.push(cachDictionary[key]);
                        }
                    } else {
                        let isNew = true;

                        for (let j = 0; j < s.sequence.length; j++) {
                            if (s.sequence[j].index == i) {
                                if (key == s.sequence[j].term.name) {
                                    cachDictionary[key] = undefined;
                                } else {
                                    cachDictionary[key] = s.sequence[j].term;
                                    text.push(s.sequence[j].term);
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
            blinded: async function () {
                if (this.backgroundImagesQueue.length == 0) {
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

                    for (const image of shuffle(this.recentImages)) {
                        this.backgroundImagesQueue.push(image);
                    }
                }

                const backgroundImage = this.backgroundImagesQueue.shift();
                const preloadImages = [];

                for (const image of this.backgroundImages) {
                    URL.revokeObjectURL(image.url);
                }

                this.backgroundImages.splice(0);

                for (const path of backgroundImage.paths) {
                    try {
                        preloadImages.push({ id: backgroundImage.id, blob: await this.getThumbnail(await getDownloadURL(storageRef(storage, path)), Math.max(window.screen.width, window.screen.height)), timestamp: backgroundImage.timestamp });
                    } catch (e) {
                        this.notify({ text: e.message, accent: this.character.accent, image: this.character.image });
                        console.error(e);
                    }
                }

                for (const image of preloadImages) {
                    this.backgroundImages.push({ id: image.id, url: URL.createObjectURL(image.blob), timestamp: image.timestamp });
                }

                if ("tags" in backgroundImage) {
                    this.activate(backgroundImage.tags.filter((x) => x.indexOf(this.character.name) === -1));
                }

                this.isBlinded = false;
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
                        const baseTime = new Date().getTime() - 12 * 60 * 60 * 1000;
                        const limit = 10;
                        let scoreDictionary = {};
                        let scores = [];
                        let maxScore = epsilon;

                        for (const key in data) {
                            if ("tags" in data[key] && data[key].tags.length > 0) {
                                let termSet = [];

                                documents.push({ tokens: data[key].tags, timestamp: data[key].timestamp });

                                for (const token of data[key].tags) {
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

                                if (!(key in scoreDictionary)) {
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
            getThumbnail: async function (url, length) {
                try {
                    return await new Promise((resolve, reject) => {
                        const i = new Image();

                        i.onload = () => {
                            const canvas = document.createElement("canvas");

                            if (i.width > i.height) {
                                if (i.width > length) {
                                    canvas.width = length;
                                    canvas.height = Math.floor(length / i.width * i.height);
                                } else {
                                    canvas.width = i.width;
                                    canvas.height = i.height;
                                }
                            } else if (i.height > length) {
                                canvas.width = Math.floor(length / i.height * i.width);
                                canvas.height = length;
                            } else {
                                canvas.width = i.width;
                                canvas.height = i.height;
                            }

                            const ctx = canvas.getContext("2d");

                            ctx.drawImage(i, 0, 0, canvas.width, canvas.height);
                            ctx.canvas.toBlob(blob => {
                                resolve(blob);
                                ctx.canvas.width = ctx.canvas.height = 0;
                            }, "image/jpeg");
                        };
                        i.onerror = (error) => {
                            reject(error);
                        };
                        i.crossOrigin = "anonymous";
                        i.src = url;
                    });
                } catch (e) {
                    this.notify({ text: e.message, accent: this.character.accent, image: this.character.image });
                    console.error(e);
                }
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
            formatDate: function (event) {
                moment.locale(window.navigator.language);

                return moment(event).format("LT");
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
            tickerUpdated: function (el) {
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
            },
            arrange: function (collection, limit) {
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
            animate: function () {
                requestAnimationFrame(this.animate);

                stats.begin();

                const deltaTime = clock.getDelta();

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

                if (vrmModel) {
                    function _random(min, max) {
                        min = Math.ceil(min);
                        max = Math.floor(max);

                        return Math.floor(Math.random() * (max - min)) + min;
                    }

                    let isAnimating = false;
                    let isDeforming = false;
                    let animationData = null;
                    let updatedBlendShapeNames = [];

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
                                        vrmModel.blendShapeProxy.setValue(blendShapeAnimation.name, 0.1 * blinkOffset + (1 - 0.1) * Math.abs(Math.sin(blendShapeAnimation.end / 2 * Math.PI)));
                                        blinkRequired = false;
                                    } else {
                                        vrmModel.blendShapeProxy.setValue(blendShapeAnimation.name, Math.abs(Math.sin(blendShapeAnimation.end / 2 * Math.PI)));
                                    }

                                    this.blendShapeAnimations.splice(i, 1);
                                } else if (blendShapeAnimation.name == "blink") {
                                    vrmModel.blendShapeProxy.setValue(blendShapeAnimation.name, 0.1 * blinkOffset + (1 - 0.1) * Math.abs(Math.sin((blendShapeAnimation.time / blendShapeAnimation.duration * (blendShapeAnimation.end - blendShapeAnimation.start) + blendShapeAnimation.start) / 2 * Math.PI)));
                                    blinkRequired = false;
                                } else {
                                    vrmModel.blendShapeProxy.setValue(blendShapeAnimation.name, Math.abs(Math.sin((blendShapeAnimation.time / blendShapeAnimation.duration * (blendShapeAnimation.end - blendShapeAnimation.start) + blendShapeAnimation.start) / 2 * Math.PI)));
                                }

                                isDeforming = true;
                            }

                            updatedBlendShapeNames.push(blendShapeAnimation.name);
                        }
                    }

                    if (blinkRequired) {
                        vrmModel.blendShapeProxy.setValue("blink", 0.1 * blinkOffset);
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
                                if (this.recentImages.length > 0) {
                                    this.isBlinded = true;
                                }

                                idleTime = activateTime = 0.0;
                            } else if (idleTime >= blinkThreshold || animationData === null) {
                                this.sequenceQueue.push({ sequences: this.prepare(this.character.sequences.filter((x) => x.name === "Idle")) });
                                idleTime = 0.0;
                            }
                        }
                    }

                    if (this.sequenceQueue.length > 0) {
                        const sequence = Array.isArray(this.sequenceQueue[0]) ? this.sequenceQueue[0] : this.sequenceQueue[0].sequences;

                        if (sequence.length > 0) {
                            if (sequence[0].type == "Animation") {
                                if ("name" in sequence[0]) {
                                    if (sequence[0].name in this.animations) {
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

                                            this.currentAnimations.splice(0);

                                            for (let animation of this.animations[sequence[0].name]) {
                                                this.currentAnimations.push(animation);
                                            }

                                            sequence.shift();

                                            animationIndex = 0;
                                            animationData = this.currentAnimations[animationIndex];
                                            animationIndex += animationSkipFrames;
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
                                                    vrmModel.blendShapeProxy.setValue(blendShapeAnimation.name, Math.abs(Math.sin(blendShapeAnimation.start / 2 * Math.PI)));
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
                            } else if (sequence[0].type == "Message" && this.message === null && !isAnimating && !isDeforming) {
                                let text = "";
                                const words = [];

                                for (const inline of sequence[0].text) {
                                    if (typeof(inline) === 'object') {
                                        text += inline.name;
                                        words.push(inline);
                                    } else {
                                        text += inline;
                                    }
                                }

                                if ("character" in sequence[0]) {
                                    this.message = { time: 0, duration: sequence[0].duration, type: { elapsed: -1, speed: sequence[0].speed, reverse: false, buffer: "", count: 0 }, character: sequence[0].character, text: text, words: words };
                                } else {
                                    this.message = { time: 0, duration: sequence[0].duration, type: { elapsed: -1, speed: sequence[0].speed, reverse: false, buffer: "", count: 0 }, character: { name: this.character.name, accent: this.character.accent, image: this.character.image }, text: text, words: words };
                                }

                                sequence.shift();

                                if (!this.isMuted) {
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
                                }
                            }
                        } else if (this.message === null && !isAnimating && !isDeforming) {
                            this.sequenceQueue.shift();
                        }
                        /*} else if (app.suggestionQueue.length > 0) {
                            const suggestion = app.suggestionQueue[0];
                            const message = suggestion.messages[0];
                            let loopRequired = true;
     
                            if (message.type.reverse) {
                                if (message.type.count > 0) {
                                    message.type.elapsed += deltaTime;
     
                                    if (message.type.elapsed >= message.type.speed / 1000.0) {
                                        let index = message.type.count - 1;
     
                                        if (index < message.text.length) {
                                            let width = Math.floor(message.text.length / 2);
     
                                            if (message.type.buffer.length <= width) {
                                                message.type.count -= 1;
                                            }
     
                                            if (message.type.buffer.length > 0) {
                                                message.type.buffer = message.type.buffer.substring(message.type.buffer.length - 2, message.type.buffer.length - 1);
                                            }
                                        }
     
                                        message.type.elapsed = 0;
                                    }
                                } else if (app.isSuggested) {
                                    if (suggestion.messages.length > 1) {
                                        suggestion.messages.shift();
                                    } else {
                                        app.suggestionQueue.shift();
     
                                        if (app.suggestionQueue.length > 0 && 'highlight' in app.suggestionQueue[0]) {
                                            if ('text' in app.suggestionQueue[0].highlight) {
                                                app.highlight = app.suggestionQueue[0].highlight.text;
                                            } else {
                                                app.highlight = null;
                                            }
     
                                            if ('image' in app.suggestionQueue[0].highlight) {
                                                app.cover = app.suggestionQueue[0].highlight.image;
                                            } else {
                                                app.cover = app;
                                            }
                                        }
     
                                        app.isBlinded = true;
                                    }
                                } else if (app.isBlinded && !isActive) {
                                    if ('morphs' in suggestion) {
                                        for (let blendShape of suggestion.morphs.defaults) {
                                            vrmModel.blendShapeProxy.setValue(blendShape.name, Math.abs(Math.sin(blendShape.weight / 2 * Math.PI)));
                                        }
                                    }
     
                                    app.suggestionQueue.splice(0);
                                    app.isBlinded = false;
                                    loopRequired = false;
                                }
                            } else if (message.type.buffer.length < message.text.length) {
                                if (message.type.elapsed >= 0) {
                                    message.type.elapsed += deltaTime;
                                } else if (!isActive) {
                                    if (!app.isPreloading) {
                                        waitTime += deltaTime;
                                    }
     
                                    if (app.highlight === null && app.cover === null || waitTime >= waitThreshold) {
                                        message.type.elapsed = deltaTime;
                                        app.isBlinded = false;
                                        app.currentAnimations.splice(0);
     
                                        if ('animation' in suggestion && suggestion.animation in app.animations) {
                                            const skipFrames = 60 / 12;
                                            let animations = app.animations[suggestion.animation];
                                            let maxFrames = Math.min(animations.length, 60);
                                            let offset = Math.floor(Math.max(0, _random(0, animations.length - maxFrames)) / 2);
                                            let length = Math.round(90 / 24);
     
                                            for (let i = 0; i < maxFrames; i += skipFrames) {
                                                for (let j = 0; j < length; j++) {
                                                    app.currentAnimations.push(animations[offset + i]);
                                                }
                                            }
     
                                            for (let i = app.currentAnimations.length - 1; i >= 0; i--) {
                                                app.currentAnimations.push(animations[offset + i]);
                                            }
                                        }
     
                                        if ('morphs' in suggestion) {
                                            let nameSet = [];
     
                                            for (let blendShape of suggestion.morphs.defaults) {
                                                vrmModel.blendShapeProxy.setValue(blendShape.name, Math.abs(Math.sin(blendShape.weight / 2 * Math.PI)));
                                            }
     
                                            for (let blendShapeAnimation of suggestion.morphs.animations) {
                                                app.blendShapeAnimations.unshift(blendShapeAnimation);
                                            }
     
                                            for (let i = app.blendShapeAnimations.length - 1; i >= 0; i--) {
                                                let blendShapeAnimation = app.blendShapeAnimations[i];
     
                                                if (!nameSet.includes(blendShapeAnimation.name)) {
                                                    vrmModel.blendShapeProxy.setValue(blendShapeAnimation.name, Math.abs(Math.sin(blendShapeAnimation.start / 2 * Math.PI)));
                                                    nameSet.push(blendShapeAnimation.name);
                                                }
                                            }
                                        }
     
                                        waitTime = 0.0;
                                    } else {
                                        loopRequired = false;
                                    }
                                }
     
                                if (message.type.elapsed >= message.type.speed / 1000.0) {
                                    let index = message.type.buffer.length;
                                    let width = Math.floor(message.text.length / 2);
                                    let length = message.text.length;
     
                                    if (message.type.count >= width) {
                                        message.type.buffer += message.text.charAt(index);
                                    }
     
                                    if (message.type.count < length) {
                                        message.type.count += 1;
                                    }
     
                                    message.type.elapsed = 0;
                                }
                            } else {
                                message.time += deltaTime;
     
                                if (message.time >= message.duration) {
                                    message.type.reverse = true;
                                }
                            }
     
                            if (message.text.length === message.type.buffer.length) {
                                const characters = message.text.split("");
     
                                app.text.splice(0);
     
                                for (let i = 0; i < characters.length; i++) {
                                    app.text.push({ key: i, value: characters[i] });
                                }
                            } else {
                                let charArray = new Array();
                                let randomBuffer = "";
     
                                for (let i = 0; i < message.text.length; i++) {
                                    if (charArray.indexOf(message.text.charAt(i)) == -1 && message.text.charAt(i) != "\n" && message.text.charAt(i).match(/\s/) == null) {
                                        charArray.push(message.text.charAt(i));
                                    }
                                }
     
                                for (let i = 0; i < message.type.count; i++) {
                                    if (charArray.length > 0) {
                                        randomBuffer += charArray[~~_random(0, charArray.length)];
                                    }
                                }
     
                                if (randomBuffer.length > message.type.buffer.length) {
                                    const characters = (message.type.buffer + randomBuffer.substring(message.type.buffer.length, randomBuffer.length)).split("");
     
                                    app.text.splice(0);
     
                                    for (let i = 0; i < characters.length; i++) {
                                        app.text.push({ key: i, value: characters[i] });
                                    }
                                } else if (app.text.length !== message.type.buffer.length) {
                                    const characters = message.type.buffer.split("");
     
                                    app.text.splice(0);
     
                                    for (let i = 0; i < characters.length; i++) {
                                        app.text.push({ key: i, value: characters[i] });
                                    }
                                }
                            }
     
                            if (loopRequired && animationData === null) {
                                animationIndex = 0;
                                animationData = app.currentAnimations[animationIndex];
                                animationIndex += animationSkipFrames;
                            }*/
                        //} else {
                        /*if (app.isSuggested && app.suggestionQueue.length == 0 && !app.isComputing) {
                            const tempMessages1 = [].concat(app.messages);
                            const tempTags = [].concat(app.tags);
     
                            app.isComputing = true;
     
                            new Promise(resolve => {
                                let segmenter = new TinySegmenter();
                                const presets = [{ animation: 'idle2', name: THREE.VRMSchema.BlendShapePresetName.Fun },
                                { animation: 'jump', name: THREE.VRMSchema.BlendShapePresetName.Joy },
                                { animation: 'win', name: THREE.VRMSchema.BlendShapePresetName.Joy },
                                { animation: 'lose', name: THREE.VRMSchema.BlendShapePresetName.Sorrow }];
                                let suggestions = [];
                                let tempMessages2 = [];
                                let ids1 = [];
                                let ids2 = [];
     
                                for (let tag of tempTags.sort((x, y) => y.score - x.score)) {
                                    for (let message of tempMessages1.reverse()) {
                                        if (!ids1.includes(message.id) && segmenter.segment(message.text).includes(tag.name)) {
                                            let thread = null;
     
                                            if ('thread' in message) {
                                                for (let m of tempMessages1) {
                                                    if (message.thread == m.id) {
                                                        thread = m;
     
                                                        break;
                                                    }
                                                }
                                            }
     
                                            if (thread === null) {
                                                tempMessages2.push(message);
                                            } else {
                                                const item = presets[_random(0, 2)];
     
                                                suggestions.push({ highlight: { text: '今日の' + document.title, image: '/images/Cover.png' }, messages: [{ time: 0, duration: 5, type: { elapsed: -1, speed: 50, reverse: false, buffer: "", count: 0 }, text: thread.text }, { time: 0, duration: 5, type: { elapsed: 0, speed: 50, reverse: false, buffer: "", count: 0 }, text: message.text }], animation: item.animation, morphs: { animations: [{ name: item.name, time: 0.0, duration: 1.0, start: 1.0, end: 1.0 }], defaults: [{ name: THREE.VRMSchema.BlendShapePresetName.Joy, weight: 0.0 }, { name: THREE.VRMSchema.BlendShapePresetName.Sorrow, weight: 0.0 }, { name: THREE.VRMSchema.BlendShapePresetName.Fun, weight: 0.0 }, { name: THREE.VRMSchema.BlendShapePresetName.Blink, weight: 0.0 }] } });
     
                                                if (!ids2.includes(thread.id)) {
                                                    ids2.push(thread.id);
                                                }
                                            }
     
                                            ids1.push(message.id);
                                        }
                                    }
                                }
     
                                for (const message of tempMessages2) {
                                    if (!ids2.includes(message.id)) {
                                        const item = presets[_random(0, 2)];
     
                                        suggestions.push({ highlight: { text: '今日の' + document.title, image: '/images/Cover.png' }, messages: [{ time: 0, duration: 5, type: { elapsed: -1, speed: 50, reverse: false, buffer: "", count: 0 }, text: message.text }], animation: item.animation, morphs: { animations: [{ name: item.name, time: 0.0, duration: 1.0, start: 1.0, end: 1.0 }], defaults: [{ name: THREE.VRMSchema.BlendShapePresetName.Joy, weight: 0.0 }, { name: THREE.VRMSchema.BlendShapePresetName.Sorrow, weight: 0.0 }, { name: THREE.VRMSchema.BlendShapePresetName.Fun, weight: 0.0 }, { name: THREE.VRMSchema.BlendShapePresetName.Blink, weight: 0.0 }] } });
                                    }
                                }
     
                                resolve(suggestions);
                            }).then((result) => {
                                if (app.isSuggested && result.length > 0) {
                                    for (const suggestion of result) {
                                        app.suggestionQueue.push(suggestion);
                                    }
     
                                    if ('highlight' in app.suggestionQueue[0]) {
                                        if ('text' in app.suggestionQueue[0].highlight) {
                                            app.highlight = app.suggestionQueue[0].highlight.text;
                                        } else {
                                            app.highlight = null;
                                        }
     
                                        if ('image' in app.suggestionQueue[0].highlight) {
                                            app.cover = app.suggestionQueue[0].highlight.image;
                                        } else {
                                            app.cover = null;
                                        }
                                    }
                                }
     
                                app.isComputing = false;
                            });
                        }*/

                        /*if (animationData === null) {
                            if (app.sequenceQueue.length > 0) {
                                idleTime = activateTime = 0.0;
                            } else {
                                idleTime += deltaTime;
                                activateTime += deltaTime;
     
                                if (activateTime >= activateThreshold) {
                                    app.talk();
     
                                    idleTime = activateTime = 0.0;
                                } else if (idleTime >= blinkThreshold) {
                                    let sequences = [];
     
                                    for (const sequence of this.character.sequences) {
                                        if (sequence.name == "Idle") {
                                            sequences.push(sequence);
                                        }
                                    }
     
                                    this.sequenceQueue.push(this.prepare(sequences));
     
                                    idleTime = 0.0;
                                }
                            }
     
                            app.currentAnimations.splice(0);
     
                            for (let animation of app.animations["idle1"]) {
                                app.currentAnimations.push(animation);
                            }
     
                            animationIndex = 0;
                            animationData = app.currentAnimations[animationIndex];
                            animationIndex += animationSkipFrames;
                        } else if (app.sequenceQueue.length > 0) {
                            idleTime = activateTime = 0.0;
                        } else {
                            idleTime += deltaTime;
                            activateTime += deltaTime;
                        }*/
                    }

                    if (this.message !== null) {
                        if (this.message.type.reverse) {
                            if (this.message.type.count > 0) {
                                this.message.type.elapsed += deltaTime * 2;

                                if (this.message.type.elapsed >= 1.0 / this.message.type.speed) {
                                    let index = this.message.type.count - 1;

                                    if (index < this.message.text.length) {
                                        let width = Math.floor(this.message.text.length / 2);

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
                                let index = this.message.type.buffer.length;
                                let width = Math.floor(this.message.text.length / 2);
                                let length = this.message.text.length;

                                if (this.message.type.count >= width) {
                                    this.message.type.buffer += this.message.text.charAt(index);
                                }

                                if (this.message.type.count < length) {
                                    this.message.type.count += 1;
                                }

                                this.message.type.elapsed = 0;
                            }
                        } else {
                            this.message.time += deltaTime;

                            if (this.message.time >= this.message.duration) {
                                this.message.type.reverse = true;
                            }
                        }

                        if (this.message.text.length === this.message.type.buffer.length) {
                            const characters = this.message.text.split("");

                            this.text.splice(0);

                            for (let i = 0; i < characters.length; i++) {
                                this.text.push({ key: i, value: characters[i] });
                            }
                        } else {
                            let charArray = new Array();
                            let randomBuffer = "";

                            for (let i = 0; i < this.message.text.length; i++) {
                                if (charArray.indexOf(this.message.text.charAt(i)) == -1 && this.message.text.charAt(i) != "\n" && this.message.text.charAt(i).match(/\s/) == null) {
                                    charArray.push(this.message.text.charAt(i));
                                }
                            }

                            if (charArray.length > 0) {
                                for (let i = 0; i < this.message.type.count; i++) {
                                    if (this.message.text.charAt(i) == "\n") {
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
                                    this.text.push({ key: i, value: characters[i] });
                                }
                            } else if (this.text.length !== this.message.type.buffer.length) {
                                const characters = this.message.type.buffer.split("");

                                this.text.splice(0);

                                for (let i = 0; i < characters.length; i++) {
                                    this.text.push({ key: i, value: characters[i] });
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
                                try {
                                    vrmModel.humanoid.getBoneNode(animation.bone).position.set(animation.position[0], animation.position[1], -animation.position[2]);
                                    vrmModel.humanoid.getBoneNode(animation.bone).quaternion.set(-animation.rotation[0], -animation.rotation[1], animation.rotation[2], animation.rotation[3]);
                                } catch (e) {
                                    this.notify({ text: e.message, accent: this.character.accent, image: this.character.image });
                                    console.error(e);
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

                            for (const springBoneGroup of vrmModel.springBoneManager.springBoneGroupList) {
                                for (const springBone of springBoneGroup) {
                                    if (springBoneIndex === draggableBone.index) {
                                        bonePosition = springBone.bone.getWorldPosition(new THREE.Vector3());
                                    }

                                    springBoneIndex++;
                                }
                            }

                            if (bonePosition !== null) {
                                const range = 0.25;

                                springBoneIndex = 0;
                                draggingBones = { time: 0, duration: 0.5, center: bonePosition, bones: {} };

                                for (const springBoneGroup of vrmModel.springBoneManager.springBoneGroupList) {
                                    for (const springBone of springBoneGroup) {
                                        if (bonePosition.distanceTo(springBone.bone.getWorldPosition(new THREE.Vector3())) <= range) {
                                            draggingBones.bones[springBoneIndex] = { direction: new THREE.Vector3(draggableBone.direction.x, draggableBone.direction.y, 0), base: springBone.gravityPower - vrmSpringBones[springBoneIndex].gravityPower, source: 0, target: -Math.min(0.01 * draggableBone.distance * Math.cos(bonePosition.distanceTo(springBone.bone.getWorldPosition(new THREE.Vector3())) / range), 5) };
                                            mergedBoneAnimationDictionary[springBoneIndex] = { direction: draggingBones.bones[springBoneIndex].direction, force: draggingBones.bones[springBoneIndex].source };
                                        }

                                        springBoneIndex++;
                                    }
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

                                for (const springBoneGroup of vrmModel.springBoneManager.springBoneGroupList) {
                                    for (const springBone of springBoneGroup) {
                                        if (springBoneIndex in draggingBones.bones) {
                                            draggingBones.bones[springBoneIndex].direction = new THREE.Vector3(draggableBone.direction.x, draggableBone.direction.y, 0);
                                            draggingBones.bones[springBoneIndex].source = draggingBones.bones[springBoneIndex].target;
                                            draggingBones.bones[springBoneIndex].target = -Math.min(0.01 * draggableBone.distance * Math.cos(draggingBones.center.distanceTo(springBone.bone.getWorldPosition(new THREE.Vector3())) / range), 5);
                                        }

                                        springBoneIndex++;
                                    }
                                }
                            } else {
                                for (const key in draggingBones.bones) {
                                    mergedBoneAnimationDictionary[key] = { direction: draggingBones.bones[key].direction, force: draggingBones.bones[key].base + draggingBones.bones[key].source + draggingBones.time / draggingBones.duration * (draggingBones.bones[key].target - draggingBones.bones[key].source - draggingBones.bones[key].base) };
                                }
                            }
                        }

                        if (randomWind === null) {
                            let springBoneIndex = 0;

                            randomWind = { time: 0, duration: 1.0, direction: new THREE.Vector3(1, 0, 0), force: 0.01 * (Math.random() - 0.5), sources: {} };

                            for (const springBoneGroup of vrmModel.springBoneManager.springBoneGroupList) {
                                for (const springBone of springBoneGroup) {
                                    if (springBoneIndex in mergedBoneAnimationDictionary === false) {
                                        randomWind.sources[springBoneIndex] = springBone.gravityPower - vrmSpringBones[springBoneIndex].gravityPower;
                                    }

                                    springBoneIndex++;
                                }
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

                        for (const springBoneGroup of vrmModel.springBoneManager.springBoneGroupList) {
                            for (const springBone of springBoneGroup) {
                                if (index in mergedBoneAnimationDictionary) {
                                    const vector = new THREE.Vector3(vrmSpringBones[index].gravityDir.x + mergedBoneAnimationDictionary[index].direction.x, vrmSpringBones[index].gravityDir.y + mergedBoneAnimationDictionary[index].direction.y, vrmSpringBones[index].gravityDir.z + mergedBoneAnimationDictionary[index].direction.z);

                                    springBone.gravityDir = vector.normalize();
                                    springBone.gravityPower = vrmSpringBones[index].gravityPower + mergedBoneAnimationDictionary[index].force;
                                }

                                index++;
                            }
                        }
                    }

                    vrmModel.update(deltaTime);
                    /*if (currentMixer) {
                        currentMixer.update(deltaTime);
                    }*/
                }

                controls.update();

                //renderer.render(scene, camera);
                composer.render(deltaTime);

                stats.end();
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
            for (const clip of document.body.querySelectorAll(".container>.wrap>.frame .clip")) {
                let width = 0;

                for (const element of clip.querySelectorAll(":scope .ticker-wrap .ticker .item")) {
                    width += element.getBoundingClientRect().width;
                }

                if (width > 0) {
                    this.tickerWidth = Math.min(width / 2, document.body.querySelector(".container>.wrap>.frame .level").getBoundingClientRect().width);
                    clip.querySelector(":scope .ticker-wrap .ticker").style.width = width + "px";
                }
            }
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

            const self = this;
            const characterStorageItem = localStorage.getItem("character");
            const credentialStorageItem = localStorage.getItem("credential");
            let credential = null;
            const characters = [{ path: "/assets/milch.json", probability: 0.9 }, { path: "/assets/merku.json", probability: 0.1 }];
            const loader = new GLTFLoader();

            if (window.location.pathname === "/about") {
                this.mode = "_about";
                this.isRevealed = true;
            } else if (window.location.pathname === "/milch") {
                this.mode = "_milch";
                this.isRevealed = true;
            } if (window.location.pathname === "/merku") {
                this.mode = "_merku";
                this.isRevealed = true;
            }

            if (characterStorageItem) {
                try {
                    const character = JSON.parse(characterStorageItem);

                    if (character !== null) {
                        this.isMuted = character.mute;
                    }
                } catch (e) {
                    localStorage.removeItem("character");
                }
            }

            if (credentialStorageItem) {
                try {
                    credential = JSON.parse(credentialStorageItem);
                } catch (e) {
                    localStorage.removeItem("credential");
                }
            }

            this.$refs.three.appendChild(renderer.domElement);
            this.$refs.three.after(stats.domElement);

            this.animate();

            this.insetTop = this.$refs.indicator.getBoundingClientRect().height;
            this.insetBottom = this.$refs.blank.getBoundingClientRect().height;

            try {
                const response = await fetch(choice(characters, (x) => x.probability).path, {
                    mode: "cors",
                    method: "GET",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                });

                if (response.ok) {
                    this.character = await response.json();
                }
                else {
                    throw new Error(response.statusText);
                }
            } catch (e) {
                this.notify({ text: e.message, accent: this.character.accent, image: this.character.image });
                console.error(e);
            }

            this.sequenceQueue.push(this.prepare(this.character.sequences.filter((x) => x.name === "Start")));

            loader.crossOrigin = "anonymous";
            loader.load(
                await getDownloadURL(storageRef(storage, this.character.model)),
                (gltf) => {
                    VRM.from(gltf).then(async (vrm) => {
                        const urls = {
                            idle1: "/assets/animation-idle1.json",
                            idle2: "/assets/animation-idle2.json",
                            //idle3: "/assets/animation-idle3.json",
                            //idle4: "/assets/animation-idle4.json",
                            jump: "/assets/animation-jump.json",
                            lose: "/assets/animation-lose.json",
                            //run: "/assets/animation-run.json",
                            //walk: "/assets/animation-walk.json",
                            win: "/assets/animation-win.json"
                        };
                        let animationDictionary = {};

                        try {
                            for (let key in urls) {
                                const response3 = await fetch(encodeURI(urls[key]), {
                                    mode: "cors",
                                    method: "GET",
                                    headers: {
                                        "Content-Type": "application/x-www-form-urlencoded"
                                    }
                                });

                                if (response3.ok) {
                                    const json = await response3.json();

                                    animationDictionary[key] = json.data;
                                }
                                else {
                                    throw new Error(response3.statusText);
                                }
                            }

                            self.animations = animationDictionary;
                            vrmModel = vrm;

                            scene.add(vrm.scene);

                            vrm.scene.rotation.y = Math.PI;
                            vrm.lookAt.target = lookAtTarget;

                            vrmSpringBones.splice(0);

                            for (const springBoneGroup of vrmModel.springBoneManager.springBoneGroupList) {
                                for (const springBone of springBoneGroup) {
                                    vrmSpringBones.push({ gravityDir: springBone.gravityDir.clone(), gravityPower: springBone.gravityPower });
                                }
                            }

                            //vrm.humanoid.getBoneNode(THREE.VRMSchema.HumanoidBoneName.Hips).rotation.y = Math.PI;
                            //currentMixer = prepareAnimation(vrm);

                            self.progress = null;
                        } catch (e) {
                            self.notify({ text: e.message, accent: self.character.accent, image: self.character.image });
                            console.error(e);
                        }
                    });
                },
                (progress) => self.progress = progress.loaded / progress.total,
                (error) => console.error(error)
            );

            if (credential !== null) {
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
                        signInWithCredential(auth, TwitterAuthProvider.credential(credential.accessToken, credential.secret));
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
                    self.user = user;
                } else {
                    // User is signed out.
                    self.user = null;
                    self.stars = 0;
                }
            });

            onValue(query(databaseRef(database, databaseRoot + "/images"), limitToLast(100)), snapshot => {
                if (snapshot.exists()) {
                    const images = snapshot.val();
                    let isUpdated = false;

                    for (const key in images) {
                        const index = self.recentImages.findIndex(x => x.id === key);

                        if (index >= 0) {
                            if (self.recentImages[index].timestamp < images[key].timestamp) {
                                self.recentImages.splice(index, 1);
                            } else {
                                continue;
                            }
                        }

                        images[key]["id"] = key;
                        self.recentImages.push(images[key]);
                        isUpdated = true;
                    }

                    /*for (let i = self.recentImages.length - 1; i >= 0; i--) {
                        if (self.recentImages[i].id in images === false) {
                            self.recentImages.splice(i, 1);
                            isUpdated = true;
                        }
                    }*/

                    if (isUpdated) {
                        self.recentImages.sort((x, y) => y.timestamp - x.timestamp);

                        if (self.recentImages.length > 100) {
                            self.recentImages.splice(100, self.recentImages.length - 100);
                        }

                        self.update(self.recentImages, self.maxTags);
                        self.isBlinded = true;
                    }
                }
            });
            onValue(databaseRef(database, databaseRoot + "/stars"), snapshot => {
                const count = snapshot.val();

                if (count === null) {
                    self.stars = 0;
                } else {
                    self.stars = count;
                }
            });
            onValue(query(databaseRef(database, databaseRoot + "/words"), orderByChild("timestamp"), limitToLast(10)), snapshot => {
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
                        for (let i = self.words.length - 1; i >= 0; i--) {
                            if ("timestamp" in self.words[i] === false) {
                                self.words.splice(i, 1);
                            }
                        }

                        self.words.sort((x, y) => y.timestamp - x.timestamp);

                        if (self.words.length > 10) {
                            self.words.splice(10, self.words.length - 10);
                        }

                        for (const obj of self.prepare(self.character.sequences.filter((x) => x.name === "Alert"), 10)) {
                            if (obj.type === "Message") {
                                self.words.splice(0, 0, { name: obj.text, image: self.character.image });
                            }
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

            off(query(databaseRef(database, databaseRoot + "/images"), limitToLast(100)));
            off(databaseRef(database, databaseRoot + "/stars"));
            off(query(databaseRef(database, databaseRoot + "/words"), orderByChild("timestamp"), limitToLast(10)));
        }
    }).mount("#app");

    window.addEventListener("resize", event => {
        //let container = app.$refs.container;

        app.insetTop = app.$refs.indicator.getBoundingClientRect().height;
        app.insetBottom = app.$refs.blank.getBoundingClientRect().height;

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

        app.$nextTick(() => {
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
        });
    });
    window.addEventListener("click", event => {
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
    });
    window.addEventListener("dblclick", event => {
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
    });
    window.addEventListener("keydown", event => {
        if (event.ctrlKey) {
            controls.enabled = true;
        }
    });
    window.addEventListener("keyup", event => {
        controls.enabled = false;
    });
    window.addEventListener("mousedown", event => {
        if (!controls.enabled && event.button === 0) {
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

                for (const springBoneGroup of vrmModel.springBoneManager.springBoneGroupList) {
                    for (const springBone of springBoneGroup) {
                        const distance = springBone.bone.getWorldPosition(new THREE.Vector3()).distanceTo(bestIntersect.point);

                        if (distance < minDistance) {
                            draggableBone.index = springBoneIndex;
                            minDistance = distance;
                        }

                        springBoneIndex++;
                    }
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
        const element = app.$refs.three;
        const x = event.clientX - element.offsetLeft - (window.innerWidth - element.offsetWidth);
        const y = event.clientY - element.offsetTop - (window.innerHeight - element.offsetHeight);
        const w = element.offsetWidth;
        const h = element.offsetHeight;

        mouse.x = (x / w) * 2 - 1;
        mouse.y = -(y / h) * 2 + 1;

        if (!controls.enabled && event.button === 0) {
            lookAnimation = { time: 0.0, duration: 0.5, source: { x: lookAtTarget.position.x, y: lookAtTarget.position.y }, target: { x: (x - 0.5 * w) / w * 10.0, y: (y - 0.5 * h) / h * -10.0 } };

            if (draggableBone !== null) {
                const vector = new THREE.Vector2(draggableBone.point.x - x, y - draggableBone.point.y);

                draggableBone.direction = vector.normalize();
                draggableBone.distance = Math.sqrt((draggableBone.point.x - x) * (draggableBone.point.x - x) + (draggableBone.point.y - y) * (draggableBone.point.y - y));
            }
        }
    });
    window.addEventListener("mouseup", event => {
        if (!controls.enabled && event.button === 0) {
            draggableBone = null;

            if (app.character !== null) {
                app.sequenceQueue.push(app.prepare(app.character.sequences.filter((x) => x.name === "TouchEnd")));
            }
        }
    });
    window.addEventListener("touchstart", event => {
        event.stopPropagation();

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

                for (const springBoneGroup of vrmModel.springBoneManager.springBoneGroupList) {
                    for (const springBone of springBoneGroup) {
                        const distance = springBone.bone.getWorldPosition(new THREE.Vector3()).distanceTo(bestIntersect.point);

                        if (distance < minDistance) {
                            draggableBone.index = springBoneIndex;
                            minDistance = distance;
                        }

                        springBoneIndex++;
                    }
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
    });
    window.addEventListener("touchmove", event => {
        event.stopPropagation();

        const element = app.$refs.three;
        const x = event.changedTouches[0].clientX - element.offsetLeft - (window.innerWidth - element.offsetWidth);
        const y = event.changedTouches[0].clientY - element.offsetTop - (window.innerHeight - element.offsetHeight);
        const w = element.offsetWidth;
        const h = element.offsetHeight;

        lookAnimation = { time: 0.0, duration: 0.5, source: { x: lookAtTarget.position.x, y: lookAtTarget.position.y }, target: { x: (x - 0.5 * w) / w * 10.0, y: (y - 0.5 * h) / h * -10.0 } };
    });
    window.addEventListener("touchend", event => {
        event.stopPropagation();

        const element = app.$refs.three;
        const x = event.changedTouches[0].clientX - element.offsetLeft - (window.innerWidth - element.offsetWidth);
        const y = event.changedTouches[0].clientY - element.offsetTop - (window.innerHeight - element.offsetHeight);
        const w = element.offsetWidth;
        const h = element.offsetHeight;

        lookAnimation = { time: 0.0, duration: 0.5, source: { x: lookAtTarget.position.x, y: lookAtTarget.position.y }, target: { x: (x - 0.5 * w) / w * 10.0, y: (y - 0.5 * h) / h * -10.0 } };

        if (app.character !== null) {
            app.sequenceQueue.push(app.prepare(app.character.sequences.filter((x) => x.name === "TouchEnd")));
        }
    });
    window.addEventListener("touchcancel", event => {
        event.stopPropagation();
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

                    loader.crossOrigin = "anonymous";
                    loader.load(
                        e.target.result,
                        (gltf) => {
                            VRM.from(gltf).then((vrm) => {
                                if (vrmModel !== null) {
                                    scene.remove(vrmModel.scene);
                                }

                                vrmModel = vrm;

                                scene.add(vrm.scene);

                                vrm.scene.rotation.y = Math.PI;
                                vrm.lookAt.target = lookAtTarget;

                                vrmSpringBones.splice(0);

                                for (const springBoneGroup of vrmModel.springBoneManager.springBoneGroupList) {
                                    for (const springBone of springBoneGroup) {
                                        vrmSpringBones.push({ gravityDir: springBone.gravityDir.clone(), gravityPower: springBone.gravityPower });
                                    }
                                }

                                app.progress = null;
                            });
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
