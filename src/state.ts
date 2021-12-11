type Move = "piedra" | "papel" | "tijera";
type Game = { userPlay; computerPlay };
const state = {
  data: {
    jugada: {
      userPlay: "",
      computerPlay: "",
    },
    history: {
      user: 0,
      computer: 0,
    },
  },
  listeners: [],
  init() {
    const localData = localStorage.getItem("saved-game");
    const storageParseado = JSON.parse(localData);
    if (!storageParseado) {
      this.setState(this.getState());
    } else {
      this.setState(storageParseado);
    }
  },
  pushToHistory(winner) {
    if (winner == "user-win") {
      this.data.history.user++;
    }
    if (winner == "computer-win") {
      this.data.history.computer++;
    }
  },
  getState() {
    return this.data;
  },
  setState(newState) {
    this.data = newState;
    for (const cb of this.listeners) {
      cb();
    }
    localStorage.setItem("saved-game", JSON.stringify(newState));
  },
  suscribe(callback: () => any) {
    this.listeners.push(callback);
  },
  setUserMove(move: Move, currentState) {
    currentState.jugada.userPlay = move;
  },
  setComputerMove(currentState) {
    const random = Math.floor(Math.random() * (4 - 1) + 1);
    if (random == 1) {
      let random = "piedra";
      currentState.jugada.computerPlay = random;
    }
    if (random == 2) {
      let random = "papel";
      currentState.jugada.computerPlay = random;
    }
    if (random == 3) {
      let random = "tijera";
      currentState.jugada.computerPlay = random;
    }
  },

  whoWins(userPlay, computerPlay) {
    const userWinPiedra = userPlay == "piedra" && computerPlay == "tijera";
    const userWinPapel = userPlay == "papel" && computerPlay == "piedra";
    const userWinTijera = userPlay == "tijera" && computerPlay == "papel";
    const computerWinPiedra = computerPlay == "piedra" && userPlay == "tijera";
    const computerWinPapel = computerPlay == "papel" && userPlay == "piedra";
    const computerWinTijera = computerPlay == "tijera" && userPlay == "papel";

    const winner = [userWinPiedra, userWinPapel, userWinTijera].includes(true);
    const loser = [
      computerWinPiedra,
      computerWinPapel,
      computerWinTijera,
    ].includes(true);

    if (winner == true) {
      return "user-win";
    } else if (loser == true) {
      return "computer-win";
    } else return "empate";
  },
};
export { state };
