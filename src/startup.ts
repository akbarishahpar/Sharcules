import Playground, { Daemon } from "./playground";
import Bomb from "./daemons/bomb";
import Shark from "./daemons/shark";
import * as textures from "./textures";
import { BatchDrawCall } from "pixi.js";
class Startup extends Playground {
  constructor() {
    super();
  }
  override configureTextures = () => {
    this.addTexture(textures.shark);
    this.addTexture(textures.shark_flipped);
    this.addTexture(textures.bomb);
    this.addTexture(textures.bomb_not_burning);
    this.addTexture(textures.fish);
  };
  override onTexturesLoad = () => {
    this.daemonFactory.Create(Shark);
  };
}
export default Startup;
