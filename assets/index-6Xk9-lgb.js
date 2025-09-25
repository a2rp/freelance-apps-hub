import{d as g,r,j as t}from"./index-B6jodKjo.js";const te="var(--card, #111)",D="var(--text, #e9e9e9)",L="var(--muted, #b7b7b7)",N="var(--border, #222)",M="var(--accent, #22c55e)",J="var(--radius, 16px)",ne=g.div`
    color: ${D};
    padding: var(--space-5, 32px) var(--space-4, 24px);
`,ae=g.div`
    display: flex;
    gap: 12px;
    align-items: baseline;
    margin-bottom: var(--space-4, 24px);

    h1 {
        font-size: clamp(18px, 2vw, 24px);
        font-weight: 700;
        letter-spacing: 0.2px;
    }
    .muted {
        color: ${L};
        font-size: 12px;
    }
`,oe=g.div`
    display: grid;
    grid-template-columns: 1.1fr 1fr;
    gap: var(--space-4, 24px);

    @media (max-width: 960px) {
        grid-template-columns: 1fr;
    }
`,re=g.section`
    background: ${te};
    border: 1px solid ${N};
    border-radius: ${J};
    box-shadow: var(--shadow, 0 8px 30px rgba(0, 0, 0, 0.25));
    padding: var(--space-4, 24px);
`,se=g.form`
    display: grid;
    gap: var(--space-3, 16px);

    input[type="text"],
    input[type="color"],
    input[type="file"],
    select {
        width: 100%;
        background: #0f0f0f;
        color: ${D};
        border: 1px solid ${N};
        border-radius: 12px;
        padding: 10px 12px;
        outline: none;
    }
    input:focus,
    select:focus {
        border-color: ${M};
        box-shadow: 0 0 0 3px color-mix(in srgb, ${M} 30%, transparent);
    }
    label {
        color: ${L};
        font-size: 12.5px;
    }
`,ie=g.div`
    display: grid;
    gap: 8px;
`,le=g.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: center;
`,de=g.div`
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 10px;
    align-items: center;

    input[type="range"] {
        accent-color: ${M};
    }
    span {
        color: ${L};
        font-size: 12px;
    }
`,ce=g.div`
    display: flex;
    align-items: center;
    gap: 10px;
    label {
        display: flex;
        align-items: center;
        gap: 8px;
    }
    input[type="checkbox"] {
        accent-color: ${M};
    }
`,pe=g.div`
    display: grid;
    place-items: center;
    padding: 12px;
    border: 1px dashed ${N};
    border-radius: ${J};
    background: #0f0f0f;

    canvas {
        /* border: 1px solid #f00; */
        width: min(420px, 80vw);
        height: auto;
    }
