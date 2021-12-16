import { state } from "../../state";
export function initReveal(change) {
  const div = document.createElement("div");
  div.innerHTML = `
    <div class="cont-play">
      <div class="manos-contenedor">
        <my-jugada class="play pc" jugada="pc"></my-jugada> 
        <my-jugada class="play user" jugada="user"></my-jugada> 
      </div>
    </div>
    `;
  const lastState = state.getState();

  const finalResult = state.whoWins(
    lastState.jugada.userPlay,
    lastState.jugada.computerPlay
  );

  state.pushToHistory(finalResult);

  state.setState(lastState);

  const plays = div.querySelectorAll(".play");
  plays[0].setAttribute("jugada", lastState.jugada.computerPlay);
  plays[1].setAttribute("jugada", lastState.jugada.userPlay);

  const style = document.createElement("style");
  style.textContent = `
    .cont-play {
      height: 100vh;
    }
    .manos-contenedor {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 300px;
    }
    @media (min-width: 677px) {
      .manos-contenedor {
        gap: 0px;
      }
    }
    .play {
      pointer-events: none;
    }
    
    .pc {
      transform: rotate(180deg);
      animation-name: pc;
      animation-duration: 1.2s;
      animation-fill-mode: forwards;
    }
    .user {
      animation-name: user;
      animation-duration: 1.2s;
      animation-fill-mode: forwards;
    }
    
    @keyframes pc {
      from {
        position: absolute;
        top: 0%;
      }
      to {
        position: absolute;
        top: 25%;
      }
    }
    @media (min-width: 677px) {
      @keyframes pc {
        from {
          position: absolute;
          top: 0%;
        }
        to {
          position: absolute;
          top: 4.7%;
        }
      }
    }
    
    @keyframes user {
      from {
        position: absolute;
        bottom: 0%;
      }
      to {
        position: absolute;
        bottom: 25%;
      }
    }
    @media (min-width: 677px) {
      @keyframes user {
        from {
          position: absolute;
          bottom: 0%;
        }
        to {
          position: absolute;
          bottom: 4.7%;
        }
      }
    }
    
    `;
  div.appendChild(style);
  console.log(div);

  function redirect() {
    if (finalResult == "user-win") {
      change("/results/win");
    } else if (finalResult == "computer-win") {
      change("/results/loss");
    } else {
      change("/play");
    }
  }

  setTimeout(redirect, 2200);

  return div;
}
