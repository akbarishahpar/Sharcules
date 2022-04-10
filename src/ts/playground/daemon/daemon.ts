import { Sprite, Texture } from "pixi.js";
import Playground from "..";
import DaemonFactory from "./daemonFactory";
abstract class Daemon extends Sprite {
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

  setTexture(url: string): void {
    this.texture = this.playground.getTexture(url);
  }

  get wf() {
    return this.playground.currentSize.width / this.playground.idealSize.width;
  }

  get hf() {
    return (
      this.playground.currentSize.height / this.playground.idealSize.height
    );
  }

  #daemonFactory: DaemonFactory | undefined;
  get daemonFactory(): DaemonFactory {
    return <DaemonFactory>this.#daemonFactory;
  }
  set daemonFactory(value: DaemonFactory) {
    this.#daemonFactory = value;
  }

  #playground: Playground | undefined;
  get playground(): Playground {
    return <Playground>this.#playground;
  }
  set playground(value: Playground) {
    this.#playground = value;
  }

  #size: { width: number; height: number } = { width: 0, height: 0 };
  get size(): { width: number; height: number } {
    return this.#size;
  }
  set size(value: { width: number; height: number }) {
    this.#size = value;
    this.width = this.size.width * this.wf;
    this.height = this.size.height * this.hf;
  }

  #coordinates: { x: number; y: number } = { x: 0, y: 0 };
  get coordinates(): { x: number; y: number } {
    return this.#coordinates;
  }
  set coordinates(value: { x: number; y: number }) {
    this.#coordinates = value;
    this.x = this.coordinates.x * this.wf;
    this.y = this.coordinates.y * this.hf;
  }
}
export default Daemon;
