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
var Brick = /** @class */ (function (_super) {
    __extends(Brick, _super);
    function Brick() {
        var _this = _super.call(this) || this;
        _this.url = "/assets/brick-128px.png";
        _this.onCreate = function () {
            _this.size = {
                width: 64,
                height: 50,
            };
        };
        return _this;
    }
    return Brick;
}(Daemon));
export default Brick;
