import Playground from "./base/playground";
import Shark from "./daemons/shark";
class Startup extends Playground {
  constructor() {
    super();
  }
  override ConfigureTextures = () => {
    this.RegisterTexture("/assets/shark-128px.png");
  };
  override OnTexturesLoad = () => {
    this.DaemonFactory.Create(Shark);
  };
}
export default Startup;
