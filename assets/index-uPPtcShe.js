import{d as h,r as g,j as i}from"./index-BexlHE4a.js";const k="var(--card, #111)",y="var(--text, #e9e9e9)",E="var(--muted, #b7b7b7)",x="var(--border, #222)",v="var(--accent, #22c55e)",C="var(--danger, #ef4444)",M="var(--radius, 16px)",j="var(--shadow, 0 8px 30px rgba(0,0,0,.25))",T=h.section`
    max-width: var(--maxw, 1200px);
    margin: 0 auto;
    padding: 24px;
    color: ${y};
`,A=h.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 16px;

    h2 {
        font-size: 20px;
        font-weight: 600;
        letter-spacing: 0.2px;
    }
`,L=h.div`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;

    button {
        border: 1px solid ${x};
        background: ${k};
        color: ${y};
        padding: 8px 12px;
        border-radius: 10px;
        box-shadow: ${j};
        cursor: pointer;
        transition: transform 0.06s ease-in-out, border-color 0.15s ease;

        &:hover {
            transform: translateY(-1px);
            border-color: ${v};
        }
        &:active {
            transform: translateY(0);
        }

        &.danger {
            border-color: ${C};
            &:hover {
                border-color: ${C};
            }
        }
    }
`,R=h.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
    }
`,z=h.div`
    display: grid;
    grid-template-rows: auto 1fr;
    gap: 8px;
    background: ${k};
    border: 1px solid ${x};
    border-radius: ${M};
    box-shadow: ${j};
    min-height: 420px;

    label {
        padding: 10px 12px;
        font-size: 12px;
        color: ${E};
        border-bottom: 1px solid ${x};
    }

    textarea {
        width: 100%;
        height: 100%;
        resize: vertical;
        min-height: 360px;
        padding: 14px;
        background: transparent;
        color: ${y};
        border: 0;
        outline: none;
        font-family: ui-monospace, SFMono-Regular, Menlo, Consolas,
            "Liberation Mono", monospace;
        font-size: 14px;
        line-height: 1.55;
    }
`,P=h.div`
    background: ${k};
    border: 1px solid ${x};
    border-radius: ${M};
    box-shadow: ${j};
    padding: 14px;
    min-height: 420px;

    .preview {
        /* typographic defaults for rendered markdown */
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            margin: 10px 0;
            line-height: 1.25;
        }
        h1 {
            font-size: 26px;
        }
        h2 {
            font-size: 22px;
        }
        h3 {
            font-size: 18px;
        }
        p {
            margin: 8px 0;
        }
        ul,
        ol {
            margin: 8px 0 8px 20px;
        }
        li {
            margin: 4px 0;
        }
        blockquote {
            margin: 10px 0;
            padding: 8px 12px;
            border-left: 3px solid ${v};
            color: ${E};
            background: rgba(255, 255, 255, 0.02);
            border-radius: 8px;
        }
        code {
            background: rgba(255, 255, 255, 0.06);
            border: 1px solid ${x};
            padding: 2px 6px;
            border-radius: 8px;
            font-family: ui-monospace, SFMono-Regular, Menlo, Consolas,
                monospace;
            font-size: 13px;
        }
        pre code {
            display: block;
            padding: 12px;
            overflow-x: auto;
            white-space: pre;
        }
        hr {
            border: none;
            border-top: 1px solid ${x};
            margin: 12px 0;
        }
        a {
            color: ${v};
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
        img {
            max-width: 100%;
            border-radius: 10px;
            border: 1px solid ${x};
        }
    }
`,f={Wrapper:T,Header:A,Actions:L,Panels:R,Editor:z,Preview:P},$="markdown-previewer:text";function d(o=""){return o.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function _(o=""){return/^https?:\/\//i.test(o)?o:"#"}function b(o){let r=o;return r=r.replace(/`([^`]+)`/g,(e,n)=>`<code>${d(n)}</code>`),r=r.replace(/!\[([^\]]*?)\]\((.*?)\)/g,(e,n,a)=>`<img src="${_(a.trim())}" alt="${d(n)}" />`),r=r.replace(/\[([^\]]+)\]\((.*?)\)/g,(e,n,a)=>{const s=_(a.trim()),c=d(n);return`<a href="${s}" target="_blank" rel="noopener noreferrer">${c}</a>`}),r=r.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>"),r=r.replace(/(^|[^_])_([^_]+)_/g,(e,n,a)=>`${n}<em>${a}</em>`),r}function q(o=""){const r=o.replaceAll(`\r
`,`
`).split(`
`);let e="",n=!1,a=!1,s=!1,c=!1;const l=()=>{a&&(e+="</ul>",a=!1),s&&(e+="</ol>",s=!1)},u=()=>{c&&(e+="</blockquote>",c=!1)};for(let m of r){const t=m;if(/^\s*```/.test(t)){n?(n=!1,e+="</code></pre>"):(l(),u(),n=!0,e+="<pre><code>");continue}if(n){e+=d(t)+`
`;continue}if(/^\s*-{3,}\s*$/.test(t)){l(),u(),e+="<hr/>";continue}if(/^\s*>\s+/.test(t)){const p=t.replace(/^\s*>\s+/,"");c||(l(),c=!0,e+="<blockquote>"),e+=`<p>${b(d(p))}</p>`;continue}else u();const w=t.match(/^\s*(#{1,6})\s+(.*)$/);if(w){l();const p=w[1].length,S=b(d(w[2]));e+=`<h${p}>${S}</h${p}>`;continue}if(/^\s*[-*]\s+/.test(t)){const p=t.replace(/^\s*[-*]\s+/,"");a||(u(),l(),a=!0,e+="<ul>"),e+=`<li>${b(d(p))}</li>`;continue}if(/^\s*\d+\.\s+/.test(t)){const p=t.replace(/^\s*\d+\.\s+/,"");s||(u(),l(),s=!0,e+="<ol>"),e+=`<li>${b(d(p))}</li>`;continue}t.trim()===""?(l(),e+="<br/>"):(l(),e+=`<p>${b(d(t))}</p>`)}return n&&(e+="</code></pre>"),a&&(e+="</ul>"),s&&(e+="</ol>"),c&&(e+="</blockquote>"),e}const U=`# Markdown Previewer

Type on the left, preview on the right.

- **Bold**, _italic_, and \`inline code\`
- Lists, links, images, quotes

> Keep it simple.

\`\`\`
function hello() {
  console.log("hi");
}
\`\`\`

[OpenAI](https://openai.com)
`;function I(){const[o,r]=g.useState(()=>localStorage.getItem($)??U),[e,n]=g.useState(!1),a=g.useRef(null);g.useEffect(()=>(a.current&&clearTimeout(a.current),a.current=setTimeout(()=>{localStorage.setItem($,o)},300),()=>clearTimeout(a.current)),[o]);const s=g.useMemo(()=>q(o),[o]),c=()=>{window.confirm("Clear the editor? This will remove current text.")&&(r(""),localStorage.removeItem($))},l=async()=>{try{await navigator.clipboard.writeText(o),n(!0),setTimeout(()=>n(!1),1200)}catch{}},u=()=>{const m=new Blob([o],{type:"text/markdown;charset=utf-8"}),t=document.createElement("a");t.href=URL.createObjectURL(m),t.download="note.md",document.body.appendChild(t),t.click(),t.remove(),URL.revokeObjectURL(t.href)};return i.jsxs(f.Wrapper,{children:[i.jsxs(f.Header,{children:[i.jsx("h2",{children:"Markdown Previewer"}),i.jsxs(f.Actions,{children:[i.jsx("button",{onClick:l,children:e?"Copied":"Copy"}),i.jsx("button",{onClick:u,children:"Download .md"}),i.jsx("button",{className:"danger",onClick:c,children:"Clear"})]})]}),i.jsxs(f.Panels,{children:[i.jsxs(f.Editor,{children:[i.jsx("label",{htmlFor:"mdEditor",children:"Editor"}),i.jsx("textarea",{id:"mdEditor",value:o,onChange:m=>r(m.target.value),spellCheck:"false",placeholder:"# Start typing…"})]}),i.jsx(f.Preview,{children:i.jsx("div",{className:"preview",dangerouslySetInnerHTML:{__html:s}})})]})]})}export{I as default};