`,ue=g.div`
    margin-top: var(--space-3, 16px);
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`,G=g.button`
    border-radius: 12px;
    padding: 10px 14px;
    font-weight: 600;
    cursor: pointer;
    border: 1px solid ${N};
    background: #161616;
    color: ${D};

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`,ge=g(G)`
    border-color: ${M};
    background: color-mix(in srgb, ${M} 16%, #161616);
`,he=g(G)``,fe=g(G)`
    background: transparent;
`,me=g.p`
    margin-top: 8px;
    color: ${L};
    font-size: 12px;
`,s={Wrapper:ne,HeaderBar:ae,Grid:oe,Panel:re,Form:se,FieldRow:ie,Row:le,SliderRow:de,CheckRow:ce,CanvasBox:pe,Actions:ue,PrimaryBtn:ge,SecondaryBtn:he,GhostBtn:fe,TinyNote:me},K="sealMaker",R=(e,a)=>{try{const o=localStorage.getItem(`${K}::${e}`);return o?JSON.parse(o):a}catch{return a}},C=(e,a)=>{try{localStorage.setItem(`${K}::${e}`,JSON.stringify(a))}catch{}},U=1024;function ye(){const[e,a]=r.useState(R("shape","round")),[o,d]=r.useState(R("color","#d32f2f")),[l,u]=r.useState(R("border",20)),[i,y]=r.useState(R("topText","PAID")),[$,k]=r.useState(R("bottomText","RECEIVED")),[f,P]=r.useState(R("centerText","AR")),[v,h]=r.useState(R("transparent",!1)),[c,m]=r.useState(R("ringSize",48)),[p,E]=r.useState(R("centerSize",120)),[S,w]=r.useState(R("logo",null)),[x,z]=r.useState(R("logoScale",.28)),I=r.useRef(null),T=r.useRef(null),[Z,W]=r.useState(!1);r.useEffect(()=>C("shape",e),[e]),r.useEffect(()=>C("color",o),[o]),r.useEffect(()=>C("border",l),[l]),r.useEffect(()=>C("topText",i),[i]),r.useEffect(()=>C("bottomText",$),[$]),r.useEffect(()=>C("centerText",f),[f]),r.useEffect(()=>C("transparent",v),[v]),r.useEffect(()=>C("ringSize",c),[c]),r.useEffect(()=>C("centerSize",p),[p]),r.useEffect(()=>C("logo",S),[S]),r.useEffect(()=>C("logoScale",x),[x]),r.useEffect(()=>{const n=T.current;if(!n)return;n.width=U,n.height=U;const b=n.getContext("2d");xe(b,{shape:e,color:o,border:l,topText:i,bottomText:$,centerText:f,transparent:v,ringSize:c,centerSize:p,logo:S,logoScale:x})},[e,o,l,i,$,f,v,c,p,S,x]);const q=()=>{const n=T.current;if(!n)return;const b=document.createElement("a");b.download=`stamp-${e}.png`,b.href=n.toDataURL("image/png"),b.click()},Q=async()=>{const n=T.current;if(n)try{const b=await new Promise(j=>n.toBlob(j,"image/png"));if(!b)return;await navigator.clipboard.write([new window.ClipboardItem({"image/png":b})]),W(!0),setTimeout(()=>W(!1),1200)}catch{try{await navigator.clipboard.writeText(n.toDataURL("image/png"))}catch{}}},X=()=>{const n=T.current;if(!n)return;const b=n.toDataURL("image/png"),j=document.createElement("iframe");j.setAttribute("aria-hidden","true"),Object.assign(j.style,{position:"fixed",right:0,bottom:0,width:0,height:0,border:0}),document.body.appendChild(j);const B=A=>{(A==null?void 0:A.data)==="__seal_print_done__"&&(window.removeEventListener("message",B),setTimeout(()=>j.remove(),50))};window.addEventListener("message",B),j.srcdoc=`
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8" />
          <title>Print Stamp</title>
          <style>
            @page { margin: 10mm; }
            html, body { height: 100%; }
            body { display: grid; place-items: center; }
            img { width: 70mm; height: auto; }
          </style>
        </head>
        <body>
          <img id="stamp" src="${b}" />
          <script>
            const img = document.getElementById('stamp');
            img.onload = () => { setTimeout(() => { window.focus(); window.print(); }, 60); };
            window.onafterprint = () => { parent.postMessage("__seal_print_done__", "*"); };
          <\/script>
        </body>
      </html>
    `},Y=n=>{var B;const b=(B=n.target.files)==null?void 0:B[0];if(!b)return;const j=new FileReader;j.onload=()=>w(j.result),j.readAsDataURL(b)},ee=()=>{w(null),I.current&&(I.current.value="")};return t.jsxs(s.Wrapper,{children:[t.jsxs(s.HeaderBar,{children:[t.jsx("h1",{children:"SealMaker — Digital Stamp Generator"}),t.jsx("span",{className:"muted",children:"Single-purpose · Offline-first · LocalStorage only"})]}),t.jsxs(s.Grid,{children:[t.jsx(s.Panel,{children:t.jsxs(s.Form,{children:[t.jsxs(s.FieldRow,{children:[t.jsx("label",{children:"Shape"}),t.jsxs("select",{value:e,onChange:n=>a(n.target.value),children:[t.jsx("option",{value:"round",children:"Round"}),t.jsx("option",{value:"rect",children:"Rect"})]})]}),t.jsxs(s.FieldRow,{children:[t.jsx("label",{children:"Stamp color"}),t.jsx("input",{type:"color",value:o,onChange:n=>d(n.target.value)})]}),t.jsxs(s.FieldRow,{children:[t.jsx("label",{children:"Border thickness"}),t.jsxs(s.SliderRow,{children:[t.jsx("input",{type:"range",min:"8",max:"40",step:"1",value:l,onChange:n=>u(Number(n.target.value))}),t.jsxs("span",{children:[l,"px"]})]})]}),t.jsx(_,{label:"Top text",children:t.jsx("input",{type:"text",placeholder:"PAID",value:i,onChange:n=>y(n.target.value)})}),t.jsx(_,{label:"Bottom text",children:t.jsx("input",{type:"text",placeholder:"RECEIVED",value:$,onChange:n=>k(n.target.value)})}),t.jsx(_,{label:"Center text",children:t.jsx("input",{type:"text",placeholder:"AR",value:f,onChange:n=>P(n.target.value)})}),t.jsxs(s.FieldRow,{children:[t.jsx("label",{children:"Ring text size"}),t.jsxs(s.SliderRow,{children:[t.jsx("input",{type:"range",min:"28",max:"72",step:"1",value:c,onChange:n=>m(Number(n.target.value))}),t.jsxs("span",{children:[c,"px"]})]})]}),t.jsxs(s.FieldRow,{children:[t.jsx("label",{children:"Center text size"}),t.jsxs(s.SliderRow,{children:[t.jsx("input",{type:"range",min:"60",max:"200",step:"2",value:p,onChange:n=>E(Number(n.target.value))}),t.jsxs("span",{children:[p,"px"]})]})]}),t.jsxs(s.FieldRow,{children:[t.jsx("label",{children:"Center logo (optional)"}),t.jsxs(s.Row,{children:[t.jsx("input",{ref:I,type:"file",accept:"image/*",onChange:Y,onClick:n=>{n.currentTarget.value=""}}),S&&t.jsx(s.GhostBtn,{type:"button",onClick:ee,children:"Remove"})]}),t.jsxs(s.SliderRow,{children:[t.jsx("span",{children:"Logo size"}),t.jsx("input",{type:"range",min:"0.10",max:"0.50",step:"0.01",value:x,onChange:n=>z(Number(n.target.value))}),t.jsxs("span",{children:[Math.round(x*100),"%"]})]})]}),t.jsx(s.CheckRow,{children:t.jsxs("label",{children:[t.jsx("input",{type:"checkbox",checked:v,onChange:n=>h(n.target.checked)}),"Transparent background"]})})]})}),t.jsxs(s.Panel,{children:[t.jsx(s.CanvasBox,{children:t.jsx("canvas",{ref:T,"aria-label":"Stamp preview"})}),t.jsxs(s.Actions,{children:[t.jsx(s.PrimaryBtn,{type:"button",onClick:q,children:"Download PNG"}),t.jsx(s.SecondaryBtn,{type:"button",onClick:Q,children:Z?"Copied!":"Copy PNG"}),t.jsx(s.SecondaryBtn,{type:"button",onClick:X,children:"Print"})]}),t.jsx(s.TinyNote,{children:"Tip: Keep ring text short for better curvature. Use a logo with transparent background (PNG/SVG) if possible."})]})]})]})}function _({label:e,children:a}){return t.jsxs(s.FieldRow,{children:[t.jsx("label",{children:e}),a]})}function xe(e,a){const{shape:o,color:d,border:l,topText:u,bottomText:i,centerText:y,transparent:$,ringSize:k,centerSize:f,logo:P,logoScale:v}=a,h=U,c=U,m=h/2,p=c/2;if(e.clearRect(0,0,h,c),$||(e.fillStyle="#ffffff",e.fillRect(0,0,h,c)),e.strokeStyle=d,e.fillStyle=d,o==="round"){e.lineWidth=l,V(e,m,p,450),e.stroke(),e.lineWidth=Math.max(2,Math.floor(l*.35)),V(e,m,p,390),e.stroke();const S=`700 ${k}px system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif`;if(u!=null&&u.trim()&&O(e,u.toUpperCase(),m,p,415,Math.PI+Math.PI*.075,Math.PI-Math.PI*.075,S,d,!0),i!=null&&i.trim()&&O(e,i.toUpperCase(),m,p,430,Math.PI*.075,Math.PI-Math.PI*.075,S,d,!1),y!=null&&y.trim()&&(e.save(),e.font=`800 ${f}px system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif`,e.textAlign="center",e.textBaseline="middle",e.fillStyle=d,e.fillText(y.toUpperCase(),m,p+4),e.restore()),P){const w=new Image;w.onload=()=>{const x=Math.round(h*H(v,.1,.5)),z=m-x/2,I=p-x/2;e.save(),F(e,z-10,I-10,x+20,x+20,16),e.fillStyle="#fff",e.fill(),e.restore(),e.drawImage(w,z,I,x,x)},w.src=P}}else if(e.lineWidth=l,F(e,80,80,h-80*2,c-80*2,60),e.stroke(),e.lineWidth=Math.max(2,Math.floor(l*.35)),F(e,130,130,h-130*2,c-130*2,40),e.stroke(),e.save(),e.font=`700 ${k}px system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif`,e.textAlign="center",e.fillStyle=d,u!=null&&u.trim()&&e.fillText(u.toUpperCase(),m,120+k+15),i!=null&&i.trim()&&e.fillText(i.toUpperCase(),m,c-(120+k)),e.restore(),y!=null&&y.trim()&&(e.save(),e.font=`800 ${f}px system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif`,e.textAlign="center",e.textBaseline="middle",e.fillStyle=d,e.fillText(y.toUpperCase(),m,p+4),e.restore()),P){const S=new Image;S.onload=()=>{const w=Math.round(h*H(v,.1,.5));e.drawImage(S,m-w/2,p-w/2,w,w)},S.src=P}}function O(e,a,o,d,l,u,i,y,$,k){const f=[...a];if(f.length===0)return;const P=Math.abs(i-u),v=f.length>1?P/(f.length-1):0;e.save(),e.font=y,e.fillStyle=$,e.textAlign="center",e.textBaseline="middle";for(let h=0;h<f.length;h++){const c=k?u-h*v:u+h*v,m=o+l*Math.cos(c),p=d+l*Math.sin(c);e.save();const E=k?c+Math.PI/2:c-Math.PI/2;e.translate(m,p),e.rotate(E),e.fillText(f[h],0,0),e.restore()}e.restore()}function V(e,a,o,d){e.beginPath(),e.arc(a,o,d,0,Math.PI*2),e.closePath()}function F(e,a,o,d,l,u){const i=Math.min(u,d/2,l/2);e.beginPath(),e.moveTo(a+i,o),e.arcTo(a+d,o,a+d,o+l,i),e.arcTo(a+d,o+l,a,o+l,i),e.arcTo(a,o+l,a,o,i),e.arcTo(a,o,a+d,o,i),e.closePath()}function H(e,a,o){return Math.max(a,Math.min(o,e))}export{ye as default};
