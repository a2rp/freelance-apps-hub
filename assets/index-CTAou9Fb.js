import{d as n,r as a,j as e}from"./index-C86gdwjR.js";const y="var(--card, #0f1012)",f="var(--text, #eaeaea)",p="var(--muted, #a8a8a8)",o="var(--border, #242424)",w="var(--accent, #22c55e)",le="var(--danger, #ef4444)",m="var(--radius, 16px)",j="var(--shadow, 0 10px 30px rgba(0,0,0,0.35))",l={Wrapper:n.div`
        display: flex;
        flex-direction: column;
        gap: 16px;
        color: ${f};
        max-width: 1440px;
        padding: 15px;
        margin: auto;
    `,Header:n.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 12px 14px;
        background: ${y};
        border: 1px solid ${o};
        border-radius: ${m};
        box-shadow: ${j};

        .title {
            font-size: 20px;
            font-weight: 600;
        }
        .actions {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }
        .group {
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .lbl {
            color: ${p};
            font-size: 12px;
        }
        .segBtns {
            display: inline-flex;
            gap: 6px;
            background: #121212;
            padding: 4px;
            border: 1px solid ${o};
            border-radius: 10px;
        }

        button {
            padding: 8px 12px;
            border: 1px solid ${o};
            border-radius: 10px;
            background: #141414;
            color: ${f};
            font-size: 14px;
            cursor: pointer;
        }
        button:hover {
            border-color: ${w};
        }
        button:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
        .segBtns button {
            padding: 6px 10px;
            font-size: 13px;
        }
        .segBtns .active {
            border-color: ${w};
            outline: 1px solid ${w};
        }
    `,Body:n.div`
        display: grid;
        align-content: start;
        gap: 12px;
    `,Metrics:n.div`
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 10px;

        .metric {
            background: ${y};
            border: 1px solid ${o};
            border-radius: ${m};
            box-shadow: ${j};
            padding: 10px;
            text-align: center;
        }
        .value {
            font-size: 20px;
            font-weight: 700;
        }
        .key {
            color: ${p};
            font-size: 12px;
        }
        @media (max-width: 640px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    `,PassageCard:n.div`
        position: relative;
        background: ${y};
        border: 1px solid ${o};
        border-radius: ${m};
        box-shadow: ${j};
        padding: 14px;
        cursor: text;
    `,Passage:n.div`
        line-height: 1.9;
        letter-spacing: 0.2px;
        font-size: 18px;
        user-select: none;

        span.ok {
            color: #c6f6d5;
        }
        span.err {
            color: #fca5a5;
            text-decoration: underline;
        }
        span.active {
            position: relative;
            color: ${f};
            background: rgba(255, 255, 255, 0.06);
            border-radius: 6px;
            outline: 1px dashed ${w};
        }
    `,Overlay:n.div`
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.55);
        display: grid;
        place-items: center;
        font-weight: 700;
        font-size: 28px;
        border-radius: ${m};
    `,InputRow:n.div`
        textarea {
            width: 100%;
            min-height: 96px;
            resize: vertical;
            padding: 12px;
            background: #141414;
            color: ${f};
            border: 1px solid ${o};
            border-radius: ${m};
            outline: none;
        }
        textarea:focus {
            border-color: ${w};
        }
        textarea::placeholder {
            color: ${p};
        }
    `,ResultsCard:n.div`
        background: ${y};
        border: 1px solid ${o};
        border-radius: ${m};
        box-shadow: ${j};
        padding: 14px;

        .title {
            font-weight: 700;
            margin-bottom: 8px;
        }
        .grid {
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 10px;
        }
        .item {
            border: 1px solid ${o};
            border-radius: 12px;
            padding: 10px;
            background: #121212;
            text-align: center;
        }
        .big {
            font-size: 20px;
            font-weight: 700;
        }
        .muted {
            color: ${p};
            font-size: 12px;
        }

        .meta {
            display: flex;
            gap: 12px;
            margin-top: 10px;
            color: ${p};
            font-size: 12px;
            flex-wrap: wrap;
        }

        @media (max-width: 640px) {
            .grid {
                grid-template-columns: repeat(2, minmax(0, 1fr));
            }
        }
    `,History:n.section`
        background: ${y};
        border: 1px solid ${o};
        border-radius: ${m};
        box-shadow: ${j};
        padding: 14px;

        .hTitle {
            font-weight: 700;
            margin-bottom: 10px;
        }
        .empty {
            color: ${p};
            font-size: 14px;
        }

        .list {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 8px;
        }
        .row {
            display: grid;
            grid-template-columns: 96px 110px 1fr;
            gap: 10px;
            align-items: center;
            border: 1px solid ${o};
            border-radius: 12px;
            padding: 10px;
            background: #121212;
        }
        .stat {
            text-align: center;
        }
        .wpm {
            font-weight: 800;
            font-size: 22px;
        }
        .acc {
            font-weight: 700;
            font-size: 18px;
        }
        .label {
            color: ${p};
            font-size: 11px;
            margin-top: 2px;
        }
        .meta {
            color: ${p};
            font-size: 12px;
        }
        .meta .line {
            line-height: 1.3;
        }
        .snip {
            grid-column: 1 / -1; /* ← span full width */
            width: 100%;
            margin-top: 8px;
            color: ${f};
            font-size: 13px;
            line-height: 1.6;
            white-space: pre-wrap; /* keep line breaks from the passage */
            overflow-wrap: anywhere; /* avoid overflow on long words */
        }

        @media (max-width: 720px) {
            .row {
                grid-template-columns: 80px 90px 1fr;
            }
            .wpm {
                font-size: 20px;
            }
            .acc {
                font-size: 16px;
            }
        }
    `,ModalBackdrop:n.div`
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.6);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
    `,ModalCard:n.div`
        width: min(420px, 92vw);
        background: ${y};
        border: 1px solid ${o};
        border-radius: ${m};
        box-shadow: ${j};
        padding: 16px;

        .title {
            font-weight: 600;
            margin-bottom: 6px;
            color: ${f};
        }
        .msg {
            color: ${p};
            font-size: 14px;
            margin-bottom: 12px;
        }
        .row {
            display: flex;
            gap: 8px;
            justify-content: flex-end;
        }

        button {
            padding: 8px 12px;
            border: 1px solid ${o};
            border-radius: 10px;
            background: #141414;
            color: ${f};
            cursor: pointer;
            font-size: 14px;
        }
        button:hover {
            border-color: ${w};
        }
        .ghost {
            background: transparent;
        }
        .danger {
            background: #1a0f10;
            border-color: ${le};
        }
    `},q={short:["Practice makes progress, not perfection.","Clean code is simple, direct, and readable.","Typing calm and steady beats rushing.","Focus on accuracy first, speed later.","Small wins repeated daily become skill."],medium:["Great interfaces feel quiet. Every action is obvious, every result is expected, and nothing fights for your attention while you work.","Writing code for other people means naming clearly, handling edge cases, and leaving the next developer with fewer surprises.","Consistency beats cleverness. A consistent pattern makes code faster to read, maintain, and extend without fear."],long:["A reliable workflow removes friction from creative work. Build small pieces, test them quickly, and keep moving forward. Over time the tiny steps accumulate into something substantial. Speed comes from reducing hesitation and designing for clarity.","Craftsmanship is repetition with attention. You revisit familiar tasks, refine small decisions, and deliberately remove unnecessary complexity. The goal is to make common operations effortless and rare operations understandable."]},de=[30,60,120],O="typingTest:results";function pe(){const[b,F]=a.useState("short"),[d,G]=a.useState(60),[x,X]=a.useState(q.short[0]),[c,R]=a.useState(""),[u,z]=a.useState(!1),[g,M]=a.useState(!1),[r,k]=a.useState(!1),[P,N]=a.useState(d),[_,W]=a.useState(!1),[Q,D]=a.useState(!1),[$,J]=a.useState([]),S=a.useRef(null),E=a.useRef(null),I=a.useRef(null),T=a.useRef(!1);a.useEffect(()=>{try{const t=JSON.parse(localStorage.getItem(O)||"[]");Array.isArray(t)&&J(t)}catch{}},[]),a.useEffect(()=>{K(b)},[b]),a.useEffect(()=>{u||N(d)},[d,u]),a.useEffect(()=>{if(!u||g||r)return;const t=setInterval(()=>{N(s=>s<=1?(clearInterval(t),k(!0),0):s-1)},1e3);return()=>clearInterval(t)},[u,g,r]),a.useEffect(()=>{var t;!g&&!r&&((t=S.current)==null||t.focus())},[g,r]),a.useEffect(()=>{r&&U()},[r]);function K(t){const s=q[t],i=s[Math.floor(Math.random()*s.length)];X(i),R(""),z(!1),M(!1),k(!1),T.current=!1,N(d)}function V(t){const s=t.target.value;!u&&s.length>0&&z(!0),R(s)}const{correct:v,errors:L}=a.useMemo(()=>{let t=0,s=0;for(let i=0;i<c.length;i++)c[i]===x[i]?t++:s++;return{correct:t,errors:s}},[c,x]),C=a.useMemo(()=>d-P,[d,P]),B=C>0?C/60:0,A=a.useMemo(()=>B===0?0:Math.max(0,Math.round(v/5/B)),[v,B]),H=a.useMemo(()=>{const t=c.length||1;return Math.round(v/t*100)},[v,c.length]);function Z(){return{timestamp:new Date().toISOString(),duration:d,elapsed:C,length:b,wpm:A,accuracy:H,correct:v,errors:L,totalTyped:c.length,targetLength:x.length,targetText:x}}function U(){if(T.current)return;const t=Z();try{const s=JSON.parse(localStorage.getItem(O)||"[]");s.unshift(t),localStorage.setItem(O,JSON.stringify(s)),J(s),T.current=!0,D(!0),setTimeout(()=>D(!1),1500)}catch{}}function ee(){W(!0)}function te(){var t;R(""),z(!1),M(!1),k(!1),T.current=!1,N(d),W(!1),(t=S.current)==null||t.focus()}function Y(){W(!1)}function se(){!u||r||M(t=>!t)}function ae(){r||k(!0),U()}function ie(){if(!E.current)return;const t=E.current.outerHTML,s=document.createElement("iframe");s.style.position="fixed",s.style.right="0",s.style.bottom="0",s.style.width="0",s.style.height="0",s.style.border="0",document.body.appendChild(s);const i=s.contentDocument||s.contentWindow.document;i.open(),i.write(`<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Typing Test Result</title>
    <style>
      @page { margin: 16px; }
      html, body { margin:0; padding:0; background:#fff; font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif; }
      .printWrap { max-width: 640px; margin: 24px auto; }
      .card { border:1px solid #ddd; border-radius:12px; padding:16px; }
      .title { font-weight:700; margin-bottom:8px; font-size:18px; }
      .grid { display:grid; grid-template-columns:1fr 1fr; gap:8px; }
      .item { padding:8px 10px; border:1px solid #eee; border-radius:10px; }
      .muted { color:#666; font-size:12px; }
    </style>
  </head>
  <body>
    <div class="printWrap">${t}</div>
  </body>
</html>`),i.close();const h=()=>{s.contentWindow.focus(),s.contentWindow.print(),setTimeout(()=>document.body.removeChild(s),300)};s.contentWindow.document.readyState==="complete"?h():s.onload=h}function re(){if(!I.current||$.length===0)return;const t=I.current.outerHTML,s=document.createElement("iframe");s.style.position="fixed",s.style.right="0",s.style.bottom="0",s.style.width="0",s.style.height="0",s.style.border="0",document.body.appendChild(s);const i=s.contentDocument||s.contentWindow.document;i.open(),i.write(`<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Typing Test — Saved Results</title>
    <style>
      @page { margin: 16px; }
      html, body { margin:0; padding:0; background:#fff; font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif; }
      .printWrap { max-width: 860px; margin: 24px auto; }
      .hTitle { font-weight: 700; margin-bottom: 10px; font-size: 18px; }
      .list { list-style: none; padding: 0; margin: 0; display: grid; gap: 10px; }
      .row { display: grid; grid-template-columns: 96px 110px 1fr; gap: 10px; align-items: start; border: 1px solid #ddd; border-radius: 12px; padding: 10px; background: #fafafa; break-inside: avoid; page-break-inside: avoid; }
      .stat { text-align: center; }
      .wpm { font-weight: 800; font-size: 22px; }
      .acc { font-weight: 700; font-size: 18px; }
      .label { color: #666; font-size: 11px; margin-top: 2px; }
      .meta { color: #666; font-size: 12px; }
      .meta .line { line-height: 1.3; }
      .snip { grid-column: 1 / -1; width: 100%; margin-top: 8px; color: #111; font-size: 13px; line-height: 1.6; white-space: pre-wrap; overflow-wrap: anywhere; }
      @media print { .row { background: #fff; } }
    </style>
  </head>
  <body>
    <div class="printWrap">${t}</div>
  </body>
</html>`),i.close();const h=()=>{s.contentWindow.focus(),s.contentWindow.print(),setTimeout(()=>document.body.removeChild(s),300)};s.contentWindow.document.readyState==="complete"?h():s.onload=h}function ne(t){try{return new Date(t).toLocaleString()}catch{return t}}function oe(){const t=[];for(let s=0;s<x.length;s++){let i="";s<c.length?i=c[s]===x[s]?"ok":"err":s===c.length&&!r&&(i="active");const h=x[s]??"";t.push(e.jsx("span",{className:i===""?void 0:i,children:h},s))}return t}return e.jsxs(l.Wrapper,{children:[e.jsxs(l.Header,{children:[e.jsx("div",{className:"title",children:"Typing Test"}),e.jsxs("div",{className:"actions",children:[e.jsxs("div",{className:"group",children:[e.jsx("span",{className:"lbl",children:"Time"}),e.jsx("div",{className:"segBtns",children:de.map(t=>e.jsxs("button",{className:t===d?"active":"",onClick:()=>{G(t),u||N(t)},children:[t,"s"]},t))})]}),e.jsxs("div",{className:"group",children:[e.jsx("span",{className:"lbl",children:"Length"}),e.jsx("div",{className:"segBtns",children:["short","medium","long"].map(t=>e.jsx("button",{className:t===b?"active":"",onClick:()=>F(t),children:t},t))})]}),e.jsx("button",{onClick:()=>K(b),title:"Pick another text",children:"New Text"}),e.jsx("button",{onClick:ee,title:"Restart (clear input)",children:"Restart"}),e.jsx("button",{onClick:se,disabled:!u||r,children:g?"Resume":"Pause"}),e.jsx("button",{onClick:ie,disabled:!r,children:"Print Result"}),e.jsx("button",{onClick:re,disabled:$.length===0,children:"Print Saved Results"}),e.jsx("button",{onClick:ae,children:"Close Test"}),Q&&e.jsx("span",{style:{fontSize:12,color:"var(--accent, #22c55e)"},children:"Saved ✓"})]})]}),e.jsxs(l.Body,{children:[e.jsxs(l.Metrics,{children:[e.jsxs("div",{className:"metric",children:[e.jsxs("div",{className:"value",children:[P,"s"]}),e.jsx("div",{className:"key",children:"Time Left"})]}),e.jsxs("div",{className:"metric",children:[e.jsx("div",{className:"value",children:A}),e.jsx("div",{className:"key",children:"WPM"})]}),e.jsxs("div",{className:"metric",children:[e.jsxs("div",{className:"value",children:[H,"%"]}),e.jsx("div",{className:"key",children:"Accuracy"})]}),e.jsxs("div",{className:"metric",children:[e.jsx("div",{className:"value",children:L}),e.jsx("div",{className:"key",children:"Errors"})]})]}),e.jsxs(l.PassageCard,{onClick:()=>{var t;return(t=S.current)==null?void 0:t.focus()},children:[e.jsx(l.Passage,{"aria-label":"typing passage",children:oe()}),g&&!r&&e.jsx(l.Overlay,{children:"Paused"})]}),e.jsx(l.InputRow,{children:e.jsx("textarea",{ref:S,spellCheck:"false",value:c,onChange:V,disabled:g||r,placeholder:"Start typing here…"})}),e.jsxs(l.ResultsCard,{ref:E,children:[e.jsx("div",{className:"title",children:"Result"}),e.jsxs("div",{className:"grid",children:[e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"big",children:A}),e.jsx("div",{className:"muted",children:"Words Per Minute"})]}),e.jsxs("div",{className:"item",children:[e.jsxs("div",{className:"big",children:[H,"%"]}),e.jsx("div",{className:"muted",children:"Accuracy"})]}),e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"big",children:v}),e.jsx("div",{className:"muted",children:"Correct Characters"})]}),e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"big",children:L}),e.jsx("div",{className:"muted",children:"Errors"})]})]}),e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:["Duration: ",d,"s"]}),e.jsxs("span",{children:["Elapsed: ",C,"s"]}),e.jsxs("span",{children:["Length: ",b]})]})]}),e.jsxs(l.History,{ref:I,children:[e.jsx("div",{className:"hTitle",children:"Saved Results"}),$.length===0?e.jsx("div",{className:"empty",children:"No saved results yet."}):e.jsx("ul",{className:"list",children:$.map((t,s)=>{var i;return e.jsxs("li",{className:"row",children:[e.jsxs("div",{className:"stat",children:[e.jsx("div",{className:"wpm",children:t.wpm}),e.jsx("div",{className:"label",children:"WPM"})]}),e.jsxs("div",{className:"stat",children:[e.jsxs("div",{className:"acc",children:[t.accuracy,"%"]}),e.jsx("div",{className:"label",children:"Accuracy"})]}),e.jsxs("div",{className:"meta",children:[e.jsx("div",{className:"line",children:ne(t.timestamp)}),e.jsxs("div",{className:"line",children:[t.duration,"s • ",t.length]})]}),e.jsxs("div",{className:"snip",children:[(i=t.targetText)==null?void 0:i.slice(0,90),t.targetText&&t.targetText.length>90?"…":""]})]},(t.timestamp||"")+s)})})]})]}),_&&e.jsx(l.ModalBackdrop,{onClick:Y,children:e.jsxs(l.ModalCard,{onClick:t=>t.stopPropagation(),children:[e.jsx("div",{className:"title",children:"Restart test?"}),e.jsx("div",{className:"msg",children:"This will clear your current input and timer."}),e.jsxs("div",{className:"row",children:[e.jsx("button",{className:"ghost",onClick:Y,children:"Cancel"}),e.jsx("button",{className:"danger",onClick:te,children:"Yes, Restart"})]})]})})]})}export{pe as default};
