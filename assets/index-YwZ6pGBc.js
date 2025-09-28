import{d as m,r as d,j as e}from"./index-DoJIY-L5.js";const k="var(--card, #0f1012)",b="var(--text, #eaeaea)",u="var(--muted, #a8a8a8)",l="var(--border, #242424)",$="var(--accent, #22c55e)",j="var(--radius, 16px)",z="var(--shadow, 0 10px 30px rgba(0,0,0,0.35))",h={Wrapper:m.div`
        display: flex;
        flex-direction: column;
        gap: 16px;
        color: ${b};
        padding: 15px;
        max-width: 1440px;
        margin: auto;
    `,Header:m.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 12px 14px;
        background: ${k};
        border: 1px solid ${l};
        border-radius: ${j};
        box-shadow: ${z};

        .title {
            font-size: 20px;
            font-weight: 600;
            letter-spacing: 0.2px;
        }
        .controls {
            display: flex;
            align-items: center;
            gap: 8px;
            flex-wrap: wrap;
        }
        input {
            width: 280px;
            max-width: 52vw;
            background: #0b0b0b;
            border: 1px solid ${l};
            border-radius: 10px;
            padding: 8px 10px;
            color: ${b};
            outline: none;
        }
        button {
            padding: 8px 12px;
            border: 1px solid ${l};
            border-radius: 10px;
            background: #141414;
            color: ${b};
            font-size: 14px;
            cursor: pointer;
        }
        button:hover {
            border-color: ${$};
        }
        button:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
        .split {
            width: 8px;
        }
        .active {
            border-color: ${$};
            outline: 1px solid ${$};
        }
    `,Body:m.div`
        display: grid;
        grid-template-columns: 320px 1fr;
        gap: 16px;

        @media (max-width: 980px) {
            grid-template-columns: 1fr;
        }
    `,Sidebar:m.aside`
        background: ${k};
        border: 1px solid ${l};
        border-radius: ${j};
        box-shadow: ${z};
        padding: 12px;

        .row.head {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 8px;

            .saveButton {
                border: 1px solid #f00;
                padding: 8px 12px;
                border: 1px solid ${l};
                border-radius: 10px;
                background: #141414;
                color: ${b};
                font-size: 14px;
                cursor: pointer;

                &:hover {
                    border-color: ${$};
                }
            }
        }
        .muted {
            color: ${u};
            font-size: 13px;
        }
        .chips {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 8px;
        }
        .chip {
            display: inline-flex;
            align-items: center;
            border: 1px solid ${l};
            background: #121212;
            border-radius: 999px;
            overflow: hidden;
        }
        .chip .pick {
            padding: 6px 10px;
            color: ${b};
            background: transparent;
            border: none;
            cursor: pointer;
        }
        .chip .del {
            padding: 6px 10px;
            border-left: 1px solid ${l};
            background: #181818;
            color: ${u};
            cursor: pointer;
        }
        .chip .del:hover {
            color: #ff6666;
        }
        .note {
            margin-top: 12px;
            color: ${u};
            font-size: 12px;
        }
    `,Stage:m.div`
        display: grid;
        align-content: start;
        gap: 12px;
    `,Error:m.div`
        background: #2c0f12;
        border: 1px solid #5a1b21;
        color: #ff9aa2;
        border-radius: ${j};
        padding: 10px 12px;
        font-size: 14px;
    `,Hint:m.div`
        text-align: center;
        color: ${u};
        font-size: 14px;
        padding: 20px 0;
    `,ForecastCard:m.section`
        background: ${k};
        border: 1px solid ${l};
        border-radius: ${j};
        box-shadow: ${z};
        padding: 12px;

        .head {
            display: flex;
            align-items: baseline;
            justify-content: space-between;
            border-bottom: 1px solid ${l};
            padding-bottom: 8px;
            margin-bottom: 12px;
        }
        .city {
            font-size: 18px;
            font-weight: 600;
        }
        .meta {
            color: ${u};
            font-size: 12px;
            margin-top: 2px;
        }
        .now {
            font-size: 22px;
            font-weight: 700;
        }

        .legend {
            display: grid;
            grid-template-columns: 1fr 1fr 80px;
            gap: 8px;
            color: ${u};
            font-size: 12px;
            margin-bottom: 4px;
        }

        .rows {
            display: grid;
            grid-template-columns: 1fr 1fr 80px;
            gap: 8px;
        }
        .row {
            display: contents;
        }
        .d,
        .t,
        .p {
            padding: 8px 0;
            border-bottom: 1px dashed ${l};
        }
        .t {
            text-align: left;
        }
        .p {
            text-align: right;
        }
        .max {
            font-weight: 600;
        }
        .min {
            color: ${u};
        }
        .sep {
            color: ${u};
        }

        .actions {
            display: flex;
            gap: 8px;
            justify-content: flex-end;
            margin-top: 10px;
        }
        .actions button {
            padding: 8px 12px;
            border: 1px solid ${l};
            border-radius: 10px;
            background: #141414;
            color: ${b};
            font-size: 14px;
            cursor: pointer;
        }
        .actions button:hover {
            border-color: ${$};
        }
    `},_="reactWeatherApp.cities",B="reactWeatherApp.unit",O="reactWeatherApp.last";function Z(){const[I,U]=d.useState(""),[p,R]=d.useState(()=>localStorage.getItem(B)||"C"),[a,S]=d.useState(()=>{const t=localStorage.getItem(O);return t?JSON.parse(t):null}),[y,T]=d.useState(()=>{try{const t=localStorage.getItem(_);return t?JSON.parse(t):[]}catch{return[]}}),[g,H]=d.useState(null),[C,v]=d.useState(!1),[A,w]=d.useState(""),J=d.useRef(null);d.useEffect(()=>{localStorage.setItem(B,p)},[p]),d.useEffect(()=>{a&&(P(a),localStorage.setItem(O,JSON.stringify(a)))},[a]);async function E(){const t=(I||"").trim();if(t){w(""),v(!0);try{const i=`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(t)}&count=1&language=en&format=json`,o=await(await fetch(i)).json();if(!o.results||!o.results.length){w("City not found. Try a different name."),v(!1);return}const r=o.results[0],s={name:r.name,country:r.country,latitude:r.latitude,longitude:r.longitude,timezone:r.timezone||"auto"};S(s)}catch{w("Could not search right now. Check your connection.")}finally{v(!1)}}}async function P(t){var i;w(""),v(!0);try{const{latitude:n,longitude:o,timezone:r}=t,s=`https://api.open-meteo.com/v1/forecast?latitude=${n}&longitude=${o}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=${encodeURIComponent(r||"auto")}`,x=await(await fetch(s)).json(),Q=x.current_weather?{tempC:x.current_weather.temperature,wind:x.current_weather.windspeed,time:x.current_weather.time}:null,Y=(((i=x.daily)==null?void 0:i.time)||[]).map((V,N)=>{var D,L,W;return{date:V,minC:((D=x.daily.temperature_2m_min)==null?void 0:D[N])??null,maxC:((L=x.daily.temperature_2m_max)==null?void 0:L[N])??null,pop:((W=x.daily.precipitation_probability_max)==null?void 0:W[N])??null}});H({current:Q,daily:Y,fetchedAt:new Date().toISOString()})}catch{w("Could not load forecast.")}finally{v(!1)}}function M(){if(!a||y.some(n=>n.latitude===a.latitude&&n.longitude===a.longitude&&n.name===a.name))return;const i=[a,...y].slice(0,8);T(i),localStorage.setItem(_,JSON.stringify(i))}function q(t){const i=y.filter((n,o)=>o!==t);T(i),localStorage.setItem(_,JSON.stringify(i))}function G(t){S(t)}function F(t){return t==null?null:t*9/5+32}const f=d.useMemo(()=>{var s;if(!g)return null;const t=p==="C",i=c=>c==null?"—":Math.round(t?c:F(c))+`°${p}`,n=(g.daily||[]).map(c=>({...c,min:i(c.minC),max:i(c.maxC),day:new Date(c.date).toLocaleDateString("en-GB",{weekday:"short",day:"2-digit",month:"short"})})),o=((s=g.current)==null?void 0:s.tempC)??null;return{now:o==null?"—":Math.round(t?o:F(o))+`°${p}`,days:n}},[g,p]);function K(){if(!a||!f)return;const t=`${a.name}${a.country?", "+a.country:""}`,i=(f.days||[]).map(s=>`
      <div class="row">
        <div class="d">${s.day}</div>
        <div class="t"><span class="max">${s.max}</span> / <span class="min">${s.min}</span></div>
        <div class="p">${s.pop!=null?s.pop+"%":"—"}</div>
      </div>`).join(""),n=`<!doctype html>
