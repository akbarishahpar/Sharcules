import { Daemon } from "../playground";
import * as textures from "../textures";
class Shark extends Daemon {
  url = "/assets/shark-128px.png";
  vs: number = 1;
  vx: number = 0;
  vy: number = 0;
  tx: number = 0;
  ty: number = 0;
  blink: number = 0;
  onTick = (delta: number) => {
    const dx = this.tx - this.x;
    const dy = this.ty - this.y;
    if (Math.abs(dx) > 25) {
      this.vx = dx / Math.max(Math.abs(dx), Math.abs(dy));
      this.x += this.vx * this.vs * 5;
    }
    if (Math.abs(dy) > 25) {
      this.y += this.vy * this.vs * 5;
      this.vy = dy / Math.max(Math.abs(dx), Math.abs(dy));
    }
  };
  onCreate = () => {
    this.setTexture(textures.shark);
    setInterval(() => {
      if (this.blink > 0) {
        this.vs = 0.5;
        this.setTexture(textures.fish);
        if (this.alpha == 1) this.alpha = 0.5;
        else this.alpha = 1;
        this.blink--;
      } else {
        this.vs = 1;
        this.setTexture(textures.shark);
      }
    }, 100);
  };
  onMouseMove = (e: MouseEvent): void => {
    this.tx = e.x;
    this.ty = e.y;
  };
  onKeyDown = (e: KeyboardEvent): void => {
    if (e.key === " ") this.blink = 10 * 2;
  };
}
export default Shark;
