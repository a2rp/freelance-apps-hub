import{d,r as p,j as t}from"./index-C8KdOT0j.js";const m="var(--card, #111)",x="var(--text, #eaeaea)",S="var(--muted, #a8a8a8)",g="var(--border, #242424)",b="var(--accent, #22c55e)",$="var(--radius, 16px)",v="var(--shadow, 0 8px 30px rgba(0,0,0,0.25))",l={Wrapper:d.div`
        max-width: 1200px;
        margin: 0 auto;
        padding: 24px 16px 48px;
        color: ${x};
    `,Header:d.header`
        margin-bottom: 16px;

        h2 {
            font-weight: 700;
            margin: 0 0 6px;
            letter-spacing: 0.3px;
        }

        .sub {
            margin: 0 0 12px;
            color: ${S};
            font-size: 0.95rem;
        }
    `,Controls:d.div`
        display: flex;
        align-items: center;
        gap: 10px;
        flex-wrap: wrap;

        button {
            background: ${m};
            border: 1px solid ${g};
            color: ${x};
            border-radius: 10px;
            padding: 8px 12px;
            cursor: pointer;
            box-shadow: ${v};
            transition: 120ms ease-in-out;
        }
        button:hover {
            border-color: ${b};
        }
        button:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }

        .spacer {
            flex: 1;
        }
        .meta {
            color: ${S};
            font-size: 0.9rem;
        }
    `,Strip:d.div`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 12px;
        margin: 18px 0 8px;
    `,Swatch:d.div`
        background: ${a=>a.$bg};
        border-radius: 16px;
        min-height: 180px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border: 1px solid ${g};
        box-shadow: ${v};
        overflow: hidden;
        outline: ${a=>a.$locked?`2px dashed ${b}`:"none"};

        .top,
        .bottom {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 8px 8px 0;
            gap: 8px;
        }

        .bottom {
            padding: 0 8px 8px;
        }

        .chip {
            background: rgba(0, 0, 0, 0.25);
            padding: 4px 8px;
            border-radius: 999px;
            font-size: 0.8rem;
            border: 1px solid rgba(255, 255, 255, 0.15);
            user-select: none;
        }

        input[type="color"] {
            appearance: none;
            width: 32px;
            height: 32px;
            border: 1px solid rgba(0, 0, 0, 0.25);
            border-radius: 8px;
            background: transparent;
            cursor: pointer;
            padding: 0;
        }

        .mid {
            padding: 8px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .hex {
            width: 120px;
            text-align: center;
            font-weight: 700;
            font-size: 1.1rem;
            background: rgba(0, 0, 0, 0.22);
            border: 1px solid rgba(255, 255, 255, 0.15);
            border-radius: 10px;
            padding: 8px 10px;
            outline: none;
        }

        .ghost {
            background: rgba(0, 0, 0, 0.22);
            border: 1px solid rgba(255, 255, 255, 0.15);
            color: #fff;
            padding: 6px 10px;
            border-radius: 10px;
        }
        .ghost:hover {
            border-color: #fff;
        }
    `,SaveBar:d.div`
        margin: 18px 0 10px;
        display: flex;
        gap: 10px;

        input {
            flex: 1;
            background: ${m};
            color: ${x};
            border: 1px solid ${g};
            border-radius: ${$};
            padding: 10px 12px;
            outline: none;
        }

        button {
            background: ${b};
            color: #041007;
            border: 1px solid ${b};
            border-radius: ${$};
            padding: 10px 14px;
            cursor: pointer;
            box-shadow: ${v};
        }
    `,SavedSection:d.section`
        margin-top: 24px;

        h3 {
            margin: 0 0 10px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
            gap: 12px;
        }

        .card {
            background: ${m};
            border: 1px solid ${g};
            border-radius: ${$};
            box-shadow: ${v};
            padding: 10px;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .row {
            display: grid;
            grid-template-columns: repeat(8, 1fr);
            gap: 6px;
        }

        .mini {
            height: 24px;
            border-radius: 8px;
            border: 1px solid rgba(0, 0, 0, 0.2);
        }

        .meta {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;

            strong {
                color: ${x};
            }
            .actions {
                display: flex;
                gap: 8px;
            }

            button {
                background: ${m};
                border: 1px solid ${g};
                color: ${x};
                border-radius: 10px;
                padding: 6px 10px;
                cursor: pointer;
            }
            button:hover {
                border-color: ${b};
            }
            .danger:hover {
                border-color: #ef4444;
                color: #ef4444;
            }
        }
    `,ModalBackdrop:d.div`
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.6);
        display: grid;
        place-items: center;
        z-index: 999;
    `,ModalCard:d.div`
        width: min(520px, 92vw);
        background: ${m};
        color: ${x};
        border: 1px solid ${g};
        border-radius: ${$};
        box-shadow: ${v};
        padding: 16px;

        h4 {
            margin: 0 0 6px;
        }
        .muted {
            color: ${S};
            margin: 0 0 12px;
        }

        .preview {
            display: grid;
            grid-template-columns: repeat(8, 1fr);
            gap: 6px;
            margin-bottom: 14px;
        }
        .mini {
            height: 20px;
            border-radius: 8px;
            border: 1px solid rgba(0, 0, 0, 0.25);
        }

        .actions {
            display: flex;
            justify-content: flex-end;
            gap: 10px;

            button {
                background: ${m};
                border: 1px solid ${g};
                color: ${x};
                border-radius: 10px;
                padding: 8px 12px;
                cursor: pointer;
            }
            button:hover {
                border-color: ${b};
            }
            .danger {
                border-color: #ef4444;
                color: #ef4444;
            }
            .danger:hover {
                background: rgba(239, 68, 68, 0.08);
            }
        }
    `},Q=5,E="cpg:last",C="cpg:saved",N=()=>Math.floor(Math.random()*256),A=a=>a.toString(16).padStart(2,"0").toUpperCase(),P=()=>`#${A(N())}${A(N())}${A(N())}`;function X(a){const n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);return n?{r:parseInt(n[1],16),g:parseInt(n[2],16),b:parseInt(n[3],16)}:{r:0,g:0,b:0}}function Y(a){const{r:n,g:w,b:k}=X(a),h=[n,w,k].map(j=>{const i=j/255;return i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4)});return .2126*h[0]+.7152*h[1]+.0722*h[2]}const Z=a=>Y(a)>.5?"#111":"#fff",ee=a=>{if(!a)return"";let n=a.trim().toUpperCase();return n.startsWith("#")||(n="#"+n),/^#[0-9A-F]{6}$/.test(n)?n:""},H=(a=Q)=>Array.from({length:a},()=>({hex:P(),locked:!1}));function oe(){const[a,n]=p.useState(()=>{try{const e=JSON.parse(localStorage.getItem(E)||"null");return Array.isArray(e)&&e.length?e:H()}catch{return H()}}),[w,k]=p.useState(""),[h,j]=p.useState(""),[i,D]=p.useState(()=>{try{const e=JSON.parse(localStorage.getItem(C)||"[]");return Array.isArray(e)?e:[]}catch{return[]}}),[c,y]=p.useState(null);p.useEffect(()=>{localStorage.setItem(E,JSON.stringify(a))},[a]);const I=a.length>3,T=a.length<8,L=p.useMemo(()=>a.filter(e=>e.locked).length,[a]),M=()=>{n(e=>e.map(o=>o.locked?o:{...o,hex:P()}))},O=e=>{n(o=>o.map((r,s)=>s===e?{...r,locked:!r.locked}:r))},R=(e,o)=>{const r=ee(o);r&&n(s=>s.map((u,f)=>f===e?{...u,hex:r}:u))},z=(e,o)=>{n(r=>r.map((s,u)=>u===e?{...s,hex:o.toUpperCase()}:s))},B=async e=>{try{await navigator.clipboard.writeText(e),k(e),setTimeout(()=>k(""),800)}catch{}},J=()=>{T&&n(e=>[...e,{hex:P(),locked:!1}])},F=()=>{I&&n(e=>e.slice(0,-1))},G=()=>{n(e=>e.map(o=>({...o,locked:!1})))},W=()=>{const e=h.trim()||`Palette ${new Date().toLocaleString()}`,r=[{id:crypto.randomUUID(),name:e,swatches:a},...i].slice(0,50);D(r),localStorage.setItem(C,JSON.stringify(r)),j("")},_=e=>{var o;(o=e==null?void 0:e.swatches)!=null&&o.length&&(n(e.swatches),window.scrollTo({top:0,behavior:"smooth"}))},V=e=>{const o=i.filter(r=>r.id!==e);D(o),localStorage.setItem(C,JSON.stringify(o))},q=e=>y(e),U=()=>y(null),K=()=>{c!=null&&c.id&&V(c.id),y(null)};return t.jsxs(l.Wrapper,{children:[t.jsxs(l.Header,{children:[t.jsx("h2",{children:"Color Palette Generator"}),t.jsx("p",{className:"sub",children:"Randomize, lock, tweak, and save palettes. Clean, offline, and fast."}),t.jsxs(l.Controls,{children:[t.jsx("button",{onClick:M,title:"Shuffle (keeps locked)",children:"Shuffle"}),t.jsx("button",{onClick:G,title:"Unlock all",children:"Unlock all"}),t.jsx("span",{className:"spacer"}),t.jsx("button",{onClick:J,disabled:!T,title:"Add swatch",children:"+ Add"}),t.jsx("button",{onClick:F,disabled:!I,title:"Remove last",children:"− Remove"}),t.jsxs("span",{className:"meta",children:[a.length," swatches • ",L," locked"]})]})]}),t.jsx(l.Strip,{children:a.map((e,o)=>{const r=e.hex,s=Z(r),u=w===r;return t.jsxs(l.Swatch,{$bg:r,$locked:e.locked,children:[t.jsxs("div",{className:"top",children:[t.jsx("span",{className:"chip",style:{color:s},children:e.locked?"Locked":"Free"}),t.jsx("input",{"aria-label":"Pick color",type:"color",value:r,onChange:f=>z(o,f.target.value)})]}),t.jsx("div",{className:"mid",children:t.jsx("input",{className:"hex",value:r,onChange:f=>R(o,f.target.value),style:{color:s}})}),t.jsxs("div",{className:"bottom",children:[t.jsx("button",{className:"ghost",onClick:()=>O(o),children:e.locked?"Unlock":"Lock"}),t.jsx("button",{className:"ghost",onClick:()=>B(r),children:u?"Copied":"Copy"})]})]},o)})}),t.jsxs(l.SaveBar,{children:[t.jsx("input",{placeholder:"Save as (optional name)",value:h,onChange:e=>j(e.target.value)}),t.jsx("button",{onClick:W,children:"Save Palette"})]}),i.length>0&&t.jsxs(l.SavedSection,{children:[t.jsx("h3",{children:"Saved Palettes"}),t.jsx("div",{className:"grid",children:i.map(e=>t.jsxs("div",{className:"card",children:[t.jsx("div",{className:"row",children:e.swatches.map((o,r)=>t.jsx("span",{style:{background:o.hex},className:"mini",title:o.hex},r))}),t.jsxs("div",{className:"meta",children:[t.jsx("strong",{children:e.name}),t.jsxs("div",{className:"actions",children:[t.jsx("button",{onClick:()=>_(e),children:"Load"}),t.jsx("button",{className:"danger",onClick:()=>q(e),children:"Delete"})]})]})]},e.id))})]}),c&&t.jsx(l.ModalBackdrop,{onClick:U,children:t.jsxs(l.ModalCard,{onClick:e=>e.stopPropagation(),children:[t.jsx("h4",{children:"Delete this palette?"}),t.jsxs("p",{className:"muted",children:["“",c.name,"” will be permanently removed."]}),t.jsx("div",{className:"preview",children:c.swatches.map((e,o)=>t.jsx("span",{className:"mini",style:{background:e.hex},title:e.hex},o))}),t.jsxs("div",{className:"actions",children:[t.jsx("button",{onClick:U,children:"Cancel"}),t.jsx("button",{className:"danger",onClick:K,children:"Delete"})]})]})})]})}export{oe as default};
