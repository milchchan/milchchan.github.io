//import * as THREE from "three";
//import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
//import { VRMLoaderPlugin, VRMUtils } from "@pixiv/three-vrm";
//import { VRMAnimationLoaderPlugin, createVRMAnimationHumanoidTracks } from "@pixiv/three-vrm-animation";

function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min)) + min;
}

function lerp(a, b, t) {
  return a + t * (b - a)
}

export class Animation {
  constructor(name = null, state = null, repeats = 1, frames = null, url = null, animations = []) {
    this.name = name;
    this.state = state;
    this.repeats = repeats;
    this.time = 0.0;
    this.hasFrames = frames !== null;
    this.frames = frames ?? [];
    this.url = url;
    this.clip = null;
    this.animations = animations;
    this.steps = null;
  }

  static fromJSON(json, baseUrl = null) {
    const resolveURL = value => typeof value === "string" ? (baseUrl === null ? value : new URL(value, baseUrl).href) : null;
    const frames = Array.isArray(json.frames) ? json.frames.map(frame => ({
      ...frame,
      x: frame.x ?? 0,
      y: frame.y ?? 0,
      width: frame.width ?? 0,
      height: frame.height ?? 0,
      z: Math.trunc(frame.z ?? 0),
      type: typeof frame.type === "string" ? frame.type : null,
      opacity: frame.opacity ?? 1.0,
      delay: Math.max(frame.delay ?? 0, 0.01),
      url: resolveURL(frame.url)
    })) : null;

    return new Animation(
      typeof json.name === "string" ? json.name : null,
      typeof json.state === "string" ? json.state : null,
      typeof json.repeats === "number" ? Math.max(0, Math.trunc(json.repeats)) : 1,
      frames,
      resolveURL(json.url),
      Array.isArray(json.animations) ? json.animations.map(animation => Animation.fromJSON(animation, baseUrl)) : []
    );
  }

  get isEmpty() {
    return !this.hasFrames && this.frames.length === 0 && this.url === null && this.clip === null && this.animations.length === 0 && this.steps === null;
  }

  *walk() {
    const stack = [this];

    while (stack.length > 0) {
      const animation = stack.pop();

      yield animation;
      stack.push(...animation.animations.toReversed());
    }
  }

  get duration() {
    if (this.steps !== null) {
      return this.steps.reduce((duration, animation) => {
        if (animation.clip !== null) {
          return duration + animation.duration;
        }

        const tracks = new Map();

        for (const frame of animation.frames) {
          const key = JSON.stringify([frame.z ?? 0, frame.type ?? null]);

          tracks.set(key, (tracks.get(key) ?? 0) + frame.delay);
        }

        return duration + Math.max(0, ...tracks.values()) * Math.max(animation.repeats, 1);
      }, 0);
    }

    let duration = this.clip?.duration ?? 0.0;

    if (this.clip === null) {
      for (const frame of this.frames) {
        duration += frame.delay;
      }
    }

    if (this.clip !== null && this.repeats === 0) {
      return Infinity;
    }
    
    if (this.repeats > 1) {
      duration *= this.repeats;
    }

    return duration;
  }

  get current() {
    if (this.frames.length === 0) {
      return null;
    }

    let time = this.time;
    let frame = this.frames[0];
    
    if (this.repeats !== 1) {
      let duration = 0.0
      
      for (const frame of this.frames) {
        duration += frame.delay;
      }
      
      if (this.repeats > 1 && time >= duration * this.repeats) {
        time = duration;
      } else {
        time = time % duration;
      }
    }
    
    if (time >= frame.delay) {
      let delay = frame.delay;
      
      for (let i = 1; i < this.frames.length; i++) {
        frame = this.frames[i];
        delay += frame.delay;
          
        if (time < delay) {
            break;
        }
      }
    }
    
    return frame;
  }
}

export class Runtime {
  constructor(animations = []) {
    this.animations = animations;
    this.states = Object.create(null);
  }

  /**
   * Select a named variant and return an Animation with ordered, flattened steps.
   * Omitted state uses remembered state; an empty string clears it. No match returns null.
   */
  run(name, state = null) {
    const selected = this.select(this.animations.filter(animation => animation.name === name), state);

    if (selected === null) {
      return null;
    }

    const prepared = new Animation(selected.name, selected.state);
    const stack = [{ animation: selected, index: -1 }];
    let calls = 0;

    prepared.steps = [];

    while (stack.length > 0) {
      const current = stack[stack.length - 1];
      const animation = current.animation;

      if (current.index === -1) {
        if (animation.hasFrames || animation.frames.length > 0 || animation.url !== null || animation.clip !== null) {
          const step = new Animation(animation.name, animation.state, animation.repeats,
            animation.hasFrames || animation.frames.length > 0 ? animation.frames.map(frame => ({ ...frame })) : null, animation.url);

          step.clip = animation.clip;
          prepared.steps.push(step);
        }

        current.index = 0;
      }

      if (current.index >= animation.animations.length) {
        stack.pop();

        continue;
      }

      const child = animation.animations[current.index++];

      if (child.isEmpty && ++calls <= 10000) {
        const called = this.select(this.getCallableAnimations(child).filter(candidate => candidate.name === child.name), child.state);

        if (called !== null) {
          stack.push({ animation: called, index: -1 });
        }
      }
    }

    return prepared.steps.length > 0 ? prepared : null;
  }

  select(animations, state) {
    let candidates = [];

    for (const animation of animations) {
      if (animation.state === null) {
        continue;
      }

      if (state === "") {
        if (animation.name !== null) {
          delete this.states[animation.name];
        }

        continue;
      }

      const input = state ?? (animation.name === null ? null : this.states[animation.name]);

      if (input != null) {
        const match = new RegExp(animation.state).exec(input);

        if (match !== null && match[0].length > 0) {
          candidates.push(animation);
        }
      }
    }

    if (candidates.length === 0) {
      candidates = animations.filter(animation => animation.state === null);
      state = null;
    }

    if (candidates.length === 0) {
      return null;
    }

    const selected = candidates[random(0, candidates.length)];

    if (selected.name !== null && state !== null) {
      this.states[selected.name] = state;
    }

    return selected;
  }

  getCallableAnimations(reference) {
    const callable = [];

    for (const source of this.animations) {
      const stack = [{ animation: source, path: [source] }];
      let path = null;

      while (stack.length > 0) {
        const current = stack.pop();

        if (current.animation === reference) {
          path = current.path;

          break;
        }

        for (const child of current.animation.animations.toReversed()) {
          stack.push({ animation: child, path: [...current.path, child] });
        }
      }

      const visible = new Set([source]);

      if (path !== null) {
        for (let i = 0; i < path.length - 1; i++) {
          for (const child of path[i].animations) {
            if (!child.isEmpty) {
              visible.add(child);
            }

            if (child === path[i + 1]) {
              break;
            }
          }
        }
      }

      callable.push(...visible);
    }

    return callable;
  }
}

export class Agent {
  constructor(scale = 1.0, temperature = 1.0) {
    const fontFamily = window.getComputedStyle(document.documentElement).getPropertyValue("--apricot-font-family");

    this.isDebug = false;
    this.isLoading = false;
    this.domElement = null;
    this.size = { width: 0, height: 0 };
    this.scale = scale;
    this.model = null;
    this.temperature = temperature;
    this.character = null;
    this.characterCanvas = null;
    this.likabilityCanvas = null;
    this.loadingCanvas = null;
    this.balloonCanvas = null;
    this.isPaused = false;
    this.previousTime = performance.now();
    this.stats = { time: this.previousTime, frames: 0, target: document.createElement("span") };
    this.balloonBackgroundColor = "rgb(0 0 0 / 0.75)";
    this.balloonRadius = 48;
    this.balloonWidth = null;
    this.maxLines = 5;
    this.messageHeight = 0;
    this.messageQueue = [];
    this.currentAnimations = [];
    this.pendingAnimations = [];
    this.commandQueue = [];
    this.runtime = new Runtime();
    this.cachedImages = {};
    this.vrm = null;
    this.vrmScene = null;
    this.vrmCamera = null;
    this.vrmRenderer = null;
    this.vrmMixer = null;
    this.vrmExpressionTime = 0.0;
    this.vrmNextBlinkTime = 3.0;
    this.elapsedTime = 0.0;
    this.maxDuration = 0.0;
    this.textColor = "rgb(255 255 255)";
    this.accentColor = "#ffc7e5";
    this.lineHeight = 32;
    this.fontSize = 16;
    this.fontWeight = "bold";
    this.fontFamily = fontFamily.length === 0 ? "sans-serif" : fontFamily;
    this.idleTime = 0.0;
    this.loadingStep = null;
    this.blinkStep = 0.0;
    this.isPopup = false;
    this.revealStep = null;
    this.choices = [];
    this.likability = {a: 0.0, b: null};
    this.logs = [];
    this.maxLogs = 10;
    this.apiUrl = "https://milchchan.com/api/generate";
    this.apiKey = null;
    this.reasoning = null;
    this.tools = null;
    this.onresized = null;
    this.onclick = null;
    this.ongenerated = null;
    this.onchose = (choice) => {
      this.ask(choice);
    }
    this.onidle = null;
    this.onquit = null;
  }
  
