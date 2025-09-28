import{d as a,r as l,j as e}from"./index-Zao5beoO.js";const G="var(--card, #111)",u="var(--text, #e9e9e9)",d="var(--muted, #b7b7b7)",h="var(--border, #222)",K="var(--radius, 16px)",T="var(--shadow, 0 8px 30px rgba(0,0,0,0.25))",P="var(--accent, #22c55e)",q="var(--danger, #ef4444)",J="var(--warn, #f59e0b)",W=`
  outline: none;
  box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.35);
`,Q=a.section`
    max-width: 860px;
    margin: 0 auto;
    padding: 24px 16px 48px;
    color: ${u};

    h2 {
        font-size: 26px;
        margin: 0 0 16px;
        letter-spacing: 0.3px;
    }
`,V=a.div`
    background: ${G};
    border: 1px solid ${h};
    border-radius: ${K};
    box-shadow: ${T};
    padding: 16px;
`,X=a.div`
    display: grid;
    grid-template-columns: 180px 1fr;
    align-items: center;
    gap: 12px;
    margin-bottom: 12px;

    .label {
        color: ${d};
        font-size: 14px;
    }

    @media (max-width: 640px) {
        grid-template-columns: 1fr;
        .label {
            margin-bottom: -6px;
        }
    }
`,Z=a.select`
    background: #0d0d0d;
    border: 1px solid ${h};
    color: ${u};
    font-size: 14px;
    padding: 10px 12px;
    border-radius: 12px;
    width: 100%;

    &:focus {
        ${W}
    }
`,ee=a.div`
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    background: #0d0d0d;
    border: 1px solid ${h};
    border-radius: 12px;
    overflow: hidden;

    input {
        border: 0;
        background: transparent;
        color: ${u};
        padding: 12px 12px;
        font-size: 15px;
    }
    input:focus {
        ${W}
    }

    .suffix {
        padding: 10px 12px;
        color: ${d};
        border-left: 1px solid ${h};
        font-size: 13px;
        min-width: 48px;
        text-align: center;
    }
`,te=a.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;

    @media (max-width: 480px) {
        grid-template-columns: 1fr;
    }
`,ne=a.div`
    margin-top: 8px;
    display: flex;
    gap: 10px;
    justify-content: flex-end;

    button {
        border: 1px solid ${h};
        background: #0b0b0b;
        color: ${u};
        padding: 10px 14px;
        font-size: 14px;
        border-radius: 12px;
        cursor: pointer;
        transition: transform 0.05s ease;
    }
    button:hover {
        border-color: ${d};
    }
    button:active {
        transform: translateY(1px);
    }
    .ghost {
        opacity: 0.9;
    }
`,re=a.div`
    background: ${G};
    border: 1px solid ${h};
    border-radius: ${K};
    box-shadow: ${T};
    padding: 16px;
    margin-top: 16px;

    .resultTop {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        margin-bottom: 8px;
    }

    .muted {
        color: ${d};
        font-size: 13px;
    }
    .bmiValue {
        font-size: 36px;
        line-height: 1;
        margin-top: 6px;
    }
`,se=a.span`
    --bg: ${({$tone:r})=>r==="good"?"rgba(34,197,94,.12)":r==="bad"?"rgba(239,68,68,.12)":r==="warn"?"rgba(245,158,11,.12)":"rgba(148,163,184,.10)"};
    --fg: ${({$tone:r})=>r==="good"?P:r==="bad"?q:r==="warn"?J:d};

    background: var(--bg);
    color: var(--fg);
    border: 1px solid rgba(255, 255, 255, 0.06);
    padding: 8px 12px;
    font-size: 13px;
    border-radius: 999px;
    white-space: nowrap;
`,ie=a.div`
    color: ${d};
    font-size: 14px;

    p {
        margin: 8px 0;
    }
    strong {
        color: ${u};
    }

    .fine {
        font-size: 12px;
        color: ${d};
        opacity: 0.9;
    }
