const piedra = require("../../media/piedra.png");
const papel = require("../../media/papel.png");
const tijera = require("../../media/tijera.png");
export function initObjetoJugada() {
  class JugadaOpcion extends HTMLElement {
    shadow: ShadowRoot;
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      const style = document.createElement("style");
      style.textContent = `
        .jugada:hover{
            transform:scale(1.5);
          }
          @media(min-width:677px){
            .jugada:hover{
            transform:scale(1.2);
          }
        }
        @media(min-width:677px){
          .jugada{
            width:136px;
            height:258px;
          }
        }
        `;
      this.shadow.appendChild(style);
      this.render();
    }
    render() {
      const div = document.createElement("div");

      div.innerHTML = `
        <img class="jugada" src="" alt="">
        `;
      this.shadow.appendChild(div);
      if (this.getAttribute("jugada") == "piedra") {
        (div.querySelector(".jugada") as HTMLImageElement).src = piedra;
        (div.querySelector(".jugada") as HTMLImageElement).alt = "piedra";
      }
      if (this.getAttribute("jugada") == "papel") {
        (div.querySelector(".jugada") as HTMLImageElement).src = papel;
        (div.querySelector(".jugada") as HTMLImageElement).alt = "papel";
      }
      if (this.getAttribute("jugada") == "tijera") {
        (div.querySelector(".jugada") as HTMLImageElement).src = tijera;
        (div.querySelector(".jugada") as HTMLImageElement).alt = "tijera";
      }
    }
  }
  customElements.define("my-jugada", JugadaOpcion);
}
