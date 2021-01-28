import gsap from "gsap/all";
import Cow from "./Cow";
import Saucer from "./Saucer";
import EventEmitter from "eventemitter3";

export default class Animation extends EventEmitter {
  constructor() {
    super();
    this.saucer = new Saucer();
    this.cow = new Cow();
  }

  async start() {
    await this.saucer.moveTo();
    await this.saucer.toggleBeam();
    await this.cow.moveTo();
    await this.cow.hide();
  }
}
