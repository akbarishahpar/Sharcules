import { Sprite, Texture } from "pixi.js";
import Daemon from "./daemon";
import Playground from "./playground";

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
    return daemon;
  }
}

export default DaemonFactory;
