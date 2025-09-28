import{d as c,f as q,r as d,j as e}from"./index-CeF1p2Yz.js";const R="var(--card, #111)",k="var(--text, #e9e9e9)",u="var(--muted, #b7b7b7)",m="var(--border, #222)",v="var(--accent, #22c55e)",$="var(--radius, 16px)",A="var(--shadow, 0 8px 30px rgba(0,0,0,0.25))",G="var(--maxw, 1100px)",N=q`
  @media print {
    @page { margin: 18mm; }

    html, body {
      background: #fff !important;
      color: #000 !important;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }

    /* Hide everything visually but keep it in DOM */
    body * { visibility: hidden !important; }

    /* Show ONLY the result block */
    #mw-print, #mw-print * {
      visibility: visible !important;
    }

    /* Pin the result block to the top of the printable area */
    #mw-print {
      position: fixed !important;
      top: 0 !important;
      left: 0 !important;
      right: 0 !important;
      margin: 0 auto !important;
      width: min(700px, 100%) !important;
      background: #fff !important;
      color: #000 !important;
      box-shadow: none !important;
      border: none !important;
      padding: 15px !important;
      transform: none !important; /* ensure no inherited transforms */
    }

    #mw-print * {
      background: transparent !important;
      color: #000 !important;
      box-shadow: none !important;
      text-shadow: none !important;
      border-color: transparent !important;
    }

    /* Links plain */
    #mw-print a, #mw-print a:visited {
      color: #000 !important;
      text-decoration: none !important;
    }
  }
`,E=c.div`
    color: ${k};
    max-width: ${G};
    margin: 0 auto;
    padding: 24px;

    .head {
        margin-bottom: 16px;
        h2 {
            font-weight: 700;
            letter-spacing: 0.3px;
        }
        .muted {
            color: ${u};
            margin-top: 6px;
            font-size: 0.95rem;
        }
    }
`,O=c.div`
    display: grid;
    gap: 16px;
    grid-template-columns: 1fr;

    @media (min-width: 900px) {
        grid-template-columns: 1.1fr 0.9fr;
    }
`,M=c.div`
    margin-bottom: 14px;
    label {
        display: block;
        margin-bottom: 6px;
        color: ${u};
        font-size: 0.9rem;
    }
`,z=c.div`
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 8px;
`,P=c.input`
    background: ${R};
    border: 1px solid ${m};
    color: ${k};
    padding: 10px 12px;
    border-radius: ${$};
    outline: none;
    transition: border-color 0.15s ease;

    &:focus {
        border-color: ${v};
    }
`,T=c.button`
    background: ${v};
    border: 1px solid ${v};
    color: #07150e;
    font-weight: 600;
    padding: 10px 12px;
    border-radius: ${$};
    cursor: pointer;
    box-shadow: ${A};
    white-space: nowrap;

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }

    &.ghost {
        background: transparent;
        color: ${k};
        border-color: ${m};
        box-shadow: none;
    }
`,Y=c.div`
    display: flex;
    gap: 10px;
    margin-top: 10px;
    justify-content: ${t=>t.$align==="right"?"flex-end":"flex-start"};
    flex-wrap: wrap;
`,_=c.article`
    background: ${R};
    border: 1px solid ${m};
    border-radius: ${$};
    box-shadow: ${A};
    padding: 16px;

    .meta {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 8px;

        .tag {
            font-size: 0.8rem;
            color: ${u};
            border: 1px dashed ${m};
            padding: 2px 8px;
            border-radius: 999px;
        }
    }

    h3 {
        margin: 6px 0 8px;
    }
    .storyBody p {
        line-height: 1.6;
    }
    .storyBody p.muted {
        color: ${u};
    }

    .seed {
        margin-top: 14px;
        border-top: 1px dashed ${m};
        padding-top: 10px;

        h4 {
            margin: 0 0 8px;
            font-size: 0.95rem;
            color: ${u};
        }
        ul {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 6px;
        }
        li {
            font-size: 0.95rem;
        }
    }
`,n={Wrapper:E,Grid:O,Group:M,Row:z,Input:P,Button:T,Actions:Y,StoryCard:_},C="mythWeaver_seed",S="mythWeaver_story";function s(t){return t[Math.floor(Math.random()*t.length)]}function V(t){return t?t.charAt(0).toUpperCase()+t.slice(1):""}const r={heroes:["Aru","Maya","Vel","Ila","Ragh","Tara","Kian","Nia","Dev","Asha"],companions:["a river spirit","an old wanderer","a moonlit stag","a curious child","a silent monk"],places:["the Verdant Vale","the Red Dunes","Tidewatch Cliffs","Whispering Pines","Old Stone City"],quests:["restore the broken covenant","bring rain to a silent sky","mend a forgotten song","return a stolen dawn","lift a drifting curse"],foes:["the Ash Warden","a jealous king","the Sleepless Serpent","storm-eaten ghosts","the Crow of Midnight"],artifacts:["a reed flute","an ember shard","silver thread","a cracked mirror","salt of the first sea"],themes:["humility over pride","memory over fear","kindness over strength","patience over haste","truth over comfort"]};function D({hero:t,companion:a,place:l,quest:p,foe:x,artifact:f,theme:i}){const g=["In the old seasons,","When roads still listened,","Before maps forgot the edges,","Under watchful constellations,"],b=["and there","where the wind kept counsel","at the hush between heartbeats","by the stone that remembers"],j=["so the land could breathe again.","and the rumor of peace took root.","until even the shadows learned to rest.","and morning found a quieter name."],y=s(g),o=s(b),h=s(j),w=`${y} ${V(t)} set out for ${l} ${o}.`,B=`With ${a} beside them and ${f} in hand, the vow was simple: ${p}.`,I=`Yet ${x} stood in the way, measuring worth by weight and noise.`,W=`In the end, ${i} won, ${h}`;return[w,B,I,W].join(" ")}function H(){const[t,a]=d.useState({hero:"",companion:"",place:"",quest:"",foe:"",artifact:"",theme:""}),[l,p]=d.useState(""),x=d.useRef(null);d.useEffect(()=>{try{const o=localStorage.getItem(C),h=localStorage.getItem(S);o&&a(JSON.parse(o)),h&&p(h)}catch{}},[]),d.useEffect(()=>{try{localStorage.setItem(C,JSON.stringify(t))}catch{}},[t]),d.useEffect(()=>{try{localStorage.setItem(S,l)}catch{}},[l]);const f=d.useMemo(()=>Object.values(t).every(Boolean),[t]);function i(o){const h={hero:r.heroes,companion:r.companions,place:r.places,quest:r.quests,foe:r.foes,artifact:r.artifacts,theme:r.themes};a(w=>({...w,[o]:s(h[o])}))}function g(){window.confirm("Randomize all fields?")&&a({hero:s(r.heroes),companion:s(r.companions),place:s(r.places),quest:s(r.quests),foe:s(r.foes),artifact:s(r.artifacts),theme:s(r.themes)})}function b(){window.confirm("Clear everything?")&&(a({hero:"",companion:"",place:"",quest:"",foe:"",artifact:"",theme:""}),p(""))}function j(){p(D(t))}function y(){l&&window.print()}return e.jsxs(n.Wrapper,{children:[e.jsx(N,{}),e.jsxs("header",{className:"head",children:[e.jsx("h2",{children:"Myth-Weaver"}),e.jsx("p",{className:"muted",children:"Pick a few strands, weave a short myth, and print just the story."})]}),e.jsxs(n.Grid,{children:[e.jsxs("section",{children:[e.jsxs(n.Group,{children:[e.jsx("label",{children:"Hero"}),e.jsxs(n.Row,{children:[e.jsx(n.Input,{value:t.hero,onChange:o=>a({...t,hero:o.target.value}),placeholder:"e.g., Aru"}),e.jsx(n.Button,{type:"button",onClick:()=>i("hero"),children:"🎲"})]})]}),e.jsxs(n.Group,{children:[e.jsx("label",{children:"Companion"}),e.jsxs(n.Row,{children:[e.jsx(n.Input,{value:t.companion,onChange:o=>a({...t,companion:o.target.value}),placeholder:"e.g., a river spirit"}),e.jsx(n.Button,{type:"button",onClick:()=>i("companion"),children:"🎲"})]})]}),e.jsxs(n.Group,{children:[e.jsx("label",{children:"Place"}),e.jsxs(n.Row,{children:[e.jsx(n.Input,{value:t.place,onChange:o=>a({...t,place:o.target.value}),placeholder:"e.g., the Verdant Vale"}),e.jsx(n.Button,{type:"button",onClick:()=>i("place"),children:"🎲"})]})]}),e.jsxs(n.Group,{children:[e.jsx("label",{children:"Quest"}),e.jsxs(n.Row,{children:[e.jsx(n.Input,{value:t.quest,onChange:o=>a({...t,quest:o.target.value}),placeholder:"e.g., restore the broken covenant"}),e.jsx(n.Button,{type:"button",onClick:()=>i("quest"),children:"🎲"})]})]}),e.jsxs(n.Group,{children:[e.jsx("label",{children:"Antagonist"}),e.jsxs(n.Row,{children:[e.jsx(n.Input,{value:t.foe,onChange:o=>a({...t,foe:o.target.value}),placeholder:"e.g., the Ash Warden"}),e.jsx(n.Button,{type:"button",onClick:()=>i("foe"),children:"🎲"})]})]}),e.jsxs(n.Group,{children:[e.jsx("label",{children:"Artifact"}),e.jsxs(n.Row,{children:[e.jsx(n.Input,{value:t.artifact,onChange:o=>a({...t,artifact:o.target.value}),placeholder:"e.g., a reed flute"}),e.jsx(n.Button,{type:"button",onClick:()=>i("artifact"),children:"🎲"})]})]}),e.jsxs(n.Group,{children:[e.jsx("label",{children:"Theme / Moral"}),e.jsxs(n.Row,{children:[e.jsx(n.Input,{value:t.theme,onChange:o=>a({...t,theme:o.target.value}),placeholder:"e.g., humility over pride"}),e.jsx(n.Button,{type:"button",onClick:()=>i("theme"),children:"🎲"})]})]}),e.jsxs(n.Actions,{children:[e.jsx(n.Button,{type:"button",onClick:g,children:"Randomize All"}),e.jsx(n.Button,{type:"button",onClick:j,disabled:!f,children:"Weave Story"}),e.jsx(n.Button,{type:"button",className:"ghost",onClick:b,children:"Clear"})]})]}),e.jsxs("section",{children:[e.jsxs(n.StoryCard,{children:[e.jsx("div",{className:"meta",children:e.jsx("span",{className:"tag",children:"Myth-Weaver"})}),e.jsx("h3",{children:"Story"}),e.jsx("div",{id:"mw-print",ref:x,className:"storyBody",children:e.jsx("p",{className:l?"":"muted",children:l||"Your story will appear here."})}),e.jsxs("div",{className:"seed",children:[e.jsx("h4",{children:"Strands"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("b",{children:"Hero:"})," ",t.hero||"—"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Companion:"})," ",t.companion||"—"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Place:"})," ",t.place||"—"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Quest:"})," ",t.quest||"—"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Antagonist:"})," ",t.foe||"—"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Artifact:"})," ",t.artifact||"—"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Theme:"})," ",t.theme||"—"]})]})]})]}),e.jsx(n.Actions,{$align:"right",children:e.jsx(n.Button,{type:"button",onClick:y,disabled:!l,children:"Print Story Only"})})]})]})]})}export{H as default};
