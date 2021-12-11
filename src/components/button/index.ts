export function initButton() {
  class GameButton extends HTMLElement {
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
      <button class="btn"></button>
      `;
      div.className = `border-btn`;

      const button = div.querySelector(".btn");
      button.innerHTML = this.innerHTML;

      const style = document.createElement("style");
      style.textContent = `
        .btn{
            width: 100%;
            background-color: var(--azul-boton);
            color:white;

            font-size: 40px;
            font-family: 'Odibee Sans', cursive;

            border: solid 10px #001997;
            border-radius:4px;
            height: 90px;
          }
          .border-btn{
            min-width: 320px;
          }
          @media(min-width:677px){
            .border-btn{
              max-width:600px;
              margin: 0 auto;
            }
          }
        `;
      this.shadow.appendChild(style);
      this.shadow.appendChild(div);
    }
  }

  customElements.define("game-button", GameButton);
}
