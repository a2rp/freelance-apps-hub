import{d as s,r as n,j as e}from"./index-C86gdwjR.js";const _="var(--card, #111)",v="var(--text, #e9e9e9)",c="var(--muted, #b7b7b7)",d="var(--border, #222)",$="var(--accent, #22c55e)",S="var(--danger, #ef4444)",D="var(--radius, 16px)",U="var(--shadow, 0 8px 30px rgba(0,0,0,0.25))",a={Wrapper:s.section`
        color: ${v};
        background: ${_};
        border: 1px solid ${d};
        border-radius: ${D};
        box-shadow: ${U};
        padding: 20px;
        max-width: 980px;
        margin: 0 auto;
    `,Header:s.header`
        display: flex;
        justify-content: space-between;
        gap: 16px;
        align-items: flex-end;
        margin-bottom: 16px;

        .title h2 {
            margin: 0 0 4px;
            font-weight: 700;
            letter-spacing: 0.3px;
        }
        .title .sub {
            margin: 0;
            color: ${c};
            font-size: 14px;
        }
    `,Controls:s.div`
        display: flex;
        gap: 10px;
        align-items: center;
        flex-wrap: wrap;

        label {
            display: flex;
            flex-direction: column;
            gap: 6px;
            font-size: 12px;
            color: ${c};
        }
        select,
        input {
            background: #0c0c0c;
            color: ${v};
            border: 1px solid ${d};
            border-radius: 10px;
            padding: 8px 10px;
            min-width: 140px;
            outline: none;
        }
        input {
            min-width: 220px;
        }

        button {
            background: ${$};
            color: #07110a;
            border: none;
            border-radius: 12px;
            padding: 10px 14px;
            font-weight: 700;
            cursor: pointer;
            transition: transform 120ms ease;
        }
        button:disabled {
            opacity: 0.7;
            cursor: default;
        }
        button:not(:disabled):active {
            transform: translateY(1px);
        }
    `,Table:s.div`
        display: grid;
        border: 1px solid ${d};
        border-radius: 12px;
        overflow: hidden;
    `,Head:s.div`
        display: grid;
        grid-template-columns: 1fr 180px 120px;
        gap: 0;
        background: #0e0e0e;
        color: ${c};
        padding: 10px 14px;
        border-bottom: 1px solid ${d};
        font-size: 13px;

        span:nth-child(2),
        span:nth-child(3) {
            text-align: right;
        }
    `,Row:s.div`
        display: grid;
        grid-template-columns: 1fr 180px 120px;
        padding: 14px;
        border-bottom: 1px solid ${d};
        align-items: center;

        &:last-child {
            border-bottom: none;
        }

        &.muted {
            color: ${c};
        }
        &.error {
            color: ${S};
        }

        .coin {
            display: inline-flex;
            align-items: baseline;
            gap: 10px;
        }
        .price {
            text-align: right;
            font-variant-numeric: tabular-nums;
        }
    `,Ticker:s.span`
        color: ${c};
        font-size: 12px;
        letter-spacing: 0.5px;
        border: 1px dashed ${d};
        border-radius: 10px;
        padding: 2px 8px;
    `,Change:s.span`
        text-align: right;
        font-variant-numeric: tabular-nums;
        color: ${({$up:o})=>o==null?"inherit":o?$:S};
        font-weight: 700;
    `,StatusBar:s.footer`
        display: flex;
        gap: 16px;
        flex-wrap: wrap;
        color: ${c};
        font-size: 12px;
        padding-top: 12px;
    `},H=[{id:"bitcoin",label:"Bitcoin",symbol:"BTC"},{id:"ethereum",label:"Ethereum",symbol:"ETH"},{id:"solana",label:"Solana",symbol:"SOL"},{id:"ripple",label:"XRP",symbol:"XRP"},{id:"cardano",label:"Cardano",symbol:"ADA"},{id:"dogecoin",label:"Dogecoin",symbol:"DOGE"},{id:"tron",label:"TRON",symbol:"TRX"},{id:"polygon",label:"Polygon",symbol:"MATIC"},{id:"litecoin",label:"Litecoin",symbol:"LTC"},{id:"polkadot",label:"Polkadot",symbol:"DOT"}],k="cryptoPriceChecker.fiat",T="cryptoPriceChecker.filter";function z(o){return`https://api.coingecko.com/api/v3/simple/price?ids=${o}&vs_currencies=inr,usd&include_24hr_change=true&precision=2`}function B(){const[o]=n.useState(H),[p,R]=n.useState({}),[h,g]=n.useState(!1),[x,f]=n.useState(""),[j,L]=n.useState(null),[i,E]=n.useState(()=>localStorage.getItem(k)||"inr"),[b,F]=n.useState(()=>localStorage.getItem(T)||""),y=n.useRef(null),w=n.useMemo(()=>{const t=b.trim().toLowerCase();return t?o.filter(r=>r.label.toLowerCase().includes(t)||r.symbol.toLowerCase().includes(t)):o},[o,b]),I=n.useMemo(()=>{const t=i==="inr"?"en-IN":"en-US",r=i.toUpperCase();return new Intl.NumberFormat(t,{style:"currency",currency:r,maximumFractionDigits:2})},[i]);async function m(){g(!0),f("");try{const t=o.map(l=>l.id).join(","),r=await fetch(z(t),{headers:{accept:"application/json"}});if(!r.ok)throw new Error(`HTTP ${r.status}`);const u=await r.json();R(u),L(new Date)}catch{f("Couldn't fetch prices. Check connection or try again.")}finally{g(!1)}}function N(t){const r=t.target.value;E(r),localStorage.setItem(k,r)}function P(t){const r=t.target.value;F(r),localStorage.setItem(T,r)}return n.useEffect(()=>(m(),y.current=setInterval(m,45e3),()=>clearInterval(y.current)),[]),e.jsxs(a.Wrapper,{children:[e.jsxs(a.Header,{children:[e.jsxs("div",{className:"title",children:[e.jsx("h2",{children:"Crypto Price Checker"}),e.jsx("p",{className:"sub",children:"Quick spot check for top coins • live from CoinGecko"})]}),e.jsxs(a.Controls,{children:[e.jsxs("label",{children:["Fiat",e.jsxs("select",{value:i,onChange:N,"aria-label":"Fiat currency",children:[e.jsx("option",{value:"inr",children:"INR (₹)"}),e.jsx("option",{value:"usd",children:"USD ($)"})]})]}),e.jsxs("label",{children:["Search",e.jsx("input",{type:"text",placeholder:"BTC, ETH, Solana…",value:b,onChange:P,"aria-label":"Search coin"})]}),e.jsx("button",{onClick:m,disabled:h,title:"Refresh now",children:h?"Refreshing…":"Refresh"})]})]}),e.jsxs(a.Table,{role:"table","aria-label":"Crypto prices",children:[e.jsxs(a.Head,{role:"row",className:"head",children:[e.jsx("span",{children:"Coin"}),e.jsx("span",{children:"Price"}),e.jsx("span",{children:"24h"})]}),x&&e.jsxs(a.Row,{role:"row",className:"error",children:[e.jsx("span",{children:"—"}),e.jsx("span",{children:x}),e.jsx("span",{children:"—"})]}),!x&&h&&e.jsxs(a.Row,{role:"row",className:"muted",children:[e.jsx("span",{children:"Loading…"}),e.jsx("span",{children:"—"}),e.jsx("span",{children:"—"})]}),!x&&w.map(t=>{const r=p==null?void 0:p[t.id],u=r?r[i]:null,l=r?r[`${i}_24h_change`]:null,C=typeof l=="number"?l>=0:null;return e.jsxs(a.Row,{role:"row",children:[e.jsxs("span",{className:"coin",children:[e.jsx("b",{children:t.label}),e.jsx(a.Ticker,{children:t.symbol})]}),e.jsx("span",{className:"price",children:u!=null?I.format(u):"—"}),e.jsx(a.Change,{role:"cell",$up:C,children:l!=null?`${C?"▲":"▼"} ${Math.abs(l).toFixed(2)}%`:"—"})]},t.id)})]}),e.jsxs(a.StatusBar,{children:[e.jsxs("span",{children:["Fiat: ",e.jsx("b",{children:i.toUpperCase()})]}),e.jsxs("span",{children:["Coins: ",e.jsx("b",{children:w.length})]}),e.jsxs("span",{children:["Updated: ",e.jsx("b",{children:j?j.toLocaleTimeString():"—"})]})]})]})}export{B as default};
