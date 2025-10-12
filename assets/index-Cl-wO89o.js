import{d as l,r as m,j as e}from"./index-vzKPnzai.js";const f="var(--bg)",b="var(--card)",j="var(--text)",v="var(--muted)",h="var(--border)",u="var(--radius)",W="var(--shadow)",F="var(--accent)",le="var(--danger, #e5484d)",n={Wrapper:l.div`
        color: ${j};
        background: ${f};
        min-height: 100%;
        padding: 16px;

        /* app container constraints */
        max-width: 1440px;
        margin: 0 auto;
        display: grid;
        gap: 16px;
    `,Header:l.header`
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        gap: 16px;

        h1 {
            margin: 0 0 6px 0;
            font-size: 20px;
            line-height: 1.2;
        }
        p {
            margin: 0;
            color: ${v};
            font-size: 14px;
        }
    `,Badges:l.div`
        display: flex;
        gap: 8px;
        align-items: center;
        .badge {
            background: ${b};
            border: 1px solid ${h};
            padding: 6px 10px;
            border-radius: 999px;
            font-size: 12px;
            box-shadow: ${W};
        }
    `,Layout:l.div`
        display: grid;
        grid-template-columns: 1.6fr 1fr;
        gap: 16px;
        @media (max-width: 1024px) {
            grid-template-columns: 1fr;
        }
    `,Card:l.div`
        background: ${b};
        border: 1px solid ${h};
        border-radius: ${u};
        box-shadow: ${W};
        padding: 16px;

        h3 {
            margin: 0 0 12px 0;
            font-size: 16px;
        }
        p.muted {
            color: ${v};
            font-size: 13px;
        }
    `,Section:l.section`
        & + & {
            margin-top: 16px;
        }
    `,SectionTitle:l.h2`
        margin: 0 0 10px 0;
        font-size: 15px;
        font-weight: 600;
    `,Grid:l.div`
        display: grid;
        gap: 12px;
        grid-template-columns: ${i=>i.cols?`repeat(${i.cols}, 1fr)`:"1fr 1fr"};

        .span2 {
            grid-column: span 2;
        }
        @media (max-width: 720px) {
            grid-template-columns: 1fr;
            .span2 {
                grid-column: span 1;
            }
        }
    `,Field:l.div`
        display: grid;
        gap: 6px;
        align-items: end;

        label {
            font-size: 13px;
            color: ${j};
        }
        .checkbox {
            display: inline-flex;
            align-items: center;
            gap: 8px;
        }
        code {
            background: ${f};
            border: 1px solid ${h};
            padding: 0 6px;
            border-radius: 6px;
        }

        input[type="number"],
        input[type="text"],
        input[type="file"],
        input[type="range"],
        select {
            width: 100%;
            border: 1px solid ${h};
            background: ${f};
            color: ${j};
            border-radius: calc(${u} - 2px);
            padding: 10px 12px;
            font: inherit;
            outline: none;
            transition: border-color 0.15s ease;
        }
        input:focus,
        select:focus {
            border-color: ${F};
        }

        /* tiny mid cell for "×" or ":" rendered via attr() */
        &[mid]::before {
            content: attr(mid);
            display: inline-block;
            color: ${v};
            font-size: 16px;
            padding: 10px 0;
        }
    `,Presets:l.div`
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-top: 10px;

        button {
            appearance: none;
            border: 1px solid ${h};
            background: ${b};
            color: ${j};
            padding: 8px 12px;
            border-radius: ${u};
            cursor: pointer;
            font: inherit;
            transition: border-color 0.15s ease;
        }
        button:hover {
            border-color: ${F};
        }
        .ghost {
            background: ${f};
        }
    `,DropZone:l.div`
        position: relative;
        border: 1px dashed ${h};
        border-radius: ${u};
        background: ${f};
        padding: 16px;
        min-height: 88px;

        input[type="file"] {
            position: absolute;
            inset: 0;
            opacity: 0;
            cursor: pointer;
        }

        .dz-empty {
            display: grid;
            place-items: center;
            gap: 8px;
            color: ${v};
            text-align: center;
        }
        .dz-empty .btnlike {
            display: inline-block;
            padding: 8px 12px;
            border-radius: ${u};
            border: 1px solid ${h};
            background: ${b};
            cursor: pointer;
        }

        .dz-hasfile {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 8px;
        }
        .dz-hasfile .name {
            font-size: 14px;
        }
        .dz-hasfile .actions {
            display: flex;
            gap: 8px;
        }
    `,Actions:l.div`
        margin-top: 16px;
        display: flex;
        gap: 10px;
        align-items: center;
        .spacer {
            flex: 1;
        }
        button {
            appearance: none;
            border: 1px solid ${h};
            background: ${b};
            color: ${j};
            padding: 10px 14px;
            border-radius: ${u};
            cursor: pointer;
            font: inherit;
            transition: transform 0.02s ease-in-out, border-color 0.15s ease;
            &:hover {
                border-color: ${F};
            }
            &:active {
                transform: translateY(1px);
            }
            &:disabled {
                opacity: 0.55;
                cursor: not-allowed;
            }
        }
        .ghost {
            background: ${f};
        }
    `,PreviewWrap:l.div`
        display: grid;
        place-items: center;
    `,PreviewBox:l.div`
        position: relative;
        width: 60%;
        background: rgba(0, 0, 0, 0.06);
        border: 1px solid ${h};
        border-radius: ${u};
        overflow: hidden;
        box-shadow: ${W};

        img,
        .placeholder {
            display: block;
            width: 100%;
            height: 100%;
        }

        .placeholder {
            display: grid;
            place-items: center;
            color: ${v};
            font-size: 24px;
            font-weight: 600;
            letter-spacing: 1px;
        }

        &[data-grid="1"] .grid {
            position: absolute;
            inset: 0;
            background-image: linear-gradient(
                    to right,
                    rgba(255, 255, 255, 0.15) 1px,
                    transparent 1px
                ),
                linear-gradient(
                    to bottom,
                    rgba(255, 255, 255, 0.15) 1px,
                    transparent 1px
                );
            background-size: 20px 20px;
            pointer-events: none;
        }
    `,Side:l.aside`
        display: grid;
        gap: 16px;
    `,SavedList:l.ul`
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        gap: 10px;

        li {
            display: flex;
            align-items: center;
            justify-content: space-between;
            border: 1px solid ${h};
            background: ${f};
            border-radius: ${u};
            padding: 10px 12px;
        }
        .meta {
            display: grid;
            gap: 2px;
        }
        .meta span {
            color: ${v};
            font-size: 12px;
        }
        .row-actions {
            display: flex;
            gap: 8px;
        }
        .row-actions .ghost {
            background: ${f};
            border: 1px solid ${h};
        }
        .row-actions button {
            appearance: none;
            border: 1px solid ${h};
            background: ${b};
            color: ${j};
            padding: 8px 12px;
            border-radius: ${u};
            cursor: pointer;
            font: inherit;
            transition: border-color 0.15s ease;
            &:hover {
                border-color: ${F};
            }
        }
    `,Help:l.div`
        font-size: 12px;
        color: ${v};
    `,Error:l.div`
        min-height: 16px;
        font-size: 12px;
        color: ${le};
    `,ModalOverlay:l.div`
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
        display: grid;
        place-items: center;
        z-index: 40;
    `,ModalCard:l.div`
        width: min(520px, 92vw);
        background: ${b};
        color: ${j};
        border: 1px solid ${h};
        border-radius: ${u};
        box-shadow: ${W};
        padding: 16px;
        header h3 {
            margin: 0 0 8px 0;
            font-size: 16px;
        }
        .modal-message {
            margin: 0 0 16px 0;
            color: ${v};
        }
        .modal-actions {
            display: flex;
            gap: 10px;
            justify-content: flex-end;
        }
        .modal-actions .ghost {
            background: ${f};
            border: 1px solid ${h};
        }
        .modal-actions button {
            appearance: none;
            border: 1px solid ${h};
            background: ${b};
            color: ${j};
            padding: 10px 14px;
            border-radius: ${u};
            cursor: pointer;
            font: inherit;
            transition: border-color 0.15s ease;
            &:hover {
                border-color: ${F};
            }
        }
    `},de=1024*1024,ce=["image/png","image/jpeg","image/jpg","image/webp"];function V(i,o){for(i=Math.abs(Math.round(i)),o=Math.abs(Math.round(o));o;){const d=o;o=i%o,i=d}return i||1}function H(i,o){const d=V(i,o);return[Math.max(1,Math.round(i/d)),Math.max(1,Math.round(o/d))]}function P(i,o,d){return Math.min(d,Math.max(o,i))}function C(i,o=0){return Number.isFinite(i)?Number(i.toFixed(o)):0}function he(){return Math.random().toString(36).slice(2,9)}const pe=({open:i,title:o="Confirm",message:d,confirmText:S="Confirm",cancelText:z="Cancel",onConfirm:w,onCancel:$})=>i?e.jsx(n.ModalOverlay,{role:"dialog","aria-modal":"true",children:e.jsxs(n.ModalCard,{children:[e.jsx("header",{children:e.jsx("h3",{children:o})}),e.jsx("p",{className:"modal-message",children:d}),e.jsxs("footer",{className:"modal-actions",children:[e.jsx("button",{className:"ghost",onClick:$,children:z}),e.jsx("button",{onClick:w,children:S})]})]})}):null,Y="aspectRatioCalc_state_v1",Z="aspectRatioCalc_saved_v1",xe=[{name:"Square",w:1,h:1},{name:"3:2",w:3,h:2},{name:"4:3",w:4,h:3},{name:"16:9",w:16,h:9},{name:"21:9",w:21,h:9},{name:"A4 Portrait (~1:1.414)",w:1,h:1.4142},{name:"A4 Landscape (~1.414:1)",w:1.4142,h:1}],G={ratioW:16,ratioH:9,width:1280,height:720,lock:!0,fit:"contain",grid:!1,round:0,scale:60,bgShade:.08,useCssAR:!0,fileName:"",imgNaturalW:0,imgNaturalH:0},ge=()=>{const[i,o]=m.useState(()=>{try{return{...G,...JSON.parse(localStorage.getItem(Y)||"null")||{}}}catch{return G}}),[d,S]=m.useState(null),[z,w]=m.useState(""),[$,T]=m.useState(()=>{try{return JSON.parse(localStorage.getItem(Z)||"[]")}catch{return[]}}),[k,O]=m.useState({open:!1,kind:"",payload:null}),A=m.useRef(null),E=m.useRef(null);m.useEffect(()=>{try{localStorage.setItem(Y,JSON.stringify(i))}catch{}},[i]),m.useEffect(()=>{try{localStorage.setItem(Z,JSON.stringify($))}catch{}},[$]);const K=t=>{const r=t.currentTarget,a=r.naturalWidth||0,s=r.naturalHeight||0,[c,x]=H(a,s);o(g=>({...g,imgNaturalW:a,imgNaturalH:s,width:a||g.width,height:s||g.height,ratioW:c||g.ratioW,ratioH:x||g.ratioH}))},p=m.useMemo(()=>{const t=V(i.ratioW,i.ratioH);return{w:Math.max(1,Math.round(i.ratioW/t)),h:Math.max(1,Math.round(i.ratioH/t))}},[i.ratioW,i.ratioH]),B=`${p.w} / ${p.h}`;function y(t,r){o(a=>({...a,[t]:r}))}function Q(t){const[r,a]=H(t.w,t.h);let s=i.width,c=i.height;i.lock&&(c=Math.max(1,Math.round(s*a/r))),o(x=>({...x,ratioW:r,ratioH:a,height:c}))}function X(t){const r=P(parseFloat(t)||0,1,99999);if(i.lock){const a=Math.max(1,Math.round(r*p.h/p.w));o(s=>({...s,width:C(r,s.round),height:C(a,s.round)}))}else o(a=>({...a,width:C(r,a.round)}))}function ee(t){const r=P(parseFloat(t)||0,1,99999);if(i.lock){const a=Math.max(1,Math.round(r*p.w/p.h));o(s=>({...s,height:C(r,s.round),width:C(a,s.round)}))}else o(a=>({...a,height:C(r,a.round)}))}function te(t){const r=P(parseFloat(t)||1,1,9999),[a,s]=H(r,i.ratioH);let c=i.height;i.lock&&(c=Math.max(1,Math.round(i.width*s/a))),o(x=>({...x,ratioW:a,ratioH:s,height:c}))}function ie(t){const r=P(parseFloat(t)||1,1,9999),[a,s]=H(i.ratioW,r);let c=i.height;i.lock&&(c=Math.max(1,Math.round(i.width*s/a))),o(x=>({...x,ratioW:a,ratioH:s,height:c}))}function ae(t){var a;t.preventDefault();const r=(a=t.dataTransfer.files)==null?void 0:a[0];r&&_(r)}function re(t){var a;const r=(a=t.target.files)==null?void 0:a[0];r&&_(r)}function _(t){if(w(""),!ce.includes(t.type)){w("Upload JPG/PNG/WEBP image.");return}if(t.size>6*de){w("Image must be under 6 MB.");return}const r=URL.createObjectURL(t);S(a=>(a&&URL.revokeObjectURL(a),r)),y("fileName",t.name)}function I(t,r=null){O({open:!0,kind:t,payload:r})}function J(){O({open:!1,kind:"",payload:null})}function ne(){const{kind:t,payload:r}=k;t==="clear-image"&&(d&&URL.revokeObjectURL(d),S(null),w(""),o(a=>({...a,fileName:"",imgNaturalW:0,imgNaturalH:0}))),t==="reset-all"&&(d&&URL.revokeObjectURL(d),S(null),w(""),o(G)),t==="delete-saved"&&T(a=>a.filter(s=>s.id!==r)),J()}function oe(){var r;const t=["/* quick CSS for the box */",".box {",`  aspect-ratio: ${B};`,`  width: ${i.width}px;`,"  /* height auto will be computed by aspect-ratio */","  background: #000;","}"].join(`
`);(r=navigator.clipboard)==null||r.writeText(t)}function se(){const t=prompt("Name this preset (e.g., 16:9 Banner)?",`${i.ratioW}:${i.ratioH}`);if(!t)return;const r={id:he(),name:t,ratioW:p.w,ratioH:p.h,width:i.width,height:i.height,createdAt:new Date().toISOString()};T(a=>[r,...a])}function q(){if(!A.current||!E.current)return;const t=A.current,r=Math.max(1,Math.round(i.width)),a=Math.max(1,Math.round(i.height)),s=E.current;s.width=r,s.height=a;const c=s.getContext("2d");c.fillStyle="#000",c.fillRect(0,0,r,a);const x=t.naturalWidth||1,g=t.naturalHeight||1;if(i.fit==="fill")c.drawImage(t,0,0,r,a);else if(i.fit==="contain"){const N=Math.min(r/x,a/g),M=Math.round(x*N),R=Math.round(g*N),D=Math.round((r-M)/2),U=Math.round((a-R)/2);c.drawImage(t,D,U,M,R)}else if(i.fit==="cover"){const N=Math.max(r/x,a/g),M=Math.round(r/N),R=Math.round(a/N),D=Math.round((x-M)/2),U=Math.round((g-R)/2);c.drawImage(t,D,U,M,R,0,0,r,a)}const L=document.createElement("a");L.download=(i.fileName?i.fileName.replace(/\.[a-z]+$/i,""):"preview")+`_${r}x${a}.png`,L.href=s.toDataURL("image/png"),L.click()}return e.jsxs(n.Wrapper,{children:[e.jsxs(n.Header,{children:[e.jsxs("div",{children:[e.jsx("h1",{children:"Aspect Ratio Calculator"}),e.jsx("p",{children:"Upload an image, choose a ratio, and get live previews. Export PNG or copy CSS."})]}),e.jsxs(n.Badges,{children:[e.jsx("span",{className:"badge",children:"Preview"}),e.jsx("span",{className:"badge",children:"Export PNG"}),e.jsx("span",{className:"badge",children:"Copy CSS"})]})]}),e.jsxs(n.Layout,{children:[e.jsxs(n.Card,{as:"section",children:[e.jsxs(n.Section,{children:[e.jsx(n.SectionTitle,{children:"1) Image"}),e.jsxs(n.Grid,{cols:"3",children:[e.jsxs(n.Field,{className:"span2",children:[e.jsx("label",{htmlFor:"file",children:"Upload (JPG/PNG/WEBP, < 6MB)"}),e.jsxs(n.DropZone,{onDragOver:t=>t.preventDefault(),onDrop:ae,"data-hasfile":!!d,tabIndex:0,children:[d?e.jsxs("div",{className:"dz-hasfile",children:[e.jsx("span",{className:"name",children:i.fileName||"image"}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{type:"button",className:"ghost",onClick:()=>I("clear-image"),children:"Remove"}),e.jsx("button",{type:"button",onClick:q,disabled:!d,children:"Export PNG"})]})]}):e.jsxs("div",{className:"dz-empty",children:[e.jsx("p",{children:"Drag & drop an image here, or select a file"}),e.jsx("label",{className:"btnlike",htmlFor:"file",children:"Choose File"})]}),e.jsx("input",{id:"file",name:"file",type:"file",accept:"image/*",onChange:re})]}),e.jsx(n.Error,{role:"alert",children:z}),!!(i.imgNaturalW&&i.imgNaturalH)&&e.jsxs(n.Help,{children:["Detected: ",i.imgNaturalW," × ",i.imgNaturalH]})]}),e.jsxs(n.Field,{children:[e.jsx("label",{children:"Fit"}),e.jsxs("select",{value:i.fit,onChange:t=>y("fit",t.target.value),children:[e.jsx("option",{value:"contain",children:"Contain"}),e.jsx("option",{value:"cover",children:"Cover"}),e.jsx("option",{value:"fill",children:"Fill"})]})]})]})]}),e.jsxs(n.Section,{children:[e.jsx(n.SectionTitle,{children:"2) Ratio"}),e.jsxs(n.Grid,{cols:"4",children:[e.jsxs(n.Field,{children:[e.jsx("label",{htmlFor:"rw",children:"W"}),e.jsx("input",{id:"rw",type:"number",min:"1",step:"1",value:i.ratioW,onChange:t=>te(t.target.value)})]}),e.jsx(n.Field,{mid:":"}),e.jsxs(n.Field,{children:[e.jsx("label",{htmlFor:"rh",children:"H"}),e.jsx("input",{id:"rh",type:"number",min:"1",step:"1",value:i.ratioH,onChange:t=>ie(t.target.value)})]}),e.jsxs(n.Field,{children:[e.jsx("label",{children:" "}),e.jsxs("label",{className:"checkbox",children:[e.jsx("input",{type:"checkbox",checked:i.lock,onChange:t=>y("lock",!!t.target.checked)}),e.jsx("span",{children:"Lock ratio"})]})]})]}),e.jsxs(n.Presets,{children:[xe.map(t=>e.jsx("button",{type:"button",onClick:()=>Q(t),children:t.name},t.name)),e.jsx("button",{type:"button",className:"ghost",onClick:se,children:"Save Preset"})]})]}),e.jsxs(n.Section,{children:[e.jsx(n.SectionTitle,{children:"3) Size"}),e.jsxs(n.Grid,{cols:"4",children:[e.jsxs(n.Field,{children:[e.jsx("label",{htmlFor:"width",children:"Width (px)"}),e.jsx("input",{id:"width",type:"number",min:"1",value:i.width,onChange:t=>X(t.target.value)})]}),e.jsx(n.Field,{mid:"×"}),e.jsxs(n.Field,{children:[e.jsx("label",{htmlFor:"height",children:"Height (px)"}),e.jsx("input",{id:"height",type:"number",min:"1",value:i.height,onChange:t=>ee(t.target.value)})]}),e.jsxs(n.Field,{children:[e.jsx("label",{htmlFor:"round",children:"Round"}),e.jsxs("select",{id:"round",value:i.round,onChange:t=>y("round",parseInt(t.target.value||"0")),children:[e.jsx("option",{value:"0",children:"0 decimals"}),e.jsx("option",{value:"1",children:"1 decimal"}),e.jsx("option",{value:"2",children:"2 decimals"})]})]})]}),e.jsxs(n.Grid,{cols:"3",children:[e.jsxs(n.Field,{children:[e.jsxs("label",{htmlFor:"scale",children:["Preview Scale: ",i.scale,"%"]}),e.jsx("input",{id:"scale",type:"range",min:"10",max:"100",step:"1",value:i.scale,onChange:t=>y("scale",parseInt(t.target.value||"60"))})]}),e.jsx(n.Field,{children:e.jsxs("label",{className:"checkbox",children:[e.jsx("input",{type:"checkbox",checked:i.grid,onChange:t=>y("grid",!!t.target.checked)}),e.jsx("span",{children:"Show grid overlay"})]})}),e.jsx(n.Field,{children:e.jsxs("label",{className:"checkbox",children:[e.jsx("input",{type:"checkbox",checked:i.useCssAR,onChange:t=>y("useCssAR",!!t.target.checked)}),e.jsxs("span",{children:["Use CSS ",e.jsx("code",{children:"aspect-ratio"})]})]})})]})]}),e.jsxs(n.Actions,{children:[e.jsx("button",{type:"button",onClick:oe,children:"Copy CSS"}),e.jsx("button",{type:"button",onClick:q,disabled:!d,children:"Export PNG"}),e.jsx("div",{className:"spacer"}),e.jsx("button",{type:"button",className:"ghost",onClick:()=>I("reset-all"),children:"Reset All"})]})]}),e.jsxs(n.Side,{children:[e.jsxs(n.Card,{children:[e.jsx("h3",{children:"Preview"}),e.jsx(n.PreviewWrap,{children:e.jsxs(n.PreviewBox,{"data-grid":i.grid?"1":"0",style:{width:`${i.scale}%`,maxWidth:"100%",...i.useCssAR?{aspectRatio:B}:{height:`${Math.round(i.scale/100*i.height)}px`},backgroundColor:`rgba(0,0,0,${i.bgShade})`},children:[d?e.jsx("img",{ref:A,src:d,alt:"preview",onLoad:K,style:{objectFit:i.fit,width:"100%",height:"100%"}}):e.jsx("div",{className:"placeholder",children:e.jsxs("span",{children:[p.w,":",p.h]})}),i.grid&&e.jsx("div",{className:"grid","aria-hidden":!0})]})}),e.jsxs("p",{className:"muted",children:["Aspect: ",e.jsxs("strong",{children:[p.w,":",p.h]})," — CSS: ",e.jsxs("code",{children:["aspect-ratio: ",p.w," / ",p.h]})]}),e.jsx("canvas",{ref:E,width:"0",height:"0",style:{display:"none"}})]}),e.jsxs(n.Card,{children:[e.jsx("h3",{children:"Saved Presets"}),$.length===0&&e.jsx("p",{className:"muted",children:"No saved presets yet."}),e.jsx(n.SavedList,{children:$.map(t=>e.jsxs("li",{children:[e.jsxs("div",{className:"meta",children:[e.jsx("strong",{children:t.name}),e.jsxs("span",{children:[t.ratioW,":",t.ratioH," — ",t.width,"×",t.height]})]}),e.jsxs("div",{className:"row-actions",children:[e.jsx("button",{className:"ghost",onClick:()=>{o(r=>({...r,ratioW:t.ratioW,ratioH:t.ratioH,width:t.width,height:t.height,lock:!0}))},children:"Apply"}),e.jsx("button",{onClick:()=>I("delete-saved",t.id),children:"Delete"})]})]},t.id))})]})]})]}),e.jsx(pe,{open:k.open,title:k.kind==="clear-image"?"Remove Image":k.kind==="reset-all"?"Reset All":"Delete Preset",message:k.kind==="clear-image"?"Remove the current image from the preview?":k.kind==="reset-all"?"Reset all settings to default and clear image?":"Delete this saved preset?",confirmText:"Yes",cancelText:"Cancel",onConfirm:ne,onCancel:J})]})};export{ge as default};
