const Iv=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}};Iv();function at(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const Tv="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",Cv=at(Tv),Sv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",kv=at(Sv);function Nf(t){return!!t||t===""}function Oi(t){if($(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Y(s)?Pf(s):Oi(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(Y(t))return t;if(Te(t))return t}}const Rv=/;(?![^(]*\))/g,Av=/:(.+)/;function Pf(t){const e={};return t.split(Rv).forEach(n=>{if(n){const s=n.split(Av);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Mi(t){let e="";if(Y(t))e=t;else if($(t))for(let n=0;n<t.length;n++){const s=Mi(t[n]);s&&(e+=s+" ")}else if(Te(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function Nv(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Y(e)&&(t.class=Mi(e)),n&&(t.style=Oi(n)),t}const Pv="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",Ov="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",Mv="area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr",xv=at(Pv),Dv=at(Ov),Lv=at(Mv);function Fv(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=bn(t[s],e[s]);return n}function bn(t,e){if(t===e)return!0;let n=Mf(t),s=Mf(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=$(t),s=$(e),n||s)return n&&s?Fv(t,e):!1;if(n=Te(t),s=Te(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!bn(t[o],e[o]))return!1}}return String(t)===String(e)}function no(t,e){return t.findIndex(n=>bn(n,e))}const Uv=t=>t==null?"":$(t)||Te(t)&&(t.toString===xf||!K(t.toString))?JSON.stringify(t,Of,2):String(t),Of=(t,e)=>e&&e.__v_isRef?Of(t,e.value):Vs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:Qn(e)?{[`Set(${e.size})`]:[...e.values()]}:Te(e)&&!$(e)&&!Df(e)?String(e):e,le={},Ws=[],Ke=()=>{},so=()=>!1,Bv=/^on[^a-z]/,Gn=t=>Bv.test(t),kl=t=>t.startsWith("onUpdate:"),ce=Object.assign,Rl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Hv=Object.prototype.hasOwnProperty,re=(t,e)=>Hv.call(t,e),$=Array.isArray,Vs=t=>io(t)==="[object Map]",Qn=t=>io(t)==="[object Set]",Mf=t=>t instanceof Date,K=t=>typeof t=="function",Y=t=>typeof t=="string",qs=t=>typeof t=="symbol",Te=t=>t!==null&&typeof t=="object",Al=t=>Te(t)&&K(t.then)&&K(t.catch),xf=Object.prototype.toString,io=t=>xf.call(t),$v=t=>io(t).slice(8,-1),Df=t=>io(t)==="[object Object]",Nl=t=>Y(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Yn=at(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ro=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Wv=/-(\w)/g,$e=ro(t=>t.replace(Wv,(e,n)=>n?n.toUpperCase():"")),Vv=/\B([A-Z])/g,Nt=ro(t=>t.replace(Vv,"-$1").toLowerCase()),Jn=ro(t=>t.charAt(0).toUpperCase()+t.slice(1)),js=ro(t=>t?`on${Jn(t)}`:""),xi=(t,e)=>!Object.is(t,e),zs=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},oo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},En=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Lf;const qv=()=>Lf||(Lf=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let $t;const ao=[];class Pl{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&$t&&(this.parent=$t,this.index=($t.scopes||($t.scopes=[])).push(this)-1)}run(e){if(this.active)try{return this.on(),e()}finally{this.off()}}on(){this.active&&(ao.push(this),$t=this)}off(){this.active&&(ao.pop(),$t=ao[ao.length-1])}stop(e){if(this.active){if(this.effects.forEach(n=>n.stop()),this.cleanups.forEach(n=>n()),this.scopes&&this.scopes.forEach(n=>n.stop(!0)),this.parent&&!e){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.active=!1}}}function jv(t){return new Pl(t)}function Ff(t,e){e=e||$t,e&&e.active&&e.effects.push(t)}function zv(){return $t}function Kv(t){$t&&$t.cleanups.push(t)}const Ol=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Uf=t=>(t.w&In)>0,Bf=t=>(t.n&In)>0,Gv=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=In},Qv=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];Uf(i)&&!Bf(i)?i.delete(t):e[n++]=i,i.w&=~In,i.n&=~In}e.length=n}},Ml=new WeakMap;let Di=0,In=1;const xl=30,Li=[];let Xn;const Zn=Symbol(""),Dl=Symbol("");class Fi{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],Ff(this,s)}run(){if(!this.active)return this.fn();if(!Li.includes(this))try{return Li.push(Xn=this),Xv(),In=1<<++Di,Di<=xl?Gv(this):Hf(this),this.fn()}finally{Di<=xl&&Qv(this),In=1<<--Di,Tn(),Li.pop();const e=Li.length;Xn=e>0?Li[e-1]:void 0}}stop(){this.active&&(Hf(this),this.onStop&&this.onStop(),this.active=!1)}}function Hf(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}function Yv(t,e){t.effect&&(t=t.effect.fn);const n=new Fi(t);e&&(ce(n,e),e.scope&&Ff(n,e.scope)),(!e||!e.lazy)&&n.run();const s=n.run.bind(n);return s.effect=n,s}function Jv(t){t.effect.stop()}let Ks=!0;const Ll=[];function es(){Ll.push(Ks),Ks=!1}function Xv(){Ll.push(Ks),Ks=!0}function Tn(){const t=Ll.pop();Ks=t===void 0?!0:t}function lt(t,e,n){if(!$f())return;let s=Ml.get(t);s||Ml.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=Ol()),Wf(i)}function $f(){return Ks&&Xn!==void 0}function Wf(t,e){let n=!1;Di<=xl?Bf(t)||(t.n|=In,n=!Uf(t)):n=!t.has(Xn),n&&(t.add(Xn),Xn.deps.push(t))}function sn(t,e,n,s,i,r){const o=Ml.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&$(t))o.forEach((l,c)=>{(c==="length"||c>=s)&&a.push(l)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":$(t)?Nl(n)&&a.push(o.get("length")):(a.push(o.get(Zn)),Vs(t)&&a.push(o.get(Dl)));break;case"delete":$(t)||(a.push(o.get(Zn)),Vs(t)&&a.push(o.get(Dl)));break;case"set":Vs(t)&&a.push(o.get(Zn));break}if(a.length===1)a[0]&&Fl(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Fl(Ol(l))}}function Fl(t,e){for(const n of $(t)?t:[...t])(n!==Xn||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Zv=at("__proto__,__v_isRef,__isVue"),Vf=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(qs)),e1=lo(),t1=lo(!1,!0),n1=lo(!0),s1=lo(!0,!0),qf=i1();function i1(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ne(this);for(let r=0,o=this.length;r<o;r++)lt(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(ne)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){es();const s=ne(this)[e].apply(this,n);return Tn(),s}}),t}function lo(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_raw"&&r===(t?e?td:ed:e?Zf:Xf).get(s))return s;const o=$(s);if(!t&&o&&re(qf,i))return Reflect.get(qf,i,r);const a=Reflect.get(s,i,r);return(qs(i)?Vf.has(i):Zv(i))||(t||lt(s,"get",i),e)?a:xe(a)?!o||!Nl(i)?a.value:a:Te(a)?t?Bl(a):_o(a):a}}const r1=jf(),o1=jf(!0);function jf(t=!1){return function(n,s,i,r){let o=n[s];if(!t&&!vo(i)&&(i=ne(i),o=ne(o),!$(n)&&xe(o)&&!xe(i)))return o.value=i,!0;const a=$(n)&&Nl(s)?Number(s)<n.length:re(n,s),l=Reflect.set(n,s,i,r);return n===ne(r)&&(a?xi(i,o)&&sn(n,"set",s,i):sn(n,"add",s,i)),l}}function a1(t,e){const n=re(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&sn(t,"delete",e,void 0),s}function l1(t,e){const n=Reflect.has(t,e);return(!qs(e)||!Vf.has(e))&&lt(t,"has",e),n}function c1(t){return lt(t,"iterate",$(t)?"length":Zn),Reflect.ownKeys(t)}const zf={get:e1,set:r1,deleteProperty:a1,has:l1,ownKeys:c1},Kf={get:n1,set(t,e){return!0},deleteProperty(t,e){return!0}},u1=ce({},zf,{get:t1,set:o1}),h1=ce({},Kf,{get:s1}),Ul=t=>t,co=t=>Reflect.getPrototypeOf(t);function uo(t,e,n=!1,s=!1){t=t.__v_raw;const i=ne(t),r=ne(e);e!==r&&!n&&lt(i,"get",e),!n&&lt(i,"get",r);const{has:o}=co(i),a=s?Ul:n?Wl:Ui;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function ho(t,e=!1){const n=this.__v_raw,s=ne(n),i=ne(t);return t!==i&&!e&&lt(s,"has",t),!e&&lt(s,"has",i),t===i?n.has(t):n.has(t)||n.has(i)}function fo(t,e=!1){return t=t.__v_raw,!e&&lt(ne(t),"iterate",Zn),Reflect.get(t,"size",t)}function Gf(t){t=ne(t);const e=ne(this);return co(e).has.call(e,t)||(e.add(t),sn(e,"add",t,t)),this}function Qf(t,e){e=ne(e);const n=ne(this),{has:s,get:i}=co(n);let r=s.call(n,t);r||(t=ne(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?xi(e,o)&&sn(n,"set",t,e):sn(n,"add",t,e),this}function Yf(t){const e=ne(this),{has:n,get:s}=co(e);let i=n.call(e,t);i||(t=ne(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&sn(e,"delete",t,void 0),r}function Jf(){const t=ne(this),e=t.size!==0,n=t.clear();return e&&sn(t,"clear",void 0,void 0),n}function po(t,e){return function(s,i){const r=this,o=r.__v_raw,a=ne(o),l=e?Ul:t?Wl:Ui;return!t&&lt(a,"iterate",Zn),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function go(t,e,n){return function(...s){const i=this.__v_raw,r=ne(i),o=Vs(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?Ul:e?Wl:Ui;return!e&&lt(r,"iterate",l?Dl:Zn),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Cn(t){return function(...e){return t==="delete"?!1:this}}function f1(){const t={get(r){return uo(this,r)},get size(){return fo(this)},has:ho,add:Gf,set:Qf,delete:Yf,clear:Jf,forEach:po(!1,!1)},e={get(r){return uo(this,r,!1,!0)},get size(){return fo(this)},has:ho,add:Gf,set:Qf,delete:Yf,clear:Jf,forEach:po(!1,!0)},n={get(r){return uo(this,r,!0)},get size(){return fo(this,!0)},has(r){return ho.call(this,r,!0)},add:Cn("add"),set:Cn("set"),delete:Cn("delete"),clear:Cn("clear"),forEach:po(!0,!1)},s={get(r){return uo(this,r,!0,!0)},get size(){return fo(this,!0)},has(r){return ho.call(this,r,!0)},add:Cn("add"),set:Cn("set"),delete:Cn("delete"),clear:Cn("clear"),forEach:po(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=go(r,!1,!1),n[r]=go(r,!0,!1),e[r]=go(r,!1,!0),s[r]=go(r,!0,!0)}),[t,n,e,s]}const[d1,p1,g1,m1]=f1();function mo(t,e){const n=e?t?m1:g1:t?p1:d1;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(re(n,i)&&i in s?n:s,i,r)}const _1={get:mo(!1,!1)},y1={get:mo(!1,!0)},v1={get:mo(!0,!1)},w1={get:mo(!0,!0)},Xf=new WeakMap,Zf=new WeakMap,ed=new WeakMap,td=new WeakMap;function b1(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function E1(t){return t.__v_skip||!Object.isExtensible(t)?0:b1($v(t))}function _o(t){return t&&t.__v_isReadonly?t:yo(t,!1,zf,_1,Xf)}function nd(t){return yo(t,!1,u1,y1,Zf)}function Bl(t){return yo(t,!0,Kf,v1,ed)}function I1(t){return yo(t,!0,h1,w1,td)}function yo(t,e,n,s,i){if(!Te(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=E1(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function ts(t){return vo(t)?ts(t.__v_raw):!!(t&&t.__v_isReactive)}function vo(t){return!!(t&&t.__v_isReadonly)}function Hl(t){return ts(t)||vo(t)}function ne(t){const e=t&&t.__v_raw;return e?ne(e):t}function $l(t){return oo(t,"__v_skip",!0),t}const Ui=t=>Te(t)?_o(t):t,Wl=t=>Te(t)?Bl(t):t;function Vl(t){$f()&&(t=ne(t),t.dep||(t.dep=Ol()),Wf(t.dep))}function wo(t,e){t=ne(t),t.dep&&Fl(t.dep)}function xe(t){return Boolean(t&&t.__v_isRef===!0)}function bo(t){return sd(t,!1)}function T1(t){return sd(t,!0)}function sd(t,e){return xe(t)?t:new C1(t,e)}class C1{constructor(e,n){this._shallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ne(e),this._value=n?e:Ui(e)}get value(){return Vl(this),this._value}set value(e){e=this._shallow?e:ne(e),xi(e,this._rawValue)&&(this._rawValue=e,this._value=this._shallow?e:Ui(e),wo(this))}}function S1(t){wo(t)}function id(t){return xe(t)?t.value:t}const k1={get:(t,e,n)=>id(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return xe(i)&&!xe(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function ql(t){return ts(t)?t:new Proxy(t,k1)}class R1{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:s}=e(()=>Vl(this),()=>wo(this));this._get=n,this._set=s}get value(){return this._get()}set value(e){this._set(e)}}function A1(t){return new R1(t)}function N1(t){const e=$(t)?new Array(t.length):{};for(const n in t)e[n]=rd(t,n);return e}class P1{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function rd(t,e,n){const s=t[e];return xe(s)?s:new P1(t,e,n)}class O1{constructor(e,n,s){this._setter=n,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new Fi(e,()=>{this._dirty||(this._dirty=!0,wo(this))}),this.__v_isReadonly=s}get value(){const e=ne(this);return Vl(e),e._dirty&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function od(t,e){let n,s;const i=K(t);return i?(n=t,s=Ke):(n=t.get,s=t.set),new O1(n,s,i||!s)}Promise.resolve();let Gs,Eo=[];function ad(t,e){var n,s;Gs=t,Gs?(Gs.enabled=!0,Eo.forEach(({event:i,args:r})=>Gs.emit(i,...r)),Eo=[]):typeof window!="undefined"&&window.HTMLElement&&!((s=(n=window.navigator)===null||n===void 0?void 0:n.userAgent)===null||s===void 0?void 0:s.includes("jsdom"))?((e.__VUE_DEVTOOLS_HOOK_REPLAY__=e.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(r=>{ad(r,e)}),setTimeout(()=>{Gs||(e.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Eo=[])},3e3)):Eo=[]}function M1(t,e,...n){const s=t.vnode.props||le;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[u]||le;f?i=n.map(d=>d.trim()):h&&(i=n.map(En))}let a,l=s[a=js(e)]||s[a=js($e(e))];!l&&r&&(l=s[a=js(Nt(e))]),l&&ht(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,ht(c,t,6,i)}}function ld(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!K(t)){const l=c=>{const u=ld(c,e,!0);u&&(a=!0,ce(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(s.set(t,null),null):($(r)?r.forEach(l=>o[l]=null):ce(o,r),s.set(t,o),o)}function jl(t,e){return!t||!Gn(e)?!1:(e=e.slice(2).replace(/Once$/,""),re(t,e[0].toLowerCase()+e.slice(1))||re(t,Nt(e))||re(t,e))}let ct=null,Io=null;function Bi(t){const e=ct;return ct=t,Io=t&&t.type.__scopeId||null,e}function x1(t){Io=t}function D1(){Io=null}const L1=t=>zl;function zl(t,e=ct,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&hc(-1);const r=Bi(e),o=t(...i);return Bi(r),s._d&&hc(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function To(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:d,ctx:p,inheritAttrs:v}=t;let m,y;const g=Bi(t);try{if(n.shapeFlag&4){const w=i||s;m=ut(u.call(w,w,h,r,d,f,p)),y=l}else{const w=e;m=ut(w.length>1?w(r,{attrs:l,slots:a,emit:c}):w(r,null)),y=e.props?l:U1(l)}}catch(w){Ki.length=0,os(w,t,1),m=we(Qe)}let _=m;if(y&&v!==!1){const w=Object.keys(y),{shapeFlag:T}=_;w.length&&T&(1|6)&&(o&&w.some(kl)&&(y=B1(y,o)),_=Rn(_,y))}return n.dirs&&(_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&(_.transition=n.transition),m=_,Bi(g),m}function F1(t){let e;for(let n=0;n<t.length;n++){const s=t[n];if(kn(s)){if(s.type!==Qe||s.children==="v-if"){if(e)return;e=s}}else return}return e}const U1=t=>{let e;for(const n in t)(n==="class"||n==="style"||Gn(n))&&((e||(e={}))[n]=t[n]);return e},B1=(t,e)=>{const n={};for(const s in t)(!kl(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function H1(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?cd(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!jl(c,f))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?cd(s,o,c):!0:!!o;return!1}function cd(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!jl(n,r))return!0}return!1}function Kl({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const $1=t=>t.__isSuspense,W1={name:"Suspense",__isSuspense:!0,process(t,e,n,s,i,r,o,a,l,c){t==null?q1(e,n,s,i,r,o,a,l,c):j1(t,e,n,s,i,o,a,l,c)},hydrate:z1,create:Gl,normalize:K1},V1=W1;function Hi(t,e){const n=t.props&&t.props[e];K(n)&&n()}function q1(t,e,n,s,i,r,o,a,l){const{p:c,o:{createElement:u}}=l,h=u("div"),f=t.suspense=Gl(t,i,s,e,h,n,r,o,a,l);c(null,f.pendingBranch=t.ssContent,h,null,s,f,r,o),f.deps>0?(Hi(t,"onPending"),Hi(t,"onFallback"),c(null,t.ssFallback,e,n,s,null,r,o),Qs(f,t.ssFallback)):f.resolve()}function j1(t,e,n,s,i,r,o,a,{p:l,um:c,o:{createElement:u}}){const h=e.suspense=t.suspense;h.vnode=e,e.el=t.el;const f=e.ssContent,d=e.ssFallback,{activeBranch:p,pendingBranch:v,isInFallback:m,isHydrating:y}=h;if(v)h.pendingBranch=f,qt(f,v)?(l(v,f,h.hiddenContainer,null,i,h,r,o,a),h.deps<=0?h.resolve():m&&(l(p,d,n,s,i,null,r,o,a),Qs(h,d))):(h.pendingId++,y?(h.isHydrating=!1,h.activeBranch=v):c(v,i,h),h.deps=0,h.effects.length=0,h.hiddenContainer=u("div"),m?(l(null,f,h.hiddenContainer,null,i,h,r,o,a),h.deps<=0?h.resolve():(l(p,d,n,s,i,null,r,o,a),Qs(h,d))):p&&qt(f,p)?(l(p,f,n,s,i,h,r,o,a),h.resolve(!0)):(l(null,f,h.hiddenContainer,null,i,h,r,o,a),h.deps<=0&&h.resolve()));else if(p&&qt(f,p))l(p,f,n,s,i,h,r,o,a),Qs(h,f);else if(Hi(e,"onPending"),h.pendingBranch=f,h.pendingId++,l(null,f,h.hiddenContainer,null,i,h,r,o,a),h.deps<=0)h.resolve();else{const{timeout:g,pendingId:_}=h;g>0?setTimeout(()=>{h.pendingId===_&&h.fallback(d)},g):g===0&&h.fallback(d)}}function Gl(t,e,n,s,i,r,o,a,l,c,u=!1){const{p:h,m:f,um:d,n:p,o:{parentNode:v,remove:m}}=c,y=En(t.props&&t.props.timeout),g={vnode:t,parent:e,parentComponent:n,isSVG:o,container:s,hiddenContainer:i,anchor:r,deps:0,pendingId:0,timeout:typeof y=="number"?y:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(_=!1){const{vnode:w,activeBranch:T,pendingBranch:I,pendingId:E,effects:C,parentComponent:k,container:R}=g;if(g.isHydrating)g.isHydrating=!1;else if(!_){const B=T&&I.transition&&I.transition.mode==="out-in";B&&(T.transition.afterLeave=()=>{E===g.pendingId&&f(I,R,J,0)});let{anchor:J}=g;T&&(J=p(T),d(T,k,g,!0)),B||f(I,R,J,0)}Qs(g,I),g.pendingBranch=null,g.isInFallback=!1;let P=g.parent,N=!1;for(;P;){if(P.pendingBranch){P.effects.push(...C),N=!0;break}P=P.parent}N||Sc(C),g.effects=[],Hi(w,"onResolve")},fallback(_){if(!g.pendingBranch)return;const{vnode:w,activeBranch:T,parentComponent:I,container:E,isSVG:C}=g;Hi(w,"onFallback");const k=p(T),R=()=>{!g.isInFallback||(h(null,_,E,k,I,null,C,a,l),Qs(g,_))},P=_.transition&&_.transition.mode==="out-in";P&&(T.transition.afterLeave=R),g.isInFallback=!0,d(T,I,null,!0),P||R()},move(_,w,T){g.activeBranch&&f(g.activeBranch,_,w,T),g.container=_},next(){return g.activeBranch&&p(g.activeBranch)},registerDep(_,w){const T=!!g.pendingBranch;T&&g.deps++;const I=_.vnode.el;_.asyncDep.catch(E=>{os(E,_,0)}).then(E=>{if(_.isUnmounted||g.isUnmounted||g.pendingId!==_.suspenseId)return;_.asyncResolved=!0;const{vnode:C}=_;yc(_,E,!1),I&&(C.el=I);const k=!I&&_.subTree.el;w(_,C,v(I||_.subTree.el),I?null:p(_.subTree),g,o,l),k&&m(k),Kl(_,C.el),T&&--g.deps==0&&g.resolve()})},unmount(_,w){g.isUnmounted=!0,g.activeBranch&&d(g.activeBranch,n,_,w),g.pendingBranch&&d(g.pendingBranch,n,_,w)}};return g}function z1(t,e,n,s,i,r,o,a,l){const c=e.suspense=Gl(e,s,n,t.parentNode,document.createElement("div"),null,i,r,o,a,!0),u=l(t,c.pendingBranch=e.ssContent,n,c,r,o);return c.deps===0&&c.resolve(),u}function K1(t){const{shapeFlag:e,children:n}=t,s=e&32;t.ssContent=ud(s?n.default:n),t.ssFallback=s?ud(n.fallback):we(Qe)}function ud(t){let e;if(K(t)){const n=Xs&&t._c;n&&(t._d=!1,xo()),t=t(),n&&(t._d=!0,e=Vt,qd())}return $(t)&&(t=F1(t)),t=ut(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function hd(t,e){e&&e.pendingBranch?$(t)?e.effects.push(...t):e.effects.push(t):Sc(t)}function Qs(t,e){t.activeBranch=e;const{vnode:n,parentComponent:s}=t,i=n.el=e.el;s&&s.subTree===n&&(s.vnode.el=i,Kl(s,i))}function fd(t,e){if(Ne){let n=Ne.provides;const s=Ne.parent&&Ne.parent.provides;s===n&&(n=Ne.provides=Object.create(s)),n[t]=e}}function $i(t,e,n=!1){const s=Ne||ct;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&K(e)?e.call(s.proxy):e}}function Ql(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ji(()=>{t.isMounted=!0}),Ro(()=>{t.isUnmounting=!0}),t}const yt=[Function,Array],G1={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:yt,onEnter:yt,onAfterEnter:yt,onEnterCancelled:yt,onBeforeLeave:yt,onLeave:yt,onAfterLeave:yt,onLeaveCancelled:yt,onBeforeAppear:yt,onAppear:yt,onAfterAppear:yt,onAppearCancelled:yt},setup(t,{slots:e}){const n=Nn(),s=Ql();let i;return()=>{const r=e.default&&Co(e.default(),!0);if(!r||!r.length)return;const o=ne(t),{mode:a}=o,l=r[0];if(s.isLeaving)return Jl(l);const c=pd(l);if(!c)return Jl(l);const u=Ys(c,o,s,n);ns(c,u);const h=n.subTree,f=h&&pd(h);let d=!1;const{getTransitionKey:p}=c.type;if(p){const v=p();i===void 0?i=v:v!==i&&(i=v,d=!0)}if(f&&f.type!==Qe&&(!qt(c,f)||d)){const v=Ys(f,o,s,n);if(ns(f,v),a==="out-in")return s.isLeaving=!0,v.afterLeave=()=>{s.isLeaving=!1,n.update()},Jl(l);a==="in-out"&&c.type!==Qe&&(v.delayLeave=(m,y,g)=>{const _=dd(s,f);_[String(f.key)]=f,m._leaveCb=()=>{y(),m._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=g})}return l}}},Yl=G1;function dd(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Ys(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:d,onLeaveCancelled:p,onBeforeAppear:v,onAppear:m,onAfterAppear:y,onAppearCancelled:g}=e,_=String(t.key),w=dd(n,t),T=(E,C)=>{E&&ht(E,s,9,C)},I={mode:r,persisted:o,beforeEnter(E){let C=a;if(!n.isMounted)if(i)C=v||a;else return;E._leaveCb&&E._leaveCb(!0);const k=w[_];k&&qt(t,k)&&k.el._leaveCb&&k.el._leaveCb(),T(C,[E])},enter(E){let C=l,k=c,R=u;if(!n.isMounted)if(i)C=m||l,k=y||c,R=g||u;else return;let P=!1;const N=E._enterCb=B=>{P||(P=!0,B?T(R,[E]):T(k,[E]),I.delayedLeave&&I.delayedLeave(),E._enterCb=void 0)};C?(C(E,N),C.length<=1&&N()):N()},leave(E,C){const k=String(t.key);if(E._enterCb&&E._enterCb(!0),n.isUnmounting)return C();T(h,[E]);let R=!1;const P=E._leaveCb=N=>{R||(R=!0,C(),N?T(p,[E]):T(d,[E]),E._leaveCb=void 0,w[k]===t&&delete w[k])};w[k]=t,f?(f(E,P),f.length<=1&&P()):P()},clone(E){return Ys(E,e,n,s)}};return I}function Jl(t){if(Vi(t))return t=Rn(t),t.children=null,t}function pd(t){return Vi(t)?t.children?t.children[0]:void 0:t}function ns(t,e){t.shapeFlag&6&&t.component?ns(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Co(t,e=!1){let n=[],s=0;for(let i=0;i<t.length;i++){const r=t[i];r.type===He?(r.patchFlag&128&&s++,n=n.concat(Co(r.children,e))):(e||r.type!==Qe)&&n.push(r)}if(s>1)for(let i=0;i<n.length;i++)n[i].patchFlag=-2;return n}function Xl(t){return K(t)?{setup:t,name:t.name}:t}const Wi=t=>!!t.type.__asyncLoader;function Q1(t){K(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:s,delay:i=200,timeout:r,suspensible:o=!0,onError:a}=t;let l=null,c,u=0;const h=()=>(u++,l=null,f()),f=()=>{let d;return l||(d=l=e().catch(p=>{if(p=p instanceof Error?p:new Error(String(p)),a)return new Promise((v,m)=>{a(p,()=>v(h()),()=>m(p),u+1)});throw p}).then(p=>d!==l&&l?l:(p&&(p.__esModule||p[Symbol.toStringTag]==="Module")&&(p=p.default),c=p,p)))};return Xl({name:"AsyncComponentWrapper",__asyncLoader:f,get __asyncResolved(){return c},setup(){const d=Ne;if(c)return()=>Zl(c,d);const p=g=>{l=null,os(g,d,13,!s)};if(o&&d.suspense||Gi)return f().then(g=>()=>Zl(g,d)).catch(g=>(p(g),()=>s?we(s,{error:g}):null));const v=bo(!1),m=bo(),y=bo(!!i);return i&&setTimeout(()=>{y.value=!1},i),r!=null&&setTimeout(()=>{if(!v.value&&!m.value){const g=new Error(`Async component timed out after ${r}ms.`);p(g),m.value=g}},r),f().then(()=>{v.value=!0,d.parent&&Vi(d.parent.vnode)&&Cc(d.parent.update)}).catch(g=>{p(g),m.value=g}),()=>{if(v.value&&c)return Zl(c,d);if(m.value&&s)return we(s,{error:m.value});if(n&&!y.value)return we(n)}}})}function Zl(t,{vnode:{ref:e,props:n,children:s}}){const i=we(t,n,s);return i.ref=e,i}const Vi=t=>t.type.__isKeepAlive,Y1={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=Nn(),s=n.ctx;if(!s.renderer)return e.default;const i=new Map,r=new Set;let o=null;const a=n.suspense,{renderer:{p:l,m:c,um:u,o:{createElement:h}}}=s,f=h("div");s.activate=(g,_,w,T,I)=>{const E=g.component;c(g,_,w,0,a),l(E.vnode,g,_,w,E,a,T,g.slotScopeIds,I),Be(()=>{E.isDeactivated=!1,E.a&&zs(E.a);const C=g.props&&g.props.onVnodeMounted;C&&Ze(C,E.parent,g)},a)},s.deactivate=g=>{const _=g.component;c(g,f,null,1,a),Be(()=>{_.da&&zs(_.da);const w=g.props&&g.props.onVnodeUnmounted;w&&Ze(w,_.parent,g),_.isDeactivated=!0},a)};function d(g){ec(g),u(g,n,a)}function p(g){i.forEach((_,w)=>{const T=Bo(_.type);T&&(!g||!g(T))&&v(w)})}function v(g){const _=i.get(g);!o||_.type!==o.type?d(_):o&&ec(o),i.delete(g),r.delete(g)}er(()=>[t.include,t.exclude],([g,_])=>{g&&p(w=>qi(g,w)),_&&p(w=>!qi(_,w))},{flush:"post",deep:!0});let m=null;const y=()=>{m!=null&&i.set(m,tc(n.subTree))};return ji(y),ko(y),Ro(()=>{i.forEach(g=>{const{subTree:_,suspense:w}=n,T=tc(_);if(g.type===T.type){ec(T);const I=T.component.da;I&&Be(I,w);return}d(g)})}),()=>{if(m=null,!e.default)return null;const g=e.default(),_=g[0];if(g.length>1)return o=null,g;if(!kn(_)||!(_.shapeFlag&4)&&!(_.shapeFlag&128))return o=null,_;let w=tc(_);const T=w.type,I=Bo(Wi(w)?w.type.__asyncResolved||{}:T),{include:E,exclude:C,max:k}=t;if(E&&(!I||!qi(E,I))||C&&I&&qi(C,I))return o=w,_;const R=w.key==null?T:w.key,P=i.get(R);return w.el&&(w=Rn(w),_.shapeFlag&128&&(_.ssContent=w)),m=R,P?(w.el=P.el,w.component=P.component,w.transition&&ns(w,w.transition),w.shapeFlag|=512,r.delete(R),r.add(R)):(r.add(R),k&&r.size>parseInt(k,10)&&v(r.values().next().value)),w.shapeFlag|=256,o=w,_}}},J1=Y1;function qi(t,e){return $(t)?t.some(n=>qi(n,e)):Y(t)?t.split(",").indexOf(e)>-1:t.test?t.test(e):!1}function gd(t,e){_d(t,"a",e)}function md(t,e){_d(t,"da",e)}function _d(t,e,n=Ne){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(So(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Vi(i.parent.vnode)&&X1(s,e,n,i),i=i.parent}}function X1(t,e,n,s){const i=So(e,t,s,!0);Ao(()=>{Rl(s[e],i)},n)}function ec(t){let e=t.shapeFlag;e&256&&(e-=256),e&512&&(e-=512),t.shapeFlag=e}function tc(t){return t.shapeFlag&128?t.ssContent:t}function So(t,e,n=Ne,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;es(),Pn(n);const a=ht(e,n,t,o);return On(),Tn(),a});return s?i.unshift(r):i.push(r),r}}const rn=t=>(e,n=Ne)=>(!Gi||t==="sp")&&So(t,e,n),yd=rn("bm"),ji=rn("m"),vd=rn("bu"),ko=rn("u"),Ro=rn("bum"),Ao=rn("um"),wd=rn("sp"),bd=rn("rtg"),Ed=rn("rtc");function Id(t,e=Ne){So("ec",t,e)}let nc=!0;function Z1(t){const e=Sd(t),n=t.proxy,s=t.ctx;nc=!1,e.beforeCreate&&Td(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:p,activated:v,deactivated:m,beforeDestroy:y,beforeUnmount:g,destroyed:_,unmounted:w,render:T,renderTracked:I,renderTriggered:E,errorCaptured:C,serverPrefetch:k,expose:R,inheritAttrs:P,components:N,directives:B,filters:J}=e;if(c&&ew(c,s,null,t.appContext.config.unwrapInjectedRef),o)for(const se in o){const ae=o[se];K(ae)&&(s[se]=ae.bind(n))}if(i){const se=i.call(n,n);Te(se)&&(t.data=_o(se))}if(nc=!0,r)for(const se in r){const ae=r[se],ze=K(ae)?ae.bind(n,n):K(ae.get)?ae.get.bind(n,n):Ke,Bs=!K(ae)&&K(ae.set)?ae.set.bind(n):Ke,wn=od({get:ze,set:Bs});Object.defineProperty(s,se,{enumerable:!0,configurable:!0,get:()=>wn.value,set:tn=>wn.value=tn})}if(a)for(const se in a)Cd(a[se],s,n,se);if(l){const se=K(l)?l.call(n):l;Reflect.ownKeys(se).forEach(ae=>{fd(ae,se[ae])})}u&&Td(u,t,"c");function Se(se,ae){$(ae)?ae.forEach(ze=>se(ze.bind(n))):ae&&se(ae.bind(n))}if(Se(yd,h),Se(ji,f),Se(vd,d),Se(ko,p),Se(gd,v),Se(md,m),Se(Id,C),Se(Ed,I),Se(bd,E),Se(Ro,g),Se(Ao,w),Se(wd,k),$(R))if(R.length){const se=t.exposed||(t.exposed={});R.forEach(ae=>{Object.defineProperty(se,ae,{get:()=>n[ae],set:ze=>n[ae]=ze})})}else t.exposed||(t.exposed={});T&&t.render===Ke&&(t.render=T),P!=null&&(t.inheritAttrs=P),N&&(t.components=N),B&&(t.directives=B)}function ew(t,e,n=Ke,s=!1){$(t)&&(t=sc(t));for(const i in t){const r=t[i];let o;Te(r)?"default"in r?o=$i(r.from||i,r.default,!0):o=$i(r.from||i):o=$i(r),xe(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function Td(t,e,n){ht($(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Cd(t,e,n,s){const i=s.includes(".")?hp(n,s):()=>n[s];if(Y(t)){const r=e[t];K(r)&&er(i,r)}else if(K(t))er(i,t.bind(n));else if(Te(t))if($(t))t.forEach(r=>Cd(r,e,n,s));else{const r=K(t.handler)?t.handler.bind(n):e[t.handler];K(r)&&er(i,r,t)}}function Sd(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>No(l,c,o,!0)),No(l,e,o)),r.set(e,l),l}function No(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&No(t,r,n,!0),i&&i.forEach(o=>No(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=tw[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const tw={data:kd,props:ss,emits:ss,methods:ss,computed:ss,beforeCreate:Ge,created:Ge,beforeMount:Ge,mounted:Ge,beforeUpdate:Ge,updated:Ge,beforeDestroy:Ge,beforeUnmount:Ge,destroyed:Ge,unmounted:Ge,activated:Ge,deactivated:Ge,errorCaptured:Ge,serverPrefetch:Ge,components:ss,directives:ss,watch:sw,provide:kd,inject:nw};function kd(t,e){return e?t?function(){return ce(K(t)?t.call(this,this):t,K(e)?e.call(this,this):e)}:e:t}function nw(t,e){return ss(sc(t),sc(e))}function sc(t){if($(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ge(t,e){return t?[...new Set([].concat(t,e))]:e}function ss(t,e){return t?ce(ce(Object.create(null),t),e):e}function sw(t,e){if(!t)return e;if(!e)return t;const n=ce(Object.create(null),t);for(const s in e)n[s]=Ge(t[s],e[s]);return n}function iw(t,e,n,s=!1){const i={},r={};oo(r,Do,1),t.propsDefaults=Object.create(null),Rd(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:nd(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function rw(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=ne(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];const d=e[f];if(l)if(re(r,f))d!==r[f]&&(r[f]=d,c=!0);else{const p=$e(f);i[p]=ic(l,a,p,d,t,!1)}else d!==r[f]&&(r[f]=d,c=!0)}}}else{Rd(t,e,i,r)&&(c=!0);let u;for(const h in a)(!e||!re(e,h)&&((u=Nt(h))===h||!re(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=ic(l,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!re(e,h))&&(delete r[h],c=!0)}c&&sn(t,"set","$attrs")}function Rd(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Yn(l))continue;const c=e[l];let u;i&&re(i,u=$e(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:jl(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=ne(n),c=a||le;for(let u=0;u<r.length;u++){const h=r[u];n[h]=ic(i,l,h,c[h],t,!re(c,h))}}return o}function ic(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=re(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&K(l)){const{propsDefaults:c}=i;n in c?s=c[n]:(Pn(i),s=c[n]=l.call(null,e),On())}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===Nt(n))&&(s=!0))}return s}function Ad(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!K(t)){const u=h=>{l=!0;const[f,d]=Ad(h,e,!0);ce(o,f),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return s.set(t,Ws),Ws;if($(r))for(let u=0;u<r.length;u++){const h=$e(r[u]);Nd(h)&&(o[h]=le)}else if(r)for(const u in r){const h=$e(u);if(Nd(h)){const f=r[u],d=o[h]=$(f)||K(f)?{type:f}:f;if(d){const p=Md(Boolean,d.type),v=Md(String,d.type);d[0]=p>-1,d[1]=v<0||p<v,(p>-1||re(d,"default"))&&a.push(h)}}}const c=[o,a];return s.set(t,c),c}function Nd(t){return t[0]!=="$"}function Pd(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Od(t,e){return Pd(t)===Pd(e)}function Md(t,e){return $(e)?e.findIndex(n=>Od(n,t)):K(e)&&Od(e,t)?0:-1}const xd=t=>t[0]==="_"||t==="$stable",rc=t=>$(t)?t.map(ut):[ut(t)],ow=(t,e,n)=>{const s=zl((...i)=>rc(e(...i)),n);return s._c=!1,s},Dd=(t,e,n)=>{const s=t._ctx;for(const i in t){if(xd(i))continue;const r=t[i];if(K(r))e[i]=ow(i,r,s);else if(r!=null){const o=rc(r);e[i]=()=>o}}},Ld=(t,e)=>{const n=rc(e);t.slots.default=()=>n},aw=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ne(e),oo(e,"_",n)):Dd(e,t.slots={})}else t.slots={},e&&Ld(t,e);oo(t.slots,Do,1)},lw=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=le;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(ce(i,e),!n&&a===1&&delete i._):(r=!e.$stable,Dd(e,i)),o=e}else e&&(Ld(t,e),o={default:1});if(r)for(const a in i)!xd(a)&&!(a in o)&&delete i[a]};function cw(t,e){const n=ct;if(n===null)return t;const s=n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=le]=e[r];K(o)&&(o={mounted:o,updated:o}),o.deep&&as(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c})}return t}function Wt(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(es(),ht(l,n,8,[t.el,a,t,e]),Tn())}}function Fd(){return{app:null,config:{isNativeTag:so,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let uw=0;function hw(t,e){return function(s,i=null){i!=null&&!Te(i)&&(i=null);const r=Fd(),o=new Set;let a=!1;const l=r.app={_uid:uw++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:mp,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&K(c.install)?(o.add(c),c.install(l,...u)):K(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const f=we(s,i);return f.appContext=r,u&&e?e(f,c):t(f,c,h),a=!0,l._container=c,c.__vue_app__=l,wc(f.component)||f.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l}};return l}}function Po(t,e,n,s,i=!1){if($(t)){t.forEach((f,d)=>Po(f,e&&($(e)?e[d]:e),n,s,i));return}if(Wi(s)&&!i)return;const r=s.shapeFlag&4?wc(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===le?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Y(c)?(u[c]=null,re(h,c)&&(h[c]=null)):xe(c)&&(c.value=null)),K(l))jt(l,a,12,[o,u]);else{const f=Y(l),d=xe(l);if(f||d){const p=()=>{if(t.f){const v=f?u[l]:l.value;i?$(v)&&Rl(v,r):$(v)?v.includes(r)||v.push(r):f?u[l]=[r]:(l.value=[r],t.k&&(u[t.k]=l.value))}else f?(u[l]=o,re(h,l)&&(h[l]=o)):xe(l)&&(l.value=o,t.k&&(u[t.k]=o))};o?(p.id=-1,Be(p,n)):p()}}}let Sn=!1;const Oo=t=>/svg/.test(t.namespaceURI)&&t.tagName!=="foreignObject",oc=t=>t.nodeType===8;function fw(t){const{mt:e,p:n,o:{patchProp:s,nextSibling:i,parentNode:r,remove:o,insert:a,createComment:l}}=t,c=(m,y)=>{if(!y.hasChildNodes()){n(null,m,y),$o();return}Sn=!1,u(y.firstChild,m,null,null,null),$o(),Sn&&console.error("Hydration completed but contains mismatches.")},u=(m,y,g,_,w,T=!1)=>{const I=oc(m)&&m.data==="[",E=()=>p(m,y,g,_,w,I),{type:C,ref:k,shapeFlag:R}=y,P=m.nodeType;y.el=m;let N=null;switch(C){case Js:P!==3?N=E():(m.data!==y.children&&(Sn=!0,m.data=y.children),N=i(m));break;case Qe:P!==8||I?N=E():N=i(m);break;case rs:if(P!==1)N=E();else{N=m;const B=!y.children.length;for(let J=0;J<y.staticCount;J++)B&&(y.children+=N.outerHTML),J===y.staticCount-1&&(y.anchor=N),N=i(N);return N}break;case He:I?N=d(m,y,g,_,w,T):N=E();break;default:if(R&1)P!==1||y.type.toLowerCase()!==m.tagName.toLowerCase()?N=E():N=h(m,y,g,_,w,T);else if(R&6){y.slotScopeIds=w;const B=r(m);if(e(y,B,null,g,_,Oo(B),T),N=I?v(m):i(m),Wi(y)){let J;I?(J=we(He),J.anchor=N?N.previousSibling:B.lastChild):J=m.nodeType===3?pc(""):we("div"),J.el=m,y.component.subTree=J}}else R&64?P!==8?N=E():N=y.type.hydrate(m,y,g,_,w,T,t,f):R&128&&(N=y.type.hydrate(m,y,g,_,Oo(r(m)),w,T,t,u))}return k!=null&&Po(k,null,_,y),N},h=(m,y,g,_,w,T)=>{T=T||!!y.dynamicChildren;const{type:I,props:E,patchFlag:C,shapeFlag:k,dirs:R}=y,P=I==="input"&&R||I==="option";if(P||C!==-1){if(R&&Wt(y,null,g,"created"),E)if(P||!T||C&(16|32))for(const B in E)(P&&B.endsWith("value")||Gn(B)&&!Yn(B))&&s(m,B,null,E[B],!1,void 0,g);else E.onClick&&s(m,"onClick",null,E.onClick,!1,void 0,g);let N;if((N=E&&E.onVnodeBeforeMount)&&Ze(N,g,y),R&&Wt(y,null,g,"beforeMount"),((N=E&&E.onVnodeMounted)||R)&&hd(()=>{N&&Ze(N,g,y),R&&Wt(y,null,g,"mounted")},_),k&16&&!(E&&(E.innerHTML||E.textContent))){let B=f(m.firstChild,y,m,g,_,w,T);for(;B;){Sn=!0;const J=B;B=B.nextSibling,o(J)}}else k&8&&m.textContent!==y.children&&(Sn=!0,m.textContent=y.children)}return m.nextSibling},f=(m,y,g,_,w,T,I)=>{I=I||!!y.dynamicChildren;const E=y.children,C=E.length;for(let k=0;k<C;k++){const R=I?E[k]:E[k]=ut(E[k]);if(m)m=u(m,R,_,w,T,I);else{if(R.type===Js&&!R.children)continue;Sn=!0,n(null,R,g,null,_,w,Oo(g),T)}}return m},d=(m,y,g,_,w,T)=>{const{slotScopeIds:I}=y;I&&(w=w?w.concat(I):I);const E=r(m),C=f(i(m),y,E,g,_,w,T);return C&&oc(C)&&C.data==="]"?i(y.anchor=C):(Sn=!0,a(y.anchor=l("]"),E,C),C)},p=(m,y,g,_,w,T)=>{if(Sn=!0,y.el=null,T){const C=v(m);for(;;){const k=i(m);if(k&&k!==C)o(k);else break}}const I=i(m),E=r(m);return o(m),n(null,y,E,I,g,_,Oo(E),w),I},v=m=>{let y=0;for(;m;)if(m=i(m),m&&oc(m)&&(m.data==="["&&y++,m.data==="]")){if(y===0)return i(m);y--}return m};return[c,u]}const Be=hd;function Ud(t){return Hd(t)}function Bd(t){return Hd(t,fw)}function Hd(t,e){const n=qv();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=Ke,cloneNode:p,insertStaticContent:v}=t,m=(b,S,A,M=null,O=null,F=null,H=!1,L=null,U=!!S.dynamicChildren)=>{if(b===S)return;b&&!qt(b,S)&&(M=to(b),Xe(b,O,F,!0),b=null),S.patchFlag===-2&&(U=!1,S.dynamicChildren=null);const{type:x,ref:q,shapeFlag:W}=S;switch(x){case Js:y(b,S,A,M);break;case Qe:g(b,S,A,M);break;case rs:b==null&&_(S,A,M,H);break;case He:B(b,S,A,M,O,F,H,L,U);break;default:W&1?I(b,S,A,M,O,F,H,L,U):W&6?J(b,S,A,M,O,F,H,L,U):(W&64||W&128)&&x.process(b,S,A,M,O,F,H,L,U,Hs)}q!=null&&O&&Po(q,b&&b.ref,F,S||b,!S)},y=(b,S,A,M)=>{if(b==null)s(S.el=a(S.children),A,M);else{const O=S.el=b.el;S.children!==b.children&&c(O,S.children)}},g=(b,S,A,M)=>{b==null?s(S.el=l(S.children||""),A,M):S.el=b.el},_=(b,S,A,M)=>{[b.el,b.anchor]=v(b.children,S,A,M)},w=({el:b,anchor:S},A,M)=>{let O;for(;b&&b!==S;)O=f(b),s(b,A,M),b=O;s(S,A,M)},T=({el:b,anchor:S})=>{let A;for(;b&&b!==S;)A=f(b),i(b),b=A;i(S)},I=(b,S,A,M,O,F,H,L,U)=>{H=H||S.type==="svg",b==null?E(S,A,M,O,F,H,L,U):R(b,S,O,F,H,L,U)},E=(b,S,A,M,O,F,H,L)=>{let U,x;const{type:q,props:W,shapeFlag:j,transition:G,patchFlag:ie,dirs:Ee}=b;if(b.el&&p!==void 0&&ie===-1)U=b.el=p(b.el);else{if(U=b.el=o(b.type,F,W&&W.is,W),j&8?u(U,b.children):j&16&&k(b.children,U,null,M,O,F&&q!=="foreignObject",H,L),Ee&&Wt(b,null,M,"created"),W){for(const ve in W)ve!=="value"&&!Yn(ve)&&r(U,ve,null,W[ve],F,b.children,M,O,nn);"value"in W&&r(U,"value",null,W.value),(x=W.onVnodeBeforeMount)&&Ze(x,M,b)}C(U,b,b.scopeId,H,M)}Ee&&Wt(b,null,M,"beforeMount");const me=(!O||O&&!O.pendingBranch)&&G&&!G.persisted;me&&G.beforeEnter(U),s(U,S,A),((x=W&&W.onVnodeMounted)||me||Ee)&&Be(()=>{x&&Ze(x,M,b),me&&G.enter(U),Ee&&Wt(b,null,M,"mounted")},O)},C=(b,S,A,M,O)=>{if(A&&d(b,A),M)for(let F=0;F<M.length;F++)d(b,M[F]);if(O){let F=O.subTree;if(S===F){const H=O.vnode;C(b,H,H.scopeId,H.slotScopeIds,O.parent)}}},k=(b,S,A,M,O,F,H,L,U=0)=>{for(let x=U;x<b.length;x++){const q=b[x]=L?An(b[x]):ut(b[x]);m(null,q,S,A,M,O,F,H,L)}},R=(b,S,A,M,O,F,H)=>{const L=S.el=b.el;let{patchFlag:U,dynamicChildren:x,dirs:q}=S;U|=b.patchFlag&16;const W=b.props||le,j=S.props||le;let G;A&&is(A,!1),(G=j.onVnodeBeforeUpdate)&&Ze(G,A,S,b),q&&Wt(S,b,A,"beforeUpdate"),A&&is(A,!0);const ie=O&&S.type!=="foreignObject";if(x?P(b.dynamicChildren,x,L,A,M,ie,F):H||ze(b,S,L,null,A,M,ie,F,!1),U>0){if(U&16)N(L,S,W,j,A,M,O);else if(U&2&&W.class!==j.class&&r(L,"class",null,j.class,O),U&4&&r(L,"style",W.style,j.style,O),U&8){const Ee=S.dynamicProps;for(let me=0;me<Ee.length;me++){const ve=Ee[me],At=W[ve],$s=j[ve];($s!==At||ve==="value")&&r(L,ve,At,$s,O,b.children,A,M,nn)}}U&1&&b.children!==S.children&&u(L,S.children)}else!H&&x==null&&N(L,S,W,j,A,M,O);((G=j.onVnodeUpdated)||q)&&Be(()=>{G&&Ze(G,A,S,b),q&&Wt(S,b,A,"updated")},M)},P=(b,S,A,M,O,F,H)=>{for(let L=0;L<S.length;L++){const U=b[L],x=S[L],q=U.el&&(U.type===He||!qt(U,x)||U.shapeFlag&(6|64))?h(U.el):A;m(U,x,q,null,M,O,F,H,!0)}},N=(b,S,A,M,O,F,H)=>{if(A!==M){for(const L in M){if(Yn(L))continue;const U=M[L],x=A[L];U!==x&&L!=="value"&&r(b,L,x,U,H,S.children,O,F,nn)}if(A!==le)for(const L in A)!Yn(L)&&!(L in M)&&r(b,L,A[L],null,H,S.children,O,F,nn);"value"in M&&r(b,"value",A.value,M.value)}},B=(b,S,A,M,O,F,H,L,U)=>{const x=S.el=b?b.el:a(""),q=S.anchor=b?b.anchor:a("");let{patchFlag:W,dynamicChildren:j,slotScopeIds:G}=S;G&&(L=L?L.concat(G):G),b==null?(s(x,A,M),s(q,A,M),k(S.children,A,q,O,F,H,L,U)):W>0&&W&64&&j&&b.dynamicChildren?(P(b.dynamicChildren,j,A,O,F,H,L),(S.key!=null||O&&S===O.subTree)&&ac(b,S,!0)):ze(b,S,A,q,O,F,H,L,U)},J=(b,S,A,M,O,F,H,L,U)=>{S.slotScopeIds=L,b==null?S.shapeFlag&512?O.ctx.activate(S,A,M,H,U):rt(S,A,M,O,F,H,U):Se(b,S,U)},rt=(b,S,A,M,O,F,H)=>{const L=b.component=Yd(b,M,O);if(Vi(b)&&(L.ctx.renderer=Hs),Xd(L),L.asyncDep){if(O&&O.registerDep(L,se),!b.el){const U=L.subTree=we(Qe);g(null,U,S,A)}return}se(L,b,S,A,O,F,H)},Se=(b,S,A)=>{const M=S.component=b.component;if(H1(b,S,A))if(M.asyncDep&&!M.asyncResolved){ae(M,S,A);return}else M.next=S,zw(M.update),M.update();else S.component=b.component,S.el=b.el,M.vnode=S},se=(b,S,A,M,O,F,H)=>{const L=()=>{if(b.isMounted){let{next:q,bu:W,u:j,parent:G,vnode:ie}=b,Ee=q,me;is(b,!1),q?(q.el=ie.el,ae(b,q,H)):q=ie,W&&zs(W),(me=q.props&&q.props.onVnodeBeforeUpdate)&&Ze(me,G,q,ie),is(b,!0);const ve=To(b),At=b.subTree;b.subTree=ve,m(At,ve,h(At.el),to(At),b,O,F),q.el=ve.el,Ee===null&&Kl(b,ve.el),j&&Be(j,O),(me=q.props&&q.props.onVnodeUpdated)&&Be(()=>Ze(me,G,q,ie),O)}else{let q;const{el:W,props:j}=S,{bm:G,m:ie,parent:Ee}=b,me=Wi(S);if(is(b,!1),G&&zs(G),!me&&(q=j&&j.onVnodeBeforeMount)&&Ze(q,Ee,S),is(b,!0),W&&Sl){const ve=()=>{b.subTree=To(b),Sl(W,b.subTree,b,O,null)};me?S.type.__asyncLoader().then(()=>!b.isUnmounted&&ve()):ve()}else{const ve=b.subTree=To(b);m(null,ve,A,M,b,O,F),S.el=ve.el}if(ie&&Be(ie,O),!me&&(q=j&&j.onVnodeMounted)){const ve=S;Be(()=>Ze(q,Ee,ve),O)}S.shapeFlag&256&&b.a&&Be(b.a,O),b.isMounted=!0,S=A=M=null}},U=b.effect=new Fi(L,()=>Cc(b.update),b.scope),x=b.update=U.run.bind(U);x.id=b.uid,is(b,!0),x()},ae=(b,S,A)=>{S.component=b;const M=b.vnode.props;b.vnode=S,b.next=null,rw(b,S.props,M,A),lw(b,S.children,A),es(),kc(void 0,b.update),Tn()},ze=(b,S,A,M,O,F,H,L,U=!1)=>{const x=b&&b.children,q=b?b.shapeFlag:0,W=S.children,{patchFlag:j,shapeFlag:G}=S;if(j>0){if(j&128){wn(x,W,A,M,O,F,H,L,U);return}else if(j&256){Bs(x,W,A,M,O,F,H,L,U);return}}G&8?(q&16&&nn(x,O,F),W!==x&&u(A,W)):q&16?G&16?wn(x,W,A,M,O,F,H,L,U):nn(x,O,F,!0):(q&8&&u(A,""),G&16&&k(W,A,M,O,F,H,L,U))},Bs=(b,S,A,M,O,F,H,L,U)=>{b=b||Ws,S=S||Ws;const x=b.length,q=S.length,W=Math.min(x,q);let j;for(j=0;j<W;j++){const G=S[j]=U?An(S[j]):ut(S[j]);m(b[j],G,A,null,O,F,H,L,U)}x>q?nn(b,O,F,!0,!1,W):k(S,A,M,O,F,H,L,U,W)},wn=(b,S,A,M,O,F,H,L,U)=>{let x=0;const q=S.length;let W=b.length-1,j=q-1;for(;x<=W&&x<=j;){const G=b[x],ie=S[x]=U?An(S[x]):ut(S[x]);if(qt(G,ie))m(G,ie,A,null,O,F,H,L,U);else break;x++}for(;x<=W&&x<=j;){const G=b[W],ie=S[j]=U?An(S[j]):ut(S[j]);if(qt(G,ie))m(G,ie,A,null,O,F,H,L,U);else break;W--,j--}if(x>W){if(x<=j){const G=j+1,ie=G<q?S[G].el:M;for(;x<=j;)m(null,S[x]=U?An(S[x]):ut(S[x]),A,ie,O,F,H,L,U),x++}}else if(x>j)for(;x<=W;)Xe(b[x],O,F,!0),x++;else{const G=x,ie=x,Ee=new Map;for(x=ie;x<=j;x++){const ot=S[x]=U?An(S[x]):ut(S[x]);ot.key!=null&&Ee.set(ot.key,x)}let me,ve=0;const At=j-ie+1;let $s=!1,kf=0;const Pi=new Array(At);for(x=0;x<At;x++)Pi[x]=0;for(x=G;x<=W;x++){const ot=b[x];if(ve>=At){Xe(ot,O,F,!0);continue}let Ht;if(ot.key!=null)Ht=Ee.get(ot.key);else for(me=ie;me<=j;me++)if(Pi[me-ie]===0&&qt(ot,S[me])){Ht=me;break}Ht===void 0?Xe(ot,O,F,!0):(Pi[Ht-ie]=x+1,Ht>=kf?kf=Ht:$s=!0,m(ot,S[Ht],A,null,O,F,H,L,U),ve++)}const Rf=$s?dw(Pi):Ws;for(me=Rf.length-1,x=At-1;x>=0;x--){const ot=ie+x,Ht=S[ot],Af=ot+1<q?S[ot+1].el:M;Pi[x]===0?m(null,Ht,A,Af,O,F,H,L,U):$s&&(me<0||x!==Rf[me]?tn(Ht,A,Af,2):me--)}}},tn=(b,S,A,M,O=null)=>{const{el:F,type:H,transition:L,children:U,shapeFlag:x}=b;if(x&6){tn(b.component.subTree,S,A,M);return}if(x&128){b.suspense.move(S,A,M);return}if(x&64){H.move(b,S,A,Hs);return}if(H===He){s(F,S,A);for(let W=0;W<U.length;W++)tn(U[W],S,A,M);s(b.anchor,S,A);return}if(H===rs){w(b,S,A);return}if(M!==2&&x&1&&L)if(M===0)L.beforeEnter(F),s(F,S,A),Be(()=>L.enter(F),O);else{const{leave:W,delayLeave:j,afterLeave:G}=L,ie=()=>s(F,S,A),Ee=()=>{W(F,()=>{ie(),G&&G()})};j?j(F,ie,Ee):Ee()}else s(F,S,A)},Xe=(b,S,A,M=!1,O=!1)=>{const{type:F,props:H,ref:L,children:U,dynamicChildren:x,shapeFlag:q,patchFlag:W,dirs:j}=b;if(L!=null&&Po(L,null,A,b,!0),q&256){S.ctx.deactivate(b);return}const G=q&1&&j,ie=!Wi(b);let Ee;if(ie&&(Ee=H&&H.onVnodeBeforeUnmount)&&Ze(Ee,S,b),q&6)Tl(b.component,A,M);else{if(q&128){b.suspense.unmount(A,M);return}G&&Wt(b,null,S,"beforeUnmount"),q&64?b.type.remove(b,S,A,O,Hs,M):x&&(F!==He||W>0&&W&64)?nn(x,S,A,!1,!0):(F===He&&W&(128|256)||!O&&q&16)&&nn(U,S,A),M&&Ai(b)}(ie&&(Ee=H&&H.onVnodeUnmounted)||G)&&Be(()=>{Ee&&Ze(Ee,S,b),G&&Wt(b,null,S,"unmounted")},A)},Ai=b=>{const{type:S,el:A,anchor:M,transition:O}=b;if(S===He){Ni(A,M);return}if(S===rs){T(b);return}const F=()=>{i(A),O&&!O.persisted&&O.afterLeave&&O.afterLeave()};if(b.shapeFlag&1&&O&&!O.persisted){const{leave:H,delayLeave:L}=O,U=()=>H(A,F);L?L(b.el,F,U):U()}else F()},Ni=(b,S)=>{let A;for(;b!==S;)A=f(b),i(b),b=A;i(S)},Tl=(b,S,A)=>{const{bum:M,scope:O,update:F,subTree:H,um:L}=b;M&&zs(M),O.stop(),F&&(F.active=!1,Xe(H,b,S,A)),L&&Be(L,S),Be(()=>{b.isUnmounted=!0},S),S&&S.pendingBranch&&!S.isUnmounted&&b.asyncDep&&!b.asyncResolved&&b.suspenseId===S.pendingId&&(S.deps--,S.deps===0&&S.resolve())},nn=(b,S,A,M=!1,O=!1,F=0)=>{for(let H=F;H<b.length;H++)Xe(b[H],S,A,M,O)},to=b=>b.shapeFlag&6?to(b.component.subTree):b.shapeFlag&128?b.suspense.next():f(b.anchor||b.el),Sf=(b,S,A)=>{b==null?S._vnode&&Xe(S._vnode,null,null,!0):m(S._vnode||null,b,S,null,null,null,A),$o(),S._vnode=b},Hs={p:m,um:Xe,m:tn,r:Ai,mt:rt,mc:k,pc:ze,pbc:P,n:to,o:t};let Cl,Sl;return e&&([Cl,Sl]=e(Hs)),{render:Sf,hydrate:Cl,createApp:hw(Sf,Cl)}}function is({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function ac(t,e,n=!1){const s=t.children,i=e.children;if($(s)&&$(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=An(i[r]),a.el=o.el),n||ac(o,a))}}function dw(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const pw=t=>t.__isTeleport,zi=t=>t&&(t.disabled||t.disabled===""),$d=t=>typeof SVGElement!="undefined"&&t instanceof SVGElement,lc=(t,e)=>{const n=t&&t.to;return Y(n)?e?e(n):null:n},gw={__isTeleport:!0,process(t,e,n,s,i,r,o,a,l,c){const{mc:u,pc:h,pbc:f,o:{insert:d,querySelector:p,createText:v,createComment:m}}=c,y=zi(e.props);let{shapeFlag:g,children:_,dynamicChildren:w}=e;if(t==null){const T=e.el=v(""),I=e.anchor=v("");d(T,n,s),d(I,n,s);const E=e.target=lc(e.props,p),C=e.targetAnchor=v("");E&&(d(C,E),o=o||$d(E));const k=(R,P)=>{g&16&&u(_,R,P,i,r,o,a,l)};y?k(n,I):E&&k(E,C)}else{e.el=t.el;const T=e.anchor=t.anchor,I=e.target=t.target,E=e.targetAnchor=t.targetAnchor,C=zi(t.props),k=C?n:I,R=C?T:E;if(o=o||$d(I),w?(f(t.dynamicChildren,w,k,i,r,o,a),ac(t,e,!0)):l||h(t,e,k,R,i,r,o,a,!1),y)C||Mo(e,n,T,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const P=e.target=lc(e.props,p);P&&Mo(e,P,null,c,0)}else C&&Mo(e,I,E,c,1)}},remove(t,e,n,s,{um:i,o:{remove:r}},o){const{shapeFlag:a,children:l,anchor:c,targetAnchor:u,target:h,props:f}=t;if(h&&r(u),(o||!zi(f))&&(r(c),a&16))for(let d=0;d<l.length;d++){const p=l[d];i(p,e,n,!0,!!p.dynamicChildren)}},move:Mo,hydrate:mw};function Mo(t,e,n,{o:{insert:s},m:i},r=2){r===0&&s(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=t,h=r===2;if(h&&s(o,e,n),(!h||zi(u))&&l&16)for(let f=0;f<c.length;f++)i(c[f],e,n,2);h&&s(a,e,n)}function mw(t,e,n,s,i,r,{o:{nextSibling:o,parentNode:a,querySelector:l}},c){const u=e.target=lc(e.props,l);if(u){const h=u._lpa||u.firstChild;e.shapeFlag&16&&(zi(e.props)?(e.anchor=c(o(t),e,a(t),n,s,i,r),e.targetAnchor=h):(e.anchor=o(t),e.targetAnchor=c(h,e,u,n,s,i,r)),u._lpa=e.targetAnchor&&o(e.targetAnchor))}return e.anchor&&o(e.anchor)}const _w=gw,cc="components",yw="directives";function vw(t,e){return uc(cc,t,!0,e)||t}const Wd=Symbol();function ww(t){return Y(t)?uc(cc,t,!1)||t:t||Wd}function bw(t){return uc(yw,t)}function uc(t,e,n=!0,s=!1){const i=ct||Ne;if(i){const r=i.type;if(t===cc){const a=Bo(r);if(a&&(a===e||a===$e(e)||a===Jn($e(e))))return r}const o=Vd(i[t]||r[t],e)||Vd(i.appContext[t],e);return!o&&s?r:o}}function Vd(t,e){return t&&(t[e]||t[$e(e)]||t[Jn($e(e))])}const He=Symbol(void 0),Js=Symbol(void 0),Qe=Symbol(void 0),rs=Symbol(void 0),Ki=[];let Vt=null;function xo(t=!1){Ki.push(Vt=t?null:[])}function qd(){Ki.pop(),Vt=Ki[Ki.length-1]||null}let Xs=1;function hc(t){Xs+=t}function jd(t){return t.dynamicChildren=Xs>0?Vt||Ws:null,qd(),Xs>0&&Vt&&Vt.push(t),t}function Ew(t,e,n,s,i,r){return jd(dc(t,e,n,s,i,r,!0))}function fc(t,e,n,s,i){return jd(we(t,e,n,s,i,!0))}function kn(t){return t?t.__v_isVNode===!0:!1}function qt(t,e){return t.type===e.type&&t.key===e.key}function Iw(t){}const Do="__vInternal",zd=({key:t})=>t!=null?t:null,Lo=({ref:t,ref_key:e,ref_for:n})=>t!=null?Y(t)||xe(t)||K(t)?{i:ct,r:t,k:e,f:!!n}:t:null;function dc(t,e=null,n=null,s=0,i=null,r=t===He?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&zd(e),ref:e&&Lo(e),scopeId:Io,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null};return a?(gc(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Y(n)?8:16),Xs>0&&!o&&Vt&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Vt.push(l),l}const we=Tw;function Tw(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Wd)&&(t=Qe),kn(t)){const a=Rn(t,e,!0);return n&&gc(a,n),a}if(Bw(t)&&(t=t.__vccOpts),e){e=Kd(e);let{class:a,style:l}=e;a&&!Y(a)&&(e.class=Mi(a)),Te(l)&&(Hl(l)&&!$(l)&&(l=ce({},l)),e.style=Oi(l))}const o=Y(t)?1:$1(t)?128:pw(t)?64:Te(t)?4:K(t)?2:0;return dc(t,e,n,s,i,o,r,!0)}function Kd(t){return t?Hl(t)||Do in t?ce({},t):t:null}function Rn(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?Gd(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&zd(a),ref:e&&e.ref?n&&i?$(i)?i.concat(Lo(e)):[i,Lo(e)]:Lo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==He?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Rn(t.ssContent),ssFallback:t.ssFallback&&Rn(t.ssFallback),el:t.el,anchor:t.anchor}}function pc(t=" ",e=0){return we(Js,null,t,e)}function Cw(t,e){const n=we(rs,null,t);return n.staticCount=e,n}function Sw(t="",e=!1){return e?(xo(),fc(Qe,null,t)):we(Qe,null,t)}function ut(t){return t==null||typeof t=="boolean"?we(Qe):$(t)?we(He,null,t.slice()):typeof t=="object"?An(t):we(Js,null,String(t))}function An(t){return t.el===null||t.memo?t:Rn(t)}function gc(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if($(e))n=16;else if(typeof e=="object")if(s&(1|64)){const i=e.default;i&&(i._c&&(i._d=!1),gc(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Do in e)?e._ctx=ct:i===3&&ct&&(ct.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else K(e)?(e={default:e,_ctx:ct},n=32):(e=String(e),s&64?(n=16,e=[pc(e)]):n=8);t.children=e,t.shapeFlag|=n}function Gd(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Mi([e.class,s.class]));else if(i==="style")e.style=Oi([e.style,s.style]);else if(Gn(i)){const r=e[i],o=s[i];r!==o&&!($(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function Ze(t,e,n,s=null){ht(t,e,7,[n,s])}function kw(t,e,n,s){let i;const r=n&&n[s];if($(t)||Y(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(Te(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}function Rw(t,e){for(let n=0;n<e.length;n++){const s=e[n];if($(s))for(let i=0;i<s.length;i++)t[s[i].name]=s[i].fn;else s&&(t[s.name]=s.fn)}return t}function Aw(t,e,n={},s,i){if(ct.isCE)return we("slot",e==="default"?null:{name:e},s&&s());let r=t[e];r&&r._c&&(r._d=!1),xo();const o=r&&Qd(r(n)),a=fc(He,{key:n.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function Qd(t){return t.some(e=>kn(e)?!(e.type===Qe||e.type===He&&!Qd(e.children)):!0)?t:null}function Nw(t){const e={};for(const n in t)e[js(n)]=t[n];return e}const mc=t=>t?Jd(t)?wc(t)||t.proxy:mc(t.parent):null,Fo=ce(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>mc(t.parent),$root:t=>mc(t.root),$emit:t=>t.emit,$options:t=>Sd(t),$forceUpdate:t=>()=>Cc(t.update),$nextTick:t=>Tc.bind(t.proxy),$watch:t=>Yw.bind(t)}),_c={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(s!==le&&re(s,e))return o[e]=1,s[e];if(i!==le&&re(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&re(c,e))return o[e]=3,r[e];if(n!==le&&re(n,e))return o[e]=4,n[e];nc&&(o[e]=0)}}const u=Fo[e];let h,f;if(u)return e==="$attrs"&&lt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==le&&re(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,re(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;if(i!==le&&re(i,e))i[e]=n;else if(s!==le&&re(s,e))s[e]=n;else if(re(t.props,e))return!1;return e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==le&&re(t,o)||e!==le&&re(e,o)||(a=r[0])&&re(a,o)||re(s,o)||re(Fo,o)||re(i.config.globalProperties,o)}},Pw=ce({},_c,{get(t,e){if(e!==Symbol.unscopables)return _c.get(t,e,t)},has(t,e){return e[0]!=="_"&&!Cv(e)}}),Ow=Fd();let Mw=0;function Yd(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Ow,r={uid:Mw++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Pl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ad(s,i),emitsOptions:ld(s,i),emit:null,emitted:null,propsDefaults:le,inheritAttrs:s.inheritAttrs,ctx:le,data:le,props:le,attrs:le,slots:le,refs:le,setupState:le,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=M1.bind(null,r),t.ce&&t.ce(r),r}let Ne=null;const Nn=()=>Ne||ct,Pn=t=>{Ne=t,t.scope.on()},On=()=>{Ne&&Ne.scope.off(),Ne=null};function Jd(t){return t.vnode.shapeFlag&4}let Gi=!1;function Xd(t,e=!1){Gi=e;const{props:n,children:s}=t.vnode,i=Jd(t);iw(t,n,i,e),aw(t,s);const r=i?xw(t,e):void 0;return Gi=!1,r}function xw(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=$l(new Proxy(t.ctx,_c));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?tp(t):null;Pn(t),es();const r=jt(s,t,0,[t.props,i]);if(Tn(),On(),Al(r)){if(r.then(On,On),e)return r.then(o=>{yc(t,o,e)}).catch(o=>{os(o,t,0)});t.asyncDep=r}else yc(t,r,e)}else ep(t,e)}function yc(t,e,n){K(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Te(e)&&(t.setupState=ql(e)),ep(t,n)}let Uo,vc;function Zd(t){Uo=t,vc=e=>{e.render._rc&&(e.withProxy=new Proxy(e.ctx,Pw))}}const Dw=()=>!Uo;function ep(t,e,n){const s=t.type;if(!t.render){if(!e&&Uo&&!s.render){const i=s.template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=ce(ce({isCustomElement:r,delimiters:a},o),l);s.render=Uo(i,c)}}t.render=s.render||Ke,vc&&vc(t)}Pn(t),es(),Z1(t),Tn(),On()}function Lw(t){return new Proxy(t.attrs,{get(e,n){return lt(t,"get","$attrs"),e[n]}})}function tp(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=Lw(t))},slots:t.slots,emit:t.emit,expose:e}}function wc(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(ql($l(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Fo)return Fo[n](t)}}))}const Fw=/(?:^|[-_])(\w)/g,Uw=t=>t.replace(Fw,e=>e.toUpperCase()).replace(/[-_]/g,"");function Bo(t){return K(t)&&t.displayName||t.name}function np(t,e,n=!1){let s=Bo(e);if(!s&&e.__file){const i=e.__file.match(/([^/\\]+)\.\w+$/);i&&(s=i[1])}if(!s&&t&&t.parent){const i=r=>{for(const o in r)if(r[o]===e)return o};s=i(t.components||t.parent.type.components)||i(t.appContext.components)}return s?Uw(s):n?"App":"Anonymous"}function Bw(t){return K(t)&&"__vccOpts"in t}const Qi=[];function sp(t,...e){es();const n=Qi.length?Qi[Qi.length-1].component:null,s=n&&n.appContext.config.warnHandler,i=Hw();if(s)jt(s,n,11,[t+e.join(""),n&&n.proxy,i.map(({vnode:r})=>`at <${np(n,r.type)}>`).join(`
`),i]);else{const r=[`[Vue warn]: ${t}`,...e];i.length&&r.push(`
`,...$w(i)),console.warn(...r)}Tn()}function Hw(){let t=Qi[Qi.length-1];if(!t)return[];const e=[];for(;t;){const n=e[0];n&&n.vnode===t?n.recurseCount++:e.push({vnode:t,recurseCount:0});const s=t.component&&t.component.parent;t=s&&s.vnode}return e}function $w(t){const e=[];return t.forEach((n,s)=>{e.push(...s===0?[]:[`
`],...Ww(n))}),e}function Ww({vnode:t,recurseCount:e}){const n=e>0?`... (${e} recursive calls)`:"",s=t.component?t.component.parent==null:!1,i=` at <${np(t.component,t.type,s)}`,r=">"+n;return t.props?[i,...Vw(t.props),r]:[i+r]}function Vw(t){const e=[],n=Object.keys(t);return n.slice(0,3).forEach(s=>{e.push(...ip(s,t[s]))}),n.length>3&&e.push(" ..."),e}function ip(t,e,n){return Y(e)?(e=JSON.stringify(e),n?e:[`${t}=${e}`]):typeof e=="number"||typeof e=="boolean"||e==null?n?e:[`${t}=${e}`]:xe(e)?(e=ip(t,ne(e.value),!0),n?e:[`${t}=Ref<`,e,">"]):K(e)?[`${t}=fn${e.name?`<${e.name}>`:""}`]:(e=ne(e),n?e:[`${t}=`,e])}function jt(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){os(r,e,n)}return i}function ht(t,e,n,s){if(K(t)){const r=jt(t,e,n,s);return r&&Al(r)&&r.catch(o=>{os(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(ht(t[r],e,n,s));return i}function os(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){jt(l,null,10,[t,o,a]);return}}qw(t,n,i,s)}function qw(t,e,n,s=!0){console.error(t)}let Ho=!1,bc=!1;const ft=[];let on=0;const Yi=[];let Ji=null,Zs=0;const Xi=[];let Mn=null,ei=0;const rp=Promise.resolve();let Ec=null,Ic=null;function Tc(t){const e=Ec||rp;return t?e.then(this?t.bind(this):t):e}function jw(t){let e=on+1,n=ft.length;for(;e<n;){const s=e+n>>>1;Zi(ft[s])<t?e=s+1:n=s}return e}function Cc(t){(!ft.length||!ft.includes(t,Ho&&t.allowRecurse?on+1:on))&&t!==Ic&&(t.id==null?ft.push(t):ft.splice(jw(t.id),0,t),op())}function op(){!Ho&&!bc&&(bc=!0,Ec=rp.then(lp))}function zw(t){const e=ft.indexOf(t);e>on&&ft.splice(e,1)}function ap(t,e,n,s){$(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?s+1:s))&&n.push(t),op()}function Kw(t){ap(t,Ji,Yi,Zs)}function Sc(t){ap(t,Mn,Xi,ei)}function kc(t,e=null){if(Yi.length){for(Ic=e,Ji=[...new Set(Yi)],Yi.length=0,Zs=0;Zs<Ji.length;Zs++)Ji[Zs]();Ji=null,Zs=0,Ic=null,kc(t,e)}}function $o(t){if(Xi.length){const e=[...new Set(Xi)];if(Xi.length=0,Mn){Mn.push(...e);return}for(Mn=e,Mn.sort((n,s)=>Zi(n)-Zi(s)),ei=0;ei<Mn.length;ei++)Mn[ei]();Mn=null,ei=0}}const Zi=t=>t.id==null?1/0:t.id;function lp(t){bc=!1,Ho=!0,kc(t),ft.sort((n,s)=>Zi(n)-Zi(s));const e=Ke;try{for(on=0;on<ft.length;on++){const n=ft[on];n&&n.active!==!1&&jt(n,null,14)}}finally{on=0,ft.length=0,$o(),Ho=!1,Ec=null,(ft.length||Yi.length||Xi.length)&&lp(t)}}function Gw(t,e){return tr(t,null,e)}function cp(t,e){return tr(t,null,{flush:"post"})}function Qw(t,e){return tr(t,null,{flush:"sync"})}const up={};function er(t,e,n){return tr(t,e,n)}function tr(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=le){const a=Ne;let l,c=!1,u=!1;if(xe(t)?(l=()=>t.value,c=!!t._shallow):ts(t)?(l=()=>t,s=!0):$(t)?(u=!0,c=t.some(ts),l=()=>t.map(y=>{if(xe(y))return y.value;if(ts(y))return as(y);if(K(y))return jt(y,a,2)})):K(t)?e?l=()=>jt(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),ht(t,a,3,[f])}:l=Ke,e&&s){const y=l;l=()=>as(y())}let h,f=y=>{h=m.onStop=()=>{jt(y,a,4)}};if(Gi)return f=Ke,e?n&&ht(e,a,3,[l(),u?[]:void 0,f]):l(),Ke;let d=u?[]:up;const p=()=>{if(!!m.active)if(e){const y=m.run();(s||c||(u?y.some((g,_)=>xi(g,d[_])):xi(y,d)))&&(h&&h(),ht(e,a,3,[y,d===up?void 0:d,f]),d=y)}else m.run()};p.allowRecurse=!!e;let v;i==="sync"?v=p:i==="post"?v=()=>Be(p,a&&a.suspense):v=()=>{!a||a.isMounted?Kw(p):p()};const m=new Fi(l,v);return e?n?p():d=m.run():i==="post"?Be(m.run.bind(m),a&&a.suspense):m.run(),()=>{m.stop(),a&&a.scope&&Rl(a.scope.effects,m)}}function Yw(t,e,n){const s=this.proxy,i=Y(t)?t.includes(".")?hp(s,t):()=>s[t]:t.bind(s,s);let r;K(e)?r=e:(r=e.handler,n=e);const o=Ne;Pn(this);const a=tr(i,r.bind(s),n);return o?Pn(o):On(),a}function hp(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function as(t,e){if(!Te(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),xe(t))as(t.value,e);else if($(t))for(let n=0;n<t.length;n++)as(t[n],e);else if(Qn(t)||Vs(t))t.forEach(n=>{as(n,e)});else if(Df(t))for(const n in t)as(t[n],e);return t}function Jw(){return null}function Xw(){return null}function Zw(t){}function eb(t,e){return null}function tb(){return fp().slots}function nb(){return fp().attrs}function fp(){const t=Nn();return t.setupContext||(t.setupContext=tp(t))}function sb(t,e){const n=$(t)?t.reduce((s,i)=>(s[i]={},s),{}):t;for(const s in e){const i=n[s];i?$(i)||K(i)?n[s]={type:i,default:e[s]}:i.default=e[s]:i===null&&(n[s]={default:e[s]})}return n}function ib(t,e){const n={};for(const s in t)e.includes(s)||Object.defineProperty(n,s,{enumerable:!0,get:()=>t[s]});return n}function rb(t){const e=Nn();let n=t();return On(),Al(n)&&(n=n.catch(s=>{throw Pn(e),s})),[n,()=>Pn(e)]}function dp(t,e,n){const s=arguments.length;return s===2?Te(e)&&!$(e)?kn(e)?we(t,null,[e]):we(t,e):we(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&kn(n)&&(n=[n]),we(t,e,n))}const pp=Symbol(""),ob=()=>{{const t=$i(pp);return t||sp("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),t}};function ab(){}function lb(t,e,n,s){const i=n[s];if(i&&gp(i,t))return i;const r=e();return r.memo=t.slice(),n[s]=r}function gp(t,e){const n=t.memo;if(n.length!=e.length)return!1;for(let s=0;s<n.length;s++)if(n[s]!==e[s])return!1;return Xs>0&&Vt&&Vt.push(t),!0}const mp="3.2.26",cb={createComponentInstance:Yd,setupComponent:Xd,renderComponentRoot:To,setCurrentRenderingInstance:Bi,isVNode:kn,normalizeVNode:ut},ub=cb,hb=null,fb=null,db="http://www.w3.org/2000/svg",ti=typeof document!="undefined"?document:null,_p=new Map,pb={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?ti.createElementNS(db,t):ti.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>ti.createTextNode(t),createComment:t=>ti.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ti.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,s){const i=n?n.previousSibling:e.lastChild;let r=_p.get(t);if(!r){const o=ti.createElement("template");if(o.innerHTML=s?`<svg>${t}</svg>`:t,r=o.content,s){const a=r.firstChild;for(;a.firstChild;)r.appendChild(a.firstChild);r.removeChild(a)}_p.set(t,r)}return e.insertBefore(r.cloneNode(!0),n),[i?i.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function gb(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function mb(t,e,n){const s=t.style,i=Y(n);if(n&&!i){for(const r in n)Rc(s,r,n[r]);if(e&&!Y(e))for(const r in e)n[r]==null&&Rc(s,r,"")}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const yp=/\s*!important$/;function Rc(t,e,n){if($(n))n.forEach(s=>Rc(t,e,s));else if(e.startsWith("--"))t.setProperty(e,n);else{const s=_b(t,e);yp.test(n)?t.setProperty(Nt(s),n.replace(yp,""),"important"):t[s]=n}}const vp=["Webkit","Moz","ms"],Ac={};function _b(t,e){const n=Ac[e];if(n)return n;let s=$e(e);if(s!=="filter"&&s in t)return Ac[e]=s;s=Jn(s);for(let i=0;i<vp.length;i++){const r=vp[i]+s;if(r in t)return Ac[e]=r}return e}const wp="http://www.w3.org/1999/xlink";function yb(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(wp,e.slice(6,e.length)):t.setAttributeNS(wp,e,n);else{const r=kv(e);n==null||r&&!Nf(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function vb(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const a=n==null?"":n;(t.value!==a||t.tagName==="OPTION")&&(t.value=a),n==null&&t.removeAttribute(e);return}if(n===""||n==null){const a=typeof t[e];if(a==="boolean"){t[e]=Nf(n);return}else if(n==null&&a==="string"){t[e]="",t.removeAttribute(e);return}else if(a==="number"){try{t[e]=0}catch{}t.removeAttribute(e);return}}try{t[e]=n}catch{}}let Wo=Date.now,bp=!1;if(typeof window!="undefined"){Wo()>document.createEvent("Event").timeStamp&&(Wo=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);bp=!!(t&&Number(t[1])<=53)}let Nc=0;const wb=Promise.resolve(),bb=()=>{Nc=0},Eb=()=>Nc||(wb.then(bb),Nc=Wo());function an(t,e,n,s){t.addEventListener(e,n,s)}function Ib(t,e,n,s){t.removeEventListener(e,n,s)}function Tb(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=Cb(e);if(s){const c=r[e]=Sb(s,i);an(t,a,c,l)}else o&&(Ib(t,a,o,l),r[e]=void 0)}}const Ep=/(?:Once|Passive|Capture)$/;function Cb(t){let e;if(Ep.test(t)){e={};let n;for(;n=t.match(Ep);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Nt(t.slice(2)),e]}function Sb(t,e){const n=s=>{const i=s.timeStamp||Wo();(bp||i>=n.attached-1)&&ht(kb(s,n.value),e,5,[s])};return n.value=t,n.attached=Eb(),n}function kb(t,e){if($(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s(i))}else return e}const Ip=/^on[a-z]/,Rb=(t,e,n,s,i=!1,r,o,a,l)=>{e==="class"?gb(t,s,i):e==="style"?mb(t,n,s):Gn(e)?kl(e)||Tb(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ab(t,e,s,i))?vb(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),yb(t,e,s,i))};function Ab(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Ip.test(e)&&K(n)):e==="spellcheck"||e==="draggable"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Ip.test(e)&&Y(n)?!1:e in t}function Tp(t,e){const n=Xl(t);class s extends Vo{constructor(r){super(n,r,e)}}return s.def=n,s}const Nb=t=>Tp(t,Kp),Pb=typeof HTMLElement!="undefined"?HTMLElement:class{};class Vo extends Pb{constructor(e,n={},s){super();this._def=e,this._props=n,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this.shadowRoot&&s?s(this._createVNode(),this.shadowRoot):this.attachShadow({mode:"open"})}connectedCallback(){this._connected=!0,this._instance||this._resolveDef()}disconnectedCallback(){this._connected=!1,Tc(()=>{this._connected||(Lc(null,this.shadowRoot),this._instance=null)})}_resolveDef(){if(this._resolved)return;this._resolved=!0;for(let s=0;s<this.attributes.length;s++)this._setAttr(this.attributes[s].name);new MutationObserver(s=>{for(const i of s)this._setAttr(i.attributeName)}).observe(this,{attributes:!0});const e=s=>{const{props:i,styles:r}=s,o=!$(i),a=i?o?Object.keys(i):i:[];let l;if(o)for(const c in this._props){const u=i[c];(u===Number||u&&u.type===Number)&&(this._props[c]=En(this._props[c]),(l||(l=Object.create(null)))[c]=!0)}this._numberProps=l;for(const c of Object.keys(this))c[0]!=="_"&&this._setProp(c,this[c],!0,!1);for(const c of a.map($e))Object.defineProperty(this,c,{get(){return this._getProp(c)},set(u){this._setProp(c,u)}});this._applyStyles(r),this._update()},n=this._def.__asyncLoader;n?n().then(e):e(this._def)}_setAttr(e){let n=this.getAttribute(e);this._numberProps&&this._numberProps[e]&&(n=En(n)),this._setProp($e(e),n,!1)}_getProp(e){return this._props[e]}_setProp(e,n,s=!0,i=!0){n!==this._props[e]&&(this._props[e]=n,i&&this._instance&&this._update(),s&&(n===!0?this.setAttribute(Nt(e),""):typeof n=="string"||typeof n=="number"?this.setAttribute(Nt(e),n+""):n||this.removeAttribute(Nt(e))))}_update(){Lc(this._createVNode(),this.shadowRoot)}_createVNode(){const e=we(this._def,ce({},this._props));return this._instance||(e.ce=n=>{this._instance=n,n.isCE=!0,n.emit=(i,...r)=>{this.dispatchEvent(new CustomEvent(i,{detail:r}))};let s=this;for(;s=s&&(s.parentNode||s.host);)if(s instanceof Vo){n.parent=s._instance;break}}),e}_applyStyles(e){e&&e.forEach(n=>{const s=document.createElement("style");s.textContent=n,this.shadowRoot.appendChild(s)})}}function Ob(t="$style"){{const e=Nn();if(!e)return le;const n=e.type.__cssModules;if(!n)return le;const s=n[t];return s||le}}function Mb(t){const e=Nn();if(!e)return;const n=()=>Pc(e.subTree,t(e.proxy));cp(n),ji(()=>{const s=new MutationObserver(n);s.observe(e.subTree.el.parentNode,{childList:!0}),Ao(()=>s.disconnect())})}function Pc(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{Pc(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)Cp(t.el,e);else if(t.type===He)t.children.forEach(n=>Pc(n,e));else if(t.type===rs){let{el:n,anchor:s}=t;for(;n&&(Cp(n,e),n!==s);)n=n.nextSibling}}function Cp(t,e){if(t.nodeType===1){const n=t.style;for(const s in e)n.setProperty(`--${s}`,e[s])}}const xn="transition",nr="animation",Oc=(t,{slots:e})=>dp(Yl,Rp(t),e);Oc.displayName="Transition";const Sp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},xb=Oc.props=ce({},Yl.props,Sp),ls=(t,e=[])=>{$(t)?t.forEach(n=>n(...e)):t&&t(...e)},kp=t=>t?$(t)?t.some(e=>e.length>1):t.length>1:!1;function Rp(t){const e={};for(const N in t)N in Sp||(e[N]=t[N]);if(t.css===!1)return e;const{name:n="v",type:s,duration:i,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:d=`${n}-leave-to`}=t,p=Db(i),v=p&&p[0],m=p&&p[1],{onBeforeEnter:y,onEnter:g,onEnterCancelled:_,onLeave:w,onLeaveCancelled:T,onBeforeAppear:I=y,onAppear:E=g,onAppearCancelled:C=_}=e,k=(N,B,J)=>{cs(N,B?u:a),cs(N,B?c:o),J&&J()},R=(N,B)=>{cs(N,d),cs(N,f),B&&B()},P=N=>(B,J)=>{const rt=N?E:g,Se=()=>k(B,N,J);ls(rt,[B,Se]),Ap(()=>{cs(B,N?l:r),ln(B,N?u:a),kp(rt)||Np(B,s,v,Se)})};return ce(e,{onBeforeEnter(N){ls(y,[N]),ln(N,r),ln(N,o)},onBeforeAppear(N){ls(I,[N]),ln(N,l),ln(N,c)},onEnter:P(!1),onAppear:P(!0),onLeave(N,B){const J=()=>R(N,B);ln(N,h),xp(),ln(N,f),Ap(()=>{cs(N,h),ln(N,d),kp(w)||Np(N,s,m,J)}),ls(w,[N,J])},onEnterCancelled(N){k(N,!1),ls(_,[N])},onAppearCancelled(N){k(N,!0),ls(C,[N])},onLeaveCancelled(N){R(N),ls(T,[N])}})}function Db(t){if(t==null)return null;if(Te(t))return[Mc(t.enter),Mc(t.leave)];{const e=Mc(t);return[e,e]}}function Mc(t){return En(t)}function ln(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function cs(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Ap(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Lb=0;function Np(t,e,n,s){const i=t._endId=++Lb,r=()=>{i===t._endId&&s()};if(n)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=Pp(t,e);if(!o)return s();const c=o+"end";let u=0;const h=()=>{t.removeEventListener(c,f),r()},f=d=>{d.target===t&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),t.addEventListener(c,f)}function Pp(t,e){const n=window.getComputedStyle(t),s=p=>(n[p]||"").split(", "),i=s(xn+"Delay"),r=s(xn+"Duration"),o=Op(i,r),a=s(nr+"Delay"),l=s(nr+"Duration"),c=Op(a,l);let u=null,h=0,f=0;e===xn?o>0&&(u=xn,h=o,f=r.length):e===nr?c>0&&(u=nr,h=c,f=l.length):(h=Math.max(o,c),u=h>0?o>c?xn:nr:null,f=u?u===xn?r.length:l.length:0);const d=u===xn&&/\b(transform|all)(,|$)/.test(n[xn+"Property"]);return{type:u,timeout:h,propCount:f,hasTransform:d}}function Op(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>Mp(n)+Mp(t[s])))}function Mp(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function xp(){return document.body.offsetHeight}const Dp=new WeakMap,Lp=new WeakMap,Fb={name:"TransitionGroup",props:ce({},xb,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Nn(),s=Ql();let i,r;return ko(()=>{if(!i.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!Wb(i[0].el,n.vnode.el,o))return;i.forEach(Bb),i.forEach(Hb);const a=i.filter($b);xp(),a.forEach(l=>{const c=l.el,u=c.style;ln(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const h=c._moveCb=f=>{f&&f.target!==c||(!f||/transform$/.test(f.propertyName))&&(c.removeEventListener("transitionend",h),c._moveCb=null,cs(c,o))};c.addEventListener("transitionend",h)})}),()=>{const o=ne(t),a=Rp(o);let l=o.tag||He;i=r,r=e.default?Co(e.default()):[];for(let c=0;c<r.length;c++){const u=r[c];u.key!=null&&ns(u,Ys(u,a,s,n))}if(i)for(let c=0;c<i.length;c++){const u=i[c];ns(u,Ys(u,a,s,n)),Dp.set(u,u.el.getBoundingClientRect())}return we(l,null,r)}}},Ub=Fb;function Bb(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function Hb(t){Lp.set(t,t.el.getBoundingClientRect())}function $b(t){const e=Dp.get(t),n=Lp.get(t),s=e.left-n.left,i=e.top-n.top;if(s||i){const r=t.el.style;return r.transform=r.webkitTransform=`translate(${s}px,${i}px)`,r.transitionDuration="0s",t}}function Wb(t,e,n){const s=t.cloneNode();t._vtc&&t._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&s.classList.remove(a))}),n.split(/\s+/).forEach(o=>o&&s.classList.add(o)),s.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(s);const{hasTransform:r}=Pp(s);return i.removeChild(s),r}const Dn=t=>{const e=t.props["onUpdate:modelValue"];return $(e)?n=>zs(e,n):e};function Vb(t){t.target.composing=!0}function Fp(t){const e=t.target;e.composing&&(e.composing=!1,qb(e,"input"))}function qb(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const qo={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=Dn(i);const r=s||i.props&&i.props.type==="number";an(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n?a=a.trim():r&&(a=En(a)),t._assign(a)}),n&&an(t,"change",()=>{t.value=t.value.trim()}),e||(an(t,"compositionstart",Vb),an(t,"compositionend",Fp),an(t,"change",Fp))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=Dn(r),t.composing||document.activeElement===t&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&En(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},xc={deep:!0,created(t,e,n){t._assign=Dn(n),an(t,"change",()=>{const s=t._modelValue,i=ni(t),r=t.checked,o=t._assign;if($(s)){const a=no(s,i),l=a!==-1;if(r&&!l)o(s.concat(i));else if(!r&&l){const c=[...s];c.splice(a,1),o(c)}}else if(Qn(s)){const a=new Set(s);r?a.add(i):a.delete(i),o(a)}else o($p(t,r))})},mounted:Up,beforeUpdate(t,e,n){t._assign=Dn(n),Up(t,e,n)}};function Up(t,{value:e,oldValue:n},s){t._modelValue=e,$(e)?t.checked=no(e,s.props.value)>-1:Qn(e)?t.checked=e.has(s.props.value):e!==n&&(t.checked=bn(e,$p(t,!0)))}const Dc={created(t,{value:e},n){t.checked=bn(e,n.props.value),t._assign=Dn(n),an(t,"change",()=>{t._assign(ni(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t._assign=Dn(s),e!==n&&(t.checked=bn(e,s.props.value))}},Bp={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const i=Qn(e);an(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?En(ni(o)):ni(o));t._assign(t.multiple?i?new Set(r):r:r[0])}),t._assign=Dn(s)},mounted(t,{value:e}){Hp(t,e)},beforeUpdate(t,e,n){t._assign=Dn(n)},updated(t,{value:e}){Hp(t,e)}};function Hp(t,e){const n=t.multiple;if(!(n&&!$(e)&&!Qn(e))){for(let s=0,i=t.options.length;s<i;s++){const r=t.options[s],o=ni(r);if(n)$(e)?r.selected=no(e,o)>-1:r.selected=e.has(o);else if(bn(ni(r),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function ni(t){return"_value"in t?t._value:t.value}function $p(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const jb={created(t,e,n){jo(t,e,n,null,"created")},mounted(t,e,n){jo(t,e,n,null,"mounted")},beforeUpdate(t,e,n,s){jo(t,e,n,s,"beforeUpdate")},updated(t,e,n,s){jo(t,e,n,s,"updated")}};function jo(t,e,n,s,i){let r;switch(t.tagName){case"SELECT":r=Bp;break;case"TEXTAREA":r=qo;break;default:switch(n.props&&n.props.type){case"checkbox":r=xc;break;case"radio":r=Dc;break;default:r=qo}}const o=r[i];o&&o(t,e,n,s)}function zb(){qo.getSSRProps=({value:t})=>({value:t}),Dc.getSSRProps=({value:t},e)=>{if(e.props&&bn(e.props.value,t))return{checked:!0}},xc.getSSRProps=({value:t},e)=>{if($(t)){if(e.props&&no(t,e.props.value)>-1)return{checked:!0}}else if(Qn(t)){if(e.props&&t.has(e.props.value))return{checked:!0}}else if(t)return{checked:!0}}}const Kb=["ctrl","shift","alt","meta"],Gb={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Kb.some(n=>t[`${n}Key`]&&!e.includes(n))},Qb=(t,e)=>(n,...s)=>{for(let i=0;i<e.length;i++){const r=Gb[e[i]];if(r&&r(n,e))return}return t(n,...s)},Yb={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Jb=(t,e)=>n=>{if(!("key"in n))return;const s=Nt(n.key);if(e.some(i=>i===s||Yb[i]===s))return t(n)},Wp={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):sr(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),sr(t,!0),s.enter(t)):s.leave(t,()=>{sr(t,!1)}):sr(t,e))},beforeUnmount(t,{value:e}){sr(t,e)}};function sr(t,e){t.style.display=e?t._vod:"none"}function Xb(){Wp.getSSRProps=({value:t})=>{if(!t)return{style:{display:"none"}}}}const Vp=ce({patchProp:Rb},pb);let ir,qp=!1;function jp(){return ir||(ir=Ud(Vp))}function zp(){return ir=qp?ir:Bd(Vp),qp=!0,ir}const Lc=(...t)=>{jp().render(...t)},Kp=(...t)=>{zp().hydrate(...t)},Gp=(...t)=>{const e=jp().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Qp(s);if(!i)return;const r=e._component;!K(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e},Zb=(...t)=>{const e=zp().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Qp(s);if(i)return n(i,!0,i instanceof SVGElement)},e};function Qp(t){return Y(t)?document.querySelector(t):t}let Yp=!1;const eE=()=>{Yp||(Yp=!0,zb(),Xb())};var tE=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Transition:Oc,TransitionGroup:Ub,VueElement:Vo,createApp:Gp,createSSRApp:Zb,defineCustomElement:Tp,defineSSRCustomElement:Nb,hydrate:Kp,initDirectivesForSSR:eE,render:Lc,useCssModule:Ob,useCssVars:Mb,vModelCheckbox:xc,vModelDynamic:jb,vModelRadio:Dc,vModelSelect:Bp,vModelText:qo,vShow:Wp,withKeys:Jb,withModifiers:Qb,EffectScope:Pl,ReactiveEffect:Fi,computed:od,customRef:A1,effect:Yv,effectScope:jv,getCurrentScope:zv,isProxy:Hl,isReactive:ts,isReadonly:vo,isRef:xe,markRaw:$l,onScopeDispose:Kv,proxyRefs:ql,reactive:_o,readonly:Bl,ref:bo,shallowReactive:nd,shallowReadonly:I1,shallowRef:T1,stop:Jv,toRaw:ne,toRef:rd,toRefs:N1,triggerRef:S1,unref:id,camelize:$e,capitalize:Jn,normalizeClass:Mi,normalizeProps:Nv,normalizeStyle:Oi,toDisplayString:Uv,toHandlerKey:js,BaseTransition:Yl,Comment:Qe,Fragment:He,KeepAlive:J1,Static:rs,Suspense:V1,Teleport:_w,Text:Js,callWithAsyncErrorHandling:ht,callWithErrorHandling:jt,cloneVNode:Rn,compatUtils:fb,createBlock:fc,createCommentVNode:Sw,createElementBlock:Ew,createElementVNode:dc,createHydrationRenderer:Bd,createPropsRestProxy:ib,createRenderer:Ud,createSlots:Rw,createStaticVNode:Cw,createTextVNode:pc,createVNode:we,defineAsyncComponent:Q1,defineComponent:Xl,defineEmits:Xw,defineExpose:Zw,defineProps:Jw,get devtools(){return Gs},getCurrentInstance:Nn,getTransitionRawChildren:Co,guardReactiveProps:Kd,h:dp,handleError:os,initCustomFormatter:ab,inject:$i,isMemoSame:gp,isRuntimeOnly:Dw,isVNode:kn,mergeDefaults:sb,mergeProps:Gd,nextTick:Tc,onActivated:gd,onBeforeMount:yd,onBeforeUnmount:Ro,onBeforeUpdate:vd,onDeactivated:md,onErrorCaptured:Id,onMounted:ji,onRenderTracked:Ed,onRenderTriggered:bd,onServerPrefetch:wd,onUnmounted:Ao,onUpdated:ko,openBlock:xo,popScopeId:D1,provide:fd,pushScopeId:x1,queuePostFlushCb:Sc,registerRuntimeCompiler:Zd,renderList:kw,renderSlot:Aw,resolveComponent:vw,resolveDirective:bw,resolveDynamicComponent:ww,resolveFilter:hb,resolveTransitionHooks:Ys,setBlockTracking:hc,setDevtoolsHook:ad,setTransitionHooks:ns,ssrContextKey:pp,ssrUtils:ub,toHandlers:Nw,transformVNodeArgs:Iw,useAttrs:nb,useSSRContext:ob,useSlots:tb,useTransitionState:Ql,version:mp,warn:sp,watch:er,watchEffect:Gw,watchPostEffect:cp,watchSyncEffect:Qw,withAsyncContext:rb,withCtx:zl,withDefaults:eb,withDirectives:cw,withMemo:lb,withScopeId:L1});function Fc(t){throw t}function Jp(t){}function Ce(t,e,n,s){const i=t,r=new SyntaxError(String(i));return r.code=t,r.loc=e,r}const rr=Symbol(""),or=Symbol(""),Uc=Symbol(""),zo=Symbol(""),Xp=Symbol(""),us=Symbol(""),Zp=Symbol(""),eg=Symbol(""),Bc=Symbol(""),Hc=Symbol(""),ar=Symbol(""),$c=Symbol(""),tg=Symbol(""),Wc=Symbol(""),Ko=Symbol(""),Vc=Symbol(""),qc=Symbol(""),jc=Symbol(""),zc=Symbol(""),ng=Symbol(""),sg=Symbol(""),Go=Symbol(""),Qo=Symbol(""),Kc=Symbol(""),Gc=Symbol(""),lr=Symbol(""),cr=Symbol(""),Qc=Symbol(""),Yc=Symbol(""),nE=Symbol(""),Jc=Symbol(""),Yo=Symbol(""),sE=Symbol(""),iE=Symbol(""),Xc=Symbol(""),rE=Symbol(""),oE=Symbol(""),Zc=Symbol(""),ig=Symbol(""),Ln={[rr]:"Fragment",[or]:"Teleport",[Uc]:"Suspense",[zo]:"KeepAlive",[Xp]:"BaseTransition",[us]:"openBlock",[Zp]:"createBlock",[eg]:"createElementBlock",[Bc]:"createVNode",[Hc]:"createElementVNode",[ar]:"createCommentVNode",[$c]:"createTextVNode",[tg]:"createStaticVNode",[Wc]:"resolveComponent",[Ko]:"resolveDynamicComponent",[Vc]:"resolveDirective",[qc]:"resolveFilter",[jc]:"withDirectives",[zc]:"renderList",[ng]:"renderSlot",[sg]:"createSlots",[Go]:"toDisplayString",[Qo]:"mergeProps",[Kc]:"normalizeClass",[Gc]:"normalizeStyle",[lr]:"normalizeProps",[cr]:"guardReactiveProps",[Qc]:"toHandlers",[Yc]:"camelize",[nE]:"capitalize",[Jc]:"toHandlerKey",[Yo]:"setBlockTracking",[sE]:"pushScopeId",[iE]:"popScopeId",[Xc]:"withCtx",[rE]:"unref",[oE]:"isRef",[Zc]:"withMemo",[ig]:"isMemoSame"};function aE(t){Object.getOwnPropertySymbols(t).forEach(e=>{Ln[e]=t[e]})}const dt={source:"",start:{line:1,column:1,offset:0},end:{line:1,column:1,offset:0}};function lE(t,e=dt){return{type:0,children:t,helpers:[],components:[],directives:[],hoists:[],imports:[],cached:0,temps:0,codegenNode:void 0,loc:e}}function ur(t,e,n,s,i,r,o,a=!1,l=!1,c=!1,u=dt){return t&&(a?(t.helper(us),t.helper(oi(t.inSSR,c))):t.helper(ri(t.inSSR,c)),o&&t.helper(jc)),{type:13,tag:e,props:n,children:s,patchFlag:i,dynamicProps:r,directives:o,isBlock:a,disableTracking:l,isComponent:c,loc:u}}function hr(t,e=dt){return{type:17,loc:e,elements:t}}function vt(t,e=dt){return{type:15,loc:e,properties:t}}function Re(t,e){return{type:16,loc:dt,key:Y(t)?X(t,!0):t,value:e}}function X(t,e=!1,n=dt,s=0){return{type:4,loc:n,content:t,isStatic:e,constType:e?3:s}}function zt(t,e=dt){return{type:8,loc:e,children:t}}function Ae(t,e=[],n=dt){return{type:14,loc:n,callee:t,arguments:e}}function si(t,e=void 0,n=!1,s=!1,i=dt){return{type:18,params:t,returns:e,newline:n,isSlot:s,loc:i}}function eu(t,e,n,s=!0){return{type:19,test:t,consequent:e,alternate:n,newline:s,loc:dt}}function cE(t,e,n=!1){return{type:20,index:t,value:e,isVNode:n,loc:dt}}function uE(t){return{type:21,body:t,loc:dt}}const et=t=>t.type===4&&t.isStatic,ii=(t,e)=>t===e||t===Nt(e);function rg(t){if(ii(t,"Teleport"))return or;if(ii(t,"Suspense"))return Uc;if(ii(t,"KeepAlive"))return zo;if(ii(t,"BaseTransition"))return Xp}const hE=/^\d|[^\$\w]/,tu=t=>!hE.test(t),fE=/[A-Za-z_$\xA0-\uFFFF]/,dE=/[\.\?\w$\xA0-\uFFFF]/,pE=/\s+[.[]\s*|\s*[.[]\s+/g,gE=t=>{t=t.trim().replace(pE,o=>o.trim());let e=0,n=[],s=0,i=0,r=null;for(let o=0;o<t.length;o++){const a=t.charAt(o);switch(e){case 0:if(a==="[")n.push(e),e=1,s++;else if(a==="(")n.push(e),e=2,i++;else if(!(o===0?fE:dE).test(a))return!1;break;case 1:a==="'"||a==='"'||a==="`"?(n.push(e),e=3,r=a):a==="["?s++:a==="]"&&(--s||(e=n.pop()));break;case 2:if(a==="'"||a==='"'||a==="`")n.push(e),e=3,r=a;else if(a==="(")i++;else if(a===")"){if(o===t.length-1)return!1;--i||(e=n.pop())}break;case 3:a===r&&(e=n.pop(),r=null);break}}return!s&&!i},og=gE;function ag(t,e,n){const i={source:t.source.slice(e,e+n),start:Jo(t.start,t.source,e),end:t.end};return n!=null&&(i.end=Jo(t.start,t.source,e+n)),i}function Jo(t,e,n=e.length){return Xo(ce({},t),e,n)}function Xo(t,e,n=e.length){let s=0,i=-1;for(let r=0;r<n;r++)e.charCodeAt(r)===10&&(s++,i=r);return t.offset+=n,t.line+=s,t.column=i===-1?t.column+n:n-i,t}function wt(t,e,n=!1){for(let s=0;s<t.props.length;s++){const i=t.props[s];if(i.type===7&&(n||i.exp)&&(Y(e)?i.name===e:e.test(i.name)))return i}}function Zo(t,e,n=!1,s=!1){for(let i=0;i<t.props.length;i++){const r=t.props[i];if(r.type===6){if(n)continue;if(r.name===e&&(r.value||s))return r}else if(r.name==="bind"&&(r.exp||s)&&hs(r.arg,e))return r}}function hs(t,e){return!!(t&&et(t)&&t.content===e)}function mE(t){return t.props.some(e=>e.type===7&&e.name==="bind"&&(!e.arg||e.arg.type!==4||!e.arg.isStatic))}function nu(t){return t.type===5||t.type===2}function _E(t){return t.type===7&&t.name==="slot"}function ea(t){return t.type===1&&t.tagType===3}function ta(t){return t.type===1&&t.tagType===2}function ri(t,e){return t||e?Bc:Hc}function oi(t,e){return t||e?Zp:eg}const yE=new Set([lr,cr]);function lg(t,e=[]){if(t&&!Y(t)&&t.type===14){const n=t.callee;if(!Y(n)&&yE.has(n))return lg(t.arguments[0],e.concat(t))}return[t,e]}function na(t,e,n){let s,i=t.type===13?t.props:t.arguments[2],r=[],o;if(i&&!Y(i)&&i.type===14){const a=lg(i);i=a[0],r=a[1],o=r[r.length-1]}if(i==null||Y(i))s=vt([e]);else if(i.type===14){const a=i.arguments[0];!Y(a)&&a.type===15?a.properties.unshift(e):i.callee===Qc?s=Ae(n.helper(Qo),[vt([e]),i]):i.arguments.unshift(vt([e])),!s&&(s=i)}else if(i.type===15){let a=!1;if(e.key.type===4){const l=e.key.content;a=i.properties.some(c=>c.key.type===4&&c.key.content===l)}a||i.properties.unshift(e),s=i}else s=Ae(n.helper(Qo),[vt([e]),i]),o&&o.callee===cr&&(o=r[r.length-2]);t.type===13?o?o.arguments[0]=s:t.props=s:o?o.arguments[0]=s:t.arguments[2]=s}function fr(t,e){return`_${e}_${t.replace(/[^\w]/g,(n,s)=>n==="-"?"_":t.charCodeAt(s).toString())}`}function vE(t){return t.type===14&&t.callee===Zc?t.arguments[1].returns:t}function su(t,{helper:e,removeHelper:n,inSSR:s}){t.isBlock||(t.isBlock=!0,n(ri(s,t.isComponent)),e(us),e(oi(s,t.isComponent)))}function cg(t,e){const n=e.options?e.options.compatConfig:e.compatConfig,s=n&&n[t];return t==="MODE"?s||3:s}function fs(t,e){const n=cg("MODE",e),s=cg(t,e);return n===3?s===!0:s!==!1}function dr(t,e,n,...s){return fs(t,e)}const wE=/&(gt|lt|amp|apos|quot);/g,bE={gt:">",lt:"<",amp:"&",apos:"'",quot:'"'},ug={delimiters:["{{","}}"],getNamespace:()=>0,getTextMode:()=>0,isVoidTag:so,isPreTag:so,isCustomElement:so,decodeEntities:t=>t.replace(wE,(e,n)=>bE[n]),onError:Fc,onWarn:Jp,comments:!1};function EE(t,e={}){const n=IE(t,e),s=pt(n);return lE(iu(n,0,[]),bt(n,s))}function IE(t,e){const n=ce({},ug);let s;for(s in e)n[s]=e[s]===void 0?ug[s]:e[s];return{options:n,column:1,line:1,offset:0,originalSource:t,source:t,inPre:!1,inVPre:!1,onWarn:n.onWarn}}function iu(t,e,n){const s=sa(n),i=s?s.ns:0,r=[];for(;!OE(t,e,n);){const a=t.source;let l;if(e===0||e===1){if(!t.inVPre&&We(a,t.options.delimiters[0]))l=NE(t,e);else if(e===0&&a[0]==="<")if(a.length===1)ue(t,5,1);else if(a[1]==="!")We(a,"<!--")?l=CE(t):We(a,"<!DOCTYPE")?l=pr(t):We(a,"<![CDATA[")?i!==0?l=TE(t,n):(ue(t,1),l=pr(t)):(ue(t,11),l=pr(t));else if(a[1]==="/")if(a.length===2)ue(t,5,2);else if(a[2]===">"){ue(t,14,2),Pe(t,3);continue}else if(/[a-z]/i.test(a[2])){ue(t,23),ru(t,1,s);continue}else ue(t,12,2),l=pr(t);else/[a-z]/i.test(a[1])?(l=SE(t,n),fs("COMPILER_NATIVE_TEMPLATE",t)&&l&&l.tag==="template"&&!l.props.some(c=>c.type===7&&fg(c.name))&&(l=l.children)):a[1]==="?"?(ue(t,21,1),l=pr(t)):ue(t,12,1)}if(l||(l=PE(t,e)),$(l))for(let c=0;c<l.length;c++)hg(r,l[c]);else hg(r,l)}let o=!1;if(e!==2&&e!==1){const a=t.options.whitespace!=="preserve";for(let l=0;l<r.length;l++){const c=r[l];if(!t.inPre&&c.type===2)if(/[^\t\r\n\f ]/.test(c.content))a&&(c.content=c.content.replace(/[\t\r\n\f ]+/g," "));else{const u=r[l-1],h=r[l+1];!u||!h||a&&(u.type===3||h.type===3||u.type===1&&h.type===1&&/[\r\n]/.test(c.content))?(o=!0,r[l]=null):c.content=" "}else c.type===3&&!t.options.comments&&(o=!0,r[l]=null)}if(t.inPre&&s&&t.options.isPreTag(s.tag)){const l=r[0];l&&l.type===2&&(l.content=l.content.replace(/^\r?\n/,""))}}return o?r.filter(Boolean):r}function hg(t,e){if(e.type===2){const n=sa(t);if(n&&n.type===2&&n.loc.end.offset===e.loc.start.offset){n.content+=e.content,n.loc.end=e.loc.end,n.loc.source+=e.loc.source;return}}t.push(e)}function TE(t,e){Pe(t,9);const n=iu(t,3,e);return t.source.length===0?ue(t,6):Pe(t,3),n}function CE(t){const e=pt(t);let n;const s=/--(\!)?>/.exec(t.source);if(!s)n=t.source.slice(4),Pe(t,t.source.length),ue(t,7);else{s.index<=3&&ue(t,0),s[1]&&ue(t,10),n=t.source.slice(4,s.index);const i=t.source.slice(0,s.index);let r=1,o=0;for(;(o=i.indexOf("<!--",r))!==-1;)Pe(t,o-r+1),o+4<i.length&&ue(t,16),r=o+1;Pe(t,s.index+s[0].length-r+1)}return{type:3,content:n,loc:bt(t,e)}}function pr(t){const e=pt(t),n=t.source[1]==="?"?1:2;let s;const i=t.source.indexOf(">");return i===-1?(s=t.source.slice(n),Pe(t,t.source.length)):(s=t.source.slice(n,i),Pe(t,i+1)),{type:3,content:s,loc:bt(t,e)}}function SE(t,e){const n=t.inPre,s=t.inVPre,i=sa(e),r=ru(t,0,i),o=t.inPre&&!n,a=t.inVPre&&!s;if(r.isSelfClosing||t.options.isVoidTag(r.tag))return o&&(t.inPre=!1),a&&(t.inVPre=!1),r;e.push(r);const l=t.options.getTextMode(r,i),c=iu(t,l,e);e.pop();{const u=r.props.find(h=>h.type===6&&h.name==="inline-template");if(u&&dr("COMPILER_INLINE_TEMPLATE",t,u.loc)){const h=bt(t,r.loc.end);u.value={type:2,content:h.source,loc:h}}}if(r.children=c,ou(t.source,r.tag))ru(t,1,i);else if(ue(t,24,0,r.loc.start),t.source.length===0&&r.tag.toLowerCase()==="script"){const u=c[0];u&&We(u.loc.source,"<!--")&&ue(t,8)}return r.loc=bt(t,r.loc.start),o&&(t.inPre=!1),a&&(t.inVPre=!1),r}const fg=at("if,else,else-if,for,slot");function ru(t,e,n){const s=pt(t),i=/^<\/?([a-z][^\t\r\n\f />]*)/i.exec(t.source),r=i[1],o=t.options.getNamespace(r,n);Pe(t,i[0].length),mr(t);const a=pt(t),l=t.source;t.options.isPreTag(r)&&(t.inPre=!0);let c=dg(t,e);e===0&&!t.inVPre&&c.some(f=>f.type===7&&f.name==="pre")&&(t.inVPre=!0,ce(t,a),t.source=l,c=dg(t,e).filter(f=>f.name!=="v-pre"));let u=!1;if(t.source.length===0?ue(t,9):(u=We(t.source,"/>"),e===1&&u&&ue(t,4),Pe(t,u?2:1)),e===1)return;let h=0;return t.inVPre||(r==="slot"?h=2:r==="template"?c.some(f=>f.type===7&&fg(f.name))&&(h=3):kE(r,c,t)&&(h=1)),{type:1,ns:o,tag:r,tagType:h,props:c,isSelfClosing:u,children:[],loc:bt(t,s),codegenNode:void 0}}function kE(t,e,n){const s=n.options;if(s.isCustomElement(t))return!1;if(t==="component"||/^[A-Z]/.test(t)||rg(t)||s.isBuiltInComponent&&s.isBuiltInComponent(t)||s.isNativeTag&&!s.isNativeTag(t))return!0;for(let i=0;i<e.length;i++){const r=e[i];if(r.type===6){if(r.name==="is"&&r.value){if(r.value.content.startsWith("vue:"))return!0;if(dr("COMPILER_IS_ON_ELEMENT",n,r.loc))return!0}}else{if(r.name==="is")return!0;if(r.name==="bind"&&hs(r.arg,"is")&&!0&&dr("COMPILER_IS_ON_ELEMENT",n,r.loc))return!0}}}function dg(t,e){const n=[],s=new Set;for(;t.source.length>0&&!We(t.source,">")&&!We(t.source,"/>");){if(We(t.source,"/")){ue(t,22),Pe(t,1),mr(t);continue}e===1&&ue(t,3);const i=RE(t,s);i.type===6&&i.value&&i.name==="class"&&(i.value.content=i.value.content.replace(/\s+/g," ").trim()),e===0&&n.push(i),/^[^\t\r\n\f />]/.test(t.source)&&ue(t,15),mr(t)}return n}function RE(t,e){const n=pt(t),i=/^[^\t\r\n\f />][^\t\r\n\f />=]*/.exec(t.source)[0];e.has(i)&&ue(t,2),e.add(i),i[0]==="="&&ue(t,19);{const a=/["'<]/g;let l;for(;l=a.exec(i);)ue(t,17,l.index)}Pe(t,i.length);let r;/^[\t\r\n\f ]*=/.test(t.source)&&(mr(t),Pe(t,1),mr(t),r=AE(t),r||ue(t,13));const o=bt(t,n);if(!t.inVPre&&/^(v-[A-Za-z0-9-]|:|\.|@|#)/.test(i)){const a=/(?:^v-([a-z0-9-]+))?(?:(?::|^\.|^@|^#)(\[[^\]]+\]|[^\.]+))?(.+)?$/i.exec(i);let l=We(i,"."),c=a[1]||(l||We(i,":")?"bind":We(i,"@")?"on":"slot"),u;if(a[2]){const f=c==="slot",d=i.lastIndexOf(a[2]),p=bt(t,pg(t,n,d),pg(t,n,d+a[2].length+(f&&a[3]||"").length));let v=a[2],m=!0;v.startsWith("[")?(m=!1,v.endsWith("]")?v=v.slice(1,v.length-1):(ue(t,27),v=v.slice(1))):f&&(v+=a[3]||""),u={type:4,content:v,isStatic:m,constType:m?3:0,loc:p}}if(r&&r.isQuoted){const f=r.loc;f.start.offset++,f.start.column++,f.end=Jo(f.start,r.content),f.source=f.source.slice(1,-1)}const h=a[3]?a[3].slice(1).split("."):[];return l&&h.push("prop"),c==="bind"&&u&&h.includes("sync")&&dr("COMPILER_V_BIND_SYNC",t,o,u.loc.source)&&(c="model",h.splice(h.indexOf("sync"),1)),{type:7,name:c,exp:r&&{type:4,content:r.content,isStatic:!1,constType:0,loc:r.loc},arg:u,modifiers:h,loc:o}}return!t.inVPre&&We(i,"v-")&&ue(t,26),{type:6,name:i,value:r&&{type:2,content:r.content,loc:r.loc},loc:o}}function AE(t){const e=pt(t);let n;const s=t.source[0],i=s==='"'||s==="'";if(i){Pe(t,1);const r=t.source.indexOf(s);r===-1?n=gr(t,t.source.length,4):(n=gr(t,r,4),Pe(t,1))}else{const r=/^[^\t\r\n\f >]+/.exec(t.source);if(!r)return;const o=/["'<=`]/g;let a;for(;a=o.exec(r[0]);)ue(t,18,a.index);n=gr(t,r[0].length,4)}return{content:n,isQuoted:i,loc:bt(t,e)}}function NE(t,e){const[n,s]=t.options.delimiters,i=t.source.indexOf(s,n.length);if(i===-1){ue(t,25);return}const r=pt(t);Pe(t,n.length);const o=pt(t),a=pt(t),l=i-n.length,c=t.source.slice(0,l),u=gr(t,l,e),h=u.trim(),f=u.indexOf(h);f>0&&Xo(o,c,f);const d=l-(u.length-h.length-f);return Xo(a,c,d),Pe(t,s.length),{type:5,content:{type:4,isStatic:!1,constType:0,content:h,loc:bt(t,o,a)},loc:bt(t,r)}}function PE(t,e){const n=e===3?["]]>"]:["<",t.options.delimiters[0]];let s=t.source.length;for(let o=0;o<n.length;o++){const a=t.source.indexOf(n[o],1);a!==-1&&s>a&&(s=a)}const i=pt(t),r=gr(t,s,e);return{type:2,content:r,loc:bt(t,i)}}function gr(t,e,n){const s=t.source.slice(0,e);return Pe(t,e),n===2||n===3||s.indexOf("&")===-1?s:t.options.decodeEntities(s,n===4)}function pt(t){const{column:e,line:n,offset:s}=t;return{column:e,line:n,offset:s}}function bt(t,e,n){return n=n||pt(t),{start:e,end:n,source:t.originalSource.slice(e.offset,n.offset)}}function sa(t){return t[t.length-1]}function We(t,e){return t.startsWith(e)}function Pe(t,e){const{source:n}=t;Xo(t,n,e),t.source=n.slice(e)}function mr(t){const e=/^[\t\r\n\f ]+/.exec(t.source);e&&Pe(t,e[0].length)}function pg(t,e,n){return Jo(e,t.originalSource.slice(e.offset,n),n)}function ue(t,e,n,s=pt(t)){n&&(s.offset+=n,s.column+=n),t.options.onError(Ce(e,{start:s,end:s,source:""}))}function OE(t,e,n){const s=t.source;switch(e){case 0:if(We(s,"</")){for(let i=n.length-1;i>=0;--i)if(ou(s,n[i].tag))return!0}break;case 1:case 2:{const i=sa(n);if(i&&ou(s,i.tag))return!0;break}case 3:if(We(s,"]]>"))return!0;break}return!s}function ou(t,e){return We(t,"</")&&t.slice(2,2+e.length).toLowerCase()===e.toLowerCase()&&/[\t\r\n\f />]/.test(t[2+e.length]||">")}function ME(t,e){ia(t,e,gg(t,t.children[0]))}function gg(t,e){const{children:n}=t;return n.length===1&&e.type===1&&!ta(e)}function ia(t,e,n=!1){const{children:s}=t,i=s.length;let r=0;for(let o=0;o<s.length;o++){const a=s[o];if(a.type===1&&a.tagType===0){const l=n?0:Et(a,e);if(l>0){if(l>=2){a.codegenNode.patchFlag=-1+"",a.codegenNode=e.hoist(a.codegenNode),r++;continue}}else{const c=a.codegenNode;if(c.type===13){const u=vg(c);if((!u||u===512||u===1)&&_g(a,e)>=2){const h=yg(a);h&&(c.props=e.hoist(h))}c.dynamicProps&&(c.dynamicProps=e.hoist(c.dynamicProps))}}}else a.type===12&&Et(a.content,e)>=2&&(a.codegenNode=e.hoist(a.codegenNode),r++);if(a.type===1){const l=a.tagType===1;l&&e.scopes.vSlot++,ia(a,e),l&&e.scopes.vSlot--}else if(a.type===11)ia(a,e,a.children.length===1);else if(a.type===9)for(let l=0;l<a.branches.length;l++)ia(a.branches[l],e,a.branches[l].children.length===1)}r&&e.transformHoist&&e.transformHoist(s,e,t),r&&r===i&&t.type===1&&t.tagType===0&&t.codegenNode&&t.codegenNode.type===13&&$(t.codegenNode.children)&&(t.codegenNode.children=e.hoist(hr(t.codegenNode.children)))}function Et(t,e){const{constantCache:n}=e;switch(t.type){case 1:if(t.tagType!==0)return 0;const s=n.get(t);if(s!==void 0)return s;const i=t.codegenNode;if(i.type!==13||i.isBlock&&t.tag!=="svg"&&t.tag!=="foreignObject")return 0;if(vg(i))return n.set(t,0),0;{let a=3;const l=_g(t,e);if(l===0)return n.set(t,0),0;l<a&&(a=l);for(let c=0;c<t.children.length;c++){const u=Et(t.children[c],e);if(u===0)return n.set(t,0),0;u<a&&(a=u)}if(a>1)for(let c=0;c<t.props.length;c++){const u=t.props[c];if(u.type===7&&u.name==="bind"&&u.exp){const h=Et(u.exp,e);if(h===0)return n.set(t,0),0;h<a&&(a=h)}}return i.isBlock&&(e.removeHelper(us),e.removeHelper(oi(e.inSSR,i.isComponent)),i.isBlock=!1,e.helper(ri(e.inSSR,i.isComponent))),n.set(t,a),a}case 2:case 3:return 3;case 9:case 11:case 10:return 0;case 5:case 12:return Et(t.content,e);case 4:return t.constType;case 8:let o=3;for(let a=0;a<t.children.length;a++){const l=t.children[a];if(Y(l)||qs(l))continue;const c=Et(l,e);if(c===0)return 0;c<o&&(o=c)}return o;default:return 0}}const xE=new Set([Kc,Gc,lr,cr]);function mg(t,e){if(t.type===14&&!Y(t.callee)&&xE.has(t.callee)){const n=t.arguments[0];if(n.type===4)return Et(n,e);if(n.type===14)return mg(n,e)}return 0}function _g(t,e){let n=3;const s=yg(t);if(s&&s.type===15){const{properties:i}=s;for(let r=0;r<i.length;r++){const{key:o,value:a}=i[r],l=Et(o,e);if(l===0)return l;l<n&&(n=l);let c;if(a.type===4?c=Et(a,e):a.type===14?c=mg(a,e):c=0,c===0)return c;c<n&&(n=c)}}return n}function yg(t){const e=t.codegenNode;if(e.type===13)return e.props}function vg(t){const e=t.patchFlag;return e?parseInt(e,10):void 0}function DE(t,{filename:e="",prefixIdentifiers:n=!1,hoistStatic:s=!1,cacheHandlers:i=!1,nodeTransforms:r=[],directiveTransforms:o={},transformHoist:a=null,isBuiltInComponent:l=Ke,isCustomElement:c=Ke,expressionPlugins:u=[],scopeId:h=null,slotted:f=!0,ssr:d=!1,inSSR:p=!1,ssrCssVars:v="",bindingMetadata:m=le,inline:y=!1,isTS:g=!1,onError:_=Fc,onWarn:w=Jp,compatConfig:T}){const I=e.replace(/\?.*$/,"").match(/([^/\\]+)\.\w+$/),E={selfName:I&&Jn($e(I[1])),prefixIdentifiers:n,hoistStatic:s,cacheHandlers:i,nodeTransforms:r,directiveTransforms:o,transformHoist:a,isBuiltInComponent:l,isCustomElement:c,expressionPlugins:u,scopeId:h,slotted:f,ssr:d,inSSR:p,ssrCssVars:v,bindingMetadata:m,inline:y,isTS:g,onError:_,onWarn:w,compatConfig:T,root:t,helpers:new Map,components:new Set,directives:new Set,hoists:[],imports:[],constantCache:new Map,temps:0,cached:0,identifiers:Object.create(null),scopes:{vFor:0,vSlot:0,vPre:0,vOnce:0},parent:null,currentNode:t,childIndex:0,inVOnce:!1,helper(C){const k=E.helpers.get(C)||0;return E.helpers.set(C,k+1),C},removeHelper(C){const k=E.helpers.get(C);if(k){const R=k-1;R?E.helpers.set(C,R):E.helpers.delete(C)}},helperString(C){return`_${Ln[E.helper(C)]}`},replaceNode(C){E.parent.children[E.childIndex]=E.currentNode=C},removeNode(C){const k=E.parent.children,R=C?k.indexOf(C):E.currentNode?E.childIndex:-1;!C||C===E.currentNode?(E.currentNode=null,E.onNodeRemoved()):E.childIndex>R&&(E.childIndex--,E.onNodeRemoved()),E.parent.children.splice(R,1)},onNodeRemoved:()=>{},addIdentifiers(C){},removeIdentifiers(C){},hoist(C){Y(C)&&(C=X(C)),E.hoists.push(C);const k=X(`_hoisted_${E.hoists.length}`,!1,C.loc,2);return k.hoisted=C,k},cache(C,k=!1){return cE(E.cached++,C,k)}};return E.filters=new Set,E}function LE(t,e){const n=DE(t,e);ra(t,n),e.hoistStatic&&ME(t,n),e.ssr||FE(t,n),t.helpers=[...n.helpers.keys()],t.components=[...n.components],t.directives=[...n.directives],t.imports=n.imports,t.hoists=n.hoists,t.temps=n.temps,t.cached=n.cached,t.filters=[...n.filters]}function FE(t,e){const{helper:n}=e,{children:s}=t;if(s.length===1){const i=s[0];if(gg(t,i)&&i.codegenNode){const r=i.codegenNode;r.type===13&&su(r,e),t.codegenNode=r}else t.codegenNode=i}else if(s.length>1){let i=64;t.codegenNode=ur(e,n(rr),void 0,t.children,i+"",void 0,void 0,!0,void 0,!1)}}function UE(t,e){let n=0;const s=()=>{n--};for(;n<t.children.length;n++){const i=t.children[n];Y(i)||(e.parent=t,e.childIndex=n,e.onNodeRemoved=s,ra(i,e))}}function ra(t,e){e.currentNode=t;const{nodeTransforms:n}=e,s=[];for(let r=0;r<n.length;r++){const o=n[r](t,e);if(o&&($(o)?s.push(...o):s.push(o)),e.currentNode)t=e.currentNode;else return}switch(t.type){case 3:e.ssr||e.helper(ar);break;case 5:e.ssr||e.helper(Go);break;case 9:for(let r=0;r<t.branches.length;r++)ra(t.branches[r],e);break;case 10:case 11:case 1:case 0:UE(t,e);break}e.currentNode=t;let i=s.length;for(;i--;)s[i]()}function wg(t,e){const n=Y(t)?s=>s===t:s=>t.test(s);return(s,i)=>{if(s.type===1){const{props:r}=s;if(s.tagType===3&&r.some(_E))return;const o=[];for(let a=0;a<r.length;a++){const l=r[a];if(l.type===7&&n(l.name)){r.splice(a,1),a--;const c=e(s,l,i);c&&o.push(c)}}return o}}}const oa="/*#__PURE__*/";function BE(t,{mode:e="function",prefixIdentifiers:n=e==="module",sourceMap:s=!1,filename:i="template.vue.html",scopeId:r=null,optimizeImports:o=!1,runtimeGlobalName:a="Vue",runtimeModuleName:l="vue",ssrRuntimeModuleName:c="vue/server-renderer",ssr:u=!1,isTS:h=!1,inSSR:f=!1}){const d={mode:e,prefixIdentifiers:n,sourceMap:s,filename:i,scopeId:r,optimizeImports:o,runtimeGlobalName:a,runtimeModuleName:l,ssrRuntimeModuleName:c,ssr:u,isTS:h,inSSR:f,source:t.loc.source,code:"",column:1,line:1,offset:0,indentLevel:0,pure:!1,map:void 0,helper(v){return`_${Ln[v]}`},push(v,m){d.code+=v},indent(){p(++d.indentLevel)},deindent(v=!1){v?--d.indentLevel:p(--d.indentLevel)},newline(){p(d.indentLevel)}};function p(v){d.push(`
`+"  ".repeat(v))}return d}function HE(t,e={}){const n=BE(t,e);e.onContextCreated&&e.onContextCreated(n);const{mode:s,push:i,prefixIdentifiers:r,indent:o,deindent:a,newline:l,scopeId:c,ssr:u}=n,h=t.helpers.length>0,f=!r&&s!=="module";$E(t,n);const p=u?"ssrRender":"render",m=(u?["_ctx","_push","_parent","_attrs"]:["_ctx","_cache"]).join(", ");if(i(`function ${p}(${m}) {`),o(),f&&(i("with (_ctx) {"),o(),h&&(i(`const { ${t.helpers.map(y=>`${Ln[y]}: _${Ln[y]}`).join(", ")} } = _Vue`),i(`
`),l())),t.components.length&&(au(t.components,"component",n),(t.directives.length||t.temps>0)&&l()),t.directives.length&&(au(t.directives,"directive",n),t.temps>0&&l()),t.filters&&t.filters.length&&(l(),au(t.filters,"filter",n),l()),t.temps>0){i("let ");for(let y=0;y<t.temps;y++)i(`${y>0?", ":""}_temp${y}`)}return(t.components.length||t.directives.length||t.temps)&&(i(`
`),l()),u||i("return "),t.codegenNode?Ve(t.codegenNode,n):i("null"),f&&(a(),i("}")),a(),i("}"),{ast:t,code:n.code,preamble:"",map:n.map?n.map.toJSON():void 0}}function $E(t,e){const{ssr:n,prefixIdentifiers:s,push:i,newline:r,runtimeModuleName:o,runtimeGlobalName:a,ssrRuntimeModuleName:l}=e,c=a,u=h=>`${Ln[h]}: _${Ln[h]}`;if(t.helpers.length>0&&(i(`const _Vue = ${c}
`),t.hoists.length)){const h=[Bc,Hc,ar,$c,tg].filter(f=>t.helpers.includes(f)).map(u).join(", ");i(`const { ${h} } = _Vue
`)}WE(t.hoists,e),r(),i("return ")}function au(t,e,{helper:n,push:s,newline:i,isTS:r}){const o=n(e==="filter"?qc:e==="component"?Wc:Vc);for(let a=0;a<t.length;a++){let l=t[a];const c=l.endsWith("__self");c&&(l=l.slice(0,-6)),s(`const ${fr(l,e)} = ${o}(${JSON.stringify(l)}${c?", true":""})${r?"!":""}`),a<t.length-1&&i()}}function WE(t,e){if(!t.length)return;e.pure=!0;const{push:n,newline:s,helper:i,scopeId:r,mode:o}=e;s();for(let a=0;a<t.length;a++){const l=t[a];l&&(n(`const _hoisted_${a+1} = `),Ve(l,e),s())}e.pure=!1}function lu(t,e){const n=t.length>3||!1;e.push("["),n&&e.indent(),_r(t,e,n),n&&e.deindent(),e.push("]")}function _r(t,e,n=!1,s=!0){const{push:i,newline:r}=e;for(let o=0;o<t.length;o++){const a=t[o];Y(a)?i(a):$(a)?lu(a,e):Ve(a,e),o<t.length-1&&(n?(s&&i(","),r()):s&&i(", "))}}function Ve(t,e){if(Y(t)){e.push(t);return}if(qs(t)){e.push(e.helper(t));return}switch(t.type){case 1:case 9:case 11:Ve(t.codegenNode,e);break;case 2:VE(t,e);break;case 4:bg(t,e);break;case 5:qE(t,e);break;case 12:Ve(t.codegenNode,e);break;case 8:Eg(t,e);break;case 3:zE(t,e);break;case 13:KE(t,e);break;case 14:QE(t,e);break;case 15:YE(t,e);break;case 17:JE(t,e);break;case 18:XE(t,e);break;case 19:ZE(t,e);break;case 20:eI(t,e);break;case 21:_r(t.body,e,!0,!1);break}}function VE(t,e){e.push(JSON.stringify(t.content),t)}function bg(t,e){const{content:n,isStatic:s}=t;e.push(s?JSON.stringify(n):n,t)}function qE(t,e){const{push:n,helper:s,pure:i}=e;i&&n(oa),n(`${s(Go)}(`),Ve(t.content,e),n(")")}function Eg(t,e){for(let n=0;n<t.children.length;n++){const s=t.children[n];Y(s)?e.push(s):Ve(s,e)}}function jE(t,e){const{push:n}=e;if(t.type===8)n("["),Eg(t,e),n("]");else if(t.isStatic){const s=tu(t.content)?t.content:JSON.stringify(t.content);n(s,t)}else n(`[${t.content}]`,t)}function zE(t,e){const{push:n,helper:s,pure:i}=e;i&&n(oa),n(`${s(ar)}(${JSON.stringify(t.content)})`,t)}function KE(t,e){const{push:n,helper:s,pure:i}=e,{tag:r,props:o,children:a,patchFlag:l,dynamicProps:c,directives:u,isBlock:h,disableTracking:f,isComponent:d}=t;u&&n(s(jc)+"("),h&&n(`(${s(us)}(${f?"true":""}), `),i&&n(oa);const p=h?oi(e.inSSR,d):ri(e.inSSR,d);n(s(p)+"(",t),_r(GE([r,o,a,l,c]),e),n(")"),h&&n(")"),u&&(n(", "),Ve(u,e),n(")"))}function GE(t){let e=t.length;for(;e--&&t[e]==null;);return t.slice(0,e+1).map(n=>n||"null")}function QE(t,e){const{push:n,helper:s,pure:i}=e,r=Y(t.callee)?t.callee:s(t.callee);i&&n(oa),n(r+"(",t),_r(t.arguments,e),n(")")}function YE(t,e){const{push:n,indent:s,deindent:i,newline:r}=e,{properties:o}=t;if(!o.length){n("{}",t);return}const a=o.length>1||!1;n(a?"{":"{ "),a&&s();for(let l=0;l<o.length;l++){const{key:c,value:u}=o[l];jE(c,e),n(": "),Ve(u,e),l<o.length-1&&(n(","),r())}a&&i(),n(a?"}":" }")}function JE(t,e){lu(t.elements,e)}function XE(t,e){const{push:n,indent:s,deindent:i}=e,{params:r,returns:o,body:a,newline:l,isSlot:c}=t;c&&n(`_${Ln[Xc]}(`),n("(",t),$(r)?_r(r,e):r&&Ve(r,e),n(") => "),(l||a)&&(n("{"),s()),o?(l&&n("return "),$(o)?lu(o,e):Ve(o,e)):a&&Ve(a,e),(l||a)&&(i(),n("}")),c&&(t.isNonScopedSlot&&n(", undefined, true"),n(")"))}function ZE(t,e){const{test:n,consequent:s,alternate:i,newline:r}=t,{push:o,indent:a,deindent:l,newline:c}=e;if(n.type===4){const h=!tu(n.content);h&&o("("),bg(n,e),h&&o(")")}else o("("),Ve(n,e),o(")");r&&a(),e.indentLevel++,r||o(" "),o("? "),Ve(s,e),e.indentLevel--,r&&c(),r||o(" "),o(": ");const u=i.type===19;u||e.indentLevel++,Ve(i,e),u||e.indentLevel--,r&&l(!0)}function eI(t,e){const{push:n,helper:s,indent:i,deindent:r,newline:o}=e;n(`_cache[${t.index}] || (`),t.isVNode&&(i(),n(`${s(Yo)}(-1),`),o()),n(`_cache[${t.index}] = `),Ve(t.value,e),t.isVNode&&(n(","),o(),n(`${s(Yo)}(1),`),o(),n(`_cache[${t.index}]`),r()),n(")")}new RegExp("\\b"+"do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments,typeof,void".split(",").join("\\b|\\b")+"\\b");const tI=wg(/^(if|else|else-if)$/,(t,e,n)=>nI(t,e,n,(s,i,r)=>{const o=n.parent.children;let a=o.indexOf(s),l=0;for(;a-->=0;){const c=o[a];c&&c.type===9&&(l+=c.branches.length)}return()=>{if(r)s.codegenNode=Tg(i,l,n);else{const c=sI(s.codegenNode);c.alternate=Tg(i,l+s.branches.length-1,n)}}}));function nI(t,e,n,s){if(e.name!=="else"&&(!e.exp||!e.exp.content.trim())){const i=e.exp?e.exp.loc:t.loc;n.onError(Ce(28,e.loc)),e.exp=X("true",!1,i)}if(e.name==="if"){const i=Ig(t,e),r={type:9,loc:t.loc,branches:[i]};if(n.replaceNode(r),s)return s(r,i,!0)}else{const i=n.parent.children;let r=i.indexOf(t);for(;r-->=-1;){const o=i[r];if(o&&o.type===2&&!o.content.trim().length){n.removeNode(o);continue}if(o&&o.type===9){e.name==="else-if"&&o.branches[o.branches.length-1].condition===void 0&&n.onError(Ce(30,t.loc)),n.removeNode();const a=Ig(t,e);o.branches.push(a);const l=s&&s(o,a,!1);ra(a,n),l&&l(),n.currentNode=null}else n.onError(Ce(30,t.loc));break}}}function Ig(t,e){return{type:10,loc:t.loc,condition:e.name==="else"?void 0:e.exp,children:t.tagType===3&&!wt(t,"for")?t.children:[t],userKey:Zo(t,"key")}}function Tg(t,e,n){return t.condition?eu(t.condition,Cg(t,e,n),Ae(n.helper(ar),['""',"true"])):Cg(t,e,n)}function Cg(t,e,n){const{helper:s}=n,i=Re("key",X(`${e}`,!1,dt,2)),{children:r}=t,o=r[0];if(r.length!==1||o.type!==1)if(r.length===1&&o.type===11){const l=o.codegenNode;return na(l,i,n),l}else{let l=64;return ur(n,s(rr),vt([i]),r,l+"",void 0,void 0,!0,!1,!1,t.loc)}else{const l=o.codegenNode,c=vE(l);return c.type===13&&su(c,n),na(c,i,n),l}}function sI(t){for(;;)if(t.type===19)if(t.alternate.type===19)t=t.alternate;else return t;else t.type===20&&(t=t.value)}const iI=wg("for",(t,e,n)=>{const{helper:s,removeHelper:i}=n;return rI(t,e,n,r=>{const o=Ae(s(zc),[r.source]),a=wt(t,"memo"),l=Zo(t,"key"),c=l&&(l.type===6?X(l.value.content,!0):l.exp),u=l?Re("key",c):null,h=r.source.type===4&&r.source.constType>0,f=h?64:l?128:256;return r.codegenNode=ur(n,s(rr),void 0,o,f+"",void 0,void 0,!0,!h,!1,t.loc),()=>{let d;const p=ea(t),{children:v}=r,m=v.length!==1||v[0].type!==1,y=ta(t)?t:p&&t.children.length===1&&ta(t.children[0])?t.children[0]:null;if(y?(d=y.codegenNode,p&&u&&na(d,u,n)):m?d=ur(n,s(rr),u?vt([u]):void 0,t.children,64+"",void 0,void 0,!0,void 0,!1):(d=v[0].codegenNode,p&&u&&na(d,u,n),d.isBlock!==!h&&(d.isBlock?(i(us),i(oi(n.inSSR,d.isComponent))):i(ri(n.inSSR,d.isComponent))),d.isBlock=!h,d.isBlock?(s(us),s(oi(n.inSSR,d.isComponent))):s(ri(n.inSSR,d.isComponent))),a){const g=si(cu(r.parseResult,[X("_cached")]));g.body=uE([zt(["const _memo = (",a.exp,")"]),zt(["if (_cached",...c?[" && _cached.key === ",c]:[],` && ${n.helperString(ig)}(_cached, _memo)) return _cached`]),zt(["const _item = ",d]),X("_item.memo = _memo"),X("return _item")]),o.arguments.push(g,X("_cache"),X(String(n.cached++)))}else o.arguments.push(si(cu(r.parseResult),d,!0))}})});function rI(t,e,n,s){if(!e.exp){n.onError(Ce(31,e.loc));return}const i=kg(e.exp);if(!i){n.onError(Ce(32,e.loc));return}const{addIdentifiers:r,removeIdentifiers:o,scopes:a}=n,{source:l,value:c,key:u,index:h}=i,f={type:11,loc:e.loc,source:l,valueAlias:c,keyAlias:u,objectIndexAlias:h,parseResult:i,children:ea(t)?t.children:[t]};n.replaceNode(f),a.vFor++;const d=s&&s(f);return()=>{a.vFor--,d&&d()}}const oI=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,Sg=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,aI=/^\(|\)$/g;function kg(t,e){const n=t.loc,s=t.content,i=s.match(oI);if(!i)return;const[,r,o]=i,a={source:aa(n,o.trim(),s.indexOf(o,r.length)),value:void 0,key:void 0,index:void 0};let l=r.trim().replace(aI,"").trim();const c=r.indexOf(l),u=l.match(Sg);if(u){l=l.replace(Sg,"").trim();const h=u[1].trim();let f;if(h&&(f=s.indexOf(h,c+l.length),a.key=aa(n,h,f)),u[2]){const d=u[2].trim();d&&(a.index=aa(n,d,s.indexOf(d,a.key?f+h.length:c+l.length)))}}return l&&(a.value=aa(n,l,c)),a}function aa(t,e,n){return X(e,!1,ag(t,n,e.length))}function cu({value:t,key:e,index:n},s=[]){return lI([t,e,n,...s])}function lI(t){let e=t.length;for(;e--&&!t[e];);return t.slice(0,e+1).map((n,s)=>n||X("_".repeat(s+1),!1))}const Rg=X("undefined",!1),cI=(t,e)=>{if(t.type===1&&(t.tagType===1||t.tagType===3)){const n=wt(t,"slot");if(n)return n.exp,e.scopes.vSlot++,()=>{e.scopes.vSlot--}}},uI=(t,e,n)=>si(t,e,!1,!0,e.length?e[0].loc:n);function hI(t,e,n=uI){e.helper(Xc);const{children:s,loc:i}=t,r=[],o=[];let a=e.scopes.vSlot>0||e.scopes.vFor>0;const l=wt(t,"slot",!0);if(l){const{arg:v,exp:m}=l;v&&!et(v)&&(a=!0),r.push(Re(v||X("default",!0),n(m,s,i)))}let c=!1,u=!1;const h=[],f=new Set;for(let v=0;v<s.length;v++){const m=s[v];let y;if(!ea(m)||!(y=wt(m,"slot",!0))){m.type!==3&&h.push(m);continue}if(l){e.onError(Ce(37,y.loc));break}c=!0;const{children:g,loc:_}=m,{arg:w=X("default",!0),exp:T,loc:I}=y;let E;et(w)?E=w?w.content:"default":a=!0;const C=n(T,g,_);let k,R,P;if(k=wt(m,"if"))a=!0,o.push(eu(k.exp,la(w,C),Rg));else if(R=wt(m,/^else(-if)?$/,!0)){let N=v,B;for(;N--&&(B=s[N],B.type===3););if(B&&ea(B)&&wt(B,"if")){s.splice(v,1),v--;let J=o[o.length-1];for(;J.alternate.type===19;)J=J.alternate;J.alternate=R.exp?eu(R.exp,la(w,C),Rg):la(w,C)}else e.onError(Ce(30,R.loc))}else if(P=wt(m,"for")){a=!0;const N=P.parseResult||kg(P.exp);N?o.push(Ae(e.helper(zc),[N.source,si(cu(N),la(w,C),!0)])):e.onError(Ce(32,P.loc))}else{if(E){if(f.has(E)){e.onError(Ce(38,I));continue}f.add(E),E==="default"&&(u=!0)}r.push(Re(w,C))}}if(!l){const v=(m,y)=>{const g=n(m,y,i);return e.compatConfig&&(g.isNonScopedSlot=!0),Re("default",g)};c?h.length&&h.some(m=>Ag(m))&&(u?e.onError(Ce(39,h[0].loc)):r.push(v(void 0,h))):r.push(v(void 0,s))}const d=a?2:ca(t.children)?3:1;let p=vt(r.concat(Re("_",X(d+"",!1))),i);return o.length&&(p=Ae(e.helper(sg),[p,hr(o)])),{slots:p,hasDynamicSlots:a}}function la(t,e){return vt([Re("name",t),Re("fn",e)])}function ca(t){for(let e=0;e<t.length;e++){const n=t[e];switch(n.type){case 1:if(n.tagType===2||ca(n.children))return!0;break;case 9:if(ca(n.branches))return!0;break;case 10:case 11:if(ca(n.children))return!0;break}}return!1}function Ag(t){return t.type!==2&&t.type!==12?!0:t.type===2?!!t.content.trim():Ag(t.content)}const Ng=new WeakMap,fI=(t,e)=>function(){if(t=e.currentNode,!(t.type===1&&(t.tagType===0||t.tagType===1)))return;const{tag:s,props:i}=t,r=t.tagType===1;let o=r?dI(t,e):`"${s}"`;const a=Te(o)&&o.callee===Ko;let l,c,u,h=0,f,d,p,v=a||o===or||o===Uc||!r&&(s==="svg"||s==="foreignObject");if(i.length>0){const m=Pg(t,e);l=m.props,h=m.patchFlag,d=m.dynamicPropNames;const y=m.directives;p=y&&y.length?hr(y.map(g=>gI(g,e))):void 0,m.shouldUseBlock&&(v=!0)}if(t.children.length>0)if(o===zo&&(v=!0,h|=1024),r&&o!==or&&o!==zo){const{slots:y,hasDynamicSlots:g}=hI(t,e);c=y,g&&(h|=1024)}else if(t.children.length===1&&o!==or){const y=t.children[0],g=y.type,_=g===5||g===8;_&&Et(y,e)===0&&(h|=1),_||g===2?c=y:c=t.children}else c=t.children;h!==0&&(u=String(h),d&&d.length&&(f=mI(d))),t.codegenNode=ur(e,o,l,c,u,f,p,!!v,!1,r,t.loc)};function dI(t,e,n=!1){let{tag:s}=t;const i=hu(s),r=Zo(t,"is");if(r)if(i||fs("COMPILER_IS_ON_ELEMENT",e)){const l=r.type===6?r.value&&X(r.value.content,!0):r.exp;if(l)return Ae(e.helper(Ko),[l])}else r.type===6&&r.value.content.startsWith("vue:")&&(s=r.value.content.slice(4));const o=!i&&wt(t,"is");if(o&&o.exp)return Ae(e.helper(Ko),[o.exp]);const a=rg(s)||e.isBuiltInComponent(s);return a?(n||e.helper(a),a):(e.helper(Wc),e.components.add(s),fr(s,"component"))}function Pg(t,e,n=t.props,s=!1){const{tag:i,loc:r,children:o}=t,a=t.tagType===1;let l=[];const c=[],u=[],h=o.length>0;let f=!1,d=0,p=!1,v=!1,m=!1,y=!1,g=!1,_=!1;const w=[],T=({key:E,value:C})=>{if(et(E)){const k=E.content,R=Gn(k);if(!a&&R&&k.toLowerCase()!=="onclick"&&k!=="onUpdate:modelValue"&&!Yn(k)&&(y=!0),R&&Yn(k)&&(_=!0),C.type===20||(C.type===4||C.type===8)&&Et(C,e)>0)return;k==="ref"?p=!0:k==="class"?v=!0:k==="style"?m=!0:k!=="key"&&!w.includes(k)&&w.push(k),a&&(k==="class"||k==="style")&&!w.includes(k)&&w.push(k)}else g=!0};for(let E=0;E<n.length;E++){const C=n[E];if(C.type===6){const{loc:k,name:R,value:P}=C;let N=!0;if(R==="ref"&&(p=!0,e.scopes.vFor>0&&l.push(Re(X("ref_for",!0),X("true")))),R==="is"&&(hu(i)||P&&P.content.startsWith("vue:")||fs("COMPILER_IS_ON_ELEMENT",e)))continue;l.push(Re(X(R,!0,ag(k,0,R.length)),X(P?P.content:"",N,P?P.loc:k)))}else{const{name:k,arg:R,exp:P,loc:N}=C,B=k==="bind",J=k==="on";if(k==="slot"){a||e.onError(Ce(40,N));continue}if(k==="once"||k==="memo"||k==="is"||B&&hs(R,"is")&&(hu(i)||fs("COMPILER_IS_ON_ELEMENT",e))||J&&s)continue;if((B&&hs(R,"key")||J&&h&&hs(R,"vue:before-update"))&&(f=!0),B&&hs(R,"ref")&&e.scopes.vFor>0&&l.push(Re(X("ref_for",!0),X("true"))),!R&&(B||J)){if(g=!0,P)if(l.length&&(c.push(vt(uu(l),r)),l=[]),B){if(fs("COMPILER_V_BIND_OBJECT_ORDER",e)){c.unshift(P);continue}c.push(P)}else c.push({type:14,loc:N,callee:e.helper(Qc),arguments:[P]});else e.onError(Ce(B?34:35,N));continue}const rt=e.directiveTransforms[k];if(rt){const{props:Se,needRuntime:se}=rt(C,t,e);!s&&Se.forEach(T),l.push(...Se),se&&(u.push(C),qs(se)&&Ng.set(C,se))}else u.push(C),h&&(f=!0)}}let I;if(c.length?(l.length&&c.push(vt(uu(l),r)),c.length>1?I=Ae(e.helper(Qo),c,r):I=c[0]):l.length&&(I=vt(uu(l),r)),g?d|=16:(v&&!a&&(d|=2),m&&!a&&(d|=4),w.length&&(d|=8),y&&(d|=32)),!f&&(d===0||d===32)&&(p||_||u.length>0)&&(d|=512),!e.inSSR&&I)switch(I.type){case 15:let E=-1,C=-1,k=!1;for(let N=0;N<I.properties.length;N++){const B=I.properties[N].key;et(B)?B.content==="class"?E=N:B.content==="style"&&(C=N):B.isHandlerKey||(k=!0)}const R=I.properties[E],P=I.properties[C];k?I=Ae(e.helper(lr),[I]):(R&&!et(R.value)&&(R.value=Ae(e.helper(Kc),[R.value])),P&&!et(P.value)&&(m||P.value.type===17)&&(P.value=Ae(e.helper(Gc),[P.value])));break;case 14:break;default:I=Ae(e.helper(lr),[Ae(e.helper(cr),[I])]);break}return{props:I,directives:u,patchFlag:d,dynamicPropNames:w,shouldUseBlock:f}}function uu(t){const e=new Map,n=[];for(let s=0;s<t.length;s++){const i=t[s];if(i.key.type===8||!i.key.isStatic){n.push(i);continue}const r=i.key.content,o=e.get(r);o?(r==="style"||r==="class"||Gn(r))&&pI(o,i):(e.set(r,i),n.push(i))}return n}function pI(t,e){t.value.type===17?t.value.elements.push(e.value):t.value=hr([t.value,e.value],t.loc)}function gI(t,e){const n=[],s=Ng.get(t);s?n.push(e.helperString(s)):(e.helper(Vc),e.directives.add(t.name),n.push(fr(t.name,"directive")));const{loc:i}=t;if(t.exp&&n.push(t.exp),t.arg&&(t.exp||n.push("void 0"),n.push(t.arg)),Object.keys(t.modifiers).length){t.arg||(t.exp||n.push("void 0"),n.push("void 0"));const r=X("true",!1,i);n.push(vt(t.modifiers.map(o=>Re(o,r)),i))}return hr(n,t.loc)}function mI(t){let e="[";for(let n=0,s=t.length;n<s;n++)e+=JSON.stringify(t[n]),n<s-1&&(e+=", ");return e+"]"}function hu(t){return t==="component"||t==="Component"}const _I=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},yI=/-(\w)/g,Og=_I(t=>t.replace(yI,(e,n)=>n?n.toUpperCase():"")),vI=(t,e)=>{if(ta(t)){const{children:n,loc:s}=t,{slotName:i,slotProps:r}=wI(t,e),o=[e.prefixIdentifiers?"_ctx.$slots":"$slots",i,"{}","undefined","true"];let a=2;r&&(o[2]=r,a=3),n.length&&(o[3]=si([],n,!1,!1,s),a=4),e.scopeId&&!e.slotted&&(a=5),o.splice(a),t.codegenNode=Ae(e.helper(ng),o,s)}};function wI(t,e){let n='"default"',s;const i=[];for(let r=0;r<t.props.length;r++){const o=t.props[r];o.type===6?o.value&&(o.name==="name"?n=JSON.stringify(o.value.content):(o.name=Og(o.name),i.push(o))):o.name==="bind"&&hs(o.arg,"name")?o.exp&&(n=o.exp):(o.name==="bind"&&o.arg&&et(o.arg)&&(o.arg.content=Og(o.arg.content)),i.push(o))}if(i.length>0){const{props:r,directives:o}=Pg(t,e,i);s=r,o.length&&e.onError(Ce(36,o[0].loc))}return{slotName:n,slotProps:s}}const bI=/^\s*([\w$_]+|(async\s*)?\([^)]*?\))\s*=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/,Mg=(t,e,n,s)=>{const{loc:i,modifiers:r,arg:o}=t;!t.exp&&!r.length&&n.onError(Ce(35,i));let a;if(o.type===4)if(o.isStatic){let h=o.content;h.startsWith("vue:")&&(h=`vnode-${h.slice(4)}`),a=X(js($e(h)),!0,o.loc)}else a=zt([`${n.helperString(Jc)}(`,o,")"]);else a=o,a.children.unshift(`${n.helperString(Jc)}(`),a.children.push(")");let l=t.exp;l&&!l.content.trim()&&(l=void 0);let c=n.cacheHandlers&&!l&&!n.inVOnce;if(l){const h=og(l.content),f=!(h||bI.test(l.content)),d=l.content.includes(";");(f||c&&h)&&(l=zt([`${f?"$event":"(...args)"} => ${d?"{":"("}`,l,d?"}":")"]))}let u={props:[Re(a,l||X("() => {}",!1,i))]};return s&&(u=s(u)),c&&(u.props[0].value=n.cache(u.props[0].value)),u.props.forEach(h=>h.key.isHandlerKey=!0),u},EI=(t,e,n)=>{const{exp:s,modifiers:i,loc:r}=t,o=t.arg;return o.type!==4?(o.children.unshift("("),o.children.push(') || ""')):o.isStatic||(o.content=`${o.content} || ""`),i.includes("camel")&&(o.type===4?o.isStatic?o.content=$e(o.content):o.content=`${n.helperString(Yc)}(${o.content})`:(o.children.unshift(`${n.helperString(Yc)}(`),o.children.push(")"))),n.inSSR||(i.includes("prop")&&xg(o,"."),i.includes("attr")&&xg(o,"^")),!s||s.type===4&&!s.content.trim()?(n.onError(Ce(34,r)),{props:[Re(o,X("",!0,r))]}):{props:[Re(o,s)]}},xg=(t,e)=>{t.type===4?t.isStatic?t.content=e+t.content:t.content=`\`${e}\${${t.content}}\``:(t.children.unshift(`'${e}' + (`),t.children.push(")"))},II=(t,e)=>{if(t.type===0||t.type===1||t.type===11||t.type===10)return()=>{const n=t.children;let s,i=!1;for(let r=0;r<n.length;r++){const o=n[r];if(nu(o)){i=!0;for(let a=r+1;a<n.length;a++){const l=n[a];if(nu(l))s||(s=n[r]={type:8,loc:o.loc,children:[o]}),s.children.push(" + ",l),n.splice(a,1),a--;else{s=void 0;break}}}}if(!(!i||n.length===1&&(t.type===0||t.type===1&&t.tagType===0&&!t.props.find(r=>r.type===7&&!e.directiveTransforms[r.name])&&t.tag!=="template")))for(let r=0;r<n.length;r++){const o=n[r];if(nu(o)||o.type===8){const a=[];(o.type!==2||o.content!==" ")&&a.push(o),!e.ssr&&Et(o,e)===0&&a.push(1+""),n[r]={type:12,content:o,loc:o.loc,codegenNode:Ae(e.helper($c),a)}}}}},Dg=new WeakSet,TI=(t,e)=>{if(t.type===1&&wt(t,"once",!0))return Dg.has(t)||e.inVOnce?void 0:(Dg.add(t),e.inVOnce=!0,e.helper(Yo),()=>{e.inVOnce=!1;const n=e.currentNode;n.codegenNode&&(n.codegenNode=e.cache(n.codegenNode,!0))})},Lg=(t,e,n)=>{const{exp:s,arg:i}=t;if(!s)return n.onError(Ce(41,t.loc)),fu();const r=s.loc.source,o=s.type===4?s.content:r;n.bindingMetadata[r];const a=!1;if(!o.trim()||!og(o)&&!a)return n.onError(Ce(42,s.loc)),fu();const l=i||X("modelValue",!0),c=i?et(i)?`onUpdate:${i.content}`:zt(['"onUpdate:" + ',i]):"onUpdate:modelValue";let u;const h=n.isTS?"($event: any)":"$event";u=zt([`${h} => ((`,s,") = $event)"]);const f=[Re(l,t.exp),Re(c,u)];if(t.modifiers.length&&e.tagType===1){const d=t.modifiers.map(v=>(tu(v)?v:JSON.stringify(v))+": true").join(", "),p=i?et(i)?`${i.content}Modifiers`:zt([i,' + "Modifiers"']):"modelModifiers";f.push(Re(p,X(`{ ${d} }`,!1,t.loc,2)))}return fu(f)};function fu(t=[]){return{props:t}}const CI=/[\w).+\-_$\]]/,SI=(t,e)=>{!fs("COMPILER_FILTER",e)||(t.type===5&&ua(t.content,e),t.type===1&&t.props.forEach(n=>{n.type===7&&n.name!=="for"&&n.exp&&ua(n.exp,e)}))};function ua(t,e){if(t.type===4)Fg(t,e);else for(let n=0;n<t.children.length;n++){const s=t.children[n];typeof s=="object"&&(s.type===4?Fg(s,e):s.type===8?ua(t,e):s.type===5&&ua(s.content,e))}}function Fg(t,e){const n=t.content;let s=!1,i=!1,r=!1,o=!1,a=0,l=0,c=0,u=0,h,f,d,p,v=[];for(d=0;d<n.length;d++)if(f=h,h=n.charCodeAt(d),s)h===39&&f!==92&&(s=!1);else if(i)h===34&&f!==92&&(i=!1);else if(r)h===96&&f!==92&&(r=!1);else if(o)h===47&&f!==92&&(o=!1);else if(h===124&&n.charCodeAt(d+1)!==124&&n.charCodeAt(d-1)!==124&&!a&&!l&&!c)p===void 0?(u=d+1,p=n.slice(0,d).trim()):m();else{switch(h){case 34:i=!0;break;case 39:s=!0;break;case 96:r=!0;break;case 40:c++;break;case 41:c--;break;case 91:l++;break;case 93:l--;break;case 123:a++;break;case 125:a--;break}if(h===47){let y=d-1,g;for(;y>=0&&(g=n.charAt(y),g===" ");y--);(!g||!CI.test(g))&&(o=!0)}}p===void 0?p=n.slice(0,d).trim():u!==0&&m();function m(){v.push(n.slice(u,d).trim()),u=d+1}if(v.length){for(d=0;d<v.length;d++)p=kI(p,v[d],e);t.content=p}}function kI(t,e,n){n.helper(qc);const s=e.indexOf("(");if(s<0)return n.filters.add(e),`${fr(e,"filter")}(${t})`;{const i=e.slice(0,s),r=e.slice(s+1);return n.filters.add(i),`${fr(i,"filter")}(${t}${r!==")"?","+r:r}`}}const Ug=new WeakSet,RI=(t,e)=>{if(t.type===1){const n=wt(t,"memo");return!n||Ug.has(t)?void 0:(Ug.add(t),()=>{const s=t.codegenNode||e.currentNode.codegenNode;s&&s.type===13&&(t.tagType!==1&&su(s,e),t.codegenNode=Ae(e.helper(Zc),[n.exp,si(void 0,s),"_cache",String(e.cached++)]))})}};function AI(t){return[[TI,tI,RI,iI,SI,vI,fI,cI,II],{on:Mg,bind:EI,model:Lg}]}function NI(t,e={}){const n=e.onError||Fc,s=e.mode==="module";e.prefixIdentifiers===!0?n(Ce(46)):s&&n(Ce(47));const i=!1;e.cacheHandlers&&n(Ce(48)),e.scopeId&&!s&&n(Ce(49));const r=Y(t)?EE(t,e):t,[o,a]=AI();return LE(r,ce({},e,{prefixIdentifiers:i,nodeTransforms:[...o,...e.nodeTransforms||[]],directiveTransforms:ce({},a,e.directiveTransforms||{})})),HE(r,ce({},e,{prefixIdentifiers:i}))}const PI=()=>({props:[]}),Bg=Symbol(""),Hg=Symbol(""),$g=Symbol(""),Wg=Symbol(""),du=Symbol(""),Vg=Symbol(""),qg=Symbol(""),jg=Symbol(""),zg=Symbol(""),Kg=Symbol("");aE({[Bg]:"vModelRadio",[Hg]:"vModelCheckbox",[$g]:"vModelText",[Wg]:"vModelSelect",[du]:"vModelDynamic",[Vg]:"withModifiers",[qg]:"withKeys",[jg]:"vShow",[zg]:"Transition",[Kg]:"TransitionGroup"});let ai;function OI(t,e=!1){return ai||(ai=document.createElement("div")),e?(ai.innerHTML=`<div foo="${t.replace(/"/g,"&quot;")}">`,ai.children[0].getAttribute("foo")):(ai.innerHTML=t,ai.textContent)}const MI=at("style,iframe,script,noscript",!0),xI={isVoidTag:Lv,isNativeTag:t=>xv(t)||Dv(t),isPreTag:t=>t==="pre",decodeEntities:OI,isBuiltInComponent:t=>{if(ii(t,"Transition"))return zg;if(ii(t,"TransitionGroup"))return Kg},getNamespace(t,e){let n=e?e.ns:0;if(e&&n===2)if(e.tag==="annotation-xml"){if(t==="svg")return 1;e.props.some(s=>s.type===6&&s.name==="encoding"&&s.value!=null&&(s.value.content==="text/html"||s.value.content==="application/xhtml+xml"))&&(n=0)}else/^m(?:[ions]|text)$/.test(e.tag)&&t!=="mglyph"&&t!=="malignmark"&&(n=0);else e&&n===1&&(e.tag==="foreignObject"||e.tag==="desc"||e.tag==="title")&&(n=0);if(n===0){if(t==="svg")return 1;if(t==="math")return 2}return n},getTextMode({tag:t,ns:e}){if(e===0){if(t==="textarea"||t==="title")return 1;if(MI(t))return 2}return 0}},DI=t=>{t.type===1&&t.props.forEach((e,n)=>{e.type===6&&e.name==="style"&&e.value&&(t.props[n]={type:7,name:"bind",arg:X("style",!0,e.loc),exp:LI(e.value.content,e.loc),modifiers:[],loc:e.loc})})},LI=(t,e)=>{const n=Pf(t);return X(JSON.stringify(n),!1,e,3)};function cn(t,e){return Ce(t,e)}const FI=(t,e,n)=>{const{exp:s,loc:i}=t;return s||n.onError(cn(50,i)),e.children.length&&(n.onError(cn(51,i)),e.children.length=0),{props:[Re(X("innerHTML",!0,i),s||X("",!0))]}},UI=(t,e,n)=>{const{exp:s,loc:i}=t;return s||n.onError(cn(52,i)),e.children.length&&(n.onError(cn(53,i)),e.children.length=0),{props:[Re(X("textContent",!0),s?Ae(n.helperString(Go),[s],i):X("",!0))]}},BI=(t,e,n)=>{const s=Lg(t,e,n);if(!s.props.length||e.tagType===1)return s;t.arg&&n.onError(cn(55,t.arg.loc));const{tag:i}=e,r=n.isCustomElement(i);if(i==="input"||i==="textarea"||i==="select"||r){let o=$g,a=!1;if(i==="input"||r){const l=Zo(e,"type");if(l){if(l.type===7)o=du;else if(l.value)switch(l.value.content){case"radio":o=Bg;break;case"checkbox":o=Hg;break;case"file":a=!0,n.onError(cn(56,t.loc));break}}else mE(e)&&(o=du)}else i==="select"&&(o=Wg);a||(s.needRuntime=n.helper(o))}else n.onError(cn(54,t.loc));return s.props=s.props.filter(o=>!(o.key.type===4&&o.key.content==="modelValue")),s},HI=at("passive,once,capture"),$I=at("stop,prevent,self,ctrl,shift,alt,meta,exact,middle"),WI=at("left,right"),Gg=at("onkeyup,onkeydown,onkeypress",!0),VI=(t,e,n,s)=>{const i=[],r=[],o=[];for(let a=0;a<e.length;a++){const l=e[a];l==="native"&&dr("COMPILER_V_ON_NATIVE",n)||HI(l)?o.push(l):WI(l)?et(t)?Gg(t.content)?i.push(l):r.push(l):(i.push(l),r.push(l)):$I(l)?r.push(l):i.push(l)}return{keyModifiers:i,nonKeyModifiers:r,eventOptionModifiers:o}},Qg=(t,e)=>et(t)&&t.content.toLowerCase()==="onclick"?X(e,!0):t.type!==4?zt(["(",t,`) === "onClick" ? "${e}" : (`,t,")"]):t,qI=(t,e,n)=>Mg(t,e,n,s=>{const{modifiers:i}=t;if(!i.length)return s;let{key:r,value:o}=s.props[0];const{keyModifiers:a,nonKeyModifiers:l,eventOptionModifiers:c}=VI(r,i,n,t.loc);if(l.includes("right")&&(r=Qg(r,"onContextmenu")),l.includes("middle")&&(r=Qg(r,"onMouseup")),l.length&&(o=Ae(n.helper(Vg),[o,JSON.stringify(l)])),a.length&&(!et(r)||Gg(r.content))&&(o=Ae(n.helper(qg),[o,JSON.stringify(a)])),c.length){const u=c.map(Jn).join("");r=et(r)?X(`${r.content}${u}`,!0):zt(["(",r,`) + "${u}"`])}return{props:[Re(r,o)]}}),jI=(t,e,n)=>{const{exp:s,loc:i}=t;return s||n.onError(cn(58,i)),{props:[],needRuntime:n.helper(jg)}},zI=(t,e)=>{t.type===1&&t.tagType===0&&(t.tag==="script"||t.tag==="style")&&(e.onError(cn(60,t.loc)),e.removeNode())},KI=[DI],GI={cloak:PI,html:FI,text:UI,model:BI,on:qI,show:jI};function QI(t,e={}){return NI(t,ce({},xI,e,{nodeTransforms:[zI,...KI,...e.nodeTransforms||[]],directiveTransforms:ce({},GI,e.directiveTransforms||{}),transformHoist:null}))}const Yg=Object.create(null);function YI(t,e){if(!Y(t))if(t.nodeType)t=t.innerHTML;else return Ke;const n=t,s=Yg[n];if(s)return s;if(t[0]==="#"){const o=document.querySelector(t);t=o?o.innerHTML:""}const{code:i}=QI(t,ce({hoistStatic:!0,onError:void 0,onWarn:Ke},e)),r=new Function("Vue",i)(tE);return r._rc=!0,Yg[n]=r}Zd(YI);var JI=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Jg={exports:{}};(function(t,e){(function(n,s){t.exports=s()})(JI,function(){var n=function(){function s(d){return o.appendChild(d.dom),d}function i(d){for(var p=0;p<o.children.length;p++)o.children[p].style.display=p===d?"block":"none";r=d}var r=0,o=document.createElement("div");o.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",o.addEventListener("click",function(d){d.preventDefault(),i(++r%o.children.length)},!1);var a=(performance||Date).now(),l=a,c=0,u=s(new n.Panel("FPS","#0ff","#002")),h=s(new n.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var f=s(new n.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:o,addPanel:s,showPanel:i,begin:function(){a=(performance||Date).now()},end:function(){c++;var d=(performance||Date).now();if(h.update(d-a,200),d>l+1e3&&(u.update(1e3*c/(d-l),100),l=d,c=0,f)){var p=performance.memory;f.update(p.usedJSHeapSize/1048576,p.jsHeapSizeLimit/1048576)}return d},update:function(){a=this.end()},domElement:o,setMode:i}};return n.Panel=function(s,i,r){var o=1/0,a=0,l=Math.round,c=l(window.devicePixelRatio||1),u=80*c,h=48*c,f=3*c,d=2*c,p=3*c,v=15*c,m=74*c,y=30*c,g=document.createElement("canvas");g.width=u,g.height=h,g.style.cssText="width:80px;height:48px";var _=g.getContext("2d");return _.font="bold "+9*c+"px Helvetica,Arial,sans-serif",_.textBaseline="top",_.fillStyle=r,_.fillRect(0,0,u,h),_.fillStyle=i,_.fillText(s,f,d),_.fillRect(p,v,m,y),_.fillStyle=r,_.globalAlpha=.9,_.fillRect(p,v,m,y),{dom:g,update:function(w,T){o=Math.min(o,w),a=Math.max(a,w),_.fillStyle=r,_.globalAlpha=1,_.fillRect(0,0,u,v),_.fillStyle=i,_.fillText(l(w)+" "+s+" ("+l(o)+"-"+l(a)+")",f,d),_.drawImage(g,p+c,v,m-c,y,p,v,m-c,y),_.fillRect(p+m-c,v,c,y),_.fillStyle=r,_.globalAlpha=.9,_.fillRect(p+m-c,v,c,l((1-w/T)*y))}}},n})})(Jg);var XI=Jg.exports,Xg={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},pu={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},ZI=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],ha={CSS:{},springs:{}};function Kt(t,e,n){return Math.min(Math.max(t,e),n)}function yr(t,e){return t.indexOf(e)>-1}function gu(t,e){return t.apply(null,e)}var V={arr:function(t){return Array.isArray(t)},obj:function(t){return yr(Object.prototype.toString.call(t),"Object")},pth:function(t){return V.obj(t)&&t.hasOwnProperty("totalLength")},svg:function(t){return t instanceof SVGElement},inp:function(t){return t instanceof HTMLInputElement},dom:function(t){return t.nodeType||V.svg(t)},str:function(t){return typeof t=="string"},fnc:function(t){return typeof t=="function"},und:function(t){return typeof t=="undefined"},nil:function(t){return V.und(t)||t===null},hex:function(t){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)},rgb:function(t){return/^rgb/.test(t)},hsl:function(t){return/^hsl/.test(t)},col:function(t){return V.hex(t)||V.rgb(t)||V.hsl(t)},key:function(t){return!Xg.hasOwnProperty(t)&&!pu.hasOwnProperty(t)&&t!=="targets"&&t!=="keyframes"}};function Zg(t){var e=/\(([^)]+)\)/.exec(t);return e?e[1].split(",").map(function(n){return parseFloat(n)}):[]}function em(t,e){var n=Zg(t),s=Kt(V.und(n[0])?1:n[0],.1,100),i=Kt(V.und(n[1])?100:n[1],.1,100),r=Kt(V.und(n[2])?10:n[2],.1,100),o=Kt(V.und(n[3])?0:n[3],.1,100),a=Math.sqrt(i/s),l=r/(2*Math.sqrt(i*s)),c=l<1?a*Math.sqrt(1-l*l):0,u=1,h=l<1?(l*a+-o)/c:-o+a;function f(p){var v=e?e*p/1e3:p;return l<1?v=Math.exp(-v*l*a)*(u*Math.cos(c*v)+h*Math.sin(c*v)):v=(u+h*v)*Math.exp(-v*a),p===0||p===1?p:1-v}function d(){var p=ha.springs[t];if(p)return p;for(var v=1/6,m=0,y=0;;)if(m+=v,f(m)===1){if(y++,y>=16)break}else y=0;var g=m*v*1e3;return ha.springs[t]=g,g}return e?f:d}function eT(t){return t===void 0&&(t=10),function(e){return Math.ceil(Kt(e,1e-6,1)*t)*(1/t)}}var tT=function(){var t=11,e=1/(t-1);function n(u,h){return 1-3*h+3*u}function s(u,h){return 3*h-6*u}function i(u){return 3*u}function r(u,h,f){return((n(h,f)*u+s(h,f))*u+i(h))*u}function o(u,h,f){return 3*n(h,f)*u*u+2*s(h,f)*u+i(h)}function a(u,h,f,d,p){var v,m,y=0;do m=h+(f-h)/2,v=r(m,d,p)-u,v>0?f=m:h=m;while(Math.abs(v)>1e-7&&++y<10);return m}function l(u,h,f,d){for(var p=0;p<4;++p){var v=o(h,f,d);if(v===0)return h;var m=r(h,f,d)-u;h-=m/v}return h}function c(u,h,f,d){if(!(0<=u&&u<=1&&0<=f&&f<=1))return;var p=new Float32Array(t);if(u!==h||f!==d)for(var v=0;v<t;++v)p[v]=r(v*e,u,f);function m(y){for(var g=0,_=1,w=t-1;_!==w&&p[_]<=y;++_)g+=e;--_;var T=(y-p[_])/(p[_+1]-p[_]),I=g+T*e,E=o(I,u,f);return E>=.001?l(y,I,u,f):E===0?I:a(y,g,g+e,u,f)}return function(y){return u===h&&f===d||y===0||y===1?y:r(m(y),h,d)}}return c}(),tm=function(){var t={linear:function(){return function(s){return s}}},e={Sine:function(){return function(s){return 1-Math.cos(s*Math.PI/2)}},Circ:function(){return function(s){return 1-Math.sqrt(1-s*s)}},Back:function(){return function(s){return s*s*(3*s-2)}},Bounce:function(){return function(s){for(var i,r=4;s<((i=Math.pow(2,--r))-1)/11;);return 1/Math.pow(4,3-r)-7.5625*Math.pow((i*3-2)/22-s,2)}},Elastic:function(s,i){s===void 0&&(s=1),i===void 0&&(i=.5);var r=Kt(s,1,10),o=Kt(i,.1,2);return function(a){return a===0||a===1?a:-r*Math.pow(2,10*(a-1))*Math.sin((a-1-o/(Math.PI*2)*Math.asin(1/r))*(Math.PI*2)/o)}}},n=["Quad","Cubic","Quart","Quint","Expo"];return n.forEach(function(s,i){e[s]=function(){return function(r){return Math.pow(r,i+2)}}}),Object.keys(e).forEach(function(s){var i=e[s];t["easeIn"+s]=i,t["easeOut"+s]=function(r,o){return function(a){return 1-i(r,o)(1-a)}},t["easeInOut"+s]=function(r,o){return function(a){return a<.5?i(r,o)(a*2)/2:1-i(r,o)(a*-2+2)/2}},t["easeOutIn"+s]=function(r,o){return function(a){return a<.5?(1-i(r,o)(1-a*2))/2:(i(r,o)(a*2-1)+1)/2}}}),t}();function mu(t,e){if(V.fnc(t))return t;var n=t.split("(")[0],s=tm[n],i=Zg(t);switch(n){case"spring":return em(t,e);case"cubicBezier":return gu(tT,i);case"steps":return gu(eT,i);default:return gu(s,i)}}function nm(t){try{var e=document.querySelectorAll(t);return e}catch{return}}function fa(t,e){for(var n=t.length,s=arguments.length>=2?arguments[1]:void 0,i=[],r=0;r<n;r++)if(r in t){var o=t[r];e.call(s,o,r,t)&&i.push(o)}return i}function da(t){return t.reduce(function(e,n){return e.concat(V.arr(n)?da(n):n)},[])}function sm(t){return V.arr(t)?t:(V.str(t)&&(t=nm(t)||t),t instanceof NodeList||t instanceof HTMLCollection?[].slice.call(t):[t])}function _u(t,e){return t.some(function(n){return n===e})}function yu(t){var e={};for(var n in t)e[n]=t[n];return e}function vu(t,e){var n=yu(t);for(var s in t)n[s]=e.hasOwnProperty(s)?e[s]:t[s];return n}function pa(t,e){var n=yu(t);for(var s in e)n[s]=V.und(t[s])?e[s]:t[s];return n}function nT(t){var e=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(t);return e?"rgba("+e[1]+",1)":t}function sT(t){var e=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,n=t.replace(e,function(a,l,c,u){return l+l+c+c+u+u}),s=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n),i=parseInt(s[1],16),r=parseInt(s[2],16),o=parseInt(s[3],16);return"rgba("+i+","+r+","+o+",1)"}function iT(t){var e=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t),n=parseInt(e[1],10)/360,s=parseInt(e[2],10)/100,i=parseInt(e[3],10)/100,r=e[4]||1;function o(f,d,p){return p<0&&(p+=1),p>1&&(p-=1),p<1/6?f+(d-f)*6*p:p<1/2?d:p<2/3?f+(d-f)*(2/3-p)*6:f}var a,l,c;if(s==0)a=l=c=i;else{var u=i<.5?i*(1+s):i+s-i*s,h=2*i-u;a=o(h,u,n+1/3),l=o(h,u,n),c=o(h,u,n-1/3)}return"rgba("+a*255+","+l*255+","+c*255+","+r+")"}function rT(t){if(V.rgb(t))return nT(t);if(V.hex(t))return sT(t);if(V.hsl(t))return iT(t)}function un(t){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(t);if(e)return e[1]}function oT(t){if(yr(t,"translate")||t==="perspective")return"px";if(yr(t,"rotate")||yr(t,"skew"))return"deg"}function wu(t,e){return V.fnc(t)?t(e.target,e.id,e.total):t}function Gt(t,e){return t.getAttribute(e)}function bu(t,e,n){var s=un(e);if(_u([n,"deg","rad","turn"],s))return e;var i=ha.CSS[e+n];if(!V.und(i))return i;var r=100,o=document.createElement(t.tagName),a=t.parentNode&&t.parentNode!==document?t.parentNode:document.body;a.appendChild(o),o.style.position="absolute",o.style.width=r+n;var l=r/o.offsetWidth;a.removeChild(o);var c=l*parseFloat(e);return ha.CSS[e+n]=c,c}function im(t,e,n){if(e in t.style){var s=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),i=t.style[e]||getComputedStyle(t).getPropertyValue(s)||"0";return n?bu(t,i,n):i}}function Eu(t,e){if(V.dom(t)&&!V.inp(t)&&(!V.nil(Gt(t,e))||V.svg(t)&&t[e]))return"attribute";if(V.dom(t)&&_u(ZI,e))return"transform";if(V.dom(t)&&e!=="transform"&&im(t,e))return"css";if(t[e]!=null)return"object"}function rm(t){if(!!V.dom(t)){for(var e=t.style.transform||"",n=/(\w+)\(([^)]*)\)/g,s=new Map,i;i=n.exec(e);)s.set(i[1],i[2]);return s}}function aT(t,e,n,s){var i=yr(e,"scale")?1:0+oT(e),r=rm(t).get(e)||i;return n&&(n.transforms.list.set(e,r),n.transforms.last=e),s?bu(t,r,s):r}function Iu(t,e,n,s){switch(Eu(t,e)){case"transform":return aT(t,e,s,n);case"css":return im(t,e,n);case"attribute":return Gt(t,e);default:return t[e]||0}}function Tu(t,e){var n=/^(\*=|\+=|-=)/.exec(t);if(!n)return t;var s=un(t)||0,i=parseFloat(e),r=parseFloat(t.replace(n[0],""));switch(n[0][0]){case"+":return i+r+s;case"-":return i-r+s;case"*":return i*r+s}}function om(t,e){if(V.col(t))return rT(t);if(/\s/g.test(t))return t;var n=un(t),s=n?t.substr(0,t.length-n.length):t;return e?s+e:s}function Cu(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function lT(t){return Math.PI*2*Gt(t,"r")}function cT(t){return Gt(t,"width")*2+Gt(t,"height")*2}function uT(t){return Cu({x:Gt(t,"x1"),y:Gt(t,"y1")},{x:Gt(t,"x2"),y:Gt(t,"y2")})}function am(t){for(var e=t.points,n=0,s,i=0;i<e.numberOfItems;i++){var r=e.getItem(i);i>0&&(n+=Cu(s,r)),s=r}return n}function hT(t){var e=t.points;return am(t)+Cu(e.getItem(e.numberOfItems-1),e.getItem(0))}function lm(t){if(t.getTotalLength)return t.getTotalLength();switch(t.tagName.toLowerCase()){case"circle":return lT(t);case"rect":return cT(t);case"line":return uT(t);case"polyline":return am(t);case"polygon":return hT(t)}}function fT(t){var e=lm(t);return t.setAttribute("stroke-dasharray",e),e}function dT(t){for(var e=t.parentNode;V.svg(e)&&V.svg(e.parentNode);)e=e.parentNode;return e}function cm(t,e){var n=e||{},s=n.el||dT(t),i=s.getBoundingClientRect(),r=Gt(s,"viewBox"),o=i.width,a=i.height,l=n.viewBox||(r?r.split(" "):[0,0,o,a]);return{el:s,viewBox:l,x:l[0]/1,y:l[1]/1,w:o,h:a,vW:l[2],vH:l[3]}}function pT(t,e){var n=V.str(t)?nm(t)[0]:t,s=e||100;return function(i){return{property:i,el:n,svg:cm(n),totalLength:lm(n)*(s/100)}}}function gT(t,e,n){function s(u){u===void 0&&(u=0);var h=e+u>=1?e+u:0;return t.el.getPointAtLength(h)}var i=cm(t.el,t.svg),r=s(),o=s(-1),a=s(1),l=n?1:i.w/i.vW,c=n?1:i.h/i.vH;switch(t.property){case"x":return(r.x-i.x)*l;case"y":return(r.y-i.y)*c;case"angle":return Math.atan2(a.y-o.y,a.x-o.x)*180/Math.PI}}function um(t,e){var n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,s=om(V.pth(t)?t.totalLength:t,e)+"";return{original:s,numbers:s.match(n)?s.match(n).map(Number):[0],strings:V.str(t)||e?s.split(n):[]}}function Su(t){var e=t?da(V.arr(t)?t.map(sm):sm(t)):[];return fa(e,function(n,s,i){return i.indexOf(n)===s})}function hm(t){var e=Su(t);return e.map(function(n,s){return{target:n,id:s,total:e.length,transforms:{list:rm(n)}}})}function mT(t,e){var n=yu(e);if(/^spring/.test(n.easing)&&(n.duration=em(n.easing)),V.arr(t)){var s=t.length,i=s===2&&!V.obj(t[0]);i?t={value:t}:V.fnc(e.duration)||(n.duration=e.duration/s)}var r=V.arr(t)?t:[t];return r.map(function(o,a){var l=V.obj(o)&&!V.pth(o)?o:{value:o};return V.und(l.delay)&&(l.delay=a?0:e.delay),V.und(l.endDelay)&&(l.endDelay=a===r.length-1?e.endDelay:0),l}).map(function(o){return pa(o,n)})}function _T(t){for(var e=fa(da(t.map(function(r){return Object.keys(r)})),function(r){return V.key(r)}).reduce(function(r,o){return r.indexOf(o)<0&&r.push(o),r},[]),n={},s=function(r){var o=e[r];n[o]=t.map(function(a){var l={};for(var c in a)V.key(c)?c==o&&(l.value=a[c]):l[c]=a[c];return l})},i=0;i<e.length;i++)s(i);return n}function yT(t,e){var n=[],s=e.keyframes;s&&(e=pa(_T(s),e));for(var i in e)V.key(i)&&n.push({name:i,tweens:mT(e[i],t)});return n}function vT(t,e){var n={};for(var s in t){var i=wu(t[s],e);V.arr(i)&&(i=i.map(function(r){return wu(r,e)}),i.length===1&&(i=i[0])),n[s]=i}return n.duration=parseFloat(n.duration),n.delay=parseFloat(n.delay),n}function wT(t,e){var n;return t.tweens.map(function(s){var i=vT(s,e),r=i.value,o=V.arr(r)?r[1]:r,a=un(o),l=Iu(e.target,t.name,a,e),c=n?n.to.original:l,u=V.arr(r)?r[0]:c,h=un(u)||un(l),f=a||h;return V.und(o)&&(o=c),i.from=um(u,f),i.to=um(Tu(o,u),f),i.start=n?n.end:0,i.end=i.start+i.delay+i.duration+i.endDelay,i.easing=mu(i.easing,i.duration),i.isPath=V.pth(r),i.isPathTargetInsideSVG=i.isPath&&V.svg(e.target),i.isColor=V.col(i.from.original),i.isColor&&(i.round=1),n=i,i})}var fm={css:function(t,e,n){return t.style[e]=n},attribute:function(t,e,n){return t.setAttribute(e,n)},object:function(t,e,n){return t[e]=n},transform:function(t,e,n,s,i){if(s.list.set(e,n),e===s.last||i){var r="";s.list.forEach(function(o,a){r+=a+"("+o+") "}),t.style.transform=r}}};function dm(t,e){var n=hm(t);n.forEach(function(s){for(var i in e){var r=wu(e[i],s),o=s.target,a=un(r),l=Iu(o,i,a,s),c=a||un(l),u=Tu(om(r,c),l),h=Eu(o,i);fm[h](o,i,u,s.transforms,!0)}})}function bT(t,e){var n=Eu(t.target,e.name);if(n){var s=wT(e,t),i=s[s.length-1];return{type:n,property:e.name,animatable:t,tweens:s,duration:i.end,delay:s[0].delay,endDelay:i.endDelay}}}function ET(t,e){return fa(da(t.map(function(n){return e.map(function(s){return bT(n,s)})})),function(n){return!V.und(n)})}function pm(t,e){var n=t.length,s=function(r){return r.timelineOffset?r.timelineOffset:0},i={};return i.duration=n?Math.max.apply(Math,t.map(function(r){return s(r)+r.duration})):e.duration,i.delay=n?Math.min.apply(Math,t.map(function(r){return s(r)+r.delay})):e.delay,i.endDelay=n?i.duration-Math.max.apply(Math,t.map(function(r){return s(r)+r.duration-r.endDelay})):e.endDelay,i}var gm=0;function IT(t){var e=vu(Xg,t),n=vu(pu,t),s=yT(n,t),i=hm(t.targets),r=ET(i,s),o=pm(r,n),a=gm;return gm++,pa(e,{id:a,children:[],animatables:i,animations:r,duration:o.duration,delay:o.delay,endDelay:o.endDelay})}var Pt=[],mm=function(){var t;function e(){!t&&(!_m()||!he.suspendWhenDocumentHidden)&&Pt.length>0&&(t=requestAnimationFrame(n))}function n(i){for(var r=Pt.length,o=0;o<r;){var a=Pt[o];a.paused?(Pt.splice(o,1),r--):(a.tick(i),o++)}t=o>0?requestAnimationFrame(n):void 0}function s(){!he.suspendWhenDocumentHidden||(_m()?t=cancelAnimationFrame(t):(Pt.forEach(function(i){return i._onDocumentVisibility()}),mm()))}return typeof document!="undefined"&&document.addEventListener("visibilitychange",s),e}();function _m(){return!!document&&document.hidden}function he(t){t===void 0&&(t={});var e=0,n=0,s=0,i,r=0,o=null;function a(g){var _=window.Promise&&new Promise(function(w){return o=w});return g.finished=_,_}var l=IT(t);a(l);function c(){var g=l.direction;g!=="alternate"&&(l.direction=g!=="normal"?"normal":"reverse"),l.reversed=!l.reversed,i.forEach(function(_){return _.reversed=l.reversed})}function u(g){return l.reversed?l.duration-g:g}function h(){e=0,n=u(l.currentTime)*(1/he.speed)}function f(g,_){_&&_.seek(g-_.timelineOffset)}function d(g){if(l.reversePlayback)for(var w=r;w--;)f(g,i[w]);else for(var _=0;_<r;_++)f(g,i[_])}function p(g){for(var _=0,w=l.animations,T=w.length;_<T;){var I=w[_],E=I.animatable,C=I.tweens,k=C.length-1,R=C[k];k&&(R=fa(C,function(Tl){return g<Tl.end})[0]||R);for(var P=Kt(g-R.start-R.delay,0,R.duration)/R.duration,N=isNaN(P)?1:R.easing(P),B=R.to.strings,J=R.round,rt=[],Se=R.to.numbers.length,se=void 0,ae=0;ae<Se;ae++){var ze=void 0,Bs=R.to.numbers[ae],wn=R.from.numbers[ae]||0;R.isPath?ze=gT(R.value,N*Bs,R.isPathTargetInsideSVG):ze=wn+N*(Bs-wn),J&&(R.isColor&&ae>2||(ze=Math.round(ze*J)/J)),rt.push(ze)}var tn=B.length;if(!tn)se=rt[0];else{se=B[0];for(var Xe=0;Xe<tn;Xe++){B[Xe];var Ai=B[Xe+1],Ni=rt[Xe];isNaN(Ni)||(Ai?se+=Ni+Ai:se+=Ni+" ")}}fm[I.type](E.target,I.property,se,E.transforms),I.currentValue=se,_++}}function v(g){l[g]&&!l.passThrough&&l[g](l)}function m(){l.remaining&&l.remaining!==!0&&l.remaining--}function y(g){var _=l.duration,w=l.delay,T=_-l.endDelay,I=u(g);l.progress=Kt(I/_*100,0,100),l.reversePlayback=I<l.currentTime,i&&d(I),!l.began&&l.currentTime>0&&(l.began=!0,v("begin")),!l.loopBegan&&l.currentTime>0&&(l.loopBegan=!0,v("loopBegin")),I<=w&&l.currentTime!==0&&p(0),(I>=T&&l.currentTime!==_||!_)&&p(_),I>w&&I<T?(l.changeBegan||(l.changeBegan=!0,l.changeCompleted=!1,v("changeBegin")),v("change"),p(I)):l.changeBegan&&(l.changeCompleted=!0,l.changeBegan=!1,v("changeComplete")),l.currentTime=Kt(I,0,_),l.began&&v("update"),g>=_&&(n=0,m(),l.remaining?(e=s,v("loopComplete"),l.loopBegan=!1,l.direction==="alternate"&&c()):(l.paused=!0,l.completed||(l.completed=!0,v("loopComplete"),v("complete"),!l.passThrough&&"Promise"in window&&(o(),a(l)))))}return l.reset=function(){var g=l.direction;l.passThrough=!1,l.currentTime=0,l.progress=0,l.paused=!0,l.began=!1,l.loopBegan=!1,l.changeBegan=!1,l.completed=!1,l.changeCompleted=!1,l.reversePlayback=!1,l.reversed=g==="reverse",l.remaining=l.loop,i=l.children,r=i.length;for(var _=r;_--;)l.children[_].reset();(l.reversed&&l.loop!==!0||g==="alternate"&&l.loop===1)&&l.remaining++,p(l.reversed?l.duration:0)},l._onDocumentVisibility=h,l.set=function(g,_){return dm(g,_),l},l.tick=function(g){s=g,e||(e=s),y((s+(n-e))*he.speed)},l.seek=function(g){y(u(g))},l.pause=function(){l.paused=!0,h()},l.play=function(){!l.paused||(l.completed&&l.reset(),l.paused=!1,Pt.push(l),h(),mm())},l.reverse=function(){c(),l.completed=!l.reversed,h()},l.restart=function(){l.reset(),l.play()},l.remove=function(g){var _=Su(g);vm(_,l)},l.reset(),l.autoplay&&l.play(),l}function ym(t,e){for(var n=e.length;n--;)_u(t,e[n].animatable.target)&&e.splice(n,1)}function vm(t,e){var n=e.animations,s=e.children;ym(t,n);for(var i=s.length;i--;){var r=s[i],o=r.animations;ym(t,o),!o.length&&!r.children.length&&s.splice(i,1)}!n.length&&!s.length&&e.pause()}function TT(t){for(var e=Su(t),n=Pt.length;n--;){var s=Pt[n];vm(e,s)}}function CT(t,e){e===void 0&&(e={});var n=e.direction||"normal",s=e.easing?mu(e.easing):null,i=e.grid,r=e.axis,o=e.from||0,a=o==="first",l=o==="center",c=o==="last",u=V.arr(t),h=parseFloat(u?t[0]:t),f=u?parseFloat(t[1]):0,d=un(u?t[1]:t)||0,p=e.start||0+(u?h:0),v=[],m=0;return function(y,g,_){if(a&&(o=0),l&&(o=(_-1)/2),c&&(o=_-1),!v.length){for(var w=0;w<_;w++){if(!i)v.push(Math.abs(o-w));else{var T=l?(i[0]-1)/2:o%i[0],I=l?(i[1]-1)/2:Math.floor(o/i[0]),E=w%i[0],C=Math.floor(w/i[0]),k=T-E,R=I-C,P=Math.sqrt(k*k+R*R);r==="x"&&(P=-k),r==="y"&&(P=-R),v.push(P)}m=Math.max.apply(Math,v)}s&&(v=v.map(function(B){return s(B/m)*m})),n==="reverse"&&(v=v.map(function(B){return r?B<0?B*-1:-B:Math.abs(m-B)}))}var N=u?(f-h)/m:h;return p+N*(Math.round(v[g]*100)/100)+d}}function ST(t){t===void 0&&(t={});var e=he(t);return e.duration=0,e.add=function(n,s){var i=Pt.indexOf(e),r=e.children;i>-1&&Pt.splice(i,1);function o(f){f.passThrough=!0}for(var a=0;a<r.length;a++)o(r[a]);var l=pa(n,vu(pu,t));l.targets=l.targets||t.targets;var c=e.duration;l.autoplay=!1,l.direction=e.direction,l.timelineOffset=V.und(s)?c:Tu(s,c),o(e),e.seek(l.timelineOffset);var u=he(l);o(u),r.push(u);var h=pm(r,t);return e.delay=h.delay,e.endDelay=h.endDelay,e.duration=h.duration,e.seek(0),e.reset(),e.autoplay&&e.play(),e},e}he.version="3.2.1";he.speed=1;he.suspendWhenDocumentHidden=!0;he.running=Pt;he.remove=TT;he.get=Iu;he.set=dm;he.convertPx=bu;he.path=pT;he.setDashoffset=fT;he.stagger=CT;he.timeline=ST;he.easing=mu;he.penner=tm;he.random=function(t,e){return Math.floor(Math.random()*(e-t+1))+t};function vr(){var t={"[\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u767E\u5343\u4E07\u5104\u5146]":"M","[\u4E00-\u9FA0\u3005\u3006\u30F5\u30F6]":"H","[\u3041-\u3093]":"I","[\u30A1-\u30F4\u30FC\uFF71-\uFF9D\uFF9E\uFF70]":"K","[a-zA-Z\uFF41-\uFF5A\uFF21-\uFF3A]":"A","[0-9\uFF10-\uFF19]":"N"};this.chartype_=[];for(var e in t){var n=new RegExp;n.compile(e),this.chartype_.push([n,t[e]])}return this.BIAS__=.22520113688288682,this.BC1__={IH:-.23848626837817805,II:.32697243008996096,IK:-.010095752335862922,NH:.21727530565338304,OH:-.10089986761975575,OO:.13433286358813376},this.BC2__={AA:-1.2150931385052766,HH:-.43298652939827054,HI:-.09793298636342958,IH:.14590310223095676,II:-.6625603313165289,IO:.45843674644599386,KI:.15781506553541869,KK:-1.1956897560492934,KM:-.22093713680158006,NH:.11571381334313575,NN:-.9391107580152266,OH:.11313200037786794,OI:.032043808217449454,OO:-1.1228293018442108},this.BC3__={HH:.090632595183653,IO:.061425386387191604,KK:.016982736109307103},this.BP1__={BB:.030241123724748596,OB:-.023182912087779915,OO:.01455325433693936,UB:.028185906235397896},this.BP2__={OB:.132681095724194,UB:.00493130630746727,UU:-.014689170693780477},this.BQ1__={BII:-.010083907026208023,OII:.02515251035662344},this.BQ2__={BHH:.04341735161117498,BHI:.045457771888541616,BIH:-.14470309077292448,OHH:-.08026119156093003,OKK:-.1977664321038111,UII:-.06621219963330052},this.BQ3__={BHH:-.014898424180164977,BHI:.013890054125675377,BIH:.005757328548683403,OHH:.10079747274055155,UOH:-.1191250236143603},this.BQ4__={BAA:-.1264775422541678,BHH:-.28209502190319147,BII:-.3700712166856941,BOO:-.03541373866319149,OHI:-.10249592883314612,OIH:-.08938538374702867,UHH:-.07125565381822344},this.BW1__={"\u3001\u3068":.00485838884952779,\u3044\u308B:.04617579463120338,\u3046\u3057:-.22072249944143948,\u304B\u3089:.18188199901588142,\u3053\u3068:.23719058565400888,\u3057\u305F:.031515899622947006,\u3057\u3066:.1778925642903061,\u3057\u3087:.14278547537084638,\u305D\u3053:.10958177701368547,\u305D\u3057:-.12268428845315281,\u305F\u3061:.12833363650281956,\u3063\u305F:.2354907023842744,\u3064\u3044:-.038507788030877975,\u3066\u3044:.15503016203179423,\u3066\u304D:.025032613497468166,\u3066\u304F:-.03466697469321477,\u3066\u3057:-.07850319327879143,\u3067\u3082:.05889146660562902,\u3069\u3053:.1229224597028895,\u306A\u3044:.6901299739841869,\u306A\u3063:.050460448267941195,\u306B\u3057:.16927152179892996,\u307E\u305B:.15640043672788773,\u307E\u308B:-.3913393363485558,\u3088\u3046:.2050706170370288,\u3088\u3063:-.031759037859465065,\u3092\u3057:.04573189095673898,\u540C\u6642:-.33308946737473155,\u672C\u5F53:-.34218099454695616},this.BW2__={"\u2014\u2014":-1.2401205264908466,"\u2500\u2500":-.630117933831758,\u3044\u3046:-.41205046190487077,\u3044\u305F:.09548262290350316,\u3044\u306F:-.32152414179508565,\u304B\u3089:-.3546817205018059,\u3053\u3068:-.8616591802035096,\u3053\u306E:-.4459967252633165,\u3055\u305B:.07585377120157781,\u3055\u308C:.9917213664650857,\u3057\u3044:-.0642684860126085,\u3057\u305F:.2787203528684824,\u305D\u306E:-.5916599303287282,\u305F\u3061:-.38208193680219577,\u3063\u305F:.1591428863194103,\u3063\u3068:-.40801501262844353,\u3066\u3044:.7284065897951145,\u3066\u304F:.009824676245964784,\u3066\u306F:-.21867316408099918,\u3066\u3082:-.05679045629506635,\u3067\u3042:.16567658274283686,\u3067\u3044:.13735555300668092,\u3067\u304D:-.004887605934430344,\u3067\u3057:-.24722296365219953,\u3067\u3059:-.390087199803737,\u3068\u3044:.4249947522855389,\u3068\u3053:-.08660220590898753,\u306A\u3044:-.17994387867482803,\u306B\u304A:-.1010687738997673,\u306B\u3057:.2847117712911703,\u306B\u306A:.00988842094504979,\u306B\u3088:-.43406653745741763,\u306B\u5BFE:-.9967640050611577,\u306B\u95A2:-.6167481808776553,\u306E\u304B:.01464439737106634,\u306E\u306B:-.17113000695588004,\u307E\u3057:-.05089424418663534,\u307E\u3067:-.3023416744888755,\u307E\u308C:.2249438860313934,\u3082\u306E:-1.360647564126872,\u308C\u305F:.039853495913072,\u308C\u3070:.3115389590257928,\u308D\u3046:.36940990058585266,\u308F\u308C:.039785092481029516,\u3092\u901A:-.7767316482612519,\u3093\u3060:.07295123616271888,\u3093\u306A:-.4906819807291365,\u30CD\u30ED:.11841103137430385,\u6642\u306B:-.04808864228157312},this.BW3__={th:.014785593763562262,\u3042\u308B:.1331037501692543,\u3044\u3044:.31008839068298116,\u3044\u3063:.16431525298342703,\u3044\u308B:.34800382728849666,"\u3046\u3002":.07053434317628932,\u3046\u3068:.31866167883069907,\u3046\u306B:-.029900648298729925,\u304B\u3063:-.22874121413214865,\u304B\u3089:.5057680093403812,\u304C\u3089:-.22728955724406427,\u304D\u305F:.024906818600566014,\u3053\u3068:.8301218873906064,\u3053\u306E:.18255375382191694,\u3053\u308D:-.13558223779783019,\u3057\u3044:-.16777409122776613,\u3057\u3066:.015263140575872008,\u3057\u307E:.03551192653245554,"\u3059\u3002":-.5318327902403177,\u3059\u308B:.3975205783088912,\u305D\u306E:.13649861240561154,"\u305F\u3002":.648969704196735,\u305F\u3044:-.2823659950826378,\u305F\u306E:.025206978381667973,\u3063\u305F:-.21211073549548098,\u3066\u3044:.6251496287127615,\u3066\u304F:.009875591008665897,\u3066\u306E:-.04041417590759684,\u3067\u3059:.09517443481454739,\u3068\u3044:.06710965705095939,\u3068\u3082:-.04029385690503242,\u306A\u3044:.33144951132192346,"\u306B\u3001":-.12208499196741522,\u306B\u306F:.1946225131352,\u306E\u3082:-.09300211276779506,\u306E\u5B50:-.16195040731855131,\u307E\u3057:.18749985797178725,\u307E\u3059:.4331034262233852,\u307E\u3067:.1732882331616623,\u3082\u306E:.3094561861458994,\u3089\u308C:.5893587926686884,\u308C\u305F:.0048681592398596655,\u308C\u3066:.09362549868355244,\u308C\u3070:-.1672382997822637,\u308F\u308C:-.14133229841030695},this.TC1__={HII:.03950960190884111,IHI:.020527356955372597,III:.06654487279907766,KKK:.06349136141414029,OII:-.031868820246557406},this.TC2__={AAA:-.01600591881827301,HHH:-.029378849325844603,IHI:-.07110614659022238,IIH:-.01617035277664804,III:-.20594747316963274,KKI:.17714469717145875,OII:-.3714631687170236},this.TC3__={HHI:-.006324897174967177,HIH:-.02015858428614767,HII:-.10604638049997367,IHH:.11542307660916047,IHI:-.11537969241996533,IIH:-.2697566255720448,IIK:-.03955047777939628,IKK:.15300450748074307},this.TC4__={AAA:.32091550379474476,HHI:.11440645382177995,HIH:.05580929361901696,HII:-.034065041329023577,HIO:-.01030181531224085,IIH:-.05262018261968932,III:.10566636150434548,IIO:.005567086261816015,IOO:.03109780928752455,KKK:.19068665054756295},this.TQ1__={BHII:-.005844330114442904,BIII:.060696986793574936,OHII:.08381147641489471},this.TQ2__={BIIH:-.06220959097166443,BOHI:-.010577156786422341,OKHH:-.004877467278671398},this.TQ3__={BHIH:.006289097459807247,BHII:-.01605541964362671,BIHI:.024502536390263376,OAAA:.1640975801597747,OHHI:.08421016618378288,OHII:.1609541978653504,OIII:-.0056052911877949915,OIKK:-.03336670954475708,OKKK:.0625872850134237,OOHI:-.03386856743003464,OOII:-.09804896802638609},this.TQ4__={BHHH:-.19557578215931978,BHIH:.07227899769125704,BIII:-.19875665931320666,OHIH:-.6132846532718886,OHII:.0073237247315630465,OIHI:-.24284706152466545,OIII:-.11468853766020784},this.TW1__={\u306B\u3064\u3044:-.11623407099710713,\u306B\u3088\u3063:-.004921495919448952},this.TW2__={\u3057\u3087\u3046:.11736167747307898,\u305D\u3057\u3066:-.10587994014558691,\u3068\u3057\u3066:-.10148181720164659,\u307E\u308B\u3067:-.004857992220036397,\u3088\u3063\u3066:-.06106915715722373,\u30E9\u30B0\u30A4:.004874873407300121},this.TW3__={\u3068\u3057\u3066:-.08618672540194437,\u306B\u3064\u3044:-.044954250244913355,\u306B\u3068\u3063:-.1982932374482013,"\u306E\u3067\u3001":-.13246253852223708},this.TW4__={\u3044\u3046\u3053:.13506328593550318,"\u3057\u305F\u3002":-.12834388188812307,\u3057\u3066\u3044:.10322794990586326,\u3066\u3044\u308B:.05693902361235212,\u3068\u3044\u3046:.03551571889357873,\u307E\u3057\u305F:.49706159063499633,\u307E\u305B\u3093:.30057524560441756,\u3088\u3046\u3068:-.2567441638606044,\u3088\u3046\u306B:.08309574400066155},this.UC1__={A:.010156669149885798,I:-.008571172628247211,O:-.06873021994092306},this.UC2__={H:.34932452180126466,I:-.015687705712196773,K:.08971465602179736,M:.27319336124300997,O:-.0816628483369048},this.UC3__={I:.08371628945944345,M:-.4796466036234481,O:1.0911901974166283},this.UC4__={H:.0663741234422061,I:.032845000847053954,M:-.15638593137367923,O:.7853187020732736},this.UC5__={H:.13596051078311455,I:-.07896324823867357},this.UC6__={A:.033968993675558334,H:-.015643629982255495,I:.04452334552336498,O:.08617490706834542},this.UP1__={B:.009246267463356645,O:.0403252446097051,U:-.04516547668414343},this.UP2__={O:-.02123327464425744},this.UP3__={O:.05400561799098465},this.UQ1__={BK:.039034585991110975,OH:-.009731797066766646,OI:.0157160707877272,OK:-.01076204277677242,UI:-.053615085727519635},this.UQ2__={OH:-.10856293030493244,OK:.05944455936521592},this.UQ3__={BH:-.247047298009339,BI:.394208612797646,BK:-.0058290976988708615,BO:.056086836682142975},this.UW1__={B1:.018105810208910382,i:.004946755130047433,"\u3001":-.02777526189838834,\u304C:-.06866028643738298,\u3053:.05853852806144273,\u3057:-.010637833861056059,\u3063:.01045313487063675,\u3068:-.01920152451835982,\u306B:-.13465933626070342,\u306E:-.005610962116700646,\u306F:-.15094814131442158,\u3082:-.041580553635757286,\u3084:-.0098980433841668,\u3088:.09483200455145908,\u308B:.05782408628361303,\u3092:-.06480685769467537,\u30FC:.016203640645197158},this.UW2__={"\u3001":-.05593716276231778,"\u3002":-.031738034837723056,"\u300D":.1066623872015924,\u3044:.00995927931407218,\u3046:-.013845031111581923,\u304A:-.009887729550118494,\u304B:.18113638014991276,\u304C:-.11288002491272736,\u304F:-.06392749330128274,\u3053:.2216296827795169,\u3055:.04004718094908757,\u3057:.13716382860877638,\u3059:-.026090438087067024,\u305D:-.05958619811816992,\u305F:.02088672929144276,\u3060:.11611864520977425,\u3063:.05071186866446647,\u3066:-.07641978752988528,\u3068:-.1617697816760843,\u306A:.017725253098804766,\u306B:-.19583720954807687,\u306E:.005280408300918342,\u306F:-.16583007737131603,\u307E:.015742977125139935,\u3082:-.08534354771854774,\u3088:.0786807023382153,\u308A:-.042152274863661,\u308B:-.13862747171796458,\u308C:.03618024437415664,\u3092:-.25567952871980176,\u3093:.21368356221248083,\u4E0D:-.1603614824390156,\u5927:-.31524207130817977,\u5C0F:-.12976577209782142,\u898B:-.26537350265591314},this.UW3__={d:.12433623481840968,e:.07019352965291331,i:-.28951833750199724,s:.07927262098653556,y:.029893323178321773,"\u3001":.6254240819543564,\u3042:-.4504315533728965,\u3046:.2797398370000238,\u3048:.14066336325934564,\u304A:-.5354249500905506,\u304B:-.15967315696317042,\u304C:.33241232593651343,\u304F:.11640393156335943,\u3053:-.44323306448851035,\u3054:-.194886865861015,\u3055:-.13214430661859372,\u3057:-.055734867050514725,\u305B:.32861188600632507,\u305D:-.573360302459194,\u305F:.00628084477595966,\u3061:-.031016646716852683,\u3063:-.009740271487860726,\u3064:-.07693292540999878,\u3066:.6469373119411537,\u3067:.05631098238267572,\u3068:.12921676820941724,\u3069:-.11593197232924046,\u306A:-.35446808222188947,\u306B:.17894308086797012,\u306E:.34962889282436177,\u306F:.5819819380605722,\u307B:-.3055995652575915,\u307E:-.5491043731187487,\u307F:-.010187140672554069,\u3082:.14435269861292555,\u3088:-.11981759986462115,\u308A:.08408495596098593,\u308B:.5417657735761062,\u308C:.28713292997261525,\u308F:-.15263181238897242,\u3092:.7655772624914965,\u30B0:.04077803285486024,\u30CB:-.024725575380353606,\u30CD:.34811388323224446,\u30EB:.009882207253744273,\u30F3:.07940007767892635,\u4E8C:.41310866547585806,\u4EBA:.1802960153799593,\u4F55:.4114886775766756,\u5927:.009818838766569457,\u5F53:-.32892885754291634,\u5F7C:.06367210171639835,\u6570:.10642282655589906,\u7684:.7836608072322091,\u79C1:.4337382218562517,\u7ACB:-.06189162474332259,\u7B2C:.009765150863586758,\u898B:.009780696755950596},this.UW4__={e:-.26241347443103025,n:-.07043624034923457,r:-.05174757508939543,"\u3001":.16534915089036276,\u3042:.603454676046833,\u3044:-.33782388440806793,\u3046:-.10041222243216878,\u3048:-.46012258051344634,\u304A:.08177933290536007,\u304B:.042756554155529744,\u304C:.6472156106472131,\u304D:-.412647521838882,\u304F:-.3904189382427503,\u3051:-.4373694978590952,\u3053:.11971486995369958,\u3055:.09473325990273215,\u3057:-.07405432648145821,\u3058:-.07814318435561417,\u305D:.4140401163327643,\u305F:.5005120062904972,\u3060:.5175859755007981,\u3061:-.32757825436164695,\u3063:-.6388090573219343,\u3064:-.21213356619208382,\u3066:.3189830847771864,\u3067:.7548790708963414,\u3068:.3978483696995798,\u306A:.5347804691508483,\u306B:.6218509819144875,\u306E:.858983818932583,\u306F:.9537590975495559,\u3070:.017967849736232246,\u3073:-.09391181857809118,\u3078:.37799889890659155,\u307B:.1481226415164236,\u307E:.2351332150044544,\u3081:-.4288931992371047,\u3082:.18698587166826777,\u3083:-.18894731215972296,\u3084:.18777123466555484,\u3087:-.26980073191275783,\u3088:.2577372231795072,\u3089:-.4078750071226102,\u308A:-.8858217164981679,\u308B:-1.1570270191745182,\u308C:-.15783908494305104,\u308D:-.33551488818625197,\u308F:-.0075555247504103095,\u3092:1.759694053887214,\u3093:-.02578137808071669,\u30BD:.17371020657951847,\u30C3:-.08359187788579188,\u30C9:.10155250329870884,\u30CB:-.13628238659090972,\u30E9:.014834805312977447,\u30EB:-.014596613928525988,\u30F3:-.10443848315440722,\u30FC:-.5309140925665897,\u4EBA:.22936106874668577,\u5B50:-.04089576692098599,\u5BFE:-.18339524187952347,\u7684:.2739804197294529,\u8005:.024864512127211243},this.UW5__={a:.010179122517861593,h:.11342004850022312,o:.13864114348404827,t:-.06194846739390849,"\u3001":-.040769958221064474,"\u3002":.0764164113870031,\u3042:.06886919872017679,\u3044:.01603012917330838,\u304B:.07684025169358082,\u304C:-.03322453345943609,\u304D:.1863415532170791,\u3055:-.15249439853060662,\u3057:-.018745999550093317,\u305F:.015809063975165197,\u3061:.13469363305086202,\u3064:.026609177144296267,\u3066:-.0465637503886467,\u3067:-.030324895992921888,\u3068:.11905842485781214,\u306A:-.059856730513047206,\u306B:-.14166916444330552,\u3082:-.042507616269688735,\u3083:.17410553608770116,\u308A:-.00504704403212485,\u308B:.1001629922725702,\u308C:.09626881001130859,\u3092:-.0610369012797255,\u30F3:.1702022709387065,\u30FC:.08569801150852382,\u5EA6:-.06119725357207652,\u7684:-.3184003489974112},this.UW6__={"\u3001":-.05619324630475547,\u3042:-.01011865446823839,\u3044:.00492327870578099,\u304B:.010776371652764537,\u305F:-.005078260775586424,\u3060:.005120430216730338,\u3063:.014769316557906188,\u3066:-.2205200359076286,\u3068:-.08328953464389319,\u306E:-.036939222540452614,\u306F:-.04565922334729253,\u3082:-.010294320384416675,\u308C:-.005165653787238134},this}vr.prototype.ctype_=function(t){for(var e in this.chartype_)if(t.match(this.chartype_[e][0]))return this.chartype_[e][1];return"O"};vr.prototype.ts_=function(t){return t||0};vr.prototype.segment=function(t){if(t==null||t==null||t=="")return[];var e=[],n=["B3","B2","B1"],s=["O","O","O"],i=t.split("");for(c=0;c<i.length;++c)n.push(i[c]),s.push(this.ctype_(i[c]));n.push("E1"),n.push("E2"),n.push("E3"),s.push("O"),s.push("O"),s.push("O");for(var r=n[3],o="U",a="U",l="U",c=4;c<n.length-3;++c){var u=this.BIAS__,h=n[c-3],f=n[c-2],d=n[c-1],p=n[c],v=n[c+1],m=n[c+2],y=s[c-3],g=s[c-2],_=s[c-1],w=s[c],T=s[c+1],I=s[c+2];u+=this.ts_(this.UP1__[o]),u+=this.ts_(this.UP2__[a]),u+=this.ts_(this.UP3__[l]),u+=this.ts_(this.BP1__[o+a]),u+=this.ts_(this.BP2__[a+l]),u+=this.ts_(this.UW1__[h]),u+=this.ts_(this.UW2__[f]),u+=this.ts_(this.UW3__[d]),u+=this.ts_(this.UW4__[p]),u+=this.ts_(this.UW5__[v]),u+=this.ts_(this.UW6__[m]),u+=this.ts_(this.BW1__[f+d]),u+=this.ts_(this.BW2__[d+p]),u+=this.ts_(this.BW3__[p+v]),u+=this.ts_(this.TW1__[h+f+d]),u+=this.ts_(this.TW2__[f+d+p]),u+=this.ts_(this.TW3__[d+p+v]),u+=this.ts_(this.TW4__[p+v+m]),u+=this.ts_(this.UC1__[y]),u+=this.ts_(this.UC2__[g]),u+=this.ts_(this.UC3__[_]),u+=this.ts_(this.UC4__[w]),u+=this.ts_(this.UC5__[T]),u+=this.ts_(this.UC6__[I]),u+=this.ts_(this.BC1__[g+_]),u+=this.ts_(this.BC2__[_+w]),u+=this.ts_(this.BC3__[w+T]),u+=this.ts_(this.TC1__[y+g+_]),u+=this.ts_(this.TC2__[g+_+w]),u+=this.ts_(this.TC3__[_+w+T]),u+=this.ts_(this.TC4__[w+T+I]),u+=this.ts_(this.UQ1__[o+y]),u+=this.ts_(this.UQ2__[a+g]),u+=this.ts_(this.UQ3__[l+_]),u+=this.ts_(this.BQ1__[a+g+_]),u+=this.ts_(this.BQ2__[a+_+w]),u+=this.ts_(this.BQ3__[l+g+_]),u+=this.ts_(this.BQ4__[l+_+w]),u+=this.ts_(this.TQ1__[a+y+g+_]),u+=this.ts_(this.TQ2__[a+g+_+w]),u+=this.ts_(this.TQ3__[l+y+g+_]),u+=this.ts_(this.TQ4__[l+g+_+w]);var E="O";u>0&&(e.push(r),r="",E="B"),o=a,a=l,l=E,r+=n[c]}return e.push(r),e};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wm={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D=function(t,e){if(!t)throw li(e)},li=function(t){return new Error("Firebase Database ("+wm.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bm=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)==55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)==56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},kT=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},ku={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let f=(a&15)<<2|c>>6,d=c&63;l||(d=64,o||(f=64)),s.push(n[u],n[h],n[f],n[d])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(bm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):kT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw Error();const f=r<<2|a>>4;if(s.push(f),c!==64){const d=a<<4&240|c>>2;if(s.push(d),h!==64){const p=c<<6&192|h;s.push(p)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},RT=function(t){const e=bm(t);return ku.encodeByteArray(e,!0)},Ru=function(t){try{return ku.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AT(t){return Em(void 0,t)}function Em(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!NT(n)||(t[n]=Em(t[n],e[n]));return t}function NT(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Au(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(qe())}function Im(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Tm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function PT(){const t=qe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Cm(){return wm.NODE_ADMIN===!0}function OT(){return typeof indexedDB=="object"}function MT(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function xT(){return!(typeof navigator=="undefined"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DT="FirebaseError";class hn extends Error{constructor(e,n,s){super(n);this.code=e,this.customData=s,this.name=DT,Object.setPrototypeOf(this,hn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ds.prototype.create)}}class ds{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?LT(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new hn(i,a,s)}}function LT(t,e){return t.replace(FT,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const FT=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wr(t){return JSON.parse(t)}function Oe(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sm=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=wr(Ru(r[0])||""),n=wr(Ru(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},UT=function(t){const e=Sm(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},BT=function(t){const e=Sm(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ps(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Nu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ma(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function br(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(km(r)&&km(o)){if(!br(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function km(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const f=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function $T(t,e){const n=new WT(t,e);return n.subscribe.bind(n)}class WT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");VT(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Pu),i.error===void 0&&(i.error=Pu),i.complete===void 0&&(i.complete=Pu);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console!="undefined"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function VT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Pu(){}function _a(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qT=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,D(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ya=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jT=1e3,zT=2,KT=4*60*60*1e3,GT=.5;function Rm(t,e=jT,n=zT){const s=e*Math.pow(n,t),i=Math.round(GT*s*(Math.random()-.5)*2);return Math.min(KT,s+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(t){return t&&t._delegate?t._delegate:t}class Mt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new ga;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(JT(e))try{this.getOrInitializeService({instanceIdentifier:gs})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=gs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=gs){return this.instances.has(e)}getOptions(e=gs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:YT(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=gs){return this.component?this.component.multipleInstances?e:gs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function YT(t){return t===gs?void 0:t}function JT(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new QT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _e;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(_e||(_e={}));const ZT={debug:_e.DEBUG,verbose:_e.VERBOSE,info:_e.INFO,warn:_e.WARN,error:_e.ERROR,silent:_e.SILENT},eC=_e.INFO,tC={[_e.DEBUG]:"log",[_e.VERBOSE]:"log",[_e.INFO]:"info",[_e.WARN]:"warn",[_e.ERROR]:"error"},nC=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=tC[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class va{constructor(e){this.name=e,this._logLevel=eC,this._logHandler=nC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in _e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ZT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,_e.DEBUG,...e),this._logHandler(this,_e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,_e.VERBOSE,...e),this._logHandler(this,_e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,_e.INFO,...e),this._logHandler(this,_e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,_e.WARN,...e),this._logHandler(this,_e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,_e.ERROR,...e),this._logHandler(this,_e.ERROR,...e)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(iC(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function iC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ou="@firebase/app",Am="0.7.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mu=new va("@firebase/app"),rC="@firebase/app-compat",oC="@firebase/analytics-compat",aC="@firebase/analytics",lC="@firebase/app-check-compat",cC="@firebase/app-check",uC="@firebase/auth",hC="@firebase/auth-compat",fC="@firebase/database",dC="@firebase/database-compat",pC="@firebase/functions",gC="@firebase/functions-compat",mC="@firebase/installations",_C="@firebase/installations-compat",yC="@firebase/messaging",vC="@firebase/messaging-compat",wC="@firebase/performance",bC="@firebase/performance-compat",EC="@firebase/remote-config",IC="@firebase/remote-config-compat",TC="@firebase/storage",CC="@firebase/storage-compat",SC="@firebase/firestore",kC="@firebase/firestore-compat",RC="firebase",AC="9.6.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nm="[DEFAULT]",NC={[Ou]:"fire-core",[rC]:"fire-core-compat",[aC]:"fire-analytics",[oC]:"fire-analytics-compat",[cC]:"fire-app-check",[lC]:"fire-app-check-compat",[uC]:"fire-auth",[hC]:"fire-auth-compat",[fC]:"fire-rtdb",[dC]:"fire-rtdb-compat",[pC]:"fire-fn",[gC]:"fire-fn-compat",[mC]:"fire-iid",[_C]:"fire-iid-compat",[yC]:"fire-fcm",[vC]:"fire-fcm-compat",[wC]:"fire-perf",[bC]:"fire-perf-compat",[EC]:"fire-rc",[IC]:"fire-rc-compat",[TC]:"fire-gcs",[CC]:"fire-gcs-compat",[SC]:"fire-fst",[kC]:"fire-fst-compat","fire-js":"fire-js",[RC]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wa=new Map,xu=new Map;function PC(t,e){try{t.container.addComponent(e)}catch(n){Mu.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Qt(t){const e=t.name;if(xu.has(e))return Mu.debug(`There were multiple attempts to register component ${e}.`),!1;xu.set(e,t);for(const n of wa.values())PC(n,t);return!0}function ms(t,e){return t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OC={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},ba=new ds("app","Firebase",OC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MC{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Mt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ba.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui=AC;function xC(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Nm,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw ba.create("bad-app-name",{appName:String(s)});const i=wa.get(s);if(i){if(br(t,i.options)&&br(n,i.config))return i;throw ba.create("duplicate-app",{appName:s})}const r=new XT(s);for(const a of xu.values())r.addComponent(a);const o=new MC(t,n,r);return wa.set(s,o),o}function Du(t=Nm){const e=wa.get(t);if(!e)throw ba.create("no-app",{appName:t});return e}function tt(t,e,n){var s;let i=(s=NC[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Mu.warn(a.join(" "));return}Qt(new Mt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DC(t){Qt(new Mt("platform-logger",e=>new sC(e),"PRIVATE")),tt(Ou,Am,t),tt(Ou,Am,"esm2017"),tt("fire-js","")}DC("");var LC="firebase",FC="9.6.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tt(LC,FC,"app");/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function Lu(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function Pm(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const UC=Pm,Om=new ds("auth","Firebase",Pm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mm=new va("@firebase/auth");function Ea(t,...e){Mm.logLevel<=_e.ERROR&&Mm.error(`Auth (${ui}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(t,...e){throw Fu(t,...e)}function Jt(t,...e){return Fu(t,...e)}function xm(t,e,n){const s=Object.assign(Object.assign({},UC()),{[e]:n});return new ds("auth","Firebase",s).create(e,{appName:t.name})}function BC(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Yt(t,"argument-error"),xm(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Fu(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Om.create(t,...e)}function Q(t,e,...n){if(!t)throw Fu(e,...n)}function fn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ea(e),new Error(e)}function dn(t,e){t||fn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm=new Map;function pn(t){dn(t instanceof Function,"Expected a class definition");let e=Dm.get(t);return e?(dn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Dm.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HC(t,e){const n=ms(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(br(r,e!=null?e:{}))return i;Yt(i,"already-initialized")}return n.initialize({options:e})}function $C(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(pn);(e==null?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uu(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function WC(){return Lm()==="http:"||Lm()==="https:"}function Lm(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VC(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(WC()||Im()||"connection"in navigator)?navigator.onLine:!0}function qC(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e,n){this.shortDelay=e,this.longDelay=n,dn(n>e,"Short delay should be less than long delay!"),this.isMobile=Au()||Tm()}get(){return VC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bu(t,e){dn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;fn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;fn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;fn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zC=new Er(3e4,6e4);function KC(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ir(t,e,n,s,i={}){return Um(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=ci(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Fm.fetch()(Bm(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function Um(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},jC),e);try{const i=new QC(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Hu(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Hu(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Hu(t,"email-already-in-use",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw xm(t,u,c);Yt(t,u)}}catch(i){if(i instanceof hn)throw i;Yt(t,"network-request-failed")}}async function GC(t,e,n,s,i={}){const r=await Ir(t,e,n,s,i);return"mfaPendingCredential"in r&&Yt(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Bm(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Bu(t.config,i):`${t.config.apiScheme}://${i}`}class QC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Jt(this.auth,"timeout")),zC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Hu(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Jt(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YC(t,e){return Ir(t,"POST","/v1/accounts:delete",e)}async function JC(t,e){return Ir(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tr(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function XC(t,e=!1){const n=De(t),s=await n.getIdToken(e),i=Wu(s);Q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Tr($u(i.auth_time)),issuedAtTime:Tr($u(i.iat)),expirationTime:Tr($u(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function $u(t){return Number(t)*1e3}function Wu(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Ea("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ru(n);return i?JSON.parse(i):(Ea("Failed to decode base64 JWT payload"),null)}catch(i){return Ea("Caught error parsing JWT payload as JSON",i),null}}function ZC(t){const e=Wu(t);return Q(e,"internal-error"),Q(typeof e.exp!="undefined","internal-error"),Q(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hi(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof hn&&eS(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function eS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Tr(this.lastLoginAt),this.creationTime=Tr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ia(t){var e;const n=t.auth,s=await t.getIdToken(),i=await hi(t,JC(n,{idToken:s}));Q(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=((e=r.providerUserInfo)===null||e===void 0?void 0:e.length)?iS(r.providerUserInfo):[],a=sS(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a==null?void 0:a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Hm(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function nS(t){const e=De(t);await Ia(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function sS(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function iS(t){return t.map(e=>{var{providerId:n}=e,s=Lu(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rS(t,e){const n=await Um(t,{},async()=>{const s=ci({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=Bm(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Fm.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken!="undefined","internal-error"),Q(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):ZC(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Q(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await rS(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Cr;return s&&(Q(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(Q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(Q(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Cr,this.toJSON())}_performRefresh(){return fn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(t,e){Q(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class _s{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Lu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new tS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.metadata=new Hm(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await hi(this,this.stsTokenManager.getToken(this.auth,e));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return XC(this,e)}reload(){return nS(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new _s(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Ia(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await hi(this,YC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,d=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,m=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,y=(c=n.createdAt)!==null&&c!==void 0?c:void 0,g=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:_,emailVerified:w,isAnonymous:T,providerData:I,stsTokenManager:E}=n;Q(_&&E,e,"internal-error");const C=Cr.fromJSON(this.name,E);Q(typeof _=="string",e,"internal-error"),Fn(h,e.name),Fn(f,e.name),Q(typeof w=="boolean",e,"internal-error"),Q(typeof T=="boolean",e,"internal-error"),Fn(d,e.name),Fn(p,e.name),Fn(v,e.name),Fn(m,e.name),Fn(y,e.name),Fn(g,e.name);const k=new _s({uid:_,auth:e,email:f,emailVerified:w,displayName:h,isAnonymous:T,photoURL:p,phoneNumber:d,tenantId:v,stsTokenManager:C,createdAt:y,lastLoginAt:g});return I&&Array.isArray(I)&&(k.providerData=I.map(R=>Object.assign({},R))),m&&(k._redirectEventId=m),k}static async _fromIdTokenResponse(e,n,s=!1){const i=new Cr;i.updateFromServerResponse(n);const r=new _s({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Ia(r),r}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}$m.type="NONE";const Wm=$m;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ta(t,e,n){return`firebase:${t}:${e}:${n}`}class fi{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Ta(this.userKey,i.apiKey,r),this.fullPersistenceKey=Ta("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?_s._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new fi(pn(Wm),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||pn(Wm);const o=Ta(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=_s._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new fi(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new fi(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(zm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(qm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Gm(e))return"Blackberry";if(Qm(e))return"Webos";if(Vu(e))return"Safari";if((e.includes("chrome/")||jm(e))&&!e.includes("edge/"))return"Chrome";if(Km(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function qm(t=qe()){return/firefox\//i.test(t)}function Vu(t=qe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function jm(t=qe()){return/crios\//i.test(t)}function zm(t=qe()){return/iemobile/i.test(t)}function Km(t=qe()){return/android/i.test(t)}function Gm(t=qe()){return/blackberry/i.test(t)}function Qm(t=qe()){return/webos/i.test(t)}function Ca(t=qe()){return/iphone|ipad|ipod/i.test(t)}function oS(t=qe()){var e;return Ca(t)&&!!((e=window.navigator)===null||e===void 0?void 0:e.standalone)}function aS(){return PT()&&document.documentMode===10}function Ym(t=qe()){return Ca(t)||Km(t)||Qm(t)||Gm(t)||/windows phone/i.test(t)||zm(t)}function lS(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jm(t,e=[]){let n;switch(t){case"Browser":n=Vm(qe());break;case"Worker":n=`${Vm(qe())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ui}/${s}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cS{constructor(e,n){this.app=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Xm(this),this.idTokenSubscription=new Xm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Om,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=pn(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await fi.create(this,e),!this._deleted)){if((s=this._popupRedirectResolver)===null||s===void 0?void 0:s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let s=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,r=s==null?void 0:s._redirectEventId,o=await this.tryRedirectSignIn(e);(!i||i===r)&&(o==null?void 0:o.user)&&(s=o.user)}return s?s._redirectEventId?(Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)):this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ia(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=qC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?De(e):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(pn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ds("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&pn(e)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await fi.create(this,[pn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return Q(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Jm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={["X-Client-Version"]:this.clientVersion};return this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId),e}}function Sa(t){return De(t)}class Xm{constructor(e){this.auth=e,this.observer=null,this.addObserver=$T(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return fn("not implemented")}_getIdTokenResponse(e){return fn("not implemented")}_linkToIdToken(e,n){return fn("not implemented")}_getReauthenticationResolver(e){return fn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function di(t,e){return GC(t,"POST","/v1/accounts:signInWithIdp",KC(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uS="http://localhost";class ys extends Zm{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new ys(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Yt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=Lu(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new ys(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return di(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,di(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,di(e,n)}buildRequest(){const e={requestUri:uS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ci(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr extends qu{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It extends Sr{constructor(){super("facebook.com")}static credential(e){return ys._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return It.credential(e.oauthAccessToken)}catch{return null}}}It.FACEBOOK_SIGN_IN_METHOD="facebook.com";It.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt extends Sr{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return ys._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Tt.credential(n,s)}catch{return null}}}Tt.GOOGLE_SIGN_IN_METHOD="google.com";Tt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends Sr{constructor(){super("github.com")}static credential(e){return ys._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Un.credential(e.oauthAccessToken)}catch{return null}}}Un.GITHUB_SIGN_IN_METHOD="github.com";Un.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct extends Sr{constructor(){super("twitter.com")}static credential(e,n){return ys._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Ct.credential(n,s)}catch{return null}}}Ct.TWITTER_SIGN_IN_METHOD="twitter.com";Ct.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await _s._fromIdTokenResponse(e,s,i),o=e_(s);return new pi({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=e_(s);return new pi({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function e_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka extends hn{constructor(e,n,s,i){var r;super(n.code,n.message);this.operationType=s,this.user=i,Object.setPrototypeOf(this,ka.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new ka(e,n,s,i)}}function t_(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?ka._fromErrorAndOperation(t,r,e,s):r})}async function hS(t,e,n=!1){const s=await hi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return pi._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fS(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await hi(t,t_(s,i,e,t),n);Q(r.idToken,s,"internal-error");const o=Wu(r.idToken);Q(o,s,"internal-error");const{sub:a}=o;return Q(t.uid===a,s,"user-mismatch"),pi._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Yt(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n_(t,e,n=!1){const s="signIn",i=await t_(t,s,e),r=await pi._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function ju(t,e){return n_(Sa(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dS(t,e){return Ir(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zu(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const s=De(t),r={idToken:await s.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await hi(s,dS(s.auth,r));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const a=s.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=s.displayName,a.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function pS(t,e,n,s){return De(t).onAuthStateChanged(e,n,s)}function gS(t){return De(t).signOut()}const Ra="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ra,"1"),this.storage.removeItem(Ra),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mS(){const t=qe();return Vu(t)||Ca(t)}const _S=1e3,yS=10;class i_ extends s_{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=mS()&&lS(),this.fallbackToPolling=Ym(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);aS()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,yS):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},_S)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}i_.type="LOCAL";const vS=i_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_ extends s_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}r_.type="SESSION";const o_=r_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wS(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Aa(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o==null?void 0:o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await wS(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Aa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ku(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Ku("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const f=h;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(f.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(){return window}function ES(t){Xt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a_(){return typeof Xt().WorkerGlobalScope!="undefined"&&typeof Xt().importScripts=="function"}async function IS(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function TS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function CS(){return a_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l_="firebaseLocalStorageDb",SS=1,Na="firebaseLocalStorage",c_="fbase_key";class kr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Pa(t,e){return t.transaction([Na],e?"readwrite":"readonly").objectStore(Na)}function kS(){const t=indexedDB.deleteDatabase(l_);return new kr(t).toPromise()}function Gu(){const t=indexedDB.open(l_,SS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Na,{keyPath:c_})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Na)?e(s):(s.close(),await kS(),e(await Gu()))})})}async function u_(t,e,n){const s=Pa(t,!0).put({[c_]:e,value:n});return new kr(s).toPromise()}async function RS(t,e){const n=Pa(t,!1).get(e),s=await new kr(n).toPromise();return s===void 0?null:s.value}function h_(t,e){const n=Pa(t,!0).delete(e);return new kr(n).toPromise()}const AS=800,NS=3;class f_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Gu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>NS)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return a_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Aa._getInstance(CS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await IS(),!this.activeServiceWorker)return;this.sender=new bS(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||TS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Gu();return await u_(e,Ra,"1"),await h_(e,Ra),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>u_(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>RS(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>h_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Pa(i,!1).getAll();return new kr(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),AS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}f_.type="LOCAL";const PS=f_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function MS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=Jt("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",OS().appendChild(s)})}function xS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Er(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d_(t,e){return e?pn(e):(Q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu extends Zm{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return di(e,this._buildIdpRequest())}_linkToIdToken(e,n){return di(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return di(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function DS(t){return n_(t.auth,new Qu(t),t.bypassAuthState)}function LS(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),fS(n,new Qu(t),t.bypassAuthState)}async function FS(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),hS(n,new Qu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return DS;case"linkViaPopup":case"linkViaRedirect":return FS;case"reauthViaPopup":case"reauthViaRedirect":return LS;default:Yt(this.auth,"internal-error")}}resolve(e){dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const US=new Er(2e3,1e4);async function Yu(t,e,n){const s=Sa(t);BC(t,e,qu);const i=d_(s,n);return new vs(s,"signInViaPopup",e,i).executeNotNull()}class vs extends p_{constructor(e,n,s,i,r){super(e,n,i,r);this.provider=s,this.authWindow=null,this.pollId=null,vs.currentPopupAction&&vs.currentPopupAction.cancel(),vs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){dn(this.filter.length===1,"Popup operations only handle one event");const e=Ku();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Jt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Jt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,vs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0?void 0:s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Jt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,US.get())};e()}}vs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BS="pendingRedirect",Ju=new Map;class HS extends p_{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s);this.eventId=null}async execute(){let e=Ju.get(this.auth._key());if(!e){try{const s=await $S(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Ju.set(this.auth._key(),e)}return this.bypassAuthState||Ju.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function $S(t,e){const n=VS(e),s=WS(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function WS(t){return pn(t._redirectPersistence)}function VS(t){return Ta(BS,t.config.apiKey,t.name)}async function qS(t,e,n=!1){const s=Sa(t),i=d_(s,e),o=await new HS(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jS=10*60*1e3;class zS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!KS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!m_(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Jt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=jS&&this.cachedEventUids.clear(),this.cachedEventUids.has(g_(e))}saveEventToCache(e){this.cachedEventUids.add(g_(e)),this.lastProcessedEventTime=Date.now()}}function g_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function m_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function KS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return m_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GS(t,e={}){return Ir(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,YS=/^https?/;async function JS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await GS(t);for(const n of e)try{if(XS(n))return}catch{}Yt(t,"unauthorized-domain")}function XS(t){const e=Uu(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!YS.test(n))return!1;if(QS.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZS=new Er(3e4,6e4);function __(){const t=Xt().___jsl;if(t==null?void 0:t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function e2(t){return new Promise((e,n)=>{var s,i,r;function o(){__(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{__(),n(Jt(t,"network-request-failed"))},timeout:ZS.get()})}if((i=(s=Xt().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0?void 0:i.Iframe)e(gapi.iframes.getContext());else if((r=Xt().gapi)===null||r===void 0?void 0:r.load)o();else{const a=xS("iframefcb");return Xt()[a]=()=>{gapi.load?o():n(Jt(t,"network-request-failed"))},MS(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Oa=null,e})}let Oa=null;function t2(t){return Oa=Oa||e2(t),Oa}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n2=new Er(5e3,15e3),s2="__/auth/iframe",i2="emulator/auth/iframe",r2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},o2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function a2(t){const e=t.config;Q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Bu(e,i2):`https://${t.config.authDomain}/${s2}`,s={apiKey:e.apiKey,appName:t.name,v:ui},i=o2.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${ci(s).slice(1)}`}async function l2(t){const e=await t2(t),n=Xt().gapi;return Q(n,t,"internal-error"),e.open({where:document.body,url:a2(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:r2,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Jt(t,"network-request-failed"),a=Xt().setTimeout(()=>{r(o)},n2.get());function l(){Xt().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},u2=500,h2=600,f2="_blank",d2="http://localhost";class y_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function p2(t,e,n,s=u2,i=h2){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},c2),{width:s.toString(),height:i.toString(),top:r,left:o}),c=qe().toLowerCase();n&&(a=jm(c)?f2:n),qm(c)&&(e=e||d2,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[d,p])=>`${f}${d}=${p},`,"");if(oS(c)&&a!=="_self")return g2(e||"",a),new y_(null);const h=window.open(e||"",a,u);Q(h,t,"popup-blocked");try{h.focus()}catch{}return new y_(h)}function g2(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m2="__/auth/handler",_2="emulator/auth/handler";function v_(t,e,n,s,i,r){Q(t.config.authDomain,t,"auth-domain-config-required"),Q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:ui,eventId:i};if(e instanceof qu){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Nu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(r||{}))o[l]=c}if(e instanceof Sr){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${y2(t)}?${ci(a).slice(1)}`}function y2({config:t}){return t.emulator?Bu(t,_2):`https://${t.authDomain}/${m2}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xu="webStorageSupport";class v2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=o_,this._completeRedirectFn=qS}async _openPopup(e,n,s,i){var r;dn((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=v_(e,n,s,Uu(),i);return p2(e,o,Ku())}async _openRedirect(e,n,s,i){return await this._originValidation(e),ES(v_(e,n,s,Uu(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(dn(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await l2(e),s=new zS(e);return n.register("authEvent",i=>(Q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Xu,{type:Xu},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Xu];o!==void 0&&n(!!o),Yt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=JS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ym()||Vu()||Ca()}}const w2=v2;var w_="@firebase/auth",b_="0.19.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var i;e(((i=s)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E2(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function I2(t){Qt(new Mt("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),{apiKey:i,authDomain:r}=s.options;return(o=>{Q(i&&!i.includes(":"),"invalid-api-key",{appName:o.name}),Q(!(r==null?void 0:r.includes(":")),"argument-error",{appName:o.name});const a={apiKey:i,authDomain:r,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Jm(t)},l=new cS(o,a);return $C(l,n),l})(s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Qt(new Mt("auth-internal",e=>{const n=Sa(e.getProvider("auth").getImmediate());return(s=>new b2(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),tt(w_,b_,E2(t)),tt(w_,b_,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T2(t=Du()){const e=ms(t,"auth");return e.isInitialized()?e.getImmediate():HC(t,{popupRedirectResolver:w2,persistence:[PS,vS,o_]})}I2("Browser");const E_="@firebase/database",I_="0.12.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let T_="";function C2(t){T_=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S2{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Oe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:wr(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k2{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Ot(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_=function(t){try{if(typeof window!="undefined"&&typeof window[t]!="undefined"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new S2(e)}}catch{}return new k2},ws=C_("localStorage"),Zu=C_("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gi=new va("@firebase/database"),S_=function(){let t=1;return function(){return t++}}(),k_=function(t){const e=qT(t),n=new HT;n.update(e);const s=n.digest();return ku.encodeByteArray(s)},Rr=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Rr.apply(null,s):typeof s=="object"?e+=Oe(s):e+=s,e+=" "}return e};let bs=null,R_=!0;const R2=function(t,e){D(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(gi.logLevel=_e.VERBOSE,bs=gi.log.bind(gi),e&&Zu.set("logging_enabled",!0)):typeof t=="function"?bs=t:(bs=null,Zu.remove("logging_enabled"))},je=function(...t){if(R_===!0&&(R_=!1,bs===null&&Zu.get("logging_enabled")===!0&&R2(!0)),bs){const e=Rr.apply(null,t);bs(e)}},Ar=function(t){return function(...e){je(t,...e)}},eh=function(...t){const e="FIREBASE INTERNAL ERROR: "+Rr(...t);gi.error(e)},Es=function(...t){const e=`FIREBASE FATAL ERROR: ${Rr(...t)}`;throw gi.error(e),new Error(e)},gt=function(...t){const e="FIREBASE WARNING: "+Rr(...t);gi.warn(e)},A2=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&gt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},th=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},N2=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Is="[MIN_NAME]",Bn="[MAX_NAME]",mi=function(t,e){if(t===e)return 0;if(t===Is||e===Bn)return-1;if(e===Is||t===Bn)return 1;{const n=P_(t),s=P_(e);return n!==null?s!==null?n-s==0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},P2=function(t,e){return t===e?0:t<e?-1:1},Nr=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Oe(e))},nh=function(t){if(typeof t!="object"||t===null)return Oe(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Oe(e[s]),n+=":",n+=nh(t[e[s]]);return n+="}",n},A_=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function nt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const N_=function(t){D(!th(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t==-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},O2=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},M2=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function x2(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const D2=new RegExp("^-?(0*)\\d{1,10}$"),L2=-2147483648,F2=2147483647,P_=function(t){if(D2.test(t)){const e=Number(t);if(e>=L2&&e<=F2)return e}return null},Pr=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw gt("Exception was thrown by user callback.",n),e},Math.floor(0))}},U2=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Or=function(t,e){const n=setTimeout(t,e);return typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B2{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){gt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H2{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(je("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',gt(e)}}class sh{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}sh.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ih="5",O_="v",M_="s",x_="r",D_="f",L_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,F_="ls",$2="p",rh="ac",U_="websocket",B_="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W2{constructor(e,n,s,i,r=!1,o="",a=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ws.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ws.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function V2(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function H_(t,e,n){D(typeof e=="string","typeof type must == string"),D(typeof n=="object","typeof params must == object");let s;if(e===U_)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===B_)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);V2(t)&&(n.ns=t.namespace);const i=[];return nt(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q2{constructor(){this.counters_={}}incrementCounter(e,n=1){Ot(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return AT(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oh={},ah={};function lh(t){const e=t.toString();return oh[e]||(oh[e]=new q2),oh[e]}function j2(t,e){const n=t.toString();return ah[n]||(ah[n]=e()),ah[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z2{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Pr(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $_="start",K2="close",G2="pLPCommand",Q2="pRTLPCB",W_="id",V_="pw",q_="ser",Y2="cb",J2="seg",X2="ts",Z2="d",ek="dframe",j_=1870,z_=30,tk=j_-z_,nk=25e3,sk=3e4;class _i{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ar(e),this.stats_=lh(n),this.urlFn=l=>(this.appCheckToken&&(l[rh]=this.appCheckToken),H_(n,B_,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new z2(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(sk)),N2(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ch((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===$_)this.id=a,this.password=l;else if(o===K2)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[$_]="t",s[q_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Y2]=this.scriptTagHolder.uniqueCallbackIdentifier),s[O_]=ih,this.transportSessionId&&(s[M_]=this.transportSessionId),this.lastSessionId&&(s[F_]=this.lastSessionId),this.applicationId&&(s[$2]=this.applicationId),this.appCheckToken&&(s[rh]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&L_.test(location.hostname)&&(s[x_]=D_);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){_i.forceAllow_=!0}static forceDisallow(){_i.forceDisallow_=!0}static isAvailable(){return _i.forceAllow_?!0:!_i.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!O2()&&!M2()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Oe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=RT(n),i=A_(s,tk);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[ek]="t",s[W_]=e,s[V_]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Oe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class ch{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=S_(),window[G2+this.uniqueCallbackIdentifier]=e,window[Q2+this.uniqueCallbackIdentifier]=n,this.myIFrame=ch.createIFrame_();let r="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,"javascript:".length)==="javascript:"){const a=document.domain;r='<script>document.domain="'+a+'";<\/script>'}const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){je("frame writing exception"),a.stack&&je(a.stack),je(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||je("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[W_]=this.myID,e[V_]=this.myPW,e[q_]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+z_+s.length<=j_;){const o=this.pendingSegs.shift();s=s+"&"+J2+i+"="+o.seg+"&"+X2+i+"="+o.ts+"&"+Z2+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(nk)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{je("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ik=16384,rk=45e3;let Ma=null;typeof MozWebSocket!="undefined"?Ma=MozWebSocket:typeof WebSocket!="undefined"&&(Ma=WebSocket);class xt{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ar(this.connId),this.stats_=lh(n),this.connURL=xt.connectionURL_(n,o,a,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i){const r={};return r[O_]=ih,typeof location!="undefined"&&location.hostname&&L_.test(location.hostname)&&(r[x_]=D_),n&&(r[M_]=n),s&&(r[F_]=s),i&&(r[rh]=i),H_(e,U_,r)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ws.set("previous_websocket_failure",!0);try{if(!Cm()){const s={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new Ma(this.connURL,[],s)}}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){xt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Ma!==null&&!xt.forceDisallow_}static previouslyFailed(){return ws.isInMemoryStorage||ws.get("previous_websocket_failure")===!0}markConnectionHealthy(){ws.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=wr(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(D(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Oe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=A_(n,ik);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(rk))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}xt.responsesRequiredToBeHealthy=2;xt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[_i,xt]}initTransports_(e){const n=xt&&xt.isAvailable();let s=n&&!xt.previouslyFailed();if(e.webSocketOnly&&(n||gt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[xt];else{const i=this.transports_=[];for(const r of uh.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ok=6e4,ak=5e3,lk=10*1024,ck=100*1024,hh="t",K_="d",uk="s",G_="r",hk="e",Q_="o",Y_="a",J_="n",X_="p",fk="h";class dk{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ar("c:"+this.id+":"),this.transportManager_=new uh(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Or(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>ck?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>lk?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(hh in e){const n=e[hh];n===Y_?this.upgradeIfSecondaryHealthy_():n===G_?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Q_&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Nr("t",e),s=Nr("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:X_,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Y_,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:J_,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Nr("t",e),s=Nr("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Nr(hh,e);if(K_ in e){const s=e[K_];if(n===fk)this.onHandshake_(s);else if(n===J_){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===uk?this.onConnectionShutdown_(s):n===G_?this.onReset_(s):n===hk?eh("Server Error: "+s):n===Q_?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):eh("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),ih!==s&&gt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Or(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(ok))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Or(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(ak))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:X_,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ws.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0{constructor(e){this.allowedEvents_=e,this.listeners_={},D(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){D(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa extends e0{constructor(){super(["online"]);this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!Au()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new xa}getInitialEvent(e){return D(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t0=32,n0=768;class fe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function oe(){return new fe("")}function Z(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Hn(t){return t.pieces_.length-t.pieceNum_}function ye(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new fe(t.pieces_,e)}function s0(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function pk(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function i0(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function r0(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new fe(e,0)}function Me(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof fe)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new fe(n,0)}function ee(t){return t.pieceNum_>=t.pieces_.length}function Ye(t,e){const n=Z(t),s=Z(e);if(n===null)return e;if(n===s)return Ye(ye(t),ye(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function fh(t,e){if(Hn(t)!==Hn(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Dt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Hn(t)>Hn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class gk{constructor(e,n){this.errorPrefix_=n,this.parts_=i0(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=ya(this.parts_[s]);o0(this)}}function mk(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ya(e),o0(t)}function _k(t){const e=t.parts_.pop();t.byteLength_-=ya(e),t.parts_.length>0&&(t.byteLength_-=1)}function o0(t){if(t.byteLength_>n0)throw new Error(t.errorPrefix_+"has a key path longer than "+n0+" bytes ("+t.byteLength_+").");if(t.parts_.length>t0)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+t0+") or object contains a cycle "+Ts(t))}function Ts(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh extends e0{constructor(){super(["visible"]);let e,n;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(n="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new dh}getInitialEvent(e){return D(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr=1e3,yk=60*5*1e3,vk=3*1e3,a0=30*1e3,wk=1.3,bk=3e4,Ek="server_kill",l0=3;class gn extends Z_{constructor(e,n,s,i,r,o,a,l){super();if(this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=gn.nextPersistentConnectionId_++,this.log_=Ar("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Mr,this.maxReconnectDelay_=yk,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Cm())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");dh.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&xa.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Oe(r)),D(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new ga,s={p:e._path.toString(),q:e._queryObject},i={action:"g",request:s,onComplete:o=>{const a=o.d;o.s==="ok"?(this.onDataUpdate_(s.p,a,!1,null),n.resolve(a)):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const o=this.outstandingGets_[r];o===void 0||i!==o||(delete this.outstandingGets_[r],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),this.log_("get "+r+" timed out on connection"),n.reject(new Error("Client is offline.")))},vk),this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),D(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;gn.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Ot(e,"w")){const s=ps(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();gt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||BT(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=a0)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=UT(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Oe(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):eh("Unrecognized action received from server: "+Oe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){D(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Mr,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Mr,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>bk&&(this.reconnectDelay_=Mr),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*wk)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+gn.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){D(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?je("getToken() completed but was canceled"):(je("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,a=new dk(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,d=>{gt(d+" ("+this.repoInfo_.toString()+")"),this.interrupt(Ek)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&gt(h),l())}}}interrupt(e){je("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){je("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Nu(this.interruptReasons_)&&(this.reconnectDelay_=Mr,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>nh(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new fe(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){je("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=l0&&(this.reconnectDelay_=a0,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){je("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=l0&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+T_.replace(/\./g,"-")]=1,Au()?e["framework.cordova"]=1:Tm()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=xa.getInstance().currentlyOnline();return Nu(this.interruptReasons_)&&e}}gn.nextPersistentConnectionId_=0;gn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new te(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new te(Is,e),i=new te(Is,n);return this.compare(s,i)!==0}minPost(){return te.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let La;class c0 extends Da{static get __EMPTY_NODE(){return La}static set __EMPTY_NODE(e){La=e}compare(e,n){return mi(e.name,n.name)}isDefinedOn(e){throw li("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return te.MIN}maxPost(){return new te(Bn,La)}makePost(e,n){return D(typeof e=="string","KeyIndex indexValue must always be a string."),new te(e,La)}toString(){return".key"}}const $n=new c0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Le{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:Le.RED,this.left=i!=null?i:st.EMPTY_NODE,this.right=r!=null?r:st.EMPTY_NODE}copy(e,n,s,i,r){return new Le(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return st.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return st.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Le.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Le.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Le.RED=!0;Le.BLACK=!1;class Ik{copy(e,n,s,i,r){return this}insert(e,n,s){return new Le(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class st{constructor(e,n=st.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new st(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Le.BLACK,null,null))}remove(e){return new st(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Le.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Fa(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Fa(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Fa(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Fa(this.root_,null,this.comparator_,!0,e)}}st.EMPTY_NODE=new Ik;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tk(t,e){return mi(t.name,e.name)}function ph(t,e){return mi(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gh;function Ck(t){gh=t}const u0=function(t){return typeof t=="number"?"number:"+N_(t):"string:"+t},h0=function(t){if(t.isLeafNode()){const e=t.val();D(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ot(e,".sv"),"Priority must be a string or number.")}else D(t===gh||t.isEmpty(),"priority of unexpected type.");D(t===gh||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let f0;class Fe{constructor(e,n=Fe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,D(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),h0(this.priorityNode_)}static set __childrenNodeConstructor(e){f0=e}static get __childrenNodeConstructor(){return f0}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Fe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Fe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ee(e)?this:Z(e)===".priority"?this.priorityNode_:Fe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Fe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=Z(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(D(s!==".priority"||Hn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Fe.__childrenNodeConstructor.EMPTY_NODE.updateChild(ye(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+u0(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=N_(this.value_):e+=this.value_,this.lazyHash_=k_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Fe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Fe.__childrenNodeConstructor?-1:(D(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Fe.VALUE_TYPE_ORDER.indexOf(n),r=Fe.VALUE_TYPE_ORDER.indexOf(s);return D(i>=0,"Unknown leaf type: "+n),D(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Fe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let d0,p0;function Sk(t){d0=t}function kk(t){p0=t}class Rk extends Da{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?mi(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return te.MIN}maxPost(){return new te(Bn,new Fe("[PRIORITY-POST]",p0))}makePost(e,n){const s=d0(e);return new te(n,new Fe("[PRIORITY-POST]",s))}toString(){return".priority"}}const Ie=new Rk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ak=Math.log(2);class Nk{constructor(e){const n=r=>parseInt(Math.log(r)/Ak,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ua=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let h,f;if(u===0)return null;if(u===1)return h=t[l],f=n?n(h):h,new Le(f,h.node,Le.BLACK,null,null);{const d=parseInt(u/2,10)+l,p=i(l,d),v=i(d+1,c);return h=t[d],f=n?n(h):h,new Le(f,h.node,Le.BLACK,p,v)}},r=function(l){let c=null,u=null,h=t.length;const f=function(p,v){const m=h-p,y=h;h-=p;const g=i(m+1,y),_=t[m],w=n?n(_):_;d(new Le(w,_.node,v,null,g))},d=function(p){c?(c.left=p,c=p):(u=p,c=p)};for(let p=0;p<l.count;++p){const v=l.nextBitIsOne(),m=Math.pow(2,l.count-(p+1));v?f(m,Le.BLACK):(f(m,Le.BLACK),f(m,Le.RED))}return u},o=new Nk(t.length),a=r(o);return new st(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mh;const yi={};class mn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return D(yi&&Ie,"ChildrenNode.ts has not been loaded"),mh=mh||new mn({".priority":yi},{".priority":Ie}),mh}get(e){const n=ps(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof st?n:null}hasIndex(e){return Ot(this.indexSet_,e.toString())}addIndex(e,n){D(e!==$n,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(te.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Ua(s,e.getCompare()):a=yi;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new mn(u,c)}addToIndexes(e,n){const s=ma(this.indexes_,(i,r)=>{const o=ps(this.indexSet_,r);if(D(o,"Missing index implementation for "+r),i===yi)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(te.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Ua(a,o.getCompare())}else return yi;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new te(e.name,a))),l.insert(e,e.node)}});return new mn(s,this.indexSet_)}removeFromIndexes(e,n){const s=ma(this.indexes_,i=>{if(i===yi)return i;{const r=n.get(e.name);return r?i.remove(new te(e.name,r)):i}});return new mn(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xr;class z{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&h0(this.priorityNode_),this.children_.isEmpty()&&D(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return xr||(xr=new z(new st(ph),null,mn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||xr}updatePriority(e){return this.children_.isEmpty()?this:new z(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?xr:n}}getChild(e){const n=Z(e);return n===null?this:this.getImmediateChild(n).getChild(ye(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(D(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new te(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?xr:this.priorityNode_;return new z(i,o,r)}}updateChild(e,n){const s=Z(e);if(s===null)return n;{D(Z(e)!==".priority"||Hn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(ye(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(Ie,(o,a)=>{n[o]=a.val(e),s++,r&&z.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+u0(this.getPriority().val())+":"),this.forEachChild(Ie,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":k_(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new te(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new te(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new te(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,te.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,te.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Dr?-1:0}withIndex(e){if(e===$n||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new z(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===$n||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Ie),i=n.getIterator(Ie);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===$n?null:this.indexMap_.get(e.toString())}}z.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Pk extends z{constructor(){super(new st(ph),z.EMPTY_NODE,mn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return z.EMPTY_NODE}isEmpty(){return!1}}const Dr=new Pk;Object.defineProperties(te,{MIN:{value:new te(Is,z.EMPTY_NODE)},MAX:{value:new te(Bn,Dr)}});c0.__EMPTY_NODE=z.EMPTY_NODE;Fe.__childrenNodeConstructor=z;Ck(Dr);kk(Dr);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ok=!0;function Ue(t,e=null){if(t===null)return z.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),D(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Fe(n,Ue(e))}if(!(t instanceof Array)&&Ok){const n=[];let s=!1;if(nt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ue(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new te(o,l)))}}),n.length===0)return z.EMPTY_NODE;const r=Ua(n,Tk,o=>o.name,ph);if(s){const o=Ua(n,Ie.getCompare());return new z(r,Ue(e),new mn({".priority":o},{".priority":Ie}))}else return new z(r,Ue(e),mn.Default)}else{let n=z.EMPTY_NODE;return nt(t,(s,i)=>{if(Ot(t,s)&&s.substring(0,1)!=="."){const r=Ue(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Ue(e))}}Sk(Ue);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h extends Da{constructor(e){super();this.indexPath_=e,D(!ee(e)&&Z(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?mi(e.name,n.name):r}makePost(e,n){const s=Ue(e),i=z.EMPTY_NODE.updateChild(this.indexPath_,s);return new te(n,i)}maxPost(){const e=z.EMPTY_NODE.updateChild(this.indexPath_,Dr);return new te(Bn,e)}toString(){return i0(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mk extends Da{compare(e,n){const s=e.node.compareTo(n.node);return s===0?mi(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return te.MIN}maxPost(){return te.MAX}makePost(e,n){const s=Ue(e);return new te(n,s)}toString(){return".value"}}const g0=new Mk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m0(t){return{type:"value",snapshotNode:t}}function vi(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Lr(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Fr(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function xk(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){D(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Lr(n,a)):D(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(vi(n,s)):o.trackChildChange(Fr(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Ie,(i,r)=>{n.hasChild(i)||s.trackChildChange(Lr(i,r))}),n.isLeafNode()||n.forEachChild(Ie,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Fr(i,r,o))}else s.trackChildChange(vi(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?z.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e){this.indexedFilter_=new yh(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ur.getStartPost_(e),this.endPost_=Ur.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,s,i,r,o){return this.matches(new te(n,s))||(s=z.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=z.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(z.EMPTY_NODE);const r=this;return n.forEachChild(Ie,(o,a)=>{r.matches(new te(o,a))||(i=i.updateImmediateChild(o,z.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dk{constructor(e){this.rangedFilter_=new Ur(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new te(n,s))||(s=z.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=z.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=z.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();let l;if(this.reverse_?l=this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:l=this.index_.compare(a,this.rangedFilter_.getEndPost())<=0,l)i=i.updateImmediateChild(a.name,a.node),o++;else break}}else{i=n.withIndex(this.index_),i=i.updatePriority(z.EMPTY_NODE);let r,o,a,l;if(this.reverse_){l=i.getReverseIterator(this.index_),r=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const h=this.index_.getCompare();a=(f,d)=>h(d,f)}else l=i.getIterator(this.index_),r=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),a=this.index_.getCompare();let c=0,u=!1;for(;l.hasNext();){const h=l.getNext();!u&&a(r,h)<=0&&(u=!0),u&&c<this.limit_&&a(h,o)<=0?c++:i=i.updateImmediateChild(h.name,z.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(f,d)=>h(d,f)}else o=this.index_.getCompare();const a=e;D(a.numChildren()===this.limit_,"");const l=new te(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const d=f==null?1:o(f,l);if(u&&!s.isEmpty()&&d>=0)return r!=null&&r.trackChildChange(Fr(n,s,h)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(Lr(n,h));const v=a.updateImmediateChild(n,z.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(vi(f.name,f.node)),v.updateImmediateChild(f.name,f.node)):v}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Lr(c.name,c.node)),r.trackChildChange(vi(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,z.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ie}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return D(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return D(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Is}hasEnd(){return this.endSet_}getIndexEndValue(){return D(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return D(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Bn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return D(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ie}copy(){const e=new vh;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Lk(t){return t.loadsAllData()?new yh(t.getIndex()):t.hasLimit()?new Dk(t):new Ur(t)}function Fk(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="l",n}function Uk(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="r",n}function Bk(t,e,n){const s=t.copy();return s.startSet_=!0,e===void 0&&(e=null),s.indexStartValue_=e,n!=null?(s.startNameSet_=!0,s.indexStartName_=n):(s.startNameSet_=!1,s.indexStartName_=""),s}function Hk(t,e,n){const s=t.copy();return s.endSet_=!0,e===void 0&&(e=null),s.indexEndValue_=e,n!==void 0?(s.endNameSet_=!0,s.indexEndName_=n):(s.endNameSet_=!1,s.indexEndName_=""),s}function _0(t,e){const n=t.copy();return n.index_=e,n}function y0(t){const e={};if(t.isDefault())return e;let n;return t.index_===Ie?n="$priority":t.index_===g0?n="$value":t.index_===$n?n="$key":(D(t.index_ instanceof _h,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Oe(n),t.startSet_&&(e.startAt=Oe(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+Oe(t.indexStartName_))),t.endSet_&&(e.endAt=Oe(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+Oe(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function v0(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ie&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba extends Z_{constructor(e,n,s,i){super();this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Ar("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(D(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Ba.getListenId_(e,s),a={};this.listens_[o]=a;const l=y0(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),ps(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,n){const s=Ba.getListenId_(e,n);delete this.listens_[s]}get(e){const n=y0(e._queryParams),s=e._path.toString(),i=new ga;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ci(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=wr(a.responseText)}catch{gt("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&gt("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $k{constructor(){this.rootNode_=z.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ha(){return{value:null,children:new Map}}function w0(t,e,n){if(ee(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=Z(e);t.children.has(s)||t.children.set(s,Ha());const i=t.children.get(s);e=ye(e),w0(i,e,n)}}function wh(t,e,n){t.value!==null?n(e,t.value):Wk(t,(s,i)=>{const r=new fe(e.toString()+"/"+s);wh(i,r,n)})}function Wk(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vk{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&nt(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b0=10*1e3,qk=30*1e3,jk=5*60*1e3;class zk{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Vk(e);const s=b0+(qk-b0)*Math.random();Or(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;nt(e,(i,r)=>{r>0&&Ot(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Or(this.reportStats_.bind(this),Math.floor(Math.random()*2*jk))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Lt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Lt||(Lt={}));function E0(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function bh(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Eh(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Lt.ACK_USER_WRITE,this.source=E0()}operationForChild(e){if(ee(this.path)){if(this.affectedTree.value!=null)return D(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new fe(e));return new $a(oe(),n,this.revert)}}else return D(Z(this.path)===e,"operationForChild called for unrelated child."),new $a(ye(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e,n){this.source=e,this.path=n,this.type=Lt.LISTEN_COMPLETE}operationForChild(e){return ee(this.path)?new Br(this.source,oe()):new Br(this.source,ye(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Lt.OVERWRITE}operationForChild(e){return ee(this.path)?new Cs(this.source,oe(),this.snap.getImmediateChild(e)):new Cs(this.source,ye(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Lt.MERGE}operationForChild(e){if(ee(this.path)){const n=this.children.subtree(new fe(e));return n.isEmpty()?null:n.value?new Cs(this.source,oe(),n.value):new Hr(this.source,oe(),n)}else return D(Z(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Hr(this.source,ye(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ee(e))return this.isFullyInitialized()&&!this.filtered_;const n=Z(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kk{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Gk(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(xk(o.childName,o.snapshotNode))}),$r(t,i,"child_removed",e,s,n),$r(t,i,"child_added",e,s,n),$r(t,i,"child_moved",r,s,n),$r(t,i,"child_changed",e,s,n),$r(t,i,"value",e,s,n),i}function $r(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>Yk(t,a,l)),o.forEach(a=>{const l=Qk(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function Qk(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Yk(t,e,n){if(e.childName==null||n.childName==null)throw li("Should only compare child_ events.");const s=new te(e.childName,e.snapshotNode),i=new te(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wa(t,e){return{eventCache:t,serverCache:e}}function Wr(t,e,n,s){return Wa(new Wn(e,n,s),t.serverCache)}function I0(t,e,n,s){return Wa(t.eventCache,new Wn(e,n,s))}function Va(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Ss(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ih;const Jk=()=>(Ih||(Ih=new st(P2)),Ih);class be{constructor(e,n=Jk()){this.value=e,this.children=n}static fromObject(e){let n=new be(null);return nt(e,(s,i)=>{n=n.set(new fe(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:oe(),value:this.value};if(ee(e))return null;{const s=Z(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(ye(e),n);return r!=null?{path:Me(new fe(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ee(e))return this;{const n=Z(e),s=this.children.get(n);return s!==null?s.subtree(ye(e)):new be(null)}}set(e,n){if(ee(e))return new be(n,this.children);{const s=Z(e),r=(this.children.get(s)||new be(null)).set(ye(e),n),o=this.children.insert(s,r);return new be(this.value,o)}}remove(e){if(ee(e))return this.children.isEmpty()?new be(null):new be(null,this.children);{const n=Z(e),s=this.children.get(n);if(s){const i=s.remove(ye(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new be(null):new be(this.value,r)}else return this}}get(e){if(ee(e))return this.value;{const n=Z(e),s=this.children.get(n);return s?s.get(ye(e)):null}}setTree(e,n){if(ee(e))return n;{const s=Z(e),r=(this.children.get(s)||new be(null)).setTree(ye(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new be(this.value,o)}}fold(e){return this.fold_(oe(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(Me(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,oe(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(ee(e))return null;{const r=Z(e),o=this.children.get(r);return o?o.findOnPath_(ye(e),Me(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,oe(),n)}foreachOnPath_(e,n,s){if(ee(e))return this;{this.value&&s(n,this.value);const i=Z(e),r=this.children.get(i);return r?r.foreachOnPath_(ye(e),Me(n,i),s):new be(null)}}foreach(e){this.foreach_(oe(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(Me(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.writeTree_=e}static empty(){return new Ft(new be(null))}}function Vr(t,e,n){if(ee(e))return new Ft(new be(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Ye(i,e);return r=r.updateChild(o,n),new Ft(t.writeTree_.set(i,r))}else{const i=new be(n),r=t.writeTree_.setTree(e,i);return new Ft(r)}}}function T0(t,e,n){let s=t;return nt(n,(i,r)=>{s=Vr(s,Me(e,i),r)}),s}function C0(t,e){if(ee(e))return Ft.empty();{const n=t.writeTree_.setTree(e,new be(null));return new Ft(n)}}function Th(t,e){return ks(t,e)!=null}function ks(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ye(n.path,e)):null}function S0(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ie,(s,i)=>{e.push(new te(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new te(s,i.value))}),e}function Vn(t,e){if(ee(e))return t;{const n=ks(t,e);return n!=null?new Ft(new be(n)):new Ft(t.writeTree_.subtree(e))}}function Ch(t){return t.writeTree_.isEmpty()}function wi(t,e){return k0(oe(),t.writeTree_,e)}function k0(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(D(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=k0(Me(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Me(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qa(t,e){return O0(e,t)}function Xk(t,e,n,s,i){D(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Vr(t.visibleWrites,e,n)),t.lastWriteId=s}function Zk(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function eR(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);D(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&tR(a,s.path)?i=!1:Dt(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return nR(t),!0;if(s.snap)t.visibleWrites=C0(t.visibleWrites,s.path);else{const a=s.children;nt(a,l=>{t.visibleWrites=C0(t.visibleWrites,Me(s.path,l))})}return!0}else return!1}function tR(t,e){if(t.snap)return Dt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Dt(Me(t.path,n),e))return!0;return!1}function nR(t){t.visibleWrites=R0(t.allWrites,sR,oe()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function sR(t){return t.visible}function R0(t,e,n){let s=Ft.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)Dt(n,o)?(a=Ye(n,o),s=Vr(s,a,r.snap)):Dt(o,n)&&(a=Ye(o,n),s=Vr(s,oe(),r.snap.getChild(a)));else if(r.children){if(Dt(n,o))a=Ye(n,o),s=T0(s,a,r.children);else if(Dt(o,n))if(a=Ye(o,n),ee(a))s=T0(s,oe(),r.children);else{const l=ps(r.children,Z(a));if(l){const c=l.getChild(ye(a));s=Vr(s,oe(),c)}}}else throw li("WriteRecord should have .snap or .children")}}return s}function A0(t,e,n,s,i){if(!s&&!i){const r=ks(t.visibleWrites,e);if(r!=null)return r;{const o=Vn(t.visibleWrites,e);if(Ch(o))return n;if(n==null&&!Th(o,oe()))return null;{const a=n||z.EMPTY_NODE;return wi(o,a)}}}else{const r=Vn(t.visibleWrites,e);if(!i&&Ch(r))return n;if(!i&&n==null&&!Th(r,oe()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Dt(c.path,e)||Dt(e,c.path))},a=R0(t.allWrites,o,e),l=n||z.EMPTY_NODE;return wi(a,l)}}}function iR(t,e,n){let s=z.EMPTY_NODE;const i=ks(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Ie,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Vn(t.visibleWrites,e);return n.forEachChild(Ie,(o,a)=>{const l=wi(Vn(r,new fe(o)),a);s=s.updateImmediateChild(o,l)}),S0(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Vn(t.visibleWrites,e);return S0(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function rR(t,e,n,s,i){D(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=Me(e,n);if(Th(t.visibleWrites,r))return null;{const o=Vn(t.visibleWrites,r);return Ch(o)?i.getChild(n):wi(o,i.getChild(n))}}function oR(t,e,n,s){const i=Me(e,n),r=ks(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Vn(t.visibleWrites,i);return wi(o,s.getNode().getImmediateChild(n))}else return null}function aR(t,e){return ks(t.visibleWrites,e)}function lR(t,e,n,s,i,r,o){let a;const l=Vn(t.visibleWrites,e),c=ks(l,oe());if(c!=null)a=c;else if(n!=null)a=wi(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),f=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let d=f.getNext();for(;d&&u.length<i;)h(d,s)!==0&&u.push(d),d=f.getNext();return u}else return[]}function cR(){return{visibleWrites:Ft.empty(),allWrites:[],lastWriteId:-1}}function ja(t,e,n,s){return A0(t.writeTree,t.treePath,e,n,s)}function Sh(t,e){return iR(t.writeTree,t.treePath,e)}function N0(t,e,n,s){return rR(t.writeTree,t.treePath,e,n,s)}function za(t,e){return aR(t.writeTree,Me(t.treePath,e))}function uR(t,e,n,s,i,r){return lR(t.writeTree,t.treePath,e,n,s,i,r)}function kh(t,e,n){return oR(t.writeTree,t.treePath,e,n)}function P0(t,e){return O0(Me(t.treePath,e),t.writeTree)}function O0(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;D(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),D(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Fr(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Lr(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,vi(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Fr(s,e.snapshotNode,i.oldSnap));else throw li("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fR{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const M0=new fR;class Rh{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Wn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return kh(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ss(this.viewCache_),r=uR(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dR(t){return{filter:t}}function pR(t,e){D(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),D(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function gR(t,e,n,s,i){const r=new hR;let o,a;if(n.type===Lt.OVERWRITE){const c=n;c.source.fromUser?o=Ah(t,e,c.path,c.snap,s,i,r):(D(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!ee(c.path),o=Ka(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===Lt.MERGE){const c=n;c.source.fromUser?o=_R(t,e,c.path,c.children,s,i,r):(D(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Nh(t,e,c.path,c.children,s,i,a,r))}else if(n.type===Lt.ACK_USER_WRITE){const c=n;c.revert?o=wR(t,e,c.path,s,i,r):o=yR(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===Lt.LISTEN_COMPLETE)o=vR(t,e,n.path,s,r);else throw li("Unknown operation type: "+n.type);const l=r.getChanges();return mR(e,o,l),{viewCache:o,changes:l}}function mR(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Va(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(m0(Va(e)))}}function x0(t,e,n,s,i,r){const o=e.eventCache;if(za(s,n)!=null)return e;{let a,l;if(ee(n))if(D(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Ss(e),u=c instanceof z?c:z.EMPTY_NODE,h=Sh(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=ja(s,Ss(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=Z(n);if(c===".priority"){D(Hn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=N0(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=ye(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=N0(s,n,o.getNode(),l);f!=null?h=o.getNode().getImmediateChild(c).updateChild(u,f):h=o.getNode().getImmediateChild(c)}else h=kh(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return Wr(e,a,o.isFullyInitialized()||ee(n),t.filter.filtersNodes())}}function Ka(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(ee(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const d=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),d,null)}else{const d=Z(n);if(!l.isCompleteForPath(n)&&Hn(n)>1)return e;const p=ye(n),m=l.getNode().getImmediateChild(d).updateChild(p,s);d===".priority"?c=u.updatePriority(l.getNode(),m):c=u.updateChild(l.getNode(),d,m,p,M0,null)}const h=I0(e,c,l.isFullyInitialized()||ee(n),u.filtersNodes()),f=new Rh(i,h,r);return x0(t,h,n,i,f,a)}function Ah(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new Rh(i,e,r);if(ee(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Wr(e,c,!0,t.filter.filtersNodes());else{const h=Z(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=Wr(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=ye(n),d=a.getNode().getImmediateChild(h);let p;if(ee(f))p=s;else{const v=u.getCompleteChild(h);v!=null?s0(f)===".priority"&&v.getChild(r0(f)).isEmpty()?p=v:p=v.updateChild(f,s):p=z.EMPTY_NODE}if(d.equals(p))l=e;else{const v=t.filter.updateChild(a.getNode(),h,p,f,u,o);l=Wr(e,v,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function D0(t,e){return t.eventCache.isCompleteForChild(e)}function _R(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=Me(n,l);D0(e,Z(u))&&(a=Ah(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=Me(n,l);D0(e,Z(u))||(a=Ah(t,a,u,c,i,r,o))}),a}function L0(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Nh(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;ee(n)?c=s:c=new be(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const d=e.serverCache.getNode().getImmediateChild(h),p=L0(t,d,f);l=Ka(t,l,new fe(h),p,i,r,o,a)}}),c.children.inorderTraversal((h,f)=>{const d=!e.serverCache.isCompleteForChild(h)&&f.value===void 0;if(!u.hasChild(h)&&!d){const p=e.serverCache.getNode().getImmediateChild(h),v=L0(t,p,f);l=Ka(t,l,new fe(h),v,i,r,o,a)}}),l}function yR(t,e,n,s,i,r,o){if(za(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(ee(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Ka(t,e,n,l.getNode().getChild(n),i,r,a,o);if(ee(n)){let c=new be(null);return l.getNode().forEachChild($n,(u,h)=>{c=c.set(new fe(u),h)}),Nh(t,e,n,c,i,r,a,o)}else return e}else{let c=new be(null);return s.foreach((u,h)=>{const f=Me(n,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),Nh(t,e,n,c,i,r,a,o)}}function vR(t,e,n,s,i){const r=e.serverCache,o=I0(e,r.getNode(),r.isFullyInitialized()||ee(n),r.isFiltered());return x0(t,o,n,s,M0,i)}function wR(t,e,n,s,i,r){let o;if(za(s,n)!=null)return e;{const a=new Rh(s,e,i),l=e.eventCache.getNode();let c;if(ee(n)||Z(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=ja(s,Ss(e));else{const h=e.serverCache.getNode();D(h instanceof z,"serverChildren would be complete if leaf node"),u=Sh(s,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=Z(n);let h=kh(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,ye(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,z.EMPTY_NODE,ye(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ja(s,Ss(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||za(s,oe())!=null,Wr(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bR{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new yh(s.getIndex()),r=Lk(s);this.processor_=dR(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(z.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(z.EMPTY_NODE,a.getNode(),null),u=new Wn(l,o.isFullyInitialized(),i.filtersNodes()),h=new Wn(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Wa(h,u),this.eventGenerator_=new Kk(this.query_)}get query(){return this.query_}}function ER(t){return t.viewCache_.serverCache.getNode()}function IR(t){return Va(t.viewCache_)}function TR(t,e){const n=Ss(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ee(e)&&!n.getImmediateChild(Z(e)).isEmpty())?n.getChild(e):null}function F0(t){return t.eventRegistrations_.length===0}function CR(t,e){t.eventRegistrations_.push(e)}function U0(t,e,n){const s=[];if(n){D(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function B0(t,e,n,s){e.type===Lt.MERGE&&e.source.queryId!==null&&(D(Ss(t.viewCache_),"We should always have a full cache before handling merges"),D(Va(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=gR(t.processor_,i,e,n,s);return pR(t.processor_,r.viewCache),D(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,H0(t,r.changes,r.viewCache.eventCache.getNode(),null)}function SR(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Ie,(r,o)=>{s.push(vi(r,o))}),n.isFullyInitialized()&&s.push(m0(n.getNode())),H0(t,s,n.getNode(),e)}function H0(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return Gk(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ga;class $0{constructor(){this.views=new Map}}function kR(t){D(!Ga,"__referenceConstructor has already been defined"),Ga=t}function RR(){return D(Ga,"Reference.ts has not been loaded"),Ga}function AR(t){return t.views.size===0}function Ph(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return D(r!=null,"SyncTree gave us an op for an invalid query."),B0(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(B0(o,e,n,s));return r}}function W0(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=ja(n,i?s:null),l=!1;a?l=!0:s instanceof z?(a=Sh(n,s),l=!1):(a=z.EMPTY_NODE,l=!1);const c=Wa(new Wn(a,l,!1),new Wn(s,i,!1));return new bR(e,c)}return o}function NR(t,e,n,s,i,r){const o=W0(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),CR(o,n),SR(o,n)}function PR(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=jn(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(U0(c,n,s)),F0(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(U0(l,n,s)),F0(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!jn(t)&&r.push(new(RR())(e._repo,e._path)),{removed:r,events:o}}function V0(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function qn(t,e){let n=null;for(const s of t.views.values())n=n||TR(s,e);return n}function q0(t,e){if(e._queryParams.loadsAllData())return Qa(t);{const s=e._queryIdentifier;return t.views.get(s)}}function j0(t,e){return q0(t,e)!=null}function jn(t){return Qa(t)!=null}function Qa(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ya;function OR(t){D(!Ya,"__referenceConstructor has already been defined"),Ya=t}function MR(){return D(Ya,"Reference.ts has not been loaded"),Ya}let xR=1;class z0{constructor(e){this.listenProvider_=e,this.syncPointTree_=new be(null),this.pendingWriteTree_=cR(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function K0(t,e,n,s,i){return Xk(t.pendingWriteTree_,e,n,s,i),i?jr(t,new Cs(E0(),e,n)):[]}function bi(t,e,n=!1){const s=Zk(t.pendingWriteTree_,e);if(eR(t.pendingWriteTree_,e)){let r=new be(null);return s.snap!=null?r=r.set(oe(),!0):nt(s.children,o=>{r=r.set(new fe(o),!0)}),jr(t,new $a(s.path,r,n))}else return[]}function qr(t,e,n){return jr(t,new Cs(bh(),e,n))}function DR(t,e,n){const s=be.fromObject(n);return jr(t,new Hr(bh(),e,s))}function LR(t,e){return jr(t,new Br(bh(),e))}function FR(t,e,n){const s=xh(t,n);if(s){const i=Dh(s),r=i.path,o=i.queryId,a=Ye(r,e),l=new Br(Eh(o),a);return Lh(t,r,l)}else return[]}function Oh(t,e,n,s){const i=e._path,r=t.syncPointTree_.get(i);let o=[];if(r&&(e._queryIdentifier==="default"||j0(r,e))){const a=PR(r,e,n,s);AR(r)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const l=a.removed;o=a.events;const c=l.findIndex(h=>h._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(i,(h,f)=>jn(f));if(c&&!u){const h=t.syncPointTree_.subtree(i);if(!h.isEmpty()){const f=$R(h);for(let d=0;d<f.length;++d){const p=f[d],v=p.query,m=J0(t,p);t.listenProvider_.startListening(zr(v),Ja(t,v),m.hashFn,m.onComplete)}}}if(!u&&l.length>0&&!s)if(c){const h=null;t.listenProvider_.stopListening(zr(e),h)}else l.forEach(h=>{const f=t.queryToTagMap.get(Xa(h));t.listenProvider_.stopListening(zr(h),f)});WR(t,l)}return o}function UR(t,e,n,s){const i=xh(t,s);if(i!=null){const r=Dh(i),o=r.path,a=r.queryId,l=Ye(o,e),c=new Cs(Eh(a),l,n);return Lh(t,o,c)}else return[]}function BR(t,e,n,s){const i=xh(t,s);if(i){const r=Dh(i),o=r.path,a=r.queryId,l=Ye(o,e),c=be.fromObject(n),u=new Hr(Eh(a),l,c);return Lh(t,o,u)}else return[]}function G0(t,e,n){const s=e._path;let i=null,r=!1;t.syncPointTree_.foreachOnPath(s,(h,f)=>{const d=Ye(h,s);i=i||qn(f,d),r=r||jn(f)});let o=t.syncPointTree_.get(s);o?(r=r||jn(o),i=i||qn(o,oe())):(o=new $0,t.syncPointTree_=t.syncPointTree_.set(s,o));let a;i!=null?a=!0:(a=!1,i=z.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((f,d)=>{const p=qn(d,oe());p&&(i=i.updateImmediateChild(f,p))}));const l=j0(o,e);if(!l&&!e._queryParams.loadsAllData()){const h=Xa(e);D(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const f=VR();t.queryToTagMap.set(h,f),t.tagToQueryMap.set(f,h)}const c=qa(t.pendingWriteTree_,s);let u=NR(o,e,n,c,i,a);if(!l&&!r){const h=q0(o,e);u=u.concat(qR(t,e,h))}return u}function Mh(t,e,n){const s=!0,i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Ye(o,e),c=qn(a,l);if(c)return c});return A0(i,e,r,n,s)}function HR(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const h=Ye(c,n);s=s||qn(u,h)});let i=t.syncPointTree_.get(n);i?s=s||qn(i,oe()):(i=new $0,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new Wn(s,!0,!1):null,a=qa(t.pendingWriteTree_,e._path),l=W0(i,e,a,r?o.getNode():z.EMPTY_NODE,r);return IR(l)}function jr(t,e){return Q0(e,t.syncPointTree_,null,qa(t.pendingWriteTree_,oe()))}function Q0(t,e,n,s){if(ee(t.path))return Y0(t,e,n,s);{const i=e.get(oe());n==null&&i!=null&&(n=qn(i,oe()));let r=[];const o=Z(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=P0(s,o);r=r.concat(Q0(a,l,c,u))}return i&&(r=r.concat(Ph(i,t,s,n))),r}}function Y0(t,e,n,s){const i=e.get(oe());n==null&&i!=null&&(n=qn(i,oe()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=P0(s,o),u=t.operationForChild(o);u&&(r=r.concat(Y0(u,a,l,c)))}),i&&(r=r.concat(Ph(i,t,s,n))),r}function J0(t,e){const n=e.query,s=Ja(t,n);return{hashFn:()=>(ER(e)||z.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?FR(t,n._path,s):LR(t,n._path);{const r=x2(i,n);return Oh(t,n,null,r)}}}}function Ja(t,e){const n=Xa(e);return t.queryToTagMap.get(n)}function Xa(t){return t._path.toString()+"$"+t._queryIdentifier}function xh(t,e){return t.tagToQueryMap.get(e)}function Dh(t){const e=t.indexOf("$");return D(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new fe(t.substr(0,e))}}function Lh(t,e,n){const s=t.syncPointTree_.get(e);D(s,"Missing sync point for query tag that we're tracking");const i=qa(t.pendingWriteTree_,e);return Ph(s,n,i,null)}function $R(t){return t.fold((e,n,s)=>{if(n&&jn(n))return[Qa(n)];{let i=[];return n&&(i=V0(n)),nt(s,(r,o)=>{i=i.concat(o)}),i}})}function zr(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(MR())(t._repo,t._path):t}function WR(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Xa(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function VR(){return xR++}function qR(t,e,n){const s=e._path,i=Ja(t,e),r=J0(t,n),o=t.listenProvider_.startListening(zr(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)D(!jn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!ee(c)&&u&&jn(u))return[Qa(u).query];{let f=[];return u&&(f=f.concat(V0(u).map(d=>d.query))),nt(h,(d,p)=>{f=f.concat(p)}),f}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(zr(u),Ja(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Fh(n)}node(){return this.node_}}class Uh{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Me(this.path_,e);return new Uh(this.syncTree_,n)}node(){return Mh(this.syncTree_,this.path_)}}const jR=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},X0=function(t,e,n){if(!t||typeof t!="object")return t;if(D(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return zR(t[".sv"],e,n);if(typeof t[".sv"]=="object")return KR(t[".sv"],e);D(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},zR=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:D(!1,"Unexpected server value: "+t)}},KR=function(t,e,n){t.hasOwnProperty("increment")||D(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&D(!1,"Unexpected increment value: "+s);const i=e.node();if(D(i!==null&&typeof i!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},GR=function(t,e,n,s){return Bh(e,new Uh(n,t),s)},Z0=function(t,e,n){return Bh(t,new Fh(e),n)};function Bh(t,e,n){const s=t.getPriority().val(),i=X0(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=X0(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Fe(a,Ue(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Fe(i))),o.forEachChild(Ie,(a,l)=>{const c=Bh(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Za(t,e){let n=e instanceof fe?e:new fe(e),s=t,i=Z(n);for(;i!==null;){const r=ps(s.node.children,i)||{children:{},childCount:0};s=new Hh(i,s,r),n=ye(n),i=Z(n)}return s}function Rs(t){return t.node.value}function $h(t,e){t.node.value=e,Wh(t)}function ey(t){return t.node.childCount>0}function QR(t){return Rs(t)===void 0&&!ey(t)}function el(t,e){nt(t.node.children,(n,s)=>{e(new Hh(n,t,s))})}function ty(t,e,n,s){n&&!s&&e(t),el(t,i=>{ty(i,e,!0,s)}),n&&s&&e(t)}function YR(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Kr(t){return new fe(t.parent===null?t.name:Kr(t.parent)+"/"+t.name)}function Wh(t){t.parent!==null&&JR(t.parent,t.name,t)}function JR(t,e,n){const s=QR(n),i=Ot(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Wh(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Wh(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XR=/[\[\].#$\/\u0000-\u001F\u007F]/,ZR=/[\[\].#$\u0000-\u001F\u007F]/,Vh=10*1024*1024,qh=function(t){return typeof t=="string"&&t.length!==0&&!XR.test(t)},ny=function(t){return typeof t=="string"&&t.length!==0&&!ZR.test(t)},e3=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),ny(t)},jh=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!th(t)||t&&typeof t=="object"&&Ot(t,".sv")},sy=function(t,e,n,s){s&&e===void 0||tl(_a(t,"value"),e,n)},tl=function(t,e,n){const s=n instanceof fe?new gk(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ts(s));if(typeof e=="function")throw new Error(t+"contains a function "+Ts(s)+" with contents = "+e.toString());if(th(e))throw new Error(t+"contains "+e.toString()+" "+Ts(s));if(typeof e=="string"&&e.length>Vh/3&&ya(e)>Vh)throw new Error(t+"contains a string greater than "+Vh+" utf8 bytes "+Ts(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(nt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!qh(o)))throw new Error(t+" contains an invalid key ("+o+") "+Ts(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);mk(s,o),tl(t,a,s),_k(s)}),i&&r)throw new Error(t+' contains ".value" child '+Ts(s)+" in addition to actual children.")}},iy=function(t,e,n,s){if(!(s&&n===void 0)&&!qh(n))throw new Error(_a(t,e)+'was an invalid key = "'+n+`".  Firebase keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]").`)},zh=function(t,e,n,s){if(!(s&&n===void 0)&&!ny(n))throw new Error(_a(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},t3=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),zh(t,e,n,s)},n3=function(t,e){if(Z(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},s3=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!qh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!e3(n))throw new Error(_a(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i3{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ry(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!fh(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Kh(t,e,n){ry(t,n),oy(t,s=>fh(s,e))}function zn(t,e,n){ry(t,n),oy(t,s=>Dt(s,e)||Dt(e,s))}function oy(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(r3(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function r3(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();bs&&je("event: "+n.toString()),Pr(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o3="repo_interrupt",a3=25;class l3{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new i3,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ha(),this.transactionQueueTree_=new Hh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function c3(t,e,n){if(t.stats_=lh(t.repoInfo_),t.forceRestClient_||U2())t.server_=new Ba(t.repoInfo_,(s,i,r,o)=>{ay(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>ly(t,!0),0);else{if(typeof n!="undefined"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Oe(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new gn(t.repoInfo_,e,(s,i,r,o)=>{ay(t,s,i,r,o)},s=>{ly(t,s)},s=>{h3(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=j2(t.repoInfo_,()=>new zk(t.stats_,t.server_)),t.infoData_=new $k,t.infoSyncTree_=new z0({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=qr(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Qh(t,"connected",!1),t.serverSyncTree_=new z0({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);zn(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function u3(t){const n=t.infoData_.getNode(new fe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Gh(t){return jR({timestamp:u3(t)})}function ay(t,e,n,s,i){t.dataUpdateCount++;const r=new fe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=ma(n,c=>Ue(c));o=BR(t.serverSyncTree_,r,l,i)}else{const l=Ue(n);o=UR(t.serverSyncTree_,r,l,i)}else if(s){const l=ma(n,c=>Ue(c));o=DR(t.serverSyncTree_,r,l)}else{const l=Ue(n);o=qr(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Xh(t,r)),zn(t.eventQueue_,a,o)}function ly(t,e){Qh(t,"connected",e),e===!1&&d3(t)}function h3(t,e){nt(e,(n,s)=>{Qh(t,n,s)})}function Qh(t,e,n){const s=new fe("/.info/"+e),i=Ue(n);t.infoData_.updateSnapshot(s,i);const r=qr(t.infoSyncTree_,s,i);zn(t.eventQueue_,s,r)}function cy(t){return t.nextWriteId_++}function f3(t,e){const n=HR(t.serverSyncTree_,e);return n!=null?Promise.resolve(n):t.server_.get(e).then(s=>{const i=Ue(s).withIndex(e._queryParams.getIndex()),r=qr(t.serverSyncTree_,e._path,i);return Kh(t.eventQueue_,e._path,r),Promise.resolve(i)},s=>(nl(t,"get for query "+Oe(e)+" failed: "+s),Promise.reject(new Error(s))))}function d3(t){nl(t,"onDisconnectEvents");const e=Gh(t),n=Ha();wh(t.onDisconnect_,oe(),(i,r)=>{const o=GR(i,r,t.serverSyncTree_,e);w0(n,i,o)});let s=[];wh(n,oe(),(i,r)=>{s=s.concat(qr(t.serverSyncTree_,i,r));const o=v3(t,i);Xh(t,o)}),t.onDisconnect_=Ha(),zn(t.eventQueue_,oe(),s)}function p3(t,e,n){let s;Z(e._path)===".info"?s=G0(t.infoSyncTree_,e,n):s=G0(t.serverSyncTree_,e,n),Kh(t.eventQueue_,e._path,s)}function Yh(t,e,n){let s;Z(e._path)===".info"?s=Oh(t.infoSyncTree_,e,n):s=Oh(t.serverSyncTree_,e,n),Kh(t.eventQueue_,e._path,s)}function g3(t){t.persistentConnection_&&t.persistentConnection_.interrupt(o3)}function nl(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),je(n,...e)}function m3(t,e,n,s,i,r){nl(t,"transaction on "+e);const o={path:e,update:n,onComplete:s,status:null,order:S_(),applyLocally:r,retryCount:0,unwatcher:i,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=Jh(t,e,void 0);o.currentInputSnapshot=a;const l=o.update(a.val());if(l===void 0)o.unwatcher(),o.currentOutputSnapshotRaw=null,o.currentOutputSnapshotResolved=null,o.onComplete&&o.onComplete(null,!1,o.currentInputSnapshot);else{tl("transaction failed: Data returned ",l,o.path),o.status=0;const c=Za(t.transactionQueueTree_,e),u=Rs(c)||[];u.push(o),$h(c,u);let h;typeof l=="object"&&l!==null&&Ot(l,".priority")?(h=ps(l,".priority"),D(jh(h),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):h=(Mh(t.serverSyncTree_,e)||z.EMPTY_NODE).getPriority().val();const f=Gh(t),d=Ue(l,h),p=Z0(d,a,f);o.currentOutputSnapshotRaw=d,o.currentOutputSnapshotResolved=p,o.currentWriteId=cy(t);const v=K0(t.serverSyncTree_,e,p,o.currentWriteId,o.applyLocally);zn(t.eventQueue_,e,v),sl(t,t.transactionQueueTree_)}}function Jh(t,e,n){return Mh(t.serverSyncTree_,e,n)||z.EMPTY_NODE}function sl(t,e=t.transactionQueueTree_){if(e||il(t,e),Rs(e)){const n=hy(t,e);D(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&_3(t,Kr(e),n)}else ey(e)&&el(e,n=>{sl(t,n)})}function _3(t,e,n){const s=n.map(c=>c.currentWriteId),i=Jh(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];D(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Ye(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{nl(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(bi(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();il(t,Za(t.transactionQueueTree_,e)),sl(t,t.transactionQueueTree_),zn(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)Pr(h[f])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{gt("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Xh(t,e)}},o)}function Xh(t,e){const n=uy(t,e),s=Kr(n),i=hy(t,n);return y3(t,i,s),s}function y3(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Ye(n,l.path);let u=!1,h;if(D(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(bi(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=a3)u=!0,h="maxretry",i=i.concat(bi(t.serverSyncTree_,l.currentWriteId,!0));else{const f=Jh(t,l.path,o);l.currentInputSnapshot=f;const d=e[a].update(f.val());if(d!==void 0){tl("transaction failed: Data returned ",d,l.path);let p=Ue(d);typeof d=="object"&&d!=null&&Ot(d,".priority")||(p=p.updatePriority(f.getPriority()));const m=l.currentWriteId,y=Gh(t),g=Z0(p,f,y);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=g,l.currentWriteId=cy(t),o.splice(o.indexOf(m),1),i=i.concat(K0(t.serverSyncTree_,l.path,g,l.currentWriteId,l.applyLocally)),i=i.concat(bi(t.serverSyncTree_,m,!0))}else u=!0,h="nodata",i=i.concat(bi(t.serverSyncTree_,l.currentWriteId,!0))}zn(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}il(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Pr(s[a]);sl(t,t.transactionQueueTree_)}function uy(t,e){let n,s=t.transactionQueueTree_;for(n=Z(e);n!==null&&Rs(s)===void 0;)s=Za(s,n),e=ye(e),n=Z(e);return s}function hy(t,e){const n=[];return fy(t,e,n),n.sort((s,i)=>s.order-i.order),n}function fy(t,e,n){const s=Rs(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);el(e,i=>{fy(t,i,n)})}function il(t,e){const n=Rs(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,$h(e,n.length>0?n:void 0)}el(e,s=>{il(t,s)})}function v3(t,e){const n=Kr(uy(t,e)),s=Za(t.transactionQueueTree_,e);return YR(s,i=>{Zh(t,i)}),Zh(t,s),ty(s,i=>{Zh(t,i)}),n}function Zh(t,e){const n=Rs(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(D(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(D(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(bi(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?$h(e,void 0):n.length=r+1,zn(t.eventQueue_,Kr(e),i);for(let o=0;o<s.length;o++)Pr(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w3(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function b3(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):gt(`Invalid query segment '${n}' in query '${t}'`)}return e}const dy=function(t,e){const n=E3(t),s=n.namespace;n.domain==="firebase.com"&&Es(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Es("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||A2();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new W2(n.host,n.secure,s,e,i,"",s!==n.subdomain),path:new fe(n.pathString)}},E3=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=w3(t.substring(u,h)));const f=b3(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const d=e.slice(0,c);if(d.toLowerCase()==="localhost")n="localhost";else if(d.split(".").length<=2)n=d;else{const p=e.indexOf(".");s=e.substring(0,p).toLowerCase(),n=e.substring(p+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Oe(this.snapshot.exportVal())}}class gy{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return D(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return ee(this._path)?null:s0(this._path)}get ref(){return new Ut(this._repo,this._path)}get _queryIdentifier(){const e=v0(this._queryParams),n=nh(e);return n==="{}"?"default":n}get _queryObject(){return v0(this._queryParams)}isEqual(e){if(e=De(e),!(e instanceof _n))return!1;const n=this._repo===e._repo,s=fh(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+pk(this._path)}}function _y(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function rl(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===$n){const s="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==Is)throw new Error(s);if(typeof e!="string")throw new Error(i)}if(t.hasEnd()){if(t.getIndexEndName()!==Bn)throw new Error(s);if(typeof n!="string")throw new Error(i)}}else if(t.getIndex()===Ie){if(e!=null&&!jh(e)||n!=null&&!jh(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(D(t.getIndex()instanceof _h||t.getIndex()===g0,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function yy(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class Ut extends _n{constructor(e,n){super(e,n,new vh,!1)}get parent(){const e=r0(this._path);return e===null?null:new Ut(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class As{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new fe(e),s=ol(this.ref,e);return new As(this._node.getChild(n),s,Ie)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new As(i,ol(this.ref,s),Ie)))}hasChild(e){const n=new fe(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function de(t,e){return t=De(t),t._checkNotDeleted("ref"),e!==void 0?ol(t._root,e):t._root}function ol(t,e){return t=De(t),Z(t._path)===null?t3("child","path",e,!1):zh("child","path",e,!1),new Ut(t._repo,Me(t._path,e))}function St(t){return t=De(t),f3(t._repo,t).then(e=>new As(e,new Ut(t._repo,t._path),t._queryParams.getIndex()))}class al{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new py("value",this,new As(e.snapshotNode,new Ut(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new gy(this,e,n):null}matches(e){return e instanceof al?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class ll{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new gy(this,e,n):null}createEvent(e,n){D(e.childName!=null,"Child events should have a childName.");const s=ol(new Ut(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new py(e.type,this,new As(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof ll?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function I3(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const l=n,c=(u,h)=>{Yh(t._repo,t,a),l(u,h)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new my(n,r||void 0),a=e==="value"?new al(o):new ll(e,o);return p3(t._repo,t,a),()=>Yh(t._repo,t,a)}function ef(t,e,n,s){return I3(t,"value",e,n,s)}function vy(t,e,n){let s=null;const i=n?new my(n):null;e==="value"?s=new al(i):e&&(s=new ll(e,i)),Yh(t._repo,t,s)}class Ei{}class T3 extends Ei{constructor(e,n){super();this._value=e,this._key=n}_apply(e){sy("endAt",this._value,e._path,!0);const n=Hk(e._queryParams,this._value,this._key);if(yy(n),rl(n),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new _n(e._repo,e._path,n,e._orderByCalled)}}function C3(t,e){return iy("endAt","key",e,!0),new T3(t,e)}class S3 extends Ei{constructor(e,n){super();this._value=e,this._key=n}_apply(e){sy("startAt",this._value,e._path,!0);const n=Bk(e._queryParams,this._value,this._key);if(yy(n),rl(n),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new _n(e._repo,e._path,n,e._orderByCalled)}}function tf(t=null,e){return iy("startAt","key",e,!0),new S3(t,e)}class k3 extends Ei{constructor(e){super();this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new _n(e._repo,e._path,Fk(e._queryParams,this._limit),e._orderByCalled)}}function nf(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new k3(t)}class R3 extends Ei{constructor(e){super();this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new _n(e._repo,e._path,Uk(e._queryParams,this._limit),e._orderByCalled)}}function cl(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new R3(t)}class A3 extends Ei{constructor(e){super();this._path=e}_apply(e){_y(e,"orderByChild");const n=new fe(this._path);if(ee(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const s=new _h(n),i=_0(e._queryParams,s);return rl(i),new _n(e._repo,e._path,i,!0)}}function ul(t){if(t==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(t==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(t==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return zh("orderByChild","path",t,!1),new A3(t)}class N3 extends Ei{_apply(e){_y(e,"orderByKey");const n=_0(e._queryParams,$n);return rl(n),new _n(e._repo,e._path,n,!0)}}function sf(){return new N3}function Ns(t,...e){let n=De(t);for(const s of e)n=s._apply(n);return n}kR(Ut);OR(Ut);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P3="FIREBASE_DATABASE_EMULATOR_HOST",rf={};let O3=!1;function M3(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Es("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),je("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=dy(r,i),a=o.repoInfo,l,c;typeof process!="undefined"&&(c=process.env[P3]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=dy(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new sh(sh.OWNER):new H2(t.name,t.options,e);s3("Invalid Firebase Database URL",o),ee(o.path)||Es("Database URL must point to the root of a Firebase Database (not including a child path).");const h=D3(a,t,u,new B2(t.name,n));return new L3(h,t)}function x3(t,e){const n=rf[e];(!n||n[t.key]!==t)&&Es(`Database ${e}(${t.repoInfo_}) has already been deleted.`),g3(t),delete n[t.key]}function D3(t,e,n,s){let i=rf[e.name];i||(i={},rf[e.name]=i);let r=i[t.toURLString()];return r&&Es("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new l3(t,O3,n,s),i[t.toURLString()]=r,r}class L3{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(c3(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ut(this._repo,oe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(x3(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Es("Cannot call "+e+" on a deleted database.")}}function F3(t=Du(),e){return ms(t,"database").getImmediate({identifier:e})}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U3(t){C2(ui),Qt(new Mt("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return M3(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),tt(E_,I_,t),tt(E_,I_,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B3{constructor(e,n){this.committed=e,this.snapshot=n}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}function kt(t,e,n){var s;if(t=De(t),n3("Reference.transaction",t._path),t.key===".length"||t.key===".keys")throw"Reference.transaction failed: "+t.key+" is a read-only object.";const i=(s=n==null?void 0:n.applyLocally)!==null&&s!==void 0?s:!0,r=new ga,o=(l,c,u)=>{let h=null;l?r.reject(l):(h=new As(u,new Ut(t._repo,t._path),Ie),r.resolve(new B3(c,h)))},a=ef(t,()=>{});return m3(t._repo,t._path,e,o,a,i),r.promise}gn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};gn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};U3();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wy="firebasestorage.googleapis.com",by="storageBucket",H3=2*60*1e3,$3=10*60*1e3;class ke extends hn{constructor(e,n){super(of(e),`Firebase Storage: ${n} (${of(e)})`);this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ke.prototype)}_codeEquals(e){return of(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function of(t){return"storage/"+t}function af(){const t="An unknown error occurred, please check the error payload for server response.";return new ke("unknown",t)}function W3(t){return new ke("object-not-found","Object '"+t+"' does not exist.")}function V3(t){return new ke("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function q3(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ke("unauthenticated",t)}function j3(){return new ke("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function z3(t){return new ke("unauthorized","User does not have permission to access '"+t+"'.")}function K3(){return new ke("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function Ey(){return new ke("canceled","User canceled the upload/download.")}function G3(t){return new ke("invalid-url","Invalid URL '"+t+"'.")}function Q3(t){return new ke("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function Y3(){return new ke("no-default-bucket","No default bucket found. Did you set the '"+by+"' property when initializing the app?")}function Iy(){return new ke("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function J3(){return new ke("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.")}function X3(){return new ke("no-download-url","The given file does not have any download URLs.")}function lf(t){return new ke("invalid-argument",t)}function Ty(){return new ke("app-deleted","The Firebase app was deleted.")}function Z3(t){return new ke("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Gr(t,e){return new ke("invalid-format","String does not match format '"+t+"': "+e)}function Qr(t){throw new ke("internal-error","Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=mt.makeFromUrl(e,n)}catch{return new mt(e,"")}if(s.path==="")return s;throw Q3(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(w){w.path.charAt(w.path.length-1)==="/"&&(w.path_=w.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(w){w.path_=decodeURIComponent(w.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",d=new RegExp(`^https?://${h}/${u}/b/${i}/o${f}`,"i"),p={bucket:1,path:3},v=n===wy?"(?:storage.googleapis.com|storage.cloud.google.com)":n,m="([^?#]*)",y=new RegExp(`^https?://${v}/${i}/${m}`,"i"),_=[{regex:a,indices:l,postModify:r},{regex:d,indices:p,postModify:c},{regex:y,indices:{bucket:1,path:2},postModify:c}];for(let w=0;w<_.length;w++){const T=_[w],I=T.regex.exec(e);if(I){const E=I[T.indices.bucket];let C=I[T.indices.path];C||(C=""),s=new mt(E,C),T.postModify(s);break}}if(s==null)throw G3(e);return s}}class e6{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t6(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...m){c||(c=!0,e.apply(null,m))}function h(m){i=setTimeout(()=>{i=null,t(d,l())},m)}function f(){r&&clearTimeout(r)}function d(m,...y){if(c){f();return}if(m){f(),u.call(null,m,...y);return}if(l()||o){f(),u.call(null,m,...y);return}s<64&&(s*=2);let _;a===1?(a=2,_=0):_=(s+Math.random())*1e3,h(_)}let p=!1;function v(m){p||(p=!0,f(),!c&&(i!==null?(m||(a=2),clearTimeout(i),h(0)):m||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,v(!0)},n),v}function n6(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s6(t){return t!==void 0}function i6(t){return typeof t=="function"}function r6(t){return typeof t=="object"&&!Array.isArray(t)}function hl(t){return typeof t=="string"||t instanceof String}function Cy(t){return cf()&&t instanceof Blob}function cf(){return typeof Blob!="undefined"}function Sy(t,e,n,s){if(s<e)throw lf(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw lf(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yr(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function ky(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ps;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Ps||(Ps={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o6{constructor(e,n,s,i,r,o,a,l,c,u,h){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,d)=>{this.resolve_=f,this.reject_=d,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new fl(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===Ps.NO_ERROR,l=r.getStatus();if(!a||this.isRetryStatusCode_(l)){const u=r.getErrorCode()===Ps.ABORT;s(!1,new fl(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;s(!0,new fl(c,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());s6(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=af();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?Ty():Ey();o(l)}else{const l=K3();o(l)}};this.canceled_?n(!1,new fl(!1,null,!0)):this.backoffId_=t6(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&n6(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,r=this.additionalRetryCodes_.indexOf(e)!==-1;return n||i||r}}class fl{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function a6(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function l6(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function c6(t,e){e&&(t["X-Firebase-GMPID"]=e)}function u6(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function h6(t,e,n,s,i,r){const o=ky(t.urlParams),a=t.url+o,l=Object.assign({},t.headers);return c6(l,e),a6(l,n),l6(l,r),u6(l,s),new o6(a,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f6(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function d6(...t){const e=f6();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(cf())return new Blob(t);throw new ke("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function p6(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g6(t){return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class uf{constructor(e,n){this.data=e,this.contentType=n||null}}function m6(t,e){switch(t){case Zt.RAW:return new uf(Ry(e));case Zt.BASE64:case Zt.BASE64URL:return new uf(Ay(t,e));case Zt.DATA_URL:return new uf(y6(e),v6(e))}throw af()}function Ry(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)==55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)==56320))e.push(239,191,189);else{const r=s,o=t.charCodeAt(++n);s=65536|(r&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)==56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function _6(t){let e;try{e=decodeURIComponent(t)}catch{throw Gr(Zt.DATA_URL,"Malformed data URL.")}return Ry(e)}function Ay(t,e){switch(t){case Zt.BASE64:{const i=e.indexOf("-")!==-1,r=e.indexOf("_")!==-1;if(i||r)throw Gr(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Zt.BASE64URL:{const i=e.indexOf("+")!==-1,r=e.indexOf("/")!==-1;if(i||r)throw Gr(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=g6(e)}catch{throw Gr(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let i=0;i<n.length;i++)s[i]=n.charCodeAt(i);return s}class Ny{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Gr(Zt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=w6(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-";base64".length):s),this.rest=e.substring(e.indexOf(",")+1)}}function y6(t){const e=new Ny(t);return e.base64?Ay(Zt.BASE64,e.rest):_6(e.rest)}function v6(t){return new Ny(t).contentType}function w6(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e,n){let s=0,i="";Cy(e)?(this.data_=e,s=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Cy(this.data_)){const s=this.data_,i=p6(s,e,n);return i===null?null:new Kn(i)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new Kn(s,!0)}}static getBlob(...e){if(cf()){const n=e.map(s=>s instanceof Kn?s.data_:s);return new Kn(d6.apply(null,n))}else{const n=e.map(o=>hl(o)?m6(Zt.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const i=new Uint8Array(s);let r=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[r++]=o[a]}),new Kn(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Py(t){let e;try{e=JSON.parse(t)}catch{return null}return r6(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b6(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function E6(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function Oy(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I6(t,e){return e}class Je{constructor(e,n,s,i){this.server=e,this.local=n||e,this.writable=!!s,this.xform=i||I6}}let dl=null;function T6(t){return!hl(t)||t.length<2?t:Oy(t)}function My(){if(dl)return dl;const t=[];t.push(new Je("bucket")),t.push(new Je("generation")),t.push(new Je("metageneration")),t.push(new Je("name","fullPath",!0));function e(r,o){return T6(o)}const n=new Je("name");n.xform=e,t.push(n);function s(r,o){return o!==void 0?Number(o):o}const i=new Je("size");return i.xform=s,t.push(i),t.push(new Je("timeCreated")),t.push(new Je("updated")),t.push(new Je("md5Hash",null,!0)),t.push(new Je("cacheControl",null,!0)),t.push(new Je("contentDisposition",null,!0)),t.push(new Je("contentEncoding",null,!0)),t.push(new Je("contentLanguage",null,!0)),t.push(new Je("contentType",null,!0)),t.push(new Je("metadata","customMetadata",!0)),dl=t,dl}function C6(t,e){function n(){const s=t.bucket,i=t.fullPath,r=new mt(s,i);return e._makeStorageReference(r)}Object.defineProperty(t,"ref",{get:n})}function S6(t,e,n){const s={};s.type="file";const i=n.length;for(let r=0;r<i;r++){const o=n[r];s[o.local]=o.xform(s,e[o.server])}return C6(s,t),s}function xy(t,e,n){const s=Py(e);return s===null?null:S6(t,s,n)}function k6(t,e,n,s){const i=Py(e);if(i===null||!hl(i.downloadTokens))return null;const r=i.downloadTokens;if(r.length===0)return null;const o=encodeURIComponent;return r.split(",").map(c=>{const u=t.bucket,h=t.fullPath,f="/b/"+o(u)+"/o/"+o(h),d=Yr(f,n,s),p=ky({alt:"media",token:c});return d+p})[0]}function Dy(t,e){const n={},s=e.length;for(let i=0;i<s;i++){const r=e[i];r.writable&&(n[r.server]=t[r.local])}return JSON.stringify(n)}class Ii{constructor(e,n,s,i){this.url=e,this.method=n,this.handler=s,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(t){if(!t)throw af()}function hf(t,e){function n(s,i){const r=xy(t,i,e);return yn(r!==null),r}return n}function R6(t,e){function n(s,i){const r=xy(t,i,e);return yn(r!==null),k6(r,i,t.host,t._protocol)}return n}function Jr(t){function e(n,s){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=j3():i=q3():n.getStatus()===402?i=V3(t.bucket):n.getStatus()===403?i=z3(t.path):i=s,i.serverResponse=s.serverResponse,i}return e}function Ly(t){const e=Jr(t);function n(s,i){let r=e(s,i);return s.getStatus()===404&&(r=W3(t.path)),r.serverResponse=i.serverResponse,r}return n}function A6(t,e,n){const s=e.fullServerUrl(),i=Yr(s,t.host,t._protocol),r="GET",o=t.maxOperationRetryTime,a=new Ii(i,r,hf(t,n),o);return a.errorHandler=Ly(e),a}function N6(t,e,n){const s=e.fullServerUrl(),i=Yr(s,t.host,t._protocol),r="GET",o=t.maxOperationRetryTime,a=new Ii(i,r,R6(t,n),o);return a.errorHandler=Ly(e),a}function P6(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Fy(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=P6(null,e)),s}function O6(t,e,n,s,i){const r=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let _="";for(let w=0;w<2;w++)_=_+Math.random().toString().slice(2);return _}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=Fy(e,s,i),u=Dy(c,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,f=`\r
--`+l+"--",d=Kn.getBlob(h,s,f);if(d===null)throw Iy();const p={name:c.fullPath},v=Yr(r,t.host,t._protocol),m="POST",y=t.maxUploadRetryTime,g=new Ii(v,m,hf(t,n),y);return g.urlParams=p,g.headers=o,g.body=d.uploadData(),g.errorHandler=Jr(e),g}class pl{constructor(e,n,s,i){this.current=e,this.total=n,this.finalized=!!s,this.metadata=i||null}}function ff(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{yn(!1)}return yn(!!n&&(e||["active"]).indexOf(n)!==-1),n}function M6(t,e,n,s,i){const r=e.bucketOnlyServerUrl(),o=Fy(e,s,i),a={name:o.fullPath},l=Yr(r,t.host,t._protocol),c="POST",u={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${s.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=Dy(o,n),f=t.maxUploadRetryTime;function d(v){ff(v);let m;try{m=v.getResponseHeader("X-Goog-Upload-URL")}catch{yn(!1)}return yn(hl(m)),m}const p=new Ii(l,c,d,f);return p.urlParams=a,p.headers=u,p.body=h,p.errorHandler=Jr(e),p}function x6(t,e,n,s){const i={"X-Goog-Upload-Command":"query"};function r(c){const u=ff(c,["active","final"]);let h=null;try{h=c.getResponseHeader("X-Goog-Upload-Size-Received")}catch{yn(!1)}h||yn(!1);const f=Number(h);return yn(!isNaN(f)),new pl(f,s.size(),u==="final")}const o="POST",a=t.maxUploadRetryTime,l=new Ii(n,o,r,a);return l.headers=i,l.errorHandler=Jr(e),l}const Uy=256*1024;function D6(t,e,n,s,i,r,o,a){const l=new pl(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=s.size()),s.size()!==l.total)throw J3();const c=l.total-l.current;let u=c;i>0&&(u=Math.min(u,i));const h=l.current,f=h+u,p={"X-Goog-Upload-Command":u===c?"upload, finalize":"upload","X-Goog-Upload-Offset":`${l.current}`},v=s.slice(h,f);if(v===null)throw Iy();function m(w,T){const I=ff(w,["active","final"]),E=l.current+u,C=s.size();let k;return I==="final"?k=hf(e,r)(w,T):k=null,new pl(E,C,I==="final",k)}const y="POST",g=e.maxUploadRetryTime,_=new Ii(n,y,m,g);return _.headers=p,_.body=v.uploadData(),_.progressCallback=a||null,_.errorHandler=Jr(t),_}const it={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function df(t){switch(t){case"running":case"pausing":case"canceling":return it.RUNNING;case"paused":return it.PAUSED;case"success":return it.SUCCESS;case"canceled":return it.CANCELED;case"error":return it.ERROR;default:return it.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L6{constructor(e,n,s){if(i6(e)||n!=null||s!=null)this.next=e,this.error=n!=null?n:void 0,this.complete=s!=null?s:void 0;else{const r=e;this.next=r.next,this.error=r.error,this.complete=r.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class F6{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ps.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ps.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ps.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,i){if(this.sent_)throw Qr("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const r in i)i.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,i[r].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Qr("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Qr("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Qr("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Qr("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class U6 extends F6{initXhr(){this.xhr_.responseType="text"}}function Ci(){return new U6}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B6{constructor(e,n,s=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=s,this._mappings=My(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{this._request=void 0,this._chunkMultiplier=1,i._codeEquals("canceled")?(this._needToFetchStatus=!0,this.completeTransitions_()):(this._error=i,this._transition("error"))},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals("canceled")?this.completeTransitions_():(this._error=i,this._transition("error"))},this._promise=new Promise((i,r)=>{this._resolve=i,this._reject=r,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this._continueUpload():this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,s])=>{switch(this._state){case"running":e(n,s);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const s=M6(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(s,Ci,e,n);this._request=i,i.getPromise().then(r=>{this._request=void 0,this._uploadUrl=r,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,s)=>{const i=x6(this._ref.storage,this._ref._location,e,this._blob),r=this._ref.storage._makeRequest(i,Ci,n,s);this._request=r,r.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=Uy*this._chunkMultiplier,n=new pl(this._transferred,this._blob.size()),s=this._uploadUrl;this._resolveToken((i,r)=>{let o;try{o=D6(this._ref._location,this._ref.storage,s,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const a=this._ref.storage._makeRequest(o,Ci,i,r);this._request=a,a.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Uy*this._chunkMultiplier<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const s=A6(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(s,Ci,e,n);this._request=i,i.getPromise().then(r=>{this._request=void 0,this._metadata=r,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const s=O6(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(s,Ci,e,n);this._request=i,i.getPromise().then(r=>{this._request=void 0,this._metadata=r,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":this._state=e,this._request!==void 0&&this._request.cancel();break;case"pausing":this._state=e,this._request!==void 0&&this._request.cancel();break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=Ey(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=df(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,s,i){const r=new L6(n||void 0,s||void 0,i||void 0);return this._addObserver(r),()=>{this._removeObserver(r)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(df(this._state)){case it.SUCCESS:Ti(this._resolve.bind(null,this.snapshot))();break;case it.CANCELED:case it.ERROR:const n=this._reject;Ti(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(df(this._state)){case it.RUNNING:case it.PAUSED:e.next&&Ti(e.next.bind(e,this.snapshot))();break;case it.SUCCESS:e.complete&&Ti(e.complete.bind(e))();break;case it.CANCELED:case it.ERROR:e.error&&Ti(e.error.bind(e,this._error))();break;default:e.error&&Ti(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e,n){this._service=e,n instanceof mt?this._location=n:this._location=mt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Os(e,n)}get root(){const e=new mt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Oy(this._location.path)}get storage(){return this._service}get parent(){const e=b6(this._location.path);if(e===null)return null;const n=new mt(this._location.bucket,e);return new Os(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Z3(e)}}function H6(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new B6(t,new Kn(e),n)}function $6(t){t._throwIfRoot("getDownloadURL");const e=N6(t.storage,t._location,My());return t.storage.makeRequestWithTokens(e,Ci).then(n=>{if(n===null)throw X3();return n})}function W6(t,e){const n=E6(t._location.path,e),s=new mt(t._location.bucket,n);return new Os(t.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V6(t){return/^[A-Za-z]+:\/\//.test(t)}function q6(t,e){return new Os(t,e)}function By(t,e){if(t instanceof pf){const n=t;if(n._bucket==null)throw Y3();const s=new Os(n,n._bucket);return e!=null?By(s,e):s}else return e!==void 0?W6(t,e):t}function j6(t,e){if(e&&V6(e)){if(t instanceof pf)return q6(t,e);throw lf("To use ref(service, url), the first argument must be a Storage instance.")}else return By(t,e)}function Hy(t,e){const n=e==null?void 0:e[by];return n==null?null:mt.makeFromBucketSpec(n,t)}class pf{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=wy,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=H3,this._maxUploadRetryTime=$3,this._requests=new Set,i!=null?this._bucket=mt.makeFromBucketSpec(i,this._host):this._bucket=Hy(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=mt.makeFromBucketSpec(this._url,e):this._bucket=Hy(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Sy("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Sy("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Os(this,e)}_makeRequest(e,n,s,i){if(this._deleted)return new e6(Ty());{const r=h6(e,this._appId,s,i,n,this._firebaseVersion);return this._requests.add(r),r.getPromise().then(()=>this._requests.delete(r),()=>this._requests.delete(r)),r}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const $y="@firebase/storage",Wy="0.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vy="storage";function z6(t,e,n){return t=De(t),H6(t,e,n)}function Si(t){return t=De(t),$6(t)}function Ms(t,e){return t=De(t),j6(t,e)}function K6(t=Du(),e){return t=De(t),ms(t,Vy).getImmediate({identifier:e})}function G6(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new pf(n,s,i,e,ui)}function Q6(){Qt(new Mt(Vy,G6,"PUBLIC").setMultipleInstances(!0)),tt($y,Wy,""),tt($y,Wy,"esm2017")}Q6();function Y6(t){return Array.prototype.slice.call(t)}function qy(t){return new Promise(function(e,n){t.onsuccess=function(){e(t.result)},t.onerror=function(){n(t.error)}})}function gf(t,e,n){var s,i=new Promise(function(r,o){s=t[e].apply(t,n),qy(s).then(r,o)});return i.request=s,i}function J6(t,e,n){var s=gf(t,e,n);return s.then(function(i){if(!!i)return new Xr(i,s.request)})}function ki(t,e,n){n.forEach(function(s){Object.defineProperty(t.prototype,s,{get:function(){return this[e][s]},set:function(i){this[e][s]=i}})})}function mf(t,e,n,s){s.forEach(function(i){i in n.prototype&&(t.prototype[i]=function(){return gf(this[e],i,arguments)})})}function gl(t,e,n,s){s.forEach(function(i){i in n.prototype&&(t.prototype[i]=function(){return this[e][i].apply(this[e],arguments)})})}function jy(t,e,n,s){s.forEach(function(i){i in n.prototype&&(t.prototype[i]=function(){return J6(this[e],i,arguments)})})}function xs(t){this._index=t}ki(xs,"_index",["name","keyPath","multiEntry","unique"]);mf(xs,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]);jy(xs,"_index",IDBIndex,["openCursor","openKeyCursor"]);function Xr(t,e){this._cursor=t,this._request=e}ki(Xr,"_cursor",["direction","key","primaryKey","value"]);mf(Xr,"_cursor",IDBCursor,["update","delete"]);["advance","continue","continuePrimaryKey"].forEach(function(t){t in IDBCursor.prototype&&(Xr.prototype[t]=function(){var e=this,n=arguments;return Promise.resolve().then(function(){return e._cursor[t].apply(e._cursor,n),qy(e._request).then(function(s){if(!!s)return new Xr(s,e._request)})})})});function en(t){this._store=t}en.prototype.createIndex=function(){return new xs(this._store.createIndex.apply(this._store,arguments))};en.prototype.index=function(){return new xs(this._store.index.apply(this._store,arguments))};ki(en,"_store",["name","keyPath","indexNames","autoIncrement"]);mf(en,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]);jy(en,"_store",IDBObjectStore,["openCursor","openKeyCursor"]);gl(en,"_store",IDBObjectStore,["deleteIndex"]);function Zr(t){this._tx=t,this.complete=new Promise(function(e,n){t.oncomplete=function(){e()},t.onerror=function(){n(t.error)},t.onabort=function(){n(t.error)}})}Zr.prototype.objectStore=function(){return new en(this._tx.objectStore.apply(this._tx,arguments))};ki(Zr,"_tx",["objectStoreNames","mode"]);gl(Zr,"_tx",IDBTransaction,["abort"]);function ml(t,e,n){this._db=t,this.oldVersion=e,this.transaction=new Zr(n)}ml.prototype.createObjectStore=function(){return new en(this._db.createObjectStore.apply(this._db,arguments))};ki(ml,"_db",["name","version","objectStoreNames"]);gl(ml,"_db",IDBDatabase,["deleteObjectStore","close"]);function _l(t){this._db=t}_l.prototype.transaction=function(){return new Zr(this._db.transaction.apply(this._db,arguments))};ki(_l,"_db",["name","version","objectStoreNames"]);gl(_l,"_db",IDBDatabase,["close"]);["openCursor","openKeyCursor"].forEach(function(t){[en,xs].forEach(function(e){t in e.prototype&&(e.prototype[t.replace("open","iterate")]=function(){var n=Y6(arguments),s=n[n.length-1],i=this._store||this._index,r=i[t].apply(i,n.slice(0,-1));r.onsuccess=function(){s(r.result)}})})});[xs,en].forEach(function(t){t.prototype.getAll||(t.prototype.getAll=function(e,n){var s=this,i=[];return new Promise(function(r){s.iterateCursor(e,function(o){if(!o){r(i);return}if(i.push(o.value),n!==void 0&&i.length==n){r(i);return}o.continue()})})})});function X6(t,e,n){var s=gf(indexedDB,"open",[t,e]),i=s.request;return i&&(i.onupgradeneeded=function(r){n&&n(new ml(i.result,r.oldVersion,i.transaction))}),s.then(function(r){return new _l(r)})}const zy="@firebase/installations",_f="0.5.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ky=1e4,Gy=`w:${_f}`,Qy="FIS_v2",Z6="https://firebaseinstallations.googleapis.com/v1",eA=60*60*1e3,tA="installations",nA="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sA={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Ds=new ds(tA,nA,sA);function Yy(t){return t instanceof hn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jy({projectId:t}){return`${Z6}/projects/${t}/installations`}function Xy(t){return{token:t.token,requestStatus:2,expiresIn:rA(t.expiresIn),creationTime:Date.now()}}async function Zy(t,e){const s=(await e.json()).error;return Ds.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function ev({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function iA(t,{refreshToken:e}){const n=ev(t);return n.append("Authorization",oA(e)),n}async function tv(t){const e=await t();return e.status>=500&&e.status<600?t():e}function rA(t){return Number(t.replace("s","000"))}function oA(t){return`${Qy} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aA(t,{fid:e}){const n=Jy(t),s=ev(t),i={fid:e,authVersion:Qy,appId:t.appId,sdkVersion:Gy},r={method:"POST",headers:s,body:JSON.stringify(i)},o=await tv(()=>fetch(n,r));if(o.ok){const a=await o.json();return{fid:a.fid||e,registrationStatus:2,refreshToken:a.refreshToken,authToken:Xy(a.authToken)}}else throw await Zy("Create Installation",o)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nv(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lA(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cA=/^[cdef][\w-]{21}$/,yf="";function uA(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=hA(t);return cA.test(n)?n:yf}catch{return yf}}function hA(t){return lA(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yl(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sv=new Map;function iv(t,e){const n=yl(t);rv(n,e),fA(n,e)}function rv(t,e){const n=sv.get(t);if(!!n)for(const s of n)s(e)}function fA(t,e){const n=dA();n&&n.postMessage({key:t,fid:e}),pA()}let Ls=null;function dA(){return!Ls&&"BroadcastChannel"in self&&(Ls=new BroadcastChannel("[Firebase] FID Change"),Ls.onmessage=t=>{rv(t.data.key,t.data.fid)}),Ls}function pA(){sv.size===0&&Ls&&(Ls.close(),Ls=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gA="firebase-installations-database",mA=1,Fs="firebase-installations-store";let vf=null;function wf(){return vf||(vf=X6(gA,mA,t=>{switch(t.oldVersion){case 0:t.createObjectStore(Fs)}})),vf}async function vl(t,e){const n=yl(t),i=(await wf()).transaction(Fs,"readwrite"),r=i.objectStore(Fs),o=await r.get(n);return await r.put(e,n),await i.complete,(!o||o.fid!==e.fid)&&iv(t,e.fid),e}async function ov(t){const e=yl(t),s=(await wf()).transaction(Fs,"readwrite");await s.objectStore(Fs).delete(e),await s.complete}async function wl(t,e){const n=yl(t),i=(await wf()).transaction(Fs,"readwrite"),r=i.objectStore(Fs),o=await r.get(n),a=e(o);return a===void 0?await r.delete(n):await r.put(a,n),await i.complete,a&&(!o||o.fid!==a.fid)&&iv(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bf(t){let e;const n=await wl(t,s=>{const i=_A(s),r=yA(t,i);return e=r.registrationPromise,r.installationEntry});return n.fid===yf?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function _A(t){const e=t||{fid:uA(),registrationStatus:0};return lv(e)}function yA(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Ds.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=vA(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:wA(t)}:{installationEntry:e}}async function vA(t,e){try{const n=await aA(t,e);return vl(t,n)}catch(n){throw Yy(n)&&n.customData.serverCode===409?await ov(t):await vl(t,{fid:e.fid,registrationStatus:0}),n}}async function wA(t){let e=await av(t);for(;e.registrationStatus===1;)await nv(100),e=await av(t);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await bf(t);return s||n}return e}function av(t){return wl(t,e=>{if(!e)throw Ds.create("installation-not-found");return lv(e)})}function lv(t){return bA(t)?{fid:t.fid,registrationStatus:0}:t}function bA(t){return t.registrationStatus===1&&t.registrationTime+Ky<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EA({appConfig:t,platformLoggerProvider:e},n){const s=IA(t,n),i=iA(t,n),r=e.getImmediate({optional:!0});r&&i.append("x-firebase-client",r.getPlatformInfoString());const o={installation:{sdkVersion:Gy}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await tv(()=>fetch(s,a));if(l.ok){const c=await l.json();return Xy(c)}else throw await Zy("Generate Auth Token",l)}function IA(t,{fid:e}){return`${Jy(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ef(t,e=!1){let n;const s=await wl(t.appConfig,r=>{if(!uv(r))throw Ds.create("not-registered");const o=r.authToken;if(!e&&SA(o))return r;if(o.requestStatus===1)return n=TA(t,e),r;{if(!navigator.onLine)throw Ds.create("app-offline");const a=RA(r);return n=CA(t,a),a}});return n?await n:s.authToken}async function TA(t,e){let n=await cv(t.appConfig);for(;n.authToken.requestStatus===1;)await nv(100),n=await cv(t.appConfig);const s=n.authToken;return s.requestStatus===0?Ef(t,e):s}function cv(t){return wl(t,e=>{if(!uv(e))throw Ds.create("not-registered");const n=e.authToken;return AA(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function CA(t,e){try{const n=await EA(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await vl(t.appConfig,s),n}catch(n){if(Yy(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await ov(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await vl(t.appConfig,s)}throw n}}function uv(t){return t!==void 0&&t.registrationStatus===2}function SA(t){return t.requestStatus===2&&!kA(t)}function kA(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+eA}function RA(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function AA(t){return t.requestStatus===1&&t.requestTime+Ky<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NA(t){const e=t,{installationEntry:n,registrationPromise:s}=await bf(e.appConfig);return s?s.catch(console.error):Ef(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PA(t,e=!1){const n=t;return await OA(n.appConfig),(await Ef(n,e)).token}async function OA(t){const{registrationPromise:e}=await bf(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MA(t){if(!t||!t.options)throw If("App Configuration");if(!t.name)throw If("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw If(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function If(t){return Ds.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hv="installations",xA="installations-internal",DA=t=>{const e=t.getProvider("app").getImmediate(),n=MA(e),s=ms(e,"platform-logger");return{app:e,appConfig:n,platformLoggerProvider:s,_delete:()=>Promise.resolve()}},LA=t=>{const e=t.getProvider("app").getImmediate(),n=ms(e,hv).getImmediate();return{getId:()=>NA(n),getToken:i=>PA(n,i)}};function FA(){Qt(new Mt(hv,DA,"PUBLIC")),Qt(new Mt(xA,LA,"PRIVATE"))}FA();tt(zy,_f);tt(zy,_f,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tf="analytics",UA="firebase_id",BA="origin",HA=60*1e3,$A="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",fv="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t=new va("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dv(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function WA(t,e){const n=document.createElement("script");n.src=`${fv}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function VA(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function qA(t,e,n,s,i,r){const o=s[i];try{if(o)await e[o];else{const l=(await dv(n)).find(c=>c.measurementId===i);l&&await e[l.appId]}}catch(a){_t.error(a)}t("config",i,r)}async function jA(t,e,n,s,i){try{let r=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await dv(n);for(const l of o){const c=a.find(h=>h.measurementId===l),u=c&&e[c.appId];if(u)r.push(u);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),t("event",s,i||{})}catch(r){_t.error(r)}}function zA(t,e,n,s){async function i(r,o,a){try{r==="event"?await jA(t,e,n,o,a):r==="config"?await qA(t,e,n,s,o,a):t("set",o)}catch(l){_t.error(l)}}return i}function KA(t,e,n,s,i){let r=function(...o){window[s].push(arguments)};return window[i]&&typeof window[i]=="function"&&(r=window[i]),window[i]=zA(r,t,e,n),{gtagCore:r,wrappedGtag:window[i]}}function GA(){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(fv))return e;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QA={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},Rt=new ds("analytics","Analytics",QA);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YA=30,JA=1e3;class XA{constructor(e={},n=JA){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const pv=new XA;function ZA(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function e4(t){var e;const{appId:n,apiKey:s}=t,i={method:"GET",headers:ZA(s)},r=$A.replace("{app-id}",n),o=await fetch(r,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();((e=l.error)===null||e===void 0?void 0:e.message)&&(a=l.error.message)}catch{}throw Rt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function t4(t,e=pv,n){const{appId:s,apiKey:i,measurementId:r}=t.options;if(!s)throw Rt.create("no-app-id");if(!i){if(r)return{measurementId:r,appId:s};throw Rt.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new i4;return setTimeout(async()=>{a.abort()},n!==void 0?n:HA),gv({appId:s,apiKey:i,measurementId:r},o,a,e)}async function gv(t,{throttleEndTimeMillis:e,backoffCount:n},s,i=pv){const{appId:r,measurementId:o}=t;try{await n4(s,e)}catch(a){if(o)return _t.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${a.message}]`),{appId:r,measurementId:o};throw a}try{const a=await e4(t);return i.deleteThrottleMetadata(r),a}catch(a){if(!s4(a)){if(i.deleteThrottleMetadata(r),o)return _t.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${a.message}]`),{appId:r,measurementId:o};throw a}const l=Number(a.customData.httpStatus)===503?Rm(n,i.intervalMillis,YA):Rm(n,i.intervalMillis),c={throttleEndTimeMillis:Date.now()+l,backoffCount:n+1};return i.setThrottleMetadata(r,c),_t.debug(`Calling attemptFetch again in ${l} millis`),gv(t,c,s,i)}}function n4(t,e){return new Promise((n,s)=>{const i=Math.max(e-Date.now(),0),r=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(r),s(Rt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function s4(t){if(!(t instanceof hn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class i4{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r4(){if(OT())try{await MT()}catch(t){return _t.warn(Rt.create("indexeddb-unavailable",{errorInfo:t}).message),!1}else return _t.warn(Rt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function o4(t,e,n,s,i,r,o){var a;const l=t4(t);l.then(d=>{n[d.measurementId]=d.appId,t.options.measurementId&&d.measurementId!==t.options.measurementId&&_t.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${d.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(d=>_t.error(d)),e.push(l);const c=r4().then(d=>{if(d)return s.getId()}),[u,h]=await Promise.all([l,c]);GA()||WA(r,u.measurementId),i("js",new Date);const f=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return f[BA]="firebase",f.update=!0,h!=null&&(f[UA]=h),i("config",u.measurementId,f),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a4{constructor(e){this.app=e}_delete(){return delete eo[this.app.options.appId],Promise.resolve()}}let eo={},mv=[];const _v={};let Cf="dataLayer",l4="gtag",yv,vv,wv=!1;function c4(){const t=[];if(Im()&&t.push("This is a browser extension environment."),xT()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,i)=>`(${i+1}) ${s}`).join(" "),n=Rt.create("invalid-analytics-context",{errorInfo:e});_t.warn(n.message)}}function u4(t,e,n){c4();const s=t.options.appId;if(!s)throw Rt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)_t.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Rt.create("no-api-key");if(eo[s]!=null)throw Rt.create("already-exists",{id:s});if(!wv){VA(Cf);const{wrappedGtag:r,gtagCore:o}=KA(eo,mv,_v,Cf,l4);vv=r,yv=o,wv=!0}return eo[s]=o4(t,mv,_v,e,yv,Cf,n),new a4(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h4(t,e,n,s,i){if(i&&i.global){t("event",n,s);return}else{const r=await e,o=Object.assign(Object.assign({},s),{send_to:r});t("event",n,o)}}function f4(t,e={}){const n=ms(t,Tf);if(n.isInitialized()){const i=n.getImmediate();if(br(e,n.getOptions()))return i;throw Rt.create("already-initialized")}return n.initialize({options:e})}function d4(t,e,n,s){t=De(t),h4(vv,eo[t.app.options.appId],e,n,s).catch(i=>_t.error(i))}const bv="@firebase/analytics",Ev="0.7.4";function p4(){Qt(new Mt(Tf,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return u4(s,i,n)},"PUBLIC")),Qt(new Mt("analytics-internal",t,"PRIVATE")),tt(bv,Ev),tt(bv,Ev,"esm2017");function t(e){try{const n=e.getProvider(Tf).getImmediate();return{logEvent:(s,i,r)=>d4(n,s,i,r)}}catch(n){throw Rt.create("interop-component-reg-failed",{reason:n})}}}p4();const g4={apiKey:"AIzaSyDTVxDJj7rqG9L-Clvba2Tao9B0hkcxjcE",authDomain:"milchchan.firebaseapp.com",databaseURL:"https://milchchan.firebaseio.com",projectId:"milchchan",storageBucket:"milchchan.appspot.com",messagingSenderId:"355698971889",appId:"1:355698971889:web:e3653c5c31bd7289cd4550",measurementId:"G-3998FJYNWX"},bl=xC(g4),Bt=T2(bl),pe=F3(bl),Us=K6(bl);f4(bl);const m4=decodeURIComponent(window.location.hash.substring(1))==="debug",ge="wonderland",vn=new XI;vn.domElement.style.position="fixed";vn.domElement.style.top="auto";vn.domElement.style.bottom="0";vn.domElement.style.left="auto";vn.domElement.style.right="0";m4||vn.domElement.classList.add("is-hidden");let Ri=0;const _4=5;let El=0;const y4=10;let Il=0;window.addEventListener("load",t=>{"serviceWorker"in navigator&&(navigator.serviceWorker.register("sw.js").then(n=>{n.onupdatefound=function(){n.update()}}).catch(n=>{console.error(n.code,n.message)}),navigator.serviceWorker.addEventListener("message",n=>{navigator.serviceWorker.controller!==null&&"command"in n.data&&n.data.command==="caches"&&navigator.serviceWorker.controller.postMessage({command:"clear",caches:n.data.caches})}));const e=Gp({data(){return{isDarkMode:!1,isMuted:!0,isLoading:!1,isUpdating:!1,isLocating:!1,isRevealed:!1,isOverlayed:!1,isBlinded:!1,isPopup:!1,isExpanded:!1,isLearning:!1,isAnimating:!1,isHangingOn:!1,isSubmitting:!1,isDiscovering:!1,isStared:!1,isLocked:!1,isEditing:!1,canvasSize:{width:0,height:0,deviceWidth:0,deviceHeight:0,alternative:{width:0,height:0,deviceWidth:0,deviceHeight:0}},cachedImages:{},cachedSprites:[],alternativeCachedSprites:[],animationQueue:[],elapsed:0,map:null,layer:null,mode:null,queryQueue:[],queryCache:{},cachedTracks:{},cachedDocuments:[],documentQueue:[],sequenceQueue:[],progress:0,user:null,candidates:null,input:"",animatedInputLength:0,maxInputLength:100,inputHasError:!1,messages:[],maxMessages:10,word:null,recentWords:[],tags:[],maxTags:10,scrollTimeoutID:void 0,stars:-1,animatedStars:0,steps:0,isStepping:!1,animatedSteps:0,deviceMotion:null,stats:[],screenshot:null,notifications:[],notificationHeight:0,animatedNotificationHeight:0,inputHeight:0,animatedInputHeight:0,recentImages:[],backgroundImagesQueue:[],backgroundImages:[],preloadImages:[],isUploading:!1,animations:null,currentAnimations:[],blendShapeAnimations:[],insetTop:0,insetBottom:0,text:[],popupTextHeight:0,animatedPopupTextHeight:0,tickerWidth:0,animatedTickerWidth:0,leaderboard:[],leaderboardHeight:0,animatedLeaderboardHeight:0,message:null,states:{},character:null,alternative:null,wordDictionary:{},reverseWordDictionary:{},attributes:["\u540D\u524D","\u6240\u5C5E","\u6642\u9593","\u5834\u6240","\u3059\u308B\u4E8B","\u751F\u304D\u7269","\u98DF\u3079\u7269","\u98F2\u307F\u7269","\u805E\u304F\u3082\u306E","\u898B\u308B\u3082\u306E","\u8AAD\u3080\u3082\u306E","\u4F7F\u3046\u7269","\u8EAB\u306B\u3064\u3051\u308B\u3082\u306E","\u4E57\u308A\u7269","\u90E8\u4F4D","\u75C5\u6C17"],chars:[]}},watch:{isMuted(n){try{localStorage.setItem("character",JSON.stringify({mute:n}))}catch{localStorage.removeItem("character")}},words:{handler:()=>{e.$nextTick(()=>{for(const n of document.body.querySelectorAll("#input>.columns:last-of-type>.column>.control .clip")){let s=0;for(const i of n.querySelectorAll(":scope .ticker-wrap .ticker .item"))s+=i.getBoundingClientRect().width;s>0&&(e.tickerWidth=Math.min(s/2,document.body.querySelector("#input>.columns:last-of-type>.column>.control .level").getBoundingClientRect().width),n.querySelector(":scope .ticker-wrap .ticker").style.width=s+"px")}})},deep:!0},tickerWidth(n){const s=this,i={width:this.animatedTickerWidth};he({targets:i,width:n,round:1,duration:500,easing:"linear",update:()=>{s.animatedTickerWidth=i.width}})},backgroundImages:{handler:()=>{e.$nextTick(()=>{const n=document.body.querySelectorAll("#app>.background>div");if(n.length>1){const s=n.length-1,i=15;let r=0,o=null;for(const a of n){const l=[];for(let u=0;u<n.length;u++)u===r?l.push({visibility:"visible"}):l.push({visibility:"hidden"});const c=a.animate(l,{fill:"forwards",easing:"steps("+s+")",duration:1e3/i*n.length,iterations:1/0});o===null?o=c.startTime:c.startTime=o,r++}}})},deep:!0},text:{handler:()=>{e.$nextTick(()=>{e.isPopup&&(e.popupTextHeight=e.$refs.popupText.getBoundingClientRect().height)})},deep:!0},popupTextHeight(n){const s={height:this.animatedPopupTextHeight};he({targets:s,height:n,round:1,duration:500,easing:"linear",update:()=>{this.animatedPopupTextHeight=s.height}})},notifications:{handler:()=>{e.$nextTick(()=>{e.notificationHeight=e.$refs.notifications.getBoundingClientRect().height})},deep:!0},notificationHeight(n){const s={height:this.animatedNotificationHeight};he({targets:s,height:n,round:1,duration:500,easing:"linear",update:()=>{this.animatedNotificationHeight=s.height}})},leaderboard:{handler:()=>{e.$nextTick(()=>{e.leaderboardHeight=e.$refs.leaderboard.getBoundingClientRect().height})},deep:!0},leaderboardHeight(n){const s={height:this.animatedLeaderboardHeight};he({targets:s,height:n,round:1,duration:500,easing:"linear",update:()=>{this.animatedLeaderboardHeight=s.height}})},inputHeight(n){const s={height:this.animatedInputHeight};he({targets:s,height:n,round:1,duration:500,easing:"linear",update:()=>{this.animatedInputHeight=s.height}})},stars(n){const s={count:this.animatedStars};he({targets:s,count:n,round:1,duration:500,easing:"linear",update:()=>{this.animatedStars=s.count}})},steps(n){const s={count:this.animatedSteps};he({targets:s,count:n,round:100,duration:500,easing:"linear",update:()=>{this.animatedSteps=s.count}})},input:{handler:()=>{e.$nextTick(()=>{const n={count:e.animatedInputLength};he({targets:n,count:e.input.length,round:1,duration:500,easing:"linear",update:()=>{e.animatedInputLength=n.count}})})},deep:!0},chars:{handler:()=>{const n=[];for(const s of e.chars)for(const i of s)(i.count>0||!i.reserved)&&n.push({set:i.set,count:i.count,timestamp:i.timestamp,checksum:[...String(i.timestamp)].reduce((r,o)=>r+o,0)+[...String(i.count)].reduce((r,o)=>r+o,0)});try{localStorage.setItem("fragments",JSON.stringify(n))}catch{localStorage.removeItem("fragments")}},deep:!0}},methods:{signIn:async function(n){if(n===Tt.PROVIDER_ID){const s=new Tt;try{const i=await Yu(Bt,s),r=s.credentialFromResult(Bt,i);for(const o of i.user.providerData){try{await zu(this.user,{displayName:o.displayName,photoURL:o.photoURL})}catch(a){console.error(a.code,a.message)}break}try{localStorage.setItem("credential",JSON.stringify({providerId:r.providerId,accessToken:r.accessToken,idToken:r.idToken}))}catch{localStorage.removeItem("credential")}}catch(i){console.error(i.code,i.message)}}else if(n===It.PROVIDER_ID){const s=new It;s.addScope("public_profile");try{const i=await Yu(Bt,s),r=s.credentialFromResult(Bt,i);for(const o of i.user.providerData){try{await zu(this.user,{displayName:o.displayName,photoURL:o.photoURL})}catch(a){console.error(a.code,a.message)}break}try{localStorage.setItem("credential",JSON.stringify({providerId:r.providerId,accessToken:r.accessToken}))}catch{localStorage.removeItem("credential")}}catch(i){console.error(i.code,i.message)}}else if(n===Ct.PROVIDER_ID){const s=new Ct;try{const i=await Yu(Bt,s),r=s.credentialFromResult(Bt,i);for(const o of i.user.providerData){const a=o.photoURL.replace(/_normal\.jpg$/,".jpg");try{await zu(this.user,{displayName:o.displayName,photoURL:a})}catch(l){console.error(l.code,l.message)}kt(de(pe,`${ge}/users/${i.user.uid}`),l=>(l?(l.name=o.displayName,l.link=`https://twitter.com/${i.additionalUserInfo.username}`,l.timestamp=timestamp):l={name:o.displayName,link:`https://twitter.com/${i.additionalUserInfo.username}`,timestamp},l));break}try{localStorage.setItem("credential",JSON.stringify({providerId:r.providerId,accessToken:r.accessToken,secret:r.secret}))}catch{localStorage.removeItem("credential")}}catch(i){console.error(i.code,i.message)}}},signOut:async function(n){try{await gS(Bt),localStorage.removeItem("credential"),"serviceWorker"in navigator&&navigator.serviceWorker.controller!==null&&navigator.serviceWorker.controller.postMessage({command:"caches"})}catch(s){console.error(s.code,s.message)}},refresh:function(n){this.update(!0)},update:async function(n=!1){this.isLoading=!0;const s=this,i=this.map.getCenter(),r=await this.fetch(n,i.latitude,i.longitude);if(n&&Object.keys(this.cachedTracks).forEach(function(o){for(const a of s.cachedTracks[o].handlers)Microsoft.Maps.Events.removeHandler(a);s.map.entities.remove(s.cachedTracks[o].pushpin),delete s.cachedTracks[o]}),r!==null){const o=Math.floor(new Date/1e3);let a=!1;for(const c in r)for(const u of r[c]){let h=null;for(const f in this.cachedTracks)if(u.id===this.cachedTracks[f].id){h=f;break}if(h===null){const f=new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(u.location.latitude,u.location.longitude),{title:u.name,subTitle:this.formatTime(o-u.timestamp),icon:"/images/Marker-Star.svg"});"image"in u?this.setImage(f,u.image.url,this.user.uid===u.user.id?{red:254,green:205,blue:226}:{red:104,green:230,blue:255}):"image"in u.user&&this.setImage(f,u.user.image,this.user.uid===u.user.id?{red:254,green:205,blue:226}:{red:104,green:230,blue:255}),this.cachedTracks[f.id]=u,this.cachedTracks[f.id].pushpin=f,this.cachedTracks[f.id].handlers=[Microsoft.Maps.Events.addHandler(f,"click",async d=>{s.mode=this.cachedTracks[d.target.id],s.isRevealed=!0}),Microsoft.Maps.Events.addHandler(f,"dblclick",d=>{window.location.hash=s.cachedTracks[d.target.id].id})],this.map.entities.push(f),a=!0}else if(u.timestamp>this.cachedTracks[h].timestamp){const f=this.cachedTracks[h].pushpin,d=this.cachedTracks[h].handlers;f.setLocation(new Microsoft.Maps.Location(u.location.latitude,u.location.longitude)),f.setOptions({title:u.name,subTitle:this.formatTime(o-u.timestamp)}),"image"in u?this.setImage(f,u.image.url,this.user.uid===u.user.id?{red:254,green:205,blue:226}:{red:104,green:230,blue:255}):"image"in u.user&&this.setImage(f,u.user.image,this.user.uid===u.user.id?{red:254,green:205,blue:226}:{red:104,green:230,blue:255}),this.cachedTracks[h]=u,this.cachedTracks[h].pushpin=f,this.cachedTracks[h].handlers=d,a=!0}}const l=[];for(const c in r)for(const u of r[c])l.push(u.id);if(Object.keys(this.cachedTracks).forEach(function(c){if(!l.some(u=>u===s.cachedTracks[c].id)){for(const u of s.cachedTracks[c].handlers)Microsoft.Maps.Events.removeHandler(u);s.map.entities.remove(s.cachedTracks[c].pushpin),delete s.cachedTracks[c],a=!0}}),a){const c=10;this.isUpdating=!0;const u=await new Promise(h=>{const f={},d=[];for(const p in r)for(const v of r[p])if(v.user.id in f)f[v.user.id].count++;else{const m=Object.assign({},v.user);m.count=1,f[v.user.id]=m}for(const p in f)d.push(f[p]);d.sort((p,v)=>v.count-p.count),h(d)});this.leaderboard.splice(0);for(const h of u)this.leaderboard.push(h);try{const h=await new Promise(f=>{const d=Math.pow(10,-6);let p=[],v=[],m={},y={},g=[],_=d;for(const w in r){let T=[],I=[];for(const E of r[w])T.push(E.name),I.includes(E.name)||(E.name in m?m[E.name]+=1:m[E.name]=1,I.push(E.name));p.push(T)}for(const w in m)m[w]=Math.log(p.length/(m[w]+d));for(const w of p){let T={};for(const I of w)I in T?T[I]+=1:T[I]=1;for(const I in T)T[I]/=w.length,I in y||(y[I]=0);v.push(T)}for(const w in y)for(const T of v)if(w in T){const I=T[w]*m[w];I>y[w]&&(y[w]=I)}for(const w in y)w.length>1&&w!="..."&&g.push({term:w,value:y[w]});g.sort((w,T)=>T.value-w.value),g.length>c&&g.splice(c);for(const w of g)w.value>_&&(_=w.value);for(const w of g)w.value/=_;g.sort((w,T)=>w.term>T.term?1:w.term<T.term?-1:0),f([p,g])});this.cachedDocuments.splice(0),this.tags.splice(0);for(const f of h[0])this.cachedDocuments.push(f);for(let f=0;f<h[1].length;f++)this.tags.push({index:f,name:h[1][f].term,score:h[1][f].value})}catch(h){this.notify({text:h.message,accent:this.character.accent,image:this.character.image}),console.error(h)}this.isUpdating=!1}}this.isLoading=!1},fetch:async function(n,s,i){const r=this,o={1:2,2:2,3:2,4:2,5:2,6:2,7:2,8:2,9:2,10:3,11:3,12:4,13:4,14:4,15:5,16:5,17:5,18:6,19:6,20:6},a=this.encodeGeohash(s,i,o[this.map.getZoom()]);let l=[a];const c=[],u={};let h=[],f=this.decodeGeohash(a);const d=Math.floor(new Date/1e3),p=60,v={};if(h.push(new Microsoft.Maps.Polygon([new Microsoft.Maps.Location(f.topleft.latitude,f.topleft.longitude),new Microsoft.Maps.Location(f.topright.latitude,f.topright.longitude),new Microsoft.Maps.Location(f.bottomright.latitude,f.bottomright.longitude),new Microsoft.Maps.Location(f.bottomleft.latitude,f.bottomleft.longitude),new Microsoft.Maps.Location(f.topleft.latitude,f.topleft.longitude)],{fillColor:"rgba(255, 0, 0, 0.5)",strokeColor:"red",strokeThickness:1})),a.length>2){const y=this.getNeighbors(a);for(const g in y)l.push(y[g]),f=this.decodeGeohash(y[g]),h.push(new Microsoft.Maps.Polygon([new Microsoft.Maps.Location(f.topleft.latitude,f.topleft.longitude),new Microsoft.Maps.Location(f.topright.latitude,f.topright.longitude),new Microsoft.Maps.Location(f.bottomright.latitude,f.bottomright.longitude),new Microsoft.Maps.Location(f.bottomleft.latitude,f.bottomleft.longitude),new Microsoft.Maps.Location(f.topleft.latitude,f.topleft.longitude)],{fillColor:"rgba(255, 0, 0, 0.5)",strokeColor:"red",strokeThickness:1}))}this.layer.setPrimitives(h),this.queryQueue.push(a);for(const y of l){if(!n&&y in this.queryCache&&d-this.queryCache[y].timestamp<p){for(const _ of this.queryCache[y].data)c.push(_),y in u?u[y].push(_):u[y]=[_];continue}const g=await St(Ns(de(pe,ge+"/tracks"),ul("key"),cl(50),tf(y),C3(y.padEnd(12,"z")+"\uF8FF")));if(v[y]={timestamp:d,data:[]},g.exists()){const _=g.val();for(const w in _)_[w].id=w,"image"in _[w]&&(_[w].image={path:_[w].image,url:await Si(Ms(Us,_[w].image))}),c.push(_[w]),v[y].data.push(_[w]),y in u?u[y].push(_[w]):u[y]=[_[w]]}}if(this.queryQueue.shift(),this.queryQueue.length>0)return null;for(const y in v)this.queryCache[y]=v[y];Object.keys(this.queryCache).forEach(function(y){d-r.queryCache[y].timestamp>=p&&delete r.queryCache[y]});const m=this.take(c.sort((y,g)=>g.timestamp-y.timestamp),100);return Object.keys(u).forEach(function(y){for(let g=u[y].length-1;g>0;g--)m.includes(u[y][g])||u[y].splice(g,1);u[y].length===0&&delete u[y]}),u},startPedometer:async function(){const n=this;DeviceMotionEvent.requestPermission&&await DeviceMotionEvent.requestPermission()!=="granted"||(this.deviceMotion=s=>{if(s.accelerationIncludingGravity){const o=s.accelerationIncludingGravity,a=Math.sqrt(o.x*o.x+o.y*o.y+o.z*o.z);if(n.isStepping){if(a<9.8){const l=new Date,c=l.getTime()-7*24*60*60*1e3,u=[];n.steps++,n.isStepping=!1;for(let h=n.stats.length-1;h>0;h--)n.stats[h].date.getTime()<=c?n.stats.splice(h,1):n.stats[h].date.getFullYear()!==l.getFullYear()&&n.stats[h].date.getMonth()!==l.getMonth()&&n.stats[h].date.getDate()!==l.getDate()&&u.push({date:n.stats[h].date.toISOString(),steps:n.stats[h].steps});u.unshift({date:new Date(l.getFullYear(),l.getMonth(),l.getDate(),0,0,0).toISOString(),steps:n.steps});try{localStorage.setItem("stats",JSON.stringify(u))}catch{localStorage.removeItem("stats")}if(n.steps%10==0){let p=function(g,_){return g=Math.ceil(g),_=Math.floor(_),Math.floor(Math.random()*(_-g))+g},v=function(g){var _=arguments;return g.replace(/\{(\d)\}/g,function(w,T){return _[parseInt(T)+1]})};var i=p,r=v;const h=[];let f=0,d=Number.MAX_SAFE_INTEGER;for(const g of n.chars){let _=0;for(const w of g)h.push({path:{row:f,column:_},data:w}),_++,w.count<d&&(d=w.count);f++}for(let g=h.length-1;g>0;g--)h[g].data.count>d&&h.splice(g,1);const m=h[p(0,h.length)].path,y=[];n.chars[m.row][m.column].count++,n.chars[m.row][m.column].timestamp=Math.floor(new Date/1e3);for(const g of this.prepare(this.character.sequences.filter(_=>_.name==="Capture"),n.chars[m.row][m.column].set[0],this.character.sequences))g.type==="Message"?y.push({type:g.type,speed:g.speed,duration:g.duration,character:this.character,text:v(g.text,n.chars[m.row][m.column].set[0])}):(g.character=this.character,y.push(g));y.length>0&&this.sequenceQueue.push(y)}}}else a>12&&(n.isStepping=!0)}},window.addEventListener("devicemotion",this.deviceMotion,!0))},stopPedometer:function(){window.removeEventListener("devicemotion",this.deviceMotion,!0),this.deviceMotion=null},locate:async function(n){if("permissions"in navigator){const s=await navigator.permissions.query({name:"geolocation"});if(s.state=="granted"||s.state=="prompt"){const i=this;this.isLocating=!0,navigator.geolocation.getCurrentPosition(r=>{i.isLocating=!1,i.map.setView({center:new Microsoft.Maps.Location(r.coords.latitude,r.coords.longitude),zoom:i.map.getZoom()<16?16:i.map.getZoom()})},r=>{i.isLocating=!1,i.notify({text:r.message,accent:i.character.accent,image:i.character.image}),console.error(r)},{enableHighAccuracy:!0,timeout:3e4,maximumAge:0})}}else{const s=this;this.isLocating=!0,navigator.geolocation.getCurrentPosition(i=>{s.isLocating=!1,s.map.setView({center:new Microsoft.Maps.Location(i.coords.latitude,i.coords.longitude),zoom:s.map.getZoom()<16?16:s.map.getZoom()})},i=>{s.isLocating=!1,s.notify({text:i.message,accent:s.character.accent,image:s.character.image}),console.error(i)},{enableHighAccuracy:!0,timeout:3e4,maximumAge:0})}},backspace:function(n){this.isEditing||this.chars.forEach(s=>s.forEach(i=>i.count+=i.set.includes(this.input.charAt(this.input.length-1))?1:0)),this.input=this.input.slice(0,-1)},send:async function(n){if(this.input.length>0&&this.input.length<=this.maxInputLength)if(this.isEditing){let s=-1;const i=[];for(let r=this.chars.length-1;r>=0;r--)if(this.chars[r].some(o=>!o.reserved)){s=r;break}i.push({set:[this.input],index:0,count:0,timestamp:Math.floor(new Date/1e3),reserved:!1}),s>=0?this.chars.splice(s+1,0,i):this.chars.splice(0,0,i),this.input="",this.isEditing=!1}else{const s=this.map.getCenter();this.learn({name:this.input,location:{latitude:s.latitude,longitude:s.longitude}}),this.input="",this.isLearning=!1}else this.shake(this.$refs.input)},setImage:async function(n,s,i={red:0,green:0,blue:0}){let r;try{r=await new Promise(async(u,h)=>{const f=new Image;f.onload=()=>{u(f)},f.onerror=d=>{h(d)},f.crossOrigin="Anonymous",f.src=s})}catch(u){n.setOptions({icon:`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
                            <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
                            <svg width="50" height="54" viewBox="0 0 50 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
                                <g transform="matrix(0.999999,0,0,0.999999,17.0011,-13)">
                                    <path d="M0,50L16,50L8,66L0,50Z" style="fill:rgb(${String(i.red)},${String(i.green)},${String(i.blue)});"/>
                                </g>
                                <g transform="matrix(1.96491,0,0,1.96491,-30.0099,-24.5931)">
                                    <circle cx="27.996" cy="25.239" r="12.214" style="fill:rgb(${String(i.red)},${String(i.green)},${String(i.blue)});"/>
                                    <g transform="matrix(0.410574,0,0,0.410574,34.0498,26.7694)">
                                        <path d="M0,-7.29C-0.311,-8.247 -1.138,-8.944 -2.133,-9.089L-9.21,-10.117L-12.375,-16.529C-12.819,-17.432 -13.738,-18.003 -14.744,-18.003C-15.75,-18.003 -16.67,-17.432 -17.114,-16.53L-20.279,-10.117L-27.355,-9.089C-28.352,-8.944 -29.179,-8.247 -29.49,-7.29C-29.801,-6.333 -29.541,-5.283 -28.82,-4.581L-23.7,0.41L-24.908,7.459C-25.078,8.45 -24.672,9.452 -23.857,10.043C-23.043,10.635 -21.965,10.713 -21.074,10.244L-14.744,6.917L-8.415,10.244C-8.028,10.447 -7.606,10.548 -7.186,10.548C-6.638,10.548 -6.092,10.377 -5.632,10.043C-4.818,9.452 -4.41,8.45 -4.58,7.458L-5.789,0.41L-0.668,-4.581C0.052,-5.283 0.312,-6.333 0,-7.29" style="fill:white;fill-rule:nonzero;"/>
                                    </g>
                                </g>
                            </svg>`}),console.error(u);return}const o=document.createElement("canvas"),a=o.getContext("2d"),l=Math.min(r.width,r.height);o.width=l,o.height=l,a.drawImage(r,-(r.width-l)/2,-(r.height-l)/2,r.width,r.height);const c=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
                        <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
                        <svg width="50" height="54" viewBox="0 0 50 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
                            <g transform="matrix(0.999999,0,0,0.999999,17.0011,-13)">
                                <path d="M0,50L16,50L8,66L0,50Z" style="fill:(${String(i.red)},${String(i.green)},${String(i.blue)});"/>
                            </g>
                            <g transform="matrix(1.96491,0,0,1.96491,-30.0099,-24.5931)">
                                <circle cx="27.996" cy="25.239" r="12.214" style="fill:rgb(${String(i.red)},${String(i.green)},${String(i.blue)});"/>
                                <clipPath id="_clip1">
                                    <circle cx="27.996" cy="25.239" r="12.214"/>
                                </clipPath>
                                <g clip-path="url(#_clip1)">
                                    <g transform="matrix(0.791667,0,0,0.791667,5.83249,5.2582)">
                                        <circle cx="27.996" cy="25.239" r="12.214" style="fill:white;"/>
                                        <clipPath id="_clip2">
                                            <circle cx="27.996" cy="25.239" r="12.214"/>
                                        </clipPath>
                                        <g clip-path="url(#_clip2)">
                                            <g id="Background" transform="matrix(0.023856,0,0,0.023856,-2.53964,-5.29658)">
                                                <use xlink:href="#_Image3" x="767" y="767" width="1026px" height="1026px"/>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                            <defs>
                                <image id="_Image3" width="1026px" height="1026px" xlink:href="`+o.toDataURL()+`"/>
                            </defs>
                        </svg>`;n.setOptions({icon:c})},change:function(n){this.input.length<=this.maxInputLength?this.inputHasError=!1:this.inputHasError=!0},upload:async function(n){const s=Math.floor(new Date/1e3);if(this.isUploading=!0,!("uploadable"in n.target.dataset)||n.target.dataset.uploadable==="true"){let r=function(){let c="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".split("");for(let u=0,h=c.length;u<h;u++)switch(c[u]){case"x":c[u]=Math.floor(Math.random()*16).toString(16);break;case"y":c[u]=(Math.floor(Math.random()*4)+8).toString(16);break}return c.join("")};var i=r;const o=this,a=[],l=[];for(const c of n.target.files)a.push(c);for(const c of a.sort((u,h)=>u.name>h.name?1:u.name<h.name?-1:0)){const u=z6(Ms(Us,`assets/${r()}`),c);try{await new Promise(function(f,d){u.on("state_changed",p=>{o.progress=p.bytesTransferred/p.totalBytes/a.length+l.length/a.length},p=>{d(p)},()=>{f(u.snapshot.ref)})});const h=await kt(de(pe,`${ge}/users/${this.user.uid}/dictionary/words/${n.target.dataset.name}`),f=>(f&&(f.image=u.snapshot.ref.fullPath,f.timestamp=s),f));if(h.committed&&h.snapshot.exists()){const f=h.snapshot.val(),d=await kt(de(pe,`${ge}/tracks/${await this.digestMessage(`${this.user.uid}&${n.target.dataset.name}`)}`),p=>(p&&(p.image=f.image,p.timestamp=f.timestamp),p));if(d.committed&&d.snapshot.exists()&&(this.update(!0),this.mode!==null)){if("name"in this.mode&&"attributes"in this.mode&&this.mode.name===n.target.dataset.name)this.mode.image={path:u.snapshot.ref.fullPath,url:await Si(Ms(Us,u.snapshot.ref.fullPath))};else if("words"in this.mode&&this.mode.words!==null)for(const p of this.mode.words)p.name===n.target.dataset.name&&(p.image={path:u.snapshot.ref.fullPath,url:await Si(Ms(Us,u.snapshot.ref.fullPath))})}}}catch(h){this.notify({text:h.message,accent:this.character.accent,image:this.character.image}),console.error(h)}l.push(u.snapshot.ref.fullPath)}this.progress=null}else if(n.target.dataset.uploadable==="false")try{const r=await kt(de(pe,`${ge}/users/${this.user.uid}/dictionary/words/${n.target.dataset.name}`),o=>(o&&(o.image=null,o.timestamp=s),o));if(r.committed&&r.snapshot.exists()){const o=r.snapshot.val(),a=await kt(de(pe,`${ge}/tracks/${await this.digestMessage(`${this.user.uid}&${n.target.dataset.name}`)}`),l=>(l&&(l.image=null,l.timestamp=o.timestamp),l));if(a.committed&&a.snapshot.exists()&&(this.update(!0),this.mode!==null)){if("name"in this.mode&&"attributes"in this.mode&&this.mode.name===n.target.dataset.name&&"image"in this.mode)delete this.mode.image;else if("words"in this.mode&&this.mode.words!==null)for(const l of this.mode.words)l.name===n.target.dataset.name&&"image"in l&&delete l.image}}}catch(r){this.notify({text:r.message,accent:this.character.accent,image:this.character.image}),console.error(r)}this.isUploading=!1},learn:async function(n){function s(o){var a=arguments;return o.replace(/\{(\d)\}/g,function(l,c){return a[parseInt(c)+1]})}const i=[],r=[];if("attributes"in n)for(const o of this.attributes)o in n.attributes&&(n.attributes[o]>0?r.push({name:o,value:!0}):r.push({name:o,value:!1}));else{const o=await St(de(pe,ge+"/users/"+this.user.uid+"/dictionary/words/"+n.name));if(o.exists()){const a=o.val();for(const l of this.attributes)l in a.attributes&&(a.attributes[l]>0?r.push({name:l,value:!0}):r.push({name:l,value:!1}))}else for(const a of this.attributes)r.push({name:a,value:!1})}this.word={name:n.name,attributes:r},"location"in n&&(this.word.location=n.location),"image"in n&&(this.word.image={path:n.image,url:await Si(Ms(Us,n.image))}),"user"in n&&(this.word.user=n.user);for(const o of this.prepare(this.character.sequences.filter(a=>a.name==="Learn")))o.type==="Message"?i.push({type:o.type,speed:o.speed,duration:o.duration,text:s(o.text,n.name)}):i.push(o);i.length>0&&this.sequenceQueue.push(i)},check:function(n){for(const s of this.word.attributes)s===n.target.dataset.attribute&&(s.value=n.target.checked)},share:async function(n){const s="location"in n?n.location:this.map.getCenter(),i=this.encodeGeohash(s.latitude,s.longitude),r={id:this.user.uid,name:this.user.displayName,image:this.user.photoURL},o=Math.floor(new Date/1e3);if(n.name in this.wordDictionary&&delete this.wordDictionary[n.name],Object.keys(this.reverseWordDictionary).forEach(l=>{this.reverseWordDictionary[l].words.some(c=>c===n.name)&&delete this.reverseWordDictionary[l]}),this.isSubmitting=!0,this.user.providerData[0].providerId===firebase.auth.TwitterAuthProvider.PROVIDER_ID){const l=await St(de(pe,`${ge}/users/${this.user.uid}/link`));l.exists()&&(r.link=l.val())}try{const l=await kt(de(pe,ge+"/users/"+this.user.uid+"/dictionary/words/"+n.name),c=>{if(c){let u=!1;for(const h of n.attributes)if(h.name in c.attributes){if(c.attributes[h.name]>0){if(!h.value){u=!0;break}}else if(h.value){u=!0;break}}else{u=!0;break}if(u){let h=!0;const f={attributes:{}};for(const d of n.attributes)d.value?(d.name in c.attributes&&c.attributes[d.name]>0?f.attributes[d.name]=c.attributes[d.name]:f.attributes[d.name]=o-1,h=!1):f.attributes[d.name]=0;return h?null:(f.timestamp=o,f)}else return}else{c={attributes:{},timestamp:o};for(const u of n.attributes)u.value?c.attributes[u.name]=o:c.attributes[u.name]=0;"user"in n&&(c.user={id:n.user.id,name:n.user.name,image:n.user.image}),"image"in n&&(c.image=n.image.path)}return c});if(l.committed)if(l.snapshot.exists()){const c=l.snapshot.val(),u=[];for(const h in c.attributes)typeof c.attributes[h]=="number"&&c.attributes[h]>0&&this.attributes.includes(h)&&u.push(c.attributes[h]);if(u.length===1&&u[0]===c.timestamp){let h=function(d){var p=arguments;return d.replace(/\{(\d)\}/g,function(v,m){return p[parseInt(m)+1]})};var a=h;const f=this;kt(de(pe,ge+"/users/"+this.user.uid+"/dictionary/count"),d=>(d||0)+1);for(const d of this.prepare(this.character.sequences.filter(p=>p.name==="Learned")))d.type==="Message"&&this.notify({text:h(d.text,n.name),accent:this.character.accent,image:this.character.image});this.isStared=!0,window.setTimeout(()=>{f.isStared=!1},3e3),this.isMuted||this.$refs.twinkle.play()}if(!("user"in n)||n.user.id===this.user.uid)try{const h=await kt(de(pe,ge+"/tracks/"+await this.digestMessage(`${this.user.uid}&${n.name}`)),f=>{const d={};f?(f.key=`${i}${o}`,f.location={latitude:s.latitude,longitude:s.longitude},f.geohash=i,f.timestamp=o):f={key:`${i}${o}`,name:n.name,location:{latitude:s.latitude,longitude:s.longitude},geohash:i,user:r,timestamp:o};for(const p in c.attributes)this.attributes.includes(p)&&(d[p]=c.attributes[p]);return f.attributes=d,f});h.committed&&h.snapshot.exists()&&this.update(!0)}catch(h){this.notify({text:h.message,accent:this.character.accent,image:this.character.image}),console.error(h)}}else{kt(de(pe,ge+"/users/"+this.user.uid+"/dictionary/count"),c=>c&&c>1?c-1:null);try{const c=await kt(de(pe,ge+"/tracks/"+await this.digestMessage(`${this.user.uid}&${n.name}`)),u=>null);c.committed&&!c.snapshot&&this.update(!0)}catch(c){this.notify({text:c.message,accent:this.character.accent,image:this.character.image}),console.error(c)}}else if(!("user"in n)||n.user.id===this.user.uid)try{const c=await kt(de(pe,ge+"/tracks/"+await this.digestMessage(`${this.user.uid}&${n.name}`)),u=>{if(u){u.key=`${i}${o}`,u.location={latitude:s.latitude,longitude:s.longitude},u.geohash=i,u.user=r,u.timestamp=o;for(const h of n.attributes)h.value?u.attributes[h.name]=o-1:u.attributes[h.name]=0}else{u={key:`${i}${o}`,name:n.name,location:{latitude:s.latitude,longitude:s.longitude},geohash:i,attributes:{},user:r,timestamp:o};for(const h of n.attributes)h.value?u.attributes[h.name]=o:u.attributes[h.name]=0}return u});c.committed&&c.snapshot.exists()&&this.update(!0)}catch(c){this.notify({text:c.message,accent:this.character.accent,image:this.character.image}),console.error(c)}}catch(l){this.notify({text:l.message,accent:this.character.accent,image:this.character.image}),console.error(l)}this.isSubmitting=!1},next:async function(n,s,i=50){let r;if(s===null?r=await St(Ns(de(pe,ge+"/users/"+n+"/dictionary/words"),sf(),nf(i+1))):r=await St(Ns(de(pe,ge+"/users/"+n+"/dictionary/words"),sf(),s(s),nf(i+1))),"words"in this.mode){const o="user"in this.mode?this.mode.user:{id:this.user.uid,name:this.user.displayName,image:this.user.photoURL},a=[];if(r.exists()){const l=r.val();this.mode.words!==null&&this.mode.words.length>0&&this.mode.indexes.push(this.mode.words[0]);for(const c in l){let u="user"in l[c]?{name:c,attributes:l[c].attributes,user:l[c].user}:{name:c,attributes:l[c].attributes,user:o};"image"in l[c]&&(u.image={path:l[c].image,url:await Si(Ms(Us,l[c].image))}),a.push(u)}a.length===i+1?this.mode.next=a.pop():this.mode.next=null}this.mode.words=a}},previous:async function(n,s,i=50){let r=await St(Ns(de(pe,ge+"/users/"+n+"/dictionary/words"),sf(),s(s),nf(i)));if("words"in this.mode&&r.exists()){const o=r.val(),a="user"in this.mode?this.mode.user:{id:this.user.uid,name:this.user.displayName,image:this.user.photoURL};this.mode.words!==null&&this.mode.words.length>0&&(this.mode.next=this.mode.words[0]),this.mode.words=[];for(const l in o){const c="user"in o[l]?{name:l,attributes:o[l].attributes,user:o[l].user}:{name:l,attributes:o[l].attributes,user:a};"image"in o[l]&&(c.image={path:o[l].image,url:await Si(Ms(Us,o[l].image))}),this.mode.words.push(c)}}},discover:async function(){const n=this,s=[],i={},r=[];function o(l){function c(f,d){return f=Math.ceil(f),d=Math.floor(d),Math.floor(Math.random()*(d-f))+f}let u=[].concat(l),h=l.length;for(;h>1;){const f=c(0,h);h--;const d=u[h];u[h]=u[f],u[f]=d}return u}for(const l of this.recentWords)this.user.uid!==l.user.id&&(s.push(l),i[l.name]=l);for(const l in this.cachedTracks)this.user.uid!==this.cachedTracks[l].user.id&&!(this.cachedTracks[l].name in i)&&s.push(this.cachedTracks[l]);this.isDiscovering=!0;for(const l of o(s))try{if((await kt(de(pe,ge+"/users/"+this.user.uid+"/dictionary/words/"+l.name),u=>{if(!u)return u})).committed){let u=function(h){var f=arguments;return h.replace(/\{(\d)\}/g,function(d,p){return f[parseInt(p)+1]})};var a=u;this.isDiscovering=!1;for(const h of this.prepare(this.character.alternative.sequences.filter(f=>f.name==="Discover"),l.name,this.character.alternative.sequences))h.type==="Message"?r.push({type:h.type,speed:h.speed,duration:h.duration,character:this.character.alternative,text:u(h.text,l.name)}):(h.character=this.character.alternative,r.push(h));r.length>0&&this.sequenceQueue.push(r),this.learn({name:l.name,attributes:l.attributes,location:l.location,user:l.user}),this.map.setView({center:new Microsoft.Maps.Location(l.location.latitude,l.location.longitude),zoom:n.map.getZoom()<16?16:n.map.getZoom()});return}}catch(c){this.notify({text:c.message,accent:this.character.accent,image:this.character.image}),console.error(c)}this.isDiscovering=!1;for(const l of this.prepare(this.character.alternative.sequences.filter(c=>c.name==="Discover"),"",this.character.alternative.sequences))l.type==="Message"?r.push({type:l.type,speed:l.speed,duration:l.duration,character:this.character.alternative,text:l.text}):(l.character=this.character.alternative,r.push(l));r.length>0&&this.sequenceQueue.push(r)},digestMessage:async function(n){const s=new TextEncoder().encode(n),i=await crypto.subtle.digest("SHA-256",s);return Array.from(new Uint8Array(i)).map(a=>a.toString(16).padStart(2,"0")).join("")},activate:async function(){if(Ri=El=0,this.cachedDocuments.length>0){if(this.documentQueue.length==0){let i=function(r){function o(c,u){return c=Math.ceil(c),u=Math.floor(u),Math.floor(Math.random()*(u-c))+c}let a=[].concat(r),l=r.length;for(;l>1;){const c=o(0,l);l--;const u=a[l];a[l]=a[c],a[c]=u}return a};var n=i;for(const r of i(this.cachedDocuments))this.documentQueue.push(r)}const s=this.documentQueue.shift();await this.talk(this.user.uid,s.filter(i=>i!==this.character.name))||this.talk(this.user.uid)}else this.talk(this.user.uid)},talk:async function(n,s=[]){let i=this.character.sequences.filter(a=>a.name==="Activate"),r=[];if(this.isLoading=!0,s.length>0){let a=function(v){function m(_,w){return _=Math.ceil(_),w=Math.floor(w),Math.floor(Math.random()*(w-_))+_}let y=[].concat(v),g=v.length;for(;g>1;){const _=m(0,g);g--;const w=y[g];y[g]=y[_],y[_]=w}return y};var o=a;const l=new RegExp("[.#$\\[\\]]"),c=Math.floor(new Date/1e3),u=60*60,h=Object.assign({},this.states),f=new vr,d=[],p=[];for(const v of s)if(!l.test(v)){if(!(v in this.wordDictionary)||c-this.wordDictionary[v].timestamp>=u){const m=await St(de(pe,ge+"/users/"+n+"/dictionary/words/"+v));if(this.wordDictionary[v]={attributes:[],timestamp:c},m.exists()){const y=m.val();for(let g in y.attributes)typeof y.attributes[g]=="number"&&y.attributes[g]>0&&this.attributes.includes(g)&&this.wordDictionary[v].attributes.push(g)}}for(const m of this.wordDictionary[v].attributes)d.includes(m)||d.push(m)}for(const v of a(i)){const m=this.prepare([v]);let y=!1;for(const g of m){if(g.type=="Message"){for(const _ of Array.isArray(g.text)?g.text:f.segment(g.text))if(Array.isArray(_)){for(const w of m)if(w.type=="Message"){const T=await this.generate(n,w.text,s);if(T===null){y=!0;break}else{let I,E;[I,E]=T,r.push({type:w.type,speed:w.speed,duration:w.duration,text:I})}}else r.push(w);if(y)break;return r.length>0&&this.sequenceQueue.push(r),this.isLoading=!1,!0}else if(_.length>1&&!l.test(_)&&!p.includes(_)){if(!(_ in this.wordDictionary)||c-this.wordDictionary[_].timestamp>=u){const w=await St(de(pe,ge+"/users/"+n+"/dictionary/words/"+_));if(this.wordDictionary[_]={attributes:[],timestamp:c},w.exists()){const T=w.val();for(const I in T.attributes)typeof T.attributes[I]=="number"&&T.attributes[I]>0&&this.attributes.includes(I)&&this.wordDictionary[_].attributes.push(I)}}for(const w of this.wordDictionary[_].attributes)if(d.includes(w)){for(const T of m)if(T.type=="Message"){const I=await this.generate(n,T.text,s);if(I===null){y=!0;break}else{let E,C;[E,C]=I,r.push({type:T.type,speed:T.speed,duration:T.duration,text:E})}}else r.push(T);if(y)break;return r.length>0&&this.sequenceQueue.push(r),this.isLoading=!1,!0}p.push(_)}}if(y){r.splice(0);break}}this.states=h}return this.isLoading=!1,!1}for(const a of this.prepare(i))if(a.type==="Message"){const l=await this.generate(n,a.text);if(l===null)return this.isLoading=!1,!1;{let c,u;[c,u]=l,r.push({type:a.type,speed:a.speed,duration:a.duration,text:c})}}else r.push(a);return r.length>0?(this.sequenceQueue.push(r),this.isLoading=!1,!0):(this.isLoading=!1,!1)},generate:async function(n,s,i=[]){function r(T){const I=Math.random();let E=0,C=0;for(let k of T){if(E<=I&&I<E+k)break;E+=k,C++}return C}function o(T){let I=[],E=Number.MIN_VALUE,C=0;for(let k=0;k<T.length;k++)T[k]>E&&(E=T[k]);for(let k=0;k<T.length;k++)C+=Math.exp(T[k]-E);for(let k=0;k<T.length;k++)I.push(Math.exp(T[k]-E)/C);return I}const a=Math.floor(new Date/1e3),l=60*60;let c=new vr,u=Array.isArray(s)?s:c.segment(s),h={},f=[];const d=new RegExp("[.#$\\[\\]]");let p={},v="",m=0;const y=Math.pow(10,-6),g=10;let _=[{sequence:[],score:1}];for(const T of i)if(!d.test(T)){if(!(T in this.wordDictionary)||a-this.wordDictionary[T].timestamp>=l){const I=await St(de(pe,ge+"/users/"+n+"/dictionary/words/"+T));if(this.wordDictionary[T]={attributes:[],timestamp:a},I.exists()){const E=I.val();for(const C in E.attributes)typeof E.attributes[C]=="number"&&E.attributes[C]>0&&this.attributes.includes(C)&&this.wordDictionary[T].attributes.push(C)}}for(const I of this.wordDictionary[T].attributes)I in h?h[I].push(T):h[I]=[T]}for(const T of u){if(!f.includes(T)){if(Array.isArray(T)){let I=[],E=[];for(const C of T)if(C in h){for(const k of h[C])if(!I.includes(k)){let R=!0;I.push(k);for(const P of this.tags)if(k===P.name){E.push(P.score),R=!1;break}R&&E.push(y)}}else{if(!(C in this.reverseWordDictionary)||a-this.reverseWordDictionary[C].timestamp>=l){const k=await St(Ns(de(pe,ge+"/users/"+n+"/dictionary/words"),ul(`attributes/${C}`),cl(100),tf(1)));if(this.reverseWordDictionary[C]={words:[],timestamp:a},k.exists()){const R=k.val();for(const P in R)this.reverseWordDictionary[C].words.push(P)}}for(const k of this.reverseWordDictionary[C].words)if(u.includes(k)&&!I.includes(k)){let R=!0;I.push(k);for(const P of this.tags)if(k==P.name){E.push(P.score),R=!1;break}R&&E.push(y)}}if(I.length>0&&E.length>0){const C=o(E);let k=[];for(let R=0;R<_.length;R++)for(let P=0;P<C.length;P++){let N=[].concat(_[R].sequence);N.push({index:m,term:I[P]}),k.push({sequence:N,score:_[R].score*C[P]})}_.splice(0);for(const R of this.take(k.sort((P,N)=>N.score-P.score),g))_.push(R)}}else if(!d.test(T)){let I=[],E=[];if(!(T in this.wordDictionary)||a-this.wordDictionary[T].timestamp>=l){const C=await St(de(pe,ge+"/users/"+n+"/dictionary/words/"+T));if(this.wordDictionary[T]={attributes:[],timestamp:a},C.exists()){const k=C.val();for(const R in k.attributes)typeof k.attributes[R]=="number"&&k.attributes[R]>0&&this.attributes.includes(R)&&this.wordDictionary[T].attributes.push(R)}}for(const C of this.wordDictionary[T].attributes)if(C in h){for(const k of h[C])if(!I.includes(k)){let R=!0;I.push(k);for(const P of this.tags)if(k===P.name){E.push(P.score),R=!1;break}R&&E.push(y)}}else{if(!(C in this.reverseWordDictionary)||a-this.reverseWordDictionary[C].timestamp>=l){const k=await St(Ns(de(pe,ge+"/users/"+n+"/dictionary/words"),ul(`attributes/${C}`),cl(100),tf(1)));if(this.reverseWordDictionary[C]={words:[],timestamp:a},k.exists()){const R=k.val();for(let P in R)this.reverseWordDictionary[C].words.push(P)}}for(const k of this.reverseWordDictionary[C].words)if(u.includes(k)&&!I.includes(k)){let R=!0;I.push(k);for(const P of this.tags)if(k==P.name){E.push(P.score),R=!1;break}R&&E.push(y)}}if(I.length>0&&E.length>0){const C=o(E);let k=[];for(let R=0;R<_.length;R++)for(let P=0;P<C.length;P++){let N=[].concat(_[R].sequence);N.push({index:m,term:I[P]}),k.push({sequence:N,score:_[R].score*C[P]})}_.splice(0);for(const R of this.take(k.sort((P,N)=>N.score-P.score),g))_.push(R)}}f.push(T)}m++}const w=_[r(o(_.map(T=>T.score)))];for(let T=0;T<u.length;T++){const I=JSON.stringify(u[T]);if(I in p)typeof p[I]=="undefined"?v+=u[T]:v+=p[I];else{let E=!0;for(let C=0;C<w.sequence.length;C++)if(w.sequence[C].index==T){I==w.sequence[C].term?p[I]=void 0:(p[I]=w.sequence[C].term,v+=w.sequence[C].term,E=!1);break}if(E){if(Array.isArray(u[T]))return null;v+=u[T]}}}return[v,p]},notify:function(n,s=3e3){const i=this;n.id=window.setTimeout(r=>{for(let o=0;o<i.notifications.length;o++)if(i.notifications[o].id===r.id){i.notifications.splice(o,1);break}},s,n),this.notifications.unshift(n)},blinded:async function(n){try{await new Promise(async(s,i)=>{const r=new Image;r.onload=()=>{s(r)},r.onerror=o=>{i(o)},r.crossOrigin="Anonymous",r.src=n.url})}catch(s){return console.error(s),!1}return!0},load:function(n){let s=!0;for(let i of this.preloadImages)i.url==n?i.isLoaded=!0:"isLoaded"in i||(s=!1);if(s){let i=0;for(const r of this.preloadImages)r.isLoaded&&(this.backgroundImages.push({index:i,id:r.id,url:r.url,timestamp:r.timestamp}),i++);this.preloadImages.splice(0),this.isBlinded=!1}},error:function(n){let s=!0;for(let i of this.preloadImages)i.url==n?i.isLoaded=!0:"isLoaded"in i||(s=!1);if(s){let i=0;for(const r of this.preloadImages)r.isLoaded&&(this.backgroundImages.push({index:i,id:r.id,url:r.url,timestamp:r.timestamp}),i++);this.preloadImages.splice(0),this.isBlinded=!1}},shake:function(n){n.animate([{transform:"translate3d(0, 0, 0)"},{transform:"translate3d(8px, 0, 0)"},{transform:"translate3d(-8px, 0, 0)"},{transform:"translate3d(7px, 0, 0)"},{transform:"translate3d(-7px, 0, 0)"},{transform:"translate3d(6px, 0, 0)"},{transform:"translate3d(-6px, 0, 0)"},{transform:"translate3d(5px, 0, 0)"},{transform:"translate3d(-5px, 0, 0)"},{transform:"translate3d(4px, 0, 0)"},{transform:"translate3d(-4px, 0, 0)"},{transform:"translate3d(3px, 0, 0)"},{transform:"translate3d(-3px, 0, 0)"},{transform:"translate3d(2px, 0, 0)"},{transform:"translate3d(-2px, 0, 0)"},{transform:"translate3d(1px, 0, 0)"},{transform:"translate3d(-1px, 0, 0)"},{transform:"translate3d(0, 0, 0)"}],{duration:1e3,iterations:1})},scrollToTop(){this.$nextTick(()=>{window.scroll(0,0)})},scrollToEnd:function(){typeof this.scrollTimeoutID=="number"&&clearTimeout(this.scrollTimeoutID),this.scrollTimeoutID=setTimeout(function(){window.scrollTo(0,document.body.scrollHeight)},500)},animationStart:function(n){this.isAnimating=!0},animationEnd:function(n){const s=this;this.$nextTick(()=>{s.notificationHeight=s.$refs.notifications.getBoundingClientRect().height,s.leaderboardHeight=s.$refs.leaderboard.getBoundingClientRect().height}),this.isPopup||(this.message=null),this.isAnimating=!1},tickerUpdated:function(n){const s=this;this.$nextTick(()=>{for(const i of document.body.querySelectorAll("#input>.columns:last-of-type>.column>.control .clip")){let r=0;for(const o of i.querySelectorAll(":scope .ticker-wrap .ticker .item"))r+=o.getBoundingClientRect().width;r>0&&(s.tickerWidth=Math.min(r/2,document.body.querySelector("#input>.columns:last-of-type>.column>.control .level").getBoundingClientRect().width),i.querySelector(":scope .ticker-wrap .ticker").style.width=r+"px")}})},range:function(n,s){const i=[];for(const r of s)i.push(new Date(new Date(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()).getTime()+r*24*60*60*1e3));return i},arrange:function(n,s){let i=[],r=[];for(const o of n)r.length<s?r.push(o):(i.push(r),r=[o]);return i.push(r),i},take:function(n,s){if(n.length>s){let i=[].concat(n);return i.splice(s),i}return n},reverse:function(n){return[].concat(n).reverse()},standardDeviation:function(n){let s=0,i=0;for(const o of n)s+=o;const r=s/n.length;for(const o of n)i+=(o-r)*(o-r);return i/=n.length,Math.sqrt(i)},formatTime:function(n){const s=Math.floor(n),i=Math.floor(s/86400),r=Math.floor(s/3600),o=Math.floor(s/60),a=s%60;return i>0?i+"d":o>0?r>0?r+"h":o+"m":a+"s"},digestMessage:async function(n){const s=new TextEncoder().encode(n),i=await crypto.subtle.digest("SHA-256",s);return Array.from(new Uint8Array(i)).map(a=>a.toString(16).padStart(2,"0")).join("")},getDistance:function(n,s,i,r){var o=6371,a=this.deg2rad(i-n),l=this.deg2rad(r-s),c=Math.sin(a/2)*Math.sin(a/2)+Math.cos(this.deg2rad(n))*Math.cos(this.deg2rad(i))*Math.sin(l/2)*Math.sin(l/2),u=2*Math.atan2(Math.sqrt(c),Math.sqrt(1-c)),h=o*u;return h},deg2rad:function(n){return n*(Math.PI/180)},encodeGeohash:function(n,s,i=12){const r=[16,8,4,2,1],o="0123456789bcdefghjkmnpqrstuvwxyz";var a=1,l=[],c=[],u=0,h=0;let f="";for(l[0]=-90,l[1]=90,c[0]=-180,c[1]=180;f.length<i;){if(a){const d=(c[0]+c[1])/2;s>d?(h|=r[u],c[0]=d):c[1]=d}else{const d=(l[0]+l[1])/2;n>d?(h|=r[u],l[0]=d):l[1]=d}a=!a,u<4?u++:(f+=o[h],u=0,h=0)}return f},decodeGeohash:function(n){const s=[16,8,4,2,1],i="0123456789bcdefghjkmnpqrstuvwxyz";var r=1,o=[],a=[];o[0]=-90,o[1]=90,a[0]=-180,a[1]=180;for(var l=0;l<n.length;l++)for(var c=n[l],u=i.indexOf(c),h=0;h<5;h++){const f=s[h];r?u&f?a[0]=(a[0]+a[1])/2:a[1]=(a[0]+a[1])/2:u&f?o[0]=(o[0]+o[1])/2:o[1]=(o[0]+o[1])/2,r=!r}return o[2]=(o[0]+o[1])/2,a[2]=(a[0]+a[1])/2,{latitude:o[2],longitude:a[2],topleft:{latitude:o[0],longitude:a[0]},topright:{latitude:o[1],longitude:a[0]},bottomright:{latitude:o[1],longitude:a[1]},bottomleft:{latitude:o[0],longitude:a[1]}}},getNeighbors:function(n){const s=this.calculateAdjacent(n,"right"),i=this.calculateAdjacent(n,"left");return{top:this.calculateAdjacent(n,"top"),bottom:this.calculateAdjacent(n,"bottom"),right:s,left:i,topleft:this.calculateAdjacent(i,"top"),topright:this.calculateAdjacent(s,"top"),bottomright:this.calculateAdjacent(s,"bottom"),bottomleft:this.calculateAdjacent(i,"bottom")}},calculateAdjacent:function(n,s){const i="0123456789bcdefghjkmnpqrstuvwxyz",r={right:{even:"bc01fg45238967deuvhjyznpkmstqrwx"},left:{even:"238967debc01fg45kmstqrwxuvhjyznp"},top:{even:"p0r21436x8zb9dcf5h7kjnmqesgutwvy"},bottom:{even:"14365h7k9dcfesgujnmqp0r2twvyx8zb"}},o={right:{even:"bcfguvyz"},left:{even:"0145hjnp"},top:{even:"prxz"},bottom:{even:"028b"}};r.bottom.odd=r.left.even,r.top.odd=r.right.even,r.left.odd=r.bottom.even,r.right.odd=r.top.even,o.bottom.odd=o.left.even,o.top.odd=o.right.even,o.left.odd=o.bottom.even,o.right.odd=o.top.even,n=n.toLowerCase();var a=n.charAt(n.length-1),l=n.length%2?"odd":"even",c=n.substring(0,n.length-1);return o[s][l].indexOf(a)!=-1&&(c=this.calculateAdjacent(c,s)),c+i[r[s][l].indexOf(a)]},prepare:function(n,s=null,i=null){function r(l,c){return l=Math.ceil(l),c=Math.floor(c),Math.floor(Math.random()*(c-l))+l}let o=[],a=[];for(const l of n){let c=s;s===null&&l.name in this.states&&(c=this.states[l.name]),c!==null&&"state"in l&&l.state!==null&&new RegExp(l.state).test(c)&&o.push(l)}if(o.length===0){for(const l of n)(!("state"in l)||l.state===null)&&o.push(l);s=null}if(o.length>0){let l=[];for(const c of o[r(0,o.length)].sequence)s!==null&&(this.states[c.name]=s),l.push(c);for(;l.length>0;){const c=l.shift();if(c.type=="Sequence"){if(!("sequence"in c)){let u=[],h=[];for(const f of i===null?this.character.sequences:i){let d=this.getSequenceStack(f,c);if(d.length>0){let p=[];do{let v=d.pop();if(d.length>0){let m=[];for(const y of d[d.length-1].sequence)if(y.type=="Sequence"){if("sequence"in y){let g=!0;for(const _ of p)if(_===y){g=!1;break}g&&m.push(y)}if(y===v)break}for(;m.length>0;)p.push(m.pop())}if("sequence"in v){let m=!0;for(const y of p)if(y===v){m=!1;break}m&&p.push(v)}}while(d.length>0);for(;p.length>0;)u.push(p.pop())}else u.push(f)}if("state"in c){this.states[c.name]=c.state;for(const f of u)if(f.name==c.name){if(!new RegExp(f.state).test(c.state))continue;h.push(f)}}else for(const f of u)if(f.name==c.name){if("state"in f&&(!(f.name in this.states)||!new RegExp(f.state).test(this.states[f.name])))continue;h.push(f)}if(h.length>0){let f=0;for(const d of h[r(0,h.length)].sequence)l.splice(f,0,d),f++}}}else a.push(c)}}return a},getSequenceStack:function(n,s){let i=[];if(i.push(n),i[i.length-1]!==s){if("sequence"in n){for(const r of n.sequence)if(r.type=="Sequence"){let o=this.getSequenceStack(r,s);if(o.length>0&&o[o.length-1]===s){let a=[];do a.push(o.pop());while(o.length>0);do i.push(a.pop());while(a.length>0);return i}}}i.pop()}return i},animate:async function(n){if(requestAnimationFrame(this.animate),vn.begin(),this.character!==null){let r=function(a,l){return a=Math.ceil(a),l=Math.floor(l),Math.floor(Math.random()*(l-a))+a};var s=r;const o=(n-this.elapsed)/1e3;if(this.elapsed=n,this.sequenceQueue.length>0&&Array.isArray(this.sequenceQueue[0]))Ri=0;else if(Ri+=o,this.isLoading||(El+=o),this.sequenceQueue.length==0)if(El>=y4){if(this.cachedDocuments.length>0){if(this.documentQueue.length==0){let l=function(c){function u(d,p){return d=Math.ceil(d),p=Math.floor(p),Math.floor(Math.random()*(p-d))+d}let h=[].concat(c),f=c.length;for(;f>1;){const d=u(0,f);f--;const p=h[f];h[f]=h[d],h[d]=p}return h};var i=l;for(const c of l(this.cachedDocuments))this.documentQueue.push(c)}const a=this.documentQueue.shift();this.talk(this.user.uid,a.filter(l=>l!==this.character.name))}Ri=El=0}else Ri>=_4&&(this.sequenceQueue.push({sequences:this.prepare(this.character.sequences.filter(a=>a.name==="Idle"))}),Ri=0);if(!this.isLocked&&this.sequenceQueue.length>0){const a=Array.isArray(this.sequenceQueue[0])?this.sequenceQueue[0]:this.sequenceQueue[0].sequences;if(a.length>0)if(a[0].type=="Animation"){if("frames"in a[0]){for(const l of a[0].frames)if(Array.isArray(l))"character"in a[0]?this.animationQueue.push({character:a[0].character,images:l}):this.animationQueue.push({character:this.character,images:l});else if(typeof l=="object"&&"iterations"in l){if("images"in l){const c="character"in a[0]?a[0].character:this.character;for(let u=0;u<l.iterations;u++)this.animationQueue.push({character:c,images:l.images})}else if("sprites"in l){const c="character"in a[0]?a[0].character:this.character;for(let u=0;u<l.iterations;u++)this.animationQueue.push({character:c,images:l.sprites})}}}a.shift()}else a[0].type=="Message"&&this.message===null&&this.animationQueue.length===0&&("character"in a[0]?this.message={time:0,duration:a[0].duration,type:{elapsed:-1,speed:a[0].speed,reverse:!1,buffer:"",count:0},character:a[0].character,text:a[0].text}:this.message={time:0,duration:a[0].duration,type:{elapsed:-1,speed:a[0].speed,reverse:!1,buffer:"",count:0},character:{name:this.character.name,accent:this.character.accent,image:this.character.image},text:a[0].text},a.shift());else if(this.message===null&&this.animationQueue.length===0){const l=this;Object.keys(this.cachedImages).forEach(function(c){l.cachedSprites.some(u=>u.source===c)||delete l.cachedImages[c]}),this.sequenceQueue.shift(),this.alternative=null;return}}if(this.message!==null){if(this.message.type.reverse)if(this.message.type.count>0){if(this.message.type.elapsed+=o*2,this.message.type.elapsed>=1/this.message.type.speed){if(this.message.type.count-1<this.message.text.length){let l=Math.floor(this.message.text.length/2);this.message.type.buffer.length<=l&&this.message.type.count>0&&(this.message.type.count-=1),this.message.type.buffer.length>0&&(this.message.type.buffer=this.message.type.buffer.substring(0,this.message.type.buffer.length-1))}this.message.type.elapsed=0}}else this.isPopup=!1;else if(this.message.type.buffer.length<this.message.text.length){if(this.message.type.elapsed>=0?this.message.type.elapsed+=o:this.isAnimating||(this.isPopup?this.message.type.elapsed=o:this.isPopup=!0),this.message.type.elapsed>=1/this.message.type.speed){let a=this.message.type.buffer.length,l=Math.floor(this.message.text.length/2),c=this.message.text.length;this.message.type.count>=l&&(this.message.type.buffer+=this.message.text.charAt(a)),this.message.type.count<c&&(this.message.type.count+=1),this.message.type.elapsed=0}}else this.message.time+=o,this.message.time>=this.message.duration&&(this.message.type.reverse=!0);if(this.message.text.length===this.message.type.buffer.length){const a=this.message.text.split("");this.text.splice(0);for(let l=0;l<a.length;l++)this.text.push({key:l,value:a[l]})}else{let a=new Array,l="";for(let c=0;c<this.message.text.length;c++)a.indexOf(this.message.text.charAt(c))==-1&&this.message.text.charAt(c)!=`
`&&this.message.text.charAt(c).match(/\s/)==null&&a.push(this.message.text.charAt(c));if(a.length>0)for(let c=0;c<this.message.type.count;c++)this.message.text.charAt(c)==`
`?l+=`
`:l+=a[~~r(0,a.length)];if(l.length>this.message.type.buffer.length){const c=(this.message.type.buffer+l.substring(this.message.type.buffer.length,l.length)).split("");this.text.splice(0);for(let u=0;u<c.length;u++)this.text.push({key:u,value:c[u]})}else if(this.text.length!==this.message.type.buffer.length){const c=this.message.type.buffer.split("");this.text.splice(0);for(let u=0;u<c.length;u++)this.text.push({key:u,value:c[u]})}}}if(this.animationQueue.length>0){const a=this.animationQueue[0];if(!this.isLocked){const l=[];for(const c of this.animationQueue)l.push(c);this.isLocked=!0;for(const c of l)for(const u of c.images)if(!(u.source in this.cachedImages))try{const h=await new Promise(async(f,d)=>{const p=new Image;p.onload=()=>{f(p)},p.onerror=v=>{d(v)},p.crossOrigin="Anonymous",p.src=u.source});this.cachedImages[u.source]=h}catch(h){console.error(h)}if(this.isLocked=!1,a.character.name===this.character.name){this.cachedSprites.splice(0);for(const c of this.render(this.$refs.canvas.getContext("2d"),this.canvasWidth,this.canvasHeight,a.images))this.cachedSprites.push(c)}else{this.alternative=this.character.alternative,this.alternativeCachedSprites.splice(0);for(const c of this.render(this.$refs.alternative.getContext("2d"),this.alternativeCanvasWidth,this.alternativeCanvasHeight,a.images))this.alternativeCachedSprites.push(c)}this.animationQueue.shift()}}}vn.end()},render:function(n,s,i,r){const o=[];n.clearRect(0,0,s,i);for(const a of r)a.source in this.cachedImages&&("opacity"in a?n.globalAlpha=a.opacity:n.globalAlpha=1,n.drawImage(this.cachedImages[a.source],a.x*window.devicePixelRatio,a.y*window.devicePixelRatio,a.width*window.devicePixelRatio,a.height*window.devicePixelRatio)),o.push(a);return o}},updated:function(){this.insetTop=this.$refs.indicator.getBoundingClientRect().height,this.insetBottom=this.$refs.blank.getBoundingClientRect().height},mounted:async function(){function n(f,d){const p=Math.random();let v=0,m=0;for(let y of f){const g=d(y);if(v<=p&&p<v+g)break;v+=g,m++}return f[m]}const s=this,i=localStorage.getItem("character"),r=localStorage.getItem("credential"),o=localStorage.getItem("stats"),a=localStorage.getItem("fragments");let l=null,c;const u=[{path:"/assets/milch.json",probability:1}],h=[{path:"/assets/merku.json",probability:1}];if(window.location.pathname==="/about"&&(this.mode="_about",this.isRevealed=!0),i)try{const f=JSON.parse(i);f!==null&&(this.isMuted=f.mute)}catch{localStorage.removeItem("character")}if(r)try{l=JSON.parse(r)}catch{localStorage.removeItem("credential")}if(o){const f=new Date().getTime()-7*24*60*60*1e3;try{for(const d of JSON.parse(o)){const p=new Date(d.date);p.getTime()>f&&this.stats.push({date:p,steps:d.steps})}}catch{localStorage.removeItem("stats")}}if(a)try{c=JSON.parse(a)}catch{localStorage.removeItem("fragments"),c=[]}else c=[];this.$refs.container.after(vn.domElement),this.insetTop=this.$refs.indicator.getBoundingClientRect().height,this.insetBottom=this.$refs.blank.getBoundingClientRect().height,this.map=new Microsoft.Maps.Map(this.$refs.map,{mapTypeId:Microsoft.Maps.MapTypeId.canvasLight}),this.map.setOptions({enableHighDpi:window.devicePixelRatio>1,showLocateMeButton:!1,showMapTypeSelector:!1,showZoomButtons:!1,showScalebar:!1,supportedMapTypes:[Microsoft.Maps.MapTypeId.grayscale,Microsoft.Maps.MapTypeId.canvasLight,Microsoft.Maps.MapTypeId.canvasDark]}),this.layer=new Microsoft.Maps.Layer,this.layer.setVisible(!1),this.map.layers.insert(this.layer),Microsoft.Maps.Events.addHandler(this.map,"viewchangeend",()=>{s.user!==null&&s.update()});try{this.progress=1;const f=await fetch(n(u,d=>d.probability).path,{mode:"cors",method:"GET",headers:{"Content-Type":"application/x-www-form-urlencoded"}});if(f.ok){const d=await f.json(),p=this.prepare(d.sequences.filter(g=>g.name==="Start"),null,d.sequences),v=await fetch(n(h,g=>g.probability).path,{mode:"cors",method:"GET",headers:{"Content-Type":"application/x-www-form-urlencoded"}});let m;if(v.ok)m=await v.json();else throw new Error(v.statusText);const y=await fetch("/assets/fragments.json",{mode:"cors",method:"GET",headers:{"Content-Type":"application/x-www-form-urlencoded"}});if(y.ok){const g=Math.floor(new Date/1e3),_=new Date().getTime()-24*60*60*1e3;let w=0;for(const T of await y.json()){const I=[];for(const E of T){const C=c.find(k=>E.some(R=>k.set.includes(R))&&k.count>0&&k.timestamp*1e3>_&&k.checksum===[...String(k.timestamp)].reduce((R,P)=>R+P,0)+[...String(k.count)].reduce((R,P)=>R+P,0));typeof C=="undefined"?I.push({set:E,index:0,count:0,timestamp:g,reserved:!0}):I.push({set:E,index:0,count:C.count,timestamp:C.timestamp,reserved:!0})}this.chars.push(I)}for(const T of c)if(!T.set.some(I=>this.chars.some(E=>E.some(C=>C.set.includes(I))))){const I=[];I.push({set:T.set,index:0,count:T.count,timestamp:T.timestamp,reserved:!1}),this.chars.splice(w,0,I),w++}}else throw new Error(y.statusText);this.progress=null,this.canvasSize.width=d.width,this.canvasSize.height=d.height,this.canvasSize.deviceWidth=d.width*window.devicePixelRatio,this.canvasSize.deviceHeight=d.height*window.devicePixelRatio,this.canvasSize.alternative.width=m.width,this.canvasSize.alternative.height=m.height,this.canvasSize.alternative.deviceWidth=m.width*window.devicePixelRatio,this.canvasSize.alternative.deviceHeight=m.height*window.devicePixelRatio;for(const g of p)if(g.type=="Animation"&&"frames"in g&&g.frames.length>0){let _=null;if(Array.isArray(g.frames[0])?_=g.frames[0]:typeof g.frames[0]=="object"&&"iterations"in g.frames[0]&&("images"in g.frames[0]&&g.frames[0].images.length>0?_=g.frames[0].images:"sprites"in g.frames[0]&&g.frames[0].sprites.length>0&&(_=g.frames[0].sprites)),_!==null){for(const w of _)if(!(w.source in this.cachedImages))try{const T=await new Promise(async(I,E)=>{const C=new Image;C.onload=()=>{I(C)},C.onerror=k=>{E(k)},C.crossOrigin="Anonymous",C.src=w.source});this.cachedImages[w.source]=T}catch(T){console.error(T)}this.cachedSprites.splice(0);for(const w of this.render(this.$refs.canvas.getContext("2d"),this.canvasWidth,this.canvasHeight,_))this.cachedSprites.push(w)}break}this.character=d,this.character.alternative=m,this.sequenceQueue.push(p)}else throw new Error(f.statusText)}catch(f){this.progress=null,this.notify({text:f.message}),console.error(f)}if(this.animate(),l===null)this.mode="sign-in",this.isRevealed=!0;else if(l.providerId===Tt.PROVIDER_ID)try{ju(Bt,Tt.credential(l.idToken))}catch(f){s.notify({text:f.message,accent:this.character.accent,image:this.character.image}),console.error(f.code,f.message)}else if(l.providerId===It.PROVIDER_ID)try{ju(Bt,It.credential(l.accessToken))}catch(f){s.notify({text:f.message,accent:this.character.accent,image:this.character.image}),console.error(f.code,f.message)}else if(l.providerId===Ct.PROVIDER_ID)try{ju(Bt,Ct.credential(l.accessToken,l.secret))}catch(f){s.notify({text:f.message,accent:this.character.accent,image:this.character.image}),console.error(f.code,f.message)}else this.mode="sign-in",this.isRevealed=!0;pS(Bt,f=>{if(f){const d=new Date;s.user=f,s.update();for(const p of s.stats)p.date.getFullYear()===d.getFullYear()&&p.date.getMonth()===d.getMonth()&&p.date.getDate()===d.getDate()&&(s.steps=p.steps);ef(de(pe,ge+"/users/"+f.uid+"/dictionary/count"),p=>{const v=p.val();v===null?s.stars=0:s.stars=v}),ef(Ns(de(pe,ge+"/tracks"),ul("timestamp"),cl(10)),p=>{if(p.exists()){const v=p.val();let m=!1;for(const y in v){const g=s.recentWords.findIndex(_=>_.name===v[y].name);if(g>=0)if(s.recentWords[g].timestamp<v[y].timestamp)s.recentWords.splice(g,1);else continue;v[y].id=y,s.recentWords.push(v[y]),m=!0}m&&(s.recentWords.sort((y,g)=>g.timestamp-y.timestamp),s.recentWords.length>10&&s.recentWords.splice(10,s.recentWords.length-10))}})}else s.user!==null&&(vy(de(pe,ge+"/users/"+s.user.uid+"/dictionary/count")),vy(de(pe,ge+"/tracks")),s.user=null,s.stars=0)})}}).mount("#app");window.addEventListener("resize",n=>{e.insetTop=e.$refs.indicator.getBoundingClientRect().height,e.insetBottom=e.$refs.blank.getBoundingClientRect().height,e.canvasSize.width=e.character.width,e.canvasSize.height=e.character.height,e.canvasSize.deviceWidth=e.character.width*window.devicePixelRatio,e.canvasSize.deviceHeight=e.character.height*window.devicePixelRatio,e.canvasSize.alternative.width=e.character.alternative.width,e.canvasSize.alternative.height=e.character.alternative.height,e.canvasSize.alternative.deviceWidth=e.character.alternative.width*window.devicePixelRatio,e.canvasSize.alternative.deviceHeight=e.character.alternative.height*window.devicePixelRatio,e.animationQueue.unshift({character:e.character,images:[].concat(e.cachedSprites)}),e.alternative!==null&&e.animationQueue.unshift({character:e.character.alternative,images:[].concat(e.alternativeCachedSprites)})}),window.addEventListener("click",n=>{}),window.addEventListener("dblclick",n=>{}),window.addEventListener("mousedown",n=>{}),window.addEventListener("mousemove",n=>{}),window.addEventListener("mouseup",n=>{}),window.addEventListener("touchstart",n=>{n.stopPropagation(),Il==0?(Il++,setTimeout(()=>{Il=0},500)):Il=0}),window.addEventListener("touchmove",n=>{n.stopPropagation()}),window.addEventListener("touchend",n=>{n.stopPropagation()}),window.addEventListener("touchcancel",n=>{n.stopPropagation()}),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",n=>{n.matches?e.isDarkMode=!0:e.isDarkMode=!1})});
