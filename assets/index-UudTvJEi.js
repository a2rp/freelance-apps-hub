import{d as l,r as n,j as t}from"./index-COA_3K4v.js";const le="var(--bg)",$="var(--card)",C="var(--text)",B="var(--muted)",S="var(--border)",R="var(--radius)",N="var(--shadow)",K="var(--accent)",A="var(--danger, #e5484d)",o={Wrapper:l.div`
        background: ${le};
        color: ${C};
        min-height: 100%;
        padding: 16px;

        /* requested scaffold */
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
        }
        p {
            margin: 0;
            color: ${B};
            font-size: 14px;
        }
    `,Badges:l.div`
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
        .badge {
            background: ${$};
            border: 1px solid ${S};
            padding: 6px 10px;
            border-radius: 999px;
            font-size: 12px;
            box-shadow: ${N};
        }
    `,Layout:l.div`
        display: grid;
        grid-template-columns: 1.7fr 1fr;
        gap: 16px;
        @media (max-width: 1100px) {
            grid-template-columns: 1fr;
        }
    `,GameCard:l.div`
        background: ${$};
        border: 1px solid ${S};
        border-radius: ${R};
        box-shadow: ${N};
        padding: 12px;
        display: grid;
        gap: 12px;
    `,CanvasWrap:l.div`
        width: 100%;
        max-width: 820px;
        margin: 0 auto;

        canvas {
            width: 100%;
            height: auto;
            display: block;
            border-radius: calc(${R} - 2px);
            border: 1px solid ${S};
            background: #cfefff;
            box-shadow: ${N};
            cursor: pointer; /* show it's clickable */
            touch-action: manipulation; /* better mobile taps */
        }
    `,Controls:l.div`
        display: flex;
        gap: 10px;
        align-items: center;

        .spacer {
            flex: 1;
        }
        .score {
            display: flex;
            gap: 14px;
            font-size: 14px;
            span {
                color: ${B};
            }
            strong {
                color: ${C};
            }
        }

        button {
            appearance: none;
            border: 1px solid ${S};
            background: ${$};
            color: ${C};
            padding: 10px 14px;
            border-radius: ${R};
            cursor: pointer;
            font: inherit;
            transition: border-color 0.15s ease, transform 0.02s ease-in-out;

            &:hover {
                border-color: ${K};
            }
            &:active {
                transform: translateY(1px);
            }
            &:disabled {
                opacity: 0.55;
                cursor: not-allowed;
            }
        }
    `,FooterNote:l.div`
        color: ${B};
        font-size: 12px;
        text-align: center;
    `,Side:l.aside`
        display: grid;
        gap: 16px;
    `,Card:l.div`
        background: ${$};
        border: 1px solid ${S};
        border-radius: ${R};
        box-shadow: ${N};
        padding: 14px;
        display: grid;
        gap: 12px;

        h3 {
            margin: 0;
            font-size: 16px;
        }
    `,Stats:l.ul`
        list-style: none;
        margin: 0;
        padding: 0;

        li {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 8px 0;
            border-bottom: 1px dashed ${S};
        }
        li:last-child {
            border-bottom: 0;
        }
        span {
            color: ${B};
        }
        strong {
            color: ${C};
        }
    `,Actions:l.div`
        display: flex;
        gap: 10px;
        flex-wrap: wrap;

        button {
            appearance: none;
            border: 1px solid ${S};
            background: ${$};
            color: ${C};
            padding: 8px 12px;
            border-radius: ${R};
            cursor: pointer;
            font: inherit;
            transition: border-color 0.15s ease, transform 0.02s ease-in-out;
            &:hover {
                border-color: ${K};
            }
            &:active {
                transform: translateY(1px);
            }
        }
        .danger {
            border-color: ${A};
            color: ${A};
            &:hover {
                border-color: ${A};
            }
        }
    `,Field:l.div`
        display: grid;
        gap: 6px;
        label {
            font-size: 13px;
            color: ${C};
        }
        input[type="range"] {
            width: 100%;
        }
    `,Help:l.div`
        font-size: 12px;
        color: ${B};
    `,ModalBackdrop:l.div`
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.4);
        display: grid;
        place-items: center;
        z-index: 999;
    `,Modal:l.div`
        width: min(520px, 92vw);
        background: ${$};
        border: 1px solid ${S};
        border-radius: ${R};
        box-shadow: ${N};
        padding: 16px;

        h4 {
            margin: 0 0 8px 0;
            font-size: 16px;
        }
        p {
            margin: 0 0 14px 0;
            color: ${B};
        }

        .row {
            display: flex;
            gap: 10px;
            justify-content: flex-end;
        }
        button {
            appearance: none;
            border: 1px solid ${S};
            background: ${$};
            color: ${C};
            padding: 8px 12px;
            border-radius: ${R};
            cursor: pointer;
            font: inherit;
            transition: border-color 0.15s ease, transform 0.02s ease-in-out;
            &:hover {
                border-color: ${K};
            }
            &:active {
                transform: translateY(1px);
            }
        }
        .ghost {
            background: ${le};
        }
        .danger {
            border-color: ${A};
            color: ${A};
        }
    `},X="flappyBird_best_v1",Q="flappyBird_stats_v1",ce="flappyBird_settings_v1",f=480,p=640,M=80,I=120,T=70,V={gravity:.42,jump:-7,gap:150,speedMul:1,spawnEvery:1400},Z=(u,h,x)=>Math.max(h,Math.min(x,u)),me=(u,h)=>Math.floor(Math.random()*(h-u+1))+u;function ye(u){const x=p-M-u-50,b=me(50,Math.max(50,x));return{x:f+40,topH:b,gap:u,scored:!1}}const ve=()=>{const u=n.useRef(null),h=n.useRef(0),x=n.useRef("ready"),b=n.useRef(V),F=n.useRef(0),j=n.useRef({y:p/2,vy:0,r:14}),w=n.useRef([]),H=n.useRef(0),y=n.useRef(!1),[ee,z]=n.useState("ready"),[D,G]=n.useState(0),[te,W]=n.useState(0),[P,O]=n.useState({attempts:0,totalScore:0,lastScore:0}),[m,L]=n.useState(()=>{try{return{...V,...JSON.parse(localStorage.getItem(ce)||"{}")}}catch{return V}});n.useEffect(()=>{x.current=ee},[ee]),n.useEffect(()=>{b.current=m;try{localStorage.setItem(ce,JSON.stringify(m))}catch{}},[m]),n.useEffect(()=>{F.current=D},[D]),n.useEffect(()=>{try{W(parseInt(localStorage.getItem(X)||"0",10)||0)}catch{}try{const e=JSON.parse(localStorage.getItem(Q)||"{}");e&&typeof e=="object"&&O({attempts:e.attempts||0,totalScore:e.totalScore||0,lastScore:e.lastScore||0})}catch{}},[]);const re=()=>{var c;const e=u.current;if(!e)return;const s=((c=e.parentElement)==null?void 0:c.clientWidth)||f,r=Math.max(1,Math.floor(window.devicePixelRatio||1)),a=s/f,g=Math.max(320,s),v=Math.round(p*a);e.width=Math.round(g*r),e.height=Math.round(v*r),e.getContext("2d").setTransform(a*r,0,0,a*r,0,0)};n.useEffect(()=>{re();const e=()=>re();return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);const Y=()=>{const e=x.current;if(e==="ready"){se();return}e!=="playing"||y.current||(j.current.vy=b.current.jump)},se=()=>{z("playing"),G(0),w.current=[],j.current={y:p/2,vy:0,r:14},H.current=performance.now(),y.current=!1},ae=()=>{z("ready"),G(0),w.current=[],j.current={y:p/2,vy:0,r:14},H.current=0,y.current=!1},ne=e=>{["Space","ArrowUp"].includes(e.code)?(e.preventDefault(),Y()):e.key.toLowerCase()==="p"?x.current==="playing"&&(y.current=!y.current):e.key.toLowerCase()==="r"&&ae()};n.useEffect(()=>(window.addEventListener("keydown",ne),()=>window.removeEventListener("keydown",ne)),[]),n.useEffect(()=>{cancelAnimationFrame(h.current);const e=s=>{pe(s),h.current=requestAnimationFrame(e)};return h.current=requestAnimationFrame(e),()=>cancelAnimationFrame(h.current)},[]);const pe=e=>{const s=u.current;if(!s)return;const r=s.getContext("2d"),a=x.current,g=b.current;r.clearRect(0,0,f,p);const v=r.createLinearGradient(0,0,0,p);if(v.addColorStop(0,"#89CFF0"),v.addColorStop(1,"#d0f0ff"),r.fillStyle=v,r.fillRect(0,0,f,p),r.fillStyle="#c2b280",r.fillRect(0,p-M,f,M),a==="ready"&&(k(r,"Flappy Bird",f/2,120,"28px Poppins","#212121"),k(r,"Tap / Click / Space to start",f/2,160,"16px Poppins","#333"),k(r,"P: Pause • R: Restart",f/2,184,"12px Poppins","#555")),a==="over"&&(k(r,"Game Over",f/2,150,"26px Poppins","#b00020"),k(r,"Tap / Space to restart",f/2,180,"14px Poppins","#444")),a==="playing"&&!y.current){const i=j.current;i.vy+=g.gravity,i.y+=i.vy,i.y=Z(i.y,0,p-M-i.r),e-H.current>=g.spawnEvery/g.speedMul&&(w.current.push(ye(g.gap)),H.current=e),r.fillStyle="#6fcf97";for(let c=w.current.length-1;c>=0;c--){const d=w.current[c];d.x-=2.2*g.speedMul,r.fillRect(d.x,0,T,d.topH);const E=d.topH+d.gap;r.fillRect(d.x,E,T,p-M-E),!d.scored&&d.x+T<I-i.r&&(d.scored=!0,G(_=>_+1)),d.x+T<-40&&w.current.splice(c,1)}if(oe(r,I,i.y,i.r),i.y+i.r>=p-M)return J();for(const c of w.current){if(ie(I,i.y,i.r,c.x,0,T,c.topH))return J();const d=c.topH+c.gap;if(ie(I,i.y,i.r,c.x,d,T,p-M-d))return J()}}else{const i=j.current;oe(r,I,i.y,i.r)}r.font="bold 26px Poppins, Arial",r.fillStyle="#111",r.textAlign="left",r.fillText(`Score: ${F.current}`,14,34),a==="playing"&&y.current&&k(r,"Paused",f/2,160,"22px Poppins","#333")},J=()=>{z("over");const e=F.current;O(s=>{const r={attempts:s.attempts+1,totalScore:s.totalScore+e,lastScore:e};try{localStorage.setItem(Q,JSON.stringify(r))}catch{}return r}),W(s=>{const r=Math.max(s,e);try{localStorage.setItem(X,String(r))}catch{}return r})};function k(e,s,r,a,g,v){e.save(),e.font=g,e.fillStyle=v,e.textAlign="center",e.fillText(s,r,a),e.restore()}function oe(e,s,r,a){e.save(),e.beginPath(),e.fillStyle="#ffd166",e.arc(s,r,a,0,Math.PI*2),e.fill(),e.beginPath(),e.fillStyle="#fff",e.arc(s+a*.3,r-a*.2,a*.35,0,Math.PI*2),e.fill(),e.beginPath(),e.fillStyle="#000",e.arc(s+a*.42,r-a*.2,a*.18,0,Math.PI*2),e.fill(),e.beginPath(),e.moveTo(s+a*.9,r),e.lineTo(s+a*1.5,r-a*.25),e.lineTo(s+a*1.5,r+a*.25),e.closePath(),e.fillStyle="#f3722c",e.fill(),e.restore()}function ie(e,s,r,a,g,v,i){const c=Z(e,a,a+v),d=Z(s,g,g+i),E=e-c,_=s-d;return E*E+_*_<=r*r}const[ue,q]=n.useState(!1),[fe,U]=n.useState(!1),xe=()=>{try{localStorage.removeItem(X)}catch{}W(0),q(!1)},ge=()=>{try{localStorage.removeItem(Q)}catch{}O({attempts:0,totalScore:0,lastScore:0}),U(!1)},he=n.useMemo(()=>P.attempts?(P.totalScore/P.attempts).toFixed(2):0,[P]);return t.jsxs(o.Wrapper,{children:[t.jsxs(o.Header,{children:[t.jsx("div",{children:t.jsx("h1",{children:"Flappy Bird Game"})}),t.jsxs(o.Badges,{children:[t.jsx("span",{className:"badge",children:"Local Best"}),t.jsx("span",{className:"badge",children:"Stats"}),t.jsx("span",{className:"badge",children:"Responsive Canvas"})]})]}),t.jsxs(o.Layout,{children:[t.jsxs(o.GameCard,{children:[t.jsx(o.CanvasWrap,{children:t.jsx("canvas",{ref:u,width:f,height:p,onPointerDown:Y,onTouchStart:e=>{e.preventDefault(),Y()},role:"img","aria-label":"Flappy Bird canvas"})}),t.jsxs(o.Controls,{children:[t.jsx("button",{onClick:()=>x.current==="playing"?y.current=!y.current:se(),"aria-label":"Start or Pause",children:x.current==="playing"?y.current?"Resume":"Pause":"Start"}),t.jsx("button",{onClick:ae,"aria-label":"Restart",children:"Restart"}),t.jsx("div",{className:"spacer"}),t.jsxs("div",{className:"score",children:[t.jsxs("span",{children:["Score: ",t.jsx("strong",{children:D})]}),t.jsxs("span",{children:["Best: ",t.jsx("strong",{children:te})]})]})]}),t.jsx(o.FooterNote,{children:"Tap / Click / Space to flap • P to pause • R to restart"})]}),t.jsxs(o.Side,{children:[t.jsxs(o.Card,{children:[t.jsx("h3",{children:"Stats"}),t.jsxs(o.Stats,{children:[t.jsxs("li",{children:[t.jsx("span",{children:"Best Score"}),t.jsx("strong",{children:te})]}),t.jsxs("li",{children:[t.jsx("span",{children:"Attempts"}),t.jsx("strong",{children:P.attempts})]}),t.jsxs("li",{children:[t.jsx("span",{children:"Last Score"}),t.jsx("strong",{children:P.lastScore})]}),t.jsxs("li",{children:[t.jsx("span",{children:"Average"}),t.jsx("strong",{children:he})]})]}),t.jsxs(o.Actions,{children:[t.jsx("button",{className:"danger",onClick:()=>q(!0),children:"Clear Best"}),t.jsx("button",{className:"danger",onClick:()=>U(!0),children:"Clear Stats"})]})]}),t.jsxs(o.Card,{children:[t.jsx("h3",{children:"Difficulty"}),t.jsxs(o.Field,{children:[t.jsx("label",{htmlFor:"speedMul",children:"Speed"}),t.jsx("input",{id:"speedMul",type:"range",min:"0.6",max:"1.8",step:"0.1",value:m.speedMul,onChange:e=>L(s=>({...s,speedMul:parseFloat(e.target.value)}))}),t.jsxs(o.Help,{children:[m.speedMul.toFixed(1),"x"]})]}),t.jsxs(o.Field,{children:[t.jsx("label",{htmlFor:"gap",children:"Gap"}),t.jsx("input",{id:"gap",type:"range",min:"110",max:"220",step:"5",value:m.gap,onChange:e=>L(s=>({...s,gap:parseInt(e.target.value,10)}))}),t.jsxs(o.Help,{children:[m.gap,"px"]})]}),t.jsxs(o.Field,{children:[t.jsx("label",{htmlFor:"gravity",children:"Gravity"}),t.jsx("input",{id:"gravity",type:"range",min:"0.30",max:"0.70",step:"0.02",value:m.gravity,onChange:e=>L(s=>({...s,gravity:parseFloat(e.target.value)}))}),t.jsx(o.Help,{children:m.gravity.toFixed(2)})]}),t.jsxs(o.Field,{children:[t.jsx("label",{htmlFor:"jump",children:"Jump Strength"}),t.jsx("input",{id:"jump",type:"range",min:"-9",max:"-5",step:"0.1",value:m.jump,onChange:e=>L(s=>({...s,jump:parseFloat(e.target.value)}))}),t.jsx(o.Help,{children:m.jump.toFixed(1)})]})]})]})]}),t.jsx(de,{open:ue,title:"Clear Best Score?",message:"This will remove your saved best score.",onConfirm:xe,onClose:()=>q(!1)}),t.jsx(de,{open:fe,title:"Clear Stats?",message:"This will reset attempts, total score, and last score.",onConfirm:ge,onClose:()=>U(!1)})]})},de=({open:u,title:h,message:x,onConfirm:b,onClose:F})=>u?t.jsx(o.ModalBackdrop,{onMouseDown:F,children:t.jsxs(o.Modal,{onMouseDown:j=>j.stopPropagation(),children:[t.jsx("h4",{children:h}),t.jsx("p",{children:x}),t.jsxs("div",{className:"row",children:[t.jsx("button",{className:"ghost",onClick:F,children:"Cancel"}),t.jsx("button",{className:"danger",onClick:()=>b==null?void 0:b(),children:"Yes, proceed"})]})]})}):null;export{ve as default};
