import { initInstructions } from "./pages/instructions";
import { initLoss } from "./pages/results/loss";
import { initPlay } from "./pages/play";
import { initWelcome } from "./pages/welcome";
import { initWin } from "./pages/results/win";
import { initReveal } from "./pages/reveal";
const routes = [
  { path: /\/welcome/, handle: initWelcome },
  { path: /\/instructions/, handle: initInstructions },
  { path: /\/play/, handle: initPlay },
  { path: /\/reveal/, handle: initReveal },
  { path: /\/results\/win/, handle: initWin },
  { path: /\/results\/loss/, handle: initLoss },
];
const BASE_PATH = "/desafio-final-dwf-5";
function isGithubPages() {
  return location.host.includes("github.io");
}

function initRouter(contenedor: Element) {
  function goTo(path: string | URL) {
    // history.pushState({}, "", path);
    // handleRoute(path);
    const completePath = isGithubPages() ? BASE_PATH + path : path;
    history.pushState({}, "", completePath);
    handleRoute(completePath);
  }

  if (location.pathname == "/") {
    goTo("/welcome");
  } else {
    handleRoute(location.pathname);
  }
  window.onpopstate = () => {
    handleRoute(location.pathname);
  };
  function handleRoute(route) {
    const newRoute = isGithubPages() ? route.replace(BASE_PATH, "") : route;
    for (const r of routes) {
      if (r.path.test(newRoute)) {
        const divEl = r.handle(goTo);
        if (contenedor.firstChild) {
          contenedor.firstChild.remove();
        }
        contenedor.appendChild(divEl);
      }
    }
  }
}

export { initRouter };