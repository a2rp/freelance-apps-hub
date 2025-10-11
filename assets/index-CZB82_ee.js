import{d as l,r as d,j as e}from"./index-CaRw1yxc.js";const k="var(--bg)",m="var(--card)",b="var(--text)",S="var(--muted)",h="var(--border)",j="var(--radius)",_="var(--shadow)",H="var(--accent)",w="var(--danger, #e5484d)",n={Wrapper:l.div`
        display: grid;
        gap: 16px;
        padding: 16px;
        background: ${k};
        color: ${b};
        min-height: 100%;
    `,Header:l.header`
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        gap: 16px;

        h1 {
            margin: 0 0 6px 0;
            font-size: 20px;
            line-height: 1.2;
        }
        p {
            margin: 0;
            font-size: 14px;
            color: ${S};
        }
    `,Badges:l.div`
        display: flex;
        gap: 8px;
        align-items: center;
        .badge {
            background: ${m};
            border: 1px solid ${h};
            border-radius: 999px;
            padding: 6px 10px;
            font-size: 12px;
            box-shadow: ${_};
        }
    `,Layout:l.div`
        display: grid;
        grid-template-columns: 1.7fr 1fr;
        gap: 16px;
        @media (max-width: 1024px) {
            grid-template-columns: 1fr;
        }
    `,Card:l.div`
        background: ${m};
        border: 1px solid ${h};
        border-radius: ${j};
        box-shadow: ${_};
        padding: 16px;
    `,Section:l.section`
        & + & {
            margin-top: 16px;
        }
    `,SectionTitle:l.h2`
        margin: 0 0 10px 0;
        font-size: 15px;
        font-weight: 600;
    `,Grid:l.div`
        display: grid;
        gap: 12px;
        grid-template-columns: ${s=>s.cols==="3"?"1fr 1fr 1fr":"1fr 1fr"};
        @media (max-width: 720px) {
            grid-template-columns: 1fr;
        }
    `,Field:l.div`
        display: grid;
        gap: 6px;

        &.span2 {
            grid-column: span 2;
            @media (max-width: 720px) {
                grid-column: span 1;
            }
        }

        label {
            font-size: 13px;
            color: ${b};
        }

        input[type="text"],
        select {
            width: 100%;
            border: 1px solid ${h};
            background: ${k};
            color: ${b};
            border-radius: calc(${j} - 2px);
            padding: 10px 12px;
            font: inherit;
            outline: none;
            transition: border-color 0.15s ease;
        }
        input:focus,
        select:focus {
            border-color: ${H};
        }

        .inline {
            display: flex;
            gap: 14px;
            align-items: center;
            flex-wrap: wrap;
        }
        .checkbox {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-size: 14px;
        }
    `,Chips:l.div`
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        .chip {
            border: 1px solid ${h};
            background: ${k};
            color: ${b};
            border-radius: 999px;
            padding: 6px 10px;
            font-size: 13px;
            cursor: pointer;
            user-select: none;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            transition: border-color 0.15s ease, background 0.15s ease;
        }
        .chip.active {
            background: ${m};
            border-color: ${H};
        }
        .chip.disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
        .chip input {
            display: none;
        }
    `,Actions:l.div`
        margin-top: 8px;
        display: flex;
        gap: 10px;
        align-items: center;

        button {
            appearance: none;
            border: 1px solid ${h};
            background: ${m};
            color: ${b};
            padding: 10px 14px;
            border-radius: ${j};
            cursor: pointer;
            font: inherit;
            transition: transform 0.02s ease-in-out, border-color 0.15s ease;
        }
        button:hover {
            border-color: ${H};
        }
        button:active {
            transform: translateY(1px);
        }
        button:disabled {
            opacity: 0.55;
            cursor: not-allowed;
        }

        .ghost {
            background: ${k};
        }
        .danger {
            border-color: ${w};
            color: ${w};
        }
    `,Jokes:l.div`
        display: grid;
        gap: 12px;
        margin-top: 8px;
    `,JokeCard:l.article`
        border: 1px solid ${h};
        border-radius: ${j};
        background: ${k};
        padding: 12px;

        .meta {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 8px;
            margin-bottom: 6px;
            .pill {
                border: 1px solid ${h};
                background: ${m};
                border-radius: 999px;
                padding: 4px 8px;
                font-size: 12px;
            }
            .time {
                color: ${S};
                font-size: 12px;
            }
        }

        .content {
            font-size: 15px;
            line-height: 1.55;
            white-space: pre-wrap;
            &.single {
                font-style: normal;
            }
            .setup {
                font-weight: 600;
            }
            .delivery {
                margin-top: 4px;
            }
        }

        .actions {
            margin-top: 10px;
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            button {
                border: 1px solid ${h};
                background: ${m};
                color: ${b};
                border-radius: ${j};
                padding: 8px 12px;
                font-size: 13px;
                cursor: pointer;
            }
            .ghost {
                background: ${k};
            }
        }
    `,Side:l.aside`
        display: grid;
        gap: 16px;
    `,List:l.ul`
        list-style: none;
        margin: 0;
        padding: 0;
        li {
            display: grid;
            grid-template-columns: auto 1fr auto;
            gap: 8px;
            align-items: center;
            padding: 8px 0;
            border-bottom: 1px dashed ${h};
        }
        li:last-child {
            border-bottom: none;
        }

        .cat {
            font-size: 12px;
            border: 1px solid ${h};
            background: ${m};
            border-radius: 999px;
            padding: 2px 6px;
        }
        .txt {
            min-width: 0;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: 14px;
        }
        .row-actions {
            display: inline-flex;
            gap: 6px;
            .sm {
                padding: 6px 8px;
                font-size: 12px;
                border-radius: ${j};
                border: 1px solid ${h};
                background: ${m};
                color: ${b};
                cursor: pointer;
            }
            .ghost {
                background: ${k};
            }
            .danger {
                border-color: ${w};
                color: ${w};
            }
        }
        .muted {
            color: ${S};
            font-size: 13px;
            padding: 6px 0;
        }
    `,Help:l.div`
        color: ${S};
        font-size: 14px;
    `,ModalOverlay:l.div`
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.35);
        display: grid;
        place-items: center;
        z-index: 999;
    `,ModalCard:l.div`
        width: min(520px, 92vw);
        background: ${m};
        color: ${b};
        border: 1px solid ${h};
        border-radius: ${j};
        box-shadow: ${_};
        padding: 16px;

        h3 {
            margin: 0 0 8px 0;
            font-size: 16px;
        }
        .msg {
            margin: 0 0 12px 0;
            color: ${S};
            font-size: 14px;
        }
    `,ModalActions:l.div`
        display: flex;
        gap: 10px;
        justify-content: flex-end;
        button {
            appearance: none;
            border: 1px solid ${h};
            background: ${m};
            color: ${b};
            padding: 8px 12px;
            border-radius: ${j};
            cursor: pointer;
            font: inherit;
        }
        .ghost {
            background: ${k};
        }
        .danger {
            border-color: ${w};
            color: ${w};
        }
    `},ae="jokesGen_settings_v1",U="jokesGen_history_v1",Y="jokesGen_faves_v1",ye=100,fe=[{key:"Programming",label:"Programming"},{key:"Misc",label:"Misc"},{key:"Pun",label:"Pun"},{key:"Spooky",label:"Spooky"},{key:"Christmas",label:"Christmas"},{key:"Dark",label:"Dark"}],be=["damn","hell","crap"];function $(s=""){let a=String(s);return be.forEach(r=>{const i=new RegExp(`\\b${r}\\b`,"ig");a=a.replace(i,r[0]+"★".repeat(Math.max(0,r.length-1)))}),a}function re(s){const a=typeof s=="string"?new Date(s):s,r=new Intl.DateTimeFormat("en-US",{month:"short",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1,timeZone:"Asia/Kolkata"}).formatToParts(a),i=p=>{var g;return((g=r.find(u=>u.type===p))==null?void 0:g.value)||""};return`${i("month")} ${i("day")}, ${i("year")} ${i("hour")}:${i("minute")}:${i("second")} hrs`}function B(s,a){try{return JSON.parse(localStorage.getItem(s)||"null")??a}catch{return a}}function N(s,a){try{localStorage.setItem(s,JSON.stringify(a))}catch{}}const ie=[{category:"Programming",type:"single",joke:"Why do programmers prefer dark mode? Because light attracts bugs."},{category:"Pun",type:"twopart",setup:"I would tell you a UDP joke",delivery:"…but you might not get it."},{category:"Misc",type:"single",joke:"Parallel lines have so much in common. It’s a shame they’ll never meet."},{category:"Programming",type:"twopart",setup:"How many programmers does it take to change a light bulb?",delivery:"None. That’s a hardware problem."},{category:"Spooky",type:"single",joke:"Skeletons are so chill—nothing gets under their skin."},{category:"Christmas",type:"twopart",setup:"What do you call an elf who sings?",delivery:"A wrapper."}];function W(s){const a=s.id??crypto.randomUUID(),r=s.category||"General",i=s.type||(s.setup&&s.delivery?"twopart":"single"),p=s.blacklistFlags||{},g=new Date().toISOString();return i==="twopart"?{id:a,category:r,type:i,setup:$(s.setup||""),delivery:$(s.delivery||""),text:`${$(s.setup||"")} — ${$(s.delivery||"")}`,blacklistFlags:p,time:g}:{id:a,category:r,type:"single",joke:$(s.joke||s.delivery||s.setup||""),text:$(s.joke||s.delivery||s.setup||""),blacklistFlags:p,time:g}}function ke({categories:s,safeMode:a,allowDark:r,onlySingle:i,onlyTwoPart:p}){const g=s.length?s:["Programming","Misc","Pun","Spooky","Christmas"],u=r?g:g.filter(v=>v!=="Dark"),M=u.length?u.join(","):"Any";let y="";i&&!p&&(y="&type=single"),p&&!i&&(y="&type=twopart");const T=a?"&safe-mode":"&blacklistFlags=nsfw,religious,racist,sexist,explicit";return`https://v2.jokeapi.dev/joke/${encodeURIComponent(M)}?idRange=0-300&amount=1${y}${T}`}async function je(){const s=await fetch("https://official-joke-api.appspot.com/random_joke",{cache:"no-store"});if(!s.ok)throw new Error("Official Joke API failed");const a=await s.json();return W({category:"Misc",type:"twopart",setup:a.setup,delivery:a.punchline})}async function ve(s){try{const a=ke(s),r=await fetch(a,{cache:"no-store"});if(r.ok){const i=await r.json();if(i&&i.error===!1)return W(i)}}catch{}try{return await je()}catch{}return W(ie[Math.floor(Math.random()*ie.length)])}const $e=()=>{const a=B(ae,{safeMode:!0,allowDark:!1,onlySingle:!1,onlyTwoPart:!1,categories:["Programming","Misc","Pun"]}),[r,i]=d.useState(a.safeMode),[p,g]=d.useState(a.allowDark),[u,M]=d.useState(a.onlySingle),[y,T]=d.useState(a.onlyTwoPart),[v,le]=d.useState(a.categories),[z,ce]=d.useState(1),[A,Q]=d.useState(!1),[q,de]=d.useState([]),[D,V]=d.useState(()=>B(U,[])),[C,X]=d.useState(()=>B(Y,[])),[E,pe]=d.useState(""),Z=d.useRef(null),[R,J]=d.useState(!1),[P,F]=d.useState(null),[ee,I]=d.useState(null),xe=()=>{F("clear-history"),I(null),J(!0)},he=t=>{F("remove-fav"),I(t),J(!0)},O=()=>{J(!1),F(null),I(null)},ge=()=>{P==="clear-history"?(V([]),N(U,[])):P==="remove-fav"&&ee&&X(t=>{const o=t.filter(c=>c.text!==ee.text);return N(Y,o),o}),O()};d.useEffect(()=>{N(ae,{safeMode:r,allowDark:p,onlySingle:u,onlyTwoPart:y,categories:v})},[r,p,u,y,v]),d.useEffect(()=>{const t=o=>{var c;if(R){o.key==="Escape"&&(o.preventDefault(),O());return}o.key.toLowerCase()==="g"&&!o.metaKey&&!o.ctrlKey&&!o.altKey&&(o.preventDefault(),te()),o.key==="/"&&!o.metaKey&&!o.ctrlKey&&!o.altKey&&(o.preventDefault(),(c=Z.current)==null||c.focus())};return window.addEventListener("keydown",t),()=>window.removeEventListener("keydown",t)},[R,r,p,u,y,v,z]);const te=async()=>{if(!A){Q(!0);try{const t={safeMode:r,allowDark:p,onlySingle:u,onlyTwoPart:y,categories:v},o=[];for(let c=0;c<Math.max(1,Math.min(10,Number(z)||1));c++){const x=await ve(t);o.push(x)}de(o),V(c=>{const x=new Set(c.map(G=>G.text)),ne=[...o.filter(G=>!x.has(G.text)),...c].slice(0,ye);return N(U,ne),ne})}finally{Q(!1)}}},se=t=>{X(o=>{const c=o.find(f=>f.text===t.text);let x;return c?x=o.filter(f=>f.text!==t.text):x=[{...t},...o].slice(0,200),N(Y,x),x})},K=async t=>{try{await navigator.clipboard.writeText(t)}catch{}},ue=async t=>{try{navigator.share?await navigator.share({text:t}):await navigator.clipboard.writeText(t)}catch{}},me=t=>{const o=window.open("","_blank","noopener,noreferrer,width=680,height=840");o&&(o.document.write(`
      <html><head><title>Print Joke</title>
      <style>
        body { font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; padding: 24px; }
        .j { font-size: 18px; line-height: 1.5; white-space: pre-wrap; }
        .m { color: #666; margin-top: 6px; font-size: 13px; }
      </style>
      </head><body>
        <div class="j">${t.replace(/</g,"&lt;").replace(/>/g,"&gt;")}</div>
        <div class="m">${re(new Date)}</div>
        <script>window.onload = () => setTimeout(() => window.print(), 300)<\/script>
      </body></html>
    `),o.document.close())},oe=d.useMemo(()=>{const t=E.trim().toLowerCase();return t?D.filter(o=>o.text.toLowerCase().includes(t)||o.category.toLowerCase().includes(t)):D},[E,D]),L=t=>C.some(o=>o.text===t.text);return e.jsxs(n.Wrapper,{children:[e.jsxs(n.Header,{children:[e.jsxs("div",{children:[e.jsx("h1",{children:"Jokes Generator"}),e.jsx("p",{children:"Clean, safe-mode by default. Save favorites, search history, copy, share, and print—fully client-side."})]}),e.jsxs(n.Badges,{children:[e.jsx("span",{className:"badge",children:"Safe Mode"}),e.jsx("span",{className:"badge",children:"Local Cache"}),e.jsx("span",{className:"badge",children:"Keyboard: g /"})]})]}),e.jsxs(n.Layout,{children:[e.jsxs(n.Card,{children:[e.jsxs(n.Section,{children:[e.jsx(n.SectionTitle,{children:"Controls"}),e.jsxs(n.Grid,{cols:"3",children:[e.jsxs(n.Field,{children:[e.jsx("label",{children:"Quantity"}),e.jsx("select",{value:z,onChange:t=>ce(t.target.value),children:[1,2,3,4,5,6,7,8,9,10].map(t=>e.jsx("option",{value:t,children:t},t))})]}),e.jsxs(n.Field,{children:[e.jsx("label",{children:"Mode"}),e.jsxs("div",{className:"inline",children:[e.jsxs("label",{className:"checkbox",children:[e.jsx("input",{type:"checkbox",checked:r,onChange:t=>i(t.target.checked)}),e.jsx("span",{children:"Safe Mode"})]}),e.jsxs("label",{className:"checkbox",children:[e.jsx("input",{type:"checkbox",checked:p,onChange:t=>g(t.target.checked)}),e.jsx("span",{children:"Allow “Dark”"})]})]})]}),e.jsxs(n.Field,{children:[e.jsx("label",{children:"Type Filter"}),e.jsxs("div",{className:"inline",children:[e.jsxs("label",{className:"checkbox",children:[e.jsx("input",{type:"checkbox",checked:u,onChange:t=>{M(t.target.checked),t.target.checked&&T(!1)}}),e.jsx("span",{children:"Single"})]}),e.jsxs("label",{className:"checkbox",children:[e.jsx("input",{type:"checkbox",checked:y,onChange:t=>{T(t.target.checked),t.target.checked&&M(!1)}}),e.jsx("span",{children:"Two-part"})]})]})]})]}),e.jsxs(n.Field,{className:"span2",children:[e.jsx("label",{children:"Categories"}),e.jsx(n.Chips,{children:fe.map(t=>{const o=v.includes(t.key),c=t.key==="Dark"&&r&&!p;return e.jsxs("label",{className:`chip ${o?"active":""} ${c?"disabled":""}`,children:[e.jsx("input",{type:"checkbox",disabled:c,checked:o,onChange:()=>{le(x=>{const f=new Set(x);return f.has(t.key)?f.delete(t.key):f.add(t.key),Array.from(f)})}}),e.jsx("span",{children:t.label})]},t.key)})})]}),e.jsx(n.Actions,{children:e.jsx("button",{type:"button",onClick:te,disabled:A,children:A?"Generating…":"Generate (g)"})})]}),e.jsxs(n.Section,{children:[e.jsx(n.SectionTitle,{children:"Current"}),q.length===0&&e.jsx(n.Help,{children:"No jokes yet. Press Generate."}),e.jsx(n.Jokes,{children:q.map(t=>e.jsxs(n.JokeCard,{children:[e.jsxs("div",{className:"meta",children:[e.jsx("span",{className:`pill ${t.category.toLowerCase()}`,children:t.category}),e.jsx("span",{className:"time",children:re(t.time)})]}),t.type==="twopart"?e.jsxs("div",{className:"content",children:[e.jsx("div",{className:"setup",children:t.setup}),e.jsxs("div",{className:"delivery",children:["— ",t.delivery]})]}):e.jsx("div",{className:"content single",children:t.text}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{type:"button",className:"ghost",onClick:()=>K(t.text),children:"Copy"}),e.jsx("button",{type:"button",className:"ghost",onClick:()=>ue(t.text),children:"Share"}),e.jsx("button",{type:"button",className:"ghost",onClick:()=>me(t.text),children:"Print"}),e.jsx("button",{type:"button",onClick:()=>se(t),"aria-pressed":L(t),children:L(t)?"★ Saved":"☆ Save"})]})]},t.id))})]})]}),e.jsxs(n.Side,{children:[e.jsxs(n.Card,{children:[e.jsx(n.SectionTitle,{children:"History"}),e.jsx(n.Field,{children:e.jsx("input",{ref:Z,type:"text",placeholder:"Search history… (/)",value:E,onChange:t=>pe(t.target.value)})}),e.jsxs(n.List,{children:[oe.length===0&&e.jsx("li",{className:"muted",children:"No matches."}),oe.slice(0,30).map(t=>e.jsxs("li",{children:[e.jsx("span",{className:"cat",children:t.category}),e.jsx("span",{className:"txt",title:t.text,children:t.text}),e.jsxs("div",{className:"row-actions",children:[e.jsx("button",{className:"sm ghost",onClick:()=>K(t.text),children:"Copy"}),e.jsx("button",{className:"sm ghost",onClick:()=>se(t),"aria-pressed":L(t),children:L(t)?"★":"☆"})]})]},`${t.id}-${t.time}`))]}),e.jsx(n.Actions,{children:e.jsx("button",{type:"button",className:"ghost",onClick:xe,children:"Clear History"})})]}),e.jsxs(n.Card,{children:[e.jsxs(n.SectionTitle,{children:["Favorites (",C.length,")"]}),e.jsxs(n.List,{children:[C.length===0&&e.jsx("li",{className:"muted",children:"None saved yet."}),C.slice(0,30).map(t=>e.jsxs("li",{children:[e.jsx("span",{className:"cat",children:t.category}),e.jsx("span",{className:"txt",title:t.text,children:t.text}),e.jsxs("div",{className:"row-actions",children:[e.jsx("button",{className:"sm ghost",onClick:()=>K(t.text),children:"Copy"}),e.jsx("button",{className:"sm danger",onClick:()=>he(t),children:"Remove"})]})]},`${t.id}-f`))]}),e.jsx(n.Actions,{children:e.jsx("button",{type:"button",className:"ghost",onClick:()=>{const t=JSON.stringify(C,null,2),o=new Blob([t],{type:"application/json"}),c=URL.createObjectURL(o),x=document.createElement("a");x.href=c,x.download="jokes-favorites.json",x.click(),URL.revokeObjectURL(c)},children:"Export JSON"})})]})]})]}),R&&e.jsx(n.ModalOverlay,{onClick:O,"aria-modal":"true",role:"dialog",children:e.jsxs(n.ModalCard,{onClick:t=>t.stopPropagation(),tabIndex:-1,children:[e.jsx("h3",{children:"Confirm"}),e.jsxs("p",{className:"msg",children:[P==="clear-history"&&"Clear all jokes from history? This cannot be undone.",P==="remove-fav"&&"Remove this joke from favorites?"]}),e.jsxs(n.ModalActions,{children:[e.jsx("button",{type:"button",className:"ghost",onClick:O,children:"Cancel"}),e.jsx("button",{type:"button",className:"danger",onClick:ge,children:"Yes, Confirm"})]})]})})]})};export{$e as default};
