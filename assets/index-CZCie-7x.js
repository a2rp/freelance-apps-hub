import{d as p,r as o,j as e}from"./index-B1q4R8YW.js";const j="var(--bg)",b="var(--card)",a="var(--text)",$="var(--muted)",u="var(--border)",w="var(--radius)",_="var(--shadow)",y="var(--accent)",h="var(--danger, #e5484d)",i={Wrapper:p.div`
        color: ${a};
        background: ${j};
        min-height: 100%;
        padding: 16px;
        max-width: 1440px;
        margin: 0 auto;
        display: grid;
        gap: 16px;
    `,Banner:p.div`
        border: 1px solid ${u};
        background: ${b};
        box-shadow: ${_};
        border-radius: ${w};
        padding: 10px 12px;
        font-size: 14px;
    `,Header:p.header`
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 12px;
        align-items: end;

        .titles h1 {
            margin: 0 0 6px 0;
            font-size: 20px;
        }
        .titles p {
            margin: 0;
            color: ${$};
            font-size: 14px;
        }

        .controls {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            align-items: center;
        }

        /* base pill for labels */
        label {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 4px 8px;
            border: 1px solid ${u};
            border-radius: 999px;
            background: ${b};
            color: ${a};
        }

        /* Difficulty pill — styled select + options for dark theme */
        label.difficulty {
            padding: 2px;
            gap: 0;
        }
        label.difficulty span {
            padding: 6px 10px;
            border-radius: 999px;
            font-size: 13px;
        }
        label.difficulty select {
            border: none;
            background: transparent;
            color: ${a};
            font: inherit;
            padding: 6px 10px;
            border-left: 1px solid ${u};
            border-top-right-radius: 999px;
            border-bottom-right-radius: 999px;
            outline: none;
            appearance: none;

            /* 🔥 force dark popup on Chromium */
            color-scheme: dark;
            /* fallback: ensure the dropdown surface inherits theme */
            background-color: ${b};
        }
        /* Options inside the dropdown (works on Chrome/Firefox/Edge) */
        label.difficulty select option,
        label.difficulty select optgroup {
            background: ${b};
            color: ${a};
        }

        /* custom caret */
        label.difficulty select {
            background-image: linear-gradient(
                    45deg,
                    transparent 50%,
                    ${a} 50%
                ),
                linear-gradient(135deg, ${a} 50%, transparent 50%);
            background-position: calc(100% - 14px) 50%, calc(100% - 10px) 50%;
            background-size: 4px 4px, 4px 4px;
            background-repeat: no-repeat;
            padding-right: 28px;
        }
        label.difficulty:focus-within {
            border-color: ${y};
            box-shadow: 0 0 0 2px
                color-mix(in oklab, ${y} 25%, transparent);
        }

        .switch input {
            accent-color: ${y};
        }

        button {
            border: 1px solid ${u};
            background: ${b};
            color: ${a};
            border-radius: ${w};
            padding: 8px 12px;
            cursor: pointer;
            transition: border-color 0.15s ease, transform 0.02s ease-in-out;
        }
        button:hover {
            border-color: ${y};
        }
        button:active {
            transform: translateY(1px);
        }
        .ghost {
            background: ${j};
        }
    `,Layout:p.div`
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 16px;
        @media (max-width: 1100px) {
            grid-template-columns: 1fr;
        }
    `,Column:p.div`
        display: grid;
        gap: 16px;
    `,Side:p.aside`
        display: grid;
        gap: 16px;
    `,Card:p.div`
        background: ${b};
        border: 1px solid ${u};
        border-radius: ${w};
        box-shadow: ${_};
        padding: 16px;

        h3 {
            margin: 0 0 10px 0;
            font-size: 16px;
        }
        .muted {
            color: ${$};
        }
        .danger {
            border-color: ${h};
            color: ${h};
        }

        /* 🔧 Custom Words form styling */
        .add-form {
            display: grid;
            gap: 10px;
        }
        .add-form .grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
        }
        @media (max-width: 520px) {
            .add-form .grid {
                grid-template-columns: 1fr;
            }
        }
        .add-form label {
            display: inline-block;
            margin: 0 0 6px 0;
            font-size: 13px;
            color: ${a};
        }
        .add-form input[type="text"] {
            width: 100%;
            border: 1px solid ${u};
            background: ${j}; /* dark-friendly */
            color: ${a};
            border-radius: calc(${w} - 2px);
            padding: 10px 12px;
            font: inherit;
            outline: none;
            transition: border-color 0.15s ease;
            color-scheme: dark; /* force dark native UI where supported */
        }
        .add-form input[type="text"]::placeholder {
            color: ${$};
            opacity: 0.8;
        }
        .add-form input[type="text"]:focus {
            border-color: ${y};
            /* optional subtle ring */
            box-shadow: 0 0 0 2px
                color-mix(in oklab, ${y} 20%, transparent);
        }
        .add-form .help {
            font-size: 12px;
            color: ${$};
        }
        .add-form .error {
            font-size: 12px;
            color: ${h};
        }
    `,TopRow:p.div`
        display: grid;
        grid-template-columns: 1fr auto auto;
        gap: 10px;
        align-items: center;
        margin-bottom: 8px;

        .category .label {
            color: ${$};
            font-size: 12px;
        }
        .category .value {
            font-weight: 600;
            margin-left: 6px;
        }

        .status {
            font-size: 14px;
        }
        .status.won {
            color: var(--success, #2e7d32);
        }
        .status.lost {
            color: ${h};
        }

        .lives {
            font-size: 14px;
        }
    `,Gallows:p.div`
        position: relative;
        height: 220px;
        border: 1px dashed ${u};
        border-radius: ${w};
        margin: 8px 0 12px 0;
        background: var(--panel, transparent);

        .post.base {
            position: absolute;
            left: 20px;
            right: 20px;
            bottom: 12px;
            height: 6px;
            background: ${a};
            opacity: 0.25;
            border-radius: 3px;
        }
        .post.pole {
            position: absolute;
            left: 40px;
            bottom: 18px;
            width: 6px;
            top: 20px;
            background: ${a};
            opacity: 0.25;
            border-radius: 3px;
        }
        .post.beam {
            position: absolute;
            left: 40px;
            top: 20px;
            right: 140px;
            height: 6px;
            background: ${a};
            opacity: 0.25;
            border-radius: 3px;
        }
        .post.rope {
            position: absolute;
            right: 140px;
            top: 26px;
            width: 2px;
            height: 26px;
            background: ${a};
            opacity: 0.8;
        }

        .man.head {
            position: absolute;
            right: 124px;
            top: 50px;
            width: 32px;
            height: 32px;
            border: 3px solid ${a};
            border-radius: 50%;
        }
        .man.body {
            position: absolute;
            right: 139px;
            top: 82px;
            width: 2px;
            height: 54px;
            background: ${a};
        }
        .man.arm.left {
            position: absolute;
            right: 139px;
            top: 92px;
            width: 40px;
            height: 2px;
            background: ${a};
            transform-origin: right center;
            transform: rotate(30deg);
        }
        .man.arm.right {
            position: absolute;
            right: 100px;
            top: 92px;
            width: 40px;
            height: 2px;
            background: ${a};
            transform-origin: left center;
            transform: rotate(-30deg);
        }
        .man.leg.left {
            position: absolute;
            right: 139px;
            top: 134px;
            width: 40px;
            height: 2px;
            background: ${a};
            transform-origin: right center;
            transform: rotate(40deg);
        }
        .man.leg.right {
            position: absolute;
            right: 101px;
            top: 134px;
            width: 40px;
            height: 2px;
            background: ${a};
            transform-origin: left center;
            transform: rotate(-40deg);
        }
    `,Word:p.div`
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
            "Liberation Mono", monospace;
        letter-spacing: 6px;
        font-size: 28px;
        text-align: center;
        padding: 8px 0;
        user-select: none;
    `,Keyboard:p.div`
        display: grid;
        gap: 6px;

        .row {
            display: flex;
            gap: 6px;
            justify-content: center;
            flex-wrap: nowrap;
        }
        .key {
            border: 1px solid ${u};
            background: ${b};
            color: ${a};
            border-radius: 8px;
            padding: 10px 12px;
            min-width: 36px;
            text-align: center;
            cursor: pointer;
            font: inherit;
            user-select: none;
            transition: border-color 0.15s ease, transform 0.02s ease-in-out,
                background 0.15s ease;
        }
        .key:hover {
            border-color: ${y};
        }
        .key:active {
            transform: translateY(1px);
        }
        .key.used {
            background: var(--surface, ${j});
            opacity: 0.9;
        }
        .key.wrong {
            border-color: ${h};
            color: ${h};
        }
    `,Actions:p.div`
        margin-top: 12px;
        display: flex;
        gap: 10px;
        align-items: center;

        .spacer {
            flex: 1;
        }

        button {
            border: 1px solid ${u};
            background: ${b};
            color: ${a};
            border-radius: ${w};
            padding: 8px 12px;
            cursor: pointer;
            font: inherit;
            transition: border-color 0.15s ease, transform 0.02s ease-in-out;
        }
        button:hover {
            border-color: ${y};
        }
        button:active {
            transform: translateY(1px);
        }
        .ghost {
            background: ${j};
        }
        .danger {
            border-color: ${h};
            color: ${h};
        }
    `,BadRow:p.div`
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        .wrong {
            border: 1px solid ${h};
            color: ${h};
            padding: 6px 10px;
            border-radius: 999px;
            font-size: 13px;
        }
    `,Stats:p.div`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 8px;

        .label {
            color: ${$};
            font-size: 12px;
        }
        .value {
            font-weight: 700;
        }
        div {
            padding: 8px;
            border: 1px solid ${u};
            border-radius: 10px;
            background: ${j};
        }
    `,List:p.div`
        display: grid;
        gap: 10px;

        .row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            border: 1px solid ${u};
            border-radius: ${w};
            background: ${j};
            padding: 8px 10px;
        }
        .meta .word {
            font-weight: 700;
        }
        .meta .cat {
            color: ${$};
            font-size: 12px;
        }
        .tools button {
            border: 1px solid ${u};
            background: ${b};
            color: ${a};
            border-radius: 8px;
            padding: 6px 10px;
            cursor: pointer;
        }
        .tools .danger {
            border-color: ${h};
            color: ${h};
        }
    `,Overlay:p.div`
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
        display: grid;
        place-items: center;
        z-index: 60;
    `,Modal:p.div`
        width: min(520px, 92vw);
        background: ${b};
        color: ${a};
        border: 1px solid ${u};
        box-shadow: ${_};
        border-radius: ${w};
        padding: 16px;

        h3 {
            margin: 0 0 8px 0;
            font-size: 18px;
        }
        p {
            margin: 0;
            color: ${$};
        }
    `,ModalActions:p.div`
        margin-top: 14px;
        display: flex;
        gap: 8px;
        justify-content: flex-end;
        button {
            border: 1px solid ${u};
            background: ${b};
            color: ${a};
            border-radius: ${w};
            padding: 8px 12px;
            cursor: pointer;
            font: inherit;
        }
        button:hover {
            border-color: ${y};
        }
        .ghost {
            background: ${j};
        }
    `},je="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),oe="hangman_settings_v1",ae="hangman_stats_v1",ne="hangman_custom_words_v1",O="hangman_progress_v1",ie={difficulty:"medium",allowHint:!0,repeatWords:!1},F=[{w:"JAVASCRIPT",c:"Programming"},{w:"REACT",c:"Programming"},{w:"DEVELOPER",c:"General"},{w:"KEYBOARD",c:"General"},{w:"ALGORITHM",c:"Programming"},{w:"ASYNC",c:"Programming"},{w:"COMPILER",c:"General"},{w:"BROWSER",c:"General"},{w:"STYLESHEET",c:"Frontend"},{w:"VARIABLE",c:"Programming"},{w:"FUNCTION",c:"Programming"},{w:"COMPONENT",c:"Frontend"},{w:"MONGODB",c:"Databases"},{w:"EXPRESS",c:"Backend"},{w:"VITE",c:"Tooling"},{w:"WEBPACK",c:"Tooling"},{w:"ZUSTAND",c:"State Mgmt"},{w:"TYPESCRIPT",c:"Programming"},{w:"ALACRITY",c:"English"},{w:"EUPHORIA",c:"English"},{w:"ELEPHANT",c:"Animals"},{w:"CROCODILE",c:"Animals"},{w:"DOLPHIN",c:"Animals"},{w:"BENGALURU",c:"India"},{w:"PATNA",c:"India"},{w:"MUMBAI",c:"India"}],I={easy:{lives:8,min:3,max:7},medium:{lives:7,min:4,max:10},hard:{lives:6,min:6,max:20}},$e=n=>(n||"").toUpperCase().replace(/[^A-Z]/g,""),K=n=>Array.from(new Set(n));function D({open:n,title:C="Confirm",body:m,confirmText:N="Confirm",onCancel:f,onConfirm:S}){return n?e.jsx(i.Overlay,{role:"dialog","aria-modal":"true",onClick:f,children:e.jsxs(i.Modal,{onClick:l=>l.stopPropagation(),"aria-labelledby":"cm-title",children:[e.jsx("h3",{id:"cm-title",children:C}),typeof m=="string"?e.jsx("p",{className:"muted",children:m}):m,e.jsxs(i.ModalActions,{children:[e.jsx("button",{type:"button",className:"ghost",onClick:f,children:"Cancel"}),e.jsx("button",{type:"button",onClick:S,children:N})]})]})}):null}const Ce=()=>{var re;const[n,C]=o.useState(()=>{try{return{...ie,...JSON.parse(localStorage.getItem(oe)||"{}")}}catch{return ie}}),[m,N]=o.useState(()=>{try{return JSON.parse(localStorage.getItem(ae)||'{"games":0,"wins":0,"losses":0}')}catch{return{games:0,wins:0,losses:0}}}),[f,S]=o.useState(()=>{try{return JSON.parse(localStorage.getItem(ne)||"[]")}catch{return[]}}),[l,J]=o.useState({w:"",c:""}),[g,W]=o.useState([]),[x,P]=o.useState([]),[E,G]=o.useState(I[n.difficulty].lives),[d,L]=o.useState("idle"),[A,H]=o.useState(!1),[V,v]=o.useState(""),[le,U]=o.useState(!1),[de,M]=o.useState(!1),[ce,z]=o.useState(!1),[T,Y]=o.useState(null),[Z,X]=o.useState(""),[Q,pe]=o.useState("Custom"),[q,R]=o.useState(""),ee=o.useMemo(()=>{const t=[...F,...f.map(c=>({w:c.w,c:c.c||"Custom"}))],{min:s,max:r}=I[n.difficulty];return t.filter(c=>c.w.length>=s&&c.w.length<=r)},[f,n.difficulty]);o.useEffect(()=>{try{localStorage.setItem(oe,JSON.stringify(n))}catch{}},[n]),o.useEffect(()=>{try{localStorage.setItem(ae,JSON.stringify(m))}catch{}},[m]),o.useEffect(()=>{try{localStorage.setItem(ne,JSON.stringify(f))}catch{}},[f]),o.useEffect(()=>{var t;try{const s=JSON.parse(localStorage.getItem(O)||"null");if(s&&((t=s.secret)!=null&&t.w)&&s.status==="playing"){J(s.secret),W(s.guessed||[]),P(s.wrongSet||[]),G(s.lives||I[n.difficulty].lives),L("playing"),H(!!s.hintUsed),C(r=>({...r,...s.settings||{}})),v("Restored in-progress game.");return}}catch{}B(!1)},[]),o.useEffect(()=>{try{d==="playing"?localStorage.setItem(O,JSON.stringify({secret:l,guessed:g,wrongSet:x,lives:E,status:d,hintUsed:A,settings:n})):(d==="won"||d==="lost")&&localStorage.removeItem(O)}catch{}},[l,g,x,E,d,A,n]),o.useEffect(()=>{const t=s=>{if(d!=="playing")return;const r=s.key.toUpperCase();je.includes(r)&&(s.preventDefault(),se(r))};return window.addEventListener("keydown",t),()=>window.removeEventListener("keydown",t)},[d,g,x,l,E]);const te=o.useMemo(()=>{const t=new Set(g);return l.w.split("").map(s=>t.has(s)?s:"_").join(" ")},[l,g]);o.useMemo(()=>l.w&&l.w.split("").every(t=>g.includes(t)),[l,g]);function ue(){const t=ee.length?ee:F;if(!t.length)return{w:"REACT",c:"Programming"};if(n.repeatWords)return t[Math.floor(Math.random()*t.length)];let s=t[Math.floor(Math.random()*t.length)];const r=l==null?void 0:l.w;return t.length>1&&s.w===r&&(s=t[(t.indexOf(s)+1)%t.length]),s}function B(t=!0){if(t&&d==="playing"&&(g.length>0||x.length>0)){M(!0);return}const s=ue(),r=I[n.difficulty].lives;J(s),W([]),P([]),G(r),L("playing"),H(!1),v("")}function se(t){if(d==="playing"&&!(g.includes(t)||x.includes(t)))if(l.w.includes(t)){const s=K([...g,t]);W(s),l.w.split("").every(r=>s.includes(r))&&(L("won"),N(r=>({...r,games:r.games+1,wins:r.wins+1})),v("You won! 🎉"))}else{const s=K([...x,t]),r=Math.max(0,E-1);P(s),G(r),r===0&&(L("lost"),N(c=>({...c,games:c.games+1,losses:c.losses+1})),v(`You lost. The word was ${l.w}.`))}}function ge(){if(!n.allowHint||A||d!=="playing")return;const t=l.w.split("").filter(r=>!g.includes(r));if(!t.length)return;const s=t[Math.floor(Math.random()*t.length)];W(r=>K([...r,s])),H(!0),v(`Hint revealed a letter: ${s}`)}function xe(){const t=te.replace(/ /g,""),s=[`Hangman (${n.difficulty})`,d==="won"?"Result: WIN ✅":d==="lost"?"Result: LOSS ❌":"Result: In progress",`Word: ${d==="lost"?l.w:t}`,`Wrong: ${x.join(", ")||"-"}`].join(`
