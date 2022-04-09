import { Daemon } from "../playground";
class Shark extends Daemon {
  url = "/assets/shark-128px.png";
  vs: number = 1;
  vx: number = 0;
  vy: number = 0;
  tx: number = 0;
  ty: number = 0;
  blink: number = 0;
  onTick = (delta: number) => {
    const sprite = this.resolveSprite();
    const dx = this.tx - sprite.x;
    const dy = this.ty - sprite.y;
    if (Math.abs(dx) > 25) {
      this.vx = dx / Math.max(Math.abs(dx), Math.abs(dy));
      sprite.x += this.vx * this.vs * 5;
    }
    if (Math.abs(dy) > 25) {
      sprite.y += this.vy * this.vs * 5;
      this.vy = dy / Math.max(Math.abs(dx), Math.abs(dy));
    }
  };
  onCreate = () => {
    setInterval(() => {
      if (this.blink > 0) {
        this.vs = 2;
        if (this.resolveSprite().alpha == 1) this.resolveSprite().alpha = 0.5;
        else this.resolveSprite().alpha = 1;
        this.blink--;
      } else this.vs = 1;
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
