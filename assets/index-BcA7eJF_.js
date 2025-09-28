import{d as r,r as p,j as t}from"./index-C86gdwjR.js";const g="var(--card, #0f1012)",c="var(--text, #eaeaea)",u="var(--muted, #a8a8a8)",s="var(--border, #242424)",b="var(--accent, #22c55e)",E="var(--danger, #ef4444)",h="var(--radius, 16px)",y="var(--shadow, 0 10px 30px rgba(0,0,0,0.35))",a={Wrapper:r.div`
        display: flex;
        flex-direction: column;
        gap: 16px;
        color: ${c};
        max-width: 1440px;
        margin: auto;
        padding: 15px;
    `,Header:r.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 12px 14px;
        background: ${g};
        border: 1px solid ${s};
        border-radius: ${h};
        box-shadow: ${y};

        .title {
            font-size: 20px;
            font-weight: 600;
        }
        .actions {
            display: flex;
            gap: 10px;
        }
        button {
            padding: 8px 12px;
            border: 1px solid ${s};
            border-radius: 10px;
            background: #141414;
            color: ${c};
            font-size: 14px;
            cursor: pointer;
        }
        button:hover {
            border-color: ${b};
        }
        button:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
    `,Body:r.div`
        display: grid;
        grid-template-columns: 320px 1fr;
        gap: 16px;
        @media (max-width: 980px) {
            grid-template-columns: 1fr;
        }
    `,Sidebar:r.aside`
        background: ${g};
        border: 1px solid ${s};
        border-radius: ${h};
        box-shadow: ${y};
        padding: 12px;
    `,SectionTitle:r.div`
        font-weight: 600;
        font-size: 13px;
        margin: 6px 0 8px;
        color: ${u};
    `,Chips:r.div`
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-bottom: 10px;

        .chip {
            padding: 6px 10px;
            border: 1px solid ${s};
            border-radius: 999px;
            background: #131313;
            color: ${c};
            font-size: 13px;
            cursor: pointer;
            transition: border-color 0.15s ease;
        }
        .chip[data-active="1"] {
            border-color: ${b};
            outline: 1px solid ${b};
        }
    `,Row:r.div`
        display: flex;
        align-items: center;
        gap: 8px;
        margin: 8px 0 6px;

        .toggle {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-size: 13px;
            color: ${u};
            user-select: none;
        }
        input[type="checkbox"] {
            width: 16px;
            height: 16px;
        }
    `,SmallMuted:r.div`
        color: ${u};
        font-size: 12px;
    `,Main:r.div`
        display: grid;
        gap: 12px;
    `,Toolbar:r.div`
        display: flex;
        gap: 10px;
        align-items: center;

        button {
            padding: 8px 12px;
            border: 1px solid ${s};
            border-radius: 10px;
            background: #161616;
            color: ${c};
            font-size: 14px;
            cursor: pointer;
        }
        button:hover {
            border-color: ${b};
        }
        button:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
    `,Card:r.div`
        background: ${g};
        border: 1px solid ${s};
        border-radius: ${h};
        box-shadow: ${y};
        padding: 16px;

        .title {
            font-size: 22px;
            font-weight: 700;
            margin-bottom: 4px;
        }
        .meta {
            color: ${u};
            font-size: 14px;
            margin-bottom: 8px;
        }
        .chips {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            margin: 8px 0 10px;
        }
        .chip {
            font-size: 12px;
            border: 1px solid ${s};
            padding: 4px 8px;
            border-radius: 999px;
            color: ${c};
        }
        .blurb {
            font-size: 14px;
            color: ${c};
            opacity: 0.95;
        }
        hr {
            border: none;
            border-top: 1px solid ${s};
            margin: 12px 0;
            opacity: 0.6;
        }
        .best {
            font-size: 13px;
            color: ${u};
        }
    `,Hint:r.div`
        text-align: center;
        color: ${u};
        font-size: 14px;
        padding: 20px 0 6px;
    `,H2:r.div`
        font-size: 16px;
        font-weight: 600;
        margin-top: 8px;
    `,HistoryGrid:r.div`
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
        gap: 10px;
    `,HistoryCard:r.div`
        background: ${g};
        border: 1px solid ${s};
        border-radius: ${h};
        padding: 12px;
        box-shadow: ${y};

        .t {
            font-weight: 600;
            margin-bottom: 4px;
        }
        .m {
            color: ${u};
            font-size: 13px;
            margin-bottom: 8px;
        }
        .chips {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            margin-bottom: 10px;
        }
        .chip {
            font-size: 11px;
            border: 1px solid ${s};
            padding: 3px 8px;
            border-radius: 999px;
        }
        .row {
            display: flex;
            gap: 8px;
        }
        .ghost {
            background: transparent;
            border: 1px solid ${s};
            color: ${c};
        }
        button {
            padding: 6px 10px;
            border-radius: 10px;
            background: #161616;
            color: ${c};
            border: 1px solid ${s};
            cursor: pointer;
            font-size: 13px;
        }
        button:hover {
            border-color: ${b};
        }
    `,ModalBackdrop:r.div`
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.6);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
    `,ModalCard:r.div`
        width: min(420px, 92vw);
        background: ${g};
        border: 1px solid ${s};
        border-radius: ${h};
        box-shadow: ${y};
        padding: 16px;

        .title {
            font-weight: 600;
            margin-bottom: 6px;
            color: ${c};
        }
        .msg {
            color: ${u};
            font-size: 14px;
            margin-bottom: 12px;
        }
        .row {
            display: flex;
            gap: 8px;
            justify-content: flex-end;
        }

        button {
            padding: 8px 12px;
            border: 1px solid ${s};
            border-radius: 10px;
            background: #141414;
            color: ${c};
            cursor: pointer;
            font-size: 14px;
        }
        button:hover {
            border-color: ${b};
        }
        .ghost {
            background: transparent;
        }
        .danger {
            background: #1a0f10;
            border-color: ${E};
        }
    `},I=[{id:"goa",name:"Goa",country:"India",continent:"Asia",climate:["Tropical"],budget:"mid",best:"Nov–Feb",blurb:"Beaches, cafes, easy scooter days."},{id:"jaipur",name:"Jaipur",country:"India",continent:"Asia",climate:["Arid"],budget:"budget",best:"Oct–Mar",blurb:"Fort walks, bazaars, pink sunsets."},{id:"bali",name:"Bali",country:"Indonesia",continent:"Asia",climate:["Tropical"],budget:"mid",best:"May–Sep",blurb:"Rice terraces, surf towns, temples."},{id:"tokyo",name:"Tokyo",country:"Japan",continent:"Asia",climate:["Temperate"],budget:"luxury",best:"Mar–May, Oct–Nov",blurb:"Neon lanes, ramen bars, calm parks."},{id:"paris",name:"Paris",country:"France",continent:"Europe",climate:["Temperate"],budget:"luxury",best:"Apr–Jun, Sep–Oct",blurb:"Museums, riverside walks, patisserie."},{id:"rome",name:"Rome",country:"Italy",continent:"Europe",climate:["Mediterranean"],budget:"mid",best:"Apr–Jun, Sep–Oct",blurb:"Ruins + gelato + piazzas."},{id:"barcelona",name:"Barcelona",country:"Spain",continent:"Europe",climate:["Mediterranean"],budget:"mid",best:"May–Jun, Sep",blurb:"Gaudí, tapas, beach tramways."},{id:"prague",name:"Prague",country:"Czechia",continent:"Europe",climate:["Temperate"],budget:"budget",best:"Apr–Jun, Sep–Oct",blurb:"Old town bridges, cobblestone charm."},{id:"cappadocia",name:"Cappadocia",country:"Türkiye",continent:"Asia",climate:["Arid"],budget:"mid",best:"Apr–Jun, Sep–Oct",blurb:"Balloon sunrises, cave stays."},{id:"istanbul",name:"Istanbul",country:"Türkiye",continent:"Europe",climate:["Mediterranean"],budget:"mid",best:"Apr–Jun, Sep–Oct",blurb:"Bazaars, ferries, layered history."},{id:"dubai",name:"Dubai",country:"UAE",continent:"Asia",climate:["Arid"],budget:"luxury",best:"Nov–Mar",blurb:"Skyline views, desert drives."},{id:"cairo",name:"Cairo",country:"Egypt",continent:"Africa",climate:["Arid"],budget:"budget",best:"Oct–Apr",blurb:"Pyramids, Nile evenings, museums."},{id:"marrakesh",name:"Marrakesh",country:"Morocco",continent:"Africa",climate:["Arid"],budget:"mid",best:"Mar–May, Sep–Nov",blurb:"Riads, souks, orange courtyards."},{id:"capeTown",name:"Cape Town",country:"South Africa",continent:"Africa",climate:["Mediterranean"],budget:"mid",best:"Nov–Mar",blurb:"Table Mountain, ocean drives."},{id:"reykjavik",name:"Reykjavík",country:"Iceland",continent:"Europe",climate:["Polar"],budget:"luxury",best:"Feb–Mar, Sep–Oct",blurb:"Auroras, lagoons, quiet roads."},{id:"bangkok",name:"Bangkok",country:"Thailand",continent:"Asia",climate:["Tropical"],budget:"budget",best:"Nov–Feb",blurb:"Street food, canals, night markets."},{id:"siemReap",name:"Siem Reap",country:"Cambodia",continent:"Asia",climate:["Tropical"],budget:"budget",best:"Nov–Feb",blurb:"Angkor sunrise cycles."},{id:"hanoi",name:"Hanoi",country:"Vietnam",continent:"Asia",climate:["Tropical"],budget:"budget",best:"Oct–Apr",blurb:"Old quarter, coffee corners."},{id:"queenstown",name:"Queenstown",country:"New Zealand",continent:"Oceania",climate:["Temperate","Alpine"],budget:"luxury",best:"Dec–Mar",blurb:"Lakes, trails, adventure hubs."},{id:"sydney",name:"Sydney",country:"Australia",continent:"Oceania",climate:["Temperate"],budget:"luxury",best:"Sep–Nov, Mar–May",blurb:"Harbour walks, coastal pools."},{id:"buenosAires",name:"Buenos Aires",country:"Argentina",continent:"South America",climate:["Temperate"],budget:"mid",best:"Mar–May, Sep–Nov",blurb:"Cafés, tango, leafy avenues."},{id:"cusco",name:"Cusco",country:"Peru",continent:"South America",climate:["Alpine"],budget:"mid",best:"May–Sep",blurb:"Inca stonework, crisp skies."},{id:"mexicoCity",name:"Mexico City",country:"Mexico",continent:"North America",climate:["Temperate"],budget:"mid",best:"Mar–May, Sep–Nov",blurb:"Museums, tacos, neighborhoods."},{id:"vancouver",name:"Vancouver",country:"Canada",continent:"North America",climate:["Temperate"],budget:"luxury",best:"Jun–Sep",blurb:"Mountains meet the sea."}],B=["Asia","Europe","Africa","North America","South America","Oceania"],J=["Tropical","Temperate","Arid","Mediterranean","Alpine","Polar"],F=["any","budget","mid","luxury"],C="randomTravel:filters",N="randomTravel:history";function D(){const[n,m]=p.useState(()=>{const e=localStorage.getItem(C);return e?JSON.parse(e):{continents:[],climes:[],budget:"any",allowRepeats:!1}}),[d,w]=p.useState(()=>{const e=localStorage.getItem(N);return e?JSON.parse(e):[]}),[o,k]=p.useState(null),[A,f]=p.useState(!1),j=p.useRef(null);p.useEffect(()=>{localStorage.setItem(C,JSON.stringify(n))},[n]),p.useEffect(()=>{localStorage.setItem(N,JSON.stringify(d))},[d]);const S=p.useMemo(()=>I.filter(e=>{const i=n.continents.length?n.continents.includes(e.continent):!0,l=n.climes.length?e.climate.some(x=>n.climes.includes(x)):!0,v=n.budget==="any"?!0:e.budget===n.budget;return i&&l&&v}),[n]);function $(e,i){return e.includes(i)?e.filter(l=>l!==i):[...e,i]}function M(){let e=S;if(!n.allowRepeats&&d.length){const l=new Set(d.map(x=>x.id)),v=e.filter(x=>!l.has(x.id));v.length&&(e=v)}if(!e.length){k(null);return}const i=e[Math.floor(Math.random()*e.length)];k(i)}function T(){o&&(d.some(e=>e.id===o.id)||w([{...o,savedAt:Date.now()},...d]))}function z(e){w(d.filter(i=>i.id!==e))}function R(){w([]),f(!1)}function O(){m({continents:[],climes:[],budget:"any",allowRepeats:!1})}function H(){if(!j.current)return;const e=j.current.outerHTML,i=document.createElement("iframe");i.style.position="fixed",i.style.right="0",i.style.bottom="0",i.style.width="0",i.style.height="0",i.style.border="0",document.body.appendChild(i);const l=i.contentDocument||i.contentWindow.document;l.open(),l.write(`<!doctype html>
