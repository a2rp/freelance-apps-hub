import{d as o,r as l,j as e,y as N}from"./index-CeF1p2Yz.js";const S="var(--bg, #0b0b0b)",C="var(--card, #111)",u="var(--text, #e9e9e9)",s="var(--muted, #b7b7b7)",i="var(--border, #222)",c="var(--accent, #22c55e)",R="var(--radius, 16px)",k="var(--shadow, 0 8px 30px rgba(0,0,0,0.25))",n={Wrapper:o.div`
        max-width: var(--maxw, 1200px);
        margin: 0 auto;
        padding: var(--space-5, 32px) var(--space-4, 24px) var(--space-6, 48px);
        color: ${u};
    `,Header:o.header`
        margin-bottom: var(--space-4, 24px);

        h1 {
            font-size: clamp(22px, 4vw, 30px);
            margin: 0 0 6px;
            line-height: 1.2;
        }
        p {
            color: ${s};
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
        background: ${C};
        border: 1px solid ${i};
        border-radius: ${R};
        box-shadow: ${k};
        padding: 16px;
    `,Field:o.div`
        display: grid;
        gap: 8px;
        margin-bottom: 14px;

        label {
            color: ${s};
            font-size: 13px;
        }

        input[type="text"],
        input:not([type]) {
            /* allow generic input usage */
        }

        input {
            background: ${S};
            color: ${u};
            border: 1px solid ${i};
            border-radius: 12px;
            padding: 10px 12px;
            outline: none;
            &:focus {
                border-color: ${c};
                box-shadow: 0 0 0 2px
                    color-mix(in srgb, ${c} 32%, transparent);
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
            border: 1px solid ${i};
            border-radius: 12px;
            input {
                accent-color: ${c};
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
        color: ${s};
        font-size: 13px;
        border-bottom: 1px dashed ${i};
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
            color: ${u};
            border: 1px solid ${i};
            border-radius: 12px;
            padding: 10px 12px;
            outline: none;
            &:focus {
                border-color: ${c};
            }
        }

        .danger {
            background: transparent;
            color: ${s};
            border: 1px solid ${i};
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
            background: ${c};
            color: #031a0d;
            border: 1px solid ${c};
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
            color: ${u};
            border: 1px solid ${i};
        }
    `,PreviewCard:o.section`
        background: ${C};
        border: 1px solid ${i};
        border-radius: ${R};
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
                color: ${s};
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
            color: ${s};
            font-size: 13px;
            border-bottom: 1px dashed ${i};
        }

        .tbody .row:nth-child(odd) {
            background: color-mix(in srgb, ${i} 30%, transparent);
        }

        .name,
        .unit,
        .rate {
            overflow-wrap: anywhere;
        }

        footer {
            margin-top: 12px;
            color: ${s};
            font-size: 13px;
        }
    `};if(typeof document<"u"&&!document.querySelector('style[data-rate-card-print="true"]')){const a=document.createElement("style");a.setAttribute("data-rate-card-print","true"),a.innerHTML=`
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
  }`,document.head.appendChild(a)}const j="rateCard::meta",v="rateCard::items",y={businessName:"Ashish Ranjan",subtitle:"Frontend & Integrations",currency:"INR_SYMBOL",footer:"Prices exclusive of GST."},I=[{id:"srv-1",name:"Landing Page",unit:"per project",rate:"15000"},{id:"srv-2",name:"React App Setup",unit:"per project",rate:"12000"}],M=a=>a==="INR_TEXT"?"Rs.":"₹",F=()=>`srv-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,6)}`,z=a=>(a??"").toString().replace(/[^\d.]/g,"");function L(){const[a,h]=l.useState(y),[p,m]=l.useState(I);l.useEffect(()=>{try{const r=JSON.parse(localStorage.getItem(j)||"null");r&&h({...y,...r});const t=JSON.parse(localStorage.getItem(v)||"null");Array.isArray(t)&&t.length&&m(t)}catch{}},[]),l.useEffect(()=>{localStorage.setItem(j,JSON.stringify(a))},[a]),l.useEffect(()=>{localStorage.setItem(v,JSON.stringify(p))},[p]);const w=l.useMemo(()=>M(a.currency),[a.currency]),x=(r,t)=>h(d=>({...d,[r]:t})),E=()=>{m(r=>[...r,{id:F(),name:"",unit:"",rate:""}])},g=(r,t,d)=>{m(b=>b.map(f=>f.id===r?{...f,[t]:t==="rate"?z(d):d}:f))},T=r=>{window.confirm(`Delete this row?

This action cannot be undone.`)&&(m(d=>d.filter(b=>b.id!==r)),N.info("Row removed"))},P=()=>{window.confirm(`Clear all data?

This will remove business info and all rows.`)&&(localStorage.removeItem(j),localStorage.removeItem(v),h(y),m(I),N.success("Reset complete"))},A=()=>window.print(),$=`Rate (${w})`;return e.jsxs(n.Wrapper,{children:[e.jsxs(n.Header,{className:"no-print",children:[e.jsx("h1",{children:"RateCard"}),e.jsx("p",{children:"One-page, printable service rate sheet."})]}),e.jsxs(n.Grid,{children:[e.jsxs(n.EditPanel,{className:"no-print","aria-label":"Editor",children:[e.jsxs(n.Field,{children:[e.jsx("label",{htmlFor:"biz",children:"Business Name"}),e.jsx("input",{id:"biz",value:a.businessName,onChange:r=>x("businessName",r.target.value),placeholder:"Your business name"})]}),e.jsxs(n.Field,{children:[e.jsx("label",{htmlFor:"sub",children:"Subtitle / Tagline (optional)"}),e.jsx("input",{id:"sub",value:a.subtitle,onChange:r=>x("subtitle",r.target.value),placeholder:"e.g., Web, UI, Integrations"})]}),e.jsxs(n.Field,{children:[e.jsx("label",{children:"Currency"}),e.jsxs("div",{className:"row",children:[e.jsxs("label",{className:"radio",children:[e.jsx("input",{type:"radio",checked:a.currency==="INR_SYMBOL",onChange:()=>x("currency","INR_SYMBOL")}),e.jsx("span",{children:"₹"})]}),e.jsxs("label",{className:"radio",children:[e.jsx("input",{type:"radio",checked:a.currency==="INR_TEXT",onChange:()=>x("currency","INR_TEXT")}),e.jsx("span",{children:"Rs."})]})]})]}),e.jsxs(n.Field,{children:[e.jsx("label",{htmlFor:"foot",children:"Footer Note (optional)"}),e.jsx("input",{id:"foot",value:a.footer,onChange:r=>x("footer",r.target.value),placeholder:"e.g., Prices exclusive of GST."})]}),e.jsxs(n.itemsHeader,{children:[e.jsx("span",{children:"Service"}),e.jsx("span",{children:"Unit"}),e.jsx("span",{children:$}),e.jsx("span",{})]}),e.jsx(n.Items,{children:p.map(r=>e.jsxs("div",{className:"itemRow",children:[e.jsx("input",{className:"name",placeholder:"Service name",value:r.name,onChange:t=>g(r.id,"name",t.target.value)}),e.jsx("input",{className:"unit",placeholder:"per hour / per project",value:r.unit,onChange:t=>g(r.id,"unit",t.target.value)}),e.jsx("input",{className:"rate",placeholder:"0",inputMode:"decimal",value:r.rate,onChange:t=>g(r.id,"rate",t.target.value)}),e.jsx("button",{className:"danger",type:"button",onClick:()=>T(r.id),"aria-label":"Delete row",title:"Delete row",children:"✕"})]},r.id))}),e.jsxs(n.Actions,{className:"no-print",children:[e.jsx("button",{onClick:E,children:"Add Row"}),e.jsx("button",{onClick:P,className:"ghost",children:"Clear All"}),e.jsx("button",{onClick:A,children:"Print"})]})]}),e.jsxs(n.PreviewCard,{id:"rateCardPrint","aria-label":"Preview",children:[e.jsxs("header",{children:[e.jsx("h2",{children:a.businessName||"—"}),a.subtitle?e.jsx("p",{className:"muted",children:a.subtitle}):null]}),e.jsxs("div",{className:"table",children:[e.jsxs("div",{className:"thead",children:[e.jsx("span",{children:"Service"}),e.jsx("span",{children:"Unit"}),e.jsx("span",{children:$})]}),e.jsx("div",{className:"tbody",children:p.length===0?e.jsxs("div",{className:"row",children:[e.jsx("span",{children:"—"}),e.jsx("span",{children:"—"}),e.jsx("span",{children:"—"})]}):p.map(r=>e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"name",children:r.name||"—"}),e.jsx("span",{className:"unit",children:r.unit||"—"}),e.jsx("span",{className:"rate",children:r.rate?`${w} ${r.rate}`:"—"})]},r.id))})]}),a.footer?e.jsx("footer",{className:"muted",children:a.footer}):null]})]})]})}export{L as default};
