import { state } from "../../state";

export function initPlay(change) {
  const div = document.createElement("div");
  div.innerHTML = `
  <div class="cont-play">
  <count-down></count-down>
  <div class="manos-contenedor">
  <my-jugada class="play" jugada="piedra"></my-jugada> 
  <my-jugada class="play" jugada="papel"></my-jugada> 
  <my-jugada class="play" jugada="tijera"></my-jugada> 
  </div>
  </div>
  `;
  const current = state.getState();

  let counter = 3;
  const intervalId = setInterval(() => {
    counter--;
    if (counter == 0) {
      change("/instructions");
      clearInterval(intervalId);
    }
  }, 1100);

  div.querySelectorAll(".play").forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      clearInterval(intervalId);
      const target: any = e.target;
      const playerPLaySelected = target.getAttribute("jugada");

      state.setUserMove(playerPLaySelected, current);
      state.setComputerMove(current);

      setTimeout(() => {
        change("/reveal");
      }, 600);
    });
  });

  const style = document.createElement("style");
  style.textContent = `
  .cont-play{
    padding:30px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: space-between;
  }
  .manos-contenedor{
    display:flex;
    gap:50px;
  }
  
  
  `;
  div.appendChild(style);
  state.setState(current);

  return div;
}
