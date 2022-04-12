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

  #idealSize: { width: number; height: number } = { width: 1920, height: 960 };
  get idealSize(): { width: number; height: number } {
    return this.#idealSize;
  }
  set idealSize(value: { width: number; height: number }) {
    this.#idealSize = value;
  }
  get size(): { width: number; height: number } {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  scale(): {
    width: number;
    height: number;
    max: number;
  } {
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

  #coordinates: { left: number; top: number } = { left: 0, top: 0 };
  get coordinates(): { left: number; top: number } {
    return this.#coordinates;
  }
  set coordinates(value: { left: number; top: number }) {
    this.#coordinates = value;
    this.applyCoordinates();
  }
  get left(): number {
    return this.#coordinates.left;
  }
  set left(value: number) {
    this.#coordinates.left = value;
    this.applyCoordinates();
  }
  get top(): number {
    return this.#coordinates.top;
  }
  set top(value: number) {
    this.#coordinates.top = value;
    this.applyCoordinates();
  }
  applyCoordinates(): void {
    this.app.stage.children.forEach((child) => {
      const daemon = child as Daemon;
      if (daemon) daemon.applyCoordinates();
    });
  }
  applySize(): void {
    this.app.stage.children.forEach((child) => {
      const daemon = child as Daemon;
      if (daemon) daemon.applySize();
    });
  }
  applyScale(): void {
    this.app.stage.children.forEach((child) => {
      const daemon = child as Daemon;
      if (daemon) daemon.applyScale();
    });
    this.app.renderer.resize(this.size.width, this.size.height);
  }
  onTextureLoad(loader: Loader, resource: LoaderResource): void {}
  onTexturesLoad(): void {}
  onTick(): void {}
  getTexture = (url: string): Texture => {
    return Loader.shared.resources[url].texture;
  };
  addTexture = (url: string): void => {
    Loader.shared.add(url);
  };
  addDaemon = (sprite: Sprite) => this.app.stage.addChild(sprite);
  configureTextures = (): void => {};
  configureCanvas = (): void => {
    document.body.appendChild(this.app.view);
    this.app.renderer.view.style.position = "absolute";
    this.app.renderer.view.style.display = "block";
    this.app.renderer.autoDensity = true;
  };
  useSize(width: number, height: number): this {
    this.#idealSize.width = width;
    this.#idealSize.height = height;
    return this;
  }
  usePlayground = (): this => {
    this.configureCanvas();
    this.configureTextures();
    Loader.shared.onProgress.add(this.onTextureLoad);
    Loader.shared.load(this.onTexturesLoad);
    return this;
  };
}
export default Playground;
