import{d as p,r as g,j as e,y as m}from"./index-wxTrSNUU.js";const x="var(--bg)",S="var(--card)",f="var(--text)",k="var(--muted)",b="var(--border)",j="var(--radius)",B="var(--shadow)",C="var(--accent)",N="var(--danger, #e5484d)",d={Wrapper:p.div`
        background: ${x};
        color: ${f};
        min-height: 100%;
        padding: 16px;
        /* app wrapper constraints */
        max-width: 1440px;
        margin: 0 auto;
        display: grid;
        gap: 16px;
    `,Header:p.header`
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
            color: ${k};
            font-size: 14px;
        }
    `,HeaderActions:p.div`
        display: flex;
        gap: 8px;
        align-items: center;

        .select {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-size: 14px;
        }
        select {
            border: 1px solid ${b};
            background: ${x};
            color: ${f};
            border-radius: calc(${j} - 2px);
            padding: 8px 10px;
            outline: none;
        }
        button {
            border: 1px solid ${b};
            background: ${S};
            color: ${f};
            border-radius: ${j};
            padding: 8px 12px;
            box-shadow: ${B};
            cursor: pointer;
            transition: border-color 0.15s ease, transform 0.02s ease-in-out;
            &:hover {
                border-color: ${C};
            }
            &:active {
                transform: translateY(1px);
            }
            &:disabled {
                opacity: 0.6;
                cursor: not-allowed;
            }
        }
        .ghost {
            background: ${x};
        }
    `,Layout:p.div`
        display: grid;
        grid-template-columns: 1.6fr 1fr;
        gap: 16px;

        @media (max-width: 1024px) {
            grid-template-columns: 1fr;
        }
    `,Card:p.section`
        background: ${S};
        border: 1px solid ${b};
        border-radius: ${j};
        box-shadow: ${B};
        padding: 16px;
    `,QuoteBlock:p.div`
        blockquote {
            margin: 0 0 10px 0;
            font-size: 18px;
            line-height: 1.6;
        }
        .meta {
            display: flex;
            gap: 8px;
            align-items: baseline;
            color: ${k};
            font-size: 14px;
        }
        .author {
            font-weight: 600;
            color: ${f};
        }
        .source {
            color: ${k};
        }
    `,Actions:p.div`
        margin-top: 12px;
        display: flex;
        gap: 10px;
        align-items: center;

        button {
            border: 1px solid ${b};
            background: ${S};
            color: ${f};
            border-radius: ${j};
            padding: 8px 12px;
            cursor: pointer;
            transition: border-color 0.15s ease, transform 0.02s ease-in-out;
            &:hover {
                border-color: ${C};
            }
            &:active {
                transform: translateY(1px);
            }
        }
        .ghost {
            background: ${x};
        }
    `,FootNote:p.div`
        margin-top: 10px;
        .muted {
            color: ${k};
            font-size: 13px;
        }
    `,Side:p.aside`
        display: grid;
        gap: 16px;
    `,SideHeader:p.div`
        display: grid;
        gap: 12px;

        h3 {
            margin: 0;
            font-size: 16px;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .count {
            display: inline-block;
            padding: 2px 8px;
            border: 1px solid ${b};
            background: ${x};
            border-radius: 999px;
            font-size: 12px;
            color: ${k};
        }

        .row {
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 8px;
            align-items: center;
        }

        input[type="text"] {
            width: 100%;
            border: 1px solid ${b};
            background: ${x};
            color: ${f};
            border-radius: calc(${j} - 2px);
            padding: 8px 10px;
            outline: none;
            &:focus {
                border-color: ${C};
            }
        }

        .btns {
            display: inline-flex;
            gap: 8px;
            align-items: center;
        }

        button,
        label.file {
            border: 1px solid ${b};
            background: ${S};
            color: ${f};
            border-radius: ${j};
            padding: 8px 12px;
            cursor: pointer;
            transition: border-color 0.15s ease, transform 0.02s ease-in-out;
            &:hover {
                border-color: ${C};
            }
            &:active {
                transform: translateY(1px);
            }
        }

        .ghost {
            background: ${x};
        }

        .danger {
            background: ${x};
            border-color: ${N};
            color: ${N};
        }

        label.file {
            position: relative;
            overflow: hidden;
        }
        label.file input[type="file"] {
            position: absolute;
            inset: 0;
            opacity: 0;
            cursor: pointer;
        }
    `,List:p.ul`
        list-style: none;
        margin: 12px 0 0 0;
        padding: 0;

        li {
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 8px;
            padding: 12px 0;
            border-bottom: 1px solid ${b};
        }

        .content .text {
            margin: 0 0 6px 0;
            line-height: 1.5;
        }

        .content .meta {
            margin: 0;
            font-size: 13px;
            color: ${k};
        }
        .content .author {
            color: ${f};
            font-weight: 600;
        }

        .itemBtns {
            display: inline-flex;
            gap: 8px;
            align-items: flex-start;
        }

        .itemBtns button {
            border: 1px solid ${b};
            background: ${S};
            color: ${f};
            border-radius: ${j};
            padding: 6px 10px;
            cursor: pointer;
            transition: border-color 0.15s ease, transform 0.02s ease-in-out;
            &:hover {
                border-color: ${C};
            }
            &:active {
                transform: translateY(1px);
            }
        }
        .itemBtns .ghost {
            background: ${x};
        }
        .itemBtns .danger {
            border-color: ${N};
            color: ${N};
            background: ${x};
        }
    `,Empty:p.div`
        padding: 12px 0;
        .muted {
            color: ${k};
            font-size: 14px;
        }
    `,Modal:p.div`
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.35);
        display: grid;
        place-items: center;
        z-index: 999;

        .box {
            width: min(520px, 92vw);
            background: ${S};
            color: ${f};
            border: 1px solid ${b};
            border-radius: ${j};
            box-shadow: ${B};
            padding: 16px;
            display: grid;
            gap: 12px;
        }

        h4 {
            margin: 0;
            font-size: 16px;
        }
        p.muted {
            margin: 0;
            color: ${k};
        }

        .row {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            gap: 10px;
            margin-top: 6px;
        }

        button {
            border: 1px solid ${b};
            background: ${S};
            color: ${f};
            border-radius: ${j};
            padding: 8px 12px;
            cursor: pointer;
            transition: border-color 0.15s ease, transform 0.02s ease-in-out;
            &:hover {
                border-color: ${C};
            }
            &:active {
                transform: translateY(1px);
            }
        }
        .ghost {
            background: ${x};
        }
        .danger {
            border-color: ${N};
            color: ${N};
            background: ${x};
        }
    `},M="quoteGenerator_last_v1",I="quoteGenerator_favorites_v1",V=[{id:"advice",label:"Advice Slip API"},{id:"quotable",label:"Quotable API"}],P=[{text:"The best time to start was yesterday. The next best time is now.",author:"Unknown",source:"fallback"},{text:"Make it work, make it right, make it fast.",author:"Kent Beck",source:"fallback"},{text:"It always seems impossible until it is done.",author:"Nelson Mandela",source:"fallback"},{text:"Be curious. Read widely. Try new things.",author:"Unknown",source:"fallback"},{text:"Talk is cheap. Show me the code.",author:"Linus Torvalds",source:"fallback"}];async function Z(y){const $=`?_=${Date.now()}`;if(y==="advice"){const o=await fetch(`https://api.adviceslip.com/advice${$}`,{cache:"no-store"});if(!o.ok)throw new Error("Advice API error");const v=await o.json(),s=v==null?void 0:v.slip;return{id:(s==null?void 0:s.id)??void 0,text:(s==null?void 0:s.advice)||"Keep going.",author:"Advice",source:"advice"}}const u=await fetch(`https://api.quotable.io/random${$}`);if(!u.ok)throw new Error("Quotable API error");const c=await u.json();return{id:(c==null?void 0:c._id)??void 0,text:(c==null?void 0:c.content)||"Stay hungry, stay foolish.",author:(c==null?void 0:c.author)||"Unknown",source:"quotable"}}function X(y=new Date){const $=new Intl.DateTimeFormat("en-US",{month:"short",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1,timeZone:"Asia/Kolkata"}).formatToParts(y),u=c=>{var o;return((o=$.find(v=>v.type===c))==null?void 0:o.value)||""};return`${u("month")} ${u("day")}, ${u("year")} ${u("hour")}:${u("minute")}:${u("second")} hrs`}function U(){return Math.random().toString(36).slice(2,9)}function ee(){const[y,$]=g.useState(null);return{confirm:y,open:o=>$({id:U(),...o}),close:()=>$(null)}}const oe=()=>{const[y,$]=g.useState("advice"),[u,c]=g.useState(!1),[o,v]=g.useState(null),[s,E]=g.useState(()=>{try{return JSON.parse(localStorage.getItem(I)||"[]")}catch{return[]}}),[O,Q]=g.useState(""),{confirm:w,open:T,close:A}=ee(),_=g.useRef(null);g.useEffect(()=>{try{const t=JSON.parse(localStorage.getItem(M)||"null");t&&t.text&&v(t)}catch{}},[]),g.useEffect(()=>{if(o)try{localStorage.setItem(M,JSON.stringify(o))}catch{}},[o]);const D=g.useMemo(()=>{const t=O.trim().toLowerCase();return t?s.filter(r=>(r.text||"").toLowerCase().includes(t)||(r.author||"").toLowerCase().includes(t)||(r.source||"").toLowerCase().includes(t)):s},[s,O]),R=async()=>{var t,r,a,i;c(!0);try{const n=await Z(y);v({...n,fetchedAt:new Date().toISOString()}),(r=(t=m)==null?void 0:t.success)==null||r.call(t,"New quote loaded")}catch{const h=P[Math.floor(Math.random()*P.length)];v({...h,fetchedAt:new Date().toISOString()}),(i=(a=m)==null?void 0:a.error)==null||i.call(a,"API issue, showing a fallback")}finally{c(!1)}},z=async()=>{var r,a,i,n;if(!(o!=null&&o.text))return;const t=o.author?`${o.text} — ${o.author}`:o.text;try{await navigator.clipboard.writeText(t),(a=(r=m)==null?void 0:r.info)==null||a.call(r,"Copied to clipboard")}catch{const h=document.createElement("textarea");h.value=t,document.body.appendChild(h),h.select(),document.execCommand("copy"),h.remove(),(n=(i=m)==null?void 0:i.info)==null||n.call(i,"Copied to clipboard")}},K=async()=>{if(!(o!=null&&o.text))return;const r={text:o.author?`${o.text} — ${o.author}`:o.text,title:"Quote"};if(navigator.share)try{await navigator.share(r)}catch{}else z()},J=()=>{var a,i,n,h;if(!(o!=null&&o.text))return;if(s.some(L=>L.text===o.text&&L.author===o.author)){(i=(a=m)==null?void 0:a.info)==null||i.call(a,"Already in favorites");return}const r=[{...o,id:o.id||U()},...s];E(r);try{localStorage.setItem(I,JSON.stringify(r))}catch{}(h=(n=m)==null?void 0:n.success)==null||h.call(n,"Saved")},Y=t=>{T({title:"Remove favorite?",message:"This quote will be removed from your saved list.",confirmText:"Remove",danger:!0,onConfirm:()=>{var a,i;const r=s.filter(n=>n.id!==t);E(r);try{localStorage.setItem(I,JSON.stringify(r))}catch{}A(),(i=(a=m)==null?void 0:a.info)==null||i.call(a,"Removed")}})},H=()=>{s.length&&T({title:"Clear all favorites?",message:"This deletes all saved quotes. This cannot be undone.",confirmText:"Clear All",danger:!0,onConfirm:()=>{var t,r;E([]);try{localStorage.removeItem(I)}catch{}A(),(r=(t=m)==null?void 0:t.info)==null||r.call(t,"Cleared")}})},G=()=>{const t=new Blob([JSON.stringify(s,null,2)],{type:"application/json"}),r=URL.createObjectURL(t),a=document.createElement("a");a.href=r,a.download="quote-favorites.json",document.body.appendChild(a),a.click(),a.remove(),URL.revokeObjectURL(r)},W=t=>{var i;const r=(i=t.target.files)==null?void 0:i[0];if(!r)return;const a=new FileReader;a.onload=()=>{var n,h;try{const L=JSON.parse(String(a.result||"[]"));if(!Array.isArray(L))throw new Error("Not an array");const F=L.filter(l=>l&&l.text).map(l=>({id:l.id||U(),text:String(l.text),author:l.author?String(l.author):"Unknown",source:l.source?String(l.source):"import",fetchedAt:l.fetchedAt||new Date().toISOString()}));T({title:"Replace favorites?",message:`This will replace your current favorites with ${F.length} imported items.`,confirmText:"Replace",danger:!0,onConfirm:()=>{var l,q;E(F);try{localStorage.setItem(I,JSON.stringify(F))}catch{}A(),(q=(l=m)==null?void 0:l.success)==null||q.call(l,"Imported")}})}catch{(h=(n=m)==null?void 0:n.error)==null||h.call(n,"Invalid JSON")}},a.readAsText(r),t.target.value=""};return g.useEffect(()=>{o||R()},[]),g.useEffect(()=>{const t=r=>{r.target&&/input|textarea|select/i.test(r.target.tagName)||(r.key.toLowerCase()==="n"&&R(),r.key.toLowerCase()==="s"&&J(),r.key.toLowerCase()==="c"&&z())};return window.addEventListener("keydown",t),()=>window.removeEventListener("keydown",t)},[o,s,y]),e.jsxs(d.Wrapper,{children:[e.jsxs(d.Header,{children:[e.jsxs("div",{children:[e.jsx("h1",{children:"Quote Generator"}),e.jsxs("p",{children:["Press the button (or hit ",e.jsx("kbd",{children:"N"}),") to fetch a fresh quote or advice. Save your favorites locally."]})]}),e.jsxs(d.HeaderActions,{children:[e.jsxs("label",{className:"select",children:[e.jsx("span",{children:"Source"}),e.jsx("select",{value:y,onChange:t=>$(t.target.value),children:V.map(t=>e.jsx("option",{value:t.id,children:t.label},t.id))})]}),e.jsx("button",{onClick:R,disabled:u,title:"New (N)",children:u?"Loading...":"New"})]})]}),e.jsxs(d.Layout,{children:[e.jsxs(d.Card,{children:[e.jsxs(d.QuoteBlock,{children:[e.jsx("blockquote",{children:(o==null?void 0:o.text)||"…"}),e.jsxs("div",{className:"meta",children:[e.jsx("span",{className:"author",children:(o==null?void 0:o.author)||"—"}),e.jsx("span",{className:"source",children:o!=null&&o.source?`src: ${o.source}`:""})]})]}),e.jsxs(d.Actions,{children:[e.jsx("button",{onClick:J,title:"Save (S)",children:"Save"}),e.jsx("button",{onClick:z,className:"ghost",title:"Copy (C)",children:"Copy"}),e.jsx("button",{onClick:K,className:"ghost",children:"Share"})]}),e.jsx(d.FootNote,{children:e.jsxs("span",{className:"muted",children:["Last fetched: ",o!=null&&o.fetchedAt?X(new Date(o.fetchedAt)):"—"]})})]}),e.jsx(d.Side,{children:e.jsxs(d.Card,{ref:_,children:[e.jsxs(d.SideHeader,{children:[e.jsxs("h3",{children:["Favorites ",e.jsx("span",{className:"count",children:s.length})]}),e.jsxs("div",{className:"row",children:[e.jsx("input",{type:"text",placeholder:"Search saved…",value:O,onChange:t=>Q(t.target.value)}),e.jsxs("div",{className:"btns",children:[e.jsx("button",{className:"ghost",onClick:G,disabled:!s.length,children:"Export"}),e.jsxs("label",{className:"ghost file",children:["Import",e.jsx("input",{type:"file",accept:"application/json",onChange:W})]}),e.jsx("button",{className:"danger",disabled:!s.length,onClick:H,children:"Clear"})]})]})]}),e.jsxs(d.List,{children:[D.length===0&&e.jsx(d.Empty,{children:e.jsx("p",{className:"muted",children:"No saved quotes yet. Save a few, then you can search, export, or clear."})}),D.map(t=>e.jsxs("li",{children:[e.jsxs("div",{className:"content",children:[e.jsxs("p",{className:"text",children:["“",t.text,"”"]}),e.jsxs("p",{className:"meta",children:[e.jsxs("span",{className:"author",children:["— ",t.author||"Unknown"]}),t.source?e.jsxs("span",{className:"source",children:[" · ",t.source]}):null]})]}),e.jsxs("div",{className:"itemBtns",children:[e.jsx("button",{className:"ghost",onClick:()=>{var r,a;v({...t,fetchedAt:t.fetchedAt||new Date().toISOString()}),(a=(r=m)==null?void 0:r.info)==null||a.call(r,"Loaded to viewer")},children:"Load"}),e.jsx("button",{className:"danger",onClick:()=>Y(t.id),children:"Remove"})]})]},t.id))]})]})})]}),w&&e.jsx(d.Modal,{role:"dialog","aria-modal":"true",onClick:A,children:e.jsxs("div",{className:"box",onClick:t=>t.stopPropagation(),children:[e.jsx("h4",{children:w.title||"Are you sure?"}),w.message?e.jsx("p",{className:"muted",children:w.message}):null,e.jsxs("div",{className:"row",children:[e.jsx("button",{className:"ghost",onClick:A,children:"Cancel"}),e.jsx("button",{className:w.danger?"danger":"",onClick:()=>{var t;return(t=w.onConfirm)==null||t.call(w),null},children:w.confirmText||"Confirm"})]})]})})]})};export{oe as default};
