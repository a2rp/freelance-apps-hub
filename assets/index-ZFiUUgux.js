import{d,r as c,j as t}from"./index-DqR_65b9.js";const y="var(--text, #eaeaea)",I="var(--muted, #a8a8a8)",p="var(--border, #242424)",K="var(--accent, #22c55e)",Q="var(--danger, #ef4444)",V="var(--radius, 16px)",Z="var(--shadow, 0 8px 28px rgba(0,0,0,0.30))",n={};n.Wrapper=d.div`
    max-width: var(--maxw, 1100px);
    margin: 0 auto;
    padding: 24px 16px 32px;
    color: ${y};
`;n.Header=d.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    flex-wrap: wrap;
`;n.Title=d.h1`
    margin: 0;
    font-size: 22px;
    letter-spacing: 0.2px;
`;n.Subtitle=d.div`
    color: ${I};
    font-size: 13px;
`;n.Actions=d.div`
    display: flex;
    gap: 8px;
    align-items: center;
    flex-wrap: wrap;
`;n.Button=d.button`
    border: 1px solid ${p};
    background: ${i=>i.$variant==="danger"?"linear-gradient(180deg,#2a1111,#200f0f)":i.$variant==="ghost"?"transparent":"linear-gradient(180deg,#1a1a1a,#141414)"};
    color: ${y};
    padding: 8px 14px;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
        border-color: ${i=>i.$variant==="danger"?Q:K};
    }
`;n.FileLabel=d.label`
    border: 1px dashed ${p};
    padding: 8px 12px;
    border-radius: 10px;
    cursor: pointer;
    display: inline-flex;
    gap: 8px;
    align-items: center;
    input {
        display: none;
    }
`;n.Toolbar=d.div`
    display: flex;
    gap: 10px;
    align-items: center;
    margin: 14px 0 10px;
    flex-wrap: wrap;
`;n.Search=d.input`
    flex: 1 1 280px;
    background: #0e0e0e;
    color: ${y};
    border: 1px solid ${p};
    border-radius: 10px;
    padding: 10px 12px;
    outline: none;
`;n.Select=d.select`
    height: 40px;
    background: #0e0e0e;
    color: ${y};
    border: 1px solid ${p};
    border-radius: 10px;
    padding: 0 10px;
    outline: none;
`;n.MonthInput=d.input`
    height: 40px;
    background: #0e0e0e;
    color: ${y};
    border: 1px solid ${p};
    border-radius: 10px;
    padding: 0 10px;
    outline: none;
    /* keep calendar icon visible on dark */
    &::-webkit-calendar-picker-indicator {
        filter: invert(1);
    }
`;n.Stats=d.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 12px;
    margin-bottom: 12px;
    @media (max-width: 720px) {
        grid-template-columns: 1fr;
    }
`;n.StatCard=d.div`
    background: linear-gradient(180deg, #131313, #0f0f0f);
    border: 1px solid ${p};
    border-radius: ${V};
    box-shadow: ${Z};
    padding: 12px;

    .num {
        font-size: 18px;
        margin-top: 6px;
    }
`;n.Grid=d.div`
    display: grid;
    grid-template-columns: 1.4fr 1fr;
    gap: 24px;
    margin-bottom: 16px;
    @media (max-width: 980px) {
        grid-template-columns: 1fr;
    }
`;n.Card=d.section`
    background: linear-gradient(180deg, #131313, #0f0f0f);
    border: 1px solid ${p};
    border-radius: ${V};
    box-shadow: ${Z};
    padding: 14px;
`;n.CardHead=d.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
`;n.CardTitle=d.h2`
    margin: 0;
    font-size: 18px;
`;n.Empty=d.div`
    border: 1px dashed ${p};
    padding: 16px;
    border-radius: 12px;
    color: ${I};
    text-align: center;
`;n.BudgetList=d.div`
    display: grid;
    gap: 10px;
