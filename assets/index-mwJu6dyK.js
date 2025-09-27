import{d,r as x,j as e}from"./index-Ch-K3RgL.js";const L="var(--card, #111)",B="var(--text, #e9e9e9)",P="var(--muted, #b7b7b7)",$="var(--border, #222)",U="var(--accent, #22c55e)",V="var(--radius, 16px)",W="var(--shadow, 0 8px 30px rgba(0,0,0,0.25))",H="inset 0 1px 0 rgba(255,255,255,0.04)",I=d.div`
    background: ${L};
    border: 1px solid ${$};
    border-radius: ${V};
    box-shadow: ${W};
    padding: 16px;
`,N=d.button`
    background: ${a=>a.$variant==="ghost"?"transparent":U};
    color: ${a=>a.$variant==="ghost"?B:"#0b0b0b"};
    border: 1px solid ${a=>a.$variant==="ghost"?$:U};
    padding: 10px 14px;
    border-radius: 12px;
    cursor: pointer;
    font-weight: 600;
    transition: transform 0.08s ease, opacity 0.2s ease, background 0.2s ease;
    user-select: none;
    &:hover {
        transform: translateY(-1px);
    }
    &:active {
        transform: translateY(0);
        opacity: 0.9;
    }
`,o={Wrapper:d.div`
        max-width: var(--maxw, 1200px);
        margin: 0 auto;
        padding: 20px;
        color: ${B};
    `,HeaderRow:d.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        margin-bottom: 16px;

        h2 {
            margin: 0;
            font-size: 22px;
            letter-spacing: 0.3px;
        }
    `,ButtonRow:d.div`
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    `,Button:N,Grid:d.div`
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;

        @media (max-width: 980px) {
            grid-template-columns: 1fr;
        }
    `,PreviewCard:d(I)`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        gap: 12px;
    `,ControlsCard:d(I)`
        display: grid;
        grid-template-columns: 1fr;
        gap: 12px;
    `,Sizer:d.div`
        /* Transient props so they don't leak to the DOM */
        width: ${a=>a.$w||360}px;
        height: ${a=>a.$h||360}px;
        display: grid;
        place-items: center;
        background: radial-gradient(
                100% 100% at 0% 0%,
                rgba(255, 255, 255, 0.04),
                transparent
            ),
            ${L};
        border: 1px dashed ${$};
        border-radius: ${V};
        box-shadow: ${H};
        overflow: hidden;

        svg {
            display: block;
        }
    `,Help:d.div`
        color: ${P};
        font-size: 12.5px;
    `,Field:d.label`
        display: grid;
        gap: 6px;

        > span,
        > label {
            font-size: 13px;
            color: ${P};
        }

        input[type="number"],
        input[type="text"],
        input[type="color"],
        textarea {
            background: #0e0e0e;
            color: ${B};
            border: 1px solid ${$};
            border-radius: 10px;
            padding: 10px 12px;
            outline: none;
        }

        input[type="range"] {
            width: 100%;
        }
    `,FieldRow:d.div`
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 10px;

        @media (max-width: 640px) {
            grid-template-columns: 1fr;
        }
    `,CodeBlock:d.textarea`
        width: 100%;
        min-height: 120px;
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
            "Liberation Mono", "Courier New", monospace;
        font-size: 12.5px;
        line-height: 1.5;
        background: #0b0b0b;
        border: 1px solid ${$};
        color: ${B};
        border-radius: 12px;
        padding: 12px;
        resize: vertical;
    `};function T(a){let n=a>>>0;return function(){n+=1831565813;let s=Math.imul(n^n>>>15,1|n);return s^=s+Math.imul(s^s>>>7,61|s),((s^s>>>14)>>>0)/4294967296}}function Y({seed:a,points:n,irregularity:s,smoothness:S,size:h}){const k=T(a),v=h/2,C=h/2,r=h*.36,g=[];for(let i=0;i<n;i++){const p=i/n*Math.PI*2,c=(k()*2-1)*s,l=r*(1+c);g.push([v+Math.cos(p)*l,C+Math.sin(p)*l])}const u=[];for(let i=0;i<n;i++){const p=g[(i-1+n)%n],c=g[i],l=g[(i+1)%n],f=g[(i+2)%n],m=S*.5,w=c[0]+(l[0]-p[0])*m/3,M=c[1]+(l[1]-p[1])*m/3,G=l[0]-(f[0]-c[0])*m/3,z=l[1]-(f[1]-c[1])*m/3;i===0&&u.push(`M ${c[0].toFixed(2)} ${c[1].toFixed(2)}`),u.push(`C ${w.toFixed(2)} ${M.toFixed(2)}, ${G.toFixed(2)} ${z.toFixed(2)}, ${l[0].toFixed(2)} ${l[1].toFixed(2)}`)}return u.push("Z"),u.join(" ")}const Z=()=>{const[a,n]=x.useState(123456),[s,S]=x.useState(8),[h,k]=x.useState(.35),[v,C]=x.useState(.75),[r,g]=x.useState(360),[u,i]=x.useState("#22c55e"),[p,c]=x.useState("#e9e9e9"),[l,f]=x.useState(2),m=x.useMemo(()=>Y({seed:a,points:s,irregularity:h,smoothness:v,size:r}),[a,s,h,v,r]),w=x.useMemo(()=>`
<svg xmlns="http://www.w3.org/2000/svg" width="${r}" height="${r}" viewBox="0 0 ${r} ${r}">
  <path d="${m}" fill="${u}" stroke="${p}" stroke-width="${l}" />
</svg>`.trim(),[m,r,u,p,l]),M=()=>{const t=typeof crypto<"u"&&crypto.getRandomValues?crypto.getRandomValues(new Uint32Array(1))[0]:Math.floor(Math.random()*1e9);n(t)},G=async()=>{try{await navigator.clipboard.writeText(w),alert("SVG copied to clipboard.")}catch{alert("Copy failed. Select & copy from the textarea below.")}},z=(t,j,F="image/svg+xml")=>{const R=new Blob([t],{type:F}),y=URL.createObjectURL(R),b=document.createElement("a");b.href=y,b.download=j,b.click(),URL.revokeObjectURL(y)},E=()=>z(w,`blob-${a}.svg`),O=async()=>{const t=new Image;t.decoding="sync",t.onload=()=>{const j=document.createElement("canvas");j.width=r,j.height=r;const F=j.getContext("2d");F.clearRect(0,0,r,r),F.drawImage(t,0,0),j.toBlob(R=>{if(!R)return;const y=URL.createObjectURL(R),b=document.createElement("a");b.href=y,b.download=`blob-${a}.png`,b.click(),URL.revokeObjectURL(y)},"image/png")},t.onerror=()=>alert("PNG export failed."),t.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(w)},D=()=>{n(123456),S(8),k(.35),C(.75),g(360),i("#22c55e"),c("#e9e9e9"),f(2)};return e.jsxs(o.Wrapper,{children:[e.jsxs(o.HeaderRow,{children:[e.jsx("h2",{children:"Blob Generator"}),e.jsxs(o.ButtonRow,{children:[e.jsx(o.Button,{onClick:M,children:"Randomize"}),e.jsx(o.Button,{onClick:G,children:"Copy SVG"}),e.jsx(o.Button,{onClick:E,children:"Download .svg"}),e.jsx(o.Button,{onClick:O,children:"Download .png"}),e.jsx(o.Button,{$variant:"ghost",onClick:D,children:"Reset"})]})]}),e.jsxs(o.Grid,{children:[e.jsxs(o.PreviewCard,{children:[e.jsx(o.Sizer,{$w:r,$h:r,children:e.jsx("svg",{width:r,height:r,viewBox:`0 0 ${r} ${r}`,role:"img","aria-label":"Blob Preview",children:e.jsx("path",{d:m,fill:u,stroke:p,strokeWidth:l})})}),e.jsx(o.Help,{children:"Tip: Same seed ⇒ same blob. Export as SVG for crisp logos/backgrounds."})]}),e.jsxs(o.ControlsCard,{as:"form",onSubmit:t=>t.preventDefault(),children:[e.jsxs(o.Field,{children:[e.jsx("label",{children:"Seed"}),e.jsx("input",{type:"number",value:a,onChange:t=>n(parseInt(t.target.value||0,10))})]}),e.jsxs(o.Field,{children:[e.jsxs("label",{children:["Points: ",s]}),e.jsx("input",{type:"range",min:3,max:16,value:s,onChange:t=>S(parseInt(t.target.value,10))})]}),e.jsxs(o.Field,{children:[e.jsxs("label",{children:["Irregularity: ",h.toFixed(2)]}),e.jsx("input",{type:"range",step:"0.01",min:0,max:1,value:h,onChange:t=>k(parseFloat(t.target.value))})]}),e.jsxs(o.Field,{children:[e.jsxs("label",{children:["Smoothness: ",v.toFixed(2)]}),e.jsx("input",{type:"range",step:"0.01",min:0,max:1,value:v,onChange:t=>C(parseFloat(t.target.value))})]}),e.jsxs(o.Field,{children:[e.jsxs("label",{children:["Preview Size: ",r,"px"]}),e.jsx("input",{type:"range",min:240,max:520,step:10,value:r,onChange:t=>g(parseInt(t.target.value,10))})]}),e.jsxs(o.FieldRow,{children:[e.jsxs(o.Field,{children:[e.jsx("label",{children:"Fill"}),e.jsx("input",{type:"color",value:u,onChange:t=>i(t.target.value)})]}),e.jsxs(o.Field,{children:[e.jsx("label",{children:"Stroke"}),e.jsx("input",{type:"color",value:p,onChange:t=>c(t.target.value)})]}),e.jsxs(o.Field,{children:[e.jsx("label",{children:"Stroke Width"}),e.jsx("input",{type:"number",min:0,step:.5,value:l,onChange:t=>f(parseFloat(t.target.value||0))})]})]}),e.jsx(o.CodeBlock,{as:"textarea",readOnly:!0,rows:6,value:w})]})]})]})};export{Z as default};
