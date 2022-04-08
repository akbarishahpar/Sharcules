import Daemon from "../base/daemon";
class Shark extends Daemon {
  Url = "/assets/shark-128px.png";
  vx: number = 0;
  vy: number = 0;
  OnTick = (delta: number) => {
    const sprite = this.ResolveSprite();
    sprite.x += this.vx;
    sprite.y += this.vy;
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
}
export default Shark;
