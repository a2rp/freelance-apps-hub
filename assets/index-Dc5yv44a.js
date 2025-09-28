import{f as E,d as G,r as h,j as e}from"./index-Dgh-lHkt.js";const U="var(--card, #111)",y="var(--text, #e9e9e9)",v="var(--muted, #b7b7b7)",x="var(--border, #222)",f="var(--accent, #22c55e)",N="var(--danger, #ef4444)",m="var(--radius, 16px)",D="var(--shadow, 0 8px 30px rgba(0,0,0,0.25))",F=E`
  @media print {
    html, body { background: #fff !important; }
    body * { visibility: hidden !important; }
    #md-print-summary, #md-print-summary * { visibility: visible !important; }
    #md-print-summary {
      position: absolute; inset: 0; width: 100%;
      margin: 0; padding: 24px; box-sizing: border-box;
      background: #fff !important; color: #000 !important;
      font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
      white-space: pre-wrap; line-height: 1.5;
    }
  }
`,O=G.main`
    color: ${y};
    max-width: var(--maxw, 1200px);
    margin: 0 auto;
    padding: 24px;

    .no-print {
        display: initial;
    }
    .only-print {
        display: none;
    }

    .header {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 12px;
        align-items: baseline;
        margin-bottom: 16px;

        h2 {
            margin: 0;
        }
        .meta {
            color: ${v};
            font-size: 14px;
        }
    }

    .card {
        background: ${U};
        border: 1px solid ${x};
        border-radius: ${m};
        box-shadow: ${D};
        padding: 16px;
        margin-bottom: 16px;
    }

    .grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
    }

    label {
        display: grid;
        gap: 6px;
        margin-bottom: 12px;

        span {
            color: ${v};
            font-size: 12px;
            letter-spacing: 0.3px;
        }

        input,
        textarea,
        select {
            background: #0b0b0b;
            color: ${y};
            border: 1px solid ${x};
            border-radius: ${m};
            padding: 10px 12px;
            outline: none;
        }

        textarea.summary {
            font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
            white-space: pre;
            min-height: 200px;
        }
    }

    .items {
        display: grid;
        gap: 8px;
    }

    .item {
        display: grid;
        grid-template-columns: 32px 2fr 88px 120px 2fr 120px auto;
        gap: 8px;
        align-items: center;

        .index {
            width: 32px;
            height: 36px;
            display: grid;
            place-items: center;
            color: ${v};
            border: 1px dashed ${x};
            border-radius: ${m};
            font-size: 12px;
        }

        .name,
        .qty,
        .price,
        .notes {
            background: #0b0b0b;
            color: ${y};
            border: 1px solid ${x};
            border-radius: ${m};
            padding: 8px 10px;
        }

        .qty,
        .price {
            text-align: right;
        }

        .amount {
            text-align: right;
            color: ${y};
            border: 1px dashed ${x};
            border-radius: ${m};
            padding: 8px 10px;
            min-width: 110px;
        }

        .remove {
            background: transparent;
            color: ${N};
            border: 1px solid ${N};
            border-radius: ${m};
            padding: 8px 10px;
            cursor: pointer;
        }
    }

    .row.bottom {
        display: flex;
        justify-content: flex-end;
        margin-top: 8px;
        .add {
            background: transparent;
            color: ${f};
            border: 1px dashed ${f};
            border-radius: ${m};
            padding: 8px 12px;
            cursor: pointer;
        }
    }

    .totals {
        display: grid;
        gap: 12px;

        .controls {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
        }

        .figures {
            display: grid;
            gap: 6px;

            .line {
                display: grid;
                grid-template-columns: 1fr auto;
                gap: 12px;
                padding: 8px 0;
                border-bottom: 1px dashed ${x};
                &:last-child {
                    border-bottom: none;
                }
            }
            .grand {
                font-weight: 700;
            }
        }
    }

    .footer {
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
        margin-top: 8px;

        .actions {
            display: flex;
            gap: 8px;

            button {
                background: ${f};
                color: #0b0b0b;
                border: 1px solid ${x};
                border-radius: ${m};
                padding: 8px 12px;
                cursor: pointer;
                box-shadow: ${D};
            }
            .danger {
                background: transparent;
                color: ${N};
                border: 1px solid ${N};
            }
        }
    }

    .hint {
        color: ${v};
        font-size: 12px;
        margin-top: 6px;
    }

    @media print {
        .no-print {
            display: none !important;
        }
        .only-print {
            display: block;
        }
    }

    @media (max-width: 920px) {
        .item {
            grid-template-columns: 24px 1.6fr 72px 90px 1.6fr 90px auto;
        }
    }
    @media (max-width: 720px) {
        .grid {
            grid-template-columns: 1fr;
        }
        .item {
            grid-template-columns: 24px 1fr 72px 90px 1fr 90px auto;
        }
    }
`,S={Wrapper:O,PrintScope:F},$="medicine-delivery-v2",d=t=>Number.isFinite(+t)?new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR"}).format(+t):"₹0.00",I=(t=new Date)=>t.toLocaleDateString("en-US",{month:"short",day:"2-digit",year:"numeric"}),z=t=>{if(!t)return"";try{return new Date(`${t}T00:00:00`).toLocaleDateString("en-US",{month:"short",day:"2-digit",year:"numeric"})}catch{return t}},P=()=>({id:crypto.randomUUID(),name:"",qty:1,price:0,notes:""});function W(){const[t,s]=h.useState({patientName:"",phone:"",address:"",priority:"Normal",slot:"Anytime Today",note:"",gstPct:5,discountPct:0,doctorName:"",doctorRegNo:"",clinic:"",doctorPhone:"",rxId:"",rxDate:"",diagnosis:"",rxNotes:""}),[p,u]=h.useState([P()]);h.useEffect(()=>{try{const r=localStorage.getItem($);if(r){const a=JSON.parse(r);a!=null&&a.meta&&s(o=>({...o,...a.meta})),Array.isArray(a==null?void 0:a.items)&&a.items.length&&u(a.items)}}catch{}},[]),h.useEffect(()=>{localStorage.setItem($,JSON.stringify({meta:t,items:p}))},[t,p]);const R=()=>u(r=>[...r,P()]),T=r=>{var c;const a=p.find(n=>n.id===r),o=(c=a==null?void 0:a.name)!=null&&c.trim()?`“${a.name.trim()}”`:"this item";window.confirm(`Remove ${o}?`)&&u(n=>n.filter(i=>i.id!==r))},g=(r,a,o)=>u(c=>c.map(n=>n.id===r?{...n,[a]:o}:n)),A=()=>{window.confirm("Clear the entire form?")&&(s({patientName:"",phone:"",address:"",priority:"Normal",slot:"Anytime Today",note:"",gstPct:5,discountPct:0,doctorName:"",doctorRegNo:"",clinic:"",doctorPhone:"",rxId:"",rxDate:"",diagnosis:"",rxNotes:""}),u([P()]),localStorage.removeItem($))},l=h.useMemo(()=>{const r=p.reduce((i,j)=>i+(Number(j.qty)||0)*(Number(j.price)||0),0),a=r*((Number(t.discountPct)||0)/100),o=Math.max(r-a,0),c=o*((Number(t.gstPct)||0)/100),n=o+c;return{subtotal:r,discountAmt:a,taxable:o,gstAmt:c,grandTotal:n}},[p,t.discountPct,t.gstPct]),b=h.useMemo(()=>{const r=[];return r.push(`Medicine Delivery Request — ${I()}`),t.patientName&&r.push(`Patient: ${t.patientName}`),t.phone&&r.push(`Phone: ${t.phone}`),t.address&&r.push(`Address: ${t.address}`),r.push(`Priority: ${t.priority}`),r.push(`Preferred Slot: ${t.slot}`),t.note&&r.push(`Note: ${t.note}`),(t.doctorName||t.doctorRegNo||t.clinic||t.doctorPhone||t.rxId||t.rxDate||t.diagnosis||t.rxNotes)&&(r.push(""),r.push("Doctor / Prescription:"),t.doctorName&&r.push(`Doctor: ${t.doctorName}`),t.doctorRegNo&&r.push(`Reg. No: ${t.doctorRegNo}`),t.clinic&&r.push(`Clinic/Hospital: ${t.clinic}`),t.doctorPhone&&r.push(`Doctor Phone: ${t.doctorPhone}`),t.rxId&&r.push(`Prescription ID: ${t.rxId}`),t.rxDate&&r.push(`Prescription Date: ${z(t.rxDate)}`),t.diagnosis&&r.push(`Diagnosis: ${t.diagnosis}`),t.rxNotes&&r.push(`Rx Notes: ${t.rxNotes}`)),r.push(""),r.push("Items:"),p.forEach((a,o)=>{var C,w;const c=((C=a.name)==null?void 0:C.trim())||"(Unnamed)",n=Number(a.qty||0),i=Number(a.price||0),j=n*i,q=(w=a.notes)!=null&&w.trim()?` — ${a.notes.trim()}`:"";r.push(`${o+1}. ${c} × ${n} @ ${d(i)} = ${d(j)}${q}`)}),r.push(""),r.push(`Subtotal: ${d(l.subtotal)}`),r.push(`Discount (${t.discountPct||0}%): -${d(l.discountAmt)}`),r.push(`Taxable: ${d(l.taxable)}`),r.push(`GST (${t.gstPct||0}%): ${d(l.gstAmt)}`),r.push(`Grand Total: ${d(l.grandTotal)}`),r.join(`
`)},[t,p,l]),k=async()=>{try{await navigator.clipboard.writeText(b),alert("Summary copied.")}catch{window.prompt("Copy the summary below:",b)}},M=()=>window.print();return e.jsxs(e.Fragment,{children:[e.jsx(S.PrintScope,{}),e.jsxs(S.Wrapper,{id:"md-print-area",children:[e.jsxs("header",{className:"header no-print",children:[e.jsx("h2",{children:"Medicine Delivery"}),e.jsx("div",{className:"meta",children:I()})]}),e.jsxs("section",{className:"card",children:[e.jsxs("div",{className:"grid",children:[e.jsxs("label",{children:[e.jsx("span",{children:"Patient Name"}),e.jsx("input",{value:t.patientName,onChange:r=>s({...t,patientName:r.target.value}),placeholder:"e.g., Rahul Mehta"})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Phone"}),e.jsx("input",{value:t.phone,onChange:r=>s({...t,phone:r.target.value}),placeholder:"10-digit mobile"})]})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Address"}),e.jsx("textarea",{rows:3,value:t.address,onChange:r=>s({...t,address:r.target.value}),placeholder:"Flat / Street / Landmark / City / PIN"})]}),e.jsxs("div",{className:"grid",children:[e.jsxs("label",{children:[e.jsx("span",{children:"Priority"}),e.jsxs("select",{value:t.priority,onChange:r=>s({...t,priority:r.target.value}),children:[e.jsx("option",{children:"Normal"}),e.jsx("option",{children:"Urgent"}),e.jsx("option",{children:"Schedule"})]})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Preferred Slot"}),e.jsx("input",{value:t.slot,onChange:r=>s({...t,slot:r.target.value}),placeholder:"e.g., Today 6–9 PM"})]})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Note"}),e.jsx("input",{value:t.note,onChange:r=>s({...t,note:r.target.value}),placeholder:"Gate code / don’t ring bell / etc."})]})]}),e.jsxs("section",{className:"card",children:[e.jsx("h3",{children:"Doctor & Prescription"}),e.jsxs("div",{className:"grid",children:[e.jsxs("label",{children:[e.jsx("span",{children:"Doctor Name"}),e.jsx("input",{value:t.doctorName,onChange:r=>s({...t,doctorName:r.target.value}),placeholder:"e.g., Dr. A. Sharma"})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Reg. No"}),e.jsx("input",{value:t.doctorRegNo,onChange:r=>s({...t,doctorRegNo:r.target.value}),placeholder:"e.g., MCI / KMC number"})]})]}),e.jsxs("div",{className:"grid",children:[e.jsxs("label",{children:[e.jsx("span",{children:"Clinic / Hospital"}),e.jsx("input",{value:t.clinic,onChange:r=>s({...t,clinic:r.target.value}),placeholder:"e.g., CityCare Clinic, Bengaluru"})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Doctor Phone"}),e.jsx("input",{value:t.doctorPhone,onChange:r=>s({...t,doctorPhone:r.target.value}),placeholder:"Optional"})]})]}),e.jsxs("div",{className:"grid",children:[e.jsxs("label",{children:[e.jsx("span",{children:"Prescription ID"}),e.jsx("input",{value:t.rxId,onChange:r=>s({...t,rxId:r.target.value}),placeholder:"e.g., RX-2025-0912"})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Prescription Date"}),e.jsx("input",{type:"date",value:t.rxDate,onChange:r=>s({...t,rxDate:r.target.value})})]})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Diagnosis"}),e.jsx("input",{value:t.diagnosis,onChange:r=>s({...t,diagnosis:r.target.value}),placeholder:"Optional"})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Rx Notes"}),e.jsx("input",{value:t.rxNotes,onChange:r=>s({...t,rxNotes:r.target.value}),placeholder:"e.g., Take after food, avoid NSAIDs etc."})]})]}),e.jsxs("section",{className:"card",children:[e.jsx("h3",{children:"Medicines"}),e.jsx("div",{className:"items",children:p.map((r,a)=>{const o=Number(r.qty)||0,c=Number(r.price)||0,n=o*c;return e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"index",children:a+1}),e.jsx("input",{className:"name",placeholder:"Medicine name (e.g., Dolo 650)",value:r.name,onChange:i=>g(r.id,"name",i.target.value)}),e.jsx("input",{className:"qty",type:"number",min:"0",step:"1",value:r.qty,onChange:i=>g(r.id,"qty",i.target.value),title:"Quantity"}),e.jsx("input",{className:"price",type:"number",min:"0",step:"0.01",value:r.price,onChange:i=>g(r.id,"price",i.target.value),title:"Unit Price",placeholder:"Price"}),e.jsx("input",{className:"notes",placeholder:"Notes (brand / strip / syrup / dosage)",value:r.notes,onChange:i=>g(r.id,"notes",i.target.value)}),e.jsx("div",{className:"amount",children:d(n)}),e.jsx("button",{className:"remove no-print",onClick:()=>T(r.id),children:"Remove"})]},r.id)})}),e.jsx("div",{className:"row bottom no-print",children:e.jsx("button",{className:"add",onClick:R,children:"+ Add Item"})})]}),e.jsx("section",{className:"card",children:e.jsxs("div",{className:"totals",children:[e.jsxs("div",{className:"controls",children:[e.jsxs("label",{children:[e.jsx("span",{children:"GST %"}),e.jsx("input",{type:"number",min:"0",step:"0.5",value:t.gstPct,onChange:r=>s({...t,gstPct:r.target.value})})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Discount %"}),e.jsx("input",{type:"number",min:"0",step:"0.5",value:t.discountPct,onChange:r=>s({...t,discountPct:r.target.value})})]})]}),e.jsxs("div",{className:"figures",children:[e.jsxs("div",{className:"line",children:[e.jsx("div",{children:"Subtotal"}),e.jsx("div",{children:d(l.subtotal)})]}),e.jsxs("div",{className:"line",children:[e.jsxs("div",{children:["Discount (",t.discountPct||0,"%)"]}),e.jsxs("div",{children:["-",d(l.discountAmt)]})]}),e.jsxs("div",{className:"line",children:[e.jsx("div",{children:"Taxable"}),e.jsx("div",{children:d(l.taxable)})]}),e.jsxs("div",{className:"line",children:[e.jsxs("div",{children:["GST (",t.gstPct||0,"%)"]}),e.jsx("div",{children:d(l.gstAmt)})]}),e.jsxs("div",{className:"line grand",children:[e.jsx("div",{children:"Grand Total"}),e.jsx("div",{children:d(l.grandTotal)})]})]})]})}),e.jsxs("section",{className:"card",children:[e.jsxs("label",{children:[e.jsx("span",{children:"Shareable Summary"}),e.jsx("textarea",{className:"summary no-print",rows:10,readOnly:!0,value:b}),e.jsx("pre",{id:"md-print-summary",className:"only-print",children:b})]}),e.jsx("p",{className:"hint",children:"Tip: copy and share with your chemist / delivery partner on WhatsApp or email."})]}),e.jsxs("footer",{className:"footer no-print",children:[e.jsx("div",{className:"spacer"}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{onClick:k,children:"Copy"}),e.jsx("button",{onClick:M,children:"Print"}),e.jsx("button",{className:"danger",onClick:A,children:"Clear"})]})]})]})]})}export{W as default};
