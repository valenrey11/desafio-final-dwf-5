const redStar = require("../../media/star 2.png");
const greenStar = require("../../media/star 1.png");
export function initEstrella() {
  class Estrella extends HTMLElement {
    shadow: ShadowRoot;
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      this.render();
    }
    render() {
      const div = document.createElement("div");

      div.innerHTML = `
        <img class="estrella" src="" alt="greenStar">
        `;

      this.shadow.appendChild(div);
      if (this.getAttribute("star") == "green") {
        (div.querySelector(".estrella") as HTMLImageElement).src = greenStar;
      } else {
        (div.querySelector(".estrella") as HTMLImageElement).src = redStar;
      }
    }
  }
  customElements.define("my-estrella", Estrella);
}
