import{d as c,r as j,j as t}from"./index-DH_rh4tU.js";const k="var(--text, #eaeaea)",A="var(--muted, #a8a8a8)",g="var(--border, #242424)",Y="var(--accent, #22c55e)",Q="var(--danger, #ef4444)",ae="var(--radius, 16px)",de="var(--shadow, 0 8px 28px rgba(0,0,0,0.30))",r={};r.Wrapper=c.div`
    max-width: var(--maxw, 1100px);
    margin: 0 auto;
    padding: 24px 16px 32px;
    color: ${k};
`;r.Header=c.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    flex-wrap: wrap;
`;r.Title=c.h1`
    margin: 0;
    font-size: 22px;
    letter-spacing: 0.2px;
`;r.Subtitle=c.div`
    color: ${A};
    font-size: 13px;
    em {
        color: ${k};
        font-style: normal;
    }
`;r.Actions=c.div`
    display: flex;
    gap: 8px;
    align-items: center;
    flex-wrap: wrap;
`;r.Button=c.button`
    border: 1px solid ${g};
    background: ${i=>i.$variant==="danger"?"linear-gradient(180deg,#2a1111,#200f0f)":i.$variant==="ghost"?"transparent":"linear-gradient(180deg,#1a1a1a,#141414)"};
    color: ${k};
    padding: 8px 14px;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
        border-color: ${i=>i.$variant==="danger"?Q:Y};
    }
`;r.FileLabel=c.label`
    border: 1px dashed ${g};
    padding: 8px 12px;
    border-radius: 10px;
    cursor: pointer;
    display: inline-flex;
    gap: 8px;
    align-items: center;
    input {
        display: none;
    }
`;r.Grid=c.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    margin-top: 14px;
    @media (max-width: 980px) {
        grid-template-columns: 1fr;
    }
`;r.Card=c.section`
    background: linear-gradient(180deg, #131313, #0f0f0f);
    border: 1px solid ${g};
    border-radius: ${ae};
    box-shadow: ${de};
    padding: 14px;
`;r.CardHead=c.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
`;r.CardTitle=c.h2`
    margin: 0;
    font-size: 18px;
`;r.SubjectList=c.div`
    display: grid;
    gap: 10px;
`;r.SubjectItem=c.div`
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 10px;
    align-items: center;
    border: 1px solid ${i=>i.$active?Y:g};
    border-radius: 12px;
    padding: 8px 10px;
    background: #101010;
    .fields {
        display: grid;
        grid-template-columns: 120px 1fr;
        gap: 8px;
    }
    .fields .code,
    .fields .name {
        height: 40px;
        background: #0e0e0e;
        color: ${k};
        border: 1px solid ${g};
        border-radius: 10px;
        padding: 0 10px;
        outline: none;
    }
    .ops input[type="color"] {
        width: 36px;
        height: 36px;
        border: none;
        background: transparent;
        padding: 0;
        cursor: pointer;
    }
`;r.ColorSwatch=c.button`
    width: 28px;
    height: 28px;
    border-radius: 8px;
    border: 1px solid ${g};
    cursor: pointer;
`;r.Hint=c.div`
    font-size: 12px;
    margin-top: 8px;
`;r.SettingsRow=c.div`
    display: grid;
    gap: 16px;
`;r.DayToggles=c.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 8px;
    label {
        display: flex;
        gap: 6px;
        align-items: center;
        border: 1px solid ${g};
        border-radius: 999px;
        padding: 6px 10px;
        background: #0e0e0e;
    }
`;r.PeriodList=c.div`
    display: grid;
    gap: 8px;
    margin-top: 8px;
    .row {
        display: grid;
        grid-template-columns: 120px 1fr auto;
        gap: 8px;
        align-items: center;
    }
    .plabel,
    .ptime {
        height: 40px;
        background: #0e0e0e;
        color: ${k};
        border: 1px solid ${g};
        border-radius: 10px;
        padding: 0 10px;
        outline: none;
    }
`;r.Row=c.div`
    display: flex;
    gap: ${i=>i.$gap??12}px;
    flex-wrap: wrap;
    margin-top: 8px;
`;r.Table=c.table`
    width: 100%;
    border-collapse: collapse;
    th,
    td {
        border: 1px solid ${g};
        padding: 10px;
    }
    th {
        color: ${A};
    }
    td {
        text-align: center;
        vertical-align: middle;
    }
    .muted {
        color: ${A};
    }
`;r.Cell=c.div`
    display: inline-block;
    min-width: 64px;
    border: 1px solid ${g};
    background: #0e0e0e;
    color: ${k};
    border-radius: 10px;
    padding: 6px 8px;
    .sub {
        font-weight: 700;
    }
    .room {
        font-size: 12px;
        opacity: 0.85;
    }
`;r.Dash=c.span`
    color: ${A};
`;r.Empty=c.div`
    border: 1px dashed ${g};
    padding: 16px;
    border-radius: 12px;
    color: ${A};
    text-align: center;
`;r.IconBtn=c.button`
    border: 1px solid ${g};
    background: transparent;
    color: ${k};
    border-radius: 8px;
    padding: 4px 8px;
    cursor: pointer;
    &:hover {
        border-color: ${Q};
        color: #fff;
    }
`;r.Modal=c.div`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.55);
    display: grid;
    place-items: center;
    z-index: 1000;
`;r.Dialog=c.div`
    width: min(560px, 96vw);
    max-height: 90vh;
    overflow: auto;
    background: #0c0c0c;
    border: 1px solid ${g};
    border-radius: 16px;
`;r.DialogHead=c.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 14px;
    border-bottom: 1px solid ${g};
    h3 {
        margin: 0;
        font-size: 16px;
    }
    button {
        background: transparent;
        color: ${k};
        border: 0;
        font-size: 18px;
        cursor: pointer;
    }
