import { Daemon } from "../playground";
import * as textures from "../textures";
class Shark extends Daemon {
    constructor() {
        super(...arguments);
        this.url = "/assets/shark-128px.png";
        this.vs = 1;
        this.vx = 0;
        this.vy = 0;
        this.tx = 0;
        this.ty = 0;
        this.blink = 0;
        this.onTick = (delta) => {
            const dx = this.tx - this.x;
            const dy = this.ty - this.y;
            if (Math.abs(dx) > 25) {
                this.vx = dx / Math.max(Math.abs(dx), Math.abs(dy));
                this.x += this.vx * this.vs * 5;
            }
            if (Math.abs(dy) > 25) {
                this.y += this.vy * this.vs * 5;
                this.vy = dy / Math.max(Math.abs(dx), Math.abs(dy));
            }
        };
        this.onCreate = () => {
            this.setTexture(textures.shark);
            setInterval(() => {
                if (this.blink > 0) {
                    this.vs = 0.5;
                    this.setTexture(textures.fish);
                    if (this.alpha == 1)
                        this.alpha = 0.5;
                    else
                        this.alpha = 1;
                    this.blink--;
                }
                else {
                    this.vs = 1;
                    this.setTexture(textures.shark);
                }
            }, 100);
        };
        this.onMouseMove = (e) => {
            this.tx = e.x;
            this.ty = e.y;
        };
        this.onKeyDown = (e) => {
            if (e.key === " ")
                this.blink = 10 * 2;
        };
    }
}
export default Shark;
