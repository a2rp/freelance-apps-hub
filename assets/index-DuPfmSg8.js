import{d as s,r as p,j as t}from"./index-BHpz9pj3.js";const u="var(--text, #eaeaea)",f="var(--muted, #a8a8a8)",x="var(--border, #242424)",M="var(--accent, #22c55e)",P="var(--danger, #ef4444)",F="var(--radius, 16px)",L="var(--shadow, 0 8px 28px rgba(0,0,0,0.30))",A="var(--maxw, 1100px)",e={};e.Wrapper=s.div`
    color: ${u};
    background: #000; /* keep dark shell parity */
    min-height: 100vh;
`;e.Header=s.header`
    max-width: ${A};
    margin: 0 auto;
    padding: 24px 16px 8px;
`;e.TitleRow=s.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    flex-wrap: wrap;
`;e.Title=s.h1`
    margin: 0;
    font-size: 22px;
    letter-spacing: 0.2px;
`;e.Subtitle=s.div`
    margin-top: 6px;
    color: ${f};
    font-size: 13px;
`;e.Actions=s.div`
    display: flex;
    gap: 8px;
    align-items: center;
    flex-wrap: wrap;
`;e.Button=s.button`
    border: 1px solid ${x};
    background: ${i=>i.$variant==="danger"?"linear-gradient(180deg, #2a1111, #200f0f)":i.$variant==="ghost"?"transparent":"linear-gradient(180deg, #1a1a1a, #141414)"};
    color: ${u};
    padding: 8px 14px;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
        border-color: ${i=>i.$variant==="danger"?P:M};
    }
`;e.DatePill=s.div`
    display: flex;
    align-items: center;
    gap: 8px;
    border: 1px solid ${x};
    border-radius: 999px;
    padding: 6px 12px;
    background: #101010;
    span {
        color: ${u};
    }
`;e.CalendarIcon=s.i`
    width: 16px;
    height: 16px;
    display: inline-block;
    background: currentColor;
    color: #fff; /* white icon as requested */
    -webkit-mask: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 24 24"><path d="M7 2a1 1 0 0 1 1 1v1h8V3a1 1 0 1 1 2 0v1h1a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1V3a1 1 0 1 1 2 0v1zm12 7H5v10h14V9z"/></svg>')
        center / contain no-repeat;
    mask: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 24 24"><path d="M7 2a1 1 0 0 1 1 1v1h8V3a1 1 0 1 1 2 0v1h1a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1V3a1 1 0 1 1 2 0v1zm12 7H5v10h14V9z"/></svg>')
        center / contain no-repeat;
`;e.Main=s.main`
    max-width: ${A};
    margin: 0 auto;
    padding: 0 16px 28px;
`;e.Grid=s.div`
    display: grid;
    grid-template-columns: 1.2fr 2fr;
    gap: 24px;
    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
    }
