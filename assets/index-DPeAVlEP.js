import{f as q,d as l,r as m,j as e}from"./index-C6z-DUNn.js";const N="var(--card, #111)",$="var(--text, #e9e9e9)",k="var(--muted, #b7b7b7)",v="var(--border, #222)",Y="var(--accent, #22c55e)",W="var(--danger, #ef4444)",X="var(--radius, 16px)",s={};s.PrintStyles=q`
  /* Hide the print container on screen, show only in print */
  #printArea { display: none; }
  @media print {
    /* Hide everything by default */
    body * { visibility: hidden; }
    /* Show the ticket only */
    #printArea, #printArea * {
      visibility: visible;
      display: block;
    }
    #printArea {
      position: absolute;
      inset: 0;
      margin: 0;
      padding: 24px;
      background: #fff;
      color: #000;
    }
  }
`;s.Wrapper=l.div`
    max-width: var(--maxw, 1200px);
    margin: 0 auto;
    padding: 24px;
    color: ${$};
`;s.Header=l.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 16px;
`;s.Title=l.h1`
    margin: 0;
    font-size: 22px;
    letter-spacing: 0.3px;
`;s.Subtitle=l.div`
    color: ${k};
    font-size: 13px;
`;s.Actions=l.div`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    align-items: center;
`;s.Button=l.button`
    border: 1px solid ${v};
    background: ${n=>n.$variant==="danger"?W:n.$variant==="ghost"?"transparent":N};
    color: ${$};
    padding: ${n=>n.$compact?"6px 10px":"8px 14px"};
    border-radius: 10px;
    cursor: pointer;
    opacity: ${n=>n.$active?1:.9};
    outline: none;
    &:hover {
        opacity: 1;
        border-color: ${Y};
    }
`;s.FileLabel=l.label`
    border: 1px dashed ${v};
    padding: 8px 12px;
    border-radius: 10px;
    cursor: pointer;
    display: inline-flex;
    gap: 8px;
    align-items: center;
    input {
        display: none;
    }
`;s.Toolbar=l.div`
    display: flex;
    gap: 12px;
    align-items: center;
    margin: 8px 0 16px;
`;s.Search=l.input`
    flex: 1;
    background: ${N};
    color: ${$};
    border: 1px solid ${v};
    border-radius: 10px;
    padding: 10px 12px;
    outline: none;
`;s.Board=l.div`
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(4, minmax(220px, 1fr));
    @media (max-width: 1100px) {
        grid-template-columns: repeat(2, minmax(220px, 1fr));
    }
    @media (max-width: 640px) {
        grid-template-columns: 1fr;
    }
`;s.Column=l.section`
    border: 1px solid ${v};
    border-radius: ${X};
    overflow: hidden;
    background: rgba(255, 255, 255, 0.02);
`;s.ColumnHead=l.div`
    padding: 10px 12px;
    border-bottom: 1px solid ${v};
    font-weight: 600;
    background: ${N};
`;s.ColBody=l.div`
    padding: 12px;
    display: grid;
    gap: 10px;
`;s.Empty=l.div`
    color: ${k};
    text-align: center;
    padding: 24px 8px;
    border: 1px dashed ${v};
    border-radius: 12px;
`;s.Card=l.article`
    border: 1px solid ${v};
    border-radius: 12px;
    padding: 10px 12px;
    background: ${N};
    cursor: pointer;
    .row {
        display: flex;
        align-items: center;
        gap: 8px;
    }
    .between {
        justify-content: space-between;
    }
    .muted {
        color: ${k};
        font-size: 12px;
        margin: 2px 0 6px;
    }
    .badge {
        font-size: 11px;
        padding: 2px 8px;
        border-radius: 999px;
        border: 1px solid ${v};
    }
`;s.Modal=l.div`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    display: grid;
    place-items: center;
    z-index: 1000;
`;s.SideModal=l(s.Modal)`
    place-items: stretch end;