  get dom() {
    return this.domElement;
  }

  get is3D() {
    return this.character?.model != null;
  }

  parseCharacter(json, baseUrl = null) {
    if (typeof json?.name !== "string" || typeof json.width !== "number" || typeof json.height !== "number") {
      throw new TypeError("A character requires a name, width, and height.");
    }

    if (json.camera != null) {
      const { x, y, z, target, fov } = json.camera;

      if (![x, y, z].every(Number.isFinite)) {
        throw new TypeError("A camera requires finite x, y, and z coordinates.");
      }

      if (target != null && ![target.x, target.y, target.z].every(Number.isFinite)) {
        throw new TypeError("A camera target requires finite x, y, and z coordinates.");
      }

      if (fov != null && (!Number.isFinite(fov) || fov <= 0 || fov >= 180)) {
        throw new TypeError("A camera fov must be greater than 0 and less than 180 degrees.");
      }
    }

    return {
      ...json,
      x: json.x ?? 0,
      y: json.y ?? 0,
      scale: json.scale ?? 1.0,
      model: typeof json.model === "string" ? (baseUrl === null ? json.model : new URL(json.model, baseUrl).href) : null,
      animations: Array.isArray(json.animations) ? json.animations.map(animation => Animation.fromJSON(animation, baseUrl)) : []
    };
  }

  async load(url) {
    try {
      let response = await fetch(url, {
        mode: "cors",
        method: "GET"
      });

      if (response.ok) {
        const characterUrl = response.url || url;
        const character = this.parseCharacter(await response.json(), characterUrl);

        if (typeof character.prompt === "string" && /\.(?:txt|md)$/i.test(character.prompt)) {
          response = await fetch(new URL(character.prompt, characterUrl).href, {
            mode: "cors",
            method: "GET"
          });
    
          if (response.ok) {
            character.prompt = await response.text();
          }
        }

        if (Array.isArray(character.prompt)) {
          const prompts = [];

          for (const path of character.prompt) {
            if (typeof path === "string" && /\.(?:txt|md)$/i.test(path)) {
              response = await fetch(new URL(path, characterUrl).href, { mode: "cors", method: "GET" });

              if (response.ok) {
                prompts.push(await response.text());
              }
            }
          }

          character.prompt = prompts.join("\n");
        }

        this.character = character;
        this.runtime = new Runtime(character.animations);
      }
    } catch (error) {
      console.error(error);
    }

    if (this.balloonWidth === null) {
      this.balloonWidth = this.character.width;
    }

    if (!this.is3D) {
      for (const animation of this.character.animations.flatMap(animation => [...animation.walk()])) {
        for (const frame of animation.frames) {
          if (frame.url !== null && frame.url in this.cachedImages === false) {
            const image = await new Promise((resolve) => {
              const image = new Image();

              image.onload = () => {
                resolve(image);
              };
              image.onerror = (error) => {
                resolve(error);
              };
              image.src = frame.url;
            });

            if (!(image instanceof Event) || image.type !== "error") {
              this.cachedImages[frame.url] = image;
            } else {
              console.error(image);
            }
          }
        }
      }
    }

    const [parentElement, characterCanvas, balloonCanvas, likabilityCanvas, loadingCanvas] = await new Promise(async (resolve, reject) => {
      const width = this.character.width * this.scale;
      const height = this.character.height * this.scale;
      const parentElement = document.createElement("div");
      const characterCanvas = document.createElement("canvas");
      const balloonCanvas = document.createElement("canvas");
      const likabilityCanvas = document.createElement("canvas");
      const loadingCanvas = document.createElement("canvas");
      
      parentElement.id = "apricot";
      parentElement.style.display = "flex";
      parentElement.style.position = "absolute";
      parentElement.style.left = "0";
      parentElement.style.right = "0";
      parentElement.style.bottom = "0";
      parentElement.style.margin = "0 auto";
      parentElement.style.width = "fit-content";
      parentElement.style.height = "fit-content";
      parentElement.style.userSelect = "none";
      parentElement.style.setProperty("-webkit-user-select", "none");

      characterCanvas.classList.add("character");
      characterCanvas["backBuffer"] = document.createElement("canvas");
      characterCanvas.width = Math.floor(width * window.devicePixelRatio);
      characterCanvas.height = Math.floor(height * window.devicePixelRatio);
      characterCanvas.style.bottom = 0;
      characterCanvas.style.width = `${Math.floor(width)}px`;
      characterCanvas.style.height = `${Math.floor(height)}px`;
      characterCanvas.style.backgroundColor = "transparent";
      characterCanvas.style.opacity = 0;
      characterCanvas.style.userSelect = "none";
      characterCanvas.style.setProperty("-webkit-user-select", "none");
      characterCanvas.addEventListener("click", (event) => {
        if (this.onclick !== null) {
          this.onclick(event);
        }

        if (this.isPopup) {
          this.isPopup = false;

          for (const popupElement of document.body.querySelectorAll("#apricot div.popup")) {
            popupElement.animate([
              {
                transform: "translate3d(-50%, 50%, 0) scale(1.1, 1.1)",
                opacity: "0"
              }
            ], {
              fill: "forwards",
              duration: 500,
              iterations: 1,
              easing: "ease-in"
            }).onfinish = () => {
              popupElement.remove();
            };
          }
        } else if (!this.isLoading && this.choices.length > 0 || this.onquit !== null) {
          this.popup(this.choices);
        }
      });

      balloonCanvas.classList.add("balloon");
      balloonCanvas["backBuffer"] = document.createElement("canvas");
      balloonCanvas.style.position = "absolute";
      balloonCanvas.width = Math.floor(this.balloonWidth * window.devicePixelRatio);
      balloonCanvas.height = 0;
      balloonCanvas.style.left = `${Math.floor(-(this.balloonWidth - this.character.width * this.scale) / 2 + this.character.x)}px`;
      balloonCanvas.style.bottom = `${Math.floor(height - this.character.y * this.scale)}px`;
      balloonCanvas.style.width = `${Math.floor(this.balloonWidth)}px`;
      balloonCanvas.style.height = "0px";
      balloonCanvas.style.backgroundColor = "transparent";
      balloonCanvas.style.opacity = 0;
      balloonCanvas.style.visibility = "collapse";
      balloonCanvas.style.backfaceVisibility = "hidden";
      balloonCanvas.style.transformOrigin = "50% 100%";
      balloonCanvas.style.transform = "scale(0.0, 0.0)";
      balloonCanvas.style.userSelect = "none";
      balloonCanvas.style.setProperty("-webkit-user-select", "none");
      balloonCanvas.addEventListener("click", (event) => {
        if (this.messageQueue.length > 0) {
          this.messageQueue[0].speed = 2.0;
          this.messageQueue[0].reverse = true;
        }
      });
      balloonCanvas.addEventListener("pointerenter", () => {
        this.isPaused = true;
      });
      balloonCanvas.addEventListener("pointerleave", () => {
        this.isPaused = false;
      });

      likabilityCanvas.classList.add("likability");
      likabilityCanvas["backBuffer"] = document.createElement("canvas");
      likabilityCanvas.style.position = "absolute";
      likabilityCanvas.width = 32.0 * window.devicePixelRatio;
      likabilityCanvas.height = 32.0 * window.devicePixelRatio;
      likabilityCanvas.style.left = `${Math.floor(-(32.0 - this.character.width * this.scale) / 2 + this.character.x)}px`;
      likabilityCanvas.style.bottom = "0px";
      likabilityCanvas.style.borderRadius = "16px";
      likabilityCanvas.style.width = `${Math.floor(32.0)}px`;
      likabilityCanvas.style.height = `${Math.floor(32.0)}px`;
      likabilityCanvas.style.backgroundColor = this.balloonBackgroundColor;
      likabilityCanvas.style.visibility = "collapse";
      likabilityCanvas.style.userSelect = "none";
      likabilityCanvas.style.setProperty("-webkit-user-select", "none");
      likabilityCanvas.style.setProperty("-webkit-app-region", "drag");
      const preventPassThrough = () => {
        if ("api" in window) {
          window.api.setPassThrough(false);
        }
      };

      likabilityCanvas.addEventListener("pointermove", (event) => {
        preventPassThrough();
        event.stopImmediatePropagation();
      });
      likabilityCanvas.addEventListener("pointerenter", preventPassThrough);
      likabilityCanvas.addEventListener("mousemove", (event) => {
        preventPassThrough();
        event.stopImmediatePropagation();
      });
      likabilityCanvas.addEventListener("mouseenter", preventPassThrough);

      loadingCanvas.classList.add("loading");
      loadingCanvas["backBuffer"] = document.createElement("canvas");
      loadingCanvas.style.position = "absolute";
      loadingCanvas.width = 8.0 * 5.0 * window.devicePixelRatio;
      loadingCanvas.height = 8.0 * window.devicePixelRatio;
      loadingCanvas.style.left = `${Math.floor(-(8.0 * 5.0 - this.character.width * this.scale) / 2 + this.character.x)}px`;
      loadingCanvas.style.bottom = `${Math.floor(height - this.character.y * this.scale)}px`;
      loadingCanvas.style.width = `${Math.floor(8.0 * 5.0)}px`;
      loadingCanvas.style.height = `${Math.floor(8.0)}px`;
      loadingCanvas.style.backgroundColor = "transparent";
      loadingCanvas.style.visibility = "collapse";
      loadingCanvas.style.pointerEvents = "none";
      loadingCanvas.style.userSelect = "none";
      loadingCanvas.style.setProperty("-webkit-user-select", "none");

      parentElement.appendChild(characterCanvas);
      parentElement.appendChild(likabilityCanvas);
      parentElement.appendChild(loadingCanvas);
      parentElement.appendChild(balloonCanvas);
      
      resolve([parentElement, characterCanvas, balloonCanvas, likabilityCanvas, loadingCanvas]);
    });

    this.size.width = Math.max(this.character.width * this.scale, this.balloonWidth * 1.1);
    this.size.height = Math.max(Math.max(this.character.height * this.scale, (this.character.height - this.character.y) * this.scale + 8), (this.character.height - this.character.y) * this.scale + (this.lineHeight * this.maxLines + this.lineHeight * 2 + 11) * 1.1);

    this.stats.target.classList.add("stats");
    this.stats.target.innerText = "0";
    this.stats.target.style.visibility = this.isDebug ? "visible" : "collapse";
    this.stats.target.style.position = "absolute";
    this.stats.target.style.right = "0";
    this.stats.target.style.bottom = "0";
    this.stats.target.style.fontFamily = this.fontFamily;
    
    this.domElement = parentElement;
    this.characterCanvas = characterCanvas;
    this.balloonCanvas = balloonCanvas;
    this.likabilityCanvas = likabilityCanvas;
    this.loadingCanvas = loadingCanvas;
    this.domElement.appendChild(this.stats.target);

    if (this.is3D) {
      await this.setupVRM();
      await this.loadVRMAnimations();
      this.renderVRM(0.0);
    }

    if (this.onresized !== null) {
      this.onresized();
    }

    return this.domElement;
  }

