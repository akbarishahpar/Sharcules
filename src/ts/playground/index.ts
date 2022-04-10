export { default as Daemon, DaemonFactory } from "./daemon";
import {
  Application,
  Loader,
  LoaderResource,
  Sprite,
  Texture,
  Point,
} from "pixi.js";
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
  #camera: { x: number; y: number } = { x: 0, y: 0 };
  get camera(): { x: number; y: number } {
    return this.#camera;
  }
  set camera(value: { x: number; y: number }) {
    this.#camera = value;
  }
  set cameraX(value: number) {
    this.#camera.x = value;
  }
  set cameraY(value: number) {
    this.#camera.y = value;
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
