// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"2HtCd":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "222e65dabdea7d65";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"7PGg5":[function(require,module,exports) {
var _router = require("./router");
var _scoreTable = require("./components/score-table");
var _manoAElegir = require("./components/mano-a-elegir");
var _button = require("./components/button");
var _text = require("./components/text");
var _countdown = require("./components/countdown");
var _estrella = require("./components/estrella");
var _state = require("./state");
function main() {
    _state.state.init();
    _scoreTable.initScore();
    _manoAElegir.initObjetoJugada();
    _estrella.initEstrella();
    _text.initText();
    _button.initButton();
    _countdown.initCountdown();
    const contPage = document.querySelector(".page-contenedor");
    _router.initRouter(contPage);
}
main();

},{"./router":"6Aetg","./components/score-table":"l0whf","./components/mano-a-elegir":"lzOOG","./components/button":"8Xtb0","./components/text":"5olxc","./components/countdown":"7FhTm","./components/estrella":"99jt0","./state":"4v8yo"}],"6Aetg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initRouter", ()=>initRouter
);
var _instructions = require("./pages/instructions");
var _loss = require("./pages/results/loss");
var _play = require("./pages/play");
var _welcome = require("./pages/welcome");
var _win = require("./pages/results/win");
var _reveal = require("./pages/reveal");
const routes = [
    {
        path: /\/welcome/,
        handle: _welcome.initWelcome
    },
    {
        path: /\/instructions/,
        handle: _instructions.initInstructions
    },
    {
        path: /\/play/,
        handle: _play.initPlay
    },
    {
        path: /\/reveal/,
        handle: _reveal.initReveal
    },
    {
        path: /\/results\/win/,
        handle: _win.initWin
    },
    {
        path: /\/results\/loss/,
        handle: _loss.initLoss
    }, 
];
function initRouter(contenedor) {
    function goTo(path) {
        history.pushState({
        }, "", path);
        handleRoute(path);
    }
    if (location.pathname == "/") goTo("/welcome");
    else handleRoute(location.pathname);
    window.onpopstate = ()=>{
        handleRoute(location.pathname);
    };
    function handleRoute(route) {
        for (const r of routes)if (r.path.test(route)) {
            const divEl = r.handle(goTo);
            if (contenedor.firstChild) contenedor.firstChild.remove();
            contenedor.appendChild(divEl);
        }
    }
}

},{"./pages/instructions":"9kmmC","./pages/results/loss":"dPJl3","./pages/play":"lGmOe","./pages/welcome":"k5VFW","./pages/results/win":"iiCpu","./pages/reveal":"00TRj","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9kmmC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initInstructions", ()=>initInstructions
);
function initInstructions(change) {
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
    button.addEventListener("click", ()=>{
        change("/play");
    });
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"dPJl3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initLoss", ()=>initLoss
);
function initLoss(change) {
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="cont-loss">
          <div class="star-contenedor">
            <my-estrella star="red" class="jugada"></my-estrella>
            <game-text class="texto" tag="h1">Perdiste</game-text>   
          </div>
          <score-table></score-table>        
          <div class="boton-contenedor">
              <game-button class="boton">Volver a jugar!</game-button>
          </div>
        </div>
          `;
    const style = document.createElement("style");
    style.textContent = `
          .cont-loss{
            background: #894949E5;
            padding:30px;
            height:100vh;
          }
          @media(min-width:677px){
            .cont-loss{
              display:flex;
              flex-direction:column;
              gap:80px;
            }
          }
          .cont-loss .texto{
            --verde:white;
            text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
            position: absolute;  
            top:60px;       
          }
          .star-contenedor{
            display:flex;
            justify-content: center;
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
    button.addEventListener("click", ()=>{
        change("/instructions");
    });
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"lGmOe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initPlay", ()=>initPlay
);
var _state = require("../../state");
function initPlay(change) {
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
    const current = _state.state.getState();
    div.querySelectorAll(".play").forEach((item)=>{
        item.addEventListener("click", (e)=>{
            e.preventDefault();
            const target = e.target;
            const playerPLaySelected = target.getAttribute("jugada");
            _state.state.setUserMove(playerPLaySelected, current);
            _state.state.setComputerMove(current);
            setTimeout(()=>{
                change("/reveal");
            }, 1500);
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
    _state.state.setState(current);
    return div;
}

},{"../../state":"4v8yo","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4v8yo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state
);
const state = {
    data: {
        jugada: {
            userPlay: "",
            computerPlay: ""
        },
        history: {
            user: 0,
            computer: 0
        }
    },
    listeners: [],
    init () {
        const localData = localStorage.getItem("saved-game");
        const storageParseado = JSON.parse(localData);
        if (!storageParseado) this.setState(this.getState());
        else this.setState(storageParseado);
    },
    pushToHistory (winner) {
        if (winner == "user-win") this.data.history.user++;
        if (winner == "computer-win") this.data.history.computer++;
    },
    getState () {
        return this.data;
    },
    setState (newState) {
        this.data = newState;
        for (const cb of this.listeners)cb();
        localStorage.setItem("saved-game", JSON.stringify(newState));
    },
    suscribe (callback) {
        this.listeners.push(callback);
    },
    setUserMove (move, currentState) {
        currentState.jugada.userPlay = move;
    },
    setComputerMove (currentState) {
        const random = Math.floor(Math.random() * 3 + 1);
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
    whoWins (userPlay, computerPlay) {
        const userWinPiedra = userPlay == "piedra" && computerPlay == "tijera";
        const userWinPapel = userPlay == "papel" && computerPlay == "piedra";
        const userWinTijera = userPlay == "tijera" && computerPlay == "papel";
        const computerWinPiedra = computerPlay == "piedra" && userPlay == "tijera";
        const computerWinPapel = computerPlay == "papel" && userPlay == "piedra";
        const computerWinTijera = computerPlay == "tijera" && userPlay == "papel";
        const winner = [
            userWinPiedra,
            userWinPapel,
            userWinTijera
        ].includes(true);
        const loser = [
            computerWinPiedra,
            computerWinPapel,
            computerWinTijera, 
        ].includes(true);
        if (winner == true) return "user-win";
        else if (loser == true) return "computer-win";
        else return "empate";
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"k5VFW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initWelcome", ()=>initWelcome
);
const papel = require("../../media/papel.png");
const tijera = require("../../media/tijera.png");
const piedra = require("../../media/piedra.png");
function initWelcome(change) {
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
    }
    @media(min-width:677px){
      .cont-welc{
        padding: 200px;
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
    button.addEventListener("click", ()=>{
        change("/instructions");
    });
    return div;
}

},{"../../media/papel.png":"9I6Xj","../../media/tijera.png":"3T4F9","../../media/piedra.png":"jLA4P","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9I6Xj":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2VWEd') + "papel.f87643aa.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"chiK4":[function(require,module,exports) {
"use strict";
var bundleURL = {
};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"3T4F9":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2VWEd') + "tijera.2cf71686.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"jLA4P":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2VWEd') + "piedra.a1c1abc9.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"iiCpu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initWin", ()=>initWin
);
function initWin(change) {
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="cont-win">
          <div class="star-contenedor">
            <my-estrella star="green" class="estrella"></my-estrella>
            <game-text class="texto" tag="h1">Ganaste</game-text>   
          </div>
          <score-table></score-table>        
          <div class="boton-contenedor">
              <game-button class="boton">Volver a jugar!</game-button>
          </div>
        </div>
          `;
    const style = document.createElement("style");
    style.textContent = `
          .cont-win{
            background-color: #888949E5;
            padding:30px;
            height:100vh;
          }
          @media(min-width:677px){
            .cont-win{
              display:flex;
              flex-direction:column;
              gap:80px;
            }
          }
          .cont-win .texto{
            --verde:white;
            text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
            position: absolute;  
            top:60px;
          }
          .estrella{
            margin:0 auto;
            width:260px;

          }
          .star-contenedor{
            display:flex;
            justify-content: center;
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
    button.addEventListener("click", ()=>{
        change("/instructions");
    });
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"00TRj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initReveal", ()=>initReveal
);
var _state = require("../../state");
function initReveal(change) {
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="cont-play">
    <div class="manos-contenedor">
    <my-jugada class="play pc" jugada="pc"></my-jugada> 
    <my-jugada class="play user" jugada="user"></my-jugada> 
    </div>
    </div>
    `;
    const lastState = _state.state.getState();
    const finalResult = _state.state.whoWins(lastState.jugada.userPlay, lastState.jugada.computerPlay);
    _state.state.pushToHistory(finalResult);
    _state.state.setState(lastState);
    const plays = div.querySelectorAll(".play");
    plays[0].setAttribute("jugada", lastState.jugada.computerPlay);
    plays[1].setAttribute("jugada", lastState.jugada.userPlay);
    const style = document.createElement("style");
    style.textContent = `
        .cont-play{
          height:100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding:30px;
        }
        .manos-contenedor{
          display:flex;
          flex-direction:column;
          gap:300px;
        }
        .play{
          pointer-events: none;
        }
        .pc{
          transform: rotate(180deg);
          animation-name: pc;
          animation-duration:1.5s;
          animation-fill-mode:forwards;
        }
        .user{
          animation-name: user;
          animation-duration:1.5s;
          animation-fill-mode:forwards;
        }
        @keyframes pc {
          from {
            position: relative;
            top: 0%;
          }
          to {
            position: relative;
            top: 18%;
          }
        }
        @keyframes user {
          from {
            position: relative;
            bottom: 0%;
          }
          to {
            position: relative;
            bottom: 18%;
          }
        }
        
        `;
    div.appendChild(style);
    function redirect() {
        if (finalResult == "user-win") change("/results/win");
        else if (finalResult == "computer-win") change("/results/loss");
        else change("/play");
    }
    setTimeout(redirect, 2500);
    return div;
}

},{"../../state":"4v8yo","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"l0whf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initScore", ()=>initScore
);
var _state = require("../../state");
function initScore() {
    class Score extends HTMLElement {
        constructor(){
            super();
            this.shadow = this.attachShadow({
                mode: "open"
            });
        }
        connectedCallback() {
            const style = document.createElement("style");
            style.textContent = `
      .score{
      }
      .score-div{
        border: 10px solid;
        border-radius: 10px;
          width: 259px;
          height: 217px;
        margin:0 auto;

        display:flex;
        flex-direction:column;
        align-items:center;
        gap:10px;
      }
      .score-title{
          font-size:55px;
          margin: 0;
        }
        .score-player{
            font-size:45px;
            margin: 0 20px 0 0;
            align-self:flex-end;
      }
        .        
        `;
            this.shadow.appendChild(style);
            this.render();
        }
        render() {
            const div = document.createElement("div");
            div.className = `score`;
            const last = _state.state.getState();
            const userHist = last.history.user;
            const cpuHist = last.history.computer;
            div.innerHTML = `
      <div class="score-div">
        <h3 class="score-title">Score</h3>
        <h4 class="score-player">Vos:<span class="score-point">${userHist}</span></h4>
        <h4 class="score-player">Maquina:<span class="score-point">${cpuHist}</span></h4>
      </div>
      `;
            this.shadow.appendChild(div);
        }
    }
    customElements.define("score-table", Score);
}

},{"../../state":"4v8yo","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"lzOOG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initObjetoJugada", ()=>initObjetoJugada
);
const piedra = require("../../media/piedra.png");
const papel = require("../../media/papel.png");
const tijera = require("../../media/tijera.png");
function initObjetoJugada() {
    class JugadaOpcion extends HTMLElement {
        constructor(){
            super();
            this.shadow = this.attachShadow({
                mode: "open"
            });
        }
        connectedCallback() {
            const style = document.createElement("style");
            style.textContent = `
        .jugada:hover{
            transform:scale(1.5);
        }
        @media(min-width:677px){
          .jugada{
            width:136px;
            height:258px;
          }
        }
        `;
            this.shadow.appendChild(style);
            this.render();
        }
        render() {
            const div = document.createElement("div");
            div.innerHTML = `
        <img class="jugada" src="" alt="">
        `;
            this.shadow.appendChild(div);
            if (this.getAttribute("jugada") == "piedra") {
                div.querySelector(".jugada").src = piedra;
                div.querySelector(".jugada").alt = "piedra";
            }
            if (this.getAttribute("jugada") == "papel") {
                div.querySelector(".jugada").src = papel;
                div.querySelector(".jugada").alt = "papel";
            }
            if (this.getAttribute("jugada") == "tijera") {
                div.querySelector(".jugada").src = tijera;
                div.querySelector(".jugada").alt = "tijera";
            }
        }
    }
    customElements.define("my-jugada", JugadaOpcion);
}

},{"../../media/piedra.png":"jLA4P","../../media/papel.png":"9I6Xj","../../media/tijera.png":"3T4F9","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8Xtb0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initButton", ()=>initButton
);
function initButton() {
    class GameButton extends HTMLElement {
        constructor(){
            super();
            this.shadow = this.attachShadow({
                mode: "open"
            });
        }
        connectedCallback() {
            this.render();
        }
        render() {
            const div = document.createElement("div");
            div.innerHTML = `
      <button class="btn"></button>
      `;
            div.className = `border-btn`;
            const button = div.querySelector(".btn");
            button.innerHTML = this.innerHTML;
            const style = document.createElement("style");
            style.textContent = `
        .btn{
            width: 100%;
            background-color: var(--azul-boton);
            color:white;

            font-size: 40px;
            font-family: 'Odibee Sans', cursive;

            border: solid 10px #001997;
            border-radius:4px;
            height: 90px;
          }
          .border-btn{
            min-width: 320px;
          }
          @media(min-width:677px){
            .border-btn{
              max-width:600px;
              margin: 0 auto;
            }
          }
        `;
            this.shadow.appendChild(style);
            this.shadow.appendChild(div);
        }
    }
    customElements.define("game-button", GameButton);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5olxc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initText", ()=>initText
);
function initText() {
    class Text extends HTMLElement {
        constructor(){
            super();
            this.tags = [
                "h1",
                "h2"
            ];
            this.tag = "h2";
            this.shadow = this.attachShadow({
                mode: "open"
            });
            if (this.tags.includes(this.getAttribute("tag"))) this.tag = this.getAttribute("tag") || this.tag;
            this.render();
        }
        render() {
            const div = document.createElement(this.tag);
            div.textContent = this.textContent;
            const style = document.createElement("style");
            style.textContent = `
            .bienvenida{
                font-family: 'Odibee Sans', cursive;
                font-size: 80px;
                color: var(--verde); 
                text-align: center;
            }        
            .instrucciones{
                font-size: 40px;
                font-family: 'Odibee Sans';
                text-align: center;
            }
            @media(min-width:677px){
              .instrucciones{
                max-width: 320px;
              }
            }
        `;
            if (this.tag == "h1") div.setAttribute("class", "bienvenida");
            else div.setAttribute("class", "instrucciones");
            this.shadow.appendChild(style);
            this.shadow.appendChild(div);
        }
    }
    customElements.define("game-text", Text);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"7FhTm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initCountdown", ()=>initCountdown
);
function initCountdown() {
    class Countdown extends HTMLElement {
        constructor(){
            super();
            this.shadow = this.attachShadow({
                mode: "open"
            });
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
            const intervalId = setInterval(()=>{
                counter--;
                if (counter == 0) clearInterval(intervalId);
                const numbStringueado = JSON.stringify(counter);
                numb.textContent = numbStringueado;
            }, 1000);
            this.shadow.appendChild(style);
            this.shadow.appendChild(div);
        }
    }
    customElements.define("count-down", Countdown);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"99jt0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initEstrella", ()=>initEstrella
);
const redStar = require("../../media/star 2.png");
const greenStar = require("../../media/star 1.png");
function initEstrella() {
    class Estrella extends HTMLElement {
        constructor(){
            super();
            this.shadow = this.attachShadow({
                mode: "open"
            });
        }
        connectedCallback() {
            this.render();
        }
        render() {
            const div = document.createElement("div");
            div.innerHTML = `
        <img class="estrella" src="" alt="greenStar">
        `;
            this.shadow.appendChild(div);
            if (this.getAttribute("star") == "green") div.querySelector(".estrella").src = greenStar;
            else div.querySelector(".estrella").src = redStar;
        }
    }
    customElements.define("my-estrella", Estrella);
}

},{"../../media/star 2.png":"eBrfp","../../media/star 1.png":"13UCL","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"eBrfp":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2VWEd') + "star 2.da9581df.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"13UCL":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2VWEd') + "star 1.9476d8c5.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}]},["2HtCd","7PGg5"], "7PGg5", "parcelRequire93c5")

//# sourceMappingURL=index.bdea7d65.js.map
