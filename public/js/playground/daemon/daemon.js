var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Daemon_daemonFactory, _Daemon_playground, _Daemon_size, _Daemon_coordinates;
import { Sprite } from "pixi.js";
import Edge from "../types/edge";
class Daemon extends Sprite {
    constructor() {
        super();
        _Daemon_daemonFactory.set(this, void 0);
        _Daemon_playground.set(this, void 0);
        _Daemon_size.set(this, { width: 0, height: 0 });
        _Daemon_coordinates.set(this, { left: 0, top: 0 });
    }
    setTexture(url) {
        this.texture = this.playground.getTexture(url);
    }
    get daemonFactory() {
        return __classPrivateFieldGet(this, _Daemon_daemonFactory, "f");
    }
    set daemonFactory(value) {
        __classPrivateFieldSet(this, _Daemon_daemonFactory, value, "f");
    }
    get playground() {
        return __classPrivateFieldGet(this, _Daemon_playground, "f");
    }
    set playground(value) {
        __classPrivateFieldSet(this, _Daemon_playground, value, "f");
    }
    get size() {
        return __classPrivateFieldGet(this, _Daemon_size, "f");
    }
    set size(value) {
        __classPrivateFieldSet(this, _Daemon_size, value, "f");
        this.applySize();
    }
    get coordinates() {
        return __classPrivateFieldGet(this, _Daemon_coordinates, "f");
    }
    set coordinates(value) {
        __classPrivateFieldSet(this, _Daemon_coordinates, value, "f");
        this.applyCoordinates();
    }
    get left() {
        return __classPrivateFieldGet(this, _Daemon_coordinates, "f").left;
    }
    set left(value) {
        __classPrivateFieldGet(this, _Daemon_coordinates, "f").left = value;
        this.applyCoordinates();
    }
    get top() {
        return __classPrivateFieldGet(this, _Daemon_coordinates, "f").top;
    }
    set top(value) {
        __classPrivateFieldGet(this, _Daemon_coordinates, "f").top = value;
        this.applyCoordinates();
    }
    applyCoordinates() {
        const scale = this.playground.scale();
        this.x = (this.left - this.playground.left) * scale.width;
        this.y = (this.top - this.playground.top) * scale.height;
    }
    applySize() {
        const scale = this.playground.scale();
        this.width = scale.max * this.size.width;
        this.height = scale.max * this.size.height;
    }
    applyScale() {
        this.applyCoordinates();
        this.applySize();
    }
    get radius() {
        return {
            width: this.width / 2,
            height: this.height / 2,
        };
    }
    get center() {
        return {
            left: this.x + this.width / 2,
            top: this.y + this.height / 2,
        };
    }
    collides(daemon) {
        let axisX;
        let axisY;
        if (daemon === undefined)
            return { axisX, axisY };
        if (Math.abs(this.center.left - daemon.center.left) <=
            this.radius.width + daemon.radius.width) {
            if (this.center.left <= daemon.center.left)
                axisX = Edge.Right;
            else
                axisX = Edge.Left;
        }
        if (Math.abs(this.center.top - daemon.center.top) <=
            this.radius.height + this.radius.height) {
            if (this.center.top <= daemon.center.top)
                axisY = Edge.Top;
            else
                axisY = Edge.Bottom;
        }
        return {
            axisX,
            axisY,
        };
    }
}
_Daemon_daemonFactory = new WeakMap(), _Daemon_playground = new WeakMap(), _Daemon_size = new WeakMap(), _Daemon_coordinates = new WeakMap();
export default Daemon;
