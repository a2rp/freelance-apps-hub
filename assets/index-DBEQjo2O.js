import{d as n,r as o,j as e}from"./index-BqroQIHt.js";const E="var(--bg, #0b0b0b)",X="var(--card, #111)",g="var(--text, #e9e9e9)",l="var(--muted, #b7b7b7)",c="var(--border, #222)",m="var(--accent, #22c55e)",O="var(--danger, #ef4444)",b="var(--radius, 16px)",q="var(--shadow, 0 8px 30px rgba(0,0,0,0.25))",h="var(--space-2, 10px)",i="var(--space-3, 16px)",N="var(--space-4, 24px)",t={Wrapper:n.div`
        width: 100%;
        display: grid;
        place-items: start center;
        padding: ${N};
        color: ${g};
    `,Card:n.section`
        width: min(720px, 100%);
        background: ${X};
        border: 1px solid ${c};
        border-radius: ${b};
        box-shadow: ${q};
        padding: ${N};
    `,Title:n.h2`
        margin: 0 0 ${h};
        font-size: 24px;
        line-height: 1.2;
    `,Subtitle:n.p`
        margin: 0 0 ${N};
        color: ${l};
    `,Settings:n.div`
        display: flex;
        gap: ${i};
        align-items: flex-end;
        flex-wrap: wrap;
        margin-bottom: ${i};
    `,Field:n.div`
        display: grid;
        gap: 6px;
        min-width: 120px;
    `,Label:n.label`
        font-size: 12px;
        color: ${l};
    `,NumInput:n.input`
        padding: 10px 12px;
        background: ${E};
        color: ${g};
        border: 1px solid ${c};
        border-radius: ${b};
        outline: none;
        width: 140px;
        &:focus {
            border-color: ${m};
        }
        &::placeholder {
            color: ${l};
        }
    `,RangeNote:n.span`
        color: ${l};
        border-left: 1px solid ${c};
        padding-left: ${i};
    `,Row:n.div`
        display: flex;
        gap: ${i};
        margin-bottom: ${i};
        flex-wrap: wrap;
    `,Input:n.input`
        flex: 1 1 220px;
        min-width: 200px;
        padding: 12px 14px;
        background: ${E};
        color: ${g};
        border: 1px solid ${c};
        border-radius: ${b};
        outline: none;
        &:focus {
            border-color: ${m};
        }
        &::placeholder {
            color: ${l};
        }
    `,Button:n.button`
        padding: 12px 16px;
        border-radius: ${b};
        border: 1px solid ${c};
        background: ${a=>a.$variant==="ghost"?"transparent":m};
        color: ${a=>a.$variant==="ghost"?g:"#0b0b0b"};
        cursor: pointer;
        transition: transform 0.02s ease-in-out, opacity 0.2s ease-in-out;
        &:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
        &:active {
            transform: translateY(1px);
        }
    `,Meta:n.div`
        display: flex;
        gap: ${i};
        align-items: center;
        color: ${l};
        margin-bottom: ${h};
        span + span {
            border-left: 1px solid ${c};
            padding-left: ${i};
        }
    `,Message:n.p`
        margin: 0 0 ${i};
        &.good {
            color: ${m};
        }
        &.bad {
            color: ${O};
        }
        &.warn {
            color: ${g};
        }
    `,H3:n.h3`
        margin: ${i} 0 ${h};
        font-size: 16px;
        color: ${l};
        font-weight: 600;
    `,History:n.ul`
        list-style: none;
        padding: 0;
        margin: 0;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
        gap: ${h};
        li {
            border: 1px solid ${c};
            border-radius: ${b};
            padding: 10px 12px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: #0f0f0f;
        }
        span {
            color: ${l};
        }
    `},M=1,I=100,$=10;function G(a,f){return Math.floor(Math.random()*(f-a+1))+a}const K=()=>{const[a,f]=o.useState(M),[d,H]=o.useState(I),[T,U]=o.useState(String(M)),[k,B]=o.useState(String(I)),[j,Y]=o.useState(()=>G(M,I)),[L,R]=o.useState(""),[v,A]=o.useState(0),[w,F]=o.useState([]),[u,y]=o.useState("playing"),[S,p]=o.useState(""),z=Math.max(0,$-v);function C(s=!0,r=a,x=d){Y(G(r,x)),R(""),A(0),F([]),y("playing"),p(""),s||(f(r),H(x))}function D(){const s=parseInt(String(T).trim(),10),r=parseInt(String(k).trim(),10);if(Number.isNaN(s)||Number.isNaN(r)){p("Enter valid numbers for Lower and Upper.");return}if(s>=r){p("Lower must be less than Upper.");return}C(!1,s,r)}function _(s){if(s.preventDefault(),u!=="playing")return;const r=parseInt(String(L).trim(),10);if(Number.isNaN(r)||r<a||r>d){p(`Enter a number between ${a} and ${d}.`);return}const x=v+1,W=[...w,r];if(F(W),A(x),r===j){y("won"),p(`🎯 Correct! ${r} is the number.`);return}if(x>=$){y("lost"),p(`Out of tries. The number was ${j}.`);return}p(r<j?"Too low.":"Too high.")}const P=u==="won"?"good":u==="lost"?"bad":S?"warn":"";return e.jsx(t.Wrapper,{children:e.jsxs(t.Card,{children:[e.jsx(t.Title,{children:"Guess the Number"}),e.jsxs(t.Subtitle,{children:["Pick a range and guess the secret number. You have ",$," tries."]}),e.jsxs(t.Settings,{children:[e.jsxs(t.Field,{children:[e.jsx(t.Label,{htmlFor:"lower",children:"Lower"}),e.jsx(t.NumInput,{id:"lower",type:"number",value:T,onChange:s=>U(s.target.value),"aria-label":"Lower limit"})]}),e.jsxs(t.Field,{children:[e.jsx(t.Label,{htmlFor:"upper",children:"Upper"}),e.jsx(t.NumInput,{id:"upper",type:"number",value:k,onChange:s=>B(s.target.value),"aria-label":"Upper limit"})]}),e.jsx(t.Button,{type:"button",onClick:D,children:"Apply Range"}),e.jsxs(t.RangeNote,{children:["Range: ",a,"–",d]})]}),e.jsx("form",{onSubmit:_,children:e.jsxs(t.Row,{children:[e.jsx(t.Input,{type:"number",inputMode:"numeric",placeholder:`Enter ${a}–${d}`,min:a,max:d,value:L,onChange:s=>R(s.target.value),disabled:u!=="playing","aria-label":"Your guess"}),e.jsx(t.Button,{type:"submit",disabled:u!=="playing",children:"Guess"}),e.jsx(t.Button,{type:"button",onClick:()=>C(!0),$variant:"ghost",children:"New Game"})]})}),e.jsxs(t.Meta,{children:[e.jsxs("span",{children:["Attempts: ",v,"/",$]}),e.jsxs("span",{children:["Left: ",z]}),e.jsxs("span",{children:["Range: ",a,"–",d]})]}),S&&e.jsx(t.Message,{className:P,children:S}),w.length>0&&e.jsxs(e.Fragment,{children:[e.jsx(t.H3,{children:"Your Guesses"}),e.jsx(t.History,{children:w.map((s,r)=>e.jsxs("li",{children:[e.jsxs("span",{children:["#",r+1]}),e.jsx("b",{children:s})]},r))})]})]})})};export{K as default};
