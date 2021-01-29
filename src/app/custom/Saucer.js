import gsap from "gsap/all";
import EventEmitter from "eventemitter3";

export default class Saucer extends EventEmitter {
  static get events() {
    return {
      FLY_IN: "fly_in",
      FLY_AWAY: "fly_away",
      BEAM_SHOW: "beam_showed",
      BEAM_HIDE: "beam_hide",
    };
  }
  constructor() {
    super();
    this._saucerElement = document.querySelector(".ufo");
    this._beamTopElement = document.querySelector("#beam-top");
    this._beamBottomElement = document.querySelector("#beam-bottom");
  }

  async moveTo(v) {
    if (v === "in") {
      await gsap.to(this._saucerElement, { x: "-835px", id: "flyIn" });
      this.emit(Saucer.events.FLY_IN);
    } else {
      await gsap.to(this._saucerElement, { x: "-1800px", id: "flyOut" });
      this.emit(Saucer.events.FLY_AWAY);
    }
  }

  async toggleBeam(v) {
    if (v === "on") {
      await gsap.to(this._beamTopElement, {
        opacity: "0.6",
        id: "showTopBeam",
      });
      await gsap.to(this._beamBottomElement, {
        opacity: "0.6",
        id: "showBottomBeam",
      });
      this.emit(Saucer.events.BEAM_SHOW);
    } else {
      await gsap.to(this._beamTopElement, { opacity: "0", id: "hideTopBeam" });
      await gsap.to(this._beamBottomElement, {
        opacity: "0",
        id: "hideBottomBeam",
      });
      this.emit(Saucer.events.BEAM_HIDE);
    }
  }
}
