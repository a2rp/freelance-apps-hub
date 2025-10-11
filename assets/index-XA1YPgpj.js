import{f as _,d as n,r as l,j as a}from"./index-BexlHE4a.js";const N="var(--text, #eaeaea)",j="var(--muted, #a8a8a8)",m="var(--border, #242424)",T="var(--accent, #22c55e)",E="var(--accent-2, #10b981)",G="var(--danger, #ef4444)",B="var(--radius, 16px)",W="var(--shadow, 0 8px 28px rgba(0,0,0,0.30))",k="var(--maxw, 1100px)",e={};e.GlobalStyles=_`
  :root {
    --bg: #0b0b0b;
    --card: #121212;
    --text: #eaeaea;
    --muted: #a8a8a8;
    --border: #242424;
    --accent: #22c55e;
    --accent-2: #10b981;
    --danger: #ef4444;
    --radius: 16px;
    --shadow: 0 8px 28px rgba(0, 0, 0, 0.30);
    --maxw: 1100px;
  }

  /* Print-only QR (robust) */
  @media print {
    body { background: #fff; color: #000; }
    body * { visibility: hidden !important; }
    .qr-wrap, .qr-wrap * { visibility: visible !important; }
    .qr-wrap {
      position: fixed; inset: 0; display: grid; place-items: center; padding: 0 !important;
    }
    .qr {
      width: 600px !important; height: 600px !important; box-shadow: none !important;
    }
  }
`;e.Wrapper=n.div``;e.SiteHeader=n.header`
    max-width: ${k};
    margin: 0 auto;
    padding: 24px 16px;
    h1 {
        margin: 0 0 6px;
        letter-spacing: 0.2px;
    }
    .muted {
        color: ${j};
    }
`;e.SiteFooter=n.footer`
    max-width: ${k};
    margin: 0 auto;
    padding: 24px 16px;
    small a {
        color: #fff;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }
`;e.Container=n.main`
    max-width: ${k};
    margin: 0 auto 36px;
    padding: 0 16px 24px;
`;e.Layout=n.div`
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 24px;
    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
    }
`;e.Col=n.div`
    display: grid;
    gap: 24px;
`;e.Card=n.section`
    background: linear-gradient(180deg, #131313, #0f0f0f);
    border: 1px solid ${m};
    border-radius: ${B};
    box-shadow: ${W};
    padding: 24px;
    margin-bottom: 24px;

    &.sticky {
        position: sticky;
        top: 18px;
        @media (max-width: 1024px) {
            position: static;
        }
    }

    .presetsWrapper {
        margin-top: 20px;
        .presets {
            margin-top: 15px;
        }
    }
`;e.CardHeader=n.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 10px;
    margin-bottom: 16px;
`;e.CardTitle=n.h2`
    margin: 0 0 16px;
`;e.Grid=n.div`
    display: grid;
    gap: 16px;

    &.g-3 {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    @media (max-width: 960px) {
        &.g-3 {
            grid-template-columns: 1fr 1fr;
        }
    }
    @media (max-width: 640px) {
        &.g-3 {
            grid-template-columns: 1fr;
        }
    }
`;e.Field=n.label`
    display: grid;
    gap: 6px;
    span {
        font-size: 13px;
        color: ${j};
    }
    input {
        height: 42px;
        padding: 0 12px;
        border-radius: 12px;
        border: 1px solid ${m};
        background: #101010;
        color: ${N};
        outline: none;
        transition: border-color 0.18s, box-shadow 0.18s;
        &:focus {
            border-color: ${E};
            box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.15);
        }
    }
