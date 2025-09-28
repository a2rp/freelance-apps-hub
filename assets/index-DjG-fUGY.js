import{d,r as u,j as t}from"./index-C86gdwjR.js";const I="var(--card, #0f1012)",p="var(--text, #eaeaea)",j="var(--muted, #a8a8a8)",g="var(--border, #242424)",P="var(--accent, #22c55e)",z="var(--radius, 16px)",A="var(--shadow, 0 10px 30px rgba(0,0,0,0.35))",f={Wrapper:d.div`
        display: flex;
        flex-direction: column;
        gap: 16px;
        color: ${p};
        margin: auto;
        padding: 15px;
        max-width: 1440px;
    `,Header:d.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 12px 14px;
        background: ${I};
        border: 1px solid ${g};
        border-radius: ${z};
        box-shadow: ${A};

        .title {
            font-size: 20px;
            font-weight: 600;
            letter-spacing: 0.2px;
        }
        .actions {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        button {
            padding: 8px 12px;
            border: 1px solid ${g};
            border-radius: 10px;
            background: #141414;
            color: ${p};
            font-size: 14px;
            cursor: pointer;
        }
        button:hover {
            border-color: ${P};
        }
        button:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
    `,Card:d.section`
        background: ${I};
        border: 1px solid ${g};
        border-radius: ${z};
        box-shadow: ${A};
        padding: 14px;
    `,Grid:d.div`
        display: grid;
        grid-template-columns: 180px 1fr;
        gap: 8px 12px;
        align-items: center;

        span {
            color: ${j};
            font-size: 13px;
        }
        .val {
            display: flex;
            align-items: center;
            gap: 8px;
            flex-wrap: wrap;
        }
        code {
            background: #121212;
            border: 1px solid ${g};
            padding: 2px 6px;
            border-radius: 8px;
            font-family: ui-monospace, SFMono-Regular, Menlo, Consolas,
                "Liberation Mono", monospace;
            font-size: 13px;
            color: ${p};
        }
        a {
            color: ${p};
            border-bottom: 1px dotted ${j};
            text-decoration: none;
        }
        .ua {
            word-break: break-all;
            opacity: 0.9;
        }
        button {
            padding: 6px 10px;
            border: 1px solid ${g};
            border-radius: 10px;
            background: #161616;
            color: ${p};
            font-size: 13px;
            cursor: pointer;
        }
        button:hover {
            border-color: ${P};
        }
    `,FootNote:d.div`
        margin-top: 10px;
        font-size: 12px;
        color: ${j};
    `};var L;const G={ipv4:null,ipv6:null,isp:null,asn:null,org:null,country:null,region:null,city:null,postal:null,latitude:null,longitude:null,timezone:null,utc_offset:null,userAgent:typeof navigator<"u"?navigator.userAgent:null,connection:typeof navigator<"u"&&"connection"in navigator&&((L=navigator.connection)==null?void 0:L.effectiveType)||null,locationSource:"IP"};function J(){const[l,b]=u.useState(G),[w,$]=u.useState(!1),[C,m]=u.useState(!1),[v,x]=u.useState("");u.useEffect(()=>{S()},[]);async function S(){$(!0),x("");try{const[n,e]=await Promise.all([T(),O()]),i=await M();b(o=>({...o,ipv4:n||o.ipv4,ipv6:e||o.ipv6,...i,locationSource:"IP"}))}finally{$(!1)}}async function r(n,e=6e3){const i=new AbortController,o=setTimeout(()=>i.abort(),e);try{const s=await n(i.signal);return clearTimeout(o),s}catch{return clearTimeout(o),null}}async function T(){const n=await r(i=>fetch("https://api.ipify.org?format=json",{signal:i}));if(n!=null&&n.ok)return(await n.json()).ip||null;const e=await r(i=>fetch("https://ifconfig.co/json",{signal:i}));return e!=null&&e.ok&&(await e.json()).ip||null}async function O(){const n=await r(i=>fetch("https://api64.ipify.org?format=json",{signal:i}));if(n!=null&&n.ok){const i=await n.json();return i.ip&&i.ip.includes(":")?i.ip:null}const e=await r(i=>fetch("https://ifconfig.co/json",{signal:i}));if(e!=null&&e.ok){const i=await e.json();return i.ip&&i.ip.includes(":")?i.ip:null}return null}async function M(){var e,i,o,s,h,N;let n=await r(a=>fetch("https://ipapi.co/json/",{signal:a}));if(n!=null&&n.ok){const a=await n.json();return{isp:a.org||null,asn:a.asn||null,org:a.org||null,country:a.country_name||a.country||null,region:a.region||null,city:a.city||null,postal:a.postal||null,latitude:a.latitude??a.lat??null,longitude:a.longitude??a.lon??null,timezone:a.timezone||null,utc_offset:a.utc_offset||null}}if(n=await r(a=>fetch("https://ipwho.is/",{signal:a})),n!=null&&n.ok){const a=await n.json();return{isp:((e=a.connection)==null?void 0:e.isp)||((i=a.connection)==null?void 0:i.org)||null,asn:((o=a.connection)==null?void 0:o.asn)||null,org:((s=a.connection)==null?void 0:s.org)||null,country:a.country||null,region:a.region||null,city:a.city||null,postal:a.postal||null,latitude:a.latitude??null,longitude:a.longitude??null,timezone:((h=a.timezone)==null?void 0:h.id)||null,utc_offset:((N=a.timezone)==null?void 0:N.utc)||null}}return{}}async function _(){"geolocation"in navigator&&(m(!0),x(""),navigator.geolocation.getCurrentPosition(async n=>{const{latitude:e,longitude:i}=n.coords,o=await D(e,i);b(s=>({...s,latitude:e,longitude:i,city:(o==null?void 0:o.city)||(o==null?void 0:o.locality)||s.city,region:(o==null?void 0:o.principalSubdivision)||s.region,country:(o==null?void 0:o.countryName)||s.country,timezone:Intl.DateTimeFormat().resolvedOptions().timeZone||s.timezone,utc_offset:R(),locationSource:"Device"})),m(!1)},()=>m(!1),{enableHighAccuracy:!0,timeout:1e4,maximumAge:0}))}async function D(n,e){const i=`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${n}&longitude=${e}&localityLanguage=en`;try{const o=await r(s=>fetch(i,{signal:s}),8e3);if(o!=null&&o.ok)return await o.json()}catch{}return null}function R(n=new Date){const e=-n.getTimezoneOffset(),i=e>=0?"+":"-",o=String(Math.floor(Math.abs(e)/60)).padStart(2,"0"),s=String(Math.abs(e)%60).padStart(2,"0");return`${i}${o}:${s}`}async function y(n,e){try{await navigator.clipboard.writeText(n),x(e),setTimeout(()=>x(""),1200)}catch{}}function U(){const n=JSON.stringify(l,null,2);y(n,"json")}function E(){const n=F(l),e=document.createElement("iframe");Object.assign(e.style,{position:"fixed",right:"0",bottom:"0",width:"0",height:"0",border:"0"}),document.body.appendChild(e);const i=`<!doctype html>
<html><head><meta charset="utf-8"/>
<title>IP Info</title>
<style>
@page{margin:16px}
body{font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;color:#111}
.card{max-width:720px;margin:0 auto;border:1px solid #ddd;border-radius:12px;padding:16px}
h1{font-size:18px;margin:0 0 10px}
.grid{display:grid;grid-template-columns:180px 1fr;gap:6px 12px}
.k{color:#555}.v{color:#111;word-break:break-all}
.muted{color:#777;font-size:12px;margin-top:10px}
</style></head>
<body>
<div class="card">
<h1>IP Info</h1>
<div class="grid">
${n.map(([s,h])=>`<div class="k">${s}</div><div class="v">${h??"—"}</div>`).join("")}
</div>
<div class="muted">Location source: ${l.locationSource}</div>
</div>
<script>onload=()=>{print();setTimeout(()=>close(),300)}<\/script>
</body></html>`,o=e.contentDocument||e.contentWindow.document;o.open(),o.write(i),o.close()}function F(n){const e=n.latitude!=null&&n.longitude!=null?`https://www.openstreetmap.org/?mlat=${n.latitude}&mlon=${n.longitude}#map=12/${n.latitude}/${n.longitude}`:null;return[["IPv4",c(n.ipv4)],["IPv6",c(n.ipv6)],["ISP / Org",c(n.isp||n.org)],["ASN",c(n.asn)],["Country",c(n.country)],["Region/State",c(n.region)],["City",c(n.city)],["Postal",c(n.postal)],["Latitude",n.latitude??"—"],["Longitude",n.longitude??"—"],["Map",e||"—"],["Timezone",c(n.timezone)],["UTC Offset",c(n.utc_offset)],["Device (UA)",c(n.userAgent)],["Connection",c(n.connection)]]}function c(n){return n==null||n===""?"—":String(n)}const k=l.latitude!=null&&l.longitude!=null?`https://www.openstreetmap.org/?mlat=${l.latitude}&mlon=${l.longitude}#map=12/${l.latitude}/${l.longitude}`:null;return t.jsxs(f.Wrapper,{children:[t.jsxs(f.Header,{children:[t.jsx("div",{className:"title",children:"IP Info"}),t.jsxs("div",{className:"actions",children:[t.jsx("button",{onClick:S,disabled:w,children:w?"Refreshing...":"Refresh"}),t.jsx("button",{onClick:_,disabled:C,children:C?"Locating…":"Use Precise Location"}),t.jsx("button",{onClick:U,children:v==="json"?"Copied!":"Copy JSON"}),t.jsx("button",{onClick:E,children:"Print"})]})]}),t.jsxs(f.Card,{id:"ipInfoCard",children:[t.jsxs(f.Grid,{children:[t.jsx("span",{children:"Location Source"}),t.jsx("div",{className:"val",children:t.jsx("code",{children:l.locationSource})}),t.jsx("span",{children:"IPv4"}),t.jsxs("div",{className:"val",children:[t.jsx("code",{children:l.ipv4||"—"}),!!l.ipv4&&t.jsx("button",{onClick:()=>y(l.ipv4,"ipv4"),children:v==="ipv4"?"Copied!":"Copy"})]}),t.jsx("span",{children:"IPv6"}),t.jsxs("div",{className:"val",children:[t.jsx("code",{children:l.ipv6||"—"}),!!l.ipv6&&t.jsx("button",{onClick:()=>y(l.ipv6,"ipv6"),children:v==="ipv6"?"Copied!":"Copy"})]}),t.jsx("span",{children:"ISP / Org"}),t.jsx("div",{className:"val",children:l.isp||l.org||"—"}),t.jsx("span",{children:"ASN"}),t.jsx("div",{className:"val",children:l.asn||"—"}),t.jsx("span",{children:"Country"}),t.jsx("div",{className:"val",children:l.country||"—"}),t.jsx("span",{children:"Region/State"}),t.jsx("div",{className:"val",children:l.region||"—"}),t.jsx("span",{children:"City"}),t.jsx("div",{className:"val",children:l.city||"—"}),t.jsx("span",{children:"Postal"}),t.jsx("div",{className:"val",children:l.postal||"—"}),t.jsx("span",{children:"Latitude"}),t.jsx("div",{className:"val",children:l.latitude??"—"}),t.jsx("span",{children:"Longitude"}),t.jsx("div",{className:"val",children:l.longitude??"—"}),t.jsx("span",{children:"Map"}),t.jsx("div",{className:"val",children:k?t.jsx("a",{href:k,target:"_blank",rel:"noreferrer",children:"Open on Map"}):"—"}),t.jsx("span",{children:"Timezone"}),t.jsx("div",{className:"val",children:l.timezone||"—"}),t.jsx("span",{children:"UTC Offset"}),t.jsx("div",{className:"val",children:l.utc_offset||"—"}),t.jsx("span",{children:"Device (UA)"}),t.jsx("div",{className:"val ua",children:l.userAgent||"—"}),t.jsx("span",{children:"Connection"}),t.jsx("div",{className:"val",children:l.connection||"—"})]}),t.jsx(f.FootNote,{children:"IP geolocation can show your ISP’s hub city (e.g., Chennai) instead of your actual city (Bengaluru). Use “Precise Location” for device-based accuracy."})]})]})}export{J as default};
