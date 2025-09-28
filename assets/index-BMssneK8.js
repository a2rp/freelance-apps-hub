import{f as _,d as a,r as o,j as e}from"./index-BqroQIHt.js";const I="var(--card, #111)",p="var(--text, #e9e9e9)",g="var(--muted, #b7b7b7)",i="var(--border, #222)",c="var(--accent, #22c55e)",E="var(--radius, 16px)",q="var(--shadow, 0 8px 30px rgba(0,0,0,.25))",B="10px",s="16px",R="24px",H=_`
  @media print {
    body * { visibility: hidden !important; }
    .print-area, .print-area * { visibility: visible !important; }
    .print-area {
      position: absolute;
      inset: 0;
      width: 100%;
      margin: 0 !important;
      border-radius: 0 !important;
      box-shadow: none !important;
    }
  }
`,V=a.div`
    width: 100%;
    display: grid;
    place-items: start center;
    padding: 15px;
`,X=a.section`
    width: min(920px, 100%);
    background: ${I};
    color: ${p};
    border: 1px solid ${i};
    border-radius: ${E};
    box-shadow: ${q};
    padding: ${R};
    margin: 0 auto;

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: ${s};
        margin-bottom: ${s};

        h2 {
            margin: 0;
            font-weight: 600;
            letter-spacing: 0.2px;
        }
    }

    @media print {
        .no-print {
            display: none !important;
        }
    }
`,Z=a.div`
    display: inline-flex;
    background: #0d0d0d;
    border: 1px solid ${i};
    border-radius: 999px;
    padding: 4px;

    button {
        appearance: none;
        border: 0;
        background: transparent;
        color: ${g};
        padding: 6px 12px;
        border-radius: 999px;
        cursor: pointer;
        font-weight: 600;
        transition: transform 0.06s ease;

        &.active {
            background: ${c};
            color: #08150d;
        }
        &:active {
            transform: translateY(1px);
        }
    }
`,ee=a.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: ${s};
    margin-top: ${s};

    @media (max-width: 720px) {
        grid-template-columns: 1fr;
    }
`,te=a.label`
    display: block;

    > label {
        display: block;
        font-size: 14px;
        color: ${g};
        margin-bottom: 6px;
    }

    input,
    select {
        width: 100%;
        background: #0d0d0d;
        color: ${p};
        border: 1px solid ${i};
        border-radius: 10px;
        padding: 10px 12px;
        outline: none;
    }

    .row {
        display: grid;
        grid-template-columns: 1fr 120px;
        gap: 8px;
    }
`,ne=a.div`
    margin-top: 8px;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;

    button {
        border: 1px solid ${i};
        background: transparent;
        color: ${p};
        padding: 6px 10px;
        border-radius: 999px;
        cursor: pointer;

        &:hover {
            border-color: ${c};
        }
        &:active {
            transform: translateY(1px);
        }
    }
`,re=a.div`
    margin-top: ${R};
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: ${s};

    @media (max-width: 720px) {
        grid-template-columns: 1fr;
    }

    > div {
        border: 1px dashed ${i};
        border-radius: 12px;
        padding: ${s};
        background: #0d0d0d;

        span {
            display: block;
            color: ${g};
            font-size: 13px;
            margin-bottom: 6px;
        }
        strong {
            font-size: 22px;
            letter-spacing: 0.2px;
        }
    }
`,oe=a.div`
    display: flex;
    gap: 10px;
    margin-top: ${s};

    button {
        border: 1px solid ${i};
        background: transparent;
        color: ${p};
        padding: 8px 12px;
        border-radius: 10px;
        cursor: pointer;

        &:hover {
            border-color: ${c};
        }
        &:active {
            transform: translateY(1px);
        }
    }
`,ae=a.div`
    margin-top: ${s};
    color: ${g};

    pre {
        white-space: pre-wrap;
        font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
        font-size: 12.5px;
        background: #0d0d0d;
        border: 1px solid ${i};
        border-radius: 10px;
        padding: 12px;
    }
