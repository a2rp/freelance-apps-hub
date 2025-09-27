import{d as m,r,j as t}from"./index-DmvBgYj_.js";const oe="var(--card, #111)",H="var(--text, #e9e9e9)",L="var(--muted, #b7b7b7)",_="var(--border, #222)",P="var(--accent, #22c55e)",Q="var(--radius, 16px)",se=m.div`
    color: ${H};
    padding: var(--space-5, 32px) var(--space-4, 24px);
`,ie=m.div`
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
`,le=m.div`
    display: grid;
    grid-template-columns: 1.1fr 1fr;
    gap: var(--space-4, 24px);
    @media (max-width: 960px) {
        grid-template-columns: 1fr;
    }
`,ce=m.section`
    background: ${oe};
    border: 1px solid ${_};
    border-radius: ${Q};
    box-shadow: var(--shadow, 0 8px 30px rgba(0, 0, 0, 0.25));
    padding: var(--space-4, 24px);
`,de=m.form`
    display: grid;
    gap: var(--space-3, 16px);
    input[type="text"],
    input[type="color"],
    input[type="file"],
    select {
        width: 100%;
        background: #0f0f0f;
        color: ${H};
        border: 1px solid ${_};
        border-radius: 12px;
        padding: 10px 12px;
        outline: none;
    }
    input:focus,
    select:focus {
        border-color: ${P};
        box-shadow: 0 0 0 3px color-mix(in srgb, ${P} 30%, transparent);
    }
    label {
        color: ${L};
        font-size: 12.5px;
    }
`,pe=m.div`
    display: grid;
    gap: 8px;
`,ge=m.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: center;
`,ue=m.div`
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 10px;
    align-items: center;
    input[type="range"] {
        accent-color: ${P};
    }
    span {
        color: ${L};
        font-size: 12px;
    }
`,he=m.div`
    display: flex;
    align-items: center;
    gap: 10px;
    label {
        display: flex;
        align-items: center;
        gap: 8px;
    }
    input[type="checkbox"] {
        accent-color: ${P};
    }
`,fe=m.div`
    display: grid;
    place-items: center;
    padding: 12px;
    border: 1px dashed ${_};
    border-radius: ${Q};
    background: #0f0f0f;
    canvas {
        width: min(420px, 80vw);
        height: auto;
    }
