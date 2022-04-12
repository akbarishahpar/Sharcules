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
    this.applySize();
  }

  #coordinates: { left: number; top: number } = { left: 0, top: 0 };
  get coordinates(): { left: number; top: number } {
    return this.#coordinates;
  }
  set coordinates(value: { left: number; top: number }) {
    this.#coordinates = value;
    this.applyCoordinates();
  }
  get left(): number {
    return this.#coordinates.left;
  }
  set left(value: number) {
    this.#coordinates.left = value;
    this.applyCoordinates();
  }
  get top(): number {
    return this.#coordinates.top;
  }
  set top(value: number) {
    this.#coordinates.top = value;
    this.applyCoordinates();
  }
  applyCoordinates(): void {
    const scale = this.playground.scale();
    this.x = (this.left - this.playground.left) * scale.width;
    this.y = (this.top - this.playground.top) * scale.height;
  }
  applySize(): void {
    const scale = this.playground.scale();
    this.width = scale.max * this.size.width;
    this.height = scale.max * this.size.height;
  }
  applyScale(): void {
    this.applyCoordinates();
    this.applySize();
  }
}
export default Daemon;
