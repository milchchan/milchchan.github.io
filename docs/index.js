const Ev=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}};Ev();function ot(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const Iv="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",Tv=ot(Iv),Cv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Sv=ot(Cv);function Af(t){return!!t||t===""}function Pi(t){if(H(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Y(s)?Nf(s):Pi(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(Y(t))return t;if(Te(t))return t}}const kv=/;(?![^(]*\))/g,Rv=/:(.+)/;function Nf(t){const e={};return t.split(kv).forEach(n=>{if(n){const s=n.split(Rv);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Oi(t){let e="";if(Y(t))e=t;else if(H(t))for(let n=0;n<t.length;n++){const s=Oi(t[n]);s&&(e+=s+" ")}else if(Te(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function Av(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Y(e)&&(t.class=Oi(e)),n&&(t.style=Pi(n)),t}const Nv="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",Pv="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",Ov="area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr",Mv=ot(Nv),xv=ot(Pv),Dv=ot(Ov);function Lv(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=bn(t[s],e[s]);return n}function bn(t,e){if(t===e)return!0;let n=Mf(t),s=Mf(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=H(t),s=H(e),n||s)return n&&s?Lv(t,e):!1;if(n=Te(t),s=Te(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!bn(t[o],e[o]))return!1}}return String(t)===String(e)}function to(t,e){return t.findIndex(n=>bn(n,e))}const Fv=t=>t==null?"":H(t)||Te(t)&&(t.toString===xf||!K(t.toString))?JSON.stringify(t,Pf,2):String(t),Pf=(t,e)=>e&&e.__v_isRef?Pf(t,e.value):$s(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:Qn(e)?{[`Set(${e.size})`]:[...e.values()]}:Te(e)&&!H(e)&&!Df(e)?String(e):e,ae={},Hs=[],Ke=()=>{},no=()=>!1,Uv=/^on[^a-z]/,Gn=t=>Uv.test(t),Sl=t=>t.startsWith("onUpdate:"),le=Object.assign,Of=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Bv=Object.prototype.hasOwnProperty,ie=(t,e)=>Bv.call(t,e),H=Array.isArray,$s=t=>so(t)==="[object Map]",Qn=t=>so(t)==="[object Set]",Mf=t=>t instanceof Date,K=t=>typeof t=="function",Y=t=>typeof t=="string",Ws=t=>typeof t=="symbol",Te=t=>t!==null&&typeof t=="object",kl=t=>Te(t)&&K(t.then)&&K(t.catch),xf=Object.prototype.toString,so=t=>xf.call(t),Hv=t=>so(t).slice(8,-1),Df=t=>so(t)==="[object Object]",Rl=t=>Y(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Yn=ot(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),io=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},$v=/-(\w)/g,$e=io(t=>t.replace($v,(e,n)=>n?n.toUpperCase():"")),Wv=/\B([A-Z])/g,At=io(t=>t.replace(Wv,"-$1").toLowerCase()),Jn=io(t=>t.charAt(0).toUpperCase()+t.slice(1)),Vs=io(t=>t?`on${Jn(t)}`:""),Mi=(t,e)=>!Object.is(t,e),qs=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ro=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},En=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Lf;const Vv=()=>Lf||(Lf=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let $t;const oo=[];class Al{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&$t&&(this.parent=$t,this.index=($t.scopes||($t.scopes=[])).push(this)-1)}run(e){if(this.active)try{return this.on(),e()}finally{this.off()}}on(){this.active&&(oo.push(this),$t=this)}off(){this.active&&(oo.pop(),$t=oo[oo.length-1])}stop(e){if(this.active){if(this.effects.forEach(n=>n.stop()),this.cleanups.forEach(n=>n()),this.scopes&&this.scopes.forEach(n=>n.stop(!0)),this.parent&&!e){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.active=!1}}}function qv(t){return new Al(t)}function Ff(t,e){e=e||$t,e&&e.active&&e.effects.push(t)}function jv(){return $t}function zv(t){$t&&$t.cleanups.push(t)}const Nl=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Uf=t=>(t.w&In)>0,Bf=t=>(t.n&In)>0,Kv=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=In},Gv=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];Uf(i)&&!Bf(i)?i.delete(t):e[n++]=i,i.w&=~In,i.n&=~In}e.length=n}},Pl=new WeakMap;let xi=0,In=1;const Ol=30,Di=[];let Xn;const Zn=Symbol(""),Ml=Symbol("");class Li{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],Ff(this,s)}run(){if(!this.active)return this.fn();if(!Di.includes(this))try{return Di.push(Xn=this),Jv(),In=1<<++xi,xi<=Ol?Kv(this):Hf(this),this.fn()}finally{xi<=Ol&&Gv(this),In=1<<--xi,Tn(),Di.pop();const e=Di.length;Xn=e>0?Di[e-1]:void 0}}stop(){this.active&&(Hf(this),this.onStop&&this.onStop(),this.active=!1)}}function Hf(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}function Qv(t,e){t.effect&&(t=t.effect.fn);const n=new Li(t);e&&(le(n,e),e.scope&&Ff(n,e.scope)),(!e||!e.lazy)&&n.run();const s=n.run.bind(n);return s.effect=n,s}function Yv(t){t.effect.stop()}let js=!0;const xl=[];function es(){xl.push(js),js=!1}function Jv(){xl.push(js),js=!0}function Tn(){const t=xl.pop();js=t===void 0?!0:t}function at(t,e,n){if(!$f())return;let s=Pl.get(t);s||Pl.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=Nl()),Wf(i)}function $f(){return js&&Xn!==void 0}function Wf(t,e){let n=!1;xi<=Ol?Bf(t)||(t.n|=In,n=!Uf(t)):n=!t.has(Xn),n&&(t.add(Xn),Xn.deps.push(t))}function sn(t,e,n,s,i,r){const o=Pl.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&H(t))o.forEach((l,c)=>{(c==="length"||c>=s)&&a.push(l)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":H(t)?Rl(n)&&a.push(o.get("length")):(a.push(o.get(Zn)),$s(t)&&a.push(o.get(Ml)));break;case"delete":H(t)||(a.push(o.get(Zn)),$s(t)&&a.push(o.get(Ml)));break;case"set":$s(t)&&a.push(o.get(Zn));break}if(a.length===1)a[0]&&Dl(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Dl(Nl(l))}}function Dl(t,e){for(const n of H(t)?t:[...t])(n!==Xn||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Xv=ot("__proto__,__v_isRef,__isVue"),Vf=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(Ws)),Zv=ao(),e1=ao(!1,!0),t1=ao(!0),n1=ao(!0,!0),qf=s1();function s1(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ne(this);for(let r=0,o=this.length;r<o;r++)at(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(ne)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){es();const s=ne(this)[e].apply(this,n);return Tn(),s}}),t}function ao(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_raw"&&r===(t?e?td:ed:e?Zf:Xf).get(s))return s;const o=H(s);if(!t&&o&&ie(qf,i))return Reflect.get(qf,i,r);const a=Reflect.get(s,i,r);return(Ws(i)?Vf.has(i):Xv(i))||(t||at(s,"get",i),e)?a:Be(a)?!o||!Rl(i)?a.value:a:Te(a)?t?Fl(a):go(a):a}}const i1=jf(),r1=jf(!0);function jf(t=!1){return function(n,s,i,r){let o=n[s];if(!t&&!yo(i)&&(i=ne(i),o=ne(o),!H(n)&&Be(o)&&!Be(i)))return o.value=i,!0;const a=H(n)&&Rl(s)?Number(s)<n.length:ie(n,s),l=Reflect.set(n,s,i,r);return n===ne(r)&&(a?Mi(i,o)&&sn(n,"set",s,i):sn(n,"add",s,i)),l}}function o1(t,e){const n=ie(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&sn(t,"delete",e,void 0),s}function a1(t,e){const n=Reflect.has(t,e);return(!Ws(e)||!Vf.has(e))&&at(t,"has",e),n}function l1(t){return at(t,"iterate",H(t)?"length":Zn),Reflect.ownKeys(t)}const zf={get:Zv,set:i1,deleteProperty:o1,has:a1,ownKeys:l1},Kf={get:t1,set(t,e){return!0},deleteProperty(t,e){return!0}},c1=le({},zf,{get:e1,set:r1}),u1=le({},Kf,{get:n1}),Ll=t=>t,lo=t=>Reflect.getPrototypeOf(t);function co(t,e,n=!1,s=!1){t=t.__v_raw;const i=ne(t),r=ne(e);e!==r&&!n&&at(i,"get",e),!n&&at(i,"get",r);const{has:o}=lo(i),a=s?Ll:n?Hl:Fi;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function uo(t,e=!1){const n=this.__v_raw,s=ne(n),i=ne(t);return t!==i&&!e&&at(s,"has",t),!e&&at(s,"has",i),t===i?n.has(t):n.has(t)||n.has(i)}function ho(t,e=!1){return t=t.__v_raw,!e&&at(ne(t),"iterate",Zn),Reflect.get(t,"size",t)}function Gf(t){t=ne(t);const e=ne(this);return lo(e).has.call(e,t)||(e.add(t),sn(e,"add",t,t)),this}function Qf(t,e){e=ne(e);const n=ne(this),{has:s,get:i}=lo(n);let r=s.call(n,t);r||(t=ne(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Mi(e,o)&&sn(n,"set",t,e):sn(n,"add",t,e),this}function Yf(t){const e=ne(this),{has:n,get:s}=lo(e);let i=n.call(e,t);i||(t=ne(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&sn(e,"delete",t,void 0),r}function Jf(){const t=ne(this),e=t.size!==0,n=t.clear();return e&&sn(t,"clear",void 0,void 0),n}function fo(t,e){return function(s,i){const r=this,o=r.__v_raw,a=ne(o),l=e?Ll:t?Hl:Fi;return!t&&at(a,"iterate",Zn),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function po(t,e,n){return function(...s){const i=this.__v_raw,r=ne(i),o=$s(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?Ll:e?Hl:Fi;return!e&&at(r,"iterate",l?Ml:Zn),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Cn(t){return function(...e){return t==="delete"?!1:this}}function h1(){const t={get(r){return co(this,r)},get size(){return ho(this)},has:uo,add:Gf,set:Qf,delete:Yf,clear:Jf,forEach:fo(!1,!1)},e={get(r){return co(this,r,!1,!0)},get size(){return ho(this)},has:uo,add:Gf,set:Qf,delete:Yf,clear:Jf,forEach:fo(!1,!0)},n={get(r){return co(this,r,!0)},get size(){return ho(this,!0)},has(r){return uo.call(this,r,!0)},add:Cn("add"),set:Cn("set"),delete:Cn("delete"),clear:Cn("clear"),forEach:fo(!0,!1)},s={get(r){return co(this,r,!0,!0)},get size(){return ho(this,!0)},has(r){return uo.call(this,r,!0)},add:Cn("add"),set:Cn("set"),delete:Cn("delete"),clear:Cn("clear"),forEach:fo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=po(r,!1,!1),n[r]=po(r,!0,!1),e[r]=po(r,!1,!0),s[r]=po(r,!0,!0)}),[t,n,e,s]}const[f1,d1,p1,m1]=h1();function mo(t,e){const n=e?t?m1:p1:t?d1:f1;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(ie(n,i)&&i in s?n:s,i,r)}const g1={get:mo(!1,!1)},_1={get:mo(!1,!0)},y1={get:mo(!0,!1)},v1={get:mo(!0,!0)},Xf=new WeakMap,Zf=new WeakMap,ed=new WeakMap,td=new WeakMap;function w1(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function b1(t){return t.__v_skip||!Object.isExtensible(t)?0:w1(Hv(t))}function go(t){return t&&t.__v_isReadonly?t:_o(t,!1,zf,g1,Xf)}function nd(t){return _o(t,!1,c1,_1,Zf)}function Fl(t){return _o(t,!0,Kf,y1,ed)}function E1(t){return _o(t,!0,u1,v1,td)}function _o(t,e,n,s,i){if(!Te(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=b1(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function ts(t){return yo(t)?ts(t.__v_raw):!!(t&&t.__v_isReactive)}function yo(t){return!!(t&&t.__v_isReadonly)}function Ul(t){return ts(t)||yo(t)}function ne(t){const e=t&&t.__v_raw;return e?ne(e):t}function Bl(t){return ro(t,"__v_skip",!0),t}const Fi=t=>Te(t)?go(t):t,Hl=t=>Te(t)?Fl(t):t;function $l(t){$f()&&(t=ne(t),t.dep||(t.dep=Nl()),Wf(t.dep))}function vo(t,e){t=ne(t),t.dep&&Dl(t.dep)}function Be(t){return Boolean(t&&t.__v_isRef===!0)}function wo(t){return sd(t,!1)}function I1(t){return sd(t,!0)}function sd(t,e){return Be(t)?t:new T1(t,e)}class T1{constructor(e,n){this._shallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ne(e),this._value=n?e:Fi(e)}get value(){return $l(this),this._value}set value(e){e=this._shallow?e:ne(e),Mi(e,this._rawValue)&&(this._rawValue=e,this._value=this._shallow?e:Fi(e),vo(this))}}function C1(t){vo(t)}function id(t){return Be(t)?t.value:t}const S1={get:(t,e,n)=>id(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Be(i)&&!Be(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Wl(t){return ts(t)?t:new Proxy(t,S1)}class k1{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:s}=e(()=>$l(this),()=>vo(this));this._get=n,this._set=s}get value(){return this._get()}set value(e){this._set(e)}}function R1(t){return new k1(t)}function A1(t){const e=H(t)?new Array(t.length):{};for(const n in t)e[n]=rd(t,n);return e}class N1{constructor(e,n){this._object=e,this._key=n,this.__v_isRef=!0}get value(){return this._object[this._key]}set value(e){this._object[this._key]=e}}function rd(t,e){const n=t[e];return Be(n)?n:new N1(t,e)}class P1{constructor(e,n,s){this._setter=n,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new Li(e,()=>{this._dirty||(this._dirty=!0,vo(this))}),this.__v_isReadonly=s}get value(){const e=ne(this);return $l(e),e._dirty&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function od(t,e){let n,s;const i=K(t);return i?(n=t,s=Ke):(n=t.get,s=t.set),new P1(n,s,i||!s)}Promise.resolve();let zs,bo=[];function ad(t,e){var n,s;zs=t,zs?(zs.enabled=!0,bo.forEach(({event:i,args:r})=>zs.emit(i,...r)),bo=[]):typeof window!="undefined"&&window.HTMLElement&&!((s=(n=window.navigator)===null||n===void 0?void 0:n.userAgent)===null||s===void 0?void 0:s.includes("jsdom"))?((e.__VUE_DEVTOOLS_HOOK_REPLAY__=e.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(r=>{ad(r,e)}),setTimeout(()=>{zs||(e.__VUE_DEVTOOLS_HOOK_REPLAY__=null,bo=[])},3e3)):bo=[]}function O1(t,e,...n){const s=t.vnode.props||ae;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[u]||ae;f?i=n.map(d=>d.trim()):h&&(i=n.map(En))}let a,l=s[a=Vs(e)]||s[a=Vs($e(e))];!l&&r&&(l=s[a=Vs(At(e))]),l&&ut(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,ut(c,t,6,i)}}function ld(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!K(t)){const l=c=>{const u=ld(c,e,!0);u&&(a=!0,le(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(s.set(t,null),null):(H(r)?r.forEach(l=>o[l]=null):le(o,r),s.set(t,o),o)}function Vl(t,e){return!t||!Gn(e)?!1:(e=e.slice(2).replace(/Once$/,""),ie(t,e[0].toLowerCase()+e.slice(1))||ie(t,At(e))||ie(t,e))}let lt=null,Eo=null;function Ui(t){const e=lt;return lt=t,Eo=t&&t.type.__scopeId||null,e}function M1(t){Eo=t}function x1(){Eo=null}const D1=t=>ql;function ql(t,e=lt,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&cc(-1);const r=Ui(e),o=t(...i);return Ui(r),s._d&&cc(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function Io(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:d,ctx:p,inheritAttrs:v}=t;let _,y;const m=Ui(t);try{if(n.shapeFlag&4){const w=i||s;_=ct(u.call(w,w,h,r,d,f,p)),y=l}else{const w=e;_=ct(w.length>1?w(r,{attrs:l,slots:a,emit:c}):w(r,null)),y=e.props?l:F1(l)}}catch(w){zi.length=0,rs(w,t,1),_=we(Qe)}let g=_;if(y&&v!==!1){const w=Object.keys(y),{shapeFlag:T}=g;w.length&&T&(1|6)&&(o&&w.some(Sl)&&(y=U1(y,o)),g=Rn(g,y))}return n.dirs&&(g.dirs=g.dirs?g.dirs.concat(n.dirs):n.dirs),n.transition&&(g.transition=n.transition),_=g,Ui(m),_}function L1(t){let e;for(let n=0;n<t.length;n++){const s=t[n];if(kn(s)){if(s.type!==Qe||s.children==="v-if"){if(e)return;e=s}}else return}return e}const F1=t=>{let e;for(const n in t)(n==="class"||n==="style"||Gn(n))&&((e||(e={}))[n]=t[n]);return e},U1=(t,e)=>{const n={};for(const s in t)(!Sl(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function B1(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?cd(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!Vl(c,f))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?cd(s,o,c):!0:!!o;return!1}function cd(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Vl(n,r))return!0}return!1}function jl({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const H1=t=>t.__isSuspense,$1={name:"Suspense",__isSuspense:!0,process(t,e,n,s,i,r,o,a,l,c){t==null?V1(e,n,s,i,r,o,a,l,c):q1(t,e,n,s,i,o,a,l,c)},hydrate:j1,create:zl,normalize:z1},W1=$1;function Bi(t,e){const n=t.props&&t.props[e];K(n)&&n()}function V1(t,e,n,s,i,r,o,a,l){const{p:c,o:{createElement:u}}=l,h=u("div"),f=t.suspense=zl(t,i,s,e,h,n,r,o,a,l);c(null,f.pendingBranch=t.ssContent,h,null,s,f,r,o),f.deps>0?(Bi(t,"onPending"),Bi(t,"onFallback"),c(null,t.ssFallback,e,n,s,null,r,o),Ks(f,t.ssFallback)):f.resolve()}function q1(t,e,n,s,i,r,o,a,{p:l,um:c,o:{createElement:u}}){const h=e.suspense=t.suspense;h.vnode=e,e.el=t.el;const f=e.ssContent,d=e.ssFallback,{activeBranch:p,pendingBranch:v,isInFallback:_,isHydrating:y}=h;if(v)h.pendingBranch=f,qt(f,v)?(l(v,f,h.hiddenContainer,null,i,h,r,o,a),h.deps<=0?h.resolve():_&&(l(p,d,n,s,i,null,r,o,a),Ks(h,d))):(h.pendingId++,y?(h.isHydrating=!1,h.activeBranch=v):c(v,i,h),h.deps=0,h.effects.length=0,h.hiddenContainer=u("div"),_?(l(null,f,h.hiddenContainer,null,i,h,r,o,a),h.deps<=0?h.resolve():(l(p,d,n,s,i,null,r,o,a),Ks(h,d))):p&&qt(f,p)?(l(p,f,n,s,i,h,r,o,a),h.resolve(!0)):(l(null,f,h.hiddenContainer,null,i,h,r,o,a),h.deps<=0&&h.resolve()));else if(p&&qt(f,p))l(p,f,n,s,i,h,r,o,a),Ks(h,f);else if(Bi(e,"onPending"),h.pendingBranch=f,h.pendingId++,l(null,f,h.hiddenContainer,null,i,h,r,o,a),h.deps<=0)h.resolve();else{const{timeout:m,pendingId:g}=h;m>0?setTimeout(()=>{h.pendingId===g&&h.fallback(d)},m):m===0&&h.fallback(d)}}function zl(t,e,n,s,i,r,o,a,l,c,u=!1){const{p:h,m:f,um:d,n:p,o:{parentNode:v,remove:_}}=c,y=En(t.props&&t.props.timeout),m={vnode:t,parent:e,parentComponent:n,isSVG:o,container:s,hiddenContainer:i,anchor:r,deps:0,pendingId:0,timeout:typeof y=="number"?y:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(g=!1){const{vnode:w,activeBranch:T,pendingBranch:E,pendingId:I,effects:C,parentComponent:k,container:R}=m;if(m.isHydrating)m.isHydrating=!1;else if(!g){const $=T&&E.transition&&E.transition.mode==="out-in";$&&(T.transition.afterLeave=()=>{I===m.pendingId&&f(E,R,J,0)});let{anchor:J}=m;T&&(J=p(T),d(T,k,m,!0)),$||f(E,R,J,0)}Ks(m,E),m.pendingBranch=null,m.isInFallback=!1;let x=m.parent,N=!1;for(;x;){if(x.pendingBranch){x.effects.push(...C),N=!0;break}x=x.parent}N||Tc(C),m.effects=[],Bi(w,"onResolve")},fallback(g){if(!m.pendingBranch)return;const{vnode:w,activeBranch:T,parentComponent:E,container:I,isSVG:C}=m;Bi(w,"onFallback");const k=p(T),R=()=>{!m.isInFallback||(h(null,g,I,k,E,null,C,a,l),Ks(m,g))},x=g.transition&&g.transition.mode==="out-in";x&&(T.transition.afterLeave=R),m.isInFallback=!0,d(T,E,null,!0),x||R()},move(g,w,T){m.activeBranch&&f(m.activeBranch,g,w,T),m.container=g},next(){return m.activeBranch&&p(m.activeBranch)},registerDep(g,w){const T=!!m.pendingBranch;T&&m.deps++;const E=g.vnode.el;g.asyncDep.catch(I=>{rs(I,g,0)}).then(I=>{if(g.isUnmounted||m.isUnmounted||m.pendingId!==g.suspenseId)return;g.asyncResolved=!0;const{vnode:C}=g;gc(g,I,!1),E&&(C.el=E);const k=!E&&g.subTree.el;w(g,C,v(E||g.subTree.el),E?null:p(g.subTree),m,o,l),k&&_(k),jl(g,C.el),T&&--m.deps==0&&m.resolve()})},unmount(g,w){m.isUnmounted=!0,m.activeBranch&&d(m.activeBranch,n,g,w),m.pendingBranch&&d(m.pendingBranch,n,g,w)}};return m}function j1(t,e,n,s,i,r,o,a,l){const c=e.suspense=zl(e,s,n,t.parentNode,document.createElement("div"),null,i,r,o,a,!0),u=l(t,c.pendingBranch=e.ssContent,n,c,r,o);return c.deps===0&&c.resolve(),u}function z1(t){const{shapeFlag:e,children:n}=t,s=e&32;t.ssContent=ud(s?n.default:n),t.ssFallback=s?ud(n.fallback):we(Qe)}function ud(t){let e;if(K(t)){const n=Ys&&t._c;n&&(t._d=!1,Mo()),t=t(),n&&(t._d=!0,e=Vt,qd())}return H(t)&&(t=L1(t)),t=ct(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function hd(t,e){e&&e.pendingBranch?H(t)?e.effects.push(...t):e.effects.push(t):Tc(t)}function Ks(t,e){t.activeBranch=e;const{vnode:n,parentComponent:s}=t,i=n.el=e.el;s&&s.subTree===n&&(s.vnode.el=i,jl(s,i))}function fd(t,e){if(Ne){let n=Ne.provides;const s=Ne.parent&&Ne.parent.provides;s===n&&(n=Ne.provides=Object.create(s)),n[t]=e}}function Hi(t,e,n=!1){const s=Ne||lt;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&K(e)?e.call(s.proxy):e}}function Kl(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return qi(()=>{t.isMounted=!0}),ko(()=>{t.isUnmounting=!0}),t}const _t=[Function,Array],K1={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:_t,onEnter:_t,onAfterEnter:_t,onEnterCancelled:_t,onBeforeLeave:_t,onLeave:_t,onAfterLeave:_t,onLeaveCancelled:_t,onBeforeAppear:_t,onAppear:_t,onAfterAppear:_t,onAppearCancelled:_t},setup(t,{slots:e}){const n=Nn(),s=Kl();let i;return()=>{const r=e.default&&To(e.default(),!0);if(!r||!r.length)return;const o=ne(t),{mode:a}=o,l=r[0];if(s.isLeaving)return Ql(l);const c=pd(l);if(!c)return Ql(l);const u=Gs(c,o,s,n);ns(c,u);const h=n.subTree,f=h&&pd(h);let d=!1;const{getTransitionKey:p}=c.type;if(p){const v=p();i===void 0?i=v:v!==i&&(i=v,d=!0)}if(f&&f.type!==Qe&&(!qt(c,f)||d)){const v=Gs(f,o,s,n);if(ns(f,v),a==="out-in")return s.isLeaving=!0,v.afterLeave=()=>{s.isLeaving=!1,n.update()},Ql(l);a==="in-out"&&c.type!==Qe&&(v.delayLeave=(_,y,m)=>{const g=dd(s,f);g[String(f.key)]=f,_._leaveCb=()=>{y(),_._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=m})}return l}}},Gl=K1;function dd(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Gs(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:d,onLeaveCancelled:p,onBeforeAppear:v,onAppear:_,onAfterAppear:y,onAppearCancelled:m}=e,g=String(t.key),w=dd(n,t),T=(I,C)=>{I&&ut(I,s,9,C)},E={mode:r,persisted:o,beforeEnter(I){let C=a;if(!n.isMounted)if(i)C=v||a;else return;I._leaveCb&&I._leaveCb(!0);const k=w[g];k&&qt(t,k)&&k.el._leaveCb&&k.el._leaveCb(),T(C,[I])},enter(I){let C=l,k=c,R=u;if(!n.isMounted)if(i)C=_||l,k=y||c,R=m||u;else return;let x=!1;const N=I._enterCb=$=>{x||(x=!0,$?T(R,[I]):T(k,[I]),E.delayedLeave&&E.delayedLeave(),I._enterCb=void 0)};C?(C(I,N),C.length<=1&&N()):N()},leave(I,C){const k=String(t.key);if(I._enterCb&&I._enterCb(!0),n.isUnmounting)return C();T(h,[I]);let R=!1;const x=I._leaveCb=N=>{R||(R=!0,C(),N?T(p,[I]):T(d,[I]),I._leaveCb=void 0,w[k]===t&&delete w[k])};w[k]=t,f?(f(I,x),f.length<=1&&x()):x()},clone(I){return Gs(I,e,n,s)}};return E}function Ql(t){if(Wi(t))return t=Rn(t),t.children=null,t}function pd(t){return Wi(t)?t.children?t.children[0]:void 0:t}function ns(t,e){t.shapeFlag&6&&t.component?ns(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function To(t,e=!1){let n=[],s=0;for(let i=0;i<t.length;i++){const r=t[i];r.type===He?(r.patchFlag&128&&s++,n=n.concat(To(r.children,e))):(e||r.type!==Qe)&&n.push(r)}if(s>1)for(let i=0;i<n.length;i++)n[i].patchFlag=-2;return n}function Yl(t){return K(t)?{setup:t,name:t.name}:t}const $i=t=>!!t.type.__asyncLoader;function G1(t){K(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:s,delay:i=200,timeout:r,suspensible:o=!0,onError:a}=t;let l=null,c,u=0;const h=()=>(u++,l=null,f()),f=()=>{let d;return l||(d=l=e().catch(p=>{if(p=p instanceof Error?p:new Error(String(p)),a)return new Promise((v,_)=>{a(p,()=>v(h()),()=>_(p),u+1)});throw p}).then(p=>d!==l&&l?l:(p&&(p.__esModule||p[Symbol.toStringTag]==="Module")&&(p=p.default),c=p,p)))};return Yl({name:"AsyncComponentWrapper",__asyncLoader:f,get __asyncResolved(){return c},setup(){const d=Ne;if(c)return()=>Jl(c,d);const p=m=>{l=null,rs(m,d,13,!s)};if(o&&d.suspense||Ki)return f().then(m=>()=>Jl(m,d)).catch(m=>(p(m),()=>s?we(s,{error:m}):null));const v=wo(!1),_=wo(),y=wo(!!i);return i&&setTimeout(()=>{y.value=!1},i),r!=null&&setTimeout(()=>{if(!v.value&&!_.value){const m=new Error(`Async component timed out after ${r}ms.`);p(m),_.value=m}},r),f().then(()=>{v.value=!0,d.parent&&Wi(d.parent.vnode)&&Ic(d.parent.update)}).catch(m=>{p(m),_.value=m}),()=>{if(v.value&&c)return Jl(c,d);if(_.value&&s)return we(s,{error:_.value});if(n&&!y.value)return we(n)}}})}function Jl(t,{vnode:{ref:e,props:n,children:s}}){const i=we(t,n,s);return i.ref=e,i}const Wi=t=>t.type.__isKeepAlive,Q1={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=Nn(),s=n.ctx;if(!s.renderer)return e.default;const i=new Map,r=new Set;let o=null;const a=n.suspense,{renderer:{p:l,m:c,um:u,o:{createElement:h}}}=s,f=h("div");s.activate=(m,g,w,T,E)=>{const I=m.component;c(m,g,w,0,a),l(I.vnode,m,g,w,I,a,T,m.slotScopeIds,E),xe(()=>{I.isDeactivated=!1,I.a&&qs(I.a);const C=m.props&&m.props.onVnodeMounted;C&&Ze(C,I.parent,m)},a)},s.deactivate=m=>{const g=m.component;c(m,f,null,1,a),xe(()=>{g.da&&qs(g.da);const w=m.props&&m.props.onVnodeUnmounted;w&&Ze(w,g.parent,m),g.isDeactivated=!0},a)};function d(m){Xl(m),u(m,n,a)}function p(m){i.forEach((g,w)=>{const T=Uo(g.type);T&&(!m||!m(T))&&v(w)})}function v(m){const g=i.get(m);!o||g.type!==o.type?d(g):o&&Xl(o),i.delete(m),r.delete(m)}Zi(()=>[t.include,t.exclude],([m,g])=>{m&&p(w=>Vi(m,w)),g&&p(w=>!Vi(g,w))},{flush:"post",deep:!0});let _=null;const y=()=>{_!=null&&i.set(_,Zl(n.subTree))};return qi(y),So(y),ko(()=>{i.forEach(m=>{const{subTree:g,suspense:w}=n,T=Zl(g);if(m.type===T.type){Xl(T);const E=T.component.da;E&&xe(E,w);return}d(m)})}),()=>{if(_=null,!e.default)return null;const m=e.default(),g=m[0];if(m.length>1)return o=null,m;if(!kn(g)||!(g.shapeFlag&4)&&!(g.shapeFlag&128))return o=null,g;let w=Zl(g);const T=w.type,E=Uo($i(w)?w.type.__asyncResolved||{}:T),{include:I,exclude:C,max:k}=t;if(I&&(!E||!Vi(I,E))||C&&E&&Vi(C,E))return o=w,g;const R=w.key==null?T:w.key,x=i.get(R);return w.el&&(w=Rn(w),g.shapeFlag&128&&(g.ssContent=w)),_=R,x?(w.el=x.el,w.component=x.component,w.transition&&ns(w,w.transition),w.shapeFlag|=512,r.delete(R),r.add(R)):(r.add(R),k&&r.size>parseInt(k,10)&&v(r.values().next().value)),w.shapeFlag|=256,o=w,g}}},Y1=Q1;function Vi(t,e){return H(t)?t.some(n=>Vi(n,e)):Y(t)?t.split(",").indexOf(e)>-1:t.test?t.test(e):!1}function md(t,e){_d(t,"a",e)}function gd(t,e){_d(t,"da",e)}function _d(t,e,n=Ne){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Co(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Wi(i.parent.vnode)&&J1(s,e,n,i),i=i.parent}}function J1(t,e,n,s){const i=Co(e,t,s,!0);Ro(()=>{Of(s[e],i)},n)}function Xl(t){let e=t.shapeFlag;e&256&&(e-=256),e&512&&(e-=512),t.shapeFlag=e}function Zl(t){return t.shapeFlag&128?t.ssContent:t}function Co(t,e,n=Ne,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;es(),Pn(n);const a=ut(e,n,t,o);return On(),Tn(),a});return s?i.unshift(r):i.push(r),r}}const rn=t=>(e,n=Ne)=>(!Ki||t==="sp")&&Co(t,e,n),yd=rn("bm"),qi=rn("m"),vd=rn("bu"),So=rn("u"),ko=rn("bum"),Ro=rn("um"),wd=rn("sp"),bd=rn("rtg"),Ed=rn("rtc");function Id(t,e=Ne){Co("ec",t,e)}let ec=!0;function X1(t){const e=Sd(t),n=t.proxy,s=t.ctx;ec=!1,e.beforeCreate&&Td(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:p,activated:v,deactivated:_,beforeDestroy:y,beforeUnmount:m,destroyed:g,unmounted:w,render:T,renderTracked:E,renderTriggered:I,errorCaptured:C,serverPrefetch:k,expose:R,inheritAttrs:x,components:N,directives:$,filters:J}=e;if(c&&Z1(c,s,null,t.appContext.config.unwrapInjectedRef),o)for(const ce in o){const oe=o[ce];K(oe)&&(s[ce]=oe.bind(n))}if(i){const ce=i.call(n,n);Te(ce)&&(t.data=go(ce))}if(ec=!0,r)for(const ce in r){const oe=r[ce],ze=K(oe)?oe.bind(n,n):K(oe.get)?oe.get.bind(n,n):Ke,Fs=!K(oe)&&K(oe.set)?oe.set.bind(n):Ke,wn=od({get:ze,set:Fs});Object.defineProperty(s,ce,{enumerable:!0,configurable:!0,get:()=>wn.value,set:tn=>wn.value=tn})}if(a)for(const ce in a)Cd(a[ce],s,n,ce);if(l){const ce=K(l)?l.call(n):l;Reflect.ownKeys(ce).forEach(oe=>{fd(oe,ce[oe])})}u&&Td(u,t,"c");function Ae(ce,oe){H(oe)?oe.forEach(ze=>ce(ze.bind(n))):oe&&ce(oe.bind(n))}if(Ae(yd,h),Ae(qi,f),Ae(vd,d),Ae(So,p),Ae(md,v),Ae(gd,_),Ae(Id,C),Ae(Ed,E),Ae(bd,I),Ae(ko,m),Ae(Ro,w),Ae(wd,k),H(R))if(R.length){const ce=t.exposed||(t.exposed={});R.forEach(oe=>{Object.defineProperty(ce,oe,{get:()=>n[oe],set:ze=>n[oe]=ze})})}else t.exposed||(t.exposed={});T&&t.render===Ke&&(t.render=T),x!=null&&(t.inheritAttrs=x),N&&(t.components=N),$&&(t.directives=$)}function Z1(t,e,n=Ke,s=!1){H(t)&&(t=tc(t));for(const i in t){const r=t[i];let o;Te(r)?"default"in r?o=Hi(r.from||i,r.default,!0):o=Hi(r.from||i):o=Hi(r),Be(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function Td(t,e,n){ut(H(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Cd(t,e,n,s){const i=s.includes(".")?hp(n,s):()=>n[s];if(Y(t)){const r=e[t];K(r)&&Zi(i,r)}else if(K(t))Zi(i,t.bind(n));else if(Te(t))if(H(t))t.forEach(r=>Cd(r,e,n,s));else{const r=K(t.handler)?t.handler.bind(n):e[t.handler];K(r)&&Zi(i,r,t)}}function Sd(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>Ao(l,c,o,!0)),Ao(l,e,o)),r.set(e,l),l}function Ao(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Ao(t,r,n,!0),i&&i.forEach(o=>Ao(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=ew[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const ew={data:kd,props:ss,emits:ss,methods:ss,computed:ss,beforeCreate:Ge,created:Ge,beforeMount:Ge,mounted:Ge,beforeUpdate:Ge,updated:Ge,beforeDestroy:Ge,beforeUnmount:Ge,destroyed:Ge,unmounted:Ge,activated:Ge,deactivated:Ge,errorCaptured:Ge,serverPrefetch:Ge,components:ss,directives:ss,watch:nw,provide:kd,inject:tw};function kd(t,e){return e?t?function(){return le(K(t)?t.call(this,this):t,K(e)?e.call(this,this):e)}:e:t}function tw(t,e){return ss(tc(t),tc(e))}function tc(t){if(H(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ge(t,e){return t?[...new Set([].concat(t,e))]:e}function ss(t,e){return t?le(le(Object.create(null),t),e):e}function nw(t,e){if(!t)return e;if(!e)return t;const n=le(Object.create(null),t);for(const s in e)n[s]=Ge(t[s],e[s]);return n}function sw(t,e,n,s=!1){const i={},r={};ro(r,xo,1),t.propsDefaults=Object.create(null),Rd(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:nd(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function iw(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=ne(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];const d=e[f];if(l)if(ie(r,f))d!==r[f]&&(r[f]=d,c=!0);else{const p=$e(f);i[p]=nc(l,a,p,d,t,!1)}else d!==r[f]&&(r[f]=d,c=!0)}}}else{Rd(t,e,i,r)&&(c=!0);let u;for(const h in a)(!e||!ie(e,h)&&((u=At(h))===h||!ie(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=nc(l,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!ie(e,h))&&(delete r[h],c=!0)}c&&sn(t,"set","$attrs")}function Rd(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Yn(l))continue;const c=e[l];let u;i&&ie(i,u=$e(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Vl(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=ne(n),c=a||ae;for(let u=0;u<r.length;u++){const h=r[u];n[h]=nc(i,l,h,c[h],t,!ie(c,h))}}return o}function nc(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=ie(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&K(l)){const{propsDefaults:c}=i;n in c?s=c[n]:(Pn(i),s=c[n]=l.call(null,e),On())}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===At(n))&&(s=!0))}return s}function Ad(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!K(t)){const u=h=>{l=!0;const[f,d]=Ad(h,e,!0);le(o,f),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return s.set(t,Hs),Hs;if(H(r))for(let u=0;u<r.length;u++){const h=$e(r[u]);Nd(h)&&(o[h]=ae)}else if(r)for(const u in r){const h=$e(u);if(Nd(h)){const f=r[u],d=o[h]=H(f)||K(f)?{type:f}:f;if(d){const p=Md(Boolean,d.type),v=Md(String,d.type);d[0]=p>-1,d[1]=v<0||p<v,(p>-1||ie(d,"default"))&&a.push(h)}}}const c=[o,a];return s.set(t,c),c}function Nd(t){return t[0]!=="$"}function Pd(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Od(t,e){return Pd(t)===Pd(e)}function Md(t,e){return H(e)?e.findIndex(n=>Od(n,t)):K(e)&&Od(e,t)?0:-1}const xd=t=>t[0]==="_"||t==="$stable",sc=t=>H(t)?t.map(ct):[ct(t)],rw=(t,e,n)=>{const s=ql((...i)=>sc(e(...i)),n);return s._c=!1,s},Dd=(t,e,n)=>{const s=t._ctx;for(const i in t){if(xd(i))continue;const r=t[i];if(K(r))e[i]=rw(i,r,s);else if(r!=null){const o=sc(r);e[i]=()=>o}}},Ld=(t,e)=>{const n=sc(e);t.slots.default=()=>n},ow=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ne(e),ro(e,"_",n)):Dd(e,t.slots={})}else t.slots={},e&&Ld(t,e);ro(t.slots,xo,1)},aw=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=ae;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(le(i,e),!n&&a===1&&delete i._):(r=!e.$stable,Dd(e,i)),o=e}else e&&(Ld(t,e),o={default:1});if(r)for(const a in i)!xd(a)&&!(a in o)&&delete i[a]};function lw(t,e){const n=lt;if(n===null)return t;const s=n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=ae]=e[r];K(o)&&(o={mounted:o,updated:o}),o.deep&&os(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c})}return t}function Wt(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(es(),ut(l,n,8,[t.el,a,t,e]),Tn())}}function Fd(){return{app:null,config:{isNativeTag:no,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let cw=0;function uw(t,e){return function(s,i=null){i!=null&&!Te(i)&&(i=null);const r=Fd(),o=new Set;let a=!1;const l=r.app={_uid:cw++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:gp,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&K(c.install)?(o.add(c),c.install(l,...u)):K(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const f=we(s,i);return f.appContext=r,u&&e?e(f,c):t(f,c,h),a=!0,l._container=c,c.__vue_app__=l,yc(f.component)||f.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l}};return l}}let Sn=!1;const No=t=>/svg/.test(t.namespaceURI)&&t.tagName!=="foreignObject",ic=t=>t.nodeType===8;function hw(t){const{mt:e,p:n,o:{patchProp:s,nextSibling:i,parentNode:r,remove:o,insert:a,createComment:l}}=t,c=(_,y)=>{if(!y.hasChildNodes()){n(null,_,y),Ho();return}Sn=!1,u(y.firstChild,_,null,null,null),Ho(),Sn&&console.error("Hydration completed but contains mismatches.")},u=(_,y,m,g,w,T=!1)=>{const E=ic(_)&&_.data==="[",I=()=>p(_,y,m,g,w,E),{type:C,ref:k,shapeFlag:R}=y,x=_.nodeType;y.el=_;let N=null;switch(C){case Qs:x!==3?N=I():(_.data!==y.children&&(Sn=!0,_.data=y.children),N=i(_));break;case Qe:x!==8||E?N=I():N=i(_);break;case is:if(x!==1)N=I();else{N=_;const $=!y.children.length;for(let J=0;J<y.staticCount;J++)$&&(y.children+=N.outerHTML),J===y.staticCount-1&&(y.anchor=N),N=i(N);return N}break;case He:E?N=d(_,y,m,g,w,T):N=I();break;default:if(R&1)x!==1||y.type.toLowerCase()!==_.tagName.toLowerCase()?N=I():N=h(_,y,m,g,w,T);else if(R&6){y.slotScopeIds=w;const $=r(_);if(e(y,$,null,m,g,No($),T),N=E?v(_):i(_),$i(y)){let J;E?(J=we(He),J.anchor=N?N.previousSibling:$.lastChild):J=_.nodeType===3?fc(""):we("div"),J.el=_,y.component.subTree=J}}else R&64?x!==8?N=I():N=y.type.hydrate(_,y,m,g,w,T,t,f):R&128&&(N=y.type.hydrate(_,y,m,g,No(r(_)),w,T,t,u))}return k!=null&&Po(k,null,g,y),N},h=(_,y,m,g,w,T)=>{T=T||!!y.dynamicChildren;const{type:E,props:I,patchFlag:C,shapeFlag:k,dirs:R}=y,x=E==="input"&&R||E==="option";if(x||C!==-1){if(R&&Wt(y,null,m,"created"),I)if(x||!T||C&(16|32))for(const $ in I)(x&&$.endsWith("value")||Gn($)&&!Yn($))&&s(_,$,null,I[$],!1,void 0,m);else I.onClick&&s(_,"onClick",null,I.onClick,!1,void 0,m);let N;if((N=I&&I.onVnodeBeforeMount)&&Ze(N,m,y),R&&Wt(y,null,m,"beforeMount"),((N=I&&I.onVnodeMounted)||R)&&hd(()=>{N&&Ze(N,m,y),R&&Wt(y,null,m,"mounted")},g),k&16&&!(I&&(I.innerHTML||I.textContent))){let $=f(_.firstChild,y,_,m,g,w,T);for(;$;){Sn=!0;const J=$;$=$.nextSibling,o(J)}}else k&8&&_.textContent!==y.children&&(Sn=!0,_.textContent=y.children)}return _.nextSibling},f=(_,y,m,g,w,T,E)=>{E=E||!!y.dynamicChildren;const I=y.children,C=I.length;for(let k=0;k<C;k++){const R=E?I[k]:I[k]=ct(I[k]);if(_)_=u(_,R,g,w,T,E);else{if(R.type===Qs&&!R.children)continue;Sn=!0,n(null,R,m,null,g,w,No(m),T)}}return _},d=(_,y,m,g,w,T)=>{const{slotScopeIds:E}=y;E&&(w=w?w.concat(E):E);const I=r(_),C=f(i(_),y,I,m,g,w,T);return C&&ic(C)&&C.data==="]"?i(y.anchor=C):(Sn=!0,a(y.anchor=l("]"),I,C),C)},p=(_,y,m,g,w,T)=>{if(Sn=!0,y.el=null,T){const C=v(_);for(;;){const k=i(_);if(k&&k!==C)o(k);else break}}const E=i(_),I=r(_);return o(_),n(null,y,I,E,m,g,No(I),w),E},v=_=>{let y=0;for(;_;)if(_=i(_),_&&ic(_)&&(_.data==="["&&y++,_.data==="]")){if(y===0)return i(_);y--}return _};return[c,u]}const xe=hd;function Ud(t){return Hd(t)}function Bd(t){return Hd(t,hw)}function Hd(t,e){const n=Vv();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=Ke,cloneNode:p,insertStaticContent:v}=t,_=(b,S,A,O=null,P=null,U=null,B=!1,L=null,F=!!S.dynamicChildren)=>{if(b===S)return;b&&!qt(b,S)&&(O=eo(b),Xe(b,P,U,!0),b=null),S.patchFlag===-2&&(F=!1,S.dynamicChildren=null);const{type:M,ref:q,shapeFlag:W}=S;switch(M){case Qs:y(b,S,A,O);break;case Qe:m(b,S,A,O);break;case is:b==null&&g(S,A,O,B);break;case He:$(b,S,A,O,P,U,B,L,F);break;default:W&1?E(b,S,A,O,P,U,B,L,F):W&6?J(b,S,A,O,P,U,B,L,F):(W&64||W&128)&&M.process(b,S,A,O,P,U,B,L,F,Us)}q!=null&&P&&Po(q,b&&b.ref,U,S||b,!S)},y=(b,S,A,O)=>{if(b==null)s(S.el=a(S.children),A,O);else{const P=S.el=b.el;S.children!==b.children&&c(P,S.children)}},m=(b,S,A,O)=>{b==null?s(S.el=l(S.children||""),A,O):S.el=b.el},g=(b,S,A,O)=>{[b.el,b.anchor]=v(b.children,S,A,O)},w=({el:b,anchor:S},A,O)=>{let P;for(;b&&b!==S;)P=f(b),s(b,A,O),b=P;s(S,A,O)},T=({el:b,anchor:S})=>{let A;for(;b&&b!==S;)A=f(b),i(b),b=A;i(S)},E=(b,S,A,O,P,U,B,L,F)=>{B=B||S.type==="svg",b==null?I(S,A,O,P,U,B,L,F):R(b,S,P,U,B,L,F)},I=(b,S,A,O,P,U,B,L)=>{let F,M;const{type:q,props:W,shapeFlag:j,transition:G,patchFlag:se,dirs:Ee}=b;if(b.el&&p!==void 0&&se===-1)F=b.el=p(b.el);else{if(F=b.el=o(b.type,U,W&&W.is,W),j&8?u(F,b.children):j&16&&k(b.children,F,null,O,P,U&&q!=="foreignObject",B,L),Ee&&Wt(b,null,O,"created"),W){for(const ve in W)ve!=="value"&&!Yn(ve)&&r(F,ve,null,W[ve],U,b.children,O,P,nn);"value"in W&&r(F,"value",null,W.value),(M=W.onVnodeBeforeMount)&&Ze(M,O,b)}C(F,b,b.scopeId,B,O)}Ee&&Wt(b,null,O,"beforeMount");const ge=(!P||P&&!P.pendingBranch)&&G&&!G.persisted;ge&&G.beforeEnter(F),s(F,S,A),((M=W&&W.onVnodeMounted)||ge||Ee)&&xe(()=>{M&&Ze(M,O,b),ge&&G.enter(F),Ee&&Wt(b,null,O,"mounted")},P)},C=(b,S,A,O,P)=>{if(A&&d(b,A),O)for(let U=0;U<O.length;U++)d(b,O[U]);if(P){let U=P.subTree;if(S===U){const B=P.vnode;C(b,B,B.scopeId,B.slotScopeIds,P.parent)}}},k=(b,S,A,O,P,U,B,L,F=0)=>{for(let M=F;M<b.length;M++){const q=b[M]=L?An(b[M]):ct(b[M]);_(null,q,S,A,O,P,U,B,L)}},R=(b,S,A,O,P,U,B)=>{const L=S.el=b.el;let{patchFlag:F,dynamicChildren:M,dirs:q}=S;F|=b.patchFlag&16;const W=b.props||ae,j=S.props||ae;let G;(G=j.onVnodeBeforeUpdate)&&Ze(G,A,S,b),q&&Wt(S,b,A,"beforeUpdate");const se=P&&S.type!=="foreignObject";if(M?x(b.dynamicChildren,M,L,A,O,se,U):B||ze(b,S,L,null,A,O,se,U,!1),F>0){if(F&16)N(L,S,W,j,A,O,P);else if(F&2&&W.class!==j.class&&r(L,"class",null,j.class,P),F&4&&r(L,"style",W.style,j.style,P),F&8){const Ee=S.dynamicProps;for(let ge=0;ge<Ee.length;ge++){const ve=Ee[ge],Rt=W[ve],Bs=j[ve];(Bs!==Rt||ve==="value")&&r(L,ve,Rt,Bs,P,b.children,A,O,nn)}}F&1&&b.children!==S.children&&u(L,S.children)}else!B&&M==null&&N(L,S,W,j,A,O,P);((G=j.onVnodeUpdated)||q)&&xe(()=>{G&&Ze(G,A,S,b),q&&Wt(S,b,A,"updated")},O)},x=(b,S,A,O,P,U,B)=>{for(let L=0;L<S.length;L++){const F=b[L],M=S[L],q=F.el&&(F.type===He||!qt(F,M)||F.shapeFlag&(6|64))?h(F.el):A;_(F,M,q,null,O,P,U,B,!0)}},N=(b,S,A,O,P,U,B)=>{if(A!==O){for(const L in O){if(Yn(L))continue;const F=O[L],M=A[L];F!==M&&L!=="value"&&r(b,L,M,F,B,S.children,P,U,nn)}if(A!==ae)for(const L in A)!Yn(L)&&!(L in O)&&r(b,L,A[L],null,B,S.children,P,U,nn);"value"in O&&r(b,"value",A.value,O.value)}},$=(b,S,A,O,P,U,B,L,F)=>{const M=S.el=b?b.el:a(""),q=S.anchor=b?b.anchor:a("");let{patchFlag:W,dynamicChildren:j,slotScopeIds:G}=S;G&&(L=L?L.concat(G):G),b==null?(s(M,A,O),s(q,A,O),k(S.children,A,q,P,U,B,L,F)):W>0&&W&64&&j&&b.dynamicChildren?(x(b.dynamicChildren,j,A,P,U,B,L),(S.key!=null||P&&S===P.subTree)&&rc(b,S,!0)):ze(b,S,A,q,P,U,B,L,F)},J=(b,S,A,O,P,U,B,L,F)=>{S.slotScopeIds=L,b==null?S.shapeFlag&512?P.ctx.activate(S,A,O,B,F):Bt(S,A,O,P,U,B,F):Ae(b,S,F)},Bt=(b,S,A,O,P,U,B)=>{const L=b.component=Yd(b,O,P);if(Wi(b)&&(L.ctx.renderer=Us),Xd(L),L.asyncDep){if(P&&P.registerDep(L,ce),!b.el){const F=L.subTree=we(Qe);m(null,F,S,A)}return}ce(L,b,S,A,P,U,B)},Ae=(b,S,A)=>{const O=S.component=b.component;if(B1(b,S,A))if(O.asyncDep&&!O.asyncResolved){oe(O,S,A);return}else O.next=S,jw(O.update),O.update();else S.component=b.component,S.el=b.el,O.vnode=S},ce=(b,S,A,O,P,U,B)=>{const L=()=>{if(b.isMounted){let{next:q,bu:W,u:j,parent:G,vnode:se}=b,Ee=q,ge;F.allowRecurse=!1,q?(q.el=se.el,oe(b,q,B)):q=se,W&&qs(W),(ge=q.props&&q.props.onVnodeBeforeUpdate)&&Ze(ge,G,q,se),F.allowRecurse=!0;const ve=Io(b),Rt=b.subTree;b.subTree=ve,_(Rt,ve,h(Rt.el),eo(Rt),b,P,U),q.el=ve.el,Ee===null&&jl(b,ve.el),j&&xe(j,P),(ge=q.props&&q.props.onVnodeUpdated)&&xe(()=>Ze(ge,G,q,se),P)}else{let q;const{el:W,props:j}=S,{bm:G,m:se,parent:Ee}=b,ge=$i(S);if(F.allowRecurse=!1,G&&qs(G),!ge&&(q=j&&j.onVnodeBeforeMount)&&Ze(q,Ee,S),F.allowRecurse=!0,W&&Cl){const ve=()=>{b.subTree=Io(b),Cl(W,b.subTree,b,P,null)};ge?S.type.__asyncLoader().then(()=>!b.isUnmounted&&ve()):ve()}else{const ve=b.subTree=Io(b);_(null,ve,A,O,b,P,U),S.el=ve.el}if(se&&xe(se,P),!ge&&(q=j&&j.onVnodeMounted)){const ve=S;xe(()=>Ze(q,Ee,ve),P)}S.shapeFlag&256&&b.a&&xe(b.a,P),b.isMounted=!0,S=A=O=null}},F=new Li(L,()=>Ic(b.update),b.scope),M=b.update=F.run.bind(F);M.id=b.uid,F.allowRecurse=M.allowRecurse=!0,M()},oe=(b,S,A)=>{S.component=b;const O=b.vnode.props;b.vnode=S,b.next=null,iw(b,S.props,O,A),aw(b,S.children,A),es(),Cc(void 0,b.update),Tn()},ze=(b,S,A,O,P,U,B,L,F=!1)=>{const M=b&&b.children,q=b?b.shapeFlag:0,W=S.children,{patchFlag:j,shapeFlag:G}=S;if(j>0){if(j&128){wn(M,W,A,O,P,U,B,L,F);return}else if(j&256){Fs(M,W,A,O,P,U,B,L,F);return}}G&8?(q&16&&nn(M,P,U),W!==M&&u(A,W)):q&16?G&16?wn(M,W,A,O,P,U,B,L,F):nn(M,P,U,!0):(q&8&&u(A,""),G&16&&k(W,A,O,P,U,B,L,F))},Fs=(b,S,A,O,P,U,B,L,F)=>{b=b||Hs,S=S||Hs;const M=b.length,q=S.length,W=Math.min(M,q);let j;for(j=0;j<W;j++){const G=S[j]=F?An(S[j]):ct(S[j]);_(b[j],G,A,null,P,U,B,L,F)}M>q?nn(b,P,U,!0,!1,W):k(S,A,O,P,U,B,L,F,W)},wn=(b,S,A,O,P,U,B,L,F)=>{let M=0;const q=S.length;let W=b.length-1,j=q-1;for(;M<=W&&M<=j;){const G=b[M],se=S[M]=F?An(S[M]):ct(S[M]);if(qt(G,se))_(G,se,A,null,P,U,B,L,F);else break;M++}for(;M<=W&&M<=j;){const G=b[W],se=S[j]=F?An(S[j]):ct(S[j]);if(qt(G,se))_(G,se,A,null,P,U,B,L,F);else break;W--,j--}if(M>W){if(M<=j){const G=j+1,se=G<q?S[G].el:O;for(;M<=j;)_(null,S[M]=F?An(S[M]):ct(S[M]),A,se,P,U,B,L,F),M++}}else if(M>j)for(;M<=W;)Xe(b[M],P,U,!0),M++;else{const G=M,se=M,Ee=new Map;for(M=se;M<=j;M++){const rt=S[M]=F?An(S[M]):ct(S[M]);rt.key!=null&&Ee.set(rt.key,M)}let ge,ve=0;const Rt=j-se+1;let Bs=!1,Sf=0;const Ni=new Array(Rt);for(M=0;M<Rt;M++)Ni[M]=0;for(M=G;M<=W;M++){const rt=b[M];if(ve>=Rt){Xe(rt,P,U,!0);continue}let Ht;if(rt.key!=null)Ht=Ee.get(rt.key);else for(ge=se;ge<=j;ge++)if(Ni[ge-se]===0&&qt(rt,S[ge])){Ht=ge;break}Ht===void 0?Xe(rt,P,U,!0):(Ni[Ht-se]=M+1,Ht>=Sf?Sf=Ht:Bs=!0,_(rt,S[Ht],A,null,P,U,B,L,F),ve++)}const kf=Bs?fw(Ni):Hs;for(ge=kf.length-1,M=Rt-1;M>=0;M--){const rt=se+M,Ht=S[rt],Rf=rt+1<q?S[rt+1].el:O;Ni[M]===0?_(null,Ht,A,Rf,P,U,B,L,F):Bs&&(ge<0||M!==kf[ge]?tn(Ht,A,Rf,2):ge--)}}},tn=(b,S,A,O,P=null)=>{const{el:U,type:B,transition:L,children:F,shapeFlag:M}=b;if(M&6){tn(b.component.subTree,S,A,O);return}if(M&128){b.suspense.move(S,A,O);return}if(M&64){B.move(b,S,A,Us);return}if(B===He){s(U,S,A);for(let W=0;W<F.length;W++)tn(F[W],S,A,O);s(b.anchor,S,A);return}if(B===is){w(b,S,A);return}if(O!==2&&M&1&&L)if(O===0)L.beforeEnter(U),s(U,S,A),xe(()=>L.enter(U),P);else{const{leave:W,delayLeave:j,afterLeave:G}=L,se=()=>s(U,S,A),Ee=()=>{W(U,()=>{se(),G&&G()})};j?j(U,se,Ee):Ee()}else s(U,S,A)},Xe=(b,S,A,O=!1,P=!1)=>{const{type:U,props:B,ref:L,children:F,dynamicChildren:M,shapeFlag:q,patchFlag:W,dirs:j}=b;if(L!=null&&Po(L,null,A,b,!0),q&256){S.ctx.deactivate(b);return}const G=q&1&&j,se=!$i(b);let Ee;if(se&&(Ee=B&&B.onVnodeBeforeUnmount)&&Ze(Ee,S,b),q&6)Il(b.component,A,O);else{if(q&128){b.suspense.unmount(A,O);return}G&&Wt(b,null,S,"beforeUnmount"),q&64?b.type.remove(b,S,A,P,Us,O):M&&(U!==He||W>0&&W&64)?nn(M,S,A,!1,!0):(U===He&&W&(128|256)||!P&&q&16)&&nn(F,S,A),O&&Ri(b)}(se&&(Ee=B&&B.onVnodeUnmounted)||G)&&xe(()=>{Ee&&Ze(Ee,S,b),G&&Wt(b,null,S,"unmounted")},A)},Ri=b=>{const{type:S,el:A,anchor:O,transition:P}=b;if(S===He){Ai(A,O);return}if(S===is){T(b);return}const U=()=>{i(A),P&&!P.persisted&&P.afterLeave&&P.afterLeave()};if(b.shapeFlag&1&&P&&!P.persisted){const{leave:B,delayLeave:L}=P,F=()=>B(A,U);L?L(b.el,U,F):F()}else U()},Ai=(b,S)=>{let A;for(;b!==S;)A=f(b),i(b),b=A;i(S)},Il=(b,S,A)=>{const{bum:O,scope:P,update:U,subTree:B,um:L}=b;O&&qs(O),P.stop(),U&&(U.active=!1,Xe(B,b,S,A)),L&&xe(L,S),xe(()=>{b.isUnmounted=!0},S),S&&S.pendingBranch&&!S.isUnmounted&&b.asyncDep&&!b.asyncResolved&&b.suspenseId===S.pendingId&&(S.deps--,S.deps===0&&S.resolve())},nn=(b,S,A,O=!1,P=!1,U=0)=>{for(let B=U;B<b.length;B++)Xe(b[B],S,A,O,P)},eo=b=>b.shapeFlag&6?eo(b.component.subTree):b.shapeFlag&128?b.suspense.next():f(b.anchor||b.el),Cf=(b,S,A)=>{b==null?S._vnode&&Xe(S._vnode,null,null,!0):_(S._vnode||null,b,S,null,null,null,A),Ho(),S._vnode=b},Us={p:_,um:Xe,m:tn,r:Ri,mt:Bt,mc:k,pc:ze,pbc:x,n:eo,o:t};let Tl,Cl;return e&&([Tl,Cl]=e(Us)),{render:Cf,hydrate:Tl,createApp:uw(Cf,Tl)}}function Po(t,e,n,s,i=!1){if(H(t)){t.forEach((f,d)=>Po(f,e&&(H(e)?e[d]:e),n,s,i));return}if($i(s)&&!i)return;const r=s.shapeFlag&4?yc(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===ae?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Y(c)?(u[c]=null,ie(h,c)&&(h[c]=null)):Be(c)&&(c.value=null)),Y(l)){const f=()=>{u[l]=o,ie(h,l)&&(h[l]=o)};o?(f.id=-1,xe(f,n)):f()}else if(Be(l)){const f=()=>{l.value=o};o?(f.id=-1,xe(f,n)):f()}else K(l)&&jt(l,a,12,[o,u])}function Ze(t,e,n,s=null){ut(t,e,7,[n,s])}function rc(t,e,n=!1){const s=t.children,i=e.children;if(H(s)&&H(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=An(i[r]),a.el=o.el),n||rc(o,a))}}function fw(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const dw=t=>t.__isTeleport,ji=t=>t&&(t.disabled||t.disabled===""),$d=t=>typeof SVGElement!="undefined"&&t instanceof SVGElement,oc=(t,e)=>{const n=t&&t.to;return Y(n)?e?e(n):null:n},pw={__isTeleport:!0,process(t,e,n,s,i,r,o,a,l,c){const{mc:u,pc:h,pbc:f,o:{insert:d,querySelector:p,createText:v,createComment:_}}=c,y=ji(e.props);let{shapeFlag:m,children:g,dynamicChildren:w}=e;if(t==null){const T=e.el=v(""),E=e.anchor=v("");d(T,n,s),d(E,n,s);const I=e.target=oc(e.props,p),C=e.targetAnchor=v("");I&&(d(C,I),o=o||$d(I));const k=(R,x)=>{m&16&&u(g,R,x,i,r,o,a,l)};y?k(n,E):I&&k(I,C)}else{e.el=t.el;const T=e.anchor=t.anchor,E=e.target=t.target,I=e.targetAnchor=t.targetAnchor,C=ji(t.props),k=C?n:E,R=C?T:I;if(o=o||$d(E),w?(f(t.dynamicChildren,w,k,i,r,o,a),rc(t,e,!0)):l||h(t,e,k,R,i,r,o,a,!1),y)C||Oo(e,n,T,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const x=e.target=oc(e.props,p);x&&Oo(e,x,null,c,0)}else C&&Oo(e,E,I,c,1)}},remove(t,e,n,s,{um:i,o:{remove:r}},o){const{shapeFlag:a,children:l,anchor:c,targetAnchor:u,target:h,props:f}=t;if(h&&r(u),(o||!ji(f))&&(r(c),a&16))for(let d=0;d<l.length;d++){const p=l[d];i(p,e,n,!0,!!p.dynamicChildren)}},move:Oo,hydrate:mw};function Oo(t,e,n,{o:{insert:s},m:i},r=2){r===0&&s(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=t,h=r===2;if(h&&s(o,e,n),(!h||ji(u))&&l&16)for(let f=0;f<c.length;f++)i(c[f],e,n,2);h&&s(a,e,n)}function mw(t,e,n,s,i,r,{o:{nextSibling:o,parentNode:a,querySelector:l}},c){const u=e.target=oc(e.props,l);if(u){const h=u._lpa||u.firstChild;e.shapeFlag&16&&(ji(e.props)?(e.anchor=c(o(t),e,a(t),n,s,i,r),e.targetAnchor=h):(e.anchor=o(t),e.targetAnchor=c(h,e,u,n,s,i,r)),u._lpa=e.targetAnchor&&o(e.targetAnchor))}return e.anchor&&o(e.anchor)}const gw=pw,ac="components",_w="directives";function yw(t,e){return lc(ac,t,!0,e)||t}const Wd=Symbol();function vw(t){return Y(t)?lc(ac,t,!1)||t:t||Wd}function ww(t){return lc(_w,t)}function lc(t,e,n=!0,s=!1){const i=lt||Ne;if(i){const r=i.type;if(t===ac){const a=Uo(r);if(a&&(a===e||a===$e(e)||a===Jn($e(e))))return r}const o=Vd(i[t]||r[t],e)||Vd(i.appContext[t],e);return!o&&s?r:o}}function Vd(t,e){return t&&(t[e]||t[$e(e)]||t[Jn($e(e))])}const He=Symbol(void 0),Qs=Symbol(void 0),Qe=Symbol(void 0),is=Symbol(void 0),zi=[];let Vt=null;function Mo(t=!1){zi.push(Vt=t?null:[])}function qd(){zi.pop(),Vt=zi[zi.length-1]||null}let Ys=1;function cc(t){Ys+=t}function jd(t){return t.dynamicChildren=Ys>0?Vt||Hs:null,qd(),Ys>0&&Vt&&Vt.push(t),t}function bw(t,e,n,s,i,r){return jd(hc(t,e,n,s,i,r,!0))}function uc(t,e,n,s,i){return jd(we(t,e,n,s,i,!0))}function kn(t){return t?t.__v_isVNode===!0:!1}function qt(t,e){return t.type===e.type&&t.key===e.key}function Ew(t){}const xo="__vInternal",zd=({key:t})=>t!=null?t:null,Do=({ref:t})=>t!=null?Y(t)||Be(t)||K(t)?{i:lt,r:t}:t:null;function hc(t,e=null,n=null,s=0,i=null,r=t===He?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&zd(e),ref:e&&Do(e),scopeId:Eo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null};return a?(dc(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Y(n)?8:16),Ys>0&&!o&&Vt&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Vt.push(l),l}const we=Iw;function Iw(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Wd)&&(t=Qe),kn(t)){const a=Rn(t,e,!0);return n&&dc(a,n),a}if(Uw(t)&&(t=t.__vccOpts),e){e=Kd(e);let{class:a,style:l}=e;a&&!Y(a)&&(e.class=Oi(a)),Te(l)&&(Ul(l)&&!H(l)&&(l=le({},l)),e.style=Pi(l))}const o=Y(t)?1:H1(t)?128:dw(t)?64:Te(t)?4:K(t)?2:0;return hc(t,e,n,s,i,o,r,!0)}function Kd(t){return t?Ul(t)||xo in t?le({},t):t:null}function Rn(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?Gd(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&zd(a),ref:e&&e.ref?n&&i?H(i)?i.concat(Do(e)):[i,Do(e)]:Do(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==He?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Rn(t.ssContent),ssFallback:t.ssFallback&&Rn(t.ssFallback),el:t.el,anchor:t.anchor}}function fc(t=" ",e=0){return we(Qs,null,t,e)}function Tw(t,e){const n=we(is,null,t);return n.staticCount=e,n}function Cw(t="",e=!1){return e?(Mo(),uc(Qe,null,t)):we(Qe,null,t)}function ct(t){return t==null||typeof t=="boolean"?we(Qe):H(t)?we(He,null,t.slice()):typeof t=="object"?An(t):we(Qs,null,String(t))}function An(t){return t.el===null||t.memo?t:Rn(t)}function dc(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(H(e))n=16;else if(typeof e=="object")if(s&(1|64)){const i=e.default;i&&(i._c&&(i._d=!1),dc(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(xo in e)?e._ctx=lt:i===3&&lt&&(lt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else K(e)?(e={default:e,_ctx:lt},n=32):(e=String(e),s&64?(n=16,e=[fc(e)]):n=8);t.children=e,t.shapeFlag|=n}function Gd(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Oi([e.class,s.class]));else if(i==="style")e.style=Pi([e.style,s.style]);else if(Gn(i)){const r=e[i],o=s[i];r!==o&&!(H(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function Sw(t,e,n,s){let i;const r=n&&n[s];if(H(t)||Y(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(Te(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}function kw(t,e){for(let n=0;n<e.length;n++){const s=e[n];if(H(s))for(let i=0;i<s.length;i++)t[s[i].name]=s[i].fn;else s&&(t[s.name]=s.fn)}return t}function Rw(t,e,n={},s,i){if(lt.isCE)return we("slot",e==="default"?null:{name:e},s&&s());let r=t[e];r&&r._c&&(r._d=!1),Mo();const o=r&&Qd(r(n)),a=uc(He,{key:n.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function Qd(t){return t.some(e=>kn(e)?!(e.type===Qe||e.type===He&&!Qd(e.children)):!0)?t:null}function Aw(t){const e={};for(const n in t)e[Vs(n)]=t[n];return e}const pc=t=>t?Jd(t)?yc(t)||t.proxy:pc(t.parent):null,Lo=le(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>pc(t.parent),$root:t=>pc(t.root),$emit:t=>t.emit,$options:t=>Sd(t),$forceUpdate:t=>()=>Ic(t.update),$nextTick:t=>Ec.bind(t.proxy),$watch:t=>Qw.bind(t)}),mc={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(s!==ae&&ie(s,e))return o[e]=1,s[e];if(i!==ae&&ie(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&ie(c,e))return o[e]=3,r[e];if(n!==ae&&ie(n,e))return o[e]=4,n[e];ec&&(o[e]=0)}}const u=Lo[e];let h,f;if(u)return e==="$attrs"&&at(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ae&&ie(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,ie(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;if(i!==ae&&ie(i,e))i[e]=n;else if(s!==ae&&ie(s,e))s[e]=n;else if(ie(t.props,e))return!1;return e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==ae&&ie(t,o)||e!==ae&&ie(e,o)||(a=r[0])&&ie(a,o)||ie(s,o)||ie(Lo,o)||ie(i.config.globalProperties,o)}},Nw=le({},mc,{get(t,e){if(e!==Symbol.unscopables)return mc.get(t,e,t)},has(t,e){return e[0]!=="_"&&!Tv(e)}}),Pw=Fd();let Ow=0;function Yd(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Pw,r={uid:Ow++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,update:null,scope:new Al(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ad(s,i),emitsOptions:ld(s,i),emit:null,emitted:null,propsDefaults:ae,inheritAttrs:s.inheritAttrs,ctx:ae,data:ae,props:ae,attrs:ae,slots:ae,refs:ae,setupState:ae,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=O1.bind(null,r),t.ce&&t.ce(r),r}let Ne=null;const Nn=()=>Ne||lt,Pn=t=>{Ne=t,t.scope.on()},On=()=>{Ne&&Ne.scope.off(),Ne=null};function Jd(t){return t.vnode.shapeFlag&4}let Ki=!1;function Xd(t,e=!1){Ki=e;const{props:n,children:s}=t.vnode,i=Jd(t);sw(t,n,i,e),ow(t,s);const r=i?Mw(t,e):void 0;return Ki=!1,r}function Mw(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Bl(new Proxy(t.ctx,mc));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?tp(t):null;Pn(t),es();const r=jt(s,t,0,[t.props,i]);if(Tn(),On(),kl(r)){if(r.then(On,On),e)return r.then(o=>{gc(t,o,e)}).catch(o=>{rs(o,t,0)});t.asyncDep=r}else gc(t,r,e)}else ep(t,e)}function gc(t,e,n){K(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Te(e)&&(t.setupState=Wl(e)),ep(t,n)}let Fo,_c;function Zd(t){Fo=t,_c=e=>{e.render._rc&&(e.withProxy=new Proxy(e.ctx,Nw))}}const xw=()=>!Fo;function ep(t,e,n){const s=t.type;if(!t.render){if(!e&&Fo&&!s.render){const i=s.template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=le(le({isCustomElement:r,delimiters:a},o),l);s.render=Fo(i,c)}}t.render=s.render||Ke,_c&&_c(t)}Pn(t),es(),X1(t),Tn(),On()}function Dw(t){return new Proxy(t.attrs,{get(e,n){return at(t,"get","$attrs"),e[n]}})}function tp(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=Dw(t))},slots:t.slots,emit:t.emit,expose:e}}function yc(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Wl(Bl(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Lo)return Lo[n](t)}}))}const Lw=/(?:^|[-_])(\w)/g,Fw=t=>t.replace(Lw,e=>e.toUpperCase()).replace(/[-_]/g,"");function Uo(t){return K(t)&&t.displayName||t.name}function np(t,e,n=!1){let s=Uo(e);if(!s&&e.__file){const i=e.__file.match(/([^/\\]+)\.\w+$/);i&&(s=i[1])}if(!s&&t&&t.parent){const i=r=>{for(const o in r)if(r[o]===e)return o};s=i(t.components||t.parent.type.components)||i(t.appContext.components)}return s?Fw(s):n?"App":"Anonymous"}function Uw(t){return K(t)&&"__vccOpts"in t}const Gi=[];function sp(t,...e){es();const n=Gi.length?Gi[Gi.length-1].component:null,s=n&&n.appContext.config.warnHandler,i=Bw();if(s)jt(s,n,11,[t+e.join(""),n&&n.proxy,i.map(({vnode:r})=>`at <${np(n,r.type)}>`).join(`
`),i]);else{const r=[`[Vue warn]: ${t}`,...e];i.length&&r.push(`
`,...Hw(i)),console.warn(...r)}Tn()}function Bw(){let t=Gi[Gi.length-1];if(!t)return[];const e=[];for(;t;){const n=e[0];n&&n.vnode===t?n.recurseCount++:e.push({vnode:t,recurseCount:0});const s=t.component&&t.component.parent;t=s&&s.vnode}return e}function Hw(t){const e=[];return t.forEach((n,s)=>{e.push(...s===0?[]:[`
`],...$w(n))}),e}function $w({vnode:t,recurseCount:e}){const n=e>0?`... (${e} recursive calls)`:"",s=t.component?t.component.parent==null:!1,i=` at <${np(t.component,t.type,s)}`,r=">"+n;return t.props?[i,...Ww(t.props),r]:[i+r]}function Ww(t){const e=[],n=Object.keys(t);return n.slice(0,3).forEach(s=>{e.push(...ip(s,t[s]))}),n.length>3&&e.push(" ..."),e}function ip(t,e,n){return Y(e)?(e=JSON.stringify(e),n?e:[`${t}=${e}`]):typeof e=="number"||typeof e=="boolean"||e==null?n?e:[`${t}=${e}`]:Be(e)?(e=ip(t,ne(e.value),!0),n?e:[`${t}=Ref<`,e,">"]):K(e)?[`${t}=fn${e.name?`<${e.name}>`:""}`]:(e=ne(e),n?e:[`${t}=`,e])}function jt(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){rs(r,e,n)}return i}function ut(t,e,n,s){if(K(t)){const r=jt(t,e,n,s);return r&&kl(r)&&r.catch(o=>{rs(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(ut(t[r],e,n,s));return i}function rs(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){jt(l,null,10,[t,o,a]);return}}Vw(t,n,i,s)}function Vw(t,e,n,s=!0){console.error(t)}let Bo=!1,vc=!1;const ht=[];let on=0;const Qi=[];let Yi=null,Js=0;const Ji=[];let Mn=null,Xs=0;const rp=Promise.resolve();let wc=null,bc=null;function Ec(t){const e=wc||rp;return t?e.then(this?t.bind(this):t):e}function qw(t){let e=on+1,n=ht.length;for(;e<n;){const s=e+n>>>1;Xi(ht[s])<t?e=s+1:n=s}return e}function Ic(t){(!ht.length||!ht.includes(t,Bo&&t.allowRecurse?on+1:on))&&t!==bc&&(t.id==null?ht.push(t):ht.splice(qw(t.id),0,t),op())}function op(){!Bo&&!vc&&(vc=!0,wc=rp.then(lp))}function jw(t){const e=ht.indexOf(t);e>on&&ht.splice(e,1)}function ap(t,e,n,s){H(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?s+1:s))&&n.push(t),op()}function zw(t){ap(t,Yi,Qi,Js)}function Tc(t){ap(t,Mn,Ji,Xs)}function Cc(t,e=null){if(Qi.length){for(bc=e,Yi=[...new Set(Qi)],Qi.length=0,Js=0;Js<Yi.length;Js++)Yi[Js]();Yi=null,Js=0,bc=null,Cc(t,e)}}function Ho(t){if(Ji.length){const e=[...new Set(Ji)];if(Ji.length=0,Mn){Mn.push(...e);return}for(Mn=e,Mn.sort((n,s)=>Xi(n)-Xi(s)),Xs=0;Xs<Mn.length;Xs++)Mn[Xs]();Mn=null,Xs=0}}const Xi=t=>t.id==null?1/0:t.id;function lp(t){vc=!1,Bo=!0,Cc(t),ht.sort((n,s)=>Xi(n)-Xi(s));const e=Ke;try{for(on=0;on<ht.length;on++){const n=ht[on];n&&n.active!==!1&&jt(n,null,14)}}finally{on=0,ht.length=0,Ho(),Bo=!1,wc=null,(ht.length||Qi.length||Ji.length)&&lp(t)}}function Kw(t,e){return er(t,null,e)}function cp(t,e){return er(t,null,{flush:"post"})}function Gw(t,e){return er(t,null,{flush:"sync"})}const up={};function Zi(t,e,n){return er(t,e,n)}function er(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=ae){const a=Ne;let l,c=!1,u=!1;if(Be(t)?(l=()=>t.value,c=!!t._shallow):ts(t)?(l=()=>t,s=!0):H(t)?(u=!0,c=t.some(ts),l=()=>t.map(y=>{if(Be(y))return y.value;if(ts(y))return os(y);if(K(y))return jt(y,a,2)})):K(t)?e?l=()=>jt(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),ut(t,a,3,[f])}:l=Ke,e&&s){const y=l;l=()=>os(y())}let h,f=y=>{h=_.onStop=()=>{jt(y,a,4)}};if(Ki)return f=Ke,e?n&&ut(e,a,3,[l(),u?[]:void 0,f]):l(),Ke;let d=u?[]:up;const p=()=>{if(!!_.active)if(e){const y=_.run();(s||c||(u?y.some((m,g)=>Mi(m,d[g])):Mi(y,d)))&&(h&&h(),ut(e,a,3,[y,d===up?void 0:d,f]),d=y)}else _.run()};p.allowRecurse=!!e;let v;i==="sync"?v=p:i==="post"?v=()=>xe(p,a&&a.suspense):v=()=>{!a||a.isMounted?zw(p):p()};const _=new Li(l,v);return e?n?p():d=_.run():i==="post"?xe(_.run.bind(_),a&&a.suspense):_.run(),()=>{_.stop(),a&&a.scope&&Of(a.scope.effects,_)}}function Qw(t,e,n){const s=this.proxy,i=Y(t)?t.includes(".")?hp(s,t):()=>s[t]:t.bind(s,s);let r;K(e)?r=e:(r=e.handler,n=e);const o=Ne;Pn(this);const a=er(i,r.bind(s),n);return o?Pn(o):On(),a}function hp(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function os(t,e){if(!Te(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Be(t))os(t.value,e);else if(H(t))for(let n=0;n<t.length;n++)os(t[n],e);else if(Qn(t)||$s(t))t.forEach(n=>{os(n,e)});else if(Df(t))for(const n in t)os(t[n],e);return t}function Yw(){return null}function Jw(){return null}function Xw(t){}function Zw(t,e){return null}function eb(){return fp().slots}function tb(){return fp().attrs}function fp(){const t=Nn();return t.setupContext||(t.setupContext=tp(t))}function nb(t,e){const n=H(t)?t.reduce((s,i)=>(s[i]={},s),{}):t;for(const s in e){const i=n[s];i?H(i)||K(i)?n[s]={type:i,default:e[s]}:i.default=e[s]:i===null&&(n[s]={default:e[s]})}return n}function sb(t,e){const n={};for(const s in t)e.includes(s)||Object.defineProperty(n,s,{enumerable:!0,get:()=>t[s]});return n}function ib(t){const e=Nn();let n=t();return On(),kl(n)&&(n=n.catch(s=>{throw Pn(e),s})),[n,()=>Pn(e)]}function dp(t,e,n){const s=arguments.length;return s===2?Te(e)&&!H(e)?kn(e)?we(t,null,[e]):we(t,e):we(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&kn(n)&&(n=[n]),we(t,e,n))}const pp=Symbol(""),rb=()=>{{const t=Hi(pp);return t||sp("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),t}};function ob(){}function ab(t,e,n,s){const i=n[s];if(i&&mp(i,t))return i;const r=e();return r.memo=t.slice(),n[s]=r}function mp(t,e){const n=t.memo;if(n.length!=e.length)return!1;for(let s=0;s<n.length;s++)if(n[s]!==e[s])return!1;return Ys>0&&Vt&&Vt.push(t),!0}const gp="3.2.24",lb={createComponentInstance:Yd,setupComponent:Xd,renderComponentRoot:Io,setCurrentRenderingInstance:Ui,isVNode:kn,normalizeVNode:ct},cb=lb,ub=null,hb=null,fb="http://www.w3.org/2000/svg",Zs=typeof document!="undefined"?document:null,_p=new Map,db={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?Zs.createElementNS(fb,t):Zs.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Zs.createTextNode(t),createComment:t=>Zs.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Zs.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,s){const i=n?n.previousSibling:e.lastChild;let r=_p.get(t);if(!r){const o=Zs.createElement("template");if(o.innerHTML=s?`<svg>${t}</svg>`:t,r=o.content,s){const a=r.firstChild;for(;a.firstChild;)r.appendChild(a.firstChild);r.removeChild(a)}_p.set(t,r)}return e.insertBefore(r.cloneNode(!0),n),[i?i.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function pb(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function mb(t,e,n){const s=t.style,i=Y(n);if(n&&!i){for(const r in n)Sc(s,r,n[r]);if(e&&!Y(e))for(const r in e)n[r]==null&&Sc(s,r,"")}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const yp=/\s*!important$/;function Sc(t,e,n){if(H(n))n.forEach(s=>Sc(t,e,s));else if(e.startsWith("--"))t.setProperty(e,n);else{const s=gb(t,e);yp.test(n)?t.setProperty(At(s),n.replace(yp,""),"important"):t[s]=n}}const vp=["Webkit","Moz","ms"],kc={};function gb(t,e){const n=kc[e];if(n)return n;let s=$e(e);if(s!=="filter"&&s in t)return kc[e]=s;s=Jn(s);for(let i=0;i<vp.length;i++){const r=vp[i]+s;if(r in t)return kc[e]=r}return e}const wp="http://www.w3.org/1999/xlink";function _b(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(wp,e.slice(6,e.length)):t.setAttributeNS(wp,e,n);else{const r=Sv(e);n==null||r&&!Af(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function yb(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const a=n==null?"":n;(t.value!==a||t.tagName==="OPTION")&&(t.value=a),n==null&&t.removeAttribute(e);return}if(n===""||n==null){const a=typeof t[e];if(a==="boolean"){t[e]=Af(n);return}else if(n==null&&a==="string"){t[e]="",t.removeAttribute(e);return}else if(a==="number"){try{t[e]=0}catch{}t.removeAttribute(e);return}}try{t[e]=n}catch{}}let $o=Date.now,bp=!1;if(typeof window!="undefined"){$o()>document.createEvent("Event").timeStamp&&($o=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);bp=!!(t&&Number(t[1])<=53)}let Rc=0;const vb=Promise.resolve(),wb=()=>{Rc=0},bb=()=>Rc||(vb.then(wb),Rc=$o());function an(t,e,n,s){t.addEventListener(e,n,s)}function Eb(t,e,n,s){t.removeEventListener(e,n,s)}function Ib(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=Tb(e);if(s){const c=r[e]=Cb(s,i);an(t,a,c,l)}else o&&(Eb(t,a,o,l),r[e]=void 0)}}const Ep=/(?:Once|Passive|Capture)$/;function Tb(t){let e;if(Ep.test(t)){e={};let n;for(;n=t.match(Ep);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[At(t.slice(2)),e]}function Cb(t,e){const n=s=>{const i=s.timeStamp||$o();(bp||i>=n.attached-1)&&ut(Sb(s,n.value),e,5,[s])};return n.value=t,n.attached=bb(),n}function Sb(t,e){if(H(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s(i))}else return e}const Ip=/^on[a-z]/,kb=(t,e,n,s,i=!1,r,o,a,l)=>{e==="class"?pb(t,s,i):e==="style"?mb(t,n,s):Gn(e)?Sl(e)||Ib(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Rb(t,e,s,i))?yb(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),_b(t,e,s,i))};function Rb(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Ip.test(e)&&K(n)):e==="spellcheck"||e==="draggable"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Ip.test(e)&&Y(n)?!1:e in t}function Tp(t,e){const n=Yl(t);class s extends Wo{constructor(r){super(n,r,e)}}return s.def=n,s}const Ab=t=>Tp(t,Kp),Nb=typeof HTMLElement!="undefined"?HTMLElement:class{};class Wo extends Nb{constructor(e,n={},s){super();this._def=e,this._props=n,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this.shadowRoot&&s?s(this._createVNode(),this.shadowRoot):this.attachShadow({mode:"open"})}connectedCallback(){this._connected=!0,this._instance||this._resolveDef()}disconnectedCallback(){this._connected=!1,Ec(()=>{this._connected||(xc(null,this.shadowRoot),this._instance=null)})}_resolveDef(){if(this._resolved)return;this._resolved=!0;for(let s=0;s<this.attributes.length;s++)this._setAttr(this.attributes[s].name);new MutationObserver(s=>{for(const i of s)this._setAttr(i.attributeName)}).observe(this,{attributes:!0});const e=s=>{const{props:i,styles:r}=s,o=!H(i),a=i?o?Object.keys(i):i:[];let l;if(o)for(const c in this._props){const u=i[c];(u===Number||u&&u.type===Number)&&(this._props[c]=En(this._props[c]),(l||(l=Object.create(null)))[c]=!0)}this._numberProps=l;for(const c of Object.keys(this))c[0]!=="_"&&this._setProp(c,this[c],!0,!1);for(const c of a.map($e))Object.defineProperty(this,c,{get(){return this._getProp(c)},set(u){this._setProp(c,u)}});this._applyStyles(r),this._update()},n=this._def.__asyncLoader;n?n().then(e):e(this._def)}_setAttr(e){let n=this.getAttribute(e);this._numberProps&&this._numberProps[e]&&(n=En(n)),this._setProp($e(e),n,!1)}_getProp(e){return this._props[e]}_setProp(e,n,s=!0,i=!0){n!==this._props[e]&&(this._props[e]=n,i&&this._instance&&this._update(),s&&(n===!0?this.setAttribute(At(e),""):typeof n=="string"||typeof n=="number"?this.setAttribute(At(e),n+""):n||this.removeAttribute(At(e))))}_update(){xc(this._createVNode(),this.shadowRoot)}_createVNode(){const e=we(this._def,le({},this._props));return this._instance||(e.ce=n=>{this._instance=n,n.isCE=!0,n.emit=(i,...r)=>{this.dispatchEvent(new CustomEvent(i,{detail:r}))};let s=this;for(;s=s&&(s.parentNode||s.host);)if(s instanceof Wo){n.parent=s._instance;break}}),e}_applyStyles(e){e&&e.forEach(n=>{const s=document.createElement("style");s.textContent=n,this.shadowRoot.appendChild(s)})}}function Pb(t="$style"){{const e=Nn();if(!e)return ae;const n=e.type.__cssModules;if(!n)return ae;const s=n[t];return s||ae}}function Ob(t){const e=Nn();if(!e)return;const n=()=>Ac(e.subTree,t(e.proxy));cp(n),qi(()=>{const s=new MutationObserver(n);s.observe(e.subTree.el.parentNode,{childList:!0}),Ro(()=>s.disconnect())})}function Ac(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{Ac(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)Cp(t.el,e);else if(t.type===He)t.children.forEach(n=>Ac(n,e));else if(t.type===is){let{el:n,anchor:s}=t;for(;n&&(Cp(n,e),n!==s);)n=n.nextSibling}}function Cp(t,e){if(t.nodeType===1){const n=t.style;for(const s in e)n.setProperty(`--${s}`,e[s])}}const xn="transition",tr="animation",Nc=(t,{slots:e})=>dp(Gl,Rp(t),e);Nc.displayName="Transition";const Sp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Mb=Nc.props=le({},Gl.props,Sp),as=(t,e=[])=>{H(t)?t.forEach(n=>n(...e)):t&&t(...e)},kp=t=>t?H(t)?t.some(e=>e.length>1):t.length>1:!1;function Rp(t){const e={};for(const N in t)N in Sp||(e[N]=t[N]);if(t.css===!1)return e;const{name:n="v",type:s,duration:i,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:d=`${n}-leave-to`}=t,p=xb(i),v=p&&p[0],_=p&&p[1],{onBeforeEnter:y,onEnter:m,onEnterCancelled:g,onLeave:w,onLeaveCancelled:T,onBeforeAppear:E=y,onAppear:I=m,onAppearCancelled:C=g}=e,k=(N,$,J)=>{ls(N,$?u:a),ls(N,$?c:o),J&&J()},R=(N,$)=>{ls(N,d),ls(N,f),$&&$()},x=N=>($,J)=>{const Bt=N?I:m,Ae=()=>k($,N,J);as(Bt,[$,Ae]),Ap(()=>{ls($,N?l:r),ln($,N?u:a),kp(Bt)||Np($,s,v,Ae)})};return le(e,{onBeforeEnter(N){as(y,[N]),ln(N,r),ln(N,o)},onBeforeAppear(N){as(E,[N]),ln(N,l),ln(N,c)},onEnter:x(!1),onAppear:x(!0),onLeave(N,$){const J=()=>R(N,$);ln(N,h),xp(),ln(N,f),Ap(()=>{ls(N,h),ln(N,d),kp(w)||Np(N,s,_,J)}),as(w,[N,J])},onEnterCancelled(N){k(N,!1),as(g,[N])},onAppearCancelled(N){k(N,!0),as(C,[N])},onLeaveCancelled(N){R(N),as(T,[N])}})}function xb(t){if(t==null)return null;if(Te(t))return[Pc(t.enter),Pc(t.leave)];{const e=Pc(t);return[e,e]}}function Pc(t){return En(t)}function ln(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function ls(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Ap(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Db=0;function Np(t,e,n,s){const i=t._endId=++Db,r=()=>{i===t._endId&&s()};if(n)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=Pp(t,e);if(!o)return s();const c=o+"end";let u=0;const h=()=>{t.removeEventListener(c,f),r()},f=d=>{d.target===t&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),t.addEventListener(c,f)}function Pp(t,e){const n=window.getComputedStyle(t),s=p=>(n[p]||"").split(", "),i=s(xn+"Delay"),r=s(xn+"Duration"),o=Op(i,r),a=s(tr+"Delay"),l=s(tr+"Duration"),c=Op(a,l);let u=null,h=0,f=0;e===xn?o>0&&(u=xn,h=o,f=r.length):e===tr?c>0&&(u=tr,h=c,f=l.length):(h=Math.max(o,c),u=h>0?o>c?xn:tr:null,f=u?u===xn?r.length:l.length:0);const d=u===xn&&/\b(transform|all)(,|$)/.test(n[xn+"Property"]);return{type:u,timeout:h,propCount:f,hasTransform:d}}function Op(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>Mp(n)+Mp(t[s])))}function Mp(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function xp(){return document.body.offsetHeight}const Dp=new WeakMap,Lp=new WeakMap,Lb={name:"TransitionGroup",props:le({},Mb,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Nn(),s=Kl();let i,r;return So(()=>{if(!i.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!$b(i[0].el,n.vnode.el,o))return;i.forEach(Ub),i.forEach(Bb);const a=i.filter(Hb);xp(),a.forEach(l=>{const c=l.el,u=c.style;ln(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const h=c._moveCb=f=>{f&&f.target!==c||(!f||/transform$/.test(f.propertyName))&&(c.removeEventListener("transitionend",h),c._moveCb=null,ls(c,o))};c.addEventListener("transitionend",h)})}),()=>{const o=ne(t),a=Rp(o);let l=o.tag||He;i=r,r=e.default?To(e.default()):[];for(let c=0;c<r.length;c++){const u=r[c];u.key!=null&&ns(u,Gs(u,a,s,n))}if(i)for(let c=0;c<i.length;c++){const u=i[c];ns(u,Gs(u,a,s,n)),Dp.set(u,u.el.getBoundingClientRect())}return we(l,null,r)}}},Fb=Lb;function Ub(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function Bb(t){Lp.set(t,t.el.getBoundingClientRect())}function Hb(t){const e=Dp.get(t),n=Lp.get(t),s=e.left-n.left,i=e.top-n.top;if(s||i){const r=t.el.style;return r.transform=r.webkitTransform=`translate(${s}px,${i}px)`,r.transitionDuration="0s",t}}function $b(t,e,n){const s=t.cloneNode();t._vtc&&t._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&s.classList.remove(a))}),n.split(/\s+/).forEach(o=>o&&s.classList.add(o)),s.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(s);const{hasTransform:r}=Pp(s);return i.removeChild(s),r}const Dn=t=>{const e=t.props["onUpdate:modelValue"];return H(e)?n=>qs(e,n):e};function Wb(t){t.target.composing=!0}function Fp(t){const e=t.target;e.composing&&(e.composing=!1,Vb(e,"input"))}function Vb(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const Vo={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=Dn(i);const r=s||i.props&&i.props.type==="number";an(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n?a=a.trim():r&&(a=En(a)),t._assign(a)}),n&&an(t,"change",()=>{t.value=t.value.trim()}),e||(an(t,"compositionstart",Wb),an(t,"compositionend",Fp),an(t,"change",Fp))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=Dn(r),t.composing||document.activeElement===t&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&En(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},Oc={deep:!0,created(t,e,n){t._assign=Dn(n),an(t,"change",()=>{const s=t._modelValue,i=ei(t),r=t.checked,o=t._assign;if(H(s)){const a=to(s,i),l=a!==-1;if(r&&!l)o(s.concat(i));else if(!r&&l){const c=[...s];c.splice(a,1),o(c)}}else if(Qn(s)){const a=new Set(s);r?a.add(i):a.delete(i),o(a)}else o($p(t,r))})},mounted:Up,beforeUpdate(t,e,n){t._assign=Dn(n),Up(t,e,n)}};function Up(t,{value:e,oldValue:n},s){t._modelValue=e,H(e)?t.checked=to(e,s.props.value)>-1:Qn(e)?t.checked=e.has(s.props.value):e!==n&&(t.checked=bn(e,$p(t,!0)))}const Mc={created(t,{value:e},n){t.checked=bn(e,n.props.value),t._assign=Dn(n),an(t,"change",()=>{t._assign(ei(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t._assign=Dn(s),e!==n&&(t.checked=bn(e,s.props.value))}},Bp={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const i=Qn(e);an(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?En(ei(o)):ei(o));t._assign(t.multiple?i?new Set(r):r:r[0])}),t._assign=Dn(s)},mounted(t,{value:e}){Hp(t,e)},beforeUpdate(t,e,n){t._assign=Dn(n)},updated(t,{value:e}){Hp(t,e)}};function Hp(t,e){const n=t.multiple;if(!(n&&!H(e)&&!Qn(e))){for(let s=0,i=t.options.length;s<i;s++){const r=t.options[s],o=ei(r);if(n)H(e)?r.selected=to(e,o)>-1:r.selected=e.has(o);else if(bn(ei(r),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function ei(t){return"_value"in t?t._value:t.value}function $p(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const qb={created(t,e,n){qo(t,e,n,null,"created")},mounted(t,e,n){qo(t,e,n,null,"mounted")},beforeUpdate(t,e,n,s){qo(t,e,n,s,"beforeUpdate")},updated(t,e,n,s){qo(t,e,n,s,"updated")}};function qo(t,e,n,s,i){let r;switch(t.tagName){case"SELECT":r=Bp;break;case"TEXTAREA":r=Vo;break;default:switch(n.props&&n.props.type){case"checkbox":r=Oc;break;case"radio":r=Mc;break;default:r=Vo}}const o=r[i];o&&o(t,e,n,s)}function jb(){Vo.getSSRProps=({value:t})=>({value:t}),Mc.getSSRProps=({value:t},e)=>{if(e.props&&bn(e.props.value,t))return{checked:!0}},Oc.getSSRProps=({value:t},e)=>{if(H(t)){if(e.props&&to(t,e.props.value)>-1)return{checked:!0}}else if(Qn(t)){if(e.props&&t.has(e.props.value))return{checked:!0}}else if(t)return{checked:!0}}}const zb=["ctrl","shift","alt","meta"],Kb={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>zb.some(n=>t[`${n}Key`]&&!e.includes(n))},Gb=(t,e)=>(n,...s)=>{for(let i=0;i<e.length;i++){const r=Kb[e[i]];if(r&&r(n,e))return}return t(n,...s)},Qb={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Yb=(t,e)=>n=>{if(!("key"in n))return;const s=At(n.key);if(e.some(i=>i===s||Qb[i]===s))return t(n)},Wp={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):nr(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),nr(t,!0),s.enter(t)):s.leave(t,()=>{nr(t,!1)}):nr(t,e))},beforeUnmount(t,{value:e}){nr(t,e)}};function nr(t,e){t.style.display=e?t._vod:"none"}function Jb(){Wp.getSSRProps=({value:t})=>{if(!t)return{style:{display:"none"}}}}const Vp=le({patchProp:kb},db);let sr,qp=!1;function jp(){return sr||(sr=Ud(Vp))}function zp(){return sr=qp?sr:Bd(Vp),qp=!0,sr}const xc=(...t)=>{jp().render(...t)},Kp=(...t)=>{zp().hydrate(...t)},Gp=(...t)=>{const e=jp().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Qp(s);if(!i)return;const r=e._component;!K(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e},Xb=(...t)=>{const e=zp().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Qp(s);if(i)return n(i,!0,i instanceof SVGElement)},e};function Qp(t){return Y(t)?document.querySelector(t):t}let Yp=!1;const Zb=()=>{Yp||(Yp=!0,jb(),Jb())};var eE=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Transition:Nc,TransitionGroup:Fb,VueElement:Wo,createApp:Gp,createSSRApp:Xb,defineCustomElement:Tp,defineSSRCustomElement:Ab,hydrate:Kp,initDirectivesForSSR:Zb,render:xc,useCssModule:Pb,useCssVars:Ob,vModelCheckbox:Oc,vModelDynamic:qb,vModelRadio:Mc,vModelSelect:Bp,vModelText:Vo,vShow:Wp,withKeys:Yb,withModifiers:Gb,EffectScope:Al,ReactiveEffect:Li,computed:od,customRef:R1,effect:Qv,effectScope:qv,getCurrentScope:jv,isProxy:Ul,isReactive:ts,isReadonly:yo,isRef:Be,markRaw:Bl,onScopeDispose:zv,proxyRefs:Wl,reactive:go,readonly:Fl,ref:wo,shallowReactive:nd,shallowReadonly:E1,shallowRef:I1,stop:Yv,toRaw:ne,toRef:rd,toRefs:A1,triggerRef:C1,unref:id,camelize:$e,capitalize:Jn,normalizeClass:Oi,normalizeProps:Av,normalizeStyle:Pi,toDisplayString:Fv,toHandlerKey:Vs,BaseTransition:Gl,Comment:Qe,Fragment:He,KeepAlive:Y1,Static:is,Suspense:W1,Teleport:gw,Text:Qs,callWithAsyncErrorHandling:ut,callWithErrorHandling:jt,cloneVNode:Rn,compatUtils:hb,createBlock:uc,createCommentVNode:Cw,createElementBlock:bw,createElementVNode:hc,createHydrationRenderer:Bd,createPropsRestProxy:sb,createRenderer:Ud,createSlots:kw,createStaticVNode:Tw,createTextVNode:fc,createVNode:we,defineAsyncComponent:G1,defineComponent:Yl,defineEmits:Jw,defineExpose:Xw,defineProps:Yw,get devtools(){return zs},getCurrentInstance:Nn,getTransitionRawChildren:To,guardReactiveProps:Kd,h:dp,handleError:rs,initCustomFormatter:ob,inject:Hi,isMemoSame:mp,isRuntimeOnly:xw,isVNode:kn,mergeDefaults:nb,mergeProps:Gd,nextTick:Ec,onActivated:md,onBeforeMount:yd,onBeforeUnmount:ko,onBeforeUpdate:vd,onDeactivated:gd,onErrorCaptured:Id,onMounted:qi,onRenderTracked:Ed,onRenderTriggered:bd,onServerPrefetch:wd,onUnmounted:Ro,onUpdated:So,openBlock:Mo,popScopeId:x1,provide:fd,pushScopeId:M1,queuePostFlushCb:Tc,registerRuntimeCompiler:Zd,renderList:Sw,renderSlot:Rw,resolveComponent:yw,resolveDirective:ww,resolveDynamicComponent:vw,resolveFilter:ub,resolveTransitionHooks:Gs,setBlockTracking:cc,setDevtoolsHook:ad,setTransitionHooks:ns,ssrContextKey:pp,ssrUtils:cb,toHandlers:Aw,transformVNodeArgs:Ew,useAttrs:tb,useSSRContext:rb,useSlots:eb,useTransitionState:Kl,version:gp,warn:sp,watch:Zi,watchEffect:Kw,watchPostEffect:cp,watchSyncEffect:Gw,withAsyncContext:ib,withCtx:ql,withDefaults:Zw,withDirectives:lw,withMemo:ab,withScopeId:D1});function Dc(t){throw t}function Jp(t){}function Ce(t,e,n,s){const i=t,r=new SyntaxError(String(i));return r.code=t,r.loc=e,r}const ir=Symbol(""),rr=Symbol(""),Lc=Symbol(""),jo=Symbol(""),Xp=Symbol(""),cs=Symbol(""),Zp=Symbol(""),em=Symbol(""),Fc=Symbol(""),Uc=Symbol(""),or=Symbol(""),Bc=Symbol(""),tm=Symbol(""),Hc=Symbol(""),zo=Symbol(""),$c=Symbol(""),Wc=Symbol(""),Vc=Symbol(""),qc=Symbol(""),nm=Symbol(""),sm=Symbol(""),Ko=Symbol(""),Go=Symbol(""),jc=Symbol(""),zc=Symbol(""),ar=Symbol(""),lr=Symbol(""),Kc=Symbol(""),Gc=Symbol(""),tE=Symbol(""),Qc=Symbol(""),Qo=Symbol(""),nE=Symbol(""),sE=Symbol(""),Yc=Symbol(""),iE=Symbol(""),rE=Symbol(""),Jc=Symbol(""),im=Symbol(""),Ln={[ir]:"Fragment",[rr]:"Teleport",[Lc]:"Suspense",[jo]:"KeepAlive",[Xp]:"BaseTransition",[cs]:"openBlock",[Zp]:"createBlock",[em]:"createElementBlock",[Fc]:"createVNode",[Uc]:"createElementVNode",[or]:"createCommentVNode",[Bc]:"createTextVNode",[tm]:"createStaticVNode",[Hc]:"resolveComponent",[zo]:"resolveDynamicComponent",[$c]:"resolveDirective",[Wc]:"resolveFilter",[Vc]:"withDirectives",[qc]:"renderList",[nm]:"renderSlot",[sm]:"createSlots",[Ko]:"toDisplayString",[Go]:"mergeProps",[jc]:"normalizeClass",[zc]:"normalizeStyle",[ar]:"normalizeProps",[lr]:"guardReactiveProps",[Kc]:"toHandlers",[Gc]:"camelize",[tE]:"capitalize",[Qc]:"toHandlerKey",[Qo]:"setBlockTracking",[nE]:"pushScopeId",[sE]:"popScopeId",[Yc]:"withCtx",[iE]:"unref",[rE]:"isRef",[Jc]:"withMemo",[im]:"isMemoSame"};function oE(t){Object.getOwnPropertySymbols(t).forEach(e=>{Ln[e]=t[e]})}const ft={source:"",start:{line:1,column:1,offset:0},end:{line:1,column:1,offset:0}};function aE(t,e=ft){return{type:0,children:t,helpers:[],components:[],directives:[],hoists:[],imports:[],cached:0,temps:0,codegenNode:void 0,loc:e}}function cr(t,e,n,s,i,r,o,a=!1,l=!1,c=!1,u=ft){return t&&(a?(t.helper(cs),t.helper(ii(t.inSSR,c))):t.helper(si(t.inSSR,c)),o&&t.helper(Vc)),{type:13,tag:e,props:n,children:s,patchFlag:i,dynamicProps:r,directives:o,isBlock:a,disableTracking:l,isComponent:c,loc:u}}function ur(t,e=ft){return{type:17,loc:e,elements:t}}function yt(t,e=ft){return{type:15,loc:e,properties:t}}function ke(t,e){return{type:16,loc:ft,key:Y(t)?te(t,!0):t,value:e}}function te(t,e=!1,n=ft,s=0){return{type:4,loc:n,content:t,isStatic:e,constType:e?3:s}}function zt(t,e=ft){return{type:8,loc:e,children:t}}function Re(t,e=[],n=ft){return{type:14,loc:n,callee:t,arguments:e}}function ti(t,e=void 0,n=!1,s=!1,i=ft){return{type:18,params:t,returns:e,newline:n,isSlot:s,loc:i}}function Xc(t,e,n,s=!0){return{type:19,test:t,consequent:e,alternate:n,newline:s,loc:ft}}function lE(t,e,n=!1){return{type:20,index:t,value:e,isVNode:n,loc:ft}}function cE(t){return{type:21,body:t,loc:ft}}const et=t=>t.type===4&&t.isStatic,ni=(t,e)=>t===e||t===At(e);function rm(t){if(ni(t,"Teleport"))return rr;if(ni(t,"Suspense"))return Lc;if(ni(t,"KeepAlive"))return jo;if(ni(t,"BaseTransition"))return Xp}const uE=/^\d|[^\$\w]/,Zc=t=>!uE.test(t),hE=/[A-Za-z_$\xA0-\uFFFF]/,fE=/[\.\?\w$\xA0-\uFFFF]/,dE=/\s+[.[]\s*|\s*[.[]\s+/g,pE=t=>{t=t.trim().replace(dE,o=>o.trim());let e=0,n=[],s=0,i=0,r=null;for(let o=0;o<t.length;o++){const a=t.charAt(o);switch(e){case 0:if(a==="[")n.push(e),e=1,s++;else if(a==="(")n.push(e),e=2,i++;else if(!(o===0?hE:fE).test(a))return!1;break;case 1:a==="'"||a==='"'||a==="`"?(n.push(e),e=3,r=a):a==="["?s++:a==="]"&&(--s||(e=n.pop()));break;case 2:if(a==="'"||a==='"'||a==="`")n.push(e),e=3,r=a;else if(a==="(")i++;else if(a===")"){if(o===t.length-1)return!1;--i||(e=n.pop())}break;case 3:a===r&&(e=n.pop(),r=null);break}}return!s&&!i},om=pE;function am(t,e,n){const i={source:t.source.slice(e,e+n),start:Yo(t.start,t.source,e),end:t.end};return n!=null&&(i.end=Yo(t.start,t.source,e+n)),i}function Yo(t,e,n=e.length){return Jo(le({},t),e,n)}function Jo(t,e,n=e.length){let s=0,i=-1;for(let r=0;r<n;r++)e.charCodeAt(r)===10&&(s++,i=r);return t.offset+=n,t.line+=s,t.column=i===-1?t.column+n:n-i,t}function vt(t,e,n=!1){for(let s=0;s<t.props.length;s++){const i=t.props[s];if(i.type===7&&(n||i.exp)&&(Y(e)?i.name===e:e.test(i.name)))return i}}function hr(t,e,n=!1,s=!1){for(let i=0;i<t.props.length;i++){const r=t.props[i];if(r.type===6){if(n)continue;if(r.name===e&&(r.value||s))return r}else if(r.name==="bind"&&(r.exp||s)&&Xo(r.arg,e))return r}}function Xo(t,e){return!!(t&&et(t)&&t.content===e)}function mE(t){return t.props.some(e=>e.type===7&&e.name==="bind"&&(!e.arg||e.arg.type!==4||!e.arg.isStatic))}function eu(t){return t.type===5||t.type===2}function gE(t){return t.type===7&&t.name==="slot"}function Zo(t){return t.type===1&&t.tagType===3}function ea(t){return t.type===1&&t.tagType===2}function si(t,e){return t||e?Fc:Uc}function ii(t,e){return t||e?Zp:em}const _E=new Set([ar,lr]);function lm(t,e=[]){if(t&&!Y(t)&&t.type===14){const n=t.callee;if(!Y(n)&&_E.has(n))return lm(t.arguments[0],e.concat(t))}return[t,e]}function ta(t,e,n){let s,i=t.type===13?t.props:t.arguments[2],r=[],o;if(i&&!Y(i)&&i.type===14){const a=lm(i);i=a[0],r=a[1],o=r[r.length-1]}if(i==null||Y(i))s=yt([e]);else if(i.type===14){const a=i.arguments[0];!Y(a)&&a.type===15?a.properties.unshift(e):i.callee===Kc?s=Re(n.helper(Go),[yt([e]),i]):i.arguments.unshift(yt([e])),!s&&(s=i)}else if(i.type===15){let a=!1;if(e.key.type===4){const l=e.key.content;a=i.properties.some(c=>c.key.type===4&&c.key.content===l)}a||i.properties.unshift(e),s=i}else s=Re(n.helper(Go),[yt([e]),i]),o&&o.callee===lr&&(o=r[r.length-2]);t.type===13?o?o.arguments[0]=s:t.props=s:o?o.arguments[0]=s:t.arguments[2]=s}function fr(t,e){return`_${e}_${t.replace(/[^\w]/g,(n,s)=>n==="-"?"_":t.charCodeAt(s).toString())}`}function yE(t){return t.type===14&&t.callee===Jc?t.arguments[1].returns:t}function tu(t,{helper:e,removeHelper:n,inSSR:s}){t.isBlock||(t.isBlock=!0,n(si(s,t.isComponent)),e(cs),e(ii(s,t.isComponent)))}function cm(t,e){const n=e.options?e.options.compatConfig:e.compatConfig,s=n&&n[t];return t==="MODE"?s||3:s}function us(t,e){const n=cm("MODE",e),s=cm(t,e);return n===3?s===!0:s!==!1}function ri(t,e,n,...s){return us(t,e)}const vE=/&(gt|lt|amp|apos|quot);/g,wE={gt:">",lt:"<",amp:"&",apos:"'",quot:'"'},um={delimiters:["{{","}}"],getNamespace:()=>0,getTextMode:()=>0,isVoidTag:no,isPreTag:no,isCustomElement:no,decodeEntities:t=>t.replace(vE,(e,n)=>wE[n]),onError:Dc,onWarn:Jp,comments:!1};function bE(t,e={}){const n=EE(t,e),s=dt(n);return aE(nu(n,0,[]),wt(n,s))}function EE(t,e){const n=le({},um);let s;for(s in e)n[s]=e[s]===void 0?um[s]:e[s];return{options:n,column:1,line:1,offset:0,originalSource:t,source:t,inPre:!1,inVPre:!1,onWarn:n.onWarn}}function nu(t,e,n){const s=na(n),i=s?s.ns:0,r=[];for(;!PE(t,e,n);){const a=t.source;let l;if(e===0||e===1){if(!t.inVPre&&We(a,t.options.delimiters[0]))l=AE(t,e);else if(e===0&&a[0]==="<")if(a.length===1)ue(t,5,1);else if(a[1]==="!")We(a,"<!--")?l=TE(t):We(a,"<!DOCTYPE")?l=dr(t):We(a,"<![CDATA[")?i!==0?l=IE(t,n):(ue(t,1),l=dr(t)):(ue(t,11),l=dr(t));else if(a[1]==="/")if(a.length===2)ue(t,5,2);else if(a[2]===">"){ue(t,14,2),Pe(t,3);continue}else if(/[a-z]/i.test(a[2])){ue(t,23),su(t,1,s);continue}else ue(t,12,2),l=dr(t);else/[a-z]/i.test(a[1])?(l=CE(t,n),us("COMPILER_NATIVE_TEMPLATE",t)&&l&&l.tag==="template"&&!l.props.some(c=>c.type===7&&fm(c.name))&&(l=l.children)):a[1]==="?"?(ue(t,21,1),l=dr(t)):ue(t,12,1)}if(l||(l=NE(t,e)),H(l))for(let c=0;c<l.length;c++)hm(r,l[c]);else hm(r,l)}let o=!1;if(e!==2&&e!==1){const a=t.options.whitespace!=="preserve";for(let l=0;l<r.length;l++){const c=r[l];if(!t.inPre&&c.type===2)if(/[^\t\r\n\f ]/.test(c.content))a&&(c.content=c.content.replace(/[\t\r\n\f ]+/g," "));else{const u=r[l-1],h=r[l+1];!u||!h||a&&(u.type===3||h.type===3||u.type===1&&h.type===1&&/[\r\n]/.test(c.content))?(o=!0,r[l]=null):c.content=" "}else c.type===3&&!t.options.comments&&(o=!0,r[l]=null)}if(t.inPre&&s&&t.options.isPreTag(s.tag)){const l=r[0];l&&l.type===2&&(l.content=l.content.replace(/^\r?\n/,""))}}return o?r.filter(Boolean):r}function hm(t,e){if(e.type===2){const n=na(t);if(n&&n.type===2&&n.loc.end.offset===e.loc.start.offset){n.content+=e.content,n.loc.end=e.loc.end,n.loc.source+=e.loc.source;return}}t.push(e)}function IE(t,e){Pe(t,9);const n=nu(t,3,e);return t.source.length===0?ue(t,6):Pe(t,3),n}function TE(t){const e=dt(t);let n;const s=/--(\!)?>/.exec(t.source);if(!s)n=t.source.slice(4),Pe(t,t.source.length),ue(t,7);else{s.index<=3&&ue(t,0),s[1]&&ue(t,10),n=t.source.slice(4,s.index);const i=t.source.slice(0,s.index);let r=1,o=0;for(;(o=i.indexOf("<!--",r))!==-1;)Pe(t,o-r+1),o+4<i.length&&ue(t,16),r=o+1;Pe(t,s.index+s[0].length-r+1)}return{type:3,content:n,loc:wt(t,e)}}function dr(t){const e=dt(t),n=t.source[1]==="?"?1:2;let s;const i=t.source.indexOf(">");return i===-1?(s=t.source.slice(n),Pe(t,t.source.length)):(s=t.source.slice(n,i),Pe(t,i+1)),{type:3,content:s,loc:wt(t,e)}}function CE(t,e){const n=t.inPre,s=t.inVPre,i=na(e),r=su(t,0,i),o=t.inPre&&!n,a=t.inVPre&&!s;if(r.isSelfClosing||t.options.isVoidTag(r.tag))return o&&(t.inPre=!1),a&&(t.inVPre=!1),r;e.push(r);const l=t.options.getTextMode(r,i),c=nu(t,l,e);e.pop();{const u=r.props.find(h=>h.type===6&&h.name==="inline-template");if(u&&ri("COMPILER_INLINE_TEMPLATE",t,u.loc)){const h=wt(t,r.loc.end);u.value={type:2,content:h.source,loc:h}}}if(r.children=c,iu(t.source,r.tag))su(t,1,i);else if(ue(t,24,0,r.loc.start),t.source.length===0&&r.tag.toLowerCase()==="script"){const u=c[0];u&&We(u.loc.source,"<!--")&&ue(t,8)}return r.loc=wt(t,r.loc.start),o&&(t.inPre=!1),a&&(t.inVPre=!1),r}const fm=ot("if,else,else-if,for,slot");function su(t,e,n){const s=dt(t),i=/^<\/?([a-z][^\t\r\n\f />]*)/i.exec(t.source),r=i[1],o=t.options.getNamespace(r,n);Pe(t,i[0].length),mr(t);const a=dt(t),l=t.source;t.options.isPreTag(r)&&(t.inPre=!0);let c=dm(t,e);e===0&&!t.inVPre&&c.some(f=>f.type===7&&f.name==="pre")&&(t.inVPre=!0,le(t,a),t.source=l,c=dm(t,e).filter(f=>f.name!=="v-pre"));let u=!1;if(t.source.length===0?ue(t,9):(u=We(t.source,"/>"),e===1&&u&&ue(t,4),Pe(t,u?2:1)),e===1)return;let h=0;return t.inVPre||(r==="slot"?h=2:r==="template"?c.some(f=>f.type===7&&fm(f.name))&&(h=3):SE(r,c,t)&&(h=1)),{type:1,ns:o,tag:r,tagType:h,props:c,isSelfClosing:u,children:[],loc:wt(t,s),codegenNode:void 0}}function SE(t,e,n){const s=n.options;if(s.isCustomElement(t))return!1;if(t==="component"||/^[A-Z]/.test(t)||rm(t)||s.isBuiltInComponent&&s.isBuiltInComponent(t)||s.isNativeTag&&!s.isNativeTag(t))return!0;for(let i=0;i<e.length;i++){const r=e[i];if(r.type===6){if(r.name==="is"&&r.value){if(r.value.content.startsWith("vue:"))return!0;if(ri("COMPILER_IS_ON_ELEMENT",n,r.loc))return!0}}else{if(r.name==="is")return!0;if(r.name==="bind"&&Xo(r.arg,"is")&&!0&&ri("COMPILER_IS_ON_ELEMENT",n,r.loc))return!0}}}function dm(t,e){const n=[],s=new Set;for(;t.source.length>0&&!We(t.source,">")&&!We(t.source,"/>");){if(We(t.source,"/")){ue(t,22),Pe(t,1),mr(t);continue}e===1&&ue(t,3);const i=kE(t,s);i.type===6&&i.value&&i.name==="class"&&(i.value.content=i.value.content.replace(/\s+/g," ").trim()),e===0&&n.push(i),/^[^\t\r\n\f />]/.test(t.source)&&ue(t,15),mr(t)}return n}function kE(t,e){const n=dt(t),i=/^[^\t\r\n\f />][^\t\r\n\f />=]*/.exec(t.source)[0];e.has(i)&&ue(t,2),e.add(i),i[0]==="="&&ue(t,19);{const a=/["'<]/g;let l;for(;l=a.exec(i);)ue(t,17,l.index)}Pe(t,i.length);let r;/^[\t\r\n\f ]*=/.test(t.source)&&(mr(t),Pe(t,1),mr(t),r=RE(t),r||ue(t,13));const o=wt(t,n);if(!t.inVPre&&/^(v-[A-Za-z0-9-]|:|\.|@|#)/.test(i)){const a=/(?:^v-([a-z0-9-]+))?(?:(?::|^\.|^@|^#)(\[[^\]]+\]|[^\.]+))?(.+)?$/i.exec(i);let l=We(i,"."),c=a[1]||(l||We(i,":")?"bind":We(i,"@")?"on":"slot"),u;if(a[2]){const f=c==="slot",d=i.lastIndexOf(a[2]),p=wt(t,pm(t,n,d),pm(t,n,d+a[2].length+(f&&a[3]||"").length));let v=a[2],_=!0;v.startsWith("[")?(_=!1,v.endsWith("]")?v=v.slice(1,v.length-1):(ue(t,27),v=v.slice(1))):f&&(v+=a[3]||""),u={type:4,content:v,isStatic:_,constType:_?3:0,loc:p}}if(r&&r.isQuoted){const f=r.loc;f.start.offset++,f.start.column++,f.end=Yo(f.start,r.content),f.source=f.source.slice(1,-1)}const h=a[3]?a[3].slice(1).split("."):[];return l&&h.push("prop"),c==="bind"&&u&&h.includes("sync")&&ri("COMPILER_V_BIND_SYNC",t,o,u.loc.source)&&(c="model",h.splice(h.indexOf("sync"),1)),{type:7,name:c,exp:r&&{type:4,content:r.content,isStatic:!1,constType:0,loc:r.loc},arg:u,modifiers:h,loc:o}}return!t.inVPre&&We(i,"v-")&&ue(t,26),{type:6,name:i,value:r&&{type:2,content:r.content,loc:r.loc},loc:o}}function RE(t){const e=dt(t);let n;const s=t.source[0],i=s==='"'||s==="'";if(i){Pe(t,1);const r=t.source.indexOf(s);r===-1?n=pr(t,t.source.length,4):(n=pr(t,r,4),Pe(t,1))}else{const r=/^[^\t\r\n\f >]+/.exec(t.source);if(!r)return;const o=/["'<=`]/g;let a;for(;a=o.exec(r[0]);)ue(t,18,a.index);n=pr(t,r[0].length,4)}return{content:n,isQuoted:i,loc:wt(t,e)}}function AE(t,e){const[n,s]=t.options.delimiters,i=t.source.indexOf(s,n.length);if(i===-1){ue(t,25);return}const r=dt(t);Pe(t,n.length);const o=dt(t),a=dt(t),l=i-n.length,c=t.source.slice(0,l),u=pr(t,l,e),h=u.trim(),f=u.indexOf(h);f>0&&Jo(o,c,f);const d=l-(u.length-h.length-f);return Jo(a,c,d),Pe(t,s.length),{type:5,content:{type:4,isStatic:!1,constType:0,content:h,loc:wt(t,o,a)},loc:wt(t,r)}}function NE(t,e){const n=e===3?["]]>"]:["<",t.options.delimiters[0]];let s=t.source.length;for(let o=0;o<n.length;o++){const a=t.source.indexOf(n[o],1);a!==-1&&s>a&&(s=a)}const i=dt(t),r=pr(t,s,e);return{type:2,content:r,loc:wt(t,i)}}function pr(t,e,n){const s=t.source.slice(0,e);return Pe(t,e),n===2||n===3||s.indexOf("&")===-1?s:t.options.decodeEntities(s,n===4)}function dt(t){const{column:e,line:n,offset:s}=t;return{column:e,line:n,offset:s}}function wt(t,e,n){return n=n||dt(t),{start:e,end:n,source:t.originalSource.slice(e.offset,n.offset)}}function na(t){return t[t.length-1]}function We(t,e){return t.startsWith(e)}function Pe(t,e){const{source:n}=t;Jo(t,n,e),t.source=n.slice(e)}function mr(t){const e=/^[\t\r\n\f ]+/.exec(t.source);e&&Pe(t,e[0].length)}function pm(t,e,n){return Yo(e,t.originalSource.slice(e.offset,n),n)}function ue(t,e,n,s=dt(t)){n&&(s.offset+=n,s.column+=n),t.options.onError(Ce(e,{start:s,end:s,source:""}))}function PE(t,e,n){const s=t.source;switch(e){case 0:if(We(s,"</")){for(let i=n.length-1;i>=0;--i)if(iu(s,n[i].tag))return!0}break;case 1:case 2:{const i=na(n);if(i&&iu(s,i.tag))return!0;break}case 3:if(We(s,"]]>"))return!0;break}return!s}function iu(t,e){return We(t,"</")&&t.slice(2,2+e.length).toLowerCase()===e.toLowerCase()&&/[\t\r\n\f />]/.test(t[2+e.length]||">")}function OE(t,e){sa(t,e,mm(t,t.children[0]))}function mm(t,e){const{children:n}=t;return n.length===1&&e.type===1&&!ea(e)}function sa(t,e,n=!1){const{children:s}=t,i=s.length;let r=0;for(let o=0;o<s.length;o++){const a=s[o];if(a.type===1&&a.tagType===0){const l=n?0:bt(a,e);if(l>0){if(l>=2){a.codegenNode.patchFlag=-1+"",a.codegenNode=e.hoist(a.codegenNode),r++;continue}}else{const c=a.codegenNode;if(c.type===13){const u=vm(c);if((!u||u===512||u===1)&&_m(a,e)>=2){const h=ym(a);h&&(c.props=e.hoist(h))}c.dynamicProps&&(c.dynamicProps=e.hoist(c.dynamicProps))}}}else a.type===12&&bt(a.content,e)>=2&&(a.codegenNode=e.hoist(a.codegenNode),r++);if(a.type===1){const l=a.tagType===1;l&&e.scopes.vSlot++,sa(a,e),l&&e.scopes.vSlot--}else if(a.type===11)sa(a,e,a.children.length===1);else if(a.type===9)for(let l=0;l<a.branches.length;l++)sa(a.branches[l],e,a.branches[l].children.length===1)}r&&e.transformHoist&&e.transformHoist(s,e,t),r&&r===i&&t.type===1&&t.tagType===0&&t.codegenNode&&t.codegenNode.type===13&&H(t.codegenNode.children)&&(t.codegenNode.children=e.hoist(ur(t.codegenNode.children)))}function bt(t,e){const{constantCache:n}=e;switch(t.type){case 1:if(t.tagType!==0)return 0;const s=n.get(t);if(s!==void 0)return s;const i=t.codegenNode;if(i.type!==13)return 0;if(vm(i))return n.set(t,0),0;{let a=3;const l=_m(t,e);if(l===0)return n.set(t,0),0;l<a&&(a=l);for(let c=0;c<t.children.length;c++){const u=bt(t.children[c],e);if(u===0)return n.set(t,0),0;u<a&&(a=u)}if(a>1)for(let c=0;c<t.props.length;c++){const u=t.props[c];if(u.type===7&&u.name==="bind"&&u.exp){const h=bt(u.exp,e);if(h===0)return n.set(t,0),0;h<a&&(a=h)}}return i.isBlock&&(e.removeHelper(cs),e.removeHelper(ii(e.inSSR,i.isComponent)),i.isBlock=!1,e.helper(si(e.inSSR,i.isComponent))),n.set(t,a),a}case 2:case 3:return 3;case 9:case 11:case 10:return 0;case 5:case 12:return bt(t.content,e);case 4:return t.constType;case 8:let o=3;for(let a=0;a<t.children.length;a++){const l=t.children[a];if(Y(l)||Ws(l))continue;const c=bt(l,e);if(c===0)return 0;c<o&&(o=c)}return o;default:return 0}}const ME=new Set([jc,zc,ar,lr]);function gm(t,e){if(t.type===14&&!Y(t.callee)&&ME.has(t.callee)){const n=t.arguments[0];if(n.type===4)return bt(n,e);if(n.type===14)return gm(n,e)}return 0}function _m(t,e){let n=3;const s=ym(t);if(s&&s.type===15){const{properties:i}=s;for(let r=0;r<i.length;r++){const{key:o,value:a}=i[r],l=bt(o,e);if(l===0)return l;l<n&&(n=l);let c;if(a.type===4?c=bt(a,e):a.type===14?c=gm(a,e):c=0,c===0)return c;c<n&&(n=c)}}return n}function ym(t){const e=t.codegenNode;if(e.type===13)return e.props}function vm(t){const e=t.patchFlag;return e?parseInt(e,10):void 0}function xE(t,{filename:e="",prefixIdentifiers:n=!1,hoistStatic:s=!1,cacheHandlers:i=!1,nodeTransforms:r=[],directiveTransforms:o={},transformHoist:a=null,isBuiltInComponent:l=Ke,isCustomElement:c=Ke,expressionPlugins:u=[],scopeId:h=null,slotted:f=!0,ssr:d=!1,inSSR:p=!1,ssrCssVars:v="",bindingMetadata:_=ae,inline:y=!1,isTS:m=!1,onError:g=Dc,onWarn:w=Jp,compatConfig:T}){const E=e.replace(/\?.*$/,"").match(/([^/\\]+)\.\w+$/),I={selfName:E&&Jn($e(E[1])),prefixIdentifiers:n,hoistStatic:s,cacheHandlers:i,nodeTransforms:r,directiveTransforms:o,transformHoist:a,isBuiltInComponent:l,isCustomElement:c,expressionPlugins:u,scopeId:h,slotted:f,ssr:d,inSSR:p,ssrCssVars:v,bindingMetadata:_,inline:y,isTS:m,onError:g,onWarn:w,compatConfig:T,root:t,helpers:new Map,components:new Set,directives:new Set,hoists:[],imports:[],constantCache:new Map,temps:0,cached:0,identifiers:Object.create(null),scopes:{vFor:0,vSlot:0,vPre:0,vOnce:0},parent:null,currentNode:t,childIndex:0,inVOnce:!1,helper(C){const k=I.helpers.get(C)||0;return I.helpers.set(C,k+1),C},removeHelper(C){const k=I.helpers.get(C);if(k){const R=k-1;R?I.helpers.set(C,R):I.helpers.delete(C)}},helperString(C){return`_${Ln[I.helper(C)]}`},replaceNode(C){I.parent.children[I.childIndex]=I.currentNode=C},removeNode(C){const k=I.parent.children,R=C?k.indexOf(C):I.currentNode?I.childIndex:-1;!C||C===I.currentNode?(I.currentNode=null,I.onNodeRemoved()):I.childIndex>R&&(I.childIndex--,I.onNodeRemoved()),I.parent.children.splice(R,1)},onNodeRemoved:()=>{},addIdentifiers(C){},removeIdentifiers(C){},hoist(C){Y(C)&&(C=te(C)),I.hoists.push(C);const k=te(`_hoisted_${I.hoists.length}`,!1,C.loc,2);return k.hoisted=C,k},cache(C,k=!1){return lE(I.cached++,C,k)}};return I.filters=new Set,I}function DE(t,e){const n=xE(t,e);ia(t,n),e.hoistStatic&&OE(t,n),e.ssr||LE(t,n),t.helpers=[...n.helpers.keys()],t.components=[...n.components],t.directives=[...n.directives],t.imports=n.imports,t.hoists=n.hoists,t.temps=n.temps,t.cached=n.cached,t.filters=[...n.filters]}function LE(t,e){const{helper:n}=e,{children:s}=t;if(s.length===1){const i=s[0];if(mm(t,i)&&i.codegenNode){const r=i.codegenNode;r.type===13&&tu(r,e),t.codegenNode=r}else t.codegenNode=i}else if(s.length>1){let i=64;t.codegenNode=cr(e,n(ir),void 0,t.children,i+"",void 0,void 0,!0,void 0,!1)}}function FE(t,e){let n=0;const s=()=>{n--};for(;n<t.children.length;n++){const i=t.children[n];Y(i)||(e.parent=t,e.childIndex=n,e.onNodeRemoved=s,ia(i,e))}}function ia(t,e){e.currentNode=t;const{nodeTransforms:n}=e,s=[];for(let r=0;r<n.length;r++){const o=n[r](t,e);if(o&&(H(o)?s.push(...o):s.push(o)),e.currentNode)t=e.currentNode;else return}switch(t.type){case 3:e.ssr||e.helper(or);break;case 5:e.ssr||e.helper(Ko);break;case 9:for(let r=0;r<t.branches.length;r++)ia(t.branches[r],e);break;case 10:case 11:case 1:case 0:FE(t,e);break}e.currentNode=t;let i=s.length;for(;i--;)s[i]()}function wm(t,e){const n=Y(t)?s=>s===t:s=>t.test(s);return(s,i)=>{if(s.type===1){const{props:r}=s;if(s.tagType===3&&r.some(gE))return;const o=[];for(let a=0;a<r.length;a++){const l=r[a];if(l.type===7&&n(l.name)){r.splice(a,1),a--;const c=e(s,l,i);c&&o.push(c)}}return o}}}const ra="/*#__PURE__*/";function UE(t,{mode:e="function",prefixIdentifiers:n=e==="module",sourceMap:s=!1,filename:i="template.vue.html",scopeId:r=null,optimizeImports:o=!1,runtimeGlobalName:a="Vue",runtimeModuleName:l="vue",ssrRuntimeModuleName:c="vue/server-renderer",ssr:u=!1,isTS:h=!1,inSSR:f=!1}){const d={mode:e,prefixIdentifiers:n,sourceMap:s,filename:i,scopeId:r,optimizeImports:o,runtimeGlobalName:a,runtimeModuleName:l,ssrRuntimeModuleName:c,ssr:u,isTS:h,inSSR:f,source:t.loc.source,code:"",column:1,line:1,offset:0,indentLevel:0,pure:!1,map:void 0,helper(v){return`_${Ln[v]}`},push(v,_){d.code+=v},indent(){p(++d.indentLevel)},deindent(v=!1){v?--d.indentLevel:p(--d.indentLevel)},newline(){p(d.indentLevel)}};function p(v){d.push(`
`+"  ".repeat(v))}return d}function BE(t,e={}){const n=UE(t,e);e.onContextCreated&&e.onContextCreated(n);const{mode:s,push:i,prefixIdentifiers:r,indent:o,deindent:a,newline:l,scopeId:c,ssr:u}=n,h=t.helpers.length>0,f=!r&&s!=="module";HE(t,n);const p=u?"ssrRender":"render",_=(u?["_ctx","_push","_parent","_attrs"]:["_ctx","_cache"]).join(", ");if(i(`function ${p}(${_}) {`),o(),f&&(i("with (_ctx) {"),o(),h&&(i(`const { ${t.helpers.map(y=>`${Ln[y]}: _${Ln[y]}`).join(", ")} } = _Vue`),i(`
`),l())),t.components.length&&(ru(t.components,"component",n),(t.directives.length||t.temps>0)&&l()),t.directives.length&&(ru(t.directives,"directive",n),t.temps>0&&l()),t.filters&&t.filters.length&&(l(),ru(t.filters,"filter",n),l()),t.temps>0){i("let ");for(let y=0;y<t.temps;y++)i(`${y>0?", ":""}_temp${y}`)}return(t.components.length||t.directives.length||t.temps)&&(i(`
`),l()),u||i("return "),t.codegenNode?Ve(t.codegenNode,n):i("null"),f&&(a(),i("}")),a(),i("}"),{ast:t,code:n.code,preamble:"",map:n.map?n.map.toJSON():void 0}}function HE(t,e){const{ssr:n,prefixIdentifiers:s,push:i,newline:r,runtimeModuleName:o,runtimeGlobalName:a,ssrRuntimeModuleName:l}=e,c=a,u=h=>`${Ln[h]}: _${Ln[h]}`;if(t.helpers.length>0&&(i(`const _Vue = ${c}
`),t.hoists.length)){const h=[Fc,Uc,or,Bc,tm].filter(f=>t.helpers.includes(f)).map(u).join(", ");i(`const { ${h} } = _Vue
`)}$E(t.hoists,e),r(),i("return ")}function ru(t,e,{helper:n,push:s,newline:i,isTS:r}){const o=n(e==="filter"?Wc:e==="component"?Hc:$c);for(let a=0;a<t.length;a++){let l=t[a];const c=l.endsWith("__self");c&&(l=l.slice(0,-6)),s(`const ${fr(l,e)} = ${o}(${JSON.stringify(l)}${c?", true":""})${r?"!":""}`),a<t.length-1&&i()}}function $E(t,e){if(!t.length)return;e.pure=!0;const{push:n,newline:s,helper:i,scopeId:r,mode:o}=e;s();for(let a=0;a<t.length;a++){const l=t[a];l&&(n(`const _hoisted_${a+1} = `),Ve(l,e),s())}e.pure=!1}function ou(t,e){const n=t.length>3||!1;e.push("["),n&&e.indent(),gr(t,e,n),n&&e.deindent(),e.push("]")}function gr(t,e,n=!1,s=!0){const{push:i,newline:r}=e;for(let o=0;o<t.length;o++){const a=t[o];Y(a)?i(a):H(a)?ou(a,e):Ve(a,e),o<t.length-1&&(n?(s&&i(","),r()):s&&i(", "))}}function Ve(t,e){if(Y(t)){e.push(t);return}if(Ws(t)){e.push(e.helper(t));return}switch(t.type){case 1:case 9:case 11:Ve(t.codegenNode,e);break;case 2:WE(t,e);break;case 4:bm(t,e);break;case 5:VE(t,e);break;case 12:Ve(t.codegenNode,e);break;case 8:Em(t,e);break;case 3:jE(t,e);break;case 13:zE(t,e);break;case 14:GE(t,e);break;case 15:QE(t,e);break;case 17:YE(t,e);break;case 18:JE(t,e);break;case 19:XE(t,e);break;case 20:ZE(t,e);break;case 21:gr(t.body,e,!0,!1);break}}function WE(t,e){e.push(JSON.stringify(t.content),t)}function bm(t,e){const{content:n,isStatic:s}=t;e.push(s?JSON.stringify(n):n,t)}function VE(t,e){const{push:n,helper:s,pure:i}=e;i&&n(ra),n(`${s(Ko)}(`),Ve(t.content,e),n(")")}function Em(t,e){for(let n=0;n<t.children.length;n++){const s=t.children[n];Y(s)?e.push(s):Ve(s,e)}}function qE(t,e){const{push:n}=e;if(t.type===8)n("["),Em(t,e),n("]");else if(t.isStatic){const s=Zc(t.content)?t.content:JSON.stringify(t.content);n(s,t)}else n(`[${t.content}]`,t)}function jE(t,e){const{push:n,helper:s,pure:i}=e;i&&n(ra),n(`${s(or)}(${JSON.stringify(t.content)})`,t)}function zE(t,e){const{push:n,helper:s,pure:i}=e,{tag:r,props:o,children:a,patchFlag:l,dynamicProps:c,directives:u,isBlock:h,disableTracking:f,isComponent:d}=t;u&&n(s(Vc)+"("),h&&n(`(${s(cs)}(${f?"true":""}), `),i&&n(ra);const p=h?ii(e.inSSR,d):si(e.inSSR,d);n(s(p)+"(",t),gr(KE([r,o,a,l,c]),e),n(")"),h&&n(")"),u&&(n(", "),Ve(u,e),n(")"))}function KE(t){let e=t.length;for(;e--&&t[e]==null;);return t.slice(0,e+1).map(n=>n||"null")}function GE(t,e){const{push:n,helper:s,pure:i}=e,r=Y(t.callee)?t.callee:s(t.callee);i&&n(ra),n(r+"(",t),gr(t.arguments,e),n(")")}function QE(t,e){const{push:n,indent:s,deindent:i,newline:r}=e,{properties:o}=t;if(!o.length){n("{}",t);return}const a=o.length>1||!1;n(a?"{":"{ "),a&&s();for(let l=0;l<o.length;l++){const{key:c,value:u}=o[l];qE(c,e),n(": "),Ve(u,e),l<o.length-1&&(n(","),r())}a&&i(),n(a?"}":" }")}function YE(t,e){ou(t.elements,e)}function JE(t,e){const{push:n,indent:s,deindent:i}=e,{params:r,returns:o,body:a,newline:l,isSlot:c}=t;c&&n(`_${Ln[Yc]}(`),n("(",t),H(r)?gr(r,e):r&&Ve(r,e),n(") => "),(l||a)&&(n("{"),s()),o?(l&&n("return "),H(o)?ou(o,e):Ve(o,e)):a&&Ve(a,e),(l||a)&&(i(),n("}")),c&&(t.isNonScopedSlot&&n(", undefined, true"),n(")"))}function XE(t,e){const{test:n,consequent:s,alternate:i,newline:r}=t,{push:o,indent:a,deindent:l,newline:c}=e;if(n.type===4){const h=!Zc(n.content);h&&o("("),bm(n,e),h&&o(")")}else o("("),Ve(n,e),o(")");r&&a(),e.indentLevel++,r||o(" "),o("? "),Ve(s,e),e.indentLevel--,r&&c(),r||o(" "),o(": ");const u=i.type===19;u||e.indentLevel++,Ve(i,e),u||e.indentLevel--,r&&l(!0)}function ZE(t,e){const{push:n,helper:s,indent:i,deindent:r,newline:o}=e;n(`_cache[${t.index}] || (`),t.isVNode&&(i(),n(`${s(Qo)}(-1),`),o()),n(`_cache[${t.index}] = `),Ve(t.value,e),t.isVNode&&(n(","),o(),n(`${s(Qo)}(1),`),o(),n(`_cache[${t.index}]`),r()),n(")")}new RegExp("\\b"+"do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments,typeof,void".split(",").join("\\b|\\b")+"\\b");const eI=wm(/^(if|else|else-if)$/,(t,e,n)=>tI(t,e,n,(s,i,r)=>{const o=n.parent.children;let a=o.indexOf(s),l=0;for(;a-->=0;){const c=o[a];c&&c.type===9&&(l+=c.branches.length)}return()=>{if(r)s.codegenNode=Tm(i,l,n);else{const c=nI(s.codegenNode);c.alternate=Tm(i,l+s.branches.length-1,n)}}}));function tI(t,e,n,s){if(e.name!=="else"&&(!e.exp||!e.exp.content.trim())){const i=e.exp?e.exp.loc:t.loc;n.onError(Ce(28,e.loc)),e.exp=te("true",!1,i)}if(e.name==="if"){const i=Im(t,e),r={type:9,loc:t.loc,branches:[i]};if(n.replaceNode(r),s)return s(r,i,!0)}else{const i=n.parent.children;let r=i.indexOf(t);for(;r-->=-1;){const o=i[r];if(o&&o.type===2&&!o.content.trim().length){n.removeNode(o);continue}if(o&&o.type===9){e.name==="else-if"&&o.branches[o.branches.length-1].condition===void 0&&n.onError(Ce(30,t.loc)),n.removeNode();const a=Im(t,e);o.branches.push(a);const l=s&&s(o,a,!1);ia(a,n),l&&l(),n.currentNode=null}else n.onError(Ce(30,t.loc));break}}}function Im(t,e){return{type:10,loc:t.loc,condition:e.name==="else"?void 0:e.exp,children:t.tagType===3&&!vt(t,"for")?t.children:[t],userKey:hr(t,"key")}}function Tm(t,e,n){return t.condition?Xc(t.condition,Cm(t,e,n),Re(n.helper(or),['""',"true"])):Cm(t,e,n)}function Cm(t,e,n){const{helper:s}=n,i=ke("key",te(`${e}`,!1,ft,2)),{children:r}=t,o=r[0];if(r.length!==1||o.type!==1)if(r.length===1&&o.type===11){const l=o.codegenNode;return ta(l,i,n),l}else{let l=64;return cr(n,s(ir),yt([i]),r,l+"",void 0,void 0,!0,!1,!1,t.loc)}else{const l=o.codegenNode,c=yE(l);return c.type===13&&tu(c,n),ta(c,i,n),l}}function nI(t){for(;;)if(t.type===19)if(t.alternate.type===19)t=t.alternate;else return t;else t.type===20&&(t=t.value)}const sI=wm("for",(t,e,n)=>{const{helper:s,removeHelper:i}=n;return iI(t,e,n,r=>{const o=Re(s(qc),[r.source]),a=vt(t,"memo"),l=hr(t,"key"),c=l&&(l.type===6?te(l.value.content,!0):l.exp),u=l?ke("key",c):null,h=r.source.type===4&&r.source.constType>0,f=h?64:l?128:256;return r.codegenNode=cr(n,s(ir),void 0,o,f+"",void 0,void 0,!0,!h,!1,t.loc),()=>{let d;const p=Zo(t),{children:v}=r,_=v.length!==1||v[0].type!==1,y=ea(t)?t:p&&t.children.length===1&&ea(t.children[0])?t.children[0]:null;if(y?(d=y.codegenNode,p&&u&&ta(d,u,n)):_?d=cr(n,s(ir),u?yt([u]):void 0,t.children,64+"",void 0,void 0,!0,void 0,!1):(d=v[0].codegenNode,p&&u&&ta(d,u,n),d.isBlock!==!h&&(d.isBlock?(i(cs),i(ii(n.inSSR,d.isComponent))):i(si(n.inSSR,d.isComponent))),d.isBlock=!h,d.isBlock?(s(cs),s(ii(n.inSSR,d.isComponent))):s(si(n.inSSR,d.isComponent))),a){const m=ti(au(r.parseResult,[te("_cached")]));m.body=cE([zt(["const _memo = (",a.exp,")"]),zt(["if (_cached",...c?[" && _cached.key === ",c]:[],` && ${n.helperString(im)}(_cached, _memo)) return _cached`]),zt(["const _item = ",d]),te("_item.memo = _memo"),te("return _item")]),o.arguments.push(m,te("_cache"),te(String(n.cached++)))}else o.arguments.push(ti(au(r.parseResult),d,!0))}})});function iI(t,e,n,s){if(!e.exp){n.onError(Ce(31,e.loc));return}const i=km(e.exp);if(!i){n.onError(Ce(32,e.loc));return}const{addIdentifiers:r,removeIdentifiers:o,scopes:a}=n,{source:l,value:c,key:u,index:h}=i,f={type:11,loc:e.loc,source:l,valueAlias:c,keyAlias:u,objectIndexAlias:h,parseResult:i,children:Zo(t)?t.children:[t]};n.replaceNode(f),a.vFor++;const d=s&&s(f);return()=>{a.vFor--,d&&d()}}const rI=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,Sm=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,oI=/^\(|\)$/g;function km(t,e){const n=t.loc,s=t.content,i=s.match(rI);if(!i)return;const[,r,o]=i,a={source:oa(n,o.trim(),s.indexOf(o,r.length)),value:void 0,key:void 0,index:void 0};let l=r.trim().replace(oI,"").trim();const c=r.indexOf(l),u=l.match(Sm);if(u){l=l.replace(Sm,"").trim();const h=u[1].trim();let f;if(h&&(f=s.indexOf(h,c+l.length),a.key=oa(n,h,f)),u[2]){const d=u[2].trim();d&&(a.index=oa(n,d,s.indexOf(d,a.key?f+h.length:c+l.length)))}}return l&&(a.value=oa(n,l,c)),a}function oa(t,e,n){return te(e,!1,am(t,n,e.length))}function au({value:t,key:e,index:n},s=[]){return aI([t,e,n,...s])}function aI(t){let e=t.length;for(;e--&&!t[e];);return t.slice(0,e+1).map((n,s)=>n||te("_".repeat(s+1),!1))}const Rm=te("undefined",!1),lI=(t,e)=>{if(t.type===1&&(t.tagType===1||t.tagType===3)){const n=vt(t,"slot");if(n)return n.exp,e.scopes.vSlot++,()=>{e.scopes.vSlot--}}},cI=(t,e,n)=>ti(t,e,!1,!0,e.length?e[0].loc:n);function uI(t,e,n=cI){e.helper(Yc);const{children:s,loc:i}=t,r=[],o=[];let a=e.scopes.vSlot>0||e.scopes.vFor>0;const l=vt(t,"slot",!0);if(l){const{arg:v,exp:_}=l;v&&!et(v)&&(a=!0),r.push(ke(v||te("default",!0),n(_,s,i)))}let c=!1,u=!1;const h=[],f=new Set;for(let v=0;v<s.length;v++){const _=s[v];let y;if(!Zo(_)||!(y=vt(_,"slot",!0))){_.type!==3&&h.push(_);continue}if(l){e.onError(Ce(37,y.loc));break}c=!0;const{children:m,loc:g}=_,{arg:w=te("default",!0),exp:T,loc:E}=y;let I;et(w)?I=w?w.content:"default":a=!0;const C=n(T,m,g);let k,R,x;if(k=vt(_,"if"))a=!0,o.push(Xc(k.exp,aa(w,C),Rm));else if(R=vt(_,/^else(-if)?$/,!0)){let N=v,$;for(;N--&&($=s[N],$.type===3););if($&&Zo($)&&vt($,"if")){s.splice(v,1),v--;let J=o[o.length-1];for(;J.alternate.type===19;)J=J.alternate;J.alternate=R.exp?Xc(R.exp,aa(w,C),Rm):aa(w,C)}else e.onError(Ce(30,R.loc))}else if(x=vt(_,"for")){a=!0;const N=x.parseResult||km(x.exp);N?o.push(Re(e.helper(qc),[N.source,ti(au(N),aa(w,C),!0)])):e.onError(Ce(32,x.loc))}else{if(I){if(f.has(I)){e.onError(Ce(38,E));continue}f.add(I),I==="default"&&(u=!0)}r.push(ke(w,C))}}if(!l){const v=(_,y)=>{const m=n(_,y,i);return e.compatConfig&&(m.isNonScopedSlot=!0),ke("default",m)};c?h.length&&h.some(_=>Am(_))&&(u?e.onError(Ce(39,h[0].loc)):r.push(v(void 0,h))):r.push(v(void 0,s))}const d=a?2:la(t.children)?3:1;let p=yt(r.concat(ke("_",te(d+"",!1))),i);return o.length&&(p=Re(e.helper(sm),[p,ur(o)])),{slots:p,hasDynamicSlots:a}}function aa(t,e){return yt([ke("name",t),ke("fn",e)])}function la(t){for(let e=0;e<t.length;e++){const n=t[e];switch(n.type){case 1:if(n.tagType===2||la(n.children))return!0;break;case 9:if(la(n.branches))return!0;break;case 10:case 11:if(la(n.children))return!0;break}}return!1}function Am(t){return t.type!==2&&t.type!==12?!0:t.type===2?!!t.content.trim():Am(t.content)}const Nm=new WeakMap,hI=(t,e)=>function(){if(t=e.currentNode,!(t.type===1&&(t.tagType===0||t.tagType===1)))return;const{tag:s,props:i}=t,r=t.tagType===1;let o=r?fI(t,e):`"${s}"`;const a=Te(o)&&o.callee===zo;let l,c,u,h=0,f,d,p,v=a||o===rr||o===Lc||!r&&(s==="svg"||s==="foreignObject"||hr(t,"key",!0));if(i.length>0){const _=Pm(t,e);l=_.props,h=_.patchFlag,d=_.dynamicPropNames;const y=_.directives;p=y&&y.length?ur(y.map(m=>pI(m,e))):void 0}if(t.children.length>0)if(o===jo&&(v=!0,h|=1024),r&&o!==rr&&o!==jo){const{slots:y,hasDynamicSlots:m}=uI(t,e);c=y,m&&(h|=1024)}else if(t.children.length===1&&o!==rr){const y=t.children[0],m=y.type,g=m===5||m===8;g&&bt(y,e)===0&&(h|=1),g||m===2?c=y:c=t.children}else c=t.children;h!==0&&(u=String(h),d&&d.length&&(f=mI(d))),t.codegenNode=cr(e,o,l,c,u,f,p,!!v,!1,r,t.loc)};function fI(t,e,n=!1){let{tag:s}=t;const i=cu(s),r=hr(t,"is");if(r)if(i||us("COMPILER_IS_ON_ELEMENT",e)){const l=r.type===6?r.value&&te(r.value.content,!0):r.exp;if(l)return Re(e.helper(zo),[l])}else r.type===6&&r.value.content.startsWith("vue:")&&(s=r.value.content.slice(4));const o=!i&&vt(t,"is");if(o&&o.exp)return Re(e.helper(zo),[o.exp]);const a=rm(s)||e.isBuiltInComponent(s);return a?(n||e.helper(a),a):(e.helper(Hc),e.components.add(s),fr(s,"component"))}function Pm(t,e,n=t.props,s=!1){const{tag:i,loc:r}=t,o=t.tagType===1;let a=[];const l=[],c=[];let u=0,h=!1,f=!1,d=!1,p=!1,v=!1,_=!1;const y=[],m=({key:w,value:T})=>{if(et(w)){const E=w.content,I=Gn(E);if(!o&&I&&E.toLowerCase()!=="onclick"&&E!=="onUpdate:modelValue"&&!Yn(E)&&(p=!0),I&&Yn(E)&&(_=!0),T.type===20||(T.type===4||T.type===8)&&bt(T,e)>0)return;E==="ref"?h=!0:E==="class"?f=!0:E==="style"?d=!0:E!=="key"&&!y.includes(E)&&y.push(E),o&&(E==="class"||E==="style")&&!y.includes(E)&&y.push(E)}else v=!0};for(let w=0;w<n.length;w++){const T=n[w];if(T.type===6){const{loc:E,name:I,value:C}=T;let k=te(C?C.content:"",!0,C?C.loc:E);if(I==="ref"&&(h=!0),I==="is"&&(cu(i)||C&&C.content.startsWith("vue:")||us("COMPILER_IS_ON_ELEMENT",e)))continue;a.push(ke(te(I,!0,am(E,0,I.length)),k))}else{const{name:E,arg:I,exp:C,loc:k}=T,R=E==="bind",x=E==="on";if(E==="slot"){o||e.onError(Ce(40,k));continue}if(E==="once"||E==="memo"||E==="is"||R&&Xo(I,"is")&&(cu(i)||us("COMPILER_IS_ON_ELEMENT",e))||x&&s)continue;if(!I&&(R||x)){if(v=!0,C)if(a.length&&(l.push(yt(lu(a),r)),a=[]),R){if(us("COMPILER_V_BIND_OBJECT_ORDER",e)){l.unshift(C);continue}l.push(C)}else l.push({type:14,loc:k,callee:e.helper(Kc),arguments:[C]});else e.onError(Ce(R?34:35,k));continue}const N=e.directiveTransforms[E];if(N){const{props:$,needRuntime:J}=N(T,t,e);!s&&$.forEach(m),a.push(...$),J&&(c.push(T),Ws(J)&&Nm.set(T,J))}else c.push(T)}T.type===6&&T.name==="ref"&&e.scopes.vFor>0&&ri("COMPILER_V_FOR_REF",e,T.loc)&&a.push(ke(te("refInFor",!0),te("true",!1)))}let g;if(l.length?(a.length&&l.push(yt(lu(a),r)),l.length>1?g=Re(e.helper(Go),l,r):g=l[0]):a.length&&(g=yt(lu(a),r)),v?u|=16:(f&&!o&&(u|=2),d&&!o&&(u|=4),y.length&&(u|=8),p&&(u|=32)),(u===0||u===32)&&(h||_||c.length>0)&&(u|=512),!e.inSSR&&g)switch(g.type){case 15:let w=-1,T=-1,E=!1;for(let k=0;k<g.properties.length;k++){const R=g.properties[k].key;et(R)?R.content==="class"?w=k:R.content==="style"&&(T=k):R.isHandlerKey||(E=!0)}const I=g.properties[w],C=g.properties[T];E?g=Re(e.helper(ar),[g]):(I&&!et(I.value)&&(I.value=Re(e.helper(jc),[I.value])),C&&!et(C.value)&&(d||C.value.type===17)&&(C.value=Re(e.helper(zc),[C.value])));break;case 14:break;default:g=Re(e.helper(ar),[Re(e.helper(lr),[g])]);break}return{props:g,directives:c,patchFlag:u,dynamicPropNames:y}}function lu(t){const e=new Map,n=[];for(let s=0;s<t.length;s++){const i=t[s];if(i.key.type===8||!i.key.isStatic){n.push(i);continue}const r=i.key.content,o=e.get(r);o?(r==="style"||r==="class"||Gn(r))&&dI(o,i):(e.set(r,i),n.push(i))}return n}function dI(t,e){t.value.type===17?t.value.elements.push(e.value):t.value=ur([t.value,e.value],t.loc)}function pI(t,e){const n=[],s=Nm.get(t);s?n.push(e.helperString(s)):(e.helper($c),e.directives.add(t.name),n.push(fr(t.name,"directive")));const{loc:i}=t;if(t.exp&&n.push(t.exp),t.arg&&(t.exp||n.push("void 0"),n.push(t.arg)),Object.keys(t.modifiers).length){t.arg||(t.exp||n.push("void 0"),n.push("void 0"));const r=te("true",!1,i);n.push(yt(t.modifiers.map(o=>ke(o,r)),i))}return ur(n,t.loc)}function mI(t){let e="[";for(let n=0,s=t.length;n<s;n++)e+=JSON.stringify(t[n]),n<s-1&&(e+=", ");return e+"]"}function cu(t){return t==="component"||t==="Component"}const gI=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},_I=/-(\w)/g,Om=gI(t=>t.replace(_I,(e,n)=>n?n.toUpperCase():"")),yI=(t,e)=>{if(ea(t)){const{children:n,loc:s}=t,{slotName:i,slotProps:r}=vI(t,e),o=[e.prefixIdentifiers?"_ctx.$slots":"$slots",i,"{}","undefined","true"];let a=2;r&&(o[2]=r,a=3),n.length&&(o[3]=ti([],n,!1,!1,s),a=4),e.scopeId&&!e.slotted&&(a=5),o.splice(a),t.codegenNode=Re(e.helper(nm),o,s)}};function vI(t,e){let n='"default"',s;const i=[];for(let r=0;r<t.props.length;r++){const o=t.props[r];o.type===6?o.value&&(o.name==="name"?n=JSON.stringify(o.value.content):(o.name=Om(o.name),i.push(o))):o.name==="bind"&&Xo(o.arg,"name")?o.exp&&(n=o.exp):(o.name==="bind"&&o.arg&&et(o.arg)&&(o.arg.content=Om(o.arg.content)),i.push(o))}if(i.length>0){const{props:r,directives:o}=Pm(t,e,i);s=r,o.length&&e.onError(Ce(36,o[0].loc))}return{slotName:n,slotProps:s}}const wI=/^\s*([\w$_]+|(async\s*)?\([^)]*?\))\s*=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/,Mm=(t,e,n,s)=>{const{loc:i,modifiers:r,arg:o}=t;!t.exp&&!r.length&&n.onError(Ce(35,i));let a;if(o.type===4)if(o.isStatic){const h=o.content;a=te(Vs($e(h)),!0,o.loc)}else a=zt([`${n.helperString(Qc)}(`,o,")"]);else a=o,a.children.unshift(`${n.helperString(Qc)}(`),a.children.push(")");let l=t.exp;l&&!l.content.trim()&&(l=void 0);let c=n.cacheHandlers&&!l&&!n.inVOnce;if(l){const h=om(l.content),f=!(h||wI.test(l.content)),d=l.content.includes(";");(f||c&&h)&&(l=zt([`${f?"$event":"(...args)"} => ${d?"{":"("}`,l,d?"}":")"]))}let u={props:[ke(a,l||te("() => {}",!1,i))]};return s&&(u=s(u)),c&&(u.props[0].value=n.cache(u.props[0].value)),u.props.forEach(h=>h.key.isHandlerKey=!0),u},bI=(t,e,n)=>{const{exp:s,modifiers:i,loc:r}=t,o=t.arg;return o.type!==4?(o.children.unshift("("),o.children.push(') || ""')):o.isStatic||(o.content=`${o.content} || ""`),i.includes("camel")&&(o.type===4?o.isStatic?o.content=$e(o.content):o.content=`${n.helperString(Gc)}(${o.content})`:(o.children.unshift(`${n.helperString(Gc)}(`),o.children.push(")"))),n.inSSR||(i.includes("prop")&&xm(o,"."),i.includes("attr")&&xm(o,"^")),!s||s.type===4&&!s.content.trim()?(n.onError(Ce(34,r)),{props:[ke(o,te("",!0,r))]}):{props:[ke(o,s)]}},xm=(t,e)=>{t.type===4?t.isStatic?t.content=e+t.content:t.content=`\`${e}\${${t.content}}\``:(t.children.unshift(`'${e}' + (`),t.children.push(")"))},EI=(t,e)=>{if(t.type===0||t.type===1||t.type===11||t.type===10)return()=>{const n=t.children;let s,i=!1;for(let r=0;r<n.length;r++){const o=n[r];if(eu(o)){i=!0;for(let a=r+1;a<n.length;a++){const l=n[a];if(eu(l))s||(s=n[r]={type:8,loc:o.loc,children:[o]}),s.children.push(" + ",l),n.splice(a,1),a--;else{s=void 0;break}}}}if(!(!i||n.length===1&&(t.type===0||t.type===1&&t.tagType===0&&!t.props.find(r=>r.type===7&&!e.directiveTransforms[r.name])&&t.tag!=="template")))for(let r=0;r<n.length;r++){const o=n[r];if(eu(o)||o.type===8){const a=[];(o.type!==2||o.content!==" ")&&a.push(o),!e.ssr&&bt(o,e)===0&&a.push(1+""),n[r]={type:12,content:o,loc:o.loc,codegenNode:Re(e.helper(Bc),a)}}}}},Dm=new WeakSet,II=(t,e)=>{if(t.type===1&&vt(t,"once",!0))return Dm.has(t)||e.inVOnce?void 0:(Dm.add(t),e.inVOnce=!0,e.helper(Qo),()=>{e.inVOnce=!1;const n=e.currentNode;n.codegenNode&&(n.codegenNode=e.cache(n.codegenNode,!0))})},Lm=(t,e,n)=>{const{exp:s,arg:i}=t;if(!s)return n.onError(Ce(41,t.loc)),uu();const r=s.loc.source,o=s.type===4?s.content:r;n.bindingMetadata[r];const a=!1;if(!o.trim()||!om(o)&&!a)return n.onError(Ce(42,s.loc)),uu();const l=i||te("modelValue",!0),c=i?et(i)?`onUpdate:${i.content}`:zt(['"onUpdate:" + ',i]):"onUpdate:modelValue";let u;const h=n.isTS?"($event: any)":"$event";u=zt([`${h} => ((`,s,") = $event)"]);const f=[ke(l,t.exp),ke(c,u)];if(t.modifiers.length&&e.tagType===1){const d=t.modifiers.map(v=>(Zc(v)?v:JSON.stringify(v))+": true").join(", "),p=i?et(i)?`${i.content}Modifiers`:zt([i,' + "Modifiers"']):"modelModifiers";f.push(ke(p,te(`{ ${d} }`,!1,t.loc,2)))}return uu(f)};function uu(t=[]){return{props:t}}const TI=/[\w).+\-_$\]]/,CI=(t,e)=>{!us("COMPILER_FILTER",e)||(t.type===5&&ca(t.content,e),t.type===1&&t.props.forEach(n=>{n.type===7&&n.name!=="for"&&n.exp&&ca(n.exp,e)}))};function ca(t,e){if(t.type===4)Fm(t,e);else for(let n=0;n<t.children.length;n++){const s=t.children[n];typeof s=="object"&&(s.type===4?Fm(s,e):s.type===8?ca(t,e):s.type===5&&ca(s.content,e))}}function Fm(t,e){const n=t.content;let s=!1,i=!1,r=!1,o=!1,a=0,l=0,c=0,u=0,h,f,d,p,v=[];for(d=0;d<n.length;d++)if(f=h,h=n.charCodeAt(d),s)h===39&&f!==92&&(s=!1);else if(i)h===34&&f!==92&&(i=!1);else if(r)h===96&&f!==92&&(r=!1);else if(o)h===47&&f!==92&&(o=!1);else if(h===124&&n.charCodeAt(d+1)!==124&&n.charCodeAt(d-1)!==124&&!a&&!l&&!c)p===void 0?(u=d+1,p=n.slice(0,d).trim()):_();else{switch(h){case 34:i=!0;break;case 39:s=!0;break;case 96:r=!0;break;case 40:c++;break;case 41:c--;break;case 91:l++;break;case 93:l--;break;case 123:a++;break;case 125:a--;break}if(h===47){let y=d-1,m;for(;y>=0&&(m=n.charAt(y),m===" ");y--);(!m||!TI.test(m))&&(o=!0)}}p===void 0?p=n.slice(0,d).trim():u!==0&&_();function _(){v.push(n.slice(u,d).trim()),u=d+1}if(v.length){for(d=0;d<v.length;d++)p=SI(p,v[d],e);t.content=p}}function SI(t,e,n){n.helper(Wc);const s=e.indexOf("(");if(s<0)return n.filters.add(e),`${fr(e,"filter")}(${t})`;{const i=e.slice(0,s),r=e.slice(s+1);return n.filters.add(i),`${fr(i,"filter")}(${t}${r!==")"?","+r:r}`}}const Um=new WeakSet,kI=(t,e)=>{if(t.type===1){const n=vt(t,"memo");return!n||Um.has(t)?void 0:(Um.add(t),()=>{const s=t.codegenNode||e.currentNode.codegenNode;s&&s.type===13&&(t.tagType!==1&&tu(s,e),t.codegenNode=Re(e.helper(Jc),[n.exp,ti(void 0,s),"_cache",String(e.cached++)]))})}};function RI(t){return[[II,eI,kI,sI,CI,yI,hI,lI,EI],{on:Mm,bind:bI,model:Lm}]}function AI(t,e={}){const n=e.onError||Dc,s=e.mode==="module";e.prefixIdentifiers===!0?n(Ce(46)):s&&n(Ce(47));const i=!1;e.cacheHandlers&&n(Ce(48)),e.scopeId&&!s&&n(Ce(49));const r=Y(t)?bE(t,e):t,[o,a]=RI();return DE(r,le({},e,{prefixIdentifiers:i,nodeTransforms:[...o,...e.nodeTransforms||[]],directiveTransforms:le({},a,e.directiveTransforms||{})})),BE(r,le({},e,{prefixIdentifiers:i}))}const NI=()=>({props:[]}),Bm=Symbol(""),Hm=Symbol(""),$m=Symbol(""),Wm=Symbol(""),hu=Symbol(""),Vm=Symbol(""),qm=Symbol(""),jm=Symbol(""),zm=Symbol(""),Km=Symbol("");oE({[Bm]:"vModelRadio",[Hm]:"vModelCheckbox",[$m]:"vModelText",[Wm]:"vModelSelect",[hu]:"vModelDynamic",[Vm]:"withModifiers",[qm]:"withKeys",[jm]:"vShow",[zm]:"Transition",[Km]:"TransitionGroup"});let oi;function PI(t,e=!1){return oi||(oi=document.createElement("div")),e?(oi.innerHTML=`<div foo="${t.replace(/"/g,"&quot;")}">`,oi.children[0].getAttribute("foo")):(oi.innerHTML=t,oi.textContent)}const OI=ot("style,iframe,script,noscript",!0),MI={isVoidTag:Dv,isNativeTag:t=>Mv(t)||xv(t),isPreTag:t=>t==="pre",decodeEntities:PI,isBuiltInComponent:t=>{if(ni(t,"Transition"))return zm;if(ni(t,"TransitionGroup"))return Km},getNamespace(t,e){let n=e?e.ns:0;if(e&&n===2)if(e.tag==="annotation-xml"){if(t==="svg")return 1;e.props.some(s=>s.type===6&&s.name==="encoding"&&s.value!=null&&(s.value.content==="text/html"||s.value.content==="application/xhtml+xml"))&&(n=0)}else/^m(?:[ions]|text)$/.test(e.tag)&&t!=="mglyph"&&t!=="malignmark"&&(n=0);else e&&n===1&&(e.tag==="foreignObject"||e.tag==="desc"||e.tag==="title")&&(n=0);if(n===0){if(t==="svg")return 1;if(t==="math")return 2}return n},getTextMode({tag:t,ns:e}){if(e===0){if(t==="textarea"||t==="title")return 1;if(OI(t))return 2}return 0}},xI=t=>{t.type===1&&t.props.forEach((e,n)=>{e.type===6&&e.name==="style"&&e.value&&(t.props[n]={type:7,name:"bind",arg:te("style",!0,e.loc),exp:DI(e.value.content,e.loc),modifiers:[],loc:e.loc})})},DI=(t,e)=>{const n=Nf(t);return te(JSON.stringify(n),!1,e,3)};function cn(t,e){return Ce(t,e)}const LI=(t,e,n)=>{const{exp:s,loc:i}=t;return s||n.onError(cn(50,i)),e.children.length&&(n.onError(cn(51,i)),e.children.length=0),{props:[ke(te("innerHTML",!0,i),s||te("",!0))]}},FI=(t,e,n)=>{const{exp:s,loc:i}=t;return s||n.onError(cn(52,i)),e.children.length&&(n.onError(cn(53,i)),e.children.length=0),{props:[ke(te("textContent",!0),s?Re(n.helperString(Ko),[s],i):te("",!0))]}},UI=(t,e,n)=>{const s=Lm(t,e,n);if(!s.props.length||e.tagType===1)return s;t.arg&&n.onError(cn(55,t.arg.loc));const{tag:i}=e,r=n.isCustomElement(i);if(i==="input"||i==="textarea"||i==="select"||r){let o=$m,a=!1;if(i==="input"||r){const l=hr(e,"type");if(l){if(l.type===7)o=hu;else if(l.value)switch(l.value.content){case"radio":o=Bm;break;case"checkbox":o=Hm;break;case"file":a=!0,n.onError(cn(56,t.loc));break}}else mE(e)&&(o=hu)}else i==="select"&&(o=Wm);a||(s.needRuntime=n.helper(o))}else n.onError(cn(54,t.loc));return s.props=s.props.filter(o=>!(o.key.type===4&&o.key.content==="modelValue")),s},BI=ot("passive,once,capture"),HI=ot("stop,prevent,self,ctrl,shift,alt,meta,exact,middle"),$I=ot("left,right"),Gm=ot("onkeyup,onkeydown,onkeypress",!0),WI=(t,e,n,s)=>{const i=[],r=[],o=[];for(let a=0;a<e.length;a++){const l=e[a];l==="native"&&ri("COMPILER_V_ON_NATIVE",n)||BI(l)?o.push(l):$I(l)?et(t)?Gm(t.content)?i.push(l):r.push(l):(i.push(l),r.push(l)):HI(l)?r.push(l):i.push(l)}return{keyModifiers:i,nonKeyModifiers:r,eventOptionModifiers:o}},Qm=(t,e)=>et(t)&&t.content.toLowerCase()==="onclick"?te(e,!0):t.type!==4?zt(["(",t,`) === "onClick" ? "${e}" : (`,t,")"]):t,VI=(t,e,n)=>Mm(t,e,n,s=>{const{modifiers:i}=t;if(!i.length)return s;let{key:r,value:o}=s.props[0];const{keyModifiers:a,nonKeyModifiers:l,eventOptionModifiers:c}=WI(r,i,n,t.loc);if(l.includes("right")&&(r=Qm(r,"onContextmenu")),l.includes("middle")&&(r=Qm(r,"onMouseup")),l.length&&(o=Re(n.helper(Vm),[o,JSON.stringify(l)])),a.length&&(!et(r)||Gm(r.content))&&(o=Re(n.helper(qm),[o,JSON.stringify(a)])),c.length){const u=c.map(Jn).join("");r=et(r)?te(`${r.content}${u}`,!0):zt(["(",r,`) + "${u}"`])}return{props:[ke(r,o)]}}),qI=(t,e,n)=>{const{exp:s,loc:i}=t;return s||n.onError(cn(58,i)),{props:[],needRuntime:n.helper(jm)}},jI=(t,e)=>{t.type===1&&t.tagType===0&&(t.tag==="script"||t.tag==="style")&&(e.onError(cn(60,t.loc)),e.removeNode())},zI=[xI],KI={cloak:NI,html:LI,text:FI,model:UI,on:VI,show:qI};function GI(t,e={}){return AI(t,le({},MI,e,{nodeTransforms:[jI,...zI,...e.nodeTransforms||[]],directiveTransforms:le({},KI,e.directiveTransforms||{}),transformHoist:null}))}const Ym=Object.create(null);function QI(t,e){if(!Y(t))if(t.nodeType)t=t.innerHTML;else return Ke;const n=t,s=Ym[n];if(s)return s;if(t[0]==="#"){const o=document.querySelector(t);t=o?o.innerHTML:""}const{code:i}=GI(t,le({hoistStatic:!0,onError:void 0,onWarn:Ke},e)),r=new Function("Vue",i)(eE);return r._rc=!0,Ym[n]=r}Zd(QI);var YI=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Jm={exports:{}};(function(t,e){(function(n,s){t.exports=s()})(YI,function(){var n=function(){function s(d){return o.appendChild(d.dom),d}function i(d){for(var p=0;p<o.children.length;p++)o.children[p].style.display=p===d?"block":"none";r=d}var r=0,o=document.createElement("div");o.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",o.addEventListener("click",function(d){d.preventDefault(),i(++r%o.children.length)},!1);var a=(performance||Date).now(),l=a,c=0,u=s(new n.Panel("FPS","#0ff","#002")),h=s(new n.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var f=s(new n.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:o,addPanel:s,showPanel:i,begin:function(){a=(performance||Date).now()},end:function(){c++;var d=(performance||Date).now();if(h.update(d-a,200),d>l+1e3&&(u.update(1e3*c/(d-l),100),l=d,c=0,f)){var p=performance.memory;f.update(p.usedJSHeapSize/1048576,p.jsHeapSizeLimit/1048576)}return d},update:function(){a=this.end()},domElement:o,setMode:i}};return n.Panel=function(s,i,r){var o=1/0,a=0,l=Math.round,c=l(window.devicePixelRatio||1),u=80*c,h=48*c,f=3*c,d=2*c,p=3*c,v=15*c,_=74*c,y=30*c,m=document.createElement("canvas");m.width=u,m.height=h,m.style.cssText="width:80px;height:48px";var g=m.getContext("2d");return g.font="bold "+9*c+"px Helvetica,Arial,sans-serif",g.textBaseline="top",g.fillStyle=r,g.fillRect(0,0,u,h),g.fillStyle=i,g.fillText(s,f,d),g.fillRect(p,v,_,y),g.fillStyle=r,g.globalAlpha=.9,g.fillRect(p,v,_,y),{dom:m,update:function(w,T){o=Math.min(o,w),a=Math.max(a,w),g.fillStyle=r,g.globalAlpha=1,g.fillRect(0,0,u,v),g.fillStyle=i,g.fillText(l(w)+" "+s+" ("+l(o)+"-"+l(a)+")",f,d),g.drawImage(m,p+c,v,_-c,y,p,v,_-c,y),g.fillRect(p+_-c,v,c,y),g.fillStyle=r,g.globalAlpha=.9,g.fillRect(p+_-c,v,c,l((1-w/T)*y))}}},n})})(Jm);var JI=Jm.exports,Xm={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},fu={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},XI=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],ua={CSS:{},springs:{}};function Kt(t,e,n){return Math.min(Math.max(t,e),n)}function _r(t,e){return t.indexOf(e)>-1}function du(t,e){return t.apply(null,e)}var V={arr:function(t){return Array.isArray(t)},obj:function(t){return _r(Object.prototype.toString.call(t),"Object")},pth:function(t){return V.obj(t)&&t.hasOwnProperty("totalLength")},svg:function(t){return t instanceof SVGElement},inp:function(t){return t instanceof HTMLInputElement},dom:function(t){return t.nodeType||V.svg(t)},str:function(t){return typeof t=="string"},fnc:function(t){return typeof t=="function"},und:function(t){return typeof t=="undefined"},nil:function(t){return V.und(t)||t===null},hex:function(t){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)},rgb:function(t){return/^rgb/.test(t)},hsl:function(t){return/^hsl/.test(t)},col:function(t){return V.hex(t)||V.rgb(t)||V.hsl(t)},key:function(t){return!Xm.hasOwnProperty(t)&&!fu.hasOwnProperty(t)&&t!=="targets"&&t!=="keyframes"}};function Zm(t){var e=/\(([^)]+)\)/.exec(t);return e?e[1].split(",").map(function(n){return parseFloat(n)}):[]}function eg(t,e){var n=Zm(t),s=Kt(V.und(n[0])?1:n[0],.1,100),i=Kt(V.und(n[1])?100:n[1],.1,100),r=Kt(V.und(n[2])?10:n[2],.1,100),o=Kt(V.und(n[3])?0:n[3],.1,100),a=Math.sqrt(i/s),l=r/(2*Math.sqrt(i*s)),c=l<1?a*Math.sqrt(1-l*l):0,u=1,h=l<1?(l*a+-o)/c:-o+a;function f(p){var v=e?e*p/1e3:p;return l<1?v=Math.exp(-v*l*a)*(u*Math.cos(c*v)+h*Math.sin(c*v)):v=(u+h*v)*Math.exp(-v*a),p===0||p===1?p:1-v}function d(){var p=ua.springs[t];if(p)return p;for(var v=1/6,_=0,y=0;;)if(_+=v,f(_)===1){if(y++,y>=16)break}else y=0;var m=_*v*1e3;return ua.springs[t]=m,m}return e?f:d}function ZI(t){return t===void 0&&(t=10),function(e){return Math.ceil(Kt(e,1e-6,1)*t)*(1/t)}}var eT=function(){var t=11,e=1/(t-1);function n(u,h){return 1-3*h+3*u}function s(u,h){return 3*h-6*u}function i(u){return 3*u}function r(u,h,f){return((n(h,f)*u+s(h,f))*u+i(h))*u}function o(u,h,f){return 3*n(h,f)*u*u+2*s(h,f)*u+i(h)}function a(u,h,f,d,p){var v,_,y=0;do _=h+(f-h)/2,v=r(_,d,p)-u,v>0?f=_:h=_;while(Math.abs(v)>1e-7&&++y<10);return _}function l(u,h,f,d){for(var p=0;p<4;++p){var v=o(h,f,d);if(v===0)return h;var _=r(h,f,d)-u;h-=_/v}return h}function c(u,h,f,d){if(!(0<=u&&u<=1&&0<=f&&f<=1))return;var p=new Float32Array(t);if(u!==h||f!==d)for(var v=0;v<t;++v)p[v]=r(v*e,u,f);function _(y){for(var m=0,g=1,w=t-1;g!==w&&p[g]<=y;++g)m+=e;--g;var T=(y-p[g])/(p[g+1]-p[g]),E=m+T*e,I=o(E,u,f);return I>=.001?l(y,E,u,f):I===0?E:a(y,m,m+e,u,f)}return function(y){return u===h&&f===d||y===0||y===1?y:r(_(y),h,d)}}return c}(),tg=function(){var t={linear:function(){return function(s){return s}}},e={Sine:function(){return function(s){return 1-Math.cos(s*Math.PI/2)}},Circ:function(){return function(s){return 1-Math.sqrt(1-s*s)}},Back:function(){return function(s){return s*s*(3*s-2)}},Bounce:function(){return function(s){for(var i,r=4;s<((i=Math.pow(2,--r))-1)/11;);return 1/Math.pow(4,3-r)-7.5625*Math.pow((i*3-2)/22-s,2)}},Elastic:function(s,i){s===void 0&&(s=1),i===void 0&&(i=.5);var r=Kt(s,1,10),o=Kt(i,.1,2);return function(a){return a===0||a===1?a:-r*Math.pow(2,10*(a-1))*Math.sin((a-1-o/(Math.PI*2)*Math.asin(1/r))*(Math.PI*2)/o)}}},n=["Quad","Cubic","Quart","Quint","Expo"];return n.forEach(function(s,i){e[s]=function(){return function(r){return Math.pow(r,i+2)}}}),Object.keys(e).forEach(function(s){var i=e[s];t["easeIn"+s]=i,t["easeOut"+s]=function(r,o){return function(a){return 1-i(r,o)(1-a)}},t["easeInOut"+s]=function(r,o){return function(a){return a<.5?i(r,o)(a*2)/2:1-i(r,o)(a*-2+2)/2}},t["easeOutIn"+s]=function(r,o){return function(a){return a<.5?(1-i(r,o)(1-a*2))/2:(i(r,o)(a*2-1)+1)/2}}}),t}();function pu(t,e){if(V.fnc(t))return t;var n=t.split("(")[0],s=tg[n],i=Zm(t);switch(n){case"spring":return eg(t,e);case"cubicBezier":return du(eT,i);case"steps":return du(ZI,i);default:return du(s,i)}}function ng(t){try{var e=document.querySelectorAll(t);return e}catch{return}}function ha(t,e){for(var n=t.length,s=arguments.length>=2?arguments[1]:void 0,i=[],r=0;r<n;r++)if(r in t){var o=t[r];e.call(s,o,r,t)&&i.push(o)}return i}function fa(t){return t.reduce(function(e,n){return e.concat(V.arr(n)?fa(n):n)},[])}function sg(t){return V.arr(t)?t:(V.str(t)&&(t=ng(t)||t),t instanceof NodeList||t instanceof HTMLCollection?[].slice.call(t):[t])}function mu(t,e){return t.some(function(n){return n===e})}function gu(t){var e={};for(var n in t)e[n]=t[n];return e}function _u(t,e){var n=gu(t);for(var s in t)n[s]=e.hasOwnProperty(s)?e[s]:t[s];return n}function da(t,e){var n=gu(t);for(var s in e)n[s]=V.und(t[s])?e[s]:t[s];return n}function tT(t){var e=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(t);return e?"rgba("+e[1]+",1)":t}function nT(t){var e=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,n=t.replace(e,function(a,l,c,u){return l+l+c+c+u+u}),s=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n),i=parseInt(s[1],16),r=parseInt(s[2],16),o=parseInt(s[3],16);return"rgba("+i+","+r+","+o+",1)"}function sT(t){var e=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t),n=parseInt(e[1],10)/360,s=parseInt(e[2],10)/100,i=parseInt(e[3],10)/100,r=e[4]||1;function o(f,d,p){return p<0&&(p+=1),p>1&&(p-=1),p<1/6?f+(d-f)*6*p:p<1/2?d:p<2/3?f+(d-f)*(2/3-p)*6:f}var a,l,c;if(s==0)a=l=c=i;else{var u=i<.5?i*(1+s):i+s-i*s,h=2*i-u;a=o(h,u,n+1/3),l=o(h,u,n),c=o(h,u,n-1/3)}return"rgba("+a*255+","+l*255+","+c*255+","+r+")"}function iT(t){if(V.rgb(t))return tT(t);if(V.hex(t))return nT(t);if(V.hsl(t))return sT(t)}function un(t){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(t);if(e)return e[1]}function rT(t){if(_r(t,"translate")||t==="perspective")return"px";if(_r(t,"rotate")||_r(t,"skew"))return"deg"}function yu(t,e){return V.fnc(t)?t(e.target,e.id,e.total):t}function Gt(t,e){return t.getAttribute(e)}function vu(t,e,n){var s=un(e);if(mu([n,"deg","rad","turn"],s))return e;var i=ua.CSS[e+n];if(!V.und(i))return i;var r=100,o=document.createElement(t.tagName),a=t.parentNode&&t.parentNode!==document?t.parentNode:document.body;a.appendChild(o),o.style.position="absolute",o.style.width=r+n;var l=r/o.offsetWidth;a.removeChild(o);var c=l*parseFloat(e);return ua.CSS[e+n]=c,c}function ig(t,e,n){if(e in t.style){var s=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),i=t.style[e]||getComputedStyle(t).getPropertyValue(s)||"0";return n?vu(t,i,n):i}}function wu(t,e){if(V.dom(t)&&!V.inp(t)&&(!V.nil(Gt(t,e))||V.svg(t)&&t[e]))return"attribute";if(V.dom(t)&&mu(XI,e))return"transform";if(V.dom(t)&&e!=="transform"&&ig(t,e))return"css";if(t[e]!=null)return"object"}function rg(t){if(!!V.dom(t)){for(var e=t.style.transform||"",n=/(\w+)\(([^)]*)\)/g,s=new Map,i;i=n.exec(e);)s.set(i[1],i[2]);return s}}function oT(t,e,n,s){var i=_r(e,"scale")?1:0+rT(e),r=rg(t).get(e)||i;return n&&(n.transforms.list.set(e,r),n.transforms.last=e),s?vu(t,r,s):r}function bu(t,e,n,s){switch(wu(t,e)){case"transform":return oT(t,e,s,n);case"css":return ig(t,e,n);case"attribute":return Gt(t,e);default:return t[e]||0}}function Eu(t,e){var n=/^(\*=|\+=|-=)/.exec(t);if(!n)return t;var s=un(t)||0,i=parseFloat(e),r=parseFloat(t.replace(n[0],""));switch(n[0][0]){case"+":return i+r+s;case"-":return i-r+s;case"*":return i*r+s}}function og(t,e){if(V.col(t))return iT(t);if(/\s/g.test(t))return t;var n=un(t),s=n?t.substr(0,t.length-n.length):t;return e?s+e:s}function Iu(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function aT(t){return Math.PI*2*Gt(t,"r")}function lT(t){return Gt(t,"width")*2+Gt(t,"height")*2}function cT(t){return Iu({x:Gt(t,"x1"),y:Gt(t,"y1")},{x:Gt(t,"x2"),y:Gt(t,"y2")})}function ag(t){for(var e=t.points,n=0,s,i=0;i<e.numberOfItems;i++){var r=e.getItem(i);i>0&&(n+=Iu(s,r)),s=r}return n}function uT(t){var e=t.points;return ag(t)+Iu(e.getItem(e.numberOfItems-1),e.getItem(0))}function lg(t){if(t.getTotalLength)return t.getTotalLength();switch(t.tagName.toLowerCase()){case"circle":return aT(t);case"rect":return lT(t);case"line":return cT(t);case"polyline":return ag(t);case"polygon":return uT(t)}}function hT(t){var e=lg(t);return t.setAttribute("stroke-dasharray",e),e}function fT(t){for(var e=t.parentNode;V.svg(e)&&V.svg(e.parentNode);)e=e.parentNode;return e}function cg(t,e){var n=e||{},s=n.el||fT(t),i=s.getBoundingClientRect(),r=Gt(s,"viewBox"),o=i.width,a=i.height,l=n.viewBox||(r?r.split(" "):[0,0,o,a]);return{el:s,viewBox:l,x:l[0]/1,y:l[1]/1,w:o,h:a,vW:l[2],vH:l[3]}}function dT(t,e){var n=V.str(t)?ng(t)[0]:t,s=e||100;return function(i){return{property:i,el:n,svg:cg(n),totalLength:lg(n)*(s/100)}}}function pT(t,e,n){function s(u){u===void 0&&(u=0);var h=e+u>=1?e+u:0;return t.el.getPointAtLength(h)}var i=cg(t.el,t.svg),r=s(),o=s(-1),a=s(1),l=n?1:i.w/i.vW,c=n?1:i.h/i.vH;switch(t.property){case"x":return(r.x-i.x)*l;case"y":return(r.y-i.y)*c;case"angle":return Math.atan2(a.y-o.y,a.x-o.x)*180/Math.PI}}function ug(t,e){var n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,s=og(V.pth(t)?t.totalLength:t,e)+"";return{original:s,numbers:s.match(n)?s.match(n).map(Number):[0],strings:V.str(t)||e?s.split(n):[]}}function Tu(t){var e=t?fa(V.arr(t)?t.map(sg):sg(t)):[];return ha(e,function(n,s,i){return i.indexOf(n)===s})}function hg(t){var e=Tu(t);return e.map(function(n,s){return{target:n,id:s,total:e.length,transforms:{list:rg(n)}}})}function mT(t,e){var n=gu(e);if(/^spring/.test(n.easing)&&(n.duration=eg(n.easing)),V.arr(t)){var s=t.length,i=s===2&&!V.obj(t[0]);i?t={value:t}:V.fnc(e.duration)||(n.duration=e.duration/s)}var r=V.arr(t)?t:[t];return r.map(function(o,a){var l=V.obj(o)&&!V.pth(o)?o:{value:o};return V.und(l.delay)&&(l.delay=a?0:e.delay),V.und(l.endDelay)&&(l.endDelay=a===r.length-1?e.endDelay:0),l}).map(function(o){return da(o,n)})}function gT(t){for(var e=ha(fa(t.map(function(r){return Object.keys(r)})),function(r){return V.key(r)}).reduce(function(r,o){return r.indexOf(o)<0&&r.push(o),r},[]),n={},s=function(r){var o=e[r];n[o]=t.map(function(a){var l={};for(var c in a)V.key(c)?c==o&&(l.value=a[c]):l[c]=a[c];return l})},i=0;i<e.length;i++)s(i);return n}function _T(t,e){var n=[],s=e.keyframes;s&&(e=da(gT(s),e));for(var i in e)V.key(i)&&n.push({name:i,tweens:mT(e[i],t)});return n}function yT(t,e){var n={};for(var s in t){var i=yu(t[s],e);V.arr(i)&&(i=i.map(function(r){return yu(r,e)}),i.length===1&&(i=i[0])),n[s]=i}return n.duration=parseFloat(n.duration),n.delay=parseFloat(n.delay),n}function vT(t,e){var n;return t.tweens.map(function(s){var i=yT(s,e),r=i.value,o=V.arr(r)?r[1]:r,a=un(o),l=bu(e.target,t.name,a,e),c=n?n.to.original:l,u=V.arr(r)?r[0]:c,h=un(u)||un(l),f=a||h;return V.und(o)&&(o=c),i.from=ug(u,f),i.to=ug(Eu(o,u),f),i.start=n?n.end:0,i.end=i.start+i.delay+i.duration+i.endDelay,i.easing=pu(i.easing,i.duration),i.isPath=V.pth(r),i.isPathTargetInsideSVG=i.isPath&&V.svg(e.target),i.isColor=V.col(i.from.original),i.isColor&&(i.round=1),n=i,i})}var fg={css:function(t,e,n){return t.style[e]=n},attribute:function(t,e,n){return t.setAttribute(e,n)},object:function(t,e,n){return t[e]=n},transform:function(t,e,n,s,i){if(s.list.set(e,n),e===s.last||i){var r="";s.list.forEach(function(o,a){r+=a+"("+o+") "}),t.style.transform=r}}};function dg(t,e){var n=hg(t);n.forEach(function(s){for(var i in e){var r=yu(e[i],s),o=s.target,a=un(r),l=bu(o,i,a,s),c=a||un(l),u=Eu(og(r,c),l),h=wu(o,i);fg[h](o,i,u,s.transforms,!0)}})}function wT(t,e){var n=wu(t.target,e.name);if(n){var s=vT(e,t),i=s[s.length-1];return{type:n,property:e.name,animatable:t,tweens:s,duration:i.end,delay:s[0].delay,endDelay:i.endDelay}}}function bT(t,e){return ha(fa(t.map(function(n){return e.map(function(s){return wT(n,s)})})),function(n){return!V.und(n)})}function pg(t,e){var n=t.length,s=function(r){return r.timelineOffset?r.timelineOffset:0},i={};return i.duration=n?Math.max.apply(Math,t.map(function(r){return s(r)+r.duration})):e.duration,i.delay=n?Math.min.apply(Math,t.map(function(r){return s(r)+r.delay})):e.delay,i.endDelay=n?i.duration-Math.max.apply(Math,t.map(function(r){return s(r)+r.duration-r.endDelay})):e.endDelay,i}var mg=0;function ET(t){var e=_u(Xm,t),n=_u(fu,t),s=_T(n,t),i=hg(t.targets),r=bT(i,s),o=pg(r,n),a=mg;return mg++,da(e,{id:a,children:[],animatables:i,animations:r,duration:o.duration,delay:o.delay,endDelay:o.endDelay})}var Nt=[],gg=function(){var t;function e(){!t&&(!_g()||!he.suspendWhenDocumentHidden)&&Nt.length>0&&(t=requestAnimationFrame(n))}function n(i){for(var r=Nt.length,o=0;o<r;){var a=Nt[o];a.paused?(Nt.splice(o,1),r--):(a.tick(i),o++)}t=o>0?requestAnimationFrame(n):void 0}function s(){!he.suspendWhenDocumentHidden||(_g()?t=cancelAnimationFrame(t):(Nt.forEach(function(i){return i._onDocumentVisibility()}),gg()))}return typeof document!="undefined"&&document.addEventListener("visibilitychange",s),e}();function _g(){return!!document&&document.hidden}function he(t){t===void 0&&(t={});var e=0,n=0,s=0,i,r=0,o=null;function a(m){var g=window.Promise&&new Promise(function(w){return o=w});return m.finished=g,g}var l=ET(t);a(l);function c(){var m=l.direction;m!=="alternate"&&(l.direction=m!=="normal"?"normal":"reverse"),l.reversed=!l.reversed,i.forEach(function(g){return g.reversed=l.reversed})}function u(m){return l.reversed?l.duration-m:m}function h(){e=0,n=u(l.currentTime)*(1/he.speed)}function f(m,g){g&&g.seek(m-g.timelineOffset)}function d(m){if(l.reversePlayback)for(var w=r;w--;)f(m,i[w]);else for(var g=0;g<r;g++)f(m,i[g])}function p(m){for(var g=0,w=l.animations,T=w.length;g<T;){var E=w[g],I=E.animatable,C=E.tweens,k=C.length-1,R=C[k];k&&(R=ha(C,function(Il){return m<Il.end})[0]||R);for(var x=Kt(m-R.start-R.delay,0,R.duration)/R.duration,N=isNaN(x)?1:R.easing(x),$=R.to.strings,J=R.round,Bt=[],Ae=R.to.numbers.length,ce=void 0,oe=0;oe<Ae;oe++){var ze=void 0,Fs=R.to.numbers[oe],wn=R.from.numbers[oe]||0;R.isPath?ze=pT(R.value,N*Fs,R.isPathTargetInsideSVG):ze=wn+N*(Fs-wn),J&&(R.isColor&&oe>2||(ze=Math.round(ze*J)/J)),Bt.push(ze)}var tn=$.length;if(!tn)ce=Bt[0];else{ce=$[0];for(var Xe=0;Xe<tn;Xe++){$[Xe];var Ri=$[Xe+1],Ai=Bt[Xe];isNaN(Ai)||(Ri?ce+=Ai+Ri:ce+=Ai+" ")}}fg[E.type](I.target,E.property,ce,I.transforms),E.currentValue=ce,g++}}function v(m){l[m]&&!l.passThrough&&l[m](l)}function _(){l.remaining&&l.remaining!==!0&&l.remaining--}function y(m){var g=l.duration,w=l.delay,T=g-l.endDelay,E=u(m);l.progress=Kt(E/g*100,0,100),l.reversePlayback=E<l.currentTime,i&&d(E),!l.began&&l.currentTime>0&&(l.began=!0,v("begin")),!l.loopBegan&&l.currentTime>0&&(l.loopBegan=!0,v("loopBegin")),E<=w&&l.currentTime!==0&&p(0),(E>=T&&l.currentTime!==g||!g)&&p(g),E>w&&E<T?(l.changeBegan||(l.changeBegan=!0,l.changeCompleted=!1,v("changeBegin")),v("change"),p(E)):l.changeBegan&&(l.changeCompleted=!0,l.changeBegan=!1,v("changeComplete")),l.currentTime=Kt(E,0,g),l.began&&v("update"),m>=g&&(n=0,_(),l.remaining?(e=s,v("loopComplete"),l.loopBegan=!1,l.direction==="alternate"&&c()):(l.paused=!0,l.completed||(l.completed=!0,v("loopComplete"),v("complete"),!l.passThrough&&"Promise"in window&&(o(),a(l)))))}return l.reset=function(){var m=l.direction;l.passThrough=!1,l.currentTime=0,l.progress=0,l.paused=!0,l.began=!1,l.loopBegan=!1,l.changeBegan=!1,l.completed=!1,l.changeCompleted=!1,l.reversePlayback=!1,l.reversed=m==="reverse",l.remaining=l.loop,i=l.children,r=i.length;for(var g=r;g--;)l.children[g].reset();(l.reversed&&l.loop!==!0||m==="alternate"&&l.loop===1)&&l.remaining++,p(l.reversed?l.duration:0)},l._onDocumentVisibility=h,l.set=function(m,g){return dg(m,g),l},l.tick=function(m){s=m,e||(e=s),y((s+(n-e))*he.speed)},l.seek=function(m){y(u(m))},l.pause=function(){l.paused=!0,h()},l.play=function(){!l.paused||(l.completed&&l.reset(),l.paused=!1,Nt.push(l),h(),gg())},l.reverse=function(){c(),l.completed=!l.reversed,h()},l.restart=function(){l.reset(),l.play()},l.remove=function(m){var g=Tu(m);vg(g,l)},l.reset(),l.autoplay&&l.play(),l}function yg(t,e){for(var n=e.length;n--;)mu(t,e[n].animatable.target)&&e.splice(n,1)}function vg(t,e){var n=e.animations,s=e.children;yg(t,n);for(var i=s.length;i--;){var r=s[i],o=r.animations;yg(t,o),!o.length&&!r.children.length&&s.splice(i,1)}!n.length&&!s.length&&e.pause()}function IT(t){for(var e=Tu(t),n=Nt.length;n--;){var s=Nt[n];vg(e,s)}}function TT(t,e){e===void 0&&(e={});var n=e.direction||"normal",s=e.easing?pu(e.easing):null,i=e.grid,r=e.axis,o=e.from||0,a=o==="first",l=o==="center",c=o==="last",u=V.arr(t),h=parseFloat(u?t[0]:t),f=u?parseFloat(t[1]):0,d=un(u?t[1]:t)||0,p=e.start||0+(u?h:0),v=[],_=0;return function(y,m,g){if(a&&(o=0),l&&(o=(g-1)/2),c&&(o=g-1),!v.length){for(var w=0;w<g;w++){if(!i)v.push(Math.abs(o-w));else{var T=l?(i[0]-1)/2:o%i[0],E=l?(i[1]-1)/2:Math.floor(o/i[0]),I=w%i[0],C=Math.floor(w/i[0]),k=T-I,R=E-C,x=Math.sqrt(k*k+R*R);r==="x"&&(x=-k),r==="y"&&(x=-R),v.push(x)}_=Math.max.apply(Math,v)}s&&(v=v.map(function($){return s($/_)*_})),n==="reverse"&&(v=v.map(function($){return r?$<0?$*-1:-$:Math.abs(_-$)}))}var N=u?(f-h)/_:h;return p+N*(Math.round(v[m]*100)/100)+d}}function CT(t){t===void 0&&(t={});var e=he(t);return e.duration=0,e.add=function(n,s){var i=Nt.indexOf(e),r=e.children;i>-1&&Nt.splice(i,1);function o(f){f.passThrough=!0}for(var a=0;a<r.length;a++)o(r[a]);var l=da(n,_u(fu,t));l.targets=l.targets||t.targets;var c=e.duration;l.autoplay=!1,l.direction=e.direction,l.timelineOffset=V.und(s)?c:Eu(s,c),o(e),e.seek(l.timelineOffset);var u=he(l);o(u),r.push(u);var h=pg(r,t);return e.delay=h.delay,e.endDelay=h.endDelay,e.duration=h.duration,e.seek(0),e.reset(),e.autoplay&&e.play(),e},e}he.version="3.2.1";he.speed=1;he.suspendWhenDocumentHidden=!0;he.running=Nt;he.remove=IT;he.get=bu;he.set=dg;he.convertPx=vu;he.path=dT;he.setDashoffset=hT;he.stagger=TT;he.timeline=CT;he.easing=pu;he.penner=tg;he.random=function(t,e){return Math.floor(Math.random()*(e-t+1))+t};function yr(){var t={"[\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u767E\u5343\u4E07\u5104\u5146]":"M","[\u4E00-\u9FA0\u3005\u3006\u30F5\u30F6]":"H","[\u3041-\u3093]":"I","[\u30A1-\u30F4\u30FC\uFF71-\uFF9D\uFF9E\uFF70]":"K","[a-zA-Z\uFF41-\uFF5A\uFF21-\uFF3A]":"A","[0-9\uFF10-\uFF19]":"N"};this.chartype_=[];for(var e in t){var n=new RegExp;n.compile(e),this.chartype_.push([n,t[e]])}return this.BIAS__=.22520113688288682,this.BC1__={IH:-.23848626837817805,II:.32697243008996096,IK:-.010095752335862922,NH:.21727530565338304,OH:-.10089986761975575,OO:.13433286358813376},this.BC2__={AA:-1.2150931385052766,HH:-.43298652939827054,HI:-.09793298636342958,IH:.14590310223095676,II:-.6625603313165289,IO:.45843674644599386,KI:.15781506553541869,KK:-1.1956897560492934,KM:-.22093713680158006,NH:.11571381334313575,NN:-.9391107580152266,OH:.11313200037786794,OI:.032043808217449454,OO:-1.1228293018442108},this.BC3__={HH:.090632595183653,IO:.061425386387191604,KK:.016982736109307103},this.BP1__={BB:.030241123724748596,OB:-.023182912087779915,OO:.01455325433693936,UB:.028185906235397896},this.BP2__={OB:.132681095724194,UB:.00493130630746727,UU:-.014689170693780477},this.BQ1__={BII:-.010083907026208023,OII:.02515251035662344},this.BQ2__={BHH:.04341735161117498,BHI:.045457771888541616,BIH:-.14470309077292448,OHH:-.08026119156093003,OKK:-.1977664321038111,UII:-.06621219963330052},this.BQ3__={BHH:-.014898424180164977,BHI:.013890054125675377,BIH:.005757328548683403,OHH:.10079747274055155,UOH:-.1191250236143603},this.BQ4__={BAA:-.1264775422541678,BHH:-.28209502190319147,BII:-.3700712166856941,BOO:-.03541373866319149,OHI:-.10249592883314612,OIH:-.08938538374702867,UHH:-.07125565381822344},this.BW1__={"\u3001\u3068":.00485838884952779,\u3044\u308B:.04617579463120338,\u3046\u3057:-.22072249944143948,\u304B\u3089:.18188199901588142,\u3053\u3068:.23719058565400888,\u3057\u305F:.031515899622947006,\u3057\u3066:.1778925642903061,\u3057\u3087:.14278547537084638,\u305D\u3053:.10958177701368547,\u305D\u3057:-.12268428845315281,\u305F\u3061:.12833363650281956,\u3063\u305F:.2354907023842744,\u3064\u3044:-.038507788030877975,\u3066\u3044:.15503016203179423,\u3066\u304D:.025032613497468166,\u3066\u304F:-.03466697469321477,\u3066\u3057:-.07850319327879143,\u3067\u3082:.05889146660562902,\u3069\u3053:.1229224597028895,\u306A\u3044:.6901299739841869,\u306A\u3063:.050460448267941195,\u306B\u3057:.16927152179892996,\u307E\u305B:.15640043672788773,\u307E\u308B:-.3913393363485558,\u3088\u3046:.2050706170370288,\u3088\u3063:-.031759037859465065,\u3092\u3057:.04573189095673898,\u540C\u6642:-.33308946737473155,\u672C\u5F53:-.34218099454695616},this.BW2__={"\u2014\u2014":-1.2401205264908466,"\u2500\u2500":-.630117933831758,\u3044\u3046:-.41205046190487077,\u3044\u305F:.09548262290350316,\u3044\u306F:-.32152414179508565,\u304B\u3089:-.3546817205018059,\u3053\u3068:-.8616591802035096,\u3053\u306E:-.4459967252633165,\u3055\u305B:.07585377120157781,\u3055\u308C:.9917213664650857,\u3057\u3044:-.0642684860126085,\u3057\u305F:.2787203528684824,\u305D\u306E:-.5916599303287282,\u305F\u3061:-.38208193680219577,\u3063\u305F:.1591428863194103,\u3063\u3068:-.40801501262844353,\u3066\u3044:.7284065897951145,\u3066\u304F:.009824676245964784,\u3066\u306F:-.21867316408099918,\u3066\u3082:-.05679045629506635,\u3067\u3042:.16567658274283686,\u3067\u3044:.13735555300668092,\u3067\u304D:-.004887605934430344,\u3067\u3057:-.24722296365219953,\u3067\u3059:-.390087199803737,\u3068\u3044:.4249947522855389,\u3068\u3053:-.08660220590898753,\u306A\u3044:-.17994387867482803,\u306B\u304A:-.1010687738997673,\u306B\u3057:.2847117712911703,\u306B\u306A:.00988842094504979,\u306B\u3088:-.43406653745741763,\u306B\u5BFE:-.9967640050611577,\u306B\u95A2:-.6167481808776553,\u306E\u304B:.01464439737106634,\u306E\u306B:-.17113000695588004,\u307E\u3057:-.05089424418663534,\u307E\u3067:-.3023416744888755,\u307E\u308C:.2249438860313934,\u3082\u306E:-1.360647564126872,\u308C\u305F:.039853495913072,\u308C\u3070:.3115389590257928,\u308D\u3046:.36940990058585266,\u308F\u308C:.039785092481029516,\u3092\u901A:-.7767316482612519,\u3093\u3060:.07295123616271888,\u3093\u306A:-.4906819807291365,\u30CD\u30ED:.11841103137430385,\u6642\u306B:-.04808864228157312},this.BW3__={th:.014785593763562262,\u3042\u308B:.1331037501692543,\u3044\u3044:.31008839068298116,\u3044\u3063:.16431525298342703,\u3044\u308B:.34800382728849666,"\u3046\u3002":.07053434317628932,\u3046\u3068:.31866167883069907,\u3046\u306B:-.029900648298729925,\u304B\u3063:-.22874121413214865,\u304B\u3089:.5057680093403812,\u304C\u3089:-.22728955724406427,\u304D\u305F:.024906818600566014,\u3053\u3068:.8301218873906064,\u3053\u306E:.18255375382191694,\u3053\u308D:-.13558223779783019,\u3057\u3044:-.16777409122776613,\u3057\u3066:.015263140575872008,\u3057\u307E:.03551192653245554,"\u3059\u3002":-.5318327902403177,\u3059\u308B:.3975205783088912,\u305D\u306E:.13649861240561154,"\u305F\u3002":.648969704196735,\u305F\u3044:-.2823659950826378,\u305F\u306E:.025206978381667973,\u3063\u305F:-.21211073549548098,\u3066\u3044:.6251496287127615,\u3066\u304F:.009875591008665897,\u3066\u306E:-.04041417590759684,\u3067\u3059:.09517443481454739,\u3068\u3044:.06710965705095939,\u3068\u3082:-.04029385690503242,\u306A\u3044:.33144951132192346,"\u306B\u3001":-.12208499196741522,\u306B\u306F:.1946225131352,\u306E\u3082:-.09300211276779506,\u306E\u5B50:-.16195040731855131,\u307E\u3057:.18749985797178725,\u307E\u3059:.4331034262233852,\u307E\u3067:.1732882331616623,\u3082\u306E:.3094561861458994,\u3089\u308C:.5893587926686884,\u308C\u305F:.0048681592398596655,\u308C\u3066:.09362549868355244,\u308C\u3070:-.1672382997822637,\u308F\u308C:-.14133229841030695},this.TC1__={HII:.03950960190884111,IHI:.020527356955372597,III:.06654487279907766,KKK:.06349136141414029,OII:-.031868820246557406},this.TC2__={AAA:-.01600591881827301,HHH:-.029378849325844603,IHI:-.07110614659022238,IIH:-.01617035277664804,III:-.20594747316963274,KKI:.17714469717145875,OII:-.3714631687170236},this.TC3__={HHI:-.006324897174967177,HIH:-.02015858428614767,HII:-.10604638049997367,IHH:.11542307660916047,IHI:-.11537969241996533,IIH:-.2697566255720448,IIK:-.03955047777939628,IKK:.15300450748074307},this.TC4__={AAA:.32091550379474476,HHI:.11440645382177995,HIH:.05580929361901696,HII:-.034065041329023577,HIO:-.01030181531224085,IIH:-.05262018261968932,III:.10566636150434548,IIO:.005567086261816015,IOO:.03109780928752455,KKK:.19068665054756295},this.TQ1__={BHII:-.005844330114442904,BIII:.060696986793574936,OHII:.08381147641489471},this.TQ2__={BIIH:-.06220959097166443,BOHI:-.010577156786422341,OKHH:-.004877467278671398},this.TQ3__={BHIH:.006289097459807247,BHII:-.01605541964362671,BIHI:.024502536390263376,OAAA:.1640975801597747,OHHI:.08421016618378288,OHII:.1609541978653504,OIII:-.0056052911877949915,OIKK:-.03336670954475708,OKKK:.0625872850134237,OOHI:-.03386856743003464,OOII:-.09804896802638609},this.TQ4__={BHHH:-.19557578215931978,BHIH:.07227899769125704,BIII:-.19875665931320666,OHIH:-.6132846532718886,OHII:.0073237247315630465,OIHI:-.24284706152466545,OIII:-.11468853766020784},this.TW1__={\u306B\u3064\u3044:-.11623407099710713,\u306B\u3088\u3063:-.004921495919448952},this.TW2__={\u3057\u3087\u3046:.11736167747307898,\u305D\u3057\u3066:-.10587994014558691,\u3068\u3057\u3066:-.10148181720164659,\u307E\u308B\u3067:-.004857992220036397,\u3088\u3063\u3066:-.06106915715722373,\u30E9\u30B0\u30A4:.004874873407300121},this.TW3__={\u3068\u3057\u3066:-.08618672540194437,\u306B\u3064\u3044:-.044954250244913355,\u306B\u3068\u3063:-.1982932374482013,"\u306E\u3067\u3001":-.13246253852223708},this.TW4__={\u3044\u3046\u3053:.13506328593550318,"\u3057\u305F\u3002":-.12834388188812307,\u3057\u3066\u3044:.10322794990586326,\u3066\u3044\u308B:.05693902361235212,\u3068\u3044\u3046:.03551571889357873,\u307E\u3057\u305F:.49706159063499633,\u307E\u305B\u3093:.30057524560441756,\u3088\u3046\u3068:-.2567441638606044,\u3088\u3046\u306B:.08309574400066155},this.UC1__={A:.010156669149885798,I:-.008571172628247211,O:-.06873021994092306},this.UC2__={H:.34932452180126466,I:-.015687705712196773,K:.08971465602179736,M:.27319336124300997,O:-.0816628483369048},this.UC3__={I:.08371628945944345,M:-.4796466036234481,O:1.0911901974166283},this.UC4__={H:.0663741234422061,I:.032845000847053954,M:-.15638593137367923,O:.7853187020732736},this.UC5__={H:.13596051078311455,I:-.07896324823867357},this.UC6__={A:.033968993675558334,H:-.015643629982255495,I:.04452334552336498,O:.08617490706834542},this.UP1__={B:.009246267463356645,O:.0403252446097051,U:-.04516547668414343},this.UP2__={O:-.02123327464425744},this.UP3__={O:.05400561799098465},this.UQ1__={BK:.039034585991110975,OH:-.009731797066766646,OI:.0157160707877272,OK:-.01076204277677242,UI:-.053615085727519635},this.UQ2__={OH:-.10856293030493244,OK:.05944455936521592},this.UQ3__={BH:-.247047298009339,BI:.394208612797646,BK:-.0058290976988708615,BO:.056086836682142975},this.UW1__={B1:.018105810208910382,i:.004946755130047433,"\u3001":-.02777526189838834,\u304C:-.06866028643738298,\u3053:.05853852806144273,\u3057:-.010637833861056059,\u3063:.01045313487063675,\u3068:-.01920152451835982,\u306B:-.13465933626070342,\u306E:-.005610962116700646,\u306F:-.15094814131442158,\u3082:-.041580553635757286,\u3084:-.0098980433841668,\u3088:.09483200455145908,\u308B:.05782408628361303,\u3092:-.06480685769467537,\u30FC:.016203640645197158},this.UW2__={"\u3001":-.05593716276231778,"\u3002":-.031738034837723056,"\u300D":.1066623872015924,\u3044:.00995927931407218,\u3046:-.013845031111581923,\u304A:-.009887729550118494,\u304B:.18113638014991276,\u304C:-.11288002491272736,\u304F:-.06392749330128274,\u3053:.2216296827795169,\u3055:.04004718094908757,\u3057:.13716382860877638,\u3059:-.026090438087067024,\u305D:-.05958619811816992,\u305F:.02088672929144276,\u3060:.11611864520977425,\u3063:.05071186866446647,\u3066:-.07641978752988528,\u3068:-.1617697816760843,\u306A:.017725253098804766,\u306B:-.19583720954807687,\u306E:.005280408300918342,\u306F:-.16583007737131603,\u307E:.015742977125139935,\u3082:-.08534354771854774,\u3088:.0786807023382153,\u308A:-.042152274863661,\u308B:-.13862747171796458,\u308C:.03618024437415664,\u3092:-.25567952871980176,\u3093:.21368356221248083,\u4E0D:-.1603614824390156,\u5927:-.31524207130817977,\u5C0F:-.12976577209782142,\u898B:-.26537350265591314},this.UW3__={d:.12433623481840968,e:.07019352965291331,i:-.28951833750199724,s:.07927262098653556,y:.029893323178321773,"\u3001":.6254240819543564,\u3042:-.4504315533728965,\u3046:.2797398370000238,\u3048:.14066336325934564,\u304A:-.5354249500905506,\u304B:-.15967315696317042,\u304C:.33241232593651343,\u304F:.11640393156335943,\u3053:-.44323306448851035,\u3054:-.194886865861015,\u3055:-.13214430661859372,\u3057:-.055734867050514725,\u305B:.32861188600632507,\u305D:-.573360302459194,\u305F:.00628084477595966,\u3061:-.031016646716852683,\u3063:-.009740271487860726,\u3064:-.07693292540999878,\u3066:.6469373119411537,\u3067:.05631098238267572,\u3068:.12921676820941724,\u3069:-.11593197232924046,\u306A:-.35446808222188947,\u306B:.17894308086797012,\u306E:.34962889282436177,\u306F:.5819819380605722,\u307B:-.3055995652575915,\u307E:-.5491043731187487,\u307F:-.010187140672554069,\u3082:.14435269861292555,\u3088:-.11981759986462115,\u308A:.08408495596098593,\u308B:.5417657735761062,\u308C:.28713292997261525,\u308F:-.15263181238897242,\u3092:.7655772624914965,\u30B0:.04077803285486024,\u30CB:-.024725575380353606,\u30CD:.34811388323224446,\u30EB:.009882207253744273,\u30F3:.07940007767892635,\u4E8C:.41310866547585806,\u4EBA:.1802960153799593,\u4F55:.4114886775766756,\u5927:.009818838766569457,\u5F53:-.32892885754291634,\u5F7C:.06367210171639835,\u6570:.10642282655589906,\u7684:.7836608072322091,\u79C1:.4337382218562517,\u7ACB:-.06189162474332259,\u7B2C:.009765150863586758,\u898B:.009780696755950596},this.UW4__={e:-.26241347443103025,n:-.07043624034923457,r:-.05174757508939543,"\u3001":.16534915089036276,\u3042:.603454676046833,\u3044:-.33782388440806793,\u3046:-.10041222243216878,\u3048:-.46012258051344634,\u304A:.08177933290536007,\u304B:.042756554155529744,\u304C:.6472156106472131,\u304D:-.412647521838882,\u304F:-.3904189382427503,\u3051:-.4373694978590952,\u3053:.11971486995369958,\u3055:.09473325990273215,\u3057:-.07405432648145821,\u3058:-.07814318435561417,\u305D:.4140401163327643,\u305F:.5005120062904972,\u3060:.5175859755007981,\u3061:-.32757825436164695,\u3063:-.6388090573219343,\u3064:-.21213356619208382,\u3066:.3189830847771864,\u3067:.7548790708963414,\u3068:.3978483696995798,\u306A:.5347804691508483,\u306B:.6218509819144875,\u306E:.858983818932583,\u306F:.9537590975495559,\u3070:.017967849736232246,\u3073:-.09391181857809118,\u3078:.37799889890659155,\u307B:.1481226415164236,\u307E:.2351332150044544,\u3081:-.4288931992371047,\u3082:.18698587166826777,\u3083:-.18894731215972296,\u3084:.18777123466555484,\u3087:-.26980073191275783,\u3088:.2577372231795072,\u3089:-.4078750071226102,\u308A:-.8858217164981679,\u308B:-1.1570270191745182,\u308C:-.15783908494305104,\u308D:-.33551488818625197,\u308F:-.0075555247504103095,\u3092:1.759694053887214,\u3093:-.02578137808071669,\u30BD:.17371020657951847,\u30C3:-.08359187788579188,\u30C9:.10155250329870884,\u30CB:-.13628238659090972,\u30E9:.014834805312977447,\u30EB:-.014596613928525988,\u30F3:-.10443848315440722,\u30FC:-.5309140925665897,\u4EBA:.22936106874668577,\u5B50:-.04089576692098599,\u5BFE:-.18339524187952347,\u7684:.2739804197294529,\u8005:.024864512127211243},this.UW5__={a:.010179122517861593,h:.11342004850022312,o:.13864114348404827,t:-.06194846739390849,"\u3001":-.040769958221064474,"\u3002":.0764164113870031,\u3042:.06886919872017679,\u3044:.01603012917330838,\u304B:.07684025169358082,\u304C:-.03322453345943609,\u304D:.1863415532170791,\u3055:-.15249439853060662,\u3057:-.018745999550093317,\u305F:.015809063975165197,\u3061:.13469363305086202,\u3064:.026609177144296267,\u3066:-.0465637503886467,\u3067:-.030324895992921888,\u3068:.11905842485781214,\u306A:-.059856730513047206,\u306B:-.14166916444330552,\u3082:-.042507616269688735,\u3083:.17410553608770116,\u308A:-.00504704403212485,\u308B:.1001629922725702,\u308C:.09626881001130859,\u3092:-.0610369012797255,\u30F3:.1702022709387065,\u30FC:.08569801150852382,\u5EA6:-.06119725357207652,\u7684:-.3184003489974112},this.UW6__={"\u3001":-.05619324630475547,\u3042:-.01011865446823839,\u3044:.00492327870578099,\u304B:.010776371652764537,\u305F:-.005078260775586424,\u3060:.005120430216730338,\u3063:.014769316557906188,\u3066:-.2205200359076286,\u3068:-.08328953464389319,\u306E:-.036939222540452614,\u306F:-.04565922334729253,\u3082:-.010294320384416675,\u308C:-.005165653787238134},this}yr.prototype.ctype_=function(t){for(var e in this.chartype_)if(t.match(this.chartype_[e][0]))return this.chartype_[e][1];return"O"};yr.prototype.ts_=function(t){return t||0};yr.prototype.segment=function(t){if(t==null||t==null||t=="")return[];var e=[],n=["B3","B2","B1"],s=["O","O","O"],i=t.split("");for(c=0;c<i.length;++c)n.push(i[c]),s.push(this.ctype_(i[c]));n.push("E1"),n.push("E2"),n.push("E3"),s.push("O"),s.push("O"),s.push("O");for(var r=n[3],o="U",a="U",l="U",c=4;c<n.length-3;++c){var u=this.BIAS__,h=n[c-3],f=n[c-2],d=n[c-1],p=n[c],v=n[c+1],_=n[c+2],y=s[c-3],m=s[c-2],g=s[c-1],w=s[c],T=s[c+1],E=s[c+2];u+=this.ts_(this.UP1__[o]),u+=this.ts_(this.UP2__[a]),u+=this.ts_(this.UP3__[l]),u+=this.ts_(this.BP1__[o+a]),u+=this.ts_(this.BP2__[a+l]),u+=this.ts_(this.UW1__[h]),u+=this.ts_(this.UW2__[f]),u+=this.ts_(this.UW3__[d]),u+=this.ts_(this.UW4__[p]),u+=this.ts_(this.UW5__[v]),u+=this.ts_(this.UW6__[_]),u+=this.ts_(this.BW1__[f+d]),u+=this.ts_(this.BW2__[d+p]),u+=this.ts_(this.BW3__[p+v]),u+=this.ts_(this.TW1__[h+f+d]),u+=this.ts_(this.TW2__[f+d+p]),u+=this.ts_(this.TW3__[d+p+v]),u+=this.ts_(this.TW4__[p+v+_]),u+=this.ts_(this.UC1__[y]),u+=this.ts_(this.UC2__[m]),u+=this.ts_(this.UC3__[g]),u+=this.ts_(this.UC4__[w]),u+=this.ts_(this.UC5__[T]),u+=this.ts_(this.UC6__[E]),u+=this.ts_(this.BC1__[m+g]),u+=this.ts_(this.BC2__[g+w]),u+=this.ts_(this.BC3__[w+T]),u+=this.ts_(this.TC1__[y+m+g]),u+=this.ts_(this.TC2__[m+g+w]),u+=this.ts_(this.TC3__[g+w+T]),u+=this.ts_(this.TC4__[w+T+E]),u+=this.ts_(this.UQ1__[o+y]),u+=this.ts_(this.UQ2__[a+m]),u+=this.ts_(this.UQ3__[l+g]),u+=this.ts_(this.BQ1__[a+m+g]),u+=this.ts_(this.BQ2__[a+g+w]),u+=this.ts_(this.BQ3__[l+m+g]),u+=this.ts_(this.BQ4__[l+g+w]),u+=this.ts_(this.TQ1__[a+y+m+g]),u+=this.ts_(this.TQ2__[a+m+g+w]),u+=this.ts_(this.TQ3__[l+y+m+g]),u+=this.ts_(this.TQ4__[l+m+g+w]);var I="O";u>0&&(e.push(r),r="",I="B"),o=a,a=l,l=I,r+=n[c]}return e.push(r),e};/**
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
 */const wg={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const D=function(t,e){if(!t)throw ai(e)},ai=function(t){return new Error("Firebase Database ("+wg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const bg=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)==55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)==56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ST=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Cu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let f=(a&15)<<2|c>>6,d=c&63;l||(d=64,o||(f=64)),s.push(n[u],n[h],n[f],n[d])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(bg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ST(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw Error();const f=r<<2|a>>4;if(s.push(f),c!==64){const d=a<<4&240|c>>2;if(s.push(d),h!==64){const p=c<<6&192|h;s.push(p)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},kT=function(t){const e=bg(t);return Cu.encodeByteArray(e,!0)},Su=function(t){try{return Cu.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function RT(t){return Eg(void 0,t)}function Eg(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!AT(n)||(t[n]=Eg(t[n],e[n]));return t}function AT(t){return t!=="__proto__"}/**
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
 */class pa{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function qe(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ku(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(qe())}function Ig(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Tg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function NT(){const t=qe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Cg(){return wg.NODE_ADMIN===!0}function PT(){return typeof indexedDB=="object"}function OT(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function MT(){return!(typeof navigator=="undefined"||!navigator.cookieEnabled)}/**
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
 */const xT="FirebaseError";class hn extends Error{constructor(e,n,s){super(n);this.code=e,this.customData=s,this.name=xT,Object.setPrototypeOf(this,hn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,hs.prototype.create)}}class hs{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?DT(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new hn(i,a,s)}}function DT(t,e){return t.replace(LT,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const LT=/\{\$([^}]+)}/g;/**
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
 */function vr(t){return JSON.parse(t)}function Oe(t){return JSON.stringify(t)}/**
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
 */const Sg=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=vr(Su(r[0])||""),n=vr(Su(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},FT=function(t){const e=Sg(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},UT=function(t){const e=Sg(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Pt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function fs(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Ru(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ma(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function wr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(kg(r)&&kg(o)){if(!wr(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function kg(t){return t!==null&&typeof t=="object"}/**
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
 */function li(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class BT{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const f=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function HT(t,e){const n=new $T(t,e);return n.subscribe.bind(n)}class $T{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");WT(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Au),i.error===void 0&&(i.error=Au),i.complete===void 0&&(i.complete=Au);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console!="undefined"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function WT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Au(){}function ga(t,e){return`${t} failed: ${e} argument `}/**
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
 */const VT=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,D(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},_a=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const qT=1e3,jT=2,zT=4*60*60*1e3,KT=.5;function Rg(t,e=qT,n=jT){const s=e*Math.pow(n,t),i=Math.round(KT*s*(Math.random()-.5)*2);return Math.min(zT,s+i)}/**
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
 */function De(t){return t&&t._delegate?t._delegate:t}class Ot{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ds="[DEFAULT]";/**
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
 */class GT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new pa;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(YT(e))try{this.getOrInitializeService({instanceIdentifier:ds})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=ds){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ds){return this.instances.has(e)}getOptions(e=ds){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:QT(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ds){return this.component?this.component.multipleInstances?e:ds:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function QT(t){return t===ds?void 0:t}function YT(t){return t.instantiationMode==="EAGER"}/**
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
 */class JT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new GT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var _e;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(_e||(_e={}));const XT={debug:_e.DEBUG,verbose:_e.VERBOSE,info:_e.INFO,warn:_e.WARN,error:_e.ERROR,silent:_e.SILENT},ZT=_e.INFO,eC={[_e.DEBUG]:"log",[_e.VERBOSE]:"log",[_e.INFO]:"info",[_e.WARN]:"warn",[_e.ERROR]:"error"},tC=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=eC[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ya{constructor(e){this.name=e,this._logLevel=ZT,this._logHandler=tC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in _e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?XT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,_e.DEBUG,...e),this._logHandler(this,_e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,_e.VERBOSE,...e),this._logHandler(this,_e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,_e.INFO,...e),this._logHandler(this,_e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,_e.WARN,...e),this._logHandler(this,_e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,_e.ERROR,...e),this._logHandler(this,_e.ERROR,...e)}}/**
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
 */class nC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(sC(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function sC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Nu="@firebase/app",Ag="0.7.10";/**
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
 */const Pu=new ya("@firebase/app"),iC="@firebase/app-compat",rC="@firebase/analytics-compat",oC="@firebase/analytics",aC="@firebase/app-check-compat",lC="@firebase/app-check",cC="@firebase/auth",uC="@firebase/auth-compat",hC="@firebase/database",fC="@firebase/database-compat",dC="@firebase/functions",pC="@firebase/functions-compat",mC="@firebase/installations",gC="@firebase/installations-compat",_C="@firebase/messaging",yC="@firebase/messaging-compat",vC="@firebase/performance",wC="@firebase/performance-compat",bC="@firebase/remote-config",EC="@firebase/remote-config-compat",IC="@firebase/storage",TC="@firebase/storage-compat",CC="@firebase/firestore",SC="@firebase/firestore-compat",kC="firebase",RC="9.6.0";/**
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
 */const Ng="[DEFAULT]",AC={[Nu]:"fire-core",[iC]:"fire-core-compat",[oC]:"fire-analytics",[rC]:"fire-analytics-compat",[lC]:"fire-app-check",[aC]:"fire-app-check-compat",[cC]:"fire-auth",[uC]:"fire-auth-compat",[hC]:"fire-rtdb",[fC]:"fire-rtdb-compat",[dC]:"fire-fn",[pC]:"fire-fn-compat",[mC]:"fire-iid",[gC]:"fire-iid-compat",[_C]:"fire-fcm",[yC]:"fire-fcm-compat",[vC]:"fire-perf",[wC]:"fire-perf-compat",[bC]:"fire-rc",[EC]:"fire-rc-compat",[IC]:"fire-gcs",[TC]:"fire-gcs-compat",[CC]:"fire-fst",[SC]:"fire-fst-compat","fire-js":"fire-js",[kC]:"fire-js-all"};/**
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
 */const va=new Map,Ou=new Map;function NC(t,e){try{t.container.addComponent(e)}catch(n){Pu.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Qt(t){const e=t.name;if(Ou.has(e))return Pu.debug(`There were multiple attempts to register component ${e}.`),!1;Ou.set(e,t);for(const n of va.values())NC(n,t);return!0}function ps(t,e){return t.container.getProvider(e)}/**
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
 */const PC={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},wa=new hs("app","Firebase",PC);/**
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
 */class OC{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ot("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw wa.create("app-deleted",{appName:this._name})}}/**
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
 */const ci=RC;function MC(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Ng,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw wa.create("bad-app-name",{appName:String(s)});const i=va.get(s);if(i){if(wr(t,i.options)&&wr(n,i.config))return i;throw wa.create("duplicate-app",{appName:s})}const r=new JT(s);for(const a of Ou.values())r.addComponent(a);const o=new OC(t,n,r);return va.set(s,o),o}function Mu(t=Ng){const e=va.get(t);if(!e)throw wa.create("no-app",{appName:t});return e}function tt(t,e,n){var s;let i=(s=AC[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pu.warn(a.join(" "));return}Qt(new Ot(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */function xC(t){Qt(new Ot("platform-logger",e=>new nC(e),"PRIVATE")),tt(Nu,Ag,t),tt(Nu,Ag,"esm2017"),tt("fire-js","")}xC("");var DC="firebase",LC="9.6.0";/**
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
 */tt(DC,LC,"app");/*! *****************************************************************************
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
***************************************************************************** */function xu(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function Pg(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const FC=Pg,Og=new hs("auth","Firebase",Pg());/**
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
 */const Mg=new ya("@firebase/auth");function ba(t,...e){Mg.logLevel<=_e.ERROR&&Mg.error(`Auth (${ci}): ${t}`,...e)}/**
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
 */function Yt(t,...e){throw Du(t,...e)}function Jt(t,...e){return Du(t,...e)}function xg(t,e,n){const s=Object.assign(Object.assign({},FC()),{[e]:n});return new hs("auth","Firebase",s).create(e,{appName:t.name})}function UC(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Yt(t,"argument-error"),xg(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Du(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Og.create(t,...e)}function Q(t,e,...n){if(!t)throw Du(e,...n)}function fn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ba(e),new Error(e)}function dn(t,e){t||fn(e)}/**
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
 */const Dg=new Map;function pn(t){dn(t instanceof Function,"Expected a class definition");let e=Dg.get(t);return e?(dn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Dg.set(t,e),e)}/**
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
 */function BC(t,e){const n=ps(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(wr(r,e!=null?e:{}))return i;Yt(i,"already-initialized")}return n.initialize({options:e})}function HC(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(pn);(e==null?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Lu(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function $C(){return Lg()==="http:"||Lg()==="https:"}function Lg(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function WC(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($C()||Ig()||"connection"in navigator)?navigator.onLine:!0}function VC(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class br{constructor(e,n){this.shortDelay=e,this.longDelay=n,dn(n>e,"Short delay should be less than long delay!"),this.isMobile=ku()||Tg()}get(){return WC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Fu(t,e){dn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Uu{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;fn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;fn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;fn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const qC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const jC=new br(3e4,6e4);function zC(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Er(t,e,n,s,i={}){return Fg(t,i,()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=li(Object.assign({key:t.config.apiKey},o)).slice(1),l=new(Uu.headers());return l.set("Content-Type","application/json"),l.set("X-Client-Version",t._getSdkClientVersion()),t.languageCode&&l.set("X-Firebase-Locale",t.languageCode),Uu.fetch()(Ug(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function Fg(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},qC),e);try{const i=new GC(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Bu(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Bu(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Bu(t,"email-already-in-use",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw xg(t,u,c);Yt(t,u)}}catch(i){if(i instanceof hn)throw i;Yt(t,"network-request-failed")}}async function KC(t,e,n,s,i={}){const r=await Er(t,e,n,s,i);return"mfaPendingCredential"in r&&Yt(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Ug(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Fu(t.config,i):`${t.config.apiScheme}://${i}`}class GC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Jt(this.auth,"timeout")),jC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Bu(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Jt(t,e,s);return i.customData._tokenResponse=n,i}/**
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
 */async function QC(t,e){return Er(t,"POST","/v1/accounts:delete",e)}async function YC(t,e){return Er(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ir(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function JC(t,e=!1){const n=De(t),s=await n.getIdToken(e),i=$u(s);Q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Ir(Hu(i.auth_time)),issuedAtTime:Ir(Hu(i.iat)),expirationTime:Ir(Hu(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Hu(t){return Number(t)*1e3}function $u(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return ba("JWT malformed, contained fewer than 3 sections"),null;try{const i=Su(n);return i?JSON.parse(i):(ba("Failed to decode base64 JWT payload"),null)}catch(i){return ba("Caught error parsing JWT payload as JSON",i),null}}function XC(t){const e=$u(t);return Q(e,"internal-error"),Q(typeof e.exp!="undefined","internal-error"),Q(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ui(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof hn&&ZC(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function ZC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class eS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Bg{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ir(this.lastLoginAt),this.creationTime=Ir(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ea(t){var e;const n=t.auth,s=await t.getIdToken(),i=await ui(t,YC(n,{idToken:s}));Q(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=((e=r.providerUserInfo)===null||e===void 0?void 0:e.length)?sS(r.providerUserInfo):[],a=nS(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a==null?void 0:a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Bg(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function tS(t){const e=De(t);await Ea(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function nS(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function sS(t){return t.map(e=>{var{providerId:n}=e,s=xu(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function iS(t,e){const n=await Fg(t,{},()=>{const s=li({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=Ug(t,i,"/v1/token",`key=${r}`);return Uu.fetch()(o,{method:"POST",headers:{"X-Client-Version":t._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Tr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken!="undefined","internal-error"),Q(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):XC(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Q(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await iS(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Tr;return s&&(Q(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(Q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(Q(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Tr,this.toJSON())}_performRefresh(){return fn("not implemented")}}/**
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
 */function Fn(t,e){Q(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class ms{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=xu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new eS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.metadata=new Bg(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await ui(this,this.stsTokenManager.getToken(this.auth,e));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return JC(this,e)}reload(){return tS(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new ms(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Ea(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ui(this,QC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,d=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,y=(c=n.createdAt)!==null&&c!==void 0?c:void 0,m=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:g,emailVerified:w,isAnonymous:T,providerData:E,stsTokenManager:I}=n;Q(g&&I,e,"internal-error");const C=Tr.fromJSON(this.name,I);Q(typeof g=="string",e,"internal-error"),Fn(h,e.name),Fn(f,e.name),Q(typeof w=="boolean",e,"internal-error"),Q(typeof T=="boolean",e,"internal-error"),Fn(d,e.name),Fn(p,e.name),Fn(v,e.name),Fn(_,e.name),Fn(y,e.name),Fn(m,e.name);const k=new ms({uid:g,auth:e,email:f,emailVerified:w,displayName:h,isAnonymous:T,photoURL:p,phoneNumber:d,tenantId:v,stsTokenManager:C,createdAt:y,lastLoginAt:m});return E&&Array.isArray(E)&&(k.providerData=E.map(R=>Object.assign({},R))),_&&(k._redirectEventId=_),k}static async _fromIdTokenResponse(e,n,s=!1){const i=new Tr;i.updateFromServerResponse(n);const r=new ms({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Ea(r),r}}/**
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
 */class Hg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Hg.type="NONE";const $g=Hg;/**
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
 */function Ia(t,e,n){return`firebase:${t}:${e}:${n}`}class hi{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Ia(this.userKey,i.apiKey,r),this.fullPersistenceKey=Ia("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ms._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new hi(pn($g),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||pn($g);const o=Ia(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=ms._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new hi(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new hi(r,e,s))}}/**
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
 */function Wg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(jg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Vg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Kg(e))return"Blackberry";if(Gg(e))return"Webos";if(Wu(e))return"Safari";if((e.includes("chrome/")||qg(e))&&!e.includes("edge/"))return"Chrome";if(zg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Vg(t=qe()){return/firefox\//i.test(t)}function Wu(t=qe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function qg(t=qe()){return/crios\//i.test(t)}function jg(t=qe()){return/iemobile/i.test(t)}function zg(t=qe()){return/android/i.test(t)}function Kg(t=qe()){return/blackberry/i.test(t)}function Gg(t=qe()){return/webos/i.test(t)}function Ta(t=qe()){return/iphone|ipad|ipod/i.test(t)}function rS(t=qe()){var e;return Ta(t)&&!!((e=window.navigator)===null||e===void 0?void 0:e.standalone)}function oS(){return NT()&&document.documentMode===10}function Qg(t=qe()){return Ta(t)||zg(t)||Gg(t)||Kg(t)||/windows phone/i.test(t)||jg(t)}function aS(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Yg(t,e=[]){let n;switch(t){case"Browser":n=Wg(qe());break;case"Worker":n=`${Wg(qe())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ci}/${s}`}/**
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
 */class lS{constructor(e,n){this.app=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Jg(this),this.idTokenSubscription=new Jg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Og,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=pn(n)),this._initializationPromise=this.queue(async()=>{var s,i;this._deleted||(this.persistenceManager=await hi.create(this,e),!this._deleted&&(((s=this._popupRedirectResolver)===null||s===void 0?void 0:s._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)))}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let s=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,r=s==null?void 0:s._redirectEventId,o=await this.tryRedirectSignIn(e);(!i||i===r)&&(o==null?void 0:o.user)&&(s=o.user)}return s?s._redirectEventId?(Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)):this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ea(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=VC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?De(e):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(pn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new hs("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&pn(e)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await hi.create(this,[pn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return Q(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Yg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function Ca(t){return De(t)}class Jg{constructor(e){this.auth=e,this.observer=null,this.addObserver=HT(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class Xg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return fn("not implemented")}_getIdTokenResponse(e){return fn("not implemented")}_linkToIdToken(e,n){return fn("not implemented")}_getReauthenticationResolver(e){return fn("not implemented")}}/**
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
 */async function fi(t,e){return KC(t,"POST","/v1/accounts:signInWithIdp",zC(t,e))}/**
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
 */const cS="http://localhost";class gs extends Xg{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new gs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Yt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=xu(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new gs(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return fi(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,fi(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,fi(e,n)}buildRequest(){const e={requestUri:cS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=li(n)}return e}}/**
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
 */class Vu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Cr extends Vu{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Et extends Cr{constructor(){super("facebook.com")}static credential(e){return gs._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Et.credential(e.oauthAccessToken)}catch{return null}}}Et.FACEBOOK_SIGN_IN_METHOD="facebook.com";Et.PROVIDER_ID="facebook.com";/**
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
 */class It extends Cr{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return gs._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return It.credential(n,s)}catch{return null}}}It.GOOGLE_SIGN_IN_METHOD="google.com";It.PROVIDER_ID="google.com";/**
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
 */class Un extends Cr{constructor(){super("github.com")}static credential(e){return gs._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Un.credential(e.oauthAccessToken)}catch{return null}}}Un.GITHUB_SIGN_IN_METHOD="github.com";Un.PROVIDER_ID="github.com";/**
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
 */class Tt extends Cr{constructor(){super("twitter.com")}static credential(e,n){return gs._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Tt.credential(n,s)}catch{return null}}}Tt.TWITTER_SIGN_IN_METHOD="twitter.com";Tt.PROVIDER_ID="twitter.com";/**
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
 */class di{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await ms._fromIdTokenResponse(e,s,i),o=Zg(s);return new di({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=Zg(s);return new di({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function Zg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Sa extends hn{constructor(e,n,s,i){var r;super(n.code,n.message);this.operationType=s,this.user=i,Object.setPrototypeOf(this,Sa.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Sa(e,n,s,i)}}function e_(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Sa._fromErrorAndOperation(t,r,e,s):r})}async function uS(t,e,n=!1){const s=await ui(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return di._forOperation(t,"link",s)}/**
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
 */async function hS(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await ui(t,e_(s,i,e,t),n);Q(r.idToken,s,"internal-error");const o=$u(r.idToken);Q(o,s,"internal-error");const{sub:a}=o;return Q(t.uid===a,s,"user-mismatch"),di._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Yt(s,"user-mismatch"),r}}/**
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
 */async function t_(t,e,n=!1){const s="signIn",i=await e_(t,s,e),r=await di._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function qu(t,e){return t_(Ca(t),e)}/**
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
 */async function fS(t,e){return Er(t,"POST","/v1/accounts:update",e)}/**
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
 */async function ju(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const s=De(t),r={idToken:await s.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await ui(s,fS(s.auth,r));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const a=s.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=s.displayName,a.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function dS(t,e,n,s){return De(t).onAuthStateChanged(e,n,s)}function pS(t){return De(t).signOut()}const ka="__sak";/**
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
 */class n_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ka,"1"),this.storage.removeItem(ka),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function mS(){const t=qe();return Wu(t)||Ta(t)}const gS=1e3,_S=10;class s_ extends n_{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=mS()&&aS(),this.fallbackToPolling=Qg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);oS()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,_S):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},gS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}s_.type="LOCAL";const yS=s_;/**
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
 */class i_ extends n_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}i_.type="SESSION";const r_=i_;/**
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
 */function vS(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ra{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Ra(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o==null?void 0:o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await vS(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ra.receivers=[];/**
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
 */function zu(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class wS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=zu("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const f=h;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(f.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Xt(){return window}function bS(t){Xt().location.href=t}/**
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
 */function o_(){return typeof Xt().WorkerGlobalScope!="undefined"&&typeof Xt().importScripts=="function"}async function ES(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function IS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function TS(){return o_()?self:null}/**
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
 */const a_="firebaseLocalStorageDb",CS=1,Aa="firebaseLocalStorage",l_="fbase_key";class Sr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Na(t,e){return t.transaction([Aa],e?"readwrite":"readonly").objectStore(Aa)}function SS(){const t=indexedDB.deleteDatabase(a_);return new Sr(t).toPromise()}function Ku(){const t=indexedDB.open(a_,CS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Aa,{keyPath:l_})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Aa)?e(s):(s.close(),await SS(),e(await Ku()))})})}async function c_(t,e,n){const s=Na(t,!0).put({[l_]:e,value:n});return new Sr(s).toPromise()}async function kS(t,e){const n=Na(t,!1).get(e),s=await new Sr(n).toPromise();return s===void 0?null:s.value}function u_(t,e){const n=Na(t,!0).delete(e);return new Sr(n).toPromise()}const RS=800,AS=3;class h_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ku(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>AS)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return o_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ra._getInstance(TS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await ES(),!this.activeServiceWorker)return;this.sender=new wS(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||IS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ku();return await c_(e,ka,"1"),await u_(e,ka),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>c_(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>kS(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>u_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Na(i,!1).getAll();return new Sr(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),RS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}h_.type="LOCAL";const NS=h_;/**
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
 */function PS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function OS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=Jt("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",PS().appendChild(s)})}function MS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new br(3e4,6e4);/**
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
 */function f_(t,e){return e?pn(e):(Q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Gu extends Xg{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return fi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return fi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return fi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function xS(t){return t_(t.auth,new Gu(t),t.bypassAuthState)}function DS(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),hS(n,new Gu(t),t.bypassAuthState)}async function LS(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),uS(n,new Gu(t),t.bypassAuthState)}/**
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
 */class d_{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return xS;case"linkViaPopup":case"linkViaRedirect":return LS;case"reauthViaPopup":case"reauthViaRedirect":return DS;default:Yt(this.auth,"internal-error")}}resolve(e){dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const FS=new br(2e3,1e4);async function Qu(t,e,n){const s=Ca(t);UC(t,e,Vu);const i=f_(s,n);return new _s(s,"signInViaPopup",e,i).executeNotNull()}class _s extends d_{constructor(e,n,s,i,r){super(e,n,i,r);this.provider=s,this.authWindow=null,this.pollId=null,_s.currentPopupAction&&_s.currentPopupAction.cancel(),_s.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){dn(this.filter.length===1,"Popup operations only handle one event");const e=zu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Jt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Jt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_s.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0?void 0:s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Jt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,FS.get())};e()}}_s.currentPopupAction=null;/**
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
 */const US="pendingRedirect",Yu=new Map;class BS extends d_{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s);this.eventId=null}async execute(){let e=Yu.get(this.auth._key());if(!e){try{const s=await HS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Yu.set(this.auth._key(),e)}return this.bypassAuthState||Yu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function HS(t,e){const n=WS(e),s=$S(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function $S(t){return pn(t._redirectPersistence)}function WS(t){return Ia(US,t.config.apiKey,t.name)}async function VS(t,e,n=!1){const s=Ca(t),i=f_(s,e),o=await new BS(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const qS=10*60*1e3;class jS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!zS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!m_(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Jt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=qS&&this.cachedEventUids.clear(),this.cachedEventUids.has(p_(e))}saveEventToCache(e){this.cachedEventUids.add(p_(e)),this.lastProcessedEventTime=Date.now()}}function p_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function m_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function zS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return m_(t);default:return!1}}/**
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
 */async function KS(t,e={}){return Er(t,"GET","/v1/projects",e)}/**
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
 */const GS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,QS=/^https?/;async function YS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await KS(t);for(const n of e)try{if(JS(n))return}catch{}Yt(t,"unauthorized-domain")}function JS(t){const e=Lu(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!QS.test(n))return!1;if(GS.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const XS=new br(3e4,6e4);function g_(){const t=Xt().___jsl;if(t==null?void 0:t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ZS(t){return new Promise((e,n)=>{var s,i,r;function o(){g_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{g_(),n(Jt(t,"network-request-failed"))},timeout:XS.get()})}if((i=(s=Xt().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0?void 0:i.Iframe)e(gapi.iframes.getContext());else if((r=Xt().gapi)===null||r===void 0?void 0:r.load)o();else{const a=MS("iframefcb");return Xt()[a]=()=>{gapi.load?o():n(Jt(t,"network-request-failed"))},OS(`https://apis.google.com/js/api.js?onload=${a}`)}}).catch(e=>{throw Pa=null,e})}let Pa=null;function e2(t){return Pa=Pa||ZS(t),Pa}/**
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
 */const t2=new br(5e3,15e3),n2="__/auth/iframe",s2="emulator/auth/iframe",i2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},r2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function o2(t){const e=t.config;Q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Fu(e,s2):`https://${t.config.authDomain}/${n2}`,s={apiKey:e.apiKey,appName:t.name,v:ci},i=r2.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${li(s).slice(1)}`}async function a2(t){const e=await e2(t),n=Xt().gapi;return Q(n,t,"internal-error"),e.open({where:document.body,url:o2(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:i2,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Jt(t,"network-request-failed"),a=Xt().setTimeout(()=>{r(o)},t2.get());function l(){Xt().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const l2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},c2=500,u2=600,h2="_blank",f2="http://localhost";class __{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function d2(t,e,n,s=c2,i=u2){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},l2),{width:s.toString(),height:i.toString(),top:r,left:o}),c=qe().toLowerCase();n&&(a=qg(c)?h2:n),Vg(c)&&(e=e||f2,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[d,p])=>`${f}${d}=${p},`,"");if(rS(c)&&a!=="_self")return p2(e||"",a),new __(null);const h=window.open(e||"",a,u);Q(h,t,"popup-blocked");try{h.focus()}catch{}return new __(h)}function p2(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const m2="__/auth/handler",g2="emulator/auth/handler";function y_(t,e,n,s,i,r){Q(t.config.authDomain,t,"auth-domain-config-required"),Q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:ci,eventId:i};if(e instanceof Vu){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ru(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(r||{}))o[l]=c}if(e instanceof Cr){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${_2(t)}?${li(a).slice(1)}`}function _2({config:t}){return t.emulator?Fu(t,g2):`https://${t.authDomain}/${m2}`}/**
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
 */const Ju="webStorageSupport";class y2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=r_,this._completeRedirectFn=VS}async _openPopup(e,n,s,i){var r;dn((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=y_(e,n,s,Lu(),i);return d2(e,o,zu())}async _openRedirect(e,n,s,i){return await this._originValidation(e),bS(y_(e,n,s,Lu(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(dn(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s}async initAndGetManager(e){const n=await a2(e),s=new jS(e);return n.register("authEvent",i=>(Q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ju,{type:Ju},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Ju];o!==void 0&&n(!!o),Yt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=YS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Qg()||Wu()||Ta()}}const v2=y2;var v_="@firebase/auth",w_="0.19.3";/**
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
 */class w2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var i;e(((i=s)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function b2(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function E2(t){Qt(new Ot("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),{apiKey:i,authDomain:r}=s.options;return(o=>{Q(i&&!i.includes(":"),"invalid-api-key",{appName:o.name}),Q(!(r==null?void 0:r.includes(":")),"argument-error",{appName:o.name});const a={apiKey:i,authDomain:r,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Yg(t)},l=new lS(o,a);return HC(l,n),l})(s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Qt(new Ot("auth-internal",e=>{const n=Ca(e.getProvider("auth").getImmediate());return(s=>new w2(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),tt(v_,w_,b2(t)),tt(v_,w_,"esm2017")}/**
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
 */function I2(t=Mu()){const e=ps(t,"auth");return e.isInitialized()?e.getImmediate():BC(t,{popupRedirectResolver:v2,persistence:[NS,yS,r_]})}E2("Browser");const b_="@firebase/database",E_="0.12.4";/**
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
 */let I_="";function T2(t){I_=t}/**
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
 */class C2{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Oe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:vr(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class S2{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Pt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const T_=function(t){try{if(typeof window!="undefined"&&typeof window[t]!="undefined"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new C2(e)}}catch{}return new S2},ys=T_("localStorage"),Xu=T_("sessionStorage");/**
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
 */const pi=new ya("@firebase/database"),C_=function(){let t=1;return function(){return t++}}(),S_=function(t){const e=VT(t),n=new BT;n.update(e);const s=n.digest();return Cu.encodeByteArray(s)},kr=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=kr.apply(null,s):typeof s=="object"?e+=Oe(s):e+=s,e+=" "}return e};let vs=null,k_=!0;const k2=function(t,e){D(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(pi.logLevel=_e.VERBOSE,vs=pi.log.bind(pi),e&&Xu.set("logging_enabled",!0)):typeof t=="function"?vs=t:(vs=null,Xu.remove("logging_enabled"))},je=function(...t){if(k_===!0&&(k_=!1,vs===null&&Xu.get("logging_enabled")===!0&&k2(!0)),vs){const e=kr.apply(null,t);vs(e)}},Rr=function(t){return function(...e){je(t,...e)}},Zu=function(...t){const e="FIREBASE INTERNAL ERROR: "+kr(...t);pi.error(e)},ws=function(...t){const e=`FIREBASE FATAL ERROR: ${kr(...t)}`;throw pi.error(e),new Error(e)},pt=function(...t){const e="FIREBASE WARNING: "+kr(...t);pi.warn(e)},R2=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&pt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},eh=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},A2=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},bs="[MIN_NAME]",Bn="[MAX_NAME]",mi=function(t,e){if(t===e)return 0;if(t===bs||e===Bn)return-1;if(e===bs||t===Bn)return 1;{const n=N_(t),s=N_(e);return n!==null?s!==null?n-s==0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},N2=function(t,e){return t===e?0:t<e?-1:1},Ar=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Oe(e))},th=function(t){if(typeof t!="object"||t===null)return Oe(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Oe(e[s]),n+=":",n+=th(t[e[s]]);return n+="}",n},R_=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function nt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const A_=function(t){D(!eh(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t==-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},P2=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},O2=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function M2(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const x2=new RegExp("^-?(0*)\\d{1,10}$"),D2=-2147483648,L2=2147483647,N_=function(t){if(x2.test(t)){const e=Number(t);if(e>=D2&&e<=L2)return e}return null},Nr=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw pt("Exception was thrown by user callback.",n),e},Math.floor(0))}},F2=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Pr=function(t,e){const n=setTimeout(t,e);return typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class U2{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){pt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class B2{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(je("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',pt(e)}}class nh{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}nh.OWNER="owner";/**
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
 */const sh="5",P_="v",O_="s",M_="r",x_="f",D_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,L_="ls",H2="p",ih="ac",F_="websocket",U_="long_polling";/**
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
 */class $2{constructor(e,n,s,i,r=!1,o="",a=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ys.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ys.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function W2(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function B_(t,e,n){D(typeof e=="string","typeof type must == string"),D(typeof n=="object","typeof params must == object");let s;if(e===F_)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===U_)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);W2(t)&&(n.ns=t.namespace);const i=[];return nt(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class V2{constructor(){this.counters_={}}incrementCounter(e,n=1){Pt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return RT(this.counters_)}}/**
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
 */const rh={},oh={};function ah(t){const e=t.toString();return rh[e]||(rh[e]=new V2),rh[e]}function q2(t,e){const n=t.toString();return oh[n]||(oh[n]=e()),oh[n]}/**
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
 */class j2{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Nr(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const H_="start",z2="close",K2="pLPCommand",G2="pRTLPCB",$_="id",W_="pw",V_="ser",Q2="cb",Y2="seg",J2="ts",X2="d",Z2="dframe",q_=1870,j_=30,ek=q_-j_,tk=25e3,nk=3e4;class gi{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Rr(e),this.stats_=ah(n),this.urlFn=l=>(this.appCheckToken&&(l[ih]=this.appCheckToken),B_(n,U_,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new j2(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(nk)),A2(()=>{if(this.isClosed_)return;this.scriptTagHolder=new lh((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===H_)this.id=a,this.password=l;else if(o===z2)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[H_]="t",s[V_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Q2]=this.scriptTagHolder.uniqueCallbackIdentifier),s[P_]=sh,this.transportSessionId&&(s[O_]=this.transportSessionId),this.lastSessionId&&(s[L_]=this.lastSessionId),this.applicationId&&(s[H2]=this.applicationId),this.appCheckToken&&(s[ih]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&D_.test(location.hostname)&&(s[M_]=x_);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){gi.forceAllow_=!0}static forceDisallow(){gi.forceDisallow_=!0}static isAvailable(){return gi.forceAllow_?!0:!gi.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!P2()&&!O2()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Oe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=kT(n),i=R_(s,ek);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Z2]="t",s[$_]=e,s[W_]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Oe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class lh{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=C_(),window[K2+this.uniqueCallbackIdentifier]=e,window[G2+this.uniqueCallbackIdentifier]=n,this.myIFrame=lh.createIFrame_();let r="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,"javascript:".length)==="javascript:"){const a=document.domain;r='<script>document.domain="'+a+'";<\/script>'}const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){je("frame writing exception"),a.stack&&je(a.stack),je(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||je("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[$_]=this.myID,e[W_]=this.myPW,e[V_]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+j_+s.length<=q_;){const o=this.pendingSegs.shift();s=s+"&"+Y2+i+"="+o.seg+"&"+J2+i+"="+o.ts+"&"+X2+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(tk)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{je("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const sk=16384,ik=45e3;let Oa=null;typeof MozWebSocket!="undefined"?Oa=MozWebSocket:typeof WebSocket!="undefined"&&(Oa=WebSocket);class Mt{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Rr(this.connId),this.stats_=ah(n),this.connURL=Mt.connectionURL_(n,o,a,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i){const r={};return r[P_]=sh,typeof location!="undefined"&&location.hostname&&D_.test(location.hostname)&&(r[M_]=x_),n&&(r[O_]=n),s&&(r[L_]=s),i&&(r[ih]=i),B_(e,F_,r)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ys.set("previous_websocket_failure",!0);try{if(!Cg()){const s={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new Oa(this.connURL,[],s)}}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Mt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Oa!==null&&!Mt.forceDisallow_}static previouslyFailed(){return ys.isInMemoryStorage||ys.get("previous_websocket_failure")===!0}markConnectionHealthy(){ys.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=vr(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(D(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Oe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=R_(n,sk);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(ik))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Mt.responsesRequiredToBeHealthy=2;Mt.healthyTimeout=3e4;/**
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
 */class ch{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[gi,Mt]}initTransports_(e){const n=Mt&&Mt.isAvailable();let s=n&&!Mt.previouslyFailed();if(e.webSocketOnly&&(n||pt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Mt];else{const i=this.transports_=[];for(const r of ch.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}/**
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
 */const rk=6e4,ok=5e3,ak=10*1024,lk=100*1024,uh="t",z_="d",ck="s",K_="r",uk="e",G_="o",Q_="a",Y_="n",J_="p",hk="h";class fk{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Rr("c:"+this.id+":"),this.transportManager_=new ch(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Pr(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>lk?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>ak?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(uh in e){const n=e[uh];n===Q_?this.upgradeIfSecondaryHealthy_():n===K_?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===G_&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ar("t",e),s=Ar("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:J_,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Q_,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Y_,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ar("t",e),s=Ar("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ar(uh,e);if(z_ in e){const s=e[z_];if(n===hk)this.onHandshake_(s);else if(n===Y_){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===ck?this.onConnectionShutdown_(s):n===K_?this.onReset_(s):n===uk?Zu("Server Error: "+s):n===G_?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Zu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),sh!==s&&pt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Pr(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(rk))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Pr(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(ok))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:J_,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ys.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class X_{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Z_{constructor(e){this.allowedEvents_=e,this.listeners_={},D(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){D(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Ma extends Z_{constructor(){super(["online"]);this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!ku()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ma}getInitialEvent(e){return D(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const e0=32,t0=768;class fe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function re(){return new fe("")}function X(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Hn(t){return t.pieces_.length-t.pieceNum_}function ye(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new fe(t.pieces_,e)}function n0(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function dk(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function s0(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function i0(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new fe(e,0)}function Me(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof fe)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new fe(n,0)}function Z(t){return t.pieceNum_>=t.pieces_.length}function Ye(t,e){const n=X(t),s=X(e);if(n===null)return e;if(n===s)return Ye(ye(t),ye(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function hh(t,e){if(Hn(t)!==Hn(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function xt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Hn(t)>Hn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class pk{constructor(e,n){this.errorPrefix_=n,this.parts_=s0(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=_a(this.parts_[s]);r0(this)}}function mk(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=_a(e),r0(t)}function gk(t){const e=t.parts_.pop();t.byteLength_-=_a(e),t.parts_.length>0&&(t.byteLength_-=1)}function r0(t){if(t.byteLength_>t0)throw new Error(t.errorPrefix_+"has a key path longer than "+t0+" bytes ("+t.byteLength_+").");if(t.parts_.length>e0)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+e0+") or object contains a cycle "+Es(t))}function Es(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class fh extends Z_{constructor(){super(["visible"]);let e,n;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(n="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new fh}getInitialEvent(e){return D(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Or=1e3,_k=60*5*1e3,yk=3*1e3,o0=30*1e3,vk=1.3,wk=3e4,bk="server_kill",a0=3;class mn extends X_{constructor(e,n,s,i,r,o,a,l){super();if(this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=mn.nextPersistentConnectionId_++,this.log_=Rr("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Or,this.maxReconnectDelay_=_k,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Cg())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");fh.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ma.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Oe(r)),D(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new pa,s={p:e._path.toString(),q:e._queryObject},i={action:"g",request:s,onComplete:o=>{const a=o.d;o.s==="ok"?(this.onDataUpdate_(s.p,a,!1,null),n.resolve(a)):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const o=this.outstandingGets_[r];o===void 0||i!==o||(delete this.outstandingGets_[r],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),this.log_("get "+r+" timed out on connection"),n.reject(new Error("Client is offline.")))},yk),this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),D(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;mn.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Pt(e,"w")){const s=fs(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();pt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||UT(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=o0)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=FT(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Oe(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Zu("Unrecognized action received from server: "+Oe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){D(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Or,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Or,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>wk&&(this.reconnectDelay_=Or),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*vk)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+mn.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){D(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?je("getToken() completed but was canceled"):(je("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,a=new fk(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,d=>{pt(d+" ("+this.repoInfo_.toString()+")"),this.interrupt(bk)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&pt(h),l())}}}interrupt(e){je("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){je("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ru(this.interruptReasons_)&&(this.reconnectDelay_=Or,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>th(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new fe(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){je("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=a0&&(this.reconnectDelay_=o0,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){je("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=a0&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+I_.replace(/\./g,"-")]=1,ku()?e["framework.cordova"]=1:Tg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ma.getInstance().currentlyOnline();return Ru(this.interruptReasons_)&&e}}mn.nextPersistentConnectionId_=0;mn.nextConnectionId_=0;/**
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
 */class ee{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ee(e,n)}}/**
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
 */class xa{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new ee(bs,e),i=new ee(bs,n);return this.compare(s,i)!==0}minPost(){return ee.MIN}}/**
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
 */let Da;class l0 extends xa{static get __EMPTY_NODE(){return Da}static set __EMPTY_NODE(e){Da=e}compare(e,n){return mi(e.name,n.name)}isDefinedOn(e){throw ai("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ee.MIN}maxPost(){return new ee(Bn,Da)}makePost(e,n){return D(typeof e=="string","KeyIndex indexValue must always be a string."),new ee(e,Da)}toString(){return".key"}}const $n=new l0;/**
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
 */class La{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Le{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:Le.RED,this.left=i!=null?i:st.EMPTY_NODE,this.right=r!=null?r:st.EMPTY_NODE}copy(e,n,s,i,r){return new Le(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return st.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return st.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Le.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Le.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Le.RED=!0;Le.BLACK=!1;class Ek{copy(e,n,s,i,r){return this}insert(e,n,s){return new Le(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class st{constructor(e,n=st.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new st(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Le.BLACK,null,null))}remove(e){return new st(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Le.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new La(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new La(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new La(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new La(this.root_,null,this.comparator_,!0,e)}}st.EMPTY_NODE=new Ek;/**
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
 */function Ik(t,e){return mi(t.name,e.name)}function dh(t,e){return mi(t,e)}/**
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
 */let ph;function Tk(t){ph=t}const c0=function(t){return typeof t=="number"?"number:"+A_(t):"string:"+t},u0=function(t){if(t.isLeafNode()){const e=t.val();D(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Pt(e,".sv"),"Priority must be a string or number.")}else D(t===ph||t.isEmpty(),"priority of unexpected type.");D(t===ph||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let h0;class Fe{constructor(e,n=Fe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,D(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),u0(this.priorityNode_)}static set __childrenNodeConstructor(e){h0=e}static get __childrenNodeConstructor(){return h0}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Fe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Fe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Z(e)?this:X(e)===".priority"?this.priorityNode_:Fe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Fe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=X(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(D(s!==".priority"||Hn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Fe.__childrenNodeConstructor.EMPTY_NODE.updateChild(ye(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+c0(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=A_(this.value_):e+=this.value_,this.lazyHash_=S_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Fe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Fe.__childrenNodeConstructor?-1:(D(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Fe.VALUE_TYPE_ORDER.indexOf(n),r=Fe.VALUE_TYPE_ORDER.indexOf(s);return D(i>=0,"Unknown leaf type: "+n),D(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Fe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let f0,d0;function Ck(t){f0=t}function Sk(t){d0=t}class kk extends xa{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?mi(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ee.MIN}maxPost(){return new ee(Bn,new Fe("[PRIORITY-POST]",d0))}makePost(e,n){const s=f0(e);return new ee(n,new Fe("[PRIORITY-POST]",s))}toString(){return".priority"}}const Ie=new kk;/**
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
 */const Rk=Math.log(2);class Ak{constructor(e){const n=r=>parseInt(Math.log(r)/Rk,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Fa=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let h,f;if(u===0)return null;if(u===1)return h=t[l],f=n?n(h):h,new Le(f,h.node,Le.BLACK,null,null);{const d=parseInt(u/2,10)+l,p=i(l,d),v=i(d+1,c);return h=t[d],f=n?n(h):h,new Le(f,h.node,Le.BLACK,p,v)}},r=function(l){let c=null,u=null,h=t.length;const f=function(p,v){const _=h-p,y=h;h-=p;const m=i(_+1,y),g=t[_],w=n?n(g):g;d(new Le(w,g.node,v,null,m))},d=function(p){c?(c.left=p,c=p):(u=p,c=p)};for(let p=0;p<l.count;++p){const v=l.nextBitIsOne(),_=Math.pow(2,l.count-(p+1));v?f(_,Le.BLACK):(f(_,Le.BLACK),f(_,Le.RED))}return u},o=new Ak(t.length),a=r(o);return new st(s||e,a)};/**
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
 */let mh;const _i={};class gn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return D(_i&&Ie,"ChildrenNode.ts has not been loaded"),mh=mh||new gn({".priority":_i},{".priority":Ie}),mh}get(e){const n=fs(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof st?n:null}hasIndex(e){return Pt(this.indexSet_,e.toString())}addIndex(e,n){D(e!==$n,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(ee.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Fa(s,e.getCompare()):a=_i;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new gn(u,c)}addToIndexes(e,n){const s=ma(this.indexes_,(i,r)=>{const o=fs(this.indexSet_,r);if(D(o,"Missing index implementation for "+r),i===_i)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(ee.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Fa(a,o.getCompare())}else return _i;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new ee(e.name,a))),l.insert(e,e.node)}});return new gn(s,this.indexSet_)}removeFromIndexes(e,n){const s=ma(this.indexes_,i=>{if(i===_i)return i;{const r=n.get(e.name);return r?i.remove(new ee(e.name,r)):i}});return new gn(s,this.indexSet_)}}/**
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
 */let Mr;class z{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&u0(this.priorityNode_),this.children_.isEmpty()&&D(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Mr||(Mr=new z(new st(dh),null,gn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Mr}updatePriority(e){return this.children_.isEmpty()?this:new z(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Mr:n}}getChild(e){const n=X(e);return n===null?this:this.getImmediateChild(n).getChild(ye(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(D(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new ee(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Mr:this.priorityNode_;return new z(i,o,r)}}updateChild(e,n){const s=X(e);if(s===null)return n;{D(X(e)!==".priority"||Hn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(ye(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(Ie,(o,a)=>{n[o]=a.val(e),s++,r&&z.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+c0(this.getPriority().val())+":"),this.forEachChild(Ie,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":S_(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new ee(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ee(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ee(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ee.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ee.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===xr?-1:0}withIndex(e){if(e===$n||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new z(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===$n||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Ie),i=n.getIterator(Ie);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===$n?null:this.indexMap_.get(e.toString())}}z.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Nk extends z{constructor(){super(new st(dh),z.EMPTY_NODE,gn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return z.EMPTY_NODE}isEmpty(){return!1}}const xr=new Nk;Object.defineProperties(ee,{MIN:{value:new ee(bs,z.EMPTY_NODE)},MAX:{value:new ee(Bn,xr)}});l0.__EMPTY_NODE=z.EMPTY_NODE;Fe.__childrenNodeConstructor=z;Tk(xr);Sk(xr);/**
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
 */const Pk=!0;function Ue(t,e=null){if(t===null)return z.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),D(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Fe(n,Ue(e))}if(!(t instanceof Array)&&Pk){const n=[];let s=!1;if(nt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ue(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new ee(o,l)))}}),n.length===0)return z.EMPTY_NODE;const r=Fa(n,Ik,o=>o.name,dh);if(s){const o=Fa(n,Ie.getCompare());return new z(r,Ue(e),new gn({".priority":o},{".priority":Ie}))}else return new z(r,Ue(e),gn.Default)}else{let n=z.EMPTY_NODE;return nt(t,(s,i)=>{if(Pt(t,s)&&s.substring(0,1)!=="."){const r=Ue(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Ue(e))}}Ck(Ue);/**
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
 */class gh extends xa{constructor(e){super();this.indexPath_=e,D(!Z(e)&&X(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?mi(e.name,n.name):r}makePost(e,n){const s=Ue(e),i=z.EMPTY_NODE.updateChild(this.indexPath_,s);return new ee(n,i)}maxPost(){const e=z.EMPTY_NODE.updateChild(this.indexPath_,xr);return new ee(Bn,e)}toString(){return s0(this.indexPath_,0).join("/")}}/**
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
 */class Ok extends xa{compare(e,n){const s=e.node.compareTo(n.node);return s===0?mi(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ee.MIN}maxPost(){return ee.MAX}makePost(e,n){const s=Ue(e);return new ee(n,s)}toString(){return".value"}}const p0=new Ok;/**
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
 */function m0(t){return{type:"value",snapshotNode:t}}function yi(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Dr(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Lr(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Mk(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class _h{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){D(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Dr(n,a)):D(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(yi(n,s)):o.trackChildChange(Lr(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Ie,(i,r)=>{n.hasChild(i)||s.trackChildChange(Dr(i,r))}),n.isLeafNode()||n.forEachChild(Ie,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Lr(i,r,o))}else s.trackChildChange(yi(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?z.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Fr{constructor(e){this.indexedFilter_=new _h(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Fr.getStartPost_(e),this.endPost_=Fr.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,s,i,r,o){return this.matches(new ee(n,s))||(s=z.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=z.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(z.EMPTY_NODE);const r=this;return n.forEachChild(Ie,(o,a)=>{r.matches(new ee(o,a))||(i=i.updateImmediateChild(o,z.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class xk{constructor(e){this.rangedFilter_=new Fr(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new ee(n,s))||(s=z.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=z.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=z.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();let l;if(this.reverse_?l=this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:l=this.index_.compare(a,this.rangedFilter_.getEndPost())<=0,l)i=i.updateImmediateChild(a.name,a.node),o++;else break}}else{i=n.withIndex(this.index_),i=i.updatePriority(z.EMPTY_NODE);let r,o,a,l;if(this.reverse_){l=i.getReverseIterator(this.index_),r=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const h=this.index_.getCompare();a=(f,d)=>h(d,f)}else l=i.getIterator(this.index_),r=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),a=this.index_.getCompare();let c=0,u=!1;for(;l.hasNext();){const h=l.getNext();!u&&a(r,h)<=0&&(u=!0),u&&c<this.limit_&&a(h,o)<=0?c++:i=i.updateImmediateChild(h.name,z.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(f,d)=>h(d,f)}else o=this.index_.getCompare();const a=e;D(a.numChildren()===this.limit_,"");const l=new ee(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const d=f==null?1:o(f,l);if(u&&!s.isEmpty()&&d>=0)return r!=null&&r.trackChildChange(Lr(n,s,h)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(Dr(n,h));const v=a.updateImmediateChild(n,z.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(yi(f.name,f.node)),v.updateImmediateChild(f.name,f.node)):v}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Dr(c.name,c.node)),r.trackChildChange(yi(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,z.EMPTY_NODE)):e}}/**
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
 */class yh{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ie}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return D(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return D(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:bs}hasEnd(){return this.endSet_}getIndexEndValue(){return D(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return D(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Bn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return D(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ie}copy(){const e=new yh;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Dk(t){return t.loadsAllData()?new _h(t.getIndex()):t.hasLimit()?new xk(t):new Fr(t)}function Lk(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="l",n}function Fk(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="r",n}function Uk(t,e,n){const s=t.copy();return s.startSet_=!0,e===void 0&&(e=null),s.indexStartValue_=e,n!=null?(s.startNameSet_=!0,s.indexStartName_=n):(s.startNameSet_=!1,s.indexStartName_=""),s}function Bk(t,e,n){const s=t.copy();return s.endSet_=!0,e===void 0&&(e=null),s.indexEndValue_=e,n!==void 0?(s.endNameSet_=!0,s.indexEndName_=n):(s.endNameSet_=!1,s.indexEndName_=""),s}function g0(t,e){const n=t.copy();return n.index_=e,n}function _0(t){const e={};if(t.isDefault())return e;let n;return t.index_===Ie?n="$priority":t.index_===p0?n="$value":t.index_===$n?n="$key":(D(t.index_ instanceof gh,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Oe(n),t.startSet_&&(e.startAt=Oe(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+Oe(t.indexStartName_))),t.endSet_&&(e.endAt=Oe(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+Oe(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function y0(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ie&&(e.i=t.index_.toString()),e}/**
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
 */class Ua extends X_{constructor(e,n,s,i){super();this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Rr("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(D(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Ua.getListenId_(e,s),a={};this.listens_[o]=a;const l=_0(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),fs(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,n){const s=Ua.getListenId_(e,n);delete this.listens_[s]}get(e){const n=_0(e._queryParams),s=e._path.toString(),i=new pa;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+li(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=vr(a.responseText)}catch{pt("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&pt("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class Hk{constructor(){this.rootNode_=z.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Ba(){return{value:null,children:new Map}}function v0(t,e,n){if(Z(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=X(e);t.children.has(s)||t.children.set(s,Ba());const i=t.children.get(s);e=ye(e),v0(i,e,n)}}function vh(t,e,n){t.value!==null?n(e,t.value):$k(t,(s,i)=>{const r=new fe(e.toString()+"/"+s);vh(i,r,n)})}function $k(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class Wk{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&nt(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const w0=10*1e3,Vk=30*1e3,qk=5*60*1e3;class jk{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Wk(e);const s=w0+(Vk-w0)*Math.random();Pr(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;nt(e,(i,r)=>{r>0&&Pt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Pr(this.reportStats_.bind(this),Math.floor(Math.random()*2*qk))}}/**
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
 */var Dt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Dt||(Dt={}));function b0(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function wh(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function bh(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Ha{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Dt.ACK_USER_WRITE,this.source=b0()}operationForChild(e){if(Z(this.path)){if(this.affectedTree.value!=null)return D(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new fe(e));return new Ha(re(),n,this.revert)}}else return D(X(this.path)===e,"operationForChild called for unrelated child."),new Ha(ye(this.path),this.affectedTree,this.revert)}}/**
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
 */class Ur{constructor(e,n){this.source=e,this.path=n,this.type=Dt.LISTEN_COMPLETE}operationForChild(e){return Z(this.path)?new Ur(this.source,re()):new Ur(this.source,ye(this.path))}}/**
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
 */class Is{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Dt.OVERWRITE}operationForChild(e){return Z(this.path)?new Is(this.source,re(),this.snap.getImmediateChild(e)):new Is(this.source,ye(this.path),this.snap)}}/**
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
 */class Br{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Dt.MERGE}operationForChild(e){if(Z(this.path)){const n=this.children.subtree(new fe(e));return n.isEmpty()?null:n.value?new Is(this.source,re(),n.value):new Br(this.source,re(),n)}else return D(X(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Br(this.source,ye(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Wn{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Z(e))return this.isFullyInitialized()&&!this.filtered_;const n=X(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class zk{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Kk(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Mk(o.childName,o.snapshotNode))}),Hr(t,i,"child_removed",e,s,n),Hr(t,i,"child_added",e,s,n),Hr(t,i,"child_moved",r,s,n),Hr(t,i,"child_changed",e,s,n),Hr(t,i,"value",e,s,n),i}function Hr(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>Qk(t,a,l)),o.forEach(a=>{const l=Gk(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function Gk(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Qk(t,e,n){if(e.childName==null||n.childName==null)throw ai("Should only compare child_ events.");const s=new ee(e.childName,e.snapshotNode),i=new ee(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function $a(t,e){return{eventCache:t,serverCache:e}}function $r(t,e,n,s){return $a(new Wn(e,n,s),t.serverCache)}function E0(t,e,n,s){return $a(t.eventCache,new Wn(e,n,s))}function Wa(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Ts(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Eh;const Yk=()=>(Eh||(Eh=new st(N2)),Eh);class be{constructor(e,n=Yk()){this.value=e,this.children=n}static fromObject(e){let n=new be(null);return nt(e,(s,i)=>{n=n.set(new fe(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:re(),value:this.value};if(Z(e))return null;{const s=X(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(ye(e),n);return r!=null?{path:Me(new fe(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Z(e))return this;{const n=X(e),s=this.children.get(n);return s!==null?s.subtree(ye(e)):new be(null)}}set(e,n){if(Z(e))return new be(n,this.children);{const s=X(e),r=(this.children.get(s)||new be(null)).set(ye(e),n),o=this.children.insert(s,r);return new be(this.value,o)}}remove(e){if(Z(e))return this.children.isEmpty()?new be(null):new be(null,this.children);{const n=X(e),s=this.children.get(n);if(s){const i=s.remove(ye(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new be(null):new be(this.value,r)}else return this}}get(e){if(Z(e))return this.value;{const n=X(e),s=this.children.get(n);return s?s.get(ye(e)):null}}setTree(e,n){if(Z(e))return n;{const s=X(e),r=(this.children.get(s)||new be(null)).setTree(ye(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new be(this.value,o)}}fold(e){return this.fold_(re(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(Me(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,re(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(Z(e))return null;{const r=X(e),o=this.children.get(r);return o?o.findOnPath_(ye(e),Me(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,re(),n)}foreachOnPath_(e,n,s){if(Z(e))return this;{this.value&&s(n,this.value);const i=X(e),r=this.children.get(i);return r?r.foreachOnPath_(ye(e),Me(n,i),s):new be(null)}}foreach(e){this.foreach_(re(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(Me(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class Lt{constructor(e){this.writeTree_=e}static empty(){return new Lt(new be(null))}}function Wr(t,e,n){if(Z(e))return new Lt(new be(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Ye(i,e);return r=r.updateChild(o,n),new Lt(t.writeTree_.set(i,r))}else{const i=new be(n),r=t.writeTree_.setTree(e,i);return new Lt(r)}}}function I0(t,e,n){let s=t;return nt(n,(i,r)=>{s=Wr(s,Me(e,i),r)}),s}function T0(t,e){if(Z(e))return Lt.empty();{const n=t.writeTree_.setTree(e,new be(null));return new Lt(n)}}function Ih(t,e){return Cs(t,e)!=null}function Cs(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ye(n.path,e)):null}function C0(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ie,(s,i)=>{e.push(new ee(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new ee(s,i.value))}),e}function Vn(t,e){if(Z(e))return t;{const n=Cs(t,e);return n!=null?new Lt(new be(n)):new Lt(t.writeTree_.subtree(e))}}function Th(t){return t.writeTree_.isEmpty()}function vi(t,e){return S0(re(),t.writeTree_,e)}function S0(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(D(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=S0(Me(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Me(t,".priority"),s)),n}}/**
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
 */function Va(t,e){return P0(e,t)}function Jk(t,e,n,s,i){D(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Wr(t.visibleWrites,e,n)),t.lastWriteId=s}function Xk(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function Zk(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);D(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&eR(a,s.path)?i=!1:xt(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return tR(t),!0;if(s.snap)t.visibleWrites=T0(t.visibleWrites,s.path);else{const a=s.children;nt(a,l=>{t.visibleWrites=T0(t.visibleWrites,Me(s.path,l))})}return!0}else return!1}function eR(t,e){if(t.snap)return xt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&xt(Me(t.path,n),e))return!0;return!1}function tR(t){t.visibleWrites=k0(t.allWrites,nR,re()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function nR(t){return t.visible}function k0(t,e,n){let s=Lt.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)xt(n,o)?(a=Ye(n,o),s=Wr(s,a,r.snap)):xt(o,n)&&(a=Ye(o,n),s=Wr(s,re(),r.snap.getChild(a)));else if(r.children){if(xt(n,o))a=Ye(n,o),s=I0(s,a,r.children);else if(xt(o,n))if(a=Ye(o,n),Z(a))s=I0(s,re(),r.children);else{const l=fs(r.children,X(a));if(l){const c=l.getChild(ye(a));s=Wr(s,re(),c)}}}else throw ai("WriteRecord should have .snap or .children")}}return s}function R0(t,e,n,s,i){if(!s&&!i){const r=Cs(t.visibleWrites,e);if(r!=null)return r;{const o=Vn(t.visibleWrites,e);if(Th(o))return n;if(n==null&&!Ih(o,re()))return null;{const a=n||z.EMPTY_NODE;return vi(o,a)}}}else{const r=Vn(t.visibleWrites,e);if(!i&&Th(r))return n;if(!i&&n==null&&!Ih(r,re()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(xt(c.path,e)||xt(e,c.path))},a=k0(t.allWrites,o,e),l=n||z.EMPTY_NODE;return vi(a,l)}}}function sR(t,e,n){let s=z.EMPTY_NODE;const i=Cs(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Ie,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Vn(t.visibleWrites,e);return n.forEachChild(Ie,(o,a)=>{const l=vi(Vn(r,new fe(o)),a);s=s.updateImmediateChild(o,l)}),C0(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Vn(t.visibleWrites,e);return C0(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function iR(t,e,n,s,i){D(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=Me(e,n);if(Ih(t.visibleWrites,r))return null;{const o=Vn(t.visibleWrites,r);return Th(o)?i.getChild(n):vi(o,i.getChild(n))}}function rR(t,e,n,s){const i=Me(e,n),r=Cs(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Vn(t.visibleWrites,i);return vi(o,s.getNode().getImmediateChild(n))}else return null}function oR(t,e){return Cs(t.visibleWrites,e)}function aR(t,e,n,s,i,r,o){let a;const l=Vn(t.visibleWrites,e),c=Cs(l,re());if(c!=null)a=c;else if(n!=null)a=vi(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),f=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let d=f.getNext();for(;d&&u.length<i;)h(d,s)!==0&&u.push(d),d=f.getNext();return u}else return[]}function lR(){return{visibleWrites:Lt.empty(),allWrites:[],lastWriteId:-1}}function qa(t,e,n,s){return R0(t.writeTree,t.treePath,e,n,s)}function Ch(t,e){return sR(t.writeTree,t.treePath,e)}function A0(t,e,n,s){return iR(t.writeTree,t.treePath,e,n,s)}function ja(t,e){return oR(t.writeTree,Me(t.treePath,e))}function cR(t,e,n,s,i,r){return aR(t.writeTree,t.treePath,e,n,s,i,r)}function Sh(t,e,n){return rR(t.writeTree,t.treePath,e,n)}function N0(t,e){return P0(Me(t.treePath,e),t.writeTree)}function P0(t,e){return{treePath:t,writeTree:e}}/**
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
 */class uR{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;D(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),D(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Lr(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Dr(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,yi(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Lr(s,e.snapshotNode,i.oldSnap));else throw ai("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class hR{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const O0=new hR;class kh{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Wn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Sh(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ts(this.viewCache_),r=cR(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function fR(t){return{filter:t}}function dR(t,e){D(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),D(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function pR(t,e,n,s,i){const r=new uR;let o,a;if(n.type===Dt.OVERWRITE){const c=n;c.source.fromUser?o=Rh(t,e,c.path,c.snap,s,i,r):(D(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!Z(c.path),o=za(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===Dt.MERGE){const c=n;c.source.fromUser?o=gR(t,e,c.path,c.children,s,i,r):(D(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Ah(t,e,c.path,c.children,s,i,a,r))}else if(n.type===Dt.ACK_USER_WRITE){const c=n;c.revert?o=vR(t,e,c.path,s,i,r):o=_R(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===Dt.LISTEN_COMPLETE)o=yR(t,e,n.path,s,r);else throw ai("Unknown operation type: "+n.type);const l=r.getChanges();return mR(e,o,l),{viewCache:o,changes:l}}function mR(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Wa(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(m0(Wa(e)))}}function M0(t,e,n,s,i,r){const o=e.eventCache;if(ja(s,n)!=null)return e;{let a,l;if(Z(n))if(D(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Ts(e),u=c instanceof z?c:z.EMPTY_NODE,h=Ch(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=qa(s,Ts(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=X(n);if(c===".priority"){D(Hn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=A0(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=ye(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=A0(s,n,o.getNode(),l);f!=null?h=o.getNode().getImmediateChild(c).updateChild(u,f):h=o.getNode().getImmediateChild(c)}else h=Sh(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return $r(e,a,o.isFullyInitialized()||Z(n),t.filter.filtersNodes())}}function za(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(Z(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const d=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),d,null)}else{const d=X(n);if(!l.isCompleteForPath(n)&&Hn(n)>1)return e;const p=ye(n),_=l.getNode().getImmediateChild(d).updateChild(p,s);d===".priority"?c=u.updatePriority(l.getNode(),_):c=u.updateChild(l.getNode(),d,_,p,O0,null)}const h=E0(e,c,l.isFullyInitialized()||Z(n),u.filtersNodes()),f=new kh(i,h,r);return M0(t,h,n,i,f,a)}function Rh(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new kh(i,e,r);if(Z(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=$r(e,c,!0,t.filter.filtersNodes());else{const h=X(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=$r(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=ye(n),d=a.getNode().getImmediateChild(h);let p;if(Z(f))p=s;else{const v=u.getCompleteChild(h);v!=null?n0(f)===".priority"&&v.getChild(i0(f)).isEmpty()?p=v:p=v.updateChild(f,s):p=z.EMPTY_NODE}if(d.equals(p))l=e;else{const v=t.filter.updateChild(a.getNode(),h,p,f,u,o);l=$r(e,v,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function x0(t,e){return t.eventCache.isCompleteForChild(e)}function gR(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=Me(n,l);x0(e,X(u))&&(a=Rh(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=Me(n,l);x0(e,X(u))||(a=Rh(t,a,u,c,i,r,o))}),a}function D0(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Ah(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;Z(n)?c=s:c=new be(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const d=e.serverCache.getNode().getImmediateChild(h),p=D0(t,d,f);l=za(t,l,new fe(h),p,i,r,o,a)}}),c.children.inorderTraversal((h,f)=>{const d=!e.serverCache.isCompleteForChild(h)&&f.value===void 0;if(!u.hasChild(h)&&!d){const p=e.serverCache.getNode().getImmediateChild(h),v=D0(t,p,f);l=za(t,l,new fe(h),v,i,r,o,a)}}),l}function _R(t,e,n,s,i,r,o){if(ja(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(Z(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return za(t,e,n,l.getNode().getChild(n),i,r,a,o);if(Z(n)){let c=new be(null);return l.getNode().forEachChild($n,(u,h)=>{c=c.set(new fe(u),h)}),Ah(t,e,n,c,i,r,a,o)}else return e}else{let c=new be(null);return s.foreach((u,h)=>{const f=Me(n,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),Ah(t,e,n,c,i,r,a,o)}}function yR(t,e,n,s,i){const r=e.serverCache,o=E0(e,r.getNode(),r.isFullyInitialized()||Z(n),r.isFiltered());return M0(t,o,n,s,O0,i)}function vR(t,e,n,s,i,r){let o;if(ja(s,n)!=null)return e;{const a=new kh(s,e,i),l=e.eventCache.getNode();let c;if(Z(n)||X(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=qa(s,Ts(e));else{const h=e.serverCache.getNode();D(h instanceof z,"serverChildren would be complete if leaf node"),u=Ch(s,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=X(n);let h=Sh(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,ye(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,z.EMPTY_NODE,ye(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=qa(s,Ts(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||ja(s,re())!=null,$r(e,c,o,t.filter.filtersNodes())}}/**
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
 */class wR{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new _h(s.getIndex()),r=Dk(s);this.processor_=fR(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(z.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(z.EMPTY_NODE,a.getNode(),null),u=new Wn(l,o.isFullyInitialized(),i.filtersNodes()),h=new Wn(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=$a(h,u),this.eventGenerator_=new zk(this.query_)}get query(){return this.query_}}function bR(t){return t.viewCache_.serverCache.getNode()}function ER(t){return Wa(t.viewCache_)}function IR(t,e){const n=Ts(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Z(e)&&!n.getImmediateChild(X(e)).isEmpty())?n.getChild(e):null}function L0(t){return t.eventRegistrations_.length===0}function TR(t,e){t.eventRegistrations_.push(e)}function F0(t,e,n){const s=[];if(n){D(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function U0(t,e,n,s){e.type===Dt.MERGE&&e.source.queryId!==null&&(D(Ts(t.viewCache_),"We should always have a full cache before handling merges"),D(Wa(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=pR(t.processor_,i,e,n,s);return dR(t.processor_,r.viewCache),D(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,B0(t,r.changes,r.viewCache.eventCache.getNode(),null)}function CR(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Ie,(r,o)=>{s.push(yi(r,o))}),n.isFullyInitialized()&&s.push(m0(n.getNode())),B0(t,s,n.getNode(),e)}function B0(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return Kk(t.eventGenerator_,e,n,i)}/**
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
 */let Ka;class H0{constructor(){this.views=new Map}}function SR(t){D(!Ka,"__referenceConstructor has already been defined"),Ka=t}function kR(){return D(Ka,"Reference.ts has not been loaded"),Ka}function RR(t){return t.views.size===0}function Nh(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return D(r!=null,"SyncTree gave us an op for an invalid query."),U0(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(U0(o,e,n,s));return r}}function $0(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=qa(n,i?s:null),l=!1;a?l=!0:s instanceof z?(a=Ch(n,s),l=!1):(a=z.EMPTY_NODE,l=!1);const c=$a(new Wn(a,l,!1),new Wn(s,i,!1));return new wR(e,c)}return o}function AR(t,e,n,s,i,r){const o=$0(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),TR(o,n),CR(o,n)}function NR(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=jn(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(F0(c,n,s)),L0(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(F0(l,n,s)),L0(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!jn(t)&&r.push(new(kR())(e._repo,e._path)),{removed:r,events:o}}function W0(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function qn(t,e){let n=null;for(const s of t.views.values())n=n||IR(s,e);return n}function V0(t,e){if(e._queryParams.loadsAllData())return Ga(t);{const s=e._queryIdentifier;return t.views.get(s)}}function q0(t,e){return V0(t,e)!=null}function jn(t){return Ga(t)!=null}function Ga(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Qa;function PR(t){D(!Qa,"__referenceConstructor has already been defined"),Qa=t}function OR(){return D(Qa,"Reference.ts has not been loaded"),Qa}let MR=1;class j0{constructor(e){this.listenProvider_=e,this.syncPointTree_=new be(null),this.pendingWriteTree_=lR(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function z0(t,e,n,s,i){return Jk(t.pendingWriteTree_,e,n,s,i),i?qr(t,new Is(b0(),e,n)):[]}function wi(t,e,n=!1){const s=Xk(t.pendingWriteTree_,e);if(Zk(t.pendingWriteTree_,e)){let r=new be(null);return s.snap!=null?r=r.set(re(),!0):nt(s.children,o=>{r=r.set(new fe(o),!0)}),qr(t,new Ha(s.path,r,n))}else return[]}function Vr(t,e,n){return qr(t,new Is(wh(),e,n))}function xR(t,e,n){const s=be.fromObject(n);return qr(t,new Br(wh(),e,s))}function DR(t,e){return qr(t,new Ur(wh(),e))}function LR(t,e,n){const s=Mh(t,n);if(s){const i=xh(s),r=i.path,o=i.queryId,a=Ye(r,e),l=new Ur(bh(o),a);return Dh(t,r,l)}else return[]}function Ph(t,e,n,s){const i=e._path,r=t.syncPointTree_.get(i);let o=[];if(r&&(e._queryIdentifier==="default"||q0(r,e))){const a=NR(r,e,n,s);RR(r)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const l=a.removed;o=a.events;const c=l.findIndex(h=>h._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(i,(h,f)=>jn(f));if(c&&!u){const h=t.syncPointTree_.subtree(i);if(!h.isEmpty()){const f=HR(h);for(let d=0;d<f.length;++d){const p=f[d],v=p.query,_=Y0(t,p);t.listenProvider_.startListening(jr(v),Ya(t,v),_.hashFn,_.onComplete)}}}if(!u&&l.length>0&&!s)if(c){const h=null;t.listenProvider_.stopListening(jr(e),h)}else l.forEach(h=>{const f=t.queryToTagMap.get(Ja(h));t.listenProvider_.stopListening(jr(h),f)});$R(t,l)}return o}function FR(t,e,n,s){const i=Mh(t,s);if(i!=null){const r=xh(i),o=r.path,a=r.queryId,l=Ye(o,e),c=new Is(bh(a),l,n);return Dh(t,o,c)}else return[]}function UR(t,e,n,s){const i=Mh(t,s);if(i){const r=xh(i),o=r.path,a=r.queryId,l=Ye(o,e),c=be.fromObject(n),u=new Br(bh(a),l,c);return Dh(t,o,u)}else return[]}function K0(t,e,n){const s=e._path;let i=null,r=!1;t.syncPointTree_.foreachOnPath(s,(h,f)=>{const d=Ye(h,s);i=i||qn(f,d),r=r||jn(f)});let o=t.syncPointTree_.get(s);o?(r=r||jn(o),i=i||qn(o,re())):(o=new H0,t.syncPointTree_=t.syncPointTree_.set(s,o));let a;i!=null?a=!0:(a=!1,i=z.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((f,d)=>{const p=qn(d,re());p&&(i=i.updateImmediateChild(f,p))}));const l=q0(o,e);if(!l&&!e._queryParams.loadsAllData()){const h=Ja(e);D(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const f=WR();t.queryToTagMap.set(h,f),t.tagToQueryMap.set(f,h)}const c=Va(t.pendingWriteTree_,s);let u=AR(o,e,n,c,i,a);if(!l&&!r){const h=V0(o,e);u=u.concat(VR(t,e,h))}return u}function Oh(t,e,n){const s=!0,i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Ye(o,e),c=qn(a,l);if(c)return c});return R0(i,e,r,n,s)}function BR(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const h=Ye(c,n);s=s||qn(u,h)});let i=t.syncPointTree_.get(n);i?s=s||qn(i,re()):(i=new H0,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new Wn(s,!0,!1):null,a=Va(t.pendingWriteTree_,e._path),l=$0(i,e,a,r?o.getNode():z.EMPTY_NODE,r);return ER(l)}function qr(t,e){return G0(e,t.syncPointTree_,null,Va(t.pendingWriteTree_,re()))}function G0(t,e,n,s){if(Z(t.path))return Q0(t,e,n,s);{const i=e.get(re());n==null&&i!=null&&(n=qn(i,re()));let r=[];const o=X(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=N0(s,o);r=r.concat(G0(a,l,c,u))}return i&&(r=r.concat(Nh(i,t,s,n))),r}}function Q0(t,e,n,s){const i=e.get(re());n==null&&i!=null&&(n=qn(i,re()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=N0(s,o),u=t.operationForChild(o);u&&(r=r.concat(Q0(u,a,l,c)))}),i&&(r=r.concat(Nh(i,t,s,n))),r}function Y0(t,e){const n=e.query,s=Ya(t,n);return{hashFn:()=>(bR(e)||z.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?LR(t,n._path,s):DR(t,n._path);{const r=M2(i,n);return Ph(t,n,null,r)}}}}function Ya(t,e){const n=Ja(e);return t.queryToTagMap.get(n)}function Ja(t){return t._path.toString()+"$"+t._queryIdentifier}function Mh(t,e){return t.tagToQueryMap.get(e)}function xh(t){const e=t.indexOf("$");return D(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new fe(t.substr(0,e))}}function Dh(t,e,n){const s=t.syncPointTree_.get(e);D(s,"Missing sync point for query tag that we're tracking");const i=Va(t.pendingWriteTree_,e);return Nh(s,n,i,null)}function HR(t){return t.fold((e,n,s)=>{if(n&&jn(n))return[Ga(n)];{let i=[];return n&&(i=W0(n)),nt(s,(r,o)=>{i=i.concat(o)}),i}})}function jr(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(OR())(t._repo,t._path):t}function $R(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Ja(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function WR(){return MR++}function VR(t,e,n){const s=e._path,i=Ya(t,e),r=Y0(t,n),o=t.listenProvider_.startListening(jr(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)D(!jn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!Z(c)&&u&&jn(u))return[Ga(u).query];{let f=[];return u&&(f=f.concat(W0(u).map(d=>d.query))),nt(h,(d,p)=>{f=f.concat(p)}),f}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(jr(u),Ya(t,u))}}return o}/**
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
 */class Lh{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Lh(n)}node(){return this.node_}}class Fh{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Me(this.path_,e);return new Fh(this.syncTree_,n)}node(){return Oh(this.syncTree_,this.path_)}}const qR=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},J0=function(t,e,n){if(!t||typeof t!="object")return t;if(D(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return jR(t[".sv"],e,n);if(typeof t[".sv"]=="object")return zR(t[".sv"],e);D(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},jR=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:D(!1,"Unexpected server value: "+t)}},zR=function(t,e,n){t.hasOwnProperty("increment")||D(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&D(!1,"Unexpected increment value: "+s);const i=e.node();if(D(i!==null&&typeof i!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},KR=function(t,e,n,s){return Uh(e,new Fh(n,t),s)},X0=function(t,e,n){return Uh(t,new Lh(e),n)};function Uh(t,e,n){const s=t.getPriority().val(),i=J0(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=J0(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Fe(a,Ue(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Fe(i))),o.forEachChild(Ie,(a,l)=>{const c=Uh(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class Bh{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Xa(t,e){let n=e instanceof fe?e:new fe(e),s=t,i=X(n);for(;i!==null;){const r=fs(s.node.children,i)||{children:{},childCount:0};s=new Bh(i,s,r),n=ye(n),i=X(n)}return s}function Ss(t){return t.node.value}function Hh(t,e){t.node.value=e,$h(t)}function Z0(t){return t.node.childCount>0}function GR(t){return Ss(t)===void 0&&!Z0(t)}function Za(t,e){nt(t.node.children,(n,s)=>{e(new Bh(n,t,s))})}function ey(t,e,n,s){n&&!s&&e(t),Za(t,i=>{ey(i,e,!0,s)}),n&&s&&e(t)}function QR(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function zr(t){return new fe(t.parent===null?t.name:zr(t.parent)+"/"+t.name)}function $h(t){t.parent!==null&&YR(t.parent,t.name,t)}function YR(t,e,n){const s=GR(n),i=Pt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,$h(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,$h(t))}/**
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
 */const JR=/[\[\].#$\/\u0000-\u001F\u007F]/,XR=/[\[\].#$\u0000-\u001F\u007F]/,Wh=10*1024*1024,Vh=function(t){return typeof t=="string"&&t.length!==0&&!JR.test(t)},ty=function(t){return typeof t=="string"&&t.length!==0&&!XR.test(t)},ZR=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),ty(t)},qh=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!eh(t)||t&&typeof t=="object"&&Pt(t,".sv")},ny=function(t,e,n,s){s&&e===void 0||el(ga(t,"value"),e,n)},el=function(t,e,n){const s=n instanceof fe?new pk(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Es(s));if(typeof e=="function")throw new Error(t+"contains a function "+Es(s)+" with contents = "+e.toString());if(eh(e))throw new Error(t+"contains "+e.toString()+" "+Es(s));if(typeof e=="string"&&e.length>Wh/3&&_a(e)>Wh)throw new Error(t+"contains a string greater than "+Wh+" utf8 bytes "+Es(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(nt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Vh(o)))throw new Error(t+" contains an invalid key ("+o+") "+Es(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);mk(s,o),el(t,a,s),gk(s)}),i&&r)throw new Error(t+' contains ".value" child '+Es(s)+" in addition to actual children.")}},sy=function(t,e,n,s){if(!(s&&n===void 0)&&!Vh(n))throw new Error(ga(t,e)+'was an invalid key = "'+n+`".  Firebase keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]").`)},jh=function(t,e,n,s){if(!(s&&n===void 0)&&!ty(n))throw new Error(ga(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},e3=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),jh(t,e,n,s)},t3=function(t,e){if(X(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},n3=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Vh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!ZR(n))throw new Error(ga(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class s3{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function iy(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!hh(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function zh(t,e,n){iy(t,n),ry(t,s=>hh(s,e))}function zn(t,e,n){iy(t,n),ry(t,s=>xt(s,e)||xt(e,s))}function ry(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(i3(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function i3(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();vs&&je("event: "+n.toString()),Nr(s)}}}/**
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
 */const r3="repo_interrupt",o3=25;class a3{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new s3,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ba(),this.transactionQueueTree_=new Bh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function l3(t,e,n){if(t.stats_=ah(t.repoInfo_),t.forceRestClient_||F2())t.server_=new Ua(t.repoInfo_,(s,i,r,o)=>{oy(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>ay(t,!0),0);else{if(typeof n!="undefined"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Oe(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new mn(t.repoInfo_,e,(s,i,r,o)=>{oy(t,s,i,r,o)},s=>{ay(t,s)},s=>{u3(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=q2(t.repoInfo_,()=>new jk(t.stats_,t.server_)),t.infoData_=new Hk,t.infoSyncTree_=new j0({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=Vr(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Gh(t,"connected",!1),t.serverSyncTree_=new j0({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);zn(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function c3(t){const n=t.infoData_.getNode(new fe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Kh(t){return qR({timestamp:c3(t)})}function oy(t,e,n,s,i){t.dataUpdateCount++;const r=new fe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=ma(n,c=>Ue(c));o=UR(t.serverSyncTree_,r,l,i)}else{const l=Ue(n);o=FR(t.serverSyncTree_,r,l,i)}else if(s){const l=ma(n,c=>Ue(c));o=xR(t.serverSyncTree_,r,l)}else{const l=Ue(n);o=Vr(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Jh(t,r)),zn(t.eventQueue_,a,o)}function ay(t,e){Gh(t,"connected",e),e===!1&&f3(t)}function u3(t,e){nt(e,(n,s)=>{Gh(t,n,s)})}function Gh(t,e,n){const s=new fe("/.info/"+e),i=Ue(n);t.infoData_.updateSnapshot(s,i);const r=Vr(t.infoSyncTree_,s,i);zn(t.eventQueue_,s,r)}function ly(t){return t.nextWriteId_++}function h3(t,e){const n=BR(t.serverSyncTree_,e);return n!=null?Promise.resolve(n):t.server_.get(e).then(s=>{const i=Ue(s).withIndex(e._queryParams.getIndex()),r=Vr(t.serverSyncTree_,e._path,i);return zh(t.eventQueue_,e._path,r),Promise.resolve(i)},s=>(tl(t,"get for query "+Oe(e)+" failed: "+s),Promise.reject(new Error(s))))}function f3(t){tl(t,"onDisconnectEvents");const e=Kh(t),n=Ba();vh(t.onDisconnect_,re(),(i,r)=>{const o=KR(i,r,t.serverSyncTree_,e);v0(n,i,o)});let s=[];vh(n,re(),(i,r)=>{s=s.concat(Vr(t.serverSyncTree_,i,r));const o=y3(t,i);Jh(t,o)}),t.onDisconnect_=Ba(),zn(t.eventQueue_,re(),s)}function d3(t,e,n){let s;X(e._path)===".info"?s=K0(t.infoSyncTree_,e,n):s=K0(t.serverSyncTree_,e,n),zh(t.eventQueue_,e._path,s)}function Qh(t,e,n){let s;X(e._path)===".info"?s=Ph(t.infoSyncTree_,e,n):s=Ph(t.serverSyncTree_,e,n),zh(t.eventQueue_,e._path,s)}function p3(t){t.persistentConnection_&&t.persistentConnection_.interrupt(r3)}function tl(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),je(n,...e)}function m3(t,e,n,s,i,r){tl(t,"transaction on "+e);const o={path:e,update:n,onComplete:s,status:null,order:C_(),applyLocally:r,retryCount:0,unwatcher:i,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=Yh(t,e,void 0);o.currentInputSnapshot=a;const l=o.update(a.val());if(l===void 0)o.unwatcher(),o.currentOutputSnapshotRaw=null,o.currentOutputSnapshotResolved=null,o.onComplete&&o.onComplete(null,!1,o.currentInputSnapshot);else{el("transaction failed: Data returned ",l,o.path),o.status=0;const c=Xa(t.transactionQueueTree_,e),u=Ss(c)||[];u.push(o),Hh(c,u);let h;typeof l=="object"&&l!==null&&Pt(l,".priority")?(h=fs(l,".priority"),D(qh(h),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):h=(Oh(t.serverSyncTree_,e)||z.EMPTY_NODE).getPriority().val();const f=Kh(t),d=Ue(l,h),p=X0(d,a,f);o.currentOutputSnapshotRaw=d,o.currentOutputSnapshotResolved=p,o.currentWriteId=ly(t);const v=z0(t.serverSyncTree_,e,p,o.currentWriteId,o.applyLocally);zn(t.eventQueue_,e,v),nl(t,t.transactionQueueTree_)}}function Yh(t,e,n){return Oh(t.serverSyncTree_,e,n)||z.EMPTY_NODE}function nl(t,e=t.transactionQueueTree_){if(e||sl(t,e),Ss(e)){const n=uy(t,e);D(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&g3(t,zr(e),n)}else Z0(e)&&Za(e,n=>{nl(t,n)})}function g3(t,e,n){const s=n.map(c=>c.currentWriteId),i=Yh(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];D(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Ye(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{tl(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(wi(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();sl(t,Xa(t.transactionQueueTree_,e)),nl(t,t.transactionQueueTree_),zn(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)Nr(h[f])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{pt("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Jh(t,e)}},o)}function Jh(t,e){const n=cy(t,e),s=zr(n),i=uy(t,n);return _3(t,i,s),s}function _3(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Ye(n,l.path);let u=!1,h;if(D(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(wi(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=o3)u=!0,h="maxretry",i=i.concat(wi(t.serverSyncTree_,l.currentWriteId,!0));else{const f=Yh(t,l.path,o);l.currentInputSnapshot=f;const d=e[a].update(f.val());if(d!==void 0){el("transaction failed: Data returned ",d,l.path);let p=Ue(d);typeof d=="object"&&d!=null&&Pt(d,".priority")||(p=p.updatePriority(f.getPriority()));const _=l.currentWriteId,y=Kh(t),m=X0(p,f,y);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=m,l.currentWriteId=ly(t),o.splice(o.indexOf(_),1),i=i.concat(z0(t.serverSyncTree_,l.path,m,l.currentWriteId,l.applyLocally)),i=i.concat(wi(t.serverSyncTree_,_,!0))}else u=!0,h="nodata",i=i.concat(wi(t.serverSyncTree_,l.currentWriteId,!0))}zn(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}sl(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Nr(s[a]);nl(t,t.transactionQueueTree_)}function cy(t,e){let n,s=t.transactionQueueTree_;for(n=X(e);n!==null&&Ss(s)===void 0;)s=Xa(s,n),e=ye(e),n=X(e);return s}function uy(t,e){const n=[];return hy(t,e,n),n.sort((s,i)=>s.order-i.order),n}function hy(t,e,n){const s=Ss(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Za(e,i=>{hy(t,i,n)})}function sl(t,e){const n=Ss(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Hh(e,n.length>0?n:void 0)}Za(e,s=>{sl(t,s)})}function y3(t,e){const n=zr(cy(t,e)),s=Xa(t.transactionQueueTree_,e);return QR(s,i=>{Xh(t,i)}),Xh(t,s),ey(s,i=>{Xh(t,i)}),n}function Xh(t,e){const n=Ss(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(D(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(D(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(wi(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Hh(e,void 0):n.length=r+1,zn(t.eventQueue_,zr(e),i);for(let o=0;o<s.length;o++)Nr(s[o])}}/**
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
 */function v3(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function w3(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):pt(`Invalid query segment '${n}' in query '${t}'`)}return e}const fy=function(t,e){const n=b3(t),s=n.namespace;n.domain==="firebase.com"&&ws(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&ws("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||R2();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new $2(n.host,n.secure,s,e,i,"",s!==n.subdomain),path:new fe(n.pathString)}},b3=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=v3(t.substring(u,h)));const f=w3(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const d=e.slice(0,c);if(d.toLowerCase()==="localhost")n="localhost";else if(d.split(".").length<=2)n=d;else{const p=e.indexOf(".");s=e.substring(0,p).toLowerCase(),n=e.substring(p+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */class dy{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Oe(this.snapshot.exportVal())}}class py{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class _n{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return Z(this._path)?null:n0(this._path)}get ref(){return new Ft(this._repo,this._path)}get _queryIdentifier(){const e=y0(this._queryParams),n=th(e);return n==="{}"?"default":n}get _queryObject(){return y0(this._queryParams)}isEqual(e){if(e=De(e),!(e instanceof _n))return!1;const n=this._repo===e._repo,s=hh(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+dk(this._path)}}function gy(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function il(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===$n){const s="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==bs)throw new Error(s);if(typeof e!="string")throw new Error(i)}if(t.hasEnd()){if(t.getIndexEndName()!==Bn)throw new Error(s);if(typeof n!="string")throw new Error(i)}}else if(t.getIndex()===Ie){if(e!=null&&!qh(e)||n!=null&&!qh(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(D(t.getIndex()instanceof gh||t.getIndex()===p0,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function _y(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class Ft extends _n{constructor(e,n){super(e,n,new yh,!1)}get parent(){const e=i0(this._path);return e===null?null:new Ft(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ks{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new fe(e),s=rl(this.ref,e);return new ks(this._node.getChild(n),s,Ie)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new ks(i,rl(this.ref,s),Ie)))}hasChild(e){const n=new fe(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function de(t,e){return t=De(t),t._checkNotDeleted("ref"),e!==void 0?rl(t._root,e):t._root}function rl(t,e){return t=De(t),X(t._path)===null?e3("child","path",e,!1):jh("child","path",e,!1),new Ft(t._repo,Me(t._path,e))}function Ct(t){return t=De(t),h3(t._repo,t).then(e=>new ks(e,new Ft(t._repo,t._path),t._queryParams.getIndex()))}class ol{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new dy("value",this,new ks(e.snapshotNode,new Ft(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new py(this,e,n):null}matches(e){return e instanceof ol?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class al{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new py(this,e,n):null}createEvent(e,n){D(e.childName!=null,"Child events should have a childName.");const s=rl(new Ft(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new dy(e.type,this,new ks(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof al?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function E3(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const l=n,c=(u,h)=>{Qh(t._repo,t,a),l(u,h)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new my(n,r||void 0),a=e==="value"?new ol(o):new al(e,o);return d3(t._repo,t,a),()=>Qh(t._repo,t,a)}function Zh(t,e,n,s){return E3(t,"value",e,n,s)}function yy(t,e,n){let s=null;const i=n?new my(n):null;e==="value"?s=new ol(i):e&&(s=new al(e,i)),Qh(t._repo,t,s)}class bi{}class I3 extends bi{constructor(e,n){super();this._value=e,this._key=n}_apply(e){ny("endAt",this._value,e._path,!0);const n=Bk(e._queryParams,this._value,this._key);if(_y(n),il(n),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new _n(e._repo,e._path,n,e._orderByCalled)}}function T3(t,e){return sy("endAt","key",e,!0),new I3(t,e)}class C3 extends bi{constructor(e,n){super();this._value=e,this._key=n}_apply(e){ny("startAt",this._value,e._path,!0);const n=Uk(e._queryParams,this._value,this._key);if(_y(n),il(n),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new _n(e._repo,e._path,n,e._orderByCalled)}}function ef(t=null,e){return sy("startAt","key",e,!0),new C3(t,e)}class S3 extends bi{constructor(e){super();this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new _n(e._repo,e._path,Lk(e._queryParams,this._limit),e._orderByCalled)}}function tf(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new S3(t)}class k3 extends bi{constructor(e){super();this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new _n(e._repo,e._path,Fk(e._queryParams,this._limit),e._orderByCalled)}}function ll(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new k3(t)}class R3 extends bi{constructor(e){super();this._path=e}_apply(e){gy(e,"orderByChild");const n=new fe(this._path);if(Z(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const s=new gh(n),i=g0(e._queryParams,s);return il(i),new _n(e._repo,e._path,i,!0)}}function cl(t){if(t==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(t==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(t==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return jh("orderByChild","path",t,!1),new R3(t)}class A3 extends bi{_apply(e){gy(e,"orderByKey");const n=g0(e._queryParams,$n);return il(n),new _n(e._repo,e._path,n,!0)}}function nf(){return new A3}function Rs(t,...e){let n=De(t);for(const s of e)n=s._apply(n);return n}SR(Ft);PR(Ft);/**
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
 */const N3="FIREBASE_DATABASE_EMULATOR_HOST",sf={};let P3=!1;function O3(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||ws("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),je("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=fy(r,i),a=o.repoInfo,l,c;typeof process!="undefined"&&(c=process.env[N3]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=fy(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new nh(nh.OWNER):new B2(t.name,t.options,e);n3("Invalid Firebase Database URL",o),Z(o.path)||ws("Database URL must point to the root of a Firebase Database (not including a child path).");const h=x3(a,t,u,new U2(t.name,n));return new D3(h,t)}function M3(t,e){const n=sf[e];(!n||n[t.key]!==t)&&ws(`Database ${e}(${t.repoInfo_}) has already been deleted.`),p3(t),delete n[t.key]}function x3(t,e,n,s){let i=sf[e.name];i||(i={},sf[e.name]=i);let r=i[t.toURLString()];return r&&ws("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new a3(t,P3,n,s),i[t.toURLString()]=r,r}class D3{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(l3(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ft(this._repo,re())),this._rootInternal}_delete(){return this._rootInternal!==null&&(M3(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ws("Cannot call "+e+" on a deleted database.")}}function L3(t=Mu(),e){return ps(t,"database").getImmediate({identifier:e})}/**
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
 */function F3(t){T2(ci),Qt(new Ot("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return O3(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),tt(b_,E_,t),tt(b_,E_,"esm2017")}/**
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
 */class U3{constructor(e,n){this.committed=e,this.snapshot=n}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}function St(t,e,n){var s;if(t=De(t),t3("Reference.transaction",t._path),t.key===".length"||t.key===".keys")throw"Reference.transaction failed: "+t.key+" is a read-only object.";const i=(s=n==null?void 0:n.applyLocally)!==null&&s!==void 0?s:!0,r=new pa,o=(l,c,u)=>{let h=null;l?r.reject(l):(h=new ks(u,new Ft(t._repo,t._path),Ie),r.resolve(new U3(c,h)))},a=Zh(t,()=>{});return m3(t._repo,t._path,e,o,a,i),r.promise}mn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};mn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};F3();/**
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
 */const vy="firebasestorage.googleapis.com",wy="storageBucket",B3=2*60*1e3,H3=10*60*1e3;class Se extends hn{constructor(e,n){super(rf(e),`Firebase Storage: ${n} (${rf(e)})`);this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Se.prototype)}_codeEquals(e){return rf(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function rf(t){return"storage/"+t}function of(){const t="An unknown error occurred, please check the error payload for server response.";return new Se("unknown",t)}function $3(t){return new Se("object-not-found","Object '"+t+"' does not exist.")}function W3(t){return new Se("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function V3(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Se("unauthenticated",t)}function q3(){return new Se("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function j3(t){return new Se("unauthorized","User does not have permission to access '"+t+"'.")}function z3(){return new Se("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function by(){return new Se("canceled","User canceled the upload/download.")}function K3(t){return new Se("invalid-url","Invalid URL '"+t+"'.")}function G3(t){return new Se("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function Q3(){return new Se("no-default-bucket","No default bucket found. Did you set the '"+wy+"' property when initializing the app?")}function Ey(){return new Se("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function Y3(){return new Se("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.")}function J3(){return new Se("no-download-url","The given file does not have any download URLs.")}function af(t){return new Se("invalid-argument",t)}function Iy(){return new Se("app-deleted","The Firebase app was deleted.")}function X3(t){return new Se("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Kr(t,e){return new Se("invalid-format","String does not match format '"+t+"': "+e)}function Gr(t){throw new Se("internal-error","Internal error: "+t)}/**
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
 */class mt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=mt.makeFromUrl(e,n)}catch{return new mt(e,"")}if(s.path==="")return s;throw G3(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(w){w.path.charAt(w.path.length-1)==="/"&&(w.path_=w.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(w){w.path_=decodeURIComponent(w.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",d=new RegExp(`^https?://${h}/${u}/b/${i}/o${f}`,"i"),p={bucket:1,path:3},v=n===vy?"(?:storage.googleapis.com|storage.cloud.google.com)":n,_="([^?#]*)",y=new RegExp(`^https?://${v}/${i}/${_}`,"i"),g=[{regex:a,indices:l,postModify:r},{regex:d,indices:p,postModify:c},{regex:y,indices:{bucket:1,path:2},postModify:c}];for(let w=0;w<g.length;w++){const T=g[w],E=T.regex.exec(e);if(E){const I=E[T.indices.bucket];let C=E[T.indices.path];C||(C=""),s=new mt(I,C),T.postModify(s);break}}if(s==null)throw K3(e);return s}}class Z3{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function e6(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(..._){c||(c=!0,e.apply(null,_))}function h(_){i=setTimeout(()=>{i=null,t(d,l())},_)}function f(){r&&clearTimeout(r)}function d(_,...y){if(c){f();return}if(_){f(),u.call(null,_,...y);return}if(l()||o){f(),u.call(null,_,...y);return}s<64&&(s*=2);let g;a===1?(a=2,g=0):g=(s+Math.random())*1e3,h(g)}let p=!1;function v(_){p||(p=!0,f(),!c&&(i!==null?(_||(a=2),clearTimeout(i),h(0)):_||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,v(!0)},n),v}function t6(t){t(!1)}/**
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
 */function n6(t){return t!==void 0}function s6(t){return typeof t=="function"}function i6(t){return typeof t=="object"&&!Array.isArray(t)}function ul(t){return typeof t=="string"||t instanceof String}function Ty(t){return lf()&&t instanceof Blob}function lf(){return typeof Blob!="undefined"}function Cy(t,e,n,s){if(s<e)throw af(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw af(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Qr(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function Sy(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var As;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(As||(As={}));/**
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
 */class r6{constructor(e,n,s,i,r,o,a,l,c,u,h){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,d)=>{this.resolve_=f,this.reject_=d,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new hl(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===As.NO_ERROR,l=r.getStatus();if(!a||this.isRetryStatusCode_(l)){const u=r.getErrorCode()===As.ABORT;s(!1,new hl(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;s(!0,new hl(c,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());n6(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=of();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?Iy():by();o(l)}else{const l=z3();o(l)}};this.canceled_?n(!1,new hl(!1,null,!0)):this.backoffId_=e6(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&t6(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,r=this.additionalRetryCodes_.indexOf(e)!==-1;return n||i||r}}class hl{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function o6(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function a6(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function l6(t,e){e&&(t["X-Firebase-GMPID"]=e)}function c6(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function u6(t,e,n,s,i,r){const o=Sy(t.urlParams),a=t.url+o,l=Object.assign({},t.headers);return l6(l,e),o6(l,n),a6(l,r),c6(l,s),new r6(a,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i)}/**
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
 */function h6(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function f6(...t){const e=h6();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(lf())return new Blob(t);throw new Se("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function d6(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function p6(t){return atob(t)}/**
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
 */const Zt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class cf{constructor(e,n){this.data=e,this.contentType=n||null}}function m6(t,e){switch(t){case Zt.RAW:return new cf(ky(e));case Zt.BASE64:case Zt.BASE64URL:return new cf(Ry(t,e));case Zt.DATA_URL:return new cf(_6(e),y6(e))}throw of()}function ky(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)==55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)==56320))e.push(239,191,189);else{const r=s,o=t.charCodeAt(++n);s=65536|(r&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)==56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function g6(t){let e;try{e=decodeURIComponent(t)}catch{throw Kr(Zt.DATA_URL,"Malformed data URL.")}return ky(e)}function Ry(t,e){switch(t){case Zt.BASE64:{const i=e.indexOf("-")!==-1,r=e.indexOf("_")!==-1;if(i||r)throw Kr(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Zt.BASE64URL:{const i=e.indexOf("+")!==-1,r=e.indexOf("/")!==-1;if(i||r)throw Kr(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=p6(e)}catch{throw Kr(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let i=0;i<n.length;i++)s[i]=n.charCodeAt(i);return s}class Ay{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Kr(Zt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=v6(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-";base64".length):s),this.rest=e.substring(e.indexOf(",")+1)}}function _6(t){const e=new Ay(t);return e.base64?Ry(Zt.BASE64,e.rest):g6(e.rest)}function y6(t){return new Ay(t).contentType}function v6(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Kn{constructor(e,n){let s=0,i="";Ty(e)?(this.data_=e,s=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Ty(this.data_)){const s=this.data_,i=d6(s,e,n);return i===null?null:new Kn(i)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new Kn(s,!0)}}static getBlob(...e){if(lf()){const n=e.map(s=>s instanceof Kn?s.data_:s);return new Kn(f6.apply(null,n))}else{const n=e.map(o=>ul(o)?m6(Zt.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const i=new Uint8Array(s);let r=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[r++]=o[a]}),new Kn(i,!0)}}uploadData(){return this.data_}}/**
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
 */function Ny(t){let e;try{e=JSON.parse(t)}catch{return null}return i6(e)?e:null}/**
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
 */function w6(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function b6(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function Py(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function E6(t,e){return e}class Je{constructor(e,n,s,i){this.server=e,this.local=n||e,this.writable=!!s,this.xform=i||E6}}let fl=null;function I6(t){return!ul(t)||t.length<2?t:Py(t)}function Oy(){if(fl)return fl;const t=[];t.push(new Je("bucket")),t.push(new Je("generation")),t.push(new Je("metageneration")),t.push(new Je("name","fullPath",!0));function e(r,o){return I6(o)}const n=new Je("name");n.xform=e,t.push(n);function s(r,o){return o!==void 0?Number(o):o}const i=new Je("size");return i.xform=s,t.push(i),t.push(new Je("timeCreated")),t.push(new Je("updated")),t.push(new Je("md5Hash",null,!0)),t.push(new Je("cacheControl",null,!0)),t.push(new Je("contentDisposition",null,!0)),t.push(new Je("contentEncoding",null,!0)),t.push(new Je("contentLanguage",null,!0)),t.push(new Je("contentType",null,!0)),t.push(new Je("metadata","customMetadata",!0)),fl=t,fl}function T6(t,e){function n(){const s=t.bucket,i=t.fullPath,r=new mt(s,i);return e._makeStorageReference(r)}Object.defineProperty(t,"ref",{get:n})}function C6(t,e,n){const s={};s.type="file";const i=n.length;for(let r=0;r<i;r++){const o=n[r];s[o.local]=o.xform(s,e[o.server])}return T6(s,t),s}function My(t,e,n){const s=Ny(e);return s===null?null:C6(t,s,n)}function S6(t,e,n,s){const i=Ny(e);if(i===null||!ul(i.downloadTokens))return null;const r=i.downloadTokens;if(r.length===0)return null;const o=encodeURIComponent;return r.split(",").map(c=>{const u=t.bucket,h=t.fullPath,f="/b/"+o(u)+"/o/"+o(h),d=Qr(f,n,s),p=Sy({alt:"media",token:c});return d+p})[0]}function xy(t,e){const n={},s=e.length;for(let i=0;i<s;i++){const r=e[i];r.writable&&(n[r.server]=t[r.local])}return JSON.stringify(n)}class Ei{constructor(e,n,s,i){this.url=e,this.method=n,this.handler=s,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function yn(t){if(!t)throw of()}function uf(t,e){function n(s,i){const r=My(t,i,e);return yn(r!==null),r}return n}function k6(t,e){function n(s,i){const r=My(t,i,e);return yn(r!==null),S6(r,i,t.host,t._protocol)}return n}function Yr(t){function e(n,s){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=q3():i=V3():n.getStatus()===402?i=W3(t.bucket):n.getStatus()===403?i=j3(t.path):i=s,i.serverResponse=s.serverResponse,i}return e}function Dy(t){const e=Yr(t);function n(s,i){let r=e(s,i);return s.getStatus()===404&&(r=$3(t.path)),r.serverResponse=i.serverResponse,r}return n}function R6(t,e,n){const s=e.fullServerUrl(),i=Qr(s,t.host,t._protocol),r="GET",o=t.maxOperationRetryTime,a=new Ei(i,r,uf(t,n),o);return a.errorHandler=Dy(e),a}function A6(t,e,n){const s=e.fullServerUrl(),i=Qr(s,t.host,t._protocol),r="GET",o=t.maxOperationRetryTime,a=new Ei(i,r,k6(t,n),o);return a.errorHandler=Dy(e),a}function N6(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Ly(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=N6(null,e)),s}function P6(t,e,n,s,i){const r=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let g="";for(let w=0;w<2;w++)g=g+Math.random().toString().slice(2);return g}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=Ly(e,s,i),u=xy(c,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,f=`\r
--`+l+"--",d=Kn.getBlob(h,s,f);if(d===null)throw Ey();const p={name:c.fullPath},v=Qr(r,t.host,t._protocol),_="POST",y=t.maxUploadRetryTime,m=new Ei(v,_,uf(t,n),y);return m.urlParams=p,m.headers=o,m.body=d.uploadData(),m.errorHandler=Yr(e),m}class dl{constructor(e,n,s,i){this.current=e,this.total=n,this.finalized=!!s,this.metadata=i||null}}function hf(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{yn(!1)}return yn(!!n&&(e||["active"]).indexOf(n)!==-1),n}function O6(t,e,n,s,i){const r=e.bucketOnlyServerUrl(),o=Ly(e,s,i),a={name:o.fullPath},l=Qr(r,t.host,t._protocol),c="POST",u={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${s.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=xy(o,n),f=t.maxUploadRetryTime;function d(v){hf(v);let _;try{_=v.getResponseHeader("X-Goog-Upload-URL")}catch{yn(!1)}return yn(ul(_)),_}const p=new Ei(l,c,d,f);return p.urlParams=a,p.headers=u,p.body=h,p.errorHandler=Yr(e),p}function M6(t,e,n,s){const i={"X-Goog-Upload-Command":"query"};function r(c){const u=hf(c,["active","final"]);let h=null;try{h=c.getResponseHeader("X-Goog-Upload-Size-Received")}catch{yn(!1)}h||yn(!1);const f=Number(h);return yn(!isNaN(f)),new dl(f,s.size(),u==="final")}const o="POST",a=t.maxUploadRetryTime,l=new Ei(n,o,r,a);return l.headers=i,l.errorHandler=Yr(e),l}const Fy=256*1024;function x6(t,e,n,s,i,r,o,a){const l=new dl(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=s.size()),s.size()!==l.total)throw Y3();const c=l.total-l.current;let u=c;i>0&&(u=Math.min(u,i));const h=l.current,f=h+u,p={"X-Goog-Upload-Command":u===c?"upload, finalize":"upload","X-Goog-Upload-Offset":`${l.current}`},v=s.slice(h,f);if(v===null)throw Ey();function _(w,T){const E=hf(w,["active","final"]),I=l.current+u,C=s.size();let k;return E==="final"?k=uf(e,r)(w,T):k=null,new dl(I,C,E==="final",k)}const y="POST",m=e.maxUploadRetryTime,g=new Ei(n,y,_,m);return g.headers=p,g.body=v.uploadData(),g.progressCallback=a||null,g.errorHandler=Yr(t),g}const it={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function ff(t){switch(t){case"running":case"pausing":case"canceling":return it.RUNNING;case"paused":return it.PAUSED;case"success":return it.SUCCESS;case"canceled":return it.CANCELED;case"error":return it.ERROR;default:return it.ERROR}}/**
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
 */class D6{constructor(e,n,s){if(s6(e)||n!=null||s!=null)this.next=e,this.error=n!=null?n:void 0,this.complete=s!=null?s:void 0;else{const r=e;this.next=r.next,this.error=r.error,this.complete=r.complete}}}/**
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
 */function Ii(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class L6{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=As.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=As.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=As.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,i){if(this.sent_)throw Gr("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const r in i)i.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,i[r].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Gr("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Gr("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Gr("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Gr("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class F6 extends L6{initXhr(){this.xhr_.responseType="text"}}function Ti(){return new F6}/**
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
 */class U6{constructor(e,n,s=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=s,this._mappings=Oy(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{this._request=void 0,this._chunkMultiplier=1,i._codeEquals("canceled")?(this._needToFetchStatus=!0,this.completeTransitions_()):(this._error=i,this._transition("error"))},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals("canceled")?this.completeTransitions_():(this._error=i,this._transition("error"))},this._promise=new Promise((i,r)=>{this._resolve=i,this._reject=r,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this._continueUpload():this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,s])=>{switch(this._state){case"running":e(n,s);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const s=O6(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(s,Ti,e,n);this._request=i,i.getPromise().then(r=>{this._request=void 0,this._uploadUrl=r,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,s)=>{const i=M6(this._ref.storage,this._ref._location,e,this._blob),r=this._ref.storage._makeRequest(i,Ti,n,s);this._request=r,r.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=Fy*this._chunkMultiplier,n=new dl(this._transferred,this._blob.size()),s=this._uploadUrl;this._resolveToken((i,r)=>{let o;try{o=x6(this._ref._location,this._ref.storage,s,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const a=this._ref.storage._makeRequest(o,Ti,i,r);this._request=a,a.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Fy*this._chunkMultiplier<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const s=R6(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(s,Ti,e,n);this._request=i,i.getPromise().then(r=>{this._request=void 0,this._metadata=r,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const s=P6(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(s,Ti,e,n);this._request=i,i.getPromise().then(r=>{this._request=void 0,this._metadata=r,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":this._state=e,this._request!==void 0&&this._request.cancel();break;case"pausing":this._state=e,this._request!==void 0&&this._request.cancel();break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=by(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=ff(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,s,i){const r=new D6(n||void 0,s||void 0,i||void 0);return this._addObserver(r),()=>{this._removeObserver(r)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(ff(this._state)){case it.SUCCESS:Ii(this._resolve.bind(null,this.snapshot))();break;case it.CANCELED:case it.ERROR:const n=this._reject;Ii(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(ff(this._state)){case it.RUNNING:case it.PAUSED:e.next&&Ii(e.next.bind(e,this.snapshot))();break;case it.SUCCESS:e.complete&&Ii(e.complete.bind(e))();break;case it.CANCELED:case it.ERROR:e.error&&Ii(e.error.bind(e,this._error))();break;default:e.error&&Ii(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class Ns{constructor(e,n){this._service=e,n instanceof mt?this._location=n:this._location=mt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ns(e,n)}get root(){const e=new mt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Py(this._location.path)}get storage(){return this._service}get parent(){const e=w6(this._location.path);if(e===null)return null;const n=new mt(this._location.bucket,e);return new Ns(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw X3(e)}}function B6(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new U6(t,new Kn(e),n)}function H6(t){t._throwIfRoot("getDownloadURL");const e=A6(t.storage,t._location,Oy());return t.storage.makeRequestWithTokens(e,Ti).then(n=>{if(n===null)throw J3();return n})}function $6(t,e){const n=b6(t._location.path,e),s=new mt(t._location.bucket,n);return new Ns(t.storage,s)}/**
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
 */function W6(t){return/^[A-Za-z]+:\/\//.test(t)}function V6(t,e){return new Ns(t,e)}function Uy(t,e){if(t instanceof df){const n=t;if(n._bucket==null)throw Q3();const s=new Ns(n,n._bucket);return e!=null?Uy(s,e):s}else return e!==void 0?$6(t,e):t}function q6(t,e){if(e&&W6(e)){if(t instanceof df)return V6(t,e);throw af("To use ref(service, url), the first argument must be a Storage instance.")}else return Uy(t,e)}function By(t,e){const n=e==null?void 0:e[wy];return n==null?null:mt.makeFromBucketSpec(n,t)}class df{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=vy,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=B3,this._maxUploadRetryTime=H3,this._requests=new Set,i!=null?this._bucket=mt.makeFromBucketSpec(i,this._host):this._bucket=By(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=mt.makeFromBucketSpec(this._url,e):this._bucket=By(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Cy("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Cy("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ns(this,e)}_makeRequest(e,n,s,i){if(this._deleted)return new Z3(Iy());{const r=u6(e,this._appId,s,i,n,this._firebaseVersion);return this._requests.add(r),r.getPromise().then(()=>this._requests.delete(r),()=>this._requests.delete(r)),r}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const Hy="@firebase/storage",$y="0.9.0";/**
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
 */const Wy="storage";function j6(t,e,n){return t=De(t),B6(t,e,n)}function Ci(t){return t=De(t),H6(t)}function Ps(t,e){return t=De(t),q6(t,e)}function z6(t=Mu(),e){return t=De(t),ps(t,Wy).getImmediate({identifier:e})}function K6(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new df(n,s,i,e,ci)}function G6(){Qt(new Ot(Wy,K6,"PUBLIC").setMultipleInstances(!0)),tt(Hy,$y,""),tt(Hy,$y,"esm2017")}G6();function Q6(t){return Array.prototype.slice.call(t)}function Vy(t){return new Promise(function(e,n){t.onsuccess=function(){e(t.result)},t.onerror=function(){n(t.error)}})}function pf(t,e,n){var s,i=new Promise(function(r,o){s=t[e].apply(t,n),Vy(s).then(r,o)});return i.request=s,i}function Y6(t,e,n){var s=pf(t,e,n);return s.then(function(i){if(!!i)return new Jr(i,s.request)})}function Si(t,e,n){n.forEach(function(s){Object.defineProperty(t.prototype,s,{get:function(){return this[e][s]},set:function(i){this[e][s]=i}})})}function mf(t,e,n,s){s.forEach(function(i){i in n.prototype&&(t.prototype[i]=function(){return pf(this[e],i,arguments)})})}function pl(t,e,n,s){s.forEach(function(i){i in n.prototype&&(t.prototype[i]=function(){return this[e][i].apply(this[e],arguments)})})}function qy(t,e,n,s){s.forEach(function(i){i in n.prototype&&(t.prototype[i]=function(){return Y6(this[e],i,arguments)})})}function Os(t){this._index=t}Si(Os,"_index",["name","keyPath","multiEntry","unique"]);mf(Os,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]);qy(Os,"_index",IDBIndex,["openCursor","openKeyCursor"]);function Jr(t,e){this._cursor=t,this._request=e}Si(Jr,"_cursor",["direction","key","primaryKey","value"]);mf(Jr,"_cursor",IDBCursor,["update","delete"]);["advance","continue","continuePrimaryKey"].forEach(function(t){t in IDBCursor.prototype&&(Jr.prototype[t]=function(){var e=this,n=arguments;return Promise.resolve().then(function(){return e._cursor[t].apply(e._cursor,n),Vy(e._request).then(function(s){if(!!s)return new Jr(s,e._request)})})})});function en(t){this._store=t}en.prototype.createIndex=function(){return new Os(this._store.createIndex.apply(this._store,arguments))};en.prototype.index=function(){return new Os(this._store.index.apply(this._store,arguments))};Si(en,"_store",["name","keyPath","indexNames","autoIncrement"]);mf(en,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]);qy(en,"_store",IDBObjectStore,["openCursor","openKeyCursor"]);pl(en,"_store",IDBObjectStore,["deleteIndex"]);function Xr(t){this._tx=t,this.complete=new Promise(function(e,n){t.oncomplete=function(){e()},t.onerror=function(){n(t.error)},t.onabort=function(){n(t.error)}})}Xr.prototype.objectStore=function(){return new en(this._tx.objectStore.apply(this._tx,arguments))};Si(Xr,"_tx",["objectStoreNames","mode"]);pl(Xr,"_tx",IDBTransaction,["abort"]);function ml(t,e,n){this._db=t,this.oldVersion=e,this.transaction=new Xr(n)}ml.prototype.createObjectStore=function(){return new en(this._db.createObjectStore.apply(this._db,arguments))};Si(ml,"_db",["name","version","objectStoreNames"]);pl(ml,"_db",IDBDatabase,["deleteObjectStore","close"]);function gl(t){this._db=t}gl.prototype.transaction=function(){return new Xr(this._db.transaction.apply(this._db,arguments))};Si(gl,"_db",["name","version","objectStoreNames"]);pl(gl,"_db",IDBDatabase,["close"]);["openCursor","openKeyCursor"].forEach(function(t){[en,Os].forEach(function(e){t in e.prototype&&(e.prototype[t.replace("open","iterate")]=function(){var n=Q6(arguments),s=n[n.length-1],i=this._store||this._index,r=i[t].apply(i,n.slice(0,-1));r.onsuccess=function(){s(r.result)}})})});[Os,en].forEach(function(t){t.prototype.getAll||(t.prototype.getAll=function(e,n){var s=this,i=[];return new Promise(function(r){s.iterateCursor(e,function(o){if(!o){r(i);return}if(i.push(o.value),n!==void 0&&i.length==n){r(i);return}o.continue()})})})});function J6(t,e,n){var s=pf(indexedDB,"open",[t,e]),i=s.request;return i&&(i.onupgradeneeded=function(r){n&&n(new ml(i.result,r.oldVersion,i.transaction))}),s.then(function(r){return new gl(r)})}const jy="@firebase/installations",gf="0.5.4";/**
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
 */const zy=1e4,Ky=`w:${gf}`,Gy="FIS_v2",X6="https://firebaseinstallations.googleapis.com/v1",Z6=60*60*1e3,eA="installations",tA="Installations";/**
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
 */const nA={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Ms=new hs(eA,tA,nA);function Qy(t){return t instanceof hn&&t.code.includes("request-failed")}/**
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
 */function Yy({projectId:t}){return`${X6}/projects/${t}/installations`}function Jy(t){return{token:t.token,requestStatus:2,expiresIn:iA(t.expiresIn),creationTime:Date.now()}}async function Xy(t,e){const s=(await e.json()).error;return Ms.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Zy({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function sA(t,{refreshToken:e}){const n=Zy(t);return n.append("Authorization",rA(e)),n}async function ev(t){const e=await t();return e.status>=500&&e.status<600?t():e}function iA(t){return Number(t.replace("s","000"))}function rA(t){return`${Gy} ${t}`}/**
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
 */async function oA(t,{fid:e}){const n=Yy(t),s=Zy(t),i={fid:e,authVersion:Gy,appId:t.appId,sdkVersion:Ky},r={method:"POST",headers:s,body:JSON.stringify(i)},o=await ev(()=>fetch(n,r));if(o.ok){const a=await o.json();return{fid:a.fid||e,registrationStatus:2,refreshToken:a.refreshToken,authToken:Jy(a.authToken)}}else throw await Xy("Create Installation",o)}/**
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
 */function tv(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function aA(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const lA=/^[cdef][\w-]{21}$/,_f="";function cA(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=uA(t);return lA.test(n)?n:_f}catch{return _f}}function uA(t){return aA(t).substr(0,22)}/**
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
 */function _l(t){return`${t.appName}!${t.appId}`}/**
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
 */const nv=new Map;function sv(t,e){const n=_l(t);iv(n,e),hA(n,e)}function iv(t,e){const n=nv.get(t);if(!!n)for(const s of n)s(e)}function hA(t,e){const n=fA();n&&n.postMessage({key:t,fid:e}),dA()}let xs=null;function fA(){return!xs&&"BroadcastChannel"in self&&(xs=new BroadcastChannel("[Firebase] FID Change"),xs.onmessage=t=>{iv(t.data.key,t.data.fid)}),xs}function dA(){nv.size===0&&xs&&(xs.close(),xs=null)}/**
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
 */const pA="firebase-installations-database",mA=1,Ds="firebase-installations-store";let yf=null;function vf(){return yf||(yf=J6(pA,mA,t=>{switch(t.oldVersion){case 0:t.createObjectStore(Ds)}})),yf}async function yl(t,e){const n=_l(t),i=(await vf()).transaction(Ds,"readwrite"),r=i.objectStore(Ds),o=await r.get(n);return await r.put(e,n),await i.complete,(!o||o.fid!==e.fid)&&sv(t,e.fid),e}async function rv(t){const e=_l(t),s=(await vf()).transaction(Ds,"readwrite");await s.objectStore(Ds).delete(e),await s.complete}async function vl(t,e){const n=_l(t),i=(await vf()).transaction(Ds,"readwrite"),r=i.objectStore(Ds),o=await r.get(n),a=e(o);return a===void 0?await r.delete(n):await r.put(a,n),await i.complete,a&&(!o||o.fid!==a.fid)&&sv(t,a.fid),a}/**
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
 */async function wf(t){let e;const n=await vl(t,s=>{const i=gA(s),r=_A(t,i);return e=r.registrationPromise,r.installationEntry});return n.fid===_f?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function gA(t){const e=t||{fid:cA(),registrationStatus:0};return av(e)}function _A(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Ms.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=yA(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:vA(t)}:{installationEntry:e}}async function yA(t,e){try{const n=await oA(t,e);return yl(t,n)}catch(n){throw Qy(n)&&n.customData.serverCode===409?await rv(t):await yl(t,{fid:e.fid,registrationStatus:0}),n}}async function vA(t){let e=await ov(t);for(;e.registrationStatus===1;)await tv(100),e=await ov(t);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await wf(t);return s||n}return e}function ov(t){return vl(t,e=>{if(!e)throw Ms.create("installation-not-found");return av(e)})}function av(t){return wA(t)?{fid:t.fid,registrationStatus:0}:t}function wA(t){return t.registrationStatus===1&&t.registrationTime+zy<Date.now()}/**
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
 */async function bA({appConfig:t,platformLoggerProvider:e},n){const s=EA(t,n),i=sA(t,n),r=e.getImmediate({optional:!0});r&&i.append("x-firebase-client",r.getPlatformInfoString());const o={installation:{sdkVersion:Ky}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await ev(()=>fetch(s,a));if(l.ok){const c=await l.json();return Jy(c)}else throw await Xy("Generate Auth Token",l)}function EA(t,{fid:e}){return`${Yy(t)}/${e}/authTokens:generate`}/**
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
 */async function bf(t,e=!1){let n;const s=await vl(t.appConfig,r=>{if(!cv(r))throw Ms.create("not-registered");const o=r.authToken;if(!e&&CA(o))return r;if(o.requestStatus===1)return n=IA(t,e),r;{if(!navigator.onLine)throw Ms.create("app-offline");const a=kA(r);return n=TA(t,a),a}});return n?await n:s.authToken}async function IA(t,e){let n=await lv(t.appConfig);for(;n.authToken.requestStatus===1;)await tv(100),n=await lv(t.appConfig);const s=n.authToken;return s.requestStatus===0?bf(t,e):s}function lv(t){return vl(t,e=>{if(!cv(e))throw Ms.create("not-registered");const n=e.authToken;return RA(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function TA(t,e){try{const n=await bA(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await yl(t.appConfig,s),n}catch(n){if(Qy(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await rv(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await yl(t.appConfig,s)}throw n}}function cv(t){return t!==void 0&&t.registrationStatus===2}function CA(t){return t.requestStatus===2&&!SA(t)}function SA(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Z6}function kA(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function RA(t){return t.requestStatus===1&&t.requestTime+zy<Date.now()}/**
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
 */async function AA(t){const e=t,{installationEntry:n,registrationPromise:s}=await wf(e.appConfig);return s?s.catch(console.error):bf(e).catch(console.error),n.fid}/**
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
 */async function NA(t,e=!1){const n=t;return await PA(n.appConfig),(await bf(n,e)).token}async function PA(t){const{registrationPromise:e}=await wf(t);e&&await e}/**
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
 */function OA(t){if(!t||!t.options)throw Ef("App Configuration");if(!t.name)throw Ef("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Ef(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Ef(t){return Ms.create("missing-app-config-values",{valueName:t})}/**
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
 */const uv="installations",MA="installations-internal",xA=t=>{const e=t.getProvider("app").getImmediate(),n=OA(e),s=ps(e,"platform-logger");return{app:e,appConfig:n,platformLoggerProvider:s,_delete:()=>Promise.resolve()}},DA=t=>{const e=t.getProvider("app").getImmediate(),n=ps(e,uv).getImmediate();return{getId:()=>AA(n),getToken:i=>NA(n,i)}};function LA(){Qt(new Ot(uv,xA,"PUBLIC")),Qt(new Ot(MA,DA,"PRIVATE"))}LA();tt(jy,gf);tt(jy,gf,"esm2017");/**
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
 */const If="analytics",FA="firebase_id",UA="origin",BA=60*1e3,HA="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",hv="https://www.googletagmanager.com/gtag/js";/**
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
 */const gt=new ya("@firebase/analytics");/**
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
 */function fv(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function $A(t,e){const n=document.createElement("script");n.src=`${hv}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function WA(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function VA(t,e,n,s,i,r){const o=s[i];try{if(o)await e[o];else{const l=(await fv(n)).find(c=>c.measurementId===i);l&&await e[l.appId]}}catch(a){gt.error(a)}t("config",i,r)}async function qA(t,e,n,s,i){try{let r=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await fv(n);for(const l of o){const c=a.find(h=>h.measurementId===l),u=c&&e[c.appId];if(u)r.push(u);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),t("event",s,i||{})}catch(r){gt.error(r)}}function jA(t,e,n,s){async function i(r,o,a){try{r==="event"?await qA(t,e,n,o,a):r==="config"?await VA(t,e,n,s,o,a):t("set",o)}catch(l){gt.error(l)}}return i}function zA(t,e,n,s,i){let r=function(...o){window[s].push(arguments)};return window[i]&&typeof window[i]=="function"&&(r=window[i]),window[i]=jA(r,t,e,n),{gtagCore:r,wrappedGtag:window[i]}}function KA(){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(hv))return e;return null}/**
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
 */const GA={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},kt=new hs("analytics","Analytics",GA);/**
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
 */const QA=30,YA=1e3;class JA{constructor(e={},n=YA){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const dv=new JA;function XA(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function ZA(t){var e;const{appId:n,apiKey:s}=t,i={method:"GET",headers:XA(s)},r=HA.replace("{app-id}",n),o=await fetch(r,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();((e=l.error)===null||e===void 0?void 0:e.message)&&(a=l.error.message)}catch{}throw kt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function e4(t,e=dv,n){const{appId:s,apiKey:i,measurementId:r}=t.options;if(!s)throw kt.create("no-app-id");if(!i){if(r)return{measurementId:r,appId:s};throw kt.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new s4;return setTimeout(async()=>{a.abort()},n!==void 0?n:BA),pv({appId:s,apiKey:i,measurementId:r},o,a,e)}async function pv(t,{throttleEndTimeMillis:e,backoffCount:n},s,i=dv){const{appId:r,measurementId:o}=t;try{await t4(s,e)}catch(a){if(o)return gt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${a.message}]`),{appId:r,measurementId:o};throw a}try{const a=await ZA(t);return i.deleteThrottleMetadata(r),a}catch(a){if(!n4(a)){if(i.deleteThrottleMetadata(r),o)return gt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${a.message}]`),{appId:r,measurementId:o};throw a}const l=Number(a.customData.httpStatus)===503?Rg(n,i.intervalMillis,QA):Rg(n,i.intervalMillis),c={throttleEndTimeMillis:Date.now()+l,backoffCount:n+1};return i.setThrottleMetadata(r,c),gt.debug(`Calling attemptFetch again in ${l} millis`),pv(t,c,s,i)}}function t4(t,e){return new Promise((n,s)=>{const i=Math.max(e-Date.now(),0),r=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(r),s(kt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function n4(t){if(!(t instanceof hn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class s4{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}/**
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
 */async function i4(){if(PT())try{await OT()}catch(t){return gt.warn(kt.create("indexeddb-unavailable",{errorInfo:t}).message),!1}else return gt.warn(kt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function r4(t,e,n,s,i,r,o){var a;const l=e4(t);l.then(d=>{n[d.measurementId]=d.appId,t.options.measurementId&&d.measurementId!==t.options.measurementId&&gt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${d.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(d=>gt.error(d)),e.push(l);const c=i4().then(d=>{if(d)return s.getId()}),[u,h]=await Promise.all([l,c]);KA()||$A(r,u.measurementId),i("js",new Date);const f=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return f[UA]="firebase",f.update=!0,h!=null&&(f[FA]=h),i("config",u.measurementId,f),u.measurementId}/**
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
 */class o4{constructor(e){this.app=e}_delete(){return delete Zr[this.app.options.appId],Promise.resolve()}}let Zr={},mv=[];const gv={};let Tf="dataLayer",a4="gtag",_v,yv,vv=!1;function l4(){const t=[];if(Ig()&&t.push("This is a browser extension environment."),MT()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,i)=>`(${i+1}) ${s}`).join(" "),n=kt.create("invalid-analytics-context",{errorInfo:e});gt.warn(n.message)}}function c4(t,e,n){l4();const s=t.options.appId;if(!s)throw kt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)gt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw kt.create("no-api-key");if(Zr[s]!=null)throw kt.create("already-exists",{id:s});if(!vv){WA(Tf);const{wrappedGtag:r,gtagCore:o}=zA(Zr,mv,gv,Tf,a4);yv=r,_v=o,vv=!0}return Zr[s]=r4(t,mv,gv,e,_v,Tf,n),new o4(t)}/**
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
 */async function u4(t,e,n,s,i){if(i&&i.global){t("event",n,s);return}else{const r=await e,o=Object.assign(Object.assign({},s),{send_to:r});t("event",n,o)}}function h4(t,e={}){const n=ps(t,If);if(n.isInitialized()){const i=n.getImmediate();if(wr(e,n.getOptions()))return i;throw kt.create("already-initialized")}return n.initialize({options:e})}function f4(t,e,n,s){t=De(t),u4(yv,Zr[t.app.options.appId],e,n,s).catch(i=>gt.error(i))}const wv="@firebase/analytics",bv="0.7.4";function d4(){Qt(new Ot(If,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return c4(s,i,n)},"PUBLIC")),Qt(new Ot("analytics-internal",t,"PRIVATE")),tt(wv,bv),tt(wv,bv,"esm2017");function t(e){try{const n=e.getProvider(If).getImmediate();return{logEvent:(s,i,r)=>f4(n,s,i,r)}}catch(n){throw kt.create("interop-component-reg-failed",{reason:n})}}}d4();const p4={apiKey:"AIzaSyDTVxDJj7rqG9L-Clvba2Tao9B0hkcxjcE",authDomain:"milchchan.firebaseapp.com",databaseURL:"https://milchchan.firebaseio.com",projectId:"milchchan",storageBucket:"milchchan.appspot.com",messagingSenderId:"355698971889",appId:"1:355698971889:web:e3653c5c31bd7289cd4550",measurementId:"G-3998FJYNWX"},wl=MC(p4),Ut=I2(wl),pe=L3(wl),Ls=z6(wl);h4(wl);const m4=decodeURIComponent(window.location.hash.substring(1))==="debug",me="wonderland",vn=new JI;vn.domElement.style.position="fixed";vn.domElement.style.top="auto";vn.domElement.style.bottom="0";vn.domElement.style.left="auto";vn.domElement.style.right="0";m4||vn.domElement.classList.add("is-hidden");let ki=0;const g4=5;let bl=0;const _4=10;let El=0;window.addEventListener("load",t=>{"serviceWorker"in navigator&&(navigator.serviceWorker.register("sw.js").then(n=>{n.onupdatefound=function(){n.update()}}).catch(n=>{console.error(n.code,n.message)}),navigator.serviceWorker.addEventListener("message",n=>{navigator.serviceWorker.controller!==null&&"command"in n.data&&n.data.command==="caches"&&navigator.serviceWorker.controller.postMessage({command:"clear",caches:n.data.caches})}));const e=Gp({data(){return{isDarkMode:!1,isMuted:!0,isLoading:!1,isUpdating:!1,isLocating:!1,isRevealed:!1,isOverlayed:!1,isBlinded:!1,isPopup:!1,isExpanded:!1,isLearning:!1,isAnimating:!1,isHangingOn:!1,isSubmitting:!1,isDiscovering:!1,isStared:!1,isLocked:!1,isEditing:!1,canvasSize:{width:0,height:0,deviceWidth:0,deviceHeight:0,alternative:{width:0,height:0,deviceWidth:0,deviceHeight:0}},cachedImages:{},cachedSprites:[],alternativeCachedSprites:[],animationQueue:[],elapsed:0,map:null,layer:null,mode:null,queryQueue:[],queryCache:{},cachedTracks:{},cachedDocuments:[],documentQueue:[],sequenceQueue:[],progress:0,user:null,candidates:null,input:"",animatedInputLength:0,maxInputLength:100,inputHasError:!1,messages:[],maxMessages:10,word:null,recentWords:[],tags:[],maxTags:10,scrollTimeoutID:void 0,stars:-1,animatedStars:0,steps:0,isStepping:!1,animatedSteps:0,deviceMotion:null,stats:[],screenshot:null,notifications:[],notificationHeight:0,animatedNotificationHeight:0,inputHeight:0,animatedInputHeight:0,recentImages:[],backgroundImagesQueue:[],backgroundImages:[],preloadImages:[],isUploading:!1,animations:null,currentAnimations:[],blendShapeAnimations:[],insetTop:0,insetBottom:0,text:[],popupTextHeight:0,animatedPopupTextHeight:0,tickerWidth:0,animatedTickerWidth:0,leaderboard:[],leaderboardHeight:0,animatedLeaderboardHeight:0,message:null,states:{},character:null,alternative:null,wordDictionary:{},reverseWordDictionary:{},attributes:["\u540D\u524D","\u6240\u5C5E","\u6642\u9593","\u5834\u6240","\u3059\u308B\u4E8B","\u751F\u304D\u7269","\u98DF\u3079\u7269","\u98F2\u307F\u7269","\u805E\u304F\u3082\u306E","\u898B\u308B\u3082\u306E","\u8AAD\u3080\u3082\u306E","\u4F7F\u3046\u7269","\u8EAB\u306B\u3064\u3051\u308B\u3082\u306E","\u4E57\u308A\u7269","\u90E8\u4F4D","\u75C5\u6C17"],chars:[]}},watch:{isMuted(n){try{localStorage.setItem("character",JSON.stringify({mute:n}))}catch{localStorage.removeItem("character")}},words:{handler:()=>{e.$nextTick(()=>{for(const n of document.body.querySelectorAll("#input>.columns:last-of-type>.column>.control .clip")){let s=0;for(const i of n.querySelectorAll(":scope .ticker-wrap .ticker .item"))s+=i.getBoundingClientRect().width;s>0&&(e.tickerWidth=Math.min(s/2,document.body.querySelector("#input>.columns:last-of-type>.column>.control .level").getBoundingClientRect().width),n.querySelector(":scope .ticker-wrap .ticker").style.width=s+"px")}})},deep:!0},tickerWidth(n){const s=this,i={width:this.animatedTickerWidth};he({targets:i,width:n,round:1,duration:500,easing:"linear",update:()=>{s.animatedTickerWidth=i.width}})},backgroundImages:{handler:()=>{e.$nextTick(()=>{const n=document.body.querySelectorAll("#app>.background>div");if(n.length>1){const s=n.length-1,i=15;let r=0,o=null;for(const a of n){const l=[];for(let u=0;u<n.length;u++)u===r?l.push({visibility:"visible"}):l.push({visibility:"hidden"});const c=a.animate(l,{fill:"forwards",easing:"steps("+s+")",duration:1e3/i*n.length,iterations:1/0});o===null?o=c.startTime:c.startTime=o,r++}}})},deep:!0},text:{handler:()=>{e.$nextTick(()=>{e.isPopup&&(e.popupTextHeight=e.$refs.popupText.getBoundingClientRect().height)})},deep:!0},popupTextHeight(n){const s={height:this.animatedPopupTextHeight};he({targets:s,height:n,round:1,duration:500,easing:"linear",update:()=>{this.animatedPopupTextHeight=s.height}})},notifications:{handler:()=>{e.$nextTick(()=>{e.notificationHeight=e.$refs.notifications.getBoundingClientRect().height})},deep:!0},notificationHeight(n){const s={height:this.animatedNotificationHeight};he({targets:s,height:n,round:1,duration:500,easing:"linear",update:()=>{this.animatedNotificationHeight=s.height}})},leaderboard:{handler:()=>{e.$nextTick(()=>{e.leaderboardHeight=e.$refs.leaderboard.getBoundingClientRect().height})},deep:!0},leaderboardHeight(n){const s={height:this.animatedLeaderboardHeight};he({targets:s,height:n,round:1,duration:500,easing:"linear",update:()=>{this.animatedLeaderboardHeight=s.height}})},inputHeight(n){const s={height:this.animatedInputHeight};he({targets:s,height:n,round:1,duration:500,easing:"linear",update:()=>{this.animatedInputHeight=s.height}})},stars(n){const s={count:this.animatedStars};he({targets:s,count:n,round:1,duration:500,easing:"linear",update:()=>{this.animatedStars=s.count}})},steps(n){const s={count:this.animatedSteps};he({targets:s,count:n,round:100,duration:500,easing:"linear",update:()=>{this.animatedSteps=s.count}})},input:{handler:()=>{e.$nextTick(()=>{const n={count:e.animatedInputLength};he({targets:n,count:e.input.length,round:1,duration:500,easing:"linear",update:()=>{e.animatedInputLength=n.count}})})},deep:!0},chars:{handler:()=>{const n=[];for(const s of e.chars)for(const i of s)(i.count>0||!i.reserved)&&n.push({set:i.set,count:i.count,timestamp:i.timestamp,checksum:[...String(i.timestamp)].reduce((r,o)=>r+o,0)+[...String(i.count)].reduce((r,o)=>r+o,0)});try{localStorage.setItem("fragments",JSON.stringify(n))}catch{localStorage.removeItem("fragments")}},deep:!0}},methods:{signIn:async function(n){if(n===It.PROVIDER_ID){const s=new It;try{const i=await Qu(Ut,s),r=s.credentialFromResult(Ut,i);for(const o of i.user.providerData){try{await ju(this.user,{displayName:o.displayName,photoURL:o.photoURL})}catch(a){console.error(a.code,a.message)}break}try{localStorage.setItem("credential",JSON.stringify({providerId:r.providerId,accessToken:r.accessToken,idToken:r.idToken}))}catch{localStorage.removeItem("credential")}}catch(i){console.error(i.code,i.message)}}else if(n===Et.PROVIDER_ID){const s=new Et;s.addScope("public_profile");try{const i=await Qu(Ut,s),r=s.credentialFromResult(Ut,i);for(const o of i.user.providerData){try{await ju(this.user,{displayName:o.displayName,photoURL:o.photoURL})}catch(a){console.error(a.code,a.message)}break}try{localStorage.setItem("credential",JSON.stringify({providerId:r.providerId,accessToken:r.accessToken}))}catch{localStorage.removeItem("credential")}}catch(i){console.error(i.code,i.message)}}else if(n===Tt.PROVIDER_ID){const s=new Tt;try{const i=await Qu(Ut,s),r=s.credentialFromResult(Ut,i);for(const o of i.user.providerData){const a=o.photoURL.replace(/_normal\.jpg$/,".jpg");try{await ju(this.user,{displayName:o.displayName,photoURL:a})}catch(l){console.error(l.code,l.message)}St(de(pe,`${me}/users/${i.user.uid}`),l=>(l?(l.name=o.displayName,l.link=`https://twitter.com/${i.additionalUserInfo.username}`,l.timestamp=timestamp):l={name:o.displayName,link:`https://twitter.com/${i.additionalUserInfo.username}`,timestamp},l));break}try{localStorage.setItem("credential",JSON.stringify({providerId:r.providerId,accessToken:r.accessToken,secret:r.secret}))}catch{localStorage.removeItem("credential")}}catch(i){console.error(i.code,i.message)}}},signOut:async function(n){try{await pS(Ut),localStorage.removeItem("credential"),"serviceWorker"in navigator&&navigator.serviceWorker.controller!==null&&navigator.serviceWorker.controller.postMessage({command:"caches"})}catch(s){console.error(s.code,s.message)}},refresh:function(n){this.update(!0)},update:async function(n=!1){this.isLoading=!0;const s=this,i=this.map.getCenter(),r=await this.fetch(n,i.latitude,i.longitude);if(n&&Object.keys(this.cachedTracks).forEach(function(o){for(const a of s.cachedTracks[o].handlers)Microsoft.Maps.Events.removeHandler(a);s.map.entities.remove(s.cachedTracks[o].pushpin),delete s.cachedTracks[o]}),r!==null){const o=Math.floor(new Date/1e3);let a=!1;for(const c in r)for(const u of r[c]){let h=null;for(const f in this.cachedTracks)if(u.id===this.cachedTracks[f].id){h=f;break}if(h===null){const f=new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(u.location.latitude,u.location.longitude),{title:u.name,subTitle:this.formatTime(o-u.timestamp),icon:"/images/Marker-Star.svg"});"image"in u?this.setImage(f,u.image.url,this.user.uid===u.user.id?{red:254,green:205,blue:226}:{red:104,green:230,blue:255}):"image"in u.user&&this.setImage(f,u.user.image,this.user.uid===u.user.id?{red:254,green:205,blue:226}:{red:104,green:230,blue:255}),this.cachedTracks[f.id]=u,this.cachedTracks[f.id].pushpin=f,this.cachedTracks[f.id].handlers=[Microsoft.Maps.Events.addHandler(f,"click",async d=>{s.mode=this.cachedTracks[d.target.id],s.isRevealed=!0}),Microsoft.Maps.Events.addHandler(f,"dblclick",d=>{window.location.hash=s.cachedTracks[d.target.id].id})],this.map.entities.push(f),a=!0}else if(u.timestamp>this.cachedTracks[h].timestamp){const f=this.cachedTracks[h].pushpin,d=this.cachedTracks[h].handlers;f.setLocation(new Microsoft.Maps.Location(u.location.latitude,u.location.longitude)),f.setOptions({title:u.name,subTitle:this.formatTime(o-u.timestamp)}),"image"in u?this.setImage(f,u.image.url,this.user.uid===u.user.id?{red:254,green:205,blue:226}:{red:104,green:230,blue:255}):"image"in u.user&&this.setImage(f,u.user.image,this.user.uid===u.user.id?{red:254,green:205,blue:226}:{red:104,green:230,blue:255}),this.cachedTracks[h]=u,this.cachedTracks[h].pushpin=f,this.cachedTracks[h].handlers=d,a=!0}}const l=[];for(const c in r)for(const u of r[c])l.push(u.id);if(Object.keys(this.cachedTracks).forEach(function(c){if(!l.some(u=>u===s.cachedTracks[c].id)){for(const u of s.cachedTracks[c].handlers)Microsoft.Maps.Events.removeHandler(u);s.map.entities.remove(s.cachedTracks[c].pushpin),delete s.cachedTracks[c],a=!0}}),a){const c=10;this.isUpdating=!0;const u=await new Promise(h=>{const f={},d=[];for(const p in r)for(const v of r[p])if(v.user.id in f)f[v.user.id].count++;else{const _=Object.assign({},v.user);_.count=1,f[v.user.id]=_}for(const p in f)d.push(f[p]);d.sort((p,v)=>v.count-p.count),h(d)});this.leaderboard.splice(0);for(const h of u)this.leaderboard.push(h);try{const h=await new Promise(f=>{const d=Math.pow(10,-6);let p=[],v=[],_={},y={},m=[],g=d;for(const w in r){let T=[],E=[];for(const I of r[w])T.push(I.name),E.includes(I.name)||(I.name in _?_[I.name]+=1:_[I.name]=1,E.push(I.name));p.push(T)}for(const w in _)_[w]=Math.log(p.length/(_[w]+d));for(const w of p){let T={};for(const E of w)E in T?T[E]+=1:T[E]=1;for(const E in T)T[E]/=w.length,E in y||(y[E]=0);v.push(T)}for(const w in y)for(const T of v)if(w in T){const E=T[w]*_[w];E>y[w]&&(y[w]=E)}for(const w in y)w.length>1&&w!="..."&&m.push({term:w,value:y[w]});m.sort((w,T)=>T.value-w.value),m.length>c&&m.splice(c);for(const w of m)w.value>g&&(g=w.value);for(const w of m)w.value/=g;m.sort((w,T)=>w.term>T.term?1:w.term<T.term?-1:0),f([p,m])});this.cachedDocuments.splice(0),this.tags.splice(0);for(const f of h[0])this.cachedDocuments.push(f);for(let f=0;f<h[1].length;f++)this.tags.push({index:f,name:h[1][f].term,score:h[1][f].value})}catch(h){this.notify({text:h.message,accent:this.character.accent,image:this.character.image}),console.error(h)}this.isUpdating=!1}}this.isLoading=!1},fetch:async function(n,s,i){const r=this,o={1:2,2:2,3:2,4:2,5:2,6:2,7:2,8:2,9:2,10:3,11:3,12:4,13:4,14:4,15:5,16:5,17:5,18:6,19:6,20:6},a=this.encodeGeohash(s,i,o[this.map.getZoom()]);let l=[a];const c=[],u={};let h=[],f=this.decodeGeohash(a);const d=Math.floor(new Date/1e3),p=60,v={};if(h.push(new Microsoft.Maps.Polygon([new Microsoft.Maps.Location(f.topleft.latitude,f.topleft.longitude),new Microsoft.Maps.Location(f.topright.latitude,f.topright.longitude),new Microsoft.Maps.Location(f.bottomright.latitude,f.bottomright.longitude),new Microsoft.Maps.Location(f.bottomleft.latitude,f.bottomleft.longitude),new Microsoft.Maps.Location(f.topleft.latitude,f.topleft.longitude)],{fillColor:"rgba(255, 0, 0, 0.5)",strokeColor:"red",strokeThickness:1})),a.length>2){const y=this.getNeighbors(a);for(const m in y)l.push(y[m]),f=this.decodeGeohash(y[m]),h.push(new Microsoft.Maps.Polygon([new Microsoft.Maps.Location(f.topleft.latitude,f.topleft.longitude),new Microsoft.Maps.Location(f.topright.latitude,f.topright.longitude),new Microsoft.Maps.Location(f.bottomright.latitude,f.bottomright.longitude),new Microsoft.Maps.Location(f.bottomleft.latitude,f.bottomleft.longitude),new Microsoft.Maps.Location(f.topleft.latitude,f.topleft.longitude)],{fillColor:"rgba(255, 0, 0, 0.5)",strokeColor:"red",strokeThickness:1}))}this.layer.setPrimitives(h),this.queryQueue.push(a);for(const y of l){if(!n&&y in this.queryCache&&d-this.queryCache[y].timestamp<p){for(const g of this.queryCache[y].data)c.push(g),y in u?u[y].push(g):u[y]=[g];continue}const m=await Ct(Rs(de(pe,me+"/tracks"),cl("key"),ll(50),ef(y),T3(y.padEnd(12,"z")+"\uF8FF")));if(v[y]={timestamp:d,data:[]},m.exists()){const g=m.val();for(const w in g)g[w].id=w,"image"in g[w]&&(g[w].image={path:g[w].image,url:await Ci(Ps(Ls,g[w].image))}),c.push(g[w]),v[y].data.push(g[w]),y in u?u[y].push(g[w]):u[y]=[g[w]]}}if(this.queryQueue.shift(),this.queryQueue.length>0)return null;for(const y in v)this.queryCache[y]=v[y];Object.keys(this.queryCache).forEach(function(y){d-r.queryCache[y].timestamp>=p&&delete r.queryCache[y]});const _=this.take(c.sort((y,m)=>m.timestamp-y.timestamp),100);return Object.keys(u).forEach(function(y){for(let m=u[y].length-1;m>0;m--)_.includes(u[y][m])||u[y].splice(m,1);u[y].length===0&&delete u[y]}),u},startPedometer:async function(){const n=this;DeviceMotionEvent.requestPermission&&await DeviceMotionEvent.requestPermission()!=="granted"||(this.deviceMotion=s=>{if(s.accelerationIncludingGravity){const o=s.accelerationIncludingGravity,a=Math.sqrt(o.x*o.x+o.y*o.y+o.z*o.z);if(n.isStepping){if(a<9.8){const l=new Date,c=l.getTime()-7*24*60*60*1e3,u=[];n.steps++,n.isStepping=!1;for(let h=n.stats.length-1;h>0;h--)n.stats[h].date.getTime()<=c?n.stats.splice(h,1):n.stats[h].date.getFullYear()!==l.getFullYear()&&n.stats[h].date.getMonth()!==l.getMonth()&&n.stats[h].date.getDate()!==l.getDate()&&u.push({date:n.stats[h].date.toISOString(),steps:n.stats[h].steps});u.unshift({date:new Date(l.getFullYear(),l.getMonth(),l.getDate(),0,0,0).toISOString(),steps:n.steps});try{localStorage.setItem("stats",JSON.stringify(u))}catch{localStorage.removeItem("stats")}if(n.steps%10==0){let p=function(m,g){return m=Math.ceil(m),g=Math.floor(g),Math.floor(Math.random()*(g-m))+m},v=function(m){var g=arguments;return m.replace(/\{(\d)\}/g,function(w,T){return g[parseInt(T)+1]})};var i=p,r=v;const h=[];let f=0,d=Number.MAX_SAFE_INTEGER;for(const m of n.chars){let g=0;for(const w of m)h.push({path:{row:f,column:g},data:w}),g++,w.count<d&&(d=w.count);f++}for(let m=h.length-1;m>0;m--)h[m].data.count>d&&h.splice(m,1);const _=h[p(0,h.length)].path,y=[];n.chars[_.row][_.column].count++,n.chars[_.row][_.column].timestamp=Math.floor(new Date/1e3);for(const m of this.prepare(this.character.sequences.filter(g=>g.name==="Capture"),n.chars[_.row][_.column].set[0],this.character.sequences))m.type==="Message"?y.push({type:m.type,speed:m.speed,duration:m.duration,character:this.character,text:v(m.text,n.chars[_.row][_.column].set[0])}):(m.character=this.character,y.push(m));y.length>0&&this.sequenceQueue.push(y)}}}else a>12&&(n.isStepping=!0)}},window.addEventListener("devicemotion",this.deviceMotion,!0))},stopPedometer:function(){window.removeEventListener("devicemotion",this.deviceMotion,!0),this.deviceMotion=null},locate:async function(n){if("permissions"in navigator){const s=await navigator.permissions.query({name:"geolocation"});if(s.state=="granted"||s.state=="prompt"){const i=this;this.isLocating=!0,navigator.geolocation.getCurrentPosition(r=>{i.isLocating=!1,i.map.setView({center:new Microsoft.Maps.Location(r.coords.latitude,r.coords.longitude),zoom:i.map.getZoom()<16?16:i.map.getZoom()})},r=>{i.isLocating=!1,i.notify({text:r.message,accent:i.character.accent,image:i.character.image}),console.error(r)},{enableHighAccuracy:!0,timeout:3e4,maximumAge:0})}}else{const s=this;this.isLocating=!0,navigator.geolocation.getCurrentPosition(i=>{s.isLocating=!1,s.map.setView({center:new Microsoft.Maps.Location(i.coords.latitude,i.coords.longitude),zoom:s.map.getZoom()<16?16:s.map.getZoom()})},i=>{s.isLocating=!1,s.notify({text:i.message,accent:s.character.accent,image:s.character.image}),console.error(i)},{enableHighAccuracy:!0,timeout:3e4,maximumAge:0})}},backspace:function(n){this.isEditing||this.chars.forEach(s=>s.forEach(i=>i.count+=i.set.includes(this.input.charAt(this.input.length-1))?1:0)),this.input=this.input.slice(0,-1)},send:async function(n){if(this.input.length>0&&this.input.length<=this.maxInputLength)if(this.isEditing){let s=-1;const i=[];for(let r=this.chars.length-1;r>=0;r--)if(this.chars[r].some(o=>!o.reserved)){s=r;break}i.push({set:[this.input],index:0,count:0,timestamp:Math.floor(new Date/1e3),reserved:!1}),s>=0?this.chars.splice(s+1,0,i):this.chars.splice(0,0,i),this.input="",this.isEditing=!1}else{const s=this.map.getCenter();this.learn({name:this.input,location:{latitude:s.latitude,longitude:s.longitude}}),this.input="",this.isLearning=!1}else this.shake(this.$refs.input)},setImage:async function(n,s,i={red:0,green:0,blue:0}){let r;try{r=await new Promise(async(u,h)=>{const f=new Image;f.onload=()=>{u(f)},f.onerror=d=>{h(d)},f.crossOrigin="Anonymous",f.src=s})}catch(u){n.setOptions({icon:`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
                        </svg>`;n.setOptions({icon:c})},change:function(n){this.input.length<=this.maxInputLength?this.inputHasError=!1:this.inputHasError=!0},upload:async function(n){const s=Math.floor(new Date/1e3);if(this.isUploading=!0,!("uploadable"in n.target.dataset)||n.target.dataset.uploadable==="true"){let r=function(){let c="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".split("");for(let u=0,h=c.length;u<h;u++)switch(c[u]){case"x":c[u]=Math.floor(Math.random()*16).toString(16);break;case"y":c[u]=(Math.floor(Math.random()*4)+8).toString(16);break}return c.join("")};var i=r;const o=this,a=[],l=[];for(const c of n.target.files)a.push(c);for(const c of a.sort((u,h)=>u.name>h.name?1:u.name<h.name?-1:0)){const u=j6(Ps(Ls,`assets/${r()}`),c);try{await new Promise(function(f,d){u.on("state_changed",p=>{o.progress=p.bytesTransferred/p.totalBytes/a.length+l.length/a.length},p=>{d(p)},()=>{f(u.snapshot.ref)})});const h=await St(de(pe,`${me}/users/${this.user.uid}/dictionary/words/${n.target.dataset.name}`),f=>(f&&(f.image=u.snapshot.ref.fullPath,f.timestamp=s),f));if(h.committed&&h.snapshot.exists()){const f=h.snapshot.val(),d=await St(de(pe,`${me}/tracks/${await this.digestMessage(`${this.user.uid}&${n.target.dataset.name}`)}`),p=>(p&&(p.image=f.image,p.timestamp=f.timestamp),p));if(d.committed&&d.snapshot.exists()&&(this.update(!0),this.mode!==null)){if("name"in this.mode&&"attributes"in this.mode&&this.mode.name===n.target.dataset.name)this.mode.image={path:u.snapshot.ref.fullPath,url:await Ci(Ps(Ls,u.snapshot.ref.fullPath))};else if("words"in this.mode&&this.mode.words!==null)for(const p of this.mode.words)p.name===n.target.dataset.name&&(p.image={path:u.snapshot.ref.fullPath,url:await Ci(Ps(Ls,u.snapshot.ref.fullPath))})}}}catch(h){this.notify({text:h.message,accent:this.character.accent,image:this.character.image}),console.error(h)}l.push(u.snapshot.ref.fullPath)}this.progress=null}else if(n.target.dataset.uploadable==="false")try{const r=await St(de(pe,`${me}/users/${this.user.uid}/dictionary/words/${n.target.dataset.name}`),o=>(o&&(o.image=null,o.timestamp=s),o));if(r.committed&&r.snapshot.exists()){const o=r.snapshot.val(),a=await St(de(pe,`${me}/tracks/${await this.digestMessage(`${this.user.uid}&${n.target.dataset.name}`)}`),l=>(l&&(l.image=null,l.timestamp=o.timestamp),l));if(a.committed&&a.snapshot.exists()&&(this.update(!0),this.mode!==null)){if("name"in this.mode&&"attributes"in this.mode&&this.mode.name===n.target.dataset.name&&"image"in this.mode)delete this.mode.image;else if("words"in this.mode&&this.mode.words!==null)for(const l of this.mode.words)l.name===n.target.dataset.name&&"image"in l&&delete l.image}}}catch(r){this.notify({text:r.message,accent:this.character.accent,image:this.character.image}),console.error(r)}this.isUploading=!1},learn:async function(n){function s(o){var a=arguments;return o.replace(/\{(\d)\}/g,function(l,c){return a[parseInt(c)+1]})}const i=[],r=[];if("attributes"in n)for(const o of this.attributes)o in n.attributes&&(n.attributes[o]>0?r.push({name:o,value:!0}):r.push({name:o,value:!1}));else{const o=await Ct(de(pe,me+"/users/"+this.user.uid+"/dictionary/words/"+n.name));if(o.exists()){const a=o.val();for(const l of this.attributes)l in a.attributes&&(a.attributes[l]>0?r.push({name:l,value:!0}):r.push({name:l,value:!1}))}else for(const a of this.attributes)r.push({name:a,value:!1})}this.word={name:n.name,attributes:r},"location"in n&&(this.word.location=n.location),"image"in n&&(this.word.image={path:n.image,url:await Ci(Ps(Ls,n.image))}),"user"in n&&(this.word.user=n.user);for(const o of this.prepare(this.character.sequences.filter(a=>a.name==="Learn")))o.type==="Message"?i.push({type:o.type,speed:o.speed,duration:o.duration,text:s(o.text,n.name)}):i.push(o);i.length>0&&this.sequenceQueue.push(i)},check:function(n){for(const s of this.word.attributes)s===n.target.dataset.attribute&&(s.value=n.target.checked)},share:async function(n){const s="location"in n?n.location:this.map.getCenter(),i=this.encodeGeohash(s.latitude,s.longitude),r={id:this.user.uid,name:this.user.displayName,image:this.user.photoURL},o=Math.floor(new Date/1e3);if(n.name in this.wordDictionary&&delete this.wordDictionary[n.name],Object.keys(this.reverseWordDictionary).forEach(l=>{this.reverseWordDictionary[l].words.some(c=>c===n.name)&&delete this.reverseWordDictionary[l]}),this.isSubmitting=!0,this.user.providerData[0].providerId===firebase.auth.TwitterAuthProvider.PROVIDER_ID){const l=await Ct(de(pe,`${me}/users/${this.user.uid}/link`));l.exists()&&(r.link=l.val())}try{const l=await St(de(pe,me+"/users/"+this.user.uid+"/dictionary/words/"+n.name),c=>{if(c){let u=!1;for(const h of n.attributes)if(h.name in c.attributes){if(c.attributes[h.name]>0){if(!h.value){u=!0;break}}else if(h.value){u=!0;break}}else{u=!0;break}if(u){let h=!0;const f={attributes:{}};for(const d of n.attributes)d.value?(d.name in c.attributes&&c.attributes[d.name]>0?f.attributes[d.name]=c.attributes[d.name]:f.attributes[d.name]=o-1,h=!1):f.attributes[d.name]=0;return h?null:(f.timestamp=o,f)}else return}else{c={attributes:{},timestamp:o};for(const u of n.attributes)u.value?c.attributes[u.name]=o:c.attributes[u.name]=0;"user"in n&&(c.user={id:n.user.id,name:n.user.name,image:n.user.image}),"image"in n&&(c.image=n.image.path)}return c});if(l.committed)if(l.snapshot.exists()){const c=l.snapshot.val(),u=[];for(const h in c.attributes)typeof c.attributes[h]=="number"&&c.attributes[h]>0&&this.attributes.includes(h)&&u.push(c.attributes[h]);if(u.length===1&&u[0]===c.timestamp){let h=function(d){var p=arguments;return d.replace(/\{(\d)\}/g,function(v,_){return p[parseInt(_)+1]})};var a=h;const f=this;St(de(pe,me+"/users/"+this.user.uid+"/dictionary/count"),d=>(d||0)+1);for(const d of this.prepare(this.character.sequences.filter(p=>p.name==="Learned")))d.type==="Message"&&this.notify({text:h(d.text,n.name),accent:this.character.accent,image:this.character.image});this.isStared=!0,window.setTimeout(()=>{f.isStared=!1},3e3),this.isMuted||this.$refs.twinkle.play()}if(!("user"in n)||n.user.id===this.user.uid)try{const h=await St(de(pe,me+"/tracks/"+await this.digestMessage(`${this.user.uid}&${n.name}`)),f=>{const d={};f?(f.key=`${i}${o}`,f.location={latitude:s.latitude,longitude:s.longitude},f.geohash=i,f.timestamp=o):f={key:`${i}${o}`,name:n.name,location:{latitude:s.latitude,longitude:s.longitude},geohash:i,user:r,timestamp:o};for(const p in c.attributes)this.attributes.includes(p)&&(d[p]=c.attributes[p]);return f.attributes=d,f});h.committed&&h.snapshot.exists()&&this.update(!0)}catch(h){this.notify({text:h.message,accent:this.character.accent,image:this.character.image}),console.error(h)}}else{St(de(pe,me+"/users/"+this.user.uid+"/dictionary/count"),c=>c&&c>1?c-1:null);try{const c=await St(de(pe,me+"/tracks/"+await this.digestMessage(`${this.user.uid}&${n.name}`)),u=>null);c.committed&&!c.snapshot&&this.update(!0)}catch(c){this.notify({text:c.message,accent:this.character.accent,image:this.character.image}),console.error(c)}}else if(!("user"in n)||n.user.id===this.user.uid)try{const c=await St(de(pe,me+"/tracks/"+await this.digestMessage(`${this.user.uid}&${n.name}`)),u=>{if(u){u.key=`${i}${o}`,u.location={latitude:s.latitude,longitude:s.longitude},u.geohash=i,u.user=r,u.timestamp=o;for(const h of n.attributes)h.value?u.attributes[h.name]=o-1:u.attributes[h.name]=0}else{u={key:`${i}${o}`,name:n.name,location:{latitude:s.latitude,longitude:s.longitude},geohash:i,attributes:{},user:r,timestamp:o};for(const h of n.attributes)h.value?u.attributes[h.name]=o:u.attributes[h.name]=0}return u});c.committed&&c.snapshot.exists()&&this.update(!0)}catch(c){this.notify({text:c.message,accent:this.character.accent,image:this.character.image}),console.error(c)}}catch(l){this.notify({text:l.message,accent:this.character.accent,image:this.character.image}),console.error(l)}this.isSubmitting=!1},next:async function(n,s,i=50){let r;if(s===null?r=await Ct(Rs(de(pe,me+"/users/"+n+"/dictionary/words"),nf(),tf(i+1))):r=await Ct(Rs(de(pe,me+"/users/"+n+"/dictionary/words"),nf(),s(s),tf(i+1))),"words"in this.mode){const o="user"in this.mode?this.mode.user:{id:this.user.uid,name:this.user.displayName,image:this.user.photoURL},a=[];if(r.exists()){const l=r.val();this.mode.words!==null&&this.mode.words.length>0&&this.mode.indexes.push(this.mode.words[0]);for(const c in l){let u="user"in l[c]?{name:c,attributes:l[c].attributes,user:l[c].user}:{name:c,attributes:l[c].attributes,user:o};"image"in l[c]&&(u.image={path:l[c].image,url:await Ci(Ps(Ls,l[c].image))}),a.push(u)}a.length===i+1?this.mode.next=a.pop():this.mode.next=null}this.mode.words=a}},previous:async function(n,s,i=50){let r=await Ct(Rs(de(pe,me+"/users/"+n+"/dictionary/words"),nf(),s(s),tf(i)));if("words"in this.mode&&r.exists()){const o=r.val(),a="user"in this.mode?this.mode.user:{id:this.user.uid,name:this.user.displayName,image:this.user.photoURL};this.mode.words!==null&&this.mode.words.length>0&&(this.mode.next=this.mode.words[0]),this.mode.words=[];for(const l in o){const c="user"in o[l]?{name:l,attributes:o[l].attributes,user:o[l].user}:{name:l,attributes:o[l].attributes,user:a};"image"in o[l]&&(c.image={path:o[l].image,url:await Ci(Ps(Ls,o[l].image))}),this.mode.words.push(c)}}},discover:async function(){const n=this,s=[],i={},r=[];function o(l){function c(f,d){return f=Math.ceil(f),d=Math.floor(d),Math.floor(Math.random()*(d-f))+f}let u=[].concat(l),h=l.length;for(;h>1;){const f=c(0,h);h--;const d=u[h];u[h]=u[f],u[f]=d}return u}for(const l of this.recentWords)this.user.uid!==l.user.id&&(s.push(l),i[l.name]=l);for(const l in this.cachedTracks)this.user.uid!==this.cachedTracks[l].user.id&&!(this.cachedTracks[l].name in i)&&s.push(this.cachedTracks[l]);this.isDiscovering=!0;for(const l of o(s))try{if((await St(de(pe,me+"/users/"+this.user.uid+"/dictionary/words/"+l.name),u=>{if(!u)return u})).committed){let u=function(h){var f=arguments;return h.replace(/\{(\d)\}/g,function(d,p){return f[parseInt(p)+1]})};var a=u;this.isDiscovering=!1;for(const h of this.prepare(this.character.alternative.sequences.filter(f=>f.name==="Discover"),l.name,this.character.alternative.sequences))h.type==="Message"?r.push({type:h.type,speed:h.speed,duration:h.duration,character:this.character.alternative,text:u(h.text,l.name)}):(h.character=this.character.alternative,r.push(h));r.length>0&&this.sequenceQueue.push(r),this.learn({name:l.name,attributes:l.attributes,location:l.location,user:l.user}),this.map.setView({center:new Microsoft.Maps.Location(l.location.latitude,l.location.longitude),zoom:n.map.getZoom()<16?16:n.map.getZoom()});return}}catch(c){this.notify({text:c.message,accent:this.character.accent,image:this.character.image}),console.error(c)}this.isDiscovering=!1;for(const l of this.prepare(this.character.alternative.sequences.filter(c=>c.name==="Discover"),"",this.character.alternative.sequences))l.type==="Message"?r.push({type:l.type,speed:l.speed,duration:l.duration,character:this.character.alternative,text:l.text}):(l.character=this.character.alternative,r.push(l));r.length>0&&this.sequenceQueue.push(r)},digestMessage:async function(n){const s=new TextEncoder().encode(n),i=await crypto.subtle.digest("SHA-256",s);return Array.from(new Uint8Array(i)).map(a=>a.toString(16).padStart(2,"0")).join("")},activate:async function(){if(ki=bl=0,this.cachedDocuments.length>0){if(this.documentQueue.length==0){let i=function(r){function o(c,u){return c=Math.ceil(c),u=Math.floor(u),Math.floor(Math.random()*(u-c))+c}let a=[].concat(r),l=r.length;for(;l>1;){const c=o(0,l);l--;const u=a[l];a[l]=a[c],a[c]=u}return a};var n=i;for(const r of i(this.cachedDocuments))this.documentQueue.push(r)}const s=this.documentQueue.shift();await this.talk(this.user.uid,s.filter(i=>i!==this.character.name))||this.talk(this.user.uid)}else this.talk(this.user.uid)},talk:async function(n,s=[]){let i=this.character.sequences.filter(a=>a.name==="Activate"),r=[];if(this.isLoading=!0,s.length>0){let a=function(v){function _(g,w){return g=Math.ceil(g),w=Math.floor(w),Math.floor(Math.random()*(w-g))+g}let y=[].concat(v),m=v.length;for(;m>1;){const g=_(0,m);m--;const w=y[m];y[m]=y[g],y[g]=w}return y};var o=a;const l=new RegExp("[.#$\\[\\]]"),c=Math.floor(new Date/1e3),u=60*60,h=Object.assign({},this.states),f=new yr,d=[],p=[];for(const v of s)if(!l.test(v)){if(!(v in this.wordDictionary)||c-this.wordDictionary[v].timestamp>=u){const _=await Ct(de(pe,me+"/users/"+n+"/dictionary/words/"+v));if(this.wordDictionary[v]={attributes:[],timestamp:c},_.exists()){const y=_.val();for(let m in y.attributes)typeof y.attributes[m]=="number"&&y.attributes[m]>0&&this.attributes.includes(m)&&this.wordDictionary[v].attributes.push(m)}}for(const _ of this.wordDictionary[v].attributes)d.includes(_)||d.push(_)}for(const v of a(i)){const _=this.prepare([v]);let y=!1;for(const m of _){if(m.type=="Message"){for(const g of Array.isArray(m.text)?m.text:f.segment(m.text))if(Array.isArray(g)){for(const w of _)if(w.type=="Message"){const T=await this.generate(n,w.text,s);if(T===null){y=!0;break}else{let E,I;[E,I]=T,r.push({type:w.type,speed:w.speed,duration:w.duration,text:E})}}else r.push(w);if(y)break;return r.length>0&&this.sequenceQueue.push(r),this.isLoading=!1,!0}else if(g.length>1&&!l.test(g)&&!p.includes(g)){if(!(g in this.wordDictionary)||c-this.wordDictionary[g].timestamp>=u){const w=await Ct(de(pe,me+"/users/"+n+"/dictionary/words/"+g));if(this.wordDictionary[g]={attributes:[],timestamp:c},w.exists()){const T=w.val();for(const E in T.attributes)typeof T.attributes[E]=="number"&&T.attributes[E]>0&&this.attributes.includes(E)&&this.wordDictionary[g].attributes.push(E)}}for(const w of this.wordDictionary[g].attributes)if(d.includes(w)){for(const T of _)if(T.type=="Message"){const E=await this.generate(n,T.text,s);if(E===null){y=!0;break}else{let I,C;[I,C]=E,r.push({type:T.type,speed:T.speed,duration:T.duration,text:I})}}else r.push(T);if(y)break;return r.length>0&&this.sequenceQueue.push(r),this.isLoading=!1,!0}p.push(g)}}if(y){r.splice(0);break}}this.states=h}return this.isLoading=!1,!1}for(const a of this.prepare(i))if(a.type==="Message"){const l=await this.generate(n,a.text);if(l===null)return this.isLoading=!1,!1;{let c,u;[c,u]=l,r.push({type:a.type,speed:a.speed,duration:a.duration,text:c})}}else r.push(a);return r.length>0?(this.sequenceQueue.push(r),this.isLoading=!1,!0):(this.isLoading=!1,!1)},generate:async function(n,s,i=[]){function r(T){const E=Math.random();let I=0,C=0;for(let k of T){if(I<=E&&E<I+k)break;I+=k,C++}return C}function o(T){let E=[],I=Number.MIN_VALUE,C=0;for(let k=0;k<T.length;k++)T[k]>I&&(I=T[k]);for(let k=0;k<T.length;k++)C+=Math.exp(T[k]-I);for(let k=0;k<T.length;k++)E.push(Math.exp(T[k]-I)/C);return E}const a=Math.floor(new Date/1e3),l=60*60;let c=new yr,u=Array.isArray(s)?s:c.segment(s),h={},f=[];const d=new RegExp("[.#$\\[\\]]");let p={},v="",_=0;const y=Math.pow(10,-6),m=10;let g=[{sequence:[],score:1}];for(const T of i)if(!d.test(T)){if(!(T in this.wordDictionary)||a-this.wordDictionary[T].timestamp>=l){const E=await Ct(de(pe,me+"/users/"+n+"/dictionary/words/"+T));if(this.wordDictionary[T]={attributes:[],timestamp:a},E.exists()){const I=E.val();for(const C in I.attributes)typeof I.attributes[C]=="number"&&I.attributes[C]>0&&this.attributes.includes(C)&&this.wordDictionary[T].attributes.push(C)}}for(const E of this.wordDictionary[T].attributes)E in h?h[E].push(T):h[E]=[T]}for(const T of u){if(!f.includes(T)){if(Array.isArray(T)){let E=[],I=[];for(const C of T)if(C in h){for(const k of h[C])if(!E.includes(k)){let R=!0;E.push(k);for(const x of this.tags)if(k===x.name){I.push(x.score),R=!1;break}R&&I.push(y)}}else{if(!(C in this.reverseWordDictionary)||a-this.reverseWordDictionary[C].timestamp>=l){const k=await Ct(Rs(de(pe,me+"/users/"+n+"/dictionary/words"),cl(`attributes/${C}`),ll(100),ef(1)));if(this.reverseWordDictionary[C]={words:[],timestamp:a},k.exists()){const R=k.val();for(const x in R)this.reverseWordDictionary[C].words.push(x)}}for(const k of this.reverseWordDictionary[C].words)if(u.includes(k)&&!E.includes(k)){let R=!0;E.push(k);for(const x of this.tags)if(k==x.name){I.push(x.score),R=!1;break}R&&I.push(y)}}if(E.length>0&&I.length>0){const C=o(I);let k=[];for(let R=0;R<g.length;R++)for(let x=0;x<C.length;x++){let N=[].concat(g[R].sequence);N.push({index:_,term:E[x]}),k.push({sequence:N,score:g[R].score*C[x]})}g.splice(0);for(const R of this.take(k.sort((x,N)=>N.score-x.score),m))g.push(R)}}else if(!d.test(T)){let E=[],I=[];if(!(T in this.wordDictionary)||a-this.wordDictionary[T].timestamp>=l){const C=await Ct(de(pe,me+"/users/"+n+"/dictionary/words/"+T));if(this.wordDictionary[T]={attributes:[],timestamp:a},C.exists()){const k=C.val();for(const R in k.attributes)typeof k.attributes[R]=="number"&&k.attributes[R]>0&&this.attributes.includes(R)&&this.wordDictionary[T].attributes.push(R)}}for(const C of this.wordDictionary[T].attributes)if(C in h){for(const k of h[C])if(!E.includes(k)){let R=!0;E.push(k);for(const x of this.tags)if(k===x.name){I.push(x.score),R=!1;break}R&&I.push(y)}}else{if(!(C in this.reverseWordDictionary)||a-this.reverseWordDictionary[C].timestamp>=l){const k=await Ct(Rs(de(pe,me+"/users/"+n+"/dictionary/words"),cl(`attributes/${C}`),ll(100),ef(1)));if(this.reverseWordDictionary[C]={words:[],timestamp:a},k.exists()){const R=k.val();for(let x in R)this.reverseWordDictionary[C].words.push(x)}}for(const k of this.reverseWordDictionary[C].words)if(u.includes(k)&&!E.includes(k)){let R=!0;E.push(k);for(const x of this.tags)if(k==x.name){I.push(x.score),R=!1;break}R&&I.push(y)}}if(E.length>0&&I.length>0){const C=o(I);let k=[];for(let R=0;R<g.length;R++)for(let x=0;x<C.length;x++){let N=[].concat(g[R].sequence);N.push({index:_,term:E[x]}),k.push({sequence:N,score:g[R].score*C[x]})}g.splice(0);for(const R of this.take(k.sort((x,N)=>N.score-x.score),m))g.push(R)}}f.push(T)}_++}const w=g[r(o(g.map(T=>T.score)))];for(let T=0;T<u.length;T++){const E=JSON.stringify(u[T]);if(E in p)typeof p[E]=="undefined"?v+=u[T]:v+=p[E];else{let I=!0;for(let C=0;C<w.sequence.length;C++)if(w.sequence[C].index==T){E==w.sequence[C].term?p[E]=void 0:(p[E]=w.sequence[C].term,v+=w.sequence[C].term,I=!1);break}if(I){if(Array.isArray(u[T]))return null;v+=u[T]}}}return[v,p]},notify:function(n,s=3e3){const i=this;n.id=window.setTimeout(r=>{for(let o=0;o<i.notifications.length;o++)if(i.notifications[o].id===r.id){i.notifications.splice(o,1);break}},s,n),this.notifications.unshift(n)},blinded:async function(n){try{await new Promise(async(s,i)=>{const r=new Image;r.onload=()=>{s(r)},r.onerror=o=>{i(o)},r.crossOrigin="Anonymous",r.src=n.url})}catch(s){return console.error(s),!1}return!0},load:function(n){let s=!0;for(let i of this.preloadImages)i.url==n?i.isLoaded=!0:"isLoaded"in i||(s=!1);if(s){let i=0;for(const r of this.preloadImages)r.isLoaded&&(this.backgroundImages.push({index:i,id:r.id,url:r.url,timestamp:r.timestamp}),i++);this.preloadImages.splice(0),this.isBlinded=!1}},error:function(n){let s=!0;for(let i of this.preloadImages)i.url==n?i.isLoaded=!0:"isLoaded"in i||(s=!1);if(s){let i=0;for(const r of this.preloadImages)r.isLoaded&&(this.backgroundImages.push({index:i,id:r.id,url:r.url,timestamp:r.timestamp}),i++);this.preloadImages.splice(0),this.isBlinded=!1}},shake:function(n){n.animate([{transform:"translate3d(0, 0, 0)"},{transform:"translate3d(8px, 0, 0)"},{transform:"translate3d(-8px, 0, 0)"},{transform:"translate3d(7px, 0, 0)"},{transform:"translate3d(-7px, 0, 0)"},{transform:"translate3d(6px, 0, 0)"},{transform:"translate3d(-6px, 0, 0)"},{transform:"translate3d(5px, 0, 0)"},{transform:"translate3d(-5px, 0, 0)"},{transform:"translate3d(4px, 0, 0)"},{transform:"translate3d(-4px, 0, 0)"},{transform:"translate3d(3px, 0, 0)"},{transform:"translate3d(-3px, 0, 0)"},{transform:"translate3d(2px, 0, 0)"},{transform:"translate3d(-2px, 0, 0)"},{transform:"translate3d(1px, 0, 0)"},{transform:"translate3d(-1px, 0, 0)"},{transform:"translate3d(0, 0, 0)"}],{duration:1e3,iterations:1})},scrollToTop(){this.$nextTick(()=>{window.scroll(0,0)})},scrollToEnd:function(){typeof this.scrollTimeoutID=="number"&&clearTimeout(this.scrollTimeoutID),this.scrollTimeoutID=setTimeout(function(){window.scrollTo(0,document.body.scrollHeight)},500)},animationStart:function(n){this.isAnimating=!0},animationEnd:function(n){const s=this;this.$nextTick(()=>{s.notificationHeight=s.$refs.notifications.getBoundingClientRect().height,s.leaderboardHeight=s.$refs.leaderboard.getBoundingClientRect().height}),this.isPopup||(this.message=null),this.isAnimating=!1},tickerUpdated:function(n){const s=this;this.$nextTick(()=>{for(const i of document.body.querySelectorAll("#input>.columns:last-of-type>.column>.control .clip")){let r=0;for(const o of i.querySelectorAll(":scope .ticker-wrap .ticker .item"))r+=o.getBoundingClientRect().width;r>0&&(s.tickerWidth=Math.min(r/2,document.body.querySelector("#input>.columns:last-of-type>.column>.control .level").getBoundingClientRect().width),i.querySelector(":scope .ticker-wrap .ticker").style.width=r+"px")}})},range:function(n,s){const i=[];for(const r of s)i.push(new Date(new Date(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()).getTime()+r*24*60*60*1e3));return i},arrange:function(n,s){let i=[],r=[];for(const o of n)r.length<s?r.push(o):(i.push(r),r=[o]);return i.push(r),i},take:function(n,s){if(n.length>s){let i=[].concat(n);return i.splice(s),i}return n},reverse:function(n){return[].concat(n).reverse()},standardDeviation:function(n){let s=0,i=0;for(const o of n)s+=o;const r=s/n.length;for(const o of n)i+=(o-r)*(o-r);return i/=n.length,Math.sqrt(i)},formatTime:function(n){const s=Math.floor(n),i=Math.floor(s/86400),r=Math.floor(s/3600),o=Math.floor(s/60),a=s%60;return i>0?i+"d":o>0?r>0?r+"h":o+"m":a+"s"},digestMessage:async function(n){const s=new TextEncoder().encode(n),i=await crypto.subtle.digest("SHA-256",s);return Array.from(new Uint8Array(i)).map(a=>a.toString(16).padStart(2,"0")).join("")},getDistance:function(n,s,i,r){var o=6371,a=this.deg2rad(i-n),l=this.deg2rad(r-s),c=Math.sin(a/2)*Math.sin(a/2)+Math.cos(this.deg2rad(n))*Math.cos(this.deg2rad(i))*Math.sin(l/2)*Math.sin(l/2),u=2*Math.atan2(Math.sqrt(c),Math.sqrt(1-c)),h=o*u;return h},deg2rad:function(n){return n*(Math.PI/180)},encodeGeohash:function(n,s,i=12){const r=[16,8,4,2,1],o="0123456789bcdefghjkmnpqrstuvwxyz";var a=1,l=[],c=[],u=0,h=0;let f="";for(l[0]=-90,l[1]=90,c[0]=-180,c[1]=180;f.length<i;){if(a){const d=(c[0]+c[1])/2;s>d?(h|=r[u],c[0]=d):c[1]=d}else{const d=(l[0]+l[1])/2;n>d?(h|=r[u],l[0]=d):l[1]=d}a=!a,u<4?u++:(f+=o[h],u=0,h=0)}return f},decodeGeohash:function(n){const s=[16,8,4,2,1],i="0123456789bcdefghjkmnpqrstuvwxyz";var r=1,o=[],a=[];o[0]=-90,o[1]=90,a[0]=-180,a[1]=180;for(var l=0;l<n.length;l++)for(var c=n[l],u=i.indexOf(c),h=0;h<5;h++){const f=s[h];r?u&f?a[0]=(a[0]+a[1])/2:a[1]=(a[0]+a[1])/2:u&f?o[0]=(o[0]+o[1])/2:o[1]=(o[0]+o[1])/2,r=!r}return o[2]=(o[0]+o[1])/2,a[2]=(a[0]+a[1])/2,{latitude:o[2],longitude:a[2],topleft:{latitude:o[0],longitude:a[0]},topright:{latitude:o[1],longitude:a[0]},bottomright:{latitude:o[1],longitude:a[1]},bottomleft:{latitude:o[0],longitude:a[1]}}},getNeighbors:function(n){const s=this.calculateAdjacent(n,"right"),i=this.calculateAdjacent(n,"left");return{top:this.calculateAdjacent(n,"top"),bottom:this.calculateAdjacent(n,"bottom"),right:s,left:i,topleft:this.calculateAdjacent(i,"top"),topright:this.calculateAdjacent(s,"top"),bottomright:this.calculateAdjacent(s,"bottom"),bottomleft:this.calculateAdjacent(i,"bottom")}},calculateAdjacent:function(n,s){const i="0123456789bcdefghjkmnpqrstuvwxyz",r={right:{even:"bc01fg45238967deuvhjyznpkmstqrwx"},left:{even:"238967debc01fg45kmstqrwxuvhjyznp"},top:{even:"p0r21436x8zb9dcf5h7kjnmqesgutwvy"},bottom:{even:"14365h7k9dcfesgujnmqp0r2twvyx8zb"}},o={right:{even:"bcfguvyz"},left:{even:"0145hjnp"},top:{even:"prxz"},bottom:{even:"028b"}};r.bottom.odd=r.left.even,r.top.odd=r.right.even,r.left.odd=r.bottom.even,r.right.odd=r.top.even,o.bottom.odd=o.left.even,o.top.odd=o.right.even,o.left.odd=o.bottom.even,o.right.odd=o.top.even,n=n.toLowerCase();var a=n.charAt(n.length-1),l=n.length%2?"odd":"even",c=n.substring(0,n.length-1);return o[s][l].indexOf(a)!=-1&&(c=this.calculateAdjacent(c,s)),c+i[r[s][l].indexOf(a)]},prepare:function(n,s=null,i=null){function r(l,c){return l=Math.ceil(l),c=Math.floor(c),Math.floor(Math.random()*(c-l))+l}let o=[],a=[];for(const l of n){let c=s;s===null&&l.name in this.states&&(c=this.states[l.name]),c!==null&&"state"in l&&l.state!==null&&new RegExp(l.state).test(c)&&o.push(l)}if(o.length===0){for(const l of n)(!("state"in l)||l.state===null)&&o.push(l);s=null}if(o.length>0){let l=[];for(const c of o[r(0,o.length)].sequence)s!==null&&(this.states[c.name]=s),l.push(c);for(;l.length>0;){const c=l.shift();if(c.type=="Sequence"){if(!("sequence"in c)){let u=[],h=[];for(const f of i===null?this.character.sequences:i){let d=this.getSequenceStack(f,c);if(d.length>0){let p=[];do{let v=d.pop();if(d.length>0){let _=[];for(const y of d[d.length-1].sequence)if(y.type=="Sequence"){if("sequence"in y){let m=!0;for(const g of p)if(g===y){m=!1;break}m&&_.push(y)}if(y===v)break}for(;_.length>0;)p.push(_.pop())}if("sequence"in v){let _=!0;for(const y of p)if(y===v){_=!1;break}_&&p.push(v)}}while(d.length>0);for(;p.length>0;)u.push(p.pop())}else u.push(f)}if("state"in c){this.states[c.name]=c.state;for(const f of u)if(f.name==c.name){if(!new RegExp(f.state).test(c.state))continue;h.push(f)}}else for(const f of u)if(f.name==c.name){if("state"in f&&(!(f.name in this.states)||!new RegExp(f.state).test(this.states[f.name])))continue;h.push(f)}if(h.length>0){let f=0;for(const d of h[r(0,h.length)].sequence)l.splice(f,0,d),f++}}}else a.push(c)}}return a},getSequenceStack:function(n,s){let i=[];if(i.push(n),i[i.length-1]!==s){if("sequence"in n){for(const r of n.sequence)if(r.type=="Sequence"){let o=this.getSequenceStack(r,s);if(o.length>0&&o[o.length-1]===s){let a=[];do a.push(o.pop());while(o.length>0);do i.push(a.pop());while(a.length>0);return i}}}i.pop()}return i},animate:async function(n){if(requestAnimationFrame(this.animate),vn.begin(),this.character!==null){let r=function(a,l){return a=Math.ceil(a),l=Math.floor(l),Math.floor(Math.random()*(l-a))+a};var s=r;const o=(n-this.elapsed)/1e3;if(this.elapsed=n,this.sequenceQueue.length>0&&Array.isArray(this.sequenceQueue[0]))ki=0;else if(ki+=o,this.isLoading||(bl+=o),this.sequenceQueue.length==0)if(bl>=_4){if(this.cachedDocuments.length>0){if(this.documentQueue.length==0){let l=function(c){function u(d,p){return d=Math.ceil(d),p=Math.floor(p),Math.floor(Math.random()*(p-d))+d}let h=[].concat(c),f=c.length;for(;f>1;){const d=u(0,f);f--;const p=h[f];h[f]=h[d],h[d]=p}return h};var i=l;for(const c of l(this.cachedDocuments))this.documentQueue.push(c)}const a=this.documentQueue.shift();this.talk(this.user.uid,a.filter(l=>l!==this.character.name))}ki=bl=0}else ki>=g4&&(this.sequenceQueue.push({sequences:this.prepare(this.character.sequences.filter(a=>a.name==="Idle"))}),ki=0);if(!this.isLocked&&this.sequenceQueue.length>0){const a=Array.isArray(this.sequenceQueue[0])?this.sequenceQueue[0]:this.sequenceQueue[0].sequences;if(a.length>0)if(a[0].type=="Animation"){if("frames"in a[0]){for(const l of a[0].frames)if(Array.isArray(l))"character"in a[0]?this.animationQueue.push({character:a[0].character,images:l}):this.animationQueue.push({character:this.character,images:l});else if(typeof l=="object"&&"iterations"in l){if("images"in l){const c="character"in a[0]?a[0].character:this.character;for(let u=0;u<l.iterations;u++)this.animationQueue.push({character:c,images:l.images})}else if("sprites"in l){const c="character"in a[0]?a[0].character:this.character;for(let u=0;u<l.iterations;u++)this.animationQueue.push({character:c,images:l.sprites})}}}a.shift()}else a[0].type=="Message"&&this.message===null&&this.animationQueue.length===0&&("character"in a[0]?this.message={time:0,duration:a[0].duration,type:{elapsed:-1,speed:a[0].speed,reverse:!1,buffer:"",count:0},character:a[0].character,text:a[0].text}:this.message={time:0,duration:a[0].duration,type:{elapsed:-1,speed:a[0].speed,reverse:!1,buffer:"",count:0},character:{name:this.character.name,accent:this.character.accent,image:this.character.image},text:a[0].text},a.shift());else if(this.message===null&&this.animationQueue.length===0){const l=this;Object.keys(this.cachedImages).forEach(function(c){l.cachedSprites.some(u=>u.source===c)||delete l.cachedImages[c]}),this.sequenceQueue.shift(),this.alternative=null;return}}if(this.message!==null){if(this.message.type.reverse)if(this.message.type.count>0){if(this.message.type.elapsed+=o*2,this.message.type.elapsed>=1/this.message.type.speed){if(this.message.type.count-1<this.message.text.length){let l=Math.floor(this.message.text.length/2);this.message.type.buffer.length<=l&&this.message.type.count>0&&(this.message.type.count-=1),this.message.type.buffer.length>0&&(this.message.type.buffer=this.message.type.buffer.substring(0,this.message.type.buffer.length-1))}this.message.type.elapsed=0}}else this.isPopup=!1;else if(this.message.type.buffer.length<this.message.text.length){if(this.message.type.elapsed>=0?this.message.type.elapsed+=o:this.isAnimating||(this.isPopup?this.message.type.elapsed=o:this.isPopup=!0),this.message.type.elapsed>=1/this.message.type.speed){let a=this.message.type.buffer.length,l=Math.floor(this.message.text.length/2),c=this.message.text.length;this.message.type.count>=l&&(this.message.type.buffer+=this.message.text.charAt(a)),this.message.type.count<c&&(this.message.type.count+=1),this.message.type.elapsed=0}}else this.message.time+=o,this.message.time>=this.message.duration&&(this.message.type.reverse=!0);if(this.message.text.length===this.message.type.buffer.length){const a=this.message.text.split("");this.text.splice(0);for(let l=0;l<a.length;l++)this.text.push({key:l,value:a[l]})}else{let a=new Array,l="";for(let c=0;c<this.message.text.length;c++)a.indexOf(this.message.text.charAt(c))==-1&&this.message.text.charAt(c)!=`
`&&this.message.text.charAt(c).match(/\s/)==null&&a.push(this.message.text.charAt(c));if(a.length>0)for(let c=0;c<this.message.type.count;c++)this.message.text.charAt(c)==`
`?l+=`
`:l+=a[~~r(0,a.length)];if(l.length>this.message.type.buffer.length){const c=(this.message.type.buffer+l.substring(this.message.type.buffer.length,l.length)).split("");this.text.splice(0);for(let u=0;u<c.length;u++)this.text.push({key:u,value:c[u]})}else if(this.text.length!==this.message.type.buffer.length){const c=this.message.type.buffer.split("");this.text.splice(0);for(let u=0;u<c.length;u++)this.text.push({key:u,value:c[u]})}}}if(this.animationQueue.length>0){const a=this.animationQueue[0];if(!this.isLocked){const l=[];for(const c of this.animationQueue)l.push(c);this.isLocked=!0;for(const c of l)for(const u of c.images)if(!(u.source in this.cachedImages))try{const h=await new Promise(async(f,d)=>{const p=new Image;p.onload=()=>{f(p)},p.onerror=v=>{d(v)},p.crossOrigin="Anonymous",p.src=u.source});this.cachedImages[u.source]=h}catch(h){console.error(h)}if(this.isLocked=!1,a.character.name===this.character.name){this.cachedSprites.splice(0);for(const c of this.render(this.$refs.canvas.getContext("2d"),this.canvasWidth,this.canvasHeight,a.images))this.cachedSprites.push(c)}else{this.alternative=this.character.alternative,this.alternativeCachedSprites.splice(0);for(const c of this.render(this.$refs.alternative.getContext("2d"),this.alternativeCanvasWidth,this.alternativeCanvasHeight,a.images))this.alternativeCachedSprites.push(c)}this.animationQueue.shift()}}}vn.end()},render:function(n,s,i,r){const o=[];n.clearRect(0,0,s,i);for(const a of r)a.source in this.cachedImages&&("opacity"in a?n.globalAlpha=a.opacity:n.globalAlpha=1,n.drawImage(this.cachedImages[a.source],a.x*window.devicePixelRatio,a.y*window.devicePixelRatio,a.width*window.devicePixelRatio,a.height*window.devicePixelRatio)),o.push(a);return o}},updated:function(){this.insetTop=this.$refs.indicator.getBoundingClientRect().height,this.insetBottom=this.$refs.blank.getBoundingClientRect().height},mounted:async function(){function n(f,d){const p=Math.random();let v=0,_=0;for(let y of f){const m=d(y);if(v<=p&&p<v+m)break;v+=m,_++}return f[_]}const s=this,i=localStorage.getItem("character"),r=localStorage.getItem("credential"),o=localStorage.getItem("stats"),a=localStorage.getItem("fragments");let l=null,c;const u=[{path:"/assets/milch.json",probability:1}],h=[{path:"/assets/merku.json",probability:1}];if(window.location.pathname==="/about"&&(this.mode="_about",this.isRevealed=!0),i)try{const f=JSON.parse(i);f!==null&&(this.isMuted=f.mute)}catch{localStorage.removeItem("character")}if(r)try{l=JSON.parse(r)}catch{localStorage.removeItem("credential")}if(o){const f=new Date().getTime()-7*24*60*60*1e3;try{for(const d of JSON.parse(o)){const p=new Date(d.date);p.getTime()>f&&this.stats.push({date:p,steps:d.steps})}}catch{localStorage.removeItem("stats")}}if(a)try{c=JSON.parse(a)}catch{localStorage.removeItem("fragments"),c=[]}else c=[];this.$refs.container.after(vn.domElement),this.insetTop=this.$refs.indicator.getBoundingClientRect().height,this.insetBottom=this.$refs.blank.getBoundingClientRect().height,this.map=new Microsoft.Maps.Map(this.$refs.map,{mapTypeId:Microsoft.Maps.MapTypeId.canvasLight}),this.map.setOptions({enableHighDpi:window.devicePixelRatio>1,showLocateMeButton:!1,showMapTypeSelector:!1,showZoomButtons:!1,showScalebar:!1,supportedMapTypes:[Microsoft.Maps.MapTypeId.grayscale,Microsoft.Maps.MapTypeId.canvasLight,Microsoft.Maps.MapTypeId.canvasDark]}),this.layer=new Microsoft.Maps.Layer,this.layer.setVisible(!1),this.map.layers.insert(this.layer),Microsoft.Maps.Events.addHandler(this.map,"viewchangeend",()=>{s.user!==null&&s.update()});try{this.progress=1;const f=await fetch(n(u,d=>d.probability).path,{mode:"cors",method:"GET",headers:{"Content-Type":"application/x-www-form-urlencoded"}});if(f.ok){const d=await f.json(),p=this.prepare(d.sequences.filter(m=>m.name==="Start"),null,d.sequences),v=await fetch(n(h,m=>m.probability).path,{mode:"cors",method:"GET",headers:{"Content-Type":"application/x-www-form-urlencoded"}});let _;if(v.ok)_=await v.json();else throw new Error(v.statusText);const y=await fetch("/assets/fragments.json",{mode:"cors",method:"GET",headers:{"Content-Type":"application/x-www-form-urlencoded"}});if(y.ok){const m=Math.floor(new Date/1e3),g=new Date().getTime()-24*60*60*1e3;let w=0;for(const T of await y.json()){const E=[];for(const I of T){const C=c.find(k=>I.some(R=>k.set.includes(R))&&k.count>0&&k.timestamp*1e3>g&&k.checksum===[...String(k.timestamp)].reduce((R,x)=>R+x,0)+[...String(k.count)].reduce((R,x)=>R+x,0));typeof C=="undefined"?E.push({set:I,index:0,count:0,timestamp:m,reserved:!0}):E.push({set:I,index:0,count:C.count,timestamp:C.timestamp,reserved:!0})}this.chars.push(E)}for(const T of c)if(!T.set.some(E=>this.chars.some(I=>I.some(C=>C.set.includes(E))))){const E=[];E.push({set:T.set,index:0,count:T.count,timestamp:T.timestamp,reserved:!1}),this.chars.splice(w,0,E),w++}}else throw new Error(y.statusText);this.progress=null,this.canvasSize.width=d.width,this.canvasSize.height=d.height,this.canvasSize.deviceWidth=d.width*window.devicePixelRatio,this.canvasSize.deviceHeight=d.height*window.devicePixelRatio,this.canvasSize.alternative.width=_.width,this.canvasSize.alternative.height=_.height,this.canvasSize.alternative.deviceWidth=_.width*window.devicePixelRatio,this.canvasSize.alternative.deviceHeight=_.height*window.devicePixelRatio;for(const m of p)if(m.type=="Animation"&&"frames"in m&&m.frames.length>0){let g=null;if(Array.isArray(m.frames[0])?g=m.frames[0]:typeof m.frames[0]=="object"&&"iterations"in m.frames[0]&&("images"in m.frames[0]&&m.frames[0].images.length>0?g=m.frames[0].images:"sprites"in m.frames[0]&&m.frames[0].sprites.length>0&&(g=m.frames[0].sprites)),g!==null){for(const w of g)if(!(w.source in this.cachedImages))try{const T=await new Promise(async(E,I)=>{const C=new Image;C.onload=()=>{E(C)},C.onerror=k=>{I(k)},C.crossOrigin="Anonymous",C.src=w.source});this.cachedImages[w.source]=T}catch(T){console.error(T)}this.cachedSprites.splice(0);for(const w of this.render(this.$refs.canvas.getContext("2d"),this.canvasWidth,this.canvasHeight,g))this.cachedSprites.push(w)}break}this.character=d,this.character.alternative=_,this.sequenceQueue.push(p)}else throw new Error(f.statusText)}catch(f){this.progress=null,this.notify({text:f.message}),console.error(f)}if(this.animate(),l===null)this.mode="sign-in",this.isRevealed=!0;else if(l.providerId===It.PROVIDER_ID)try{qu(Ut,It.credential(l.idToken))}catch(f){s.notify({text:f.message,accent:this.character.accent,image:this.character.image}),console.error(f.code,f.message)}else if(l.providerId===Et.PROVIDER_ID)try{qu(Ut,Et.credential(l.accessToken))}catch(f){s.notify({text:f.message,accent:this.character.accent,image:this.character.image}),console.error(f.code,f.message)}else if(l.providerId===Tt.PROVIDER_ID)try{qu(Ut,Tt.credential(l.accessToken,l.secret))}catch(f){s.notify({text:f.message,accent:this.character.accent,image:this.character.image}),console.error(f.code,f.message)}else this.mode="sign-in",this.isRevealed=!0;dS(Ut,f=>{if(f){const d=new Date;s.user=f,s.update();for(const p of s.stats)p.date.getFullYear()===d.getFullYear()&&p.date.getMonth()===d.getMonth()&&p.date.getDate()===d.getDate()&&(s.steps=p.steps);Zh(de(pe,me+"/users/"+f.uid+"/dictionary/count"),p=>{const v=p.val();v===null?s.stars=0:s.stars=v}),Zh(Rs(de(pe,me+"/tracks"),cl("timestamp"),ll(10)),p=>{if(p.exists()){const v=p.val();let _=!1;for(const y in v){const m=s.recentWords.findIndex(g=>g.name===v[y].name);if(m>=0)if(s.recentWords[m].timestamp<v[y].timestamp)s.recentWords.splice(m,1);else continue;v[y].id=y,s.recentWords.push(v[y]),_=!0}_&&(s.recentWords.sort((y,m)=>m.timestamp-y.timestamp),s.recentWords.length>10&&s.recentWords.splice(10,s.recentWords.length-10))}})}else s.user!==null&&(yy(de(pe,me+"/users/"+s.user.uid+"/dictionary/count")),yy(de(pe,me+"/tracks")),s.user=null,s.stars=0)})}}).mount("#app");window.addEventListener("resize",n=>{e.insetTop=e.$refs.indicator.getBoundingClientRect().height,e.insetBottom=e.$refs.blank.getBoundingClientRect().height,e.canvasSize.width=e.character.width,e.canvasSize.height=e.character.height,e.canvasSize.deviceWidth=e.character.width*window.devicePixelRatio,e.canvasSize.deviceHeight=e.character.height*window.devicePixelRatio,e.canvasSize.alternative.width=e.character.alternative.width,e.canvasSize.alternative.height=e.character.alternative.height,e.canvasSize.alternative.deviceWidth=e.character.alternative.width*window.devicePixelRatio,e.canvasSize.alternative.deviceHeight=e.character.alternative.height*window.devicePixelRatio,e.animationQueue.unshift({character:e.character,images:[].concat(e.cachedSprites)}),e.alternative!==null&&e.animationQueue.unshift({character:e.character.alternative,images:[].concat(e.alternativeCachedSprites)})}),window.addEventListener("click",n=>{}),window.addEventListener("dblclick",n=>{}),window.addEventListener("mousedown",n=>{}),window.addEventListener("mousemove",n=>{}),window.addEventListener("mouseup",n=>{}),window.addEventListener("touchstart",n=>{n.stopPropagation(),El==0?(El++,setTimeout(()=>{El=0},500)):El=0}),window.addEventListener("touchmove",n=>{n.stopPropagation()}),window.addEventListener("touchend",n=>{n.stopPropagation()}),window.addEventListener("touchcancel",n=>{n.stopPropagation()}),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",n=>{n.matches?e.isDarkMode=!0:e.isDarkMode=!1})});
