import Daemon from "../base/contracts/daemon";
class Shark extends Daemon {
  Url = "/assets/shark-128px.png";
  vx: number = 0;
  vy: number = 0;
  tx: number = 0;
  ty: number = 0;
  OnTick = (delta: number) => {
    const sprite = this.ResolveSprite();
    const dx = this.tx - sprite.x;
    const dy = this.ty - sprite.y;
    if (Math.abs(dx) > 25) {
      this.vx = dx / Math.max(Math.abs(dx), Math.abs(dy));
      sprite.x += this.vx * 5;
    }
    if (Math.abs(dy) > 25) {
      sprite.y += this.vy * 5;
      this.vy = dy / Math.max(Math.abs(dx), Math.abs(dy));
    }
  };
  OnMouseMove = (e: MouseEvent): void => {
    this.tx = e.x;
    this.ty = e.y;
  };
}
export default Shark;
