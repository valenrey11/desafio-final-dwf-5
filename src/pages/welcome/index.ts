const papel = require("../../media/papel.png");
const tijera = require("../../media/tijera.png");
const piedra = require("../../media/piedra.png");

export function initWelcome(change) {
  const div = document.createElement("div");
  div.innerHTML = `
  <div class="cont-welc">
    <game-text tag="h1">Piedra, Papel o Tijera</game-text>
    <div>
        <game-button class="boton">Empezar</game-button>
    </div>
    <div class="img-cont">
    <img src="${papel}" alt="papel" />
    <img src="${tijera}" alt="tijera" />
    <img src="${piedra}" alt="piedra" />
    </div>
  </div>
    `;
  const style = document.createElement("style");
  style.textContent = `
    .cont-welc{
      height:100vh;
      padding:30px;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-image: url("");
    }
    @media(min-width:677px){
      .cont-welc{
        padding:;
      }
    }
    
    .img-cont {
      display: flex;
      gap: 30px;
      margin-top: 100px;
    }
    
    `;
  div.appendChild(style);
  const button = div.querySelector(".boton");

  button.addEventListener("click", () => {
    change("/instructions");
  });
  return div;
}
