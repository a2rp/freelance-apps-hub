import{d as t,j as e,G as u,M as f}from"./index-CZmFNdSy.js";import{F as b,a as g,b as w,c as v,d as y,e as k}from"./index-BeOaZP3M.js";const F={Wrapper:t.div`
        padding: 24px;

        h1 {
            margin-bottom: 30px;
        }

        fieldset {
            padding: 15px;
            margin: 50px 0;
            border: 1px solid #333;

            legend {
                padding: 0 15px;
                font-size: 16px;
                color: #64493d;
            }
            .para {
                display: block;
                margin-bottom: 15px;
                max-width: 900px;

                .heading {
                    margin-bottom: 15px;
                }
                p {
                    margin-bottom: 15px;
                }

                .section {
                    margin-bottom: 15px;

                    ul {
                        margin-left: 30px;
                    }

                    h3 {
                        a {
                            color: #fff;
                            text-decoration: none;
                            &:hover {
                                text-decoration: underline;
                            }
                        }
                    }
                }
            }
        }
    `},s=t.div`
    /* border-bottom: 1px solid #ccc; */
    display: flex;
    gap: 15px;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;

    &:hover {
        background-color: #000;
        /* color: #000;
        a {
            color: #000;
        } */
    }
`,i=t.div`
    flex: 0 0 80px;
    white-space: nowrap;
`,a=t.div`
    /* flex: 1 1 100%; */
    /* border: 1px solid #f00; */
    display: flex;
    align-items: center;
    gap: 15px;

    a {
        color: #aaa;
        overflow-wrap: anywhere;
        word-break: break-word;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }
    .icon {
        /* border: 1px solid #f00; */
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`,N=({width:r=24,height:l=24})=>e.jsxs("svg",{width:r,height:l,viewBox:"0 0 3 2",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M0,0 H3 V2 H0 Z",fill:"#f93"}),e.jsx("path",{d:"M0,0.667 H3 V1.333 H0 Z",fill:"#fff"}),e.jsx("path",{d:"M0,1.333 H3 V2 H0 Z",fill:"#128807"}),e.jsx("circle",{cx:"1.5",cy:"1",r:"0.2",fill:"#008"})]});function c(r){return u({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4"},child:[]},{tag:"path",attr:{d:"M11.5 3a16.989 16.989 0 0 0 -1.826 4"},child:[]},{tag:"path",attr:{d:"M12.5 3a16.989 16.989 0 0 1 1.828 4"},child:[]},{tag:"path",attr:{d:"M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4"},child:[]},{tag:"path",attr:{d:"M11.5 21a16.989 16.989 0 0 1 -1.826 -4"},child:[]},{tag:"path",attr:{d:"M12.5 21a16.989 16.989 0 0 0 1.828 -4"},child:[]},{tag:"path",attr:{d:"M2 10l1 4l1.5 -4l1.5 4l1 -4"},child:[]},{tag:"path",attr:{d:"M17 10l1 4l1.5 -4l1.5 4l1 -4"},child:[]},{tag:"path",attr:{d:"M9.5 10l1 4l1.5 -4l1.5 4l1 -4"},child:[]}]})(r)}const M=()=>{function r(h){try{const x=new Date(h),p=new Intl.DateTimeFormat("en-US",{month:"short",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1,timeZone:"Asia/Kolkata"}).formatToParts(x),n=j=>{var d;return((d=p.find(m=>m.type===j))==null?void 0:d.value)||""};return`${n("month")} ${n("day")}, ${n("year")} ${n("hour")}:${n("minute")}:${n("second")} hrs`}catch{return"-"}}const l="2025-10-12T18:53:33+05:30",o=r(l);return e.jsx(e.Fragment,{children:e.jsxs(F.Wrapper,{children:[e.jsxs("h3",{children:["Freelance Apps Hub - last updated: ",e.jsx("time",{dateTime:l,children:o})]}),e.jsxs("fieldset",{children:[e.jsx("legend",{children:"About Project"}),e.jsxs("div",{className:"para",children:[e.jsxs("div",{className:"section",children:[e.jsx("b",{children:"Freelance Apps Hub"})," is a curated set of ",e.jsx("i",{children:"refactored"}),", single-purpose tools—bits and parts from apps I built while freelancing (plus a few I studied online)—now cleaned up and open-sourced. Many of these began in ",e.jsx("b",{children:"PHP"}),", ",e.jsx("b",{children:"C/C++"}),", ",e.jsx("b",{children:"Visual Basic"}),", ",e.jsx("b",{children:"Java"}),", and ",e.jsx("b",{children:"vanilla JavaScript"})," (and later ",e.jsx("b",{children:"React"}),"), and have been modernized, standardized, and ported into a lightweight React (Vite) shell."]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{children:"What's inside"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Real client utilities, refactored: PHP / C/C++ / JavaScript / React → consistent UI, confirm dialogs, and print views"}),e.jsx("li",{children:"Vanilla HTML + SCSS + JavaScript apps, hosted in an isolated React route (no CSS/JS clashes)"}),e.jsx("li",{children:"Offline-first with tidy “Print / Save as PDF” layouts"}),e.jsx("li",{children:"Examples: UPI QR Generator, Daily Focus Planner, Cash Denomination Counter (more coming)"})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{children:"How to use"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Pick an app from the left → start using instantly"}),e.jsx("li",{children:"Use Print / Save as PDF where available"}),e.jsxs("li",{children:["Your data stays on your device (",e.jsx("b",{children:"localStorage only"}),")"]})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{children:"Why this exists"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Share real, field-tested freelance utilities with the community"}),e.jsx("li",{children:"Provide reusable patterns for counters, billing, planning, and simple ops"})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{children:"Contribute / Feedback"}),"⭐ the repo, file issues, or suggest an app idea."]}),e.jsxs("div",{className:"section",children:[e.jsxs("h3",{children:["Live: ",e.jsx("a",{href:"https://a2rp.github.io/freelance-apps-hub/home",target:"_blank",children:"a2rp.github.io/freelance-apps-hub/home"})]}),e.jsxs("h3",{children:["Code: ",e.jsx("a",{href:"https://github.com/a2rp/freelance-apps-hub",target:"_blank",children:"github.com/a2rp/freelance-apps-hub"})]})]})]})]}),e.jsxs("fieldset",{children:[e.jsx("legend",{children:"About Developer"}),e.jsxs("div",{className:"aboutDeveloper",children:[e.jsxs(s,{children:[e.jsx(i,{children:"Name"}),e.jsxs(a,{children:["Ashish Ranjan",e.jsx("div",{className:"icon",children:e.jsx(b,{size:20})})]})]}),e.jsxs(s,{children:[e.jsx(i,{children:"Phone"}),e.jsxs(a,{children:[e.jsx("a",{href:"tel:+918123747965",children:"+91 8123747965"}),e.jsx("div",{className:"icon",children:e.jsx(g,{size:20})})]})]}),e.jsxs(s,{children:[e.jsx(i,{children:"Email"}),e.jsxs(a,{children:[e.jsx("a",{href:"mailto:ash.ranjan09@gmail.com",children:"ash.ranjan09@gmail.com"}),e.jsx("div",{className:"icon",children:e.jsx(f,{size:20})})]})]}),e.jsxs(s,{children:[e.jsx(i,{children:"Nationality"}),e.jsxs(a,{children:["The Republic of India",e.jsx("div",{className:"icon",children:e.jsx(N,{})})]})]}),e.jsxs(s,{children:[e.jsx(i,{children:"Website"}),e.jsxs(a,{children:[e.jsx("a",{href:"https://www.ashishranjan.net/",target:"_blank",rel:"noopener noreferrer",children:"https://www.ashishranjan.net/"}),e.jsx("div",{className:"icon",children:e.jsx(c,{size:20})})]})]}),e.jsxs(s,{children:[e.jsx(i,{children:"Old Website"}),e.jsxs(a,{children:[e.jsx("a",{href:"http://www.ashishranjan.in/",target:"_blank",rel:"noopener noreferrer",children:"http://www.ashishranjan.in/"}),e.jsx("div",{className:"icon",children:e.jsx(c,{size:20})})]})]}),e.jsxs(s,{children:[e.jsx(i,{children:"Facebook"}),e.jsxs(a,{children:[e.jsx("a",{href:"https://www.facebook.com/theash.ashish/",target:"_blank",rel:"noopener noreferrer",children:"facebook.com/theash.ashish/"}),e.jsx("div",{className:"icon",children:e.jsx(w,{size:20})})]})]}),e.jsxs(s,{children:[e.jsx(i,{children:"LinkedIn"}),e.jsxs(a,{children:[e.jsx("a",{href:"https://www.linkedin.com/in/aashishranjan/",target:"_blank",rel:"noopener noreferrer",children:"linkedin.com/in/aashishranjan/"}),e.jsx("div",{className:"icon",children:e.jsx(v,{size:20})})]})]}),e.jsxs(s,{children:[e.jsx(i,{children:"YouTube"}),e.jsxs(a,{children:[e.jsx("a",{href:"https://www.youtube.com/channel/UCLHIBQeFQIxmRveVAjLvlbQ",target:"_blank",rel:"noopener noreferrer",children:"youtube.com/channel/UCLHIBQeFQIxmRveVAjLvlbQ"}),e.jsx("div",{className:"icon",children:e.jsx(y,{size:20})})]})]}),e.jsxs(s,{children:[e.jsx(i,{children:"GitHub"}),e.jsxs(a,{children:[e.jsx("a",{href:"https://github.com/a2rp",target:"_blank",rel:"noopener noreferrer",children:"github.com/a2rp"}),e.jsx("div",{className:"icon",children:e.jsx(k,{size:20})})]})]})]})]})]})})};export{M as default};
