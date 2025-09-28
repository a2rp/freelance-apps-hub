import{d as $,r as m,j as t}from"./index-DkkjpMCv.js";const N="var(--card, #111)",C="var(--text, #e9e9e9)",R="var(--muted, #b7b7b7)",j="var(--border, #222)",T="var(--radius, 16px)",A="var(--shadow, 0 8px 30px rgba(0,0,0,.25))",v={Wrapper:$.section`
        max-width: var(--maxw, 1100px);
        margin: 0 auto;
        padding: 24px;

        .header {
            margin-bottom: 16px;
            h2 {
                margin: 0 0 6px 0;
                color: ${C};
                font-weight: 600;
            }
            .sub {
                margin: 0;
                color: ${R};
            }
        }
    `,Grid:$.div`
        display: grid;
        grid-template-columns: 360px 1fr;
        gap: 16px;

        @media (max-width: 900px) {
            grid-template-columns: 1fr;
        }
    `,Preview:$.div`
        background: #222;
        border: 1px solid ${j};
        border-radius: ${T};
        box-shadow: ${A};
        height: 260px;
        position: relative;

        .chip {
            position: absolute;
            right: 10px;
            bottom: 10px;
            background: ${N};
            border: 1px solid ${j};
            padding: 6px 10px;
            border-radius: 999px;
            color: ${C};
            font-size: 13px;
            opacity: 0.9;
        }
    `,Fields:$.div`
        background: ${N};
        border: 1px solid ${j};
        border-radius: ${T};
        box-shadow: ${A};
        padding: 16px;

        label {
            display: block;
            margin-bottom: 12px;
        }
        span {
            display: block;
            font-size: 12px;
            color: ${R};
            margin-bottom: 6px;
        }
        input[type="text"] {
            width: 100%;
            background: transparent;
            border: 1px solid ${j};
            border-radius: 10px;
            padding: 10px 12px;
            color: ${C};
            outline: none;
        }
        input[type="color"] {
            width: 48px;
            height: 36px;
            background: transparent;
            border: 1px solid ${j};
            border-radius: 10px;
            padding: 4px;
            cursor: pointer;
        }
        .row.two {
            display: grid;
            grid-template-columns: 140px 1fr;
            gap: 12px;
            align-items: end;
            margin-bottom: 12px;
        }
        .with-btn {
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 8px;
            align-items: center;
            position: relative; /* for the copied chip */
        }
        button {
            border: 1px solid ${j};
            background: #1a1a1a;
            color: ${C};
            border-radius: 10px;
            height: 38px;
            padding: 0 12px;
            cursor: pointer;
        }
        .copied {
            position: absolute;
            right: 0;
            top: calc(100% + 4px);
            background: #1a1a1a;
            border: 1px solid ${j};
            color: ${C};
            border-radius: 999px;
            padding: 2px 10px;
            font-size: 12px;
            opacity: 0;
            pointer-events: none;
            transform: translateY(-4px);
            transition: opacity 0.18s ease, transform 0.18s ease;
        }
        .copied.show {
            opacity: 0.95;
            transform: translateY(0);
        }
        .error {
            margin: 6px 0 0 0;
            color: #ef4444;
            font-size: 13px;
        }
    `},f=(o,e,s)=>Math.min(s,Math.max(e,o)),X=({r:o,g:e,b:s})=>"#"+[o,e,s].map(n=>f(Math.round(n),0,255).toString(16).padStart(2,"0")).join("").toUpperCase(),k=o=>{if(!o)return null;let e=o.trim().replace(/^#/,"");if(e.length===3&&(e=e.split("").map(n=>n+n).join("")),!/^[0-9a-fA-F]{6}$/.test(e))return null;const s=parseInt(e,16);return{r:s>>16&255,g:s>>8&255,b:s&255}},Y=({r:o,g:e,b:s})=>{let n=o/255,a=e/255,c=s/255;const i=Math.max(n,a,c),d=Math.min(n,a,c);let l=0,b=0;const g=(i+d)/2;if(i!==d){const x=i-d;switch(b=g>.5?x/(2-i-d):x/(i+d),i){case n:l=(a-c)/x+(a<c?6:0);break;case a:l=(c-n)/x+2;break;case c:l=(n-a)/x+4;break}l*=60}return{h:Math.round(l),s:Math.round(b*100),l:Math.round(g*100)}},E=({h:o,s:e,l:s})=>{const n=(o%360+360)%360,a=f(e,0,100)/100,c=f(s,0,100)/100;if(a===0){const p=Math.round(c*255);return{r:p,g:p,b:p}}const i=c<.5?c*(1+a):c+a-c*a,d=2*c-i,l=(p,y,u)=>(u<0&&(u+=1),u>1&&(u-=1),u<1/6?p+(y-p)*6*u:u<1/2?y:u<2/3?p+(y-p)*(2/3-u)*6:p),b=Math.round(l(d,i,n/360+1/3)*255),g=Math.round(l(d,i,n/360)*255),x=Math.round(l(d,i,n/360-1/3)*255);return{r:b,g,b:x}},B=o=>{if(!o)return null;const e=o.trim(),s=e.match(/^rgb\(\s*([\d]{1,3})\s*,\s*([\d]{1,3})\s*,\s*([\d]{1,3})\s*\)$/i),n=e.match(/^(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})$/),a=s||n;if(!a)return null;const c=+a[1],i=+a[2],d=+a[3];return[c,i,d].some(l=>isNaN(l)||l<0||l>255)?null:{r:c,g:i,b:d}},H=o=>{if(!o)return null;const e=o.trim(),s=e.match(/^hsl\(\s*([+-]?\d+)\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*\)$/i),n=e.match(/^([+-]?\d+)\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%$/),a=s||n;if(!a)return null;const c=+a[1],i=+a[2],d=+a[3];return[i,d].some(l=>isNaN(l)||l<0||l>100)?null:{h:c,s:i,l:d}},F=o=>{if(!o)return null;const e=document.createElement("div");e.style.color="",e.style.color=o.trim(),document.body.appendChild(e);const s=getComputedStyle(e).color;document.body.removeChild(e);const n=s.match(/^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i);return n?{r:+n[1],g:+n[2],b:+n[3]}:null},G=({r:o,g:e,b:s})=>`rgb(${f(o,0,255)}, ${f(e,0,255)}, ${f(s,0,255)})`,L=({h:o,s:e,l:s})=>`hsl(${Math.round(o)}, ${f(e,0,100)}%, ${f(s,0,100)}%)`;function J(){const[o,e]=m.useState("#22c55e"),[s,n]=m.useState("#22C55E"),[a,c]=m.useState("rgb(34, 197, 94)"),[i,d]=m.useState("hsl(146, 64%, 45%)"),[l,b]=m.useState(""),[g,x]=m.useState(""),p=m.useRef(null);m.useEffect(()=>()=>{p.current&&clearTimeout(p.current)},[]);const y=r=>{x(r),p.current&&clearTimeout(p.current),p.current=setTimeout(()=>x(""),1200)},u=r=>{if(!r){b("Invalid color");return}b("");const h=X(r),S=G(r),W=L(Y(r));n(h),c(S),d(W)};m.useMemo(()=>{const r=F(o)||k(s)||B(a)||H(i)&&E(H(i));r&&u(r)},[]);const z=r=>{e(r),u(F(r))},M=r=>{const h=r.trim().startsWith("#")?r.trim():`#${r.trim()}`;n(h.toUpperCase()),u(k(h)),e(h.toUpperCase())},I=r=>{c(r);const h=B(r);h&&e(G(h)),u(h)},P=r=>{d(r);const h=H(r);if(h){const S=E(h);e(L(h)),u(S)}else b("Invalid color")},w=async(r,h)=>{try{await navigator.clipboard.writeText(h)}catch{}y(r)},U=s&&k(s)?s:"#000000";return t.jsxs(v.Wrapper,{children:[t.jsxs("header",{className:"header",children:[t.jsx("h2",{children:"HTML Color Converter"}),t.jsxs("p",{className:"sub",children:["Convert between HEX, RGB, and HSL. Accepts any CSS color (e.g., ",t.jsx("i",{children:"tomato"}),", ",t.jsx("i",{children:"#aabbcc"}),", ",t.jsx("i",{children:"rgb(0,0,0)"}),", ",t.jsx("i",{children:"hsl(210, 50%, 50%)"}),")."]})]}),t.jsxs(v.Grid,{children:[t.jsx(v.Preview,{style:{background:a},children:t.jsx("div",{className:"chip",children:s})}),t.jsxs(v.Fields,{children:[t.jsxs("label",{children:[t.jsx("span",{children:"Any CSS Color"}),t.jsx("input",{type:"text",value:o,onChange:r=>z(r.target.value),placeholder:"tomato | #22c55e | rgb(34,197,94) | hsl(146,64%,45%)"})]}),t.jsxs("div",{className:"row two",children:[t.jsxs("label",{children:[t.jsx("span",{children:"Pick"}),t.jsx("input",{type:"color",value:U,onChange:r=>M(r.target.value)})]}),t.jsxs("label",{children:[t.jsx("span",{children:"HEX"}),t.jsxs("div",{className:"with-btn",children:[t.jsx("input",{type:"text",value:s,onChange:r=>M(r.target.value),placeholder:"#AABBCC"}),t.jsx("button",{type:"button",onClick:()=>w("hex",s),children:"Copy"}),t.jsx("span",{role:"status","aria-live":"polite",className:`copied ${g==="hex"?"show":""}`,children:"Copied"})]})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:"RGB"}),t.jsxs("div",{className:"with-btn",children:[t.jsx("input",{type:"text",value:a,onChange:r=>I(r.target.value),placeholder:"rgb(0, 0, 0) or 0,0,0"}),t.jsx("button",{type:"button",onClick:()=>w("rgb",a),children:"Copy"}),t.jsx("span",{role:"status","aria-live":"polite",className:`copied ${g==="rgb"?"show":""}`,children:"Copied"})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:"HSL"}),t.jsxs("div",{className:"with-btn",children:[t.jsx("input",{type:"text",value:i,onChange:r=>P(r.target.value),placeholder:"hsl(210, 50%, 50%) or 210,50%,50%"}),t.jsx("button",{type:"button",onClick:()=>w("hsl",i),children:"Copy"}),t.jsx("span",{role:"status","aria-live":"polite",className:`copied ${g==="hsl"?"show":""}`,children:"Copied"})]})]}),l?t.jsx("p",{className:"error",children:l}):null]})]})]})}export{J as default};
