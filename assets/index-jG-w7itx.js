import{d as o,u as F,r as c,j as e,y as C}from"./index--oNzLrxO.js";const S="var(--bg, #0b0b0b)",R="var(--card, #111)",h="var(--text, #e9e9e9)",d="var(--muted, #b7b7b7)",s="var(--border, #222)",p="var(--accent, #22c55e)",T="var(--radius, 16px)",k="var(--shadow, 0 8px 30px rgba(0,0,0,0.25))",n={Wrapper:o.div`
        max-width: var(--maxw, 1200px);
        margin: 0 auto;
        padding: var(--space-5, 32px) var(--space-4, 24px) var(--space-6, 48px);
        color: ${h};
    `,Header:o.header`
        margin-bottom: var(--space-4, 24px);

        h1 {
            font-size: clamp(22px, 4vw, 30px);
            margin: 0 0 6px;
            line-height: 1.2;
        }
        p {
            color: ${d};
            margin: 0;
        }
    `,Grid:o.div`
        display: grid;
        grid-template-columns: 1fr minmax(360px, 520px);
        gap: var(--space-4, 24px);

        @media (max-width: 960px) {
            grid-template-columns: 1fr;
        }
    `,EditPanel:o.section`
        background: ${R};
        border: 1px solid ${s};
        border-radius: ${T};
        box-shadow: ${k};
        padding: 16px;
    `,Field:o.div`
        display: grid;
        gap: 8px;
        margin-bottom: 14px;

        label {
            color: ${d};
            font-size: 13px;
        }

        input[type="text"],
        input:not([type]) {
            /* allow generic input usage */
        }

        input {
            background: ${S};
            color: ${h};
            border: 1px solid ${s};
            border-radius: 12px;
            padding: 10px 12px;
            outline: none;
            &:focus {
                border-color: ${p};
                box-shadow: 0 0 0 2px
                    color-mix(in srgb, ${p} 32%, transparent);
            }
        }

        .row {
            display: flex;
            gap: 14px;
        }
        .radio {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 10px;
            border: 1px solid ${s};
            border-radius: 12px;
            input {
                accent-color: ${p};
            }
            span {
                font-weight: 600;
            }
        }
    `,itemsHeader:o.div`
        display: grid;
        grid-template-columns: 2fr 1fr 1fr 32px;
        gap: 8px;
        padding: 8px 4px;
        color: ${d};
        font-size: 13px;
        border-bottom: 1px dashed ${s};
        margin-top: 6px;
    `,Items:o.div`
        display: grid;
        gap: 8px;
        margin-top: 8px;

        .itemRow {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr 32px;
            gap: 8px;
            align-items: center;
        }

        input.name,
        input.unit,
        input.rate {
            background: ${S};
            color: ${h};
            border: 1px solid ${s};
            border-radius: 12px;
            padding: 10px 12px;
            outline: none;
            &:focus {
                border-color: ${p};
            }
        }

        .danger {
            background: transparent;
            color: ${d};
            border: 1px solid ${s};
            border-radius: 10px;
            height: 36px;
            cursor: pointer;
            transition: all 0.12s ease;
            &:hover {
                color: #ffb4b4;
                border-color: #442020;
                background: #1a0f0f;
            }
        }
    `,Actions:o.div`
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 14px;

        button {
            background: ${p};
            color: #031a0d;
            border: 1px solid ${p};
            border-radius: 12px;
            padding: 10px 14px;
            font-weight: 600;
            cursor: pointer;
            transition: transform 0.05s ease;
            &:active {
                transform: translateY(1px);
            }
        }

        .ghost {
            background: transparent;
            color: ${h};
            border: 1px solid ${s};
        }
    `,PreviewCard:o.section`
        background: ${R};
        border: 1px solid ${s};
        border-radius: ${T};
        box-shadow: ${k};
        padding: 18px;

        header {
            margin-bottom: 8px;
            h2 {
                margin: 0;
                font-size: clamp(20px, 4vw, 26px);
                line-height: 1.2;
            }
            .muted {
                color: ${d};
                margin: 4px 0 0;
                font-size: 14px;
            }
        }

        .table {
            display: grid;
            gap: 0;
        }

        .thead,
        .row {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr;
            gap: 8px;
            padding: 10px 8px;
            align-items: center;
        }

        .thead {
            color: ${d};
            font-size: 13px;
            border-bottom: 1px dashed ${s};
        }

        .tbody .row:nth-child(odd) {
            background: color-mix(in srgb, ${s} 30%, transparent);
        }

        .name,
        .unit,
        .rate {
            overflow-wrap: anywhere;
        }

        footer {
            margin-top: 12px;
            color: ${d};
            font-size: 13px;
        }
    `};if(typeof document<"u"&&!document.querySelector('style[data-rate-card-print="true"]')){const i=document.createElement("style");i.setAttribute("data-rate-card-print","true"),i.innerHTML=`
  @media print {
    body * { visibility: hidden !important; }

    #rateCardPrint, #rateCardPrint * { visibility: visible !important; }

    #rateCardPrint {
      position: absolute !important;
      inset: 0 auto auto 0 !important;
      left: 0; right: 0; top: 0;
      margin: 16mm auto !important;
      max-width: 180mm;
      background: #fff !important;
      color: #000 !important;
      border: none !important;
      box-shadow: none !important;
      padding: 30px !important;
    }

    /* white page + readable type */
    body { background: #fff !important; }
    #rateCardPrint .thead { color: #000 !important; border-color: #000 !important; }
    #rateCardPrint .tbody .row:nth-child(odd) { background: #f3f3f3 !important; }
    #rateCardPrint footer { color: #000 !important; }

    @page { margin: 12mm; }
  }`,document.head.appendChild(i)}const v="rateCard::meta",y="rateCard::items",$={businessName:"Ashish Ranjan",subtitle:"Frontend & Integrations",currency:"INR_SYMBOL",footer:"Prices exclusive of GST."},I=[{id:"srv-1",name:"Landing Page",unit:"per project",rate:"15000"},{id:"srv-2",name:"React App Setup",unit:"per project",rate:"12000"}],z=i=>i==="INR_TEXT"?"Rs.":"₹",_=()=>`srv-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,6)}`,L=i=>(i??"").toString().replace(/[^\d.]/g,"");function D(){const i=F(),[t,g]=c.useState($),[m,x]=c.useState(I);c.useEffect(()=>{try{const a=JSON.parse(localStorage.getItem(v)||"null");a&&g({...$,...a});const r=JSON.parse(localStorage.getItem(y)||"null");Array.isArray(r)&&r.length&&x(r)}catch{}},[]),c.useEffect(()=>{localStorage.setItem(v,JSON.stringify(t))},[t]),c.useEffect(()=>{localStorage.setItem(y,JSON.stringify(m))},[m]);const w=c.useMemo(()=>z(t.currency),[t.currency]),u=(a,r)=>g(l=>({...l,[a]:r})),E=()=>{x(a=>[...a,{id:_(),name:"",unit:"",rate:""}])},b=(a,r,l)=>{x(f=>f.map(j=>j.id===a?{...j,[r]:r==="rate"?L(l):l}:j))},P=async a=>{await i({title:"Delete this row?",message:"This action cannot be undone.",confirmText:"Delete",cancelText:"Cancel",variant:"danger"})&&(x(l=>l.filter(f=>f.id!==a)),C.info("Row removed"))},A=async()=>{await i({title:"Clear all data?",message:"This will remove business info and all rows.",confirmText:"Clear",cancelText:"Keep",variant:"danger"})&&(localStorage.removeItem(v),localStorage.removeItem(y),g($),x(I),C.success("Reset complete"))},M=()=>window.print(),N=`Rate (${w})`;return e.jsxs(n.Wrapper,{children:[e.jsxs(n.Header,{className:"no-print",children:[e.jsx("h1",{children:"RateCard"}),e.jsx("p",{children:"One-page, printable service rate sheet."})]}),e.jsxs(n.Grid,{children:[e.jsxs(n.EditPanel,{className:"no-print","aria-label":"Editor",children:[e.jsxs(n.Field,{children:[e.jsx("label",{htmlFor:"biz",children:"Business Name"}),e.jsx("input",{id:"biz",value:t.businessName,onChange:a=>u("businessName",a.target.value),placeholder:"Your business name"})]}),e.jsxs(n.Field,{children:[e.jsx("label",{htmlFor:"sub",children:"Subtitle / Tagline (optional)"}),e.jsx("input",{id:"sub",value:t.subtitle,onChange:a=>u("subtitle",a.target.value),placeholder:"e.g., Web, UI, Integrations"})]}),e.jsxs(n.Field,{children:[e.jsx("label",{children:"Currency"}),e.jsxs("div",{className:"row",children:[e.jsxs("label",{className:"radio",children:[e.jsx("input",{type:"radio",checked:t.currency==="INR_SYMBOL",onChange:()=>u("currency","INR_SYMBOL")}),e.jsx("span",{children:"₹"})]}),e.jsxs("label",{className:"radio",children:[e.jsx("input",{type:"radio",checked:t.currency==="INR_TEXT",onChange:()=>u("currency","INR_TEXT")}),e.jsx("span",{children:"Rs."})]})]})]}),e.jsxs(n.Field,{children:[e.jsx("label",{htmlFor:"foot",children:"Footer Note (optional)"}),e.jsx("input",{id:"foot",value:t.footer,onChange:a=>u("footer",a.target.value),placeholder:"e.g., Prices exclusive of GST."})]}),e.jsxs(n.itemsHeader,{children:[e.jsx("span",{children:"Service"}),e.jsx("span",{children:"Unit"}),e.jsx("span",{children:N}),e.jsx("span",{})]}),e.jsx(n.Items,{children:m.map(a=>e.jsxs("div",{className:"itemRow",children:[e.jsx("input",{className:"name",placeholder:"Service name",value:a.name,onChange:r=>b(a.id,"name",r.target.value)}),e.jsx("input",{className:"unit",placeholder:"per hour / per project",value:a.unit,onChange:r=>b(a.id,"unit",r.target.value)}),e.jsx("input",{className:"rate",placeholder:"0",inputMode:"decimal",value:a.rate,onChange:r=>b(a.id,"rate",r.target.value)}),e.jsx("button",{className:"danger",type:"button",onClick:()=>P(a.id),"aria-label":"Delete row",title:"Delete row",children:"✕"})]},a.id))}),e.jsxs(n.Actions,{className:"no-print",children:[e.jsx("button",{onClick:E,children:"Add Row"}),e.jsx("button",{onClick:A,className:"ghost",children:"Clear All"}),e.jsx("button",{onClick:M,children:"Print"})]})]}),e.jsxs(n.PreviewCard,{id:"rateCardPrint","aria-label":"Preview",children:[e.jsxs("header",{children:[e.jsx("h2",{children:t.businessName||"—"}),t.subtitle?e.jsx("p",{className:"muted",children:t.subtitle}):null]}),e.jsxs("div",{className:"table",children:[e.jsxs("div",{className:"thead",children:[e.jsx("span",{children:"Service"}),e.jsx("span",{children:"Unit"}),e.jsx("span",{children:N})]}),e.jsx("div",{className:"tbody",children:m.length===0?e.jsxs("div",{className:"row",children:[e.jsx("span",{children:"—"}),e.jsx("span",{children:"—"}),e.jsx("span",{children:"—"})]}):m.map(a=>e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"name",children:a.name||"—"}),e.jsx("span",{className:"unit",children:a.unit||"—"}),e.jsx("span",{className:"rate",children:a.rate?`${w} ${a.rate}`:"—"})]},a.id))})]}),t.footer?e.jsx("footer",{className:"muted",children:t.footer}):null]})]})]})}export{D as default};
