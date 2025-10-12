import{d as b,m as be,r as i,j as t}from"./index-DwBaBfzX.js";const A="var(--bg)",E="var(--card)",$="var(--text)",F="var(--muted)",y="var(--border)",j="var(--radius)",N="var(--shadow)",C="var(--accent)",ne="var(--danger, #e5484d)",ve=be`
  0%   { clip-path: polygon(50% 50%, 100% 0%, 100% 100%); }
  50%  { clip-path: polygon(50% 50%, 100% 49%, 100% 51%); }
  100% { clip-path: polygon(50% 50%, 100% 0%, 100% 100%); }
`,v={Wrapper:b.div`
        background: ${A};
        color: ${$};
        padding: 16px;
        min-height: 100%;
    `,Container:b.div`
        max-width: 1440px;
        margin: 0 auto;
        display: grid;
        gap: 12px;
    `,TopBar:b.div`
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        gap: 12px;

        .left h1 {
            margin: 0;
            font-size: 20px;
        }
        .subtitle {
            margin: 4px 0 0;
            color: ${F};
            font-size: 13px;
        }

        .right {
            display: flex;
            gap: 12px;
            align-items: center;
        }
        .stat {
            background: ${E};
            border: 1px solid ${y};
            border-radius: ${j};
            box-shadow: ${N};
            padding: 6px 10px;
        }
        .label {
            color: ${F};
            font-size: 11px;
            display: block;
        }
        .value {
            font-weight: 600;
            font-size: 14px;
        }
        .life {
            display: inline-block;
            width: 12px;
            height: 12px;
            margin-left: 4px;
            background: #f2d648;
            border-radius: 50%;
            position: relative;
        }
        .life::after {
            content: "";
            position: absolute;
            left: 50%;
            top: 50%;
            width: 100%;
            height: 100%;
            transform: translate(-50%, -50%) rotate(-45deg);
            background: linear-gradient(to right, transparent 50%, ${A} 50%);
            border-radius: 50%;
            mix-blend-mode: multiply;
            opacity: 0.8;
        }
    `,Toolbar:b.div`
        display: flex;
        gap: 8px;
        align-items: center;
        button {
            appearance: none;
            background: ${E};
            border: 1px solid ${y};
            color: ${$};
            padding: 8px 12px;
            border-radius: ${j};
            box-shadow: ${N};
            cursor: pointer;
            font: inherit;
            transition: border-color 0.15s ease, transform 0.02s ease-in-out;
            &:hover {
                border-color: ${C};
            }
            &:active {
                transform: translateY(1px);
            }
        }
        .ghost {
            background: ${A};
        }
        .danger {
            border-color: ${ne};
            color: ${$};
        }
        .spacer {
            flex: 1;
        }
    `,Help:b.div`
        background: ${E};
        border: 1px solid ${y};
        border-radius: ${j};
        box-shadow: ${N};
        padding: 10px 12px;
        font-size: 13px;
        color: ${$};
        em {
            color: ${C};
            font-style: normal;
        }
    `,Board:b.div`
        position: relative;
        background: #0a0b0d;
        border: 1px solid ${y};
        border-radius: ${j};
        box-shadow: ${N};
        padding: 10px;

        .row {
            display: grid;
            grid-template-columns: repeat(
                ${a=>a.$cols},
                1fr
            ); /* ✅ transient prop */
        }

        .cell {
            width: 24px;
            height: 24px;
            display: grid;
            place-items: center;
            position: relative;
        }

        .wall {
            background: #122033;
            border: 1px solid #173052;
        }
        .floor {
            background: #0a0b0d;
        }

        .dot {
            width: 5px;
            height: 5px;
            background: #d6e2ff;
            border-radius: 50%;
            box-shadow: 0 0 4px rgba(214, 226, 255, 0.6);
        }
        .power-dot {
            width: 10px;
            height: 10px;
            background: ${C};
            border-radius: 50%;
            box-shadow: 0 0 6px ${C};
        }

        .pacman {
            width: 18px;
            height: 18px;
            background: #f2d648;
            border-radius: 50%;
            position: relative;
            animation: ${ve} 0.24s infinite linear;
        }
        .dir-left {
            transform: rotate(180deg);
        }
        .dir-right {
            transform: rotate(0deg);
        }
        .dir-up {
            transform: rotate(-90deg);
        }
        .dir-down {
            transform: rotate(90deg);
        }

        .ghost {
            width: 18px;
            height: 18px;
            background: var(--ghost, #ff4d4f);
            border-radius: 4px 4px 0 0;
            position: relative;
            box-shadow: 0 0 6px rgba(255, 255, 255, 0.08) inset;
        }
        .ghost::before,
        .ghost::after {
            content: "";
            position: absolute;
            top: 4px;
            width: 4px;
            height: 4px;
            background: #fff;
            border-radius: 50%;
        }
        .ghost::before {
            left: 4px;
        }
        .ghost::after {
            right: 4px;
        }
        .ghost.frightened {
            background: #3fb6ff;
        }

        .overlay {
            position: absolute;
            inset: 0;
            background: rgba(0, 0, 0, 0.35);
            display: grid;
            place-items: center;
            border-radius: ${j};
            pointer-events: none;
        }
        .overlay span {
            background: rgba(0, 0, 0, 0.6);
            color: #fff;
            padding: 6px 10px;
            border-radius: 8px;
            font-weight: 600;
            letter-spacing: 0.5px;
        }
    `,Footer:b.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: ${F};
        font-size: 12px;
        .meta {
            padding: 6px 0;
        }
    `,ModalBackdrop:b.div`
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.4);
        display: grid;
        place-items: center;
        z-index: 50;
    `,Modal:b.div`
        background: ${E};
        border: 1px solid ${y};
        border-radius: ${j};
        box-shadow: ${N};
        padding: 16px;
        width: min(92vw, 420px);
        h3 {
            margin: 0 0 8px 0;
            font-size: 16px;
        }
        p {
            margin: 0 0 12px 0;
            color: ${$};
            font-size: 14px;
        }
    `,ModalActions:b.div`
        display: flex;
        justify-content: flex-end;
        gap: 8px;
        button {
            appearance: none;
            background: ${E};
            border: 1px solid ${y};
            color: ${$};
            padding: 8px 12px;
            border-radius: ${j};
            cursor: pointer;
            font: inherit;
            &:hover {
                border-color: ${C};
            }
        }
        .ghost {
            background: ${A};
        }
        .danger {
            border-color: ${ne};
        }
    `},we="#",U=" ",Z=".",T="o",ke="P",je="G",$e=["#####################","#.........##.........#","#.###.###.##.###.###.#","#o###.###.##.###.###o#","#....................#","#.###.#.######.#.###.#","#.....#....##..#.....#","#####.### ## ###.#####","    #.#   GG   #.#    ","#####.# ##  ## #.#####","#.........P..........#","#####################"],ye=120,ie=2,Se=50,ce=3,Ee=10,Ne=50,Ce=200,K="pacMan_highScore_v1",H={left:{r:0,c:-1,key:"left"},right:{r:0,c:1,key:"right"},up:{r:-1,c:0,key:"up"},down:{r:1,c:0,key:"down"}},R=["left","right","up","down"],Y=a=>a!==we&&a!==void 0;function Re(a){const c=a.map(d=>d.split(""));let u=null;const m=[];let x=0;for(let d=0;d<c.length;d++)for(let p=0;p<c[d].length;p++){const g=c[d][p];g===ke?(u={r:d,c:p},c[d][p]=U):g===je?(m.push({r:d,c:p}),c[d][p]=U):(g===Z||g===T)&&x++}return u||(u={r:1,c:1}),m.length===0&&m.push({r:u.r,c:u.c+3},{r:u.r,c:u.c-3}),{grid:c,pac:u,ghosts:m,pelletsTotal:x}}const G=a=>a[Math.floor(Math.random()*a.length)],V=a=>a.map(c=>c.slice()),le=({open:a,title:c,message:u,confirmText:m="Confirm",cancelText:x="Cancel",onConfirm:d,onClose:p})=>a?t.jsx(v.ModalBackdrop,{onClick:p,role:"dialog","aria-modal":"true","aria-label":c,children:t.jsxs(v.Modal,{onClick:g=>g.stopPropagation(),children:[t.jsx("h3",{children:c}),t.jsx("p",{children:u}),t.jsxs(v.ModalActions,{children:[t.jsx("button",{className:"ghost",onClick:p,children:x}),t.jsx("button",{className:"danger",onClick:()=>{d==null||d(),p==null||p()},children:m})]})]})}):null,Me=()=>{const a=i.useMemo(()=>Re($e),[]),[c,u]=i.useState(()=>V(a.grid)),[m,x]=i.useState({r:a.pac.r,c:a.pac.c,dir:"left",nextDir:"left"}),[d,p]=i.useState(()=>a.ghosts.map((r,s)=>({id:s,r:r.r,c:r.c,dir:G(R),color:["#ff4d4f","#2f88ff","#ff8c00","#ff6bd6"][s%4],home:{r:r.r,c:r.c}}))),[g,L]=i.useState(0),[O,q]=i.useState(()=>{try{return Number(localStorage.getItem(K)||0)}catch{return 0}}),[S,_]=i.useState(ce),[M,k]=i.useState(!1),[w,D]=i.useState(0),[I,z]=i.useState(a.pelletsTotal),[J,de]=i.useState(!1),[pe,W]=i.useState(!1),[fe,Q]=i.useState(!1),X=i.useRef(0),ee=i.useRef(null);c.length;const he=c[0].length,P=i.useCallback((r,s,e)=>{var h;const o=H[e],l=r+o.r,n=s+o.c,f=(h=c[l])==null?void 0:h[n];return Y(f)},[c]),re=(r,s,e)=>{const o=H[e];return{r:r+o.r,c:s+o.c}},te=i.useCallback((r,s)=>{const e=c[r][s];(e===Z||e===T)&&(u(o=>{const l=V(o);return l[r][s]=U,l}),z(o=>o-1),L(o=>o+(e===T?Ne:Ee)),e===T&&D(Se))},[c]),se=i.useCallback(r=>{var o,l;const s=R.slice();for(let n=s.length-1;n>0;n--){const f=Math.floor(Math.random()*(n+1));[s[n],s[f]]=[s[f],s[n]]}const e={left:"right",right:"left",up:"down",down:"up"};for(const n of s){if(n===e[r.dir])continue;const f=H[n],h=r.r+f.r,B=r.c+f.c;if(Y((o=c[h])==null?void 0:o[B]))return n}for(const n of s){const f=H[n],h=r.r+f.r,B=r.c+f.c;if(Y((l=c[h])==null?void 0:l[B]))return n}return r.dir},[c]),oe=i.useCallback((r,s,e)=>{for(const o of e)if(o.r===r&&o.c===s)if(w>0)L(l=>l+Ce),p(l=>l.map(n=>n.id===o.id?{...n,r:o.home.r,c:o.home.c,dir:G(R)}:n));else return!0;return!1},[w]);i.useEffect(()=>{if(!M)return ee.current=setInterval(()=>{X.current+=1;const r=X.current;x(e=>{let o=e.dir;if(e.nextDir&&P(e.r,e.c,e.nextDir))o=e.nextDir;else if(!P(e.r,e.c,o))if(e.nextDir&&P(e.r,e.c,e.nextDir))o=e.nextDir;else return e;const{r:l,c:n}=re(e.r,e.c,o);return te(l,n),{...e,r:l,c:n,dir:o}});const s=w>0?ie+1:ie;r%s===0&&p(e=>e.map(o=>{const l=se(o),{r:n,c:f}=re(o.r,o.c,l);return{...o,r:n,c:f,dir:l}})),w>0&&D(e=>Math.max(0,e-1))},ye),()=>clearInterval(ee.current)},[M,P,se,te,w]),i.useEffect(()=>{const r=setTimeout(()=>{x(s=>(oe(s.r,s.c,d)&&(S>1?(_(e=>e-1),x({r:a.pac.r,c:a.pac.c,dir:"left",nextDir:"left"}),p(a.ghosts.map((e,o)=>({id:o,r:e.r,c:e.c,dir:G(R),color:["#ff4d4f","#2f88ff","#ff8c00","#ff6bd6"][o%4],home:{r:e.r,c:e.c}}))),D(0),k(!0),setTimeout(()=>k(!1),600)):(_(0),k(!0))),s)),I===0&&S>0&&k(!0)},5);return()=>clearTimeout(r)},[d,S,I,a,oe]),i.useEffect(()=>{if(g>O){q(g);try{localStorage.setItem(K,String(g))}catch{}}},[g,O]);const ae=i.useCallback(r=>{var n,f;const s=(((n=r.target)==null?void 0:n.tagName)||"").toLowerCase();if(s==="input"||s==="textarea"||s==="select"||(f=r.target)!=null&&f.isContentEditable)return;const e=r.key,o=e.toLowerCase(),l=e==="ArrowLeft"||e==="ArrowRight"||e==="ArrowUp"||e==="ArrowDown";if(l&&r.preventDefault(),l||["a","d","w","s"].includes(o)){e==="ArrowLeft"||o==="a"?x(h=>({...h,nextDir:"left"})):e==="ArrowRight"||o==="d"?x(h=>({...h,nextDir:"right"})):e==="ArrowUp"||o==="w"?x(h=>({...h,nextDir:"up"})):(e==="ArrowDown"||o==="s")&&x(h=>({...h,nextDir:"down"}));return}if(o==="p"){r.preventDefault(),k(h=>!h);return}if(o==="r"){r.preventDefault(),W(!0);return}},[]);i.useEffect(()=>{const r=s=>ae(s);return window.addEventListener("keydown",r,{passive:!1}),()=>window.removeEventListener("keydown",r)},[ae]),i.useEffect(()=>{const r=c.flat().filter(s=>s===Z||s===T).length;z(r)},[c]);const ue=i.useCallback(()=>{u(V(a.grid)),x({r:a.pac.r,c:a.pac.c,dir:"left",nextDir:"left"}),p(a.ghosts.map((r,s)=>({id:s,r:r.r,c:r.c,dir:G(R),color:["#ff4d4f","#2f88ff","#ff8c00","#ff6bd6"][s%4],home:{r:r.r,c:r.c}}))),L(0),_(ce),z(a.pelletsTotal),D(0),k(!1)},[a]),xe=i.useCallback(()=>{q(0);try{localStorage.removeItem(K)}catch{}},[]),ge=(r,s)=>m.r===r&&m.c===s,me=(r,s)=>d.find(e=>e.r===r&&e.c===s);return t.jsxs(v.Wrapper,{children:[t.jsxs(v.Container,{children:[t.jsxs(v.TopBar,{children:[t.jsxs("div",{className:"left",children:[t.jsx("h1",{children:"PacMan Game"}),t.jsx("p",{className:"subtitle",children:"Nostalgic mini-game in React — pellets, power-ups, and pesky ghosts."})]}),t.jsxs("div",{className:"right",children:[t.jsxs("div",{className:"stat",children:[t.jsx("span",{className:"label",children:"Score"}),t.jsx("span",{className:"value",children:g})]}),t.jsxs("div",{className:"stat",children:[t.jsx("span",{className:"label",children:"High"}),t.jsx("span",{className:"value",children:O})]}),t.jsxs("div",{className:"stat",children:[t.jsx("span",{className:"label",children:"Lives"}),t.jsx("span",{className:"value",children:Array.from({length:S}).map((r,s)=>t.jsx("span",{className:"life"},s))})]})]})]}),t.jsxs(v.Toolbar,{children:[t.jsx("button",{onClick:()=>k(r=>!r),children:M?"Resume":"Pause"}),t.jsx("button",{onClick:()=>W(!0),children:"Reset Game"}),t.jsx("button",{className:"ghost",onClick:()=>de(r=>!r),children:J?"Hide Help":"Show Help"}),t.jsx("div",{className:"spacer"}),t.jsx("button",{className:"danger",onClick:()=>Q(!0),children:"Clear High Score"})]}),J&&t.jsxs(v.Help,{children:[t.jsx("strong",{children:"Controls:"})," Arrow keys / WASD to move, P to Pause/Resume, R to Reset."," ","Eat ",t.jsx("em",{children:"pellets"})," (•) for 10 pts, ",t.jsx("em",{children:"power pellets"})," (◉) for 50 pts and frightened ghosts."," ","Collide with a normal ghost → lose a life. In frightened time, collide to eat ghost (200 pts)."," ","Everything is client-side; high score is stored in your browser."]}),t.jsxs(v.Board,{role:"application","aria-label":"PacMan board",$cols:he,children:[c.map((r,s)=>t.jsx("div",{className:"row",children:r.map((e,o)=>{const l=me(s,o),n=ge(s,o),f=w>0;return t.jsxs("div",{className:["cell",e==="#"?"wall":"floor",e==="."?"pellet":"",e==="o"?"power":""].join(" ").trim(),children:[e==="."&&t.jsx("span",{className:"dot"}),e==="o"&&t.jsx("span",{className:"power-dot"}),n&&t.jsx("span",{className:`pacman dir-${m.dir}`,"aria-label":"PacMan"}),l&&t.jsx("span",{className:`ghost ${f?"frightened":""}`,style:{"--ghost":l.color},"aria-label":"Ghost"})]},`${s}:${o}`)})},s)),M&&t.jsx("div",{className:"overlay",children:t.jsx("span",{children:S===0?"Game Over":"Paused"})})]}),t.jsx(v.Footer,{children:t.jsxs("div",{className:"meta",children:[t.jsxs("span",{children:["Pellets left: ",I]}),w>0&&t.jsxs("span",{children:[" | Frightened: ",w]})]})})]}),t.jsx(le,{open:pe,title:"Reset Game?",message:"This will restart the maze, score, and lives.",confirmText:"Reset",onConfirm:ue,onClose:()=>W(!1)}),t.jsx(le,{open:fe,title:"Clear High Score?",message:"High score will be removed from this browser.",confirmText:"Clear",onConfirm:xe,onClose:()=>Q(!1)})]})};export{Me as default};
