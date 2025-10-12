import{d as s,r,j as e}from"./index-COA_3K4v.js";const $="var(--bg)",u="var(--card)",v="var(--text)",g="var(--muted)",d="var(--border)",m="var(--radius)",k="var(--shadow)",p="var(--accent)",A="var(--danger, #e5484d)",l={Wrapper:s.div`
        max-width: 1440px;
        margin: 0 auto;
        display: grid;
        gap: 16px;
        padding: 16px;
        background: ${$};
        color: ${v};
        min-height: 100%;
    `,Header:s.header`
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        gap: 16px;
        h1 {
            margin: 0 0 6px 0;
            font-size: 22px;
            line-height: 1.2;
        }
        p {
            margin: 0;
            color: ${g};
            font-size: 14px;
        }
    `,Badges:s.div`
        display: flex;
        gap: 8px;
        align-items: center;
        .badge {
            background: ${u};
            border: 1px solid ${d};
            padding: 6px 10px;
            border-radius: 999px;
            font-size: 12px;
            box-shadow: ${k};
        }
    `,Layout:s.div`
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 16px;
        @media (max-width: 1020px) {
            grid-template-columns: 1fr;
        }
        .left,
        .right {
            display: grid;
            gap: 16px;
        }
    `,Card:s.div`
        background: ${u};
        border: 1px solid ${d};
        border-radius: ${m};
        box-shadow: ${k};
        padding: 16px;
    `,SectionTitle:s.h2`
        margin: 0 0 10px 0;
        font-size: 15px;
        font-weight: 600;
    `,Info:s.div`
        padding: 10px 12px;
        border: 1px dashed ${d};
        color: ${g};
        border-radius: ${m};
        background: ${$};
        kbd {
            background: ${u};
            border: 1px solid ${d};
            padding: 0 6px;
            border-radius: 4px;
        }
    `,Bar:s.div`
        display: flex;
        gap: 12px;
        align-items: center;
        margin-bottom: 12px;
        .col {
            display: grid;
        }
        .label {
            color: ${g};
            font-size: 12px;
        }
        .val {
            font-weight: 600;
        }
        .spacer {
            flex: 1;
        }
        .hint {
            color: ${g};
            font-size: 12px;
        }
    `,DiceGrid:s.div`
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 12px;
        @media (max-width: 520px) {
            grid-template-columns: repeat(2, 1fr);
        }
    `,Die:s.button`
        position: relative;
        aspect-ratio: 1 / 1;
        width: 100%;
        min-height: 70px;
        background: ${$};
        border: 1px solid ${d};
        border-radius: 12px;
        box-shadow: ${k};
        cursor: pointer;
        padding: 8px;
        transition: border-color 0.15s ease, transform 0.05s ease;
        &:hover {
            border-color: ${p};
        }
        &:active {
            transform: translateY(1px);
        }

        &[data-held="1"] {
            background: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.04),
                rgba(0, 0, 0, 0.08)
            );
            border-color: ${p};
        }

        .num {
            position: absolute;
            bottom: 6px;
            right: 8px;
            font-weight: 700;
            font-size: 14px;
            opacity: 0.5;
        }
        .idx {
            position: absolute;
            top: 6px;
            left: 8px;
            font-weight: 600;
            font-size: 12px;
            opacity: 0.5;
        }

        .pips {
            height: 100%;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(3, 1fr);
            place-items: center;
        }
        .pip {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: ${v};
            opacity: 0.9;
            transform: translateZ(0);
            box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.06);
            visibility: hidden;
        }

        /* Show only required pips for each value (classic layout) */
        .value-1 .pip:nth-child(5) {
            visibility: visible;
        }
        .value-2 .pip:nth-child(1),
        .value-2 .pip:nth-child(9) {
            visibility: visible;
        }
        .value-3 .pip:nth-child(1),
        .value-3 .pip:nth-child(5),
        .value-3 .pip:nth-child(9) {
            visibility: visible;
        }
        .value-4 .pip:nth-child(1),
        .value-4 .pip:nth-child(3),
        .value-4 .pip:nth-child(7),
        .value-4 .pip:nth-child(9) {
            visibility: visible;
        }
        .value-5 .pip:nth-child(1),
        .value-5 .pip:nth-child(3),
        .value-5 .pip:nth-child(5),
        .value-5 .pip:nth-child(7),
        .value-5 .pip:nth-child(9) {
            visibility: visible;
        }
        .value-6 .pip:nth-child(1),
        .value-6 .pip:nth-child(3),
        .value-6 .pip:nth-child(4),
        .value-6 .pip:nth-child(6),
        .value-6 .pip:nth-child(7),
        .value-6 .pip:nth-child(9) {
            visibility: visible;
        }
    `,Actions:s.div`
        margin-top: 14px;
        display: flex;
        gap: 10px;
        align-items: center;
        .spacer {
            flex: 1;
        }
        button {
            appearance: none;
            border: 1px solid ${d};
            background: ${u};
            color: ${v};
            padding: 10px 14px;
            border-radius: ${m};
            cursor: pointer;
            font: inherit;
            transition: transform 0.02s ease-in-out, border-color 0.15s ease;
            &:hover {
                border-color: ${p};
            }
            &:active {
                transform: translateY(1px);
            }
            &:disabled {
                opacity: 0.55;
                cursor: not-allowed;
            }
        }
        .ghost {
            background: ${$};
        }
        .danger {
            border-color: ${A};
        }
        .primary {
            background: ${p};
            border-color: ${p};
            color: black;
        }
    `,Stats:s.div`
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
        @media (max-width: 720px) {
            grid-template-columns: 1fr;
        }
        .label {
            color: ${g};
            font-size: 12px;
        }
        strong {
            font-size: 16px;
        }
    `,WinOverlay:s.div`
        position: fixed;
        inset: 0;
        pointer-events: auto;
        display: grid;
        place-items: center;
        background: rgba(0, 0, 0, 0.15);
        z-index: 40;

        .panel {
            background: ${u};
            border: 1px solid ${d};
            border-radius: ${m};
            padding: 16px;
            box-shadow: ${k};
            text-align: center;
            z-index: 2;
            display: grid;
            gap: 10px;
        }
        .panel h3 {
            margin: 0;
        }
        .panel p {
            margin: 0;
            color: ${g};
        }

        /* ✅ Button styling for Play Again */
        .panel button {
            appearance: none;
            border: 1px solid ${d};
            background: ${u};
            color: ${v};
            padding: 10px 14px;
            border-radius: ${m};
            cursor: pointer;
            font: inherit;
            text-decoration: none;
            transition: transform 0.02s ease-in-out, border-color 0.15s ease;
            outline: none;
            margin-top: 4px;
            width: fit-content;
            justify-self: center;
        }
        .panel button:hover {
            border-color: ${p};
        }
        .panel button:active {
            transform: translateY(1px);
        }
        .panel button.primary {
            background: ${p};
            border-color: ${p};
            color: #fff;
        }

        .confetti {
            position: absolute;
            top: -10px;
            left: 50%;
            width: 8px;
            height: 12px;
            background: ${p};
            transform: translateX(-50%);
            border-radius: 2px;
            animation: fall 2.6s linear infinite;
            opacity: 0.85;
        }
        .confetti:nth-child(odd) {
            background: #ffd166;
        }
        .confetti:nth-child(3n) {
            background: #06d6a0;
        }
        .confetti:nth-child(4n) {
            background: #ef476f;
        }
        .confetti:nth-child(5n) {
            background: #8ecae6;
        }

        @keyframes fall {
            0% {
                transform: translateY(-10vh) rotate(0deg);
            }
            100% {
                transform: translateY(110vh) rotate(720deg);
            }
        }
    `,ModalOverlay:s.div`
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
        display: grid;
        place-items: center;
        z-index: 50;
    `,Modal:s.div`
        width: min(420px, 90vw);
        background: ${u};
        color: ${v};
        border: 1px solid ${d};
        border-radius: ${m};
        box-shadow: ${k};
        padding: 16px;
        h3 {
            margin: 0 0 6px 0;
            font-size: 16px;
        }
        p {
            margin: 0 0 12px 0;
            color: ${g};
            font-size: 14px;
        }
        .actions {
            display: flex;
            gap: 10px;
            justify-content: flex-end;
        }
        .actions button {
            appearance: none;
            border: 1px solid ${d};
            background: ${u};
            color: ${v};
            padding: 8px 12px;
            border-radius: ${m};
            cursor: pointer;
            font: inherit;
        }
        .actions .ghost {
            background: ${$};
        }
        .actions .danger {
            border-color: ${A};
        }
    `},T="tenzies_stats_v1",H=(a,h)=>Math.floor(Math.random()*(h-a+1))+a,q=()=>({id:U(),value:H(1,6),held:!1}),B=(a=10)=>Array.from({length:a},q);function U(){try{return crypto.randomUUID()}catch{return Math.random().toString(36).slice(2)}}function R(a){const h=Math.max(0,Math.floor(a)),x=Math.floor(h/60),w=h%60;return`${String(x).padStart(2,"0")}:${String(w).padStart(2,"0")}`}const Q=()=>{const[a,h]=r.useState(()=>B(10)),[x,w]=r.useState(0),[c,D]=r.useState(!1),[N,S]=r.useState(!1),[b,M]=r.useState(0),W=r.useRef(null),[o,I]=r.useState(()=>{try{return JSON.parse(localStorage.getItem(T)||"null")||{bestTime:null,bestRolls:null,totalWins:0,totalRolls:0,totalPlayTime:0}}catch{return{bestTime:null,bestRolls:null,totalWins:0,totalRolls:0,totalPlayTime:0}}}),[f,y]=r.useState({open:!1,type:"",title:"",body:""}),G=r.useMemo(()=>{var i;const t=a.filter(n=>n.held).map(n=>n.value);return t.length?t.sort((n,C)=>t.filter(z=>z===C).length-t.filter(z=>z===n).length)[0]:((i=a[0])==null?void 0:i.value)??1},[a]),E=r.useMemo(()=>a.every(t=>t.value===a[0].value),[a]),O=r.useMemo(()=>a.every(t=>t.held),[a]);r.useEffect(()=>(N&&(W.current=setInterval(()=>M(t=>t+1),1e3)),()=>clearInterval(W.current)),[N]),r.useEffect(()=>{if(!c&&O&&E){D(!0),S(!1);const t={...o};t.totalWins+=1,t.totalRolls+=x,t.totalPlayTime+=b,(t.bestTime===null||b<t.bestTime)&&(t.bestTime=b),(t.bestRolls===null||x<t.bestRolls)&&(t.bestRolls=x),I(t);try{localStorage.setItem(T,JSON.stringify(t))}catch{}}},[O,E,c,x,b,o]),r.useEffect(()=>{try{localStorage.setItem(T,JSON.stringify(o))}catch{}},[o]),r.useEffect(()=>{const t=i=>{if(!i.repeat&&(i.code==="Space"&&(i.preventDefault(),c?j():Y()),/Digit[0-9]/.test(i.code))){const n=i.code==="Digit0"?10:parseInt(i.code.slice(-1),10);_(n-1)}};return window.addEventListener("keydown",t),()=>window.removeEventListener("keydown",t)},[c,a]);function P(t){!N&&!c&&S(!0),h(i=>i.map(n=>n.id===t?{...n,held:!n.held}:n))}function _(t){const i=a[t];i&&P(i.id)}function Y(){c||(N||S(!0),h(t=>t.map(i=>i.held?i:{...i,value:H(1,6)})),w(t=>t+1))}function j(){h(B(10)),w(0),D(!1),M(0),S(!1)}const J=()=>y({open:!0,type:"reset",title:"Reset current game?",body:"Your current progress will be lost."}),K=()=>y({open:!0,type:"clear-stats",title:"Clear all stats?",body:"Best time, best rolls and totals will be removed from this browser."});function L(){if(f.type==="reset")j();else if(f.type==="clear-stats"){const t={bestTime:null,bestRolls:null,totalWins:0,totalRolls:0,totalPlayTime:0};I(t);try{localStorage.setItem(T,JSON.stringify(t))}catch{}}y({open:!1,type:"",title:"",body:""})}return e.jsxs(l.Wrapper,{children:[e.jsxs(l.Header,{children:[e.jsxs("div",{children:[e.jsx("h1",{children:"Tenzies"}),e.jsxs("p",{children:["Hold dice and roll until all ten dice show the ",e.jsx("strong",{children:"same value"}),". Quick fingers, quicker brain."]})]}),e.jsxs(l.Badges,{children:[e.jsx("span",{className:"badge",children:"Timer"}),e.jsx("span",{className:"badge",children:"Keyboard"}),e.jsx("span",{className:"badge",children:"Confetti"})]})]}),e.jsxs(l.Layout,{children:[e.jsxs("div",{className:"left",children:[e.jsxs(l.Card,{children:[e.jsxs(l.Bar,{children:[e.jsxs("div",{className:"col",children:[e.jsx("div",{className:"label",children:"Timer"}),e.jsx("div",{className:"val",children:R(b)})]}),e.jsxs("div",{className:"col",children:[e.jsx("div",{className:"label",children:"Rolls"}),e.jsx("div",{className:"val",children:x})]}),e.jsxs("div",{className:"col",children:[e.jsx("div",{className:"label",children:"Target"}),e.jsx("div",{className:"val",children:G})]}),e.jsx("div",{className:"spacer"}),e.jsxs("div",{className:"hint",children:["Space: ",c?"New Game":"Roll"," • Keys 1–0: toggle dice"]})]}),e.jsx(l.DiceGrid,{children:a.map((t,i)=>e.jsxs(l.Die,{"aria-pressed":t.held,"data-held":t.held?"1":"0",title:t.held?"Held — click to release":"Click to hold",onClick:()=>P(t.id),children:[e.jsx("div",{className:`pips value-${t.value}`,"aria-label":`Die ${i+1} shows ${t.value}`,children:Array.from({length:9}).map((n,C)=>e.jsx("span",{className:"pip"},C))}),e.jsx("div",{className:"num",children:t.value}),e.jsx("div",{className:"idx",children:i+1})]},t.id))}),e.jsxs(l.Actions,{children:[c?e.jsx("button",{className:"primary",onClick:j,children:"New Game"}):e.jsx("button",{onClick:Y,children:"Roll"}),e.jsx("button",{className:"ghost",onClick:J,children:"Reset"}),e.jsx("div",{className:"spacer"}),e.jsx("button",{className:"ghost danger",onClick:K,children:"Clear Stats"})]})]}),e.jsxs(l.Card,{children:[e.jsx(l.SectionTitle,{children:"How to play"}),e.jsxs(l.Info,{children:["Click a die to ",e.jsx("strong",{children:"hold"})," its value. Press ",e.jsx("kbd",{children:"Space"})," to roll the rest. Win when all ten dice are held and show the same number."]})]})]}),e.jsx("div",{className:"right",children:e.jsxs(l.Card,{children:[e.jsx(l.SectionTitle,{children:"Your Stats"}),e.jsxs(l.Stats,{children:[e.jsxs("div",{children:[e.jsx("span",{className:"label",children:"Best Time "}),e.jsx("strong",{children:o.bestTime==null?"—":R(o.bestTime)})]}),e.jsxs("div",{children:[e.jsx("span",{className:"label",children:"Best Rolls "}),e.jsx("strong",{children:o.bestRolls==null?"—":o.bestRolls})]}),e.jsxs("div",{children:[e.jsx("span",{className:"label",children:"Total Wins "}),e.jsx("strong",{children:o.totalWins})]}),e.jsxs("div",{children:[e.jsx("span",{className:"label",children:"Total Rolls "}),e.jsx("strong",{children:o.totalRolls})]}),e.jsxs("div",{children:[e.jsx("span",{className:"label",children:"Total Play Time "}),e.jsx("strong",{children:R(o.totalPlayTime)})]})]})]})})]}),c&&e.jsxs(l.WinOverlay,{onClick:j,children:[e.jsxs("div",{className:"panel",children:[e.jsx("h3",{children:"You Win!"}),e.jsxs("p",{children:["Time ",e.jsx("strong",{children:R(b)})," • Rolls ",e.jsx("strong",{children:x})]}),e.jsx("button",{className:"primary",onClick:j,children:"Play Again"})]}),Array.from({length:60}).map((t,i)=>e.jsx("i",{className:"confetti"},i))]}),f.open&&e.jsx(l.ModalOverlay,{onClick:()=>y({open:!1,type:"",title:"",body:""}),children:e.jsxs(l.Modal,{onClick:t=>t.stopPropagation(),children:[e.jsx("h3",{children:f.title}),e.jsx("p",{children:f.body}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{className:"ghost",onClick:()=>y({open:!1,type:"",title:"",body:""}),children:"Cancel"}),e.jsx("button",{className:"danger",onClick:L,children:f.type==="reset"?"Reset":"Delete"})]})]})})]})};export{Q as default};
