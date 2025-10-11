import{d as i,r as m,j as t}from"./index-CaRw1yxc.js";const g="var(--card, #111)",x="var(--text, #e9e9e9)",l="var(--muted, #b7b7b7)",d="var(--border, #222)",N="var(--accent, #22c55e)",b="var(--radius, 16px)",f="var(--shadow, 0 8px 30px rgba(0,0,0,0.25))",S=`
  outline: 2px solid ${N};
  outline-offset: 2px;
`,D=i.main`
    width: 100%;
    max-width: 920px;
    margin: 0 auto;
    padding: 24px;

    .header {
        margin-bottom: 16px;
        h3 {
            margin: 0 0 6px 0;
            color: ${x};
        }
        .sub {
            margin: 0;
            color: ${l};
            font-size: 0.95rem;
        }
    }
`,k=i.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    align-items: center;
    background: ${g};
    border: 1px solid ${d};
    border-radius: ${b};
    padding: 12px 12px;
    box-shadow: ${f};

    label {
        color: ${l};
        font-size: 0.9rem;
    }
`,R=i.select`
    background: #0f0f0f;
    color: ${x};
    border: 1px solid ${d};
    border-radius: 10px;
    padding: 8px 10px;
    min-width: 64px;
    &:focus {
        ${S}
    }
`,H=i.button`
    --btn-bg: ${s=>s.$variant==="ghost"?"transparent":N};
    --btn-fg: ${s=>s.$variant==="ghost"?x:"#0b0b0b"};
    --btn-bd: ${s=>s.$variant==="ghost"?d:"transparent"};

    background: var(--btn-bg);
    color: var(--btn-fg);
    border: 1px solid var(--btn-bd);
    border-radius: 12px;
    padding: 10px 14px;
    font-weight: 600;
    cursor: pointer;
    transition: transform 120ms ease, opacity 120ms ease, background 120ms ease;
    &:hover {
        transform: translateY(-1px);
        opacity: 0.95;
    }
    &:active {
        transform: translateY(0);
        opacity: 1;
    }
    &:focus-visible {
        ${S}
    }
`,E=i.section`
    margin-top: 16px;
    background: ${g};
    border: 1px solid ${d};
    border-radius: ${b};
    padding: 16px;
    box-shadow: ${f};
    min-height: 110px;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
    gap: 12px;

    .placeholder {
        color: ${l};
        align-self: center;
    }
`,M=i.div`
    background: #0e0e0e;
    border: 1px solid ${d};
    border-radius: 18px;
    min-height: 92px;
    display: grid;
    place-items: center;
    position: relative;

    .glyph {
        font-size: 44px;
        line-height: 1;
    }
    .value {
        position: absolute;
        right: 10px;
        bottom: 8px;
        font-size: 0.9rem;
        color: ${l};
    }
`,T=i.div`
    margin-top: 12px;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 10px;

    .stat {
        background: ${g};
        border: 1px solid ${d};
        border-radius: ${b};
        padding: 10px 12px;
        box-shadow: ${f};
        display: flex;
        align-items: center;
        justify-content: space-between;
        .label {
            color: ${l};
            font-size: 0.9rem;
        }
        .value {
            color: ${x};
            font-weight: 700;
        }
    }

    @media (max-width: 640px) {
        grid-template-columns: 1fr;
    }
`,z=i.section`
    margin-top: 16px;

    h4 {
        margin: 0 0 8px 0;
        color: ${x};
    }
    .muted {
        color: ${l};
    }
