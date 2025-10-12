import{d as s,l as K,r as l,j as e}from"./index-COA_3K4v.js";const x="var(--bg)",f="var(--card)",u="var(--text)",g="var(--muted)",n="var(--border)",p="var(--radius)",z="var(--shadow)",$="var(--accent)",y="var(--danger, #e5484d)",B="#ef476f",R="#ffd166",Q="#06d6a0",o={Wrapper:s.div`
        max-width: 1440px;
        margin: 0 auto;
        display: grid;
        gap: 16px;
        padding: 16px;
        background: ${x};
        color: ${u};
        min-height: 100%;
    `,Header:s.header`
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        gap: 16px;
        h1 {
            margin: 0 0 6px 0;
            font-size: 22px;
            line-height: 1.2;
        }
        p {
            margin: 0;
            color: ${g};
            font-size: 14px;
        }
    `,Badges:s.div`
        display: flex;
        gap: 8px;
        align-items: center;
        .badge {
            background: ${f};
            border: 1px solid ${n};
            padding: 6px 10px;
            border-radius: 999px;
            font-size: 12px;
            box-shadow: ${z};
        }
    `,Layout:s.div`
        display: grid;
        grid-template-columns: 1.2fr 2fr;
        gap: 16px;
        @media (max-width: 1100px) {
            grid-template-columns: 1fr;
        }
        .left,
        .right {
            display: grid;
            gap: 16px;
        }
    `,Card:s.div`
        background: ${f};
        border: 1px solid ${n};
        border-radius: ${p};
        box-shadow: ${z};
        padding: 16px;
    `,SectionTitle:s.h2`
        margin: 0 0 10px 0;
        font-size: 15px;
        font-weight: 600;
    `,Grid:s.div`
        display: grid;
        grid-template-columns: 1fr 160px 160px;
        gap: 12px;
        @media (max-width: 860px) {
            grid-template-columns: 1fr 1fr;
        }
        .span-2 {
            grid-column: 1 / -1;
        }
    `,Field:s.div`
        display: grid;
        gap: 6px;
        label {
            font-size: 13px;
            color: ${u};
            display: inline-flex;
            gap: 6px;
            align-items: center;
        }
        em {
            color: ${y};
            font-style: normal;
        }
        input[type="text"],
        input[type="date"],
        textarea,
        select {
            width: 100%;
            border: 1px solid ${n};
            background: ${x};
            color: ${u};
            border-radius: calc(${p} - 2px);
            padding: 10px 12px;
            font: inherit;
            outline: none;
            transition: border-color 0.15s ease;
        }
        textarea {
            resize: vertical;
        }
        input:focus,
        textarea:focus,
        select:focus {
            border-color: ${$};
        }
        ${d=>d.invalid&&K`
                input,
                textarea,
                select {
                    border-color: ${y};
                }
            `}
    `,Error:s.div`
        min-height: 16px;
        font-size: 12px;
        color: ${y};
    `,Actions:s.div`
        margin-top: 14px;
        display: flex;
        gap: 10px;
        align-items: center;
        .spacer {
            flex: 1;
        }
        button {
            appearance: none;
            border: 1px solid ${n};
            background: ${f};
            color: ${u};
            padding: 10px 14px;
            border-radius: ${p};
            cursor: pointer;
            font: inherit;
            transition: transform 0.02s ease, border-color 0.15s ease;
            &:hover {
                border-color: ${$};
            }
            &:active {
                transform: translateY(1px);
            }
            &:disabled {
                opacity: 0.55;
                cursor: not-allowed;
            }
        }
        .ghost {
            background: ${x};
        }
        .danger {
            border-color: ${y};
        }
        .primary {
            background: ${$};
            color: #fff;
            border-color: ${$};
        }
    `,FilterBar:s.div`
        display: grid;
        grid-template-columns: 1fr 160px 160px;
        gap: 10px;
        align-items: center;
        input[type="text"],
        select {
            width: 100%;
            border: 1px solid ${n};
            background: ${x};
            color: ${u};
            border-radius: calc(${p} - 2px);
            padding: 10px 12px;
            font: inherit;
        }
        .stats {
            display: flex;
            gap: 12px;
            align-items: center;
            justify-content: flex-end;
            grid-column: 1 / -1;
            color: ${g};
            font-size: 13px;
        }
        @media (max-width: 860px) {
            grid-template-columns: 1fr;
            .stats {
                justify-content: flex-start;
            }
        }
    `,Board:s.div`
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 16px;
        /* ✅ don't stretch columns to equal height */
        align-items: start;
        /* mobile: single column */
        @media (max-width: 860px) {
            grid-template-columns: 1fr;
        }
    `,Column:s.div`
        display: grid;
        gap: 10px;
        /* ✅ make children size to content; never stretch vertically */
        grid-auto-rows: auto;
        align-content: start;

        .col-head {
            /* chip-like header, not a giant card */
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 42px;
            padding: 8px 12px;
            border: 1px solid ${n};
            border-radius: ${p};
            background: ${x};
            color: ${u};
            /* prevent vertical stretching */
            align-self: start;
        }
        .col-head.high {
            border-color: #ef476f;
        }
        .col-head.medium {
            border-color: #ffd166;
        }
        .col-head.low {
            border-color: #06d6a0;
        }

        .col-body {
            display: grid;
            gap: 10px;
            /* ✅ allow it to be only as tall as content */
            align-self: start;
            min-height: 0;
        }
    `,Empty:s.div`
        /* shrink-wrap so it doesn't fill the whole column */
        display: inline-block;
        padding: 10px 12px;
        color: ${g};
        border: 1px dashed ${n};
        border-radius: ${p};
        background: ${x};
    `,TaskCard:s.div`
        border: 1px solid ${n};
        border-radius: ${p};
        padding: 12px;
        background: ${f};
        display: grid;
        gap: 8px;

        &[data-done="1"] .title {
            text-decoration: line-through;
            color: ${g};
        }
        &[data-done="1"] {
            opacity: 0.9;
        }

        .row-1 {
            display: grid;
            grid-template-columns: auto 1fr;
            gap: 10px;
            align-items: center;
        }
        .check {
            display: inline-grid;
            grid-template-columns: 16px auto;
            align-items: center;
            gap: 8px;
        }
        .check input {
            display: none;
        }
        .check span {
            width: 16px;
            height: 16px;
            border: 1px solid ${n};
            border-radius: 4px;
            background: ${x};
            position: relative;
        }
        .check input:checked + span {
            border-color: ${$};
            background: ${$};
        }
        .check input:checked + span::after {
            content: "";
            position: absolute;
            top: 2px;
            left: 5px;
            width: 4px;
            height: 8px;
            border: 2px solid black;
            border-left: 0;
            border-top: 0;
            transform: rotate(45deg);
        }

        .title {
            font-weight: 600;
            font-size: 15px;
        }

        .desc {
            color: ${g};
            font-size: 13px;
            white-space: pre-wrap;
        }

        .row-2 {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
        }
        .meta {
            display: flex;
            gap: 8px;
            align-items: center;
        }
        .due {
            font-size: 12px;
            color: ${g};
        }
        .due.overdue {
            color: ${y};
        }
        .due.none {
            color: ${g};
        }

        .prio {
            font-size: 12px;
            border-radius: 999px;
            padding: 4px 8px;
            border: 1px solid ${n};
            background: ${x};
        }
        .prio.high {
            border-color: ${B};
            color: ${B};
        }
        .prio.medium {
            border-color: ${R};
            color: #a98000;
        }
        .prio.low {
            border-color: ${Q};
            color: #0b7a64;
        }

        .actions {
            display: flex;
            gap: 8px;
        }
        .actions button {
            appearance: none;
            border: 1px solid ${n};
            background: ${f};
            color: ${u};
            padding: 6px 10px;
            border-radius: ${p};
            cursor: pointer;
            font: inherit;
        }
        .actions .danger {
            border-color: ${y};
        }
    `,ModalOverlay:s.div`
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
        display: grid;
        place-items: center;
        z-index: 9999;
    `,Modal:s.div`
        width: min(420px, 90vw);
        background: ${f};
        color: ${u};
        border: 1px solid ${n};
        border-radius: ${p};
        box-shadow: ${z};
        padding: 16px;
        h3 {
            margin: 0 0 6px 0;
            font-size: 16px;
        }
        p {
            margin: 0 0 12px 0;
            color: ${g};
            font-size: 14px;
        }
        .actions {
            display: flex;
            gap: 10px;
            justify-content: flex-end;
        }
        .actions button {
            appearance: none;
            border: 1px solid ${n};
            background: ${f};
            color: ${u};
            padding: 8px 12px;
            border-radius: ${p};
            cursor: pointer;
            font: inherit;
        }
        .actions .ghost {
            background: ${x};
        }
        .actions .danger {
            border-color: ${y};
        }
    `},I="taskScheduler_tasks_v1",X=()=>crypto.randomUUID?crypto.randomUUID():Math.random().toString(36).slice(2),Z=()=>new Date().toISOString().slice(0,10),L=d=>{if(!d)return!1;const m=new Date(d+"T00:00:00"),c=new Date(Z()+"T00:00:00");return m<c},U={high:3,medium:2,low:1},te=()=>{const[d,m]=l.useState(()=>{try{return JSON.parse(localStorage.getItem(I)||"[]")}catch{return[]}}),[c,T]=l.useState({title:"",description:"",due:"",priority:"medium"}),[h,k]=l.useState({}),[j,M]=l.useState(null),[C,H]=l.useState(""),[S,P]=l.useState("open"),[v,q]=l.useState("priority"),[b,w]=l.useState({open:!1,type:"",payload:null,title:"",body:""});l.useEffect(()=>{try{localStorage.setItem(I,JSON.stringify(d))}catch{}},[d]);const A=(t=c)=>{const r={};return t.title.trim()||(r.title="Title is required."),t.title.length>100&&(r.title="Max 100 characters."),t.description.length>500&&(r.description="Max 500 characters."),t.due&&L(t.due)&&(r.due="Due date cannot be in the past."),["low","medium","high"].includes(t.priority)||(r.priority="Select a priority."),r},N=(t,r)=>{const i={...c,[t]:r};T(i),k(A(i))},_=t=>{t.preventDefault();const r=A(c);k(r),!Object.keys(r).length&&(m(j?i=>i.map(a=>a.id===j?{...a,...c,updatedAt:Date.now()}:a):i=>[{id:X(),...c,done:!1,createdAt:Date.now(),updatedAt:Date.now()},...i]),D())},D=()=>{T({title:"",description:"",due:"",priority:"medium"}),k({}),M(null)},G=t=>m(r=>r.map(i=>i.id===t?{...i,done:!i.done,updatedAt:Date.now()}:i)),J=t=>w({open:!0,type:"delete-one",payload:t,title:"Delete task?",body:"This cannot be undone."}),V=()=>w({open:!0,type:"clear-all",title:"Clear all tasks?",body:"All tasks will be removed from this browser."}),W=()=>{if(b.type==="delete-one"){const t=b.payload;m(r=>r.filter(i=>i.id!==t)),j===t&&D()}else b.type==="clear-all"&&(m([]),D());w({open:!1,type:"",payload:null,title:"",body:""})},Y=t=>{M(t.id),T({title:t.title,description:t.description||"",due:t.due||"",priority:t.priority}),k(A({title:t.title,description:t.description||"",due:t.due||"",priority:t.priority})),window.scrollTo({top:0,behavior:"smooth"})},O=l.useMemo(()=>{let t=d;if(C.trim()){const i=C.trim().toLowerCase();t=t.filter(a=>(a.title+" "+(a.description||"")).toLowerCase().includes(i))}if(S!=="all"){const i=S==="done";t=t.filter(a=>a.done===i)}const r=[...t];return v==="priority"?r.sort((i,a)=>U[a.priority]-U[i.priority]||(i.due||"").localeCompare(a.due||"")):v==="dueAsc"?r.sort((i,a)=>(i.due||"9999").localeCompare(a.due||"9999")):v==="dueDesc"?r.sort((i,a)=>(a.due||"").localeCompare(i.due||"")):v==="created"&&r.sort((i,a)=>a.createdAt-i.createdAt),r},[d,C,S,v]),E=l.useMemo(()=>{const t={high:[],medium:[],low:[]};for(const r of O)t[r.priority].push(r);return t},[O]),F=l.useMemo(()=>{const t=d.length,r=d.filter(i=>i.done).length;return{total:t,done:r,open:t-r}},[d]);return e.jsxs(o.Wrapper,{children:[e.jsxs(o.Header,{children:[e.jsxs("div",{children:[e.jsx("h1",{children:"Task Scheduler"}),e.jsxs("p",{children:["Add tasks and manage by ",e.jsx("strong",{children:"priority"}),". Save, search, filter, sort—stay sane."]})]}),e.jsxs(o.Badges,{children:[e.jsx("span",{className:"badge",children:"Validation"}),e.jsx("span",{className:"badge",children:"LocalStorage"}),e.jsx("span",{className:"badge",children:"Modals"})]})]}),e.jsxs(o.Layout,{children:[e.jsxs("div",{className:"left",children:[e.jsx(o.Card,{children:e.jsxs("form",{onSubmit:_,noValidate:!0,children:[e.jsx(o.SectionTitle,{children:j?"Edit Task":"New Task"}),e.jsxs(o.Grid,{children:[e.jsxs(o.Field,{invalid:!!h.title,children:[e.jsxs("label",{htmlFor:"title",children:["Title ",e.jsx("em",{children:"*"})]}),e.jsx("input",{id:"title",type:"text",placeholder:"e.g., Call client, write report",value:c.title,onChange:t=>N("title",t.target.value)}),e.jsx(o.Error,{children:h.title||" "})]}),e.jsxs(o.Field,{invalid:!!h.priority,children:[e.jsxs("label",{htmlFor:"priority",children:["Priority ",e.jsx("em",{children:"*"})]}),e.jsxs("select",{id:"priority",value:c.priority,onChange:t=>N("priority",t.target.value),children:[e.jsx("option",{value:"high",children:"High"}),e.jsx("option",{value:"medium",children:"Middle"}),e.jsx("option",{value:"low",children:"Low"})]}),e.jsx(o.Error,{children:h.priority||" "})]}),e.jsxs(o.Field,{invalid:!!h.due,children:[e.jsx("label",{htmlFor:"due",children:"Due date"}),e.jsx("input",{id:"due",type:"date",value:c.due,onChange:t=>N("due",t.target.value)}),e.jsx(o.Error,{children:h.due||" "})]}),e.jsxs(o.Field,{className:"span-2",invalid:!!h.description,children:[e.jsx("label",{htmlFor:"description",children:"Description"}),e.jsx("textarea",{id:"description",rows:3,placeholder:"Optional notes…",value:c.description,onChange:t=>N("description",t.target.value)}),e.jsx(o.Error,{children:h.description||" "})]})]}),e.jsxs(o.Actions,{children:[e.jsx("button",{type:"submit",className:"primary",children:j?"Update Task":"Add Task"}),j&&e.jsx("button",{type:"button",className:"ghost",onClick:D,children:"Cancel Edit"}),e.jsx("div",{className:"spacer"}),e.jsx("button",{type:"button",className:"ghost danger",onClick:V,disabled:!d.length,children:"Clear All"})]})]})}),e.jsxs(o.Card,{children:[e.jsx(o.SectionTitle,{children:"Filters"}),e.jsxs(o.FilterBar,{children:[e.jsx("input",{type:"text",placeholder:"Search…",value:C,onChange:t=>H(t.target.value)}),e.jsxs("select",{value:S,onChange:t=>P(t.target.value),children:[e.jsx("option",{value:"open",children:"Open"}),e.jsx("option",{value:"done",children:"Done"}),e.jsx("option",{value:"all",children:"All"})]}),e.jsxs("select",{value:v,onChange:t=>q(t.target.value),children:[e.jsx("option",{value:"priority",children:"Sort: Priority"}),e.jsx("option",{value:"dueAsc",children:"Sort: Due (Asc)"}),e.jsx("option",{value:"dueDesc",children:"Sort: Due (Desc)"}),e.jsx("option",{value:"created",children:"Sort: Created"})]}),e.jsxs("div",{className:"stats",children:[e.jsxs("span",{children:["Total: ",F.total]}),e.jsxs("span",{children:["Open: ",F.open]}),e.jsxs("span",{children:["Done: ",F.done]})]})]})]})]}),e.jsx("div",{className:"right",children:e.jsx(o.Board,{children:["high","medium","low"].map(t=>e.jsxs(o.Column,{children:[e.jsxs("div",{className:`col-head ${t}`,children:[e.jsx("strong",{children:t==="high"?"High":t==="medium"?"Middle":"Low"}),e.jsx("span",{children:E[t].length})]}),e.jsx("div",{className:"col-body",children:E[t].length===0?e.jsx(o.Empty,{children:"Nothing here."}):E[t].map(r=>e.jsxs(o.TaskCard,{"data-done":r.done?"1":"0",children:[e.jsxs("div",{className:"row-1",children:[e.jsxs("label",{className:"check",children:[e.jsx("input",{type:"checkbox",checked:!!r.done,onChange:()=>G(r.id)}),e.jsx("span",{})]}),e.jsx("div",{className:"title",title:r.title,children:r.title})]}),r.description&&e.jsx("div",{className:"desc",children:r.description}),e.jsxs("div",{className:"row-2",children:[e.jsxs("div",{className:"meta",children:[r.due?e.jsxs("span",{className:`due ${L(r.due)&&!r.done?"overdue":""}`,children:["Due ",r.due]}):e.jsx("span",{className:"due none",children:"No due"}),e.jsx("span",{className:`prio ${r.priority}`,children:r.priority})]}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{onClick:()=>Y(r),children:"Edit"}),e.jsx("button",{className:"danger",onClick:()=>J(r.id),children:"Delete"})]})]})]},r.id))})]},t))})})]}),b.open&&e.jsx(o.ModalOverlay,{onClick:()=>w({open:!1,type:"",payload:null,title:"",body:""}),children:e.jsxs(o.Modal,{onClick:t=>t.stopPropagation(),children:[e.jsx("h3",{children:b.title}),e.jsx("p",{children:b.body}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{className:"ghost",onClick:()=>w({open:!1,type:"",payload:null,title:"",body:""}),children:"Cancel"}),e.jsx("button",{className:"danger",onClick:W,children:b.type==="clear-all"?"Delete All":"Delete"})]})]})})]})};export{te as default};
