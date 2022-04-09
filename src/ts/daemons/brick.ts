import { Daemon } from "../playground";
class Brick extends Daemon {
  Url = "/assets/brick-128px.png";
  constructor() {
    super();
  }
  OnCreate = () => {
    this.resolveSprite().width = 64;
    this.resolveSprite().height = 50;
  };
}
export default Brick;