`);try{navigator.clipboard.writeText(s),v("Result copied to clipboard.")}catch{v("Copy failed.")}}function me(t){t.preventDefault();const s=$e(Z),r=Q.trim().slice(0,24)||"Custom";if(!s||s.length<3){R("Word must be at least 3 letters A–Z.");return}if(F.some(c=>c.w===s)||f.some(c=>c.w===s)){R("Word already exists.");return}if(s.length>20){R("Keep it ≤ 20 letters.");return}S(c=>[{w:s,c:r},...c]),X(""),R("")}function he(){T!=null&&(S(t=>t.filter((s,r)=>r!==T)),Y(null))}function fe(){N({games:0,wins:0,losses:0})}function be(){try{localStorage.removeItem(O)}catch{}U(!1),v("Cleared saved progress.")}const we=o.useMemo(()=>new Set([...g,...x]),[g,x]),k=x.length,ye=I[n.difficulty].lives;return e.jsxs(i.Wrapper,{children:[!!V&&e.jsx(i.Banner,{role:"status",children:V}),e.jsxs(i.Header,{children:[e.jsxs("div",{className:"titles",children:[e.jsx("h1",{children:"Hangman Game"}),e.jsx("p",{children:"Guess the word before the stick figure is fully drawn. Keyboard supported. Local save enabled."})]}),e.jsxs("div",{className:"controls",children:[e.jsxs("label",{className:"difficulty",title:"Select difficulty",children:[e.jsx("span",{children:"Difficulty"}),e.jsxs("select",{"aria-label":"Difficulty",value:n.difficulty,onChange:t=>C(s=>({...s,difficulty:t.target.value})),children:[e.jsx("option",{value:"easy",children:"Easy (8)"}),e.jsx("option",{value:"medium",children:"Medium (7)"}),e.jsx("option",{value:"hard",children:"Hard (6)"})]})]}),e.jsxs("label",{className:"switch",children:[e.jsx("input",{type:"checkbox",checked:n.allowHint,onChange:t=>C(s=>({...s,allowHint:t.target.checked}))}),e.jsx("span",{children:"Allow hint"})]}),e.jsxs("label",{className:"switch",children:[e.jsx("input",{type:"checkbox",checked:n.repeatWords,onChange:t=>C(s=>({...s,repeatWords:t.target.checked}))}),e.jsx("span",{children:"Allow repeats"})]}),e.jsx("button",{type:"button",onClick:()=>B(!0),children:"New Game"}),e.jsx("button",{type:"button",className:"ghost",onClick:()=>U(!0),children:"Clear Progress"})]})]}),e.jsxs(i.Layout,{children:[e.jsxs(i.Column,{children:[e.jsxs(i.Card,{children:[e.jsxs(i.TopRow,{children:[e.jsxs("div",{className:"category",children:[e.jsx("span",{className:"label",children:"Category"}),e.jsx("span",{className:"value",children:l.c||"-"})]}),e.jsxs("div",{className:`status ${d}`,children:["Status: ",d==="playing"?"Playing":d==="won"?"Won":d==="lost"?"Lost":"Idle"]}),e.jsxs("div",{className:"lives",children:["Lives: ",e.jsxs("strong",{children:[E,"/",ye]})]})]}),e.jsxs(i.Gallows,{children:[e.jsx("div",{className:"post base"}),e.jsx("div",{className:"post pole"}),e.jsx("div",{className:"post beam"}),e.jsx("div",{className:"post rope",style:{opacity:k>=1?1:0}}),e.jsx("div",{className:"man head",style:{opacity:k>=2?1:0}}),e.jsx("div",{className:"man body",style:{opacity:k>=3?1:0}}),e.jsx("div",{className:"man arm left",style:{opacity:k>=4?1:0}}),e.jsx("div",{className:"man arm right",style:{opacity:k>=5?1:0}}),e.jsx("div",{className:"man leg left",style:{opacity:k>=6?1:0}}),e.jsx("div",{className:"man leg right",style:{opacity:k>=7?1:0}})]}),e.jsx(i.Word,{"aria-label":"Word progress",children:te}),e.jsx(i.Keyboard,{role:"group","aria-label":"Letters",children:"QWERTYUIOP-ASDFGHJKL-ZXCVBNM".split("-").map((t,s)=>e.jsx("div",{className:"row",children:t.split("").map(r=>{const c=we.has(r),ve=x.includes(r);return e.jsx("button",{className:`key ${c?ve?"wrong":"used":""}`,disabled:c||d!=="playing",onClick:()=>se(r),"aria-label":`Letter ${r}`,children:r},r)})},s))}),e.jsxs(i.Actions,{children:[e.jsx("button",{type:"button",onClick:ge,disabled:!n.allowHint||A||d!=="playing",children:A?"Hint used":"Use Hint"}),e.jsx("button",{type:"button",className:"ghost",onClick:xe,children:"Copy Result"}),e.jsx("div",{className:"spacer"}),e.jsx("button",{type:"button",className:"ghost",onClick:()=>M(!0),children:"Reset Game"})]})]}),e.jsxs(i.Card,{children:[e.jsx("h3",{children:"Wrong Letters"}),e.jsx(i.BadRow,{children:x.length?x.map(t=>e.jsx("span",{className:"wrong",children:t},t)):e.jsx("em",{className:"muted",children:"None yet"})})]})]}),e.jsxs(i.Side,{children:[e.jsxs(i.Card,{children:[e.jsx("h3",{children:"Stats"}),e.jsxs(i.Stats,{children:[e.jsxs("div",{children:[e.jsx("span",{className:"label",children:"Games"}),e.jsx("span",{className:"value",children:m.games})]}),e.jsxs("div",{children:[e.jsx("span",{className:"label",children:"Wins"}),e.jsx("span",{className:"value",children:m.wins})]}),e.jsxs("div",{children:[e.jsx("span",{className:"label",children:"Losses"}),e.jsx("span",{className:"value",children:m.losses})]}),e.jsxs("div",{children:[e.jsx("span",{className:"label",children:"Win Rate"}),e.jsx("span",{className:"value",children:m.games?Math.round(m.wins/m.games*100)+"%":"-"})]})]}),e.jsxs(i.Actions,{children:[e.jsx("button",{type:"button",className:"danger",onClick:()=>z(!0),children:"Delete All Custom Words"}),e.jsx("div",{className:"spacer"}),e.jsx("button",{type:"button",className:"ghost",onClick:fe,children:"Clear Stats"})]})]}),e.jsxs(i.Card,{children:[e.jsx("h3",{children:"Custom Words"}),e.jsxs("form",{onSubmit:me,className:"add-form",children:[e.jsxs("div",{className:"grid",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"newWord",children:"Word"}),e.jsx("input",{id:"newWord",type:"text",value:Z,onChange:t=>{X(t.target.value),R("")},placeholder:"Letters only (A–Z)"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"newCat",children:"Category"}),e.jsx("input",{id:"newCat",type:"text",value:Q,onChange:t=>pe(t.target.value),placeholder:"e.g., Sports"})]})]}),q?e.jsx("div",{className:"error",children:q}):e.jsx("div",{className:"help",children:"Adds to the word bank for future games."}),e.jsx(i.Actions,{children:e.jsx("button",{type:"submit",children:"Add Word"})})]}),e.jsxs(i.List,{children:[f.length===0&&e.jsx("div",{className:"muted",children:"No custom words yet."}),f.map((t,s)=>e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"meta",children:[e.jsx("div",{className:"word",children:t.w}),e.jsx("div",{className:"cat",children:t.c||"Custom"})]}),e.jsx("div",{className:"tools",children:e.jsx("button",{type:"button",className:"ghost danger",onClick:()=>Y(s),title:"Delete",children:"Delete"})})]},t.w+s))]})]})]})]}),e.jsx(D,{open:de,title:"Reset current game?",body:"This will pick a new word and reset guesses.",confirmText:"Reset",onCancel:()=>M(!1),onConfirm:()=>{M(!1),B(!1)}}),e.jsx(D,{open:le,title:"Clear saved progress?",body:"This removes the in-progress save only. Your stats/words stay.",confirmText:"Clear",onCancel:()=>U(!1),onConfirm:be}),e.jsx(D,{open:T!=null,title:"Delete this word?",body:e.jsxs("p",{children:["Remove ",e.jsx("strong",{children:T!=null?(re=f[T])==null?void 0:re.w:""})," from your custom bank?"]}),confirmText:"Delete",onCancel:()=>Y(null),onConfirm:he}),e.jsx(D,{open:ce,title:"Delete ALL custom words?",body:"This removes your entire custom list. This cannot be undone.",confirmText:"Delete All",onCancel:()=>z(!1),onConfirm:()=>{z(!1),S([])}})]})};export{Ce as default};
