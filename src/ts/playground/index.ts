export { default as Daemon, DaemonFactory } from "./daemon";
import { Application, Loader, LoaderResource, Sprite, Texture } from "pixi.js";
import DaemonFactory from "./daemon/daemonFactory";
import Keyboard from "./keyboard";
import Mouse from "./mouse";

abstract class Playground {
  app: Application = new Application({ transparent: true });
  keybarod: Keyboard = new Keyboard();
  mouse: Mouse = new Mouse(this.app.view);
  daemonFactory: DaemonFactory = new DaemonFactory(this);
  resolveTexture = (url: string): Texture =>
    Loader.shared.resources[url].texture;
  registerTexture = (url: string): void => {
    Loader.shared.add(url);
  };
  registerSprite = (sprite: Sprite) => this.app.stage.addChild(sprite);
  configureTextures = (): void => {};
  onTextureLoad = (loader: Loader, resource: LoaderResource): void => {};
  onTexturesLoad = (): void => {};
  configureCanvas = (): void => {
    document.body.appendChild(this.app.view);
    this.app.renderer.view.style.position = "absolute";
    this.app.renderer.view.style.display = "block";
    this.app.renderer.autoDensity = true;
    this.app.resizeTo = window;
  };
  usePlayground = () => {
    this.configureCanvas();
    this.configureTextures();
    Loader.shared.onProgress.add(this.onTextureLoad);
    Loader.shared.load(this.onTexturesLoad);
  };
}
export default Playground;
