import gsap from "gsap/all";
import EventEmitter from "eventemitter3";

export default class Cow extends EventEmitter {
  static get events() {
    return {
      ABDUCT_COMPLETED: "abduct_completed",
    };
  }
  constructor() {
    super();
    this.cow = document.querySelector(".cow");
  }
  moveTo() {
    gsap.to(this.cow, { y: "-390px", id: "cowAbduction" });
    this.emit(Cow.events.ABDUCT_COMPLETED);
  }

  hide() {
    gsap.to(this.cow, { opacity: "0", id: "cowHide" });
  }
}
