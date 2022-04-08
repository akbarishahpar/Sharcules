class Mouse {
  constructor(canvas: HTMLCanvasElement) {
    canvas.addEventListener("mousemove", (e) => this.onMouseMove(e), false);
    canvas.addEventListener("click", (e) => this.onMouseClick(e), false);
  }
  Subscribe(event: string, handler: (e: MouseEvent) => void): void {
    if (event === "mousemove") this.onMouseMoveHandlers.push(handler);
    if (event === "click") this.onMouseClickHandlers.push(handler);
  }
  onMouseMoveHandlers: ((e: MouseEvent) => void)[] = [];
  onMouseMove(e: MouseEvent): void {
    this.onMouseMoveHandlers.forEach((handler) => handler(e));
  }
  onMouseClickHandlers: ((e: MouseEvent) => void)[] = [];
  onMouseClick(e: MouseEvent): void {
    this.onMouseClickHandlers.forEach((handler) => handler(e));
  }
}
export default Mouse;
