export { default as Daemon, DaemonFactory } from "./daemon";
import { Application, Loader } from "pixi.js";
import DaemonFactory from "./daemon/daemonFactory";
import Keyboard from "./keyboard";
import Mouse from "./mouse";
var Playground = /** @class */ (function () {
    function Playground() {
        var _this = this;
        this.app = new Application({ transparent: true });
        this.keybarod = new Keyboard();
        this.mouse = new Mouse(this.app.view);
        this.daemonFactory = new DaemonFactory(this);
        this.resolveTexture = function (url) {
            return Loader.shared.resources[url].texture;
        };
        this.registerTexture = function (url) {
            Loader.shared.add(url);
        };
        this.registerSprite = function (sprite) { return _this.app.stage.addChild(sprite); };
        this.configureTextures = function () { };
        this.onTextureLoad = function (loader, resource) { };
        this.onTexturesLoad = function () { };
        this.configureCanvas = function () {
            document.body.appendChild(_this.app.view);
            _this.app.renderer.view.style.position = "absolute";
            _this.app.renderer.view.style.display = "block";
            _this.app.renderer.autoDensity = true;
            _this.app.resizeTo = window;
        };
        this.usePlayground = function () {
            _this.configureCanvas();
            _this.configureTextures();
            Loader.shared.onProgress.add(_this.onTextureLoad);
            Loader.shared.load(_this.onTexturesLoad);
        };
    }
    return Playground;
}());
export default Playground;
