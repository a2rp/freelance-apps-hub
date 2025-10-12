import{d as T,r as O,j as l}from"./index-BA60W61Y.js";function St(e,t){return function(){return e.apply(t,arguments)}}const{toString:Kt}=Object.prototype,{getPrototypeOf:Ge}=Object,{iterator:$e,toStringTag:_t}=Symbol,Fe=(e=>t=>{const r=Kt.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),J=e=>(e=e.toLowerCase(),t=>Fe(t)===e),Be=e=>t=>typeof t===e,{isArray:fe}=Array,pe=Be("undefined");function xe(e){return e!==null&&!pe(e)&&e.constructor!==null&&!pe(e.constructor)&&D(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Et=J("ArrayBuffer");function Vt(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Et(e.buffer),t}const Wt=Be("string"),D=Be("function"),Rt=Be("number"),we=e=>e!==null&&typeof e=="object",Xt=e=>e===!0||e===!1,Ce=e=>{if(Fe(e)!=="object")return!1;const t=Ge(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(_t in e)&&!($e in e)},Gt=e=>{if(!we(e)||xe(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},Yt=J("Date"),Qt=J("File"),Zt=J("Blob"),er=J("FileList"),tr=e=>we(e)&&D(e.pipe),rr=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||D(e.append)&&((t=Fe(e))==="formdata"||t==="object"&&D(e.toString)&&e.toString()==="[object FormData]"))},nr=J("URLSearchParams"),[sr,or,ir,ar]=["ReadableStream","Request","Response","Headers"].map(J),lr=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function je(e,t,{allOwnKeys:r=!1}={}){if(e===null||typeof e>"u")return;let n,s;if(typeof e!="object"&&(e=[e]),fe(e))for(n=0,s=e.length;n<s;n++)t.call(null,e[n],n,e);else{if(xe(e))return;const i=r?Object.getOwnPropertyNames(e):Object.keys(e),o=i.length;let c;for(n=0;n<o;n++)c=i[n],t.call(null,e[c],c,e)}}function At(e,t){if(xe(e))return null;t=t.toLowerCase();const r=Object.keys(e);let n=r.length,s;for(;n-- >0;)if(s=r[n],t===s.toLowerCase())return s;return null}const oe=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Tt=e=>!pe(e)&&e!==oe;function Je(){const{caseless:e,skipUndefined:t}=Tt(this)&&this||{},r={},n=(s,i)=>{const o=e&&At(r,i)||i;Ce(r[o])&&Ce(s)?r[o]=Je(r[o],s):Ce(s)?r[o]=Je({},s):fe(s)?r[o]=s.slice():(!t||!pe(s))&&(r[o]=s)};for(let s=0,i=arguments.length;s<i;s++)arguments[s]&&je(arguments[s],n);return r}const cr=(e,t,r,{allOwnKeys:n}={})=>(je(t,(s,i)=>{r&&D(s)?e[i]=St(s,r):e[i]=s},{allOwnKeys:n}),e),dr=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),ur=(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},pr=(e,t,r,n)=>{let s,i,o;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),i=s.length;i-- >0;)o=s[i],(!n||n(o,e,t))&&!c[o]&&(t[o]=e[o],c[o]=!0);e=r!==!1&&Ge(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},fr=(e,t,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=t.length;const n=e.indexOf(t,r);return n!==-1&&n===r},hr=e=>{if(!e)return null;if(fe(e))return e;let t=e.length;if(!Rt(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},mr=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Ge(Uint8Array)),yr=(e,t)=>{const n=(e&&e[$e]).call(e);let s;for(;(s=n.next())&&!s.done;){const i=s.value;t.call(e,i[0],i[1])}},br=(e,t)=>{let r;const n=[];for(;(r=e.exec(t))!==null;)n.push(r);return n},gr=J("HTMLFormElement"),xr=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,n,s){return n.toUpperCase()+s}),et=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),wr=J("RegExp"),Ot=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),n={};je(r,(s,i)=>{let o;(o=t(s,i,e))!==!1&&(n[i]=o||s)}),Object.defineProperties(e,n)},jr=e=>{Ot(e,(t,r)=>{if(D(e)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const n=e[r];if(D(n)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},Sr=(e,t)=>{const r={},n=s=>{s.forEach(i=>{r[i]=!0})};return fe(e)?n(e):n(String(e).split(t)),r},_r=()=>{},Er=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function Rr(e){return!!(e&&D(e.append)&&e[_t]==="FormData"&&e[$e])}const Ar=e=>{const t=new Array(10),r=(n,s)=>{if(we(n)){if(t.indexOf(n)>=0)return;if(xe(n))return n;if(!("toJSON"in n)){t[s]=n;const i=fe(n)?[]:{};return je(n,(o,c)=>{const m=r(o,s+1);!pe(m)&&(i[c]=m)}),t[s]=void 0,i}}return n};return r(e,0)},Tr=J("AsyncFunction"),Or=e=>e&&(we(e)||D(e))&&D(e.then)&&D(e.catch),kt=((e,t)=>e?setImmediate:t?((r,n)=>(oe.addEventListener("message",({source:s,data:i})=>{s===oe&&i===r&&n.length&&n.shift()()},!1),s=>{n.push(s),oe.postMessage(r,"*")}))(`axios@${Math.random()}`,[]):r=>setTimeout(r))(typeof setImmediate=="function",D(oe.postMessage)),kr=typeof queueMicrotask<"u"?queueMicrotask.bind(oe):typeof process<"u"&&process.nextTick||kt,Cr=e=>e!=null&&D(e[$e]),a={isArray:fe,isArrayBuffer:Et,isBuffer:xe,isFormData:rr,isArrayBufferView:Vt,isString:Wt,isNumber:Rt,isBoolean:Xt,isObject:we,isPlainObject:Ce,isEmptyObject:Gt,isReadableStream:sr,isRequest:or,isResponse:ir,isHeaders:ar,isUndefined:pe,isDate:Yt,isFile:Qt,isBlob:Zt,isRegExp:wr,isFunction:D,isStream:tr,isURLSearchParams:nr,isTypedArray:mr,isFileList:er,forEach:je,merge:Je,extend:cr,trim:lr,stripBOM:dr,inherits:ur,toFlatObject:pr,kindOf:Fe,kindOfTest:J,endsWith:fr,toArray:hr,forEachEntry:yr,matchAll:br,isHTMLForm:gr,hasOwnProperty:et,hasOwnProp:et,reduceDescriptors:Ot,freezeMethods:jr,toObjectSet:Sr,toCamelCase:xr,noop:_r,toFiniteNumber:Er,findKey:At,global:oe,isContextDefined:Tt,isSpecCompliantForm:Rr,toJSONObject:Ar,isAsyncFn:Tr,isThenable:Or,setImmediate:kt,asap:kr,isIterable:Cr};function g(e,t,r,n,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),s&&(this.response=s,this.status=s.status?s.status:null)}a.inherits(g,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.status}}});const Ct=g.prototype,Nt={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Nt[e]={value:e}});Object.defineProperties(g,Nt);Object.defineProperty(Ct,"isAxiosError",{value:!0});g.from=(e,t,r,n,s,i)=>{const o=Object.create(Ct);a.toFlatObject(e,o,function(u){return u!==Error.prototype},f=>f!=="isAxiosError");const c=e&&e.message?e.message:"Error",m=t==null&&e?e.code:t;return g.call(o,c,m,r,n,s),e&&o.cause==null&&Object.defineProperty(o,"cause",{value:e,configurable:!0}),o.name=e&&e.name||"Error",i&&Object.assign(o,i),o};const Nr=null;function Ke(e){return a.isPlainObject(e)||a.isArray(e)}function vt(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function tt(e,t,r){return e?e.concat(t).map(function(s,i){return s=vt(s),!r&&i?"["+s+"]":s}).join(r?".":""):t}function vr(e){return a.isArray(e)&&!e.some(Ke)}const Pr=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function De(e,t,r){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,r=a.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(h,y){return!a.isUndefined(y[h])});const n=r.metaTokens,s=r.visitor||u,i=r.dots,o=r.indexes,m=(r.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function f(p){if(p===null)return"";if(a.isDate(p))return p.toISOString();if(a.isBoolean(p))return p.toString();if(!m&&a.isBlob(p))throw new g("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(p)||a.isTypedArray(p)?m&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function u(p,h,y){let S=p;if(p&&!y&&typeof p=="object"){if(a.endsWith(h,"{}"))h=n?h:h.slice(0,-2),p=JSON.stringify(p);else if(a.isArray(p)&&vr(p)||(a.isFileList(p)||a.endsWith(h,"[]"))&&(S=a.toArray(p)))return h=vt(h),S.forEach(function(_,E){!(a.isUndefined(_)||_===null)&&t.append(o===!0?tt([h],E,i):o===null?h:h+"[]",f(_))}),!1}return Ke(p)?!0:(t.append(tt(y,h,i),f(p)),!1)}const b=[],w=Object.assign(Pr,{defaultVisitor:u,convertValue:f,isVisitable:Ke});function k(p,h){if(!a.isUndefined(p)){if(b.indexOf(p)!==-1)throw Error("Circular reference detected in "+h.join("."));b.push(p),a.forEach(p,function(S,N){(!(a.isUndefined(S)||S===null)&&s.call(t,S,a.isString(N)?N.trim():N,h,w))===!0&&k(S,h?h.concat(N):[N])}),b.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return k(e),t}function rt(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(n){return t[n]})}function Ye(e,t){this._pairs=[],e&&De(e,this,t)}const Pt=Ye.prototype;Pt.append=function(t,r){this._pairs.push([t,r])};Pt.toString=function(t){const r=t?function(n){return t.call(this,n,rt)}:rt;return this._pairs.map(function(s){return r(s[0])+"="+r(s[1])},"").join("&")};function $r(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function $t(e,t,r){if(!t)return e;const n=r&&r.encode||$r;a.isFunction(r)&&(r={serialize:r});const s=r&&r.serialize;let i;if(s?i=s(t,r):i=a.isURLSearchParams(t)?t.toString():new Ye(t,r).toString(n),i){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class nt{constructor(){this.handlers=[]}use(t,r,n){return this.handlers.push({fulfilled:t,rejected:r,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(n){n!==null&&t(n)})}}const Ft={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Fr=typeof URLSearchParams<"u"?URLSearchParams:Ye,Br=typeof FormData<"u"?FormData:null,Dr=typeof Blob<"u"?Blob:null,Lr={isBrowser:!0,classes:{URLSearchParams:Fr,FormData:Br,Blob:Dr},protocols:["http","https","file","blob","url","data"]},Qe=typeof window<"u"&&typeof document<"u",Ve=typeof navigator=="object"&&navigator||void 0,Ur=Qe&&(!Ve||["ReactNative","NativeScript","NS"].indexOf(Ve.product)<0),Ir=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",qr=Qe&&window.location.href||"http://localhost",Mr=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Qe,hasStandardBrowserEnv:Ur,hasStandardBrowserWebWorkerEnv:Ir,navigator:Ve,origin:qr},Symbol.toStringTag,{value:"Module"})),$={...Mr,...Lr};function Hr(e,t){return De(e,new $.classes.URLSearchParams,{visitor:function(r,n,s,i){return $.isNode&&a.isBuffer(r)?(this.append(n,r.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)},...t})}function zr(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Jr(e){const t={},r=Object.keys(e);let n;const s=r.length;let i;for(n=0;n<s;n++)i=r[n],t[i]=e[i];return t}function Bt(e){function t(r,n,s,i){let o=r[i++];if(o==="__proto__")return!0;const c=Number.isFinite(+o),m=i>=r.length;return o=!o&&a.isArray(s)?s.length:o,m?(a.hasOwnProp(s,o)?s[o]=[s[o],n]:s[o]=n,!c):((!s[o]||!a.isObject(s[o]))&&(s[o]=[]),t(r,n,s[o],i)&&a.isArray(s[o])&&(s[o]=Jr(s[o])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const r={};return a.forEachEntry(e,(n,s)=>{t(zr(n),s,r,0)}),r}return null}function Kr(e,t,r){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(n){if(n.name!=="SyntaxError")throw n}return(r||JSON.stringify)(e)}const Se={transitional:Ft,adapter:["xhr","http","fetch"],transformRequest:[function(t,r){const n=r.getContentType()||"",s=n.indexOf("application/json")>-1,i=a.isObject(t);if(i&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s?JSON.stringify(Bt(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t)||a.isReadableStream(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(i){if(n.indexOf("application/x-www-form-urlencoded")>-1)return Hr(t,this.formSerializer).toString();if((c=a.isFileList(t))||n.indexOf("multipart/form-data")>-1){const m=this.env&&this.env.FormData;return De(c?{"files[]":t}:t,m&&new m,this.formSerializer)}}return i||s?(r.setContentType("application/json",!1),Kr(t)):t}],transformResponse:[function(t){const r=this.transitional||Se.transitional,n=r&&r.forcedJSONParsing,s=this.responseType==="json";if(a.isResponse(t)||a.isReadableStream(t))return t;if(t&&a.isString(t)&&(n&&!this.responseType||s)){const o=!(r&&r.silentJSONParsing)&&s;try{return JSON.parse(t,this.parseReviver)}catch(c){if(o)throw c.name==="SyntaxError"?g.from(c,g.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:$.classes.FormData,Blob:$.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{Se.headers[e]={}});const Vr=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Wr=e=>{const t={};let r,n,s;return e&&e.split(`
`).forEach(function(o){s=o.indexOf(":"),r=o.substring(0,s).trim().toLowerCase(),n=o.substring(s+1).trim(),!(!r||t[r]&&Vr[r])&&(r==="set-cookie"?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)}),t},st=Symbol("internals");function be(e){return e&&String(e).trim().toLowerCase()}function Ne(e){return e===!1||e==null?e:a.isArray(e)?e.map(Ne):String(e)}function Xr(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}const Gr=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Ie(e,t,r,n,s){if(a.isFunction(n))return n.call(this,t,r);if(s&&(t=r),!!a.isString(t)){if(a.isString(n))return t.indexOf(n)!==-1;if(a.isRegExp(n))return n.test(t)}}function Yr(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,n)=>r.toUpperCase()+n)}function Qr(e,t){const r=a.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+r,{value:function(s,i,o){return this[n].call(this,t,s,i,o)},configurable:!0})})}let L=class{constructor(t){t&&this.set(t)}set(t,r,n){const s=this;function i(c,m,f){const u=be(m);if(!u)throw new Error("header name must be a non-empty string");const b=a.findKey(s,u);(!b||s[b]===void 0||f===!0||f===void 0&&s[b]!==!1)&&(s[b||m]=Ne(c))}const o=(c,m)=>a.forEach(c,(f,u)=>i(f,u,m));if(a.isPlainObject(t)||t instanceof this.constructor)o(t,r);else if(a.isString(t)&&(t=t.trim())&&!Gr(t))o(Wr(t),r);else if(a.isObject(t)&&a.isIterable(t)){let c={},m,f;for(const u of t){if(!a.isArray(u))throw TypeError("Object iterator must return a key-value pair");c[f=u[0]]=(m=c[f])?a.isArray(m)?[...m,u[1]]:[m,u[1]]:u[1]}o(c,r)}else t!=null&&i(r,t,n);return this}get(t,r){if(t=be(t),t){const n=a.findKey(this,t);if(n){const s=this[n];if(!r)return s;if(r===!0)return Xr(s);if(a.isFunction(r))return r.call(this,s,n);if(a.isRegExp(r))return r.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=be(t),t){const n=a.findKey(this,t);return!!(n&&this[n]!==void 0&&(!r||Ie(this,this[n],n,r)))}return!1}delete(t,r){const n=this;let s=!1;function i(o){if(o=be(o),o){const c=a.findKey(n,o);c&&(!r||Ie(n,n[c],c,r))&&(delete n[c],s=!0)}}return a.isArray(t)?t.forEach(i):i(t),s}clear(t){const r=Object.keys(this);let n=r.length,s=!1;for(;n--;){const i=r[n];(!t||Ie(this,this[i],i,t,!0))&&(delete this[i],s=!0)}return s}normalize(t){const r=this,n={};return a.forEach(this,(s,i)=>{const o=a.findKey(n,i);if(o){r[o]=Ne(s),delete r[i];return}const c=t?Yr(i):String(i).trim();c!==i&&delete r[i],r[c]=Ne(s),n[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const r=Object.create(null);return a.forEach(this,(n,s)=>{n!=null&&n!==!1&&(r[s]=t&&a.isArray(n)?n.join(", "):n)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...r){const n=new this(t);return r.forEach(s=>n.set(s)),n}static accessor(t){const n=(this[st]=this[st]={accessors:{}}).accessors,s=this.prototype;function i(o){const c=be(o);n[c]||(Qr(s,o),n[c]=!0)}return a.isArray(t)?t.forEach(i):i(t),this}};L.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(L.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(n){this[r]=n}}});a.freezeMethods(L);function qe(e,t){const r=this||Se,n=t||r,s=L.from(n.headers);let i=n.data;return a.forEach(e,function(c){i=c.call(r,i,s.normalize(),t?t.status:void 0)}),s.normalize(),i}function Dt(e){return!!(e&&e.__CANCEL__)}function he(e,t,r){g.call(this,e??"canceled",g.ERR_CANCELED,t,r),this.name="CanceledError"}a.inherits(he,g,{__CANCEL__:!0});function Lt(e,t,r){const n=r.config.validateStatus;!r.status||!n||n(r.status)?e(r):t(new g("Request failed with status code "+r.status,[g.ERR_BAD_REQUEST,g.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}function Zr(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function en(e,t){e=e||10;const r=new Array(e),n=new Array(e);let s=0,i=0,o;return t=t!==void 0?t:1e3,function(m){const f=Date.now(),u=n[i];o||(o=f),r[s]=m,n[s]=f;let b=i,w=0;for(;b!==s;)w+=r[b++],b=b%e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),f-o<t)return;const k=u&&f-u;return k?Math.round(w*1e3/k):void 0}}function tn(e,t){let r=0,n=1e3/t,s,i;const o=(f,u=Date.now())=>{r=u,s=null,i&&(clearTimeout(i),i=null),e(...f)};return[(...f)=>{const u=Date.now(),b=u-r;b>=n?o(f,u):(s=f,i||(i=setTimeout(()=>{i=null,o(s)},n-b)))},()=>s&&o(s)]}const Pe=(e,t,r=3)=>{let n=0;const s=en(50,250);return tn(i=>{const o=i.loaded,c=i.lengthComputable?i.total:void 0,m=o-n,f=s(m),u=o<=c;n=o;const b={loaded:o,total:c,progress:c?o/c:void 0,bytes:m,rate:f||void 0,estimated:f&&c&&u?(c-o)/f:void 0,event:i,lengthComputable:c!=null,[t?"download":"upload"]:!0};e(b)},r)},ot=(e,t)=>{const r=e!=null;return[n=>t[0]({lengthComputable:r,total:e,loaded:n}),t[1]]},it=e=>(...t)=>a.asap(()=>e(...t)),rn=$.hasStandardBrowserEnv?((e,t)=>r=>(r=new URL(r,$.origin),e.protocol===r.protocol&&e.host===r.host&&(t||e.port===r.port)))(new URL($.origin),$.navigator&&/(msie|trident)/i.test($.navigator.userAgent)):()=>!0,nn=$.hasStandardBrowserEnv?{write(e,t,r,n,s,i){const o=[e+"="+encodeURIComponent(t)];a.isNumber(r)&&o.push("expires="+new Date(r).toGMTString()),a.isString(n)&&o.push("path="+n),a.isString(s)&&o.push("domain="+s),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function sn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function on(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Ut(e,t,r){let n=!sn(t);return e&&(n||r==!1)?on(e,t):t}const at=e=>e instanceof L?{...e}:e;function ae(e,t){t=t||{};const r={};function n(f,u,b,w){return a.isPlainObject(f)&&a.isPlainObject(u)?a.merge.call({caseless:w},f,u):a.isPlainObject(u)?a.merge({},u):a.isArray(u)?u.slice():u}function s(f,u,b,w){if(a.isUndefined(u)){if(!a.isUndefined(f))return n(void 0,f,b,w)}else return n(f,u,b,w)}function i(f,u){if(!a.isUndefined(u))return n(void 0,u)}function o(f,u){if(a.isUndefined(u)){if(!a.isUndefined(f))return n(void 0,f)}else return n(void 0,u)}function c(f,u,b){if(b in t)return n(f,u);if(b in e)return n(void 0,f)}const m={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:c,headers:(f,u,b)=>s(at(f),at(u),b,!0)};return a.forEach(Object.keys({...e,...t}),function(u){const b=m[u]||s,w=b(e[u],t[u],u);a.isUndefined(w)&&b!==c||(r[u]=w)}),r}const It=e=>{const t=ae({},e);let{data:r,withXSRFToken:n,xsrfHeaderName:s,xsrfCookieName:i,headers:o,auth:c}=t;if(t.headers=o=L.from(o),t.url=$t(Ut(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),c&&o.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):""))),a.isFormData(r)){if($.hasStandardBrowserEnv||$.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if(a.isFunction(r.getHeaders)){const m=r.getHeaders(),f=["content-type","content-length"];Object.entries(m).forEach(([u,b])=>{f.includes(u.toLowerCase())&&o.set(u,b)})}}if($.hasStandardBrowserEnv&&(n&&a.isFunction(n)&&(n=n(t)),n||n!==!1&&rn(t.url))){const m=s&&i&&nn.read(i);m&&o.set(s,m)}return t},an=typeof XMLHttpRequest<"u",ln=an&&function(e){return new Promise(function(r,n){const s=It(e);let i=s.data;const o=L.from(s.headers).normalize();let{responseType:c,onUploadProgress:m,onDownloadProgress:f}=s,u,b,w,k,p;function h(){k&&k(),p&&p(),s.cancelToken&&s.cancelToken.unsubscribe(u),s.signal&&s.signal.removeEventListener("abort",u)}let y=new XMLHttpRequest;y.open(s.method.toUpperCase(),s.url,!0),y.timeout=s.timeout;function S(){if(!y)return;const _=L.from("getAllResponseHeaders"in y&&y.getAllResponseHeaders()),F={data:!c||c==="text"||c==="json"?y.responseText:y.response,status:y.status,statusText:y.statusText,headers:_,config:e,request:y};Lt(function(v){r(v),h()},function(v){n(v),h()},F),y=null}"onloadend"in y?y.onloadend=S:y.onreadystatechange=function(){!y||y.readyState!==4||y.status===0&&!(y.responseURL&&y.responseURL.indexOf("file:")===0)||setTimeout(S)},y.onabort=function(){y&&(n(new g("Request aborted",g.ECONNABORTED,e,y)),y=null)},y.onerror=function(E){const F=E&&E.message?E.message:"Network Error",B=new g(F,g.ERR_NETWORK,e,y);B.event=E||null,n(B),y=null},y.ontimeout=function(){let E=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const F=s.transitional||Ft;s.timeoutErrorMessage&&(E=s.timeoutErrorMessage),n(new g(E,F.clarifyTimeoutError?g.ETIMEDOUT:g.ECONNABORTED,e,y)),y=null},i===void 0&&o.setContentType(null),"setRequestHeader"in y&&a.forEach(o.toJSON(),function(E,F){y.setRequestHeader(F,E)}),a.isUndefined(s.withCredentials)||(y.withCredentials=!!s.withCredentials),c&&c!=="json"&&(y.responseType=s.responseType),f&&([w,p]=Pe(f,!0),y.addEventListener("progress",w)),m&&y.upload&&([b,k]=Pe(m),y.upload.addEventListener("progress",b),y.upload.addEventListener("loadend",k)),(s.cancelToken||s.signal)&&(u=_=>{y&&(n(!_||_.type?new he(null,e,y):_),y.abort(),y=null)},s.cancelToken&&s.cancelToken.subscribe(u),s.signal&&(s.signal.aborted?u():s.signal.addEventListener("abort",u)));const N=Zr(s.url);if(N&&$.protocols.indexOf(N)===-1){n(new g("Unsupported protocol "+N+":",g.ERR_BAD_REQUEST,e));return}y.send(i||null)})},cn=(e,t)=>{const{length:r}=e=e?e.filter(Boolean):[];if(t||r){let n=new AbortController,s;const i=function(f){if(!s){s=!0,c();const u=f instanceof Error?f:this.reason;n.abort(u instanceof g?u:new he(u instanceof Error?u.message:u))}};let o=t&&setTimeout(()=>{o=null,i(new g(`timeout ${t} of ms exceeded`,g.ETIMEDOUT))},t);const c=()=>{e&&(o&&clearTimeout(o),o=null,e.forEach(f=>{f.unsubscribe?f.unsubscribe(i):f.removeEventListener("abort",i)}),e=null)};e.forEach(f=>f.addEventListener("abort",i));const{signal:m}=n;return m.unsubscribe=()=>a.asap(c),m}},dn=function*(e,t){let r=e.byteLength;if(r<t){yield e;return}let n=0,s;for(;n<r;)s=n+t,yield e.slice(n,s),n=s},un=async function*(e,t){for await(const r of pn(e))yield*dn(r,t)},pn=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:r,value:n}=await t.read();if(r)break;yield n}}finally{await t.cancel()}},lt=(e,t,r,n)=>{const s=un(e,t);let i=0,o,c=m=>{o||(o=!0,n&&n(m))};return new ReadableStream({async pull(m){try{const{done:f,value:u}=await s.next();if(f){c(),m.close();return}let b=u.byteLength;if(r){let w=i+=b;r(w)}m.enqueue(new Uint8Array(u))}catch(f){throw c(f),f}},cancel(m){return c(m),s.return()}},{highWaterMark:2})},ct=64*1024,{isFunction:Oe}=a,fn=(({Request:e,Response:t})=>({Request:e,Response:t}))(a.global),{ReadableStream:dt,TextEncoder:ut}=a.global,pt=(e,...t)=>{try{return!!e(...t)}catch{return!1}},hn=e=>{e=a.merge.call({skipUndefined:!0},fn,e);const{fetch:t,Request:r,Response:n}=e,s=t?Oe(t):typeof fetch=="function",i=Oe(r),o=Oe(n);if(!s)return!1;const c=s&&Oe(dt),m=s&&(typeof ut=="function"?(p=>h=>p.encode(h))(new ut):async p=>new Uint8Array(await new r(p).arrayBuffer())),f=i&&c&&pt(()=>{let p=!1;const h=new r($.origin,{body:new dt,method:"POST",get duplex(){return p=!0,"half"}}).headers.has("Content-Type");return p&&!h}),u=o&&c&&pt(()=>a.isReadableStream(new n("").body)),b={stream:u&&(p=>p.body)};s&&["text","arrayBuffer","blob","formData","stream"].forEach(p=>{!b[p]&&(b[p]=(h,y)=>{let S=h&&h[p];if(S)return S.call(h);throw new g(`Response type '${p}' is not supported`,g.ERR_NOT_SUPPORT,y)})});const w=async p=>{if(p==null)return 0;if(a.isBlob(p))return p.size;if(a.isSpecCompliantForm(p))return(await new r($.origin,{method:"POST",body:p}).arrayBuffer()).byteLength;if(a.isArrayBufferView(p)||a.isArrayBuffer(p))return p.byteLength;if(a.isURLSearchParams(p)&&(p=p+""),a.isString(p))return(await m(p)).byteLength},k=async(p,h)=>{const y=a.toFiniteNumber(p.getContentLength());return y??w(h)};return async p=>{let{url:h,method:y,data:S,signal:N,cancelToken:_,timeout:E,onDownloadProgress:F,onUploadProgress:B,responseType:v,headers:X,withCredentials:Z="same-origin",fetchOptions:G}=It(p),_e=t||fetch;v=v?(v+"").toLowerCase():"text";let le=cn([N,_&&_.toAbortSignal()],E),ee=null;const Y=le&&le.unsubscribe&&(()=>{le.unsubscribe()});let ce;try{if(B&&f&&y!=="get"&&y!=="head"&&(ce=await k(X,S))!==0){let K=new r(h,{method:"POST",body:S,duplex:"half"}),te;if(a.isFormData(S)&&(te=K.headers.get("content-type"))&&X.setContentType(te),K.body){const[me,de]=ot(ce,Pe(it(B)));S=lt(K.body,ct,me,de)}}a.isString(Z)||(Z=Z?"include":"omit");const C=i&&"credentials"in r.prototype,Ee={...G,signal:le,method:y.toUpperCase(),headers:X.normalize().toJSON(),body:S,duplex:"half",credentials:C?Z:void 0};ee=i&&new r(h,Ee);let q=await(i?_e(ee,G):_e(h,Ee));const Re=u&&(v==="stream"||v==="response");if(u&&(F||Re&&Y)){const K={};["status","statusText","headers"].forEach(ye=>{K[ye]=q[ye]});const te=a.toFiniteNumber(q.headers.get("content-length")),[me,de]=F&&ot(te,Pe(it(F),!0))||[];q=new n(lt(q.body,ct,me,()=>{de&&de(),Y&&Y()}),K)}v=v||"text";let Ue=await b[a.findKey(b,v)||"text"](q,p);return!Re&&Y&&Y(),await new Promise((K,te)=>{Lt(K,te,{data:Ue,headers:L.from(q.headers),status:q.status,statusText:q.statusText,config:p,request:ee})})}catch(C){throw Y&&Y(),C&&C.name==="TypeError"&&/Load failed|fetch/i.test(C.message)?Object.assign(new g("Network Error",g.ERR_NETWORK,p,ee),{cause:C.cause||C}):g.from(C,C&&C.code,p,ee)}}},mn=new Map,qt=e=>{let t=e?e.env:{};const{fetch:r,Request:n,Response:s}=t,i=[n,s,r];let o=i.length,c=o,m,f,u=mn;for(;c--;)m=i[c],f=u.get(m),f===void 0&&u.set(m,f=c?new Map:hn(t)),u=f;return f};qt();const We={http:Nr,xhr:ln,fetch:{get:qt}};a.forEach(We,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const ft=e=>`- ${e}`,yn=e=>a.isFunction(e)||e===null||e===!1,Mt={getAdapter:(e,t)=>{e=a.isArray(e)?e:[e];const{length:r}=e;let n,s;const i={};for(let o=0;o<r;o++){n=e[o];let c;if(s=n,!yn(n)&&(s=We[(c=String(n)).toLowerCase()],s===void 0))throw new g(`Unknown adapter '${c}'`);if(s&&(a.isFunction(s)||(s=s.get(t))))break;i[c||"#"+o]=s}if(!s){const o=Object.entries(i).map(([m,f])=>`adapter ${m} `+(f===!1?"is not supported by the environment":"is not available in the build"));let c=r?o.length>1?`since :
`+o.map(ft).join(`
`):" "+ft(o[0]):"as no adapter specified";throw new g("There is no suitable adapter to dispatch the request "+c,"ERR_NOT_SUPPORT")}return s},adapters:We};function Me(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new he(null,e)}function ht(e){return Me(e),e.headers=L.from(e.headers),e.data=qe.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Mt.getAdapter(e.adapter||Se.adapter,e)(e).then(function(n){return Me(e),n.data=qe.call(e,e.transformResponse,n),n.headers=L.from(n.headers),n},function(n){return Dt(n)||(Me(e),n&&n.response&&(n.response.data=qe.call(e,e.transformResponse,n.response),n.response.headers=L.from(n.response.headers))),Promise.reject(n)})}const Ht="1.12.2",Le={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Le[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}});const mt={};Le.transitional=function(t,r,n){function s(i,o){return"[Axios v"+Ht+"] Transitional option '"+i+"'"+o+(n?". "+n:"")}return(i,o,c)=>{if(t===!1)throw new g(s(o," has been removed"+(r?" in "+r:"")),g.ERR_DEPRECATED);return r&&!mt[o]&&(mt[o]=!0,console.warn(s(o," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(i,o,c):!0}};Le.spelling=function(t){return(r,n)=>(console.warn(`${n} is likely a misspelling of ${t}`),!0)};function bn(e,t,r){if(typeof e!="object")throw new g("options must be an object",g.ERR_BAD_OPTION_VALUE);const n=Object.keys(e);let s=n.length;for(;s-- >0;){const i=n[s],o=t[i];if(o){const c=e[i],m=c===void 0||o(c,i,e);if(m!==!0)throw new g("option "+i+" must be "+m,g.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new g("Unknown option "+i,g.ERR_BAD_OPTION)}}const ve={assertOptions:bn,validators:Le},V=ve.validators;let ie=class{constructor(t){this.defaults=t||{},this.interceptors={request:new nt,response:new nt}}async request(t,r){try{return await this._request(t,r)}catch(n){if(n instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const i=s.stack?s.stack.replace(/^.+\n/,""):"";try{n.stack?i&&!String(n.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(n.stack+=`
`+i):n.stack=i}catch{}}throw n}}_request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=ae(this.defaults,r);const{transitional:n,paramsSerializer:s,headers:i}=r;n!==void 0&&ve.assertOptions(n,{silentJSONParsing:V.transitional(V.boolean),forcedJSONParsing:V.transitional(V.boolean),clarifyTimeoutError:V.transitional(V.boolean)},!1),s!=null&&(a.isFunction(s)?r.paramsSerializer={serialize:s}:ve.assertOptions(s,{encode:V.function,serialize:V.function},!0)),r.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?r.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:r.allowAbsoluteUrls=!0),ve.assertOptions(r,{baseUrl:V.spelling("baseURL"),withXsrfToken:V.spelling("withXSRFToken")},!0),r.method=(r.method||this.defaults.method||"get").toLowerCase();let o=i&&a.merge(i.common,i[r.method]);i&&a.forEach(["delete","get","head","post","put","patch","common"],p=>{delete i[p]}),r.headers=L.concat(o,i);const c=[];let m=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(r)===!1||(m=m&&h.synchronous,c.unshift(h.fulfilled,h.rejected))});const f=[];this.interceptors.response.forEach(function(h){f.push(h.fulfilled,h.rejected)});let u,b=0,w;if(!m){const p=[ht.bind(this),void 0];for(p.unshift(...c),p.push(...f),w=p.length,u=Promise.resolve(r);b<w;)u=u.then(p[b++],p[b++]);return u}w=c.length;let k=r;for(;b<w;){const p=c[b++],h=c[b++];try{k=p(k)}catch(y){h.call(this,y);break}}try{u=ht.call(this,k)}catch(p){return Promise.reject(p)}for(b=0,w=f.length;b<w;)u=u.then(f[b++],f[b++]);return u}getUri(t){t=ae(this.defaults,t);const r=Ut(t.baseURL,t.url,t.allowAbsoluteUrls);return $t(r,t.params,t.paramsSerializer)}};a.forEach(["delete","get","head","options"],function(t){ie.prototype[t]=function(r,n){return this.request(ae(n||{},{method:t,url:r,data:(n||{}).data}))}});a.forEach(["post","put","patch"],function(t){function r(n){return function(i,o,c){return this.request(ae(c||{},{method:t,headers:n?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}ie.prototype[t]=r(),ie.prototype[t+"Form"]=r(!0)});let gn=class zt{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(i){r=i});const n=this;this.promise.then(s=>{if(!n._listeners)return;let i=n._listeners.length;for(;i-- >0;)n._listeners[i](s);n._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(c=>{n.subscribe(c),i=c}).then(s);return o.cancel=function(){n.unsubscribe(i)},o},t(function(i,o,c){n.reason||(n.reason=new he(i,o,c),r(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}toAbortSignal(){const t=new AbortController,r=n=>{t.abort(n)};return this.subscribe(r),t.signal.unsubscribe=()=>this.unsubscribe(r),t.signal}static source(){let t;return{token:new zt(function(s){t=s}),cancel:t}}};function xn(e){return function(r){return e.apply(null,r)}}function wn(e){return a.isObject(e)&&e.isAxiosError===!0}const Xe={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Xe).forEach(([e,t])=>{Xe[t]=e});function Jt(e){const t=new ie(e),r=St(ie.prototype.request,t);return a.extend(r,ie.prototype,t,{allOwnKeys:!0}),a.extend(r,t,null,{allOwnKeys:!0}),r.create=function(s){return Jt(ae(e,s))},r}const R=Jt(Se);R.Axios=ie;R.CanceledError=he;R.CancelToken=gn;R.isCancel=Dt;R.VERSION=Ht;R.toFormData=De;R.AxiosError=g;R.Cancel=R.CanceledError;R.all=function(t){return Promise.all(t)};R.spread=xn;R.isAxiosError=wn;R.mergeConfig=ae;R.AxiosHeaders=L;R.formToJSON=e=>Bt(a.isHTMLForm(e)?new FormData(e):e);R.getAdapter=Mt.getAdapter;R.HttpStatusCode=Xe;R.default=R;const{Axios:Tn,AxiosError:On,CanceledError:kn,isCancel:Cn,CancelToken:Nn,VERSION:vn,all:Pn,Cancel:$n,isAxiosError:Fn,spread:Bn,toFormData:Dn,AxiosHeaders:Ln,HttpStatusCode:Un,formToJSON:In,getAdapter:qn,mergeConfig:Mn}=R,se="var(--bg)",W="var(--card)",z="var(--text)",Q="var(--muted)",P="var(--border)",I="var(--radius)",He="var(--shadow)",re="var(--accent)",ge="var(--danger, #e5484d)",x={Wrapper:T.div`
        max-width: 1440px;
        margin: 0 auto;
        display: grid;
        gap: 16px;
        padding: 16px;
        background: ${se};
        color: ${z};
        min-height: 100%;
    `,Header:T.header`
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        gap: 16px;
        h1 {
            margin: 0 0 6px 0;
            font-size: 20px;
            line-height: 1.2;
        }
        p {
            margin: 0;
            color: ${Q};
            font-size: 14px;
        }
    `,Badges:T.div`
        display: flex;
        gap: 8px;
        align-items: center;
        .badge {
            background: ${W};
            border: 1px solid ${P};
            padding: 6px 10px;
            border-radius: 999px;
            font-size: 12px;
            box-shadow: ${He};
        }
    `,Layout:T.div`
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 16px;
        @media (max-width: 1100px) {
            grid-template-columns: 1fr;
        }
        .left,
        .right {
            display: grid;
            gap: 16px;
        }
    `,Card:T.div`
        background: ${W};
        border: 1px solid ${P};
        border-radius: ${I};
        box-shadow: ${He};
        padding: 16px;
    `,SectionTitle:T.h2`
        margin: 0 0 10px 0;
        font-size: 15px;
        font-weight: 600;
    `,Grid:T.div`
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 12px;
        @media (max-width: 860px) {
            grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 640px) {
            grid-template-columns: 1fr;
        }
    `,Field:T.div`
        display: grid;
        gap: 6px;
        label {
            font-size: 13px;
            color: ${z};
            display: inline-flex;
            align-items: center;
            gap: 6px;
        }
        input[type="text"],
        input[type="password"],
        select {
            width: 100%;
            border: 1px solid ${P};
            background: ${se};
            color: ${z};
            border-radius: calc(${I} - 2px);
            padding: 10px 12px;
            font: inherit;
            outline: none;
            transition: border-color 0.15s ease;
        }
        input:focus,
        select:focus {
            border-color: ${re};
        }
    `,Actions:T.div`
        margin-top: 14px;
        display: flex;
        gap: 10px;
        align-items: center;
        .spacer {
            flex: 1;
        }
        .muted {
            color: ${Q};
            font-size: 12px;
        }
        .muted.warn {
            color: ${ge};
        }
        button,
        a.primary {
            appearance: none;
            border: 1px solid ${P};
            background: ${W};
            color: ${z};
            padding: 10px 14px;
            border-radius: ${I};
            cursor: pointer;
            font: inherit;
            text-decoration: none;
            transition: transform 0.02s ease-in-out, border-color 0.15s ease;
            &:hover {
                border-color: ${re};
            }
            &:active {
                transform: translateY(1px);
            }
            &:disabled {
                opacity: 0.55;
                cursor: not-allowed;
            }
        }
        .ghost {
            background: ${se};
        }
        .danger {
            border-color: ${ge};
        }
        .primary {
            background: ${re};
            color: black;
            border-color: ${re};
        }
    `,Info:T.div`
        padding: 10px 12px;
        border: 1px dashed ${P};
        color: ${Q};
        border-radius: ${I};
        background: ${se};
        &.warn {
            color: ${ge};
            border-style: solid;
        }
    `,Skeleton:T.div`
        padding: 12px;
        border: 1px solid ${P};
        border-radius: ${I};
        background: linear-gradient(
            90deg,
            rgba(0, 0, 0, 0.04),
            rgba(0, 0, 0, 0.08),
            rgba(0, 0, 0, 0.04)
        );
        background-size: 200% 100%;
        animation: shimmer 1.2s infinite;
        @keyframes shimmer {
            0% {
                background-position: 200% 0;
            }
            100% {
                background-position: -200% 0;
            }
        }
    `,Empty:T.div`
        padding: 12px;
        color: ${Q};
    `,Results:T.div`
        display: grid;
        gap: 12px;
    `,JobCard:T.div`
        border: 1px solid ${P};
        border-radius: ${I};
        padding: 12px;
        background: ${se};
        cursor: pointer;
        transition: border-color 0.15s ease;
        &:hover {
            border-color: ${re};
        }
        .head {
            display: grid;
            grid-template-columns: auto 1fr auto;
            gap: 10px;
            align-items: center;
        }
        .logo {
            width: 44px;
            height: 44px;
            border: 1px solid ${P};
            border-radius: 8px;
            background: ${W};
            display: grid;
            place-items: center;
            overflow: hidden;
        }
        .logo img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .logo .placeholder {
            width: 28px;
            height: 28px;
            border-radius: 6px;
            background: rgba(0, 0, 0, 0.08);
        }
        .meta h3 {
            margin: 0;
            font-size: 15px;
        }
        .meta .company,
        .meta .loc {
            margin: 2px 0 0 0;
            color: ${Q};
            font-size: 13px;
        }
        .actions {
            display: flex;
            gap: 8px;
        }
        .actions a,
        .actions button {
            appearance: none;
            border: 1px solid ${P};
            background: ${W};
            color: ${z};
            padding: 8px 12px;
            border-radius: ${I};
            cursor: pointer;
            font: inherit;
            text-decoration: none;
        }
        .actions .primary {
            background: ${re};
            color: black;
            border-color: ${re};
        }
        .desc {
            margin: 10px 0 0 0;
            color: ${z};
            font-size: 14px;
            line-height: 1.35;
        }
        .desc.full {
            white-space: pre-wrap;
        }
    `,Tags:T.div`
        margin-top: 8px;
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        span {
            border: 1px solid ${P};
            background: ${W};
            color: ${z};
            border-radius: 999px;
            padding: 4px 8px;
            font-size: 12px;
        }
        .muted {
            color: ${Q};
            border-style: dashed;
        }
    `,Pagination:T.div`
        margin-top: 12px;
        display: flex;
        gap: 10px;
        align-items: center;
        justify-content: flex-end;
        span {
            color: ${Q};
            font-size: 13px;
        }
        button {
            appearance: none;
            border: 1px solid ${P};
            background: ${W};
            color: ${z};
            padding: 8px 12px;
            border-radius: ${I};
            cursor: pointer;
            font: inherit;
            &:hover {
                border-color: ${re};
            }
            &:disabled {
                opacity: 0.5;
                cursor: not-allowed;
            }
        }
    `,SavedList:T.ul`
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        gap: 10px;
        li {
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 10px;
            border: 1px solid ${P};
            border-radius: ${I};
            padding: 10px 12px;
            background: ${se};
        }
        .meta {
            display: grid;
            cursor: pointer;
        }
        .meta .muted {
            color: ${Q};
            font-size: 12px;
        }
        .row {
            display: flex;
            gap: 8px;
        }
        .row a,
        .row button {
            appearance: none;
            border: 1px solid ${P};
            background: ${W};
            color: ${z};
            padding: 8px 10px;
            border-radius: ${I};
            cursor: pointer;
            font: inherit;
            text-decoration: none;
        }
        .row .danger {
            border-color: ${ge};
        }
    `,Divider:T.hr`
        border: none;
        border-top: 1px solid ${P};
        margin: 10px 0;
    `,ModalOverlay:T.div`
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
        display: grid;
        place-items: center;
        z-index: 9999;
    `,Modal:T.div`
        width: min(420px, 90vw);
        background: ${W};
        color: ${z};
        border: 1px solid ${P};
        border-radius: ${I};
        box-shadow: ${He};
        padding: 16px;
        h3 {
            margin: 0 0 6px 0;
            font-size: 16px;
        }
        p {
            margin: 0 0 12px 0;
            color: ${Q};
            font-size: 14px;
        }
        .actions {
            display: flex;
            gap: 10px;
            justify-content: flex-end;
        }
        .actions button {
            appearance: none;
            border: 1px solid ${P};
            background: ${W};
            color: ${z};
            padding: 8px 12px;
            border-radius: ${I};
            cursor: pointer;
            font: inherit;
        }
        .actions .ghost {
            background: ${se};
        }
        .actions .danger {
            border-color: ${ge};
        }
    `},yt="",bt="jsearch.p.rapidapi.com",gt="https://jsearch.p.rapidapi.com/search",ke="jobBoard_saved_v1",xt="jobBoard_draft_v1",ze="jobBoard_api_key",jn=e=>e?new Date(e*1e3).toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"}):"-",wt=e=>{if(!e)return"";const t=Date.now()-e*1e3,r=Math.floor(t/(24*3600*1e3));if(r<=0)return"Today";if(r===1)return"1 day ago";if(r<30)return`${r} days ago`;const n=Math.floor(r/30);return n===1?"1 month ago":`${n} months ago`},Sn=(e,t,r)=>Math.min(Math.max(e,t),r),ue=[{job_id:"SAMPLE-1",employer_name:"SampleSoft",employer_logo:"",job_title:"Frontend Engineer (React)",job_city:"Bengaluru",job_country:"India",job_employment_type:"FULLTIME",job_is_remote:!0,job_description:"Work on modern React apps with Vite and styled-components. Collaborate with design, write tests, ship features.",job_posted_at_timestamp:Math.floor(Date.now()/1e3)-86400*5,job_apply_link:"https://example.com/apply",job_publisher:"LinkedIn",job_required_skills:["React","TypeScript","Styled-Components","Vite"],job_min_salary:12e5,job_max_salary:22e5,job_salary_currency:"INR"},{job_id:"SAMPLE-2",employer_name:"DataNest",employer_logo:"",job_title:"Backend Engineer (Node.js)",job_city:"Pune",job_country:"India",job_employment_type:"CONTRACTOR",job_is_remote:!1,job_description:"APIs with Node/Express, databases, queues. Scale services and improve performance.",job_posted_at_timestamp:Math.floor(Date.now()/1e3)-86400*11,job_apply_link:"https://example.com/apply2",job_publisher:"Indeed",job_required_skills:["Node.js","Express","MongoDB","Redis"]}],jt=(e,t="INR")=>{if(!e&&e!==0)return"-";try{return new Intl.NumberFormat("en-IN",{style:"currency",currency:t,maximumFractionDigits:0}).format(e)}catch{return String(e)}};function _n({text:e,location:t,remote:r,type:n,experience:s}){const i=[];if(e&&i.push(e),t&&i.push(`in ${t}`),r==="remote"&&i.push("remote"),n&&n!=="any"){const c={fulltime:"full time",parttime:"part time",contract:"contract",internship:"internship"};i.push(c[n]||n)}if(s&&s!=="any"){const c={entry:"entry level",mid:"mid level",senior:"senior"};i.push(c[s]||s)}const o=i.join(" ").trim();return o.length?o:"software developer"}const Hn=()=>{const[e,t]=O.useState(()=>{try{return localStorage.getItem(ze)||""}catch{return""}}),r=(e||yt||"").trim(),[n,s]=O.useState(()=>{try{return JSON.parse(localStorage.getItem(xt)||"null")??{text:"",location:"India",remote:"any",type:"any",experience:"any",sortBy:"date"}}catch{return{text:"",location:"India",remote:"any",type:"any",experience:"any",sortBy:"date"}}}),[i,o]=O.useState(1),[c,m]=O.useState(!1),[f,u]=O.useState(""),[b,w]=O.useState([]),[k,p]=O.useState(!1),[h,y]=O.useState(null),[S,N]=O.useState(()=>{try{return JSON.parse(localStorage.getItem(ke)||"[]")}catch{return[]}}),[_,E]=O.useState({open:!1,type:"",payload:null,title:"",body:""}),[F,B]=O.useState(null),[v,X]=O.useState("");O.useEffect(()=>{try{localStorage.setItem(xt,JSON.stringify(n))}catch{}},[n]),O.useEffect(()=>{try{localStorage.setItem(ze,e)}catch{}},[e]);const Z=O.useMemo(()=>_n(n),[n]),G=O.useRef(0);function _e(d){var j;return{...d,job_id:d.job_id||le(),job_required_skills:d.job_required_skills||((j=d.job_highlights)==null?void 0:j.Qualifications)||[]}}function le(){try{return crypto.randomUUID()}catch{return"J-"+Math.random().toString(36).slice(2)}}function ee(d){var H,ne,Te,Ze;const j=(H=d==null?void 0:d.response)==null?void 0:H.status,U=(ne=d==null?void 0:d.response)==null?void 0:ne.statusText,M=(Te=d==null?void 0:d.response)==null?void 0:Te.data,Ae=M&&(M.message||M.error)?` • API: ${M.message||M.error}`:"";return{text:`JSearch request failed${j?` (HTTP ${j}${U?" "+U:""})`:""}.${Ae}`,status:j,data:M,headers:(Ze=d==null?void 0:d.response)==null?void 0:Ze.headers}}async function Y(){if(X("Verifying…"),B(null),!r){X("No key provided.");return}try{const{data:d}=await R.get(gt,{params:{query:"developer",page:"1",num_pages:"1"},headers:{"x-rapidapi-key":r,"x-rapidapi-host":bt,accept:"application/json"},timeout:15e3,withCredentials:!1,validateStatus:()=>!0});d&&Array.isArray(d.data)?X(`OK ✓ received ${d.data.length} jobs`):(X("Unexpected response shape"),B({status:200,data:d}))}catch(d){const j=ee(d);X(j.text),B(j)}}async function ce(d=!1){var U,M,Ae;u(""),m(!0),B(null);const j=++G.current;if(!r){j===G.current&&(u("Enter your RapidAPI key to fetch live jobs. Showing sample results."),w(d?ue:[...b,...ue]),p(!1),m(!1));return}try{const A=await R.get(gt,{params:{query:Z,page:String(i),num_pages:"1"},headers:{"x-rapidapi-key":r,"x-rapidapi-host":bt,accept:"application/json"},timeout:15e3,withCredentials:!1,validateStatus:()=>!0});if(A.status>=200&&A.status<300){const H=Array.isArray((U=A==null?void 0:A.data)==null?void 0:U.data)?A.data.data:[],ne=H.map(_e);j===G.current&&(w(Te=>d?ne:[...Te,...ne]),p(!!H.length))}else{const H=((M=A==null?void 0:A.data)==null?void 0:M.message)||((Ae=A==null?void 0:A.data)==null?void 0:Ae.error)||"",ne=`JSearch request failed (HTTP ${A.status}${A.statusText?" "+A.statusText:""}).${H?" • API: "+H:""}`;j===G.current&&(u(`${ne} Showing sample results.`),B({status:A.status,data:A.data,headers:A.headers}),w(d?ue:[...b,...ue]),p(!1))}}catch(A){const H=ee(A);j===G.current&&(u(`${H.text} Showing sample results.`),B(H),w(d?ue:[...b,...ue]),p(!1))}finally{j===G.current&&m(!1)}}O.useEffect(()=>{w([]),o(1)},[Z]),O.useEffect(()=>{ce(!0)},[Z,r]),O.useEffect(()=>{i!==1&&ce(!1)},[i]);const C=(d,j)=>s(U=>({...U,[d]:j})),Ee=d=>{d.preventDefault(),o(1),ce(!0)},q=d=>{if(S.some(M=>M.job_id===d.job_id))return;const U=[d,...S].slice(0,200);N(U);try{localStorage.setItem(ke,JSON.stringify(U))}catch{}},Re=d=>E({open:!0,type:"remove-saved",payload:d,title:"Remove saved job?",body:"This will remove the job from your saved list."}),Ue=()=>{const d=_.payload,j=S.filter(U=>U.job_id!==d);N(j);try{localStorage.setItem(ke,JSON.stringify(j))}catch{}E({open:!1,type:"",payload:null,title:"",body:""})},K=()=>E({open:!0,type:"clear-saved",title:"Clear all saved jobs?",body:"This will permanently remove all saved jobs."}),te=()=>{N([]);try{localStorage.setItem(ke,"[]")}catch{}E({open:!1,type:"",payload:null,title:"",body:""})},me=()=>E({open:!0,type:"clear-key",title:"Clear API key?",body:"This removes your saved RapidAPI key from this browser."}),de=()=>{t("");try{localStorage.removeItem(ze)}catch{}E({open:!1,type:"",payload:null,title:"",body:""})},ye=b.length;return l.jsxs(x.Wrapper,{children:[l.jsxs(x.Header,{children:[l.jsxs("div",{children:[l.jsx("h1",{children:"Job Board"}),l.jsx("p",{children:"Search jobs from LinkedIn, Indeed, Glassdoor, ZipRecruiter, BeBee, etc., in one place via RapidAPI JSearch."})]}),l.jsxs(x.Badges,{children:[l.jsx("span",{className:"badge",children:"RapidAPI"}),l.jsx("span",{className:"badge",children:"Saved Jobs"}),l.jsx("span",{className:"badge",children:"Detail Drawer"})]})]}),l.jsxs(x.Layout,{children:[l.jsxs("div",{className:"left",children:[l.jsx(x.Card,{children:l.jsxs("form",{onSubmit:Ee,noValidate:!0,children:[l.jsx(x.SectionTitle,{children:"Search"}),l.jsxs(x.Grid,{children:[l.jsxs(x.Field,{children:[l.jsx("label",{htmlFor:"text",children:"Role / keywords"}),l.jsx("input",{id:"text",name:"text",type:"text",placeholder:'e.g., "frontend react", "data analyst"',value:n.text,onChange:d=>C("text",d.target.value)})]}),l.jsxs(x.Field,{children:[l.jsx("label",{htmlFor:"location",children:"Location"}),l.jsx("input",{id:"location",name:"location",type:"text",placeholder:"e.g., Bengaluru, India",value:n.location,onChange:d=>C("location",d.target.value)})]}),l.jsxs(x.Field,{children:[l.jsx("label",{htmlFor:"remote",children:"Work mode"}),l.jsxs("select",{id:"remote",name:"remote",value:n.remote,onChange:d=>C("remote",d.target.value),children:[l.jsx("option",{value:"any",children:"Any"}),l.jsx("option",{value:"remote",children:"Remote"}),l.jsx("option",{value:"onsite",children:"On-site"})]})]}),l.jsxs(x.Field,{children:[l.jsx("label",{htmlFor:"type",children:"Job type"}),l.jsxs("select",{id:"type",name:"type",value:n.type,onChange:d=>C("type",d.target.value),children:[l.jsx("option",{value:"any",children:"Any"}),l.jsx("option",{value:"fulltime",children:"Full-time"}),l.jsx("option",{value:"parttime",children:"Part-time"}),l.jsx("option",{value:"contract",children:"Contract"}),l.jsx("option",{value:"internship",children:"Internship"})]})]}),l.jsxs(x.Field,{children:[l.jsx("label",{htmlFor:"experience",children:"Experience"}),l.jsxs("select",{id:"experience",name:"experience",value:n.experience,onChange:d=>C("experience",d.target.value),children:[l.jsx("option",{value:"any",children:"Any"}),l.jsx("option",{value:"entry",children:"Entry"}),l.jsx("option",{value:"mid",children:"Mid"}),l.jsx("option",{value:"senior",children:"Senior"})]})]}),l.jsxs(x.Field,{children:[l.jsx("label",{htmlFor:"sortBy",children:"Sort by"}),l.jsxs("select",{id:"sortBy",name:"sortBy",value:n.sortBy,onChange:d=>C("sortBy",d.target.value),children:[l.jsx("option",{value:"date",children:"Posted date (newest)"}),l.jsx("option",{value:"relevance",children:"Relevance"})]})]}),l.jsxs(x.Field,{children:[l.jsx("label",{htmlFor:"apiKey",children:"RapidAPI Key"}),l.jsx("input",{id:"apiKey",name:"apiKey",type:"password",placeholder:"Paste your RapidAPI key here",value:e,onChange:d=>t(d.target.value)}),l.jsxs("div",{style:{fontSize:12,color:"var(--muted)"},children:["Saved in this browser only. If left empty, the app uses your .env key"," (not set)","."]})]})]}),l.jsxs(x.Actions,{children:[l.jsx("button",{type:"submit",disabled:c,children:"Search"}),l.jsx("div",{className:"spacer"}),r?l.jsx("span",{className:"muted",children:e?"Using saved key":".env key in use"}):l.jsx("span",{className:"muted warn",children:"No API key — showing fallback"}),l.jsx("button",{type:"button",onClick:Y,children:"Verify Key"}),l.jsx("button",{type:"button",className:"ghost danger",onClick:me,disabled:!e,children:"Clear Key"}),yt]}),v&&l.jsx("div",{style:{marginTop:8,fontSize:12,color:v.startsWith("OK")?"var(--text)":"var(--danger, #e5484d)"},children:v})]})}),l.jsxs(x.Card,{children:[l.jsxs(x.SectionTitle,{children:["Results ",ye?`(${ye})`:""]}),f&&l.jsx(x.Info,{className:"warn",children:f}),F&&l.jsxs("div",{style:{marginTop:8,padding:10,border:"1px dashed var(--border)",borderRadius:"var(--radius)",background:"var(--bg)",whiteSpace:"pre-wrap",fontFamily:"ui-monospace, SFMono-Regular, Menlo, monospace",fontSize:12,color:"var(--muted)"},children:[l.jsx("strong",{children:"Debug:"}),`
`,"status: ",String(F.status??"n/a"),`
`,"message: ",String(f),`
`,"api payload: ",JSON.stringify(F.data??{},null,2)]}),c&&l.jsx(x.Skeleton,{children:"Loading jobs…"}),!c&&b.length===0&&l.jsx(x.Empty,{children:"No jobs yet. Try searching with different keywords."}),l.jsx(x.Results,{children:b.map(d=>l.jsxs(x.JobCard,{onClick:()=>y(d),children:[l.jsxs("div",{className:"head",children:[l.jsx("div",{className:"logo",children:d.employer_logo?l.jsx("img",{src:d.employer_logo,alt:d.employer_name}):l.jsx("span",{className:"placeholder"})}),l.jsxs("div",{className:"meta",children:[l.jsx("h3",{title:d.job_title,children:d.job_title}),l.jsx("p",{className:"company",children:d.employer_name||d.job_publisher||"—"}),l.jsxs("p",{className:"loc",children:[d.job_city?`${d.job_city}, `:"",d.job_country||"",d.job_is_remote?" • Remote":""]})]}),l.jsxs("div",{className:"actions",onClick:j=>j.stopPropagation(),children:[l.jsx("button",{onClick:()=>q(d),children:"Save"}),l.jsx("a",{className:"primary",href:d.job_apply_link||"#",target:"_blank",rel:"noreferrer",onClick:j=>j.stopPropagation(),children:"Apply"})]})]}),l.jsxs(x.Tags,{children:[d.job_employment_type&&l.jsx("span",{children:d.job_employment_type}),Array.isArray(d.job_required_skills)&&d.job_required_skills.slice(0,5).map(j=>l.jsx("span",{children:j},j)),l.jsxs("span",{className:"muted",children:["Posted ",wt(d.job_posted_at_timestamp)]})]}),l.jsxs("p",{className:"desc",children:[String(d.job_description||"").slice(0,260),String(d.job_description||"").length>260?"…":""]})]},d.job_id))}),l.jsxs(x.Pagination,{children:[l.jsx("button",{disabled:c||i<=1,onClick:()=>o(d=>Sn(d-1,1,999)),children:"Prev"}),l.jsxs("span",{children:["Page ",i]}),l.jsx("button",{disabled:c||!k,onClick:()=>o(d=>d+1),children:"Next"})]})]})]}),l.jsxs("div",{className:"right",children:[l.jsxs(x.Card,{children:[l.jsx(x.SectionTitle,{children:"Saved Jobs"}),S.length===0?l.jsx(x.Info,{children:"No saved jobs yet."}):l.jsx(x.SavedList,{children:S.map(d=>l.jsxs("li",{children:[l.jsxs("div",{className:"meta",onClick:()=>y(d),children:[l.jsx("strong",{children:d.job_title}),l.jsx("span",{className:"muted",children:d.employer_name||"—"})]}),l.jsxs("div",{className:"row",children:[l.jsx("a",{href:d.job_apply_link||"#",target:"_blank",rel:"noreferrer",children:"Apply"}),l.jsx("button",{className:"danger",onClick:()=>Re(d.job_id),children:"Remove"})]})]},d.job_id))}),l.jsx(x.Actions,{children:l.jsx("button",{className:"ghost danger",disabled:!S.length,onClick:K,children:"Clear All"})})]}),l.jsxs(x.Card,{children:[l.jsx(x.SectionTitle,{children:"Details"}),h?l.jsxs("div",{children:[l.jsx("h3",{className:"detail-title",children:h.job_title}),l.jsxs("p",{className:"muted",children:[h.employer_name||h.job_publisher||"—"," • ",h.job_city?`${h.job_city}, `:"",h.job_country||"",h.job_is_remote?" • Remote":""]}),l.jsxs(x.Tags,{style:{marginTop:6,marginBottom:10},children:[h.job_employment_type&&l.jsx("span",{children:h.job_employment_type}),l.jsxs("span",{className:"muted",children:["Posted ",jn(h.job_posted_at_timestamp)," (",wt(h.job_posted_at_timestamp),")"]})]}),l.jsx("p",{className:"desc full",children:h.job_description||"—"}),Array.isArray(h.job_required_skills)&&h.job_required_skills.length>0&&l.jsxs(l.Fragment,{children:[l.jsx(x.Divider,{}),l.jsx(x.SectionTitle,{children:"Required skills"}),l.jsx(x.Tags,{children:h.job_required_skills.map(d=>l.jsx("span",{children:d},d))})]}),(h.job_min_salary||h.job_max_salary)&&l.jsxs(l.Fragment,{children:[l.jsx(x.Divider,{}),l.jsx(x.SectionTitle,{children:"Compensation"}),l.jsxs("p",{className:"muted",children:[h.job_min_salary?jt(h.job_min_salary,h.job_salary_currency):"—"," –"," ",h.job_max_salary?jt(h.job_max_salary,h.job_salary_currency):"—"]})]}),l.jsxs(x.Actions,{children:[l.jsx("button",{onClick:()=>q(h),children:"Save"}),l.jsx("a",{className:"primary",href:h.job_apply_link||"#",target:"_blank",rel:"noreferrer",children:"Apply"})]})]}):l.jsx(x.Info,{children:"Select a job to view details."})]})]})]}),_.open&&l.jsx(x.ModalOverlay,{onClick:()=>E({open:!1,type:"",payload:null,title:"",body:""}),children:l.jsxs(x.Modal,{onClick:d=>d.stopPropagation(),children:[l.jsx("h3",{children:_.title}),l.jsx("p",{children:_.body}),l.jsxs("div",{className:"actions",children:[l.jsx("button",{className:"ghost",onClick:()=>E({open:!1,type:"",payload:null,title:"",body:""}),children:"Cancel"}),_.type==="remove-saved"&&l.jsx("button",{className:"danger",onClick:Ue,children:"Remove"}),_.type==="clear-saved"&&l.jsx("button",{className:"danger",onClick:te,children:"Delete All"}),_.type==="clear-key"&&l.jsx("button",{className:"danger",onClick:de,children:"Clear Key"})]})]})})]})};export{Hn as default};
