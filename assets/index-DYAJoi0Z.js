import{d as g,r as f,j as e}from"./index-B4bp9Q2x.js";const N="var(--bg)",C="var(--card)",S="var(--text)",A="var(--muted)",h="var(--border)",j="var(--radius)",V="var(--shadow)",E="var(--accent)",k="var(--danger, #e5484d)",n={Wrapper:g.div`
        background: ${N};
        color: ${S};
        min-height: 100%;
        padding: 16px;
        /* requested constraint */
        max-width: 1440px;
        margin: 0 auto;
        display: grid;
        gap: 16px;
    `,Header:g.div`
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        gap: 12px;

        h1 {
            margin: 0 0 6px 0;
            font-size: 20px;
        }
        p {
            margin: 0;
            color: ${A};
            font-size: 14px;
        }
    `,HeaderActions:g.div`
        display: flex;
        gap: 8px;
        button {
            border: 1px solid ${h};
            background: ${C};
            color: ${S};
            border-radius: ${j};
            padding: 8px 12px;
            cursor: pointer;
            &:hover {
                border-color: ${E};
            }
            &.ghost {
                background: ${N};
            }
        }
    `,Stats:g.div`
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 12px;
        @media (max-width: 900px) {
            grid-template-columns: repeat(2, 1fr);
        }
    `,Stat:g.div`
        background: ${C};
        border: 1px solid ${h};
        border-radius: ${j};
        box-shadow: ${V};
        padding: 12px;
        display: grid;
        gap: 6px;
        .label {
            color: ${A};
            font-size: 12px;
        }
        .value {
            font-size: 18px;
            font-weight: 600;
        }
    `,Layout:g.div`
        display: grid;
        grid-template-columns: 1.2fr 2fr;
        gap: 16px;
        @media (max-width: 1200px) {
            grid-template-columns: 1fr;
        }
    `,Card:g.div`
        background: ${C};
        border: 1px solid ${h};
        border-radius: ${j};
        box-shadow: ${V};
        padding: 14px;
    `,SectionTitle:g.h2`
        margin: 0 0 10px 0;
        font-size: 15px;
        font-weight: 600;
    `,Grid:g.div`
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
        @media (max-width: 720px) {
            grid-template-columns: 1fr;
        }
        .span2 {
            grid-column: span 2;
            @media (max-width: 720px) {
                grid-column: span 1;
            }
        }
    `,Field:g.div`
        display: grid;
        gap: 6px;

        label {
            font-size: 13px;
            em {
                color: ${k};
                font-style: normal;
            }
        }
        input,
        select,
        textarea {
            width: 100%;
            border: 1px solid ${h};
            background: ${N};
            color: ${S};
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
            border-color: ${E};
        }

        ${i=>i.invalid&&`
      input, select, textarea { border-color: ${k}; }
    `}
    `,Error:g.div`
        min-height: 16px;
        color: ${k};
        font-size: 12px;
    `,Actions:g.div`
        margin-top: 12px;
        display: flex;
        gap: 8px;
        align-items: center;
        .spacer {
            flex: 1;
        }
        button {
            border: 1px solid ${h};
            background: ${C};
            color: ${S};
            padding: 10px 14px;
            border-radius: ${j};
            cursor: pointer;
            &:hover {
                border-color: ${E};
            }
            &.danger {
                border-color: ${k};
                color: ${k};
            }
            &.ghost {
                background: ${N};
            }
        }
    `,Toolbar:g.div`
        display: flex;
        gap: 8px;
        align-items: center;
        margin-bottom: 10px;
        .search {
            flex: 1;
            border: 1px solid ${h};
            background: ${N};
            color: ${S};
            border-radius: ${j};
            padding: 10px 12px;
            outline: none;
        }
        select {
            border: 1px solid ${h};
            background: ${N};
            color: ${S};
            border-radius: ${j};
            padding: 10px 12px;
        }
    `,List:g.div`
        display: grid;
        gap: 12px;
    `,ProjectHeader:g.div`
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 12px;
        .titleArea {
            display: grid;
            gap: 6px;
        }
        h3 {
            margin: 0;
            font-size: 16px;
        }
        .meta {
            display: flex;
            gap: 8px;
            align-items: center;
            flex-wrap: wrap;
        }
        .tag {
            font-size: 12px;
            padding: 4px 8px;
            border-radius: 999px;
            background: ${N};
            border: 1px solid ${h};
        }
        .status {
            font-size: 12px;
            padding: 4px 8px;
            border-radius: 999px;
            border: 1px solid ${h};
        }
        .status.endingsoon {
            border-color: var(--warning, #e6a700);
            color: var(--warning, #e6a700);
        }
        .status.funded {
            border-color: var(--success, #22a06b);
            color: var(--success, #22a06b);
        }
        .status.active {
            border-color: ${E};
            color: ${E};
        }
        .status.ended {
            border-color: ${A};
            color: ${A};
        }

        .archived {
            font-size: 12px;
            padding: 4px 8px;
            border-radius: 6px;
            border: 1px dashed ${h};
            color: ${A};
        }

        .actions {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            button {
                border: 1px solid ${h};
                background: ${C};
                color: ${S};
                padding: 8px 12px;
                border-radius: ${j};
                cursor: pointer;
                &:hover {
                    border-color: ${E};
                }
                &.ghost {
                    background: ${N};
                }
                &.danger {
                    border-color: ${k};
                    color: ${k};
                }
            }
        }
    `,ProjectBody:g.div`
        margin-top: 12px;
        display: grid;
        grid-template-columns: 240px 1fr;
        gap: 12px;
        @media (max-width: 900px) {
            grid-template-columns: 1fr;
        }
    `,ProjectMedia:g.div`
        .placeholder {
            width: 100%;
            aspect-ratio: 4/3;
            background: linear-gradient(
                135deg,
                rgba(0, 0, 0, 0.08),
                transparent
            );
            border: 1px dashed ${h};
            border-radius: ${j};
        }
        img {
            display: block;
            width: 100%;
            height: auto;
            aspect-ratio: 4/3;
            object-fit: cover;
            border: 1px solid ${h};
            border-radius: ${j};
            background: ${N};
        }
    `,ProjectMain:g.div`
        display: grid;
        gap: 10px;
        .desc {
            margin: 0;
            color: ${S};
        }
    `,Progress:g.div`
        display: grid;
        gap: 6px;
        .bar {
            height: 10px;
            background: ${N};
            border: 1px solid ${h};
            border-radius: 999px;
            overflow: hidden;
        }
        .fill {
            height: 100%;
            background: ${E};
            width: 0%;
        }
        .labels {
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: ${A};
            font-size: 12px;
        }
    `,RowInfo:g.div`
        display: flex;
        gap: 16px;
        flex-wrap: wrap;
        color: ${A};
        font-size: 12px;
    `,Pledge:g.form`
        margin-top: 6px;
        .grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
            @media (max-width: 720px) {
                grid-template-columns: 1fr;
            }
            .span2 {
                grid-column: span 2;
                @media (max-width: 720px) {
                    grid-column: span 1;
                }
            }
        }
    `,Pledges:g.div`
        margin-top: 6px;
        display: grid;
        gap: 8px;
        .header {
            display: flex;
            align-items: center;
            gap: 8px;
        }
        h4 {
            margin: 0;
            font-size: 14px;
        }
        ul {
            list-style: none;
            margin: 0;
            padding: 0;
            display: grid;
            gap: 8px;
        }
        li {
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 8px;
            border: 1px solid ${h};
            border-radius: ${j};
            padding: 10px;
            background: ${N};
        }
        .left {
            display: grid;
            gap: 4px;
        }
        .name {
            font-weight: 600;
        }
        .msg {
            color: ${S};
        }
        .ts {
            color: ${A};
            font-size: 12px;
        }
        .right {
            display: grid;
            align-content: center;
            gap: 8px;
            justify-items: end;
        }
        .amt {
            font-weight: 700;
        }
        .danger.small {
            border: 1px solid ${k};
            color: ${k};
            background: ${C};
            padding: 6px 10px;
            border-radius: ${j};
            cursor: pointer;
        }
    `,Empty:g.div`
        border: 1px dashed ${h};
        border-radius: ${j};
        color: ${A};
        text-align: center;
        padding: 20px;
        background: ${C};
    `,Modal:g.div`
        position: fixed;
        inset: 0;
        display: grid;
        place-items: center;
        background: rgba(0, 0, 0, 0.4);
        z-index: 1000;

        .sheet {
            width: min(520px, 92vw);
            background: ${C};
            color: ${S};
            border: 1px solid ${h};
            border-radius: ${j};
            box-shadow: ${V};
            padding: 16px;
            display: grid;
            gap: 10px;
        }

        h3 {
            margin: 0;
            font-size: 16px;
        }
        p {
            margin: 0;
            color: ${A};
        }

        .actions {
            display: flex;
            gap: 8px;
            justify-content: flex-end;
            margin-top: 6px;
            button {
                border: 1px solid ${h};
                background: ${C};
                color: ${S};
                padding: 8px 12px;
                border-radius: ${j};
                cursor: pointer;
                &:hover {
                    border-color: ${E};
                }
                &.danger {
                    border-color: ${k};
                    color: ${k};
                }
                &.ghost {
                    background: ${N};
                }
            }
        }
    `},J="crowdfunding_projects_v1",R=new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}),D=()=>Math.random().toString(36).slice(2)+Date.now().toString(36);function ae(i){try{const d=new Date(i),p=new Intl.DateTimeFormat("en-US",{month:"short",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1,timeZone:"Asia/Kolkata"}).formatToParts(d),b=F=>{var z;return((z=p.find(T=>T.type===F))==null?void 0:z.value)||""};return`${b("month")} ${b("day")}, ${b("year")} ${b("hour")}:${b("minute")}:${b("second")} hrs`}catch{return""}}const ve=i=>/^(https?:\/\/)/i.test(i||""),ye=i=>{const d=new Date(i),p=new Date;return d.toString()!=="Invalid Date"&&d.getTime()>p.getTime()},$e=(i,d,p)=>Math.max(d,Math.min(p,i));function we(){try{const b=JSON.parse(localStorage.getItem(J)||"[]");if(b.length)return b}catch{}const i=new Date,d=b=>new Date(i.getTime()+b*864e5).toISOString(),p=[{id:D(),title:"Community Library Revamp",description:"Upgrade shelves, add kids corner, and digitize 2,000+ books for public access.",category:"Community",goal:25e4,deadline:d(20),image:"",createdAt:i.toISOString(),pledges:[{id:D(),name:"Ashish",amount:5e3,message:"Books + kids = ❤️",createdAt:d(-1)},{id:D(),name:"Neha",amount:12e3,message:"For the reading nook!",createdAt:d(-1)}],archived:!1},{id:D(),title:"Open-Source Tooling Fund",description:"Sponsor tests, docs, and DX enhancements for a suite of React utilities.",category:"Technology",goal:18e4,deadline:d(10),image:"",createdAt:i.toISOString(),pledges:[{id:D(),name:"Dev Patel",amount:9e3,message:"Ship it.",createdAt:d(-2)}],archived:!1},{id:D(),title:"School STEM Lab",description:"Robotics kits, 3D printer, and sensors to power hands-on STEM learning.",category:"Education",goal:4e5,deadline:d(35),image:"",createdAt:i.toISOString(),pledges:[],archived:!1}];try{localStorage.setItem(J,JSON.stringify(p))}catch{}return p}function P(i){return(i.pledges||[]).reduce((d,p)=>d+(Number(p.amount)||0),0)}function se(i){const d=Date.now(),p=new Date(i.deadline).getTime();return P(i)>=i.goal?"Funded":p<d?"Ended":Math.ceil((p-d)/864e5)<=5?"Ending Soon":"Active"}const Se=()=>{var Z,Q,ee,re,te;const[i,d]=f.useState(()=>we()),[p,b]=f.useState(""),[F,z]=f.useState("All"),[T,ne]=f.useState("All"),[G,ie]=f.useState("Newest"),[v,y]=f.useState(null),[x,_]=f.useState({title:"",description:"",category:"",goal:"",deadline:"",image:""}),[$,Y]=f.useState({}),[w,B]=f.useState({}),[oe,L]=f.useState({});f.useEffect(()=>{try{localStorage.setItem(J,JSON.stringify(i))}catch{}},[i]);const de=f.useMemo(()=>{const r=new Set(["Community","Education","Technology","Health","Arts"]);return i.forEach(t=>t.category&&r.add(t.category)),["All",...Array.from(r)]},[i]),O=f.useMemo(()=>{const r=i.length,t=i.reduce((l,c)=>l+P(c),0),a=i.reduce((l,c)=>l+(Number(c.goal)||0),0)||1,s=Math.round(t/a*100),o=new Set;return i.forEach(l=>(l.pledges||[]).forEach(c=>o.add(c.name||"Anonymous"))),{total:r,totalRaised:t,progressAvg:s,backers:o.size}},[i]),X=f.useMemo(()=>{let r=[...i];if(p.trim()){const t=p.trim().toLowerCase();r=r.filter(a=>a.title.toLowerCase().includes(t)||a.description.toLowerCase().includes(t)||a.category.toLowerCase().includes(t))}switch(F!=="All"&&(r=r.filter(t=>t.category===F)),T!=="All"&&(r=r.filter(t=>se(t)===T)),G){case"Ending Soon":r.sort((t,a)=>new Date(t.deadline)-new Date(a.deadline));break;case"Amount Raised":r.sort((t,a)=>P(a)-P(t));break;case"Goal":r.sort((t,a)=>a.goal-t.goal);break;case"Progress":r.sort((t,a)=>P(a)/a.goal-P(t)/t.goal);break;default:r.sort((t,a)=>new Date(a.createdAt)-new Date(t.createdAt))}return r},[i,p,F,T,G]);function H(r,t,a=x){const s=typeof t=="string"?t.trim():t;switch(r){case"title":return s?s.length<3?"Title must be at least 3 characters.":"":"Title is required.";case"description":return s?s.length<20?"Description should be at least 20 characters.":"":"Description is required.";case"category":return s?"":"Category is required.";case"goal":{const o=Number(s);return s?!Number.isFinite(o)||o<=0?"Goal must be a positive number.":o<1e3?"Keep a sensible minimum (≥ 1,000).":"":"Goal is required."}case"deadline":return s?ye(s)?"":"Deadline must be a future date.":"Deadline is required.";case"image":return s&&!ve(s)?"Image URL must start with http:// or https://":"";default:return""}}function le(r=x){const t={};return Object.keys(r).forEach(a=>{const s=H(a,r[a],r);s&&(t[a]=s)}),t}const I=r=>{const{name:t,value:a}=r.target;_(s=>{const o={...s,[t]:a};return B(l=>({...l,[t]:H(t,a,o)})),o})},M=r=>{const{name:t}=r.target;Y(a=>({...a,[t]:!0})),B(a=>({...a,[t]:H(t,x[t])}))},ce=r=>{r.preventDefault();const t=le(x);if(B(t),Object.values(t).some(Boolean)){const o=Object.keys(t).find(c=>t[c]),l=document.querySelector(`[name="${o}"]`);l==null||l.scrollIntoView({behavior:"smooth",block:"center"}),setTimeout(()=>l==null?void 0:l.focus({preventScroll:!0}),100);return}const s={id:D(),title:x.title.trim(),description:x.description.trim(),category:x.category.trim(),goal:Number(x.goal),deadline:new Date(x.deadline).toISOString(),image:x.image.trim(),createdAt:new Date().toISOString(),pledges:[],archived:!1};d(o=>[s,...o]),_({title:"",description:"",category:"",goal:"",deadline:"",image:""}),Y({}),B({})},q=r=>oe[r]||{name:"",amount:"",message:"",touched:{},errors:{}},U=(r,t,a)=>{const s=typeof t=="string"?t.trim():t;switch(r){case"name":return s?s.length<2?"Name too short.":"":"Name is required.";case"amount":{const o=Number(s);return s?!Number.isFinite(o)||o<=0?"Enter a positive amount.":o<100?"Minimum pledge is 100.":"":"Amount is required."}case"message":return s&&s.length>180?"Keep message under 180 chars.":"";default:return""}},W=(r,t,a)=>{L(s=>{const o=q(r),l={...o,[t]:a,errors:{...o.errors,[t]:U(t,a)}};return{...s,[r]:l}})},K=(r,t)=>{L(a=>{const s=q(r),o={...s,touched:{...s.touched,[t]:!0},errors:{...s.errors,[t]:U(t,s[t])}};return{...a,[r]:o}})},ge=(r,t)=>{t.preventDefault();const a=q(r),s=["name","amount","message"],o={};if(s.forEach(c=>{const u=U(c,a[c]);u&&(o[c]=u)}),Object.values(o).some(Boolean)){L(m=>({...m,[r]:{...a,errors:o,touched:{name:!0,amount:!0,message:!0}}}));const c=Object.keys(o).find(m=>o[m]),u=document.querySelector(`#pledge-${r}-${c}`);u==null||u.scrollIntoView({behavior:"smooth",block:"center"}),setTimeout(()=>u==null?void 0:u.focus({preventScroll:!0}),100);return}const l={id:D(),name:a.name.trim(),amount:Number(a.amount),message:a.message.trim(),createdAt:new Date().toISOString()};d(c=>c.map(u=>u.id===r?{...u,pledges:[l,...u.pledges||[]]}:u)),L(c=>({...c,[r]:{name:"",amount:"",message:"",touched:{},errors:{}}}))},ue=()=>y({type:"clearAll"}),me=()=>{d([]),y(null)},pe=r=>y({type:"deleteProject",payload:r}),he=()=>{const r=v==null?void 0:v.payload;if(!r)return y(null);d(t=>t.filter(a=>a.id!==r.id)),y(null)},xe=(r,t)=>y({type:"removePledge",payload:{proj:r,pledge:t}}),je=()=>{const{proj:r,pledge:t}=(v==null?void 0:v.payload)||{};if(!r||!t)return y(null);d(a=>a.map(s=>s.id===r.id?{...s,pledges:(s.pledges||[]).filter(o=>o.id!==t.id)}:s)),y(null)},be=r=>{d(t=>t.map(a=>a.id===r.id?{...a,archived:!a.archived}:a))},fe=r=>$e(Math.round(P(r)/(r.goal||1)*100),0,999);return e.jsxs(n.Wrapper,{children:[e.jsxs(n.Header,{children:[e.jsxs("div",{children:[e.jsx("h1",{children:"Crowdfunding App"}),e.jsx("p",{children:"Create projects with goals, accept pledges, and track progress. Everything stays in your browser."})]}),e.jsx(n.HeaderActions,{children:e.jsx("button",{className:"ghost",onClick:ue,disabled:!i.length,children:"Clear All"})})]}),e.jsxs(n.Stats,{children:[e.jsxs(n.Stat,{children:[e.jsx("span",{className:"label",children:"Projects"}),e.jsx("span",{className:"value",children:O.total})]}),e.jsxs(n.Stat,{children:[e.jsx("span",{className:"label",children:"Backers"}),e.jsx("span",{className:"value",children:O.backers})]}),e.jsxs(n.Stat,{children:[e.jsx("span",{className:"label",children:"Raised"}),e.jsx("span",{className:"value",children:R.format(O.totalRaised)})]}),e.jsxs(n.Stat,{children:[e.jsx("span",{className:"label",children:"Avg Progress"}),e.jsxs("span",{className:"value",children:[O.progressAvg,"%"]})]})]}),e.jsxs(n.Layout,{children:[e.jsxs(n.Card,{as:"form",onSubmit:ce,noValidate:!0,children:[e.jsx(n.SectionTitle,{children:"New Project"}),e.jsxs(n.Grid,{children:[e.jsxs(n.Field,{invalid:$.title&&!!w.title,children:[e.jsxs("label",{htmlFor:"title",children:["Title ",e.jsx("em",{children:"*"})]}),e.jsx("input",{id:"title",name:"title",value:x.title,onChange:I,onBlur:M,placeholder:"Community Library Revamp"}),e.jsx(n.Error,{children:$.title&&w.title})]}),e.jsxs(n.Field,{invalid:$.category&&!!w.category,children:[e.jsxs("label",{htmlFor:"category",children:["Category ",e.jsx("em",{children:"*"})]}),e.jsxs("select",{id:"category",name:"category",value:x.category,onChange:I,onBlur:M,children:[e.jsx("option",{value:"",children:"Select"}),e.jsx("option",{children:"Community"}),e.jsx("option",{children:"Education"}),e.jsx("option",{children:"Technology"}),e.jsx("option",{children:"Health"}),e.jsx("option",{children:"Arts"})]}),e.jsx(n.Error,{children:$.category&&w.category})]}),e.jsxs(n.Field,{className:"span2",invalid:$.description&&!!w.description,children:[e.jsxs("label",{htmlFor:"description",children:["Description ",e.jsx("em",{children:"*"})]}),e.jsx("textarea",{id:"description",name:"description",rows:4,value:x.description,onChange:I,onBlur:M,placeholder:"What is this project about? Who benefits? What impact?"}),e.jsx(n.Error,{children:$.description&&w.description})]}),e.jsxs(n.Field,{invalid:$.goal&&!!w.goal,children:[e.jsxs("label",{htmlFor:"goal",children:["Goal (INR) ",e.jsx("em",{children:"*"})]}),e.jsx("input",{id:"goal",name:"goal",type:"number",inputMode:"numeric",value:x.goal,onChange:I,onBlur:M,placeholder:"100000"}),e.jsx(n.Error,{children:$.goal&&w.goal})]}),e.jsxs(n.Field,{invalid:$.deadline&&!!w.deadline,children:[e.jsxs("label",{htmlFor:"deadline",children:["Deadline ",e.jsx("em",{children:"*"})]}),e.jsx("input",{id:"deadline",name:"deadline",type:"date",value:x.deadline,onChange:I,onBlur:M}),e.jsx(n.Error,{children:$.deadline&&w.deadline})]}),e.jsxs(n.Field,{className:"span2",invalid:$.image&&!!w.image,children:[e.jsx("label",{htmlFor:"image",children:"Image URL"}),e.jsx("input",{id:"image",name:"image",value:x.image,onChange:I,onBlur:M,placeholder:"https://..."}),e.jsx(n.Error,{children:$.image&&w.image})]})]}),e.jsxs(n.Actions,{children:[e.jsx("div",{className:"spacer"}),e.jsx("button",{type:"submit",children:"Add Project"})]})]}),e.jsxs("div",{children:[e.jsxs(n.Toolbar,{children:[e.jsx("input",{className:"search",placeholder:"Search projects…",value:p,onChange:r=>b(r.target.value)}),e.jsx("select",{value:F,onChange:r=>z(r.target.value),children:de.map(r=>e.jsx("option",{value:r,children:r},r))}),e.jsx("select",{value:T,onChange:r=>ne(r.target.value),children:["All","Active","Ending Soon","Funded","Ended"].map(r=>e.jsx("option",{children:r},r))}),e.jsx("select",{value:G,onChange:r=>ie(r.target.value),children:["Newest","Ending Soon","Amount Raised","Goal","Progress"].map(r=>e.jsx("option",{children:r},r))})]}),e.jsxs(n.List,{children:[X.map(r=>{const t=P(r),a=fe(r),s=se(r),o=Math.max(0,Math.ceil((new Date(r.deadline)-new Date)/864e5)),l=q(r.id),c=l.errors||{},u=l.touched||{};return e.jsxs(n.Card,{children:[e.jsxs(n.ProjectHeader,{children:[e.jsxs("div",{className:"titleArea",children:[e.jsx("h3",{children:r.title}),e.jsxs("div",{className:"meta",children:[e.jsx("span",{className:"tag",children:r.category||"General"}),e.jsx("span",{className:`status ${s.replace(" ","").toLowerCase()}`,children:s}),r.archived&&e.jsx("span",{className:"archived",children:"Archived"})]})]}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{className:"ghost",onClick:()=>be(r),children:r.archived?"Unarchive":"Archive"}),e.jsx("button",{className:"danger",onClick:()=>pe(r),children:"Delete"})]})]}),e.jsxs(n.ProjectBody,{children:[e.jsx(n.ProjectMedia,{children:r.image?e.jsx("img",{src:r.image,alt:"",onError:m=>{m.currentTarget.style.display="none"}}):e.jsx("div",{className:"placeholder"})}),e.jsxs(n.ProjectMain,{children:[e.jsx("p",{className:"desc",children:r.description}),e.jsxs(n.Progress,{children:[e.jsx("div",{className:"bar",children:e.jsx("div",{className:"fill",style:{width:`${a}%`}})}),e.jsxs("div",{className:"labels",children:[e.jsxs("span",{children:[R.format(t)," raised"]}),e.jsxs("span",{children:[a,"%"]}),e.jsxs("span",{children:["Goal: ",R.format(r.goal)]})]})]}),e.jsxs(n.RowInfo,{children:[e.jsxs("div",{children:[e.jsx("strong",{children:"Deadline:"})," ",new Date(r.deadline).toDateString()," (",o," days)"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Created:"})," ",ae(r.createdAt)]})]}),!r.archived&&s!=="Ended"&&e.jsxs(n.Pledge,{onSubmit:m=>ge(r.id,m),noValidate:!0,children:[e.jsxs("div",{className:"grid",children:[e.jsxs(n.Field,{invalid:u.name&&!!c.name,children:[e.jsxs("label",{htmlFor:`pledge-${r.id}-name`,children:["Name ",e.jsx("em",{children:"*"})]}),e.jsx("input",{id:`pledge-${r.id}-name`,name:"name",value:l.name,onChange:m=>W(r.id,"name",m.target.value),onBlur:()=>K(r.id,"name"),placeholder:"Your name"}),e.jsx(n.Error,{children:u.name&&c.name})]}),e.jsxs(n.Field,{invalid:u.amount&&!!c.amount,children:[e.jsxs("label",{htmlFor:`pledge-${r.id}-amount`,children:["Amount (INR) ",e.jsx("em",{children:"*"})]}),e.jsx("input",{id:`pledge-${r.id}-amount`,name:"amount",type:"number",inputMode:"numeric",value:l.amount,onChange:m=>W(r.id,"amount",m.target.value),onBlur:()=>K(r.id,"amount"),placeholder:"e.g. 500"}),e.jsx(n.Error,{children:u.amount&&c.amount})]}),e.jsxs(n.Field,{className:"span2",invalid:u.message&&!!c.message,children:[e.jsx("label",{htmlFor:`pledge-${r.id}-message`,children:"Message"}),e.jsx("textarea",{id:`pledge-${r.id}-message`,name:"message",rows:2,value:l.message,onChange:m=>W(r.id,"message",m.target.value),onBlur:()=>K(r.id,"message"),placeholder:"Say something nice (max 180 chars)"}),e.jsx(n.Error,{children:u.message&&c.message})]})]}),e.jsxs(n.Actions,{children:[e.jsx("div",{className:"spacer"}),e.jsx("button",{type:"submit",children:"Pledge"})]})]}),r.pledges&&r.pledges.length>0&&e.jsxs(n.Pledges,{children:[e.jsxs("div",{className:"header",children:[e.jsx("h4",{children:"Recent Pledges"}),e.jsx("span",{children:r.pledges.length})]}),e.jsx("ul",{children:r.pledges.map(m=>e.jsxs("li",{children:[e.jsxs("div",{className:"left",children:[e.jsx("div",{className:"name",children:m.name||"Anonymous"}),e.jsx("div",{className:"msg",children:m.message}),e.jsx("div",{className:"ts",children:ae(m.createdAt)})]}),e.jsxs("div",{className:"right",children:[e.jsx("div",{className:"amt",children:R.format(m.amount)}),e.jsx("button",{className:"danger small",onClick:()=>xe(r,m),children:"Remove"})]})]},m.id))})]})]})]})]},r.id)}),!X.length&&e.jsx(n.Empty,{children:e.jsx("p",{children:"No projects match your filters. Try clearing search or changing filters."})})]})]})]}),v&&e.jsx(n.Modal,{onMouseDown:r=>{r.target===r.currentTarget&&y(null)},children:e.jsxs("div",{className:"sheet",role:"dialog","aria-modal":"true",children:[v.type==="clearAll"&&e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"Clear all projects?"}),e.jsx("p",{children:"This will remove everything from localStorage. This action cannot be undone."}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{onClick:()=>y(null),className:"ghost",children:"Cancel"}),e.jsx("button",{onClick:me,className:"danger",children:"Clear All"})]})]}),v.type==="deleteProject"&&e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"Delete project?"}),e.jsxs("p",{children:[e.jsx("strong",{children:(Z=v.payload)==null?void 0:Z.title})," will be permanently removed."]}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{onClick:()=>y(null),className:"ghost",children:"Cancel"}),e.jsx("button",{onClick:he,className:"danger",children:"Delete"})]})]}),v.type==="removePledge"&&e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"Remove pledge?"}),e.jsxs("p",{children:["Remove ",e.jsx("strong",{children:(ee=(Q=v.payload)==null?void 0:Q.pledge)==null?void 0:ee.name}),"'s pledge of"," ",e.jsx("strong",{children:R.format(((te=(re=v.payload)==null?void 0:re.pledge)==null?void 0:te.amount)||0)}),"?"]}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{onClick:()=>y(null),className:"ghost",children:"Cancel"}),e.jsx("button",{onClick:je,className:"danger",children:"Remove"})]})]})]})})]})};export{Se as default};
