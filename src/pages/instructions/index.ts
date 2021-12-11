export function initInstructions(change) {
  const div = document.createElement("div");
  div.innerHTML = `
    <div class="cont-inst">
      <game-text tag="h2">Presioná jugar
      y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</game-text>
      <div class="border-btn">
          <game-button class="boton">! Jugar ¡</game-button>
      </div>
    </div>
      `;
  const style = document.createElement("style");
  style.textContent = `
      .cont-inst{
        padding:30px;
          padding-top:100px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      @media(min-width:677px){
        .cont-inst{
          padding: 200px;
        }
      }
      `;
  div.appendChild(style);
  const button = div.querySelector(".boton");

  button.addEventListener("click", () => {
    change("/play");
  });
  return div;
}
