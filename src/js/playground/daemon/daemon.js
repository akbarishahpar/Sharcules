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
import { Sprite } from "pixi.js";
var Daemon = /** @class */ (function (_super) {
    __extends(Daemon, _super);
    function Daemon() {
        var _this = _super.call(this) || this;
        _this._size = { width: 0, height: 0 };
        _this._coordinates = { x: 0, y: 0 };
        return _this;
    }
    Object.defineProperty(Daemon.prototype, "dameonFactory", {
        get: function () {
            return this._daemonFactory;
        },
        set: function (value) {
            this._daemonFactory = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Daemon.prototype, "size", {
        get: function () {
            return this._size;
        },
        set: function (value) {
            this._size = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Daemon.prototype, "coordinates", {
        get: function () {
            return this._coordinates;
        },
        set: function (value) {
            this._coordinates = value;
        },
        enumerable: false,
        configurable: true
    });
    return Daemon;
}(Sprite));
export default Daemon;
