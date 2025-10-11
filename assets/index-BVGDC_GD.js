import{d as i,j as e,a as b,b as u}from"./index-CaRw1yxc.js";import{f as $,g as f,h as w,i as v}from"./index-DQ6G1o-D.js";const y="var(--bg, #0b0b0b)",l="var(--card, #111)",o="var(--text, #e9e9e9)",r="var(--muted, #b7b7b7)",t="var(--border, #222)",x="var(--accent, #22c55e)",p="var(--radius, 16px)",h="var(--shadow, 0 8px 30px rgba(0,0,0,.25))",g="var(--maxw, 1200px)",c="10px",a="16px",n="24px",d="32px",m="48px",N=i.main`
    color: ${o};
    background: ${y};
`,k=i.section`
    display: grid;
    place-items: center;
    min-height: 46vh;
    padding: ${m} ${n};

    .content {
        width: 100%;
        max-width: ${g};
        text-align: center;
        margin: 0 auto;
        padding: ${d};
        background: linear-gradient(
            180deg,
            rgba(34, 197, 94, 0.08),
            transparent 60%
        );
        border: 1px solid ${t};
        border-radius: ${p};
    }

    .eyebrow {
        color: ${r};
        letter-spacing: 0.12em;
        text-transform: uppercase;
        font-size: 12px;
        margin-bottom: ${c};
    }

    h1 {
        font-size: clamp(28px, 5vw, 42px);
        line-height: 1.1;
        margin: 0 0 ${a};
    }

    .tagline {
        color: ${r};
        margin-bottom: ${d};
        max-width: 720px;
        margin-inline: auto;
    }
`,C=i.div`
    display: flex;
    gap: ${a};
    justify-content: center;

    .btn {
        padding: 10px 16px;
        border-radius: 999px;
        border: 1px solid ${t};
        text-decoration: none;
        font-weight: 600;
        box-shadow: ${h};
    }

    .primary {
        background: ${x};
        color: #08140d;
    }

    .ghost {
        background: transparent;
        color: ${o};
    }

    .btn:active {
        transform: translateY(1px);
    }
`,S=i.section`
    max-width: ${g};
    margin: 0 auto;
    padding: ${m} ${n};

    h2 {
        font-size: clamp(20px, 3.4vw, 28px);
        margin: 0 0 ${a};
    }

    .sub {
        color: ${r};
        margin-bottom: ${d};
    }

    .note {
        color: ${r};
        margin-top: ${a};
        font-size: 14px;
    }
`,F=i.div`
    --cols: ${j=>j.cols||3};
    display: grid;
    grid-template-columns: repeat(var(--cols), minmax(0, 1fr));
    gap: ${n};

    @media (max-width: 920px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 560px) {
        grid-template-columns: 1fr;
    }
`,z=i.article`
    background: ${l};
    border: 1px solid ${t};
    border-radius: ${p};
    padding: ${n};
    box-shadow: ${h};

    .icon {
        width: 40px;
        height: 40px;
        display: grid;
        place-items: center;
        border-radius: 10px;
        background: rgba(34, 197, 94, 0.12);
        color: ${x};
        margin-bottom: ${a};
        font-size: 20px;
    }

    h3 {
        margin: 0 0 ${c};
        font-size: 18px;
    }

    p {
        color: ${r};
    }
`,L=i.ul`
    display: flex;
    flex-wrap: wrap;
    gap: ${a};
    padding: 0;
    margin: ${n} 0 ${c};
    list-style: none;

    li {
        border: 1px solid ${t};
        background: ${l};
        padding: 8px 12px;
        border-radius: 999px;
        color: ${o};
    }
`,W=i.div`
    border: 1px solid ${t};
    background: ${l};
    border-radius: ${p};
    padding: ${n};
    max-width: 520px;

    .row {
        display: flex;
        align-items: center;
        gap: ${a};
        margin-bottom: ${c};
    }

    a {
        color: ${o};
        text-decoration: none;
    }
    .tiny {
        color: ${r};
        margin-top: ${a};
        font-size: 13px;
    }
`,s={Wrapper:N,Hero:k,Actions:C,Section:S,Grid:F,Card:z,Chips:L,Contact:W},T=()=>e.jsxs(s.Wrapper,{children:[e.jsx(s.Hero,{children:e.jsxs("div",{className:"content",children:[e.jsx("p",{className:"eyebrow",children:"Agri tools & tips"}),e.jsx("h1",{children:"Farming Landing"}),e.jsx("p",{className:"tagline",children:"Simple, practical utilities for better crops — soil to harvest."}),e.jsxs(s.Actions,{children:[e.jsx("a",{href:"#contact",className:"btn primary",children:"Talk to us"}),e.jsx("a",{href:"#features",className:"btn ghost",children:"See features"})]})]})}),e.jsxs(s.Section,{id:"features",children:[e.jsx("h2",{children:"What's inside"}),e.jsx("p",{className:"sub",children:"Lightweight, offline-friendly helpers you can actually use on the field."}),e.jsxs(s.Grid,{cols:4,children:[e.jsxs(s.Card,{children:[e.jsx("div",{className:"icon",children:e.jsx($,{})}),e.jsx("h3",{children:"Soil Health"}),e.jsx("p",{children:"Basic checklist for pH, organic matter, and nutrient balance."})]}),e.jsxs(s.Card,{children:[e.jsx("div",{className:"icon",children:e.jsx(f,{})}),e.jsx("h3",{children:"Seeds & Inputs"}),e.jsx("p",{children:"Quick notes for variety, spacing, sowing depth, and seed rate."})]}),e.jsxs(s.Card,{children:[e.jsx("div",{className:"icon",children:e.jsx(w,{})}),e.jsx("h3",{children:"Irrigation Planner"}),e.jsx("p",{children:"Simple guidance for stage-wise watering & rough scheduling."})]}),e.jsxs(s.Card,{children:[e.jsx("div",{className:"icon",children:e.jsx(v,{})}),e.jsx("h3",{children:"Machinery & Tools"}),e.jsx("p",{children:"Field-tested tips on prep, safety, and upkeep."})]})]})]}),e.jsxs(s.Section,{children:[e.jsx("h2",{children:"Focus Crops"}),e.jsxs(s.Chips,{children:[e.jsx("li",{children:"Wheat"}),e.jsx("li",{children:"Rice"}),e.jsx("li",{children:"Maize"}),e.jsx("li",{children:"Pulses"}),e.jsx("li",{children:"Vegetables"}),e.jsx("li",{children:"Fruits"})]}),e.jsx("p",{className:"note",children:"Notes are generic; always adapt to your soil, season, and local advisories."})]}),e.jsxs(s.Section,{id:"contact",children:[e.jsx("h2",{children:"Contact"}),e.jsxs(s.Contact,{children:[e.jsxs("div",{className:"row",children:[e.jsx(b,{}),e.jsx("a",{href:"tel:+910000000000",children:"+91 00000 00000"})]}),e.jsxs("div",{className:"row",children:[e.jsx(u,{})," ",e.jsx("span",{children:"Local advisory, India"})]}),e.jsx("p",{className:"tiny",children:"This is a demo landing inside the hub. No login, no backend."})]})]})]});export{T as default};
