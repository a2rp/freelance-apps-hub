import{d as m,r as n,j as a}from"./index-D4EV_4eu.js";const F="var(--card, #111)",G="var(--text, #e9e9e9)",w="var(--muted, #b7b7b7)",b="var(--border, #222)",M="var(--accent, #22c55e)",g="var(--radius, 16px)",S="var(--shadow, 0 8px 30px rgba(0,0,0,0.25))",u={Wrapper:m.div`
        max-width: var(--maxw, 1100px);
        margin: 0 auto;
        padding: 24px;
        color: ${G};
    `,Header:m.header`
        display: grid;
        grid-template-columns: 1fr auto auto;
        align-items: center;
        gap: 12px;
        margin-bottom: 18px;

        .title {
            font-size: 22px;
            font-weight: 600;
            letter-spacing: 0.3px;
        }

        .meta {
            display: flex;
            gap: 12px;
            color: ${w};
            font-size: 14px;
        }

        .actions button {
            background: ${M};
            color: #0b0b0b;
            border: 1px solid ${b};
            padding: 8px 14px;
            border-radius: ${g};
            font-weight: 600;
            cursor: pointer;
            box-shadow: ${S};
        }

        @media (max-width: 640px) {
            grid-template-columns: 1fr;
            .actions {
                order: 3;
            }
            .meta {
                order: 2;
            }
        }
    `,Grid:m.div`
        display: grid;
        gap: 12px;
        grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
        background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.02),
            rgba(255, 255, 255, 0)
        );
        border: 1px solid ${b};
        border-radius: ${g};
        padding: 16px;
    `,Card:m.button`
        position: relative;
        width: 100%;
        aspect-ratio: 1 / 1;
        border: 1px solid ${b};
        border-radius: calc(${g} - 4px);
        background: ${F};
        perspective: 800px;
        cursor: pointer;
        outline: none;
        box-shadow: ${S};

        .inner {
            position: absolute;
            inset: 0;
            border-radius: inherit;
            transform-style: preserve-3d;
            transition: transform 0.35s ease;
            transform: rotateY(${r=>r.$flipped?180:0}deg);
        }

        .front,
        .back {
            position: absolute;
            inset: 0;
            display: grid;
            place-items: center;
            font-size: clamp(28px, 4.5vw, 40px);
            backface-visibility: hidden;
            border-radius: inherit;
        }

        .back {
            color: ${w};
        }

        .front {
            transform: rotateY(180deg);
            /* slight highlight on matched */
            box-shadow: ${r=>r.$matched?"0 0 0 2px "+M:"none"};
        }
    `},$=["🍎","🍌","🍇","🍉","🍓","🍍","🍑","🍐"];function y(){const s=$.flatMap(t=>[{f:t},{f:t}]).map((t,i)=>({id:`${t.f}-${i}-${Math.random().toString(36).slice(2,7)}`,f:t.f,matched:!1,flipped:!1}));for(let t=s.length-1;t>0;t--){const i=Math.floor(Math.random()*(t+1));[s[t],s[i]]=[s[i],s[t]]}return s}const v="fruitMatcher_bestMoves",z=()=>{const[r,s]=n.useState(()=>y()),[t,i]=n.useState(null),[N,p]=n.useState(!1),[d,j]=n.useState(0),f=n.useMemo(()=>r.filter(e=>e.matched).length/2,[r]),k=n.useMemo(()=>{try{return Number(localStorage.getItem(v))||null}catch{return null}},[r]);n.useEffect(()=>{if(f===$.length&&d>0)try{const e=Number(localStorage.getItem(v))||1/0;d<e&&localStorage.setItem(v,String(d))}catch{}},[f,d]);const I=()=>{s(y()),i(null),j(0),p(!1)},C=e=>{if(N)return;const l=r[e];if(l.flipped||l.matched)return;const c=r.slice();if(c[e]={...l,flipped:!0},s(c),t===null){i(e);return}p(!0),j(o=>o+1);const h=c[t],x=c[e];h.f===x.f?setTimeout(()=>{const o=c.slice();o[t]={...h,matched:!0},o[e]={...x,matched:!0},s(o),i(null),p(!1)},250):setTimeout(()=>{const o=c.slice();o[t]={...h,flipped:!1},o[e]={...x,flipped:!1},s(o),i(null),p(!1)},650)};return a.jsxs(u.Wrapper,{children:[a.jsxs(u.Header,{children:[a.jsx("div",{className:"title",children:"Fruit Matcher"}),a.jsxs("div",{className:"meta",children:[a.jsxs("span",{children:["Pairs: ",f,"/",$.length]}),a.jsxs("span",{children:["Moves: ",d]}),k!==null&&a.jsxs("span",{children:["Best: ",k]})]}),a.jsx("div",{className:"actions",children:a.jsx("button",{onClick:I,"aria-label":"Start a new game",children:"New Game"})})]}),a.jsx(u.Grid,{children:r.map((e,l)=>a.jsx(u.Card,{onClick:()=>C(l),$flipped:e.flipped||e.matched,$matched:e.matched,"aria-label":e.matched?"Matched":e.flipped?e.f:"Hidden card",children:a.jsxs("div",{className:"inner",children:[a.jsx("div",{className:"front",children:e.f}),a.jsx("div",{className:"back",children:"🍏"})]})},e.id))})]})};export{z as default};
