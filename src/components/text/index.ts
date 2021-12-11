export function initText() {
  class Text extends HTMLElement {
    shadow: ShadowRoot;
    tags: string[] = ["h1", "h2"];
    tag: string = "h2";
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });

      if (this.tags.includes(this.getAttribute("tag"))) {
        this.tag = this.getAttribute("tag") || this.tag;
      }

      this.render();
    }
    render() {
      const div = document.createElement(this.tag);
      div.textContent = this.textContent;
      const style = document.createElement("style");
      style.textContent = `
            .bienvenida{
                font-family: 'Odibee Sans', cursive;
                font-size: 80px;
                color: var(--verde); 
                text-align: center;
            }        
            .instrucciones{
                font-size: 40px;
                font-family: 'Odibee Sans';
                text-align: center;
            }
            @media(min-width:677px){
              .instrucciones{
                max-width: 320px;
              }
            }
        `;
      if (this.tag == "h1") {
        div.setAttribute("class", "bienvenida");
      } else {
        div.setAttribute("class", "instrucciones");
      }
      this.shadow.appendChild(style);
      this.shadow.appendChild(div);
    }
  }
  customElements.define("game-text", Text);
}
