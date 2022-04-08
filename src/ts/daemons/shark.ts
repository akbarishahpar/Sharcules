import Daemon from "../base/daemon";
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
  OnKeyDown = (e: KeyboardEvent): void => {
    if (e.key === "ArrowUp") this.vy = -1;
    if (e.key === "ArrowDown") this.vy = 1;
    if (e.key == "ArrowRight") this.vx = 1;
    if (e.key == "ArrowLeft") this.vx = -1;
  };
  OnKeyUp = (e: KeyboardEvent): void => {
    if (e.key === "ArrowUp") this.vy = 0;
    if (e.key === "ArrowDown") this.vy = 0;
    if (e.key == "ArrowRight") this.vx = 0;
    if (e.key == "ArrowLeft") this.vx = 0;
  };
  OnMouseMove = (e: MouseEvent): void => {
    this.tx = e.x;
    this.ty = e.y;
  };
}
export default Shark;