`;s.Dialog=l.div`
    width: min(880px, 96vw);
    max-height: 90vh;
    overflow: auto;
    background: #0c0c0c;
    border: 1px solid ${v};
    border-radius: 16px;
`;s.SidePanel=l(s.Dialog)`
    width: min(720px, 95vw);
    height: 100vh;
    max-height: 100vh;
    border-radius: 0;
`;s.DialogHead=l.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 14px;
    border-bottom: 1px solid ${v};
    h3 {
        margin: 0;
        font-size: 16px;
    }
    button {
        background: transparent;
        color: ${$};
        border: 0;
        font-size: 18px;
        cursor: pointer;
    }
`;s.Form=l.form`
    padding: 14px;
    display: grid;
    gap: 12px;
    label {
        display: grid;
        gap: 6px;
        font-size: 13px;
    }
    input,
    textarea {
        background: ${N};
        color: ${$};
        border: 1px solid ${v};
        border-radius: 10px;
        padding: 8px 10px;
        outline: none;
    }
    .full {
        grid-column: 1 / -1;
    }
`;s.Grid=l.div`
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(2, minmax(180px, 1fr));
    @media (max-width: 720px) {
        grid-template-columns: 1fr;
    }
    label {
        display: flex;

        span {
            width: 100px;
        }
        input {
            padding: 0 5px;
        }
    }
`;s.DialogFoot=l.div`
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: flex-end;
    padding: 12px 14px;
    border-top: 1px solid ${v};
`;s.Detail=l.div`
    padding: 12px 14px;
    .meta {
        display: grid;
        gap: 6px;
        margin-bottom: 10px;
        color: ${k};
        font-size: 13px;
    }
`;s.MoveRow=l.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 8px 0 12px;
    span {
        color: ${k};
        font-size: 13px;
    }
`;s.PrintContainer=l.div`
    /* hidden on screen; revealed by @media print in PrintStyles */
    display: none;
    background: #fff;
    color: #000;
    padding: 6px 8px;
    h2 {
        margin: 0 0 6px;
    }
    .row {
        display: flex;
        justify-content: space-between;
    }
    .muted {
        color: #444;
        font-size: 12px;
    }
    .total {
        font-weight: 700;
    }
    .balance {
        font-weight: 700;
    }
`;s.FooterNote=l.div`
    margin-top: 10px;
    font-size: 12px;
    text-align: center;
    color: #333;
