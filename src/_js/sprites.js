import { sprite } from "./pixi";
export const blueTank = (x, y, direction, stage) => {
  const tank = sprite("../assets/tank-blue.png");
  tank.width = 64;
  tank.height = 64;
  return tank;
};
