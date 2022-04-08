import Playground from "./base/playground";
import Shark from "./daemons/shark";
class Startup extends Playground {
  constructor() {
    super();
  }
  override ConfigureTextures = () => {
    this.RegisterTexture("/assets/shark-128px.png");
  };
  override OnTextureLoad = (
    loader: PIXI.Loader,
    resource: PIXI.LoaderResource
  ) => {
    console.log(`${resource.url} is loaded`);
  };
  override OnTexturesLoad = () => {
    this.DaemonFactory.Create(Shark);
  };
}

export default Startup;
