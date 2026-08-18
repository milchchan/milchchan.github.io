const threshold = new URL(window.location.href).searchParams.get("threshold") ?? 0.75;
const background = { running: true, updated: 0, timeout: 60 * 1000, preloading: false, force: false, color: null, blocks: [], texts: [], offset: null, images: [], queue: [], particles: [], cache: null };
const tracker = { active: false, identifier: null, edge: true, mouse: { x: 0, y: 0 }, position: { x: 0, y: 0 }, movement: { x: 0, y: 0 }, velocity: { x: 0, y: 0 }, timestamp: 0 };
const pinches = [];
const touches = [];
const animations = [];

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

class KMeans {
  constructor(maxClusters) {
    this.maxClusters = maxClusters;
    this.centers = new Map();
  }

  get clusters() {
    return this.centers;
  }

  fit(data, iterations = 1000) {
    // k-means++
    const clusters = new Array(data.length).fill(0);
    let centerVector = data[Math.floor(Math.random() * data.length)];
    
    this.centers.clear();
    this.centers.set(0, centerVector);

    for (let i = 1; i < this.maxClusters; i++) {
      const probabilities = [];
      let sum = 0;

      for (const vector of data) {
        let minDistance = Number.POSITIVE_INFINITY;

        for (const center of this.centers.values()) {
          minDistance = Math.min(minDistance, this.euclideanDistance(center, vector));
        }

        const squaredDistance = minDistance ** 2;

        probabilities.push(squaredDistance);
        sum += squaredDistance;
      }

      if (sum == 0) {
        break;
      }

      for (let j = 0; j < probabilities.length; j++) {
        probabilities[j] /= sum;
      }

      const selectedIndex = Math.min(this.choice(probabilities), probabilities.length - 1);

      centerVector = data[selectedIndex];
      this.centers.set(i, centerVector);
    }

    for (let t = 0; t < iterations; t++) {
      // Assignment step
      for (let i = 0; i < data.length; i++) {
        let minDistance = Number.POSITIVE_INFINITY;
        let assignedClusterId = -1;

        for (const [clusterId, center] of this.centers) {
          const distance = this.euclideanDistance(center, data[i]);

          if (distance < minDistance) {
            minDistance = distance;
            assignedClusterId = clusterId;
          }
        }

        clusters[i] = assignedClusterId;
      }

      // Update step
      for (let i = 0; i < this.centers.size; i++) {
        const vectors = [];

        for (let j = 0; j < clusters.length; j++) {
          if (clusters[j] === i) {
            vectors.push(data[j]);
          }
        }

        if (vectors.length > 0) {
          this.centers.set(i, this.mean(vectors));
        }
      }
    }
  }

  predict(vector) {
    let minDistance = Number.POSITIVE_INFINITY;
    let predictedClusterId = 0;

    for (const [clusterId, center] of this.centers) {
      const distance = this.euclideanDistance(center, vector);

      if (distance < minDistance) {
        minDistance = distance;
        predictedClusterId = clusterId;
      }
    }

    return [predictedClusterId, this.centers.get(predictedClusterId)];
  }

  euclideanDistance(x, y) {
    let sum = 0;

    for (let i = 0; i < x.length; i++) {
      sum += (x[i] - y[i]) ** 2;
    }

    return Math.sqrt(sum);
  }

  choice(probabilities) {
    const random = Math.random();
    let sum = 0;
    let index = 0;

    for (const probability of probabilities) {
      if (sum <= random && random < sum + probability) {
        break;
      }

      sum += probability;
      index++;
    }

    return index;
  }

  mean(vectors) {
    const result = [...vectors[0]];

    for (let i = 1; i < vectors.length; i++) {
      for (let j = 0; j < result.length; j++) {
        result[j] += vectors[i][j];
      }
    }

    for (let i = 0; i < result.length; i++) {
      result[i] /= vectors.length;
    }

    return result;
  }
}

function pickColor(image, KMeansClass) {
  const imageWidth = image.width;
  const imageHeight = image.height;

  if (imageWidth <= 0 || imageHeight <= 0) {
    return "#ffffff";
  }

  const sourceCanvas = new OffscreenCanvas(imageWidth, imageHeight);
  const sourceContext = sourceCanvas.getContext("2d", { willReadFrequently: true });

  if (sourceContext === null) {
    return "#ffffff";
  }

  sourceContext.drawImage(image, 0, 0, imageWidth, imageHeight);

  const sourceData = sourceContext.getImageData(0, 0, imageWidth, imageHeight).data;
  let minX = imageWidth;
  let minY = imageHeight;
  let maxX = -1;
  let maxY = -1;

  for (let y = 0; y < imageHeight; y++) {
    for (let x = 0; x < imageWidth; x++) {
      if (sourceData[(y * imageWidth + x) * 4 + 3] > 0) {
        minX = Math.min(minX, x);
        minY = Math.min(minY, y);
        maxX = Math.max(maxX, x);
        maxY = Math.max(maxY, y);
      }
    }
  }

  if (maxX < minX || maxY < minY) {
    return "#ffffff";
  }

  const cropWidth = maxX - minX + 1;
  const cropHeight = maxY - minY + 1;
  const scale = Math.min(1, 64 / Math.max(cropWidth, cropHeight));
  const width = Math.max(1, Math.floor(cropWidth * scale));
  const height = Math.max(1, Math.floor(cropHeight * scale));
  const canvas = new OffscreenCanvas(width, height);
  const context = canvas.getContext("2d", { willReadFrequently: true });

  if (context === null) {
    return "#ffffff";
  }

  context.imageSmoothingEnabled = true;
  context.imageSmoothingQuality = "high";
  context.clearRect(0, 0, width, height);
  context.drawImage(image, minX, minY, cropWidth, cropHeight, 0, 0, width, height);

  const pixels = [];
  const data = context.getImageData(0, 0, width, height).data;

  for (let i = 0; i < data.length; i += 4) {
    if (data[i + 3] > 0) {
      const red = data[i] / 255;
      const green = data[i + 1] / 255;
      const blue = data[i + 2] / 255;
      const maximum = Math.max(red, green, blue);
      const minimum = Math.min(red, green, blue);
      const difference = maximum - minimum;
      let hue = 0;

      if (difference > 0) {
        if (maximum === red) {
          hue = 60 * (green - blue) / difference;
        } else if (maximum === green) {
          hue = 60 * (blue - red) / difference + 120;
        } else {
          hue = 60 * (red - green) / difference + 240;
        }

        if (hue < 0) {
          hue += 360;
        }
      }

      const saturation = maximum > 0 ? difference / maximum : 0;
      const angle = hue / 360 * 2 * Math.PI;
      const chroma = saturation * maximum;

      pixels.push([
        chroma * Math.cos(angle),
        chroma * Math.sin(angle),
        maximum
      ]);
    }
  }

  if (pixels.length === 0) {
    return "#ffffff";
  }

  const kMeans = new KMeansClass(8);
  const stats = new Map();
  const scored = [];
  let maximum = 0;

  kMeans.fit(pixels, 50);

  for (const pixel of pixels) {
    const [id, vector] = kMeans.predict(pixel);
    let hue = Math.atan2(vector[1], vector[0]) / (2 * Math.PI);
    const chroma = Math.hypot(vector[0], vector[1]);
    const brightness = Math.min(Math.max(vector[2], 0), 1);
    
    if (hue < 0) {
      hue += 1;
    }

    const color = {
      hue: hue * 360,
      saturation: brightness > 0 ? Math.max(Math.min(chroma / brightness, 1), 0) : 0,
      value: brightness
    };
    const stat = stats.get(id);

    stats.set(id, { count: (stat?.count ?? 0) + 1, color: stat?.color ?? color });
  }

  for (const stat of stats.values()) {
    maximum = Math.max(maximum, stat.count);
  }

  for (const stat of stats.values()) {
    scored.push({
      score: 1 / (1 + Math.exp(-10 * (stat.color.value - 0.25))) * (Math.min(stat.count / maximum, 0.25) + stat.color.saturation),
      color: stat.color
    });
  }

  scored.sort((x, y) => y.score - x.score);

  if (scored.length === 0) {
    return "#ffffff";
  }

  const color = scored[0].color;
  const hue = color.hue % 360;
  const saturation = Math.min(Math.max(color.saturation * 1.5, 0), 1);
  const value = Math.min(Math.max(color.value * 1.5, 0), 1);
  const sector = Math.floor(hue / 60);
  const fraction = hue / 60 - sector;
  const p = value * (1 - saturation);
  const q = value * (1 - fraction * saturation);
  const t = value * (1 - (1 - fraction) * saturation);
  const rgb = [
    [value, t, p],
    [q, value, p],
    [p, value, t],
    [p, q, value],
    [t, p, value],
    [value, p, q]
  ][sector];

  if (rgb === undefined || !rgb.every(Number.isFinite)) {
    return "#ffffff";
  }

  return `#${rgb.map(component => Math.round(component * 255).toString(16).padStart(2, "0")).join("")}`;
}

