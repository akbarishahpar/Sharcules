class Mouse {
    constructor(canvas) {
        this.onMouseMoveHandlers = [];
        this.onMouseClickHandlers = [];
        canvas.addEventListener("mousemove", (e) => this.onMouseMove(e), false);
        canvas.addEventListener("click", (e) => this.onMouseClick(e), false);
    }
    subscribe(event, handler) {
        if (event === "mousemove")
            this.onMouseMoveHandlers.push(handler);
        if (event === "click")
            this.onMouseClickHandlers.push(handler);
    }
    onMouseMove(e) {
        this.onMouseMoveHandlers.forEach((handler) => handler(e));
    }
    onMouseClick(e) {
        this.onMouseClickHandlers.forEach((handler) => handler(e));
    }
}
export default Mouse;
