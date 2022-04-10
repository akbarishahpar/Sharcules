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
var _Playground_idealSize, _Playground_camera;
export { default as Daemon, DaemonFactory } from "./daemon";
import { Application, Loader, } from "pixi.js";
import DaemonFactory from "./daemon/daemonFactory";
import Keyboard from "./keyboard";
import Mouse from "./mouse";
class Playground {
    constructor() {
        this.app = new Application({ transparent: true });
        this.keybarod = new Keyboard();
        this.mouse = new Mouse(this.app.view);
        this.daemonFactory = new DaemonFactory(this);
        _Playground_idealSize.set(this, { width: 1024, height: 768 });
        _Playground_camera.set(this, { x: 0, y: 0 });
        this.getTexture = (url) => {
            return Loader.shared.resources[url].texture;
        };
        this.addTexture = (url) => {
            Loader.shared.add(url);
        };
        this.addDaemon = (sprite) => this.app.stage.addChild(sprite);
        this.configureTextures = () => { };
        this.configureCanvas = () => {
            document.body.appendChild(this.app.view);
            this.app.renderer.view.style.position = "absolute";
            this.app.renderer.view.style.display = "block";
            this.app.renderer.autoDensity = true;
            this.app.resizeTo = window;
        };
        this.usePlayground = () => {
            this.configureCanvas();
            this.configureTextures();
            Loader.shared.onProgress.add(this.onTextureLoad);
            Loader.shared.load(this.onTexturesLoad);
            return this;
        };
    }
    get idealSize() {
        return __classPrivateFieldGet(this, _Playground_idealSize, "f");
    }
    set idealSize(value) {
        __classPrivateFieldSet(this, _Playground_idealSize, value, "f");
    }
    get currentSize() {
        return {
            width: this.app.view.width,
            height: this.app.view.height,
        };
    }
    get camera() {
        return __classPrivateFieldGet(this, _Playground_camera, "f");
    }
    set camera(value) {
        __classPrivateFieldSet(this, _Playground_camera, value, "f");
    }
    set cameraX(value) {
        __classPrivateFieldGet(this, _Playground_camera, "f").x = value;
    }
    set cameraY(value) {
        __classPrivateFieldGet(this, _Playground_camera, "f").y = value;
    }
    onTextureLoad(loader, resource) { }
    onTexturesLoad() { }
    onTick() { }
    useSize(width, height) {
        __classPrivateFieldGet(this, _Playground_idealSize, "f").width = width;
        __classPrivateFieldGet(this, _Playground_idealSize, "f").height = height;
        return this;
    }
}
_Playground_idealSize = new WeakMap(), _Playground_camera = new WeakMap();
export default Playground;
