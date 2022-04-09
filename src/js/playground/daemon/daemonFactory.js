import { Sprite } from "pixi.js";
var DaemonFactory = /** @class */ (function () {
    function DaemonFactory(playground) {
        this.playground = playground;
    }
    DaemonFactory.prototype.Create = function (type) {
        var daemon = new type();
        daemon.daemonFactory = this;
        daemon.sprite = new Sprite(this.playground.resolveTexture(daemon.url));
        this.playground.registerSprite(daemon.sprite);
        if (daemon.onTick !== undefined)
            this.playground.app.ticker.add(daemon.onTick);
        if (daemon.onKeyDown !== undefined)
            this.playground.keybarod.subscribe("keydown", daemon.onKeyDown);
        if (daemon.onKeyUp !== undefined)
            this.playground.keybarod.subscribe("keyup", daemon.onKeyUp);
        if (daemon.onMouseMove !== undefined)
            this.playground.mouse.subscribe("mousemove", daemon.onMouseMove);
        if (daemon.onMouseClick !== undefined)
            this.playground.mouse.subscribe("click", daemon.onMouseClick);
        if (daemon.onCreate !== undefined)
            daemon.onCreate();
        return daemon;
    };
    return DaemonFactory;
}());
export default DaemonFactory;
