import { createApp } from 'vue/dist/vue.esm-bundler.js';
import * as Stats from 'stats.js'
import anime from 'animejs/lib/anime.es.js';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDTVxDJj7rqG9L-Clvba2Tao9B0hkcxjcE",
    authDomain: "milchchan.firebaseapp.com",
    databaseURL: "https://milchchan.firebaseio.com",
    projectId: "milchchan",
    storageBucket: "milchchan.appspot.com",
    messagingSenderId: "355698971889",
    appId: "1:355698971889:web:e3653c5c31bd7289cd4550",
    measurementId: "G-3998FJYNWX"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const debug = decodeURIComponent(window.location.hash.substring(1)) === "debug";
//const channel = decodeURIComponent(window.location.hash.substring(1));
const databaseRoot = "wonderland";
//const databaseChannel = channel.length > 0 ? databaseRoot + '/channels/' + channel : databaseRoot;
const databaseMessages = databaseRoot + "/feed";
let database = firebase.database();
let storage = firebase.storage();
const milch = { name: "ミルヒちゃん", accent: "#ffa6bb", image: "/images/Milch.png" };
const merku = { name: "メルクちゃん", accent: "#5bcbe1", image: "/images/Merku.png" };
//const stats = new Stats();

/*stats.domElement.style.position = "fixed";
stats.domElement.style.top = "auto";
stats.domElement.style.bottom = "0";
stats.domElement.style.left = "auto";
stats.domElement.style.right = "0";

if (!debug) {
    stats.domElement.classList.add("is-hidden");
}*/

let idleTime = 0.0;
const blinkThreshold = 5.0;
let activateTime = 0.0;
const activateThreshold = 10.0;
let tapCount = 0;

