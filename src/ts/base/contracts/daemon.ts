import { Sprite } from "pixi.js";
import DaemonFactory from "../factories/daemonFactory";
abstract class Daemon {
  Sprite: Sprite | undefined;
  Url: string | undefined;
  DaemonFactory: DaemonFactory | undefined;
  OnTick?: (delta: number) => void;
  OnKeyDown?: (e: KeyboardEvent) => void;
  OnKeyUp?: (e: KeyboardEvent) => void;
  OnMouseMove?: (e: MouseEvent) => void;
  OnMouseClick?: (e: MouseEvent) => void;
  OnCreate?: () => void;
  OnCollide?: () => void;
  ResolveSprite = (): Sprite => <Sprite>this.Sprite;
  ResolveDameonFactory = () => <DaemonFactory>this.DaemonFactory;
  constructor() {}
}
export default Daemon;
