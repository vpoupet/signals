var je=Object.defineProperty;var Ae=(n,e,t)=>e in n?je(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var S=(n,e,t)=>(Ae(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(i){if(i.ep)return;i.ep=!0;const l=t(i);fetch(i.href,l)}})();function O(){}function ke(n){return n()}function fe(){return Object.create(null)}function A(n){n.forEach(ke)}function Ce(n){return typeof n=="function"}function K(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}function Fe(n){return Object.keys(n).length===0}function he(n){return n??""}const Be=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function h(n,e){n.appendChild(e)}function M(n,e,t){n.insertBefore(e,t||null)}function R(n){n.parentNode&&n.parentNode.removeChild(n)}function m(n){return document.createElement(n)}function Ee(n){return document.createTextNode(n)}function x(){return Ee(" ")}function Re(){return Ee("")}function F(n,e,t,s){return n.addEventListener(e,t,s),()=>n.removeEventListener(e,t,s)}function Ie(n){return function(e){return e.preventDefault(),n.call(this,e)}}function _(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function te(n){return n===""?null:+n}function We(n){return Array.from(n.childNodes)}function P(n,e){n.value=e??""}let ue;function Q(n){ue=n}const U=[],ne=[];let H=[];const le=[],Ue=Promise.resolve();let re=!1;function Pe(){re||(re=!0,Ue.then(Ne))}function oe(n){H.push(n)}function ge(n){le.push(n)}const ie=new Set;let W=0;function Ne(){if(W!==0)return;const n=ue;do{try{for(;W<U.length;){const e=U[W];W++,Q(e),He(e.$$)}}catch(e){throw U.length=0,W=0,e}for(Q(null),U.length=0,W=0;ne.length;)ne.pop()();for(let e=0;e<H.length;e+=1){const t=H[e];ie.has(t)||(ie.add(t),t())}H.length=0}while(U.length);for(;le.length;)le.pop()();re=!1,ie.clear(),Q(n)}function He(n){if(n.fragment!==null){n.update(),A(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(oe)}}function Ge(n){const e=[],t=[];H.forEach(s=>n.indexOf(s)===-1?e.push(s):t.push(s)),t.forEach(s=>s()),H=e}const ee=new Set;let B;function Le(){B={r:0,c:[],p:B}}function Oe(){B.r||A(B.c),B=B.p}function L(n,e){n&&n.i&&(ee.delete(n),n.i(e))}function j(n,e,t,s){if(n&&n.o){if(ee.has(n))return;ee.add(n),B.c.push(()=>{ee.delete(n),s&&(t&&n.d(1),s())}),n.o(e)}else s&&s()}function q(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function ze(n,e){n.d(1),e.delete(n.key)}function Me(n,e){j(n,1,1,()=>{e.delete(n.key)})}function ae(n,e,t,s,i,l,a,r,o,u,c,g){let b=n.length,p=l.length,y=b;const k={};for(;y--;)k[n[y].key]=y;const C=[],I=new Map,v=new Map,D=[];for(y=p;y--;){const f=g(i,l,y),w=t(f);let E=a.get(w);E?s&&D.push(()=>E.p(f,e)):(E=u(w,f),E.c()),I.set(w,C[y]=E),w in k&&v.set(w,Math.abs(y-k[w]))}const d=new Set,$=new Set;function N(f){L(f,1),f.m(r,c),a.set(f.key,f),c=f.first,p--}for(;b&&p;){const f=C[p-1],w=n[b-1],E=f.key,Y=w.key;f===w?(c=f.first,b--,p--):I.has(Y)?!a.has(E)||d.has(E)?N(f):$.has(Y)?b--:v.get(E)>v.get(Y)?($.add(E),N(f)):(d.add(Y),b--):(o(w,a),b--)}for(;b--;){const f=n[b];I.has(f.key)||o(f,a)}for(;p;)N(C[p-1]);return A(D),C}function de(n,e,t){const s=n.$$.props[e];s!==void 0&&(n.$$.bound[s]=t,t(n.$$.ctx[s]))}function T(n){n&&n.c()}function G(n,e,t){const{fragment:s,after_update:i}=n.$$;s&&s.m(e,t),oe(()=>{const l=n.$$.on_mount.map(ke).filter(Ce);n.$$.on_destroy?n.$$.on_destroy.push(...l):A(l),n.$$.on_mount=[]}),i.forEach(oe)}function z(n,e){const t=n.$$;t.fragment!==null&&(Ge(t.after_update),A(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function qe(n,e){n.$$.dirty[0]===-1&&(U.push(n),Pe(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function V(n,e,t,s,i,l,a,r=[-1]){const o=ue;Q(n);const u=n.$$={fragment:null,ctx:[],props:l,update:O,not_equal:i,bound:fe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:fe(),dirty:r,skip_bound:!1,root:e.target||o.$$.root};a&&a(u.root);let c=!1;if(u.ctx=t?t(n,e.props||{},(g,b,...p)=>{const y=p.length?p[0]:b;return u.ctx&&i(u.ctx[g],u.ctx[g]=y)&&(!u.skip_bound&&u.bound[g]&&u.bound[g](y),c&&qe(n,g)),b}):[],u.update(),c=!0,A(u.before_update),u.fragment=s?s(u.ctx):!1,e.target){if(e.hydrate){const g=We(e.target);u.fragment&&u.fragment.l(g),g.forEach(R)}else u.fragment&&u.fragment.c();e.intro&&L(n.$$.fragment),G(n,e.target,e.anchor),Ne()}Q(o)}class Z{constructor(){S(this,"$$");S(this,"$$set")}$destroy(){z(this,1),this.$destroy=O}$on(e,t){if(!Ce(t))return O;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(t),()=>{const i=s.indexOf(t);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!Fe(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Ke="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Ke);class X{eval(e){return!0}toString(){return""}getSignals(){return new Set}}class pe extends X{constructor(t){super();S(this,"subclause");this.subclause=t}eval(t){return this.subclause===void 0?!1:!this.subclause.eval(t)}toString(){return this.subclause===void 0?"-":`-${this.subclause.toString()}`}getSignals(){return this.subclause.getSignals()}}class se extends X{constructor(t){super();S(this,"subclauses");this.subclauses=[];for(const s of t)s instanceof se?this.subclauses.push(...s.subclauses):this.subclauses.push(s)}eval(t){return this.subclauses.every(s=>s.eval(t))}toString(){return`(${this.subclauses.map(t=>t.toString()).join(" ")})`}getSignals(){const t=new Set;for(const s of this.subclauses)s.getSignals().forEach(i=>t.add(i));return t}}class ce extends X{constructor(t){super();S(this,"subclauses");this.subclauses=[];for(const s of t)s instanceof ce?this.subclauses.push(...s.subclauses):this.subclauses=t}eval(t){return this.subclauses.some(s=>s.eval(t))}toString(){return`[${this.subclauses.map(t=>t.toString()).join(" ")}]`}getSignals(){const t=new Set;for(const s of this.subclauses)s.getSignals().forEach(i=>t.add(i));return t}}class Ve extends X{constructor(t,s=0){super();S(this,"signal");S(this,"position");this.signal=t,this.position=s}eval(t){return t[this.position].has(this.signal)}toString(){return this.position===0?`${Symbol.keyFor(this.signal)}`:`${this.position}.${Symbol.keyFor(this.signal)}`}getSignals(){return new Set([this.signal])}}class De{constructor(e){S(this,"cells");this.cells=Array(e).fill(0).map(()=>new Set)}getSize(){return this.cells.length}getNeighborhood(e,t,s){const i={};for(let l=t;l<=s;l++)e+l<0?i[l]=new Set:e+l>=this.cells.length?i[l]=new Set:i[l]=this.cells[e+l];return i}}const me="[A-Za-z0-9_$']+",_e="-?\\d+";class J extends Error{constructor(e){super(e),this.name="RuleParsingException"}}class be{constructor(e,t,s=1){S(this,"neighbor");S(this,"signal");S(this,"futureStep");this.neighbor=e,this.signal=t,this.futureStep=s}toString(){return this.futureStep===1?`${this.neighbor}.${Symbol.keyFor(this.signal)}`:`${this.neighbor}/${this.futureStep}.${Symbol.keyFor(this.signal)}`}}class Ze{constructor(e,t){S(this,"condition");S(this,"outputs");this.condition=e,this.outputs=t}toString(){return`${this.condition.toString()}: ${this.outputs.map(e=>e.toString()).join(" ")}`}getOutputSignals(){const e=new Set;for(const t of this.outputs)e.add(t.signal);return e}getConditionSignals(){return this.condition.getSignals()}}class Je{constructor(e){S(this,"rules");S(this,"minNeighbor");S(this,"maxNeighbor");S(this,"maxFutureDepth");this.rules=[],this.minNeighbor=0,this.maxNeighbor=0,this.maxFutureDepth=1;const t=[];for(let s of e.split(`
`)){const i=s.search(/\S|$/);if(s=s.replace(/#.*/,"").trim(),s.length===0)continue;let l,a;s.includes(":")?[l,a]=s.split(":"):a=s;let r,o;for(;t.length>0&&t[0].indent>=i;)t.shift();if(l){const u=this.parseCondition(l);t.length===0?r=u:r=new se([t[0].condition,u]),t.unshift({condition:r,indent:i})}else r=t[0].condition;a&&(o=this.parseOutputs(a),this.rules.push(new Ze(r,o)))}}readConditionTokens(e){const t=e.shift();if(t===void 0)return new X;const s=[];let i;switch(t){case"(":for(;e[0]!==")";){if(e.length===0)throw new J("Unbalanced parentheses in condition");s.push(this.readConditionTokens(e))}return e.shift(),s.length===1?s[0]:new se(s);case"[":for(;e[0]!=="]";){if(e.length===0)throw new J("Unbalanced parentheses in condition");s.push(this.readConditionTokens(e))}return e.shift(),s.length===1?s[0]:new ce(s);case"-":return i=this.readConditionTokens(e),i instanceof pe?i.subclause:new pe(i);case"+":return this.readConditionTokens(e);default:return new Ve(Symbol.for(t))}}parseCondition(e){const t=new RegExp("(\\(|\\)|\\[|\\]|\\+|-|"+me+")","g"),s=e.match(t);if(s===null)throw new J("Invalid condition");const i=this.readConditionTokens(s);if(s.length>0)throw new J("Invalid condition");return i}parseOutputs(e){const t=[],s=new RegExp(`(((${_e}\\/)?${_e}\\.)?${me})`,"g"),i=e.match(s);if(i===null)throw new J("Invalid outputs");for(const l of i)if(l.includes(".")){let a=1,r;const o=l.split(".");let u=o[0];const c=o[1];u.includes("/")&&([u,r]=u.split("/"),a=parseInt(r),this.maxFutureDepth=Math.max(this.maxFutureDepth,a));const g=u===""?0:parseInt(u);t.push(new be(g,Symbol.for(c),a))}else t.push(new be(0,Symbol.for(l),1));return t}makeDiagram(e,t){const s=e.getSize(),i=[e];for(let l=0;l<t;l++)i.push(new De(s));for(let l=0;l<t;l++){const a=i[l];for(let r=0;r<s;r++){const o=a.getNeighborhood(r,this.minNeighbor,this.maxNeighbor);for(const u of this.rules)u.condition.eval(o)&&u.outputs.forEach(c=>{const g=r+c.neighbor;l+c.futureStep<i.length&&0<=g&&g<s&&i[l+c.futureStep].cells[g].add(c.signal)})}}return i}getSignals(){const e=new Set;for(const t of this.rules)t.getConditionSignals().forEach(s=>e.add(s)),t.getOutputSignals().forEach(s=>e.add(s));return e}toString(){return this.rules.map(e=>e.toString()).join(`
`)}}const Qe=`# Fischer's prime numbers sieve cellular automaton

Init:
  Wall
  0/2.Right
  0/0.Half
Wall:
  Wall
Right:
  -Half: 1.Right
  Half: 1.Wall 0/2.Left 1.Half
Half:
  -Right: 1/3.Half
Left:
  -Wall: -1.Left
  Wall: 1.Right
  0/0.BounceLeft
BounceLeft:
  0/0.Mark
  -Wall: -1.BounceLeft
  +Wall: +1.BounceRight
BounceRight:
  -Wall: 1.BounceRight
  Wall: -1.BounceLeft
Mark:
  -1.Mark
`;function we(n,e,t){const s=n.slice();return s[4]=e[t],s}function ye(n,e){let t,s;return{key:n,first:null,c(){t=m("div"),_(t,"class",s=he(`st-${e[4]}`)+" svelte-1rddhiy"),this.first=t},m(i,l){M(i,t,l)},p(i,l){e=i,l&2&&s!==(s=he(`st-${e[4]}`)+" svelte-1rddhiy")&&_(t,"class",s)},d(i){i&&R(t)}}}function Te(n){let e,t=[],s=new Map,i,l=q(n[1]);const a=r=>r[4];for(let r=0;r<l.length;r+=1){let o=we(n,l,r),u=a(o);s.set(u,t[r]=ye(u,o))}return{c(){e=m("div");for(let r=0;r<t.length;r+=1)t[r].c();_(e,"class","cell svelte-1rddhiy"),_(e,"data-tooltip",i=n[0].length>0?n[0].join(" "):void 0)},m(r,o){M(r,e,o);for(let u=0;u<t.length;u+=1)t[u]&&t[u].m(e,null)},p(r,[o]){o&2&&(l=q(r[1]),t=ae(t,o,a,1,r,l,s,e,ze,ye,null,we)),o&1&&i!==(i=r[0].length>0?r[0].join(" "):void 0)&&_(e,"data-tooltip",i)},i:O,o:O,d(r){r&&R(e);for(let o=0;o<t.length;o+=1)t[o].d()}}}function Xe(n,e,t){let{cell:s}=e,{signalIndexes:i}=e,l,a;return n.$$set=r=>{"cell"in r&&t(2,s=r.cell),"signalIndexes"in r&&t(3,i=r.signalIndexes)},n.$$.update=()=>{if(n.$$.dirty&15){t(1,a=[]);for(const r of s){const o=i.get(r);o!==void 0&&a.push(o);const u=Symbol.keyFor(r);u!==void 0&&l.push(u)}}},t(0,l=[]),[l,a,s,i]}class Ye extends Z{constructor(e){super(),V(this,e,Xe,Te,K,{cell:2,signalIndexes:3})}}function Se(n,e,t){const s=n.slice();return s[2]=e[t],s[4]=t,s}function ve(n,e){let t,s,i;return s=new Ye({props:{cell:e[2],signalIndexes:e[1]}}),{key:n,first:null,c(){t=Re(),T(s.$$.fragment),this.first=t},m(l,a){M(l,t,a),G(s,l,a),i=!0},p(l,a){e=l;const r={};a&1&&(r.cell=e[2]),a&2&&(r.signalIndexes=e[1]),s.$set(r)},i(l){i||(L(s.$$.fragment,l),i=!0)},o(l){j(s.$$.fragment,l),i=!1},d(l){l&&R(t),z(s,l)}}}function et(n){let e,t=[],s=new Map,i,l=q(n[0].cells);const a=r=>r[4];for(let r=0;r<l.length;r+=1){let o=Se(n,l,r),u=a(o);s.set(u,t[r]=ve(u,o))}return{c(){e=m("div");for(let r=0;r<t.length;r+=1)t[r].c();_(e,"class","row svelte-ac40fi")},m(r,o){M(r,e,o);for(let u=0;u<t.length;u+=1)t[u]&&t[u].m(e,null);i=!0},p(r,[o]){o&3&&(l=q(r[0].cells),Le(),t=ae(t,o,a,1,r,l,s,e,Me,ve,null,Se),Oe())},i(r){if(!i){for(let o=0;o<l.length;o+=1)L(t[o]);i=!0}},o(r){for(let o=0;o<t.length;o+=1)j(t[o]);i=!1},d(r){r&&R(e);for(let o=0;o<t.length;o+=1)t[o].d()}}}function tt(n,e,t){let{row:s}=e,{signalIndexes:i}=e;return n.$$set=l=>{"row"in l&&t(0,s=l.row),"signalIndexes"in l&&t(1,i=l.signalIndexes)},[s,i]}class nt extends Z{constructor(e){super(),V(this,e,tt,et,K,{row:0,signalIndexes:1})}}const{Map:st}=Be;function $e(n,e,t){const s=n.slice();return s[6]=e[t],s[8]=t,s}function xe(n,e){let t,s,i;return s=new nt({props:{row:e[6],signalIndexes:e[1]}}),{key:n,first:null,c(){t=Re(),T(s.$$.fragment),this.first=t},m(l,a){M(l,t,a),G(s,l,a),i=!0},p(l,a){e=l;const r={};a&1&&(r.row=e[6]),a&2&&(r.signalIndexes=e[1]),s.$set(r)},i(l){i||(L(s.$$.fragment,l),i=!0)},o(l){j(s.$$.fragment,l),i=!1},d(l){l&&R(t),z(s,l)}}}function it(n){let e,t=[],s=new st,i,l=q(n[0]);const a=r=>r[8];for(let r=0;r<l.length;r+=1){let o=$e(n,l,r),u=a(o);s.set(u,t[r]=xe(u,o))}return{c(){e=m("div");for(let r=0;r<t.length;r+=1)t[r].c();_(e,"class","diagram svelte-1vfoc7f")},m(r,o){M(r,e,o);for(let u=0;u<t.length;u+=1)t[u]&&t[u].m(e,null);i=!0},p(r,[o]){o&3&&(l=q(r[0]),Le(),t=ae(t,o,a,1,r,l,s,e,Me,xe,null,$e),Oe())},i(r){if(!i){for(let o=0;o<l.length;o+=1)L(t[o]);i=!0}},o(r){for(let o=0;o<t.length;o+=1)j(t[o]);i=!1},d(r){r&&R(e);for(let o=0;o<t.length;o+=1)t[o].d()}}}function lt(n,e,t){let{automaton:s}=e,{settings:i}=e,l,a,r,o;return n.$$set=u=>{"automaton"in u&&t(2,s=u.automaton),"settings"in u&&t(3,i=u.settings)},n.$$.update=()=>{n.$$.dirty&24&&(t(4,l=new De(i.nbCells)),l.cells[0].add(Symbol.for("Init"))),n.$$.dirty&29&&(t(0,a=s.makeDiagram(l,i.nbSteps)),i.timeGoesUp&&a.reverse()),n.$$.dirty&38&&(t(5,r=[...s.getSignals()]),t(1,o=new Map),r.forEach((u,c)=>o.set(u,c)))},[a,o,s,i,l,r]}class rt extends Z{constructor(e){super(),V(this,e,lt,it,K,{automaton:2,settings:3})}}function ot(n){let e,t,s,i,l,a,r,o,u;return{c(){e=m("div"),t=m("h2"),t.textContent="Rules",s=x(),i=m("form"),l=m("textarea"),a=x(),r=m("button"),r.textContent="Update",_(l,"class","rulebox svelte-ygspja"),_(r,"type","submit"),_(e,"class","container")},m(c,g){M(c,e,g),h(e,t),h(e,s),h(e,i),h(i,l),P(l,n[0]),h(i,a),h(i,r),o||(u=[F(l,"input",n[3]),F(i,"submit",Ie(n[1]))],o=!0)},p(c,[g]){g&1&&P(l,c[0])},i:O,o:O,d(c){c&&R(e),o=!1,A(u)}}}function ut(n,e,t){let{rules:s}=e,i=s;function l(){t(2,s=i)}function a(){i=this.value,t(0,i)}return n.$$set=r=>{"rules"in r&&t(2,s=r.rules)},[i,l,s,a]}class at extends Z{constructor(e){super(),V(this,e,ut,ot,K,{rules:2})}}function ct(n){let e,t,s,i,l,a,r,o,u,c,g,b,p,y,k,C,I,v,D,d,$,N;return{c(){e=m("div"),t=m("h2"),t.textContent="Settings",s=x(),i=m("form"),l=m("div"),a=m("span"),a.textContent="Number of cells",r=x(),o=m("input"),u=x(),c=m("div"),g=m("span"),g.textContent="Number of rows",b=x(),p=m("input"),y=x(),k=m("div"),C=m("span"),C.textContent="Time goes up",I=x(),v=m("input"),D=x(),d=m("button"),d.textContent="Update",_(o,"id","nbCells"),_(o,"type","number"),_(o,"class","svelte-188i2ve"),_(p,"id","nbSteps"),_(p,"type","number"),_(p,"class","svelte-188i2ve"),_(v,"id","timeGoesUp"),_(v,"type","checkbox"),_(d,"type","submit"),_(e,"class","container")},m(f,w){M(f,e,w),h(e,t),h(e,s),h(e,i),h(i,l),h(l,a),h(l,r),h(l,o),P(o,n[0]),h(i,u),h(i,c),h(c,g),h(c,b),h(c,p),P(p,n[1]),h(i,y),h(i,k),h(k,C),h(k,I),h(k,v),v.checked=n[2],h(i,D),h(i,d),$||(N=[F(o,"input",n[5]),F(p,"input",n[6]),F(v,"change",n[7]),F(i,"submit",Ie(n[3]))],$=!0)},p(f,[w]){w&1&&te(o.value)!==f[0]&&P(o,f[0]),w&2&&te(p.value)!==f[1]&&P(p,f[1]),w&4&&(v.checked=f[2])},i:O,o:O,d(f){f&&R(e),$=!1,A(N)}}}function ft(n,e,t){let{settings:s}=e,{nbCells:i,nbSteps:l,timeGoesUp:a}=s;function r(){t(4,s={nbCells:i,nbSteps:l,timeGoesUp:a})}function o(){i=te(this.value),t(0,i)}function u(){l=te(this.value),t(1,l)}function c(){a=this.checked,t(2,a)}return n.$$set=g=>{"settings"in g&&t(4,s=g.settings)},[i,l,a,r,s,o,u,c]}class ht extends Z{constructor(e){super(),V(this,e,ft,ct,K,{settings:4})}}function gt(n){let e,t,s,i,l,a,r,o,u,c,g,b,p,y,k;function C(d){n[3](d)}let I={};n[1]!==void 0&&(I.settings=n[1]),i=new ht({props:I}),ne.push(()=>de(i,"settings",C));function v(d){n[4](d)}let D={};return n[0]!==void 0&&(D.rules=n[0]),r=new at({props:D}),ne.push(()=>de(r,"rules",v)),c=new rt({props:{automaton:n[2],settings:n[1]}}),{c(){e=m("main"),t=m("h1"),t.textContent="Signal Automata",s=x(),T(i.$$.fragment),a=x(),T(r.$$.fragment),u=x(),T(c.$$.fragment),g=x(),b=m("button"),b.textContent="Go",_(e,"class","container")},m(d,$){M(d,e,$),h(e,t),h(e,s),G(i,e,null),h(e,a),G(r,e,null),h(e,u),G(c,e,null),h(e,g),h(e,b),p=!0,y||(k=F(b,"click",n[5]),y=!0)},p(d,[$]){const N={};!l&&$&2&&(l=!0,N.settings=d[1],ge(()=>l=!1)),i.$set(N);const f={};!o&&$&1&&(o=!0,f.rules=d[0],ge(()=>o=!1)),r.$set(f);const w={};$&4&&(w.automaton=d[2]),$&2&&(w.settings=d[1]),c.$set(w)},i(d){p||(L(i.$$.fragment,d),L(r.$$.fragment,d),L(c.$$.fragment,d),p=!0)},o(d){j(i.$$.fragment,d),j(r.$$.fragment,d),j(c.$$.fragment,d),p=!1},d(d){d&&R(e),z(i),z(r),z(c),y=!1,k()}}}function dt(n,e,t){let s={nbCells:40,nbSteps:60,timeGoesUp:!0},i=Qe,l;function a(u){s=u,t(1,s)}function r(u){i=u,t(0,i)}const o=()=>console.log(s);return n.$$.update=()=>{n.$$.dirty&1&&t(2,l=new Je(i))},[i,s,l,a,r,o]}class pt extends Z{constructor(e){super(),V(this,e,dt,gt,K,{})}}new pt({target:document.getElementById("app")});