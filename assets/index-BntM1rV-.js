import{d as b,r as x,j as e}from"./index-DkkjpMCv.js";const w="var(--bg, #0b0b0b)",S="var(--card, #111)",B="var(--text, #e9e9e9)",d="var(--muted, #b7b7b7)",p="var(--border, #222)",h="var(--accent, #22c55e)",q="var(--radius, 16px)",N="var(--shadow, 0 8px 30px rgba(0,0,0,0.25))",K="var(--maxw, 1440px)",y={Wrapper:b.div`
        max-width: ${K};
        margin: 0 auto;
        padding: 24px;

        header {
            margin-bottom: 16px;
            h2 {
                margin: 0 0 6px;
                font-weight: 700;
                letter-spacing: 0.3px;
            }
            .sub {
                margin: 0;
                color: ${d};
                font-size: 0.95rem;
            }
        }
    `,DateRow:b.div`
        background: ${S};
        border: 1px solid ${p};
        border-radius: ${q};
        box-shadow: ${N};
        padding: 12px 16px;
        margin-bottom: 16px;

        display: grid;
        grid-template-columns: 220px 1fr auto;
        align-items: end;
        gap: 12px;

        label {
            display: grid;
            gap: 6px;
            span {
                font-size: 0.9rem;
                color: ${d};
            }
            input[type="date"] {
                background: ${w};
                color: ${B};
                border: 1px solid ${p};
                border-radius: 10px;
                padding: 10px 12px;
                outline: none;
            }
        }
        .pretty {
            /* border: 1px solid #f00; */
            align-self: end;
            color: ${B};
            font-weight: 600;
            height: 40px;
            display: flex;
            align-items: center;
        }
        .info {
            align-self: center;
            font-size: 0.9rem;
            color: ${d};
            white-space: nowrap;
        }

        @media (max-width: 900px) {
            grid-template-columns: 1fr;
            .pretty,
            .info {
                align-self: start;
            }
        }
    `,Controls:b.div`
        background: ${S};
        border: 1px solid ${p};
        border-radius: ${q};
        box-shadow: ${N};
        padding: 16px;
        margin-bottom: 20px;

        display: grid;
        grid-template-columns: repeat(4, minmax(160px, 1fr)) auto;
        gap: 12px;
        align-items: end;

        opacity: ${n=>n.$disabled?.7:1};

        label {
            display: grid;
            gap: 6px;
            span {
                font-size: 0.9rem;
                color: ${d};
            }
            select {
                background: ${w};
                color: ${B};
                border: 1px solid ${p};
                border-radius: 10px;
                padding: 10px 12px;
                outline: none;
            }
            select:disabled {
                opacity: 0.7;
                cursor: not-allowed;
            }
        }

        .btns {
            display: flex;
            gap: 10px;
            align-items: center;

            button {
                border: 1px solid ${p};
                background: ${w};
                color: ${B};
                border-radius: 10px;
                padding: 10px 14px;
                cursor: pointer;
                transition: transform 120ms ease, border-color 120ms ease,
                    opacity 120ms ease;
            }
            button:hover {
                transform: translateY(-1px);
                border-color: ${h};
            }
            .save {
                background: ${h};
                color: #0b0b0b;
                border-color: ${h};
            }
            button:disabled {
                opacity: 0.45;
                cursor: not-allowed;
                transform: none;
            }
        }

        @media (max-width: 960px) {
            grid-template-columns: 1fr 1fr;
            .btns {
                grid-column: 1 / -1;
            }
        }
    `,PlanCard:b.div`
        background: ${S};
        border: 1px solid ${p};
        border-radius: ${q};
        box-shadow: ${N};
        padding: 16px;

        .plan-head {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 12px;
            margin-bottom: 10px;

            .tag {
                margin-left: 8px;
                font-size: 0.8rem;
                background: ${h};
                color: #0b0b0b;
                padding: 2px 8px;
                border-radius: 999px;
            }
            .tag.outline {
                background: transparent;
                color: ${h};
                border: 1px solid ${h};
            }

            .meta {
                display: flex;
                gap: 10px;
                color: ${d};
                font-size: 0.9rem;
                flex-wrap: wrap;
            }
        }

        section {
            margin-top: 12px;
            h4 {
                margin: 0 0 8px;
            }
            ol {
                margin: 0;
                padding-left: 18px;
                display: grid;
                gap: 6px;
            }
            li {
                display: flex;
                justify-content: space-between;
                align-items: baseline;
                padding: 8px 10px;
                border: 1px solid ${p};
                border-radius: 10px;
                background: ${w};
            }
            .ex {
                font-weight: 600;
            }
            .set {
                color: ${d};
            }
        }

        .note {
            margin-top: 16px;
            color: ${d};
            font-size: 0.9rem;
        }
    `,Empty:b.div`
        background: ${S};
        border: 1px solid ${p};
        border-radius: ${q};
        box-shadow: ${N};
        padding: 16px;
        color: ${d};
        margin-bottom: 16px;
    `},f=[{name:"Arm Circles",focus:"mobility",equipment:"BW",type:"time"},{name:"World's Greatest Stretch",focus:"mobility",equipment:"BW",type:"time"},{name:"Cat–Cow",focus:"mobility",equipment:"BW",type:"time"},{name:"Hip Openers",focus:"mobility",equipment:"BW",type:"time"},{name:"Ankle Rolls",focus:"mobility",equipment:"BW",type:"time"},{name:"Push-ups",focus:"upper",equipment:"BW",type:"reps"},{name:"Pike Push-ups",focus:"upper",equipment:"BW",type:"reps"},{name:"DB Shoulder Press",focus:"upper",equipment:"DB",type:"reps"},{name:"DB Rows",focus:"upper",equipment:"DB",type:"reps"},{name:"Band Pull-Aparts",focus:"upper",equipment:"RB",type:"reps"},{name:"Bodyweight Squats",focus:"lower",equipment:"BW",type:"reps"},{name:"Reverse Lunges",focus:"lower",equipment:"BW",type:"reps"},{name:"Glute Bridges",focus:"lower",equipment:"BW",type:"reps"},{name:"DB Goblet Squats",focus:"lower",equipment:"DB",type:"reps"},{name:"Band Squats",focus:"lower",equipment:"RB",type:"reps"},{name:"Plank",focus:"core",equipment:"BW",type:"time"},{name:"Dead Bug",focus:"core",equipment:"BW",type:"reps"},{name:"Hollow Hold",focus:"core",equipment:"BW",type:"time"},{name:"Russian Twists",focus:"core",equipment:"BW",type:"reps"},{name:"Burpees",focus:"full",equipment:"BW",type:"reps"},{name:"Mountain Climbers",focus:"full",equipment:"BW",type:"time"},{name:"DB Thrusters",focus:"full",equipment:"DB",type:"reps"}],z={10:{warmup:2,main:4,finisher:1},20:{warmup:3,main:6,finisher:1},30:{warmup:4,main:8,finisher:1}},F={easy:{reps:[8,10,12],time:[20,25,30]},medium:{reps:[10,12,15],time:[30,35,40]},hard:{reps:[12,15,20],time:[40,45,50]}};function W(){const n=new Date,l=n.getFullYear(),a=String(n.getMonth()+1).padStart(2,"0"),i=String(n.getDate()).padStart(2,"0");return`${l}-${a}-${i}`}function I(n){const[l,a,i]=n.split("-").map(Number);return`${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][(a-1)%12]} ${String(i)}, ${l}`}function V(n){return n<W()}function X(n,l){const a=F[l]||F.medium;return n.type==="reps"?`${a.reps[Math.floor(Math.random()*a.reps.length)]} reps`:`${a.time[Math.floor(Math.random()*a.time.length)]}s`}function k(n,l){const a=[...n];for(let i=a.length-1;i>0;i--){const r=Math.floor(Math.random()*(i+1));[a[i],a[r]]=[a[r],a[i]]}return a.slice(0,Math.max(0,Math.min(l,a.length)))}function Z(){const[n,l]=x.useState({equipment:"Any",focus:"full",duration:"20",intensity:"medium"}),[a,i]=x.useState(W()),[r,j]=x.useState(null),[T,g]=x.useState(!1),[C,$]=x.useState(""),o=!V(a),O=x.useMemo(()=>{const t=f.filter(s=>n.focus==="full"?!0:s.focus===n.focus||s.focus==="full"||n.focus!=="mobility"&&s.focus==="mobility");return n.equipment==="Any"?t:t.filter(s=>s.equipment===n.equipment)},[n]);function M(t){const s=z[n.duration]||z[20],c=f.filter(m=>m.focus==="mobility"),u=O.filter(m=>m.focus!=="mobility"),E=f.filter(m=>["core","full"].includes(m.focus)),G=k(c.length?c:f,s.warmup),Y=k(u.length?u:f,s.main),_=k(E.length?E:f,s.finisher),D=m=>m.map(A=>({...A,set:X(A,n.intensity)})),P={date:t,filters:{...n},warmup:D(G),main:D(Y),finisher:D(_)};return j(P),g(!1),P}function R(t){const s=`dwr:plan:${t}`,c=localStorage.getItem(s);if(!c)return j(null),g(!1),$("No saved plan for this date."),null;try{const u=JSON.parse(c);return j(u),g(!0),$(""),u}catch{return j(null),g(!1),$("Saved data corrupted."),null}}x.useEffect(()=>{const t=W();i(t),R(t)||M(t)},[]);function J(t){const s=t.target.value;i(s),R(s)}function L(){if(!r||!o)return;const t=`dwr:plan:${r.date}`;localStorage.setItem(t,JSON.stringify(r)),g(!0),$("")}function v(t){const{name:s,value:c}=t.target;l(u=>({...u,[s]:c}))}function U(){o&&M(a)}const H=r&&o;return e.jsxs(y.Wrapper,{children:[e.jsxs("header",{children:[e.jsx("h2",{children:"Daily Workout Randomizer"}),e.jsx("p",{className:"sub",children:"View old plans. Add/Update only for today or future dates."})]}),e.jsxs(y.DateRow,{children:[e.jsxs("label",{children:[e.jsx("span",{children:"Date"}),e.jsx("input",{type:"date",value:a,onChange:J})]}),e.jsx("div",{className:"pretty",children:I(a)}),!o&&e.jsx("div",{className:"info",children:"Past date — view only."})]}),e.jsxs(y.Controls,{$disabled:!o,children:[e.jsxs("label",{children:[e.jsx("span",{children:"Equipment"}),e.jsxs("select",{name:"equipment",value:n.equipment,onChange:v,disabled:!o,children:[e.jsx("option",{value:"Any",children:"Any"}),e.jsx("option",{value:"BW",children:"Bodyweight"}),e.jsx("option",{value:"DB",children:"Dumbbells"}),e.jsx("option",{value:"RB",children:"Resistance Band"})]})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Focus"}),e.jsxs("select",{name:"focus",value:n.focus,onChange:v,disabled:!o,children:[e.jsx("option",{value:"full",children:"Full Body"}),e.jsx("option",{value:"upper",children:"Upper"}),e.jsx("option",{value:"lower",children:"Lower"}),e.jsx("option",{value:"core",children:"Core"}),e.jsx("option",{value:"mobility",children:"Mobility"})]})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Duration"}),e.jsxs("select",{name:"duration",value:n.duration,onChange:v,disabled:!o,children:[e.jsx("option",{value:"10",children:"10 min"}),e.jsx("option",{value:"20",children:"20 min"}),e.jsx("option",{value:"30",children:"30 min"})]})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Intensity"}),e.jsxs("select",{name:"intensity",value:n.intensity,onChange:v,disabled:!o,children:[e.jsx("option",{value:"easy",children:"Easy"}),e.jsx("option",{value:"medium",children:"Medium"}),e.jsx("option",{value:"hard",children:"Hard"})]})]}),e.jsxs("div",{className:"btns",children:[e.jsx("button",{onClick:U,disabled:!o,children:"Randomize"}),e.jsx("button",{onClick:L,className:"save",disabled:!H,children:"Save Plan"})]})]}),!r&&C&&e.jsx(y.Empty,{children:C}),r&&e.jsxs(y.PlanCard,{children:[e.jsxs("div",{className:"plan-head",children:[e.jsxs("div",{children:[e.jsx("strong",{children:I(r.date)}),T?e.jsx("span",{className:"tag",children:"Loaded"}):e.jsx("span",{className:"tag outline",children:"New"})]}),e.jsxs("div",{className:"meta",children:[e.jsx("span",{children:r.filters.equipment==="Any"?"Any equipment":r.filters.equipment}),e.jsxs("span",{children:[r.filters.focus," focus"]}),e.jsxs("span",{children:[r.filters.duration," min"]}),e.jsx("span",{children:r.filters.intensity})]})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Warm-up"}),e.jsx("ol",{children:r.warmup.map((t,s)=>e.jsxs("li",{children:[e.jsx("span",{className:"ex",children:t.name}),e.jsx("span",{className:"set",children:t.set})]},`w-${s}`))})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Main"}),e.jsx("ol",{children:r.main.map((t,s)=>e.jsxs("li",{children:[e.jsx("span",{className:"ex",children:t.name}),e.jsx("span",{className:"set",children:t.set})]},`m-${s}`))})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Finisher"}),e.jsx("ol",{children:r.finisher.map((t,s)=>e.jsxs("li",{children:[e.jsx("span",{className:"ex",children:t.name}),e.jsx("span",{className:"set",children:t.set})]},`f-${s}`))})]}),e.jsx("p",{className:"note",children:"Tip: Keep form clean. If anything hurts (pain, not effort), skip it."})]})]})}export{Z as default};
