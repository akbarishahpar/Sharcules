import Playground from "./base/playground";
import Brick from "./daemons/brick";
import Shark from "./daemons/shark";
class Startup extends Playground {
  constructor() {
    super();
  }
  override ConfigureTextures = () => {
    this.RegisterTexture("/assets/shark-128px.png");
    this.RegisterTexture("/assets/brick-128px.png");
    this.RegisterTexture("/assets/fish00-128px.png");
  };
  override OnTexturesLoad = () => {
    this.DaemonFactory.Create(Shark);
    this.DaemonFactory.Create(Brick);
  };
}
export default Startup;
