import{d,r as g,j as e}from"./index-CIRokZAL.js";const L="var(--card, #121212)",b="var(--text, #eaeaea)",f="var(--muted, #a8a8a8)",x="var(--border, #242424)",Q="var(--accent, #22c55e)",M="var(--danger, #ef4444)",J="var(--radius, 16px)",W="var(--shadow, 0 8px 28px rgba(0,0,0,0.30))",s={};s.Wrapper=d.div`
    max-width: var(--maxw, 1100px);
    margin: 0 auto;
    padding: 24px 16px;
    color: ${b};
`;s.Header=d.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    margin-bottom: 10px;
`;s.Title=d.h1`
    margin: 0;
    font-size: 22px;
`;s.Subtitle=d.div`
    color: ${f};
    font-size: 13px;
`;s.Actions=d.div`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    align-items: center;
`;s.Button=d.button`
    border: 1px solid ${x};
    background: ${r=>r.$variant==="danger"?"linear-gradient(180deg, #2a1111, #200f0f)":r.$variant==="ghost"?"transparent":"linear-gradient(180deg, #1a1a1a, #141414)"};
    color: ${b};
    padding: 8px 14px;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
        border-color: ${r=>r.$variant==="danger"?M:Q};
    }
`;s.MetaRow=d.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 10px;
    padding: 8px 0 12px;
    color: ${f};
    font-size: 14px;
    @media (max-width: 720px) {
        grid-template-columns: 1fr;
    }
`;s.Card=d.section`
    background: linear-gradient(180deg, #131313, #0f0f0f);
    border: 1px solid ${x};
    border-radius: ${J};
    box-shadow: ${W};
    padding: 16px;
    margin-bottom: 22px;
`;s.CardHead=d.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`;s.CardTitle=d.h2`
    margin: 0;
    font-size: 18px;
`;s.Table=d.table`
    width: 100%;
    border-collapse: collapse;
    th,
    td {
        border-bottom: 1px solid ${x};
        padding: 8px;
        font-size: 14px;
    }
    th {
        text-align: left;
        color: ${f};
        font-weight: 600;
    }
    .num {
        text-align: right;
    }
    input,
    select {
        width: 100%;
        background: #101010;
        color: ${b};
        border: 1px solid ${x};
        border-radius: 10px;
        padding: 8px 10px;
        outline: none;
    }
`;s.IconBtn=d.button`
    border: 1px solid ${x};
    background: transparent;
    color: ${b};
    border-radius: 8px;
    padding: 4px 8px;
    cursor: pointer;
    &:hover {
        border-color: ${M};
        color: #fff;
    }
`;s.Totals=d.div`
    margin-top: 12px;
    display: grid;
    gap: 12px;
    grid-template-columns: 1fr auto;
    @media (max-width: 840px) {
        grid-template-columns: 1fr;
    }

    .billdisc {
        label {
            color: ${f};
            font-size: 13px;
            display: block;
            margin-bottom: 6px;
        }
        .row {
            display: flex;
            gap: 8px;
        }
        select,
        input {
            height: 42px;
            background: #101010;
            color: ${b};
            border: 1px solid ${x};
            border-radius: 10px;
            padding: 0 10px;
        }
        input {
            width: 140px;
        }
    }

    .sums {
        display: grid;
        gap: 6px;
        min-width: 260px;
        div {
            display: flex;
            justify-content: space-between;
            gap: 12px;
        }
        .grand {
            font-size: 18px;
            font-weight: 700;
        }
    }
`;s.NoteBox=d.textarea`
    margin-top: 12px;
    width: 100%;
    min-height: 70px;
    resize: vertical;
    background: #101010;
    color: ${b};
    border: 1px solid ${x};
    border-radius: 10px;
    padding: 10px;
`;s.H2=d.h2`
    margin: 18px 0 8px;
    font-size: 18px;
`;s.History=d.div`
    display: grid;
    gap: 10px;
`;s.Empty=d.div`
    border: 1px dashed ${x};
    border-radius: 12px;
    padding: 18px;
    color: ${f};
    text-align: center;
