function n(n,e,t,a){Object.defineProperty(n,e,{get:t,set:a,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},o=e.parcelRequire93c5;null==o&&((o=function(n){if(n in t)return t[n].exports;if(n in a){var e=a[n];delete a[n];var o={id:n,exports:{}};return t[n]=o,e.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+n+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(n,e){a[n]=e},e.parcelRequire93c5=o),o.register("bXuNP",(function(e,t){var a,o;n(e.exports,"register",(()=>a),(n=>a=n)),n(e.exports,"resolve",(()=>o),(n=>o=n));var r={};a=function(n){for(var e=Object.keys(n),t=0;t<e.length;t++)r[e[t]]=n[e[t]]},o=function(n){var e=r[n];if(null==e)throw new Error("Could not resolve bundle with id "+n);return e}})),o("bXuNP").register(JSON.parse('{"d3X8m":"index.78daf7be.js","6o2SI":"papel.5f334517.png","ekcml":"tijera.00169574.png","fjQbM":"piedra.7de8c9a2.png","lf7zc":"star 2.9f10fab8.png","5b6NZ":"star 1.713d8f50.png"}'));const r={data:{jugada:{userPlay:"",computerPlay:""},history:{user:0,computer:0}},listeners:[],init(){const n=localStorage.getItem("saved-game"),e=JSON.parse(n);e?this.setState(e):this.setState(this.getState())},pushToHistory(n){"user-win"==n&&this.data.history.user++,"computer-win"==n&&this.data.history.computer++},getState(){return this.data},setState(n){this.data=n;for(const n of this.listeners)n();localStorage.setItem("saved-game",JSON.stringify(n))},suscribe(n){this.listeners.push(n)},setUserMove(n,e){e.jugada.userPlay=n},setComputerMove(n){const e=Math.floor(3*Math.random()+1);if(1==e){let e="piedra";n.jugada.computerPlay=e}if(2==e){let e="papel";n.jugada.computerPlay=e}if(3==e){let e="tijera";n.jugada.computerPlay=e}},whoWins(n,e){const t="piedra"==e&&"tijera"==n,a="papel"==e&&"piedra"==n,o="tijera"==e&&"papel"==n,r=["piedra"==n&&"tijera"==e,"papel"==n&&"piedra"==e,"tijera"==n&&"papel"==e].includes(!0),s=[t,a,o].includes(!0);return 1==r?"user-win":1==s?"computer-win":"empate"}};var s;o.register("kPq84",(function(e,t){var a;n(e.exports,"getBundleURL",(()=>a),(n=>a=n));var o={};function r(n){return(""+n).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}a=function(n){var e=o[n];return e||(e=function(){try{throw new Error}catch(e){var n=(""+e.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(n)return r(n[2])}return"/"}(),o[n]=e),e}})),s=o("kPq84").getBundleURL("d3X8m")+o("bXuNP").resolve("6o2SI");var i;i=o("kPq84").getBundleURL("d3X8m")+o("bXuNP").resolve("ekcml");var d;d=o("kPq84").getBundleURL("d3X8m")+o("bXuNP").resolve("fjQbM");const l=[{path:/\/welcome/,handle:function(n){const e=document.createElement("div");e.innerHTML=`\n  <div class="cont-welc">\n    <game-text tag="h1">Piedra, Papel o Tijera</game-text>\n    <div>\n        <game-button class="boton">Empezar</game-button>\n    </div>\n    <div class="img-cont">\n    <img src="${s}" alt="papel" />\n    <img src="${i}" alt="tijera" />\n    <img src="${d}" alt="piedra" />\n    </div>\n  </div>\n    `;const t=document.createElement("style");return t.textContent="\n    .cont-welc{\n      height:100vh;\n      padding:30px;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n    }\n    @media(min-width:677px){\n      .cont-welc{\n        padding: 200px;\n      }\n    }\n    \n    .img-cont {\n      display: flex;\n      gap: 30px;\n      margin-top: 100px;\n    }\n    \n    ",e.appendChild(t),e.querySelector(".boton").addEventListener("click",(()=>{n("/instructions")})),e}},{path:/\/instructions/,handle:function(n){const e=document.createElement("div");e.innerHTML='\n    <div class="cont-inst">\n      <game-text tag="h2">Presioná jugar\n      y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</game-text>\n      <div class="border-btn">\n          <game-button class="boton">! Jugar ¡</game-button>\n      </div>\n    </div>\n      ';const t=document.createElement("style");return t.textContent="\n      .cont-inst{\n        padding:30px;\n          padding-top:100px;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n      @media(min-width:677px){\n        .cont-inst{\n          padding: 200px;\n        }\n      }\n      ",e.appendChild(t),e.querySelector(".boton").addEventListener("click",(()=>{n("/play")})),e}},{path:/\/play/,handle:function(n){const e=document.createElement("div");e.innerHTML='\n  <div class="cont-play">\n  <count-down></count-down>\n  <div class="manos-contenedor">\n  <my-jugada class="play" jugada="piedra"></my-jugada> \n  <my-jugada class="play" jugada="papel"></my-jugada> \n  <my-jugada class="play" jugada="tijera"></my-jugada> \n  </div>\n  </div>\n  ';const t=r.getState();e.querySelectorAll(".play").forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault();const a=e.target.getAttribute("jugada");r.setUserMove(a,t),r.setComputerMove(t),setTimeout((()=>{n("/reveal")}),1500)}))}));const a=document.createElement("style");return a.textContent="\n  .cont-play{\n    padding:30px;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    align-items:center;\n    justify-content: space-between;\n  }\n  .manos-contenedor{\n    display:flex;\n    gap:50px;\n  }\n  \n  \n  ",e.appendChild(a),r.setState(t),e}},{path:/\/reveal/,handle:function(n){const e=document.createElement("div");e.innerHTML='\n    <div class="cont-play">\n    <div class="manos-contenedor">\n    <my-jugada class="play pc" jugada="pc"></my-jugada> \n    <my-jugada class="play user" jugada="user"></my-jugada> \n    </div>\n    </div>\n    ';const t=r.getState(),a=r.whoWins(t.jugada.userPlay,t.jugada.computerPlay);r.pushToHistory(a),r.setState(t);const o=e.querySelectorAll(".play");o[0].setAttribute("jugada",t.jugada.computerPlay),o[1].setAttribute("jugada",t.jugada.userPlay);const s=document.createElement("style");return s.textContent="\n        .cont-play{\n          height:100vh;\n          display: flex;\n          flex-direction: column;\n          align-items: center;\n          padding:30px;\n        }\n        .manos-contenedor{\n          display:flex;\n          flex-direction:column;\n          gap:300px;\n        }\n        .play{\n          pointer-events: none;\n        }\n        .pc{\n          transform: rotate(180deg);\n          animation-name: pc;\n          animation-duration:1.5s;\n          animation-fill-mode:forwards;\n        }\n        .user{\n          animation-name: user;\n          animation-duration:1.5s;\n          animation-fill-mode:forwards;\n        }\n        @keyframes pc {\n          from {\n            position: relative;\n            top: 0%;\n          }\n          to {\n            position: relative;\n            top: 18%;\n          }\n        }\n        @keyframes user {\n          from {\n            position: relative;\n            bottom: 0%;\n          }\n          to {\n            position: relative;\n            bottom: 18%;\n          }\n        }\n        \n        ",e.appendChild(s),setTimeout((function(){n("user-win"==a?"/results/win":"computer-win"==a?"/results/loss":"/play")}),2500),e}},{path:/\/results\/win/,handle:function(n){const e=document.createElement("div");e.innerHTML='\n        <div class="cont-win">\n          <div class="star-contenedor">\n            <my-estrella star="green" class="estrella"></my-estrella>\n            <game-text class="texto" tag="h1">Ganaste</game-text>   \n          </div>\n          <score-table></score-table>        \n          <div class="boton-contenedor">\n              <game-button class="boton">Volver a jugar!</game-button>\n          </div>\n        </div>\n          ';const t=document.createElement("style");return t.textContent="\n          .cont-win{\n            background-color: #888949E5;\n            padding:30px;\n            height:100vh;\n          }\n          @media(min-width:677px){\n            .cont-win{\n              display:flex;\n              flex-direction:column;\n              gap:80px;\n            }\n          }\n          .cont-win .texto{\n            --verde:white;\n            text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;\n            position: absolute;  \n            top:60px;\n          }\n          .estrella{\n            margin:0 auto;\n            width:260px;\n\n          }\n          .star-contenedor{\n            display:flex;\n            justify-content: center;\n          }\n          .score-table{\n            border:solid;\n            display:block;\n          }\n          .boton-contenedor{\n            margin-top:15px;\n          }\n          ",e.appendChild(t),e.querySelector(".boton").addEventListener("click",(()=>{n("/instructions")})),e}},{path:/\/results\/loss/,handle:function(n){const e=document.createElement("div");e.innerHTML='\n        <div class="cont-loss">\n          <div class="star-contenedor">\n            <my-estrella star="red" class="jugada"></my-estrella>\n            <game-text class="texto" tag="h1">Perdiste</game-text>   \n          </div>\n          <score-table></score-table>        \n          <div class="boton-contenedor">\n              <game-button class="boton">Volver a jugar!</game-button>\n          </div>\n        </div>\n          ';const t=document.createElement("style");return t.textContent="\n          .cont-loss{\n            background: #894949E5;\n            padding:30px;\n            height:100vh;\n          }\n          @media(min-width:677px){\n            .cont-loss{\n              display:flex;\n              flex-direction:column;\n              gap:80px;\n            }\n          }\n          .cont-loss .texto{\n            --verde:white;\n            text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;\n            position: absolute;  \n            top:60px;       \n          }\n          .star-contenedor{\n            display:flex;\n            justify-content: center;\n          }\n          .score-table{\n            border:solid;\n            display:block;\n          }\n          .boton-contenedor{\n            margin-top:15px;\n          }\n          ",e.appendChild(t),e.querySelector(".boton").addEventListener("click",(()=>{n("/instructions")})),e}}];var c;c=o("kPq84").getBundleURL("d3X8m")+o("bXuNP").resolve("lf7zc");var p;p=o("kPq84").getBundleURL("d3X8m")+o("bXuNP").resolve("5b6NZ"),r.init(),function(){class n extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){const n=document.createElement("style");n.textContent="\n      .score{\n      }\n      .score-div{\n        border: 10px solid;\n        border-radius: 10px;\n          width: 259px;\n          height: 217px;\n        margin:0 auto;\n\n        display:flex;\n        flex-direction:column;\n        align-items:center;\n        gap:10px;\n      }\n      .score-title{\n          font-size:55px;\n          margin: 0;\n        }\n        .score-player{\n            font-size:45px;\n            margin: 0 20px 0 0;\n            align-self:flex-end;\n      }\n        .        \n        ",this.shadow.appendChild(n),this.render()}render(){const n=document.createElement("div");n.className="score";const e=r.getState(),t=e.history.user,a=e.history.computer;n.innerHTML=`\n      <div class="score-div">\n        <h3 class="score-title">Score</h3>\n        <h4 class="score-player">Vos:<span class="score-point">${t}</span></h4>\n        <h4 class="score-player">Maquina:<span class="score-point">${a}</span></h4>\n      </div>\n      `,this.shadow.appendChild(n)}}customElements.define("score-table",n)}(),function(){class n extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){const n=document.createElement("style");n.textContent="\n        .jugada:hover{\n            transform:scale(1.5);\n        }\n        @media(min-width:677px){\n          .jugada{\n            width:136px;\n            height:258px;\n          }\n        }\n        ",this.shadow.appendChild(n),this.render()}render(){const n=document.createElement("div");n.innerHTML='\n        <img class="jugada" src="" alt="">\n        ',this.shadow.appendChild(n),"piedra"==this.getAttribute("jugada")&&(n.querySelector(".jugada").src=d,n.querySelector(".jugada").alt="piedra"),"papel"==this.getAttribute("jugada")&&(n.querySelector(".jugada").src=s,n.querySelector(".jugada").alt="papel"),"tijera"==this.getAttribute("jugada")&&(n.querySelector(".jugada").src=i,n.querySelector(".jugada").alt="tijera")}}customElements.define("my-jugada",n)}(),function(){class n extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){const n=document.createElement("div");n.innerHTML='\n        <img class="estrella" src="" alt="greenStar">\n        ',this.shadow.appendChild(n),"green"==this.getAttribute("star")?n.querySelector(".estrella").src=p:n.querySelector(".estrella").src=c}}customElements.define("my-estrella",n)}(),function(){class n extends HTMLElement{constructor(){super(),this.tags=["h1","h2"],this.tag="h2",this.shadow=this.attachShadow({mode:"open"}),this.tags.includes(this.getAttribute("tag"))&&(this.tag=this.getAttribute("tag")||this.tag),this.render()}render(){const n=document.createElement(this.tag);n.textContent=this.textContent;const e=document.createElement("style");e.textContent="\n            .bienvenida{\n                font-family: 'Odibee Sans', cursive;\n                font-size: 80px;\n                color: var(--verde); \n                text-align: center;\n            }        \n            .instrucciones{\n                font-size: 40px;\n                font-family: 'Odibee Sans';\n                text-align: center;\n            }\n            @media(min-width:677px){\n              .instrucciones{\n                max-width: 320px;\n              }\n            }\n        ","h1"==this.tag?n.setAttribute("class","bienvenida"):n.setAttribute("class","instrucciones"),this.shadow.appendChild(e),this.shadow.appendChild(n)}}customElements.define("game-text",n)}(),function(){class n extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){const n=document.createElement("div");n.innerHTML='\n      <button class="btn"></button>\n      ',n.className="border-btn",n.querySelector(".btn").innerHTML=this.innerHTML;const e=document.createElement("style");e.textContent="\n        .btn{\n            width: 100%;\n            background-color: var(--azul-boton);\n            color:white;\n\n            font-size: 40px;\n            font-family: 'Odibee Sans', cursive;\n\n            border: solid 10px #001997;\n            border-radius:4px;\n            height: 90px;\n          }\n          .border-btn{\n            min-width: 320px;\n          }\n          @media(min-width:677px){\n            .border-btn{\n              max-width:600px;\n              margin: 0 auto;\n            }\n          }\n        ",this.shadow.appendChild(e),this.shadow.appendChild(n)}}customElements.define("game-button",n)}(),function(){class n extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){const n=document.createElement("style");n.textContent="\n      .circle{\n        position:relative;\n        background-color: #6060ff;\n        height: 150px;\n          width: 150px;\n          border-radius: 50%;\n          border-top: 25px solid transparent;\n          border-right: 25px solid #d9534f;\n          border-bottom: 25px solid transparent;\n          border-left: 25px solid transparent;\n          animation-name: rueda;\n          animation-duration:1s;\n          animation-iteration-count:infinite;\n      }\n      .circle:before{\n        content: '';\n        position: absolute;\n        background-color: black;\n        height: 100%;\n        width: 100%;\n        border-radius: 50%;\n    }\n    @keyframes rueda {\n      from {\n        border-top: 25px solid transparent;\n        border-right: 25px solid #d9534f;\n        border-bottom: 25px solid transparent;\n        border-left: 25px solid transparent;\n      }\n      25% {\n        border-top: 25px solid transparent;\n        border-right: 25px solid transparent;\n        border-bottom: 25px solid #d9534f;\n        border-left: 25px solid transparent;\n      }\n      50% {\n        border-top: 25px solid transparent;\n        border-right: 25px solid transparent;\n        border-bottom: 25px solid transparent;\n        border-left: 25px solid #d9534f;\n      }\n      75% {\n        border-top: 25px solid #d9534f;\n        border-right: 25px solid transparent;\n        border-bottom: 25px solid transparent;\n        border-left: 25px solid transparent;\n      }\n    }\n      .shadow-cont{\n        display:flex;\n        justify-content: center;\n      }\n      .count-down-numb{\n        margin:0;\n        color:#d9534f;\n        position:relative;\n        left:34%;\n        top:15%;\n        font-size:100px;\n      }\n      ";const e=document.createElement("div");e.innerHTML='\n            <div class="shadow-cont">\n                <div class="circle">\n                  <h1 class="count-down-numb">3</h1>\n                </div>\n            </div>\n        ';const t=e.querySelector(".count-down-numb");let a=3;const o=setInterval((()=>{a--,0==a&&clearInterval(o);const n=JSON.stringify(a);t.textContent=n}),1e3);this.shadow.appendChild(n),this.shadow.appendChild(e)}}customElements.define("count-down",n)}(),function(n){function e(n){history.pushState({},"",n),t(n)}function t(t){for(const a of l)if(a.path.test(t)){const t=a.handle(e);n.firstChild&&n.firstChild.remove(),n.appendChild(t)}}"/"==location.pathname?e("/welcome"):t(location.pathname),window.onpopstate=()=>{t(location.pathname)}}(document.querySelector(".page-contenedor"));
//# sourceMappingURL=index.78daf7be.js.map
