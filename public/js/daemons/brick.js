import { Daemon } from "../playground";
import * as textures from "../textures";
class Brick extends Daemon {
    constructor() {
        super();
        this.onCreate = () => {
            this.setTexture(textures.brick);
            this.coordinates = {
                left: 960 - 64,
                top: 450,
            };
            this.size = {
                width: 128,
                height: 100,
            };
        };
    }
}
export default Brick;