`;r.Form=c.form`
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
        color: ${k};
        border: 1px solid ${g};
        border-radius: 10px;
        padding: 8px 10px;
        outline: none;
    }
    .full {
        grid-column: 1 / -1;
    }
`;r.DialogFoot=c.div`
    display: flex;
    gap: 10px;
    justify-content: flex-end;
    padding: 12px 14px;
    border-top: 1px solid ${g};
`;const P=(i,s)=>{try{return JSON.parse(localStorage.getItem(i)||"null")??s}catch{return s}},O=(i,s)=>localStorage.setItem(i,JSON.stringify(s)),J=i=>`${String(i.getHours()).padStart(2,"0")}:${String(i.getMinutes()).padStart(2,"0")}`;function F(){return Math.random().toString(36).slice(2,9)}const z=["#10b981","#22c55e","#06b6d4","#0ea5e9","#a78bfa","#f59e0b","#ef4444","#f97316","#e11d48","#14b8a6","#8b5cf6","#d946ef"];function V(i){for(const s of z)if(!i.includes(s))return s;return z[Math.floor(Math.random()*z.length)]}const N={SETTINGS:"tt_settings",SUBJECTS:"tt_subjects",SLOTS:"tt_slots"},X=[{key:"Mon",label:"Mon",enabled:!0},{key:"Tue",label:"Tue",enabled:!0},{key:"Wed",label:"Wed",enabled:!0},{key:"Thu",label:"Thu",enabled:!0},{key:"Fri",label:"Fri",enabled:!0},{key:"Sat",label:"Sat",enabled:!0},{key:"Sun",label:"Sun",enabled:!1}];function H(i=8,s="08:00",u=60){const[a,x]=s.split(":").map(Number);let h=new Date;h.setHours(a,x,0,0);const y=[];for(let f=0;f<i;f++){const w=new Date(h),S=new Date(h.getTime()+u*6e4);y.push({id:`P${f+1}`,label:`P${f+1}`,time:`${J(w)}–${J(S)}`}),h=S}return y}const G={days:X,periods:H(8,"08:00",60)};function W(i){const s=Array.isArray(i==null?void 0:i.days)?i.days.map((a,x)=>({key:(a==null?void 0:a.key)??(a==null?void 0:a.label)??`D${x+1}`,label:(a==null?void 0:a.label)??(a==null?void 0:a.key)??`Day ${x+1}`,enabled:!!(a!=null&&a.enabled)})):X,u=Array.isArray(i==null?void 0:i.periods)?i.periods.map((a,x)=>({id:(a==null?void 0:a.id)??`P${x+1}`,label:(a==null?void 0:a.label)??`P${x+1}`,time:(a==null?void 0:a.time)??""})):H(8,"08:00",60);return{days:s,periods:u}}function K(i){return Array.isArray(i)?i.map((s,u)=>({id:(s==null?void 0:s.id)??F(),code:(s==null?void 0:s.code)??`SUB${u+1}`,name:(s==null?void 0:s.name)??"",color:(s==null?void 0:s.color)??V([])})):[]}function q(i){return i&&typeof i=="object"&&!Array.isArray(i)?i:{}}function ue(){const[i,s]=j.useState(()=>W(P(N.SETTINGS,G))),[u,a]=j.useState(()=>K(P(N.SUBJECTS,[]))),[x,h]=j.useState(()=>q(P(N.SLOTS,{}))),[y,f]=j.useState(null),[w,S]=j.useState(null);j.useEffect(()=>O(N.SETTINGS,i),[i]),j.useEffect(()=>O(N.SUBJECTS,u),[u]),j.useEffect(()=>O(N.SLOTS,x),[x]);const E=j.useMemo(()=>(i.days??[]).map((e,n)=>({...e,idx:n})).filter(e=>e.enabled),[i.days]);function B(){const e=u.map(o=>o.color),n={id:F(),code:`SUB${u.length+1}`,name:"",color:V(e)};a(o=>[n,...o]),f(n.id)}function p(e,n){a(o=>o.map(d=>d.id===e?{...d,...n}:d))}function Z(e){const n=u.find(d=>d.id===e),o=n?` ${n.code||n.name||""}`:"";confirm(`Delete subject${o}? Slots using it will be cleared.`)&&(a(d=>d.filter(l=>l.id!==e)),h(d=>{const l={...d};return Object.keys(l).forEach(m=>{var b;((b=l[m])==null?void 0:b.subjectId)===e&&delete l[m].subjectId}),l}),y===e&&f(null))}function R(e,n){return`${e}:${n}`}function ee(e,n){const o=R(e,n);if(y){h(d=>({...d,[o]:{...d[o]||{},subjectId:y}}));return}S({key:o,data:x[o]||{subjectId:"",room:"",note:""}})}function U(e){h(n=>{const o={...n};return o[e]?(delete o[e].subjectId,delete o[e].room,delete o[e].note,(!o[e]||Object.keys(o[e]).length===0)&&delete o[e],o):n})}function te(e,n){h(o=>({...o,[e]:n}))}function re(){const e={_type:"smart-timetable",_v:1,settings:i,subjects:u,slots:x},n=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),o=document.createElement("a");o.href=URL.createObjectURL(n),o.download="smart-timetable.json",o.click(),URL.revokeObjectURL(o.href)}function ne(e){var d;const n=(d=e.target.files)==null?void 0:d[0];if(!n)return;const o=new FileReader;o.onload=()=>{try{const l=typeof o.result=="string"?o.result:new TextDecoder().decode(o.result),m=String(l).replace(/^\uFEFF/,""),b=JSON.parse(m),v=oe(b);if(!confirm("Import will replace current timetable. Continue?"))return;s(W(v.settings??{})),a(K(v.subjects??[])),h(q(v.slots??{})),f(null),S(null),alert("Imported successfully.")}catch(l){console.error("Import failed:",l),alert("Import failed. Make sure you selected a valid JSON exported from this app.")}finally{e.target.value=""}},o.onerror=()=>{alert("Couldn't read the selected file."),e.target.value=""},o.readAsText(n)}function oe(e){if(!e||typeof e!="object")return{settings:{},subjects:[],slots:{}};if(e._type==="smart-timetable"||e.settings||e.subjects||e.slots)return{settings:e.settings||{},subjects:e.subjects||[],slots:e.slots||{}};if(e.days||e.periods)return{settings:e,subjects:[],slots:{}};if(Array.isArray(e)&&e.every(n=>typeof n=="object"&&(n.code||n.name||n.color)))return{settings:{},subjects:e,slots:{}};if(!Array.isArray(e)){const n=Object.keys(e);if(n.length>0&&n.every(d=>d.includes(":")))return{settings:{},subjects:[],slots:e}}return{settings:{},subjects:[],slots:{}}}function ie(){confirm("Reset everything? This clears subjects and timetable.")&&(s(G),a([]),h({}),f(null))}function M(e){return u.find(n=>n.id===e)}function le(){const e=(i.days||[]).filter($=>$.enabled),n=i.periods||[],o=`
      @page { size: A4; margin: 10mm; }
      * { box-sizing: border-box; font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Arial; }
      h2 { margin: 0 0 8px; }
      table { width: 100%; border-collapse: collapse; }
      th, td { border: 1px solid #ccc; padding: 6px; font-size: 12px; text-align: center; }
      th:first-child, td:first-child { text-align: left; white-space: nowrap; }
      .time { color:#555; font-weight: 600; }
      .cell { border-radius: 6px; padding: 4px 6px; display: inline-block; min-width: 54px; }
      .sub { font-weight: 700; }
      .room { color:#222; opacity:.85; font-size: 11px; }
    `,d=n.map(($,D)=>{const C=e.map(L=>{const se=R(L.key,D),T=x[se];if(!(T!=null&&T.subjectId))return"<td>—</td>";const I=M(T.subjectId),_=((I==null?void 0:I.color)||"#ddd").replace("#","");return`<td>
          <span class="cell" style="background:#${_}22; border:1px solid #${_}">
            <span class="sub">${v((I==null?void 0:I.code)||"—")}</span>
            ${T.room?`<div class="room">${v(T.room)}</div>`:""}
          </span>
        </td>`}).join("");return`<tr>
        <td><div><strong>${v($.label??"")}</strong></div><div class="time">${v($.time??"")}</div></td>
        ${C}
      </tr>`}).join(""),l=`<tr>
      <th>Period</th>
      ${e.map($=>`<th>${v($.label??"")}</th>`).join("")}
    </tr>`,m=`<!doctype html>
<html><head><meta charset="utf-8"/><title>Smart Timetable</title><style>${o}</style></head>
<body>
  <h2>Smart Timetable</h2>
  <table>
    <thead>${l}</thead>
    <tbody>${d}</tbody>
  </table>
  <script>window.print()<\/script>
</body></html>`,b=window.open("","_blank","width=1000,height=900");if(!b)return alert("Popup blocked. Allow popups to print.");b.document.open(),b.document.write(m),b.document.close(),b.focus();function v($=""){return String($).replace(/[&<>"']/g,D=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[D])}}return t.jsxs(r.Wrapper,{children:[t.jsxs(r.Header,{children:[t.jsxs("div",{children:[t.jsx(r.Title,{children:"Smart Timetable"}),t.jsxs(r.Subtitle,{className:"muted",children:["Click a subject to select the ",t.jsx("em",{children:"brush"}),", then click cells to assign. Double-click (or click without brush) to edit slot."]})]}),t.jsxs(r.Actions,{children:[t.jsxs(r.FileLabel,{children:["Import",t.jsx("input",{type:"file",accept:".json,application/json",onChange:ne})]}),t.jsx(r.Button,{onClick:re,$variant:"ghost",children:"Export"}),t.jsx(r.Button,{onClick:le,$variant:"ghost",children:"Print"}),t.jsx(r.Button,{onClick:ie,$variant:"danger",children:"Reset"})]})]}),t.jsxs(r.Grid,{children:[t.jsxs(r.Card,{children:[t.jsxs(r.CardHead,{children:[t.jsx(r.CardTitle,{children:"Subjects"}),t.jsx(r.Button,{onClick:B,$variant:"ghost",children:"+ Add"})]}),t.jsxs(r.SubjectList,{children:[u.length===0&&t.jsx(r.Empty,{children:"No subjects yet."}),u.map(e=>t.jsxs(r.SubjectItem,{$active:y===e.id,children:[t.jsx(r.ColorSwatch,{style:{background:e.color},onClick:()=>f(y===e.id?null:e.id),title:"Use as brush"}),t.jsxs("div",{className:"fields",children:[t.jsx("input",{className:"code",placeholder:"Code",value:e.code,onChange:n=>p(e.id,{code:n.target.value})}),t.jsx("input",{className:"name",placeholder:"Name",value:e.name,onChange:n=>p(e.id,{name:n.target.value})})]}),t.jsxs("div",{className:"ops",children:[t.jsx("input",{type:"color",value:e.color,onChange:n=>p(e.id,{color:n.target.value}),title:"Pick color"}),t.jsx(r.IconBtn,{title:"Delete",onClick:()=>Z(e.id),children:"✕"})]})]},e.id))]}),t.jsx(r.Hint,{className:"muted",children:"Tip: Click a color square to toggle brush. Brush assigns instantly on cell click."})]}),t.jsxs(r.Card,{children:[t.jsx(r.CardHead,{children:t.jsx(r.CardTitle,{children:"Settings"})}),t.jsxs(r.SettingsRow,{children:[t.jsxs("div",{children:[t.jsx("strong",{children:"Days"}),t.jsx(r.DayToggles,{children:(i.days||[]).map((e,n)=>t.jsxs("label",{title:e.label,children:[t.jsx("input",{type:"checkbox",checked:!!e.enabled,onChange:o=>s(d=>{const l=(d.days||[]).slice();return l[n]={...l[n],enabled:o.target.checked},{...d,days:l}})}),t.jsx("span",{children:e.label})]},e.key))})]}),t.jsxs("div",{children:[t.jsx("strong",{children:"Periods & times"}),t.jsx(r.PeriodList,{children:(i.periods||[]).map((e,n)=>t.jsxs("div",{className:"row",children:[t.jsx("input",{className:"plabel",value:e.label,onChange:o=>s(d=>{const l=(d.periods||[]).slice();return l[n]={...l[n],label:o.target.value},{...d,periods:l}})}),t.jsx("input",{className:"ptime",value:e.time,onChange:o=>s(d=>{const l=(d.periods||[]).slice();return l[n]={...l[n],time:o.target.value},{...d,periods:l}})}),t.jsx(r.IconBtn,{title:"Remove period",onClick:()=>s(o=>{const d=o.periods||[];if(d.length<=1||!confirm(`Remove ${e.label}?`))return o;const l=d.slice();return l.splice(n,1),h(m=>{const b={};return Object.entries(m||{}).forEach(([v,$])=>{const[D,C]=v.split(":");if(+C===n)return;const L=+C>n?+C-1:+C;b[`${D}:${L}`]=$}),b}),{...o,periods:l}}),children:"✕"})]},e.id))}),t.jsxs(r.Row,{$gap:"8",children:[t.jsx(r.Button,{$variant:"ghost",onClick:()=>s(e=>{var n;return{...e,periods:[...e.periods||[],{id:F(),label:`P${(((n=e.periods)==null?void 0:n.length)||0)+1}`,time:""}]}}),children:"+ Add Period"}),t.jsx(r.Button,{$variant:"ghost",onClick:()=>s(e=>({...e,periods:H(8,"08:00",60)})),children:"Reset to 8 × 60min (08:00)"})]})]})]})]})]}),t.jsxs(r.Card,{children:[t.jsxs(r.CardHead,{children:[t.jsx(r.CardTitle,{children:"Timetable"}),t.jsx(r.Hint,{className:"muted",children:"Alt/Option-click a cell to clear."})]}),t.jsxs(r.Table,{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{style:{width:180},children:"Period"}),E.map(e=>t.jsx("th",{children:e.label},e.key))]})}),t.jsx("tbody",{children:(i.periods||[]).map((e,n)=>t.jsxs("tr",{children:[t.jsxs("td",{children:[t.jsx("div",{children:t.jsx("strong",{children:e.label})}),t.jsx("div",{className:"muted",children:e.time})]}),E.map(o=>{const d=R(o.key,n),l=x[d],m=l!=null&&l.subjectId?M(l.subjectId):null;return t.jsx("td",{onClick:b=>{b.altKey||b.metaKey?U(d):ee(o.key,n)},title:l!=null&&l.note?l.note:"",children:m?t.jsxs(r.Cell,{style:{borderColor:m.color,background:m.color+"22"},children:[t.jsx("div",{className:"sub",children:m.code||"—"}),l!=null&&l.room?t.jsx("div",{className:"room",children:l.room}):null]}):t.jsx(r.Dash,{children:"—"})},o.key)})]},e.id))})]})]}),w&&t.jsx(ce,{subjects:u,k:w.key,initial:w.data,onClose:()=>S(null),onSave:(e,n)=>{te(e,n),S(null)},onClear:e=>{U(e),S(null)}})]})}function ce({subjects:i,k:s,initial:u,onClose:a,onSave:x,onClear:h}){const[y,f]=j.useState(u.subjectId||""),[w,S]=j.useState(u.room||""),[E,B]=j.useState(u.note||"");return t.jsx(r.Modal,{onMouseDown:p=>p.target===p.currentTarget&&a(),children:t.jsxs(r.Dialog,{onMouseDown:p=>p.stopPropagation(),children:[t.jsxs(r.DialogHead,{children:[t.jsxs("h3",{children:["Edit Slot — ",s]}),t.jsx("button",{onClick:a,"aria-label":"Close",children:"✕"})]}),t.jsxs(r.Form,{onSubmit:p=>{p.preventDefault(),x(s,{subjectId:y,room:w,note:E})},children:[t.jsxs("label",{children:[t.jsx("span",{children:"Subject"}),t.jsxs("select",{value:y,onChange:p=>f(p.target.value),children:[t.jsx("option",{value:"",children:"— None —"}),i.map(p=>t.jsx("option",{value:p.id,children:p.code||p.name||p.id},p.id))]})]}),t.jsxs("label",{children:[t.jsx("span",{children:"Room"}),t.jsx("input",{value:w,onChange:p=>S(p.target.value),placeholder:"Optional (e.g., 204)"})]}),t.jsxs("label",{className:"full",children:[t.jsx("span",{children:"Note"}),t.jsx("textarea",{rows:3,value:E,onChange:p=>B(p.target.value),placeholder:"Optional notes"})]}),t.jsxs(r.DialogFoot,{children:[t.jsx(r.Button,{type:"submit",children:"Save"}),t.jsx(r.Button,{type:"button",$variant:"ghost",onClick:()=>h(s),children:"Clear"}),t.jsx(r.Button,{type:"button",$variant:"danger",onClick:a,children:"Close"})]})]})]})})}export{ue as default};
