import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getDatabase, get, push, runTransaction, query, ref as databaseRef, child, orderByChild, startAt, limitToFirst, limitToLast } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";
import { getStorage, ref as storageRef, getDownloadURL, getMetadata, uploadBytesResumable } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-storage.js";
import { initializeAnalytics } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-analytics.js";

const background = { updated: 0, timeout: 60 * 1000, preloading: false, color: null, blocks: [], index: 0, queue: [], particles: [], cache: [] };
const tracker = { active: false, touching: false, edge: true, position: { x: 0, y: 0 }, movement: { x: 0, y: 0 }, velocity: { x: 0, y: 0 }, timestamp: 0 };
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
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const storage = getStorage(app);

initializeAnalytics(app);

class APNG {
  constructor() {
    this.PNG_SIGNATURE_BYTES = new Uint8Array([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
    this.crc32Table = new Uint32Array(256);

    for (let i = 0; i < 256; i++) {
      let c = i;

      for (let k = 0; k < 8; k++) {
        c = (c & 1) ? 0xEDB88320 ^ (c >>> 1) : c >>> 1;
      }

      this.crc32Table[i] = c;
    }
  }

  get signature() {
    return this.PNG_SIGNATURE_BYTES;
  }

  load(blob) {
    return new Promise(async (resolve1, reject1) => {
      const self = this;
      const bytes = new Uint8Array(await blob.arrayBuffer());

      if (this.signature.every((element, index) => element === bytes[index])) {
        let isAnimatable = false;

        this.parseChunks(bytes, (type) => {
          if (type === "acTL") {
            isAnimatable = true;

            return false;
          }

          return true;
        });

        if (isAnimatable) {
          const preDataParts = [];
          const postDataParts = [];
          let headerDataBytes = null;
          let frame = null;
          const animation = { frames: [] };
          const frames = [];

          this.parseChunks(bytes, (type, bytes, offset, length) => {
            switch (type) {
              case "IHDR":
                headerDataBytes = bytes.subarray(offset + 8, offset + 8 + length);
                animation.width = self.readDWord(bytes, offset + 8);
                animation.height = self.readDWord(bytes, offset + 12);

                break;

              case "acTL":
                animation.iterations = self.readDWord(bytes, offset + 8 + 4);

                break;

              case "fcTL":
                if (frame) {
                  animation.frames.push(frame);
                }

                frame = {};
                frame.width = self.readDWord(bytes, offset + 8 + 4);
                frame.height = self.readDWord(bytes, offset + 8 + 8);
                frame.left = self.readDWord(bytes, offset + 8 + 12);
                frame.top = self.readDWord(bytes, offset + 8 + 16);

                const delayN = self.readWord(bytes, offset + 8 + 20);
                let delayD = self.readWord(bytes, offset + 8 + 22);

                if (delayD === 0) {
                  delayD = 100;
                }

                frame.delay = delayN / delayD;

                if (frame.delay <= 0.01) {
                  frame.delay = 0.1;
                }

                animation.playTime += frame.delay;
                frame.disposeOp = bytes[offset + 8 + 24];
                frame.blendOp = bytes[offset + 8 + 25];
                frame.dataParts = [];

                break;

              case "fdAT":
                if (frame) {
                  frame.dataParts.push(bytes.subarray(offset + 8 + 4, offset + 8 + length));
                }

                break;

              case "IDAT":
                if (frame) {
                  frame.dataParts.push(bytes.subarray(offset + 8, offset + 8 + length));
                }

                break;

              case "IEND":
                postDataParts.push(self.subBuffer(bytes, offset, 12 + length));

                break;

              default:
                preDataParts.push(self.subBuffer(bytes, offset, 12 + length));
            }
          });

          if (frame !== null) {
            animation.frames.push(frame);
          }

          if (animation.frames.length > 0) {
            const preBlob = new Blob(preDataParts);
            const postBlob = new Blob(postDataParts);
            const canvas = document.createElement("canvas");

            canvas.width = animation.width;
            canvas.height = animation.height;

            const ctx = canvas.getContext("2d", { willReadFrequently: true });

            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = "high";
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (const frame of animation.frames) {
              const chunks = [];
              let imageData;

              chunks.push(this.signature);
              headerDataBytes.set(this.buildDWordArray(frame.width), 0);
              headerDataBytes.set(this.buildDWordArray(frame.height), 4);
              chunks.push(this.buildChunkBytes("IHDR", headerDataBytes));
              chunks.push(preBlob);

              for (let j = 0; j < frame.dataParts.length; j++) {
                chunks.push(this.buildChunkBytes("IDAT", frame.dataParts[j]));
              }

              chunks.push(postBlob);

              if (frame.disposeOp === 2) {
                imageData = ctx.getImageData(frame.left, frame.top, frame.width, frame.height);
              } else {
                imageData = null;
              }

              if (frame.blendOp === 0) {
                ctx.clearRect(frame.left, frame.top, frame.width, frame.height);
              }

              try {
                frames.push({
                  delay: frame.delay, blob: await new Promise(async (resolve2, reject2) => {
                    const reader = new FileReader();

                    reader.onload = () => {
                      const image = new Image();

                      image.onload = () => {
                        ctx.drawImage(image, frame.left, frame.top, frame.width, frame.height);
                        ctx.canvas.toBlob(async (blob) => {
                          resolve2(blob);
                        }, "image/png");
                      };
                      image.onerror = (error) => {
                        reject2(error);
                      };
                      image.crossOrigin = "anonymous";
                      image.src = reader.result;
                    };
                    reader.onerror = () => {
                      reject2(reader.error);
                    };
                    reader.readAsDataURL(new Blob(chunks, { "type": "image/png" }));
                  })
                });
              } catch (error) {
                ctx.canvas.width = ctx.canvas.height = 0;

                reject1(error);

                return;
              } finally {
                delete frame.dataParts;
              }

              if (frame.disposeOp === 1) {
                ctx.clearRect(frame.left, frame.top, frame.width, frame.height);
              } else if (imageData !== null) {
                ctx.putImageData(imageData, frame.left, frame.top);
              }
            }

            ctx.canvas.width = ctx.canvas.height = 0;

            resolve1([frames, animation.iterations]);

            return;
          }
        }
      }

      resolve1(null);
    });
  }

  parseChunks(bytes, callback) {
    let offset = 8;
    let type;
    let done;

    do {
      const length = this.readDWord(bytes, offset);

      type = this.readString(bytes, offset + 4, 4);
      done = callback(type, bytes, offset, length);
      offset += 12 + length;
    } while (done !== false && type != "IEND" && offset < bytes.length);
  }

  readDWord(bytes, offset) {
    let x = 0;

    // Force the most-significant byte to unsigned.
    x += ((bytes[0 + offset] << 24) >>> 0);

    for (let i = 1; i < 4; i++) {
      x += ((bytes[i + offset] << ((3 - i) * 8)));
    }

    return x;
  }

  readWord(bytes, offset) {
    let x = 0;

    for (let i = 0; i < 2; i++) {
      x += (bytes[i + offset] << ((1 - i) * 8));
    }

    return x;
  }

  subBuffer(bytes, start, length) {
    const a = new Uint8Array(length);

    a.set(bytes.subarray(start, start + length));

    return a;
  }

  readString(bytes, offset, length) {
    const chars = Array.prototype.slice.call(bytes.subarray(offset, offset + length));

    return String.fromCharCode.apply(String, chars);
  }

  buildDWordArray(x) {
    return [(x >>> 24) & 0xff, (x >>> 16) & 0xff, (x >>> 8) & 0xff, x & 0xff];
  }

  buildStringArray(x) {
    const buffer = [];

    for (let i = 0; i < x.length; i++) {
      buffer.push(x.charCodeAt(i));
    }

    return buffer;
  }

  buildChunkBytes(type, dataBytes) {
    const crcLen = type.length + dataBytes.length;
    const bytes = new Uint8Array(new ArrayBuffer(crcLen + 8));

    bytes.set(this.buildDWordArray(dataBytes.length), 0);
    bytes.set(this.buildStringArray(type), 4);
    bytes.set(dataBytes, 8);

    const crc = this.crc32(bytes, 4, crcLen);

    bytes.set(this.buildDWordArray(crc), crcLen + 4);

    return bytes;
  }

  crc32(bytes, start, length) {
    start = start || 0;
    length = length || (bytes.length - start);

    let crc = -1;

    for (let i = start, l = start + length; i < l; i++) {
      crc = (crc >>> 8) ^ this.crc32Table[(crc ^ bytes[i]) & 0xFF];
    }

    return crc ^ (-1);
  }
}

function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min)) + min;
}