`;e.Card=s.section`
    background: linear-gradient(180deg, #131313, #0f0f0f);
    border: 1px solid ${x};
    border-radius: ${F};
    box-shadow: ${L};
    padding: 16px;
`;e.CardHead=s.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
`;e.CardTitle=s.h2`
    margin: 0;
    font-size: 18px;
`;e.TaskAdd=s.div`
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 10px;
    margin-bottom: 10px;
    input {
        height: 42px;
        padding: 0 12px;
        border-radius: 12px;
        border: 1px solid ${x};
        background: #101010;
        color: ${u};
        outline: none;
    }
`;e.TaskList=s.div`
    display: grid;
    gap: 8px;
`;e.TaskItem=s.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    border: 1px solid ${x};
    border-radius: 12px;
    padding: 8px 10px;
    background: #101010;
    label {
        display: flex;
        align-items: center;
        gap: 8px;
        cursor: pointer;
    }
    input[type="checkbox"] {
        transform: translateY(1px);
    }
    .done {
        text-decoration: line-through;
        color: ${f};
    }
`;e.IconBtn=s.button`
    border: 1px solid ${x};
    background: transparent;
    color: ${u};
    border-radius: 8px;
    padding: 4px 8px;
    cursor: pointer;
    &:hover {
        border-color: ${P};
        color: #fff;
    }
`;e.Empty=s.div`
    border: 1px dashed ${x};
    border-radius: 12px;
    padding: 14px;
    color: ${f};
    text-align: center;
`;e.Slots=s.div`
    display: grid;
    gap: 10px;
`;e.SlotRow=s.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    @media (max-width: 720px) {
        grid-template-columns: 1fr;
    }
`;e.Slot=s.div`
    display: grid;
    grid-template-columns: 70px 1fr;
    gap: 8px;
    align-items: center;
    input {
        height: 40px;
        background: #101010;
        color: ${u};
        border: 1px solid ${x};
        border-radius: 10px;
        padding: 0 10px;
        outline: none;
    }
`;e.TimeLabel=s.div`
    font-size: 13px;
    color: ${f};
    font-weight: 600;
`;const q="dfp_",G=i=>`${i.getFullYear()}${String(i.getMonth()+1).padStart(2,"0")}${String(i.getDate()).padStart(2,"0")}`,b=i=>i.toLocaleDateString("en-US",{month:"short",day:"2-digit",year:"numeric"}).replace(",",""),D=(i,g)=>{const d=new Date(i);return d.setDate(d.getDate()+g),d},B=(i=6,g=23)=>{const d=[];for(let o=i;o<=g;o++){const l=String(o).padStart(2,"0");d.push([`${l}:00`,`${l}:30`])}return d};function _(){const[i,g]=p.useState(()=>new Date),[d,o]=p.useState([]),[l,h]=p.useState({}),[k,y]=p.useState(""),v=p.useMemo(()=>q+G(i),[i]),H=p.useMemo(()=>B(6,23),[]);p.useEffect(()=>{try{const a=JSON.parse(localStorage.getItem(v)||"null");a?(o(a.tasks||[]),h(a.blocks||{})):(o([]),h({}))}catch{o([]),h({})}},[v]),p.useEffect(()=>{const a={tasks:d,blocks:l};localStorage.setItem(v,JSON.stringify(a))},[v,d,l]);const w=()=>{const a=k.trim();a&&(o(r=>[{id:Date.now(),text:a,done:!1},...r]),y(""))},z=a=>o(r=>{const n=r.find(c=>c.id===a);return!n||!confirm(`Delete task:
"${n.text}"?`)?r:r.filter(c=>c.id!==a)}),E=a=>o(r=>r.map(n=>n.id===a?{...n,done:!n.done}:n)),j=(a,r)=>h(n=>({...n,[a]:r})),I=()=>{confirm("Clear all tasks and time blocks for this day?")&&(o([]),h({}))},N=()=>{const a=`
      @page { size: A4; margin: 12mm; }
      * { box-sizing: border-box; font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Arial; }
      h1,h2,h3 { margin: 0; }
      .muted { color: #555; font-size: 12px; }
      .head { display:flex; justify-content:space-between; align-items:center; margin-bottom: 10px; }
      .grid { display:grid; grid-template-columns: 1.2fr 2fr; gap: 12px; }
      .card { border: 1px solid #ddd; border-radius: 10px; padding: 12px; }
      .tasks li { display:flex; align-items:center; gap:8px; margin: 4px 0; }
      .tasks .done { text-decoration: line-through; color: #666; }
      .slots { display:grid; grid-template-columns: 1fr 1fr; gap: 8px; }
      .slot { display:grid; grid-template-columns: 70px 1fr; gap: 8px; align-items:center; }
      .slot input { width:100%; border:1px solid #ccc; border-radius: 8px; padding: 6px 8px; }
      .time { font-weight: 600; }
    `,r=d.map(m=>`<li><span class="${m.done?"done":""}">${$(m.text)}</span></li>`).join(""),n=B(6,23).map(([m,C])=>{const R=l[m]||"",V=l[C]||"";return`
        <div class="slot"><div class="time">${m}</div><input value="${S(R)}" readonly></div>
        <div class="slot"><div class="time">${C}</div><input value="${S(V)}" readonly></div>`}).join(""),T=`<!doctype html>
<html>
<head><meta charset="utf-8"/><title>Daily Focus - ${b(i)}</title><style>${a}</style></head>
<body>
  <div class="head">
    <h2>Daily Focus Planner</h2>
    <div class="muted">${b(i)}</div>
  </div>
  <div class="grid">
    <div class="card">
      <h3>Tasks</h3>
      <ul class="tasks">${r||'<li class="muted">No tasks</li>'}</ul>
    </div>
    <div class="card">
      <h3>Time Blocks</h3>
      <div class="slots">${n}</div>
    </div>
  </div>
  <script>window.print()<\/script>
</body>
</html>`,c=window.open("","_blank","width=900,height=1100");if(!c)return alert("Popup blocked. Allow popups to print.");c.document.open(),c.document.write(T),c.document.close(),c.focus()};function $(a=""){return a.replace(/[&<>"']/g,r=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[r])}function S(a=""){return $(String(a)).replace(/"/g,"&quot;")}return t.jsxs(e.Wrapper,{children:[t.jsxs(e.Header,{className:"no-print",children:[t.jsxs(e.TitleRow,{children:[t.jsx(e.Title,{children:"Daily Focus Planner"}),t.jsxs(e.Actions,{children:[t.jsx(e.Button,{onClick:()=>g(D(i,-1)),title:"Previous day",children:"⟨ Prev"}),t.jsxs(e.DatePill,{children:[t.jsx(e.CalendarIcon,{"aria-hidden":!0}),t.jsx("span",{children:b(i)})]}),t.jsx(e.Button,{onClick:()=>g(D(i,1)),title:"Next day",children:"Next ⟩"}),t.jsx(e.Button,{onClick:N,$variant:"ghost",children:"Print"}),t.jsx(e.Button,{onClick:I,$variant:"danger",children:"Reset Day"})]})]}),t.jsx(e.Subtitle,{className:"muted",children:"Autosaves per date • 30-minute blocks"})]}),t.jsx(e.Main,{children:t.jsxs(e.Grid,{children:[t.jsxs(e.Card,{children:[t.jsxs(e.CardHead,{children:[t.jsx(e.CardTitle,{children:"Tasks"}),t.jsx("div",{})]}),t.jsxs(e.TaskAdd,{children:[t.jsx("input",{value:k,onChange:a=>y(a.target.value),placeholder:"Add a task and press Enter",onKeyDown:a=>a.key==="Enter"&&(a.preventDefault(),w())}),t.jsx(e.Button,{onClick:w,children:"Add"})]}),t.jsxs(e.TaskList,{children:[d.length===0&&t.jsx(e.Empty,{children:"No tasks yet."}),d.map(a=>t.jsxs(e.TaskItem,{children:[t.jsxs("label",{children:[t.jsx("input",{type:"checkbox",checked:a.done,onChange:()=>E(a.id)}),t.jsx("span",{className:a.done?"done":"",children:a.text})]}),t.jsx(e.IconBtn,{onClick:()=>z(a.id),title:"Delete",children:"✕"})]},a.id))]})]}),t.jsxs(e.Card,{children:[t.jsx(e.CardHead,{children:t.jsx(e.CardTitle,{children:"Time Blocks"})}),t.jsx(e.Slots,{children:H.map(([a,r])=>t.jsxs(e.SlotRow,{children:[t.jsxs(e.Slot,{children:[t.jsx(e.TimeLabel,{children:a}),t.jsx("input",{value:l[a]||"",onChange:n=>j(a,n.target.value),placeholder:"Plan / notes"})]}),t.jsxs(e.Slot,{children:[t.jsx(e.TimeLabel,{children:r}),t.jsx("input",{value:l[r]||"",onChange:n=>j(r,n.target.value),placeholder:"Plan / notes"})]})]},a))})]})]})})]})}export{_ as default};
