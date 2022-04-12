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

  setTexture(url: string) {
    this.texture = this.playground.getTexture(url);
  }

  #daemonFactory: DaemonFactory | undefined;
  get daemonFactory() {
    return <DaemonFactory>this.#daemonFactory;
  }
  set daemonFactory(value) {
    this.#daemonFactory = value;
  }

  #playground: Playground | undefined;
  get playground() {
    return <Playground>this.#playground;
  }
  set playground(value) {
    this.#playground = value;
  }

  #size = { width: 0, height: 0 };
  get size() {
    return this.#size;
  }
  set size(value) {
    this.#size = value;
    this.applySize();
  }

  #coordinates = { left: 0, top: 0 };
  get coordinates() {
    return this.#coordinates;
  }
  set coordinates(value) {
    this.#coordinates = value;
    this.applyCoordinates();
  }
  get left() {
    return this.#coordinates.left;
  }
  set left(value) {
    this.#coordinates.left = value;
    this.applyCoordinates();
  }
  get top() {
    return this.#coordinates.top;
  }
  set top(value) {
    this.#coordinates.top = value;
    this.applyCoordinates();
  }
  applyCoordinates() {
    const scale = this.playground.scale();
    this.x = (this.left - this.playground.left) * scale.width;
    this.y = (this.top - this.playground.top) * scale.height;
  }
  applySize() {
    const scale = this.playground.scale();
    this.width = scale.max * this.size.width;
    this.height = scale.max * this.size.height;
  }
  applyScale() {
    this.applyCoordinates();
    this.applySize();
  }
}
export default Daemon;