`,n={Wrapper:Q,Card:V,Row:X,Select:Z,InputGroup:ee,InputGrid:te,Buttons:ne,ResultCard:re,Badge:se,HelpText:ie},oe=()=>{const[r,S]=l.useState("cm"),[c,k]=l.useState("kg"),[x,v]=l.useState(""),[m,w]=l.useState(""),[b,N]=l.useState(""),[f,y]=l.useState(""),[j,$]=l.useState(""),I=.0254,C=.45359237,U=1/C,B=(t,s)=>(Number(t||0)*12+Number(s||0))*I,L=t=>{const s=t.target.value;if(s!==r){if(s==="cm"){const o=B(m,b)*100;v(o?(Math.round(o*10)/10).toString():"")}else{const o=Number(x||0)/100/I,p=Math.floor(o/12),g=Math.round(o-p*12);w(p?p.toString():""),N(g?g.toString():"")}S(s)}},_=t=>{const s=t.target.value;if(s!==c){if(s==="kg"){const i=Number(j||0)*C;y(i?(Math.round(i*10)/10).toString():"")}else{const i=Number(f||0)*U;$(i?(Math.round(i*10)/10).toString():"")}k(s)}},D=()=>r==="cm"?Number(x||0)/100:B(m,b),O=()=>c==="kg"?Number(f||0):Number(j||0)*C,E=t=>!t||Number.isNaN(t)||!Number.isFinite(t)?{label:"—",tone:"muted"}:t<18.5?{label:"Underweight",tone:"warn"}:t<25?{label:"Normal",tone:"good"}:t<30?{label:"Overweight",tone:"warn"}:{label:"Obesity",tone:"bad"},{bmi:F,cat:H,healthyMinDisp:R,healthyMaxDisp:z,rangeUnitLabel:Y}=l.useMemo(()=>{const t=D(),s=O();let i=0,o=0,p=0;t>0&&s>0&&(i=s/(t*t),o=18.5*(t*t),p=24.9*(t*t));const g=M=>M?c==="kg"?M:M*U:0;return{bmi:i||0,cat:E(i||0),healthyMinDisp:g(o)||0,healthyMaxDisp:g(p)||0,rangeUnitLabel:c==="kg"?"kg":"lb"}},[r,c,x,m,b,f,j]),A=()=>{window.confirm("Clear all BMI inputs?")&&(S("cm"),k("kg"),v(""),w(""),N(""),y(""),$(""))};return e.jsxs(n.Wrapper,{children:[e.jsx("h2",{children:"BMI Calculator"}),e.jsxs(n.Card,{children:[e.jsxs(n.Row,{children:[e.jsx("label",{className:"label",htmlFor:"heightUnitSelect",children:"Height Units"}),e.jsxs(n.Select,{id:"heightUnitSelect",value:r,onChange:L,children:[e.jsx("option",{value:"cm",children:"Centimeters (cm)"}),e.jsx("option",{value:"ftin",children:"Feet/Inches (ft/in)"})]})]}),r==="cm"?e.jsxs(n.Row,{children:[e.jsx("label",{htmlFor:"heightCm",className:"label",children:"Height"}),e.jsxs(n.InputGroup,{children:[e.jsx("input",{id:"heightCm",type:"number",inputMode:"decimal",placeholder:"e.g., 175",value:x,onChange:t=>v(t.target.value),min:"0"}),e.jsx("span",{className:"suffix",children:"cm"})]})]}):e.jsxs(n.Row,{children:[e.jsx("span",{className:"label",children:"Height"}),e.jsxs(n.InputGrid,{children:[e.jsxs(n.InputGroup,{children:[e.jsx("input",{type:"number",inputMode:"numeric",placeholder:"ft",value:m,onChange:t=>w(t.target.value),min:"0"}),e.jsx("span",{className:"suffix",children:"ft"})]}),e.jsxs(n.InputGroup,{children:[e.jsx("input",{type:"number",inputMode:"numeric",placeholder:"in",value:b,onChange:t=>N(t.target.value),min:"0"}),e.jsx("span",{className:"suffix",children:"in"})]})]})]}),e.jsxs(n.Row,{children:[e.jsx("label",{className:"label",htmlFor:"weightUnitSelect",children:"Weight Units"}),e.jsxs(n.Select,{id:"weightUnitSelect",value:c,onChange:_,children:[e.jsx("option",{value:"kg",children:"Kilograms (kg)"}),e.jsx("option",{value:"lb",children:"Pounds (lb)"})]})]}),c==="kg"?e.jsxs(n.Row,{children:[e.jsx("label",{htmlFor:"weightKg",className:"label",children:"Weight"}),e.jsxs(n.InputGroup,{children:[e.jsx("input",{id:"weightKg",type:"number",inputMode:"decimal",placeholder:"e.g., 70",value:f,onChange:t=>y(t.target.value),min:"0"}),e.jsx("span",{className:"suffix",children:"kg"})]})]}):e.jsxs(n.Row,{children:[e.jsx("label",{htmlFor:"weightLb",className:"label",children:"Weight"}),e.jsxs(n.InputGroup,{children:[e.jsx("input",{id:"weightLb",type:"number",inputMode:"decimal",placeholder:"e.g., 154",value:j,onChange:t=>$(t.target.value),min:"0"}),e.jsx("span",{className:"suffix",children:"lb"})]})]}),e.jsx(n.Buttons,{children:e.jsx("button",{type:"button",onClick:A,className:"ghost",children:"Reset"})})]}),e.jsxs(n.ResultCard,{children:[e.jsxs("div",{className:"resultTop",children:[e.jsxs("div",{children:[e.jsx("div",{className:"muted",children:"Your BMI"}),e.jsx("div",{className:"bmiValue",children:F?F.toFixed(1):"—"})]}),e.jsx(n.Badge,{$tone:H.tone,children:H.label})]}),e.jsxs(n.HelpText,{children:[e.jsxs("p",{children:["Healthy BMI range is ",e.jsx("strong",{children:"18.5 – 24.9"}),"."]}),e.jsxs("p",{children:["For your height, a healthy weight is"," ",e.jsxs("strong",{children:[R?R.toFixed(1):"—"," –"," ",z?z.toFixed(1):"—"," ",Y]}),"."]}),e.jsx("p",{className:"fine",children:"* BMI is a general indicator and may not perfectly represent health for athletes, seniors, or people with high muscle mass."})]})]})]})};export{oe as default};
