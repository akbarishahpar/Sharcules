import * as PIXI from "pixi.js";
import { blueTank } from "./sprites";
import { stage, ticker } from "./pixi";

const texture = PIXI.Texture.from("../assets/tank-blue.png");
const bilbil = blueTank();
bilbil.anchor.set(0.5);
bilbil.x = 160;
bilbil.y = 160;

stage.addChild(bilbil);

ticker.add((delta) => {
  bilbil.rotation -= 0.01 * delta;
});
