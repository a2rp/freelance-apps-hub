import{d as s,l as ie,r as b,j as e}from"./index-CbGidEKj.js";const N="var(--bg)",$="var(--card)",w="var(--text)",D="var(--muted)",x="var(--border)",f="var(--radius)",J="var(--shadow)",U="var(--accent)",k="var(--danger, #e5484d)",a={Wrapper:s.div`
        max-width: 1440px;
        margin: 0 auto;
        display: grid;
        gap: 16px;
        padding: 16px;
        background: ${N};
        color: ${w};
        min-height: 100%;
    `,Header:s.header`
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        gap: 16px;
        h1 {
            margin: 0 0 6px 0;
            font-size: 20px;
            line-height: 1.2;
        }
        p {
            margin: 0;
            color: ${D};
            font-size: 14px;
        }
    `,Badges:s.div`
        display: flex;
        gap: 8px;
        align-items: center;
        .badge {
            background: ${$};
            border: 1px solid ${x};
            padding: 6px 10px;
            border-radius: 999px;
            font-size: 12px;
            box-shadow: ${J};
        }
    `,Layout:s.div`
        display: grid;
        grid-template-columns: 2fr 1fr;
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
        background: ${$};
        border: 1px solid ${x};
        border-radius: ${f};
        box-shadow: ${J};
        padding: 16px;
    `,Section:s.section`
        & + & {
            margin-top: 16px;
        }
    `,SectionTitle:s.h2`
        margin: 0 0 10px 0;
        font-size: 15px;
        font-weight: 600;
    `,Grid:s.div`
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
        @media (max-width: 720px) {
            grid-template-columns: 1fr;
        }
    `,Field:s.div`
        display: grid;
        gap: 6px;

        label {
            font-size: 13px;
            color: ${w};
            display: inline-flex;
            align-items: center;
            gap: 6px;
            em {
                font-style: normal;
                color: ${k};
            }
        }

        input[type="text"],
        input[type="date"] {
            width: 100%;
            border: 1px solid ${x};
            background: ${N};
            color: ${w};
            border-radius: calc(${f} - 2px);
            padding: 10px 12px;
            font: inherit;
            outline: none;
            transition: border-color 0.15s ease;
        }
        input:focus {
            border-color: ${U};
        }

        ${n=>n.invalid&&ie`
                input {
                    border-color: ${k};
                }
            `}
    `,Error:s.div`
        min-height: 16px;
        font-size: 12px;
        color: ${k};
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
            border: 1px solid ${x};
            background: ${$};
            color: ${w};
            padding: 10px 14px;
            border-radius: ${f};
            cursor: pointer;
            font: inherit;
            transition: transform 0.02s ease-in-out, border-color 0.15s ease;
            &:hover {
                border-color: ${U};
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
            background: ${N};
        }
        .danger {
            border-color: ${k};
        }
    `,Info:s.div`
        padding: 10px 12px;
        border: 1px dashed ${x};
        color: ${D};
        border-radius: ${f};
        background: ${N};
    `,Summary:s.div`
        display: grid;
        grid-template-columns: 1fr;
        gap: 10px;
        .label {
            color: ${D};
            font-size: 13px;
        }
        strong {
            font-size: 16px;
        }
    `,Divider:s.hr`
        border: none;
        border-top: 1px solid ${x};
        margin: 8px 0;
    `,TableWrap:s.div`
        overflow: auto;
        max-height: 540px;
        border: 1px solid ${x};
        border-radius: ${f};
    `,Table:s.table`
        width: 100%;
        border-collapse: collapse;
        min-width: 720px;
        background: ${$};
        color: ${w};
        thead th {
            position: sticky;
            top: 0;
            background: ${$};
            border-bottom: 1px solid ${x};
            text-align: left;
            padding: 10px 12px;
            font-weight: 600;
            font-size: 13px;
        }
        tbody td {
            padding: 10px 12px;
            border-top: 1px solid ${x};
            font-size: 13px;
        }
        tbody tr:nth-child(odd) td {
            background: rgba(0, 0, 0, 0.02);
        }
    `,Pagination:s.div`
        margin-top: 8px;
        display: flex;
        gap: 10px;
        align-items: center;
        justify-content: flex-end;
        span {
            color: ${D};
            font-size: 13px;
        }
        button {
            appearance: none;
            border: 1px solid ${x};
            background: ${$};
            color: ${w};
            padding: 8px 12px;
            border-radius: ${f};
            cursor: pointer;
            font: inherit;
            &:hover {
                border-color: ${U};
            }
            &:disabled {
                opacity: 0.5;
                cursor: not-allowed;
            }
        }
    `,SavedList:s.ul`
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        gap: 10px;
        li {
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 10px;
            border: 1px solid ${x};
            border-radius: ${f};
            padding: 10px 12px;
            background: ${N};
        }
        .meta {
            display: grid;
        }
        .meta .muted {
            color: ${D};
            font-size: 12px;
        }
        .row {
            display: flex;
            gap: 8px;
        }
        .row button {
            appearance: none;
            border: 1px solid ${x};
            background: ${$};
            color: ${w};
            padding: 8px 10px;
            border-radius: ${f};
            cursor: pointer;
            font: inherit;
        }
        .row .danger {
            border-color: ${k};
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
        background: ${$};
        color: ${w};
        border: 1px solid ${x};
        border-radius: ${f};
        box-shadow: ${J};
        padding: 16px;
        h3 {
            margin: 0 0 6px 0;
            font-size: 16px;
        }
        p {
            margin: 0 0 12px 0;
            color: ${D};
            font-size: 14px;
        }
        .actions {
            display: flex;
            gap: 10px;
            justify-content: flex-end;
        }
        .actions button {
            appearance: none;
            border: 1px solid ${x};
            background: ${$};
            color: ${w};
            padding: 8px 12px;
            border-radius: ${f};
            cursor: pointer;
            font: inherit;
        }
        .actions .ghost {
            background: ${N};
        }
        .actions .danger {
            border-color: ${k};
        }
    `},V="mortgageCalculator_draft_v1",L="mortgageCalculator_saved_v1",q=(n,i,l)=>Math.min(Math.max(n,i),l),j=n=>{const i=parseFloat(String(n??"").replace(/,/g,""));return Number.isFinite(i)?i:0},v=n=>new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:2}).format(n||0),de=n=>new Intl.NumberFormat("en-IN",{maximumFractionDigits:2}).format(n||0);function ce(n,i){const l=new Date(n);return l.setHours(12,0,0,0),new Date(l.getFullYear(),l.getMonth()+i,l.getDate())}function Y(n){return new Intl.DateTimeFormat("en-US",{month:"short",year:"numeric"}).format(n)}function pe(n,i,l){const u=Math.round(l*12),d=i/100/12;if(u<=0||n<=0)return 0;if(d===0)return n/u;const g=Math.pow(1+d,u);return n*d*g/(g-1)}function he({principal:n,annualRatePct:i,years:l,extraMonthly:u=0,startISO:d}){const g=Math.round(l*12),c=i/100/12,h=pe(n,i,l);if(!h)return{rows:[],basePayment:0,totalInterest:0,totalPaid:0,months:0,payoffDate:null};let p=n,m=0;const M=[];let O=0,E=0;for(;p>0&&m<g+600;){const F=ce(d,m+1),C=c===0?0:p*c;let y=h+u-C;y>p&&(y=p);const S=y+C;if(p-=y,O+=C,E+=S,M.push({i:m+1,date:F,payment:S,principal:y,interest:C,balance:Math.max(p,0)}),p<=0)break;m++}return{rows:M,basePayment:h,totalInterest:O,totalPaid:E,months:M.length,payoffDate:M.length?M[M.length-1].date:null}}function xe(n){const i=["#","Date","Payment","Principal","Interest","Balance"].join(","),l=n.map(h=>[h.i,Y(h.date),h.payment.toFixed(2),h.principal.toFixed(2),h.interest.toFixed(2),h.balance.toFixed(2)].join(",")),u=[i,...l].join(`
`),d=new Blob([u],{type:"text/csv;charset=utf-8;"}),g=URL.createObjectURL(d),c=document.createElement("a");c.href=g,c.download=`mortgage_schedule_${Date.now()}.csv`,document.body.appendChild(c),c.click(),c.remove(),URL.revokeObjectURL(g)}const z={principal:"",annualRate:"",years:"",extraMonthly:"",startISO:new Date(new Date().getFullYear(),new Date().getMonth(),1).toISOString().slice(0,10),otherMonthly:""},ge=()=>{const[n,i]=b.useState(()=>{try{const t=JSON.parse(localStorage.getItem(V)||"null");return t?{...z,...t}:z}catch{return z}}),[l,u]=b.useState({}),[d,g]=b.useState({}),[c,h]=b.useState(()=>{try{return JSON.parse(localStorage.getItem(L)||"[]")}catch{return[]}}),[p,m]=b.useState({open:!1,type:"",payload:null,title:"",body:""}),M=j(n.principal),O=q(j(n.annualRate),0,200),E=q(j(n.years),0,100),F=Math.max(0,j(n.extraMonthly)),C=Math.max(0,j(n.otherMonthly));b.useEffect(()=>{try{localStorage.setItem(V,JSON.stringify(n))}catch{}},[n]);function P(t){const o={};return(!t.principal||j(t.principal)<=0)&&(o.principal="Loan amount is required and must be > 0."),(t.annualRate===""||j(t.annualRate)<0)&&(o.annualRate="Annual rate must be ≥ 0."),(!t.years||j(t.years)<=0)&&(o.years="Loan term (years) is required and must be > 0."),j(t.extraMonthly)<0&&(o.extraMonthly="Extra monthly payment cannot be negative."),j(t.otherMonthly)<0&&(o.otherMonthly="Other monthly costs cannot be negative."),t.startISO||(o.startISO="Start date is required."),{errors:o,hasErrors:Object.values(o).some(Boolean)}}const y=(t,o)=>{i(T=>{const A={...T,[t]:o};return g(P(A).errors),A})},S=t=>u(o=>({...o,[t.target.name]:!0})),I=b.useMemo(()=>P(n),[n]),r=b.useMemo(()=>I.hasErrors?null:he({principal:M,annualRatePct:O,years:E,extraMonthly:F,startISO:n.startISO||new Date().toISOString().slice(0,10)}),[I,M,O,E,F,n.startISO]),G=()=>{const t={principal:"5000000",annualRate:"8.5",years:"20",extraMonthly:"5000",otherMonthly:"3500",startISO:new Date(new Date().getFullYear(),new Date().getMonth(),1).toISOString().slice(0,10)};i(t),u({}),g(P(t).errors)},K=()=>m({open:!0,type:"clear",title:"Clear inputs?",body:"This will reset all fields and remove the draft from this browser."}),Q=()=>{i(z),u({}),g({});try{localStorage.removeItem(V)}catch{}m({open:!1,type:"",payload:null,title:"",body:""})},X=()=>{if(I.hasErrors){u({principal:!0,annualRate:!0,years:!0,extraMonthly:!0,otherMonthly:!0,startISO:!0});return}const t=prompt("Plan name?");if(!t)return;const T=[{name:t,savedAt:new Date().toISOString(),form:n},...c];h(T);try{localStorage.setItem(L,JSON.stringify(T))}catch{}},Z=t=>{const o=c[t];o&&(i(o.form),u({}),g(P(o.form).errors))},ee=t=>m({open:!0,type:"delete-one",payload:t,title:"Delete this saved plan?",body:"This action cannot be undone."}),te=()=>{const t=p.payload,o=c.filter((T,A)=>A!==t);h(o);try{localStorage.setItem(L,JSON.stringify(o))}catch{}m({open:!1,type:"",payload:null,title:"",body:""})},ne=()=>m({open:!0,type:"clear-all",title:"Delete all saved plans?",body:"All saved plans will be permanently removed."}),ae=()=>{h([]);try{localStorage.setItem(L,"[]")}catch{}m({open:!1,type:"",payload:null,title:"",body:""})},re=((r==null?void 0:r.basePayment)||0)+Math.max(0,j(n.extraMonthly))+Math.max(0,j(n.otherMonthly));r!=null&&r.payoffDate&&Y(r.payoffDate);const oe=(r==null?void 0:r.months)||0,_=12,[R,H]=b.useState(1),W=r?Math.max(1,Math.ceil(r.rows.length/_)):1;b.useEffect(()=>H(1),[n,oe]);const le=b.useMemo(()=>{if(!r)return[];const t=(R-1)*_;return r.rows.slice(t,t+_)},[r,R]),B=b.useRef(null),se=()=>{if(!B.current)return;const t=document.body.innerHTML,o=B.current.innerHTML;document.body.innerHTML=o,window.print(),document.body.innerHTML=t,window.location.reload()};return e.jsxs(a.Wrapper,{children:[e.jsxs(a.Header,{children:[e.jsxs("div",{children:[e.jsx("h1",{children:"Mortgage Calculator"}),e.jsx("p",{children:"Estimate monthly mortgage payments from loan amount, annual interest, and term. Includes amortization, save/load, CSV & print."})]}),e.jsxs(a.Badges,{children:[e.jsx("span",{className:"badge",children:"Local Draft"}),e.jsx("span",{className:"badge",children:"Saved Plans"}),e.jsx("span",{className:"badge",children:"CSV & Print"})]})]}),e.jsxs(a.Layout,{children:[e.jsxs("div",{className:"left",children:[e.jsx(a.Card,{children:e.jsxs(a.Section,{children:[e.jsx(a.SectionTitle,{children:"Inputs"}),e.jsxs(a.Grid,{children:[e.jsxs(a.Field,{invalid:l.principal&&!!d.principal,children:[e.jsxs("label",{htmlFor:"principal",children:["Loan Amount ",e.jsx("em",{children:"*"})]}),e.jsx("input",{id:"principal",name:"principal",type:"text",inputMode:"decimal",placeholder:"e.g., 5000000",value:n.principal,onChange:t=>y("principal",t.target.value),onBlur:S}),e.jsx(a.Error,{children:l.principal&&d.principal})]}),e.jsxs(a.Field,{invalid:l.annualRate&&!!d.annualRate,children:[e.jsxs("label",{htmlFor:"annualRate",children:["Annual Rate of Interest (%) ",e.jsx("em",{children:"*"})]}),e.jsx("input",{id:"annualRate",name:"annualRate",type:"text",inputMode:"decimal",placeholder:"e.g., 8.5",value:n.annualRate,onChange:t=>y("annualRate",t.target.value),onBlur:S}),e.jsx(a.Error,{children:l.annualRate&&d.annualRate})]}),e.jsxs(a.Field,{invalid:l.years&&!!d.years,children:[e.jsxs("label",{htmlFor:"years",children:["Loan Term (years) ",e.jsx("em",{children:"*"})]}),e.jsx("input",{id:"years",name:"years",type:"text",inputMode:"decimal",placeholder:"e.g., 20",value:n.years,onChange:t=>y("years",t.target.value),onBlur:S}),e.jsx(a.Error,{children:l.years&&d.years})]}),e.jsxs(a.Field,{children:[e.jsx("label",{htmlFor:"extraMonthly",children:"Extra Monthly Payment (optional)"}),e.jsx("input",{id:"extraMonthly",name:"extraMonthly",type:"text",inputMode:"decimal",placeholder:"e.g., 5000",value:n.extraMonthly,onChange:t=>y("extraMonthly",t.target.value),onBlur:S}),e.jsx(a.Error,{children:l.extraMonthly&&d.extraMonthly})]}),e.jsxs(a.Field,{children:[e.jsx("label",{htmlFor:"otherMonthly",children:"Other Monthly Costs (taxes/HOA etc.)"}),e.jsx("input",{id:"otherMonthly",name:"otherMonthly",type:"text",inputMode:"decimal",placeholder:"e.g., 3500",value:n.otherMonthly,onChange:t=>y("otherMonthly",t.target.value),onBlur:S}),e.jsx(a.Error,{children:l.otherMonthly&&d.otherMonthly})]}),e.jsxs(a.Field,{children:[e.jsx("label",{htmlFor:"startISO",children:"Start Date"}),e.jsx("input",{id:"startISO",name:"startISO",type:"date",value:n.startISO,onChange:t=>y("startISO",t.target.value),onBlur:S}),e.jsx(a.Error,{children:l.startISO&&d.startISO})]})]}),e.jsxs(a.Actions,{children:[e.jsx("button",{type:"button",className:"ghost",onClick:G,children:"Load Sample"}),e.jsx("button",{type:"button",className:"ghost danger",onClick:K,children:"Clear Inputs"}),e.jsx("div",{className:"spacer"}),e.jsx("button",{type:"button",disabled:I.hasErrors||!r,onClick:()=>xe(r.rows),children:"Export CSV"}),e.jsx("button",{type:"button",disabled:I.hasErrors||!r,onClick:se,children:"Print Schedule"})]})]})}),e.jsxs(a.Card,{children:[e.jsx(a.SectionTitle,{children:"Amortization Schedule"}),I.hasErrors&&e.jsx(a.Info,{children:"Enter valid inputs to view the schedule."}),!I.hasErrors&&r&&e.jsxs(e.Fragment,{children:[e.jsx(a.TableWrap,{ref:B,children:e.jsxs(a.Table,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"Date"}),e.jsx("th",{children:"Payment"}),e.jsx("th",{children:"Principal"}),e.jsx("th",{children:"Interest"}),e.jsx("th",{children:"Balance"})]})}),e.jsx("tbody",{children:le.map(t=>e.jsxs("tr",{children:[e.jsx("td",{children:t.i}),e.jsx("td",{children:Y(t.date)}),e.jsx("td",{children:v(t.payment)}),e.jsx("td",{children:v(t.principal)}),e.jsx("td",{children:v(t.interest)}),e.jsx("td",{children:v(t.balance)})]},t.i))})]})}),e.jsxs(a.Pagination,{children:[e.jsx("button",{disabled:R<=1,onClick:()=>H(t=>t-1),children:"Prev"}),e.jsxs("span",{children:["Page ",R," / ",W]}),e.jsx("button",{disabled:R>=W,onClick:()=>H(t=>t+1),children:"Next"})]})]})]})]}),e.jsxs("div",{className:"right",children:[e.jsxs(a.Card,{children:[e.jsx(a.SectionTitle,{children:"Summary"}),e.jsxs(a.Summary,{children:[e.jsxs("div",{children:[e.jsx("span",{className:"label",children:"Monthly EMI"}),e.jsx("strong",{children:v((r==null?void 0:r.basePayment)||0)})]}),e.jsxs("div",{children:[e.jsx("span",{className:"label",children:"+ Extra"}),e.jsx("strong",{children:v(F)})]}),e.jsxs("div",{children:[e.jsx("span",{className:"label",children:"+ Other Costs"}),e.jsx("strong",{children:v(C)})]}),e.jsx(a.Divider,{}),e.jsxs("div",{children:[e.jsx("span",{className:"label",children:"Total Monthly Outflow"}),e.jsx("strong",{children:v(re)})]}),e.jsx(a.Divider,{}),e.jsxs("div",{children:[e.jsx("span",{className:"label",children:"Total Interest"}),e.jsx("strong",{children:v((r==null?void 0:r.totalInterest)||0)})]}),e.jsxs("div",{children:[e.jsx("span",{className:"label",children:"Total Paid"}),e.jsx("strong",{children:v((r==null?void 0:r.totalPaid)||0)})]}),e.jsxs("div",{children:[e.jsx("span",{className:"label",children:"Months"}),e.jsx("strong",{children:de((r==null?void 0:r.months)||0)})]}),e.jsxs("div",{children:[e.jsx("span",{className:"label",children:"Payoff Date"}),e.jsx("strong",{children:r!=null&&r.payoffDate?Y(r.payoffDate):"-"})]})]}),e.jsx(a.Actions,{children:e.jsx("button",{type:"button",onClick:X,disabled:I.hasErrors,children:"Save Plan"})})]}),e.jsxs(a.Card,{children:[e.jsx(a.SectionTitle,{children:"Saved Plans"}),c.length===0?e.jsx(a.Info,{children:"No saved plans yet."}):e.jsx(a.SavedList,{children:c.map((t,o)=>e.jsxs("li",{children:[e.jsxs("div",{className:"meta",children:[e.jsx("strong",{children:t.name}),e.jsx("span",{className:"muted",children:new Date(t.savedAt).toLocaleString("en-IN")})]}),e.jsxs("div",{className:"row",children:[e.jsx("button",{onClick:()=>Z(o),children:"Load"}),e.jsx("button",{className:"danger",onClick:()=>ee(o),children:"Delete"})]})]},o))}),e.jsx(a.Actions,{children:e.jsx("button",{className:"ghost danger",disabled:!c.length,onClick:ne,children:"Clear All"})})]})]})]}),p.open&&e.jsx(a.ModalOverlay,{onClick:()=>m({open:!1,type:"",payload:null,title:"",body:""}),children:e.jsxs(a.Modal,{onClick:t=>t.stopPropagation(),children:[e.jsx("h3",{children:p.title}),e.jsx("p",{children:p.body}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{className:"ghost",onClick:()=>m({open:!1,type:"",payload:null,title:"",body:""}),children:"Cancel"}),p.type==="clear"&&e.jsx("button",{className:"danger",onClick:Q,children:"Clear"}),p.type==="delete-one"&&e.jsx("button",{className:"danger",onClick:te,children:"Delete"}),p.type==="clear-all"&&e.jsx("button",{className:"danger",onClick:ae,children:"Delete All"})]})]})})]})};export{ge as default};
