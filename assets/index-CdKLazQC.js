import{d as c,r,j as e}from"./index-NxKaGGxV.js";const G="var(--card, #0f1012)",s="var(--text, #eaeaea)",$="var(--muted, #a8a8a8)",p="var(--border, #242424)",b="var(--accent, #22c55e)",q="var(--danger, #ef4444)",y="var(--radius, 16px)",N="var(--shadow, 0 10px 30px rgba(0,0,0,0.35))",x={Wrapper:c.div`
        display: grid;
        gap: 16px;
        color: ${s};
        margin: auto;
        max-width: 1440px;
        padding: 15px;
    `,Header:c.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 12px 14px;
        background: ${G};
        border: 1px solid ${p};
        border-radius: ${y};
        box-shadow: ${N};

        .title {
            font-size: 20px;
            font-weight: 600;
            letter-spacing: 0.2px;
        }
        .controls {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .sel {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            color: ${$};
            font-size: 13px;
            select {
                background: #141414;
                color: ${s};
                border: 1px solid ${p};
                border-radius: 10px;
                padding: 6px 8px;
            }
        }
        button {
            padding: 8px 12px;
            border: 1px solid ${p};
            border-radius: 10px;
            background: #141414;
            color: ${s};
            font-size: 14px;
            cursor: pointer;
        }
        button:hover {
            border-color: ${b};
        }
        button:active {
            transform: translateY(1px);
        }
    `,StatsBar:c.div`
        display: flex;
        gap: 16px;
        flex-wrap: wrap;
        font-size: 14px;
        color: ${$};
        padding: 4px 2px 0;
        b {
            color: ${s};
        }
    `,Banner:c.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        background: rgba(34, 197, 94, 0.12);
        border: 1px solid ${b};
        color: ${s};
        border-radius: ${y};
        padding: 10px 12px;

        button {
            padding: 6px 10px;
            border: 1px solid ${p};
            border-radius: 10px;
            background: #161616;
            color: ${s};
            cursor: pointer;
            font-size: 13px;
        }
    `,Grid:c.div`
        display: grid;
        grid-template-columns: repeat(6, minmax(140px, 1fr));
        gap: 10px;

        @media (max-width: 1200px) {
            grid-template-columns: repeat(5, minmax(120px, 1fr));
        }
        @media (max-width: 980px) {
            grid-template-columns: repeat(4, minmax(110px, 1fr));
        }
        @media (max-width: 720px) {
            grid-template-columns: repeat(3, minmax(100px, 1fr));
        }
        @media (max-width: 520px) {
            grid-template-columns: repeat(2, minmax(100px, 1fr));
        }

        &[data-busy="1"] {
            pointer-events: none; /* avoid spamming clicks while flipping back */
        }
    `,Card:c.button`
        appearance: none;
        border: 1px solid ${p};
        border-radius: ${y};
        background: #0b0b0b;
        color: ${s};
        box-shadow: ${N};
        padding: 10px;
        text-align: left;
        cursor: pointer;
        transition: border-color 0.2s ease, transform 0.08s ease;

        &:hover {
            border-color: ${b};
        }
        &:active {
            transform: translateY(1px);
        }
        &:disabled {
            opacity: 0.7;
            cursor: default;
        }

        .inner {
            display: grid;
            align-content: start;
            gap: 8px;
            min-height: 88px;
        }

        .tag {
            display: inline-block;
            font-size: 11px;
            color: ${$};
            border: 1px dashed ${p};
            border-radius: 8px;
            padding: 2px 6px;
            width: fit-content;
            opacity: 0.9;
        }

        .face {
            font-size: 14px;
            line-height: 1.35;
            word-wrap: break-word;
            white-space: normal;
        }

        &[data-revealed="0"] .face {
            text-align: center;
            font-weight: 600;
            letter-spacing: 0.5px;
            font-size: 18px;
        }

        &[data-matched="1"] {
            border-color: ${b};
            background: radial-gradient(
                    1200px circle at 20% -10%,
                    rgba(34, 197, 94, 0.12),
                    transparent 40%
                ),
                #0b0b0b;
        }
    `,ModalBackdrop:c.div`
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.6);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
    `,ModalCard:c.div`
        width: min(420px, 92vw);
        background: ${G};
        border: 1px solid ${p};
        border-radius: ${y};
        box-shadow: ${N};
        padding: 16px;

        .title {
            font-weight: 600;
            margin-bottom: 6px;
            color: ${s};
        }
        .msg {
            color: ${$};
            font-size: 14px;
            margin-bottom: 12px;
        }
        .row {
            display: flex;
            gap: 8px;
            justify-content: flex-end;
        }

        button {
            padding: 8px 12px;
            border: 1px solid ${p};
            border-radius: 10px;
            background: #141414;
            color: ${s};
            cursor: pointer;
            font-size: 14px;
        }
        button:hover {
            border-color: ${b};
        }
        .ghost {
            background: transparent;
        }
        .danger {
            background: #1a0f10;
            border-color: ${q};
        }
    `},E="memoryWordGame_best",A=[{word:"abate",def:"to reduce; lessen"},{word:"candid",def:"truthful and straightforward"},{word:"diligent",def:"hard-working and careful"},{word:"emulate",def:"to imitate to equal or surpass"},{word:"frugal",def:"economical; avoiding waste"},{word:"lucid",def:"clear; easy to understand"},{word:"novice",def:"a beginner"},{word:"pragmatic",def:"practical; focused on results"},{word:"resilient",def:"able to recover quickly"},{word:"vivid",def:"bright; producing strong images"},{word:"succinct",def:"brief and to the point"},{word:"arduous",def:"involving great effort"}];function I(u){const n=[...u];for(let a=n.length-1;a>0;a--){const i=Math.floor(Math.random()*(a+1));[n[a],n[i]]=[n[i],n[a]]}return n}function W(u){const n=I(A).slice(0,u);let a=0;const i=[];return n.forEach((d,l)=>{i.push({id:a++,pairId:l,type:"word",face:d.word}),i.push({id:a++,pairId:l,type:"def",face:d.def})}),I(i)}function F(){const[u,n]=r.useState(8),[a,i]=r.useState(()=>W(8)),[d,l]=r.useState([]),[f,M]=r.useState(new Set),[k,S]=r.useState(!1),[m,z]=r.useState(0),[w,P]=r.useState(()=>{const t=localStorage.getItem(E);return t?Number(t):null}),[R,C]=r.useState(!1),Y=r.useMemo(()=>a.length/2,[a]);r.useEffect(()=>{v(!1)},[u]);function v(t=!0){if(t){C(!0);return}const o=W(u);i(o),l([]),M(new Set),S(!1),z(0)}function T(){C(!1),v(!1)}function B(){C(!1)}function D(t){if(!k&&!f.has(t.id)&&!d.includes(t.id)){if(d.length===0){l([t.id]);return}if(d.length===1){const o=d[0],h=a.find(g=>g.id===o),j=t,_=[o,j.id];if(l(_),z(g=>g+1),h.pairId===j.pairId&&h.type!==j.type){const g=new Set(f);g.add(o),g.add(j.id),M(g),setTimeout(()=>l([]),250)}else S(!0),setTimeout(()=>{l([]),S(!1)},700)}}}r.useEffect(()=>{f.size===a.length&&a.length>0&&(w===null||m<w)&&(P(m),localStorage.setItem(E,String(m)))},[f,a.length,m,w]);const H=f.size===a.length&&a.length>0;return e.jsxs(x.Wrapper,{children:[e.jsxs(x.Header,{children:[e.jsx("div",{className:"title",children:"Memory Word Game"}),e.jsxs("div",{className:"controls",children:[e.jsxs("label",{className:"sel",children:[e.jsx("span",{children:"Pairs"}),e.jsxs("select",{value:u,onChange:t=>n(Number(t.target.value)),"aria-label":"Select number of pairs",children:[e.jsx("option",{value:6,children:"6"}),e.jsx("option",{value:8,children:"8"}),e.jsx("option",{value:10,children:"10"})]})]}),e.jsx("button",{onClick:()=>v(!0),children:"New Game"})]})]}),e.jsxs(x.StatsBar,{children:[e.jsxs("div",{children:["Moves: ",e.jsx("b",{children:m})]}),e.jsxs("div",{children:["Matched: ",e.jsx("b",{children:f.size/2})," / ",Y]}),e.jsxs("div",{children:["Best (fewest moves): ",e.jsx("b",{children:w??"—"})]})]}),H&&e.jsxs(x.Banner,{children:[e.jsxs("span",{children:["Nice! You matched all pairs in ",m," moves."]}),e.jsx("button",{onClick:()=>v(!1),children:"Play again"})]}),e.jsx(x.Grid,{"data-busy":k?"1":"0",children:a.map(t=>{const o=f.has(t.id),h=o||d.includes(t.id);return e.jsx(x.Card,{type:"button","aria-label":h?t.face:"Hidden card","data-revealed":h?"1":"0","data-matched":o?"1":"0",onClick:()=>D(t),disabled:k||o,children:e.jsxs("div",{className:"inner",children:[e.jsx("div",{className:"tag",children:t.type==="word"?"Word":"Definition"}),e.jsx("div",{className:"face",children:h?t.face:"?"})]})},t.id)})}),R&&e.jsx(x.ModalBackdrop,{onClick:B,children:e.jsxs(x.ModalCard,{onClick:t=>t.stopPropagation(),children:[e.jsx("div",{className:"title",children:"Start a new game?"}),e.jsx("div",{className:"msg",children:"This will reshuffle and reset your moves."}),e.jsxs("div",{className:"row",children:[e.jsx("button",{className:"ghost",onClick:B,children:"Cancel"}),e.jsx("button",{className:"danger",onClick:T,children:"Yes, New Game"})]})]})})]})}export{F as default};