`,A=i.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    gap: 8px;

    li {
        background: ${g};
        border: 1px solid ${d};
        border-radius: ${b};
        padding: 10px 12px;
        box-shadow: ${f};
        display: grid;
        gap: 4px;
    }

    .line {
        display: flex;
        gap: 8px;
        align-items: center;
        .values {
            color: ${x};
            font-weight: 600;
        }
        .total {
            color: ${l};
        }
    }

    .time {
        color: ${l};
        font-size: 0.85rem;
    }
`,n={Wrapper:D,Controls:k,Select:R,Button:H,DiceRow:E,Die:M,StatsRow:T,History:z,HistoryList:A},w="dice-app:history",I=["","⚀","⚁","⚂","⚃","⚄","⚅"],J=s=>{const a=new Date(s),o=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],p=a.getDate(),c=o[a.getMonth()],h=a.getFullYear(),$=String(a.getHours()).padStart(2,"0"),y=String(a.getMinutes()).padStart(2,"0"),v=String(a.getSeconds()).padStart(2,"0");return`${c} ${p}, ${h} ${$}:${y}:${v} hrs`},O=()=>Math.floor(Math.random()*6)+1,Y=async({title:s,message:a,confirmText:o="Yes",cancelText:p="Cancel"})=>{try{const{appConfirm:c}=window;if(typeof c=="function")return await c({title:s,message:a,confirmText:o,cancelText:p})}catch{}return window.confirm(a)},F=()=>{const[s,a]=m.useState(2),[o,p]=m.useState([]),[c,h]=m.useState([]);m.useEffect(()=>{try{const e=localStorage.getItem(w);e&&h(JSON.parse(e))}catch{}},[]);const $=m.useMemo(()=>o.reduce((e,r)=>e+r,0),[o]),y=()=>{const e=Array.from({length:s},()=>O()),r={values:e,total:e.reduce((j,u)=>j+u,0),ts:Date.now()};p(e),h(j=>{const u=[r,...j].slice(0,20);try{localStorage.setItem(w,JSON.stringify(u))}catch{}return u})},v=async()=>{if(await Y({title:"Clear history?",message:"This will remove all saved rolls. This action cannot be undone.",confirmText:"Clear",cancelText:"Keep"})){h([]);try{localStorage.removeItem(w)}catch{}}},C=e=>{const r=Number(e.target.value);a(r),p([])};return t.jsxs(n.Wrapper,{children:[t.jsxs("header",{className:"header",children:[t.jsx("h3",{children:"Dice App"}),t.jsx("p",{className:"sub",children:"Quick rolls with a tidy history. That's it."})]}),t.jsxs(n.Controls,{children:[t.jsx("label",{htmlFor:"diceCount",children:"Dice"}),t.jsx(n.Select,{id:"diceCount",value:s,onChange:C,"aria-label":"Select number of dice",children:[1,2,3,4,5,6].map(e=>t.jsx("option",{value:e,children:e},e))}),t.jsx(n.Button,{type:"button",onClick:y,children:"Roll"}),t.jsx(n.Button,{type:"button",$variant:"ghost",onClick:v,children:"Clear History"})]}),t.jsx(n.DiceRow,{children:o.length===0?t.jsx("div",{className:"placeholder",children:"Pick a count and press Roll"}):o.map((e,r)=>t.jsxs(n.Die,{title:`Die ${r+1}: ${e}`,children:[t.jsx("span",{className:"glyph",children:I[e]}),t.jsx("span",{className:"value",children:e})]},r))}),t.jsxs(n.StatsRow,{children:[t.jsxs("div",{className:"stat",children:[t.jsx("span",{className:"label",children:"Dice"}),t.jsx("span",{className:"value",children:s})]}),t.jsxs("div",{className:"stat",children:[t.jsx("span",{className:"label",children:"Total"}),t.jsx("span",{className:"value",children:$||"-"})]}),t.jsxs("div",{className:"stat",children:[t.jsx("span",{className:"label",children:"Last Roll"}),t.jsx("span",{className:"value",children:o.length?o.join(" + "):"-"})]})]}),t.jsxs(n.History,{children:[t.jsx("h4",{children:"History"}),c.length===0?t.jsx("p",{className:"muted",children:"No rolls yet."}):t.jsx(n.HistoryList,{children:c.map((e,r)=>t.jsxs("li",{children:[t.jsxs("div",{className:"line",children:[t.jsx("span",{className:"values",children:e.values.join(" + ")}),t.jsxs("span",{className:"total",children:["= ",e.total]})]}),t.jsx("span",{className:"time",children:J(e.ts)})]},e.ts+"-"+r))})]})]})};export{F as default};