`;n.BudgetItem=d.div`
    border: 1px solid ${i=>i.$over?"#5a1a1a":p};
    background: #101010;
    border-radius: 12px;
    padding: 10px;
    .top {
        display: grid;
        grid-template-columns: 1fr auto auto;
        gap: 10px;
        align-items: center;
    }
    .name {
        height: 40px;
        background: #0e0e0e;
        color: ${y};
        border: 1px solid ${p};
        border-radius: 10px;
        padding: 0 10px;
        outline: none;
    }
    .amount {
        display: flex;
        align-items: center;
        gap: 6px;
    }
    .amount .sym {
        color: ${I};
    }
    .amount .num {
        width: 120px;
        height: 40px;
        background: #0e0e0e;
        color: ${y};
        border: 1px solid ${p};
        border-radius: 10px;
        padding: 0 10px;
        outline: none;
    }
`;n.Progress=d.div`
    margin-top: 8px;
    border: 1px solid ${p};
    border-radius: 999px;
    height: 10px;
    background: #0d0d0d;
    overflow: hidden;
    .bar {
        height: 100%;
        background: ${K};
    }
`;n.BudgetMeta=d.div`
    margin-top: 6px;
    display: flex;
    gap: 8px;
    align-items: center;
    flex-wrap: wrap;
`;n.AccountList=d.div`
    display: grid;
    gap: 8px;
`;n.AccountItem=d.div`
    display: grid;
    grid-template-columns: 1fr auto auto;
    gap: 10px;
    align-items: center;
    border: 1px solid ${p};
    border-radius: 12px;
    padding: 8px 10px;
    background: #101010;
    .small {
        font-size: 12px;
    }
    .right {
        text-align: right;
    }
`;n.TxnForm=d.form`
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(6, 1fr);
    @media (max-width: 980px) {
        grid-template-columns: 1fr 1fr;
    }
    label {
        display: grid;
        gap: 6px;
        font-size: 13px;
    }
    input,
    select {
        height: 40px;
        background: #0e0e0e;
        color: ${y};
        border: 1px solid ${p};
        border-radius: 10px;
        padding: 0 10px;
        outline: none;
    }
    input[type="date"]::-webkit-calendar-picker-indicator {
        filter: invert(1);
    }
    .full {
        grid-column: 1 / -1;
    }
    .amountInput {
        display: flex;
        align-items: center;
        gap: 6px;
    }
    .amountInput .sym {
        color: ${I};
    }
    .actions {
        grid-column: 1 / -1;
        display: flex;
        justify-content: flex-end;
    }
`;n.Table=d.table`
    width: 100%;
    border-collapse: collapse;
    th,
    td {
        border-bottom: 1px solid ${p};
        padding: 10px;
        vertical-align: top;
    }
    th {
        color: ${I};
        text-align: left;
    }
    td.num {
        text-align: right;
    }
`;n.Pill=d.span`
    display: inline-block;
    padding: 2px 8px;
    border-radius: 999px;
    border: 1px solid ${p};
    text-transform: capitalize;
    &[data-type="expense"] {
        color: #ffb3b3;
        border-color: #5a1a1a;
        background: #2a1111;
    }
    &[data-type="income"] {
        color: #c8ffd6;
        border-color: #1a5a2a;
        background: #112a1b;
    }
`;n.IconBtn=d.button`
    border: 1px solid ${p};
    background: transparent;
    color: ${y};
    border-radius: 8px;
    padding: 4px 8px;
    cursor: pointer;
    &:hover {
        border-color: ${Q};
        color: #fff;
    }