`,ie=a.div`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    display: grid;
    place-items: center;
    z-index: 1000;

    .modal {
        width: min(420px, 92vw);
        background: ${I};
        color: ${p};
        border: 1px solid ${i};
        border-radius: ${E};
        box-shadow: ${q};
        padding: ${R};

        h3 {
            margin: 0 0 ${B};
            font-weight: 600;
        }
        p {
            margin: 0 0 ${s};
            color: ${g};
        }

        .actions {
            display: flex;
            gap: 10px;
            justify-content: flex-end;

            button {
                border: 1px solid ${i};
                background: transparent;
                color: ${p};
                padding: 8px 12px;
                border-radius: 10px;
                cursor: pointer;

                &:hover {
                    border-color: ${c};
                }
                &.danger {
                    border-color: ${c};
                    background: ${c};
                    color: #08150d;
                }
            }
        }
    }
`,n={PrintOnly:H,Wrapper:V,Card:X,ModeSwitch:Z,Grid:ee,Field:te,Chips:ne,Result:re,Actions:oe,Note:ae,ConfirmOverlay:ie},k="interestRateCalculator.form.v1",se={annual:1,semiannual:2,quarterly:4,monthly:12,daily:365},M=r=>isFinite(r)?r.toLocaleString("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:2}):"—";function ce(){const[r,f]=o.useState("compound"),[u,y]=o.useState(1e5),[m,v]=o.useState(10),[l,j]=o.useState(1),[x,$]=o.useState("years"),[h,N]=o.useState("monthly"),[O,C]=o.useState(!1);o.useEffect(()=>{try{const t=JSON.parse(localStorage.getItem(k)||"{}");t&&typeof t=="object"&&(f(t.mode??"compound"),y(t.principal??1e5),v(t.rate??10),j(t.time??1),$(t.timeUnit??"years"),N(t.freq??"monthly"))}catch{}},[]),o.useEffect(()=>{localStorage.setItem(k,JSON.stringify({mode:r,principal:u,rate:m,time:l,timeUnit:x,freq:h}))},[r,u,m,l,x,h]);const b=o.useMemo(()=>x==="months"?Number(l||0)/12:Number(l||0),[l,x]),T=o.useMemo(()=>{const t=Number(u||0),d=Number(m||0)/100;if(!isFinite(t)||!isFinite(d)||!isFinite(b)||t<=0||d<0||b<0)return{interest:NaN,amount:NaN,effAPR:NaN};if(r==="simple"){const A=t*d*b,Q=t+A;return{interest:A,amount:Q,effAPR:d}}const w=se[h]??1,F=t*Math.pow(1+d/w,w*b),W=F-t,K=Math.pow(1+d/w,w)-1;return{interest:W,amount:F,effAPR:K}},[u,m,b,r,h]),z=[1e4,5e4,1e5,5e5],Y=[6,7.5,8.5,10,12,14],L=[{label:"6m",val:6,unit:"months"},{label:"1y",val:1,unit:"years"},{label:"2y",val:2,unit:"years"},{label:"3y",val:3,unit:"years"},{label:"5y",val:5,unit:"years"}],S=t=>isFinite(t)?Math.round(t*100)/100:NaN,{interest:U,amount:D,effAPR:P}=T,G=()=>C(!0),J=()=>{f("compound"),y(1e5),v(10),j(1),$("years"),N("monthly"),localStorage.removeItem(k),C(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(n.PrintOnly,{}),e.jsx(n.Wrapper,{children:e.jsxs(n.Card,{className:"print-area",children:[e.jsxs("header",{children:[e.jsx("h2",{children:"Interest Rate Calculator"}),e.jsxs(n.ModeSwitch,{children:[e.jsx("button",{type:"button",className:r==="simple"?"active":"",onClick:()=>f("simple"),"aria-pressed":r==="simple",children:"Simple"}),e.jsx("button",{type:"button",className:r==="compound"?"active":"",onClick:()=>f("compound"),"aria-pressed":r==="compound",children:"Compound"})]})]}),e.jsxs(n.Grid,{children:[e.jsxs(n.Field,{children:[e.jsx("label",{children:"Principal (₹)"}),e.jsx("input",{inputMode:"decimal",value:u,onChange:t=>y(t.target.value.replace(/[^\d.]/g,"")),placeholder:"e.g., 100000"}),e.jsx(n.Chips,{children:z.map(t=>e.jsx("button",{type:"button",onClick:()=>y(t),children:t.toLocaleString("en-IN")},t))})]}),e.jsxs(n.Field,{children:[e.jsx("label",{children:"Rate (% p.a.)"}),e.jsx("input",{inputMode:"decimal",value:m,onChange:t=>v(t.target.value.replace(/[^\d.]/g,"")),placeholder:"e.g., 10"}),e.jsx(n.Chips,{children:Y.map(t=>e.jsxs("button",{type:"button",onClick:()=>v(t),children:[t,"%"]},t))})]}),e.jsxs(n.Field,{children:[e.jsx("label",{children:"Time"}),e.jsxs("div",{className:"row",children:[e.jsx("input",{inputMode:"decimal",value:l,onChange:t=>j(t.target.value.replace(/[^\d.]/g,"")),placeholder:"e.g., 1"}),e.jsxs("select",{value:x,onChange:t=>$(t.target.value),children:[e.jsx("option",{value:"years",children:"years"}),e.jsx("option",{value:"months",children:"months"})]})]}),e.jsx(n.Chips,{children:L.map(t=>e.jsx("button",{type:"button",onClick:()=>{j(t.val),$(t.unit)},children:t.label},t.label))})]}),r==="compound"&&e.jsxs(n.Field,{children:[e.jsx("label",{children:"Compounding"}),e.jsxs("select",{value:h,onChange:t=>N(t.target.value),children:[e.jsx("option",{value:"annual",children:"Annual (1×)"}),e.jsx("option",{value:"semiannual",children:"Semiannual (2×)"}),e.jsx("option",{value:"quarterly",children:"Quarterly (4×)"}),e.jsx("option",{value:"monthly",children:"Monthly (12×)"}),e.jsx("option",{value:"daily",children:"Daily (365×)"})]})]})]}),e.jsxs(n.Result,{children:[e.jsxs("div",{children:[e.jsx("span",{children:"Interest"}),e.jsx("strong",{children:M(S(U))})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Total Amount"}),e.jsx("strong",{children:M(S(D))})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Effective Annual Rate"}),e.jsx("strong",{children:isFinite(P)?`${(P*100).toFixed(2)}%`:"—"})]})]}),e.jsxs(n.Actions,{className:"no-print",children:[e.jsx("button",{type:"button",onClick:G,children:"Reset"}),e.jsx("button",{type:"button",onClick:()=>window.print(),children:"Print"})]}),e.jsx(n.Note,{children:e.jsx("pre",{children:`Notes:
- Simple Interest: I = P × r × t
- Compound: A = P × (1 + r/n)^(n×t); I = A − P
- "Effective Annual Rate" is derived from compounding frequency (n).`})}),O&&e.jsx(n.ConfirmOverlay,{className:"no-print",onClick:()=>C(!1),children:e.jsxs("div",{className:"modal",role:"dialog","aria-modal":"true",onClick:t=>t.stopPropagation(),children:[e.jsx("h3",{children:"Reset calculator?"}),e.jsx("p",{children:"This will clear all inputs and remove saved values."}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{type:"button",onClick:()=>C(!1),children:"Cancel"}),e.jsx("button",{type:"button",className:"danger",onClick:J,children:"Reset"})]})]})})]})})]})}export{ce as default};
