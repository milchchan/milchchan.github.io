function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min)) + min;
}

class Animation {
  constructor(name, state = null, repeats = 1, frames = []) {
    this.name = name;
    this.state = state;
    this.repeats = repeats;
    this.time = 0.0;
    this.frames = frames;
  }

  get duration() {
    let duration = 0.0;
        
    for (const frame of this.frames) {
      duration += frame.delay;
    }
    
    if (this.repeats > 1) {
      duration *= this.repeats;
    }

    return duration;
  }

  get current() {
    let time = this.time;
    let frame = this.frames[0];
    
    if (this.repeats !== 1) {
      let duration = 0.0
      
      for (const frame of this.frames) {
        duration += frame.delay;
      }
      
      if (this.repeats > 1 && time > duration * this.repeats) {
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

export class Agent {
  constructor(scale = 1.0, temperature = 1.0) {
    const fontFamily = window.getComputedStyle(document.documentElement).getPropertyValue("--apricot-font-family");

    this.isDebug = false;
    this.isLoading = false;
    this.domElement = null;
    this.scale = scale;
    this.temperature = temperature;
    this.character = null;
    this.characterCanvas = null;
    this.loadingCanvas = null;
    this.balloonCanvas = null;
    this.previousTime = performance.now();
    this.stats = { time: this.previousTime, frames: 0, target: document.createElement("span") };
    this.balloonBackgroundColor = "rgb(0 0 0 / 0.75)";
    this.balloonRadius = 48;
    this.balloonWidth = null;
    this.messageHeight = 0;
    this.messageQueue = [];
    this.animationQueue = [];
    this.commandQueue = [];
    this.cachedImages = {};
    this.textColor = "rgb(255 255 255)";
    this.lineHeight = 32;
    this.fontSize = 16;
    this.fontWeight = "bold";
    this.fontFamily = fontFamily.length === 0 ? "sans-serif" : fontFamily;
    this.idleTime = 0.0;
    this.loadingStep = null;
    this.blinkStep = 0.0;
    this.choices = [];
    this.logs = [];
    this.apiUrl = "https://milchchan.com/api/generate";
    this.apiKey = null;
  }

  async load(url) {
    try {
      let response = await fetch(url, {
        mode: "cors",
        method: "GET"
      });

      if (response.ok) {
        const character = await response.json();
        
        response = await fetch(character.prompt, {
          mode: "cors",
          method: "GET"
        });
  
        if (response.ok) {
          character.prompt = await response.text();
          character.animations = character.animations.reduce((x, y) => {
            const frames = [];

            for (const frame of y.frames) {
              frame.delay = Math.max(frame.delay, 0.01);

              if ("opacity" in frame === false) {
                frame["opacity"] = 1.0;
              }

              frames.push(frame);
            }

            x.push(new Animation(y.name, y.state, "repeats" in y ? y.repeats : 1, frames));

            return x;
          }, []);

          this.character = character;
        } 
      }
    } catch (error) {
      console.error(error);
    }

    if (this.balloonWidth === null) {
      this.balloonWidth = this.character.width;
    }

    for (const animation of this.character.animations) {
      for (const frame of animation.frames) {
        if (frame.url in this.cachedImages === false) {
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

    const [parentElement, characterCanvas, balloonCanvas, loadingCanvas] = await new Promise(async (resolve, reject) => {
      const width = this.character.width * this.scale;
      const height = this.character.height * this.scale;
      const parentElement = document.createElement("div");
      const characterCanvas = document.createElement("canvas");
      const balloonCanvas = document.createElement("canvas");
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
      parentElement.style.opacity = 0;

      characterCanvas.classList.add("character");
      characterCanvas["backBuffer"] = document.createElement("canvas");
      characterCanvas.width = Math.floor(width * window.devicePixelRatio);
      characterCanvas.height = Math.floor(height * window.devicePixelRatio);
      characterCanvas.style.bottom = 0;
      characterCanvas.style.width = `${Math.floor(width)}px`;
      characterCanvas.style.height = `${Math.floor(height)}px`;
      characterCanvas.style.backgroundColor = "transparent";
      characterCanvas.addEventListener("click", (event) => {
        if (!this.isLoading) {
          const popupElement = document.body.querySelector("#apricot div.popup");

          if (popupElement === null) {
            if (this.choices.length > 0) {
              this.popup(this.choices);
            }
          } else if (popupElement.dataset.state !== "animating") {
            popupElement.dataset.state = "animating";
            popupElement.animate([
              {
                transform: "translate3d(-50%, -50%, 0) scale(1.1, 1.1)",
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
        }
      });

      balloonCanvas.classList.add("balloon");
      balloonCanvas["backBuffer"] = document.createElement("canvas");
      balloonCanvas.style.position = "absolute";
      balloonCanvas.width = Math.floor(this.balloonWidth * window.devicePixelRatio);
      balloonCanvas.height = 0;
      balloonCanvas.style.left = `${Math.floor(-(this.balloonWidth - this.character.width * this.scale) / 2 + this.character.x)}px`;
      balloonCanvas.style.bottom = `${Math.floor(height - this.character.y)}px`;
      balloonCanvas.style.width = `${Math.floor(this.balloonWidth)}px`;
      balloonCanvas.style.height = "0px";
      balloonCanvas.style.backgroundColor = "transparent";
      balloonCanvas.style.opacity = 0;
      balloonCanvas.style.visibility = "collapse";
      balloonCanvas.style.backfaceVisibility = "hidden";
      balloonCanvas.style.transformOrigin = "50% 100%";
      balloonCanvas.style.transform = "scale(0.0, 0.0)";
      balloonCanvas.addEventListener("click", (event) => {
        if (this.messageQueue.length > 0) {
          this.messageQueue[0].speed = 2.0;
          this.messageQueue[0].reverse = true;
        }
      });

      loadingCanvas.classList.add("loading");
      loadingCanvas["backBuffer"] = document.createElement("canvas");
      loadingCanvas.style.position = "absolute";
      loadingCanvas.width = 8.0 * 5.0 * window.devicePixelRatio;
      loadingCanvas.height = 8.0 * window.devicePixelRatio;
      loadingCanvas.style.left = `${Math.floor(-(8.0 * 5.0 - this.character.width * this.scale) / 2 + this.character.x)}px`;
      loadingCanvas.style.bottom = `${Math.floor(height - this.character.y)}px`;
      loadingCanvas.style.width = `${Math.floor(8.0 * 5.0)}px`;
      loadingCanvas.style.height = `${Math.floor(8.0)}px`;
      loadingCanvas.style.backgroundColor = "transparent";
      loadingCanvas.style.visibility = "collapse";

      parentElement.appendChild(characterCanvas);
      parentElement.appendChild(loadingCanvas);
      parentElement.appendChild(balloonCanvas);
      
      resolve([parentElement, characterCanvas, balloonCanvas, loadingCanvas]);
    });

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
    this.loadingCanvas = loadingCanvas;
    this.domElement.appendChild(this.stats.target);

    return this.domElement;
  }

  run() {
    const self = this;
    const animations = this.character.animations.filter(x => x.name === "Start");
    
    this.animationQueue.push(animations[~~random(0, animations.length)]);
    this.talk();

    function render(timestamp) {
      if (timestamp > self.previousTime) {
        const deltaTime = (timestamp - self.previousTime) / 1000;
  
        self.previousTime = timestamp;

        if (self.animationQueue.length === 0 && self.balloonCanvas.style.visibility !== "visible") {
          if (self.commandQueue.length > 0) {
            do {
              const command = self.commandQueue.shift();

              if (command === null) {
                break;
              } else if (typeof command === "string") {
                self.show(command);
              } else if (command instanceof Animation) {
                self.animationQueue.push(command);
              }
            } while (self.commandQueue.length > 0);
            
            self.idleTime = 0.0;
          } else {
            self.idleTime += deltaTime;

            if (self.idleTime >= 10.0) {
              const animations = self.character.animations.filter(x => x.name === "Idle");

              if (animations.length > 0) {
                const animation = animations[~~random(0, animations.length)];
      
                self.animationQueue.push(new Animation(animation.name, animation.state, animation.repeats, animation.frames));
              }

              self.idleTime = 0.0;
            }
          }
        } else {
          self.idleTime = 0.0;
        }

        self.renderCharacter(deltaTime);
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

    this.domElement.animate([
      {
        opacity: "1"
      }
    ], {
      fill: "forwards",
      duration: 500,
      iterations: 1,
      easing: "ease-out"
    });
  }

  talk(content = null) {
    this.isLoading = true;

    console.log(content);

    new Promise(async (resolve) => {
      const messages = [{ role: "developer", content: `Today: ${new Date().toLocaleDateString()}\n\n${this.character.prompt}` }];
      let message = null;
      let animation = null;
      const choices = [];
      const logs = [];

      for (const log of this.logs) {
        messages.push(log);
      }
      
      if (content !== null) {
        messages.push({ role: "user", content: content });
        logs.push({ role: "user", content: content });
      }
      
      try {
        const response = await fetch(this.apiUrl, {
          mode: "cors",
          method: "POST",
          headers: this.apiKey === null ? { "Content-Type": "application/json" } : { "Authorization": `Bearer ${this.apiKey}`, "Content-Type": "application/json" },
          body: JSON.stringify(this.apiKey === null ? { temperature: this.temperature, messages: messages } : { model: "chatgpt-4o-latest", temperature: this.temperature, messages: messages })
        });

        if (response.ok) {
          let json = await response.json();

          if ("id" in json && "model" in json && "choices" in json && json.choices.length > 0) {
            const match = /(?:```json)?(?:[^{]+)?({.+}).*(?:```)?/gs.exec(json.choices[0].message.content);
            if (match === null) {
              json = JSON.parse(json.choices[0].message.content);
            } else {
              json = JSON.parse(match[1]);
            }
          }

          if ("content" in json) {
            message = json.content;
            logs.push({ role: "assistant", content: json.content });

            if ("choices" in json) {
              choices.push(...json.choices);
            }

            if ("states" in json) {
              let maxScore = Number.MIN_SAFE_INTEGER;
              let state = null;

              for (const key in json.states) {
                if (json.states[key] > maxScore) {
                  state = key;
                  maxScore = json.states[key];
                }
              }

              if (state !== null) {
                const animations = this.character.animations.filter(x => x.name === "Emote" && new RegExp(x.state).test(state));

                if (animations.length > 0) {
                  animation = animations[~~random(0, animations.length)];
                  
                  resolve([message, animation, choices, logs]);

                  return;
                }
              }
            }

            const animations = this.character.animations.filter(x => x.name === "Emote" && x.state === null);

            animation = animations[~~random(0, animations.length)];
          }
        }
      } catch (error) {
        console.error(error);

        commands.splice(0);
      }

      resolve([message, animation, choices, logs]);
    }).then((value) => {
      const [message, animation, choices, logs] = value;

      if (message !== null && animation !== null) {
        this.speak(message, new Animation(animation.name, animation.state, animation.repeats, animation.frames));

        if (choices.length > 0) {
          const maxLogSize = 4;

          this.choices.splice(0);
          this.choices.push(...choices);
          this.logs.push(...logs);

          if (this.logs.length > maxLogSize) {
            this.logs.splice(0, this.logs.length - maxLogSize);
          }
        } else {
          this.logs.splice(0);
        }
      } else {
        const animations = this.character.animations.filter(x => x.name === "Error");
    
        if (animations.length > 0) {
          this.animationQueue.push(animations[~~random(0, animations.length)]);
        }

        this.logs.splice(0);
      }

      this.isLoading = false;
    });
  }

  speak(message, animation) {
    this.commandQueue.push(message);
    this.commandQueue.push(animation);
    this.commandQueue.push(null);
  }

  popup(choices) {
    const popupElement = document.createElement("div");

    popupElement.classList.add("popup");
    popupElement.style.display = "flex";
    popupElement.style.flexDirection = "column";
    popupElement.style.position = "absolute";
    popupElement.style.left = "50%";
    popupElement.style.top = "50%";
    popupElement.style.borderRadius = `${Math.floor(this.balloonRadius / 2)}px`;
    popupElement.style.padding = "0px";
    popupElement.style.width = "fit-content";
    popupElement.style.height = "fit-content";
    popupElement.style.width = `${Math.floor(this.balloonWidth)}px`;
    popupElement.style.background = this.balloonBackgroundColor;
    popupElement.style.transform = "translate3d(-50%, -50%, 0) scale(1.1, 1.1)";
    popupElement.style.opacity = 0.0;
    popupElement.style.overflow = "hidden";

    for (let i = 0; i < choices.length; i++) {
      const buttonElement = document.createElement("button");

      buttonElement.dataset["choice"] = choices[i];
      buttonElement.textContent = choices[i];
      buttonElement.style.backgroundColor = "transparent";
      buttonElement.style.borderLeft = "0px solid transparent";
      buttonElement.style.borderTop = i > 0 ? `1px solid ${this.balloonBackgroundColor}` : "0px solid transparent";
      buttonElement.style.borderRight = "0px solid transparent";
      buttonElement.style.borderBottom = "0px solid transparent";
      buttonElement.style.padding = `${Math.floor(this.lineHeight / 4)}px`;
      buttonElement.style.fontFamily = this.fontFamily;
      buttonElement.style.fontSize = `${this.fontSize}px`;
      buttonElement.style.fontWeight = "bold";
      buttonElement.style.lineHeight = `${this.lineHeight}px`;
      buttonElement.style.color = this.textColor;
      buttonElement.addEventListener("click", (event) => {
        const target = (event.currentTarget || event.target);

        this.talk(target.dataset['choice']);

        if (!popupElement.dataset.state !== "animating") {
          popupElement.dataset.state = "animating";
          popupElement.animate([
            {
              transform: "translate3d(-50%, -50%, 0) scale(1.1, 1.1)",
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

    popupElement.animate([
      {
        transform: "translate3d(-50%, -50%, 0) scale(1, 1)",
        opacity: "1"
      }
    ], {
      fill: "forwards",
      duration: 500,
      iterations: 1,
      easing: "ease-out"
    }).onfinish = () => {
      popupElement.style.opacity = 1;
    };
  }

  renderCharacter(deltaTime) {
    if (this.animationQueue.length > 0) {
      const animation = this.animationQueue[0];
      
      animation.time += deltaTime;

      const frame = animation.current;

      if (frame.url in this.cachedImages) {
        const backCanvas = this.characterCanvas.backBuffer;

        backCanvas.width = this.characterCanvas.width;
        backCanvas.height = this.characterCanvas.height;
  
        const backContext = backCanvas.getContext("2d");
        const frontContext = this.characterCanvas.getContext("2d");
  
        backContext.imageSmoothingEnabled = true;
        backContext.imageSmoothingQuality = "high";
        backContext.clearRect(0, 0, backCanvas.width, backCanvas.height);
        backContext.save();
        backContext.globalAlpha = frame.opacity;
        backContext.drawImage(this.cachedImages[frame.url], (this.character.x + frame.x) * this.scale * window.devicePixelRatio, (this.character.y + frame.y) * this.scale * window.devicePixelRatio, frame.width * this.scale * window.devicePixelRatio, frame.height * this.scale * window.devicePixelRatio);
        backContext.restore();
        frontContext.clearRect(0, 0, backCanvas.width, backCanvas.height);
        frontContext.drawImage(backCanvas, 0, 0);
  
        backCanvas.width = backCanvas.height = 0;
      }

      if (animation.time >= animation.duration) {
        this.animationQueue.shift();
      }
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
      } else {
        this.blinkStep += deltaTime;
      }
    }

    const backCanvas = this.loadingCanvas.backBuffer;

    backCanvas.width = this.loadingCanvas.width;
    backCanvas.height = this.loadingCanvas.height;

    const backContext = backCanvas.getContext("2d");
    const frontContext = this.loadingCanvas.getContext("2d");
    const dotRadius = 4.0 * window.devicePixelRatio;
    const blinkInterval = 3.0;
    const currentTime = this.blinkStep;
    let x = dotRadius;
    
    backContext.imageSmoothingEnabled = true;
    backContext.imageSmoothingQuality = "high";
    backContext.clearRect(0, 0, backCanvas.width, backCanvas.height);
    backContext.save();
    
    for (let i = 0; i < 3; i++) {
      const phase = (currentTime - (i * 0.5) + blinkInterval) % blinkInterval;
      
      backContext.save();
      backContext.globalAlpha = 0.5 + 0.5 * Math.sin((phase / blinkInterval) * Math.PI * 2);
      backContext.beginPath();
      backContext.arc(x, dotRadius, dotRadius, 0, Math.PI * 2.0);
      backContext.fillStyle = this.backgroundColor;
      backContext.fill();
      backContext.closePath();
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
            } else if (index > 0) {
              this.messageQueue[0].index -= 1;
              this.messageQueue[0].lines[this.messageQueue[0].index].type.elapsed = 0.0;
            } else {
              this.messageQueue[0].step = 1.0;
              this.messageQueue[0].index = -1;
            }
          } else if (message.type.buffer.length < message.text.length) {
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
          } else if (index < this.messageQueue[0].lines.length - 1) {
            this.messageQueue[0].index += 1;
          } else {
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

    this.messageHeight = this.lineHeight * count;
    this.balloonCanvas.height = Math.floor((this.messageHeight + this.lineHeight * 2 + 11) * window.devicePixelRatio);
    this.balloonCanvas.style.height = `${Math.floor(this.messageHeight + this.lineHeight * 2)}px`;
    this.balloonCanvas.style.visibility = "visible";
    this.messageQueue.push({ step: 0.0, index: 0, lines: lines, time: 0.0, speed: 1.0, duration: duration, reverse: false });
  
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
}