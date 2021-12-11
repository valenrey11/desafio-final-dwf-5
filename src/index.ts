import { initRouter } from "./router";
import { initScore } from "./components/score-table";
import { initObjetoJugada } from "./components/mano-a-elegir";
import { initButton } from "./components/button";
import { initText } from "./components/text";
import { initCountdown } from "./components/countdown";
import { initEstrella } from "./components/estrella";
import { state } from "./state";
function main() {
  state.init();
  initScore();
  initObjetoJugada();
  initEstrella();
  initText();
  initButton();
  initCountdown();
  const contPage = document.querySelector(".page-contenedor");
  initRouter(contPage);
}
main();
