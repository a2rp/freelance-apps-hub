import{d as n,r as a,j as e}from"./index-ywByXoKf.js";const V="var(--card, #111)",f="var(--text, #e9e9e9)",u="var(--muted, #b7b7b7)",l="var(--border, #222)",$="var(--accent, #22c55e)",Z="var(--radius, 16px)",Q="var(--shadow, 0 8px 30px rgba(0,0,0,0.25))",X="var(--maxw, 1080px)",ee=n.div`
    max-width: ${X};
    margin: 0 auto;
    padding: 24px;
    color: ${f};
`,te=n.header`
    margin-bottom: 12px;
    display: flex;
    justify-content: space-between;
    gap: 12px;
    align-items: flex-end;

    .title {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    h2 {
        margin: 0;
        font-weight: 700;
        letter-spacing: 0.2px;
    }
`,re=n.div`
    color: ${u};
    font-size: 0.95rem;
`,se=n.div`
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
`,oe=n.div`
    background: #0f0f0f;
    border: 1px solid ${l};
    color: ${u};
    border-radius: 10px;
    padding: 8px 12px;
    margin-bottom: 10px;
`,ne=n.section`
    background: ${V};
    border: 1px solid ${l};
    border-radius: ${Z};
    box-shadow: ${Q};
    padding: 16px;
    margin-bottom: 16px;
`,ae=n.div`
    display: grid;
    grid-template-columns: 1fr 180px 56px 180px;
    gap: 10px;
    align-items: end;

    .field {
        display: flex;
        flex-direction: column;
        gap: 6px;
    }

    label {
        color: ${u};
        font-size: 0.9rem;
    }

    @media (max-width: 720px) {
        grid-template-columns: 1fr 1fr;
        & > button {
            order: 3;
            width: 100%;
        }
    }
`,L=n.input`
    background: transparent;
    color: ${f};
    border: 1px solid ${l};
    border-radius: 10px;
    padding: 10px 12px;
    outline: none;
    font-size: 1.05rem;
    &:focus {
        border-color: ${$};
    }
`,ie=n.select`
    background: transparent;
    color: ${f};
    border: 1px solid ${l};
    border-radius: 10px;
    padding: 10px 12px;
    outline: none;
    font-size: 1.05rem;

    option {
        color: #111;
        background: #fff;
    }
`,ce=n.button`
    height: 42px;
    align-self: end;
    background: ${$};
    color: #0b0b0b;
    border: 1px solid ${l};
    border-radius: 10px;
    padding: 0 12px;
    cursor: pointer;
    font-weight: 600;

    &[disabled] {
        opacity: 0.7;
        cursor: not-allowed;
    }

    &[data-variant="ghost"] {
        background: transparent;
        color: ${f};
        border-color: ${l};
    }

    &:active {
        transform: translateY(1px);
    }
`,de=n.div`
    display: flex;
    justify-content: space-between;
    gap: 12px;
    align-items: center;
    margin-top: 12px;
    padding-top: 12px;
    border-top: 1px dashed ${l};

    .result {
        font-size: 1.1rem;
    }
    .pair {
        margin-top: 4px;
        color: ${u};
        font-size: 0.95rem;
    }
`,le=n.span`
    margin-left: 10px;
    font-size: 0.92rem;
    color: ${u};
`,pe=n.div`
    margin-top: 12px;
    display: flex;
    gap: 8px;
    flex-wrap: wrap;

    button {
        background: transparent;
        color: ${f};
        border: 1px dashed ${l};
        border-radius: 999px;
        padding: 6px 10px;
        cursor: pointer;
        font-size: 0.95rem;

        &:hover {
            border-style: solid;
            border-color: ${$};
        }
    }
`,xe=n.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
        margin: 0;
        font-size: 1.05rem;
    }
