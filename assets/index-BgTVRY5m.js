import{d,r as s,_ as C,j as a}from"./index-NxKaGGxV.js";const _="var(--card, #111)",v="var(--text, #e9e9e9)",b="var(--muted, #b7b7b7)",h="var(--border, #222)",f="var(--accent, #22c55e)",N="var(--radius, 16px)",E="var(--shadow, 0 8px 30px rgba(0,0,0,0.25))",k=d.div`
    max-width: 900px;
    margin: 0 auto;
    padding: 24px;
    color: ${v};
`,A=d.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin-bottom: 16px;

    h2 {
        margin: 0;
        font-weight: 700;
        letter-spacing: 0.2px;
    }
    .meta {
        color: ${b};
        font-size: 14px;
    }
`,I=d.section`
    background: ${_};
    border: 1px solid ${h};
    border-radius: ${N};
    box-shadow: ${E};
    padding: 20px;

    .fact {
        font-size: 20px;
        line-height: 1.6;
        margin: 8px 0 16px;
    }
`,R=d.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    button {
        appearance: none;
        border: 1px solid ${h};
        background: #0e0e0e;
        color: ${v};
        padding: 10px 14px;
        border-radius: 12px;
        font-size: 14px;
        cursor: pointer;
        transition: transform 120ms ease, border-color 120ms ease;

        &:hover {
            transform: translateY(-1px);
            border-color: ${f};
        }
        &:active {
            transform: translateY(0);
        }

        &.fav {
            min-width: 44px;
            text-align: center;
            font-size: 18px;
        }
        &.fav.on {
            border-color: ${f};
            box-shadow: 0 0 0 2px
                color-mix(in oklab, ${f} 30%, transparent);
        }
    }
`,z=d.aside`
    margin-top: 22px;
    border-top: 1px dashed ${h};
    padding-top: 16px;

    .title {
        color: ${b};
        font-size: 13px;
        margin-bottom: 8px;
    }
    ul {
        list-style: disc;
        padding-left: 20px;
        margin: 0;
    }
    li {
        margin: 6px 0;
    }
`,l={Wrapper:k,Header:A,Card:I,Controls:R,Favs:z},g="ffg_idx",m="ffg_favs",O=["Sharks existed before trees.","Octopuses have three hearts.","Honey found in ancient tombs is still edible.","A day on Venus is longer than its year."];function P(e){return Array.from(new Set(e.split(`
`).map(i=>i.trim()).filter(i=>i&&!i.startsWith("#"))))}function H(){const[e,i]=s.useState(O),[r,c]=s.useState(()=>{const t=parseInt(localStorage.getItem(g)||"0",10);return Number.isNaN(t)?0:t}),[o,j]=s.useState(()=>{try{const t=localStorage.getItem(m);return t?JSON.parse(t):[]}catch{return[]}});s.useEffect(()=>{let t=!0;return C(()=>import("./facts-CgslLntp.js"),[]).then(x=>{if(!t)return;const u=P(x.default||"");u.length&&i(u)}).catch(()=>{}),()=>{t=!1}},[]),s.useEffect(()=>{e.length&&(r>=e.length&&c(e.length-1),r<0&&c(0))},[e,r]),s.useEffect(()=>{localStorage.setItem(g,String(r))},[r]),s.useEffect(()=>{localStorage.setItem(m,JSON.stringify(o))},[o]);const n=e[r]||"",p=s.useMemo(()=>o.includes(n),[o,n]),y=()=>c(t=>e.length?(t+1)%e.length:0),w=()=>c(t=>e.length?(t-1+e.length)%e.length:0),F=()=>{if(e.length<2)return;let t=Math.floor(Math.random()*e.length);t===r&&(t=(t+1)%e.length),c(t)},S=()=>{n&&j(t=>t.includes(n)?t.filter(x=>x!==n):[...t,n])},$=async()=>{try{await navigator.clipboard.writeText(n)}catch{}};return a.jsxs(l.Wrapper,{children:[a.jsxs(l.Header,{children:[a.jsx("h2",{children:"Fun-Fact Generator"}),a.jsxs("span",{className:"meta",children:[e.length?r+1:0," / ",e.length]})]}),a.jsxs(l.Card,{children:[a.jsx("p",{className:"fact","aria-live":"polite",children:n}),a.jsxs(l.Controls,{children:[a.jsx("button",{onClick:w,"aria-label":"Previous fact",children:"Prev"}),a.jsx("button",{onClick:F,"aria-label":"Random fact",children:"Random"}),a.jsx("button",{onClick:y,"aria-label":"Next fact",children:"Next"}),a.jsx("button",{onClick:$,"aria-label":"Copy fact",children:"Copy"}),a.jsx("button",{className:p?"fav on":"fav",onClick:S,"aria-label":p?"Remove from favorites":"Add to favorites",title:p?"Remove from favorites":"Add to favorites",children:"★"})]})]}),o.length>0&&a.jsxs(l.Favs,{children:[a.jsxs("div",{className:"title",children:["Favorites (",o.length,")"]}),a.jsx("ul",{children:o.map(t=>a.jsx("li",{children:t},t))})]})]})}export{H as default};
