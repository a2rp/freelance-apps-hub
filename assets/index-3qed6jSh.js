import{d as D,r as $,j as e}from"./index-Zao5beoO.js";const m="var(--card, #111)",u="var(--text, #e9e9e9)",C="var(--muted, #b7b7b7)",h="var(--border, #222)",q="var(--accent, #22c55e)",S="var(--radius, 16px)",L="var(--shadow, 0 8px 30px rgba(0,0,0,0.25))",z={Wrapper:D.div`
        display: grid;
        gap: 16px;
        color-scheme: dark; /* help native form controls pick dark UI */
        max-width: 1440px;
        margin: auto;
        padding: 15px;

        /* ——— Shared inputs ——— */
        textarea,
        select,
        input[type="text"],
        input[type="number"] {
            width: 100%;
            color: ${u};
            background: transparent;
            border: 1px solid ${h};
            border-radius: 10px;
            padding: 8px 10px;
            outline: none;
            min-height: 40px; /* consistent control height */
            line-height: 1.35;
        }

        /* Dark dropdown popup (supported on Chromium/FF; no harm on others) */
        select option {
            background: ${m};
            color: ${u};
        }

        /* Remove native arrows, add a simple chevron */
        select {
            -webkit-appearance: none;
            appearance: none;
            padding-right: 34px; /* room for chevron */
            background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%23e9e9e9' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'/></svg>");
            background-repeat: no-repeat;
            background-position: right 10px center;
        }

        .header {
            display: grid;
            gap: 6px;
            h3 {
                margin: 0;
                color: ${u};
                letter-spacing: 0.2px;
            }
            .sub {
                color: ${C};
                font-size: 0.95rem;
            }
        }

        .grid {
            display: grid;
            gap: 16px;
            grid-template-columns: 1fr;
        }

        .inputArea {
            display: grid;
            gap: 8px;
            background: ${m};
            border: 1px solid ${h};
            border-radius: ${S};
            padding: 12px;
            box-shadow: ${L};

            .label {
                color: ${C};
                font-size: 0.9rem;
            }
            textarea {
                min-height: 180px;
                resize: vertical;
                border-style: dashed;
                border-radius: 12px;
            }
        }

        .controls {
            display: grid;
            gap: 12px;
            background: ${m};
            border: 1px solid ${h};
            border-radius: ${S};
            padding: 12px;
            box-shadow: ${L};

            /* align all fields nicely at bottom edge */
            .row {
                display: grid;
                gap: 12px;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                align-items: end;
            }

            .control {
                display: grid;
                gap: 6px;
                .ctlLabel {
                    color: ${C};
                    font-size: 0.85rem;
                }

                &.chk label {
                    color: ${u};
                    font-size: 0.95rem;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
                &.chk input[type="checkbox"] {
                    width: 18px;
                    height: 18px;
                    accent-color: ${q};
                }
            }

            .actions {
                display: flex;
                gap: 10px;
                flex-wrap: wrap;
                margin-top: 2px; /* tight to the fields */
                button {
                    padding: 8px 12px;
                    border-radius: 12px;
                    border: 1px solid ${h};
                    background: ${m};
                    color: ${u};
                    cursor: pointer;
                }
                button:hover {
                    border-color: ${q};
                }
                .danger {
                    border-color: #ef4444;
                }
            }
        }

        .summary {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            .pill {
                background: ${m};
                color: ${u};
                border: 1px solid ${h};
                border-radius: 999px;
                padding: 6px 10px;
            }
        }

        .results {
            background: ${m};
            border: 1px solid ${h};
            border-radius: ${S};
            box-shadow: ${L};
            overflow: auto; /* scroll if large */
            max-height: 420px; /* keep page compact */
        }
    `,Table:D.table`
        width: 100%;
        border-collapse: collapse;

        thead th {
            position: sticky; /* keep headers visible while scrolling */
            top: 0;
            text-align: left;
            padding: 10px 12px;
            font-weight: 600;
            color: ${u};
            background: ${m};
            border-bottom: 1px solid ${h};
            z-index: 1;
        }

        tbody td {
            padding: 10px 12px;
            border-bottom: 1px dashed ${h};
            color: ${u};
            vertical-align: top;
            word-break: break-word;
        }

        tbody tr:last-child td {
            border-bottom: none;
        }

        .item {
            width: 100%;
        }
        .count,
        .pct {
            white-space: nowrap;
        }
        .empty {
            color: ${C};
            text-align: center;
            padding: 24px;
        }
    `},B="frequencyGenerator:v1",N={inputText:"",mode:"words",caseSensitive:!1,stripPunctuation:!0,includeSpaces:!1,customDelimiter:",",excludeList:"",minCount:1,sortBy:"countDesc"};function U(o,d,c){let r=o;return c&&(r=r.replace(/[^\p{L}\p{N}\s]+/gu," ")),r=r.replace(/\s+/g," ").trim(),d||(r=r.toLowerCase()),r}function V(o,d){const{mode:c,caseSensitive:r,stripPunctuation:g,includeSpaces:v,customDelimiter:j}=d;if(!o)return[];if(c==="words"){const i=U(o,r,g);return i?i.split(" ").filter(Boolean):[]}if(c==="characters"){const i=r?o:o.toLowerCase(),p=Array.from(i);return v?p:p.filter(b=>b.trim()!=="")}if(c==="lines")return(r?o:o.toLowerCase()).split(/\r?\n/).map(p=>p.trim()).filter(Boolean);const f=r?o:o.toLowerCase(),w=j||",";return f.split(w).map(i=>i.trim()).filter(Boolean)}function G(o,d){if(!o)return new Set;const c=o.split(",").map(r=>d?r.trim():r.trim().toLowerCase()).filter(Boolean);return new Set(c)}function O(){const[o,d]=$.useState(()=>{try{const t=JSON.parse(localStorage.getItem(B)||"null");return t?{...N,...t}:N}catch{return N}}),{inputText:c,mode:r,caseSensitive:g,stripPunctuation:v,includeSpaces:j,customDelimiter:f,excludeList:w,minCount:i,sortBy:p}=o;$.useEffect(()=>{localStorage.setItem(B,JSON.stringify(o))},[o]);const{rows:b,totalItems:y,uniqueItems:F}=$.useMemo(()=>{const t=G(w,g),s=V(c,{mode:r,caseSensitive:g,stripPunctuation:v,includeSpaces:j,customDelimiter:f}).filter(a=>!t.has(a)),n=new Map;for(const a of s)n.set(a,(n.get(a)||0)+1);let k=Array.from(n.entries()).map(([a,x])=>({item:a,count:x}));const A=Number(i)||1;return k=k.filter(a=>a.count>=A),p==="countDesc"?k.sort((a,x)=>x.count-a.count||a.item.localeCompare(x.item)):k.sort((a,x)=>a.item.localeCompare(x.item)||x.count-a.count),{rows:k,totalItems:s.length,uniqueItems:n.size}},[c,r,g,v,j,f,w,i,p]),l=(t,s)=>d(n=>({...n,[t]:s}));function E(){window.confirm(`Reset Frequency Generator?

This will clear the input and all options back to defaults.`)&&d(N)}function I(){const t=[["Item","Count","Percent"]];for(const s of b){const n=y?(s.count/y*100).toFixed(2):"0.00";t.push([s.item,String(s.count),n])}return t.map(s=>s.map(P).join(",")).join(`
`)}function P(t){const s=/[",\n]/.test(String(t)),n=String(t).replace(/"/g,'""');return s?`"${n}"`:n}async function R(){try{await navigator.clipboard.writeText(I())}catch{}}function T(){const t=new Blob([I()],{type:"text/csv;charset=utf-8"}),s=URL.createObjectURL(t),n=document.createElement("a");n.href=s,n.download="frequency.csv",document.body.appendChild(n),n.click(),n.remove(),URL.revokeObjectURL(s)}return e.jsxs(z.Wrapper,{children:[e.jsxs("header",{className:"header",children:[e.jsx("h3",{children:"Frequency Generator"}),e.jsx("p",{className:"sub",children:"Paste text or values → get clean frequency counts."})]}),e.jsxs("div",{className:"grid",children:[e.jsxs("section",{className:"inputArea",children:[e.jsx("label",{className:"label",htmlFor:"fg-text",children:"Input"}),e.jsx("textarea",{id:"fg-text",value:c,onChange:t=>l("inputText",t.target.value),placeholder:"Paste text, CSV values, or any list…"})]}),e.jsxs("section",{className:"controls",children:[e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"control",children:[e.jsx("span",{className:"ctlLabel",children:"Mode"}),e.jsxs("select",{value:r,onChange:t=>l("mode",t.target.value),children:[e.jsx("option",{value:"words",children:"Words"}),e.jsx("option",{value:"characters",children:"Characters"}),e.jsx("option",{value:"lines",children:"Lines"}),e.jsx("option",{value:"custom",children:"Custom delimiter"})]})]}),r==="custom"&&e.jsxs("div",{className:"control",children:[e.jsx("span",{className:"ctlLabel",children:"Delimiter"}),e.jsx("input",{type:"text",value:f,onChange:t=>l("customDelimiter",t.target.value),placeholder:","})]}),r==="words"&&e.jsx("div",{className:"control chk",children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:v,onChange:t=>l("stripPunctuation",t.target.checked)}),"Remove punctuation"]})}),r==="characters"&&e.jsx("div",{className:"control chk",children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:j,onChange:t=>l("includeSpaces",t.target.checked)}),"Include spaces"]})}),e.jsx("div",{className:"control chk",children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:g,onChange:t=>l("caseSensitive",t.target.checked)}),"Case sensitive"]})}),e.jsxs("div",{className:"control",children:[e.jsx("span",{className:"ctlLabel",children:"Exclude (comma-separated)"}),e.jsx("input",{type:"text",value:w,onChange:t=>l("excludeList",t.target.value),placeholder:"a, the, an"})]}),e.jsxs("div",{className:"control",children:[e.jsx("span",{className:"ctlLabel",children:"Min count"}),e.jsx("input",{type:"number",min:1,value:i,onChange:t=>l("minCount",t.target.value)})]}),e.jsxs("div",{className:"control",children:[e.jsx("span",{className:"ctlLabel",children:"Sort"}),e.jsxs("select",{value:p,onChange:t=>l("sortBy",t.target.value),children:[e.jsx("option",{value:"countDesc",children:"Count (high → low)"}),e.jsx("option",{value:"itemAsc",children:"Item (A → Z)"})]})]})]}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{onClick:R,children:"Copy CSV"}),e.jsx("button",{onClick:T,children:"Download CSV"}),e.jsx("button",{className:"danger",onClick:E,children:"Clear"})]})]})]}),e.jsxs("section",{className:"summary",children:[e.jsxs("div",{className:"pill",children:["Total items: ",e.jsx("b",{children:y})]}),e.jsxs("div",{className:"pill",children:["Unique: ",e.jsx("b",{children:F})]}),e.jsxs("div",{className:"pill",children:["Showing: ",e.jsx("b",{children:b.length})]})]}),e.jsx("section",{className:"results",children:e.jsxs(z.Table,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Item"}),e.jsx("th",{children:"Count"}),e.jsx("th",{children:"%"})]})}),e.jsxs("tbody",{children:[b.map(t=>{const s=y?(t.count/y*100).toFixed(2):"0.00";return e.jsxs("tr",{children:[e.jsx("td",{className:"item",children:t.item}),e.jsx("td",{className:"count",children:t.count}),e.jsx("td",{className:"pct",children:s})]},t.item)}),b.length===0&&e.jsx("tr",{children:e.jsx("td",{colSpan:3,className:"empty",children:"No data yet. Paste text above."})})]})]})})]})}export{O as default};
