import{d as c,r as m,j as n}from"./index-C86gdwjR.js";const L="var(--card, #0f1012)",x="var(--text, #eaeaea)",C="var(--muted, #a8a8a8)",g="var(--border, #242424)",$="var(--accent, #22c55e)",q="var(--danger, #ef4444)",S="var(--radius, 16px)",F="var(--shadow, 0 10px 30px rgba(0,0,0,0.35))",a={Wrapper:c.div`
        display: flex;
        flex-direction: column;
        gap: 16px;
        color: ${x};
        padding: 15px;
        max-width: 1440px;
        margin: auto;
    `,Header:c.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 12px 14px;
        background: ${L};
        border: 1px solid ${g};
        border-radius: ${S};
        box-shadow: ${F};

        .title {
            font-size: 20px;
            font-weight: 600;
            letter-spacing: 0.2px;
        }
        .actions {
            display: flex;
            gap: 10px;
        }
        button {
            padding: 8px 12px;
            border: 1px solid ${g};
            border-radius: 10px;
            background: #141414;
            color: ${x};
            font-size: 14px;
            cursor: pointer;
        }
        button:hover {
            border-color: ${$};
        }
        button:active {
            transform: translateY(1px);
        }
    `,Body:c.div`
        display: grid;
        grid-template-columns: 360px 1fr;
        gap: 16px;

        @media (max-width: 980px) {
            grid-template-columns: 1fr;
        }
    `,Sidebar:c.aside`
        background: ${L};
        border: 1px solid ${g};
        border-radius: ${S};
        box-shadow: ${F};
        padding: 12px;

        select,
        input[type="text"],
        input[type="range"],
        input[type="color"],
        input[type="file"] {
            width: 100%;
        }

        input,
        select {
            background: #141414;
            color: ${x};
            border: 1px solid ${g};
            border-radius: 10px;
            padding: 8px 10px;
            font-size: 14px;
            outline: none;
        }

        .chips {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }
        .chip {
            padding: 6px 10px;
            border: 1px solid ${g};
            border-radius: 10px;
            background: #161616;
            color: ${x};
            font-size: 13px;
            cursor: pointer;
        }
        .chip.active {
            border-color: ${$};
            outline: 1px solid ${$};
        }

        .swatches {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            align-items: center;
        }
        .swatch {
            width: 32px;
            height: 24px;
            border: 1px solid ${g};
            border-radius: 8px;
            cursor: pointer;
        }
        .swatch.selected {
            outline: 2px solid ${$};
        }

        .fileBtn {
            position: relative;
            overflow: hidden;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 8px 12px;
            border: 1px solid ${g};
            border-radius: 10px;
            background: #111;
            cursor: pointer;
            font-size: 14px;
            color: ${x};
            width: 100%;
            text-align: center;
        }
        .fileBtn input {
            position: absolute;
            inset: 0;
            opacity: 0;
            cursor: pointer;
        }
        .hint {
            color: ${C};
            font-size: 12px;
            margin-top: 6px;
        }
    `,Group:c.div`
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 8px 0;
    `,Row:c.div`
        display: flex;
        align-items: center;
        gap: 8px;
        flex-wrap: wrap;
    `,Label:c.label`
        font-size: 12px;
        color: ${C};
    `,Stage:c.div`
        display: grid;
        align-content: start;
        gap: 10px;
    `,CanvasWrap:c.div`
        width: min(100%, 900px);
        margin: 0 auto;
        border: 1px solid ${g};
        border-radius: ${S};
        overflow: hidden;
        background: linear-gradient(
                    45deg,
                    rgba(255, 255, 255, 0.03) 25%,
                    transparent 25%
                ) -8px 0/16px 16px,
            linear-gradient(
                    -45deg,
                    rgba(255, 255, 255, 0.03) 25%,
                    transparent 25%
                )
                0px 0/16px 16px,
            linear-gradient(
                    45deg,
                    transparent 75%,
                    rgba(255, 255, 255, 0.03) 75%
                ) -8px 8px/16px 16px,
            linear-gradient(
                    -45deg,
                    transparent 75%,
                    rgba(255, 255, 255, 0.03) 75%
                )
                0px 8px/16px 16px,
            #0b0b0b;
        transform-origin: top center;

        canvas {
            display: block;
            width: 100%;
            height: auto;
        }
    `,Hint:c.div`
        text-align: center;
        color: ${C};
        font-size: 14px;
        padding: 6px 0 2px;
    `,ModalBackdrop:c.div`
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.6);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
    `,ModalCard:c.div`
        width: min(420px, 92vw);
        background: ${L};
        border: 1px solid ${g};
        border-radius: ${S};
        box-shadow: ${F};
        padding: 16px;

        .title {
            font-weight: 600;
            margin-bottom: 6px;
            color: ${x};
        }
        .msg {
            color: ${C};
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
            border: 1px solid ${g};
            border-radius: 10px;
            background: #141414;
            color: ${x};
            cursor: pointer;
            font-size: 14px;
        }
        button:hover {
            border-color: ${$};
        }
        .ghost {
            background: transparent;
        }
        .danger {
            background: #1a0f10;
            border-color: ${q};
        }
    `},h=1200,w=1600,y={emerald:{bg1:"#0b1510",bg2:"#11221a",accent:"#22c55e",text:"#e8f7ee"},royal:{bg1:"#0b0f24",bg2:"#1a2148",accent:"#7aa2ff",text:"#e9ecff"},candy:{bg1:"#2b0f1a",bg2:"#4a1424",accent:"#ff6b9a",text:"#ffe6ef"},sunrise:{bg1:"#26190d",bg2:"#4a2a12",accent:"#f59e0b",text:"#fff4e0"},mint:{bg1:"#0f1d1a",bg2:"#16322c",accent:"#34d399",text:"#e7fff7"}},B={occasion:"Birthday",tone:"Friendly",recipient:"",fromName:"",extraLine:"",paletteKey:"emerald",bgStyle:"gradient",zoom:.8};function J(){const[s,R]=m.useState(B),[f,k]=m.useState(null),[H,j]=m.useState(!1),v=m.useRef(null),P=m.useRef(null);m.useEffect(()=>{D()},[s,f]);function u(e){R(t=>({...t,...e}))}function T(e){var r;const t=(r=e.target.files)==null?void 0:r[0];if(!t)return k(null);const o=new Image;o.onload=()=>k(o),o.src=URL.createObjectURL(t)}function M(){const e=s.recipient?`${s.recipient},`:"",t=s.extraLine?`
