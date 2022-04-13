import Playground from "./playground";
import Shark from "./daemons/shark";
import * as textures from "./textures";
class Startup extends Playground {
    constructor() {
        super();
        this.configureTextures = () => {
            this.addTexture(textures.shark);
            this.addTexture(textures.shark_flipped);
            this.addTexture(textures.bomb);
            this.addTexture(textures.bomb_not_burning);
            this.addTexture(textures.fish);
        };
        this.onTexturesLoad = () => {
            this.daemonFactory.Create(Shark);
        };
    }
}
export default Startup;
