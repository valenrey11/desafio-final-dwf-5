export function initCountdown() {
  class Countdown extends HTMLElement {
    shadow: ShadowRoot;
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
      this.render();
    }
    render() {
      const style = document.createElement("style");
      style.textContent = `
      .circle{
        position:relative;
        background-color: #6060ff;
        height: 150px;
          width: 150px;
          border-radius: 50%;
          border-top: 25px solid transparent;
          border-right: 25px solid #d9534f;
          border-bottom: 25px solid transparent;
          border-left: 25px solid transparent;
          animation-name: rueda;
          animation-duration:1s;
          animation-iteration-count:infinite;
      }
      .circle:before{
        content: '';
        position: absolute;
        background-color: black;
        height: 100%;
        width: 100%;
        border-radius: 50%;
    }
    @keyframes rueda {
      from {
        border-top: 25px solid transparent;
        border-right: 25px solid #d9534f;
        border-bottom: 25px solid transparent;
        border-left: 25px solid transparent;
      }
      25% {
        border-top: 25px solid transparent;
        border-right: 25px solid transparent;
        border-bottom: 25px solid #d9534f;
        border-left: 25px solid transparent;
      }
      50% {
        border-top: 25px solid transparent;
        border-right: 25px solid transparent;
        border-bottom: 25px solid transparent;
        border-left: 25px solid #d9534f;
      }
      75% {
        border-top: 25px solid #d9534f;
        border-right: 25px solid transparent;
        border-bottom: 25px solid transparent;
        border-left: 25px solid transparent;
      }
    }
      .shadow-cont{
        display:flex;
        justify-content: center;
      }
      .count-down-numb{
        margin:0;
        color:#d9534f;
        position:relative;
        left:34%;
        top:15%;
        font-size:100px;
      }
      `;
      const div = document.createElement("div");
      div.innerHTML = `
            <div class="shadow-cont">
                <div class="circle">
                  <h1 class="count-down-numb">3</h1>
                </div>
            </div>
        `;
      const numb = div.querySelector(".count-down-numb");
      let counter = 3;
      const intervalId = setInterval(() => {
        counter--;
        if (counter == 0) {
          clearInterval(intervalId);
        }
        const numbStringueado = JSON.stringify(counter);
        numb.textContent = numbStringueado;
      }, 1000);
      this.shadow.appendChild(style);
      this.shadow.appendChild(div);
    }
  }
  customElements.define("count-down", Countdown);
}
