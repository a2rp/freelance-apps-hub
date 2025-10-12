import{d as b,r as j,j as t,y as E}from"./index-ta16TOOT.js";const C="var(--bg)",R="var(--card)",U="var(--text)",O="var(--muted)",y="var(--border)",$="var(--radius)",J="var(--shadow)",k="var(--accent)",_="var(--danger, #e5484d)",c={Wrapper:b.div`
        color: ${U};
        background: ${C};
        min-height: 100%;
        padding: 16px;
        max-width: 1440px; /* as requested */
        margin: 0 auto; /* centered layout */
        display: grid;
        gap: 16px;
    `,Header:b.header`
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        gap: 16px;

        h1 {
            margin: 0 0 6px;
            font-size: 20px;
            line-height: 1.2;
        }
        p {
            margin: 0;
            color: ${O};
            font-size: 14px;
        }
    `,Totals:b.div`
        display: flex;
        gap: 8px;
        align-items: center;
        .pill {
            border: 1px solid ${y};
            background: ${R};
            border-radius: 999px;
            padding: 6px 10px;
            box-shadow: ${J};
            font-size: 12px;
        }
    `,Layout:b.div`
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 16px;

        @media (max-width: 1080px) {
            grid-template-columns: 1fr;
        }

        .left,
        .right {
            display: grid;
            gap: 16px;
        }
    `,Card:b.div`
        background: ${R};
        border: 1px solid ${y};
        border-radius: ${$};
        box-shadow: ${J};
        padding: 16px;

        h3 {
            margin: 0 0 12px;
            font-size: 16px;
        }
        .notes {
            margin: 0;
            padding-left: 18px;
            color: ${O};
            font-size: 14px;
        }
    `,Uploader:b.div`
        position: relative;
        border: 1px dashed ${y};
        border-radius: ${$};
        background: ${C};
        padding: 18px;
        outline: ${o=>o.dragOver?`2px dashed ${k}`:"none"};

        input[type="file"] {
            position: absolute;
            inset: 0;
            opacity: 0;
            width: 100%;
            height: 100%;
            cursor: pointer;
        }

        .area {
            display: grid;
            justify-items: center;
            gap: 6px;
            text-align: center;
            .icon {
                font-size: 28px;
            }
            .text {
                font-size: 14px;
            }
            .hint {
                font-size: 12px;
                color: ${O};
            }
            .link {
                margin-left: 6px;
                border: none;
                background: none;
                color: ${k};
                text-decoration: underline;
                cursor: pointer;
                padding: 0;
                font: inherit;
            }
        }
    `,Actions:b.div`
        margin-top: 12px;
        display: flex;
        gap: 10px;
        align-items: center;

        .spacer {
            flex: 1;
        }

        button {
            appearance: none;
            border: 1px solid ${y};
            background: ${R};
            color: ${U};
            padding: 10px 14px;
            border-radius: ${$};
            cursor: pointer;
            font: inherit;
            transition: transform 0.02s ease-in-out, border-color 0.15s ease;

            &:hover {
                border-color: ${k};
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
            background: ${C};
        }
        .danger {
            border-color: ${_};
        }
    `,List:b.div`
        display: grid;
        gap: 10px;
    `,Item:b.div`
        display: grid;
        grid-template-columns: 100px 1fr auto;
        gap: 12px;
        align-items: center;
        border: 1px solid ${y};
        background: ${R};
        border-radius: ${$};
        padding: 10px;

        .thumb img {
            width: 100px;
            height: 70px;
            object-fit: cover;
            border: 1px solid ${y};
            border-radius: 8px;
            background: ${C};
        }

        .meta {
            display: grid;
            gap: 6px;
            .title {
                font-size: 14px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .sub {
                display: flex;
                gap: 8px;
                color: ${O};
                font-size: 12px;
                flex-wrap: wrap;
            }
            .comp {
                display: flex;
                gap: 8px;
                flex-wrap: wrap;
            }
            .badge {
                background: ${C};
                border: 1px solid ${y};
                border-radius: 999px;
                padding: 3px 8px;
                font-size: 12px;
            }
            .err {
                color: ${_};
                font-size: 12px;
            }
        }

        .right {
            display: flex;
            gap: 8px;
            align-items: center;
            button {
                appearance: none;
                border: 1px solid ${y};
                background: ${R};
                color: ${U};
                padding: 8px 12px;
                border-radius: ${$};
                cursor: pointer;
                font: inherit;
                transition: transform 0.02s ease-in-out, border-color 0.15s ease;

                &:hover {
                    border-color: ${k};
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
                background: ${C};
            }
            .danger {
                border-color: ${_};
            }
        }

        @media (max-width: 720px) {
            grid-template-columns: 64px 1fr;
            .right {
                grid-column: 1 / -1;
                justify-content: flex-start;
            }
            .thumb img {
                width: 64px;
                height: 50px;
            }
        }
    `,Empty:b.div`
        border: 1px dashed ${y};
        color: ${O};
        border-radius: ${$};
        padding: 20px;
        text-align: center;
        font-size: 14px;
    `,Field:b.div`
        display: grid;
        gap: 6px;
        margin-bottom: 12px;

        label {
            font-size: 13px;
            color: ${U};
        }
        .checkbox {
            display: inline-flex;
            align-items: center;
            gap: 8px;
        }

        input[type="range"],
        input[type="number"],
        select {
            width: 100%;
            border: 1px solid ${y};
            background: ${C};
            color: ${U};
            border-radius: calc(${$} - 2px);
            padding: 10px 12px;
            font: inherit;
            outline: none;
            transition: border-color 0.15s ease;
            &:focus {
                border-color: ${k};
            }
        }

        .inline {
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .hint {
            color: ${O};
            font-size: 12px;
        }
    `,Modal:b.div`
        position: fixed;
        inset: 0;
        z-index: 1000;

        &,
        * {
            box-sizing: border-box;
        }

        .overlay {
            position: absolute;
            inset: 0;
            background: rgba(0, 0, 0, 0.45);
            backdrop-filter: blur(2px);
        }

        .sheet {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: min(460px, 92vw);
            background: var(--surface, ${R});
            color: ${U};
            border: 1px solid ${y};
            border-radius: ${$};
            box-shadow: ${J};
            padding: 16px;
            display: grid;
            gap: 12px;
            animation: modalPop 0.16s ease-out both;
        }

        h4 {
            margin: 0;
            font-size: 18px;
            letter-spacing: 0.2px;
        }

        p {
            margin: 0;
            color: ${O};
            font-size: 14px;
            line-height: 1.5;
        }

        .row {
            display: flex;
            justify-content: flex-end;
            gap: 10px;
            margin-top: 6px;
        }

        .row button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            height: 38px;
            min-width: 96px;
            padding: 0 14px;
            border-radius: ${$};
            border: 1px solid ${y};
            background: ${R};
            color: ${U};
            font: inherit;
            cursor: pointer;
            transition: transform 0.02s ease-in-out, border-color 0.15s ease,
                background 0.15s ease;
        }
        .row button:hover {
            border-color: ${k};
        }
        .row button:active {
            transform: translateY(1px);
        }
        .row button:focus-visible {
            outline: 2px solid ${k};
            outline-offset: 2px;
        }

        .row .ghost {
            background: ${C};
        }
        .row .primary {
            background: ${k};
            border-color: ${k};
            color: var(--on-accent, #fff);
        }

        @keyframes modalPop {
            from {
                transform: translate(-50%, -48%) scale(0.98);
                opacity: 0.6;
            }
            to {
                transform: translate(-50%, -50%) scale(1);
                opacity: 1;
            }
        }
    `},M=o=>!o&&o!==0?"":o<1024?`${o} B`:o<1024*1024?`${(o/1024).toFixed(1)} KB`:`${(o/(1024*1024)).toFixed(2)} MB`,oe=(()=>{let o=0;return()=>`img_${Date.now()}_${o++}`})(),Q=10,K=100,T={quality:80,format:"image/webp",maxEdge:0,fillTransparentWithWhite:!0},X="imageCompressor_settings_v1";function ae(){try{const o=JSON.parse(localStorage.getItem(X)||"null");return o?{...T,...o}:T}catch{return T}}function ie(o){try{localStorage.setItem(X,JSON.stringify(o))}catch{}}async function V(o){var h;try{if("createImageBitmap"in window){const n=await createImageBitmap(o),x=n.width,g=n.height;return(h=n.close)==null||h.call(n),{width:x,height:g}}}catch{}const u=URL.createObjectURL(o),a=await new Promise((n,x)=>{const g=new Image;g.onload=()=>{n({width:g.naturalWidth||g.width,height:g.naturalHeight||g.height})},g.onerror=x,g.src=u});return URL.revokeObjectURL(u),a}function le(o,u,a){if(!a||a<=0)return{tw:o,th:u,scale:1};const h=Math.max(o,u);if(h<=a)return{tw:o,th:u,scale:1};const n=a/h;return{tw:Math.round(o*n),th:Math.round(u*n),scale:n}}async function de({file:o,dims:u,qualityPct:a,format:h,maxEdge:n,fillTransparentWithWhite:x}){const{width:g,height:P}=u||await V(o),{tw:S,th:L}=le(g,P,n),W=URL.createObjectURL(o),D=await new Promise((A,q)=>{const w=new Image;w.onload=()=>A(w),w.onerror=q,w.src=W}),p=document.createElement("canvas");p.width=S,p.height=L;const F=p.getContext("2d");h==="image/jpeg"&&x&&(F.fillStyle="#fff",F.fillRect(0,0,S,L)),F.drawImage(D,0,0,S,L);const I=Math.max(Q,Math.min(K,a))/100,N=await new Promise((A,q)=>{p.toBlob(w=>w?A(w):q(new Error("Encode failed")),h,I)});return URL.revokeObjectURL(W),{blob:N,outWidth:S,outHeight:L}}const pe=()=>{const o=j.useRef(null),u=j.useRef(null),[a,h]=j.useState(ae),[n,x]=j.useState([]),[g,P]=j.useState(!1);j.useEffect(()=>{ie(a)},[a]);const S=j.useMemo(()=>n.reduce((e,s)=>e+(s.size||0),0),[n]),L=j.useMemo(()=>n.reduce((e,s)=>{var r;return e+(((r=s.compressed)==null?void 0:r.size)||0)},0),[n]),W=async e=>{var i,d,f,m;const s=Array.from(e||[]).filter(l=>l.type.startsWith("image/"));if(!s.length){(d=(i=E)==null?void 0:i.error)==null||d.call(i,"Only image files are allowed.");return}const r=[];for(const l of s){const v=await V(l).catch(()=>({width:0,height:0})),z=oe(),Y=URL.createObjectURL(l);r.push({id:z,file:l,name:l.name,type:l.type,size:l.size,width:v.width,height:v.height,src:Y,compressed:null,status:"idle"})}x(l=>[...l,...r]),(m=(f=E)==null?void 0:f.info)==null||m.call(f,`${r.length} image(s) added`)},D=e=>W(e.target.files);j.useEffect(()=>{const e=u.current;if(!e)return;const s=d=>{d.preventDefault(),P(!0)},r=()=>P(!1),i=d=>{d.preventDefault(),P(!1),W(d.dataTransfer.files)};return e.addEventListener("dragover",s),e.addEventListener("dragleave",r),e.addEventListener("drop",i),()=>{e.removeEventListener("dragover",s),e.removeEventListener("dragleave",r),e.removeEventListener("drop",i)}},[]);const[p,F]=j.useState({open:!1,title:"",message:"",onYes:null}),I=(e,s,r)=>F({open:!0,title:e,message:s,onYes:r}),N=()=>F({open:!1,title:"",message:"",onYes:null});j.useEffect(()=>{if(!p.open)return;const e=document.body.style.overflow;document.body.style.overflow="hidden";const s=r=>{var i;r.key==="Escape"&&(r.preventDefault(),N()),r.key==="Enter"&&(r.preventDefault(),(i=p.onYes)==null||i.call(p))};return window.addEventListener("keydown",s),()=>{document.body.style.overflow=e,window.removeEventListener("keydown",s)}},[p.open]);const A=e=>{const s=n.find(r=>r.id===e);I("Remove Image?",`Remove "${s==null?void 0:s.name}" from the list?`,()=>{x(r=>{var d;const i=r.filter(f=>f.id!==e);return s!=null&&s.src&&URL.revokeObjectURL(s.src),(d=s==null?void 0:s.compressed)!=null&&d.url&&URL.revokeObjectURL(s.compressed.url),i}),N()})},q=()=>{var e,s;if(!n.length){(s=(e=E)==null?void 0:e.info)==null||s.call(e,"Nothing to clear.");return}I("Clear All?","Remove all images from the list?",()=>{x(r=>(r.forEach(i=>{var d;i.src&&URL.revokeObjectURL(i.src),(d=i.compressed)!=null&&d.url&&URL.revokeObjectURL(i.compressed.url)}),[])),N()})},w=()=>{I("Reset Settings?","Quality, format and resize will be reset to defaults.",()=>{var e,s;h(T),N(),(s=(e=E)==null?void 0:e.success)==null||s.call(e,"Settings reset")})},B=async e=>{var r,i,d,f;x(m=>m.map(l=>l.id===e?{...l,status:"compressing",err:""}:l));const s=n.find(m=>m.id===e);if(s)try{const{blob:m,outWidth:l,outHeight:v}=await de({file:s.file,dims:{width:s.width,height:s.height},qualityPct:a.quality,format:a.format,maxEdge:a.maxEdge,fillTransparentWithWhite:a.fillTransparentWithWhite}),z=URL.createObjectURL(m);x(Y=>Y.map(G=>G.id===e?{...G,status:"done",compressed:{blob:m,url:z,type:a.format,size:m.size,width:l,height:v}}:G)),(i=(r=E)==null?void 0:r.success)==null||i.call(r,`Compressed: ${s.name}`)}catch(m){x(l=>l.map(v=>v.id===e?{...v,status:"error",err:String(m.message||m)}:v)),(f=(d=E)==null?void 0:d.error)==null||f.call(d,`Failed: ${s.name}`)}},Z=async()=>{var e,s;if(!n.length){(s=(e=E)==null?void 0:e.error)==null||s.call(e,"Add images first.");return}for(const r of n)await B(r.id)},H=async e=>{var v;const s=n.find(z=>z.id===e);if(!s)return;s.compressed||await B(e);const r=(v=n.find(z=>z.id===e))==null?void 0:v.compressed;if(!r)return;const i=s.name.replace(/\.[^.]+$/,""),d=a.format==="image/webp"?"webp":"jpg",f=[`q${a.quality}`];a.maxEdge>0&&f.push(`max${a.maxEdge}`);const m=`${i}-${f.join("-")}.${d}`,l=document.createElement("a");l.href=r.url,l.download=m,document.body.appendChild(l),l.click(),l.remove()},ee=async()=>{var e,s;if(!n.length){(s=(e=E)==null?void 0:e.info)==null||s.call(e,"Nothing to download.");return}for(const r of n)await H(r.id),await new Promise(i=>setTimeout(i,120))},te=e=>h(s=>({...s,quality:Number(e.target.value)})),se=e=>h(s=>({...s,format:e.target.value})),re=e=>h(s=>({...s,maxEdge:Math.max(0,Number(e.target.value))})),ne=e=>h(s=>({...s,fillTransparentWithWhite:!!e.target.checked}));return t.jsxs(c.Wrapper,{children:[t.jsxs(c.Header,{children:[t.jsxs("div",{children:[t.jsx("h1",{children:"Image Compressor"}),t.jsx("p",{children:"Upload images, set quality, optionally resize, and download compressed copies."})]}),t.jsxs(c.Totals,{children:[t.jsxs("span",{className:"pill",children:["Original: ",M(S)]}),t.jsxs("span",{className:"pill",children:["Compressed: ",L?M(L):"—"]})]})]}),t.jsxs(c.Layout,{children:[t.jsxs("div",{className:"left",children:[t.jsxs(c.Card,{children:[t.jsxs(c.Uploader,{ref:u,dragOver:g,children:[t.jsx("input",{ref:o,type:"file",accept:"image/*",multiple:!0,onChange:D}),t.jsxs("div",{className:"area",children:[t.jsx("div",{className:"icon","aria-hidden":!0,children:"🖼️"}),t.jsxs("div",{className:"text",children:[t.jsx("strong",{children:"Drag & drop"})," images here or",t.jsx("button",{type:"button",className:"link",onClick:()=>{var e;return(e=o.current)==null?void 0:e.click()},children:"browse"})]}),t.jsx("div",{className:"hint",children:"PNG, JPG, JPEG, WEBP…"})]})]}),t.jsxs(c.Actions,{children:[t.jsx("button",{type:"button",onClick:Z,disabled:!n.length,children:"Compress All"}),t.jsx("button",{type:"button",onClick:ee,disabled:!n.some(e=>e.compressed),children:"Download All"}),t.jsx("div",{className:"spacer"}),t.jsx("button",{type:"button",className:"ghost danger",onClick:q,disabled:!n.length,children:"Clear All"})]})]}),t.jsxs(c.List,{children:[n.map(e=>t.jsxs(c.Item,{status:e.status,children:[t.jsx("div",{className:"thumb",children:t.jsx("img",{src:e.src,alt:e.name})}),t.jsxs("div",{className:"meta",children:[t.jsx("div",{className:"title",title:e.name,children:e.name}),t.jsxs("div",{className:"sub",children:[t.jsxs("span",{children:[e.width,"×",e.height,"px"]}),t.jsx("span",{children:"•"}),t.jsx("span",{children:M(e.size)}),t.jsx("span",{children:"•"}),t.jsx("span",{children:e.type||"image"})]}),e.compressed&&t.jsxs("div",{className:"comp",children:[t.jsxs("span",{className:"badge",children:["→ ",e.compressed.width,"×",e.compressed.height,"px"]}),t.jsx("span",{className:"badge",children:M(e.compressed.size)}),t.jsx("span",{className:"badge",children:a.format==="image/webp"?"WEBP":"JPEG"})]}),e.err&&t.jsx("div",{className:"err",children:e.err})]}),t.jsxs("div",{className:"right",children:[t.jsx("button",{type:"button",onClick:()=>B(e.id),disabled:e.status==="compressing",children:e.status==="compressing"?"Compressing…":"Compress"}),t.jsx("button",{type:"button",className:"ghost",onClick:()=>H(e.id),disabled:!e.compressed||e.status==="compressing",children:"Download"}),t.jsx("button",{type:"button",className:"ghost danger",onClick:()=>A(e.id),disabled:e.status==="compressing",children:"Remove"})]})]},e.id)),!n.length&&t.jsx(c.Empty,{children:t.jsx("p",{children:"No images yet. Add some using the box above."})})]})]}),t.jsxs("div",{className:"right",children:[t.jsxs(c.Card,{children:[t.jsx("h3",{children:"Compression Settings"}),t.jsxs(c.Field,{children:[t.jsxs("label",{htmlFor:"quality",children:["Quality: ",t.jsx("strong",{children:a.quality})]}),t.jsx("input",{id:"quality",type:"range",min:Q,max:K,step:1,value:a.quality,onChange:te}),t.jsx("div",{className:"hint",children:"Higher = better quality & larger size. Lower = more compression."})]}),t.jsxs(c.Field,{children:[t.jsx("label",{htmlFor:"format",children:"Output Format"}),t.jsxs("select",{id:"format",value:a.format,onChange:se,children:[t.jsx("option",{value:"image/webp",children:"WEBP (usually smaller)"}),t.jsx("option",{value:"image/jpeg",children:"JPEG"})]})]}),t.jsxs(c.Field,{children:[t.jsx("label",{htmlFor:"maxEdge",children:"Resize (Max long edge)"}),t.jsx("input",{id:"maxEdge",type:"number",min:0,step:10,value:a.maxEdge,onChange:re}),t.jsx("div",{className:"hint",children:"0 keeps original size. Otherwise longest side is limited to this many pixels."})]}),a.format==="image/jpeg"&&t.jsx(c.Field,{className:"inline",children:t.jsxs("label",{className:"checkbox",children:[t.jsx("input",{type:"checkbox",checked:a.fillTransparentWithWhite,onChange:ne}),t.jsx("span",{children:"Fill transparent areas with white (JPEG)"})]})}),t.jsx(c.Actions,{children:t.jsx("button",{type:"button",className:"ghost",onClick:w,children:"Reset Settings"})})]}),t.jsxs(c.Card,{children:[t.jsx("h3",{children:"Notes"}),t.jsxs("ul",{className:"notes",children:[t.jsx("li",{children:"Canvas re-encode strips metadata (EXIF). That’s normal in browsers."}),t.jsx("li",{children:"WEBP generally gives better size than JPEG for the same visual quality."}),t.jsx("li",{children:"For PNGs with transparency → prefer WEBP; JPEG adds white by default (configurable)."})]})]})]})]}),p.open&&t.jsxs(c.Modal,{role:"dialog","aria-modal":"true","aria-labelledby":"confirm-title","aria-describedby":"confirm-desc",children:[t.jsx("div",{className:"overlay",onClick:N}),t.jsxs("div",{className:"sheet",children:[t.jsx("h4",{id:"confirm-title",children:p.title}),t.jsx("p",{id:"confirm-desc",children:p.message}),t.jsxs("div",{className:"row",children:[t.jsx("button",{type:"button",className:"primary",autoFocus:!0,onClick:()=>{var e;(e=p.onYes)==null||e.call(p)},children:"Yes"}),t.jsx("button",{type:"button",className:"ghost",onClick:N,children:"Cancel"})]})]})]})]})};export{pe as default};
