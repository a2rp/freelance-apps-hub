import{d as s,r as x,j as e}from"./index-C6z-DUNn.js";const f="var(--text, #eaeaea)",$="var(--muted, #a8a8a8)",u="var(--border, #242424)",V="var(--accent, #22c55e)",R="var(--danger, #ef4444)",Z="var(--radius, 16px)",ee="var(--shadow, 0 8px 28px rgba(0,0,0,0.30))",r={};r.Wrapper=s.div`
    max-width: var(--maxw, 1100px);
    margin: 0 auto;
    padding: 24px 16px 32px;
    color: ${f};
`;r.Header=s.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    flex-wrap: wrap;
`;r.Title=s.h1`
    margin: 0;
    font-size: 22px;
    letter-spacing: 0.2px;
`;r.Subtitle=s.div`
    color: ${$};
    font-size: 13px;
`;r.Actions=s.div`
    display: flex;
    gap: 8px;
    align-items: center;
    flex-wrap: wrap;
`;r.Button=s.button`
    border: 1px solid ${u};
    background: ${o=>o.$variant==="danger"?"linear-gradient(180deg,#2a1111,#200f0f)":o.$variant==="ghost"?"transparent":"linear-gradient(180deg,#1a1a1a,#141414)"};
    color: ${f};
    padding: 8px 14px;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
        border-color: ${o=>o.$variant==="danger"?R:V};
    }
`;r.FileLabel=s.label`
    border: 1px dashed ${u};
    padding: 8px 12px;
    border-radius: 10px;
    cursor: pointer;
    display: inline-flex;
    gap: 8px;
    align-items: center;
    input {
        display: none;
    }
`;r.Toolbar=s.div`
    display: flex;
    gap: 10px;
    align-items: center;
    margin: 14px 0 10px;
    flex-wrap: wrap;
`;r.Search=s.input`
    flex: 1 1 280px;
    background: #0e0e0e;
    color: ${f};
    border: 1px solid ${u};
    border-radius: 10px;
    padding: 10px 12px;
    outline: none;
`;r.Select=s.select`
    height: 40px;
    background: #0e0e0e;
    color: ${f};
    border: 1px solid ${u};
    border-radius: 10px;
    padding: 0 10px;
    outline: none;
`;r.Stats=s.div`
    display: flex;
    gap: 16px;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 10px;
    .muted {
        color: ${$};
    }
    em {
        font-style: normal;
        color: ${f};
    }
`;r.Card=s.section`
    background: linear-gradient(180deg, #131313, #0f0f0f);
    border: 1px solid ${u};
    border-radius: ${Z};
    box-shadow: ${ee};
    padding: 12px;
`;r.Table=s.table`
    width: 100%;
    border-collapse: collapse;
    th,
    td {
        border-bottom: 1px solid ${u};
        padding: 10px;
        vertical-align: top;
    }
    th {
        color: ${$};
        text-align: left;
    }
    td.num {
        text-align: right;
    }
`;r.Empty=s.div`
    border: 1px dashed ${u};
    padding: 16px;
    border-radius: 12px;
    color: ${$};
    text-align: center;
`;r.TitleCell=s.div`
    cursor: pointer;
    .muted.small {
        font-size: 12px;
        color: ${$};
        margin-top: 4px;
    }
    &:hover strong {
        text-decoration: underline;
    }
`;r.Pill=s.span`
    display: inline-block;
    padding: 2px 8px;
    border-radius: 999px;
    border: 1px solid ${u};
    text-transform: capitalize;
    &[data-prio="high"] {
        color: #ffcaca;
        border-color: #5a1a1a;
        background: #2a1111;
    }
    &[data-prio="med"] {
        color: #fff2c2;
        border-color: #5a4b1a;
        background: #2a2911;
    }
    &[data-prio="low"] {
        color: #c8ffd6;
        border-color: #1a5a2a;
        background: #112a1b;
    }
`;r.InlineSelect=s.select`
    background: #0e0e0e;
    color: ${f};
    border: 1px solid ${u};
    border-radius: 10px;
    padding: 6px 8px;
    outline: none;
`;r.DueBadge=s.div`
    display: inline-block;
    margin-top: 6px;
    padding: 2px 8px;
    border-radius: 999px;
    font-size: 11px;
    border: 1px solid ${u};
    color: ${o=>o.$overdue?"#ffb3b3":o.$soon?"#ffe6b3":"#c8ffd6"};
    background: ${o=>o.$overdue?"#2a1111":o.$soon?"#2a2911":"#112a1b"};
`;r.Modal=s.div`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.55);
    display: grid;
    place-items: center;
    z-index: 1000;
