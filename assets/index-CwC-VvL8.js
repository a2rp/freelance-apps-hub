import{d as L,r as i,j as e}from"./index-y6tO3zCf.js";const I="var(--card, #111)",m="var(--text, #e9e9e9)",p="var(--muted, #b7b7b7)",h="var(--border, #222)",b="var(--accent, #22c55e)",P="var(--danger, #ef4444)",j="var(--radius, 16px)",U="var(--shadow, 0 8px 30px rgba(0,0,0,0.25))",W={Wrapper:L.section`
        max-width: 1120px;
        margin: 0 auto;
        padding: 24px;
        color: ${m};

        .header {
            display: flex;
            gap: 16px;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 16px;

            h2 {
                font-size: 20px;
                font-weight: 600;
                letter-spacing: 0.2px;
            }

            .controls {
                display: flex;
                align-items: center;
                gap: 10px;
                select {
                    background: ${I};
                    color: ${m};
                    border: 1px solid ${h};
                    padding: 8px 10px;
                    border-radius: 10px;
                    outline: none;
                }
                .refreshBtn {
                    background: ${b};
                    color: #0b0b0b;
                    border: 0;
                    padding: 8px 12px;
                    border-radius: 10px;
                    cursor: pointer;
                    font-weight: 600;
                }
                .refreshBtn[disabled] {
                    opacity: 0.6;
                    cursor: default;
                }
            }
        }

        .error {
            background: #1a1a1a;
            border: 1px solid ${h};
            color: ${P};
            padding: 12px 14px;
            border-radius: ${j};
            margin-bottom: 12px;
        }

        .statsGrid {
            display: grid;
            grid-template-columns: repeat(6, 1fr);
            gap: 14px;
            @media (max-width: 1200px) {
                grid-template-columns: repeat(3, 1fr);
            }
            @media (max-width: 720px) {
                grid-template-columns: repeat(2, 1fr);
            }
            @media (max-width: 480px) {
                grid-template-columns: 1fr;
            }

            .card {
                background: ${I};
                border: 1px solid ${h};
                border-radius: ${j};
                box-shadow: ${U};
                padding: 14px;
                display: flex;
                flex-direction: column;
                gap: 6px;
                min-height: 110px;
                h4 {
                    font-size: 12px;
                    color: ${p};
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.8px;
                }
                .big {
                    font-size: 22px;
                    font-weight: 700;
                    line-height: 1.2;
                }
                .delta {
                    font-size: 12px;
                    color: ${p};
                }
            }

            .cases .big {
                color: #eab308;
            }
            .active .big {
                color: #60a5fa;
            }
            .recovered .big {
                color: #22c55e;
            }
            .deaths .big {
                color: #f87171;
            }
            .tests .big {
                color: #a78bfa;
            }
            .population .big {
                color: #f59e0b;
            }
        }

        .meta {
            margin-top: 14px;
            display: flex;
            gap: 16px;
            flex-wrap: wrap;
            color: ${p};
            a {
                color: ${b};
                text-decoration: none;
            }
        }

        .notice {
            margin-top: 14px;
            background: #0f0f0f;
            border: 1px solid ${h};
            border-left: 3px solid ${b};
            border-radius: ${j};
            padding: 12px 14px;
            color: ${p};

            h5 {
                margin: 0 0 6px 0;
                color: ${m};
                font-size: 14px;
            }
            ul {
                margin: 6px 0 0 18px;
                padding: 0;
            }
            li {
                margin: 4px 0;
            }
        }

        .sr-only {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
        }
    `},B="https://disease.sh/v3/covid-19";function x(t){if(!t)return"-";const r=new Date(t),s=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],o=n=>String(n).padStart(2,"0");return`${s[r.getMonth()]} ${r.getDate()}, ${r.getFullYear()} ${o(r.getHours())}:${o(r.getMinutes())}:${o(r.getSeconds())} hrs`}function l(t){if(t==null||Number.isNaN(t))return"-";if(typeof t=="number")return t.toLocaleString("en-IN");const r=Number(t);return Number.isFinite(r)?r.toLocaleString("en-IN"):String(t)}function F(t){if(!t)return"";const r=t-Date.now();if(r<=0)return"any time now";const s=Math.floor(r/864e5),o=Math.floor(r%864e5/36e5),n=Math.floor(r%36e5/6e4),d=[];return s&&d.push(`${s}d`),o&&d.push(`${o}h`),(n||!s&&!o)&&d.push(`${n}m`),`in ${d.join(" ")}`}function M(t,r){const s=t.includes("?")?"&":"?";return`${B}${t}${r?`${s}v=${Date.now()}`:""}`}const y=[{key:"global",label:"Global",fetch:(t=!1)=>fetch(M("/all",t),{cache:t?"no-store":"default"}).then(r=>r.json())},{key:"india",label:"India",fetch:(t=!1)=>fetch(M("/countries/India?strict=true",t),{cache:t?"no-store":"default"}).then(r=>r.json())}],K=()=>{const[t,r]=i.useState("india"),[s,o]=i.useState(null),[n,d]=i.useState(null),[O,R]=i.useState(null),[u,$]=i.useState(!1),[v,N]=i.useState(""),w=i.useMemo(()=>y.find(c=>c.key===t)||y[0],[t]),S=async(c={useCacheFirst:!0,force:!1})=>{const{useCacheFirst:z,force:T}=c;N(""),$(!0);const k=`covid-cache:${t}`;try{if(z){const A=localStorage.getItem(k);if(A){const{data:J,updatedAt:E}=JSON.parse(A);o(J),d(E)}}const a=await w.fetch(T),D={cases:a.cases??0,todayCases:a.todayCases??0,deaths:a.deaths??0,todayDeaths:a.todayDeaths??0,recovered:a.recovered??0,active:a.active??Math.max(0,(a.cases||0)-(a.recovered||0)-(a.deaths||0)),tests:a.tests??a.totalTests??null,population:a.population??null,source:"disease.sh"},C=a.updated??Date.now();o(D),d(C),R(Date.now()),localStorage.setItem(k,JSON.stringify({data:D,updatedAt:C}))}catch{s||N("Couldn't fetch live data. Showing nothing right now.")}finally{$(!1)}};i.useEffect(()=>{S({useCacheFirst:!0,force:!1})},[t]);const f=n?n+24*60*60*1e3:null,g=n?n+7*24*60*60*1e3:null;return e.jsxs(W.Wrapper,{children:[e.jsxs("header",{className:"header",children:[e.jsx("h2",{children:"COVID-19 Tracker"}),e.jsxs("div",{className:"controls",children:[e.jsx("label",{className:"sr-only",htmlFor:"scope",children:"Scope"}),e.jsx("select",{id:"scope",value:t,onChange:c=>r(c.target.value),children:y.map(c=>e.jsx("option",{value:c.key,children:c.label},c.key))}),e.jsx("button",{className:"refreshBtn",onClick:()=>S({useCacheFirst:!1,force:!0}),disabled:u,children:u?"Refreshing...":"Refresh"})]})]}),v&&e.jsx("div",{className:"error",children:v}),e.jsxs("section",{className:"statsGrid","aria-busy":u,children:[e.jsxs("article",{className:"card cases",children:[e.jsx("h4",{children:"Total Cases"}),e.jsx("p",{className:"big",children:l(s==null?void 0:s.cases)}),e.jsxs("span",{className:"delta",children:["+",l(s==null?void 0:s.todayCases)," today"]})]}),e.jsxs("article",{className:"card active",children:[e.jsx("h4",{children:"Active"}),e.jsx("p",{className:"big",children:l(s==null?void 0:s.active)})]}),e.jsxs("article",{className:"card recovered",children:[e.jsx("h4",{children:"Recovered"}),e.jsx("p",{className:"big",children:l(s==null?void 0:s.recovered)})]}),e.jsxs("article",{className:"card deaths",children:[e.jsx("h4",{children:"Deaths"}),e.jsx("p",{className:"big",children:l(s==null?void 0:s.deaths)}),e.jsxs("span",{className:"delta",children:["+",l(s==null?void 0:s.todayDeaths)," today"]})]}),e.jsxs("article",{className:"card tests",children:[e.jsx("h4",{children:"Tests"}),e.jsx("p",{className:"big",children:l(s==null?void 0:s.tests)})]}),e.jsxs("article",{className:"card population",children:[e.jsx("h4",{children:"Population"}),e.jsx("p",{className:"big",children:l(s==null?void 0:s.population)})]})]}),e.jsxs("footer",{className:"meta",children:[e.jsxs("span",{children:["Scope: ",e.jsx("b",{children:w.label})]}),e.jsxs("span",{children:["API updated: ",e.jsx("b",{children:x(n)})]}),e.jsxs("span",{children:["Last refreshed: ",e.jsx("b",{children:x(O)})]}),e.jsxs("span",{children:["Source: ",e.jsx("a",{href:"https://disease.sh/",target:"_blank",rel:"noreferrer",children:"disease.sh"})]})]}),e.jsxs("aside",{className:"notice",role:"note","aria-live":"polite",children:[e.jsx("h5",{children:"Update cadence"}),e.jsxs("p",{children:["Upstream providers now publish COVID numbers infrequently (often ",e.jsx("b",{children:"daily"})," or ",e.jsx("b",{children:"weekly"}),", not realtime). If Refresh doesn't change values, the source hasn't updated yet."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("b",{children:"Daily estimate:"})," ",f?`${x(f)} — ${F(f)}`:"-"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Weekly fallback:"})," ",g?`${x(g)} — ${F(g)}`:"-"]})]})]})]})};export{K as default};
