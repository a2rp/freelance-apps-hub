import{d as b,r as n,j as e}from"./index-COA_3K4v.js";const I="var(--bg)",y="var(--card)",f="var(--text)",v="var(--muted)",u="var(--border)",m="var(--radius)",P="var(--shadow)",j="var(--accent)",E="var(--danger, #e5484d)",h={Wrapper:b.div`
        color: ${f};
        background: ${I};
        min-height: 100%;
        padding: 16px;

        /* App-level width constraints */
        max-width: 1440px;
        margin: 0 auto;
        display: grid;
        gap: 16px;
    `,Header:b.header`
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        gap: 12px;

        .titles h1 {
            margin: 0 0 6px 0;
            font-size: 20px;
            line-height: 1.2;
        }
        .titles p {
            margin: 0;
            color: ${v};
            font-size: 14px;
        }

        .actions {
            display: flex;
            gap: 8px;
        }

        .ghost {
            border: 1px solid ${u};
            background: ${I};
            color: ${f};
            border-radius: ${m};
            padding: 8px 12px;
            cursor: pointer;
        }
        .ghost:hover {
            border-color: ${j};
        }
    `,Settings:b.form`
        background: ${y};
        border: 1px solid ${u};
        border-radius: ${m};
        box-shadow: ${P};
        padding: 12px;
        display: grid;
        gap: 12px;

        .row {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 10px;
        }
        .row:nth-child(2) {
            grid-template-columns: 1fr auto;
            align-items: center;
        }
        .row.rowSmall {
            grid-template-columns: 1fr;
            align-items: center;
        }

        .field {
            display: grid;
            gap: 6px;
        }
        label {
            font-size: 12px;
        }
        input[type="password"],
        input[type="search"],
        select {
            width: 100%;
            border: 1px solid ${u};
            background: ${I};
            color: ${f};
            border-radius: calc(${m} - 2px);
            padding: 8px 10px;
            font: inherit;
            outline: none;
        }
        input:focus,
        select:focus {
            border-color: ${j};
        }

        .chips {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }
        .chip {
            border: 1px solid ${u};
            background: ${I};
            color: ${f};
            border-radius: 999px;
            padding: 6px 10px;
            font-size: 13px;
            cursor: pointer;
            transition: border-color 0.15s ease, background 0.15s ease;
        }
        .chip.active {
            background: ${y};
            border-color: ${j};
        }

        .searchWrap {
            display: flex;
            gap: 8px;
            justify-content: flex-end;
            align-items: center;
        }
        .searchWrap input[type="search"] {
            max-width: 320px;
        }
        .searchWrap button {
            border: 1px solid ${u};
            background: ${y};
            color: ${f};
            padding: 8px 12px;
            border-radius: ${m};
            cursor: pointer;
        }
        .searchWrap button:hover {
            border-color: ${j};
        }

        .checkbox {
            display: inline-flex;
            gap: 8px;
            align-items: center;
            color: ${v};
            font-size: 14px;
        }

        @media (max-width: 980px) {
            .row {
                grid-template-columns: 1fr 1fr;
            }
            .row:nth-child(2) {
                grid-template-columns: 1fr;
            }
        }
        @media (max-width: 560px) {
            .row {
                grid-template-columns: 1fr;
            }
        }
    `,StatusBar:b.div`
        display: flex;
        justify-content: space-between;
        align-items: center;

        .left {
            display: flex;
            gap: 10px;
            align-items: center;
            flex-wrap: wrap;
        }
        .meta {
            color: ${v};
        }
        .err {
            color: ${E};
            font-size: 13px;
        }

        .right {
            display: flex;
            gap: 8px;
        }
        .ghost {
            border: 1px solid ${u};
            background: ${I};
            color: ${f};
            border-radius: ${m};
            padding: 6px 10px;
            cursor: pointer;
        }
        .ghost:hover {
            border-color: ${j};
        }
    `,Grid:b.section`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 12px;

        @media (max-width: 1024px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media (max-width: 640px) {
            grid-template-columns: 1fr;
        }

        .card {
            background: ${y};
            border: 1px solid ${u};
            border-radius: ${m};
            box-shadow: ${P};
            display: grid;
            grid-template-rows: auto 1fr auto;
            overflow: hidden;
        }

        .thumb {
            display: block;
            width: 100%;
            aspect-ratio: 16/9;
            border: 0;
            padding: 0;
            cursor: pointer;
            background: ${I};
        }
        .thumb img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
        }
        .noimg {
            width: 100%;
            height: 100%;
            display: grid;
            place-items: center;
            color: ${v};
            font-size: 13px;
            border-bottom: 1px solid ${u};
        }

        .body {
            padding: 12px;
        }
        h3 {
            margin: 0 0 6px 0;
            font-size: 16px;
            line-height: 1.3;
        }
        .desc {
            margin: 0 0 10px 0;
            color: ${v};
            font-size: 14px;
        }
        .meta {
            display: flex;
            gap: 6px;
            align-items: center;
            color: ${v};
            font-size: 12px;
        }
        .meta .dot {
            opacity: 0.6;
        }

        .actions {
            display: flex;
            gap: 8px;
            padding: 12px;
            border-top: 1px solid ${u};
        }
        .actions a,
        .actions button {
            border: 1px solid ${u};
            background: ${y};
            color: ${f};
            padding: 8px 12px;
            border-radius: ${m};
            cursor: pointer;
            text-decoration: none;
            text-align: center;
            flex: 1;
        }
        .actions a:hover,
        .actions button:hover {
            border-color: ${j};
        }
        .actions .primary {
            border-color: ${j};
        }
    `,FooterBar:b.div`
        display: flex;
        justify-content: center;
        padding: 8px 0;

        .loadMore {
            border: 1px solid ${u};
            background: ${y};
            color: ${f};
            padding: 10px 16px;
            border-radius: ${m};
            cursor: pointer;
        }
        .loadMore:hover {
            border-color: ${j};
        }
    `,SideWrap:b.section`
        display: grid;
        grid-template-columns: 2fr 3fr;
        gap: 12px;

        @media (max-width: 980px) {
            grid-template-columns: 1fr;
        }
    `,Panel:b.div`
        background: ${y};
        border: 1px solid ${u};
        border-radius: ${m};
        box-shadow: ${P};
        padding: 12px;

        h4 {
            margin: 0 0 10px 0;
            font-size: 15px;
        }

        .list {
            list-style: none;
            margin: 0;
            padding: 0;
            display: grid;
            gap: 8px;
        }
        .list li {
            border: 1px dashed ${u};
            border-radius: calc(${m} - 3px);
            padding: 8px;
            display: grid;
            gap: 6px;
        }
        .list li .row {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .src {
            color: ${v};
            font-size: 12px;
        }
        .muted {
            color: ${v};
        }

        .danger {
            border: 1px solid ${E};
            color: ${E};
            background: transparent;
            border-radius: 999px;
            padding: 4px 10px;
            cursor: pointer;
        }
        .danger:hover {
            filter: brightness(1.1);
        }
    `,ModalBackdrop:b.div`
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.35);
        display: grid;
        place-items: center;
        z-index: 50;
        padding: 20px;
    `,ModalCard:b.div`
        background: ${y};
        color: ${f};
        border: 1px solid ${u};
        border-radius: ${m};
        box-shadow: ${P};
        width: min(720px, 100%);
        max-height: 85vh;
        overflow: auto;
        display: grid;
        gap: 12px;
        padding: 12px;

        .head {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 8px;
        }
        .head h3 {
            margin: 0;
            font-size: 18px;
        }

        .content img {
            width: 100%;
            height: auto;
            border-radius: calc(${m} - 2px);
            border: 1px solid ${u};
            display: block;
            margin-bottom: 8px;
        }
        .content .desc {
            color: ${v};
        }

        .metaLine {
            display: flex;
            gap: 8px;
            align-items: center;
            color: ${v};
            font-size: 12px;
        }
        .metaLine .dot {
            opacity: 0.6;
        }

        .foot {
            display: flex;
            gap: 8px;
            justify-content: flex-end;
        }
        .foot .ghost {
            border: 1px solid ${u};
            background: ${y};
            color: ${f};
            padding: 8px 12px;
            border-radius: ${m};
            cursor: pointer;
        }
        .foot .ghost:hover {
            border-color: ${j};
        }
        .foot .primary {
            border: 1px solid ${j};
            background: ${y};
            color: ${f};
            padding: 8px 12px;
            border-radius: ${m};
            cursor: pointer;
        }
        .foot .danger {
            border: 1px solid ${E};
            color: ${E};
            background: transparent;
            border-radius: ${m};
            padding: 8px 12px;
            cursor: pointer;
        }
    `},ee="newsApp_settings_v1",te="newsApp_bookmarks_v1",re="newsApp_history_v1",G="newsApp_cache_v1",xe=["top","technology","business","science","entertainment","sports","health","world","nation"],fe=[{code:"in",label:"India"},{code:"us",label:"United States"},{code:"gb",label:"United Kingdom"},{code:"de",label:"Germany"},{code:"au",label:"Australia"}],be=[{code:"en",label:"English"},{code:"hi",label:"Hindi"},{code:"de",label:"German"},{code:"fr",label:"French"},{code:"es",label:"Spanish"}],S=[{title:"Front-end Practice: Building a News App in React",description:"From API wiring to UX polish — pagination, filters, bookmarks, and modals.",url:"https://example.com/react-news-app",image:"https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=1200&auto=format&fit=crop",source:"Demo Feed",publishedAt:"2025-09-12T10:00:00Z"},{title:"JavaScript Performance Tips for Modern SPAs",description:"Practical guidance on network strategies and rendering patterns.",url:"https://example.com/js-performance",image:"https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=1200&auto=format&fit=crop",source:"Demo Feed",publishedAt:"2025-09-10T16:20:00Z"},{title:"Styled Components: Design Systems That Stick",description:"Tokens, themes, and maintainability without wrestling the cascade.",url:"https://example.com/styled-components",image:"https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1200&auto=format&fit=crop",source:"Demo Feed",publishedAt:"2025-09-08T08:45:00Z"}],H={provider:"gnews",apiKey:"",country:"in",lang:"en",category:"top",query:"",pageSize:12,useDemoIfNoKey:!0};function T(r,o){try{return JSON.parse(localStorage.getItem(r)||"null")??o}catch{return o}}function D(r,o){try{localStorage.setItem(r,JSON.stringify(o))}catch{}}function ye({apiKey:r,country:o,lang:l,category:a,query:d,page:w,pageSize:p}){const $="https://gnews.io/api/v4/top-headlines",c=new URLSearchParams;return d&&c.set("q",d),l&&c.set("lang",l),o&&c.set("country",o),a&&a!=="top"&&c.set("topic",a),c.set("max",String(p||12)),c.set("page",String(w||1)),c.set("apikey",r||""),`${$}?${c.toString()}`}function ve(r){const o=((r==null?void 0:r.articles)||[]).map(a=>{var d;return{title:a.title||"",description:a.description||"",url:a.url||"#",image:a.image||"",source:((d=a.source)==null?void 0:d.name)||"GNews",publishedAt:a.publishedAt||""}}),l=(r==null?void 0:r.totalArticles)||o.length;return{items:o,total:l}}function je({apiKey:r,country:o,lang:l,category:a,query:d,page:w,pageSize:p}){const $="https://newsapi.org/v2/top-headlines",c=new URLSearchParams;return d&&c.set("q",d),o&&c.set("country",o),a&&a!=="top"&&c.set("category",a),l&&c.set("language",l),c.set("page",String(w||1)),c.set("pageSize",String(p||12)),c.set("apiKey",r||""),`${$}?${c.toString()}`}function we(r){const o=((r==null?void 0:r.articles)||[]).map(a=>{var d;return{title:a.title||"",description:a.description||"",url:a.url||"#",image:a.urlToImage||"",source:((d=a.source)==null?void 0:d.name)||"NewsAPI",publishedAt:a.publishedAt||""}}),l=(r==null?void 0:r.totalResults)||o.length;return{items:o,total:l}}function $e(){const[r,o]=n.useState(!1),[l,a]=n.useState({title:"Confirm",message:"",onYes:null,yesLabel:"Yes",noLabel:"Cancel"});function d(p){a({...l,...p}),o(!0)}function w(){o(!1)}return{open:r,cfg:l,ask:d,close:w}}const Ne=()=>{var X;const[r,o]=n.useState(()=>T(ee,H)),[l,a]=n.useState(()=>T(te,[])),[d,w]=n.useState(()=>T(re,[])),[p,$]=n.useState(()=>T(G,{items:S,total:S.length})),[c,R]=n.useState(1),[B,q]=n.useState(!1),[U,W]=n.useState(""),[se,F]=n.useState(!r.apiKey&&r.useDemoIfNoKey),[g,M]=n.useState(null),{open:ae,cfg:C,ask:K,close:O}=$e(),A=n.useRef(!1),J=n.useRef(null);((X=r.apiKey)==null?void 0:X.trim().length)>0;const oe=p.items.length<(p.total||0);n.useEffect(()=>(A.current=!0,()=>{A.current=!1}),[]),n.useEffect(()=>D(ee,r),[r]),n.useEffect(()=>D(te,l),[l]),n.useEffect(()=>D(re,d),[d]),n.useEffect(()=>D(G,p),[p]);function k(t,i){if(o(s=>({...s,[t]:i})),t==="query"){clearTimeout(J.current),J.current=setTimeout(()=>{R(1),z(1,{...r,query:i})},400);return}["country","lang","category","provider","pageSize"].includes(t)&&(R(1),z(1,{...r,[t]:i}))}function ie(t){try{const i=new Date(t);return new Intl.DateTimeFormat("en-IN",{month:"short",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!1}).format(i)}catch{return""}}function ne(t){const i=new Date().toISOString(),s={...t,at:i};w(x=>[s,...x].slice(0,20))}async function z(t=1,i=r){var _;const s=i||r;if(W(""),q(!0),!((_=s.apiKey)!=null&&_.trim())&&s.useDemoIfNoKey){const N={items:S,total:S.length};if(!A.current)return;$(t===1?N:{items:[...p.items,...N.items],total:N.total}),F(!0),q(!1);return}const x={items:[],total:0};try{let N="";s.provider==="gnews"?N=ye({apiKey:s.apiKey,country:s.country,lang:s.lang,category:s.category,query:s.query,page:t,pageSize:s.pageSize}):N=je({apiKey:s.apiKey,country:s.country,lang:s.lang,category:s.category,query:s.query,page:t,pageSize:s.pageSize});const Y=await fetch(N);if(!Y.ok)throw new Error(`HTTP ${Y.status}`);const Q=await Y.json(),V=s.provider==="gnews"?ve(Q):we(Q);if(x.items=V.items,x.total=V.total,!A.current)return;$(he=>t===1?x:{items:[...he.items,...x.items],total:x.total}),F(!1),t===1&&ne({provider:s.provider,country:s.country,lang:s.lang,category:s.category,query:s.query||""})}catch{if(!A.current)return;W("Live fetch failed (key, CORS, or rate limit). Showing demo feed."),$(t===1?{items:S,total:S.length}:{items:[...p.items,...S],total:p.items.length+S.length}),F(!0)}finally{A.current&&q(!1)}}function Z(t){a(i=>i.some(x=>x.url===t.url)?i.filter(x=>x.url!==t.url):[{...t,savedAt:new Date().toISOString()},...i].slice(0,200))}function L(t){return l.some(i=>i.url===t)}function le(){K({title:"Clear Bookmarks",message:"Remove all saved articles?",yesLabel:"Clear",onYes:()=>a([])})}function ce(t){K({title:"Remove Bookmark",message:"Delete this saved article?",yesLabel:"Remove",onYes:()=>a(i=>i.filter(s=>s.url!==t))})}function de(){K({title:"Clear History",message:"Erase recent fetch history?",yesLabel:"Clear",onYes:()=>w([])})}function pe(){K({title:"Reset Settings",message:"Restore defaults and keep demo on if key is missing?",yesLabel:"Reset",onYes:()=>{o(H),R(1),z(1,H)}})}function ue(){K({title:"Clear Cache",message:"Clear cached articles?",yesLabel:"Clear",onYes:()=>{D(G,null),$({items:[],total:0})}})}function me(t){t.preventDefault(),R(1),z(1,r)}n.useEffect(()=>{z(1,r)},[]);const ge=n.useMemo(()=>{const t=r.provider==="gnews"?"GNews":"NewsAPI";return`${r.category==="top"?"Top":r.category} • ${r.country.toUpperCase()} • ${t}`},[r]);return e.jsxs(h.Wrapper,{children:[e.jsxs(h.Header,{children:[e.jsxs("div",{className:"titles",children:[e.jsx("h1",{children:"News App using React"}),e.jsx("p",{children:"Fetch latest headlines by interests. Client-only, with demo fallback and local bookmarks."})]}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{type:"button",onClick:pe,className:"ghost",children:"Reset"}),e.jsx("button",{type:"button",onClick:ue,className:"ghost",children:"Clear Cache"})]})]}),e.jsxs(h.Settings,{as:"form",onSubmit:me,children:[e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"field",children:[e.jsx("label",{htmlFor:"provider",children:"Provider"}),e.jsxs("select",{id:"provider",value:r.provider,onChange:t=>k("provider",t.target.value),children:[e.jsx("option",{value:"gnews",children:"GNews"}),e.jsx("option",{value:"newsapi",children:"NewsAPI"})]})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{htmlFor:"apiKey",children:"API Key"}),e.jsx("input",{id:"apiKey",type:"password",placeholder:"Enter API key",value:r.apiKey,onChange:t=>k("apiKey",t.target.value)})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{htmlFor:"country",children:"Country"}),e.jsx("select",{id:"country",value:r.country,onChange:t=>k("country",t.target.value),children:fe.map(t=>e.jsx("option",{value:t.code,children:t.label},t.code))})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{htmlFor:"lang",children:"Language"}),e.jsx("select",{id:"lang",value:r.lang,onChange:t=>k("lang",t.target.value),children:be.map(t=>e.jsx("option",{value:t.code,children:t.label},t.code))})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{htmlFor:"pageSize",children:"Page Size"}),e.jsx("select",{id:"pageSize",value:r.pageSize,onChange:t=>k("pageSize",Number(t.target.value)),children:[6,12,18,24].map(t=>e.jsx("option",{value:t,children:t},t))})]})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"chips","aria-label":"Categories",children:xe.map(t=>{const i=t===r.category;return e.jsx("button",{type:"button",className:`chip ${i?"active":""}`,onClick:()=>k("category",t),title:t,children:t},t)})}),e.jsxs("div",{className:"searchWrap",children:[e.jsx("input",{type:"search",placeholder:"Search keywords…",value:r.query,onChange:t=>k("query",t.target.value)}),e.jsx("button",{type:"submit",children:"Go"})]})]}),e.jsx("div",{className:"row rowSmall",children:e.jsxs("label",{className:"checkbox",children:[e.jsx("input",{type:"checkbox",checked:r.useDemoIfNoKey,onChange:t=>k("useDemoIfNoKey",t.target.checked)}),e.jsx("span",{children:"Use demo data if API key is missing"})]})})]}),e.jsxs(h.StatusBar,{children:[e.jsxs("div",{className:"left",children:[e.jsx("strong",{children:ge}),e.jsxs("span",{className:"meta",children:[B?"Loading…":`${p.items.length} of ${p.total||p.items.length}`,se?" • Demo":""]}),U&&e.jsx("span",{className:"err",children:U})]}),e.jsxs("div",{className:"right",children:[e.jsx("button",{type:"button",className:"ghost",onClick:de,title:"Clear history",children:"Clear History"}),e.jsx("button",{type:"button",className:"ghost",onClick:le,title:"Clear bookmarks",children:"Clear Bookmarks"})]})]}),e.jsx(h.Grid,{children:p.items.map(t=>e.jsxs("article",{className:"card",children:[e.jsx("button",{className:"thumb",onClick:()=>M(t),title:"Preview",children:t.image?e.jsx("img",{src:t.image,alt:t.title||"image",loading:"lazy"}):e.jsx("div",{className:"noimg",children:"No Image"})}),e.jsxs("div",{className:"body",children:[e.jsx("h3",{title:t.title,children:t.title}),t.description&&e.jsx("p",{className:"desc",children:t.description}),e.jsxs("div",{className:"meta",children:[e.jsx("span",{className:"src",children:t.source||"Source"}),e.jsx("span",{className:"dot",children:"•"}),e.jsx("span",{className:"time",children:ie(t.publishedAt)})]})]}),e.jsxs("div",{className:"actions",children:[e.jsx("a",{href:t.url,target:"_blank",rel:"noreferrer",className:"ghost",children:"Open"}),e.jsx("button",{type:"button",className:L(t.url)?"primary":"",onClick:()=>Z(t),title:L(t.url)?"Bookmarked":"Save",children:L(t.url)?"Saved":"Save"})]})]},t.url))}),e.jsx(h.FooterBar,{children:oe&&e.jsx("button",{disabled:B,onClick:()=>{const t=c+1;R(t),z(t)},className:"loadMore",children:B?"Loading…":"Load More"})}),e.jsxs(h.SideWrap,{children:[e.jsxs(h.Panel,{children:[e.jsxs("h4",{children:["Bookmarks (",l.length,")"]}),e.jsxs("ul",{className:"list",children:[l.map(t=>e.jsxs("li",{children:[e.jsx("a",{href:t.url,target:"_blank",rel:"noreferrer",children:t.title}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"src",children:t.source}),e.jsx("button",{className:"danger",onClick:()=>ce(t.url),children:"Remove"})]})]},t.url)),l.length===0&&e.jsx("li",{className:"muted",children:"No bookmarks yet"})]})]}),e.jsxs(h.Panel,{children:[e.jsx("h4",{children:"Recent"}),e.jsxs("ul",{className:"list",children:[d.map((t,i)=>e.jsxs("li",{children:[e.jsxs("span",{className:"muted",children:[t.provider," • ",t.country.toUpperCase()," • ",t.category,t.query?` • "${t.query}"`:""]}),e.jsx("div",{className:"row",children:e.jsx("span",{className:"src",children:new Date(t.at).toLocaleString()})})]},i)),d.length===0&&e.jsx("li",{className:"muted",children:"No history yet"})]})]})]}),g&&e.jsx(h.ModalBackdrop,{onClick:()=>M(null),role:"dialog","aria-modal":"true",children:e.jsxs(h.ModalCard,{onClick:t=>t.stopPropagation(),children:[e.jsxs("div",{className:"head",children:[e.jsx("h3",{children:g.title}),e.jsx("button",{className:"ghost",onClick:()=>M(null),children:"Close"})]}),e.jsxs("div",{className:"content",children:[g.image?e.jsx("img",{src:g.image,alt:""}):e.jsx("div",{className:"noimg",children:"No Image"}),g.description&&e.jsx("p",{className:"desc",children:g.description}),e.jsxs("div",{className:"metaLine",children:[e.jsx("span",{children:g.source||"Source"}),e.jsx("span",{className:"dot",children:"•"}),e.jsx("span",{children:new Date(g.publishedAt).toLocaleString()})]})]}),e.jsxs("div",{className:"foot",children:[e.jsx("a",{className:"ghost",href:g.url,target:"_blank",rel:"noreferrer",children:"Open Source"}),e.jsx("button",{onClick:()=>{var t;(t=navigator.clipboard)==null||t.writeText(g.url||"")},children:"Copy Link"}),e.jsx("button",{className:L(g.url)?"primary":"",onClick:()=>Z(g),children:L(g.url)?"Saved":"Save"})]})]})}),ae&&e.jsx(h.ModalBackdrop,{onClick:O,role:"alertdialog","aria-modal":"true",children:e.jsxs(h.ModalCard,{onClick:t=>t.stopPropagation(),children:[e.jsx("div",{className:"head",children:e.jsx("h3",{children:C.title})}),e.jsx("div",{className:"content",children:e.jsx("p",{children:C.message})}),e.jsxs("div",{className:"foot",children:[e.jsx("button",{className:"ghost",onClick:O,children:C.noLabel||"Cancel"}),e.jsx("button",{className:"danger",onClick:()=>{var t;(t=C.onYes)==null||t.call(C),O()},children:C.yesLabel||"Yes"})]})]})})]})};export{Ne as default};
