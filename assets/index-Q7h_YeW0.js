import{g as we,d as x,r as D,j as N}from"./index-BhNMFMFX.js";var V={},rt,xt;function ye(){return xt||(xt=1,rt=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then}),rt}var ot={},j={},Dt;function F(){if(Dt)return j;Dt=1;let r;const o=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];return j.getSymbolSize=function(e){if(!e)throw new Error('"version" cannot be null or undefined');if(e<1||e>40)throw new Error('"version" should be in range from 1 to 40');return e*4+17},j.getSymbolTotalCodewords=function(e){return o[e]},j.getBCHDigit=function(i){let e=0;for(;i!==0;)e++,i>>>=1;return e},j.setToSJISFunction=function(e){if(typeof e!="function")throw new Error('"toSJISFunc" is not a valid function.');r=e},j.isKanjiModeEnabled=function(){return typeof r<"u"},j.toSJIS=function(e){return r(e)},j}var it={},Ut;function Nt(){return Ut||(Ut=1,function(r){r.L={bit:1},r.M={bit:0},r.Q={bit:3},r.H={bit:2};function o(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"l":case"low":return r.L;case"m":case"medium":return r.M;case"q":case"quartile":return r.Q;case"h":case"high":return r.H;default:throw new Error("Unknown EC Level: "+i)}}r.isValid=function(e){return e&&typeof e.bit<"u"&&e.bit>=0&&e.bit<4},r.from=function(e,t){if(r.isValid(e))return e;try{return o(e)}catch{return t}}}(it)),it}var st,kt;function Ce(){if(kt)return st;kt=1;function r(){this.buffer=[],this.length=0}return r.prototype={get:function(o){const i=Math.floor(o/8);return(this.buffer[i]>>>7-o%8&1)===1},put:function(o,i){for(let e=0;e<i;e++)this.putBit((o>>>i-e-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(o){const i=Math.floor(this.length/8);this.buffer.length<=i&&this.buffer.push(0),o&&(this.buffer[i]|=128>>>this.length%8),this.length++}},st=r,st}var at,qt;function Ee(){if(qt)return at;qt=1;function r(o){if(!o||o<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=o,this.data=new Uint8Array(o*o),this.reservedBit=new Uint8Array(o*o)}return r.prototype.set=function(o,i,e,t){const n=o*this.size+i;this.data[n]=e,t&&(this.reservedBit[n]=!0)},r.prototype.get=function(o,i){return this.data[o*this.size+i]},r.prototype.xor=function(o,i,e){this.data[o*this.size+i]^=e},r.prototype.isReserved=function(o,i){return this.reservedBit[o*this.size+i]},at=r,at}var ut={},_t;function be(){return _t||(_t=1,function(r){const o=F().getSymbolSize;r.getRowColCoords=function(e){if(e===1)return[];const t=Math.floor(e/7)+2,n=o(e),s=n===145?26:Math.ceil((n-13)/(2*t-2))*2,u=[n-7];for(let a=1;a<t-1;a++)u[a]=u[a-1]-s;return u.push(6),u.reverse()},r.getPositions=function(e){const t=[],n=r.getRowColCoords(e),s=n.length;for(let u=0;u<s;u++)for(let a=0;a<s;a++)u===0&&a===0||u===0&&a===s-1||u===s-1&&a===0||t.push([n[u],n[a]]);return t}}(ut)),ut}var ct={},jt;function Be(){if(jt)return ct;jt=1;const r=F().getSymbolSize,o=7;return ct.getPositions=function(e){const t=r(e);return[[0,0],[t-o,0],[0,t-o]]},ct}var lt={},Ft;function Re(){return Ft||(Ft=1,function(r){r.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const o={N1:3,N2:3,N3:40,N4:10};r.isValid=function(t){return t!=null&&t!==""&&!isNaN(t)&&t>=0&&t<=7},r.from=function(t){return r.isValid(t)?parseInt(t,10):void 0},r.getPenaltyN1=function(t){const n=t.size;let s=0,u=0,a=0,f=null,p=null;for(let C=0;C<n;C++){u=a=0,f=p=null;for(let m=0;m<n;m++){let g=t.get(C,m);g===f?u++:(u>=5&&(s+=o.N1+(u-5)),f=g,u=1),g=t.get(m,C),g===p?a++:(a>=5&&(s+=o.N1+(a-5)),p=g,a=1)}u>=5&&(s+=o.N1+(u-5)),a>=5&&(s+=o.N1+(a-5))}return s},r.getPenaltyN2=function(t){const n=t.size;let s=0;for(let u=0;u<n-1;u++)for(let a=0;a<n-1;a++){const f=t.get(u,a)+t.get(u,a+1)+t.get(u+1,a)+t.get(u+1,a+1);(f===4||f===0)&&s++}return s*o.N2},r.getPenaltyN3=function(t){const n=t.size;let s=0,u=0,a=0;for(let f=0;f<n;f++){u=a=0;for(let p=0;p<n;p++)u=u<<1&2047|t.get(f,p),p>=10&&(u===1488||u===93)&&s++,a=a<<1&2047|t.get(p,f),p>=10&&(a===1488||a===93)&&s++}return s*o.N3},r.getPenaltyN4=function(t){let n=0;const s=t.data.length;for(let a=0;a<s;a++)n+=t.data[a];return Math.abs(Math.ceil(n*100/s/5)-10)*o.N4};function i(e,t,n){switch(e){case r.Patterns.PATTERN000:return(t+n)%2===0;case r.Patterns.PATTERN001:return t%2===0;case r.Patterns.PATTERN010:return n%3===0;case r.Patterns.PATTERN011:return(t+n)%3===0;case r.Patterns.PATTERN100:return(Math.floor(t/2)+Math.floor(n/3))%2===0;case r.Patterns.PATTERN101:return t*n%2+t*n%3===0;case r.Patterns.PATTERN110:return(t*n%2+t*n%3)%2===0;case r.Patterns.PATTERN111:return(t*n%3+(t+n)%2)%2===0;default:throw new Error("bad maskPattern:"+e)}}r.applyMask=function(t,n){const s=n.size;for(let u=0;u<s;u++)for(let a=0;a<s;a++)n.isReserved(a,u)||n.xor(a,u,i(t,a,u))},r.getBestMask=function(t,n){const s=Object.keys(r.Patterns).length;let u=0,a=1/0;for(let f=0;f<s;f++){n(f),r.applyMask(f,t);const p=r.getPenaltyN1(t)+r.getPenaltyN2(t)+r.getPenaltyN3(t)+r.getPenaltyN4(t);r.applyMask(f,t),p<a&&(a=p,u=f)}return u}}(lt)),lt}var O={},zt;function ae(){if(zt)return O;zt=1;const r=Nt(),o=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],i=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];return O.getBlocksCount=function(t,n){switch(n){case r.L:return o[(t-1)*4+0];case r.M:return o[(t-1)*4+1];case r.Q:return o[(t-1)*4+2];case r.H:return o[(t-1)*4+3];default:return}},O.getTotalCodewordsCount=function(t,n){switch(n){case r.L:return i[(t-1)*4+0];case r.M:return i[(t-1)*4+1];case r.Q:return i[(t-1)*4+2];case r.H:return i[(t-1)*4+3];default:return}},O}var dt={},G={},$t;function Ae(){if($t)return G;$t=1;const r=new Uint8Array(512),o=new Uint8Array(256);return function(){let e=1;for(let t=0;t<255;t++)r[t]=e,o[e]=t,e<<=1,e&256&&(e^=285);for(let t=255;t<512;t++)r[t]=r[t-255]}(),G.log=function(e){if(e<1)throw new Error("log("+e+")");return o[e]},G.exp=function(e){return r[e]},G.mul=function(e,t){return e===0||t===0?0:r[o[e]+o[t]]},G}var Vt;function Pe(){return Vt||(Vt=1,function(r){const o=Ae();r.mul=function(e,t){const n=new Uint8Array(e.length+t.length-1);for(let s=0;s<e.length;s++)for(let u=0;u<t.length;u++)n[s+u]^=o.mul(e[s],t[u]);return n},r.mod=function(e,t){let n=new Uint8Array(e);for(;n.length-t.length>=0;){const s=n[0];for(let a=0;a<t.length;a++)n[a]^=o.mul(t[a],s);let u=0;for(;u<n.length&&n[u]===0;)u++;n=n.slice(u)}return n},r.generateECPolynomial=function(e){let t=new Uint8Array([1]);for(let n=0;n<e;n++)t=r.mul(t,new Uint8Array([1,o.exp(n)]));return t}}(dt)),dt}var ft,Ht;function Se(){if(Ht)return ft;Ht=1;const r=Pe();function o(i){this.genPoly=void 0,this.degree=i,this.degree&&this.initialize(this.degree)}return o.prototype.initialize=function(e){this.degree=e,this.genPoly=r.generateECPolynomial(this.degree)},o.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");const t=new Uint8Array(e.length+this.degree);t.set(e);const n=r.mod(t,this.genPoly),s=this.degree-n.length;if(s>0){const u=new Uint8Array(this.degree);return u.set(n,s),u}return n},ft=o,ft}var gt={},ht={},pt={},Kt;function ue(){return Kt||(Kt=1,pt.isValid=function(o){return!isNaN(o)&&o>=1&&o<=40}),pt}var U={},Jt;function ce(){if(Jt)return U;Jt=1;const r="[0-9]+",o="[A-Z $%*+\\-./:]+";let i="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";i=i.replace(/u/g,"\\u");const e="(?:(?![A-Z0-9 $%*+\\-./:]|"+i+`)(?:.|[\r
]))+`;U.KANJI=new RegExp(i,"g"),U.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),U.BYTE=new RegExp(e,"g"),U.NUMERIC=new RegExp(r,"g"),U.ALPHANUMERIC=new RegExp(o,"g");const t=new RegExp("^"+i+"$"),n=new RegExp("^"+r+"$"),s=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");return U.testKanji=function(a){return t.test(a)},U.testNumeric=function(a){return n.test(a)},U.testAlphanumeric=function(a){return s.test(a)},U}var Gt;function z(){return Gt||(Gt=1,function(r){const o=ue(),i=ce();r.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},r.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},r.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},r.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},r.MIXED={bit:-1},r.getCharCountIndicator=function(n,s){if(!n.ccBits)throw new Error("Invalid mode: "+n);if(!o.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?n.ccBits[0]:s<27?n.ccBits[1]:n.ccBits[2]},r.getBestModeForData=function(n){return i.testNumeric(n)?r.NUMERIC:i.testAlphanumeric(n)?r.ALPHANUMERIC:i.testKanji(n)?r.KANJI:r.BYTE},r.toString=function(n){if(n&&n.id)return n.id;throw new Error("Invalid mode")},r.isValid=function(n){return n&&n.bit&&n.ccBits};function e(t){if(typeof t!="string")throw new Error("Param is not a string");switch(t.toLowerCase()){case"numeric":return r.NUMERIC;case"alphanumeric":return r.ALPHANUMERIC;case"kanji":return r.KANJI;case"byte":return r.BYTE;default:throw new Error("Unknown mode: "+t)}}r.from=function(n,s){if(r.isValid(n))return n;try{return e(n)}catch{return s}}}(ht)),ht}var Qt;function Te(){return Qt||(Qt=1,function(r){const o=F(),i=ae(),e=Nt(),t=z(),n=ue(),s=7973,u=o.getBCHDigit(s);function a(m,g,S){for(let I=1;I<=40;I++)if(g<=r.getCapacity(I,S,m))return I}function f(m,g){return t.getCharCountIndicator(m,g)+4}function p(m,g){let S=0;return m.forEach(function(I){const L=f(I.mode,g);S+=L+I.getBitsLength()}),S}function C(m,g){for(let S=1;S<=40;S++)if(p(m,S)<=r.getCapacity(S,g,t.MIXED))return S}r.from=function(g,S){return n.isValid(g)?parseInt(g,10):S},r.getCapacity=function(g,S,I){if(!n.isValid(g))throw new Error("Invalid QR Code version");typeof I>"u"&&(I=t.BYTE);const L=o.getSymbolTotalCodewords(g),A=i.getTotalCodewordsCount(g,S),v=(L-A)*8;if(I===t.MIXED)return v;const P=v-f(I,g);switch(I){case t.NUMERIC:return Math.floor(P/10*3);case t.ALPHANUMERIC:return Math.floor(P/11*2);case t.KANJI:return Math.floor(P/13);case t.BYTE:default:return Math.floor(P/8)}},r.getBestVersionForData=function(g,S){let I;const L=e.from(S,e.M);if(Array.isArray(g)){if(g.length>1)return C(g,L);if(g.length===0)return 1;I=g[0]}else I=g;return a(I.mode,I.getLength(),L)},r.getEncodedBits=function(g){if(!n.isValid(g)||g<7)throw new Error("Invalid QR Code version");let S=g<<12;for(;o.getBCHDigit(S)-u>=0;)S^=s<<o.getBCHDigit(S)-u;return g<<12|S}}(gt)),gt}var mt={},Ot;function Ne(){if(Ot)return mt;Ot=1;const r=F(),o=1335,i=21522,e=r.getBCHDigit(o);return mt.getEncodedBits=function(n,s){const u=n.bit<<3|s;let a=u<<10;for(;r.getBCHDigit(a)-e>=0;)a^=o<<r.getBCHDigit(a)-e;return(u<<10|a)^i},mt}var wt={},yt,Yt;function Ie(){if(Yt)return yt;Yt=1;const r=z();function o(i){this.mode=r.NUMERIC,this.data=i.toString()}return o.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(e){let t,n,s;for(t=0;t+3<=this.data.length;t+=3)n=this.data.substr(t,3),s=parseInt(n,10),e.put(s,10);const u=this.data.length-t;u>0&&(n=this.data.substr(t),s=parseInt(n,10),e.put(s,u*3+1))},yt=o,yt}var Ct,Wt;function ve(){if(Wt)return Ct;Wt=1;const r=z(),o=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function i(e){this.mode=r.ALPHANUMERIC,this.data=e}return i.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(t){let n;for(n=0;n+2<=this.data.length;n+=2){let s=o.indexOf(this.data[n])*45;s+=o.indexOf(this.data[n+1]),t.put(s,11)}this.data.length%2&&t.put(o.indexOf(this.data[n]),6)},Ct=i,Ct}var Et,Zt;function Me(){if(Zt)return Et;Zt=1;const r=z();function o(i){this.mode=r.BYTE,typeof i=="string"?this.data=new TextEncoder().encode(i):this.data=new Uint8Array(i)}return o.getBitsLength=function(e){return e*8},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(i){for(let e=0,t=this.data.length;e<t;e++)i.put(this.data[e],8)},Et=o,Et}var bt,Xt;function Le(){if(Xt)return bt;Xt=1;const r=z(),o=F();function i(e){this.mode=r.KANJI,this.data=e}return i.getBitsLength=function(t){return t*13},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let n=o.toSJIS(this.data[t]);if(n>=33088&&n<=40956)n-=33088;else if(n>=57408&&n<=60351)n-=49472;else throw new Error("Invalid SJIS character: "+this.data[t]+`
Make sure your charset is UTF-8`);n=(n>>>8&255)*192+(n&255),e.put(n,13)}},bt=i,bt}var Bt={exports:{}},te;function xe(){return te||(te=1,function(r){var o={single_source_shortest_paths:function(i,e,t){var n={},s={};s[e]=0;var u=o.PriorityQueue.make();u.push(e,0);for(var a,f,p,C,m,g,S,I,L;!u.empty();){a=u.pop(),f=a.value,C=a.cost,m=i[f]||{};for(p in m)m.hasOwnProperty(p)&&(g=m[p],S=C+g,I=s[p],L=typeof s[p]>"u",(L||I>S)&&(s[p]=S,u.push(p,S),n[p]=f))}if(typeof t<"u"&&typeof s[t]>"u"){var A=["Could not find a path from ",e," to ",t,"."].join("");throw new Error(A)}return n},extract_shortest_path_from_predecessor_list:function(i,e){for(var t=[],n=e;n;)t.push(n),i[n],n=i[n];return t.reverse(),t},find_path:function(i,e,t){var n=o.single_source_shortest_paths(i,e,t);return o.extract_shortest_path_from_predecessor_list(n,t)},PriorityQueue:{make:function(i){var e=o.PriorityQueue,t={},n;i=i||{};for(n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t.queue=[],t.sorter=i.sorter||e.default_sorter,t},default_sorter:function(i,e){return i.cost-e.cost},push:function(i,e){var t={value:i,cost:e};this.queue.push(t),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};r.exports=o}(Bt)),Bt.exports}var ee;function De(){return ee||(ee=1,function(r){const o=z(),i=Ie(),e=ve(),t=Me(),n=Le(),s=ce(),u=F(),a=xe();function f(A){return unescape(encodeURIComponent(A)).length}function p(A,v,P){const E=[];let R;for(;(R=A.exec(P))!==null;)E.push({data:R[0],index:R.index,mode:v,length:R[0].length});return E}function C(A){const v=p(s.NUMERIC,o.NUMERIC,A),P=p(s.ALPHANUMERIC,o.ALPHANUMERIC,A);let E,R;return u.isKanjiModeEnabled()?(E=p(s.BYTE,o.BYTE,A),R=p(s.KANJI,o.KANJI,A)):(E=p(s.BYTE_KANJI,o.BYTE,A),R=[]),v.concat(P,E,R).sort(function(d,h){return d.index-h.index}).map(function(d){return{data:d.data,mode:d.mode,length:d.length}})}function m(A,v){switch(v){case o.NUMERIC:return i.getBitsLength(A);case o.ALPHANUMERIC:return e.getBitsLength(A);case o.KANJI:return n.getBitsLength(A);case o.BYTE:return t.getBitsLength(A)}}function g(A){return A.reduce(function(v,P){const E=v.length-1>=0?v[v.length-1]:null;return E&&E.mode===P.mode?(v[v.length-1].data+=P.data,v):(v.push(P),v)},[])}function S(A){const v=[];for(let P=0;P<A.length;P++){const E=A[P];switch(E.mode){case o.NUMERIC:v.push([E,{data:E.data,mode:o.ALPHANUMERIC,length:E.length},{data:E.data,mode:o.BYTE,length:E.length}]);break;case o.ALPHANUMERIC:v.push([E,{data:E.data,mode:o.BYTE,length:E.length}]);break;case o.KANJI:v.push([E,{data:E.data,mode:o.BYTE,length:f(E.data)}]);break;case o.BYTE:v.push([{data:E.data,mode:o.BYTE,length:f(E.data)}])}}return v}function I(A,v){const P={},E={start:{}};let R=["start"];for(let c=0;c<A.length;c++){const d=A[c],h=[];for(let l=0;l<d.length;l++){const b=d[l],w=""+c+l;h.push(w),P[w]={node:b,lastCount:0},E[w]={};for(let B=0;B<R.length;B++){const y=R[B];P[y]&&P[y].node.mode===b.mode?(E[y][w]=m(P[y].lastCount+b.length,b.mode)-m(P[y].lastCount,b.mode),P[y].lastCount+=b.length):(P[y]&&(P[y].lastCount=b.length),E[y][w]=m(b.length,b.mode)+4+o.getCharCountIndicator(b.mode,v))}}R=h}for(let c=0;c<R.length;c++)E[R[c]].end=0;return{map:E,table:P}}function L(A,v){let P;const E=o.getBestModeForData(A);if(P=o.from(v,E),P!==o.BYTE&&P.bit<E.bit)throw new Error('"'+A+'" cannot be encoded with mode '+o.toString(P)+`.
 Suggested mode is: `+o.toString(E));switch(P===o.KANJI&&!u.isKanjiModeEnabled()&&(P=o.BYTE),P){case o.NUMERIC:return new i(A);case o.ALPHANUMERIC:return new e(A);case o.KANJI:return new n(A);case o.BYTE:return new t(A)}}r.fromArray=function(v){return v.reduce(function(P,E){return typeof E=="string"?P.push(L(E,null)):E.data&&P.push(L(E.data,E.mode)),P},[])},r.fromString=function(v,P){const E=C(v,u.isKanjiModeEnabled()),R=S(E),c=I(R,P),d=a.find_path(c.map,"start","end"),h=[];for(let l=1;l<d.length-1;l++)h.push(c.table[d[l]].node);return r.fromArray(g(h))},r.rawSplit=function(v){return r.fromArray(C(v,u.isKanjiModeEnabled()))}}(wt)),wt}var ne;function Ue(){if(ne)return ot;ne=1;const r=F(),o=Nt(),i=Ce(),e=Ee(),t=be(),n=Be(),s=Re(),u=ae(),a=Se(),f=Te(),p=Ne(),C=z(),m=De();function g(c,d){const h=c.size,l=n.getPositions(d);for(let b=0;b<l.length;b++){const w=l[b][0],B=l[b][1];for(let y=-1;y<=7;y++)if(!(w+y<=-1||h<=w+y))for(let T=-1;T<=7;T++)B+T<=-1||h<=B+T||(y>=0&&y<=6&&(T===0||T===6)||T>=0&&T<=6&&(y===0||y===6)||y>=2&&y<=4&&T>=2&&T<=4?c.set(w+y,B+T,!0,!0):c.set(w+y,B+T,!1,!0))}}function S(c){const d=c.size;for(let h=8;h<d-8;h++){const l=h%2===0;c.set(h,6,l,!0),c.set(6,h,l,!0)}}function I(c,d){const h=t.getPositions(d);for(let l=0;l<h.length;l++){const b=h[l][0],w=h[l][1];for(let B=-2;B<=2;B++)for(let y=-2;y<=2;y++)B===-2||B===2||y===-2||y===2||B===0&&y===0?c.set(b+B,w+y,!0,!0):c.set(b+B,w+y,!1,!0)}}function L(c,d){const h=c.size,l=f.getEncodedBits(d);let b,w,B;for(let y=0;y<18;y++)b=Math.floor(y/3),w=y%3+h-8-3,B=(l>>y&1)===1,c.set(b,w,B,!0),c.set(w,b,B,!0)}function A(c,d,h){const l=c.size,b=p.getEncodedBits(d,h);let w,B;for(w=0;w<15;w++)B=(b>>w&1)===1,w<6?c.set(w,8,B,!0):w<8?c.set(w+1,8,B,!0):c.set(l-15+w,8,B,!0),w<8?c.set(8,l-w-1,B,!0):w<9?c.set(8,15-w-1+1,B,!0):c.set(8,15-w-1,B,!0);c.set(l-8,8,1,!0)}function v(c,d){const h=c.size;let l=-1,b=h-1,w=7,B=0;for(let y=h-1;y>0;y-=2)for(y===6&&y--;;){for(let T=0;T<2;T++)if(!c.isReserved(b,y-T)){let _=!1;B<d.length&&(_=(d[B]>>>w&1)===1),c.set(b,y-T,_),w--,w===-1&&(B++,w=7)}if(b+=l,b<0||h<=b){b-=l,l=-l;break}}}function P(c,d,h){const l=new i;h.forEach(function(T){l.put(T.mode.bit,4),l.put(T.getLength(),C.getCharCountIndicator(T.mode,c)),T.write(l)});const b=r.getSymbolTotalCodewords(c),w=u.getTotalCodewordsCount(c,d),B=(b-w)*8;for(l.getLengthInBits()+4<=B&&l.put(0,4);l.getLengthInBits()%8!==0;)l.putBit(0);const y=(B-l.getLengthInBits())/8;for(let T=0;T<y;T++)l.put(T%2?17:236,8);return E(l,c,d)}function E(c,d,h){const l=r.getSymbolTotalCodewords(d),b=u.getTotalCodewordsCount(d,h),w=l-b,B=u.getBlocksCount(d,h),y=l%B,T=B-y,_=Math.floor(l/B),J=Math.floor(w/B),he=J+1,vt=_-J,pe=new a(vt);let X=0;const Q=new Array(B),Mt=new Array(B);let tt=0;const me=new Uint8Array(c.buffer);for(let $=0;$<B;$++){const nt=$<T?J:he;Q[$]=me.slice(X,X+nt),Mt[$]=pe.encode(Q[$]),X+=nt,tt=Math.max(tt,nt)}const et=new Uint8Array(l);let Lt=0,k,q;for(k=0;k<tt;k++)for(q=0;q<B;q++)k<Q[q].length&&(et[Lt++]=Q[q][k]);for(k=0;k<vt;k++)for(q=0;q<B;q++)et[Lt++]=Mt[q][k];return et}function R(c,d,h,l){let b;if(Array.isArray(c))b=m.fromArray(c);else if(typeof c=="string"){let _=d;if(!_){const J=m.rawSplit(c);_=f.getBestVersionForData(J,h)}b=m.fromString(c,_||40)}else throw new Error("Invalid data");const w=f.getBestVersionForData(b,h);if(!w)throw new Error("The amount of data is too big to be stored in a QR Code");if(!d)d=w;else if(d<w)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+w+`.
`);const B=P(d,h,b),y=r.getSymbolSize(d),T=new e(y);return g(T,d),S(T),I(T,d),A(T,h,0),d>=7&&L(T,d),v(T,B),isNaN(l)&&(l=s.getBestMask(T,A.bind(null,T,h))),s.applyMask(l,T),A(T,h,l),{modules:T,version:d,errorCorrectionLevel:h,maskPattern:l,segments:b}}return ot.create=function(d,h){if(typeof d>"u"||d==="")throw new Error("No input text");let l=o.M,b,w;return typeof h<"u"&&(l=o.from(h.errorCorrectionLevel,o.M),b=f.from(h.version),w=s.from(h.maskPattern),h.toSJISFunc&&r.setToSJISFunction(h.toSJISFunc)),R(d,b,l,w)},ot}var Rt={},At={},re;function le(){return re||(re=1,function(r){function o(i){if(typeof i=="number"&&(i=i.toString()),typeof i!="string")throw new Error("Color should be defined as hex string");let e=i.slice().replace("#","").split("");if(e.length<3||e.length===5||e.length>8)throw new Error("Invalid hex color: "+i);(e.length===3||e.length===4)&&(e=Array.prototype.concat.apply([],e.map(function(n){return[n,n]}))),e.length===6&&e.push("F","F");const t=parseInt(e.join(""),16);return{r:t>>24&255,g:t>>16&255,b:t>>8&255,a:t&255,hex:"#"+e.slice(0,6).join("")}}r.getOptions=function(e){e||(e={}),e.color||(e.color={});const t=typeof e.margin>"u"||e.margin===null||e.margin<0?4:e.margin,n=e.width&&e.width>=21?e.width:void 0,s=e.scale||4;return{width:n,scale:n?4:s,margin:t,color:{dark:o(e.color.dark||"#000000ff"),light:o(e.color.light||"#ffffffff")},type:e.type,rendererOpts:e.rendererOpts||{}}},r.getScale=function(e,t){return t.width&&t.width>=e+t.margin*2?t.width/(e+t.margin*2):t.scale},r.getImageWidth=function(e,t){const n=r.getScale(e,t);return Math.floor((e+t.margin*2)*n)},r.qrToImageData=function(e,t,n){const s=t.modules.size,u=t.modules.data,a=r.getScale(s,n),f=Math.floor((s+n.margin*2)*a),p=n.margin*a,C=[n.color.light,n.color.dark];for(let m=0;m<f;m++)for(let g=0;g<f;g++){let S=(m*f+g)*4,I=n.color.light;if(m>=p&&g>=p&&m<f-p&&g<f-p){const L=Math.floor((m-p)/a),A=Math.floor((g-p)/a);I=C[u[L*s+A]?1:0]}e[S++]=I.r,e[S++]=I.g,e[S++]=I.b,e[S]=I.a}}}(At)),At}var oe;function ke(){return oe||(oe=1,function(r){const o=le();function i(t,n,s){t.clearRect(0,0,n.width,n.height),n.style||(n.style={}),n.height=s,n.width=s,n.style.height=s+"px",n.style.width=s+"px"}function e(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}r.render=function(n,s,u){let a=u,f=s;typeof a>"u"&&(!s||!s.getContext)&&(a=s,s=void 0),s||(f=e()),a=o.getOptions(a);const p=o.getImageWidth(n.modules.size,a),C=f.getContext("2d"),m=C.createImageData(p,p);return o.qrToImageData(m.data,n,a),i(C,f,p),C.putImageData(m,0,0),f},r.renderToDataURL=function(n,s,u){let a=u;typeof a>"u"&&(!s||!s.getContext)&&(a=s,s=void 0),a||(a={});const f=r.render(n,s,a),p=a.type||"image/png",C=a.rendererOpts||{};return f.toDataURL(p,C.quality)}}(Rt)),Rt}var Pt={},ie;function qe(){if(ie)return Pt;ie=1;const r=le();function o(t,n){const s=t.a/255,u=n+'="'+t.hex+'"';return s<1?u+" "+n+'-opacity="'+s.toFixed(2).slice(1)+'"':u}function i(t,n,s){let u=t+n;return typeof s<"u"&&(u+=" "+s),u}function e(t,n,s){let u="",a=0,f=!1,p=0;for(let C=0;C<t.length;C++){const m=Math.floor(C%n),g=Math.floor(C/n);!m&&!f&&(f=!0),t[C]?(p++,C>0&&m>0&&t[C-1]||(u+=f?i("M",m+s,.5+g+s):i("m",a,0),a=0,f=!1),m+1<n&&t[C+1]||(u+=i("h",p),p=0)):a++}return u}return Pt.render=function(n,s,u){const a=r.getOptions(s),f=n.modules.size,p=n.modules.data,C=f+a.margin*2,m=a.color.light.a?"<path "+o(a.color.light,"fill")+' d="M0 0h'+C+"v"+C+'H0z"/>':"",g="<path "+o(a.color.dark,"stroke")+' d="'+e(p,f,a.margin)+'"/>',S='viewBox="0 0 '+C+" "+C+'"',L='<svg xmlns="http://www.w3.org/2000/svg" '+(a.width?'width="'+a.width+'" height="'+a.width+'" ':"")+S+' shape-rendering="crispEdges">'+m+g+`</svg>
`;return typeof u=="function"&&u(null,L),L},Pt}var se;function _e(){if(se)return V;se=1;const r=ye(),o=Ue(),i=ke(),e=qe();function t(n,s,u,a,f){const p=[].slice.call(arguments,1),C=p.length,m=typeof p[C-1]=="function";if(!m&&!r())throw new Error("Callback required as last argument");if(m){if(C<2)throw new Error("Too few arguments provided");C===2?(f=u,u=s,s=a=void 0):C===3&&(s.getContext&&typeof f>"u"?(f=a,a=void 0):(f=a,a=u,u=s,s=void 0))}else{if(C<1)throw new Error("Too few arguments provided");return C===1?(u=s,s=a=void 0):C===2&&!s.getContext&&(a=u,u=s,s=void 0),new Promise(function(g,S){try{const I=o.create(u,a);g(n(I,s,a))}catch(I){S(I)}})}try{const g=o.create(u,a);f(null,n(g,s,a))}catch(g){f(g)}}return V.create=o.create,V.toCanvas=t.bind(null,i.render),V.toDataURL=t.bind(null,i.renderToDataURL),V.toString=t.bind(null,function(n,s,u){return e.render(n,u)}),V}var je=_e();const Fe=we(je),ze="var(--card, #111)",W="var(--text, #e9e9e9)",Z="var(--muted, #b7b7b7)",K="var(--border, #222)",H="var(--accent, #22c55e)",de="var(--radius, 16px)",$e=x.div`
    color: ${W};
    padding: var(--space-5, 32px) var(--space-4, 24px);
`,Ve=x.div`
    display: flex;
    gap: 12px;
    align-items: baseline;
    margin-bottom: var(--space-4, 24px);

    h1 {
        font-size: clamp(18px, 2vw, 24px);
        font-weight: 700;
        letter-spacing: 0.2px;
    }
    .muted {
        color: ${Z};
        font-size: 12px;
    }
`,He=x.div`
    display: grid;
    grid-template-columns: 1.1fr 1fr;
    gap: var(--space-4, 24px);

    @media (max-width: 960px) {
        grid-template-columns: 1fr;
    }
`,Ke=x.section`
    background: ${ze};
    border: 1px solid ${K};
    border-radius: ${de};
    box-shadow: var(--shadow, 0 8px 30px rgba(0, 0, 0, 0.25));
    padding: var(--space-4, 24px);
`,Je=x.form`
    display: grid;
    gap: var(--space-3, 16px);

    input[type="text"],
    input[type="search"],
    input[type="number"],
    input[type="file"] + label,
    input:not([type="file"]) {
        width: 100%;
        background: #0f0f0f;
        color: ${W};
        border: 1px solid ${K};
        border-radius: 12px;
        padding: 12px 14px;
        outline: none;
    }

    input:focus {
        border-color: ${H};
        box-shadow: 0 0 0 3px color-mix(in srgb, ${H} 30%, transparent);
    }

    label {
        color: ${Z};
        font-size: 12.5px;
    }
`,Ge=x.div`
    display: grid;
    gap: 8px;
`,Qe=x.div`
    color: #ff6b6b;
    font-size: 12.5px;
    margin-top: -4px;
`,Oe=x.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: center;
`,Ye=x.div`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;

    button {
        background: #151515;
        border: 1px solid ${K};
        color: ${W};
        padding: 6px 10px;
        border-radius: 999px;
        font-size: 12.5px;
        cursor: pointer;
    }
    button:hover {
        border-color: ${H};
    }
`,We=x.div`
    margin-top: 8px;
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 10px;
    align-items: center;

    input[type="range"] {
        accent-color: ${H};
    }
`,Ze=x.div`
    display: grid;
    place-items: center;
    padding: 12px;
    border: 1px dashed ${K};
    border-radius: ${de};
    background: #0f0f0f;

    canvas {
        width: min(420px, 80vw);
        height: auto;
    }
`,Xe=x.pre`
    margin-top: var(--space-3, 16px);
    padding: 10px 12px;
    background: #0f0f0f;
    border: 1px solid ${K};
    border-radius: 10px;
    word-break: break-all;
    white-space: pre-wrap;
    color: ${Z};
`,tn=x.div`
    margin-top: var(--space-3, 16px);
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`,It=x.button`
    border-radius: 12px;
    padding: 10px 14px;
    font-weight: 600;
    cursor: pointer;
    border: 1px solid ${K};
    background: #161616;
    color: ${W};

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`,en=x(It)`
    border-color: ${H};
    background: color-mix(in srgb, ${H} 16%, #161616);
`,nn=x(It)``,rn=x(It)`
    background: transparent;
`,on=x.p`
    margin-top: 8px;
    color: ${Z};
    font-size: 12px;
`,M={Wrapper:$e,HeaderBar:Ve,Grid:He,Panel:Ke,Form:Je,FieldRow:Ge,Error:Qe,Row:Oe,Chips:Ye,SliderRow:We,QRBox:Ze,UrlPreview:Xe,Actions:tn,PrimaryBtn:en,SecondaryBtn:nn,GhostBtn:rn,TinyNote:on},fe="qrGenerator",ge=r=>{if(r===""||r==null)return"";const i=String(r).replace(/[^\d.]/g,"").split(".");if(i.length>2)return i[0]+"."+i.slice(1).join("");const[e="",t=""]=i;return t?`${e}.${t.slice(0,2)}`:e},sn=(r="")=>/^[a-zA-Z0-9.\-_]+@[a-zA-Z0-9.\-_]+$/.test(r.trim()),an=({pa:r,pn:o,am:i,tn:e})=>{const t=new URLSearchParams;return r&&t.set("pa",r.trim()),o&&t.set("pn",o.trim()),i!==""&&i!=null&&t.set("am",ge(i)),e&&t.set("tn",e.trim()),t.set("cu","INR"),`upi://pay?${t.toString()}`},St=(r,o)=>{try{const i=localStorage.getItem(`${fe}::${r}`);return i?JSON.parse(i):o}catch{return o}},Tt=(r,o)=>{try{localStorage.setItem(`${fe}::${r}`,JSON.stringify(o))}catch{}};function dn(){const[r,o]=D.useState(St("form",{pa:"",pn:"",am:"",tn:""})),[i,e]=D.useState(St("logo",null)),[t,n]=D.useState(St("logoScale",.18)),[s,u]=D.useState(!1),[a,f]=D.useState(""),p=D.useRef(null),C=D.useRef(null),m=D.useMemo(()=>an(r),[r]),g=R=>c=>{const d=R==="am"?ge(c.target.value):c.target.value;o(h=>({...h,[R]:d}))};D.useEffect(()=>Tt("form",r),[r]),D.useEffect(()=>Tt("logo",i),[i]),D.useEffect(()=>Tt("logoScale",t),[t]),D.useEffect(()=>{if(!r.pa)return f("");f(sn(r.pa)?"":"Enter a valid VPA like ashish@okicici")},[r.pa]),D.useEffect(()=>{const R=p.current;if(!R)return;(async()=>{try{if(await Fe.toCanvas(R,m,{width:512,margin:2,errorCorrectionLevel:"H"}),i){const d=R.getContext("2d"),h=new Image;h.onload=()=>{const l=Math.round(R.width*un(t,.1,.25)),b=(R.width-l)/2,w=(R.height-l)/2;cn(d,b-10,w-10,l+20,l+20,12),d.fillStyle="#fff",d.fill(),d.drawImage(h,b,w,l,l)},h.src=i}}catch(d){console.error("QR draw error",d)}})()},[m,i,t]);const S=async()=>{try{await navigator.clipboard.writeText(m),u(!0),setTimeout(()=>u(!1),1200)}catch{}},I=()=>{const R=p.current;if(!R)return;const c=document.createElement("a");c.download="upi-qr.png",c.href=R.toDataURL("image/png"),c.click()},L=()=>{const R=p.current;if(!R)return;const c=R.toDataURL("image/png"),d=document.createElement("iframe");d.setAttribute("aria-hidden","true"),Object.assign(d.style,{position:"fixed",right:"0",bottom:"0",width:"0",height:"0",border:"0"}),document.body.appendChild(d);const h=l=>{(l==null?void 0:l.data)==="__qrPrintDone__"&&(window.removeEventListener("message",h),setTimeout(()=>d.remove(),50))};window.addEventListener("message",h),d.srcdoc=`
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8" />
          <title>Print QR</title>
          <style>
            @page { margin: 10mm; }
            html, body { height: 100%; }
            body { display: grid; place-items: center; }
            img { width: 72mm; height: auto; }
          </style>
        </head>
        <body>
          <img id="qr" src="${c}" />
          <script>
            const img = document.getElementById('qr');
            img.onload = () => { setTimeout(() => { window.focus(); window.print(); }, 50); };
            window.onafterprint = () => { parent.postMessage("__qrPrintDone__", "*"); };
          <\/script>
        </body>
      </html>
    `},A=R=>{var h;const c=(h=R.target.files)==null?void 0:h[0];if(!c)return;const d=new FileReader;d.onload=()=>{e(d.result)},d.readAsDataURL(c)},v=()=>{e(null),C.current&&(C.current.value="")},P=()=>{confirm("Clear all fields?")&&o({pa:"",pn:"",am:"",tn:""})},E=!r.pa||!!a;return N.jsxs(M.Wrapper,{children:[N.jsxs(M.HeaderBar,{children:[N.jsx("h1",{children:"UPI QR Generator (Pro)"}),N.jsx("span",{className:"muted",children:"100% client-side · localStorage only"})]}),N.jsxs(M.Grid,{children:[N.jsx(M.Panel,{children:N.jsxs(M.Form,{children:[N.jsx(Y,{label:"VPA (pa)",placeholder:"ashish@okicici",value:r.pa,onChange:g("pa"),autoFocus:!0,required:!0}),!!a&&N.jsx(M.Error,{children:a}),N.jsx(Y,{label:"Payee Name (pn)",placeholder:"Ashish Ranjan",value:r.pn,onChange:g("pn")}),N.jsxs(M.FieldRow,{children:[N.jsx("label",{children:"Quick amounts"}),N.jsxs(M.Chips,{children:[[50,100,199,500].map(R=>N.jsxs("button",{type:"button",onClick:()=>o(c=>({...c,am:String(R)})),children:["₹",R]},R)),N.jsx("button",{type:"button",onClick:()=>o(R=>({...R,am:""})),children:"Clear"})]})]}),N.jsx(Y,{label:"Amount (am)",placeholder:"199.00",value:r.am,onChange:g("am"),inputMode:"decimal"}),N.jsx(Y,{label:"Note (tn)",placeholder:"Consulting fee",value:r.tn,onChange:g("tn")}),N.jsxs(M.FieldRow,{children:[N.jsx("label",{children:"Logo (optional)"}),N.jsxs(M.Row,{children:[N.jsx("input",{ref:C,type:"file",accept:"image/*",onChange:A,onClick:R=>{R.currentTarget.value=""}}),i&&N.jsx(M.GhostBtn,{type:"button",onClick:v,children:"Remove"})]}),N.jsxs(M.SliderRow,{children:[N.jsx("span",{children:"Logo size"}),N.jsx("input",{type:"range",min:"0.10",max:"0.25",step:"0.01",value:t,onChange:R=>n(Number(R.target.value))}),N.jsxs("span",{children:[Math.round(t*100),"%"]})]})]}),N.jsx(M.Row,{children:N.jsx(M.GhostBtn,{type:"button",onClick:P,children:"Clear fields"})})]})}),N.jsxs(M.Panel,{children:[N.jsx(M.QRBox,{children:N.jsx("canvas",{ref:p,"aria-label":"UPI QR code"})}),N.jsx(M.UrlPreview,{title:m,children:m}),N.jsxs(M.Actions,{children:[N.jsx(M.PrimaryBtn,{type:"button",onClick:S,disabled:E,children:s?"Copied!":"Copy UPI Link"}),N.jsx(M.SecondaryBtn,{type:"button",onClick:I,disabled:E,children:"Download PNG"}),N.jsx(M.SecondaryBtn,{type:"button",onClick:L,disabled:E,children:"Print QR"})]}),N.jsx(M.TinyNote,{children:"Tip: Keep logo ≤ 20% of QR for reliable scanning. Empty fields are automatically skipped."})]})]})]})}function Y({label:r,...o}){return N.jsxs(M.FieldRow,{children:[N.jsx("label",{children:r}),N.jsx("input",{...o})]})}function un(r,o,i){return Math.max(o,Math.min(i,r))}function cn(r,o,i,e,t,n){const s=Math.min(n,e/2,t/2);r.beginPath(),r.moveTo(o+s,i),r.arcTo(o+e,i,o+e,i+t,s),r.arcTo(o+e,i+t,o,i+t,s),r.arcTo(o,i+t,o,i,s),r.arcTo(o,i,o+e,i,s),r.closePath()}export{dn as default};
