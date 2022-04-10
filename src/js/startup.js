import Playground from "./playground";
import Brick from "./daemons/brick";
import Shark from "./daemons/shark";
import * as textures from "./textures";
class Startup extends Playground {
    constructor() {
        super();
        this.configureTextures = () => {
            this.addTexture(textures.shark);
            this.addTexture(textures.brick);
            this.addTexture(textures.fish);
        };
        this.onTexturesLoad = () => {
            this.daemonFactory.Create(Shark);
            this.daemonFactory.Create(Brick);
        };
    }
}
export default Startup;
