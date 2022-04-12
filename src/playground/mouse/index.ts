class Mouse {
  constructor(canvas: HTMLCanvasElement) {
    canvas.addEventListener("mousemove", (e) => this.onMouseMove(e), false);
    canvas.addEventListener("click", (e) => this.onMouseClick(e), false);
  }
  subscribe(event: string, handler: (e: MouseEvent) => void) {
    if (event === "mousemove") this.onMouseMoveHandlers.push(handler);
    if (event === "click") this.onMouseClickHandlers.push(handler);
  }
  onMouseMoveHandlers: ((e: MouseEvent) => void)[] = [];
  onMouseMove(e: MouseEvent) {
    this.onMouseMoveHandlers.forEach((handler) => handler(e));
  }
  onMouseClickHandlers: ((e: MouseEvent) => void)[] = [];
  onMouseClick(e: MouseEvent) {
    this.onMouseClickHandlers.forEach((handler) => handler(e));
  }
}
export default Mouse;
