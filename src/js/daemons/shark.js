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
import { Daemon } from "../playground";
var Shark = /** @class */ (function (_super) {
    __extends(Shark, _super);
    function Shark() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.url = "/assets/shark-128px.png";
        _this.vs = 1;
        _this.vx = 0;
        _this.vy = 0;
        _this.tx = 0;
        _this.ty = 0;
        _this.blink = 0;
        _this.onTick = function (delta) {
            var sprite = _this.resolveSprite();
            var dx = _this.tx - sprite.x;
            var dy = _this.ty - sprite.y;
            if (Math.abs(dx) > 25) {
                _this.vx = dx / Math.max(Math.abs(dx), Math.abs(dy));
                sprite.x += _this.vx * _this.vs * 5;
            }
            if (Math.abs(dy) > 25) {
                sprite.y += _this.vy * _this.vs * 5;
                _this.vy = dy / Math.max(Math.abs(dx), Math.abs(dy));
            }
        };
        _this.onCreate = function () {
            setInterval(function () {
                if (_this.blink > 0) {
                    _this.vs = 2;
                    if (_this.resolveSprite().alpha == 1)
                        _this.resolveSprite().alpha = 0.5;
                    else
                        _this.resolveSprite().alpha = 1;
                    _this.blink--;
                }
                else
                    _this.vs = 1;
            }, 100);
        };
        _this.onMouseMove = function (e) {
            _this.tx = e.x;
            _this.ty = e.y;
        };
        _this.onKeyDown = function (e) {
            if (e.key === " ")
                _this.blink = 10 * 2;
        };
        return _this;
    }
    return Shark;
}(Daemon));
export default Shark;
