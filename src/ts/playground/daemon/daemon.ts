import { Sprite } from "pixi.js";
import DaemonFactory from "./daemonFactory";
abstract class Daemon extends Sprite {
  private _daemonFactory: DaemonFactory | undefined;
  get dameonFactory(): DaemonFactory {
    return <DaemonFactory>this._daemonFactory;
  }
  set dameonFactory(value: DaemonFactory) {
    this._daemonFactory = value;
  }
  url: string | undefined;
  onTick?: (delta: number) => void;
  onKeyDown?: (e: KeyboardEvent) => void;
  onKeyUp?: (e: KeyboardEvent) => void;
  onMouseMove?: (e: MouseEvent) => void;
  onMouseClick?: (e: MouseEvent) => void;
  onCreate?: () => void;
  onCollide?: () => void;
  constructor() {
    super();
  }
  _size: { width: number; height: number } = { width: 0, height: 0 };
  get size(): { width: number; height: number } {
    return this._size;
  }
  set size(value: { width: number; height: number }) {
    this._size = value;
  }
  _coordinates: { x: number; y: number } = { x: 0, y: 0 };
  get coordinates(): { x: number; y: number } {
    return this._coordinates;
  }
  set coordinates(value: { x: number; y: number }) {
    this._coordinates = value;
  }
}
export default Daemon;
