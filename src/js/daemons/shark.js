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
import Daemon from "../base/daemon";
var Shark = /** @class */ (function (_super) {
    __extends(Shark, _super);
    function Shark() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Url = "/assets/shark-128px.png";
        _this.vx = 0;
        _this.vy = 0;
        _this.OnTick = function (delta) {
            var sprite = _this.ResolveSprite();
            sprite.x += _this.vx;
            sprite.y += _this.vy;
        };
        _this.OnKeyDown = function (e) {
            if (e.key === "ArrowUp")
                _this.vy = -1;
            if (e.key === "ArrowDown")
                _this.vy = 1;
            if (e.key == "ArrowRight")
                _this.vx = 1;
            if (e.key == "ArrowLeft")
                _this.vx = -1;
        };
        _this.OnKeyUp = function (e) {
            if (e.key === "ArrowUp")
                _this.vy = 0;
            if (e.key === "ArrowDown")
                _this.vy = 0;
            if (e.key == "ArrowRight")
                _this.vx = 0;
            if (e.key == "ArrowLeft")
                _this.vx = 0;
        };
        return _this;
    }
    return Shark;
}(Daemon));
export default Shark;
