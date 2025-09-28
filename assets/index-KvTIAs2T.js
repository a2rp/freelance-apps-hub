import{d,r as c,j as e}from"./index-DH_rh4tU.js";const y="var(--bg, #0b0b0b)",v="var(--card, #111)",h="var(--text, #e9e9e9)",p="var(--muted, #a8a8a8)",u="var(--border, #222)",g="var(--accent, #22c55e)",D="var(--danger, #ef4444)",E="var(--info, #38bdf8)",N="var(--radius, 16px)",M="var(--shadow, 0 8px 30px rgba(0,0,0,.25))",z=d.div`
    color: ${h};
    max-width: 820px;
    margin: 0 auto;
    padding: 24px 16px;

    .head {
        margin-bottom: 16px;
        h2 {
            margin: 0 0 6px;
            font-weight: 600;
        }
        .sub {
            margin: 0;
            color: ${p};
            font-size: 0.95rem;
        }
    }
`,P=d.section`
    background: ${v};
    border: 1px solid ${u};
    border-radius: ${N};
    box-shadow: ${M};
    padding: 16px;
    margin-bottom: 20px;

    label {
        display: block;
        font-size: 0.95rem;
        color: ${p};
        margin-bottom: 8px;
    }
`,R=d.input`
    width: 100%;
    background: ${y};
    color: ${h};
    border: 1px solid ${u};
    border-radius: 12px;
    padding: 12px 14px;
    font-size: 1.05rem;
    outline: none;
    transition: border-color 0.15s ease;

    &:focus {
        border-color: ${g};
    }
`,S=d.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 12px;

    &.statusRow .len {
        margin-left: auto;
        color: ${p};
        font-size: 0.9rem;
    }

    &.actions {
        justify-content: flex-end;
        gap: 8px;

        button {
            background: transparent;
            color: ${h};
            border: 1px solid ${u};
            border-radius: 10px;
            padding: 8px 12px;
            font-size: 0.95rem;
            cursor: pointer;
            transition: border-color 0.15s ease, transform 0.02s ease;

            &:hover {
                border-color: ${g};
            }
            &:active {
                transform: translateY(1px);
            }
            &:disabled {
                opacity: 0.5;
                cursor: not-allowed;
            }
        }
    }
`,V=d.span`
    display: inline-block;
    padding: 6px 10px;
    border-radius: 999px;
    font-size: 0.85rem;
    border: 1px solid ${u};
    background: ${({$tone:r})=>r==="ok"?"rgba(34,197,94,.15)":r==="bad"?"rgba(239,68,68,.15)":r==="info"?"rgba(56,189,248,.15)":"transparent"};
    color: ${({$tone:r})=>r==="ok"?g:r==="bad"?D:r==="info"?E:p};
`,L=d.section`
    h4 {
        margin: 0 0 10px;
        font-weight: 600;
    }
    .examples {
        list-style: none;
        padding: 0;
        margin: 0 0 8px;
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
    }
    .examples li button {
        background: ${v};
        border: 1px solid ${u};
        color: ${h};
        border-radius: 10px;
        padding: 6px 10px;
        cursor: pointer;
        font-size: 0.9rem;
    }
    .examples li button:hover {
        border-color: ${g};
    }
    .note {
        color: ${p};
        margin: 6px 0 0;
        font-size: 0.92rem;
    }
`,s={Wrapper:z,Card:P,Input:R,Row:S,Pill:V,Section:L};function A(r){const a=r.replace(/\D/g,"").split("").reverse().map(Number);let t=0;for(let o=0;o<a.length;o++){let i=a[o];o%2===1&&(i*=2,i>9&&(i-=9)),t+=i}return t%10===0&&a.length>=12}function m(r){return/^4\d{0,}/.test(r)?"Visa":/^(5[1-5]|2(2[2-9]\d|[3-6]\d{2}|7([01]\d|20)))\d*/.test(r)?"Mastercard":/^3[47]\d*/.test(r)?"American Express":/^(6011|65|64[4-9])\d*/.test(r)?"Discover":/^35(2[89]|[3-8]\d)\d*/.test(r)?"JCB":/^(50|56|57|58|6[0-9])\d*/.test(r)?"Maestro":"Unknown"}function l(r,a){const t=r.replace(/\D/g,"").slice(0,19);return a==="American Express"?t.replace(/^(\d{0,4})(\d{0,6})(\d{0,5}).*/,(o,i,x,f)=>[i,x,f].filter(Boolean).join(" ")).trim():t.replace(/(\d{4})(?=\d)/g,"$1 ").trim()}const B=[{brand:"Visa",num:"4111111111111111"},{brand:"Mastercard",num:"5555555555554444"},{brand:"American Express",num:"378282246310005"},{brand:"Discover",num:"6011111111111117"}],T=()=>{const[r,a]=c.useState(""),t=c.useMemo(()=>r.replace(/\D/g,""),[r]),o=c.useMemo(()=>m(t),[t]),i=c.useMemo(()=>l(t,o),[t,o]),x=c.useMemo(()=>t.length?A(t):!1,[t]),f=n=>{const b=n.target.value.replace(/\D/g,"");a(l(b,m(b)))},w=n=>{n.preventDefault();const b=(n.clipboardData||window.clipboardData).getData("text"),j=String(b||"").replace(/\D/g,"");a(l(j,m(j)))},$=n=>a(l(n,m(n))),C=()=>a(""),k=async()=>{try{await navigator.clipboard.writeText(t)}catch{}};return e.jsxs(s.Wrapper,{children:[e.jsxs("header",{className:"head",children:[e.jsx("h2",{children:"Credit Card Validator"}),e.jsx("p",{className:"sub",children:"Client-side Luhn check + basic brand detection. Nothing is sent anywhere."})]}),e.jsxs(s.Card,{children:[e.jsx("label",{htmlFor:"cc",children:"Card number"}),e.jsx(s.Input,{id:"cc",inputMode:"numeric",autoComplete:"off",placeholder:"Enter card number",value:i,onChange:f,onPaste:w,"aria-label":"Card number"}),e.jsxs(s.Row,{className:"statusRow",children:[e.jsx(s.Pill,{$tone:o==="Unknown"?"muted":"info",children:o}),t.length>0?e.jsx(s.Pill,{$tone:x?"ok":"bad",children:x?"✓ Passes Luhn":"✗ Fails Luhn"}):e.jsx(s.Pill,{$tone:"muted",children:"—"}),!!t&&e.jsxs("span",{className:"len",children:[t.length," digits"]})]}),e.jsxs(s.Row,{className:"actions",children:[e.jsx("button",{type:"button",onClick:C,disabled:!t,children:"Clear"}),e.jsx("button",{type:"button",onClick:k,disabled:!t,children:"Copy number"})]})]}),e.jsxs(s.Section,{children:[e.jsx("h4",{children:"Examples (for testing)"}),e.jsx("ul",{className:"examples",children:B.map(n=>e.jsx("li",{children:e.jsxs("button",{type:"button",onClick:()=>$(n.num),children:[n.brand,": ",l(n.num,n.brand)]})},n.num))}),e.jsxs("p",{className:"note",children:["Tip: This checks structure only (Luhn + prefix). It does ",e.jsx("b",{children:"not"})," verify if a card is active."]})]})]})};export{T as default};
