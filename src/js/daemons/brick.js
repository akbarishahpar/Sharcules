import { Daemon } from "../playground";
import * as textures from "../textures";
class Brick extends Daemon {
    constructor() {
        super();
        this.onCreate = () => {
            this.setTexture(textures.brick);
            this.size = {
                width: 64,
                height: 50,
            };
        };
    }
}
export default Brick;
