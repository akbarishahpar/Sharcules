import * as PIXI from "pixi.js";

const app = new PIXI.Application({
  width: 800,
  height: 800,
  backgroundColor: 0x0,
  view: document.querySelector("#scene"),
});

export const stage = app.stage;
export const ticker = app.ticker;
export const texture = PIXI.Texture.from;
export const sprite = (uri) => new PIXI.Sprite(texture(uri));
