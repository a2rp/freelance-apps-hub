import{d as m,f as Z,r,j as e}from"./index-BoQ3b-eI.js";const I="var(--card, #111)",T="var(--text, #e9e9e9)",c="var(--muted, #b7b7b7)",d="var(--border, #222)",X="var(--accent, #22c55e)",D="var(--radius, 16px)",F="var(--shadow, 0 8px 30px rgba(0,0,0,.25))",_="var(--maxw, 1440px)",ee=m.section`
    max-width: ${_};
    margin: 0 auto;
    padding: 24px;
    color: ${T};

    .heading {
        margin-bottom: 16px;
        h2 {
            margin: 0 0 6px;
            font-weight: 700;
            letter-spacing: 0.3px;
        }
        .sub {
            color: ${c};
            margin: 0;
        }
    }
`,te=m.div`
    display: grid;
    grid-template-columns: 360px 1fr;
    gap: 24px;

    @media (max-width: 960px) {
        grid-template-columns: 1fr;
    }
`,ae=m.div`
    background: ${I};
    border: 1px solid ${d};
    border-radius: ${D};
    box-shadow: ${F};
    padding: 16px;

    fieldset {
        border: 1px dashed ${d};
        border-radius: 12px;
        padding: 12px;
        margin: 0 0 12px;
    }
    legend {
        color: ${c};
        padding: 0 6px;
        font-size: 13px;
        letter-spacing: 0.2px;
    }
    label {
        display: grid;
        gap: 8px;
        margin: 10px 0;
        font-size: 14px;
    }
    input[type="file"] {
        width: 100%;
    }
    textarea {
        width: 100%;
        min-height: 56px;
        resize: vertical;
        background: #0e0e0e;
        color: ${T};
        border: 1px solid ${d};
        border-radius: 10px;
        padding: 10px 12px;
    }
    input[type="range"] {
        width: 100%;
    }
    .hint {
        color: ${c};
        margin: 6px 0 0;
        font-size: 13px;
    }
    .row {
        display: flex;
        align-items: center;
        gap: 12px;
    }
    .switch {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        input {
            transform: translateY(1px);
        }
        span {
            color: ${T};
            font-size: 14px;
        }
    }
`,ne=m.div`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin-top: 8px;

    button {
        appearance: none;
        background: ${X};
        color: #0b0b0b;
        border: 1px solid ${X};
        border-radius: 12px;
        padding: 10px 14px;
        font-weight: 600;
        cursor: pointer;
    }
    .muted {
        background: transparent;
        color: ${c};
        border-color: ${d};
    }

    button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`,re=m.div`
    background: ${I};
    border: 1px solid ${d};
    border-radius: ${D};
    box-shadow: ${F};
    padding: 16px;
    display: grid;
    gap: 10px;

    canvas {
        width: 100%;
        height: auto;
        border-radius: 12px;
        display: block;
        background: #000;
    }

    .note {
        color: ${c};
        font-size: 13px;
        margin: 0;
    }

    .placeholder {
        border: 1px dashed ${d};
        border-radius: 12px;
        padding: 36px;
        display: grid;
        place-items: center;
        .box {
            text-align: center;
            color: ${c};
        }
        .box span {
            display: block;
            font-weight: 700;
            margin-bottom: 6px;
            color: ${T};
        }
    }
`,ie=Z`
  #memePrintArea { display: none; }

  @media print {
    @page { size: auto; margin: 0; }
    html, body { margin: 0 !important; padding: 0 !important; background: #000 !important; }
    body * { visibility: hidden !important; height: 0 !important; overflow: hidden !important; }

    #memePrintArea,
    #memePrintArea * {
      visibility: visible !important;
      display: block !important;
      height: auto !important;
      overflow: visible !important;
    }

    #memePrintArea {
      position: fixed;
      inset: 0;
      margin: 0;
      padding: 0;
      background: #000;
      border: 0;
      z-index: 999999;
    }

    #memePrintArea img {
      width: 100vw;
      max-height: 100vh;
      height: auto;
      object-fit: contain;
      margin: 0;
    }
  }
`,l={Wrapper:ee,Grid:te,Controls:ae,CanvasWrap:re,ButtonBar:ne,PrintStyles:ie},oe=()=>{const o=r.useRef(null),$=r.useRef(null),P=r.useRef(null),[i,S]=r.useState(""),[g,C]=r.useState("TOP TEXT"),[u,E]=r.useState("BOTTOM TEXT"),[p,R]=r.useState(64),[f,B]=r.useState(6),[b,O]=r.useState(8),[j,N]=r.useState(8),[v,U]=r.useState(!0),H=t=>{var s;const a=(s=t.target.files)==null?void 0:s[0];if(!a)return;const n=new FileReader;n.onload=w=>S(w.target.result),n.readAsDataURL(a)},z=()=>{const t=o.current,a=$.current;if(!t||!a||!a.complete)return;t.width=a.naturalWidth||a.width,t.height=a.naturalHeight||a.height;const n=t.getContext("2d");n.clearRect(0,0,t.width,t.height),n.drawImage(a,0,0,t.width,t.height);const s=v?g.toUpperCase():g,w=v?u.toUpperCase():u,y=t.width/2,K=b/100*t.height,Q=t.height-j/100*t.height;n.textAlign="center",n.lineJoin="round",n.miterLimit=2,n.fillStyle="#ffffff",n.strokeStyle="#000000",n.lineWidth=f,n.font=`${p}px Impact, "Arial Black", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`;const A=(V,M,G)=>{const L=V.split(`
`).filter(Boolean),W=p*1.25;n.textBaseline=G,G==="top"?L.forEach((x,k)=>{const h=M+k*W;n.strokeText(x,y,h),n.fillText(x,y,h)}):L.slice().reverse().forEach((x,k)=>{const h=M-k*W;n.strokeText(x,y,h),n.fillText(x,y,h)})};s.trim()&&A(s,K,"top"),w.trim()&&A(w,Q,"bottom")};r.useEffect(()=>{z()},[i,g,u,p,f,b,j,v]);const J=()=>{const t=o.current;if(!t||!i)return;const a=document.createElement("a");a.download="meme.png",a.href=t.toDataURL("image/png"),a.click()},Y=()=>{const t=o.current,a=P.current;if(!t||!a||!i)return;const n=t.toDataURL("image/png");a.onload=()=>{window.print();const s=()=>{a.src="",a.onload=null,window.removeEventListener("afterprint",s)};window.addEventListener("afterprint",s)},a.src=n},q=()=>{var a;S(""),C("TOP TEXT"),E("BOTTOM TEXT"),R(64),B(6),O(8),N(8),U(!0);const t=(a=o.current)==null?void 0:a.getContext("2d");t&&t.clearRect(0,0,o.current.width,o.current.height)};return e.jsxs(l.Wrapper,{children:[e.jsx(l.PrintStyles,{}),e.jsxs("header",{className:"heading",children:[e.jsx("h2",{children:"MEME Generator"}),e.jsx("p",{className:"sub",children:"Upload an image, set top/bottom text, download a crisp PNG, or print just the meme."})]}),e.jsxs(l.Grid,{children:[e.jsxs(l.Controls,{"aria-label":"controls",children:[e.jsxs("fieldset",{children:[e.jsx("legend",{children:"Image"}),e.jsx("input",{type:"file",accept:"image/*",onChange:H}),!i&&e.jsx("p",{className:"hint",children:"Pick any JPG/PNG. Canvas scales to the image for sharp export."})]}),e.jsxs("fieldset",{children:[e.jsx("legend",{children:"Text"}),e.jsxs("label",{children:["Top text",e.jsx("textarea",{value:g,onChange:t=>C(t.target.value),placeholder:"TOP TEXT",rows:2})]}),e.jsxs("label",{children:["Bottom text",e.jsx("textarea",{value:u,onChange:t=>E(t.target.value),placeholder:"BOTTOM TEXT",rows:2})]}),e.jsx("div",{className:"row",children:e.jsxs("label",{className:"switch",children:[e.jsx("input",{type:"checkbox",checked:v,onChange:t=>U(t.target.checked)}),e.jsx("span",{children:"UPPERCASE"})]})})]}),e.jsxs("fieldset",{children:[e.jsx("legend",{children:"Style"}),e.jsxs("label",{children:["Font size: ",e.jsxs("b",{children:[p,"px"]}),e.jsx("input",{type:"range",min:16,max:128,step:2,value:p,onChange:t=>R(+t.target.value)})]}),e.jsxs("label",{children:["Stroke width: ",e.jsxs("b",{children:[f,"px"]}),e.jsx("input",{type:"range",min:1,max:16,step:1,value:f,onChange:t=>B(+t.target.value)})]}),e.jsxs("label",{children:["Top offset: ",e.jsxs("b",{children:[b,"%"]}),e.jsx("input",{type:"range",min:2,max:25,step:1,value:b,onChange:t=>O(+t.target.value)})]}),e.jsxs("label",{children:["Bottom offset: ",e.jsxs("b",{children:[j,"%"]}),e.jsx("input",{type:"range",min:2,max:25,step:1,value:j,onChange:t=>N(+t.target.value)})]})]}),e.jsxs(l.ButtonBar,{children:[e.jsx("button",{onClick:J,disabled:!i,children:"Download PNG"}),e.jsx("button",{onClick:Y,disabled:!i,children:"Print Meme"}),e.jsx("button",{onClick:q,className:"muted",children:"Reset"})]})]}),e.jsxs(l.CanvasWrap,{"aria-label":"preview",children:[!i&&e.jsx("div",{className:"placeholder",children:e.jsxs("div",{className:"box",children:[e.jsx("span",{children:"Preview"}),e.jsx("small",{children:"Upload an image to start"})]})}),i&&e.jsx("img",{ref:$,src:i,alt:"",style:{display:"none"},onLoad:z}),e.jsx("canvas",{ref:o}),e.jsx("p",{className:"note",children:"Tip: Use line breaks in text areas for multi-line captions."})]})]}),e.jsx("div",{id:"memePrintArea","aria-hidden":"true",children:e.jsx("img",{ref:P,alt:"Meme"})})]})};export{oe as default};
