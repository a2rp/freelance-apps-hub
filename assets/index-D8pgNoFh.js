import{d as m,r as b,j as e,y as B}from"./index-CaRw1yxc.js";const $="var(--bg)",A="var(--card)",M="var(--text)",O="var(--muted)",v="var(--border)",U="var(--radius)",W="var(--shadow)",T="var(--accent)",P="var(--danger, #e5484d)",i={Wrapper:m.div`
        display: grid;
        gap: 16px;
        padding: 16px;
        color: ${M};
        background: ${$};
        min-height: 100%;
    `,Header:m.div`
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
            color: ${O};
            font-size: 14px;
        }
    `,Badges:m.div`
        display: flex;
        gap: 8px;
        .badge {
            background: ${A};
            border: 1px solid ${v};
            padding: 6px 10px;
            border-radius: 999px;
            font-size: 12px;
            box-shadow: ${W};
        }
    `,Layout:m.div`
        display: grid;
        grid-template-columns: 1.8fr 1fr;
        gap: 16px;
        @media (max-width: 1024px) {
            grid-template-columns: 1fr;
        }
    `,Card:m.div`
        background: ${A};
        border: 1px solid ${v};
        border-radius: ${U};
        box-shadow: ${W};
        padding: 16px;

        h3 {
            margin: 0 0 12px 0;
            font-size: 16px;
        }

        .status {
            list-style: none;
            margin: 0;
            padding: 0;
        }
        .status li {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 6px 0;
            font-size: 14px;
        }
        .status li .dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            display: inline-block;
        }
        .status li.ok .dot {
            background: ${T};
        }
        .status li.no .dot {
            background: ${P};
        }

        .tips {
            margin: 0;
            padding-left: 18px;
            color: ${O};
            font-size: 14px;
        }
    `,Section:m.section`
        & + & {
            margin-top: 16px;
        }
    `,SectionTitle:m.h2`
        margin: 0 0 10px 0;
        font-size: 15px;
        font-weight: 600;
    `,Grid:m.div`
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
        @media (max-width: 720px) {
            grid-template-columns: 1fr;
        }
    `,Field:m.div`
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
            color: ${M};
            display: inline-flex;
            align-items: center;
            gap: 6px;
            em {
                font-style: normal;
                color: ${P};
            }
        }

        input[type="text"],
        input[type="email"],
        input[type="tel"],
        input[type="url"],
        input[type="date"],
        input[type="file"],
        select,
        textarea {
            width: 100%;
            border: 1px solid ${v};
            background: ${$};
            color: ${M};
            border-radius: calc(${U} - 2px);
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
            border-color: ${T};
        }

        .inline {
            display: flex;
            gap: 16px;
            align-items: center;
        }
        .radio {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-size: 14px;
        }
        .checkbox {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-size: 14px;
        }

        ${n=>n.invalid&&`
      input, select, textarea { border-color: ${P}; }
    `}
    `,Chips:m.div`
        display: flex;
        flex-wrap: wrap;
        gap: 8px;

        .chip {
            border: 1px solid ${v};
            background: ${$};
            color: ${M};
            border-radius: 999px;
            padding: 6px 10px;
            font-size: 13px;
            cursor: pointer;
            user-select: none;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            transition: border-color 0.15s ease, background 0.15s ease;
        }
        .chip.active {
            background: ${A};
            border-color: ${T};
        }
        .chip input {
            display: none;
        }
    `,Counter:m.div`
        text-align: right;
        font-size: 12px;
        color: ${n=>n.ok?"var(--muted)":P};
    `,Error:m.div`
        min-height: 16px;
        font-size: 12px;
        color: ${P};
    `,Help:m.div`
        font-size: 12px;
        color: ${O};
    `,Preview:m.div`
        display: inline-flex;
        align-items: center;
        gap: 8px;
        img {
            display: block;
            width: 64px;
            height: 64px;
            object-fit: cover;
            border-radius: 8px;
            border: 1px solid ${v};
            background: ${$};
        }
    `,Actions:m.div`
        margin-top: 16px;
        display: flex;
        gap: 10px;
        align-items: center;
        .spacer {
            flex: 1;
        }
        button {
            appearance: none;
            border: 1px solid ${v};
            background: ${A};
            color: ${M};
            padding: 10px 14px;
            border-radius: ${U};
            cursor: pointer;
            font: inherit;
            transition: transform 0.02s ease-in-out, border-color 0.15s ease;
            &:hover {
                border-color: ${T};
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
            background: ${$};
        }
    `,Side:m.aside`
        display: grid;
        gap: 16px;
    `,Divider:m.hr`
        border: none;
        border-top: 1px solid ${v};
        margin: 12px 0;
    `},z=n=>/^(https?:\/\/)[\w.-]+(\.[\w.-]+)+(\/[\w\-._~:/?#[\]@!$&'()*+,;=.]+)?$/.test(n||""),se=n=>/^[6-9]\d{9}$/.test(n||""),le=n=>/^\d{6}$/.test(n||""),ne=n=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n||""),oe=n=>String(n||"").replace(/\s+/g," ").trim();function de(n){try{const t=new Date(n),d=new Date;return Number.isNaN(t.getTime())||t>=d?!1:d.getFullYear()-t.getFullYear()-(d.getMonth()<t.getMonth()||d.getMonth()===t.getMonth()&&d.getDate()<t.getDate()?1:0)>=18}catch{return!1}}const G=1024*1024,ce=["application/pdf","application/vnd.openxmlformats-officedocument.wordprocessingml.document","application/msword"],ue=["image/png","image/jpeg","image/jpg","image/webp"],me=[{code:"IN",label:"India"},{code:"US",label:"United States"},{code:"DE",label:"Germany"}],pe={IN:["Bihar","Karnataka","Maharashtra","Delhi","Uttar Pradesh"],US:["California","Texas","New York"],DE:["Bavaria","Berlin","Hamburg"]},he={Bihar:["Patna","Gaya","Muzaffarpur"],Karnataka:["Bengaluru","Mysuru","Mangaluru"],Maharashtra:["Mumbai","Pune","Nagpur"],Delhi:["New Delhi","Dwarka","Saket"],"Uttar Pradesh":["Lucknow","Noida","Varanasi"],California:["San Francisco","Los Angeles","San Diego"],Texas:["Austin","Dallas","Houston"],"New York":["New York City","Buffalo","Albany"],Bavaria:["Munich","Nuremberg"],Berlin:["Berlin"],Hamburg:["Hamburg"]},xe=["React","Node.js","Express","MongoDB","TypeScript","Styled-Components","MUI","Redux","Zustand","Vite","Jest","Playwright"],R="submissionForm_draft_v1",X="submissionForm_submissions_v1",D={fullName:"",email:"",phone:"",dob:"",country:"IN",state:"",city:"",address:"",pin:"",website:"",github:"",linkedin:"",skills:[],preferredContact:"email",availability:"full-time",portfolio:"",summary:"",terms:!1},g={fullNameMin:3,addressMin:10,summaryMin:50,summaryMax:300};function I(n,t,d){const r=typeof t=="string"?oe(t):t;switch(n){case"fullName":return r?r.length<g.fullNameMin?`Full name must be at least ${g.fullNameMin} characters.`:"":"Full name is required.";case"email":return r?ne(r)?"":"Enter a valid email address.":"Email is required.";case"phone":return r?se(r)?"":"Enter a valid 10-digit Indian mobile number.":"Phone is required.";case"dob":return r?de(r)?"":"You must be at least 18 years old.":"Date of birth is required.";case"country":return r?"":"Country is required.";case"state":return r?"":"State is required.";case"city":return r?"":"City is required.";case"address":return r?r.length<g.addressMin?`Address must be at least ${g.addressMin} characters.`:"":"Address is required.";case"pin":return r?le(r)?"":"Enter a valid 6-digit PIN code.":"PIN code is required.";case"website":return r&&!z(r)?"Website must start with http:// or https://":"";case"github":return r&&!z(r)?"GitHub URL must start with http:// or https://":"";case"linkedin":return r&&!z(r)?"LinkedIn URL must start with http:// or https://":"";case"skills":{const p=(d.skills||[]).length;return p<3?"Pick at least 3 skills.":p>8?"Pick no more than 8 skills.":""}case"preferredContact":return r?"":"Select a contact method.";case"availability":return r?"":"Select your availability.";case"portfolio":return r&&!z(r)?"Portfolio link must start with http:// or https://":"";case"summary":return r?r.length<g.summaryMin?`Summary must be at least ${g.summaryMin} characters.`:r.length>g.summaryMax?`Summary cannot exceed ${g.summaryMax} characters.`:"":"A short professional summary is required.";case"terms":return r?"":"You must agree to the terms to continue.";default:return""}}function Z(n){const t={};return Object.keys(n).forEach(d=>{const r=I(d,n[d],n);r&&(t[d]=r)}),t}const ge=()=>{const n=b.useRef(null),[t,d]=b.useState(()=>{try{const s=JSON.parse(localStorage.getItem(R)||"null");return s?{...D,...s}:D}catch{return D}}),[r,p]=b.useState({}),[a,w]=b.useState({}),[k,E]=b.useState(null),[_,F]=b.useState(null),L=t.summary.length,Q=t.skills.length,q=L>=g.summaryMin&&L<=g.summaryMax;b.useEffect(()=>{try{localStorage.setItem(R,JSON.stringify(t))}catch{}},[t]);const Y=b.useMemo(()=>pe[t.country]||[],[t.country]),H=b.useMemo(()=>he[t.state]||[],[t.state]);b.useEffect(()=>{Y.includes(t.state)||d(s=>({...s,state:"",city:""}))},[t.country]),b.useEffect(()=>{H.includes(t.city)||d(s=>({...s,city:""}))},[t.state]);const K=(s,l)=>{d(h=>{const x={...h,[s]:l},u=I(s,l,x);return p(f=>({...f,[s]:u})),x})},o=s=>{const{name:l}=s.target;w(h=>({...h,[l]:!0})),p(h=>({...h,[l]:I(l,t[l],t)}))},c=s=>{const{name:l,value:h,type:x,checked:u}=s.target;if(x==="checkbox"&&l==="terms"){K("terms",!!u);return}if(x==="checkbox"&&l==="skills"){d(f=>{const y=new Set(f.skills);u?y.add(h):y.delete(h);const S={...f,skills:Array.from(y)};return p(j=>({...j,skills:I("skills",S.skills,S)})),S});return}K(l,h)},J=s=>{const{name:l,files:h}=s.target,x=h&&h[0];if(x){if(l==="resume"){if(!ce.includes(x.type)){E(null),p(u=>({...u,resume:"Upload a PDF/DOC/DOCX file."}));return}if(x.size>2*G){E(null),p(u=>({...u,resume:"Resume must be under 2 MB."}));return}E({name:x.name,size:x.size}),p(u=>({...u,resume:""}));return}if(l==="avatar"){if(!ue.includes(x.type)){F(null),p(f=>({...f,avatar:"Upload JPG/PNG/WEBP image."}));return}if(x.size>1*G){F(null),p(f=>({...f,avatar:"Image must be under 1 MB."}));return}const u=URL.createObjectURL(x);F(u),p(f=>({...f,avatar:""}))}}},ee=()=>{var s,l;try{localStorage.removeItem(R)}catch{}d(D),p({}),w({}),E(null),F(null),(l=(s=B)==null?void 0:s.info)==null||l.call(s,"Draft cleared")},re=()=>{var l,h;const s={fullName:"Ashish Ranjan",email:"ashish@example.com",phone:"9876543210",dob:"1995-06-15",country:"IN",state:"Bihar",city:"Patna",address:"House 10, Gandhi Maidan Road, Patna",pin:"800001",website:"https://ashishranjan.in",github:"https://github.com/a2rp",linkedin:"https://linkedin.com/in/aashishranjan",skills:["React","Node.js","MongoDB","Styled-Components"],preferredContact:"email",availability:"full-time",portfolio:"https://a2rp.github.io",summary:"MERN-focused developer building production-grade, themeable dashboards and micro-apps. Strong on React (Vite + styled-components), Node/Express, and local-storage/MERN flows. Loves clean UX and print-ready designs.",terms:!0};d(s),w({}),p(Z(s)),(h=(l=B)==null?void 0:l.info)==null||h.call(l,"Sample data loaded")},ie=s=>{var u,f,y,S;s.preventDefault();const l=Z(t);if(p(l),Object.values(l).some(Boolean)){const j={};Object.keys(t).forEach(C=>j[C]=!0),w(j),requestAnimationFrame(()=>{var V;const C=Object.keys(l).find(ae=>l[ae]);if(!C)return;const N=(V=n.current)==null?void 0:V.querySelector(`[name="${C}"]`);if(N)try{N.scrollIntoView({behavior:"smooth",block:"center"}),setTimeout(()=>N.focus({preventScroll:!0}),120)}catch{N.focus()}}),(f=(u=B)==null?void 0:u.error)==null||f.call(u,"Fix errors before submitting");return}try{const j=JSON.parse(localStorage.getItem(X)||"[]"),N={...t,_meta:{createdAt:new Date().toISOString(),size:{resume:(k==null?void 0:k.size)||0}}};j.unshift(N),localStorage.setItem(X,JSON.stringify(j)),(S=(y=B)==null?void 0:y.success)==null||S.call(y,"Submission saved locally")}catch{alert("Submission saved locally (fallback).")}const x={country:t.country||"IN"};d({...D,...x}),w({}),p({}),E(null),F(null);try{localStorage.removeItem(R)}catch{}},te=Object.values(r).filter(Boolean).length===0&&Object.keys(t).every(s=>!I(s,t[s],t));return e.jsxs(i.Wrapper,{children:[e.jsxs(i.Header,{children:[e.jsxs("div",{children:[e.jsx("h1",{children:"Submission Form"}),e.jsx("p",{children:"All fields validated with live feedback. Draft auto-saves to your browser."})]}),e.jsxs(i.Badges,{children:[e.jsx("span",{className:"badge",children:"Autosave"}),e.jsx("span",{className:"badge",children:"Live Validation"}),e.jsx("span",{className:"badge",children:"2-Column Layout"})]})]}),e.jsxs(i.Layout,{children:[e.jsxs(i.Card,{as:"form",ref:n,onSubmit:ie,noValidate:!0,children:[e.jsxs(i.Section,{children:[e.jsx(i.SectionTitle,{children:"Personal"}),e.jsxs(i.Grid,{children:[e.jsxs(i.Field,{invalid:a.fullName&&!!r.fullName,children:[e.jsxs("label",{htmlFor:"fullName",children:["Full Name ",e.jsx("em",{children:"*"})]}),e.jsx("input",{id:"fullName",name:"fullName",type:"text",value:t.fullName,onChange:c,onBlur:o,placeholder:"e.g., Ashish Ranjan","aria-invalid":!!(a.fullName&&r.fullName)}),e.jsx(i.Error,{role:"alert",children:a.fullName&&r.fullName})]}),e.jsxs(i.Field,{invalid:a.dob&&!!r.dob,children:[e.jsxs("label",{htmlFor:"dob",children:["Date of Birth ",e.jsx("em",{children:"*"})]}),e.jsx("input",{id:"dob",name:"dob",type:"date",value:t.dob,onChange:c,onBlur:o,"aria-invalid":!!(a.dob&&r.dob)}),e.jsx(i.Error,{role:"alert",children:a.dob&&r.dob})]})]})]}),e.jsxs(i.Section,{children:[e.jsx(i.SectionTitle,{children:"Contact"}),e.jsxs(i.Grid,{children:[e.jsxs(i.Field,{invalid:a.email&&!!r.email,children:[e.jsxs("label",{htmlFor:"email",children:["Email ",e.jsx("em",{children:"*"})]}),e.jsx("input",{id:"email",name:"email",type:"email",value:t.email,onChange:c,onBlur:o,placeholder:"you@example.com","aria-invalid":!!(a.email&&r.email)}),e.jsx(i.Error,{role:"alert",children:a.email&&r.email})]}),e.jsxs(i.Field,{invalid:a.phone&&!!r.phone,children:[e.jsxs("label",{htmlFor:"phone",children:["Phone (India) ",e.jsx("em",{children:"*"})]}),e.jsx("input",{id:"phone",name:"phone",type:"tel",value:t.phone,onChange:c,onBlur:o,placeholder:"9876543210","aria-invalid":!!(a.phone&&r.phone)}),e.jsx(i.Error,{role:"alert",children:a.phone&&r.phone})]}),e.jsxs(i.Field,{invalid:a.preferredContact&&!!r.preferredContact,children:[e.jsxs("label",{children:["Preferred Contact ",e.jsx("em",{children:"*"})]}),e.jsxs("div",{className:"inline",children:[e.jsxs("label",{className:"radio",children:[e.jsx("input",{type:"radio",name:"preferredContact",value:"email",checked:t.preferredContact==="email",onChange:c,onBlur:o}),e.jsx("span",{children:"Email"})]}),e.jsxs("label",{className:"radio",children:[e.jsx("input",{type:"radio",name:"preferredContact",value:"phone",checked:t.preferredContact==="phone",onChange:c,onBlur:o}),e.jsx("span",{children:"Phone"})]})]}),e.jsx(i.Error,{role:"alert",children:a.preferredContact&&r.preferredContact})]}),e.jsxs(i.Field,{invalid:a.availability&&!!r.availability,children:[e.jsxs("label",{htmlFor:"availability",children:["Availability ",e.jsx("em",{children:"*"})]}),e.jsxs("select",{id:"availability",name:"availability",value:t.availability,onChange:c,onBlur:o,"aria-invalid":!!(a.availability&&r.availability),children:[e.jsx("option",{value:"full-time",children:"Full-time"}),e.jsx("option",{value:"part-time",children:"Part-time"}),e.jsx("option",{value:"contract",children:"Contract"}),e.jsx("option",{value:"internship",children:"Internship"})]}),e.jsx(i.Error,{role:"alert",children:a.availability&&r.availability})]})]})]}),e.jsxs(i.Section,{children:[e.jsx(i.SectionTitle,{children:"Location"}),e.jsxs(i.Grid,{children:[e.jsxs(i.Field,{invalid:a.country&&!!r.country,children:[e.jsxs("label",{htmlFor:"country",children:["Country ",e.jsx("em",{children:"*"})]}),e.jsx("select",{id:"country",name:"country",value:t.country,onChange:c,onBlur:o,"aria-invalid":!!(a.country&&r.country),children:me.map(s=>e.jsx("option",{value:s.code,children:s.label},s.code))}),e.jsx(i.Error,{role:"alert",children:a.country&&r.country})]}),e.jsxs(i.Field,{invalid:a.state&&!!r.state,children:[e.jsxs("label",{htmlFor:"state",children:["State ",e.jsx("em",{children:"*"})]}),e.jsxs("select",{id:"state",name:"state",value:t.state,onChange:c,onBlur:o,"aria-invalid":!!(a.state&&r.state),children:[e.jsx("option",{value:"",children:"Select state"}),Y.map(s=>e.jsx("option",{value:s,children:s},s))]}),e.jsx(i.Error,{role:"alert",children:a.state&&r.state})]}),e.jsxs(i.Field,{invalid:a.city&&!!r.city,children:[e.jsxs("label",{htmlFor:"city",children:["City ",e.jsx("em",{children:"*"})]}),e.jsxs("select",{id:"city",name:"city",value:t.city,onChange:c,onBlur:o,"aria-invalid":!!(a.city&&r.city),children:[e.jsx("option",{value:"",children:"Select city"}),H.map(s=>e.jsx("option",{value:s,children:s},s))]}),e.jsx(i.Error,{role:"alert",children:a.city&&r.city})]}),e.jsxs(i.Field,{invalid:a.pin&&!!r.pin,children:[e.jsxs("label",{htmlFor:"pin",children:["PIN Code ",e.jsx("em",{children:"*"})]}),e.jsx("input",{id:"pin",name:"pin",type:"text",inputMode:"numeric",value:t.pin,onChange:c,onBlur:o,placeholder:"6-digit","aria-invalid":!!(a.pin&&r.pin)}),e.jsx(i.Error,{role:"alert",children:a.pin&&r.pin})]}),e.jsxs(i.Field,{className:"span2",invalid:a.address&&!!r.address,children:[e.jsxs("label",{htmlFor:"address",children:["Address ",e.jsx("em",{children:"*"})]}),e.jsx("input",{id:"address",name:"address",type:"text",value:t.address,onChange:c,onBlur:o,placeholder:"Street, Area, Landmark","aria-invalid":!!(a.address&&r.address)}),e.jsx(i.Error,{role:"alert",children:a.address&&r.address})]})]})]}),e.jsxs(i.Section,{children:[e.jsx(i.SectionTitle,{children:"Links"}),e.jsxs(i.Grid,{children:[e.jsxs(i.Field,{invalid:a.website&&!!r.website,children:[e.jsx("label",{htmlFor:"website",children:"Website"}),e.jsx("input",{id:"website",name:"website",type:"url",value:t.website,onChange:c,onBlur:o,placeholder:"https://...","aria-invalid":!!(a.website&&r.website)}),e.jsx(i.Error,{role:"alert",children:a.website&&r.website})]}),e.jsxs(i.Field,{invalid:a.portfolio&&!!r.portfolio,children:[e.jsx("label",{htmlFor:"portfolio",children:"Portfolio"}),e.jsx("input",{id:"portfolio",name:"portfolio",type:"url",value:t.portfolio,onChange:c,onBlur:o,placeholder:"https://...","aria-invalid":!!(a.portfolio&&r.portfolio)}),e.jsx(i.Error,{role:"alert",children:a.portfolio&&r.portfolio})]}),e.jsxs(i.Field,{invalid:a.github&&!!r.github,children:[e.jsx("label",{htmlFor:"github",children:"GitHub"}),e.jsx("input",{id:"github",name:"github",type:"url",value:t.github,onChange:c,onBlur:o,placeholder:"https://github.com/username","aria-invalid":!!(a.github&&r.github)}),e.jsx(i.Error,{role:"alert",children:a.github&&r.github})]}),e.jsxs(i.Field,{invalid:a.linkedin&&!!r.linkedin,children:[e.jsx("label",{htmlFor:"linkedin",children:"LinkedIn"}),e.jsx("input",{id:"linkedin",name:"linkedin",type:"url",value:t.linkedin,onChange:c,onBlur:o,placeholder:"https://linkedin.com/in/username","aria-invalid":!!(a.linkedin&&r.linkedin)}),e.jsx(i.Error,{role:"alert",children:a.linkedin&&r.linkedin})]})]})]}),e.jsxs(i.Section,{children:[e.jsxs(i.SectionTitle,{children:["Skills ",e.jsxs("small",{children:["(",Q," selected)"]})]}),e.jsx(i.Chips,{invalid:a.skills&&!!r.skills,children:xe.map(s=>{const l=t.skills.includes(s);return e.jsxs("label",{className:`chip ${l?"active":""}`,children:[e.jsx("input",{type:"checkbox",name:"skills",value:s,checked:l,onChange:c,onBlur:o}),e.jsx("span",{children:s})]},s)})}),e.jsx(i.Error,{role:"alert",className:"pad-top",children:a.skills&&r.skills})]}),e.jsxs(i.Section,{children:[e.jsx(i.SectionTitle,{children:"Files"}),e.jsxs(i.Grid,{children:[e.jsxs(i.Field,{invalid:a.resume&&!!r.resume,children:[e.jsx("label",{htmlFor:"resume",children:"Resume (PDF/DOC, < 2MB)"}),e.jsx("input",{id:"resume",name:"resume",type:"file",accept:".pdf,.doc,.docx",onChange:J,onBlur:o}),k&&e.jsxs(i.Help,{children:[k.name," — ",(k.size/G).toFixed(2)," MB"]}),e.jsx(i.Error,{role:"alert",children:a.resume&&r.resume})]}),e.jsxs(i.Field,{invalid:a.avatar&&!!r.avatar,children:[e.jsx("label",{htmlFor:"avatar",children:"Profile Photo (JPG/PNG/WEBP, < 1MB)"}),e.jsx("input",{id:"avatar",name:"avatar",type:"file",accept:"image/*",onChange:J,onBlur:o}),_&&e.jsx(i.Preview,{children:e.jsx("img",{src:_,alt:"Avatar preview image"})}),e.jsx(i.Error,{role:"alert",children:a.avatar&&r.avatar})]})]})]}),e.jsxs(i.Section,{children:[e.jsx(i.SectionTitle,{children:"Professional Summary"}),e.jsxs(i.Field,{className:"span2",invalid:a.summary&&!!r.summary,children:[e.jsxs("label",{htmlFor:"summary",children:["Short summary ",e.jsx("em",{children:"*"})]}),e.jsx("textarea",{id:"summary",name:"summary",rows:5,value:t.summary,onChange:c,onBlur:o,placeholder:"What do you bring to the table? Keep it crisp.","aria-invalid":!!(a.summary&&r.summary)}),e.jsxs(i.Counter,{ok:q,children:[L,"/",g.summaryMax]}),e.jsx(i.Error,{role:"alert",children:a.summary&&r.summary})]}),e.jsxs(i.Field,{className:"span2 terms",invalid:a.terms&&!!r.terms,children:[e.jsxs("label",{className:"checkbox",children:[e.jsx("input",{type:"checkbox",name:"terms",checked:t.terms,onChange:c,onBlur:o}),e.jsxs("span",{children:["I confirm that the above details are accurate. ",e.jsx("em",{children:"*"})]})]}),e.jsx(i.Error,{role:"alert",children:a.terms&&r.terms})]})]}),e.jsxs(i.Actions,{children:[e.jsx("button",{type:"button",className:"ghost",onClick:re,children:"Load Sample"}),e.jsx("button",{type:"button",className:"ghost",onClick:ee,children:"Clear Draft"}),e.jsx("div",{className:"spacer"}),e.jsx("button",{type:"submit",disabled:!te,children:"Submit"})]})]}),e.jsxs(i.Side,{children:[e.jsxs(i.Card,{children:[e.jsx("h3",{children:"Live Status"}),e.jsx("ul",{className:"status",children:[["Full Name",!r.fullName&&t.fullName],["DOB",!r.dob&&t.dob],["Email",!r.email&&t.email],["Phone",!r.phone&&t.phone],["Country",!r.country&&t.country],["State",!r.state&&t.state],["City",!r.city&&t.city],["PIN",!r.pin&&t.pin],["Skills (≥3)",!r.skills&&t.skills.length>=3],["Summary",q],["Terms",!!t.terms]].map(([s,l])=>e.jsxs("li",{className:l?"ok":"no",children:[e.jsx("span",{className:"dot"})," ",s]},s))}),e.jsx(i.Divider,{}),e.jsxs("p",{className:"muted",children:["Errors: ",e.jsx("strong",{children:Object.values(r).filter(Boolean).length})]})]}),e.jsxs(i.Card,{children:[e.jsx("h3",{children:"Tips"}),e.jsxs("ul",{className:"tips",children:[e.jsx("li",{children:"Ctrl/Cmd + K to open global search (if enabled)."}),e.jsxs("li",{children:["Use ",e.jsx("em",{children:"Load Sample"})," to see a valid example quickly."]}),e.jsx("li",{children:"Everything stays in your browser (localStorage)."})]})]})]})]})]})};export{ge as default};
