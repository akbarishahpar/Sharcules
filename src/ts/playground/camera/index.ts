import { Application } from "pixi.js";

class Camera {
  x: number = 0;
  y: number = 0;
  constructor(
    public app: Application,
    public width: number,
    public height: number
  ) {}
  transition() {}
}
