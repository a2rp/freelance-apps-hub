import{d as l,r as x,j as e}from"./index-9nNI8k3I.js";const b="var(--text, #eaeaea)",u="var(--muted, #a8a8a8)",g="var(--border, #242424)",f="var(--accent, #22c55e)",j="var(--radius, 16px)",N="var(--shadow, 0 8px 30px rgba(0,0,0,0.25))",S="var(--maxw, 960px)",$=l.section`
    max-width: ${S};
    margin: 0 auto;
    padding: 24px;
    color: ${b};

    .head {
        margin-bottom: 16px;
        h3 {
            margin: 0 0 6px;
        }
        .muted {
            color: ${u};
            font-size: 0.95rem;
        }
    }
`,k=l.div`
    background: var(--card, #111);
    border: 1px solid ${g};
    border-radius: ${j};
    box-shadow: ${N};
    padding: 16px;
    margin-bottom: 18px;
`,D=l.div`
    display: grid;
    grid-template-columns: 1fr 1fr auto;
    gap: 12px;
    align-items: end;

    label {
        display: grid;
        gap: 8px;
    }

    .actions {
        display: flex;
        gap: 10px;
        justify-content: flex-end;
    }

    @media (max-width: 720px) {
        grid-template-columns: 1fr;
        .actions {
            justify-content: flex-start;
        }
    }
`,T=l.input`
    background: #0f0f0f;
    color: ${b};
    border: 1px solid ${g};
    border-radius: 12px;
    padding: 12px 14px;
    outline: none;
    width: 100%;

    &:focus {
        border-color: ${f};
        box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.15);
    }
`,C=l.button`
    border: 1px solid ${t=>t.$tone==="ghost"?g:f};
    background: ${t=>t.$tone==="ghost"?"transparent":f};
    color: ${t=>t.$tone==="ghost"?b:"#041107"};
    padding: 11px 14px;
    border-radius: 12px;
    cursor: pointer;
    font-weight: 600;

    &:hover {
        filter: brightness(1.05);
    }
`,I=l.p`
    margin: 8px 2px 0;
    color: ${u};
    font-size: 0.95rem;
`,B=l.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;
    padding: 18px;
    margin: 6px 0 14px;
    background: #0f0f0f;
    border: 1px solid ${g};
    border-radius: ${j};

    .sep {
        opacity: 0.6;
        font-weight: 700;
        font-size: 1.6rem;
    }

    .block {
        text-align: center;
        min-width: 88px;
    }
    .block strong {
        display: block;
        font-size: clamp(28px, 6vw, 44px);
        line-height: 1.1;
        letter-spacing: 1px;
    }
    .block span {
        color: ${u};
        font-size: 0.9rem;
    }

    @media (max-width: 560px) {
        gap: 10px;
        .block {
            min-width: 70px;
        }
    }