`;s.HItem=d.div`
    display: grid;
    grid-template-columns: 1fr auto auto;
    gap: 12px;
    align-items: center;
    border: 1px solid ${x};
    border-radius: 12px;
    padding: 10px 12px;
    background: ${L};
    .muted {
        color: ${f};
        font-size: 13px;
    }
    .row {
        display: flex;
        gap: 8px;
    }
    @media (max-width: 720px) {
        grid-template-columns: 1fr;
    }
`;s.Modal=d.div`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.55);
    display: grid;
    place-items: center;
    z-index: 1000;
`;s.Dialog=d.div`
    width: min(720px, 96vw);
    max-height: 90vh;
    overflow: auto;
    background: #0c0c0c;
    border: 1px solid ${x};
    border-radius: 16px;
`;s.DialogHead=d.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 14px;
    border-bottom: 1px solid ${x};
    h3 {
        margin: 0;
        font-size: 16px;
    }
    button {
        background: transparent;
        color: ${b};
        border: 0;
        font-size: 18px;
        cursor: pointer;
    }
`;s.Form=d.form`
    padding: 14px;
    display: grid;
    gap: 12px;
    label {
        display: grid;
        gap: 6px;
        font-size: 13px;
    }
    input,
    textarea,
    select {
        background: #101010;
        color: ${b};
        border: 1px solid ${x};
        border-radius: 10px;
        padding: 8px 10px;
        outline: none;
    }
`;s.Grid2=d.div`
    display: grid;
    gap: 10px;
    grid-template-columns: 1fr 1fr;
    @media (max-width: 640px) {
        grid-template-columns: 1fr;
    }
`;s.DialogFoot=d.div`
    display: flex;
    gap: 10px;
    justify-content: flex-end;
    padding: 12px 14px;
    border-top: 1px solid ${x};
`;const j={DRAFT:"sb_draft",SETTINGS:"sb_settings",HISTORY:"sb_history"},v={INR:{code:"INR",symbol:"₹",locale:"en-IN"},USD:{code:"USD",symbol:"$",locale:"en-US"}},w=(r,o="INR")=>{const a=v[o]||v.INR,l=Number.isFinite(+r)?+r:0;return new Intl.NumberFormat(a.locale,{style:"currency",currency:a.code,minimumFractionDigits:2,maximumFractionDigits:2}).format(l)},H={storeName:"Your Store",address:"Address line • Phone",phone:"",series:"SB",nextNumber:1,currency:"INR"},R=()=>({name:"",price:"",qty:"1",discType:"%",discValue:""}),T=()=>({id:"DRAFT",createdAt:new Date().toISOString(),items:[R()],billDiscType:"%",billDiscValue:"",note:""}),k=r=>new Date(r).toLocaleString("en-GB",{month:"short",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}).replace(",","")+" hrs",C=(r,o)=>{try{return JSON.parse(localStorage.getItem(r)||"null")??o}catch{return o}},I=(r,o)=>localStorage.setItem(r,JSON.stringify(o));function N(r=""){return r.replace(/[&<>"']/g,o=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[o])}function B(r){const o=+r.price||0,a=+r.qty||0,l=o*a,u=+r.discValue||0,h=r.discType==="%"?l*u/100:u,m=Math.max(0,l-Math.min(h,l));return{base:l,disc:Math.min(h,l),total:m}}function D(r){const a=r.items.map(B).reduce((y,p)=>y+p.total,0),l=+r.billDiscValue||0,u=r.billDiscType==="%"?a*l/100:l,h=Math.min(u,a),m=Math.max(0,a-h);return{subTotal:A(a),billDiscAmt:A(h),grand:A(m)}}const A=r=>Math.round((+r||0)*100)/100;function z({draft:r,settings:o,totals:a}){const l=v[o.currency]||v.INR,u=p=>new Intl.NumberFormat(l.locale,{style:"currency",currency:l.code,minimumFractionDigits:2,maximumFractionDigits:2}).format(Number.isFinite(+p)?+p:0),h=r.items.filter(p=>(p.name||"").trim()).map(p=>{const S=B(p);return`
        <tr>
          <td>${N(p.name)}</td>
          <td style="text-align:right">${u(+p.price||0)}</td>
          <td style="text-align:right">${+p.qty||0}</td>
          <td style="text-align:right">${p.discType}${+p.discValue||0}</td>
          <td style="text-align:right">${u(S.total)}</td>
        </tr>`}).join(""),m=r.id==="DRAFT"?"DRAFT":`${o.series}-${String(r.number).padStart(4,"0")}`;return`<!doctype html>
<html>
<head><meta charset="utf-8"/><title>Bill ${m}</title><style>
  @page { size: A5; margin: 10mm; }
  * { box-sizing: border-box; font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Arial }
  h2,h3 { margin: 0; }
  table { width: 100%; border-collapse: collapse; margin-top: 6px; }
  th, td { padding: 6px; border-bottom: 1px solid #ddd; font-size: 12px; }
  tfoot td { border: 0; }
  .meta { display:flex; justify-content:space-between; font-size:12px; margin:8px 0; }
  .muted { color:#555; font-size:12px; }
  .tot { font-weight:700 }
  </style></head>
<body>
  <h2>${N(o.storeName||"Your Store")}</h2>
  <div class="muted">${N(o.address||"")}</div>
  <div class="muted">${N(o.phone||"")}</div>
  <hr/>
  <div class="meta">
    <div><strong>Bill No:</strong> ${m}</div>
    <div><strong>Date:</strong> ${k(r.createdAt)}</div>
  </div>

  <table>
    <thead>
      <tr>
        <th style="text-align:left">Item</th>
        <th style="text-align:right">Price</th>
        <th style="text-align:right">Qty</th>
        <th style="text-align:right">Disc</th>
        <th style="text-align:right">Line Total</th>
      </tr>
    </thead>
    <tbody>${h||'<tr><td colspan="5" class="muted">No items</td></tr>'}</tbody>
    <tfoot>
      <tr><td colspan="4" style="text-align:right">Sub-total</td><td style="text-align:right">${u(a.subTotal)}</td></tr>
      <tr><td colspan="4" style="text-align:right">Bill Discount</td><td style="text-align:right">${u(a.billDiscAmt)}</td></tr>
      <tr><td colspan="4" class="tot" style="text-align:right">Grand Total</td><td class="tot" style="text-align:right">${u(a.grand)}</td></tr>
    </tfoot>
  </table>

  ${r.note?`<div class="muted" style="margin-top:8px"><strong>Note:</strong> ${N(r.note)}</div>`:""}
  <p class="muted" style="text-align:center;margin-top:12px">Thank you!</p>
  <script>window.print();<\/script>
</body></html>`}function X(){const[r,o]=g.useState(()=>C(j.SETTINGS,H)),[a,l]=g.useState(()=>C(j.DRAFT,T())),[u,h]=g.useState(()=>C(j.HISTORY,[])),[m,y]=g.useState(!1);g.useEffect(()=>I(j.SETTINGS,r),[r]),g.useEffect(()=>I(j.DRAFT,a),[a]),g.useEffect(()=>I(j.HISTORY,u),[u]);const p=g.useMemo(()=>D(a),[a]);function S(t){const n=(t.name||"").trim()!=="",c=(+t.price||0)>0,i=(t.qty??"")!==""&&+t.qty!=1,F=(+t.discValue||0)>0||t.discType&&t.discType!=="%";return n||c||i||F}const P=t=>l(n=>{const c=n.items[t];if(S(c)&&!confirm("This row has data. Delete it?"))return n;const i=n.items.slice();return i.splice(t,1),{...n,items:i.length?i:[R()]}}),V=()=>l(t=>({...t,items:[...t.items,R()]})),$=(t,n)=>l(c=>{const i=c.items.slice();return i[t]={...i[t],...n},{...c,items:i}}),E=()=>{confirm("Start a new bill? Unsaved changes will be cleared.")&&l(T())},q=()=>{confirm("Clear current draft?")&&l(t=>({...T(),createdAt:t.createdAt}))},U=()=>{let t=a;if(a.id==="DRAFT"){const n=r.nextNumber||1,c=`${r.series}-${String(n).padStart(4,"0")}`;t={...a,id:c,number:n},o(i=>({...i,nextNumber:n+1}))}t={...t,createdAt:a.createdAt||new Date().toISOString()},h(n=>{const c=n.findIndex(i=>i.id===t.id);if(c>=0){const i=n.slice();return i[c]={...t,totals:D(t)},i}return[{...t,totals:D(t)},...n]}),l(t),alert("Bill saved.")},G=()=>{const t=z({draft:a,settings:r,totals:p}),n=window.open("","_blank","width=720,height=900");if(!n){alert("Popup blocked. Allow popups to print.");return}n.document.open(),n.document.write(t),n.document.close(),n.focus()},O=t=>{const n=u.find(c=>c.id===t);n&&(l({id:n.id,number:n.number,createdAt:n.createdAt,items:n.items,billDiscType:n.billDiscType,billDiscValue:n.billDiscValue,note:n.note||""}),window.scrollTo({top:0,behavior:"smooth"}))},Y=t=>{confirm(`Delete ${t}?`)&&h(n=>n.filter(c=>c.id!==t))},_=(v[r.currency]||v.INR).symbol;return e.jsxs(s.Wrapper,{children:[e.jsxs(s.Header,{children:[e.jsxs("div",{children:[e.jsx(s.Title,{children:r.storeName||"Your Store"}),e.jsx(s.Subtitle,{children:r.address||"Address line • Phone"})]}),e.jsxs(s.Actions,{children:[e.jsx(s.Button,{onClick:E,children:"New"}),e.jsx(s.Button,{onClick:U,children:"Save"}),e.jsx(s.Button,{onClick:G,$variant:"ghost",children:"Print"}),e.jsx(s.Button,{onClick:q,$variant:"danger",children:"Clear"}),e.jsx(s.Button,{onClick:()=>y(!0),$variant:"ghost",children:"Settings"})]})]}),e.jsxs(s.MetaRow,{children:[e.jsxs("div",{children:[e.jsx("strong",{children:"Bill No:"})," ",a.id==="DRAFT"?"DRAFT":`${r.series}-${String(a.number).padStart(4,"0")}`]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Date/Time:"})," ",k(a.createdAt)]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Currency:"})," ",_," ",r.currency]})]}),e.jsxs(s.Card,{children:[e.jsxs(s.CardHead,{children:[e.jsx(s.CardTitle,{children:"Items"}),e.jsx(s.Button,{onClick:V,$variant:"ghost",children:"+ Add Row"})]}),e.jsxs(s.Table,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Item Name"}),e.jsx("th",{className:"num",children:"Price"}),e.jsx("th",{className:"num",children:"Qty"}),e.jsx("th",{className:"num",children:"Disc Type"}),e.jsx("th",{className:"num",children:"Disc Value"}),e.jsx("th",{className:"num",children:"Line Total"}),e.jsx("th",{})]})}),e.jsx("tbody",{children:a.items.map((t,n)=>{const c=B(t);return e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("input",{value:t.name,placeholder:"Item name",onChange:i=>$(n,{name:i.target.value})})}),e.jsx("td",{className:"num",children:e.jsx("input",{type:"number",value:t.price,onChange:i=>$(n,{price:i.target.value})})}),e.jsx("td",{className:"num",children:e.jsx("input",{type:"number",value:t.qty,onChange:i=>$(n,{qty:i.target.value})})}),e.jsx("td",{className:"num",children:e.jsxs("select",{value:t.discType,onChange:i=>$(n,{discType:i.target.value}),children:[e.jsx("option",{value:"%",children:"%"}),e.jsx("option",{value:"₹",children:"₹"}),e.jsx("option",{value:"$",children:"$"})]})}),e.jsx("td",{className:"num",children:e.jsx("input",{type:"number",value:t.discValue,onChange:i=>$(n,{discValue:i.target.value})})}),e.jsx("td",{className:"num",children:w(c.total,r.currency)}),e.jsx("td",{className:"num",children:e.jsx(s.IconBtn,{onClick:()=>P(n),title:"Remove",children:"✕"})})]},n)})})]}),e.jsxs(s.Totals,{children:[e.jsxs("div",{className:"billdisc",children:[e.jsx("label",{children:"Bill Discount"}),e.jsxs("div",{className:"row",children:[e.jsxs("select",{value:a.billDiscType,onChange:t=>l(n=>({...n,billDiscType:t.target.value})),children:[e.jsx("option",{value:"%",children:"%"}),e.jsx("option",{value:"₹",children:"₹"}),e.jsx("option",{value:"$",children:"$"})]}),e.jsx("input",{type:"number",value:a.billDiscValue,onChange:t=>l(n=>({...n,billDiscValue:t.target.value}))})]})]}),e.jsxs("div",{className:"sums",children:[e.jsxs("div",{children:[e.jsx("span",{children:"Sub-total"}),e.jsx("strong",{children:w(p.subTotal,r.currency)})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Bill Discount"}),e.jsx("strong",{children:w(p.billDiscAmt,r.currency)})]}),e.jsxs("div",{className:"grand",children:[e.jsx("span",{children:"Grand Total"}),e.jsx("strong",{children:w(p.grand,r.currency)})]})]})]}),e.jsx(s.NoteBox,{placeholder:"Note",value:a.note,onChange:t=>l(n=>({...n,note:t.target.value}))})]}),e.jsx(s.H2,{children:"Saved Bills"}),e.jsxs(s.History,{children:[u.length===0&&e.jsx(s.Empty,{children:"No saved bills yet."}),u.map(t=>{var n;return e.jsxs(s.HItem,{children:[e.jsxs("div",{children:[e.jsx("strong",{children:t.id}),e.jsx("div",{className:"muted",children:k(t.createdAt)})]}),e.jsx("div",{className:"muted",children:w(((n=t.totals)==null?void 0:n.grand)||0,r.currency)}),e.jsxs("div",{className:"row",children:[e.jsx(s.Button,{$variant:"ghost",onClick:()=>O(t.id),children:"Open"}),e.jsx(s.Button,{$variant:"ghost",onClick:()=>{const c=z({draft:t,settings:r,totals:t.totals||D(t)}),i=window.open("","_blank","width=720,height=900");if(!i)return alert("Popup blocked");i.document.open(),i.document.write(c),i.document.close(),i.focus()},children:"Print"}),e.jsx(s.Button,{$variant:"danger",onClick:()=>Y(t.id),children:"Delete"})]})]},t.id)})]}),m&&e.jsx(s.Modal,{onMouseDown:t=>t.target===t.currentTarget&&y(!1),children:e.jsxs(s.Dialog,{onMouseDown:t=>t.stopPropagation(),children:[e.jsxs(s.DialogHead,{children:[e.jsx("h3",{children:"Store Settings"}),e.jsx("button",{onClick:()=>y(!1),"aria-label":"Close",children:"✕"})]}),e.jsxs(s.Form,{onSubmit:t=>{t.preventDefault(),y(!1)},children:[e.jsxs("label",{children:[e.jsx("span",{children:"Store Name"}),e.jsx("input",{value:r.storeName,onChange:t=>o(n=>({...n,storeName:t.target.value}))})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Address"}),e.jsx("textarea",{rows:2,value:r.address,onChange:t=>o(n=>({...n,address:t.target.value}))})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Phone"}),e.jsx("input",{value:r.phone,onChange:t=>o(n=>({...n,phone:t.target.value}))})]}),e.jsxs(s.Grid2,{children:[e.jsxs("label",{children:[e.jsx("span",{children:"Bill Series"}),e.jsx("input",{value:r.series,onChange:t=>o(n=>({...n,series:t.target.value.toUpperCase().slice(0,6)}))})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Next Number"}),e.jsx("input",{type:"number",min:1,value:r.nextNumber,onChange:t=>o(n=>({...n,nextNumber:Math.max(1,+t.target.value||1)}))})]})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Currency"}),e.jsxs("select",{value:r.currency,onChange:t=>o(n=>({...n,currency:t.target.value})),children:[e.jsx("option",{value:"INR",children:"₹ INR"}),e.jsx("option",{value:"USD",children:"$ USD"})]})]}),e.jsxs(s.DialogFoot,{children:[e.jsx(s.Button,{type:"submit",children:"Save"}),e.jsx(s.Button,{$variant:"ghost",type:"button",onClick:()=>o(H),children:"Reset Defaults"})]})]})]})})]})}export{X as default};
