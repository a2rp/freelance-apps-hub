import{f as B,d as m,r as x,j as e}from"./index-BqroQIHt.js";const N="var(--text, #e9e9e9)",D="var(--muted, #b7b7b7)",v="var(--border, #222)",E="var(--card, #111)",S="var(--accent, #22c55e)",F="var(--radius, 16px)",C="var(--shadow, 0 6px 24px rgba(0,0,0,.3))",I=B`
  @media print {
    /* force light page for print */
    :root { color-scheme: light !important; }
    html, body, #root, main, .App, .app, .layout {
      background: #fff !important;
      color: #111 !important;
    }

    /* hide everything... */
    body * { visibility: hidden !important; }

    /* ...except the current preview */
    [data-print="true"],
    [data-print="true"] * {
      visibility: visible !important;
    }

    /* make the preview fill the page and drop app chrome */
    [data-print="true"] {
      position: fixed !important;
      left: 0; top: 0;
      width: 100% !important;
      box-shadow: none !important;
      background: #fff !important;
      color: #111 !important;
      padding: 0 !important;
      margin: 0 !important;
    }

    /* clean margins for PDF */
    @page { margin: 14mm; padding: 30px; }
  }
`,U=m.div`
    color: ${N};
    padding: 24px;
    max-width: 1200px;
    margin: 0 auto;
`,M=m.header`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 18px;

    .title h1 {
        margin: 0;
        font-size: 24px;
    }
    .title .muted {
        color: ${D};
    }
`,H=m.div`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;

    select {
        background: ${E};
        color: ${N};
        border: 1px solid ${v};
        border-radius: 10px;
        padding: 8px 10px;
    }

    .btn {
        background: ${S};
        color: #0b0b0b;
        border: 1px solid ${S};
        border-radius: ${F};
        padding: 8px 12px;
        font-weight: 600;
        cursor: pointer;
        box-shadow: ${C};
    }
    .btn.ghost {
        background: transparent;
        color: ${N};
        border: 1px solid ${v};
    }
`,W=m.div`
    display: grid;
    grid-template-columns: 420px 1fr;
    gap: 16px;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
    }
`,z=m.section`
    background: ${E};
    border: 1px solid ${v};
    border-radius: ${F};
    padding: 16px;
    box-shadow: ${C};

    form {
        display: grid;
        gap: 10px;
    }
    .row {
        display: grid;
        gap: 6px;
    }
    .row.two {
        grid-template-columns: 1fr 1fr;
        gap: 10px;
    }
    .row.end {
        display: flex;
        justify-content: flex-end;
        gap: 10px;
    }

    label {
        font-size: 12px;
        color: ${D};
    }
    input,
    textarea {
        background: #0e0e0e;
        color: ${N};
        border: 1px solid ${v};
        border-radius: 10px;
        padding: 8px 10px;
        outline: none;
    }
    textarea {
        resize: vertical;
    }

    .photoRow {
        display: flex;
        align-items: center;
        gap: 10px;
        flex-wrap: wrap;
    }
    .mini {
        width: 40px;
        height: 40px;
        object-fit: cover;
        border-radius: 8px;
        border: 1px solid ${v};
    }
`,O=m.section`
    display: grid;
    gap: 16px;
`,_=m.article`
    background: #fff;
    color: #111;
    border-radius: 12px;
    padding: 18px;
    box-shadow: ${C};
    min-height: 400px;

    &[hidden] {
        display: none !important;
    }

    .paper-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        margin-bottom: 12px;
    }
    .who h1 {
        margin: 0;
        font-size: 22px;
    }
    .who p {
        margin: 2px 0;
    }
    .muted {
        color: #555;
    }

    .avatar {
        width: 84px;
        height: 84px;
        object-fit: cover;
        border-radius: 10px;
    }

    .card {
        border: 1px solid #e8e8e8;
        border-radius: 10px;
        padding: 12px;
        margin: 10px 0;
    }

    .tags {
        margin-top: 6px;
    }
    .tag {
        display: inline-block;
        border: 1px solid #e1e1e1;
        border-radius: 999px;
        padding: 4px 10px;
        margin: 4px 6px 0 0;
        font-size: 12px;
        background: #fafafa;
    }

    .grid {
        display: grid;
        gap: 10px;
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .proj h3 {
        margin: 0 0 4px 0;
        font-size: 15px;
    }
    .proj .muted {
        margin: 0 0 6px 0;
    }
    .proj a {
        text-decoration: none;
        color: #111;
        border: 1px dashed #ccc;
        border-radius: 8px;
        padding: 4px 8px;
    }

    .plain {
        list-style: none;
        padding-left: 0;
        margin: 6px 0 0 0;
    }
    .plain li {
        margin: 2px 0;
    }

    .two-col {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
    }

    .card,
    .proj,
    .exp {
        break-inside: avoid;
        page-break-inside: avoid;
    }
`,G=m.div`
    height: 0;
    overflow: hidden;
`,p={Wrapper:U,Header:M,Actions:H,Layout:W,FormCard:z,PreviewArea:O,Paper:_,PrintNote:G},T="personalPortfolioForm_v2",$={fullName:"Ashish Ranjan",title:"Full-stack JavaScript Developer",location:"Bengaluru, IN",email:"ashish@ashishranjan.net",phone:"",website:"https://ashishranjan.net",github:"https://github.com/a2rp",linkedin:"",summary:"I build clean, single-focus tools that solve real problems. Strong on React, Node/Express, and shipping fast with polish.",photoData:"",skillsCsv:"React (Vite), Styled-Components, Node/Express, MongoDB, HTML/SCSS/JS, GitHub Pages, Netlify/Cloudflare, LLM/AI (experiments)",projectsText:["UPI QR Styled | Logo overlay, presets | /upi-qr-styled","Shop Billing (Lite) | Fast line items + print | /shop-billing","Daily Focus Planner | Half-hour blocks, printable | /daily-focus-planner","Attendance Tracker (Lite) | Per-subject %, alerts | /attendance-tracker-lite","Smart Timetable | Period grid | /smart-timetable","Rate Card | Service price card | /rate-card"].join(`
`),experienceText:["Senior Frontend @ Freelance | 2016 - Present | Built 50+ focused tools; Shipped real-world UIs for schools, gyms, shops"].join(`
`),educationText:"B.Tech (CSE) | XYZ University | 2014",achievementsText:"Top projects trending in local network; OSS contributions across multiple repos"};function R(t){return t.split(",").map(i=>i.trim()).filter(Boolean)}function J(t){return t.split(`
`).map(i=>i.trim()).filter(Boolean).map(i=>{const[s,d,n]=i.split("|").map(o=>(o||"").trim());return{title:s,note:d,link:n}})}function V(t){return t.split(`
`).map(i=>i.trim()).filter(Boolean).map(i=>{const[s,d,n]=i.split("|").map(h=>(h||"").trim()),o=(n||"").split(";").map(h=>h.trim()).filter(Boolean);return{headline:s,period:d,bullets:o}})}function Y(t){return t.split(`
`).map(i=>i.trim()).filter(Boolean).map(i=>{const[s,d,n]=i.split("|").map(o=>(o||"").trim());return{degree:s,institute:d,year:n}})}async function q(t,i=512,s=.9){const d=await new Promise((g,b)=>{const c=new FileReader;c.onload=()=>g(c.result),c.onerror=b,c.readAsDataURL(t)});if(!String(t.type).startsWith("image/"))return d;const n=await new Promise((g,b)=>{const c=new Image;c.onload=()=>g(c),c.onerror=b,c.src=d}),{width:o,height:h}=n,w=Math.min(1,i/Math.max(o,h)),r=Math.max(1,Math.round(o*w)),y=Math.max(1,Math.round(h*w)),j=document.createElement("canvas");return j.width=r,j.height=y,j.getContext("2d").drawImage(n,0,0,r,y),j.toDataURL("image/jpeg",s)}const Q=()=>{const[t,i]=x.useState($),[s,d]=x.useState("portfolio"),[n,o]=x.useState(null),h=x.useRef(null),w=x.useRef(null);x.useEffect(()=>{try{const a=localStorage.getItem(T);a&&i(l=>({...l,...JSON.parse(a)}))}catch{}},[]),x.useEffect(()=>{try{localStorage.setItem(T,JSON.stringify(t))}catch{}},[t]),x.useEffect(()=>{const a=()=>o(null);return window.addEventListener("afterprint",a),()=>window.removeEventListener("afterprint",a)},[]);const r=a=>{const{name:l,value:u}=a.target;i(f=>({...f,[l]:u}))},y=async a=>{var u;const l=(u=a.target.files)==null?void 0:u[0];if(l)try{const f=await q(l,600,.92);i(P=>({...P,photoData:f}))}catch{}},j=()=>i(a=>({...a,photoData:""})),k=R(t.skillsCsv),g=J(t.projectsText),b=V(t.experienceText),c=Y(t.educationText),L=R(t.achievementsText),A=()=>{o(s),setTimeout(()=>window.print(),50)};return e.jsxs(e.Fragment,{children:[e.jsx(I,{}),e.jsxs(p.Wrapper,{children:[e.jsxs(p.Header,{children:[e.jsxs("div",{className:"title",children:[e.jsx("h1",{children:"Personal Portfolio"}),e.jsx("p",{className:"muted",children:"Fill details → generate Portfolio & Resume → Save as PDF (prints only selected)"})]}),e.jsxs(p.Actions,{children:[e.jsxs("select",{"aria-label":"View",value:s,onChange:a=>d(a.target.value),children:[e.jsx("option",{value:"portfolio",children:"Portfolio"}),e.jsx("option",{value:"resume",children:"Resume"})]}),e.jsx("button",{className:"btn",onClick:A,title:"Save as PDF",children:"Save as PDF"})]})]}),e.jsxs(p.Layout,{children:[e.jsx(p.FormCard,{children:e.jsxs("form",{onSubmit:a=>a.preventDefault(),children:[e.jsxs("div",{className:"row",children:[e.jsx("label",{children:"Full Name"}),e.jsx("input",{name:"fullName",value:t.fullName,onChange:r})]}),e.jsxs("div",{className:"row two",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Title"}),e.jsx("input",{name:"title",value:t.title,onChange:r})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Location"}),e.jsx("input",{name:"location",value:t.location,onChange:r})]})]}),e.jsxs("div",{className:"row two",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Email"}),e.jsx("input",{name:"email",value:t.email,onChange:r})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Phone"}),e.jsx("input",{name:"phone",value:t.phone,onChange:r})]})]}),e.jsxs("div",{className:"row",children:[e.jsx("label",{children:"Website"}),e.jsx("input",{name:"website",value:t.website,onChange:r})]}),e.jsxs("div",{className:"row two",children:[e.jsxs("div",{children:[e.jsx("label",{children:"GitHub"}),e.jsx("input",{name:"github",value:t.github,onChange:r})]}),e.jsxs("div",{children:[e.jsx("label",{children:"LinkedIn"}),e.jsx("input",{name:"linkedin",value:t.linkedin,onChange:r})]})]}),e.jsxs("div",{className:"row",children:[e.jsx("label",{children:"Photo (local file)"}),e.jsxs("div",{className:"photoRow",children:[e.jsx("input",{type:"file",accept:"image/*",onChange:y}),t.photoData?e.jsxs(e.Fragment,{children:[e.jsx("img",{className:"mini",alt:"preview",src:t.photoData}),e.jsx("button",{type:"button",className:"btn ghost",onClick:j,children:"Remove"})]}):null]})]}),e.jsxs("div",{className:"row",children:[e.jsx("label",{children:"Summary"}),e.jsx("textarea",{name:"summary",rows:3,value:t.summary,onChange:r})]}),e.jsxs("div",{className:"row",children:[e.jsx("label",{children:"Skills (comma separated)"}),e.jsx("input",{name:"skillsCsv",value:t.skillsCsv,onChange:r})]}),e.jsxs("div",{className:"row",children:[e.jsx("label",{children:"Projects (one per line: title | note | link)"}),e.jsx("textarea",{name:"projectsText",rows:6,value:t.projectsText,onChange:r})]}),e.jsxs("div",{className:"row",children:[e.jsx("label",{children:"Experience (one per line: role @ company | period | bullet1; bullet2)"}),e.jsx("textarea",{name:"experienceText",rows:5,value:t.experienceText,onChange:r})]}),e.jsxs("div",{className:"row",children:[e.jsx("label",{children:"Education (one per line: degree | institute | year)"}),e.jsx("textarea",{name:"educationText",rows:3,value:t.educationText,onChange:r})]}),e.jsxs("div",{className:"row",children:[e.jsx("label",{children:"Achievements (comma separated)"}),e.jsx("input",{name:"achievementsText",value:t.achievementsText,onChange:r})]}),e.jsxs("div",{className:"row end",children:[e.jsx("button",{className:"btn ghost",type:"button",onClick:()=>i($),title:"Reset to sample",children:"Reset sample"}),e.jsx("button",{className:"btn",type:"button",onClick:()=>{},title:"Update preview",children:"Update preview"})]})]})}),e.jsxs(p.PreviewArea,{children:[e.jsxs(p.Paper,{ref:h,"data-kind":"portfolio","data-print":n==="portfolio",hidden:s!=="portfolio",children:[e.jsxs("header",{className:"paper-head",children:[e.jsxs("div",{className:"who",children:[e.jsx("h1",{children:t.fullName}),e.jsx("p",{children:t.title}),e.jsx("p",{className:"muted",children:t.location})]}),t.photoData?e.jsx("img",{className:"avatar",src:t.photoData,alt:t.fullName}):null]}),e.jsxs("section",{className:"card",children:[e.jsx("p",{children:t.summary}),e.jsx("div",{className:"tags",children:k.map(a=>e.jsx("span",{className:"tag",children:a},a))})]}),e.jsxs("section",{className:"card",children:[e.jsx("h2",{children:"Selected Projects"}),e.jsx("div",{className:"grid",children:g.map(a=>e.jsxs("article",{className:"proj",children:[e.jsx("h3",{children:a.title}),e.jsx("p",{className:"muted",children:a.note}),a.link?a.link.startsWith("/")?e.jsx("a",{href:a.link,title:a.title,children:"Open"}):e.jsx("a",{href:a.link,target:"_blank",rel:"noreferrer",title:a.title,children:"Open"}):null]},a.title))})]}),e.jsxs("section",{className:"card",children:[e.jsx("h2",{children:"Links"}),e.jsxs("ul",{className:"plain",children:[t.website&&e.jsx("li",{children:e.jsx("a",{href:t.website,target:"_blank",rel:"noreferrer",children:"Website"})}),t.github&&e.jsx("li",{children:e.jsx("a",{href:t.github,target:"_blank",rel:"noreferrer",children:"GitHub"})}),t.linkedin&&e.jsx("li",{children:e.jsx("a",{href:t.linkedin,target:"_blank",rel:"noreferrer",children:"LinkedIn"})}),t.email&&e.jsx("li",{children:e.jsx("a",{href:`mailto:${t.email}`,children:t.email})}),t.phone&&e.jsx("li",{children:t.phone})]})]})]}),e.jsxs(p.Paper,{ref:w,"data-kind":"resume","data-print":n==="resume",hidden:s!=="resume",children:[e.jsxs("header",{className:"paper-head",children:[e.jsxs("div",{className:"who",children:[e.jsx("h1",{children:t.fullName}),e.jsx("p",{children:t.title}),e.jsxs("p",{className:"muted",children:[t.location," • ",t.email," ",t.phone?`• ${t.phone}`:""," ",t.website?`• ${t.website}`:""]})]}),t.photoData?e.jsx("img",{className:"avatar",src:t.photoData,alt:t.fullName}):null]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Summary"}),e.jsx("p",{children:t.summary})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Skills"}),e.jsx("div",{className:"tags",children:k.map(a=>e.jsx("span",{className:"tag",children:a},a))})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Experience"}),b.map((a,l)=>{var u;return e.jsxs("article",{className:"exp",children:[e.jsx("h3",{children:a.headline}),e.jsx("p",{className:"muted",children:a.period}),(u=a.bullets)!=null&&u.length?e.jsx("ul",{children:a.bullets.map((f,P)=>e.jsx("li",{children:f},P))}):null]},l)})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Projects"}),e.jsx("ul",{children:g.map(a=>e.jsxs("li",{children:[e.jsxs("strong",{children:[a.title,":"]})," ",a.note," ",a.link?e.jsxs("em",{children:["— ",a.link]}):null]},a.title))})]}),e.jsxs("section",{className:"two-col",children:[e.jsxs("div",{children:[e.jsx("h2",{children:"Education"}),c.map((a,l)=>e.jsxs("p",{children:[e.jsx("strong",{children:a.degree}),", ",a.institute," — ",a.year]},l))]}),e.jsxs("div",{children:[e.jsx("h2",{children:"Achievements"}),e.jsx("ul",{children:L.map((a,l)=>e.jsx("li",{children:a},l))})]})]})]})]})]}),e.jsxs(p.PrintNote,{"aria-hidden":!0,"data-active":!!n,children:["Printing only: ",n||"-"]})]})]})};export{Q as default};
