import Daemon from "./daemon";
import Playground from "../";
class DaemonFactory {
  constructor(public playground: Playground) {}
  Create<Type extends Daemon>(type: { new (): Type }): Type {
    const daemon = new type();
    daemon.daemonFactory = this;
    daemon.playground = this.playground;
    daemon.playground.addDaemon(daemon);
    if (daemon.onTick !== undefined)
      this.playground.app.ticker.add(<(delta: Number) => void>daemon.onTick);
    if (daemon.onKeyDown !== undefined)
      this.playground.keybarod.subscribe("keydown", daemon.onKeyDown);
    if (daemon.onKeyUp !== undefined)
      this.playground.keybarod.subscribe("keyup", daemon.onKeyUp);
    if (daemon.onMouseMove !== undefined)
      this.playground.mouse.subscribe("mousemove", daemon.onMouseMove);
    if (daemon.onMouseClick !== undefined)
      this.playground.mouse.subscribe("click", daemon.onMouseClick);
    if (daemon.onCreate !== undefined) daemon.onCreate();
    return daemon;
  }
}
export default DaemonFactory;