`;e.Chips=n.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`;e.Chip=n.button`
    padding: 6px 12px;
    border: 1px solid ${m};
    border-radius: 20px;
    font-size: 13px;
    color: ${j};
    background: #0e0e0e;
    cursor: pointer;
    user-select: none;
    transition: border-color 0.18s, color 0.18s, transform 0.05s;
    &:hover {
        border-color: ${T};
        color: #d9ffe9;
    }
    &:active {
        transform: translateY(1px);
    }
`;e.QrWrap=n.div`
    display: grid;
    place-items: center;
    padding: 16px;
`;e.QrCanvas=n.canvas`
    width: 420px;
    height: 420px;
    border-radius: 18px;
    background: #fff;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.35);
`;e.Summary=n.div`
    margin-top: 16px;
    display: grid;
    gap: 16px;
    background: #0f0f0f;
    border: 1px dashed ${m};
    border-radius: 12px;
    padding: 16px;
    .muted {
        color: ${j};
    }
`;e.Code=n.code`
    display: block;
    width: 100%;
    border: 1px solid ${m};
    border-radius: 10px;
    background: #0a0a0a;
    padding: 10px;
    word-break: break-all;
    cursor: pointer;
`;e.Actions=n.div`
    margin-top: 16px;
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
`;e.Button=n.button`
    height: 42px;
    padding: 0 16px;
    border-radius: 10px;
    border: 1px solid ${m};
    background: ${t=>t.$variant==="danger"?"linear-gradient(180deg, #2a1111, #200f0f)":(t.$variant==="secondary","linear-gradient(180deg, #1a1a1a, #141414)")};
    color: ${N};
    cursor: pointer;
    transition: border-color 0.18s, transform 0.05s;
    &:hover {
        border-color: ${t=>t.$variant==="danger"?G:T};
    }
    &:active {
        transform: translateY(1px);
    }
`;e.Toast=n.div`
    position: fixed;
    bottom: 18px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(20, 20, 20, 0.95);
    color: #eaeaea;
    border: 1px solid #2a2a2a;
    padding: 10px 14px;
    border-radius: 10px;
    z-index: 9999;
    font: 14px system-ui;
`;const H=[99,199,499,999],V=["Thanks","Fees","Subscription","Donation"],z=t=>/^[a-zA-Z0-9.\-_]{2,}@[a-zA-Z0-9.\-_]{2,}$/.test(t||"");function R({vpa:t,payeeName:i,amount:s,note:p,txnRef:x}){const d=new URLSearchParams;return t&&d.set("pa",t),i&&d.set("pn",i),s&&d.set("am",Number(s).toFixed(2)),p&&d.set("tn",p),d.set("cu","INR"),x&&d.set("tr",x),`upi://pay?${d.toString()}`}function M(t,i=420){const s="https://api.qrserver.com/v1/create-qr-code/",p=new URLSearchParams({size:`${i}x${i}`,data:t,margin:"0"});return`${s}?${p.toString()}`}function U(t,i,s){t.fillStyle="#f2f2f2",t.fillRect(0,0,i,i),t.fillStyle="#333",t.textAlign="center",t.textBaseline="middle",t.font="16px system-ui, -apple-system, Segoe UI, Arial",t.fillText(s,i/2,i/2)}function Y(){const[t,i]=l.useState(""),[s,p]=l.useState(""),[x,d]=l.useState(""),[u,v]=l.useState(""),[f,w]=l.useState(""),[b,$]=l.useState(""),[S,P]=l.useState(""),I=H,A=V,y=l.useRef(null);function F(r){P(r),setTimeout(()=>P(""),1400)}l.useEffect(()=>{const r=y.current;if(!r)return;const c=r.getContext("2d"),o=r.width;if(c.clearRect(0,0,o,o),c.fillStyle="#ffffff",c.fillRect(0,0,o,o),!t||!z(t)){U(c,o,"Enter a valid UPI ID (name@bank)"),$("");return}const h=R({vpa:t,payeeName:s,amount:u,note:f,txnRef:x});$(h);const D=M(h,o),g=new Image;g.crossOrigin="anonymous",g.onload=()=>c.drawImage(g,0,0,o,o),g.onerror=()=>U(c,o,"QR render failed. Check connection."),g.src=D},[t,s,u,f,x]);async function C(){const r=R({vpa:t,payeeName:s,amount:u,note:f,txnRef:x});try{await navigator.clipboard.writeText(r),F("UPI link copied.")}catch{window.prompt("Copy UPI link:",r)}}function q(){const r=y.current;if(!r)return;const c=(t||"upi").replace(/[^a-z0-9@._-]/gi,"_"),o=u?`_${Number(u).toFixed(2)}`:"",h=document.createElement("a");h.download=`upi_qr_${c}${o}.png`,h.href=r.toDataURL("image/png"),h.click()}function L(){confirm("Reset all fields?")&&(i(""),p(""),d(""),v(""),w(""))}function Q(){window.print()}return a.jsxs(e.Wrapper,{children:[a.jsx(e.GlobalStyles,{}),a.jsxs(e.SiteHeader,{children:[a.jsx("h1",{children:"UPI QR Generator"}),a.jsx("p",{className:"muted",children:"Create a scannable UPI QR with quick amount & note presets. (Client-side)"})]}),a.jsx(e.Container,{children:a.jsxs(e.Layout,{children:[a.jsxs(e.Col,{children:[a.jsxs(e.Card,{children:[a.jsx(e.CardTitle,{children:"Payee"}),a.jsxs(e.Grid,{className:"g-3",children:[a.jsxs(e.Field,{children:[a.jsx("span",{children:"UPI ID (VPA) *"}),a.jsx("input",{placeholder:"name@bank",value:t,onChange:r=>i(r.target.value.trim())})]}),a.jsxs(e.Field,{children:[a.jsx("span",{children:"Payee Name"}),a.jsx("input",{placeholder:"e.g., Ashish Ranjan",value:s,onChange:r=>p(r.target.value)})]}),a.jsxs(e.Field,{children:[a.jsx("span",{children:"Transaction Ref (optional)"}),a.jsx("input",{placeholder:"auto or leave blank",value:x,onChange:r=>d(r.target.value)})]})]})]}),a.jsxs(e.Card,{children:[a.jsx(e.CardHeader,{children:a.jsx(e.CardTitle,{children:"Payment"})}),a.jsxs(e.Grid,{className:"g-3",children:[a.jsxs(e.Field,{children:[a.jsx("span",{children:"Amount (₹)"}),a.jsx("input",{type:"number",min:"0",step:"0.01",placeholder:"0.00",value:u,onChange:r=>v(r.target.value)})]}),a.jsxs(e.Field,{children:[a.jsx("span",{children:"Note (Message)"}),a.jsx("input",{maxLength:60,placeholder:"e.g., Consultation Fees",value:f,onChange:r=>w(r.target.value)})]})]}),a.jsxs("div",{className:"presetsWrapper",children:[a.jsx("small",{className:"muted",children:"Tap a preset to fill quickly."}),a.jsxs("div",{className:"presets",children:[a.jsx(e.Chips,{children:I.map(r=>a.jsxs(e.Chip,{type:"button",onClick:()=>v(String(r)),children:["₹",r]},r))}),a.jsx(e.Chips,{children:A.map(r=>a.jsx(e.Chip,{type:"button",onClick:()=>w(r),children:r},r))})]})]})]})]}),a.jsx(e.Col,{children:a.jsxs(e.Card,{className:"sticky",children:[a.jsxs(e.CardHeader,{children:[a.jsx(e.CardTitle,{children:"QR Preview"}),a.jsx("small",{className:"muted",children:"Updates live. Use Download or Print for sharing."})]}),a.jsx(e.QrWrap,{className:"qr-wrap",children:a.jsx(e.QrCanvas,{ref:y,width:420,height:420,className:"qr","aria-label":"UPI QR preview"})}),a.jsx(e.Summary,{children:a.jsxs("div",{children:[a.jsx("span",{className:"muted",children:"UPI Link"}),a.jsx(e.Code,{title:b?"Click to copy":"",role:"button",tabIndex:0,onClick:b?C:void 0,onKeyDown:r=>{r.key==="Enter"&&b&&C()},children:b})]})}),a.jsxs(e.Actions,{children:[a.jsx(e.Button,{onClick:q,children:"Download PNG"}),a.jsx(e.Button,{$variant:"secondary",onClick:C,children:"Copy UPI Link"}),a.jsx(e.Button,{$variant:"secondary",onClick:Q,children:"Print"}),a.jsx(e.Button,{$variant:"danger",onClick:L,children:"Reset"})]})]})})]})}),a.jsx(e.SiteFooter,{children:a.jsxs("small",{children:["© 2025 |"," ",a.jsx("a",{href:"https://www.ashishranjan.net",target:"_blank",rel:"noreferrer",children:"Ashish Ranjan"})]})}),S&&a.jsx(e.Toast,{children:S})]})}export{Y as default};
