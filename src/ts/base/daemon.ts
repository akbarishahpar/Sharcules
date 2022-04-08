import { Sprite } from "pixi.js";
import DaemonFactory from "./daemonFactory";
abstract class Daemon {
  OnTick?: (delta: number) => void;
  OnKeyDown?: (e: KeyboardEvent) => void;
  OnKeyUp?: (e: KeyboardEvent) => void;
  Sprite: Sprite | undefined;
  Url: string | undefined;
  DaemonFactory: DaemonFactory | undefined;
  ResolveSprite = (): Sprite => <Sprite>this.Sprite;
  ResolveDameonFactory = () => <DaemonFactory>this.DaemonFactory;
  constructor() {}
}
export default Daemon;
