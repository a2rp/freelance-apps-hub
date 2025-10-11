import{d,r as n,R as U,j as o}from"./index-NxKaGGxV.js";const B="var(--card, #111)",h="var(--text, #eaeaea)",g="var(--muted, #a8a8a8)",p="var(--border, #242424)",v="var(--accent, #22c55e)",_="var(--danger, #ef4444)",H="var(--radius, 16px)",K="var(--shadow, 0 10px 30px rgba(0,0,0,0.35))",c={Wrapper:d.div`
        width: 100%;
        display: grid;
        place-items: start center;
        padding: 24px;
        color: ${h};
    `,Card:d.section`
        width: min(680px, 100%);
        background: ${B};
        border: 1px solid ${p};
        border-radius: ${H};
        box-shadow: ${K};
        padding: 20px;
    `,Header:d.header`
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 16px;
        h2 {
            margin: 0 0 4px;
            font-size: 20px;
        }
        .muted {
            color: ${g};
            margin: 0;
            font-size: 12px;
        }
    `,Tools:d.div`
        display: flex;
        gap: 8px;
        button {
            border: 1px solid ${p};
            background: transparent;
            color: ${h};
            border-radius: 10px;
            padding: 8px 12px;
            cursor: pointer;
        }
        button:hover {
            border-color: ${v};
        }
    `,SentRow:d.div`
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
        gap: 12px;
        margin: 10px 0 6px;
        .label {
            color: ${g};
            margin-right: 6px;
        }
        .value.ok {
            color: ${v};
        }
        .value.muted {
            color: ${g};
        }
        .cooldown {
            color: ${g};
            font-size: 12px;
        }
        button {
            border: 1px solid ${p};
            background: ${h};
            color: #111;
            border-radius: 10px;
            padding: 6px 10px;
            cursor: pointer;
        }
    `,Inputs:d.div`
        display: grid;
        grid-auto-flow: column;
        gap: 10px;
        justify-content: start;
        margin: 14px 0 6px;
    `,DigitInput:d.input`
        width: 50px;
        height: 56px;
        text-align: center;
        font-size: 22px;
        border-radius: 12px;
        border: 1px solid ${p};
        background: transparent;
        color: ${h};
        outline: none;
        &:focus {
            border-color: ${v};
            box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.2);
        }
        &::placeholder {
            color: ${g};
        }
    `,Actions:d.div`
        display: flex;
        align-items: center;
        gap: 10px;
        margin-top: 8px;
        button {
            border: 1px solid ${p};
            background: ${h};
            color: #111;
            border-radius: 10px;
            padding: 8px 12px;
            cursor: pointer;
        }
        .ghost {
            background: transparent;
            color: ${h};
            border-color: ${p};
        }
        .hint {
            color: ${g};
            font-size: 12px;
        }
        code {
            color: ${h};
            opacity: 0.9;
        }
    `,Message:d.div`
        margin-top: 12px;
        font-size: 14px;
        padding: 10px 12px;
        border-radius: 10px;
        border: 1px solid ${p};
        &[data-tone="ok"] {
            border-color: ${v};
        }
        &[data-tone="error"] {
            border-color: ${_};
        }
        &[data-tone="info"] {
            border-color: ${p};
        }
    `},l=6,V=15,P="otp-demo",F=()=>{const[m,b]=n.useState(Array(l).fill("")),[x,$]=n.useState(""),[w,S]=n.useState(0),[R,a]=n.useState(""),[k,s]=n.useState(""),[C,N]=n.useState(0),T=n.useRef([...Array(l)].map(()=>U.createRef()));n.useEffect(()=>{try{const t=localStorage.getItem(P);if(t){const e=JSON.parse(t);e.code&&e.sentAt&&($(e.code),S(e.sentAt))}}catch{}},[]),n.useEffect(()=>{const t=setInterval(()=>N(e=>e+1),1e3);return()=>clearInterval(t)},[]);const y=n.useMemo(()=>{if(!w)return 0;const t=Math.floor((Date.now()-w)/1e3),e=V-t;return e>0?e:0},[w,C]),j=n.useMemo(()=>m.join(""),[m]);function f(t){var r;const e=(r=T.current[t])==null?void 0:r.current;e&&e.focus()}function D(t,e){const r=(e||"").replace(/\D/g,"").slice(0,1);b(u=>{const i=[...u];return i[t]=r,i}),r&&t<l-1&&f(t+1)}function A(t,e){e.key==="Backspace"&&(!m[t]&&t>0&&f(t-1),a(""),s(""))}function E(t){const e=(t.clipboardData.getData("text")||"").replace(/\D/g,"");if(!e)return;const r=e.slice(0,l).split(""),u=[...Array(l)].map((J,z)=>r[z]||"");b(u);const i=Math.min(l-1,r.length);f(i),t.preventDefault()}function O(){const t=String(Math.floor(1e5+Math.random()*9e5)),e=Date.now();$(t),S(e),localStorage.setItem(P,JSON.stringify({code:t,sentAt:e})),b(Array(l).fill("")),a(""),s("OTP sent (demo). Enter the code to verify."),f(0)}function I(){if(!x){a("error"),s("Send OTP first.");return}if(y===0){a("error"),s("OTP expired. Resend a new one.");return}if(j.length!==l){a("error"),s("Enter all digits.");return}j===x?(a("ok"),s("Verified successfully.")):(a("error"),s("Invalid code. Try again."))}function L(){b(Array(l).fill("")),a(""),s(""),f(0)}function M(){const e=`<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<title>OTP</title>
<meta name="viewport" content="width=device-width, initial-scale=1" />
<style>
*{box-sizing:border-box}
body{margin:0;padding:24px;font:14px/1.4 system-ui,-apple-system,Segoe UI,Roboto,Arial;}
.card{max-width:420px;margin:0 auto;border:1px solid #ddd;border-radius:16px;padding:24px}
h1{font-size:18px;margin:0 0 6px}
p{margin:0 0 12px;color:#555}
.code{display:flex;gap:8px;justify-content:center;margin:12px 0 4px}
.box{width:44px;height:54px;border:1px solid #ccc;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:22px;letter-spacing:1px}
.small{color:#777;font-size:12px;text-align:center}
@media print {
  @page { margin: 12mm; }
}
</style>
</head>
<body>
  <div class="card">
    <h1>OTP</h1>
    <p>Use this One-Time Password:</p>
    <div class="code">
      ${(j||x||"------").split("").map(r=>`<div class="box">${r}</div>`).join("")}
    </div>
    <p class="small">Demo print • Not a real SMS/Email OTP</p>
  </div>
</body>
</html>`;try{const r=new Blob([e],{type:"text/html"}),u=URL.createObjectURL(r),i=window.open(u,"_blank","width=480,height=700");if(!i){a("error"),s("Popup blocked. Allow popups to print this card."),URL.revokeObjectURL(u);return}i.onload=()=>{try{i.focus(),i.print()}catch{}URL.revokeObjectURL(u)}}catch{a("error"),s("Could not open print window.")}}return o.jsx(c.Wrapper,{children:o.jsxs(c.Card,{"aria-label":"OTP card",children:[o.jsxs(c.Header,{children:[o.jsxs("div",{children:[o.jsx("h2",{children:"OTP"}),o.jsx("p",{className:"muted",children:"Local demo — generates a 6-digit code in-browser."})]}),o.jsx(c.Tools,{children:o.jsx("button",{type:"button",onClick:M,title:"Print OTP card",children:"Print"})})]}),o.jsxs(c.SentRow,{children:[o.jsxs("div",{className:"left",children:[o.jsx("span",{className:"label",children:"Status:"}),x?o.jsx("span",{className:"value ok",children:"Code generated"}):o.jsx("span",{className:"value muted",children:"No code yet"})]}),o.jsx("div",{className:"right",children:x&&y===0?o.jsx("button",{type:"button",onClick:O,children:"Resend OTP"}):y>0?o.jsxs("span",{className:"cooldown",children:["Resend in ",y,"s"]}):o.jsx("button",{type:"button",onClick:O,children:"Send OTP"})})]}),o.jsx(c.Inputs,{onPaste:E,children:m.map((t,e)=>o.jsx(c.DigitInput,{ref:T.current[e],value:t,onChange:r=>D(e,r.target.value),onKeyDown:r=>A(e,r),inputMode:"numeric",pattern:"[0-9]*",autoComplete:e===0?"one-time-code":"off","aria-label":`OTP digit ${e+1}`,maxLength:1,placeholder:"•"},e))}),o.jsxs(c.Actions,{children:[o.jsx("button",{type:"button",onClick:I,children:"Verify"}),o.jsx("button",{type:"button",className:"ghost",onClick:L,children:"Clear"}),x?o.jsxs("span",{className:"hint",children:["Demo code: ",o.jsx("code",{children:x})]}):null]}),k?o.jsx(c.Message,{"data-tone":R||"info",children:k}):null]})})};export{F as default};
