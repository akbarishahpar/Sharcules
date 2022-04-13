import { Daemon } from "../playground";
import * as textures from "../textures";
class Bomb extends Daemon {
  constructor() {
    super();
  }
  onCreate = (): void => {
    this.setTexture(textures.bomb);
    this.coordinates = {
      left: 960 - 64,
      top: 450,
    };
    this.size = {
      width: 44,
      height: 64,
    };
  };
  burning = false;
  toggleMoment = new Date();
  onTick = (delta: number) => {
    if (new Date().getTime() - this.toggleMoment.getTime() > 100) {
      if (this.burning) {
        this.burning = false;
        this.setTexture(textures.bomb_not_burning);
      } else {
        this.burning = true;
        this.setTexture(textures.bomb);
      }
      this.toggleMoment = new Date();
    }
  };
}
export default Bomb;
