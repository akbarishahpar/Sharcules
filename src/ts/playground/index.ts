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

  #idealSize: { width: number; height: number } = { width: 1024, height: 768 };
  get idealSize(): { width: number; height: number } {
    return this.#idealSize;
  }
  set idealSize(value: { width: number; height: number }) {
    this.#idealSize = value;
  }
  get currentSize(): { width: number; height: number } {
    return {
      width: this.app.view.width,
      height: this.app.view.height,
    };
  }

  #coordinates: { left: number; top: number } = { left: 0, top: 0 };
  get coordinates(): { left: number; top: number } {
    return this.#coordinates;
  }
  set coordinates(value: { left: number; top: number }) {
    this.#coordinates = value;
  }
  get left(): number {
    return this.#coordinates.left;
  }
  set left(value: number) {
    this.#coordinates.left = value;
  }
  get top(): number {
    return this.#coordinates.top;
  }
  set top(value: number) {
    this.#coordinates.top = value;
  }
  applyCoordinates(): void {
    this.app.stage.children.forEach((child) => {
      const daemon = child as Daemon;
      if (daemon) {
        daemon.applyCoordinats();
      }
    });
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
    this.app.resizeTo = window;
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