async function getBackgroundColor(image) {
  try {
    const imageBitmap = await createImageBitmap(image);

    return await new Promise(resolve => {
      let worker = null;
      let timeout = null;

      const finish = color => {
        clearTimeout(timeout);
        worker?.terminate();
        resolve(/^#[0-9a-f]{6}$/i.test(color) ? color : "#ffffff");
      };

      try {
        const source = `const KMeansClass = ${KMeans.toString()};
const pick = ${pickColor.toString()};
self.onmessage = event => {
  const image = event.data;
  let color = "#ffffff";

  try {
    color = pick(image, KMeansClass);
  } catch {}

  image?.close();
  self.postMessage(color);
};`;

        worker = new Worker(`data:text/javascript;charset=utf-8,${encodeURIComponent(source)}`);
        worker.onmessage = event => finish(event.data);
        worker.onerror = () => finish("#ffffff");
        worker.onmessageerror = () => finish("#ffffff");
        timeout = setTimeout(() => finish("#ffffff"), 10 * 1000);
        worker.postMessage(imageBitmap, [imageBitmap]);
      } catch {
        imageBitmap.close();
        finish("#ffffff");
      }
    });
  } catch {
    return "#ffffff";
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

function lerp(a, b, t) {
  return a + t * (b - a)
}

function shake(element) {
  element.animate([
    { transform: "translate3d(5px, 0, 0)" },
    { transform: "translate3d(0, 0, 0)" },
    { transform: "translate3d(-5px, 0, 0)" },
    { transform: "translate3d(4px, 0, 0)" },
    { transform: "translate3d(0, 0, 0)" },
    { transform: "translate3d(-4px, 0, 0)" },
    { transform: "translate3d(3px, 0, 0)" },
    { transform: "translate3d(0, 0, 0)" },
    { transform: "translate3d(-3px, 0, 0)" },
    { transform: "translate3d(2px, 0, 0)" },
    { transform: "translate3d(0, 0, 0)" },
    { transform: "translate3d(-2px, 0, 0)" },
    { transform: "translate3d(1px, 0, 0)" },
    { transform: "translate3d(0, 0, 0)" },
    { transform: "translate3d(-1px, 0, 0)" }],
    { fill: "forwards", duration: 500, iterations: 1 }).onfinish = () => {
      element.style.transform = "translate3d(0, 0, 0)";
    };
}

async function resize(blob, length) {
  return await new Promise(async (resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      const image = new Image();

      image.onload = () => {
        const canvas = document.createElement("canvas");

        if (image.width > image.height) {
          if (image.width > length) {
            canvas.width = length;
            canvas.height = Math.floor(length / image.width * image.height);
          } else {
            canvas.width = image.width;
            canvas.height = image.height;
          }
        } else if (image.height > length) {
          canvas.width = Math.floor(length / image.height * image.width);
          canvas.height = length;
        } else {
          canvas.width = image.width;
          canvas.height = image.height;
        }

        const ctx = canvas.getContext("2d");

        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        ctx.canvas.toBlob(async (blob) => {
          resolve(blob);

          ctx.canvas.width = ctx.canvas.height = 0;
        }, "image/png");
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
}

async function upload(files) {
  const progress = document.createElement("div");
  const bar = document.createElement("div");
  const completed = [];
  let animation = null;

  progress.className = "progress";
  bar.className = "bar animating";
  bar.style.opacity = "1";
  bar.style.width = "100%";

  try {
    const response = await fetch(window.devicePixelRatio > 1 ? `images/Stripes@${Math.trunc(window.devicePixelRatio)}x.png` : "images/Stripes.png");

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
  bar.animate([
    {
      opacity: 1
    }
  ], {
    delay: 0,
    fill: "forwards",
    duration: 500,
    iterations: 1,
    easing: "ease-out"
  });

  for (const file of files) {
    try {
      const formData = new FormData();

      formData.append("file", new Blob([file], { type: file.type }), file.name);

      const response = await fetch("https://milchchan.com/api/upload", {
          mode: "cors",
          method: "POST",
          body: formData
        }
      );

      if (response.ok) {
        const json = await response.json();
        
        completed.push([`https://milchchan.com/api/upload/${json.id}`, file.type]);
      } else {
        throw new Error(response.statusText);
      }
    } catch (error) {
      console.error(error);

      animation = null;

      break;
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

async function synthesize(source, prompt, input, language, temperature = 1.0) {
  try {
    const response1 = await fetch(encodeURI(prompt));

    if (response1.ok) {
      const formData = new FormData();

      formData.append("file", await response1.blob(), "prompt.wav");
      formData.append("data", new Blob([JSON.stringify({ input: input, language: language, temperature: temperature })], { type: "application/json" }));

      const response2 = await fetch("https://milchchan.com/api/generate", {
        mode: "cors",
        method: "POST",
        body: formData
      });

      if (response2.ok) {
        const blob = await response2.blob();
        const [arrayBuffer, sr] = await new Promise(async (resolve, reject) => {
          const reader = new FileReader();

          reader.onload = () => {
            const arrayBuffer = reader.result;
            const view = new DataView(arrayBuffer);
            const sampleRate = view.getUint32(24, true);
            
            resolve([arrayBuffer, sampleRate]);
          };
          reader.onerror = () => {
            reject(reader.error);
          };
          reader.readAsArrayBuffer(blob);
        });

        const buffer = await audioContext.decodeAudioData(arrayBuffer);

        sampleRate = sr;
        
        source.buffer = buffer;
        source.onended = () => {
          source.disconnect();
          audioContext.close();
          audioContext = null;
          isPlaying = false;
        };
        source.start(0);
        isPlaying = true;
      } else {
        throw new Error(response2.statusText);
      }

    }
  } catch (error) {
    console.error(error);
  }
}

window.refresh = (event) => {
  background.force = true;
  background.updated = -background.timeout;
};
window.select = async (event) => {
  const target = (event.currentTarget || event.target);

  if (target.dataset.state === "on") {
    if (background.offset !== null) {
      background.offset = null;
      background.queue.splice(0);
      background.force = true;
      background.updated = -background.timeout;
    }

    for (const element of document.body.querySelectorAll("div.sidebar>.level>.level-item>.level>.level-item .button")) {
      if ("state" in element.dataset) {
        if (element.dataset.state === "on") {
          if (!element.classList.contains("is-selected")) {
            element.classList.add("is-selected");
          }
        } else if (element.dataset.state === "off" && element.classList.contains("is-selected")) {
          element.classList.remove("is-selected");
        }
      }
    }
  } else if (target.dataset.state === "off") {
    if (background.offset === null) {
      background.offset = 0;
      background.queue.splice(0);
      background.force = true;
      background.updated = -background.timeout;
    }

    for (const element of document.body.querySelectorAll("div.sidebar>.level>.level-item>.level>.level-item .button")) {
      if ("state" in element.dataset) {
        if (element.dataset.state === "on") {
          if (element.classList.contains("is-selected")) {
            element.classList.remove("is-selected");
          }
        } else if (element.dataset.state === "off" && !element.classList.contains("is-selected")) {
          element.classList.add("is-selected");
        }
      }
    }
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
        const [path, contentType] = stack.pop();

        if (contentType.startsWith("image/")) {
          background.queue.unshift([{ delay: 0, source: path }]);
        }
      } while (stack.length > 0);

      background.updated = -background.timeout;
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

  /*new Promise(async (resolve) => {
    try {
      const response = await fetch("https://milchchan.com/api/now", {
        mode: "cors",
        method: "GET"
      });

      if (response.ok) {
        await response.json();
      }
    } catch (error) {
      console.error(error);
    }
    
    resolve();
  });*/

  const logo = document.body.querySelector("div.sidebar>.level>.level-item:first-child>.level>.level-item:first-child .button .icon figure");
  const frame = document.body.querySelector("#app>.container>.wrap>.frame");
  const wall = frame.querySelector(":scope>.wall");
  const stats = document.createElement("div");
  const canvas = document.createElement("canvas");
  const rect = frame.getBoundingClientRect();

  document.body.classList.remove("is-preloading");

  logo.addEventListener("mouseenter", e => {
    background.running = false;
  });
  logo.addEventListener("mouseleave", e => {
    background.running = true;
  });
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
        const [path, contentType] = stack.pop();

        if (contentType.startsWith("image/")) {
          background.queue.unshift([{ delay: 0, source: path }]);
        }
      } while (stack.length > 0);

      background.updated = -background.timeout;
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

  if (decodeURIComponent(window.location.hash.substring(1).toLowerCase()) === "debug") {
    for (const element of document.body.querySelectorAll("div.sidebar>.level>.level-item:last-child>.level>.level-item")) {
      if (element.classList.contains("is-hidden")) {
        element.classList.remove("is-hidden");
      }
    }

    stats.className = "is-active";
  }

  canvas["backBuffer"] = document.createElement("canvas");
  canvas.width = Math.floor(rect.width * window.devicePixelRatio);
  canvas.height = Math.floor(rect.height * window.devicePixelRatio);
  canvas.style.width = `${Math.floor(rect.width)}px`;
  canvas.style.height = `${Math.floor(rect.height)}px`;
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

  async function download(url, handler = null) {
    try {
      const response = await fetch(url, {
        mode: "cors",
        method: "GET"
      });

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

  const cache = {};
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
    if (background.running && timestamp > previousTime) {
      const deltaTime = (timestamp - previousTime) / 1000;

      previousTime = timestamp;

      if (timestamp - background.updated >= background.timeout && (background.force || !/^(?:[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|[0-9a-f]{7})$/.test(decodeURIComponent(window.location.hash.substring(1).toLowerCase())))) {
        for (const block of background.blocks) {
          for (let i = block.inlines.length - 1; i >= 0; i--) {
            if (block.inlines[i].running) {
              block.inlines[i].type.reverse = true;
              block.index = null;
              block.caches.splice(0);
            }
          }
        }

        background.updated = timestamp;
        background.force = false;
      }

      if (!background.preloading && !background.blocks.some(x => x.inlines.some(y => y.running || y.type.elapsed >= 0 || y.type.reverse))) {
        background.preloading = true;
        background.image = null;
        background.blocks.splice(0);
        tracker.movement.x = tracker.movement.y = 0;
        pinches.splice(0);
        touches.splice(0);
        animations.splice(0);

        const blind = document.createElement("div");
          
        blind.className = "blind";
        blind.style.transform = "translate3d(0, 100%, 0)";

        try {
          const response = await fetch(window.devicePixelRatio > 1 ? `images/Background@${Math.trunc(window.devicePixelRatio)}x.png` : "images/Background.png");

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
        
        try {
          const response = await fetch(encodeURI("https://milchchan.com/api/fetch"), {
            mode: "cors",
            method: "GET",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          });
      
          if (response.ok) {
            for (const item of await response.json()) {
              if ("comment" in item && "score" in item && item.score >= threshold) {
                if ("terms" in item) {
                  const candidates = item.terms.reduce((output, value) => {
                    const term = (Array.isArray(value) ? value : [value]).filter(x => typeof (x) === "string" && x.length > 0);
                    const word = term.at(-1);

                    if (typeof (word) === "undefined") {
                      return output;
                    }

                    if (term.length === 1) {
                      output.push({ target: word, lastWord: null });
                    } else {
                      for (let index = 0; index < term.length - 1; index++) {
                        const parts = term.slice(index);
                        const separator = parts.every(x => /^[\x00-\x7F]+$/.test(x)) ? " " : "";

                        output.push({ target: parts.join(separator), lastWord: word });
                      }
                    }

                    return output;
                  }, []);

                  candidates.sort((x, y) => y.target.length - x.target.length);

                  let inlines = item.comment.length === 0 ? [] : [{ text: item.comment, attributes: null }];

                  for (const candidate of candidates) {
                    const pattern = new RegExp(candidate.target.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "iu");

                    inlines = inlines.reduce((output, inline) => {
                      if (inline.attributes !== null) {
                        output.push(inline);

                        return output;
                      }

                      let text = inline.text;
                      let match;

                      while ((match = pattern.exec(text)) !== null) {
                        if (match.index !== 0) {
                          output.push({ text: text.slice(0, match.index), attributes: null });
                        }

                        let inline = match[0];

                        if (candidate.lastWord !== null) {
                          const lastWordPattern = new RegExp(`${candidate.lastWord.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`, "iu");

                          inline = inline.replace(lastWordPattern, "\n$&");
                        }

                        output.push({text: inline, attributes: []});
                        text = text.slice(match.index + match[0].length);
                      }

                      if (text.length > 0) {
                        output.push({ text: text, attributes: null });
                      }

                      return output;
                    }, []);
                  }

                  const isNewline = character => /^[\n\v\f\r\u0085\u2028\u2029]$/u.test(character);
                  const lines = [{ text: "", attributes: [] }];

                  for (const inline of inlines) {
                    if (inline.attributes !== null) {
                      const names = inline.attributes;
                      let term = "";
                      let modifier = "";

                      for (const character of inline.text) {
                        if (isNewline(character)) {
                          modifier += term;
                          term = "";
                        } else {
                          term += character;
                        }
                      }

                      const text = modifier + term;

                      if (text.length === 0) {
                        continue;
                      }

                      const lineIndex = lines.length - 1;
                      const start = lines[lineIndex].text.length;
                      const modifierEnd = start + modifier.length;
                      const end = start + text.length;

                      lines[lineIndex].text += text;

                      if (modifier.length > 0) {
                        lines[lineIndex].attributes.push({ name: null, start: start, end: modifierEnd });
                      }

                      if (names.length === 0) {
                        lines[lineIndex].attributes.push({ name: null, start: start, end: end });
                      } else {
                        for (const name of names) {
                          lines[lineIndex].attributes.push({ name: name, start: start, end: end });
                        }
                      }
                    } else {
                      for (const character of inline.text) {
                        if (isNewline(character)) {
                          if (lines.at(-1).text.length > 0) {
                            lines.push({ text: "", attributes: [] });
                          }
                        } else {
                          lines[lines.length - 1].text += character;
                        }
                      }
                    }
                  }

                  if (lines.at(-1).text.length === 0) {
                    lines.pop();
                  }

                  for (const line of lines) {
                    const ranges = line.attributes.map(attribute => ({ start: attribute.start, end: attribute.end })).sort((x, y) => x.start - y.start || y.end - x.end).reduce((output, range) => {
                      const last = output.at(-1);

                      if (typeof (last) === "undefined" || range.start > last.end) {
                        output.push(range);
                      } else {
                        last.end = Math.max(last.end, range.end);
                      }

                      return output;
                    }, []);

                    const content = { text: line.text, inlines: [], attributes: ranges };
                    let index = 0;

                    for (const range of ranges) {
                      if (index < range.start) {
                        content.inlines.push({ text: line.text.slice(index, range.start), highlight: false });
                      }

                      content.inlines.push({ text: line.text.slice(range.start, range.end), highlight: true });
                      index = range.end;
                    }

                    if (index < line.text.length) {
                      content.inlines.push({ text: line.text.slice(index), highlight: false });
                    }

                    background.texts.push([content, item.content]);
                  }
                } else {
                  background.texts.push([{ text: item.comment, inlines: [{ text: item.comment, highlight: false }], attributes: [] }, item.content]);
                }
              }
            }
          }
        } catch (error) {
          console.error(error);
        }
        
        if (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|[0-9a-f]{7})$/.test(decodeURIComponent(window.location.hash.substring(1).toLowerCase()))) {
          background.queue.push([{ delay: 0, source: `https://milchchan.com/api/upload/${decodeURIComponent(window.location.hash.substring(1).toLowerCase())}` }]);
        } else if (background.offset === null) {
          try {
            const response = await fetch(encodeURI(`https://milchchan.com/api/upload?type=image/%&random=${Math.random()}`), {
              mode: "cors",
              method: "GET",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded"
              }
            });
        
            if (response.ok) {
              background.queue.push([{ delay: 0, source: response.url }]);
            } else {
              throw new Error(response.statusText);
            }
          } catch (error) {
            console.error(error);
          }
        } else if (background.queue.length === 0) {
          try {
            const limit = 11;
            const response = await fetch(encodeURI(`https://milchchan.com/api/uploads?type=image/%&offset=${background.offset}&limit=${limit}`), {
              mode: "cors",
              method: "GET",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded"
              }
            });
        
            if (response.ok) {
              const json = await response.json();
              
              for (const item of json) {
                background.queue.push([{ delay: 0, source: `https://milchchan.com/api/upload/${item.id}` }]);
              }

              if (background.queue.length === limit) {
                background.offset += 10;
                background.queue.pop();
              } else {
                background.offset = 0;
              }
            } else {
              throw new Error(response.statusText);
            }
          } catch (error) {
            console.error(error);
          }
        }

        if (background.queue.length > 0) {
          const data = background.queue.shift();
          const progress = document.createElement("div");
          const bar = document.createElement("div");
          const timeout = 60 * 60;
          let index = 0;

          progress.className = "progress";
          bar.className = "bar animating";
          bar.style.width = "0%";

          try {
            const response = await fetch(window.devicePixelRatio > 1 ? `images/Stripes@${Math.trunc(window.devicePixelRatio)}x.png` : "images/Stripes.png");

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

          for (const frame of data) {
            const timestamp = Math.floor(new Date() / 1000);

            if (frame.source in cache === false || timestamp - cache[frame.source].timestamp >= timeout) {
              const blob = await download(frame.source, (rate) => {
                if (index < data.length - 1 || rate < 1) {
                  bar.animate([
                    {
                      width: `${Math.floor((rate / data.length + index / data.length) * 100)}%`
                    }
                  ], {
                    delay: 0,
                    fill: "forwards",
                    duration: 500,
                    iterations: 1,
                    easing: "linear",
                    composite: "replace"
                  }).onfinish = () => {
                    bar.style.width = `${Math.floor((index + 1) / data.length * 100)}%`;
                  };
                } else {
                  bar.animate([
                    {
                      width: `${Math.floor((index + 1) / data.length * 100)}%`
                    }
                  ], {
                    delay: 0,
                    fill: "forwards",
                    duration: 500,
                    iterations: 1,
                    easing: "ease-in",
                    composite: "replace"
                  }).onfinish = () => {
                    bar.style.width = `${Math.floor((index + 1) / data.length * 100)}%`;
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
                if (index === data.length - 1) {
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
                      reader.readAsDataURL(await resize(blob, Math.floor(Math.max(window.screen.width, window.screen.height) / 2.0 * window.devicePixelRatio)));
                    });

                    animations.push(Object.assign({ time: 0, image: image }, frame));
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
                          reader.readAsDataURL(await resize(frame.blob, Math.floor(Math.max(window.screen.width, window.screen.height) / 2.0 * window.devicePixelRatio)));
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
                        animations.push(Object.assign({ time: 0 }, frame));
                      }

                      cache[frame.source] = { frames: frames, timestamp: timestamp };
                    }
                  }
                } catch (error) {
                  console.error(error);
                }
              }
            } else {
              if (index < data.length - 1) {
                bar.animate([
                  {
                    width: `${Math.floor((index + 1) / data.length * 100)}%`
                  }
                ], {
                  delay: 0,
                  fill: "forwards",
                  duration: 500,
                  iterations: 1,
                  easing: "ease-in",
                  composite: "replace"
                }).onfinish = () => {
                  bar.style.width = `${Math.floor((index + 1) / data.length * 100)}%`;
                };
              } else {
                bar.animate([
                  {
                    width: `${Math.floor((index + 1) / data.length * 100)}%`
                  }
                ], {
                  delay: 0,
                  fill: "forwards",
                  duration: 500,
                  iterations: 1,
                  easing: "ease-in",
                  composite: "replace"
                }).onfinish = () => {
                  bar.style.width = `${Math.floor((index + 1) / data.length * 100)}%`;
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
                  animations.push(Object.assign({ time: 0 }, data));
                }
              } else {
                animations.push(Object.assign({ time: 0, image: cache[frame.source].image }, frame));
              }
            }

            index++;
          }

          for (let i = animations.length - 2; i >= 0; i--) {
            animations.push(animations[i]);
          }

          background.color = "#ffffff";

          try {
            background.color = await getBackgroundColor(animations[0].image);
          } catch (error) {
            console.error(error);
          }
        } else {
          background.color = null;
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

        background.preloading = false;

        const maxLines = Math.round(Math.min(window.screen.width, window.screen.height) / Math.ceil(16.0 * 2.0 * 1.5));
        const length = random(Math.floor(maxLines / 2), maxLines);
        let start = background.texts.length - length;
        let samples;

        if (start >= 0) {
          start = random(0, start);
          samples = background.texts.slice(start, start + length);
        } else {
          samples = background.texts;
        }

        for (let i = 0; i < samples.length; i++) {
          const [sample, name] = samples[i];
          const letters = [];

          for (let j = 0; j < sample.text.length; j++) {
            if (sample.text.charAt(j) !== "\n" && sample.text.charAt(j).match(/\s/) === null) {
              letters.push(sample.text.charAt(j));
            }
          }

          background.blocks.push({
            height: 100 / samples.length,
            colors: { main: window.getComputedStyle(document.documentElement).getPropertyValue("--background-color"), accent: window.getComputedStyle(document.documentElement).getPropertyValue("--background-color") },
            inlines: [
              { running: true, time: 0, duration: null, type: { elapsed: -1, speed: 50, reverse: false, buffer: "", count: 0 }, text: sample.text, attributes: sample.attributes, current: "", source: sample.inlines, letters: letters }
            ],
            scroll: { requested: false, step: 0.0 },
            elapsed: Math.random() * 60.0,
            rtl: i % 2 === 1,
            index: null,
            caches: [
              { text: sample.text, attributes: sample.attributes, source: sample.inlines },
              { text: name, attributes: [], source: [{ text: name, highlight: false }] },
            ]
          });
        }
      }

      for (const block of background.blocks) {
        if (block.rtl) {
          for (const inline of block.inlines) {
            if (inline.running) {
              if (inline.type.reverse) {
                if (inline.type.count > 0) {
                  inline.type.elapsed += deltaTime * 2;

                  if (inline.type.elapsed >= 1.0 / inline.type.speed) {
                    if (inline.type.count - 1 < inline.text.length) {
                      if (inline.type.buffer.length <= Math.floor(inline.text.length / 2) && inline.type.count > 0) {
                        inline.type.count -= 1;
                      }

                      if (inline.type.buffer.length > 0) {
                        inline.type.buffer = inline.type.buffer.substring(1, inline.type.buffer.length);
                      }
                    }

                    inline.type.elapsed = 0;
                  }
                } else {
                  inline.time = 0;
                  inline.type.elapsed = -1;
                  inline.type.reverse = false;

                  if (block.index === null) {
                    inline.running = false;
                  } else {
                    const index = block.index % block.caches.length;
                    const text = block.caches[index].text;
                    const letters = [];

                    for (let j = 0; j < text.length; j++) {
                      if (text.charAt(j) !== "\n" && text.charAt(j).match(/\s/) === null) {
                        letters.push(text.charAt(j));
                      }
                    }

                    inline.text = text;
                    inline.attributes = block.caches[index].attributes;
                    inline.source = block.caches[index].source;
                    inline.letters = letters;

                    if (index === 0) {
                      block.index = null;
                    }
                  }
                }
              } else if (inline.type.buffer.length < inline.text.length) {
                if (inline.type.elapsed >= 0) {
                  inline.type.elapsed += deltaTime;
                } else {
                  inline.type.elapsed = deltaTime;
                }

                if (inline.type.elapsed >= 1.0 / inline.type.speed) {
                  if (inline.type.count >= Math.floor(inline.text.length / 2)) {
                    inline.type.buffer = inline.text.charAt(inline.text.length - 1 - inline.type.buffer.length) + inline.type.buffer;
                  }

                  if (inline.type.count < inline.text.length) {
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
                inline.current = inline.text;
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
                  inline.current = randomBuffer.substring(0, randomBuffer.length - inline.type.buffer.length) + inline.type.buffer;
                } else if (inline.current.length !== inline.type.buffer.length) {
                  inline.current = inline.type.buffer;
                }
              }

              if (block.scroll.requested) {
                block.scroll.step += deltaTime;

                if (block.scroll.step >= 1.0) {
                  block.scroll.requested = false;
                  block.scroll.step = 0.0;
                }
              }

              block.elapsed += deltaTime;
            }
          }
        } else {
          for (const inline of block.inlines) {
            if (inline.running) {
              if (inline.type.reverse) {
                if (inline.type.count > 0) {
                  inline.type.elapsed += deltaTime * 2;

                  if (inline.type.elapsed >= 1.0 / inline.type.speed) {
                    if (inline.type.count - 1 < inline.text.length) {
                      if (inline.type.buffer.length <= Math.floor(inline.text.length / 2) && inline.type.count > 0) {
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

                  if (block.index === null) {
                    inline.running = false;
                  } else {
                    const index = block.index % block.caches.length;
                    const text = block.caches[index].text;
                    const letters = [];

                    for (let j = 0; j < text.length; j++) {
                      if (text.charAt(j) !== "\n" && text.charAt(j).match(/\s/) === null) {
                        letters.push(text.charAt(j));
                      }
                    }

                    inline.text = text;
                    inline.attributes = block.caches[index].attributes;
                    inline.source = block.caches[index].source;
                    inline.letters = letters;

                    if (index === 0) {
                      block.index = null;
                    }
                  }
                }
              } else if (inline.type.buffer.length < inline.text.length) {
                if (inline.type.elapsed >= 0) {
                  inline.type.elapsed += deltaTime;
                } else {
                  inline.type.elapsed = deltaTime;
                }

                if (inline.type.elapsed >= 1.0 / inline.type.speed) {
                  if (inline.type.count >= Math.floor(inline.text.length / 2)) {
                    inline.type.buffer += inline.text.charAt(inline.type.buffer.length);
                  }

                  if (inline.type.count < inline.text.length) {
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
                inline.current = inline.text;
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
                  inline.current = inline.type.buffer + randomBuffer.substring(inline.type.buffer.length, randomBuffer.length);
                } else if (inline.current.length !== inline.type.buffer.length) {
                  inline.current = inline.type.buffer;
                }
              }

              if (block.scroll.requested) {
                block.scroll.step += deltaTime;

                if (block.scroll.step >= 1.0) {
                  block.scroll.requested = false;
                  block.scroll.step = 0.0;
                }
              }

              block.elapsed += deltaTime;
            }
          }
        }
      }

      const backCanvas = canvas.backBuffer;

      backCanvas.width = canvas.width;
      backCanvas.height = canvas.height;

      const backContext = backCanvas.getContext("2d");
      const frontContext = canvas.getContext("2d");
      const lineHeight = backCanvas.height / background.blocks.length;
      const fontSize = Math.ceil(background.blocks.length === 1 ? lineHeight : lineHeight / 1.5);
      const fontFamily = window.getComputedStyle(document.documentElement).getPropertyValue("--background-font-family");
      const normalFont = `normal normal ${fontSize}px ${fontFamily}`;
      const boldFont = `normal bold ${fontSize}px ${fontFamily}`;
      const margin = Math.ceil(fontSize / 2);
      let index = 0;

      backContext.imageSmoothingEnabled = true;
      backContext.imageSmoothingQuality = "high";
      backContext.textAlign = "left";
      backContext.textBaseline = "middle";
      backContext.clearRect(0, 0, backCanvas.width, backCanvas.height);
      backContext.save();

      for (const block of background.blocks) {
        if (block.rtl) {
          for (const inline of block.inlines) {
            if (inline.running && inline.current.length > 0) {
              const line = [];
              let i = 0;
              let width = 0;
              let offset = 0;

              while (i < inline.current.length) {
                const j = inline.attributes.findIndex(x => i >= x.start && i < x.end);

                if (j >= 0) {
                  if (inline.attributes[j].end <= inline.current.length) {
                    line.push({ text: inline.current.substring(i, inline.attributes[j].end), highlight: true });
                    i = inline.attributes[j].end;
                  } else {
                    line.push({ text: inline.current.substring(i, inline.current.length), highlight: true });

                    break;
                  }
                } else {
                  const minimum = { start: null, distance: Number.MAX_SAFE_INTEGER };

                  for (const attribute of inline.attributes) {
                    const distance = attribute.start - i;

                    if (distance >= 0 && distance < minimum.distance) {
                      minimum.distance = distance;
                      minimum.start = attribute.start;
                    }
                  }

                  if (minimum.start === null) {
                    line.push({ text: inline.current.substring(i, inline.current.length), highlight: false });

                    break;
                  } else if (minimum.start <= inline.current.length) {
                    line.push({ text: inline.current.substring(i, minimum.start), highlight: false });
                    i = minimum.start
                  } else {
                    line.push({ text: inline.current.substring(i, inline.current.length), highlight: false });

                    break;
                  }
                }
              }

              line.reverse();

              backContext.save();

              for (const s of inline.source) {
                if (s.highlight) {
                  backContext.font = boldFont;
                } else {
                  backContext.font = normalFont;
                }

                const textMetrics = backContext.measureText(s.text);

                width += Math.abs(textMetrics.actualBoundingBoxLeft) + Math.abs(textMetrics.actualBoundingBoxRight);
              }

              let translation = (block.elapsed % 60 / 60 + Math.sin(block.scroll.step / 2.0 * Math.PI)) % 1.0 * (width + margin)

              backContext.translate(translation, 0);
              backContext.globalAlpha = 1.0;

              do {
                for (let i = 0; i < 2; i++) {
                  let x = 0;

                  for (const segment of line) {
                    if (segment.highlight) {
                      backContext.font = boldFont;
                    } else {
                      backContext.font = normalFont;
                    }

                    const textMetrics = backContext.measureText(segment.text);
                    const width = Math.abs(textMetrics.actualBoundingBoxLeft) + Math.abs(textMetrics.actualBoundingBoxRight);

                    if (offset + translation - x >= 0 && offset + translation - x - width < backCanvas.width) {
                      backContext.fillText(segment.text, offset - Math.round(x - textMetrics.actualBoundingBoxLeft) - width, Math.round(lineHeight * index + (lineHeight - fontSize) / 2 + fontSize / 2));// - textMetrics.actualBoundingBoxDescent + (fontSize - textMetrics.actualBoundingBoxAscent) / 2));
                    }

                    x += width;
                  }

                  for (const s of inline.source) {
                    if (s.highlight) {
                      backContext.font = boldFont;
                    } else {
                      backContext.font = normalFont;
                    }

                    const textMetrics = backContext.measureText(s.text);

                    offset += Math.abs(textMetrics.actualBoundingBoxLeft) + Math.abs(textMetrics.actualBoundingBoxRight);
                  }

                  offset += margin
                }
              } while (offset - margin < backCanvas.width * 2);

              backContext.restore();
            }
          }
        } else {
          for (const inline of block.inlines) {
            if (inline.running && inline.current.length > 0) {
              const line = [];
              let i = 0;
              let width = 0;
              let offset = 0;

              while (i < inline.current.length) {
                const j = inline.attributes.findIndex(x => i >= x.start && i < x.end);

                if (j >= 0) {
                  if (inline.attributes[j].end <= inline.current.length) {
                    line.push({ text: inline.current.substring(i, inline.attributes[j].end), highlight: true });
                    i = inline.attributes[j].end;
                  } else {
                    line.push({ text: inline.current.substring(i, inline.current.length), highlight: true });

                    break;
                  }
                } else {
                  const minimum = { start: null, distance: Number.MAX_SAFE_INTEGER };

                  for (const attribute of inline.attributes) {
                    const distance = attribute.start - i;

                    if (distance >= 0 && distance < minimum.distance) {
                      minimum.distance = distance;
                      minimum.start = attribute.start;
                    }
                  }

                  if (minimum.start === null) {
                    line.push({ text: inline.current.substring(i, inline.current.length), highlight: false });

                    break;
                  } else if (minimum.start <= inline.current.length) {
                    line.push({ text: inline.current.substring(i, minimum.start), highlight: false });
                    i = minimum.start
                  } else {
                    line.push({ text: inline.current.substring(i, inline.current.length), highlight: false });

                    break;
                  }
                }
              }

              backContext.save();

              for (const s of inline.source) {
                if (s.highlight) {
                  backContext.font = boldFont;
                } else {
                  backContext.font = normalFont;
                }

                const textMetrics = backContext.measureText(s.text);

                width += Math.abs(textMetrics.actualBoundingBoxLeft) + Math.abs(textMetrics.actualBoundingBoxRight);
              }

              let translation = (block.elapsed % 60 / 60 + Math.sin(block.scroll.step / 2.0 * Math.PI)) % 1.0 * -(width + margin)

              backContext.translate(translation, 0);
              backContext.globalAlpha = 1.0;

              do {
                for (let i = 0; i < 2; i++) {
                  let x = 0;

                  for (const segment of line) {
                    if (segment.highlight) {
                      backContext.font = boldFont;
                    } else {
                      backContext.font = normalFont;
                    }

                    const textMetrics = backContext.measureText(segment.text);
                    const width = Math.abs(textMetrics.actualBoundingBoxLeft) + Math.abs(textMetrics.actualBoundingBoxRight);

                    if (translation + offset + x + width >= 0 && translation + offset + x < backCanvas.width) {
                      backContext.fillText(segment.text, Math.round(offset + x - textMetrics.actualBoundingBoxLeft), Math.round(lineHeight * index + (lineHeight - fontSize) / 2 + fontSize / 2));// - textMetrics.actualBoundingBoxDescent + (fontSize - textMetrics.actualBoundingBoxAscent) / 2));
                    }

                    x += width;
                  }

                  for (const s of inline.source) {
                    if (s.highlight) {
                      backContext.font = boldFont;
                    } else {
                      backContext.font = normalFont;
                    }

                    const textMetrics = backContext.measureText(s.text);

                    offset += Math.abs(textMetrics.actualBoundingBoxLeft) + Math.abs(textMetrics.actualBoundingBoxRight);
                  }

                  offset += margin
                }
              } while (offset - margin < backCanvas.width * 2);

              backContext.restore();
            }
          }
        }

        index++;
      }

      for (let i = pinches.length - 1; i >= 0; i--) {
        if (pinches[i].identifiers.every(x => touches.findIndex(y => x === y.identifier) >= 0)) {
          const speed = 2.0;
          const x = pinches[i].center.x + pinches[i].movement.x;
          const y = pinches[i].center.y + pinches[i].movement.y;
          const radius = Math.abs(pinches[i].radius);
                            
          pinches[i].current.x = lerp(pinches[i].current.x, x, deltaTime * speed);
          pinches[i].current.y = lerp(pinches[i].current.y, y, deltaTime * speed);
          pinches[i].current.radius = lerp(Math.abs(pinches[i].current.radius), radius, deltaTime * speed);

          if (Math.round(pinches[i].current.x) === Math.round(x)) {
            pinches[i].current.x = x;
          }

          if (Math.round(pinches[i].current.y) === Math.round(y)) {
            pinches[i].current.y = y;
          }

          if (Math.round(pinches[i].current.radius) === Math.round(radius)) {
            pinches[i].current.radius = radius;
          }

          backContext.fillStyle = "#000000";
          backContext.beginPath();
          backContext.arc(pinches[i].current.x * window.devicePixelRatio, pinches[i].current.y * window.devicePixelRatio, pinches[i].current.radius * window.devicePixelRatio, 0, 2 * Math.PI);
          backContext.fill()
          backContext.closePath();
        } else {
          const tension = 50.0;
          const mass = 1.0;
          const friction = 5.0;
          const displacement = pinches[i].current.radius;
          const tensionForce = -tension * displacement;
          const dampingForce = -friction * pinches[i].velocity;
          const acceleration = (tensionForce + dampingForce) / mass;

          pinches[i].active = false;
          pinches[i].velocity += acceleration * deltaTime;
          pinches[i].current.radius += pinches[i].velocity * deltaTime;

          if (Math.abs(pinches[i].velocity) < 0.1) {
            pinches.splice(i, 1);
          } else {
            backContext.fillStyle = "#000000";
            backContext.beginPath();
            backContext.arc(pinches[i].current.x * window.devicePixelRatio, pinches[i].current.y * window.devicePixelRatio, Math.abs(pinches[i].current.radius) * window.devicePixelRatio, 0, 2 * Math.PI);
            backContext.fill()
            backContext.closePath();
          }
        }
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

      backContext.globalCompositeOperation = "source-atop";

      if (background.color === null) {
        backContext.fillStyle = window.getComputedStyle(document.documentElement).getPropertyValue("--background-color");
      } else {
        backContext.fillStyle = background.color;
      }

      backContext.fillRect(0, 0, backCanvas.width, backCanvas.height);

      if (!tracker.active && (tracker.velocity.x !== 0 || tracker.velocity.y !== 0)) {
        const epsilon = 0.01;
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

        if (Math.abs(tracker.velocity.x) < epsilon) {
          tracker.velocity.x = 0;
        }

        if (Math.abs(tracker.velocity.y) < epsilon) {
          tracker.velocity.y = 0;
        }

        tracker.movement.x += tracker.velocity.x * deltaTime;
        tracker.movement.y += tracker.velocity.y * deltaTime;
      }

      if (animations.length > 0) {
        let count = animations.length;
        let frame = animations[0];
        let delay = Math.max(frame.delay, 0.01);

        frame.time += deltaTime;

        while (frame.time >= delay) {
          const time = frame.time - delay;

          frame.time = 0;
          animations.push(animations.shift());
          frame = animations[0];
          count--;

          if (count > 0) {
            frame.time = time;
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
                tracker.velocity.y = -Math.abs(tracker.velocity.y);
              }

              tracker.movement.y = insetTop;
            } else if (insetBottom > tracker.movement.y) {
              if (tracker.active) {
                tracker.edge = true;
              } else if (!tracker.edge) {
                tracker.velocity.y = Math.abs(tracker.velocity.y);
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
                tracker.velocity.x = -Math.abs(tracker.velocity.x);
              }

              tracker.movement.x = insetLeft;
            } else if (insetRight > tracker.movement.x) {
              if (tracker.active) {
                tracker.edge = true;
              } else if (!tracker.edge) {
                tracker.velocity.x = Math.abs(tracker.velocity.x);
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

          const offscreenCanvas = new OffscreenCanvas(backCanvas.width, backCanvas.height);
          const context = offscreenCanvas.getContext("2d");

          context.scale(backCanvas.width / Math.floor(sw), backCanvas.height / Math.floor(sh));
          context.drawImage(frame.image, -Math.round(sx), -Math.round(sy));
          
          backContext.drawImage(offscreenCanvas, 0, 0);
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
});
window.addEventListener("resize", event => {
  const frame = document.body.querySelector("#app>.container>.wrap>.frame");
  const canvas = frame.querySelector(":scope>.wall>canvas");
  const rect = frame.getBoundingClientRect();

  canvas.width = Math.floor(rect.width * window.devicePixelRatio);
  canvas.height = Math.floor(rect.height * window.devicePixelRatio);
  canvas.style.width = `${Math.floor(rect.width)}px`;
  canvas.style.height = `${Math.floor(rect.height)}px`;
});
window.addEventListener("mousedown", async event => {
  if (event.button === 0 && tracker.identifier === null) {
    const rect = document.body.querySelector("#app>.container>.wrap>.frame>.wall").getBoundingClientRect();
    const x = event.clientX - rect.x;
    const y = event.clientY - rect.y;
    const timestamp = event.timeStamp / 1000;

    tracker.active = true;
    tracker.position.x = x;
    tracker.position.y = y;
    tracker.timestamp = timestamp;
    tracker.velocity.x = tracker.velocity.y = 0;

    if (background.cache === null) {
      background.cache = [];

      try {
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

        background.cache = null;
      }
    }

    if (background.cache !== null && background.cache.length > 0 && !background.particles.some(x => timestamp - x.timestamp < 0.1)) {
      for (let i = random(0, 4); i > 0; i--) {
        background.particles.unshift({ elapsed: -1, x: x, y: y, image: background.cache[random(0, background.cache.length)], timestamp: timestamp });
      }
    }
  }
});
window.addEventListener("mousemove", async event => {
  const rect = document.body.querySelector("#app>.container>.wrap>.frame>.wall").getBoundingClientRect();
  const x = event.clientX - rect.x;
  const y = event.clientY - rect.y;
  const canvas = document.body.querySelector("#app>.container>.wrap>.frame>.wall>canvas");
  
  tracker.mouse.x = x;
  tracker.mouse.y = y;
  
  if (canvas !== null) {
    const lineHeight = canvas.height / window.devicePixelRatio / background.blocks.length;
    const fontSize = Math.ceil(background.blocks.length === 1 ? lineHeight : lineHeight / 1.5);

    for (let i = 0; i < background.blocks.length; i++) {
      const top = (lineHeight - fontSize) / 2.0 + lineHeight * i;
      
      if (top <= y && y < top + fontSize && !background.blocks[i].scroll.requested) {
        background.blocks[i].scroll.requested = true;
      }
    }
  }

  if (tracker.active && tracker.identifier === null) {
    const timestamp = event.timeStamp / 1000;
    const deltaX = x - tracker.position.x;
    const deltaY = y - tracker.position.y;
    const deltaTime = timestamp - tracker.timestamp;
    
    tracker.position.x = x;
    tracker.position.y = y;
    tracker.timestamp = timestamp;

    if (animations.length > 0 && animations[0].image !== null) {
      const canvasAspect = canvas.width / canvas.height;
      const imageAspect = animations[0].image.width / animations[0].image.height;
      
      if (canvasAspect > imageAspect) {
        tracker.movement.y += deltaY;

        if (deltaTime > 0) {
          tracker.velocity.y = Math.max(Math.min(deltaY / deltaTime, 1000), -1000);
        }
      } else {
        tracker.movement.x += deltaX;

        if (deltaTime > 0) {
          tracker.velocity.x = Math.max(Math.min(deltaX / deltaTime, 1000), -1000);
        }
      }
    }

    if (background.cache === null) {
      background.cache = [];
      
      try {
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

        background.cache = null;
      }
    }

    if (background.cache !== null && background.cache.length > 0 && !background.particles.some(x => timestamp - x.timestamp < 0.1)) {
      for (let i = random(0, 4); i > 0; i--) {
        background.particles.unshift({ elapsed: -1, x: x, y: y, image: background.cache[random(0, background.cache.length)], timestamp: timestamp });
      }
    }
  }
});
window.addEventListener("mouseup", event => {
  if (event.button === 0 && tracker.identifier === null) {
    const canvas = document.body.querySelector("#app>.container>.wrap>.frame>.wall>canvas");

    if (canvas !== null) {
      const y = event.clientY - document.body.querySelector("#app>.container>.wrap>.frame>.wall").getBoundingClientRect().y;
      const lineHeight = canvas.height / window.devicePixelRatio / background.blocks.length;
      const fontSize = Math.ceil(background.blocks.length === 1 ? lineHeight : lineHeight / 1.5);
  
      for (let i = 0; i < background.blocks.length; i++) {
        const top = (lineHeight - fontSize) / 2.0 + lineHeight * i;
        
        if (top <= y && y < top + fontSize) {
          for (let j = background.blocks[i].inlines.length - 1; j >= 0; j--) {
            if (background.blocks[i].caches.length > 0 && background.blocks[i].inlines[j].running) {
              background.blocks[i].inlines[j].type.reverse = true;

              if (background.blocks[i].index === null) {
                background.blocks[i].index = 1;
              } else {
                background.blocks[i].index++;
              }
            }
          }

          if (!background.blocks[i].scroll.requested) {
            background.blocks[i].scroll.requested = true;
          }
        }
      }
    }

    tracker.active = false;
  }
});
window.addEventListener("wheel", async event => {
  event.preventDefault();

  const timestamp = event.timeStamp / 1000;

  tracker.movement.x -= event.deltaX;
  tracker.movement.y -= event.deltaY;

  if (background.cache === null) {
    background.cache = [];
    
    try {
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

      background.cache = null;
    }
  }

  if (background.cache !== null && background.cache.length > 0 && !background.particles.some(x => timestamp - x.timestamp < 0.1)) {
    for (let i = random(0, 4); i > 0; i--) {
      background.particles.unshift({ elapsed: -1, x: tracker.mouse.x, y: tracker.mouse.y, image: background.cache[random(0, background.cache.length)], timestamp: timestamp });
    }
  }
}, { passive: false });
window.addEventListener("dblclick", event => {
  refresh(event);
});
window.addEventListener("touchstart", async event => {
  event.stopPropagation();

  for (const touch of event.changedTouches) {
    if (touches.length < 2) {
      const rect = document.body.querySelector("#app>.container>.wrap>.frame>.wall").getBoundingClientRect();
      const x = touch.clientX - rect.x;
      const y = touch.clientY - rect.y;

      touches.push({ identifier: touch.identifier, position: { x: x, y: y }, movement: { x: 0, y: 0 }, velocity: { x: 0, y: 0 }, timestamp: event.timeStamp / 1000 });
    }
  }

  if (touches.length === 1) {
    const timestamp = event.timeStamp / 1000;

    tracker.active = true;
    tracker.velocity.x = tracker.velocity.y = 0;

    touches[0].movement.x = tracker.movement.x;
    touches[0].movement.y = tracker.movement.y;

    if (background.cache === null) {
      background.cache = [];
      
      try {
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

        background.cache = null;
      }
    }

    if (background.cache !== null && background.cache.length > 0 && !background.particles.some(x => timestamp - x.timestamp < 0.1)) {
      for (let i = random(0, 4); i > 0; i--) {
        background.particles.unshift({ elapsed: -1, x: touches[0].position.x, y: touches[0].position.y, image: background.cache[random(0, background.cache.length)], timestamp: timestamp });
      }
    }
  } else if (typeof pinches.find(x => x.identifiers.every(y => touches.findIndex(z => y === z.identifier) >= 0)) === "undefined") {
    let centerX = 0;
    let centerY = 0;
    let sum = 0;
    let identifiers = [];

    tracker.active = false;
    tracker.velocity.x = 0;
    tracker.velocity.y = 0;

    for (const touch of touches) {
      identifiers.push(touch.identifier);
      centerX += touch.position.x;
      centerY += touch.position.y;
    }

    centerX /= touches.length;
    centerY /= touches.length;

    for (const touch of touches) {
      sum += Math.sqrt((centerX - touch.position.x) * (centerX - touch.position.x) + (centerY - touch.position.y) * (centerY - touch.position.y));
    }

    pinches.push({ active: true, identifiers: identifiers, center: { x: centerX, y: centerY }, movement: { x: 0, y: 0 }, radius: sum / touches.length, velocity: 0, current: { x: centerX, y: centerY, radius: 0 } });
  }
});
window.addEventListener("touchmove", async event => {
  event.stopPropagation();

  for (const touch of event.changedTouches) {
    const index = touches.findIndex(x => x.identifier === touch.identifier);

    if (index >= 0) {
      const rect = document.body.querySelector("#app>.container>.wrap>.frame>.wall").getBoundingClientRect();
      const x = touch.clientX - rect.x;
      const y = touch.clientY - rect.y;
      const timestamp = event.timeStamp / 1000;
      const deltaX = x - touches[index].position.x;
      const deltaY = y - touches[index].position.y;
      const deltaTime = timestamp - touches[index].timestamp;

      touches[index].position.x = x;
      touches[index].position.y = y;
      touches[index].timestamp = timestamp;
      touches[index].movement.x += deltaX;
      touches[index].movement.y += deltaY;

      if (deltaTime > 0) {
        touches[index].velocity.x = Math.max(Math.min(deltaX / deltaTime, 1000), -1000);
        touches[index].velocity.y = Math.max(Math.min(deltaY / deltaTime, 1000), -1000);
      }
    }
  }

  if (touches.length === 1) {
    const canvas = document.body.querySelector("#app>.container>.wrap>.frame>.wall>canvas");
    
    if (canvas !== null) {
      const lineHeight = canvas.height / window.devicePixelRatio / background.blocks.length;
      const fontSize = Math.ceil(background.blocks.length === 1 ? lineHeight : lineHeight / 1.5);
      
      if (animations.length > 0 && animations[0].image !== null) {
        const canvasAspect = canvas.width / canvas.height;
        const imageAspect = animations[0].image.width / animations[0].image.height;
        
        if (canvasAspect > imageAspect) {
          tracker.movement.y = touches[0].movement.y;
          tracker.velocity.y = touches[0].velocity.y;
        } else {
          tracker.movement.x = touches[0].movement.x;
          tracker.velocity.x = touches[0].velocity.x;
        }
      }

      for (let i = 0; i < background.blocks.length; i++) {
        const top = (lineHeight - fontSize) / 2.0 + lineHeight * i;
        
        if (top <= touches[0].position.y && touches[0].position.y < top + fontSize && !background.blocks[i].scroll.requested) {
          background.blocks[i].scroll.requested = true;
        }
      }
    }

    if (background.cache === null) {
      background.cache = [];
      
      try {
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

        background.cache = null;
      }
    }

    if (background.cache !== null && background.cache.length > 0 && !background.particles.some(x => touches[0].timestamp - x.timestamp < 0.1)) {
      for (let i = random(0, 4); i > 0; i--) {
        background.particles.unshift({ elapsed: -1, x: touches[0].position.x, y: touches[0].position.y, image: background.cache[random(0, background.cache.length)], timestamp: touches[0].timestamp });
      }
    }
  } else {
    let index = pinches.findIndex(x => x.identifiers.every(y => touches.findIndex(z => y === z.identifier) >= 0));

    if (index >= 0 && pinches[index].active) {
      let movementX = 0;
      let movementY = 0;
      let sum = 0;

      for (const touch of touches) {
        movementX += touch.movement.x;
        movementY += touch.movement.y;
      }

      movementX /= touches.length;
      movementY /= touches.length;

      for (const touch of touches) {
        sum += Math.sqrt((pinches[index].center.x + movementX - touch.position.x) * (pinches[index].center.x + movementX - touch.position.x) + (pinches[index].center.y + movementY - touch.position.y) * (pinches[index].center.y + movementY - touch.position.y));
      }

      pinches[index].movement.x = movementX;
      pinches[index].movement.y = movementY;
      pinches[index].radius = sum / touches.length;
    }
  }
});
window.addEventListener("touchend", event => {
  event.stopPropagation();

  tracker.active = false;

  if (touches.length === 1) {
    const canvas = document.body.querySelector("#app>.container>.wrap>.frame>.wall>canvas");
    
    if (canvas !== null) {
      const lineHeight = canvas.height / window.devicePixelRatio / background.blocks.length;
      const fontSize = Math.ceil(background.blocks.length === 1 ? lineHeight : lineHeight / 1.5);
      
      for (let i = 0; i < background.blocks.length; i++) {
        const top = (lineHeight - fontSize) / 2.0 + lineHeight * i;
        
        if (top <= touches[0].position.y && touches[0].position.y < top + fontSize) {
          for (let j = background.blocks[i].inlines.length - 1; j >= 0; j--) {
            if (background.blocks[i].caches.length > 0 && background.blocks[i].inlines[j].running) {
              background.blocks[i].inlines[j].type.reverse = true;

              if (background.blocks[i].index === null) {
                background.blocks[i].index = 1;
              } else {
                background.blocks[i].index++;
              }
            }
          }

          if (!background.blocks[i].scroll.requested) {
            background.blocks[i].scroll.requested = true;
          }
        }
      }
    }
  }

  for (const touch of event.changedTouches) {
    let index = touches.findIndex(x => x.identifier === touch.identifier);

    if (index >= 0) {
      touches.splice(index, 1);
    }
  }
});
window.addEventListener("touchcancel", event => {
  event.stopPropagation();

  tracker.active = false;

  for (const touch of event.changedTouches) {
    let index = touches.findIndex(x => x.identifier === touch.identifier);

    if (index >= 0) {
      touches.splice(index, 1);
    }
  }
});
window.addEventListener("keyup", event => {
  if (event.code === "Space") {
    refresh(event);
  }
});