`;r.Dialog=s.div`
    width: min(760px, 96vw);
    max-height: 90vh;
    overflow: auto;
    background: #0c0c0c;
    border: 1px solid ${u};
    border-radius: 16px;
`;r.DialogHead=s.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 14px;
    border-bottom: 1px solid ${u};
    h3 {
        margin: 0;
        font-size: 16px;
    }
    button {
        background: transparent;
        color: ${f};
        border: 0;
        font-size: 18px;
        cursor: pointer;
    }
`;r.Form=s.form`
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
        background: #0e0e0e;
        color: ${f};
        border: 1px solid ${u};
        border-radius: 10px;
        padding: 8px 10px;
        outline: none;
    }
    .full {
        grid-column: 1 / -1;
    }
`;r.Grid2=s.div`
    display: grid;
    gap: 10px;
    grid-template-columns: 1fr 1fr;
    @media (max-width: 640px) {
        grid-template-columns: 1fr;
    }
`;r.DialogFoot=s.div`
    display: flex;
    gap: 10px;
    justify-content: flex-end;
    padding: 12px 14px;
    border-top: 1px solid ${u};
`;r.IconBtn=s.button`
    border: 1px solid ${u};
    background: transparent;
    color: ${f};
    border-radius: 8px;
    padding: 4px 8px;
    cursor: pointer;
    margin-left: 6px;
    &:hover {
        border-color: ${R};
        color: #fff;
    }
`;const I={DATA:"ap_assignments",COUNTER_PREFIX:"ap_counter_"},C=[{key:"todo",label:"To-Do"},{key:"doing",label:"In-Progress"},{key:"done",label:"Done"}],F=[{key:"high",label:"High"},{key:"med",label:"Medium"},{key:"low",label:"Low"}],T={id:"",title:"",course:"",dueAt:"",priority:"med",status:"todo",estHours:"",notes:"",createdAt:""},B=(o=new Date)=>`${o.getFullYear()}${String(o.getMonth()+1).padStart(2,"0")}${String(o.getDate()).padStart(2,"0")}`,L=o=>{if(!o)return"—";const l=new Date(o);return isNaN(l)?o:l.toLocaleString([],{year:"numeric",month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit"})},te=o=>{if(!o)return null;const l=new Date,b=new Date(o);return Math.ceil((b-l)/(1e3*60*60*24))};function re(o,l){try{return JSON.parse(localStorage.getItem(o)||"null")??l}catch{return l}}function ne(o,l){localStorage.setItem(o,JSON.stringify(l))}function oe(){const o=B(),l=I.COUNTER_PREFIX+o,w=+(localStorage.getItem(l)||"0")+1;return localStorage.setItem(l,String(w)),`A${o}-${String(w).padStart(3,"0")}`}function se(){const[o,l]=x.useState(()=>re(I.DATA,[])),[b,w]=x.useState(""),[S,z]=x.useState("all"),[A,O]=x.useState("all"),[k,H]=x.useState("all"),[y,M]=x.useState({by:"dueAt",dir:"asc"}),[U,j]=x.useState(!1),[d,g]=x.useState(T);x.useEffect(()=>ne(I.DATA,o),[o]);const _=x.useMemo(()=>{const t=new Set(o.map(n=>n.course).filter(Boolean));return Array.from(t).sort()},[o]),N=x.useMemo(()=>{let t=o.slice();if(b.trim()){const n=b.toLowerCase();t=t.filter(i=>[i.id,i.title,i.course,i.notes].join(" ").toLowerCase().includes(n))}return S!=="all"&&(t=t.filter(n=>n.status===S)),A!=="all"&&(t=t.filter(n=>n.priority===A)),k!=="all"&&(t=t.filter(n=>n.course===k)),t.sort((n,i)=>{const a=y.dir==="asc"?1:-1;if(y.by==="dueAt")return(new Date(n.dueAt)-new Date(i.dueAt))*a;if(y.by==="priority"){const h={high:3,med:2,low:1};return(h[n.priority]-h[i.priority])*a}return n.id.localeCompare(i.id)*a}),t},[o,b,S,A,k,y]),v=x.useMemo(()=>{const t=o.length,n=o.filter(c=>c.status==="done").length,i=o.filter(c=>c.status==="todo").length,a=o.filter(c=>c.status==="doing").length,h=o.filter(c=>c.status!=="done"&&c.dueAt).sort((c,D)=>new Date(c.dueAt)-new Date(D.dueAt))[0];return{total:t,done:n,todo:i,doing:a,nextDue:h}},[o]);function q(){g({...T,id:"",createdAt:""}),j(!0)}function P(t){g(t),j(!0)}function J(){if(!d.title.trim()){alert("Title is required.");return}if(d.id)l(t=>t.map(n=>n.id===d.id?{...d}:n));else{const t=oe(),n=new Date().toISOString(),i={...T,...d,id:t,createdAt:n};l(a=>[i,...a])}j(!1)}function E(t){const n=o.find(a=>a.id===t),i=n?`
${n.title}`:"";confirm(`Delete this assignment?${i}`)&&l(a=>a.filter(h=>h.id!==t))}function G(t,n){l(i=>i.map(a=>a.id===t?{...a,status:n}:a))}function W(){const t=new Blob([JSON.stringify(o,null,2)],{type:"application/json"}),n=document.createElement("a");n.href=URL.createObjectURL(t),n.download=`assignments-${B()}.json`,n.click(),URL.revokeObjectURL(n.href)}function X(t){var a;const n=(a=t.target.files)==null?void 0:a[0];if(!n)return;const i=new FileReader;i.onload=()=>{try{const h=JSON.parse(i.result);if(!Array.isArray(h))throw new Error("Invalid file");if(!confirm("Replace existing assignments with imported data?"))return;l(h)}catch{alert("Invalid JSON file.")}},i.readAsText(n),t.target.value=""}function Y(){confirm("This will delete ALL assignments. Continue?")&&l([])}function K(){const t=p=>{if(!p)return"—";const m=new Date(p);return isNaN(m)?"—":m.toLocaleString("en-US",{month:"short",day:"2-digit",year:"numeric",hour:"numeric",minute:"2-digit",hour12:!0})},n=`
    @page { size: A4; margin: 12mm; }
    * { box-sizing: border-box; font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Arial; }
    h1,h2,h3 { margin:0; }
    .muted{color:#555}
    table{width:100%; border-collapse:collapse; margin-top:8px}
    th,td{border-bottom:1px solid #ddd; padding:6px; font-size:12px}
    th{text-align:left}
    .pill{display:inline-block; padding:2px 8px; border:1px solid #ccc; border-radius:999px; font-size:11px}
  `,i=o.slice().sort((p,m)=>new Date(p.dueAt)-new Date(m.dueAt)).map(p=>{var m;return`<tr>
        <td><strong>${D(p.title)}</strong><div class="muted">${D(p.course||"")}</div></td>
        <td>${t(p.dueAt)}</td>
        <td><span class="pill">${p.priority}</span></td>
        <td><span class="pill">${((m=C.find(Q=>Q.key===p.status))==null?void 0:m.label)||p.status}</span></td>
      </tr>`}).join(""),a=t(new Date),h=`<!doctype html>
<html><head><meta charset="utf-8"/><title>Assignments</title><style>${n}</style></head>
<body>
  <h2>Assignment Planner</h2>
  <div class="muted">Generated: ${a}</div>
  <table>
    <thead><tr><th>Title • Course</th><th>Due</th><th>Priority</th><th>Status</th></tr></thead>
    <tbody>${i||'<tr><td colspan="4" class="muted">No assignments</td></tr>'}</tbody>
  </table>
  <script>window.print()<\/script>
</body></html>`,c=window.open("","_blank","width=900,height=1100");if(!c)return alert("Popup blocked. Allow popups to print.");c.document.open(),c.document.write(h),c.document.close(),c.focus();function D(p=""){return p.replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[m])}}return e.jsxs(r.Wrapper,{children:[e.jsxs(r.Header,{children:[e.jsxs("div",{children:[e.jsx(r.Title,{children:"Assignment Planner"}),e.jsx(r.Subtitle,{children:"Organize coursework • autosave • quick print"})]}),e.jsxs(r.Actions,{children:[e.jsx(r.Button,{onClick:q,children:"New"}),e.jsxs(r.FileLabel,{children:["Import",e.jsx("input",{type:"file",accept:"application/json",onChange:X})]}),e.jsx(r.Button,{onClick:W,$variant:"ghost",children:"Export"}),e.jsx(r.Button,{onClick:K,$variant:"ghost",children:"Print"}),e.jsx(r.Button,{onClick:Y,$variant:"danger",children:"Reset All"})]})]}),e.jsxs(r.Toolbar,{children:[e.jsx(r.Search,{placeholder:"Search by title, course, notes…",value:b,onChange:t=>w(t.target.value)}),e.jsxs(r.Select,{value:S,onChange:t=>z(t.target.value),title:"Status",children:[e.jsx("option",{value:"all",children:"All Status"}),C.map(t=>e.jsx("option",{value:t.key,children:t.label},t.key))]}),e.jsxs(r.Select,{value:A,onChange:t=>O(t.target.value),title:"Priority",children:[e.jsx("option",{value:"all",children:"All Priority"}),F.map(t=>e.jsx("option",{value:t.key,children:t.label},t.key))]}),e.jsxs(r.Select,{value:k,onChange:t=>H(t.target.value),title:"Course",children:[e.jsx("option",{value:"all",children:"All Courses"}),_.map(t=>e.jsx("option",{value:t,children:t},t))]}),e.jsxs(r.Select,{value:`${y.by}:${y.dir}`,onChange:t=>{const[n,i]=t.target.value.split(":");M({by:n,dir:i})},children:[e.jsx("option",{value:"dueAt:asc",children:"Due ↑"}),e.jsx("option",{value:"dueAt:desc",children:"Due ↓"}),e.jsx("option",{value:"priority:desc",children:"Priority High→Low"}),e.jsx("option",{value:"priority:asc",children:"Priority Low→High"}),e.jsx("option",{value:"id:desc",children:"Newest"}),e.jsx("option",{value:"id:asc",children:"Oldest"})]})]}),e.jsxs(r.Stats,{children:[e.jsxs("div",{children:[e.jsx("strong",{children:"Total:"})," ",v.total]}),e.jsxs("div",{children:[e.jsx("strong",{children:"To-Do:"})," ",v.todo]}),e.jsxs("div",{children:[e.jsx("strong",{children:"In-Progress:"})," ",v.doing]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Done:"})," ",v.done]}),e.jsx("div",{className:"muted",children:v.nextDue?e.jsxs(e.Fragment,{children:["Next: ",e.jsx("em",{children:v.nextDue.title})," • ",L(v.nextDue.dueAt)]}):"No upcoming"})]}),e.jsx(r.Card,{children:e.jsxs(r.Table,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Assignment"}),e.jsx("th",{children:"Course"}),e.jsx("th",{children:"Due"}),e.jsx("th",{children:"Priority"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Est. hrs"}),e.jsx("th",{})]})}),e.jsxs("tbody",{children:[N.length===0&&e.jsx("tr",{children:e.jsx("td",{colSpan:7,children:e.jsx(r.Empty,{children:"No matching assignments."})})}),N.map(t=>{const n=te(t.dueAt);return e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs(r.TitleCell,{onClick:()=>P(t),title:"Edit",children:[e.jsx("strong",{children:t.title||"Untitled"}),t.notes&&e.jsx("div",{className:"muted small",children:t.notes})]})}),e.jsx("td",{children:t.course||"—"}),e.jsxs("td",{children:[e.jsx("div",{children:L(t.dueAt)}),n!==null&&e.jsx(r.DueBadge,{$overdue:n<0,$soon:n>=0&&n<=2,children:n<0?`${Math.abs(n)}d overdue`:n===0?"Today":`${n}d left`})]}),e.jsx("td",{children:e.jsx(r.Pill,{"data-prio":t.priority,children:t.priority})}),e.jsx("td",{children:e.jsx(r.InlineSelect,{value:t.status,onChange:i=>G(t.id,i.target.value),children:C.map(i=>e.jsx("option",{value:i.key,children:i.label},i.key))})}),e.jsx("td",{className:"num",children:t.estHours||"—"}),e.jsxs("td",{className:"num",children:[e.jsx(r.IconBtn,{title:"Edit",onClick:()=>P(t),children:"✎"}),e.jsx(r.IconBtn,{title:"Delete",onClick:()=>E(t.id),children:"✕"})]})]},t.id)})]})]})}),U&&e.jsx(r.Modal,{onMouseDown:t=>t.target===t.currentTarget&&j(!1),children:e.jsxs(r.Dialog,{onMouseDown:t=>t.stopPropagation(),children:[e.jsxs(r.DialogHead,{children:[e.jsx("h3",{children:d.id?"Edit Assignment":"New Assignment"}),e.jsx("button",{onClick:()=>j(!1),"aria-label":"Close",children:"✕"})]}),e.jsxs(r.Form,{onSubmit:t=>{t.preventDefault(),J()},children:[e.jsxs("label",{children:[e.jsx("span",{children:"Title *"}),e.jsx("input",{value:d.title,onChange:t=>g(n=>({...n,title:t.target.value}))})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Course"}),e.jsx("input",{value:d.course,onChange:t=>g(n=>({...n,course:t.target.value}))})]}),e.jsxs(r.Grid2,{children:[e.jsxs("label",{children:[e.jsx("span",{children:"Due (date & time)"}),e.jsx("input",{type:"datetime-local",value:d.dueAt,onChange:t=>g(n=>({...n,dueAt:t.target.value}))})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Priority"}),e.jsx("select",{value:d.priority,onChange:t=>g(n=>({...n,priority:t.target.value})),children:F.map(t=>e.jsx("option",{value:t.key,children:t.label},t.key))})]})]}),e.jsxs(r.Grid2,{children:[e.jsxs("label",{children:[e.jsx("span",{children:"Status"}),e.jsx("select",{value:d.status,onChange:t=>g(n=>({...n,status:t.target.value})),children:C.map(t=>e.jsx("option",{value:t.key,children:t.label},t.key))})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Est. Hours"}),e.jsx("input",{type:"number",min:"0",step:"0.5",value:d.estHours,onChange:t=>g(n=>({...n,estHours:t.target.value}))})]})]}),e.jsxs("label",{className:"full",children:[e.jsx("span",{children:"Notes"}),e.jsx("textarea",{rows:3,value:d.notes,onChange:t=>g(n=>({...n,notes:t.target.value}))})]}),e.jsxs(r.DialogFoot,{children:[e.jsx(r.Button,{type:"submit",children:d.id?"Save":"Add"}),d.id&&e.jsx(r.Button,{type:"button",$variant:"danger",onClick:()=>{j(!1),E(d.id)},children:"Delete"}),e.jsx(r.Button,{type:"button",$variant:"ghost",onClick:()=>j(!1),children:"Close"})]})]})]})})]})}export{se as default};
