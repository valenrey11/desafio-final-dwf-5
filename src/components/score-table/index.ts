import { state } from "../../state";

export function initScore() {
  class Score extends HTMLElement {
    shadow: ShadowRoot;
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      const style = document.createElement("style");
      style.textContent = `
      .score{
      }
      .score-div{
        border: 10px solid;
        border-radius: 10px;
          width: 259px;
          padding:5px;
        margin:0 auto;

        display:flex;
        flex-direction:column;
        align-items:center;
        gap:10px;
      }
      .score-title{
          font-size:55px;
          margin: 0;
        }
        .score-player{
            font-size:45px;
            margin: 0 20px 0 0;
            align-self:flex-end;
      }
        .        
        `;
      this.shadow.appendChild(style);

      this.render();
    }
    render() {
      const div = document.createElement("div");
      div.className = `score`;

      const last = state.getState();

      const userHist = last.history.user;
      const cpuHist = last.history.computer;

      div.innerHTML = `
      <div class="score-div">
        <h3 class="score-title">Score</h3>
        <h4 class="score-player">Vos:<span class="score-point">${userHist}</span></h4>
        <h4 class="score-player">Maquina:<span class="score-point">${cpuHist}</span></h4>
      </div>
      `;

      this.shadow.appendChild(div);
    }
  }
  customElements.define("score-table", Score);
}
