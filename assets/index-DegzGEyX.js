import{d as l,f as G,r as p,j as e}from"./index-Dgh-lHkt.js";const T="var(--card, #111)",u="var(--text, #e9e9e9)",A="var(--muted, #b7b7b7)",S="var(--border, #222)",j="var(--accent, #22c55e)",I="var(--radius, 16px)",z="var(--shadow, 0 8px 30px rgba(0,0,0,0.25))",P="var(--maxw, 1100px)",q=`
  display: block;
  font-size: 0.9rem;
  color: ${A};
  margin-bottom: 6px;
`,K=`
  width: 100%;
  padding: 10px 12px;
  background: transparent;
  border: 1px solid ${S};
  color: ${u};
  border-radius: 10px;
  outline: none;
  transition: border-color .15s ease;
  &:focus { border-color: ${j}; }
`,V=G`
  @media print {
    @page {
      size: A4;
      margin: 12mm;
    }
    html, body {
      background: #fff !important;
    }
    /* Hide everything by default */
    body * {
      visibility: hidden !important;
    }
    /* Show only the KYC print root and its children */
    #kyc-print-root, #kyc-print-root * {
      visibility: visible !important;
    }
    /* Position the print root at the top-left of the page */
    #kyc-print-root {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      padding: 30px;
    }
  }
`,r={Wrapper:l.div`
        width: 100%;
        display: grid;
        place-items: start center;
        padding: 24px;
    `,Header:l.header`
        width: 100%;
        max-width: ${P};
        margin-bottom: 14px;
        h2 {
            margin: 0 0 6px;
        }
        p {
            color: ${A};
            margin: 0;
        }
    `,Form:l.form`
        width: 100%;
        max-width: ${P};
        background: ${T};
        border: 1px solid ${S};
        border-radius: ${I};
        box-shadow: ${z};
        padding: 20px;

        /* Never print the interactive form */
        @media print {
            display: none !important;
        }
    `,Section:l.section`
        & + & {
            margin-top: 22px;
        }
    `,SectionTitle:l.h3`
        margin: 0 0 12px;
        font-size: 1.1rem;
    `,SubTitle:l.h4`
        margin: 14px 0 10px;
        font-size: 1rem;
        color: ${A};
    `,Grid:l.div`
        display: grid;
        grid-template-columns: repeat(${i=>i.$cols||2}, 1fr);
        gap: 14px;

        .span2 {
            grid-column: span 2;
        }

        @media (max-width: 720px) {
            grid-template-columns: 1fr;
            .span2 {
                grid-column: auto;
            }
        }
    `,Field:l.div`
        label {
            ${q}
        }
        input,
        select {
            ${K}
        }
    `,CopyRow:l.div`
        margin-top: 10px;
        label {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: ${u};
            input {
                accent-color: ${j};
            }
        }
    `,Declaration:l.div`
        label {
            display: grid;
            grid-template-columns: 18px 1fr;
            align-items: start;
            gap: 10px;
            color: ${u};
            input {
                accent-color: ${j};
                margin-top: 4px;
            }
        }
    `,Error:l.div`
        color: #ef4444;
        font-size: 0.85rem;
        margin-top: 6px;
    `,ErrorBlock:l.div`
        margin-top: 8px;
        color: #ef4444;
        font-size: 0.9rem;
    `,Success:l.div`
        margin-top: 12px;
        padding: 10px 12px;
        border: 1px solid ${j};
        background: rgba(34, 197, 94, 0.07);
        color: ${u};
        border-radius: 10px;
    `,Actions:l.div`
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 18px;

        button {
            padding: 10px 14px;
            border-radius: 12px;
            border: 1px solid ${S};
            background: #161616;
            color: ${u};
            cursor: pointer;
            transition: transform 0.05s ease, border-color 0.15s ease;
            &:hover {
                border-color: ${j};
            }
            &:active {
                transform: translateY(1px);
            }
        }
        .danger {
            background: #1a0f10;
            border-color: #7f1d1d;
            color: #fda4af;
        }
    `,PrintArea:l.div`
        display: none;

        @media print {
            display: block;
            width: 100%;
            max-width: 800px;
            margin: 0 auto;
            color: #111;
            background: white !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
            box-shadow: none !important;
            border: 0 !important;
        }

        h3 {
            text-align: center;
            margin-bottom: 12px;
            color: #111;
        }
    `,PrintGrid:l.div`
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8px 16px;
        font-size: 12pt;

        .span2 {
            grid-column: span 2;
        }

        @media print and (max-width: 700px) {
            grid-template-columns: 1fr;
        }
    `,PrintFooter:l.div`
        margin-top: 16px;
        font-size: 12pt;

        .sign-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
            margin-top: 40px;
        }
    `},v="bank-kyc-form:draft",y={fullName:"",fatherOrSpouseName:"",dob:"",gender:"Male",maritalStatus:"Single",mobile:"",email:"",aadhaar:"",pan:"",presentAddress:{line1:"",line2:"",city:"",state:"",pincode:""},sameAsPresent:!1,permanentAddress:{line1:"",line2:"",city:"",state:"",pincode:""},occupation:"Salaried",occupationOther:"",incomeRange:"0-3 LPA",nominee:{name:"",relation:"Father",mobile:"",aadhaar:""},agree:!1};function k(i){return/^[6-9]\d{9}$/.test(i.trim())}function Y(i){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i.trim())}function w(i){return/^\d{6}$/.test(i.trim())}function $(i){return/^\d{12}$/.test(i.trim())}function J(i){return/^[A-Z]{5}\d{4}[A-Z]{1}$/.test(i.trim())}const H=()=>{const[i,g]=p.useState(y),[t,F]=p.useState({}),[N,b]=p.useState(!1),E=p.useRef(null);p.useEffect(()=>{try{const n=localStorage.getItem(v);n&&g({...y,...JSON.parse(n)})}catch{}},[]),p.useEffect(()=>{try{localStorage.setItem(v,JSON.stringify(i))}catch{}},[i]),p.useEffect(()=>{b(!1)},[i]),p.useEffect(()=>{i.sameAsPresent&&g(n=>({...n,permanentAddress:{...n.presentAddress}}))},[i.sameAsPresent,i.presentAddress.line1,i.presentAddress.line2,i.presentAddress.city,i.presentAddress.state,i.presentAddress.pincode]);const O=i.occupation==="Other";function a(n,o){g(d=>{const h=n.split("."),m={...d};let c=m;for(let f=0;f<h.length-1;f++){const x=h[f];c[x]=Array.isArray(c[x])?[...c[x]]:{...c[x]},c=c[x]}return c[h[h.length-1]]=o,m})}function M(){const n={};i.fullName.trim()||(n.fullName="Full name is required."),i.dob||(n.dob="Date of birth is required."),k(i.mobile)||(n.mobile="Enter a valid 10-digit mobile."),i.email&&!Y(i.email)&&(n.email="Enter a valid email."),$(i.aadhaar)||(n.aadhaar="Aadhaar must be 12 digits."),i.pan&&!J(i.pan)&&(n.pan="PAN must be like ABCDE1234F.");const o=i.presentAddress;if(o.line1.trim()||(n.presentAddress="Present address Line 1 is required."),(!o.city.trim()||!o.state.trim())&&(n.presentAddressCityState="City & State are required (Present)."),w(o.pincode)||(n.presentPincode="Valid 6-digit pincode (Present)."),!i.sameAsPresent){const d=i.permanentAddress;d.line1.trim()||(n.permanentAddress="Permanent address Line 1 is required."),(!d.city.trim()||!d.state.trim())&&(n.permanentCityState="City & State are required (Permanent)."),w(d.pincode)||(n.permanentPincode="Valid 6-digit pincode (Permanent).")}return i.nominee.name.trim()||(n.nomineeName="Nominee name is required."),i.nominee.mobile&&!k(i.nominee.mobile)&&(n.nomineeMobile="Nominee mobile should be a valid 10-digit number."),i.nominee.aadhaar&&!$(i.nominee.aadhaar)&&(n.nomineeAadhaar="Nominee Aadhaar should be 12 digits."),i.agree||(n.agree="Please confirm the declaration."),n}function L(n){const o=["fullName","dob","mobile","email","aadhaar","pan","presentAddress","presentAddressCityState","presentPincode","permanentAddress","permanentCityState","permanentPincode","nomineeName","nomineeMobile","nomineeAadhaar","agree"],d={fullName:"fullName",dob:"dob",mobile:"mobile",email:"email",aadhaar:"aadhaar",pan:"pan",presentAddress:"pa1",presentAddressCityState:"pacity",presentPincode:"papin",permanentAddress:"pe1",permanentCityState:"pecity",permanentPincode:"pepin",nomineeName:"nomineeName",nomineeMobile:"nomineeMobile",nomineeAadhaar:"nomineeAadhaar",agree:"agree"},h=o.find(c=>n[c]);if(!h)return;const m=document.getElementById(d[h]);m&&(m.scrollIntoView({behavior:"smooth",block:"center"}),setTimeout(()=>{var c;return(c=m.focus)==null?void 0:c.call(m,{preventScroll:!0})},300))}function C(n){n&&n.preventDefault();const o=M();F(o);const d=Object.keys(o).length===0;b(d),d||L(o)}function R(){!N&&!window.confirm("Form is not validated or has errors. Print anyway?")||window.print()}function D(){if(window.confirm("Reset all fields and clear saved draft?")){g(y),F({}),b(!1);try{localStorage.removeItem(v)}catch{}}}function B(){const n=new Blob([JSON.stringify(i,null,2)],{type:"application/json"}),o=URL.createObjectURL(n),d=document.createElement("a");d.href=o,d.download="bank-kyc-form.json",d.click(),URL.revokeObjectURL(o)}const s=p.useMemo(()=>{const n=i.occupation==="Other"&&i.occupationOther.trim()?`Other (${i.occupationOther})`:i.occupation;return{...i,occupationDisplay:n}},[i]);return e.jsxs(r.Wrapper,{children:[e.jsx(V,{}),e.jsxs(r.Header,{className:"no-print",children:[e.jsx("h2",{children:"Bank KYC Form"}),e.jsx("p",{children:"Client-side form with validation, autosave, and print-ready summary."})]}),e.jsxs(r.Form,{onSubmit:C,className:"no-print",children:[e.jsxs(r.Section,{children:[e.jsx(r.SectionTitle,{children:"Personal Details"}),e.jsxs(r.Grid,{$cols:2,children:[e.jsxs(r.Field,{children:[e.jsx("label",{htmlFor:"fullName",children:"Full Name *"}),e.jsx("input",{id:"fullName",type:"text",value:i.fullName,onChange:n=>a("fullName",n.target.value),placeholder:"As per Aadhaar/PAN",autoComplete:"name"}),t.fullName&&e.jsx(r.Error,{children:t.fullName})]}),e.jsxs(r.Field,{children:[e.jsx("label",{htmlFor:"fatherOrSpouseName",children:"Father/Spouse Name"}),e.jsx("input",{id:"fatherOrSpouseName",type:"text",value:i.fatherOrSpouseName,onChange:n=>a("fatherOrSpouseName",n.target.value)})]}),e.jsxs(r.Field,{children:[e.jsx("label",{htmlFor:"dob",children:"Date of Birth *"}),e.jsx("input",{id:"dob",type:"date",value:i.dob,onChange:n=>a("dob",n.target.value)}),t.dob&&e.jsx(r.Error,{children:t.dob})]}),e.jsxs(r.Field,{children:[e.jsx("label",{htmlFor:"gender",children:"Gender"}),e.jsxs("select",{id:"gender",value:i.gender,onChange:n=>a("gender",n.target.value),children:[e.jsx("option",{children:"Male"}),e.jsx("option",{children:"Female"}),e.jsx("option",{children:"Other"}),e.jsx("option",{children:"Prefer not to say"})]})]}),e.jsxs(r.Field,{children:[e.jsx("label",{htmlFor:"maritalStatus",children:"Marital Status"}),e.jsxs("select",{id:"maritalStatus",value:i.maritalStatus,onChange:n=>a("maritalStatus",n.target.value),children:[e.jsx("option",{children:"Single"}),e.jsx("option",{children:"Married"}),e.jsx("option",{children:"Divorced"}),e.jsx("option",{children:"Widowed"})]})]})]})]}),e.jsxs(r.Section,{children:[e.jsx(r.SectionTitle,{children:"Contact"}),e.jsxs(r.Grid,{$cols:2,children:[e.jsxs(r.Field,{children:[e.jsx("label",{htmlFor:"mobile",children:"Mobile *"}),e.jsx("input",{id:"mobile",type:"tel",inputMode:"numeric",placeholder:"10-digit",value:i.mobile,onChange:n=>a("mobile",n.target.value)}),t.mobile&&e.jsx(r.Error,{children:t.mobile})]}),e.jsxs(r.Field,{children:[e.jsx("label",{htmlFor:"email",children:"Email"}),e.jsx("input",{id:"email",type:"email",value:i.email,onChange:n=>a("email",n.target.value)}),t.email&&e.jsx(r.Error,{children:t.email})]})]})]}),e.jsxs(r.Section,{children:[e.jsx(r.SectionTitle,{children:"Identity"}),e.jsxs(r.Grid,{$cols:2,children:[e.jsxs(r.Field,{children:[e.jsx("label",{htmlFor:"aadhaar",children:"Aadhaar *"}),e.jsx("input",{id:"aadhaar",type:"text",inputMode:"numeric",maxLength:12,placeholder:"12 digits",value:i.aadhaar,onChange:n=>a("aadhaar",n.target.value.replace(/\D/g,""))}),t.aadhaar&&e.jsx(r.Error,{children:t.aadhaar})]}),e.jsxs(r.Field,{children:[e.jsx("label",{htmlFor:"pan",children:"PAN"}),e.jsx("input",{id:"pan",type:"text",maxLength:10,value:i.pan,onChange:n=>a("pan",n.target.value.toUpperCase().replace(/[^A-Z0-9]/g,"")),placeholder:"ABCDE1234F"}),t.pan&&e.jsx(r.Error,{children:t.pan})]})]})]}),e.jsxs(r.Section,{children:[e.jsx(r.SectionTitle,{children:"Address"}),e.jsx(r.SubTitle,{children:"Present Address *"}),e.jsxs(r.Grid,{$cols:2,children:[e.jsxs(r.Field,{className:"span2",children:[e.jsx("label",{htmlFor:"pa1",children:"Line 1"}),e.jsx("input",{id:"pa1",type:"text",value:i.presentAddress.line1,onChange:n=>a("presentAddress.line1",n.target.value)})]}),e.jsxs(r.Field,{className:"span2",children:[e.jsx("label",{htmlFor:"pa2",children:"Line 2"}),e.jsx("input",{id:"pa2",type:"text",value:i.presentAddress.line2,onChange:n=>a("presentAddress.line2",n.target.value)})]}),e.jsxs(r.Field,{children:[e.jsx("label",{htmlFor:"pacity",children:"City"}),e.jsx("input",{id:"pacity",type:"text",value:i.presentAddress.city,onChange:n=>a("presentAddress.city",n.target.value)})]}),e.jsxs(r.Field,{children:[e.jsx("label",{htmlFor:"pastate",children:"State"}),e.jsx("input",{id:"pastate",type:"text",value:i.presentAddress.state,onChange:n=>a("presentAddress.state",n.target.value)})]}),e.jsxs(r.Field,{children:[e.jsx("label",{htmlFor:"papin",children:"Pincode"}),e.jsx("input",{id:"papin",type:"text",inputMode:"numeric",maxLength:6,value:i.presentAddress.pincode,onChange:n=>a("presentAddress.pincode",n.target.value.replace(/\D/g,""))})]})]}),(t.presentAddress||t.presentAddressCityState||t.presentPincode)&&e.jsx(r.ErrorBlock,{children:t.presentAddress||t.presentAddressCityState||t.presentPincode}),e.jsx(r.CopyRow,{children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:i.sameAsPresent,onChange:n=>a("sameAsPresent",n.target.checked)}),e.jsx("span",{children:"Permanent address is same as present"})]})}),!i.sameAsPresent&&e.jsxs(e.Fragment,{children:[e.jsx(r.SubTitle,{children:"Permanent Address *"}),e.jsxs(r.Grid,{$cols:2,children:[e.jsxs(r.Field,{className:"span2",children:[e.jsx("label",{htmlFor:"pe1",children:"Line 1"}),e.jsx("input",{id:"pe1",type:"text",value:i.permanentAddress.line1,onChange:n=>a("permanentAddress.line1",n.target.value)})]}),e.jsxs(r.Field,{className:"span2",children:[e.jsx("label",{htmlFor:"pe2",children:"Line 2"}),e.jsx("input",{id:"pe2",type:"text",value:i.permanentAddress.line2,onChange:n=>a("permanentAddress.line2",n.target.value)})]}),e.jsxs(r.Field,{children:[e.jsx("label",{htmlFor:"pecity",children:"City"}),e.jsx("input",{id:"pecity",type:"text",value:i.permanentAddress.city,onChange:n=>a("permanentAddress.city",n.target.value)})]}),e.jsxs(r.Field,{children:[e.jsx("label",{htmlFor:"pestate",children:"State"}),e.jsx("input",{id:"pestate",type:"text",value:i.permanentAddress.state,onChange:n=>a("permanentAddress.state",n.target.value)})]}),e.jsxs(r.Field,{children:[e.jsx("label",{htmlFor:"pepin",children:"Pincode"}),e.jsx("input",{id:"pepin",type:"text",inputMode:"numeric",maxLength:6,value:i.permanentAddress.pincode,onChange:n=>a("permanentAddress.pincode",n.target.value.replace(/\D/g,""))})]})]}),(t.permanentAddress||t.permanentCityState||t.permanentPincode)&&e.jsx(r.ErrorBlock,{children:t.permanentAddress||t.permanentCityState||t.permanentPincode})]})]}),e.jsxs(r.Section,{children:[e.jsx(r.SectionTitle,{children:"Employment"}),e.jsxs(r.Grid,{$cols:2,children:[e.jsxs(r.Field,{children:[e.jsx("label",{htmlFor:"occupation",children:"Occupation"}),e.jsxs("select",{id:"occupation",value:i.occupation,onChange:n=>a("occupation",n.target.value),children:[e.jsx("option",{children:"Salaried"}),e.jsx("option",{children:"Self-Employed"}),e.jsx("option",{children:"Student"}),e.jsx("option",{children:"Homemaker"}),e.jsx("option",{children:"Retired"}),e.jsx("option",{children:"Other"})]})]}),O&&e.jsxs(r.Field,{children:[e.jsx("label",{htmlFor:"occupationOther",children:"Please specify"}),e.jsx("input",{id:"occupationOther",type:"text",value:i.occupationOther,onChange:n=>a("occupationOther",n.target.value)})]}),e.jsxs(r.Field,{children:[e.jsx("label",{htmlFor:"incomeRange",children:"Annual Income Range"}),e.jsxs("select",{id:"incomeRange",value:i.incomeRange,onChange:n=>a("incomeRange",n.target.value),children:[e.jsx("option",{children:"0-3 LPA"}),e.jsx("option",{children:"3-6 LPA"}),e.jsx("option",{children:"6-10 LPA"}),e.jsx("option",{children:"10-15 LPA"}),e.jsx("option",{children:"15-25 LPA"}),e.jsx("option",{children:"25+ LPA"})]})]})]})]}),e.jsxs(r.Section,{children:[e.jsx(r.SectionTitle,{children:"Nominee"}),e.jsxs(r.Grid,{$cols:2,children:[e.jsxs(r.Field,{children:[e.jsx("label",{htmlFor:"nomineeName",children:"Name *"}),e.jsx("input",{id:"nomineeName",type:"text",value:i.nominee.name,onChange:n=>a("nominee.name",n.target.value)}),t.nomineeName&&e.jsx(r.Error,{children:t.nomineeName})]}),e.jsxs(r.Field,{children:[e.jsx("label",{htmlFor:"nomineeRelation",children:"Relation"}),e.jsxs("select",{id:"nomineeRelation",value:i.nominee.relation,onChange:n=>a("nominee.relation",n.target.value),children:[e.jsx("option",{children:"Father"}),e.jsx("option",{children:"Mother"}),e.jsx("option",{children:"Spouse"}),e.jsx("option",{children:"Son"}),e.jsx("option",{children:"Daughter"}),e.jsx("option",{children:"Other"})]})]}),e.jsxs(r.Field,{children:[e.jsx("label",{htmlFor:"nomineeMobile",children:"Mobile"}),e.jsx("input",{id:"nomineeMobile",type:"tel",inputMode:"numeric",value:i.nominee.mobile,onChange:n=>a("nominee.mobile",n.target.value)}),t.nomineeMobile&&e.jsx(r.Error,{children:t.nomineeMobile})]}),e.jsxs(r.Field,{children:[e.jsx("label",{htmlFor:"nomineeAadhaar",children:"Aadhaar"}),e.jsx("input",{id:"nomineeAadhaar",type:"text",inputMode:"numeric",maxLength:12,value:i.nominee.aadhaar,onChange:n=>a("nominee.aadhaar",n.target.value.replace(/\D/g,""))}),t.nomineeAadhaar&&e.jsx(r.Error,{children:t.nomineeAadhaar})]})]})]}),e.jsxs(r.Section,{children:[e.jsx(r.SectionTitle,{children:"Declaration"}),e.jsx(r.Declaration,{children:e.jsxs("label",{children:[e.jsx("input",{id:"agree",type:"checkbox",checked:i.agree,onChange:n=>a("agree",n.target.checked)}),e.jsx("span",{children:"I hereby declare that the information provided is true and correct to the best of my knowledge."})]})}),t.agree&&e.jsx(r.Error,{children:t.agree})]}),N&&Object.keys(t).length===0&&e.jsx(r.Success,{className:"no-print",children:"All good ✅ — ready to print."}),e.jsxs(r.Actions,{className:"no-print",children:[e.jsx("button",{type:"button",onClick:B,children:"Export JSON"}),e.jsx("button",{type:"submit",onClick:C,children:"Validate"}),e.jsx("button",{type:"button",onClick:R,children:"Print"}),e.jsx("button",{type:"button",className:"danger",onClick:D,children:"Reset"})]})]}),e.jsxs(r.PrintArea,{id:"kyc-print-root",ref:E,className:"print-only",children:[e.jsx("h3",{children:"Know Your Customer (KYC) Application"}),e.jsxs(r.PrintGrid,{children:[e.jsxs("div",{children:[e.jsx("b",{children:"Full Name:"})," ",s.fullName||"-"]}),e.jsxs("div",{children:[e.jsx("b",{children:"Father/Spouse:"})," ",s.fatherOrSpouseName||"-"]}),e.jsxs("div",{children:[e.jsx("b",{children:"DOB:"})," ",s.dob||"-"]}),e.jsxs("div",{children:[e.jsx("b",{children:"Gender:"})," ",s.gender||"-"]}),e.jsxs("div",{children:[e.jsx("b",{children:"Marital Status:"})," ",s.maritalStatus||"-"]}),e.jsxs("div",{children:[e.jsx("b",{children:"Mobile:"})," ",s.mobile||"-"]}),e.jsxs("div",{children:[e.jsx("b",{children:"Email:"})," ",s.email||"-"]}),e.jsxs("div",{children:[e.jsx("b",{children:"Aadhaar:"})," ",s.aadhaar||"-"]}),e.jsxs("div",{children:[e.jsx("b",{children:"PAN:"})," ",s.pan||"-"]}),e.jsxs("div",{className:"span2",children:[e.jsx("b",{children:"Present Address:"})," ",[s.presentAddress.line1,s.presentAddress.line2,s.presentAddress.city,s.presentAddress.state,s.presentAddress.pincode].filter(Boolean).join(", ")||"-"]}),e.jsxs("div",{className:"span2",children:[e.jsx("b",{children:"Permanent Address:"})," ",[s.permanentAddress.line1,s.permanentAddress.line2,s.permanentAddress.city,s.permanentAddress.state,s.permanentAddress.pincode].filter(Boolean).join(", ")||"-"]}),e.jsxs("div",{children:[e.jsx("b",{children:"Occupation:"})," ",s.occupationDisplay||"-"]}),e.jsxs("div",{children:[e.jsx("b",{children:"Income Range:"})," ",s.incomeRange||"-"]}),e.jsxs("div",{className:"span2",children:[e.jsx("b",{children:"Nominee:"})," ",[s.nominee.name,s.nominee.relation].filter(Boolean).join(" / ")||"-"]}),e.jsxs("div",{children:[e.jsx("b",{children:"Nominee Mobile:"})," ",s.nominee.mobile||"-"]}),e.jsxs("div",{children:[e.jsx("b",{children:"Nominee Aadhaar:"})," ",s.nominee.aadhaar||"-"]})]}),e.jsxs(r.PrintFooter,{children:[e.jsxs("div",{children:[e.jsx("b",{children:"Date:"})," ",new Date().toLocaleDateString()]}),e.jsxs("div",{className:"sign-row",children:[e.jsx("span",{children:"Customer Signature"}),e.jsx("span",{children:"Bank Official"})]})]})]})]})};export{H as default};
