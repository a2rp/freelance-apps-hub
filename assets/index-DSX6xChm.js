import{d as c,r as g,j as t}from"./index-BHpz9pj3.js";const N="var(--card, #0f1012)",C="var(--text, #eaeaea)",M="var(--muted, #a8a8a8)",u="var(--border, #242424)",L="var(--accent, #22c55e)",z="var(--radius, 16px)",E="var(--shadow, 0 10px 30px rgba(0,0,0,0.35))",p={Wrapper:c.div`
        display: flex;
        flex-direction: column;
        gap: 16px;
        color: ${C};
        max-width: 1440px;
        padding: 15px;
        margin: auto;
    `,Header:c.header`
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 12px;
        padding: 12px 14px;
        background: ${N};
        border: 1px solid ${u};
        border-radius: ${z};
        box-shadow: ${E};

        .title {
            font-size: 20px;
            font-weight: 600;
            letter-spacing: 0.2px;
        }
        .actions {
            display: flex;
            gap: 8px;
            align-items: center;
            flex-wrap: wrap;
        }
        select,
        input[type="date"],
        button {
            padding: 8px 10px;
            border: 1px solid ${u};
            border-radius: 10px;
            background: #141414;
            color: ${C};
            font-size: 14px;
            outline: none;
        }
        button:hover {
            border-color: ${L};
        }
        button:active {
            transform: translateY(1px);
        }
    `,Body:c.div`
        display: grid;
        gap: 16px;
    `,Card:c.div`
        background: ${N};
        border: 1px solid ${u};
        border-radius: ${z};
        box-shadow: ${E};
        padding: 16px;

        .head .title {
            font-size: 18px;
            font-weight: 600;
        }
        .head .date {
            color: ${M};
            font-size: 13px;
        }
        .line {
            font-size: 14px;
            line-height: 1.7;
            margin: 6px 0;
        }
    `,Separator:c.hr`
        border: none;
        border-top: 1px solid ${u};
        margin: 10px 0 12px;
        opacity: 0.6;
    `,Meta:c.div`
        margin-top: 10px;
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
        color: ${M};
        font-size: 13px;

        .pill {
            border: 1px solid ${u};
            border-radius: 999px;
            padding: 3px 8px;
        }
    `},j=[{v:"aries",label:"Aries"},{v:"taurus",label:"Taurus"},{v:"gemini",label:"Gemini"},{v:"cancer",label:"Cancer"},{v:"leo",label:"Leo"},{v:"virgo",label:"Virgo"},{v:"libra",label:"Libra"},{v:"scorpio",label:"Scorpio"},{v:"sagittarius",label:"Sagittarius"},{v:"capricorn",label:"Capricorn"},{v:"aquarius",label:"Aquarius"},{v:"pisces",label:"Pisces"}];function R(a){let e=1779033703^a.length;for(let n=0;n<a.length;n++)e=Math.imul(e^a.charCodeAt(n),3432918353),e=e<<13|e>>>19;return function(){return e=Math.imul(e^e>>>16,2246822507),e=Math.imul(e^e>>>13,3266489909),(e^=e>>>16)>>>0}}function D(a){return function(){let e=a+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function H(a){const e=a.getFullYear(),n=String(a.getMonth()+1).padStart(2,"0"),r=String(a.getDate()).padStart(2,"0");return`${e}-${n}-${r}`}function P(a,e){const n=R(`${a}|${e}`)(),r=D(n),b=["grounded","bold","curious","reflective","optimistic","patient","adventurous","sensitive","confident","balanced","resourceful","playful"],s=["work","relationships","health","learning","money","home","creative projects","travel plans","habits","networking"],f=["start small and keep it simple","ask for help instead of overthinking","sleep on big decisions","double-check the numbers","write three bullets for tomorrow","drink more water than usual","block 30 minutes for deep work","clean one small corner of your space","skip the impulse buy","trust a slower pace today"],v=["navy","emerald","gold","crimson","teal","violet","peach","olive","charcoal","turquoise","maroon","indigo"],o=i=>i[Math.floor(r()*i.length)],d=o(b),m=o(s),x=o(f),y=o(v),h=Math.max(1,Math.floor(r()*99)),w=[`You might feel ${d} today—use that energy to do one real thing in ${m}.`,`Keep expectations light; momentum beats perfection. ${x}.`,"A quick check-in with yourself mid-day will keep you on track."];return{mood:d,focus:m,nudge:x,color:y,lucky:h,lines:w}}function I(){const[a,e]=g.useState("aries"),[n,r]=g.useState(()=>H(new Date)),b=g.useRef(null),s=g.useMemo(()=>P(a,n),[a,n]);function f(){r(H(new Date))}function v(){var S;const{lines:o,color:d,lucky:m,mood:x,focus:y}=s,h=((S=j.find(l=>l.v===a))==null?void 0:S.label)||a,w=`<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>${h} — ${n}</title>
    <style>
      @page { margin: 0; }
      html, body { margin: 0; padding: 0; background: #fff; }
      .card {
        box-sizing: border-box;
        width: 100%;               /* fill printable width */
        max-width: 680px;          /* nice readable width */
        margin: 0 auto;
        padding: 24px;
        font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, 'Helvetica Neue', Arial, 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji';
        color: #111;
      }
      .head { display:flex; justify-content: space-between; align-items: baseline; margin-bottom: 10px; }
      .title { font-weight: 700; font-size: 20px; }
      .date { font-size: 13px; color: #555; }
      .sep { height: 1px; background: #ddd; margin: 12px 0 14px; }
      .line { font-size: 14px; line-height: 1.6; margin: 6px 0; }
      .meta { margin-top: 14px; font-size: 13px; color: #333; display:flex; gap:16px; flex-wrap:wrap; }
      .badge { padding: 3px 8px; border: 1px solid #ccc; border-radius: 999px; }
    </style>
  </head>
  <body>
    <div class="card">
      <div class="head">
        <div class="title">${h} — Horoscope</div>
        <div class="date">${n}</div>
      </div>
      <div class="sep"></div>
      ${o.map(l=>`<div class="line">${l}</div>`).join("")}
      <div class="meta">
        <div class="badge">Mood: ${x}</div>
        <div class="badge">Focus: ${y}</div>
        <div class="badge">Lucky Color: ${d}</div>
        <div class="badge">Lucky Number: ${m}</div>
      </div>
    </div>
    <script>
      window.onload = function () {
        window.focus();
        window.print();
      };
      window.onafterprint = function () {
        parent.postMessage({ type: "HR_PRINT_DONE" }, "*");
        setTimeout(() => window.close(), 0);
      };
    <\/script>
  </body>
</html>`,i=document.createElement("iframe");i.style.position="fixed",i.style.right="0",i.style.bottom="0",i.style.width="0",i.style.height="0",i.style.border="0",document.body.appendChild(i);const k=l=>{l&&l.data&&l.data.type==="HR_PRINT_DONE"&&(window.removeEventListener("message",k),i.parentNode&&i.parentNode.removeChild(i))};window.addEventListener("message",k);const $=i.contentDocument||i.contentWindow.document;$.open(),$.write(w),$.close()}return t.jsxs(p.Wrapper,{children:[t.jsxs(p.Header,{children:[t.jsx("div",{className:"title",children:"Simple Horoscope Generator"}),t.jsxs("div",{className:"actions",children:[t.jsx("select",{value:a,onChange:o=>e(o.target.value),"aria-label":"Select sign",children:j.map(o=>t.jsx("option",{value:o.v,children:o.label},o.v))}),t.jsx("input",{type:"date",value:n,onChange:o=>r(o.target.value),"aria-label":"Pick date"}),t.jsx("button",{onClick:f,title:"Jump to today",children:"Today"}),t.jsx("button",{onClick:v,title:"Print only the card",children:"Print Card"})]})]}),t.jsx(p.Body,{children:t.jsxs(p.Card,{ref:b,children:[t.jsxs("div",{className:"row head",children:[t.jsxs("div",{className:"title",children:[(j.find(o=>o.v===a)||{}).label||a," — Horoscope"]}),t.jsx("div",{className:"date",children:n})]}),t.jsx(p.Separator,{}),t.jsx("div",{className:"lines",children:s.lines.map((o,d)=>t.jsx("div",{className:"line",children:o},d))}),t.jsxs(p.Meta,{children:[t.jsxs("span",{className:"pill",children:["Mood: ",s.mood]}),t.jsxs("span",{className:"pill",children:["Focus: ",s.focus]}),t.jsxs("span",{className:"pill",children:["Lucky Color: ",s.color]}),t.jsxs("span",{className:"pill",children:["Lucky Number: ",s.lucky]})]})]})})]})}export{I as default};
