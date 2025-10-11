import{d as p,r as l,j as e}from"./index-BHpz9pj3.js";const j="var(--bg)",S="var(--card)",v="var(--text)",N="var(--muted)",h="var(--border)",g="var(--radius)",I="var(--shadow)",L="var(--accent)",_="var(--danger, #e5484d)",s={Wrapper:p.div`
        display: grid;
        gap: 16px;
        padding: 16px;
        color: ${v};
        background: ${j};
        min-height: 100%;
    `,Header:p.div`
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
            color: ${N};
            font-size: 14px;
        }
    `,Badges:p.div`
        display: flex;
        gap: 8px;
        align-items: center;
        .badge {
            background: ${S};
            border: 1px solid ${h};
            padding: 6px 10px;
            border-radius: 999px;
            font-size: 12px;
            box-shadow: ${I};
            white-space: nowrap;
        }
    `,Tabs:p.div`
        display: flex;
        gap: 8px;
        .tab {
            border: 1px solid ${h};
            background: ${S};
            color: ${v};
            padding: 8px 12px;
            border-radius: ${g};
            cursor: pointer;
            font: inherit;
            box-shadow: ${I};
        }
        .tab.active {
            border-color: ${L};
        }
    `,Layout:p.div`
        display: grid;
        grid-template-columns: 1.6fr 1fr;
        gap: 16px;
        @media (max-width: 1080px) {
            grid-template-columns: 1fr;
        }
    `,Side:p.aside`
        display: grid;
        gap: 16px;
    `,Card:p.div`
        background: ${S};
        border: 1px solid ${h};
        border-radius: ${g};
        box-shadow: ${I};
        padding: 16px;
    `,SectionTitle:p.h2`
        margin: 0 0 12px 0;
        font-size: 15px;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 10px;
        .right {
            margin-left: auto;
        }
    `,SearchRow:p.form`
        display: grid;
        grid-template-columns: 1fr auto auto;
        gap: 8px;
        input {
            width: 100%;
            border: 1px solid ${h};
            background: ${j};
            color: ${v};
            border-radius: calc(${g} - 2px);
            padding: 10px 12px;
            font: inherit;
            outline: none;
            transition: border-color 0.15s ease;
        }
        input:focus {
            border-color: ${L};
        }
        button {
            appearance: none;
            border: 1px solid ${h};
            background: ${S};
            color: ${v};
            padding: 10px 14px;
            border-radius: ${g};
            cursor: pointer;
            font: inherit;
            transition: transform 0.02s ease-in-out, border-color 0.15s ease;
            &:hover {
                border-color: ${L};
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
            background: ${j};
        }
        .danger {
            border-color: ${_};
            color: ${_};
        }
    `,Results:p.div`
        display: grid;
        gap: 8px;
    `,ResultItem:p.div`
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 8px;
        align-items: center;
        border: 1px solid ${h};
        background: ${j};
        border-radius: calc(${g} - 2px);
        padding: 10px 12px;
        transition: border-color 0.15s ease, background 0.15s ease;
        cursor: pointer;
        &:hover {
            border-color: ${L};
        }
        &.active {
            background: ${S};
            border-color: ${L};
        }

        .main {
            display: grid;
            gap: 4px;
            .title {
                font-weight: 600;
                font-size: 14px;
            }
            .addr {
                color: ${N};
                font-size: 13px;
            }
            .coords {
                color: ${N};
                font-size: 12px;
            }
        }
        .actions {
            display: inline-flex;
            gap: 8px;
            align-items: center;
            button {
                border: 1px solid ${h};
                background: ${S};
                color: ${v};
                padding: 6px 10px;
                border-radius: ${g};
                cursor: pointer;
                font: inherit;
                transition: border-color 0.15s ease;
            }
            .ghost {
                background: ${j};
            }
        }
    `,List:p.ul`
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        gap: 8px;
        li {
            border: 1px solid ${h};
            border-radius: calc(${g} - 2px);
            background: ${j};
            padding: 10px 12px;
            display: grid;
            gap: 6px;
        }
        .row {
            display: flex;
            gap: 8px;
            align-items: center;
            justify-content: space-between;
        }
        .mini {
            display: inline-flex;
            gap: 6px;
        }
        .link {
            text-align: left;
            background: transparent;
            border: none;
            color: ${v};
            font: inherit;
            cursor: pointer;
            padding: 0;
        }
        button.ghost {
            border: 1px solid ${h};
            background: ${j};
            color: ${v};
            padding: 6px 10px;
            border-radius: ${g};
            cursor: pointer;
        }
        .danger {
            color: ${_};
            border-color: ${_};
        }
        small {
            color: ${N};
        }
    `,MapWrap:p.div`
        border: 1px solid ${h};
        border-radius: calc(${g} - 2px);
        overflow: hidden;
        background: ${j};
        margin-bottom: 10px;
        min-height: 200px;

        img,
        iframe {
            display: block;
            width: 100%;
            height: 360px;
            border: none;
        }

        @media (max-width: 520px) {
            img,
            iframe {
                height: 280px;
            }
        }
    `,KV:p.div`
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8px;
        margin: 10px 0 8px 0;
        div {
            display: flex;
            align-items: center;
            justify-content: space-between;
            border: 1px solid ${h};
            border-radius: calc(${g} - 2px);
            padding: 8px 10px;
            background: ${j};
            span {
                color: ${N};
                font-size: 12px;
            }
            code {
                font-size: 13px;
            }
        }
        @media (max-width: 520px) {
            grid-template-columns: 1fr;
        }
    `,Actions:p.div`
        margin-top: 8px;
        display: flex;
        gap: 8px;
        align-items: center;
        flex-wrap: wrap;
        button {
            appearance: none;
            border: 1px solid ${h};
            background: ${S};
            color: ${v};
            padding: 8px 12px;
            border-radius: ${g};
            cursor: pointer;
            font: inherit;
            transition: border-color 0.15s ease, transform 0.02s ease-in-out;
            &:hover {
                border-color: ${L};
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
            background: ${j};
        }
    `,Muted:p.div`
        color: ${N};
        font-size: 14px;
    `,Error:p.div`
        color: ${_};
        font-size: 13px;
        margin-top: 6px;
        min-height: 16px;
    `,ModalOverlay:p.div`
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.4);
        display: grid;
        place-items: center;
        z-index: 999;
    `,Modal:p.div`
        width: min(480px, 92vw);
        background: ${S};
        color: ${v};
        border: 1px solid ${h};
        border-radius: ${g};
        box-shadow: ${I};
        padding: 16px;
        h3 {
            margin: 0 0 8px 0;
            font-size: 16px;
        }
        p {
            margin: 0 0 12px 0;
            color: ${N};
        }
    `,ModalActions:p.div`
        display: flex;
        gap: 8px;
        justify-content: flex-end;
        button {
            appearance: none;
            border: 1px solid ${h};
            background: ${S};
            color: ${v};
            padding: 8px 12px;
            border-radius: ${g};
            cursor: pointer;
            font: inherit;
        }
        .ghost {
            background: ${j};
        }
        .danger {
            border-color: ${_};
            color: ${_};
        }
    `},oe="https://nominatim.openstreetmap.org",ue="https://staticmap.openstreetmap.de/staticmap.php",ee="locationFinder_recents_v1",te="locationFinder_favorites_v1",xe=12;function B(...r){return r.filter(Boolean).join(" ")}const me=r=>new Promise(o=>setTimeout(o,r));function se(r,o,n){return Math.max(o,Math.min(n,r))}function F(r){return Number(r).toFixed(6)}function he({lat:r,lon:o,zoom:n=14,w:i=640,h:a=360}){const b=new URLSearchParams({center:`${r},${o}`,zoom:String(se(n,1,19)),size:`${i}x${a}`,markers:`${r},${o},lightblue1`,scale:"2"});return`${ue}?${b.toString()}`}function ge({lat:r,lon:o,zoom:n=14}){const a=(Number(o)-.02).toFixed(5),b=(Number(o)+.02).toFixed(5),f=(Number(r)+.02).toFixed(5),$=(Number(r)-.02).toFixed(5),C=`${a},${$},${b},${f}`;return`https://www.openstreetmap.org/export/embed.html?bbox=${encodeURIComponent(C)}&layer=mapnik&marker=${encodeURIComponent(`${r},${o}`)}#map=${se(n,1,19)}/${r}/${o}`}function M(r){return(r==null?void 0:r.display_name)||`${(r==null?void 0:r.name)||""}`.trim()}function T(r){const o=(r==null?void 0:r.address)||{};return[o.road,o.neighbourhood||o.suburb,o.city||o.town||o.village,o.state,o.country].filter(Boolean).join(", ")}function P(r){var o;try{(o=navigator.clipboard)==null||o.writeText(r)}catch{}}function be(r,o){const[n,i]=l.useState(r);return l.useEffect(()=>{const a=setTimeout(()=>i(r),o);return()=>clearTimeout(a)},[r,o]),n}async function fe(r,o){if(!(r!=null&&r.trim()))return[];const n=new URL(`${oe}/search`);n.searchParams.set("q",r.trim()),n.searchParams.set("format","jsonv2"),n.searchParams.set("addressdetails","1"),n.searchParams.set("limit","10");const i=await fetch(n.toString(),{signal:o});if(!i.ok)throw i.status===429&&await me(600),new Error(`Search failed: ${i.status}`);const a=await i.json();return Array.isArray(a)?a:[]}async function $e(r,o,n){const i=new URL(`${oe}/reverse`);i.searchParams.set("lat",String(r)),i.searchParams.set("lon",String(o)),i.searchParams.set("format","jsonv2"),i.searchParams.set("addressdetails","1");const a=await fetch(i.toString(),{signal:n});if(!a.ok)throw new Error(`Reverse failed: ${a.status}`);return await a.json()}function je(){const[r,o]=l.useState({open:!1,title:"",message:"",action:null}),n=(a,b)=>new Promise(f=>{o({open:!0,title:a,message:b,action:$=>{o({open:!1,title:"",message:"",action:null}),f($)}})}),i=r.open?e.jsx(s.ModalOverlay,{role:"dialog","aria-modal":"true",children:e.jsxs(s.Modal,{children:[e.jsx("h3",{children:r.title||"Confirm"}),e.jsx("p",{children:r.message||"Are you sure?"}),e.jsxs(s.ModalActions,{children:[e.jsx("button",{className:"ghost",onClick:()=>{var a;return(a=r.action)==null?void 0:a.call(r,!1)},children:"Cancel"}),e.jsx("button",{className:"danger",onClick:()=>{var a;return(a=r.action)==null?void 0:a.call(r,!0)},children:"Yes, do it"})]})]})}):null;return{confirm:n,Modal:i}}const re=({lat:r,lon:o,title:n="Map preview",zoom:i=14})=>{const[a,b]=l.useState("img"),f=F(r),$=F(o);if(l.useEffect(()=>{b("img")},[f,$]),!isFinite(Number(r))||!isFinite(Number(o)))return null;const C=he({lat:f,lon:$,zoom:i,w:640,h:360}),R=ge({lat:f,lon:$,zoom:i});return e.jsx(s.MapWrap,{children:a==="img"?e.jsx("img",{src:C,alt:n,loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",decoding:"async",onError:()=>b("iframe")}):e.jsx("iframe",{title:n,src:R,loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})})},ve=()=>{const[r,o]=l.useState(""),n=be(r,400),[i,a]=l.useState(!1),[b,f]=l.useState([]),[$,C]=l.useState(""),[R,D]=l.useState("search"),[u,J]=l.useState(null),[A,O]=l.useState(()=>{try{return JSON.parse(localStorage.getItem(ee)||"[]")}catch{return[]}}),[k,U]=l.useState(()=>{try{return JSON.parse(localStorage.getItem(te)||"[]")}catch{return[]}}),[x,W]=l.useState(null),[G,H]=l.useState(""),[Q,X]=l.useState(!1),{confirm:z,Modal:ne}=je(),E=l.useRef(null);l.useEffect(()=>{try{localStorage.setItem(ee,JSON.stringify(A))}catch{}},[A]),l.useEffect(()=>{try{localStorage.setItem(te,JSON.stringify(k))}catch{}},[k]),l.useEffect(()=>{if(!n.trim()){f([]),C("");return}return a(!0),C(""),E.current&&E.current.abort(),E.current=new AbortController,fe(n,E.current.signal).then(t=>f(t)).catch(t=>C(t.message||"Search failed")).finally(()=>a(!1)),()=>{var t;return(t=E.current)==null?void 0:t.abort()}},[n]);const Z=t=>{J(t);const c=`${t.osm_type||""}:${t.osm_id||""}`;O(d=>{const m=d.filter(y=>y._key!==c);return[{...t,_key:c,_at:Date.now()},...m].slice(0,xe)})},K=t=>{const c=`${t.osm_type||""}:${t.osm_id||""}`;U(d=>d.some(y=>y._key===c)?d.filter(y=>y._key!==c):[{...t,_key:c,_at:Date.now()},...d])},ae=l.useMemo(()=>{if(!u)return!1;const t=`${u.osm_type||""}:${u.osm_id||""}`;return k.some(c=>c._key===t)},[u,k]),ie=async()=>{await z("Clear recent searches?","This will remove all recent places.")&&O([])},ce=async t=>{await z("Remove this recent?",M(t))&&O(d=>d.filter(m=>m._key!==t._key))},le=async t=>{await z("Remove favorite?",M(t))&&U(d=>d.filter(m=>m._key!==t._key))},de=async()=>{await z("Clear all favorites?","You can always add them again later.")&&U([])},q=async()=>{D("my"),X(!0),H(""),W(null);const t=()=>new Promise((c,d)=>{if(!navigator.geolocation){d(new Error("Geolocation not supported in this browser."));return}navigator.geolocation.getCurrentPosition(c,d,{enableHighAccuracy:!0,timeout:15e3,maximumAge:0})});try{const c=await t(),d=c.coords.latitude,m=c.coords.longitude,y=new AbortController,w=await $e(d,m,y.signal),pe={...w,lat:String(d),lon:String(m),display_name:w.display_name||`(${Number(d).toFixed(5)}, ${Number(m).toFixed(5)})`,osm_type:w.osm_type||"node",osm_id:w.osm_id||`${d},${m}`,address:w.address||{}};W({lat:d,lon:m,place:pe})}catch(c){H((c==null?void 0:c.message)||"Could not determine your location.")}finally{X(!1)}},V=u?Number(u.lat):null,Y=u?Number(u.lon):null;return e.jsxs(s.Wrapper,{children:[e.jsxs(s.Header,{children:[e.jsxs("div",{children:[e.jsx("h1",{children:"Location Finder"}),e.jsx("p",{children:"Search any place, view quick maps, save favorites, and use your current location."})]}),e.jsxs(s.Badges,{children:[e.jsx("span",{className:"badge",children:"Nominatim Search"}),e.jsx("span",{className:"badge",children:"My Location"}),e.jsx("span",{className:"badge",children:"Recents & Favorites"})]})]}),e.jsxs(s.Tabs,{role:"tablist","aria-label":"Location panels",children:[e.jsx("button",{role:"tab","aria-selected":R==="search",className:B("tab",R==="search"&&"active"),onClick:()=>D("search"),children:"Search"}),e.jsx("button",{role:"tab","aria-selected":R==="my",className:B("tab",R==="my"&&"active"),onClick:q,children:"My Location"})]}),e.jsxs(s.Layout,{children:[e.jsxs("div",{children:[e.jsxs(s.Card,{children:[e.jsx(s.SectionTitle,{children:"Search a place"}),e.jsxs(s.SearchRow,{onSubmit:t=>t.preventDefault(),children:[e.jsx("input",{"aria-label":"Search places",placeholder:"e.g., Patna Junction, India or 12 MG Road, Bengaluru",value:r,onChange:t=>o(t.target.value)}),e.jsx("button",{onClick:()=>o(t=>t.trim()),disabled:!r.trim()||i,title:"Search",children:"Search"}),e.jsx("button",{className:"ghost",onClick:()=>{o(""),f([]),C("")},title:"Clear",children:"Clear"})]}),$&&e.jsx(s.Error,{role:"alert",children:$}),i&&e.jsx(s.Muted,{children:"Searching…"})]}),e.jsxs(s.Card,{children:[e.jsx(s.SectionTitle,{children:"Results"}),!i&&!b.length&&!$&&e.jsx(s.Muted,{children:"Type a query above to see results."}),e.jsx(s.Results,{children:b.map(t=>{const c=`${t.osm_type||""}:${t.osm_id||""}`,d=u?`${u.osm_type||""}:${u.osm_id||""}`:"",m=c===d,y=k.some(w=>w._key===c);return e.jsxs(s.ResultItem,{className:B(m&&"active"),onClick:()=>Z(t),children:[e.jsxs("div",{className:"main",children:[e.jsx("strong",{className:"title",children:M(t)}),e.jsx("span",{className:"addr",children:T(t)}),e.jsxs("span",{className:"coords",children:[Number(t.lat).toFixed(5),", ",Number(t.lon).toFixed(5)]})]}),e.jsxs("div",{className:"actions",onClick:w=>w.stopPropagation(),children:[e.jsx("button",{className:"ghost",onClick:()=>P(`${t.lat},${t.lon}`),title:"Copy coordinates",children:"Copy"}),e.jsx("button",{onClick:()=>K(t),title:y?"Remove favorite":"Add favorite",children:y?"★":"☆"})]})]},c)})})]}),e.jsxs(s.Card,{children:[e.jsxs(s.SectionTitle,{children:["Recent Searches",!!A.length&&e.jsx("button",{className:"right ghost danger",onClick:ie,title:"Clear recents",children:"Clear All"})]}),!A.length&&e.jsx(s.Muted,{children:"No recent searches yet."}),e.jsx(s.List,{children:A.map(t=>e.jsxs("li",{children:[e.jsx("button",{className:"link",onClick:()=>Z(t),title:"Open",children:M(t)}),e.jsxs("div",{className:"row",children:[e.jsx("small",{children:T(t)}),e.jsxs("div",{className:"mini",children:[e.jsx("button",{className:"ghost",onClick:()=>P(`${t.lat},${t.lon}`),children:"Copy"}),e.jsx("button",{className:"ghost danger",onClick:()=>ce(t),children:"Delete"})]})]})]},t._key))})]})]}),e.jsxs(s.Side,{children:[e.jsxs(s.Card,{children:[e.jsx(s.SectionTitle,{children:"Selected"}),!u&&e.jsx(s.Muted,{children:"No place selected yet."}),u&&e.jsxs(e.Fragment,{children:[e.jsx(re,{lat:V,lon:Y,title:"Selected location map"}),e.jsx("div",{className:"title",children:M(u)}),e.jsx("div",{className:"addr",children:T(u)||"—"}),e.jsxs(s.KV,{children:[e.jsxs("div",{children:[e.jsx("span",{children:"Latitude"}),e.jsx("code",{children:F(V)})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Longitude"}),e.jsx("code",{children:F(Y)})]})]}),e.jsxs(s.Actions,{children:[e.jsx("button",{className:"ghost",onClick:()=>P(`${V},${Y}`),children:"Copy Coords"}),e.jsx("button",{onClick:()=>K(u),children:ae?"Remove Favorite":"Add Favorite"})]})]})]}),e.jsxs(s.Card,{children:[e.jsx(s.SectionTitle,{children:"My Location"}),e.jsx(s.Actions,{children:e.jsx("button",{onClick:q,disabled:Q,children:"Use Current Location"})}),Q&&e.jsx(s.Muted,{children:"Fetching your location…"}),G&&e.jsx(s.Error,{role:"alert",children:G}),(x==null?void 0:x.place)&&e.jsxs(e.Fragment,{children:[e.jsx(re,{lat:x.lat,lon:x.lon,title:"My location map"}),e.jsx("div",{className:"title",children:M(x.place)}),e.jsx("div",{className:"addr",children:T(x.place)||"—"}),e.jsxs(s.KV,{children:[e.jsxs("div",{children:[e.jsx("span",{children:"Latitude"}),e.jsx("code",{children:F(x.lat)})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Longitude"}),e.jsx("code",{children:F(x.lon)})]})]}),e.jsxs(s.Actions,{children:[e.jsx("button",{className:"ghost",onClick:()=>P(`${x.lat},${x.lon}`),children:"Copy Coords"}),e.jsx("button",{onClick:()=>K(x.place),children:k.some(t=>t._key===`${x.place.osm_type}:${x.place.osm_id}`)?"Remove Favorite":"Add Favorite"})]})]})]}),e.jsxs(s.Card,{children:[e.jsxs(s.SectionTitle,{children:["Favorites",!!k.length&&e.jsx("button",{className:"right ghost danger",onClick:de,title:"Clear favorites",children:"Clear All"})]}),!k.length&&e.jsx(s.Muted,{children:"No favorites yet."}),e.jsx(s.List,{children:k.map(t=>e.jsxs("li",{children:[e.jsx("button",{className:"link",onClick:()=>J(t),title:"Open",children:M(t)}),e.jsxs("div",{className:"row",children:[e.jsx("small",{children:T(t)}),e.jsxs("div",{className:"mini",children:[e.jsx("button",{className:"ghost",onClick:()=>P(`${t.lat},${t.lon}`),children:"Copy"}),e.jsx("button",{className:"ghost danger",onClick:()=>le(t),children:"Remove"})]})]})]},t._key))})]})]})]}),ne]})};export{ve as default};