<html>
  <head>
    <meta charset="utf-8"/>
    <title>Print</title>
    <style>
      @page { margin: 0; }
      html, body { margin:0; padding:0; background:#fff; }
      * { box-sizing: border-box; }
      body { font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; }
      .printCard {
        width: 100%;
        max-width: 720px;
        margin: 0 auto;
        padding: 16px;
      }
      .title { font-size: 22px; font-weight: 700; margin: 0 0 6px; }
      .meta { font-size: 14px; color: #444; margin-bottom: 10px; }
      .chips { display:flex; flex-wrap:wrap; gap:6px; margin: 8px 0 10px; }
      .chip { font-size:12px; border:1px solid #ddd; padding:4px 8px; border-radius:999px; }
      .blurb { font-size: 14px; color: #111; }
      hr { border: none; border-top: 1px solid #eee; margin: 12px 0; }
      .best { font-size: 13px; color:#333; }
    </style>
  </head>
  <body>
    ${e.replace('class="card"','class="printCard"')}
    <script>window.onload = () => { window.focus(); window.print(); setTimeout(()=>window.close(), 300); };<\/script>
  </body>
</html>`),l.close()}return t.jsxs(a.Wrapper,{children:[t.jsxs(a.Header,{children:[t.jsx("div",{className:"title",children:"Random Travel Destination"}),t.jsxs("div",{className:"actions",children:[t.jsx("button",{onClick:O,children:"Reset Filters"}),t.jsx("button",{onClick:()=>f(!0),disabled:!d.length,children:"Clear History"}),t.jsx("button",{onClick:H,disabled:!o,children:"Print Pick"})]})]}),t.jsxs(a.Body,{children:[t.jsxs(a.Sidebar,{children:[t.jsx(a.SectionTitle,{children:"Continents"}),t.jsx(a.Chips,{children:B.map(e=>t.jsx("button",{className:"chip","data-active":n.continents.includes(e)?"1":"",onClick:()=>m({...n,continents:$(n.continents,e)}),children:e},e))}),t.jsx(a.SectionTitle,{children:"Climate"}),t.jsx(a.Chips,{children:J.map(e=>t.jsx("button",{className:"chip","data-active":n.climes.includes(e)?"1":"",onClick:()=>m({...n,climes:$(n.climes,e)}),children:e},e))}),t.jsx(a.SectionTitle,{children:"Budget"}),t.jsx(a.Chips,{children:F.map(e=>t.jsx("button",{className:"chip","data-active":n.budget===e?"1":"",onClick:()=>m({...n,budget:e}),children:e==="any"?"Any":e[0].toUpperCase()+e.slice(1)},e))}),t.jsx(a.Row,{children:t.jsxs("label",{className:"toggle",children:[t.jsx("input",{type:"checkbox",checked:n.allowRepeats,onChange:e=>m({...n,allowRepeats:e.target.checked})}),t.jsx("span",{children:"Allow repeats when spinning"})]})}),t.jsxs(a.SmallMuted,{children:[S.length," match",S.length===1?"":"es"," now"]})]}),t.jsxs(a.Main,{children:[t.jsxs(a.Toolbar,{children:[t.jsx("button",{onClick:M,children:"Spin"}),t.jsx("button",{onClick:T,disabled:!o||d.some(e=>e.id===(o==null?void 0:o.id)),children:"Save to History"})]}),o?t.jsxs(a.Card,{ref:j,className:"card",children:[t.jsx("div",{className:"title",children:o.name}),t.jsxs("div",{className:"meta",children:[o.country," • ",o.continent]}),t.jsxs("div",{className:"chips",children:[o.climate.map(e=>t.jsx("span",{className:"chip",children:e},e)),t.jsx("span",{className:"chip",children:o.budget})]}),t.jsx("p",{className:"blurb",children:o.blurb}),t.jsx("hr",{}),t.jsxs("div",{className:"best",children:["Best months: ",o.best]})]}):t.jsxs(a.Hint,{children:["Select filters (optional) and hit ",t.jsx("b",{children:"Spin"}),"."]}),t.jsx(a.H2,{children:"Saved Ideas"}),d.length?t.jsx(a.HistoryGrid,{children:d.map(e=>t.jsxs(a.HistoryCard,{children:[t.jsx("div",{className:"t",children:e.name}),t.jsxs("div",{className:"m",children:[e.country," • ",e.continent]}),t.jsxs("div",{className:"chips",children:[e.climate.map(i=>t.jsx("span",{className:"chip",children:i},i)),t.jsx("span",{className:"chip",children:e.budget})]}),t.jsxs("div",{className:"row",children:[t.jsx("button",{onClick:()=>k(e),children:"View"}),t.jsx("button",{className:"ghost",onClick:()=>z(e.id),children:"Remove"})]})]},e.id))}):t.jsx(a.SmallMuted,{children:"No saved picks yet."})]})]}),A&&t.jsx(a.ModalBackdrop,{onClick:()=>f(!1),children:t.jsxs(a.ModalCard,{onClick:e=>e.stopPropagation(),children:[t.jsx("div",{className:"title",children:"Clear saved ideas?"}),t.jsx("div",{className:"msg",children:"This removes all saved picks."}),t.jsxs("div",{className:"row",children:[t.jsx("button",{className:"ghost",onClick:()=>f(!1),children:"Cancel"}),t.jsx("button",{className:"danger",onClick:R,children:"Yes, clear"})]})]})})]})}export{D as default};
