export function initLoss(change) {
  const div = document.createElement("div");
  div.innerHTML = `
        <div class="cont-loss">
          <div class="star-contenedor">
            <my-estrella star="red" class="jugada"></my-estrella>
            <game-text class="texto" tag="h1">Perdiste</game-text>   
          </div>
          <div class="score-and-button">
            <score-table></score-table>        
            <div class="boton-contenedor">
              <game-button class="boton">Volver a jugar!</game-button>
            </div>
          </div>
        </div>
          `;
  const style = document.createElement("style");
  style.textContent = `
          .cont-loss{
            background: #894949E5;
            padding:30px;
            height:100vh;
            overflow:auto;
          }
          @media(min-width:677px){
            .cont-loss{
              display:flex;
              flex-direction:column;
              gap:20px;
            }
          }
          .cont-loss .texto{
            --verde:white;
            text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
            position: absolute;  
            top:30px;       
          }
          .star-contenedor{
            display:flex;
            justify-content: center;
            position:relative;
          }
          .score-table{
            border:solid;
            display:block;
          }
          .boton-contenedor{
            margin-top:15px;
          }
          `;

  div.appendChild(style);
  const button = div.querySelector(".boton");

  button.addEventListener("click", () => {
    change("/instructions");
  });
  return div;
}
