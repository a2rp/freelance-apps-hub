import{d as l,r as n,j as e}from"./index-CZmFNdSy.js";const M="var(--bg)",g="var(--card)",m="var(--text)",E="var(--muted)",u="var(--border)",b="var(--radius)",z="var(--shadow)",y="var(--accent)",te="var(--danger, #e5484d)",a={Wrapper:l.div`
        max-width: 1440px;
        margin: 0 auto;
        display: grid;
        gap: 16px;
        padding: 16px;
        color: ${m};
        background: ${M};
        min-height: 100%;
        outline: none; /* focus ring off */
        user-select: none; /* avoid accidental selection */
        touch-action: none; /* mobile: prevent swipe-scroll while playing */
        overscroll-behavior: contain;
    `,Header:l.header`
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
            color: ${E};
            font-size: 14px;
        }
    `,Badges:l.div`
        display: flex;
        gap: 8px;
        align-items: center;
        .badge {
            background: ${g};
            border: 1px solid ${u};
            padding: 6px 10px;
            border-radius: 999px;
            font-size: 12px;
            box-shadow: ${z};
        }
    `,Layout:l.div`
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
    `,Card:l.div`
        background: ${g};
        border: 1px solid ${u};
        border-radius: ${b};
        box-shadow: ${z};
        padding: 16px;
    `,SectionTitle:l.h2`
        margin: 0 0 10px 0;
        font-size: 15px;
        font-weight: 600;
    `,Info:l.div`
        padding: 10px 12px;
        border: 1px dashed ${u};
        border-radius: ${b};
        color: ${E};
        background: ${M};
        .foodDot {
            display: inline-block;
            width: 10px;
            height: 10px;
            background: ${y};
            border-radius: 50%;
            margin: 0 4px;
        }
    `,TopBar:l.div`
        display: flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 12px;
        .metric {
            display: grid;
        }
        .label {
            color: ${E};
            font-size: 12px;
        }
        .spacer {
            flex: 1;
        }
    `,ControlsMini:l.div`
        display: grid;
        grid-template-rows: auto auto auto;
        gap: 4px;
        align-items: center;
        justify-items: center;
        .row {
            display: grid;
            grid-template-columns: repeat(3, 28px);
            gap: 4px;
        }
        button {
            width: 28px;
            height: 28px;
            border-radius: 8px;
            appearance: none;
            border: 1px solid ${u};
            background: ${g};
            color: ${m};
            font: inherit;
            cursor: pointer;
            &:hover {
                border-color: ${y};
            }
        }
    `,Board:l.div`
        --size: ${o=>o.$size||20};
        display: grid;
        grid-template-columns: repeat(var(--size), 1fr);
        grid-template-rows: repeat(var(--size), 1fr);
        gap: 2px;
        background: ${g};
        border: 1px solid ${u};
        border-radius: ${b};
        aspect-ratio: 1 / 1;
        width: 100%;
        .cell {
            background: ${M};
            border-radius: 6px;
        }
        .cell.snake {
            background: rgba(255, 255, 255, 0.14);
        }
        .cell.head {
            background: ${m};
        }
        .cell.food {
            background: ${y};
        }
    `,Actions:l.div`
        margin-top: 14px;
        display: flex;
        gap: 10px;
        align-items: center;
        .spacer {
            flex: 1;
        }
        button {
            appearance: none;
            border: 1px solid ${u};
            background: ${g};
            color: ${m};
            padding: 10px 14px;
            border-radius: ${b};
            cursor: pointer;
            font: inherit;
            transition: transform 0.02s ease-in-out, border-color 0.15s ease;
            &:hover {
                border-color: ${y};
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
            background: ${M};
        }
        .danger {
            border-color: ${te};
        }
        .primary {
            background: ${y};
            border-color: ${y};
            color: black;
        }
    `,Overlay:l.div`
        position: fixed;
        inset: 0;
        display: grid;
        place-items: center;
        background: rgba(0, 0, 0, 0.2);
        z-index: 40;
        .panel {
            background: ${g};
            color: ${m};
            border: 1px solid ${u};
            border-radius: ${b};
            padding: 16px;
            box-shadow: ${z};
            text-align: center;
            display: grid;
            gap: 10px;
        }
        .panel button {
            appearance: none;
            border: 1px solid ${u};
            background: ${g};
            color: ${m};
            padding: 10px 14px;
            border-radius: ${b};
            cursor: pointer;
            font: inherit;
        }
        .panel button.primary {
            background: ${y};
            border-color: ${y};
            color: #fff;
        }
    `,ModalOverlay:l.div`
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
        display: grid;
        place-items: center;
        z-index: 50;
    `,Modal:l.div`
        width: min(420px, 90vw);
        background: ${g};
        color: ${m};
        border: 1px solid ${u};
        border-radius: ${b};
        box-shadow: ${z};
        padding: 16px;
        h3 {
            margin: 0 0 6px 0;
        }
        p {
            margin: 0 0 12px 0;
            color: ${E};
        }
        .actions {
            display: flex;
            gap: 10px;
            justify-content: flex-end;
        }
        .actions button {
            appearance: none;
            border: 1px solid ${u};
            background: ${g};
            color: ${m};
            padding: 8px 12px;
            border-radius: ${b};
            cursor: pointer;
            font: inherit;
        }
        .actions .ghost {
            background: ${M};
        }
        .actions .danger {
            border-color: ${te};
        }
    `},x=20,W=3,de=60,ne=180,G="snake_highscore_v1",N={up:{x:0,y:-1,key:"up"},down:{x:0,y:1,key:"down"},left:{x:-1,y:0,key:"left"},right:{x:1,y:0,key:"right"}},pe={up:"down",down:"up",left:"right",right:"left"},se=o=>Math.floor(Math.random()*o),q=(o,h)=>o.x===h.x&&o.y===h.y;function _(){const o=Math.floor(x/2);return Array.from({length:W},(h,w)=>({x:o-w,y:o}))}function L(o){for(;;){const h={x:se(x),y:se(x)};if(!o.some(w=>q(w,h)))return h}}const xe=()=>{const[o,h]=n.useState(_),[w,K]=n.useState(N.right),B=n.useRef(N.right),[$,Y]=n.useState(()=>L(_())),[P,U]=n.useState(ne),[v,R]=n.useState(!1),[j,F]=n.useState(!1),[k,S]=n.useState({open:!1,type:"",title:"",body:""}),[H,J]=n.useState(()=>{try{return parseInt(localStorage.getItem(G)||"0",10)||0}catch{return 0}}),Q=n.useMemo(()=>Math.max(0,o.length-W),[o.length]),V=n.useRef(o),X=n.useRef(v),A=n.useRef(j);n.useEffect(()=>{V.current=o},[o]),n.useEffect(()=>{X.current=v},[v]),n.useEffect(()=>{A.current=j},[j]);const Z=n.useRef(null),i=()=>{var r;return(r=Z.current)==null?void 0:r.focus()};n.useEffect(()=>{i()},[]);function f(r){pe[w.key]!==r&&(B.current=N[r])}function O(){A.current||R(r=>!r)}function D(){const r=_();h(r),K(N.right),B.current=N.right,Y(L(r)),U(ne),R(!1),F(!1),i()}const ae=r=>{const t=r.key.toLowerCase(),c=t.startsWith("arrow"),s=["w","a","s","d"].includes(t),d=t===" ",p=t==="enter";(c||s||d||p)&&r.preventDefault(),!r.repeat&&(["arrowup","w"].includes(t)&&f("up"),["arrowdown","s"].includes(t)&&f("down"),["arrowleft","a"].includes(t)&&f("left"),["arrowright","d"].includes(t)&&f("right"),(d||t==="p")&&O(),p&&A.current&&D())},ee=n.useCallback(()=>{const r=V.current,t=B.current;K(t);const c=r[0],s={x:c.x+t.x,y:c.y+t.y};if(s.x<0||s.y<0||s.x>=x||s.y>=x){R(!1),F(!0);return}if(r.some(T=>q(T,s))){R(!1),F(!0);return}const d=q(s,$),p=[s,...r],C=d?p:p.slice(0,-1);h(C),d&&(Y(L(C)),U(T=>Math.max(de,T-6)));const I=Math.max(0,C.length-W);if(I>H){J(I);try{localStorage.setItem(G,String(I))}catch{}}},[$,H]);n.useEffect(()=>{let r,t=performance.now(),c=0;const s=d=>{const p=d-t;t=d,X.current&&!A.current&&(c+=p,c>=P&&(c=0,ee())),r=requestAnimationFrame(s)};return r=requestAnimationFrame(s),()=>cancelAnimationFrame(r)},[P,ee]);const re=()=>S({open:!0,type:"reset",title:"Reset game?",body:"Current run will be lost."}),ie=()=>S({open:!0,type:"clear-hs",title:"Clear high score?",body:"This removes the saved best score from this browser."}),ce=()=>{if(k.type==="reset"&&D(),k.type==="clear-hs"){J(0);try{localStorage.setItem(G,"0")}catch{}}S({open:!1,type:"",title:"",body:""})},oe=n.useMemo(()=>new Set(o.map(r=>`${r.x},${r.y}`)),[o]),le=n.useMemo(()=>{const r=[];for(let t=0;t<x;t++)for(let c=0;c<x;c++){const s=`${c},${t}`,d=$.x===c&&$.y===t,p=o[0].x===c&&o[0].y===t,C=!p&&oe.has(s);r.push({k:s,isFood:d,isHead:p,isBody:C})}return r},[o,oe,$]);return e.jsxs(a.Wrapper,{ref:Z,tabIndex:0,onKeyDown:ae,"aria-label":"Snake Game Area (focus is trapped here for keyboard controls)",children:[e.jsxs(a.Header,{children:[e.jsxs("div",{children:[e.jsx("h1",{children:"Snake"}),e.jsxs("p",{children:["Arrow/WASD to move • Space to ",v?"Pause":"Start"," • Enter to restart on game over."]})]}),e.jsxs(a.Badges,{children:[e.jsxs("span",{className:"badge",children:["Board ",x,"×",x]}),e.jsx("span",{className:"badge",children:"RAF Loop"})]})]}),e.jsxs(a.Layout,{children:[e.jsx("div",{className:"left",children:e.jsxs(a.Card,{children:[e.jsxs(a.TopBar,{children:[e.jsxs("div",{className:"metric",children:[e.jsx("span",{className:"label",children:"Score"}),e.jsx("strong",{children:Q})]}),e.jsxs("div",{className:"metric",children:[e.jsx("span",{className:"label",children:"High"}),e.jsx("strong",{children:H})]}),e.jsxs("div",{className:"metric",children:[e.jsx("span",{className:"label",children:"Speed"}),e.jsxs("strong",{children:[Math.round(1e3/P)," /s"]})]}),e.jsx("div",{className:"spacer"}),e.jsxs(a.ControlsMini,{children:[e.jsx("button",{onMouseDown:r=>r.preventDefault(),onClick:()=>{f("up"),i()},"aria-label":"Up",children:"▲"}),e.jsxs("div",{className:"row",children:[e.jsx("button",{onMouseDown:r=>r.preventDefault(),onClick:()=>{f("left"),i()},"aria-label":"Left",children:"◀"}),e.jsx("button",{onMouseDown:r=>r.preventDefault(),onClick:()=>{O(),i()},"aria-label":"Play/Pause",children:v?"⏸":"▶"}),e.jsx("button",{onMouseDown:r=>r.preventDefault(),onClick:()=>{f("right"),i()},"aria-label":"Right",children:"▶"})]}),e.jsx("button",{onMouseDown:r=>r.preventDefault(),onClick:()=>{f("down"),i()},"aria-label":"Down",children:"▼"})]})]}),e.jsx(a.Board,{$size:x,onClick:i,children:le.map(r=>e.jsx("div",{className:["cell",r.isFood&&"food",r.isHead&&"head",r.isBody&&"snake"].filter(Boolean).join(" ")},r.k))}),e.jsxs(a.Actions,{children:[j?e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"primary",onMouseDown:r=>r.preventDefault(),onClick:()=>{D(),i()},children:"New Game"}),e.jsx("button",{className:"ghost",onMouseDown:r=>r.preventDefault(),onClick:()=>{re(),i()},children:"Reset Board"})]}):e.jsxs(e.Fragment,{children:[e.jsx("button",{onMouseDown:r=>r.preventDefault(),onClick:()=>{O(),i()},children:v?"Pause":"Start"}),e.jsx("button",{className:"ghost",onMouseDown:r=>r.preventDefault(),onClick:()=>{re(),i()},children:"Reset"})]}),e.jsx("div",{className:"spacer"}),e.jsx("button",{className:"ghost danger",onMouseDown:r=>r.preventDefault(),onClick:()=>{ie(),i()},children:"Clear High Score"})]})]})}),e.jsx("div",{className:"right",children:e.jsxs(a.Card,{children:[e.jsx(a.SectionTitle,{children:"How to play"}),e.jsxs(a.Info,{children:["Eat the ",e.jsx("span",{className:"foodDot"})," to grow. Avoid the walls and your own tail. Game speeds up a little with each bite."]})]})})]}),j&&e.jsx(a.Overlay,{onClick:D,children:e.jsxs("div",{className:"panel",onClick:r=>r.stopPropagation(),children:[e.jsx("h3",{children:"Game Over"}),e.jsxs("p",{children:["Final score ",e.jsx("strong",{children:Q})]}),e.jsx("button",{className:"primary",onMouseDown:r=>r.preventDefault(),onClick:()=>{D(),i()},children:"Play Again"})]})}),k.open&&e.jsx(a.ModalOverlay,{onClick:()=>S({open:!1,type:"",title:"",body:""}),children:e.jsxs(a.Modal,{onClick:r=>r.stopPropagation(),children:[e.jsx("h3",{children:k.title}),e.jsx("p",{children:k.body}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{className:"ghost",onClick:()=>S({open:!1,type:"",title:"",body:""}),children:"Cancel"}),e.jsx("button",{className:"danger",onClick:ce,children:k.type==="reset"?"Reset":"Delete"})]})]})})]})};export{xe as default};
