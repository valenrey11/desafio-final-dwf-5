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

function initRouter(contenedor: Element) {
  const BASE_PATH = "/desafio-final-dwf-5";
  function isGithubPages() {
    return location.host.includes("github.io");
  }
  function goTo(path: string | URL) {
    const completePath = isGithubPages() ? BASE_PATH + path : path;
    history.pushState({}, "", completePath);
    console.log(completePath, "complete path del goto");

    handleRoute(completePath);
  }
  console.log(location.pathname, "externo");
  if (
    location.pathname == "/desafio-final-dwf-5/" ||
    location.pathname == "/"
  ) {
    console.log(location.pathname, "ejecute el if");
    console.log(true);

    goTo("/welcome");
  } else {
    console.log(false);
    console.log(location.pathname, "ejecute el else");
    handleRoute(location.pathname);
  }
  window.onpopstate = () => {
    handleRoute(location.pathname);
  };
  function handleRoute(route) {
    console.log("handle route recivio nueva ruta", route);

    const newRoute = isGithubPages() ? route.replace(BASE_PATH, "") : route;
    console.log(newRoute);

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