`,ue=n.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 12px;

    th,
    td {
        text-align: left;
        border-bottom: 1px solid ${l};
        padding: 10px 6px;
    }

    th {
        color: ${u};
        font-weight: 600;
    }
`,me=n(L)`
    width: 180px;
`,he=n.div`
    display: flex;
    justify-content: space-between;
    gap: 12px;
    align-items: center;
    margin-top: 12px;

    code {
        background: #0f0f0f;
        border: 1px solid ${l};
        padding: 2px 6px;
        border-radius: 6px;
        margin: 0 4px;
    }
`,fe=n.div`
    color: ${u};
    font-size: 0.92rem;
`,o={Wrapper:ee,Header:te,Subtle:re,Toolbar:se,Flash:oe,Card:ne,Row:ae,Input:L,Select:ie,Button:ce,ResultRow:de,Copied:le,Chips:pe,EditHeader:xe,Table:ue,RateInput:me,FooterRow:he,Small:fe},N={INR:1,USD:83.55,EUR:89.25,GBP:104.1,AED:22.75,AUD:54.05,CAD:61.25,JPY:.56,SGD:61.8},ge=Object.keys(N),T="cc_rates_v1",D="cc_prefs_v1",A="cc_rates_updated_v1",be="https://open.er-api.com/v6/latest/INR",w=(s,x)=>{try{const i=localStorage.getItem(s);return i?JSON.parse(i):x}catch{return x}},y=s=>Number.isFinite(s)&&s>=0?s:0,h=s=>{if(!Number.isFinite(s))return"0";const x=Math.abs(s)>=1?{maximumFractionDigits:2}:{maximumFractionDigits:6};return s.toLocaleString(void 0,x)},je=s=>{if(!s)return"Never";try{return new Date(s*1e3).toLocaleString("en-IN",{timeZone:"Asia/Kolkata",hour12:!1})}catch{return"Recently"}},Re=()=>{const[s,x]=a.useState(()=>w(T,N)),[{amount:i,from:c,to:d},m]=a.useState(()=>w(D,{amount:1e3,from:"INR",to:"USD"})),[b,U]=a.useState(()=>w(A,0)),[C,I]=a.useState(!1),[z,E]=a.useState(!1),[F,g]=a.useState("");a.useEffect(()=>{try{localStorage.setItem(T,JSON.stringify(s))}catch{}},[s]),a.useEffect(()=>{try{localStorage.setItem(D,JSON.stringify({amount:i,from:c,to:d}))}catch{}},[i,c,d]),a.useEffect(()=>{try{localStorage.setItem(A,JSON.stringify(b))}catch{}},[b]);const j=a.useMemo(()=>Object.keys(s).sort((t,r)=>t.localeCompare(r)),[s]),_=a.useMemo(()=>{const t=s[c]??1,r=s[d]??1;return y(Number(i))*t/r},[i,c,d,s]),B=a.useMemo(()=>{const t=s[c]??1,r=s[d]??1;return{oneFromInTo:r>0?t/r:0}},[c,d,s]),O=t=>m(r=>({...r,amount:t.replace(/[^\d.]/g,"")})),P=t=>m(r=>({...r,amount:String(t)})),M=t=>m(r=>({...r,from:t})),J=t=>m(r=>({...r,to:t})),Y=()=>m(t=>({...t,from:t.to,to:t.from})),H=async()=>{try{await navigator.clipboard.writeText(`${h(y(Number(i)))} ${c} = ${h(_)} ${d}`),E(!0),setTimeout(()=>E(!1),1200)}catch{}},K=async()=>{I(!0),g("");try{const r=await(await fetch(be,{cache:"no-store"})).json();if((r==null?void 0:r.result)!=="success"||!(r!=null&&r.rates))throw new Error("Bad data");const p={...s};for(const R of ge){if(R==="INR"){p.INR=1;continue}const S=r.rates[R];Number.isFinite(S)&&S>0&&(p[R]=1/S)}x(p);const v=r.time_last_update_unix||Math.floor(Date.now()/1e3);U(v),g("Rates updated")}catch{g("Couldn't fetch live rates. Using saved values.")}finally{I(!1),setTimeout(()=>g(""),1500)}},[k,W]=a.useState(!1),G=(t,r)=>{const p=parseFloat(r);!Number.isFinite(p)||p<=0||x(v=>({...v,[t]:p}))},q=()=>x(N);return e.jsxs(o.Wrapper,{children:[e.jsxs(o.Header,{children:[e.jsxs("div",{className:"title",children:[e.jsx("h2",{children:"Currency Converter"}),e.jsx(o.Subtle,{children:"Live refresh + offline edits"})]}),e.jsxs(o.Toolbar,{children:[e.jsxs(o.Small,{children:["Last updated: ",je(b)]}),e.jsx(o.Button,{onClick:K,disabled:C,children:C?"Refreshing…":"Refresh live rates"})]})]}),F&&e.jsx(o.Flash,{role:"status",children:F}),e.jsxs(o.Card,{children:[e.jsxs(o.Row,{children:[e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Amount"}),e.jsx(o.Input,{inputMode:"decimal",placeholder:"0",value:i,onChange:t=>O(t.target.value)})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"From"}),e.jsx(o.Select,{value:c,onChange:t=>M(t.target.value),children:j.map(t=>e.jsx("option",{value:t,children:t},t))})]}),e.jsx(o.Button,{onClick:Y,"aria-label":"Swap",children:"↔"}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"To"}),e.jsx(o.Select,{value:d,onChange:t=>J(t.target.value),children:j.map(t=>e.jsx("option",{value:t,children:t},t))})]})]}),e.jsxs(o.ResultRow,{children:[e.jsxs("div",{className:"lhs",children:[e.jsxs("div",{className:"result",children:[h(y(Number(i)))," ",c," ="," ",e.jsxs("b",{children:[h(_)," ",d]})]}),e.jsxs("div",{className:"pair",children:["1 ",c," ≈ ",h(B.oneFromInTo)," ",d]})]}),e.jsxs("div",{className:"rhs",children:[e.jsx(o.Button,{onClick:H,children:"Copy"}),z&&e.jsx(o.Copied,{children:"Copied"})]})]}),e.jsx(o.Chips,{children:[100,500,1e3,5e3,1e4].map(t=>e.jsx("button",{onClick:()=>P(t),children:t},t))})]}),e.jsxs(o.Card,{children:[e.jsxs(o.EditHeader,{children:[e.jsx("h3",{children:"Edit Rates"}),e.jsx(o.Button,{onClick:()=>W(t=>!t),children:k?"Close":"Open"})]}),k&&e.jsxs(e.Fragment,{children:[e.jsxs(o.Table,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Currency"}),e.jsx("th",{children:"1 Unit = INR"})]})}),e.jsx("tbody",{children:j.map(t=>e.jsxs("tr",{children:[e.jsx("td",{children:t}),e.jsx("td",{children:e.jsx(o.RateInput,{type:"number",step:"0.0001",min:"0.000001",value:s[t],onChange:r=>G(t,r.target.value)})})]},t))})]}),e.jsxs(o.FooterRow,{children:[e.jsx(o.Button,{onClick:q,"data-variant":"ghost",children:"Reset to defaults"}),e.jsxs(o.Small,{children:["Conversion uses:",e.jsx("code",{children:" amount × (from→INR) ÷ (to→INR) "})]})]})]})]})]})};export{Re as default};
