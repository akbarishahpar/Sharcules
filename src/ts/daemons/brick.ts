import { Daemon } from "../playground";
class Brick extends Daemon {
  url = "/assets/brick-128px.png";
  constructor() {
    super();
  }
  onCreate = () => {
    this.resolveSprite().width = 64;
    this.resolveSprite().height = 50;
  };
}
export default Brick;