function shuffle(array) {
  const a = [].concat(array);
  let n = array.length;

  while (n > 1) {
    const k = random(0, n);

    n--;

    const temp = a[n];

    a[n] = a[k];
    a[k] = temp;
  }

  return a;
}

function shake(element) {
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
}

async function upload(files) {
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

  const progress = document.createElement("div");
  const bar = document.createElement("div");
  const completed = [];
  let animation = null;

  progress.className = "progress";
  bar.className = "bar animating";
  bar.style.width = "0%";

  try {
    const response = await fetch(window.devicePixelRatio > 1 ? `images/Stripes@${window.devicePixelRatio}x.png` : "images/Stripes.png");

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

      if (dataURL !== null) {
        bar.style.backgroundImage = `url('${dataURL}')`;
      }
    }
  } catch (error) {
    console.error(error);
  }

  progress.appendChild(bar);
  document.body.querySelector("#app").appendChild(progress);

  for (const file of files) {
    if (file.type.startsWith("image/")) {
      const uploadTask = uploadBytesResumable(storageRef(storage, `images/${generateUuid()}`), file, {
        contentType: file.type
      });

      try {
        const path = await new Promise(function (resolve, reject) {
          uploadTask.on("state_changed", (snapshot) => {
            animation = bar.animate([
              {
                width: `${Math.floor((snapshot.bytesTransferred / snapshot.totalBytes / files.length + completed.length / files.length) * 100)}%`
              }
            ], {
              delay: 0,
              fill: "forwards",
              duration: 500,
              iterations: 1,
              easing: "linear",
              composite: "replace"
            }).onfinish = () => {
              bar.style.width = `${Math.floor((completed.length + 1) / files.length * 100)}%`;
            };
          }, (error) => {
            reject(error);
          }, () => {
            resolve(uploadTask.snapshot.ref.fullPath);
          });
        });

        await runTransaction(databaseRef(database, `images/${push(child(databaseRef(database), "images")).key}`), current => {
          return { path: path, type: file.type, random: Math.random(), timestamp: Math.floor(new Date() / 1000) };
        });

        completed.push(path);
      } catch (error) {
        console.error(error);

        animation = null;

        break;
      }
    }
  }

  if (animation === null || animation.playState === "finished") {
    bar.animate([
      {
        opacity: 0
      }
    ], {
      delay: 0,
      fill: "forwards",
      duration: 500,
      iterations: 1,
      easing: "ease-in"
    }).onfinish = () => {
      progress.remove();
    };
  } else {
    bar.animate([
      {
        width: "100%"
      }
    ], {
      delay: 0,
      fill: "forwards",
      duration: 500,
      iterations: 1,
      easing: "ease-in",
      composite: "replace"
    }).onfinish = () => {
      bar.style.width = "100%";
      bar.animate([
        {
          opacity: 0
        }
      ], {
        delay: 0,
        fill: "forwards",
        duration: 500,
        iterations: 1,
        easing: "ease-in"
      }).onfinish = () => {
        progress.remove();
      };
    };
  }

  return [completed, completed.length === files.length];
}