`;const b={SETTINGS:"pf_settings",ACCOUNTS:"pf_accounts",TXNS:"pf_transactions",BUDGETS:"pf_budgets"},O={currency:"INR",month:ee(new Date)},q=[{id:"CASH",name:"Cash",type:"Wallet",initial:0}],J=[{id:"groceries",name:"Groceries",budget:6e3},{id:"travel",name:"Travel",budget:3e3},{id:"rent",name:"Rent",budget:0},{id:"food",name:"Food/Delivery",budget:3e3},{id:"ent",name:"Entertainment",budget:1500}];function ee(i){return`${i.getFullYear()}-${String(i.getMonth()+1).padStart(2,"0")}`}function X(i){const[u,m]=i.split("-").map(Number);return`${u}-${String(m).padStart(2,"0")}-${String(new Date().getDate()).padStart(2,"0")}`}function je(){return Math.random().toString(36).slice(2,10)}function F(i,u){try{return JSON.parse(localStorage.getItem(i)||"null")??u}catch{return u}}function U(i,u){localStorage.setItem(i,JSON.stringify(u))}function Y(i){return i==="INR"?"₹":"$"}function h(i,u){return i==="INR"?new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:2}).format(u):new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:2}).format(u)}function M(i){const u=Number(i);return isNaN(u)?0:u}function ve(){var H,W;const[i,u]=c.useState(()=>F(b.SETTINGS,O)),[m,N]=c.useState(()=>F(b.ACCOUNTS,q)),[g,C]=c.useState(()=>F(b.BUDGETS,J)),[j,T]=c.useState(()=>F(b.TXNS,[])),[A,te]=c.useState(""),[k,ne]=c.useState("all"),[D,ae]=c.useState("all"),[E,re]=c.useState("all"),[S,ie]=c.useState("dateDesc"),[x,f]=c.useState({date:X(i.month),type:"expense",accountId:((H=m[0])==null?void 0:H.id)||"",categoryId:((W=g[0])==null?void 0:W.id)||"",note:"",amount:""});c.useEffect(()=>U(b.SETTINGS,i),[i]),c.useEffect(()=>U(b.ACCOUNTS,m),[m]),c.useEffect(()=>U(b.BUDGETS,g),[g]),c.useEffect(()=>U(b.TXNS,j),[j]);const v=c.useMemo(()=>j.filter(a=>(a.date||"").startsWith(i.month)),[j,i.month]),G=c.useMemo(()=>{const e=new Map;return g.forEach(a=>e.set(a.id,a)),e},[g]),_=c.useMemo(()=>{const e=new Map;return m.forEach(a=>e.set(a.id,a)),e},[m]),L=c.useMemo(()=>{let e=v.slice();if(A.trim()){const a=A.toLowerCase();e=e.filter(r=>[r.note,r.accountId,r.categoryId].join(" ").toLowerCase().includes(a))}return k!=="all"&&(e=e.filter(a=>a.type===k)),D!=="all"&&(e=e.filter(a=>a.categoryId===D)),E!=="all"&&(e=e.filter(a=>a.accountId===E)),e.sort((a,r)=>S==="dateDesc"?r.date.localeCompare(a.date):S==="dateAsc"?a.date.localeCompare(r.date):S==="amountDesc"?r.amount-a.amount:S==="amountAsc"?a.amount-r.amount:0),e},[v,A,k,D,E,S]),$=c.useMemo(()=>{const e=v.filter(r=>r.type==="income").reduce((r,o)=>r+o.amount,0),a=v.filter(r=>r.type==="expense").reduce((r,o)=>r+o.amount,0);return{income:e,expense:a,net:e-a}},[v]),oe=c.useMemo(()=>{const e={};return v.forEach(a=>{a.type==="expense"&&(e[a.categoryId]=(e[a.categoryId]||0)+a.amount)}),e},[v]);function de(){const e=M(x.amount);if(!x.date||!x.accountId||!x.categoryId||!e){alert("Please fill date, account, category and a non-zero amount.");return}const a={id:je(),date:x.date,type:x.type,accountId:x.accountId,categoryId:x.categoryId,note:x.note.trim(),amount:e};T(r=>[a,...r]),f(r=>({...r,note:"",amount:""}))}function se(e){const a=j.find(o=>o.id===e),r=a?`<td>${P(a.date)}</td> • ${a.type==="expense"?"-":"+"}${h(i.currency,a.amount)}`:"";confirm(`Delete this transaction?
${r}`)&&T(o=>o.filter(s=>s.id!==e))}function ce(){const e=window.prompt("Account name (e.g., HDFC, UPI Wallet):","");if(!e)return;const a=window.prompt("Type (e.g., Bank, Card, Wallet):","Bank")||"Bank",r=M(window.prompt("Starting balance (optional):","0")),o={id:e.toUpperCase().replace(/\s+/g,"_"),name:e,type:a,initial:r};N(s=>[o,...s]),f(s=>({...s,accountId:o.id}))}function le(e){if(j.some(r=>r.accountId===e)){if(!confirm("This account has transactions. Delete anyway? They’ll stay but show the old account id."))return}else if(!confirm("Delete this account?"))return;N(r=>r.filter(o=>o.id!==e))}function ue(){const e=window.prompt("Category name:","");if(!e)return;const a=M(window.prompt("Monthly budget amount:","0")),r={id:e.toLowerCase().replace(/\s+/g,"-"),name:e,budget:a};C(o=>[r,...o]),f(o=>({...o,categoryId:r.id}))}function z(e,a){C(r=>r.map(o=>o.id===e?{...o,...a}:o))}function pe(e){const r=j.some(o=>o.categoryId===e)?" Transactions using this category will keep the id.":"";confirm(`Delete this category?${r}`)&&C(o=>o.filter(s=>s.id!==e))}function xe(){const e={_type:"pf-dashboard",_v:1,settings:i,accounts:m,budgets:g,txns:j},a=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),r=document.createElement("a");r.href=URL.createObjectURL(a),r.download=`pf-${i.month}.json`,r.click(),URL.revokeObjectURL(r.href)}function me(e){var o;const a=(o=e.target.files)==null?void 0:o[0];if(!a)return;const r=new FileReader;r.onload=()=>{try{const s=String(r.result).replace(/^\uFEFF/,""),l=JSON.parse(s);if(!confirm("Import will replace current data. Continue?"))return;u(l.settings||O),N(Array.isArray(l.accounts)?l.accounts:[]),C(Array.isArray(l.budgets)?l.budgets:[]),T(Array.isArray(l.txns)?l.txns:[])}catch{alert("Invalid JSON.")}finally{e.target.value=""}},r.readAsText(a)}function he(){confirm("Reset everything?")&&(u(O),N(q),C(J),T([]))}function ge(){const e=i.currency,a=`
    @page { size: A4; margin: 14mm; }
    body {
      font: 12px/1.45 -apple-system, system-ui, "Segoe UI", Roboto, Arial, sans-serif;
      color: #111;
    }
    h2 { margin: 0 0 10px; font-size: 18px; }

    .muted { color:#666; }

    /* summary cards */
    .grid { display:flex; gap:8px; margin:6px 0 10px; }
    .card { flex:1 1 0; border:1px solid #ccc; border-radius:8px; padding:8px 10px; }

    /* table */
    table { width:100%; border-collapse: collapse; table-layout: fixed; }
    col.date { width: 180px; }
    col.acc  { width: 140px; }
    col.cat  { width: 140px; }
    col.note { width: auto; }
    col.amt  { width: 110px; }

    thead th {
      text-align:left; color:#444; font-weight:600;
      border-bottom:1px solid #ccc; padding:6px 8px;
    }
    tbody td {
      border-top:1px solid #eee; padding:6px 8px; vertical-align: top;
    }
    td.right, th.right { text-align:right; }
    tbody tr:nth-child(even) { background:#f8f8f8; }
    td.note { word-break: break-word; }
    tr { page-break-inside: avoid; }
  `,r=L.map(l=>{var B,w;return`
    <tr>
      <td>${P(l.date)}</td>
      <td>${R(((B=_.get(l.accountId))==null?void 0:B.name)||l.accountId)}</td>
      <td>${R(((w=G.get(l.categoryId))==null?void 0:w.name)||l.categoryId)}</td>
      <td class="note">${R(l.note||"")}</td>
      <td class="right">${l.type==="expense"?"-":"+"}${h(e,l.amount)}</td>
    </tr>
  `}).join(""),o=`<!doctype html>
<html>
<head>
  <meta charset="utf-8"/>
  <title>Finance — ${i.month}</title>
  <style>${a}</style>
</head>
<body>
  <h2>Personal Finance — ${i.month}</h2>

  <div class="grid">
    <div class="card"><div class="muted">Income</div><div><strong>${h(e,$.income)}</strong></div></div>
    <div class="card"><div class="muted">Expense</div><div><strong>${h(e,$.expense)}</strong></div></div>
    <div class="card"><div class="muted">Net</div><div><strong>${h(e,$.net)}</strong></div></div>
  </div>

  <table>
    <colgroup>
      <col class="date"><col class="acc"><col class="cat"><col class="note"><col class="amt">
    </colgroup>
    <thead>
      <tr>
        <th>Date</th>
        <th>Account</th>
        <th>Category</th>
        <th>Note</th>
        <th class="right">Amount</th>
      </tr>
    </thead>
    <tbody>
      ${r||'<tr><td colspan="5" class="muted">No transactions</td></tr>'}
    </tbody>
  </table>

  <script>window.print()<\/script>
</body>
</html>`,s=window.open("","_blank","width=900,height=1100");if(!s)return alert("Popup blocked.");s.document.open(),s.document.write(o),s.document.close(),s.focus()}function R(e=""){return e.replace(/[&<>"']/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[a])}function P(e){if(!e)return"—";if(/\dT\d/.test(e)){const w=new Date(e);if(!isNaN(w)){const fe=w.toLocaleDateString("en-US",{month:"short",day:"2-digit",year:"numeric"}),ye=w.toLocaleTimeString("en-US",{hour12:!1,hour:"2-digit",minute:"2-digit",second:"2-digit"});return`${fe} ${ye}`}}const[a,r,o]=String(e).split("-").map(Number);if(!a||!r||!o)return e;const s=new Date(a,r-1,o,0,0,0),l=s.toLocaleDateString("en-US",{month:"short",day:"2-digit",year:"numeric"}),B=s.toLocaleTimeString("en-US",{hour12:!1,hour:"2-digit",minute:"2-digit",second:"2-digit"});return`${l} ${B}`}return t.jsxs(n.Wrapper,{children:[t.jsxs(n.Header,{children:[t.jsxs("div",{children:[t.jsx(n.Title,{children:"Personal Finance Dashboard"}),t.jsx(n.Subtitle,{className:"muted",children:"Monthly budgets, transactions & quick stats • autosave • ₹ / $"})]}),t.jsxs(n.Actions,{children:[t.jsxs(n.FileLabel,{children:["Import",t.jsx("input",{type:"file",accept:".json,application/json",onChange:me})]}),t.jsx(n.Button,{onClick:xe,$variant:"ghost",children:"Export"}),t.jsx(n.Button,{onClick:ge,$variant:"ghost",children:"Print"}),t.jsx(n.Button,{onClick:he,$variant:"danger",children:"Reset"})]})]}),t.jsxs(n.Toolbar,{children:[t.jsxs(n.Select,{value:i.currency,onChange:e=>u(a=>({...a,currency:e.target.value})),title:"Currency",children:[t.jsx("option",{value:"INR",children:"₹ INR"}),t.jsx("option",{value:"USD",children:"$ USD"})]}),t.jsx(n.MonthInput,{type:"month",value:i.month,onChange:e=>{const a=e.target.value||ee(new Date);u(r=>({...r,month:a})),f(r=>({...r,date:X(a)}))},title:"Month"})]}),t.jsxs(n.Stats,{children:[t.jsxs(n.StatCard,{children:[t.jsx("div",{className:"muted",children:"Income"}),t.jsx("div",{className:"num",children:h(i.currency,$.income)})]}),t.jsxs(n.StatCard,{children:[t.jsx("div",{className:"muted",children:"Expense"}),t.jsx("div",{className:"num",children:h(i.currency,$.expense)})]}),t.jsxs(n.StatCard,{children:[t.jsx("div",{className:"muted",children:"Net"}),t.jsx("div",{className:"num",children:h(i.currency,$.net)})]})]}),t.jsxs(n.Grid,{children:[t.jsxs(n.Card,{children:[t.jsxs(n.CardHead,{children:[t.jsx(n.CardTitle,{children:"Budgets"}),t.jsx(n.Button,{$variant:"ghost",onClick:ue,children:"+ Add"})]}),t.jsxs(n.BudgetList,{children:[g.length===0&&t.jsx(n.Empty,{children:"No categories yet."}),g.map(e=>{const a=oe[e.id]||0,r=e.budget>0?Math.min(100,Math.round(a/e.budget*100)):0,o=e.budget>0&&a>e.budget;return t.jsxs(n.BudgetItem,{$over:o,children:[t.jsxs("div",{className:"top",children:[t.jsx("input",{className:"name",value:e.name,onChange:s=>z(e.id,{name:s.target.value})}),t.jsxs("div",{className:"amount",children:[t.jsx("span",{className:"sym",children:Y(i.currency)}),t.jsx("input",{className:"num",type:"number",min:"0",step:"0.01",value:e.budget,onChange:s=>z(e.id,{budget:M(s.target.value)})})]}),t.jsx(n.IconBtn,{title:"Delete",onClick:()=>pe(e.id),children:"✕"})]}),t.jsx(n.Progress,{children:t.jsx("div",{className:"bar",style:{width:`${r}%`}})}),t.jsxs(n.BudgetMeta,{children:[t.jsx("span",{className:"muted",children:"Used"}),t.jsx("span",{children:h(i.currency,a)}),t.jsx("span",{className:"muted",children:"/ Budget"}),t.jsx("span",{children:h(i.currency,e.budget)}),t.jsx("span",{className:"muted",children:"•"}),t.jsxs("span",{children:[r,"%"]})]})]},e.id)})]})]}),t.jsxs(n.Card,{children:[t.jsxs(n.CardHead,{children:[t.jsx(n.CardTitle,{children:"Accounts"}),t.jsx(n.Button,{$variant:"ghost",onClick:ce,children:"+ Add"})]}),t.jsx(n.AccountList,{children:m.map(e=>t.jsxs(n.AccountItem,{children:[t.jsxs("div",{children:[t.jsx("strong",{children:e.name}),t.jsx("div",{className:"muted small",children:e.type})]}),t.jsxs("div",{className:"right",children:[t.jsx("div",{className:"muted",children:"Starting"}),t.jsx("div",{children:h(i.currency,e.initial)})]}),t.jsx(n.IconBtn,{title:"Delete account",onClick:()=>le(e.id),children:"✕"})]},e.id))})]})]}),t.jsxs(n.Card,{style:{marginBottom:15},children:[t.jsx(n.CardHead,{children:t.jsx(n.CardTitle,{children:"Add Transaction"})}),t.jsxs(n.TxnForm,{onSubmit:e=>{e.preventDefault(),de()},children:[t.jsxs("label",{children:[t.jsx("span",{children:"Date"}),t.jsx("input",{type:"date",value:x.date,onChange:e=>f(a=>({...a,date:e.target.value}))})]}),t.jsxs("label",{children:[t.jsx("span",{children:"Type"}),t.jsxs("select",{value:x.type,onChange:e=>f(a=>({...a,type:e.target.value})),children:[t.jsx("option",{value:"expense",children:"Expense (−)"}),t.jsx("option",{value:"income",children:"Income (+)"})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:"Account"}),t.jsx("select",{value:x.accountId,onChange:e=>f(a=>({...a,accountId:e.target.value})),children:m.map(e=>t.jsx("option",{value:e.id,children:e.name},e.id))})]}),t.jsxs("label",{children:[t.jsx("span",{children:"Category"}),t.jsx("select",{value:x.categoryId,onChange:e=>f(a=>({...a,categoryId:e.target.value})),children:g.map(e=>t.jsx("option",{value:e.id,children:e.name},e.id))})]}),t.jsxs("label",{children:[t.jsx("span",{children:"Amount"}),t.jsxs("div",{className:"amountInput",children:[t.jsx("span",{className:"sym",children:Y(i.currency)}),t.jsx("input",{type:"number",min:"0",step:"0.01",value:x.amount,onChange:e=>f(a=>({...a,amount:e.target.value})),placeholder:"0.00"})]})]}),t.jsxs("label",{className:"full",children:[t.jsx("span",{children:"Note"}),t.jsx("input",{value:x.note,onChange:e=>f(a=>({...a,note:e.target.value})),placeholder:"Optional"})]}),t.jsx("div",{className:"actions",children:t.jsx(n.Button,{type:"submit",children:"Add"})})]})]}),t.jsxs(n.Toolbar,{children:[t.jsx(n.Search,{placeholder:"Search note / account / category…",value:A,onChange:e=>te(e.target.value)}),t.jsxs(n.Select,{value:k,onChange:e=>ne(e.target.value),title:"Type",children:[t.jsx("option",{value:"all",children:"All types"}),t.jsx("option",{value:"expense",children:"Expense"}),t.jsx("option",{value:"income",children:"Income"})]}),t.jsxs(n.Select,{value:D,onChange:e=>ae(e.target.value),title:"Category",children:[t.jsx("option",{value:"all",children:"All categories"}),g.map(e=>t.jsx("option",{value:e.id,children:e.name},e.id))]}),t.jsxs(n.Select,{value:E,onChange:e=>re(e.target.value),title:"Account",children:[t.jsx("option",{value:"all",children:"All accounts"}),m.map(e=>t.jsx("option",{value:e.id,children:e.name},e.id))]}),t.jsxs(n.Select,{value:S,onChange:e=>ie(e.target.value),title:"Sort",children:[t.jsx("option",{value:"dateDesc",children:"Date ↓"}),t.jsx("option",{value:"dateAsc",children:"Date ↑"}),t.jsx("option",{value:"amountDesc",children:"Amount ↓"}),t.jsx("option",{value:"amountAsc",children:"Amount ↑"})]})]}),t.jsxs(n.Card,{children:[t.jsx(n.CardHead,{children:t.jsxs(n.CardTitle,{children:["Transactions - ",i.month]})}),t.jsxs(n.Table,{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Date"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Account"}),t.jsx("th",{children:"Category"}),t.jsx("th",{children:"Note"}),t.jsx("th",{className:"num",children:"Amount"}),t.jsx("th",{})]})}),t.jsxs("tbody",{children:[L.length===0&&t.jsx("tr",{children:t.jsx("td",{colSpan:7,children:t.jsx(n.Empty,{children:"No matching transactions."})})}),L.map(e=>{var a,r;return t.jsxs("tr",{children:[t.jsx("td",{children:P(e.date)}),t.jsx("td",{children:t.jsx(n.Pill,{"data-type":e.type,children:e.type})}),t.jsx("td",{children:((a=_.get(e.accountId))==null?void 0:a.name)||e.accountId}),t.jsx("td",{children:((r=G.get(e.categoryId))==null?void 0:r.name)||e.categoryId}),t.jsx("td",{className:"muted",children:e.note||"—"}),t.jsxs("td",{className:"num",children:[e.type==="expense"?"-":"+",h(i.currency,e.amount)]}),t.jsx("td",{className:"num",children:t.jsx(n.IconBtn,{title:"Delete",onClick:()=>se(e.id),children:"✕"})})]},e.id)})]})]})]})]})}export{ve as default};
