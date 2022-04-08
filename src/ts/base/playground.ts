import { Application, Loader, LoaderResource, Sprite, Texture } from "pixi.js";
import DaemonFactory from "./daemonFactory";
import Keyboard from "./keyboard";
import Mouse from "./mouse";
abstract class Playground {
  App: Application = new Application({ transparent: true });
  Keybarod: Keyboard = new Keyboard();
  Mouse: Mouse = new Mouse(this.App.view);
  DaemonFactory: DaemonFactory = new DaemonFactory(this);
  ResolveTexture = (url: string): Texture =>
    Loader.shared.resources[url].texture;
  RegisterTexture = (url: string): void => {
    Loader.shared.add(url);
  };
  RegisterSprite = (sprite: Sprite) => this.App.stage.addChild(sprite);
  ConfigureTextures = (): void => {};
  OnTextureLoad = (loader: Loader, resource: LoaderResource): void => {};
  OnTexturesLoad = (): void => {};
  ConfigureCanvas = (): void => {
    document.body.appendChild(this.App.view);
    this.App.renderer.view.style.position = "absolute";
    this.App.renderer.view.style.display = "block";
    this.App.renderer.autoDensity = true;
    this.App.resizeTo = window;
  };
  UsePlayground = () => {
    this.ConfigureCanvas();
    this.ConfigureTextures();
    Loader.shared.onProgress.add(this.OnTextureLoad);
    Loader.shared.load(this.OnTexturesLoad);
  };
}
export default Playground;