window.addEventListener("load", (event) => {
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
                isDarkMode: false,
                isMuted: true,
                isLoading: false,
                isUpdating: false,
                isLocating: false,
                isRevealed: false,
                isOverlayed: false,
                isBlinded: false,
                isPopup: false,
                isExpanded: false,
                isLearning: false,
                isAnimating: false,
                isHangingOn: false,
                isSubmitting: false,
                isDiscovering: false,
                isStared: false,
                isLocked: false,
                isEditing: false,
                canvasSize: { width: 0, height: 0, deviceWidth: 0, deviceHeight: 0, alternative: { width: 0, height: 0, deviceWidth: 0, deviceHeight: 0 } },
                cachedImages: {},
                cachedSprites: [],
                alternativeCachedSprites: [],
                animationQueue: [],
                elapsed: 0,
                map: null,
                layer: null,
                mode: null,
                queryQueue: [],
                queryCache: {},
                cachedTracks: {},
                cachedDocuments: [],
                documentQueue: [],
                sequenceQueue: [],
                progress: null,
                user: null,
                candidates: null,
                input: "",
                animatedInputLength: 0,
                maxInputLength: 100,
                inputHasError: false,
                messages: [],
                maxMessages: 10,
                word: null,
                recentWords: [],
                tags: [],
                maxTags: 10,
                scrollTimeoutID: undefined,
                stars: -1,
                animatedStars: 0,
                steps: 0,
                isStepping: false,
                animatedSteps: 0,
                deviceMotion: null,
                stats: [],
                screenshot: null,
                notifications: [],
                notificationHeight: 0,
                animatedNotificationHeight: 0,
                inputHeight: 0,
                animatedInputHeight: 0,
                recentImages: [],
                backgroundImagesQueue: [],
                backgroundImages: [],
                preloadImages: [],
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
                leaderboard: [],
                leaderboardHeight: 0,
                animatedLeaderboardHeight: 0,
                message: null,
                states: {},
                character: null,
                alternative: null,
                wordDictionary: {},
                reverseWordDictionary: {},
                attributes: ["名前", "所属", "時間", "場所", "する事", "生き物", "食べ物", "飲み物", "聞くもの", "見るもの", "読むもの", "使う物", "身につけるもの", "乗り物", "部位", "病気"],
                chars: []
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
                        for (const clip of document.body.querySelectorAll("#input>.columns:last-of-type>.column>.control .clip")) {
                            let width = 0;

                            for (const element of clip.querySelectorAll(":scope .ticker-wrap .ticker .item")) {
                                width += element.getBoundingClientRect().width;
                            }

                            if (width > 0) {
                                app.tickerWidth = Math.min(width / 2, document.body.querySelector("#input>.columns:last-of-type>.column>.control .level").getBoundingClientRect().width);
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
            leaderboard: {
                handler: () => {
                    app.$nextTick(() => {
                        app.leaderboardHeight = app.$refs.leaderboard.getBoundingClientRect().height;
                    });
                },
                deep: true
            },
            leaderboardHeight(newValue) {
                const obj = { height: this.animatedLeaderboardHeight };

                anime({
                    targets: obj,
                    height: newValue,
                    round: 1,
                    duration: 500,
                    easing: "linear",
                    update: () => {
                        this.animatedLeaderboardHeight = obj.height
                    }
                });
            },
            inputHeight(newValue) {
                const obj = { height: this.animatedInputHeight };

                anime({
                    targets: obj,
                    height: newValue,
                    round: 1,
                    duration: 500,
                    easing: "linear",
                    update: () => {
                        this.animatedInputHeight = obj.height
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
            steps(newValue) {
                const obj = { count: this.animatedSteps };

                anime({
                    targets: obj,
                    count: newValue,
                    round: 100,
                    duration: 500,
                    easing: "linear",
                    update: () => {
                        this.animatedSteps = obj.count
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
            },
            chars: {
                handler: () => {
                    const fragments = [];

                    for (const row of app.chars) {
                        for (const column of row) {
                            if (column.count > 0 || !column.reserved) {
                                fragments.push({ set: column.set, count: column.count, timestamp: column.timestamp, checksum: [...String(column.timestamp)].reduce((x, y) => x + y, 0) + [...String(column.count)].reduce((x, y) => x + y, 0) });
                            }
                        }
                    }

                    try {
                        localStorage.setItem("fragments", JSON.stringify(fragments));
                    } catch (e) {
                        localStorage.removeItem("fragments");
                    }
                },
                deep: true
            }
        },
        methods: {
            signIn: function (event) {
                if (event === firebase.auth.GoogleAuthProvider.PROVIDER_ID) {
                    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((result) => {
                        /** @type {firebase.auth.OAuthCredential} */
                        var credential = result.credential;

                        for (const data of result.user.providerData) {
                            firebase.auth().currentUser.updateProfile({
                                displayName: data.displayName,
                                photoURL: data.photoURL
                            }).catch(function (error) {
                                console.error(error.code, error.message);
                            });

                            break;
                        }

                        database.ref(`${databaseRoot}/users/${result.user.uid}`).transaction(function (current) {
                            if (current) {
                                current["name"] = data.displayName;
                                current["timestamp"] = timestamp;
                            } else {
                                current = { name: data.displayName, timestamp: timestamp };
                            }

                            return current;
                        });

                        try {
                            localStorage.setItem("credential", JSON.stringify({ providerId: credential.providerId, accessToken: credential.accessToken, idToken: credential.idToken }));
                        } catch (e) {
                            localStorage.removeItem("credential");
                        }
                    }).catch((error) => {
                        console.error(error.code, error.message);
                    });
                } else if (event === firebase.auth.FacebookAuthProvider.PROVIDER_ID) {
                    const provider = new firebase.auth.FacebookAuthProvider();

                    provider.addScope("public_profile");

                    firebase.auth().signInWithPopup(provider).then((result) => {
                        /** @type {firebase.auth.OAuthCredential} */
                        var credential = result.credential;

                        for (const data of result.user.providerData) {
                            firebase.auth().currentUser.updateProfile({
                                displayName: data.displayName,
                                photoURL: data.photoURL
                            }).catch(function (error) {
                                console.error(error.code, error.message);
                            });

                            break;
                        }

                        database.ref(`${databaseRoot}/users/${result.user.uid}`).transaction(function (current) {
                            if (current) {
                                current["name"] = data.displayName;
                                current["timestamp"] = timestamp;
                            } else {
                                current = { name: data.displayName, timestamp: timestamp };
                            }

                            return current;
                        });

                        try {
                            localStorage.setItem("credential", JSON.stringify({ providerId: credential.providerId, accessToken: credential.accessToken }));
                        } catch (e) {
                            localStorage.removeItem("credential");
                        }
                    }).catch((error) => {
                        console.error(error.code, error.message);
                    });
                } else if (event === firebase.auth.TwitterAuthProvider.PROVIDER_ID) {
                    firebase.auth().signInWithPopup(new firebase.auth.TwitterAuthProvider()).then((result) => {
                        /** @type {firebase.auth.OAuthCredential} */
                        var credential = result.credential;
                        const timestamp = Math.floor(new Date() / 1000);

                        for (const data of result.user.providerData) {
                            const photoUrl = data.photoURL.replace(/_normal\.jpg$/, '.jpg');

                            firebase.auth().currentUser.updateProfile({
                                displayName: data.displayName,
                                photoURL: photoUrl
                            }).catch(function (error) {
                                console.error(error.code, error.message);
                            });

                            database.ref(`${databaseRoot}/users/${result.user.uid}`).transaction(function (current) {
                                if (current) {
                                    current["name"] = data.displayName;
                                    current["link"] = `https://twitter.com/${result.additionalUserInfo.username}`;
                                    current["timestamp"] = timestamp;
                                } else {
                                    current = { name: data.displayName, link: `https://twitter.com/${result.additionalUserInfo.username}`, timestamp: timestamp };
                                }

                                return current;
                            });

                            break;
                        }

                        try {
                            localStorage.setItem("credential", JSON.stringify({ providerId: credential.providerId, accessToken: credential.accessToken, secret: credential.secret }));
                        } catch (e) {
                            localStorage.removeItem("credential");
                        }
                    }).catch((error) => {
                        console.error(error.code, error.message);
                    });
                }
            },
            signOut: function (event) {
                firebase.auth().signOut().then(() => {
                    localStorage.removeItem("credential");

                    if ("serviceWorker" in navigator && navigator.serviceWorker.controller !== null) {
                        navigator.serviceWorker.controller.postMessage({ command: "caches" });
                    }

                    /*firebase.auth().signInAnonymously().catch((error) => {
                        console.error(error.code, error.message);
                    });*/
                }).catch((error) => {
                    console.error(error.code, error.message);
                });
            },
            refresh: function (event) {
                this.update(true);
            },
            update: async function (ignore = false) {
                this.isLoading = true;

                const self = this;
                const centerLocation = this.map.getCenter();
                const tracks = await this.fetch(ignore, centerLocation.latitude, centerLocation.longitude);

                if (ignore) {
                    Object.keys(this.cachedTracks).forEach(function (key) {
                        for (const handlerId of self.cachedTracks[key].handlers) {
                            Microsoft.Maps.Events.removeHandler(handlerId);
                        }

                        self.map.entities.remove(self.cachedTracks[key].pushpin);

                        delete self.cachedTracks[key];
                    });
                }

                if (tracks !== null) {
                    const timestamp = Math.floor(new Date() / 1000);
                    let isUpdated = false;

                    for (const geohash in tracks) {
                        for (const track of tracks[geohash]) {
                            let pushpinId = null;
                            //const words = [];

                            for (const id in this.cachedTracks) {
                                if (track.id === this.cachedTracks[id].id) {
                                    pushpinId = id;

                                    break;
                                }
                            }

                            if (pushpinId === null) {
                                const pushpin = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(track.location.latitude, track.location.longitude), {
                                    title: track.name,
                                    subTitle: this.formatTime(timestamp - track.timestamp),
                                    icon: "/images/Marker-Star.svg"
                                });

                                this.setImage(pushpin, track.user);

                                /*if ("dictionary" in track && "words" in track.dictionary) {
                                    for (const word in track.dictionary.words) {
                                        const clonedWord = Object.assign({}, track.dictionary.words[word]);

                                        clonedWord["name"] = word;
                                        words.push(clonedWord);
                                    }

                                    words.sort((x, y) => y.timestamp - x.timestamp)
                                }

                                track["words"] = words;*/

                                this.cachedTracks[pushpin.id] = track;
                                this.cachedTracks[pushpin.id]["pushpin"] = pushpin;
                                this.cachedTracks[pushpin.id]["handlers"] = [Microsoft.Maps.Events.addHandler(pushpin, 'click', async (args) => {
                                    self.mode = this.cachedTracks[args.target.id];
                                    self.isRevealed = true;
                                }), Microsoft.Maps.Events.addHandler(pushpin, 'dblclick', (args) => {
                                    window.location.hash = self.cachedTracks[args.target.id].id;
                                })];
                                this.map.entities.push(pushpin);
                                isUpdated = true;
                            } else if (track.timestamp > this.cachedTracks[pushpinId].timestamp) {
                                const pushpin = this.cachedTracks[pushpinId]["pushpin"];
                                const handlers = this.cachedTracks[pushpinId]["handlers"];

                                pushpin.setLocation(new Microsoft.Maps.Location(track.location.latitude, track.location.longitude));
                                pushpin.setOptions({
                                    title: track.name,
                                    subTitle: this.formatTime(timestamp - track.timestamp)
                                });
                                this.setImage(pushpin, track.user);

                                /*if ("dictionary" in track && "words" in track.dictionary) {
                                    for (const word in track.dictionary.words) {
                                        const clonedWord = Object.assign({}, track.dictionary.words[word]);

                                        clonedWord["name"] = word;
                                        words.push(clonedWord);
                                    }

                                    words.sort((x, y) => y.timestamp - x.timestamp)
                                }

                                track["words"] = words;*/

                                this.cachedTracks[pushpinId] = track;
                                this.cachedTracks[pushpinId]["pushpin"] = pushpin;
                                this.cachedTracks[pushpinId]["handlers"] = handlers;
                                isUpdated = true;
                            }
                        }
                    }

                    const ids = [];

                    for (const geohash in tracks) {
                        for (const track of tracks[geohash]) {
                            ids.push(track.id);
                        }
                    }

                    Object.keys(this.cachedTracks).forEach(function (key) {
                        if (!ids.some(x => x === self.cachedTracks[key].id)) {
                            for (const handlerId of self.cachedTracks[key].handlers) {
                                Microsoft.Maps.Events.removeHandler(handlerId);
                            }

                            self.map.entities.remove(self.cachedTracks[key].pushpin);

                            delete self.cachedTracks[key];
                            isUpdated = true;
                        }
                    });

                    if (isUpdated) {
                        const max = 10;

                        this.isUpdating = true;

                        const leaderboard = await new Promise(resolve => {
                            const trackDictionary = {};
                            const trackRanking = [];

                            for (const key in tracks) {
                                for (const track of tracks[key]) {
                                    if (track.user.id in trackDictionary) {
                                        trackDictionary[track.user.id].count++;
                                    } else {
                                        const t = Object.assign({}, track.user);

                                        t["count"] = 1;
                                        trackDictionary[track.user.id] = t;
                                    }
                                }
                            }

                            for (const key in trackDictionary) {
                                trackRanking.push(trackDictionary[key]);
                            }

                            trackRanking.sort((x, y) => y.count - x.count);

                            resolve(trackRanking);
                        });

                        this.leaderboard.splice(0);

                        for (const data of leaderboard) {
                            this.leaderboard.push(data);
                        }

                        try {
                            const results = await new Promise(resolve => {
                                const epsilon = Math.pow(10, -6);
                                let documents = [];
                                //let filteredDocuments = [];
                                let termFrequencies = [];
                                let inverseDocumentFrequency = {};
                                //const baseTime = new Date().getTime() - 24 * 60 * 60 * 1000;
                                //const limit = 10;
                                let scoreDictionary = {};
                                let scores = [];
                                let maxScore = epsilon;

                                for (const key in tracks) {
                                    let tokens = [];
                                    let termSet = [];

                                    for (const track of tracks[key]) {
                                        tokens.push(track.name);

                                        if (!termSet.includes(track.name)) {
                                            if (track.name in inverseDocumentFrequency) {
                                                inverseDocumentFrequency[track.name] += 1.0;
                                            } else {
                                                inverseDocumentFrequency[track.name] = 1.0;
                                            }

                                            termSet.push(track.name);
                                        }
                                    }

                                    documents.push(tokens);
                                    //documents.push({ tokens: tokens, timestamp: user.timestamp, user: { id: user.id, name: user.name, image: "image" in user ? user.image : null } });

                                    /*for (const track of tracks[key]) {
                                        if ("words" in user && user.words.length > 0) {

                                        }
                                    }*/
                                }

                                for (const key in inverseDocumentFrequency) {
                                    inverseDocumentFrequency[key] = Math.log(documents.length / (inverseDocumentFrequency[key] + epsilon));
                                }

                                /*for (const document of documents) {
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
                                }*/

                                for (const document of documents) {
                                    let tf = {};

                                    for (const token of document) {
                                        if (token in tf) {
                                            tf[token] += 1.0;
                                        } else {
                                            tf[token] = 1.0;
                                        }
                                    }

                                    for (const key in tf) {
                                        tf[key] /= document.length;

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

                                resolve([documents, scores]);
                            });

                            this.cachedDocuments.splice(0)
                            this.tags.splice(0);

                            for (const document of results[0]) {
                                this.cachedDocuments.push(document);
                            }

                            for (let i = 0; i < results[1].length; i++) {
                                this.tags.push({ index: i, name: results[1][i].term, score: results[1][i].value })
                            }
                        } catch (e) {
                            this.notify({ text: e.message, accent: this.character.accent, image: this.character.image });
                            console.error(e);
                        }

                        this.isUpdating = false;
                    }
                }

                //this.isBlinded = true;
                //activateTime = 0.0;
                this.isLoading = false;
            },
            fetch: async function (ignore, latitude, longitude) {
                const self = this;
                const precisions = { 1: 2, 2: 2, 3: 2, 4: 2, 5: 2, 6: 2, 7: 2, 8: 2, 9: 2, 10: 3, 11: 3, 12: 4, 13: 4, 14: 4, 15: 5, 16: 5, 17: 5, 18: 6, 19: 6, 20: 6 };
                const centerGeohash = this.encodeGeohash(latitude, longitude, precisions[this.map.getZoom()]);
                let geohashes = [centerGeohash];
                const tempRecent = [];
                const data = {};
                let primitives = [];
                let rect = this.decodeGeohash(centerGeohash);
                const timestamp = Math.floor(new Date() / 1000);
                const timeout = 60;
                const tempCache = {};

                primitives.push(new Microsoft.Maps.Polygon([
                    new Microsoft.Maps.Location(rect.topleft.latitude, rect.topleft.longitude),
                    new Microsoft.Maps.Location(rect.topright.latitude, rect.topright.longitude),
                    new Microsoft.Maps.Location(rect.bottomright.latitude, rect.bottomright.longitude),
                    new Microsoft.Maps.Location(rect.bottomleft.latitude, rect.bottomleft.longitude),
                    new Microsoft.Maps.Location(rect.topleft.latitude, rect.topleft.longitude)], {
                    fillColor: 'rgba(255, 0, 0, 0.5)',
                    strokeColor: 'red',
                    strokeThickness: 1
                }));

                if (centerGeohash.length > 2) {
                    const neighbors = this.getNeighbors(centerGeohash);

                    for (const key in neighbors) {
                        geohashes.push(neighbors[key]);

                        rect = this.decodeGeohash(neighbors[key]);

                        primitives.push(new Microsoft.Maps.Polygon([
                            new Microsoft.Maps.Location(rect.topleft.latitude, rect.topleft.longitude),
                            new Microsoft.Maps.Location(rect.topright.latitude, rect.topright.longitude),
                            new Microsoft.Maps.Location(rect.bottomright.latitude, rect.bottomright.longitude),
                            new Microsoft.Maps.Location(rect.bottomleft.latitude, rect.bottomleft.longitude),
                            new Microsoft.Maps.Location(rect.topleft.latitude, rect.topleft.longitude)], {
                            fillColor: 'rgba(255, 0, 0, 0.5)',
                            strokeColor: 'red',
                            strokeThickness: 1
                        }));
                    }
                }

                this.layer.setPrimitives(primitives);

                this.queryQueue.push(centerGeohash);

                for (const geohash of geohashes) {
                    if (!ignore && geohash in this.queryCache && timestamp - this.queryCache[geohash].timestamp < timeout) {
                        for (const user of this.queryCache[geohash].data) {
                            tempRecent.push(user);

                            if (geohash in data) {
                                data[geohash].push(user);
                            } else {
                                data[geohash] = [user];
                            }
                        }

                        continue;
                    }

                    const snapshot = await database.ref(databaseRoot + "/tracks").orderByChild("key").limitToLast(50).startAt(geohash).endAt(geohash.padEnd(12, "z") + "\uf8ff").once('value');

                    tempCache[geohash] = { timestamp: timestamp, data: [] };

                    if (snapshot.exists()) {
                        const dictionary = snapshot.val();

                        for (const key in dictionary) {
                            dictionary[key]["id"] = key;
                            tempRecent.push(dictionary[key]);
                            tempCache[geohash].data.push(dictionary[key]);

                            if (geohash in data) {
                                data[geohash].push(dictionary[key]);
                            } else {
                                data[geohash] = [dictionary[key]];
                            }
                        }
                    }
                }

                this.queryQueue.shift();

                if (this.queryQueue.length > 0) {
                    return null;
                }

                for (const geohash in tempCache) {
                    this.queryCache[geohash] = tempCache[geohash];
                }

                Object.keys(this.queryCache).forEach(function (key) {
                    if (timestamp - self.queryCache[key].timestamp >= timeout) {
                        delete self.queryCache[key];
                    }
                });

                const recent = this.take(tempRecent.sort((x, y) => y.timestamp - x.timestamp), 100);

                Object.keys(data).forEach(function (key) {
                    for (let i = data[key].length - 1; i > 0; i--) {
                        if (!recent.includes(data[key][i])) {
                            data[key].splice(i, 1);
                        }
                    }

                    if (data[key].length === 0) {
                        delete data[key];
                    }
                });

                return data;
            },
            startPedometer: async function () {
                const self = this;
                
                if (DeviceMotionEvent.requestPermission) {
                    const permissionState = await DeviceMotionEvent.requestPermission();

                    if (permissionState !== "granted") {
                        return;
                    }
                }

                this.deviceMotion = event => {
                    if (event.accelerationIncludingGravity) {
                        const ag = event.accelerationIncludingGravity;
                        const d = Math.sqrt(ag.x * ag.x + ag.y * ag.y + ag.z * ag.z);

                        if (self.isStepping) {
                            if (d < 9.8) {
                                const nowDate = new Date();
                                const baseDate = nowDate.getTime() - 7 * 24 * 60 * 60 * 1000;
                                const stats = [];

                                self.steps++;
                                self.isStepping = false;

                                for (let days = self.stats.length - 1; days > 0; days--) {
                                    if (self.stats[days].date.getTime() <= baseDate) {
                                        self.stats.splice(days, 1);
                                    } else if (self.stats[days].date.getFullYear() !== nowDate.getFullYear() && self.stats[days].date.getMonth() !== nowDate.getMonth() && self.stats[days].date.getDate() !== nowDate.getDate()) {
                                        stats.push({ date: self.stats[days].date.toISOString(), steps: self.stats[days].steps });
                                    }
                                }

                                stats.unshift({ date: new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate(), 0, 0, 0).toISOString(), steps: self.steps });

                                try {
                                    localStorage.setItem("stats", JSON.stringify(stats));
                                } catch (e) {
                                    localStorage.removeItem("stats");
                                }

                                if (self.steps % 10 === 0) {
                                    const map = [];
                                    let i = 0;
                                    let minCount = Number.MAX_SAFE_INTEGER;

                                    function _random(min, max) {
                                        min = Math.ceil(min);
                                        max = Math.floor(max);

                                        return Math.floor(Math.random() * (max - min)) + min;
                                    }

                                    function format(format) {
                                        var args = arguments;

                                        return format.replace(/\{(\d)\}/g, function (m, c) { return args[parseInt(c) + 1] });
                                    }

                                    for (const group of self.chars) {
                                        let j = 0;

                                        for (const d of group) {
                                            map.push({ path: { row: i, column: j }, data: d });
                                            j++;

                                            if (d.count < minCount) {
                                                minCount = d.count;
                                            }
                                        }

                                        i++;
                                    }

                                    for (let j = map.length - 1; j > 0; j--) {
                                        if (map[j].data.count > minCount) {
                                            map.splice(j, 1);
                                        }
                                    }

                                    const indexPath = map[_random(0, map.length)].path;
                                    const sequence = [];

                                    self.chars[indexPath.row][indexPath.column].count++;
                                    self.chars[indexPath.row][indexPath.column].timestamp = Math.floor(new Date() / 1000);

                                    /*for (const obj of this.prepare(this.character.sequences.filter((x) => x.name === "Capture"), self.chars[indexPath.row][indexPath.column].set[0], this.character.sequences)) {
                                        if (obj.type === "Message") {
                                            self.notify({ text: format(obj.text, self.chars[indexPath.row][indexPath.column].set[0]), accent: self.character.accent, image: self.character.image });
                                        }
                                    }*/

                                    for (const obj of this.prepare(this.character.sequences.filter((x) => x.name === "Capture"), self.chars[indexPath.row][indexPath.column].set[0], this.character.sequences)) {
                                        if (obj.type === "Message") {
                                            sequence.push({ type: obj.type, speed: obj.speed, duration: obj.duration, character: this.character, text: format(obj.text, self.chars[indexPath.row][indexPath.column].set[0]) });
                                        } else {
                                            obj["character"] = this.character;
                                            sequence.push(obj);
                                        }
                                    }

                                    if (sequence.length > 0) {
                                        this.sequenceQueue.push(sequence);
                                    }
                                }
                            }
                        } else if (d > 12.0) {
                            self.isStepping = true;
                        }
                    }
                };
                window.addEventListener("devicemotion", this.deviceMotion, true);
            },
            stopPedometer: function () {
                window.removeEventListener("devicemotion", this.deviceMotion, true);
                this.deviceMotion = null;
            },
            locate: async function (event) {
                if ("permissions" in navigator) {
                    const permissionStatus = await navigator.permissions.query({ name: "geolocation" });

                    if (permissionStatus.state == "granted" || permissionStatus.state == "prompt") {
                        const self = this;

                        this.isLocating = true;

                        navigator.geolocation.getCurrentPosition((position) => {
                            self.isLocating = false;
                            self.map.setView({
                                center: new Microsoft.Maps.Location(position.coords.latitude, position.coords.longitude),
                                zoom: self.map.getZoom() < 16 ? 16 : self.map.getZoom()
                            });
                        }, (error) => {
                            self.isLocating = false;
                            self.notify({ text: error.message, accent: self.character.accent, image: self.character.image });
                            console.error(error);
                        }, {
                            enableHighAccuracy: true,
                            timeout: 30000,
                            maximumAge: 0
                        });
                    }
                } else {
                    const self = this;

                    this.isLocating = true;

                    navigator.geolocation.getCurrentPosition((position) => {
                        self.isLocating = false;
                        self.map.setView({
                            center: new Microsoft.Maps.Location(position.coords.latitude, position.coords.longitude),
                            zoom: self.map.getZoom() < 16 ? 16 : self.map.getZoom()
                        });
                    }, (error) => {
                        self.isLocating = false;
                        self.notify({ text: error.message, accent: self.character.accent, image: self.character.image });
                        console.error(error);
                    }, {
                        enableHighAccuracy: true,
                        timeout: 30000,
                        maximumAge: 0
                    });
                }
                /*const permissionStatus = await navigator.permissions.query({ name: "geolocation" });

                if (permissionStatus.state == "granted" || permissionStatus.state == "prompt") {
                    const self = this;

                    navigator.geolocation.getCurrentPosition((position) => {
                        self.map.setView({
                            center: new Microsoft.Maps.Location(position.coords.latitude, position.coords.longitude),
                            zoom: self.map.getZoom() < 16 ? 16 : self.map.getZoom()
                        });
                    }, (error) => {
                        self.notify({ text: error.message, accent: self.character.accent, image: self.character.image });
                        console.error(error);
                    }, {
                        enableHighAccuracy: true,
                        timeout: 30000,
                        maximumAge: 0
                    });*/

                /*try {
                    
                    const position = await new Promise((resolve, reject) => {
                        navigator.geolocation.getCurrentPosition((position) => {
                            resolve(position);
                        }, (error) => {
                            reject(error);
                        }, {
                            enableHighAccuracy: true,
                            timeout: 5000,
                            maximumAge: 0
                        });
                    });*/

                /*const self = this;
                const geohash = this.encodeGeohash(position.coords.latitude, position.coords.longitude);
                const timestamp = Math.floor(new Date() / 1000);

                await new Promise((resolve, reject) => {
                    database.ref(databaseRoot + "/users/" + this.user.uid).transaction(function (user) {
                        if (user === null) {
                            return { key: geohash + timestamp, name: self.user.displayName, image: self.user.photoURL, location: { latitude: position.coords.latitude, longitude: position.coords.longitude }, geohash: geohash, timestamp: timestamp };
                        }

                        user["key"] = geohash + timestamp;
                        user["name"] = self.user.displayName;
                        user["image"] = self.user.photoURL;
                        user["location"] = { latitude: position.coords.latitude, longitude: position.coords.longitude };
                        user["geohash"] = geohash;
                        user["timestamp"] = timestamp;

                        return user;
                    }, function (error, committed, snapshot) {
                        if (!committed && error) {
                            reject(error);
                        } else {
                            database.ref(databaseRoot + "/users/" + self.user.uid).transaction(function (u) {
                                return u;
                            }, function (error, committed, snapshot) {
                                if (!committed && error) {
                                    reject(error);
                                } else {
                                    resolve();
                                }
                            });
                        }
                    });
                });*/


                /*} catch (e) {
                    this.notify({ text: e.message, accent: this.character.accent, image: this.character.image });
                    console.error(e);
                }*/
                //}
            },
            backspace: function(event) {
                if (!this.isEditing) {
                    this.chars.forEach(x => x.forEach(y => y.count += y.set.includes(this.input.charAt(this.input.length - 1)) ? 1 : 0 ));
                }
                
                this.input = this.input.slice( 0, -1);
            },
            send: async function (text) {
                if (this.isDebug) {
                    if (this.input.length > 0) {
                        let keys = [];
                        let tags = [];

                        for (const token of this.input.split(/\s/)) {
                            if (this.backgroundImages.some((x) => x.id === token)) {
                                keys.push(token);
                            } else {
                                tags.push(token);
                            }
                        }

                        if (keys.length > 0 && tags.length > 0) {
                            for (const key of keys) {
                                database.ref(databaseRoot + "/images/" + key).transaction(function (image) {
                                    image["tags"] = tags;

                                    return image;
                                });
                            }

                            this.isLearning = false;
                        } else if (this.input.length <= this.maxInputLength) {
                            if (this.isEditing) {
                                const result = this.chars.find(x => x.some(y => !y.reserved));
                                const column = [];
        
                                column.push({ set: [this.input], index: 0, count: 0, timestamp: Math.floor(new Date() / 1000), reserved: false });
        
                                if (typeof result === "undefined") {
                                    this.chars.splice(0, 0, column);
                                } else {
                                    result.push({ set: [this.input], index: 0, count: 0, timestamp: Math.floor(new Date() / 1000), reserved: false });
                                }
        
                                this.input = "";
                                this.isEditing = false;
                            } else {
                                const location = this.map.getCenter();

                                this.learn({ name: this.input, location: { latitude: location.latitude, longitude: location.longitude } });
                                this.input = "";
                                this.isLearning = false;
                            }
                        }
                    } else {
                        for (const image of this.backgroundImages) {
                            this.input = image.id;

                            break;
                        }
                    }
                } else if (this.input.length > 0 && this.input.length <= this.maxInputLength) {
                    if (this.isEditing) {
                        let index = -1;
                        const column = [];

                        for (let i = this.chars.length - 1; i >= 0; i--) {
                            if (this.chars[i].some(x => !x.reserved)) {
                                index = i;

                                break;
                            }
                        }
                        
                        column.push({ set: [this.input], index: 0, count: 0, timestamp: Math.floor(new Date() / 1000), reserved: false });

                        if (index >= 0) {
                            this.chars.splice(index + 1, 0, column);
                        } else {
                            this.chars.splice(0, 0, column);
                        }

                        this.input = "";
                        this.isEditing = false;
                    } else {
                        const location = this.map.getCenter();

                        this.learn({ name: this.input, location: { latitude: location.latitude, longitude: location.longitude } });
                        this.input = "";
                        this.isLearning = false;
                    }
                } else {
                    this.shake(this.$refs.input);
                }
            },
            setImage: async function (pushpin, user, selected = false) {
                const self = this;
                //const hours = new Date(track.position.timestamp * 1000).getHours();

                if ("image" in user) {
                    let image;
                    /*pushpin.setOptions({
                        icon: `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
                        <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
                        <svg width="18" height="18" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
                            <g transform="matrix(1,0,0,1,-17.7077,-18.7538)">
                                <path d="M26.708,19.754C31.123,19.754 34.708,23.339 34.708,27.754C34.708,32.169 31.123,35.754 26.708,35.754C22.292,35.754 18.708,32.169 18.708,27.754C18.708,23.339 22.292,19.754 26.708,19.754ZM26.708,23.754C28.915,23.754 30.708,25.546 30.708,27.754C30.708,29.962 28.915,31.754 26.708,31.754C24.5,31.754 22.708,29.962 22.708,27.754C22.708,25.546 24.5,23.754 26.708,23.754Z" style="fill:rgb(255,238,0);"/>
                            </g>
                        </svg>`
                    });*/

                    try {
                        image = await new Promise(async (resolve, reject) => {
                            const i = new Image();

                            i.onload = () => {
                                resolve(i);
                            };
                            i.onerror = (e) => {
                                reject(e);
                            };

                            if (user.image.startsWith("gs://")) {
                                i.src = await storage.refFromURL(user.image).getDownloadURL();
                            } else {
                                i.crossOrigin = "Anonymous";
                                i.src = user.image;
                            }
                        });
                    } catch (e) {
                        pushpin.setOptions({
                            icon: `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
                            <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
                            <svg width="50" height="54" viewBox="0 0 50 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
                                <g transform="matrix(0.999999,0,0,0.999999,17.0011,-13)">
                                    <path d="M0,50L16,50L8,66L0,50Z" style="fill:rgb(255,238,0);"/>
                                </g>
                                <g transform="matrix(1.96491,0,0,1.96491,-30.0099,-24.5931)">
                                    <circle cx="27.996" cy="25.239" r="12.214" style="fill:rgb(255,238,0);"/>
                                    <g transform="matrix(0.410574,0,0,0.410574,34.0498,26.7694)">
                                        <path d="M0,-7.29C-0.311,-8.247 -1.138,-8.944 -2.133,-9.089L-9.21,-10.117L-12.375,-16.529C-12.819,-17.432 -13.738,-18.003 -14.744,-18.003C-15.75,-18.003 -16.67,-17.432 -17.114,-16.53L-20.279,-10.117L-27.355,-9.089C-28.352,-8.944 -29.179,-8.247 -29.49,-7.29C-29.801,-6.333 -29.541,-5.283 -28.82,-4.581L-23.7,0.41L-24.908,7.459C-25.078,8.45 -24.672,9.452 -23.857,10.043C-23.043,10.635 -21.965,10.713 -21.074,10.244L-14.744,6.917L-8.415,10.244C-8.028,10.447 -7.606,10.548 -7.186,10.548C-6.638,10.548 -6.092,10.377 -5.632,10.043C-4.818,9.452 -4.41,8.45 -4.58,7.458L-5.789,0.41L-0.668,-4.581C0.052,-5.283 0.312,-6.333 0,-7.29" style="fill:white;fill-rule:nonzero;"/>
                                    </g>
                                </g>
                            </svg>`
                        });

                        console.error(e);

                        return;
                    }

                    const c = document.createElement("canvas");
                    const ctx = c.getContext('2d');

                    c.width = image.width;
                    c.height = image.height;

                    ctx.drawImage(image, 0, 0, image.width, image.height);

                    //const opacity = hours >= 6 && hours < 18 ? "0.05" : "1";
                    //const accentColor = self.user.uid === word.id ? self.character.accent : '#ffffff';
                    //const selectedColor = selected ? self.character.accent : 'rgb(254,221,80)';
                    const inlineSvg = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
                        <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
                        <svg width="50" height="54" viewBox="0 0 50 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
                            <g transform="matrix(0.999999,0,0,0.999999,17.0011,-13)">
                                <path d="M0,50L16,50L8,66L0,50Z" style="fill:rgb(255,238,0);"/>
                            </g>
                            <g transform="matrix(1.96491,0,0,1.96491,-30.0099,-24.5931)">
                                <circle cx="27.996" cy="25.239" r="12.214" style="fill:rgb(255,238,0);"/>
                                <clipPath id="_clip1">
                                    <circle cx="27.996" cy="25.239" r="12.214"/>
                                </clipPath>
                                <g clip-path="url(#_clip1)">
                                    <g transform="matrix(0.791667,0,0,0.791667,5.83249,5.2582)">
                                        <circle cx="27.996" cy="25.239" r="12.214" style="fill:white;"/>
                                        <clipPath id="_clip2">
                                            <circle cx="27.996" cy="25.239" r="12.214"/>
                                        </clipPath>
                                        <g clip-path="url(#_clip2)">
                                            <g id="Background" transform="matrix(0.023856,0,0,0.023856,-2.53964,-5.29658)">
                                                <use xlink:href="#_Image3" x="767" y="767" width="1026px" height="1026px"/>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                            <defs>
                                <image id="_Image3" width="1026px" height="1026px" xlink:href="` + c.toDataURL() + `"/>
                            </defs>
                        </svg>`;

                    pushpin.setOptions({
                        icon: inlineSvg
                    });
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
                const storageRef = storage.ref();
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
                    const uploadTask = storageRef.child(`images/${generateUuid()}`).put(file);

                    try {
                        await new Promise(function (resolve, reject) {
                            uploadTask.on("state_changed", function (snapshot) {
                                self.progress = snapshot.bytesTransferred / snapshot.totalBytes / files.length + paths.length / files.length;
                            }, function (error) {
                                reject(error);
                            }, function () {
                                resolve();
                            });
                        });
                    } catch (e) {
                        this.notify({ text: e.message, accent: this.character.accent, image: this.character.image });
                        console.error(e);
                    }

                    paths.push(uploadTask.snapshot.ref.fullPath);
                }

                database.ref(databaseRoot + "/images").push({ paths: paths, timestamp: Math.floor(new Date() / 1000) });

                this.progress = null;
                this.isUploading = false;
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
                    const snapshot = await database.ref(databaseRoot + "/users/" + this.user.uid + "/dictionary/words/" + word.name).once("value");

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

                if ("location" in word) {
                    this.word["location"] = word.location;
                }

                if ("user" in word) {
                    this.word["user"] = word.user;
                }

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
            check: function (event) {
                for (const attribute of this.word.attributes) {
                    if (attribute === event.target.dataset.attribute) {
                        attribute.value = event.target.checked;
                    }
                }
            },
            share: async function (word) {
                const self = this;
                const location = "location" in word ? word.location : this.map.getCenter();
                const geohash = this.encodeGeohash(location.latitude, location.longitude);
                const user = { id: this.user.uid, name: this.user.displayName, image: this.user.photoURL };
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

                if (this.user.providerData[0].providerId === firebase.auth.TwitterAuthProvider.PROVIDER_ID) {
                    const link = await database.ref(`${databaseRoot}/users/${this.user.uid}/link`).once("value");

                    if (link.exists()) {
                        user["link"] = link.val();
                    }
                }

                database.ref(databaseRoot + "/users/" + this.user.uid + "/dictionary/words/" + word.name).transaction(function (current) {
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

                        if ("user" in word) {
                            current["user"] = { id: word.user.id, name: word.user.name, image: word.user.image };
                        }
                    }

                    return current;
                }, async function (error, committed, snapshot) {
                    if (committed) {
                        if (snapshot.exists()) {
                            const dictionary = snapshot.val();
                            const timestamps = [];

                            for (const key in dictionary.attributes) {
                                if (typeof dictionary.attributes[key] === "number" && dictionary.attributes[key] > 0 && self.attributes.includes(key)) {
                                    timestamps.push(dictionary.attributes[key]);
                                }
                            }

                            if (timestamps.length === 1 && timestamps[0] === dictionary.timestamp) {
                                function format(format) {
                                    var args = arguments;

                                    return format.replace(/\{(\d)\}/g, function (m, c) { return args[parseInt(c) + 1] });
                                }

                                database.ref(databaseRoot + "/users/" + self.user.uid + "/dictionary/count").transaction(function (count) {
                                    return (count || 0) + 1;
                                });

                                for (const obj of self.prepare(self.character.sequences.filter((x) => x.name === "Learned"))) {
                                    if (obj.type === "Message") {
                                        self.notify({ text: format(obj.text, word.name), accent: self.character.accent, image: self.character.image });
                                    }
                                }

                                self.isStared = true;

                                window.setTimeout(() => {
                                    self.isStared = false;
                                }, 3000);

                                if (!self.isMuted) {
                                    self.$refs.twinkle.play();
                                }
                            }

                            if ("user" in word === false || word.user.id === self.user.uid) {
                                database.ref(databaseRoot + "/tracks/" + await self.digestMessage(`${self.user.uid}&${word.name}`)).transaction(function (current) {
                                    const attributes = {};

                                    if (current) {
                                        current["key"] = `${geohash}${timestamp}`;
                                        current["location"] = { latitude: location.latitude, longitude: location.longitude };
                                        current["geohash"] = geohash;
                                        current["timestamp"] = timestamp;
                                    } else {
                                        current = { key: `${geohash}${timestamp}`, name: word.name, location: { latitude: location.latitude, longitude: location.longitude }, geohash: geohash, user: user, timestamp: timestamp };
                                    }

                                    for (const key in dictionary.attributes) {
                                        if (self.attributes.includes(key)) {
                                            attributes[key] = dictionary.attributes[key];
                                        }
                                    }

                                    current["attributes"] = attributes;

                                    return current;
                                }, function (e, c, s) {
                                    if (c) {
                                        if (s.exists()) {
                                            self.update(true);
                                        }
                                    } else if (e) {
                                        self.notify({ text: e.message, accent: self.character.accent, image: self.character.image });
                                        console.error(e);
                                    }

                                    self.isSubmitting = false;
                                });
                            } else {
                                self.isSubmitting = false;
                            }

                            /*await new Promise((resolve, reject) => {
                                const ref = database.ref(`${databaseRoot}/tracks`).push();
            
                                ref.set({ key: geohash + timestamp, name: word.name, attributes: word.attributes, location: { latitude: position.coords.latitude, longitude: position.coords.longitude }, geohash: geohash, timestamp: timestamp, user: { id: self.user.uid, name: self.user.displayName, image: self.user.photoURL } }, async (error) => {
                                    if (error) {
                                        reject(error);
                                    } else {
                                        resolve();
                                    }
                                });
                            });*/
                        } else {
                            database.ref(databaseRoot + "/users/" + self.user.uid + "/dictionary/count").transaction(function (count) {
                                if (count && count > 1) {
                                    return count - 1;
                                }

                                return null;
                            });
                            database.ref(databaseRoot + "/tracks/" + await self.digestMessage(`${self.user.uid}&${word.name}`)).transaction(function (current) {
                                return null;
                            }, function (e, c, s) {
                                if (c) {
                                    if (!s.exists()) {
                                        self.update(true);
                                    }
                                } else if (e) {
                                    self.notify({ text: e.message, accent: self.character.accent, image: self.character.image });
                                    console.error(e);
                                }

                                self.isSubmitting = false;
                            });
                        }
                    } else if (error) {
                        self.notify({ text: error.message, accent: self.character.accent, image: self.character.image });
                        console.error(error);
                        self.isSubmitting = false;
                    } else if ("user" in word === false || word.user.id === self.user.uid) {
                        database.ref(databaseRoot + "/tracks/" + await self.digestMessage(`${self.user.uid}&${word.name}`)).transaction(function (current) {
                            if (current) {
                                current["key"] = `${geohash}${timestamp}`;
                                current["location"] = { latitude: location.latitude, longitude: location.longitude };
                                current["geohash"] = geohash;
                                current["user"] = user;
                                current["timestamp"] = timestamp;

                                for (const attribute of word.attributes) {
                                    if (attribute.value) {
                                        current.attributes[attribute.name] = timestamp - 1;
                                    } else {
                                        current.attributes[attribute.name] = 0;
                                    }
                                }
                            } else {
                                current = { key: `${geohash}${timestamp}`, name: word.name, location: { latitude: location.latitude, longitude: location.longitude }, geohash: geohash, attributes: {}, user: user, timestamp: timestamp };

                                for (const attribute of word.attributes) {
                                    if (attribute.value) {
                                        current.attributes[attribute.name] = timestamp;
                                    } else {
                                        current.attributes[attribute.name] = 0;
                                    }
                                }
                            }

                            return current;
                        }, function (e, c, s) {
                            if (c) {
                                if (s.exists()) {
                                    self.update(true);
                                }
                            } else if (e) {
                                self.notify({ text: e.message, accent: self.character.accent, image: self.character.image });
                                console.error(e);
                            }

                            self.isSubmitting = false;
                        });
                    } else {
                        self.isSubmitting = false;
                    }
                });
            },
            next: async function (userId, startAt, limit = 50) {
                let snapshot;

                if (startAt === null) {
                    snapshot = await database.ref(databaseRoot + "/users/" + userId + "/dictionary/words").orderByKey().limitToFirst(limit + 1).once("value");
                } else {
                    snapshot = await database.ref(databaseRoot + "/users/" + userId + "/dictionary/words").orderByKey().startAt(startAt).limitToFirst(limit + 1).once("value");
                }

                if ("words" in this.mode) {
                    const tempWords = [];

                    if (snapshot.exists()) {
                        const words = snapshot.val();

                        if (this.mode.words !== null && this.mode.words.length > 0) {
                            this.mode.indexes.push(this.mode.words[0]);
                        }

                        for (const name in words) {
                            tempWords.push("user" in words[name] ? { name: name, attributes: words[name].attributes, user: words[name].user } : { name: name, attributes: words[name].attributes });
                        }

                        if (tempWords.length === limit + 1) {
                            this.mode.next = tempWords.pop();
                        } else {
                            this.mode.next = null;
                        }
                    }

                    this.mode.words = tempWords;
                }
            },
            previous: async function (userId, startAt, limit = 50) {
                let snapshot = await database.ref(databaseRoot + "/users/" + userId + "/dictionary/words").orderByKey().startAt(startAt).limitToFirst(limit).once("value");

                if ("words" in this.mode && snapshot.exists()) {
                    const words = snapshot.val();

                    if (this.mode.words !== null && this.mode.words.length > 0) {
                        this.mode.next = this.mode.words[0];
                    }

                    this.mode.words = [];

                    for (const name in words) {
                        this.mode.words.push("user" in words[name] ? { name: name, attributes: words[name].attributes, user: words[name].user } : { name: name, attributes: words[name].attributes });
                    }
                }
            },
            discover: async function () {
                const self = this;
                const words = [];
                const wordSet = {};
                const sequence = [];

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

                for (const word of this.recentWords) {
                    if (this.user.uid !== word.user.id) {
                        words.push(word);
                        wordSet[word.name] = word;
                    }
                }

                for (const key in this.cachedTracks) {
                    if (this.user.uid !== this.cachedTracks[key].user.id && this.cachedTracks[key].name in wordSet === false) {
                        words.push(this.cachedTracks[key]);
                    }
                }

                this.isDiscovering = true;

                for (const word of shuffle(words)) {
                    //const snapshot = await database.ref(databaseRoot + "/users/" + this.user.uid + "/dictionary/words/" + word.name).once("value");

                    try {
                        const s = await new Promise((resolve, reject) => {
                            database.ref(databaseRoot + "/users/" + self.user.uid + "/dictionary/words/" + word.name).transaction(function (current) {
                                if (current) {
                                    return undefined;
                                }

                                //return { key: word.key, name: word.name, attributes: word.attributes, location: word.location, geohash: word.geohash, timestamp: timestamp };
                                return current;
                            }, function (error, committed, snapshot) {
                                if (committed) {
                                    resolve(snapshot);
                                } else if (error) {
                                    reject(error);
                                } else {
                                    resolve(null);
                                }
                            });
                        });

                        if (s !== null) {
                            function format(format) {
                                var args = arguments;

                                return format.replace(/\{(\d)\}/g, function (m, c) { return args[parseInt(c) + 1] });
                            }

                            this.isDiscovering = false;

                            /*for (const obj of this.prepare(this.character.sequences.filter((x) => x.name === "Discover"), word.name)) {
                                if (obj.type === "Message") {
                                    this.notify({ text: format(obj.text, word.name), accent: this.character.accent, image: this.character.image });
                                }
                            }*/

                            for (const obj of this.prepare(this.character.alternative.sequences.filter((x) => x.name === "Discover"), word.name, this.character.alternative.sequences)) {
                                if (obj.type === "Message") {
                                    sequence.push({ type: obj.type, speed: obj.speed, duration: obj.duration, character: this.character.alternative, text: format(obj.text, word.name) });
                                } else {
                                    obj["character"] = this.character.alternative;
                                    sequence.push(obj);
                                }
                            }

                            if (sequence.length > 0) {
                                this.sequenceQueue.push(sequence);
                            }

                            this.learn({ name: word.name, attributes: word.attributes, location: word.location, user: word.user });
                            this.map.setView({
                                center: new Microsoft.Maps.Location(word.location.latitude, word.location.longitude),
                                zoom: self.map.getZoom() < 16 ? 16 : self.map.getZoom()
                            });

                            return;
                        }
                    } catch (e) {
                        this.notify({ text: e.message, accent: this.character.accent, image: this.character.image });
                        console.error(e);
                    }
                }

                this.isDiscovering = false;

                /*for (const obj of this.prepare(this.character.sequences.filter((x) => x.name === "Discover"), "")) {
                    if (obj.type === "Message") {
                        this.notify({ text: obj.text, accent: this.character.accent, image: this.character.image });
                    }
                }*/

                for (const obj of this.prepare(this.character.alternative.sequences.filter((x) => x.name === "Discover"), "", this.character.alternative.sequences)) {
                    if (obj.type === "Message") {
                        sequence.push({ type: obj.type, speed: obj.speed, duration: obj.duration, character: this.character.alternative, text: obj.text });
                    } else {
                        obj["character"] = this.character.alternative;
                        sequence.push(obj);
                    }
                }

                if (sequence.length > 0) {
                    this.sequenceQueue.push(sequence);
                }
            },
            digestMessage: async function (message) {
                const msgUint8 = new TextEncoder().encode(message);                           // encode as (utf-8) Uint8Array
                const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);           // hash the message
                const hashArray = Array.from(new Uint8Array(hashBuffer));                     // convert buffer to byte array
                const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join(''); // convert bytes to hex string

                return hashHex;
            },
            activate: async function () {
                idleTime = activateTime = 0.0;

                if (this.cachedDocuments.length > 0) {
                    if (this.documentQueue.length == 0) {
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

                        for (const document of shuffle(this.cachedDocuments)) {
                            this.documentQueue.push(document);
                        }
                    }

                    const document = this.documentQueue.shift();

                    if (!await this.talk(this.user.uid, document.filter((x) => x !== this.character.name))) {
                        this.talk(this.user.uid);
                    }
                } else {
                    this.talk(this.user.uid);
                }
            },
            talk: async function (userId, tokens = []) {
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

                    const timestamp = Math.floor(new Date() / 1000);
                    const timeout = 60 * 60;
                    const tempStates = Object.assign({}, this.states);
                    const segmenter = new TinySegmenter();
                    const attributes = [];
                    const tokenSet = [];

                    for (const token of tokens) {
                        if (token in this.wordDictionary === false || timestamp - this.wordDictionary[token].timestamp >= timeout) {
                            const snapshot = await database.ref(databaseRoot + "/users/" + userId + "/dictionary/words/" + token).once("value");

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

                    for (const s of shuffle(sequences)) {
                        const preparedSequence = this.prepare([s]);
                        let isAborted = false;

                        for (const o of preparedSequence) {
                            if (o.type == "Message") {
                                for (const token of Array.isArray(o.text) ? o.text : segmenter.segment(o.text)) {
                                    if (Array.isArray(token)) {
                                        for (const obj of preparedSequence) {
                                            if (obj.type == "Message") {
                                                const temp = await this.generate(userId, obj.text, tokens);

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
                                    } else if (token.length > 1 && !tokenSet.includes(token)) {
                                        if (token in this.wordDictionary === false || timestamp - this.wordDictionary[token].timestamp >= timeout) {
                                            const snapshot = await database.ref(databaseRoot + "/users/" + userId + "/dictionary/words/" + token).once("value");

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
                                                        const temp = await this.generate(userId, obj.text, tokens);

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
                        const temp = await this.generate(userId, obj.text);

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
            generate: async function (userId, message, hints = []) {
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
                let regex = new RegExp("[.#$\\[\\]]");
                let cachDictionary = {};
                let text = "";
                let index = 0;
                const epsilon = Math.pow(10, -6);
                const beamWidth = 10;
                let sequences = [{ sequence: [], score: 1.0 }]

                for (const token of hints) {
                    if (token in this.wordDictionary === false || timestamp - this.wordDictionary[token].timestamp >= timeout) {
                        const snapshot = await database.ref(databaseRoot + "/users/" + userId + "/dictionary/words/" + token).once("value");

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

                for (const token of tokens) {
                    if (!tokenSet.includes(token)) {
                        if (Array.isArray(token)) {
                            let terms = [];
                            let scores = [];

                            for (const attribute of token) {
                                if (attribute in hintDictionary) {
                                    for (const s of hintDictionary[attribute]) {
                                        if (!terms.includes(s)) {
                                            let isNew = true;

                                            terms.push(s);

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
                                        const snapshot = await database.ref(databaseRoot + "/users/" + userId + "/dictionary/words").orderByChild(`attributes/${attribute}`).limitToLast(100).startAt(1).once("value");

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

                                            terms.push(word);

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
                            let terms = [];
                            let scores = [];

                            if (token in this.wordDictionary === false || timestamp - this.wordDictionary[token].timestamp >= timeout) {
                                const snapshot = await database.ref(databaseRoot + "/users/" + userId + "/dictionary/words/" + token).once("value");

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

                                            terms.push(key);

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
                                        const snapshot = await database.ref(databaseRoot + "/users/" + userId + "/dictionary/words").orderByChild(`attributes/${attribute}`).limitToLast(100).startAt(1).once("value");

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

                                            terms.push(word);

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
                            text += tokens[i];
                        } else {
                            text += cachDictionary[key];
                        }
                    } else {
                        let isNew = true;

                        for (let j = 0; j < s.sequence.length; j++) {
                            if (s.sequence[j].index == i) {
                                if (key == s.sequence[j].term) {
                                    cachDictionary[key] = undefined;
                                } else {
                                    cachDictionary[key] = s.sequence[j].term;
                                    text += s.sequence[j].term;
                                    isNew = false;
                                }

                                break;
                            }
                        }

                        if (isNew) {
                            if (Array.isArray(tokens[i])) {
                                return null;
                            }

                            text += tokens[i];
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
                function _random(min, max) {
                    min = Math.ceil(min);
                    max = Math.floor(max);

                    return Math.floor(Math.random() * (max - min)) + min;
                }

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

                const image = this.backgroundImagesQueue.shift();

                this.preloadImages.splice(0);
                this.backgroundImages.splice(0);

                for (const path of image.paths) {
                    try {
                        this.preloadImages.push({ id: image.id, url: await storage.ref().child(path).getDownloadURL(), timestamp: image.timestamp });
                    } catch (e) {
                        this.notify({ text: e.message, accent: this.character.accent, image: this.character.image });
                        console.error(e);
                    }
                }

                if ("tags" in image) {
                    this.talk(this.user.uid, image.tags.filter((x) => x !== this.character.name));
                }
            },
            load: function (url) {
                let isCompleted = true;

                for (let image of this.preloadImages) {
                    if (image.url == url) {
                        image["isLoaded"] = true;
                    } else if (!("isLoaded" in image)) {
                        isCompleted = false;
                    }
                }

                if (isCompleted) {
                    let index = 0;

                    for (const image of this.preloadImages) {
                        if (image.isLoaded) {
                            this.backgroundImages.push({
                                index: index,
                                id: image.id,
                                url: image.url,
                                timestamp: image.timestamp
                            });

                            index++;
                        }
                    }

                    this.preloadImages.splice(0);
                    this.isBlinded = false;
                }
            },
            error: function (url) {
                let isCompleted = true;

                for (let image of this.preloadImages) {
                    if (image.url == url) {
                        image["isLoaded"] = true;
                    } else if (!("isLoaded" in image)) {
                        isCompleted = false;
                    }
                }

                if (isCompleted) {
                    let index = 0;

                    for (const image of this.preloadImages) {
                        if (image.isLoaded) {
                            this.backgroundImages.push({
                                index: index,
                                id: image.id,
                                url: image.url,
                                timestamp: image.timestamp
                            });

                            index++;
                        }
                    }

                    this.preloadImages.splice(0);
                    this.isBlinded = false;
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
                    self.leaderboardHeight = self.$refs.leaderboard.getBoundingClientRect().height;
                });

                if (!this.isPopup) {
                    this.message = null;
                }

                this.isAnimating = false;
            },
            tickerUpdated: function (el) {
                const self = this;

                this.$nextTick(() => {
                    for (const clip of document.body.querySelectorAll("#input>.columns:last-of-type>.column>.control .clip")) {
                        let width = 0;

                        for (const element of clip.querySelectorAll(":scope .ticker-wrap .ticker .item")) {
                            width += element.getBoundingClientRect().width;
                        }

                        if (width > 0) {
                            self.tickerWidth = Math.min(width / 2, document.body.querySelector("#input>.columns:last-of-type>.column>.control .level").getBoundingClientRect().width);
                            clip.querySelector(":scope .ticker-wrap .ticker").style.width = width + "px";
                        }
                    }
                });
            },
            range: function (date, days) {
                const collection = [];

                for (const day of days) {
                    collection.push(new Date(new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()).getTime() + day * 24 * 60 * 60 * 1000));
                }

                return collection;
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
            reverse: function (collection) {
                return [].concat(collection).reverse();
            },
            formatTime: function (time) {
                const t = Math.floor(time);
                const days = Math.floor(t / 86400);
                const hours = Math.floor(t / 3600);
                const minutes = Math.floor(t / 60);
                const seconds = t % 60;

                if (days > 0) {
                    return days + "d";
                } else if (minutes > 0) {
                    if (hours > 0) {
                        return hours + "h";
                    }

                    return minutes + "m";
                }

                return seconds + "s";
            },
            digestMessage: async function (message) {
                const msgUint8 = new TextEncoder().encode(message);                           // encode as (utf-8) Uint8Array
                const hashBuffer = await crypto.subtle.digest("SHA-256", msgUint8);           // hash the message
                const hashArray = Array.from(new Uint8Array(hashBuffer));                     // convert buffer to byte array
                const hashHex = hashArray.map(b => b.toString(16).padStart(2, "0")).join(""); // convert bytes to hex string

                return hashHex;
            },
            getDistance: function (lat1, lon1, lat2, lon2) {
                var R = 6371; // Radius of the earth in km
                var dLat = this.deg2rad(lat2 - lat1);
                var dLon = this.deg2rad(lon2 - lon1);
                var a =
                    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                    Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
                    Math.sin(dLon / 2) * Math.sin(dLon / 2);
                var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                var d = R * c; // Distance in km

                return d;
            },
            deg2rad: function (deg) {
                return deg * (Math.PI / 180)
            },
            encodeGeohash: function (latitude, longitude, precision = 12) {
                const BITS = [16, 8, 4, 2, 1];
                const BASE32 = "0123456789bcdefghjkmnpqrstuvwxyz";
                var is_even = 1;
                var lat = [];
                var lon = [];
                var bit = 0;
                var ch = 0;
                let geohash = "";

                lat[0] = -90.0; lat[1] = 90.0;
                lon[0] = -180.0; lon[1] = 180.0;

                while (geohash.length < precision) {
                    if (is_even) {
                        const mid = (lon[0] + lon[1]) / 2;

                        if (longitude > mid) {
                            ch |= BITS[bit];
                            lon[0] = mid;
                        } else
                            lon[1] = mid;
                    } else {
                        const mid = (lat[0] + lat[1]) / 2;

                        if (latitude > mid) {
                            ch |= BITS[bit];
                            lat[0] = mid;
                        } else
                            lat[1] = mid;
                    }

                    is_even = !is_even;

                    if (bit < 4) {
                        bit++;
                    } else {
                        geohash += BASE32[ch];
                        bit = 0;
                        ch = 0;
                    }
                }

                return geohash;
            },
            decodeGeohash: function (geohash) {
                const BITS = [16, 8, 4, 2, 1];
                const BASE32 = "0123456789bcdefghjkmnpqrstuvwxyz";
                var is_even = 1;
                var lat = [];
                var lon = [];
                var lat_err = 90.0;
                var lon_err = 180.0;

                lat[0] = -90.0;
                lat[1] = 90.0;
                lon[0] = -180.0;
                lon[1] = 180.0;

                for (var i = 0; i < geohash.length; i++) {
                    var c = geohash[i];
                    var cd = BASE32.indexOf(c);

                    for (var j = 0; j < 5; j++) {
                        const mask = BITS[j];

                        if (is_even) {
                            lon_err /= 2;

                            if (cd & mask) {
                                lon[0] = (lon[0] + lon[1]) / 2;
                            } else {
                                lon[1] = (lon[0] + lon[1]) / 2;
                            }
                        } else {
                            lat_err /= 2;

                            if (cd & mask) {
                                lat[0] = (lat[0] + lat[1]) / 2;
                            } else {
                                lat[1] = (lat[0] + lat[1]) / 2;
                            }
                        }

                        is_even = !is_even;
                    }
                }

                lat[2] = (lat[0] + lat[1]) / 2;
                lon[2] = (lon[0] + lon[1]) / 2;

                return {
                    latitude: lat[2],
                    longitude: lon[2],
                    topleft: { latitude: lat[0], longitude: lon[0] },
                    topright: { latitude: lat[1], longitude: lon[0] },
                    bottomright: { latitude: lat[1], longitude: lon[1] },
                    bottomleft: { latitude: lat[0], longitude: lon[1] }
                };
            },
            getNeighbors: function (geohash) {
                const rightGeohash = this.calculateAdjacent(geohash, 'right');
                const leftGeohash = this.calculateAdjacent(geohash, 'left');

                return {
                    top: this.calculateAdjacent(geohash, 'top'),
                    bottom: this.calculateAdjacent(geohash, 'bottom'),
                    right: rightGeohash,
                    left: leftGeohash,
                    topleft: this.calculateAdjacent(leftGeohash, 'top'),
                    topright: this.calculateAdjacent(rightGeohash, 'top'),
                    bottomright: this.calculateAdjacent(rightGeohash, 'bottom'),
                    bottomleft: this.calculateAdjacent(leftGeohash, 'bottom')
                };
            },
            calculateAdjacent: function (srcHash, dir) {
                const BASE32 = "0123456789bcdefghjkmnpqrstuvwxyz";
                const NEIGHBORS = {
                    right: { even: "bc01fg45238967deuvhjyznpkmstqrwx" },
                    left: { even: "238967debc01fg45kmstqrwxuvhjyznp" },
                    top: { even: "p0r21436x8zb9dcf5h7kjnmqesgutwvy" },
                    bottom: { even: "14365h7k9dcfesgujnmqp0r2twvyx8zb" }
                };
                const BORDERS = {
                    right: { even: "bcfguvyz" },
                    left: { even: "0145hjnp" },
                    top: { even: "prxz" },
                    bottom: { even: "028b" }
                };

                NEIGHBORS.bottom.odd = NEIGHBORS.left.even;
                NEIGHBORS.top.odd = NEIGHBORS.right.even;
                NEIGHBORS.left.odd = NEIGHBORS.bottom.even;
                NEIGHBORS.right.odd = NEIGHBORS.top.even;

                BORDERS.bottom.odd = BORDERS.left.even;
                BORDERS.top.odd = BORDERS.right.even;
                BORDERS.left.odd = BORDERS.bottom.even;
                BORDERS.right.odd = BORDERS.top.even;

                srcHash = srcHash.toLowerCase();

                var lastChr = srcHash.charAt(srcHash.length - 1);
                var type = (srcHash.length % 2) ? 'odd' : 'even';
                var base = srcHash.substring(0, srcHash.length - 1);

                if (BORDERS[dir][type].indexOf(lastChr) != -1) {
                    base = this.calculateAdjacent(base, dir);
                }

                return base + BASE32[NEIGHBORS[dir][type].indexOf(lastChr)];
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
            animate: async function (timestamp) {
                requestAnimationFrame(this.animate);

                if (this.character !== null) {
                    function _random(min, max) {
                        min = Math.ceil(min);
                        max = Math.floor(max);

                        return Math.floor(Math.random() * (max - min)) + min;
                    }

                    const deltaTime = (timestamp - this.elapsed) / 1000;

                    this.elapsed = timestamp;

                    if (this.sequenceQueue.length > 0 && Array.isArray(this.sequenceQueue[0])) {
                        idleTime = 0.0;
                    } else {
                        idleTime += deltaTime;

                        if (!this.isLoading) {
                            activateTime += deltaTime;
                        }

                        if (this.sequenceQueue.length == 0) {
                            if (activateTime >= activateThreshold) {
                                if (this.cachedDocuments.length > 0) {
                                    if (this.documentQueue.length == 0) {
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

                                        for (const document of shuffle(this.cachedDocuments)) {
                                            this.documentQueue.push(document);
                                        }
                                    }

                                    const document = this.documentQueue.shift();

                                    this.talk(this.user.uid, document.filter((x) => x !== this.character.name));
                                }

                                idleTime = activateTime = 0.0;
                            } else if (idleTime >= blinkThreshold) {
                                this.sequenceQueue.push({ sequences: this.prepare(this.character.sequences.filter((x) => x.name === "Idle")) });
                                idleTime = 0.0;
                            }
                        }
                    }

                    if (!this.isLocked && this.sequenceQueue.length > 0) {
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
                                }

                                sequence.shift();
                            } else if (sequence[0].type == "Message" && this.message === null && this.animationQueue.length === 0) {
                                if ("character" in sequence[0]) {
                                    this.message = { time: 0, duration: sequence[0].duration, type: { elapsed: -1, speed: sequence[0].speed, reverse: false, buffer: "", count: 0 }, character: sequence[0].character, text: sequence[0].text };
                                } else {
                                    this.message = { time: 0, duration: sequence[0].duration, type: { elapsed: -1, speed: sequence[0].speed, reverse: false, buffer: "", count: 0 }, character: { name: this.character.name, accent: this.character.accent, image: this.character.image }, text: sequence[0].text };
                                }

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
                        } else if (this.message === null && this.animationQueue.length === 0) {
                            const self = this;

                            Object.keys(this.cachedImages).forEach(function (key) {
                                if (!self.cachedSprites.some(x => x.source === key)) {
                                    delete self.cachedImages[key];
                                }
                            });

                            this.sequenceQueue.shift();
                            this.alternative = null;

                            return;
                        }
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
                                this.cachedSprites.splice(0);

                                for (const sprite of this.render(this.$refs.canvas.getContext("2d"), this.canvasWidth, this.canvasHeight, animation.images)) {
                                    this.cachedSprites.push(sprite);
                                }
                            } else {
                                this.alternative = this.character.alternative;
                                this.alternativeCachedSprites.splice(0);

                                for (const sprite of this.render(this.$refs.alternative.getContext("2d"), this.alternativeCanvasWidth, this.alternativeCanvasHeight, animation.images)) {
                                    this.alternativeCachedSprites.push(sprite);
                                }
                            }

                            this.animationQueue.shift();
                        }
                    }
                }
            },
            render: function (ctx, width, height, animation) {
                const sprites = [];

                ctx.clearRect(0, 0, width, height);

                for (const sprite of animation) {
                    if (sprite.source in this.cachedImages) {
                        if ("opacity" in sprite) {
                            ctx.globalAlpha = sprite.opacity;
                        } else {
                            ctx.globalAlpha = 1;
                        }

                        ctx.drawImage(this.cachedImages[sprite.source], sprite.x * window.devicePixelRatio, sprite.y * window.devicePixelRatio, sprite.width * window.devicePixelRatio, sprite.height * window.devicePixelRatio);
                    }

                    sprites.push(sprite);
                }

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
            /*for (const clip of document.body.querySelectorAll("#input>.columns:last-of-type>.column>.control .clip")) {
                let width = 0;

                for (const element of clip.querySelectorAll(":scope .ticker-wrap .ticker .item")) {
                    width += element.getBoundingClientRect().width;
                }

                if (width > 0) {
                    this.tickerWidth = Math.min(width / 2, document.body.querySelector("#input>.columns:last-of-type>.column>.control .level").getBoundingClientRect().width);
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

            const self = this;
            const botStorageItem = localStorage.getItem("character");
            const credentialStorageItem = localStorage.getItem("credential");
            const statsStorageItem = localStorage.getItem("stats");
            const fragmentsStorageItem = localStorage.getItem("fragments");
            let credential = null;
            let fragments;
            const characters = [{ path: "/assets/milch.json", probability: 1.0 }];
            const alternatives = [{ path: "/assets/merku.json", probability: 1.0 }];

            if (botStorageItem) {
                try {
                    const bot = JSON.parse(botStorageItem);

                    if (bot !== null) {
                        this.isMuted = bot.mute;
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

            if (statsStorageItem) {
                const baseDate = new Date().getTime() - 7 * 24 * 60 * 60 * 1000;

                try {
                    for (const day of JSON.parse(statsStorageItem)) {
                        const date = new Date(day.date);

                        if (date.getTime() > baseDate) {
                            this.stats.push({ date: date, steps: day.steps });
                        }
                    }
                } catch (e) {
                    localStorage.removeItem("stats");
                }
            }

            if (fragmentsStorageItem) {
                try {
                    fragments = JSON.parse(fragmentsStorageItem);
                } catch (e) {
                    localStorage.removeItem("fragments");
                    fragments = [];
                }
            } else {
                fragments = [];
            }

            //this.$refs.container.after(stats.domElement);

            this.insetTop = this.$refs.indicator.getBoundingClientRect().height;
            this.insetBottom = this.$refs.blank.getBoundingClientRect().height;

            this.map = new Microsoft.Maps.Map(this.$refs.map, {
                mapTypeId: Microsoft.Maps.MapTypeId.canvasLight
            });
            this.map.setOptions({
                enableHighDpi: window.devicePixelRatio > 1 ? true : false,
                showLocateMeButton: false,
                showMapTypeSelector: false,
                showZoomButtons: false,
                showScalebar: false,
                supportedMapTypes: [Microsoft.Maps.MapTypeId.grayscale, Microsoft.Maps.MapTypeId.canvasLight, Microsoft.Maps.MapTypeId.canvasDark]
            });

            this.layer = new Microsoft.Maps.Layer();
            this.layer.setVisible(false);
            this.map.layers.insert(this.layer);

            Microsoft.Maps.Events.addHandler(this.map, 'viewchangeend', () => {
                if (self.user !== null) {
                    self.update();
                }
            });

            try {
                this.progress = 1;

                const response1 = await fetch(choice(characters, (x) => x.probability).path, {
                    mode: "cors",
                    method: "GET",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                });

                if (response1.ok) {
                    const character = await response1.json();
                    const sequence = this.prepare(character.sequences.filter((x) => x.name === "Start"), null, character.sequences)
                    const response2 = await fetch(choice(alternatives, (x) => x.probability).path, {
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

                    const response3 = await fetch("/assets/fragments.json", {
                        mode: "cors",
                        method: "GET",
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    });

                    if (response3.ok) {
                        const timestamp = Math.floor(new Date() / 1000);
                        const baseTime = new Date().getTime() - 24 * 60 * 60 * 1000;
                        let index = 0;

                        for (const group of await response3.json()) {
                            const g = [];

                            for (const set of group) {
                                const result = fragments.find(x => set.some(y => x.set.includes(y)) && x.count > 0 && x.timestamp * 1000 > baseTime && x.checksum === [...String(x.timestamp)].reduce((x, y) => x + y, 0) + [...String(x.count)].reduce((x, y) => x + y, 0));

                                if (typeof result === "undefined") {
                                    g.push({ set: set, index: 0, count: 0, timestamp: timestamp, reserved: true });
                                } else {
                                    g.push({ set: set, index: 0, count: result.count, timestamp: result.timestamp, reserved: true });
                                }
                            }

                            this.chars.push(g);
                        }

                        for (const fragment of fragments) {
                            if (!fragment.set.some(x => this.chars.some(y => y.some(z => z.set.includes(x))))) {
                                const column = [];

                                column.push({ set: fragment.set, index: 0, count: fragment.count, timestamp: fragment.timestamp, reserved: false });
                                this.chars.splice(index, 0, column);
                                index++;
                            }
                        }
                    } else {
                        throw new Error(response3.statusText);
                    }

                    this.progress = null;
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

                                for (const sprite of this.render(this.$refs.canvas.getContext("2d"), this.canvasWidth, this.canvasHeight, images)) {
                                    this.cachedSprites.push(sprite);
                                }
                            }

                            break;
                        }
                    }

                    this.character = character;
                    this.character["alternative"] = alternative;
                    this.sequenceQueue.push(sequence);
                } else {
                    throw new Error(response1.statusText);
                }
            } catch (e) {
                this.progress = null;
                this.notify({ text: e.message });
                console.error(e);
            }

            this.animate();

            if (credential === null) {
                this.mode = "sign-in";
                this.isRevealed = true;
            } else {
                if (credential.providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID) {
                    firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(credential.idToken)).catch((error) => {
                        console.error(error.code, error.message);
                    });
                } else if (credential.providerId === firebase.auth.FacebookAuthProvider.PROVIDER_ID) {
                    firebase.auth().signInWithCredential(firebase.auth.FacebookAuthProvider.credential(credential.accessToken)).catch((error) => {
                        console.error(error.code, error.message);
                    });
                } else if (credential.providerId === firebase.auth.TwitterAuthProvider.PROVIDER_ID) {
                    firebase.auth().signInWithCredential(firebase.auth.TwitterAuthProvider.credential(credential.accessToken, credential.secret)).catch((error) => {
                        console.error(error.code, error.message);
                    });
                } else {
                    this.mode = "sign-in";
                    this.isRevealed = true;
                }
            }

            /*firebase.auth().signInAnonymously().catch(function (error) {
                self.notify({ text: error.message, accent: self.character.accent, image: self.character.image });
                console.error(error.code, error.message);
            });*/

            firebase.auth().onAuthStateChanged(function (user) {
                if (user) {
                    // User is signed in.
                    const nowDate = new Date();

                    self.user = user;
                    self.update();

                    for (const day of self.stats) {
                        if (day.date.getFullYear() === nowDate.getFullYear() && day.date.getMonth() === nowDate.getMonth() && day.date.getDate() === nowDate.getDate()) {
                            self.steps = day.steps;
                        }
                    }

                    database.ref(databaseRoot + "/users/" + user.uid + "/dictionary/count").on("value", snapshot => {
                        const count = snapshot.val();

                        if (count === null) {
                            self.stars = 0;
                        } else {
                            self.stars = count;
                        }
                    });
                    database.ref(databaseRoot + "/tracks").orderByChild("timestamp").limitToLast(10).on("value", snapshot => {
                        if (snapshot.exists()) {
                            const words = snapshot.val();
                            const tempWords = [];
                            let index = 0;

                            for (const key in words) {
                                words[key]["id"] = key;

                                tempWords.push(words[key]);
                            }

                            for (const word of tempWords.sort((x, y) => y.timestamp - x.timestamp)) {
                                let removeIndex = -1;

                                for (let i = 0; i < self.recentWords.length; i++) {
                                    if (self.recentWords[i].name == word.name) {
                                        removeIndex = i;

                                        break;
                                    }
                                }

                                if (removeIndex >= 0) {
                                    self.recentWords.splice(removeIndex, 1);
                                }

                                self.recentWords.splice(index, 0, word);
                                index++;
                            }

                            for (let i = self.recentWords.length - 1; i >= index; i--) {
                                self.recentWords.splice(i, 1);
                            }
                        }
                    });
                } else if (self.user !== null) {
                    // User is signed out.
                    database.ref(databaseRoot + "/users/" + self.user.uid + "/dictionary/count").off("value");
                    database.ref(databaseRoot + "/tracks").off("value");

                    self.user = null;
                    self.stars = 0;
                }

                //database.ref(databaseRoot + "/words").orderByChild("timestamp").limitToLast(100).on("value", snapshot => {
                //    if (snapshot.exists()) {
                //        const words = snapshot.val();
                /*let isUpdated = false;

                for (const key in images) {
                    if (!self.recentImages.some(x => x.id === key && x.timestamp === images[key].timestamp)) {
                        isUpdated = true;

                        break;
                    }
                }

                if (isUpdated) {
                    self.recentImages.splice(0);

                    for (const key in images) {
                        images[key]["id"] = key;
                        self.recentImages.push(images[key]);
                    }

                    self.update(self.recentImages, self.maxTags);
                    self.isBlinded = true;
                }*/
                //    }
                //});
            });
        }
    }).mount("#app");

    window.addEventListener("resize", event => {
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
        app.animationQueue.unshift({ character: app.character, images: [].concat(app.cachedSprites) });

        if (app.alternative !== null) {
            app.animationQueue.unshift({ character: app.character.alternative, images: [].concat(app.alternativeCachedSprites) });
        }
        /*
        
        
        Object.keys(app.cachedImages).forEach(function (key) {
            delete app.cachedImages[key];
        });*/

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
            for (const clip of document.body.querySelectorAll("#input>.columns:last-of-type>.column>.control .clip")) {
                let width = 0;

                for (const element of clip.querySelectorAll(":scope .ticker-wrap .ticker .item")) {
                    width += element.getBoundingClientRect().width;
                }

                if (width > 0) {
                    app.tickerWidth = Math.min(width / 2, document.body.querySelector("#input>.columns:last-of-type>.column>.control .level").getBoundingClientRect().width);
                    clip.querySelector(":scope .ticker-wrap .ticker").style.width = width + "px";
                }
            }
        });*/
    });
    window.addEventListener("click", event => {
    });
    window.addEventListener("dblclick", event => {
        //app.activate();
        //activateTime = 0.0;
    });
    window.addEventListener("mousedown", event => {
        /*if (event.button === 0) {
            if (bestIntersect !== null) {
                let springBoneIndex = 0;
    
                draggableBone = { point: { x: event.clientX, y: event.clientY }, direction: { x: 0, y: 0, }, distance: 0, index: -1 };
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
        }*/
    });
    window.addEventListener("mousemove", event => {

    });
    window.addEventListener("mouseup", event => {
        /*if (event.button === 0) {
            if (app.character !== null) {
                app.sequenceQueue.push(app.prepare(app.character.sequences.filter((x) => x.name === "TouchEnd")));
            }
        }*/
    });
    window.addEventListener("touchstart", event => {
        event.stopPropagation();

        if (tapCount == 0) {
            tapCount++;

            setTimeout(() => {
                tapCount = 0;
            }, 500);

            /*let minDistance = Number.MAX_SAFE_INTEGER;
            let bestIntersect = null;
    
            mouse.x = (event.changedTouches[0].clientX / window.innerWidth) * 2.0 - 1.0;
            mouse.y = -(event.changedTouches[0].clientY / window.outerHeight) * 2.0 + 1.0;
    
            raycaster.setFromCamera(mouse, camera);
    
            for (let intersect of raycaster.intersectObjects(scene.children, true)) {
                if (intersect.distance < minDistance) {
                    bestIntersect = intersect;
                    minDistance = intersect.distance;
                }
            }
    
            if (bestIntersect !== null) {
                let springBoneIndex = 0;
    
                draggableBone = { point: { x: event.changedTouches[0].clientX, y: event.changedTouches[0].clientY }, direction: { x: 0, y: 0, }, distance: 0, index: -1 };
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
    
            lookAnimation = { time: 0.0, duration: 0.5, source: { x: lookAtTarget.position.x, y: lookAtTarget.position.y }, target: { x: (event.changedTouches[0].clientX - 0.5 * window.innerWidth) / window.outerHeight * 10.0, y: (event.changedTouches[0].clientY - 0.5 * window.outerHeight) / window.outerHeight * -10.0 } };
            */
        } else {
            //raycaster.setFromCamera(mouse, camera);

            //if (raycaster.intersectObjects(scene.children, true).length > 0) {
            //app.talk(app.user.uid);
            //activateTime = 0.0;
            //}

            tapCount = 0;
        }
    });
    window.addEventListener("touchmove", event => {
        event.stopPropagation();

        //lookAnimation = { time: 0.0, duration: 0.5, source: { x: lookAtTarget.position.x, y: lookAtTarget.position.y }, target: { x: (event.changedTouches[0].clientX - 0.5 * window.innerWidth) / window.outerHeight * 10.0, y: (event.changedTouches[0].clientY - 0.5 * window.outerHeight) / window.outerHeight * -10.0 } };
    });
    window.addEventListener("touchend", event => {
        event.stopPropagation();

        /*lookAnimation = { time: 0.0, duration: 0.5, source: { x: lookAtTarget.position.x, y: lookAtTarget.position.y }, target: { x: (event.changedTouches[0].clientX - 0.5 * window.innerWidth) / window.outerHeight * 10.0, y: (event.changedTouches[0].clientY - 0.5 * window.outerHeight) / window.outerHeight * -10.0 } };
    
        if (app.character !== null) {
            app.sequenceQueue.push(app.prepare(app.character.sequences.filter((x) => x.name === "TouchEnd")));
        }*/
    });
    window.addEventListener("touchcancel", event => {
        event.stopPropagation();
    });
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", e => {
        if (e.matches) {
            app.isDarkMode = true;
        } else {
            app.isDarkMode = false;
        }
    });
});