${s.extraLine}`:"",o=s.occasion,r=s.tone,l={Birthday:{Friendly:`${e}
Wishing you a day full of smiles and a year packed with wins. ${t}`,Formal:`${e}
Warm birthday wishes. May the year ahead bring health, success, and joy. ${t}`,Funny:`${e}
Another lap around the sun — still looking good! Cake first, decisions later. ${t}`},Anniversary:{Friendly:`${e}
Here’s to love, laughter, and many more years together. ${t}`,Formal:`${e}
Wishing you a wonderful anniversary and continued happiness. ${t}`,Funny:`${e}
Congrats on renewing the “you + me” contract. Auto-renew looks good! ${t}`},Congratulations:{Friendly:`${e}
Huge congrats! You earned this. Onward and upward. ${t}`,Formal:`${e}
Congratulations on your achievement. Wishing you continued success. ${t}`,Funny:`${e}
Mission accomplished. Bragging rights unlocked — use responsibly. ${t}`},"Thank You":{Friendly:`${e}
Thank you—your help made a real difference. ${t}`,Formal:`${e}
With sincere thanks for your support and time. ${t}`,Funny:`${e}
Thanks a ton — I owe you coffee (or two). ${t}`},"Get Well Soon":{Friendly:`${e}
Wishing you steady rest and a smooth recovery. ${t}`,Formal:`${e}
Wishing you good health and a swift recovery. ${t}`,Funny:`${e}
Rest, hydrate, and queue your favorite shows. Doctor’s orders (mine). ${t}`},"Happy New Year":{Friendly:`${e}
New goals, new wins. Have a bright, peaceful year ahead! ${t}`,Formal:`${e}
Wishing you prosperity and good health in the year ahead. ${t}`,Funny:`${e}
New Year’s resolution: more laughs, fewer bugs. Let’s go. ${t}`},"Happy Diwali":{Friendly:`${e}
May your home glow with light, joy, and good fortune. ${t}`,Formal:`${e}
Wishing you and your family a bright and prosperous Diwali. ${t}`,Funny:`${e}
Light the diyas, not the inbox. Have a sparkling Diwali! ${t}`}},i=l[o]||l.Congratulations,d=(i==null?void 0:i[r])||(i==null?void 0:i.Friendly),p=s.fromName?`
— ${s.fromName}`:"";return{title:o,body:d.trim(),from:p}}function E(e,t,o,r){if(s.bgStyle==="solid"){e.fillStyle=r.bg2,e.fillRect(0,0,t,o);return}if(s.bgStyle==="pattern"){const i=e.createLinearGradient(0,0,0,o);i.addColorStop(0,r.bg1),i.addColorStop(1,r.bg2),e.fillStyle=i,e.fillRect(0,0,t,o),e.globalAlpha=.12,e.fillStyle="#ffffff";const d=40;for(let p=60;p<o-60;p+=d)for(let b=60;b<t-60;b+=d)e.beginPath(),e.arc(b,p,3,0,Math.PI*2),e.fill();e.globalAlpha=1;return}const l=e.createLinearGradient(0,0,0,o);l.addColorStop(0,r.bg1),l.addColorStop(1,r.bg2),e.fillStyle=l,e.fillRect(0,0,t,o)}function I(e,t,o){const r=t.split(/\s+/),l=[];let i="";for(let d=0;d<r.length;d++){const p=i?i+" "+r[d]:r[d];e.measureText(p).width<=o?i=p:(i&&l.push(i),i=r[d])}return i&&l.push(i),l}function D(){const e=v.current;if(!e)return;e.width=h,e.height=w;const t=e.getContext("2d"),o=y[s.paletteKey]||y.emerald;E(t,h,w,o);const r=90,l=h-r*2,{title:i,body:d,from:p}=M();t.save(),t.fillStyle=o.text,t.textAlign="center",t.fillStyle=o.accent+"33",t.fillRect(r,r+24,l,6),t.fillStyle=o.text,t.shadowColor="rgba(0,0,0,0.35)",t.shadowBlur=12,t.font="700 80px system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",t.fillText(i,h/2,r+90),t.shadowBlur=0,t.fillStyle=o.text,t.font="400 40px system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif";const b=l*.9,V=I(t,d,b);let W=r+200;if(V.forEach(G=>{t.fillText(G,h/2,W),W+=56}),p&&(t.font="600 38px system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",t.fillStyle=o.accent,t.fillText(p,h/2,w-r-80)),f){const _=180/f.naturalWidth,N=f.naturalHeight*_,A=h-r-180,z=w-r-N;t.fillStyle="rgba(255,255,255,0.08)",t.fillRect(A-14,z-14,208,N+28),t.drawImage(f,A,z,180,N)}t.restore()}function U(){var o;const e=(o=v.current)==null?void 0:o.toDataURL("image/png");if(!e)return;const t=document.createElement("a");t.href=e,t.download="greeting-card.png",t.click()}function Y(){var i;const e=(i=v.current)==null?void 0:i.toDataURL("image/png");if(!e)return;const t=document.createElement("iframe");t.style.position="fixed",t.style.right="0",t.style.bottom="0",t.style.width="0",t.style.height="0",t.style.border="0",document.body.appendChild(t);const o=t.contentDocument||t.contentWindow.document;o.open(),o.write(`<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Print Card</title>
    <style>
      @page { margin: 0; }
      html, body { margin:0; padding:0; background:#fff; }
      img { display:block; width:100%; height:auto; }
    </style>
  </head>
  <body>
    <img id="card" src="${e}" alt="Greeting Card"/>
  </body>
</html>`),o.close();const r=()=>{t.contentWindow.focus(),t.contentWindow.print(),setTimeout(()=>document.body.removeChild(t),300)},l=o.getElementById("card");l!=null&&l.complete?r():l.onload=r}function O(){const e=Object.keys(y),t=e[Math.floor(Math.random()*e.length)];u({paletteKey:t})}function K(){R(B),k(null),j(!1)}return n.jsxs(a.Wrapper,{children:[n.jsxs(a.Header,{children:[n.jsx("div",{className:"title",children:"Personalised Greeting Generator"}),n.jsxs("div",{className:"actions",children:[n.jsx("button",{onClick:U,children:"Export PNG"}),n.jsx("button",{onClick:Y,children:"Print"}),n.jsx("button",{onClick:()=>j(!0),children:"Reset"})]})]}),n.jsxs(a.Body,{children:[n.jsxs(a.Sidebar,{children:[n.jsxs(a.Group,{children:[n.jsx(a.Label,{children:"Occasion"}),n.jsxs("select",{value:s.occasion,onChange:e=>u({occasion:e.target.value}),children:[n.jsx("option",{children:"Birthday"}),n.jsx("option",{children:"Anniversary"}),n.jsx("option",{children:"Congratulations"}),n.jsx("option",{children:"Thank You"}),n.jsx("option",{children:"Get Well Soon"}),n.jsx("option",{children:"Happy New Year"}),n.jsx("option",{children:"Happy Diwali"})]})]}),n.jsxs(a.Row,{children:[n.jsxs(a.Group,{style:{flex:1},children:[n.jsx(a.Label,{children:"Recipient name"}),n.jsx("input",{placeholder:"e.g., Ashish",value:s.recipient,onChange:e=>u({recipient:e.target.value})})]}),n.jsxs(a.Group,{style:{flex:1},children:[n.jsx(a.Label,{children:"From"}),n.jsx("input",{placeholder:"e.g., Team A2RP",value:s.fromName,onChange:e=>u({fromName:e.target.value})})]})]}),n.jsxs(a.Group,{children:[n.jsx(a.Label,{children:"Tone"}),n.jsx("div",{className:"chips",children:["Friendly","Formal","Funny"].map(e=>n.jsx("button",{className:s.tone===e?"chip active":"chip",onClick:()=>u({tone:e}),children:e},e))})]}),n.jsxs(a.Group,{children:[n.jsx(a.Label,{children:"Extra line (optional)"}),n.jsx("input",{placeholder:"e.g., Have a fantastic year ahead!",value:s.extraLine,onChange:e=>u({extraLine:e.target.value})})]}),n.jsxs(a.Group,{children:[n.jsx(a.Label,{children:"Palette"}),n.jsxs("div",{className:"swatches",children:[Object.keys(y).map(e=>n.jsx("button",{title:e,className:"swatch"+(s.paletteKey===e?" selected":""),onClick:()=>u({paletteKey:e}),style:{background:`linear-gradient(90deg, ${y[e].bg1}, ${y[e].bg2})`}},e)),n.jsx("button",{className:"chip",onClick:O,children:"Random"})]})]}),n.jsxs(a.Group,{children:[n.jsx(a.Label,{children:"Background style"}),n.jsx("div",{className:"chips",children:["gradient","solid","pattern"].map(e=>n.jsx("button",{className:s.bgStyle===e?"chip active":"chip",onClick:()=>u({bgStyle:e}),children:e},e))})]}),n.jsxs(a.Group,{children:[n.jsx(a.Label,{children:"Logo / Photo (optional)"}),n.jsxs("label",{className:"fileBtn",children:[n.jsx("input",{type:"file",accept:"image/*",onChange:T}),"Upload Image"]}),f&&n.jsx("div",{className:"hint",children:"Added ✓ (bottom-right)"})]}),n.jsxs(a.Group,{children:[n.jsx(a.Label,{children:"Preview Zoom"}),n.jsx("input",{type:"range",min:"0.5",max:"1.2",step:"0.05",value:s.zoom,onChange:e=>u({zoom:Number(e.target.value)})})]})]}),n.jsxs(a.Stage,{ref:P,children:[n.jsx(a.CanvasWrap,{style:{transform:`scale(${s.zoom})`},children:n.jsx("canvas",{ref:v,width:h,height:w})}),n.jsx(a.Hint,{children:"Tip: fill names, choose tone/palette, then Export or Print."})]})]}),H&&n.jsx(a.ModalBackdrop,{onClick:()=>j(!1),children:n.jsxs(a.ModalCard,{onClick:e=>e.stopPropagation(),children:[n.jsx("div",{className:"title",children:"Reset settings?"}),n.jsx("div",{className:"msg",children:"This will clear names, extra line, logo, and visual choices."}),n.jsxs("div",{className:"row",children:[n.jsx("button",{className:"ghost",onClick:()=>j(!1),children:"Cancel"}),n.jsx("button",{className:"danger",onClick:K,children:"Yes, Reset"})]})]})})]})}export{J as default};
