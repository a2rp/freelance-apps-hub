import{d as i,m as ae,r as p,j as e}from"./index-CaRw1yxc.js";import{j as ne,k as ie,l as oe,m as E,n as le}from"./index-DQ6G1o-D.js";const m="var(--bg)",w="var(--card)",b="var(--text)",j="var(--muted)",d="var(--border)",g="var(--radius)",R="var(--shadow)",O="var(--accent)",v="var(--danger, #e5484d)",W="var(--good, #18a058)",_="var(--info, #2b6cb0)",de=ae`
  0%   { transform: rotateY(0deg);    }
  50%  { transform: rotateY(540deg);  }
  100% { transform: rotateY(1080deg); }
`,n={Wrapper:i.div`
        display: grid;
        gap: 16px;
        padding: 16px;
        background: ${m};
        color: ${b};
        min-height: 100%;
        max-width: 1440px;
        margin: 0 auto;
    `,Header:i.header`
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
            color: ${j};
            font-size: 14px;
        }
    `,Badges:i.div`
        display: flex;
        gap: 8px;
        .badge {
            background: ${w};
            border: 1px solid ${d};
            padding: 6px 10px;
            border-radius: 999px;
            font-size: 12px;
            box-shadow: ${R};
        }
    `,Layout:i.div`
        display: grid;
        grid-template-columns: 1.1fr 1.3fr;
        gap: 16px;
        @media (max-width: 1024px) {
            grid-template-columns: 1fr;
        }
    `,Left:i.div`
        display: grid;
        gap: 16px;
    `,Right:i.div`
        display: grid;
        gap: 16px;
    `,Card:i.div`
        background: ${w};
        border: 1px solid ${d};
        border-radius: ${g};
        box-shadow: ${R};
        padding: 16px;

        h3 {
            margin: 0 0 12px 0;
            font-size: 16px;
        }
    `,CoinBox:i.div`
        display: grid;
        place-items: center;
        padding: 24px 0;
    `,Coin:i.div`
        width: 120px;
        height: 120px;
        position: relative;
        transform-style: preserve-3d;
        transition: transform 0.3s ease;
        perspective: 800px;

        &.spin {
            animation: ${de} 0.42s ease-in-out both;
        }

        .face {
            position: absolute;
            inset: 0;
            display: grid;
            place-items: center;
            border-radius: 50%;
            border: 1px solid ${d};
            background: ${m};
            color: ${b};
            font-size: 56px;
            font-weight: 700;
            backface-visibility: hidden;
            box-shadow: ${R};
        }
        .front {
            transform: rotateY(0deg);
        }
        .back {
            transform: rotateY(180deg);
        }
    `,Controls:i.div`
        display: grid;
        gap: 12px;

        .row {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 12px;
            @media (max-width: 720px) {
                grid-template-columns: 1fr;
            }
        }

        .field {
            display: grid;
            gap: 6px;
        }
        .lab {
            font-size: 13px;
            color: ${j};
        }

        .inline {
            display: flex;
            gap: 10px;
            align-items: center;
        }
        .mono {
            font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
        }

        input[type="range"] {
            width: 100%;
        }

        input[type="number"] {
            width: 100%;
            border: 1px solid ${d};
            background: ${m};
            color: ${b};
            border-radius: calc(${g} - 2px);
            padding: 10px 12px;
            font: inherit;
            outline: none;
            transition: border-color 0.15s ease;
        }
        input[type="number"]:focus {
            border-color: ${O};
        }

        button {
            appearance: none;
            border: 1px solid ${d};
            background: ${w};
            color: ${b};
            padding: 10px 14px;
            border-radius: ${g};
            cursor: pointer;
            font: inherit;
            transition: transform 0.02s ease-in-out, border-color 0.15s ease,
                background 0.15s ease;
            display: inline-flex;
            gap: 8px;
            align-items: center;

            &:hover {
                border-color: ${O};
            }
            &:active {
                transform: translateY(1px);
            }
            &:disabled {
                opacity: 0.55;
                cursor: not-allowed;
            }
        }

        .ghost {
            background: ${m};
        }
        .danger {
            border-color: ${v};
            color: ${v};
        }
    `,Stats:i.div`
        display: grid;
        grid-template-columns: repeat(5, minmax(0, 1fr));
        gap: 12px;
        @media (max-width: 1024px) {
            grid-template-columns: repeat(2, 1fr);
        }

        .item {
            border: 1px solid ${d};
            background: ${m};
            border-radius: ${g};
            padding: 12px;
            box-shadow: ${R};
            display: grid;
            gap: 6px;
        }
        .k {
            color: ${j};
            font-size: 12px;
        }
        .v {
            font-weight: 600;
        }
        .muted {
            color: ${j};
            font-weight: 400;
            font-size: 12px;
            margin-left: 4px;
        }
    `,HdrRow:i.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        flex-wrap: wrap;

        .chk {
            display: inline-flex;
            gap: 8px;
            align-items: center;
            color: ${j};
        }

        .row-right {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;

            button {
                appearance: none;
                border: 1px solid ${d};
                background: ${w};
                color: ${b};
                padding: 8px 12px;
                border-radius: ${g};
                cursor: pointer;
                font: inherit;
                display: inline-flex;
                gap: 8px;
                align-items: center;
                transition: transform 0.02s ease-in-out, border-color 0.15s ease;
                &:hover {
                    border-color: ${O};
                }
                &:active {
                    transform: translateY(1px);
                }
                &:disabled {
                    opacity: 0.55;
                    cursor: not-allowed;
                }
            }
            .ghost {
                background: ${m};
            }
            .danger {
                border-color: ${v};
                color: ${v};
            }
        }
    `,Empty:i.div`
        padding: 24px;
        border: 1px dashed ${d};
        border-radius: ${g};
        color: ${j};
        text-align: center;
    `,Table:i.div`
        display: grid;
        gap: 0;

        .thead,
        .tbody {
            display: grid;
        }
        .tr {
            display: grid;
            grid-template-columns: 44px 1fr 1fr 1.4fr 1fr 80px;
            border-bottom: 1px solid ${d};
            align-items: center;
            min-height: 42px;
            @media (max-width: 900px) {
                grid-template-columns: 36px 1fr 1fr 1.4fr 1fr 72px;
            }
        }
        .th,
        .td {
            padding: 8px 10px;
        }
        .th {
            font-size: 12px;
            color: ${j};
        }
        .td.right {
            text-align: right;
        }

        .pill {
            display: inline-block;
            padding: 4px 8px;
            font-size: 12px;
            border-radius: 999px;
            border: 1px solid ${d};
            background: ${m};
        }
        .pill.green {
            color: ${W};
            border-color: ${W};
        }
        .pill.blue {
            color: ${_};
            border-color: ${_};
        }

        .cbox {
            text-align: center;
        }
        .icon {
            border: 1px solid ${d};
            background: ${m};
            color: ${b};
            padding: 6px 8px;
            border-radius: ${g};
            cursor: pointer;
            transition: border-color 0.15s ease;
        }
        .icon:hover {
            border-color: ${O};
        }
        .icon.danger {
            color: ${v};
            border-color: ${v};
        }
    `,ModalBackdrop:i.div`
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.35);
        display: grid;
        place-items: center;
        z-index: 50;
    `,Modal:i.div`
        width: min(480px, 92vw);
        background: ${w};
        color: ${b};
        border: 1px solid ${d};
        border-radius: ${g};
        box-shadow: ${R};
        padding: 16px;

        h3 {
            margin: 0 0 8px 0;
            font-size: 16px;
        }
        p.muted {
            color: ${j};
            margin: 0 0 16px 0;
        }

        .actions {
            display: flex;
            gap: 10px;
            justify-content: flex-end;
        }
        button {
            appearance: none;
            border: 1px solid ${d};
            background: ${w};
            color: ${b};
            padding: 10px 14px;
            border-radius: ${g};
            cursor: pointer;
            font: inherit;
        }
        .ghost {
            background: ${m};
        }
        .danger {
            border-color: ${v};
            color: ${v};
        }
    `},J="coinFlipper_history_v1",K="coinFlipper_prefs_v1",C=(a,x,o)=>Math.min(o,Math.max(x,a));function P(a){return Math.random()<a?"H":"T"}function ce(a){try{const x=new Date(a),o=new Intl.DateTimeFormat("en-US",{month:"short",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1,timeZone:"Asia/Kolkata"}).formatToParts(x),l=N=>{var y;return((y=o.find(A=>A.type===N))==null?void 0:y.value)||""};return`${l("month")} ${l("day")}, ${l("year")} ${l("hour")}:${l("minute")}:${l("second")} hrs`}catch{return a}}function z(){return Math.random().toString(36).slice(2,8)+Date.now().toString(36).slice(-4)}const xe=()=>{const[a,x]=p.useState(()=>{try{return JSON.parse(localStorage.getItem(K)||"null")??{pHeads:50,batch:10,autoRun:!1,speed:400}}catch{return{pHeads:50,batch:10,autoRun:!1,speed:400}}}),[o,l]=p.useState(()=>{try{return JSON.parse(localStorage.getItem(J)||"[]")}catch{return[]}}),[N,y]=p.useState(!1),[A,D]=p.useState("H"),[F,k]=p.useState({}),[S,f]=p.useState({open:!1,title:"",message:"",onConfirm:null}),M=p.useRef(null),T=C(Number(a.pHeads)||0,0,100)/100,I=C(Number(a.batch)||1,1,500);p.useEffect(()=>{try{localStorage.setItem(K,JSON.stringify(a))}catch{}},[a]),p.useEffect(()=>{try{localStorage.setItem(J,JSON.stringify(o))}catch{}},[o]),p.useEffect(()=>(a.autoRun&&Y(),B),[]);const u=p.useMemo(()=>{const s=o.length;let t=0,r=0,c={face:null,len:0},h={face:null,len:0},H=null,$=0;for(const L of o)L.result==="H"?t++:r++,L.result===H?$++:($>(h.len||0)&&(h={face:H,len:$}),H=L.result,$=1);$>(h.len||0)&&(h={face:H,len:$}),c={face:H,len:$||0};const te=s?(t/s*100).toFixed(2):"0.00",re=s?(r/s*100).toFixed(2):"0.00";return{total:s,h:t,t:r,hPct:te,tPct:re,currentStreak:c,longestStreak:h}},[o]);function U(s=T){N||(y(!0),setTimeout(()=>{const t=P(s);D(t),y(!1),l(r=>[{id:z(),result:t,weight:Math.round(s*100),ts:new Date().toISOString()},...r])},420))}function Z(){const s=I,t=T;if(!Number.isFinite(s)||s<1)return;y(!0),setTimeout(()=>y(!1),Math.min(600,s*5+100));const r=[],c=z();for(let h=0;h<s;h++)r.push({id:z(),result:P(t),weight:Math.round(t*100),ts:new Date().toISOString(),batch:!0,batchSize:s,batchId:c});l(h=>[...r.reverse(),...h])}function Y(){B(),x(s=>({...s,autoRun:!0})),M.current=setInterval(()=>{const s=[],t=Math.min(I,10),r="auto-"+z();for(let c=0;c<t;c++)s.push({id:z(),result:P(T),weight:Math.round(T*100),ts:new Date().toISOString(),batch:!0,batchSize:t,batchId:r});D(s[0].result),l(c=>[...s.reverse(),...c])},C(Number(a.speed)||400,100,2e3))}function B(){M.current&&clearInterval(M.current),M.current=null,x(s=>({...s,autoRun:!1}))}function q(){a.autoRun?B():Y()}function G(){f({open:!0,title:"Clear all flips?",message:"This will remove the entire history. This action cannot be undone.",onConfirm:()=>{l([]),k({}),f({open:!1})}})}function Q(){const s=Object.keys(F).filter(t=>F[t]);s.length!==0&&f({open:!0,title:`Delete ${s.length} selected?`,message:"Only the selected rows will be removed from history.",onConfirm:()=>{l(t=>t.filter(r=>!s.includes(r.id))),k({}),f({open:!1})}})}function V(s){f({open:!0,title:"Remove this entry?",message:"This flip result will be permanently deleted from history.",onConfirm:()=>{l(t=>t.filter(r=>r.id!==s)),k(t=>{const r={...t};return delete r[s],r}),f({open:!1})}})}function X(s){if(!!!s.target.checked)return k({});const r={};for(const c of o)r[c.id]=!0;k(r)}function ee(s){k(t=>({...t,[s]:!t[s]}))}const se=Object.values(F).some(Boolean);return e.jsxs(n.Wrapper,{children:[e.jsxs(n.Header,{children:[e.jsxs("div",{children:[e.jsx("h1",{children:"Coin Flipper"}),e.jsx("p",{children:"Weighted flips, batch simulation, streak stats, and a tidy history — all offline in your browser."})]}),e.jsxs(n.Badges,{children:[e.jsx("span",{className:"badge",children:"Weighted"}),e.jsx("span",{className:"badge",children:"Animated"}),e.jsx("span",{className:"badge",children:"Local-only"})]})]}),e.jsxs(n.Layout,{children:[e.jsx(n.Left,{children:e.jsxs(n.Card,{children:[e.jsx(n.CoinBox,{children:e.jsxs(n.Coin,{className:N?"spin":"","data-face":A,children:[e.jsx("div",{className:"face front",children:"H"}),e.jsx("div",{className:"face back",children:"T"})]})}),e.jsxs(n.Controls,{children:[e.jsxs("div",{className:"row",children:[e.jsx("button",{onClick:()=>U(),disabled:N,children:"Flip once"}),e.jsxs("button",{className:"ghost",onClick:Z,disabled:N,children:["Flip × ",I]}),e.jsx("button",{onClick:q,className:a.autoRun?"danger":"",children:a.autoRun?e.jsxs(e.Fragment,{children:[e.jsx(ne,{})," Stop Auto"]}):e.jsxs(e.Fragment,{children:[e.jsx(ie,{})," Start Auto"]})})]}),e.jsxs("div",{className:"grid",children:[e.jsxs("label",{className:"field",children:[e.jsx("div",{className:"lab",children:"Heads probability"}),e.jsxs("div",{className:"inline",children:[e.jsx("input",{type:"range",min:0,max:100,value:a.pHeads,onChange:s=>x(t=>({...t,pHeads:C(+s.target.value,0,100)}))}),e.jsxs("span",{className:"mono",children:[a.pHeads,"%"]})]})]}),e.jsxs("label",{className:"field",children:[e.jsx("div",{className:"lab",children:"Batch size (max 500)"}),e.jsx("input",{type:"number",min:1,max:500,value:I,onChange:s=>x(t=>({...t,batch:C(+s.target.value||1,1,500)}))})]}),e.jsxs("label",{className:"field",children:[e.jsx("div",{className:"lab",children:"Auto speed (ms)"}),e.jsx("input",{type:"number",min:100,max:2e3,step:50,value:a.speed,onChange:s=>x(t=>({...t,speed:C(+s.target.value||400,100,2e3)}))})]})]})]})]})}),e.jsxs(n.Right,{children:[e.jsxs(n.Card,{children:[e.jsx("h3",{children:"Stats"}),e.jsxs(n.Stats,{children:[e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"k",children:"Total"}),e.jsx("div",{className:"v",children:u.total})]}),e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"k",children:"Heads"}),e.jsxs("div",{className:"v",children:[u.h," ",e.jsxs("span",{className:"muted",children:["(",u.hPct,"%)"]})]})]}),e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"k",children:"Tails"}),e.jsxs("div",{className:"v",children:[u.t," ",e.jsxs("span",{className:"muted",children:["(",u.tPct,"%)"]})]})]}),e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"k",children:"Current Streak"}),e.jsxs("div",{className:"v",children:[u.currentStreak.face||"-"," ",e.jsxs("span",{className:"muted",children:["× ",u.currentStreak.len||0]})]})]}),e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"k",children:"Longest Streak"}),e.jsxs("div",{className:"v",children:[u.longestStreak.face||"-"," ",e.jsxs("span",{className:"muted",children:["× ",u.longestStreak.len||0]})]})]})]})]}),e.jsxs(n.Card,{children:[e.jsxs(n.HdrRow,{children:[e.jsxs("h3",{children:[e.jsx(oe,{})," History"]}),e.jsxs("div",{className:"row-right",children:[e.jsxs("label",{className:"chk",children:[e.jsx("input",{type:"checkbox",onChange:X,checked:o.length>0&&Object.keys(F).length===o.length}),e.jsx("span",{children:"Select all"})]}),e.jsxs("button",{className:"ghost",onClick:Q,disabled:!se,children:[e.jsx(E,{})," Delete Selected"]}),e.jsxs("button",{className:"danger",onClick:G,disabled:o.length===0,children:[e.jsx(le,{})," Clear All"]})]})]}),o.length===0?e.jsxs(n.Empty,{children:["No flips yet. Hit ",e.jsx("strong",{children:"Flip once"})," or run a batch."]}):e.jsxs(n.Table,{role:"table","aria-label":"Flip history",children:[e.jsx("div",{className:"thead",role:"rowgroup",children:e.jsxs("div",{className:"tr",role:"row",children:[e.jsx("div",{className:"th cbox",role:"columnheader"}),e.jsx("div",{className:"th",role:"columnheader",children:"Result"}),e.jsx("div",{className:"th",role:"columnheader",children:"Weight"}),e.jsx("div",{className:"th",role:"columnheader",children:"When"}),e.jsx("div",{className:"th",role:"columnheader",children:"Batch"}),e.jsx("div",{className:"th right",role:"columnheader",children:"Actions"})]})}),e.jsx("div",{className:"tbody",role:"rowgroup",children:o.map(s=>e.jsxs("div",{className:"tr",role:"row",children:[e.jsx("div",{className:"td cbox",role:"cell",children:e.jsx("input",{type:"checkbox",checked:!!F[s.id],onChange:()=>ee(s.id)})}),e.jsx("div",{className:"td",role:"cell",children:e.jsx("span",{className:`pill ${s.result==="H"?"green":"blue"}`,children:s.result==="H"?"Heads":"Tails"})}),e.jsxs("div",{className:"td",role:"cell",children:[s.weight,"%"]}),e.jsx("div",{className:"td",role:"cell",children:ce(s.ts)}),e.jsx("div",{className:"td",role:"cell",children:s.batch?`Yes (${s.batchSize})`:"No"}),e.jsx("div",{className:"td right",role:"cell",children:e.jsx("button",{className:"icon danger",title:"Remove this entry",onClick:()=>V(s.id),children:e.jsx(E,{})})})]},s.id))})]})]})]})]}),S.open&&e.jsx(n.ModalBackdrop,{onClick:()=>f({open:!1}),children:e.jsxs(n.Modal,{onClick:s=>s.stopPropagation(),role:"dialog","aria-modal":"true",children:[e.jsx("h3",{children:S.title}),e.jsx("p",{className:"muted",children:S.message}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{className:"ghost",onClick:()=>f({open:!1}),children:"Cancel"}),e.jsx("button",{className:"danger",onClick:()=>{var s;try{(s=S.onConfirm)==null||s.call(S)}finally{}},children:"Confirm"})]})]})})]})};export{xe as default};
