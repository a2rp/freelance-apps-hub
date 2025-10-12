import{d as l,f as G,r as b,j as e,y}from"./index-vzKPnzai.js";const f="var(--bg)",$="var(--card)",m="var(--text)",A="var(--muted)",x="var(--border)",u="var(--radius)",z="var(--shadow)",v="var(--accent)",W="var(--danger, #e5484d)",F=G`
  @media print {
    /* hide everything */
    body * { visibility: hidden !important; }

    /* show only stats card */
    .wlc-print-stats, .wlc-print-stats * {
      visibility: visible !important;
    }

    /* position it full page for clean print */
    .wlc-print-stats {
      position: absolute !important;
      inset: 0 !important;
      margin: 0 !important;
      border: none !important;
      box-shadow: none !important;
      background: #fff !important;
      padding: 24px !important;
    }
  }
`,s={Wrapper:l.div`
        max-width: 1440px;
        margin: 0 auto;

        display: grid;
        gap: 16px;
        padding: 16px;
        color: ${m};
        background: ${f};

        @media (max-width: 720px) {
            padding: 12px;
        }
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
            color: ${A};
            font-size: 14px;
        }
    `,HeaderActions:l.div`
        display: flex;
        gap: 8px;

        button {
            appearance: none;
            border: 1px solid ${x};
            background: ${$};
            color: ${m};
            padding: 8px 12px;
            border-radius: ${u};
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
    `,Layout:l.div`
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 16px;

        @media (max-width: 1080px) {
            grid-template-columns: 1fr;
        }
    `,Card:l.div`
        background: ${$};
        border: 1px solid ${x};
        border-radius: ${u};
        box-shadow: ${z};
        padding: 16px;

        h3 {
            margin: 0 0 12px 0;
            font-size: 16px;
        }
        .muted {
            color: ${A};
        }
    `,EditorCard:l.div`
        background: ${$};
        border: 1px solid ${x};
        border-radius: ${u};
        box-shadow: ${z};
        padding: 16px;

        /* editor never prints due to global CSS (hidden by default) */
    `,TitleRow:l.div`
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 12px;
        margin-bottom: 12px;

        input[type="text"] {
            width: 100%;
            border: 1px solid ${x};
            background: ${f};
            color: ${m};
            border-radius: calc(${u} - 2px);
            padding: 10px 12px;
            font: inherit;
            outline: none;
            transition: border-color 0.15s ease;

            &:focus {
                border-color: ${v};
            }
        }

        .row-actions {
            display: flex;
            gap: 8px;
            align-items: center;

            button {
                appearance: none;
                border: 1px solid ${x};
                background: ${f};
                color: ${m};
                padding: 8px 12px;
                border-radius: ${u};
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
        }

        @media (max-width: 720px) {
            grid-template-columns: 1fr;
            .row-actions {
                flex-wrap: wrap;
            }
        }
    `,Dropdown:l.div`
        select {
            border: 1px solid ${x};
            background: ${f};
            color: ${m};
            border-radius: ${u};
            padding: 8px 12px;
            font: inherit;
            outline: none;
            transition: border-color 0.15s ease;

            &:hover,
            &:focus {
                border-color: ${v};
            }
        }
    `,Textarea:l.textarea`
        width: 100%;
        min-height: 320px;
        border: 1px solid ${x};
        background: ${f};
        color: ${m};
        border-radius: calc(${u} - 2px);
        padding: 12px;
        font: inherit;
        line-height: 1.6;
        outline: none;
        resize: vertical;
        transition: border-color 0.15s ease;

        &:focus {
            border-color: ${v};
        }
    `,EditorActions:l.div`
        margin-top: 12px;
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
            color: ${m};
            padding: 10px 14px;
            border-radius: ${u};
            cursor: pointer;
            font: inherit;
            transition: border-color 0.15s ease, transform 0.02s ease-in-out;

            &:hover {
                border-color: ${v};
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
            background: ${f};
        }
    `,Side:l.aside`
        display: grid;
        gap: 16px;
    `,StatsGrid:l.div`
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;

        .span2 {
            grid-column: span 2;
        }

        .label {
            color: ${A};
            font-size: 12px;
        }
        .value {
            display: block;
            font-weight: 600;
            font-size: 16px;
            margin-top: 2px;
        }

        @media (max-width: 480px) {
            grid-template-columns: 1fr;
            .span2 {
                grid-column: span 1;
            }
        }
    `,SaveRow:l.div`
        display: flex;
        gap: 10px;
        align-items: center;
        margin-bottom: 10px;

        .spacer {
            flex: 1;
        }

        button {
            appearance: none;
            border: 1px solid ${x};
            background: ${$};
            color: ${m};
            padding: 8px 12px;
            border-radius: ${u};
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
            border-color: ${W};
            color: ${m};
        }
    `,SaveList:l.ul`
        margin: 0;
        padding: 0;
        list-style: none;
        display: grid;
        gap: 8px;

        li {
            border: 1px solid ${x};
            border-radius: ${u};
            background: ${f};
            display: grid;
            grid-template-columns: 1fr auto;
            align-items: center;
            padding: 8px;
            gap: 8px;
        }
        li.active {
            border-color: ${v};
        }

        .item {
            text-align: left;
            border: none;
            background: transparent;
            color: ${m};
            padding: 0;
            cursor: pointer;
        }
        .t {
            display: block;
            font-weight: 600;
        }
        .d {
            display: block;
            color: ${A};
            font-size: 12px;
        }

        .actions {
            display: flex;
            gap: 8px;
        }
        .actions .ghost,
        .actions .danger {
            appearance: none;
            border: 1px solid ${x};
            background: ${$};
            color: ${m};
            padding: 6px 10px;
            border-radius: ${u};
            cursor: pointer;
            font: inherit;
            transition: border-color 0.15s ease;

            &:hover {
                border-color: ${v};
            }
        }
        .actions .danger {
            border-color: ${W};
        }
    `,HiddenLive:l.div`
        position: absolute;
        left: -9999px;
        top: auto;
        width: 1px;
        height: 1px;
        overflow: hidden;
    `,ModalBackdrop:l.div`
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.4);
        display: grid;
        place-items: center;
        z-index: 9999;
    `,ModalCard:l.div`
        width: min(520px, 92vw);
        background: ${$};
        border: 1px solid ${x};
        border-radius: ${u};
        box-shadow: ${z};
        padding: 16px;

        h3 {
            margin: 0 0 8px 0;
            font-size: 16px;
        }
        p.muted {
            color: ${A};
            margin: 0 0 12px 0;
        }
    `,ModalActions:l.div`
        display: flex;
        gap: 10px;
        justify-content: flex-end;

        button {
            appearance: none;
            border: 1px solid ${x};
            background: ${$};
            color: ${m};
            padding: 8px 12px;
            border-radius: ${u};
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
    `},_="wordLetterCounter_draft_v1",D="wordLetterCounter_saves_v1",M=()=>new Date().toISOString(),V=()=>`${Date.now()}_${Math.random().toString(36).slice(2,8)}`;function Z(c){return c.toLowerCase().replace(/\b\w/g,n=>n.toUpperCase())}function Q(c){return c.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g,o=>o.toUpperCase())}function X(c){return c.replace(/[ \t]+/g," ").replace(/\n{3,}/g,`

`).trim()}function ee(c){const n=c||"",o=n.trim(),d=n.length?n.split(/\n/).length:0,h=o?o.split(/\s+/).filter(Boolean):[],j=h.length,g=h.map(i=>i.toLowerCase().replace(/^[^a-z0-9]+|[^a-z0-9]+$/gi,"")).filter(Boolean),w=new Set(g).size;let k=0;try{k=(n.match(new RegExp("\\p{L}","gu"))||[]).length}catch{k=(n.match(/[A-Za-z]/g)||[]).length}const S=n.length,T=n.replace(/\s/g,"").length,N=(n.match(/[.!?]+(\s|$)/g)||[]).length,E=o?o.split(/\n\s*\n/).length:0,L=j?Math.max(1,Math.ceil(j/180)):0;return{words:j,letters:k,characters:S,charactersNoSpaces:T,sentences:N,paragraphs:E,lines:d,uniqueWords:w,readTime:L}}function I({open:c,title:n="Are you sure?",message:o,confirmText:d="Confirm",cancelText:h="Cancel",onConfirm:j,onCancel:g}){return c?e.jsx(s.ModalBackdrop,{"aria-modal":"true",role:"dialog",children:e.jsxs(s.ModalCard,{children:[e.jsx("h3",{children:n}),o&&e.jsx("p",{className:"muted",children:o}),e.jsxs(s.ModalActions,{children:[e.jsx("button",{type:"button",className:"ghost",onClick:g,children:h}),e.jsx("button",{type:"button",onClick:j,children:d})]})]})}):null}const re=()=>{const[c,n]=b.useState("Untitled"),[o,d]=b.useState(()=>{try{return localStorage.getItem(_)??""}catch{return""}}),[h,j]=b.useState(()=>{try{return JSON.parse(localStorage.getItem(D)||"[]")}catch{return[]}}),[g,w]=b.useState(null),[k,S]=b.useState(!1),[T,N]=b.useState({open:!1,id:null}),[E,L]=b.useState(!1),i=b.useMemo(()=>ee(o),[o]);`${i.words}${i.letters}${i.characters}`,b.useEffect(()=>{try{localStorage.setItem(_,o)}catch{}},[o]),b.useEffect(()=>{const r=t=>{(t.metaKey||t.ctrlKey)&&t.key.toLowerCase()==="s"&&(t.preventDefault(),P())};return window.addEventListener("keydown",r),()=>window.removeEventListener("keydown",r)},[c,o,g,h]);const Y=async()=>{var r,t,a,p;try{await navigator.clipboard.writeText(o),(t=(r=y)==null?void 0:r.success)==null||t.call(r,"Copied!")}catch{(p=(a=y)==null?void 0:a.error)==null||p.call(a,"Copy failed")}},H=()=>{const r=new Blob([o],{type:"text/plain;charset=utf-8"}),t=document.createElement("a");t.href=URL.createObjectURL(r),t.download=`${(c||"document").replace(/\s+/g,"_")}.txt`,t.click(),URL.revokeObjectURL(t.href)},B=()=>{window.print()},U=r=>{switch(r){case"trim":d(t=>t.trim());break;case"extraspaces":d(t=>X(t));break;case"upper":d(t=>t.toUpperCase());break;case"lower":d(t=>t.toLowerCase());break;case"title":d(t=>Z(t));break;case"sentence":d(t=>Q(t));break}},K=()=>{var r,t;S(!1),d(""),n("Untitled"),w(null),(t=(r=y)==null?void 0:r.info)==null||t.call(r,"Cleared")},P=()=>{var p,C;const r=c.trim()||"Untitled",t={id:g||V(),title:r,content:o,createdAt:g?void 0:M(),updatedAt:M()};let a;g?a=h.map(R=>R.id===g?{...R,title:t.title,content:t.content,updatedAt:t.updatedAt}:R):(a=[{...t,createdAt:t.createdAt||M()},...h],w(t.id)),j(a);try{localStorage.setItem(D,JSON.stringify(a))}catch{}(C=(p=y)==null?void 0:p.success)==null||C.call(p,"Saved")},O=r=>{var a,p;const t=h.find(C=>C.id===r);t&&(n(t.title||"Untitled"),d(t.content||""),w(t.id),(p=(a=y)==null?void 0:a.info)==null||p.call(a,"Loaded"))},q=()=>{var a,p;const r=T.id,t=h.filter(C=>C.id!==r);j(t);try{localStorage.setItem(D,JSON.stringify(t))}catch{}g===r&&(w(null),n("Untitled"),d("")),N({open:!1,id:null}),(p=(a=y)==null?void 0:a.info)==null||p.call(a,"Deleted")},J=()=>{var r,t;L(!1),j([]);try{localStorage.setItem(D,"[]")}catch{}(t=(r=y)==null?void 0:r.info)==null||t.call(r,"All saved docs removed")};return e.jsxs(s.Wrapper,{children:[e.jsx(F,{}),e.jsxs(s.Header,{children:[e.jsxs("div",{children:[e.jsx("h1",{children:"Word & Letter Counter"}),e.jsxs("p",{children:["Want to check the count of your assignments? Paste your text here — the app shows total ",e.jsx("strong",{children:"words"})," and ",e.jsx("strong",{children:"letters"}),", plus extra stats and quick tools."]})]}),e.jsxs(s.HeaderActions,{children:[e.jsx("button",{type:"button",className:"ghost",onClick:Y,title:"Copy to clipboard",children:"Copy"}),e.jsx("button",{type:"button",className:"ghost",onClick:H,title:"Download .txt",children:"Download"}),e.jsx("button",{type:"button",onClick:B,title:"Print stats only",children:"Print"})]})]}),e.jsxs(s.Layout,{children:[e.jsxs(s.EditorCard,{children:[e.jsxs(s.TitleRow,{children:[e.jsx("input",{type:"text",placeholder:"Document title",value:c,onChange:r=>n(r.target.value),maxLength:120,"aria-label":"Document title"}),e.jsxs("div",{className:"row-actions",children:[e.jsx("button",{type:"button",className:"ghost",onClick:()=>U("extraspaces"),children:"Clean Spaces"}),e.jsx("button",{type:"button",className:"ghost",onClick:()=>U("trim"),children:"Trim"}),e.jsx(s.Dropdown,{children:e.jsxs("select",{"aria-label":"Transform text",onChange:r=>{U(r.target.value),r.target.selectedIndex=0},children:[e.jsx("option",{value:"",children:"Transform…"}),e.jsx("option",{value:"upper",children:"UPPERCASE"}),e.jsx("option",{value:"lower",children:"lowercase"}),e.jsx("option",{value:"title",children:"Title Case"}),e.jsx("option",{value:"sentence",children:"Sentence case"})]})})]})]}),e.jsx(s.Textarea,{placeholder:"Paste or type your assignment here…",value:o,onChange:r=>d(r.target.value),spellCheck:"true","aria-label":"Main text editor"}),e.jsxs(s.EditorActions,{children:[e.jsx("button",{type:"button",onClick:P,children:"Save"}),e.jsx("button",{type:"button",className:"ghost",onClick:()=>S(!0),children:"Clear"})]})]}),e.jsxs(s.Side,{children:[e.jsxs(s.Card,{className:"wlc-print-stats","aria-live":"polite","aria-atomic":"true",children:[e.jsx("h3",{children:"Stats"}),e.jsxs(s.StatsGrid,{children:[e.jsxs("div",{children:[e.jsx("span",{className:"label",children:"Words"}),e.jsx("span",{className:"value",children:i.words})]}),e.jsxs("div",{children:[e.jsx("span",{className:"label",children:"Letters"}),e.jsx("span",{className:"value",children:i.letters})]}),e.jsxs("div",{children:[e.jsx("span",{className:"label",children:"Chars (all)"}),e.jsx("span",{className:"value",children:i.characters})]}),e.jsxs("div",{children:[e.jsx("span",{className:"label",children:"Chars (no spaces)"}),e.jsx("span",{className:"value",children:i.charactersNoSpaces})]}),e.jsxs("div",{children:[e.jsx("span",{className:"label",children:"Sentences"}),e.jsx("span",{className:"value",children:i.sentences})]}),e.jsxs("div",{children:[e.jsx("span",{className:"label",children:"Paragraphs"}),e.jsx("span",{className:"value",children:i.paragraphs})]}),e.jsxs("div",{children:[e.jsx("span",{className:"label",children:"Lines"}),e.jsx("span",{className:"value",children:i.lines})]}),e.jsxs("div",{children:[e.jsx("span",{className:"label",children:"Unique words"}),e.jsx("span",{className:"value",children:i.uniqueWords})]}),e.jsxs("div",{className:"span2",children:[e.jsx("span",{className:"label",children:"Reading time"}),e.jsx("span",{className:"value",children:i.words?`${i.readTime} min`:"—"})]})]}),e.jsx(s.HiddenLive,{role:"status",children:`${i.words} words, ${i.letters} letters, ${i.characters} chars`})]}),e.jsxs(s.Card,{children:[e.jsx("h3",{children:"Saved Documents"}),e.jsxs(s.SaveRow,{children:[e.jsx("button",{type:"button",className:"ghost",onClick:()=>{w(null),n("Untitled"),d("")},children:"New"}),e.jsx("div",{className:"spacer"}),e.jsx("button",{type:"button",className:"danger",onClick:()=>L(!0),children:"Clear All"})]}),h.length===0?e.jsxs("p",{className:"muted",children:["No saved docs yet. Press ",e.jsx("strong",{children:"Save"})," to keep this document."]}):e.jsx(s.SaveList,{children:h.map(r=>e.jsxs("li",{className:g===r.id?"active":"",children:[e.jsxs("button",{type:"button",className:"item",onClick:()=>O(r.id),title:"Load",children:[e.jsx("span",{className:"t",children:r.title||"Untitled"}),e.jsx("span",{className:"d",children:new Date(r.updatedAt||r.createdAt).toLocaleString()})]}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{type:"button",className:"ghost",onClick:()=>O(r.id),children:"Load"}),e.jsx("button",{type:"button",className:"danger",onClick:()=>N({open:!0,id:r.id}),children:"Delete"})]})]},r.id))})]})]})]}),e.jsx(I,{open:k,title:"Clear text?",message:"This will remove the current text from the editor.",confirmText:"Clear",onConfirm:K,onCancel:()=>S(!1)}),e.jsx(I,{open:T.open,title:"Delete document?",message:"This will permanently delete the saved document.",confirmText:"Delete",onConfirm:q,onCancel:()=>N({open:!1,id:null})}),e.jsx(I,{open:E,title:"Remove all saved docs?",message:"This cannot be undone.",confirmText:"Remove All",onConfirm:J,onCancel:()=>L(!1)})]})};export{re as default};
