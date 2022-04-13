import { Text as Label, TextStyle } from "pixi.js";
import { Daemon } from "../playground";
import Edge from "../playground/types/edge";
import * as textures from "../textures";
import Bomb from "./bomb";
class Shark extends Daemon {
  bomb1: Bomb | undefined;
  bomb2: Bomb | undefined;

  ax = 0;
  ay = 0;
  vx = 0;
  vy = 0;
  fx = 0;
  fy = 0;

  reverseSpeed(edges: { axisX: Edge | undefined; axisY: Edge | undefined }) {
    if (edges.axisX !== undefined && edges.axisY !== undefined) {
      this.vx = -this.vx;
      this.vy = -this.vy;
    }
  }
  onTick = (delta: number) => {
    this.vx = this.toFixed(this.vx + this.ax - this.fx, 2);
    this.vy = this.toFixed(this.vy + this.ay - this.fy, 2);
    if (this.vx == 0) this.fx = 0;
    if (this.vy == 0) this.fy = 0;
    this.coordinates = {
      left: this.left + this.vx,
      top: this.top + this.vy,
    };
    this.reverseSpeed(this.collides(this.bomb1));
    this.reverseSpeed(this.collides(this.bomb2));
    if (this.left - 128 < this.playground.left) this.playground.left += this.vx;
    if (this.vx < 0) this.setTexture(textures.shark_flipped);
    if (this.vx > 0) this.setTexture(textures.shark);
  };
  onCreate = () => {
    this.bomb1 = this.daemonFactory.Create(Bomb);
    this.bomb2 = this.daemonFactory.Create(Bomb);
    this.bomb2.left = -1500;
    this.setTexture(textures.shark);
    this.coordinates = {
      left: 250,
      top: 450,
    };
    this.size = {
      width: 128,
      height: 72,
    };
  };

  onKeyDown = (e: KeyboardEvent) => {
    this.fx = 0;
    this.fy = 0;
    if (e.key == "ArrowLeft") this.ax = -0.01;
    if (e.key == "ArrowUp") this.ay = -0.01;
    if (e.key == "ArrowRight") this.ax = 0.01;
    if (e.key == "ArrowDown") this.ay = 0.01;
  };

  onKeyUp = (e: KeyboardEvent) => {
    this.ax = 0;
    this.ay = 0;
    if (this.vx > 0) this.fx = 0.01;
    if (this.vx < 0) this.fx = -0.01;
    if (this.vy > 0) this.fy = 0.01;
    if (this.vy < 0) this.fy = -0.01;
  };
  toFixed(number: number, digits: number) {
    return Number(number.toFixed(digits));
  }
}
export default Shark;
