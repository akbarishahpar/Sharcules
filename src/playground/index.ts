export { default as Daemon, DaemonFactory } from "./daemon";
import { Application, Loader, LoaderResource, Sprite, Texture } from "pixi.js";
import Daemon from "./daemon";
import DaemonFactory from "./daemon/daemonFactory";
import Keyboard from "./keyboard";
import Mouse from "./mouse";

abstract class Playground {
  app: Application = new Application({ transparent: true });
  keybarod: Keyboard = new Keyboard();
  mouse: Mouse = new Mouse(this.app.view);
  daemonFactory: DaemonFactory = new DaemonFactory(this);
  #resizeWatch: NodeJS.Timeout | undefined;
  constructor() {
    window.addEventListener("resize", () => {
      if (this.#resizeWatch) clearTimeout(this.#resizeWatch);
      this.#resizeWatch = setTimeout(() => this.applyScale(), 1);
    });
  }

  #idealSize = { width: 1920, height: 960 };
  get idealSize() {
    return this.#idealSize;
  }
  set idealSize(value) {
    this.#idealSize = value;
  }
  get size() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  scale() {
    const widthScale = this.size.width / this.idealSize.width;
    const heightScale = this.size.height / this.idealSize.height;
    const scale = Math.max(widthScale, heightScale);
    this.app.renderer.resize(this.size.width, this.size.height);
    return {
      width: widthScale,
      height: heightScale,
      max: scale,
    };
  }

  #coordinates = { left: 0, top: 0 };
  get coordinates() {
    return this.#coordinates;
  }
  set coordinates(value) {
    this.#coordinates = value;
    this.applyCoordinates();
  }
  get left() {
    return this.#coordinates.left;
  }
  set left(value) {
    this.#coordinates.left = value;
    this.applyCoordinates();
  }
  get top() {
    return this.#coordinates.top;
  }
  set top(value) {
    this.#coordinates.top = value;
    this.applyCoordinates();
  }
  applyCoordinates() {
    this.app.stage.children.forEach((child) => {
      const daemon = child as Daemon;
      if (daemon) daemon.applyCoordinates();
    });
  }
  applySize() {
    this.app.stage.children.forEach((child) => {
      const daemon = child as Daemon;
      if (daemon) daemon.applySize();
    });
  }
  applyScale() {
    this.app.stage.children.forEach((child) => {
      const daemon = child as Daemon;
      if (daemon) daemon.applyScale();
    });
    this.app.renderer.resize(this.size.width, this.size.height);
  }
  onTextureLoad(loader: Loader, resource: LoaderResource) {}
  onTexturesLoad() {}
  onTick() {}
  getTexture = (url: string) => {
    return Loader.shared.resources[url].texture;
  };
  addTexture = (url: string) => {
    Loader.shared.add(url);
  };
  addDaemon(sprite: Sprite) {
    this.app.stage.addChild(sprite);
  }
  configureTextures() {}
  configureCanvas() {
    document.body.appendChild(this.app.view);
    this.app.renderer.view.style.position = "absolute";
    this.app.renderer.view.style.display = "block";
    this.app.renderer.autoDensity = true;
  }
  useSize(width: number, height: number) {
    this.#idealSize.width = width;
    this.#idealSize.height = height;
    return this;
  }
  usePlayground() {
    this.configureCanvas();
    this.configureTextures();
    Loader.shared.onProgress.add(this.onTextureLoad);
    Loader.shared.load(this.onTexturesLoad);
    return this;
  }
}
export default Playground;
