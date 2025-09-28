import{d as P,r as n,j as e}from"./index-9nNI8k3I.js";const T="var(--card, #111)",b="var(--text, #e9e9e9)",g="var(--muted, #b7b7b7)",d="var(--border, #222)",m="var(--accent, #22c55e)",L="var(--radius, 16px)",J="var(--shadow, 0 8px 30px rgba(0,0,0,0.25))",Y={Wrapper:P.div`
        max-width: var(--maxw, 1200px);
        margin: 0 auto;
        padding: 24px;
        color: ${b};

        .header {
            margin-bottom: 12px;
            h2 {
                margin: 0 0 6px;
            }
            .muted {
                color: ${g};
            }
            .status {
                display: flex;
                gap: 8px;
                margin-top: 8px;
            }
            .chip {
                border: 1px solid ${d};
                border-radius: 999px;
                padding: 4px 10px;
                font-size: 12px;
                background: #141414;
                color: ${g};
            }
            .chip.ok {
                color: #0f1;
                border-color: #214;
            }
        }

        .grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
        }

        .panel {
            background: ${T};
            border: 1px solid ${d};
            border-radius: ${L};
            box-shadow: ${J};
            padding: 16px;
            display: flex;
            flex-direction: column;
            min-height: 420px;
        }

        /* Dropzone */
        .dropzone {
            border: 2px dashed ${d};
            border-radius: ${L};
            padding: 18px;
            text-align: center;
            cursor: pointer;
            margin-bottom: 12px;
            transition: border-color 0.15s ease, background 0.15s ease;
        }
        .dropzone:hover {
            border-color: ${m};
        }
        .dropzone.dragging {
            border-color: ${m};
            background: rgba(34, 197, 94, 0.08);
        }
        .dz-inner .link {
            color: ${m};
            text-decoration: underline;
        }

        /* Frames */
        .framesHead {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 8px;
            h4 {
                margin: 0;
            }
            .spacer {
                flex: 1;
            }
        }

        .frames {
            list-style: none;
            margin: 0;
            padding: 0;
            display: grid;
            grid-template-columns: 1fr;
            gap: 8px;
            overflow: auto;
        }

        .frame {
            display: grid;
            grid-template-columns: 96px 1fr;
            gap: 10px;
            border: 1px solid ${d};
            border-radius: 12px;
            padding: 8px;
            background: #0f0f0f;
            align-items: center;
        }

        .thumb {
            width: 96px;
            height: 72px;
            border-radius: 8px;
            overflow: hidden;
            background: #000;
            border: 1px solid ${d};
        }
        .thumb img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .meta {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }
        .meta .name {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            color: ${b};
        }

        .row {
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .empty {
            color: ${g};
            padding: 16px;
            text-align: center;
        }

        /* Settings + Output */
        .settings {
            margin-bottom: 12px;
        }
        .settings .row {
            margin: 8px 0;
            gap: 8px;
        }
        .settings label {
            width: 110px;
            color: ${g};
        }
        .settings input {
            background: #0f0f0f;
            color: ${b};
            border: 1px solid ${d};
            border-radius: 10px;
            padding: 8px 10px;
            width: 140px;
            outline: none;
        }

        .actions {
            margin-top: 12px;
        }

        .output .preview {
            border: 1px dashed ${d};
            border-radius: 12px;
            padding: 12px;
            /* display: flex;
            align-items: center;
            justify-content: center; */
            min-height: 220px;
            background: #0c0c0c;

            img {
                margin: auto;
                margin-bottom: 15px;
            }

            .row {
                width: 100%;

                a {
                    display: flex;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            }
        }
        .output img {
            max-width: 100%;
            height: auto;
            border-radius: 8px;
            display: block;
        }
        .placeholder {
            color: ${g};
        }

        /* Buttons */
        button,
        .primary,
        .ghost,
        .danger {
            font: inherit;
            padding: 8px 12px;
            border-radius: 10px;
            border: 1px solid ${d};
            background: #141414;
            color: ${b};
            cursor: pointer;
        }
        button:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
        button:hover:not(:disabled) {
            border-color: ${m};
        }
        .primary,
        a.primary {
            background: ${m};
            color: #08120b;
            border-color: ${m};
            text-decoration: none;
            display: inline-block;
        }
        .ghost {
            background: #0f0f0f;
        }
        .danger {
            background: #1a0f0f;
            border-color: #3a1a1a;
            color: #f2c6c6;
        }
        .danger:hover {
            border-color: #c24141;
        }

        .muted {
            color: ${g};
        }
        .small {
            font-size: 12px;
        }

        .error {
            color: #ff6b6b;
            margin-top: 8px;
        }

        .tips {
            margin-top: 10px;
        }

        @media (max-width: 900px) {
            .grid {
                grid-template-columns: 1fr;
            }
        }
    `},_="/freelance-apps-hub/assets/gifshot.min-DO2UIhpl.js",W="gifGenerator_v1";function q(){const[o,p]=n.useState([]),[h,$]=n.useState(320),[u,k]=n.useState(240),[f,F]=n.useState(150),[v,w]=n.useState(!1),[H,G]=n.useState(0),[y,j]=n.useState(""),[D,l]=n.useState(""),[x,I]=n.useState(typeof window<"u"&&!!window.gifshot),C=n.useRef(null),M=n.useRef(null);n.useEffect(()=>{if(window.gifshot){I(!0);return}const r=document.createElement("script");return r.src=_,r.async=!0,r.defer=!0,r.onload=()=>I(!!window.gifshot),r.onerror=()=>l("Could not load GIF engine."),document.body.appendChild(r),()=>{}},[]),n.useEffect(()=>{var r;try{const s=localStorage.getItem(W);if(!s)return;const a=JSON.parse(s);(r=a==null?void 0:a.frames)!=null&&r.length&&p(a.frames),a!=null&&a.gifWidth&&$(a.gifWidth),a!=null&&a.gifHeight&&k(a.gifHeight),a!=null&&a.delayMs&&F(a.delayMs)}catch{}},[]),n.useEffect(()=>{try{localStorage.setItem(W,JSON.stringify({frames:o,gifWidth:h,gifHeight:u,delayMs:f}))}catch{}},[o,h,u,f]),n.useEffect(()=>{const r=M.current;if(!r)return;const s=t=>{t.preventDefault(),r.classList.add("dragging")},a=t=>{t.preventDefault(),r.classList.remove("dragging")},i=t=>{var c;t.preventDefault(),r.classList.remove("dragging"),E([...((c=t.dataTransfer)==null?void 0:c.files)||[]])};return r.addEventListener("dragover",s),r.addEventListener("dragleave",a),r.addEventListener("drop",i),()=>{r.removeEventListener("dragover",s),r.removeEventListener("dragleave",a),r.removeEventListener("drop",i)}},[]);const S=()=>{var r;return(r=C.current)==null?void 0:r.click()},E=async r=>{l("");const s=r.filter(t=>t.type.startsWith("image/"));if(!s.length)return;const a=t=>new Promise(c=>{const N=new FileReader;N.onload=()=>c({id:crypto.randomUUID(),name:t.name,dataUrl:N.result}),N.readAsDataURL(t)}),i=[];for(const t of s)t.size>2*1024*1024&&l("Some images are >2MB. Consider resizing."),i.push(await a(t));p(t=>[...t,...i])},R=r=>{var s;E([...((s=r.target)==null?void 0:s.files)||[]]),r.target.value=""},U=r=>{const s=o.find(i=>i.id===r),a=s!=null&&s.name?` "${s.name}"`:"";confirm(`Delete${a}?`)&&p(i=>i.filter(t=>t.id!==r))},z=(r,s)=>{if(r<0||r>=o.length)return;const a=s==="up"?r-1:r+1;if(a<0||a>=o.length)return;const i=[...o],[t]=i.splice(r,1);i.splice(a,0,t),p(i)},O=()=>{o.length&&confirm("Clear all frames?")&&(p([]),j(""))},A=n.useMemo(()=>o.length>=2&&x&&!v,[o.length,x,v]),B=()=>{if(!window.gifshot){l("GIF engine not ready yet.");return}if(o.length<2){l("Add at least two images.");return}w(!0),G(0),l(""),j("");const r=o.map(t=>t.dataUrl),s=Math.max(16,Number(h)||320),a=Math.max(16,Number(u)||240),i=Math.max(10,Number(f)||150)/1e3;try{window.gifshot.createGIF({images:r,gifWidth:s,gifHeight:a,interval:i,repeat:0,numWorkers:2,sampleInterval:10,background:"#000",crossOrigin:"Anonymous",progressCallback:t=>{const c=Math.max(0,Math.min(100,Math.round((t||0)*100)));G(c)}},t=>{if(w(!1),t.error){l(typeof t.error=="string"?t.error:"Failed to generate GIF.");return}j(t.image)})}catch{w(!1),l("GIF generation failed. Try smaller dimensions or fewer frames.")}};return e.jsxs(Y.Wrapper,{children:[e.jsxs("header",{className:"header",children:[e.jsx("h2",{children:"GIF Generator"}),e.jsx("p",{className:"muted",children:"Drop images → arrange → set size & delay → Generate GIF → Download."}),e.jsx("div",{className:"status",children:e.jsxs("span",{className:`chip ${x?"ok":""}`,children:["gif engine ",x?"ready":"…"]})})]}),e.jsxs("div",{className:"grid",children:[e.jsxs("section",{className:"panel",children:[e.jsx("div",{className:"dropzone",ref:M,onClick:S,title:"Drop images here or click to pick",children:e.jsxs("div",{className:"dz-inner",children:[e.jsx("b",{children:"Drop images"})," or ",e.jsx("span",{className:"link",children:"browse"}),e.jsx("input",{ref:C,type:"file",accept:"image/*",multiple:!0,onChange:R,style:{display:"none"}})]})}),e.jsxs("div",{className:"framesHead",children:[e.jsxs("h4",{children:["Frames (",o.length,")"]}),e.jsx("div",{className:"spacer"}),e.jsx("button",{className:"ghost",onClick:S,children:"Add"}),e.jsx("button",{className:"danger",onClick:O,children:"Clear"})]}),e.jsxs("ul",{className:"frames",children:[o.map((r,s)=>e.jsxs("li",{className:"frame",children:[e.jsx("div",{className:"thumb",children:e.jsx("img",{src:r.dataUrl,alt:r.name||`frame-${s+1}`})}),e.jsxs("div",{className:"meta",children:[e.jsxs("div",{className:"name",title:r.name,children:[s+1,". ",r.name||"frame"]}),e.jsxs("div",{className:"row",children:[e.jsx("button",{className:"ghost",onClick:()=>z(s,"up"),"aria-label":"Move up",children:"↑"}),e.jsx("button",{className:"ghost",onClick:()=>z(s,"down"),"aria-label":"Move down",children:"↓"}),e.jsx("button",{className:"danger",onClick:()=>U(r.id),"aria-label":"Remove",children:"✕"})]})]})]},r.id)),!o.length&&e.jsx("li",{className:"empty",children:"No frames yet. Add a few images."})]})]}),e.jsxs("section",{className:"panel",children:[e.jsxs("div",{className:"settings",children:[e.jsx("h4",{children:"Settings"}),e.jsxs("div",{className:"row",children:[e.jsx("label",{htmlFor:"gifWidth",children:"Width"}),e.jsx("input",{id:"gifWidth",type:"number",min:"16",step:"1",value:h,onChange:r=>$(r.target.value)})]}),e.jsxs("div",{className:"row",children:[e.jsx("label",{htmlFor:"gifHeight",children:"Height"}),e.jsx("input",{id:"gifHeight",type:"number",min:"16",step:"1",value:u,onChange:r=>k(r.target.value)})]}),e.jsxs("div",{className:"row",children:[e.jsx("label",{htmlFor:"delayMs",children:"Delay (ms)"}),e.jsx("input",{id:"delayMs",type:"number",min:"10",step:"10",value:f,onChange:r=>F(r.target.value)})]}),e.jsx("div",{className:"actions",children:e.jsx("button",{className:"primary",disabled:!A,onClick:B,children:v?`Generating… ${H}%`:"Generate GIF"})}),!!D&&e.jsx("p",{className:"error",children:D})]}),e.jsxs("div",{className:"output",children:[e.jsx("h4",{children:"Output"}),e.jsx("div",{className:"preview",children:y?e.jsxs(e.Fragment,{children:[e.jsx("img",{src:y,alt:"Generated GIF preview"}),e.jsx("div",{className:"row",children:e.jsx("a",{className:"primary",href:y,download:"animated.gif",children:"Download GIF"})})]}):e.jsx("div",{className:"placeholder",children:"Your GIF will appear here after generation."})})]})]})]}),e.jsx("footer",{className:"tips muted small",children:"Tip: If generation fails, reduce image sizes or width/height."})]})}export{q as default};
