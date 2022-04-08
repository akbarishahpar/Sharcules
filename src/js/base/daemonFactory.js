import { Sprite } from "pixi.js";
var DaemonFactory = /** @class */ (function () {
    function DaemonFactory(playground) {
        this.playground = playground;
    }
    DaemonFactory.prototype.Create = function (type) {
        var daemon = new type();
        daemon.DaemonFactory = this;
        daemon.Sprite = new Sprite(this.playground.ResolveTexture(daemon.Url));
        this.playground.RegisterSprite(daemon.Sprite);
        if (daemon.OnTick !== undefined)
            this.playground.App.ticker.add(daemon.OnTick);
        if (daemon.OnKeyDown !== undefined)
            this.playground.Keybarod.Subscribe("keydown", daemon.OnKeyDown);
        if (daemon.OnKeyUp !== undefined)
            this.playground.Keybarod.Subscribe("keyup", daemon.OnKeyUp);
        return daemon;
    };
    return DaemonFactory;
}());
export default DaemonFactory;
