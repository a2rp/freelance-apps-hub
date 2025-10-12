import{d as n,r as i,j as e}from"./index-DN0lIypK.js";const F="var(--bg)",j="var(--card)",u="var(--text)",b="var(--muted)",c="var(--border)",p="var(--radius)",$="var(--shadow)",se="var(--accent)",x="var(--danger, #e5484d)",s={Page:n.div`
        color: ${u};
        background: ${F};
        padding: 16px;
        max-width: 1440px;
        margin: 0 auto;
        display: grid;
        gap: 16px;
    `,Header:n.header`
        display: grid;
        gap: 12px;
        h1 {
            margin: 0;
            font-size: 20px;
        }
        p {
            margin: 0;
            color: ${b};
            font-size: 14px;
        }
    `,Controls:n.div`
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        align-items: center;

        .ctrl {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: ${j};
            border: 1px solid ${c};
            border-radius: 999px;
            padding: 6px 10px;
            box-shadow: ${$};
        }
        .ctrl label {
            font-size: 12px;
            color: ${b};
        }
        .ctrl input[type="range"] {
            width: 120px;
        }
        .ctrl .val {
            font-size: 12px;
            color: ${u};
        }

        .switch {
            display: inline-flex;
            gap: 8px;
            align-items: center;
            margin-left: 4px;
        }
        .switch span {
            font-size: 13px;
            color: ${b};
        }

        .actions {
            display: inline-flex;
            gap: 8px;
            margin-left: auto;
        }
        .actions .ghost {
            background: ${F};
            border: 1px solid ${c};
            border-radius: ${p};
            padding: 8px 10px;
            cursor: pointer;
            font: inherit;
            color: ${u};
        }
        .actions .danger {
            border-color: ${x};
            color: ${x};
        }
    `,Hero:n.section`
        position: relative;
        height: 68vh;
        border-radius: ${p};
        overflow: hidden;
        border: 1px solid ${c};
        box-shadow: ${$};
        background: linear-gradient(180deg, #0e1218 0%, #0a0d14 100%);
    `,Layer:n.div`
        position: absolute;
        inset: -10% -5% -10% -5%;
        will-change: transform;
        pointer-events: none;
        transition: transform 0.1s linear;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        @media (prefers-reduced-motion: reduce) {
            transition: none;
        }

        /* Visible images to make motion obvious */
        &.sky {
            z-index: 1;
            background-image: url("https://images.unsplash.com/photo-1450849608889-6f787542c88a?q=80&w=1600&auto=format&fit=crop");
            filter: brightness(0.7) saturate(1.1);
        }
        &.mid {
            z-index: 2;
            background-image: url("https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1600&auto=format&fit=crop");
            mix-blend-mode: normal;
            filter: contrast(1.05) brightness(0.9);
            mask-image: linear-gradient(
                180deg,
                rgba(0, 0, 0, 1) 30%,
                rgba(0, 0, 0, 0) 95%
            );
            -webkit-mask-image: linear-gradient(
                180deg,
                rgba(0, 0, 0, 1) 30%,
                rgba(0, 0, 0, 0) 95%
            );
        }
        &.front {
            z-index: 3;
            background-image: url("https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop");
            filter: brightness(0.85) saturate(1.05);
            mask-image: linear-gradient(
                180deg,
                rgba(0, 0, 0, 1) 60%,
                rgba(0, 0, 0, 0) 100%
            );
            -webkit-mask-image: linear-gradient(
                180deg,
                rgba(0, 0, 0, 1) 60%,
                rgba(0, 0, 0, 0) 100%
            );
        }
    `,HeroContent:n.div`
        position: relative;
        z-index: 5;
        display: grid;
        place-items: center;
        height: 100%;
        text-align: center;
        padding: 0 16px;

        h2 {
            margin: 0 0 8px 0;
            font-size: 26px;
        }
        p {
            margin: 0 0 14px 0;
            color: ${b};
            font-size: 14px;
        }
        .cta {
            display: inline-block;
            padding: 10px 14px;
            border-radius: ${p};
            background: ${j};
            color: ${u};
            border: 1px solid ${c};
            text-decoration: none;
        }
    `,ParallaxSection:n.section`
        position: relative;
        min-height: 58vh;
        border-radius: ${p};
        overflow: hidden;
        border: 1px solid ${c};
        box-shadow: ${$};
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        /* iOS/mobile fallback */
        @media (max-width: 768px) {
            background-attachment: scroll;
        }

        .overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.25),
                rgba(0, 0, 0, 0.35)
            );
            color: white;
            display: grid;
            place-items: center;
            text-align: center;
            padding: 24px;
        }
        h3 {
            margin: 0 0 6px 0;
            font-size: 22px;
        }
        p {
            margin: 0;
            font-size: 14px;
            opacity: 0.9;
        }
    `,Section:n.section`
        background: ${j};
        border: 1px solid ${c};
        box-shadow: ${$};
        border-radius: ${p};
        padding: 16px;
        display: grid;
        gap: 16px;
    `,SectionHead:n.div`
        display: grid;
        gap: 6px;
        h3 {
            margin: 0;
            font-size: 18px;
        }
        p {
            margin: 0;
            font-size: 14px;
            color: ${b};
        }
    `,Form:n.form`
        display: grid;
        gap: 12px;
        .grid {
            display: grid;
            gap: 12px;
            grid-template-columns: 2fr 3fr 1fr;
            @media (max-width: 920px) {
                grid-template-columns: 1fr;
            }
        }
        .field {
            display: grid;
            gap: 6px;
        }
        .field.invalid input {
            border-color: ${x};
        }
        label {
            font-size: 13px;
        }
        em {
            color: ${x};
            font-style: normal;
        }
        input[type="text"],
        input[type="url"],
        input[type="number"] {
            border: 1px solid ${c};
            border-radius: calc(${p} - 2px);
            background: ${F};
            color: ${u};
            padding: 10px 12px;
            font: inherit;
            outline: none;
        }
        input:focus {
            border-color: ${se};
        }
        .error {
            min-height: 16px;
            font-size: 12px;
            color: ${x};
        }
        .actions {
            display: flex;
            gap: 10px;
        }
        button {
            appearance: none;
            border: 1px solid ${c};
            background: ${j};
            color: ${u};
            padding: 10px 14px;
            border-radius: ${p};
            cursor: pointer;
            font: inherit;
        }
    `,Cards:n.div`
        display: grid;
        gap: 12px;
        grid-template-columns: repeat(3, 1fr);
        @media (max-width: 1080px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media (max-width: 720px) {
            grid-template-columns: 1fr;
        }
    `,Card:n.figure`
        margin: 0;
        height: 240px;
        border-radius: ${p};
        background-size: cover;
        background-position: center;
        border: 1px solid ${c};
        box-shadow: ${$};
        overflow: hidden;
        position: relative;
        will-change: transform;

        .overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0),
                rgba(0, 0, 0, 0.55)
            );
            display: grid;
            align-content: end;
            gap: 8px;
            padding: 12px;
            color: #fff;
        }
        h4 {
            margin: 0;
            font-size: 16px;
        }
        .muted {
            font-size: 12px;
            opacity: 0.9;
        }
        .cardActions {
            display: flex;
            gap: 8px;
        }

        .ghost {
            background: rgba(0, 0, 0, 0.2);
            border: 1px solid rgba(255, 255, 255, 0.35);
            color: #fff;
            border-radius: ${p};
            padding: 6px 10px;
            font: inherit;
            cursor: pointer;
        }
        .small {
            font-size: 12px;
            padding: 6px 8px;
        }
        .danger {
            border-color: ${x};
            color: #fff;
        }
    `,Empty:n.div`
        border: 1px dashed ${c};
        border-radius: ${p};
        padding: 24px;
        text-align: center;
        color: ${b};
    `,ModalOverlay:n.div`
        position: fixed;
        inset: 0;
        z-index: 40;
        background: rgba(0, 0, 0, 0.35);
        display: grid;
        place-items: center;
    `,ModalCard:n.div`
        width: min(520px, 92vw);
        background: ${j};
        color: ${u};
        border: 1px solid ${c};
        border-radius: ${p};
        box-shadow: ${$};
        padding: 16px;
        h3 {
            margin: 0 0 8px 0;
            font-size: 18px;
        }
        p {
            margin: 0;
            color: ${b};
        }
    `,ModalActions:n.div`
        margin-top: 14px;
        display: flex;
        gap: 10px;
        justify-content: flex-end;
        .ghost,
        .danger {
            appearance: none;
            border: 1px solid ${c};
            background: ${j};
            color: ${u};
            padding: 10px 14px;
            border-radius: ${p};
            cursor: pointer;
            font: inherit;
        }
        .danger {
            border-color: ${x};
            color: ${x};
        }
    `},q="parallaxScenes_v1",H="parallaxSettings_v1",T=(a,d)=>{try{return JSON.parse(localStorage.getItem(a)||"null")??d}catch{return d}},I=(a,d)=>{try{localStorage.setItem(a,JSON.stringify(d))}catch{}},P={speeds:{sky:.2,mid:.4,front:.7,cards:.25},reducedMotion:!1},ne=[{id:w(),title:"Blue Ridge",imageUrl:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",speed:.25},{id:w(),title:"Dune Lines",imageUrl:"https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop",speed:.35},{id:w(),title:"City Night",imageUrl:"https://images.unsplash.com/photo-1447433819943-74a20887a81e?q=80&w=1600&auto=format&fit=crop",speed:.18}];function w(){try{return[...crypto.getRandomValues(new Uint8Array(8))].map(a=>a.toString(16).padStart(2,"0")).join("")}catch{return Math.random().toString(36).slice(2,10)}}const ie=({open:a,title:d,body:l,confirmLabel:S="Confirm",cancelLabel:h="Cancel",onClose:v,onConfirm:g})=>a?e.jsx(s.ModalOverlay,{role:"dialog","aria-modal":"true",children:e.jsxs(s.ModalCard,{children:[e.jsx("h3",{children:d}),l&&e.jsx("p",{className:"muted",children:l}),e.jsxs(s.ModalActions,{children:[e.jsx("button",{className:"ghost",onClick:v,children:h}),e.jsx("button",{className:"danger",onClick:g,children:S})]})]})}):null,oe=a=>a?window.getComputedStyle(a):null,O=a=>{if(!a)return!1;const d=oe(a);if(!d)return!1;const l=d.overflowY;return(l==="auto"||l==="scroll")&&a.scrollHeight>a.clientHeight},ce=()=>{const[a,d]=i.useState(()=>({...P,...T(H,{})})),[l,S]=i.useState(()=>{const r=T(q,null);return Array.isArray(r)?r:ne}),[h,v]=i.useState({title:"",imageUrl:"",speed:.25}),[g,D]=i.useState({}),[o,k]=i.useState({open:!1,mode:null,id:null}),N=i.useRef(null),C=i.useRef(null),R=i.useRef(null),A=i.useRef(null),f=i.useRef(null),z=i.useRef([]);i.useEffect(()=>{const r=document.querySelector("[data-scroll-root]");if(r&&O(r)){f.current=r;return}let t=A.current;for(;t&&t!==document.body;){if(O(t)){f.current=t;break}t=t.parentElement}f.current||(f.current=null)},[]),i.useEffect(()=>{z.current=Array.from(document.querySelectorAll("[data-parallax-card='1']"))},[l.length]),i.useEffect(()=>{if(a.reducedMotion)return;let r=0;const t=N.current,m=C.current,M=R.current,X=()=>{const y=f.current;return y?y.scrollTop:window.pageYOffset||document.documentElement.scrollTop||0},Z=()=>f.current?f.current.clientHeight:window.innerHeight,L=()=>{const y=X();t&&(t.style.transform=`translate3d(0, ${-(y*a.speeds.sky)}px, 0)`),m&&(m.style.transform=`translate3d(0, ${-(y*a.speeds.mid)}px, 0)`),M&&(M.style.transform=`translate3d(0, ${-(y*a.speeds.front)}px, 0)`);const ee=Z();for(const E of z.current){const re=E.getBoundingClientRect().top-ee/2,te=Number(E.dataset.speed||a.speeds.cards),ae=Math.max(-30,Math.min(30,-re*te*.05));E.style.transform=`translate3d(0, ${ae}px, 0)`}r=requestAnimationFrame(L)};return r=requestAnimationFrame(L),()=>cancelAnimationFrame(r)},[a.reducedMotion,a.speeds]),i.useEffect(()=>I(H,a),[a]),i.useEffect(()=>I(q,l),[l]);const _=r=>{const t={};String(r.title||"").trim()||(t.title="Title is required."),String(r.imageUrl||"").trim()?/^https?:\/\//i.test(r.imageUrl)||(t.imageUrl="Use a valid http(s) URL."):t.imageUrl="Image URL is required.";const m=Number(r.speed);return(Number.isNaN(m)||m<0||m>1)&&(t.speed="Speed must be 0.00 - 1.00"),t},B=r=>{r.preventDefault();const t=_(h);D(t),!Object.values(t).some(Boolean)&&(S(m=>[{id:w(),...h},...m]),v({title:"",imageUrl:"",speed:.25}))},J=r=>k({open:!0,mode:"delete",id:r}),V=()=>k({open:!0,mode:"clear",id:null}),Y=()=>k({open:!0,mode:"reset",id:null}),G=()=>{o.mode==="delete"&&o.id&&S(r=>r.filter(t=>t.id!==o.id)),o.mode==="clear"&&S([]),o.mode==="reset"&&d(r=>({...r,speeds:{...P.speeds}})),k({open:!1,mode:null,id:null})},W=()=>k({open:!1,mode:null,id:null}),U=(r,t)=>d(m=>({...m,speeds:{...m.speeds,[r]:t}})),K=()=>{const r=!a.reducedMotion;d(t=>({...t,reducedMotion:r})),r&&([N,C,R].forEach(t=>t.current&&(t.current.style.transform="translate3d(0,0,0)")),z.current.forEach(t=>t.style.transform="translate3d(0,0,0)"))},Q=l.length>0;return e.jsxs(s.Page,{ref:A,children:[e.jsxs(s.Header,{children:[e.jsxs("div",{children:[e.jsx("h1",{children:"Parallax Page"}),e.jsx("p",{children:"Layered hero, fixed backgrounds, and a tiny scenes manager."})]}),e.jsxs(s.Controls,{children:[e.jsxs("div",{className:"ctrl",children:[e.jsx("label",{htmlFor:"sky",children:"Sky"}),e.jsx("input",{id:"sky",type:"range",min:"0",max:"1",step:"0.01",value:a.speeds.sky,onChange:r=>U("sky",Number(r.target.value))}),e.jsx("span",{className:"val",children:a.speeds.sky.toFixed(2)})]}),e.jsxs("div",{className:"ctrl",children:[e.jsx("label",{htmlFor:"mid",children:"Mid"}),e.jsx("input",{id:"mid",type:"range",min:"0",max:"1",step:"0.01",value:a.speeds.mid,onChange:r=>U("mid",Number(r.target.value))}),e.jsx("span",{className:"val",children:a.speeds.mid.toFixed(2)})]}),e.jsxs("div",{className:"ctrl",children:[e.jsx("label",{htmlFor:"front",children:"Front"}),e.jsx("input",{id:"front",type:"range",min:"0",max:"1",step:"0.01",value:a.speeds.front,onChange:r=>U("front",Number(r.target.value))}),e.jsx("span",{className:"val",children:a.speeds.front.toFixed(2)})]}),e.jsxs("label",{className:"switch",children:[e.jsx("input",{type:"checkbox",checked:a.reducedMotion,onChange:K}),e.jsx("span",{children:"Reduced Motion"})]}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{className:"ghost",onClick:Y,title:"Reset speeds",children:"Reset Speeds"}),e.jsx("button",{className:"ghost danger",onClick:V,title:"Clear all scenes",children:"Clear Scenes"})]})]})]}),e.jsxs(s.Hero,{children:[e.jsx(s.Layer,{ref:N,className:"sky","aria-hidden":!0}),e.jsx(s.Layer,{ref:C,className:"mid","aria-hidden":!0}),e.jsx(s.Layer,{ref:R,className:"front","aria-hidden":!0}),e.jsxs(s.HeroContent,{children:[e.jsx("h2",{children:"Subtle Depth, Smooth Scroll"}),e.jsxs("p",{children:["CSS + a pinch of JS. Respects ",e.jsx("code",{children:"prefers-reduced-motion"}),"."]}),e.jsx("a",{className:"cta",href:"#scenes",children:"Explore Scenes"})]})]}),e.jsx(s.ParallaxSection,{style:{backgroundImage:"url('https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1600&auto=format&fit=crop')"},children:e.jsxs("div",{className:"overlay",children:[e.jsx("h3",{children:"Fixed Background"}),e.jsxs("p",{children:["Classic ",e.jsx("code",{children:"background-attachment: fixed"})," gives a light parallax."]})]})}),e.jsxs(s.Section,{id:"scenes",children:[e.jsxs(s.SectionHead,{children:[e.jsx("h3",{children:"Scenes"}),e.jsx("p",{children:"Add your own images and give them a speed."})]}),e.jsxs(s.Form,{onSubmit:B,noValidate:!0,children:[e.jsxs("div",{className:"grid",children:[e.jsxs("div",{className:`field ${g.title?"invalid":""}`,children:[e.jsxs("label",{htmlFor:"title",children:["Title ",e.jsx("em",{children:"*"})]}),e.jsx("input",{id:"title",name:"title",type:"text",value:h.title,onChange:r=>v(t=>({...t,title:r.target.value})),placeholder:"Sunrise in Ladakh"}),e.jsx("div",{className:"error",children:g.title||""})]}),e.jsxs("div",{className:`field ${g.imageUrl?"invalid":""}`,children:[e.jsxs("label",{htmlFor:"imageUrl",children:["Image URL ",e.jsx("em",{children:"*"})]}),e.jsx("input",{id:"imageUrl",name:"imageUrl",type:"url",value:h.imageUrl,onChange:r=>v(t=>({...t,imageUrl:r.target.value})),placeholder:"https://..."}),e.jsx("div",{className:"error",children:g.imageUrl||""})]}),e.jsxs("div",{className:`field ${g.speed?"invalid":""}`,children:[e.jsx("label",{htmlFor:"speed",children:"Speed (0-1)"}),e.jsx("input",{id:"speed",name:"speed",type:"number",step:"0.01",min:"0",max:"1",value:h.speed,onChange:r=>v(t=>({...t,speed:Number(r.target.value)}))}),e.jsx("div",{className:"error",children:g.speed||""})]})]}),e.jsx("div",{className:"actions",children:e.jsx("button",{type:"submit",children:"Add Scene"})})]}),e.jsx(s.Cards,{children:Q?l.map(r=>e.jsx(s.Card,{"data-parallax-card":"1","data-speed":r.speed,style:{backgroundImage:`url('${r.imageUrl}')`},role:"figure","aria-label":r.title,children:e.jsxs("div",{className:"overlay",children:[e.jsxs("div",{className:"meta",children:[e.jsx("h4",{children:r.title}),e.jsxs("span",{className:"muted",children:["speed: ",Number(r.speed).toFixed(2)]})]}),e.jsx("div",{className:"cardActions",children:e.jsx("button",{className:"ghost danger small",onClick:()=>J(r.id),children:"Remove"})})]})},r.id)):e.jsx(s.Empty,{children:e.jsx("p",{children:"No scenes yet. Add one above."})})})]}),e.jsx(s.ParallaxSection,{style:{backgroundImage:"url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop')"},children:e.jsxs("div",{className:"overlay",children:[e.jsx("h3",{children:"Another Layer"}),e.jsx("p",{children:"Mix fixed sections with layered hero for a richer feel."})]})}),e.jsx(ie,{open:o.open,title:o.mode==="delete"?"Remove this scene?":o.mode==="clear"?"Clear all scenes?":o.mode==="reset"?"Reset speeds to defaults?":"Confirm",body:o.mode==="delete"?"This will remove the selected scene.":o.mode==="clear"?"This will remove every scene in the grid.":o.mode==="reset"?"Sky/Mid/Front/Card speeds will be restored to initial values.":"",confirmLabel:o.mode==="delete"?"Remove":o.mode==="clear"?"Clear":o.mode==="reset"?"Reset":"Confirm",onClose:W,onConfirm:G})]})};export{ce as default};
