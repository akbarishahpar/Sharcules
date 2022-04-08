import { Sprite, Texture } from "pixi.js";
import Daemon from "../contracts/daemon";
import Playground from "../playground";
class DaemonFactory {
  constructor(public playground: Playground) {}
  Create<Type extends Daemon>(type: { new (): Type }): Type {
    const daemon = new type();
    daemon.DaemonFactory = this;
    daemon.Sprite = new Sprite(
      this.playground.ResolveTexture(<string>daemon.Url)
    );
    this.playground.RegisterSprite(daemon.Sprite);
    if (daemon.OnTick !== undefined)
      this.playground.App.ticker.add(<(delta: Number) => void>daemon.OnTick);
    if (daemon.OnKeyDown !== undefined)
      this.playground.Keybarod.Subscribe("keydown", daemon.OnKeyDown);
    if (daemon.OnKeyUp !== undefined)
      this.playground.Keybarod.Subscribe("keyup", daemon.OnKeyUp);
    if (daemon.OnMouseMove !== undefined)
      this.playground.Mouse.Subscribe("mousemove", daemon.OnMouseMove);
    if (daemon.OnMouseClick !== undefined)
      this.playground.Mouse.Subscribe("click", daemon.OnMouseClick);
    if (daemon.OnCreate !== undefined) daemon.OnCreate();
    return daemon;
  }
}
export default DaemonFactory;
