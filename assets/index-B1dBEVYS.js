import{d as c,r as l,j as e}from"./index-BA60W61Y.js";const w="var(--bg)",D="var(--card)",z="var(--text)",y="var(--muted)",x="var(--border)",k="var(--radius)",E="var(--shadow)",U="var(--accent)",ee="var(--danger, #e5484d)",ue="var(--pong-ball, var(--accent))",xe="var(--pong-paddle, var(--card))",re="var(--pong-paddle-border, var(--border))",o={Wrapper:c.div`
        max-width: 1440px;
        margin: 0 auto;
        padding: 16px;
        color: ${z};
        background: ${w};
        display: grid;
        gap: 16px;
    `,Header:c.div`
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
            color: ${y};
            font-size: 14px;
        }
    `,Badges:c.div`
        display: flex;
        gap: 8px;
        .badge {
            background: ${D};
            border: 1px solid ${x};
            padding: 6px 10px;
            border-radius: 999px;
            font-size: 12px;
            box-shadow: ${E};
        }
    `,Layout:c.div`
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 16px;

        @media (max-width: 1024px) {
            grid-template-columns: 1fr;
        }
    `,Card:c.div`
        background: ${D};
        border: 1px solid ${x};
        border-radius: ${k};
        box-shadow: ${E};
        padding: 16px;
    `,Scorebar:c.div`
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        align-items: center;
        padding-bottom: 8px;

        .side {
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .side.right {
            justify-content: flex-end;
        }

        .score {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            min-width: 36px;
            padding: 6px 10px;
            border: 1px solid ${x};
            border-radius: 999px;
            background: ${w};
            font-weight: 600;
            box-shadow: ${E};
        }

        .center {
            font-size: 13px;
            color: ${y};
        }
        .winner {
            color: ${U};
            font-weight: 600;
        }
    `,Arena:c.div`
        position: relative;
        width: 100%;

        /* ✅ Use aspect-ratio to keep JS height = DOM height */
        aspect-ratio: 16 / 9;
        min-height: 320px;
        max-height: 640px;

        border: 1px solid ${x};
        border-radius: ${k};
        background: ${w};
        box-shadow: inset 0 0 0 1px ${x};
        overflow: hidden;
        user-select: none;
        touch-action: none;
        cursor: crosshair;

        .net {
            position: absolute;
            left: 50%;
            top: 0;
            bottom: 0;
            width: 2px;
            background: ${x};
            transform: translateX(-1px);
            opacity: 0.7;
        }

        .paddle {
            position: absolute;
            width: 14px;
            height: 100px;
            background: ${D};
            border: 1px solid ${x};
            border-radius: 8px;
            box-shadow: ${E};
            /* transform set by JS */
        }

        .ball {
            position: absolute;
            width: 18px;
            height: 18px;
            border-radius: 50%;
            background: ${ue};
            box-shadow: ${w};
            border: 1px solid ${re};
            /* transform set by JS */
        }
    `,Actions:c.div`
        margin-top: 12px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;

        .left,
        .right {
            display: flex;
            gap: 10px;
            align-items: center;
        }

        button {
            appearance: none;
            border: 1px solid ${x};
            background: ${xe};
            border: 1px solid ${re};
            color: ${z};
            padding: 10px 14px;
            border-radius: ${k};
            cursor: pointer;
            font: inherit;
            transition: transform 0.02s ease-in-out, border-color 0.15s ease;
            &:hover {
                border-color: ${U};
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
            background: ${w};
        }
    `,Side:c.aside`
        display: grid;
        gap: 16px;

        .tips {
            margin: 0;
            padding-left: 18px;
            color: ${y};
            font-size: 14px;
        }
        .muted {
            color: ${y};
        }
    `,FormRow:c.div`
        display: grid;
        gap: 8px;
        margin-bottom: 12px;

        label {
            font-size: 13px;
        }
        .inline {
            display: flex;
            gap: 16px;
            align-items: center;
        }

        .radio {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-size: 14px;
        }

        select,
        input[type="range"] {
            width: 100%;
            border: 1px solid ${x};
            background: ${w};
            color: ${z};
            border-radius: calc(${k} - 2px);
            padding: 8px 10px;
            font: inherit;
            outline: none;
        }

        .hint {
            font-size: 12px;
            color: ${y};
        }
    `,HiList:c.ul`
        list-style: none;
        margin: 0;
        padding: 0;

        li + li {
            margin-top: 8px;
        }

        .row {
            display: flex;
            justify-content: space-between;
            gap: 12px;
        }
        .score {
            font-weight: 600;
        }
        .meta {
            color: ${y};
            font-size: 12px;
        }
        .time {
            color: ${y};
            font-size: 12px;
        }
    `,Modal:c.div`
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.4);
        display: grid;
        place-items: center;
        z-index: 50;
    `,ModalCard:c.div`
        width: min(520px, 92vw);
        background: ${D};
        border: 1px solid ${x};
        border-radius: ${k};
        box-shadow: ${E};
        padding: 16px;

        h3 {
            margin: 0 0 8px 0;
            font-size: 16px;
        }
        .muted {
            color: ${y};
            margin: 0 0 12px 0;
        }
    `,ModalActions:c.div`
        display: flex;
        justify-content: flex-end;
        gap: 10px;

        button {
            appearance: none;
            border: 1px solid ${x};
            background: ${D};
            color: ${z};
            padding: 10px 14px;
            border-radius: ${k};
            cursor: pointer;
            font: inherit;
            &:hover {
                border-color: ${U};
            }
            &:active {
                transform: translateY(1px);
            }
        }
        .danger {
            border-color: ${ee};
            color: ${ee};
        }
        .ghost {
            background: ${w};
        }
    `},te="pingPong_settings_v1",se="pingPong_highscores_v1",W={mode:"single",difficulty:"medium",winScore:7,ballSpeed:6,paddleSpeed:8,sound:!1},J=(i,f,j)=>Math.max(f,Math.min(j,i)),ge=()=>{const[i,f]=l.useState(()=>{try{return{...W,...JSON.parse(localStorage.getItem(te)||"null")||{}}}catch{return W}});l.useEffect(()=>{try{localStorage.setItem(te,JSON.stringify(i))}catch{}},[i]);const[j,Y]=l.useState(()=>{try{return JSON.parse(localStorage.getItem(se)||"[]")}catch{return[]}});l.useEffect(()=>{try{localStorage.setItem(se,JSON.stringify(j))}catch{}},[j]);const p=l.useRef(null),v=l.useRef(0),N=l.useRef(!1),[S,L]=l.useState(!1),[P,H]=l.useState(!0),[_,I]=l.useState({left:0,right:0}),[q,B]=l.useState(""),[C,ne]=l.useState({w:960,h:540,dpr:1}),$=l.useRef({x:28,y:0,w:14,h:100}),b=l.useRef({x:0,y:0,w:14,h:100}),d=l.useRef({x:0,y:0,r:9,vx:0,vy:0,speed:i.ballSpeed}),m=l.useRef({w:!1,s:!1,ArrowUp:!1,ArrowDown:!1}),R=l.useRef({active:!1,side:""}),M=()=>{if(!p.current)return;const t=$.current,n=b.current,s=d.current,a=p.current,r=a.querySelector('[data-role="paddle-left"]'),g=a.querySelector('[data-role="paddle-right"]'),u=a.querySelector('[data-role="ball"]');r&&(r.style.transform=`translate(${t.x}px, ${t.y}px)`),g&&(g.style.transform=`translate(${n.x}px, ${n.y}px)`),u&&(u.style.transform=`translate(${s.x-s.r}px, ${s.y-s.r}px)`)};l.useEffect(()=>{const t=()=>{const s=p.current;if(!s)return;const a=s.clientWidth,r=s.clientHeight||Math.round(a*9/16);ne({w:a,h:r,dpr:window.devicePixelRatio||1})};t();const n=new ResizeObserver(t);return p.current&&n.observe(p.current),window.addEventListener("orientationchange",t),()=>{try{n.disconnect()}catch{}window.removeEventListener("orientationchange",t)}},[]),l.useEffect(()=>{const{w:t,h:n}=C;$.current.y=(n-$.current.h)/2,b.current.x=t-28-b.current.w,b.current.y=(n-b.current.h)/2,d.current.x=t/2,d.current.y=n/2,d.current.vx=0,d.current.vy=0,d.current.speed=i.ballSpeed,H(!0),L(!1),N.current=!1,v.current&&cancelAnimationFrame(v.current),v.current=0,M()},[C.w,C.h]);const G=()=>{if(S)return;B(""),H(!1),L(!0),N.current=!0;const t=Math.random()*.6-.3,n=Math.random()<.5?-1:1,s=i.ballSpeed;d.current.vx=Math.cos(t)*s*n,d.current.vy=Math.sin(t)*s,F()},A=()=>{L(!1),N.current=!1,v.current&&cancelAnimationFrame(v.current),v.current=0},X=()=>{N.current||(L(!0),N.current=!0,F())},F=()=>{v.current=requestAnimationFrame(F),ae()},ae=()=>{const{w:t,h:n}=C,s=$.current,a=b.current,r=d.current;if(m.current.w&&(s.y-=i.paddleSpeed),m.current.s&&(s.y+=i.paddleSpeed),m.current.ArrowUp&&i.mode==="two"&&(a.y-=i.paddleSpeed),m.current.ArrowDown&&i.mode==="two"&&(a.y+=i.paddleSpeed),i.mode==="single"){const g=r.y-a.h/2,u=i.difficulty==="easy"?.05:i.difficulty==="hard"?.16:.1;a.y+=(g-a.y)*u}if(s.y=J(s.y,0,n-s.h),a.y=J(a.y,0,n-a.h),r.x+=r.vx,r.y+=r.vy,r.y-r.r<=0&&r.vy<0&&(r.vy=-r.vy,r.y=r.r),r.y+r.r>=n&&r.vy>0&&(r.vy=-r.vy,r.y=n-r.r),r.x-r.r<=s.x+s.w&&r.x>s.x&&r.y>=s.y&&r.y<=s.y+s.h&&r.vx<0){r.vx=-r.vx;const g=(r.y-(s.y+s.h/2))/(s.h/2);r.vy+=g*2.5,r.speed*=1.03;const u=Math.hypot(r.vx,r.vy)||1;r.vx=r.vx/u*r.speed,r.vy=r.vy/u*r.speed,r.x=s.x+s.w+r.r+.01}if(r.x+r.r>=a.x&&r.x<a.x+a.w&&r.y>=a.y&&r.y<=a.y+a.h&&r.vx>0){r.vx=-r.vx;const g=(r.y-(a.y+a.h/2))/(a.h/2);r.vy+=g*2.5,r.speed*=1.03;const u=Math.hypot(r.vx,r.vy)||1;r.vx=r.vx/u*r.speed,r.vy=r.vy/u*r.speed,r.x=a.x-r.r-.01}r.x+r.r<0?K("right"):r.x-r.r>t&&K("left"),M()},K=t=>{A(),H(!0),I(a=>{const r={...a,[t]:a[t]+1};if(r[t]>=i.winScore){B(t==="left"?"Player 1":i.mode==="single"?"You":"Player 2");try{const g={when:new Date().toISOString(),mode:i.mode,difficulty:i.mode==="single"?i.difficulty:"-",score:`${r.left}–${r.right}`};Y(u=>[g,...u].slice(0,10))}catch{}I({left:0,right:0})}return r});const{w:n,h:s}=C;d.current.x=n/2,d.current.y=s/2,d.current.vx=0,d.current.vy=0,d.current.speed=i.ballSpeed,M()};l.useEffect(()=>{const t=s=>{s.repeat||(s.type==="keydown"?(s.key in m.current&&(m.current[s.key]=!0),(s.key===" "||s.code==="Space")&&(s.preventDefault(),P?G():S?A():X())):s.key in m.current&&(m.current[s.key]=!1))};window.addEventListener("keydown",t),window.addEventListener("keyup",t);const n=()=>{m.current={w:!1,s:!1,ArrowUp:!1,ArrowDown:!1},A()};return window.addEventListener("blur",n),()=>{window.removeEventListener("keydown",t),window.removeEventListener("keyup",t),window.removeEventListener("blur",n)}},[S,P]);const ie=t=>{var a,r;if(!p.current)return;const n=p.current.getBoundingClientRect(),s=t.clientX-n.left;R.current.active=!0,R.current.side=s<n.width/2?"left":"right",(r=(a=p.current).setPointerCapture)==null||r.call(a,t.pointerId),V(t)},oe=t=>{R.current.active&&V(t)},Q=t=>{var n,s;R.current.active=!1;try{(s=(n=p.current)==null?void 0:n.releasePointerCapture)==null||s.call(n,t.pointerId)}catch{}},V=t=>{if(!p.current)return;const n=p.current.getBoundingClientRect(),s=t.clientY-n.top,a=$.current.h,r=J(s-a/2,0,n.height-a);R.current.side==="left"?$.current.y=r:i.mode==="two"&&(b.current.y=r),M()},[h,Z]=l.useState({show:!1,kind:""}),O=t=>Z({show:!0,kind:t}),T=()=>Z({show:!1,kind:""}),le=()=>{h.kind==="clearScores"&&(I({left:0,right:0}),B(""),M()),h.kind==="resetDefaults"&&f(W),h.kind==="clearHiScores"&&Y([]),T()},de=!P,ce=!S,pe=S||P;return e.jsxs(o.Wrapper,{children:[e.jsxs(o.Header,{children:[e.jsxs("div",{children:[e.jsx("h1",{children:"Ping Pong Game"}),e.jsx("p",{children:"Drag paddles (mouse/touch) or use keys (W/S and ↑/↓). Space = Serve/Pause/Resume."})]}),e.jsxs(o.Badges,{children:[e.jsx("span",{className:"badge",children:"Single / Two Player"}),e.jsx("span",{className:"badge",children:"Local Save"}),e.jsx("span",{className:"badge",children:"No Portals"})]})]}),e.jsxs(o.Layout,{children:[e.jsxs(o.Card,{children:[e.jsxs(o.Scorebar,{children:[e.jsxs("div",{className:"side",children:[e.jsx("strong",{children:"Player 1"}),e.jsx("span",{className:"score",children:_.left})]}),e.jsx("div",{className:"center",children:q?e.jsxs("span",{className:"winner",children:[q," won"]}):e.jsx("span",{children:S?"Playing...":P?"Press Serve":"Paused"})}),e.jsxs("div",{className:"side right",children:[e.jsx("strong",{children:i.mode==="single"?"CPU":"Player 2"}),e.jsx("span",{className:"score",children:_.right})]})]}),e.jsxs(o.Arena,{ref:p,onPointerDown:ie,onPointerMove:oe,onPointerUp:Q,onPointerCancel:Q,children:[e.jsx("div",{className:"net","aria-hidden":!0}),e.jsx("div",{"data-role":"paddle-left",className:"paddle","aria-label":"Left paddle"}),e.jsx("div",{"data-role":"paddle-right",className:"paddle","aria-label":"Right paddle"}),e.jsx("div",{"data-role":"ball",className:"ball","aria-label":"Ball"})]}),e.jsxs(o.Actions,{children:[e.jsxs("div",{className:"left",children:[e.jsx("button",{onClick:G,disabled:de,children:"Serve"}),e.jsx("button",{onClick:A,disabled:ce,children:"Pause"}),e.jsx("button",{onClick:X,disabled:pe,children:"Resume"})]}),e.jsxs("div",{className:"right",children:[e.jsx("button",{className:"ghost",onClick:()=>O("clearScores"),children:"Clear Scores"}),e.jsx("button",{className:"ghost",onClick:()=>O("resetDefaults"),children:"Reset Defaults"})]})]})]}),e.jsxs(o.Side,{children:[e.jsxs(o.Card,{children:[e.jsx("h3",{children:"Settings"}),e.jsxs(o.FormRow,{children:[e.jsx("label",{children:"Mode"}),e.jsxs("div",{className:"inline",children:[e.jsxs("label",{className:"radio",children:[e.jsx("input",{type:"radio",name:"mode",value:"single",checked:i.mode==="single",onChange:t=>f(n=>({...n,mode:t.target.value}))}),e.jsx("span",{children:"Single Player"})]}),e.jsxs("label",{className:"radio",children:[e.jsx("input",{type:"radio",name:"mode",value:"two",checked:i.mode==="two",onChange:t=>f(n=>({...n,mode:t.target.value}))}),e.jsx("span",{children:"Two Players"})]})]})]}),i.mode==="single"&&e.jsxs(o.FormRow,{children:[e.jsx("label",{children:"CPU Difficulty"}),e.jsxs("select",{value:i.difficulty,onChange:t=>f(n=>({...n,difficulty:t.target.value})),children:[e.jsx("option",{value:"easy",children:"Easy"}),e.jsx("option",{value:"medium",children:"Medium"}),e.jsx("option",{value:"hard",children:"Hard"})]})]}),e.jsxs(o.FormRow,{children:[e.jsx("label",{children:"Win Score"}),e.jsx("select",{value:i.winScore,onChange:t=>f(n=>({...n,winScore:Number(t.target.value)})),children:[5,7,9,11].map(t=>e.jsx("option",{value:t,children:t},t))})]}),e.jsxs(o.FormRow,{children:[e.jsx("label",{children:"Ball Speed"}),e.jsx("input",{type:"range",min:3,max:12,step:1,value:i.ballSpeed,onChange:t=>f(n=>({...n,ballSpeed:Number(t.target.value)}))}),e.jsx("div",{className:"hint",children:i.ballSpeed})]}),e.jsxs(o.FormRow,{children:[e.jsx("label",{children:"Paddle Speed"}),e.jsx("input",{type:"range",min:5,max:16,step:1,value:i.paddleSpeed,onChange:t=>f(n=>({...n,paddleSpeed:Number(t.target.value)}))}),e.jsx("div",{className:"hint",children:i.paddleSpeed})]})]}),e.jsxs(o.Card,{children:[e.jsx("h3",{children:"Controls"}),e.jsxs("ul",{className:"tips",children:[e.jsx("li",{children:"Drag left/right half to move that paddle."}),e.jsx("li",{children:"W/S = Player 1, ↑/↓ = Player 2 (two-player mode)."}),e.jsx("li",{children:"Space = Serve / Pause / Resume."})]})]}),e.jsxs(o.Card,{children:[e.jsx("h3",{children:"Recent Matches"}),j.length===0?e.jsx("p",{className:"muted",children:"Nothing yet."}):e.jsx(o.HiList,{children:j.map((t,n)=>e.jsxs("li",{children:[e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"score",children:t.score}),e.jsx("span",{className:"meta",children:t.mode==="single"?`CPU: ${t.difficulty}`:"Two-Player"})]}),e.jsx("div",{className:"time",children:new Date(t.when).toLocaleString()})]},n))}),e.jsxs(o.Actions,{children:[e.jsx("div",{className:"left"}),e.jsx("div",{className:"right",children:e.jsx("button",{className:"ghost",onClick:()=>O("clearHiScores"),children:"Clear History"})})]})]})]})]}),h.show&&e.jsx(o.Modal,{onMouseDown:T,children:e.jsxs(o.ModalCard,{onMouseDown:t=>t.stopPropagation(),children:[e.jsxs("h3",{children:[h.kind==="clearScores"&&"Clear current scores?",h.kind==="resetDefaults"&&"Reset settings to defaults?",h.kind==="clearHiScores"&&"Clear match history?"]}),e.jsxs("p",{className:"muted",children:[h.kind==="clearScores"&&"This will set Player 1 and Player 2 scores to zero.",h.kind==="resetDefaults"&&"All game settings will return to their original values.",h.kind==="clearHiScores"&&"This will remove saved results from localStorage."]}),e.jsxs(o.ModalActions,{children:[e.jsx("button",{className:"ghost",onClick:T,children:"Cancel"}),e.jsx("button",{className:"danger",onClick:le,children:"Confirm"})]})]})})]})};export{ge as default};
