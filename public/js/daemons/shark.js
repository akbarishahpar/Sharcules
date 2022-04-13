import { Daemon } from "../playground";
import * as textures from "../textures";
import Bomb from "./bomb";
class Shark extends Daemon {
    constructor() {
        super(...arguments);
        this.ax = 0;
        this.ay = 0;
        this.vx = 0;
        this.vy = 0;
        this.fx = 0;
        this.fy = 0;
        this.onTick = (delta) => {
            this.vx = this.toFixed(this.vx + this.ax - this.fx, 2);
            this.vy = this.toFixed(this.vy + this.ay - this.fy, 2);
            if (this.vx == 0)
                this.fx = 0;
            if (this.vy == 0)
                this.fy = 0;
            this.coordinates = {
                left: this.left + this.vx,
                top: this.top + this.vy,
            };
            this.reverseSpeed(this.collides(this.bomb1));
            this.reverseSpeed(this.collides(this.bomb2));
            if (this.left - 128 < this.playground.left)
                this.playground.left += this.vx;
            if (this.vx < 0)
                this.setTexture(textures.shark_flipped);
            if (this.vx > 0)
                this.setTexture(textures.shark);
        };
        this.onCreate = () => {
            this.bomb1 = this.daemonFactory.Create(Bomb);
            this.bomb2 = this.daemonFactory.Create(Bomb);
            this.bomb2.left = -1500;
            this.setTexture(textures.shark);
            this.coordinates = {
                left: 250,
                top: 450,
            };
            this.size = {
                width: 128,
                height: 72,
            };
        };
        this.onKeyDown = (e) => {
            this.fx = 0;
            this.fy = 0;
            if (e.key == "ArrowLeft")
                this.ax = -0.01;
            if (e.key == "ArrowUp")
                this.ay = -0.01;
            if (e.key == "ArrowRight")
                this.ax = 0.01;
            if (e.key == "ArrowDown")
                this.ay = 0.01;
        };
        this.onKeyUp = (e) => {
            this.ax = 0;
            this.ay = 0;
            if (this.vx > 0)
                this.fx = 0.01;
            if (this.vx < 0)
                this.fx = -0.01;
            if (this.vy > 0)
                this.fy = 0.01;
            if (this.vy < 0)
                this.fy = -0.01;
        };
    }
    reverseSpeed(edges) {
        if (edges.axisX !== undefined && edges.axisY !== undefined) {
            this.vx = -this.vx;
            this.vy = -this.vy;
        }
    }
    toFixed(number, digits) {
        return Number(number.toFixed(digits));
    }
}
export default Shark;
