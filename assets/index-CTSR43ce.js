import{d as u,r as p,j as t}from"./index-CTGnv-F_.js";const L="var(--card, #0f1012)",f="var(--text, #eaeaea)",N="var(--muted, #a8a8a8)",h="var(--border, #242424)",j="var(--accent, #22c55e)",te="var(--danger, #ef4444)",y="var(--radius, 16px)",H="var(--shadow, 0 10px 30px rgba(0,0,0,0.35))",o={Wrapper:u.div`
        display: flex;
        flex-direction: column;
        gap: 16px;
        color: ${f};
        padding: 30px;
        max-width: 1440px;
        margin: auto;
    `,Header:u.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 12px 14px;
        background: ${L};
        border: 1px solid ${h};
        border-radius: ${y};
        box-shadow: ${H};

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
        .fileBtn {
            position: relative;
            overflow: hidden;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 8px 12px;
            border: 1px solid ${h};
            border-radius: 10px;
            background: #111;
            cursor: pointer;
            font-size: 14px;
            color: ${f};
        }
        .fileBtn input {
            position: absolute;
            inset: 0;
            opacity: 0;
            cursor: pointer;
        }
        button {
            padding: 8px 12px;
            border: 1px solid ${h};
            border-radius: 10px;
            background: #141414;
            color: ${f};
            font-size: 14px;
            cursor: pointer;
        }
        button:hover {
            border-color: ${j};
        }
        button:active {
            transform: translateY(1px);
        }
        button:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
    `,Body:u.div`
        display: grid;
        grid-template-columns: 320px 1fr;
        gap: 16px;

        @media (max-width: 980px) {
            grid-template-columns: 1fr;
        }
    `,Sidebar:u.aside`
        background: ${L};
        border: 1px solid ${h};
        border-radius: ${y};
        box-shadow: ${H};
        padding: 12px;

        input[type="range"] {
            width: 100%;
        }
        .active {
            border-color: ${j};
            outline: 1px solid ${j};
        }
    `,Group:u.div`
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 8px 0;
    `,Row:u.div`
        display: flex;
        align-items: center;
        gap: 8px;
        flex-wrap: wrap;

        button {
            padding: 6px 10px;
            border-radius: 10px;
            border: 1px solid ${h};
            background: #161616;
            color: ${f};
            font-size: 13px;
            cursor: pointer;
        }
    `,Label:u.label`
        font-size: 12px;
        color: ${N};
    `,Separator:u.hr`
        border: none;
        border-top: 1px solid ${h};
        margin: 10px 0;
        opacity: 0.6;
    `,Stage:u.div`
        display: grid;
        align-content: start;
        gap: 10px;
    `,CanvasStack:u.div`
        position: relative;
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        border: 1px solid ${h};
        border-radius: ${y};
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
        canvas + canvas {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
        }
    `,Hint:u.div`
        text-align: center;
        color: ${N};
        font-size: 14px;
        padding: 6px 0 2px;
    `,ModalBackdrop:u.div`
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.6);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
    `,ModalCard:u.div`
        width: min(420px, 92vw);
        background: ${L};
        border: 1px solid ${h};
        border-radius: ${y};
        box-shadow: ${H};
        padding: 16px;

        .title {
            font-weight: 600;
            margin-bottom: 6px;
            color: ${f};
        }
        .msg {
            color: ${N};
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
            border: 1px solid ${h};
            border-radius: 10px;
            background: #141414;
            color: ${f};
            cursor: pointer;
            font-size: 14px;
        }
        button:hover {
            border-color: ${j};
        }
        .ghost {
            background: transparent;
        }
        .danger {
            background: #1a0f10;
            border-color: ${te};
        }
    `},O={brightness:100,contrast:100,saturate:100,hue:0,blur:0,grayscale:0,sepia:0,invert:0,rotation:0,flipH:!1,flipV:!1,zoom:1,brushSize:8,brushColor:"#ffffff",drawEnabled:!1};function re(){const[c,T]=p.useState(null),[a,W]=p.useState(O),[b,C]=p.useState({w:800,h:500}),[U,$]=p.useState(!1),R=p.useRef(null),x=p.useRef(null),m=p.useRef(null),k=p.useRef(!1),z=p.useRef({x:0,y:0});p.useEffect(()=>{const e=()=>{if(!m.current)return;const n=m.current.clientWidth-24;if(c&&c.naturalWidth){const{w:r,h:s}=S(c.naturalWidth,c.naturalHeight,a.rotation),i=Math.min(1,n/r);C({w:Math.round(r*i),h:Math.round(s*i)})}else C({w:Math.min(900,n),h:500})};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[c,a.rotation]),p.useEffect(()=>{A()},[c,a,b.w,b.h]);function V(e){var s;const n=(s=e.target.files)==null?void 0:s[0];if(!n)return;const r=new Image;r.onload=()=>{var v;T(r);const i=((v=m.current)==null?void 0:v.clientWidth)||900,{w:d,h:g}=S(r.naturalWidth,r.naturalHeight,a.rotation),w=Math.min(1,(i-24)/d);C({w:Math.round(d*w),h:Math.round(g*w)})},r.src=URL.createObjectURL(n)}function S(e,n,r){return r%180===0?{w:e,h:n}:{w:n,h:e}}function Y(e){return[`brightness(${e.brightness}%)`,`contrast(${e.contrast}%)`,`saturate(${e.saturate}%)`,`hue-rotate(${e.hue}deg)`,`blur(${e.blur}px)`,`grayscale(${e.grayscale}%)`,`sepia(${e.sepia}%)`,`invert(${e.invert}%)`].join(" ")}function A(){const e=R.current;if(!e)return;const n=e.getContext("2d");if(e.width=b.w,e.height=b.h,n.clearRect(0,0,e.width,e.height),F(n,e.width,e.height),!c)return;const r=S(c.naturalWidth,c.naturalHeight,a.rotation),s=Math.min(e.width/r.w,e.height/r.h),i=r.w*s,d=r.h*s,g=e.width/2,w=e.height/2;n.save(),n.translate(g,w),n.rotate(a.rotation*Math.PI/180);const v=a.flipH?-1:1,Q=a.flipV?-1:1;n.scale(v,Q),n.filter=Y(a);const _=-i/2,ee=-d/2;n.drawImage(c,_,ee,i,d),n.restore();const E=x.current;E&&(E.width=e.width,E.height=e.height)}function F(e,n,r){for(let i=0;i<r;i+=16)for(let d=0;d<n;d+=16){const g=(d/16+i/16)%2===1;e.fillStyle=g?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.15)",e.fillRect(d,i,16,16)}}function l(e){W(n=>({...n,...e}))}function X(){W(O);const e=x.current;e&&e.getContext("2d").clearRect(0,0,e.width,e.height)}function J(){const e=B();if(!e)return;const n=document.createElement("a");n.href=e,n.download="edited.png",n.click()}function Z(){const e=B();if(!e)return;const n=document.createElement("iframe");n.style.position="fixed",n.style.right="0",n.style.bottom="0",n.style.width="0",n.style.height="0",n.style.border="0",document.body.appendChild(n);const r=n.contentDocument||n.contentWindow.document;r.open(),r.write(`<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Print</title>
    <style>
      @page { margin: 0; }
      html, body { margin:0; padding:0; background:#fff; }
      img { display:block; width:100%; height:auto; }
    </style>
  </head>
  <body>
    <img id="toPrint" src="${e}" alt="Edited"/>
  </body>
</html>`),r.close();const s=()=>{const i=r.getElementById("toPrint"),d=()=>{n.contentWindow.focus(),n.contentWindow.print(),setTimeout(()=>document.body.removeChild(n),300)};if(!i){d();return}i.complete?d():i.onload=d};n.contentWindow.document.readyState==="complete"?s():n.onload=s}function B(){const e=R.current,n=x.current;if(!e)return"";const r=document.createElement("canvas");r.width=e.width,r.height=e.height;const s=r.getContext("2d");return s.drawImage(e,0,0),n&&s.drawImage(n,0,0),r.toDataURL("image/png")}function G(e){if(!a.drawEnabled)return;k.current=!0;const{x:n,y:r}=D(e);z.current={x:n,y:r}}function P(e){if(!a.drawEnabled||!k.current)return;const n=x.current;if(!n)return;const r=n.getContext("2d");r.lineWidth=a.brushSize,r.lineJoin="round",r.lineCap="round",r.strokeStyle=a.brushColor;const{x:s,y:i}=D(e),{x:d,y:g}=z.current;r.beginPath(),r.moveTo(d,g),r.lineTo(s,i),r.stroke(),z.current={x:s,y:i}}function M(){k.current=!1}function D(e){const n=x.current,r=n.getBoundingClientRect(),s="touches"in e?e.touches[0].clientX:e.clientX,i="touches"in e?e.touches[0].clientY:e.clientY;return{x:Math.max(0,Math.min(n.width,(s-r.left)*n.width/r.width)),y:Math.max(0,Math.min(n.height,(i-r.top)*n.height/r.height))}}function q(){const e=x.current;if(!e)return;e.getContext("2d").clearRect(0,0,e.width,e.height)}function K(){X(),$(!1)}function I(){$(!1)}return t.jsxs(o.Wrapper,{children:[t.jsxs(o.Header,{children:[t.jsx("div",{className:"title",children:"Photoshop Clone"}),t.jsxs("div",{className:"actions",children:[t.jsxs("label",{className:"fileBtn",children:[t.jsx("input",{type:"file",accept:"image/png,image/jpeg",onChange:V}),"Open Image"]}),t.jsx("button",{onClick:()=>$(!0),children:"Reset"}),t.jsx("button",{onClick:J,disabled:!c,children:"Export PNG"}),t.jsx("button",{onClick:Z,disabled:!c,children:"Print"})]})]}),t.jsxs(o.Body,{children:[t.jsxs(o.Sidebar,{children:[t.jsxs(o.Group,{children:[t.jsx(o.Label,{children:"Zoom"}),t.jsx("input",{type:"range",min:"0.5",max:"2",step:"0.1",value:a.zoom,onChange:e=>l({zoom:Number(e.target.value)})})]}),t.jsxs(o.Row,{children:[t.jsx("button",{onClick:()=>l({rotation:(a.rotation+270)%360}),children:"⟲ Rotate -90"}),t.jsx("button",{onClick:()=>l({rotation:(a.rotation+90)%360}),children:"⟳ Rotate +90"})]}),t.jsxs(o.Row,{children:[t.jsx("button",{onClick:()=>l({flipH:!a.flipH}),children:a.flipH?"Unflip H":"Flip H"}),t.jsx("button",{onClick:()=>l({flipV:!a.flipV}),children:a.flipV?"Unflip V":"Flip V"})]}),t.jsx(o.Separator,{}),t.jsxs(o.Group,{children:[t.jsxs(o.Label,{children:["Brightness: ",a.brightness,"%"]}),t.jsx("input",{type:"range",min:"0",max:"200",value:a.brightness,onChange:e=>l({brightness:Number(e.target.value)})})]}),t.jsxs(o.Group,{children:[t.jsxs(o.Label,{children:["Contrast: ",a.contrast,"%"]}),t.jsx("input",{type:"range",min:"0",max:"200",value:a.contrast,onChange:e=>l({contrast:Number(e.target.value)})})]}),t.jsxs(o.Group,{children:[t.jsxs(o.Label,{children:["Saturation: ",a.saturate,"%"]}),t.jsx("input",{type:"range",min:"0",max:"300",value:a.saturate,onChange:e=>l({saturate:Number(e.target.value)})})]}),t.jsxs(o.Group,{children:[t.jsxs(o.Label,{children:["Hue: ",a.hue,"°"]}),t.jsx("input",{type:"range",min:"-180",max:"180",value:a.hue,onChange:e=>l({hue:Number(e.target.value)})})]}),t.jsxs(o.Group,{children:[t.jsxs(o.Label,{children:["Blur: ",a.blur,"px"]}),t.jsx("input",{type:"range",min:"0",max:"10",value:a.blur,onChange:e=>l({blur:Number(e.target.value)})})]}),t.jsxs(o.Group,{children:[t.jsxs(o.Label,{children:["Grayscale: ",a.grayscale,"%"]}),t.jsx("input",{type:"range",min:"0",max:"100",value:a.grayscale,onChange:e=>l({grayscale:Number(e.target.value)})})]}),t.jsxs(o.Group,{children:[t.jsxs(o.Label,{children:["Sepia: ",a.sepia,"%"]}),t.jsx("input",{type:"range",min:"0",max:"100",value:a.sepia,onChange:e=>l({sepia:Number(e.target.value)})})]}),t.jsxs(o.Group,{children:[t.jsxs(o.Label,{children:["Invert: ",a.invert,"%"]}),t.jsx("input",{type:"range",min:"0",max:"100",value:a.invert,onChange:e=>l({invert:Number(e.target.value)})})]}),t.jsx(o.Separator,{}),t.jsxs(o.Group,{children:[t.jsxs(o.Row,{children:[t.jsx("button",{onClick:()=>l({drawEnabled:!a.drawEnabled}),className:a.drawEnabled?"active":"",children:a.drawEnabled?"Drawing: On":"Drawing: Off"}),t.jsx("button",{onClick:q,children:"Clear Drawings"})]}),t.jsxs(o.Row,{children:[t.jsx(o.Label,{children:"Brush Size"}),t.jsx("input",{type:"range",min:"1",max:"50",value:a.brushSize,onChange:e=>l({brushSize:Number(e.target.value)})})]}),t.jsxs(o.Row,{children:[t.jsx(o.Label,{children:"Brush Color"}),t.jsx("input",{type:"color",value:a.brushColor,onChange:e=>l({brushColor:e.target.value})})]})]})]}),t.jsxs(o.Stage,{ref:m,children:[t.jsxs(o.CanvasStack,{style:{transform:`scale(${a.zoom})`},onMouseDown:G,onMouseMove:P,onMouseUp:M,onMouseLeave:M,onTouchStart:G,onTouchMove:P,onTouchEnd:M,children:[t.jsx("canvas",{ref:R}),t.jsx("canvas",{ref:x})]}),!c&&t.jsx(o.Hint,{children:"Open an image to start. Adjust, rotate/flip, draw if needed, then Export or Print."})]})]}),U&&t.jsx(o.ModalBackdrop,{onClick:I,children:t.jsxs(o.ModalCard,{onClick:e=>e.stopPropagation(),children:[t.jsx("div",{className:"title",children:"Reset editor?"}),t.jsx("div",{className:"msg",children:"This will clear all adjustments and drawings. This can’t be undone."}),t.jsxs("div",{className:"row",children:[t.jsx("button",{className:"ghost",onClick:I,children:"Cancel"}),t.jsx("button",{className:"danger",onClick:K,children:"Yes, Reset"})]})]})})]})}export{re as default};
