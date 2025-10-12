import{d,r as x,j as t}from"./index-DwBaBfzX.js";const j="var(--bg)",C="var(--card)",y="var(--text)",M="var(--muted)",b="var(--border)",h="var(--radius)",E="var(--shadow)",O="var(--accent)",K="var(--danger, #e5484d)",c={Page:d.div`
        color: ${y};
        background: ${j};
        min-height: 100%;
        padding: 16px;
    `,AppWrapper:d.div`
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
        display: grid;
        gap: 16px;
    `,HeaderRow:d.div`
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        gap: 16px;

        h1 {
            margin: 0 0 6px 0;
            font-size: 20px;
            line-height: 1.2;
        }
        p {
            margin: 0;
            color: ${M};
            font-size: 14px;
        }
    `,TopActions:d.div`
        display: flex;
        gap: 8px;

        button {
            border: 1px solid ${b};
            background: ${C};
            color: ${y};
            padding: 8px 12px;
            border-radius: ${h};
            box-shadow: ${E};
            cursor: pointer;
        }
        .ghost {
            background: ${j};
        }
    `,Layout:d.div`
        display: grid;
        grid-template-columns: 1.25fr 1fr;
        gap: 16px;

        @media (max-width: 1100px) {
            grid-template-columns: 1fr;
        }
    `,Card:d.div`
        background: ${C};
        border: 1px solid ${b};
        border-radius: ${h};
        box-shadow: ${E};
        padding: 16px;

        h3 {
            margin: 0 0 12px 0;
            font-size: 16px;
        }
    `,MemoryBar:d.div`
        display: grid;
        grid-template-columns: repeat(5, auto) 1fr;
        gap: 8px;
        margin-bottom: 10px;

        button {
            border: 1px solid ${b};
            background: ${j};
            color: ${y};
            padding: 6px 10px;
            border-radius: ${h};
            cursor: pointer;
        }
        .memval {
            justify-self: end;
            color: ${M};
            font-size: 13px;
            align-self: center;
        }
    `,Display:d.div`
        border: 1px solid ${b};
        background: ${j};
        border-radius: ${h};
        padding: 12px;
        margin-bottom: 12px;

        .expr {
            color: ${M};
            font-size: 13px;
            min-height: 18px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            user-select: text;
        }
        .value {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-size: 28px;
            line-height: 1.2;
            padding-top: 6px;
            word-break: break-all;
            user-select: text;
        }
    `,ActionStrip:d.div`
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 8px;
        margin-bottom: 8px;

        button {
            border: 1px solid ${b};
            background: ${C};
            color: ${y};
            padding: 10px 0;
            border-radius: ${h};
            cursor: pointer;
            box-shadow: ${E};
        }
        .danger {
            border-color: ${K};
        }
        .op {
            color: ${O};
        }
    `,FunctionRow:d.div`
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 8px;
        margin-bottom: 8px;

        button {
            border: 1px solid ${b};
            background: ${j};
            color: ${y};
            padding: 8px 0;
            border-radius: ${h};
            cursor: pointer;
        }
    `,Keypad:d.div`
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 8px;

        button {
            border: 1px solid ${b};
            background: ${C};
            color: ${y};
            padding: 16px 0;
            border-radius: ${h};
            cursor: pointer;
            font-size: 16px;
            box-shadow: ${E};
            transition: transform 0.02s ease-in-out, border-color 0.15s ease;
        }
        button:active {
            transform: translateY(1px);
        }
        .op {
            color: ${O};
        }
        .eq {
            background: ${j};
            border-color: ${O};
        }
    `,HistoryList:d.div`
        display: grid;
        gap: 8px;
        max-height: 460px;
        overflow: auto;
    `,HistoryItem:d.div`
        border: 1px solid ${b};
        border-radius: ${h};
        padding: 10px;
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 8px;
        align-items: center;
        background: ${j};

        .lines {
            cursor: pointer;
            user-select: none;
        }

        .expr {
            color: ${M};
            font-size: 13px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .res {
            font-family: ui-monospace, monospace;
            font-size: 15px;
            line-height: 1.3;
        }

        .remove {
            border: 1px solid ${b};
            background: ${C};
            color: ${y};
            border-radius: ${h};
            width: 32px;
            height: 32px;
            cursor: pointer;
            display: inline-grid;
            place-items: center;
        }
    `,Empty:d.div`
        color: ${M};
        font-size: 14px;
        padding: 6px 0 12px;
    `,ModalWrap:d.div`
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.4);
        display: grid;
        place-items: center;
        z-index: 50;
    `,Modal:d.div`
        width: min(420px, 92vw);
        background: ${C};
        color: ${y};
        border: 1px solid ${b};
        border-radius: ${h};
        box-shadow: ${E};
        padding: 16px;

        h4 {
            margin: 0 0 6px;
            font-size: 16px;
        }
        p {
            margin: 0 0 12px;
            color: ${M};
            font-size: 14px;
        }

        .actions {
            display: flex;
            gap: 8px;
            justify-content: flex-end;
        }
        .actions .ghost {
            border: 1px solid ${b};
            background: ${j};
            color: ${y};
            padding: 8px 12px;
            border-radius: ${h};
            cursor: pointer;
        }
        .actions .danger {
            border: 1px solid ${K};
            background: ${C};
            color: ${y};
            padding: 8px 12px;
            border-radius: ${h};
            cursor: pointer;
        }
    `},Y="calculatorApp_history_v1",G="calculatorApp_memory_v1";function k(o){const i=Number(o);return Number.isFinite(i)?i:NaN}function $(o){if(!Number.isFinite(o))return"Error";let i=Number(o.toPrecision(12)).toString();return i.includes("e")&&(i=o.toFixed(12).replace(/\.?0+$/,"")),i.replace(/\.0+$/,"").replace(/(\.\d*?)0+$/,"$1")}const Q={"+":1,"-":1,"*":2,"/":2},v=o=>["+","-","*","/"].includes(o);function ce(o){const i=[],r=[];for(let l=0;l<o.length;l++){const a=o[l];if(typeof a=="number"){i.push(a);continue}if(a==="("){r.push(a);continue}if(a===")"){for(;r.length&&r[r.length-1]!=="(";)i.push(r.pop());r.length&&r[r.length-1]==="("&&r.pop();continue}if(v(a)){for(;r.length&&v(r[r.length-1])&&Q[r[r.length-1]]>=Q[a];)i.push(r.pop());r.push(a);continue}}for(;r.length;)i.push(r.pop());return i}function de(o){try{const i=ce(o),r=[];for(const l of i)if(typeof l=="number")r.push(l);else if(v(l)){const a=r.pop(),u=r.pop();if(u===void 0||a===void 0)return NaN;let m=0;l==="+"&&(m=u+a),l==="-"&&(m=u-a),l==="*"&&(m=u*a),l==="/"&&(m=a===0?NaN:u/a),r.push(m)}return r.length===1?r[0]:NaN}catch{return NaN}}const pe=()=>{const[o,i]=x.useState([]),[r,l]=x.useState("0"),[a,u]=x.useState(!1),[m,R]=x.useState(()=>{try{return JSON.parse(localStorage.getItem(Y)||"[]")}catch{return[]}}),[A,F]=x.useState(()=>{try{const e=JSON.parse(localStorage.getItem(G)||"null");return typeof e=="number"?e:0}catch{return 0}}),[N,P]=x.useState({open:!1,title:"",message:"",onConfirm:null}),V=x.useRef(null),X=x.useMemo(()=>{const e=o.map(n=>typeof n=="number"?$(n):n),s=o[o.length-1];return o.length?s==="("||v(s)?e.join(" ")+" "+r:e.join(" "):r},[o,r]);x.useEffect(()=>{try{localStorage.setItem(Y,JSON.stringify(m.slice(0,50)))}catch{}},[m]),x.useEffect(()=>{try{localStorage.setItem(G,JSON.stringify(A))}catch{}},[A]);const Z=()=>{i([]),l("0"),u(!1)},H=(e,s,n)=>{P({open:!0,title:e,message:s,onConfirm:n})},S=()=>P({open:!1,title:"",message:"",onConfirm:null}),z=x.useCallback((e=o,s=r)=>{const n=k(s);return Number.isNaN(n)?[...e]:[...e,n]},[o,r]),p=e=>{l(s=>a?(i([]),u(!1),e==="0"?"0":e):s==="0"?e:s==="-0"?"-"+e:s+e)},D=()=>{l(e=>a?(i([]),u(!1),"0."):e.includes(".")?e:e+".")},ee=()=>{l(e=>e.startsWith("-")?e.slice(1)||"0":e==="0"?"-0":"-"+e)},T=()=>{const e=k(r);Number.isFinite(e)&&l($(e/100))},W=()=>l("0"),_=()=>{H("Reset Calculator","Clear current expression and entry?",()=>{Z(),S()})},B=()=>{l(e=>a?e:e.length<=1||e.startsWith("-")&&e.length<=2?"0":e.slice(0,-1))},L=e=>{if(u(!1),e==="("){const n=o[o.length-1];i(typeof n=="number"||n===")"?f=>[...f,"*","("]:f=>[...f,"("]);return}const s=o[o.length-1];if(v(s)||s==="("){const n=z(o,r);i(f=>[...n,")"]),l("0");return}i(n=>[...n,")"])},w=e=>{u(!1);const s=o[o.length-1];if(v(s)){i(f=>[...f.slice(0,-1),e]);return}if(s==="("){const f=z(o,r);i([...f,e]),l("0");return}const n=z(o,r);i([...n,e]),l("0")},I=()=>{let e=[...o];const s=e[e.length-1];if(!e.length){const g=k(r);if(!Number.isFinite(g))return;const q=g;R(ae=>[{expr:r,result:$(q),ts:Date.now(),id:U()},...ae]),l($(q)),i([]),u(!0);return}if(v(s)||s==="("){const g=k(r);Number.isFinite(g)&&(e=[...e,g])}const n=de(e),f=$(n),le=e.map(g=>typeof g=="number"?$(g):g).join(" ");R(g=>[{expr:le,result:f,ts:Date.now(),id:U()},...g]),l(f),i([]),u(!0)},J=()=>{const e=k(r);Number.isFinite(e)&&F(e)},te=()=>l($(A||0)),re=()=>{const e=k(r);Number.isFinite(e)&&F(s=>(s||0)+e)},ne=()=>{const e=k(r);Number.isFinite(e)&&F(s=>(s||0)-e)},oe=()=>{H("Clear Memory","Remove stored memory value?",()=>{F(0),S()})},ie=()=>{m.length&&H("Clear History","Delete all saved calculations?",()=>{R([]),S()})},se=e=>{H("Remove Entry","Delete this calculation from history?",()=>{R(s=>s.filter(n=>n.id!==e)),S()})},U=()=>typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():Math.random().toString(36).slice(2);return x.useEffect(()=>{const e=s=>{const n=s.key;if(/^\d$/.test(n)){p(n);return}if(n==="."){D();return}if(n==="+"||n==="-"||n==="*"||n==="/"){w(n);return}if(n==="Enter"||n==="="){s.preventDefault(),I();return}if(n==="Backspace"){B();return}if(n==="Escape"){_();return}if(n==="%"){T();return}if(n==="("||n===")"){L(n);return}if(n.toLowerCase()==="c"){W();return}if(n.toLowerCase()==="m"){J();return}};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[p,D,w,I]),t.jsxs(c.Page,{ref:V,children:[t.jsxs(c.AppWrapper,{children:[t.jsxs(c.HeaderRow,{children:[t.jsxs("div",{children:[t.jsx("h1",{children:"Calculator App"}),t.jsx("p",{children:"Fully functional calculator with history, memory, and keyboard. Expression-safe (no eval)."})]}),t.jsx(c.TopActions,{children:t.jsx("button",{className:"ghost",onClick:ie,title:"Clear all history",children:"Clear History"})})]}),t.jsxs(c.Layout,{children:[t.jsxs(c.Card,{children:[t.jsxs(c.MemoryBar,{children:[t.jsx("button",{onClick:oe,title:"Memory Clear",children:"MC"}),t.jsx("button",{onClick:te,title:"Memory Recall",children:"MR"}),t.jsx("button",{onClick:ne,title:"Memory Minus",children:"M-"}),t.jsx("button",{onClick:re,title:"Memory Plus",children:"M+"}),t.jsx("button",{onClick:J,title:"Memory Store",children:"MS"}),t.jsxs("div",{className:"memval",children:["M: ",$(A||0)]})]}),t.jsxs(c.Display,{children:[t.jsx("div",{className:"expr","aria-label":"expression",children:X}),t.jsx("div",{className:"value","aria-live":"polite",children:r})]}),t.jsxs(c.ActionStrip,{children:[t.jsx("button",{onClick:_,className:"danger",title:"All Clear",children:"AC"}),t.jsx("button",{onClick:W,title:"Clear Entry",children:"C"}),t.jsx("button",{onClick:B,title:"Backspace",children:"DEL"}),t.jsx("button",{onClick:()=>w("/"),className:"op",children:"÷"})]}),t.jsxs(c.FunctionRow,{children:[t.jsx("button",{onClick:()=>L("("),title:"Open parenthesis",children:"("}),t.jsx("button",{onClick:()=>L(")"),title:"Close parenthesis",children:")"}),t.jsx("button",{onClick:T,title:"Percent",children:"%"}),t.jsx("div",{})]}),t.jsxs(c.Keypad,{children:[t.jsx("button",{onClick:()=>p("7"),children:"7"}),t.jsx("button",{onClick:()=>p("8"),children:"8"}),t.jsx("button",{onClick:()=>p("9"),children:"9"}),t.jsx("button",{onClick:()=>w("*"),className:"op",children:"×"}),t.jsx("button",{onClick:()=>p("4"),children:"4"}),t.jsx("button",{onClick:()=>p("5"),children:"5"}),t.jsx("button",{onClick:()=>p("6"),children:"6"}),t.jsx("button",{onClick:()=>w("-"),className:"op",children:"−"}),t.jsx("button",{onClick:()=>p("1"),children:"1"}),t.jsx("button",{onClick:()=>p("2"),children:"2"}),t.jsx("button",{onClick:()=>p("3"),children:"3"}),t.jsx("button",{onClick:()=>w("+"),className:"op",children:"+"}),t.jsx("button",{onClick:ee,title:"Toggle Sign",children:"±"}),t.jsx("button",{onClick:()=>p("0"),children:"0"}),t.jsx("button",{onClick:D,children:"."}),t.jsx("button",{onClick:I,className:"eq",children:"="})]})]}),t.jsxs(c.Card,{children:[t.jsx("h3",{children:"History"}),!m.length&&t.jsx(c.Empty,{children:"Nothing yet. Start calculating."}),t.jsx(c.HistoryList,{children:m.map(e=>t.jsxs(c.HistoryItem,{children:[t.jsxs("div",{className:"lines",onClick:()=>{l(e.result),i([]),u(!0)},title:"Use result",children:[t.jsx("div",{className:"expr",children:e.expr}),t.jsxs("div",{className:"res",children:["= ",e.result]})]}),t.jsx("button",{className:"remove",onClick:()=>se(e.id),title:"Remove",children:"×"})]},e.id))})]})]})]}),N.open&&t.jsx(c.ModalWrap,{children:t.jsxs(c.Modal,{children:[t.jsx("h4",{children:N.title}),t.jsx("p",{children:N.message}),t.jsxs("div",{className:"actions",children:[t.jsx("button",{className:"ghost",onClick:S,children:"Cancel"}),t.jsx("button",{className:"danger",onClick:()=>{var e;(e=N.onConfirm)==null||e.call(N)},children:"Confirm"})]})]})})]})};export{pe as default};
