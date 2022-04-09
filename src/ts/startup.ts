import Playground from "./playground";
import Brick from "./daemons/brick";
import Shark from "./daemons/shark";
class Startup extends Playground {
  constructor() {
    super();
  }
  override configureTextures = () => {
    this.registerTexture("/assets/shark-128px.png");
    this.registerTexture("/assets/brick-128px.png");
    this.registerTexture("/assets/fish00-128px.png");
  };
  override onTexturesLoad = () => {
    this.daemonFactory.Create(Shark);
    this.daemonFactory.Create(Brick);
  };
}
export default Startup;
