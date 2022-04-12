import { Daemon } from "../playground";
import * as textures from "../textures";
class Brick extends Daemon {
  constructor() {
    super();
  }
  onCreate = (): void => {
    this.setTexture(textures.brick);
    this.coordinates = {
      left: 480,
      top: 450,
    };
    this.size = {
      width: 64,
      height: 50,
    };
  };
}
export default Brick;
