import{d as k,r as p,j as e}from"./index-BhNMFMFX.js";const I="var(--card, #0f1012)",_="var(--text, #eaeaea)",H="var(--muted, #a8a8a8)",f="var(--border, #242424)",q="var(--accent, #22c55e)",be="var(--danger, #ef4444)",A="var(--radius, 16px)",P="var(--shadow, 0 10px 30px rgba(0,0,0,0.35))",N={Wrapper:k.div`
        color: ${_};
        display: grid;
        gap: 14px;
        max-width: 1440px;
        padding: 15px;
        margin: auto;
    `,Header:k.header`
        background: ${I};
        border: 1px solid ${f};
        border-radius: ${A};
        box-shadow: ${P};
        padding: 12px 14px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;

        .title {
            font-weight: 600;
            font-size: 18px;
        }

        .controls {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            align-items: center;
        }
        select,
        button {
            background: #151515;
            color: ${_};
            border: 1px solid ${f};
            border-radius: 10px;
            padding: 8px 10px;
            font-size: 14px;
            cursor: pointer;
        }
        button:hover,
        select:hover {
            border-color: ${q};
        }

        .seg {
            display: inline-flex;
            border: 1px solid ${f};
            border-radius: 10px;
            overflow: hidden;
        }
        .seg button {
            border: 0;
            border-right: 1px solid ${f};
            background: #101010;
        }
        .seg button:last-child {
            border-right: 0;
        }
        .seg .active {
            background: #1a1a1a;
            border-color: ${q};
        }

        .toggle {
            display: inline-flex;
            gap: 6px;
            align-items: center;
            font-size: 13px;
            color: ${H};
        }
        .toggle input {
            accent-color: #888;
        }
    `,Stats:k.div`
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        .chip {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 6px 10px;
            border: 1px solid ${f};
            border-radius: 999px;
            background: #121212;
            font-size: 13px;
        }
        .ghost {
            opacity: 0.8;
        }
    `,Stage:k.div`
        display: grid;
        gap: 14px;
    `,TargetCard:k.div`
        background: ${I};
        border: 1px solid ${f};
        border-radius: ${A};
        box-shadow: ${P};
        padding: 12px;

        .top {
            display: grid;
            grid-template-columns: 160px 1fr;
            gap: 12px;
            align-items: center;
        }
        .swatch {
            width: 100%;
            height: 96px;
            border-radius: 12px;
            border: 1px solid ${f};
            box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.02);
        }
        .rgb {
            font-size: 16px;
            font-weight: 600;
        }
        .hex {
            font-size: 13px;
            color: ${H};
        }
        .hint {
            margin-top: 4px;
            font-size: 12px;
        }
        .muted {
            color: ${H};
        }
        .note {
            margin-top: 8px;
        }
        @media (max-width: 640px) {
            .top {
                grid-template-columns: 1fr;
            }
        }
    `,Options:k.div`
        display: grid;
        grid-template-columns: repeat(${t=>t.$cols||3}, minmax(0, 1fr));
        gap: 10px;

        button {
            text-align: left;
            display: grid;
            grid-template-columns: 64px 1fr;
            gap: 10px;
            align-items: center;
            padding: 8px;
            background: ${I};
            border: 1px solid ${f};
            border-radius: 12px;
            box-shadow: ${P};
            cursor: pointer;
        }
        .box {
            width: 64px;
            height: 40px;
            border-radius: 8px;
            border: 1px solid ${f};
        }
        .code {
            font-size: 13px;
            color: ${H};
        }
    `,Mixer:k.div`
        background: ${I};
        border: 1px solid ${f};
        border-radius: ${A};
        box-shadow: ${P};
        padding: 12px;
        display: grid;
        gap: 12px;

        .mixRow {
            display: grid;
            grid-template-columns: 160px 1fr;
            gap: 12px;
            align-items: center;
        }
        .mixSwatch {
            width: 100%;
            height: 96px;
            border-radius: 12px;
            border: 1px solid ${f};
        }
        .mixVals {
            font-size: 14px;
        }

        .sliders {
            display: grid;
            gap: 6px;
        }
        label {
            display: grid;
            grid-template-columns: 18px 1fr;
            gap: 10px;
            align-items: center;
        }
        input[type="range"] {
            width: 100%;
        }

        .act {
            display: flex;
            gap: 8px;
        }
    `,Reveal:k.div`
        /* This entire block gets cloned for print (inside iframe) */
        .card {
            background: #fff;
            color: #111;
            border: 1px solid #ddd;
            border-radius: 12px;
            padding: 14px;
        }
        .title {
            margin: 0;
        }
        .top {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
        }
        .pill {
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid #ddd;
            font-size: 12px;
        }
        .ok {
            background: #eaffea;
            border-color: #c8f5c8;
            color: #0a7a2a;
        }
        .bad {
            background: #ffeeee;
            border-color: #f5c8c8;
            color: #8a1010;
        }

        .row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
            margin-top: 10px;
        }
        .sw {
            display: grid;
            grid-template-columns: 64px 1fr;
            gap: 10px;
            align-items: center;
        }
        .box {
            width: 64px;
            height: 40px;
            border: 1px solid #aaa;
            border-radius: 6px;
        }
        .muted {
            color: #555;
            font-size: 12px;
        }
        .mt {
            margin-top: 6px;
        }
    `,ModalBackdrop:k.div`
        position: fixed;
        inset: 0;
        z-index: 9999;
        background: rgba(0, 0, 0, 0.6);
        display: grid;
        place-items: center;
    `,ModalCard:k.div`
        width: min(420px, 92vw);
        background: ${I};
        border: 1px solid ${f};
        border-radius: ${A};
        box-shadow: ${P};
        padding: 16px;

        .title {
            font-weight: 600;
            margin-bottom: 6px;
        }
        .msg {
            color: ${H};
            font-size: 14px;
            margin-bottom: 12px;
        }
        .row {
            display: flex;
            gap: 8px;
            justify-content: flex-end;
        }

        button {
            padding: 8px 12px;
            border: 1px solid ${f};
            border-radius: 10px;
            background: #141414;
            color: ${_};
            cursor: pointer;
            font-size: 14px;
        }
        .ghost {
            background: transparent;
        }
        .danger {
            background: #1a0f10;
            border-color: ${be};
        }
        button:hover {
            border-color: ${q};
        }
    `},F={bestScore:"rgbGuesser_bestScore",bestStreak:"rgbGuesser_bestStreak"},ne={Easy:{options:3,tolLab:20},Medium:{options:6,tolLab:12},Hard:{options:9,tolLab:7}},C={Tiles:"Tiles",Mixer:"Mixer"};function U(t){return t/=255,t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function J(t){return(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055)*255}function Q(t){return Math.max(0,Math.min(1,t))}function ee(t){return Math.max(0,Math.min(255,Math.round(t)))}function me({r:t,g:n,b:a}){const i=U(t),o=U(n),r=U(a),g=.4124564*i+.3575761*o+.1804375*r,u=.2126729*i+.7151522*o+.072175*r,l=.0193339*i+.119192*o+.9503041*r;return{X:g,Y:u,Z:l}}function fe({X:t,Y:n,Z:a}){const i=3.2404542*t+-1.5371385*n+-.4985314*a,o=-.969266*t+1.8760108*n+.041556*a,r=.0556434*t+-.2040259*n+1.0572252*a;return{r:ee(J(Q(i))),g:ee(J(Q(o))),b:ee(J(Q(r)))}}function je({X:t,Y:n,Z:a}){const g=d(t/.95047),u=d(n/1),l=d(a/1.08883);return{L:116*u-16,a:500*(g-u),b:200*(u-l)};function d(x){return x>Math.pow(6/29,3)?Math.cbrt(x):x*(29/6)*(29/6)/3+4/29}}function ve({L:t,a:n,b:a}){const i=(t+16)/116,o=i+n/500,r=i-a/200,g=.95047,u=1,l=1.08883,d=y(o),x=y(i),B=y(r);return{X:d*g,Y:x*u,Z:B*l};function y($){const L=$*$*$,R=Math.pow(6/29,3);return L>R?L:3*Math.pow(6/29,2)*($-4/29)}}function T(t){return je(me(t))}function we(t){return fe(ve(t))}function te(t,n){const a=t.L-n.L,i=t.a-n.a,o=t.b-n.b;return Math.sqrt(a*a+i*i+o*o)}function oe(t,n){return Math.random()*(n-t)+t}function E(t,n){return Math.floor(Math.random()*(n-t+1))+t}function S({r:t,g:n,b:a}){return`rgb(${t}, ${n}, ${a})`}const se=t=>t.toString(16).padStart(2,"0");function Z({r:t,g:n,b:a}){return`#${se(t)}${se(n)}${se(a)}`}function re(t,n,a){return Math.max(n,Math.min(a,t))}function ye(t,n,a){const i=T(t),o=new Set,r=[];for(let g=0;g<n;g++){let u=0,l=null;for(;u<20&&!l;){u++;const d=oe(0,2*Math.PI),x=oe(-Math.PI/6,Math.PI/6),B=a*Math.sin(x),y=a*Math.cos(x),$=y*Math.cos(d),L=y*Math.sin(d),R={L:i.L+B,a:i.a+$,b:i.b+L};let j=we(R);if([j.r,j.g,j.b].some(X=>X<0||X>255)){a*=.8;continue}const D=`${j.r}-${j.g}-${j.b}`;!o.has(D)&&!(j.r===t.r&&j.g===t.g&&j.b===t.b)&&(o.add(D),l=j)}if(!l){const d={r:re(t.r+E(-30,30),0,255),g:re(t.g+E(-30,30),0,255),b:re(t.b+E(-30,30),0,255)},x=`${d.r}-${d.g}-${d.b}`;o.has(x)||(o.add(x),l=d)}r.push(l)}return r}function ke(){return{r:E(30,255),g:E(30,255),b:E(30,255)}}function W({options:t}){const n=ke(),a=t===9?14:t===6?18:24,o=[...ye(n,t-1,a),n];for(let r=o.length-1;r>0;r--){const g=Math.floor(Math.random()*(r+1));[o[r],o[g]]=[o[g],o[r]]}return{target:n,options:o}}function Se(){const[t,n]=p.useState("Medium"),a=ne[t],[i,o]=p.useState(C.Tiles),[r,g]=p.useState(()=>W(a)),[u,l]=p.useState(0),[d,x]=p.useState(0),[B,y]=p.useState(3),[$,L]=p.useState(()=>Number(localStorage.getItem(F.bestScore))||0),[R,j]=p.useState(()=>Number(localStorage.getItem(F.bestStreak))||0),[D,X]=p.useState(!1),[ae,ie]=p.useState(!1),[h,G]=p.useState(null),[b,z]=p.useState({r:128,g:128,b:128}),K=p.useRef(null),[de,O]=p.useState(!1);p.useEffect(()=>{g(W(a)),G(null),z({r:128,g:128,b:128})},[t]),p.useEffect(()=>{u>$&&(L(u),localStorage.setItem(F.bestScore,String(u)))},[u]),p.useEffect(()=>{d>R&&(j(d),localStorage.setItem(F.bestStreak,String(d)))},[d]);function Y(s){g(W(a)),s&&y(3),G(null),i===C.Mixer&&z({r:128,g:128,b:128})}function ce(s){const c=s.r===r.target.r&&s.g===r.target.g&&s.b===r.target.b,m={dr:s.r-r.target.r,dg:s.g-r.target.g,db:s.b-r.target.b},M=te(T(s),T(r.target));if(G({t:new Date().toLocaleTimeString(),target:r.target,picked:s,ok:c,deltaE:M,d:m,mode:i,diff:t}),c){const v=10+d*2;l(w=>w+v),x(w=>w+1),Y(!1)}else l(v=>Math.max(0,v-3)),x(0),y(v=>{const w=v-1;return w<=0?(setTimeout(()=>Y(!0),220),3):w})}function le(){const s=te(T(b),T(r.target))<=a.tolLab,c={dr:b.r-r.target.r,dg:b.g-r.target.g,db:b.b-r.target.b},m=te(T(b),T(r.target));if(G({t:new Date().toLocaleTimeString(),target:r.target,picked:b,ok:s,deltaE:m,d:c,mode:i,diff:t}),s){const M=Math.max(0,Math.round(a.tolLab-m)),v=10+d*2+M;l(w=>w+v),x(w=>w+1),Y(!1)}else l(M=>Math.max(0,M-3)),x(0),y(M=>{const v=M-1;return v<=0?(setTimeout(()=>Y(!0),220),3):v})}function xe(){l(0),x(0),y(3),G(null),g(W(a)),z({r:128,g:128,b:128})}function pe({r:s,g:c,b:m}){return[{k:"R",v:s},{k:"G",v:c},{k:"B",v:m}].sort((v,w)=>w.v-v.v)[0].k}function ge({r:s,g:c,b:m}){return s>m+25?"Warm":m>s+25?"Cool":"Neutral"}function ue(){if(!K.current)return;const s=K.current.outerHTML,c=document.createElement("iframe");c.style.position="fixed",c.style.right="0",c.style.bottom="0",c.style.width="0",c.style.height="0",c.style.border="0",document.body.appendChild(c);const m=c.contentDocument||c.contentWindow.document;m.open(),m.write(`<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<title>Scorecard</title>
<style>
  @page { margin: 0; }
  html, body { margin:0; padding:0; background:#fff; }
  .print-root { width:100vw; min-height:100vh; display:grid; place-items:center; }
  .card { width: 660px; border:1px solid #ddd; padding:16px; font:14px/1.45 system-ui, -apple-system, Segoe UI, Roboto, Arial; }
  .row { display:grid; grid-template-columns: 1fr 1fr; gap:10px; }
  .sw { display:grid; grid-template-columns: 64px 1fr; gap:10px; align-items:center; }
  .chip { display:inline-block; padding:3px 8px; border:1px solid #ccc; border-radius:999px; }
  .muted { color:#666; font-size:12px; }
  .box { width:64px; height:40px; border:1px solid #aaa; }
</style>
</head>
<body>
  <div class="print-root">${s}</div>
  <script>window.onload = () => { window.focus(); window.print(); setTimeout(()=>window.close(), 300); };<\/script>
</body>
</html>`),m.close()}const he=Z(r.target),V=D;return e.jsxs(N.Wrapper,{children:[e.jsxs(N.Header,{children:[e.jsx("div",{className:"title",children:"RGB Color Guesser"}),e.jsxs("div",{className:"controls",children:[e.jsx("select",{value:t,onChange:s=>n(s.target.value),"aria-label":"Difficulty",children:Object.keys(ne).map(s=>e.jsx("option",{value:s,children:s},s))}),e.jsxs("div",{className:"seg",children:[e.jsx("button",{className:i===C.Tiles?"active":"",onClick:()=>o(C.Tiles),children:"Tiles"}),e.jsx("button",{className:i===C.Mixer?"active":"",onClick:()=>o(C.Mixer),children:"Mixer"})]}),e.jsxs("label",{className:"toggle",children:[e.jsx("input",{type:"checkbox",checked:D,onChange:s=>X(s.target.checked)}),e.jsx("span",{children:"Show numbers (learning)"})]}),e.jsxs("label",{className:"toggle",children:[e.jsx("input",{type:"checkbox",checked:ae,onChange:s=>ie(s.target.checked)}),e.jsx("span",{children:"Hints"})]}),e.jsx("button",{onClick:()=>g(W(a)),children:"New Round"}),e.jsx("button",{onClick:()=>O(!0),children:"Reset"}),e.jsx("button",{onClick:ue,children:"Print Scorecard"})]})]}),e.jsxs(N.Stats,{children:[e.jsxs("div",{className:"chip",children:["Score: ",e.jsx("b",{children:u})]}),e.jsxs("div",{className:"chip",children:["Streak: ",e.jsx("b",{children:d})]}),e.jsxs("div",{className:"chip",children:["Lives: ",e.jsx("b",{children:B})]}),e.jsxs("div",{className:"chip ghost",children:["Best Score: ",e.jsx("b",{children:$})]}),e.jsxs("div",{className:"chip ghost",children:["Best Streak: ",e.jsx("b",{children:R})]})]}),e.jsxs(N.Stage,{children:[e.jsxs(N.TargetCard,{children:[e.jsxs("div",{className:"top",children:[e.jsx("div",{className:"swatch",style:{background:S(r.target)}}),e.jsxs("div",{className:"vals",children:[V&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"rgb",children:S(r.target)}),e.jsx("div",{className:"hex",children:he})]}),ae&&e.jsxs("div",{className:"hint",children:[e.jsx("span",{className:"muted",children:"Dominant:"})," ",e.jsx("b",{children:pe(r.target)}),"  ",e.jsx("span",{className:"muted",children:"Tone:"})," ",e.jsx("b",{children:ge(r.target)})]})]})]}),e.jsx("div",{className:"note muted",children:"Guess the color. Numbers stay hidden unless you enable “Show numbers” or after you answer."})]}),i===C.Tiles?e.jsx(N.Options,{$cols:(a.options<=3,3),children:r.options.map((s,c)=>e.jsxs("button",{onClick:()=>ce(s),children:[e.jsx("span",{className:"box",style:{background:S(s)}}),V&&e.jsx("span",{className:"code",children:S(s)})]},`${s.r}-${s.g}-${s.b}-${c}`))}):e.jsxs(N.Mixer,{children:[e.jsxs("div",{className:"mixRow",children:[e.jsx("div",{className:"mixSwatch",style:{background:S(b)}}),e.jsx("div",{className:"mixVals",children:e.jsxs("div",{children:[S(b)," ",V&&e.jsxs("span",{className:"muted",children:["(",Z(b),")"]})]})})]}),e.jsxs("div",{className:"sliders",children:[e.jsxs("label",{children:["R ",e.jsx("input",{type:"range",min:"0",max:"255",value:b.r,onChange:s=>z({...b,r:Number(s.target.value)})})]}),e.jsxs("label",{children:["G ",e.jsx("input",{type:"range",min:"0",max:"255",value:b.g,onChange:s=>z({...b,g:Number(s.target.value)})})]}),e.jsxs("label",{children:["B ",e.jsx("input",{type:"range",min:"0",max:"255",value:b.b,onChange:s=>z({...b,b:Number(s.target.value)})})]})]}),e.jsx("div",{className:"act",children:e.jsx("button",{onClick:le,children:"Check"})}),e.jsxs("div",{className:"muted tiny",children:["Success tolerance (ΔE, Lab): ≤ ",a.tolLab,"."]})]}),h&&e.jsx(N.Reveal,{ref:K,children:e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"top",children:[e.jsxs("h3",{className:"title",children:["Result — ",h.ok?"Correct":"Wrong"]}),e.jsx("div",{className:`pill ${h.ok?"ok":"bad"}`,children:h.ok?"Correct":"Wrong"})]}),e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"sw",children:[e.jsx("div",{className:"box",style:{background:S(h.target)}}),e.jsxs("div",{children:[e.jsx("div",{children:e.jsx("b",{children:"Target"})}),e.jsxs("div",{className:"muted",children:[S(h.target),"  •  ",Z(h.target)]})]})]}),e.jsxs("div",{className:"sw",children:[e.jsx("div",{className:"box",style:{background:S(h.picked)}}),e.jsxs("div",{children:[e.jsx("div",{children:e.jsx("b",{children:"Picked"})}),e.jsxs("div",{className:"muted",children:[S(h.picked),"  •  ",Z(h.picked)]})]})]})]}),e.jsxs("div",{className:"row mt",children:[e.jsxs("div",{children:[e.jsx("b",{children:"Deltas"}),e.jsxs("div",{className:"muted",children:["ΔR ",h.d.dr,", ΔG ",h.d.dg,", ΔB ",h.d.db]})]}),e.jsxs("div",{children:[e.jsx("b",{children:"ΔE (Lab)"}),e.jsx("div",{className:"muted",children:Math.round(h.deltaE)})]})]}),e.jsxs("div",{className:"row mt",children:[e.jsxs("div",{className:"muted",children:["Mode: ",h.mode]}),e.jsxs("div",{className:"muted",children:["Difficulty: ",h.diff," • ",new Date().toLocaleString()]})]})]})})]}),de&&e.jsx(N.ModalBackdrop,{onClick:()=>O(!1),children:e.jsxs(N.ModalCard,{onClick:s=>s.stopPropagation(),children:[e.jsx("div",{className:"title",children:"Reset progress?"}),e.jsx("div",{className:"msg",children:"This will clear score, streak, lives, and the last result."}),e.jsxs("div",{className:"row",children:[e.jsx("button",{className:"ghost",onClick:()=>O(!1),children:"Cancel"}),e.jsx("button",{className:"danger",onClick:()=>{xe(),O(!1)},children:"Yes, Reset"})]})]})})]})}export{Se as default};
