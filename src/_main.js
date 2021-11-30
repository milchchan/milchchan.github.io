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
const stats = new Stats();

stats.domElement.style.position = "fixed";
stats.domElement.style.top = "auto";
stats.domElement.style.bottom = "0";
stats.domElement.style.left = "auto";
stats.domElement.style.right = "0";

if (!debug) {
    stats.domElement.classList.add("is-hidden");
}

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

    var app = Vue.createApp({
        data() {
            return {
                isDebug: debug,
                isDarkMode: false,
                isMuted: true,
                isLoading: false,
                isRevealed: false,
                isOverlayed: false,
                isBlinded: false,
                isPopup: false,
                isExpanded: false,
                isLearning: false,
                isAnimating: false,
                isHangingOn: false,
                elapsed: 0,
                map: null,
                layer: null,
                mode: null,
                queryQueue: [],
                queryCache: {},
                cachedUsers: {},
                cachedDocuments: [],
                documentQueue: [],
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
                recentWords: [],
                tags: [],
                maxTags: 10,
                scrollTimeoutID: undefined,
                tickIntervalID: undefined,
                stars: -1,
                animatedStars: 0,
                screenshot: null,
                notifications: [],
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
                    localStorage.setItem("bot", JSON.stringify({ mute: newValue }));
                } catch (e) {
                    localStorage.removeItem("bot");
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
                        app.popupTextHeight = app.$refs.popupText.getBoundingClientRect().height;
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
            signIn: function (event) {
                const self = this;

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

                        for (const data of result.user.providerData) {
                            const photoUrl = data.photoURL.replace(/_normal\.jpg$/, '.jpg');

                            firebase.auth().currentUser.updateProfile({
                                displayName: data.displayName,
                                photoURL: photoUrl
                            }).catch(function (error) {
                                console.error(error.code, error.message);
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
                const users = await this.fetch(ignore, centerLocation.latitude, centerLocation.longitude);

                if (users !== null) {
                    const timestamp = Math.floor(new Date() / 1000);
                    let isUpdated = false;

                    for (const geohash in users) {
                        for (const user of users[geohash]) {
                            let pushpinId = null;
                            const words = [];

                            for (const id in this.cachedUsers) {
                                if (user.id === this.cachedUsers[id].id) {
                                    pushpinId = id;

                                    break;
                                }
                            }

                            if (pushpinId === null) {
                                const pushpin = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(user.location.latitude, user.location.longitude), {
                                    title: user.name,
                                    subTitle: this.formatTime(timestamp - user.timestamp),
                                    icon: "/images/Marker-Star.svg"
                                });

                                this.setImage(pushpin, user);

                                if ("dictionary" in user && "words" in user.dictionary) {
                                    for (const word in user.dictionary.words) {
                                        const clonedWord = Object.assign({}, user.dictionary.words[word]);

                                        clonedWord["name"] = word;
                                        words.push(clonedWord);
                                    }

                                    words.sort((x, y) => y.timestamp - x.timestamp)
                                }

                                user["words"] = words;

                                this.cachedUsers[pushpin.id] = user;
                                this.cachedUsers[pushpin.id]["pushpin"] = pushpin;
                                this.cachedUsers[pushpin.id]["handlers"] = [Microsoft.Maps.Events.addHandler(pushpin, 'click', async (args) => {
                                    self.mode = this.cachedUsers[args.target.id];
                                    self.isRevealed = true;
                                }), Microsoft.Maps.Events.addHandler(pushpin, 'dblclick', (args) => {
                                    window.location.hash = self.cachedUsers[args.target.id].id;
                                })];
                                this.map.entities.push(pushpin);
                                isUpdated = true;
                            } else if (user.timestamp > this.cachedUsers[pushpinId].timestamp) {
                                const pushpin = this.cachedUsers[pushpinId]["pushpin"];
                                const handlers = this.cachedUsers[pushpinId]["handlers"];

                                pushpin.setLocation(new Microsoft.Maps.Location(user.location.latitude, user.location.longitude));
                                pushpin.setOptions({
                                    title: user.name,
                                    subTitle: this.formatTime(timestamp - user.timestamp)
                                });
                                this.setImage(pushpin, user);

                                if ("dictionary" in user && "words" in user.dictionary) {
                                    for (const word in user.dictionary.words) {
                                        const clonedWord = Object.assign({}, user.dictionary.words[word]);

                                        clonedWord["name"] = word;
                                        words.push(clonedWord);
                                    }

                                    words.sort((x, y) => y.timestamp - x.timestamp)
                                }

                                user["words"] = words;

                                this.cachedUsers[pushpinId] = user;
                                this.cachedUsers[pushpinId]["pushpin"] = pushpin;
                                this.cachedUsers[pushpinId]["handlers"] = handlers;
                                isUpdated = true;
                            }
                        }
                    }

                    const ids = [];

                    for (const geohash in users) {
                        for (const user of users[geohash]) {
                            ids.push(user.id);
                        }
                    }

                    Object.keys(this.cachedUsers).forEach(function (key) {
                        if (!ids.some(x => x === self.cachedUsers[key].id)) {
                            for (const handlerId of self.cachedUsers[key].handlers) {
                                Microsoft.Maps.Events.removeHandler(handlerId);
                            }

                            self.map.entities.remove(self.cachedUsers[key].pushpin);

                            delete self.cachedUsers[key];
                            isUpdated = true;
                        }
                    });

                    if (isUpdated) {
                        const max = 10;

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

                                for (const key in users) {
                                    for (const user of users[key]) {
                                        if ("words" in user && user.words.length > 0) {
                                            let tokens = [];
                                            let termSet = [];

                                            for (const word of user.words) {
                                                tokens.push(word.name);

                                                if (!termSet.includes(word.name)) {
                                                    if (word.name in inverseDocumentFrequency) {
                                                        inverseDocumentFrequency[word.name] += 1.0;
                                                    } else {
                                                        inverseDocumentFrequency[word.name] = 1.0;
                                                    }

                                                    termSet.push(word.name);
                                                }
                                            }

                                            documents.push({ tokens: tokens, timestamp: user.timestamp, user: { id: user.id, name: user.name, image: "image" in user ? user.image : null } });
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
                const users = [];
                const data = {};
                let primitives = [];
                let rect = this.decodeGeohash(centerGeohash);
                const timestamp = Math.floor(new Date() / 1000);
                const timeout = 60;
                const tempUserCache = {};
                
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
                        for (const user of this.queryCache[geohash].users) {
                            users.push(user);

                            if (geohash in data) {
                                data[geohash].push(user);
                            } else {
                                data[geohash] = [user];
                            }
                        }

                        continue;
                    }

                    const snapshot = await database.ref(databaseRoot + "/users").orderByChild("key").limitToLast(50).startAt(geohash).endAt(geohash.padEnd(12, "z") + "\uf8ff").once('value');

                    tempUserCache[geohash] = { timestamp: timestamp, users: [] };

                    if (snapshot.exists()) {
                        const dictionary = snapshot.val();

                        for (const key in dictionary) {
                            dictionary[key]["id"] = key;
                            users.push(dictionary[key]);
                            tempUserCache[geohash].users.push(dictionary[key]);

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

                for (const geohash in tempUserCache) {
                    this.queryCache[geohash] = tempUserCache[geohash];
                }

                Object.keys(this.queryCache).forEach(function (key) {
                    if (timestamp - self.queryCache[key].timestamp >= timeout) {
                        delete self.queryCache[key];
                    }
                });

                const u = this.take(users.sort((x, y) => y.timestamp - x.timestamp), 100);

                Object.keys(data).forEach(function (key) {
                    for (let i = data[key].length - 1; i > 0; i--) {
                        if (!u.includes(data[key][i])) {
                            data[key].splice(i, 1);
                        }
                    }

                    if (data[key].length === 0) {
                        delete data[key];
                    }
                });

                return data;
            },
            locate: async function (event) {
                const permissionStatus = await navigator.permissions.query({ name: "geolocation" });

                if (permissionStatus.state == "granted" || permissionStatus.state == "prompt") {
                    try {
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
                        });

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

                        this.map.setView({
                            center: new Microsoft.Maps.Location(position.coords.latitude, position.coords.longitude),
                            zoom: 16
                        });
                    } catch (e) {
                        this.notify({ text: e.message, accent: this.character.accent, image: this.character.image });
                        console.error(e);
                    }
                }
            },
            move: function (event) {
                const self = this;
                const centerLocation = this.map.getCenter();
                const location = { latitude: centerLocation.latitude, longitude: centerLocation.longitude };
                const geohash = this.encodeGeohash(centerLocation.latitude, centerLocation.longitude);
                const timestamp = Math.floor(new Date() / 1000);

                database.ref(databaseRoot + "/users/" + this.user.uid).transaction(function (user) {
                    if (user === null) {
                        return { key: geohash + timestamp, name: self.user.displayName, image: self.user.photoURL, location: location, geohash: geohash, timestamp: timestamp };
                    }

                    user["key"] = geohash + timestamp;
                    user["name"] = self.user.displayName;
                    user["image"] = self.user.photoURL;
                    user["location"] = location;
                    user["geohash"] = geohash;
                    user["timestamp"] = timestamp;

                    return user;
                }, function (error, committed, snapshot) {
                    if (!error) {
                        database.ref(databaseRoot + "/users/" + self.user.uid).transaction(function (user) {
                            return undefined;
                        }, function (error, committed, snapshot) {
                            if (!error) {
                                self.update(true);
                            }
                        });
                    }
                });
            },
            send: async function (event) {
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
                            this.learn(this.input);
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
                    this.learn(this.input);
                    this.input = "";
                    this.isLearning = false;

                    return;
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
                                <path d="M26.708,19.754C31.123,19.754 34.708,23.339 34.708,27.754C34.708,32.169 31.123,35.754 26.708,35.754C22.292,35.754 18.708,32.169 18.708,27.754C18.708,23.339 22.292,19.754 26.708,19.754ZM26.708,23.754C28.915,23.754 30.708,25.546 30.708,27.754C30.708,29.962 28.915,31.754 26.708,31.754C24.5,31.754 22.708,29.962 22.708,27.754C22.708,25.546 24.5,23.754 26.708,23.754Z" style="fill:rgb(0,238,255);"/>
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
                                    <path d="M0,50L16,50L8,66L0,50Z" style="fill:rgb(0,238,255);"/>
                                </g>
                                <g transform="matrix(1.96491,0,0,1.96491,-30.0099,-24.5931)">
                                    <circle cx="27.996" cy="25.239" r="12.214" style="fill:rgb(0,238,255);"/>
                                    <g transform="matrix(0.410574,0,0,0.410574,34.0498,26.7694)">
                                        <path d="M0,-7.29C-0.311,-8.247 -1.138,-8.944 -2.133,-9.089L-9.21,-10.117L-12.375,-16.529C-12.819,-17.432 -13.738,-18.003 -14.744,-18.003C-15.75,-18.003 -16.67,-17.432 -17.114,-16.53L-20.279,-10.117L-27.355,-9.089C-28.352,-8.944 -29.179,-8.247 -29.49,-7.29C-29.801,-6.333 -29.541,-5.283 -28.82,-4.581L-23.7,0.41L-24.908,7.459C-25.078,8.45 -24.672,9.452 -23.857,10.043C-23.043,10.635 -21.965,10.713 -21.074,10.244L-14.744,6.917L-8.415,10.244C-8.028,10.447 -7.606,10.548 -7.186,10.548C-6.638,10.548 -6.092,10.377 -5.632,10.043C-4.818,9.452 -4.41,8.45 -4.58,7.458L-5.789,0.41L-0.668,-4.581C0.052,-5.283 0.312,-6.333 0,-7.29" style="fill:white;fill-rule:nonzero;"/>
                                    </g>
                                </g>
                            </svg>`
                        });

                        console.error(e);

                        return;
                    }

                    const c = document.createElement('canvas');
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
                                <path d="M0,50L16,50L8,66L0,50Z" style="fill:rgb(0,238,255);"/>
                            </g>
                            <g transform="matrix(1.96491,0,0,1.96491,-30.0099,-24.5931)">
                                <circle cx="27.996" cy="25.239" r="12.214" style="fill:rgb(0,238,255);"/>
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

                this.progress = 0.0;
                this.isUploading = false;
            },
            check: async function (event) {
                function format(format) {
                    var args = arguments;

                    return format.replace(/\{(\d)\}/g, function (m, c) { return args[parseInt(c) + 1] });
                }

                const self = this;
                const timestamp = Math.floor(new Date() / 1000);
                const isChecked = event.target.checked;
                const attribute = event.target.dataset.attribute;
                const name = event.target.dataset.word;
                const user = { id: this.user.uid, name: this.user.displayName, image: this.user.photoURL };

                if (event.target.dataset.word in this.wordDictionary) {
                    delete this.wordDictionary[event.target.dataset.word];
                }

                Object.keys(this.reverseWordDictionary).forEach((key) => {
                    if (this.reverseWordDictionary[key].words.some((x) => x === event.target.dataset.word)) {
                        delete this.reverseWordDictionary[key];
                    }
                });

                database.ref(databaseRoot + "/users/" + this.user.uid + "/dictionary/words/" + name).transaction(function (current) {
                    if (current) {
                        if (!isChecked) {
                            let deleteRequired = true;

                            for (const a in current) {
                                if (a != attribute && typeof current[a] === "number" && current[a] > 0 && self.attributes.includes(a)) {
                                    deleteRequired = false;

                                    break;
                                }
                            }

                            if (deleteRequired) {
                                return null;
                            } else {
                                current[attribute] = 0;
                                current["timestamp"] = timestamp;

                                return current;
                            }
                        }
                    } else {
                        current = {};

                        for (const a of self.attributes) {
                            if (a != attribute) {
                                current[a] = 0;
                            }
                        }
                    }

                    current["name"] = name;
                    current[attribute] = current["timestamp"] = timestamp;

                    if ("user" in current === false || current["user"].id === user.id) {
                        current["user"] = user;
                    }

                    return current;
                }, function (error, committed, snapshot) {
                    if (committed) {
                        if (snapshot.exists()) {
                            const dictionary = snapshot.val();
                            let timestamps = [];

                            for (const key in dictionary) {
                                if (typeof dictionary[key] === "number" && dictionary[key] > 0 && self.attributes.includes(key)) {
                                    timestamps.push(dictionary[key]);
                                }
                            }

                            if (timestamps.length === 1 && timestamps[0] === timestamp) {
                                database.ref(databaseRoot + "/users/" + self.user.uid + "/dictionary/count").transaction(function (count) {
                                    return (count || 0) + 1;
                                });

                                for (const obj of self.prepare(self.character.sequences.filter((x) => x.name === "Learned"))) {
                                    if (obj.type === "Message") {
                                        self.notify({ text: format(obj.text, dictionary["name"]), accent: self.character.accent, image: self.character.image });
                                    }
                                }

                                if (!self.isMuted) {
                                    self.$refs.twinkle.play();
                                }
                            }
                        } else {
                            database.ref(databaseRoot + "/users/" + self.user.uid + "/dictionary/count").transaction(function (count) {
                                if (count) {
                                    return count - 1;
                                }

                                return undefined;
                            });
                        }

                        self.word = null;
                    } else if (error) {
                        self.notify({ text: error.message, accent: self.character.accent, image: self.character.image });
                        console.error(error);
                    }
                });
            },
            learn: async function (term) {
                function format(format) {
                    var args = arguments;

                    return format.replace(/\{(\d)\}/g, function (m, c) { return args[parseInt(c) + 1] });
                }

                let attributes = [];

                for (const attribute of this.attributes) {
                    attributes.push({ name: attribute, value: false });
                }

                if (typeof (term) === "object") {
                    const self = this;
                    const data = { user: term.user, timestamp: Math.floor(new Date() / 1000) };

                    for (const attribute of this.attributes) {
                        if (attribute in term) {
                            if (term[attribute] > 0) {
                                data[attribute] = term[attribute];
                            } else {
                                data[attribute] = 0;
                            }
                        }
                    }

                    try {
                        const [committed, snapshot] = await new Promise((resolve, reject) => {
                            database.ref(databaseRoot + "/users/" + self.user.uid + "/dictionary/words/" + term.name).transaction(function (word) {
                                if (word === null) {
                                    return data;
                                }

                                return;
                            }, function (error, committed, snapshot) {
                                if (error) {
                                    reject(error);
                                } else {
                                    resolve([committed, snapshot]);
                                }
                            });
                        });

                        if (committed) {
                            if (snapshot.exists()) {
                                const word = snapshot.val();

                                for (let attribute of attributes) {
                                    if (attribute.name in word) {
                                        if (word[attribute.name] > 0) {
                                            attribute.value = true;
                                        } else {
                                            attribute.value = false;
                                        }
                                    }
                                }
                            }

                            database.ref(databaseRoot + "/users/" + term.user.id + "/stars").transaction(function (count) {
                                return (count || 0) + 1;
                            });

                            for (const obj of this.prepare(this.character.sequences.filter((x) => x.name === "Learned"))) {
                                if (obj.type === "Message") {
                                    this.notify({ text: format(obj.text, word["name"]), accent: this.character.accent, image: this.character.image });
                                }
                            }
                        } else if (snapshot.exists()) {
                            const word = snapshot.val();

                            for (let attribute of attributes) {
                                if (attribute.name in word) {
                                    if (word[attribute.name] > 0) {
                                        attribute.value = true;
                                    } else {
                                        attribute.value = false;
                                    }
                                }
                            }
                        }
                    } catch (e) {
                        this.notify({ text: e.message, accent: this.character.accent, image: this.character.image });
                        console.error(e);
                    }

                    term = term.name;
                } else {
                    const snapshot = await database.ref(databaseRoot + "/users/" + this.user.uid + "/dictionary/words/" + term).once("value");

                    if (snapshot.exists()) {
                        const word = snapshot.val();

                        for (let attribute of attributes) {
                            if (attribute.name in word) {
                                if (word[attribute.name] > 0) {
                                    attribute.value = true;
                                } else {
                                    attribute.value = false;
                                }
                            }
                        }
                    }
                }

                let sequence = [];

                this.word = { name: term, attributes: attributes };

                for (const obj of this.prepare(this.character.sequences.filter((x) => x.name === "Learn"))) {
                    if (obj.type === "Message") {
                        sequence.push({ type: obj.type, speed: obj.speed, duration: obj.duration, text: format(obj.text, term) });
                    } else {
                        sequence.push(obj);
                    }
                }

                if (sequence.length > 0) {
                    this.sequenceQueue.push(sequence);
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

                                for (let attribute in word) {
                                    if (typeof (word[attribute]) === "number" && word[attribute] > 0 && this.attributes.includes(attribute)) {
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

                        for (const o of preparedSequence) {
                            if (o.type == "Message") {
                                for (const token of Array.isArray(o.text) ? o.text : segmenter.segment(o.text)) {
                                    if (token.length > 1 && !tokenSet.includes(token)) {
                                        if (token in this.wordDictionary === false || timestamp - this.wordDictionary[token].timestamp >= timeout) {
                                            const snapshot = await database.ref(databaseRoot + "/users/" + userId + "/dictionary/words/" + token).once("value");

                                            this.wordDictionary[token] = { attributes: [], timestamp: timestamp };

                                            if (snapshot.exists()) {
                                                const word = snapshot.val();

                                                for (const attribute in word) {
                                                    if (typeof (word[attribute]) === "number" && word[attribute] > 0 && this.attributes.includes(attribute)) {
                                                        this.wordDictionary[token].attributes.push(attribute);
                                                    }
                                                }
                                            }
                                        }

                                        for (const attribute of this.wordDictionary[token].attributes) {
                                            if (attributes.includes(attribute)) {
                                                for (const obj of preparedSequence) {
                                                    if (obj.type == "Message") {
                                                        let text;
                                                        let cache;

                                                        [text, cache] = await this.generate(userId, obj.text, tokens);

                                                        sequence.push({ type: obj.type, speed: obj.speed, duration: obj.duration, text: text });
                                                    } else {
                                                        sequence.push(obj);
                                                    }
                                                }

                                                if (sequence.length > 0) {
                                                    this.sequenceQueue.push(sequence);
                                                }

                                                this.isLoading = false;

                                                return;
                                            }
                                        }

                                        tokenSet.push(token);
                                    }
                                }
                            }
                        }

                        this.states = tempStates;
                    }

                    this.isLoading = false;

                    return;
                }

                for (const obj of this.prepare(sequences)) {
                    if (obj.type === "Message") {
                        let text;
                        let cache;

                        [text, cache] = await this.generate(userId, obj.text);

                        sequence.push({ type: obj.type, speed: obj.speed, duration: obj.duration, text: text });
                    } else {
                        sequence.push(obj);
                    }
                }

                if (sequence.length > 0) {
                    this.sequenceQueue.push(sequence);
                }

                this.isLoading = false;
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

                            for (const attribute in word) {
                                if (typeof (word[attribute]) === "number" && word[attribute] > 0 && this.attributes.includes(attribute)) {
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
                            for (const attribute of token) {
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
                                        const snapshot = await database.ref(databaseRoot + "/users/" + userId + "/dictionary/words").orderByChild(attribute).limitToLast(100).startAt(1).once("value");

                                        this.reverseWordDictionary[attribute] = { words: [], timestamp: timestamp };

                                        if (snapshot.exists()) {
                                            const words = snapshot.val();

                                            for (let key in words) {
                                                this.reverseWordDictionary[attribute].words.push(key);
                                            }
                                        }
                                    }

                                    for (const word of this.reverseWordDictionary[attribute].words) {
                                        if (!terms.includes(word)) {
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

                                    for (const attribute in word) {
                                        if (typeof (word[attribute]) === "number" && word[attribute] > 0 && this.attributes.includes(attribute)) {
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
                                        const snapshot = await database.ref(databaseRoot + "/users/" + userId + "/dictionary/words").orderByChild(attribute).limitToLast(100).startAt(1).once("value");

                                        this.reverseWordDictionary[attribute] = { words: [], timestamp: timestamp };

                                        if (snapshot.exists()) {
                                            const words = snapshot.val();

                                            for (let key in words) {
                                                this.reverseWordDictionary[attribute].words.push(key);
                                            }
                                        }
                                    }

                                    for (const word of this.reverseWordDictionary[attribute].words) {
                                        if (!terms.includes(word)) {
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
                    if (tokens[i] in cachDictionary) {
                        if (typeof cachDictionary[tokens[i]] === "undefined") {
                            text += tokens[i];
                        } else {
                            text += cachDictionary[tokens[i]]
                        }
                    } else {
                        let isNew = true;

                        for (let j = 0; j < s.sequence.length; j++) {
                            if (s.sequence[j].index == i) {
                                if (tokens[i] == s.sequence[j].term) {
                                    cachDictionary[tokens[i]] = undefined;
                                } else {
                                    cachDictionary[tokens[i]] = s.sequence[j].term;
                                    text += s.sequence[j].term;
                                    isNew = false;
                                }

                                break;
                            }
                        }

                        if (isNew) {
                            text += tokens[i];
                        }
                    }
                }

                return [text, cachDictionary];
            },
            notify: function (data) {
                const self = this;

                data["id"] = window.setTimeout((d) => {
                    for (let i = 0; i < self.notifications.length; i++) {
                        if (self.notifications[i].id === d.id) {
                            self.notifications.splice(i, 1);

                            break;
                        }
                    }
                }, 3000, data);

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
                    this.talk(this.user.uid, image.tags.filter((x) => x.indexOf(this.character.name) === -1));
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
            update2: async function (data, max) {
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
            prepare: function (sequences, state = null) {
                function _random(min, max) {
                    min = Math.ceil(min);
                    max = Math.floor(max);

                    return Math.floor(Math.random() * (max - min)) + min;
                }

                let choosedSequences = [];
                let flattenedSequence = [];

                for (const s of sequences) {
                    const tempState = state;

                    if (state === null && s.name in this.states) {
                        tempState = this.states[s.name];
                    }

                    if (tempState !== null && "state" in s) {
                        let regex = new RegExp(s.state);

                        if (!regex.test(tempState)) {
                            continue;
                        }
                    }

                    choosedSequences.push(s);
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

                                for (const s of this.character.sequences) {
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
            animate: function (timestamp) {
                requestAnimationFrame(this.animate);

                if (this.character !== null) {
                    function _random(min, max) {
                        min = Math.ceil(min);
                        max = Math.floor(max);

                        return Math.floor(Math.random() * (max - min)) + min;
                    }

                    const deltaTime = (timestamp - this.elapsed) / 1000;
                    let isAnimating = false;
                    let isDeforming = false;
                    let animationData = null;

                    if (this.sequenceQueue.length > 0 && this.sequenceQueue[0].length > 0) {
                        idleTime = 0.0;
                    } else {
                        idleTime += deltaTime;

                        if (!this.isLoading) {
                            activateTime += deltaTime;
                        }

                        if (this.sequenceQueue.length == 0) {
                            if (activateTime >= activateThreshold) {
                                //if (this.recentImages.length > 0) {
                                //    this.isBlinded = true;
                                //}
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

                                    this.talk(document.user.id, document.tokens.filter((x) => x.indexOf(this.character.name) === -1));
                                }

                                idleTime = activateTime = 0.0;
                            } else if (idleTime >= blinkThreshold || animationData === null) {
                                this.sequenceQueue.push(this.prepare(this.character.sequences.filter((x) => x.name === "Idle")));
                                idleTime = 0.0;
                            }
                        }
                    }

                    if (this.sequenceQueue.length > 0) {
                        const sequence = this.sequenceQueue[0];

                        if (sequence.length > 0) {
                            if (sequence[0].type == "Animation") {
                                sequence.shift();
                            } else if (sequence[0].type == "Message" && this.message === null && !isAnimating && !isDeforming) {
                                this.message = { time: 0, duration: sequence[0].duration, type: { elapsed: -1, speed: sequence[0].speed, reverse: false, buffer: "", count: 0 }, text: sequence[0].text };
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
                        } else if (this.message === null && !isAnimating && !isDeforming) {
                            this.sequenceQueue.shift();
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
                }

                this.elapsed = timestamp;
            }
        },
        updated: function () {
            //let container = this.$refs.container;

            this.insetTop = this.$refs.indicator.getBoundingClientRect().height;
            this.insetBottom = this.$refs.ticker.getBoundingClientRect().height;

            //this.$refs.ticker.style.width = document.body.querySelector("#input .columns>.column .control:nth-last-of-type(1) .level:nth-last-of-type(1) form").getBoundingClientRect().width + 'px';

            //document.body.querySelector("#heading>.columns>.column>.columns:first-child>.column>.columns:last-child .level:first-child .level-item .field .ticker").style.width = "100%";
            /*this.$refs.ticker.style.width = document.body.querySelector("#input .columns>.column .control:nth-last-of-type(1) .level:nth-last-of-type(1) form").getBoundingClientRect().width + 'px';
            */
            for (const clip of document.body.querySelectorAll("#input>.columns:last-of-type>.column>.control .clip")) {
                let width = 0;

                for (const element of clip.querySelectorAll(":scope .ticker-wrap .ticker .item")) {
                    width += element.getBoundingClientRect().width;
                }

                if (width > 0) {
                    this.tickerWidth = Math.min(width / 2, document.body.querySelector("#input>.columns:last-of-type>.column>.control .level").getBoundingClientRect().width);
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
            const botStorageItem = localStorage.getItem("bot");
            const credentialStorageItem = localStorage.getItem("credential");
            let credential = null;
            let characters = [{ path: "/assets/milch.json", probability: 1.0 }];

            if (botStorageItem) {
                try {
                    const bot = JSON.parse(botStorageItem);

                    if (bot !== null) {
                        this.isMuted = bot.mute;
                    }
                } catch (e) {
                    localStorage.removeItem("bot");
                }
            }

            if (credentialStorageItem) {
                try {
                    credential = JSON.parse(credentialStorageItem);
                } catch (e) {
                    localStorage.removeItem("credential");
                }
            }

            //this.$refs.three.after(stats.domElement);

            this.animate();

            this.insetTop = this.$refs.indicator.getBoundingClientRect().height;
            this.insetBottom = this.$refs.ticker.getBoundingClientRect().height;

            this.map = new Microsoft.Maps.Map(this.$refs.map, {
                mapTypeId: Microsoft.Maps.MapTypeId.grayscale
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
                    self.user = user;
                    self.update();

                    database.ref(databaseRoot + "/users/" + user.uid + "/stars").on("value", snapshot => {
                        const count = snapshot.val();

                        if (count === null) {
                            self.stars = 0;
                        } else {
                            self.stars = count;
                        }
                    });
                    database.ref(databaseRoot + "/users/" + user.uid).orderByChild("dictionary/words/timestamp").limitToLast(10).on("value", snapshot => {
                        if (snapshot.exists()) {
                            const words = snapshot.val();
                            let tempWords = [];
                            let index = 0;

                            for (const word in words) {
                                tempWords.push({ name: word, timestamp: words[word].timestamp });
                            }

                            for (const obj of self.prepare(self.character.sequences.filter((x) => x.name === "Alert"), 10)) {
                                if (obj.type === "Message") {
                                    self.recentWords.splice(index, 0, { name: obj.text, image: self.character.image });
                                    index++;
                                }
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
                                    if (self.recentWords[removeIndex].timestamp < word.timestamp) {
                                        if (word.name in self.wordDictionary) {
                                            delete self.wordDictionary[word.name];
                                        }

                                        Object.keys(self.reverseWordDictionary).forEach((key) => {
                                            if (self.reverseWordDictionary[key].words.some((x) => x === word.name)) {
                                                delete self.reverseWordDictionary[key];
                                            }
                                        });
                                    }

                                    self.recentWords.splice(removeIndex, 1);
                                } else {
                                    if (word.name in self.wordDictionary) {
                                        delete self.wordDictionary[word.name];
                                    }

                                    Object.keys(self.reverseWordDictionary).forEach((key) => {
                                        if (self.reverseWordDictionary[key].words.some((x) => x === word.name)) {
                                            delete self.reverseWordDictionary[key];
                                        }
                                    });
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
                    database.ref(databaseRoot + "/users/" + self.user.uid + "/stars").off("value");
                    database.ref(databaseRoot + "/users/" + self.user.uid).off("value");

                    self.user = null;
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
        },
        unmounted: function () {
            if (typeof this.tickIntervalID === "number") {
                clearInterval(this.tickIntervalID);
            }

            if (vrmModel !== null) {
                scene.remove(vrmModel.scene);
                vrmModel = null;
            }
        }
    }).mount("#app");

    window.addEventListener("resize", event => {
        //let container = app.$refs.container;

        app.insetTop = app.$refs.indicator.getBoundingClientRect().height;
        app.insetBottom = app.$refs.ticker.getBoundingClientRect().height;

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
    });
    window.addEventListener("click", event => {
    });
    window.addEventListener("dblclick", event => {
        if (raycaster.intersectObjects(scene.children, true).length > 0) {
            app.talk(app.user.uid);
            activateTime = 0.0;
        }
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
            app.talk(app.user.uid);
            activateTime = 0.0;
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