import{d as n,r as a,j as t}from"./index-BC4hnjsZ.js";const I="var(--card, #111)",j="var(--text, #e9e9e9)",d="var(--muted, #b7b7b7)",h="var(--border, #222)",g="var(--accent, #22c55e)",C="var(--radius, 16px)",M=n.div`
    color: ${j};
    padding: var(--space-5, 32px) var(--space-4, 24px);
`,O=n.div`
    display: flex;
    gap: 12px;
    align-items: baseline;
    margin-bottom: var(--space-4, 24px);

    h1 {
        font-size: clamp(18px, 2vw, 24px);
        font-weight: 700;
        letter-spacing: 0.2px;
    }
    .muted {
        color: ${d};
        font-size: 12px;
    }
`,D=n.div`
    display: grid;
    grid-template-columns: 1.1fr 1fr;
    gap: var(--space-4, 24px);

    @media (max-width: 960px) {
        grid-template-columns: 1fr;
    }
`,J=n.section`
    background: ${I};
    border: 1px solid ${h};
    border-radius: ${C};
    box-shadow: var(--shadow, 0 8px 30px rgba(0, 0, 0, 0.25));
    padding: var(--space-4, 24px);
`,U=n.form`
    display: grid;
    gap: var(--space-3, 16px);

    input {
        width: 100%;
        background: #0f0f0f;
        color: ${j};
        border: 1px solid ${h};
        border-radius: 12px;
        padding: 12px 14px;
        outline: none;
    }
    input:focus {
        border-color: ${g};
        box-shadow: 0 0 0 3px color-mix(in srgb, ${g} 30%, transparent);
    }
    label {
        color: ${d};
        font-size: 12.5px;
    }
`,W=n.div`
    display: grid;
    gap: 8px;
`,K=n.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: center;
`,Q=n.div`
    margin-top: var(--space-3, 16px);
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`,S=n.button`
    border-radius: 12px;
    padding: 10px 14px;
    font-weight: 600;
    cursor: pointer;
    border: 1px solid ${h};
    background: #161616;
    color: ${j};

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`,q=n(S)`
    border-color: ${g};
    background: color-mix(in srgb, ${g} 16%, #161616);
`,V=n(S)``,X=n(S)`
    background: transparent;
`,Y=n.p`
    margin-top: 8px;
    color: ${d};
    font-size: 12px;
`,Z=n.div`
    border: 1px dashed ${h};
    border-radius: ${C};
    padding: 24px;
    text-align: center;
    background: #0f0f0f;

    .shop {
        color: ${d};
        margin-bottom: 8px;
    }
    .label {
        color: ${d};
        font-size: 12px;
        letter-spacing: 0.08em;
    }
    .token {
        font-size: clamp(36px, 7vw, 56px);
        font-weight: 800;
        letter-spacing: 0.06em;
        margin: 8px 0 6px;
    }
    .time {
        color: ${d};
        font-size: 12px;
    }
`,r={Wrapper:M,HeaderBar:O,Grid:D,Panel:J,Form:U,FieldRow:W,Row:K,Actions:Q,PrimaryBtn:q,SecondaryBtn:V,GhostBtn:X,TinyNote:Y,PreviewCard:Z},P="tokenPress",y=(e,o)=>{try{const i=localStorage.getItem(`${P}::${e}`);return i?JSON.parse(i):o}catch{return o}},k=(e,o)=>{try{localStorage.setItem(`${P}::${e}`,JSON.stringify(o))}catch{}},tt=(e,o)=>String(e).padStart(Number(o)||1,"0"),et=(e="")=>String(e).replace(/[^\d]/g,""),v=()=>new Date().toLocaleString(void 0,{year:"numeric",month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit"});function ot(){const[e,o]=a.useState(y("settings",{prefix:"A",pad:3,start:1,shop:""})),[i,l]=a.useState(y("current",1)),[T,B]=a.useState(v()),[z,$]=a.useState(!1);a.useEffect(()=>{const s=setInterval(()=>B(v()),1e3);return()=>clearInterval(s)},[]),a.useEffect(()=>k("settings",e),[e]),a.useEffect(()=>k("current",i),[i]),a.useEffect(()=>{y("current",null)===null&&l(Number(e.start||1))},[]);const b=a.useMemo(()=>`${(e.prefix||"").toString()}${tt(i,e.pad)}`,[e.prefix,e.pad,i]),p=s=>m=>{const c=s==="pad"||s==="start"?et(m.target.value):m.target.value;o(x=>({...x,[s]:c}))},_=()=>{!e.start||isNaN(Number(e.start))||l(Number(e.start))},R=async()=>{try{await navigator.clipboard.writeText(b),$(!0),setTimeout(()=>$(!1),1e3)}catch{}},E=s=>{var N;const m=rt({token:s,shop:(N=e.shop)==null?void 0:N.trim(),time:v()}),c=document.createElement("iframe");c.setAttribute("aria-hidden","true"),Object.assign(c.style,{position:"fixed",right:"0",bottom:"0",width:"0",height:"0",border:"0"}),document.body.appendChild(c);const x=f=>{(f==null?void 0:f.data)==="__tp_print_done__"&&(window.removeEventListener("message",x),setTimeout(()=>c.remove(),50))};window.addEventListener("message",x),c.srcdoc=`
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8" />
          <title>Print Ticket</title>
          <style>
            @page { size: auto; margin: 6mm; }
            html, body { height: 100%; }
            body { display: grid; place-items: center; }
          </style>
        </head>
        <body>
          ${m}
          <script>
            setTimeout(() => { window.focus(); window.print(); }, 60);
            window.onafterprint = () => { parent.postMessage("__tp_print_done__", "*"); };
          <\/script>
        </body>
      </html>
    `},A=()=>l(s=>Number(s)+1),L=()=>l(s=>Math.max(Number(e.start||1),Number(s)-1)),F=()=>E(b),G=()=>{confirm(`Reset counter to ${e.start||1}?`)&&l(Number(e.start||1))},H=Number(i)>Number(e.start||1);return t.jsxs(r.Wrapper,{children:[t.jsxs(r.HeaderBar,{children:[t.jsx("h1",{children:"TokenPress — Queue Ticket Printer"}),t.jsx("span",{className:"muted",children:"Single-purpose · Offline-first · LocalStorage only"})]}),t.jsxs(r.Grid,{children:[t.jsx(r.Panel,{children:t.jsxs(r.Form,{children:[t.jsx(u,{label:"Shop/Counter name (optional)",children:t.jsx("input",{type:"text",placeholder:"AR Clinic",value:e.shop,onChange:p("shop")})}),t.jsx(u,{label:"Prefix",children:t.jsx("input",{type:"text",placeholder:"A",value:e.prefix,onChange:p("prefix")})}),t.jsx(u,{label:"Pad (digits)",children:t.jsx("input",{type:"number",min:"1",max:"6",placeholder:"3",value:e.pad,onChange:p("pad")})}),t.jsx(u,{label:"Start number",children:t.jsxs(r.Row,{children:[t.jsx("input",{type:"number",min:"0",placeholder:"1",value:e.start,onChange:p("start")}),t.jsx(r.GhostBtn,{type:"button",onClick:_,children:"Set as start"})]})}),t.jsxs(r.Row,{children:[t.jsx(r.SecondaryBtn,{type:"button",onClick:A,children:"Next"}),t.jsx(r.SecondaryBtn,{type:"button",onClick:L,disabled:!H,children:"Prev"}),t.jsx(r.PrimaryBtn,{type:"button",onClick:F,children:"Print"}),t.jsx(r.GhostBtn,{type:"button",onClick:G,children:"Reset"})]})]})}),t.jsxs(r.Panel,{children:[t.jsxs(r.PreviewCard,{children:[t.jsx("div",{className:"shop",children:e.shop||"—"}),t.jsx("div",{className:"label",children:"Current token"}),t.jsx("div",{className:"token",children:b}),t.jsx("div",{className:"time",children:T})]}),t.jsx(r.Actions,{children:t.jsx(r.PrimaryBtn,{type:"button",onClick:R,children:z?"Copied!":"Copy token"})}),t.jsxs(r.TinyNote,{children:["Use ",t.jsx("b",{children:"Next"}),"/",t.jsx("b",{children:"Prev"})," to adjust; ",t.jsx("b",{children:"Print"})," prints the token currently shown."]})]})]})]})}function u({label:e,children:o}){return t.jsxs(r.FieldRow,{children:[t.jsx("label",{children:e}),o]})}function rt({token:e,shop:o,time:i}){return`
    <div style="
      width: 72mm;
      border: 1px dashed #bbb;
      padding: 10mm 6mm;
      font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
      color:#111;
    ">
      <div style="text-align:center; font-size:14px; opacity:.75; margin-bottom:6mm;">
        ${w(o||"")}
      </div>
      <div style="text-align:center; font-size:11px; letter-spacing:.1em; opacity:.6; margin-bottom:4mm;">
        TOKEN
      </div>
      <div style="text-align:center; font-weight:800; font-size:36px; letter-spacing:.06em; margin-bottom:6mm;">
        ${w(e)}
      </div>
      <div style="text-align:center; font-size:11px; opacity:.7;">
        ${w(i)}
      </div>
    </div>
  `}function w(e=""){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;")}export{ot as default};
