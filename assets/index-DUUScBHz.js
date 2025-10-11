import{d as l,r as x,j as t}from"./index-wxTrSNUU.js";const f="var(--bg)",j="var(--card)",p="var(--text)",k="var(--muted)",u="var(--border)",g="var(--radius)",E="var(--shadow)",v="var(--accent)",A="var(--danger, #e5484d)",a={Wrapper:l.div`
        /* page container */
        max-width: 1440px; /* as requested */
        margin: 0 auto; /* as requested */
        padding: 16px;
        background: ${f};
        color: ${p};
        display: grid;
        gap: 16px;
        min-height: 100%;
    `,Header:l.header`
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        gap: 12px;

        h1 {
            margin: 0 0 6px 0;
            font-size: 20px;
            line-height: 1.2;
        }
        p {
            margin: 0;
            font-size: 14px;
            color: ${k};
        }

        @media (max-width: 720px) {
            align-items: flex-start;
            flex-direction: column;
        }
    `,HeaderActions:l.div`
        display: flex;
        align-items: center;
        gap: 8px;
        flex-wrap: wrap;

        .checkbox {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-size: 13px;
            color: ${p};
        }

        button {
            border: 1px solid ${u};
            background: ${j};
            color: ${p};
            padding: 8px 12px;
            border-radius: ${g};
            cursor: pointer;
            font: inherit;
            box-shadow: ${E};
        }
        .ghost {
            background: ${f};
        }
    `,Layout:l.div`
        display: grid;
        grid-template-columns: 1.5fr 1fr;
        gap: 16px;
        @media (max-width: 1024px) {
            grid-template-columns: 1fr;
        }
        .col {
            display: grid;
            gap: 16px;
            align-content: start;
        }
    `,Card:l.section`
        background: ${j};
        border: 1px solid ${u};
        border-radius: ${g};
        box-shadow: ${E};
        padding: 16px;
        overflow: hidden;

        h3 {
            margin: 0 0 12px 0;
            font-size: 16px;
        }
        .tips {
            margin: 0;
            padding-left: 18px;
            color: ${k};
            font-size: 14px;
        }
    `,EditorHeader:l.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 12px;
        margin-bottom: 10px;
        .meta {
            display: flex;
            gap: 12px;
            color: ${k};
            font-size: 13px;
        }
        .actions {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        button {
            border: 1px solid ${u};
            background: ${j};
            color: ${p};
            padding: 8px 12px;
            border-radius: ${g};
            cursor: pointer;
            font: inherit;
            transition: border-color 0.15s ease, transform 0.02s ease-in-out;
            &:hover {
                border-color: ${v};
            }
            &:active {
                transform: translateY(1px);
            }
        }
        .ghost {
            background: ${f};
        }
        .danger {
            border-color: ${A};
            color: ${p};
        }
    `,Textarea:l.textarea`
        width: 100%;
        min-height: 220px;
        resize: vertical;
        border: 1px solid ${u};
        background: ${f};
        color: ${p};
        border-radius: calc(${g} - 2px);
        padding: 12px;
        font: inherit;
        line-height: 1.5;
        outline: none;
        transition: border-color 0.15s ease;

        &:focus {
            border-color: ${v};
        }
    `,Keyboard:l.div`
        display: grid;
        gap: 8px;
        .row {
            display: flex;
            gap: 8px;
            flex-wrap: nowrap;
        }
        .row-aux {
            justify-content: flex-end;
        }
    `,Key:l.button`
        position: relative;
        border: 1px solid ${u};
        background: ${f};
        color: ${p};
        border-radius: calc(${g} - 2px);
        padding: 10px 12px;
        min-width: ${s=>s.$space?"240px":s.$wide?"88px":"44px"};
        text-align: center;
        font: inherit;
        cursor: pointer;
        user-select: none;
        box-shadow: ${E};
        transition: border-color 0.12s ease, transform 0.02s ease-in-out,
            background 0.12s ease;

        &.active,
        &:hover {
            border-color: ${v};
        }
        &:active {
            transform: translateY(1px);
        }

        @media (max-width: 860px) {
            min-width: ${s=>s.$space?"140px":s.$wide?"68px":"36px"};
            padding: 8px 10px;
        }
    `,SnippetForm:l.form`
        display: grid;
        gap: 8px;

        input[type="text"] {
            width: 100%;
            border: 1px solid ${u};
            background: ${f};
            color: ${p};
            border-radius: calc(${g} - 2px);
            padding: 10px 12px;
            font: inherit;
            outline: none;
            transition: border-color 0.15s ease;
            &:focus {
                border-color: ${v};
            }
        }

        .row {
            display: flex;
            gap: 8px;
        }
        button {
            border: 1px solid ${u};
            background: ${j};
            color: ${p};
            padding: 8px 12px;
            border-radius: ${g};
            cursor: pointer;
            font: inherit;
            &:hover {
                border-color: ${v};
            }
        }
        .ghost {
            background: ${f};
        }
        .danger {
            border-color: ${A};
        }
    `,SnippetList:l.ul`
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        gap: 10px;

        li {
            display: grid;
            gap: 8px;
            border: 1px solid ${u};
            border-radius: ${g};
            padding: 10px;
            background: ${f};
        }
        .info {
            display: grid;
            gap: 4px;
        }
        .info .date {
            color: ${k};
            font-size: 12px;
        }
        .info .preview {
            color: ${k};
            margin: 0;
            font-size: 13px;
            white-space: pre-wrap;
        }

        .buttons {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .buttons button {
            border: 1px solid ${u};
            background: ${j};
            color: ${p};
            padding: 6px 10px;
            border-radius: ${g};
            cursor: pointer;
            font: inherit;
            &:hover {
                border-color: ${v};
            }
        }
        .buttons .ghost {
            background: ${f};
        }
        .buttons .danger {
            border-color: ${A};
        }
    `,Divider:l.hr`
        border: none;
        border-top: 1px solid ${u};
        margin: 12px 0;
    `,ModalOverlay:l.div`
        position: fixed;
        inset: 0;
        display: ${s=>s.hidden?"none":"grid"};
        place-items: center;
        background: rgba(0, 0, 0, 0.35);
        z-index: 60;
    `,Modal:l.div`
        width: min(520px, 92vw);
        background: ${j};
        color: ${p};
        border: 1px solid ${u};
        border-radius: ${g};
        box-shadow: ${E};
        padding: 16px;

        h3 {
            margin: 0 0 8px 0;
            font-size: 16px;
        }
        .msg {
            margin: 0 0 12px 0;
            color: ${k};
        }

        .actions {
            display: flex;
            gap: 8px;
            justify-content: flex-end;
        }
        .actions button {
            border: 1px solid ${u};
            background: ${j};
            color: ${p};
            padding: 8px 12px;
            border-radius: ${g};
            cursor: pointer;
            font: inherit;
            &:hover {
                border-color: ${v};
            }
        }
        .actions .ghost {
            background: ${f};
        }
        .actions .danger {
            border-color: ${A};
        }
    `},L="virtualKeyboard_message_v1",M="virtualKeyboard_snippets_v1";function pe(s,m,o){return Math.max(m,Math.min(o,s))}function ue(s){try{const m=new Date(s),o=new Intl.DateTimeFormat("en-US",{month:"short",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1,timeZone:"Asia/Kolkata"}).formatToParts(m),i=b=>{var d;return((d=o.find(y=>y.type===b))==null?void 0:d.value)||""};return`${i("month")} ${i("day")}, ${i("year")} ${i("hour")}:${i("minute")}:${i("second")} hrs`}catch{return s}}const Y={"`":"~",1:"!",2:"@",3:"#",4:"$",5:"%",6:"^",7:"&",8:"*",9:"(",0:")","-":"_","=":"+","[":"{","]":"}","\\":"|",";":":","'":'"',",":"<",".":">","/":"?"},xe=[["`","1","2","3","4","5","6","7","8","9","0","-","=","Backspace"],["Tab","q","w","e","r","t","y","u","i","o","p","[","]","\\"],["Caps","a","s","d","f","g","h","j","k","l",";","'","Enter"],["Shift","z","x","c","v","b","n","m",",",".","/","←","→"],["Space"]];function he(){const[s,m]=x.useState({open:!1,title:"",message:"",onConfirm:null}),o=d=>m({open:!0,...d}),i=()=>m(d=>({...d,open:!1})),b=t.jsx(a.ModalOverlay,{hidden:!s.open,"aria-hidden":!s.open,children:t.jsxs(a.Modal,{role:"dialog","aria-modal":"true","aria-labelledby":"confirm-title",children:[t.jsx("h3",{id:"confirm-title",children:s.title||"Confirm"}),t.jsx("p",{className:"msg",children:s.message||"Are you sure?"}),t.jsxs("div",{className:"actions",children:[t.jsx("button",{className:"ghost",onClick:i,children:"Cancel"}),t.jsx("button",{className:"danger",onClick:()=>{var d;try{(d=s.onConfirm)==null||d.call(s)}finally{i()}},children:"Yes, do it"})]})]})});return{ask:o,Modal:b}}const fe=()=>{var _;const s=x.useRef(null),m=x.useRef(null),[o,i]=x.useState(()=>{try{return localStorage.getItem(L)||""}catch{return""}}),[b,d]=x.useState(!1),[y,F]=x.useState(!1),[K,B]=x.useState(!1),[J,U]=x.useState(""),[$,R]=x.useState(()=>{try{return JSON.parse(localStorage.getItem(M)||"[]")}catch{return[]}}),[I,O]=x.useState(""),{ask:N,Modal:W}=he();x.useEffect(()=>{try{localStorage.setItem(L,o)}catch{}},[o]);const V=o.length,Z=(((_=o.match(/\n/g))==null?void 0:_.length)||0)+1;function w(e=!1){const n=s.current;if(n)try{n.focus({preventScroll:e})}catch{n.focus()}}function T(e){const n=s.current;if(!n)return;const r=n.selectionStart??o.length,c=n.selectionEnd??o.length,h=o.slice(0,r)+e+o.slice(c);i(h);const C=r+e.length;requestAnimationFrame(()=>{n.selectionStart=n.selectionEnd=C,w(!0)})}function G(){const e=s.current;if(!e)return;const n=e.selectionStart??0,r=e.selectionEnd??0;if(n!==r){const h=o.slice(0,n)+o.slice(r);i(h),requestAnimationFrame(()=>{e.selectionStart=e.selectionEnd=n,w(!0)});return}if(n===0)return;const c=o.slice(0,n-1)+o.slice(r);i(c),requestAnimationFrame(()=>{e.selectionStart=e.selectionEnd=n-1,w(!0)})}function Q(){const e=s.current;if(!e)return;const n=e.selectionStart??0,r=e.selectionEnd??0;if(n!==r){const h=o.slice(0,n)+o.slice(r);i(h),requestAnimationFrame(()=>{e.selectionStart=e.selectionEnd=n,w(!0)});return}if(n>=o.length)return;const c=o.slice(0,n)+o.slice(n+1);i(c),requestAnimationFrame(()=>{e.selectionStart=e.selectionEnd=n,w(!0)})}function q(e){const n=s.current;if(!n)return;const r=n.selectionStart??0,c=n.selectionEnd??0,h=e==="left"?Math.min(r,c):Math.max(r,c),C=pe(h+(e==="left"?-1:1),0,o.length);requestAnimationFrame(()=>{n.selectionStart=n.selectionEnd=C,w(!0)})}function X(e){U(e),setTimeout(()=>U(""),120)}function P(e){return/[a-z]/i.test(e)?b&&!y||!b&&y?e.toUpperCase():e.toLowerCase():y&&Y[e]?Y[e]:e}function D(e){if(X(e),e==="Backspace"){G(),S();return}if(e==="Delete"){Q(),S();return}if(e==="Enter"){T(`
`),S();return}if(e==="Tab"){T("	"),S();return}if(e==="Space"){T(" "),S();return}if(e==="Caps"){d(r=>!r);return}if(e==="Shift"){F(r=>!r);return}if(e==="←"){q("left");return}if(e==="→"){q("right");return}const n=P(e);T(n),S()}function S(){K||F(!1)}async function ee(){try{await navigator.clipboard.writeText(o)}catch{const e=s.current;if(!e)return;e.select(),document.execCommand("copy"),w(!0)}}async function te(){try{const e=await navigator.clipboard.readText();T(e)}catch{}}function ne(){const e=new Blob([o],{type:"text/plain;charset=utf-8"}),n=URL.createObjectURL(e),r=document.createElement("a");r.href=n,r.download="virtual-keyboard.txt",document.body.appendChild(r),r.click(),r.remove(),URL.revokeObjectURL(n)}function re(){var e;(e=m.current)==null||e.click()}function oe(e){var c;const n=(c=e.target.files)==null?void 0:c[0];if(!n)return;const r=new FileReader;r.onload=()=>{const h=String(r.result||"");N({title:"Replace message with file content?",message:"This will replace your current message with the file text.",onConfirm:()=>i(h)})},r.readAsText(n),e.target.value=""}function se(){const e=`
      <html>
        <head>
          <meta charset="utf-8" />
          <title>Message</title>
          <style>
            body { font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif; padding: 24px; }
            pre { white-space: pre-wrap; word-wrap: break-word; border: 1px solid #ccc; padding: 16px; border-radius: 8px; }
            h2 { margin: 0 0 12px 0; font-size: 16px; }
          </style>
        </head>
        <body>
          <h2>Message</h2>
          <pre>${o.replace(/[&<>]/g,r=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[r])}</pre>
          <script>window.onload = () => { setTimeout(() => window.print(), 50); }<\/script>
        </body>
      </html>`,n=window.open("","_blank");n&&(n.document.open(),n.document.write(e),n.document.close())}function ie(){N({title:"Clear message?",message:"This will remove all text from the editor.",onConfirm:()=>i("")})}function ae(){const e=(I||o.slice(0,40)||"Untitled").trim();if(!e)return;const r=[{id:Date.now(),title:e,content:o,createdAt:new Date().toISOString()},...$].slice(0,200);R(r);try{localStorage.setItem(M,JSON.stringify(r))}catch{}O("")}function H(e,n){const r=$.find(c=>c.id===e);if(r)if(n==="replace")N({title:"Load snippet?",message:`Replace the current message with "${r.title}"?`,onConfirm:()=>i(r.content)});else{const c=o&&!o.endsWith(`
`)?`
`:"";i(o+c+r.content)}}function ce(e){const n=$.find(r=>r.id===e);n&&N({title:"Delete snippet?",message:`This will permanently remove "${n.title}".`,onConfirm:()=>{const r=$.filter(c=>c.id!==e);R(r);try{localStorage.setItem(M,JSON.stringify(r))}catch{}}})}function le(){$.length&&N({title:"Clear all saved?",message:"This will remove all saved snippets.",onConfirm:()=>{R([]);try{localStorage.removeItem(M)}catch{}}})}const de=x.useMemo(()=>xe,[]);return t.jsxs(a.Wrapper,{children:[t.jsxs(a.Header,{children:[t.jsxs("div",{children:[t.jsx("h1",{children:"Virtual Keyboard"}),t.jsx("p",{children:"Damaged keyboard? Type using on-screen keys. Copy, save snippets, print, or download as .txt."})]}),t.jsxs(a.HeaderActions,{children:[t.jsxs("button",{className:"ghost",onClick:()=>d(e=>!e),"aria-pressed":b,children:["Caps ",b?"ON":"OFF"]}),t.jsxs("button",{className:"ghost",onClick:()=>F(e=>!e),"aria-pressed":y,children:["Shift ",y?"ON":"OFF"]}),t.jsxs("label",{className:"checkbox",children:[t.jsx("input",{type:"checkbox",checked:K,onChange:e=>B(e.target.checked)}),t.jsx("span",{children:"Sticky Shift"})]})]})]}),t.jsxs(a.Layout,{children:[t.jsxs("div",{className:"col",children:[t.jsxs(a.Card,{children:[t.jsxs(a.EditorHeader,{children:[t.jsxs("div",{className:"meta",children:[t.jsxs("span",{children:["Chars: ",t.jsx("strong",{children:V})]}),t.jsxs("span",{children:["Lines: ",t.jsx("strong",{children:Z})]})]}),t.jsxs("div",{className:"actions",children:[t.jsx("button",{onClick:ee,title:"Copy to clipboard",children:"Copy"}),t.jsx("button",{className:"ghost",onClick:te,title:"Paste from clipboard",children:"Paste"}),t.jsx("button",{className:"ghost",onClick:ne,title:"Download .txt",children:"Download"}),t.jsx("button",{className:"ghost",onClick:re,title:"Upload .txt",children:"Upload"}),t.jsx("input",{ref:m,type:"file",accept:".txt",onChange:oe,hidden:!0}),t.jsx("button",{className:"ghost",onClick:se,title:"Print message",children:"Print"}),t.jsx("button",{className:"danger",onClick:ie,title:"Clear message",children:"Clear"})]})]}),t.jsx(a.Textarea,{ref:s,value:o,onChange:e=>i(e.target.value),placeholder:"Type here using the on-screen keyboard…",spellCheck:!1,"aria-label":"Message editor"})]}),t.jsx(a.Card,{children:t.jsxs(a.Keyboard,{children:[de.map((e,n)=>t.jsx("div",{className:"row",children:e.map(r=>{const c=["Backspace","Enter","Tab","Caps","Shift","Space"].includes(r),h=r==="Space",C=r==="Caps"&&b||r==="Shift"&&y||J===r;return t.jsx(a.Key,{$wide:c,$space:h,"aria-pressed":C,className:C?"active":"",onMouseDown:z=>{z.preventDefault(),D(r)},onClick:z=>z.preventDefault(),title:r,children:P(r)},r)})},n)),t.jsxs("div",{className:"row row-aux",children:[t.jsx(a.Key,{onMouseDown:e=>{e.preventDefault(),D("Delete")},title:"Delete",children:"Del"}),t.jsx(a.Key,{onMouseDown:e=>{e.preventDefault(),D("←")},title:"Left",children:"←"}),t.jsx(a.Key,{onMouseDown:e=>{e.preventDefault(),D("→")},title:"Right",children:"→"})]})]})})]}),t.jsxs("div",{className:"col",children:[t.jsxs(a.Card,{children:[t.jsx("h3",{children:"Save Snippet"}),t.jsxs(a.SnippetForm,{onSubmit:e=>{e.preventDefault(),ae()},children:[t.jsx("input",{type:"text",placeholder:"Snippet title",value:I,onChange:e=>O(e.target.value),maxLength:80}),t.jsxs("div",{className:"row",children:[t.jsx("button",{type:"submit",children:"Save"}),t.jsx("button",{type:"button",className:"ghost danger",onClick:le,children:"Clear All"})]})]}),t.jsx(a.Divider,{}),t.jsxs(a.SnippetList,{role:"list",children:[$.length===0&&t.jsx("p",{className:"muted",children:"No saved snippets yet."}),$.map(e=>t.jsxs("li",{children:[t.jsxs("div",{className:"info",children:[t.jsx("strong",{children:e.title}),t.jsx("span",{className:"date",children:ue(e.createdAt)}),t.jsx("p",{className:"preview",children:e.content.slice(0,120)||"—"})]}),t.jsxs("div",{className:"buttons",children:[t.jsx("button",{onClick:()=>H(e.id,"replace"),title:"Replace current text",children:"Load"}),t.jsx("button",{className:"ghost",onClick:()=>H(e.id,"append"),title:"Append to end",children:"Append"}),t.jsx("button",{className:"ghost danger",onClick:()=>ce(e.id),title:"Delete snippet",children:"Delete"})]})]},e.id))]})]}),t.jsxs(a.Card,{children:[t.jsx("h3",{children:"Tips"}),t.jsxs("ul",{className:"tips",children:[t.jsx("li",{children:"Caps toggles casing; Shift changes one key (unless Sticky Shift is on)."}),t.jsx("li",{children:"Use ← → buttons to move the caret precisely."}),t.jsx("li",{children:"Upload/Download .txt for quick transfer; Print makes a clean hard copy."})]})]})]})]}),W]})};export{fe as default};
