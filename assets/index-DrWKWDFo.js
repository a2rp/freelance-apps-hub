import{d as u,r as h,j as e}from"./index-CaRw1yxc.js";const m="var(--text, #e9e9e9)",c="var(--muted, #b7b7b7)",g="var(--border, #222)",b="var(--card, #111)",l="var(--accent, #22c55e)",p="var(--radius, 16px)",y="var(--shadow, 0 8px 30px rgba(0,0,0,0.25))",f={Wrapper:u.section`
        width: 100%;
        max-width: 1000px;
        margin: 0 auto;
        padding: 24px;

        .header {
            margin-bottom: 12px;
            h2 {
                margin: 0 0 6px;
                font-weight: 700;
                line-height: 1.2;
                color: ${m};
            }
            .muted {
                margin: 0;
                color: ${c};
                font-size: 14px;
            }
        }
    `,Toolbar:u.div`
        display: grid;
        grid-template-columns: 1fr auto auto;
        gap: 10px;
        align-items: center;
        margin: 14px 0 18px;

        input {
            background: ${b};
            border: 1px solid ${g};
            color: ${m};
            border-radius: ${p};
            padding: 12px 14px;
            outline: none;
            transition: border-color 120ms ease;
        }
        input:focus {
            border-color: ${l};
        }

        .clearBtn {
            background: transparent;
            border: 1px solid ${g};
            color: ${c};
            border-radius: ${p};
            padding: 10px 14px;
            cursor: pointer;
        }
        .clearBtn:hover {
            border-color: ${l};
            color: ${m};
        }

        .count {
            color: ${c};
            font-size: 13px;
            user-select: none;
        }

        .visually-hidden {
            position: absolute !important;
            height: 1px;
            width: 1px;
            overflow: hidden;
            clip: rect(1px, 1px, 1px, 1px);
            white-space: nowrap;
        }
    `,Grid:u.div`
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
        gap: 12px;

        .empty {
            grid-column: 1 / -1;
            color: ${c};
            padding: 24px;
            border: 1px dashed ${g};
            border-radius: ${p};
            text-align: center;
        }

        .card {
            display: grid;
            grid-template-columns: 56px 1fr;
            align-items: center;
            gap: 10px;
            background: ${b};
            border: 1px solid ${g};
            border-radius: ${p};
            box-shadow: ${y};
            padding: 12px;
            text-align: left;
            cursor: pointer;
            position: relative;
            transition: transform 120ms ease, border-color 120ms ease;
        }
        .card:hover {
            transform: translateY(-2px);
            border-color: ${l};
        }

        .emoji {
            font-size: 34px;
            line-height: 1;
        }

        .meta {
            display: grid;
            gap: 4px;
            .name {
                color: ${m};
                font-size: 15px;
                font-weight: 600;
            }
            .tags {
                color: ${c};
                font-size: 12px;
            }
        }

        .copied {
            position: absolute;
            top: 8px;
            right: 10px;
            font-size: 12px;
            color: ${l};
        }
    `},x=[{char:"😀",name:"grinning face",tags:["smile","happy","joy"]},{char:"😃",name:"grinning face with big eyes",tags:["smile","happy"]},{char:"😄",name:"grinning face with smiling eyes",tags:["smile"]},{char:"😁",name:"beaming face with smiling eyes",tags:["grin"]},{char:"😆",name:"grinning squinting face",tags:["lol","haha"]},{char:"😅",name:"grinning face with sweat",tags:["relief","phew"]},{char:"😂",name:"face with tears of joy",tags:["lol","funny"]},{char:"🙂",name:"slightly smiling face",tags:["smile","calm"]},{char:"😉",name:"winking face",tags:["wink","flirt"]},{char:"😊",name:"smiling face with smiling eyes",tags:["warm","kind"]},{char:"😍",name:"smiling face with heart-eyes",tags:["love","crush"]},{char:"😘",name:"face blowing a kiss",tags:["kiss","love"]},{char:"😋",name:"face savoring food",tags:["yummy","tasty"]},{char:"😜",name:"winking face with tongue",tags:["cheeky","play"]},{char:"🤔",name:"thinking face",tags:["hmm","think"]},{char:"😴",name:"sleeping face",tags:["sleep","zzz"]},{char:"🤗",name:"hugging face",tags:["hug","support"]},{char:"🤫",name:"shushing face",tags:["quiet","secret"]},{char:"🤐",name:"zipper-mouth face",tags:["silence","zip"]},{char:"😐",name:"neutral face",tags:["meh","plain"]},{char:"🙄",name:"face with rolling eyes",tags:["eyeroll","ugh"]},{char:"😏",name:"smirking face",tags:["smirk","sass"]},{char:"😭",name:"loudly crying face",tags:["cry","sad"]},{char:"😡",name:"pouting face",tags:["angry","mad"]},{char:"👍",name:"thumbs up",tags:["like","approve","ok"]},{char:"👎",name:"thumbs down",tags:["dislike","no"]},{char:"👏",name:"clapping hands",tags:["bravo","applause"]},{char:"🙏",name:"folded hands",tags:["thanks","namaste","please"]},{char:"👌",name:"ok hand",tags:["ok","nice"]},{char:"✌️",name:"victory hand",tags:["peace","two"]},{char:"🤞",name:"crossed fingers",tags:["luck"]},{char:"🤟",name:"love-you gesture",tags:["ily","rock"]},{char:"👊",name:"oncoming fist",tags:["punch","brofist"]},{char:"❤️",name:"red heart",tags:["love","like","heart"]},{char:"💛",name:"yellow heart",tags:["heart"]},{char:"💚",name:"green heart",tags:["heart"]},{char:"💙",name:"blue heart",tags:["heart"]},{char:"💜",name:"purple heart",tags:["heart"]},{char:"🖤",name:"black heart",tags:["heart"]},{char:"🤍",name:"white heart",tags:["heart"]},{char:"💔",name:"broken heart",tags:["sad","breakup"]},{char:"✨",name:"sparkles",tags:["shine","glitter"]},{char:"🔥",name:"fire",tags:["lit","hot"]},{char:"⭐",name:"star",tags:["favourite","rate"]},{char:"✅",name:"check mark button",tags:["done","tick"]},{char:"❌",name:"cross mark",tags:["wrong","x"]},{char:"⚠️",name:"warning",tags:["alert","caution"]},{char:"💡",name:"light bulb",tags:["idea","tip"]},{char:"📌",name:"pushpin",tags:["pin","save"]},{char:"🐶",name:"dog face",tags:["puppy","pet"]},{char:"🐱",name:"cat face",tags:["kitty","pet"]},{char:"🐭",name:"mouse face",tags:["mouse"]},{char:"🐹",name:"hamster face",tags:["hamster"]},{char:"🐰",name:"rabbit face",tags:["bunny"]},{char:"🦊",name:"fox face",tags:["fox"]},{char:"🐻",name:"bear face",tags:["bear"]},{char:"🐼",name:"panda face",tags:["panda"]},{char:"🐨",name:"koala",tags:["koala"]},{char:"🐯",name:"tiger face",tags:["tiger"]},{char:"🦁",name:"lion",tags:["lion"]},{char:"🍎",name:"red apple",tags:["fruit","apple"]},{char:"🍌",name:"banana",tags:["fruit"]},{char:"🍉",name:"watermelon",tags:["fruit"]},{char:"🍇",name:"grapes",tags:["fruit"]},{char:"🍓",name:"strawberry",tags:["fruit","berry"]},{char:"🍒",name:"cherries",tags:["fruit"]},{char:"🍍",name:"pineapple",tags:["fruit"]},{char:"🥭",name:"mango",tags:["fruit","india"]},{char:"🍔",name:"hamburger",tags:["burger","food"]},{char:"🍕",name:"pizza",tags:["food","slice"]},{char:"🍟",name:"fries",tags:["food"]},{char:"🍣",name:"sushi",tags:["food","japan"]},{char:"🍜",name:"steaming bowl",tags:["noodles","ramen"]},{char:"🍰",name:"shortcake",tags:["cake","dessert"]},{char:"🍫",name:"chocolate bar",tags:["choco","sweet"]},{char:"🍪",name:"cookie",tags:["biscuit","sweet"]},{char:"☕",name:"hot beverage",tags:["coffee","tea"]},{char:"🍵",name:"teacup without handle",tags:["green tea"]},{char:"🥤",name:"cup with straw",tags:["drink","cool"]},{char:"🍺",name:"beer mug",tags:["beer","cheers"]},{char:"☀️",name:"sun",tags:["sunny","hot"]},{char:"⛅",name:"sun behind cloud",tags:["cloudy"]},{char:"🌧️",name:"cloud with rain",tags:["rain","weather"]},{char:"⛈️",name:"cloud with lightning and rain",tags:["storm"]},{char:"❄️",name:"snowflake",tags:["snow","winter"]},{char:"🌈",name:"rainbow",tags:["color","hope"]},{char:"☔",name:"umbrella with rain drops",tags:["rain"]},{char:"🚗",name:"car",tags:["auto","drive"]},{char:"🚌",name:"bus",tags:["transport"]},{char:"🚕",name:"taxi",tags:["cab"]},{char:"🚑",name:"ambulance",tags:["emergency"]},{char:"🚒",name:"fire engine",tags:["emergency"]},{char:"✈️",name:"airplane",tags:["flight","travel"]},{char:"🚀",name:"rocket",tags:["space","launch"]},{char:"🚆",name:"train",tags:["rail"]},{char:"⛵",name:"sailboat",tags:["boat","sea"]},{char:"🔒",name:"locked",tags:["secure","privacy"]},{char:"🔓",name:"unlocked",tags:["open","access"]},{char:"🔑",name:"key",tags:["access","unlock"]},{char:"🛠️",name:"hammer and wrench",tags:["tools","fix"]},{char:"⚙️",name:"gear",tags:["settings","config"]},{char:"📎",name:"paperclip",tags:["attach"]},{char:"🎯",name:"bullseye",tags:["target","focus"]},{char:"🧪",name:"test tube",tags:["lab","science"]},{char:"💊",name:"pill",tags:["medicine","health"]}],w=r=>r.toLowerCase().trim(),k=(r,i)=>{const t=w(i);if(!t)return r;const s=t.split(/\s+/);return r.filter(n=>{const d=`${n.name} ${n.tags.join(" ")}`.toLowerCase();return s.every(a=>d.includes(a))||n.char.includes(t)})},j=()=>{const[r,i]=h.useState(""),[t,s]=h.useState(""),n=h.useMemo(()=>k(x,r),[r]);h.useEffect(()=>{if(!t)return;const a=setTimeout(()=>s(""),900);return()=>clearTimeout(a)},[t]);const d=async a=>{try{await navigator.clipboard.writeText(a),s(a)}catch{const o=document.createElement("textarea");o.value=a,document.body.appendChild(o),o.select(),document.execCommand("copy"),o.remove(),s(a)}};return e.jsxs(f.Wrapper,{children:[e.jsxs("header",{className:"header",children:[e.jsx("h2",{children:"Emoji Search"}),e.jsxs("p",{className:"muted",children:["Type to filter by ",e.jsx("b",{children:"name"})," or ",e.jsx("b",{children:"tags"}),". Click any emoji to copy."]})]}),e.jsxs(f.Toolbar,{children:[e.jsx("label",{htmlFor:"emojiSearch",className:"visually-hidden",children:"Search emojis"}),e.jsx("input",{id:"emojiSearch",placeholder:"Search emoji by name or tag…",value:r,onChange:a=>i(a.target.value),autoComplete:"off",spellCheck:"false"}),r&&e.jsx("button",{className:"clearBtn",onClick:()=>i(""),"aria-label":"Clear",children:"Clear"}),e.jsxs("span",{className:"count",children:[n.length," / ",x.length]})]}),e.jsx(f.Grid,{"aria-live":"polite",children:n.length===0?e.jsx("div",{className:"empty",children:"No matches. Try another word."}):n.map(a=>e.jsxs("button",{className:"card",onClick:()=>d(a.char),title:`Copy ${a.char}`,children:[e.jsx("span",{className:"emoji","aria-hidden":!0,children:a.char}),e.jsxs("span",{className:"meta",children:[e.jsx("span",{className:"name",children:a.name}),e.jsx("span",{className:"tags",children:a.tags.join(", ")})]}),t===a.char&&e.jsx("span",{className:"copied",children:"Copied ✓"})]},`${a.char}-${a.name}`))})]})};export{j as default};
