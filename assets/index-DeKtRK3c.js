import{d,f as ve,r as u,j as e}from"./index-BA60W61Y.js";const S="var(--bg)",C="var(--card)",g="var(--text)",k="var(--muted)",f="var(--border)",j="var(--radius)",H="var(--shadow)",A="var(--accent)",F="var(--danger, #e5484d)",be=ve`
  @media print {
    /* hide everything */
    body * { visibility: hidden !important; }

    /* show only the list card */
    .ams-print-target, .ams-print-target * { visibility: visible !important; }
    .ams-print-target {
      position: absolute !important;
      left: 0; top: 0; width: 100%;
    }
  }

  @page { size: auto; margin: 12mm; }
`,a={Wrapper:d.div`
        color: ${g};
        background: ${S};
        min-height: 100%;
        padding: 16px;
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
    `,Header:d.div`
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        gap: 16px;
        margin-bottom: 12px;
        h1 {
            margin: 0 0 6px 0;
            font-size: 20px;
            line-height: 1.2;
        }
        p {
            margin: 0;
            color: ${k};
            font-size: 14px;
        }
    `,Badges:d.div`
        display: flex;
        gap: 8px;
        .badge {
            background: ${C};
            border: 1px solid ${f};
            padding: 6px 10px;
            border-radius: 999px;
            box-shadow: ${H};
            font-size: 12px;
        }
    `,Layout:d.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 1.2fr 1.8fr;
        @media (max-width: 1080px) {
            grid-template-columns: 1fr;
        }
    `,Card:d.div`
        background: ${C};
        border: 1px solid ${f};
        border-radius: ${j};
        box-shadow: ${H};
        padding: 16px;
    `,SectionTitle:d.h2`
        margin: 0 0 12px 0;
        font-size: 16px;
        font-weight: 600;
    `,Grid:d.div`
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
        @media (max-width: 720px) {
            grid-template-columns: 1fr;
        }
    `,Field:d.div`
        display: grid;
        gap: 6px;

        &.span2 {
            grid-column: span 2;
            @media (max-width: 720px) {
                grid-column: span 1;
            }
        }

        label {
            font-size: 13px;
            color: ${g};
            display: inline-flex;
            gap: 6px;
            align-items: center;
            em {
                font-style: normal;
                color: ${F};
            }
        }

        input[type="text"],
        input[type="email"],
        input[type="tel"],
        input[type="date"],
        input[type="time"],
        textarea,
        select {
            width: 100%;
            border: 1px solid ${f};
            background: ${S};
            color: ${g};
            border-radius: calc(${j} - 2px);
            padding: 10px 12px;
            font: inherit;
            outline: none;
            transition: border-color 0.15s ease;
        }
        textarea {
            resize: vertical;
        }

        input:focus,
        select:focus,
        textarea:focus {
            border-color: ${A};
        }

        ${o=>o.invalid&&`input, select, textarea { border-color: ${F}; }`}
    `,Error:d.div`
        min-height: 16px;
        font-size: 12px;
        color: ${F};
    `,RowHint:d.div`
        display: flex;
        justify-content: flex-end;
        .muted {
            color: ${k};
            font-size: 12px;
        }
    `,Actions:d.div`
        margin-top: 16px;
        display: flex;
        gap: 10px;
        align-items: center;
        button {
            appearance: none;
            border: 1px solid ${f};
            background: ${C};
            color: ${g};
            padding: 10px 14px;
            border-radius: ${j};
            cursor: pointer;
            font: inherit;
            transition: transform 0.02s ease-in-out, border-color 0.15s ease;
            &:hover {
                border-color: ${A};
            }
            &:active {
                transform: translateY(1px);
            }
        }
        .ghost {
            background: ${S};
        }
    `,Side:d.div`
        display: grid;
        gap: 16px;
    `,Filters:d.div`
        display: grid;
        grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
        gap: 10px;
        margin-bottom: 10px;

        input[type="text"],
        input[type="date"],
        select {
            appearance: none;
            width: 100%;
            border: 1px solid ${f};
            background: ${S};
            color: ${g};
            border-radius: calc(${j} - 2px);
            padding: 10px 12px;
            font: inherit;
            outline: none;
            transition: border-color 0.15s ease, background 0.15s ease;
        }

        input::placeholder {
            color: ${k};
            opacity: 0.9;
        }
        input:focus,
        select:focus {
            border-color: ${A};
        }

        input[type="text"] {
            min-width: 200px;
        }

        @media (max-width: 980px) {
            grid-template-columns: 1fr 1fr;
        }
    `,ToolRow:d.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;

        .left,
        .right {
            display: flex;
            align-items: center;
            gap: 8px;
        }

        button,
        label.import {
            appearance: none;
            border: 1px solid ${f};
            background: ${C};
            color: ${g};
            padding: 8px 12px;
            border-radius: ${j};
            cursor: pointer;
            font: inherit;
            transition: border-color 0.15s ease;
            &:hover {
                border-color: ${A};
            }
        }

        .danger {
            border-color: ${F};
            &:hover {
                border-color: ${F};
            }
        }

        label.import {
            position: relative;
            overflow: hidden;
        }
        label.import input {
            position: absolute;
            inset: 0;
            opacity: 0;
            cursor: pointer;
        }
    `,Empty:d.div`
        color: ${k};
        font-size: 14px;
    `,GroupHeader:d.div`
        margin: 12px 0 6px 0;
        font-weight: 600;
        font-size: 14px;
        color: ${g};
    `,Table:d.div`
        border: 1px solid ${f};
        border-radius: ${j};
        overflow: hidden;

        .tr {
            display: grid;
            grid-template-columns: 140px 1.2fr 140px 140px 140px 1fr 170px;
        }
        .th,
        .td {
            border-bottom: 1px solid ${f};
            padding: 10px 12px;
        }
        .thead .tr {
            background: ${S};
            font-weight: 600;
        }
        .tbody .tr:last-child .td {
            border-bottom: none;
        }

        .td select {
            width: 100%;
            border: 1px solid ${f};
            background: ${S};
            color: ${g};
            border-radius: calc(${j} - 2px);
            padding: 6px 8px;
            font: inherit;
        }

        .td .primary {
            font-weight: 600;
        }
        .td .muted {
            color: ${k};
        }
        .td .small {
            font-size: 12px;
        }
        .td .ellipsis {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .td.actions {
            display: flex;
            align-items: flex-start; /* <-- top align */
            gap: 8px;
        }
        .td.actions button {
            appearance: none;
            border: 1px solid ${f};
            background: ${C};
            color: ${g};
            padding: 6px 10px;
            border-radius: ${j};
            cursor: pointer;
            font: inherit;
            &:hover {
                border-color: ${A};
            }
        }
        .td.actions .danger {
            border-color: ${F};
            &:hover {
                border-color: ${F};
            }
        }

        /* hide action controls when printing */
        @media print {
            .th.actions,
            .td.actions {
                display: none !important;
            }
        }

        @media (max-width: 980px) {
            .tr {
                grid-template-columns: 120px 1fr 120px 120px 120px 1fr 140px;
            }
        }
        @media (max-width: 720px) {
            .tr {
                grid-template-columns: 110px 1fr 110px 110px 110px 1fr 120px;
            }
        }
    `,Modal:d.div`
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.4);
        display: grid;
        place-items: center;
        z-index: 1000;
    `,ModalCard:d.div`
        width: min(520px, 92vw);
        background: ${C};
        color: ${g};
        border: 1px solid ${f};
        border-radius: ${j};
        box-shadow: ${H};
        padding: 16px;
        h3 {
            margin: 0 0 6px 0;
            font-size: 16px;
        }
        p {
            margin: 0 0 12px 0;
            color: ${k};
            font-size: 14px;
        }
    `,ModalActions:d.div`
        display: flex;
        justify-content: flex-end;
        gap: 8px;
        button {
            appearance: none;
            border: 1px solid ${f};
            background: ${C};
            color: ${g};
            padding: 8px 12px;
            border-radius: ${j};
            cursor: pointer;
            font: inherit;
            &:hover {
                border-color: ${A};
            }
        }
        .ghost {
            background: ${S};
        }
    `,PrintOnly:be},ee="appointmentManagement_records_v1",te=["Unassigned","Ashish","Neha","Rahul","Priya","Vikram"],je=["Consultation","Demo","Support","Delivery","Follow-up"],J=["Scheduled","Confirmed","Completed","Cancelled"],re={id:null,date:"",start:"",end:"",clientName:"",phone:"",email:"",staff:"Unassigned",service:"Consultation",status:"Scheduled",notes:""},M={nameMin:3,notesMax:300},ne=o=>String(o||"").replace(/\s+/g," ").trim(),ye=o=>!o||/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o),$e=o=>!o||/^[6-9]\d{9}$/.test(o),y=o=>{const[c,x]=String(o||"00:00").split(":").map(l=>+l||0);return c*60+x},ae=o=>o||"--:--",we=()=>`apt_${Date.now().toString(36)}_${Math.random().toString(36).slice(2,7)}`,Ne=(o,c)=>{if(o.date!==c.date||o.staff!==c.staff)return!1;const x=y(o.start),l=y(o.end),w=y(c.start),p=y(c.end);return x<p&&w<l};function Se({open:o,title:c="Confirm",message:x,confirmText:l="Yes",cancelText:w="No",onConfirm:p,onClose:E}){return o?e.jsx(a.Modal,{role:"dialog","aria-modal":"true","aria-label":c,children:e.jsxs(a.ModalCard,{children:[e.jsx("h3",{children:c}),x&&e.jsx("p",{className:"muted",children:x}),e.jsxs(a.ModalActions,{children:[e.jsx("button",{onClick:E,className:"ghost",children:w}),e.jsx("button",{onClick:p,children:l})]})]})}):null}const Fe=()=>{const o=u.useRef(null),[c,x]=u.useState(()=>{try{return JSON.parse(localStorage.getItem(ee)||"[]")}catch{return[]}}),[l,w]=u.useState(re),[p,E]=u.useState({}),[ie,B]=u.useState({}),[T,V]=u.useState(null),[q,_]=u.useState(""),[O,Y]=u.useState(""),[R,K]=u.useState(""),[z,W]=u.useState(""),[D,Q]=u.useState(""),[N,I]=u.useState({open:!1,payload:null,mode:""});u.useEffect(()=>{try{localStorage.setItem(ee,JSON.stringify(c))}catch{}},[c]);function U(t,r,n){const i=typeof r=="string"?ne(r):r;switch(t){case"clientName":return i?i.length<M.nameMin?`Name must be at least ${M.nameMin} characters.`:"":"Client name is required.";case"date":return i?"":"Date is required.";case"start":return i?n.end&&y(i)>=y(n.end)?"Start must be before end.":"":"Start time is required.";case"end":return i?n.start&&y(n.start)>=y(i)?"End must be after start.":"":"End time is required.";case"phone":return $e(i)?"":"Phone must be 10-digit Indian number.";case"email":return ye(i)?"":"Enter a valid email.";case"staff":return i?"":"Pick a staff.";case"service":return i?"":"Pick a service.";case"status":return i?"":"Pick a status.";case"notes":return i.length>M.notesMax?`Notes must be under ${M.notesMax} chars.`:"";default:return""}}function se(t){const r={};return Object.keys(t).forEach(n=>{if(n==="id")return;const i=U(n,t[n],t);i&&(r[n]=i)}),!r.date&&!r.start&&!r.end&&!r.staff&&c.find(i=>i.id!==t.id&&Ne(i,t))&&(r.start=r.start||"Overlaps with another appointment.",r.end=r.end||"Overlaps with another appointment."),r}const v=(t,r)=>{w(n=>{const i={...n,[t]:r},h=U(t,r,i);return E(m=>({...m,[t]:h})),i})},b=t=>{const{name:r}=t.target;B(n=>({...n,[r]:!0})),E(n=>({...n,[r]:U(r,l[r],l)}))},oe=t=>{t.preventDefault();const r={...l,id:T||l.id||we()},n=se(r);if(E(n),Object.values(n).some(Boolean)){requestAnimationFrame(()=>{var $;const h=Object.keys(n).find(ge=>n[ge]);if(!h)return;const m=($=o.current)==null?void 0:$.querySelector(`[name="${h}"]`);if(m)try{m.scrollIntoView({behavior:"smooth",block:"center"}),setTimeout(()=>m.focus({preventScroll:!0}),120)}catch{m.focus()}});return}x(T?h=>h.map(m=>m.id===T?{...r}:m):h=>[{...r},...h].sort(P)),G()},G=()=>{w(re),E({}),B({}),V(null)},le=t=>{const r=c.find(n=>n.id===t);r&&(w({...r}),V(t),window.scrollTo({top:0,behavior:"smooth"}))},de=t=>I({open:!0,mode:"delete",payload:t}),ce=()=>I({open:!0,mode:"clear",payload:null}),pe=()=>{N.mode==="delete"&&N.payload?x(t=>t.filter(r=>r.id!==N.payload)):N.mode==="clear"&&x([]),I({open:!1,payload:null,mode:""})},me=()=>I({open:!1,payload:null,mode:""}),P=(t,r)=>t.date===r.date?y(t.start)-y(r.start):t.date<r.date?-1:1,L=u.useMemo(()=>{let t=[...c];z&&(t=t.filter(n=>n.date>=z)),D&&(t=t.filter(n=>n.date<=D)),O&&(t=t.filter(n=>n.staff===O)),R&&(t=t.filter(n=>n.status===R));const r=ne(q).toLowerCase();return r&&(t=t.filter(n=>[n.clientName,n.phone,n.email,n.service,n.staff,n.notes].map(i=>String(i||"").toLowerCase()).some(i=>i.includes(r)))),t.sort(P),t},[c,z,D,O,R,q]),X=u.useMemo(()=>{var r;const t={};for(const n of L)(t[r=n.date]||(t[r]=[])).push(n);return Object.keys(t).forEach(n=>t[n].sort(P)),t},[L]),ue=Object.keys(X).sort(),he=()=>window.print(),xe=()=>{const t=JSON.stringify(c,null,2),r=new Blob([t],{type:"application/json"}),n=URL.createObjectURL(r),i=document.createElement("a");i.href=n,i.download="appointments.json",i.click(),URL.revokeObjectURL(n)},fe=async t=>{var n;const r=(n=t.target.files)==null?void 0:n[0];if(r)try{const i=await r.text(),h=JSON.parse(i);if(!Array.isArray(h))throw new Error("Invalid file");const m=h.filter($=>$&&$.id&&$.date&&$.start&&$.end&&$.clientName);x(m.sort(P)),t.target.value=""}catch{alert("Import failed. Ensure valid JSON exported from this app."),t.target.value=""}},Z=t=>{if(!t)return"";const[r,n,i]=t.split("-").map(Number);return new Date(r,(n||1)-1,i||1).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"})},s=t=>ie[t]&&p[t];return e.jsxs(a.Wrapper,{children:[e.jsx(a.PrintOnly,{}),e.jsxs(a.Header,{children:[e.jsxs("div",{children:[e.jsx("h1",{children:"Appointment Management System"}),e.jsx("p",{children:"Schedule, manage, and view appointments. All data stays in your browser."})]}),e.jsxs(a.Badges,{children:[e.jsx("span",{className:"badge",children:"LocalStorage"}),e.jsx("span",{className:"badge",children:"Validation"}),e.jsx("span",{className:"badge",children:"Print"})]})]}),e.jsxs(a.Layout,{children:[e.jsxs(a.Card,{as:"form",ref:o,onSubmit:oe,noValidate:!0,children:[e.jsx(a.SectionTitle,{children:T?"Edit Appointment":"New Appointment"}),e.jsxs(a.Grid,{children:[e.jsxs(a.Field,{invalid:!!s("clientName"),children:[e.jsxs("label",{htmlFor:"clientName",children:["Client Name ",e.jsx("em",{children:"*"})]}),e.jsx("input",{id:"clientName",name:"clientName",type:"text",value:l.clientName,onChange:t=>v("clientName",t.target.value),onBlur:b,placeholder:"e.g., John Doe","aria-invalid":!!s("clientName")}),e.jsx(a.Error,{role:"alert",children:s("clientName")&&p.clientName})]}),e.jsxs(a.Field,{invalid:!!s("date"),children:[e.jsxs("label",{htmlFor:"date",children:["Date ",e.jsx("em",{children:"*"})]}),e.jsx("input",{id:"date",name:"date",type:"date",value:l.date,onChange:t=>v("date",t.target.value),onBlur:b,"aria-invalid":!!s("date")}),e.jsx(a.Error,{role:"alert",children:s("date")&&p.date})]}),e.jsxs(a.Field,{invalid:!!s("start"),children:[e.jsxs("label",{htmlFor:"start",children:["Start Time ",e.jsx("em",{children:"*"})]}),e.jsx("input",{id:"start",name:"start",type:"time",value:l.start,onChange:t=>v("start",t.target.value),onBlur:b,"aria-invalid":!!s("start")}),e.jsx(a.Error,{role:"alert",children:s("start")&&p.start})]}),e.jsxs(a.Field,{invalid:!!s("end"),children:[e.jsxs("label",{htmlFor:"end",children:["End Time ",e.jsx("em",{children:"*"})]}),e.jsx("input",{id:"end",name:"end",type:"time",value:l.end,onChange:t=>v("end",t.target.value),onBlur:b,"aria-invalid":!!s("end")}),e.jsx(a.Error,{role:"alert",children:s("end")&&p.end})]}),e.jsxs(a.Field,{invalid:!!s("phone"),children:[e.jsx("label",{htmlFor:"phone",children:"Phone"}),e.jsx("input",{id:"phone",name:"phone",type:"tel",inputMode:"numeric",placeholder:"9876543210",value:l.phone,onChange:t=>v("phone",t.target.value),onBlur:b,"aria-invalid":!!s("phone")}),e.jsx(a.Error,{role:"alert",children:s("phone")&&p.phone})]}),e.jsxs(a.Field,{invalid:!!s("email"),children:[e.jsx("label",{htmlFor:"email",children:"Email"}),e.jsx("input",{id:"email",name:"email",type:"email",placeholder:"user@example.com",value:l.email,onChange:t=>v("email",t.target.value),onBlur:b,"aria-invalid":!!s("email")}),e.jsx(a.Error,{role:"alert",children:s("email")&&p.email})]}),e.jsxs(a.Field,{invalid:!!s("staff"),children:[e.jsxs("label",{htmlFor:"staff",children:["Staff ",e.jsx("em",{children:"*"})]}),e.jsx("select",{id:"staff",name:"staff",value:l.staff,onChange:t=>v("staff",t.target.value),onBlur:b,"aria-invalid":!!s("staff"),children:te.map(t=>e.jsx("option",{value:t,children:t},t))}),e.jsx(a.Error,{role:"alert",children:s("staff")&&p.staff})]}),e.jsxs(a.Field,{invalid:!!s("service"),children:[e.jsxs("label",{htmlFor:"service",children:["Service ",e.jsx("em",{children:"*"})]}),e.jsx("select",{id:"service",name:"service",value:l.service,onChange:t=>v("service",t.target.value),onBlur:b,"aria-invalid":!!s("service"),children:je.map(t=>e.jsx("option",{value:t,children:t},t))}),e.jsx(a.Error,{role:"alert",children:s("service")&&p.service})]}),e.jsxs(a.Field,{invalid:!!s("status"),children:[e.jsxs("label",{htmlFor:"status",children:["Status ",e.jsx("em",{children:"*"})]}),e.jsx("select",{id:"status",name:"status",value:l.status,onChange:t=>v("status",t.target.value),onBlur:b,"aria-invalid":!!s("status"),children:J.map(t=>e.jsx("option",{value:t,children:t},t))}),e.jsx(a.Error,{role:"alert",children:s("status")&&p.status})]}),e.jsxs(a.Field,{className:"span2",invalid:!!s("notes"),children:[e.jsx("label",{htmlFor:"notes",children:"Notes"}),e.jsx("textarea",{id:"notes",name:"notes",rows:4,value:l.notes,onChange:t=>v("notes",t.target.value),onBlur:b,placeholder:"Context, preferences, address, etc.","aria-invalid":!!s("notes")}),e.jsx(a.RowHint,{children:e.jsxs("span",{className:"muted",children:[l.notes.length,"/",M.notesMax]})}),e.jsx(a.Error,{role:"alert",children:s("notes")&&p.notes})]})]}),e.jsx(a.Actions,{children:T?e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"submit",children:"Update"}),e.jsx("button",{type:"button",className:"ghost",onClick:G,children:"Cancel Edit"})]}):e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"submit",children:"Add Appointment"}),e.jsx("button",{type:"button",className:"ghost",onClick:G,children:"Reset"})]})})]}),e.jsxs(a.Side,{children:[e.jsxs(a.Card,{children:[e.jsx(a.SectionTitle,{children:"Filters"}),e.jsxs(a.Filters,{children:[e.jsx("input",{type:"text",placeholder:"Search (name/phone/email/staff/service/notes)…",value:q,onChange:t=>_(t.target.value)}),e.jsxs("select",{value:O,onChange:t=>Y(t.target.value),children:[e.jsx("option",{value:"",children:"All Staff"}),te.map(t=>e.jsx("option",{value:t,children:t},t))]}),e.jsxs("select",{value:R,onChange:t=>K(t.target.value),children:[e.jsx("option",{value:"",children:"All Statuses"}),J.map(t=>e.jsx("option",{value:t,children:t},t))]}),e.jsx("input",{type:"date",value:z,onChange:t=>W(t.target.value)}),e.jsx("input",{type:"date",value:D,onChange:t=>Q(t.target.value)})]}),e.jsxs(a.ToolRow,{children:[e.jsx("div",{className:"left",children:e.jsx("button",{type:"button",className:"ghost",onClick:()=>{_(""),Y(""),K(""),W(""),Q("")},children:"Clear Filters"})}),e.jsxs("div",{className:"right",children:[e.jsxs("label",{className:"import",children:[e.jsx("input",{type:"file",accept:"application/json",onChange:fe}),"Import"]}),e.jsx("button",{type:"button",className:"ghost",onClick:xe,children:"Export"}),e.jsx("button",{type:"button",onClick:he,children:"Print"}),e.jsx("button",{type:"button",className:"danger",onClick:ce,children:"Clear All"})]})]})]}),e.jsxs(a.Card,{className:"ams-print-target",children:[e.jsxs(a.SectionTitle,{children:["Appointments ",e.jsxs("small",{children:["(",L.length,")"]})]}),L.length===0&&e.jsx(a.Empty,{children:"Nothing to show. Add a few appointments or change filters."}),ue.map(t=>e.jsxs("div",{children:[e.jsx(a.GroupHeader,{children:Z(t)}),e.jsxs(a.Table,{role:"table","aria-label":`Appointments for ${Z(t)}`,children:[e.jsx("div",{className:"thead",role:"rowgroup",children:e.jsxs("div",{className:"tr",role:"row",children:[e.jsx("div",{className:"th",role:"columnheader",children:"Time"}),e.jsx("div",{className:"th",role:"columnheader",children:"Client"}),e.jsx("div",{className:"th",role:"columnheader",children:"Staff"}),e.jsx("div",{className:"th",role:"columnheader",children:"Service"}),e.jsx("div",{className:"th",role:"columnheader",children:"Status"}),e.jsx("div",{className:"th",role:"columnheader",children:"Notes"}),e.jsx("div",{className:"th actions",role:"columnheader",children:"Actions"})]})}),e.jsx("div",{className:"tbody",role:"rowgroup",children:X[t].map(r=>e.jsxs("div",{className:"tr",role:"row",children:[e.jsxs("div",{className:"td",role:"cell",children:[ae(r.start),"–",ae(r.end)]}),e.jsxs("div",{className:"td",role:"cell",children:[e.jsx("div",{className:"primary",children:r.clientName}),e.jsxs("div",{className:"muted small",children:[r.phone?`📞 ${r.phone}`:""," ",r.email?` · ✉️ ${r.email}`:""]})]}),e.jsx("div",{className:"td",role:"cell",children:r.staff}),e.jsx("div",{className:"td",role:"cell",children:r.service}),e.jsx("div",{className:"td",role:"cell",children:e.jsx("select",{value:r.status,onChange:n=>{const i=n.target.value;x(h=>h.map(m=>m.id===r.id?{...m,status:i}:m))},children:J.map(n=>e.jsx("option",{value:n,children:n},n))})}),e.jsx("div",{className:"td",role:"cell",children:e.jsx("span",{title:r.notes||"",className:"ellipsis",children:r.notes||"-"})}),e.jsxs("div",{className:"td actions",role:"cell",children:[e.jsx("button",{type:"button",className:"ghost",onClick:()=>le(r.id),children:"Edit"}),e.jsx("button",{type:"button",className:"danger",onClick:()=>de(r.id),children:"Delete"})]})]},r.id))})]})]},t))]})]})]}),e.jsx(Se,{open:N.open,title:N.mode==="clear"?"Clear All Appointments":"Delete Appointment",message:N.mode==="clear"?"This will permanently remove all appointments from your browser.":"This will remove the selected appointment.",confirmText:"Confirm",cancelText:"Cancel",onConfirm:pe,onClose:me})]})};export{Fe as default};
