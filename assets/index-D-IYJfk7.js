import{d as f,r as l,j as t}from"./index-BhNMFMFX.js";const $="var(--card, #0f1012)",g="var(--text, #eaeaea)",v="var(--muted, #a8a8a8)",u="var(--border, #242424)",N="var(--accent, #22c55e)",w="var(--radius, 16px)",C="var(--shadow, 0 10px 30px rgba(0,0,0,0.35))",d={Wrapper:f.div`
        display: grid;
        gap: 16px;
        color: ${g};
        padding: 15px;
        margin: auto;
        max-width: 1440px;
    `,Header:f.header`
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 12px;
        align-items: center;
        padding: 12px 14px;
        background: ${$};
        border: 1px solid ${u};
        border-radius: ${w};
        box-shadow: ${C};

        .title {
            font-size: 20px;
            font-weight: 600;
            letter-spacing: 0.2px;
        }
        .row {
            display: flex;
            gap: 10px;
            align-items: center;
            flex-wrap: wrap;
            justify-content: flex-end;
        }

        .fileBtn {
            position: relative;
            overflow: hidden;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 8px 12px;
            border: 1px solid ${u};
            border-radius: 10px;
            background: #111;
            cursor: pointer;
            font-size: 14px;
            color: ${g};
        }
        .fileBtn input {
            position: absolute;
            inset: 0;
            opacity: 0;
            cursor: pointer;
        }

        button {
            padding: 8px 12px;
            border: 1px solid ${u};
            border-radius: 10px;
            background: #141414;
            color: ${g};
            font-size: 14px;
            cursor: pointer;
        }
        button:hover {
            border-color: ${N};
        }
        button:active {
            transform: translateY(1px);
        }
        button:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
    `,Body:f.div`
        display: grid;
        grid-template-columns: 1.2fr 1fr;
        gap: 16px;
        @media (max-width: 1100px) {
            grid-template-columns: 1fr;
        }
    `,Left:f.section`
        background: ${$};
        border: 1px solid ${u};
        border-radius: ${w};
        box-shadow: ${C};
        padding: 12px;
        min-height: 280px;
    `,Right:f.section`
        display: grid;
        gap: 12px;
    `,NowPlaying:f.div`
        display: grid;
        gap: 10px;

        .meta {
            display: grid;
            grid-template-columns: 56px 1fr;
            gap: 12px;
            align-items: center;
        }
        .art {
            width: 56px;
            height: 56px;
            border-radius: 10px;
            background: linear-gradient(
                135deg,
                rgba(255, 255, 255, 0.05),
                rgba(0, 0, 0, 0.25)
            );
            display: grid;
            place-items: center;
            font-size: 22px;
            border: 1px solid ${u};
        }
        .texts .title {
            font-weight: 600;
        }
        .texts .sub {
            color: ${v};
            font-size: 12px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .controls {
            display: flex;
            gap: 8px;
            align-items: center;
        }
        .controls .spacer {
            flex: 1;
        }
        .controls button {
            padding: 8px 12px;
            border-radius: 10px;
            border: 1px solid ${u};
            background: #161616;
            color: ${g};
        }
        .controls .active {
            outline: 1px solid ${N};
            border-color: ${N};
        }

        .seek {
            display: grid;
            grid-template-columns: 48px 1fr 48px;
            gap: 8px;
            align-items: center;
        }
        .seek input[type="range"] {
            width: 100%;
        }
        .time {
            color: ${v};
            font-size: 12px;
        }

        .volume {
            display: grid;
            grid-template-columns: 36px 1fr;
            gap: 8px;
            align-items: center;
        }
        .volume input[type="range"] {
            width: 100%;
        }
    `,Playlist:f.ul`
        list-style: none;
        margin: 0;
        padding: 0;
        background: ${$};
        border: 1px solid ${u};
        border-radius: ${w};
        box-shadow: ${C};
        min-height: 220px;

        .empty {
            padding: 14px;
            color: ${v};
            font-size: 14px;
        }

        li {
            display: grid;
            grid-template-columns: 1fr auto;
            align-items: center;
            gap: 8px;
            padding: 8px 10px;
            border-top: 1px solid ${u};
        }
        li:first-child {
            border-top: 0;
        }
        li.active {
            background: rgba(255, 255, 255, 0.03);
        }

        .title {
            text-align: left;
            background: transparent;
            border: 0;
            color: ${g};
            cursor: pointer;
            padding: 4px 0;
        }
        .title .idx {
            color: ${v};
            margin-right: 6px;
        }

        .ops {
            display: flex;
            gap: 6px;
        }
        .ops button {
            padding: 6px 8px;
            border-radius: 8px;
            border: 1px solid ${u};
            background: #161616;
            color: ${g};
            font-size: 13px;
        }
    `,Tips:f.div`
        color: ${v};
        font-size: 12px;
        display: grid;
        gap: 4px;
    `,ModalBackdrop:f.div`
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.6);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
    `,ModalCard:f.div`
        width: min(420px, 92vw);
        background: ${$};
        border: 1px solid ${u};
        border-radius: ${w};
        box-shadow: ${C};
        padding: 16px;

        .title {
            font-weight: 600;
            margin-bottom: 6px;
            color: ${g};
        }
        .msg {
            color: ${v};
            font-size: 14px;
            margin-bottom: 12px;
        }
        .row {
            display: flex;
            gap: 8px;
            justify-content: flex-end;
        }

        button {
            padding: 8px 12px;
            border: 1px solid ${u};
            border-radius: 10px;
            background: #141414;
            color: ${g};
            cursor: pointer;
            font-size: 14px;
        }
        button:hover {
            border-color: ${N};
        }
        .ghost {
            background: transparent;
        }
        .danger {
            background: #1b1010;
            border-color: #ef4444;
        }
    `},P="musicPlayer.state",q={volume:.9,mute:!1,shuffle:!1,repeat:"off",currentIndex:-1};function K(){const[o,L]=l.useState([]),[i,c]=l.useState(q),[b,j]=l.useState({current:0,duration:0}),[z,y]=l.useState(!1),[I,k]=l.useState({open:!1,id:null,title:""}),m=l.useRef(null),B=l.useRef(null),S=l.useRef(null),U=l.useRef(1);l.useEffect(()=>{try{const e=localStorage.getItem(P);if(e){const r=JSON.parse(e);c(n=>({...n,...r,currentIndex:-1}))}}catch{}},[]),l.useEffect(()=>{const{volume:e,mute:r,shuffle:n,repeat:s}=i;localStorage.setItem(P,JSON.stringify({volume:e,mute:r,shuffle:n,repeat:s}))},[i.volume,i.mute,i.shuffle,i.repeat]),l.useEffect(()=>{const e=m.current;if(!e)return;const r=()=>j(x=>({...x,current:e.currentTime||0})),n=()=>j({current:0,duration:isFinite(e.duration)?e.duration:0}),s=O;return e.addEventListener("timeupdate",r),e.addEventListener("loadedmetadata",n),e.addEventListener("ended",s),()=>{e.removeEventListener("timeupdate",r),e.removeEventListener("loadedmetadata",n),e.removeEventListener("ended",s)}},[o,i.repeat,i.shuffle,i.currentIndex]),l.useEffect(()=>{const e=m.current;e&&(e.volume=i.mute?0:i.volume)},[i.volume,i.mute]),l.useEffect(()=>{const e=S.current;if(!e)return;const r=s=>{s.preventDefault(),s.stopPropagation()},n=s=>{r(s);const x=Array.from(s.dataTransfer.files||[]).filter(a=>/^audio\//.test(a.type));x.length&&M(x)};return e.addEventListener("dragenter",r),e.addEventListener("dragover",r),e.addEventListener("dragleave",r),e.addEventListener("drop",n),()=>{e.removeEventListener("dragenter",r),e.removeEventListener("dragover",r),e.removeEventListener("dragleave",r),e.removeEventListener("drop",n)}},[]);const h=l.useMemo(()=>o[i.currentIndex]||null,[o,i.currentIndex]);function M(e){const r=e.map(n=>({id:++U.current,title:n.name.replace(/\.[^.]+$/,""),src:URL.createObjectURL(n),isBlob:!0}));L(n=>{const s=[...n,...r];return i.currentIndex===-1&&s.length&&(c(x=>({...x,currentIndex:0})),setTimeout(()=>p(0,!0),0)),s})}function p(e,r=!1){e<0||e>=o.length||(c(n=>({...n,currentIndex:e})),setTimeout(()=>{const n=m.current;n&&(n.src=o[e].src,n.play().catch(()=>{}))},0))}function A(){const e=m.current;if(e){if(!h){o.length&&p(0,!0);return}e.paused?e.play().catch(()=>{}):e.pause()}}function E(e=!1){if(!o.length)return;if(i.shuffle){if(o.length===1)return p(0,!0);let n=Math.floor(Math.random()*o.length);n===i.currentIndex&&(n=(n+1)%o.length),p(n,!0);return}const r=o.length-1;i.currentIndex<r?p(i.currentIndex+1,!0):(i.repeat==="all"||e)&&p(0,!0)}function D(){if(o.length){if(i.shuffle)return E(!0);i.currentIndex>0?p(i.currentIndex-1,!0):p(o.length-1,!0)}}function O(){if(i.repeat==="one"){const e=m.current;e&&(e.currentTime=0,e.play().catch(()=>{}));return}E()}function W(e){L(r=>{const n=r.findIndex(a=>a.id===e),s=r[n];if(s&&String(s.src).startsWith("blob:"))try{URL.revokeObjectURL(s.src)}catch{}const x=r.filter(a=>a.id!==e);if(n===i.currentIndex)if(x.length){const a=Math.min(n,x.length-1);c(R=>({...R,currentIndex:a})),setTimeout(()=>p(a,!1),0)}else{c(R=>({...R,currentIndex:-1}));const a=m.current;a&&(a.pause(),a.src=""),j({current:0,duration:0})}else n<i.currentIndex&&c(a=>({...a,currentIndex:a.currentIndex-1}));return x})}function F(){o.forEach(r=>{if(String(r.src).startsWith("blob:"))try{URL.revokeObjectURL(r.src)}catch{}}),L([]),c(r=>({...r,currentIndex:-1}));const e=m.current;e&&(e.pause(),e.src=""),j({current:0,duration:0})}function Y(e){const r=m.current;if(!r)return;const n=Number(e.target.value);r.currentTime=n,j(s=>({...s,current:n}))}function H(e){c(r=>({...r,volume:e}))}function J(){c(e=>({...e,mute:!e.mute}))}function V(){c(e=>({...e,shuffle:!e.shuffle}))}function _(){c(e=>({...e,repeat:e.repeat==="off"?"all":e.repeat==="all"?"one":"off"}))}function T(e){const r=Math.max(0,Math.floor(e||0)),n=Math.floor(r/60),s=r%60;return n+":"+String(s).padStart(2,"0")}return t.jsxs(d.Wrapper,{children:[t.jsxs(d.Header,{children:[t.jsx("div",{className:"title",children:"React Music Player"}),t.jsxs("div",{className:"row",children:[t.jsxs("label",{className:"fileBtn",children:[t.jsx("input",{ref:B,type:"file",accept:"audio/*",multiple:!0,onChange:e=>{const r=Array.from(e.target.files||[]);r.length&&M(r),e.target.value=""}}),"Add Files"]}),t.jsx("button",{onClick:()=>y(!0),disabled:!o.length,children:"Clear All"})]})]}),t.jsxs(d.Body,{children:[t.jsx(d.Left,{ref:S,children:t.jsxs(d.NowPlaying,{children:[t.jsxs("div",{className:"meta",children:[t.jsx("div",{className:"art","aria-hidden":!0,children:"♪"}),t.jsxs("div",{className:"texts",children:[t.jsx("div",{className:"title",children:h?h.title:"Nothing playing"}),t.jsx("div",{className:"sub",children:h?h.isBlob?"Local file":h.src:"Drop audio here or add files"})]})]}),t.jsx("audio",{ref:m,preload:"metadata"}),t.jsxs("div",{className:"controls",children:[t.jsx("button",{onClick:D,title:"Previous",children:"⏮"}),t.jsx("button",{onClick:A,title:"Play/Pause",children:"⏯"}),t.jsx("button",{onClick:()=>E(!0),title:"Next",children:"⏭"}),t.jsx("div",{className:"spacer"}),t.jsx("button",{className:i.shuffle?"active":"",onClick:V,title:"Shuffle",children:"🔀"}),t.jsx("button",{className:i.repeat!=="off"?"active":"",onClick:_,title:`Repeat: ${i.repeat}`,children:i.repeat==="one"?"🔁1":"🔁"})]}),t.jsxs("div",{className:"seek",children:[t.jsx("div",{className:"time",children:T(b.current)}),t.jsx("input",{type:"range",min:"0",max:b.duration||0,step:"0.1",value:Math.min(b.current,b.duration||0),onChange:Y}),t.jsx("div",{className:"time",children:T(b.duration)})]}),t.jsxs("div",{className:"volume",children:[t.jsx("button",{onClick:J,title:"Mute/Unmute",children:i.mute?"🔇":"🔊"}),t.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:i.mute?0:i.volume,onChange:e=>H(Number(e.target.value))})]})]})}),t.jsxs(d.Right,{children:[t.jsxs(d.Playlist,{children:[o.length===0&&t.jsx("div",{className:"empty",children:"No tracks yet."}),o.map((e,r)=>t.jsxs("li",{className:r===i.currentIndex?"active":"",children:[t.jsxs("button",{className:"title",onClick:()=>p(r,!0),children:[t.jsxs("span",{className:"idx",children:[r+1,"."]})," ",e.title]}),t.jsxs("div",{className:"ops",children:[t.jsx("button",{onClick:()=>moveUp(e.id),title:"Move up",children:"↑"}),t.jsx("button",{onClick:()=>moveDown(e.id),title:"Move down",children:"↓"}),t.jsx("button",{onClick:()=>k({open:!0,id:e.id,title:e.title}),title:"Remove",children:"✕"})]})]},e.id))]}),t.jsxs(d.Tips,{children:[t.jsx("div",{children:"Tip: Local files are session-only (not persisted)."}),t.jsx("div",{children:"Drop audio files anywhere in the left panel."})]})]})]}),z&&t.jsx(d.ModalBackdrop,{onClick:()=>y(!1),children:t.jsxs(d.ModalCard,{onClick:e=>e.stopPropagation(),children:[t.jsx("div",{className:"title",children:"Clear all tracks?"}),t.jsx("div",{className:"msg",children:"This removes the entire playlist (blob URLs are revoked). This can’t be undone."}),t.jsxs("div",{className:"row",children:[t.jsx("button",{className:"ghost",onClick:()=>y(!1),children:"Cancel"}),t.jsx("button",{className:"danger",onClick:()=>{F(),y(!1)},children:"Yes, Clear"})]})]})}),I.open&&t.jsx(d.ModalBackdrop,{onClick:()=>k({open:!1,id:null,title:""}),children:t.jsxs(d.ModalCard,{onClick:e=>e.stopPropagation(),children:[t.jsx("div",{className:"title",children:"Remove this track?"}),t.jsxs("div",{className:"msg",children:[t.jsx("b",{children:I.title})," will be removed from the playlist. This can’t be undone."]}),t.jsxs("div",{className:"row",children:[t.jsx("button",{className:"ghost",onClick:()=>k({open:!1,id:null,title:""}),children:"Cancel"}),t.jsx("button",{className:"danger",onClick:()=>{W(I.id),k({open:!1,id:null,title:""})},children:"Yes, Remove"})]})]})})]})}export{K as default};