`,me=m.div`
    margin-top: var(--space-3, 16px);
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`,V=m.button`
    border-radius: 12px;
    padding: 10px 14px;
    font-weight: 600;
    cursor: pointer;
    border: 1px solid ${_};
    background: #161616;
    color: ${H};
    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`,xe=m(V)`
    border-color: ${P};
    background: color-mix(in srgb, ${P} 16%, #161616);
`,be=m(V)``,je=m(V)`
    background: transparent;
`,ye=m.p`
    margin-top: 8px;
    color: ${L};
    font-size: 12px;
`,a={Wrapper:se,HeaderBar:ie,Grid:le,Panel:ce,Form:de,FieldRow:pe,Row:ge,SliderRow:ue,CheckRow:he,CanvasBox:fe,Actions:me,PrimaryBtn:xe,SecondaryBtn:be,GhostBtn:je,TinyNote:ye},X="sealMaker",N=1024,y=(e,o)=>{try{const s=localStorage.getItem(`${X}::${e}`);return s?JSON.parse(s):o}catch{return o}},S=(e,o)=>{try{localStorage.setItem(`${X}::${e}`,JSON.stringify(o))}catch{}};function ve(){const[e,o]=r.useState(y("shape","round")),[s,d]=r.useState(y("color","#2AA1FF")),[l,x]=r.useState(y("border",20)),[i,w]=r.useState(y("topText","NOT PAID")),[C,v]=r.useState(y("bottomText","RECEIVED")),[h,M]=r.useState(y("centerText","AR")),[k,$]=r.useState(y("transparent",!1)),[p,c]=r.useState(y("ringSize",48)),[f,g]=r.useState(y("centerSize",120)),[u,z]=r.useState(y("ringOffset",45)),[b,T]=r.useState(y("ringTracking",1.5)),[E,I]=r.useState(y("logo",null)),[B,F]=r.useState(y("logoScale",.28)),D=r.useRef(null),A=r.useRef(null),[Y,J]=r.useState(!1);r.useEffect(()=>S("shape",e),[e]),r.useEffect(()=>S("color",s),[s]),r.useEffect(()=>S("border",l),[l]),r.useEffect(()=>S("topText",i),[i]),r.useEffect(()=>S("bottomText",C),[C]),r.useEffect(()=>S("centerText",h),[h]),r.useEffect(()=>S("transparent",k),[k]),r.useEffect(()=>S("ringSize",p),[p]),r.useEffect(()=>S("centerSize",f),[f]),r.useEffect(()=>S("ringOffset",u),[u]),r.useEffect(()=>S("ringTracking",b),[b]),r.useEffect(()=>S("logo",E),[E]),r.useEffect(()=>S("logoScale",B),[B]),r.useEffect(()=>{const n=A.current;if(!n)return;n.width=N,n.height=N;const j=n.getContext("2d");Se(j,{shape:e,color:s,border:l,topText:i,bottomText:C,centerText:h,transparent:k,ringSize:p,centerSize:f,ringOffset:u,ringTracking:b,logo:E,logoScale:B})},[e,s,l,i,C,h,k,p,f,u,b,E,B]);const ee=()=>{const n=A.current;if(!n)return;const j=document.createElement("a");j.download=`stamp-${e}.png`,j.href=n.toDataURL("image/png"),j.click()},te=async()=>{const n=A.current;if(n){try{const j=await new Promise(R=>n.toBlob(R,"image/png"));if(j){await navigator.clipboard.write([new ClipboardItem({"image/png":j})]),J(!0),setTimeout(()=>J(!1),1200);return}}catch{}try{await navigator.clipboard.writeText(n.toDataURL("image/png"))}catch{}}},ne=()=>{const n=A.current;if(!n)return;const j=n.toDataURL("image/png"),R=document.createElement("iframe");Object.assign(R.style,{position:"fixed",right:0,bottom:0,width:0,height:0,border:0}),document.body.appendChild(R);const U=O=>{(O==null?void 0:O.data)==="__seal_print_done__"&&(window.removeEventListener("message",U),setTimeout(()=>R.remove(),50))};window.addEventListener("message",U),R.srcdoc=`
      <!doctype html>
      <html><head><meta charset="utf-8">
      <title>Print Stamp</title>
      <style>
        @page { margin: 10mm; }
        html,body{height:100%} body{display:grid;place-items:center}
        img{ width:72mm; height:auto; }
      </style>
      </head>
      <body>
        <img id="stamp" src="${j}" />
        <script>
          const img = document.getElementById('stamp');
          img.onload = () => { setTimeout(()=>{ window.focus(); window.print(); }, 60); };
          window.onafterprint = () => { parent.postMessage("__seal_print_done__", "*"); };
        <\/script>
      </body></html>
    `},re=n=>{var U;const j=(U=n.target.files)==null?void 0:U[0];if(!j)return;const R=new FileReader;R.onload=()=>I(R.result),R.readAsDataURL(j)},ae=()=>{I(null),D.current&&(D.current.value="")};return t.jsxs(a.Wrapper,{children:[t.jsxs(a.HeaderBar,{children:[t.jsx("h1",{children:"SealMaker — Digital Stamp Generator"}),t.jsx("span",{className:"muted",children:"Accurate arc text • Offline-first • LocalStorage only"})]}),t.jsxs(a.Grid,{children:[t.jsx(a.Panel,{children:t.jsxs(a.Form,{children:[t.jsxs(a.FieldRow,{children:[t.jsx("label",{children:"Shape"}),t.jsxs("select",{value:e,onChange:n=>o(n.target.value),children:[t.jsx("option",{value:"round",children:"Round"}),t.jsx("option",{value:"rect",children:"Rect"})]})]}),t.jsxs(a.FieldRow,{children:[t.jsx("label",{children:"Stamp color"}),t.jsx("input",{type:"color",value:s,onChange:n=>d(n.target.value)})]}),t.jsxs(a.FieldRow,{children:[t.jsx("label",{children:"Border thickness"}),t.jsxs(a.SliderRow,{children:[t.jsx("input",{type:"range",min:"8",max:"40",step:"1",value:l,onChange:n=>x(Number(n.target.value))}),t.jsxs("span",{children:[l,"px"]})]})]}),t.jsx(W,{label:"Top text",children:t.jsx("input",{type:"text",placeholder:"PAID",value:i,onChange:n=>w(n.target.value)})}),t.jsx(W,{label:"Bottom text",children:t.jsx("input",{type:"text",placeholder:"RECEIVED",value:C,onChange:n=>v(n.target.value)})}),t.jsx(W,{label:"Center text",children:t.jsx("input",{type:"text",placeholder:"AR",value:h,onChange:n=>M(n.target.value)})}),t.jsxs(a.FieldRow,{children:[t.jsx("label",{children:"Ring offset (round)"}),t.jsxs(a.SliderRow,{children:[t.jsx("input",{type:"range",min:"0",max:"80",step:"1",value:u,onChange:n=>z(Number(n.target.value))}),t.jsxs("span",{children:[u,"px"]})]})]}),t.jsxs(a.FieldRow,{children:[t.jsx("label",{children:"Ring letter spacing"}),t.jsxs(a.SliderRow,{children:[t.jsx("input",{type:"range",min:"0",max:"6",step:"0.1",value:b,onChange:n=>T(Number(n.target.value))}),t.jsxs("span",{children:[b,"px"]})]})]}),t.jsxs(a.FieldRow,{children:[t.jsx("label",{children:"Ring text size"}),t.jsxs(a.SliderRow,{children:[t.jsx("input",{type:"range",min:"28",max:"72",step:"1",value:p,onChange:n=>c(Number(n.target.value))}),t.jsxs("span",{children:[p,"px"]})]})]}),t.jsxs(a.FieldRow,{children:[t.jsx("label",{children:"Center text size"}),t.jsxs(a.SliderRow,{children:[t.jsx("input",{type:"range",min:"60",max:"200",step:"2",value:f,onChange:n=>g(Number(n.target.value))}),t.jsxs("span",{children:[f,"px"]})]})]}),t.jsxs(a.FieldRow,{children:[t.jsx("label",{children:"Center logo (optional)"}),t.jsxs(a.Row,{children:[t.jsx("input",{ref:D,type:"file",accept:"image/*",onChange:re,onClick:n=>n.currentTarget.value=""}),E&&t.jsx(a.GhostBtn,{type:"button",onClick:ae,children:"Remove"})]}),t.jsxs(a.SliderRow,{children:[t.jsx("span",{children:"Logo size"}),t.jsx("input",{type:"range",min:"0.10",max:"0.50",step:"0.01",value:B,onChange:n=>F(Number(n.target.value))}),t.jsxs("span",{children:[Math.round(B*100),"%"]})]})]}),t.jsx(a.CheckRow,{children:t.jsxs("label",{children:[t.jsx("input",{type:"checkbox",checked:k,onChange:n=>$(n.target.checked)}),"Transparent background"]})})]})}),t.jsxs(a.Panel,{children:[t.jsx(a.CanvasBox,{children:t.jsx("canvas",{ref:A,"aria-label":"Stamp preview"})}),t.jsxs(a.Actions,{children:[t.jsx(a.PrimaryBtn,{type:"button",onClick:ee,children:"Download PNG"}),t.jsx(a.SecondaryBtn,{type:"button",onClick:te,children:Y?"Copied!":"Copy PNG"}),t.jsx(a.SecondaryBtn,{type:"button",onClick:ne,children:"Print"})]}),t.jsxs(a.TinyNote,{children:["If the ring text looks tight/loose, tweak ",t.jsx("b",{children:"Ring letter spacing"}),". Use ",t.jsx("b",{children:"Ring offset"})," to move text away from the border."]})]})]})]})}function W({label:e,children:o}){return t.jsxs(a.FieldRow,{children:[t.jsx("label",{children:e}),o]})}function Se(e,o){const{shape:s,color:d,border:l,topText:x,bottomText:i,centerText:w,transparent:C,ringSize:v,centerSize:h,ringOffset:M,ringTracking:k,logo:$,logoScale:p}=o,c=N,f=N,g=c/2,u=f/2;if(e.clearRect(0,0,c,f),C||(e.fillStyle="#fff",e.fillRect(0,0,c,f)),e.strokeStyle=d,e.fillStyle=d,s==="round"){e.lineWidth=l,q(e,g,u,450),e.stroke(),e.lineWidth=Math.max(2,Math.floor(l*.35)),q(e,g,u,390),e.stroke();const b=`700 ${v}px system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif`,T=450-(20+M);if(x!=null&&x.trim()&&Z(e,x.toUpperCase(),g,u,T,-Math.PI/2,!0,b,d,k),i!=null&&i.trim()&&Z(e,i.toUpperCase(),g,u,T,Math.PI/2,!1,b,d,k),w!=null&&w.trim()&&(e.save(),e.font=`800 ${h}px system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif`,e.textAlign="center",e.textBaseline="middle",e.fillStyle=d,e.fillText(w.toUpperCase(),g,u+4),e.restore()),$){const E=new Image;E.onload=()=>{const I=Math.round(c*K(p,.1,.5)),B=g-I/2,F=u-I/2;e.save(),G(e,B-10,F-10,I+20,I+20,16),e.fillStyle="#fff",e.fill(),e.restore(),e.drawImage(E,B,F,I,I)},E.src=$}}else if(e.lineWidth=l,G(e,80,80,c-80*2,f-80*2,60),e.stroke(),e.lineWidth=Math.max(2,Math.floor(l*.35)),G(e,130,130,c-130*2,f-130*2,40),e.stroke(),e.save(),e.font=`700 ${v}px system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif`,e.textAlign="center",e.fillStyle=d,x!=null&&x.trim()&&e.fillText(x.toUpperCase(),g,120+v+15),i!=null&&i.trim()&&e.fillText(i.toUpperCase(),g,f-(120+v)),e.restore(),w!=null&&w.trim()&&(e.save(),e.font=`800 ${h}px system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif`,e.textAlign="center",e.textBaseline="middle",e.fillStyle=d,e.fillText(w.toUpperCase(),g,u+4),e.restore()),$){const b=new Image;b.onload=()=>{const T=Math.round(c*K(p,.1,.5));e.drawImage(b,g-T/2,u-T/2,T,T)},b.src=$}}function Z(e,o,s,d,l,x,i,w,C,v=0){const h=[...o];if(!h.length)return;e.save(),e.font=w,e.fillStyle=C,e.textAlign="center",e.textBaseline="middle";const M=h.map(c=>e.measureText(c).width),$=(M.reduce((c,f)=>c+f,0)+v*Math.max(0,h.length-1))/l;let p=i?x-$/2:x+$/2;for(let c=0;c<h.length;c++){const g=M[c]/l/2;i?p+=g:p-=g;const u=s+l*Math.cos(p),z=d+l*Math.sin(p);e.save();const b=i?p+Math.PI/2:p-Math.PI/2;e.translate(u,z),e.rotate(b),e.fillText(h[c],0,0),e.restore(),i?p+=g+(c<h.length-1?v/l:0):p-=g+(c<h.length-1?v/l:0)}e.restore()}function q(e,o,s,d){e.beginPath(),e.arc(o,s,d,0,Math.PI*2),e.closePath()}function G(e,o,s,d,l,x){const i=Math.min(x,d/2,l/2);e.beginPath(),e.moveTo(o+i,s),e.arcTo(o+d,s,o+d,s+l,i),e.arcTo(o+d,s+l,o,s+l,i),e.arcTo(o,s+l,o,s,i),e.arcTo(o,s,o+d,s,i),e.closePath()}function K(e,o,s){return Math.max(o,Math.min(s,e))}export{ve as default};
