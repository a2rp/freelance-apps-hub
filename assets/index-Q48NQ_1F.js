import{d as l,r as d,j as e}from"./index-B1q4R8YW.js";const u="var(--bg)",f="var(--card)",g="var(--text)",E="var(--muted)",t="var(--border)",w="var(--radius)",H="var(--shadow)",v="var(--accent)",b="var(--danger, #e5484d)",n={Wrapper:l.div`
        color: ${g};
        background: ${u};
        padding: 16px;
        min-height: 100%;
        max-width: 1440px;
        margin: 0 auto;
        display: grid;
        gap: 16px;
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
            color: ${E};
            font-size: 14px;
        }
    `,Badges:l.div`
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        .badge {
            background: ${f};
            border: 1px solid ${t};
            padding: 6px 10px;
            border-radius: 999px;
            font-size: 12px;
            box-shadow: ${H};
        }
    `,Layout:l.div`
        display: grid;
        grid-template-columns: 1.2fr 1fr;
        gap: 16px;
        @media (max-width: 1120px) {
            grid-template-columns: 1fr;
        }
        .col {
            display: grid;
            gap: 16px;
        }
    `,Card:l.section`
        background: ${f};
        border: 1px solid ${t};
        border-radius: ${w};
        box-shadow: ${H};
        padding: 16px;

        h3 {
            margin: 0 0 12px 0;
            font-size: 16px;
        }
        .muted {
            color: ${E};
        }
    `,SearchRow:l.div`
        display: flex;
        gap: 8px;
        align-items: center;

        input {
            flex: 2;
            border: 1px solid ${t};
            background: ${u};
            color: ${g};
            border-radius: calc(${w} - 2px);
            padding: 10px 12px;
            font: inherit;
            outline: none;
        }
        input:focus {
            border-color: ${v};
        }

        button {
            border: 1px solid ${t};
            background: ${f};
            color: ${g};
            padding: 10px 14px;
            border-radius: ${w};
            cursor: pointer;
            font: inherit;
            transition: transform 0.02s ease-in-out, border-color 0.15s ease;
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
            background: ${u};
        }

        .spacer {
            flex: 1;
            min-width: 8px;
        }
    `,Suggestions:l.div`
        margin-top: 10px;
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        button {
            border: 1px solid ${t};
            background: ${u};
            color: ${g};
            padding: 6px 10px;
            border-radius: 999px;
            font-size: 13px;
            cursor: pointer;
            &:hover {
                border-color: ${v};
            }
        }
    `,Error:l.div`
        margin-top: 10px;
        color: ${b};
        font-size: 13px;
    `,List:l.ul`
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        gap: 8px;
    `,ListItem:l.li`
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 8px;
        border: 1px solid ${t};
        background: ${u};
        border-radius: ${w};
        overflow: hidden;

        /* ensure base color in dark themes */
        color: ${g};

        &[data-active="true"] {
            outline: 1.5px solid ${v};
            outline-offset: 0;
        }

        .row {
            display: flex;
            gap: 12px;
            text-align: left;
            width: 100%;
            background: transparent;
            border: none;
            padding: 8px;
            cursor: pointer;

            /* button doesn't always inherit; force it */
            color: ${g};
        }
        /* children inherit */
        .row * {
            color: inherit;
        }

        img {
            width: 56px;
            height: 36px;
            object-fit: cover;
            border-radius: 6px;
            border: 1px solid ${t};
            background: ${f};
        }

        .meta {
            display: grid;
            gap: 2px;
            align-content: center;
        }
        .name {
            font-weight: 600;
        }
        .sub,
        .cap {
            color: ${E};
            font-size: 13px;
        }

        .actions {
            display: flex;
            gap: 8px;
            align-items: center;
            padding: 8px;

            .small {
                padding: 6px 10px;
                border-radius: 999px;
                border: 1px solid ${t};
                background: ${f};
                color: ${g};
                cursor: pointer;
                &:hover {
                    border-color: ${v};
                }
            }
            .danger {
                border-color: ${b};
                color: ${b};
            }
        }
    `,Detail:l.div`
        display: grid;
        gap: 14px;

        .head {
            display: flex;
            gap: 12px;
            align-items: center;
        }
        .flag {
            width: 160px;
            height: 110px;
            object-fit: cover;
            border-radius: 8px;
            border: 1px solid ${t};
            background: ${u};
        }

        h2 {
            margin: 0 0 4px 0;
            font-size: 18px;
        }
    `,Grid:l.div`
        ${s=>s.two?`
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px 16px;
      @media (max-width: 720px) { grid-template-columns: 1fr; }
      .row { display: contents; }
      .label { color: ${E}; font-size: 13px; }
      .value { font-size: 14px; }
    `:`
      display: grid; gap: 8px;
    `}
    `,Chips:l.div`
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-top: 6px;

        button {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: 1px solid ${t};
            background: ${u};
            color: ${g};
            padding: 6px 10px;
            border-radius: 999px;
            cursor: pointer;
            font-size: 13px;
            &:hover {
                border-color: ${v};
            }
            img {
                width: 20px;
                height: 14px;
                object-fit: cover;
                border: 1px solid ${t};
                border-radius: 3px;
            }
        }
    `,Links:l.div`
        display: flex;
        gap: 12px;
        margin-top: 8px;

        a {
            color: ${g};
            border: 1px solid ${t};
            background: ${u};
            padding: 6px 10px;
            border-radius: 999px;
            font-size: 13px;
            text-decoration: none;
            &:hover {
                border-color: ${v};
            }
        }
    `,Actions:l.div`
        margin-top: 10px;
        display: flex;
        gap: 8px;
        align-items: center;
        .spacer {
            flex: 1;
        }
        button {
            border: 1px solid ${t};
            background: ${f};
            color: ${g};
            padding: 10px 14px;
            border-radius: ${w};
            cursor: pointer;
            font: inherit;
            &:hover {
                border-color: ${v};
            }
        }
        .danger {
            border-color: ${b};
            color: ${b};
        }
        .ghost {
            background: ${u};
        }
    `,FlexHead:l.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        h3 {
            margin: 0;
        }
        .right {
            display: flex;
            gap: 8px;
        }
        .small {
            color: ${b};
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid ${t};
            background: ${f};
            cursor: pointer;
            &:hover {
                border-color: ${v};
            }
        }
        .ghost {
            background: ${u};
        }
    `,FavList:l.ul`
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        gap: 8px;

        li {
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 8px;
            border: 1px solid ${t};
            background: ${u};
            border-radius: ${w};
            overflow: hidden;
        }
        .row {
            display: flex;
            gap: 12px;
            text-align: left;
            width: 100%;
            background: transparent;
            border: none;
            padding: 8px;
            cursor: pointer;
            color: ${g};
        }
        .row * {
            color: inherit;
        }

        img {
            width: 44px;
            height: 28px;
            object-fit: cover;
            border-radius: 4px;
            border: 1px solid ${t};
            background: ${f};
        }
        .meta {
            display: grid;
            gap: 2px;
            align-content: center;
        }
        .name {
            font-weight: 600;
        }
        .sub {
            color: ${E};
            font-size: 13px;
        }

        .actions {
            display: flex;
            gap: 8px;
            align-items: center;
            padding: 8px;
            .small {
                padding: 6px 10px;
                border-radius: 999px;
                border: 1px solid ${t};
                background: ${f};
                color: ${g};
                cursor: pointer;
                &:hover {
                    border-color: ${v};
                }
            }
            .danger {
                border-color: ${b};
                color: ${b};
            }
        }
    `,ModalOverlay:l.div`
        position: fixed;
        inset: 0;
        background: color-mix(in oklab, black 40%, transparent);
        display: grid;
        place-items: center;
        z-index: 9999;
        padding: 16px;
    `,Modal:l.div`
        background: ${f};
        border: 1px solid ${t};
        border-radius: ${w};
        box-shadow: ${H};
        width: min(520px, 96vw);
        padding: 12px;

        header {
            padding: 4px 8px 8px;
        }
        h3 {
            margin: 0;
            font-size: 16px;
        }

        .body {
            padding: 0 8px 8px;
            color: ${g};
        }
        footer {
            display: flex;
            gap: 8px;
            justify-content: flex-end;
            padding: 8px;
            button {
                border: 1px solid ${t};
                background: ${f};
                color: ${g};
                padding: 8px 12px;
                border-radius: ${w};
                cursor: pointer;
                &:hover {
                    border-color: ${v};
                }
            }
            .ghost {
            }
            .danger {
                border-color: ${b};
                color: ${b};
            }
        }
    `},re="https://restcountries.com/v3.1",pe="name,flags,capital,region,subregion,cca2,cca3,ccn3,cioc,independent,unMember,area,population,timezones,borders,maps,languages,currencies,idd,tld,latlng,coatOfArms,startOfWeek,car",M="countryInfo_cache_v1",ae="countryInfo_favorites_v1",se=s=>typeof s=="number"?s.toLocaleString("en-IN"):s,B=s=>Array.isArray(s)&&s.length?s.join(", "):"—";function xe(s){if(!s)return"—";try{return Object.entries(s).map(([m,p])=>`${m}${p!=null&&p.name?` (${p.name})`:""}`).join(", ")}catch{return"—"}}function ge(s){if(!s)return"—";try{return Object.values(s).join(", ")}catch{return"—"}}function me(s){const m=(s==null?void 0:s.root)||"",p=Array.isArray(s==null?void 0:s.suffixes)&&s.suffixes[0]||"";return m||p?`${m}${p}`:"—"}function he({open:s,title:m="Confirm",message:p,confirmText:y="Confirm",cancelText:I="Cancel",onConfirm:S,onClose:k}){return s?e.jsx(n.ModalOverlay,{role:"dialog","aria-modal":"true",children:e.jsxs(n.Modal,{children:[e.jsx("header",{children:e.jsx("h3",{children:m})}),e.jsx("div",{className:"body",children:e.jsx("p",{children:p})}),e.jsxs("footer",{children:[e.jsx("button",{className:"ghost",onClick:k,children:I}),e.jsx("button",{className:"danger",onClick:()=>{S==null||S(),k==null||k()},children:y})]})]})}):null}const ue=["India","United States","Germany","Japan","Australia","France","Brazil"],ve=()=>{var K,V,W,Q,X,Z,ee;const[s,m]=d.useState(""),[p,y]=d.useState([]),[I,S]=d.useState(!1),[k,F]=d.useState(""),[a,C]=d.useState(null),[$,D]=d.useState(()=>{try{return JSON.parse(localStorage.getItem(ae)||"[]")}catch{return[]}}),[R,T]=d.useState({open:!1}),h=d.useRef({});d.useEffect(()=>{try{h.current=JSON.parse(localStorage.getItem(M)||"{}")}catch{h.current={}}},[]),d.useEffect(()=>{try{localStorage.setItem(ae,JSON.stringify($))}catch{}},[$]);const _=d.useRef(null),U=d.useRef(null);d.useEffect(()=>{var r;(r=U.current)==null||r.focus()},[]);async function ie(r){const i=`name:${r.toLowerCase()}`;if(h.current[i])return h.current[i];const o=`${re}/name/${encodeURIComponent(r)}?fields=${pe}`,c=await fetch(o);if(!c.ok)throw new Error(c.status===404?"No matches found.":"Request failed.");const x=await c.json();h.current[i]=x;try{localStorage.setItem(M,JSON.stringify(h.current))}catch{}return x}async function oe(r=[]){if(!r.length)return[];const i=`alpha:${r.sort().join(",")}`;if(h.current[i])return h.current[i];const o=`${re}/alpha?codes=${r.join(",")}&fields=name,cca3,flags`,c=await fetch(o);if(!c.ok)throw new Error("Failed to load borders.");const x=await c.json();h.current[i]=x;try{localStorage.setItem(M,JSON.stringify(h.current))}catch{}return x}const z=async r=>{const i=(r??s).trim();if(!i){F("Type a country name to search."),y([]),C(null);return}S(!0),F("");try{const o=await ie(i);y(o),C(o[0]||null)}catch(o){y([]),C(null),F(o.message||"Something went wrong.")}finally{S(!1)}},ne=r=>{r.key==="Enter"&&z(),r.key==="Escape"&&(m(""),F(""),y([]),C(null))},J=r=>$.some(i=>i.cca3===r),Y=r=>{var c,x,j;const i={cca3:r==null?void 0:r.cca3,name:((c=r==null?void 0:r.name)==null?void 0:c.common)||"",flag:((x=r==null?void 0:r.flags)==null?void 0:x.png)||((j=r==null?void 0:r.flags)==null?void 0:j.svg)||"",region:(r==null?void 0:r.region)||"",capital:Array.isArray(r==null?void 0:r.capital)?r.capital[0]:""};if(!i.cca3||J(i.cca3))return;const o=[i,...$].slice(0,100);D(o)},P=r=>{T({open:!0,title:"Remove Favorite?",message:"This country will be removed from your favorites.",confirmText:"Remove",onConfirm:()=>D(i=>i.filter(o=>o.cca3!==r))})},le=()=>{$.length&&T({open:!0,title:"Clear All Favorites?",message:"This will remove all saved favorites.",confirmText:"Clear",onConfirm:()=>D([])})},te=()=>{T({open:!0,title:"Clear Cached Results?",message:"Cached API responses will be cleared.",confirmText:"Clear Cache",onConfirm:()=>{h.current={};try{localStorage.removeItem(M)}catch{}}})},[q,G]=d.useState([]);d.useEffect(()=>{let r=!0;async function i(){try{const o=(a==null?void 0:a.borders)||[];if(!o.length){G([]);return}const c=await oe(o);r&&G(c)}catch{r&&G([])}}return i(),()=>{r=!1}},[a]);const ce=()=>{if(!_.current)return;const r=window.open("","_blank","width=800,height=900");if(!r)return;r.document.write(`<html><head><title>Country Details</title>
      <style>
        :root { color-scheme: light dark; }
        body { font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; margin: 20px; }
        h1,h2,h3 { margin: 0 0 8px 0; }
        .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px 16px; }
        .row { display: contents; }
        .label { color: #666; }
        .value { color: #000; }
        .flag { max-width: 160px; border: 1px solid #ddd; border-radius: 8px; }
        @media (prefers-color-scheme: dark) {
          .value { color: #fff; }
          .label { color: #aaa; }
          .flag { border-color: #444; }
        }
      </style>
    </head><body>${_.current.innerHTML}</body></html>`),r.document.close(),r.focus(),r.print(),r.close()},N=d.useMemo(()=>{const r=a;if(!r)return null;const i=B(r.capital),o=B(r.timezones),c=ge(r.languages),x=xe(r.currencies),j=Array.isArray(r.latlng)?r.latlng.map(de=>de.toFixed(2)).join(", "):"—",A=B(r.tld),L=se(r.area),O=se(r.population);return{capital:i,tz:o,langs:c,curr:x,coords:j,tld:A,area:L,pop:O}},[a]);return e.jsxs(n.Wrapper,{children:[e.jsxs(n.Header,{children:[e.jsxs("div",{children:[e.jsx("h1",{children:"Country Information"}),e.jsx("p",{children:"Curious about countries? Type a name and get quick, reliable basics—flags, capital, languages, currencies, neighbors, and more."})]}),e.jsxs(n.Badges,{children:[e.jsx("span",{className:"badge",children:"Live API"}),e.jsx("span",{className:"badge",children:"Caching"}),e.jsx("span",{className:"badge",children:"Favorites"}),e.jsx("span",{className:"badge",children:"Print Section"})]})]}),e.jsxs(n.Card,{children:[e.jsxs(n.SearchRow,{children:[e.jsx("input",{ref:U,type:"text",value:s,onChange:r=>m(r.target.value),onKeyDown:ne,placeholder:"Start typing: India, United States, Japan...","aria-label":"Search country by name"}),e.jsx("button",{onClick:()=>z(),disabled:!s.trim()||I,children:I?"Searching...":"Search"}),e.jsx("button",{className:"ghost",onClick:()=>{m(""),F(""),y([]),C(null)},children:"Clear"}),e.jsx("div",{className:"spacer"}),e.jsx("button",{className:"ghost",onClick:te,title:"Clear cached API responses",children:"Clear Cache"})]}),!!k&&e.jsx(n.Error,{role:"alert",children:k}),e.jsx(n.Suggestions,{children:ue.map(r=>e.jsx("button",{onClick:()=>{m(r),z(r)},children:r},r))})]}),e.jsxs(n.Layout,{children:[e.jsxs(n.Card,{children:[e.jsxs("h3",{children:["Results ",p.length?`(${p.length})`:""]}),!p.length&&!I&&e.jsx("p",{className:"muted",children:"No results yet. Try a search or click a suggestion."}),e.jsx(n.List,{children:p.map(r=>{var A,L,O;const i=((A=r==null?void 0:r.name)==null?void 0:A.common)||"—",o=[r==null?void 0:r.region,r==null?void 0:r.subregion].filter(Boolean).join(" • "),c=B(r==null?void 0:r.capital),x=(a==null?void 0:a.cca3)===(r==null?void 0:r.cca3),j=J(r.cca3);return e.jsxs(n.ListItem,{"data-active":x,children:[e.jsxs("button",{className:"row",onClick:()=>C(r),title:"View details",children:[e.jsx("img",{src:((L=r==null?void 0:r.flags)==null?void 0:L.png)||((O=r==null?void 0:r.flags)==null?void 0:O.svg),alt:`${i} flag`}),e.jsxs("div",{className:"meta",children:[e.jsx("div",{className:"name",children:i}),e.jsx("div",{className:"sub",children:o||"—"}),e.jsxs("div",{className:"cap",children:["Capital: ",c]})]})]}),e.jsx("div",{className:"actions",children:j?e.jsx("button",{className:"small danger",onClick:()=>P(r.cca3),title:"Remove favorite",children:"Remove"}):e.jsx("button",{className:"small",onClick:()=>Y(r),title:"Add to favorites",children:"Save"})})]},r.cca3)})})]}),e.jsxs("div",{className:"col",children:[e.jsxs(n.Card,{children:[e.jsx("h3",{children:"Details"}),!a&&e.jsx("p",{className:"muted",children:"Select a country from results to see details."}),!!a&&e.jsxs(e.Fragment,{children:[e.jsxs(n.Detail,{ref:_,children:[e.jsxs("div",{className:"head",children:[e.jsx("img",{className:"flag",src:((K=a==null?void 0:a.flags)==null?void 0:K.png)||((V=a==null?void 0:a.flags)==null?void 0:V.svg),alt:`${(W=a==null?void 0:a.name)==null?void 0:W.common} flag`}),e.jsxs("div",{children:[e.jsx("h2",{children:(Q=a==null?void 0:a.name)==null?void 0:Q.common}),e.jsx("div",{className:"muted",children:((X=a==null?void 0:a.name)==null?void 0:X.official)||"—"}),e.jsxs("div",{className:"muted",children:["CCA3: ",(a==null?void 0:a.cca3)||"—"]})]})]}),e.jsxs(n.Grid,{two:!0,children:[e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"label",children:"Region"}),e.jsx("div",{className:"value",children:[a==null?void 0:a.region,a==null?void 0:a.subregion].filter(Boolean).join(" • ")||"—"})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"label",children:"Capital"}),e.jsx("div",{className:"value",children:N.capital})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"label",children:"Population"}),e.jsx("div",{className:"value",children:N.pop})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"label",children:"Area"}),e.jsxs("div",{className:"value",children:[N.area," km²"]})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"label",children:"Languages"}),e.jsx("div",{className:"value",children:N.langs})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"label",children:"Currencies"}),e.jsx("div",{className:"value",children:N.curr})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"label",children:"Timezones"}),e.jsx("div",{className:"value",children:N.tz})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"label",children:"Calling Code"}),e.jsx("div",{className:"value",children:me(a==null?void 0:a.idd)})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"label",children:"Top-level Domain"}),e.jsx("div",{className:"value",children:N.tld})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"label",children:"Coordinates"}),e.jsx("div",{className:"value",children:N.coords})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"label",children:"Independent"}),e.jsx("div",{className:"value",children:a!=null&&a.independent?"Yes":"No"})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"label",children:"UN Member"}),e.jsx("div",{className:"value",children:a!=null&&a.unMember?"Yes":"No"})]})]}),!!q.length&&e.jsxs(e.Fragment,{children:[e.jsx("h4",{children:"Borders"}),e.jsx(n.Chips,{children:q.map(r=>{var i,o,c;return e.jsxs("button",{onClick:()=>{var j;const x=p.find(A=>A.cca3===r.cca3);x?C(x):z(((j=r.name)==null?void 0:j.common)||r.cca3)},children:[e.jsx("img",{src:((i=r==null?void 0:r.flags)==null?void 0:i.png)||((o=r==null?void 0:r.flags)==null?void 0:o.svg),alt:""}),e.jsxs("span",{children:[(c=r==null?void 0:r.name)==null?void 0:c.common," (",r==null?void 0:r.cca3,")"]})]},r.cca3)})})]}),e.jsxs(n.Links,{children:[((Z=a==null?void 0:a.maps)==null?void 0:Z.googleMaps)&&e.jsx("a",{href:a.maps.googleMaps,target:"_blank",rel:"noreferrer",children:"Open in Google Maps"}),((ee=a==null?void 0:a.coatOfArms)==null?void 0:ee.png)&&e.jsx("a",{href:a.coatOfArms.png,target:"_blank",rel:"noreferrer",children:"View Coat of Arms"})]})]}),e.jsxs(n.Actions,{children:[J(a==null?void 0:a.cca3)?e.jsx("button",{className:"danger",onClick:()=>P(a==null?void 0:a.cca3),children:"Remove Favorite"}):e.jsx("button",{onClick:()=>Y(a),children:"Save to Favorites"}),e.jsx("div",{className:"spacer"}),e.jsx("button",{className:"ghost",onClick:ce,children:"Print Details"})]})]})]}),e.jsxs(n.Card,{children:[e.jsxs(n.FlexHead,{children:[e.jsx("h3",{children:"Favorites"}),e.jsx("div",{className:"right",children:e.jsx("button",{className:"ghost small",onClick:le,disabled:!$.length,children:"Clear All"})})]}),!$.length&&e.jsx("p",{className:"muted",children:"No favorites yet."}),e.jsx(n.FavList,{children:$.map(r=>e.jsxs("li",{children:[e.jsxs("button",{className:"row",onClick:()=>z(r.name),title:"Open details",children:[e.jsx("img",{src:r.flag,alt:""}),e.jsxs("div",{className:"meta",children:[e.jsx("div",{className:"name",children:r.name}),e.jsx("div",{className:"sub",children:[r.region,r.capital].filter(Boolean).join(" • ")})]})]}),e.jsx("div",{className:"actions",children:e.jsx("button",{className:"small danger",onClick:()=>P(r.cca3),children:"Remove"})})]},r.cca3))})]})]})]}),e.jsx(he,{open:!!R.open,title:R.title,message:R.message,confirmText:R.confirmText,onConfirm:R.onConfirm,onClose:()=>T({open:!1})})]})};export{ve as default};
