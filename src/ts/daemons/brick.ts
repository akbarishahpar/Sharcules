import Daemon from "../base/contracts/daemon";
class Brick extends Daemon {
  Url = "/assets/brick-128px.png";
  constructor() {
    super();
  }
  OnCreate = () => {
    this.ResolveSprite().width = 64;
    this.ResolveSprite().height = 50;
  };
}
export default Brick;
