var Mouse = /** @class */ (function () {
    function Mouse(canvas) {
        var _this = this;
        this.onMouseMoveHandlers = [];
        this.onMouseClickHandlers = [];
        canvas.addEventListener("mousemove", function (e) { return _this.onMouseMove(e); }, false);
        canvas.addEventListener("click", function (e) { return _this.onMouseClick(e); }, false);
    }
    Mouse.prototype.subscribe = function (event, handler) {
        if (event === "mousemove")
            this.onMouseMoveHandlers.push(handler);
        if (event === "click")
            this.onMouseClickHandlers.push(handler);
    };
    Mouse.prototype.onMouseMove = function (e) {
        this.onMouseMoveHandlers.forEach(function (handler) { return handler(e); });
    };
    Mouse.prototype.onMouseClick = function (e) {
        this.onMouseClickHandlers.forEach(function (handler) { return handler(e); });
    };
    return Mouse;
}());
export default Mouse;
