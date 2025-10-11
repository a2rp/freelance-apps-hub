import{d as p,r,j as e}from"./index-BexlHE4a.js";const v="var(--bg)",S="var(--card)",g="var(--text)",J="var(--muted)",m="var(--border)",f="var(--radius)",H="var(--shadow)",N="var(--accent)",C="var(--danger, #e5484d)",o={Wrapper:p.div`
        color: ${g};
        background: ${v};
        padding: 16px;
        min-height: 100%;
        /* requested app wrapper constraint */
        max-width: 1440px;
        margin: 0 auto;
        display: grid;
        gap: 16px;
    `,Header:p.div`
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
            color: ${J};
            font-size: 14px;
        }
    `,ActionsRow:p.div`
        display: flex;
        gap: 8px;
        button {
            appearance: none;
            border: 1px solid ${m};
            background: ${S};
            color: ${g};
            padding: 10px 12px;
            border-radius: ${f};
            cursor: pointer;
            box-shadow: ${H};
            &:hover {
                border-color: ${N};
            }
        }
        .ghost {
            background: ${v};
        }
    `,Layout:p.div`
        display: grid;
        grid-template-columns: 1.4fr 2fr;
        gap: 16px;

        @media (max-width: 1100px) {
            grid-template-columns: 1fr;
        }
    `,Card:p.div`
        background: ${S};
        border: 1px solid ${m};
        border-radius: ${f};
        box-shadow: ${H};
        padding: 16px;
    `,Section:p.section`
        & + & {
            margin-top: 16px;
        }

        /* Blacklist inline form */
        .inlineForm {
            display: flex;
            align-items: stretch;
            gap: 8px;
            max-width: 420px;
        }

        .inlineForm input[type="text"] {
            flex: 1;
            border: 1px solid ${m};
            background: ${v};
            color: ${g};
            border-radius: ${f};
            padding: 10px 12px;
            font: inherit;
            outline: none;
            transition: border-color 0.15s ease, box-shadow 0.15s ease;
        }
        .inlineForm input[type="text"]:focus {
            border-color: ${N};
            box-shadow: 0 0 0 2px rgba(0, 0, 0, 0); /* subtle focus ring hook; theme-safe */
        }

        .inlineForm button {
            border: 1px solid ${m};
            background: ${S};
            color: ${g};
            padding: 10px 14px;
            border-radius: ${f};
            font: inherit;
            cursor: pointer;
            white-space: nowrap;
            min-width: 84px;
            transition: border-color 0.15s ease, transform 0.02s ease-in-out;
        }
        .inlineForm button:hover {
            border-color: ${N};
        }
        .inlineForm button:active {
            transform: translateY(1px);
        }
    `,SectionTitle:p.h2`
        margin: 0 0 10px 0;
        font-size: 15px;
        font-weight: 600;

        &.withActions {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 8px;

            .right {
                display: flex;
                gap: 8px;
                align-items: center;
            }
            input[type="search"] {
                border: 1px solid ${m};
                background: ${v};
                color: ${g};
                border-radius: ${f};
                padding: 8px 10px;
                font: inherit;
                width: 220px;
            }
            button {
                appearance: none;
                border: 1px solid ${m};
                background: ${S};
                color: ${g};
                padding: 8px 10px;
                border-radius: ${f};
                cursor: pointer;
                &:hover {
                    border-color: ${N};
                }
            }
            .danger {
                border-color: ${C};
                color: ${C};
            }
        }
    `,Grid:p.div`
        display: grid;
        gap: 12px;
        grid-template-columns: 1fr 1fr;

        @media (max-width: 720px) {
            grid-template-columns: 1fr;
        }
    `,Field:p.div`
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
            color: ${g};
        }

        input[type="text"],
        input[type="number"] {
            border: 1px solid ${m};
            background: ${v};
            color: ${g};
            border-radius: ${f};
            padding: 10px 12px;
            font: inherit;
            outline: none;
            transition: border-color 0.15s ease;
            &:focus {
                border-color: ${N};
            }
        }

        .checkbox {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-size: 14px;
        }
    `,Chips:p.div`
        display: flex;
        flex-wrap: wrap;
        gap: 8px;

        .chip {
            border: 1px solid ${m};
            background: ${v};
            color: ${g};
            border-radius: 999px;
            padding: 6px 10px;
            font-size: 13px;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            cursor: pointer;
            user-select: none;
            transition: border-color 0.15s ease, background 0.15s ease;
        }
        .chip.active {
            background: ${S};
            border-color: ${N};
        }
        .chip input {
            display: none;
        }

        .danger {
            border-color: ${C};
            color: ${C};
            background: ${v};
        }

        &.pad-top {
            margin-top: 8px;
        }
    `,Help:p.div`
        font-size: 12px;
        color: ${J};
    `,Stack:p.div`
        display: grid;
        gap: 16px;
    `,Empty:p.div`
        color: ${J};
        padding: 14px 0;
    `,Table:p.div`
        border: 1px solid ${m};
        border-radius: ${f};
        overflow: hidden;

        .thead,
        .tr {
            display: grid;
            grid-template-columns: 1.2fr 0.5fr 0.4fr 0.4fr 1.6fr;
            border-bottom: 1px solid ${m};
        }
        .thead {
            background: ${v};
            font-weight: 600;
        }
        .th,
        .td {
            padding: 10px 12px;
            display: flex;
            align-items: center;
            gap: 8px;
            min-height: 40px;
        }
        .is-sm {
            justify-content: flex-start;
        }

        .td.is-actions,
        .th.is-actions {
            justify-content: flex-end;
            gap: 8px;
        }

        .tbody .tr:last-child {
            border-bottom: none;
        }

        .mono {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }

        button,
        a {
            appearance: none;
            border: 1px solid ${m};
            background: ${S};
            color: ${g};
            padding: 8px 10px;
            border-radius: ${f};
            cursor: pointer;
            text-decoration: none;
            font: inherit;
            transition: border-color 0.15s ease, transform 0.02s ease-in-out;
            &:hover {
                border-color: ${N};
            }
            &:active {
                transform: translateY(1px);
            }
        }
        .ghost {
            background: ${v};
        }
        .danger {
            border-color: ${C};
            color: ${C};
        }
        .split {
            display: inline-flex;
            gap: 6px;
        }
    `,Modal:p.div`
        position: fixed;
        inset: 0;
        display: grid;
        place-items: center;
        z-index: 1000;

        .backdrop {
            position: absolute;
            inset: 0;
            background: rgba(0, 0, 0, 0.4);
        }

        .sheet {
            position: relative;
            background: ${S};
            color: ${g};
            border: 1px solid ${m};
            border-radius: ${f};
            box-shadow: ${H};
            padding: 16px;
            width: min(480px, 92vw);
            z-index: 1;

            h3 {
                margin: 0 0 8px 0;
                font-size: 16px;
            }
            p {
                margin: 0 0 16px 0;
                color: ${J};
            }

            .row {
                display: flex;
                gap: 8px;
                justify-content: flex-end;

                button {
                    appearance: none;
                    border: 1px solid ${m};
                    background: ${S};
                    color: ${g};
                    padding: 8px 12px;
                    border-radius: ${f};
                    cursor: pointer;
                    &:hover {
                        border-color: ${N};
                    }
                }
                .danger {
                    border-color: ${C};
                    color: ${C};
                }
                .ghost {
                    background: ${v};
                }
            }
        }
    `},ve=["get","go","try","my","the","real","true","hyper","neo","meta","auto","smart","quick"],ye=["app","hq","hub","lab","labs","base","stack","grid","spark","forge","mint","loop"],se=[".com",".in",".dev",".io",".ai",".co",".app",".net",".org"],A={FAVS:"domainGen_favs_v1",OPTS:"domainGen_opts_v1"};function T(i=""){return String(i).toLowerCase().normalize("NFKD").replace(/[^\w\s-]/g," ").replace(/\s+/g," ").trim()}function $e(i){const l=i.toLowerCase();let j=(l.match(/[aeiou]/g)||[]).length,F=0,u=0;for(const a of l)/[aeiou]/.test(a)?u=0:/[a-z]/.test(a)&&(u++,u>=3&&(F+=1));const R=Math.max(0,l.length-10)*.5;return j*2-F-R}function ke(i,l,{camel:j,hyphen:F,lower:u,withNumbers:R}){const a=R?Math.floor(Math.random()*90+10):null;if(j){const y=`${i}${(b=>b.charAt(0).toUpperCase()+b.slice(1))(l)}`;return a?`${y}${a}`:y}if(F){const c=`${i}-${l}`;return a?`${c}${a}`:c}const D=u?`${i}${l}`.toLowerCase():`${i}${l}`;return a?`${D}${a}`:D}const we=()=>Math.random().toString(36).slice(2,9);function oe(i){const l=encodeURIComponent(i);return[{label:"Namecheap",href:`https://www.namecheap.com/domains/registration/results/?domain=${l}`},{label:"Porkbun",href:`https://porkbun.com/checkout/search?q=${l}`},{label:"Cloudflare",href:`https://dash.cloudflare.com/?to=/:account/registrar/domains/add?domain=${l}`},{label:"DuckDuckGo",href:`https://duckduckgo.com/?q=buy+domain+${l}`}]}const Ne=()=>{var te;const[i,l]=r.useState("logistics, delivery, fleet"),[j,F]=r.useState(ve.join(", ")),[u,R]=r.useState(ye.join(", ")),[a,D]=r.useState(se.reduce((t,s)=>({...t,[s]:!0}),{})),[c,y]=r.useState({camel:!1,hyphen:!1,lower:!0,withNumbers:!1}),[b,z]=r.useState({maxLength:18,perClick:60,avoidDoubleLetters:!0}),[$,U]=r.useState(["test","demo"]),[_,ne]=r.useState(""),[P,K]=r.useState([]),[M,I]=r.useState(()=>{try{return JSON.parse(localStorage.getItem(A.FAVS)||"[]")}catch{return[]}}),[k,Y]=r.useState({open:!1,intent:null,payload:null});r.useEffect(()=>{try{const t=JSON.parse(localStorage.getItem(A.OPTS)||"null");t&&(l(t.keywords??i),F(t.prefixes??j),R(t.suffixes??u),D(t.tlds??a),y(t.style??c),z(t.options??b),U(t.blacklist??$))}catch{}},[]),r.useEffect(()=>{const t={keywords:i,prefixes:j,suffixes:u,tlds:a,style:c,options:b,blacklist:$};try{localStorage.setItem(A.OPTS,JSON.stringify(t))}catch{}},[i,j,u,a,c,b,$]);const re=r.useMemo(()=>Object.keys(a).filter(t=>!!a[t]),[a]),ae=r.useMemo(()=>{const t=T(i).split(" ").join(",").split(",").map(d=>d.trim()).filter(Boolean),s=T(j).split(" ").join(",").split(",").map(d=>d.trim()).filter(Boolean),n=T(u).split(" ").join(",").split(",").map(d=>d.trim()).filter(Boolean);return{kw:t,pre:s,suf:n}},[i,j,u]),W=r.useMemo(()=>new Set($.map(t=>T(t))),[$]);function ie(t,s,n){const d=new Set,L=[];for(const h of[...t.pre,...t.kw])for(const x of[...t.kw,...t.suf])!h||!x||h!==x&&L.push([h,x]);for(const[h,x]of L){const O=T(h),V=T(x);if(!O||!V||W.has(O)||W.has(V))continue;let w=ke(O,V,s);if(n.avoidDoubleLetters&&(w=w.replace(/([a-z])\1+/gi,"$1$1"),w=w.replace(/([a-z])\1-/gi,"$1-")),n.maxLength&&w.length>n.maxLength)continue;const be=$e(w);for(const B of re){const fe=`${w}${B}`,je=be+(B===".com"?2:0)+(B===".in"?1:0);d.add(JSON.stringify({domain:fe,stem:w,tld:B,s:je}))}}const E=Array.from(d).map(h=>JSON.parse(h));return E.sort((h,x)=>x.s-h.s||h.domain.length-x.domain.length),E.slice(0,b.perClick)}const X=()=>{const t=ie(ae,c,b);K(t)};r.useEffect(()=>{X()},[]);const le=t=>D(s=>({...s,[t]:!s[t]})),ce=t=>{t.preventDefault();const s=T(t.target.elements.banned.value);s&&($.includes(s)||U([...$,s]),t.target.reset())},de=t=>{U(s=>s.filter(n=>n!==t))},Q=async t=>{try{await navigator.clipboard.writeText(t)}catch{}},pe=t=>{const s={id:we(),domain:t.domain,createdAt:new Date().toISOString()};I(n=>{const d=[s,...n.filter(L=>L.domain!==t.domain)];try{localStorage.setItem(A.FAVS,JSON.stringify(d))}catch{}return d})},he=t=>{I(s=>{const n=s.filter(d=>d.id!==t);try{localStorage.setItem(A.FAVS,JSON.stringify(n))}catch{}return n})},xe=()=>{I([]);try{localStorage.removeItem(A.FAVS)}catch{}},G=(t,s=null)=>Y({open:!0,intent:t,payload:s}),q=()=>Y({open:!1,intent:null,payload:null}),me=()=>{const{intent:t,payload:s}=k;t==="clearResults"&&K([]),t==="clearFavs"&&xe(),t==="removeFav"&&(s!=null&&s.id)&&he(s.id),q()},Z=r.useRef(null),ue=()=>{const t=new Blob([JSON.stringify(M,null,2)],{type:"application/json"}),s=URL.createObjectURL(t),n=document.createElement("a");n.href=s,n.download="domain-favorites.json",n.click(),URL.revokeObjectURL(s)},ge=async t=>{var n;const s=(n=t.target.files)==null?void 0:n[0];if(s){try{const d=await s.text(),L=JSON.parse(d);if(!Array.isArray(L))return;const E=new Map;[...M,...L].forEach(x=>E.set(x.domain,x));const h=Array.from(E.values()).sort((x,O)=>(O.createdAt||"").localeCompare(x.createdAt||""));I(h),localStorage.setItem(A.FAVS,JSON.stringify(h))}catch{}t.target.value=""}},ee=r.useMemo(()=>{const t=_.trim().toLowerCase();return t?P.filter(s=>s.domain.toLowerCase().includes(t)):P},[P,_]);return e.jsxs(o.Wrapper,{children:[e.jsxs(o.Header,{children:[e.jsxs("div",{children:[e.jsx("h1",{children:"Domain Name Generator"}),e.jsx("p",{children:"Create short, pronounceable domain ideas with prefixes, suffixes, and your keywords."})]}),e.jsxs(o.ActionsRow,{children:[e.jsx("button",{onClick:X,children:"Generate"}),e.jsx("button",{className:"ghost",onClick:()=>G("clearResults"),children:"Clear Results"})]})]}),e.jsxs(o.Layout,{children:[e.jsxs(o.Card,{children:[e.jsxs(o.Section,{children:[e.jsx(o.SectionTitle,{children:"Keywords"}),e.jsxs(o.Field,{className:"span2",children:[e.jsx("label",{htmlFor:"keywords",children:"Comma or space separated"}),e.jsx("input",{id:"keywords",type:"text",value:i,onChange:t=>l(t.target.value),placeholder:"e.g., logistics, delivery, fleet"}),e.jsx(o.Help,{children:"Examples: fintech, invoice, track, cargo"})]})]}),e.jsxs(o.Section,{children:[e.jsx(o.SectionTitle,{children:"Affixes"}),e.jsxs(o.Grid,{children:[e.jsxs(o.Field,{children:[e.jsx("label",{htmlFor:"prefixes",children:"Prefixes"}),e.jsx("input",{id:"prefixes",type:"text",value:j,onChange:t=>F(t.target.value),placeholder:"get, go, try, my, hyper"})]}),e.jsxs(o.Field,{children:[e.jsx("label",{htmlFor:"suffixes",children:"Suffixes"}),e.jsx("input",{id:"suffixes",type:"text",value:u,onChange:t=>R(t.target.value),placeholder:"app, hub, lab, stack"})]})]})]}),e.jsxs(o.Section,{children:[e.jsx(o.SectionTitle,{children:"TLDs"}),e.jsx(o.Chips,{children:se.map(t=>e.jsxs("label",{className:`chip ${a[t]?"active":""}`,children:[e.jsx("input",{type:"checkbox",checked:!!a[t],onChange:()=>le(t)}),e.jsx("span",{children:t})]},t))})]}),e.jsxs(o.Section,{children:[e.jsx(o.SectionTitle,{children:"Style"}),e.jsxs(o.Chips,{children:[e.jsxs("label",{className:`chip ${c.lower?"active":""}`,children:[e.jsx("input",{type:"checkbox",checked:c.lower,onChange:()=>y(t=>({...t,lower:!t.lower}))}),e.jsx("span",{children:"lowercase"})]}),e.jsxs("label",{className:`chip ${c.camel?"active":""}`,children:[e.jsx("input",{type:"checkbox",checked:c.camel,onChange:()=>y(t=>({...t,camel:!t.camel}))}),e.jsx("span",{children:"camelCase"})]}),e.jsxs("label",{className:`chip ${c.hyphen?"active":""}`,children:[e.jsx("input",{type:"checkbox",checked:c.hyphen,onChange:()=>y(t=>({...t,hyphen:!t.hyphen}))}),e.jsx("span",{children:"hyphenated"})]}),e.jsxs("label",{className:`chip ${c.withNumbers?"active":""}`,children:[e.jsx("input",{type:"checkbox",checked:c.withNumbers,onChange:()=>y(t=>({...t,withNumbers:!t.withNumbers}))}),e.jsx("span",{children:"with numbers"})]})]})]}),e.jsxs(o.Section,{children:[e.jsx(o.SectionTitle,{children:"Limits & Filters"}),e.jsxs(o.Grid,{children:[e.jsxs(o.Field,{children:[e.jsx("label",{htmlFor:"maxLength",children:"Max Length"}),e.jsx("input",{id:"maxLength",type:"number",min:6,max:30,value:b.maxLength,onChange:t=>z(s=>({...s,maxLength:Number(t.target.value)}))})]}),e.jsxs(o.Field,{children:[e.jsx("label",{htmlFor:"perClick",children:"Count / Generate"}),e.jsx("input",{id:"perClick",type:"number",min:10,max:200,value:b.perClick,onChange:t=>z(s=>({...s,perClick:Number(t.target.value)}))})]}),e.jsx(o.Field,{children:e.jsxs("label",{className:"checkbox",children:[e.jsx("input",{type:"checkbox",checked:b.avoidDoubleLetters,onChange:()=>z(t=>({...t,avoidDoubleLetters:!t.avoidDoubleLetters}))}),e.jsx("span",{children:"Avoid long double-letter runs"})]})})]})]}),e.jsxs(o.Section,{children:[e.jsx(o.SectionTitle,{children:"Blacklist"}),e.jsxs("form",{onSubmit:ce,className:"inlineForm",children:[e.jsx("input",{name:"banned",type:"text",placeholder:"word to ban"}),e.jsx("button",{type:"submit",children:"Add"})]}),e.jsx(o.Chips,{className:"pad-top",children:$.map(t=>e.jsxs("button",{type:"button",className:"chip danger",onClick:()=>de(t),children:[e.jsx("span",{children:"✕"})," ",t]},t))})]})]}),e.jsxs(o.Stack,{children:[e.jsxs(o.Card,{children:[e.jsxs(o.SectionTitle,{className:"withActions",children:[e.jsx("span",{children:"Results"}),e.jsxs("div",{className:"right",children:[e.jsx("input",{type:"search",placeholder:"Search results…",value:_,onChange:t=>ne(t.target.value)}),e.jsx("button",{className:"ghost",onClick:()=>G("clearResults"),children:"Clear"})]})]}),ee.length===0?e.jsx(o.Empty,{children:"Nothing yet. Tweak options and hit Generate."}):e.jsxs(o.Table,{role:"table",children:[e.jsxs("div",{className:"thead",role:"row",children:[e.jsx("div",{className:"th",children:"Domain"}),e.jsx("div",{className:"th is-sm",children:"TLD"}),e.jsx("div",{className:"th is-sm",children:"Len"}),e.jsx("div",{className:"th is-sm",children:"Score"}),e.jsx("div",{className:"th is-actions",children:"Actions"})]}),e.jsx("div",{className:"tbody",children:ee.map(t=>e.jsxs("div",{className:"tr",role:"row",children:[e.jsx("div",{className:"td mono",children:t.domain}),e.jsx("div",{className:"td is-sm",children:t.tld}),e.jsx("div",{className:"td is-sm",children:t.domain.replace(/^https?:\/\//,"").length}),e.jsx("div",{className:"td is-sm",children:t.s.toFixed(2)}),e.jsxs("div",{className:"td is-actions",children:[e.jsx("button",{onClick:()=>Q(t.domain),title:"Copy",children:"Copy"}),e.jsx("button",{className:"ghost",onClick:()=>pe(t),title:"Add to Favorites",children:"Save"}),e.jsx("div",{className:"split",children:oe(t.domain).map(s=>e.jsx("a",{href:s.href,target:"_blank",rel:"noreferrer",children:s.label},s.label))})]})]},t.domain))})]})]}),e.jsxs(o.Card,{children:[e.jsxs(o.SectionTitle,{className:"withActions",children:[e.jsxs("span",{children:["Favorites (",M.length,")"]}),e.jsxs("div",{className:"right",children:[e.jsx("input",{ref:Z,type:"file",accept:"application/json",onChange:ge,style:{display:"none"}}),e.jsx("button",{className:"ghost",onClick:ue,children:"Export"}),e.jsx("button",{className:"ghost",onClick:()=>{var t;return(t=Z.current)==null?void 0:t.click()},children:"Import"}),e.jsx("button",{className:"danger",onClick:()=>G("clearFavs"),children:"Clear All"})]})]}),M.length===0?e.jsx(o.Empty,{children:"No favorites yet."}):e.jsxs(o.Table,{role:"table",className:"cols3",children:[e.jsxs("div",{className:"thead",role:"row",children:[e.jsx("div",{className:"th",children:"Domain"}),e.jsx("div",{className:"th is-sm",children:"Added"}),e.jsx("div",{className:"th is-actions",children:"Actions"})]}),e.jsx("div",{className:"tbody",children:M.map(t=>e.jsxs("div",{className:"tr",role:"row",children:[e.jsx("div",{className:"td mono",children:t.domain}),e.jsx("div",{className:"td is-sm",children:new Date(t.createdAt).toLocaleString("en-IN",{year:"numeric",month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1})}),e.jsxs("div",{className:"td is-actions",children:[e.jsx("button",{onClick:()=>Q(t.domain),children:"Copy"}),e.jsx("a",{className:"ghost",href:oe(t.domain)[0].href,target:"_blank",rel:"noreferrer",children:"Buy"}),e.jsx("button",{className:"danger",onClick:()=>G("removeFav",t),children:"Remove"})]})]},t.id))})]})]})]})]}),k.open&&e.jsxs(o.Modal,{role:"dialog","aria-modal":"true","aria-label":"Confirm",children:[e.jsxs("div",{className:"sheet",children:[e.jsx("h3",{children:"Confirm"}),e.jsxs("p",{children:[k.intent==="clearResults"&&"Clear all generated results?",k.intent==="clearFavs"&&"Clear all favorites? This cannot be undone.",k.intent==="removeFav"&&`Remove "${(te=k.payload)==null?void 0:te.domain}" from favorites?`]}),e.jsxs("div",{className:"row",children:[e.jsx("button",{onClick:me,className:k.intent==="clearFavs"||k.intent==="removeFav"?"danger":"",children:"Yes"}),e.jsx("button",{className:"ghost",onClick:q,children:"Cancel"})]})]}),e.jsx("div",{className:"backdrop",onClick:q})]})]})};export{Ne as default};
