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
    get wf() {
        return this.playground.currentSize.width / this.playground.idealSize.width;
    }
    get hf() {
        return (this.playground.currentSize.height / this.playground.idealSize.height);
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
    }
    get coordinates() {
        return __classPrivateFieldGet(this, _Daemon_coordinates, "f");
    }
    set coordinates(value) {
        __classPrivateFieldSet(this, _Daemon_coordinates, value, "f");
    }
    get left() {
        return __classPrivateFieldGet(this, _Daemon_coordinates, "f").left;
    }
    set left(value) {
        __classPrivateFieldGet(this, _Daemon_coordinates, "f").left = value;
    }
    get top() {
        return __classPrivateFieldGet(this, _Daemon_coordinates, "f").top;
    }
    set top(value) {
        __classPrivateFieldGet(this, _Daemon_coordinates, "f").top = value;
    }
    applyCoordinats() {
        this.x = this.left - this.playground.left;
        this.y = this.top - this.playground.top;
    }
}
_Daemon_daemonFactory = new WeakMap(), _Daemon_playground = new WeakMap(), _Daemon_size = new WeakMap(), _Daemon_coordinates = new WeakMap();
export default Daemon;
