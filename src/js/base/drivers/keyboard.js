var Keyboard = /** @class */ (function () {
    function Keyboard() {
        var _this = this;
        this.onKeyDownHandlers = [];
        this.onKeyUpHandlers = [];
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); }, false);
        window.addEventListener("keyup", function (e) { return _this.onKeyUp(e); }, false);
    }
    Keyboard.prototype.Subscribe = function (event, handler) {
        if (event === "keydown")
            this.onKeyDownHandlers.push(handler);
        if (event === "keyup")
            this.onKeyUpHandlers.push(handler);
    };
    Keyboard.prototype.onKeyDown = function (e) {
        this.onKeyDownHandlers.forEach(function (handler) { return handler(e); });
    };
    Keyboard.prototype.onKeyUp = function (e) {
        this.onKeyUpHandlers.forEach(function (handler) { return handler(e); });
    };
    return Keyboard;
}());
export default Keyboard;
