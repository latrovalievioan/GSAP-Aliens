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

  moveTo() {
    gsap.to(this._saucerElement, { x: "-835px", id: "flyIn" });
    this.emit(Saucer.events.FLY_IN);
    gsap.to(this._saucerElement, { x: "-1800px", id: "flyOut" });
    this.emit(Saucer.events.FLY_AWAY);
  }

  toggleBeam() {
    gsap.to(this._beamTopElement, { opacity: "0.6", id: "showTopBeam" });
    gsap.to(this._beamBottomElement, { opacity: "0.6", id: "showBottomBeam" });
    this.emit(Saucer.events.BEAM_SHOW);
    gsap.to(this._beamTopElement, { opacity: "0", id: "hideTopBeam" });
    gsap.to(this._beamBottomElement, { opacity: "0", id: "hideBottomBeam" });
    this.emit(Saucer.events.BEAM_HIDE);
  }
}
