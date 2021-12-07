var t0=Object.defineProperty;var Kd=Object.getOwnPropertySymbols;var n0=Object.prototype.hasOwnProperty,i0=Object.prototype.propertyIsEnumerable;var Zd=(n,e,t)=>e in n?t0(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Jd=(n,e)=>{for(var t in e||(e={}))n0.call(e,t)&&Zd(n,t,e[t]);if(Kd)for(var t of Kd(e))i0.call(e,t)&&Zd(n,t,e[t]);return n};const r0=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}};r0();function mn(n,e){const t=Object.create(null),i=n.split(",");for(let r=0;r<i.length;r++)t[i[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}const s0="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",o0=mn(s0),a0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",l0=mn(a0);function ep(n){return!!n||n===""}function go(n){if(be(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=De(i)?tp(i):go(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(De(n))return n;if(ft(n))return n}}const c0=/;(?![^(]*\))/g,u0=/:(.+)/;function tp(n){const e={};return n.split(c0).forEach(t=>{if(t){const i=t.split(u0);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function _o(n){let e="";if(De(n))e=n;else if(be(n))for(let t=0;t<n.length;t++){const i=_o(n[t]);i&&(e+=i+" ")}else if(ft(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}function f0(n){if(!n)return null;let{class:e,style:t}=n;return e&&!De(e)&&(n.class=_o(e)),t&&(n.style=go(t)),n}const h0="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",d0="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",p0="area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr",m0=mn(h0),g0=mn(d0),_0=mn(p0);function v0(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=Di(n[i],e[i]);return t}function Di(n,e){if(n===e)return!0;let t=rp(n),i=rp(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=be(n),i=be(e),t||i)return t&&i?v0(n,e):!1;if(t=ft(n),i=ft(e),t||i){if(!t||!i)return!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Di(n[o],e[o]))return!1}}return String(n)===String(e)}function Ga(n,e){return n.findIndex(t=>Di(t,e))}const x0=n=>n==null?"":be(n)||ft(n)&&(n.toString===sp||!Re(n.toString))?JSON.stringify(n,np,2):String(n),np=(n,e)=>e&&e.__v_isRef?np(n,e.value):Qr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r])=>(t[`${i} =>`]=r,t),{})}:Tr(e)?{[`Set(${e.size})`]:[...e.values()]}:ft(e)&&!be(e)&&!op(e)?String(e):e,qe={},jr=[],tn=()=>{},Wa=()=>!1,y0=/^on[^a-z]/,br=n=>y0.test(n),au=n=>n.startsWith("onUpdate:"),je=Object.assign,ip=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},b0=Object.prototype.hasOwnProperty,Ye=(n,e)=>b0.call(n,e),be=Array.isArray,Qr=n=>Xa(n)==="[object Map]",Tr=n=>Xa(n)==="[object Set]",rp=n=>n instanceof Date,Re=n=>typeof n=="function",De=n=>typeof n=="string",$r=n=>typeof n=="symbol",ft=n=>n!==null&&typeof n=="object",lu=n=>ft(n)&&Re(n.then)&&Re(n.catch),sp=Object.prototype.toString,Xa=n=>sp.call(n),T0=n=>Xa(n).slice(8,-1),op=n=>Xa(n)==="[object Object]",cu=n=>De(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Mr=mn(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ya=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},M0=/-(\w)/g,Yt=Ya(n=>n.replace(M0,(e,t)=>t?t.toUpperCase():"")),w0=/\B([A-Z])/g,kn=Ya(n=>n.replace(w0,"-$1").toLowerCase()),wr=Ya(n=>n.charAt(0).toUpperCase()+n.slice(1)),Kr=Ya(n=>n?`on${wr(n)}`:""),vo=(n,e)=>!Object.is(n,e),Zr=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},qa=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},Oi=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let ap;const S0=()=>ap||(ap=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let jn;const ja=[];class uu{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&jn&&(this.parent=jn,this.index=(jn.scopes||(jn.scopes=[])).push(this)-1)}run(e){if(this.active)try{return this.on(),e()}finally{this.off()}}on(){this.active&&(ja.push(this),jn=this)}off(){this.active&&(ja.pop(),jn=ja[ja.length-1])}stop(e){if(this.active){if(this.effects.forEach(t=>t.stop()),this.cleanups.forEach(t=>t()),this.scopes&&this.scopes.forEach(t=>t.stop(!0)),this.parent&&!e){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.active=!1}}}function A0(n){return new uu(n)}function lp(n,e){e=e||jn,e&&e.active&&e.effects.push(n)}function E0(){return jn}function L0(n){jn&&jn.cleanups.push(n)}const fu=n=>{const e=new Set(n);return e.w=0,e.n=0,e},cp=n=>(n.w&Ui)>0,up=n=>(n.n&Ui)>0,P0=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=Ui},R0=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const r=e[i];cp(r)&&!up(r)?r.delete(n):e[t++]=r,r.w&=~Ui,r.n&=~Ui}e.length=t}},hu=new WeakMap;let xo=0,Ui=1;const du=30,yo=[];let Sr;const Ar=Symbol(""),pu=Symbol("");class bo{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],lp(this,i)}run(){if(!this.active)return this.fn();if(!yo.includes(this))try{return yo.push(Sr=this),I0(),Ui=1<<++xo,xo<=du?P0(this):fp(this),this.fn()}finally{xo<=du&&R0(this),Ui=1<<--xo,Bi(),yo.pop();const e=yo.length;Sr=e>0?yo[e-1]:void 0}}stop(){this.active&&(fp(this),this.onStop&&this.onStop(),this.active=!1)}}function fp(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}function C0(n,e){n.effect&&(n=n.effect.fn);const t=new bo(n);e&&(je(t,e),e.scope&&lp(t,e.scope)),(!e||!e.lazy)&&t.run();const i=t.run.bind(t);return i.effect=t,i}function F0(n){n.effect.stop()}let Jr=!0;const mu=[];function Er(){mu.push(Jr),Jr=!1}function I0(){mu.push(Jr),Jr=!0}function Bi(){const n=mu.pop();Jr=n===void 0?!0:n}function gn(n,e,t){if(!hp())return;let i=hu.get(n);i||hu.set(n,i=new Map);let r=i.get(t);r||i.set(t,r=fu()),dp(r)}function hp(){return Jr&&Sr!==void 0}function dp(n,e){let t=!1;xo<=du?up(n)||(n.n|=Ui,t=!cp(n)):t=!n.has(Sr),t&&(n.add(Sr),Sr.deps.push(n))}function di(n,e,t,i,r,s){const o=hu.get(n);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&be(n))o.forEach((l,c)=>{(c==="length"||c>=i)&&a.push(l)});else switch(t!==void 0&&a.push(o.get(t)),e){case"add":be(n)?cu(t)&&a.push(o.get("length")):(a.push(o.get(Ar)),Qr(n)&&a.push(o.get(pu)));break;case"delete":be(n)||(a.push(o.get(Ar)),Qr(n)&&a.push(o.get(pu)));break;case"set":Qr(n)&&a.push(o.get(Ar));break}if(a.length===1)a[0]&&gu(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);gu(fu(l))}}function gu(n,e){for(const t of be(n)?n:[...n])(t!==Sr||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const N0=mn("__proto__,__v_isRef,__isVue"),pp=new Set(Object.getOwnPropertyNames(Symbol).map(n=>Symbol[n]).filter($r)),D0=Qa(),O0=Qa(!1,!0),U0=Qa(!0),B0=Qa(!0,!0),mp=k0();function k0(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=Ve(this);for(let s=0,o=this.length;s<o;s++)gn(i,"get",s+"");const r=i[e](...t);return r===-1||r===!1?i[e](...t.map(Ve)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){Er();const i=Ve(this)[e].apply(this,t);return Bi(),i}}),n}function Qa(n=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!n;if(r==="__v_isReadonly")return n;if(r==="__v_raw"&&s===(n?e?Ap:Sp:e?wp:Mp).get(i))return i;const o=be(i);if(!n&&o&&Ye(mp,r))return Reflect.get(mp,r,s);const a=Reflect.get(i,r,s);return($r(r)?pp.has(r):N0(r))||(n||gn(i,"get",r),e)?a:kt(a)?!o||!cu(r)?a.value:a:ft(a)?n?vu(a):il(a):a}}const H0=gp(),z0=gp(!0);function gp(n=!1){return function(t,i,r,s){let o=t[i];if(!n&&!sl(r)&&(r=Ve(r),o=Ve(o),!be(t)&&kt(o)&&!kt(r)))return o.value=r,!0;const a=be(t)&&cu(i)?Number(i)<t.length:Ye(t,i),l=Reflect.set(t,i,r,s);return t===Ve(s)&&(a?vo(r,o)&&di(t,"set",i,r):di(t,"add",i,r)),l}}function V0(n,e){const t=Ye(n,e);n[e];const i=Reflect.deleteProperty(n,e);return i&&t&&di(n,"delete",e,void 0),i}function G0(n,e){const t=Reflect.has(n,e);return(!$r(e)||!pp.has(e))&&gn(n,"has",e),t}function W0(n){return gn(n,"iterate",be(n)?"length":Ar),Reflect.ownKeys(n)}const _p={get:D0,set:H0,deleteProperty:V0,has:G0,ownKeys:W0},vp={get:U0,set(n,e){return!0},deleteProperty(n,e){return!0}},X0=je({},_p,{get:O0,set:z0}),Y0=je({},vp,{get:B0}),_u=n=>n,$a=n=>Reflect.getPrototypeOf(n);function Ka(n,e,t=!1,i=!1){n=n.__v_raw;const r=Ve(n),s=Ve(e);e!==s&&!t&&gn(r,"get",e),!t&&gn(r,"get",s);const{has:o}=$a(r),a=i?_u:t?bu:To;if(o.call(r,e))return a(n.get(e));if(o.call(r,s))return a(n.get(s));n!==r&&n.get(e)}function Za(n,e=!1){const t=this.__v_raw,i=Ve(t),r=Ve(n);return n!==r&&!e&&gn(i,"has",n),!e&&gn(i,"has",r),n===r?t.has(n):t.has(n)||t.has(r)}function Ja(n,e=!1){return n=n.__v_raw,!e&&gn(Ve(n),"iterate",Ar),Reflect.get(n,"size",n)}function xp(n){n=Ve(n);const e=Ve(this);return $a(e).has.call(e,n)||(e.add(n),di(e,"add",n,n)),this}function yp(n,e){e=Ve(e);const t=Ve(this),{has:i,get:r}=$a(t);let s=i.call(t,n);s||(n=Ve(n),s=i.call(t,n));const o=r.call(t,n);return t.set(n,e),s?vo(e,o)&&di(t,"set",n,e):di(t,"add",n,e),this}function bp(n){const e=Ve(this),{has:t,get:i}=$a(e);let r=t.call(e,n);r||(n=Ve(n),r=t.call(e,n)),i&&i.call(e,n);const s=e.delete(n);return r&&di(e,"delete",n,void 0),s}function Tp(){const n=Ve(this),e=n.size!==0,t=n.clear();return e&&di(n,"clear",void 0,void 0),t}function el(n,e){return function(i,r){const s=this,o=s.__v_raw,a=Ve(o),l=e?_u:n?bu:To;return!n&&gn(a,"iterate",Ar),o.forEach((c,f)=>i.call(r,l(c),l(f),s))}}function tl(n,e,t){return function(...i){const r=this.__v_raw,s=Ve(r),o=Qr(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),f=t?_u:e?bu:To;return!e&&gn(s,"iterate",l?pu:Ar),{next(){const{value:u,done:h}=c.next();return h?{value:u,done:h}:{value:a?[f(u[0]),f(u[1])]:f(u),done:h}},[Symbol.iterator](){return this}}}}function ki(n){return function(...e){return n==="delete"?!1:this}}function q0(){const n={get(s){return Ka(this,s)},get size(){return Ja(this)},has:Za,add:xp,set:yp,delete:bp,clear:Tp,forEach:el(!1,!1)},e={get(s){return Ka(this,s,!1,!0)},get size(){return Ja(this)},has:Za,add:xp,set:yp,delete:bp,clear:Tp,forEach:el(!1,!0)},t={get(s){return Ka(this,s,!0)},get size(){return Ja(this,!0)},has(s){return Za.call(this,s,!0)},add:ki("add"),set:ki("set"),delete:ki("delete"),clear:ki("clear"),forEach:el(!0,!1)},i={get(s){return Ka(this,s,!0,!0)},get size(){return Ja(this,!0)},has(s){return Za.call(this,s,!0)},add:ki("add"),set:ki("set"),delete:ki("delete"),clear:ki("clear"),forEach:el(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=tl(s,!1,!1),t[s]=tl(s,!0,!1),e[s]=tl(s,!1,!0),i[s]=tl(s,!0,!0)}),[n,t,e,i]}const[j0,Q0,$0,K0]=q0();function nl(n,e){const t=e?n?K0:$0:n?Q0:j0;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Ye(t,r)&&r in i?t:i,r,s)}const Z0={get:nl(!1,!1)},J0={get:nl(!1,!0)},eb={get:nl(!0,!1)},tb={get:nl(!0,!0)},Mp=new WeakMap,wp=new WeakMap,Sp=new WeakMap,Ap=new WeakMap;function nb(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ib(n){return n.__v_skip||!Object.isExtensible(n)?0:nb(T0(n))}function il(n){return n&&n.__v_isReadonly?n:rl(n,!1,_p,Z0,Mp)}function Ep(n){return rl(n,!1,X0,J0,wp)}function vu(n){return rl(n,!0,vp,eb,Sp)}function rb(n){return rl(n,!0,Y0,tb,Ap)}function rl(n,e,t,i,r){if(!ft(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const o=ib(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function Lr(n){return sl(n)?Lr(n.__v_raw):!!(n&&n.__v_isReactive)}function sl(n){return!!(n&&n.__v_isReadonly)}function xu(n){return Lr(n)||sl(n)}function Ve(n){const e=n&&n.__v_raw;return e?Ve(e):n}function yu(n){return qa(n,"__v_skip",!0),n}const To=n=>ft(n)?il(n):n,bu=n=>ft(n)?vu(n):n;function Tu(n){hp()&&(n=Ve(n),n.dep||(n.dep=fu()),dp(n.dep))}function ol(n,e){n=Ve(n),n.dep&&gu(n.dep)}function kt(n){return Boolean(n&&n.__v_isRef===!0)}function al(n){return Lp(n,!1)}function sb(n){return Lp(n,!0)}function Lp(n,e){return kt(n)?n:new ob(n,e)}class ob{constructor(e,t){this._shallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Ve(e),this._value=t?e:To(e)}get value(){return Tu(this),this._value}set value(e){e=this._shallow?e:Ve(e),vo(e,this._rawValue)&&(this._rawValue=e,this._value=this._shallow?e:To(e),ol(this))}}function ab(n){ol(n)}function Pp(n){return kt(n)?n.value:n}const lb={get:(n,e,t)=>Pp(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return kt(r)&&!kt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Mu(n){return Lr(n)?n:new Proxy(n,lb)}class cb{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:t,set:i}=e(()=>Tu(this),()=>ol(this));this._get=t,this._set=i}get value(){return this._get()}set value(e){this._set(e)}}function ub(n){return new cb(n)}function fb(n){const e=be(n)?new Array(n.length):{};for(const t in n)e[t]=Rp(n,t);return e}class hb{constructor(e,t){this._object=e,this._key=t,this.__v_isRef=!0}get value(){return this._object[this._key]}set value(e){this._object[this._key]=e}}function Rp(n,e){const t=n[e];return kt(t)?t:new hb(n,e)}class db{constructor(e,t,i){this._setter=t,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new bo(e,()=>{this._dirty||(this._dirty=!0,ol(this))}),this.__v_isReadonly=i}get value(){const e=Ve(this);return Tu(e),e._dirty&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Cp(n,e){let t,i;const r=Re(n);return r?(t=n,i=tn):(t=n.get,i=n.set),new db(t,i,r||!i)}Promise.resolve();let es,ll=[];function Fp(n,e){var t,i;es=n,es?(es.enabled=!0,ll.forEach(({event:r,args:s})=>es.emit(r,...s)),ll=[]):typeof window!="undefined"&&window.HTMLElement&&!((i=(t=window.navigator)===null||t===void 0?void 0:t.userAgent)===null||i===void 0?void 0:i.includes("jsdom"))?((e.__VUE_DEVTOOLS_HOOK_REPLAY__=e.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(s=>{Fp(s,e)}),setTimeout(()=>{es||(e.__VUE_DEVTOOLS_HOOK_REPLAY__=null,ll=[])},3e3)):ll=[]}function pb(n,e,...t){const i=n.vnode.props||qe;let r=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in i){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:u,trim:h}=i[f]||qe;h?r=t.map(d=>d.trim()):u&&(r=t.map(Oi))}let a,l=i[a=Kr(e)]||i[a=Kr(Yt(e))];!l&&s&&(l=i[a=Kr(kn(e))]),l&&xn(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,xn(c,n,6,r)}}function Ip(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Re(n)){const l=c=>{const f=Ip(c,e,!0);f&&(a=!0,je(o,f))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(i.set(n,null),null):(be(s)?s.forEach(l=>o[l]=null):je(o,s),i.set(n,o),o)}function wu(n,e){return!n||!br(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ye(n,e[0].toLowerCase()+e.slice(1))||Ye(n,kn(e))||Ye(n,e))}let _n=null,cl=null;function Mo(n){const e=_n;return _n=n,cl=n&&n.type.__scopeId||null,e}function mb(n){cl=n}function gb(){cl=null}const _b=n=>Su;function Su(n,e=_n,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Wu(-1);const s=Mo(e),o=n(...r);return Mo(s),i._d&&Wu(1),o};return i._n=!0,i._c=!0,i._d=!0,i}function ul(n){const{type:e,vnode:t,proxy:i,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:f,renderCache:u,data:h,setupState:d,ctx:m,inheritAttrs:_}=n;let v,p;const g=Mo(n);try{if(t.shapeFlag&4){const b=r||i;v=vn(f.call(b,b,u,s,d,h,m)),p=l}else{const b=e;v=vn(b.length>1?b(s,{attrs:l,slots:a,emit:c}):b(s,null)),p=e.props?l:xb(l)}}catch(b){Co.length=0,Fr(b,n,1),v=rt(rn)}let x=v;if(p&&_!==!1){const b=Object.keys(p),{shapeFlag:T}=x;b.length&&T&(1|6)&&(o&&b.some(au)&&(p=yb(p,o)),x=Vi(x,p))}return t.dirs&&(x.dirs=x.dirs?x.dirs.concat(t.dirs):t.dirs),t.transition&&(x.transition=t.transition),v=x,Mo(g),v}function vb(n){let e;for(let t=0;t<n.length;t++){const i=n[t];if(zi(i)){if(i.type!==rn||i.children==="v-if"){if(e)return;e=i}}else return}return e}const xb=n=>{let e;for(const t in n)(t==="class"||t==="style"||br(t))&&((e||(e={}))[t]=n[t]);return e},yb=(n,e)=>{const t={};for(const i in n)(!au(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function bb(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Np(i,o,c):!!o;if(l&8){const f=e.dynamicProps;for(let u=0;u<f.length;u++){const h=f[u];if(o[h]!==i[h]&&!wu(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Np(i,o,c):!0:!!o;return!1}function Np(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!wu(t,s))return!0}return!1}function Au({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const Tb=n=>n.__isSuspense,Mb={name:"Suspense",__isSuspense:!0,process(n,e,t,i,r,s,o,a,l,c){n==null?Sb(e,t,i,r,s,o,a,l,c):Ab(n,e,t,i,r,o,a,l,c)},hydrate:Eb,create:Eu,normalize:Lb},wb=Mb;function wo(n,e){const t=n.props&&n.props[e];Re(t)&&t()}function Sb(n,e,t,i,r,s,o,a,l){const{p:c,o:{createElement:f}}=l,u=f("div"),h=n.suspense=Eu(n,r,i,e,u,t,s,o,a,l);c(null,h.pendingBranch=n.ssContent,u,null,i,h,s,o),h.deps>0?(wo(n,"onPending"),wo(n,"onFallback"),c(null,n.ssFallback,e,t,i,null,s,o),ts(h,n.ssFallback)):h.resolve()}function Ab(n,e,t,i,r,s,o,a,{p:l,um:c,o:{createElement:f}}){const u=e.suspense=n.suspense;u.vnode=e,e.el=n.el;const h=e.ssContent,d=e.ssFallback,{activeBranch:m,pendingBranch:_,isInFallback:v,isHydrating:p}=u;if(_)u.pendingBranch=h,Kn(h,_)?(l(_,h,u.hiddenContainer,null,r,u,s,o,a),u.deps<=0?u.resolve():v&&(l(m,d,t,i,r,null,s,o,a),ts(u,d))):(u.pendingId++,p?(u.isHydrating=!1,u.activeBranch=_):c(_,r,u),u.deps=0,u.effects.length=0,u.hiddenContainer=f("div"),v?(l(null,h,u.hiddenContainer,null,r,u,s,o,a),u.deps<=0?u.resolve():(l(m,d,t,i,r,null,s,o,a),ts(u,d))):m&&Kn(h,m)?(l(m,h,t,i,r,u,s,o,a),u.resolve(!0)):(l(null,h,u.hiddenContainer,null,r,u,s,o,a),u.deps<=0&&u.resolve()));else if(m&&Kn(h,m))l(m,h,t,i,r,u,s,o,a),ts(u,h);else if(wo(e,"onPending"),u.pendingBranch=h,u.pendingId++,l(null,h,u.hiddenContainer,null,r,u,s,o,a),u.deps<=0)u.resolve();else{const{timeout:g,pendingId:x}=u;g>0?setTimeout(()=>{u.pendingId===x&&u.fallback(d)},g):g===0&&u.fallback(d)}}function Eu(n,e,t,i,r,s,o,a,l,c,f=!1){const{p:u,m:h,um:d,n:m,o:{parentNode:_,remove:v}}=c,p=Oi(n.props&&n.props.timeout),g={vnode:n,parent:e,parentComponent:t,isSVG:o,container:i,hiddenContainer:r,anchor:s,deps:0,pendingId:0,timeout:typeof p=="number"?p:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:f,isUnmounted:!1,effects:[],resolve(x=!1){const{vnode:b,activeBranch:T,pendingBranch:S,pendingId:y,effects:E,parentComponent:N,container:F}=g;if(g.isHydrating)g.isHydrating=!1;else if(!x){const O=T&&S.transition&&S.transition.mode==="out-in";O&&(T.transition.afterLeave=()=>{y===g.pendingId&&h(S,F,H,0)});let{anchor:H}=g;T&&(H=m(T),d(T,N,g,!0)),O||h(S,F,H,0)}ts(g,S),g.pendingBranch=null,g.isInFallback=!1;let C=g.parent,V=!1;for(;C;){if(C.pendingBranch){C.effects.push(...E),V=!0;break}C=C.parent}V||of(E),g.effects=[],wo(b,"onResolve")},fallback(x){if(!g.pendingBranch)return;const{vnode:b,activeBranch:T,parentComponent:S,container:y,isSVG:E}=g;wo(b,"onFallback");const N=m(T),F=()=>{!g.isInFallback||(u(null,x,y,N,S,null,E,a,l),ts(g,x))},C=x.transition&&x.transition.mode==="out-in";C&&(T.transition.afterLeave=F),g.isInFallback=!0,d(T,S,null,!0),C||F()},move(x,b,T){g.activeBranch&&h(g.activeBranch,x,b,T),g.container=x},next(){return g.activeBranch&&m(g.activeBranch)},registerDep(x,b){const T=!!g.pendingBranch;T&&g.deps++;const S=x.vnode.el;x.asyncDep.catch(y=>{Fr(y,x,0)}).then(y=>{if(x.isUnmounted||g.isUnmounted||g.pendingId!==x.suspenseId)return;x.asyncResolved=!0;const{vnode:E}=x;Ku(x,y,!1),S&&(E.el=S);const N=!S&&x.subTree.el;b(x,E,_(S||x.subTree.el),S?null:m(x.subTree),g,o,l),N&&v(N),Au(x,E.el),T&&--g.deps==0&&g.resolve()})},unmount(x,b){g.isUnmounted=!0,g.activeBranch&&d(g.activeBranch,t,x,b),g.pendingBranch&&d(g.pendingBranch,t,x,b)}};return g}function Eb(n,e,t,i,r,s,o,a,l){const c=e.suspense=Eu(e,i,t,n.parentNode,document.createElement("div"),null,r,s,o,a,!0),f=l(n,c.pendingBranch=e.ssContent,t,c,s,o);return c.deps===0&&c.resolve(),f}function Lb(n){const{shapeFlag:e,children:t}=n,i=e&32;n.ssContent=Dp(i?t.default:t),n.ssFallback=i?Dp(t.fallback):rt(rn)}function Dp(n){let e;if(Re(n)){const t=rs&&n._c;t&&(n._d=!1,yl()),n=n(),t&&(n._d=!0,e=$n,mm())}return be(n)&&(n=vb(n)),n=vn(n),e&&!n.dynamicChildren&&(n.dynamicChildren=e.filter(t=>t!==n)),n}function Op(n,e){e&&e.pendingBranch?be(n)?e.effects.push(...n):e.effects.push(n):of(n)}function ts(n,e){n.activeBranch=e;const{vnode:t,parentComponent:i}=n,r=t.el=e.el;i&&i.subTree===t&&(i.vnode.el=r,Au(i,r))}function Up(n,e){if(At){let t=At.provides;const i=At.parent&&At.parent.provides;i===t&&(t=At.provides=Object.create(i)),t[n]=e}}function So(n,e,t=!1){const i=At||_n;if(i){const r=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Re(e)?e.call(i.proxy):e}}function Lu(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Po(()=>{n.isMounted=!0}),pl(()=>{n.isUnmounting=!0}),n}const Sn=[Function,Array],Pb={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Sn,onEnter:Sn,onAfterEnter:Sn,onEnterCancelled:Sn,onBeforeLeave:Sn,onLeave:Sn,onAfterLeave:Sn,onLeaveCancelled:Sn,onBeforeAppear:Sn,onAppear:Sn,onAfterAppear:Sn,onAppearCancelled:Sn},setup(n,{slots:e}){const t=Wi(),i=Lu();let r;return()=>{const s=e.default&&fl(e.default(),!0);if(!s||!s.length)return;const o=Ve(n),{mode:a}=o,l=s[0];if(i.isLeaving)return Ru(l);const c=kp(l);if(!c)return Ru(l);const f=ns(c,o,i,t);Pr(c,f);const u=t.subTree,h=u&&kp(u);let d=!1;const{getTransitionKey:m}=c.type;if(m){const _=m();r===void 0?r=_:_!==r&&(r=_,d=!0)}if(h&&h.type!==rn&&(!Kn(c,h)||d)){const _=ns(h,o,i,t);if(Pr(h,_),a==="out-in")return i.isLeaving=!0,_.afterLeave=()=>{i.isLeaving=!1,t.update()},Ru(l);a==="in-out"&&c.type!==rn&&(_.delayLeave=(v,p,g)=>{const x=Bp(i,h);x[String(h.key)]=h,v._leaveCb=()=>{p(),v._leaveCb=void 0,delete f.delayedLeave},f.delayedLeave=g})}return l}}},Pu=Pb;function Bp(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function ns(n,e,t,i){const{appear:r,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:f,onBeforeLeave:u,onLeave:h,onAfterLeave:d,onLeaveCancelled:m,onBeforeAppear:_,onAppear:v,onAfterAppear:p,onAppearCancelled:g}=e,x=String(n.key),b=Bp(t,n),T=(y,E)=>{y&&xn(y,i,9,E)},S={mode:s,persisted:o,beforeEnter(y){let E=a;if(!t.isMounted)if(r)E=_||a;else return;y._leaveCb&&y._leaveCb(!0);const N=b[x];N&&Kn(n,N)&&N.el._leaveCb&&N.el._leaveCb(),T(E,[y])},enter(y){let E=l,N=c,F=f;if(!t.isMounted)if(r)E=v||l,N=p||c,F=g||f;else return;let C=!1;const V=y._enterCb=O=>{C||(C=!0,O?T(F,[y]):T(N,[y]),S.delayedLeave&&S.delayedLeave(),y._enterCb=void 0)};E?(E(y,V),E.length<=1&&V()):V()},leave(y,E){const N=String(n.key);if(y._enterCb&&y._enterCb(!0),t.isUnmounting)return E();T(u,[y]);let F=!1;const C=y._leaveCb=V=>{F||(F=!0,E(),V?T(m,[y]):T(d,[y]),y._leaveCb=void 0,b[N]===n&&delete b[N])};b[N]=n,h?(h(y,C),h.length<=1&&C()):C()},clone(y){return ns(y,e,t,i)}};return S}function Ru(n){if(Eo(n))return n=Vi(n),n.children=null,n}function kp(n){return Eo(n)?n.children?n.children[0]:void 0:n}function Pr(n,e){n.shapeFlag&6&&n.component?Pr(n.component.subTree,e):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function fl(n,e=!1){let t=[],i=0;for(let r=0;r<n.length;r++){const s=n[r];s.type===Ht?(s.patchFlag&128&&i++,t=t.concat(fl(s.children,e))):(e||s.type!==rn)&&t.push(s)}if(i>1)for(let r=0;r<t.length;r++)t[r].patchFlag=-2;return t}function Cu(n){return Re(n)?{setup:n,name:n.name}:n}const Ao=n=>!!n.type.__asyncLoader;function Rb(n){Re(n)&&(n={loader:n});const{loader:e,loadingComponent:t,errorComponent:i,delay:r=200,timeout:s,suspensible:o=!0,onError:a}=n;let l=null,c,f=0;const u=()=>(f++,l=null,h()),h=()=>{let d;return l||(d=l=e().catch(m=>{if(m=m instanceof Error?m:new Error(String(m)),a)return new Promise((_,v)=>{a(m,()=>_(u()),()=>v(m),f+1)});throw m}).then(m=>d!==l&&l?l:(m&&(m.__esModule||m[Symbol.toStringTag]==="Module")&&(m=m.default),c=m,m)))};return Cu({name:"AsyncComponentWrapper",__asyncLoader:h,get __asyncResolved(){return c},setup(){const d=At;if(c)return()=>Fu(c,d);const m=g=>{l=null,Fr(g,d,13,!i)};if(o&&d.suspense||Fo)return h().then(g=>()=>Fu(g,d)).catch(g=>(m(g),()=>i?rt(i,{error:g}):null));const _=al(!1),v=al(),p=al(!!r);return r&&setTimeout(()=>{p.value=!1},r),s!=null&&setTimeout(()=>{if(!_.value&&!v.value){const g=new Error(`Async component timed out after ${s}ms.`);m(g),v.value=g}},s),h().then(()=>{_.value=!0,d.parent&&Eo(d.parent.vnode)&&sf(d.parent.update)}).catch(g=>{m(g),v.value=g}),()=>{if(_.value&&c)return Fu(c,d);if(v.value&&i)return rt(i,{error:v.value});if(t&&!p.value)return rt(t)}}})}function Fu(n,{vnode:{ref:e,props:t,children:i}}){const r=rt(n,t,i);return r.ref=e,r}const Eo=n=>n.type.__isKeepAlive,Cb={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(n,{slots:e}){const t=Wi(),i=t.ctx;if(!i.renderer)return e.default;const r=new Map,s=new Set;let o=null;const a=t.suspense,{renderer:{p:l,m:c,um:f,o:{createElement:u}}}=i,h=u("div");i.activate=(g,x,b,T,S)=>{const y=g.component;c(g,x,b,0,a),l(y.vnode,g,x,b,y,a,T,g.slotScopeIds,S),Rt(()=>{y.isDeactivated=!1,y.a&&Zr(y.a);const E=g.props&&g.props.onVnodeMounted;E&&ln(E,y.parent,g)},a)},i.deactivate=g=>{const x=g.component;c(g,h,null,1,a),Rt(()=>{x.da&&Zr(x.da);const b=g.props&&g.props.onVnodeUnmounted;b&&ln(b,x.parent,g),x.isDeactivated=!0},a)};function d(g){Iu(g),f(g,t,a)}function m(g){r.forEach((x,b)=>{const T=Sl(x.type);T&&(!g||!g(T))&&_(b)})}function _(g){const x=r.get(g);!o||x.type!==o.type?d(x):o&&Iu(o),r.delete(g),s.delete(g)}Bo(()=>[n.include,n.exclude],([g,x])=>{g&&m(b=>Lo(g,b)),x&&m(b=>!Lo(x,b))},{flush:"post",deep:!0});let v=null;const p=()=>{v!=null&&r.set(v,Nu(t.subTree))};return Po(p),dl(p),pl(()=>{r.forEach(g=>{const{subTree:x,suspense:b}=t,T=Nu(x);if(g.type===T.type){Iu(T);const S=T.component.da;S&&Rt(S,b);return}d(g)})}),()=>{if(v=null,!e.default)return null;const g=e.default(),x=g[0];if(g.length>1)return o=null,g;if(!zi(x)||!(x.shapeFlag&4)&&!(x.shapeFlag&128))return o=null,x;let b=Nu(x);const T=b.type,S=Sl(Ao(b)?b.type.__asyncResolved||{}:T),{include:y,exclude:E,max:N}=n;if(y&&(!S||!Lo(y,S))||E&&S&&Lo(E,S))return o=b,x;const F=b.key==null?T:b.key,C=r.get(F);return b.el&&(b=Vi(b),x.shapeFlag&128&&(x.ssContent=b)),v=F,C?(b.el=C.el,b.component=C.component,b.transition&&Pr(b,b.transition),b.shapeFlag|=512,s.delete(F),s.add(F)):(s.add(F),N&&s.size>parseInt(N,10)&&_(s.values().next().value)),b.shapeFlag|=256,o=b,x}}},Fb=Cb;function Lo(n,e){return be(n)?n.some(t=>Lo(t,e)):De(n)?n.split(",").indexOf(e)>-1:n.test?n.test(e):!1}function Hp(n,e){Vp(n,"a",e)}function zp(n,e){Vp(n,"da",e)}function Vp(n,e,t=At){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(hl(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Eo(r.parent.vnode)&&Ib(i,e,t,r),r=r.parent}}function Ib(n,e,t,i){const r=hl(e,n,i,!0);ml(()=>{ip(i[e],r)},t)}function Iu(n){let e=n.shapeFlag;e&256&&(e-=256),e&512&&(e-=512),n.shapeFlag=e}function Nu(n){return n.shapeFlag&128?n.ssContent:n}function hl(n,e,t=At,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;Er(),Xi(t);const a=xn(e,t,n,o);return Yi(),Bi(),a});return i?r.unshift(s):r.push(s),s}}const pi=n=>(e,t=At)=>(!Fo||n==="sp")&&hl(n,e,t),Gp=pi("bm"),Po=pi("m"),Wp=pi("bu"),dl=pi("u"),pl=pi("bum"),ml=pi("um"),Xp=pi("sp"),Yp=pi("rtg"),qp=pi("rtc");function jp(n,e=At){hl("ec",n,e)}let Du=!0;function Nb(n){const e=Kp(n),t=n.proxy,i=n.ctx;Du=!1,e.beforeCreate&&Qp(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:f,beforeMount:u,mounted:h,beforeUpdate:d,updated:m,activated:_,deactivated:v,beforeDestroy:p,beforeUnmount:g,destroyed:x,unmounted:b,render:T,renderTracked:S,renderTriggered:y,errorCaptured:E,serverPrefetch:N,expose:F,inheritAttrs:C,components:V,directives:O,filters:H}=e;if(c&&Db(c,i,null,n.appContext.config.unwrapInjectedRef),o)for(const q in o){const te=o[q];Re(te)&&(i[q]=te.bind(t))}if(r){const q=r.call(t,t);ft(q)&&(n.data=il(q))}if(Du=!0,s)for(const q in s){const te=s[q],pe=Re(te)?te.bind(t,t):Re(te.get)?te.get.bind(t,t):tn,Te=!Re(te)&&Re(te.set)?te.set.bind(t):tn,de=Cp({get:pe,set:Te});Object.defineProperty(i,q,{enumerable:!0,configurable:!0,get:()=>de.value,set:Me=>de.value=Me})}if(a)for(const q in a)$p(a[q],i,t,q);if(l){const q=Re(l)?l.call(t):l;Reflect.ownKeys(q).forEach(te=>{Up(te,q[te])})}f&&Qp(f,n,"c");function Y(q,te){be(te)?te.forEach(pe=>q(pe.bind(t))):te&&q(te.bind(t))}if(Y(Gp,u),Y(Po,h),Y(Wp,d),Y(dl,m),Y(Hp,_),Y(zp,v),Y(jp,E),Y(qp,S),Y(Yp,y),Y(pl,g),Y(ml,b),Y(Xp,N),be(F))if(F.length){const q=n.exposed||(n.exposed={});F.forEach(te=>{Object.defineProperty(q,te,{get:()=>t[te],set:pe=>t[te]=pe})})}else n.exposed||(n.exposed={});T&&n.render===tn&&(n.render=T),C!=null&&(n.inheritAttrs=C),V&&(n.components=V),O&&(n.directives=O)}function Db(n,e,t=tn,i=!1){be(n)&&(n=Ou(n));for(const r in n){const s=n[r];let o;ft(s)?"default"in s?o=So(s.from||r,s.default,!0):o=So(s.from||r):o=So(s),kt(o)&&i?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Qp(n,e,t){xn(be(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function $p(n,e,t,i){const r=i.includes(".")?Om(t,i):()=>t[i];if(De(n)){const s=e[n];Re(s)&&Bo(r,s)}else if(Re(n))Bo(r,n.bind(t));else if(ft(n))if(be(n))n.forEach(s=>$p(s,e,t,i));else{const s=Re(n.handler)?n.handler.bind(t):e[n.handler];Re(s)&&Bo(r,s,n)}}function Kp(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>gl(l,c,o,!0)),gl(l,e,o)),s.set(e,l),l}function gl(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&gl(n,s,t,!0),r&&r.forEach(o=>gl(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Ob[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Ob={data:Zp,props:Rr,emits:Rr,methods:Rr,computed:Rr,beforeCreate:nn,created:nn,beforeMount:nn,mounted:nn,beforeUpdate:nn,updated:nn,beforeDestroy:nn,beforeUnmount:nn,destroyed:nn,unmounted:nn,activated:nn,deactivated:nn,errorCaptured:nn,serverPrefetch:nn,components:Rr,directives:Rr,watch:Bb,provide:Zp,inject:Ub};function Zp(n,e){return e?n?function(){return je(Re(n)?n.call(this,this):n,Re(e)?e.call(this,this):e)}:e:n}function Ub(n,e){return Rr(Ou(n),Ou(e))}function Ou(n){if(be(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function nn(n,e){return n?[...new Set([].concat(n,e))]:e}function Rr(n,e){return n?je(je(Object.create(null),n),e):e}function Bb(n,e){if(!n)return e;if(!e)return n;const t=je(Object.create(null),n);for(const i in e)t[i]=nn(n[i],e[i]);return t}function kb(n,e,t,i=!1){const r={},s={};qa(s,bl,1),n.propsDefaults=Object.create(null),Jp(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:Ep(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Hb(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=Ve(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const f=n.vnode.dynamicProps;for(let u=0;u<f.length;u++){let h=f[u];const d=e[h];if(l)if(Ye(s,h))d!==s[h]&&(s[h]=d,c=!0);else{const m=Yt(h);r[m]=Uu(l,a,m,d,n,!1)}else d!==s[h]&&(s[h]=d,c=!0)}}}else{Jp(n,e,r,s)&&(c=!0);let f;for(const u in a)(!e||!Ye(e,u)&&((f=kn(u))===u||!Ye(e,f)))&&(l?t&&(t[u]!==void 0||t[f]!==void 0)&&(r[u]=Uu(l,a,u,void 0,n,!0)):delete r[u]);if(s!==a)for(const u in s)(!e||!Ye(e,u))&&(delete s[u],c=!0)}c&&di(n,"set","$attrs")}function Jp(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Mr(l))continue;const c=e[l];let f;r&&Ye(r,f=Yt(l))?!s||!s.includes(f)?t[f]=c:(a||(a={}))[f]=c:wu(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=Ve(t),c=a||qe;for(let f=0;f<s.length;f++){const u=s[f];t[u]=Uu(r,l,u,c[u],n,!Ye(c,u))}}return o}function Uu(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=Ye(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&Re(l)){const{propsDefaults:c}=r;t in c?i=c[t]:(Xi(r),i=c[t]=l.call(null,e),Yi())}else i=l}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===kn(t))&&(i=!0))}return i}function em(n,e,t=!1){const i=e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!Re(n)){const f=u=>{l=!0;const[h,d]=em(u,e,!0);je(o,h),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(f),n.extends&&f(n.extends),n.mixins&&n.mixins.forEach(f)}if(!s&&!l)return i.set(n,jr),jr;if(be(s))for(let f=0;f<s.length;f++){const u=Yt(s[f]);tm(u)&&(o[u]=qe)}else if(s)for(const f in s){const u=Yt(f);if(tm(u)){const h=s[f],d=o[u]=be(h)||Re(h)?{type:h}:h;if(d){const m=rm(Boolean,d.type),_=rm(String,d.type);d[0]=m>-1,d[1]=_<0||m<_,(m>-1||Ye(d,"default"))&&a.push(u)}}}const c=[o,a];return i.set(n,c),c}function tm(n){return n[0]!=="$"}function nm(n){const e=n&&n.toString().match(/^\s*function (\w+)/);return e?e[1]:n===null?"null":""}function im(n,e){return nm(n)===nm(e)}function rm(n,e){return be(e)?e.findIndex(t=>im(t,n)):Re(e)&&im(e,n)?0:-1}const sm=n=>n[0]==="_"||n==="$stable",Bu=n=>be(n)?n.map(vn):[vn(n)],zb=(n,e,t)=>{const i=Su((...r)=>Bu(e(...r)),t);return i._c=!1,i},om=(n,e,t)=>{const i=n._ctx;for(const r in n){if(sm(r))continue;const s=n[r];if(Re(s))e[r]=zb(r,s,i);else if(s!=null){const o=Bu(s);e[r]=()=>o}}},am=(n,e)=>{const t=Bu(e);n.slots.default=()=>t},Vb=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=Ve(e),qa(e,"_",t)):om(e,n.slots={})}else n.slots={},e&&am(n,e);qa(n.slots,bl,1)},Gb=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=qe;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(je(r,e),!t&&a===1&&delete r._):(s=!e.$stable,om(e,r)),o=e}else e&&(am(n,e),o={default:1});if(s)for(const a in r)!sm(a)&&!(a in o)&&delete r[a]};function Wb(n,e){const t=_n;if(t===null)return n;const i=t.proxy,r=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,l,c=qe]=e[s];Re(o)&&(o={mounted:o,updated:o}),o.deep&&Ir(a),r.push({dir:o,instance:i,value:a,oldValue:void 0,arg:l,modifiers:c})}return n}function Qn(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Er(),xn(l,t,8,[n.el,a,n,e]),Bi())}}function lm(){return{app:null,config:{isNativeTag:Wa,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Xb=0;function Yb(n,e){return function(i,r=null){r!=null&&!ft(r)&&(r=null);const s=lm(),o=new Set;let a=!1;const l=s.app={_uid:Xb++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:zm,get config(){return s.config},set config(c){},use(c,...f){return o.has(c)||(c&&Re(c.install)?(o.add(c),c.install(l,...f)):Re(c)&&(o.add(c),c(l,...f))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,f){return f?(s.components[c]=f,l):s.components[c]},directive(c,f){return f?(s.directives[c]=f,l):s.directives[c]},mount(c,f,u){if(!a){const h=rt(i,r);return h.appContext=s,f&&e?e(h,c):n(h,c,u),a=!0,l._container=c,c.__vue_app__=l,Ju(h.component)||h.component.proxy}},unmount(){a&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,f){return s.provides[c]=f,l}};return l}}let Hi=!1;const _l=n=>/svg/.test(n.namespaceURI)&&n.tagName!=="foreignObject",ku=n=>n.nodeType===8;function qb(n){const{mt:e,p:t,o:{patchProp:i,nextSibling:r,parentNode:s,remove:o,insert:a,createComment:l}}=n,c=(v,p)=>{if(!p.hasChildNodes()){t(null,v,p),El();return}Hi=!1,f(p.firstChild,v,null,null,null),El(),Hi&&console.error("Hydration completed but contains mismatches.")},f=(v,p,g,x,b,T=!1)=>{const S=ku(v)&&v.data==="[",y=()=>m(v,p,g,x,b,S),{type:E,ref:N,shapeFlag:F}=p,C=v.nodeType;p.el=v;let V=null;switch(E){case is:C!==3?V=y():(v.data!==p.children&&(Hi=!0,v.data=p.children),V=r(v));break;case rn:C!==8||S?V=y():V=r(v);break;case Cr:if(C!==1)V=y();else{V=v;const O=!p.children.length;for(let H=0;H<p.staticCount;H++)O&&(p.children+=V.outerHTML),H===p.staticCount-1&&(p.anchor=V),V=r(V);return V}break;case Ht:S?V=d(v,p,g,x,b,T):V=y();break;default:if(F&1)C!==1||p.type.toLowerCase()!==v.tagName.toLowerCase()?V=y():V=u(v,p,g,x,b,T);else if(F&6){p.slotScopeIds=b;const O=s(v);if(e(p,O,null,g,x,_l(O),T),V=S?_(v):r(v),Ao(p)){let H;S?(H=rt(Ht),H.anchor=V?V.previousSibling:O.lastChild):H=v.nodeType===3?qu(""):rt("div"),H.el=v,p.component.subTree=H}}else F&64?C!==8?V=y():V=p.type.hydrate(v,p,g,x,b,T,n,h):F&128&&(V=p.type.hydrate(v,p,g,x,_l(s(v)),b,T,n,f))}return N!=null&&vl(N,null,x,p),V},u=(v,p,g,x,b,T)=>{T=T||!!p.dynamicChildren;const{type:S,props:y,patchFlag:E,shapeFlag:N,dirs:F}=p,C=S==="input"&&F||S==="option";if(C||E!==-1){if(F&&Qn(p,null,g,"created"),y)if(C||!T||E&(16|32))for(const O in y)(C&&O.endsWith("value")||br(O)&&!Mr(O))&&i(v,O,null,y[O],!1,void 0,g);else y.onClick&&i(v,"onClick",null,y.onClick,!1,void 0,g);let V;if((V=y&&y.onVnodeBeforeMount)&&ln(V,g,p),F&&Qn(p,null,g,"beforeMount"),((V=y&&y.onVnodeMounted)||F)&&Op(()=>{V&&ln(V,g,p),F&&Qn(p,null,g,"mounted")},x),N&16&&!(y&&(y.innerHTML||y.textContent))){let O=h(v.firstChild,p,v,g,x,b,T);for(;O;){Hi=!0;const H=O;O=O.nextSibling,o(H)}}else N&8&&v.textContent!==p.children&&(Hi=!0,v.textContent=p.children)}return v.nextSibling},h=(v,p,g,x,b,T,S)=>{S=S||!!p.dynamicChildren;const y=p.children,E=y.length;for(let N=0;N<E;N++){const F=S?y[N]:y[N]=vn(y[N]);if(v)v=f(v,F,x,b,T,S);else{if(F.type===is&&!F.children)continue;Hi=!0,t(null,F,g,null,x,b,_l(g),T)}}return v},d=(v,p,g,x,b,T)=>{const{slotScopeIds:S}=p;S&&(b=b?b.concat(S):S);const y=s(v),E=h(r(v),p,y,g,x,b,T);return E&&ku(E)&&E.data==="]"?r(p.anchor=E):(Hi=!0,a(p.anchor=l("]"),y,E),E)},m=(v,p,g,x,b,T)=>{if(Hi=!0,p.el=null,T){const E=_(v);for(;;){const N=r(v);if(N&&N!==E)o(N);else break}}const S=r(v),y=s(v);return o(v),t(null,p,y,S,g,x,_l(y),b),S},_=v=>{let p=0;for(;v;)if(v=r(v),v&&ku(v)&&(v.data==="["&&p++,v.data==="]")){if(p===0)return r(v);p--}return v};return[c,f]}const Rt=Op;function cm(n){return fm(n)}function um(n){return fm(n,qb)}function fm(n,e){const t=S0();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:f,parentNode:u,nextSibling:h,setScopeId:d=tn,cloneNode:m,insertStaticContent:_}=n,v=(A,R,k,z=null,w=null,M=null,U=!1,B=null,X=!!R.dynamicChildren)=>{if(A===R)return;A&&!Kn(A,R)&&(z=Se(A),ne(A,w,M,!0),A=null),R.patchFlag===-2&&(X=!1,R.dynamicChildren=null);const{type:W,ref:se,shapeFlag:ee}=R;switch(W){case is:p(A,R,k,z);break;case rn:g(A,R,k,z);break;case Cr:A==null&&x(R,k,z,U);break;case Ht:O(A,R,k,z,w,M,U,B,X);break;default:ee&1?S(A,R,k,z,w,M,U,B,X):ee&6?H(A,R,k,z,w,M,U,B,X):(ee&64||ee&128)&&W.process(A,R,k,z,w,M,U,B,X,ge)}se!=null&&w&&vl(se,A&&A.ref,M,R||A,!R)},p=(A,R,k,z)=>{if(A==null)i(R.el=a(R.children),k,z);else{const w=R.el=A.el;R.children!==A.children&&c(w,R.children)}},g=(A,R,k,z)=>{A==null?i(R.el=l(R.children||""),k,z):R.el=A.el},x=(A,R,k,z)=>{[A.el,A.anchor]=_(A.children,R,k,z)},b=({el:A,anchor:R},k,z)=>{let w;for(;A&&A!==R;)w=h(A),i(A,k,z),A=w;i(R,k,z)},T=({el:A,anchor:R})=>{let k;for(;A&&A!==R;)k=h(A),r(A),A=k;r(R)},S=(A,R,k,z,w,M,U,B,X)=>{U=U||R.type==="svg",A==null?y(R,k,z,w,M,U,B,X):F(A,R,w,M,U,B,X)},y=(A,R,k,z,w,M,U,B)=>{let X,W;const{type:se,props:ee,shapeFlag:oe,transition:re,patchFlag:D,dirs:ae}=A;if(A.el&&m!==void 0&&D===-1)X=A.el=m(A.el);else{if(X=A.el=o(A.type,M,ee&&ee.is,ee),oe&8?f(X,A.children):oe&16&&N(A.children,X,null,z,w,M&&se!=="foreignObject",U,B),ae&&Qn(A,null,z,"created"),ee){for(const le in ee)le!=="value"&&!Mr(le)&&s(X,le,null,ee[le],M,A.children,z,w,xe);"value"in ee&&s(X,"value",null,ee.value),(W=ee.onVnodeBeforeMount)&&ln(W,z,A)}E(X,A,A.scopeId,U,z)}ae&&Qn(A,null,z,"beforeMount");const K=(!w||w&&!w.pendingBranch)&&re&&!re.persisted;K&&re.beforeEnter(X),i(X,R,k),((W=ee&&ee.onVnodeMounted)||K||ae)&&Rt(()=>{W&&ln(W,z,A),K&&re.enter(X),ae&&Qn(A,null,z,"mounted")},w)},E=(A,R,k,z,w)=>{if(k&&d(A,k),z)for(let M=0;M<z.length;M++)d(A,z[M]);if(w){let M=w.subTree;if(R===M){const U=w.vnode;E(A,U,U.scopeId,U.slotScopeIds,w.parent)}}},N=(A,R,k,z,w,M,U,B,X=0)=>{for(let W=X;W<A.length;W++){const se=A[W]=B?Gi(A[W]):vn(A[W]);v(null,se,R,k,z,w,M,U,B)}},F=(A,R,k,z,w,M,U)=>{const B=R.el=A.el;let{patchFlag:X,dynamicChildren:W,dirs:se}=R;X|=A.patchFlag&16;const ee=A.props||qe,oe=R.props||qe;let re;(re=oe.onVnodeBeforeUpdate)&&ln(re,k,R,A),se&&Qn(R,A,k,"beforeUpdate");const D=w&&R.type!=="foreignObject";if(W?C(A.dynamicChildren,W,B,k,z,D,M):U||pe(A,R,B,null,k,z,D,M,!1),X>0){if(X&16)V(B,R,ee,oe,k,z,w);else if(X&2&&ee.class!==oe.class&&s(B,"class",null,oe.class,w),X&4&&s(B,"style",ee.style,oe.style,w),X&8){const ae=R.dynamicProps;for(let K=0;K<ae.length;K++){const le=ae[K],I=ee[le],ue=oe[le];(ue!==I||le==="value")&&s(B,le,I,ue,w,A.children,k,z,xe)}}X&1&&A.children!==R.children&&f(B,R.children)}else!U&&W==null&&V(B,R,ee,oe,k,z,w);((re=oe.onVnodeUpdated)||se)&&Rt(()=>{re&&ln(re,k,R,A),se&&Qn(R,A,k,"updated")},z)},C=(A,R,k,z,w,M,U)=>{for(let B=0;B<R.length;B++){const X=A[B],W=R[B],se=X.el&&(X.type===Ht||!Kn(X,W)||X.shapeFlag&(6|64))?u(X.el):k;v(X,W,se,null,z,w,M,U,!0)}},V=(A,R,k,z,w,M,U)=>{if(k!==z){for(const B in z){if(Mr(B))continue;const X=z[B],W=k[B];X!==W&&B!=="value"&&s(A,B,W,X,U,R.children,w,M,xe)}if(k!==qe)for(const B in k)!Mr(B)&&!(B in z)&&s(A,B,k[B],null,U,R.children,w,M,xe);"value"in z&&s(A,"value",k.value,z.value)}},O=(A,R,k,z,w,M,U,B,X)=>{const W=R.el=A?A.el:a(""),se=R.anchor=A?A.anchor:a("");let{patchFlag:ee,dynamicChildren:oe,slotScopeIds:re}=R;re&&(B=B?B.concat(re):re),A==null?(i(W,k,z),i(se,k,z),N(R.children,k,se,w,M,U,B,X)):ee>0&&ee&64&&oe&&A.dynamicChildren?(C(A.dynamicChildren,oe,k,w,M,U,B),(R.key!=null||w&&R===w.subTree)&&Hu(A,R,!0)):pe(A,R,k,se,w,M,U,B,X)},H=(A,R,k,z,w,M,U,B,X)=>{R.slotScopeIds=B,A==null?R.shapeFlag&512?w.ctx.activate(R,k,z,U,X):$(R,k,z,w,M,U,X):Y(A,R,X)},$=(A,R,k,z,w,M,U)=>{const B=A.component=bm(A,z,w);if(Eo(A)&&(B.ctx.renderer=ge),Mm(B),B.asyncDep){if(w&&w.registerDep(B,q),!A.el){const X=B.subTree=rt(rn);g(null,X,R,k)}return}q(B,A,R,k,w,M,U)},Y=(A,R,k)=>{const z=R.component=A.component;if(bb(A,R,k))if(z.asyncDep&&!z.asyncResolved){te(z,R,k);return}else z.next=R,ET(z.update),z.update();else R.component=A.component,R.el=A.el,z.vnode=R},q=(A,R,k,z,w,M,U)=>{const B=()=>{if(A.isMounted){let{next:se,bu:ee,u:oe,parent:re,vnode:D}=A,ae=se,K;X.allowRecurse=!1,se?(se.el=D.el,te(A,se,U)):se=D,ee&&Zr(ee),(K=se.props&&se.props.onVnodeBeforeUpdate)&&ln(K,re,se,D),X.allowRecurse=!0;const le=ul(A),I=A.subTree;A.subTree=le,v(I,le,u(I.el),Se(I),A,w,M),se.el=le.el,ae===null&&Au(A,le.el),oe&&Rt(oe,w),(K=se.props&&se.props.onVnodeUpdated)&&Rt(()=>ln(K,re,se,D),w)}else{let se;const{el:ee,props:oe}=R,{bm:re,m:D,parent:ae}=A,K=Ao(R);if(X.allowRecurse=!1,re&&Zr(re),!K&&(se=oe&&oe.onVnodeBeforeMount)&&ln(se,ae,R),X.allowRecurse=!0,ee&&J){const le=()=>{A.subTree=ul(A),J(ee,A.subTree,A,w,null)};K?R.type.__asyncLoader().then(()=>!A.isUnmounted&&le()):le()}else{const le=A.subTree=ul(A);v(null,le,k,z,A,w,M),R.el=le.el}if(D&&Rt(D,w),!K&&(se=oe&&oe.onVnodeMounted)){const le=R;Rt(()=>ln(se,ae,le),w)}R.shapeFlag&256&&A.a&&Rt(A.a,w),A.isMounted=!0,R=k=z=null}},X=new bo(B,()=>sf(A.update),A.scope),W=A.update=X.run.bind(X);W.id=A.uid,X.allowRecurse=W.allowRecurse=!0,W()},te=(A,R,k)=>{R.component=A;const z=A.vnode.props;A.vnode=R,A.next=null,Hb(A,R.props,z,k),Gb(A,R.children,k),Er(),af(void 0,A.update),Bi()},pe=(A,R,k,z,w,M,U,B,X=!1)=>{const W=A&&A.children,se=A?A.shapeFlag:0,ee=R.children,{patchFlag:oe,shapeFlag:re}=R;if(oe>0){if(oe&128){de(W,ee,k,z,w,M,U,B,X);return}else if(oe&256){Te(W,ee,k,z,w,M,U,B,X);return}}re&8?(se&16&&xe(W,w,M),ee!==W&&f(k,ee)):se&16?re&16?de(W,ee,k,z,w,M,U,B,X):xe(W,w,M,!0):(se&8&&f(k,""),re&16&&N(ee,k,z,w,M,U,B,X))},Te=(A,R,k,z,w,M,U,B,X)=>{A=A||jr,R=R||jr;const W=A.length,se=R.length,ee=Math.min(W,se);let oe;for(oe=0;oe<ee;oe++){const re=R[oe]=X?Gi(R[oe]):vn(R[oe]);v(A[oe],re,k,null,w,M,U,B,X)}W>se?xe(A,w,M,!0,!1,ee):N(R,k,z,w,M,U,B,X,ee)},de=(A,R,k,z,w,M,U,B,X)=>{let W=0;const se=R.length;let ee=A.length-1,oe=se-1;for(;W<=ee&&W<=oe;){const re=A[W],D=R[W]=X?Gi(R[W]):vn(R[W]);if(Kn(re,D))v(re,D,k,null,w,M,U,B,X);else break;W++}for(;W<=ee&&W<=oe;){const re=A[ee],D=R[oe]=X?Gi(R[oe]):vn(R[oe]);if(Kn(re,D))v(re,D,k,null,w,M,U,B,X);else break;ee--,oe--}if(W>ee){if(W<=oe){const re=oe+1,D=re<se?R[re].el:z;for(;W<=oe;)v(null,R[W]=X?Gi(R[W]):vn(R[W]),k,D,w,M,U,B,X),W++}}else if(W>oe)for(;W<=ee;)ne(A[W],w,M,!0),W++;else{const re=W,D=W,ae=new Map;for(W=D;W<=oe;W++){const Fe=R[W]=X?Gi(R[W]):vn(R[W]);Fe.key!=null&&ae.set(Fe.key,W)}let K,le=0;const I=oe-D+1;let ue=!1,Ue=0;const Ne=new Array(I);for(W=0;W<I;W++)Ne[W]=0;for(W=re;W<=ee;W++){const Fe=A[W];if(le>=I){ne(Fe,w,M,!0);continue}let it;if(Fe.key!=null)it=ae.get(Fe.key);else for(K=D;K<=oe;K++)if(Ne[K-D]===0&&Kn(Fe,R[K])){it=K;break}it===void 0?ne(Fe,w,M,!0):(Ne[it-D]=W+1,it>=Ue?Ue=it:ue=!0,v(Fe,R[it],k,null,w,M,U,B,X),le++)}const ut=ue?jb(Ne):jr;for(K=ut.length-1,W=I-1;W>=0;W--){const Fe=D+W,it=R[Fe],en=Fe+1<se?R[Fe+1].el:z;Ne[W]===0?v(null,it,k,en,w,M,U,B,X):ue&&(K<0||W!==ut[K]?Me(it,k,en,2):K--)}}},Me=(A,R,k,z,w=null)=>{const{el:M,type:U,transition:B,children:X,shapeFlag:W}=A;if(W&6){Me(A.component.subTree,R,k,z);return}if(W&128){A.suspense.move(R,k,z);return}if(W&64){U.move(A,R,k,ge);return}if(U===Ht){i(M,R,k);for(let ee=0;ee<X.length;ee++)Me(X[ee],R,k,z);i(A.anchor,R,k);return}if(U===Cr){b(A,R,k);return}if(z!==2&&W&1&&B)if(z===0)B.beforeEnter(M),i(M,R,k),Rt(()=>B.enter(M),w);else{const{leave:ee,delayLeave:oe,afterLeave:re}=B,D=()=>i(M,R,k),ae=()=>{ee(M,()=>{D(),re&&re()})};oe?oe(M,D,ae):ae()}else i(M,R,k)},ne=(A,R,k,z=!1,w=!1)=>{const{type:M,props:U,ref:B,children:X,dynamicChildren:W,shapeFlag:se,patchFlag:ee,dirs:oe}=A;if(B!=null&&vl(B,null,k,A,!0),se&256){R.ctx.deactivate(A);return}const re=se&1&&oe,D=!Ao(A);let ae;if(D&&(ae=U&&U.onVnodeBeforeUnmount)&&ln(ae,R,A),se&6)Q(A.component,k,z);else{if(se&128){A.suspense.unmount(k,z);return}re&&Qn(A,null,R,"beforeUnmount"),se&64?A.type.remove(A,R,k,w,ge,z):W&&(M!==Ht||ee>0&&ee&64)?xe(W,R,k,!1,!0):(M===Ht&&ee&(128|256)||!w&&se&16)&&xe(X,R,k),z&&fe(A)}(D&&(ae=U&&U.onVnodeUnmounted)||re)&&Rt(()=>{ae&&ln(ae,R,A),re&&Qn(A,null,R,"unmounted")},k)},fe=A=>{const{type:R,el:k,anchor:z,transition:w}=A;if(R===Ht){ve(k,z);return}if(R===Cr){T(A);return}const M=()=>{r(k),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(A.shapeFlag&1&&w&&!w.persisted){const{leave:U,delayLeave:B}=w,X=()=>U(k,M);B?B(A.el,M,X):X()}else M()},ve=(A,R)=>{let k;for(;A!==R;)k=h(A),r(A),A=k;r(R)},Q=(A,R,k)=>{const{bum:z,scope:w,update:M,subTree:U,um:B}=A;z&&Zr(z),w.stop(),M&&(M.active=!1,ne(U,A,R,k)),B&&Rt(B,R),Rt(()=>{A.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&A.asyncDep&&!A.asyncResolved&&A.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},xe=(A,R,k,z=!1,w=!1,M=0)=>{for(let U=M;U<A.length;U++)ne(A[U],R,k,z,w)},Se=A=>A.shapeFlag&6?Se(A.component.subTree):A.shapeFlag&128?A.suspense.next():h(A.anchor||A.el),_e=(A,R,k)=>{A==null?R._vnode&&ne(R._vnode,null,null,!0):v(R._vnode||null,A,R,null,null,null,k),El(),R._vnode=A},ge={p:v,um:ne,m:Me,r:fe,mt:$,mc:N,pc:pe,pbc:C,n:Se,o:n};let Ee,J;return e&&([Ee,J]=e(ge)),{render:_e,hydrate:Ee,createApp:Yb(_e,Ee)}}function vl(n,e,t,i,r=!1){if(be(n)){n.forEach((h,d)=>vl(h,e&&(be(e)?e[d]:e),t,i,r));return}if(Ao(i)&&!r)return;const s=i.shapeFlag&4?Ju(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,f=a.refs===qe?a.refs={}:a.refs,u=a.setupState;if(c!=null&&c!==l&&(De(c)?(f[c]=null,Ye(u,c)&&(u[c]=null)):kt(c)&&(c.value=null)),De(l)){const h=()=>{f[l]=o,Ye(u,l)&&(u[l]=o)};o?(h.id=-1,Rt(h,t)):h()}else if(kt(l)){const h=()=>{l.value=o};o?(h.id=-1,Rt(h,t)):h()}else Re(l)&&Zn(l,a,12,[o,f])}function ln(n,e,t,i=null){xn(n,e,7,[t,i])}function Hu(n,e,t=!1){const i=n.children,r=e.children;if(be(i)&&be(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Gi(r[s]),a.el=o.el),t||Hu(o,a))}}function jb(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}const Qb=n=>n.__isTeleport,Ro=n=>n&&(n.disabled||n.disabled===""),hm=n=>typeof SVGElement!="undefined"&&n instanceof SVGElement,zu=(n,e)=>{const t=n&&n.to;return De(t)?e?e(t):null:t},$b={__isTeleport:!0,process(n,e,t,i,r,s,o,a,l,c){const{mc:f,pc:u,pbc:h,o:{insert:d,querySelector:m,createText:_,createComment:v}}=c,p=Ro(e.props);let{shapeFlag:g,children:x,dynamicChildren:b}=e;if(n==null){const T=e.el=_(""),S=e.anchor=_("");d(T,t,i),d(S,t,i);const y=e.target=zu(e.props,m),E=e.targetAnchor=_("");y&&(d(E,y),o=o||hm(y));const N=(F,C)=>{g&16&&f(x,F,C,r,s,o,a,l)};p?N(t,S):y&&N(y,E)}else{e.el=n.el;const T=e.anchor=n.anchor,S=e.target=n.target,y=e.targetAnchor=n.targetAnchor,E=Ro(n.props),N=E?t:S,F=E?T:y;if(o=o||hm(S),b?(h(n.dynamicChildren,b,N,r,s,o,a),Hu(n,e,!0)):l||u(n,e,N,F,r,s,o,a,!1),p)E||xl(e,t,T,c,1);else if((e.props&&e.props.to)!==(n.props&&n.props.to)){const C=e.target=zu(e.props,m);C&&xl(e,C,null,c,0)}else E&&xl(e,S,y,c,1)}},remove(n,e,t,i,{um:r,o:{remove:s}},o){const{shapeFlag:a,children:l,anchor:c,targetAnchor:f,target:u,props:h}=n;if(u&&s(f),(o||!Ro(h))&&(s(c),a&16))for(let d=0;d<l.length;d++){const m=l[d];r(m,e,t,!0,!!m.dynamicChildren)}},move:xl,hydrate:Kb};function xl(n,e,t,{o:{insert:i},m:r},s=2){s===0&&i(n.targetAnchor,e,t);const{el:o,anchor:a,shapeFlag:l,children:c,props:f}=n,u=s===2;if(u&&i(o,e,t),(!u||Ro(f))&&l&16)for(let h=0;h<c.length;h++)r(c[h],e,t,2);u&&i(a,e,t)}function Kb(n,e,t,i,r,s,{o:{nextSibling:o,parentNode:a,querySelector:l}},c){const f=e.target=zu(e.props,l);if(f){const u=f._lpa||f.firstChild;e.shapeFlag&16&&(Ro(e.props)?(e.anchor=c(o(n),e,a(n),t,i,r,s),e.targetAnchor=u):(e.anchor=o(n),e.targetAnchor=c(u,e,f,t,i,r,s)),f._lpa=e.targetAnchor&&o(e.targetAnchor))}return e.anchor&&o(e.anchor)}const Zb=$b,Vu="components",Jb="directives";function eT(n,e){return Gu(Vu,n,!0,e)||n}const dm=Symbol();function tT(n){return De(n)?Gu(Vu,n,!1)||n:n||dm}function nT(n){return Gu(Jb,n)}function Gu(n,e,t=!0,i=!1){const r=_n||At;if(r){const s=r.type;if(n===Vu){const a=Sl(s);if(a&&(a===e||a===Yt(e)||a===wr(Yt(e))))return s}const o=pm(r[n]||s[n],e)||pm(r.appContext[n],e);return!o&&i?s:o}}function pm(n,e){return n&&(n[e]||n[Yt(e)]||n[wr(Yt(e))])}const Ht=Symbol(void 0),is=Symbol(void 0),rn=Symbol(void 0),Cr=Symbol(void 0),Co=[];let $n=null;function yl(n=!1){Co.push($n=n?null:[])}function mm(){Co.pop(),$n=Co[Co.length-1]||null}let rs=1;function Wu(n){rs+=n}function gm(n){return n.dynamicChildren=rs>0?$n||jr:null,mm(),rs>0&&$n&&$n.push(n),n}function iT(n,e,t,i,r,s){return gm(Yu(n,e,t,i,r,s,!0))}function Xu(n,e,t,i,r){return gm(rt(n,e,t,i,r,!0))}function zi(n){return n?n.__v_isVNode===!0:!1}function Kn(n,e){return n.type===e.type&&n.key===e.key}function rT(n){}const bl="__vInternal",_m=({key:n})=>n!=null?n:null,Tl=({ref:n})=>n!=null?De(n)||kt(n)||Re(n)?{i:_n,r:n}:n:null;function Yu(n,e=null,t=null,i=0,r=null,s=n===Ht?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&_m(e),ref:e&&Tl(e),scopeId:cl,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(ju(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=De(t)?8:16),rs>0&&!o&&$n&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&$n.push(l),l}const rt=sT;function sT(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===dm)&&(n=rn),zi(n)){const a=Vi(n,e,!0);return t&&ju(a,t),a}if(yT(n)&&(n=n.__vccOpts),e){e=vm(e);let{class:a,style:l}=e;a&&!De(a)&&(e.class=_o(a)),ft(l)&&(xu(l)&&!be(l)&&(l=je({},l)),e.style=go(l))}const o=De(n)?1:Tb(n)?128:Qb(n)?64:ft(n)?4:Re(n)?2:0;return Yu(n,e,t,i,r,o,s,!0)}function vm(n){return n?xu(n)||bl in n?je({},n):n:null}function Vi(n,e,t=!1){const{props:i,ref:r,patchFlag:s,children:o}=n,a=e?xm(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:a,key:a&&_m(a),ref:e&&e.ref?t&&r?be(r)?r.concat(Tl(e)):[r,Tl(e)]:Tl(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Ht?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Vi(n.ssContent),ssFallback:n.ssFallback&&Vi(n.ssFallback),el:n.el,anchor:n.anchor}}function qu(n=" ",e=0){return rt(is,null,n,e)}function oT(n,e){const t=rt(Cr,null,n);return t.staticCount=e,t}function aT(n="",e=!1){return e?(yl(),Xu(rn,null,n)):rt(rn,null,n)}function vn(n){return n==null||typeof n=="boolean"?rt(rn):be(n)?rt(Ht,null,n.slice()):typeof n=="object"?Gi(n):rt(is,null,String(n))}function Gi(n){return n.el===null||n.memo?n:Vi(n)}function ju(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(be(e))t=16;else if(typeof e=="object")if(i&(1|64)){const r=e.default;r&&(r._c&&(r._d=!1),ju(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(bl in e)?e._ctx=_n:r===3&&_n&&(_n.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Re(e)?(e={default:e,_ctx:_n},t=32):(e=String(e),i&64?(t=16,e=[qu(e)]):t=8);n.children=e,n.shapeFlag|=t}function xm(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=_o([e.class,i.class]));else if(r==="style")e.style=go([e.style,i.style]);else if(br(r)){const s=e[r],o=i[r];s!==o&&!(be(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function lT(n,e,t,i){let r;const s=t&&t[i];if(be(n)||De(n)){r=new Array(n.length);for(let o=0,a=n.length;o<a;o++)r[o]=e(n[o],o,void 0,s&&s[o])}else if(typeof n=="number"){r=new Array(n);for(let o=0;o<n;o++)r[o]=e(o+1,o,void 0,s&&s[o])}else if(ft(n))if(n[Symbol.iterator])r=Array.from(n,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(n);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(n[c],c,a,s&&s[a])}}else r=[];return t&&(t[i]=r),r}function cT(n,e){for(let t=0;t<e.length;t++){const i=e[t];if(be(i))for(let r=0;r<i.length;r++)n[i[r].name]=i[r].fn;else i&&(n[i.name]=i.fn)}return n}function uT(n,e,t={},i,r){if(_n.isCE)return rt("slot",e==="default"?null:{name:e},i&&i());let s=n[e];s&&s._c&&(s._d=!1),yl();const o=s&&ym(s(t)),a=Xu(Ht,{key:t.key||`_${e}`},o||(i?i():[]),o&&n._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function ym(n){return n.some(e=>zi(e)?!(e.type===rn||e.type===Ht&&!ym(e.children)):!0)?n:null}function fT(n){const e={};for(const t in n)e[Kr(t)]=n[t];return e}const Qu=n=>n?Tm(n)?Ju(n)||n.proxy:Qu(n.parent):null,Ml=je(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Qu(n.parent),$root:n=>Qu(n.root),$emit:n=>n.emit,$options:n=>Kp(n),$forceUpdate:n=>()=>sf(n.update),$nextTick:n=>rf.bind(n.proxy),$watch:n=>CT.bind(n)}),$u={get({_:n},e){const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(i!==qe&&Ye(i,e))return o[e]=1,i[e];if(r!==qe&&Ye(r,e))return o[e]=2,r[e];if((c=n.propsOptions[0])&&Ye(c,e))return o[e]=3,s[e];if(t!==qe&&Ye(t,e))return o[e]=4,t[e];Du&&(o[e]=0)}}const f=Ml[e];let u,h;if(f)return e==="$attrs"&&gn(n,"get",e),f(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==qe&&Ye(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,Ye(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;if(r!==qe&&Ye(r,e))r[e]=t;else if(i!==qe&&Ye(i,e))i[e]=t;else if(Ye(n.props,e))return!1;return e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!t[o]||n!==qe&&Ye(n,o)||e!==qe&&Ye(e,o)||(a=s[0])&&Ye(a,o)||Ye(i,o)||Ye(Ml,o)||Ye(r.config.globalProperties,o)}},hT=je({},$u,{get(n,e){if(e!==Symbol.unscopables)return $u.get(n,e,n)},has(n,e){return e[0]!=="_"&&!o0(e)}}),dT=lm();let pT=0;function bm(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||dT,s={uid:pT++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,update:null,scope:new uu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:em(i,r),emitsOptions:Ip(i,r),emit:null,emitted:null,propsDefaults:qe,inheritAttrs:i.inheritAttrs,ctx:qe,data:qe,props:qe,attrs:qe,slots:qe,refs:qe,setupState:qe,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=pb.bind(null,s),n.ce&&n.ce(s),s}let At=null;const Wi=()=>At||_n,Xi=n=>{At=n,n.scope.on()},Yi=()=>{At&&At.scope.off(),At=null};function Tm(n){return n.vnode.shapeFlag&4}let Fo=!1;function Mm(n,e=!1){Fo=e;const{props:t,children:i}=n.vnode,r=Tm(n);kb(n,t,r,e),Vb(n,i);const s=r?mT(n,e):void 0;return Fo=!1,s}function mT(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=yu(new Proxy(n.ctx,$u));const{setup:i}=t;if(i){const r=n.setupContext=i.length>1?Am(n):null;Xi(n),Er();const s=Zn(i,n,0,[n.props,r]);if(Bi(),Yi(),lu(s)){if(s.then(Yi,Yi),e)return s.then(o=>{Ku(n,o,e)}).catch(o=>{Fr(o,n,0)});n.asyncDep=s}else Ku(n,s,e)}else Sm(n,e)}function Ku(n,e,t){Re(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:ft(e)&&(n.setupState=Mu(e)),Sm(n,t)}let wl,Zu;function wm(n){wl=n,Zu=e=>{e.render._rc&&(e.withProxy=new Proxy(e.ctx,hT))}}const gT=()=>!wl;function Sm(n,e,t){const i=n.type;if(!n.render){if(!e&&wl&&!i.render){const r=i.template;if(r){const{isCustomElement:s,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=je(je({isCustomElement:s,delimiters:a},o),l);i.render=wl(r,c)}}n.render=i.render||tn,Zu&&Zu(n)}Xi(n),Er(),Nb(n),Bi(),Yi()}function _T(n){return new Proxy(n.attrs,{get(e,t){return gn(n,"get","$attrs"),e[t]}})}function Am(n){const e=i=>{n.exposed=i||{}};let t;return{get attrs(){return t||(t=_T(n))},slots:n.slots,emit:n.emit,expose:e}}function Ju(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(Mu(yu(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Ml)return Ml[t](n)}}))}const vT=/(?:^|[-_])(\w)/g,xT=n=>n.replace(vT,e=>e.toUpperCase()).replace(/[-_]/g,"");function Sl(n){return Re(n)&&n.displayName||n.name}function Em(n,e,t=!1){let i=Sl(e);if(!i&&e.__file){const r=e.__file.match(/([^/\\]+)\.\w+$/);r&&(i=r[1])}if(!i&&n&&n.parent){const r=s=>{for(const o in s)if(s[o]===e)return o};i=r(n.components||n.parent.type.components)||r(n.appContext.components)}return i?xT(i):t?"App":"Anonymous"}function yT(n){return Re(n)&&"__vccOpts"in n}const Io=[];function Lm(n,...e){Er();const t=Io.length?Io[Io.length-1].component:null,i=t&&t.appContext.config.warnHandler,r=bT();if(i)Zn(i,t,11,[n+e.join(""),t&&t.proxy,r.map(({vnode:s})=>`at <${Em(t,s.type)}>`).join(`
`),r]);else{const s=[`[Vue warn]: ${n}`,...e];r.length&&s.push(`
`,...TT(r)),console.warn(...s)}Bi()}function bT(){let n=Io[Io.length-1];if(!n)return[];const e=[];for(;n;){const t=e[0];t&&t.vnode===n?t.recurseCount++:e.push({vnode:n,recurseCount:0});const i=n.component&&n.component.parent;n=i&&i.vnode}return e}function TT(n){const e=[];return n.forEach((t,i)=>{e.push(...i===0?[]:[`
`],...MT(t))}),e}function MT({vnode:n,recurseCount:e}){const t=e>0?`... (${e} recursive calls)`:"",i=n.component?n.component.parent==null:!1,r=` at <${Em(n.component,n.type,i)}`,s=">"+t;return n.props?[r,...wT(n.props),s]:[r+s]}function wT(n){const e=[],t=Object.keys(n);return t.slice(0,3).forEach(i=>{e.push(...Pm(i,n[i]))}),t.length>3&&e.push(" ..."),e}function Pm(n,e,t){return De(e)?(e=JSON.stringify(e),t?e:[`${n}=${e}`]):typeof e=="number"||typeof e=="boolean"||e==null?t?e:[`${n}=${e}`]:kt(e)?(e=Pm(n,Ve(e.value),!0),t?e:[`${n}=Ref<`,e,">"]):Re(e)?[`${n}=fn${e.name?`<${e.name}>`:""}`]:(e=Ve(e),t?e:[`${n}=`,e])}function Zn(n,e,t,i){let r;try{r=i?n(...i):n()}catch(s){Fr(s,e,t)}return r}function xn(n,e,t,i){if(Re(n)){const s=Zn(n,e,t,i);return s&&lu(s)&&s.catch(o=>{Fr(o,e,t)}),s}const r=[];for(let s=0;s<n.length;s++)r.push(xn(n[s],e,t,i));return r}function Fr(n,e,t,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=t;for(;s;){const c=s.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](n,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Zn(l,null,10,[n,o,a]);return}}ST(n,t,r,i)}function ST(n,e,t,i=!0){console.error(n)}let Al=!1,ef=!1;const yn=[];let mi=0;const No=[];let Do=null,ss=0;const Oo=[];let qi=null,os=0;const Rm=Promise.resolve();let tf=null,nf=null;function rf(n){const e=tf||Rm;return n?e.then(this?n.bind(this):n):e}function AT(n){let e=mi+1,t=yn.length;for(;e<t;){const i=e+t>>>1;Uo(yn[i])<n?e=i+1:t=i}return e}function sf(n){(!yn.length||!yn.includes(n,Al&&n.allowRecurse?mi+1:mi))&&n!==nf&&(n.id==null?yn.push(n):yn.splice(AT(n.id),0,n),Cm())}function Cm(){!Al&&!ef&&(ef=!0,tf=Rm.then(Im))}function ET(n){const e=yn.indexOf(n);e>mi&&yn.splice(e,1)}function Fm(n,e,t,i){be(n)?t.push(...n):(!e||!e.includes(n,n.allowRecurse?i+1:i))&&t.push(n),Cm()}function LT(n){Fm(n,Do,No,ss)}function of(n){Fm(n,qi,Oo,os)}function af(n,e=null){if(No.length){for(nf=e,Do=[...new Set(No)],No.length=0,ss=0;ss<Do.length;ss++)Do[ss]();Do=null,ss=0,nf=null,af(n,e)}}function El(n){if(Oo.length){const e=[...new Set(Oo)];if(Oo.length=0,qi){qi.push(...e);return}for(qi=e,qi.sort((t,i)=>Uo(t)-Uo(i)),os=0;os<qi.length;os++)qi[os]();qi=null,os=0}}const Uo=n=>n.id==null?1/0:n.id;function Im(n){ef=!1,Al=!0,af(n),yn.sort((t,i)=>Uo(t)-Uo(i));const e=tn;try{for(mi=0;mi<yn.length;mi++){const t=yn[mi];t&&t.active!==!1&&Zn(t,null,14)}}finally{mi=0,yn.length=0,El(),Al=!1,tf=null,(yn.length||No.length||Oo.length)&&Im(n)}}function PT(n,e){return ko(n,null,e)}function Nm(n,e){return ko(n,null,{flush:"post"})}function RT(n,e){return ko(n,null,{flush:"sync"})}const Dm={};function Bo(n,e,t){return ko(n,e,t)}function ko(n,e,{immediate:t,deep:i,flush:r,onTrack:s,onTrigger:o}=qe){const a=At;let l,c=!1,f=!1;if(kt(n)?(l=()=>n.value,c=!!n._shallow):Lr(n)?(l=()=>n,i=!0):be(n)?(f=!0,c=n.some(Lr),l=()=>n.map(p=>{if(kt(p))return p.value;if(Lr(p))return Ir(p);if(Re(p))return Zn(p,a,2)})):Re(n)?e?l=()=>Zn(n,a,2):l=()=>{if(!(a&&a.isUnmounted))return u&&u(),xn(n,a,3,[h])}:l=tn,e&&i){const p=l;l=()=>Ir(p())}let u,h=p=>{u=v.onStop=()=>{Zn(p,a,4)}};if(Fo)return h=tn,e?t&&xn(e,a,3,[l(),f?[]:void 0,h]):l(),tn;let d=f?[]:Dm;const m=()=>{if(!!v.active)if(e){const p=v.run();(i||c||(f?p.some((g,x)=>vo(g,d[x])):vo(p,d)))&&(u&&u(),xn(e,a,3,[p,d===Dm?void 0:d,h]),d=p)}else v.run()};m.allowRecurse=!!e;let _;r==="sync"?_=m:r==="post"?_=()=>Rt(m,a&&a.suspense):_=()=>{!a||a.isMounted?LT(m):m()};const v=new bo(l,_);return e?t?m():d=v.run():r==="post"?Rt(v.run.bind(v),a&&a.suspense):v.run(),()=>{v.stop(),a&&a.scope&&ip(a.scope.effects,v)}}function CT(n,e,t){const i=this.proxy,r=De(n)?n.includes(".")?Om(i,n):()=>i[n]:n.bind(i,i);let s;Re(e)?s=e:(s=e.handler,t=e);const o=At;Xi(this);const a=ko(r,s.bind(i),t);return o?Xi(o):Yi(),a}function Om(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}function Ir(n,e){if(!ft(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),kt(n))Ir(n.value,e);else if(be(n))for(let t=0;t<n.length;t++)Ir(n[t],e);else if(Tr(n)||Qr(n))n.forEach(t=>{Ir(t,e)});else if(op(n))for(const t in n)Ir(n[t],e);return n}function FT(){return null}function IT(){return null}function NT(n){}function DT(n,e){return null}function OT(){return Um().slots}function UT(){return Um().attrs}function Um(){const n=Wi();return n.setupContext||(n.setupContext=Am(n))}function BT(n,e){const t=be(n)?n.reduce((i,r)=>(i[r]={},i),{}):n;for(const i in e){const r=t[i];r?be(r)||Re(r)?t[i]={type:r,default:e[i]}:r.default=e[i]:r===null&&(t[i]={default:e[i]})}return t}function kT(n,e){const t={};for(const i in n)e.includes(i)||Object.defineProperty(t,i,{enumerable:!0,get:()=>n[i]});return t}function HT(n){const e=Wi();let t=n();return Yi(),lu(t)&&(t=t.catch(i=>{throw Xi(e),i})),[t,()=>Xi(e)]}function Bm(n,e,t){const i=arguments.length;return i===2?ft(e)&&!be(e)?zi(e)?rt(n,null,[e]):rt(n,e):rt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&zi(t)&&(t=[t]),rt(n,e,t))}const km=Symbol(""),zT=()=>{{const n=So(km);return n||Lm("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),n}};function VT(){}function GT(n,e,t,i){const r=t[i];if(r&&Hm(r,n))return r;const s=e();return s.memo=n.slice(),t[i]=s}function Hm(n,e){const t=n.memo;if(t.length!=e.length)return!1;for(let i=0;i<t.length;i++)if(t[i]!==e[i])return!1;return rs>0&&$n&&$n.push(n),!0}const zm="3.2.24",WT={createComponentInstance:bm,setupComponent:Mm,renderComponentRoot:ul,setCurrentRenderingInstance:Mo,isVNode:zi,normalizeVNode:vn},XT=WT,YT=null,qT=null,jT="http://www.w3.org/2000/svg",as=typeof document!="undefined"?document:null,Vm=new Map,QT={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e?as.createElementNS(jT,n):as.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>as.createTextNode(n),createComment:n=>as.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>as.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},cloneNode(n){const e=n.cloneNode(!0);return"_value"in n&&(e._value=n._value),e},insertStaticContent(n,e,t,i){const r=t?t.previousSibling:e.lastChild;let s=Vm.get(n);if(!s){const o=as.createElement("template");if(o.innerHTML=i?`<svg>${n}</svg>`:n,s=o.content,i){const a=s.firstChild;for(;a.firstChild;)s.appendChild(a.firstChild);s.removeChild(a)}Vm.set(n,s)}return e.insertBefore(s.cloneNode(!0),t),[r?r.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function $T(n,e,t){const i=n._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function KT(n,e,t){const i=n.style,r=De(t);if(t&&!r){for(const s in t)lf(i,s,t[s]);if(e&&!De(e))for(const s in e)t[s]==null&&lf(i,s,"")}else{const s=i.display;r?e!==t&&(i.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(i.display=s)}}const Gm=/\s*!important$/;function lf(n,e,t){if(be(t))t.forEach(i=>lf(n,e,i));else if(e.startsWith("--"))n.setProperty(e,t);else{const i=ZT(n,e);Gm.test(t)?n.setProperty(kn(i),t.replace(Gm,""),"important"):n[i]=t}}const Wm=["Webkit","Moz","ms"],cf={};function ZT(n,e){const t=cf[e];if(t)return t;let i=Yt(e);if(i!=="filter"&&i in n)return cf[e]=i;i=wr(i);for(let r=0;r<Wm.length;r++){const s=Wm[r]+i;if(s in n)return cf[e]=s}return e}const Xm="http://www.w3.org/1999/xlink";function JT(n,e,t,i,r){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(Xm,e.slice(6,e.length)):n.setAttributeNS(Xm,e,t);else{const s=l0(e);t==null||s&&!ep(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function eM(n,e,t,i,r,s,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,s),n[e]=t==null?"":t;return}if(e==="value"&&n.tagName!=="PROGRESS"&&!n.tagName.includes("-")){n._value=t;const a=t==null?"":t;(n.value!==a||n.tagName==="OPTION")&&(n.value=a),t==null&&n.removeAttribute(e);return}if(t===""||t==null){const a=typeof n[e];if(a==="boolean"){n[e]=ep(t);return}else if(t==null&&a==="string"){n[e]="",n.removeAttribute(e);return}else if(a==="number"){try{n[e]=0}catch{}n.removeAttribute(e);return}}try{n[e]=t}catch{}}let Ll=Date.now,Ym=!1;if(typeof window!="undefined"){Ll()>document.createEvent("Event").timeStamp&&(Ll=()=>performance.now());const n=navigator.userAgent.match(/firefox\/(\d+)/i);Ym=!!(n&&Number(n[1])<=53)}let uf=0;const tM=Promise.resolve(),nM=()=>{uf=0},iM=()=>uf||(tM.then(nM),uf=Ll());function gi(n,e,t,i){n.addEventListener(e,t,i)}function rM(n,e,t,i){n.removeEventListener(e,t,i)}function sM(n,e,t,i,r=null){const s=n._vei||(n._vei={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=oM(e);if(i){const c=s[e]=aM(i,r);gi(n,a,c,l)}else o&&(rM(n,a,o,l),s[e]=void 0)}}const qm=/(?:Once|Passive|Capture)$/;function oM(n){let e;if(qm.test(n)){e={};let t;for(;t=n.match(qm);)n=n.slice(0,n.length-t[0].length),e[t[0].toLowerCase()]=!0}return[kn(n.slice(2)),e]}function aM(n,e){const t=i=>{const r=i.timeStamp||Ll();(Ym||r>=t.attached-1)&&xn(lM(i,t.value),e,5,[i])};return t.value=n,t.attached=iM(),t}function lM(n,e){if(be(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i(r))}else return e}const jm=/^on[a-z]/,cM=(n,e,t,i,r=!1,s,o,a,l)=>{e==="class"?$T(n,i,r):e==="style"?KT(n,t,i):br(e)?au(e)||sM(n,e,t,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):uM(n,e,i,r))?eM(n,e,i,s,o,a,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),JT(n,e,i,r))};function uM(n,e,t,i){return i?!!(e==="innerHTML"||e==="textContent"||e in n&&jm.test(e)&&Re(t)):e==="spellcheck"||e==="draggable"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||jm.test(e)&&De(t)?!1:e in n}function Qm(n,e){const t=Cu(n);class i extends Pl{constructor(s){super(t,s,e)}}return i.def=t,i}const fM=n=>Qm(n,vg),hM=typeof HTMLElement!="undefined"?HTMLElement:class{};class Pl extends hM{constructor(e,t={},i){super();this._def=e,this._props=t,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this.shadowRoot&&i?i(this._createVNode(),this.shadowRoot):this.attachShadow({mode:"open"})}connectedCallback(){this._connected=!0,this._instance||this._resolveDef()}disconnectedCallback(){this._connected=!1,rf(()=>{this._connected||(gf(null,this.shadowRoot),this._instance=null)})}_resolveDef(){if(this._resolved)return;this._resolved=!0;for(let i=0;i<this.attributes.length;i++)this._setAttr(this.attributes[i].name);new MutationObserver(i=>{for(const r of i)this._setAttr(r.attributeName)}).observe(this,{attributes:!0});const e=i=>{const{props:r,styles:s}=i,o=!be(r),a=r?o?Object.keys(r):r:[];let l;if(o)for(const c in this._props){const f=r[c];(f===Number||f&&f.type===Number)&&(this._props[c]=Oi(this._props[c]),(l||(l=Object.create(null)))[c]=!0)}this._numberProps=l;for(const c of Object.keys(this))c[0]!=="_"&&this._setProp(c,this[c],!0,!1);for(const c of a.map(Yt))Object.defineProperty(this,c,{get(){return this._getProp(c)},set(f){this._setProp(c,f)}});this._applyStyles(s),this._update()},t=this._def.__asyncLoader;t?t().then(e):e(this._def)}_setAttr(e){let t=this.getAttribute(e);this._numberProps&&this._numberProps[e]&&(t=Oi(t)),this._setProp(Yt(e),t,!1)}_getProp(e){return this._props[e]}_setProp(e,t,i=!0,r=!0){t!==this._props[e]&&(this._props[e]=t,r&&this._instance&&this._update(),i&&(t===!0?this.setAttribute(kn(e),""):typeof t=="string"||typeof t=="number"?this.setAttribute(kn(e),t+""):t||this.removeAttribute(kn(e))))}_update(){gf(this._createVNode(),this.shadowRoot)}_createVNode(){const e=rt(this._def,je({},this._props));return this._instance||(e.ce=t=>{this._instance=t,t.isCE=!0,t.emit=(r,...s)=>{this.dispatchEvent(new CustomEvent(r,{detail:s}))};let i=this;for(;i=i&&(i.parentNode||i.host);)if(i instanceof Pl){t.parent=i._instance;break}}),e}_applyStyles(e){e&&e.forEach(t=>{const i=document.createElement("style");i.textContent=t,this.shadowRoot.appendChild(i)})}}function dM(n="$style"){{const e=Wi();if(!e)return qe;const t=e.type.__cssModules;if(!t)return qe;const i=t[n];return i||qe}}function pM(n){const e=Wi();if(!e)return;const t=()=>ff(e.subTree,n(e.proxy));Nm(t),Po(()=>{const i=new MutationObserver(t);i.observe(e.subTree.el.parentNode,{childList:!0}),ml(()=>i.disconnect())})}function ff(n,e){if(n.shapeFlag&128){const t=n.suspense;n=t.activeBranch,t.pendingBranch&&!t.isHydrating&&t.effects.push(()=>{ff(t.activeBranch,e)})}for(;n.component;)n=n.component.subTree;if(n.shapeFlag&1&&n.el)$m(n.el,e);else if(n.type===Ht)n.children.forEach(t=>ff(t,e));else if(n.type===Cr){let{el:t,anchor:i}=n;for(;t&&($m(t,e),t!==i);)t=t.nextSibling}}function $m(n,e){if(n.nodeType===1){const t=n.style;for(const i in e)t.setProperty(`--${i}`,e[i])}}const ji="transition",Ho="animation",hf=(n,{slots:e})=>Bm(Pu,Jm(n),e);hf.displayName="Transition";const Km={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},mM=hf.props=je({},Pu.props,Km),Nr=(n,e=[])=>{be(n)?n.forEach(t=>t(...e)):n&&n(...e)},Zm=n=>n?be(n)?n.some(e=>e.length>1):n.length>1:!1;function Jm(n){const e={};for(const V in n)V in Km||(e[V]=n[V]);if(n.css===!1)return e;const{name:t="v",type:i,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:f=a,leaveFromClass:u=`${t}-leave-from`,leaveActiveClass:h=`${t}-leave-active`,leaveToClass:d=`${t}-leave-to`}=n,m=gM(r),_=m&&m[0],v=m&&m[1],{onBeforeEnter:p,onEnter:g,onEnterCancelled:x,onLeave:b,onLeaveCancelled:T,onBeforeAppear:S=p,onAppear:y=g,onAppearCancelled:E=x}=e,N=(V,O,H)=>{Dr(V,O?f:a),Dr(V,O?c:o),H&&H()},F=(V,O)=>{Dr(V,d),Dr(V,h),O&&O()},C=V=>(O,H)=>{const $=V?y:g,Y=()=>N(O,V,H);Nr($,[O,Y]),eg(()=>{Dr(O,V?l:s),_i(O,V?f:a),Zm($)||tg(O,i,_,Y)})};return je(e,{onBeforeEnter(V){Nr(p,[V]),_i(V,s),_i(V,o)},onBeforeAppear(V){Nr(S,[V]),_i(V,l),_i(V,c)},onEnter:C(!1),onAppear:C(!0),onLeave(V,O){const H=()=>F(V,O);_i(V,u),sg(),_i(V,h),eg(()=>{Dr(V,u),_i(V,d),Zm(b)||tg(V,i,v,H)}),Nr(b,[V,H])},onEnterCancelled(V){N(V,!1),Nr(x,[V])},onAppearCancelled(V){N(V,!0),Nr(E,[V])},onLeaveCancelled(V){F(V),Nr(T,[V])}})}function gM(n){if(n==null)return null;if(ft(n))return[df(n.enter),df(n.leave)];{const e=df(n);return[e,e]}}function df(n){return Oi(n)}function _i(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n._vtc||(n._vtc=new Set)).add(e)}function Dr(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const{_vtc:t}=n;t&&(t.delete(e),t.size||(n._vtc=void 0))}function eg(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let _M=0;function tg(n,e,t,i){const r=n._endId=++_M,s=()=>{r===n._endId&&i()};if(t)return setTimeout(s,t);const{type:o,timeout:a,propCount:l}=ng(n,e);if(!o)return i();const c=o+"end";let f=0;const u=()=>{n.removeEventListener(c,h),s()},h=d=>{d.target===n&&++f>=l&&u()};setTimeout(()=>{f<l&&u()},a+1),n.addEventListener(c,h)}function ng(n,e){const t=window.getComputedStyle(n),i=m=>(t[m]||"").split(", "),r=i(ji+"Delay"),s=i(ji+"Duration"),o=ig(r,s),a=i(Ho+"Delay"),l=i(Ho+"Duration"),c=ig(a,l);let f=null,u=0,h=0;e===ji?o>0&&(f=ji,u=o,h=s.length):e===Ho?c>0&&(f=Ho,u=c,h=l.length):(u=Math.max(o,c),f=u>0?o>c?ji:Ho:null,h=f?f===ji?s.length:l.length:0);const d=f===ji&&/\b(transform|all)(,|$)/.test(t[ji+"Property"]);return{type:f,timeout:u,propCount:h,hasTransform:d}}function ig(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>rg(t)+rg(n[i])))}function rg(n){return Number(n.slice(0,-1).replace(",","."))*1e3}function sg(){return document.body.offsetHeight}const og=new WeakMap,ag=new WeakMap,vM={name:"TransitionGroup",props:je({},mM,{tag:String,moveClass:String}),setup(n,{slots:e}){const t=Wi(),i=Lu();let r,s;return dl(()=>{if(!r.length)return;const o=n.moveClass||`${n.name||"v"}-move`;if(!MM(r[0].el,t.vnode.el,o))return;r.forEach(yM),r.forEach(bM);const a=r.filter(TM);sg(),a.forEach(l=>{const c=l.el,f=c.style;_i(c,o),f.transform=f.webkitTransform=f.transitionDuration="";const u=c._moveCb=h=>{h&&h.target!==c||(!h||/transform$/.test(h.propertyName))&&(c.removeEventListener("transitionend",u),c._moveCb=null,Dr(c,o))};c.addEventListener("transitionend",u)})}),()=>{const o=Ve(n),a=Jm(o);let l=o.tag||Ht;r=s,s=e.default?fl(e.default()):[];for(let c=0;c<s.length;c++){const f=s[c];f.key!=null&&Pr(f,ns(f,a,i,t))}if(r)for(let c=0;c<r.length;c++){const f=r[c];Pr(f,ns(f,a,i,t)),og.set(f,f.el.getBoundingClientRect())}return rt(l,null,s)}}},xM=vM;function yM(n){const e=n.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function bM(n){ag.set(n,n.el.getBoundingClientRect())}function TM(n){const e=og.get(n),t=ag.get(n),i=e.left-t.left,r=e.top-t.top;if(i||r){const s=n.el.style;return s.transform=s.webkitTransform=`translate(${i}px,${r}px)`,s.transitionDuration="0s",n}}function MM(n,e,t){const i=n.cloneNode();n._vtc&&n._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&i.classList.remove(a))}),t.split(/\s+/).forEach(o=>o&&i.classList.add(o)),i.style.display="none";const r=e.nodeType===1?e:e.parentNode;r.appendChild(i);const{hasTransform:s}=ng(i);return r.removeChild(i),s}const Qi=n=>{const e=n.props["onUpdate:modelValue"];return be(e)?t=>Zr(e,t):e};function wM(n){n.target.composing=!0}function lg(n){const e=n.target;e.composing&&(e.composing=!1,SM(e,"input"))}function SM(n,e){const t=document.createEvent("HTMLEvents");t.initEvent(e,!0,!0),n.dispatchEvent(t)}const Rl={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n._assign=Qi(r);const s=i||r.props&&r.props.type==="number";gi(n,e?"change":"input",o=>{if(o.target.composing)return;let a=n.value;t?a=a.trim():s&&(a=Oi(a)),n._assign(a)}),t&&gi(n,"change",()=>{n.value=n.value.trim()}),e||(gi(n,"compositionstart",wM),gi(n,"compositionend",lg),gi(n,"change",lg))},mounted(n,{value:e}){n.value=e==null?"":e},beforeUpdate(n,{value:e,modifiers:{lazy:t,trim:i,number:r}},s){if(n._assign=Qi(s),n.composing||document.activeElement===n&&(t||i&&n.value.trim()===e||(r||n.type==="number")&&Oi(n.value)===e))return;const o=e==null?"":e;n.value!==o&&(n.value=o)}},pf={deep:!0,created(n,e,t){n._assign=Qi(t),gi(n,"change",()=>{const i=n._modelValue,r=ls(n),s=n.checked,o=n._assign;if(be(i)){const a=Ga(i,r),l=a!==-1;if(s&&!l)o(i.concat(r));else if(!s&&l){const c=[...i];c.splice(a,1),o(c)}}else if(Tr(i)){const a=new Set(i);s?a.add(r):a.delete(r),o(a)}else o(hg(n,s))})},mounted:cg,beforeUpdate(n,e,t){n._assign=Qi(t),cg(n,e,t)}};function cg(n,{value:e,oldValue:t},i){n._modelValue=e,be(e)?n.checked=Ga(e,i.props.value)>-1:Tr(e)?n.checked=e.has(i.props.value):e!==t&&(n.checked=Di(e,hg(n,!0)))}const mf={created(n,{value:e},t){n.checked=Di(e,t.props.value),n._assign=Qi(t),gi(n,"change",()=>{n._assign(ls(n))})},beforeUpdate(n,{value:e,oldValue:t},i){n._assign=Qi(i),e!==t&&(n.checked=Di(e,i.props.value))}},ug={deep:!0,created(n,{value:e,modifiers:{number:t}},i){const r=Tr(e);gi(n,"change",()=>{const s=Array.prototype.filter.call(n.options,o=>o.selected).map(o=>t?Oi(ls(o)):ls(o));n._assign(n.multiple?r?new Set(s):s:s[0])}),n._assign=Qi(i)},mounted(n,{value:e}){fg(n,e)},beforeUpdate(n,e,t){n._assign=Qi(t)},updated(n,{value:e}){fg(n,e)}};function fg(n,e){const t=n.multiple;if(!(t&&!be(e)&&!Tr(e))){for(let i=0,r=n.options.length;i<r;i++){const s=n.options[i],o=ls(s);if(t)be(e)?s.selected=Ga(e,o)>-1:s.selected=e.has(o);else if(Di(ls(s),e)){n.selectedIndex!==i&&(n.selectedIndex=i);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function ls(n){return"_value"in n?n._value:n.value}function hg(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const AM={created(n,e,t){Cl(n,e,t,null,"created")},mounted(n,e,t){Cl(n,e,t,null,"mounted")},beforeUpdate(n,e,t,i){Cl(n,e,t,i,"beforeUpdate")},updated(n,e,t,i){Cl(n,e,t,i,"updated")}};function Cl(n,e,t,i,r){let s;switch(n.tagName){case"SELECT":s=ug;break;case"TEXTAREA":s=Rl;break;default:switch(t.props&&t.props.type){case"checkbox":s=pf;break;case"radio":s=mf;break;default:s=Rl}}const o=s[r];o&&o(n,e,t,i)}function EM(){Rl.getSSRProps=({value:n})=>({value:n}),mf.getSSRProps=({value:n},e)=>{if(e.props&&Di(e.props.value,n))return{checked:!0}},pf.getSSRProps=({value:n},e)=>{if(be(n)){if(e.props&&Ga(n,e.props.value)>-1)return{checked:!0}}else if(Tr(n)){if(e.props&&n.has(e.props.value))return{checked:!0}}else if(n)return{checked:!0}}}const LM=["ctrl","shift","alt","meta"],PM={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>LM.some(t=>n[`${t}Key`]&&!e.includes(t))},RM=(n,e)=>(t,...i)=>{for(let r=0;r<e.length;r++){const s=PM[e[r]];if(s&&s(t,e))return}return n(t,...i)},CM={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},FM=(n,e)=>t=>{if(!("key"in t))return;const i=kn(t.key);if(e.some(r=>r===i||CM[r]===i))return n(t)},dg={beforeMount(n,{value:e},{transition:t}){n._vod=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):zo(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),zo(n,!0),i.enter(n)):i.leave(n,()=>{zo(n,!1)}):zo(n,e))},beforeUnmount(n,{value:e}){zo(n,e)}};function zo(n,e){n.style.display=e?n._vod:"none"}function IM(){dg.getSSRProps=({value:n})=>{if(!n)return{style:{display:"none"}}}}const pg=je({patchProp:cM},QT);let Vo,mg=!1;function gg(){return Vo||(Vo=cm(pg))}function _g(){return Vo=mg?Vo:um(pg),mg=!0,Vo}const gf=(...n)=>{gg().render(...n)},vg=(...n)=>{_g().hydrate(...n)},xg=(...n)=>{const e=gg().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=yg(i);if(!r)return;const s=e._component;!Re(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e},NM=(...n)=>{const e=_g().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=yg(i);if(r)return t(r,!0,r instanceof SVGElement)},e};function yg(n){return De(n)?document.querySelector(n):n}let bg=!1;const DM=()=>{bg||(bg=!0,EM(),IM())};var OM=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Transition:hf,TransitionGroup:xM,VueElement:Pl,createApp:xg,createSSRApp:NM,defineCustomElement:Qm,defineSSRCustomElement:fM,hydrate:vg,initDirectivesForSSR:DM,render:gf,useCssModule:dM,useCssVars:pM,vModelCheckbox:pf,vModelDynamic:AM,vModelRadio:mf,vModelSelect:ug,vModelText:Rl,vShow:dg,withKeys:FM,withModifiers:RM,EffectScope:uu,ReactiveEffect:bo,computed:Cp,customRef:ub,effect:C0,effectScope:A0,getCurrentScope:E0,isProxy:xu,isReactive:Lr,isReadonly:sl,isRef:kt,markRaw:yu,onScopeDispose:L0,proxyRefs:Mu,reactive:il,readonly:vu,ref:al,shallowReactive:Ep,shallowReadonly:rb,shallowRef:sb,stop:F0,toRaw:Ve,toRef:Rp,toRefs:fb,triggerRef:ab,unref:Pp,camelize:Yt,capitalize:wr,normalizeClass:_o,normalizeProps:f0,normalizeStyle:go,toDisplayString:x0,toHandlerKey:Kr,BaseTransition:Pu,Comment:rn,Fragment:Ht,KeepAlive:Fb,Static:Cr,Suspense:wb,Teleport:Zb,Text:is,callWithAsyncErrorHandling:xn,callWithErrorHandling:Zn,cloneVNode:Vi,compatUtils:qT,createBlock:Xu,createCommentVNode:aT,createElementBlock:iT,createElementVNode:Yu,createHydrationRenderer:um,createPropsRestProxy:kT,createRenderer:cm,createSlots:cT,createStaticVNode:oT,createTextVNode:qu,createVNode:rt,defineAsyncComponent:Rb,defineComponent:Cu,defineEmits:IT,defineExpose:NT,defineProps:FT,get devtools(){return es},getCurrentInstance:Wi,getTransitionRawChildren:fl,guardReactiveProps:vm,h:Bm,handleError:Fr,initCustomFormatter:VT,inject:So,isMemoSame:Hm,isRuntimeOnly:gT,isVNode:zi,mergeDefaults:BT,mergeProps:xm,nextTick:rf,onActivated:Hp,onBeforeMount:Gp,onBeforeUnmount:pl,onBeforeUpdate:Wp,onDeactivated:zp,onErrorCaptured:jp,onMounted:Po,onRenderTracked:qp,onRenderTriggered:Yp,onServerPrefetch:Xp,onUnmounted:ml,onUpdated:dl,openBlock:yl,popScopeId:gb,provide:Up,pushScopeId:mb,queuePostFlushCb:of,registerRuntimeCompiler:wm,renderList:lT,renderSlot:uT,resolveComponent:eT,resolveDirective:nT,resolveDynamicComponent:tT,resolveFilter:YT,resolveTransitionHooks:ns,setBlockTracking:Wu,setDevtoolsHook:Fp,setTransitionHooks:Pr,ssrContextKey:km,ssrUtils:XT,toHandlers:fT,transformVNodeArgs:rT,useAttrs:UT,useSSRContext:zT,useSlots:OT,useTransitionState:Lu,version:zm,warn:Lm,watch:Bo,watchEffect:PT,watchPostEffect:Nm,watchSyncEffect:RT,withAsyncContext:HT,withCtx:Su,withDefaults:DT,withDirectives:Wb,withMemo:GT,withScopeId:_b});function _f(n){throw n}function Tg(n){}function ht(n,e,t,i){const r=n,s=new SyntaxError(String(r));return s.code=n,s.loc=e,s}const Go=Symbol(""),Wo=Symbol(""),vf=Symbol(""),Fl=Symbol(""),Mg=Symbol(""),Or=Symbol(""),wg=Symbol(""),Sg=Symbol(""),xf=Symbol(""),yf=Symbol(""),Xo=Symbol(""),bf=Symbol(""),Ag=Symbol(""),Tf=Symbol(""),Il=Symbol(""),Mf=Symbol(""),wf=Symbol(""),Sf=Symbol(""),Af=Symbol(""),Eg=Symbol(""),Lg=Symbol(""),Nl=Symbol(""),Dl=Symbol(""),Ef=Symbol(""),Lf=Symbol(""),Yo=Symbol(""),qo=Symbol(""),Pf=Symbol(""),Rf=Symbol(""),UM=Symbol(""),Cf=Symbol(""),Ol=Symbol(""),BM=Symbol(""),kM=Symbol(""),Ff=Symbol(""),HM=Symbol(""),zM=Symbol(""),If=Symbol(""),Pg=Symbol(""),$i={[Go]:"Fragment",[Wo]:"Teleport",[vf]:"Suspense",[Fl]:"KeepAlive",[Mg]:"BaseTransition",[Or]:"openBlock",[wg]:"createBlock",[Sg]:"createElementBlock",[xf]:"createVNode",[yf]:"createElementVNode",[Xo]:"createCommentVNode",[bf]:"createTextVNode",[Ag]:"createStaticVNode",[Tf]:"resolveComponent",[Il]:"resolveDynamicComponent",[Mf]:"resolveDirective",[wf]:"resolveFilter",[Sf]:"withDirectives",[Af]:"renderList",[Eg]:"renderSlot",[Lg]:"createSlots",[Nl]:"toDisplayString",[Dl]:"mergeProps",[Ef]:"normalizeClass",[Lf]:"normalizeStyle",[Yo]:"normalizeProps",[qo]:"guardReactiveProps",[Pf]:"toHandlers",[Rf]:"camelize",[UM]:"capitalize",[Cf]:"toHandlerKey",[Ol]:"setBlockTracking",[BM]:"pushScopeId",[kM]:"popScopeId",[Ff]:"withCtx",[HM]:"unref",[zM]:"isRef",[If]:"withMemo",[Pg]:"isMemoSame"};function VM(n){Object.getOwnPropertySymbols(n).forEach(e=>{$i[e]=n[e]})}const bn={source:"",start:{line:1,column:1,offset:0},end:{line:1,column:1,offset:0}};function GM(n,e=bn){return{type:0,children:n,helpers:[],components:[],directives:[],hoists:[],imports:[],cached:0,temps:0,codegenNode:void 0,loc:e}}function jo(n,e,t,i,r,s,o,a=!1,l=!1,c=!1,f=bn){return n&&(a?(n.helper(Or),n.helper(hs(n.inSSR,c))):n.helper(fs(n.inSSR,c)),o&&n.helper(Sf)),{type:13,tag:e,props:t,children:i,patchFlag:r,dynamicProps:s,directives:o,isBlock:a,disableTracking:l,isComponent:c,loc:f}}function Qo(n,e=bn){return{type:17,loc:e,elements:n}}function An(n,e=bn){return{type:15,loc:e,properties:n}}function Tt(n,e){return{type:16,loc:bn,key:De(n)?He(n,!0):n,value:e}}function He(n,e=!1,t=bn,i=0){return{type:4,loc:t,content:n,isStatic:e,constType:e?3:i}}function Jn(n,e=bn){return{type:8,loc:e,children:n}}function Mt(n,e=[],t=bn){return{type:14,loc:t,callee:n,arguments:e}}function cs(n,e=void 0,t=!1,i=!1,r=bn){return{type:18,params:n,returns:e,newline:t,isSlot:i,loc:r}}function Nf(n,e,t,i=!0){return{type:19,test:n,consequent:e,alternate:t,newline:i,loc:bn}}function WM(n,e,t=!1){return{type:20,index:n,value:e,isVNode:t,loc:bn}}function XM(n){return{type:21,body:n,loc:bn}}const cn=n=>n.type===4&&n.isStatic,us=(n,e)=>n===e||n===kn(e);function Rg(n){if(us(n,"Teleport"))return Wo;if(us(n,"Suspense"))return vf;if(us(n,"KeepAlive"))return Fl;if(us(n,"BaseTransition"))return Mg}const YM=/^\d|[^\$\w]/,Df=n=>!YM.test(n),qM=/[A-Za-z_$\xA0-\uFFFF]/,jM=/[\.\?\w$\xA0-\uFFFF]/,QM=/\s+[.[]\s*|\s*[.[]\s+/g,$M=n=>{n=n.trim().replace(QM,o=>o.trim());let e=0,t=[],i=0,r=0,s=null;for(let o=0;o<n.length;o++){const a=n.charAt(o);switch(e){case 0:if(a==="[")t.push(e),e=1,i++;else if(a==="(")t.push(e),e=2,r++;else if(!(o===0?qM:jM).test(a))return!1;break;case 1:a==="'"||a==='"'||a==="`"?(t.push(e),e=3,s=a):a==="["?i++:a==="]"&&(--i||(e=t.pop()));break;case 2:if(a==="'"||a==='"'||a==="`")t.push(e),e=3,s=a;else if(a==="(")r++;else if(a===")"){if(o===n.length-1)return!1;--r||(e=t.pop())}break;case 3:a===s&&(e=t.pop(),s=null);break}}return!i&&!r},Cg=$M;function Fg(n,e,t){const r={source:n.source.slice(e,e+t),start:Ul(n.start,n.source,e),end:n.end};return t!=null&&(r.end=Ul(n.start,n.source,e+t)),r}function Ul(n,e,t=e.length){return Bl(je({},n),e,t)}function Bl(n,e,t=e.length){let i=0,r=-1;for(let s=0;s<t;s++)e.charCodeAt(s)===10&&(i++,r=s);return n.offset+=t,n.line+=i,n.column=r===-1?n.column+t:t-r,n}function En(n,e,t=!1){for(let i=0;i<n.props.length;i++){const r=n.props[i];if(r.type===7&&(t||r.exp)&&(De(e)?r.name===e:e.test(r.name)))return r}}function $o(n,e,t=!1,i=!1){for(let r=0;r<n.props.length;r++){const s=n.props[r];if(s.type===6){if(t)continue;if(s.name===e&&(s.value||i))return s}else if(s.name==="bind"&&(s.exp||i)&&kl(s.arg,e))return s}}function kl(n,e){return!!(n&&cn(n)&&n.content===e)}function KM(n){return n.props.some(e=>e.type===7&&e.name==="bind"&&(!e.arg||e.arg.type!==4||!e.arg.isStatic))}function Of(n){return n.type===5||n.type===2}function ZM(n){return n.type===7&&n.name==="slot"}function Hl(n){return n.type===1&&n.tagType===3}function zl(n){return n.type===1&&n.tagType===2}function fs(n,e){return n||e?xf:yf}function hs(n,e){return n||e?wg:Sg}const JM=new Set([Yo,qo]);function Ig(n,e=[]){if(n&&!De(n)&&n.type===14){const t=n.callee;if(!De(t)&&JM.has(t))return Ig(n.arguments[0],e.concat(n))}return[n,e]}function Vl(n,e,t){let i,r=n.type===13?n.props:n.arguments[2],s=[],o;if(r&&!De(r)&&r.type===14){const a=Ig(r);r=a[0],s=a[1],o=s[s.length-1]}if(r==null||De(r))i=An([e]);else if(r.type===14){const a=r.arguments[0];!De(a)&&a.type===15?a.properties.unshift(e):r.callee===Pf?i=Mt(t.helper(Dl),[An([e]),r]):r.arguments.unshift(An([e])),!i&&(i=r)}else if(r.type===15){let a=!1;if(e.key.type===4){const l=e.key.content;a=r.properties.some(c=>c.key.type===4&&c.key.content===l)}a||r.properties.unshift(e),i=r}else i=Mt(t.helper(Dl),[An([e]),r]),o&&o.callee===qo&&(o=s[s.length-2]);n.type===13?o?o.arguments[0]=i:n.props=i:o?o.arguments[0]=i:n.arguments[2]=i}function Ko(n,e){return`_${e}_${n.replace(/[^\w]/g,(t,i)=>t==="-"?"_":n.charCodeAt(i).toString())}`}function ew(n){return n.type===14&&n.callee===If?n.arguments[1].returns:n}function Uf(n,{helper:e,removeHelper:t,inSSR:i}){n.isBlock||(n.isBlock=!0,t(fs(i,n.isComponent)),e(Or),e(hs(i,n.isComponent)))}function Ng(n,e){const t=e.options?e.options.compatConfig:e.compatConfig,i=t&&t[n];return n==="MODE"?i||3:i}function Ur(n,e){const t=Ng("MODE",e),i=Ng(n,e);return t===3?i===!0:i!==!1}function ds(n,e,t,...i){return Ur(n,e)}const tw=/&(gt|lt|amp|apos|quot);/g,nw={gt:">",lt:"<",amp:"&",apos:"'",quot:'"'},Dg={delimiters:["{{","}}"],getNamespace:()=>0,getTextMode:()=>0,isVoidTag:Wa,isPreTag:Wa,isCustomElement:Wa,decodeEntities:n=>n.replace(tw,(e,t)=>nw[t]),onError:_f,onWarn:Tg,comments:!1};function iw(n,e={}){const t=rw(n,e),i=Tn(t);return GM(Bf(t,0,[]),Ln(t,i))}function rw(n,e){const t=je({},Dg);let i;for(i in e)t[i]=e[i]===void 0?Dg[i]:e[i];return{options:t,column:1,line:1,offset:0,originalSource:n,source:n,inPre:!1,inVPre:!1,onWarn:t.onWarn}}function Bf(n,e,t){const i=Gl(t),r=i?i.ns:0,s=[];for(;!dw(n,e,t);){const a=n.source;let l;if(e===0||e===1){if(!n.inVPre&&qt(a,n.options.delimiters[0]))l=fw(n,e);else if(e===0&&a[0]==="<")if(a.length===1)Ke(n,5,1);else if(a[1]==="!")qt(a,"<!--")?l=ow(n):qt(a,"<!DOCTYPE")?l=Zo(n):qt(a,"<![CDATA[")?r!==0?l=sw(n,t):(Ke(n,1),l=Zo(n)):(Ke(n,11),l=Zo(n));else if(a[1]==="/")if(a.length===2)Ke(n,5,2);else if(a[2]===">"){Ke(n,14,2),Et(n,3);continue}else if(/[a-z]/i.test(a[2])){Ke(n,23),kf(n,1,i);continue}else Ke(n,12,2),l=Zo(n);else/[a-z]/i.test(a[1])?(l=aw(n,t),Ur("COMPILER_NATIVE_TEMPLATE",n)&&l&&l.tag==="template"&&!l.props.some(c=>c.type===7&&Ug(c.name))&&(l=l.children)):a[1]==="?"?(Ke(n,21,1),l=Zo(n)):Ke(n,12,1)}if(l||(l=hw(n,e)),be(l))for(let c=0;c<l.length;c++)Og(s,l[c]);else Og(s,l)}let o=!1;if(e!==2&&e!==1){const a=n.options.whitespace!=="preserve";for(let l=0;l<s.length;l++){const c=s[l];if(!n.inPre&&c.type===2)if(/[^\t\r\n\f ]/.test(c.content))a&&(c.content=c.content.replace(/[\t\r\n\f ]+/g," "));else{const f=s[l-1],u=s[l+1];!f||!u||a&&(f.type===3||u.type===3||f.type===1&&u.type===1&&/[\r\n]/.test(c.content))?(o=!0,s[l]=null):c.content=" "}else c.type===3&&!n.options.comments&&(o=!0,s[l]=null)}if(n.inPre&&i&&n.options.isPreTag(i.tag)){const l=s[0];l&&l.type===2&&(l.content=l.content.replace(/^\r?\n/,""))}}return o?s.filter(Boolean):s}function Og(n,e){if(e.type===2){const t=Gl(n);if(t&&t.type===2&&t.loc.end.offset===e.loc.start.offset){t.content+=e.content,t.loc.end=e.loc.end,t.loc.source+=e.loc.source;return}}n.push(e)}function sw(n,e){Et(n,9);const t=Bf(n,3,e);return n.source.length===0?Ke(n,6):Et(n,3),t}function ow(n){const e=Tn(n);let t;const i=/--(\!)?>/.exec(n.source);if(!i)t=n.source.slice(4),Et(n,n.source.length),Ke(n,7);else{i.index<=3&&Ke(n,0),i[1]&&Ke(n,10),t=n.source.slice(4,i.index);const r=n.source.slice(0,i.index);let s=1,o=0;for(;(o=r.indexOf("<!--",s))!==-1;)Et(n,o-s+1),o+4<r.length&&Ke(n,16),s=o+1;Et(n,i.index+i[0].length-s+1)}return{type:3,content:t,loc:Ln(n,e)}}function Zo(n){const e=Tn(n),t=n.source[1]==="?"?1:2;let i;const r=n.source.indexOf(">");return r===-1?(i=n.source.slice(t),Et(n,n.source.length)):(i=n.source.slice(t,r),Et(n,r+1)),{type:3,content:i,loc:Ln(n,e)}}function aw(n,e){const t=n.inPre,i=n.inVPre,r=Gl(e),s=kf(n,0,r),o=n.inPre&&!t,a=n.inVPre&&!i;if(s.isSelfClosing||n.options.isVoidTag(s.tag))return o&&(n.inPre=!1),a&&(n.inVPre=!1),s;e.push(s);const l=n.options.getTextMode(s,r),c=Bf(n,l,e);e.pop();{const f=s.props.find(u=>u.type===6&&u.name==="inline-template");if(f&&ds("COMPILER_INLINE_TEMPLATE",n,f.loc)){const u=Ln(n,s.loc.end);f.value={type:2,content:u.source,loc:u}}}if(s.children=c,Hf(n.source,s.tag))kf(n,1,r);else if(Ke(n,24,0,s.loc.start),n.source.length===0&&s.tag.toLowerCase()==="script"){const f=c[0];f&&qt(f.loc.source,"<!--")&&Ke(n,8)}return s.loc=Ln(n,s.loc.start),o&&(n.inPre=!1),a&&(n.inVPre=!1),s}const Ug=mn("if,else,else-if,for,slot");function kf(n,e,t){const i=Tn(n),r=/^<\/?([a-z][^\t\r\n\f />]*)/i.exec(n.source),s=r[1],o=n.options.getNamespace(s,t);Et(n,r[0].length),ea(n);const a=Tn(n),l=n.source;n.options.isPreTag(s)&&(n.inPre=!0);let c=Bg(n,e);e===0&&!n.inVPre&&c.some(h=>h.type===7&&h.name==="pre")&&(n.inVPre=!0,je(n,a),n.source=l,c=Bg(n,e).filter(h=>h.name!=="v-pre"));let f=!1;if(n.source.length===0?Ke(n,9):(f=qt(n.source,"/>"),e===1&&f&&Ke(n,4),Et(n,f?2:1)),e===1)return;let u=0;return n.inVPre||(s==="slot"?u=2:s==="template"?c.some(h=>h.type===7&&Ug(h.name))&&(u=3):lw(s,c,n)&&(u=1)),{type:1,ns:o,tag:s,tagType:u,props:c,isSelfClosing:f,children:[],loc:Ln(n,i),codegenNode:void 0}}function lw(n,e,t){const i=t.options;if(i.isCustomElement(n))return!1;if(n==="component"||/^[A-Z]/.test(n)||Rg(n)||i.isBuiltInComponent&&i.isBuiltInComponent(n)||i.isNativeTag&&!i.isNativeTag(n))return!0;for(let r=0;r<e.length;r++){const s=e[r];if(s.type===6){if(s.name==="is"&&s.value){if(s.value.content.startsWith("vue:"))return!0;if(ds("COMPILER_IS_ON_ELEMENT",t,s.loc))return!0}}else{if(s.name==="is")return!0;if(s.name==="bind"&&kl(s.arg,"is")&&!0&&ds("COMPILER_IS_ON_ELEMENT",t,s.loc))return!0}}}function Bg(n,e){const t=[],i=new Set;for(;n.source.length>0&&!qt(n.source,">")&&!qt(n.source,"/>");){if(qt(n.source,"/")){Ke(n,22),Et(n,1),ea(n);continue}e===1&&Ke(n,3);const r=cw(n,i);r.type===6&&r.value&&r.name==="class"&&(r.value.content=r.value.content.replace(/\s+/g," ").trim()),e===0&&t.push(r),/^[^\t\r\n\f />]/.test(n.source)&&Ke(n,15),ea(n)}return t}function cw(n,e){const t=Tn(n),r=/^[^\t\r\n\f />][^\t\r\n\f />=]*/.exec(n.source)[0];e.has(r)&&Ke(n,2),e.add(r),r[0]==="="&&Ke(n,19);{const a=/["'<]/g;let l;for(;l=a.exec(r);)Ke(n,17,l.index)}Et(n,r.length);let s;/^[\t\r\n\f ]*=/.test(n.source)&&(ea(n),Et(n,1),ea(n),s=uw(n),s||Ke(n,13));const o=Ln(n,t);if(!n.inVPre&&/^(v-[A-Za-z0-9-]|:|\.|@|#)/.test(r)){const a=/(?:^v-([a-z0-9-]+))?(?:(?::|^\.|^@|^#)(\[[^\]]+\]|[^\.]+))?(.+)?$/i.exec(r);let l=qt(r,"."),c=a[1]||(l||qt(r,":")?"bind":qt(r,"@")?"on":"slot"),f;if(a[2]){const h=c==="slot",d=r.lastIndexOf(a[2]),m=Ln(n,kg(n,t,d),kg(n,t,d+a[2].length+(h&&a[3]||"").length));let _=a[2],v=!0;_.startsWith("[")?(v=!1,_.endsWith("]")?_=_.slice(1,_.length-1):(Ke(n,27),_=_.slice(1))):h&&(_+=a[3]||""),f={type:4,content:_,isStatic:v,constType:v?3:0,loc:m}}if(s&&s.isQuoted){const h=s.loc;h.start.offset++,h.start.column++,h.end=Ul(h.start,s.content),h.source=h.source.slice(1,-1)}const u=a[3]?a[3].slice(1).split("."):[];return l&&u.push("prop"),c==="bind"&&f&&u.includes("sync")&&ds("COMPILER_V_BIND_SYNC",n,o,f.loc.source)&&(c="model",u.splice(u.indexOf("sync"),1)),{type:7,name:c,exp:s&&{type:4,content:s.content,isStatic:!1,constType:0,loc:s.loc},arg:f,modifiers:u,loc:o}}return!n.inVPre&&qt(r,"v-")&&Ke(n,26),{type:6,name:r,value:s&&{type:2,content:s.content,loc:s.loc},loc:o}}function uw(n){const e=Tn(n);let t;const i=n.source[0],r=i==='"'||i==="'";if(r){Et(n,1);const s=n.source.indexOf(i);s===-1?t=Jo(n,n.source.length,4):(t=Jo(n,s,4),Et(n,1))}else{const s=/^[^\t\r\n\f >]+/.exec(n.source);if(!s)return;const o=/["'<=`]/g;let a;for(;a=o.exec(s[0]);)Ke(n,18,a.index);t=Jo(n,s[0].length,4)}return{content:t,isQuoted:r,loc:Ln(n,e)}}function fw(n,e){const[t,i]=n.options.delimiters,r=n.source.indexOf(i,t.length);if(r===-1){Ke(n,25);return}const s=Tn(n);Et(n,t.length);const o=Tn(n),a=Tn(n),l=r-t.length,c=n.source.slice(0,l),f=Jo(n,l,e),u=f.trim(),h=f.indexOf(u);h>0&&Bl(o,c,h);const d=l-(f.length-u.length-h);return Bl(a,c,d),Et(n,i.length),{type:5,content:{type:4,isStatic:!1,constType:0,content:u,loc:Ln(n,o,a)},loc:Ln(n,s)}}function hw(n,e){const t=e===3?["]]>"]:["<",n.options.delimiters[0]];let i=n.source.length;for(let o=0;o<t.length;o++){const a=n.source.indexOf(t[o],1);a!==-1&&i>a&&(i=a)}const r=Tn(n),s=Jo(n,i,e);return{type:2,content:s,loc:Ln(n,r)}}function Jo(n,e,t){const i=n.source.slice(0,e);return Et(n,e),t===2||t===3||i.indexOf("&")===-1?i:n.options.decodeEntities(i,t===4)}function Tn(n){const{column:e,line:t,offset:i}=n;return{column:e,line:t,offset:i}}function Ln(n,e,t){return t=t||Tn(n),{start:e,end:t,source:n.originalSource.slice(e.offset,t.offset)}}function Gl(n){return n[n.length-1]}function qt(n,e){return n.startsWith(e)}function Et(n,e){const{source:t}=n;Bl(n,t,e),n.source=t.slice(e)}function ea(n){const e=/^[\t\r\n\f ]+/.exec(n.source);e&&Et(n,e[0].length)}function kg(n,e,t){return Ul(e,n.originalSource.slice(e.offset,t),t)}function Ke(n,e,t,i=Tn(n)){t&&(i.offset+=t,i.column+=t),n.options.onError(ht(e,{start:i,end:i,source:""}))}function dw(n,e,t){const i=n.source;switch(e){case 0:if(qt(i,"</")){for(let r=t.length-1;r>=0;--r)if(Hf(i,t[r].tag))return!0}break;case 1:case 2:{const r=Gl(t);if(r&&Hf(i,r.tag))return!0;break}case 3:if(qt(i,"]]>"))return!0;break}return!i}function Hf(n,e){return qt(n,"</")&&n.slice(2,2+e.length).toLowerCase()===e.toLowerCase()&&/[\t\r\n\f />]/.test(n[2+e.length]||">")}function pw(n,e){Wl(n,e,Hg(n,n.children[0]))}function Hg(n,e){const{children:t}=n;return t.length===1&&e.type===1&&!zl(e)}function Wl(n,e,t=!1){const{children:i}=n,r=i.length;let s=0;for(let o=0;o<i.length;o++){const a=i[o];if(a.type===1&&a.tagType===0){const l=t?0:Pn(a,e);if(l>0){if(l>=2){a.codegenNode.patchFlag=-1+"",a.codegenNode=e.hoist(a.codegenNode),s++;continue}}else{const c=a.codegenNode;if(c.type===13){const f=Wg(c);if((!f||f===512||f===1)&&Vg(a,e)>=2){const u=Gg(a);u&&(c.props=e.hoist(u))}c.dynamicProps&&(c.dynamicProps=e.hoist(c.dynamicProps))}}}else a.type===12&&Pn(a.content,e)>=2&&(a.codegenNode=e.hoist(a.codegenNode),s++);if(a.type===1){const l=a.tagType===1;l&&e.scopes.vSlot++,Wl(a,e),l&&e.scopes.vSlot--}else if(a.type===11)Wl(a,e,a.children.length===1);else if(a.type===9)for(let l=0;l<a.branches.length;l++)Wl(a.branches[l],e,a.branches[l].children.length===1)}s&&e.transformHoist&&e.transformHoist(i,e,n),s&&s===r&&n.type===1&&n.tagType===0&&n.codegenNode&&n.codegenNode.type===13&&be(n.codegenNode.children)&&(n.codegenNode.children=e.hoist(Qo(n.codegenNode.children)))}function Pn(n,e){const{constantCache:t}=e;switch(n.type){case 1:if(n.tagType!==0)return 0;const i=t.get(n);if(i!==void 0)return i;const r=n.codegenNode;if(r.type!==13)return 0;if(Wg(r))return t.set(n,0),0;{let a=3;const l=Vg(n,e);if(l===0)return t.set(n,0),0;l<a&&(a=l);for(let c=0;c<n.children.length;c++){const f=Pn(n.children[c],e);if(f===0)return t.set(n,0),0;f<a&&(a=f)}if(a>1)for(let c=0;c<n.props.length;c++){const f=n.props[c];if(f.type===7&&f.name==="bind"&&f.exp){const u=Pn(f.exp,e);if(u===0)return t.set(n,0),0;u<a&&(a=u)}}return r.isBlock&&(e.removeHelper(Or),e.removeHelper(hs(e.inSSR,r.isComponent)),r.isBlock=!1,e.helper(fs(e.inSSR,r.isComponent))),t.set(n,a),a}case 2:case 3:return 3;case 9:case 11:case 10:return 0;case 5:case 12:return Pn(n.content,e);case 4:return n.constType;case 8:let o=3;for(let a=0;a<n.children.length;a++){const l=n.children[a];if(De(l)||$r(l))continue;const c=Pn(l,e);if(c===0)return 0;c<o&&(o=c)}return o;default:return 0}}const mw=new Set([Ef,Lf,Yo,qo]);function zg(n,e){if(n.type===14&&!De(n.callee)&&mw.has(n.callee)){const t=n.arguments[0];if(t.type===4)return Pn(t,e);if(t.type===14)return zg(t,e)}return 0}function Vg(n,e){let t=3;const i=Gg(n);if(i&&i.type===15){const{properties:r}=i;for(let s=0;s<r.length;s++){const{key:o,value:a}=r[s],l=Pn(o,e);if(l===0)return l;l<t&&(t=l);let c;if(a.type===4?c=Pn(a,e):a.type===14?c=zg(a,e):c=0,c===0)return c;c<t&&(t=c)}}return t}function Gg(n){const e=n.codegenNode;if(e.type===13)return e.props}function Wg(n){const e=n.patchFlag;return e?parseInt(e,10):void 0}function gw(n,{filename:e="",prefixIdentifiers:t=!1,hoistStatic:i=!1,cacheHandlers:r=!1,nodeTransforms:s=[],directiveTransforms:o={},transformHoist:a=null,isBuiltInComponent:l=tn,isCustomElement:c=tn,expressionPlugins:f=[],scopeId:u=null,slotted:h=!0,ssr:d=!1,inSSR:m=!1,ssrCssVars:_="",bindingMetadata:v=qe,inline:p=!1,isTS:g=!1,onError:x=_f,onWarn:b=Tg,compatConfig:T}){const S=e.replace(/\?.*$/,"").match(/([^/\\]+)\.\w+$/),y={selfName:S&&wr(Yt(S[1])),prefixIdentifiers:t,hoistStatic:i,cacheHandlers:r,nodeTransforms:s,directiveTransforms:o,transformHoist:a,isBuiltInComponent:l,isCustomElement:c,expressionPlugins:f,scopeId:u,slotted:h,ssr:d,inSSR:m,ssrCssVars:_,bindingMetadata:v,inline:p,isTS:g,onError:x,onWarn:b,compatConfig:T,root:n,helpers:new Map,components:new Set,directives:new Set,hoists:[],imports:[],constantCache:new Map,temps:0,cached:0,identifiers:Object.create(null),scopes:{vFor:0,vSlot:0,vPre:0,vOnce:0},parent:null,currentNode:n,childIndex:0,inVOnce:!1,helper(E){const N=y.helpers.get(E)||0;return y.helpers.set(E,N+1),E},removeHelper(E){const N=y.helpers.get(E);if(N){const F=N-1;F?y.helpers.set(E,F):y.helpers.delete(E)}},helperString(E){return`_${$i[y.helper(E)]}`},replaceNode(E){y.parent.children[y.childIndex]=y.currentNode=E},removeNode(E){const N=y.parent.children,F=E?N.indexOf(E):y.currentNode?y.childIndex:-1;!E||E===y.currentNode?(y.currentNode=null,y.onNodeRemoved()):y.childIndex>F&&(y.childIndex--,y.onNodeRemoved()),y.parent.children.splice(F,1)},onNodeRemoved:()=>{},addIdentifiers(E){},removeIdentifiers(E){},hoist(E){De(E)&&(E=He(E)),y.hoists.push(E);const N=He(`_hoisted_${y.hoists.length}`,!1,E.loc,2);return N.hoisted=E,N},cache(E,N=!1){return WM(y.cached++,E,N)}};return y.filters=new Set,y}function _w(n,e){const t=gw(n,e);Xl(n,t),e.hoistStatic&&pw(n,t),e.ssr||vw(n,t),n.helpers=[...t.helpers.keys()],n.components=[...t.components],n.directives=[...t.directives],n.imports=t.imports,n.hoists=t.hoists,n.temps=t.temps,n.cached=t.cached,n.filters=[...t.filters]}function vw(n,e){const{helper:t}=e,{children:i}=n;if(i.length===1){const r=i[0];if(Hg(n,r)&&r.codegenNode){const s=r.codegenNode;s.type===13&&Uf(s,e),n.codegenNode=s}else n.codegenNode=r}else if(i.length>1){let r=64;n.codegenNode=jo(e,t(Go),void 0,n.children,r+"",void 0,void 0,!0,void 0,!1)}}function xw(n,e){let t=0;const i=()=>{t--};for(;t<n.children.length;t++){const r=n.children[t];De(r)||(e.parent=n,e.childIndex=t,e.onNodeRemoved=i,Xl(r,e))}}function Xl(n,e){e.currentNode=n;const{nodeTransforms:t}=e,i=[];for(let s=0;s<t.length;s++){const o=t[s](n,e);if(o&&(be(o)?i.push(...o):i.push(o)),e.currentNode)n=e.currentNode;else return}switch(n.type){case 3:e.ssr||e.helper(Xo);break;case 5:e.ssr||e.helper(Nl);break;case 9:for(let s=0;s<n.branches.length;s++)Xl(n.branches[s],e);break;case 10:case 11:case 1:case 0:xw(n,e);break}e.currentNode=n;let r=i.length;for(;r--;)i[r]()}function Xg(n,e){const t=De(n)?i=>i===n:i=>n.test(i);return(i,r)=>{if(i.type===1){const{props:s}=i;if(i.tagType===3&&s.some(ZM))return;const o=[];for(let a=0;a<s.length;a++){const l=s[a];if(l.type===7&&t(l.name)){s.splice(a,1),a--;const c=e(i,l,r);c&&o.push(c)}}return o}}}const Yl="/*#__PURE__*/";function yw(n,{mode:e="function",prefixIdentifiers:t=e==="module",sourceMap:i=!1,filename:r="template.vue.html",scopeId:s=null,optimizeImports:o=!1,runtimeGlobalName:a="Vue",runtimeModuleName:l="vue",ssrRuntimeModuleName:c="vue/server-renderer",ssr:f=!1,isTS:u=!1,inSSR:h=!1}){const d={mode:e,prefixIdentifiers:t,sourceMap:i,filename:r,scopeId:s,optimizeImports:o,runtimeGlobalName:a,runtimeModuleName:l,ssrRuntimeModuleName:c,ssr:f,isTS:u,inSSR:h,source:n.loc.source,code:"",column:1,line:1,offset:0,indentLevel:0,pure:!1,map:void 0,helper(_){return`_${$i[_]}`},push(_,v){d.code+=_},indent(){m(++d.indentLevel)},deindent(_=!1){_?--d.indentLevel:m(--d.indentLevel)},newline(){m(d.indentLevel)}};function m(_){d.push(`
`+"  ".repeat(_))}return d}function bw(n,e={}){const t=yw(n,e);e.onContextCreated&&e.onContextCreated(t);const{mode:i,push:r,prefixIdentifiers:s,indent:o,deindent:a,newline:l,scopeId:c,ssr:f}=t,u=n.helpers.length>0,h=!s&&i!=="module";Tw(n,t);const m=f?"ssrRender":"render",v=(f?["_ctx","_push","_parent","_attrs"]:["_ctx","_cache"]).join(", ");if(r(`function ${m}(${v}) {`),o(),h&&(r("with (_ctx) {"),o(),u&&(r(`const { ${n.helpers.map(p=>`${$i[p]}: _${$i[p]}`).join(", ")} } = _Vue`),r(`
`),l())),n.components.length&&(zf(n.components,"component",t),(n.directives.length||n.temps>0)&&l()),n.directives.length&&(zf(n.directives,"directive",t),n.temps>0&&l()),n.filters&&n.filters.length&&(l(),zf(n.filters,"filter",t),l()),n.temps>0){r("let ");for(let p=0;p<n.temps;p++)r(`${p>0?", ":""}_temp${p}`)}return(n.components.length||n.directives.length||n.temps)&&(r(`
`),l()),f||r("return "),n.codegenNode?jt(n.codegenNode,t):r("null"),h&&(a(),r("}")),a(),r("}"),{ast:n,code:t.code,preamble:"",map:t.map?t.map.toJSON():void 0}}function Tw(n,e){const{ssr:t,prefixIdentifiers:i,push:r,newline:s,runtimeModuleName:o,runtimeGlobalName:a,ssrRuntimeModuleName:l}=e,c=a,f=u=>`${$i[u]}: _${$i[u]}`;if(n.helpers.length>0&&(r(`const _Vue = ${c}
`),n.hoists.length)){const u=[xf,yf,Xo,bf,Ag].filter(h=>n.helpers.includes(h)).map(f).join(", ");r(`const { ${u} } = _Vue
`)}Mw(n.hoists,e),s(),r("return ")}function zf(n,e,{helper:t,push:i,newline:r,isTS:s}){const o=t(e==="filter"?wf:e==="component"?Tf:Mf);for(let a=0;a<n.length;a++){let l=n[a];const c=l.endsWith("__self");c&&(l=l.slice(0,-6)),i(`const ${Ko(l,e)} = ${o}(${JSON.stringify(l)}${c?", true":""})${s?"!":""}`),a<n.length-1&&r()}}function Mw(n,e){if(!n.length)return;e.pure=!0;const{push:t,newline:i,helper:r,scopeId:s,mode:o}=e;i();for(let a=0;a<n.length;a++){const l=n[a];l&&(t(`const _hoisted_${a+1} = `),jt(l,e),i())}e.pure=!1}function Vf(n,e){const t=n.length>3||!1;e.push("["),t&&e.indent(),ta(n,e,t),t&&e.deindent(),e.push("]")}function ta(n,e,t=!1,i=!0){const{push:r,newline:s}=e;for(let o=0;o<n.length;o++){const a=n[o];De(a)?r(a):be(a)?Vf(a,e):jt(a,e),o<n.length-1&&(t?(i&&r(","),s()):i&&r(", "))}}function jt(n,e){if(De(n)){e.push(n);return}if($r(n)){e.push(e.helper(n));return}switch(n.type){case 1:case 9:case 11:jt(n.codegenNode,e);break;case 2:ww(n,e);break;case 4:Yg(n,e);break;case 5:Sw(n,e);break;case 12:jt(n.codegenNode,e);break;case 8:qg(n,e);break;case 3:Ew(n,e);break;case 13:Lw(n,e);break;case 14:Rw(n,e);break;case 15:Cw(n,e);break;case 17:Fw(n,e);break;case 18:Iw(n,e);break;case 19:Nw(n,e);break;case 20:Dw(n,e);break;case 21:ta(n.body,e,!0,!1);break}}function ww(n,e){e.push(JSON.stringify(n.content),n)}function Yg(n,e){const{content:t,isStatic:i}=n;e.push(i?JSON.stringify(t):t,n)}function Sw(n,e){const{push:t,helper:i,pure:r}=e;r&&t(Yl),t(`${i(Nl)}(`),jt(n.content,e),t(")")}function qg(n,e){for(let t=0;t<n.children.length;t++){const i=n.children[t];De(i)?e.push(i):jt(i,e)}}function Aw(n,e){const{push:t}=e;if(n.type===8)t("["),qg(n,e),t("]");else if(n.isStatic){const i=Df(n.content)?n.content:JSON.stringify(n.content);t(i,n)}else t(`[${n.content}]`,n)}function Ew(n,e){const{push:t,helper:i,pure:r}=e;r&&t(Yl),t(`${i(Xo)}(${JSON.stringify(n.content)})`,n)}function Lw(n,e){const{push:t,helper:i,pure:r}=e,{tag:s,props:o,children:a,patchFlag:l,dynamicProps:c,directives:f,isBlock:u,disableTracking:h,isComponent:d}=n;f&&t(i(Sf)+"("),u&&t(`(${i(Or)}(${h?"true":""}), `),r&&t(Yl);const m=u?hs(e.inSSR,d):fs(e.inSSR,d);t(i(m)+"(",n),ta(Pw([s,o,a,l,c]),e),t(")"),u&&t(")"),f&&(t(", "),jt(f,e),t(")"))}function Pw(n){let e=n.length;for(;e--&&n[e]==null;);return n.slice(0,e+1).map(t=>t||"null")}function Rw(n,e){const{push:t,helper:i,pure:r}=e,s=De(n.callee)?n.callee:i(n.callee);r&&t(Yl),t(s+"(",n),ta(n.arguments,e),t(")")}function Cw(n,e){const{push:t,indent:i,deindent:r,newline:s}=e,{properties:o}=n;if(!o.length){t("{}",n);return}const a=o.length>1||!1;t(a?"{":"{ "),a&&i();for(let l=0;l<o.length;l++){const{key:c,value:f}=o[l];Aw(c,e),t(": "),jt(f,e),l<o.length-1&&(t(","),s())}a&&r(),t(a?"}":" }")}function Fw(n,e){Vf(n.elements,e)}function Iw(n,e){const{push:t,indent:i,deindent:r}=e,{params:s,returns:o,body:a,newline:l,isSlot:c}=n;c&&t(`_${$i[Ff]}(`),t("(",n),be(s)?ta(s,e):s&&jt(s,e),t(") => "),(l||a)&&(t("{"),i()),o?(l&&t("return "),be(o)?Vf(o,e):jt(o,e)):a&&jt(a,e),(l||a)&&(r(),t("}")),c&&(n.isNonScopedSlot&&t(", undefined, true"),t(")"))}function Nw(n,e){const{test:t,consequent:i,alternate:r,newline:s}=n,{push:o,indent:a,deindent:l,newline:c}=e;if(t.type===4){const u=!Df(t.content);u&&o("("),Yg(t,e),u&&o(")")}else o("("),jt(t,e),o(")");s&&a(),e.indentLevel++,s||o(" "),o("? "),jt(i,e),e.indentLevel--,s&&c(),s||o(" "),o(": ");const f=r.type===19;f||e.indentLevel++,jt(r,e),f||e.indentLevel--,s&&l(!0)}function Dw(n,e){const{push:t,helper:i,indent:r,deindent:s,newline:o}=e;t(`_cache[${n.index}] || (`),n.isVNode&&(r(),t(`${i(Ol)}(-1),`),o()),t(`_cache[${n.index}] = `),jt(n.value,e),n.isVNode&&(t(","),o(),t(`${i(Ol)}(1),`),o(),t(`_cache[${n.index}]`),s()),t(")")}new RegExp("\\b"+"do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments,typeof,void".split(",").join("\\b|\\b")+"\\b");const Ow=Xg(/^(if|else|else-if)$/,(n,e,t)=>Uw(n,e,t,(i,r,s)=>{const o=t.parent.children;let a=o.indexOf(i),l=0;for(;a-->=0;){const c=o[a];c&&c.type===9&&(l+=c.branches.length)}return()=>{if(s)i.codegenNode=Qg(r,l,t);else{const c=Bw(i.codegenNode);c.alternate=Qg(r,l+i.branches.length-1,t)}}}));function Uw(n,e,t,i){if(e.name!=="else"&&(!e.exp||!e.exp.content.trim())){const r=e.exp?e.exp.loc:n.loc;t.onError(ht(28,e.loc)),e.exp=He("true",!1,r)}if(e.name==="if"){const r=jg(n,e),s={type:9,loc:n.loc,branches:[r]};if(t.replaceNode(s),i)return i(s,r,!0)}else{const r=t.parent.children;let s=r.indexOf(n);for(;s-->=-1;){const o=r[s];if(o&&o.type===2&&!o.content.trim().length){t.removeNode(o);continue}if(o&&o.type===9){e.name==="else-if"&&o.branches[o.branches.length-1].condition===void 0&&t.onError(ht(30,n.loc)),t.removeNode();const a=jg(n,e);o.branches.push(a);const l=i&&i(o,a,!1);Xl(a,t),l&&l(),t.currentNode=null}else t.onError(ht(30,n.loc));break}}}function jg(n,e){return{type:10,loc:n.loc,condition:e.name==="else"?void 0:e.exp,children:n.tagType===3&&!En(n,"for")?n.children:[n],userKey:$o(n,"key")}}function Qg(n,e,t){return n.condition?Nf(n.condition,$g(n,e,t),Mt(t.helper(Xo),['""',"true"])):$g(n,e,t)}function $g(n,e,t){const{helper:i}=t,r=Tt("key",He(`${e}`,!1,bn,2)),{children:s}=n,o=s[0];if(s.length!==1||o.type!==1)if(s.length===1&&o.type===11){const l=o.codegenNode;return Vl(l,r,t),l}else{let l=64;return jo(t,i(Go),An([r]),s,l+"",void 0,void 0,!0,!1,!1,n.loc)}else{const l=o.codegenNode,c=ew(l);return c.type===13&&Uf(c,t),Vl(c,r,t),l}}function Bw(n){for(;;)if(n.type===19)if(n.alternate.type===19)n=n.alternate;else return n;else n.type===20&&(n=n.value)}const kw=Xg("for",(n,e,t)=>{const{helper:i,removeHelper:r}=t;return Hw(n,e,t,s=>{const o=Mt(i(Af),[s.source]),a=En(n,"memo"),l=$o(n,"key"),c=l&&(l.type===6?He(l.value.content,!0):l.exp),f=l?Tt("key",c):null,u=s.source.type===4&&s.source.constType>0,h=u?64:l?128:256;return s.codegenNode=jo(t,i(Go),void 0,o,h+"",void 0,void 0,!0,!u,!1,n.loc),()=>{let d;const m=Hl(n),{children:_}=s,v=_.length!==1||_[0].type!==1,p=zl(n)?n:m&&n.children.length===1&&zl(n.children[0])?n.children[0]:null;if(p?(d=p.codegenNode,m&&f&&Vl(d,f,t)):v?d=jo(t,i(Go),f?An([f]):void 0,n.children,64+"",void 0,void 0,!0,void 0,!1):(d=_[0].codegenNode,m&&f&&Vl(d,f,t),d.isBlock!==!u&&(d.isBlock?(r(Or),r(hs(t.inSSR,d.isComponent))):r(fs(t.inSSR,d.isComponent))),d.isBlock=!u,d.isBlock?(i(Or),i(hs(t.inSSR,d.isComponent))):i(fs(t.inSSR,d.isComponent))),a){const g=cs(Gf(s.parseResult,[He("_cached")]));g.body=XM([Jn(["const _memo = (",a.exp,")"]),Jn(["if (_cached",...c?[" && _cached.key === ",c]:[],` && ${t.helperString(Pg)}(_cached, _memo)) return _cached`]),Jn(["const _item = ",d]),He("_item.memo = _memo"),He("return _item")]),o.arguments.push(g,He("_cache"),He(String(t.cached++)))}else o.arguments.push(cs(Gf(s.parseResult),d,!0))}})});function Hw(n,e,t,i){if(!e.exp){t.onError(ht(31,e.loc));return}const r=Zg(e.exp);if(!r){t.onError(ht(32,e.loc));return}const{addIdentifiers:s,removeIdentifiers:o,scopes:a}=t,{source:l,value:c,key:f,index:u}=r,h={type:11,loc:e.loc,source:l,valueAlias:c,keyAlias:f,objectIndexAlias:u,parseResult:r,children:Hl(n)?n.children:[n]};t.replaceNode(h),a.vFor++;const d=i&&i(h);return()=>{a.vFor--,d&&d()}}const zw=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,Kg=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,Vw=/^\(|\)$/g;function Zg(n,e){const t=n.loc,i=n.content,r=i.match(zw);if(!r)return;const[,s,o]=r,a={source:ql(t,o.trim(),i.indexOf(o,s.length)),value:void 0,key:void 0,index:void 0};let l=s.trim().replace(Vw,"").trim();const c=s.indexOf(l),f=l.match(Kg);if(f){l=l.replace(Kg,"").trim();const u=f[1].trim();let h;if(u&&(h=i.indexOf(u,c+l.length),a.key=ql(t,u,h)),f[2]){const d=f[2].trim();d&&(a.index=ql(t,d,i.indexOf(d,a.key?h+u.length:c+l.length)))}}return l&&(a.value=ql(t,l,c)),a}function ql(n,e,t){return He(e,!1,Fg(n,t,e.length))}function Gf({value:n,key:e,index:t},i=[]){return Gw([n,e,t,...i])}function Gw(n){let e=n.length;for(;e--&&!n[e];);return n.slice(0,e+1).map((t,i)=>t||He("_".repeat(i+1),!1))}const Jg=He("undefined",!1),Ww=(n,e)=>{if(n.type===1&&(n.tagType===1||n.tagType===3)){const t=En(n,"slot");if(t)return t.exp,e.scopes.vSlot++,()=>{e.scopes.vSlot--}}},Xw=(n,e,t)=>cs(n,e,!1,!0,e.length?e[0].loc:t);function Yw(n,e,t=Xw){e.helper(Ff);const{children:i,loc:r}=n,s=[],o=[];let a=e.scopes.vSlot>0||e.scopes.vFor>0;const l=En(n,"slot",!0);if(l){const{arg:_,exp:v}=l;_&&!cn(_)&&(a=!0),s.push(Tt(_||He("default",!0),t(v,i,r)))}let c=!1,f=!1;const u=[],h=new Set;for(let _=0;_<i.length;_++){const v=i[_];let p;if(!Hl(v)||!(p=En(v,"slot",!0))){v.type!==3&&u.push(v);continue}if(l){e.onError(ht(37,p.loc));break}c=!0;const{children:g,loc:x}=v,{arg:b=He("default",!0),exp:T,loc:S}=p;let y;cn(b)?y=b?b.content:"default":a=!0;const E=t(T,g,x);let N,F,C;if(N=En(v,"if"))a=!0,o.push(Nf(N.exp,jl(b,E),Jg));else if(F=En(v,/^else(-if)?$/,!0)){let V=_,O;for(;V--&&(O=i[V],O.type===3););if(O&&Hl(O)&&En(O,"if")){i.splice(_,1),_--;let H=o[o.length-1];for(;H.alternate.type===19;)H=H.alternate;H.alternate=F.exp?Nf(F.exp,jl(b,E),Jg):jl(b,E)}else e.onError(ht(30,F.loc))}else if(C=En(v,"for")){a=!0;const V=C.parseResult||Zg(C.exp);V?o.push(Mt(e.helper(Af),[V.source,cs(Gf(V),jl(b,E),!0)])):e.onError(ht(32,C.loc))}else{if(y){if(h.has(y)){e.onError(ht(38,S));continue}h.add(y),y==="default"&&(f=!0)}s.push(Tt(b,E))}}if(!l){const _=(v,p)=>{const g=t(v,p,r);return e.compatConfig&&(g.isNonScopedSlot=!0),Tt("default",g)};c?u.length&&u.some(v=>e_(v))&&(f?e.onError(ht(39,u[0].loc)):s.push(_(void 0,u))):s.push(_(void 0,i))}const d=a?2:Ql(n.children)?3:1;let m=An(s.concat(Tt("_",He(d+"",!1))),r);return o.length&&(m=Mt(e.helper(Lg),[m,Qo(o)])),{slots:m,hasDynamicSlots:a}}function jl(n,e){return An([Tt("name",n),Tt("fn",e)])}function Ql(n){for(let e=0;e<n.length;e++){const t=n[e];switch(t.type){case 1:if(t.tagType===2||Ql(t.children))return!0;break;case 9:if(Ql(t.branches))return!0;break;case 10:case 11:if(Ql(t.children))return!0;break}}return!1}function e_(n){return n.type!==2&&n.type!==12?!0:n.type===2?!!n.content.trim():e_(n.content)}const t_=new WeakMap,qw=(n,e)=>function(){if(n=e.currentNode,!(n.type===1&&(n.tagType===0||n.tagType===1)))return;const{tag:i,props:r}=n,s=n.tagType===1;let o=s?jw(n,e):`"${i}"`;const a=ft(o)&&o.callee===Il;let l,c,f,u=0,h,d,m,_=a||o===Wo||o===vf||!s&&(i==="svg"||i==="foreignObject"||$o(n,"key",!0));if(r.length>0){const v=n_(n,e);l=v.props,u=v.patchFlag,d=v.dynamicPropNames;const p=v.directives;m=p&&p.length?Qo(p.map(g=>$w(g,e))):void 0}if(n.children.length>0)if(o===Fl&&(_=!0,u|=1024),s&&o!==Wo&&o!==Fl){const{slots:p,hasDynamicSlots:g}=Yw(n,e);c=p,g&&(u|=1024)}else if(n.children.length===1&&o!==Wo){const p=n.children[0],g=p.type,x=g===5||g===8;x&&Pn(p,e)===0&&(u|=1),x||g===2?c=p:c=n.children}else c=n.children;u!==0&&(f=String(u),d&&d.length&&(h=Kw(d))),n.codegenNode=jo(e,o,l,c,f,h,m,!!_,!1,s,n.loc)};function jw(n,e,t=!1){let{tag:i}=n;const r=Xf(i),s=$o(n,"is");if(s)if(r||Ur("COMPILER_IS_ON_ELEMENT",e)){const l=s.type===6?s.value&&He(s.value.content,!0):s.exp;if(l)return Mt(e.helper(Il),[l])}else s.type===6&&s.value.content.startsWith("vue:")&&(i=s.value.content.slice(4));const o=!r&&En(n,"is");if(o&&o.exp)return Mt(e.helper(Il),[o.exp]);const a=Rg(i)||e.isBuiltInComponent(i);return a?(t||e.helper(a),a):(e.helper(Tf),e.components.add(i),Ko(i,"component"))}function n_(n,e,t=n.props,i=!1){const{tag:r,loc:s}=n,o=n.tagType===1;let a=[];const l=[],c=[];let f=0,u=!1,h=!1,d=!1,m=!1,_=!1,v=!1;const p=[],g=({key:b,value:T})=>{if(cn(b)){const S=b.content,y=br(S);if(!o&&y&&S.toLowerCase()!=="onclick"&&S!=="onUpdate:modelValue"&&!Mr(S)&&(m=!0),y&&Mr(S)&&(v=!0),T.type===20||(T.type===4||T.type===8)&&Pn(T,e)>0)return;S==="ref"?u=!0:S==="class"?h=!0:S==="style"?d=!0:S!=="key"&&!p.includes(S)&&p.push(S),o&&(S==="class"||S==="style")&&!p.includes(S)&&p.push(S)}else _=!0};for(let b=0;b<t.length;b++){const T=t[b];if(T.type===6){const{loc:S,name:y,value:E}=T;let N=He(E?E.content:"",!0,E?E.loc:S);if(y==="ref"&&(u=!0),y==="is"&&(Xf(r)||E&&E.content.startsWith("vue:")||Ur("COMPILER_IS_ON_ELEMENT",e)))continue;a.push(Tt(He(y,!0,Fg(S,0,y.length)),N))}else{const{name:S,arg:y,exp:E,loc:N}=T,F=S==="bind",C=S==="on";if(S==="slot"){o||e.onError(ht(40,N));continue}if(S==="once"||S==="memo"||S==="is"||F&&kl(y,"is")&&(Xf(r)||Ur("COMPILER_IS_ON_ELEMENT",e))||C&&i)continue;if(!y&&(F||C)){if(_=!0,E)if(a.length&&(l.push(An(Wf(a),s)),a=[]),F){if(Ur("COMPILER_V_BIND_OBJECT_ORDER",e)){l.unshift(E);continue}l.push(E)}else l.push({type:14,loc:N,callee:e.helper(Pf),arguments:[E]});else e.onError(ht(F?34:35,N));continue}const V=e.directiveTransforms[S];if(V){const{props:O,needRuntime:H}=V(T,n,e);!i&&O.forEach(g),a.push(...O),H&&(c.push(T),$r(H)&&t_.set(T,H))}else c.push(T)}T.type===6&&T.name==="ref"&&e.scopes.vFor>0&&ds("COMPILER_V_FOR_REF",e,T.loc)&&a.push(Tt(He("refInFor",!0),He("true",!1)))}let x;if(l.length?(a.length&&l.push(An(Wf(a),s)),l.length>1?x=Mt(e.helper(Dl),l,s):x=l[0]):a.length&&(x=An(Wf(a),s)),_?f|=16:(h&&!o&&(f|=2),d&&!o&&(f|=4),p.length&&(f|=8),m&&(f|=32)),(f===0||f===32)&&(u||v||c.length>0)&&(f|=512),!e.inSSR&&x)switch(x.type){case 15:let b=-1,T=-1,S=!1;for(let N=0;N<x.properties.length;N++){const F=x.properties[N].key;cn(F)?F.content==="class"?b=N:F.content==="style"&&(T=N):F.isHandlerKey||(S=!0)}const y=x.properties[b],E=x.properties[T];S?x=Mt(e.helper(Yo),[x]):(y&&!cn(y.value)&&(y.value=Mt(e.helper(Ef),[y.value])),E&&!cn(E.value)&&(d||E.value.type===17)&&(E.value=Mt(e.helper(Lf),[E.value])));break;case 14:break;default:x=Mt(e.helper(Yo),[Mt(e.helper(qo),[x])]);break}return{props:x,directives:c,patchFlag:f,dynamicPropNames:p}}function Wf(n){const e=new Map,t=[];for(let i=0;i<n.length;i++){const r=n[i];if(r.key.type===8||!r.key.isStatic){t.push(r);continue}const s=r.key.content,o=e.get(s);o?(s==="style"||s==="class"||br(s))&&Qw(o,r):(e.set(s,r),t.push(r))}return t}function Qw(n,e){n.value.type===17?n.value.elements.push(e.value):n.value=Qo([n.value,e.value],n.loc)}function $w(n,e){const t=[],i=t_.get(n);i?t.push(e.helperString(i)):(e.helper(Mf),e.directives.add(n.name),t.push(Ko(n.name,"directive")));const{loc:r}=n;if(n.exp&&t.push(n.exp),n.arg&&(n.exp||t.push("void 0"),t.push(n.arg)),Object.keys(n.modifiers).length){n.arg||(n.exp||t.push("void 0"),t.push("void 0"));const s=He("true",!1,r);t.push(An(n.modifiers.map(o=>Tt(o,s)),r))}return Qo(t,n.loc)}function Kw(n){let e="[";for(let t=0,i=n.length;t<i;t++)e+=JSON.stringify(n[t]),t<i-1&&(e+=", ");return e+"]"}function Xf(n){return n==="component"||n==="Component"}const Zw=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Jw=/-(\w)/g,i_=Zw(n=>n.replace(Jw,(e,t)=>t?t.toUpperCase():"")),eS=(n,e)=>{if(zl(n)){const{children:t,loc:i}=n,{slotName:r,slotProps:s}=tS(n,e),o=[e.prefixIdentifiers?"_ctx.$slots":"$slots",r,"{}","undefined","true"];let a=2;s&&(o[2]=s,a=3),t.length&&(o[3]=cs([],t,!1,!1,i),a=4),e.scopeId&&!e.slotted&&(a=5),o.splice(a),n.codegenNode=Mt(e.helper(Eg),o,i)}};function tS(n,e){let t='"default"',i;const r=[];for(let s=0;s<n.props.length;s++){const o=n.props[s];o.type===6?o.value&&(o.name==="name"?t=JSON.stringify(o.value.content):(o.name=i_(o.name),r.push(o))):o.name==="bind"&&kl(o.arg,"name")?o.exp&&(t=o.exp):(o.name==="bind"&&o.arg&&cn(o.arg)&&(o.arg.content=i_(o.arg.content)),r.push(o))}if(r.length>0){const{props:s,directives:o}=n_(n,e,r);i=s,o.length&&e.onError(ht(36,o[0].loc))}return{slotName:t,slotProps:i}}const nS=/^\s*([\w$_]+|(async\s*)?\([^)]*?\))\s*=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/,r_=(n,e,t,i)=>{const{loc:r,modifiers:s,arg:o}=n;!n.exp&&!s.length&&t.onError(ht(35,r));let a;if(o.type===4)if(o.isStatic){const u=o.content;a=He(Kr(Yt(u)),!0,o.loc)}else a=Jn([`${t.helperString(Cf)}(`,o,")"]);else a=o,a.children.unshift(`${t.helperString(Cf)}(`),a.children.push(")");let l=n.exp;l&&!l.content.trim()&&(l=void 0);let c=t.cacheHandlers&&!l&&!t.inVOnce;if(l){const u=Cg(l.content),h=!(u||nS.test(l.content)),d=l.content.includes(";");(h||c&&u)&&(l=Jn([`${h?"$event":"(...args)"} => ${d?"{":"("}`,l,d?"}":")"]))}let f={props:[Tt(a,l||He("() => {}",!1,r))]};return i&&(f=i(f)),c&&(f.props[0].value=t.cache(f.props[0].value)),f.props.forEach(u=>u.key.isHandlerKey=!0),f},iS=(n,e,t)=>{const{exp:i,modifiers:r,loc:s}=n,o=n.arg;return o.type!==4?(o.children.unshift("("),o.children.push(') || ""')):o.isStatic||(o.content=`${o.content} || ""`),r.includes("camel")&&(o.type===4?o.isStatic?o.content=Yt(o.content):o.content=`${t.helperString(Rf)}(${o.content})`:(o.children.unshift(`${t.helperString(Rf)}(`),o.children.push(")"))),t.inSSR||(r.includes("prop")&&s_(o,"."),r.includes("attr")&&s_(o,"^")),!i||i.type===4&&!i.content.trim()?(t.onError(ht(34,s)),{props:[Tt(o,He("",!0,s))]}):{props:[Tt(o,i)]}},s_=(n,e)=>{n.type===4?n.isStatic?n.content=e+n.content:n.content=`\`${e}\${${n.content}}\``:(n.children.unshift(`'${e}' + (`),n.children.push(")"))},rS=(n,e)=>{if(n.type===0||n.type===1||n.type===11||n.type===10)return()=>{const t=n.children;let i,r=!1;for(let s=0;s<t.length;s++){const o=t[s];if(Of(o)){r=!0;for(let a=s+1;a<t.length;a++){const l=t[a];if(Of(l))i||(i=t[s]={type:8,loc:o.loc,children:[o]}),i.children.push(" + ",l),t.splice(a,1),a--;else{i=void 0;break}}}}if(!(!r||t.length===1&&(n.type===0||n.type===1&&n.tagType===0&&!n.props.find(s=>s.type===7&&!e.directiveTransforms[s.name])&&n.tag!=="template")))for(let s=0;s<t.length;s++){const o=t[s];if(Of(o)||o.type===8){const a=[];(o.type!==2||o.content!==" ")&&a.push(o),!e.ssr&&Pn(o,e)===0&&a.push(1+""),t[s]={type:12,content:o,loc:o.loc,codegenNode:Mt(e.helper(bf),a)}}}}},o_=new WeakSet,sS=(n,e)=>{if(n.type===1&&En(n,"once",!0))return o_.has(n)||e.inVOnce?void 0:(o_.add(n),e.inVOnce=!0,e.helper(Ol),()=>{e.inVOnce=!1;const t=e.currentNode;t.codegenNode&&(t.codegenNode=e.cache(t.codegenNode,!0))})},a_=(n,e,t)=>{const{exp:i,arg:r}=n;if(!i)return t.onError(ht(41,n.loc)),Yf();const s=i.loc.source,o=i.type===4?i.content:s;t.bindingMetadata[s];const a=!1;if(!o.trim()||!Cg(o)&&!a)return t.onError(ht(42,i.loc)),Yf();const l=r||He("modelValue",!0),c=r?cn(r)?`onUpdate:${r.content}`:Jn(['"onUpdate:" + ',r]):"onUpdate:modelValue";let f;const u=t.isTS?"($event: any)":"$event";f=Jn([`${u} => ((`,i,") = $event)"]);const h=[Tt(l,n.exp),Tt(c,f)];if(n.modifiers.length&&e.tagType===1){const d=n.modifiers.map(_=>(Df(_)?_:JSON.stringify(_))+": true").join(", "),m=r?cn(r)?`${r.content}Modifiers`:Jn([r,' + "Modifiers"']):"modelModifiers";h.push(Tt(m,He(`{ ${d} }`,!1,n.loc,2)))}return Yf(h)};function Yf(n=[]){return{props:n}}const oS=/[\w).+\-_$\]]/,aS=(n,e)=>{!Ur("COMPILER_FILTER",e)||(n.type===5&&$l(n.content,e),n.type===1&&n.props.forEach(t=>{t.type===7&&t.name!=="for"&&t.exp&&$l(t.exp,e)}))};function $l(n,e){if(n.type===4)l_(n,e);else for(let t=0;t<n.children.length;t++){const i=n.children[t];typeof i=="object"&&(i.type===4?l_(i,e):i.type===8?$l(n,e):i.type===5&&$l(i.content,e))}}function l_(n,e){const t=n.content;let i=!1,r=!1,s=!1,o=!1,a=0,l=0,c=0,f=0,u,h,d,m,_=[];for(d=0;d<t.length;d++)if(h=u,u=t.charCodeAt(d),i)u===39&&h!==92&&(i=!1);else if(r)u===34&&h!==92&&(r=!1);else if(s)u===96&&h!==92&&(s=!1);else if(o)u===47&&h!==92&&(o=!1);else if(u===124&&t.charCodeAt(d+1)!==124&&t.charCodeAt(d-1)!==124&&!a&&!l&&!c)m===void 0?(f=d+1,m=t.slice(0,d).trim()):v();else{switch(u){case 34:r=!0;break;case 39:i=!0;break;case 96:s=!0;break;case 40:c++;break;case 41:c--;break;case 91:l++;break;case 93:l--;break;case 123:a++;break;case 125:a--;break}if(u===47){let p=d-1,g;for(;p>=0&&(g=t.charAt(p),g===" ");p--);(!g||!oS.test(g))&&(o=!0)}}m===void 0?m=t.slice(0,d).trim():f!==0&&v();function v(){_.push(t.slice(f,d).trim()),f=d+1}if(_.length){for(d=0;d<_.length;d++)m=lS(m,_[d],e);n.content=m}}function lS(n,e,t){t.helper(wf);const i=e.indexOf("(");if(i<0)return t.filters.add(e),`${Ko(e,"filter")}(${n})`;{const r=e.slice(0,i),s=e.slice(i+1);return t.filters.add(r),`${Ko(r,"filter")}(${n}${s!==")"?","+s:s}`}}const c_=new WeakSet,cS=(n,e)=>{if(n.type===1){const t=En(n,"memo");return!t||c_.has(n)?void 0:(c_.add(n),()=>{const i=n.codegenNode||e.currentNode.codegenNode;i&&i.type===13&&(n.tagType!==1&&Uf(i,e),n.codegenNode=Mt(e.helper(If),[t.exp,cs(void 0,i),"_cache",String(e.cached++)]))})}};function uS(n){return[[sS,Ow,cS,kw,aS,eS,qw,Ww,rS],{on:r_,bind:iS,model:a_}]}function fS(n,e={}){const t=e.onError||_f,i=e.mode==="module";e.prefixIdentifiers===!0?t(ht(46)):i&&t(ht(47));const r=!1;e.cacheHandlers&&t(ht(48)),e.scopeId&&!i&&t(ht(49));const s=De(n)?iw(n,e):n,[o,a]=uS();return _w(s,je({},e,{prefixIdentifiers:r,nodeTransforms:[...o,...e.nodeTransforms||[]],directiveTransforms:je({},a,e.directiveTransforms||{})})),bw(s,je({},e,{prefixIdentifiers:r}))}const hS=()=>({props:[]}),u_=Symbol(""),f_=Symbol(""),h_=Symbol(""),d_=Symbol(""),qf=Symbol(""),p_=Symbol(""),m_=Symbol(""),g_=Symbol(""),__=Symbol(""),v_=Symbol("");VM({[u_]:"vModelRadio",[f_]:"vModelCheckbox",[h_]:"vModelText",[d_]:"vModelSelect",[qf]:"vModelDynamic",[p_]:"withModifiers",[m_]:"withKeys",[g_]:"vShow",[__]:"Transition",[v_]:"TransitionGroup"});let ps;function dS(n,e=!1){return ps||(ps=document.createElement("div")),e?(ps.innerHTML=`<div foo="${n.replace(/"/g,"&quot;")}">`,ps.children[0].getAttribute("foo")):(ps.innerHTML=n,ps.textContent)}const pS=mn("style,iframe,script,noscript",!0),mS={isVoidTag:_0,isNativeTag:n=>m0(n)||g0(n),isPreTag:n=>n==="pre",decodeEntities:dS,isBuiltInComponent:n=>{if(us(n,"Transition"))return __;if(us(n,"TransitionGroup"))return v_},getNamespace(n,e){let t=e?e.ns:0;if(e&&t===2)if(e.tag==="annotation-xml"){if(n==="svg")return 1;e.props.some(i=>i.type===6&&i.name==="encoding"&&i.value!=null&&(i.value.content==="text/html"||i.value.content==="application/xhtml+xml"))&&(t=0)}else/^m(?:[ions]|text)$/.test(e.tag)&&n!=="mglyph"&&n!=="malignmark"&&(t=0);else e&&t===1&&(e.tag==="foreignObject"||e.tag==="desc"||e.tag==="title")&&(t=0);if(t===0){if(n==="svg")return 1;if(n==="math")return 2}return t},getTextMode({tag:n,ns:e}){if(e===0){if(n==="textarea"||n==="title")return 1;if(pS(n))return 2}return 0}},gS=n=>{n.type===1&&n.props.forEach((e,t)=>{e.type===6&&e.name==="style"&&e.value&&(n.props[t]={type:7,name:"bind",arg:He("style",!0,e.loc),exp:_S(e.value.content,e.loc),modifiers:[],loc:e.loc})})},_S=(n,e)=>{const t=tp(n);return He(JSON.stringify(t),!1,e,3)};function vi(n,e){return ht(n,e)}const vS=(n,e,t)=>{const{exp:i,loc:r}=n;return i||t.onError(vi(50,r)),e.children.length&&(t.onError(vi(51,r)),e.children.length=0),{props:[Tt(He("innerHTML",!0,r),i||He("",!0))]}},xS=(n,e,t)=>{const{exp:i,loc:r}=n;return i||t.onError(vi(52,r)),e.children.length&&(t.onError(vi(53,r)),e.children.length=0),{props:[Tt(He("textContent",!0),i?Mt(t.helperString(Nl),[i],r):He("",!0))]}},yS=(n,e,t)=>{const i=a_(n,e,t);if(!i.props.length||e.tagType===1)return i;n.arg&&t.onError(vi(55,n.arg.loc));const{tag:r}=e,s=t.isCustomElement(r);if(r==="input"||r==="textarea"||r==="select"||s){let o=h_,a=!1;if(r==="input"||s){const l=$o(e,"type");if(l){if(l.type===7)o=qf;else if(l.value)switch(l.value.content){case"radio":o=u_;break;case"checkbox":o=f_;break;case"file":a=!0,t.onError(vi(56,n.loc));break}}else KM(e)&&(o=qf)}else r==="select"&&(o=d_);a||(i.needRuntime=t.helper(o))}else t.onError(vi(54,n.loc));return i.props=i.props.filter(o=>!(o.key.type===4&&o.key.content==="modelValue")),i},bS=mn("passive,once,capture"),TS=mn("stop,prevent,self,ctrl,shift,alt,meta,exact,middle"),MS=mn("left,right"),x_=mn("onkeyup,onkeydown,onkeypress",!0),wS=(n,e,t,i)=>{const r=[],s=[],o=[];for(let a=0;a<e.length;a++){const l=e[a];l==="native"&&ds("COMPILER_V_ON_NATIVE",t)||bS(l)?o.push(l):MS(l)?cn(n)?x_(n.content)?r.push(l):s.push(l):(r.push(l),s.push(l)):TS(l)?s.push(l):r.push(l)}return{keyModifiers:r,nonKeyModifiers:s,eventOptionModifiers:o}},y_=(n,e)=>cn(n)&&n.content.toLowerCase()==="onclick"?He(e,!0):n.type!==4?Jn(["(",n,`) === "onClick" ? "${e}" : (`,n,")"]):n,SS=(n,e,t)=>r_(n,e,t,i=>{const{modifiers:r}=n;if(!r.length)return i;let{key:s,value:o}=i.props[0];const{keyModifiers:a,nonKeyModifiers:l,eventOptionModifiers:c}=wS(s,r,t,n.loc);if(l.includes("right")&&(s=y_(s,"onContextmenu")),l.includes("middle")&&(s=y_(s,"onMouseup")),l.length&&(o=Mt(t.helper(p_),[o,JSON.stringify(l)])),a.length&&(!cn(s)||x_(s.content))&&(o=Mt(t.helper(m_),[o,JSON.stringify(a)])),c.length){const f=c.map(wr).join("");s=cn(s)?He(`${s.content}${f}`,!0):Jn(["(",s,`) + "${f}"`])}return{props:[Tt(s,o)]}}),AS=(n,e,t)=>{const{exp:i,loc:r}=n;return i||t.onError(vi(58,r)),{props:[],needRuntime:t.helper(g_)}},ES=(n,e)=>{n.type===1&&n.tagType===0&&(n.tag==="script"||n.tag==="style")&&(e.onError(vi(60,n.loc)),e.removeNode())},LS=[gS],PS={cloak:hS,html:vS,text:xS,model:yS,on:SS,show:AS};function RS(n,e={}){return fS(n,je({},mS,e,{nodeTransforms:[ES,...LS,...e.nodeTransforms||[]],directiveTransforms:je({},PS,e.directiveTransforms||{}),transformHoist:null}))}const b_=Object.create(null);function CS(n,e){if(!De(n))if(n.nodeType)n=n.innerHTML;else return tn;const t=n,i=b_[t];if(i)return i;if(n[0]==="#"){const o=document.querySelector(n);n=o?o.innerHTML:""}const{code:r}=RS(n,je({hoistStatic:!0,onError:void 0,onWarn:tn},e)),s=new Function("Vue",r)(OM);return s._rc=!0,b_[t]=s}wm(CS);/**
 * @license
 * Copyright 2010-2021 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xi="132",ms={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},gs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},FS=0,T_=1,IS=2,M_=1,NS=2,na=3,Ki=0,_t=1,ei=2,w_=1,Zi=0,ia=1,jf=2,S_=3,A_=4,DS=5,_s=100,OS=101,US=102,E_=103,L_=104,BS=200,kS=201,HS=202,zS=203,P_=204,R_=205,VS=206,GS=207,WS=208,XS=209,YS=210,qS=0,jS=1,QS=2,Qf=3,$S=4,KS=5,ZS=6,JS=7,Kl=0,eA=1,tA=2,Br=0,C_=1,nA=2,iA=3,rA=4,sA=5,F_=300,Zl=301,Jl=302,$f=303,Kf=304,ec=306,Zf=307,vs=1e3,un=1001,tc=1002,Lt=1003,Jf=1004,eh=1005,Ct=1006,I_=1007,xs=1008,ys=1009,oA=1010,aA=1011,nc=1012,lA=1013,ic=1014,Ji=1015,bs=1016,cA=1017,uA=1018,fA=1019,ra=1020,hA=1021,ti=1022,Qt=1023,dA=1024,pA=1025,mA=Qt,Ts=1026,sa=1027,gA=1028,_A=1029,vA=1030,xA=1031,yA=1032,bA=1033,N_=33776,D_=33777,O_=33778,U_=33779,B_=35840,k_=35841,H_=35842,z_=35843,TA=36196,V_=37492,G_=37496,MA=37808,wA=37809,SA=37810,AA=37811,EA=37812,LA=37813,PA=37814,RA=37815,CA=37816,FA=37817,IA=37818,NA=37819,DA=37820,OA=37821,UA=36492,BA=37840,kA=37841,HA=37842,zA=37843,VA=37844,GA=37845,WA=37846,XA=37847,YA=37848,qA=37849,jA=37850,QA=37851,$A=37852,KA=37853,ZA=2200,JA=2201,eE=2202,oa=2300,Ms=2301,th=2302,ws=2400,Ss=2401,rc=2402,nh=2500,W_=2501,tE=0,nE=1,X_=2,vt=3e3,Rn=3001,sc=3007,oc=3002,iE=3003,ih=3004,rh=3005,sh=3006,rE=3200,sE=3201,er=0,oE=1,oh=7680,aE=519,aa=35044,ac=35048,Y_="300 es";class tr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const zt=[];for(let n=0;n<256;n++)zt[n]=(n<16?"0":"")+n.toString(16);let lc=1234567;const la=Math.PI/180,ca=180/Math.PI;function Cn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]).toUpperCase()}function sn(n,e,t){return Math.max(e,Math.min(t,n))}function ah(n,e){return(n%e+e)%e}function lE(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function cE(n,e,t){return n!==e?(t-n)/(e-n):0}function ua(n,e,t){return(1-t)*n+t*e}function uE(n,e,t,i){return ua(n,e,1-Math.exp(-t*i))}function fE(n,e=1){return e-Math.abs(ah(n,e*2)-e)}function hE(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function dE(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function pE(n,e){return n+Math.floor(Math.random()*(e-n+1))}function mE(n,e){return n+Math.random()*(e-n)}function gE(n){return n*(.5-Math.random())}function _E(n){return n!==void 0&&(lc=n%2147483647),lc=lc*16807%2147483647,(lc-1)/2147483646}function vE(n){return n*la}function xE(n){return n*ca}function lh(n){return(n&n-1)==0&&n!==0}function q_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function j_(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function yE(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),f=o((e+i)/2),u=s((e-i)/2),h=o((e-i)/2),d=s((i-e)/2),m=o((i-e)/2);switch(r){case"XYX":n.set(a*f,l*u,l*h,a*c);break;case"YZY":n.set(l*h,a*f,l*u,a*c);break;case"ZXZ":n.set(l*u,l*h,a*f,a*c);break;case"XZX":n.set(a*f,l*m,l*d,a*c);break;case"YXY":n.set(l*d,a*f,l*m,a*c);break;case"ZYZ":n.set(l*m,l*d,a*f,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}var bE=Object.freeze({__proto__:null,DEG2RAD:la,RAD2DEG:ca,generateUUID:Cn,clamp:sn,euclideanModulo:ah,mapLinear:lE,inverseLerp:cE,lerp:ua,damp:uE,pingpong:fE,smoothstep:hE,smootherstep:dE,randInt:pE,randFloat:mE,randFloatSpread:gE,seededRandom:_E,degToRad:vE,radToDeg:xE,isPowerOfTwo:lh,ceilPowerOfTwo:q_,floorPowerOfTwo:j_,setQuaternionFromProperEuler:yE});class ie{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}}ie.prototype.isVector2=!0;class Vt{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,r,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=t,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],u=i[7],h=i[2],d=i[5],m=i[8],_=r[0],v=r[3],p=r[6],g=r[1],x=r[4],b=r[7],T=r[2],S=r[5],y=r[8];return s[0]=o*_+a*g+l*T,s[3]=o*v+a*x+l*S,s[6]=o*p+a*b+l*y,s[1]=c*_+f*g+u*T,s[4]=c*v+f*x+u*S,s[7]=c*p+f*b+u*y,s[2]=h*_+d*g+m*T,s[5]=h*v+d*x+m*S,s[8]=h*p+d*b+m*y,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return t*o*f-t*a*c-i*s*f+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],u=f*o-a*c,h=a*l-f*s,d=c*s-o*l,m=t*u+i*h+r*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=u*_,e[1]=(r*c-f*i)*_,e[2]=(a*i-r*o)*_,e[3]=h*_,e[4]=(f*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=d*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){const t=Math.cos(e),i=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],l=r[1],c=r[4],f=r[7];return r[0]=t*s+i*l,r[3]=t*o+i*c,r[6]=t*a+i*f,r[1]=-i*s+t*l,r[4]=-i*o+t*c,r[7]=-i*a+t*f,this}translate(e,t){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}Vt.prototype.isMatrix3=!0;let As;class Es{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{As===void 0&&(As=document.createElementNS("http://www.w3.org/1999/xhtml","canvas")),As.width=e.width,As.height=e.height;const i=As.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=As}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}}let TE=0;class Ft extends tr{constructor(e=Ft.DEFAULT_IMAGE,t=Ft.DEFAULT_MAPPING,i=un,r=un,s=Ct,o=xs,a=Qt,l=ys,c=1,f=vt){super();Object.defineProperty(this,"id",{value:TE++}),this.uuid=Cn(),this.name="",this.image=e,this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=f,this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){const r=this.image;if(r.uuid===void 0&&(r.uuid=Cn()),!t&&e.images[r.uuid]===void 0){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ch(r[o].image)):s.push(ch(r[o]))}else s=ch(r);e.images[r.uuid]={uuid:r.uuid,url:s}}i.image=r.uuid}return t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==F_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vs:e.x=e.x-Math.floor(e.x);break;case un:e.x=e.x<0?0:1;break;case tc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vs:e.y=e.y-Math.floor(e.y);break;case un:e.y=e.y<0?0:1;break;case tc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&this.version++}}Ft.DEFAULT_IMAGE=void 0;Ft.DEFAULT_MAPPING=F_;Ft.prototype.isTexture=!0;function ch(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?Es.getDataURL(n):n.data?{data:Array.prototype.slice.call(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}class Oe{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const o=.01,a=.1,l=e.elements,c=l[0],f=l[4],u=l[8],h=l[1],d=l[5],m=l[9],_=l[2],v=l[6],p=l[10];if(Math.abs(f-h)<o&&Math.abs(u-_)<o&&Math.abs(m-v)<o){if(Math.abs(f+h)<a&&Math.abs(u+_)<a&&Math.abs(m+v)<a&&Math.abs(c+d+p-3)<a)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,b=(d+1)/2,T=(p+1)/2,S=(f+h)/4,y=(u+_)/4,E=(m+v)/4;return x>b&&x>T?x<o?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=S/i,s=y/i):b>T?b<o?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=S/r,s=E/r):T<o?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=y/s,r=E/s),this.set(i,r,s,t),this}let g=Math.sqrt((v-m)*(v-m)+(u-_)*(u-_)+(h-f)*(h-f));return Math.abs(g)<.001&&(g=1),this.x=(v-m)/g,this.y=(u-_)/g,this.z=(h-f)/g,this.w=Math.acos((c+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}}Oe.prototype.isVector4=!0;class fn extends tr{constructor(e,t,i={}){super();this.width=e,this.height=t,this.depth=1,this.scissor=new Oe(0,0,e,t),this.scissorTest=!1,this.viewport=new Oe(0,0,e,t),this.texture=new Ft(void 0,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.image={width:e,height:t,depth:1},this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ct,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null}setTexture(e){e.image={width:this.width,height:this.height,depth:this.depth},this.texture=e}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.image=Jd({},this.texture.image),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}fn.prototype.isWebGLRenderTarget=!0;class ME extends fn{constructor(e,t,i){super(e,t);const r=this.texture;this.texture=[];for(let s=0;s<i;s++)this.texture[s]=r.clone()}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.texture.length;r<s;r++)this.texture[r].image.width=e,this.texture[r].image.height=t,this.texture[r].image.depth=i;this.dispose()}return this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t),this}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this.texture.length=0;for(let t=0,i=e.texture.length;t<i;t++)this.texture[t]=e.texture[t].clone();return this}}ME.prototype.isWebGLMultipleRenderTargets=!0;class Q_ extends fn{constructor(e,t,i){super(e,t,i);this.samples=4}copy(e){return super.copy.call(this,e),this.samples=e.samples,this}}Q_.prototype.isWebGLMultisampleRenderTarget=!0;class st{constructor(e=0,t=0,i=0,r=1){this._x=e,this._y=t,this._z=i,this._w=r}static slerp(e,t,i,r){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),i.slerpQuaternions(e,t,r)}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],f=i[r+2],u=i[r+3];const h=s[o+0],d=s[o+1],m=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=f,e[t+3]=u;return}if(a===1){e[t+0]=h,e[t+1]=d,e[t+2]=m,e[t+3]=_;return}if(u!==_||l!==h||c!==d||f!==m){let v=1-a;const p=l*h+c*d+f*m+u*_,g=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const T=Math.sqrt(x),S=Math.atan2(T,p*g);v=Math.sin(v*S)/T,a=Math.sin(a*S)/T}const b=a*g;if(l=l*v+h*b,c=c*v+d*b,f=f*v+m*b,u=u*v+_*b,v===1-a){const T=1/Math.sqrt(l*l+c*c+f*f+u*u);l*=T,c*=T,f*=T,u*=T}}e[t]=l,e[t+1]=c,e[t+2]=f,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],u=s[o],h=s[o+1],d=s[o+2],m=s[o+3];return e[t]=a*m+f*u+l*d-c*h,e[t+1]=l*m+f*h+c*u-a*d,e[t+2]=c*m+f*d+a*h-l*u,e[t+3]=f*m-a*u-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),u=a(s/2),h=l(i/2),d=l(r/2),m=l(s/2);switch(o){case"XYZ":this._x=h*f*u+c*d*m,this._y=c*d*u-h*f*m,this._z=c*f*m+h*d*u,this._w=c*f*u-h*d*m;break;case"YXZ":this._x=h*f*u+c*d*m,this._y=c*d*u-h*f*m,this._z=c*f*m-h*d*u,this._w=c*f*u+h*d*m;break;case"ZXY":this._x=h*f*u-c*d*m,this._y=c*d*u+h*f*m,this._z=c*f*m+h*d*u,this._w=c*f*u-h*d*m;break;case"ZYX":this._x=h*f*u-c*d*m,this._y=c*d*u+h*f*m,this._z=c*f*m-h*d*u,this._w=c*f*u+h*d*m;break;case"YZX":this._x=h*f*u+c*d*m,this._y=c*d*u+h*f*m,this._z=c*f*m-h*d*u,this._w=c*f*u-h*d*m;break;case"XZY":this._x=h*f*u-c*d*m,this._y=c*d*u-h*f*m,this._z=c*f*m+h*d*u,this._w=c*f*u+h*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],f=t[6],u=t[10],h=i+a+u;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(f-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(i>a&&i>u){const d=2*Math.sqrt(1+i-a-u);this._w=(f-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>u){const d=2*Math.sqrt(1+a-i-u);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+f)/d}else{const d=2*Math.sqrt(1+u-i-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+f)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(sn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,f=t._w;return this._x=i*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-i*c,this._z=s*f+o*c+i*l-r*a,this._w=o*f-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),f=Math.atan2(c,a),u=Math.sin((1-t)*f)/c,h=Math.sin(t*f)/c;return this._w=o*u+this._w*h,this._x=i*u+this._x*h,this._y=r*u+this._y*h,this._z=s*u+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){this.copy(e).slerp(t,i)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}st.prototype.isQuaternion=!0;class L{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion($_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($_.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*r-a*i,f=l*i+a*t-s*r,u=l*r+s*i-o*t,h=-s*t-o*i-a*r;return this.x=c*l+h*-s+f*-a-u*-o,this.y=f*l+h*-o+u*-s-c*-a,this.z=u*l+h*-a+c*-o-f*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return uh.copy(this).projectOnVector(e),this.sub(uh)}reflect(e){return this.sub(uh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(sn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}}L.prototype.isVector3=!0;const uh=new L,$_=new st;class Fn{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const f=e[l],u=e[l+1],h=e[l+2];f<t&&(t=f),u<i&&(i=u),h<r&&(r=h),f>s&&(s=f),u>o&&(o=u),h>a&&(a=h)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const f=e.getX(l),u=e.getY(l),h=e.getZ(l);f<t&&(t=f),u<i&&(i=u),h<r&&(r=h),f>s&&(s=f),u>o&&(o=u),h>a&&(a=h)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=fa.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);const t=e.geometry;t!==void 0&&(t.boundingBox===null&&t.computeBoundingBox(),fh.copy(t.boundingBox),fh.applyMatrix4(e.matrixWorld),this.union(fh));const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,fa),fa.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ha),cc.subVectors(this.max,ha),Ls.subVectors(e.a,ha),Ps.subVectors(e.b,ha),Rs.subVectors(e.c,ha),nr.subVectors(Ps,Ls),ir.subVectors(Rs,Ps),kr.subVectors(Ls,Rs);let t=[0,-nr.z,nr.y,0,-ir.z,ir.y,0,-kr.z,kr.y,nr.z,0,-nr.x,ir.z,0,-ir.x,kr.z,0,-kr.x,-nr.y,nr.x,0,-ir.y,ir.x,0,-kr.y,kr.x,0];return!hh(t,Ls,Ps,Rs,cc)||(t=[1,0,0,0,1,0,0,0,1],!hh(t,Ls,Ps,Rs,cc))?!1:(uc.crossVectors(nr,ir),t=[uc.x,uc.y,uc.z],hh(t,Ls,Ps,Rs,cc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return fa.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(fa).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}Fn.prototype.isBox3=!0;const yi=[new L,new L,new L,new L,new L,new L,new L,new L],fa=new L,fh=new Fn,Ls=new L,Ps=new L,Rs=new L,nr=new L,ir=new L,kr=new L,ha=new L,cc=new L,uc=new L,Hr=new L;function hh(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Hr.fromArray(n,s);const a=r.x*Math.abs(Hr.x)+r.y*Math.abs(Hr.y)+r.z*Math.abs(Hr.z),l=e.dot(Hr),c=t.dot(Hr),f=i.dot(Hr);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const wE=new Fn,K_=new L,dh=new L,ph=new L;class zr{constructor(e=new L,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):wE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){ph.subVectors(e,this.center);const t=ph.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.add(ph.multiplyScalar(r/i)),this.radius+=r}return this}union(e){return dh.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(K_.copy(e.center).add(dh)),this.expandByPoint(K_.copy(e.center).sub(dh)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bi=new L,mh=new L,fc=new L,rr=new L,gh=new L,hc=new L,_h=new L;class Vr{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=bi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bi.copy(this.direction).multiplyScalar(t).add(this.origin),bi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){mh.copy(e).add(t).multiplyScalar(.5),fc.copy(t).sub(e).normalize(),rr.copy(this.origin).sub(mh);const s=e.distanceTo(t)*.5,o=-this.direction.dot(fc),a=rr.dot(this.direction),l=-rr.dot(fc),c=rr.lengthSq(),f=Math.abs(1-o*o);let u,h,d,m;if(f>0)if(u=o*l-a,h=o*a-l,m=s*f,u>=0)if(h>=-m)if(h<=m){const _=1/f;u*=_,h*=_,d=u*(u+o*h+2*a)+h*(o*u+h+2*l)+c}else h=s,u=Math.max(0,-(o*h+a)),d=-u*u+h*(h+2*l)+c;else h=-s,u=Math.max(0,-(o*h+a)),d=-u*u+h*(h+2*l)+c;else h<=-m?(u=Math.max(0,-(-o*s+a)),h=u>0?-s:Math.min(Math.max(-s,-l),s),d=-u*u+h*(h+2*l)+c):h<=m?(u=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(u=Math.max(0,-(o*s+a)),h=u>0?s:Math.min(Math.max(-s,-l),s),d=-u*u+h*(h+2*l)+c);else h=o>0?-s:s,u=Math.max(0,-(o*h+a)),d=-u*u+h*(h+2*l)+c;return i&&i.copy(this.direction).multiplyScalar(u).add(this.origin),r&&r.copy(fc).multiplyScalar(h).add(mh),d}intersectSphere(e,t){bi.subVectors(e.center,this.origin);const i=bi.dot(this.direction),r=bi.dot(bi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),f>=0?(s=(e.min.y-h.y)*f,o=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,o=(e.min.y-h.y)*f),i>o||s>r||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),u>=0?(a=(e.min.z-h.z)*u,l=(e.max.z-h.z)*u):(a=(e.max.z-h.z)*u,l=(e.min.z-h.z)*u),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,bi)!==null}intersectTriangle(e,t,i,r,s){gh.subVectors(t,e),hc.subVectors(i,e),_h.crossVectors(gh,hc);let o=this.direction.dot(_h),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;rr.subVectors(this.origin,e);const l=a*this.direction.dot(hc.crossVectors(rr,hc));if(l<0)return null;const c=a*this.direction.dot(gh.cross(rr));if(c<0||l+c>o)return null;const f=-a*rr.dot(_h);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ye{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,r,s,o,a,l,c,f,u,h,d,m,_,v){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=f,p[10]=u,p[14]=h,p[3]=d,p[7]=m,p[11]=_,p[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ye().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Cs.setFromMatrixColumn(e,0).length(),s=1/Cs.setFromMatrixColumn(e,1).length(),o=1/Cs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const h=o*f,d=o*u,m=a*f,_=a*u;t[0]=l*f,t[4]=-l*u,t[8]=c,t[1]=d+m*c,t[5]=h-_*c,t[9]=-a*l,t[2]=_-h*c,t[6]=m+d*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*f,d=l*u,m=c*f,_=c*u;t[0]=h+_*a,t[4]=m*a-d,t[8]=o*c,t[1]=o*u,t[5]=o*f,t[9]=-a,t[2]=d*a-m,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*f,d=l*u,m=c*f,_=c*u;t[0]=h-_*a,t[4]=-o*u,t[8]=m+d*a,t[1]=d+m*a,t[5]=o*f,t[9]=_-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*f,d=o*u,m=a*f,_=a*u;t[0]=l*f,t[4]=m*c-d,t[8]=h*c+_,t[1]=l*u,t[5]=_*c+h,t[9]=d*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,m=a*l,_=a*c;t[0]=l*f,t[4]=_-h*u,t[8]=m*u+d,t[1]=u,t[5]=o*f,t[9]=-a*f,t[2]=-c*f,t[6]=d*u+m,t[10]=h-_*u}else if(e.order==="XZY"){const h=o*l,d=o*c,m=a*l,_=a*c;t[0]=l*f,t[4]=-u,t[8]=c*f,t[1]=h*u+_,t[5]=o*f,t[9]=d*u-m,t[2]=m*u-d,t[6]=a*f,t[10]=_*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(SE,e,AE)}lookAt(e,t,i){const r=this.elements;return Mn.subVectors(e,t),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),sr.crossVectors(i,Mn),sr.lengthSq()===0&&(Math.abs(i.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),sr.crossVectors(i,Mn)),sr.normalize(),dc.crossVectors(Mn,sr),r[0]=sr.x,r[4]=dc.x,r[8]=Mn.x,r[1]=sr.y,r[5]=dc.y,r[9]=Mn.y,r[2]=sr.z,r[6]=dc.z,r[10]=Mn.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],u=i[5],h=i[9],d=i[13],m=i[2],_=i[6],v=i[10],p=i[14],g=i[3],x=i[7],b=i[11],T=i[15],S=r[0],y=r[4],E=r[8],N=r[12],F=r[1],C=r[5],V=r[9],O=r[13],H=r[2],$=r[6],Y=r[10],q=r[14],te=r[3],pe=r[7],Te=r[11],de=r[15];return s[0]=o*S+a*F+l*H+c*te,s[4]=o*y+a*C+l*$+c*pe,s[8]=o*E+a*V+l*Y+c*Te,s[12]=o*N+a*O+l*q+c*de,s[1]=f*S+u*F+h*H+d*te,s[5]=f*y+u*C+h*$+d*pe,s[9]=f*E+u*V+h*Y+d*Te,s[13]=f*N+u*O+h*q+d*de,s[2]=m*S+_*F+v*H+p*te,s[6]=m*y+_*C+v*$+p*pe,s[10]=m*E+_*V+v*Y+p*Te,s[14]=m*N+_*O+v*q+p*de,s[3]=g*S+x*F+b*H+T*te,s[7]=g*y+x*C+b*$+T*pe,s[11]=g*E+x*V+b*Y+T*Te,s[15]=g*N+x*O+b*q+T*de,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],u=e[6],h=e[10],d=e[14],m=e[3],_=e[7],v=e[11],p=e[15];return m*(+s*l*u-r*c*u-s*a*h+i*c*h+r*a*d-i*l*d)+_*(+t*l*d-t*c*h+s*o*h-r*o*d+r*c*f-s*l*f)+v*(+t*c*u-t*a*d-s*o*u+i*o*d+s*a*f-i*c*f)+p*(-r*a*f-t*l*u+t*a*h+r*o*u-i*o*h+i*l*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],u=e[9],h=e[10],d=e[11],m=e[12],_=e[13],v=e[14],p=e[15],g=u*v*c-_*h*c+_*l*d-a*v*d-u*l*p+a*h*p,x=m*h*c-f*v*c-m*l*d+o*v*d+f*l*p-o*h*p,b=f*_*c-m*u*c+m*a*d-o*_*d-f*a*p+o*u*p,T=m*u*l-f*_*l-m*a*h+o*_*h+f*a*v-o*u*v,S=t*g+i*x+r*b+s*T;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const y=1/S;return e[0]=g*y,e[1]=(_*h*s-u*v*s-_*r*d+i*v*d+u*r*p-i*h*p)*y,e[2]=(a*v*s-_*l*s+_*r*c-i*v*c-a*r*p+i*l*p)*y,e[3]=(u*l*s-a*h*s-u*r*c+i*h*c+a*r*d-i*l*d)*y,e[4]=x*y,e[5]=(f*v*s-m*h*s+m*r*d-t*v*d-f*r*p+t*h*p)*y,e[6]=(m*l*s-o*v*s-m*r*c+t*v*c+o*r*p-t*l*p)*y,e[7]=(o*h*s-f*l*s+f*r*c-t*h*c-o*r*d+t*l*d)*y,e[8]=b*y,e[9]=(m*u*s-f*_*s-m*i*d+t*_*d+f*i*p-t*u*p)*y,e[10]=(o*_*s-m*a*s+m*i*c-t*_*c-o*i*p+t*a*p)*y,e[11]=(f*a*s-o*u*s-f*i*c+t*u*c+o*i*d-t*a*d)*y,e[12]=T*y,e[13]=(f*_*r-m*u*r+m*i*h-t*_*h-f*i*v+t*u*v)*y,e[14]=(m*a*r-o*_*r-m*i*l+t*_*l+o*i*v-t*a*v)*y,e[15]=(o*u*r-f*a*r+f*i*l-t*u*l-o*i*h+t*a*h)*y,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,f=o+o,u=a+a,h=s*c,d=s*f,m=s*u,_=o*f,v=o*u,p=a*u,g=l*c,x=l*f,b=l*u,T=i.x,S=i.y,y=i.z;return r[0]=(1-(_+p))*T,r[1]=(d+b)*T,r[2]=(m-x)*T,r[3]=0,r[4]=(d-b)*S,r[5]=(1-(h+p))*S,r[6]=(v+g)*S,r[7]=0,r[8]=(m+x)*y,r[9]=(v-g)*y,r[10]=(1-(h+_))*y,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Cs.set(r[0],r[1],r[2]).length();const o=Cs.set(r[4],r[5],r[6]).length(),a=Cs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Hn.copy(this);const c=1/s,f=1/o,u=1/a;return Hn.elements[0]*=c,Hn.elements[1]*=c,Hn.elements[2]*=c,Hn.elements[4]*=f,Hn.elements[5]*=f,Hn.elements[6]*=f,Hn.elements[8]*=u,Hn.elements[9]*=u,Hn.elements[10]*=u,t.setFromRotationMatrix(Hn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,l=2*s/(t-e),c=2*s/(i-r),f=(t+e)/(t-e),u=(i+r)/(i-r),h=-(o+s)/(o-s),d=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=f,a[12]=0,a[1]=0,a[5]=c,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=d,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,s,o){const a=this.elements,l=1/(t-e),c=1/(i-r),f=1/(o-s),u=(t+e)*l,h=(i+r)*c,d=(o+s)*f;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*f,a[14]=-d,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}ye.prototype.isMatrix4=!0;const Cs=new L,Hn=new ye,SE=new L(0,0,0),AE=new L(1,1,1),sr=new L,dc=new L,Mn=new L,Z_=new ye,J_=new st;class or{constructor(e=0,t=0,i=0,r=or.DefaultOrder){this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],u=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(sn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-sn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(sn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-sn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(sn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-sn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Z_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Z_,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return J_.setFromEuler(this),this.setFromQuaternion(J_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new L(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}or.prototype.isEuler=!0;or.DefaultOrder="XYZ";or.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class ev{constructor(){this.mask=1|0}set(e){this.mask=1<<e|0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=4294967295|0}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}}let EE=0;const tv=new L,Fs=new st,Ti=new ye,pc=new L,da=new L,LE=new L,PE=new st,nv=new L(1,0,0),iv=new L(0,1,0),rv=new L(0,0,1),RE={type:"added"},sv={type:"removed"};class We extends tr{constructor(){super();Object.defineProperty(this,"id",{value:EE++}),this.uuid=Cn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=We.DefaultUp.clone();const e=new L,t=new or,i=new st,r=new L(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ye},normalMatrix:{value:new Vt}}),this.matrix=new ye,this.matrixWorld=new ye,this.matrixAutoUpdate=We.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new ev,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.multiply(Fs),this}rotateOnWorldAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.premultiply(Fs),this}rotateX(e){return this.rotateOnAxis(nv,e)}rotateY(e){return this.rotateOnAxis(iv,e)}rotateZ(e){return this.rotateOnAxis(rv,e)}translateOnAxis(e,t){return tv.copy(e).applyQuaternion(this.quaternion),this.position.add(tv.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(nv,e)}translateY(e){return this.translateOnAxis(iv,e)}translateZ(e){return this.translateOnAxis(rv,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?pc.copy(e):pc.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),da.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(da,pc,this.up):Ti.lookAt(pc,da,this.up),this.quaternion.setFromRotationMatrix(Ti),r&&(Ti.extractRotation(r.matrixWorld),Fs.setFromRotationMatrix(Ti),this.quaternion.premultiply(Fs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(RE)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(sv)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(sv)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ti),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(da,e,LE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(da,PE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),u=o(e.shapes),h=o(e.skeletons),d=o(e.animations);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),u.length>0&&(i.shapes=u),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d)}return i.object=r,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}We.DefaultUp=new L(0,1,0);We.DefaultMatrixAutoUpdate=!0;We.prototype.isObject3D=!0;const zn=new L,Mi=new L,vh=new L,wi=new L,Is=new L,Ns=new L,ov=new L,xh=new L,yh=new L,bh=new L;class wt{constructor(e=new L,t=new L,i=new L){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),zn.subVectors(e,t),r.cross(zn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){zn.subVectors(r,t),Mi.subVectors(i,t),vh.subVectors(e,t);const o=zn.dot(zn),a=zn.dot(Mi),l=zn.dot(vh),c=Mi.dot(Mi),f=Mi.dot(vh),u=o*c-a*a;if(u===0)return s.set(-2,-1,-1);const h=1/u,d=(c*l-a*f)*h,m=(o*f-a*l)*h;return s.set(1-d-m,m,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,wi),wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getUV(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,wi),l.set(0,0),l.addScaledVector(s,wi.x),l.addScaledVector(o,wi.y),l.addScaledVector(a,wi.z),l}static isFrontFacing(e,t,i,r){return zn.subVectors(i,t),Mi.subVectors(e,t),zn.cross(Mi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),zn.cross(Mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return wt.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return wt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Is.subVectors(r,i),Ns.subVectors(s,i),xh.subVectors(e,i);const l=Is.dot(xh),c=Ns.dot(xh);if(l<=0&&c<=0)return t.copy(i);yh.subVectors(e,r);const f=Is.dot(yh),u=Ns.dot(yh);if(f>=0&&u<=f)return t.copy(r);const h=l*u-f*c;if(h<=0&&l>=0&&f<=0)return o=l/(l-f),t.copy(i).addScaledVector(Is,o);bh.subVectors(e,s);const d=Is.dot(bh),m=Ns.dot(bh);if(m>=0&&d<=m)return t.copy(s);const _=d*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(i).addScaledVector(Ns,a);const v=f*m-d*u;if(v<=0&&u-f>=0&&d-m>=0)return ov.subVectors(s,r),a=(u-f)/(u-f+(d-m)),t.copy(r).addScaledVector(ov,a);const p=1/(v+_+h);return o=_*p,a=h*p,t.copy(i).addScaledVector(Is,o).addScaledVector(Ns,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let CE=0;class It extends tr{constructor(){super();Object.defineProperty(this,"id",{value:CE++}),this.uuid=Cn(),this.name="",this.type="Material",this.fog=!0,this.blending=ia,this.side=Ki,this.vertexColors=!1,this.opacity=1,this.format=Qt,this.transparent=!1,this.blendSrc=P_,this.blendDst=R_,this.blendEquation=_s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Qf,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=aE,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oh,this.stencilZFail=oh,this.stencilZPass=oh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===w_;continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheenTint&&this.sheenTint.isColor&&(i.sheenTint=this.sheenTint.getHex()),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularTint&&this.specularTint.isColor&&(i.specularTint=this.specularTint.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularTintMap&&this.specularTintMap.isTexture&&(i.specularTintMap=this.specularTintMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationTint!==void 0&&(i.attenuationTint=this.attenuationTint.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ia&&(i.blending=this.blending),this.side!==Ki&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.format!==Qt&&(i.format=this.format),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.fog=e.fog,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.format=e.format,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}It.prototype.isMaterial=!0;const av={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vn={h:0,s:0,l:0},mc={h:0,s:0,l:0};function Th(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function Mh(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function wh(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}class me{constructor(e,t,i){return t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,t,i){return this.r=e,this.g=t,this.b=i,this}setHSL(e,t,i){if(e=ah(e,1),t=sn(t,0,1),i=sn(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,s=2*i-r;this.r=Th(s,r,e+1/3),this.g=Th(s,r,e),this.b=Th(s,r,e-1/3)}return this}setStyle(e){function t(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const s=i[1],o=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,t(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,t(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const a=parseFloat(r[1])/360,l=parseInt(r[2],10)/100,c=parseInt(r[3],10)/100;return t(r[4]),this.setHSL(a,l,c)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],s=r.length;if(s===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,this;if(s===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){const t=av[e.toLowerCase()];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copyGammaToLinear(e,t=2){return this.r=Math.pow(e.r,t),this.g=Math.pow(e.g,t),this.b=Math.pow(e.b,t),this}copyLinearToGamma(e,t=2){const i=t>0?1/t:1;return this.r=Math.pow(e.r,i),this.g=Math.pow(e.g,i),this.b=Math.pow(e.b,i),this}convertGammaToLinear(e){return this.copyGammaToLinear(this,e),this}convertLinearToGamma(e){return this.copyLinearToGamma(this,e),this}copySRGBToLinear(e){return this.r=Mh(e.r),this.g=Mh(e.g),this.b=Mh(e.b),this}copyLinearToSRGB(e){return this.r=wh(e.r),this.g=wh(e.g),this.b=wh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){const t=this.r,i=this.g,r=this.b,s=Math.max(t,i,r),o=Math.min(t,i,r);let a,l;const c=(o+s)/2;if(o===s)a=0,l=0;else{const f=s-o;switch(l=c<=.5?f/(s+o):f/(2-s-o),s){case t:a=(i-r)/f+(i<r?6:0);break;case i:a=(r-t)/f+2;break;case r:a=(t-i)/f+4;break}a/=6}return e.h=a,e.s=l,e.l=c,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,t,i){return this.getHSL(Vn),Vn.h+=e,Vn.s+=t,Vn.l+=i,this.setHSL(Vn.h,Vn.s,Vn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Vn),e.getHSL(mc);const i=ua(Vn.h,mc.h,t),r=ua(Vn.s,mc.s,t),s=ua(Vn.l,mc.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}me.NAMES=av;me.prototype.isColor=!0;me.prototype.r=1;me.prototype.g=1;me.prototype.b=1;class In extends It{constructor(e){super();this.type="MeshBasicMaterial",this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Kl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}In.prototype.isMeshBasicMaterial=!0;const tt=new L,gc=new ie;class xt{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=aa,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",r),o=new me),t[i++]=o.r,t[i++]=o.g,t[i++]=o.b}return this}copyVector2sArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",r),o=new ie),t[i++]=o.x,t[i++]=o.y}return this}copyVector3sArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",r),o=new L),t[i++]=o.x,t[i++]=o.y,t[i++]=o.z}return this}copyVector4sArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",r),o=new Oe),t[i++]=o.x,t[i++]=o.y,t[i++]=o.z,t[i++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)gc.fromBufferAttribute(this,t),gc.applyMatrix3(e),this.setXY(t,gc.x,gc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)tt.fromBufferAttribute(this,t),tt.applyMatrix3(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)tt.x=this.getX(t),tt.y=this.getY(t),tt.z=this.getZ(t),tt.applyMatrix4(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)tt.x=this.getX(t),tt.y=this.getY(t),tt.z=this.getZ(t),tt.applyNormalMatrix(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)tt.x=this.getX(t),tt.y=this.getY(t),tt.z=this.getZ(t),tt.transformDirection(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==aa&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}xt.prototype.isBufferAttribute=!0;class lv extends xt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class cv extends xt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class FE extends xt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}FE.prototype.isFloat16BufferAttribute=!0;class ot extends xt{constructor(e,t,i){super(new Float32Array(e),t,i)}}function uv(n){if(n.length===0)return-1/0;let e=n[0];for(let t=1,i=n.length;t<i;++t)n[t]>e&&(e=n[t]);return e}let IE=0;const Nn=new ye,Sh=new We,Ds=new L,wn=new Fn,pa=new Fn,Nt=new L;class Ze extends tr{constructor(){super();Object.defineProperty(this,"id",{value:IE++}),this.uuid=Cn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(uv(e)>65535?cv:lv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Vt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nn.makeRotationFromQuaternion(e),this.applyMatrix4(Nn),this}rotateX(e){return Nn.makeRotationX(e),this.applyMatrix4(Nn),this}rotateY(e){return Nn.makeRotationY(e),this.applyMatrix4(Nn),this}rotateZ(e){return Nn.makeRotationZ(e),this.applyMatrix4(Nn),this}translate(e,t,i){return Nn.makeTranslation(e,t,i),this.applyMatrix4(Nn),this}scale(e,t,i){return Nn.makeScale(e,t,i),this.applyMatrix4(Nn),this}lookAt(e){return Sh.lookAt(e),Sh.updateMatrix(),this.applyMatrix4(Sh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ot(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];wn.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){const i=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];pa.setFromBufferAttribute(a),this.morphTargetsRelative?(Nt.addVectors(wn.min,pa.min),wn.expandByPoint(Nt),Nt.addVectors(wn.max,pa.max),wn.expandByPoint(Nt)):(wn.expandByPoint(pa.min),wn.expandByPoint(pa.max))}wn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Nt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Nt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)Nt.fromBufferAttribute(a,c),l&&(Ds.fromBufferAttribute(e,c),Nt.add(Ds)),r=Math.max(r,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;t.tangent===void 0&&this.setAttribute("tangent",new xt(new Float32Array(4*a),4));const l=t.tangent.array,c=[],f=[];for(let F=0;F<a;F++)c[F]=new L,f[F]=new L;const u=new L,h=new L,d=new L,m=new ie,_=new ie,v=new ie,p=new L,g=new L;function x(F,C,V){u.fromArray(r,F*3),h.fromArray(r,C*3),d.fromArray(r,V*3),m.fromArray(o,F*2),_.fromArray(o,C*2),v.fromArray(o,V*2),h.sub(u),d.sub(u),_.sub(m),v.sub(m);const O=1/(_.x*v.y-v.x*_.y);!isFinite(O)||(p.copy(h).multiplyScalar(v.y).addScaledVector(d,-_.y).multiplyScalar(O),g.copy(d).multiplyScalar(_.x).addScaledVector(h,-v.x).multiplyScalar(O),c[F].add(p),c[C].add(p),c[V].add(p),f[F].add(g),f[C].add(g),f[V].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:i.length}]);for(let F=0,C=b.length;F<C;++F){const V=b[F],O=V.start,H=V.count;for(let $=O,Y=O+H;$<Y;$+=3)x(i[$+0],i[$+1],i[$+2])}const T=new L,S=new L,y=new L,E=new L;function N(F){y.fromArray(s,F*3),E.copy(y);const C=c[F];T.copy(C),T.sub(y.multiplyScalar(y.dot(C))).normalize(),S.crossVectors(E,C);const O=S.dot(f[F])<0?-1:1;l[F*4]=T.x,l[F*4+1]=T.y,l[F*4+2]=T.z,l[F*4+3]=O}for(let F=0,C=b.length;F<C;++F){const V=b[F],O=V.start,H=V.count;for(let $=O,Y=O+H;$<Y;$+=3)N(i[$+0]),N(i[$+1]),N(i[$+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new xt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new L,s=new L,o=new L,a=new L,l=new L,c=new L,f=new L,u=new L;if(e)for(let h=0,d=e.count;h<d;h+=3){const m=e.getX(h+0),_=e.getX(h+1),v=e.getX(h+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,v),f.subVectors(o,s),u.subVectors(r,s),f.cross(u),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,v),a.add(f),l.add(f),c.add(f),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(v,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),f.subVectors(o,s),u.subVectors(r,s),f.cross(u),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const i=this.attributes;for(const r in i){if(e.attributes[r]===void 0)continue;const o=i[r].array,a=e.attributes[r],l=a.array,c=a.itemSize*t,f=Math.min(l.length,o.length-c);for(let u=0,h=c;u<f;u++,h++)o[h]=l[u]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,u=a.normalized,h=new c.constructor(l.length*f);let d=0,m=0;for(let _=0,v=l.length;_<v;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*f;for(let p=0;p<f;p++)h[m++]=c[d++]}return new xt(h,f,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ze,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,u=c.length;f<u;f++){const h=c[f],d=e(h,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let u=0,h=c.length;u<h;u++){const d=c[u];f.push(d.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new Ze().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(t))}const s=e.morphAttributes;for(const c in s){const f=[],u=s[c];for(let h=0,d=u.length;h<d;h++)f.push(u[h].clone(t));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}Ze.prototype.isBufferGeometry=!0;const fv=new ye,Os=new Vr,Ah=new zr,ar=new L,lr=new L,cr=new L,Eh=new L,Lh=new L,Ph=new L,_c=new L,vc=new L,xc=new L,yc=new ie,bc=new ie,Tc=new ie,Rh=new L,Mc=new L;class Dt extends We{constructor(e=new Ze,t=new In){super();this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),Ah.copy(i.boundingSphere),Ah.applyMatrix4(s),e.ray.intersectsSphere(Ah)===!1)||(fv.copy(s).invert(),Os.copy(e.ray).applyMatrix4(fv),i.boundingBox!==null&&Os.intersectsBox(i.boundingBox)===!1))return;let o;if(i.isBufferGeometry){const a=i.index,l=i.attributes.position,c=i.morphAttributes.position,f=i.morphTargetsRelative,u=i.attributes.uv,h=i.attributes.uv2,d=i.groups,m=i.drawRange;if(a!==null)if(Array.isArray(r))for(let _=0,v=d.length;_<v;_++){const p=d[_],g=r[p.materialIndex],x=Math.max(p.start,m.start),b=Math.min(p.start+p.count,m.start+m.count);for(let T=x,S=b;T<S;T+=3){const y=a.getX(T),E=a.getX(T+1),N=a.getX(T+2);o=wc(this,g,e,Os,l,c,f,u,h,y,E,N),o&&(o.faceIndex=Math.floor(T/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const _=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let p=_,g=v;p<g;p+=3){const x=a.getX(p),b=a.getX(p+1),T=a.getX(p+2);o=wc(this,r,e,Os,l,c,f,u,h,x,b,T),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let _=0,v=d.length;_<v;_++){const p=d[_],g=r[p.materialIndex],x=Math.max(p.start,m.start),b=Math.min(p.start+p.count,m.start+m.count);for(let T=x,S=b;T<S;T+=3){const y=T,E=T+1,N=T+2;o=wc(this,g,e,Os,l,c,f,u,h,y,E,N),o&&(o.faceIndex=Math.floor(T/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const _=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=_,g=v;p<g;p+=3){const x=p,b=p+1,T=p+2;o=wc(this,r,e,Os,l,c,f,u,h,x,b,T),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}}else i.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}Dt.prototype.isMesh=!0;function NE(n,e,t,i,r,s,o,a){let l;if(e.side===_t?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side!==ei,a),l===null)return null;Mc.copy(a),Mc.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Mc);return c<t.near||c>t.far?null:{distance:c,point:Mc.clone(),object:n}}function wc(n,e,t,i,r,s,o,a,l,c,f,u){ar.fromBufferAttribute(r,c),lr.fromBufferAttribute(r,f),cr.fromBufferAttribute(r,u);const h=n.morphTargetInfluences;if(s&&h){_c.set(0,0,0),vc.set(0,0,0),xc.set(0,0,0);for(let m=0,_=s.length;m<_;m++){const v=h[m],p=s[m];v!==0&&(Eh.fromBufferAttribute(p,c),Lh.fromBufferAttribute(p,f),Ph.fromBufferAttribute(p,u),o?(_c.addScaledVector(Eh,v),vc.addScaledVector(Lh,v),xc.addScaledVector(Ph,v)):(_c.addScaledVector(Eh.sub(ar),v),vc.addScaledVector(Lh.sub(lr),v),xc.addScaledVector(Ph.sub(cr),v)))}ar.add(_c),lr.add(vc),cr.add(xc)}n.isSkinnedMesh&&(n.boneTransform(c,ar),n.boneTransform(f,lr),n.boneTransform(u,cr));const d=NE(n,e,t,i,ar,lr,cr,Rh);if(d){a&&(yc.fromBufferAttribute(a,c),bc.fromBufferAttribute(a,f),Tc.fromBufferAttribute(a,u),d.uv=wt.getUV(Rh,ar,lr,cr,yc,bc,Tc,new ie)),l&&(yc.fromBufferAttribute(l,c),bc.fromBufferAttribute(l,f),Tc.fromBufferAttribute(l,u),d.uv2=wt.getUV(Rh,ar,lr,cr,yc,bc,Tc,new ie));const m={a:c,b:f,c:u,normal:new L,materialIndex:0};wt.getNormal(ar,lr,cr,m.normal),d.face=m}return d}class ma extends Ze{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super();this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],u=[];let h=0,d=0;m("z","y","x",-1,-1,i,t,e,o,s,0),m("z","y","x",1,-1,i,t,-e,o,s,1),m("x","z","y",1,1,e,i,t,r,o,2),m("x","z","y",1,-1,e,i,-t,r,o,3),m("x","y","z",1,-1,e,t,i,r,s,4),m("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ot(c,3)),this.setAttribute("normal",new ot(f,3)),this.setAttribute("uv",new ot(u,2));function m(_,v,p,g,x,b,T,S,y,E,N){const F=b/y,C=T/E,V=b/2,O=T/2,H=S/2,$=y+1,Y=E+1;let q=0,te=0;const pe=new L;for(let Te=0;Te<Y;Te++){const de=Te*C-O;for(let Me=0;Me<$;Me++){const ne=Me*F-V;pe[_]=ne*g,pe[v]=de*x,pe[p]=H,c.push(pe.x,pe.y,pe.z),pe[_]=0,pe[v]=0,pe[p]=S>0?1:-1,f.push(pe.x,pe.y,pe.z),u.push(Me/y),u.push(1-Te/E),q+=1}}for(let Te=0;Te<E;Te++)for(let de=0;de<y;de++){const Me=h+de+$*Te,ne=h+de+$*(Te+1),fe=h+(de+1)+$*(Te+1),ve=h+(de+1)+$*Te;l.push(Me,ne,ve),l.push(ne,fe,ve),te+=6}a.addGroup(d,te,N),d+=te,h+=q}}static fromJSON(e){return new ma(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Us(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function $t(n){const e={};for(let t=0;t<n.length;t++){const i=Us(n[t]);for(const r in i)e[r]=i[r]}return e}const Bs={clone:Us,merge:$t};var DE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,OE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class on extends It{constructor(e){super();this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=DE,this.fragmentShader=OE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Us(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}on.prototype.isShaderMaterial=!0;class Ch extends We{constructor(){super();this.type="Camera",this.matrixWorldInverse=new ye,this.projectionMatrix=new ye,this.projectionMatrixInverse=new ye}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}Ch.prototype.isCamera=!0;class Kt extends Ch{constructor(e=50,t=1,i=.1,r=2e3){super();this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ca*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(la*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ca*2*Math.atan(Math.tan(la*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(la*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}Kt.prototype.isPerspectiveCamera=!0;const ks=90,Hs=1;class Fh extends We{constructor(e,t,i){super();if(this.type="CubeCamera",i.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=i;const r=new Kt(ks,Hs,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new L(1,0,0)),this.add(r);const s=new Kt(ks,Hs,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new L(-1,0,0)),this.add(s);const o=new Kt(ks,Hs,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new L(0,1,0)),this.add(o);const a=new Kt(ks,Hs,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new L(0,-1,0)),this.add(a);const l=new Kt(ks,Hs,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new L(0,0,1)),this.add(l);const c=new Kt(ks,Hs,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new L(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,l,c]=this.children,f=e.xr.enabled,u=e.getRenderTarget();e.xr.enabled=!1;const h=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=h,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.xr.enabled=f}}class Sc extends Ft{constructor(e,t,i,r,s,o,a,l,c,f){e=e!==void 0?e:[],t=t!==void 0?t:Zl,a=a!==void 0?a:ti;super(e,t,i,r,s,o,a,l,c,f);this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}Sc.prototype.isCubeTexture=!0;class hv extends fn{constructor(e,t,i){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=i);super(e,e,t);t=t||{},this.texture=new Sc(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ct,this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=Qt,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ma(5,5,5),s=new on({name:"CubemapFromEquirect",uniforms:Us(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_t,blending:Zi});s.uniforms.tEquirect.value=t;const o=new Dt(r,s),a=t.minFilter;return t.minFilter===xs&&(t.minFilter=Ct),new Fh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}hv.prototype.isWebGLCubeRenderTarget=!0;const Ih=new L,UE=new L,BE=new Vt;class Si{constructor(e=new L(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ih.subVectors(i,t).cross(UE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(Ih),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||BE.getNormalMatrix(e),r=this.coplanarPoint(Ih).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}Si.prototype.isPlane=!0;const zs=new zr,Ac=new L;class Ec{constructor(e=new Si,t=new Si,i=new Si,r=new Si,s=new Si,o=new Si){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],c=i[5],f=i[6],u=i[7],h=i[8],d=i[9],m=i[10],_=i[11],v=i[12],p=i[13],g=i[14],x=i[15];return t[0].setComponents(a-r,u-l,_-h,x-v).normalize(),t[1].setComponents(a+r,u+l,_+h,x+v).normalize(),t[2].setComponents(a+s,u+c,_+d,x+p).normalize(),t[3].setComponents(a-s,u-c,_-d,x-p).normalize(),t[4].setComponents(a-o,u-f,_-m,x-g).normalize(),t[5].setComponents(a+o,u+f,_+m,x+g).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),zs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(zs)}intersectsSprite(e){return zs.center.set(0,0,0),zs.radius=.7071067811865476,zs.applyMatrix4(e.matrixWorld),this.intersectsSphere(zs)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ac.x=r.normal.x>0?e.max.x:e.min.x,Ac.y=r.normal.y>0?e.max.y:e.min.y,Ac.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ac)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function dv(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function kE(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,f){const u=c.array,h=c.usage,d=n.createBuffer();n.bindBuffer(f,d),n.bufferData(f,u,h),c.onUploadCallback();let m=5126;return u instanceof Float32Array?m=5126:u instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):u instanceof Uint16Array?c.isFloat16BufferAttribute?t?m=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):m=5123:u instanceof Int16Array?m=5122:u instanceof Uint32Array?m=5125:u instanceof Int32Array?m=5124:u instanceof Int8Array?m=5120:(u instanceof Uint8Array||u instanceof Uint8ClampedArray)&&(m=5121),{buffer:d,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function s(c,f,u){const h=f.array,d=f.updateRange;n.bindBuffer(u,c),d.count===-1?n.bufferSubData(u,0,h):(t?n.bufferSubData(u,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count):n.bufferSubData(u,d.offset*h.BYTES_PER_ELEMENT,h.subarray(d.offset,d.offset+d.count)),d.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f&&(n.deleteBuffer(f.buffer),i.delete(c))}function l(c,f){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u===void 0?i.set(c,r(c,f)):u.version<c.version&&(s(u.buffer,c,f),u.version=c.version)}return{get:o,remove:a,update:l}}class Lc extends Ze{constructor(e=1,t=1,i=1,r=1){super();this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,u=e/a,h=t/l,d=[],m=[],_=[],v=[];for(let p=0;p<f;p++){const g=p*h-o;for(let x=0;x<c;x++){const b=x*u-s;m.push(b,-g,0),_.push(0,0,1),v.push(x/a),v.push(1-p/l)}}for(let p=0;p<l;p++)for(let g=0;g<a;g++){const x=g+c*p,b=g+c*(p+1),T=g+1+c*(p+1),S=g+1+c*p;d.push(x,b,S),d.push(b,T,S)}this.setIndex(d),this.setAttribute("position",new ot(m,3)),this.setAttribute("normal",new ot(_,3)),this.setAttribute("uv",new ot(v,2))}static fromJSON(e){return new Lc(e.width,e.height,e.widthSegments,e.heightSegments)}}var HE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,zE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,VE=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,GE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,WE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,XE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,YE="vec3 transformed = vec3( position );",qE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jE=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( incidentLight.direction + viewDir );
	float dotNL = saturate( dot( normal, incidentLight.direction ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );
	float dotNH = saturate( dot( geometry.normal, halfDir ) );
	float dotVH = saturate( dot( geometry.viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float NoH ) {
	float invAlpha = 1.0 / roughness;
	float cos2h = NoH * NoH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float NoV, float NoL ) {
	return saturate( 1.0 / ( 4.0 * ( NoL + NoV - NoL * NoV ) ) );
}
vec3 BRDF_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {
	vec3 N = geometry.normal;
	vec3 V = geometry.viewDir;
	vec3 H = normalize( V + L );
	float dotNH = saturate( dot( N, H ) );
	return specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );
}
#endif`,QE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$E=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,KE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ZE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,JE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,e1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,t1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,n1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,i1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,r1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,s1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );
		vec2 f = fract( uv );
		uv += 0.5 - f;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x += texelSize;
		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.y += texelSize;
		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x -= texelSize;
		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		vec3 tm = mix( tl, tr, f.x );
		vec3 bm = mix( bl, br, f.x );
		return mix( tm, bm, f.y );
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,o1=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,a1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,l1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,c1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,u1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,f1="gl_FragColor = linearToOutputTexel( gl_FragColor );",h1=`
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value ) {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`,d1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		envColor = envMapTexelToLinear( envColor );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,p1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,m1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,g1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,v1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,x1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,y1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,b1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,T1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,M1=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		lightMapIrradiance *= PI;
	#endif
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,w1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,S1=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );
		#endif
	}
	#pragma unroll_loop_end
#endif`,A1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {
	vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {
		float dotNL = dot( geometry.normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,E1=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getIBLIrradiance( const in GeometricContext geometry ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec;
			#ifdef ENVMAP_MODE_REFLECTION
				reflectVec = reflect( - viewDir, normal );
				reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			#else
				reflectVec = refract( - viewDir, normal, refractionRatio );
			#endif
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,L1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,P1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,R1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,C1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,F1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularTintFactor = specularTint;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARTINTMAP
			specularTintFactor *= specularTintMapTexelToLinear( texture2D( specularTintMap, vUv ) ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularTintFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularTintFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenTint = sheenTint;
#endif`,I1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenTint;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += irradiance * BRDF_Sheen( material.roughness, directLight.direction, geometry, material.sheenTint );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,N1=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,D1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,O1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,U1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,B1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,k1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,H1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,z1=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,V1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,G1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,W1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,X1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Y1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,q1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
#endif`,j1=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifndef USE_MORPHNORMALS
		uniform float morphTargetInfluences[ 8 ];
	#else
		uniform float morphTargetInfluences[ 4 ];
	#endif
#endif`,Q1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	transformed += morphTarget0 * morphTargetInfluences[ 0 ];
	transformed += morphTarget1 * morphTargetInfluences[ 1 ];
	transformed += morphTarget2 * morphTargetInfluences[ 2 ];
	transformed += morphTarget3 * morphTargetInfluences[ 3 ];
	#ifndef USE_MORPHNORMALS
		transformed += morphTarget4 * morphTargetInfluences[ 4 ];
		transformed += morphTarget5 * morphTargetInfluences[ 5 ];
		transformed += morphTarget6 * morphTargetInfluences[ 6 ];
		transformed += morphTarget7 * morphTargetInfluences[ 7 ];
	#endif
#endif`,$1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,K1=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Z1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,J1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eL=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tL=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,nL=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,iL=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,rL=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,sL=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,oL=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,aL=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lL=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cL=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uL=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fL=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hL=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dL=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,pL=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,mL=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,gL=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,_L=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vL=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,xL=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yL=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,bL=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,TL=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ML=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wL=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,SL=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationTint, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = transmission.a;
#endif`,AL=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationTint;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( vec3 n, vec3 v, float thickness, float ior, mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( float roughness, float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( vec2 fragCoord, float roughness, float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef TEXTURE_LOD_EXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( vec3 radiance, float transmissionDistance, vec3 attenuationColor, float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( vec3 n, vec3 v, float roughness, vec3 diffuseColor, vec3 specularColor, float specularF90,
		vec3 position, mat4 modelMatrix, mat4 viewMatrix, mat4 projMatrix, float ior, float thickness,
		vec3 attenuationColor, float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,EL=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,LL=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,PL=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,RL=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,CL=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,FL=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,IL=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,NL=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,DL=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,OL=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,UL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BL=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,kL=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,HL=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,zL=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,VL=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,GL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,WL=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,XL=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,YL=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qL=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,jL=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QL=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$L=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KL=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ZL=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,JL=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,eP=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tP=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nP=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularTint;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARTINTMAP
		uniform sampler2D specularTintMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenTint;
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - clearcoat * Fcc ) + clearcoatSpecular * clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iP=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,rP=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sP=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oP=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,aP=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,lP=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,cP=`#include <common>
#include <fog_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <begin_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uP=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,fP=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`;const ke={alphamap_fragment:HE,alphamap_pars_fragment:zE,alphatest_fragment:VE,alphatest_pars_fragment:GE,aomap_fragment:WE,aomap_pars_fragment:XE,begin_vertex:YE,beginnormal_vertex:qE,bsdfs:jE,bumpmap_pars_fragment:QE,clipping_planes_fragment:$E,clipping_planes_pars_fragment:KE,clipping_planes_pars_vertex:ZE,clipping_planes_vertex:JE,color_fragment:e1,color_pars_fragment:t1,color_pars_vertex:n1,color_vertex:i1,common:r1,cube_uv_reflection_fragment:s1,defaultnormal_vertex:o1,displacementmap_pars_vertex:a1,displacementmap_vertex:l1,emissivemap_fragment:c1,emissivemap_pars_fragment:u1,encodings_fragment:f1,encodings_pars_fragment:h1,envmap_fragment:d1,envmap_common_pars_fragment:p1,envmap_pars_fragment:m1,envmap_pars_vertex:g1,envmap_physical_pars_fragment:E1,envmap_vertex:_1,fog_vertex:v1,fog_pars_vertex:x1,fog_fragment:y1,fog_pars_fragment:b1,gradientmap_pars_fragment:T1,lightmap_fragment:M1,lightmap_pars_fragment:w1,lights_lambert_vertex:S1,lights_pars_begin:A1,lights_toon_fragment:L1,lights_toon_pars_fragment:P1,lights_phong_fragment:R1,lights_phong_pars_fragment:C1,lights_physical_fragment:F1,lights_physical_pars_fragment:I1,lights_fragment_begin:N1,lights_fragment_maps:D1,lights_fragment_end:O1,logdepthbuf_fragment:U1,logdepthbuf_pars_fragment:B1,logdepthbuf_pars_vertex:k1,logdepthbuf_vertex:H1,map_fragment:z1,map_pars_fragment:V1,map_particle_fragment:G1,map_particle_pars_fragment:W1,metalnessmap_fragment:X1,metalnessmap_pars_fragment:Y1,morphnormal_vertex:q1,morphtarget_pars_vertex:j1,morphtarget_vertex:Q1,normal_fragment_begin:$1,normal_fragment_maps:K1,normal_pars_fragment:Z1,normal_pars_vertex:J1,normal_vertex:eL,normalmap_pars_fragment:tL,clearcoat_normal_fragment_begin:nL,clearcoat_normal_fragment_maps:iL,clearcoat_pars_fragment:rL,output_fragment:sL,packing:oL,premultiplied_alpha_fragment:aL,project_vertex:lL,dithering_fragment:cL,dithering_pars_fragment:uL,roughnessmap_fragment:fL,roughnessmap_pars_fragment:hL,shadowmap_pars_fragment:dL,shadowmap_pars_vertex:pL,shadowmap_vertex:mL,shadowmask_pars_fragment:gL,skinbase_vertex:_L,skinning_pars_vertex:vL,skinning_vertex:xL,skinnormal_vertex:yL,specularmap_fragment:bL,specularmap_pars_fragment:TL,tonemapping_fragment:ML,tonemapping_pars_fragment:wL,transmission_fragment:SL,transmission_pars_fragment:AL,uv_pars_fragment:EL,uv_pars_vertex:LL,uv_vertex:PL,uv2_pars_fragment:RL,uv2_pars_vertex:CL,uv2_vertex:FL,worldpos_vertex:IL,background_frag:NL,background_vert:DL,cube_frag:OL,cube_vert:UL,depth_frag:BL,depth_vert:kL,distanceRGBA_frag:HL,distanceRGBA_vert:zL,equirect_frag:VL,equirect_vert:GL,linedashed_frag:WL,linedashed_vert:XL,meshbasic_frag:YL,meshbasic_vert:qL,meshlambert_frag:jL,meshlambert_vert:QL,meshmatcap_frag:$L,meshmatcap_vert:KL,meshnormal_frag:ZL,meshnormal_vert:JL,meshphong_frag:eP,meshphong_vert:tP,meshphysical_frag:nP,meshphysical_vert:iP,meshtoon_frag:rP,meshtoon_vert:sP,points_frag:oP,points_vert:aP,shadow_frag:lP,shadow_vert:cP,sprite_frag:uP,sprite_vert:fP},he={common:{diffuse:{value:new me(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Vt},uv2Transform:{value:new Vt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new me(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Vt}}},ni={basic:{uniforms:$t([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:$t([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.fog,he.lights,{emissive:{value:new me(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:$t([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new me(0)},specular:{value:new me(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:$t([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:$t([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new me(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:$t([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:$t([he.points,he.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:$t([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:$t([he.common,he.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:$t([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:$t([he.sprite,he.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},cube:{uniforms:$t([he.envmap,{opacity:{value:1}}]),vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:$t([he.common,he.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:$t([he.lights,he.fog,{color:{value:new me(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};ni.physical={uniforms:$t([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new ie(1,1)},clearcoatNormalMap:{value:null},sheenTint:{value:new me(0)},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationTint:{value:new me(0)},specularIntensity:{value:0},specularIntensityMap:{value:null},specularTint:{value:new me(1,1,1)},specularTintMap:{value:null}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};function hP(n,e,t,i,r){const s=new me(0);let o=0,a,l,c=null,f=0,u=null;function h(m,_){let v=!1,p=_.isScene===!0?_.background:null;p&&p.isTexture&&(p=e.get(p));const g=n.xr,x=g.getSession&&g.getSession();x&&x.environmentBlendMode==="additive"&&(p=null),p===null?d(s,o):p&&p.isColor&&(d(p,1),v=!0),(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),p&&(p.isCubeTexture||p.mapping===ec)?(l===void 0&&(l=new Dt(new ma(1,1,1),new on({name:"BackgroundCubeMaterial",uniforms:Us(ni.cube.uniforms),vertexShader:ni.cube.vertexShader,fragmentShader:ni.cube.fragmentShader,side:_t,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,T,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=p,l.material.uniforms.flipEnvMap.value=p.isCubeTexture&&p.isRenderTargetTexture===!1?-1:1,(c!==p||f!==p.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,c=p,f=p.version,u=n.toneMapping),m.unshift(l,l.geometry,l.material,0,0,null)):p&&p.isTexture&&(a===void 0&&(a=new Dt(new Lc(2,2),new on({name:"BackgroundMaterial",uniforms:Us(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:Ki,depthTest:!1,depthWrite:!1,fog:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(a)),a.material.uniforms.t2D.value=p,p.matrixAutoUpdate===!0&&p.updateMatrix(),a.material.uniforms.uvTransform.value.copy(p.matrix),(c!==p||f!==p.version||u!==n.toneMapping)&&(a.material.needsUpdate=!0,c=p,f=p.version,u=n.toneMapping),m.unshift(a,a.geometry,a.material,0,0,null))}function d(m,_){t.buffers.color.setClear(m.r,m.g,m.b,_,r)}return{getClearColor:function(){return s},setClearColor:function(m,_=1){s.set(m),o=_,d(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,d(s,o)},render:h}}function dP(n,e,t,i){const r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=_(null);let c=l;function f(O,H,$,Y,q){let te=!1;if(o){const pe=m(Y,$,H);c!==pe&&(c=pe,h(c.object)),te=v(Y,q),te&&p(Y,q)}else{const pe=H.wireframe===!0;(c.geometry!==Y.id||c.program!==$.id||c.wireframe!==pe)&&(c.geometry=Y.id,c.program=$.id,c.wireframe=pe,te=!0)}O.isInstancedMesh===!0&&(te=!0),q!==null&&t.update(q,34963),te&&(y(O,H,$,Y),q!==null&&n.bindBuffer(34963,t.get(q).buffer))}function u(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function h(O){return i.isWebGL2?n.bindVertexArray(O):s.bindVertexArrayOES(O)}function d(O){return i.isWebGL2?n.deleteVertexArray(O):s.deleteVertexArrayOES(O)}function m(O,H,$){const Y=$.wireframe===!0;let q=a[O.id];q===void 0&&(q={},a[O.id]=q);let te=q[H.id];te===void 0&&(te={},q[H.id]=te);let pe=te[Y];return pe===void 0&&(pe=_(u()),te[Y]=pe),pe}function _(O){const H=[],$=[],Y=[];for(let q=0;q<r;q++)H[q]=0,$[q]=0,Y[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:$,attributeDivisors:Y,object:O,attributes:{},index:null}}function v(O,H){const $=c.attributes,Y=O.attributes;let q=0;for(const te in Y){const pe=$[te],Te=Y[te];if(pe===void 0||pe.attribute!==Te||pe.data!==Te.data)return!0;q++}return c.attributesNum!==q||c.index!==H}function p(O,H){const $={},Y=O.attributes;let q=0;for(const te in Y){const pe=Y[te],Te={};Te.attribute=pe,pe.data&&(Te.data=pe.data),$[te]=Te,q++}c.attributes=$,c.attributesNum=q,c.index=H}function g(){const O=c.newAttributes;for(let H=0,$=O.length;H<$;H++)O[H]=0}function x(O){b(O,0)}function b(O,H){const $=c.newAttributes,Y=c.enabledAttributes,q=c.attributeDivisors;$[O]=1,Y[O]===0&&(n.enableVertexAttribArray(O),Y[O]=1),q[O]!==H&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,H),q[O]=H)}function T(){const O=c.newAttributes,H=c.enabledAttributes;for(let $=0,Y=H.length;$<Y;$++)H[$]!==O[$]&&(n.disableVertexAttribArray($),H[$]=0)}function S(O,H,$,Y,q,te){i.isWebGL2===!0&&($===5124||$===5125)?n.vertexAttribIPointer(O,H,$,q,te):n.vertexAttribPointer(O,H,$,Y,q,te)}function y(O,H,$,Y){if(i.isWebGL2===!1&&(O.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const q=Y.attributes,te=$.getAttributes(),pe=H.defaultAttributeValues;for(const Te in te){const de=te[Te];if(de.location>=0){let Me=q[Te];if(Me===void 0&&(Te==="instanceMatrix"&&O.instanceMatrix&&(Me=O.instanceMatrix),Te==="instanceColor"&&O.instanceColor&&(Me=O.instanceColor)),Me!==void 0){const ne=Me.normalized,fe=Me.itemSize,ve=t.get(Me);if(ve===void 0)continue;const Q=ve.buffer,xe=ve.type,Se=ve.bytesPerElement;if(Me.isInterleavedBufferAttribute){const _e=Me.data,ge=_e.stride,Ee=Me.offset;if(_e&&_e.isInstancedInterleavedBuffer){for(let J=0;J<de.locationSize;J++)b(de.location+J,_e.meshPerAttribute);O.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let J=0;J<de.locationSize;J++)x(de.location+J);n.bindBuffer(34962,Q);for(let J=0;J<de.locationSize;J++)S(de.location+J,fe/de.locationSize,xe,ne,ge*Se,(Ee+fe/de.locationSize*J)*Se)}else{if(Me.isInstancedBufferAttribute){for(let _e=0;_e<de.locationSize;_e++)b(de.location+_e,Me.meshPerAttribute);O.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let _e=0;_e<de.locationSize;_e++)x(de.location+_e);n.bindBuffer(34962,Q);for(let _e=0;_e<de.locationSize;_e++)S(de.location+_e,fe/de.locationSize,xe,ne,fe*Se,fe/de.locationSize*_e*Se)}}else if(pe!==void 0){const ne=pe[Te];if(ne!==void 0)switch(ne.length){case 2:n.vertexAttrib2fv(de.location,ne);break;case 3:n.vertexAttrib3fv(de.location,ne);break;case 4:n.vertexAttrib4fv(de.location,ne);break;default:n.vertexAttrib1fv(de.location,ne)}}}}T()}function E(){C();for(const O in a){const H=a[O];for(const $ in H){const Y=H[$];for(const q in Y)d(Y[q].object),delete Y[q];delete H[$]}delete a[O]}}function N(O){if(a[O.id]===void 0)return;const H=a[O.id];for(const $ in H){const Y=H[$];for(const q in Y)d(Y[q].object),delete Y[q];delete H[$]}delete a[O.id]}function F(O){for(const H in a){const $=a[H];if($[O.id]===void 0)continue;const Y=$[O.id];for(const q in Y)d(Y[q].object),delete Y[q];delete $[O.id]}}function C(){V(),c!==l&&(c=l,h(c.object))}function V(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:C,resetDefaultState:V,dispose:E,releaseStatesOfGeometry:N,releaseStatesOfProgram:F,initAttributes:g,enableAttribute:x,disableUnusedAttributes:T}}function pP(n,e,t,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,f){n.drawArrays(s,c,f),t.update(f,s,1)}function l(c,f,u){if(u===0)return;let h,d;if(r)h=n,d="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[d](s,c,f,u),t.update(f,s,u)}this.setMode=o,this.render=a,this.renderInstances=l}function mP(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const y=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(y){if(y==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";y="mediump"}return y==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&n instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),f=t.logarithmicDepthBuffer===!0,u=n.getParameter(34930),h=n.getParameter(35660),d=n.getParameter(3379),m=n.getParameter(34076),_=n.getParameter(34921),v=n.getParameter(36347),p=n.getParameter(36348),g=n.getParameter(36349),x=h>0,b=o||e.has("OES_texture_float"),T=x&&b,S=o?n.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:f,maxTextures:u,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:m,maxAttributes:_,maxVertexUniforms:v,maxVaryings:p,maxFragmentUniforms:g,vertexTextures:x,floatFragmentTextures:b,floatVertexTextures:T,maxSamples:S}}function gP(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Si,a=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h,d){const m=u.length!==0||h||i!==0||r;return r=h,t=f(u,d,0),i=u.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1,c()},this.setState=function(u,h,d){const m=u.clippingPlanes,_=u.clipIntersection,v=u.clipShadows,p=n.get(u);if(!r||m===null||m.length===0||s&&!v)s?f(null):c();else{const g=s?0:i,x=g*4;let b=p.clippingState||null;l.value=b,b=f(m,h,x,d);for(let T=0;T!==x;++T)b[T]=t[T];p.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(u,h,d,m){const _=u!==null?u.length:0;let v=null;if(_!==0){if(v=l.value,m!==!0||v===null){const p=d+_*4,g=h.matrixWorldInverse;a.getNormalMatrix(g),(v===null||v.length<p)&&(v=new Float32Array(p));for(let x=0,b=d;x!==_;++x,b+=4)o.copy(u[x]).applyMatrix4(g,a),o.normal.toArray(v,b),v[b+3]=o.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,v}}function _P(n){let e=new WeakMap;function t(o,a){return a===$f?o.mapping=Zl:a===Kf&&(o.mapping=Jl),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===$f||a===Kf)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=n.getRenderTarget(),f=new hv(l.height/2);return f.fromEquirectangularTexture(n,o),e.set(o,f),n.setRenderTarget(c),o.addEventListener("dispose",r),t(f.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Gr extends Ch{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super();this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}Gr.prototype.isOrthographicCamera=!0;class Pc extends on{constructor(e){super(e);this.type="RawShaderMaterial"}}Pc.prototype.isRawShaderMaterial=!0;const Vs=4,ur=8,ii=Math.pow(2,ur),pv=[.125,.215,.35,.446,.526,.582],mv=ur-Vs+1+pv.length,Gs=20,ri={[vt]:0,[Rn]:1,[oc]:2,[ih]:3,[rh]:4,[sh]:5,[sc]:6},Nh=new Gr,{_lodPlanes:ga,_sizeLods:gv,_sigmas:Rc}=yP(),_v=new me;let Dh=null;const Wr=(1+Math.sqrt(5))/2,Ws=1/Wr,vv=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Wr,Ws),new L(0,Wr,-Ws),new L(Ws,0,Wr),new L(-Ws,0,Wr),new L(Wr,Ws,0),new L(-Wr,Ws,0)];class vP{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._blurMaterial=bP(Gs),this._equirectShader=null,this._cubemapShader=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Dh=this._renderer.getRenderTarget();const s=this._allocateTargets();return this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e){return this._fromTexture(e)}fromCubemap(e){return this._fromTexture(e)}compileCubemapShader(){this._cubemapShader===null&&(this._cubemapShader=bv(),this._compileMaterial(this._cubemapShader))}compileEquirectangularShader(){this._equirectShader===null&&(this._equirectShader=yv(),this._compileMaterial(this._equirectShader))}dispose(){this._blurMaterial.dispose(),this._cubemapShader!==null&&this._cubemapShader.dispose(),this._equirectShader!==null&&this._equirectShader.dispose();for(let e=0;e<ga.length;e++)ga[e].dispose()}_cleanup(e){this._pingPongRenderTarget.dispose(),this._renderer.setRenderTarget(Dh),e.scissorTest=!1,Cc(e,0,0,e.width,e.height)}_fromTexture(e){Dh=this._renderer.getRenderTarget();const t=this._allocateTargets(e);return this._textureToCubeUV(e,t),this._applyPMREM(t),this._cleanup(t),t}_allocateTargets(e){const t={magFilter:Lt,minFilter:Lt,generateMipmaps:!1,type:ys,format:mA,encoding:xP(e)?e.encoding:oc,depthBuffer:!1},i=xv(t);return i.depthBuffer=!e,this._pingPongRenderTarget=xv(t),i}_compileMaterial(e){const t=new Dt(ga[0],e);this._renderer.compile(t,Nh)}_sceneToCubeUV(e,t,i,r){const s=90,o=1,a=new Kt(s,o,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,h=f.outputEncoding,d=f.toneMapping;f.getClearColor(_v),f.toneMapping=Br,f.outputEncoding=vt,f.autoClear=!1;const m=new In({name:"PMREM.Background",side:_t,depthWrite:!1,depthTest:!1}),_=new Dt(new ma,m);let v=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,v=!0):(m.color.copy(_v),v=!0);for(let g=0;g<6;g++){const x=g%3;x==0?(a.up.set(0,l[g],0),a.lookAt(c[g],0,0)):x==1?(a.up.set(0,0,l[g]),a.lookAt(0,c[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,c[g])),Cc(r,x*ii,g>2?ii:0,ii,ii),f.setRenderTarget(r),v&&f.render(_,a),f.render(e,a)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=d,f.outputEncoding=h,f.autoClear=u,e.background=p}_textureToCubeUV(e,t){const i=this._renderer;e.isCubeTexture?this._cubemapShader==null&&(this._cubemapShader=bv()):this._equirectShader==null&&(this._equirectShader=yv());const r=e.isCubeTexture?this._cubemapShader:this._equirectShader,s=new Dt(ga[0],r),o=r.uniforms;o.envMap.value=e,e.isCubeTexture||o.texelSize.value.set(1/e.image.width,1/e.image.height),o.inputEncoding.value=ri[e.encoding],o.outputEncoding.value=ri[t.texture.encoding],Cc(t,0,0,3*ii,2*ii),i.setRenderTarget(t),i.render(s,Nh)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<mv;r++){const s=Math.sqrt(Rc[r]*Rc[r]-Rc[r-1]*Rc[r-1]),o=vv[(r-1)%vv.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,u=new Dt(ga[r],c),h=c.uniforms,d=gv[i]-1,m=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Gs-1),_=s/m,v=isFinite(s)?1+Math.floor(f*_):Gs;v>Gs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Gs}`);const p=[];let g=0;for(let S=0;S<Gs;++S){const y=S/_,E=Math.exp(-y*y/2);p.push(E),S==0?g+=E:S<v&&(g+=2*E)}for(let S=0;S<p.length;S++)p[S]=p[S]/g;h.envMap.value=e.texture,h.samples.value=v,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a),h.dTheta.value=m,h.mipInt.value=ur-i,h.inputEncoding.value=ri[e.texture.encoding],h.outputEncoding.value=ri[e.texture.encoding];const x=gv[r],b=3*Math.max(0,ii-2*x),T=(r===0?0:2*ii)+2*x*(r>ur-Vs?r-ur+Vs:0);Cc(t,b,T,3*x,2*x),l.setRenderTarget(t),l.render(u,Nh)}}function xP(n){return n===void 0||n.type!==ys?!1:n.encoding===vt||n.encoding===Rn||n.encoding===sc}function yP(){const n=[],e=[],t=[];let i=ur;for(let r=0;r<mv;r++){const s=Math.pow(2,i);e.push(s);let o=1/s;r>ur-Vs?o=pv[r-ur+Vs-1]:r==0&&(o=0),t.push(o);const a=1/(s-1),l=-a/2,c=1+a/2,f=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,h=6,d=3,m=2,_=1,v=new Float32Array(d*h*u),p=new Float32Array(m*h*u),g=new Float32Array(_*h*u);for(let b=0;b<u;b++){const T=b%3*2/3-1,S=b>2?0:-1,y=[T,S,0,T+2/3,S,0,T+2/3,S+1,0,T,S,0,T+2/3,S+1,0,T,S+1,0];v.set(y,d*h*b),p.set(f,m*h*b);const E=[b,b,b,b,b,b];g.set(E,_*h*b)}const x=new Ze;x.setAttribute("position",new xt(v,d)),x.setAttribute("uv",new xt(p,m)),x.setAttribute("faceIndex",new xt(g,_)),n.push(x),i>Vs&&i--}return{_lodPlanes:n,_sizeLods:e,_sigmas:t}}function xv(n){const e=new fn(3*ii,3*ii,n);return e.texture.mapping=ec,e.texture.name="PMREM.cubeUv",e.scissorTest=!0,e}function Cc(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function bP(n){const e=new Float32Array(n),t=new L(0,1,0);return new Pc({name:"SphericalGaussianBlur",defines:{n},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:e},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:t},inputEncoding:{value:ri[vt]},outputEncoding:{value:ri[vt]}},vertexShader:Oh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			${Uh()}

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function yv(){const n=new ie(1,1);return new Pc({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null},texelSize:{value:n},inputEncoding:{value:ri[vt]},outputEncoding:{value:ri[vt]}},vertexShader:Oh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform vec2 texelSize;

			${Uh()}

			#include <common>

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				vec2 f = fract( uv / texelSize - 0.5 );
				uv -= f * texelSize;
				vec3 tl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x += texelSize.x;
				vec3 tr = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.y += texelSize.y;
				vec3 br = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x -= texelSize.x;
				vec3 bl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;

				vec3 tm = mix( tl, tr, f.x );
				vec3 bm = mix( bl, br, f.x );
				gl_FragColor.rgb = mix( tm, bm, f.y );

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function bv(){return new Pc({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},inputEncoding:{value:ri[vt]},outputEncoding:{value:ri[vt]}},vertexShader:Oh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			${Uh()}

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) ).rgb;
				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Oh(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 position;
		attribute vec2 uv;
		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Uh(){return`

		uniform int inputEncoding;
		uniform int outputEncoding;

		#include <encodings_pars_fragment>

		vec4 inputTexelToLinear( vec4 value ) {

			if ( inputEncoding == 0 ) {

				return value;

			} else if ( inputEncoding == 1 ) {

				return sRGBToLinear( value );

			} else if ( inputEncoding == 2 ) {

				return RGBEToLinear( value );

			} else if ( inputEncoding == 3 ) {

				return RGBMToLinear( value, 7.0 );

			} else if ( inputEncoding == 4 ) {

				return RGBMToLinear( value, 16.0 );

			} else if ( inputEncoding == 5 ) {

				return RGBDToLinear( value, 256.0 );

			} else {

				return GammaToLinear( value, 2.2 );

			}

		}

		vec4 linearToOutputTexel( vec4 value ) {

			if ( outputEncoding == 0 ) {

				return value;

			} else if ( outputEncoding == 1 ) {

				return LinearTosRGB( value );

			} else if ( outputEncoding == 2 ) {

				return LinearToRGBE( value );

			} else if ( outputEncoding == 3 ) {

				return LinearToRGBM( value, 7.0 );

			} else if ( outputEncoding == 4 ) {

				return LinearToRGBM( value, 16.0 );

			} else if ( outputEncoding == 5 ) {

				return LinearToRGBD( value, 256.0 );

			} else {

				return LinearToGamma( value, 2.2 );

			}

		}

		vec4 envMapTexelToLinear( vec4 color ) {

			return inputTexelToLinear( color );

		}
	`}function TP(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const l=a.mapping,c=l===$f||l===Kf,f=l===Zl||l===Jl;if(c||f){if(e.has(a))return e.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||f&&u&&r(u)){const h=n.getRenderTarget();t===null&&(t=new vP(n));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),n.setRenderTarget(h),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function MP(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function wP(n,e,t,i){const r={},s=new WeakMap;function o(u){const h=u.target;h.index!==null&&e.remove(h.index);for(const m in h.attributes)e.remove(h.attributes[m]);h.removeEventListener("dispose",o),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(u,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(u){const h=u.attributes;for(const m in h)e.update(h[m],34962);const d=u.morphAttributes;for(const m in d){const _=d[m];for(let v=0,p=_.length;v<p;v++)e.update(_[v],34962)}}function c(u){const h=[],d=u.index,m=u.attributes.position;let _=0;if(d!==null){const g=d.array;_=d.version;for(let x=0,b=g.length;x<b;x+=3){const T=g[x+0],S=g[x+1],y=g[x+2];h.push(T,S,S,y,y,T)}}else{const g=m.array;_=m.version;for(let x=0,b=g.length/3-1;x<b;x+=3){const T=x+0,S=x+1,y=x+2;h.push(T,S,S,y,y,T)}}const v=new(uv(h)>65535?cv:lv)(h,1);v.version=_;const p=s.get(u);p&&e.remove(p),s.set(u,v)}function f(u){const h=s.get(u);if(h){const d=u.index;d!==null&&h.version<d.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:f}}function SP(n,e,t,i){const r=i.isWebGL2;let s;function o(h){s=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function f(h,d){n.drawElements(s,d,a,h*l),t.update(d,s,1)}function u(h,d,m){if(m===0)return;let _,v;if(r)_=n,v="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),v="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[v](s,d,a,h*l,m),t.update(d,s,m)}this.setMode=o,this.setIndex=c,this.render=f,this.renderInstances=u}function AP(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function EP(n,e){return n[0]-e[0]}function LP(n,e){return Math.abs(e[1])-Math.abs(n[1])}function PP(n){const e={},t=new Float32Array(8),i=[];for(let s=0;s<8;s++)i[s]=[s,0];function r(s,o,a,l){const c=s.morphTargetInfluences,f=c===void 0?0:c.length;let u=e[o.id];if(u===void 0||u.length!==f){u=[];for(let v=0;v<f;v++)u[v]=[v,0];e[o.id]=u}for(let v=0;v<f;v++){const p=u[v];p[0]=v,p[1]=c[v]}u.sort(LP);for(let v=0;v<8;v++)v<f&&u[v][1]?(i[v][0]=u[v][0],i[v][1]=u[v][1]):(i[v][0]=Number.MAX_SAFE_INTEGER,i[v][1]=0);i.sort(EP);const h=o.morphAttributes.position,d=o.morphAttributes.normal;let m=0;for(let v=0;v<8;v++){const p=i[v],g=p[0],x=p[1];g!==Number.MAX_SAFE_INTEGER&&x?(h&&o.getAttribute("morphTarget"+v)!==h[g]&&o.setAttribute("morphTarget"+v,h[g]),d&&o.getAttribute("morphNormal"+v)!==d[g]&&o.setAttribute("morphNormal"+v,d[g]),t[v]=x,m+=x):(h&&o.hasAttribute("morphTarget"+v)===!0&&o.deleteAttribute("morphTarget"+v),d&&o.hasAttribute("morphNormal"+v)===!0&&o.deleteAttribute("morphNormal"+v),t[v]=0)}const _=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",t)}return{update:r}}function RP(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,f=l.geometry,u=e.get(l,f);return r.get(u)!==c&&(e.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),u}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class Tv extends Ft{constructor(e=null,t=1,i=1,r=1){super(null);this.image={data:e,width:t,height:i,depth:r},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}Tv.prototype.isDataTexture2DArray=!0;class Mv extends Ft{constructor(e=null,t=1,i=1,r=1){super(null);this.image={data:e,width:t,height:i,depth:r},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}Mv.prototype.isDataTexture3D=!0;const wv=new Ft,CP=new Tv,FP=new Mv,Sv=new Sc,Av=[],Ev=[],Lv=new Float32Array(16),Pv=new Float32Array(9),Rv=new Float32Array(4);function Xs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Av[r];if(s===void 0&&(s=new Float32Array(r),Av[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function an(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Zt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Cv(n,e){let t=Ev[e];t===void 0&&(t=new Int32Array(e),Ev[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function IP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function NP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;n.uniform2fv(this.addr,e),Zt(t,e)}}function DP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(an(t,e))return;n.uniform3fv(this.addr,e),Zt(t,e)}}function OP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;n.uniform4fv(this.addr,e),Zt(t,e)}}function UP(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(an(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Zt(t,e)}else{if(an(t,i))return;Rv.set(i),n.uniformMatrix2fv(this.addr,!1,Rv),Zt(t,i)}}function BP(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(an(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Zt(t,e)}else{if(an(t,i))return;Pv.set(i),n.uniformMatrix3fv(this.addr,!1,Pv),Zt(t,i)}}function kP(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(an(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Zt(t,e)}else{if(an(t,i))return;Lv.set(i),n.uniformMatrix4fv(this.addr,!1,Lv),Zt(t,i)}}function HP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function zP(n,e){const t=this.cache;an(t,e)||(n.uniform2iv(this.addr,e),Zt(t,e))}function VP(n,e){const t=this.cache;an(t,e)||(n.uniform3iv(this.addr,e),Zt(t,e))}function GP(n,e){const t=this.cache;an(t,e)||(n.uniform4iv(this.addr,e),Zt(t,e))}function WP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function XP(n,e){const t=this.cache;an(t,e)||(n.uniform2uiv(this.addr,e),Zt(t,e))}function YP(n,e){const t=this.cache;an(t,e)||(n.uniform3uiv(this.addr,e),Zt(t,e))}function qP(n,e){const t=this.cache;an(t,e)||(n.uniform4uiv(this.addr,e),Zt(t,e))}function jP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.safeSetTexture2D(e||wv,r)}function QP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||FP,r)}function $P(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.safeSetTextureCube(e||Sv,r)}function KP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||CP,r)}function ZP(n){switch(n){case 5126:return IP;case 35664:return NP;case 35665:return DP;case 35666:return OP;case 35674:return UP;case 35675:return BP;case 35676:return kP;case 5124:case 35670:return HP;case 35667:case 35671:return zP;case 35668:case 35672:return VP;case 35669:case 35673:return GP;case 5125:return WP;case 36294:return XP;case 36295:return YP;case 36296:return qP;case 35678:case 36198:case 36298:case 36306:case 35682:return jP;case 35679:case 36299:case 36307:return QP;case 35680:case 36300:case 36308:case 36293:return $P;case 36289:case 36303:case 36311:case 36292:return KP}}function JP(n,e){n.uniform1fv(this.addr,e)}function eR(n,e){const t=Xs(e,this.size,2);n.uniform2fv(this.addr,t)}function tR(n,e){const t=Xs(e,this.size,3);n.uniform3fv(this.addr,t)}function nR(n,e){const t=Xs(e,this.size,4);n.uniform4fv(this.addr,t)}function iR(n,e){const t=Xs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function rR(n,e){const t=Xs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function sR(n,e){const t=Xs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function oR(n,e){n.uniform1iv(this.addr,e)}function aR(n,e){n.uniform2iv(this.addr,e)}function lR(n,e){n.uniform3iv(this.addr,e)}function cR(n,e){n.uniform4iv(this.addr,e)}function uR(n,e){n.uniform1uiv(this.addr,e)}function fR(n,e){n.uniform2uiv(this.addr,e)}function hR(n,e){n.uniform3uiv(this.addr,e)}function dR(n,e){n.uniform4uiv(this.addr,e)}function pR(n,e,t){const i=e.length,r=Cv(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.safeSetTexture2D(e[s]||wv,r[s])}function mR(n,e,t){const i=e.length,r=Cv(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.safeSetTextureCube(e[s]||Sv,r[s])}function gR(n){switch(n){case 5126:return JP;case 35664:return eR;case 35665:return tR;case 35666:return nR;case 35674:return iR;case 35675:return rR;case 35676:return sR;case 5124:case 35670:return oR;case 35667:case 35671:return aR;case 35668:case 35672:return lR;case 35669:case 35673:return cR;case 5125:return uR;case 36294:return fR;case 36295:return hR;case 36296:return dR;case 35678:case 36198:case 36298:case 36306:case 35682:return pR;case 35680:case 36300:case 36308:case 36293:return mR}}function _R(n,e,t){this.id=n,this.addr=t,this.cache=[],this.setValue=ZP(e.type)}function Fv(n,e,t){this.id=n,this.addr=t,this.cache=[],this.size=e.size,this.setValue=gR(e.type)}Fv.prototype.updateCache=function(n){const e=this.cache;n instanceof Float32Array&&e.length!==n.length&&(this.cache=new Float32Array(n.length)),Zt(e,n)};function Iv(n){this.id=n,this.seq=[],this.map={}}Iv.prototype.setValue=function(n,e,t){const i=this.seq;for(let r=0,s=i.length;r!==s;++r){const o=i[r];o.setValue(n,e[o.id],t)}};const Bh=/(\w+)(\])?(\[|\.)?/g;function Nv(n,e){n.seq.push(e),n.map[e.id]=e}function vR(n,e,t){const i=n.name,r=i.length;for(Bh.lastIndex=0;;){const s=Bh.exec(i),o=Bh.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Nv(t,c===void 0?new _R(a,n,e):new Fv(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new Iv(a),Nv(t,u)),t=u}}}function fr(n,e){this.seq=[],this.map={};const t=n.getProgramParameter(e,35718);for(let i=0;i<t;++i){const r=n.getActiveUniform(e,i),s=n.getUniformLocation(e,r.name);vR(r,s,this)}}fr.prototype.setValue=function(n,e,t,i){const r=this.map[e];r!==void 0&&r.setValue(n,t,i)};fr.prototype.setOptional=function(n,e,t){const i=e[t];i!==void 0&&this.setValue(n,t,i)};fr.upload=function(n,e,t,i){for(let r=0,s=e.length;r!==s;++r){const o=e[r],a=t[o.id];a.needsUpdate!==!1&&o.setValue(n,a.value,i)}};fr.seqWithValue=function(n,e){const t=[];for(let i=0,r=n.length;i!==r;++i){const s=n[i];s.id in e&&t.push(s)}return t};function Dv(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let xR=0;function yR(n){const e=n.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function Ov(n){switch(n){case vt:return["Linear","( value )"];case Rn:return["sRGB","( value )"];case oc:return["RGBE","( value )"];case ih:return["RGBM","( value, 7.0 )"];case rh:return["RGBM","( value, 16.0 )"];case sh:return["RGBD","( value, 256.0 )"];case sc:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case iE:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function Uv(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();return i&&r===""?"":t.toUpperCase()+`

`+r+`

`+yR(n.getShaderSource(e))}function Ys(n,e){const t=Ov(e);return"vec4 "+n+"( vec4 value ) { return "+t[0]+"ToLinear"+t[1]+"; }"}function bR(n,e){const t=Ov(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function TR(n,e){let t;switch(e){case C_:t="Linear";break;case nA:t="Reinhard";break;case iA:t="OptimizedCineon";break;case rA:t="ACESFilmic";break;case sA:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function MR(n){return[n.extensionDerivatives||n.envMapCubeUV||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(_a).join(`
`)}function wR(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function SR(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function _a(n){return n!==""}function Bv(n,e){return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function kv(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const AR=/^[ \t]*#include +<([\w\d./]+)>/gm;function kh(n){return n.replace(AR,ER)}function ER(n,e){const t=ke[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return kh(t)}const LR=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,PR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hv(n){return n.replace(PR,zv).replace(LR,RR)}function RR(n,e,t,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),zv(n,e,t,i)}function zv(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Vv(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function CR(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===M_?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===NS?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===na&&(e="SHADOWMAP_TYPE_VSM"),e}function FR(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Zl:case Jl:e="ENVMAP_TYPE_CUBE";break;case ec:case Zf:e="ENVMAP_TYPE_CUBE_UV";break}return e}function IR(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Jl:case Zf:e="ENVMAP_MODE_REFRACTION";break}return e}function NR(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Kl:e="ENVMAP_BLENDING_MULTIPLY";break;case eA:e="ENVMAP_BLENDING_MIX";break;case tA:e="ENVMAP_BLENDING_ADD";break}return e}function DR(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=CR(t),c=FR(t),f=IR(t),u=NR(t),h=n.gammaFactor>0?n.gammaFactor:1,d=t.isWebGL2?"":MR(t),m=wR(s),_=r.createProgram();let v,p,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=[m].filter(_a).join(`
`),v.length>0&&(v+=`
`),p=[d,m].filter(_a).join(`
`),p.length>0&&(p+=`
`)):(v=[Vv(t),"#define SHADER_NAME "+t.shaderName,m,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+h,"#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularTintMap?"#define USE_SPECULARTINTMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_a).join(`
`),p=[d,Vv(t),"#define SHADER_NAME "+t.shaderName,m,"#define GAMMA_FACTOR "+h,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularTintMap?"#define USE_SPECULARTINTMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheenTint?"#define USE_SHEEN":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Br?"#define TONE_MAPPING":"",t.toneMapping!==Br?ke.tonemapping_pars_fragment:"",t.toneMapping!==Br?TR("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.format===ti?"#define OPAQUE":"",ke.encodings_pars_fragment,t.map?Ys("mapTexelToLinear",t.mapEncoding):"",t.matcap?Ys("matcapTexelToLinear",t.matcapEncoding):"",t.envMap?Ys("envMapTexelToLinear",t.envMapEncoding):"",t.emissiveMap?Ys("emissiveMapTexelToLinear",t.emissiveMapEncoding):"",t.specularTintMap?Ys("specularTintMapTexelToLinear",t.specularTintMapEncoding):"",t.lightMap?Ys("lightMapTexelToLinear",t.lightMapEncoding):"",bR("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_a).join(`
`)),o=kh(o),o=Bv(o,t),o=kv(o,t),a=kh(a),a=Bv(a,t),a=kv(a,t),o=Hv(o),a=Hv(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,v=["#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,p=["#define varying in",t.glslVersion===Y_?"":"out highp vec4 pc_fragColor;",t.glslVersion===Y_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=g+v+o,b=g+p+a,T=Dv(r,35633,x),S=Dv(r,35632,b);if(r.attachShader(_,T),r.attachShader(_,S),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_),n.debug.checkShaderErrors){const N=r.getProgramInfoLog(_).trim(),F=r.getShaderInfoLog(T).trim(),C=r.getShaderInfoLog(S).trim();let V=!0,O=!0;if(r.getProgramParameter(_,35714)===!1){V=!1;const H=Uv(r,T,"vertex"),$=Uv(r,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,35715)+`

Program Info Log: `+N+`
`+H+`
`+$)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(F===""||C==="")&&(O=!1);O&&(this.diagnostics={runnable:V,programLog:N,vertexShader:{log:F,prefix:v},fragmentShader:{log:C,prefix:p}})}r.deleteShader(T),r.deleteShader(S);let y;this.getUniforms=function(){return y===void 0&&(y=new fr(r,_)),y};let E;return this.getAttributes=function(){return E===void 0&&(E=SR(r,_)),E},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.name=t.shaderName,this.id=xR++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=S,this}function OR(n,e,t,i,r,s,o){const a=[],l=r.isWebGL2,c=r.logarithmicDepthBuffer,f=r.floatVertexTextures,u=r.maxVertexUniforms,h=r.vertexTextures;let d=r.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},_=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoat","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap","specularIntensityMap","specularTintMap","specularTintMapEncoding","roughnessMap","metalnessMap","gradientMap","alphaMap","alphaTest","combine","vertexColors","vertexAlphas","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","format","sheenTint","transmission","transmissionMap","thicknessMap"];function v(y){const N=y.skeleton.bones;if(f)return 1024;{const C=Math.floor((u-20)/4),V=Math.min(C,N.length);return V<N.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+N.length+" bones. This GPU supports "+V+"."),0):V}}function p(y){let E;return y&&y.isTexture?E=y.encoding:y&&y.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),E=y.texture.encoding):E=vt,E}function g(y,E,N,F,C){const V=F.fog,O=y.isMeshStandardMaterial?F.environment:null,H=(y.isMeshStandardMaterial?t:e).get(y.envMap||O),$=m[y.type],Y=C.isSkinnedMesh?v(C):0;y.precision!==null&&(d=r.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));let q,te;if($){const ne=ni[$];q=ne.vertexShader,te=ne.fragmentShader}else q=y.vertexShader,te=y.fragmentShader;const pe=n.getRenderTarget(),Te=y.alphaTest>0,de=y.clearcoat>0;return{isWebGL2:l,shaderID:$,shaderName:y.type,vertexShader:q,fragmentShader:te,defines:y.defines,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,instancing:C.isInstancedMesh===!0,instancingColor:C.isInstancedMesh===!0&&C.instanceColor!==null,supportsVertexTextures:h,outputEncoding:pe!==null?p(pe.texture):n.outputEncoding,map:!!y.map,mapEncoding:p(y.map),matcap:!!y.matcap,matcapEncoding:p(y.matcap),envMap:!!H,envMapMode:H&&H.mapping,envMapEncoding:p(H),envMapCubeUV:!!H&&(H.mapping===ec||H.mapping===Zf),lightMap:!!y.lightMap,lightMapEncoding:p(y.lightMap),aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,emissiveMapEncoding:p(y.emissiveMap),bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===oE,tangentSpaceNormalMap:y.normalMapType===er,clearcoat:de,clearcoatMap:de&&!!y.clearcoatMap,clearcoatRoughnessMap:de&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:de&&!!y.clearcoatNormalMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularTintMap:!!y.specularTintMap,specularTintMapEncoding:p(y.specularTintMap),alphaMap:!!y.alphaMap,alphaTest:Te,gradientMap:!!y.gradientMap,sheenTint:!!y.sheenTint&&(y.sheenTint.r>0||y.sheenTint.g>0||y.sheenTint.b>0),transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!C.geometry&&!!C.geometry.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!C.geometry&&!!C.geometry.attributes.color&&C.geometry.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularTintMap,uvsVertexOnly:!(!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatNormalMap||y.transmission>0||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularTintMap)&&!!y.displacementMap,fog:!!V,useFog:y.fog,fogExp2:V&&V.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:c,skinning:C.isSkinnedMesh===!0&&Y>0,maxBones:Y,useVertexTexture:f,morphTargets:!!C.geometry&&!!C.geometry.morphAttributes.position,morphNormals:!!C.geometry&&!!C.geometry.morphAttributes.normal,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,format:y.format,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:y.toneMapped?n.toneMapping:Br,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ei,flipSided:y.side===_t,depthPacking:y.depthPacking!==void 0?y.depthPacking:!1,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:l||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:l||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:l||i.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function x(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.fragmentShader),E.push(y.vertexShader)),y.defines!==void 0)for(const N in y.defines)E.push(N),E.push(y.defines[N]);if(y.isRawShaderMaterial===!1){for(let N=0;N<_.length;N++)E.push(y[_[N]]);E.push(n.outputEncoding),E.push(n.gammaFactor)}return E.push(y.customProgramCacheKey),E.join()}function b(y){const E=m[y.type];let N;if(E){const F=ni[E];N=Bs.clone(F.uniforms)}else N=y.uniforms;return N}function T(y,E){let N;for(let F=0,C=a.length;F<C;F++){const V=a[F];if(V.cacheKey===E){N=V,++N.usedTimes;break}}return N===void 0&&(N=new DR(n,E,y,s),a.push(N)),N}function S(y){if(--y.usedTimes==0){const E=a.indexOf(y);a[E]=a[a.length-1],a.pop(),y.destroy()}}return{getParameters:g,getProgramCacheKey:x,getUniforms:b,acquireProgram:T,releaseProgram:S,programs:a}}function UR(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function BR(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.program!==e.program?n.program.id-e.program.id:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Gv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Wv(n){const e=[];let t=0;const i=[],r=[],s=[],o={id:-1};function a(){t=0,i.length=0,r.length=0,s.length=0}function l(d,m,_,v,p,g){let x=e[t];const b=n.get(_);return x===void 0?(x={id:d.id,object:d,geometry:m,material:_,program:b.program||o,groupOrder:v,renderOrder:d.renderOrder,z:p,group:g},e[t]=x):(x.id=d.id,x.object=d,x.geometry=m,x.material=_,x.program=b.program||o,x.groupOrder=v,x.renderOrder=d.renderOrder,x.z=p,x.group=g),t++,x}function c(d,m,_,v,p,g){const x=l(d,m,_,v,p,g);_.transmission>0?r.push(x):_.transparent===!0?s.push(x):i.push(x)}function f(d,m,_,v,p,g){const x=l(d,m,_,v,p,g);_.transmission>0?r.unshift(x):_.transparent===!0?s.unshift(x):i.unshift(x)}function u(d,m){i.length>1&&i.sort(d||BR),r.length>1&&r.sort(m||Gv),s.length>1&&s.sort(m||Gv)}function h(){for(let d=t,m=e.length;d<m;d++){const _=e[d];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.program=null,_.group=null}}return{opaque:i,transmissive:r,transparent:s,init:a,push:c,unshift:f,finish:h,sort:u}}function kR(n){let e=new WeakMap;function t(r,s){let o;return e.has(r)===!1?(o=new Wv(n),e.set(r,[o])):s>=e.get(r).length?(o=new Wv(n),e.get(r).push(o)):o=e.get(r)[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}function HR(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new me};break;case"SpotLight":t={position:new L,direction:new L,color:new me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new me,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new me,groundColor:new me};break;case"RectAreaLight":t={color:new me,position:new L,halfWidth:new L,halfHeight:new L};break}return n[e.id]=t,t}}}function zR(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let VR=0;function GR(n,e){return(e.castShadow?1:0)-(n.castShadow?1:0)}function WR(n,e){const t=new HR,i=zR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let f=0;f<9;f++)r.probe.push(new L);const s=new L,o=new ye,a=new ye;function l(f,u){let h=0,d=0,m=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let _=0,v=0,p=0,g=0,x=0,b=0,T=0,S=0;f.sort(GR);const y=u!==!0?Math.PI:1;for(let N=0,F=f.length;N<F;N++){const C=f[N],V=C.color,O=C.intensity,H=C.distance,$=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=V.r*O*y,d+=V.g*O*y,m+=V.b*O*y;else if(C.isLightProbe)for(let Y=0;Y<9;Y++)r.probe[Y].addScaledVector(C.sh.coefficients[Y],O);else if(C.isDirectionalLight){const Y=t.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity*y),C.castShadow){const q=C.shadow,te=i.get(C);te.shadowBias=q.bias,te.shadowNormalBias=q.normalBias,te.shadowRadius=q.radius,te.shadowMapSize=q.mapSize,r.directionalShadow[_]=te,r.directionalShadowMap[_]=$,r.directionalShadowMatrix[_]=C.shadow.matrix,b++}r.directional[_]=Y,_++}else if(C.isSpotLight){const Y=t.get(C);if(Y.position.setFromMatrixPosition(C.matrixWorld),Y.color.copy(V).multiplyScalar(O*y),Y.distance=H,Y.coneCos=Math.cos(C.angle),Y.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),Y.decay=C.decay,C.castShadow){const q=C.shadow,te=i.get(C);te.shadowBias=q.bias,te.shadowNormalBias=q.normalBias,te.shadowRadius=q.radius,te.shadowMapSize=q.mapSize,r.spotShadow[p]=te,r.spotShadowMap[p]=$,r.spotShadowMatrix[p]=C.shadow.matrix,S++}r.spot[p]=Y,p++}else if(C.isRectAreaLight){const Y=t.get(C);Y.color.copy(V).multiplyScalar(O),Y.halfWidth.set(C.width*.5,0,0),Y.halfHeight.set(0,C.height*.5,0),r.rectArea[g]=Y,g++}else if(C.isPointLight){const Y=t.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity*y),Y.distance=C.distance,Y.decay=C.decay,C.castShadow){const q=C.shadow,te=i.get(C);te.shadowBias=q.bias,te.shadowNormalBias=q.normalBias,te.shadowRadius=q.radius,te.shadowMapSize=q.mapSize,te.shadowCameraNear=q.camera.near,te.shadowCameraFar=q.camera.far,r.pointShadow[v]=te,r.pointShadowMap[v]=$,r.pointShadowMatrix[v]=C.shadow.matrix,T++}r.point[v]=Y,v++}else if(C.isHemisphereLight){const Y=t.get(C);Y.skyColor.copy(C.color).multiplyScalar(O*y),Y.groundColor.copy(C.groundColor).multiplyScalar(O*y),r.hemi[x]=Y,x++}}g>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=he.LTC_FLOAT_1,r.rectAreaLTC2=he.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=he.LTC_HALF_1,r.rectAreaLTC2=he.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=d,r.ambient[2]=m;const E=r.hash;(E.directionalLength!==_||E.pointLength!==v||E.spotLength!==p||E.rectAreaLength!==g||E.hemiLength!==x||E.numDirectionalShadows!==b||E.numPointShadows!==T||E.numSpotShadows!==S)&&(r.directional.length=_,r.spot.length=p,r.rectArea.length=g,r.point.length=v,r.hemi.length=x,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=T,r.pointShadowMap.length=T,r.spotShadow.length=S,r.spotShadowMap.length=S,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=T,r.spotShadowMatrix.length=S,E.directionalLength=_,E.pointLength=v,E.spotLength=p,E.rectAreaLength=g,E.hemiLength=x,E.numDirectionalShadows=b,E.numPointShadows=T,E.numSpotShadows=S,r.version=VR++)}function c(f,u){let h=0,d=0,m=0,_=0,v=0;const p=u.matrixWorldInverse;for(let g=0,x=f.length;g<x;g++){const b=f[g];if(b.isDirectionalLight){const T=r.directional[h];T.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),h++}else if(b.isSpotLight){const T=r.spot[m];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),m++}else if(b.isRectAreaLight){const T=r.rectArea[_];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(p),a.identity(),o.copy(b.matrixWorld),o.premultiply(p),a.extractRotation(o),T.halfWidth.set(b.width*.5,0,0),T.halfHeight.set(0,b.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),_++}else if(b.isPointLight){const T=r.point[d];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(p),d++}else if(b.isHemisphereLight){const T=r.hemi[v];T.direction.setFromMatrixPosition(b.matrixWorld),T.direction.transformDirection(p),T.direction.normalize(),v++}}}return{setup:l,setupView:c,state:r}}function Xv(n,e){const t=new WR(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(u){i.push(u)}function a(u){r.push(u)}function l(u){t.setup(i,u)}function c(u){t.setupView(i,u)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function XR(n,e){let t=new WeakMap;function i(s,o=0){let a;return t.has(s)===!1?(a=new Xv(n,e),t.set(s,[a])):o>=t.get(s).length?(a=new Xv(n,e),t.get(s).push(a)):a=t.get(s)[o],a}function r(){t=new WeakMap}return{get:i,dispose:r}}class Yv extends It{constructor(e){super();this.type="MeshDepthMaterial",this.depthPacking=rE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}Yv.prototype.isMeshDepthMaterial=!0;class qv extends It{constructor(e){super();this.type="MeshDistanceMaterial",this.referencePosition=new L,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}qv.prototype.isMeshDistanceMaterial=!0;var YR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
uniform float samples;
#include <packing>
void main() {
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`,qR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`;function jv(n,e,t){let i=new Ec;const r=new ie,s=new ie,o=new Oe,a=new Yv({depthPacking:sE}),l=new qv,c={},f=t.maxTextureSize,u={0:_t,1:Ki,2:ei},h=new on({uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4},samples:{value:8}},vertexShader:qR,fragmentShader:YR}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const m=new Ze;m.setAttribute("position",new xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Dt(m,h),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=M_,this.render=function(b,T,S){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||b.length===0)return;const y=n.getRenderTarget(),E=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),F=n.state;F.setBlending(Zi),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);for(let C=0,V=b.length;C<V;C++){const O=b[C],H=O.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const $=H.getFrameExtents();if(r.multiply($),s.copy(H.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/$.x),r.x=s.x*$.x,H.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/$.y),r.y=s.y*$.y,H.mapSize.y=s.y)),H.map===null&&!H.isPointLightShadow&&this.type===na){const q={minFilter:Ct,magFilter:Ct,format:Qt};H.map=new fn(r.x,r.y,q),H.map.texture.name=O.name+".shadowMap",H.mapPass=new fn(r.x,r.y,q),H.camera.updateProjectionMatrix()}if(H.map===null){const q={minFilter:Lt,magFilter:Lt,format:Qt};H.map=new fn(r.x,r.y,q),H.map.texture.name=O.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const Y=H.getViewportCount();for(let q=0;q<Y;q++){const te=H.getViewport(q);o.set(s.x*te.x,s.y*te.y,s.x*te.z,s.y*te.w),F.viewport(o),H.updateMatrices(O,q),i=H.getFrustum(),x(T,S,H.camera,O,this.type)}!H.isPointLightShadow&&this.type===na&&p(H,S),H.needsUpdate=!1}v.needsUpdate=!1,n.setRenderTarget(y,E,N)};function p(b,T){const S=e.update(_);h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,h.uniforms.samples.value=b.blurSamples,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(T,null,S,h,_,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,d.uniforms.samples.value=b.blurSamples,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(T,null,S,d,_,null)}function g(b,T,S,y,E,N,F){let C=null;const V=y.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(V!==void 0?C=V:C=y.isPointLight===!0?l:a,n.localClippingEnabled&&S.clipShadows===!0&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0){const O=C.uuid,H=S.uuid;let $=c[O];$===void 0&&($={},c[O]=$);let Y=$[H];Y===void 0&&(Y=C.clone(),$[H]=Y),C=Y}return C.visible=S.visible,C.wireframe=S.wireframe,F===na?C.side=S.shadowSide!==null?S.shadowSide:S.side:C.side=S.shadowSide!==null?S.shadowSide:u[S.side],C.alphaMap=S.alphaMap,C.alphaTest=S.alphaTest,C.clipShadows=S.clipShadows,C.clippingPlanes=S.clippingPlanes,C.clipIntersection=S.clipIntersection,C.displacementMap=S.displacementMap,C.displacementScale=S.displacementScale,C.displacementBias=S.displacementBias,C.wireframeLinewidth=S.wireframeLinewidth,C.linewidth=S.linewidth,y.isPointLight===!0&&C.isMeshDistanceMaterial===!0&&(C.referencePosition.setFromMatrixPosition(y.matrixWorld),C.nearDistance=E,C.farDistance=N),C}function x(b,T,S,y,E){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&E===na)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,b.matrixWorld);const C=e.update(b),V=b.material;if(Array.isArray(V)){const O=C.groups;for(let H=0,$=O.length;H<$;H++){const Y=O[H],q=V[Y.materialIndex];if(q&&q.visible){const te=g(b,C,q,y,S.near,S.far,E);n.renderBufferDirect(S,null,C,te,b,Y)}}}else if(V.visible){const O=g(b,C,V,y,S.near,S.far,E);n.renderBufferDirect(S,null,C,O,b,null)}}const F=b.children;for(let C=0,V=F.length;C<V;C++)x(F[C],T,S,y,E)}}function jR(n,e,t){const i=t.isWebGL2;function r(){let D=!1;const ae=new Oe;let K=null;const le=new Oe(0,0,0,0);return{setMask:function(I){K!==I&&!D&&(n.colorMask(I,I,I,I),K=I)},setLocked:function(I){D=I},setClear:function(I,ue,Ue,Ne,ut){ut===!0&&(I*=Ne,ue*=Ne,Ue*=Ne),ae.set(I,ue,Ue,Ne),le.equals(ae)===!1&&(n.clearColor(I,ue,Ue,Ne),le.copy(ae))},reset:function(){D=!1,K=null,le.set(-1,0,0,0)}}}function s(){let D=!1,ae=null,K=null,le=null;return{setTest:function(I){I?fe(2929):ve(2929)},setMask:function(I){ae!==I&&!D&&(n.depthMask(I),ae=I)},setFunc:function(I){if(K!==I){if(I)switch(I){case qS:n.depthFunc(512);break;case jS:n.depthFunc(519);break;case QS:n.depthFunc(513);break;case Qf:n.depthFunc(515);break;case $S:n.depthFunc(514);break;case KS:n.depthFunc(518);break;case ZS:n.depthFunc(516);break;case JS:n.depthFunc(517);break;default:n.depthFunc(515)}else n.depthFunc(515);K=I}},setLocked:function(I){D=I},setClear:function(I){le!==I&&(n.clearDepth(I),le=I)},reset:function(){D=!1,ae=null,K=null,le=null}}}function o(){let D=!1,ae=null,K=null,le=null,I=null,ue=null,Ue=null,Ne=null,ut=null;return{setTest:function(Fe){D||(Fe?fe(2960):ve(2960))},setMask:function(Fe){ae!==Fe&&!D&&(n.stencilMask(Fe),ae=Fe)},setFunc:function(Fe,it,en){(K!==Fe||le!==it||I!==en)&&(n.stencilFunc(Fe,it,en),K=Fe,le=it,I=en)},setOp:function(Fe,it,en){(ue!==Fe||Ue!==it||Ne!==en)&&(n.stencilOp(Fe,it,en),ue=Fe,Ue=it,Ne=en)},setLocked:function(Fe){D=Fe},setClear:function(Fe){ut!==Fe&&(n.clearStencil(Fe),ut=Fe)},reset:function(){D=!1,ae=null,K=null,le=null,I=null,ue=null,Ue=null,Ne=null,ut=null}}}const a=new r,l=new s,c=new o;let f={},u=null,h={},d=null,m=!1,_=null,v=null,p=null,g=null,x=null,b=null,T=null,S=!1,y=null,E=null,N=null,F=null,C=null;const V=n.getParameter(35661);let O=!1,H=0;const $=n.getParameter(7938);$.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec($)[1]),O=H>=1):$.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),O=H>=2);let Y=null,q={};const te=n.getParameter(3088),pe=n.getParameter(2978),Te=new Oe().fromArray(te),de=new Oe().fromArray(pe);function Me(D,ae,K){const le=new Uint8Array(4),I=n.createTexture();n.bindTexture(D,I),n.texParameteri(D,10241,9728),n.texParameteri(D,10240,9728);for(let ue=0;ue<K;ue++)n.texImage2D(ae+ue,0,6408,1,1,0,6408,5121,le);return I}const ne={};ne[3553]=Me(3553,3553,1),ne[34067]=Me(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),fe(2929),l.setFunc(Qf),A(!1),R(T_),fe(2884),Ee(Zi);function fe(D){f[D]!==!0&&(n.enable(D),f[D]=!0)}function ve(D){f[D]!==!1&&(n.disable(D),f[D]=!1)}function Q(D){D!==u&&(n.bindFramebuffer(36160,D),u=D)}function xe(D,ae){return ae===null&&u!==null&&(ae=u),h[D]!==ae?(n.bindFramebuffer(D,ae),h[D]=ae,i&&(D===36009&&(h[36160]=ae),D===36160&&(h[36009]=ae)),!0):!1}function Se(D){return d!==D?(n.useProgram(D),d=D,!0):!1}const _e={[_s]:32774,[OS]:32778,[US]:32779};if(i)_e[E_]=32775,_e[L_]=32776;else{const D=e.get("EXT_blend_minmax");D!==null&&(_e[E_]=D.MIN_EXT,_e[L_]=D.MAX_EXT)}const ge={[BS]:0,[kS]:1,[HS]:768,[P_]:770,[YS]:776,[WS]:774,[VS]:772,[zS]:769,[R_]:771,[XS]:775,[GS]:773};function Ee(D,ae,K,le,I,ue,Ue,Ne){if(D===Zi){m===!0&&(ve(3042),m=!1);return}if(m===!1&&(fe(3042),m=!0),D!==DS){if(D!==_||Ne!==S){if((v!==_s||x!==_s)&&(n.blendEquation(32774),v=_s,x=_s),Ne)switch(D){case ia:n.blendFuncSeparate(1,771,1,771);break;case jf:n.blendFunc(1,1);break;case S_:n.blendFuncSeparate(0,0,769,771);break;case A_:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ia:n.blendFuncSeparate(770,771,1,771);break;case jf:n.blendFunc(770,1);break;case S_:n.blendFunc(0,769);break;case A_:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}p=null,g=null,b=null,T=null,_=D,S=Ne}return}I=I||ae,ue=ue||K,Ue=Ue||le,(ae!==v||I!==x)&&(n.blendEquationSeparate(_e[ae],_e[I]),v=ae,x=I),(K!==p||le!==g||ue!==b||Ue!==T)&&(n.blendFuncSeparate(ge[K],ge[le],ge[ue],ge[Ue]),p=K,g=le,b=ue,T=Ue),_=D,S=null}function J(D,ae){D.side===ei?ve(2884):fe(2884);let K=D.side===_t;ae&&(K=!K),A(K),D.blending===ia&&D.transparent===!1?Ee(Zi):Ee(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),a.setMask(D.colorWrite);const le=D.stencilWrite;c.setTest(le),le&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),z(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?fe(32926):ve(32926)}function A(D){y!==D&&(D?n.frontFace(2304):n.frontFace(2305),y=D)}function R(D){D!==FS?(fe(2884),D!==E&&(D===T_?n.cullFace(1029):D===IS?n.cullFace(1028):n.cullFace(1032))):ve(2884),E=D}function k(D){D!==N&&(O&&n.lineWidth(D),N=D)}function z(D,ae,K){D?(fe(32823),(F!==ae||C!==K)&&(n.polygonOffset(ae,K),F=ae,C=K)):ve(32823)}function w(D){D?fe(3089):ve(3089)}function M(D){D===void 0&&(D=33984+V-1),Y!==D&&(n.activeTexture(D),Y=D)}function U(D,ae){Y===null&&M();let K=q[Y];K===void 0&&(K={type:void 0,texture:void 0},q[Y]=K),(K.type!==D||K.texture!==ae)&&(n.bindTexture(D,ae||ne[D]),K.type=D,K.texture=ae)}function B(){const D=q[Y];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function X(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function W(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function se(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(D){Te.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),Te.copy(D))}function oe(D){de.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),de.copy(D))}function re(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},Y=null,q={},u=null,h={},d=null,m=!1,_=null,v=null,p=null,g=null,x=null,b=null,T=null,S=!1,y=null,E=null,N=null,F=null,C=null,Te.set(0,0,n.canvas.width,n.canvas.height),de.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:fe,disable:ve,bindFramebuffer:xe,bindXRFramebuffer:Q,useProgram:Se,setBlending:Ee,setMaterial:J,setFlipSided:A,setCullFace:R,setLineWidth:k,setPolygonOffset:z,setScissorTest:w,activeTexture:M,bindTexture:U,unbindTexture:B,compressedTexImage2D:X,texImage2D:W,texImage3D:se,scissor:ee,viewport:oe,reset:re}}function QR(n,e,t,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,f=r.maxTextureSize,u=r.maxSamples,h=new WeakMap;let d,m=!1;try{m=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(w,M){return m?new OffscreenCanvas(w,M):document.createElementNS("http://www.w3.org/1999/xhtml","canvas")}function v(w,M,U,B){let X=1;if((w.width>B||w.height>B)&&(X=B/Math.max(w.width,w.height)),X<1||M===!0)if(typeof HTMLImageElement!="undefined"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&w instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&w instanceof ImageBitmap){const W=M?j_:Math.floor,se=W(X*w.width),ee=W(X*w.height);d===void 0&&(d=_(se,ee));const oe=U?_(se,ee):d;return oe.width=se,oe.height=ee,oe.getContext("2d").drawImage(w,0,0,se,ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+se+"x"+ee+")."),oe}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function p(w){return lh(w.width)&&lh(w.height)}function g(w){return a?!1:w.wrapS!==un||w.wrapT!==un||w.minFilter!==Lt&&w.minFilter!==Ct}function x(w,M){return w.generateMipmaps&&M&&w.minFilter!==Lt&&w.minFilter!==Ct}function b(w,M,U,B,X=1){n.generateMipmap(w);const W=i.get(M);W.__maxMipLevel=Math.log2(Math.max(U,B,X))}function T(w,M,U){if(a===!1)return M;if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let B=M;return M===6403&&(U===5126&&(B=33326),U===5131&&(B=33325),U===5121&&(B=33321)),M===6407&&(U===5126&&(B=34837),U===5131&&(B=34843),U===5121&&(B=32849)),M===6408&&(U===5126&&(B=34836),U===5131&&(B=34842),U===5121&&(B=32856)),(B===33325||B===33326||B===34842||B===34836)&&e.get("EXT_color_buffer_float"),B}function S(w){return w===Lt||w===Jf||w===eh?9728:9729}function y(w){const M=w.target;M.removeEventListener("dispose",y),N(M),M.isVideoTexture&&h.delete(M),o.memory.textures--}function E(w){const M=w.target;M.removeEventListener("dispose",E),F(M)}function N(w){const M=i.get(w);M.__webglInit!==void 0&&(n.deleteTexture(M.__webglTexture),i.remove(w))}function F(w){const M=w.texture,U=i.get(w),B=i.get(M);if(!!w){if(B.__webglTexture!==void 0&&(n.deleteTexture(B.__webglTexture),o.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let X=0;X<6;X++)n.deleteFramebuffer(U.__webglFramebuffer[X]),U.__webglDepthbuffer&&n.deleteRenderbuffer(U.__webglDepthbuffer[X]);else n.deleteFramebuffer(U.__webglFramebuffer),U.__webglDepthbuffer&&n.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&n.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer&&n.deleteRenderbuffer(U.__webglColorRenderbuffer),U.__webglDepthRenderbuffer&&n.deleteRenderbuffer(U.__webglDepthRenderbuffer);if(w.isWebGLMultipleRenderTargets)for(let X=0,W=M.length;X<W;X++){const se=i.get(M[X]);se.__webglTexture&&(n.deleteTexture(se.__webglTexture),o.memory.textures--),i.remove(M[X])}i.remove(M),i.remove(w)}}let C=0;function V(){C=0}function O(){const w=C;return w>=l&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l),C+=1,w}function H(w,M){const U=i.get(w);if(w.isVideoTexture&&J(w),w.version>0&&U.__version!==w.version){const B=w.image;if(B===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(B.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Me(U,w,M);return}}t.activeTexture(33984+M),t.bindTexture(3553,U.__webglTexture)}function $(w,M){const U=i.get(w);if(w.version>0&&U.__version!==w.version){Me(U,w,M);return}t.activeTexture(33984+M),t.bindTexture(35866,U.__webglTexture)}function Y(w,M){const U=i.get(w);if(w.version>0&&U.__version!==w.version){Me(U,w,M);return}t.activeTexture(33984+M),t.bindTexture(32879,U.__webglTexture)}function q(w,M){const U=i.get(w);if(w.version>0&&U.__version!==w.version){ne(U,w,M);return}t.activeTexture(33984+M),t.bindTexture(34067,U.__webglTexture)}const te={[vs]:10497,[un]:33071,[tc]:33648},pe={[Lt]:9728,[Jf]:9984,[eh]:9986,[Ct]:9729,[I_]:9985,[xs]:9987};function Te(w,M,U){if(U?(n.texParameteri(w,10242,te[M.wrapS]),n.texParameteri(w,10243,te[M.wrapT]),(w===32879||w===35866)&&n.texParameteri(w,32882,te[M.wrapR]),n.texParameteri(w,10240,pe[M.magFilter]),n.texParameteri(w,10241,pe[M.minFilter])):(n.texParameteri(w,10242,33071),n.texParameteri(w,10243,33071),(w===32879||w===35866)&&n.texParameteri(w,32882,33071),(M.wrapS!==un||M.wrapT!==un)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(w,10240,S(M.magFilter)),n.texParameteri(w,10241,S(M.minFilter)),M.minFilter!==Lt&&M.minFilter!==Ct&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");if(M.type===Ji&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===bs&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(n.texParameterf(w,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function de(w,M){w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",y),w.__webglTexture=n.createTexture(),o.memory.textures++)}function Me(w,M,U){let B=3553;M.isDataTexture2DArray&&(B=35866),M.isDataTexture3D&&(B=32879),de(w,M),t.activeTexture(33984+U),t.bindTexture(B,w.__webglTexture),n.pixelStorei(37440,M.flipY),n.pixelStorei(37441,M.premultiplyAlpha),n.pixelStorei(3317,M.unpackAlignment),n.pixelStorei(37443,0);const X=g(M)&&p(M.image)===!1,W=v(M.image,X,!1,f),se=p(W)||a,ee=s.convert(M.format);let oe=s.convert(M.type),re=T(M.internalFormat,ee,oe);Te(B,M,se);let D;const ae=M.mipmaps;if(M.isDepthTexture)re=6402,a?M.type===Ji?re=36012:M.type===ic?re=33190:M.type===ra?re=35056:re=33189:M.type===Ji&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Ts&&re===6402&&M.type!==nc&&M.type!==ic&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=nc,oe=s.convert(M.type)),M.format===sa&&re===6402&&(re=34041,M.type!==ra&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=ra,oe=s.convert(M.type))),t.texImage2D(3553,0,re,W.width,W.height,0,ee,oe,null);else if(M.isDataTexture)if(ae.length>0&&se){for(let K=0,le=ae.length;K<le;K++)D=ae[K],t.texImage2D(3553,K,re,D.width,D.height,0,ee,oe,D.data);M.generateMipmaps=!1,w.__maxMipLevel=ae.length-1}else t.texImage2D(3553,0,re,W.width,W.height,0,ee,oe,W.data),w.__maxMipLevel=0;else if(M.isCompressedTexture){for(let K=0,le=ae.length;K<le;K++)D=ae[K],M.format!==Qt&&M.format!==ti?ee!==null?t.compressedTexImage2D(3553,K,re,D.width,D.height,0,D.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):t.texImage2D(3553,K,re,D.width,D.height,0,ee,oe,D.data);w.__maxMipLevel=ae.length-1}else if(M.isDataTexture2DArray)t.texImage3D(35866,0,re,W.width,W.height,W.depth,0,ee,oe,W.data),w.__maxMipLevel=0;else if(M.isDataTexture3D)t.texImage3D(32879,0,re,W.width,W.height,W.depth,0,ee,oe,W.data),w.__maxMipLevel=0;else if(ae.length>0&&se){for(let K=0,le=ae.length;K<le;K++)D=ae[K],t.texImage2D(3553,K,re,ee,oe,D);M.generateMipmaps=!1,w.__maxMipLevel=ae.length-1}else t.texImage2D(3553,0,re,ee,oe,W),w.__maxMipLevel=0;x(M,se)&&b(B,M,W.width,W.height),w.__version=M.version,M.onUpdate&&M.onUpdate(M)}function ne(w,M,U){if(M.image.length!==6)return;de(w,M),t.activeTexture(33984+U),t.bindTexture(34067,w.__webglTexture),n.pixelStorei(37440,M.flipY),n.pixelStorei(37441,M.premultiplyAlpha),n.pixelStorei(3317,M.unpackAlignment),n.pixelStorei(37443,0);const B=M&&(M.isCompressedTexture||M.image[0].isCompressedTexture),X=M.image[0]&&M.image[0].isDataTexture,W=[];for(let K=0;K<6;K++)!B&&!X?W[K]=v(M.image[K],!1,!0,c):W[K]=X?M.image[K].image:M.image[K];const se=W[0],ee=p(se)||a,oe=s.convert(M.format),re=s.convert(M.type),D=T(M.internalFormat,oe,re);Te(34067,M,ee);let ae;if(B){for(let K=0;K<6;K++){ae=W[K].mipmaps;for(let le=0;le<ae.length;le++){const I=ae[le];M.format!==Qt&&M.format!==ti?oe!==null?t.compressedTexImage2D(34069+K,le,D,I.width,I.height,0,I.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):t.texImage2D(34069+K,le,D,I.width,I.height,0,oe,re,I.data)}}w.__maxMipLevel=ae.length-1}else{ae=M.mipmaps;for(let K=0;K<6;K++)if(X){t.texImage2D(34069+K,0,D,W[K].width,W[K].height,0,oe,re,W[K].data);for(let le=0;le<ae.length;le++){const ue=ae[le].image[K].image;t.texImage2D(34069+K,le+1,D,ue.width,ue.height,0,oe,re,ue.data)}}else{t.texImage2D(34069+K,0,D,oe,re,W[K]);for(let le=0;le<ae.length;le++){const I=ae[le];t.texImage2D(34069+K,le+1,D,oe,re,I.image[K])}}w.__maxMipLevel=ae.length}x(M,ee)&&b(34067,M,se.width,se.height),w.__version=M.version,M.onUpdate&&M.onUpdate(M)}function fe(w,M,U,B,X){const W=s.convert(U.format),se=s.convert(U.type),ee=T(U.internalFormat,W,se);X===32879||X===35866?t.texImage3D(X,0,ee,M.width,M.height,M.depth,0,W,se,null):t.texImage2D(X,0,ee,M.width,M.height,0,W,se,null),t.bindFramebuffer(36160,w),n.framebufferTexture2D(36160,B,X,i.get(U).__webglTexture,0),t.bindFramebuffer(36160,null)}function ve(w,M,U){if(n.bindRenderbuffer(36161,w),M.depthBuffer&&!M.stencilBuffer){let B=33189;if(U){const X=M.depthTexture;X&&X.isDepthTexture&&(X.type===Ji?B=36012:X.type===ic&&(B=33190));const W=Ee(M);n.renderbufferStorageMultisample(36161,W,B,M.width,M.height)}else n.renderbufferStorage(36161,B,M.width,M.height);n.framebufferRenderbuffer(36160,36096,36161,w)}else if(M.depthBuffer&&M.stencilBuffer){if(U){const B=Ee(M);n.renderbufferStorageMultisample(36161,B,35056,M.width,M.height)}else n.renderbufferStorage(36161,34041,M.width,M.height);n.framebufferRenderbuffer(36160,33306,36161,w)}else{const B=M.isWebGLMultipleRenderTargets===!0?M.texture[0]:M.texture,X=s.convert(B.format),W=s.convert(B.type),se=T(B.internalFormat,X,W);if(U){const ee=Ee(M);n.renderbufferStorageMultisample(36161,ee,se,M.width,M.height)}else n.renderbufferStorage(36161,se,M.width,M.height)}n.bindRenderbuffer(36161,null)}function Q(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),H(M.depthTexture,0);const B=i.get(M.depthTexture).__webglTexture;if(M.depthTexture.format===Ts)n.framebufferTexture2D(36160,36096,3553,B,0);else if(M.depthTexture.format===sa)n.framebufferTexture2D(36160,33306,3553,B,0);else throw new Error("Unknown depthTexture format")}function xe(w){const M=i.get(w),U=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture){if(U)throw new Error("target.depthTexture not supported in Cube render targets");Q(M.__webglFramebuffer,w)}else if(U){M.__webglDepthbuffer=[];for(let B=0;B<6;B++)t.bindFramebuffer(36160,M.__webglFramebuffer[B]),M.__webglDepthbuffer[B]=n.createRenderbuffer(),ve(M.__webglDepthbuffer[B],w,!1)}else t.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=n.createRenderbuffer(),ve(M.__webglDepthbuffer,w,!1);t.bindFramebuffer(36160,null)}function Se(w){const M=w.texture,U=i.get(w),B=i.get(M);w.addEventListener("dispose",E),w.isWebGLMultipleRenderTargets!==!0&&(B.__webglTexture=n.createTexture(),B.__version=M.version,o.memory.textures++);const X=w.isWebGLCubeRenderTarget===!0,W=w.isWebGLMultipleRenderTargets===!0,se=w.isWebGLMultisampleRenderTarget===!0,ee=M.isDataTexture3D||M.isDataTexture2DArray,oe=p(w)||a;if(a&&M.format===ti&&(M.type===Ji||M.type===bs)&&(M.format=Qt,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),X){U.__webglFramebuffer=[];for(let re=0;re<6;re++)U.__webglFramebuffer[re]=n.createFramebuffer()}else if(U.__webglFramebuffer=n.createFramebuffer(),W)if(r.drawBuffers){const re=w.texture;for(let D=0,ae=re.length;D<ae;D++){const K=i.get(re[D]);K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");else if(se)if(a){U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=n.createRenderbuffer(),n.bindRenderbuffer(36161,U.__webglColorRenderbuffer);const re=s.convert(M.format),D=s.convert(M.type),ae=T(M.internalFormat,re,D),K=Ee(w);n.renderbufferStorageMultisample(36161,K,ae,w.width,w.height),t.bindFramebuffer(36160,U.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064,36161,U.__webglColorRenderbuffer),n.bindRenderbuffer(36161,null),w.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),ve(U.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(X){t.bindTexture(34067,B.__webglTexture),Te(34067,M,oe);for(let re=0;re<6;re++)fe(U.__webglFramebuffer[re],w,M,36064,34069+re);x(M,oe)&&b(34067,M,w.width,w.height),t.unbindTexture()}else if(W){const re=w.texture;for(let D=0,ae=re.length;D<ae;D++){const K=re[D],le=i.get(K);t.bindTexture(3553,le.__webglTexture),Te(3553,K,oe),fe(U.__webglFramebuffer,w,K,36064+D,3553),x(K,oe)&&b(3553,K,w.width,w.height)}t.unbindTexture()}else{let re=3553;ee&&(a?re=M.isDataTexture3D?32879:35866:console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")),t.bindTexture(re,B.__webglTexture),Te(re,M,oe),fe(U.__webglFramebuffer,w,M,36064,re),x(M,oe)&&b(re,M,w.width,w.height,w.depth),t.unbindTexture()}w.depthBuffer&&xe(w)}function _e(w){const M=p(w)||a,U=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let B=0,X=U.length;B<X;B++){const W=U[B];if(x(W,M)){const se=w.isWebGLCubeRenderTarget?34067:3553,ee=i.get(W).__webglTexture;t.bindTexture(se,ee),b(se,W,w.width,w.height),t.unbindTexture()}}}function ge(w){if(w.isWebGLMultisampleRenderTarget)if(a){const M=w.width,U=w.height;let B=16384;w.depthBuffer&&(B|=256),w.stencilBuffer&&(B|=1024);const X=i.get(w);t.bindFramebuffer(36008,X.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,X.__webglFramebuffer),n.blitFramebuffer(0,0,M,U,0,0,M,U,B,9728),t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,X.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function Ee(w){return a&&w.isWebGLMultisampleRenderTarget?Math.min(u,w.samples):0}function J(w){const M=o.render.frame;h.get(w)!==M&&(h.set(w,M),w.update())}let A=!1,R=!1;function k(w,M){w&&w.isWebGLRenderTarget&&(A===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),A=!0),w=w.texture),H(w,M)}function z(w,M){w&&w.isWebGLCubeRenderTarget&&(R===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),R=!0),w=w.texture),q(w,M)}this.allocateTextureUnit=O,this.resetTextureUnits=V,this.setTexture2D=H,this.setTexture2DArray=$,this.setTexture3D=Y,this.setTextureCube=q,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=_e,this.updateMultisampleRenderTarget=ge,this.safeSetTexture2D=k,this.safeSetTextureCube=z}function $R(n,e,t){const i=t.isWebGL2;function r(s){let o;if(s===ys)return 5121;if(s===cA)return 32819;if(s===uA)return 32820;if(s===fA)return 33635;if(s===oA)return 5120;if(s===aA)return 5122;if(s===nc)return 5123;if(s===lA)return 5124;if(s===ic)return 5125;if(s===Ji)return 5126;if(s===bs)return i?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===hA)return 6406;if(s===ti)return 6407;if(s===Qt)return 6408;if(s===dA)return 6409;if(s===pA)return 6410;if(s===Ts)return 6402;if(s===sa)return 34041;if(s===gA)return 6403;if(s===_A)return 36244;if(s===vA)return 33319;if(s===xA)return 33320;if(s===yA)return 36248;if(s===bA)return 36249;if(s===N_||s===D_||s===O_||s===U_)if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===N_)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===D_)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===O_)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===U_)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===B_||s===k_||s===H_||s===z_)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===B_)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===k_)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===H_)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===z_)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===TA)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if((s===V_||s===G_)&&(o=e.get("WEBGL_compressed_texture_etc"),o!==null)){if(s===V_)return o.COMPRESSED_RGB8_ETC2;if(s===G_)return o.COMPRESSED_RGBA8_ETC2_EAC}if(s===MA||s===wA||s===SA||s===AA||s===EA||s===LA||s===PA||s===RA||s===CA||s===FA||s===IA||s===NA||s===DA||s===OA||s===BA||s===kA||s===HA||s===zA||s===VA||s===GA||s===WA||s===XA||s===YA||s===qA||s===jA||s===QA||s===$A||s===KA)return o=e.get("WEBGL_compressed_texture_astc"),o!==null?s:null;if(s===UA)return o=e.get("EXT_texture_compression_bptc"),o!==null?s:null;if(s===ra)return i?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:r}}class Qv extends Kt{constructor(e=[]){super();this.cameras=e}}Qv.prototype.isArrayCamera=!0;class hr extends We{constructor(){super();this.type="Group"}}hr.prototype.isGroup=!0;const KR={type:"move"};class Hh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(a!==null&&(r=t.getPose(e.targetRaySpace,i),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(KR))),c&&e.hand){o=!0;for(const _ of e.hand.values()){const v=t.getJointPose(_,i);if(c.joints[_.jointName]===void 0){const g=new hr;g.matrixAutoUpdate=!1,g.visible=!1,c.joints[_.jointName]=g,c.add(g)}const p=c.joints[_.jointName];v!==null&&(p.matrix.fromArray(v.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.jointRadius=v.radius),p.visible=v!==null}const f=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=f.position.distanceTo(u.position),d=.02,m=.005;c.inputState.pinching&&h>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}}class ZR extends tr{constructor(e,t){super();const i=this,r=e.state;let s=null,o=1,a=null,l="local-floor",c=null,f=null,u=null,h=null,d=null,m=!1,_=null,v=null,p=null,g=null,x=null,b=null;const T=[],S=new Map,y=new Kt;y.layers.enable(1),y.viewport=new Oe;const E=new Kt;E.layers.enable(2),E.viewport=new Oe;const N=[y,E],F=new Qv;F.layers.enable(1),F.layers.enable(2);let C=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let fe=T[ne];return fe===void 0&&(fe=new Hh,T[ne]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(ne){let fe=T[ne];return fe===void 0&&(fe=new Hh,T[ne]=fe),fe.getGripSpace()},this.getHand=function(ne){let fe=T[ne];return fe===void 0&&(fe=new Hh,T[ne]=fe),fe.getHandSpace()};function O(ne){const fe=S.get(ne.inputSource);fe&&fe.dispatchEvent({type:ne.type,data:ne.inputSource})}function H(){S.forEach(function(ne,fe){ne.disconnect(fe)}),S.clear(),C=null,V=null,r.bindXRFramebuffer(null),e.setRenderTarget(e.getRenderTarget()),u&&t.deleteFramebuffer(u),_&&t.deleteFramebuffer(_),v&&t.deleteRenderbuffer(v),p&&t.deleteRenderbuffer(p),u=null,_=null,v=null,p=null,d=null,h=null,f=null,s=null,Me.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){o=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){l=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return a},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ne){if(s=ne,s!==null){s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",H),s.addEventListener("inputsourceschange",$);const fe=t.getContextAttributes();if(fe.xrCompatible!==!0&&await t.makeXRCompatible(),s.renderState.layers===void 0){const ve={antialias:fe.antialias,alpha:fe.alpha,depth:fe.depth,stencil:fe.stencil,framebufferScaleFactor:o};d=new XRWebGLLayer(s,t,ve),s.updateRenderState({baseLayer:d})}else if(t instanceof WebGLRenderingContext){const ve={antialias:!0,alpha:fe.alpha,depth:fe.depth,stencil:fe.stencil,framebufferScaleFactor:o};d=new XRWebGLLayer(s,t,ve),s.updateRenderState({layers:[d]})}else{m=fe.antialias;let ve=null;fe.depth&&(b=256,fe.stencil&&(b|=1024),x=fe.stencil?33306:36096,ve=fe.stencil?35056:33190);const Q={colorFormat:fe.alpha?32856:32849,depthFormat:ve,scaleFactor:o};f=new XRWebGLBinding(s,t),h=f.createProjectionLayer(Q),u=t.createFramebuffer(),s.updateRenderState({layers:[h]}),m&&(_=t.createFramebuffer(),v=t.createRenderbuffer(),t.bindRenderbuffer(36161,v),t.renderbufferStorageMultisample(36161,4,32856,h.textureWidth,h.textureHeight),r.bindFramebuffer(36160,_),t.framebufferRenderbuffer(36160,36064,36161,v),t.bindRenderbuffer(36161,null),ve!==null&&(p=t.createRenderbuffer(),t.bindRenderbuffer(36161,p),t.renderbufferStorageMultisample(36161,4,ve,h.textureWidth,h.textureHeight),t.framebufferRenderbuffer(36160,x,36161,p),t.bindRenderbuffer(36161,null)),r.bindFramebuffer(36160,null))}a=await s.requestReferenceSpace(l),Me.setContext(s),Me.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function $(ne){const fe=s.inputSources;for(let ve=0;ve<T.length;ve++)S.set(fe[ve],T[ve]);for(let ve=0;ve<ne.removed.length;ve++){const Q=ne.removed[ve],xe=S.get(Q);xe&&(xe.dispatchEvent({type:"disconnected",data:Q}),S.delete(Q))}for(let ve=0;ve<ne.added.length;ve++){const Q=ne.added[ve],xe=S.get(Q);xe&&xe.dispatchEvent({type:"connected",data:Q})}}const Y=new L,q=new L;function te(ne,fe,ve){Y.setFromMatrixPosition(fe.matrixWorld),q.setFromMatrixPosition(ve.matrixWorld);const Q=Y.distanceTo(q),xe=fe.projectionMatrix.elements,Se=ve.projectionMatrix.elements,_e=xe[14]/(xe[10]-1),ge=xe[14]/(xe[10]+1),Ee=(xe[9]+1)/xe[5],J=(xe[9]-1)/xe[5],A=(xe[8]-1)/xe[0],R=(Se[8]+1)/Se[0],k=_e*A,z=_e*R,w=Q/(-A+R),M=w*-A;fe.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(M),ne.translateZ(w),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert();const U=_e+w,B=ge+w,X=k-M,W=z+(Q-M),se=Ee*ge/B*U,ee=J*ge/B*U;ne.projectionMatrix.makePerspective(X,W,se,ee,U,B)}function pe(ne,fe){fe===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(fe.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(s===null)return;F.near=E.near=y.near=ne.near,F.far=E.far=y.far=ne.far,(C!==F.near||V!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),C=F.near,V=F.far);const fe=ne.parent,ve=F.cameras;pe(F,fe);for(let xe=0;xe<ve.length;xe++)pe(ve[xe],fe);F.matrixWorld.decompose(F.position,F.quaternion,F.scale),ne.position.copy(F.position),ne.quaternion.copy(F.quaternion),ne.scale.copy(F.scale),ne.matrix.copy(F.matrix),ne.matrixWorld.copy(F.matrixWorld);const Q=ne.children;for(let xe=0,Se=Q.length;xe<Se;xe++)Q[xe].updateMatrixWorld(!0);ve.length===2?te(F,y,E):F.projectionMatrix.copy(y.projectionMatrix)},this.getCamera=function(){return F},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(ne){h!==null&&(h.fixedFoveation=ne),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ne)};let Te=null;function de(ne,fe){if(c=fe.getViewerPose(a),g=fe,c!==null){const Q=c.views;d!==null&&r.bindXRFramebuffer(d.framebuffer);let xe=!1;Q.length!==F.cameras.length&&(F.cameras.length=0,xe=!0);for(let Se=0;Se<Q.length;Se++){const _e=Q[Se];let ge=null;if(d!==null)ge=d.getViewport(_e);else{const J=f.getViewSubImage(h,_e);r.bindXRFramebuffer(u),J.depthStencilTexture!==void 0&&t.framebufferTexture2D(36160,x,3553,J.depthStencilTexture,0),t.framebufferTexture2D(36160,36064,3553,J.colorTexture,0),ge=J.viewport}const Ee=N[Se];Ee.matrix.fromArray(_e.transform.matrix),Ee.projectionMatrix.fromArray(_e.projectionMatrix),Ee.viewport.set(ge.x,ge.y,ge.width,ge.height),Se===0&&F.matrix.copy(Ee.matrix),xe===!0&&F.cameras.push(Ee)}m&&(r.bindXRFramebuffer(_),b!==null&&t.clear(b))}const ve=s.inputSources;for(let Q=0;Q<T.length;Q++){const xe=T[Q],Se=ve[Q];xe.update(Se,fe,a)}if(Te&&Te(ne,fe),m){const Q=h.textureWidth,xe=h.textureHeight;r.bindFramebuffer(36008,_),r.bindFramebuffer(36009,u),t.invalidateFramebuffer(36008,[x]),t.invalidateFramebuffer(36009,[x]),t.blitFramebuffer(0,0,Q,xe,0,0,Q,xe,16384,9728),t.invalidateFramebuffer(36008,[36064]),r.bindFramebuffer(36008,null),r.bindFramebuffer(36009,null),r.bindFramebuffer(36160,_)}g=null}const Me=new dv;Me.setAnimationLoop(de),this.setAnimationLoop=function(ne){Te=ne},this.dispose=function(){}}}function JR(n){function e(p,g){p.fogColor.value.copy(g.color),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function t(p,g,x,b,T){g.isMeshBasicMaterial?i(p,g):g.isMeshLambertMaterial?(i(p,g),l(p,g)):g.isMeshToonMaterial?(i(p,g),f(p,g)):g.isMeshPhongMaterial?(i(p,g),c(p,g)):g.isMeshStandardMaterial?(i(p,g),g.isMeshPhysicalMaterial?h(p,g,T):u(p,g)):g.isMeshMatcapMaterial?(i(p,g),d(p,g)):g.isMeshDepthMaterial?(i(p,g),m(p,g)):g.isMeshDistanceMaterial?(i(p,g),_(p,g)):g.isMeshNormalMaterial?(i(p,g),v(p,g)):g.isLineBasicMaterial?(r(p,g),g.isLineDashedMaterial&&s(p,g)):g.isPointsMaterial?o(p,g,x,b):g.isSpriteMaterial?a(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function i(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map),g.alphaMap&&(p.alphaMap.value=g.alphaMap),g.specularMap&&(p.specularMap.value=g.specularMap),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const x=n.get(g).envMap;if(x){p.envMap.value=x,p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio;const S=n.get(x).__maxMipLevel;S!==void 0&&(p.maxMipLevel.value=S)}g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity);let b;g.map?b=g.map:g.specularMap?b=g.specularMap:g.displacementMap?b=g.displacementMap:g.normalMap?b=g.normalMap:g.bumpMap?b=g.bumpMap:g.roughnessMap?b=g.roughnessMap:g.metalnessMap?b=g.metalnessMap:g.alphaMap?b=g.alphaMap:g.emissiveMap?b=g.emissiveMap:g.clearcoatMap?b=g.clearcoatMap:g.clearcoatNormalMap?b=g.clearcoatNormalMap:g.clearcoatRoughnessMap?b=g.clearcoatRoughnessMap:g.specularIntensityMap?b=g.specularIntensityMap:g.specularTintMap?b=g.specularTintMap:g.transmissionMap?b=g.transmissionMap:g.thicknessMap&&(b=g.thicknessMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),p.uvTransform.value.copy(b.matrix));let T;g.aoMap?T=g.aoMap:g.lightMap&&(T=g.lightMap),T!==void 0&&(T.isWebGLRenderTarget&&(T=T.texture),T.matrixAutoUpdate===!0&&T.updateMatrix(),p.uv2Transform.value.copy(T.matrix))}function r(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity}function s(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function o(p,g,x,b){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*x,p.scale.value=b*.5,g.map&&(p.map.value=g.map),g.alphaMap&&(p.alphaMap.value=g.alphaMap),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let T;g.map?T=g.map:g.alphaMap&&(T=g.alphaMap),T!==void 0&&(T.matrixAutoUpdate===!0&&T.updateMatrix(),p.uvTransform.value.copy(T.matrix))}function a(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map),g.alphaMap&&(p.alphaMap.value=g.alphaMap),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let x;g.map?x=g.map:g.alphaMap&&(x=g.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uvTransform.value.copy(x.matrix))}function l(p,g){g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap)}function c(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap),g.bumpMap&&(p.bumpMap.value=g.bumpMap,p.bumpScale.value=g.bumpScale,g.side===_t&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,p.normalScale.value.copy(g.normalScale),g.side===_t&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias)}function f(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap),g.bumpMap&&(p.bumpMap.value=g.bumpMap,p.bumpScale.value=g.bumpScale,g.side===_t&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,p.normalScale.value.copy(g.normalScale),g.side===_t&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias)}function u(p,g){p.roughness.value=g.roughness,p.metalness.value=g.metalness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap),g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap),g.bumpMap&&(p.bumpMap.value=g.bumpMap,p.bumpScale.value=g.bumpScale,g.side===_t&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,p.normalScale.value.copy(g.normalScale),g.side===_t&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),n.get(g).envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function h(p,g,x){u(p,g),p.ior.value=g.ior,g.sheenTint&&p.sheenTint.value.copy(g.sheenTint),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap),g.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),p.clearcoatNormalMap.value=g.clearcoatNormalMap,g.side===_t&&p.clearcoatNormalScale.value.negate())),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap),p.attenuationDistance.value=g.attenuationDistance,p.attenuationTint.value.copy(g.attenuationTint)),p.specularIntensity.value=g.specularIntensity,p.specularTint.value.copy(g.specularTint),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap),g.specularTintMap&&(p.specularTintMap.value=g.specularTintMap)}function d(p,g){g.matcap&&(p.matcap.value=g.matcap),g.bumpMap&&(p.bumpMap.value=g.bumpMap,p.bumpScale.value=g.bumpScale,g.side===_t&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,p.normalScale.value.copy(g.normalScale),g.side===_t&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias)}function m(p,g){g.displacementMap&&(p.displacementMap.value=g.displacementMap,p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias)}function _(p,g){g.displacementMap&&(p.displacementMap.value=g.displacementMap,p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),p.referencePosition.value.copy(g.referencePosition),p.nearDistance.value=g.nearDistance,p.farDistance.value=g.farDistance}function v(p,g){g.bumpMap&&(p.bumpMap.value=g.bumpMap,p.bumpScale.value=g.bumpScale,g.side===_t&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,p.normalScale.value.copy(g.normalScale),g.side===_t&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:t}}function eC(){const n=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");return n.style.display="block",n}function Je(n={}){const e=n.canvas!==void 0?n.canvas:eC(),t=n.context!==void 0?n.context:null,i=n.alpha!==void 0?n.alpha:!1,r=n.depth!==void 0?n.depth:!0,s=n.stencil!==void 0?n.stencil:!0,o=n.antialias!==void 0?n.antialias:!1,a=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,l=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,c=n.powerPreference!==void 0?n.powerPreference:"default",f=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let u=null,h=null;const d=[],m=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=vt,this.physicallyCorrectLights=!1,this.toneMapping=Br,this.toneMappingExposure=1;const _=this;let v=!1,p=0,g=0,x=null,b=-1,T=null;const S=new Oe,y=new Oe;let E=null,N=e.width,F=e.height,C=1,V=null,O=null;const H=new Oe(0,0,N,F),$=new Oe(0,0,N,F);let Y=!1;const q=[],te=new Ec;let pe=!1,Te=!1,de=null;const Me=new ye,ne=new L,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ve(){return x===null?C:1}let Q=t;function xe(P,j){for(let G=0;G<P.length;G++){const Z=P[G],ce=e.getContext(Z,j);if(ce!==null)return ce}return null}try{const P={alpha:i,depth:r,stencil:s,antialias:o,premultipliedAlpha:a,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:f};if(e.addEventListener("webglcontextlost",Ue,!1),e.addEventListener("webglcontextrestored",Ne,!1),Q===null){const j=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&j.shift(),Q=xe(j,P),Q===null)throw xe(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}Q.getShaderPrecisionFormat===void 0&&(Q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let Se,_e,ge,Ee,J,A,R,k,z,w,M,U,B,X,W,se,ee,oe,re,D,ae,K,le;function I(){Se=new MP(Q),_e=new mP(Q,Se,n),Se.init(_e),K=new $R(Q,Se,_e),ge=new jR(Q,Se,_e),q[0]=1029,Ee=new AP(Q),J=new UR,A=new QR(Q,Se,ge,J,_e,K,Ee),R=new _P(_),k=new TP(_),z=new kE(Q,_e),le=new dP(Q,Se,z,_e),w=new wP(Q,z,Ee,le),M=new RP(Q,w,z,Ee),re=new PP(Q),se=new gP(J),U=new OR(_,R,k,Se,_e,le,se),B=new JR(J),X=new kR(J),W=new XR(Se,_e),oe=new hP(_,R,ge,M,a),ee=new jv(_,M,_e),D=new pP(Q,Se,Ee,_e),ae=new SP(Q,Se,Ee,_e),Ee.programs=U.programs,_.capabilities=_e,_.extensions=Se,_.properties=J,_.renderLists=X,_.shadowMap=ee,_.state=ge,_.info=Ee}I();const ue=new ZR(_,Q);this.xr=ue,this.getContext=function(){return Q},this.getContextAttributes=function(){return Q.getContextAttributes()},this.forceContextLoss=function(){const P=Se.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=Se.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return C},this.setPixelRatio=function(P){P!==void 0&&(C=P,this.setSize(N,F,!1))},this.getSize=function(P){return P.set(N,F)},this.setSize=function(P,j,G){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=P,F=j,e.width=Math.floor(P*C),e.height=Math.floor(j*C),G!==!1&&(e.style.width=P+"px",e.style.height=j+"px"),this.setViewport(0,0,P,j)},this.getDrawingBufferSize=function(P){return P.set(N*C,F*C).floor()},this.setDrawingBufferSize=function(P,j,G){N=P,F=j,C=G,e.width=Math.floor(P*G),e.height=Math.floor(j*G),this.setViewport(0,0,P,j)},this.getCurrentViewport=function(P){return P.copy(S)},this.getViewport=function(P){return P.copy(H)},this.setViewport=function(P,j,G,Z){P.isVector4?H.set(P.x,P.y,P.z,P.w):H.set(P,j,G,Z),ge.viewport(S.copy(H).multiplyScalar(C).floor())},this.getScissor=function(P){return P.copy($)},this.setScissor=function(P,j,G,Z){P.isVector4?$.set(P.x,P.y,P.z,P.w):$.set(P,j,G,Z),ge.scissor(y.copy($).multiplyScalar(C).floor())},this.getScissorTest=function(){return Y},this.setScissorTest=function(P){ge.setScissorTest(Y=P)},this.setOpaqueSort=function(P){V=P},this.setTransparentSort=function(P){O=P},this.getClearColor=function(P){return P.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor.apply(oe,arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha.apply(oe,arguments)},this.clear=function(P,j,G){let Z=0;(P===void 0||P)&&(Z|=16384),(j===void 0||j)&&(Z|=256),(G===void 0||G)&&(Z|=1024),Q.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ue,!1),e.removeEventListener("webglcontextrestored",Ne,!1),X.dispose(),W.dispose(),J.dispose(),R.dispose(),k.dispose(),M.dispose(),le.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",Xd),ue.removeEventListener("sessionend",Yd),de&&(de.dispose(),de=null),vr.stop()};function Ue(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function Ne(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const P=Ee.autoReset,j=ee.enabled,G=ee.autoUpdate,Z=ee.needsUpdate,ce=ee.type;I(),Ee.autoReset=P,ee.enabled=j,ee.autoUpdate=G,ee.needsUpdate=Z,ee.type=ce}function ut(P){const j=P.target;j.removeEventListener("dispose",ut),Fe(j)}function Fe(P){it(P),J.remove(P)}function it(P){const j=J.get(P).programs;j!==void 0&&j.forEach(function(G){U.releaseProgram(G)})}function en(P,j){P.render(function(G){_.renderBufferImmediate(G,j)})}this.renderBufferImmediate=function(P,j){le.initAttributes();const G=J.get(P);P.hasPositions&&!G.position&&(G.position=Q.createBuffer()),P.hasNormals&&!G.normal&&(G.normal=Q.createBuffer()),P.hasUvs&&!G.uv&&(G.uv=Q.createBuffer()),P.hasColors&&!G.color&&(G.color=Q.createBuffer());const Z=j.getAttributes();P.hasPositions&&(Q.bindBuffer(34962,G.position),Q.bufferData(34962,P.positionArray,35048),le.enableAttribute(Z.position.location),Q.vertexAttribPointer(Z.position.location,3,5126,!1,0,0)),P.hasNormals&&(Q.bindBuffer(34962,G.normal),Q.bufferData(34962,P.normalArray,35048),le.enableAttribute(Z.normal.location),Q.vertexAttribPointer(Z.normal.location,3,5126,!1,0,0)),P.hasUvs&&(Q.bindBuffer(34962,G.uv),Q.bufferData(34962,P.uvArray,35048),le.enableAttribute(Z.uv.location),Q.vertexAttribPointer(Z.uv.location,2,5126,!1,0,0)),P.hasColors&&(Q.bindBuffer(34962,G.color),Q.bufferData(34962,P.colorArray,35048),le.enableAttribute(Z.color.location),Q.vertexAttribPointer(Z.color.location,3,5126,!1,0,0)),le.disableUnusedAttributes(),Q.drawArrays(4,0,P.count),P.count=0},this.renderBufferDirect=function(P,j,G,Z,ce,Ie){j===null&&(j=fe);const Le=ce.isMesh&&ce.matrixWorld.determinant()<0,Ae=$d(P,j,Z,ce);ge.setMaterial(Z,Le);let Be=G.index;const $e=G.attributes.position;if(Be===null){if($e===void 0||$e.count===0)return}else if(Be.count===0)return;let ze=1;Z.wireframe===!0&&(Be=w.getWireframeAttribute(G),ze=2),(G.morphAttributes.position!==void 0||G.morphAttributes.normal!==void 0)&&re.update(ce,G,Z,Ae),le.setup(ce,Z,Ae,G,Be);let Xe,Pe=D;Be!==null&&(Xe=z.get(Be),Pe=ae,Pe.setIndex(Xe));const xr=Be!==null?Be.count:$e.count,bt=G.drawRange.start*ze,Ii=G.drawRange.count*ze,Bn=Ie!==null?Ie.start*ze:0,yr=Ie!==null?Ie.count*ze:1/0,Ni=Math.max(bt,Bn),Pt=Math.min(xr,bt+Ii,Bn+yr)-1,qn=Math.max(0,Pt-Ni+1);if(qn!==0){if(ce.isMesh)Z.wireframe===!0?(ge.setLineWidth(Z.wireframeLinewidth*ve()),Pe.setMode(1)):Pe.setMode(4);else if(ce.isLine){let Bt=Z.linewidth;Bt===void 0&&(Bt=1),ge.setLineWidth(Bt*ve()),ce.isLineSegments?Pe.setMode(1):ce.isLineLoop?Pe.setMode(2):Pe.setMode(3)}else ce.isPoints?Pe.setMode(0):ce.isSprite&&Pe.setMode(4);if(ce.isInstancedMesh)Pe.renderInstances(Ni,qn,ce.count);else if(G.isInstancedBufferGeometry){const Bt=Math.min(G.instanceCount,G._maxInstanceCount);Pe.renderInstances(Ni,qn,Bt)}else Pe.render(Ni,qn)}},this.compile=function(P,j){h=W.get(P),h.init(),m.push(h),P.traverseVisible(function(G){G.isLight&&G.layers.test(j.layers)&&(h.pushLight(G),G.castShadow&&h.pushShadow(G))}),h.setupLights(_.physicallyCorrectLights),P.traverse(function(G){const Z=G.material;if(Z)if(Array.isArray(Z))for(let ce=0;ce<Z.length;ce++){const Ie=Z[ce];ou(Ie,P,G)}else ou(Z,P,G)}),m.pop(),h=null};let pn=null;function Un(P){pn&&pn(P)}function Xd(){vr.stop()}function Yd(){vr.start()}const vr=new dv;vr.setAnimationLoop(Un),typeof window!="undefined"&&vr.setContext(window),this.setAnimationLoop=function(P){pn=P,ue.setAnimationLoop(P),P===null?vr.stop():vr.start()},ue.addEventListener("sessionstart",Xd),ue.addEventListener("sessionend",Yd),this.render=function(P,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;P.autoUpdate===!0&&P.updateMatrixWorld(),j.parent===null&&j.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(j),j=ue.getCamera()),P.isScene===!0&&P.onBeforeRender(_,P,j,x),h=W.get(P,m.length),h.init(),m.push(h),Me.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),te.setFromProjectionMatrix(Me),Te=this.localClippingEnabled,pe=se.init(this.clippingPlanes,Te,j),u=X.get(P,d.length),u.init(),d.push(u),qd(P,j,0,_.sortObjects),u.finish(),_.sortObjects===!0&&u.sort(V,O),pe===!0&&se.beginShadows();const G=h.state.shadowsArray;if(ee.render(G,P,j),pe===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset(),oe.render(u,P),h.setupLights(_.physicallyCorrectLights),j.isArrayCamera){const Z=j.cameras;for(let ce=0,Ie=Z.length;ce<Ie;ce++){const Le=Z[ce];jd(u,P,Le,Le.viewport)}}else jd(u,P,j);x!==null&&(A.updateMultisampleRenderTarget(x),A.updateRenderTargetMipmap(x)),P.isScene===!0&&P.onAfterRender(_,P,j),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1),le.resetDefaultState(),b=-1,T=null,m.pop(),m.length>0?h=m[m.length-1]:h=null,d.pop(),d.length>0?u=d[d.length-1]:u=null};function qd(P,j,G,Z){if(P.visible===!1)return;if(P.layers.test(j.layers)){if(P.isGroup)G=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(j);else if(P.isLight)h.pushLight(P),P.castShadow&&h.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||te.intersectsSprite(P)){Z&&ne.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Me);const Le=M.update(P),Ae=P.material;Ae.visible&&u.push(P,Le,Ae,G,ne.z,null)}}else if(P.isImmediateRenderObject)Z&&ne.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Me),u.push(P,null,P.material,G,ne.z,null);else if((P.isMesh||P.isLine||P.isPoints)&&(P.isSkinnedMesh&&P.skeleton.frame!==Ee.render.frame&&(P.skeleton.update(),P.skeleton.frame=Ee.render.frame),!P.frustumCulled||te.intersectsObject(P))){Z&&ne.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Me);const Le=M.update(P),Ae=P.material;if(Array.isArray(Ae)){const Be=Le.groups;for(let $e=0,ze=Be.length;$e<ze;$e++){const Xe=Be[$e],Pe=Ae[Xe.materialIndex];Pe&&Pe.visible&&u.push(P,Le,Pe,G,ne.z,Xe)}}else Ae.visible&&u.push(P,Le,Ae,G,ne.z,null)}}const Ie=P.children;for(let Le=0,Ae=Ie.length;Le<Ae;Le++)qd(Ie[Le],j,G,Z)}function jd(P,j,G,Z){const ce=P.opaque,Ie=P.transmissive,Le=P.transparent;h.setupLightsView(G),Ie.length>0&&Ky(ce,j,G),Z&&ge.viewport(S.copy(Z)),ce.length>0&&Va(ce,j,G),Ie.length>0&&Va(Ie,j,G),Le.length>0&&Va(Le,j,G)}function Ky(P,j,G){if(de===null){const Le=o===!0&&_e.isWebGL2===!0?Q_:fn;de=new Le(1024,1024,{generateMipmaps:!0,type:K.convert(bs)!==null?bs:ys,minFilter:xs,magFilter:Lt,wrapS:un,wrapT:un})}const Z=_.getRenderTarget();_.setRenderTarget(de),_.clear();const ce=_.toneMapping;_.toneMapping=Br,Va(P,j,G),_.toneMapping=ce,A.updateMultisampleRenderTarget(de),A.updateRenderTargetMipmap(de),_.setRenderTarget(Z)}function Va(P,j,G){const Z=j.isScene===!0?j.overrideMaterial:null;for(let ce=0,Ie=P.length;ce<Ie;ce++){const Le=P[ce],Ae=Le.object,Be=Le.geometry,$e=Z===null?Le.material:Z,ze=Le.group;Ae.layers.test(G.layers)&&Zy(Ae,j,G,Be,$e,ze)}}function Zy(P,j,G,Z,ce,Ie){if(P.onBeforeRender(_,j,G,Z,ce,Ie),P.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),P.isImmediateRenderObject){const Le=$d(G,j,ce,P);ge.setMaterial(ce),le.reset(),en(P,Le)}else ce.transparent===!0&&ce.side===ei?(ce.side=_t,ce.needsUpdate=!0,_.renderBufferDirect(G,j,Z,ce,P,Ie),ce.side=Ki,ce.needsUpdate=!0,_.renderBufferDirect(G,j,Z,ce,P,Ie),ce.side=ei):_.renderBufferDirect(G,j,Z,ce,P,Ie);P.onAfterRender(_,j,G,Z,ce,Ie)}function ou(P,j,G){j.isScene!==!0&&(j=fe);const Z=J.get(P),ce=h.state.lights,Ie=h.state.shadowsArray,Le=ce.state.version,Ae=U.getParameters(P,ce.state,Ie,j,G),Be=U.getProgramCacheKey(Ae);let $e=Z.programs;Z.environment=P.isMeshStandardMaterial?j.environment:null,Z.fog=j.fog,Z.envMap=(P.isMeshStandardMaterial?k:R).get(P.envMap||Z.environment),$e===void 0&&(P.addEventListener("dispose",ut),$e=new Map,Z.programs=$e);let ze=$e.get(Be);if(ze!==void 0){if(Z.currentProgram===ze&&Z.lightsStateVersion===Le)return Qd(P,Ae),ze}else Ae.uniforms=U.getUniforms(P),P.onBuild(Ae,_),P.onBeforeCompile(Ae,_),ze=U.acquireProgram(Ae,Be),$e.set(Be,ze),Z.uniforms=Ae.uniforms;const Xe=Z.uniforms;(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Xe.clippingPlanes=se.uniform),Qd(P,Ae),Z.needsLights=e0(P),Z.lightsStateVersion=Le,Z.needsLights&&(Xe.ambientLightColor.value=ce.state.ambient,Xe.lightProbe.value=ce.state.probe,Xe.directionalLights.value=ce.state.directional,Xe.directionalLightShadows.value=ce.state.directionalShadow,Xe.spotLights.value=ce.state.spot,Xe.spotLightShadows.value=ce.state.spotShadow,Xe.rectAreaLights.value=ce.state.rectArea,Xe.ltc_1.value=ce.state.rectAreaLTC1,Xe.ltc_2.value=ce.state.rectAreaLTC2,Xe.pointLights.value=ce.state.point,Xe.pointLightShadows.value=ce.state.pointShadow,Xe.hemisphereLights.value=ce.state.hemi,Xe.directionalShadowMap.value=ce.state.directionalShadowMap,Xe.directionalShadowMatrix.value=ce.state.directionalShadowMatrix,Xe.spotShadowMap.value=ce.state.spotShadowMap,Xe.spotShadowMatrix.value=ce.state.spotShadowMatrix,Xe.pointShadowMap.value=ce.state.pointShadowMap,Xe.pointShadowMatrix.value=ce.state.pointShadowMatrix);const Pe=ze.getUniforms(),xr=fr.seqWithValue(Pe.seq,Xe);return Z.currentProgram=ze,Z.uniformsList=xr,ze}function Qd(P,j){const G=J.get(P);G.outputEncoding=j.outputEncoding,G.instancing=j.instancing,G.skinning=j.skinning,G.morphTargets=j.morphTargets,G.morphNormals=j.morphNormals,G.numClippingPlanes=j.numClippingPlanes,G.numIntersection=j.numClipIntersection,G.vertexAlphas=j.vertexAlphas,G.vertexTangents=j.vertexTangents}function $d(P,j,G,Z){j.isScene!==!0&&(j=fe),A.resetTextureUnits();const ce=j.fog,Ie=G.isMeshStandardMaterial?j.environment:null,Le=x===null?_.outputEncoding:x.texture.encoding,Ae=(G.isMeshStandardMaterial?k:R).get(G.envMap||Ie),Be=G.vertexColors===!0&&!!Z.geometry&&!!Z.geometry.attributes.color&&Z.geometry.attributes.color.itemSize===4,$e=!!Z.geometry&&!!Z.geometry.attributes.tangent,ze=!!Z.geometry&&!!Z.geometry.morphAttributes.position,Xe=!!Z.geometry&&!!Z.geometry.morphAttributes.normal,Pe=J.get(G),xr=h.state.lights;if(pe===!0&&(Te===!0||P!==T)){const Bt=P===T&&G.id===b;se.setState(G,P,Bt)}let bt=!1;G.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==xr.state.version||Pe.outputEncoding!==Le||Z.isInstancedMesh&&Pe.instancing===!1||!Z.isInstancedMesh&&Pe.instancing===!0||Z.isSkinnedMesh&&Pe.skinning===!1||!Z.isSkinnedMesh&&Pe.skinning===!0||Pe.envMap!==Ae||G.fog&&Pe.fog!==ce||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==se.numPlanes||Pe.numIntersection!==se.numIntersection)||Pe.vertexAlphas!==Be||Pe.vertexTangents!==$e||Pe.morphTargets!==ze||Pe.morphNormals!==Xe)&&(bt=!0):(bt=!0,Pe.__version=G.version);let Ii=Pe.currentProgram;bt===!0&&(Ii=ou(G,j,Z));let Bn=!1,yr=!1,Ni=!1;const Pt=Ii.getUniforms(),qn=Pe.uniforms;if(ge.useProgram(Ii.program)&&(Bn=!0,yr=!0,Ni=!0),G.id!==b&&(b=G.id,yr=!0),Bn||T!==P){if(Pt.setValue(Q,"projectionMatrix",P.projectionMatrix),_e.logarithmicDepthBuffer&&Pt.setValue(Q,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),T!==P&&(T=P,yr=!0,Ni=!0),G.isShaderMaterial||G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshStandardMaterial||G.envMap){const Bt=Pt.map.cameraPosition;Bt!==void 0&&Bt.setValue(Q,ne.setFromMatrixPosition(P.matrixWorld))}(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Pt.setValue(Q,"isOrthographic",P.isOrthographicCamera===!0),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial||G.isShadowMaterial||Z.isSkinnedMesh)&&Pt.setValue(Q,"viewMatrix",P.matrixWorldInverse)}if(Z.isSkinnedMesh){Pt.setOptional(Q,Z,"bindMatrix"),Pt.setOptional(Q,Z,"bindMatrixInverse");const Bt=Z.skeleton;Bt&&(_e.floatVertexTextures?(Bt.boneTexture===null&&Bt.computeBoneTexture(),Pt.setValue(Q,"boneTexture",Bt.boneTexture,A),Pt.setValue(Q,"boneTextureSize",Bt.boneTextureSize)):Pt.setOptional(Q,Bt,"boneMatrices"))}return(yr||Pe.receiveShadow!==Z.receiveShadow)&&(Pe.receiveShadow=Z.receiveShadow,Pt.setValue(Q,"receiveShadow",Z.receiveShadow)),yr&&(Pt.setValue(Q,"toneMappingExposure",_.toneMappingExposure),Pe.needsLights&&Jy(qn,Ni),ce&&G.fog&&B.refreshFogUniforms(qn,ce),B.refreshMaterialUniforms(qn,G,C,F,de),fr.upload(Q,Pe.uniformsList,qn,A)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(fr.upload(Q,Pe.uniformsList,qn,A),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Pt.setValue(Q,"center",Z.center),Pt.setValue(Q,"modelViewMatrix",Z.modelViewMatrix),Pt.setValue(Q,"normalMatrix",Z.normalMatrix),Pt.setValue(Q,"modelMatrix",Z.matrixWorld),Ii}function Jy(P,j){P.ambientLightColor.needsUpdate=j,P.lightProbe.needsUpdate=j,P.directionalLights.needsUpdate=j,P.directionalLightShadows.needsUpdate=j,P.pointLights.needsUpdate=j,P.pointLightShadows.needsUpdate=j,P.spotLights.needsUpdate=j,P.spotLightShadows.needsUpdate=j,P.rectAreaLights.needsUpdate=j,P.hemisphereLights.needsUpdate=j}function e0(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return p},this.getActiveMipmapLevel=function(){return g},this.getRenderTarget=function(){return x},this.setRenderTarget=function(P,j=0,G=0){x=P,p=j,g=G,P&&J.get(P).__webglFramebuffer===void 0&&A.setupRenderTarget(P);let Z=null,ce=!1,Ie=!1;if(P){const Ae=P.texture;(Ae.isDataTexture3D||Ae.isDataTexture2DArray)&&(Ie=!0);const Be=J.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Z=Be[j],ce=!0):P.isWebGLMultisampleRenderTarget?Z=J.get(P).__webglMultisampledFramebuffer:Z=Be,S.copy(P.viewport),y.copy(P.scissor),E=P.scissorTest}else S.copy(H).multiplyScalar(C).floor(),y.copy($).multiplyScalar(C).floor(),E=Y;if(ge.bindFramebuffer(36160,Z)&&_e.drawBuffers){let Ae=!1;if(P)if(P.isWebGLMultipleRenderTargets){const Be=P.texture;if(q.length!==Be.length||q[0]!==36064){for(let $e=0,ze=Be.length;$e<ze;$e++)q[$e]=36064+$e;q.length=Be.length,Ae=!0}}else(q.length!==1||q[0]!==36064)&&(q[0]=36064,q.length=1,Ae=!0);else(q.length!==1||q[0]!==1029)&&(q[0]=1029,q.length=1,Ae=!0);Ae&&(_e.isWebGL2?Q.drawBuffers(q):Se.get("WEBGL_draw_buffers").drawBuffersWEBGL(q))}if(ge.viewport(S),ge.scissor(y),ge.setScissorTest(E),ce){const Ae=J.get(P.texture);Q.framebufferTexture2D(36160,36064,34069+j,Ae.__webglTexture,G)}else if(Ie){const Ae=J.get(P.texture),Be=j||0;Q.framebufferTextureLayer(36160,36064,Ae.__webglTexture,G||0,Be)}b=-1},this.readRenderTargetPixels=function(P,j,G,Z,ce,Ie,Le){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=J.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Le!==void 0&&(Ae=Ae[Le]),Ae){ge.bindFramebuffer(36160,Ae);try{const Be=P.texture,$e=Be.format,ze=Be.type;if($e!==Qt&&K.convert($e)!==Q.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Xe=ze===bs&&(Se.has("EXT_color_buffer_half_float")||_e.isWebGL2&&Se.has("EXT_color_buffer_float"));if(ze!==ys&&K.convert(ze)!==Q.getParameter(35738)&&!(ze===Ji&&(_e.isWebGL2||Se.has("OES_texture_float")||Se.has("WEBGL_color_buffer_float")))&&!Xe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q.checkFramebufferStatus(36160)===36053?j>=0&&j<=P.width-Z&&G>=0&&G<=P.height-ce&&Q.readPixels(j,G,Z,ce,K.convert($e),K.convert(ze),Ie):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{const Be=x!==null?J.get(x).__webglFramebuffer:null;ge.bindFramebuffer(36160,Be)}}},this.copyFramebufferToTexture=function(P,j,G=0){const Z=Math.pow(2,-G),ce=Math.floor(j.image.width*Z),Ie=Math.floor(j.image.height*Z);let Le=K.convert(j.format);_e.isWebGL2&&(Le===6407&&(Le=32849),Le===6408&&(Le=32856)),A.setTexture2D(j,0),Q.copyTexImage2D(3553,G,Le,P.x,P.y,ce,Ie,0),ge.unbindTexture()},this.copyTextureToTexture=function(P,j,G,Z=0){const ce=j.image.width,Ie=j.image.height,Le=K.convert(G.format),Ae=K.convert(G.type);A.setTexture2D(G,0),Q.pixelStorei(37440,G.flipY),Q.pixelStorei(37441,G.premultiplyAlpha),Q.pixelStorei(3317,G.unpackAlignment),j.isDataTexture?Q.texSubImage2D(3553,Z,P.x,P.y,ce,Ie,Le,Ae,j.image.data):j.isCompressedTexture?Q.compressedTexSubImage2D(3553,Z,P.x,P.y,j.mipmaps[0].width,j.mipmaps[0].height,Le,j.mipmaps[0].data):Q.texSubImage2D(3553,Z,P.x,P.y,Le,Ae,j.image),Z===0&&G.generateMipmaps&&Q.generateMipmap(3553),ge.unbindTexture()},this.copyTextureToTexture3D=function(P,j,G,Z,ce=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ie=P.max.x-P.min.x+1,Le=P.max.y-P.min.y+1,Ae=P.max.z-P.min.z+1,Be=K.convert(Z.format),$e=K.convert(Z.type);let ze;if(Z.isDataTexture3D)A.setTexture3D(Z,0),ze=32879;else if(Z.isDataTexture2DArray)A.setTexture2DArray(Z,0),ze=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Q.pixelStorei(37440,Z.flipY),Q.pixelStorei(37441,Z.premultiplyAlpha),Q.pixelStorei(3317,Z.unpackAlignment);const Xe=Q.getParameter(3314),Pe=Q.getParameter(32878),xr=Q.getParameter(3316),bt=Q.getParameter(3315),Ii=Q.getParameter(32877),Bn=G.isCompressedTexture?G.mipmaps[0]:G.image;Q.pixelStorei(3314,Bn.width),Q.pixelStorei(32878,Bn.height),Q.pixelStorei(3316,P.min.x),Q.pixelStorei(3315,P.min.y),Q.pixelStorei(32877,P.min.z),G.isDataTexture||G.isDataTexture3D?Q.texSubImage3D(ze,ce,j.x,j.y,j.z,Ie,Le,Ae,Be,$e,Bn.data):G.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Q.compressedTexSubImage3D(ze,ce,j.x,j.y,j.z,Ie,Le,Ae,Be,Bn.data)):Q.texSubImage3D(ze,ce,j.x,j.y,j.z,Ie,Le,Ae,Be,$e,Bn),Q.pixelStorei(3314,Xe),Q.pixelStorei(32878,Pe),Q.pixelStorei(3316,xr),Q.pixelStorei(3315,bt),Q.pixelStorei(32877,Ii),ce===0&&Z.generateMipmaps&&Q.generateMipmap(ze),ge.unbindTexture()},this.initTexture=function(P){A.setTexture2D(P,0),ge.unbindTexture()},this.resetState=function(){p=0,g=0,x=null,ge.reset(),le.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class tC extends Je{}tC.prototype.isWebGL1Renderer=!0;class Fc extends We{constructor(){super();this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}Fc.prototype.isScene=!0;class qs{constructor(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=aa,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Cn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Cn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Cn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}qs.prototype.isInterleavedBuffer=!0;const yt=new L;class js{constructor(e,t,i,r=!1){this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)yt.x=this.getX(t),yt.y=this.getY(t),yt.z=this.getZ(t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)yt.x=this.getX(t),yt.y=this.getY(t),yt.z=this.getZ(t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)yt.x=this.getX(t),yt.y=this.getY(t),yt.z=this.getZ(t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new xt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new js(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}js.prototype.isInterleavedBufferAttribute=!0;class $v extends It{constructor(e){super();this.type="SpriteMaterial",this.color=new me(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this}}$v.prototype.isSpriteMaterial=!0;let Qs;const va=new L,$s=new L,Ks=new L,Zs=new ie,xa=new ie,Kv=new ye,Ic=new L,ya=new L,Nc=new L,Zv=new ie,zh=new ie,Jv=new ie;class nC extends We{constructor(e){super();if(this.type="Sprite",Qs===void 0){Qs=new Ze;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new qs(t,5);Qs.setIndex([0,1,2,0,2,3]),Qs.setAttribute("position",new js(i,3,0,!1)),Qs.setAttribute("uv",new js(i,2,3,!1))}this.geometry=Qs,this.material=e!==void 0?e:new $v,this.center=new ie(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),$s.setFromMatrixScale(this.matrixWorld),Kv.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ks.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&$s.multiplyScalar(-Ks.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;Dc(Ic.set(-.5,-.5,0),Ks,o,$s,r,s),Dc(ya.set(.5,-.5,0),Ks,o,$s,r,s),Dc(Nc.set(.5,.5,0),Ks,o,$s,r,s),Zv.set(0,0),zh.set(1,0),Jv.set(1,1);let a=e.ray.intersectTriangle(Ic,ya,Nc,!1,va);if(a===null&&(Dc(ya.set(-.5,.5,0),Ks,o,$s,r,s),zh.set(0,1),a=e.ray.intersectTriangle(Ic,Nc,ya,!1,va),a===null))return;const l=e.ray.origin.distanceTo(va);l<e.near||l>e.far||t.push({distance:l,point:va.clone(),uv:wt.getUV(va,Ic,ya,Nc,Zv,zh,Jv,new ie),face:null,object:this})}copy(e){return super.copy(e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}nC.prototype.isSprite=!0;function Dc(n,e,t,i,r,s){Zs.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(xa.x=s*Zs.x-r*Zs.y,xa.y=r*Zs.x+s*Zs.y):xa.copy(Zs),n.copy(e),n.x+=xa.x,n.y+=xa.y,n.applyMatrix4(Kv)}const ex=new L,tx=new Oe,nx=new Oe,iC=new L,ix=new ye;class Oc extends Dt{constructor(e,t){super(e,t);this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new ye,this.bindMatrixInverse=new ye}copy(e){return super.copy(e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Oe,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.x=t.getX(i),e.y=t.getY(i),e.z=t.getZ(i),e.w=t.getW(i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const i=this.skeleton,r=this.geometry;tx.fromBufferAttribute(r.attributes.skinIndex,e),nx.fromBufferAttribute(r.attributes.skinWeight,e),ex.fromBufferAttribute(r.attributes.position,e).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=nx.getComponent(s);if(o!==0){const a=tx.getComponent(s);ix.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(iC.copy(ex).applyMatrix4(ix),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}Oc.prototype.isSkinnedMesh=!0;class Vh extends We{constructor(){super();this.type="Bone"}}Vh.prototype.isBone=!0;class rx extends Ft{constructor(e=null,t=1,i=1,r,s,o,a,l,c=Lt,f=Lt,u,h){super(null,o,a,l,c,f,r,s,u,h);this.image={data:e,width:t,height:i},this.magFilter=c,this.minFilter=f,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}rx.prototype.isDataTexture=!0;const sx=new ye,rC=new ye;class Uc{constructor(e=[],t=[]){this.uuid=Cn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new ye)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new ye;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:rC;sx.multiplyMatrices(a,t[s]),sx.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Uc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=q_(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new rx(t,e,e,Qt,Ji);return this.boneMatrices=t,this.boneTexture=i,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Vh),this.bones.push(o),this.boneInverses.push(new ye().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=i[r];e.boneInverses.push(a.toArray())}return e}}class Gh extends xt{constructor(e,t,i,r=1){typeof i=="number"&&(r=i,i=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument."));super(e,t,i);this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}Gh.prototype.isInstancedBufferAttribute=!0;const ox=new ye,ax=new ye,Bc=[],ba=new Dt;class sC extends Dt{constructor(e,t,i){super(e,t);this.instanceMatrix=new Gh(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.frustumCulled=!1}copy(e){return super.copy(e),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,r=this.count;if(ba.geometry=this.geometry,ba.material=this.material,ba.material!==void 0)for(let s=0;s<r;s++){this.getMatrixAt(s,ox),ax.multiplyMatrices(i,ox),ba.matrixWorld=ax,ba.raycast(e,Bc);for(let o=0,a=Bc.length;o<a;o++){const l=Bc[o];l.instanceId=s,l.object=this,t.push(l)}Bc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Gh(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}sC.prototype.isInstancedMesh=!0;class Js extends It{constructor(e){super();this.type="LineBasicMaterial",this.color=new me(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this}}Js.prototype.isLineBasicMaterial=!0;const lx=new L,cx=new L,ux=new ye,Wh=new Vr,kc=new zr;class Hc extends We{constructor(e=new Ze,t=new Js){super();this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)lx.fromBufferAttribute(t,r-1),cx.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=lx.distanceTo(cx);e.setAttribute("lineDistance",new ot(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),kc.copy(i.boundingSphere),kc.applyMatrix4(r),kc.radius+=s,e.ray.intersectsSphere(kc)===!1)return;ux.copy(r).invert(),Wh.copy(e.ray).applyMatrix4(ux);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new L,f=new L,u=new L,h=new L,d=this.isLineSegments?2:1;if(i.isBufferGeometry){const m=i.index,v=i.attributes.position;if(m!==null){const p=Math.max(0,o.start),g=Math.min(m.count,o.start+o.count);for(let x=p,b=g-1;x<b;x+=d){const T=m.getX(x),S=m.getX(x+1);if(c.fromBufferAttribute(v,T),f.fromBufferAttribute(v,S),Wh.distanceSqToSegment(c,f,h,u)>l)continue;h.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(h);E<e.near||E>e.far||t.push({distance:E,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),g=Math.min(v.count,o.start+o.count);for(let x=p,b=g-1;x<b;x+=d){if(c.fromBufferAttribute(v,x),f.fromBufferAttribute(v,x+1),Wh.distanceSqToSegment(c,f,h,u)>l)continue;h.applyMatrix4(this.matrixWorld);const S=e.ray.origin.distanceTo(h);S<e.near||S>e.far||t.push({distance:S,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}else i.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}Hc.prototype.isLine=!0;const fx=new L,hx=new L;class zc extends Hc{constructor(e,t){super(e,t);this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)fx.fromBufferAttribute(t,r),hx.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+fx.distanceTo(hx);e.setAttribute("lineDistance",new ot(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}}zc.prototype.isLineSegments=!0;class dx extends Hc{constructor(e,t){super(e,t);this.type="LineLoop"}}dx.prototype.isLineLoop=!0;class Xh extends It{constructor(e){super();this.type="PointsMaterial",this.color=new me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this}}Xh.prototype.isPointsMaterial=!0;const px=new ye,Yh=new Vr,Vc=new zr,Gc=new L;class mx extends We{constructor(e=new Ze,t=new Xh){super();this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Vc.copy(i.boundingSphere),Vc.applyMatrix4(r),Vc.radius+=s,e.ray.intersectsSphere(Vc)===!1)return;px.copy(r).invert(),Yh.copy(e.ray).applyMatrix4(px);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a;if(i.isBufferGeometry){const c=i.index,u=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let m=h,_=d;m<_;m++){const v=c.getX(m);Gc.fromBufferAttribute(u,v),gx(Gc,v,l,r,e,t,this)}}else{const h=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let m=h,_=d;m<_;m++)Gc.fromBufferAttribute(u,m),gx(Gc,m,l,r,e,t,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}mx.prototype.isPoints=!0;function gx(n,e,t,i,r,s,o){const a=Yh.distanceSqToPoint(n);if(a<t){const l=new L;Yh.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class oC extends Ft{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c);this.format=a!==void 0?a:ti,this.minFilter=o!==void 0?o:Ct,this.magFilter=s!==void 0?s:Ct,this.generateMipmaps=!1;const f=this;function u(){f.needsUpdate=!0,e.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}oC.prototype.isVideoTexture=!0;class aC extends Ft{constructor(e,t,i,r,s,o,a,l,c,f,u,h){super(null,o,a,l,c,f,r,s,u,h);this.image={width:t,height:i},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}aC.prototype.isCompressedTexture=!0;class lC extends Ft{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c);this.needsUpdate=!0}}lC.prototype.isCanvasTexture=!0;class cC extends Ft{constructor(e,t,i,r,s,o,a,l,c,f){if(f=f!==void 0?f:Ts,f!==Ts&&f!==sa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===Ts&&(i=nc),i===void 0&&f===sa&&(i=ra);super(null,r,s,o,a,l,f,i,c);this.image={width:e,height:t},this.magFilter=a!==void 0?a:Lt,this.minFilter=l!==void 0?l:Lt,this.flipY=!1,this.generateMipmaps=!1}}cC.prototype.isDepthTexture=!0;new L;new L;new L;new wt;class Dn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const f=i[r],h=i[r+1]-f,d=(o-f)/h;return(r+d)/(s-1)}getTangent(e,t){const i=1e-4;let r=e-i,s=e+i;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new ie:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new L,r=[],s=[],o=[],a=new L,l=new ye;for(let d=0;d<=e;d++){const m=d/e;r[d]=this.getTangentAt(m,new L),r[d].normalize()}s[0]=new L,o[0]=new L;let c=Number.MAX_VALUE;const f=Math.abs(r[0].x),u=Math.abs(r[0].y),h=Math.abs(r[0].z);f<=c&&(c=f,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(sn(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,m))}o[d].crossVectors(r[d],s[d])}if(t===!0){let d=Math.acos(sn(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(d=-d);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(r[m],d*m)),o[m].crossVectors(r[m],s[m])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Wc extends Dn{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super();this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const i=t||new ie,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const f=Math.cos(this.aRotation),u=Math.sin(this.aRotation),h=l-this.aX,d=c-this.aY;l=h*f-d*u+this.aX,c=h*u+d*f+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}Wc.prototype.isEllipseCurve=!0;class _x extends Wc{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o);this.type="ArcCurve"}}_x.prototype.isArcCurve=!0;function qh(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,f,u){let h=(o-s)/c-(a-s)/(c+f)+(a-o)/f,d=(a-o)/f-(l-o)/(f+u)+(l-a)/u;h*=f,d*=f,r(o,a,h,d)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const Xc=new L,jh=new qh,Qh=new qh,$h=new qh;class vx extends Dn{constructor(e=[],t=!1,i="centripetal",r=.5){super();this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new L){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,f;this.closed||a>0?c=r[(a-1)%s]:(Xc.subVectors(r[0],r[1]).add(r[0]),c=Xc);const u=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?f=r[(a+2)%s]:(Xc.subVectors(r[s-1],r[s-2]).add(r[s-1]),f=Xc),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(h),d),v=Math.pow(h.distanceToSquared(f),d);_<1e-4&&(_=1),m<1e-4&&(m=_),v<1e-4&&(v=_),jh.initNonuniformCatmullRom(c.x,u.x,h.x,f.x,m,_,v),Qh.initNonuniformCatmullRom(c.y,u.y,h.y,f.y,m,_,v),$h.initNonuniformCatmullRom(c.z,u.z,h.z,f.z,m,_,v)}else this.curveType==="catmullrom"&&(jh.initCatmullRom(c.x,u.x,h.x,f.x,this.tension),Qh.initCatmullRom(c.y,u.y,h.y,f.y,this.tension),$h.initCatmullRom(c.z,u.z,h.z,f.z,this.tension));return i.set(jh.calc(l),Qh.calc(l),$h.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new L().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}vx.prototype.isCatmullRomCurve3=!0;function xx(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,l=n*a;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*a+s*n+t}function uC(n,e){const t=1-n;return t*t*e}function fC(n,e){return 2*(1-n)*n*e}function hC(n,e){return n*n*e}function Ta(n,e,t,i){return uC(n,e)+fC(n,t)+hC(n,i)}function dC(n,e){const t=1-n;return t*t*t*e}function pC(n,e){const t=1-n;return 3*t*t*n*e}function mC(n,e){return 3*(1-n)*n*n*e}function gC(n,e){return n*n*n*e}function Ma(n,e,t,i,r){return dC(n,e)+pC(n,t)+mC(n,i)+gC(n,r)}class Kh extends Dn{constructor(e=new ie,t=new ie,i=new ie,r=new ie){super();this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new ie){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Ma(e,r.x,s.x,o.x,a.x),Ma(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}Kh.prototype.isCubicBezierCurve=!0;class yx extends Dn{constructor(e=new L,t=new L,i=new L,r=new L){super();this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new L){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Ma(e,r.x,s.x,o.x,a.x),Ma(e,r.y,s.y,o.y,a.y),Ma(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}yx.prototype.isCubicBezierCurve3=!0;class Yc extends Dn{constructor(e=new ie,t=new ie){super();this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ie){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const i=t||new ie;return i.copy(this.v2).sub(this.v1).normalize(),i}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}Yc.prototype.isLineCurve=!0;class _C extends Dn{constructor(e=new L,t=new L){super();this.type="LineCurve3",this.isLineCurve3=!0,this.v1=e,this.v2=t}getPoint(e,t=new L){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Zh extends Dn{constructor(e=new ie,t=new ie,i=new ie){super();this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ie){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Ta(e,r.x,s.x,o.x),Ta(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}Zh.prototype.isQuadraticBezierCurve=!0;class bx extends Dn{constructor(e=new L,t=new L,i=new L){super();this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new L){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Ta(e,r.x,s.x,o.x),Ta(e,r.y,s.y,o.y),Ta(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}bx.prototype.isQuadraticBezierCurve3=!0;class Jh extends Dn{constructor(e=[]){super();this.type="SplineCurve",this.points=e}getPoint(e,t=new ie){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],f=r[o>r.length-2?r.length-1:o+1],u=r[o>r.length-3?r.length-1:o+2];return i.set(xx(a,l.x,c.x,f.x,u.x),xx(a,l.y,c.y,f.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new ie().fromArray(r))}return this}}Jh.prototype.isSplineCurve=!0;var Tx=Object.freeze({__proto__:null,ArcCurve:_x,CatmullRomCurve3:vx,CubicBezierCurve:Kh,CubicBezierCurve3:yx,EllipseCurve:Wc,LineCurve:Yc,LineCurve3:_C,QuadraticBezierCurve:Zh,QuadraticBezierCurve3:bx,SplineCurve:Jh});const vC={triangulate:function(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=Mx(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,f,u,h,d;if(i&&(s=MC(n,e,s,t)),n.length>80*t){a=c=n[0],l=f=n[1];for(let m=t;m<r;m+=t)u=n[m],h=n[m+1],u<a&&(a=u),h<l&&(l=h),u>c&&(c=u),h>f&&(f=h);d=Math.max(c-a,f-l),d=d!==0?1/d:0}return wa(s,o,t,a,l,d),o}};function Mx(n,e,t,i,r){let s,o;if(r===NC(n,e,t,i)>0)for(s=e;s<t;s+=i)o=Ax(s,n[s],n[s+1],o);else for(s=t-i;s>=e;s-=i)o=Ax(s,n[s],n[s+1],o);return o&&qc(o,o.next)&&(Aa(o),o=o.next),o}function dr(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(qc(t,t.next)||dt(t.prev,t,t.next)===0)){if(Aa(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function wa(n,e,t,i,r,s,o){if(!n)return;!o&&s&&LC(n,i,r,s);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,s?yC(n,i,r,s):xC(n)){e.push(l.i/t),e.push(n.i/t),e.push(c.i/t),Aa(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=bC(dr(n),e,t),wa(n,e,t,i,r,s,2)):o===2&&TC(n,e,t,i,r,s):wa(dr(n),e,t,i,r,s,1);break}}}function xC(n){const e=n.prev,t=n,i=n.next;if(dt(e,t,i)>=0)return!1;let r=n.next.next;for(;r!==n.prev;){if(eo(e.x,e.y,t.x,t.y,i.x,i.y,r.x,r.y)&&dt(r.prev,r,r.next)>=0)return!1;r=r.next}return!0}function yC(n,e,t,i){const r=n.prev,s=n,o=n.next;if(dt(r,s,o)>=0)return!1;const a=r.x<s.x?r.x<o.x?r.x:o.x:s.x<o.x?s.x:o.x,l=r.y<s.y?r.y<o.y?r.y:o.y:s.y<o.y?s.y:o.y,c=r.x>s.x?r.x>o.x?r.x:o.x:s.x>o.x?s.x:o.x,f=r.y>s.y?r.y>o.y?r.y:o.y:s.y>o.y?s.y:o.y,u=ed(a,l,e,t,i),h=ed(c,f,e,t,i);let d=n.prevZ,m=n.nextZ;for(;d&&d.z>=u&&m&&m.z<=h;){if(d!==n.prev&&d!==n.next&&eo(r.x,r.y,s.x,s.y,o.x,o.y,d.x,d.y)&&dt(d.prev,d,d.next)>=0||(d=d.prevZ,m!==n.prev&&m!==n.next&&eo(r.x,r.y,s.x,s.y,o.x,o.y,m.x,m.y)&&dt(m.prev,m,m.next)>=0))return!1;m=m.nextZ}for(;d&&d.z>=u;){if(d!==n.prev&&d!==n.next&&eo(r.x,r.y,s.x,s.y,o.x,o.y,d.x,d.y)&&dt(d.prev,d,d.next)>=0)return!1;d=d.prevZ}for(;m&&m.z<=h;){if(m!==n.prev&&m!==n.next&&eo(r.x,r.y,s.x,s.y,o.x,o.y,m.x,m.y)&&dt(m.prev,m,m.next)>=0)return!1;m=m.nextZ}return!0}function bC(n,e,t){let i=n;do{const r=i.prev,s=i.next.next;!qc(r,s)&&wx(r,i,i.next,s)&&Sa(r,s)&&Sa(s,r)&&(e.push(r.i/t),e.push(i.i/t),e.push(s.i/t),Aa(i),Aa(i.next),i=n=s),i=i.next}while(i!==n);return dr(i)}function TC(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&CC(o,a)){let l=Sx(o,a);o=dr(o,o.next),l=dr(l,l.next),wa(o,e,t,i,r,s),wa(l,e,t,i,r,s);return}a=a.next}o=o.next}while(o!==n)}function MC(n,e,t,i){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:n.length,c=Mx(n,a,l,i,!1),c===c.next&&(c.steiner=!0),r.push(RC(c));for(r.sort(wC),s=0;s<r.length;s++)SC(r[s],t),t=dr(t,t.next);return t}function wC(n,e){return n.x-e.x}function SC(n,e){if(e=AC(n,e),e){const t=Sx(e,n);dr(e,e.next),dr(t,t.next)}}function AC(n,e){let t=e;const i=n.x,r=n.y;let s=-1/0,o;do{if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const h=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=i&&h>s){if(s=h,h===i){if(r===t.y)return t;if(r===t.next.y)return t.next}o=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!o)return null;if(i===s)return o;const a=o,l=o.x,c=o.y;let f=1/0,u;t=o;do i>=t.x&&t.x>=l&&i!==t.x&&eo(r<c?i:s,r,l,c,r<c?s:i,r,t.x,t.y)&&(u=Math.abs(r-t.y)/(i-t.x),Sa(t,n)&&(u<f||u===f&&(t.x>o.x||t.x===o.x&&EC(o,t)))&&(o=t,f=u)),t=t.next;while(t!==a);return o}function EC(n,e){return dt(n.prev,n,e.prev)<0&&dt(e.next,n,n.next)<0}function LC(n,e,t,i){let r=n;do r.z===null&&(r.z=ed(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,PC(r)}function PC(n){let e,t,i,r,s,o,a,l,c=1;do{for(t=n,n=null,s=null,o=0;t;){for(o++,i=t,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(r=t,t=t.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;t=i}s.nextZ=null,c*=2}while(o>1);return n}function ed(n,e,t,i,r){return n=32767*(n-t)*r,e=32767*(e-i)*r,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function RC(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function eo(n,e,t,i,r,s,o,a){return(r-o)*(e-a)-(n-o)*(s-a)>=0&&(n-o)*(i-a)-(t-o)*(e-a)>=0&&(t-o)*(s-a)-(r-o)*(i-a)>=0}function CC(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!FC(n,e)&&(Sa(n,e)&&Sa(e,n)&&IC(n,e)&&(dt(n.prev,n,e.prev)||dt(n,e.prev,e))||qc(n,e)&&dt(n.prev,n,n.next)>0&&dt(e.prev,e,e.next)>0)}function dt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function qc(n,e){return n.x===e.x&&n.y===e.y}function wx(n,e,t,i){const r=Qc(dt(n,e,t)),s=Qc(dt(n,e,i)),o=Qc(dt(t,i,n)),a=Qc(dt(t,i,e));return!!(r!==s&&o!==a||r===0&&jc(n,t,e)||s===0&&jc(n,i,e)||o===0&&jc(t,n,i)||a===0&&jc(t,e,i))}function jc(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Qc(n){return n>0?1:n<0?-1:0}function FC(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&wx(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Sa(n,e){return dt(n.prev,n,n.next)<0?dt(n,e,n.next)>=0&&dt(n,n.prev,e)>=0:dt(n,e,n.prev)<0||dt(n,n.next,e)<0}function IC(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Sx(n,e){const t=new td(n.i,n.x,n.y),i=new td(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Ax(n,e,t,i){const r=new td(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Aa(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function td(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function NC(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class pr{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return pr.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];Ex(e),Lx(i,e);let o=e.length;t.forEach(Ex);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,Lx(i,t[l]);const a=vC.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Ex(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Lx(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class to extends Ze{constructor(e,t){super();this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new ot(r,3)),this.setAttribute("uv",new ot(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,f=t.steps!==void 0?t.steps:1;let u=t.depth!==void 0?t.depth:100,h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:6,m=t.bevelSize!==void 0?t.bevelSize:d-2,_=t.bevelOffset!==void 0?t.bevelOffset:0,v=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,g=t.UVGenerator!==void 0?t.UVGenerator:DC;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),u=t.amount);let x,b=!1,T,S,y,E;p&&(x=p.getSpacedPoints(f),b=!0,h=!1,T=p.computeFrenetFrames(f,!1),S=new L,y=new L,E=new L),h||(v=0,d=0,m=0,_=0);const N=a.extractPoints(c);let F=N.shape;const C=N.holes;if(!pr.isClockWise(F)){F=F.reverse();for(let J=0,A=C.length;J<A;J++){const R=C[J];pr.isClockWise(R)&&(C[J]=R.reverse())}}const O=pr.triangulateShape(F,C),H=F;for(let J=0,A=C.length;J<A;J++){const R=C[J];F=F.concat(R)}function $(J,A,R){return A||console.error("THREE.ExtrudeGeometry: vec does not exist"),A.clone().multiplyScalar(R).add(J)}const Y=F.length,q=O.length;function te(J,A,R){let k,z,w;const M=J.x-A.x,U=J.y-A.y,B=R.x-J.x,X=R.y-J.y,W=M*M+U*U,se=M*X-U*B;if(Math.abs(se)>Number.EPSILON){const ee=Math.sqrt(W),oe=Math.sqrt(B*B+X*X),re=A.x-U/ee,D=A.y+M/ee,ae=R.x-X/oe,K=R.y+B/oe,le=((ae-re)*X-(K-D)*B)/(M*X-U*B);k=re+M*le-J.x,z=D+U*le-J.y;const I=k*k+z*z;if(I<=2)return new ie(k,z);w=Math.sqrt(I/2)}else{let ee=!1;M>Number.EPSILON?B>Number.EPSILON&&(ee=!0):M<-Number.EPSILON?B<-Number.EPSILON&&(ee=!0):Math.sign(U)===Math.sign(X)&&(ee=!0),ee?(k=-U,z=M,w=Math.sqrt(W)):(k=M,z=U,w=Math.sqrt(W/2))}return new ie(k/w,z/w)}const pe=[];for(let J=0,A=H.length,R=A-1,k=J+1;J<A;J++,R++,k++)R===A&&(R=0),k===A&&(k=0),pe[J]=te(H[J],H[R],H[k]);const Te=[];let de,Me=pe.concat();for(let J=0,A=C.length;J<A;J++){const R=C[J];de=[];for(let k=0,z=R.length,w=z-1,M=k+1;k<z;k++,w++,M++)w===z&&(w=0),M===z&&(M=0),de[k]=te(R[k],R[w],R[M]);Te.push(de),Me=Me.concat(de)}for(let J=0;J<v;J++){const A=J/v,R=d*Math.cos(A*Math.PI/2),k=m*Math.sin(A*Math.PI/2)+_;for(let z=0,w=H.length;z<w;z++){const M=$(H[z],pe[z],k);xe(M.x,M.y,-R)}for(let z=0,w=C.length;z<w;z++){const M=C[z];de=Te[z];for(let U=0,B=M.length;U<B;U++){const X=$(M[U],de[U],k);xe(X.x,X.y,-R)}}}const ne=m+_;for(let J=0;J<Y;J++){const A=h?$(F[J],Me[J],ne):F[J];b?(y.copy(T.normals[0]).multiplyScalar(A.x),S.copy(T.binormals[0]).multiplyScalar(A.y),E.copy(x[0]).add(y).add(S),xe(E.x,E.y,E.z)):xe(A.x,A.y,0)}for(let J=1;J<=f;J++)for(let A=0;A<Y;A++){const R=h?$(F[A],Me[A],ne):F[A];b?(y.copy(T.normals[J]).multiplyScalar(R.x),S.copy(T.binormals[J]).multiplyScalar(R.y),E.copy(x[J]).add(y).add(S),xe(E.x,E.y,E.z)):xe(R.x,R.y,u/f*J)}for(let J=v-1;J>=0;J--){const A=J/v,R=d*Math.cos(A*Math.PI/2),k=m*Math.sin(A*Math.PI/2)+_;for(let z=0,w=H.length;z<w;z++){const M=$(H[z],pe[z],k);xe(M.x,M.y,u+R)}for(let z=0,w=C.length;z<w;z++){const M=C[z];de=Te[z];for(let U=0,B=M.length;U<B;U++){const X=$(M[U],de[U],k);b?xe(X.x,X.y+x[f-1].y,x[f-1].x+R):xe(X.x,X.y,u+R)}}}fe(),ve();function fe(){const J=r.length/3;if(h){let A=0,R=Y*A;for(let k=0;k<q;k++){const z=O[k];Se(z[2]+R,z[1]+R,z[0]+R)}A=f+v*2,R=Y*A;for(let k=0;k<q;k++){const z=O[k];Se(z[0]+R,z[1]+R,z[2]+R)}}else{for(let A=0;A<q;A++){const R=O[A];Se(R[2],R[1],R[0])}for(let A=0;A<q;A++){const R=O[A];Se(R[0]+Y*f,R[1]+Y*f,R[2]+Y*f)}}i.addGroup(J,r.length/3-J,0)}function ve(){const J=r.length/3;let A=0;Q(H,A),A+=H.length;for(let R=0,k=C.length;R<k;R++){const z=C[R];Q(z,A),A+=z.length}i.addGroup(J,r.length/3-J,1)}function Q(J,A){let R=J.length;for(;--R>=0;){const k=R;let z=R-1;z<0&&(z=J.length-1);for(let w=0,M=f+v*2;w<M;w++){const U=Y*w,B=Y*(w+1),X=A+k+U,W=A+z+U,se=A+z+B,ee=A+k+B;_e(X,W,se,ee)}}}function xe(J,A,R){l.push(J),l.push(A),l.push(R)}function Se(J,A,R){ge(J),ge(A),ge(R);const k=r.length/3,z=g.generateTopUV(i,r,k-3,k-2,k-1);Ee(z[0]),Ee(z[1]),Ee(z[2])}function _e(J,A,R,k){ge(J),ge(A),ge(k),ge(A),ge(R),ge(k);const z=r.length/3,w=g.generateSideWallUV(i,r,z-6,z-3,z-2,z-1);Ee(w[0]),Ee(w[1]),Ee(w[3]),Ee(w[1]),Ee(w[2]),Ee(w[3])}function ge(J){r.push(l[J*3+0]),r.push(l[J*3+1]),r.push(l[J*3+2])}function Ee(J){s.push(J.x),s.push(J.y)}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return OC(t,i,e)}static fromJSON(e,t){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Tx[r.type]().fromJSON(r)),new to(i,e.options)}}const DC={generateTopUV:function(n,e,t,i,r){const s=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],f=e[r*3+1];return[new ie(s,o),new ie(a,l),new ie(c,f)]},generateSideWallUV:function(n,e,t,i,r,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],f=e[i*3+1],u=e[i*3+2],h=e[r*3],d=e[r*3+1],m=e[r*3+2],_=e[s*3],v=e[s*3+1],p=e[s*3+2];return Math.abs(a-f)<Math.abs(o-c)?[new ie(o,1-l),new ie(c,1-u),new ie(h,1-m),new ie(_,1-p)]:[new ie(a,1-l),new ie(f,1-u),new ie(d,1-m),new ie(v,1-p)]}};function OC(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class nd extends Ze{constructor(e,t=12){super();this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],r=[],s=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let f=0;f<e.length;f++)c(e[f]),this.addGroup(a,l,f),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new ot(r,3)),this.setAttribute("normal",new ot(s,3)),this.setAttribute("uv",new ot(o,2));function c(f){const u=r.length/3,h=f.extractPoints(t);let d=h.shape;const m=h.holes;pr.isClockWise(d)===!1&&(d=d.reverse());for(let v=0,p=m.length;v<p;v++){const g=m[v];pr.isClockWise(g)===!0&&(m[v]=g.reverse())}const _=pr.triangulateShape(d,m);for(let v=0,p=m.length;v<p;v++){const g=m[v];d=d.concat(g)}for(let v=0,p=d.length;v<p;v++){const g=d[v];r.push(g.x,g.y,0),s.push(0,0,1),o.push(g.x,g.y)}for(let v=0,p=_.length;v<p;v++){const g=_[v],x=g[0]+u,b=g[1]+u,T=g[2]+u;i.push(x,b,T),l+=3}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return UC(t,e)}static fromJSON(e,t){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=t[e.shapes[r]];i.push(o)}return new nd(i,e.curveSegments)}}function UC(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}class id extends Ze{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const f=[],u=new L,h=new L,d=[],m=[],_=[],v=[];for(let p=0;p<=i;p++){const g=[],x=p/i;let b=0;p==0&&o==0?b=.5/t:p==i&&l==Math.PI&&(b=-.5/t);for(let T=0;T<=t;T++){const S=T/t;u.x=-e*Math.cos(r+S*s)*Math.sin(o+x*a),u.y=e*Math.cos(o+x*a),u.z=e*Math.sin(r+S*s)*Math.sin(o+x*a),m.push(u.x,u.y,u.z),h.copy(u).normalize(),_.push(h.x,h.y,h.z),v.push(S+b,1-x),g.push(c++)}f.push(g)}for(let p=0;p<i;p++)for(let g=0;g<t;g++){const x=f[p][g+1],b=f[p][g],T=f[p+1][g],S=f[p+1][g+1];(p!==0||o>0)&&d.push(x,b,S),(p!==i-1||l<Math.PI)&&d.push(b,T,S)}this.setIndex(d),this.setAttribute("position",new ot(m,3)),this.setAttribute("normal",new ot(_,3)),this.setAttribute("uv",new ot(v,2))}static fromJSON(e){return new id(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class BC extends It{constructor(e){super();this.type="ShadowMaterial",this.color=new me(0),this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this}}BC.prototype.isShadowMaterial=!0;class Ea extends It{constructor(e){super();this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=er,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}}Ea.prototype.isMeshStandardMaterial=!0;class no extends Ea{constructor(e){super();this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ie(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return sn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.sheenTint=new me(0),this.transmission=0,this.transmissionMap=null,this.thickness=.01,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationTint=new me(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularTint=new me(1,1,1),this.specularTintMap=null,this._clearcoat=0,this._transmission=0,this.setValues(e)}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.sheenTint.copy(e.sheenTint),this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationTint.copy(e.attenuationTint),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularTint.copy(e.specularTint),this.specularTintMap=e.specularTintMap,this}}no.prototype.isMeshPhysicalMaterial=!0;class kC extends It{constructor(e){super();this.type="MeshPhongMaterial",this.color=new me(16777215),this.specular=new me(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=er,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Kl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}}kC.prototype.isMeshPhongMaterial=!0;class HC extends It{constructor(e){super();this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new me(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=er,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}HC.prototype.isMeshToonMaterial=!0;class zC extends It{constructor(e){super();this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=er,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}zC.prototype.isMeshNormalMaterial=!0;class VC extends It{constructor(e){super();this.type="MeshLambertMaterial",this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Kl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}VC.prototype.isMeshLambertMaterial=!0;class GC extends It{constructor(e){super();this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new me(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=er,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this}}GC.prototype.isMeshMatcapMaterial=!0;class WC extends Js{constructor(e){super();this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}WC.prototype.isLineDashedMaterial=!0;const at={arraySlice:function(n,e,t){return at.isTypedArray(n)?new n.constructor(n.subarray(e,t!==void 0?t:n.length)):n.slice(e,t)},convertArray:function(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)},isTypedArray:function(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)},getKeyframeOrder:function(n){function e(r,s){return n[r]-n[s]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i},sortedArray:function(n,e,t){const i=n.length,r=new n.constructor(i);for(let s=0,o=0;o!==i;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=n[a+l]}return r},flattenJSON:function(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=n[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=n[r++];while(s!==void 0)},subclip:function(n,e,t,i,r=30){const s=n.clone();s.name=e;const o=[];for(let l=0;l<s.tracks.length;++l){const c=s.tracks[l],f=c.getValueSize(),u=[],h=[];for(let d=0;d<c.times.length;++d){const m=c.times[d]*r;if(!(m<t||m>=i)){u.push(c.times[d]);for(let _=0;_<f;++_)h.push(c.values[d*f+_])}}u.length!==0&&(c.times=at.convertArray(u,c.times.constructor),c.values=at.convertArray(h,c.values.constructor),o.push(c))}s.tracks=o;let a=1/0;for(let l=0;l<s.tracks.length;++l)a>s.tracks[l].times[0]&&(a=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*a);return s.resetDuration(),s},makeClipAdditive:function(n,e=0,t=n,i=30){i<=0&&(i=30);const r=t.tracks.length,s=e/i;for(let o=0;o<r;++o){const a=t.tracks[o],l=a.ValueTypeName;if(l==="bool"||l==="string")continue;const c=n.tracks.find(function(p){return p.name===a.name&&p.ValueTypeName===l});if(c===void 0)continue;let f=0;const u=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=u/3);let h=0;const d=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=d/3);const m=a.times.length-1;let _;if(s<=a.times[0]){const p=f,g=u-f;_=at.arraySlice(a.values,p,g)}else if(s>=a.times[m]){const p=m*u+f,g=p+u-f;_=at.arraySlice(a.values,p,g)}else{const p=a.createInterpolant(),g=f,x=u-f;p.evaluate(s),_=at.arraySlice(p.resultBuffer,g,x)}l==="quaternion"&&new st().fromArray(_).normalize().conjugate().toArray(_);const v=c.times.length;for(let p=0;p<v;++p){const g=p*d+h;if(l==="quaternion")st.multiplyQuaternionsFlat(c.values,g,_,0,c.values,g);else{const x=d-h*2;for(let b=0;b<x;++b)c.values[g+b]-=_[b]}}}return n.blendMode=W_,n}};class Ai{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.afterEnd_(i-1,e,s)}if(i===a)break;if(s=r,r=t[++i],e<r)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,r);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break t}o=i,i=0;break n}break e}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,r);if(r===void 0)return i=t.length,this._cachedIndex=i,this.afterEnd_(i-1,s,e)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}Ai.prototype.beforeStart_=Ai.prototype.copySampleValue_;Ai.prototype.afterEnd_=Ai.prototype.copySampleValue_;class XC extends Ai{constructor(e,t,i,r){super(e,t,i,r);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ws,endingEnd:ws}}intervalChanged_(e,t,i){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ss:s=e,a=2*t-i;break;case rc:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Ss:o=e,l=2*i-t;break;case rc:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=t}const c=(i-t)*.5,f=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*f,this._offsetNext=o*f}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,f=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,d=this._weightNext,m=(i-t)/(r-t),_=m*m,v=_*m,p=-h*v+2*h*_-h*m,g=(1+h)*v+(-1.5-2*h)*_+(-.5+h)*m+1,x=(-1-d)*v+(1.5+d)*_+.5*m,b=d*v-d*_;for(let T=0;T!==a;++T)s[T]=p*o[f+T]+g*o[c+T]+x*o[l+T]+b*o[u+T];return s}}class Px extends Ai{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,f=(i-t)/(r-t),u=1-f;for(let h=0;h!==a;++h)s[h]=o[c+h]*u+o[l+h]*f;return s}}class YC extends Ai{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class si{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=at.convertArray(t,this.TimeBufferType),this.values=at.convertArray(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:at.convertArray(e.times,Array),values:at.convertArray(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new YC(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Px(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new XC(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case oa:t=this.InterpolantFactoryMethodDiscrete;break;case Ms:t=this.InterpolantFactoryMethodLinear;break;case th:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return oa;case this.InterpolantFactoryMethodLinear:return Ms;case this.InterpolantFactoryMethodSmooth:return th}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=at.arraySlice(i,s,o),this.values=at.arraySlice(this.values,s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&at.isTypedArray(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=at.arraySlice(this.times),t=at.arraySlice(this.values),i=this.getValueSize(),r=this.getInterpolation()===th,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],f=e[a+1];if(c!==f&&(a!==1||c!==e[0]))if(r)l=!0;else{const u=a*i,h=u-i,d=u+i;for(let m=0;m!==i;++m){const _=t[u+m];if(_!==t[h+m]||_!==t[d+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const u=a*i,h=o*i;for(let d=0;d!==i;++d)t[h+d]=t[u+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=at.arraySlice(e,0,o),this.values=at.arraySlice(t,0,o*i)):(this.times=e,this.values=t),this}clone(){const e=at.arraySlice(this.times,0),t=at.arraySlice(this.values,0),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}si.prototype.TimeBufferType=Float32Array;si.prototype.ValueBufferType=Float32Array;si.prototype.DefaultInterpolation=Ms;class io extends si{}io.prototype.ValueTypeName="bool";io.prototype.ValueBufferType=Array;io.prototype.DefaultInterpolation=oa;io.prototype.InterpolantFactoryMethodLinear=void 0;io.prototype.InterpolantFactoryMethodSmooth=void 0;class Rx extends si{}Rx.prototype.ValueTypeName="color";class La extends si{}La.prototype.ValueTypeName="number";class qC extends Ai{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(r-t);let c=e*a;for(let f=c+a;c!==f;c+=4)st.slerpFlat(s,0,o,c-a,o,c,l);return s}}class Xr extends si{InterpolantFactoryMethodLinear(e){return new qC(this.times,this.values,this.getValueSize(),e)}}Xr.prototype.ValueTypeName="quaternion";Xr.prototype.DefaultInterpolation=Ms;Xr.prototype.InterpolantFactoryMethodSmooth=void 0;class ro extends si{}ro.prototype.ValueTypeName="string";ro.prototype.ValueBufferType=Array;ro.prototype.DefaultInterpolation=oa;ro.prototype.InterpolantFactoryMethodLinear=void 0;ro.prototype.InterpolantFactoryMethodSmooth=void 0;class Pa extends si{}Pa.prototype.ValueTypeName="vector";class rd{constructor(e,t=-1,i,r=nh){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=Cn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(QC(i[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=i.length;s!==o;++s)t.push(si.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const f=at.getKeyframeOrder(l);l=at.sortedArray(l,1,f),c=at.sortedArray(c,1,f),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new La(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],f=c.name.match(s);if(f&&f.length>1){const u=f[1];let h=r[u];h||(r[u]=h=[]),h.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(u,h,d,m,_){if(d.length!==0){const v=[],p=[];at.flattenJSON(d,v,p,m),v.length!==0&&_.push(new u(h,v,p))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const h=c[u].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const d={};let m;for(m=0;m<h.length;m++)if(h[m].morphTargets)for(let _=0;_<h[m].morphTargets.length;_++)d[h[m].morphTargets[_]]=-1;for(const _ in d){const v=[],p=[];for(let g=0;g!==h[m].morphTargets.length;++g){const x=h[m];v.push(x.time),p.push(x.morphTarget===_?1:0)}r.push(new La(".morphTargetInfluence["+_+"]",v,p))}l=d.length*(o||1)}else{const d=".bones["+t[u].name+"]";i(Pa,d+".position",h,"pos",r),i(Xr,d+".quaternion",h,"rot",r),i(Pa,d+".scale",h,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function jC(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return La;case"vector":case"vector2":case"vector3":case"vector4":return Pa;case"color":return Rx;case"quaternion":return Xr;case"bool":case"boolean":return io;case"string":return ro}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function QC(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=jC(n.type);if(n.times===void 0){const t=[],i=[];at.flattenJSON(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const so={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class $C{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(f){a++,s===!1&&r.onStart!==void 0&&r.onStart(f,o,a),s=!0},this.itemEnd=function(f){o++,r.onProgress!==void 0&&r.onProgress(f,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(f){r.onError!==void 0&&r.onError(f)},this.resolveURL=function(f){return l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,u){return c.push(f,u),this},this.removeHandler=function(f){const u=c.indexOf(f);return u!==-1&&c.splice(u,2),this},this.getHandler=function(f){for(let u=0,h=c.length;u<h;u+=2){const d=c[u],m=c[u+1];if(d.global&&(d.lastIndex=0),d.test(f))return m}return null}}}const KC=new $C;class Ei{constructor(e){this.manager=e!==void 0?e:KC,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Gn={};class sd extends Ei{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=so.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;if(Gn[e]!==void 0){Gn[e].push({onLoad:t,onProgress:i,onError:r});return}const a=/^data:(.*?)(;base64)?,(.*)$/,l=e.match(a);let c;if(l){const f=l[1],u=!!l[2];let h=l[3];h=decodeURIComponent(h),u&&(h=atob(h));try{let d;const m=(this.responseType||"").toLowerCase();switch(m){case"arraybuffer":case"blob":const _=new Uint8Array(h.length);for(let p=0;p<h.length;p++)_[p]=h.charCodeAt(p);m==="blob"?d=new Blob([_.buffer],{type:f}):d=_.buffer;break;case"document":d=new DOMParser().parseFromString(h,f);break;case"json":d=JSON.parse(h);break;default:d=h;break}setTimeout(function(){t&&t(d),s.manager.itemEnd(e)},0)}catch(d){setTimeout(function(){r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)},0)}}else{Gn[e]=[],Gn[e].push({onLoad:t,onProgress:i,onError:r}),c=new XMLHttpRequest,c.open("GET",e,!0),c.addEventListener("load",function(f){const u=this.response,h=Gn[e];if(delete Gn[e],this.status===200||this.status===0){this.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),so.add(e,u);for(let d=0,m=h.length;d<m;d++){const _=h[d];_.onLoad&&_.onLoad(u)}s.manager.itemEnd(e)}else{for(let d=0,m=h.length;d<m;d++){const _=h[d];_.onError&&_.onError(f)}s.manager.itemError(e),s.manager.itemEnd(e)}},!1),c.addEventListener("progress",function(f){const u=Gn[e];for(let h=0,d=u.length;h<d;h++){const m=u[h];m.onProgress&&m.onProgress(f)}},!1),c.addEventListener("error",function(f){const u=Gn[e];delete Gn[e];for(let h=0,d=u.length;h<d;h++){const m=u[h];m.onError&&m.onError(f)}s.manager.itemError(e),s.manager.itemEnd(e)},!1),c.addEventListener("abort",function(f){const u=Gn[e];delete Gn[e];for(let h=0,d=u.length;h<d;h++){const m=u[h];m.onError&&m.onError(f)}s.manager.itemError(e),s.manager.itemEnd(e)},!1),this.responseType!==void 0&&(c.responseType=this.responseType),this.withCredentials!==void 0&&(c.withCredentials=this.withCredentials),c.overrideMimeType&&c.overrideMimeType(this.mimeType!==void 0?this.mimeType:"text/plain");for(const f in this.requestHeader)c.setRequestHeader(f,this.requestHeader[f]);c.send(null)}return s.manager.itemStart(e),c}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Cx extends Ei{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=so.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=document.createElementNS("http://www.w3.org/1999/xhtml","img");function l(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1),so.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class ZC extends Ei{constructor(e){super(e)}load(e,t,i,r){const s=new Sc,o=new Cx(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(e[c],function(f){s.images[c]=f,a++,a===6&&(s.needsUpdate=!0,t&&t(s))},void 0,r)}for(let c=0;c<e.length;++c)l(c);return s}}class Fx extends Ei{constructor(e){super(e)}load(e,t,i,r){const s=new Ft,o=new Cx(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a;const l=e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0;s.format=l?ti:Qt,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class JC extends Dn{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Yc(t,e))}getPoint(e){const t=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=t){const s=i[r]-t,o=this.curves[r],a=o.getLength(),l=a===0?0:1-s/a;return o.getPointAt(l)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o&&o.isEllipseCurve?e*2:o&&(o.isLineCurve||o.isLineCurve3)?1:o&&o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const f=l[c];i&&i.equals(f)||(t.push(f),i=f)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new Tx[r.type]().fromJSON(r))}return this}}class od extends JC{constructor(e){super();this.type="Path",this.currentPoint=new ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Yc(this.currentPoint.clone(),new ie(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new Zh(this.currentPoint.clone(),new ie(e,t),new ie(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){const a=new Kh(this.currentPoint.clone(),new ie(e,t),new ie(i,r),new ie(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Jh(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,l){const c=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(e+c,t+f,i,r,s,o,a,l),this}absellipse(e,t,i,r,s,o,a,l){const c=new Wc(e,t,i,r,s,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const f=c.getPoint(1);return this.currentPoint.copy(f),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ad extends od{constructor(e){super(e);this.uuid=Cn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new od().fromJSON(r))}return this}}class oi extends We{constructor(e,t=1){super();this.type="Light",this.color=new me(e),this.intensity=t}dispose(){}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}oi.prototype.isLight=!0;class Ix extends oi{constructor(e,t,i){super(e,i);this.type="HemisphereLight",this.position.copy(We.DefaultUp),this.updateMatrix(),this.groundColor=new me(t)}copy(e){return oi.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}}Ix.prototype.isHemisphereLight=!0;const Nx=new ye,Dx=new L,Ox=new L;class ld{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ie(512,512),this.map=null,this.mapPass=null,this.matrix=new ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ec,this._frameExtents=new ie(1,1),this._viewportCount=1,this._viewports=[new Oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Dx.setFromMatrixPosition(e.matrixWorld),t.position.copy(Dx),Ox.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ox),t.updateMatrixWorld(),Nx.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nx),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(t.projectionMatrix),i.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ux extends ld{constructor(){super(new Kt(50,1,.5,500));this.focus=1}updateMatrices(e){const t=this.camera,i=ca*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}Ux.prototype.isSpotLightShadow=!0;class Bx extends oi{constructor(e,t,i=0,r=Math.PI/3,s=0,o=1){super(e,t);this.type="SpotLight",this.position.copy(We.DefaultUp),this.updateMatrix(),this.target=new We,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.shadow=new Ux}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}Bx.prototype.isSpotLight=!0;const kx=new ye,Ra=new L,cd=new L;class Hx extends ld{constructor(){super(new Kt(90,1,.5,500));this._frameExtents=new ie(4,2),this._viewportCount=6,this._viewports=[new Oe(2,1,1,1),new Oe(0,1,1,1),new Oe(3,1,1,1),new Oe(1,1,1,1),new Oe(3,0,1,1),new Oe(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Ra.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ra),cd.copy(i.position),cd.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(cd),i.updateMatrixWorld(),r.makeTranslation(-Ra.x,-Ra.y,-Ra.z),kx.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kx)}}Hx.prototype.isPointLightShadow=!0;class zx extends oi{constructor(e,t,i=0,r=1){super(e,t);this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Hx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}zx.prototype.isPointLight=!0;class Vx extends ld{constructor(){super(new Gr(-5,5,5,-5,.5,500))}}Vx.prototype.isDirectionalLightShadow=!0;class ud extends oi{constructor(e,t){super(e,t);this.type="DirectionalLight",this.position.copy(We.DefaultUp),this.updateMatrix(),this.target=new We,this.shadow=new Vx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}ud.prototype.isDirectionalLight=!0;class eF extends oi{constructor(e,t){super(e,t);this.type="AmbientLight"}}eF.prototype.isAmbientLight=!0;class tF extends oi{constructor(e,t,i=10,r=10){super(e,t);this.type="RectAreaLight",this.width=i,this.height=r}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}tF.prototype.isRectAreaLight=!0;class Gx{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new L)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const i=e.x,r=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.282095),t.addScaledVector(o[1],.488603*r),t.addScaledVector(o[2],.488603*s),t.addScaledVector(o[3],.488603*i),t.addScaledVector(o[4],1.092548*(i*r)),t.addScaledVector(o[5],1.092548*(r*s)),t.addScaledVector(o[6],.315392*(3*s*s-1)),t.addScaledVector(o[7],1.092548*(i*s)),t.addScaledVector(o[8],.546274*(i*i-r*r)),t}getIrradianceAt(e,t){const i=e.x,r=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.886227),t.addScaledVector(o[1],2*.511664*r),t.addScaledVector(o[2],2*.511664*s),t.addScaledVector(o[3],2*.511664*i),t.addScaledVector(o[4],2*.429043*i*r),t.addScaledVector(o[5],2*.429043*r*s),t.addScaledVector(o[6],.743125*s*s-.247708),t.addScaledVector(o[7],2*.429043*i*s),t.addScaledVector(o[8],.429043*(i*i-r*r)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let i=0;i<9;i++)this.coefficients[i].addScaledVector(e.coefficients[i],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let i=0;i<9;i++)this.coefficients[i].lerp(e.coefficients[i],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const i=this.coefficients;for(let r=0;r<9;r++)i[r].fromArray(e,t+r*3);return this}toArray(e=[],t=0){const i=this.coefficients;for(let r=0;r<9;r++)i[r].toArray(e,t+r*3);return e}static getBasisAt(e,t){const i=e.x,r=e.y,s=e.z;t[0]=.282095,t[1]=.488603*r,t[2]=.488603*s,t[3]=.488603*i,t[4]=1.092548*i*r,t[5]=1.092548*r*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*i*s,t[8]=.546274*(i*i-r*r)}}Gx.prototype.isSphericalHarmonics3=!0;class fd extends oi{constructor(e=new Gx,t=1){super(void 0,t);this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}fd.prototype.isLightProbe=!0;class oo{static decodeText(e){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.substr(0,t+1)}}class nF extends Ze{constructor(){super();this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const e=super.toJSON(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}nF.prototype.isInstancedBufferGeometry=!0;class Wx extends Ei{constructor(e){super(e);typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=so.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){so.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){r&&r(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}Wx.prototype.isImageBitmapLoader=!0;let $c;const iF={getContext:function(){return $c===void 0&&($c=new(window.AudioContext||window.webkitAudioContext)),$c},setContext:function(n){$c=n}};class rF extends Ei{constructor(e){super(e)}load(e,t,i,r){const s=this,o=new sd(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{const l=a.slice(0);iF.getContext().decodeAudioData(l,function(f){t(f)})}catch(l){r?r(l):console.error(l),s.manager.itemError(e)}},i,r)}}class sF extends fd{constructor(e,t,i=1){super(void 0,i);const r=new me().set(e),s=new me().set(t),o=new L(r.r,r.g,r.b),a=new L(s.r,s.g,s.b),l=Math.sqrt(Math.PI),c=l*Math.sqrt(.75);this.sh.coefficients[0].copy(o).add(a).multiplyScalar(l),this.sh.coefficients[1].copy(o).sub(a).multiplyScalar(c)}}sF.prototype.isHemisphereLightProbe=!0;class oF extends fd{constructor(e,t=1){super(void 0,t);const i=new me().set(e);this.sh.coefficients[0].set(i.r,i.g,i.b).multiplyScalar(2*Math.sqrt(Math.PI))}}oF.prototype.isAmbientLightProbe=!0;class Xx{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Yx(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Yx();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Yx(){return(typeof performance=="undefined"?Date:performance).now()}class aF extends We{constructor(e){super();this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}class lF{constructor(e,t,i){this.binding=e,this.valueSize=i;let r,s,o;switch(t){case"quaternion":r=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":r=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:r=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const i=this.buffer,r=this.valueSize,s=e*r+r;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==r;++a)i[s+a]=i[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(i,s,0,a,r)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,i=this.valueSize,r=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,i=this.buffer,r=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(i,r,l,1-s,t)}o>0&&this._mixBufferRegionAdditive(i,r,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(i[l]!==i[l+t]){a.setValue(i,r);break}}saveOriginalState(){const e=this.binding,t=this.buffer,i=this.valueSize,r=i*this._origIndex;e.getValue(t,r);for(let s=i,o=r;s!==o;++s)t[s]=t[r+s%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,r,s){if(r>=.5)for(let o=0;o!==s;++o)e[t+o]=e[i+o]}_slerp(e,t,i,r){st.slerpFlat(e,t,e,t,e,i,r)}_slerpAdditive(e,t,i,r,s){const o=this._workIndex*s;st.multiplyQuaternionsFlat(e,o,e,t,e,i),st.slerpFlat(e,t,e,t,e,o,r)}_lerp(e,t,i,r,s){const o=1-r;for(let a=0;a!==s;++a){const l=t+a;e[l]=e[l]*o+e[i+a]*r}}_lerpAdditive(e,t,i,r,s){for(let o=0;o!==s;++o){const a=t+o;e[a]=e[a]+e[i+o]*r}}}const hd="\\[\\]\\.:\\/",cF=new RegExp("["+hd+"]","g"),dd="[^"+hd+"]",uF="[^"+hd.replace("\\.","")+"]",fF=/((?:WC+[\/:])*)/.source.replace("WC",dd),hF=/(WCOD+)?/.source.replace("WCOD",uF),dF=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",dd),pF=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",dd),mF=new RegExp("^"+fF+hF+dF+pF+"$"),gF=["material","materials","bones"];class _F{constructor(e,t,i){const r=i||Qe.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Qe{constructor(e,t,i){this.path=t,this.parsedPath=i||Qe.parseTrackName(t),this.node=Qe.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Qe.Composite(e,t,i):new Qe(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(cF,"")}static parseTrackName(e){const t=mF.exec(e);if(!t)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);gF.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(!t||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=Qe.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let f=0;f<e.length;f++)if(e[f].name===c){c=f;break}break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(e.geometry.isBufferGeometry){if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Qe.Composite=_F;Qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Qe.prototype.GetterByBindingType=[Qe.prototype._getValue_direct,Qe.prototype._getValue_array,Qe.prototype._getValue_arrayElement,Qe.prototype._getValue_toArray];Qe.prototype.SetterByBindingTypeAndVersioning=[[Qe.prototype._setValue_direct,Qe.prototype._setValue_direct_setNeedsUpdate,Qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_array,Qe.prototype._setValue_array_setNeedsUpdate,Qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_arrayElement,Qe.prototype._setValue_arrayElement_setNeedsUpdate,Qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_fromArray,Qe.prototype._setValue_fromArray_setNeedsUpdate,Qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class vF{constructor(e,t,i=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=r;const s=t.tracks,o=s.length,a=new Array(o),l={endingStart:ws,endingEnd:ws};for(let c=0;c!==o;++c){const f=s[c].createInterpolant(null);a[c]=f,f.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=JA,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i){if(e.fadeOut(t),this.fadeIn(t),i){const r=this._clip.duration,s=e._clip.duration,o=s/r,a=r/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,i){return e.crossFadeFrom(this,t,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){const r=this._mixer,s=r.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=r._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+i,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,r){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*i;if(l<0||i===0)return;this._startTime=null,t=i*l}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case W_:for(let f=0,u=l.length;f!==u;++f)l[f].evaluate(o),c[f].accumulateAdditive(a);break;case nh:default:for(let f=0,u=l.length;f!==u;++f)l[f].evaluate(o),c[f].accumulate(r,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const i=this._weightInterpolant;if(i!==null){const r=i.evaluate(e)[0];t*=r,e>i.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const i=this._timeScaleInterpolant;i!==null&&(t*=i.evaluate(e)[0],e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t))}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,i=this.loop;let r=this.time+e,s=this._loopCount;const o=i===eE;if(e===0)return s===-1?r:o&&(s&1)==1?t-r:r;if(i===ZA){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),r>=t||r<0){const a=Math.floor(r/t);r-=t*a,s+=Math.abs(a);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=r;if(o&&(s&1)==1)return t-r}return r}_setEndings(e,t,i){const r=this._interpolantSettings;i?(r.endingStart=Ss,r.endingEnd=Ss):(e?r.endingStart=this.zeroSlopeAtStart?Ss:ws:r.endingStart=rc,t?r.endingEnd=this.zeroSlopeAtEnd?Ss:ws:r.endingEnd=rc)}_scheduleFading(e,t,i){const r=this._mixer,s=r.time;let o=this._weightInterpolant;o===null&&(o=r._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=t,a[1]=s+e,l[1]=i,this}}class xF extends tr{constructor(e){super();this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const i=e._localRoot||this._root,r=e._clip.tracks,s=r.length,o=e._propertyBindings,a=e._interpolants,l=i.uuid,c=this._bindingsByRootAndName;let f=c[l];f===void 0&&(f={},c[l]=f);for(let u=0;u!==s;++u){const h=r[u],d=h.name;let m=f[d];if(m!==void 0)o[u]=m;else{if(m=o[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,d));continue}const _=t&&t._propertyBindings[u].binding.parsedPath;m=new lF(Qe.create(i,d,_),h.ValueTypeName,h.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,d),o[u]=m}a[u].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const i=(e._localRoot||this._root).uuid,r=e._clip.uuid,s=this._actionsByClip[r];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,r,i)}const t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){const s=t[i];s.useCount++==0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){const s=t[i];--s.useCount==0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){const r=this._actions,s=this._actionsByClip;let o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=r.length,r.push(e),o.actionByRoot[i]=e}_removeInactiveAction(e){const t=this._actions,i=t[t.length-1],r=e._cacheIndex;i._cacheIndex=r,t[r]=i,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,c=l[l.length-1],f=e._byClipCacheIndex;c._byClipCacheIndex=f,l[f]=c,l.pop(),e._byClipCacheIndex=null;const u=a.actionByRoot,h=(e._localRoot||this._root).uuid;delete u[h],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){const s=t[i];--s.referenceCount==0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,i=e._cacheIndex,r=this._nActiveActions++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_takeBackAction(e){const t=this._actions,i=e._cacheIndex,r=--this._nActiveActions,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_addInactiveBinding(e,t,i){const r=this._bindingsByRootAndName,s=this._bindings;let o=r[t];o===void 0&&(o={},r[t]=o),o[i]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,i=e.binding,r=i.rootNode.uuid,s=i.path,o=this._bindingsByRootAndName,a=o[r],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[r]}_lendBinding(e){const t=this._bindings,i=e._cacheIndex,r=this._nActiveBindings++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_takeBackBinding(e){const t=this._bindings,i=e._cacheIndex,r=--this._nActiveBindings,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let i=e[t];return i===void 0&&(i=new Px(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){const t=this._controlInterpolants,i=e.__cacheIndex,r=--this._nActiveControlInterpolants,s=t[r];e.__cacheIndex=r,t[r]=e,s.__cacheIndex=i,t[i]=s}clipAction(e,t,i){const r=t||this._root,s=r.uuid;let o=typeof e=="string"?rd.findByName(r,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(i===void 0&&(o!==null?i=o.blendMode:i=nh),l!==void 0){const u=l.actionByRoot[s];if(u!==void 0&&u.blendMode===i)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const f=new vF(this,o,t,i);return this._bindAction(f,c),this._addInactiveAction(f,a,s),f}existingAction(e,t){const i=t||this._root,r=i.uuid,s=typeof e=="string"?rd.findByName(i,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[r]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;const t=this._actions,i=this._nActiveActions,r=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==i;++c)t[c]._update(r,e,s,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,i=e.uuid,r=this._actionsByClip,s=r[i];if(s!==void 0){const o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const f=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=f,t[f]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete r[i]}}uncacheRoot(e){const t=e.uuid,i=this._actionsByClip;for(const o in i){const a=i[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const r=this._bindingsByRootAndName,s=r[t];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}xF.prototype._controlInterpolantsResultBuffer=new Float32Array(1);class yF extends qs{constructor(e,t,i=1){super(e,t);this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}yF.prototype.isInstancedInterleavedBuffer=!0;class bF{constructor(e,t,i=0,r=1/0){this.ray=new Vr(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new ev,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t&&t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t&&t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!1,i=[]){return pd(e,this,i,t),i.sort(qx),i}intersectObjects(e,t=!1,i=[]){for(let r=0,s=e.length;r<s;r++)pd(e[r],this,i,t);return i.sort(qx),i}}function qx(n,e){return n.distance-e.distance}function pd(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const r=n.children;for(let s=0,o=r.length;s<o;s++)pd(r[s],e,t,!0)}}class jx{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){const e=1e-6;return this.phi=Math.max(e,Math.min(Math.PI-e,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(sn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class TF extends We{constructor(e){super();this.material=e,this.render=function(){},this.hasPositions=!1,this.hasNormals=!1,this.hasColors=!1,this.hasUvs=!1,this.positionArray=null,this.normalArray=null,this.colorArray=null,this.uvArray=null,this.count=0}}TF.prototype.isImmediateRenderObject=!0;const mr=new L,Kc=new ye,md=new ye;class MF extends zc{constructor(e){const t=Qx(e),i=new Ze,r=[],s=[],o=new me(0,0,1),a=new me(0,1,0);for(let c=0;c<t.length;c++){const f=t[c];f.parent&&f.parent.isBone&&(r.push(0,0,0),r.push(0,0,0),s.push(o.r,o.g,o.b),s.push(a.r,a.g,a.b))}i.setAttribute("position",new ot(r,3)),i.setAttribute("color",new ot(s,3));const l=new Js({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(i,l);this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,i=this.geometry,r=i.getAttribute("position");md.copy(this.root.matrixWorld).invert();for(let s=0,o=0;s<t.length;s++){const a=t[s];a.parent&&a.parent.isBone&&(Kc.multiplyMatrices(md,a.matrixWorld),mr.setFromMatrixPosition(Kc),r.setXYZ(o,mr.x,mr.y,mr.z),Kc.multiplyMatrices(md,a.parent.matrixWorld),mr.setFromMatrixPosition(Kc),r.setXYZ(o+1,mr.x,mr.y,mr.z),o+=2)}i.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}}function Qx(n){const e=[];n&&n.isBone&&e.push(n);for(let t=0;t<n.children.length;t++)e.push.apply(e,Qx(n.children[t]));return e}class wF extends zc{constructor(e=10,t=10,i=4473924,r=8947848){i=new me(i),r=new me(r);const s=t/2,o=e/t,a=e/2,l=[],c=[];for(let h=0,d=0,m=-a;h<=t;h++,m+=o){l.push(-a,0,m,a,0,m),l.push(m,0,-a,m,0,a);const _=h===s?i:r;_.toArray(c,d),d+=3,_.toArray(c,d),d+=3,_.toArray(c,d),d+=3,_.toArray(c,d),d+=3}const f=new Ze;f.setAttribute("position",new ot(l,3)),f.setAttribute("color",new ot(c,3));const u=new Js({vertexColors:!0,toneMapped:!1});super(f,u);this.type="GridHelper"}}const SF=new Float32Array(1);new Int32Array(SF.buffer);Dn.create=function(n,e){return console.log("THREE.Curve.create() has been deprecated"),n.prototype=Object.create(Dn.prototype),n.prototype.constructor=n,n.prototype.getPoint=e,n};od.prototype.fromPoints=function(n){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(n)};wF.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};MF.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};Ei.prototype.extractUrlBase=function(n){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),oo.extractUrlBase(n)};Ei.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};Fn.prototype.center=function(n){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(n)};Fn.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Fn.prototype.isIntersectionBox=function(n){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(n)};Fn.prototype.isIntersectionSphere=function(n){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(n)};Fn.prototype.size=function(n){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(n)};zr.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Ec.prototype.setFromMatrix=function(n){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(n)};Vt.prototype.flattenToArrayOffset=function(n,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(n,e)};Vt.prototype.multiplyVector3=function(n){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),n.applyMatrix3(this)};Vt.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")};Vt.prototype.applyToBufferAttribute=function(n){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),n.applyMatrix3(this)};Vt.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")};Vt.prototype.getInverse=function(n){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(n).invert()};ye.prototype.extractPosition=function(n){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(n)};ye.prototype.flattenToArrayOffset=function(n,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(n,e)};ye.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new L().setFromMatrixColumn(this,3)};ye.prototype.setRotationFromQuaternion=function(n){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(n)};ye.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")};ye.prototype.multiplyVector3=function(n){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),n.applyMatrix4(this)};ye.prototype.multiplyVector4=function(n){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),n.applyMatrix4(this)};ye.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")};ye.prototype.rotateAxis=function(n){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),n.transformDirection(this)};ye.prototype.crossVector=function(n){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),n.applyMatrix4(this)};ye.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")};ye.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")};ye.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")};ye.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")};ye.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")};ye.prototype.applyToBufferAttribute=function(n){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),n.applyMatrix4(this)};ye.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")};ye.prototype.makeFrustum=function(n,e,t,i,r,s){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(n,e,i,t,r,s)};ye.prototype.getInverse=function(n){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(n).invert()};Si.prototype.isIntersectionLine=function(n){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(n)};st.prototype.multiplyVector3=function(n){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),n.applyQuaternion(this)};st.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()};Vr.prototype.isIntersectionBox=function(n){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(n)};Vr.prototype.isIntersectionPlane=function(n){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(n)};Vr.prototype.isIntersectionSphere=function(n){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(n)};wt.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()};wt.prototype.barycoordFromPoint=function(n,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(n,e)};wt.prototype.midpoint=function(n){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(n)};wt.prototypenormal=function(n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(n)};wt.prototype.plane=function(n){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(n)};wt.barycoordFromPoint=function(n,e,t,i,r){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),wt.getBarycoord(n,e,t,i,r)};wt.normal=function(n,e,t,i){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),wt.getNormal(n,e,t,i)};ad.prototype.extractAllPoints=function(n){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(n)};ad.prototype.extrude=function(n){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new to(this,n)};ad.prototype.makeGeometry=function(n){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new nd(this,n)};ie.prototype.fromAttribute=function(n,e,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(n,e,t)};ie.prototype.distanceToManhattan=function(n){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(n)};ie.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};L.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")};L.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")};L.prototype.getPositionFromMatrix=function(n){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(n)};L.prototype.getScaleFromMatrix=function(n){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(n)};L.prototype.getColumnFromMatrix=function(n,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,n)};L.prototype.applyProjection=function(n){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(n)};L.prototype.fromAttribute=function(n,e,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(n,e,t)};L.prototype.distanceToManhattan=function(n){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(n)};L.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};Oe.prototype.fromAttribute=function(n,e,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(n,e,t)};Oe.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};We.prototype.getChildByName=function(n){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(n)};We.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")};We.prototype.translate=function(n,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,n)};We.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")};We.prototype.applyMatrix=function(n){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(n)};Object.defineProperties(We.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(n){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=n}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});Dt.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")};Object.defineProperties(Dt.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),tE},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});Oc.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};Kt.prototype.setLens=function(n,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(n)};Object.defineProperties(oi.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(n){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=n}},shadowCameraLeft:{set:function(n){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=n}},shadowCameraRight:{set:function(n){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=n}},shadowCameraTop:{set:function(n){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=n}},shadowCameraBottom:{set:function(n){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=n}},shadowCameraNear:{set:function(n){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=n}},shadowCameraFar:{set:function(n){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=n}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(n){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=n}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(n){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=n}},shadowMapHeight:{set:function(n){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=n}}});Object.defineProperties(xt.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===ac},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(ac)}}});xt.prototype.setDynamic=function(n){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(n===!0?ac:aa),this};xt.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},xt.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};Ze.prototype.addIndex=function(n){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(n)};Ze.prototype.addAttribute=function(n,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(n,new xt(arguments[1],arguments[2]))):n==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(n,e)};Ze.prototype.addDrawCall=function(n,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(n,e)};Ze.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()};Ze.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")};Ze.prototype.removeAttribute=function(n){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(n)};Ze.prototype.applyMatrix=function(n){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(n)};Object.defineProperties(Ze.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});qs.prototype.setDynamic=function(n){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(n===!0?ac:aa),this};qs.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};to.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")};to.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")};to.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")};Fc.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")};Object.defineProperties(It.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new me}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(n){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===w_}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(n){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=n}},vertexTangents:{get:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")},set:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}});Object.defineProperties(on.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(n){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=n}}});Je.prototype.clearTarget=function(n,e,t,i){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(n),this.clear(e,t,i)};Je.prototype.animate=function(n){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(n)};Je.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()};Je.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()};Je.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision};Je.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()};Je.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")};Je.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")};Je.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")};Je.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")};Je.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")};Je.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")};Je.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures};Je.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")};Je.prototype.enableScissorTest=function(n){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(n)};Je.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};Je.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};Je.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};Je.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};Je.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")};Je.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")};Je.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")};Je.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")};Je.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")};Je.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()};Object.defineProperties(Je.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(n){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=n}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(n){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=n}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(n){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=n===!0?Rn:vt}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}});Object.defineProperties(jv.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(fn.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(n){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=n}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(n){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=n}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(n){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=n}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(n){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=n}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(n){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=n}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(n){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=n}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(n){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=n}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(n){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=n}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(n){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=n}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(n){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=n}}});aF.prototype.load=function(n){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const e=this;return new rF().load(n,function(i){e.setBuffer(i)}),this};Fh.prototype.updateCubeMap=function(n,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(n,e)};Fh.prototype.clear=function(n,e,t,i){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(n,e,t,i)};Es.crossOrigin=void 0;Es.loadTexture=function(n,e,t,i){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const r=new Fx;r.setCrossOrigin(this.crossOrigin);const s=r.load(n,t,void 0,i);return e&&(s.mapping=e),s};Es.loadTextureCube=function(n,e,t,i){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const r=new ZC;r.setCrossOrigin(this.crossOrigin);const s=r.load(n,t,void 0,i);return e&&(s.mapping=e),s};Es.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};Es.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xi}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xi);class $x extends Ei{constructor(e){super(e);this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new PF(t)}),this.register(function(t){return new NF(t)}),this.register(function(t){return new DF(t)}),this.register(function(t){return new RF(t)}),this.register(function(t){return new CF(t)}),this.register(function(t){return new FF(t)}),this.register(function(t){return new IF(t)}),this.register(function(t){return new EF(t)}),this.register(function(t){return new OF(t)})}load(e,t,i,r){const s=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=oo.extractUrlBase(e),this.manager.itemStart(e);const a=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new sd(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(f){t(f),s.manager.itemEnd(e)},a)}catch(f){a(f)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let s;const o={},a={};if(typeof e=="string")s=e;else if(oo.decodeText(new Uint8Array(e,0,4))===Kx){try{o[Ge.KHR_BINARY_GLTF]=new UF(e)}catch(u){r&&r(u);return}s=o[Ge.KHR_BINARY_GLTF].content}else s=oo.decodeText(new Uint8Array(e));const l=JSON.parse(s);if(l.asset===void 0||l.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new QF(l,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let f=0;f<this.pluginCallbacks.length;f++){const u=this.pluginCallbacks[f](c);a[u.name]=u,o[u.name]=!0}if(l.extensionsUsed)for(let f=0;f<l.extensionsUsed.length;++f){const u=l.extensionsUsed[f],h=l.extensionsRequired||[];switch(u){case Ge.KHR_MATERIALS_UNLIT:o[u]=new LF;break;case Ge.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:o[u]=new HF;break;case Ge.KHR_DRACO_MESH_COMPRESSION:o[u]=new BF(l,this.dracoLoader);break;case Ge.KHR_TEXTURE_TRANSFORM:o[u]=new kF;break;case Ge.KHR_MESH_QUANTIZATION:o[u]=new zF;break;default:h.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,r)}}function AF(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const Ge={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:"KHR_materials_pbrSpecularGlossiness",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression"};class EF{constructor(e){this.parser=e,this.name=Ge.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let r=t.cache.get(i);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const f=new me(16777215);l.color!==void 0&&f.fromArray(l.color);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new ud(f),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new zx(f),c.distance=u;break;case"spot":c=new Bx(f),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(i,r),r}createNodeAttachment(e){const t=this,i=this.parser,s=i.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class LF{constructor(){this.name=Ge.KHR_MATERIALS_UNLIT}getMaterialType(){return In}extendParams(e,t,i){const r=[];e.color=new me(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.fromArray(o),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",s.baseColorTexture))}return Promise.all(r)}}class PF{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:no}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ie(a,-a)}return Promise.all(s)}}class RF{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:no}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class CF{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:no}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||0;const a=o.attenuationColor||[1,1,1];return t.attenuationTint=new me(a[0],a[1],a[2]),Promise.all(s)}}class FF{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:no}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class IF{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:no}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularTint=new me(a[0],a[1],a[2]),o.specularColorTexture!==void 0&&s.push(i.assignTexture(t,"specularTintMap",o.specularColorTexture).then(function(l){l.encoding=Rn})),Promise.all(s)}}class NF{constructor(e){this.parser=e,this.name=Ge.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=i.images[s.source],a=t.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,o,a)}}class DF{constructor(e){this.parser=e,this.name=Ge.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,a,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class OF{constructor(e){this.name=Ge.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return Promise.all([s,o.ready]).then(function(a){const l=r.byteOffset||0,c=r.byteLength||0,f=r.count,u=r.byteStride,h=new ArrayBuffer(f*u),d=new Uint8Array(a[0],l,c);return o.decodeGltfBuffer(new Uint8Array(h),f,u,d,r.mode,r.filter),h})}else return null}}const Kx="glTF",Ca=12,Zx={JSON:1313821514,BIN:5130562};class UF{constructor(e){this.name=Ge.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ca);if(this.header={magic:oo.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Kx)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Ca,r=new DataView(e,Ca);let s=0;for(;s<i;){const o=r.getUint32(s,!0);s+=4;const a=r.getUint32(s,!0);if(s+=4,a===Zx.JSON){const l=new Uint8Array(e,Ca+s,o);this.content=oo.decodeText(l)}else if(a===Zx.BIN){const l=Ca+s;this.body=e.slice(l,l+o)}s+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class BF{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ge.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const f in o){const u=_d[f]||f.toLowerCase();a[u]=o[f]}for(const f in e.attributes){const u=_d[f]||f.toLowerCase();if(o[f]!==void 0){const h=i.accessors[e.attributes[f]],d=Fa[h.componentType];c[u]=d,l[u]=h.normalized===!0}}return t.getDependency("bufferView",s).then(function(f){return new Promise(function(u){r.decodeDracoFile(f,function(h){for(const d in h.attributes){const m=h.attributes[d],_=l[d];_!==void 0&&(m.normalized=_)}u(h)},a,c)})})}}class kF{constructor(){this.name=Ge.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class gd extends Ea{constructor(e){super();this.isGLTFSpecularGlossinessMaterial=!0;const t=["#ifdef USE_SPECULARMAP","	uniform sampler2D specularMap;","#endif"].join(`
`),i=["#ifdef USE_GLOSSINESSMAP","	uniform sampler2D glossinessMap;","#endif"].join(`
`),r=["vec3 specularFactor = specular;","#ifdef USE_SPECULARMAP","	vec4 texelSpecular = texture2D( specularMap, vUv );","	texelSpecular = sRGBToLinear( texelSpecular );","	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture","	specularFactor *= texelSpecular.rgb;","#endif"].join(`
`),s=["float glossinessFactor = glossiness;","#ifdef USE_GLOSSINESSMAP","	vec4 texelGlossiness = texture2D( glossinessMap, vUv );","	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture","	glossinessFactor *= texelGlossiness.a;","#endif"].join(`
`),o=["PhysicalMaterial material;","material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );","vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );","float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );","material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.","material.roughness += geometryRoughness;","material.roughness = min( material.roughness, 1.0 );","material.specularColor = specularFactor;"].join(`
`),a={specular:{value:new me().setHex(16777215)},glossiness:{value:1},specularMap:{value:null},glossinessMap:{value:null}};this._extraUniforms=a,this.onBeforeCompile=function(l){for(const c in a)l.uniforms[c]=a[c];l.fragmentShader=l.fragmentShader.replace("uniform float roughness;","uniform vec3 specular;").replace("uniform float metalness;","uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>",t).replace("#include <metalnessmap_pars_fragment>",i).replace("#include <roughnessmap_fragment>",r).replace("#include <metalnessmap_fragment>",s).replace("#include <lights_physical_fragment>",o)},Object.defineProperties(this,{specular:{get:function(){return a.specular.value},set:function(l){a.specular.value=l}},specularMap:{get:function(){return a.specularMap.value},set:function(l){a.specularMap.value=l,l?this.defines.USE_SPECULARMAP="":delete this.defines.USE_SPECULARMAP}},glossiness:{get:function(){return a.glossiness.value},set:function(l){a.glossiness.value=l}},glossinessMap:{get:function(){return a.glossinessMap.value},set:function(l){a.glossinessMap.value=l,l?(this.defines.USE_GLOSSINESSMAP="",this.defines.USE_UV=""):(delete this.defines.USE_GLOSSINESSMAP,delete this.defines.USE_UV)}}}),delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this.setValues(e)}copy(e){return super.copy(e),this.specularMap=e.specularMap,this.specular.copy(e.specular),this.glossinessMap=e.glossinessMap,this.glossiness=e.glossiness,delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this}}class HF{constructor(){this.name=Ge.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,this.specularGlossinessParams=["color","map","lightMap","lightMapIntensity","aoMap","aoMapIntensity","emissive","emissiveIntensity","emissiveMap","bumpMap","bumpScale","normalMap","normalMapType","displacementMap","displacementScale","displacementBias","specularMap","specular","glossinessMap","glossiness","alphaMap","envMap","envMapIntensity","refractionRatio"]}getMaterialType(){return gd}extendParams(e,t,i){const r=t.extensions[this.name];e.color=new me(1,1,1),e.opacity=1;const s=[];if(Array.isArray(r.diffuseFactor)){const o=r.diffuseFactor;e.color.fromArray(o),e.opacity=o[3]}if(r.diffuseTexture!==void 0&&s.push(i.assignTexture(e,"map",r.diffuseTexture)),e.emissive=new me(0,0,0),e.glossiness=r.glossinessFactor!==void 0?r.glossinessFactor:1,e.specular=new me(1,1,1),Array.isArray(r.specularFactor)&&e.specular.fromArray(r.specularFactor),r.specularGlossinessTexture!==void 0){const o=r.specularGlossinessTexture;s.push(i.assignTexture(e,"glossinessMap",o)),s.push(i.assignTexture(e,"specularMap",o))}return Promise.all(s)}createMaterial(e){const t=new gd(e);return t.fog=!0,t.color=e.color,t.map=e.map===void 0?null:e.map,t.lightMap=null,t.lightMapIntensity=1,t.aoMap=e.aoMap===void 0?null:e.aoMap,t.aoMapIntensity=1,t.emissive=e.emissive,t.emissiveIntensity=1,t.emissiveMap=e.emissiveMap===void 0?null:e.emissiveMap,t.bumpMap=e.bumpMap===void 0?null:e.bumpMap,t.bumpScale=1,t.normalMap=e.normalMap===void 0?null:e.normalMap,t.normalMapType=er,e.normalScale&&(t.normalScale=e.normalScale),t.displacementMap=null,t.displacementScale=1,t.displacementBias=0,t.specularMap=e.specularMap===void 0?null:e.specularMap,t.specular=e.specular,t.glossinessMap=e.glossinessMap===void 0?null:e.glossinessMap,t.glossiness=e.glossiness,t.alphaMap=null,t.envMap=e.envMap===void 0?null:e.envMap,t.envMapIntensity=1,t.refractionRatio=.98,t}}class zF{constructor(){this.name=Ge.KHR_MESH_QUANTIZATION}}class Yr extends Ai{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=i[s+o];return t}}Yr.prototype.beforeStart_=Yr.prototype.copySampleValue_;Yr.prototype.afterEnd_=Yr.prototype.copySampleValue_;Yr.prototype.interpolate_=function(n,e,t,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=o*2,l=o*3,c=i-e,f=(t-e)/c,u=f*f,h=u*f,d=n*l,m=d-l,_=-2*h+3*u,v=h-u,p=1-_,g=v-u+f;for(let x=0;x!==o;x++){const b=s[m+x+o],T=s[m+x+a]*c,S=s[d+x+o],y=s[d+x]*c;r[x]=p*b+g*T+_*S+v*y}return r};const VF=new st;class GF extends Yr{interpolate_(e,t,i,r){const s=super.interpolate_(e,t,i,r);return VF.fromArray(s).normalize().toArray(s),s}}const Li={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Fa={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Jx={9728:Lt,9729:Ct,9984:Jf,9985:I_,9986:eh,9987:xs},ey={33071:un,33648:tc,10497:vs},ty={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},_d={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},gr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},WF={CUBICSPLINE:void 0,LINEAR:Ms,STEP:oa},vd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function ny(n,e){return typeof n!="string"||n===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(n)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(n)||/^data:.*,.*$/i.test(n)||/^blob:.*$/i.test(n)?n:e+n)}function XF(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Ea({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ki})),n.DefaultMaterial}function Ia(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function qr(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function YF(n,e,t){let i=!1,r=!1;for(let a=0,l=e.length;a<l;a++){const c=e[a];if(c.POSITION!==void 0&&(i=!0),c.NORMAL!==void 0&&(r=!0),i&&r)break}if(!i&&!r)return Promise.resolve(n);const s=[],o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];if(i){const f=c.POSITION!==void 0?t.getDependency("accessor",c.POSITION):n.attributes.position;s.push(f)}if(r){const f=c.NORMAL!==void 0?t.getDependency("accessor",c.NORMAL):n.attributes.normal;o.push(f)}}return Promise.all([Promise.all(s),Promise.all(o)]).then(function(a){const l=a[0],c=a[1];return i&&(n.morphAttributes.position=l),r&&(n.morphAttributes.normal=c),n.morphTargetsRelative=!0,n})}function qF(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function jF(n){const e=n.extensions&&n.extensions[Ge.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+iy(e.attributes):t=n.indices+":"+iy(n.attributes)+":"+n.mode,t}function iy(n){let e="";const t=Object.keys(n).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+n[t[i]]+";";return e}function xd(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}class QF{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new AF,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.textureCache={},this.nodeNamesUsed={},typeof createImageBitmap!="undefined"&&/Firefox/.test(navigator.userAgent)===!1?this.textureLoader=new Wx(this.options.manager):this.textureLoader=new Fx(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new sd(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:i,userData:{}};Ia(s,a,r),qr(a,r),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const r=i.clone();return r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const r=e(t[i]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&i.push(s)}return i}getDependency(e,t){const i=e+":"+t;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this.loadNode(t);break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this.loadAnimation(t);break;case"camera":r=this.loadCamera(t);break;default:throw new Error("Unknown type: "+e)}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ge.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){i.load(ny(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const r=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(e){const t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0)return Promise.resolve(null);const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=ty[r.type],c=Fa[r.componentType],f=c.BYTES_PER_ELEMENT,u=f*l,h=r.byteOffset||0,d=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,m=r.normalized===!0;let _,v;if(d&&d!==u){const p=Math.floor(h/d),g="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+p+":"+r.count;let x=t.cache.get(g);x||(_=new c(a,p*d,r.count*d/f),x=new qs(_,d/f),t.cache.add(g,x)),v=new js(x,l,h%d/f,m)}else a===null?_=new c(r.count*l):_=new c(a,h,r.count*l),v=new xt(_,l,m);if(r.sparse!==void 0){const p=ty.SCALAR,g=Fa[r.sparse.indices.componentType],x=r.sparse.indices.byteOffset||0,b=r.sparse.values.byteOffset||0,T=new g(o[1],x,r.sparse.count*p),S=new c(o[2],b,r.sparse.count*l);a!==null&&(v=new xt(v.array.slice(),v.itemSize,v.normalized));for(let y=0,E=T.length;y<E;y++){const N=T[y];if(v.setX(N,S[y*l]),l>=2&&v.setY(N,S[y*l+1]),l>=3&&v.setZ(N,S[y*l+2]),l>=4&&v.setW(N,S[y*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return v})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e],s=t.images[r.source];let o=this.textureLoader;if(s.uri){const a=i.manager.getHandler(s.uri);a!==null&&(o=a)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,i){const r=this,s=this.json,o=this.options,a=s.textures[e],l=(t.uri||t.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=self.URL||self.webkitURL;let f=t.uri||"",u=!1,h=!0;const d=f.search(/\.jpe?g($|\?)/i)>0||f.search(/^data\:image\/jpeg/)===0;if((t.mimeType==="image/jpeg"||d)&&(h=!1),t.bufferView!==void 0)f=r.getDependency("bufferView",t.bufferView).then(function(_){if(t.mimeType==="image/png"){const p=new DataView(_,25,1).getUint8(0,!1);h=p===6||p===4||p===3}u=!0;const v=new Blob([_],{type:t.mimeType});return f=c.createObjectURL(v),f});else if(t.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const m=Promise.resolve(f).then(function(_){return new Promise(function(v,p){let g=v;i.isImageBitmapLoader===!0&&(g=function(x){const b=new Ft(x);b.needsUpdate=!0,v(b)}),i.load(ny(_,o.path),g,void 0,p)})}).then(function(_){u===!0&&c.revokeObjectURL(f),_.flipY=!1,a.name&&(_.name=a.name),h||(_.format=ti);const p=(s.samplers||{})[a.sampler]||{};return _.magFilter=Jx[p.magFilter]||Ct,_.minFilter=Jx[p.minFilter]||xs,_.wrapS=ey[p.wrapS]||vs,_.wrapT=ey[p.wrapT]||vs,r.associations.set(_,{type:"textures",index:e}),_}).catch(function(){return console.error("THREE.GLTFLoader: Couldn't load texture",f),null});return this.textureCache[l]=m,m}assignTexture(e,t,i){const r=this;return this.getDependency("texture",i.index).then(function(s){if(i.texCoord!==void 0&&i.texCoord!=0&&!(t==="aoMap"&&i.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+i.texCoord+" for texture "+t+" not yet supported."),r.extensions[Ge.KHR_TEXTURE_TRANSFORM]){const o=i.extensions!==void 0?i.extensions[Ge.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const a=r.associations.get(s);s=r.extensions[Ge.KHR_TEXTURE_TRANSFORM].extendTexture(s,o),r.associations.set(s,a)}}return e[t]=s,s})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const r=t.attributes.tangent!==void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new Xh,It.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new Js,It.prototype.copy.call(l,i),l.color.copy(i.color),this.cache.add(a,l)),i=l}if(r||s||o){let a="ClonedMaterial:"+i.uuid+":";i.isGLTFSpecularGlossinessMaterial&&(a+="specular-glossiness:"),r&&(a+="vertex-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}i.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=i}getMaterialType(){return Ea}loadMaterial(e){const t=this,i=this.json,r=this.extensions,s=i.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[Ge.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]){const u=r[Ge.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];o=u.getMaterialType(),c.push(u.extendParams(a,s,t))}else if(l[Ge.KHR_MATERIALS_UNLIT]){const u=r[Ge.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,s,t))}else{const u=s.pbrMetallicRoughness||{};if(a.color=new me(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const h=u.baseColorFactor;a.color.fromArray(h),a.opacity=h[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=ei);const f=s.alphaMode||vd.OPAQUE;return f===vd.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.format=ti,a.transparent=!1,f===vd.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==In&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new ie(1,-1),s.normalTexture.scale!==void 0&&a.normalScale.set(s.normalTexture.scale,-s.normalTexture.scale)),s.occlusionTexture!==void 0&&o!==In&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==In&&(a.emissive=new me().fromArray(s.emissiveFactor)),s.emissiveTexture!==void 0&&o!==In&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture)),Promise.all(c).then(function(){let u;return o===gd?u=r[Ge.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(a):u=new o(a),s.name&&(u.name=s.name),u.map&&(u.map.encoding=Rn),u.emissiveMap&&(u.emissiveMap.encoding=Rn),qr(u,s),t.associations.set(u,{type:"materials",index:e}),s.extensions&&Ia(r,u,s),u})}createUniqueName(e){const t=Qe.sanitizeNodeName(e||"");let i=t;for(let r=1;this.nodeNamesUsed[i];++r)i=t+"_"+r;return this.nodeNamesUsed[i]=!0,i}loadGeometries(e){const t=this,i=this.extensions,r=this.primitiveCache;function s(a){return i[Ge.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return sy(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],f=jF(c),u=r[f];if(u)o.push(u.promise);else{let h;c.extensions&&c.extensions[Ge.KHR_DRACO_MESH_COMPRESSION]?h=s(c):h=sy(new Ze,c,t),r[f]={primitive:c,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,r=this.extensions,s=i.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const f=o[l].material===void 0?XF(this.cache):this.getDependency("material",o[l].material);a.push(f)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),f=l[l.length-1],u=[];for(let d=0,m=f.length;d<m;d++){const _=f[d],v=o[d];let p;const g=c[d];if(v.mode===Li.TRIANGLES||v.mode===Li.TRIANGLE_STRIP||v.mode===Li.TRIANGLE_FAN||v.mode===void 0)p=s.isSkinnedMesh===!0?new Oc(_,g):new Dt(_,g),p.isSkinnedMesh===!0&&!p.geometry.attributes.skinWeight.normalized&&p.normalizeSkinWeights(),v.mode===Li.TRIANGLE_STRIP?p.geometry=oy(p.geometry,nE):v.mode===Li.TRIANGLE_FAN&&(p.geometry=oy(p.geometry,X_));else if(v.mode===Li.LINES)p=new zc(_,g);else if(v.mode===Li.LINE_STRIP)p=new Hc(_,g);else if(v.mode===Li.LINE_LOOP)p=new dx(_,g);else if(v.mode===Li.POINTS)p=new mx(_,g);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+v.mode);Object.keys(p.geometry.morphAttributes).length>0&&qF(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),qr(p,s),v.extensions&&Ia(r,p,v),t.assignFinalMaterial(p),u.push(p)}if(u.length===1)return u[0];const h=new hr;for(let d=0,m=u.length;d<m;d++)h.add(u[d]);return h})}loadCamera(e){let t;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Kt(bE.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new Gr(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),qr(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i={joints:t.joints};return t.inverseBindMatrices===void 0?Promise.resolve(i):this.getDependency("accessor",t.inverseBindMatrices).then(function(r){return i.inverseBindMatrices=r,i})}loadAnimation(e){const i=this.json.animations[e],r=[],s=[],o=[],a=[],l=[];for(let c=0,f=i.channels.length;c<f;c++){const u=i.channels[c],h=i.samplers[u.sampler],d=u.target,m=d.node!==void 0?d.node:d.id,_=i.parameters!==void 0?i.parameters[h.input]:h.input,v=i.parameters!==void 0?i.parameters[h.output]:h.output;r.push(this.getDependency("node",m)),s.push(this.getDependency("accessor",_)),o.push(this.getDependency("accessor",v)),a.push(h),l.push(d)}return Promise.all([Promise.all(r),Promise.all(s),Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const f=c[0],u=c[1],h=c[2],d=c[3],m=c[4],_=[];for(let p=0,g=f.length;p<g;p++){const x=f[p],b=u[p],T=h[p],S=d[p],y=m[p];if(x===void 0)continue;x.updateMatrix(),x.matrixAutoUpdate=!0;let E;switch(gr[y.path]){case gr.weights:E=La;break;case gr.rotation:E=Xr;break;case gr.position:case gr.scale:default:E=Pa;break}const N=x.name?x.name:x.uuid,F=S.interpolation!==void 0?WF[S.interpolation]:Ms,C=[];gr[y.path]===gr.weights?x.traverse(function(O){O.isMesh===!0&&O.morphTargetInfluences&&C.push(O.name?O.name:O.uuid)}):C.push(N);let V=T.array;if(T.normalized){const O=xd(V.constructor),H=new Float32Array(V.length);for(let $=0,Y=V.length;$<Y;$++)H[$]=V[$]*O;V=H}for(let O=0,H=C.length;O<H;O++){const $=new E(C[O]+"."+gr[y.path],b.array,V,F);S.interpolation==="CUBICSPLINE"&&($.createInterpolant=function(q){const te=this instanceof Xr?GF:Yr;return new te(this.times,this.values,this.getValueSize()/3,q)},$.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),_.push($)}}const v=i.name?i.name:"animation_"+e;return new rd(v,void 0,_)})}createNodeMesh(e){const t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){const o=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(!!a.isMesh)for(let l=0,c=r.weights.length;l<c;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){const t=this.json,i=this.extensions,r=this,s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"";return function(){const a=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),Promise.all(a)}().then(function(a){let l;if(s.isBone===!0?l=new Vh:a.length>1?l=new hr:a.length===1?l=a[0]:l=new We,l!==a[0])for(let c=0,f=a.length;c<f;c++)l.add(a[c]);if(s.name&&(l.userData.name=s.name,l.name=o),qr(l,s),s.extensions&&Ia(i,l,s),s.matrix!==void 0){const c=new ye;c.fromArray(s.matrix),l.applyMatrix4(c)}else s.translation!==void 0&&l.position.fromArray(s.translation),s.rotation!==void 0&&l.quaternion.fromArray(s.rotation),s.scale!==void 0&&l.scale.fromArray(s.scale);return r.associations.set(l,{type:"nodes",index:e}),l})}loadScene(e){const t=this.json,i=this.extensions,r=this.json.scenes[e],s=this,o=new hr;r.name&&(o.name=s.createUniqueName(r.name)),qr(o,r),r.extensions&&Ia(i,o,r);const a=r.nodes||[],l=[];for(let c=0,f=a.length;c<f;c++)l.push(ry(a[c],o,t,s));return Promise.all(l).then(function(){return o})}}function ry(n,e,t,i){const r=t.nodes[n];return i.getDependency("node",n).then(function(s){if(r.skin===void 0)return s;let o;return i.getDependency("skin",r.skin).then(function(a){o=a;const l=[];for(let c=0,f=o.joints.length;c<f;c++)l.push(i.getDependency("node",o.joints[c]));return Promise.all(l)}).then(function(a){return s.traverse(function(l){if(!l.isMesh)return;const c=[],f=[];for(let u=0,h=a.length;u<h;u++){const d=a[u];if(d){c.push(d);const m=new ye;o.inverseBindMatrices!==void 0&&m.fromArray(o.inverseBindMatrices.array,u*16),f.push(m)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',o.joints[u])}l.bind(new Uc(c,f),l.matrixWorld)}),s})}).then(function(s){e.add(s);const o=[];if(r.children){const a=r.children;for(let l=0,c=a.length;l<c;l++){const f=a[l];o.push(ry(f,s,t,i))}}return Promise.all(o)})}function $F(n,e,t){const i=e.attributes,r=new Fn;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(r.set(new L(l[0],l[1],l[2]),new L(c[0],c[1],c[2])),a.normalized){const f=xd(Fa[a.componentType]);r.min.multiplyScalar(f),r.max.multiplyScalar(f)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new L,l=new L;for(let c=0,f=s.length;c<f;c++){const u=s[c];if(u.POSITION!==void 0){const h=t.json.accessors[u.POSITION],d=h.min,m=h.max;if(d!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(m[2]))),h.normalized){const _=xd(Fa[h.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}n.boundingBox=r;const o=new zr;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=o}function sy(n,e,t){const i=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(const o in i){const a=_d[o]||o.toLowerCase();a in n.attributes||r.push(s(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});r.push(o)}return qr(n,e),$F(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?YF(n,e.targets,t):n})}function oy(n,e){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,r=[];if(e===X_)for(let o=1;o<=i;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2==0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==i&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=n.clone();return s.setIndex(r),s}const ay={type:"change"},yd={type:"start"},bd={type:"end"};class KF extends tr{constructor(e,t){super();t===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ms.ROTATE,MIDDLE:ms.DOLLY,RIGHT:ms.PAN},this.touches={ONE:gs.ROTATE,TWO:gs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(I){I.addEventListener("keydown",W),this._domElementKeyEvents=I},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(ay),i.update(),s=r.NONE},this.update=function(){const I=new L,ue=new st().setFromUnitVectors(e.up,new L(0,1,0)),Ue=ue.clone().invert(),Ne=new L,ut=new st,Fe=2*Math.PI;return function(){const en=i.object.position;I.copy(en).sub(i.target),I.applyQuaternion(ue),a.setFromVector3(I),i.autoRotate&&s===r.NONE&&N(y()),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let pn=i.minAzimuthAngle,Un=i.maxAzimuthAngle;return isFinite(pn)&&isFinite(Un)&&(pn<-Math.PI?pn+=Fe:pn>Math.PI&&(pn-=Fe),Un<-Math.PI?Un+=Fe:Un>Math.PI&&(Un-=Fe),pn<=Un?a.theta=Math.max(pn,Math.min(Un,a.theta)):a.theta=a.theta>(pn+Un)/2?Math.max(pn,a.theta):Math.min(Un,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(i.minDistance,Math.min(i.maxDistance,a.radius)),i.enableDamping===!0?i.target.addScaledVector(f,i.dampingFactor):i.target.add(f),I.setFromSpherical(a),I.applyQuaternion(Ue),en.copy(i.target).add(I),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,f.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),f.set(0,0,0)),c=1,u||Ne.distanceToSquared(i.object.position)>o||8*(1-ut.dot(i.object.quaternion))>o?(i.dispatchEvent(ay),Ne.copy(i.object.position),ut.copy(i.object.quaternion),u=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",re),i.domElement.removeEventListener("pointerdown",R),i.domElement.removeEventListener("pointercancel",w),i.domElement.removeEventListener("wheel",X),i.domElement.removeEventListener("pointermove",k),i.domElement.removeEventListener("pointerup",z),i._domElementKeyEvents!==null&&i._domElementKeyEvents.removeEventListener("keydown",W)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new jx,l=new jx;let c=1;const f=new L;let u=!1;const h=new ie,d=new ie,m=new ie,_=new ie,v=new ie,p=new ie,g=new ie,x=new ie,b=new ie,T=[],S={};function y(){return 2*Math.PI/60/60*i.autoRotateSpeed}function E(){return Math.pow(.95,i.zoomSpeed)}function N(I){l.theta-=I}function F(I){l.phi-=I}const C=function(){const I=new L;return function(Ue,Ne){I.setFromMatrixColumn(Ne,0),I.multiplyScalar(-Ue),f.add(I)}}(),V=function(){const I=new L;return function(Ue,Ne){i.screenSpacePanning===!0?I.setFromMatrixColumn(Ne,1):(I.setFromMatrixColumn(Ne,0),I.crossVectors(i.object.up,I)),I.multiplyScalar(Ue),f.add(I)}}(),O=function(){const I=new L;return function(Ue,Ne){const ut=i.domElement;if(i.object.isPerspectiveCamera){const Fe=i.object.position;I.copy(Fe).sub(i.target);let it=I.length();it*=Math.tan(i.object.fov/2*Math.PI/180),C(2*Ue*it/ut.clientHeight,i.object.matrix),V(2*Ne*it/ut.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(C(Ue*(i.object.right-i.object.left)/i.object.zoom/ut.clientWidth,i.object.matrix),V(Ne*(i.object.top-i.object.bottom)/i.object.zoom/ut.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function H(I){i.object.isPerspectiveCamera?c/=I:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*I)),i.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function $(I){i.object.isPerspectiveCamera?c*=I:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/I)),i.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Y(I){h.set(I.clientX,I.clientY)}function q(I){g.set(I.clientX,I.clientY)}function te(I){_.set(I.clientX,I.clientY)}function pe(I){d.set(I.clientX,I.clientY),m.subVectors(d,h).multiplyScalar(i.rotateSpeed);const ue=i.domElement;N(2*Math.PI*m.x/ue.clientHeight),F(2*Math.PI*m.y/ue.clientHeight),h.copy(d),i.update()}function Te(I){x.set(I.clientX,I.clientY),b.subVectors(x,g),b.y>0?H(E()):b.y<0&&$(E()),g.copy(x),i.update()}function de(I){v.set(I.clientX,I.clientY),p.subVectors(v,_).multiplyScalar(i.panSpeed),O(p.x,p.y),_.copy(v),i.update()}function Me(I){I.deltaY<0?$(E()):I.deltaY>0&&H(E()),i.update()}function ne(I){let ue=!1;switch(I.code){case i.keys.UP:O(0,i.keyPanSpeed),ue=!0;break;case i.keys.BOTTOM:O(0,-i.keyPanSpeed),ue=!0;break;case i.keys.LEFT:O(i.keyPanSpeed,0),ue=!0;break;case i.keys.RIGHT:O(-i.keyPanSpeed,0),ue=!0;break}ue&&(I.preventDefault(),i.update())}function fe(){if(T.length===1)h.set(T[0].pageX,T[0].pageY);else{const I=.5*(T[0].pageX+T[1].pageX),ue=.5*(T[0].pageY+T[1].pageY);h.set(I,ue)}}function ve(){if(T.length===1)_.set(T[0].pageX,T[0].pageY);else{const I=.5*(T[0].pageX+T[1].pageX),ue=.5*(T[0].pageY+T[1].pageY);_.set(I,ue)}}function Q(){const I=T[0].pageX-T[1].pageX,ue=T[0].pageY-T[1].pageY,Ue=Math.sqrt(I*I+ue*ue);g.set(0,Ue)}function xe(){i.enableZoom&&Q(),i.enablePan&&ve()}function Se(){i.enableZoom&&Q(),i.enableRotate&&fe()}function _e(I){if(T.length==1)d.set(I.pageX,I.pageY);else{const Ue=le(I),Ne=.5*(I.pageX+Ue.x),ut=.5*(I.pageY+Ue.y);d.set(Ne,ut)}m.subVectors(d,h).multiplyScalar(i.rotateSpeed);const ue=i.domElement;N(2*Math.PI*m.x/ue.clientHeight),F(2*Math.PI*m.y/ue.clientHeight),h.copy(d)}function ge(I){if(T.length===1)v.set(I.pageX,I.pageY);else{const ue=le(I),Ue=.5*(I.pageX+ue.x),Ne=.5*(I.pageY+ue.y);v.set(Ue,Ne)}p.subVectors(v,_).multiplyScalar(i.panSpeed),O(p.x,p.y),_.copy(v)}function Ee(I){const ue=le(I),Ue=I.pageX-ue.x,Ne=I.pageY-ue.y,ut=Math.sqrt(Ue*Ue+Ne*Ne);x.set(0,ut),b.set(0,Math.pow(x.y/g.y,i.zoomSpeed)),H(b.y),g.copy(x)}function J(I){i.enableZoom&&Ee(I),i.enablePan&&ge(I)}function A(I){i.enableZoom&&Ee(I),i.enableRotate&&_e(I)}function R(I){i.enabled!==!1&&(T.length===0&&(i.domElement.setPointerCapture(I.pointerId),i.domElement.addEventListener("pointermove",k),i.domElement.addEventListener("pointerup",z)),D(I),I.pointerType==="touch"?se(I):M(I))}function k(I){i.enabled!==!1&&(I.pointerType==="touch"?ee(I):U(I))}function z(I){i.enabled!==!1&&(I.pointerType==="touch"?oe():B(),ae(I),T.length===0&&(i.domElement.releasePointerCapture(I.pointerId),i.domElement.removeEventListener("pointermove",k),i.domElement.removeEventListener("pointerup",z)))}function w(I){ae(I)}function M(I){let ue;switch(I.button){case 0:ue=i.mouseButtons.LEFT;break;case 1:ue=i.mouseButtons.MIDDLE;break;case 2:ue=i.mouseButtons.RIGHT;break;default:ue=-1}switch(ue){case ms.DOLLY:if(i.enableZoom===!1)return;q(I),s=r.DOLLY;break;case ms.ROTATE:if(I.ctrlKey||I.metaKey||I.shiftKey){if(i.enablePan===!1)return;te(I),s=r.PAN}else{if(i.enableRotate===!1)return;Y(I),s=r.ROTATE}break;case ms.PAN:if(I.ctrlKey||I.metaKey||I.shiftKey){if(i.enableRotate===!1)return;Y(I),s=r.ROTATE}else{if(i.enablePan===!1)return;te(I),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(yd)}function U(I){if(i.enabled!==!1)switch(s){case r.ROTATE:if(i.enableRotate===!1)return;pe(I);break;case r.DOLLY:if(i.enableZoom===!1)return;Te(I);break;case r.PAN:if(i.enablePan===!1)return;de(I);break}}function B(I){i.dispatchEvent(bd),s=r.NONE}function X(I){i.enabled===!1||i.enableZoom===!1||s!==r.NONE&&s!==r.ROTATE||(I.preventDefault(),i.dispatchEvent(yd),Me(I),i.dispatchEvent(bd))}function W(I){i.enabled===!1||i.enablePan===!1||ne(I)}function se(I){switch(K(I),T.length){case 1:switch(i.touches.ONE){case gs.ROTATE:if(i.enableRotate===!1)return;fe(),s=r.TOUCH_ROTATE;break;case gs.PAN:if(i.enablePan===!1)return;ve(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case gs.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;xe(),s=r.TOUCH_DOLLY_PAN;break;case gs.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Se(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(yd)}function ee(I){switch(K(I),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;_e(I),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;ge(I),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;J(I),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;A(I),i.update();break;default:s=r.NONE}}function oe(I){i.dispatchEvent(bd),s=r.NONE}function re(I){i.enabled!==!1&&I.preventDefault()}function D(I){T.push(I)}function ae(I){delete S[I.pointerId];for(let ue=0;ue<T.length;ue++)if(T[ue].pointerId==I.pointerId){T.splice(ue,1);return}}function K(I){let ue=S[I.pointerId];ue===void 0&&(ue=new ie,S[I.pointerId]=ue),ue.set(I.pageX,I.pageY)}function le(I){const ue=I.pointerId===T[0].pointerId?T[1]:T[0];return S[ue.pointerId]}i.domElement.addEventListener("contextmenu",re),i.domElement.addEventListener("pointerdown",R),i.domElement.addEventListener("pointercancel",w),i.domElement.addEventListener("wheel",X,{passive:!1}),this.update()}}var Na={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;

		}`};class Da{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}}const ZF=new Gr(-1,1,1,-1,0,1),Td=new Ze;Td.setAttribute("position",new ot([-1,3,0,-1,-1,0,3,-1,0],3));Td.setAttribute("uv",new ot([0,2,0,0,2,0],2));class ly{constructor(e){this._mesh=new Dt(Td,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,ZF)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class ai extends Da{constructor(e,t){super();this.textureID=t!==void 0?t:"tDiffuse",e instanceof on?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Bs.clone(e.uniforms),this.material=new on({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new ly(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}}class cy extends Da{constructor(e,t){super();this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class JF extends Da{constructor(){super();this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class eI{constructor(e,t){if(this.renderer=e,t===void 0){const i={minFilter:Ct,magFilter:Ct,format:Qt},r=e.getSize(new ie);this._pixelRatio=e.getPixelRatio(),this._width=r.width,this._height=r.height,t=new fn(this._width*this._pixelRatio,this._height*this._pixelRatio,i),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],Na===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),ai===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new ai(Na),this.clock=new Xx}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}cy!==void 0&&(o instanceof cy?i=!0:o instanceof JF&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ie);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}}new Gr(-1,1,1,-1,0,1);const uy=new Ze;uy.setAttribute("position",new ot([-1,3,0,-1,-1,0,3,-1,0],3));uy.setAttribute("uv",new ot([0,2,0,0,2,0],2));class tI extends Da{constructor(e,t,i,r,s){super();this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new me}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==void 0&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=o),e.autoClear=r}}const fy={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new me(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class ao extends Da{constructor(e,t,i,r){super();this.strength=t!==void 0?t:1,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new ie(e.x,e.y):new ie(256,256),this.clearColor=new me(0,0,0);const s={minFilter:Ct,magFilter:Ct,format:Qt};this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new fn(o,a,s),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new fn(o,a,s);d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const m=new fn(o,a,s);m.texture.name="UnrealBloomPass.v"+h,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),o=Math.round(o/2),a=Math.round(a/2)}fy===void 0&&console.error("THREE.UnrealBloomPass relies on LuminosityHighPassShader");const l=fy;this.highPassUniforms=Bs.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new on({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader,defines:{}}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];o=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.texSize.value=new ie(o,a),o=Math.round(o/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;const f=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=f,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,Na===void 0&&console.error("THREE.UnrealBloomPass relies on CopyShader");const u=Na;this.copyUniforms=Bs.clone(u.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new on({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:jf,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new me,this.oldClearAlpha=1,this.basic=new In,this.fsQuad=new ly(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose()}setSize(e,t){let i=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.texSize.value=new ie(i,r),i=Math.round(i/2),r=Math.round(r/2)}render(e,t,i,r,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=ao.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=ao.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){return new on({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new ie(.5,.5)},direction:{value:new ie(.5,.5)}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}
				void main() {
					vec2 invSize = 1.0 / texSize;
					float fSigma = float(SIGMA);
					float weightSum = gaussianPdf(0.0, fSigma);
					float alphaSum = 0.0;
					vec3 diffuseSum = texture2D(colorTexture, vUv).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ )
					{
						float x = float(i);
						float weight = gaussianPdf(x, fSigma);
						vec2 uvOffset = direction * invSize * x;

						vec4 sample1 = texture2D( colorTexture, vUv + uvOffset);
						float weightAlpha = sample1.a * weight;
						diffuseSum += sample1.rgb * weightAlpha;
						alphaSum += weightAlpha;
						weightSum += weight;

						vec4 sample2 = texture2D( colorTexture, vUv - uvOffset);
						weightAlpha = sample2.a * weight;
						diffuseSum += sample2.rgb * weightAlpha;
						alphaSum += weightAlpha;
						weightSum += weight;

					}
					alphaSum /= weightSum;
					diffuseSum /= alphaSum; // Should apply discard here if alphaSum is 0
					gl_FragColor = vec4(diffuseSum.rgb, alphaSum);
				}`})}getCompositeMaterial(e){return new on({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},dirtTexture:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform sampler2D dirtTexture;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}ao.BlurDirectionX=new ie(1,0);ao.BlurDirectionY=new ie(0,1);const nI={uniforms:{tDiffuse:{value:null},hue:{value:0},saturation:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform float hue;
		uniform float saturation;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// hue
			float angle = hue * 3.14159265;
			float s = sin(angle), c = cos(angle);
			vec3 weights = (vec3(2.0 * c, -sqrt(3.0) * s - c, sqrt(3.0) * s - c) + 1.0) / 3.0;
			float len = length(gl_FragColor.rgb);
			gl_FragColor.rgb = vec3(
				dot(gl_FragColor.rgb, weights.xyz),
				dot(gl_FragColor.rgb, weights.zxy),
				dot(gl_FragColor.rgb, weights.yzx)
			);

			// saturation
			float average = (gl_FragColor.r + gl_FragColor.g + gl_FragColor.b) / 3.0;
			if (saturation > 0.0) {
				gl_FragColor.rgb += (average - gl_FragColor.rgb) * (1.0 - 1.0 / (1.001 - saturation));
			} else {
				gl_FragColor.rgb += (average - gl_FragColor.rgb) * (-saturation);
			}

		}`},iI={uniforms:{tDiffuse:{value:null},brightness:{value:0},contrast:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform float brightness;
		uniform float contrast;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			gl_FragColor.rgb += brightness;

			if (contrast > 0.0) {
				gl_FragColor.rgb = (gl_FragColor.rgb - 0.5) / (1.0 - contrast) + 0.5;
			} else {
				gl_FragColor.rgb = (gl_FragColor.rgb - 0.5) * (1.0 + contrast) + 0.5;
			}

		}`},rI={uniforms:{tDiffuse:{value:null}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 tex = texture2D( tDiffuse, vUv );

			gl_FragColor = LinearTosRGB( tex ); // optional: LinearToGamma( tex, float( GAMMA_FACTOR ) );

		}`},sI={uniforms:{tDiffuse:{value:null},offset:{value:1},darkness:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float offset;
		uniform float darkness;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			// Eskil's vignette

			vec4 texel = texture2D( tDiffuse, vUv );
			vec2 uv = ( vUv - vec2( 0.5 ) ) * vec2( offset );
			gl_FragColor = vec4( mix( texel.rgb, vec3( 1.0 - darkness ), dot( uv, uv ) ), texel.a );

		}`},oI={uniforms:{tDiffuse:{value:null},powRGB:{value:new L(2,2,2)},mulRGB:{value:new L(1,1,1)},addRGB:{value:new L(0,0,0)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 powRGB;
		uniform vec3 mulRGB;
		uniform vec3 addRGB;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.rgb = mulRGB * pow( ( gl_FragColor.rgb + addRGB ), powRGB );

		}`},aI={uniforms:{tDiffuse:{value:null},amount:{value:.005},angle:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform float amount;
		uniform float angle;

		varying vec2 vUv;

		void main() {

			vec2 offset = amount * vec2( cos(angle), sin(angle));
			vec4 cr = texture2D(tDiffuse, vUv + offset);
			vec4 cga = texture2D(tDiffuse, vUv);
			vec4 cb = texture2D(tDiffuse, vUv - offset);
			gl_FragColor = vec4(cr.r, cga.g, cb.b, cga.a);

		}`},lI={uniforms:{tDiffuse:{value:null},resolution:{value:new ie(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		uniform vec2 resolution;

		varying vec2 vUv;

		#define FXAA_PC 1
		#define FXAA_GLSL_100 1
		#define FXAA_QUALITY_PRESET 12

		#define FXAA_GREEN_AS_LUMA 1

		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_PC_CONSOLE
				//
				// The console algorithm for PC is included
				// for developers targeting really low spec machines.
				// Likely better to just run FXAA_PC, and use a really low preset.
				//
				#define FXAA_PC_CONSOLE 0
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_GLSL_120
				#define FXAA_GLSL_120 0
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_GLSL_130
				#define FXAA_GLSL_130 0
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_HLSL_3
				#define FXAA_HLSL_3 0
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_HLSL_4
				#define FXAA_HLSL_4 0
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_HLSL_5
				#define FXAA_HLSL_5 0
		#endif
		/*==========================================================================*/
		#ifndef FXAA_GREEN_AS_LUMA
				//
				// For those using non-linear color,
				// and either not able to get luma in alpha, or not wanting to,
				// this enables FXAA to run using green as a proxy for luma.
				// So with this enabled, no need to pack luma in alpha.
				//
				// This will turn off AA on anything which lacks some amount of green.
				// Pure red and blue or combination of only R and B, will get no AA.
				//
				// Might want to lower the settings for both,
				//		fxaaConsoleEdgeThresholdMin
				//		fxaaQualityEdgeThresholdMin
				// In order to insure AA does not get turned off on colors
				// which contain a minor amount of green.
				//
				// 1 = On.
				// 0 = Off.
				//
				#define FXAA_GREEN_AS_LUMA 0
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_EARLY_EXIT
				//
				// Controls algorithm's early exit path.
				// On PS3 turning this ON adds 2 cycles to the shader.
				// On 360 turning this OFF adds 10ths of a millisecond to the shader.
				// Turning this off on console will result in a more blurry image.
				// So this defaults to on.
				//
				// 1 = On.
				// 0 = Off.
				//
				#define FXAA_EARLY_EXIT 1
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_DISCARD
				//
				// Only valid for PC OpenGL currently.
				// Probably will not work when FXAA_GREEN_AS_LUMA = 1.
				//
				// 1 = Use discard on pixels which don't need AA.
				//		 For APIs which enable concurrent TEX+ROP from same surface.
				// 0 = Return unchanged color on pixels which don't need AA.
				//
				#define FXAA_DISCARD 0
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_FAST_PIXEL_OFFSET
				//
				// Used for GLSL 120 only.
				//
				// 1 = GL API supports fast pixel offsets
				// 0 = do not use fast pixel offsets
				//
				#ifdef GL_EXT_gpu_shader4
						#define FXAA_FAST_PIXEL_OFFSET 1
				#endif
				#ifdef GL_NV_gpu_shader5
						#define FXAA_FAST_PIXEL_OFFSET 1
				#endif
				#ifdef GL_ARB_gpu_shader5
						#define FXAA_FAST_PIXEL_OFFSET 1
				#endif
				#ifndef FXAA_FAST_PIXEL_OFFSET
						#define FXAA_FAST_PIXEL_OFFSET 0
				#endif
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_GATHER4_ALPHA
				//
				// 1 = API supports gather4 on alpha channel.
				// 0 = API does not support gather4 on alpha channel.
				//
				#if (FXAA_HLSL_5 == 1)
						#define FXAA_GATHER4_ALPHA 1
				#endif
				#ifdef GL_ARB_gpu_shader5
						#define FXAA_GATHER4_ALPHA 1
				#endif
				#ifdef GL_NV_gpu_shader5
						#define FXAA_GATHER4_ALPHA 1
				#endif
				#ifndef FXAA_GATHER4_ALPHA
						#define FXAA_GATHER4_ALPHA 0
				#endif
		#endif


		/*============================================================================
														FXAA QUALITY - TUNING KNOBS
		------------------------------------------------------------------------------
		NOTE the other tuning knobs are now in the shader function inputs!
		============================================================================*/
		#ifndef FXAA_QUALITY_PRESET
				//
				// Choose the quality preset.
				// This needs to be compiled into the shader as it effects code.
				// Best option to include multiple presets is to
				// in each shader define the preset, then include this file.
				//
				// OPTIONS
				// -----------------------------------------------------------------------
				// 10 to 15 - default medium dither (10=fastest, 15=highest quality)
				// 20 to 29 - less dither, more expensive (20=fastest, 29=highest quality)
				// 39			 - no dither, very expensive
				//
				// NOTES
				// -----------------------------------------------------------------------
				// 12 = slightly faster then FXAA 3.9 and higher edge quality (default)
				// 13 = about same speed as FXAA 3.9 and better than 12
				// 23 = closest to FXAA 3.9 visually and performance wise
				//	_ = the lowest digit is directly related to performance
				// _	= the highest digit is directly related to style
				//
				#define FXAA_QUALITY_PRESET 12
		#endif


		/*============================================================================

															 FXAA QUALITY - PRESETS

		============================================================================*/

		/*============================================================================
												 FXAA QUALITY - MEDIUM DITHER PRESETS
		============================================================================*/
		#if (FXAA_QUALITY_PRESET == 10)
				#define FXAA_QUALITY_PS 3
				#define FXAA_QUALITY_P0 1.5
				#define FXAA_QUALITY_P1 3.0
				#define FXAA_QUALITY_P2 12.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 11)
				#define FXAA_QUALITY_PS 4
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 3.0
				#define FXAA_QUALITY_P3 12.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 12)
				#define FXAA_QUALITY_PS 5
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 4.0
				#define FXAA_QUALITY_P4 12.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 13)
				#define FXAA_QUALITY_PS 6
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 4.0
				#define FXAA_QUALITY_P5 12.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 14)
				#define FXAA_QUALITY_PS 7
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 4.0
				#define FXAA_QUALITY_P6 12.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 15)
				#define FXAA_QUALITY_PS 8
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 2.0
				#define FXAA_QUALITY_P6 4.0
				#define FXAA_QUALITY_P7 12.0
		#endif

		/*============================================================================
												 FXAA QUALITY - LOW DITHER PRESETS
		============================================================================*/
		#if (FXAA_QUALITY_PRESET == 20)
				#define FXAA_QUALITY_PS 3
				#define FXAA_QUALITY_P0 1.5
				#define FXAA_QUALITY_P1 2.0
				#define FXAA_QUALITY_P2 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 21)
				#define FXAA_QUALITY_PS 4
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 22)
				#define FXAA_QUALITY_PS 5
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 23)
				#define FXAA_QUALITY_PS 6
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 24)
				#define FXAA_QUALITY_PS 7
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 3.0
				#define FXAA_QUALITY_P6 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 25)
				#define FXAA_QUALITY_PS 8
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 2.0
				#define FXAA_QUALITY_P6 4.0
				#define FXAA_QUALITY_P7 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 26)
				#define FXAA_QUALITY_PS 9
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 2.0
				#define FXAA_QUALITY_P6 2.0
				#define FXAA_QUALITY_P7 4.0
				#define FXAA_QUALITY_P8 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 27)
				#define FXAA_QUALITY_PS 10
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 2.0
				#define FXAA_QUALITY_P6 2.0
				#define FXAA_QUALITY_P7 2.0
				#define FXAA_QUALITY_P8 4.0
				#define FXAA_QUALITY_P9 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 28)
				#define FXAA_QUALITY_PS 11
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 2.0
				#define FXAA_QUALITY_P6 2.0
				#define FXAA_QUALITY_P7 2.0
				#define FXAA_QUALITY_P8 2.0
				#define FXAA_QUALITY_P9 4.0
				#define FXAA_QUALITY_P10 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 29)
				#define FXAA_QUALITY_PS 12
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 2.0
				#define FXAA_QUALITY_P6 2.0
				#define FXAA_QUALITY_P7 2.0
				#define FXAA_QUALITY_P8 2.0
				#define FXAA_QUALITY_P9 2.0
				#define FXAA_QUALITY_P10 4.0
				#define FXAA_QUALITY_P11 8.0
		#endif

		/*============================================================================
												 FXAA QUALITY - EXTREME QUALITY
		============================================================================*/
		#if (FXAA_QUALITY_PRESET == 39)
				#define FXAA_QUALITY_PS 12
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.0
				#define FXAA_QUALITY_P2 1.0
				#define FXAA_QUALITY_P3 1.0
				#define FXAA_QUALITY_P4 1.0
				#define FXAA_QUALITY_P5 1.5
				#define FXAA_QUALITY_P6 2.0
				#define FXAA_QUALITY_P7 2.0
				#define FXAA_QUALITY_P8 2.0
				#define FXAA_QUALITY_P9 2.0
				#define FXAA_QUALITY_P10 4.0
				#define FXAA_QUALITY_P11 8.0
		#endif



		/*============================================================================

																		API PORTING

		============================================================================*/
		#if (FXAA_GLSL_100 == 1) || (FXAA_GLSL_120 == 1) || (FXAA_GLSL_130 == 1)
				#define FxaaBool bool
				#define FxaaDiscard discard
				#define FxaaFloat float
				#define FxaaFloat2 vec2
				#define FxaaFloat3 vec3
				#define FxaaFloat4 vec4
				#define FxaaHalf float
				#define FxaaHalf2 vec2
				#define FxaaHalf3 vec3
				#define FxaaHalf4 vec4
				#define FxaaInt2 ivec2
				#define FxaaSat(x) clamp(x, 0.0, 1.0)
				#define FxaaTex sampler2D
		#else
				#define FxaaBool bool
				#define FxaaDiscard clip(-1)
				#define FxaaFloat float
				#define FxaaFloat2 float2
				#define FxaaFloat3 float3
				#define FxaaFloat4 float4
				#define FxaaHalf half
				#define FxaaHalf2 half2
				#define FxaaHalf3 half3
				#define FxaaHalf4 half4
				#define FxaaSat(x) saturate(x)
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_GLSL_100 == 1)
			#define FxaaTexTop(t, p) texture2D(t, p, 0.0)
			#define FxaaTexOff(t, p, o, r) texture2D(t, p + (o * r), 0.0)
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_GLSL_120 == 1)
				// Requires,
				//	#version 120
				// And at least,
				//	#extension GL_EXT_gpu_shader4 : enable
				//	(or set FXAA_FAST_PIXEL_OFFSET 1 to work like DX9)
				#define FxaaTexTop(t, p) texture2DLod(t, p, 0.0)
				#if (FXAA_FAST_PIXEL_OFFSET == 1)
						#define FxaaTexOff(t, p, o, r) texture2DLodOffset(t, p, 0.0, o)
				#else
						#define FxaaTexOff(t, p, o, r) texture2DLod(t, p + (o * r), 0.0)
				#endif
				#if (FXAA_GATHER4_ALPHA == 1)
						// use #extension GL_ARB_gpu_shader5 : enable
						#define FxaaTexAlpha4(t, p) textureGather(t, p, 3)
						#define FxaaTexOffAlpha4(t, p, o) textureGatherOffset(t, p, o, 3)
						#define FxaaTexGreen4(t, p) textureGather(t, p, 1)
						#define FxaaTexOffGreen4(t, p, o) textureGatherOffset(t, p, o, 1)
				#endif
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_GLSL_130 == 1)
				// Requires "#version 130" or better
				#define FxaaTexTop(t, p) textureLod(t, p, 0.0)
				#define FxaaTexOff(t, p, o, r) textureLodOffset(t, p, 0.0, o)
				#if (FXAA_GATHER4_ALPHA == 1)
						// use #extension GL_ARB_gpu_shader5 : enable
						#define FxaaTexAlpha4(t, p) textureGather(t, p, 3)
						#define FxaaTexOffAlpha4(t, p, o) textureGatherOffset(t, p, o, 3)
						#define FxaaTexGreen4(t, p) textureGather(t, p, 1)
						#define FxaaTexOffGreen4(t, p, o) textureGatherOffset(t, p, o, 1)
				#endif
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_HLSL_3 == 1)
				#define FxaaInt2 float2
				#define FxaaTex sampler2D
				#define FxaaTexTop(t, p) tex2Dlod(t, float4(p, 0.0, 0.0))
				#define FxaaTexOff(t, p, o, r) tex2Dlod(t, float4(p + (o * r), 0, 0))
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_HLSL_4 == 1)
				#define FxaaInt2 int2
				struct FxaaTex { SamplerState smpl; Texture2D tex; };
				#define FxaaTexTop(t, p) t.tex.SampleLevel(t.smpl, p, 0.0)
				#define FxaaTexOff(t, p, o, r) t.tex.SampleLevel(t.smpl, p, 0.0, o)
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_HLSL_5 == 1)
				#define FxaaInt2 int2
				struct FxaaTex { SamplerState smpl; Texture2D tex; };
				#define FxaaTexTop(t, p) t.tex.SampleLevel(t.smpl, p, 0.0)
				#define FxaaTexOff(t, p, o, r) t.tex.SampleLevel(t.smpl, p, 0.0, o)
				#define FxaaTexAlpha4(t, p) t.tex.GatherAlpha(t.smpl, p)
				#define FxaaTexOffAlpha4(t, p, o) t.tex.GatherAlpha(t.smpl, p, o)
				#define FxaaTexGreen4(t, p) t.tex.GatherGreen(t.smpl, p)
				#define FxaaTexOffGreen4(t, p, o) t.tex.GatherGreen(t.smpl, p, o)
		#endif


		/*============================================================================
											 GREEN AS LUMA OPTION SUPPORT FUNCTION
		============================================================================*/
		#if (FXAA_GREEN_AS_LUMA == 0)
				FxaaFloat FxaaLuma(FxaaFloat4 rgba) { return rgba.w; }
		#else
				FxaaFloat FxaaLuma(FxaaFloat4 rgba) { return rgba.y; }
		#endif




		/*============================================================================

																 FXAA3 QUALITY - PC

		============================================================================*/
		#if (FXAA_PC == 1)
		/*--------------------------------------------------------------------------*/
		FxaaFloat4 FxaaPixelShader(
				//
				// Use noperspective interpolation here (turn off perspective interpolation).
				// {xy} = center of pixel
				FxaaFloat2 pos,
				//
				// Used only for FXAA Console, and not used on the 360 version.
				// Use noperspective interpolation here (turn off perspective interpolation).
				// {xy_} = upper left of pixel
				// {_zw} = lower right of pixel
				FxaaFloat4 fxaaConsolePosPos,
				//
				// Input color texture.
				// {rgb_} = color in linear or perceptual color space
				// if (FXAA_GREEN_AS_LUMA == 0)
				//		 {__a} = luma in perceptual color space (not linear)
				FxaaTex tex,
				//
				// Only used on the optimized 360 version of FXAA Console.
				// For everything but 360, just use the same input here as for "tex".
				// For 360, same texture, just alias with a 2nd sampler.
				// This sampler needs to have an exponent bias of -1.
				FxaaTex fxaaConsole360TexExpBiasNegOne,
				//
				// Only used on the optimized 360 version of FXAA Console.
				// For everything but 360, just use the same input here as for "tex".
				// For 360, same texture, just alias with a 3nd sampler.
				// This sampler needs to have an exponent bias of -2.
				FxaaTex fxaaConsole360TexExpBiasNegTwo,
				//
				// Only used on FXAA Quality.
				// This must be from a constant/uniform.
				// {x_} = 1.0/screenWidthInPixels
				// {_y} = 1.0/screenHeightInPixels
				FxaaFloat2 fxaaQualityRcpFrame,
				//
				// Only used on FXAA Console.
				// This must be from a constant/uniform.
				// This effects sub-pixel AA quality and inversely sharpness.
				//	 Where N ranges between,
				//		 N = 0.50 (default)
				//		 N = 0.33 (sharper)
				// {x__} = -N/screenWidthInPixels
				// {_y_} = -N/screenHeightInPixels
				// {_z_} =	N/screenWidthInPixels
				// {__w} =	N/screenHeightInPixels
				FxaaFloat4 fxaaConsoleRcpFrameOpt,
				//
				// Only used on FXAA Console.
				// Not used on 360, but used on PS3 and PC.
				// This must be from a constant/uniform.
				// {x__} = -2.0/screenWidthInPixels
				// {_y_} = -2.0/screenHeightInPixels
				// {_z_} =	2.0/screenWidthInPixels
				// {__w} =	2.0/screenHeightInPixels
				FxaaFloat4 fxaaConsoleRcpFrameOpt2,
				//
				// Only used on FXAA Console.
				// Only used on 360 in place of fxaaConsoleRcpFrameOpt2.
				// This must be from a constant/uniform.
				// {x__} =	8.0/screenWidthInPixels
				// {_y_} =	8.0/screenHeightInPixels
				// {_z_} = -4.0/screenWidthInPixels
				// {__w} = -4.0/screenHeightInPixels
				FxaaFloat4 fxaaConsole360RcpFrameOpt2,
				//
				// Only used on FXAA Quality.
				// This used to be the FXAA_QUALITY_SUBPIX define.
				// It is here now to allow easier tuning.
				// Choose the amount of sub-pixel aliasing removal.
				// This can effect sharpness.
				//	 1.00 - upper limit (softer)
				//	 0.75 - default amount of filtering
				//	 0.50 - lower limit (sharper, less sub-pixel aliasing removal)
				//	 0.25 - almost off
				//	 0.00 - completely off
				FxaaFloat fxaaQualitySubpix,
				//
				// Only used on FXAA Quality.
				// This used to be the FXAA_QUALITY_EDGE_THRESHOLD define.
				// It is here now to allow easier tuning.
				// The minimum amount of local contrast required to apply algorithm.
				//	 0.333 - too little (faster)
				//	 0.250 - low quality
				//	 0.166 - default
				//	 0.125 - high quality
				//	 0.063 - overkill (slower)
				FxaaFloat fxaaQualityEdgeThreshold,
				//
				// Only used on FXAA Quality.
				// This used to be the FXAA_QUALITY_EDGE_THRESHOLD_MIN define.
				// It is here now to allow easier tuning.
				// Trims the algorithm from processing darks.
				//	 0.0833 - upper limit (default, the start of visible unfiltered edges)
				//	 0.0625 - high quality (faster)
				//	 0.0312 - visible limit (slower)
				// Special notes when using FXAA_GREEN_AS_LUMA,
				//	 Likely want to set this to zero.
				//	 As colors that are mostly not-green
				//	 will appear very dark in the green channel!
				//	 Tune by looking at mostly non-green content,
				//	 then start at zero and increase until aliasing is a problem.
				FxaaFloat fxaaQualityEdgeThresholdMin,
				//
				// Only used on FXAA Console.
				// This used to be the FXAA_CONSOLE_EDGE_SHARPNESS define.
				// It is here now to allow easier tuning.
				// This does not effect PS3, as this needs to be compiled in.
				//	 Use FXAA_CONSOLE_PS3_EDGE_SHARPNESS for PS3.
				//	 Due to the PS3 being ALU bound,
				//	 there are only three safe values here: 2 and 4 and 8.
				//	 These options use the shaders ability to a free *|/ by 2|4|8.
				// For all other platforms can be a non-power of two.
				//	 8.0 is sharper (default!!!)
				//	 4.0 is softer
				//	 2.0 is really soft (good only for vector graphics inputs)
				FxaaFloat fxaaConsoleEdgeSharpness,
				//
				// Only used on FXAA Console.
				// This used to be the FXAA_CONSOLE_EDGE_THRESHOLD define.
				// It is here now to allow easier tuning.
				// This does not effect PS3, as this needs to be compiled in.
				//	 Use FXAA_CONSOLE_PS3_EDGE_THRESHOLD for PS3.
				//	 Due to the PS3 being ALU bound,
				//	 there are only two safe values here: 1/4 and 1/8.
				//	 These options use the shaders ability to a free *|/ by 2|4|8.
				// The console setting has a different mapping than the quality setting.
				// Other platforms can use other values.
				//	 0.125 leaves less aliasing, but is softer (default!!!)
				//	 0.25 leaves more aliasing, and is sharper
				FxaaFloat fxaaConsoleEdgeThreshold,
				//
				// Only used on FXAA Console.
				// This used to be the FXAA_CONSOLE_EDGE_THRESHOLD_MIN define.
				// It is here now to allow easier tuning.
				// Trims the algorithm from processing darks.
				// The console setting has a different mapping than the quality setting.
				// This only applies when FXAA_EARLY_EXIT is 1.
				// This does not apply to PS3,
				// PS3 was simplified to avoid more shader instructions.
				//	 0.06 - faster but more aliasing in darks
				//	 0.05 - default
				//	 0.04 - slower and less aliasing in darks
				// Special notes when using FXAA_GREEN_AS_LUMA,
				//	 Likely want to set this to zero.
				//	 As colors that are mostly not-green
				//	 will appear very dark in the green channel!
				//	 Tune by looking at mostly non-green content,
				//	 then start at zero and increase until aliasing is a problem.
				FxaaFloat fxaaConsoleEdgeThresholdMin,
				//
				// Extra constants for 360 FXAA Console only.
				// Use zeros or anything else for other platforms.
				// These must be in physical constant registers and NOT immediates.
				// Immediates will result in compiler un-optimizing.
				// {xyzw} = float4(1.0, -1.0, 0.25, -0.25)
				FxaaFloat4 fxaaConsole360ConstDir
		) {
		/*--------------------------------------------------------------------------*/
				FxaaFloat2 posM;
				posM.x = pos.x;
				posM.y = pos.y;
				#if (FXAA_GATHER4_ALPHA == 1)
						#if (FXAA_DISCARD == 0)
								FxaaFloat4 rgbyM = FxaaTexTop(tex, posM);
								#if (FXAA_GREEN_AS_LUMA == 0)
										#define lumaM rgbyM.w
								#else
										#define lumaM rgbyM.y
								#endif
						#endif
						#if (FXAA_GREEN_AS_LUMA == 0)
								FxaaFloat4 luma4A = FxaaTexAlpha4(tex, posM);
								FxaaFloat4 luma4B = FxaaTexOffAlpha4(tex, posM, FxaaInt2(-1, -1));
						#else
								FxaaFloat4 luma4A = FxaaTexGreen4(tex, posM);
								FxaaFloat4 luma4B = FxaaTexOffGreen4(tex, posM, FxaaInt2(-1, -1));
						#endif
						#if (FXAA_DISCARD == 1)
								#define lumaM luma4A.w
						#endif
						#define lumaE luma4A.z
						#define lumaS luma4A.x
						#define lumaSE luma4A.y
						#define lumaNW luma4B.w
						#define lumaN luma4B.z
						#define lumaW luma4B.x
				#else
						FxaaFloat4 rgbyM = FxaaTexTop(tex, posM);
						#if (FXAA_GREEN_AS_LUMA == 0)
								#define lumaM rgbyM.w
						#else
								#define lumaM rgbyM.y
						#endif
						#if (FXAA_GLSL_100 == 1)
							FxaaFloat lumaS = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2( 0.0, 1.0), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaE = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2( 1.0, 0.0), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaN = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2( 0.0,-1.0), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaW = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2(-1.0, 0.0), fxaaQualityRcpFrame.xy));
						#else
							FxaaFloat lumaS = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 0, 1), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaE = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 1, 0), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaN = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 0,-1), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaW = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(-1, 0), fxaaQualityRcpFrame.xy));
						#endif
				#endif
		/*--------------------------------------------------------------------------*/
				FxaaFloat maxSM = max(lumaS, lumaM);
				FxaaFloat minSM = min(lumaS, lumaM);
				FxaaFloat maxESM = max(lumaE, maxSM);
				FxaaFloat minESM = min(lumaE, minSM);
				FxaaFloat maxWN = max(lumaN, lumaW);
				FxaaFloat minWN = min(lumaN, lumaW);
				FxaaFloat rangeMax = max(maxWN, maxESM);
				FxaaFloat rangeMin = min(minWN, minESM);
				FxaaFloat rangeMaxScaled = rangeMax * fxaaQualityEdgeThreshold;
				FxaaFloat range = rangeMax - rangeMin;
				FxaaFloat rangeMaxClamped = max(fxaaQualityEdgeThresholdMin, rangeMaxScaled);
				FxaaBool earlyExit = range < rangeMaxClamped;
		/*--------------------------------------------------------------------------*/
				if(earlyExit)
						#if (FXAA_DISCARD == 1)
								FxaaDiscard;
						#else
								return rgbyM;
						#endif
		/*--------------------------------------------------------------------------*/
				#if (FXAA_GATHER4_ALPHA == 0)
						#if (FXAA_GLSL_100 == 1)
							FxaaFloat lumaNW = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2(-1.0,-1.0), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaSE = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2( 1.0, 1.0), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaNE = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2( 1.0,-1.0), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaSW = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2(-1.0, 1.0), fxaaQualityRcpFrame.xy));
						#else
							FxaaFloat lumaNW = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(-1,-1), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaSE = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 1, 1), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaNE = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 1,-1), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaSW = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(-1, 1), fxaaQualityRcpFrame.xy));
						#endif
				#else
						FxaaFloat lumaNE = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(1, -1), fxaaQualityRcpFrame.xy));
						FxaaFloat lumaSW = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(-1, 1), fxaaQualityRcpFrame.xy));
				#endif
		/*--------------------------------------------------------------------------*/
				FxaaFloat lumaNS = lumaN + lumaS;
				FxaaFloat lumaWE = lumaW + lumaE;
				FxaaFloat subpixRcpRange = 1.0/range;
				FxaaFloat subpixNSWE = lumaNS + lumaWE;
				FxaaFloat edgeHorz1 = (-2.0 * lumaM) + lumaNS;
				FxaaFloat edgeVert1 = (-2.0 * lumaM) + lumaWE;
		/*--------------------------------------------------------------------------*/
				FxaaFloat lumaNESE = lumaNE + lumaSE;
				FxaaFloat lumaNWNE = lumaNW + lumaNE;
				FxaaFloat edgeHorz2 = (-2.0 * lumaE) + lumaNESE;
				FxaaFloat edgeVert2 = (-2.0 * lumaN) + lumaNWNE;
		/*--------------------------------------------------------------------------*/
				FxaaFloat lumaNWSW = lumaNW + lumaSW;
				FxaaFloat lumaSWSE = lumaSW + lumaSE;
				FxaaFloat edgeHorz4 = (abs(edgeHorz1) * 2.0) + abs(edgeHorz2);
				FxaaFloat edgeVert4 = (abs(edgeVert1) * 2.0) + abs(edgeVert2);
				FxaaFloat edgeHorz3 = (-2.0 * lumaW) + lumaNWSW;
				FxaaFloat edgeVert3 = (-2.0 * lumaS) + lumaSWSE;
				FxaaFloat edgeHorz = abs(edgeHorz3) + edgeHorz4;
				FxaaFloat edgeVert = abs(edgeVert3) + edgeVert4;
		/*--------------------------------------------------------------------------*/
				FxaaFloat subpixNWSWNESE = lumaNWSW + lumaNESE;
				FxaaFloat lengthSign = fxaaQualityRcpFrame.x;
				FxaaBool horzSpan = edgeHorz >= edgeVert;
				FxaaFloat subpixA = subpixNSWE * 2.0 + subpixNWSWNESE;
		/*--------------------------------------------------------------------------*/
				if(!horzSpan) lumaN = lumaW;
				if(!horzSpan) lumaS = lumaE;
				if(horzSpan) lengthSign = fxaaQualityRcpFrame.y;
				FxaaFloat subpixB = (subpixA * (1.0/12.0)) - lumaM;
		/*--------------------------------------------------------------------------*/
				FxaaFloat gradientN = lumaN - lumaM;
				FxaaFloat gradientS = lumaS - lumaM;
				FxaaFloat lumaNN = lumaN + lumaM;
				FxaaFloat lumaSS = lumaS + lumaM;
				FxaaBool pairN = abs(gradientN) >= abs(gradientS);
				FxaaFloat gradient = max(abs(gradientN), abs(gradientS));
				if(pairN) lengthSign = -lengthSign;
				FxaaFloat subpixC = FxaaSat(abs(subpixB) * subpixRcpRange);
		/*--------------------------------------------------------------------------*/
				FxaaFloat2 posB;
				posB.x = posM.x;
				posB.y = posM.y;
				FxaaFloat2 offNP;
				offNP.x = (!horzSpan) ? 0.0 : fxaaQualityRcpFrame.x;
				offNP.y = ( horzSpan) ? 0.0 : fxaaQualityRcpFrame.y;
				if(!horzSpan) posB.x += lengthSign * 0.5;
				if( horzSpan) posB.y += lengthSign * 0.5;
		/*--------------------------------------------------------------------------*/
				FxaaFloat2 posN;
				posN.x = posB.x - offNP.x * FXAA_QUALITY_P0;
				posN.y = posB.y - offNP.y * FXAA_QUALITY_P0;
				FxaaFloat2 posP;
				posP.x = posB.x + offNP.x * FXAA_QUALITY_P0;
				posP.y = posB.y + offNP.y * FXAA_QUALITY_P0;
				FxaaFloat subpixD = ((-2.0)*subpixC) + 3.0;
				FxaaFloat lumaEndN = FxaaLuma(FxaaTexTop(tex, posN));
				FxaaFloat subpixE = subpixC * subpixC;
				FxaaFloat lumaEndP = FxaaLuma(FxaaTexTop(tex, posP));
		/*--------------------------------------------------------------------------*/
				if(!pairN) lumaNN = lumaSS;
				FxaaFloat gradientScaled = gradient * 1.0/4.0;
				FxaaFloat lumaMM = lumaM - lumaNN * 0.5;
				FxaaFloat subpixF = subpixD * subpixE;
				FxaaBool lumaMLTZero = lumaMM < 0.0;
		/*--------------------------------------------------------------------------*/
				lumaEndN -= lumaNN * 0.5;
				lumaEndP -= lumaNN * 0.5;
				FxaaBool doneN = abs(lumaEndN) >= gradientScaled;
				FxaaBool doneP = abs(lumaEndP) >= gradientScaled;
				if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P1;
				if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P1;
				FxaaBool doneNP = (!doneN) || (!doneP);
				if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P1;
				if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P1;
		/*--------------------------------------------------------------------------*/
				if(doneNP) {
						if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
						if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
						if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
						if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
						doneN = abs(lumaEndN) >= gradientScaled;
						doneP = abs(lumaEndP) >= gradientScaled;
						if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P2;
						if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P2;
						doneNP = (!doneN) || (!doneP);
						if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P2;
						if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P2;
		/*--------------------------------------------------------------------------*/
						#if (FXAA_QUALITY_PS > 3)
						if(doneNP) {
								if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
								if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
								if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
								if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
								doneN = abs(lumaEndN) >= gradientScaled;
								doneP = abs(lumaEndP) >= gradientScaled;
								if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P3;
								if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P3;
								doneNP = (!doneN) || (!doneP);
								if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P3;
								if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P3;
		/*--------------------------------------------------------------------------*/
								#if (FXAA_QUALITY_PS > 4)
								if(doneNP) {
										if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
										if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
										if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
										if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
										doneN = abs(lumaEndN) >= gradientScaled;
										doneP = abs(lumaEndP) >= gradientScaled;
										if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P4;
										if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P4;
										doneNP = (!doneN) || (!doneP);
										if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P4;
										if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P4;
		/*--------------------------------------------------------------------------*/
										#if (FXAA_QUALITY_PS > 5)
										if(doneNP) {
												if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
												if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
												if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
												if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
												doneN = abs(lumaEndN) >= gradientScaled;
												doneP = abs(lumaEndP) >= gradientScaled;
												if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P5;
												if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P5;
												doneNP = (!doneN) || (!doneP);
												if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P5;
												if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P5;
		/*--------------------------------------------------------------------------*/
												#if (FXAA_QUALITY_PS > 6)
												if(doneNP) {
														if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
														if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
														if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
														if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
														doneN = abs(lumaEndN) >= gradientScaled;
														doneP = abs(lumaEndP) >= gradientScaled;
														if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P6;
														if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P6;
														doneNP = (!doneN) || (!doneP);
														if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P6;
														if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P6;
		/*--------------------------------------------------------------------------*/
														#if (FXAA_QUALITY_PS > 7)
														if(doneNP) {
																if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
																if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
																if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
																if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
																doneN = abs(lumaEndN) >= gradientScaled;
																doneP = abs(lumaEndP) >= gradientScaled;
																if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P7;
																if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P7;
																doneNP = (!doneN) || (!doneP);
																if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P7;
																if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P7;
		/*--------------------------------------------------------------------------*/
				#if (FXAA_QUALITY_PS > 8)
				if(doneNP) {
						if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
						if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
						if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
						if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
						doneN = abs(lumaEndN) >= gradientScaled;
						doneP = abs(lumaEndP) >= gradientScaled;
						if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P8;
						if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P8;
						doneNP = (!doneN) || (!doneP);
						if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P8;
						if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P8;
		/*--------------------------------------------------------------------------*/
						#if (FXAA_QUALITY_PS > 9)
						if(doneNP) {
								if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
								if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
								if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
								if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
								doneN = abs(lumaEndN) >= gradientScaled;
								doneP = abs(lumaEndP) >= gradientScaled;
								if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P9;
								if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P9;
								doneNP = (!doneN) || (!doneP);
								if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P9;
								if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P9;
		/*--------------------------------------------------------------------------*/
								#if (FXAA_QUALITY_PS > 10)
								if(doneNP) {
										if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
										if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
										if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
										if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
										doneN = abs(lumaEndN) >= gradientScaled;
										doneP = abs(lumaEndP) >= gradientScaled;
										if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P10;
										if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P10;
										doneNP = (!doneN) || (!doneP);
										if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P10;
										if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P10;
		/*--------------------------------------------------------------------------*/
										#if (FXAA_QUALITY_PS > 11)
										if(doneNP) {
												if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
												if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
												if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
												if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
												doneN = abs(lumaEndN) >= gradientScaled;
												doneP = abs(lumaEndP) >= gradientScaled;
												if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P11;
												if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P11;
												doneNP = (!doneN) || (!doneP);
												if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P11;
												if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P11;
		/*--------------------------------------------------------------------------*/
												#if (FXAA_QUALITY_PS > 12)
												if(doneNP) {
														if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
														if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
														if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
														if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
														doneN = abs(lumaEndN) >= gradientScaled;
														doneP = abs(lumaEndP) >= gradientScaled;
														if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P12;
														if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P12;
														doneNP = (!doneN) || (!doneP);
														if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P12;
														if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P12;
		/*--------------------------------------------------------------------------*/
												}
												#endif
		/*--------------------------------------------------------------------------*/
										}
										#endif
		/*--------------------------------------------------------------------------*/
								}
								#endif
		/*--------------------------------------------------------------------------*/
						}
						#endif
		/*--------------------------------------------------------------------------*/
				}
				#endif
		/*--------------------------------------------------------------------------*/
														}
														#endif
		/*--------------------------------------------------------------------------*/
												}
												#endif
		/*--------------------------------------------------------------------------*/
										}
										#endif
		/*--------------------------------------------------------------------------*/
								}
								#endif
		/*--------------------------------------------------------------------------*/
						}
						#endif
		/*--------------------------------------------------------------------------*/
				}
		/*--------------------------------------------------------------------------*/
				FxaaFloat dstN = posM.x - posN.x;
				FxaaFloat dstP = posP.x - posM.x;
				if(!horzSpan) dstN = posM.y - posN.y;
				if(!horzSpan) dstP = posP.y - posM.y;
		/*--------------------------------------------------------------------------*/
				FxaaBool goodSpanN = (lumaEndN < 0.0) != lumaMLTZero;
				FxaaFloat spanLength = (dstP + dstN);
				FxaaBool goodSpanP = (lumaEndP < 0.0) != lumaMLTZero;
				FxaaFloat spanLengthRcp = 1.0/spanLength;
		/*--------------------------------------------------------------------------*/
				FxaaBool directionN = dstN < dstP;
				FxaaFloat dst = min(dstN, dstP);
				FxaaBool goodSpan = directionN ? goodSpanN : goodSpanP;
				FxaaFloat subpixG = subpixF * subpixF;
				FxaaFloat pixelOffset = (dst * (-spanLengthRcp)) + 0.5;
				FxaaFloat subpixH = subpixG * fxaaQualitySubpix;
		/*--------------------------------------------------------------------------*/
				FxaaFloat pixelOffsetGood = goodSpan ? pixelOffset : 0.0;
				FxaaFloat pixelOffsetSubpix = max(pixelOffsetGood, subpixH);
				if(!horzSpan) posM.x += pixelOffsetSubpix * lengthSign;
				if( horzSpan) posM.y += pixelOffsetSubpix * lengthSign;
				#if (FXAA_DISCARD == 1)
						return FxaaTexTop(tex, posM);
				#else
						return FxaaFloat4(FxaaTexTop(tex, posM).xyz, lumaM);
				#endif
		}
		/*==========================================================================*/
		#endif

		void main() {
			gl_FragColor = FxaaPixelShader(
				vUv,
				vec4(0.0),
				tDiffuse,
				tDiffuse,
				tDiffuse,
				resolution,
				vec4(0.0),
				vec4(0.0),
				vec4(0.0),
				0.75,
				0.166,
				0.0833,
				0.0,
				0.0,
				0.0,
				vec4(0.0)
			);

			// TODO avoid querying texture twice for same texel
			gl_FragColor.a = texture2D(tDiffuse, vUv).a;
		}`};/*! (c) 2019-2021 pixiv Inc. - https://github.com/pixiv/three-vrm/blob/release/LICENSE *//*! *****************************************************************************
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
***************************************************************************** */function mt(n,e,t,i){return new(t||(t=Promise))(function(r,s){function o(c){try{l(i.next(c))}catch(f){s(f)}}function a(c){try{l(i.throw(c))}catch(f){s(f)}}function l(c){var f;c.done?r(c.value):(f=c.value,f instanceof t?f:new t(function(u){u(f)})).then(o,a)}l((i=i.apply(n,e||[])).next())})}function hy(n){Object.keys(n).forEach(e=>{const t=n[e];(t==null?void 0:t.isTexture)&&t.dispose()}),n.dispose()}function cI(n){const e=n.geometry;e&&e.dispose();const t=n.material;t&&(Array.isArray(t)?t.forEach(i=>hy(i)):t&&hy(t))}var Gt;(function(n){n[n.NUMBER=0]="NUMBER",n[n.VECTOR2=1]="VECTOR2",n[n.VECTOR3=2]="VECTOR3",n[n.VECTOR4=3]="VECTOR4",n[n.COLOR=4]="COLOR"})(Gt||(Gt={}));const uI=new ie,fI=new L,hI=new Oe,dI=new me;class pI extends We{constructor(e){super(),this.weight=0,this.isBinary=!1,this._binds=[],this._materialValues=[],this.name=`BlendShapeController_${e}`,this.type="BlendShapeController",this.visible=!1}addBind(e){const t=e.weight/100;this._binds.push({meshes:e.meshes,morphTargetIndex:e.morphTargetIndex,weight:t})}addMaterialValue(e){const t=e.material,i=e.propertyName;let r,s,o,a,l=t[i];l&&(l=e.defaultValue||l,l.isVector2?(r=Gt.VECTOR2,s=l.clone(),o=new ie().fromArray(e.targetValue),a=o.clone().sub(s)):l.isVector3?(r=Gt.VECTOR3,s=l.clone(),o=new L().fromArray(e.targetValue),a=o.clone().sub(s)):l.isVector4?(r=Gt.VECTOR4,s=l.clone(),o=new Oe().fromArray([e.targetValue[2],e.targetValue[3],e.targetValue[0],e.targetValue[1]]),a=o.clone().sub(s)):l.isColor?(r=Gt.COLOR,s=l.clone(),o=new me().fromArray(e.targetValue),a=o.clone().sub(s)):(r=Gt.NUMBER,s=l,o=e.targetValue[0],a=o-s),this._materialValues.push({material:t,propertyName:i,defaultValue:s,targetValue:o,deltaValue:a,type:r}))}applyWeight(){const e=this.isBinary?this.weight<.5?0:1:this.weight;this._binds.forEach(t=>{t.meshes.forEach(i=>{i.morphTargetInfluences&&(i.morphTargetInfluences[t.morphTargetIndex]+=e*t.weight)})}),this._materialValues.forEach(t=>{if(t.material[t.propertyName]!==void 0){if(t.type===Gt.NUMBER){const i=t.deltaValue;t.material[t.propertyName]+=i*e}else if(t.type===Gt.VECTOR2){const i=t.deltaValue;t.material[t.propertyName].add(uI.copy(i).multiplyScalar(e))}else if(t.type===Gt.VECTOR3){const i=t.deltaValue;t.material[t.propertyName].add(fI.copy(i).multiplyScalar(e))}else if(t.type===Gt.VECTOR4){const i=t.deltaValue;t.material[t.propertyName].add(hI.copy(i).multiplyScalar(e))}else if(t.type===Gt.COLOR){const i=t.deltaValue;t.material[t.propertyName].add(dI.copy(i).multiplyScalar(e))}typeof t.material.shouldApplyUniforms=="boolean"&&(t.material.shouldApplyUniforms=!0)}})}clearAppliedWeight(){this._binds.forEach(e=>{e.meshes.forEach(t=>{t.morphTargetInfluences&&(t.morphTargetInfluences[e.morphTargetIndex]=0)})}),this._materialValues.forEach(e=>{if(e.material[e.propertyName]!==void 0){if(e.type===Gt.NUMBER){const t=e.defaultValue;e.material[e.propertyName]=t}else if(e.type===Gt.VECTOR2){const t=e.defaultValue;e.material[e.propertyName].copy(t)}else if(e.type===Gt.VECTOR3){const t=e.defaultValue;e.material[e.propertyName].copy(t)}else if(e.type===Gt.VECTOR4){const t=e.defaultValue;e.material[e.propertyName].copy(t)}else if(e.type===Gt.COLOR){const t=e.defaultValue;e.material[e.propertyName].copy(t)}typeof e.material.shouldApplyUniforms=="boolean"&&(e.material.shouldApplyUniforms=!0)}})}}var St;function dy(n,e,t){const i=n.parser.json.nodes[e].mesh;if(i==null)return null;const r=n.parser.json.meshes[i].primitives.length,s=[];return t.traverse(o=>{s.length<r&&o.isMesh&&s.push(o)}),s}function py(n){return mt(this,void 0,void 0,function*(){const e=yield n.parser.getDependencies("node"),t=new Map;return e.forEach((i,r)=>{const s=dy(n,r,i);s!=null&&t.set(r,s)}),t})}function mI(n){return n[0]!=="_"?(console.warn(`renameMaterialProperty: Given property name "${n}" might be invalid`),n):(n=n.substring(1),/[A-Z]/.test(n[0])?n[0].toLowerCase()+n.substring(1):(console.warn(`renameMaterialProperty: Given property name "${n}" might be invalid`),n))}(function(n){var e,t,i,r,s,o;(e=n.BlendShapePresetName||(n.BlendShapePresetName={})).A="a",e.Angry="angry",e.Blink="blink",e.BlinkL="blink_l",e.BlinkR="blink_r",e.E="e",e.Fun="fun",e.I="i",e.Joy="joy",e.Lookdown="lookdown",e.Lookleft="lookleft",e.Lookright="lookright",e.Lookup="lookup",e.Neutral="neutral",e.O="o",e.Sorrow="sorrow",e.U="u",e.Unknown="unknown",(t=n.FirstPersonLookAtTypeName||(n.FirstPersonLookAtTypeName={})).BlendShape="BlendShape",t.Bone="Bone",(i=n.HumanoidBoneName||(n.HumanoidBoneName={})).Chest="chest",i.Head="head",i.Hips="hips",i.Jaw="jaw",i.LeftEye="leftEye",i.LeftFoot="leftFoot",i.LeftHand="leftHand",i.LeftIndexDistal="leftIndexDistal",i.LeftIndexIntermediate="leftIndexIntermediate",i.LeftIndexProximal="leftIndexProximal",i.LeftLittleDistal="leftLittleDistal",i.LeftLittleIntermediate="leftLittleIntermediate",i.LeftLittleProximal="leftLittleProximal",i.LeftLowerArm="leftLowerArm",i.LeftLowerLeg="leftLowerLeg",i.LeftMiddleDistal="leftMiddleDistal",i.LeftMiddleIntermediate="leftMiddleIntermediate",i.LeftMiddleProximal="leftMiddleProximal",i.LeftRingDistal="leftRingDistal",i.LeftRingIntermediate="leftRingIntermediate",i.LeftRingProximal="leftRingProximal",i.LeftShoulder="leftShoulder",i.LeftThumbDistal="leftThumbDistal",i.LeftThumbIntermediate="leftThumbIntermediate",i.LeftThumbProximal="leftThumbProximal",i.LeftToes="leftToes",i.LeftUpperArm="leftUpperArm",i.LeftUpperLeg="leftUpperLeg",i.Neck="neck",i.RightEye="rightEye",i.RightFoot="rightFoot",i.RightHand="rightHand",i.RightIndexDistal="rightIndexDistal",i.RightIndexIntermediate="rightIndexIntermediate",i.RightIndexProximal="rightIndexProximal",i.RightLittleDistal="rightLittleDistal",i.RightLittleIntermediate="rightLittleIntermediate",i.RightLittleProximal="rightLittleProximal",i.RightLowerArm="rightLowerArm",i.RightLowerLeg="rightLowerLeg",i.RightMiddleDistal="rightMiddleDistal",i.RightMiddleIntermediate="rightMiddleIntermediate",i.RightMiddleProximal="rightMiddleProximal",i.RightRingDistal="rightRingDistal",i.RightRingIntermediate="rightRingIntermediate",i.RightRingProximal="rightRingProximal",i.RightShoulder="rightShoulder",i.RightThumbDistal="rightThumbDistal",i.RightThumbIntermediate="rightThumbIntermediate",i.RightThumbProximal="rightThumbProximal",i.RightToes="rightToes",i.RightUpperArm="rightUpperArm",i.RightUpperLeg="rightUpperLeg",i.Spine="spine",i.UpperChest="upperChest",(r=n.MetaAllowedUserName||(n.MetaAllowedUserName={})).Everyone="Everyone",r.ExplicitlyLicensedPerson="ExplicitlyLicensedPerson",r.OnlyAuthor="OnlyAuthor",(s=n.MetaUssageName||(n.MetaUssageName={})).Allow="Allow",s.Disallow="Disallow",(o=n.MetaLicenseName||(n.MetaLicenseName={})).Cc0="CC0",o.CcBy="CC_BY",o.CcByNc="CC_BY_NC",o.CcByNcNd="CC_BY_NC_ND",o.CcByNcSa="CC_BY_NC_SA",o.CcByNd="CC_BY_ND",o.CcBySa="CC_BY_SA",o.Other="Other",o.RedistributionProhibited="Redistribution_Prohibited"})(St||(St={}));const gI=new L,_I=new L;function Zc(n,e){return n.matrixWorld.decompose(gI,e,_I),e}new st;class vI{constructor(){this._blendShapeGroups={},this._blendShapePresetMap={},this._unknownGroupNames=[]}get expressions(){return Object.keys(this._blendShapeGroups)}get blendShapePresetMap(){return this._blendShapePresetMap}get unknownGroupNames(){return this._unknownGroupNames}getBlendShapeGroup(e){const t=this._blendShapePresetMap[e],i=t?this._blendShapeGroups[t]:this._blendShapeGroups[e];if(i)return i;console.warn(`no blend shape found by ${e}`)}registerBlendShapeGroup(e,t,i){this._blendShapeGroups[e]=i,t?this._blendShapePresetMap[t]=e:this._unknownGroupNames.push(e)}getValue(e){var t;const i=this.getBlendShapeGroup(e);return(t=i==null?void 0:i.weight)!==null&&t!==void 0?t:null}setValue(e,t){const i=this.getBlendShapeGroup(e);var r;i&&(i.weight=(r=t,Math.max(Math.min(r,1),0)))}getBlendShapeTrackName(e){const t=this.getBlendShapeGroup(e);return t?`${t.name}.weight`:null}update(){Object.keys(this._blendShapeGroups).forEach(e=>{this._blendShapeGroups[e].clearAppliedWeight()}),Object.keys(this._blendShapeGroups).forEach(e=>{this._blendShapeGroups[e].applyWeight()})}}class xI{import(e){var t;return mt(this,void 0,void 0,function*(){const i=(t=e.parser.json.extensions)===null||t===void 0?void 0:t.VRM;if(!i)return null;const r=i.blendShapeMaster;if(!r)return null;const s=new vI,o=r.blendShapeGroups;if(!o)return s;const a={};return yield Promise.all(o.map(l=>mt(this,void 0,void 0,function*(){const c=l.name;if(c===void 0)return void console.warn("VRMBlendShapeImporter: One of blendShapeGroups has no name");let f;l.presetName&&l.presetName!==St.BlendShapePresetName.Unknown&&!a[l.presetName]&&(f=l.presetName,a[l.presetName]=c);const u=new pI(c);e.scene.add(u),u.isBinary=l.isBinary||!1,l.binds&&l.binds.forEach(d=>mt(this,void 0,void 0,function*(){if(d.mesh===void 0||d.index===void 0)return;const m=[];e.parser.json.nodes.forEach((v,p)=>{v.mesh===d.mesh&&m.push(p)});const _=d.index;yield Promise.all(m.map(v=>mt(this,void 0,void 0,function*(){var p;const g=yield function(x,b){return mt(this,void 0,void 0,function*(){const T=yield x.parser.getDependency("node",b);return dy(x,b,T)})}(e,v);g.every(x=>Array.isArray(x.morphTargetInfluences)&&_<x.morphTargetInfluences.length)?u.addBind({meshes:g,morphTargetIndex:_,weight:(p=d.weight)!==null&&p!==void 0?p:100}):console.warn(`VRMBlendShapeImporter: ${l.name} attempts to index ${_}th morph but not found.`)})))}));const h=l.materialValues;h&&h.forEach(d=>{if(d.materialName===void 0||d.propertyName===void 0||d.targetValue===void 0)return;const m=[];e.scene.traverse(_=>{if(_.material){const v=_.material;Array.isArray(v)?m.push(...v.filter(p=>p.name===d.materialName&&m.indexOf(p)===-1)):v.name===d.materialName&&m.indexOf(v)===-1&&m.push(v)}}),m.forEach(_=>{u.addMaterialValue({material:_,propertyName:mI(d.propertyName),targetValue:d.targetValue})})}),s.registerBlendShapeGroup(c,f,u)}))),s})}}const yI=Object.freeze(new L(0,0,-1)),bI=new st;var Pi;(function(n){n[n.Auto=0]="Auto",n[n.Both=1]="Both",n[n.ThirdPersonOnly=2]="ThirdPersonOnly",n[n.FirstPersonOnly=3]="FirstPersonOnly"})(Pi||(Pi={}));class Md{constructor(e,t){this.firstPersonFlag=Md._parseFirstPersonFlag(e),this.primitives=t}static _parseFirstPersonFlag(e){switch(e){case"Both":return Pi.Both;case"ThirdPersonOnly":return Pi.ThirdPersonOnly;case"FirstPersonOnly":return Pi.FirstPersonOnly;default:return Pi.Auto}}}class _r{constructor(e,t,i){this._meshAnnotations=[],this._firstPersonOnlyLayer=_r._DEFAULT_FIRSTPERSON_ONLY_LAYER,this._thirdPersonOnlyLayer=_r._DEFAULT_THIRDPERSON_ONLY_LAYER,this._initialized=!1,this._firstPersonBone=e,this._firstPersonBoneOffset=t,this._meshAnnotations=i}get firstPersonBone(){return this._firstPersonBone}get meshAnnotations(){return this._meshAnnotations}getFirstPersonWorldDirection(e){return e.copy(yI).applyQuaternion(Zc(this._firstPersonBone,bI))}get firstPersonOnlyLayer(){return this._firstPersonOnlyLayer}get thirdPersonOnlyLayer(){return this._thirdPersonOnlyLayer}getFirstPersonBoneOffset(e){return e.copy(this._firstPersonBoneOffset)}getFirstPersonWorldPosition(e){const t=this._firstPersonBoneOffset,i=new Oe(t.x,t.y,t.z,1);return i.applyMatrix4(this._firstPersonBone.matrixWorld),e.set(i.x,i.y,i.z)}setup({firstPersonOnlyLayer:e=_r._DEFAULT_FIRSTPERSON_ONLY_LAYER,thirdPersonOnlyLayer:t=_r._DEFAULT_THIRDPERSON_ONLY_LAYER}={}){this._initialized||(this._initialized=!0,this._firstPersonOnlyLayer=e,this._thirdPersonOnlyLayer=t,this._meshAnnotations.forEach(i=>{i.firstPersonFlag===Pi.FirstPersonOnly?i.primitives.forEach(r=>{r.layers.set(this._firstPersonOnlyLayer)}):i.firstPersonFlag===Pi.ThirdPersonOnly?i.primitives.forEach(r=>{r.layers.set(this._thirdPersonOnlyLayer)}):i.firstPersonFlag===Pi.Auto&&this._createHeadlessModel(i.primitives)}))}_excludeTriangles(e,t,i,r){let s=0;if(t!=null&&t.length>0)for(let o=0;o<e.length;o+=3){const a=e[o],l=e[o+1],c=e[o+2],f=t[a],u=i[a];if(f[0]>0&&r.includes(u[0])||f[1]>0&&r.includes(u[1])||f[2]>0&&r.includes(u[2])||f[3]>0&&r.includes(u[3]))continue;const h=t[l],d=i[l];if(h[0]>0&&r.includes(d[0])||h[1]>0&&r.includes(d[1])||h[2]>0&&r.includes(d[2])||h[3]>0&&r.includes(d[3]))continue;const m=t[c],_=i[c];m[0]>0&&r.includes(_[0])||m[1]>0&&r.includes(_[1])||m[2]>0&&r.includes(_[2])||m[3]>0&&r.includes(_[3])||(e[s++]=a,e[s++]=l,e[s++]=c)}return s}_createErasedMesh(e,t){const i=new Oc(e.geometry.clone(),e.material);i.name=`${e.name}(erase)`,i.frustumCulled=e.frustumCulled,i.layers.set(this._firstPersonOnlyLayer);const r=i.geometry,s=r.getAttribute("skinIndex").array,o=[];for(let d=0;d<s.length;d+=4)o.push([s[d],s[d+1],s[d+2],s[d+3]]);const a=r.getAttribute("skinWeight").array,l=[];for(let d=0;d<a.length;d+=4)l.push([a[d],a[d+1],a[d+2],a[d+3]]);const c=r.getIndex();if(!c)throw new Error("The geometry doesn't have an index buffer");const f=Array.from(c.array),u=this._excludeTriangles(f,l,o,t),h=[];for(let d=0;d<u;d++)h[d]=f[d];return r.setIndex(h),e.onBeforeRender&&(i.onBeforeRender=e.onBeforeRender),i.bind(new Uc(e.skeleton.bones,e.skeleton.boneInverses),new ye),i}_createHeadlessModelForSkinnedMesh(e,t){const i=[];if(t.skeleton.bones.forEach((s,o)=>{this._isEraseTarget(s)&&i.push(o)}),!i.length)return t.layers.enable(this._thirdPersonOnlyLayer),void t.layers.enable(this._firstPersonOnlyLayer);t.layers.set(this._thirdPersonOnlyLayer);const r=this._createErasedMesh(t,i);e.add(r)}_createHeadlessModel(e){e.forEach(t=>{if(t.type==="SkinnedMesh"){const i=t;this._createHeadlessModelForSkinnedMesh(i.parent,i)}else this._isEraseTarget(t)&&t.layers.set(this._thirdPersonOnlyLayer)})}_isEraseTarget(e){return e===this._firstPersonBone||!!e.parent&&this._isEraseTarget(e.parent)}}_r._DEFAULT_FIRSTPERSON_ONLY_LAYER=9,_r._DEFAULT_THIRDPERSON_ONLY_LAYER=10;class TI{import(e,t){var i;return mt(this,void 0,void 0,function*(){const r=(i=e.parser.json.extensions)===null||i===void 0?void 0:i.VRM;if(!r)return null;const s=r.firstPerson;if(!s)return null;const o=s.firstPersonBone;let a;if(a=o===void 0||o===-1?t.getBoneNode(St.HumanoidBoneName.Head):yield e.parser.getDependency("node",o),!a)return console.warn("VRMFirstPersonImporter: Could not find firstPersonBone of the VRM"),null;const l=s.firstPersonBoneOffset?new L(s.firstPersonBoneOffset.x,s.firstPersonBoneOffset.y,-s.firstPersonBoneOffset.z):new L(0,.06,0),c=[],f=yield py(e);return Array.from(f.entries()).forEach(([u,h])=>{const d=e.parser.json.nodes[u],m=s.meshAnnotations?s.meshAnnotations.find(_=>_.mesh===d.mesh):void 0;c.push(new Md(m==null?void 0:m.firstPersonFlag,h))}),new _r(a,l,c)})}}class MI{constructor(e,t){this.node=e,this.humanLimit=t}}function my(n){return n.invert?n.invert():n.inverse(),n}const Oa=new L,Ua=new st;class wI{constructor(e,t){this.restPose={},this.humanBones=this._createHumanBones(e),this.humanDescription=t,this.restPose=this.getPose()}getPose(){const e={};return Object.keys(this.humanBones).forEach(t=>{const i=this.getBoneNode(t);if(!i||e[t])return;Oa.set(0,0,0),Ua.identity();const r=this.restPose[t];(r==null?void 0:r.position)&&Oa.fromArray(r.position).negate(),(r==null?void 0:r.rotation)&&my(Ua.fromArray(r.rotation)),Oa.add(i.position),Ua.premultiply(i.quaternion),e[t]={position:Oa.toArray(),rotation:Ua.toArray()}},{}),e}setPose(e){Object.keys(e).forEach(t=>{const i=e[t],r=this.getBoneNode(t);if(!r)return;const s=this.restPose[t];s&&(i.position&&(r.position.fromArray(i.position),s.position&&r.position.add(Oa.fromArray(s.position))),i.rotation&&(r.quaternion.fromArray(i.rotation),s.rotation&&r.quaternion.multiply(Ua.fromArray(s.rotation))))})}resetPose(){Object.entries(this.restPose).forEach(([e,t])=>{const i=this.getBoneNode(e);i&&((t==null?void 0:t.position)&&i.position.fromArray(t.position),(t==null?void 0:t.rotation)&&i.quaternion.fromArray(t.rotation))})}getBone(e){var t;return(t=this.humanBones[e][0])!==null&&t!==void 0?t:void 0}getBones(e){var t;return(t=this.humanBones[e])!==null&&t!==void 0?t:[]}getBoneNode(e){var t,i;return(i=(t=this.humanBones[e][0])===null||t===void 0?void 0:t.node)!==null&&i!==void 0?i:null}getBoneNodes(e){var t,i;return(i=(t=this.humanBones[e])===null||t===void 0?void 0:t.map(r=>r.node))!==null&&i!==void 0?i:[]}_createHumanBones(e){const t=Object.values(St.HumanoidBoneName).reduce((i,r)=>(i[r]=[],i),{});return e.forEach(i=>{t[i.name].push(i.bone)}),t}}class SI{import(e){var t;return mt(this,void 0,void 0,function*(){const i=(t=e.parser.json.extensions)===null||t===void 0?void 0:t.VRM;if(!i)return null;const r=i.humanoid;if(!r)return null;const s=[];r.humanBones&&(yield Promise.all(r.humanBones.map(a=>mt(this,void 0,void 0,function*(){if(!a.bone||a.node==null)return;const l=yield e.parser.getDependency("node",a.node);s.push({name:a.bone,bone:new MI(l,{axisLength:a.axisLength,center:a.center&&new L(a.center.x,a.center.y,a.center.z),max:a.max&&new L(a.max.x,a.max.y,a.max.z),min:a.min&&new L(a.min.x,a.min.y,a.min.z),useDefaultValues:a.useDefaultValues})})}))));const o={armStretch:r.armStretch,legStretch:r.legStretch,upperArmTwist:r.upperArmTwist,lowerArmTwist:r.lowerArmTwist,upperLegTwist:r.upperLegTwist,lowerLegTwist:r.lowerLegTwist,feetSpacing:r.feetSpacing,hasTranslationDoF:r.hasTranslationDoF};return new wI(s,o)})}}class gy{constructor(e,t,i){this.curve=[0,0,0,1,1,1,1,0],this.curveXRangeDegree=90,this.curveYRangeDegree=10,e!==void 0&&(this.curveXRangeDegree=e),t!==void 0&&(this.curveYRangeDegree=t),i!==void 0&&(this.curve=i)}map(e){const t=Math.min(Math.max(e,0),this.curveXRangeDegree)/this.curveXRangeDegree;return this.curveYRangeDegree*((i,r)=>{if(i.length<8)throw new Error("evaluateCurve: Invalid curve detected! (Array length must be 8 at least)");if(i.length%4!=0)throw new Error("evaluateCurve: Invalid curve detected! (Array length must be multiples of 4");let s;for(s=0;;s++){if(i.length<=4*s)return i[4*s-3];if(r<=i[4*s])break}const o=s-1;if(o<0)return i[4*o+5];const a=i[4*o],l=(r-a)/(i[4*s]-a);return((c,f,u,h,d)=>{const m=d*d*d,_=d*d;return c+(f-c)*(-2*m+3*_)+u*(m-2*_+d)+h*(m-_)})(i[4*o+1],i[4*s+1],i[4*o+3],i[4*s+2],l)})(this.curve,t)}}class _y{}class AI extends _y{constructor(e,t,i,r){super(),this.type=St.FirstPersonLookAtTypeName.BlendShape,this._curveHorizontal=t,this._curveVerticalDown=i,this._curveVerticalUp=r,this._blendShapeProxy=e}name(){return St.FirstPersonLookAtTypeName.BlendShape}lookAt(e){const t=e.x,i=e.y;t<0?(this._blendShapeProxy.setValue(St.BlendShapePresetName.Lookup,0),this._blendShapeProxy.setValue(St.BlendShapePresetName.Lookdown,this._curveVerticalDown.map(-t))):(this._blendShapeProxy.setValue(St.BlendShapePresetName.Lookdown,0),this._blendShapeProxy.setValue(St.BlendShapePresetName.Lookup,this._curveVerticalUp.map(t))),i<0?(this._blendShapeProxy.setValue(St.BlendShapePresetName.Lookleft,0),this._blendShapeProxy.setValue(St.BlendShapePresetName.Lookright,this._curveHorizontal.map(-i))):(this._blendShapeProxy.setValue(St.BlendShapePresetName.Lookright,0),this._blendShapeProxy.setValue(St.BlendShapePresetName.Lookleft,this._curveHorizontal.map(i)))}}const EI=Object.freeze(new L(0,0,-1)),LI=new L,PI=new L,RI=new L,vy=new st;class Ba{constructor(e,t){this.autoUpdate=!0,this._euler=new or(0,0,0,Ba.EULER_ORDER),this.firstPerson=e,this.applyer=t}getLookAtWorldDirection(e){const t=Zc(this.firstPerson.firstPersonBone,vy);return e.copy(EI).applyEuler(this._euler).applyQuaternion(t)}lookAt(e){this._calcEuler(this._euler,e),this.applyer&&this.applyer.lookAt(this._euler)}update(e){this.target&&this.autoUpdate&&(this.lookAt(this.target.getWorldPosition(LI)),this.applyer&&this.applyer.lookAt(this._euler))}_calcEuler(e,t){const i=this.firstPerson.getFirstPersonWorldPosition(PI),r=RI.copy(t).sub(i).normalize();return r.applyQuaternion(my(Zc(this.firstPerson.firstPersonBone,vy))),e.x=Math.atan2(r.y,Math.sqrt(r.x*r.x+r.z*r.z)),e.y=Math.atan2(-r.x,-r.z),e}}Ba.EULER_ORDER="YXZ";const lo=new or(0,0,0,Ba.EULER_ORDER);class CI extends _y{constructor(e,t,i,r,s){super(),this.type=St.FirstPersonLookAtTypeName.Bone,this._curveHorizontalInner=t,this._curveHorizontalOuter=i,this._curveVerticalDown=r,this._curveVerticalUp=s,this._leftEye=e.getBoneNode(St.HumanoidBoneName.LeftEye),this._rightEye=e.getBoneNode(St.HumanoidBoneName.RightEye)}lookAt(e){const t=e.x,i=e.y;this._leftEye&&(lo.x=t<0?-this._curveVerticalDown.map(-t):this._curveVerticalUp.map(t),lo.y=i<0?-this._curveHorizontalInner.map(-i):this._curveHorizontalOuter.map(i),this._leftEye.quaternion.setFromEuler(lo)),this._rightEye&&(lo.x=t<0?-this._curveVerticalDown.map(-t):this._curveVerticalUp.map(t),lo.y=i<0?-this._curveHorizontalOuter.map(-i):this._curveHorizontalInner.map(i),this._rightEye.quaternion.setFromEuler(lo))}}const wd=Math.PI/180;class FI{import(e,t,i,r){var s;const o=(s=e.parser.json.extensions)===null||s===void 0?void 0:s.VRM;if(!o)return null;const a=o.firstPerson;if(!a)return null;const l=this._importApplyer(a,i,r);return new Ba(t,l||void 0)}_importApplyer(e,t,i){const r=e.lookAtHorizontalInner,s=e.lookAtHorizontalOuter,o=e.lookAtVerticalDown,a=e.lookAtVerticalUp;switch(e.lookAtTypeName){case St.FirstPersonLookAtTypeName.Bone:return r===void 0||s===void 0||o===void 0||a===void 0?null:new CI(i,this._importCurveMapperBone(r),this._importCurveMapperBone(s),this._importCurveMapperBone(o),this._importCurveMapperBone(a));case St.FirstPersonLookAtTypeName.BlendShape:return s===void 0||o===void 0||a===void 0?null:new AI(t,this._importCurveMapperBlendShape(s),this._importCurveMapperBlendShape(o),this._importCurveMapperBlendShape(a));default:return null}}_importCurveMapperBone(e){return new gy(typeof e.xRange=="number"?wd*e.xRange:void 0,typeof e.yRange=="number"?wd*e.yRange:void 0,e.curve)}_importCurveMapperBlendShape(e){return new gy(typeof e.xRange=="number"?wd*e.xRange:void 0,e.yRange,e.curve)}}const Sd=(n,e)=>{const t=(i=>{switch(i){case vt:return["Linear","( value )"];case Rn:return["sRGB","( value )"];case oc:return["RGBE","( value )"];case ih:return["RGBM","( value, 7.0 )"];case rh:return["RGBM","( value, 16.0 )"];case sh:return["RGBD","( value, 256.0 )"];case sc:return["Gamma","( value, float( GAMMA_FACTOR ) )"];default:throw new Error("unsupported encoding: "+i)}})(e);return"vec4 "+n+"( vec4 value ) { return "+t[0]+"ToLinear"+t[1]+"; }"},II=2*Math.PI;var li,co,ka,uo,ci;(function(n){n[n.Off=0]="Off",n[n.Front=1]="Front",n[n.Back=2]="Back"})(li||(li={})),function(n){n[n.None=0]="None",n[n.Normal=1]="Normal",n[n.LitShadeRate=2]="LitShadeRate",n[n.UV=3]="UV"}(co||(co={})),function(n){n[n.FixedColor=0]="FixedColor",n[n.MixedLighting=1]="MixedLighting"}(ka||(ka={})),function(n){n[n.None=0]="None",n[n.WorldCoordinates=1]="WorldCoordinates",n[n.ScreenCoordinates=2]="ScreenCoordinates"}(uo||(uo={})),function(n){n[n.Opaque=0]="Opaque",n[n.Cutout=1]="Cutout",n[n.Transparent=2]="Transparent",n[n.TransparentWithZWrite=3]="TransparentWithZWrite"}(ci||(ci={}));class xy extends on{constructor(e={}){super(),this.isMToonMaterial=!0,this.cutoff=.5,this.color=new Oe(1,1,1,1),this.shadeColor=new Oe(.97,.81,.86,1),this.map=null,this.mainTex_ST=new Oe(0,0,1,1),this.shadeTexture=null,this.normalMap=null,this.normalMapType=er,this.normalScale=new ie(1,1),this.receiveShadowRate=1,this.receiveShadowTexture=null,this.shadingGradeRate=1,this.shadingGradeTexture=null,this.shadeShift=0,this.shadeToony=.9,this.lightColorAttenuation=0,this.indirectLightIntensity=.1,this.rimTexture=null,this.rimColor=new Oe(0,0,0,1),this.rimLightingMix=0,this.rimFresnelPower=1,this.rimLift=0,this.sphereAdd=null,this.emissionColor=new Oe(0,0,0,1),this.emissiveMap=null,this.outlineWidthTexture=null,this.outlineWidth=.5,this.outlineScaledMaxDistance=1,this.outlineColor=new Oe(0,0,0,1),this.outlineLightingMix=1,this.uvAnimMaskTexture=null,this.uvAnimScrollX=0,this.uvAnimScrollY=0,this.uvAnimRotation=0,this.shouldApplyUniforms=!0,this._debugMode=co.None,this._blendMode=ci.Opaque,this._outlineWidthMode=uo.None,this._outlineColorMode=ka.FixedColor,this._cullMode=li.Back,this._outlineCullMode=li.Front,this._isOutline=!1,this._uvAnimOffsetX=0,this._uvAnimOffsetY=0,this._uvAnimPhase=0,this.encoding=e.encoding||vt,this.encoding!==vt&&this.encoding!==Rn&&console.warn("The specified color encoding does not work properly with MToonMaterial. You might want to use THREE.sRGBEncoding instead."),["mToonVersion","shadeTexture_ST","bumpMap_ST","receiveShadowTexture_ST","shadingGradeTexture_ST","rimTexture_ST","sphereAdd_ST","emissionMap_ST","outlineWidthTexture_ST","uvAnimMaskTexture_ST","srcBlend","dstBlend"].forEach(t=>{e[t]!==void 0&&delete e[t]}),e.fog=!0,e.lights=!0,e.clipping=!0,parseInt(xi,10)<129&&(e.skinning=e.skinning||!1),parseInt(xi,10)<131&&(e.morphTargets=e.morphTargets||!1,e.morphNormals=e.morphNormals||!1),e.uniforms=Bs.merge([he.common,he.normalmap,he.emissivemap,he.fog,he.lights,{cutoff:{value:.5},color:{value:new me(1,1,1)},colorAlpha:{value:1},shadeColor:{value:new me(.97,.81,.86)},mainTex_ST:{value:new Oe(0,0,1,1)},shadeTexture:{value:null},receiveShadowRate:{value:1},receiveShadowTexture:{value:null},shadingGradeRate:{value:1},shadingGradeTexture:{value:null},shadeShift:{value:0},shadeToony:{value:.9},lightColorAttenuation:{value:0},indirectLightIntensity:{value:.1},rimTexture:{value:null},rimColor:{value:new me(0,0,0)},rimLightingMix:{value:0},rimFresnelPower:{value:1},rimLift:{value:0},sphereAdd:{value:null},emissionColor:{value:new me(0,0,0)},outlineWidthTexture:{value:null},outlineWidth:{value:.5},outlineScaledMaxDistance:{value:1},outlineColor:{value:new me(0,0,0)},outlineLightingMix:{value:1},uvAnimMaskTexture:{value:null},uvAnimOffsetX:{value:0},uvAnimOffsetY:{value:0},uvAnimTheta:{value:0}}]),this.setValues(e),this._updateShaderCode(),this._applyUniforms()}get mainTex(){return this.map}set mainTex(e){this.map=e}get bumpMap(){return this.normalMap}set bumpMap(e){this.normalMap=e}get bumpScale(){return this.normalScale.x}set bumpScale(e){this.normalScale.set(e,e)}get emissionMap(){return this.emissiveMap}set emissionMap(e){this.emissiveMap=e}get blendMode(){return this._blendMode}set blendMode(e){this._blendMode=e,this.depthWrite=this._blendMode!==ci.Transparent,this.transparent=this._blendMode===ci.Transparent||this._blendMode===ci.TransparentWithZWrite,this._updateShaderCode()}get debugMode(){return this._debugMode}set debugMode(e){this._debugMode=e,this._updateShaderCode()}get outlineWidthMode(){return this._outlineWidthMode}set outlineWidthMode(e){this._outlineWidthMode=e,this._updateShaderCode()}get outlineColorMode(){return this._outlineColorMode}set outlineColorMode(e){this._outlineColorMode=e,this._updateShaderCode()}get cullMode(){return this._cullMode}set cullMode(e){this._cullMode=e,this._updateCullFace()}get outlineCullMode(){return this._outlineCullMode}set outlineCullMode(e){this._outlineCullMode=e,this._updateCullFace()}get zWrite(){return this.depthWrite?1:0}set zWrite(e){this.depthWrite=.5<=e}get isOutline(){return this._isOutline}set isOutline(e){this._isOutline=e,this._updateShaderCode(),this._updateCullFace()}updateVRMMaterials(e){this._uvAnimOffsetX=this._uvAnimOffsetX+e*this.uvAnimScrollX,this._uvAnimOffsetY=this._uvAnimOffsetY-e*this.uvAnimScrollY,this._uvAnimPhase=this._uvAnimPhase+e*this.uvAnimRotation,this._applyUniforms()}copy(e){return super.copy(e),this.cutoff=e.cutoff,this.color.copy(e.color),this.shadeColor.copy(e.shadeColor),this.map=e.map,this.mainTex_ST.copy(e.mainTex_ST),this.shadeTexture=e.shadeTexture,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(this.normalScale),this.receiveShadowRate=e.receiveShadowRate,this.receiveShadowTexture=e.receiveShadowTexture,this.shadingGradeRate=e.shadingGradeRate,this.shadingGradeTexture=e.shadingGradeTexture,this.shadeShift=e.shadeShift,this.shadeToony=e.shadeToony,this.lightColorAttenuation=e.lightColorAttenuation,this.indirectLightIntensity=e.indirectLightIntensity,this.rimTexture=e.rimTexture,this.rimColor.copy(e.rimColor),this.rimLightingMix=e.rimLightingMix,this.rimFresnelPower=e.rimFresnelPower,this.rimLift=e.rimLift,this.sphereAdd=e.sphereAdd,this.emissionColor.copy(e.emissionColor),this.emissiveMap=e.emissiveMap,this.outlineWidthTexture=e.outlineWidthTexture,this.outlineWidth=e.outlineWidth,this.outlineScaledMaxDistance=e.outlineScaledMaxDistance,this.outlineColor.copy(e.outlineColor),this.outlineLightingMix=e.outlineLightingMix,this.uvAnimMaskTexture=e.uvAnimMaskTexture,this.uvAnimScrollX=e.uvAnimScrollX,this.uvAnimScrollY=e.uvAnimScrollY,this.uvAnimRotation=e.uvAnimRotation,this.debugMode=e.debugMode,this.blendMode=e.blendMode,this.outlineWidthMode=e.outlineWidthMode,this.outlineColorMode=e.outlineColorMode,this.cullMode=e.cullMode,this.outlineCullMode=e.outlineCullMode,this.isOutline=e.isOutline,this}_applyUniforms(){this.uniforms.uvAnimOffsetX.value=this._uvAnimOffsetX,this.uniforms.uvAnimOffsetY.value=this._uvAnimOffsetY,this.uniforms.uvAnimTheta.value=II*this._uvAnimPhase,this.shouldApplyUniforms&&(this.shouldApplyUniforms=!1,this.uniforms.cutoff.value=this.cutoff,this.uniforms.color.value.setRGB(this.color.x,this.color.y,this.color.z),this.uniforms.colorAlpha.value=this.color.w,this.uniforms.shadeColor.value.setRGB(this.shadeColor.x,this.shadeColor.y,this.shadeColor.z),this.uniforms.map.value=this.map,this.uniforms.mainTex_ST.value.copy(this.mainTex_ST),this.uniforms.shadeTexture.value=this.shadeTexture,this.uniforms.normalMap.value=this.normalMap,this.uniforms.normalScale.value.copy(this.normalScale),this.uniforms.receiveShadowRate.value=this.receiveShadowRate,this.uniforms.receiveShadowTexture.value=this.receiveShadowTexture,this.uniforms.shadingGradeRate.value=this.shadingGradeRate,this.uniforms.shadingGradeTexture.value=this.shadingGradeTexture,this.uniforms.shadeShift.value=this.shadeShift,this.uniforms.shadeToony.value=this.shadeToony,this.uniforms.lightColorAttenuation.value=this.lightColorAttenuation,this.uniforms.indirectLightIntensity.value=this.indirectLightIntensity,this.uniforms.rimTexture.value=this.rimTexture,this.uniforms.rimColor.value.setRGB(this.rimColor.x,this.rimColor.y,this.rimColor.z),this.uniforms.rimLightingMix.value=this.rimLightingMix,this.uniforms.rimFresnelPower.value=this.rimFresnelPower,this.uniforms.rimLift.value=this.rimLift,this.uniforms.sphereAdd.value=this.sphereAdd,this.uniforms.emissionColor.value.setRGB(this.emissionColor.x,this.emissionColor.y,this.emissionColor.z),this.uniforms.emissiveMap.value=this.emissiveMap,this.uniforms.outlineWidthTexture.value=this.outlineWidthTexture,this.uniforms.outlineWidth.value=this.outlineWidth,this.uniforms.outlineScaledMaxDistance.value=this.outlineScaledMaxDistance,this.uniforms.outlineColor.value.setRGB(this.outlineColor.x,this.outlineColor.y,this.outlineColor.z),this.uniforms.outlineLightingMix.value=this.outlineLightingMix,this.uniforms.uvAnimMaskTexture.value=this.uvAnimMaskTexture,this.encoding===Rn&&(this.uniforms.color.value.convertSRGBToLinear(),this.uniforms.shadeColor.value.convertSRGBToLinear(),this.uniforms.rimColor.value.convertSRGBToLinear(),this.uniforms.emissionColor.value.convertSRGBToLinear(),this.uniforms.outlineColor.value.convertSRGBToLinear()),this._updateCullFace())}_updateShaderCode(){const e=this.outlineWidthTexture!==null,t=this.map!==null||this.shadeTexture!==null||this.receiveShadowTexture!==null||this.shadingGradeTexture!==null||this.rimTexture!==null||this.uvAnimMaskTexture!==null;this.defines={THREE_VRM_THREE_REVISION:parseInt(xi,10),OUTLINE:this._isOutline,BLENDMODE_OPAQUE:this._blendMode===ci.Opaque,BLENDMODE_CUTOUT:this._blendMode===ci.Cutout,BLENDMODE_TRANSPARENT:this._blendMode===ci.Transparent||this._blendMode===ci.TransparentWithZWrite,MTOON_USE_UV:e||t,MTOON_UVS_VERTEX_ONLY:e&&!t,USE_SHADETEXTURE:this.shadeTexture!==null,USE_RECEIVESHADOWTEXTURE:this.receiveShadowTexture!==null,USE_SHADINGGRADETEXTURE:this.shadingGradeTexture!==null,USE_RIMTEXTURE:this.rimTexture!==null,USE_SPHEREADD:this.sphereAdd!==null,USE_OUTLINEWIDTHTEXTURE:this.outlineWidthTexture!==null,USE_UVANIMMASKTEXTURE:this.uvAnimMaskTexture!==null,DEBUG_NORMAL:this._debugMode===co.Normal,DEBUG_LITSHADERATE:this._debugMode===co.LitShadeRate,DEBUG_UV:this._debugMode===co.UV,OUTLINE_WIDTH_WORLD:this._outlineWidthMode===uo.WorldCoordinates,OUTLINE_WIDTH_SCREEN:this._outlineWidthMode===uo.ScreenCoordinates,OUTLINE_COLOR_FIXED:this._outlineColorMode===ka.FixedColor,OUTLINE_COLOR_MIXED:this._outlineColorMode===ka.MixedLighting};const i=(this.shadeTexture!==null?Sd("shadeTextureTexelToLinear",this.shadeTexture.encoding)+`
`:"")+(this.sphereAdd!==null?Sd("sphereAddTexelToLinear",this.sphereAdd.encoding)+`
`:"")+(this.rimTexture!==null?Sd("rimTextureTexelToLinear",this.rimTexture.encoding)+`
`:"");this.vertexShader=`// #define PHONG

varying vec3 vViewPosition;

#ifndef FLAT_SHADED
  varying vec3 vNormal;
#endif

#include <common>

// #include <uv_pars_vertex>
#ifdef MTOON_USE_UV
  #ifdef MTOON_UVS_VERTEX_ONLY
    vec2 vUv;
  #else
    varying vec2 vUv;
  #endif

  uniform vec4 mainTex_ST;
#endif

#include <uv2_pars_vertex>
// #include <displacementmap_pars_vertex>
// #include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

#ifdef USE_OUTLINEWIDTHTEXTURE
  uniform sampler2D outlineWidthTexture;
#endif

uniform float outlineWidth;
uniform float outlineScaledMaxDistance;

void main() {

  // #include <uv_vertex>
  #ifdef MTOON_USE_UV
    vUv = uv;
    vUv.y = 1.0 - vUv.y; // uv.y is opposite from UniVRM's
    vUv = mainTex_ST.st + mainTex_ST.pq * vUv;
    vUv.y = 1.0 - vUv.y; // reverting the previous flip
  #endif

  #include <uv2_vertex>
  #include <color_vertex>

  #include <beginnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>

  // we need this to compute the outline properly
  objectNormal = normalize( objectNormal );

  #include <defaultnormal_vertex>

  #ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED
    vNormal = normalize( transformedNormal );
  #endif

  #include <begin_vertex>

  #include <morphtarget_vertex>
  #include <skinning_vertex>
  // #include <displacementmap_vertex>
  #include <project_vertex>
  #include <logdepthbuf_vertex>
  #include <clipping_planes_vertex>

  vViewPosition = - mvPosition.xyz;

  float outlineTex = 1.0;

  #ifdef OUTLINE
    #ifdef USE_OUTLINEWIDTHTEXTURE
      outlineTex = texture2D( outlineWidthTexture, vUv ).r;
    #endif

    #ifdef OUTLINE_WIDTH_WORLD
      float worldNormalLength = length( transformedNormal );
      vec3 outlineOffset = 0.01 * outlineWidth * outlineTex * worldNormalLength * objectNormal;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( outlineOffset + transformed, 1.0 );
    #endif

    #ifdef OUTLINE_WIDTH_SCREEN
      vec3 clipNormal = ( projectionMatrix * modelViewMatrix * vec4( objectNormal, 0.0 ) ).xyz;
      vec2 projectedNormal = normalize( clipNormal.xy );
      projectedNormal *= min( gl_Position.w, outlineScaledMaxDistance );
      projectedNormal.x *= projectionMatrix[ 0 ].x / projectionMatrix[ 1 ].y;
      gl_Position.xy += 0.01 * outlineWidth * outlineTex * projectedNormal.xy;
    #endif

    gl_Position.z += 1E-6 * gl_Position.w; // anti-artifact magic
  #endif

  #include <worldpos_vertex>
  // #include <envmap_vertex>
  #include <shadowmap_vertex>
  #include <fog_vertex>

}`,this.fragmentShader=i+`// #define PHONG

#ifdef BLENDMODE_CUTOUT
  uniform float cutoff;
#endif

uniform vec3 color;
uniform float colorAlpha;
uniform vec3 shadeColor;
#ifdef USE_SHADETEXTURE
  uniform sampler2D shadeTexture;
#endif

uniform float receiveShadowRate;
#ifdef USE_RECEIVESHADOWTEXTURE
  uniform sampler2D receiveShadowTexture;
#endif

uniform float shadingGradeRate;
#ifdef USE_SHADINGGRADETEXTURE
  uniform sampler2D shadingGradeTexture;
#endif

uniform float shadeShift;
uniform float shadeToony;
uniform float lightColorAttenuation;
uniform float indirectLightIntensity;

#ifdef USE_RIMTEXTURE
  uniform sampler2D rimTexture;
#endif
uniform vec3 rimColor;
uniform float rimLightingMix;
uniform float rimFresnelPower;
uniform float rimLift;

#ifdef USE_SPHEREADD
  uniform sampler2D sphereAdd;
#endif

uniform vec3 emissionColor;

uniform vec3 outlineColor;
uniform float outlineLightingMix;

#ifdef USE_UVANIMMASKTEXTURE
  uniform sampler2D uvAnimMaskTexture;
#endif

uniform float uvAnimOffsetX;
uniform float uvAnimOffsetY;
uniform float uvAnimTheta;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>

// #include <uv_pars_fragment>
#if ( defined( MTOON_USE_UV ) && !defined( MTOON_UVS_VERTEX_ONLY ) )
  varying vec2 vUv;
#endif

#include <uv2_pars_fragment>
#include <map_pars_fragment>
// #include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
// #include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
// #include <envmap_common_pars_fragment>
// #include <envmap_pars_fragment>
// #include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>

// #include <bsdfs>
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
    return RECIPROCAL_PI * diffuseColor;
}

#include <lights_pars_begin>

// #include <lights_phong_pars_fragment>
varying vec3 vViewPosition;

#ifndef FLAT_SHADED
  varying vec3 vNormal;
#endif

struct MToonMaterial {
  vec3 diffuseColor;
  vec3 shadeColor;
  float shadingGrade;
  float receiveShadow;
};

#define Material_LightProbeLOD( material ) (0)

#include <shadowmap_pars_fragment>
// #include <bumpmap_pars_fragment>

// #include <normalmap_pars_fragment>
#ifdef USE_NORMALMAP

  uniform sampler2D normalMap;
  uniform vec2 normalScale;

#endif

#ifdef OBJECTSPACE_NORMALMAP

  uniform mat3 normalMatrix;

#endif

#if ! defined ( USE_TANGENT ) && defined ( TANGENTSPACE_NORMALMAP )

  // Per-Pixel Tangent Space Normal Mapping
  // http://hacksoflife.blogspot.ch/2009/11/per-pixel-tangent-space-normal-mapping.html

  // three-vrm specific change: it requires \`uv\` as an input in order to support uv scrolls

  // Temporary compat against shader change @ Three.js r126
  // See: #21205, #21307, #21299
  #if THREE_VRM_THREE_REVISION >= 126

    vec3 perturbNormal2Arb( vec2 uv, vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {

      vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
      vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
      vec2 st0 = dFdx( uv.st );
      vec2 st1 = dFdy( uv.st );

      vec3 N = normalize( surf_norm );

      vec3 q1perp = cross( q1, N );
      vec3 q0perp = cross( N, q0 );

      vec3 T = q1perp * st0.x + q0perp * st1.x;
      vec3 B = q1perp * st0.y + q0perp * st1.y;

      // three-vrm specific change: Workaround for the issue that happens when delta of uv = 0.0
      // TODO: Is this still required? Or shall I make a PR about it?
      if ( length( T ) == 0.0 || length( B ) == 0.0 ) {
        return surf_norm;
      }

      float det = max( dot( T, T ), dot( B, B ) );
      float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );

      return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );

    }

  #else

    vec3 perturbNormal2Arb( vec2 uv, vec3 eye_pos, vec3 surf_norm, vec3 mapN ) {

      // Workaround for Adreno 3XX dFd*( vec3 ) bug. See #9988

      vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
      vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
      vec2 st0 = dFdx( uv.st );
      vec2 st1 = dFdy( uv.st );

      float scale = sign( st1.t * st0.s - st0.t * st1.s ); // we do not care about the magnitude

      vec3 S = ( q0 * st1.t - q1 * st0.t ) * scale;
      vec3 T = ( - q0 * st1.s + q1 * st0.s ) * scale;

      // three-vrm specific change: Workaround for the issue that happens when delta of uv = 0.0
      // TODO: Is this still required? Or shall I make a PR about it?

      if ( length( S ) == 0.0 || length( T ) == 0.0 ) {
        return surf_norm;
      }

      S = normalize( S );
      T = normalize( T );
      vec3 N = normalize( surf_norm );

      #ifdef DOUBLE_SIDED

        // Workaround for Adreno GPUs gl_FrontFacing bug. See #15850 and #10331

        bool frontFacing = dot( cross( S, T ), N ) > 0.0;

        mapN.xy *= ( float( frontFacing ) * 2.0 - 1.0 );

      #else

        mapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );

      #endif

      mat3 tsn = mat3( S, T, N );
      return normalize( tsn * mapN );

    }

  #endif

#endif

// #include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

// == lighting stuff ===========================================================
float getLightIntensity(
  const in IncidentLight directLight,
  const in GeometricContext geometry,
  const in float shadow,
  const in float shadingGrade
) {
  float lightIntensity = dot( geometry.normal, directLight.direction );
  lightIntensity = 0.5 + 0.5 * lightIntensity;
  lightIntensity = lightIntensity * shadow;
  lightIntensity = lightIntensity * shadingGrade;
  lightIntensity = lightIntensity * 2.0 - 1.0;
  return shadeToony == 1.0
    ? step( shadeShift, lightIntensity )
    : smoothstep( shadeShift, shadeShift + ( 1.0 - shadeToony ), lightIntensity );
}

vec3 getLighting( const in vec3 lightColor ) {
  vec3 lighting = lightColor;
  lighting = mix(
    lighting,
    vec3( max( 0.001, max( lighting.x, max( lighting.y, lighting.z ) ) ) ),
    lightColorAttenuation
  );

  #ifndef PHYSICALLY_CORRECT_LIGHTS
    lighting *= PI;
  #endif

  return lighting;
}

vec3 getDiffuse(
  const in MToonMaterial material,
  const in float lightIntensity,
  const in vec3 lighting
) {
  #ifdef DEBUG_LITSHADERATE
    return vec3( BRDF_Lambert( lightIntensity * lighting ) );
  #endif

  return lighting * BRDF_Lambert( mix( material.shadeColor, material.diffuseColor, lightIntensity ) );
}

// == post correction ==========================================================
void postCorrection() {
  #include <tonemapping_fragment>
  #include <encodings_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
  #include <dithering_fragment>
}

// == main procedure ===========================================================
void main() {
  #include <clipping_planes_fragment>

  vec2 uv = vec2(0.5, 0.5);

  #if ( defined( MTOON_USE_UV ) && !defined( MTOON_UVS_VERTEX_ONLY ) )
    uv = vUv;

    float uvAnimMask = 1.0;
    #ifdef USE_UVANIMMASKTEXTURE
      uvAnimMask = texture2D( uvAnimMaskTexture, uv ).x;
    #endif

    uv = uv + vec2( uvAnimOffsetX, uvAnimOffsetY ) * uvAnimMask;
    float uvRotCos = cos( uvAnimTheta * uvAnimMask );
    float uvRotSin = sin( uvAnimTheta * uvAnimMask );
    uv = mat2( uvRotCos, uvRotSin, -uvRotSin, uvRotCos ) * ( uv - 0.5 ) + 0.5;
  #endif

  #ifdef DEBUG_UV
    gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
    #if ( defined( MTOON_USE_UV ) && !defined( MTOON_UVS_VERTEX_ONLY ) )
      gl_FragColor = vec4( uv, 0.0, 1.0 );
    #endif
    return;
  #endif

  vec4 diffuseColor = vec4( color, colorAlpha );
  ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
  vec3 totalEmissiveRadiance = emissionColor;

  #include <logdepthbuf_fragment>

  // #include <map_fragment>
  #ifdef USE_MAP
    diffuseColor *= mapTexelToLinear( texture2D( map, uv ) );
  #endif

  #include <color_fragment>
  // #include <alphamap_fragment>

  // -- MToon: alpha -----------------------------------------------------------
  // #include <alphatest_fragment>
  #ifdef BLENDMODE_CUTOUT
    if ( diffuseColor.a <= cutoff ) { discard; }
    diffuseColor.a = 1.0;
  #endif

  #ifdef BLENDMODE_OPAQUE
    diffuseColor.a = 1.0;
  #endif

  #if defined( OUTLINE ) && defined( OUTLINE_COLOR_FIXED ) // omitting DebugMode
    gl_FragColor = vec4( outlineColor, diffuseColor.a );
    postCorrection();
    return;
  #endif

  // #include <specularmap_fragment>
  #include <normal_fragment_begin>

  #ifdef OUTLINE
    normal *= -1.0;
  #endif

  // #include <normal_fragment_maps>

  #ifdef OBJECTSPACE_NORMALMAP

    normal = texture2D( normalMap, uv ).xyz * 2.0 - 1.0; // overrides both flatShading and attribute normals

    #ifdef FLIP_SIDED

      normal = - normal;

    #endif

    #ifdef DOUBLE_SIDED

      // Temporary compat against shader change @ Three.js r126
      // See: #21205, #21307, #21299
      #if THREE_VRM_THREE_REVISION >= 126

        normal = normal * faceDirection;

      #else

        normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );

      #endif

    #endif

    normal = normalize( normalMatrix * normal );

  #elif defined( TANGENTSPACE_NORMALMAP )

    vec3 mapN = texture2D( normalMap, uv ).xyz * 2.0 - 1.0;
    mapN.xy *= normalScale;

    #ifdef USE_TANGENT

      normal = normalize( vTBN * mapN );

    #else

      // Temporary compat against shader change @ Three.js r126
      // See: #21205, #21307, #21299
      #if THREE_VRM_THREE_REVISION >= 126

        normal = perturbNormal2Arb( uv, -vViewPosition, normal, mapN, faceDirection );

      #else

        normal = perturbNormal2Arb( uv, -vViewPosition, normal, mapN );

      #endif

    #endif

  #endif

  // #include <emissivemap_fragment>
  #ifdef USE_EMISSIVEMAP
    totalEmissiveRadiance *= emissiveMapTexelToLinear( texture2D( emissiveMap, uv ) ).rgb;
  #endif

  #ifdef DEBUG_NORMAL
    gl_FragColor = vec4( 0.5 + 0.5 * normal, 1.0 );
    return;
  #endif

  // -- MToon: lighting --------------------------------------------------------
  // accumulation
  // #include <lights_phong_fragment>
  MToonMaterial material;

  material.diffuseColor = diffuseColor.rgb;

  material.shadeColor = shadeColor;
  #ifdef USE_SHADETEXTURE
    material.shadeColor *= shadeTextureTexelToLinear( texture2D( shadeTexture, uv ) ).rgb;
  #endif

  material.shadingGrade = 1.0;
  #ifdef USE_SHADINGGRADETEXTURE
    material.shadingGrade = 1.0 - shadingGradeRate * ( 1.0 - texture2D( shadingGradeTexture, uv ).r );
  #endif

  material.receiveShadow = receiveShadowRate;
  #ifdef USE_RECEIVESHADOWTEXTURE
    material.receiveShadow *= texture2D( receiveShadowTexture, uv ).a;
  #endif

  // #include <lights_fragment_begin>
  GeometricContext geometry;

  geometry.position = - vViewPosition;
  geometry.normal = normal;
  geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

  IncidentLight directLight;
  vec3 lightingSum = vec3( 0.0 );

  // since these variables will be used in unrolled loop, we have to define in prior
  float atten, shadow, lightIntensity;
  vec3 lighting;

  #if ( NUM_POINT_LIGHTS > 0 )
    PointLight pointLight;

    #if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
    PointLightShadow pointLightShadow;
    #endif

    #pragma unroll_loop_start
    for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
      pointLight = pointLights[ i ];

      #if THREE_VRM_THREE_REVISION >= 132
        getPointLightInfo( pointLight, geometry, directLight );
      #else
        getPointDirectLightIrradiance( pointLight, geometry, directLight );
      #endif

      atten = 1.0;
      #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
      pointLightShadow = pointLightShadows[ i ];
      atten = all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
      #endif

      shadow = 1.0 - material.receiveShadow * ( 1.0 - ( 0.5 + 0.5 * atten ) );
      lightIntensity = getLightIntensity( directLight, geometry, shadow, material.shadingGrade );
      lighting = getLighting( directLight.color );
      reflectedLight.directDiffuse += getDiffuse( material, lightIntensity, lighting );
      lightingSum += lighting;
    }
    #pragma unroll_loop_end
  #endif

  #if ( NUM_SPOT_LIGHTS > 0 )
    SpotLight spotLight;

    #if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
    SpotLightShadow spotLightShadow;
    #endif

    #pragma unroll_loop_start
    for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
      spotLight = spotLights[ i ];

      #if THREE_VRM_THREE_REVISION >= 132
        getSpotLightInfo( spotLight, geometry, directLight );
      #else
        getSpotDirectLightIrradiance( spotLight, geometry, directLight );
      #endif

      atten = 1.0;
      #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
      spotLightShadow = spotLightShadows[ i ];
      atten = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
      #endif

      shadow = 1.0 - material.receiveShadow * ( 1.0 - ( 0.5 + 0.5 * atten ) );
      lightIntensity = getLightIntensity( directLight, geometry, shadow, material.shadingGrade );
      lighting = getLighting( directLight.color );
      reflectedLight.directDiffuse += getDiffuse( material, lightIntensity, lighting );
      lightingSum += lighting;
    }
    #pragma unroll_loop_end
  #endif

  #if ( NUM_DIR_LIGHTS > 0 )
    DirectionalLight directionalLight;

    #if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
    DirectionalLightShadow directionalLightShadow;
    #endif

    #pragma unroll_loop_start
    for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
      directionalLight = directionalLights[ i ];

      #if THREE_VRM_THREE_REVISION >= 132
        getDirectionalLightInfo( directionalLight, geometry, directLight );
      #else
        getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );
      #endif

      atten = 1.0;
      #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
      directionalLightShadow = directionalLightShadows[ i ];
      atten = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
      #endif

      shadow = 1.0 - material.receiveShadow * ( 1.0 - ( 0.5 + 0.5 * atten ) );
      lightIntensity = getLightIntensity( directLight, geometry, shadow, material.shadingGrade );
      lighting = getLighting( directLight.color );
      reflectedLight.directDiffuse += getDiffuse( material, lightIntensity, lighting );
      lightingSum += lighting;
    }
    #pragma unroll_loop_end
  #endif

  // #if defined( RE_IndirectDiffuse )
  vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
  irradiance += getLightProbeIrradiance( lightProbe, geometry );
  #if ( NUM_HEMI_LIGHTS > 0 )
    #pragma unroll_loop_start
    for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
      irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
    }
    #pragma unroll_loop_end
  #endif
  // #endif

  // #include <lights_fragment_maps>
  #ifdef USE_LIGHTMAP
    vec4 lightMapTexel = texture2D( lightMap, vUv2 );
    vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
    #ifndef PHYSICALLY_CORRECT_LIGHTS
      lightMapIrradiance *= PI;
    #endif
    irradiance += lightMapIrradiance;
  #endif

  // #include <lights_fragment_end>
  // RE_IndirectDiffuse here
  reflectedLight.indirectDiffuse += indirectLightIntensity * irradiance * BRDF_Lambert( material.diffuseColor );

  // modulation
  #include <aomap_fragment>

  vec3 col = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;

  // The "comment out if you want to PBR absolutely" line
  #ifndef DEBUG_LITSHADERATE
    col = min(col, material.diffuseColor);
  #endif

  #if defined( OUTLINE ) && defined( OUTLINE_COLOR_MIXED )
    gl_FragColor = vec4(
      outlineColor.rgb * mix( vec3( 1.0 ), col, outlineLightingMix ),
      diffuseColor.a
    );
    postCorrection();
    return;
  #endif

  #ifdef DEBUG_LITSHADERATE
    gl_FragColor = vec4( col, diffuseColor.a );
    postCorrection();
    return;
  #endif

  // -- MToon: parametric rim lighting -----------------------------------------
  vec3 viewDir = normalize( vViewPosition );
  vec3 rimMix = mix( vec3( 1.0 ), lightingSum + indirectLightIntensity * irradiance, rimLightingMix );
  vec3 rim = rimColor * pow( saturate( 1.0 - dot( viewDir, normal ) + rimLift ), rimFresnelPower );
  #ifdef USE_RIMTEXTURE
    rim *= rimTextureTexelToLinear( texture2D( rimTexture, uv ) ).rgb;
  #endif
  col += rim;

  // -- MToon: additive matcap -------------------------------------------------
  #ifdef USE_SPHEREADD
    {
      vec3 x = normalize( vec3( viewDir.z, 0.0, -viewDir.x ) );
      vec3 y = cross( viewDir, x ); // guaranteed to be normalized
      vec2 sphereUv = 0.5 + 0.5 * vec2( dot( x, normal ), -dot( y, normal ) );
      vec3 matcap = sphereAddTexelToLinear( texture2D( sphereAdd, sphereUv ) ).xyz;
      col += matcap;
    }
  #endif

  // -- MToon: Emission --------------------------------------------------------
  col += totalEmissiveRadiance;

  // #include <envmap_fragment>

  // -- Almost done! -----------------------------------------------------------
  gl_FragColor = vec4( col, diffuseColor.a );
  postCorrection();
}`,this.needsUpdate=!0}_updateCullFace(){this.isOutline?this.outlineCullMode===li.Off?this.side=ei:this.outlineCullMode===li.Front?this.side=_t:this.outlineCullMode===li.Back&&(this.side=Ki):this.cullMode===li.Off?this.side=ei:this.cullMode===li.Front?this.side=_t:this.cullMode===li.Back&&(this.side=Ki)}}var hn;(function(n){n[n.Opaque=0]="Opaque",n[n.Cutout=1]="Cutout",n[n.Transparent=2]="Transparent",n[n.TransparentWithZWrite=3]="TransparentWithZWrite"})(hn||(hn={}));class Jc extends on{constructor(e){super(),this.isVRMUnlitMaterial=!0,this.cutoff=.5,this.map=null,this.mainTex_ST=new Oe(0,0,1,1),this._renderType=hn.Opaque,this.shouldApplyUniforms=!0,e===void 0&&(e={}),e.fog=!0,e.clipping=!0,parseInt(xi,10)<129&&(e.skinning=e.skinning||!1),parseInt(xi,10)<131&&(e.morphTargets=e.morphTargets||!1,e.morphNormals=e.morphNormals||!1),e.uniforms=Bs.merge([he.common,he.fog,{cutoff:{value:.5},mainTex_ST:{value:new Oe(0,0,1,1)}}]),this.setValues(e),this._updateShaderCode(),this._applyUniforms()}get mainTex(){return this.map}set mainTex(e){this.map=e}get renderType(){return this._renderType}set renderType(e){this._renderType=e,this.depthWrite=this._renderType!==hn.Transparent,this.transparent=this._renderType===hn.Transparent||this._renderType===hn.TransparentWithZWrite,this._updateShaderCode()}updateVRMMaterials(e){this._applyUniforms()}copy(e){return super.copy(e),this.cutoff=e.cutoff,this.map=e.map,this.mainTex_ST.copy(e.mainTex_ST),this.renderType=e.renderType,this}_applyUniforms(){this.shouldApplyUniforms&&(this.shouldApplyUniforms=!1,this.uniforms.cutoff.value=this.cutoff,this.uniforms.map.value=this.map,this.uniforms.mainTex_ST.value.copy(this.mainTex_ST))}_updateShaderCode(){this.defines={RENDERTYPE_OPAQUE:this._renderType===hn.Opaque,RENDERTYPE_CUTOUT:this._renderType===hn.Cutout,RENDERTYPE_TRANSPARENT:this._renderType===hn.Transparent||this._renderType===hn.TransparentWithZWrite},this.vertexShader=`#include <common>

// #include <uv_pars_vertex>
#ifdef USE_MAP
  varying vec2 vUv;
  uniform vec4 mainTex_ST;
#endif

#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

  // #include <uv_vertex>
  #ifdef USE_MAP
    vUv = vec2( mainTex_ST.p * uv.x + mainTex_ST.s, mainTex_ST.q * uv.y + mainTex_ST.t );
  #endif

  #include <uv2_vertex>
  #include <color_vertex>
  #include <skinbase_vertex>

  #ifdef USE_ENVMAP

  #include <beginnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinnormal_vertex>
  #include <defaultnormal_vertex>

  #endif

  #include <begin_vertex>
  #include <morphtarget_vertex>
  #include <skinning_vertex>
  #include <project_vertex>
  #include <logdepthbuf_vertex>

  #include <worldpos_vertex>
  #include <clipping_planes_vertex>
  #include <envmap_vertex>
  #include <fog_vertex>

}`,this.fragmentShader=`#ifdef RENDERTYPE_CUTOUT
  uniform float cutoff;
#endif

#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
// #include <alphamap_pars_fragment>
// #include <aomap_pars_fragment>
// #include <lightmap_pars_fragment>
// #include <envmap_pars_fragment>
#include <fog_pars_fragment>
// #include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

// == main procedure ===========================================================
void main() {
  #include <clipping_planes_fragment>

  vec4 diffuseColor = vec4( 1.0 );

  #include <logdepthbuf_fragment>

  // #include <map_fragment>
  #ifdef USE_MAP
    diffuseColor *= mapTexelToLinear( texture2D( map, vUv ) );
  #endif

  #include <color_fragment>
  // #include <alphamap_fragment>

  // MToon: alpha
  // #include <alphatest_fragment>
  #ifdef RENDERTYPE_CUTOUT
    if ( diffuseColor.a <= cutoff ) { discard; }
    diffuseColor.a = 1.0;
  #endif

  #ifdef RENDERTYPE_OPAQUE
    diffuseColor.a = 1.0;
  #endif

  // #include <specularmap_fragment>

  ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );

  // accumulation (baked indirect lighting only)
  #ifdef USE_LIGHTMAP
    reflectedLight.indirectDiffuse += texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;
  #else
    reflectedLight.indirectDiffuse += vec3( 1.0 );
  #endif

  // modulation
  // #include <aomap_fragment>

  reflectedLight.indirectDiffuse *= diffuseColor.rgb;
  vec3 outgoingLight = reflectedLight.indirectDiffuse;

  // #include <envmap_fragment>

  gl_FragColor = vec4( outgoingLight, diffuseColor.a );

  #include <premultiplied_alpha_fragment>
  #include <tonemapping_fragment>
  #include <encodings_fragment>
  #include <fog_fragment>
}`,this.needsUpdate=!0}}class NI{constructor(e={}){this._encoding=e.encoding||vt,this._encoding!==vt&&this._encoding!==Rn&&console.warn("The specified color encoding might not work properly with VRMMaterialImporter. You might want to use THREE.sRGBEncoding instead."),this._requestEnvMap=e.requestEnvMap}convertGLTFMaterials(e){var t;return mt(this,void 0,void 0,function*(){const i=(t=e.parser.json.extensions)===null||t===void 0?void 0:t.VRM;if(!i)return null;const r=i.materialProperties;if(!r)return null;const s=yield py(e),o={},a=[];return yield Promise.all(Array.from(s.entries()).map(([l,c])=>mt(this,void 0,void 0,function*(){const f=e.parser.json.nodes[l],u=e.parser.json.meshes[f.mesh];yield Promise.all(c.map((h,d)=>mt(this,void 0,void 0,function*(){const m=u.primitives[d];if(!m)return;const _=h.geometry,v=_.index?_.index.count:_.attributes.position.count/3;Array.isArray(h.material)||(h.material=[h.material],_.addGroup(0,v,0));const p=m.material;let g,x=r[p];x||(console.warn(`VRMMaterialImporter: There are no material definition for material #${p} on VRM extension.`),x={shader:"VRM_USE_GLTFSHADER"}),o[p]?g=o[p]:(g=yield this.createVRMMaterials(h.material[0],x,e),o[p]=g,a.push(g.surface),g.outline&&a.push(g.outline)),h.material[0]=g.surface,this._requestEnvMap&&g.surface.isMeshStandardMaterial&&this._requestEnvMap().then(b=>{g.surface.envMap=b,g.surface.needsUpdate=!0}),h.renderOrder=x.renderQueue||2e3,g.outline&&(h.material[1]=g.outline,_.addGroup(0,v,1))})))}))),a})}createVRMMaterials(e,t,i){return mt(this,void 0,void 0,function*(){let r,s;if(t.shader==="VRM/MToon"){const o=yield this._extractMaterialProperties(e,t,i);["srcBlend","dstBlend","isFirstSetup"].forEach(a=>{o[a]!==void 0&&delete o[a]}),["mainTex","shadeTexture","emissionMap","sphereAdd","rimTexture"].forEach(a=>{o[a]!==void 0&&(o[a].encoding=this._encoding)}),o.encoding=this._encoding,r=new xy(o),o.outlineWidthMode!==uo.None&&(o.isOutline=!0,s=new xy(o))}else if(t.shader==="VRM/UnlitTexture"){const o=yield this._extractMaterialProperties(e,t,i);o.renderType=hn.Opaque,r=new Jc(o)}else if(t.shader==="VRM/UnlitCutout"){const o=yield this._extractMaterialProperties(e,t,i);o.renderType=hn.Cutout,r=new Jc(o)}else if(t.shader==="VRM/UnlitTransparent"){const o=yield this._extractMaterialProperties(e,t,i);o.renderType=hn.Transparent,r=new Jc(o)}else if(t.shader==="VRM/UnlitTransparentZWrite"){const o=yield this._extractMaterialProperties(e,t,i);o.renderType=hn.TransparentWithZWrite,r=new Jc(o)}else t.shader!=="VRM_USE_GLTFSHADER"&&console.warn(`Unknown shader detected: "${t.shader}"`),r=this._convertGLTFMaterial(e.clone());return r.name=e.name,r.userData=JSON.parse(JSON.stringify(e.userData)),r.userData.vrmMaterialProperties=t,s&&(s.name=e.name+" (Outline)",s.userData=JSON.parse(JSON.stringify(e.userData)),s.userData.vrmMaterialProperties=t),{surface:r,outline:s}})}_renameMaterialProperty(e){return e[0]!=="_"?(console.warn(`VRMMaterials: Given property name "${e}" might be invalid`),e):(e=e.substring(1),/[A-Z]/.test(e[0])?e[0].toLowerCase()+e.substring(1):(console.warn(`VRMMaterials: Given property name "${e}" might be invalid`),e))}_convertGLTFMaterial(e){if(e.isMeshStandardMaterial){const t=e;t.map&&(t.map.encoding=this._encoding),t.emissiveMap&&(t.emissiveMap.encoding=this._encoding),this._encoding===vt&&(t.color.convertLinearToSRGB(),t.emissive.convertLinearToSRGB())}if(e.isMeshBasicMaterial){const t=e;t.map&&(t.map.encoding=this._encoding),this._encoding===vt&&t.color.convertLinearToSRGB()}return e}_extractMaterialProperties(e,t,i){const r=[],s={};if(t.textureProperties)for(const o of Object.keys(t.textureProperties)){const a=this._renameMaterialProperty(o),l=t.textureProperties[o];r.push(i.parser.getDependency("texture",l).then(c=>{s[a]=c}))}if(t.floatProperties)for(const o of Object.keys(t.floatProperties)){const a=this._renameMaterialProperty(o);s[a]=t.floatProperties[o]}if(t.vectorProperties)for(const o of Object.keys(t.vectorProperties)){let a=this._renameMaterialProperty(o);["_MainTex","_ShadeTexture","_BumpMap","_ReceiveShadowTexture","_ShadingGradeTexture","_RimTexture","_SphereAdd","_EmissionMap","_OutlineWidthTexture","_UvAnimMaskTexture"].some(l=>o===l)&&(a+="_ST"),s[a]=new Oe(...t.vectorProperties[o])}return parseInt(xi,10)<129&&(s.skinning=e.skinning||!1),parseInt(xi,10)<131&&(s.morphTargets=e.morphTargets||!1,s.morphNormals=e.morphNormals||!1),Promise.all(r).then(()=>s)}}class DI{constructor(e){var t;this.ignoreTexture=(t=e==null?void 0:e.ignoreTexture)!==null&&t!==void 0&&t}import(e){var t;return mt(this,void 0,void 0,function*(){const i=(t=e.parser.json.extensions)===null||t===void 0?void 0:t.VRM;if(!i)return null;const r=i.meta;if(!r)return null;let s;return this.ignoreTexture||r.texture==null||r.texture===-1||(s=yield e.parser.getDependency("texture",r.texture)),{allowedUserName:r.allowedUserName,author:r.author,commercialUssageName:r.commercialUssageName,contactInformation:r.contactInformation,licenseName:r.licenseName,otherLicenseUrl:r.otherLicenseUrl,otherPermissionUrl:r.otherPermissionUrl,reference:r.reference,sexualUssageName:r.sexualUssageName,texture:s!=null?s:void 0,title:r.title,version:r.version,violentUssageName:r.violentUssageName}})}}const OI=new ye;function yy(n){return n.invert?n.invert():n.getInverse(OI.copy(n)),n}class UI{constructor(e){this._inverseCache=new ye,this._shouldUpdateInverse=!0,this.matrix=e;const t={set:(i,r,s)=>(this._shouldUpdateInverse=!0,i[r]=s,!0)};this._originalElements=e.elements,e.elements=new Proxy(e.elements,t)}get inverse(){return this._shouldUpdateInverse&&(yy(this._inverseCache.copy(this.matrix)),this._shouldUpdateInverse=!1),this._inverseCache}revert(){this.matrix.elements=this._originalElements}}const BI=Object.freeze(new ye),kI=Object.freeze(new st),fo=new L,by=new L,HI=new L,zI=new st,Ot=new ye,eu=new ye;class VI{constructor(e,t={}){var i,r,s,o,a,l;if(this._currentTail=new L,this._prevTail=new L,this._nextTail=new L,this._boneAxis=new L,this._centerSpacePosition=new L,this._center=null,this._parentWorldRotation=new st,this._initialLocalMatrix=new ye,this._initialLocalRotation=new st,this._initialLocalChildPosition=new L,this.bone=e,this.bone.matrixAutoUpdate=!1,this.radius=(i=t.radius)!==null&&i!==void 0?i:.02,this.stiffnessForce=(r=t.stiffnessForce)!==null&&r!==void 0?r:1,this.gravityDir=t.gravityDir?new L().copy(t.gravityDir):new L().set(0,-1,0),this.gravityPower=(s=t.gravityPower)!==null&&s!==void 0?s:0,this.dragForce=(o=t.dragForce)!==null&&o!==void 0?o:.4,this.colliders=(a=t.colliders)!==null&&a!==void 0?a:[],this._centerSpacePosition.setFromMatrixPosition(this.bone.matrixWorld),this._initialLocalMatrix.copy(this.bone.matrix),this._initialLocalRotation.copy(this.bone.quaternion),this.bone.children.length===0)this._initialLocalChildPosition.copy(this.bone.position).normalize().multiplyScalar(.07);else{const c=this.bone.children[0];this._initialLocalChildPosition.copy(c.position)}this.bone.localToWorld(this._currentTail.copy(this._initialLocalChildPosition)),this._prevTail.copy(this._currentTail),this._nextTail.copy(this._currentTail),this._boneAxis.copy(this._initialLocalChildPosition).normalize(),this._centerSpaceBoneLength=fo.copy(this._initialLocalChildPosition).applyMatrix4(this.bone.matrixWorld).sub(this._centerSpacePosition).length(),this.center=(l=t.center)!==null&&l!==void 0?l:null}get center(){return this._center}set center(e){var t;this._getMatrixCenterToWorld(Ot),this._currentTail.applyMatrix4(Ot),this._prevTail.applyMatrix4(Ot),this._nextTail.applyMatrix4(Ot),((t=this._center)===null||t===void 0?void 0:t.userData.inverseCacheProxy)&&(this._center.userData.inverseCacheProxy.revert(),delete this._center.userData.inverseCacheProxy),this._center=e,this._center&&(this._center.userData.inverseCacheProxy||(this._center.userData.inverseCacheProxy=new UI(this._center.matrixWorld))),this._getMatrixWorldToCenter(Ot),this._currentTail.applyMatrix4(Ot),this._prevTail.applyMatrix4(Ot),this._nextTail.applyMatrix4(Ot),Ot.multiply(this.bone.matrixWorld),this._centerSpacePosition.setFromMatrixPosition(Ot),this._centerSpaceBoneLength=fo.copy(this._initialLocalChildPosition).applyMatrix4(Ot).sub(this._centerSpacePosition).length()}reset(){this.bone.quaternion.copy(this._initialLocalRotation),this.bone.updateMatrix(),this.bone.matrixWorld.multiplyMatrices(this._getParentMatrixWorld(),this.bone.matrix),this._centerSpacePosition.setFromMatrixPosition(this.bone.matrixWorld),this.bone.localToWorld(this._currentTail.copy(this._initialLocalChildPosition)),this._prevTail.copy(this._currentTail),this._nextTail.copy(this._currentTail)}update(e){if(e<=0)return;this.bone.matrixWorld.multiplyMatrices(this._getParentMatrixWorld(),this.bone.matrix),this.bone.parent?Zc(this.bone.parent,this._parentWorldRotation):this._parentWorldRotation.copy(kI),this._getMatrixWorldToCenter(Ot),Ot.multiply(this.bone.matrixWorld),this._centerSpacePosition.setFromMatrixPosition(Ot),this._getMatrixWorldToCenter(eu),eu.multiply(this._getParentMatrixWorld());const t=this.stiffnessForce*e,i=by.copy(this.gravityDir).multiplyScalar(this.gravityPower*e);this._nextTail.copy(this._currentTail).add(fo.copy(this._currentTail).sub(this._prevTail).multiplyScalar(1-this.dragForce)).add(fo.copy(this._boneAxis).applyMatrix4(this._initialLocalMatrix).applyMatrix4(eu).sub(this._centerSpacePosition).normalize().multiplyScalar(t)).add(i),this._nextTail.sub(this._centerSpacePosition).normalize().multiplyScalar(this._centerSpaceBoneLength).add(this._centerSpacePosition),this._collision(this._nextTail),this._prevTail.copy(this._currentTail),this._currentTail.copy(this._nextTail);const r=yy(Ot.copy(eu.multiply(this._initialLocalMatrix))),s=zI.setFromUnitVectors(this._boneAxis,fo.copy(this._nextTail).applyMatrix4(r).normalize());this.bone.quaternion.copy(this._initialLocalRotation).multiply(s),this.bone.updateMatrix(),this.bone.matrixWorld.multiplyMatrices(this._getParentMatrixWorld(),this.bone.matrix)}_collision(e){this.colliders.forEach(t=>{this._getMatrixWorldToCenter(Ot),Ot.multiply(t.matrixWorld);const i=fo.setFromMatrixPosition(Ot),r=t.geometry.boundingSphere.radius,s=this.radius+r;if(e.distanceToSquared(i)<=s*s){const o=by.subVectors(e,i).normalize(),a=HI.addVectors(i,o.multiplyScalar(s));e.copy(a.sub(this._centerSpacePosition).normalize().multiplyScalar(this._centerSpaceBoneLength).add(this._centerSpacePosition))}})}_getMatrixCenterToWorld(e){return this._center?e.copy(this._center.matrixWorld):e.identity(),e}_getMatrixWorldToCenter(e){return this._center?e.copy(this._center.userData.inverseCacheProxy.inverse):e.identity(),e}_getParentMatrixWorld(){return this.bone.parent?this.bone.parent.matrixWorld:BI}}class GI{constructor(e,t){this.colliderGroups=[],this.springBoneGroupList=[],this.colliderGroups=e,this.springBoneGroupList=t}setCenter(e){this.springBoneGroupList.forEach(t=>{t.forEach(i=>{i.center=e})})}lateUpdate(e){this.springBoneGroupList.forEach(t=>{t.forEach(i=>{i.update(e)})})}reset(){this.springBoneGroupList.forEach(e=>{e.forEach(t=>{t.reset()})})}}const WI=new L,XI=new In({visible:!1});class YI{import(e){var t;return mt(this,void 0,void 0,function*(){const i=(t=e.parser.json.extensions)===null||t===void 0?void 0:t.VRM;if(!i)return null;const r=i.secondaryAnimation;if(!r)return null;const s=yield this._importColliderMeshGroups(e,r),o=yield this._importSpringBoneGroupList(e,r,s);return new GI(s,o)})}_createSpringBone(e,t={}){return new VI(e,t)}_importSpringBoneGroupList(e,t,i){return mt(this,void 0,void 0,function*(){const r=t.boneGroups||[],s=[];return yield Promise.all(r.map(o=>mt(this,void 0,void 0,function*(){if(o.stiffiness===void 0||o.gravityDir===void 0||o.gravityDir.x===void 0||o.gravityDir.y===void 0||o.gravityDir.z===void 0||o.gravityPower===void 0||o.dragForce===void 0||o.hitRadius===void 0||o.colliderGroups===void 0||o.bones===void 0||o.center===void 0)return;const a=o.stiffiness,l=new L(o.gravityDir.x,o.gravityDir.y,-o.gravityDir.z),c=o.gravityPower,f=o.dragForce,u=o.hitRadius,h=[];o.colliderGroups.forEach(m=>{h.push(...i[m].colliders)});const d=[];yield Promise.all(o.bones.map(m=>mt(this,void 0,void 0,function*(){const _=yield e.parser.getDependency("node",m),v=o.center!==-1?yield e.parser.getDependency("node",o.center):null;_&&_.traverse(p=>{const g=this._createSpringBone(p,{radius:u,stiffnessForce:a,gravityDir:l,gravityPower:c,dragForce:f,colliders:h,center:v});d.push(g)})}))),s.push(d)}))),s})}_importColliderMeshGroups(e,t){return mt(this,void 0,void 0,function*(){const i=t.colliderGroups;if(i===void 0)return[];const r=[];return i.forEach(s=>mt(this,void 0,void 0,function*(){if(s.node===void 0||s.colliders===void 0)return;const o=yield e.parser.getDependency("node",s.node),a=[];s.colliders.forEach(c=>{if(c.offset===void 0||c.offset.x===void 0||c.offset.y===void 0||c.offset.z===void 0||c.radius===void 0)return;const f=WI.set(c.offset.x,c.offset.y,-c.offset.z),u=this._createColliderMesh(c.radius,f);o.add(u),a.push(u)});const l={node:s.node,colliders:a};r.push(l)})),r})}_createColliderMesh(e,t){const i=new Dt(new id(e,8,4),XI);return i.position.copy(t),i.name="vrmColliderSphere",i.geometry.computeBoundingSphere(),i}}class qI{constructor(e={}){this._metaImporter=e.metaImporter||new DI,this._blendShapeImporter=e.blendShapeImporter||new xI,this._lookAtImporter=e.lookAtImporter||new FI,this._humanoidImporter=e.humanoidImporter||new SI,this._firstPersonImporter=e.firstPersonImporter||new TI,this._materialImporter=e.materialImporter||new NI,this._springBoneImporter=e.springBoneImporter||new YI}import(e){return mt(this,void 0,void 0,function*(){if(e.parser.json.extensions===void 0||e.parser.json.extensions.VRM===void 0)throw new Error("Could not find VRM extension on the GLTF");const t=e.scene;t.updateMatrixWorld(!1),t.traverse(f=>{f.isMesh&&(f.frustumCulled=!1)});const i=(yield this._metaImporter.import(e))||void 0,r=(yield this._materialImporter.convertGLTFMaterials(e))||void 0,s=(yield this._humanoidImporter.import(e))||void 0,o=s&&(yield this._firstPersonImporter.import(e,s))||void 0,a=(yield this._blendShapeImporter.import(e))||void 0,l=o&&a&&s&&(yield this._lookAtImporter.import(e,o,a,s))||void 0,c=(yield this._springBoneImporter.import(e))||void 0;return new Ad({scene:e.scene,meta:i,materials:r,humanoid:s,firstPerson:o,blendShapeProxy:a,lookAt:l,springBoneManager:c})})}}class Ad{constructor(e){this.scene=e.scene,this.humanoid=e.humanoid,this.blendShapeProxy=e.blendShapeProxy,this.firstPerson=e.firstPerson,this.lookAt=e.lookAt,this.materials=e.materials,this.springBoneManager=e.springBoneManager,this.meta=e.meta}static from(e,t={}){return mt(this,void 0,void 0,function*(){return yield new qI(t).import(e)})}update(e){this.lookAt&&this.lookAt.update(e),this.blendShapeProxy&&this.blendShapeProxy.update(),this.springBoneManager&&this.springBoneManager.lateUpdate(e),this.materials&&this.materials.forEach(t=>{t.updateVRMMaterials&&t.updateVRMMaterials(e)})}dispose(){var e,t;const i=this.scene;i&&i.traverse(cI),(t=(e=this.meta)===null||e===void 0?void 0:e.texture)===null||t===void 0||t.dispose()}}new ie;new Gr(-1,1,-1,1,-1,1);const jI=new In({color:16777215,side:ei}),QI=new Dt(new Lc(2,2),jI),$I=new Fc;$I.add(QI);new L;new In({color:16711935,wireframe:!0,transparent:!0,depthTest:!1});new L;var KI=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Ty={exports:{}};(function(n,e){(function(t,i){n.exports=i()})(KI,function(){var t=function(){function i(d){return o.appendChild(d.dom),d}function r(d){for(var m=0;m<o.children.length;m++)o.children[m].style.display=m===d?"block":"none";s=d}var s=0,o=document.createElement("div");o.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",o.addEventListener("click",function(d){d.preventDefault(),r(++s%o.children.length)},!1);var a=(performance||Date).now(),l=a,c=0,f=i(new t.Panel("FPS","#0ff","#002")),u=i(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var h=i(new t.Panel("MB","#f08","#201"));return r(0),{REVISION:16,dom:o,addPanel:i,showPanel:r,begin:function(){a=(performance||Date).now()},end:function(){c++;var d=(performance||Date).now();if(u.update(d-a,200),d>l+1e3&&(f.update(1e3*c/(d-l),100),l=d,c=0,h)){var m=performance.memory;h.update(m.usedJSHeapSize/1048576,m.jsHeapSizeLimit/1048576)}return d},update:function(){a=this.end()},domElement:o,setMode:r}};return t.Panel=function(i,r,s){var o=1/0,a=0,l=Math.round,c=l(window.devicePixelRatio||1),f=80*c,u=48*c,h=3*c,d=2*c,m=3*c,_=15*c,v=74*c,p=30*c,g=document.createElement("canvas");g.width=f,g.height=u,g.style.cssText="width:80px;height:48px";var x=g.getContext("2d");return x.font="bold "+9*c+"px Helvetica,Arial,sans-serif",x.textBaseline="top",x.fillStyle=s,x.fillRect(0,0,f,u),x.fillStyle=r,x.fillText(i,h,d),x.fillRect(m,_,v,p),x.fillStyle=s,x.globalAlpha=.9,x.fillRect(m,_,v,p),{dom:g,update:function(b,T){o=Math.min(o,b),a=Math.max(a,b),x.fillStyle=s,x.globalAlpha=1,x.fillRect(0,0,f,_),x.fillStyle=r,x.fillText(l(b)+" "+i+" ("+l(o)+"-"+l(a)+")",h,d),x.drawImage(g,m+c,_,v-c,p,m,_,v-c,p),x.fillRect(m+v-c,_,c,p),x.fillStyle=s,x.globalAlpha=.9,x.fillRect(m+v-c,_,c,l((1-b/T)*p))}}},t})})(Ty);var ZI=Ty.exports,My={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},Ed={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},JI=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],tu={CSS:{},springs:{}};function ui(n,e,t){return Math.min(Math.max(n,e),t)}function Ha(n,e){return n.indexOf(e)>-1}function Ld(n,e){return n.apply(null,e)}var we={arr:function(n){return Array.isArray(n)},obj:function(n){return Ha(Object.prototype.toString.call(n),"Object")},pth:function(n){return we.obj(n)&&n.hasOwnProperty("totalLength")},svg:function(n){return n instanceof SVGElement},inp:function(n){return n instanceof HTMLInputElement},dom:function(n){return n.nodeType||we.svg(n)},str:function(n){return typeof n=="string"},fnc:function(n){return typeof n=="function"},und:function(n){return typeof n=="undefined"},nil:function(n){return we.und(n)||n===null},hex:function(n){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(n)},rgb:function(n){return/^rgb/.test(n)},hsl:function(n){return/^hsl/.test(n)},col:function(n){return we.hex(n)||we.rgb(n)||we.hsl(n)},key:function(n){return!My.hasOwnProperty(n)&&!Ed.hasOwnProperty(n)&&n!=="targets"&&n!=="keyframes"}};function wy(n){var e=/\(([^)]+)\)/.exec(n);return e?e[1].split(",").map(function(t){return parseFloat(t)}):[]}function Sy(n,e){var t=wy(n),i=ui(we.und(t[0])?1:t[0],.1,100),r=ui(we.und(t[1])?100:t[1],.1,100),s=ui(we.und(t[2])?10:t[2],.1,100),o=ui(we.und(t[3])?0:t[3],.1,100),a=Math.sqrt(r/i),l=s/(2*Math.sqrt(r*i)),c=l<1?a*Math.sqrt(1-l*l):0,f=1,u=l<1?(l*a+-o)/c:-o+a;function h(m){var _=e?e*m/1e3:m;return l<1?_=Math.exp(-_*l*a)*(f*Math.cos(c*_)+u*Math.sin(c*_)):_=(f+u*_)*Math.exp(-_*a),m===0||m===1?m:1-_}function d(){var m=tu.springs[n];if(m)return m;for(var _=1/6,v=0,p=0;;)if(v+=_,h(v)===1){if(p++,p>=16)break}else p=0;var g=v*_*1e3;return tu.springs[n]=g,g}return e?h:d}function e2(n){return n===void 0&&(n=10),function(e){return Math.ceil(ui(e,1e-6,1)*n)*(1/n)}}var t2=function(){var n=11,e=1/(n-1);function t(f,u){return 1-3*u+3*f}function i(f,u){return 3*u-6*f}function r(f){return 3*f}function s(f,u,h){return((t(u,h)*f+i(u,h))*f+r(u))*f}function o(f,u,h){return 3*t(u,h)*f*f+2*i(u,h)*f+r(u)}function a(f,u,h,d,m){var _,v,p=0;do v=u+(h-u)/2,_=s(v,d,m)-f,_>0?h=v:u=v;while(Math.abs(_)>1e-7&&++p<10);return v}function l(f,u,h,d){for(var m=0;m<4;++m){var _=o(u,h,d);if(_===0)return u;var v=s(u,h,d)-f;u-=v/_}return u}function c(f,u,h,d){if(!(0<=f&&f<=1&&0<=h&&h<=1))return;var m=new Float32Array(n);if(f!==u||h!==d)for(var _=0;_<n;++_)m[_]=s(_*e,f,h);function v(p){for(var g=0,x=1,b=n-1;x!==b&&m[x]<=p;++x)g+=e;--x;var T=(p-m[x])/(m[x+1]-m[x]),S=g+T*e,y=o(S,f,h);return y>=.001?l(p,S,f,h):y===0?S:a(p,g,g+e,f,h)}return function(p){return f===u&&h===d||p===0||p===1?p:s(v(p),u,d)}}return c}(),Ay=function(){var n={linear:function(){return function(i){return i}}},e={Sine:function(){return function(i){return 1-Math.cos(i*Math.PI/2)}},Circ:function(){return function(i){return 1-Math.sqrt(1-i*i)}},Back:function(){return function(i){return i*i*(3*i-2)}},Bounce:function(){return function(i){for(var r,s=4;i<((r=Math.pow(2,--s))-1)/11;);return 1/Math.pow(4,3-s)-7.5625*Math.pow((r*3-2)/22-i,2)}},Elastic:function(i,r){i===void 0&&(i=1),r===void 0&&(r=.5);var s=ui(i,1,10),o=ui(r,.1,2);return function(a){return a===0||a===1?a:-s*Math.pow(2,10*(a-1))*Math.sin((a-1-o/(Math.PI*2)*Math.asin(1/s))*(Math.PI*2)/o)}}},t=["Quad","Cubic","Quart","Quint","Expo"];return t.forEach(function(i,r){e[i]=function(){return function(s){return Math.pow(s,r+2)}}}),Object.keys(e).forEach(function(i){var r=e[i];n["easeIn"+i]=r,n["easeOut"+i]=function(s,o){return function(a){return 1-r(s,o)(1-a)}},n["easeInOut"+i]=function(s,o){return function(a){return a<.5?r(s,o)(a*2)/2:1-r(s,o)(a*-2+2)/2}},n["easeOutIn"+i]=function(s,o){return function(a){return a<.5?(1-r(s,o)(1-a*2))/2:(r(s,o)(a*2-1)+1)/2}}}),n}();function Pd(n,e){if(we.fnc(n))return n;var t=n.split("(")[0],i=Ay[t],r=wy(n);switch(t){case"spring":return Sy(n,e);case"cubicBezier":return Ld(t2,r);case"steps":return Ld(e2,r);default:return Ld(i,r)}}function Ey(n){try{var e=document.querySelectorAll(n);return e}catch{return}}function nu(n,e){for(var t=n.length,i=arguments.length>=2?arguments[1]:void 0,r=[],s=0;s<t;s++)if(s in n){var o=n[s];e.call(i,o,s,n)&&r.push(o)}return r}function iu(n){return n.reduce(function(e,t){return e.concat(we.arr(t)?iu(t):t)},[])}function Ly(n){return we.arr(n)?n:(we.str(n)&&(n=Ey(n)||n),n instanceof NodeList||n instanceof HTMLCollection?[].slice.call(n):[n])}function Rd(n,e){return n.some(function(t){return t===e})}function Cd(n){var e={};for(var t in n)e[t]=n[t];return e}function Fd(n,e){var t=Cd(n);for(var i in n)t[i]=e.hasOwnProperty(i)?e[i]:n[i];return t}function ru(n,e){var t=Cd(n);for(var i in e)t[i]=we.und(n[i])?e[i]:n[i];return t}function n2(n){var e=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(n);return e?"rgba("+e[1]+",1)":n}function i2(n){var e=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,t=n.replace(e,function(a,l,c,f){return l+l+c+c+f+f}),i=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t),r=parseInt(i[1],16),s=parseInt(i[2],16),o=parseInt(i[3],16);return"rgba("+r+","+s+","+o+",1)"}function r2(n){var e=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(n)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(n),t=parseInt(e[1],10)/360,i=parseInt(e[2],10)/100,r=parseInt(e[3],10)/100,s=e[4]||1;function o(h,d,m){return m<0&&(m+=1),m>1&&(m-=1),m<1/6?h+(d-h)*6*m:m<1/2?d:m<2/3?h+(d-h)*(2/3-m)*6:h}var a,l,c;if(i==0)a=l=c=r;else{var f=r<.5?r*(1+i):r+i-r*i,u=2*r-f;a=o(u,f,t+1/3),l=o(u,f,t),c=o(u,f,t-1/3)}return"rgba("+a*255+","+l*255+","+c*255+","+s+")"}function s2(n){if(we.rgb(n))return n2(n);if(we.hex(n))return i2(n);if(we.hsl(n))return r2(n)}function Ri(n){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(n);if(e)return e[1]}function o2(n){if(Ha(n,"translate")||n==="perspective")return"px";if(Ha(n,"rotate")||Ha(n,"skew"))return"deg"}function Id(n,e){return we.fnc(n)?n(e.target,e.id,e.total):n}function fi(n,e){return n.getAttribute(e)}function Nd(n,e,t){var i=Ri(e);if(Rd([t,"deg","rad","turn"],i))return e;var r=tu.CSS[e+t];if(!we.und(r))return r;var s=100,o=document.createElement(n.tagName),a=n.parentNode&&n.parentNode!==document?n.parentNode:document.body;a.appendChild(o),o.style.position="absolute",o.style.width=s+t;var l=s/o.offsetWidth;a.removeChild(o);var c=l*parseFloat(e);return tu.CSS[e+t]=c,c}function Py(n,e,t){if(e in n.style){var i=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),r=n.style[e]||getComputedStyle(n).getPropertyValue(i)||"0";return t?Nd(n,r,t):r}}function Dd(n,e){if(we.dom(n)&&!we.inp(n)&&(!we.nil(fi(n,e))||we.svg(n)&&n[e]))return"attribute";if(we.dom(n)&&Rd(JI,e))return"transform";if(we.dom(n)&&e!=="transform"&&Py(n,e))return"css";if(n[e]!=null)return"object"}function Ry(n){if(!!we.dom(n)){for(var e=n.style.transform||"",t=/(\w+)\(([^)]*)\)/g,i=new Map,r;r=t.exec(e);)i.set(r[1],r[2]);return i}}function a2(n,e,t,i){var r=Ha(e,"scale")?1:0+o2(e),s=Ry(n).get(e)||r;return t&&(t.transforms.list.set(e,s),t.transforms.last=e),i?Nd(n,s,i):s}function Od(n,e,t,i){switch(Dd(n,e)){case"transform":return a2(n,e,i,t);case"css":return Py(n,e,t);case"attribute":return fi(n,e);default:return n[e]||0}}function Ud(n,e){var t=/^(\*=|\+=|-=)/.exec(n);if(!t)return n;var i=Ri(n)||0,r=parseFloat(e),s=parseFloat(n.replace(t[0],""));switch(t[0][0]){case"+":return r+s+i;case"-":return r-s+i;case"*":return r*s+i}}function Cy(n,e){if(we.col(n))return s2(n);if(/\s/g.test(n))return n;var t=Ri(n),i=t?n.substr(0,n.length-t.length):n;return e?i+e:i}function Bd(n,e){return Math.sqrt(Math.pow(e.x-n.x,2)+Math.pow(e.y-n.y,2))}function l2(n){return Math.PI*2*fi(n,"r")}function c2(n){return fi(n,"width")*2+fi(n,"height")*2}function u2(n){return Bd({x:fi(n,"x1"),y:fi(n,"y1")},{x:fi(n,"x2"),y:fi(n,"y2")})}function Fy(n){for(var e=n.points,t=0,i,r=0;r<e.numberOfItems;r++){var s=e.getItem(r);r>0&&(t+=Bd(i,s)),i=s}return t}function f2(n){var e=n.points;return Fy(n)+Bd(e.getItem(e.numberOfItems-1),e.getItem(0))}function Iy(n){if(n.getTotalLength)return n.getTotalLength();switch(n.tagName.toLowerCase()){case"circle":return l2(n);case"rect":return c2(n);case"line":return u2(n);case"polyline":return Fy(n);case"polygon":return f2(n)}}function h2(n){var e=Iy(n);return n.setAttribute("stroke-dasharray",e),e}function d2(n){for(var e=n.parentNode;we.svg(e)&&we.svg(e.parentNode);)e=e.parentNode;return e}function Ny(n,e){var t=e||{},i=t.el||d2(n),r=i.getBoundingClientRect(),s=fi(i,"viewBox"),o=r.width,a=r.height,l=t.viewBox||(s?s.split(" "):[0,0,o,a]);return{el:i,viewBox:l,x:l[0]/1,y:l[1]/1,w:o,h:a,vW:l[2],vH:l[3]}}function p2(n,e){var t=we.str(n)?Ey(n)[0]:n,i=e||100;return function(r){return{property:r,el:t,svg:Ny(t),totalLength:Iy(t)*(i/100)}}}function m2(n,e,t){function i(f){f===void 0&&(f=0);var u=e+f>=1?e+f:0;return n.el.getPointAtLength(u)}var r=Ny(n.el,n.svg),s=i(),o=i(-1),a=i(1),l=t?1:r.w/r.vW,c=t?1:r.h/r.vH;switch(n.property){case"x":return(s.x-r.x)*l;case"y":return(s.y-r.y)*c;case"angle":return Math.atan2(a.y-o.y,a.x-o.x)*180/Math.PI}}function Dy(n,e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,i=Cy(we.pth(n)?n.totalLength:n,e)+"";return{original:i,numbers:i.match(t)?i.match(t).map(Number):[0],strings:we.str(n)||e?i.split(t):[]}}function kd(n){var e=n?iu(we.arr(n)?n.map(Ly):Ly(n)):[];return nu(e,function(t,i,r){return r.indexOf(t)===i})}function Oy(n){var e=kd(n);return e.map(function(t,i){return{target:t,id:i,total:e.length,transforms:{list:Ry(t)}}})}function g2(n,e){var t=Cd(e);if(/^spring/.test(t.easing)&&(t.duration=Sy(t.easing)),we.arr(n)){var i=n.length,r=i===2&&!we.obj(n[0]);r?n={value:n}:we.fnc(e.duration)||(t.duration=e.duration/i)}var s=we.arr(n)?n:[n];return s.map(function(o,a){var l=we.obj(o)&&!we.pth(o)?o:{value:o};return we.und(l.delay)&&(l.delay=a?0:e.delay),we.und(l.endDelay)&&(l.endDelay=a===s.length-1?e.endDelay:0),l}).map(function(o){return ru(o,t)})}function _2(n){for(var e=nu(iu(n.map(function(s){return Object.keys(s)})),function(s){return we.key(s)}).reduce(function(s,o){return s.indexOf(o)<0&&s.push(o),s},[]),t={},i=function(s){var o=e[s];t[o]=n.map(function(a){var l={};for(var c in a)we.key(c)?c==o&&(l.value=a[c]):l[c]=a[c];return l})},r=0;r<e.length;r++)i(r);return t}function v2(n,e){var t=[],i=e.keyframes;i&&(e=ru(_2(i),e));for(var r in e)we.key(r)&&t.push({name:r,tweens:g2(e[r],n)});return t}function x2(n,e){var t={};for(var i in n){var r=Id(n[i],e);we.arr(r)&&(r=r.map(function(s){return Id(s,e)}),r.length===1&&(r=r[0])),t[i]=r}return t.duration=parseFloat(t.duration),t.delay=parseFloat(t.delay),t}function y2(n,e){var t;return n.tweens.map(function(i){var r=x2(i,e),s=r.value,o=we.arr(s)?s[1]:s,a=Ri(o),l=Od(e.target,n.name,a,e),c=t?t.to.original:l,f=we.arr(s)?s[0]:c,u=Ri(f)||Ri(l),h=a||u;return we.und(o)&&(o=c),r.from=Dy(f,h),r.to=Dy(Ud(o,f),h),r.start=t?t.end:0,r.end=r.start+r.delay+r.duration+r.endDelay,r.easing=Pd(r.easing,r.duration),r.isPath=we.pth(s),r.isPathTargetInsideSVG=r.isPath&&we.svg(e.target),r.isColor=we.col(r.from.original),r.isColor&&(r.round=1),t=r,r})}var Uy={css:function(n,e,t){return n.style[e]=t},attribute:function(n,e,t){return n.setAttribute(e,t)},object:function(n,e,t){return n[e]=t},transform:function(n,e,t,i,r){if(i.list.set(e,t),e===i.last||r){var s="";i.list.forEach(function(o,a){s+=a+"("+o+") "}),n.style.transform=s}}};function By(n,e){var t=Oy(n);t.forEach(function(i){for(var r in e){var s=Id(e[r],i),o=i.target,a=Ri(s),l=Od(o,r,a,i),c=a||Ri(l),f=Ud(Cy(s,c),l),u=Dd(o,r);Uy[u](o,r,f,i.transforms,!0)}})}function b2(n,e){var t=Dd(n.target,e.name);if(t){var i=y2(e,n),r=i[i.length-1];return{type:t,property:e.name,animatable:n,tweens:i,duration:r.end,delay:i[0].delay,endDelay:r.endDelay}}}function T2(n,e){return nu(iu(n.map(function(t){return e.map(function(i){return b2(t,i)})})),function(t){return!we.und(t)})}function ky(n,e){var t=n.length,i=function(s){return s.timelineOffset?s.timelineOffset:0},r={};return r.duration=t?Math.max.apply(Math,n.map(function(s){return i(s)+s.duration})):e.duration,r.delay=t?Math.min.apply(Math,n.map(function(s){return i(s)+s.delay})):e.delay,r.endDelay=t?r.duration-Math.max.apply(Math,n.map(function(s){return i(s)+s.duration-s.endDelay})):e.endDelay,r}var Hy=0;function M2(n){var e=Fd(My,n),t=Fd(Ed,n),i=v2(t,n),r=Oy(n.targets),s=T2(r,i),o=ky(s,t),a=Hy;return Hy++,ru(e,{id:a,children:[],animatables:r,animations:s,duration:o.duration,delay:o.delay,endDelay:o.endDelay})}var Wn=[],zy=function(){var n;function e(){!n&&(!Vy()||!nt.suspendWhenDocumentHidden)&&Wn.length>0&&(n=requestAnimationFrame(t))}function t(r){for(var s=Wn.length,o=0;o<s;){var a=Wn[o];a.paused?(Wn.splice(o,1),s--):(a.tick(r),o++)}n=o>0?requestAnimationFrame(t):void 0}function i(){!nt.suspendWhenDocumentHidden||(Vy()?n=cancelAnimationFrame(n):(Wn.forEach(function(r){return r._onDocumentVisibility()}),zy()))}return typeof document!="undefined"&&document.addEventListener("visibilitychange",i),e}();function Vy(){return!!document&&document.hidden}function nt(n){n===void 0&&(n={});var e=0,t=0,i=0,r,s=0,o=null;function a(g){var x=window.Promise&&new Promise(function(b){return o=b});return g.finished=x,x}var l=M2(n);a(l);function c(){var g=l.direction;g!=="alternate"&&(l.direction=g!=="normal"?"normal":"reverse"),l.reversed=!l.reversed,r.forEach(function(x){return x.reversed=l.reversed})}function f(g){return l.reversed?l.duration-g:g}function u(){e=0,t=f(l.currentTime)*(1/nt.speed)}function h(g,x){x&&x.seek(g-x.timelineOffset)}function d(g){if(l.reversePlayback)for(var b=s;b--;)h(g,r[b]);else for(var x=0;x<s;x++)h(g,r[x])}function m(g){for(var x=0,b=l.animations,T=b.length;x<T;){var S=b[x],y=S.animatable,E=S.tweens,N=E.length-1,F=E[N];N&&(F=nu(E,function(Q){return g<Q.end})[0]||F);for(var C=ui(g-F.start-F.delay,0,F.duration)/F.duration,V=isNaN(C)?1:F.easing(C),O=F.to.strings,H=F.round,$=[],Y=F.to.numbers.length,q=void 0,te=0;te<Y;te++){var pe=void 0,Te=F.to.numbers[te],de=F.from.numbers[te]||0;F.isPath?pe=m2(F.value,V*Te,F.isPathTargetInsideSVG):pe=de+V*(Te-de),H&&(F.isColor&&te>2||(pe=Math.round(pe*H)/H)),$.push(pe)}var Me=O.length;if(!Me)q=$[0];else{q=O[0];for(var ne=0;ne<Me;ne++){O[ne];var fe=O[ne+1],ve=$[ne];isNaN(ve)||(fe?q+=ve+fe:q+=ve+" ")}}Uy[S.type](y.target,S.property,q,y.transforms),S.currentValue=q,x++}}function _(g){l[g]&&!l.passThrough&&l[g](l)}function v(){l.remaining&&l.remaining!==!0&&l.remaining--}function p(g){var x=l.duration,b=l.delay,T=x-l.endDelay,S=f(g);l.progress=ui(S/x*100,0,100),l.reversePlayback=S<l.currentTime,r&&d(S),!l.began&&l.currentTime>0&&(l.began=!0,_("begin")),!l.loopBegan&&l.currentTime>0&&(l.loopBegan=!0,_("loopBegin")),S<=b&&l.currentTime!==0&&m(0),(S>=T&&l.currentTime!==x||!x)&&m(x),S>b&&S<T?(l.changeBegan||(l.changeBegan=!0,l.changeCompleted=!1,_("changeBegin")),_("change"),m(S)):l.changeBegan&&(l.changeCompleted=!0,l.changeBegan=!1,_("changeComplete")),l.currentTime=ui(S,0,x),l.began&&_("update"),g>=x&&(t=0,v(),l.remaining?(e=i,_("loopComplete"),l.loopBegan=!1,l.direction==="alternate"&&c()):(l.paused=!0,l.completed||(l.completed=!0,_("loopComplete"),_("complete"),!l.passThrough&&"Promise"in window&&(o(),a(l)))))}return l.reset=function(){var g=l.direction;l.passThrough=!1,l.currentTime=0,l.progress=0,l.paused=!0,l.began=!1,l.loopBegan=!1,l.changeBegan=!1,l.completed=!1,l.changeCompleted=!1,l.reversePlayback=!1,l.reversed=g==="reverse",l.remaining=l.loop,r=l.children,s=r.length;for(var x=s;x--;)l.children[x].reset();(l.reversed&&l.loop!==!0||g==="alternate"&&l.loop===1)&&l.remaining++,m(l.reversed?l.duration:0)},l._onDocumentVisibility=u,l.set=function(g,x){return By(g,x),l},l.tick=function(g){i=g,e||(e=i),p((i+(t-e))*nt.speed)},l.seek=function(g){p(f(g))},l.pause=function(){l.paused=!0,u()},l.play=function(){!l.paused||(l.completed&&l.reset(),l.paused=!1,Wn.push(l),u(),zy())},l.reverse=function(){c(),l.completed=!l.reversed,u()},l.restart=function(){l.reset(),l.play()},l.remove=function(g){var x=kd(g);Wy(x,l)},l.reset(),l.autoplay&&l.play(),l}function Gy(n,e){for(var t=e.length;t--;)Rd(n,e[t].animatable.target)&&e.splice(t,1)}function Wy(n,e){var t=e.animations,i=e.children;Gy(n,t);for(var r=i.length;r--;){var s=i[r],o=s.animations;Gy(n,o),!o.length&&!s.children.length&&i.splice(r,1)}!t.length&&!i.length&&e.pause()}function w2(n){for(var e=kd(n),t=Wn.length;t--;){var i=Wn[t];Wy(e,i)}}function S2(n,e){e===void 0&&(e={});var t=e.direction||"normal",i=e.easing?Pd(e.easing):null,r=e.grid,s=e.axis,o=e.from||0,a=o==="first",l=o==="center",c=o==="last",f=we.arr(n),u=parseFloat(f?n[0]:n),h=f?parseFloat(n[1]):0,d=Ri(f?n[1]:n)||0,m=e.start||0+(f?u:0),_=[],v=0;return function(p,g,x){if(a&&(o=0),l&&(o=(x-1)/2),c&&(o=x-1),!_.length){for(var b=0;b<x;b++){if(!r)_.push(Math.abs(o-b));else{var T=l?(r[0]-1)/2:o%r[0],S=l?(r[1]-1)/2:Math.floor(o/r[0]),y=b%r[0],E=Math.floor(b/r[0]),N=T-y,F=S-E,C=Math.sqrt(N*N+F*F);s==="x"&&(C=-N),s==="y"&&(C=-F),_.push(C)}v=Math.max.apply(Math,_)}i&&(_=_.map(function(O){return i(O/v)*v})),t==="reverse"&&(_=_.map(function(O){return s?O<0?O*-1:-O:Math.abs(v-O)}))}var V=f?(h-u)/v:u;return m+V*(Math.round(_[g]*100)/100)+d}}function A2(n){n===void 0&&(n={});var e=nt(n);return e.duration=0,e.add=function(t,i){var r=Wn.indexOf(e),s=e.children;r>-1&&Wn.splice(r,1);function o(h){h.passThrough=!0}for(var a=0;a<s.length;a++)o(s[a]);var l=ru(t,Fd(Ed,n));l.targets=l.targets||n.targets;var c=e.duration;l.autoplay=!1,l.direction=e.direction,l.timelineOffset=we.und(i)?c:Ud(i,c),o(e),e.seek(l.timelineOffset);var f=nt(l);o(f),s.push(f);var u=ky(s,n);return e.delay=u.delay,e.endDelay=u.endDelay,e.duration=u.duration,e.seek(0),e.reset(),e.autoplay&&e.play(),e},e}nt.version="3.2.1";nt.speed=1;nt.suspendWhenDocumentHidden=!0;nt.running=Wn;nt.remove=w2;nt.get=Od;nt.set=By;nt.convertPx=Nd;nt.path=p2;nt.setDashoffset=h2;nt.stagger=S2;nt.timeline=A2;nt.easing=Pd;nt.penner=Ay;nt.random=function(n,e){return Math.floor(Math.random()*(e-n+1))+n};var E2={apiKey:"AIzaSyDTVxDJj7rqG9L-Clvba2Tao9B0hkcxjcE",authDomain:"milchchan.firebaseapp.com",databaseURL:"https://milchchan.firebaseio.com",projectId:"milchchan",storageBucket:"milchchan.appspot.com",messagingSenderId:"355698971889",appId:"1:355698971889:web:e3653c5c31bd7289cd4550",measurementId:"G-3998FJYNWX"};firebase.initializeApp(E2);firebase.analytics();const Xy=decodeURIComponent(window.location.hash.substring(1))==="debug",Jt="bot",Yy=Jt+"/feed";let Wt=firebase.database(),Hd=firebase.storage();const pt=new Je({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});pt.setClearColor(16777215,0);pt.toneMappingExposure=1;pt.toneMapping=C_;pt.outputEncoding=Rn;const L2=60,P2=5,hi=new Kt(L2,pt.domElement.width/pt.domElement.height,.1,1e3);hi.position.set(0,1.5,P2);const Ut=new KF(hi,pt.domElement);Ut.enabled=!1;Ut.enableKeys=!1;Ut.screenSpacePanning=!1;Ut.enableDamping=!0;Ut.minPolarAngle=30*Math.PI/180;Ut.maxPolarAngle=150*Math.PI/180;Ut.minAzimuthAngle=-45*Math.PI/180;Ut.maxAzimuthAngle=45*Math.PI/180;Ut.minDistance=.75;Ut.maxDistance=5;Ut.target.set(0,2.5,1);Ut.update();const On=new Fc,zd=new ud(16777215),R2=new Ix(14154751,8295592,.7);zd.intensity=.9;zd.position.set(0,10,10).normalize();On.add(zd);On.add(R2);const lt=new We;hi.add(lt);const Xn=new eI(pt);var ho=new ao(new ie(pt.domElement.width,pt.domElement.height),1.5,.4,.85),Vd=new ai(nI),C2=new ai(iI);new ai(rI);var qy=new ai(Na),Gd=new ai(sI),jy=new ai(oI),Wd=new ai(aI),Qy=new ai(lI);ho.renderToScreen=!0;ho.threshold=.5;ho.strength=.25;ho.radius=0;Vd.uniforms.hue.value=-.025;Vd.uniforms.saturation.value=.25;C2.uniforms.contrast.value=-.1;jy.uniforms.mulRGB.value=new L(.95,.95,.95);jy.uniforms.powRGB.value=new L(1,1,1);Wd.uniforms.amount.value=1e-4;Wd.uniforms.angle.value=0;Gd.uniforms.darkness.value=.25;Gd.uniforms.offset.value=0;qy.renderToScreen=!0;Qy.uniforms.resolution.value.set(1/(pt.domElement.width*window.devicePixelRatio),1/(pt.domElement.height*window.devicePixelRatio));Xn.setSize(pt.domElement.width,pt.domElement.height);Xn.setPixelRatio(window.devicePixelRatio);Xn.addPass(new tI(On,hi));Xn.addPass(ho);Xn.addPass(Vd);Xn.addPass(Wd);Xn.addPass(Gd);Xn.addPass(qy);const Ci=new ZI;Ci.domElement.style.position="fixed";Ci.domElement.style.top="auto";Ci.domElement.style.bottom="0";Ci.domElement.style.left="auto";Ci.domElement.style.right="0";Xy||Ci.domElement.classList.add("is-hidden");const F2=new Xx,Fi=new bF,dn=new ie;let et=null,Yn=[],po=0;const $y=2;let mo=0;const I2=5;let za=0;const N2=10;let ct=null,Xt=null,gt=null,Ce=null,su=0;window.addEventListener("load",n=>{"serviceWorker"in navigator&&(navigator.serviceWorker.register("sw.js").then(t=>{t.onupdatefound=function(){t.update()}}).catch(t=>{console.error(t.code,t.message)}),navigator.serviceWorker.addEventListener("message",t=>{navigator.serviceWorker.controller!==null&&"command"in t.data&&t.data.command==="caches"&&navigator.serviceWorker.controller.postMessage({command:"clear",caches:t.data.caches})}));const e=xg({data(){return{isDebug:Xy,isDarkMode:!1,isMuted:!0,isLoading:!1,isRevealed:!1,isOverlayed:!1,isUpdating:!1,isBlinded:!1,isPopup:!1,isExpanded:!1,isLearning:!1,isAnimating:!1,isHangingOn:!1,isSubmitting:!1,isStared:!1,mode:null,feedQueue:[],sequenceQueue:[],progress:null,user:null,input:"",animatedInputLength:0,maxInputLength:100,inputHasError:!1,messages:[],maxMessages:10,word:null,words:[],tags:[],maxTags:10,scrollTimeoutID:void 0,tickIntervalID:void 0,stars:-1,animatedStars:0,screenshot:null,notifications:[],notificationHeight:0,animatedNotificationHeight:0,recentImages:[],backgroundImagesQueue:[],backgroundImages:[],preloadImages:[],isUploading:!1,animations:null,currentAnimations:[],blendShapeAnimations:[],insetTop:0,insetBottom:0,text:[],popupTextHeight:0,animatedPopupTextHeight:0,tickerWidth:0,animatedTickerWidth:0,message:null,states:{},character:null,wordDictionary:{},reverseWordDictionary:{},attributes:["\u540D\u524D","\u6240\u5C5E","\u6642\u9593","\u5834\u6240","\u3059\u308B\u4E8B","\u751F\u304D\u7269","\u98DF\u3079\u7269","\u98F2\u307F\u7269","\u805E\u304F\u3082\u306E","\u898B\u308B\u3082\u306E","\u8AAD\u3080\u3082\u306E","\u4F7F\u3046\u7269","\u8EAB\u306B\u3064\u3051\u308B\u3082\u306E","\u4E57\u308A\u7269","\u90E8\u4F4D","\u75C5\u6C17"]}},watch:{isMuted(t){try{localStorage.setItem("character",JSON.stringify({mute:t}))}catch{localStorage.removeItem("character")}},words:{handler:()=>{e.$nextTick(()=>{for(const t of document.body.querySelectorAll(".container>.wrap>.frame .clip")){let i=0;for(const r of t.querySelectorAll(":scope .ticker-wrap .ticker .item"))i+=r.getBoundingClientRect().width;i>0&&(e.tickerWidth=Math.min(i/2,document.body.querySelector(".container>.wrap>.frame .level").getBoundingClientRect().width),t.querySelector(":scope .ticker-wrap .ticker").style.width=i+"px")}})},deep:!0},tickerWidth(t){const i=this,r={width:this.animatedTickerWidth};nt({targets:r,width:t,round:1,duration:500,easing:"linear",update:()=>{i.animatedTickerWidth=r.width}})},backgroundImages:{handler:()=>{e.$nextTick(()=>{const t=document.body.querySelectorAll("#app>.background>div");if(t.length>1){const i=t.length-1,r=15;let s=0,o=null;for(const a of t){const l=[];for(let f=0;f<t.length;f++)f===s?l.push({visibility:"visible"}):l.push({visibility:"hidden"});const c=a.animate(l,{fill:"forwards",easing:"steps("+i+")",duration:1e3/r*t.length,iterations:1/0});o===null?o=c.startTime:c.startTime=o,s++}}})},deep:!0},text:{handler:()=>{e.$nextTick(()=>{e.isPopup&&(e.popupTextHeight=e.$refs.popupText.getBoundingClientRect().height)})},deep:!0},popupTextHeight(t){const i={height:this.animatedPopupTextHeight};nt({targets:i,height:t,round:1,duration:500,easing:"linear",update:()=>{this.animatedPopupTextHeight=i.height}})},notifications:{handler:()=>{e.$nextTick(()=>{e.notificationHeight=e.$refs.notifications.getBoundingClientRect().height})},deep:!0},notificationHeight(t){const i={height:this.animatedNotificationHeight};nt({targets:i,height:t,round:1,duration:500,easing:"linear",update:()=>{this.animatedNotificationHeight=i.height}})},stars(t){const i={count:this.animatedStars};nt({targets:i,count:t,round:1,duration:500,easing:"linear",update:()=>{this.animatedStars=i.count}})},input:{handler:()=>{e.$nextTick(()=>{const t={count:e.animatedInputLength};nt({targets:t,count:e.input.length,round:1,duration:500,easing:"linear",update:()=>{e.animatedInputLength=t.count}})})},deep:!0}},methods:{signIn:function(t){if(t===firebase.auth.GoogleAuthProvider.PROVIDER_ID)firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider).then(i=>{var r=i.credential;for(const s of i.user.providerData){firebase.auth().currentUser.updateProfile({displayName:s.displayName,photoURL:s.photoURL}).catch(function(o){console.error(o.code,o.message)});break}try{localStorage.setItem("credential",JSON.stringify({providerId:r.providerId,accessToken:r.accessToken,idToken:r.idToken}))}catch{localStorage.removeItem("credential")}}).catch(i=>{console.error(i.code,i.message)});else if(t===firebase.auth.FacebookAuthProvider.PROVIDER_ID){const i=new firebase.auth.FacebookAuthProvider;i.addScope("public_profile"),firebase.auth().signInWithPopup(i).then(r=>{var s=r.credential;for(const o of r.user.providerData){firebase.auth().currentUser.updateProfile({displayName:o.displayName,photoURL:o.photoURL}).catch(function(a){console.error(a.code,a.message)});break}try{localStorage.setItem("credential",JSON.stringify({providerId:s.providerId,accessToken:s.accessToken}))}catch{localStorage.removeItem("credential")}}).catch(r=>{console.error(r.code,r.message)})}else t===firebase.auth.TwitterAuthProvider.PROVIDER_ID&&firebase.auth().signInWithPopup(new firebase.auth.TwitterAuthProvider).then(i=>{var r=i.credential;for(const s of i.user.providerData){const o=s.photoURL.replace(/_normal\.jpg$/,".jpg");firebase.auth().currentUser.updateProfile({displayName:s.displayName,photoURL:o}).catch(function(a){console.error(a.code,a.message)});break}try{localStorage.setItem("credential",JSON.stringify({providerId:r.providerId,accessToken:r.accessToken,secret:r.secret}))}catch{localStorage.removeItem("credential")}}).catch(i=>{console.error(i.code,i.message)})},signOut:function(t){firebase.auth().signOut().then(()=>{localStorage.removeItem("credential"),"serviceWorker"in navigator&&navigator.serviceWorker.controller!==null&&navigator.serviceWorker.controller.postMessage({command:"caches"})}).catch(i=>{console.error(i.code,i.message)})},refresh:function(t){this.isBlinded=!0,za=0},send:async function(t){if(this.isDebug)if(this.input.length>0){let i=[],r=[];for(const s of this.input.split(/\s/))this.backgroundImages.some(o=>o.id===s)?i.push(s):r.push(s);if(i.length>0&&r.length>0){for(const s of i)Wt.ref(Jt+"/images/"+s).transaction(function(o){return o.tags=r,o});this.isLearning=!1}else this.input.length<=this.maxInputLength&&(this.learn({name:this.input}),this.input="",this.isLearning=!1)}else for(const i of this.backgroundImages){this.input=i.id;break}else if(this.input.length>0&&this.input.length<=this.maxInputLength){this.learn({name:this.input}),this.input="",this.isLearning=!1;return}else this.shake(this.$refs.input)},change:function(t){this.input.length<=this.maxInputLength?this.inputHasError=!1:this.inputHasError=!0},upload:async function(t){function i(){let l="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".split("");for(let c=0,f=l.length;c<f;c++)switch(l[c]){case"x":l[c]=Math.floor(Math.random()*16).toString(16);break;case"y":l[c]=(Math.floor(Math.random()*4)+8).toString(16);break}return l.join("")}const r=this,s=Hd.ref(),o=[],a=[];for(const l of t.target.files)o.push(l);this.isUploading=!0;for(const l of o.sort((c,f)=>c.name>f.name?1:c.name<f.name?-1:0)){const c=s.child(`images/${i()}`).put(l);try{await new Promise(function(f,u){c.on("state_changed",function(h){r.progress=h.bytesTransferred/h.totalBytes/o.length+a.length/o.length},function(h){u(h)},function(){f()})})}catch(f){this.notify({text:f.message,accent:this.character.accent,image:this.character.image}),console.error(f)}a.push(c.snapshot.ref.fullPath)}Wt.ref(Jt+"/images").push({paths:a,timestamp:Math.floor(new Date/1e3)}),this.progress=null,this.isUploading=!1},check:function(t){for(const i of this.word.attributes)i===t.target.dataset.attribute&&(i.value=t.target.checked)},share:async function(t){const i=this,r=Math.floor(new Date/1e3);t.name in this.wordDictionary&&delete this.wordDictionary[t.name],Object.keys(this.reverseWordDictionary).forEach(s=>{this.reverseWordDictionary[s].words.some(o=>o===t.name)&&delete this.reverseWordDictionary[s]}),this.isSubmitting=!0,Wt.ref(Jt+"/words/"+t.name).transaction(function(s){if(s){let o=!1;for(const a of t.attributes)if(a.name in s.attributes){if(s.attributes[a.name]>0){if(!a.value){o=!0;break}}else if(a.value){o=!0;break}}else{o=!0;break}if(o){let a=!0;const l={attributes:{}};for(const c of t.attributes)c.value?(c.name in s.attributes&&s.attributes[c.name]>0?l.attributes[c.name]=s.attributes[c.name]:l.attributes[c.name]=r-1,a=!1):l.attributes[c.name]=0;return a?null:(l.timestamp=r,l)}else return}else{s={attributes:{},timestamp:r};for(const o of t.attributes)o.value?s.attributes[o.name]=r:s.attributes[o.name]=0}return s},function(s,o,a){if(o){if(a.exists()){const c=a.val();let f=[];for(const u in c.attributes)typeof c.attributes[u]=="number"&&c.attributes[u]>0&&i.attributes.includes(u)&&f.push(c.attributes[u]);if(f.length===1&&f[0]===c.timestamp){let u=function(h){var d=arguments;return h.replace(/\{(\d)\}/g,function(m,_){return d[parseInt(_)+1]})};var l=u;Wt.ref(Jt+"/stars").transaction(function(h){return(h||0)+1});for(const h of i.prepare(i.character.sequences.filter(d=>d.name==="Learned")))h.type==="Message"&&i.notify({text:u(h.text,t.name),accent:i.character.accent,image:i.character.image});i.isStared=!0,window.setTimeout(()=>{i.isStared=!1},3e3),i.isMuted||i.$refs.twinkle.play()}}else Wt.ref(Jt+"/stars").transaction(function(c){if(c)return c-1});i.word=null}else s&&(i.notify({text:s.message,accent:i.character.accent,image:i.character.image}),console.error(s));i.isSubmitting=!1})},learn:async function(t){function i(o){var a=arguments;return o.replace(/\{(\d)\}/g,function(l,c){return a[parseInt(c)+1]})}const r=[],s=[];if("attributes"in t)for(const o of this.attributes)o in t.attributes&&(t.attributes[o]>0?s.push({name:o,value:!0}):s.push({name:o,value:!1}));else{const o=await Wt.ref(Jt+"/words/"+t.name).once("value");if(o.exists()){const a=o.val();for(const l of this.attributes)l in a.attributes&&(a.attributes[l]>0?s.push({name:l,value:!0}):s.push({name:l,value:!1}))}else for(const a of this.attributes)s.push({name:a,value:!1})}this.word={name:t.name,attributes:s};for(const o of this.prepare(this.character.sequences.filter(a=>a.name==="Learn")))o.type==="Message"?r.push({type:o.type,speed:o.speed,duration:o.duration,text:i(o.text,t.name)}):r.push(o);r.length>0&&this.sequenceQueue.push(r)},activate:async function(t=[]){mo=za=0,await this.talk(t)||this.talk()},talk:async function(t=[]){let i=this.character.sequences.filter(o=>o.name==="Activate"),r=[];if(this.isLoading=!0,t.length>0){let o=function(d){function m(p,g){return p=Math.ceil(p),g=Math.floor(g),Math.floor(Math.random()*(g-p))+p}let _=[].concat(d),v=d.length;for(;v>1;){const p=m(0,v);v--;const g=_[v];_[v]=_[p],_[p]=g}return _};var s=o;const a=Math.floor(new Date/1e3),l=60*60,c=Object.assign({},this.states),f=new TinySegmenter,u=[],h=[];for(const d of t){if(!(d in this.wordDictionary)||a-this.wordDictionary[d].timestamp>=l){const m=await Wt.ref(Jt+"/words/"+d).once("value");if(this.wordDictionary[d]={attributes:[],timestamp:a},m.exists()){const _=m.val();for(let v in _.attributes)typeof _.attributes[v]=="number"&&_.attributes[v]>0&&this.attributes.includes(v)&&this.wordDictionary[d].attributes.push(v)}}for(const m of this.wordDictionary[d].attributes)u.includes(m)||u.push(m)}for(const d of o(i)){const m=this.prepare([d]);let _=!1;for(const v of m){if(v.type=="Message"){for(const p of Array.isArray(v.text)?v.text:f.segment(v.text))if(Array.isArray(p)){for(const g of m)if(g.type=="Message"){const x=await this.generate(g.text,t);if(x===null){_=!0;break}else{let b,T;[b,T]=x,r.push({type:g.type,speed:g.speed,duration:g.duration,text:b})}}else r.push(g);if(_)break;return r.length>0&&this.sequenceQueue.push(r),this.isLoading=!1,!0}else if(p.length>1&&!h.includes(p)){if(!(p in this.wordDictionary)||a-this.wordDictionary[p].timestamp>=l){const g=await Wt.ref(Jt+"/words/"+p).once("value");if(this.wordDictionary[p]={attributes:[],timestamp:a},g.exists()){const x=g.val();for(const b in x.attributes)typeof x.attributes[b]=="number"&&x.attributes[b]>0&&this.attributes.includes(b)&&this.wordDictionary[p].attributes.push(b)}}for(const g of this.wordDictionary[p].attributes)if(u.includes(g)){for(const x of m)if(x.type=="Message"){const b=await this.generate(x.text,t);if(b===null){_=!0;break}else{let T,S;[T,S]=b,r.push({type:x.type,speed:x.speed,duration:x.duration,text:T})}}else r.push(x);if(_)break;return r.length>0&&this.sequenceQueue.push(r),this.isLoading=!1,!0}h.push(p)}}if(_){r.splice(0);break}}this.states=c}return this.isLoading=!1,!1}for(const o of this.prepare(i))if(o.type==="Message"){const a=await this.generate(o.text);if(a===null)return this.isLoading=!1,!1;{let l,c;[l,c]=a,r.push({type:o.type,speed:o.speed,duration:o.duration,text:l})}}else r.push(o);return r.length>0?(this.sequenceQueue.push(r),this.isLoading=!1,!0):(this.isLoading=!1,!1)},generate:async function(t,i=[]){function r(b){const T=Math.random();let S=0,y=0;for(let E of b){if(S<=T&&T<S+E)break;S+=E,y++}return y}function s(b){let T=[],S=Number.MIN_VALUE,y=0;for(let E=0;E<b.length;E++)b[E]>S&&(S=b[E]);for(let E=0;E<b.length;E++)y+=Math.exp(b[E]-S);for(let E=0;E<b.length;E++)T.push(Math.exp(b[E]-S)/y);return T}const o=Math.floor(new Date/1e3),a=60*60;let l=new TinySegmenter,c=Array.isArray(t)?t:l.segment(t),f={},u=[],h=new RegExp("[.#$\\[\\]]"),d={},m="",_=0;const v=Math.pow(10,-6),p=10;let g=[{sequence:[],score:1}];for(const b of i){if(!(b in this.wordDictionary)||o-this.wordDictionary[b].timestamp>=a){const T=await Wt.ref(Jt+"/words/"+b).once("value");if(this.wordDictionary[b]={attributes:[],timestamp:o},T.exists()){const S=T.val();for(const y in S.attributes)typeof S.attributes[y]=="number"&&S.attributes[y]>0&&this.attributes.includes(y)&&this.wordDictionary[b].attributes.push(y)}}for(const T of this.wordDictionary[b].attributes)T in f?f[T].push(b):f[T]=[b]}for(const b of c){if(!u.includes(b)){if(Array.isArray(b)){let T=[],S=[];for(const y of b)if(y in f){for(const E of f[y])if(!T.includes(E)){let N=!0;T.push(E);for(const F of this.tags)if(E===F.name){S.push(F.score),N=!1;break}N&&S.push(v)}}else{if(!(y in this.reverseWordDictionary)||o-this.reverseWordDictionary[y].timestamp>=a){const E=await Wt.ref(Jt+"/words").orderByChild(`attributes/${y}`).limitToLast(100).startAt(1).once("value");if(this.reverseWordDictionary[y]={words:[],timestamp:o},E.exists()){const N=E.val();for(const F in N)this.reverseWordDictionary[y].words.push(F)}}for(const E of this.reverseWordDictionary[y].words)if(c.includes(E)&&!T.includes(E)){let N=!0;T.push(E);for(const F of this.tags)if(E==F.name){S.push(F.score),N=!1;break}N&&S.push(v)}}if(T.length>0&&S.length>0){const y=s(S);let E=[];for(let N=0;N<g.length;N++)for(let F=0;F<y.length;F++){let C=[].concat(g[N].sequence);C.push({index:_,term:T[F]}),E.push({sequence:C,score:g[N].score*y[F]})}g.splice(0);for(const N of this.take(E.sort((F,C)=>C.score-F.score),p))g.push(N)}}else if(!h.test(b)){let T=[],S=[];if(!(b in this.wordDictionary)||o-this.wordDictionary[b].timestamp>=a){const y=await Wt.ref(Jt+"/words/"+b).once("value");if(this.wordDictionary[b]={attributes:[],timestamp:o},y.exists()){const E=y.val();for(const N in E.attributes)typeof E.attributes[N]=="number"&&E.attributes[N]>0&&this.attributes.includes(N)&&this.wordDictionary[b].attributes.push(N)}}for(const y of this.wordDictionary[b].attributes)if(y in f){for(const E of f[y])if(!T.includes(E)){let N=!0;T.push(E);for(const F of this.tags)if(E===F.name){S.push(F.score),N=!1;break}N&&S.push(v)}}else{if(!(y in this.reverseWordDictionary)||o-this.reverseWordDictionary[y].timestamp>=a){const E=await Wt.ref(Jt+"/words").orderByChild(`attributes/${y}`).limitToLast(100).startAt(1).once("value");if(this.reverseWordDictionary[y]={words:[],timestamp:o},E.exists()){const N=E.val();for(let F in N)this.reverseWordDictionary[y].words.push(F)}}for(const E of this.reverseWordDictionary[y].words)if(c.includes(E)&&!T.includes(E)){let N=!0;T.push(E);for(const F of this.tags)if(E==F.name){S.push(F.score),N=!1;break}N&&S.push(v)}}if(T.length>0&&S.length>0){const y=s(S);let E=[];for(let N=0;N<g.length;N++)for(let F=0;F<y.length;F++){let C=[].concat(g[N].sequence);C.push({index:_,term:T[F]}),E.push({sequence:C,score:g[N].score*y[F]})}g.splice(0);for(const N of this.take(E.sort((F,C)=>C.score-F.score),p))g.push(N)}}u.push(b)}_++}const x=g[r(s(g.map(b=>b.score)))];for(let b=0;b<c.length;b++){const T=JSON.stringify(c[b]);if(T in d)typeof d[T]=="undefined"?m+=c[b]:m+=d[T];else{let S=!0;for(let y=0;y<x.sequence.length;y++)if(x.sequence[y].index==b){T==x.sequence[y].term?d[T]=void 0:(d[T]=x.sequence[y].term,m+=x.sequence[y].term,S=!1);break}if(S){if(Array.isArray(c[b]))return null;m+=c[b]}}}return[m,d]},notify:function(t,i=3e3){const r=this;t.id=window.setTimeout(s=>{for(let o=0;o<r.notifications.length;o++)if(r.notifications[o].id===s.id){r.notifications.splice(o,1);break}},i,t),this.notifications.unshift(t)},blinded:async function(){if(this.backgroundImagesQueue.length==0){let r=function(s){function o(c,f){return c=Math.ceil(c),f=Math.floor(f),Math.floor(Math.random()*(f-c))+c}let a=[].concat(s),l=s.length;for(;l>1;){const c=o(0,l);l--;const f=a[l];a[l]=a[c],a[c]=f}return a};var i=r;for(const s of r(this.recentImages))this.backgroundImagesQueue.push(s)}const t=this.backgroundImagesQueue.shift();this.preloadImages.splice(0),this.backgroundImages.splice(0);for(const r of t.paths)try{this.preloadImages.push({id:t.id,url:await Hd.ref().child(r).getDownloadURL(),timestamp:t.timestamp})}catch(s){this.notify({text:s.message,accent:this.character.accent,image:this.character.image}),console.error(s)}"tags"in t&&this.talk(t.tags.filter(r=>r.indexOf(this.character.name)===-1))},load:function(t){let i=!0;for(let r of this.preloadImages)r.url==t?r.isLoaded=!0:"isLoaded"in r||(i=!1);if(i){let r=0;for(const s of this.preloadImages)s.isLoaded&&(this.backgroundImages.push({index:r,id:s.id,url:s.url,timestamp:s.timestamp}),r++);this.preloadImages.splice(0),this.isBlinded=!1}},error:function(t){let i=!0;for(let r of this.preloadImages)r.url==t?r.isLoaded=!0:"isLoaded"in r||(i=!1);if(i){let r=0;for(const s of this.preloadImages)s.isLoaded&&(this.backgroundImages.push({index:r,id:s.id,url:s.url,timestamp:s.timestamp}),r++);this.preloadImages.splice(0),this.isBlinded=!1}},update:async function(t,i){this.isUpdating=!0;try{const r=await new Promise(s=>{const o=Math.pow(10,-6);let a=[],l=[],c=[],f={};const u=new Date().getTime()-12*60*60*1e3,h=10;let d={},m=[],_=o;for(const v in t)if("tags"in t[v]&&t[v].tags.length>0){let p=[];a.push({tokens:t[v].tags,timestamp:t[v].timestamp});for(const g of t[v].tags)p.includes(g)||(g in f?f[g]+=1:f[g]=1,p.push(g))}for(const v in f)f[v]=Math.log(a.length/(f[v]+o));for(const v of a)v.timestamp*1e3>u&&l.push(v);if(l.length<h){const v=Math.max(a.length-h,0);l.splice(0);for(let p=a.length-1;p>=v;p--)l.unshift(a[p])}for(const v of l){let p={};for(const g of v.tokens)g in p?p[g]+=1:p[g]=1;for(const g in p)p[g]/=v.tokens.length,g in d||(d[g]=0);c.push(p)}for(const v in d)for(const p of c)if(v in p){const g=p[v]*f[v];g>d[v]&&(d[v]=g)}for(const v in d)v.length>1&&v!="..."&&m.push({term:v,value:d[v]});m.sort((v,p)=>p.value-v.value),m.length>i&&m.splice(i);for(const v of m)v.value>_&&(_=v.value);for(const v of m)v.value/=_;m.sort((v,p)=>v.term>p.term?1:v.term<p.term?-1:0),s(m)});this.tags.splice(0);for(let s=0;s<r.length;s++)this.tags.push({index:s,name:r[s].term,score:r[s].value})}catch(r){this.notify({text:r.message,accent:this.character.accent,image:this.character.image}),console.error(r)}this.isUpdating=!1},shake:function(t){t.animate([{transform:"translate3d(0, 0, 0)"},{transform:"translate3d(8px, 0, 0)"},{transform:"translate3d(-8px, 0, 0)"},{transform:"translate3d(7px, 0, 0)"},{transform:"translate3d(-7px, 0, 0)"},{transform:"translate3d(6px, 0, 0)"},{transform:"translate3d(-6px, 0, 0)"},{transform:"translate3d(5px, 0, 0)"},{transform:"translate3d(-5px, 0, 0)"},{transform:"translate3d(4px, 0, 0)"},{transform:"translate3d(-4px, 0, 0)"},{transform:"translate3d(3px, 0, 0)"},{transform:"translate3d(-3px, 0, 0)"},{transform:"translate3d(2px, 0, 0)"},{transform:"translate3d(-2px, 0, 0)"},{transform:"translate3d(1px, 0, 0)"},{transform:"translate3d(-1px, 0, 0)"},{transform:"translate3d(0, 0, 0)"}],{duration:1e3,iterations:1})},scrollToTop(){this.$nextTick(()=>{window.scroll(0,0)})},scrollToEnd:function(){typeof this.scrollTimeoutID=="number"&&clearTimeout(this.scrollTimeoutID),this.scrollTimeoutID=setTimeout(function(){window.scrollTo(0,document.body.scrollHeight)},500)},formatDate:function(t){return moment.locale(window.navigator.language),moment(t).format("LT")},animationStart:function(t){this.isAnimating=!0},animationEnd:function(t){const i=this;this.$nextTick(()=>{i.notificationHeight=i.$refs.notifications.getBoundingClientRect().height}),this.isPopup||(this.message=null),this.isAnimating=!1},tickerUpdated:function(t){const i=this;this.$nextTick(()=>{for(const r of document.body.querySelectorAll(".container>.wrap>.frame .clip")){let s=0;for(const o of r.querySelectorAll(":scope .ticker-wrap .ticker .item"))s+=o.getBoundingClientRect().width;s>0&&(i.tickerWidth=Math.min(s/2,document.body.querySelector(".container>.wrap>.frame .level").getBoundingClientRect().width),r.querySelector(":scope .ticker-wrap .ticker").style.width=s+"px")}})},arrange:function(t,i){let r=[],s=[];for(const o of t)s.length<i?s.push(o):(r.push(s),s=[o]);return r.push(s),r},take:function(t,i){if(t.length>i){let r=[].concat(t);return r.splice(i),r}return t},prepare:function(t,i=null,r=null){function s(l,c){return l=Math.ceil(l),c=Math.floor(c),Math.floor(Math.random()*(c-l))+l}let o=[],a=[];for(const l of t){let c=i;i===null&&l.name in this.states&&(c=this.states[l.name]),c!==null&&"state"in l&&l.state!==null&&new RegExp(l.state).test(c)&&o.push(l)}if(o.length===0){for(const l of t)(!("state"in l)||l.state===null)&&o.push(l);i=null}if(o.length>0){let l=[];for(const c of o[s(0,o.length)].sequence)i!==null&&(this.states[c.name]=i),l.push(c);for(;l.length>0;){const c=l.shift();if(c.type=="Sequence"){if(!("sequence"in c)){let f=[],u=[];for(const h of r===null?this.character.sequences:r){let d=this.getSequenceStack(h,c);if(d.length>0){let m=[];do{let _=d.pop();if(d.length>0){let v=[];for(const p of d[d.length-1].sequence)if(p.type=="Sequence"){if("sequence"in p){let g=!0;for(const x of m)if(x===p){g=!1;break}g&&v.push(p)}if(p===_)break}for(;v.length>0;)m.push(v.pop())}if("sequence"in _){let v=!0;for(const p of m)if(p===_){v=!1;break}v&&m.push(_)}}while(d.length>0);for(;m.length>0;)f.push(m.pop())}else f.push(h)}if("state"in c){this.states[c.name]=c.state;for(const h of f)if(h.name==c.name){if(!new RegExp(h.state).test(c.state))continue;u.push(h)}}else for(const h of f)if(h.name==c.name){if("state"in h&&(!(h.name in this.states)||!new RegExp(h.state).test(this.states[h.name])))continue;u.push(h)}if(u.length>0){let h=0;for(const d of u[s(0,u.length)].sequence)l.splice(h,0,d),h++}}}else a.push(c)}}return a},getSequenceStack:function(t,i){let r=[];if(r.push(t),r[r.length-1]!==i){if("sequence"in t){for(const s of t.sequence)if(s.type=="Sequence"){let o=this.getSequenceStack(s,i);if(o.length>0&&o[o.length-1]===i){let a=[];do a.push(o.pop());while(o.length>0);do r.push(a.pop());while(a.length>0);return r}}}r.pop()}return r},animate:function(){requestAnimationFrame(this.animate),Ci.begin();const t=F2.getDelta();if(pt.domElement.width!==pt.domElement.clientWidth||pt.domElement.height!==pt.domElement.clientHeight){const r=pt.domElement.clientWidth,s=pt.domElement.clientHeight;ho.setSize(r,s),Qy.uniforms.resolution.value.set(1/(r*window.devicePixelRatio),1/(s*window.devicePixelRatio)),pt.setPixelRatio(window.devicePixelRatio),pt.setSize(r,s,!1),hi.aspect=r/s,hi.updateProjectionMatrix(),Xn.setPixelRatio(window.devicePixelRatio),Xn.setSize(r,s)}if(et){let r=function(u,h){return u=Math.ceil(u),h=Math.floor(h),Math.floor(Math.random()*(h-u))+u};var i=r;let s=!1,o=!1,a=null,l=[];if(ct===null&&(ct={time:0,duration:.5,base:{x:lt.position.x,y:lt.position.y},source:{x:lt.position.x,y:lt.position.y},target:{x:lt.position.x+r(-1,1)*.1,y:lt.position.y+r(-1,1)*.1}}),ct.time+=t,ct.time>=ct.duration)lt.position.x=ct.target.x,lt.position.y=ct.target.y,ct.base?ct={time:0,duration:.5,source:{x:lt.position.x,y:lt.position.y},target:{x:ct.base.x,y:ct.base.y}}:ct=null;else{const u=ct.time/ct.duration;lt.position.x=ct.source.x+(ct.target.x-ct.source.x)*u,lt.position.y=ct.source.y+(ct.target.y-ct.source.y)*u}let c=Math.max(0,Math.min(-lt.position.y,1)),f=!0;this.currentAnimations.length>0&&po<this.currentAnimations.length&&(a=this.currentAnimations[po],po+=$y,s=!0);for(let u=this.blendShapeAnimations.length-1;u>=0;u--){let h=this.blendShapeAnimations[u];l.includes(h.name)||(h.time<=h.duration&&(h.time+=t,h.time>=h.duration?(h.name=="blink"?(et.blendShapeProxy.setValue(h.name,.1*c+(1-.1)*Math.abs(Math.sin(h.end/2*Math.PI))),f=!1):et.blendShapeProxy.setValue(h.name,Math.abs(Math.sin(h.end/2*Math.PI))),this.blendShapeAnimations.splice(u,1)):h.name=="blink"?(et.blendShapeProxy.setValue(h.name,.1*c+(1-.1)*Math.abs(Math.sin((h.time/h.duration*(h.end-h.start)+h.start)/2*Math.PI))),f=!1):et.blendShapeProxy.setValue(h.name,Math.abs(Math.sin((h.time/h.duration*(h.end-h.start)+h.start)/2*Math.PI))),o=!0),l.push(h.name))}if(f&&et.blendShapeProxy.setValue("blink",.1*c),this.sequenceQueue.length>0&&Array.isArray(this.sequenceQueue[0])?mo=0:(mo+=t,this.isLoading||(za+=t),this.sequenceQueue.length==0&&(za>=N2?(this.recentImages.length>0&&(this.isBlinded=!0),mo=za=0):(mo>=I2||a===null)&&(this.sequenceQueue.push({sequences:this.prepare(this.character.sequences.filter(u=>u.name==="Idle"))}),mo=0))),this.sequenceQueue.length>0){const u=Array.isArray(this.sequenceQueue[0])?this.sequenceQueue[0]:this.sequenceQueue[0].sequences;if(u.length>0){if(u[0].type=="Animation")if("name"in u[0])if(u[0].name in this.animations){let h=!1;if("dependencies"in u[0]){for(const d of this.currentAnimations)if(u[0].dependencies.includes(d.name)){h=!0;break}}if(!h||!s){this.currentAnimations.splice(0);for(let d of this.animations[u[0].name])this.currentAnimations.push(d);u.shift(),po=0,a=this.currentAnimations[po],po+=$y}}else{let h=!1;if("dependencies"in u[0]){for(const d of this.blendShapeAnimations)if(u[0].dependencies.includes(d.name)){h=!0;break}}if(!h||!o){let d=[];for(this.blendShapeAnimations.unshift({name:u[0].name,time:0,duration:u[0].duration,start:u[0].start,end:u[0].end}),u.shift();u.length>0;){if(h=!1,"dependencies"in u[0]){for(const m of this.blendShapeAnimations)if(u[0].dependencies.includes(m.name)){h=!0;break}}if(h||u[0].type!="Animation"||u[0].name in this.animations)break;this.blendShapeAnimations.unshift({name:u[0].name,time:0,duration:u[0].duration,start:u[0].start,end:u[0].end}),u.shift()}for(let m=this.blendShapeAnimations.length-1;m>=0;m--){let _=this.blendShapeAnimations[m];d.includes(_.name)||(et.blendShapeProxy.setValue(_.name,Math.abs(Math.sin(_.start/2*Math.PI))),d.push(_.name))}}}else u.shift();else if(u[0].type=="Message"&&this.message===null&&!s&&!o&&("character"in u[0]?this.message={time:0,duration:u[0].duration,type:{elapsed:-1,speed:u[0].speed,reverse:!1,buffer:"",count:0},character:u[0].character,text:u[0].text}:this.message={time:0,duration:u[0].duration,type:{elapsed:-1,speed:u[0].speed,reverse:!1,buffer:"",count:0},character:{name:this.character.name,accent:this.character.accent,image:this.character.image},text:u[0].text},u.shift(),!this.isMuted)){const h=this.message.text;new Promise(async d=>{try{const m=await fetch("https://ai.milchchan.com/api/synthesize?text="+encodeURIComponent(h),{mode:"cors",method:"GET",headers:{"Content-Type":"application/x-www-form-urlencoded"}});if(m.ok)this.$refs.player.src=URL.createObjectURL(await m.blob()),this.message!==null&&h===this.message.text&&(this.$refs.player.currentTime=0,this.$refs.player.play());else throw new Error(m.statusText)}catch(m){console.error(m)}d()})}}else this.message===null&&!s&&!o&&this.sequenceQueue.shift()}if(this.message!==null){if(this.message.type.reverse)if(this.message.type.count>0){if(this.message.type.elapsed+=t*2,this.message.type.elapsed>=1/this.message.type.speed){if(this.message.type.count-1<this.message.text.length){let h=Math.floor(this.message.text.length/2);this.message.type.buffer.length<=h&&this.message.type.count>0&&(this.message.type.count-=1),this.message.type.buffer.length>0&&(this.message.type.buffer=this.message.type.buffer.substring(0,this.message.type.buffer.length-1))}this.message.type.elapsed=0}}else this.isPopup=!1;else if(this.message.type.buffer.length<this.message.text.length){if(this.message.type.elapsed>=0?this.message.type.elapsed+=t:this.isAnimating||(this.isPopup?this.message.type.elapsed=t:this.isPopup=!0),this.message.type.elapsed>=1/this.message.type.speed){let u=this.message.type.buffer.length,h=Math.floor(this.message.text.length/2),d=this.message.text.length;this.message.type.count>=h&&(this.message.type.buffer+=this.message.text.charAt(u)),this.message.type.count<d&&(this.message.type.count+=1),this.message.type.elapsed=0}}else this.message.time+=t,this.message.time>=this.message.duration&&(this.message.type.reverse=!0);if(this.message.text.length===this.message.type.buffer.length){const u=this.message.text.split("");this.text.splice(0);for(let h=0;h<u.length;h++)this.text.push({key:h,value:u[h]})}else{let u=new Array,h="";for(let d=0;d<this.message.text.length;d++)u.indexOf(this.message.text.charAt(d))==-1&&this.message.text.charAt(d)!=`
`&&this.message.text.charAt(d).match(/\s/)==null&&u.push(this.message.text.charAt(d));if(u.length>0)for(let d=0;d<this.message.type.count;d++)this.message.text.charAt(d)==`
`?h+=`
`:h+=u[~~r(0,u.length)];if(h.length>this.message.type.buffer.length){const d=(this.message.type.buffer+h.substring(this.message.type.buffer.length,h.length)).split("");this.text.splice(0);for(let m=0;m<d.length;m++)this.text.push({key:m,value:d[m]})}else if(this.text.length!==this.message.type.buffer.length){const d=this.message.type.buffer.split("");this.text.splice(0);for(let m=0;m<d.length;m++)this.text.push({key:m,value:d[m]})}}}if(a)for(let u of a.animations){switch(u.bone){case"chest":case"head":case"hips":case"jaw":case"leftEye":case"leftFoot":case"leftHand":case"leftIndexDistal":case"leftIndexIntermediate":case"leftIndexProximal":case"leftLittleDistal":case"leftLittleIntermediate":case"leftLittleProximal":case"leftLowerArm":case"leftLowerLeg":case"leftMiddleDistal":case"leftMiddleIntermediate":case"leftMiddleProximal":case"leftRingDistal":case"leftRingIntermediate":case"leftRingProximal":case"leftShoulder":case"leftThumbDistal":case"leftThumbIntermediate":case"leftThumbProximal":case"leftToes":case"leftUpperArm":case"leftUpperLeg":case"neck":case"rightEye":case"rightFoot":case"rightHand":case"rightIndexDistal":case"rightIndexIntermediate":case"rightIndexProximal":case"rightLittleDistal":case"rightLittleIntermediate":case"rightLittleProximal":case"rightLowerArm":case"rightLowerLeg":case"rightMiddleDistal":case"rightMiddleIntermediate":case"rightMiddleProximal":case"rightRingDistal":case"rightRingIntermediate":case"rightRingProximal":case"rightShoulder":case"rightThumbDistal":case"rightThumbIntermediate":case"rightThumbProximal":case"rightToes":case"rightUpperArm":case"rightUpperLeg":case"spine":case"upperChest":break;case"eye.L":u.bone="leftEye";break;case"foot.L":u.bone="leftFoot";break;case"hand.L":u.bone="leftHand";break;case"f_index.03.L":u.bone="leftIndexDistal";break;case"f_index.02.L":u.bone="leftIndexIntermediate";break;case"f_index.01.L":u.bone="leftIndexProximal";break;case"f_pinky.03.L":u.bone="leftLittleDistal";break;case"f_pinky.02.L":u.bone="leftLittleIntermediate";break;case"f_pinky.01.L":u.bone="leftLittleProximal";break;case"lower_arm.L":u.bone="leftLowerArm";break;case"shin.L":u.bone="leftLowerLeg";break;case"f_middle.03.L":u.bone="leftMiddleDistal";break;case"f_middle.02.L":u.bone="leftMiddleIntermediate";break;case"f_middle.01.L":u.bone="leftMiddleProximal";break;case"f_ring.03.L":u.bone="leftRingDistal";break;case"f_ring.02.L":u.bone="leftRingIntermediate";break;case"f_ring.01.L":u.bone="leftRingProximal";break;case"shoulder.L":u.bone="leftShoulder";break;case"thumb_distal.L":u.bone="leftThumbDistal";break;case"thumb_intermediate.L":u.bone="leftThumbIntermediate";break;case"thumb_proximal.L":u.bone="leftThumbProximal";break;case"toe.L":u.bone="leftToes";break;case"upper_arm.L":u.bone="leftUpperArm";break;case"thigh.L":u.bone="leftUpperLeg";break;case"eye.R":u.bone="rightEye";break;case"foot.R":u.bone="rightFoot";break;case"hand.R":u.bone="rightHand";break;case"f_index.03.R":u.bone="rightIndexDistal";break;case"f_index.02.R":u.bone="rightIndexIntermediate";break;case"f_index.01.R":u.bone="rightIndexProximal";break;case"f_pinky.03.R":u.bone="rightLittleDistal";break;case"f_pinky.02.R":u.bone="rightLittleIntermediate";break;case"f_pinky.01.R":u.bone="rightLittleProximal";break;case"lower_arm.R":u.bone="rightLowerArm";break;case"shin.R":u.bone="rightLowerLeg";break;case"f_middle.03.R":u.bone="rightMiddleDistal";break;case"f_middle.02.R":u.bone="rightMiddleIntermediate";break;case"f_middle.01.R":u.bone="rightMiddleProximal";break;case"f_ring.03.R":u.bone="rightRingDistal";break;case"f_ring.02.R":u.bone="rightRingIntermediate";break;case"f_ring.01.R":u.bone="rightRingProximal";break;case"shoulder.R":u.bone="rightShoulder";break;case"thumb_distal.R":u.bone="rightThumbDistal";break;case"thumb_intermediate.R":u.bone="rightThumbIntermediate";break;case"thumb_proximal.R":u.bone="rightThumbProximal";break;case"toe.R":u.bone="rightToes";break;case"upper_arm.R":u.bone="rightUpperArm";break;case"thigh.R":u.bone="rightUpperLeg";break;case"upper_chest":u.bone="upperChest";break;default:u.bone=null}if(u.bone&&u.rotation.length==4)try{et.humanoid.getBoneNode(u.bone).position.set(u.position[0],u.position[1],-u.position[2]),et.humanoid.getBoneNode(u.bone).quaternion.set(-u.rotation[0],-u.rotation[1],u.rotation[2],u.rotation[3])}catch(h){this.notify({text:h.message,accent:this.character.accent,image:this.character.image}),console.error(h)}}if(Yn.length>0){const u={};let h=0;if(gt===null){if(Ce!==null)if(Ce.time-=t,Ce.time<=0){for(const d in Ce.bones)u[d]={direction:Ce.bones[d].direction,force:Ce.bones[d].base};Ce=null}else for(const d in Ce.bones)u[d]={direction:Ce.bones[d].direction,force:Ce.bones[d].base+Ce.bones[d].source+Ce.time/Ce.duration*(Ce.bones[d].target-Ce.bones[d].source-Ce.bones[d].base)}}else if(Ce===null){let d=null,m=0;for(const _ of et.springBoneManager.springBoneGroupList)for(const v of _)m===gt.index&&(d=v.bone.getWorldPosition(new L)),m++;if(d!==null){const _=.25;m=0,Ce={time:0,duration:.5,center:d,bones:{}};for(const v of et.springBoneManager.springBoneGroupList)for(const p of v)d.distanceTo(p.bone.getWorldPosition(new L))<=_&&(Ce.bones[m]={direction:new L(gt.direction.x,gt.direction.y,0),base:p.gravityPower-Yn[m].gravityPower,source:0,target:-Math.min(.01*gt.distance*Math.cos(d.distanceTo(p.bone.getWorldPosition(new L))/_),5)},u[m]={direction:Ce.bones[m].direction,force:Ce.bones[m].source}),m++}}else if(Ce.time+=t,Ce.time>=Ce.duration){const d=.25;let m=0;for(const _ in Ce.bones)u[_]={direction:Ce.bones[_].direction,force:Ce.bones[_].target};Ce.time=0;for(const _ of et.springBoneManager.springBoneGroupList)for(const v of _)m in Ce.bones&&(Ce.bones[m].direction=new L(gt.direction.x,gt.direction.y,0),Ce.bones[m].source=Ce.bones[m].target,Ce.bones[m].target=-Math.min(.01*gt.distance*Math.cos(Ce.center.distanceTo(v.bone.getWorldPosition(new L))/d),5)),m++}else for(const d in Ce.bones)u[d]={direction:Ce.bones[d].direction,force:Ce.bones[d].base+Ce.bones[d].source+Ce.time/Ce.duration*(Ce.bones[d].target-Ce.bones[d].source-Ce.bones[d].base)};if(Xt===null){let d=0;Xt={time:0,duration:1,direction:new L(1,0,0),force:.01*(Math.random()-.5),sources:{}};for(const m of et.springBoneManager.springBoneGroupList)for(const _ of m)d in u||(Xt.sources[d]=_.gravityPower-Yn[d].gravityPower),d++}else if(Xt.time+=t,Xt.time>=Xt.duration){for(const d in Xt.sources)d in u||(u[d]={direction:Xt.direction,force:Xt.force});Xt=null}else for(const d in Xt.sources)d in u||(u[d]={direction:Xt.direction,force:Xt.sources[d]+Xt.time/Xt.duration*(Xt.force-Xt.sources[d])});for(const d of et.springBoneManager.springBoneGroupList)for(const m of d){if(h in u){const _=new L(Yn[h].gravityDir.x+u[h].direction.x,Yn[h].gravityDir.y+u[h].direction.y,Yn[h].gravityDir.z+u[h].direction.z);m.gravityDir=_.normalize(),m.gravityPower=Yn[h].gravityPower+u[h].force}h++}}et.update(t)}Ut.update(),Xn.render(t),Ci.end()}},updated:function(){this.insetTop=this.$refs.indicator.getBoundingClientRect().height,this.insetBottom=this.$refs.blank.getBoundingClientRect().height;for(const t of document.body.querySelectorAll(".container>.wrap>.frame .clip")){let i=0;for(const r of t.querySelectorAll(":scope .ticker-wrap .ticker .item"))i+=r.getBoundingClientRect().width;i>0&&(this.tickerWidth=Math.min(i/2,document.body.querySelector(".container>.wrap>.frame .level").getBoundingClientRect().width),t.querySelector(":scope .ticker-wrap .ticker").style.width=i+"px")}},mounted:async function(){function t(c,f){const u=Math.random();let h=0,d=0;for(let m of c){const _=f(m);if(h<=u&&u<h+_)break;h+=_,d++}return c[d]}const i=this,r=localStorage.getItem("character"),s=localStorage.getItem("credential");let o=null;const a=[{path:"/assets/milch.json",probability:.9},{path:"/assets/merku.json",probability:.1}],l=new $x;if(r)try{const c=JSON.parse(r);c!==null&&(this.isMuted=c.mute)}catch{localStorage.removeItem("character")}if(s)try{o=JSON.parse(s)}catch{localStorage.removeItem("credential")}this.$refs.three.appendChild(pt.domElement),this.$refs.three.after(Ci.domElement),this.animate(),this.insetTop=this.$refs.indicator.getBoundingClientRect().height,this.insetBottom=this.$refs.blank.getBoundingClientRect().height;try{const c=await fetch(t(a,f=>f.probability).path,{mode:"cors",method:"GET",headers:{"Content-Type":"application/x-www-form-urlencoded"}});if(c.ok)this.character=await c.json();else throw new Error(c.statusText)}catch(c){this.notify({text:c.message,accent:this.character.accent,image:this.character.image}),console.error(c)}this.sequenceQueue.push(this.prepare(this.character.sequences.filter(c=>c.name==="Start"))),l.crossOrigin="anonymous",l.load(await Hd.ref().child(this.character.model).getDownloadURL(),c=>{Ad.from(c).then(async f=>{const u={idle1:"/assets/animation-idle1.json",idle2:"/assets/animation-idle2.json",jump:"/assets/animation-jump.json",lose:"/assets/animation-lose.json",win:"/assets/animation-win.json"};let h={};try{for(let d in u){const m=await fetch(encodeURI(u[d]),{mode:"cors",method:"GET",headers:{"Content-Type":"application/x-www-form-urlencoded"}});if(m.ok){const _=await m.json();h[d]=_.data}else throw new Error(m.statusText)}i.animations=h,et=f,On.add(f.scene),f.scene.rotation.y=Math.PI,f.lookAt.target=lt,Yn.splice(0);for(const d of et.springBoneManager.springBoneGroupList)for(const m of d)Yn.push({gravityDir:m.gravityDir.clone(),gravityPower:m.gravityPower});i.progress=null}catch(d){i.notify({text:d.message,accent:i.character.accent,image:i.character.image}),console.error(d)}})},c=>i.progress=c.loaded/c.total,c=>console.error(c)),o!==null&&(o.providerId===firebase.auth.GoogleAuthProvider.PROVIDER_ID?firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(o.idToken)).catch(c=>{console.error(c.code,c.message)}):o.providerId===firebase.auth.FacebookAuthProvider.PROVIDER_ID?firebase.auth().signInWithCredential(firebase.auth.FacebookAuthProvider.credential(o.accessToken)).catch(c=>{console.error(c.code,c.message)}):o.providerId===firebase.auth.TwitterAuthProvider.PROVIDER_ID&&firebase.auth().signInWithCredential(firebase.auth.TwitterAuthProvider.credential(o.accessToken,o.secret)).catch(c=>{console.error(c.code,c.message)})),firebase.auth().onAuthStateChanged(function(c){c?(i.user=c,Wt.ref(Yy).limitToLast(100).on("value",f=>{if(f.exists()){const u=f.val();let h=Object.keys(u),d=null;h.length>e.maxMessages&&h.splice(0,h.length-e.maxMessages),e.feedQueue.splice(0);for(let m of h){const _=u[m],v=_.timestamp*1e3;let p=-1;for(let g=0;g<e.messages.length;g++)if(m===e.messages[g].id){p=g;break}if(_.user.accent||(_.user.accent="#30c0f5"),p>=0){const g={id:m,text:_.text,thread:_.thread,timestamp:new Date(v),user:_.user};e.messages[p]=g}else{for(let g=0;g<e.messages.length;g++)v<Math.floor(e.messages[g].timestamp)&&(p=g);e.messages.splice(p>=0?p:e.messages.length,0,{id:m,text:_.text,thread:_.thread,timestamp:new Date(v),user:_.user}),e.messages.length>e.maxMessages&&e.messages.shift(),e.user.uid!==_.user.id&&(d=_.user)}e.feedQueue.unshift(_)}for(let m=e.messages.length-1;m>=0;m--)e.messages[m].id in u||e.messages.splice(m,1);d&&!d.id&&et,e.feedQueue.push(e.feedQueue.shift())}})):(Wt.ref(Yy).off("value"),i.user=null,i.stars=0),Wt.ref(Jt+"/images").limitToLast(100).on("value",f=>{if(f.exists()){const u=f.val();let h=!1;for(const d in u)if(!i.recentImages.some(m=>m.id===d&&m.timestamp===u[d].timestamp)){h=!0;break}if(h){i.recentImages.splice(0);for(const d in u)u[d].id=d,i.recentImages.push(u[d]);i.update(i.recentImages,i.maxTags),i.isBlinded=!0}}}),Wt.ref(Jt+"/stars").on("value",f=>{const u=f.val();u===null?i.stars=0:i.stars=u}),Wt.ref(Jt+"/words").orderByChild("timestamp").limitToLast(10).on("value",f=>{if(f.exists()){const u=f.val();let h=[],d=0;for(const m in u)h.push({name:m,timestamp:u[m].timestamp});for(const m of i.prepare(i.character.sequences.filter(_=>_.name==="Alert"),10))m.type==="Message"&&(i.words.splice(d,0,{name:m.text,image:i.character.image}),d++);for(const m of h.sort((_,v)=>v.timestamp-_.timestamp)){let _=-1;for(let v=0;v<i.words.length;v++)if(i.words[v].name==m.name){_=v;break}_>=0?(i.words[_].timestamp<m.timestamp&&(m.name in i.wordDictionary&&delete i.wordDictionary[m.name],Object.keys(i.reverseWordDictionary).forEach(v=>{i.reverseWordDictionary[v].words.some(p=>p===m.name)&&delete i.reverseWordDictionary[v]})),i.words.splice(_,1)):(m.name in i.wordDictionary&&delete i.wordDictionary[m.name],Object.keys(i.reverseWordDictionary).forEach(v=>{i.reverseWordDictionary[v].words.some(p=>p===m.name)&&delete i.reverseWordDictionary[v]})),i.words.splice(d,0,m),d++}for(let m=i.words.length-1;m>=d;m--)i.words.splice(m,1)}})})},unmounted:function(){typeof this.tickIntervalID=="number"&&clearInterval(this.tickIntervalID),et!==null&&(On.remove(et.scene),et=null)}}).mount("#app");window.addEventListener("resize",t=>{e.insetTop=e.$refs.indicator.getBoundingClientRect().height,e.insetBottom=e.$refs.blank.getBoundingClientRect().height,e.$nextTick(()=>{for(const i of document.body.querySelectorAll(".container>.wrap>.frame .clip")){let r=0;for(const s of i.querySelectorAll(":scope .ticker-wrap .ticker .item"))r+=s.getBoundingClientRect().width;r>0&&(e.tickerWidth=Math.min(r/2,document.body.querySelector(".container>.wrap>.frame .level").getBoundingClientRect().width),i.querySelector(":scope .ticker-wrap .ticker").style.width=r+"px")}})}),window.addEventListener("click",t=>{const i=e.$refs.three,r=t.clientX-i.offsetLeft-(window.innerWidth-i.offsetWidth),s=t.clientY-i.offsetTop-(window.innerHeight-i.offsetHeight),o=i.offsetWidth,a=i.offsetHeight;dn.x=r/o*2-1,dn.y=-(s/a)*2+1,Fi.setFromCamera(dn,hi);const l=Fi.intersectObjects(On.children,!0);for(let c of l){if(c.object.name==="face")break;if(c.object.name.indexOf("breast")>=0)break}}),window.addEventListener("dblclick",t=>{const i=e.$refs.three,r=t.clientX-i.offsetLeft-(window.innerWidth-i.offsetWidth),s=t.clientY-i.offsetTop-(window.innerHeight-i.offsetHeight),o=i.offsetWidth,a=i.offsetHeight;dn.x=r/o*2-1,dn.y=-(s/a)*2+1,Fi.setFromCamera(dn,hi),Fi.intersectObjects(On.children,!0).length>0&&e.activate()}),window.addEventListener("keydown",t=>{t.ctrlKey&&(Ut.enabled=!0)}),window.addEventListener("keyup",t=>{Ut.enabled=!1}),window.addEventListener("mousedown",t=>{if(!Ut.enabled&&t.button===0){let i=Number.MAX_SAFE_INTEGER,r=null;const s=e.$refs.three,o=t.clientX-s.offsetLeft-(window.innerWidth-s.offsetWidth),a=t.clientY-s.offsetTop-(window.innerHeight-s.offsetHeight),l=s.offsetWidth,c=s.offsetHeight;dn.x=o/l*2-1,dn.y=-(a/c)*2+1,Fi.setFromCamera(dn,hi);for(let f of Fi.intersectObjects(On.children,!0))f.distance<i&&(r=f,i=f.distance);if(r!==null){let f=0;gt={point:{x:o,y:a},direction:{x:0,y:0},distance:0,index:-1},i=Number.MAX_SAFE_INTEGER;for(const u of et.springBoneManager.springBoneGroupList)for(const h of u){const d=h.bone.getWorldPosition(new L).distanceTo(r.point);d<i&&(gt.index=f,i=d),f++}e.character!==null&&e.sequenceQueue.push(e.prepare(e.character.sequences.filter(u=>u.name==="TouchStart"),r.object.name))}}}),window.addEventListener("mousemove",t=>{const i=e.$refs.three,r=t.clientX-i.offsetLeft-(window.innerWidth-i.offsetWidth),s=t.clientY-i.offsetTop-(window.innerHeight-i.offsetHeight),o=i.offsetWidth,a=i.offsetHeight;if(dn.x=r/o*2-1,dn.y=-(s/a)*2+1,!Ut.enabled&&t.button===0&&(ct={time:0,duration:.5,source:{x:lt.position.x,y:lt.position.y},target:{x:(r-.5*o)/o*10,y:(s-.5*a)/a*-10}},gt!==null)){const l=new ie(gt.point.x-r,s-gt.point.y);gt.direction=l.normalize(),gt.distance=Math.sqrt((gt.point.x-r)*(gt.point.x-r)+(gt.point.y-s)*(gt.point.y-s))}}),window.addEventListener("mouseup",t=>{!Ut.enabled&&t.button===0&&(gt=null,e.character!==null&&e.sequenceQueue.push(e.prepare(e.character.sequences.filter(i=>i.name==="TouchEnd"))))}),window.addEventListener("touchstart",t=>{t.stopPropagation();const i=e.$refs.three,r=t.changedTouches[0].clientX-i.offsetLeft-(window.innerWidth-i.offsetWidth),s=t.changedTouches[0].clientY-i.offsetTop-(window.innerHeight-i.offsetHeight),o=i.offsetWidth,a=i.offsetHeight;if(dn.x=r/o*2-1,dn.y=-(s/a)*2+1,Fi.setFromCamera(dn,hi),su==0){su++,setTimeout(()=>{su=0},500);let l=Number.MAX_SAFE_INTEGER,c=null;for(let f of Fi.intersectObjects(On.children,!0))f.distance<l&&(c=f,l=f.distance);if(c!==null){let f=0;gt={point:{x:r,y:s},direction:{x:0,y:0},distance:0,index:-1},l=Number.MAX_SAFE_INTEGER;for(const u of et.springBoneManager.springBoneGroupList)for(const h of u){const d=h.bone.getWorldPosition(new L).distanceTo(c.point);d<l&&(gt.index=f,l=d),f++}e.character!==null&&e.sequenceQueue.push(e.prepare(e.character.sequences.filter(u=>u.name==="TouchStart"),c.object.name))}ct={time:0,duration:.5,source:{x:lt.position.x,y:lt.position.y},target:{x:(r-.5*o)/o*10,y:(s-.5*a)/a*-10}}}else Fi.intersectObjects(On.children,!0).length>0&&e.activate(),su=0}),window.addEventListener("touchmove",t=>{t.stopPropagation();const i=e.$refs.three,r=t.changedTouches[0].clientX-i.offsetLeft-(window.innerWidth-i.offsetWidth),s=t.changedTouches[0].clientY-i.offsetTop-(window.innerHeight-i.offsetHeight),o=i.offsetWidth,a=i.offsetHeight;ct={time:0,duration:.5,source:{x:lt.position.x,y:lt.position.y},target:{x:(r-.5*o)/o*10,y:(s-.5*a)/a*-10}}}),window.addEventListener("touchend",t=>{t.stopPropagation();const i=e.$refs.three,r=t.changedTouches[0].clientX-i.offsetLeft-(window.innerWidth-i.offsetWidth),s=t.changedTouches[0].clientY-i.offsetTop-(window.innerHeight-i.offsetHeight),o=i.offsetWidth,a=i.offsetHeight;ct={time:0,duration:.5,source:{x:lt.position.x,y:lt.position.y},target:{x:(r-.5*o)/o*10,y:(s-.5*a)/a*-10}},e.character!==null&&e.sequenceQueue.push(e.prepare(e.character.sequences.filter(l=>l.name==="TouchEnd")))}),window.addEventListener("touchcancel",t=>{t.stopPropagation()}),window.addEventListener("dragover",t=>{t.preventDefault(),t.dataTransfer.dropEffect="copy"},!1),window.addEventListener("drop",t=>{t.stopPropagation(),t.preventDefault();for(let i of t.dataTransfer.files){const r=i.name.toLowerCase();if(r.endsWith(".vrm")){let s=new FileReader;s.addEventListener("load",o=>{const a=new $x;a.crossOrigin="anonymous",a.load(o.target.result,l=>{Ad.from(l).then(c=>{et!==null&&On.remove(et.scene),et=c,On.add(c.scene),c.scene.rotation.y=Math.PI,c.lookAt.target=lt,Yn.splice(0);for(const f of et.springBoneManager.springBoneGroupList)for(const u of f)Yn.push({gravityDir:u.gravityDir.clone(),gravityPower:u.gravityPower});e.progress=null})},l=>e.progress=l.loaded/l.total,l=>console.error(l))}),s.readAsDataURL(i)}else if(r.endsWith(".json")){let s=new FileReader;s.addEventListener("load",o=>{try{e.character=JSON.parse(o.target.result)}catch(a){e.notify({text:error.message,accent:e.character.accent,image:e.character.image}),console.error(a);return}e.sequenceQueue.splice(0),e.sequenceQueue.push(e.prepare(e.character.sequences.filter(a=>a.name==="Start")))}),s.readAsText(i)}}},!1),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",t=>{t.matches?e.isDarkMode=!0:e.isDarkMode=!1})});
