import{d as o,r as j,j as e}from"./index-BexlHE4a.js";const D="var(--card, #111)",v="var(--text, #e9e9e9)",f="var(--muted, #b7b7b7)",u="var(--border, #222)",$="var(--accent, #22c55e)",S="var(--radius, 16px)",A="var(--shadow, 0 8px 30px rgba(0,0,0,0.25))",C=`
  outline: 2px solid ${$};
  outline-offset: 2px;
`,N=`
  display:inline-flex; align-items:center; justify-content:center;
  height:38px; padding:0 14px; border-radius:14px;
  border:1px solid ${u}; background:#151515; color:${v};
  cursor:pointer; transition:transform .04s ease, background .2s ease, border-color .2s ease;
  &:hover{ transform: translateY(-1px); }
  &:active{ transform: translateY(0); }
  &:focus-visible{ ${C} }
`,t={Wrapper:o.div`
        max-width: 980px;
        margin: 0 auto;
        padding: 24px;
        color: ${v};
    `,Header:o.header`
        margin-bottom: 16px;
        .row {
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            gap: 10px;
            flex-wrap: wrap;
        }
        h2 {
            margin: 0;
            font-size: 22px;
        }
        .date {
            color: ${f};
            font-size: 14px;
        }
        .muted {
            color: ${f};
            font-size: 14px;
            margin-top: 6px;
        }
    `,Toolbar:o.form`
        display: flex;
        gap: 10px;
        margin: 12px 0 24px;
        input {
            flex: 1;
            height: 42px;
            border-radius: ${S};
            border: 1px solid ${u};
            background: ${D};
            color: ${v};
            padding: 0 12px;
        }
        input::placeholder {
            color: ${f};
        }
    `,Button:o.button`
        ${N}
        ${({$tone:r})=>r==="accent"?`
      background: ${$};
      color: #0b0b0b;
      border-color: ${$};
    `:`
      background: #1a1a1a;
    `}
    `,IconButton:o.button`
        ${N}
        width:38px;
        padding: 0;
        font-size: 16px;
        line-height: 1;
    `,TrackList:o.div`
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 16px;
    `,Card:o.section`
        background: ${D};
        border: 1px solid ${u};
        border-radius: ${S};
        box-shadow: ${A};
        padding: 14px;
    `,CardTop:o.div`
        display: flex;
        gap: 10px;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
        .name {
            flex: 1;
            height: 38px;
            border-radius: 12px;
            border: 1px solid ${u};
            background: #151515;
            color: ${v};
            padding: 0 10px;
        }
    `,Actions:o.div`
        display: flex;
        gap: 8px;
        align-items: center;
    `,Stats:o.div`
        display: flex;
        gap: 10px;
        margin: 8px 0 12px;
    `,Stat:o.div`
        flex: 0 0 auto;
        min-width: 90px;
        background: #141414;
        border: 1px solid ${u};
        border-radius: 12px;
        padding: 8px 10px;
        .label {
            color: ${f};
            font-size: 12px;
        }
        .value {
            display: block;
            font-size: 18px;
            margin-top: 4px;
        }
    `,Heatmap:o.div`
        display: grid;
        grid-template-columns: repeat(8, 12px);
        gap: 4px;
        align-content: start;
        margin-bottom: 8px;
        padding-top: 4px;
    `,Cell:o.span`
        width: 12px;
        height: 12px;
        border-radius: 3px;
        border: 1px solid ${u};
        background: ${({$on:r})=>r?$:"#1a1a1a"};
    `,Legend:o.div`
        display: flex;
        align-items: center;
        gap: 8px;
        .dot {
            width: 10px;
            height: 10px;
            border-radius: 3px;
            display: inline-block;
            border: 1px solid ${u};
        }
        .on {
            background: ${$};
        }
        .off {
            background: #1a1a1a;
        }
        .spacer {
            flex: 1;
        }
        .muted {
            color: ${f};
            font-size: 12px;
        }
    `,Empty:o.div`
        grid-column: 1 / -1;
        text-align: center;
        padding: 28px 10px;
        border: 1px dashed ${u};
        border-radius: ${S};
        .muted {
            color: ${f};
        }
    `};function k(r=new Date){const n=new Date(r);return n.setMinutes(n.getMinutes()-n.getTimezoneOffset()),n.toISOString().slice(0,10)}function M(r=new Date){const n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],i=new Date(r);return`${n[i.getMonth()]} ${i.getDate()}, ${i.getFullYear()}`}function L(r){const n=[],i=new Date;for(let l=r-1;l>=0;l--){const p=new Date(i);p.setDate(i.getDate()-l),n.push(k(p))}return n}function z(r){const n=new Date(k());let i=0;for(let m=0;;m++){const h=new Date(n);h.setDate(n.getDate()-m);const w=k(h);if(r.has(w))i++;else break}const l=Array.from(r).sort();let p=0,g=0,b=null;for(const m of l){if(!b)g=1;else{const h=new Date(b);g=(new Date(m)-h)/864e5===1?g+1:1}p=Math.max(p,g),b=m}return{current:i,best:p}}const T="learning-streak-tracker:v1";function I(){const[r,n]=j.useState(()=>{try{const a=localStorage.getItem(T);return a?JSON.parse(a):[]}catch{return[]}}),[i,l]=j.useState("");j.useEffect(()=>{localStorage.setItem(T,JSON.stringify(r))},[r]);const p=j.useMemo(()=>L(56),[]),g=j.useMemo(()=>M(new Date),[]),b=a=>{a.preventDefault();const d=i.trim();d&&(n(c=>{var s;return[...c,{id:((s=crypto.randomUUID)==null?void 0:s.call(crypto))||String(Date.now()),name:d,dates:[]}]}),l(""))},m=(a,d)=>{window.confirm(`Delete "${d}"? This can't be undone.`)&&n(c=>c.filter(s=>s.id!==a))},h=(a,d)=>{n(c=>c.map(s=>s.id===a?{...s,name:d}:s))},w=a=>{const d=k();n(c=>c.map(s=>{if(s.id!==a)return s;const x=new Set(s.dates);return x.has(d)?x.delete(d):x.add(d),{...s,dates:Array.from(x).sort()}}))};return e.jsxs(t.Wrapper,{children:[e.jsxs(t.Header,{children:[e.jsxs("div",{className:"row",children:[e.jsx("h2",{children:"Learning Streak Tracker"}),e.jsx("span",{className:"date",children:g})]}),e.jsx("p",{className:"muted",children:"Track daily learning for any topic (e.g., “JavaScript”, “DSA”). Mark today, watch your streak climb. Local only."})]}),e.jsxs(t.Toolbar,{onSubmit:b,children:[e.jsx("input",{type:"text",placeholder:"Add a learning track (e.g., React)",value:i,onChange:a=>l(a.target.value),"aria-label":"New track name"}),e.jsx(t.Button,{type:"submit",$tone:"accent",children:"Add"})]}),e.jsxs(t.TrackList,{children:[r.map(a=>{const d=new Set(a.dates),{current:c,best:s}=z(d),x=d.has(k());return e.jsxs(t.Card,{children:[e.jsxs(t.CardTop,{children:[e.jsx("input",{className:"name",value:a.name,onChange:y=>h(a.id,y.target.value)}),e.jsxs(t.Actions,{children:[e.jsx(t.Button,{onClick:()=>w(a.id),$tone:x?"neutral":"accent",children:x?"Undo Today":"Mark Today"}),e.jsx(t.IconButton,{onClick:()=>m(a.id,a.name),"aria-label":"Delete",children:"✕"})]})]}),e.jsxs(t.Stats,{children:[e.jsxs(t.Stat,{children:[e.jsx("span",{className:"label",children:"Current"}),e.jsx("span",{className:"value",children:c})]}),e.jsxs(t.Stat,{children:[e.jsx("span",{className:"label",children:"Best"}),e.jsx("span",{className:"value",children:s})]}),e.jsxs(t.Stat,{children:[e.jsx("span",{className:"label",children:"Today"}),e.jsx("span",{className:"value",children:x?"✅":"—"})]})]}),e.jsx(t.Heatmap,{children:p.map(y=>e.jsx(t.Cell,{$on:d.has(y),title:y},a.id+y))}),e.jsxs(t.Legend,{children:[e.jsx("span",{className:"dot on"}),e.jsx("span",{children:"done"}),e.jsx("span",{className:"dot off"}),e.jsx("span",{children:"missed"}),e.jsx("span",{className:"spacer"}),e.jsx("span",{className:"muted",children:"Last 8 weeks"})]})]},a.id)}),r.length===0&&e.jsxs(t.Empty,{children:[e.jsx("p",{children:"No tracks yet."}),e.jsx("p",{className:"muted",children:"Add one above and start your streak today."})]})]})]})}export{I as default};
