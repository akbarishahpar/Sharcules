class Keyboard {
  constructor() {
    window.addEventListener("keydown", (e) => this.onKeyDown(e), false);
    window.addEventListener("keyup", (e) => this.onKeyUp(e), false);
  }
  subscribe(event: string, handler: (e: KeyboardEvent) => void) {
    if (event === "keydown") this.onKeyDownHandlers.push(handler);
    if (event === "keyup") this.onKeyUpHandlers.push(handler);
  }
  onKeyDownHandlers: ((e: KeyboardEvent) => void)[] = [];
  onKeyDown(e: KeyboardEvent) {
    this.onKeyDownHandlers.forEach((handler) => handler(e));
  }
  onKeyUpHandlers: ((e: KeyboardEvent) => void)[] = [];
  onKeyUp(e: KeyboardEvent) {
    this.onKeyUpHandlers.forEach((handler) => handler(e));
  }
}
export default Keyboard;
