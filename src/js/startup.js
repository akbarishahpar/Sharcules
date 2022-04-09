var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import Playground from "./playground";
import Shark from "./daemons/shark";
var Startup = /** @class */ (function (_super) {
    __extends(Startup, _super);
    function Startup() {
        var _this = _super.call(this) || this;
        _this.configureTextures = function () {
            _this.registerTexture("/assets/shark-128px.png");
            _this.registerTexture("/assets/brick-128px.png");
            _this.registerTexture("/assets/fish00-128px.png");
        };
        _this.onTexturesLoad = function () {
            _this.daemonFactory.Create(Shark);
        };
        return _this;
    }
    return Startup;
}(Playground));
export default Startup;