<html>
  <head>
    <meta charset="utf-8"/>
    <title>Print Forecast</title>
    <style>
      @page { margin: 0; }
      html, body { margin: 0; padding: 0; background: #fff; }
      .card {
        box-sizing: border-box;
        width: 100%;
        max-width: 900px;
        margin: 0 auto;
        padding: 20px;
        font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
        color: #111;
      }
      .header {
        display: flex; align-items: baseline; justify-content: space-between;
        border-bottom: 1px solid #ddd; padding-bottom: 8px; margin-bottom: 12px;
      }
      .title { font-size: 22px; font-weight: 700; }
      .now { font-size: 20px; font-weight: 600; }
      .meta { font-size: 12px; color: #666; margin-top: 2px; }
      .grid { display: grid; grid-template-columns: 1fr auto auto; gap: 8px; }
      .row { display: contents; }
      .d { padding: 6px 0; border-bottom: 1px dashed #eee; }
      .t { padding: 6px 0; border-bottom: 1px dashed #eee; text-align: right; }
      .p { padding: 6px 0; border-bottom: 1px dashed #eee; text-align: right; }
      .max { font-weight: 600; }
      .min { color: #666; }
      .legend { display: grid; grid-template-columns: 1fr auto auto; gap: 8px; font-size: 12px; color: #666; margin-bottom: 4px; }
    </style>
  </head>
  <body>
    <div class="card">
      <div class="header">
        <div>
          <div class="title">${t}</div>
          <div class="meta">7-day forecast • Printed from Freelance Apps Hub</div>
        </div>
        <div class="now">${f.now}</div>
      </div>

      <div class="legend">
        <div>Day</div><div>Temp</div><div>Rain%</div>
      </div>
      <div class="grid">
        ${i}
      </div>
    </div>
    <script>window.onload = () => { window.print(); setTimeout(() => window.close(), 400); };<\/script>
  </body>
</html>`,o=document.createElement("iframe");o.style.position="fixed",o.style.right="0",o.style.bottom="0",o.style.width="0",o.style.height="0",o.style.border="0",document.body.appendChild(o);const r=o.contentDocument||o.contentWindow.document;r.open(),r.write(n),r.close()}return e.jsxs(h.Wrapper,{children:[e.jsxs(h.Header,{children:[e.jsx("div",{className:"title",children:"React Weather App"}),e.jsxs("div",{className:"controls",children:[e.jsx("input",{value:I,onChange:t=>U(t.target.value),placeholder:"Search city (e.g., Bengaluru, London)",onKeyDown:t=>t.key==="Enter"&&E()}),e.jsx("button",{onClick:E,disabled:C,children:C?"Searching...":"Search"}),e.jsx("div",{className:"split"}),e.jsx("button",{className:p==="C"?"active":"",onClick:()=>R("C"),title:"Show °C",children:"°C"}),e.jsx("button",{className:p==="F"?"active":"",onClick:()=>R("F"),title:"Show °F",children:"°F"})]})]}),e.jsxs(h.Body,{children:[e.jsxs(h.Sidebar,{children:[e.jsxs("div",{className:"row head",children:[e.jsx("div",{children:"Saved Cities"}),e.jsx("button",{onClick:M,disabled:!a,title:"Save current city",className:"saveButton",children:"+ Save"})]}),y.length===0&&e.jsx("div",{className:"muted",children:"No saved cities yet."}),e.jsx("div",{className:"chips",children:y.map((t,i)=>e.jsxs("div",{className:"chip",children:[e.jsxs("button",{className:"pick",onClick:()=>G(t),children:[t.name,t.country?`, ${t.country}`:""]}),e.jsx("button",{className:"del",title:"Remove",onClick:()=>q(i),children:"×"})]},`${t.name}-${t.latitude}-${i}`))}),e.jsx("div",{className:"note",children:"Tip: Search a city → click **+ Save** to keep it here."})]}),e.jsxs(h.Stage,{children:[A&&e.jsx(h.Error,{children:A}),!a&&!C&&e.jsx(h.Hint,{children:"Search a city to load the forecast."}),a&&g&&f&&e.jsxs(h.ForecastCard,{ref:J,children:[e.jsxs("div",{className:"head",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"city",children:[a.name,a.country?`, ${a.country}`:""]}),e.jsxs("div",{className:"meta",children:["Updated:"," ",new Date(g.fetchedAt).toLocaleString("en-GB",{hour12:!1,year:"numeric",month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit"})]})]}),e.jsx("div",{className:"now",children:f.now})]}),e.jsxs("div",{className:"legend",children:[e.jsx("div",{children:"Day"}),e.jsx("div",{children:"Temp"}),e.jsx("div",{children:"Rain%"})]}),e.jsx("div",{className:"rows",children:f.days.map(t=>e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"d",children:t.day}),e.jsxs("div",{className:"t",children:[e.jsx("span",{className:"max",children:t.max})," ",e.jsx("span",{className:"sep",children:"/"})," ",e.jsx("span",{className:"min",children:t.min})]}),e.jsx("div",{className:"p",children:t.pop!=null?`${t.pop}%`:"—"})]},t.date))}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{onClick:()=>S(null),children:"Clear"}),e.jsx("button",{onClick:K,children:"Print"})]})]})]})]})]})}export{Z as default};