  async setupVRM() {
    const width = Math.max(1, Math.floor(this.character.width * this.scale));
    const height = Math.max(1, Math.floor(this.character.height * this.scale));
    const loader = new GLTFLoader();

    loader.register((parser) => {
      return new VRMLoaderPlugin(parser);
    });

    this.vrmRenderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      premultipliedAlpha: false
    });
    this.vrmRenderer.setPixelRatio(window.devicePixelRatio);
    this.vrmRenderer.setSize(width, height, false);
    this.vrmRenderer.setClearColor(0x000000, 0.0);
    this.vrmRenderer.outputColorSpace = THREE.SRGBColorSpace;

    this.vrmScene = new THREE.Scene();
    this.vrmCamera = new THREE.PerspectiveCamera(20.0, width / height, 0.01, 100.0);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.6);
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.0);

    keyLight.position.set(1.0, 1.6, 2.0);
    this.vrmScene.add(ambientLight);
    this.vrmScene.add(keyLight);

    const gltf = await loader.loadAsync(this.character.model);
    const vrm = gltf.userData.vrm;

    if (!vrm) {
      throw new Error(`VRM is not found: ${this.character.model}`);
    }

    if (vrm.meta && vrm.meta.metaVersion === "0") {
      VRMUtils.rotateVRM0(vrm);
    }

    vrm.scene.traverse((object) => {
      object.frustumCulled = false;
    });

    this.vrm = vrm;
    this.vrmMixer = new THREE.AnimationMixer(vrm.scene);
    this.vrmScene.add(vrm.scene);
    this.fitVRMCamera();
  }

  fitVRMCamera() {
    this.vrm.scene.updateWorldMatrix(true, true);

    const box = new THREE.Box3().setFromObject(this.vrm.scene);
    const size = new THREE.Vector3();
    const center = new THREE.Vector3();

    box.getSize(size);
    box.getCenter(center);

    const camera = this.character.camera;

    if (camera != null) {
      const target = center.clone();

      if (camera.target != null) {
        target.set(camera.target.x, camera.target.y, camera.target.z);
      }

      this.vrmCamera.fov = camera.fov ?? 60.0;
      this.vrmCamera.position.set(camera.x, camera.y, camera.z);
      this.vrmCamera.lookAt(target);
      this.vrmCamera.near = 0.01;
      this.vrmCamera.far = Math.max(100.0, this.vrmCamera.position.distanceTo(center) + size.length());
      this.vrmCamera.updateProjectionMatrix();

      return;
    }

    if (size.lengthSq() === 0.0) {
      this.vrmCamera.position.set(0.0, 1.2, 5.0);
      this.vrmCamera.lookAt(0.0, 1.2, 0.0);

      return;
    }

    const fov = THREE.MathUtils.degToRad(this.vrmCamera.fov);
    const distanceY = size.y / (2.0 * Math.tan(fov / 2.0));
    const distanceX = size.x / (2.0 * Math.tan(fov / 2.0) * this.vrmCamera.aspect);
    const distance = Math.max(distanceX, distanceY) * 1.12;
    const targetY = center.y + size.y * 0.04;

    this.vrmCamera.position.set(center.x, targetY, center.z + distance);
    this.vrmCamera.lookAt(center.x, targetY, center.z);
    this.vrmCamera.near = Math.max(0.01, distance - size.z * 2.0 - 1.0);
    this.vrmCamera.far = distance + size.z * 2.0 + 10.0;
    this.vrmCamera.updateProjectionMatrix();
  }

  async loadVRMAnimations() {
    const loader = new GLTFLoader();

    loader.register((parser) => {
      return new VRMAnimationLoaderPlugin(parser);
    });

    for (const animation of this.character.animations.flatMap(animation => [...animation.walk()])) {
      if (animation.url === null) {
        continue;
      }

      try {
        const gltf = await loader.loadAsync(animation.url);
        const vrmAnimation = gltf.userData.vrmAnimations?.[0];

        if (!vrmAnimation) {
          continue;
        }

        const humanoidTracks = createVRMAnimationHumanoidTracks(vrmAnimation, this.vrm.humanoid, this.vrm.meta.metaVersion);

        animation.clip = new THREE.AnimationClip(animation.name, vrmAnimation.duration, [
          ...humanoidTracks.translation.values(),
          ...humanoidTracks.rotation.values()
        ]);
      } catch (error) {
        console.error(error);
      }
    }
  }

  run(startup = () => {
    this.play("Start");
    this.ask();
  }) {
    const self = this;

    if (startup !== null) {
      startup();
    }
    
    function render(timestamp) {
      if (timestamp > self.previousTime) {
        const deltaTime = (timestamp - self.previousTime) / 1000;
  
        self.previousTime = timestamp;

        if (self.currentAnimations.length === 0 && self.pendingAnimations.length > 0) {
          const [nextAnimations, maxDuration] = self.setupAnimations(self.pendingAnimations.shift());

          self.currentAnimations.push(...nextAnimations);
          self.elapsedTime = 0.0;
          self.maxDuration = maxDuration;
        }

        if (self.currentAnimations.length === 0 && self.pendingAnimations.length === 0 && self.balloonCanvas.style.visibility !== "visible") {
          if (self.commandQueue.length > 0) {
            do {
              const command = self.commandQueue.shift();

              if (command === null) {
                break;
              } else if (typeof command === "string") {
                self.show(command);
              } else if (command instanceof Animation) {
                const [nextAnimations, maxDuration] = self.setupAnimations(command);

                self.currentAnimations.push(...nextAnimations);
                self.elapsedTime = 0.0;
                self.maxDuration = maxDuration;
              }
            } while (self.commandQueue.length > 0);
            
            self.idleTime = 0.0;
          } else {
            self.idleTime += deltaTime;

            if (self.onidle === null) {
              if (self.idleTime >= 10.0) {
                self.play("Idle");

                self.idleTime = 0.0;
              }
            } else {
              self.onidle();
            }
          }
        } else {
          self.idleTime = 0.0;
        }

        self.renderCharacter(deltaTime);
        self.renderLikability(deltaTime);
        self.renderLoading(deltaTime);
        self.renderBalloon(deltaTime);
      }

      self.stats.frames++;

      if (performance.now() - self.stats.time >= 1000) {
        self.stats.target.innerText = String(self.stats.frames);
        self.stats.time = performance.now();
        self.stats.frames = 0;
      }

      requestAnimationFrame(render);
    }

    requestAnimationFrame(render);

    this.characterCanvas.animate([
      {
        opacity: "1"
      }
    ], {
      fill: "forwards",
      duration: 500,
      iterations: 1,
      easing: "ease-out"
    }).onfinish = () => {
      this.characterCanvas.style.opacity = 1;
    };
  }

  ask(content = null) {
    this.isLoading = true;

    new Promise(async (resolve) => {
      let message = null;
      let likability = null;
      let animation = null;
      const choices = [];
      const logs = [];
      const messages = [{ role: "developer", content: `Today: ${new Date().toLocaleDateString()}\n\n${this.character.prompt}` }];
      const options = { mode: "cors", method: "POST" };

      if (this.apiKey === null) {
        for (const log of this.logs) {
          messages.push(log);
        }
        
        if (content !== null) {
          messages.push({ role: "user", content: content });
          logs.push({ role: "user", content: content });
        }

        options["headers"] = { "Content-Type": "application/json" };

        if (this.reasoning === null) {
          if (this.tools === null) {
            if (this.model === null) {
              options["body"] = JSON.stringify({ temperature: this.temperature, messages: messages });
            } else {
              options["body"] = JSON.stringify({ model: this.model, temperature: this.temperature, messages: messages });
            }
          } else if (this.model === null) {
            options["body"] = JSON.stringify({ temperature: this.temperature, messages: messages, tools: this.tools });
          } else {
            options["body"] = JSON.stringify({ model: this.model, temperature: this.temperature, messages: messages, tools: this.tools });
          }
        } else if (this.tools === null) {
          if (this.model === null) {
            options["body"] = JSON.stringify({ temperature: this.temperature, messages: messages, reasoning: this.reasoning });
          } else {
            options["body"] = JSON.stringify({ model: this.model, temperature: this.temperature, messages: messages, reasoning: this.reasoning });
          }
        } else if (this.model === null) {
          options["body"] = JSON.stringify({ temperature: this.temperature, messages: messages, reasoning: this.reasoning, tools: this.tools });
        } else {
          options["body"] = JSON.stringify({ model: this.model, temperature: this.temperature, messages: messages, reasoning: this.reasoning, tools: this.tools });
        }
      } else {
        for (const log of this.logs) {
          if (log.role === "developer") {
            messages.push(log);
          } else {
            const content = [];

            if (log.role === "user") {
              content.push({ type: "input_text", text: log.content });
            } else {
              content.push({ type: "output_text", text: log.content });
            }

            messages.push({ role: log.role, content: content });
          }
        }
        
        if (content !== null) {
          messages.push({ role: "user", content: [{ type: "input_text", text: content }] });
          logs.push({ role: "user", content: content });
        }

        options["headers"] = { "Authorization": `Bearer ${this.apiKey}`, "Content-Type": "application/json" };

        if (this.reasoning === null) {
          if (this.tools === null) {
            if (this.model === null) {
              options["body"] = JSON.stringify({ temperature: this.temperature, input: messages });
            } else {
              options["body"] = JSON.stringify({ model: this.model, temperature: this.temperature, input: messages });
            }
          } else if (this.model === null) {
            options["body"] = JSON.stringify({ temperature: this.temperature, input: messages, tools: this.tools });
          } else {
            options["body"] = JSON.stringify({ model: this.model, temperature: this.temperature, input: messages, tools: this.tools });
          }
        } else if (this.tools === null) {
          if (this.model === null) {
            options["body"] = JSON.stringify({ temperature: this.temperature, input: messages, reasoning: this.reasoning });
          } else {
            options["body"] = JSON.stringify({ model: this.model, temperature: this.temperature, input: messages, reasoning: this.reasoning });
          }
        } else if (this.model === null) {
          options["body"] = JSON.stringify({ temperature: this.temperature, input: messages, reasoning: this.reasoning, tools: this.tools });
        } else {
          options["body"] = JSON.stringify({ model: this.model, temperature: this.temperature, input: messages, reasoning: this.reasoning, tools: this.tools });
        }
      }
      
      try {
        let response = await fetch(this.apiUrl, options);

        if (response.ok) {
          const data = this.parse(await response.json());

          if (data[0] !== null) {
            message = data[0];
            logs.push({ role: "assistant", content: data[4] });
            likability = data[1];
            
            if (data[3] !== null) {
              choices.push(...data[3]);
            }

            animation = this.runtime.run("Emote", data[2]);
          }
        }
      } catch (error) {
        console.error(error);
      }

      resolve([message, likability, animation, choices, logs]);
    }).then((value) => {
      const [message, likability, animation, choices, logs] = value;

      if (message !== null) {
        this.speak(message, animation);

        if (likability !== null) {
          this.likability = {a: this.likability.a, b: likability};
        }
        
        this.choices.splice(0);
        this.choices.push(...choices);
        this.logs.push(...logs);

        if (this.logs.length > this.maxLogs) {
          this.logs.splice(0, this.logs.length - this.maxLogs);
        }

        if (this.ongenerated !== null) {
          this.ongenerated();
        }
      } else {
        this.play("Error");

        this.logs.splice(0);
      }

      this.isLoading = false;
    });
  }

  play(name, state = null) {
    const animation = this.runtime.run(name, state);

    if (animation !== null) {
      this.commandQueue.push(animation, null);
    }

    return animation;
  }

  speak(message, animation = null) {
    this.commandQueue.push(message);

    if (animation !== null) {
      this.commandQueue.push(animation);
    }

    this.commandQueue.push(null);
  }

  popup(choices) {
    const popupElement = document.createElement("div");

    popupElement.classList.add("popup");
    popupElement.style.display = "flex";
    popupElement.style.flexDirection = "column";
    popupElement.style.position = "fixed";
    popupElement.style.left = "50%";
    popupElement.style.bottom = "50%";
    popupElement.style.borderRadius = `${Math.floor(this.balloonRadius / 2)}px`;
    popupElement.style.width = "fit-content";
    popupElement.style.height = "fit-content";
    popupElement.style.width = `${Math.floor(this.balloonWidth)}px`;
    popupElement.style.background = this.balloonBackgroundColor;
    popupElement.style.transform = "translate3d(-50%, 50%, 0) scale(1.1, 1.1)";
    popupElement.style.opacity = 0;
    popupElement.style.overflow = "hidden";

    for (let i = 0; i < choices.length; i++) {
      const choice = choices[i];
      const buttonElement = document.createElement("button");

      if (typeof choice === "string") {
        buttonElement.dataset["choice"] = choice;
        buttonElement.textContent = choice;
      } else {
        if (choice.text === null) {
          if ("url" in choice === false || choice.url === null) {
            continue;
          }

          buttonElement.dataset["url"] = choice.url;
          buttonElement.dataset["choice"] = choice.url;
          buttonElement.textContent = choice.url;
        } else {
          if ("url" in choice && choice.url !== null) {
            buttonElement.dataset["url"] = choice.url;
          }

          buttonElement.dataset["choice"] = choice.text;
          buttonElement.textContent = choice.text;
        }
      }

      buttonElement.style.backgroundColor = "transparent";
      buttonElement.style.border = "0px solid transparent";;
      buttonElement.style.padding = `${Math.floor(this.lineHeight / 2)}px ${Math.floor(this.lineHeight)}px`;
      buttonElement.style.fontFamily = this.fontFamily;
      buttonElement.style.fontSize = `${this.fontSize}px`;
      buttonElement.style.fontWeight = "bold";
      buttonElement.style.lineHeight = `${this.lineHeight}px`;
      buttonElement.style.color = this.textColor;
      buttonElement.addEventListener("click", (event) => {
        const target = (event.currentTarget || event.target);
        
        if ("url" in target.dataset) {
          this.open(target.dataset.url);
        } else {
          this.onchose(target.dataset["choice"]);
        }

        if (this.isPopup) {
          this.isPopup = false;

          popupElement.animate([
            {
              transform: "translate3d(-50%, 50%, 0) scale(1.1, 1.1)",
              opacity: "0"
            }
          ], {
            fill: "forwards",
            duration: 500,
            iterations: 1,
            easing: "ease-in"
          }).onfinish = () => {
            popupElement.remove();
          };
        }
      });

      popupElement.appendChild(buttonElement);
    }

    if (this.onquit !== null) {
      const buttonElement = document.createElement("button");
      const quit = this.onquit;

      buttonElement.classList.add("quit");
      buttonElement.style.backgroundColor = "transparent";
      buttonElement.style.border = "0px solid transparent";;
      buttonElement.style.padding = `${Math.floor(this.lineHeight / 2)}px ${Math.floor(this.lineHeight)}px`;
      buttonElement.style.fontFamily = this.fontFamily;
      buttonElement.style.fontSize = `${this.fontSize}px`;
      buttonElement.style.fontWeight = "bold";
      buttonElement.style.lineHeight = `${this.lineHeight}px`;
      buttonElement.style.color = this.textColor;
      buttonElement.addEventListener("click", (event) => {
        quit();
        
        if (this.isPopup) {
          this.isPopup = false;

          popupElement.animate([
            {
              transform: "translate3d(-50%, 50%, 0) scale(1.1, 1.1)",
              opacity: "0"
            }
          ], {
            fill: "forwards",
            duration: 500,
            iterations: 1,
            easing: "ease-in"
          }).onfinish = () => {
            popupElement.remove();
          };
        }
      });

      popupElement.appendChild(buttonElement);
    }

    this.balloonCanvas.after(popupElement);
    this.isPopup = true;

    popupElement.animate([
      {
        transform: "translate3d(-50%, 50%, 0) scale(1, 1)",
        opacity: "1"
      }
    ], {
      fill: "forwards",
      duration: 500,
      iterations: 1,
      easing: "ease-out"
    }).onfinish = () => {
      popupElement.style.transform = "translate3d(-50%, 50%, 0) scale(1, 1)";
      popupElement.style.opacity = 1;
    };
  }

  parse(json) {
    let content = null;
    let likability = null;
    let state = null;
    let choices = null;

    if ("id" in json && "model" in json && "output" in json && json.output.length > 0) {
      let text = null;

      for (const output of json.output) {
        if (output.type === "message") {
          for (const content of output.content) {
            if (content.type === "output_text") {
              text = content.text;

              break;
            }
          }

          if (text !== null) {
            const match = /(?:```json)?(?:[^{]+)?({.+}).*(?:```)?/gs.exec(text);
      
            if (match === null) {
              try {
                json = JSON.parse(text);
              } catch {
                return [text, null, null, []];
              }
            } else {
              json = JSON.parse(match[1]);
            }

            break;
          }
        }
      }
    }

    if ("content" in json) {
      content = json.content;
    }

    if ("likability" in json) {
      likability = json.likability;
    }

    if ("states" in json) {
      let maxScore = Number.MIN_SAFE_INTEGER;
      
      for (const key in json.states) {
        if (json.states[key] > maxScore) {
          state = key;
          maxScore = json.states[key];
        }
      }
    }

    if ("choices" in json) {
      choices = [];

      for (const choice of json.choices) {
        if (typeof choice === "string") {
          choices.push({ text: choice, url: null });
        } else if ("url" in choice === false || choice.url === null || choice.url.length === 0) {
          choices.push({ text: choice.text, url: null });
        } else {
          choices.push(choice);
        }
      }
    }

    return [content, likability, state, choices, JSON.stringify(json)];
  }

  setupAnimations(animation) {
    if (animation.steps !== null) {
      this.pendingAnimations.push(...animation.steps);

      return this.pendingAnimations.length > 0 ? this.setupAnimations(this.pendingAnimations.shift()) : [[], 0.0];
    }

    if (this.is3D) {
      return this.setupVRMAnimation(animation);
    }

    const animations = [];
    const layers = new Map();
    let maxDuration = 0.0;

    for (const frame of animation.frames) {
      const z = Math.trunc(frame.z ?? 0);
      const type = frame.type ?? null;
      const key = JSON.stringify([z, type]);

      if (!layers.has(key)) {
        const layeredAnimation = new Animation(animation.name, animation.state, animation.repeats, []);

        layeredAnimation.z = z;
        layeredAnimation.type = type;
        layers.set(key, layeredAnimation);
      }

      layers.get(key).frames.push(frame);
    }

    for (const layeredAnimation of [...layers.values()].sort((a, b) => a.z - b.z)) {
      if (layeredAnimation.duration > maxDuration) {
        maxDuration = layeredAnimation.duration;
      }

      animations.push(layeredAnimation);
    }

    return [animations, maxDuration];
  }

  setupVRMAnimation(animation) {
    if (this.vrmMixer === null || animation.clip === null) {
      return [[], 0.0];
    }

    this.vrmMixer.stopAllAction();

    const action = this.vrmMixer.clipAction(animation.clip);

    action.reset();
    action.enabled = true;
    action.clampWhenFinished = true;
    action.setLoop(animation.repeats === 1 ? THREE.LoopOnce : THREE.LoopRepeat, animation.repeats === 0 ? Infinity : Math.max(1, animation.repeats));
    action.play();

    return [[animation], animation.duration];
  }

  renderCharacter(deltaTime) {
    if (this.is3D) {
      this.renderVRM(deltaTime);

      return;
    }

    if (this.elapsedTime < this.maxDuration) {
      const backCanvas = this.characterCanvas.backBuffer;

      backCanvas.width = this.characterCanvas.width;
      backCanvas.height = this.characterCanvas.height;

      const backContext = backCanvas.getContext("2d");
      const frontContext = this.characterCanvas.getContext("2d");

      backContext.imageSmoothingEnabled = true;
      backContext.imageSmoothingQuality = "high";
      backContext.clearRect(0, 0, backCanvas.width, backCanvas.height);
      
      for (const animation of this.currentAnimations) {
        animation.time += deltaTime;

        const frame = animation.current;

        if (frame.url in this.cachedImages) {
          backContext.save();
          backContext.globalAlpha = frame.opacity;
          backContext.drawImage(this.cachedImages[frame.url], (this.character.x + frame.x) * this.scale * window.devicePixelRatio, (this.character.y + frame.y) * this.scale * window.devicePixelRatio, frame.width * this.scale * window.devicePixelRatio, frame.height * this.scale * window.devicePixelRatio);
          backContext.restore();
        }
      }

      frontContext.clearRect(0, 0, backCanvas.width, backCanvas.height);
      frontContext.drawImage(backCanvas, 0, 0);

      backCanvas.width = backCanvas.height = 0;

      this.elapsedTime += deltaTime;

      if (this.elapsedTime >= this.maxDuration) {
        this.currentAnimations.splice(0);
      }
    }
  }

  renderVRM(deltaTime) {
    if (this.vrm === null || this.vrmRenderer === null) {
      return;
    }

    if (this.vrmMixer !== null) {
      this.vrmMixer.update(deltaTime);
    }

    this.updateVRMExpressions(deltaTime);
    this.vrm.update(deltaTime);
    this.vrmRenderer.render(this.vrmScene, this.vrmCamera);

    const frontContext = this.characterCanvas.getContext("2d");

    frontContext.clearRect(0, 0, this.characterCanvas.width, this.characterCanvas.height);
    frontContext.drawImage(this.vrmRenderer.domElement, 0, 0, this.characterCanvas.width, this.characterCanvas.height);

    if (this.elapsedTime < this.maxDuration) {
      this.elapsedTime += deltaTime;

      if (this.elapsedTime >= this.maxDuration) {
        this.vrmMixer.stopAllAction();
        this.currentAnimations.splice(0);
      }
    }
  }

  updateVRMExpressions(deltaTime) {
    const expressionManager = this.vrm.expressionManager;

    if (!expressionManager) {
      return;
    }

    this.vrmExpressionTime += deltaTime;

    if (this.vrmExpressionTime > this.vrmNextBlinkTime + 0.18) {
      this.vrmNextBlinkTime = this.vrmExpressionTime + random(250, 550) / 100.0;
    }

    const blinkPhase = this.vrmExpressionTime - this.vrmNextBlinkTime;
    const blink = blinkPhase >= 0.0 && blinkPhase <= 0.18 ? Math.sin((blinkPhase / 0.18) * Math.PI) : 0.0;
    const mouth = this.messageQueue.length > 0 ? (Math.sin(this.vrmExpressionTime * Math.PI * 10.0) + 1.0) * 0.35 : 0.0;

    expressionManager.setValue("blink", blink);
    expressionManager.setValue("aa", mouth);
  }

  renderLikability(deltaTime) {
    if (this.likability.b !== null) {
      if (this.isLoading || this.isPopup) {
        if ("api" in window) {
          window.api.setPassThrough(false);
        }

        if (this.revealStep === null) {
          this.revealStep = deltaTime * 2.0;
          this.likabilityCanvas.style.visibility = "visible";
          this.likabilityCanvas.style.opacity = deltaTime;
        } else if (this.revealStep < 1.0) {
          this.revealStep += deltaTime * 2.0;
  
          if (this.revealStep > 1.0) {
            this.revealStep = 1.0;
          }

          this.likabilityCanvas.style.opacity = this.revealStep;
        } else {
          return;
        }
      } else if (this.revealStep === null) {
        return;
      } else {
        this.revealStep -= deltaTime;

        if (this.revealStep <= 0.0) {
          this.revealStep = null;
          this.likabilityCanvas.style.visibility = "collapse";
          this.likabilityCanvas.style.opacity = 0.0;

          return;
        } else {
          this.likabilityCanvas.style.opacity = this.revealStep;
        }
      }

      const heartSize = 16;
      let likability;
      
      if (this.likability.a === this.likability.b) {
        likability = this.likability.a;
      } else {
        likability = lerp(this.likability.a, this.likability.b, deltaTime);

        if (Math.floor(heartSize * likability) === Math.floor(heartSize * this.likability.b)) {
          this.likability.a = this.likability.b;
        } else {
          this.likability.a = likability;
        }
      }

      const backCanvas = this.likabilityCanvas.backBuffer;
      
      backCanvas.width = this.likabilityCanvas.width;
      backCanvas.height = this.likabilityCanvas.height;

      const backContext = backCanvas.getContext("2d");
      const frontContext = this.likabilityCanvas.getContext("2d");
      const clipPath = new Path2D();
      const heartX = Math.floor(8.0 * window.devicePixelRatio);
      const heartY = Math.floor(8.0 * window.devicePixelRatio);
      const heartWidth = Math.floor(heartSize * window.devicePixelRatio);
      const heartHeight = Math.floor(heartSize * window.devicePixelRatio);
      
      clipPath.rect(heartX, heartY + Math.floor((Math.ceil(heartSize * (1.0 - likability))) * window.devicePixelRatio), heartWidth, Math.floor(Math.floor(heartSize * likability) * window.devicePixelRatio))
      
      backContext.imageSmoothingEnabled = true;
      backContext.imageSmoothingQuality = "high";
      backContext.clearRect(0, 0, backCanvas.width, backCanvas.height);
      backContext.fillStyle = "rgb(0 0 0 / 0.01)";
      backContext.fillRect(0, 0, backCanvas.width, backCanvas.height);
      backContext.save();
      this.drawHeart(backContext, heartX, heartY, heartWidth, heartHeight)
      backContext.globalAlpha = 0.25;
      backContext.fillStyle = this.accentColor;
      backContext.fill();
      backContext.clip(clipPath);
      this.drawHeart(backContext, heartX, heartY, heartWidth, heartHeight)
      backContext.fillStyle = this.accentColor;
      backContext.fill();
      backContext.restore();
      frontContext.clearRect(0, 0, backCanvas.width, backCanvas.height);
      frontContext.globalAlpha = Math.sin(this.revealStep / 2.0 * Math.PI);
      frontContext.drawImage(backCanvas, 0, 0);

      backCanvas.width = backCanvas.height = 0;
    }
  }

  renderLoading(deltaTime) {
    if (this.isLoading) {
      if (this.loadingStep === null) {
        this.loadingStep = deltaTime;
        this.loadingCanvas.style.visibility = "visible";
      } else if (this.loadingStep < 1.0) {
        this.loadingStep += deltaTime;

        if (this.loadingStep > 1.0) {
          this.loadingStep = 1.0;
        }
      }

      this.blinkStep += deltaTime;
    } else if (this.loadingStep === null) {
      return
    } else {
      this.loadingStep -= deltaTime;

      if (this.loadingStep <= 0.0) {
        this.loadingStep = null;
        this.loadingCanvas.style.visibility = "collapse";
        this.blinkStep = 0.0;

        return;
      } else {
        this.blinkStep += deltaTime;
      }
    }

    const backCanvas = this.loadingCanvas.backBuffer;

    backCanvas.width = this.loadingCanvas.width;
    backCanvas.height = this.loadingCanvas.height;

    const backContext = backCanvas.getContext("2d");
    const frontContext = this.loadingCanvas.getContext("2d");
    const offscreenCanvas = new OffscreenCanvas(1, 1)
    const offscreenContext = offscreenCanvas.getContext("2d");
    const dotRadius = 4.0 * window.devicePixelRatio;
    const blinkInterval = 3.0;
    const currentTime = this.blinkStep;
    let x = dotRadius;

    offscreenContext.fillStyle = this.backgroundColor;
    offscreenContext.fillRect(0, 0, 1, 1);

    const toColor = offscreenContext.getImageData(0, 0, 1, 1).data;
    const fromColor = Math.max(Math.max(toColor[0], toColor[1]), toColor[2]) < 128 ? [255, 255, 255] : [0, 0, 0];
    
    offscreenCanvas.width = offscreenCanvas.height = 0;
    
    backContext.imageSmoothingEnabled = true;
    backContext.imageSmoothingQuality = "high";
    backContext.clearRect(0, 0, backCanvas.width, backCanvas.height);
    backContext.save();
    
    for (let i = 0; i < 3; i++) {
      const phase = (currentTime - (i * 0.5) + blinkInterval) % blinkInterval;
      const time = (Math.sin((phase / blinkInterval) * Math.PI * 2.0) + 1.0) / 2.0;
      const scale = lerp(0.5, 1.0, time);

      backContext.save();
      backContext.translate(x, dotRadius);
      backContext.scale(scale, scale);
      backContext.beginPath();
      backContext.arc(0.0, 0.0, dotRadius, 0, Math.PI * 2.0);
      backContext.fillStyle = `rgb(${lerp(fromColor[0], toColor[0], time)} ${lerp(fromColor[1], toColor[1], time)} ${lerp(fromColor[2], toColor[2], time)} / ${lerp(0.5, 1.0, time)})`;
      backContext.fillStyle = this.backgroundColor;
      backContext.fill();
      backContext.closePath();
      backContext.translate(-dotRadius, -dotRadius);
      backContext.restore();

      x += dotRadius * 4.0;
    }

    backContext.restore();
    frontContext.clearRect(0, 0, backCanvas.width, backCanvas.height);
    frontContext.globalAlpha = Math.sin(this.loadingStep / 2.0 * Math.PI);
    frontContext.drawImage(backCanvas, 0, 0);

    backCanvas.width = backCanvas.height = 0;
  }

  renderBalloon(deltaTime) {
    if (this.messageQueue.length > 0) {
      if (this.messageQueue[0].step === null) {
        if (this.messageQueue[0].index < this.messageQueue[0].lines.length) {
          const index = this.messageQueue[0].index;
          const message = this.messageQueue[0].lines[index];
          let updateRequired = false;

          if (this.messageQueue[0].reverse) {
            if (message.type.count > 0) {
              if (this.messageQueue[0].slide.step === null) {
                let lines = 0;
  
                for (let i = 0; i <= index; i++) {
                  for (let j = 1; j < this.messageQueue[0].lines[i].type.count; j++) {
                    if (this.messageQueue[0].lines[i].breaks.includes(j)) {
                      lines += 1;
                    }
                  }
  
                  lines += 1;
                }
  
                if (lines >= this.maxLines && lines - this.maxLines === this.messageQueue[0].slide.index - 1 && this.messageQueue[0].lines[index].breaks.includes(this.messageQueue[0].lines[index].type.count)) {
                  this.messageQueue[0].slide.index -= 1;
                  this.messageQueue[0].slide.step = 1.0;
                }
              }

              if (this.messageQueue[0].slide.step === null) {
                this.messageQueue[0].lines[index].type.elapsed += deltaTime * this.messageQueue[0].speed;
              
                if (message.type.elapsed >= 1.0 / message.type.speed) {
                  if (message.type.count - 1 < message.text.length) {
                    const width = message.text.length / 2;
                    
                    if (message.type.buffer.length <= width && message.type.count > 0) {
                      this.messageQueue[0].lines[index].type.count -= 1;
                    }
                    
                    if (message.type.buffer.length > 0) {
                      this.messageQueue[0].lines[index].type.buffer = this.messageQueue[0].lines[index].type.buffer.substring(0, this.messageQueue[0].lines[index].type.buffer.length - 1);
                    }
                  }
                    
                  this.messageQueue[0].lines[index].type.elapsed = 0.0;
                }
              } else {
                this.messageQueue[0].slide.step -= deltaTime;

                if (this.messageQueue[0].slide.step <= 0.0) {
                  this.messageQueue[0].slide.step = null;
                }
              }
            } else if (index > 0) {
              this.messageQueue[0].index -= 1;
              this.messageQueue[0].lines[this.messageQueue[0].index].type.elapsed = 0.0;
            } else {
              this.messageQueue[0].step = 1.0;
              this.messageQueue[0].index = -1;
            }
          } else if (message.type.buffer.length < message.text.length) {
            if (this.messageQueue[0].slide.step === null) {
              let lines = 0;

              for (let i = 0; i <= index; i++) {
                for (let j = 1; j < this.messageQueue[0].lines[i].type.buffer.length; j++) {
                  if (this.messageQueue[0].lines[i].breaks.includes(j)) {
                    lines += 1;
                  }
                }

                lines += 1;
              }

              if (lines >= this.maxLines && lines - this.maxLines === this.messageQueue[0].slide.index && this.messageQueue[0].lines[index].breaks.includes(this.messageQueue[0].lines[index].type.buffer.length)) {
                this.messageQueue[0].slide.step = 0.0;
              }
            }
            
            if (this.messageQueue[0].slide.step === null) {
              if (message.type.elapsed >= 0.0) {
                this.messageQueue[0].lines[index].type.elapsed += deltaTime * this.messageQueue[0].speed;
              } else {
                this.messageQueue[0].lines[index].type.elapsed = deltaTime * this.messageQueue[0].speed;
              }
              
              if (message.type.elapsed >= 1.0 / message.type.speed) {
                if (message.type.count >= message.text.length / 2) {
                  this.messageQueue[0].lines[index].type.buffer += message.text.charAt(message.type.buffer.length);
                }
                
                if (message.type.count < message.text.length) {
                  this.messageQueue[0].lines[index].type.count += 1;
                }
                  
                this.messageQueue[0].lines[index].type.elapsed = 0.0;
              }
            } else{
              this.messageQueue[0].slide.step += deltaTime;

              if (this.messageQueue[0].slide.step >= 1.0) {
                this.messageQueue[0].slide.index += 1;
                this.messageQueue[0].slide.step = null;
              }
            }
          } else if (index < this.messageQueue[0].lines.length - 1) {
            this.messageQueue[0].index += 1;
          } else if (!this.isPopup && !this.isPaused) {
            this.messageQueue[0].time += deltaTime;
            
            if (this.messageQueue[0].duration >= 0.0 && this.messageQueue[0].time >= this.messageQueue[0].duration) {
              this.messageQueue[0].step = 1.0;
              this.messageQueue[0].index = -1;
            }
          }

          if (message.text.length === this.messageQueue[0].lines[index].type.buffer.length) {
            if (message.text !== this.messageQueue[0].lines[index].current) {
              this.messageQueue[0].lines[index].current = message.text;
              updateRequired = true;
            }
          } else {
            const characters = [];
            let randomBuffer = String();
            
            for (let i = 0; i < message.text.length; i++) {
              if (message.text.charAt(i) !== "\n" && message.text.charAt(i).match(/\s/) === null) {
                characters.push(message.text.charAt(i));
              }
            }
            
            if (characters.length > 0) {
              for (let i = 0; i < this.messageQueue[0].lines[index].type.count; i++) {
                let character = message.text.charAt(i);
                
                if (character === "\n") {
                  randomBuffer += "\n";
                } else {
                  randomBuffer += characters[~~random(0, characters.length)];
                }
              }
            }
            
            if (randomBuffer.length > this.messageQueue[0].lines[index].type.buffer.length) {
              this.messageQueue[0].lines[index].current = this.messageQueue[0].lines[index].type.buffer + randomBuffer.substring(this.messageQueue[0].lines[index].type.buffer.length, randomBuffer.length);
              updateRequired = true
            } else if (this.messageQueue[0].lines[index].current.length !== this.messageQueue[0].lines[index].type.buffer.length) {
              this.messageQueue[0].lines[index].current = this.messageQueue[0].lines[index].type.buffer;
              updateRequired = true
            }
          }
          
          if (updateRequired) {
            const fontSize = this.fontSize * window.devicePixelRatio;
            const lineHeight = Math.ceil(this.lineHeight * window.devicePixelRatio);
            const backCanvas = this.balloonCanvas.backBuffer;
            const x = this.lineHeight * window.devicePixelRatio;
            var y = this.lineHeight * window.devicePixelRatio;

            backCanvas.width = this.balloonCanvas.width;
            backCanvas.height = this.balloonCanvas.height;

            const backContext = backCanvas.getContext("2d");
            const frontContext = this.balloonCanvas.getContext("2d");
            const squarePath = new Path2D();
            
            backContext.imageSmoothingEnabled = true;
            backContext.imageSmoothingQuality = "high";
            backContext.textAlign = "left";
            backContext.textBaseline = "middle";
            
            backContext.font = `normal ${this.fontWeight} ${fontSize}px ${this.fontFamily}`;
            backContext.clearRect(0, 0, backCanvas.width, backCanvas.height);
            backContext.save();

            this.drawBalloonPath(backContext, Math.floor(this.balloonWidth * window.devicePixelRatio), Math.floor((this.messageHeight + this.lineHeight * 2) * window.devicePixelRatio), Math.floor(11 * window.devicePixelRatio), Math.floor(11 * window.devicePixelRatio), Math.floor(this.balloonRadius * window.devicePixelRatio));
            backContext.fillStyle = this.balloonBackgroundColor;
            backContext.fill();

            backContext.fillStyle = this.textColor;
            squarePath.rect(Math.floor(this.lineHeight * window.devicePixelRatio), Math.floor(this.lineHeight * window.devicePixelRatio), Math.ceil(this.balloonCanvas.width - this.lineHeight * 2 * window.devicePixelRatio), Math.ceil(this.messageHeight * window.devicePixelRatio));
            backContext.clip(squarePath);
            backContext.translate(0.0, -(this.lineHeight * window.devicePixelRatio * this.messageQueue[0].slide.index + this.lineHeight * window.devicePixelRatio * (this.messageQueue[0].slide.step ?? 0.0)));

            for (let i = 0; i < index; i++) {
              const lines = [];
              let line = this.messageQueue[0].lines[i].current[0];
              
              for (let j = 1; j < this.messageQueue[0].lines[i].current.length; j++) {
                if (this.messageQueue[0].lines[i].breaks.includes(j)) {
                  lines.push(line);
                  line = this.messageQueue[0].lines[i].current[j];
                } else {
                  line += this.messageQueue[0].lines[i].current[j];
                }
              }

              lines.push(line);

              for (const line of lines) {
                const textMetrics = backContext.measureText(line);

                backContext.fillText(line, Math.round(x - textMetrics.actualBoundingBoxLeft), Math.round(y + (lineHeight - fontSize) / 2 + fontSize / 2));
                y += lineHeight;
              }
            }

            if (this.messageQueue[0].lines[index].current.length > 0) {
              const lines = [];
              let line = this.messageQueue[0].lines[index].current[0];
              
              for (let i = 1; i < this.messageQueue[0].lines[index].current.length; i++) {
                if (this.messageQueue[0].lines[index].breaks.includes(i)) {
                  lines.push(line);
                  line = this.messageQueue[0].lines[index].current[i];
                } else {
                  line += this.messageQueue[0].lines[index].current[i];
                }
              }

              lines.push(line);

              for (const line of lines) {
                const textMetrics = backContext.measureText(line);

                backContext.fillText(line, Math.round(x - textMetrics.actualBoundingBoxLeft), Math.round(y + (lineHeight - fontSize) / 2 + fontSize / 2));
                y += lineHeight;
              }
            }

            backContext.restore();
            frontContext.clearRect(0, 0, backCanvas.width, backCanvas.height);
            frontContext.drawImage(backCanvas, 0, 0);

            backCanvas.width = backCanvas.height = 0;
          }
        }
      } else if (this.messageQueue[0].index == -1) {
        this.messageQueue[0].step -= deltaTime;
          
        if (this.messageQueue[0].step > 0.0) {
          this.balloonCanvas.style.opacity = Math.sin(this.messageQueue[0].step / 2.0 * Math.PI);
          this.balloonCanvas.style.transform = `scale(${Math.sin(this.messageQueue[0].step / 2.0 * Math.PI)}, ${Math.sin(this.messageQueue[0].step / 2.0 * Math.PI)})`;
        } else {
          this.balloonCanvas.style.opacity = 0.0;
          this.balloonCanvas.style.transform = "scale(0.0, 0.0)";
          this.balloonCanvas.style.visibility = "collapse";
          this.isPaused = false;
          this.messageQueue.shift();
        }
      } else {
        this.messageQueue[0].step += deltaTime;
          
        if (this.messageQueue[0].step < 1.0) {
          this.balloonCanvas.style.opacity = Math.sin(this.messageQueue[0].step / 2.0 * Math.PI);
            
          if (this.messageQueue[0].step > 0.5) {
            this.balloonCanvas.style.transform = `scale(${1.0 + (this.balloonCanvas.width * 1.1 / this.balloonCanvas.width - 1.0) * Math.sin(this.messageQueue[0].step * Math.PI)}, ${1.0 + (this.balloonCanvas.width * 1.1 / this.balloonCanvas.width - 1.0) * Math.sin(this.messageQueue[0].step * Math.PI)})`;
          } else {
            this.balloonCanvas.style.transform = `scale(${this.balloonCanvas.width * 1.1 / this.balloonCanvas.width * Math.sin(this.messageQueue[0].step * Math.PI)}, ${this.balloonCanvas.width * 1.1 / this.balloonCanvas.width * Math.sin(this.messageQueue[0].step * Math.PI)})`;
          }
        } else {
          this.balloonCanvas.style.opacity = 1.0;
          this.balloonCanvas.style.transform = "scale(1.0, 1.0)";
          this.messageQueue[0].step = null;
        }
      }
    }
  }

  show(message, duration = 5.0, speed = 50) {
    const maxLineWidth = Math.ceil((this.balloonWidth - this.lineHeight * 2) * window.devicePixelRatio);
    const fontSize = this.fontSize * window.devicePixelRatio;
    const backCanvas = this.balloonCanvas.backBuffer;
    let text = String();
    let i = 0;
    let offset = 0;
    let current = String();
    let breaks = [];
    const lines = [];
    let count = 0;
    const backContext = backCanvas.getContext("2d");
    const frontContext = this.balloonCanvas.getContext("2d");

    backContext.imageSmoothingEnabled = true;
    backContext.imageSmoothingQuality = "high";
    backContext.textAlign = "left";
    backContext.textBaseline = "middle";
    backContext.fillStyle = this.textColor;
    backContext.font = `normal ${this.fontWeight} ${fontSize}px ${this.fontFamily}`;
    backContext.save();
    
    while (i < message.length) {
      const character = message.charAt(i);

      if (character === "\n") {
        count += breaks.length + 1;
        lines.push({ text: text, offset: offset, breaks: breaks, step: null, type: { elapsed: -1.0, speed: speed, buffer: String(), count: 0 }, current: String() });

        if (i === message.length - 1) {
          count += 1;
          lines.push({ text: String(), offset: offset, breaks: [], step: null, type: { elapsed: -1.0, speed: speed, buffer: String(), count: 0 }, current: String() });
          
          break;
        }

        offset = i + 1;
        current = String();
        text = String();
        breaks = [];
      } else if (character.match(/\s/) === null) {
        current += character;
        text += character;

        const textMetrics = backContext.measureText(current);
        
        if (Math.abs(textMetrics.actualBoundingBoxLeft) + Math.abs(textMetrics.actualBoundingBoxRight) > maxLineWidth) {
          let spaceIndex = null;

          for (let j = current.length - 1; j >= 0; j--) {
            const c = current.charAt(j);
            
            if (c.match(/\s/) !== null) {
              spaceIndex = j;

              break;
            } else if (!/^[\x00-\x7F]*$/.test(c)) {
              break;
            }
          }

          if (spaceIndex === null) {
            current = current.substring(current.length - 1, current.length);
            breaks.push(text.length - 1);
          } else {
            let distance = -spaceIndex + current.length - 1;
            
            current = current.substring(current.length - distance, current.length);
            breaks.push(text.length - distance);
          }
        }
      } else {
        if (current.length === 0) {
          i += 1;
          offset += 1;
          
          continue;
        }

        current += character;
        text += character;

        const textMetrics = backContext.measureText(current);
        
        if (Math.abs(textMetrics.actualBoundingBoxLeft) + Math.abs(textMetrics.actualBoundingBoxRight) > maxLineWidth) {
          offset += 1;
          current = String();
          text = text.substring(0, current.length - 1);
          breaks.push(text.length)
        }
      }

      i++;
    }

    if (text.length > 0) {
      count += breaks.length + 1;
      lines.push({ text: text, offset: offset, breaks: breaks, step: null, type: { elapsed: -1.0, speed: speed, buffer: String(), count: 0 }, current: String() });
    }

    this.messageHeight = this.lineHeight * Math.min(count, this.maxLines);
    this.balloonCanvas.height = Math.floor((this.messageHeight + this.lineHeight * 2 + 11) * window.devicePixelRatio);
    this.balloonCanvas.style.height = `${Math.floor(this.messageHeight + this.lineHeight * 2 + 11)}px`;
    this.balloonCanvas.style.visibility = "visible";
    this.messageQueue.push({ step: 0.0, index: 0, lines: lines, time: 0.0, speed: 1.0, duration: duration, slide: { index: 0, step: null }, reverse: false });
  
    backCanvas.width = this.balloonCanvas.width;
    backCanvas.height = this.balloonCanvas.height;
    
    this.drawBalloonPath(backContext, Math.floor(this.balloonWidth * window.devicePixelRatio), Math.floor((this.messageHeight + this.lineHeight * 2) * window.devicePixelRatio), Math.floor(11 * window.devicePixelRatio), Math.floor(11 * window.devicePixelRatio), Math.floor(this.balloonRadius * window.devicePixelRatio));
    backContext.fillStyle = this.balloonBackgroundColor;
    backContext.fill();

    backContext.restore();
    frontContext.clearRect(0, 0, backCanvas.width, backCanvas.height);
    frontContext.drawImage(backCanvas, 0, 0);

    backCanvas.width = backCanvas.height = 0;
  }

  open(url) {
    const targetUrl = /^[a-zA-Z][a-zA-Z\d+\-.]*:\/\//.test(url) ? new URL(url) : new URL(url, window.location.origin);
    
    if (window.location.origin.toLowerCase() === targetUrl.origin.toLowerCase() && window.location.pathname.toLowerCase().replace(/\/$/, "") === targetUrl.pathname.toLowerCase().replace(/\/$/, "") && targetUrl.hash.length > 0) {
      const element = document.body.querySelector(targetUrl.hash);

      if (element === null) {
        this.play("Error");
      } else {
        element.scrollIntoView({ behavior: "smooth" });
      }

      return;
    }

    window.open(url, "_blank");
  }

  drawBalloonPath(ctx, messageWidth,  messageHeight, balloonPartWidth, balloonPartHeight, radius, n = 2.5) {
    const k = 8.0 * (1.0 / Math.pow(2.0, 1.0 / n) - 1.0 / 2.0) / 3.0;
    
    ctx.beginPath();
    ctx.moveTo(radius, 0.0);
    ctx.lineTo(messageWidth - radius, 0.0);
    ctx.bezierCurveTo(messageWidth - radius * (1.0 - k), 0.0, messageWidth, radius * (1.0 - k), messageWidth, radius);
    ctx.lineTo(messageWidth, messageHeight - radius);
    ctx.bezierCurveTo(messageWidth, messageHeight - radius * (1.0 - k), messageWidth - radius * (1.0 - k), messageHeight, messageWidth - radius, messageHeight);
    ctx.lineTo(messageWidth / 2.0 + balloonPartWidth / 2.0, messageHeight);
    ctx.lineTo(messageWidth / 2.0, messageHeight + balloonPartHeight);
    ctx.lineTo(messageWidth / 2.0 - balloonPartWidth / 2.0, messageHeight);
    ctx.lineTo(radius, messageHeight);
    ctx.bezierCurveTo(radius * (1.0 - k), messageHeight, 0.0, messageHeight - radius * (1.0 - k), 0.0, messageHeight - radius);
    ctx.lineTo(0.0, radius);
    ctx.bezierCurveTo(0.0, radius * (1.0 - k), radius * (1.0 - k), 0.0, radius, 0.0);
    ctx.closePath();
  }

  drawHeart(ctx, x, y, width, height) {
    const topCurveHeight = height * 0.3;

    ctx.beginPath();
    ctx.moveTo(x + width / 2, y + topCurveHeight);
    ctx.bezierCurveTo(x + width / 2, y, x, y, x, y + topCurveHeight);
    ctx.bezierCurveTo(x, y + (height + topCurveHeight) / 2, x + width / 2, y + (height + topCurveHeight) / 2, x + width / 2, y + height);
    ctx.bezierCurveTo(x + width / 2, y + (height + topCurveHeight) / 2, x + width, y + (height + topCurveHeight) / 2, x + width, y + topCurveHeight);
    ctx.bezierCurveTo(x + width, y, x + width / 2, y, x + width / 2, y + topCurveHeight);
    ctx.closePath();
  }
}
