import { Sprite } from "pixi.js";
import DaemonFactory from "./daemonFactory";
abstract class Daemon {
  sprite: Sprite | undefined;
  url: string | undefined;
  daemonFactory: DaemonFactory | undefined;
  onTick?: (delta: number) => void;
  onKeyDown?: (e: KeyboardEvent) => void;
  onKeyUp?: (e: KeyboardEvent) => void;
  onMouseMove?: (e: MouseEvent) => void;
  onMouseClick?: (e: MouseEvent) => void;
  onCreate?: () => void;
  onCollide?: () => void;
  resolveSprite = (): Sprite => <Sprite>this.sprite;
  resolveDameonFactory = () => <DaemonFactory>this.daemonFactory;
  constructor() {}
}
export default Daemon;
