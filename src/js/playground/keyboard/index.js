class Keyboard {
    constructor() {
        this.onKeyDownHandlers = [];
        this.onKeyUpHandlers = [];
        window.addEventListener("keydown", (e) => this.onKeyDown(e), false);
        window.addEventListener("keyup", (e) => this.onKeyUp(e), false);
    }
    subscribe(event, handler) {
        if (event === "keydown")
            this.onKeyDownHandlers.push(handler);
        if (event === "keyup")
            this.onKeyUpHandlers.push(handler);
    }
    onKeyDown(e) {
        this.onKeyDownHandlers.forEach((handler) => handler(e));
    }
    onKeyUp(e) {
        this.onKeyUpHandlers.forEach((handler) => handler(e));
    }
}
export default Keyboard;
