import { Daemon } from "../playground";
class Brick extends Daemon {
  url = "/assets/brick-128px.png";
  constructor() {
    super();
  }
  onCreate = () => {
    this.size = {
      width: 64,
      height: 50,
    };
  };
}
export default Brick;