`;const S={JOBS:"sjc_jobs",SHOP:"sjc_shop",COUNTER_PREFIX:"sjc_counter_"},D=[{key:"new",label:"New"},{key:"inprogress",label:"In-Progress"},{key:"ready",label:"Ready"},{key:"picked",label:"Picked-Up"}],K={id:"",createdAt:"",status:"new",customerName:"",phone:"",itemType:"",brand:"",model:"",serial:"",issue:"",accessories:"",estimate:"",advance:"",tax:"",total:0,balance:0,promisedAt:"",notes:""},T={name:"",phone:"",address:""},I=(n=new Date)=>`${n.getFullYear()}${String(n.getMonth()+1).padStart(2,"0")}${String(n.getDate()).padStart(2,"0")}`,f=n=>new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR"}).format(Number.isFinite(+n)?+n:0);function C(n,p,a){const u=+n||0,o=+p||0,b=+a||0,d=u+u*b/100,h=d-o;return{total:d,balance:h}}function J(n,p){try{return JSON.parse(localStorage.getItem(n)||"null")??p}catch{return p}}function M(n,p){localStorage.setItem(n,JSON.stringify(p))}function ne(){const[n,p]=m.useState(()=>J(S.JOBS,[])),[a,u]=m.useState(()=>J(S.SHOP,T)),[o,b]=m.useState(""),[d,h]=m.useState(!1),[x,y]=m.useState(!1),[c,w]=m.useState(null),A=m.useRef(null);m.useEffect(()=>M(S.JOBS,n),[n]),m.useEffect(()=>M(S.SHOP,a),[a]);const O=m.useMemo(()=>{if(!o.trim())return n;const t=o.toLowerCase();return n.filter(i=>[i.id,i.customerName,i.phone,i.itemType,i.brand,i.model,i.serial,i.issue,i.notes].join(" ").toLowerCase().includes(t))},[n,o]);function R(){const t=I(),i=S.COUNTER_PREFIX+t,g=+(localStorage.getItem(i)||"0")+1;return localStorage.setItem(i,String(g)),`${t}-${String(g).padStart(3,"0")}`}function E(t){const i=R(),r=new Date().toISOString(),{total:g,balance:j}=C(t.estimate,t.advance,t.tax),B={...K,...t,id:i,createdAt:r,total:g,balance:j};p(G=>[B,...G]),h(!1),w(B)}function P(t){p(i=>i.map(r=>r.id===t.id?{...r,...t}:r))}function F(t){confirm("Delete this job permanently?")&&(p(i=>i.filter(r=>r.id!==t)),w(null))}function L(t,i){P({id:t,status:i})}function z(t){var g;const i=(g=t.target.files)==null?void 0:g[0];if(!i)return;const r=new FileReader;r.onload=()=>{try{const j=JSON.parse(r.result);if(!Array.isArray(j))throw new Error("Invalid file");if(!confirm("Replace existing jobs with imported data?"))return;p(j)}catch{alert("Invalid JSON file.")}},r.readAsText(i),t.target.value=""}function H(){const t=new Blob([JSON.stringify(n,null,2)],{type:"application/json"}),i=document.createElement("a");i.href=URL.createObjectURL(t),i.download=`service-jobs-${I()}.json`,i.click(),URL.revokeObjectURL(i.href)}function U(){confirm("This will clear ALL jobs and shop settings. Continue?")&&(p([]),u(T))}function _(){const t=A.current;if(!t){alert("Nothing to print.");return}const i=t.innerHTML,g=`<!doctype html>
  <html>
    <head>
      <meta charset="utf-8" />
      <title>Job #${(c==null?void 0:c.id)||""}</title>
      <style>
    @page { size: A5; margin: 10mm; }
    body { font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; margin: 0; padding: 12px; color: #000; }
    h2 { margin: 0 0 6px; font-size: 18px; }
    .muted { color: #444; font-size: 12px; }
    .row { display: flex; justify-content: space-between; gap: 12px; }
    hr { border: 0; border-top: 1px solid #000; margin: 8px 0; }
    .total, .balance { font-weight: 700; }
    .balance { margin-top: 4px; }
  </style>
    </head>
    <body>${i}</body>
  </html>`,j=window.open("","_blank","width=720,height=900");if(!j){alert("Popup blocked. Please allow popups to print.");return}j.document.open(),j.document.write(g),j.document.close(),j.focus(),j.print(),j.close()}return e.jsxs(s.Wrapper,{children:[e.jsx(s.PrintStyles,{}),e.jsxs(s.Header,{children:[e.jsxs("div",{children:[e.jsx(s.Title,{children:"Service Job Card"}),e.jsx(s.Subtitle,{children:"Offline • LocalStorage"})]}),e.jsxs(s.Actions,{children:[e.jsx(s.Button,{onClick:()=>h(!0),children:"New Job"}),e.jsx(s.Button,{onClick:()=>y(!0),$variant:"ghost",children:"Settings"}),e.jsxs(s.FileLabel,{children:["Import",e.jsx("input",{type:"file",accept:"application/json",onChange:z})]}),e.jsx(s.Button,{onClick:H,$variant:"ghost",children:"Export"}),e.jsx(s.Button,{onClick:U,$variant:"danger",children:"Reset All"})]})]}),e.jsx(s.Toolbar,{children:e.jsx(s.Search,{placeholder:"Search by ID, name, model, issue...",value:o,onChange:t=>b(t.target.value)})}),e.jsx(s.Board,{children:D.map(t=>{const i=O.filter(r=>r.status===t.key);return e.jsxs(s.Column,{children:[e.jsx(s.ColumnHead,{children:t.label}),e.jsxs(s.ColBody,{children:[i.length===0&&e.jsx(s.Empty,{children:"Nothing here yet."}),i.map(r=>e.jsxs(s.Card,{onClick:()=>w(r),children:[e.jsxs("div",{className:"row between",children:[e.jsxs("strong",{children:["#",r.id]}),e.jsx("span",{className:`badge ${r.status}`,children:t.label})]}),e.jsxs("div",{className:"muted",children:[r.customerName," • ",r.phone||"—"]}),e.jsxs("div",{className:"muted",children:[r.itemType||"Item"," ",r.brand?`• ${r.brand}`:""," ",r.model?`• ${r.model}`:""]}),e.jsxs("div",{className:"row between",children:[e.jsxs("span",{children:["Total: ",f(r.total)]}),e.jsxs("span",{children:["Balance: ",f(r.balance)]})]})]},r.id))]})]},t.key)})}),d&&e.jsx(Q,{onClose:()=>h(!1),onCreate:E}),x&&e.jsx(V,{value:a,onClose:()=>y(!1),onSave:t=>u(t)}),c&&e.jsx(Z,{job:c,onClose:()=>w(null),onUpdate:t=>{const{total:i,balance:r}=C(t.estimate??c.estimate,t.advance??c.advance,t.tax??c.tax),g={...c,...t,total:i,balance:r};w(g),P(g)},onDelete:F,onMove:t=>L(c.id,t),onPrint:_,printRef:A,shop:a})]})}function Q({onClose:n,onCreate:p}){const[a,u]=m.useState({customerName:"",phone:"",itemType:"",brand:"",model:"",serial:"",issue:"",accessories:"",estimate:"",advance:"",tax:"",promisedAt:"",notes:""});m.useMemo(()=>C(a.estimate,a.advance,a.tax),[a.estimate,a.advance,a.tax]);function o(d){const{name:h,value:x}=d.target;u(y=>({...y,[h]:x}))}function b(d){if(d.preventDefault(),!a.customerName.trim()){alert("Customer name is required.");return}p(a)}return e.jsx(s.Modal,{onMouseDown:d=>d.target===d.currentTarget&&n(),children:e.jsxs(s.Dialog,{onMouseDown:d=>d.stopPropagation(),children:[e.jsxs(s.DialogHead,{children:[e.jsx("h3",{children:"New Job"}),e.jsx("button",{onClick:n,"aria-label":"Close",children:"✕"})]}),e.jsxs(s.Form,{onSubmit:b,children:[e.jsxs(s.Grid,{children:[e.jsxs("label",{children:[e.jsx("span",{children:"Customer Name"}),e.jsx("input",{name:"customerName",value:a.customerName,onChange:o})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Phone"}),e.jsx("input",{name:"phone",value:a.phone,onChange:o})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Item Type"}),e.jsx("input",{name:"itemType",value:a.itemType,onChange:o})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Brand"}),e.jsx("input",{name:"brand",value:a.brand,onChange:o})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Model"}),e.jsx("input",{name:"model",value:a.model,onChange:o})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Serial No."}),e.jsx("input",{name:"serial",value:a.serial,onChange:o})]}),e.jsxs("label",{className:"full",children:[e.jsx("span",{children:"Issue / Problem"}),e.jsx("input",{name:"issue",value:a.issue,onChange:o})]}),e.jsxs("label",{className:"full",children:[e.jsx("span",{children:"Accessories (if any)"}),e.jsx("input",{name:"accessories",value:a.accessories,onChange:o})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Estimate (₹)"}),e.jsx("input",{name:"estimate",type:"number",value:a.estimate,onChange:o})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Advance (₹)"}),e.jsx("input",{name:"advance",type:"number",value:a.advance,onChange:o})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Tax %"}),e.jsx("input",{name:"tax",type:"number",value:a.tax,onChange:o})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Total (₹)"}),e.jsx("input",{value:f(C(a.estimate,a.advance,a.tax).total),readOnly:!0})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Balance (₹)"}),e.jsx("input",{value:f(C(a.estimate,a.advance,a.tax).balance),readOnly:!0})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Promised Date/Time"}),e.jsx("input",{name:"promisedAt",type:"datetime-local",value:a.promisedAt,onChange:o})]}),e.jsxs("label",{className:"full",children:[e.jsx("span",{children:"Notes"}),e.jsx("input",{name:"notes",value:a.notes,onChange:o})]})]}),e.jsxs(s.DialogFoot,{children:[e.jsx(s.Button,{type:"submit",children:"Create & Add"}),e.jsx(s.Button,{type:"button",onClick:n,$variant:"ghost",children:"Close"})]})]})]})})}function V({value:n,onSave:p,onClose:a}){const[u,o]=m.useState(n);function b(d){const{name:h,value:x}=d.target;o(y=>({...y,[h]:x}))}return e.jsx(s.Modal,{onMouseDown:d=>d.target===d.currentTarget&&a(),children:e.jsxs(s.Dialog,{onMouseDown:d=>d.stopPropagation(),children:[e.jsxs(s.DialogHead,{children:[e.jsx("h3",{children:"Shop Settings"}),e.jsx("button",{onClick:a,"aria-label":"Close",children:"✕"})]}),e.jsxs(s.Form,{onSubmit:d=>{d.preventDefault(),p(u),a()},children:[e.jsxs("label",{children:[e.jsx("span",{children:"Shop Name"}),e.jsx("input",{name:"name",value:u.name,onChange:b})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Phone"}),e.jsx("input",{name:"phone",value:u.phone,onChange:b})]}),e.jsxs("label",{className:"full",children:[e.jsx("span",{children:"Address"}),e.jsx("textarea",{name:"address",rows:3,value:u.address,onChange:b})]}),e.jsxs(s.DialogFoot,{children:[e.jsx(s.Button,{type:"submit",children:"Save Settings"}),e.jsx(s.Button,{type:"button",$variant:"ghost",onClick:()=>o(T),children:"Clear"})]})]})]})})}function Z({job:n,onClose:p,onUpdate:a,onDelete:u,onMove:o,onPrint:b,printRef:d,shop:h}){var y;function x(c){const{name:w,value:A}=c.target;a({[w]:A,id:n.id})}return e.jsx(s.SideModal,{onMouseDown:c=>c.target===c.currentTarget&&p(),children:e.jsxs(s.SidePanel,{onMouseDown:c=>c.stopPropagation(),children:[e.jsxs(s.DialogHead,{children:[e.jsx("h3",{children:"Job Detail"}),e.jsx("button",{onClick:p,"aria-label":"Close",children:"✕"})]}),e.jsxs(s.Detail,{children:[e.jsxs("div",{className:"meta",children:[e.jsxs("div",{children:[e.jsx("strong",{children:"ID:"})," #",n.id]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Status:"})," ",(y=D.find(c=>c.key===n.status))==null?void 0:y.label]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Created:"})," ",new Date(n.createdAt).toLocaleString()]})]}),e.jsxs(s.Grid,{children:[e.jsxs("label",{children:[e.jsx("span",{children:"Name"}),e.jsx("input",{name:"customerName",value:n.customerName,onChange:x})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Phone"}),e.jsx("input",{name:"phone",value:n.phone,onChange:x})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Type"}),e.jsx("input",{name:"itemType",value:n.itemType,onChange:x})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Brand"}),e.jsx("input",{name:"brand",value:n.brand,onChange:x})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Model"}),e.jsx("input",{name:"model",value:n.model,onChange:x})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Serial"}),e.jsx("input",{name:"serial",value:n.serial,onChange:x})]}),e.jsxs("label",{className:"full",children:[e.jsx("span",{children:"Issue"}),e.jsx("input",{name:"issue",value:n.issue,onChange:x})]}),e.jsxs("label",{className:"full",children:[e.jsx("span",{children:"Accessories"}),e.jsx("input",{name:"accessories",value:n.accessories,onChange:x})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Estimate (₹)"}),e.jsx("input",{name:"estimate",type:"number",value:n.estimate,onChange:x})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Advance (₹)"}),e.jsx("input",{name:"advance",type:"number",value:n.advance,onChange:x})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Tax %"}),e.jsx("input",{name:"tax",type:"number",value:n.tax,onChange:x})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Total (₹)"}),e.jsx("input",{value:f(n.total),readOnly:!0})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Balance (₹)"}),e.jsx("input",{value:f(n.balance),readOnly:!0})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Promised"}),e.jsx("input",{name:"promisedAt",type:"datetime-local",value:n.promisedAt||"",onChange:x})]}),e.jsxs("label",{className:"full",children:[e.jsx("span",{children:"Notes"}),e.jsx("input",{name:"notes",value:n.notes,onChange:x})]})]}),e.jsxs(s.MoveRow,{children:[e.jsx("span",{children:"Move:"}),D.map(c=>e.jsx(s.Button,{onClick:()=>o(c.key),$active:n.status===c.key,$compact:!0,children:c.label},c.key))]}),e.jsxs(s.DialogFoot,{children:[e.jsx(s.Button,{onClick:b,children:"Print Ticket"}),e.jsx(s.Button,{$variant:"danger",onClick:()=>u(n.id),children:"Delete"}),e.jsx(s.Button,{$variant:"ghost",onClick:p,children:"Close"})]})]}),e.jsxs(s.PrintContainer,{id:"printArea",ref:d,children:[e.jsx("h2",{children:h.name||"Your Shop"}),e.jsx("div",{className:"muted",children:h.address}),e.jsx("div",{className:"muted",children:h.phone}),e.jsx("hr",{}),e.jsxs("div",{className:"row between",children:[e.jsxs("div",{children:[e.jsx("strong",{children:"Job ID:"})," #",n.id]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Date:"})," ",new Date(n.createdAt).toLocaleString()]})]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Customer:"})," ",n.customerName," (",n.phone||"—",")"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Item:"})," ",n.itemType," ",n.brand&&`• ${n.brand}`," ",n.model&&`• ${n.model}`]}),n.serial&&e.jsxs("div",{children:[e.jsx("strong",{children:"Serial:"})," ",n.serial]}),n.issue&&e.jsxs("div",{children:[e.jsx("strong",{children:"Issue:"})," ",n.issue]}),n.accessories&&e.jsxs("div",{children:[e.jsx("strong",{children:"Accessories:"})," ",n.accessories]}),e.jsx("hr",{}),e.jsxs("div",{className:"row between",children:[e.jsx("div",{children:"Estimate"}),e.jsx("div",{children:f(n.estimate||0)})]}),e.jsxs("div",{className:"row between",children:[e.jsx("div",{children:"Tax (%)"}),e.jsxs("div",{children:[n.tax||0,"%"]})]}),e.jsxs("div",{className:"row between",children:[e.jsx("div",{children:"Advance"}),e.jsx("div",{children:f(n.advance||0)})]}),e.jsxs("div",{className:"row between total",children:[e.jsx("div",{children:"Total"}),e.jsx("div",{children:f(n.total)})]}),e.jsxs("div",{className:"row between balance",children:[e.jsx("div",{children:"Balance"}),e.jsx("div",{children:f(n.balance)})]}),n.promisedAt&&e.jsxs("div",{className:"muted",children:["Promised:"," ",new Date(n.promisedAt).toLocaleString()]}),n.notes&&e.jsxs("div",{children:[e.jsx("strong",{children:"Notes:"})," ",n.notes]}),e.jsx(s.FooterNote,{children:"Thank you for your business."})]})]})})}export{ne as default};
