import{d,r as x,j as e}from"./index-CaRw1yxc.js";const y="var(--card, #0f1012)",w="var(--text, #eaeaea)",j="var(--muted, #a8a8a8)",p="var(--border, #242424)",v="var(--accent, #22c55e)",k="var(--radius, 16px)",$="var(--shadow, 0 10px 30px rgba(0,0,0,0.35))",a={Wrapper:d.div`
        display: flex;
        flex-direction: column;
        gap: 16px;
        color: ${w};
        padding: 15px;
        margin: auto;
        max-width: 1440px;
    `,Header:d.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 12px 14px;
        background: ${y};
        border: 1px solid ${p};
        border-radius: ${k};
        box-shadow: ${$};

        .title {
            font-size: 20px;
            font-weight: 600;
            letter-spacing: 0.2px;
        }
        .actions {
            display: flex;
            gap: 8px;
        }

        button {
            padding: 8px 12px;
            border: 1px solid ${p};
            border-radius: 10px;
            background: #141414;
            color: ${w};
            cursor: pointer;
            font-size: 14px;
        }
        button:hover {
            border-color: ${v};
        }
        button:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
    `,Body:d.div`
        display: grid;
        grid-template-columns: 320px 1fr;
        gap: 16px;

        @media (max-width: 980px) {
            grid-template-columns: 1fr;
        }
    `,Sidebar:d.aside`
        background: ${y};
        border: 1px solid ${p};
        border-radius: ${k};
        box-shadow: ${$};
        padding: 12px;

        input[type="range"] {
            width: 100%;
        }

        label {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 4px 0;
            font-size: 14px;
            color: ${w};
        }
    `,Group:d.div`
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 8px 0;
    `,Row:d.div`
        display: flex;
        gap: 8px;
        flex-wrap: wrap;

        .ghost {
            background: transparent;
        }
        button {
            padding: 8px 12px;
            border: 1px solid ${p};
            border-radius: 10px;
            background: #161616;
            color: ${w};
            font-size: 13px;
            cursor: pointer;
        }
        button:hover {
            border-color: ${v};
        }
    `,Label:d.div`
        font-size: 12px;
        color: ${j};
    `,Separator:d.hr`
        border: none;
        border-top: 1px solid ${p};
        margin: 10px 0;
        opacity: 0.6;
    `,Main:d.div`
        display: grid;
        gap: 16px;
        align-content: start;
    `,OutputCard:d.div`
        background: ${y};
        border: 1px solid ${p};
        border-radius: ${k};
        box-shadow: ${$};
        padding: 12px;
        display: grid;
        gap: 10px;
    `,PassBox:d.div`
        min-height: 56px;
        display: flex;
        align-items: center;
        padding: 10px 12px;
        border: 1px dashed ${p};
        border-radius: 10px;
        font-family: ui-monospace, SFMono-Regular, Menlo, Consolas,
            "Liberation Mono", monospace;
        font-size: 18px;
        letter-spacing: 0.5px;
        word-break: break-all;

        .muted {
            color: ${j};
        }
    `,Bar:d.div`
        height: 8px;
        border-radius: 999px;
        background: #171717;
        border: 1px solid ${p};
        overflow: hidden;

        span {
            display: block;
            height: 100%;
            background: ${v};
            transition: width 0.25s ease;
            width: 0%;
        }
    `,HistoryCard:d.div`
        background: ${y};
        border: 1px solid ${p};
        border-radius: ${k};
        box-shadow: ${$};
        padding: 12px;

        .h-title {
            font-weight: 600;
            margin-bottom: 8px;
        }
        .muted {
            color: ${j};
        }
    `,HistoryList:d.ul`
        display: grid;
        gap: 8px;
        list-style: none;
        padding: 0;
        margin: 0;

        li {
            display: grid;
            gap: 2px;
            padding: 8px 10px;
            border: 1px solid ${p};
            border-radius: 10px;
            background: #111;
        }
        .pwd {
            font-family: ui-monospace, SFMono-Regular, Menlo, Consolas,
                "Liberation Mono", monospace;
            font-size: 14px;
            word-break: break-all;
        }
        .meta {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            color: ${j};
            font-size: 12px;
        }
    `},M="abcdefghijklmnopqrstuvwxyz",A="ABCDEFGHIJKLMNOPQRSTUVWXYZ",H="0123456789",E="!@#$%^&*()-_=+[]{};:,.?/~",G="0OIl1|`'\".,;:[]{}()<>",O={length:16,useLower:!0,useUpper:!0,useNumbers:!0,useSymbols:!1,noAmbiguous:!0},P="passwordGenerator.history.v1",S=10;function C(o){const s=new Uint32Array(1);return window.crypto.getRandomValues(s),s[0]%o}function z(o){let s="";return o.useLower&&(s+=M),o.useUpper&&(s+=A),o.useNumbers&&(s+=H),o.useSymbols&&(s+=E),o.noAmbiguous&&(s=[...s].filter(r=>!G.includes(r)).join("")),s.length===0&&(s=M),s}function B(o){const s=z(o),r=[];o.useLower&&r.push(M),o.useUpper&&r.push(A),o.useNumbers&&r.push(H),o.useSymbols&&r.push(E);const g=r.map(n=>o.noAmbiguous?[...n].filter(c=>!G.includes(c)).join(""):n).filter(n=>n.length>0),i=[];g.forEach(n=>{i.push(n[C(n.length)])});const l=Math.max(0,o.length-i.length);for(let n=0;n<l;n++)i.push(s[C(s.length)]);for(let n=i.length-1;n>0;n--){const c=C(n+1);[i[n],i[c]]=[i[c],i[n]]}return i.join("")}function I(o){const s=z(o).length;return Math.round(o.length*Math.log2(s))}function T(o){return o<40?{label:"Very Weak",score:15}:o<60?{label:"Weak",score:30}:o<80?{label:"Moderate",score:55}:o<100?{label:"Strong",score:78}:{label:"Very Strong",score:100}}function F(){const o=new Date,r=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][o.getMonth()],g=o.getDate(),i=o.getFullYear(),l=m=>String(m).padStart(2,"0"),n=l(o.getHours()),c=l(o.getMinutes()),b=l(o.getSeconds());return`${r} ${g}, ${i} ${n}:${c}:${b} hrs`}function Y(){const[o,s]=x.useState(O),[r,g]=x.useState(""),[i,l]=x.useState(!1),[n,c]=x.useState([]),b=x.useMemo(()=>I(o),[o]),m=x.useMemo(()=>T(b),[b]);x.useEffect(()=>{try{const t=localStorage.getItem(P);t&&c(JSON.parse(t))}catch{}},[]),x.useEffect(()=>{try{localStorage.setItem(P,JSON.stringify(n.slice(0,S)))}catch{}},[n]);function h(t){s(u=>({...u,...t}))}function N(){const t=B(o);g(t),l(!1);const u={at:F(),len:o.length,lower:o.useLower,upper:o.useUpper,nums:o.useNumbers,syms:o.useSymbols,na:o.noAmbiguous,pwd:t};c(f=>[u,...f].slice(0,S))}async function L(){try{await navigator.clipboard.writeText(r),l(!0),setTimeout(()=>l(!1),1200)}catch{const t=document.createElement("textarea");t.value=r,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),l(!0),setTimeout(()=>l(!1),1200)}}function R(){if(!r)return;const t=document.createElement("iframe");t.style.position="fixed",t.style.right="0",t.style.bottom="0",t.style.width="0",t.style.height="0",t.style.border="0",document.body.appendChild(t);const u=t.contentDocument||t.contentWindow.document;u.open(),u.write(`<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Password</title>
    <style>
      @page { margin: 20mm; }
      html, body { margin:0; padding:0; background:#fff; }
      .wrap { display:flex; align-items:center; justify-content:center; min-height:100vh; }
      .pwd { font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace;
             font-size: 22pt; letter-spacing: 1px; }
    </style>
  </head>
  <body>
    <div class="wrap"><div class="pwd">${r.replace(/</g,"&lt;").replace(/>/g,"&gt;")}</div></div>
  </body>
</html>`),u.close();const f=()=>{t.contentWindow.focus(),t.contentWindow.print(),setTimeout(()=>document.body.removeChild(t),300)};t.contentWindow.document.readyState==="complete"?f():t.onload=f}function U(){window.confirm("Clear saved passwords history?")&&c([])}function W(){window.confirm("Reset options to defaults?")&&s(O)}return e.jsxs(a.Wrapper,{children:[e.jsxs(a.Header,{children:[e.jsx("div",{className:"title",children:"Password Generator"}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{onClick:N,children:"Generate"}),e.jsx("button",{onClick:L,disabled:!r,children:i?"Copied":"Copy"}),e.jsx("button",{onClick:R,disabled:!r,children:"Print"})]})]}),e.jsxs(a.Body,{children:[e.jsxs(a.Sidebar,{children:[e.jsxs(a.Group,{children:[e.jsxs(a.Label,{children:["Length: ",e.jsx("b",{children:o.length})]}),e.jsx("input",{type:"range",min:"4",max:"64",value:o.length,onChange:t=>h({length:Number(t.target.value)})})]}),e.jsxs(a.Group,{children:[e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:o.useLower,onChange:t=>h({useLower:t.target.checked})})," Lowercase"]}),e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:o.useUpper,onChange:t=>h({useUpper:t.target.checked})})," Uppercase"]}),e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:o.useNumbers,onChange:t=>h({useNumbers:t.target.checked})})," Numbers"]}),e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:o.useSymbols,onChange:t=>h({useSymbols:t.target.checked})})," Symbols"]}),e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:o.noAmbiguous,onChange:t=>h({noAmbiguous:t.target.checked})})," No ambiguous"]})]}),e.jsx(a.Separator,{}),e.jsxs(a.Group,{children:[e.jsx(a.Label,{children:"Strength"}),e.jsx(a.Bar,{"aria-label":`Strength ${m.label}`,children:e.jsx("span",{style:{width:`${m.score}%`}})}),e.jsxs("div",{className:"bits",children:[m.label," · ~",b," bits"]})]}),e.jsxs(a.Row,{children:[e.jsx("button",{onClick:W,children:"Reset Options"}),e.jsx("button",{className:"ghost",onClick:U,disabled:n.length===0,children:"Clear History"})]})]}),e.jsxs(a.Main,{children:[e.jsxs(a.OutputCard,{children:[e.jsx(a.PassBox,{title:"Generated password",children:r||e.jsx("span",{className:"muted",children:"Click Generate"})}),e.jsxs(a.Row,{children:[e.jsx("button",{onClick:N,children:"Regenerate"}),e.jsx("button",{onClick:L,disabled:!r,children:i?"Copied":"Copy"}),e.jsx("button",{onClick:R,disabled:!r,children:"Print"})]})]}),e.jsxs(a.HistoryCard,{children:[e.jsxs("div",{className:"h-title",children:["Recent (last ",S,")"]}),n.length===0?e.jsx("div",{className:"muted",children:"No history yet."}):e.jsx(a.HistoryList,{children:n.map((t,u)=>e.jsxs("li",{children:[e.jsx("code",{className:"pwd",children:t.pwd}),e.jsxs("div",{className:"meta",children:[e.jsx("span",{children:t.at}),e.jsxs("span",{children:["len ",t.len]}),e.jsxs("span",{children:[t.lower?"a":"",t.upper?"A":"",t.nums?"0":"",t.syms?"#":"",t.na?" · no-amb":""]})]})]},u))})]})]})]})]})}export{Y as default};
