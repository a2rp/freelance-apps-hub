import{d as s,r as a,j as e}from"./index-COA_3K4v.js";const m="var(--bg)",R="var(--card)",l="var(--text)",H="var(--muted)",n="var(--border)",u="var(--radius)",V="var(--shadow)",j="var(--accent)",ie="var(--danger, #e5484d)",o={Wrapper:s.div`
        /* center page content */
        max-width: 1440px;
        margin: 0 auto;

        display: grid;
        gap: 16px;
        padding: 16px;
        color: ${l};
        background: ${m};
        min-height: 100%;
    `,Header:s.div`
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        gap: 16px;

        h1 {
            margin: 0 0 6px 0;
            font-size: 20px;
            line-height: 1.2;
        }
        .muted {
            color: ${H};
            font-size: 14px;
            margin: 0;
        }
    `,Layout:s.div`
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 16px;
        @media (max-width: 1100px) {
            grid-template-columns: 1fr;
        }
    `,Column:s.div`
        display: grid;
        gap: 16px;
    `,Side:s.aside`
        display: grid;
        gap: 16px;
    `,Card:s.div`
        background: ${R};
        border: 1px solid ${n};
        border-radius: ${u};
        box-shadow: ${V};
        padding: 16px;
    `,SearchRow:s.div`
        display: grid;
        grid-template-columns: 1fr auto auto;
        gap: 8px;

        input {
            border: 1px solid ${n};
            background: ${m};
            color: ${l};
            border-radius: calc(${u} - 2px);
            padding: 10px 12px;
            font: inherit;
            outline: none;
        }
        input:focus {
            border-color: ${j};
        }

        button {
            appearance: none;
            border: 1px solid ${n};
            background: ${R};
            color: ${l};
            padding: 10px 14px;
            border-radius: ${u};
            cursor: pointer;
            font: inherit;
            transition: transform 0.02s ease-in-out, border-color 0.15s ease;
        }
        button:hover {
            border-color: ${j};
        }
        button:active {
            transform: translateY(1px);
        }

        .ghost {
            background: ${m};
        }
    `,Loading:s.div`
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 16px 0;
        color: ${H};
    `,Spinner:s.div`
        width: 18px;
        height: 18px;
        border: 2px solid ${n};
        border-top-color: ${j};
        border-radius: 50%;
        animation: spin 0.8s linear infinite;

        @keyframes spin {
            to {
                transform: rotate(360deg);
            }
        }
    `,Error:s.div`
        margin-top: 12px;
        color: ${ie};
        font-size: 14px;
    `,ResultHeader:s.div`
        margin-top: 12px;
        padding-bottom: 8px;
        border-bottom: 1px solid ${n};

        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 16px;

        .word {
            margin: 0;
            font-size: 22px;
        }

        .phonetics {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 4px;
            .phonetic {
                font-size: 13px;
                color: ${H};
                border: 1px dashed ${n};
                padding: 2px 6px;
                border-radius: 999px;
            }
        }

        .actions {
            display: flex;
            gap: 8px;
            button {
                appearance: none;
                border: 1px solid ${n};
                background: ${R};
                color: ${l};
                padding: 8px 10px;
                border-radius: ${u};
                cursor: pointer;
                font: inherit;
            }
            button:hover {
                border-color: ${j};
            }
            .ghost {
                background: ${m};
            }
        }
    `,Definitions:s.div`
        display: grid;
        gap: 16px;
        padding-top: 12px;

        .pos-block {
            padding-bottom: 12px;
            border-bottom: 1px dashed ${n};
        }

        .pos {
            font-weight: 600;
            font-size: 14px;
            color: ${l};
            margin-bottom: 8px;
        }

        .defs {
            margin: 0;
            padding-left: 20px;
            display: grid;
            gap: 10px;
        }

        .def {
            font-size: 14px;
            line-height: 1.45;
        }

        .example {
            margin-top: 2px;
            color: ${H};
            font-size: 13px;
        }

        .chips {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            margin-top: 6px;
        }
        .chip {
            font-size: 12px;
            border: 1px solid ${n};
            background: ${m};
            color: ${l};
            border-radius: 999px;
            padding: 2px 8px;
        }
        .chip.alt {
            border-style: dashed;
            opacity: 0.9;
        }
    `,Sources:s.div`
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        align-items: center;
        margin-top: 12px;

        span {
            color: ${H};
            font-size: 13px;
        }
        a {
            color: ${l};
            border: 1px solid ${n};
            background: ${m};
            padding: 4px 8px;
            border-radius: 999px;
            text-decoration: none;
            font-size: 12px;
        }
        a:hover {
            border-color: ${j};
        }
    `,SideHeader:s.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        h3 {
            margin: 0;
            font-size: 16px;
        }
        .actions {
            display: flex;
            gap: 8px;
        }
        .actions .ghost {
            appearance: none;
            border: 1px solid ${n};
            background: ${m};
            color: ${l};
            padding: 8px 10px;
            border-radius: ${u};
            cursor: pointer;
            font: inherit;
        }
        .actions .ghost:hover {
            border-color: ${j};
        }
        .actions .ghost:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
    `,List:s.div`
        display: grid;
        gap: 8px;

        .row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 8px;
            border: 1px solid ${n};
            border-radius: ${u};
            padding: 8px 10px;
            background: ${m};
        }
        .link {
            border: none;
            background: transparent;
            color: ${l};
            text-decoration: underline;
            cursor: pointer;
            font: inherit;
            padding: 0;
        }
        .row-actions {
            display: flex;
            gap: 8px;
        }
        .ghost {
            appearance: none;
            border: 1px solid ${n};
            background: ${R};
            color: ${l};
            padding: 6px 10px;
            border-radius: ${u};
            cursor: pointer;
            font: inherit;
        }
        .ghost:hover {
            border-color: ${j};
        }
    `,ModalBackdrop:s.div`
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.35);
        display: grid;
        place-items: center;
        z-index: 40;
    `,ModalCard:s.div`
        width: min(520px, 92vw);
        background: ${R};
        border: 1px solid ${n};
        border-radius: ${u};
        box-shadow: ${V};
        padding: 16px;

        h3 {
            margin: 0 0 8px 0;
            font-size: 16px;
        }
        p.muted {
            color: ${H};
            margin: 0 0 12px 0;
        }
    `,ModalActions:s.div`
        display: flex;
        gap: 10px;
        justify-content: flex-end;
        button {
            appearance: none;
            border: 1px solid ${n};
            background: ${R};
            color: ${l};
            padding: 10px 14px;
            border-radius: ${u};
            cursor: pointer;
            font: inherit;
        }
        button:hover {
            border-color: ${j};
        }
        .ghost {
            background: ${m};
        }
    `},ae="https://api.dictionaryapi.dev/api/v2/entries",le="en",E={HISTORY:"dictionaryApp_history_v1",FAVS:"dictionaryApp_favs_v1"},de=50;function ce(g){const f=Array.isArray(g)?g:[],y=[];for(const x of f){const b=(x.phonetics||[]).map(d=>({text:d.text||"",audio:d.audio||""})),v=(x.meanings||[]).map(d=>({partOfSpeech:d.partOfSpeech||"",definitions:(d.definitions||[]).map(c=>({definition:c.definition||"",example:c.example||"",synonyms:c.synonyms||[],antonyms:c.antonyms||[]}))})),$=x.sourceUrls||[];y.push({word:x.word||"",phonetics:b,meanings:v,sourceUrls:$})}return y}function pe({open:g,title:f,message:y,confirmText:x="Confirm",cancelText:b="Cancel",onConfirm:v,onClose:$}){return g?e.jsx(o.ModalBackdrop,{role:"dialog","aria-modal":"true",children:e.jsxs(o.ModalCard,{children:[e.jsx("h3",{children:f}),e.jsx("p",{className:"muted",children:y}),e.jsxs(o.ModalActions,{children:[e.jsx("button",{className:"ghost",onClick:$,children:b}),e.jsx("button",{onClick:v,children:x})]})]})}):null}const me=()=>{var W,Y,J,B,P;const[g,f]=a.useState(""),[y,x]=a.useState(!1),[b,v]=a.useState([]),[$,d]=a.useState(""),[c,I]=a.useState(()=>{try{return JSON.parse(localStorage.getItem(E.HISTORY)||"[]")}catch{return[]}}),[S,z]=a.useState(()=>{try{return JSON.parse(localStorage.getItem(E.FAVS)||"[]")}catch{return[]}}),[p,F]=a.useState({open:!1,type:null,payload:null}),O=a.useRef(null),D=a.useRef(null);a.useEffect(()=>{var r;(r=D.current)==null||r.focus()},[]),a.useEffect(()=>{try{localStorage.setItem(E.HISTORY,JSON.stringify(c))}catch{}},[c]),a.useEffect(()=>{try{localStorage.setItem(E.FAVS,JSON.stringify(S))}catch{}},[S]);const T=((W=b[0])==null?void 0:W.word)||"",q=a.useMemo(()=>S.includes(T.toLowerCase()),[S,T]),M=async r=>{var A,L;const t=String(r||"").trim();if(!t)return;x(!0),d(""),v([]),(L=(A=O.current)==null?void 0:A.abort)==null||L.call(A);const i=new AbortController;O.current=i;try{const C=await fetch(`${ae}/${le}/${encodeURIComponent(t)}`,{signal:i.signal}),h=await C.json();if(C.ok){const k=ce(h);k.length?(v(k),I(N=>{const ne=new Set([t.toLowerCase(),...N]);return Array.from(ne).slice(0,de)})):(d("No definitions found."),v([]))}else{const k=h&&(h.message||h.title)?`${h.title||"Error"}: ${h.message||""}`:"Word not found.";d(k),v([])}}catch(C){C.name!=="AbortError"&&d("Network error. Try again.")}finally{x(!1)}},_=()=>M(g),K=r=>{r.key==="Enter"&&_()},Q=()=>f(""),G=()=>{const r=T.toLowerCase();r&&z(t=>t.includes(r)?t.filter(i=>i!==r):[r,...t].slice(0,200))},X=r=>{F({open:!0,type:"removeFav",payload:String(r||"").toLowerCase(),title:"Remove Favorite?",message:`This will remove "${r}" from your favorites.`,confirmText:"Remove"})},Z=()=>{F({open:!0,type:"clearFavs",payload:null,title:"Clear All Favorites?",message:"This will remove all saved favorite words.",confirmText:"Clear All"})},ee=r=>{F({open:!0,type:"removeHistoryItem",payload:String(r||"").toLowerCase(),title:"Delete from History?",message:`Remove "${r}" from your search history?`,confirmText:"Delete"})},re=()=>{F({open:!0,type:"clearHistory",payload:null,title:"Clear Search History?",message:"This will remove all previously searched words.",confirmText:"Clear All"})},U=()=>F({open:!1,type:null,payload:null}),oe=()=>{p.type==="removeFav"&&z(r=>r.filter(t=>t!==p.payload)),p.type==="clearFavs"&&z([]),p.type==="removeHistoryItem"&&I(r=>r.filter(t=>t!==p.payload)),p.type==="clearHistory"&&I([]),U()},te=r=>{if(r)try{new Audio(r).play().catch(()=>{})}catch{}},w=b[0],se=a.useMemo(()=>{const r=[];for(const t of b)for(const i of t.meanings)r.push(i);return r},[b]);return e.jsxs(o.Wrapper,{children:[e.jsx(o.Header,{children:e.jsxs("div",{children:[e.jsx("h1",{children:"Dictionary Application"}),e.jsx("p",{className:"muted",children:"Use this dictionary to search the meaning of any English word. Learn API fetching patterns in React."})]})}),e.jsxs(o.Layout,{children:[e.jsx(o.Column,{children:e.jsxs(o.Card,{children:[e.jsxs(o.SearchRow,{children:[e.jsx("input",{ref:D,type:"text",placeholder:"Search a word…",value:g,onChange:r=>f(r.target.value),onKeyDown:K,"aria-label":"Search word"}),g&&e.jsx("button",{className:"ghost",onClick:Q,title:"Clear query",children:"Clear"}),e.jsx("button",{onClick:_,title:"Search",children:"Search"})]}),y&&e.jsxs(o.Loading,{children:[e.jsx(o.Spinner,{}),e.jsx("span",{children:"Fetching definitions…"})]}),!y&&$&&e.jsx(o.Error,{role:"alert",children:$}),!y&&!$&&w&&e.jsxs(e.Fragment,{children:[e.jsxs(o.ResultHeader,{children:[e.jsxs("div",{children:[e.jsx("h2",{className:"word",children:w.word}),e.jsx("div",{className:"phonetics",children:(Y=w.phonetics)==null?void 0:Y.filter(r=>r.text).slice(0,3).map((r,t)=>e.jsx("span",{className:"phonetic",children:r.text},t))})]}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{onClick:G,children:q?"★ Saved":"☆ Save"}),((B=(J=w.phonetics)==null?void 0:J.find(r=>r.audio))==null?void 0:B.audio)&&e.jsx("button",{className:"ghost",onClick:()=>te(w.phonetics.find(r=>r.audio).audio),children:"▶︎ Pronounce"})]})]}),e.jsx(o.Definitions,{children:se.map((r,t)=>e.jsxs("div",{className:"pos-block",children:[e.jsx("div",{className:"pos",children:r.partOfSpeech||"—"}),e.jsx("ol",{className:"defs",children:r.definitions.map((i,A)=>{var L,C,h,k;return e.jsxs("li",{children:[e.jsx("div",{className:"def",children:i.definition}),i.example&&e.jsxs("div",{className:"example",children:["“",i.example,"”"]}),(L=i.synonyms)!=null&&L.length||(C=i.antonyms)!=null&&C.length?e.jsxs("div",{className:"chips",children:[(h=i.synonyms)==null?void 0:h.slice(0,6).map(N=>e.jsxs("span",{className:"chip",title:"Synonym",children:["syn: ",N]},"s_"+N)),(k=i.antonyms)==null?void 0:k.slice(0,6).map(N=>e.jsxs("span",{className:"chip alt",title:"Antonym",children:["ant: ",N]},"a_"+N))]}):null]},A)})})]},t))}),(P=w.sourceUrls)!=null&&P.length?e.jsxs(o.Sources,{children:[e.jsx("span",{children:"Sources:"}),w.sourceUrls.map(r=>e.jsx("a",{href:r,target:"_blank",rel:"noreferrer",children:r.replace(/^https?:\/\//,"")},r))]}):null]})]})}),e.jsxs(o.Side,{children:[e.jsxs(o.Card,{children:[e.jsxs(o.SideHeader,{children:[e.jsx("h3",{children:"History"}),e.jsx("div",{className:"actions",children:e.jsx("button",{className:"ghost",onClick:re,disabled:!c.length,children:"Clear"})})]}),c.length?e.jsx(o.List,{children:c.map(r=>e.jsxs("div",{className:"row",children:[e.jsx("button",{className:"link",onClick:()=>{f(r),M(r)},children:r}),e.jsx("div",{className:"row-actions",children:e.jsx("button",{className:"ghost",onClick:()=>ee(r),title:"Delete from history",children:"Delete"})})]},r))}):e.jsx("p",{className:"muted",children:"Recent searches will appear here."})]}),e.jsxs(o.Card,{children:[e.jsxs(o.SideHeader,{children:[e.jsx("h3",{children:"Favorites"}),e.jsx("div",{className:"actions",children:e.jsx("button",{className:"ghost",onClick:Z,disabled:!S.length,children:"Clear"})})]}),S.length?e.jsx(o.List,{children:S.map(r=>e.jsxs("div",{className:"row",children:[e.jsx("button",{className:"link",onClick:()=>{f(r),M(r)},children:r}),e.jsx("div",{className:"row-actions",children:e.jsx("button",{className:"ghost",onClick:()=>X(r),title:"Remove from favorites",children:"Remove"})})]},r))}):e.jsx("p",{className:"muted",children:"Save words to review later."})]})]})]}),e.jsx(pe,{open:p.open,title:p.title,message:p.message,confirmText:p.confirmText,onConfirm:oe,onClose:U})]})};export{me as default};
