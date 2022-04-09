import { Application, Loader } from "pixi.js";
import DaemonFactory from "./daemon/daemonFactory";
import Keyboard from "./keyboard";
import Mouse from "./mouse";
var Playground = /** @class */ (function () {
    function Playground() {
        var _this = this;
        this.App = new Application({ transparent: true });
        this.Keybarod = new Keyboard();
        this.Mouse = new Mouse(this.App.view);
        this.DaemonFactory = new DaemonFactory(this);
        this.ResolveTexture = function (url) {
            return Loader.shared.resources[url].texture;
        };
        this.RegisterTexture = function (url) {
            Loader.shared.add(url);
        };
        this.RegisterSprite = function (sprite) { return _this.App.stage.addChild(sprite); };
        this.ConfigureTextures = function () { };
        this.OnTextureLoad = function (loader, resource) { };
        this.OnTexturesLoad = function () { };
        this.ConfigureCanvas = function () {
            document.body.appendChild(_this.App.view);
            _this.App.renderer.view.style.position = "absolute";
            _this.App.renderer.view.style.display = "block";
            _this.App.renderer.autoDensity = true;
            _this.App.resizeTo = window;
        };
        this.UsePlayground = function () {
            _this.ConfigureCanvas();
            _this.ConfigureTextures();
            Loader.shared.onProgress.add(_this.OnTextureLoad);
            Loader.shared.load(_this.OnTexturesLoad);
        };
    }
    return Playground;
}());
export default Playground;
