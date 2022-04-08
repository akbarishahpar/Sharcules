var Daemon = /** @class */ (function () {
    function Daemon() {
        var _this = this;
        this.ResolveSprite = function () { return _this.Sprite; };
        this.ResolveDameonFactory = function () { return _this.DaemonFactory; };
    }
    return Daemon;
}());
export default Daemon;