window.select = (event) => {
  const target = (event.currentTarget || event.target);

  if ("dataset" in background) {
    if ("type" in target.dataset) {
      for (const element of document.body.querySelectorAll("div.sidebar>.level>.level-item:first-child>.level>.level-item .button")) {
        if ("type" in element.dataset) {
          if (element.dataset.type === target.dataset.type) {
            const index = background.dataset.findIndex(x => x.type === target.dataset.type);

            if (index >= 0) {
              background.index = index;
              background.updated = -background.timeout;
              element.classList.add("is-selected");
            } else {
              element.classList.remove("is-selected");

              shake(target.querySelector(":scope .wrap"));
            }
          } else {
            element.classList.remove("is-selected");
          }
        }
      }
    } else {
      const index = background.dataset.findIndex(x => "type" in x === false);

      if (index >= 0) {
        background.index = index;
        background.updated = -background.timeout;;
      } else {
        shake(target.querySelector(":scope .wrap"));
      }

      for (const element of document.body.querySelectorAll("div.sidebar>.level>.level-item:first-child>.level>.level-item .button")) {
        if ("type" in element.dataset) {
          element.classList.remove("is-selected");
        }
      }
    }
  } else {
    shake(target.querySelector(":scope .wrap"));
  }
};
window.upload = async (event) => {
  const target = (event.currentTarget || event.target);

  if ("files" in target) {
    target.disabled = true;

    const [stack, completed] = await upload(target.files);

    if (stack.length > 0) {
      background.queue.splice(0);

      do {
        background.queue.unshift({ index: 0, data: { color: "#ffffff", frames: [{ delay: 0, source: `gs://milchchan.appspot.com/${stack.pop()}` }] } });
      } while (stack.length > 0);

      background.updated = -background.timeout;;
    }

    if (!completed) {
      shake(target.parentElement);
    }

    target.disabled = false;
  }
};

