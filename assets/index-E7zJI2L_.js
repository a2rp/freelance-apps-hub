import{d as p,r as m,j as t,y as k}from"./index-DoJIY-L5.js";const $="var(--card, #111)",b="var(--text, #e9e9e9)",y="var(--muted, #b7b7b7)",w="var(--border, #222)",f="var(--accent, #22c55e)",S="var(--radius, 16px)",C="var(--shadow, 0 8px 30px rgba(0,0,0,0.25))",u={Wrapper:p.div`
        max-width: var(--maxw, 960px);
        margin: 0 auto;
        padding: var(--space-5, 32px) var(--space-4, 24px) var(--space-6, 48px);
        color: ${b};
    `,Header:p.header`
        margin-bottom: var(--space-5, 32px);

        h1 {
            font-size: clamp(22px, 4vw, 30px);
            line-height: 1.2;
            margin: 0 0 6px;
        }

        p {
            color: ${y};
            margin: 0;
        }
    `,Panel:p.section`
        display: grid;
        gap: var(--space-4, 24px);
    `,FormRow:p.div`
        display: grid;
        gap: 10px;

        label {
            color: ${y};
            font-size: 14px;
        }
    `,AmountInput:p.input`
        background: ${$};
        color: ${b};
        border: 1px solid ${w};
        border-radius: ${S};
        padding: 14px 16px;
        font-size: 18px;
        outline: none;
        box-shadow: ${C};
        width: 100%;
        &:focus {
            border-color: ${f};
            box-shadow: 0 0 0 2px color-mix(in srgb, ${f} 30%, transparent);
        }
    `,Controls:p.div`
        display: grid;
        gap: 14px;
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));

        select {
            width: 100%;
            background: ${$};
            color: ${b};
            border: 1px solid ${w};
            border-radius: ${S};
            padding: 10px 12px;
            outline: none;
            &:focus {
                border-color: ${f};
            }
        }

        .checkbox {
            display: flex;
            align-items: center;
            gap: 10px;
            color: ${b};
            input {
                accent-color: ${f};
                transform: translateY(1px);
            }
        }
    `,OutputCard:p.div`
        background: ${$};
        border: 1px solid ${w};
        border-radius: ${S};
        box-shadow: ${C};
        padding: 18px;

        .digits {
            display: flex;
            align-items: baseline;
            gap: 8px;
            color: ${y};
            margin-bottom: 8px;

            strong {
                color: ${b};
                font-size: clamp(20px, 4vw, 28px);
                letter-spacing: 0.3px;
            }
        }

        .words {
            margin: 0;
            font-size: clamp(18px, 3.2vw, 22px);
            line-height: 1.5;
        }
    `,Actions:p.div`
        display: flex;
        gap: 10px;
        margin-top: 14px;

        button {
            background: ${f};
            color: #031a0d;
            border: 1px solid ${f};
            border-radius: 12px;
            padding: 10px 14px;
            font-weight: 600;
            cursor: pointer;
            transition: transform 0.05s ease;
            &:active {
                transform: translateY(1px);
            }
        }
    `,Note:p.div`
        color: ${y};
        font-size: 14px;
        p {
            margin: 0;
        }
    `};if(typeof document<"u"&&!document.querySelector('style[data-rupee-words-print="true"]')){const n=document.createElement("style");n.setAttribute("data-rupee-words-print","true"),n.innerHTML=`
  @media print {
    /* Hide everything by default */
    body * { visibility: hidden !important; }

    /* Show only the RupeeWords card and its descendants */
    #rupeeWordsPrint, #rupeeWordsPrint * { visibility: visible !important; }

    /* Position the card nicely for a single clean page */
    #rupeeWordsPrint {
      position: absolute !important;
      inset: 0 auto auto 0 !important;
      left: 0; right: 0; top: 0;
      margin: 20mm auto !important;
      max-width: 180mm;
      background: #fff !important;
      color: #000 !important;
      border: none !important;
      box-shadow: none !important;
      padding: 30px !important;
    }

    /* Never print UI controls or hints */
    .no-print { display: none !important; }

    /* Readable print typography */
    #rupeeWordsPrint .digits {
      color: #000 !important;
      margin-bottom: 6mm !important;
    }
    #rupeeWordsPrint .words {
      font-size: 22px !important;
      line-height: 1.6 !important;
      color: #000 !important;
    }

    /* White page */
    body { background: #fff !important; }

    /* Optional: remove default page margins if your browser honors @page */
    @page {
      margin: 12mm;
    }
  }`,document.head.appendChild(n)}const x=["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"],g=["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];function h(n,o){if(n===0)return"";const e=[],r=Math.floor(n/100),a=n%100;if(r&&(e.push(`${x[r]} hundred`),a&&e.push("")),a)if(a<20)e.push(x[a]);else{const s=Math.floor(a/10),d=a%10;d?e.push(o?`${g[s]}-${x[d]}`:`${g[s]} ${x[d]}`):e.push(g[s])}return e.filter(Boolean).join(" ").trim()}function I(n,o){if(n===0)return"zero";const e=[],r=Math.floor(n/1e7);n%=1e7;const a=Math.floor(n/1e5);n%=1e5;const s=Math.floor(n/1e3);n%=1e3;const d=n;return r&&e.push(`${h(r,o)} crore`),a&&e.push(`${h(a,o)} lakh`),s&&e.push(`${h(s,o)} thousand`),d&&e.push(`${h(d,o)}`),e.join(" ").trim()}function M(n,o){if(n===0)return"zero";const e=[],r=Math.floor(n/1e9);n%=1e9;const a=Math.floor(n/1e6);n%=1e6;const s=Math.floor(n/1e3);n%=1e3;const d=n;return r&&e.push(`${h(r,o)} billion`),a&&e.push(`${h(a,o)} million`),s&&e.push(`${h(s,o)} thousand`),d&&e.push(`${h(d,o)}`),e.join(" ").trim()}function A(n){return n.split(" ").map(o=>o.split("-").map(e=>e&&e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()).join("-")).join(" ")}function E(n,o){let e=String(n||"").replace(/[^\d.]/g,"");e===""&&(e="0");let r=Number(e);(Number.isNaN(r)||r<0)&&(r=0);const a=Math.floor(r),s=Math.round((r-a)*100);let c=`${(o.system==="international"?M:I)(a,o.hyphenate)} rupees`;if(o.includePaise&&s>0){const j=s<20?x[s]:(()=>{const i=Math.floor(s/10),l=s%10;return l?o.hyphenate?`${g[i]}-${x[l]}`:`${g[i]} ${x[l]}`:g[i]})();c+=` and ${j} paise`}return o.suffixOnly&&(c+=" only"),o.caseStyle==="upper"?c=c.toUpperCase():c=A(c),{cleanAmount:r.toFixed(o.includePaise?2:0),words:c}}const N="rupeeWords::settings",P="rupeeWords::amount",W={system:"indian",caseStyle:"title",suffixOnly:!0,includePaise:!0,hyphenate:!0};function T(){const[n,o]=m.useState("0"),[e,r]=m.useState(W),a=i=>i==="indian"?"₹":"Rs.",s=m.useMemo(()=>a(e.system),[e.system]);m.useEffect(()=>{try{const i=JSON.parse(localStorage.getItem(N)||"null");i&&r({...W,...i});const l=localStorage.getItem(P);l!==null&&o(l)}catch{}},[]),m.useEffect(()=>{localStorage.setItem(N,JSON.stringify(e))},[e]),m.useEffect(()=>{localStorage.setItem(P,n)},[n]);const{cleanAmount:d,words:v}=m.useMemo(()=>E(n,e),[n,e]),c=async()=>{try{await navigator.clipboard.writeText(v),k.success("Copied amount in words!")}catch{k.error("Copy failed")}},j=()=>{window.print()};return t.jsxs(u.Wrapper,{children:[t.jsxs(u.Header,{children:[t.jsx("h1",{children:"RupeeWords"}),t.jsx("p",{children:"Convert any ₹ amount to words — Indian/International format, with paise & “Only”."})]}),t.jsxs(u.Panel,{children:[t.jsxs(u.FormRow,{children:[t.jsx("label",{htmlFor:"amount",children:"Amount (₹)"}),t.jsx(u.AmountInput,{id:"amount",inputMode:"decimal",placeholder:"0",value:n,onChange:i=>o(i.target.value)})]}),t.jsxs(u.Controls,{children:[t.jsxs("div",{children:[t.jsx("label",{children:"Numbering"}),t.jsxs("select",{value:e.system,onChange:i=>r(l=>({...l,system:i.target.value})),children:[t.jsx("option",{value:"indian",children:"Indian (crore/lakh)"}),t.jsx("option",{value:"international",children:"International (million/billion)"})]})]}),t.jsxs("div",{children:[t.jsx("label",{children:"Case"}),t.jsxs("select",{value:e.caseStyle,onChange:i=>r(l=>({...l,caseStyle:i.target.value})),children:[t.jsx("option",{value:"title",children:"Title Case"}),t.jsx("option",{value:"upper",children:"UPPERCASE"})]})]}),t.jsx("div",{children:t.jsxs("label",{className:"checkbox",children:[t.jsx("input",{type:"checkbox",checked:e.includePaise,onChange:i=>r(l=>({...l,includePaise:i.target.checked}))}),"Include Paise"]})}),t.jsx("div",{children:t.jsxs("label",{className:"checkbox",children:[t.jsx("input",{type:"checkbox",checked:e.hyphenate,onChange:i=>r(l=>({...l,hyphenate:i.target.checked}))}),"Hyphenate (twenty-one)"]})}),t.jsx("div",{children:t.jsxs("label",{className:"checkbox",children:[t.jsx("input",{type:"checkbox",checked:e.suffixOnly,onChange:i=>r(l=>({...l,suffixOnly:i.target.checked}))}),"Add “Only” suffix"]})})]}),t.jsxs(u.OutputCard,{id:"rupeeWordsPrint",children:[t.jsxs("div",{className:"digits",children:[t.jsx("span",{children:s}),t.jsx("strong",{children:d})]}),t.jsx("p",{className:"words",children:v}),t.jsxs(u.Actions,{className:"no-print",children:[t.jsx("button",{onClick:c,children:"Copy"}),t.jsx("button",{onClick:j,children:"Print"})]})]}),t.jsx(u.Note,{className:"no-print",children:t.jsx("p",{children:"Tip: Toggle Indian/International formats. Output is local-only (saved in your browser)."})})]})]})}export{T as default};