`,M=l.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;

    @media (max-width: 720px) {
        grid-template-columns: repeat(2, 1fr);
    }
`,z=l.div`
    background: var(--card, #111);
    border: 1px solid ${g};
    border-radius: 14px;
    padding: 12px;

    .label {
        display: block;
        color: ${u};
        font-size: 0.9rem;
        margin-bottom: 6px;
    }
    .val {
        font-weight: 600;
        font-size: 1.05rem;
    }
`,s={Wrapper:$,Card:k,Row:D,Input:T,Button:C,Help:I,Countdown:B,Grid:M,Stat:z},m="ctb.settings";function E(t){if(!t)return null;const a=new Date,n=new Date(t),c=n.getMonth(),d=n.getDate();let i=new Date(a.getFullYear(),c,d,0,0,0,0);i.getTime()<=a.getTime()&&(i=new Date(a.getFullYear()+1,c,d,0,0,0,0));const o=i.getFullYear()-n.getFullYear(),h=i.toLocaleDateString("en-IN",{weekday:"long"});return{target:i,ageTurning:o,weekday:h}}function Y(t){t<0&&(t=0);const a=Math.floor(t/1e3),n=Math.floor(a/86400),c=Math.floor(a%86400/3600),d=Math.floor(a%3600/60),i=a%60;return{days:n,hours:c,minutes:d,seconds:i}}function R(){const[t,a]=x.useState(""),[n,c]=x.useState(""),[d,i]=x.useState(()=>new Date);x.useEffect(()=>{try{const r=localStorage.getItem(m);if(r){const p=JSON.parse(r);p!=null&&p.name&&a(p.name),p!=null&&p.dob&&c(p.dob)}}catch{}},[]),x.useEffect(()=>{const r=JSON.stringify({name:t,dob:n});localStorage.setItem(m,r)},[t,n]),x.useEffect(()=>{const r=setInterval(()=>i(new Date),1e3);return()=>clearInterval(r)},[]);const o=x.useMemo(()=>E(n),[n]),h=x.useMemo(()=>o?Y(o.target.getTime()-d.getTime()):null,[o,d]),w=r=>r.toLocaleDateString("en-IN",{year:"numeric",month:"short",day:"2-digit"}),y=()=>{a(""),c(""),localStorage.removeItem(m)},v=t?`Countdown To ${t}'s Birthday`:"Countdown To Birthday";return e.jsxs(s.Wrapper,{children:[e.jsxs("header",{className:"head",children:[e.jsx("h3",{children:v}),e.jsx("p",{className:"muted",children:"Set your DOB once. The timer keeps running on every open."})]}),e.jsxs(s.Card,{children:[e.jsxs(s.Row,{children:[e.jsxs("label",{children:[e.jsx("span",{children:"Name (optional)"}),e.jsx(s.Input,{type:"text",placeholder:"e.g., Ashish",value:t,onChange:r=>a(r.target.value)})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Date of Birth"}),e.jsx(s.Input,{type:"date",value:n,onChange:r=>c(r.target.value)})]}),e.jsx("div",{className:"actions",children:e.jsx(s.Button,{type:"button",onClick:y,$tone:"ghost",children:"Reset"})})]}),!n&&e.jsx(s.Help,{children:"Tip: only the month & day are used for the countdown. Year helps compute age turning."})]}),n&&o&&h&&e.jsxs(e.Fragment,{children:[e.jsxs(s.Countdown,{children:[e.jsxs("div",{className:"block",children:[e.jsx("strong",{children:String(h.days).padStart(2,"0")}),e.jsx("span",{children:"Days"})]}),e.jsx("span",{className:"sep",children:":"}),e.jsxs("div",{className:"block",children:[e.jsx("strong",{children:String(h.hours).padStart(2,"0")}),e.jsx("span",{children:"Hours"})]}),e.jsx("span",{className:"sep",children:":"}),e.jsxs("div",{className:"block",children:[e.jsx("strong",{children:String(h.minutes).padStart(2,"0")}),e.jsx("span",{children:"Minutes"})]}),e.jsx("span",{className:"sep",children:":"}),e.jsxs("div",{className:"block",children:[e.jsx("strong",{children:String(h.seconds).padStart(2,"0")}),e.jsx("span",{children:"Seconds"})]})]}),e.jsxs(s.Grid,{children:[e.jsxs(s.Stat,{children:[e.jsx("span",{className:"label",children:"Next Birthday"}),e.jsx("span",{className:"val",children:w(o.target)})]}),e.jsxs(s.Stat,{children:[e.jsx("span",{className:"label",children:"Weekday"}),e.jsx("span",{className:"val",children:o.weekday})]}),e.jsxs(s.Stat,{children:[e.jsx("span",{className:"label",children:"Turning"}),e.jsx("span",{className:"val",children:o.ageTurning})]}),e.jsxs(s.Stat,{children:[e.jsx("span",{className:"label",children:"Time Now"}),e.jsx("span",{className:"val",children:d.toLocaleTimeString("en-IN")})]})]})]}),n&&!o&&e.jsx(s.Help,{children:"Couldn't parse the date. Re-enter DOB."})]})}export{R as default};