window.addEventListener("load", async event => {
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

  const logo = document.body.querySelector("div.sidebar>.level>.level-item:first-child>.level>.level-item:first-child .button .icon figure");
  const wall = document.body.querySelector("#app>.container>.wrap>.frame>.wall");
  const stats = document.createElement("div");
  const canvas = document.createElement("canvas");
  const rect = wall.getBoundingClientRect();

  wall.addEventListener("dragenter", e => {
    (e.currentTarget || e.target).classList.add("dragging");
  });
  wall.addEventListener("dragover", e => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "copy";
  }, false);
  wall.addEventListener("drop", async e => {
    e.stopPropagation();
    e.preventDefault();

    const target = (e.currentTarget || e.target);
    const input = document.body.querySelector("div.sidebar>.level>.level-item>.level>.level-item label.button>input");

    target.classList.remove("dragging");
    input.disabled = true;

    const [stack, completed] = await upload(e.dataTransfer.files);

    if (stack.length > 0) {
      background.queue.splice(0);

      do {
        background.queue.unshift({ index: 0, data: { color: "#ffffff", frames: [{ delay: 0, source: `gs://milchchan.appspot.com/${stack.pop()}` }] } });
      } while (stack.length > 0);

      background.updated = -background.timeout;;
    }

    if (!completed) {
      shake(target.parentElement);
    }

    input.disabled = false;
  }, false);
  wall.addEventListener("dragleave", e => {
    (e.currentTarget || e.target).classList.remove("dragging");
  });

  stats.id = "stats";

  if (decodeURIComponent(window.location.hash.substring(1)) === "debug") {
    stats.className = "is-active";
  }

  canvas["backBuffer"] = document.createElement("canvas");
  canvas.width = rect.width * window.devicePixelRatio;
  canvas.height = rect.height * window.devicePixelRatio;
  canvas.style.width = `${rect.width}px`;
  canvas.style.height = `${rect.height}px`;
  canvas.style.backgroundColor = "transparent";

  wall.appendChild(canvas);

  const animation = logo.animate([
    {
      transform: "rotate(0deg)"
    },
    {
      transform: "rotate(360deg)"
    }
  ], {
    delay: 0,
    fill: "forwards",
    duration: 1000,
    iterations: Infinity,
    easing: "linear"
  });

  try {
    const response = await fetch(encodeURI("feed.json"), {
      mode: "cors",
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });

    if (response.ok) {
      background["dataset"] = await response.json();
    } else {
      throw new Error(response.statusText);
    }

    for (const source of ["images/Star1-Light.svg", "images/Star1-Dark.svg", "images/Star2-Light.svg", "images/Star2-Dark.svg", "images/Star3-Light.svg", "images/Star3-Dark.svg", "images/Star4-Light.svg", "images/Star4-Dark.svg"]) {
      background.cache.push(await new Promise((resolve, reject) => {
        const image = new Image();

        image.onload = () => {
          resolve(image);
        };
        image.onerror = (error) => {
          reject(error);
        };
        image.src = source
      }));
    }
  } catch (error) {
    console.error(error);
  }

  if (background["dataset"] !== null) {
    async function download(url, handler = null) {
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

            if (handler !== null) {
              handler(receivedLength / contentLength);
            }
          }

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
      } catch (error) {
        console.error(error);
      }

      return null;
    }

    for (const element of document.body.querySelectorAll("div.sidebar>.level>.level-item>.level>.level-item .button .wrap svg g>path")) {
      element.style.animationPlayState = "running";
    }

    logo.animate([
      {
        transform: "rotate(360deg)"
      }
    ], {
      delay: 0,
      fill: "forwards",
      duration: 1000 - animation.currentTime % 1000,
      iterations: 1,
      easing: "linear"
    });
    animation.cancel();

    const cache = {};
    const animationQueue = [];
    let previousTime = performance.now();
    const fps = { time: previousTime, frames: 0, target: document.createElement("span") };

    fps.target.className = "has-text-weight-bold";
    fps.target.innerText = "0";
    fps.target.style.opacity = "0";

    stats.appendChild(fps.target);
    document.body.querySelector("#app>.container>.wrap>.frame").appendChild(stats);

    fps.target.animate([
      {
        opacity: "1"
      }
    ], {
      fill: "forwards",
      duration: 500,
      iterations: 1,
      easing: "ease-out"
    });

    async function render(timestamp) {
      if (timestamp > previousTime) {
        const deltaTime = (timestamp - previousTime) / 1000;

        previousTime = timestamp;

        if (timestamp - background.updated >= background.timeout) {
          for (const block of background.blocks) {
            for (let i = block.inlines.length - 1; i >= 0; i--) {
              if (block.inlines[i].running) {
                block.inlines[i].type.reverse = true;
              }
            }
          }

          background.updated = timestamp;
        }

        if (!background.preloading && !background.blocks.some(x => x.inlines.some(y => y.running || y.type.elapsed >= 0 || y.type.reverse)) && background.dataset.length > 0 && background.dataset[background.index].texts.length > 0) {
          background.preloading = true;
          background.image = null;
          background.blocks.splice(0);
          tracker.movement.x = tracker.movement.y = 0;
          animationQueue.splice(0);

          for (const item of background.dataset) {
            for (let i = item.texts.length - 1; i >= 0; i--) {
              if (Array.isArray(item.texts[i])) {
                item.texts.splice(i, 1);
              }
            }

            if ("images" in item) {
              for (let i = item.images.length - 1; i >= 0; i--) {
                if (item.images[i].frames.some(x => x.source.startsWith("gs:"))) {
                  item.images.splice(i, 1);
                }
              }
            }
          }

          try {
            const snapshot = await get(query(databaseRef(database, "bot/likes"), orderByChild("timestamp"), limitToLast(100)));

            if (snapshot.exists()) {
              const likes = snapshot.val();

              for (const key in likes) {
                if (Array.isArray(likes[key].text)) {
                  for (const item of background.dataset) {
                    if ("type" in item === false) {
                      item.texts.push(likes[key].text);
                    }
                  }
                }
              }
            }
          } catch (error) {
            console.error(error);
          }

          try {
            const snapshot = await get(query(databaseRef(database, "images"), orderByChild("random"), startAt(Math.random()), limitToFirst(10)));

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
                const y = [].concat(x);
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

              const path = choice(softmax(images, x => x.probability, (x, y) => x.probability = y), x => x.probability).path;
              const metadata = await getMetadata(storageRef(storage, path));

              if (metadata.contentType.startsWith("image/")) {
                for (const item of background.dataset) {
                  if ("type" in item === false && "images" in item) {
                    item.images.push({ color: "#ffffff", frames: [{ delay: 0, source: `gs://milchchan.appspot.com/${path}` }] });
                  }
                }
              }
            }
          } catch (error) {
            console.error(error);
          }

          if ("images" in background.dataset[background.index] && background.dataset[background.index].images.length > 0) {
            if (background.queue.some(x => x.index !== background.index)) {
              background.queue.splice(0);
            }

            if (background.queue.length === 0) {
              const boundary = background.dataset[background.index].images.reduce((x, y) => y.frames.some(z => z.source.startsWith("gs:")) ? x : x + 1, 0);

              for (const image of background.dataset[background.index].images.length > boundary ? [background.dataset[background.index].images[random(0, boundary)], background.dataset[background.index].images[random(boundary, background.dataset[background.index].images.length)]] : shuffle(background.dataset[background.index].images)) {
                background.queue.push({ index: background.index, data: image });
              }
            }

            const data = background.queue.shift().data;
            const blind = document.createElement("div");
            const progress = document.createElement("div");
            const bar = document.createElement("div");
            const timeout = 60 * 60;
            let index = 0;

            blind.className = "blind";
            blind.style.transform = "translate3d(0, 100%, 0)";

            try {
              const response = await fetch(window.devicePixelRatio > 1 ? `images/Background@${window.devicePixelRatio}x.png` : "images/Background.png");

              if (response.ok) {
                const blob = await response.blob();
                const dataURL = await new Promise(async (resolve, reject) => {
                  const reader = new FileReader();

                  reader.onload = () => {
                    resolve(reader.result);
                  };
                  reader.onerror = () => {
                    reject(reader.error);
                  };
                  reader.readAsDataURL(blob);
                });
                blind.style.backgroundImage = `url('${dataURL}')`;
              }
            } catch (error) {
              console.error(error);
            }

            document.body.querySelector("#app>.container>.wrap>.frame>.wall").after(blind);

            await new Promise(async (resolve) => {
              blind.animate([
                {
                  transform: "translate3d(0, 0%, 0)"
                }
              ], {
                delay: 0,
                fill: "forwards",
                duration: 500,
                iterations: 1,
                easing: "ease-out"
              }).onfinish = () => {
                blind.style.transform = "translate3d(0, 0%, 0)";

                resolve();
              };
            });

            progress.className = "progress";
            bar.className = "bar animating";
            bar.style.width = "0%";

            try {
              const response = await fetch(window.devicePixelRatio > 1 ? `images/Stripes@${window.devicePixelRatio}x.png` : "images/Stripes.png");

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

                if (dataURL !== null) {
                  bar.style.backgroundImage = `url('${dataURL}')`;
                }
              }
            } catch (error) {
              console.error(error);
            }

            progress.appendChild(bar);
            document.body.querySelector("#app").appendChild(progress);

            if ("color" in data) {
              background.color = data.color;
            } else {
              background.color = null;
            }

            for (const frame of data.frames) {
              const timestamp = Math.floor(new Date() / 1000);

              if (frame.source in cache === false || timestamp - cache[frame.source].timestamp >= timeout) {
                const blob = await download(frame.source.startsWith("gs:") ? await getDownloadURL(storageRef(storage, frame.source)) : frame.source, (rate) => {
                  if (index < data.frames.length - 1 || rate < 1) {
                    bar.animate([
                      {
                        width: `${Math.floor((rate / data.frames.length + index / data.frames.length) * 100)}%`
                      }
                    ], {
                      delay: 0,
                      fill: "forwards",
                      duration: 500,
                      iterations: 1,
                      easing: "linear",
                      composite: "replace"
                    }).onfinish = () => {
                      bar.style.width = `${Math.floor((index + 1) / data.frames.length * 100)}%`;
                    };
                  } else {
                    bar.animate([
                      {
                        width: `${Math.floor((index + 1) / data.frames.length * 100)}%`
                      }
                    ], {
                      delay: 0,
                      fill: "forwards",
                      duration: 500,
                      iterations: 1,
                      easing: "ease-in",
                      composite: "replace"
                    }).onfinish = () => {
                      bar.style.width = `${Math.floor((index + 1) / data.frames.length * 100)}%`;
                      bar.animate([
                        {
                          opacity: 0
                        }
                      ], {
                        delay: 0,
                        fill: "forwards",
                        duration: 500,
                        iterations: 1,
                        easing: "ease-in"
                      }).onfinish = () => {
                        progress.remove();
                      };
                    };
                  }
                });

                if (blob === null) {
                  if (index === data.frames.length - 1) {
                    bar.animate([
                      {
                        opacity: 0
                      }
                    ], {
                      delay: 0,
                      fill: "forwards",
                      duration: 500,
                      iterations: 1,
                      easing: "ease-in",
                      composite: "replace"
                    }).onfinish = () => {
                      progress.remove();
                    };
                  }
                } else {
                  try {
                    const animation = ["image/apng", "image/png"].includes(blob.type) ? await new APNG().load(blob) : null;

                    if (animation === null) {
                      const image = await new Promise(async (resolve, reject) => {
                        const reader = new FileReader();

                        reader.onload = () => {
                          const image = new Image();

                          image.onload = () => {
                            resolve(image);
                          };
                          image.onerror = (error) => {
                            reject(error);
                          };
                          image.crossOrigin = "anonymous";
                          image.src = reader.result;
                        };
                        reader.onerror = () => {
                          reject(reader.error);
                        };
                        reader.readAsDataURL(blob);
                      });

                      animationQueue.push(Object.assign({ time: 0, image: image }, frame));
                      cache[frame.source] = { image: image, timestamp: timestamp };
                    } else {
                      const frames = [];

                      for (const frame of animation[0]) {
                        frames.push({
                          delay: frame.delay, image: await new Promise(async (resolve, reject) => {
                            const reader = new FileReader();

                            reader.onload = () => {
                              const image = new Image();

                              image.onload = () => {
                                resolve(image);
                              };
                              image.onerror = (error) => {
                                reject(error);
                              };
                              image.crossOrigin = "anonymous";
                              image.src = reader.result;
                            };
                            reader.onerror = () => {
                              reject(reader.error);
                            };
                            reader.readAsDataURL(frame.blob);
                          })
                        });
                      }

                      if (frames.length > 0) {
                        for (let i = 1; i < animation[1]; i++) {
                          for (let j = 0; j < frames.length; j++) {
                            frames.push(frames[j]);
                          }
                        }

                        frames[frames.length - 1].delay += frame.delay;

                        for (const frame of frames) {
                          animationQueue.push(Object.assign({ time: 0 }, frame));
                        }

                        cache[frame.source] = { frames: frames, timestamp: timestamp };
                      }
                    }
                  } catch (error) {
                    console.error(error);
                  }
                }
              } else {
                if (index < data.frames.length - 1) {
                  bar.animate([
                    {
                      width: `${Math.floor((index + 1) / data.frames.length * 100)}%`
                    }
                  ], {
                    delay: 0,
                    fill: "forwards",
                    duration: 500,
                    iterations: 1,
                    easing: "ease-in",
                    composite: "replace"
                  }).onfinish = () => {
                    bar.style.width = `${Math.floor((index + 1) / data.frames.length * 100)}%`;
                  };
                } else {
                  bar.animate([
                    {
                      width: `${Math.floor((index + 1) / data.frames.length * 100)}%`
                    }
                  ], {
                    delay: 0,
                    fill: "forwards",
                    duration: 500,
                    iterations: 1,
                    easing: "ease-in",
                    composite: "replace"
                  }).onfinish = () => {
                    bar.style.width = `${Math.floor((index + 1) / data.frames.length * 100)}%`;
                    bar.animate([
                      {
                        opacity: 0
                      }
                    ], {
                      delay: 0,
                      fill: "forwards",
                      duration: 500,
                      iterations: 1,
                      easing: "ease-in"
                    }).onfinish = () => {
                      progress.remove();
                    };
                  };
                }

                if ("frames" in cache[frame.source]) {
                  for (const data of cache[frame.source].frames) {
                    animationQueue.push(Object.assign({ time: 0 }, data));
                  }
                } else {
                  animationQueue.push(Object.assign({ time: 0, image: cache[frame.source].image }, frame));
                }
              }

              index++;
            }

            for (let i = animationQueue.length - 2; i >= 0; i--) {
              animationQueue.push(animationQueue[i]);
            }

            blind.animate([
              {
                transform: "translate3d(0, -100%, 0)"
              }
            ], {
              delay: 0,
              fill: "forwards",
              duration: 500,
              iterations: 1,
              easing: "ease-out",
              composite: "replace"
            }).onfinish = () => {
              blind.remove();
            };
          } else {
            background.color = null;
          }

          background.preloading = false;

          const length = random(8, 16);
          let start = background.dataset[background.index].texts.length - length;
          let samples;

          if (start >= 0) {
            start = random(0, start);
            samples = background.dataset[background.index].texts.slice(start, start + length);
          } else {
            samples = background.dataset[background.index].texts;
          }

          for (const sample of samples) {
            let text;
            const attributes = [];
            const source = [];
            const letters = [];

            if (typeof (sample) === "string") {
              text = sample.replace(/\r?\n/g, "");
              source.push(text);
            } else {
              text = Object.keys(sample).sort((x, y) => x - y).reduce((x, y) => {
                if (typeof (sample[y]) === "string") {
                  const s = sample[y].replace(/\r?\n/g, "");

                  x.text += s;

                  if (x.source.length > 0 && typeof (x.source[x.source.length - 1]) === "string") {
                    x.source[x.source.length - 1] += s;
                  } else {
                    x.source.push(s);
                  }
                } else if (Array.isArray(sample[y])) {
                  const s = sample[y].reduce((a, b) => a + (typeof (b) === "string" ? b : b.name).replace(/\r?\n/g, ""), "");

                  x.attributes.push({ start: x.text.length, end: x.text.length + s.length });
                  x.text += s;
                  x.source.push({ name: s });
                } else {
                  const text = sample[y].name.replace(/\r?\n/g, "");

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

            background.blocks.push({
              height: 100 / samples.length,
              colors: { main: window.getComputedStyle(document.documentElement).getPropertyValue("--background-color"), accent: window.getComputedStyle(document.documentElement).getPropertyValue("--background-color") },
              inlines: [
                { running: true, time: 0, duration: null, type: { elapsed: -1, speed: 30, reverse: false, buffer: "", count: 0 }, text: text, attributes: attributes, characters: [], source: source, letters: letters }
              ],
              elapsed: 0,
            });
          }
        }

        for (const block of background.blocks) {
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

                if (inline.duration !== null && inline.time >= inline.duration) {
                  inline.type.reverse = true;
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

                if (charArray.length > 0) {
                  for (let i = 0; i < inline.type.count; i++) {
                    if (inline.text.charAt(i) === "\n") {
                      randomBuffer += "\n";
                    } else {
                      randomBuffer += charArray[~~random(0, charArray.length)];
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

        const backCanvas = canvas.backBuffer;

        backCanvas.width = canvas.width;
        backCanvas.height = canvas.height;

        const backContext = backCanvas.getContext("2d");
        const frontContext = canvas.getContext("2d");
        const margin = 16;
        const lineHeight = backCanvas.height / background.blocks.length;
        const fontSize = Math.floor(lineHeight / 2);
        const fontFamily = window.getComputedStyle(document.documentElement).getPropertyValue("--background-font-family");
        let index = 0;

        backContext.imageSmoothingEnabled = true;
        backContext.imageSmoothingQuality = "high";
        backContext.textAlign = "left";
        backContext.textBaseline = "middle";
        backContext.clearRect(0, 0, backCanvas.width, backCanvas.height);
        backContext.save();
        backContext.beginPath();

        for (const block of background.blocks) {
          for (const inline of block.inlines) {
            if (inline.running && inline.characters.length > 0) {
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
                      backContext.globalAlpha = 1.0;
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

        if (background.particles.length > 0) {
          backContext.save();

          for (let i = background.particles.length - 1; i >= 0; i--) {
            const particle = background.particles[i];

            if (particle.elapsed >= 0) {
              particle.elapsed += deltaTime;
            } else {
              particle.elapsed = deltaTime;
              particle["radius"] = Math.random() * 64;
              particle["degrees"] = Math.random() * 360;
              particle["duration"] = Math.random() * 2.5 + 0.5;
            }

            if (particle.elapsed >= particle.duration) {
              background.particles.pop();
            } else {
              const step = Math.sin(particle.elapsed / particle.duration * Math.PI);
              const scale = window.devicePixelRatio * step;

              backContext.save();
              backContext.scale(scale, scale);
              backContext.translate(-particle.image.width / 2 + Math.round(particle.x + Math.cos(Math.PI / 180 * particle.degrees) * particle.radius) * window.devicePixelRatio / scale, -particle.image.height / 2 + Math.round(particle.y + Math.sin(Math.PI / 180 * particle.degrees) * particle.radius) * window.devicePixelRatio / scale);
              backContext.globalAlpha = step;
              backContext.drawImage(particle.image, 0, 0, particle.image.width, particle.image.height, 0, 0, particle.image.width, particle.image.height);
              backContext.restore();
            }
          }
        }

        backContext.closePath();
        backContext.globalCompositeOperation = "source-atop";

        if (background.color === null) {
          backContext.fillStyle = window.getComputedStyle(document.documentElement).getPropertyValue("--background-color");
        } else {
          backContext.fillStyle = background.color;
        }

        backContext.fillRect(0, 0, backCanvas.width, backCanvas.height);

        if (!tracker.active && (tracker.velocity.x !== 0 || tracker.velocity.y !== 0)) {
          const decelerationRate = 10 * 96 / 1000;

          if (tracker.velocity.x > 1000) {
            tracker.velocity.x = 1000;
          } else if (tracker.velocity.x < -1000) {
            tracker.velocity.x = -1000;
          }

          if (tracker.velocity.y > 1000) {
            tracker.velocity.y = 1000;
          } else if (tracker.velocity.y < -1000) {
            tracker.velocity.y = -1000;
          }

          tracker.velocity.x -= tracker.velocity.x * decelerationRate * deltaTime;
          tracker.velocity.y -= tracker.velocity.y * decelerationRate * deltaTime;

          if (Math.abs(tracker.velocity.x) < 0.001) {
            tracker.velocity.x = 0;
          }

          if (Math.abs(tracker.velocity.y) < 0.001) {
            tracker.velocity.y = 0;
          }

          tracker.movement.x += tracker.velocity.x * deltaTime;
          tracker.movement.y += tracker.velocity.y * deltaTime;
        }

        if (animationQueue.length > 0) {
          let count = animationQueue.length;
          let frame = animationQueue[0];
          let delay = Math.max(frame.delay, 0.01);

          frame.time += deltaTime;

          while (frame.time >= delay) {
            const time = frame.time - delay;

            frame.time = 0;
            animationQueue.push(animationQueue.shift());
            frame = animationQueue[0];
            count--;

            if (count > 0) {
              frame.time += time;
            } else {
              break;
            }

            delay = Math.max(frame.delay, 0.01);
          }

          if (frame.image !== null) {
            const top = 0;
            const left = 0.5;
            const canvasAspect = backCanvas.width / backCanvas.height;
            const imageAspect = frame.image.width / frame.image.height;
            let sx, sy, sw, sh;

            if (canvasAspect > imageAspect) {
              const ratio = backCanvas.width / frame.image.width;

              sx = 0;
              sh = backCanvas.height / ratio;
              sy = Math.max(0, Math.min(frame.image.height - sh, (frame.image.height * ratio - backCanvas.height) / ratio * top - tracker.movement.y * window.devicePixelRatio / ratio));
              sw = frame.image.width;

              const insetTop = (frame.image.height * ratio - backCanvas.height) * top / window.devicePixelRatio;
              const insetBottom = (backCanvas.height - frame.image.height * ratio + (frame.image.height * ratio - backCanvas.height) * top) / window.devicePixelRatio;

              if (insetTop < tracker.movement.y) {
                if (tracker.active) {
                  tracker.edge = true;
                } else if (!tracker.edge) {
                  tracker.velocity.y *= -1;
                }

                tracker.movement.y = insetTop;
              } else if (insetBottom > tracker.movement.y) {
                if (tracker.active) {
                  tracker.edge = true;
                } else if (!tracker.edge) {
                  tracker.velocity.y *= -1;
                }

                tracker.movement.y = insetBottom;
              } else if (insetTop === tracker.movement.y || insetBottom === tracker.movement.y) {
                if (tracker.active) {
                  tracker.edge = true;
                }
              } else {
                tracker.edge = false;
              }
            } else {
              const ratio = backCanvas.height / frame.image.height;

              sw = backCanvas.width / ratio;
              sx = Math.max(0, Math.min(frame.image.width - sw, (frame.image.width * ratio - backCanvas.width) / ratio * left - tracker.movement.x * window.devicePixelRatio / ratio));
              sy = 0;
              sh = frame.image.height;

              const insetLeft = (frame.image.width * ratio - backCanvas.width) * left / window.devicePixelRatio;
              const insetRight = (backCanvas.width - frame.image.width * ratio + (frame.image.width * ratio - backCanvas.width) * left) / window.devicePixelRatio;

              if (insetLeft < tracker.movement.x) {
                if (tracker.active) {
                  tracker.edge = true;
                } else if (!tracker.edge) {
                  tracker.velocity.y *= -1;
                }

                tracker.movement.x = insetLeft;
              } else if (insetRight > tracker.movement.x) {
                if (tracker.active) {
                  tracker.edge = true;
                } else if (!tracker.edge) {
                  tracker.velocity.y *= -1;
                }

                tracker.movement.x = insetRight;
              } else if (insetLeft === tracker.movement.x || insetRight === tracker.movement.x) {
                if (tracker.active) {
                  tracker.edge = true;
                }
              } else {
                tracker.edge = false;
              }
            }

            backContext.drawImage(frame.image, sx, sy, sw, sh, 0, 0, backCanvas.width, backCanvas.height);
          }
        }

        backContext.restore();
        frontContext.clearRect(0, 0, backCanvas.width, backCanvas.height);
        frontContext.drawImage(backCanvas, 0, 0);

        backCanvas.width = backCanvas.height = 0;
      }

      fps.frames++;

      if (performance.now() - fps.time >= 1000) {
        fps.target.innerText = String(fps.frames);
        fps.time = performance.now();
        fps.frames = 0;
      }

      requestAnimationFrame(render);
    }

    requestAnimationFrame(render);
  }
});
window.addEventListener("resize", event => {
  const wall = document.body.querySelector("#app>.container>.wrap>.frame>.wall");
  const canvas = wall.querySelector(":scope>canvas");
  const rect = wall.getBoundingClientRect();

  canvas.width = rect.width * window.devicePixelRatio;
  canvas.height = rect.height * window.devicePixelRatio;
  canvas.style.width = `${rect.width}px`;
  canvas.style.height = `${rect.height}px`;
});
window.addEventListener("mousedown", event => {
  if (event.button === 0 && !tracker.touching) {
    const rect = document.body.querySelector("#app>.container>.wrap>.frame>.wall").getBoundingClientRect();
    const x = event.clientX - rect.x;
    const y = event.clientY - rect.y;
    const timestamp = event.timeStamp / 1000;

    tracker.active = true;
    tracker.position.x = x;
    tracker.position.y = y;
    tracker.timestamp = timestamp;
    tracker.velocity.x = tracker.velocity.y = 0;

    if (background.cache.length > 0 && !background.particles.some(x => timestamp - x.timestamp < 0.1)) {
      for (let i = random(0, 4); i > 0; i--) {
        background.particles.unshift({ elapsed: -1, x: x, y: y, image: background.cache[random(0, background.cache.length)], timestamp: timestamp });
      }
    }
  }
});
window.addEventListener("mousemove", event => {
  if (tracker.active && !tracker.touching) {
    const rect = document.body.querySelector("#app>.container>.wrap>.frame>.wall").getBoundingClientRect();
    const x = event.clientX - rect.x;
    const y = event.clientY - rect.y;
    const timestamp = event.timeStamp / 1000;
    const deltaX = x - tracker.position.x;
    const deltaY = y - tracker.position.y;
    const deltaTime = timestamp - tracker.timestamp;

    tracker.position.x = x;
    tracker.position.y = y;
    tracker.timestamp = timestamp;
    tracker.movement.x += deltaX;
    tracker.movement.y += deltaY;

    if (deltaTime > 0) {
      tracker.velocity.x = deltaX / deltaTime;
      tracker.velocity.y = deltaY / deltaTime;
    }

    if (background.cache.length > 0 && !background.particles.some(x => timestamp - x.timestamp < 0.1)) {
      for (let i = random(0, 4); i > 0; i--) {
        background.particles.unshift({ elapsed: -1, x: x, y: y, image: background.cache[random(0, background.cache.length)], timestamp: timestamp });
      }
    }
  }
});
window.addEventListener("mouseup", event => {
  if (event.button === 0 && !tracker.touching) {
    tracker.active = false;
  }
});
window.addEventListener("touchstart", event => {
  event.stopPropagation();

  const rect = document.body.querySelector("#app>.container>.wrap>.frame>.wall").getBoundingClientRect();
  const x = event.changedTouches[0].clientX - rect.x;
  const y = event.changedTouches[0].clientY - rect.y;
  const timestamp = event.timeStamp / 1000;

  tracker.active = true;
  tracker.touching = true;
  tracker.position.x = x;
  tracker.position.y = y;
  tracker.timestamp = timestamp;
  tracker.velocity.x = tracker.velocity.y = 0;

  if (background.cache.length > 0 && !background.particles.some(x => timestamp - x.timestamp < 0.1)) {
    for (let i = random(0, 4); i > 0; i--) {
      background.particles.unshift({ elapsed: -1, x: x, y: y, image: background.cache[random(0, background.cache.length)], timestamp: timestamp });
    }
  }
});
window.addEventListener("touchmove", event => {
  event.stopPropagation();

  const rect = document.body.querySelector("#app>.container>.wrap>.frame>.wall").getBoundingClientRect();
  const x = event.changedTouches[0].clientX - rect.x;
  const y = event.changedTouches[0].clientY - rect.y;
  const timestamp = event.timeStamp / 1000;
  const deltaX = x - tracker.position.x;
  const deltaY = y - tracker.position.y;
  const deltaTime = timestamp - tracker.timestamp;

  tracker.position.x = x;
  tracker.position.y = y;
  tracker.timestamp = timestamp;
  tracker.movement.x += deltaX;
  tracker.movement.y += deltaY;

  if (deltaTime > 0) {
    tracker.velocity.x = deltaX / deltaTime;
    tracker.velocity.y = deltaY / deltaTime;
  }

  if (background.cache.length > 0 && !background.particles.some(x => timestamp - x.timestamp < 0.1)) {
    for (let i = random(0, 4); i > 0; i--) {
      background.particles.unshift({ elapsed: -1, x: x, y: y, image: background.cache[random(0, background.cache.length)], timestamp: timestamp });
    }
  }
});
window.addEventListener("touchend", event => {
  event.stopPropagation();

  tracker.active = false;
  tracker.touching = false;
});
window.addEventListener("touchcancel", event => {
  event.stopPropagation();

  tracker.active = false;
  tracker.touching = false;
});