import{d as s,r as m,j as e}from"./index-BexlHE4a.js";const p="var(--bg)",u="var(--card)",b="var(--text)",v="var(--muted)",l="var(--border)",d="var(--radius)",x="var(--shadow)",y="var(--accent)",D="var(--danger, #e5484d)",t={Wrapper:s.div`
        min-height: 100%;
        max-width: 1440px;
        margin: 0 auto;
        padding: 16px;
        display: grid;
        gap: 16px;
        background: ${p};
        color: ${b};
    `,Header:s.header`
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
            color: ${v};
            font-size: 14px;
        }
    `,ActionsRow:s.div`
        display: flex;
        gap: 8px;
        button {
            appearance: none;
            cursor: pointer;
            font: inherit;
            border: 1px solid ${l};
            background: ${u};
            color: ${b};
            padding: 8px 12px;
            border-radius: ${d};
            box-shadow: ${x};
            &:hover {
                border-color: ${y};
            }
            &.ghost {
                background: ${p};
            }
            &:disabled {
                opacity: 0.55;
                cursor: not-allowed;
            }
        }
    `,Controls:s.div`
        background: ${u};
        border: 1px solid ${l};
        border-radius: ${d};
        box-shadow: ${x};
        padding: 12px;
        display: grid;
        gap: 12px;

        .row {
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .mini {
            font-size: 12px;
            color: ${v};
        }
        input[type="color"] {
            width: 36px;
            height: 28px;
            padding: 0;
            border: 1px solid ${l};
            border-radius: ${d};
            background: ${p};
        }
        input[type="range"] {
            width: 220px;
        }
        .text {
            width: 120px;
            border: 1px solid ${l};
            background: ${p};
            color: ${b};
            border-radius: calc(${d} - 2px);
            padding: 8px 10px;
            font: inherit;
            outline: none;
        }
    `,ControlGroup:s.div`
        display: grid;
        gap: 8px;

        .label {
            font-size: 13px;
            color: ${v};
        }
        .chips {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }

        .chip {
            border: 1px solid ${l};
            background: ${p};
            color: ${b};
            border-radius: 999px;
            padding: 6px 10px;
            font-size: 12px;
            cursor: pointer;
            box-shadow: ${x};
            transition: border-color 0.15s ease, background 0.15s ease,
                transform 0.02s ease-in-out;
            white-space: nowrap;
        }
        .chip:hover {
            border-color: ${y};
        }
        .chip:active {
            transform: translateY(1px);
        }
        .chip.active {
            background: ${u};
            border-color: ${y};
        }
        .hint {
            font-size: 12px;
            color: ${v};
        }
    `,PreviewCard:s.div`
        background: ${u};
        border: 1px solid ${l};
        border-radius: ${d};
        box-shadow: ${x};
        padding: 12px;
        display: grid;
        gap: 12px;

        .imgWrap {
            width: 260px;
            height: 260px;
            display: grid;
            place-items: center;
            border: 1px solid ${l};
            border-radius: ${d};
            background: ${p};
            overflow: hidden;
        }
        .imgWrap img {
            width: 90%;
            height: 90%;
            object-fit: contain;
            display: block;
        }

        .row {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .row a,
        .row button {
            appearance: none;
            cursor: pointer;
            font: inherit;
            border: 1px solid ${l};
            background: ${u};
            color: ${b};
            padding: 8px 12px;
            border-radius: ${d};
            box-shadow: ${x};
            transition: border-color 0.15s ease, transform 0.02s ease-in-out;
            text-decoration: none;
        }
        .row a:hover,
        .row button:hover {
            border-color: ${y};
        }
        .row a:active,
        .row button:active {
            transform: translateY(1px);
        }

        .meta {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
            font-size: 12px;
            color: ${v};
        }
        .meta code {
            font-size: 12px;
        }
    `,Layout:s.div`
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 16px;

        @media (max-width: 1024px) {
            grid-template-columns: 1fr;
        }
    `,Column:s.div``,SectionTitle:s.h2`
        margin: 0 0 10px 0;
        font-size: 15px;
        font-weight: 600;
    `,Grid:s.div`
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 10px;

        @media (max-width: 900px) {
            grid-template-columns: repeat(3, 1fr);
        }
        @media (max-width: 640px) {
            grid-template-columns: repeat(2, 1fr);
        }
    `,Tile:s.button`
        border: 1px solid ${l};
        background: ${p};
        border-radius: ${d};
        overflow: hidden;
        padding: 0;
        cursor: pointer;
        box-shadow: ${x};

        img {
            width: 100%;
            height: 100%;
            display: block;
            aspect-ratio: 1 / 1;
            object-fit: contain;
        }
        &:hover {
            border-color: ${y};
        }
    `,Side:s.aside`
        display: grid;
        gap: 16px;
        align-content: start;
    `,SideCard:s.div`
        background: ${u};
        border: 1px solid ${l};
        border-radius: ${d};
        box-shadow: ${x};
        padding: 12px;
        display: grid;
        gap: 10px;
        /* border: 1px solid #f00; */
        align-items: flex-start;

        h3 {
            margin: 0;
            font-size: 15px;
        }

        .favlist {
            /* border: 1px solid #f00; */
            list-style: none;
            margin: 0;
            padding: 0;
            display: grid;
            gap: 8px;
        }
        .favlist li {
            display: grid;
            grid-template-columns: 56px 1fr auto;
            gap: 8px;
            align-items: flex-start;
        }
        .thumb {
            border: 1px solid ${l};
            background: ${p};
            border-radius: ${d};
            width: 56px;
            height: 56px;
            padding: 2px;
            display: grid;
            place-items: center;
            cursor: pointer;
        }
        .thumb img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            display: block;
        }
        .info {
            display: grid;
            gap: 2px;
        }
        .info .line {
            font-size: 13px;
        }
        .info .seed {
            font-size: 11px;
            color: ${v};
        }
        .remove {
            appearance: none;
            cursor: pointer;
            font: inherit;
            border: 1px solid ${l};
            background: ${u};
            color: ${b};
            padding: 6px 10px;
            border-radius: ${d};
            transition: border-color 0.15s ease;
        }
        .remove:hover {
            border-color: ${D};
        }

        .row {
            display: flex;
            gap: 8px;
        }
        .row .ghost {
            appearance: none;
            cursor: pointer;
            font: inherit;
            border: 1px solid ${l};
            background: ${p};
            color: ${b};
            padding: 8px 12px;
            border-radius: ${d};
            box-shadow: ${x};
            transition: border-color 0.15s ease;
            height: 40px;
        }
        .row .ghost:hover {
            border-color: ${y};
        }
    `,Empty:s.div`
        color: ${v};
        font-size: ${a=>a.small?"12px":"14px"};
        padding: ${a=>a.small?"4px 0":"8px 0"};
    `,ModalBackdrop:s.div`
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
        display: grid;
        place-items: center;
        z-index: 999;
        padding: 16px;
    `,Modal:s.div`
        width: min(420px, 100%);
        background: ${u};
        border: 1px solid ${l};
        border-radius: ${d};
        box-shadow: ${x};
        padding: 16px;
        color: ${b};
        display: grid;
        gap: 12px;

        h4 {
            margin: 0;
            font-size: 16px;
        }
        p.muted {
            margin: 0;
            color: ${v};
            font-size: 14px;
        }

        .actions {
            display: flex;
            gap: 8px;
            justify-content: flex-end;
        }
        .actions button {
            appearance: none;
            cursor: pointer;
            font: inherit;
            border: 1px solid ${l};
            background: ${u};
            color: ${b};
            padding: 8px 12px;
            border-radius: ${d};
            box-shadow: ${x};
            transition: border-color 0.15s ease, transform 0.02s ease-in-out;
        }
        .actions button:hover {
            border-color: ${y};
        }
        .actions .ghost {
            background: ${p};
        }
        .actions button:active {
            transform: translateY(1px);
        }
    `},j=[{key:"adventurer",label:"Adventurer"},{key:"bottts",label:"Bottts"},{key:"pixel-art",label:"Pixel Art"},{key:"identicon",label:"Identicon"},{key:"shapes",label:"Shapes"},{key:"initials",label:"Initials"}],W="avatarGen_recents_v1",B="avatarGen_favs_v1",A=()=>Math.random().toString(36).slice(2)+"-"+Math.floor(Math.random()*1e6),O=(a,h,i)=>{const n=new URLSearchParams;return n.set("seed",h||"guest"),n.set("size",String(i.size||240)),i.bgKind==="solid"?(n.set("backgroundType","solid"),n.set("backgroundColor",i.bgColor.replace("#",""))):i.bgKind==="gradient"&&n.set("backgroundType","gradientLinear"),i.radius&&n.set("radius",String(i.radius)),a==="initials"&&i.initials&&n.set("seed",i.initials),`https://api.dicebear.com/7.x/${a}/svg?${n.toString()}`};function K(a,h=[]){const[i,n]=m.useState(()=>{try{const c=JSON.parse(localStorage.getItem(a)||"null");return Array.isArray(c)?c:h}catch{return h}});return m.useEffect(()=>{try{localStorage.setItem(a,JSON.stringify(i))}catch{}},[a,i]),[i,n]}const H=()=>{var M;const[a,h]=m.useState(j[0].key),[i,n]=m.useState(A()),[c,f]=m.useState({size:240,radius:16,bgKind:"gradient",bgColor:"#1f2937",initials:"AR"}),[N,S]=K(W,[]),[C,z]=K(B,[]),[w,k]=m.useState(null),$=m.useMemo(()=>O(a,i,c),[a,i,c]),E=m.useCallback(r=>{S(o=>{const g=o.filter(R=>R.url!==r.url);return[r,...g].slice(0,24)})},[S]);m.useEffect(()=>{var o;const r=((o=j.find(g=>g.key===a))==null?void 0:o.label)||a;E({url:$,style:a,label:r,seed:i,at:Date.now()})},[$]);const T=()=>n(A()),L=()=>{const r=j[Math.floor(Math.random()*j.length)].key,o=["none","solid","gradient"],g=o[Math.floor(Math.random()*o.length)],R=[0,8,12,16,24,32][Math.floor(Math.random()*6)],U=["#0ea5e9","#22c55e","#f59e0b","#a855f7","#ef4444","#1f2937"][Math.floor(Math.random()*6)];h(r),n(A()),f(_=>({..._,radius:R,bgKind:g,bgColor:U}))},F=()=>{z(r=>r.some(o=>o.url===$)?r:[{url:$,style:a,seed:i,at:Date.now()},...r].slice(0,60))},P=r=>{k({title:"Remove favourite?",message:"This avatar will be removed from your favourites list.",onConfirm:()=>z(o=>o.filter(g=>g.url!==r))})},G=()=>{C.length&&k({title:"Clear all favourites?",message:"This will remove all saved avatars.",onConfirm:()=>z([])})},Y=()=>{N.length&&k({title:"Clear recent list?",message:"This will clear the recent avatars list.",onConfirm:()=>S([])})},I=async()=>{try{await navigator.clipboard.writeText($)}catch{}};return e.jsxs(t.Wrapper,{children:[e.jsxs(t.Header,{children:[e.jsxs("div",{children:[e.jsx("h1",{children:"Avatar Generator"}),e.jsxs("p",{children:["Pick a category and hit ",e.jsx("strong",{children:"Next"})," to roll a new avatar. No API keys. Download or favourite the ones you like."]})]}),e.jsxs(t.ActionsRow,{children:[e.jsx("button",{className:"ghost",onClick:Y,disabled:!N.length,children:"Clear Recents"}),e.jsx("button",{className:"ghost",onClick:G,disabled:!C.length,children:"Clear Favourites"})]})]}),e.jsxs(t.Controls,{children:[e.jsxs(t.ControlGroup,{children:[e.jsx("div",{className:"label",children:"Category"}),e.jsx("div",{className:"chips",children:j.map(r=>e.jsx("button",{className:`chip ${a===r.key?"active":""}`,onClick:()=>h(r.key),type:"button",title:r.label,children:r.label},r.key))})]}),e.jsxs(t.ControlGroup,{children:[e.jsx("div",{className:"label",children:"Background"}),e.jsxs("div",{className:"chips",children:[e.jsx("button",{className:`chip ${c.bgKind==="none"?"active":""}`,onClick:()=>f(r=>({...r,bgKind:"none"})),type:"button",children:"None"}),e.jsx("button",{className:`chip ${c.bgKind==="solid"?"active":""}`,onClick:()=>f(r=>({...r,bgKind:"solid"})),type:"button",children:"Solid"}),e.jsx("button",{className:`chip ${c.bgKind==="gradient"?"active":""}`,onClick:()=>f(r=>({...r,bgKind:"gradient"})),type:"button",children:"Gradient"})]}),c.bgKind==="solid"&&e.jsxs("div",{className:"row",children:[e.jsx("label",{className:"mini",children:"Color"}),e.jsx("input",{type:"color",value:c.bgColor,onChange:r=>f(o=>({...o,bgColor:r.target.value}))})]})]}),e.jsxs(t.ControlGroup,{children:[e.jsx("div",{className:"label",children:"Corners"}),e.jsx("input",{type:"range",min:"0",max:"32",step:"4",value:c.radius,onChange:r=>f(o=>({...o,radius:Number(r.target.value)}))}),e.jsxs("div",{className:"hint",children:[c.radius,"px radius"]})]}),a==="initials"&&e.jsxs(t.ControlGroup,{children:[e.jsx("div",{className:"label",children:"Initials"}),e.jsx("input",{className:"text",type:"text",maxLength:3,value:c.initials,onChange:r=>f(o=>({...o,initials:r.target.value.toUpperCase()})),placeholder:"e.g., AR"})]})]}),e.jsxs(t.PreviewCard,{children:[e.jsx("div",{className:"imgWrap",children:e.jsx("img",{src:$,alt:"Generated avatar"})}),e.jsxs("div",{className:"row",children:[e.jsx("button",{onClick:T,title:"Generate next avatar",children:"Next"}),e.jsx("button",{className:"ghost",onClick:L,title:"Randomize all settings",children:"Randomize All"}),e.jsx("button",{className:"ghost",onClick:F,title:"Save to favourites",children:"Add to Favourites"}),e.jsx("a",{className:"ghost",href:$,download:`avatar-${a}-${i}.svg`,title:"Download SVG",children:"Download SVG"}),e.jsx("button",{className:"ghost",onClick:I,title:"Copy URL",children:"Copy URL"})]}),e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:["Style: ",e.jsx("strong",{children:((M=j.find(r=>r.key===a))==null?void 0:M.label)||a})]}),e.jsxs("span",{children:["Seed: ",e.jsx("code",{children:i})]})]})]}),e.jsxs(t.Layout,{children:[e.jsxs(t.Column,{children:[e.jsx(t.SectionTitle,{children:"Recents"}),N.length?e.jsx(t.Grid,{children:N.map(r=>e.jsx(t.Tile,{onClick:()=>{n(r.seed),h(r.style)},children:e.jsx("img",{src:r.url,alt:"recent avatar"})},r.url))}):e.jsx(t.Empty,{children:"Generate some avatars to see them here."})]}),e.jsx(t.Side,{children:e.jsxs(t.SideCard,{children:[e.jsx("h3",{children:"Favourites"}),C.length?e.jsx("ul",{className:"favlist",children:C.map(r=>{var o;return e.jsxs("li",{children:[e.jsx("button",{className:"thumb",onClick:()=>{n(r.seed),h(r.style)},children:e.jsx("img",{src:r.url,alt:"favourite avatar"})}),e.jsxs("div",{className:"info",children:[e.jsx("div",{className:"line",children:((o=j.find(g=>g.key===r.style))==null?void 0:o.label)||r.style}),e.jsx("div",{className:"seed",children:e.jsx("code",{children:r.seed})})]}),e.jsx("button",{className:"remove",onClick:()=>P(r.url),title:"Remove",children:"Remove"})]},r.url)})}):e.jsx(t.Empty,{small:!0,children:"No favourites yet."}),e.jsx("div",{className:"row",children:e.jsx("button",{className:"ghost",disabled:!C.length,onClick:G,children:"Clear Favourites"})})]})})]}),w&&e.jsx(t.ModalBackdrop,{onClick:()=>k(null),role:"dialog","aria-modal":"true",children:e.jsxs(t.Modal,{onClick:r=>r.stopPropagation(),children:[e.jsx("h4",{children:w.title||"Confirm"}),e.jsx("p",{className:"muted",children:w.message||"Are you sure?"}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{className:"ghost",onClick:()=>k(null),children:"Cancel"}),e.jsx("button",{onClick:()=>{var r;(r=w.onConfirm)==null||r.call(w),k(null)},children:"Yes, proceed"})]})]})})]})};export{H as default};
