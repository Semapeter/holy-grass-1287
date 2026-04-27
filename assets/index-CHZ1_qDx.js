import{r as V1,g as k1,a as Dx}from"./vendor-yfL0ty4i.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=i(o);fetch(o.href,c)}})();var ad={exports:{}},Il={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ng;function Nx(){if(Ng)return Il;Ng=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,o,c){var d=null;if(c!==void 0&&(d=""+c),o.key!==void 0&&(d=""+o.key),"key"in o){c={};for(var h in o)h!=="key"&&(c[h]=o[h])}else c=o;return o=c.ref,{$$typeof:s,type:r,key:d,ref:o!==void 0?o:null,props:c}}return Il.Fragment=t,Il.jsx=i,Il.jsxs=i,Il}var Ug;function Ux(){return Ug||(Ug=1,ad.exports=Nx()),ad.exports}var y=Ux(),Yt=V1();const Lx=k1(Yt);var sd={exports:{}},zl={},rd={exports:{}},ld={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lg;function Ox(){return Lg||(Lg=1,(function(s){function t(U,I){var ie=U.length;U.push(I);e:for(;0<ie;){var de=ie-1>>>1,_e=U[de];if(0<o(_e,I))U[de]=I,U[ie]=_e,ie=de;else break e}}function i(U){return U.length===0?null:U[0]}function r(U){if(U.length===0)return null;var I=U[0],ie=U.pop();if(ie!==I){U[0]=ie;e:for(var de=0,_e=U.length,Ue=_e>>>1;de<Ue;){var Re=2*(de+1)-1,He=U[Re],et=Re+1,Ze=U[et];if(0>o(He,ie))et<_e&&0>o(Ze,He)?(U[de]=Ze,U[et]=ie,de=et):(U[de]=He,U[Re]=ie,de=Re);else if(et<_e&&0>o(Ze,ie))U[de]=Ze,U[et]=ie,de=et;else break e}}return I}function o(U,I){var ie=U.sortIndex-I.sortIndex;return ie!==0?ie:U.id-I.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();s.unstable_now=function(){return d.now()-h}}var p=[],m=[],M=1,x=null,v=3,b=!1,T=!1,w=!1,S=!1,_=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function O(U){for(var I=i(m);I!==null;){if(I.callback===null)r(m);else if(I.startTime<=U)r(m),I.sortIndex=I.expirationTime,t(p,I);else break;I=i(m)}}function X(U){if(w=!1,O(U),!T)if(i(p)!==null)T=!0,P||(P=!0,K());else{var I=i(m);I!==null&&H(X,I.startTime-U)}}var P=!1,j=-1,R=5,B=-1;function Y(){return S?!0:!(s.unstable_now()-B<R)}function z(){if(S=!1,P){var U=s.unstable_now();B=U;var I=!0;try{e:{T=!1,w&&(w=!1,D(j),j=-1),b=!0;var ie=v;try{t:{for(O(U),x=i(p);x!==null&&!(x.expirationTime>U&&Y());){var de=x.callback;if(typeof de=="function"){x.callback=null,v=x.priorityLevel;var _e=de(x.expirationTime<=U);if(U=s.unstable_now(),typeof _e=="function"){x.callback=_e,O(U),I=!0;break t}x===i(p)&&r(p),O(U)}else r(p);x=i(p)}if(x!==null)I=!0;else{var Ue=i(m);Ue!==null&&H(X,Ue.startTime-U),I=!1}}break e}finally{x=null,v=ie,b=!1}I=void 0}}finally{I?K():P=!1}}}var K;if(typeof L=="function")K=function(){L(z)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,le=oe.port2;oe.port1.onmessage=z,K=function(){le.postMessage(null)}}else K=function(){_(z,0)};function H(U,I){j=_(function(){U(s.unstable_now())},I)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(U){U.callback=null},s.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<U?Math.floor(1e3/U):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_next=function(U){switch(v){case 1:case 2:case 3:var I=3;break;default:I=v}var ie=v;v=I;try{return U()}finally{v=ie}},s.unstable_requestPaint=function(){S=!0},s.unstable_runWithPriority=function(U,I){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var ie=v;v=U;try{return I()}finally{v=ie}},s.unstable_scheduleCallback=function(U,I,ie){var de=s.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?de+ie:de):ie=de,U){case 1:var _e=-1;break;case 2:_e=250;break;case 5:_e=1073741823;break;case 4:_e=1e4;break;default:_e=5e3}return _e=ie+_e,U={id:M++,callback:I,priorityLevel:U,startTime:ie,expirationTime:_e,sortIndex:-1},ie>de?(U.sortIndex=ie,t(m,U),i(p)===null&&U===i(m)&&(w?(D(j),j=-1):w=!0,H(X,ie-de))):(U.sortIndex=_e,t(p,U),T||b||(T=!0,P||(P=!0,K()))),U},s.unstable_shouldYield=Y,s.unstable_wrapCallback=function(U){var I=v;return function(){var ie=v;v=I;try{return U.apply(this,arguments)}finally{v=ie}}}})(ld)),ld}var Og;function Px(){return Og||(Og=1,rd.exports=Ox()),rd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pg;function Bx(){if(Pg)return zl;Pg=1;var s=Px(),t=V1(),i=Dx();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(c(e)!==e)throw Error(r(188))}function m(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,l=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(l=u.return,l!==null){a=l;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return p(u),e;if(f===l)return p(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==l.return)a=u,l=f;else{for(var g=!1,C=u.child;C;){if(C===a){g=!0,a=u,l=f;break}if(C===l){g=!0,l=u,a=f;break}C=C.sibling}if(!g){for(C=f.child;C;){if(C===a){g=!0,a=f,l=u;break}if(C===l){g=!0,l=f,a=u;break}C=C.sibling}if(!g)throw Error(r(189))}}if(a.alternate!==l)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function M(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=M(e),n!==null)return n;e=e.sibling}return null}var x=Object.assign,v=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),L=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),j=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),B=Symbol.for("react.activity"),Y=Symbol.for("react.memo_cache_sentinel"),z=Symbol.iterator;function K(e){return e===null||typeof e!="object"?null:(e=z&&e[z]||e["@@iterator"],typeof e=="function"?e:null)}var oe=Symbol.for("react.client.reference");function le(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===oe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case w:return"Fragment";case _:return"Profiler";case S:return"StrictMode";case X:return"Suspense";case P:return"SuspenseList";case B:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case T:return"Portal";case L:return e.displayName||"Context";case D:return(e._context.displayName||"Context")+".Consumer";case O:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case j:return n=e.displayName||null,n!==null?n:le(e.type)||"Memo";case R:n=e._payload,e=e._init;try{return le(e(n))}catch{}}return null}var H=Array.isArray,U=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie={pending:!1,data:null,method:null,action:null},de=[],_e=-1;function Ue(e){return{current:e}}function Re(e){0>_e||(e.current=de[_e],de[_e]=null,_e--)}function He(e,n){_e++,de[_e]=e.current,e.current=n}var et=Ue(null),Ze=Ue(null),he=Ue(null),De=Ue(null);function ve(e,n){switch(He(he,n),He(Ze,e),He(et,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?eg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=eg(n),e=tg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Re(et),He(et,e)}function Ve(){Re(et),Re(Ze),Re(he)}function Je(e){e.memoizedState!==null&&He(De,e);var n=et.current,a=tg(n,e.type);n!==a&&(He(Ze,e),He(et,a))}function Ye(e){Ze.current===e&&(Re(et),Re(Ze)),De.current===e&&(Re(De),Ol._currentValue=ie)}var Bt,ct;function ut(e){if(Bt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Bt=n&&n[1]||"",ct=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Bt+e+ct}var At=!1;function Ie(e,n){if(!e||At)return"";At=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(n){var ge=function(){throw Error()};if(Object.defineProperty(ge.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ge,[])}catch(se){var ne=se}Reflect.construct(e,[],ge)}else{try{ge.call()}catch(se){ne=se}e.call(ge.prototype)}}else{try{throw Error()}catch(se){ne=se}(ge=e())&&typeof ge.catch=="function"&&ge.catch(function(){})}}catch(se){if(se&&ne&&typeof se.stack=="string")return[se.stack,ne.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=l.DetermineComponentFrameRoot(),g=f[0],C=f[1];if(g&&C){var F=g.split(`
`),J=C.split(`
`);for(u=l=0;l<F.length&&!F[l].includes("DetermineComponentFrameRoot");)l++;for(;u<J.length&&!J[u].includes("DetermineComponentFrameRoot");)u++;if(l===F.length||u===J.length)for(l=F.length-1,u=J.length-1;1<=l&&0<=u&&F[l]!==J[u];)u--;for(;1<=l&&0<=u;l--,u--)if(F[l]!==J[u]){if(l!==1||u!==1)do if(l--,u--,0>u||F[l]!==J[u]){var ue=`
`+F[l].replace(" at new "," at ");return e.displayName&&ue.includes("<anonymous>")&&(ue=ue.replace("<anonymous>",e.displayName)),ue}while(1<=l&&0<=u);break}}}finally{At=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ut(a):""}function rt(e,n){switch(e.tag){case 26:case 27:case 5:return ut(e.type);case 16:return ut("Lazy");case 13:return e.child!==n&&n!==null?ut("Suspense Fallback"):ut("Suspense");case 19:return ut("SuspenseList");case 0:case 15:return Ie(e.type,!1);case 11:return Ie(e.type.render,!1);case 1:return Ie(e.type,!0);case 31:return ut("Activity");default:return""}}function xt(e){try{var n="",a=null;do n+=rt(e,a),a=e,e=e.return;while(e);return n}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var kt=Object.prototype.hasOwnProperty,k=s.unstable_scheduleCallback,Qt=s.unstable_cancelCallback,ht=s.unstable_shouldYield,jt=s.unstable_requestPaint,be=s.unstable_now,en=s.unstable_getCurrentPriorityLevel,N=s.unstable_ImmediatePriority,E=s.unstable_UserBlockingPriority,Z=s.unstable_NormalPriority,me=s.unstable_LowPriority,Se=s.unstable_IdlePriority,ye=s.log,Ce=s.unstable_setDisableYieldValue,re=null,ce=null;function we(e){if(typeof ye=="function"&&Ce(e),ce&&typeof ce.setStrictMode=="function")try{ce.setStrictMode(re,e)}catch{}}var Ne=Math.clz32?Math.clz32:it,Te=Math.log,Ee=Math.LN2;function it(e){return e>>>=0,e===0?32:31-(Te(e)/Ee|0)|0}var at=256,mt=262144,G=4194304;function Me(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function fe(e,n,a){var l=e.pendingLanes;if(l===0)return 0;var u=0,f=e.suspendedLanes,g=e.pingedLanes;e=e.warmLanes;var C=l&134217727;return C!==0?(l=C&~f,l!==0?u=Me(l):(g&=C,g!==0?u=Me(g):a||(a=C&~e,a!==0&&(u=Me(a))))):(C=l&~f,C!==0?u=Me(C):g!==0?u=Me(g):a||(a=l&~e,a!==0&&(u=Me(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Pe(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Ae(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xe(){var e=G;return G<<=1,(G&62914560)===0&&(G=4194304),e}function Xe(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function tt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function sn(e,n,a,l,u,f){var g=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var C=e.entanglements,F=e.expirationTimes,J=e.hiddenUpdates;for(a=g&~a;0<a;){var ue=31-Ne(a),ge=1<<ue;C[ue]=0,F[ue]=-1;var ne=J[ue];if(ne!==null)for(J[ue]=null,ue=0;ue<ne.length;ue++){var se=ne[ue];se!==null&&(se.lane&=-536870913)}a&=~ge}l!==0&&Ut(e,l,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(g&~n))}function Ut(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var l=31-Ne(n);e.entangledLanes|=n,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function hi(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var l=31-Ne(a),u=1<<l;u&n|e[l]&n&&(e[l]|=n),a&=~u}}function $n(e,n){var a=n&-n;return a=(a&42)!==0?1:fs(a),(a&(e.suspendedLanes|n))!==0?0:a}function fs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Wr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function qr(){var e=I.p;return e!==0?e:(e=window.event,e===void 0?32:Eg(e.type))}function Yr(e,n){var a=I.p;try{return I.p=e,n()}finally{I.p=a}}var Fn=Math.random().toString(36).slice(2),cn="__reactFiber$"+Fn,Nn="__reactProps$"+Fn,Qi="__reactContainer$"+Fn,Ra="__reactEvents$"+Fn,no="__reactListeners$"+Fn,ks="__reactHandles$"+Fn,Zr="__reactResources$"+Fn,Ca="__reactMarker$"+Fn;function Kr(e){delete e[cn],delete e[Nn],delete e[Ra],delete e[no],delete e[ks]}function wa(e){var n=e[cn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Qi]||a[cn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=og(e);e!==null;){if(a=e[cn])return a;e=og(e)}return n}e=a,a=e.parentNode}return null}function Da(e){if(e=e[cn]||e[Qi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function ds(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function Na(e){var n=e[Zr];return n||(n=e[Zr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function mn(e){e[Ca]=!0}var io=new Set,A={};function W(e,n){te(e,n),te(e+"Capture",n)}function te(e,n){for(A[e]=n,e=0;e<n.length;e++)io.add(n[e])}var $=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ee={},Oe={};function ze(e){return kt.call(Oe,e)?!0:kt.call(ee,e)?!1:$.test(e)?Oe[e]=!0:(ee[e]=!0,!1)}function Le(e,n,a){if(ze(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var l=n.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function ke(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Ge(e,n,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+l)}}function Ke(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function lt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function qe(e,n,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var u=l.get,f=l.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(g){a=""+g,f.call(this,g)}}),Object.defineProperty(e,n,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ct(e){if(!e._valueTracker){var n=lt(e)?"checked":"value";e._valueTracker=qe(e,n,""+e[n])}}function tn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),l="";return e&&(l=lt(e)?e.checked?"true":"false":e.value),e=l,e!==a?(n.setValue(e),!0):!1}function Zt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ft=/[\n"\\]/g;function It(e){return e.replace(Ft,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Fe(e,n,a,l,u,f,g,C){e.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.type=g:e.removeAttribute("type"),n!=null?g==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Ke(n)):e.value!==""+Ke(n)&&(e.value=""+Ke(n)):g!=="submit"&&g!=="reset"||e.removeAttribute("value"),n!=null?gt(e,g,Ke(n)):a!=null?gt(e,g,Ke(a)):l!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?e.name=""+Ke(C):e.removeAttribute("name")}function In(e,n,a,l,u,f,g,C){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Ct(e);return}a=a!=null?""+Ke(a):"",n=n!=null?""+Ke(n):a,C||n===e.value||(e.value=n),e.defaultValue=n}l=l??u,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=C?e.checked:!!l,e.defaultChecked=!!l,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(e.name=g),Ct(e)}function gt(e,n,a){n==="number"&&Zt(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Mn(e,n,a,l){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&l&&(e[a].defaultSelected=!0)}else{for(a=""+Ke(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,l&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function ei(e,n,a){if(n!=null&&(n=""+Ke(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Ke(a):""}function Ti(e,n,a,l){if(n==null){if(l!=null){if(a!=null)throw Error(r(92));if(H(l)){if(1<l.length)throw Error(r(93));l=l[0]}a=l}a==null&&(a=""),n=a}a=Ke(n),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),Ct(e)}function ti(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var zt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function nn(e,n,a){var l=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":l?e.setProperty(n,a):typeof a!="number"||a===0||zt.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Ai(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||n!=null&&n.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var u in n)l=n[u],n.hasOwnProperty(u)&&a[u]!==l&&nn(e,u,l)}else for(var f in n)n.hasOwnProperty(f)&&nn(e,f,n[f])}function Ot(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ii=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ua=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function hs(e){return Ua.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ji(){}var eu=null;function tu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var js=null,Xs=null;function $h(e){var n=Da(e);if(n&&(e=n.stateNode)){var a=e[Nn]||null;e:switch(e=n.stateNode,n.type){case"input":if(Fe(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+It(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var l=a[n];if(l!==e&&l.form===e.form){var u=l[Nn]||null;if(!u)throw Error(r(90));Fe(l,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)l=a[n],l.form===e.form&&tn(l)}break e;case"textarea":ei(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&Mn(e,!!a.multiple,n,!1)}}}var nu=!1;function ep(e,n,a){if(nu)return e(n,a);nu=!0;try{var l=e(n);return l}finally{if(nu=!1,(js!==null||Xs!==null)&&(Xo(),js&&(n=js,e=Xs,Xs=js=null,$h(n),e)))for(n=0;n<e.length;n++)$h(e[n])}}function Qr(e,n){var a=e.stateNode;if(a===null)return null;var l=a[Nn]||null;if(l===null)return null;a=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var $i=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),iu=!1;if($i)try{var Jr={};Object.defineProperty(Jr,"passive",{get:function(){iu=!0}}),window.addEventListener("test",Jr,Jr),window.removeEventListener("test",Jr,Jr)}catch{iu=!1}var La=null,au=null,ao=null;function tp(){if(ao)return ao;var e,n=au,a=n.length,l,u="value"in La?La.value:La.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var g=a-e;for(l=1;l<=g&&n[a-l]===u[f-l];l++);return ao=u.slice(e,1<l?1-l:void 0)}function so(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ro(){return!0}function np(){return!1}function Xn(e){function n(a,l,u,f,g){this._reactName=a,this._targetInst=u,this.type=l,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var C in e)e.hasOwnProperty(C)&&(a=e[C],this[C]=a?a(f):f[C]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ro:np,this.isPropagationStopped=np,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ro)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ro)},persist:function(){},isPersistent:ro}),n}var ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lo=Xn(ps),$r=x({},ps,{view:0,detail:0}),Cv=Xn($r),su,ru,el,oo=x({},$r,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ou,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==el&&(el&&e.type==="mousemove"?(su=e.screenX-el.screenX,ru=e.screenY-el.screenY):ru=su=0,el=e),su)},movementY:function(e){return"movementY"in e?e.movementY:ru}}),ip=Xn(oo),wv=x({},oo,{dataTransfer:0}),Dv=Xn(wv),Nv=x({},$r,{relatedTarget:0}),lu=Xn(Nv),Uv=x({},ps,{animationName:0,elapsedTime:0,pseudoElement:0}),Lv=Xn(Uv),Ov=x({},ps,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Pv=Xn(Ov),Bv=x({},ps,{data:0}),ap=Xn(Bv),Fv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Iv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=zv[e])?!!n[e]:!1}function ou(){return Hv}var Gv=x({},$r,{key:function(e){if(e.key){var n=Fv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=so(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Iv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ou,charCode:function(e){return e.type==="keypress"?so(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?so(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Vv=Xn(Gv),kv=x({},oo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sp=Xn(kv),jv=x({},$r,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ou}),Xv=Xn(jv),Wv=x({},ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),qv=Xn(Wv),Yv=x({},oo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Zv=Xn(Yv),Kv=x({},ps,{newState:0,oldState:0}),Qv=Xn(Kv),Jv=[9,13,27,32],cu=$i&&"CompositionEvent"in window,tl=null;$i&&"documentMode"in document&&(tl=document.documentMode);var $v=$i&&"TextEvent"in window&&!tl,rp=$i&&(!cu||tl&&8<tl&&11>=tl),lp=" ",op=!1;function cp(e,n){switch(e){case"keyup":return Jv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function up(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ws=!1;function e_(e,n){switch(e){case"compositionend":return up(n);case"keypress":return n.which!==32?null:(op=!0,lp);case"textInput":return e=n.data,e===lp&&op?null:e;default:return null}}function t_(e,n){if(Ws)return e==="compositionend"||!cu&&cp(e,n)?(e=tp(),ao=au=La=null,Ws=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return rp&&n.locale!=="ko"?null:n.data;default:return null}}var n_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!n_[e.type]:n==="textarea"}function dp(e,n,a,l){js?Xs?Xs.push(l):Xs=[l]:js=l,n=Jo(n,"onChange"),0<n.length&&(a=new lo("onChange","change",null,a,l),e.push({event:a,listeners:n}))}var nl=null,il=null;function i_(e){Y0(e,0)}function co(e){var n=ds(e);if(tn(n))return e}function hp(e,n){if(e==="change")return n}var pp=!1;if($i){var uu;if($i){var fu="oninput"in document;if(!fu){var mp=document.createElement("div");mp.setAttribute("oninput","return;"),fu=typeof mp.oninput=="function"}uu=fu}else uu=!1;pp=uu&&(!document.documentMode||9<document.documentMode)}function gp(){nl&&(nl.detachEvent("onpropertychange",vp),il=nl=null)}function vp(e){if(e.propertyName==="value"&&co(il)){var n=[];dp(n,il,e,tu(e)),ep(i_,n)}}function a_(e,n,a){e==="focusin"?(gp(),nl=n,il=a,nl.attachEvent("onpropertychange",vp)):e==="focusout"&&gp()}function s_(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return co(il)}function r_(e,n){if(e==="click")return co(n)}function l_(e,n){if(e==="input"||e==="change")return co(n)}function o_(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ni=typeof Object.is=="function"?Object.is:o_;function al(e,n){if(ni(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),l=Object.keys(n);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var u=a[l];if(!kt.call(n,u)||!ni(e[u],n[u]))return!1}return!0}function _p(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xp(e,n){var a=_p(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=n&&l>=n)return{node:a,offset:n-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=_p(a)}}function Sp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Sp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Mp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Zt(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Zt(e.document)}return n}function du(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var c_=$i&&"documentMode"in document&&11>=document.documentMode,qs=null,hu=null,sl=null,pu=!1;function bp(e,n,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;pu||qs==null||qs!==Zt(l)||(l=qs,"selectionStart"in l&&du(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),sl&&al(sl,l)||(sl=l,l=Jo(hu,"onSelect"),0<l.length&&(n=new lo("onSelect","select",null,n,a),e.push({event:n,listeners:l}),n.target=qs)))}function ms(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Ys={animationend:ms("Animation","AnimationEnd"),animationiteration:ms("Animation","AnimationIteration"),animationstart:ms("Animation","AnimationStart"),transitionrun:ms("Transition","TransitionRun"),transitionstart:ms("Transition","TransitionStart"),transitioncancel:ms("Transition","TransitionCancel"),transitionend:ms("Transition","TransitionEnd")},mu={},yp={};$i&&(yp=document.createElement("div").style,"AnimationEvent"in window||(delete Ys.animationend.animation,delete Ys.animationiteration.animation,delete Ys.animationstart.animation),"TransitionEvent"in window||delete Ys.transitionend.transition);function gs(e){if(mu[e])return mu[e];if(!Ys[e])return e;var n=Ys[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in yp)return mu[e]=n[a];return e}var Ep=gs("animationend"),Tp=gs("animationiteration"),Ap=gs("animationstart"),u_=gs("transitionrun"),f_=gs("transitionstart"),d_=gs("transitioncancel"),Rp=gs("transitionend"),Cp=new Map,gu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");gu.push("scrollEnd");function Ri(e,n){Cp.set(e,n),W(n,[e])}var uo=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},pi=[],Zs=0,vu=0;function fo(){for(var e=Zs,n=vu=Zs=0;n<e;){var a=pi[n];pi[n++]=null;var l=pi[n];pi[n++]=null;var u=pi[n];pi[n++]=null;var f=pi[n];if(pi[n++]=null,l!==null&&u!==null){var g=l.pending;g===null?u.next=u:(u.next=g.next,g.next=u),l.pending=u}f!==0&&wp(a,u,f)}}function ho(e,n,a,l){pi[Zs++]=e,pi[Zs++]=n,pi[Zs++]=a,pi[Zs++]=l,vu|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function _u(e,n,a,l){return ho(e,n,a,l),po(e)}function vs(e,n){return ho(e,null,null,n),po(e)}function wp(e,n,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,l=f.alternate,l!==null&&(l.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Ne(a),e=f.hiddenUpdates,l=e[u],l===null?e[u]=[n]:l.push(n),n.lane=a|536870912),f):null}function po(e){if(50<Rl)throw Rl=0,Cf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Ks={};function h_(e,n,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ii(e,n,a,l){return new h_(e,n,a,l)}function xu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ea(e,n){var a=e.alternate;return a===null?(a=ii(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Dp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function mo(e,n,a,l,u,f){var g=0;if(l=e,typeof e=="function")xu(e)&&(g=1);else if(typeof e=="string")g=_x(e,a,et.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case B:return e=ii(31,a,n,u),e.elementType=B,e.lanes=f,e;case w:return _s(a.children,u,f,n);case S:g=8,u|=24;break;case _:return e=ii(12,a,n,u|2),e.elementType=_,e.lanes=f,e;case X:return e=ii(13,a,n,u),e.elementType=X,e.lanes=f,e;case P:return e=ii(19,a,n,u),e.elementType=P,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:g=10;break e;case D:g=9;break e;case O:g=11;break e;case j:g=14;break e;case R:g=16,l=null;break e}g=29,a=Error(r(130,e===null?"null":typeof e,"")),l=null}return n=ii(g,a,n,u),n.elementType=e,n.type=l,n.lanes=f,n}function _s(e,n,a,l){return e=ii(7,e,l,n),e.lanes=a,e}function Su(e,n,a){return e=ii(6,e,null,n),e.lanes=a,e}function Np(e){var n=ii(18,null,null,0);return n.stateNode=e,n}function Mu(e,n,a){return n=ii(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Up=new WeakMap;function mi(e,n){if(typeof e=="object"&&e!==null){var a=Up.get(e);return a!==void 0?a:(n={value:e,source:n,stack:xt(n)},Up.set(e,n),n)}return{value:e,source:n,stack:xt(n)}}var Qs=[],Js=0,go=null,rl=0,gi=[],vi=0,Oa=null,zi=1,Hi="";function ta(e,n){Qs[Js++]=rl,Qs[Js++]=go,go=e,rl=n}function Lp(e,n,a){gi[vi++]=zi,gi[vi++]=Hi,gi[vi++]=Oa,Oa=e;var l=zi;e=Hi;var u=32-Ne(l)-1;l&=~(1<<u),a+=1;var f=32-Ne(n)+u;if(30<f){var g=u-u%5;f=(l&(1<<g)-1).toString(32),l>>=g,u-=g,zi=1<<32-Ne(n)+u|a<<u|l,Hi=f+e}else zi=1<<f|a<<u|l,Hi=e}function bu(e){e.return!==null&&(ta(e,1),Lp(e,1,0))}function yu(e){for(;e===go;)go=Qs[--Js],Qs[Js]=null,rl=Qs[--Js],Qs[Js]=null;for(;e===Oa;)Oa=gi[--vi],gi[vi]=null,Hi=gi[--vi],gi[vi]=null,zi=gi[--vi],gi[vi]=null}function Op(e,n){gi[vi++]=zi,gi[vi++]=Hi,gi[vi++]=Oa,zi=n.id,Hi=n.overflow,Oa=e}var Un=null,Jt=null,bt=!1,Pa=null,_i=!1,Eu=Error(r(519));function Ba(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ll(mi(n,e)),Eu}function Pp(e){var n=e.stateNode,a=e.type,l=e.memoizedProps;switch(n[cn]=e,n[Nn]=l,a){case"dialog":_t("cancel",n),_t("close",n);break;case"iframe":case"object":case"embed":_t("load",n);break;case"video":case"audio":for(a=0;a<wl.length;a++)_t(wl[a],n);break;case"source":_t("error",n);break;case"img":case"image":case"link":_t("error",n),_t("load",n);break;case"details":_t("toggle",n);break;case"input":_t("invalid",n),In(n,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":_t("invalid",n);break;case"textarea":_t("invalid",n),Ti(n,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||l.suppressHydrationWarning===!0||J0(n.textContent,a)?(l.popover!=null&&(_t("beforetoggle",n),_t("toggle",n)),l.onScroll!=null&&_t("scroll",n),l.onScrollEnd!=null&&_t("scrollend",n),l.onClick!=null&&(n.onclick=Ji),n=!0):n=!1,n||Ba(e,!0)}function Bp(e){for(Un=e.return;Un;)switch(Un.tag){case 5:case 31:case 13:_i=!1;return;case 27:case 3:_i=!0;return;default:Un=Un.return}}function $s(e){if(e!==Un)return!1;if(!bt)return Bp(e),bt=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||kf(e.type,e.memoizedProps)),a=!a),a&&Jt&&Ba(e),Bp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Jt=lg(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Jt=lg(e)}else n===27?(n=Jt,Ka(e.type)?(e=Yf,Yf=null,Jt=e):Jt=n):Jt=Un?Si(e.stateNode.nextSibling):null;return!0}function xs(){Jt=Un=null,bt=!1}function Tu(){var e=Pa;return e!==null&&(Zn===null?Zn=e:Zn.push.apply(Zn,e),Pa=null),e}function ll(e){Pa===null?Pa=[e]:Pa.push(e)}var Au=Ue(null),Ss=null,na=null;function Fa(e,n,a){He(Au,n._currentValue),n._currentValue=a}function ia(e){e._currentValue=Au.current,Re(Au)}function Ru(e,n,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),e===a)break;e=e.return}}function Cu(e,n,a,l){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var g=u.child;f=f.firstContext;e:for(;f!==null;){var C=f;f=u;for(var F=0;F<n.length;F++)if(C.context===n[F]){f.lanes|=a,C=f.alternate,C!==null&&(C.lanes|=a),Ru(f.return,a,e),l||(g=null);break e}f=C.next}}else if(u.tag===18){if(g=u.return,g===null)throw Error(r(341));g.lanes|=a,f=g.alternate,f!==null&&(f.lanes|=a),Ru(g,a,e),g=null}else g=u.child;if(g!==null)g.return=u;else for(g=u;g!==null;){if(g===e){g=null;break}if(u=g.sibling,u!==null){u.return=g.return,g=u;break}g=g.return}u=g}}function er(e,n,a,l){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var g=u.alternate;if(g===null)throw Error(r(387));if(g=g.memoizedProps,g!==null){var C=u.type;ni(u.pendingProps.value,g.value)||(e!==null?e.push(C):e=[C])}}else if(u===De.current){if(g=u.alternate,g===null)throw Error(r(387));g.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Ol):e=[Ol])}u=u.return}e!==null&&Cu(n,e,a,l),n.flags|=262144}function vo(e){for(e=e.firstContext;e!==null;){if(!ni(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ms(e){Ss=e,na=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ln(e){return Fp(Ss,e)}function _o(e,n){return Ss===null&&Ms(e),Fp(e,n)}function Fp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},na===null){if(e===null)throw Error(r(308));na=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else na=na.next=n;return a}var p_=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},m_=s.unstable_scheduleCallback,g_=s.unstable_NormalPriority,gn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function wu(){return{controller:new p_,data:new Map,refCount:0}}function ol(e){e.refCount--,e.refCount===0&&m_(g_,function(){e.controller.abort()})}var cl=null,Du=0,tr=0,nr=null;function v_(e,n){if(cl===null){var a=cl=[];Du=0,tr=Of(),nr={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Du++,n.then(Ip,Ip),n}function Ip(){if(--Du===0&&cl!==null){nr!==null&&(nr.status="fulfilled");var e=cl;cl=null,tr=0,nr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function __(e,n){var a=[],l={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){l.status="fulfilled",l.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(l.status="rejected",l.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),l}var zp=U.S;U.S=function(e,n){b0=be(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&v_(e,n),zp!==null&&zp(e,n)};var bs=Ue(null);function Nu(){var e=bs.current;return e!==null?e:Kt.pooledCache}function xo(e,n){n===null?He(bs,bs.current):He(bs,n.pool)}function Hp(){var e=Nu();return e===null?null:{parent:gn._currentValue,pool:e}}var ir=Error(r(460)),Uu=Error(r(474)),So=Error(r(542)),Mo={then:function(){}};function Gp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Vp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Ji,Ji),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,jp(e),e;default:if(typeof n.status=="string")n.then(Ji,Ji);else{if(e=Kt,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(l){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=l}},function(l){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=l}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,jp(e),e}throw Es=n,ir}}function ys(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Es=a,ir):a}}var Es=null;function kp(){if(Es===null)throw Error(r(459));var e=Es;return Es=null,e}function jp(e){if(e===ir||e===So)throw Error(r(483))}var ar=null,ul=0;function bo(e){var n=ul;return ul+=1,ar===null&&(ar=[]),Vp(ar,e,n)}function fl(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function yo(e,n){throw n.$$typeof===v?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Xp(e){function n(q,V){if(e){var Q=q.deletions;Q===null?(q.deletions=[V],q.flags|=16):Q.push(V)}}function a(q,V){if(!e)return null;for(;V!==null;)n(q,V),V=V.sibling;return null}function l(q){for(var V=new Map;q!==null;)q.key!==null?V.set(q.key,q):V.set(q.index,q),q=q.sibling;return V}function u(q,V){return q=ea(q,V),q.index=0,q.sibling=null,q}function f(q,V,Q){return q.index=Q,e?(Q=q.alternate,Q!==null?(Q=Q.index,Q<V?(q.flags|=67108866,V):Q):(q.flags|=67108866,V)):(q.flags|=1048576,V)}function g(q){return e&&q.alternate===null&&(q.flags|=67108866),q}function C(q,V,Q,pe){return V===null||V.tag!==6?(V=Su(Q,q.mode,pe),V.return=q,V):(V=u(V,Q),V.return=q,V)}function F(q,V,Q,pe){var Qe=Q.type;return Qe===w?ue(q,V,Q.props.children,pe,Q.key):V!==null&&(V.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===R&&ys(Qe)===V.type)?(V=u(V,Q.props),fl(V,Q),V.return=q,V):(V=mo(Q.type,Q.key,Q.props,null,q.mode,pe),fl(V,Q),V.return=q,V)}function J(q,V,Q,pe){return V===null||V.tag!==4||V.stateNode.containerInfo!==Q.containerInfo||V.stateNode.implementation!==Q.implementation?(V=Mu(Q,q.mode,pe),V.return=q,V):(V=u(V,Q.children||[]),V.return=q,V)}function ue(q,V,Q,pe,Qe){return V===null||V.tag!==7?(V=_s(Q,q.mode,pe,Qe),V.return=q,V):(V=u(V,Q),V.return=q,V)}function ge(q,V,Q){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=Su(""+V,q.mode,Q),V.return=q,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case b:return Q=mo(V.type,V.key,V.props,null,q.mode,Q),fl(Q,V),Q.return=q,Q;case T:return V=Mu(V,q.mode,Q),V.return=q,V;case R:return V=ys(V),ge(q,V,Q)}if(H(V)||K(V))return V=_s(V,q.mode,Q,null),V.return=q,V;if(typeof V.then=="function")return ge(q,bo(V),Q);if(V.$$typeof===L)return ge(q,_o(q,V),Q);yo(q,V)}return null}function ne(q,V,Q,pe){var Qe=V!==null?V.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Qe!==null?null:C(q,V,""+Q,pe);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case b:return Q.key===Qe?F(q,V,Q,pe):null;case T:return Q.key===Qe?J(q,V,Q,pe):null;case R:return Q=ys(Q),ne(q,V,Q,pe)}if(H(Q)||K(Q))return Qe!==null?null:ue(q,V,Q,pe,null);if(typeof Q.then=="function")return ne(q,V,bo(Q),pe);if(Q.$$typeof===L)return ne(q,V,_o(q,Q),pe);yo(q,Q)}return null}function se(q,V,Q,pe,Qe){if(typeof pe=="string"&&pe!==""||typeof pe=="number"||typeof pe=="bigint")return q=q.get(Q)||null,C(V,q,""+pe,Qe);if(typeof pe=="object"&&pe!==null){switch(pe.$$typeof){case b:return q=q.get(pe.key===null?Q:pe.key)||null,F(V,q,pe,Qe);case T:return q=q.get(pe.key===null?Q:pe.key)||null,J(V,q,pe,Qe);case R:return pe=ys(pe),se(q,V,Q,pe,Qe)}if(H(pe)||K(pe))return q=q.get(Q)||null,ue(V,q,pe,Qe,null);if(typeof pe.then=="function")return se(q,V,Q,bo(pe),Qe);if(pe.$$typeof===L)return se(q,V,Q,_o(V,pe),Qe);yo(V,pe)}return null}function je(q,V,Q,pe){for(var Qe=null,wt=null,We=V,ft=V=0,Mt=null;We!==null&&ft<Q.length;ft++){We.index>ft?(Mt=We,We=null):Mt=We.sibling;var Dt=ne(q,We,Q[ft],pe);if(Dt===null){We===null&&(We=Mt);break}e&&We&&Dt.alternate===null&&n(q,We),V=f(Dt,V,ft),wt===null?Qe=Dt:wt.sibling=Dt,wt=Dt,We=Mt}if(ft===Q.length)return a(q,We),bt&&ta(q,ft),Qe;if(We===null){for(;ft<Q.length;ft++)We=ge(q,Q[ft],pe),We!==null&&(V=f(We,V,ft),wt===null?Qe=We:wt.sibling=We,wt=We);return bt&&ta(q,ft),Qe}for(We=l(We);ft<Q.length;ft++)Mt=se(We,q,ft,Q[ft],pe),Mt!==null&&(e&&Mt.alternate!==null&&We.delete(Mt.key===null?ft:Mt.key),V=f(Mt,V,ft),wt===null?Qe=Mt:wt.sibling=Mt,wt=Mt);return e&&We.forEach(function(ts){return n(q,ts)}),bt&&ta(q,ft),Qe}function $e(q,V,Q,pe){if(Q==null)throw Error(r(151));for(var Qe=null,wt=null,We=V,ft=V=0,Mt=null,Dt=Q.next();We!==null&&!Dt.done;ft++,Dt=Q.next()){We.index>ft?(Mt=We,We=null):Mt=We.sibling;var ts=ne(q,We,Dt.value,pe);if(ts===null){We===null&&(We=Mt);break}e&&We&&ts.alternate===null&&n(q,We),V=f(ts,V,ft),wt===null?Qe=ts:wt.sibling=ts,wt=ts,We=Mt}if(Dt.done)return a(q,We),bt&&ta(q,ft),Qe;if(We===null){for(;!Dt.done;ft++,Dt=Q.next())Dt=ge(q,Dt.value,pe),Dt!==null&&(V=f(Dt,V,ft),wt===null?Qe=Dt:wt.sibling=Dt,wt=Dt);return bt&&ta(q,ft),Qe}for(We=l(We);!Dt.done;ft++,Dt=Q.next())Dt=se(We,q,ft,Dt.value,pe),Dt!==null&&(e&&Dt.alternate!==null&&We.delete(Dt.key===null?ft:Dt.key),V=f(Dt,V,ft),wt===null?Qe=Dt:wt.sibling=Dt,wt=Dt);return e&&We.forEach(function(wx){return n(q,wx)}),bt&&ta(q,ft),Qe}function qt(q,V,Q,pe){if(typeof Q=="object"&&Q!==null&&Q.type===w&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case b:e:{for(var Qe=Q.key;V!==null;){if(V.key===Qe){if(Qe=Q.type,Qe===w){if(V.tag===7){a(q,V.sibling),pe=u(V,Q.props.children),pe.return=q,q=pe;break e}}else if(V.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===R&&ys(Qe)===V.type){a(q,V.sibling),pe=u(V,Q.props),fl(pe,Q),pe.return=q,q=pe;break e}a(q,V);break}else n(q,V);V=V.sibling}Q.type===w?(pe=_s(Q.props.children,q.mode,pe,Q.key),pe.return=q,q=pe):(pe=mo(Q.type,Q.key,Q.props,null,q.mode,pe),fl(pe,Q),pe.return=q,q=pe)}return g(q);case T:e:{for(Qe=Q.key;V!==null;){if(V.key===Qe)if(V.tag===4&&V.stateNode.containerInfo===Q.containerInfo&&V.stateNode.implementation===Q.implementation){a(q,V.sibling),pe=u(V,Q.children||[]),pe.return=q,q=pe;break e}else{a(q,V);break}else n(q,V);V=V.sibling}pe=Mu(Q,q.mode,pe),pe.return=q,q=pe}return g(q);case R:return Q=ys(Q),qt(q,V,Q,pe)}if(H(Q))return je(q,V,Q,pe);if(K(Q)){if(Qe=K(Q),typeof Qe!="function")throw Error(r(150));return Q=Qe.call(Q),$e(q,V,Q,pe)}if(typeof Q.then=="function")return qt(q,V,bo(Q),pe);if(Q.$$typeof===L)return qt(q,V,_o(q,Q),pe);yo(q,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,V!==null&&V.tag===6?(a(q,V.sibling),pe=u(V,Q),pe.return=q,q=pe):(a(q,V),pe=Su(Q,q.mode,pe),pe.return=q,q=pe),g(q)):a(q,V)}return function(q,V,Q,pe){try{ul=0;var Qe=qt(q,V,Q,pe);return ar=null,Qe}catch(We){if(We===ir||We===So)throw We;var wt=ii(29,We,null,q.mode);return wt.lanes=pe,wt.return=q,wt}finally{}}}var Ts=Xp(!0),Wp=Xp(!1),Ia=!1;function Lu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ou(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function za(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ha(e,n,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Lt&2)!==0){var u=l.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),l.pending=n,n=po(e),wp(e,null,a),n}return ho(e,l,n,a),po(e)}function dl(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var l=n.lanes;l&=e.pendingLanes,a|=l,n.lanes=a,hi(e,a)}}function Pu(e,n){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=g:f=f.next=g,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Bu=!1;function hl(){if(Bu){var e=nr;if(e!==null)throw e}}function pl(e,n,a,l){Bu=!1;var u=e.updateQueue;Ia=!1;var f=u.firstBaseUpdate,g=u.lastBaseUpdate,C=u.shared.pending;if(C!==null){u.shared.pending=null;var F=C,J=F.next;F.next=null,g===null?f=J:g.next=J,g=F;var ue=e.alternate;ue!==null&&(ue=ue.updateQueue,C=ue.lastBaseUpdate,C!==g&&(C===null?ue.firstBaseUpdate=J:C.next=J,ue.lastBaseUpdate=F))}if(f!==null){var ge=u.baseState;g=0,ue=J=F=null,C=f;do{var ne=C.lane&-536870913,se=ne!==C.lane;if(se?(St&ne)===ne:(l&ne)===ne){ne!==0&&ne===tr&&(Bu=!0),ue!==null&&(ue=ue.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});e:{var je=e,$e=C;ne=n;var qt=a;switch($e.tag){case 1:if(je=$e.payload,typeof je=="function"){ge=je.call(qt,ge,ne);break e}ge=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=$e.payload,ne=typeof je=="function"?je.call(qt,ge,ne):je,ne==null)break e;ge=x({},ge,ne);break e;case 2:Ia=!0}}ne=C.callback,ne!==null&&(e.flags|=64,se&&(e.flags|=8192),se=u.callbacks,se===null?u.callbacks=[ne]:se.push(ne))}else se={lane:ne,tag:C.tag,payload:C.payload,callback:C.callback,next:null},ue===null?(J=ue=se,F=ge):ue=ue.next=se,g|=ne;if(C=C.next,C===null){if(C=u.shared.pending,C===null)break;se=C,C=se.next,se.next=null,u.lastBaseUpdate=se,u.shared.pending=null}}while(!0);ue===null&&(F=ge),u.baseState=F,u.firstBaseUpdate=J,u.lastBaseUpdate=ue,f===null&&(u.shared.lanes=0),Xa|=g,e.lanes=g,e.memoizedState=ge}}function qp(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Yp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)qp(a[e],n)}var sr=Ue(null),Eo=Ue(0);function Zp(e,n){e=da,He(Eo,e),He(sr,n),da=e|n.baseLanes}function Fu(){He(Eo,da),He(sr,sr.current)}function Iu(){da=Eo.current,Re(sr),Re(Eo)}var ai=Ue(null),xi=null;function Ga(e){var n=e.alternate;He(un,un.current&1),He(ai,e),xi===null&&(n===null||sr.current!==null||n.memoizedState!==null)&&(xi=e)}function zu(e){He(un,un.current),He(ai,e),xi===null&&(xi=e)}function Kp(e){e.tag===22?(He(un,un.current),He(ai,e),xi===null&&(xi=e)):Va()}function Va(){He(un,un.current),He(ai,ai.current)}function si(e){Re(ai),xi===e&&(xi=null),Re(un)}var un=Ue(0);function To(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Wf(a)||qf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var aa=0,ot=null,Xt=null,vn=null,Ao=!1,rr=!1,As=!1,Ro=0,ml=0,lr=null,x_=0;function rn(){throw Error(r(321))}function Hu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!ni(e[a],n[a]))return!1;return!0}function Gu(e,n,a,l,u,f){return aa=f,ot=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,U.H=e===null||e.memoizedState===null?Lm:nf,As=!1,f=a(l,u),As=!1,rr&&(f=Jp(n,a,l,u)),Qp(e),f}function Qp(e){U.H=_l;var n=Xt!==null&&Xt.next!==null;if(aa=0,vn=Xt=ot=null,Ao=!1,ml=0,lr=null,n)throw Error(r(300));e===null||_n||(e=e.dependencies,e!==null&&vo(e)&&(_n=!0))}function Jp(e,n,a,l){ot=e;var u=0;do{if(rr&&(lr=null),ml=0,rr=!1,25<=u)throw Error(r(301));if(u+=1,vn=Xt=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}U.H=Om,f=n(a,l)}while(rr);return f}function S_(){var e=U.H,n=e.useState()[0];return n=typeof n.then=="function"?gl(n):n,e=e.useState()[0],(Xt!==null?Xt.memoizedState:null)!==e&&(ot.flags|=1024),n}function Vu(){var e=Ro!==0;return Ro=0,e}function ku(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function ju(e){if(Ao){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Ao=!1}aa=0,vn=Xt=ot=null,rr=!1,ml=Ro=0,lr=null}function Vn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vn===null?ot.memoizedState=vn=e:vn=vn.next=e,vn}function fn(){if(Xt===null){var e=ot.alternate;e=e!==null?e.memoizedState:null}else e=Xt.next;var n=vn===null?ot.memoizedState:vn.next;if(n!==null)vn=n,Xt=e;else{if(e===null)throw ot.alternate===null?Error(r(467)):Error(r(310));Xt=e,e={memoizedState:Xt.memoizedState,baseState:Xt.baseState,baseQueue:Xt.baseQueue,queue:Xt.queue,next:null},vn===null?ot.memoizedState=vn=e:vn=vn.next=e}return vn}function Co(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function gl(e){var n=ml;return ml+=1,lr===null&&(lr=[]),e=Vp(lr,e,n),n=ot,(vn===null?n.memoizedState:vn.next)===null&&(n=n.alternate,U.H=n===null||n.memoizedState===null?Lm:nf),e}function wo(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return gl(e);if(e.$$typeof===L)return Ln(e)}throw Error(r(438,String(e)))}function Xu(e){var n=null,a=ot.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var l=ot.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(n={data:l.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Co(),ot.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),l=0;l<e;l++)a[l]=Y;return n.index++,a}function sa(e,n){return typeof n=="function"?n(e):n}function Do(e){var n=fn();return Wu(n,Xt,e)}function Wu(e,n,a){var l=e.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=a;var u=e.baseQueue,f=l.pending;if(f!==null){if(u!==null){var g=u.next;u.next=f.next,f.next=g}n.baseQueue=u=f,l.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var C=g=null,F=null,J=n,ue=!1;do{var ge=J.lane&-536870913;if(ge!==J.lane?(St&ge)===ge:(aa&ge)===ge){var ne=J.revertLane;if(ne===0)F!==null&&(F=F.next={lane:0,revertLane:0,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),ge===tr&&(ue=!0);else if((aa&ne)===ne){J=J.next,ne===tr&&(ue=!0);continue}else ge={lane:0,revertLane:J.revertLane,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},F===null?(C=F=ge,g=f):F=F.next=ge,ot.lanes|=ne,Xa|=ne;ge=J.action,As&&a(f,ge),f=J.hasEagerState?J.eagerState:a(f,ge)}else ne={lane:ge,revertLane:J.revertLane,gesture:J.gesture,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},F===null?(C=F=ne,g=f):F=F.next=ne,ot.lanes|=ge,Xa|=ge;J=J.next}while(J!==null&&J!==n);if(F===null?g=f:F.next=C,!ni(f,e.memoizedState)&&(_n=!0,ue&&(a=nr,a!==null)))throw a;e.memoizedState=f,e.baseState=g,e.baseQueue=F,l.lastRenderedState=f}return u===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function qu(e){var n=fn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var l=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var g=u=u.next;do f=e(f,g.action),g=g.next;while(g!==u);ni(f,n.memoizedState)||(_n=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,l]}function $p(e,n,a){var l=ot,u=fn(),f=bt;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var g=!ni((Xt||u).memoizedState,a);if(g&&(u.memoizedState=a,_n=!0),u=u.queue,Ku(nm.bind(null,l,u,e),[e]),u.getSnapshot!==n||g||vn!==null&&vn.memoizedState.tag&1){if(l.flags|=2048,or(9,{destroy:void 0},tm.bind(null,l,u,a,n),null),Kt===null)throw Error(r(349));f||(aa&127)!==0||em(l,n,a)}return a}function em(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ot.updateQueue,n===null?(n=Co(),ot.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function tm(e,n,a,l){n.value=a,n.getSnapshot=l,im(n)&&am(e)}function nm(e,n,a){return a(function(){im(n)&&am(e)})}function im(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!ni(e,a)}catch{return!0}}function am(e){var n=vs(e,2);n!==null&&Kn(n,e,2)}function Yu(e){var n=Vn();if(typeof e=="function"){var a=e;if(e=a(),As){we(!0);try{a()}finally{we(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:e},n}function sm(e,n,a,l){return e.baseState=a,Wu(e,Xt,typeof l=="function"?l:sa)}function M_(e,n,a,l,u){if(Lo(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};U.T!==null?a(!0):f.isTransition=!1,l(f),a=n.pending,a===null?(f.next=n.pending=f,rm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function rm(e,n){var a=n.action,l=n.payload,u=e.state;if(n.isTransition){var f=U.T,g={};U.T=g;try{var C=a(u,l),F=U.S;F!==null&&F(g,C),lm(e,n,C)}catch(J){Zu(e,n,J)}finally{f!==null&&g.types!==null&&(f.types=g.types),U.T=f}}else try{f=a(u,l),lm(e,n,f)}catch(J){Zu(e,n,J)}}function lm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){om(e,n,l)},function(l){return Zu(e,n,l)}):om(e,n,a)}function om(e,n,a){n.status="fulfilled",n.value=a,cm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,rm(e,a)))}function Zu(e,n,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do n.status="rejected",n.reason=a,cm(n),n=n.next;while(n!==l)}e.action=null}function cm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function um(e,n){return n}function fm(e,n){if(bt){var a=Kt.formState;if(a!==null){e:{var l=ot;if(bt){if(Jt){t:{for(var u=Jt,f=_i;u.nodeType!==8;){if(!f){u=null;break t}if(u=Si(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Jt=Si(u.nextSibling),l=u.data==="F!";break e}}Ba(l)}l=!1}l&&(n=a[0])}}return a=Vn(),a.memoizedState=a.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:um,lastRenderedState:n},a.queue=l,a=Dm.bind(null,ot,l),l.dispatch=a,l=Yu(!1),f=tf.bind(null,ot,!1,l.queue),l=Vn(),u={state:n,dispatch:null,action:e,pending:null},l.queue=u,a=M_.bind(null,ot,u,f,a),u.dispatch=a,l.memoizedState=e,[n,a,!1]}function dm(e){var n=fn();return hm(n,Xt,e)}function hm(e,n,a){if(n=Wu(e,n,um)[0],e=Do(sa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var l=gl(n)}catch(g){throw g===ir?So:g}else l=n;n=fn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ot.flags|=2048,or(9,{destroy:void 0},b_.bind(null,u,a),null)),[l,f,e]}function b_(e,n){e.action=n}function pm(e){var n=fn(),a=Xt;if(a!==null)return hm(n,a,e);fn(),n=n.memoizedState,a=fn();var l=a.queue.dispatch;return a.memoizedState=e,[n,l,!1]}function or(e,n,a,l){return e={tag:e,create:a,deps:l,inst:n,next:null},n=ot.updateQueue,n===null&&(n=Co(),ot.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,n.lastEffect=e),e}function mm(){return fn().memoizedState}function No(e,n,a,l){var u=Vn();ot.flags|=e,u.memoizedState=or(1|n,{destroy:void 0},a,l===void 0?null:l)}function Uo(e,n,a,l){var u=fn();l=l===void 0?null:l;var f=u.memoizedState.inst;Xt!==null&&l!==null&&Hu(l,Xt.memoizedState.deps)?u.memoizedState=or(n,f,a,l):(ot.flags|=e,u.memoizedState=or(1|n,f,a,l))}function gm(e,n){No(8390656,8,e,n)}function Ku(e,n){Uo(2048,8,e,n)}function y_(e){ot.flags|=4;var n=ot.updateQueue;if(n===null)n=Co(),ot.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function vm(e){var n=fn().memoizedState;return y_({ref:n,nextImpl:e}),function(){if((Lt&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function _m(e,n){return Uo(4,2,e,n)}function xm(e,n){return Uo(4,4,e,n)}function Sm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Mm(e,n,a){a=a!=null?a.concat([e]):null,Uo(4,4,Sm.bind(null,n,e),a)}function Qu(){}function bm(e,n){var a=fn();n=n===void 0?null:n;var l=a.memoizedState;return n!==null&&Hu(n,l[1])?l[0]:(a.memoizedState=[e,n],e)}function ym(e,n){var a=fn();n=n===void 0?null:n;var l=a.memoizedState;if(n!==null&&Hu(n,l[1]))return l[0];if(l=e(),As){we(!0);try{e()}finally{we(!1)}}return a.memoizedState=[l,n],l}function Ju(e,n,a){return a===void 0||(aa&1073741824)!==0&&(St&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=E0(),ot.lanes|=e,Xa|=e,a)}function Em(e,n,a,l){return ni(a,n)?a:sr.current!==null?(e=Ju(e,a,l),ni(e,n)||(_n=!0),e):(aa&42)===0||(aa&1073741824)!==0&&(St&261930)===0?(_n=!0,e.memoizedState=a):(e=E0(),ot.lanes|=e,Xa|=e,n)}function Tm(e,n,a,l,u){var f=I.p;I.p=f!==0&&8>f?f:8;var g=U.T,C={};U.T=C,tf(e,!1,n,a);try{var F=u(),J=U.S;if(J!==null&&J(C,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var ue=__(F,l);vl(e,n,ue,oi(e))}else vl(e,n,l,oi(e))}catch(ge){vl(e,n,{then:function(){},status:"rejected",reason:ge},oi())}finally{I.p=f,g!==null&&C.types!==null&&(g.types=C.types),U.T=g}}function E_(){}function $u(e,n,a,l){if(e.tag!==5)throw Error(r(476));var u=Am(e).queue;Tm(e,u,n,ie,a===null?E_:function(){return Rm(e),a(l)})}function Am(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ie,baseState:ie,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:ie},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Rm(e){var n=Am(e);n.next===null&&(n=e.alternate.memoizedState),vl(e,n.next.queue,{},oi())}function ef(){return Ln(Ol)}function Cm(){return fn().memoizedState}function wm(){return fn().memoizedState}function T_(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=oi();e=za(a);var l=Ha(n,e,a);l!==null&&(Kn(l,n,a),dl(l,n,a)),n={cache:wu()},e.payload=n;return}n=n.return}}function A_(e,n,a){var l=oi();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Lo(e)?Nm(n,a):(a=_u(e,n,a,l),a!==null&&(Kn(a,e,l),Um(a,n,l)))}function Dm(e,n,a){var l=oi();vl(e,n,a,l)}function vl(e,n,a,l){var u={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Lo(e))Nm(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var g=n.lastRenderedState,C=f(g,a);if(u.hasEagerState=!0,u.eagerState=C,ni(C,g))return ho(e,n,u,0),Kt===null&&fo(),!1}catch{}finally{}if(a=_u(e,n,u,l),a!==null)return Kn(a,e,l),Um(a,n,l),!0}return!1}function tf(e,n,a,l){if(l={lane:2,revertLane:Of(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Lo(e)){if(n)throw Error(r(479))}else n=_u(e,a,l,2),n!==null&&Kn(n,e,2)}function Lo(e){var n=e.alternate;return e===ot||n!==null&&n===ot}function Nm(e,n){rr=Ao=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Um(e,n,a){if((a&4194048)!==0){var l=n.lanes;l&=e.pendingLanes,a|=l,n.lanes=a,hi(e,a)}}var _l={readContext:Ln,use:wo,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useLayoutEffect:rn,useInsertionEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useSyncExternalStore:rn,useId:rn,useHostTransitionStatus:rn,useFormState:rn,useActionState:rn,useOptimistic:rn,useMemoCache:rn,useCacheRefresh:rn};_l.useEffectEvent=rn;var Lm={readContext:Ln,use:wo,useCallback:function(e,n){return Vn().memoizedState=[e,n===void 0?null:n],e},useContext:Ln,useEffect:gm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,No(4194308,4,Sm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return No(4194308,4,e,n)},useInsertionEffect:function(e,n){No(4,2,e,n)},useMemo:function(e,n){var a=Vn();n=n===void 0?null:n;var l=e();if(As){we(!0);try{e()}finally{we(!1)}}return a.memoizedState=[l,n],l},useReducer:function(e,n,a){var l=Vn();if(a!==void 0){var u=a(n);if(As){we(!0);try{a(n)}finally{we(!1)}}}else u=n;return l.memoizedState=l.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},l.queue=e,e=e.dispatch=A_.bind(null,ot,e),[l.memoizedState,e]},useRef:function(e){var n=Vn();return e={current:e},n.memoizedState=e},useState:function(e){e=Yu(e);var n=e.queue,a=Dm.bind(null,ot,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Qu,useDeferredValue:function(e,n){var a=Vn();return Ju(a,e,n)},useTransition:function(){var e=Yu(!1);return e=Tm.bind(null,ot,e.queue,!0,!1),Vn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var l=ot,u=Vn();if(bt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Kt===null)throw Error(r(349));(St&127)!==0||em(l,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,gm(nm.bind(null,l,f,e),[e]),l.flags|=2048,or(9,{destroy:void 0},tm.bind(null,l,f,a,n),null),a},useId:function(){var e=Vn(),n=Kt.identifierPrefix;if(bt){var a=Hi,l=zi;a=(l&~(1<<32-Ne(l)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Ro++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=x_++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:ef,useFormState:fm,useActionState:fm,useOptimistic:function(e){var n=Vn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=tf.bind(null,ot,!0,a),a.dispatch=n,[e,n]},useMemoCache:Xu,useCacheRefresh:function(){return Vn().memoizedState=T_.bind(null,ot)},useEffectEvent:function(e){var n=Vn(),a={impl:e};return n.memoizedState=a,function(){if((Lt&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},nf={readContext:Ln,use:wo,useCallback:bm,useContext:Ln,useEffect:Ku,useImperativeHandle:Mm,useInsertionEffect:_m,useLayoutEffect:xm,useMemo:ym,useReducer:Do,useRef:mm,useState:function(){return Do(sa)},useDebugValue:Qu,useDeferredValue:function(e,n){var a=fn();return Em(a,Xt.memoizedState,e,n)},useTransition:function(){var e=Do(sa)[0],n=fn().memoizedState;return[typeof e=="boolean"?e:gl(e),n]},useSyncExternalStore:$p,useId:Cm,useHostTransitionStatus:ef,useFormState:dm,useActionState:dm,useOptimistic:function(e,n){var a=fn();return sm(a,Xt,e,n)},useMemoCache:Xu,useCacheRefresh:wm};nf.useEffectEvent=vm;var Om={readContext:Ln,use:wo,useCallback:bm,useContext:Ln,useEffect:Ku,useImperativeHandle:Mm,useInsertionEffect:_m,useLayoutEffect:xm,useMemo:ym,useReducer:qu,useRef:mm,useState:function(){return qu(sa)},useDebugValue:Qu,useDeferredValue:function(e,n){var a=fn();return Xt===null?Ju(a,e,n):Em(a,Xt.memoizedState,e,n)},useTransition:function(){var e=qu(sa)[0],n=fn().memoizedState;return[typeof e=="boolean"?e:gl(e),n]},useSyncExternalStore:$p,useId:Cm,useHostTransitionStatus:ef,useFormState:pm,useActionState:pm,useOptimistic:function(e,n){var a=fn();return Xt!==null?sm(a,Xt,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Xu,useCacheRefresh:wm};Om.useEffectEvent=vm;function af(e,n,a,l){n=e.memoizedState,a=a(l,n),a=a==null?n:x({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var sf={enqueueSetState:function(e,n,a){e=e._reactInternals;var l=oi(),u=za(l);u.payload=n,a!=null&&(u.callback=a),n=Ha(e,u,l),n!==null&&(Kn(n,e,l),dl(n,e,l))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var l=oi(),u=za(l);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ha(e,u,l),n!==null&&(Kn(n,e,l),dl(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=oi(),l=za(a);l.tag=2,n!=null&&(l.callback=n),n=Ha(e,l,a),n!==null&&(Kn(n,e,a),dl(n,e,a))}};function Pm(e,n,a,l,u,f,g){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,f,g):n.prototype&&n.prototype.isPureReactComponent?!al(a,l)||!al(u,f):!0}function Bm(e,n,a,l){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,l),n.state!==e&&sf.enqueueReplaceState(n,n.state,null)}function Rs(e,n){var a=n;if("ref"in n){a={};for(var l in n)l!=="ref"&&(a[l]=n[l])}if(e=e.defaultProps){a===n&&(a=x({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function Fm(e){uo(e)}function Im(e){console.error(e)}function zm(e){uo(e)}function Oo(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(l){setTimeout(function(){throw l})}}function Hm(e,n,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function rf(e,n,a){return a=za(a),a.tag=3,a.payload={element:null},a.callback=function(){Oo(e,n)},a}function Gm(e){return e=za(e),e.tag=3,e}function Vm(e,n,a,l){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=l.value;e.payload=function(){return u(f)},e.callback=function(){Hm(n,a,l)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(e.callback=function(){Hm(n,a,l),typeof u!="function"&&(Wa===null?Wa=new Set([this]):Wa.add(this));var C=l.stack;this.componentDidCatch(l.value,{componentStack:C!==null?C:""})})}function R_(e,n,a,l,u){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(n=a.alternate,n!==null&&er(n,a,u,!0),a=ai.current,a!==null){switch(a.tag){case 31:case 13:return xi===null?Wo():a.alternate===null&&ln===0&&(ln=3),a.flags&=-257,a.flags|=65536,a.lanes=u,l===Mo?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([l]):n.add(l),Nf(e,l,u)),!1;case 22:return a.flags|=65536,l===Mo?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([l]):a.add(l)),Nf(e,l,u)),!1}throw Error(r(435,a.tag))}return Nf(e,l,u),Wo(),!1}if(bt)return n=ai.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,l!==Eu&&(e=Error(r(422),{cause:l}),ll(mi(e,a)))):(l!==Eu&&(n=Error(r(423),{cause:l}),ll(mi(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,l=mi(l,a),u=rf(e.stateNode,l,u),Pu(e,u),ln!==4&&(ln=2)),!1;var f=Error(r(520),{cause:l});if(f=mi(f,a),Al===null?Al=[f]:Al.push(f),ln!==4&&(ln=2),n===null)return!0;l=mi(l,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=rf(a.stateNode,l,e),Pu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Wa===null||!Wa.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Gm(u),Vm(u,e,a,l),Pu(a,u),!1}a=a.return}while(a!==null);return!1}var lf=Error(r(461)),_n=!1;function On(e,n,a,l){n.child=e===null?Wp(n,null,a,l):Ts(n,e.child,a,l)}function km(e,n,a,l,u){a=a.render;var f=n.ref;if("ref"in l){var g={};for(var C in l)C!=="ref"&&(g[C]=l[C])}else g=l;return Ms(n),l=Gu(e,n,a,g,f,u),C=Vu(),e!==null&&!_n?(ku(e,n,u),ra(e,n,u)):(bt&&C&&bu(n),n.flags|=1,On(e,n,l,u),n.child)}function jm(e,n,a,l,u){if(e===null){var f=a.type;return typeof f=="function"&&!xu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Xm(e,n,f,l,u)):(e=mo(a.type,null,l,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!mf(e,u)){var g=f.memoizedProps;if(a=a.compare,a=a!==null?a:al,a(g,l)&&e.ref===n.ref)return ra(e,n,u)}return n.flags|=1,e=ea(f,l),e.ref=n.ref,e.return=n,n.child=e}function Xm(e,n,a,l,u){if(e!==null){var f=e.memoizedProps;if(al(f,l)&&e.ref===n.ref)if(_n=!1,n.pendingProps=l=f,mf(e,u))(e.flags&131072)!==0&&(_n=!0);else return n.lanes=e.lanes,ra(e,n,u)}return of(e,n,a,l,u)}function Wm(e,n,a,l){var u=l.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(l=n.child=e.child,u=0;l!==null;)u=u|l.lanes|l.childLanes,l=l.sibling;l=u&~f}else l=0,n.child=null;return qm(e,n,f,a,l)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&xo(n,f!==null?f.cachePool:null),f!==null?Zp(n,f):Fu(),Kp(n);else return l=n.lanes=536870912,qm(e,n,f!==null?f.baseLanes|a:a,a,l)}else f!==null?(xo(n,f.cachePool),Zp(n,f),Va(),n.memoizedState=null):(e!==null&&xo(n,null),Fu(),Va());return On(e,n,u,a),n.child}function xl(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function qm(e,n,a,l,u){var f=Nu();return f=f===null?null:{parent:gn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&xo(n,null),Fu(),Kp(n),e!==null&&er(e,n,l,!0),n.childLanes=u,null}function Po(e,n){return n=Fo({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Ym(e,n,a){return Ts(n,e.child,null,a),e=Po(n,n.pendingProps),e.flags|=2,si(n),n.memoizedState=null,e}function C_(e,n,a){var l=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(bt){if(l.mode==="hidden")return e=Po(n,l),n.lanes=536870912,xl(null,e);if(zu(n),(e=Jt)?(e=rg(e,_i),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Oa!==null?{id:zi,overflow:Hi}:null,retryLane:536870912,hydrationErrors:null},a=Np(e),a.return=n,n.child=a,Un=n,Jt=null)):e=null,e===null)throw Ba(n);return n.lanes=536870912,null}return Po(n,l)}var f=e.memoizedState;if(f!==null){var g=f.dehydrated;if(zu(n),u)if(n.flags&256)n.flags&=-257,n=Ym(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(_n||er(e,n,a,!1),u=(a&e.childLanes)!==0,_n||u){if(l=Kt,l!==null&&(g=$n(l,a),g!==0&&g!==f.retryLane))throw f.retryLane=g,vs(e,g),Kn(l,e,g),lf;Wo(),n=Ym(e,n,a)}else e=f.treeContext,Jt=Si(g.nextSibling),Un=n,bt=!0,Pa=null,_i=!1,e!==null&&Op(n,e),n=Po(n,l),n.flags|=4096;return n}return e=ea(e.child,{mode:l.mode,children:l.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Bo(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function of(e,n,a,l,u){return Ms(n),a=Gu(e,n,a,l,void 0,u),l=Vu(),e!==null&&!_n?(ku(e,n,u),ra(e,n,u)):(bt&&l&&bu(n),n.flags|=1,On(e,n,a,u),n.child)}function Zm(e,n,a,l,u,f){return Ms(n),n.updateQueue=null,a=Jp(n,l,a,u),Qp(e),l=Vu(),e!==null&&!_n?(ku(e,n,f),ra(e,n,f)):(bt&&l&&bu(n),n.flags|=1,On(e,n,a,f),n.child)}function Km(e,n,a,l,u){if(Ms(n),n.stateNode===null){var f=Ks,g=a.contextType;typeof g=="object"&&g!==null&&(f=Ln(g)),f=new a(l,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=sf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=l,f.state=n.memoizedState,f.refs={},Lu(n),g=a.contextType,f.context=typeof g=="object"&&g!==null?Ln(g):Ks,f.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(af(n,a,g,l),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&sf.enqueueReplaceState(f,f.state,null),pl(n,l,f,u),hl(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),l=!0}else if(e===null){f=n.stateNode;var C=n.memoizedProps,F=Rs(a,C);f.props=F;var J=f.context,ue=a.contextType;g=Ks,typeof ue=="object"&&ue!==null&&(g=Ln(ue));var ge=a.getDerivedStateFromProps;ue=typeof ge=="function"||typeof f.getSnapshotBeforeUpdate=="function",C=n.pendingProps!==C,ue||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(C||J!==g)&&Bm(n,f,l,g),Ia=!1;var ne=n.memoizedState;f.state=ne,pl(n,l,f,u),hl(),J=n.memoizedState,C||ne!==J||Ia?(typeof ge=="function"&&(af(n,a,ge,l),J=n.memoizedState),(F=Ia||Pm(n,a,F,l,ne,J,g))?(ue||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=J),f.props=l,f.state=J,f.context=g,l=F):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{f=n.stateNode,Ou(e,n),g=n.memoizedProps,ue=Rs(a,g),f.props=ue,ge=n.pendingProps,ne=f.context,J=a.contextType,F=Ks,typeof J=="object"&&J!==null&&(F=Ln(J)),C=a.getDerivedStateFromProps,(J=typeof C=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==ge||ne!==F)&&Bm(n,f,l,F),Ia=!1,ne=n.memoizedState,f.state=ne,pl(n,l,f,u),hl();var se=n.memoizedState;g!==ge||ne!==se||Ia||e!==null&&e.dependencies!==null&&vo(e.dependencies)?(typeof C=="function"&&(af(n,a,C,l),se=n.memoizedState),(ue=Ia||Pm(n,a,ue,l,ne,se,F)||e!==null&&e.dependencies!==null&&vo(e.dependencies))?(J||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(l,se,F),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(l,se,F)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===e.memoizedProps&&ne===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&ne===e.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=se),f.props=l,f.state=se,f.context=F,l=ue):(typeof f.componentDidUpdate!="function"||g===e.memoizedProps&&ne===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&ne===e.memoizedState||(n.flags|=1024),l=!1)}return f=l,Bo(e,n),l=(n.flags&128)!==0,f||l?(f=n.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&l?(n.child=Ts(n,e.child,null,u),n.child=Ts(n,null,a,u)):On(e,n,a,u),n.memoizedState=f.state,e=n.child):e=ra(e,n,u),e}function Qm(e,n,a,l){return xs(),n.flags|=256,On(e,n,a,l),n.child}var cf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function uf(e){return{baseLanes:e,cachePool:Hp()}}function ff(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=li),e}function Jm(e,n,a){var l=n.pendingProps,u=!1,f=(n.flags&128)!==0,g;if((g=f)||(g=e!==null&&e.memoizedState===null?!1:(un.current&2)!==0),g&&(u=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,e===null){if(bt){if(u?Ga(n):Va(),(e=Jt)?(e=rg(e,_i),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Oa!==null?{id:zi,overflow:Hi}:null,retryLane:536870912,hydrationErrors:null},a=Np(e),a.return=n,n.child=a,Un=n,Jt=null)):e=null,e===null)throw Ba(n);return qf(e)?n.lanes=32:n.lanes=536870912,null}var C=l.children;return l=l.fallback,u?(Va(),u=n.mode,C=Fo({mode:"hidden",children:C},u),l=_s(l,u,a,null),C.return=n,l.return=n,C.sibling=l,n.child=C,l=n.child,l.memoizedState=uf(a),l.childLanes=ff(e,g,a),n.memoizedState=cf,xl(null,l)):(Ga(n),df(n,C))}var F=e.memoizedState;if(F!==null&&(C=F.dehydrated,C!==null)){if(f)n.flags&256?(Ga(n),n.flags&=-257,n=hf(e,n,a)):n.memoizedState!==null?(Va(),n.child=e.child,n.flags|=128,n=null):(Va(),C=l.fallback,u=n.mode,l=Fo({mode:"visible",children:l.children},u),C=_s(C,u,a,null),C.flags|=2,l.return=n,C.return=n,l.sibling=C,n.child=l,Ts(n,e.child,null,a),l=n.child,l.memoizedState=uf(a),l.childLanes=ff(e,g,a),n.memoizedState=cf,n=xl(null,l));else if(Ga(n),qf(C)){if(g=C.nextSibling&&C.nextSibling.dataset,g)var J=g.dgst;g=J,l=Error(r(419)),l.stack="",l.digest=g,ll({value:l,source:null,stack:null}),n=hf(e,n,a)}else if(_n||er(e,n,a,!1),g=(a&e.childLanes)!==0,_n||g){if(g=Kt,g!==null&&(l=$n(g,a),l!==0&&l!==F.retryLane))throw F.retryLane=l,vs(e,l),Kn(g,e,l),lf;Wf(C)||Wo(),n=hf(e,n,a)}else Wf(C)?(n.flags|=192,n.child=e.child,n=null):(e=F.treeContext,Jt=Si(C.nextSibling),Un=n,bt=!0,Pa=null,_i=!1,e!==null&&Op(n,e),n=df(n,l.children),n.flags|=4096);return n}return u?(Va(),C=l.fallback,u=n.mode,F=e.child,J=F.sibling,l=ea(F,{mode:"hidden",children:l.children}),l.subtreeFlags=F.subtreeFlags&65011712,J!==null?C=ea(J,C):(C=_s(C,u,a,null),C.flags|=2),C.return=n,l.return=n,l.sibling=C,n.child=l,xl(null,l),l=n.child,C=e.child.memoizedState,C===null?C=uf(a):(u=C.cachePool,u!==null?(F=gn._currentValue,u=u.parent!==F?{parent:F,pool:F}:u):u=Hp(),C={baseLanes:C.baseLanes|a,cachePool:u}),l.memoizedState=C,l.childLanes=ff(e,g,a),n.memoizedState=cf,xl(e.child,l)):(Ga(n),a=e.child,e=a.sibling,a=ea(a,{mode:"visible",children:l.children}),a.return=n,a.sibling=null,e!==null&&(g=n.deletions,g===null?(n.deletions=[e],n.flags|=16):g.push(e)),n.child=a,n.memoizedState=null,a)}function df(e,n){return n=Fo({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Fo(e,n){return e=ii(22,e,null,n),e.lanes=0,e}function hf(e,n,a){return Ts(n,e.child,null,a),e=df(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function $m(e,n,a){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n),Ru(e.return,n,a)}function pf(e,n,a,l,u,f){var g=e.memoizedState;g===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:u,treeForkCount:f}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=l,g.tail=a,g.tailMode=u,g.treeForkCount=f)}function e0(e,n,a){var l=n.pendingProps,u=l.revealOrder,f=l.tail;l=l.children;var g=un.current,C=(g&2)!==0;if(C?(g=g&1|2,n.flags|=128):g&=1,He(un,g),On(e,n,l,a),l=bt?rl:0,!C&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$m(e,a,n);else if(e.tag===19)$m(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&To(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),pf(n,!1,u,a,f,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&To(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}pf(n,!0,a,null,f,l);break;case"together":pf(n,!1,null,null,void 0,l);break;default:n.memoizedState=null}return n.child}function ra(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Xa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(er(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=ea(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ea(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function mf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&vo(e)))}function w_(e,n,a){switch(n.tag){case 3:ve(n,n.stateNode.containerInfo),Fa(n,gn,e.memoizedState.cache),xs();break;case 27:case 5:Je(n);break;case 4:ve(n,n.stateNode.containerInfo);break;case 10:Fa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,zu(n),null;break;case 13:var l=n.memoizedState;if(l!==null)return l.dehydrated!==null?(Ga(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Jm(e,n,a):(Ga(n),e=ra(e,n,a),e!==null?e.sibling:null);Ga(n);break;case 19:var u=(e.flags&128)!==0;if(l=(a&n.childLanes)!==0,l||(er(e,n,a,!1),l=(a&n.childLanes)!==0),u){if(l)return e0(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),He(un,un.current),l)break;return null;case 22:return n.lanes=0,Wm(e,n,a,n.pendingProps);case 24:Fa(n,gn,e.memoizedState.cache)}return ra(e,n,a)}function t0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)_n=!0;else{if(!mf(e,a)&&(n.flags&128)===0)return _n=!1,w_(e,n,a);_n=(e.flags&131072)!==0}else _n=!1,bt&&(n.flags&1048576)!==0&&Lp(n,rl,n.index);switch(n.lanes=0,n.tag){case 16:e:{var l=n.pendingProps;if(e=ys(n.elementType),n.type=e,typeof e=="function")xu(e)?(l=Rs(e,l),n.tag=1,n=Km(null,n,e,l,a)):(n.tag=0,n=of(null,n,e,l,a));else{if(e!=null){var u=e.$$typeof;if(u===O){n.tag=11,n=km(null,n,e,l,a);break e}else if(u===j){n.tag=14,n=jm(null,n,e,l,a);break e}}throw n=le(e)||e,Error(r(306,n,""))}}return n;case 0:return of(e,n,n.type,n.pendingProps,a);case 1:return l=n.type,u=Rs(l,n.pendingProps),Km(e,n,l,u,a);case 3:e:{if(ve(n,n.stateNode.containerInfo),e===null)throw Error(r(387));l=n.pendingProps;var f=n.memoizedState;u=f.element,Ou(e,n),pl(n,l,null,a);var g=n.memoizedState;if(l=g.cache,Fa(n,gn,l),l!==f.cache&&Cu(n,[gn],a,!0),hl(),l=g.element,f.isDehydrated)if(f={element:l,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Qm(e,n,l,a);break e}else if(l!==u){u=mi(Error(r(424)),n),ll(u),n=Qm(e,n,l,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Jt=Si(e.firstChild),Un=n,bt=!0,Pa=null,_i=!0,a=Wp(n,null,l,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(xs(),l===u){n=ra(e,n,a);break e}On(e,n,l,a)}n=n.child}return n;case 26:return Bo(e,n),e===null?(a=dg(n.type,null,n.pendingProps,null))?n.memoizedState=a:bt||(a=n.type,e=n.pendingProps,l=$o(he.current).createElement(a),l[cn]=n,l[Nn]=e,Pn(l,a,e),mn(l),n.stateNode=l):n.memoizedState=dg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Je(n),e===null&&bt&&(l=n.stateNode=cg(n.type,n.pendingProps,he.current),Un=n,_i=!0,u=Jt,Ka(n.type)?(Yf=u,Jt=Si(l.firstChild)):Jt=u),On(e,n,n.pendingProps.children,a),Bo(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&bt&&((u=l=Jt)&&(l=sx(l,n.type,n.pendingProps,_i),l!==null?(n.stateNode=l,Un=n,Jt=Si(l.firstChild),_i=!1,u=!0):u=!1),u||Ba(n)),Je(n),u=n.type,f=n.pendingProps,g=e!==null?e.memoizedProps:null,l=f.children,kf(u,f)?l=null:g!==null&&kf(u,g)&&(n.flags|=32),n.memoizedState!==null&&(u=Gu(e,n,S_,null,null,a),Ol._currentValue=u),Bo(e,n),On(e,n,l,a),n.child;case 6:return e===null&&bt&&((e=a=Jt)&&(a=rx(a,n.pendingProps,_i),a!==null?(n.stateNode=a,Un=n,Jt=null,e=!0):e=!1),e||Ba(n)),null;case 13:return Jm(e,n,a);case 4:return ve(n,n.stateNode.containerInfo),l=n.pendingProps,e===null?n.child=Ts(n,null,l,a):On(e,n,l,a),n.child;case 11:return km(e,n,n.type,n.pendingProps,a);case 7:return On(e,n,n.pendingProps,a),n.child;case 8:return On(e,n,n.pendingProps.children,a),n.child;case 12:return On(e,n,n.pendingProps.children,a),n.child;case 10:return l=n.pendingProps,Fa(n,n.type,l.value),On(e,n,l.children,a),n.child;case 9:return u=n.type._context,l=n.pendingProps.children,Ms(n),u=Ln(u),l=l(u),n.flags|=1,On(e,n,l,a),n.child;case 14:return jm(e,n,n.type,n.pendingProps,a);case 15:return Xm(e,n,n.type,n.pendingProps,a);case 19:return e0(e,n,a);case 31:return C_(e,n,a);case 22:return Wm(e,n,a,n.pendingProps);case 24:return Ms(n),l=Ln(gn),e===null?(u=Nu(),u===null&&(u=Kt,f=wu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:l,cache:u},Lu(n),Fa(n,gn,u)):((e.lanes&a)!==0&&(Ou(e,n),pl(n,null,null,a),hl()),u=e.memoizedState,f=n.memoizedState,u.parent!==l?(u={parent:l,cache:l},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Fa(n,gn,l)):(l=f.cache,Fa(n,gn,l),l!==u.cache&&Cu(n,[gn],a,!0))),On(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function la(e){e.flags|=4}function gf(e,n,a,l,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(C0())e.flags|=8192;else throw Es=Mo,Uu}else e.flags&=-16777217}function n0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!vg(n))if(C0())e.flags|=8192;else throw Es=Mo,Uu}function Io(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?xe():536870912,e.lanes|=n,dr|=n)}function Sl(e,n){if(!bt)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function $t(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,l|=u.subtreeFlags&65011712,l|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=l,e.childLanes=a,n}function D_(e,n,a){var l=n.pendingProps;switch(yu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $t(n),null;case 1:return $t(n),null;case 3:return a=n.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),ia(gn),Ve(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&($s(n)?la(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Tu())),$t(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(la(n),f!==null?($t(n),n0(n,f)):($t(n),gf(n,u,null,l,a))):f?f!==e.memoizedState?(la(n),$t(n),n0(n,f)):($t(n),n.flags&=-16777217):(e=e.memoizedProps,e!==l&&la(n),$t(n),gf(n,u,e,l,a)),null;case 27:if(Ye(n),a=he.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==l&&la(n);else{if(!l){if(n.stateNode===null)throw Error(r(166));return $t(n),null}e=et.current,$s(n)?Pp(n):(e=cg(u,l,a),n.stateNode=e,la(n))}return $t(n),null;case 5:if(Ye(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==l&&la(n);else{if(!l){if(n.stateNode===null)throw Error(r(166));return $t(n),null}if(f=et.current,$s(n))Pp(n);else{var g=$o(he.current);switch(f){case 1:f=g.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=g.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=g.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=g.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=g.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof l.is=="string"?g.createElement("select",{is:l.is}):g.createElement("select"),l.multiple?f.multiple=!0:l.size&&(f.size=l.size);break;default:f=typeof l.is=="string"?g.createElement(u,{is:l.is}):g.createElement(u)}}f[cn]=n,f[Nn]=l;e:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)f.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break e;for(;g.sibling===null;){if(g.return===null||g.return===n)break e;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=f;e:switch(Pn(f,u,l),u){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&la(n)}}return $t(n),gf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==l&&la(n);else{if(typeof l!="string"&&n.stateNode===null)throw Error(r(166));if(e=he.current,$s(n)){if(e=n.stateNode,a=n.memoizedProps,l=null,u=Un,u!==null)switch(u.tag){case 27:case 5:l=u.memoizedProps}e[cn]=n,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||J0(e.nodeValue,a)),e||Ba(n,!0)}else e=$o(e).createTextNode(l),e[cn]=n,n.stateNode=e}return $t(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(l=$s(n),a!==null){if(e===null){if(!l)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[cn]=n}else xs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;$t(n),e=!1}else a=Tu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(si(n),n):(si(n),null);if((n.flags&128)!==0)throw Error(r(558))}return $t(n),null;case 13:if(l=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=$s(n),l!==null&&l.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[cn]=n}else xs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;$t(n),u=!1}else u=Tu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(si(n),n):(si(n),null)}return si(n),(n.flags&128)!==0?(n.lanes=a,n):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=n.child,u=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(u=l.alternate.memoizedState.cachePool.pool),f=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(f=l.memoizedState.cachePool.pool),f!==u&&(l.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Io(n,n.updateQueue),$t(n),null);case 4:return Ve(),e===null&&If(n.stateNode.containerInfo),$t(n),null;case 10:return ia(n.type),$t(n),null;case 19:if(Re(un),l=n.memoizedState,l===null)return $t(n),null;if(u=(n.flags&128)!==0,f=l.rendering,f===null)if(u)Sl(l,!1);else{if(ln!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=To(e),f!==null){for(n.flags|=128,Sl(l,!1),e=f.updateQueue,n.updateQueue=e,Io(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Dp(a,e),a=a.sibling;return He(un,un.current&1|2),bt&&ta(n,l.treeForkCount),n.child}e=e.sibling}l.tail!==null&&be()>ko&&(n.flags|=128,u=!0,Sl(l,!1),n.lanes=4194304)}else{if(!u)if(e=To(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Io(n,e),Sl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!f.alternate&&!bt)return $t(n),null}else 2*be()-l.renderingStartTime>ko&&a!==536870912&&(n.flags|=128,u=!0,Sl(l,!1),n.lanes=4194304);l.isBackwards?(f.sibling=n.child,n.child=f):(e=l.last,e!==null?e.sibling=f:n.child=f,l.last=f)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=be(),e.sibling=null,a=un.current,He(un,u?a&1|2:a&1),bt&&ta(n,l.treeForkCount),e):($t(n),null);case 22:case 23:return si(n),Iu(),l=n.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(n.flags|=8192):l&&(n.flags|=8192),l?(a&536870912)!==0&&(n.flags&128)===0&&($t(n),n.subtreeFlags&6&&(n.flags|=8192)):$t(n),a=n.updateQueue,a!==null&&Io(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==a&&(n.flags|=2048),e!==null&&Re(bs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ia(gn),$t(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function N_(e,n){switch(yu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ia(gn),Ve(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Ye(n),null;case 31:if(n.memoizedState!==null){if(si(n),n.alternate===null)throw Error(r(340));xs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(si(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));xs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Re(un),null;case 4:return Ve(),null;case 10:return ia(n.type),null;case 22:case 23:return si(n),Iu(),e!==null&&Re(bs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ia(gn),null;case 25:return null;default:return null}}function i0(e,n){switch(yu(n),n.tag){case 3:ia(gn),Ve();break;case 26:case 27:case 5:Ye(n);break;case 4:Ve();break;case 31:n.memoizedState!==null&&si(n);break;case 13:si(n);break;case 19:Re(un);break;case 10:ia(n.type);break;case 22:case 23:si(n),Iu(),e!==null&&Re(bs);break;case 24:ia(gn)}}function Ml(e,n){try{var a=n.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var u=l.next;a=u;do{if((a.tag&e)===e){l=void 0;var f=a.create,g=a.inst;l=f(),g.destroy=l}a=a.next}while(a!==u)}}catch(C){Gt(n,n.return,C)}}function ka(e,n,a){try{var l=n.updateQueue,u=l!==null?l.lastEffect:null;if(u!==null){var f=u.next;l=f;do{if((l.tag&e)===e){var g=l.inst,C=g.destroy;if(C!==void 0){g.destroy=void 0,u=n;var F=a,J=C;try{J()}catch(ue){Gt(u,F,ue)}}}l=l.next}while(l!==f)}}catch(ue){Gt(n,n.return,ue)}}function a0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Yp(n,a)}catch(l){Gt(e,e.return,l)}}}function s0(e,n,a){a.props=Rs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){Gt(e,n,l)}}function bl(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(u){Gt(e,n,u)}}function Gi(e,n){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(u){Gt(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Gt(e,n,u)}else a.current=null}function r0(e){var n=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(u){Gt(e,e.return,u)}}function vf(e,n,a){try{var l=e.stateNode;$_(l,e.type,a,n),l[Nn]=n}catch(u){Gt(e,e.return,u)}}function l0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ka(e.type)||e.tag===4}function _f(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||l0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ka(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function xf(e,n,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ji));else if(l!==4&&(l===27&&Ka(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(xf(e,n,a),e=e.sibling;e!==null;)xf(e,n,a),e=e.sibling}function zo(e,n,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(l!==4&&(l===27&&Ka(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(zo(e,n,a),e=e.sibling;e!==null;)zo(e,n,a),e=e.sibling}function o0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Pn(n,l,a),n[cn]=e,n[Nn]=a}catch(f){Gt(e,e.return,f)}}var oa=!1,xn=!1,Sf=!1,c0=typeof WeakSet=="function"?WeakSet:Set,An=null;function U_(e,n){if(e=e.containerInfo,Gf=rc,e=Mp(e),du(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var u=l.anchorOffset,f=l.focusNode;l=l.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var g=0,C=-1,F=-1,J=0,ue=0,ge=e,ne=null;t:for(;;){for(var se;ge!==a||u!==0&&ge.nodeType!==3||(C=g+u),ge!==f||l!==0&&ge.nodeType!==3||(F=g+l),ge.nodeType===3&&(g+=ge.nodeValue.length),(se=ge.firstChild)!==null;)ne=ge,ge=se;for(;;){if(ge===e)break t;if(ne===a&&++J===u&&(C=g),ne===f&&++ue===l&&(F=g),(se=ge.nextSibling)!==null)break;ge=ne,ne=ge.parentNode}ge=se}a=C===-1||F===-1?null:{start:C,end:F}}else a=null}a=a||{start:0,end:0}}else a=null;for(Vf={focusedElem:e,selectionRange:a},rc=!1,An=n;An!==null;)if(n=An,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,An=e;else for(;An!==null;){switch(n=An,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,l=a.stateNode;try{var je=Rs(a.type,u);e=l.getSnapshotBeforeUpdate(je,f),l.__reactInternalSnapshotBeforeUpdate=e}catch($e){Gt(a,a.return,$e)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Xf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Xf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,An=e;break}An=n.return}}function u0(e,n,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:ua(e,a),l&4&&Ml(5,a);break;case 1:if(ua(e,a),l&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(g){Gt(a,a.return,g)}else{var u=Rs(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(g){Gt(a,a.return,g)}}l&64&&a0(a),l&512&&bl(a,a.return);break;case 3:if(ua(e,a),l&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Yp(e,n)}catch(g){Gt(a,a.return,g)}}break;case 27:n===null&&l&4&&o0(a);case 26:case 5:ua(e,a),n===null&&l&4&&r0(a),l&512&&bl(a,a.return);break;case 12:ua(e,a);break;case 31:ua(e,a),l&4&&h0(e,a);break;case 13:ua(e,a),l&4&&p0(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=G_.bind(null,a),lx(e,a))));break;case 22:if(l=a.memoizedState!==null||oa,!l){n=n!==null&&n.memoizedState!==null||xn,u=oa;var f=xn;oa=l,(xn=n)&&!f?fa(e,a,(a.subtreeFlags&8772)!==0):ua(e,a),oa=u,xn=f}break;case 30:break;default:ua(e,a)}}function f0(e){var n=e.alternate;n!==null&&(e.alternate=null,f0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Kr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var an=null,Wn=!1;function ca(e,n,a){for(a=a.child;a!==null;)d0(e,n,a),a=a.sibling}function d0(e,n,a){if(ce&&typeof ce.onCommitFiberUnmount=="function")try{ce.onCommitFiberUnmount(re,a)}catch{}switch(a.tag){case 26:xn||Gi(a,n),ca(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:xn||Gi(a,n);var l=an,u=Wn;Ka(a.type)&&(an=a.stateNode,Wn=!1),ca(e,n,a),Nl(a.stateNode),an=l,Wn=u;break;case 5:xn||Gi(a,n);case 6:if(l=an,u=Wn,an=null,ca(e,n,a),an=l,Wn=u,an!==null)if(Wn)try{(an.nodeType===9?an.body:an.nodeName==="HTML"?an.ownerDocument.body:an).removeChild(a.stateNode)}catch(f){Gt(a,n,f)}else try{an.removeChild(a.stateNode)}catch(f){Gt(a,n,f)}break;case 18:an!==null&&(Wn?(e=an,ag(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Sr(e)):ag(an,a.stateNode));break;case 4:l=an,u=Wn,an=a.stateNode.containerInfo,Wn=!0,ca(e,n,a),an=l,Wn=u;break;case 0:case 11:case 14:case 15:ka(2,a,n),xn||ka(4,a,n),ca(e,n,a);break;case 1:xn||(Gi(a,n),l=a.stateNode,typeof l.componentWillUnmount=="function"&&s0(a,n,l)),ca(e,n,a);break;case 21:ca(e,n,a);break;case 22:xn=(l=xn)||a.memoizedState!==null,ca(e,n,a),xn=l;break;default:ca(e,n,a)}}function h0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Sr(e)}catch(a){Gt(n,n.return,a)}}}function p0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Sr(e)}catch(a){Gt(n,n.return,a)}}function L_(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new c0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new c0),n;default:throw Error(r(435,e.tag))}}function Ho(e,n){var a=L_(e);n.forEach(function(l){if(!a.has(l)){a.add(l);var u=V_.bind(null,e,l);l.then(u,u)}})}function qn(e,n){var a=n.deletions;if(a!==null)for(var l=0;l<a.length;l++){var u=a[l],f=e,g=n,C=g;e:for(;C!==null;){switch(C.tag){case 27:if(Ka(C.type)){an=C.stateNode,Wn=!1;break e}break;case 5:an=C.stateNode,Wn=!1;break e;case 3:case 4:an=C.stateNode.containerInfo,Wn=!0;break e}C=C.return}if(an===null)throw Error(r(160));d0(f,g,u),an=null,Wn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)m0(n,e),n=n.sibling}var Ci=null;function m0(e,n){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:qn(n,e),Yn(e),l&4&&(ka(3,e,e.return),Ml(3,e),ka(5,e,e.return));break;case 1:qn(n,e),Yn(e),l&512&&(xn||a===null||Gi(a,a.return)),l&64&&oa&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var u=Ci;if(qn(n,e),Yn(e),l&512&&(xn||a===null||Gi(a,a.return)),l&4){var f=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,u=u.ownerDocument||u;t:switch(l){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Ca]||f[cn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(l),u.head.insertBefore(f,u.querySelector("head > title"))),Pn(f,l,a),f[cn]=e,mn(f),l=f;break e;case"link":var g=mg("link","href",u).get(l+(a.href||""));if(g){for(var C=0;C<g.length;C++)if(f=g[C],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(C,1);break t}}f=u.createElement(l),Pn(f,l,a),u.head.appendChild(f);break;case"meta":if(g=mg("meta","content",u).get(l+(a.content||""))){for(C=0;C<g.length;C++)if(f=g[C],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(C,1);break t}}f=u.createElement(l),Pn(f,l,a),u.head.appendChild(f);break;default:throw Error(r(468,l))}f[cn]=e,mn(f),l=f}e.stateNode=l}else gg(u,e.type,e.stateNode);else e.stateNode=pg(u,l,e.memoizedProps);else f!==l?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,l===null?gg(u,e.type,e.stateNode):pg(u,l,e.memoizedProps)):l===null&&e.stateNode!==null&&vf(e,e.memoizedProps,a.memoizedProps)}break;case 27:qn(n,e),Yn(e),l&512&&(xn||a===null||Gi(a,a.return)),a!==null&&l&4&&vf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(qn(n,e),Yn(e),l&512&&(xn||a===null||Gi(a,a.return)),e.flags&32){u=e.stateNode;try{ti(u,"")}catch(je){Gt(e,e.return,je)}}l&4&&e.stateNode!=null&&(u=e.memoizedProps,vf(e,u,a!==null?a.memoizedProps:u)),l&1024&&(Sf=!0);break;case 6:if(qn(n,e),Yn(e),l&4){if(e.stateNode===null)throw Error(r(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(je){Gt(e,e.return,je)}}break;case 3:if(nc=null,u=Ci,Ci=ec(n.containerInfo),qn(n,e),Ci=u,Yn(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Sr(n.containerInfo)}catch(je){Gt(e,e.return,je)}Sf&&(Sf=!1,g0(e));break;case 4:l=Ci,Ci=ec(e.stateNode.containerInfo),qn(n,e),Yn(e),Ci=l;break;case 12:qn(n,e),Yn(e);break;case 31:qn(n,e),Yn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ho(e,l)));break;case 13:qn(n,e),Yn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Vo=be()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ho(e,l)));break;case 22:u=e.memoizedState!==null;var F=a!==null&&a.memoizedState!==null,J=oa,ue=xn;if(oa=J||u,xn=ue||F,qn(n,e),xn=ue,oa=J,Yn(e),l&8192)e:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||F||oa||xn||Cs(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){F=a=n;try{if(f=F.stateNode,u)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{C=F.stateNode;var ge=F.memoizedProps.style,ne=ge!=null&&ge.hasOwnProperty("display")?ge.display:null;C.style.display=ne==null||typeof ne=="boolean"?"":(""+ne).trim()}}catch(je){Gt(F,F.return,je)}}}else if(n.tag===6){if(a===null){F=n;try{F.stateNode.nodeValue=u?"":F.memoizedProps}catch(je){Gt(F,F.return,je)}}}else if(n.tag===18){if(a===null){F=n;try{var se=F.stateNode;u?sg(se,!0):sg(F.stateNode,!1)}catch(je){Gt(F,F.return,je)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Ho(e,a))));break;case 19:qn(n,e),Yn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ho(e,l)));break;case 30:break;case 21:break;default:qn(n,e),Yn(e)}}function Yn(e){var n=e.flags;if(n&2){try{for(var a,l=e.return;l!==null;){if(l0(l)){a=l;break}l=l.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=_f(e);zo(e,f,u);break;case 5:var g=a.stateNode;a.flags&32&&(ti(g,""),a.flags&=-33);var C=_f(e);zo(e,C,g);break;case 3:case 4:var F=a.stateNode.containerInfo,J=_f(e);xf(e,J,F);break;default:throw Error(r(161))}}catch(ue){Gt(e,e.return,ue)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function g0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;g0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ua(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)u0(e,n.alternate,n),n=n.sibling}function Cs(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:ka(4,n,n.return),Cs(n);break;case 1:Gi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&s0(n,n.return,a),Cs(n);break;case 27:Nl(n.stateNode);case 26:case 5:Gi(n,n.return),Cs(n);break;case 22:n.memoizedState===null&&Cs(n);break;case 30:Cs(n);break;default:Cs(n)}e=e.sibling}}function fa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var l=n.alternate,u=e,f=n,g=f.flags;switch(f.tag){case 0:case 11:case 15:fa(u,f,a),Ml(4,f);break;case 1:if(fa(u,f,a),l=f,u=l.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(J){Gt(l,l.return,J)}if(l=f,u=l.updateQueue,u!==null){var C=l.stateNode;try{var F=u.shared.hiddenCallbacks;if(F!==null)for(u.shared.hiddenCallbacks=null,u=0;u<F.length;u++)qp(F[u],C)}catch(J){Gt(l,l.return,J)}}a&&g&64&&a0(f),bl(f,f.return);break;case 27:o0(f);case 26:case 5:fa(u,f,a),a&&l===null&&g&4&&r0(f),bl(f,f.return);break;case 12:fa(u,f,a);break;case 31:fa(u,f,a),a&&g&4&&h0(u,f);break;case 13:fa(u,f,a),a&&g&4&&p0(u,f);break;case 22:f.memoizedState===null&&fa(u,f,a),bl(f,f.return);break;case 30:break;default:fa(u,f,a)}n=n.sibling}}function Mf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&ol(a))}function bf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ol(e))}function wi(e,n,a,l){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)v0(e,n,a,l),n=n.sibling}function v0(e,n,a,l){var u=n.flags;switch(n.tag){case 0:case 11:case 15:wi(e,n,a,l),u&2048&&Ml(9,n);break;case 1:wi(e,n,a,l);break;case 3:wi(e,n,a,l),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ol(e)));break;case 12:if(u&2048){wi(e,n,a,l),e=n.stateNode;try{var f=n.memoizedProps,g=f.id,C=f.onPostCommit;typeof C=="function"&&C(g,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(F){Gt(n,n.return,F)}}else wi(e,n,a,l);break;case 31:wi(e,n,a,l);break;case 13:wi(e,n,a,l);break;case 23:break;case 22:f=n.stateNode,g=n.alternate,n.memoizedState!==null?f._visibility&2?wi(e,n,a,l):yl(e,n):f._visibility&2?wi(e,n,a,l):(f._visibility|=2,cr(e,n,a,l,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Mf(g,n);break;case 24:wi(e,n,a,l),u&2048&&bf(n.alternate,n);break;default:wi(e,n,a,l)}}function cr(e,n,a,l,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,g=n,C=a,F=l,J=g.flags;switch(g.tag){case 0:case 11:case 15:cr(f,g,C,F,u),Ml(8,g);break;case 23:break;case 22:var ue=g.stateNode;g.memoizedState!==null?ue._visibility&2?cr(f,g,C,F,u):yl(f,g):(ue._visibility|=2,cr(f,g,C,F,u)),u&&J&2048&&Mf(g.alternate,g);break;case 24:cr(f,g,C,F,u),u&&J&2048&&bf(g.alternate,g);break;default:cr(f,g,C,F,u)}n=n.sibling}}function yl(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,l=n,u=l.flags;switch(l.tag){case 22:yl(a,l),u&2048&&Mf(l.alternate,l);break;case 24:yl(a,l),u&2048&&bf(l.alternate,l);break;default:yl(a,l)}n=n.sibling}}var El=8192;function ur(e,n,a){if(e.subtreeFlags&El)for(e=e.child;e!==null;)_0(e,n,a),e=e.sibling}function _0(e,n,a){switch(e.tag){case 26:ur(e,n,a),e.flags&El&&e.memoizedState!==null&&xx(a,Ci,e.memoizedState,e.memoizedProps);break;case 5:ur(e,n,a);break;case 3:case 4:var l=Ci;Ci=ec(e.stateNode.containerInfo),ur(e,n,a),Ci=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=El,El=16777216,ur(e,n,a),El=l):ur(e,n,a));break;default:ur(e,n,a)}}function x0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Tl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var l=n[a];An=l,M0(l,e)}x0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)S0(e),e=e.sibling}function S0(e){switch(e.tag){case 0:case 11:case 15:Tl(e),e.flags&2048&&ka(9,e,e.return);break;case 3:Tl(e);break;case 12:Tl(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Go(e)):Tl(e);break;default:Tl(e)}}function Go(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var l=n[a];An=l,M0(l,e)}x0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ka(8,n,n.return),Go(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Go(n));break;default:Go(n)}e=e.sibling}}function M0(e,n){for(;An!==null;){var a=An;switch(a.tag){case 0:case 11:case 15:ka(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:ol(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,An=l;else e:for(a=e;An!==null;){l=An;var u=l.sibling,f=l.return;if(f0(l),l===a){An=null;break e}if(u!==null){u.return=f,An=u;break e}An=f}}}var O_={getCacheForType:function(e){var n=Ln(gn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Ln(gn).controller.signal}},P_=typeof WeakMap=="function"?WeakMap:Map,Lt=0,Kt=null,vt=null,St=0,Ht=0,ri=null,ja=!1,fr=!1,yf=!1,da=0,ln=0,Xa=0,ws=0,Ef=0,li=0,dr=0,Al=null,Zn=null,Tf=!1,Vo=0,b0=0,ko=1/0,jo=null,Wa=null,bn=0,qa=null,hr=null,ha=0,Af=0,Rf=null,y0=null,Rl=0,Cf=null;function oi(){return(Lt&2)!==0&&St!==0?St&-St:U.T!==null?Of():qr()}function E0(){if(li===0)if((St&536870912)===0||bt){var e=mt;mt<<=1,(mt&3932160)===0&&(mt=262144),li=e}else li=536870912;return e=ai.current,e!==null&&(e.flags|=32),li}function Kn(e,n,a){(e===Kt&&(Ht===2||Ht===9)||e.cancelPendingCommit!==null)&&(pr(e,0),Ya(e,St,li,!1)),tt(e,a),((Lt&2)===0||e!==Kt)&&(e===Kt&&((Lt&2)===0&&(ws|=a),ln===4&&Ya(e,St,li,!1)),Vi(e))}function T0(e,n,a){if((Lt&6)!==0)throw Error(r(327));var l=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Pe(e,n),u=l?I_(e,n):Df(e,n,!0),f=l;do{if(u===0){fr&&!l&&Ya(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!B_(a)){u=Df(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var g=0;else g=e.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;e:{var C=e;u=Al;var F=C.current.memoizedState.isDehydrated;if(F&&(pr(C,g).flags|=256),g=Df(C,g,!1),g!==2){if(yf&&!F){C.errorRecoveryDisabledLanes|=f,ws|=f,u=4;break e}f=Zn,Zn=u,f!==null&&(Zn===null?Zn=f:Zn.push.apply(Zn,f))}u=g}if(f=!1,u!==2)continue}}if(u===1){pr(e,0),Ya(e,n,0,!0);break}e:{switch(l=e,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ya(l,n,li,!ja);break e;case 2:Zn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Vo+300-be(),10<u)){if(Ya(l,n,li,!ja),fe(l,0,!0)!==0)break e;ha=n,l.timeoutHandle=ng(A0.bind(null,l,a,Zn,jo,Tf,n,li,ws,dr,ja,f,"Throttled",-0,0),u);break e}A0(l,a,Zn,jo,Tf,n,li,ws,dr,ja,f,null,-0,0)}}break}while(!0);Vi(e)}function A0(e,n,a,l,u,f,g,C,F,J,ue,ge,ne,se){if(e.timeoutHandle=-1,ge=n.subtreeFlags,ge&8192||(ge&16785408)===16785408){ge={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ji},_0(n,f,ge);var je=(f&62914560)===f?Vo-be():(f&4194048)===f?b0-be():0;if(je=Sx(ge,je),je!==null){ha=f,e.cancelPendingCommit=je(O0.bind(null,e,n,f,a,l,u,g,C,F,ue,ge,null,ne,se)),Ya(e,f,g,!J);return}}O0(e,n,f,a,l,u,g,C,F)}function B_(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var u=a[l],f=u.getSnapshot;u=u.value;try{if(!ni(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ya(e,n,a,l){n&=~Ef,n&=~ws,e.suspendedLanes|=n,e.pingedLanes&=~n,l&&(e.warmLanes|=n),l=e.expirationTimes;for(var u=n;0<u;){var f=31-Ne(u),g=1<<f;l[f]=-1,u&=~g}a!==0&&Ut(e,a,n)}function Xo(){return(Lt&6)===0?(Cl(0),!1):!0}function wf(){if(vt!==null){if(Ht===0)var e=vt.return;else e=vt,na=Ss=null,ju(e),ar=null,ul=0,e=vt;for(;e!==null;)i0(e.alternate,e),e=e.return;vt=null}}function pr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,nx(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ha=0,wf(),Kt=e,vt=a=ea(e.current,null),St=n,Ht=0,ri=null,ja=!1,fr=Pe(e,n),yf=!1,dr=li=Ef=ws=Xa=ln=0,Zn=Al=null,Tf=!1,(n&8)!==0&&(n|=n&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=n;0<l;){var u=31-Ne(l),f=1<<u;n|=e[u],l&=~f}return da=n,fo(),a}function R0(e,n){ot=null,U.H=_l,n===ir||n===So?(n=kp(),Ht=3):n===Uu?(n=kp(),Ht=4):Ht=n===lf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ri=n,vt===null&&(ln=1,Oo(e,mi(n,e.current)))}function C0(){var e=ai.current;return e===null?!0:(St&4194048)===St?xi===null:(St&62914560)===St||(St&536870912)!==0?e===xi:!1}function w0(){var e=U.H;return U.H=_l,e===null?_l:e}function D0(){var e=U.A;return U.A=O_,e}function Wo(){ln=4,ja||(St&4194048)!==St&&ai.current!==null||(fr=!0),(Xa&134217727)===0&&(ws&134217727)===0||Kt===null||Ya(Kt,St,li,!1)}function Df(e,n,a){var l=Lt;Lt|=2;var u=w0(),f=D0();(Kt!==e||St!==n)&&(jo=null,pr(e,n)),n=!1;var g=ln;e:do try{if(Ht!==0&&vt!==null){var C=vt,F=ri;switch(Ht){case 8:wf(),g=6;break e;case 3:case 2:case 9:case 6:ai.current===null&&(n=!0);var J=Ht;if(Ht=0,ri=null,mr(e,C,F,J),a&&fr){g=0;break e}break;default:J=Ht,Ht=0,ri=null,mr(e,C,F,J)}}F_(),g=ln;break}catch(ue){R0(e,ue)}while(!0);return n&&e.shellSuspendCounter++,na=Ss=null,Lt=l,U.H=u,U.A=f,vt===null&&(Kt=null,St=0,fo()),g}function F_(){for(;vt!==null;)N0(vt)}function I_(e,n){var a=Lt;Lt|=2;var l=w0(),u=D0();Kt!==e||St!==n?(jo=null,ko=be()+500,pr(e,n)):fr=Pe(e,n);e:do try{if(Ht!==0&&vt!==null){n=vt;var f=ri;t:switch(Ht){case 1:Ht=0,ri=null,mr(e,n,f,1);break;case 2:case 9:if(Gp(f)){Ht=0,ri=null,U0(n);break}n=function(){Ht!==2&&Ht!==9||Kt!==e||(Ht=7),Vi(e)},f.then(n,n);break e;case 3:Ht=7;break e;case 4:Ht=5;break e;case 7:Gp(f)?(Ht=0,ri=null,U0(n)):(Ht=0,ri=null,mr(e,n,f,7));break;case 5:var g=null;switch(vt.tag){case 26:g=vt.memoizedState;case 5:case 27:var C=vt;if(g?vg(g):C.stateNode.complete){Ht=0,ri=null;var F=C.sibling;if(F!==null)vt=F;else{var J=C.return;J!==null?(vt=J,qo(J)):vt=null}break t}}Ht=0,ri=null,mr(e,n,f,5);break;case 6:Ht=0,ri=null,mr(e,n,f,6);break;case 8:wf(),ln=6;break e;default:throw Error(r(462))}}z_();break}catch(ue){R0(e,ue)}while(!0);return na=Ss=null,U.H=l,U.A=u,Lt=a,vt!==null?0:(Kt=null,St=0,fo(),ln)}function z_(){for(;vt!==null&&!ht();)N0(vt)}function N0(e){var n=t0(e.alternate,e,da);e.memoizedProps=e.pendingProps,n===null?qo(e):vt=n}function U0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Zm(a,n,n.pendingProps,n.type,void 0,St);break;case 11:n=Zm(a,n,n.pendingProps,n.type.render,n.ref,St);break;case 5:ju(n);default:i0(a,n),n=vt=Dp(n,da),n=t0(a,n,da)}e.memoizedProps=e.pendingProps,n===null?qo(e):vt=n}function mr(e,n,a,l){na=Ss=null,ju(n),ar=null,ul=0;var u=n.return;try{if(R_(e,u,n,a,St)){ln=1,Oo(e,mi(a,e.current)),vt=null;return}}catch(f){if(u!==null)throw vt=u,f;ln=1,Oo(e,mi(a,e.current)),vt=null;return}n.flags&32768?(bt||l===1?e=!0:fr||(St&536870912)!==0?e=!1:(ja=e=!0,(l===2||l===9||l===3||l===6)&&(l=ai.current,l!==null&&l.tag===13&&(l.flags|=16384))),L0(n,e)):qo(n)}function qo(e){var n=e;do{if((n.flags&32768)!==0){L0(n,ja);return}e=n.return;var a=D_(n.alternate,n,da);if(a!==null){vt=a;return}if(n=n.sibling,n!==null){vt=n;return}vt=n=e}while(n!==null);ln===0&&(ln=5)}function L0(e,n){do{var a=N_(e.alternate,e);if(a!==null){a.flags&=32767,vt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){vt=e;return}vt=e=a}while(e!==null);ln=6,vt=null}function O0(e,n,a,l,u,f,g,C,F){e.cancelPendingCommit=null;do Yo();while(bn!==0);if((Lt&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=vu,sn(e,a,f,g,C,F),e===Kt&&(vt=Kt=null,St=0),hr=n,qa=e,ha=a,Af=f,Rf=u,y0=l,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,k_(Z,function(){return z0(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||l){l=U.T,U.T=null,u=I.p,I.p=2,g=Lt,Lt|=4;try{U_(e,n,a)}finally{Lt=g,I.p=u,U.T=l}}bn=1,P0(),B0(),F0()}}function P0(){if(bn===1){bn=0;var e=qa,n=hr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=U.T,U.T=null;var l=I.p;I.p=2;var u=Lt;Lt|=4;try{m0(n,e);var f=Vf,g=Mp(e.containerInfo),C=f.focusedElem,F=f.selectionRange;if(g!==C&&C&&C.ownerDocument&&Sp(C.ownerDocument.documentElement,C)){if(F!==null&&du(C)){var J=F.start,ue=F.end;if(ue===void 0&&(ue=J),"selectionStart"in C)C.selectionStart=J,C.selectionEnd=Math.min(ue,C.value.length);else{var ge=C.ownerDocument||document,ne=ge&&ge.defaultView||window;if(ne.getSelection){var se=ne.getSelection(),je=C.textContent.length,$e=Math.min(F.start,je),qt=F.end===void 0?$e:Math.min(F.end,je);!se.extend&&$e>qt&&(g=qt,qt=$e,$e=g);var q=xp(C,$e),V=xp(C,qt);if(q&&V&&(se.rangeCount!==1||se.anchorNode!==q.node||se.anchorOffset!==q.offset||se.focusNode!==V.node||se.focusOffset!==V.offset)){var Q=ge.createRange();Q.setStart(q.node,q.offset),se.removeAllRanges(),$e>qt?(se.addRange(Q),se.extend(V.node,V.offset)):(Q.setEnd(V.node,V.offset),se.addRange(Q))}}}}for(ge=[],se=C;se=se.parentNode;)se.nodeType===1&&ge.push({element:se,left:se.scrollLeft,top:se.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<ge.length;C++){var pe=ge[C];pe.element.scrollLeft=pe.left,pe.element.scrollTop=pe.top}}rc=!!Gf,Vf=Gf=null}finally{Lt=u,I.p=l,U.T=a}}e.current=n,bn=2}}function B0(){if(bn===2){bn=0;var e=qa,n=hr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=U.T,U.T=null;var l=I.p;I.p=2;var u=Lt;Lt|=4;try{u0(e,n.alternate,n)}finally{Lt=u,I.p=l,U.T=a}}bn=3}}function F0(){if(bn===4||bn===3){bn=0,jt();var e=qa,n=hr,a=ha,l=y0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?bn=5:(bn=0,hr=qa=null,I0(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Wa=null),Wr(a),n=n.stateNode,ce&&typeof ce.onCommitFiberRoot=="function")try{ce.onCommitFiberRoot(re,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=U.T,u=I.p,I.p=2,U.T=null;try{for(var f=e.onRecoverableError,g=0;g<l.length;g++){var C=l[g];f(C.value,{componentStack:C.stack})}}finally{U.T=n,I.p=u}}(ha&3)!==0&&Yo(),Vi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Cf?Rl++:(Rl=0,Cf=e):Rl=0,Cl(0)}}function I0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,ol(n)))}function Yo(){return P0(),B0(),F0(),z0()}function z0(){if(bn!==5)return!1;var e=qa,n=Af;Af=0;var a=Wr(ha),l=U.T,u=I.p;try{I.p=32>a?32:a,U.T=null,a=Rf,Rf=null;var f=qa,g=ha;if(bn=0,hr=qa=null,ha=0,(Lt&6)!==0)throw Error(r(331));var C=Lt;if(Lt|=4,S0(f.current),v0(f,f.current,g,a),Lt=C,Cl(0,!1),ce&&typeof ce.onPostCommitFiberRoot=="function")try{ce.onPostCommitFiberRoot(re,f)}catch{}return!0}finally{I.p=u,U.T=l,I0(e,n)}}function H0(e,n,a){n=mi(a,n),n=rf(e.stateNode,n,2),e=Ha(e,n,2),e!==null&&(tt(e,2),Vi(e))}function Gt(e,n,a){if(e.tag===3)H0(e,e,a);else for(;n!==null;){if(n.tag===3){H0(n,e,a);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Wa===null||!Wa.has(l))){e=mi(a,e),a=Gm(2),l=Ha(n,a,2),l!==null&&(Vm(a,l,n,e),tt(l,2),Vi(l));break}}n=n.return}}function Nf(e,n,a){var l=e.pingCache;if(l===null){l=e.pingCache=new P_;var u=new Set;l.set(n,u)}else u=l.get(n),u===void 0&&(u=new Set,l.set(n,u));u.has(a)||(yf=!0,u.add(a),e=H_.bind(null,e,n,a),n.then(e,e))}function H_(e,n,a){var l=e.pingCache;l!==null&&l.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Kt===e&&(St&a)===a&&(ln===4||ln===3&&(St&62914560)===St&&300>be()-Vo?(Lt&2)===0&&pr(e,0):Ef|=a,dr===St&&(dr=0)),Vi(e)}function G0(e,n){n===0&&(n=xe()),e=vs(e,n),e!==null&&(tt(e,n),Vi(e))}function G_(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),G0(e,a)}function V_(e,n){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(n),G0(e,a)}function k_(e,n){return k(e,n)}var Zo=null,gr=null,Uf=!1,Ko=!1,Lf=!1,Za=0;function Vi(e){e!==gr&&e.next===null&&(gr===null?Zo=gr=e:gr=gr.next=e),Ko=!0,Uf||(Uf=!0,X_())}function Cl(e,n){if(!Lf&&Ko){Lf=!0;do for(var a=!1,l=Zo;l!==null;){if(e!==0){var u=l.pendingLanes;if(u===0)var f=0;else{var g=l.suspendedLanes,C=l.pingedLanes;f=(1<<31-Ne(42|e)+1)-1,f&=u&~(g&~C),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,X0(l,f))}else f=St,f=fe(l,l===Kt?f:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(f&3)===0||Pe(l,f)||(a=!0,X0(l,f));l=l.next}while(a);Lf=!1}}function j_(){V0()}function V0(){Ko=Uf=!1;var e=0;Za!==0&&tx()&&(e=Za);for(var n=be(),a=null,l=Zo;l!==null;){var u=l.next,f=k0(l,n);f===0?(l.next=null,a===null?Zo=u:a.next=u,u===null&&(gr=a)):(a=l,(e!==0||(f&3)!==0)&&(Ko=!0)),l=u}bn!==0&&bn!==5||Cl(e),Za!==0&&(Za=0)}function k0(e,n){for(var a=e.suspendedLanes,l=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var g=31-Ne(f),C=1<<g,F=u[g];F===-1?((C&a)===0||(C&l)!==0)&&(u[g]=Ae(C,n)):F<=n&&(e.expiredLanes|=C),f&=~C}if(n=Kt,a=St,a=fe(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===n&&(Ht===2||Ht===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Qt(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Pe(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(l!==null&&Qt(l),Wr(a)){case 2:case 8:a=E;break;case 32:a=Z;break;case 268435456:a=Se;break;default:a=Z}return l=j0.bind(null,e),a=k(a,l),e.callbackPriority=n,e.callbackNode=a,n}return l!==null&&l!==null&&Qt(l),e.callbackPriority=2,e.callbackNode=null,2}function j0(e,n){if(bn!==0&&bn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Yo()&&e.callbackNode!==a)return null;var l=St;return l=fe(e,e===Kt?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(T0(e,l,n),k0(e,be()),e.callbackNode!=null&&e.callbackNode===a?j0.bind(null,e):null)}function X0(e,n){if(Yo())return null;T0(e,n,!0)}function X_(){ix(function(){(Lt&6)!==0?k(N,j_):V0()})}function Of(){if(Za===0){var e=tr;e===0&&(e=at,at<<=1,(at&261888)===0&&(at=256)),Za=e}return Za}function W0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:hs(""+e)}function q0(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function W_(e,n,a,l,u){if(n==="submit"&&a&&a.stateNode===u){var f=W0((u[Nn]||null).action),g=l.submitter;g&&(n=(n=g[Nn]||null)?W0(n.formAction):g.getAttribute("formAction"),n!==null&&(f=n,g=null));var C=new lo("action","action",null,l,u);e.push({event:C,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Za!==0){var F=g?q0(u,g):new FormData(u);$u(a,{pending:!0,data:F,method:u.method,action:f},null,F)}}else typeof f=="function"&&(C.preventDefault(),F=g?q0(u,g):new FormData(u),$u(a,{pending:!0,data:F,method:u.method,action:f},f,F))},currentTarget:u}]})}}for(var Pf=0;Pf<gu.length;Pf++){var Bf=gu[Pf],q_=Bf.toLowerCase(),Y_=Bf[0].toUpperCase()+Bf.slice(1);Ri(q_,"on"+Y_)}Ri(Ep,"onAnimationEnd"),Ri(Tp,"onAnimationIteration"),Ri(Ap,"onAnimationStart"),Ri("dblclick","onDoubleClick"),Ri("focusin","onFocus"),Ri("focusout","onBlur"),Ri(u_,"onTransitionRun"),Ri(f_,"onTransitionStart"),Ri(d_,"onTransitionCancel"),Ri(Rp,"onTransitionEnd"),te("onMouseEnter",["mouseout","mouseover"]),te("onMouseLeave",["mouseout","mouseover"]),te("onPointerEnter",["pointerout","pointerover"]),te("onPointerLeave",["pointerout","pointerover"]),W("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),W("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),W("onBeforeInput",["compositionend","keypress","textInput","paste"]),W("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),W("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),W("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Z_=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(wl));function Y0(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],u=l.event;l=l.listeners;e:{var f=void 0;if(n)for(var g=l.length-1;0<=g;g--){var C=l[g],F=C.instance,J=C.currentTarget;if(C=C.listener,F!==f&&u.isPropagationStopped())break e;f=C,u.currentTarget=J;try{f(u)}catch(ue){uo(ue)}u.currentTarget=null,f=F}else for(g=0;g<l.length;g++){if(C=l[g],F=C.instance,J=C.currentTarget,C=C.listener,F!==f&&u.isPropagationStopped())break e;f=C,u.currentTarget=J;try{f(u)}catch(ue){uo(ue)}u.currentTarget=null,f=F}}}}function _t(e,n){var a=n[Ra];a===void 0&&(a=n[Ra]=new Set);var l=e+"__bubble";a.has(l)||(Z0(n,e,2,!1),a.add(l))}function Ff(e,n,a){var l=0;n&&(l|=4),Z0(a,e,l,n)}var Qo="_reactListening"+Math.random().toString(36).slice(2);function If(e){if(!e[Qo]){e[Qo]=!0,io.forEach(function(a){a!=="selectionchange"&&(Z_.has(a)||Ff(a,!1,e),Ff(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Qo]||(n[Qo]=!0,Ff("selectionchange",!1,n))}}function Z0(e,n,a,l){switch(Eg(n)){case 2:var u=yx;break;case 8:u=Ex;break;default:u=$f}a=u.bind(null,n,a,e),u=void 0,!iu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),l?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function zf(e,n,a,l,u){var f=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var g=l.tag;if(g===3||g===4){var C=l.stateNode.containerInfo;if(C===u)break;if(g===4)for(g=l.return;g!==null;){var F=g.tag;if((F===3||F===4)&&g.stateNode.containerInfo===u)return;g=g.return}for(;C!==null;){if(g=wa(C),g===null)return;if(F=g.tag,F===5||F===6||F===26||F===27){l=f=g;continue e}C=C.parentNode}}l=l.return}ep(function(){var J=f,ue=tu(a),ge=[];e:{var ne=Cp.get(e);if(ne!==void 0){var se=lo,je=e;switch(e){case"keypress":if(so(a)===0)break e;case"keydown":case"keyup":se=Vv;break;case"focusin":je="focus",se=lu;break;case"focusout":je="blur",se=lu;break;case"beforeblur":case"afterblur":se=lu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":se=ip;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":se=Dv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":se=Xv;break;case Ep:case Tp:case Ap:se=Lv;break;case Rp:se=qv;break;case"scroll":case"scrollend":se=Cv;break;case"wheel":se=Zv;break;case"copy":case"cut":case"paste":se=Pv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":se=sp;break;case"toggle":case"beforetoggle":se=Qv}var $e=(n&4)!==0,qt=!$e&&(e==="scroll"||e==="scrollend"),q=$e?ne!==null?ne+"Capture":null:ne;$e=[];for(var V=J,Q;V!==null;){var pe=V;if(Q=pe.stateNode,pe=pe.tag,pe!==5&&pe!==26&&pe!==27||Q===null||q===null||(pe=Qr(V,q),pe!=null&&$e.push(Dl(V,pe,Q))),qt)break;V=V.return}0<$e.length&&(ne=new se(ne,je,null,a,ue),ge.push({event:ne,listeners:$e}))}}if((n&7)===0){e:{if(ne=e==="mouseover"||e==="pointerover",se=e==="mouseout"||e==="pointerout",ne&&a!==eu&&(je=a.relatedTarget||a.fromElement)&&(wa(je)||je[Qi]))break e;if((se||ne)&&(ne=ue.window===ue?ue:(ne=ue.ownerDocument)?ne.defaultView||ne.parentWindow:window,se?(je=a.relatedTarget||a.toElement,se=J,je=je?wa(je):null,je!==null&&(qt=c(je),$e=je.tag,je!==qt||$e!==5&&$e!==27&&$e!==6)&&(je=null)):(se=null,je=J),se!==je)){if($e=ip,pe="onMouseLeave",q="onMouseEnter",V="mouse",(e==="pointerout"||e==="pointerover")&&($e=sp,pe="onPointerLeave",q="onPointerEnter",V="pointer"),qt=se==null?ne:ds(se),Q=je==null?ne:ds(je),ne=new $e(pe,V+"leave",se,a,ue),ne.target=qt,ne.relatedTarget=Q,pe=null,wa(ue)===J&&($e=new $e(q,V+"enter",je,a,ue),$e.target=Q,$e.relatedTarget=qt,pe=$e),qt=pe,se&&je)t:{for($e=K_,q=se,V=je,Q=0,pe=q;pe;pe=$e(pe))Q++;pe=0;for(var Qe=V;Qe;Qe=$e(Qe))pe++;for(;0<Q-pe;)q=$e(q),Q--;for(;0<pe-Q;)V=$e(V),pe--;for(;Q--;){if(q===V||V!==null&&q===V.alternate){$e=q;break t}q=$e(q),V=$e(V)}$e=null}else $e=null;se!==null&&K0(ge,ne,se,$e,!1),je!==null&&qt!==null&&K0(ge,qt,je,$e,!0)}}e:{if(ne=J?ds(J):window,se=ne.nodeName&&ne.nodeName.toLowerCase(),se==="select"||se==="input"&&ne.type==="file")var wt=hp;else if(fp(ne))if(pp)wt=l_;else{wt=s_;var We=a_}else se=ne.nodeName,!se||se.toLowerCase()!=="input"||ne.type!=="checkbox"&&ne.type!=="radio"?J&&Ot(J.elementType)&&(wt=hp):wt=r_;if(wt&&(wt=wt(e,J))){dp(ge,wt,a,ue);break e}We&&We(e,ne,J),e==="focusout"&&J&&ne.type==="number"&&J.memoizedProps.value!=null&&gt(ne,"number",ne.value)}switch(We=J?ds(J):window,e){case"focusin":(fp(We)||We.contentEditable==="true")&&(qs=We,hu=J,sl=null);break;case"focusout":sl=hu=qs=null;break;case"mousedown":pu=!0;break;case"contextmenu":case"mouseup":case"dragend":pu=!1,bp(ge,a,ue);break;case"selectionchange":if(c_)break;case"keydown":case"keyup":bp(ge,a,ue)}var ft;if(cu)e:{switch(e){case"compositionstart":var Mt="onCompositionStart";break e;case"compositionend":Mt="onCompositionEnd";break e;case"compositionupdate":Mt="onCompositionUpdate";break e}Mt=void 0}else Ws?cp(e,a)&&(Mt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Mt="onCompositionStart");Mt&&(rp&&a.locale!=="ko"&&(Ws||Mt!=="onCompositionStart"?Mt==="onCompositionEnd"&&Ws&&(ft=tp()):(La=ue,au="value"in La?La.value:La.textContent,Ws=!0)),We=Jo(J,Mt),0<We.length&&(Mt=new ap(Mt,e,null,a,ue),ge.push({event:Mt,listeners:We}),ft?Mt.data=ft:(ft=up(a),ft!==null&&(Mt.data=ft)))),(ft=$v?e_(e,a):t_(e,a))&&(Mt=Jo(J,"onBeforeInput"),0<Mt.length&&(We=new ap("onBeforeInput","beforeinput",null,a,ue),ge.push({event:We,listeners:Mt}),We.data=ft)),W_(ge,e,J,a,ue)}Y0(ge,n)})}function Dl(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Jo(e,n){for(var a=n+"Capture",l=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Qr(e,a),u!=null&&l.unshift(Dl(e,u,f)),u=Qr(e,n),u!=null&&l.push(Dl(e,u,f))),e.tag===3)return l;e=e.return}return[]}function K_(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function K0(e,n,a,l,u){for(var f=n._reactName,g=[];a!==null&&a!==l;){var C=a,F=C.alternate,J=C.stateNode;if(C=C.tag,F!==null&&F===l)break;C!==5&&C!==26&&C!==27||J===null||(F=J,u?(J=Qr(a,f),J!=null&&g.unshift(Dl(a,J,F))):u||(J=Qr(a,f),J!=null&&g.push(Dl(a,J,F)))),a=a.return}g.length!==0&&e.push({event:n,listeners:g})}var Q_=/\r\n?/g,J_=/\u0000|\uFFFD/g;function Q0(e){return(typeof e=="string"?e:""+e).replace(Q_,`
`).replace(J_,"")}function J0(e,n){return n=Q0(n),Q0(e)===n}function Wt(e,n,a,l,u,f){switch(a){case"children":typeof l=="string"?n==="body"||n==="textarea"&&l===""||ti(e,l):(typeof l=="number"||typeof l=="bigint")&&n!=="body"&&ti(e,""+l);break;case"className":ke(e,"class",l);break;case"tabIndex":ke(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ke(e,a,l);break;case"style":Ai(e,l,f);break;case"data":if(n!=="object"){ke(e,"data",l);break}case"src":case"href":if(l===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=hs(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Wt(e,n,"name",u.name,u,null),Wt(e,n,"formEncType",u.formEncType,u,null),Wt(e,n,"formMethod",u.formMethod,u,null),Wt(e,n,"formTarget",u.formTarget,u,null)):(Wt(e,n,"encType",u.encType,u,null),Wt(e,n,"method",u.method,u,null),Wt(e,n,"target",u.target,u,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=hs(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Ji);break;case"onScroll":l!=null&&_t("scroll",e);break;case"onScrollEnd":l!=null&&_t("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(a=l.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=hs(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":_t("beforetoggle",e),_t("toggle",e),Le(e,"popover",l);break;case"xlinkActuate":Ge(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ge(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ge(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ge(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ge(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ge(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ge(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ge(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ge(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Le(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Ii.get(a)||a,Le(e,a,l))}}function Hf(e,n,a,l,u,f){switch(a){case"style":Ai(e,l,f);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(a=l.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof l=="string"?ti(e,l):(typeof l=="number"||typeof l=="bigint")&&ti(e,""+l);break;case"onScroll":l!=null&&_t("scroll",e);break;case"onScrollEnd":l!=null&&_t("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Ji);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!A.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[Nn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof l=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,l,u);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):Le(e,a,l)}}}function Pn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_t("error",e),_t("load",e);var l=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var g=a[f];if(g!=null)switch(f){case"src":l=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Wt(e,n,f,g,a,null)}}u&&Wt(e,n,"srcSet",a.srcSet,a,null),l&&Wt(e,n,"src",a.src,a,null);return;case"input":_t("invalid",e);var C=f=g=u=null,F=null,J=null;for(l in a)if(a.hasOwnProperty(l)){var ue=a[l];if(ue!=null)switch(l){case"name":u=ue;break;case"type":g=ue;break;case"checked":F=ue;break;case"defaultChecked":J=ue;break;case"value":f=ue;break;case"defaultValue":C=ue;break;case"children":case"dangerouslySetInnerHTML":if(ue!=null)throw Error(r(137,n));break;default:Wt(e,n,l,ue,a,null)}}In(e,f,C,F,J,g,u,!1);return;case"select":_t("invalid",e),l=g=f=null;for(u in a)if(a.hasOwnProperty(u)&&(C=a[u],C!=null))switch(u){case"value":f=C;break;case"defaultValue":g=C;break;case"multiple":l=C;default:Wt(e,n,u,C,a,null)}n=f,a=g,e.multiple=!!l,n!=null?Mn(e,!!l,n,!1):a!=null&&Mn(e,!!l,a,!0);return;case"textarea":_t("invalid",e),f=u=l=null;for(g in a)if(a.hasOwnProperty(g)&&(C=a[g],C!=null))switch(g){case"value":l=C;break;case"defaultValue":u=C;break;case"children":f=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(r(91));break;default:Wt(e,n,g,C,a,null)}Ti(e,l,u,f);return;case"option":for(F in a)if(a.hasOwnProperty(F)&&(l=a[F],l!=null))switch(F){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Wt(e,n,F,l,a,null)}return;case"dialog":_t("beforetoggle",e),_t("toggle",e),_t("cancel",e),_t("close",e);break;case"iframe":case"object":_t("load",e);break;case"video":case"audio":for(l=0;l<wl.length;l++)_t(wl[l],e);break;case"image":_t("error",e),_t("load",e);break;case"details":_t("toggle",e);break;case"embed":case"source":case"link":_t("error",e),_t("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(l=a[J],l!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Wt(e,n,J,l,a,null)}return;default:if(Ot(n)){for(ue in a)a.hasOwnProperty(ue)&&(l=a[ue],l!==void 0&&Hf(e,n,ue,l,a,void 0));return}}for(C in a)a.hasOwnProperty(C)&&(l=a[C],l!=null&&Wt(e,n,C,l,a,null))}function $_(e,n,a,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,g=null,C=null,F=null,J=null,ue=null;for(se in a){var ge=a[se];if(a.hasOwnProperty(se)&&ge!=null)switch(se){case"checked":break;case"value":break;case"defaultValue":F=ge;default:l.hasOwnProperty(se)||Wt(e,n,se,null,l,ge)}}for(var ne in l){var se=l[ne];if(ge=a[ne],l.hasOwnProperty(ne)&&(se!=null||ge!=null))switch(ne){case"type":f=se;break;case"name":u=se;break;case"checked":J=se;break;case"defaultChecked":ue=se;break;case"value":g=se;break;case"defaultValue":C=se;break;case"children":case"dangerouslySetInnerHTML":if(se!=null)throw Error(r(137,n));break;default:se!==ge&&Wt(e,n,ne,se,l,ge)}}Fe(e,g,C,F,J,ue,f,u);return;case"select":se=g=C=ne=null;for(f in a)if(F=a[f],a.hasOwnProperty(f)&&F!=null)switch(f){case"value":break;case"multiple":se=F;default:l.hasOwnProperty(f)||Wt(e,n,f,null,l,F)}for(u in l)if(f=l[u],F=a[u],l.hasOwnProperty(u)&&(f!=null||F!=null))switch(u){case"value":ne=f;break;case"defaultValue":C=f;break;case"multiple":g=f;default:f!==F&&Wt(e,n,u,f,l,F)}n=C,a=g,l=se,ne!=null?Mn(e,!!a,ne,!1):!!l!=!!a&&(n!=null?Mn(e,!!a,n,!0):Mn(e,!!a,a?[]:"",!1));return;case"textarea":se=ne=null;for(C in a)if(u=a[C],a.hasOwnProperty(C)&&u!=null&&!l.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:Wt(e,n,C,null,l,u)}for(g in l)if(u=l[g],f=a[g],l.hasOwnProperty(g)&&(u!=null||f!=null))switch(g){case"value":ne=u;break;case"defaultValue":se=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Wt(e,n,g,u,l,f)}ei(e,ne,se);return;case"option":for(var je in a)if(ne=a[je],a.hasOwnProperty(je)&&ne!=null&&!l.hasOwnProperty(je))switch(je){case"selected":e.selected=!1;break;default:Wt(e,n,je,null,l,ne)}for(F in l)if(ne=l[F],se=a[F],l.hasOwnProperty(F)&&ne!==se&&(ne!=null||se!=null))switch(F){case"selected":e.selected=ne&&typeof ne!="function"&&typeof ne!="symbol";break;default:Wt(e,n,F,ne,l,se)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $e in a)ne=a[$e],a.hasOwnProperty($e)&&ne!=null&&!l.hasOwnProperty($e)&&Wt(e,n,$e,null,l,ne);for(J in l)if(ne=l[J],se=a[J],l.hasOwnProperty(J)&&ne!==se&&(ne!=null||se!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(ne!=null)throw Error(r(137,n));break;default:Wt(e,n,J,ne,l,se)}return;default:if(Ot(n)){for(var qt in a)ne=a[qt],a.hasOwnProperty(qt)&&ne!==void 0&&!l.hasOwnProperty(qt)&&Hf(e,n,qt,void 0,l,ne);for(ue in l)ne=l[ue],se=a[ue],!l.hasOwnProperty(ue)||ne===se||ne===void 0&&se===void 0||Hf(e,n,ue,ne,l,se);return}}for(var q in a)ne=a[q],a.hasOwnProperty(q)&&ne!=null&&!l.hasOwnProperty(q)&&Wt(e,n,q,null,l,ne);for(ge in l)ne=l[ge],se=a[ge],!l.hasOwnProperty(ge)||ne===se||ne==null&&se==null||Wt(e,n,ge,ne,l,se)}function $0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ex(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var u=a[l],f=u.transferSize,g=u.initiatorType,C=u.duration;if(f&&C&&$0(g)){for(g=0,C=u.responseEnd,l+=1;l<a.length;l++){var F=a[l],J=F.startTime;if(J>C)break;var ue=F.transferSize,ge=F.initiatorType;ue&&$0(ge)&&(F=F.responseEnd,g+=ue*(F<C?1:(C-J)/(F-J)))}if(--l,n+=8*(f+g)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Gf=null,Vf=null;function $o(e){return e.nodeType===9?e:e.ownerDocument}function eg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function tg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function kf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var jf=null;function tx(){var e=window.event;return e&&e.type==="popstate"?e===jf?!1:(jf=e,!0):(jf=null,!1)}var ng=typeof setTimeout=="function"?setTimeout:void 0,nx=typeof clearTimeout=="function"?clearTimeout:void 0,ig=typeof Promise=="function"?Promise:void 0,ix=typeof queueMicrotask=="function"?queueMicrotask:typeof ig<"u"?function(e){return ig.resolve(null).then(e).catch(ax)}:ng;function ax(e){setTimeout(function(){throw e})}function Ka(e){return e==="head"}function ag(e,n){var a=n,l=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(u),Sr(n);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")Nl(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Nl(a);for(var f=a.firstChild;f;){var g=f.nextSibling,C=f.nodeName;f[Ca]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=g}}else a==="body"&&Nl(e.ownerDocument.body);a=u}while(a);Sr(n)}function sg(e,n){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function Xf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Xf(a),Kr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function sx(e,n,a,l){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Ca])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=Si(e.nextSibling),e===null)break}return null}function rx(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Si(e.nextSibling),e===null))return null;return e}function rg(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Si(e.nextSibling),e===null))return null;return e}function Wf(e){return e.data==="$?"||e.data==="$~"}function qf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function lx(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var l=function(){n(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Si(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Yf=null;function lg(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return Si(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function og(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function cg(e,n,a){switch(n=$o(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Nl(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Kr(e)}var Mi=new Map,ug=new Set;function ec(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var pa=I.d;I.d={f:ox,r:cx,D:ux,C:fx,L:dx,m:hx,X:mx,S:px,M:gx};function ox(){var e=pa.f(),n=Xo();return e||n}function cx(e){var n=Da(e);n!==null&&n.tag===5&&n.type==="form"?Rm(n):pa.r(e)}var vr=typeof document>"u"?null:document;function fg(e,n,a){var l=vr;if(l&&typeof n=="string"&&n){var u=It(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),ug.has(u)||(ug.add(u),e={rel:e,crossOrigin:a,href:n},l.querySelector(u)===null&&(n=l.createElement("link"),Pn(n,"link",e),mn(n),l.head.appendChild(n)))}}function ux(e){pa.D(e),fg("dns-prefetch",e,null)}function fx(e,n){pa.C(e,n),fg("preconnect",e,n)}function dx(e,n,a){pa.L(e,n,a);var l=vr;if(l&&e&&n){var u='link[rel="preload"][as="'+It(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+It(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+It(a.imageSizes)+'"]')):u+='[href="'+It(e)+'"]';var f=u;switch(n){case"style":f=_r(e);break;case"script":f=xr(e)}Mi.has(f)||(e=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Mi.set(f,e),l.querySelector(u)!==null||n==="style"&&l.querySelector(Ul(f))||n==="script"&&l.querySelector(Ll(f))||(n=l.createElement("link"),Pn(n,"link",e),mn(n),l.head.appendChild(n)))}}function hx(e,n){pa.m(e,n);var a=vr;if(a&&e){var l=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+It(l)+'"][href="'+It(e)+'"]',f=u;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=xr(e)}if(!Mi.has(f)&&(e=x({rel:"modulepreload",href:e},n),Mi.set(f,e),a.querySelector(u)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ll(f)))return}l=a.createElement("link"),Pn(l,"link",e),mn(l),a.head.appendChild(l)}}}function px(e,n,a){pa.S(e,n,a);var l=vr;if(l&&e){var u=Na(l).hoistableStyles,f=_r(e);n=n||"default";var g=u.get(f);if(!g){var C={loading:0,preload:null};if(g=l.querySelector(Ul(f)))C.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Mi.get(f))&&Zf(e,a);var F=g=l.createElement("link");mn(F),Pn(F,"link",e),F._p=new Promise(function(J,ue){F.onload=J,F.onerror=ue}),F.addEventListener("load",function(){C.loading|=1}),F.addEventListener("error",function(){C.loading|=2}),C.loading|=4,tc(g,n,l)}g={type:"stylesheet",instance:g,count:1,state:C},u.set(f,g)}}}function mx(e,n){pa.X(e,n);var a=vr;if(a&&e){var l=Na(a).hoistableScripts,u=xr(e),f=l.get(u);f||(f=a.querySelector(Ll(u)),f||(e=x({src:e,async:!0},n),(n=Mi.get(u))&&Kf(e,n),f=a.createElement("script"),mn(f),Pn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},l.set(u,f))}}function gx(e,n){pa.M(e,n);var a=vr;if(a&&e){var l=Na(a).hoistableScripts,u=xr(e),f=l.get(u);f||(f=a.querySelector(Ll(u)),f||(e=x({src:e,async:!0,type:"module"},n),(n=Mi.get(u))&&Kf(e,n),f=a.createElement("script"),mn(f),Pn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},l.set(u,f))}}function dg(e,n,a,l){var u=(u=he.current)?ec(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=_r(a.href),a=Na(u).hoistableStyles,l=a.get(n),l||(l={type:"style",instance:null,count:0,state:null},a.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=_r(a.href);var f=Na(u).hoistableStyles,g=f.get(e);if(g||(u=u.ownerDocument||u,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,g),(f=u.querySelector(Ul(e)))&&!f._p&&(g.instance=f,g.state.loading=5),Mi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Mi.set(e,a),f||vx(u,e,a,g.state))),n&&l===null)throw Error(r(528,""));return g}if(n&&l!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=xr(a),a=Na(u).hoistableScripts,l=a.get(n),l||(l={type:"script",instance:null,count:0,state:null},a.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function _r(e){return'href="'+It(e)+'"'}function Ul(e){return'link[rel="stylesheet"]['+e+"]"}function hg(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function vx(e,n,a,l){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?l.loading=1:(n=e.createElement("link"),l.preload=n,n.addEventListener("load",function(){return l.loading|=1}),n.addEventListener("error",function(){return l.loading|=2}),Pn(n,"link",a),mn(n),e.head.appendChild(n))}function xr(e){return'[src="'+It(e)+'"]'}function Ll(e){return"script[async]"+e}function pg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var l=e.querySelector('style[data-href~="'+It(a.href)+'"]');if(l)return n.instance=l,mn(l),l;var u=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),mn(l),Pn(l,"style",u),tc(l,a.precedence,e),n.instance=l;case"stylesheet":u=_r(a.href);var f=e.querySelector(Ul(u));if(f)return n.state.loading|=4,n.instance=f,mn(f),f;l=hg(a),(u=Mi.get(u))&&Zf(l,u),f=(e.ownerDocument||e).createElement("link"),mn(f);var g=f;return g._p=new Promise(function(C,F){g.onload=C,g.onerror=F}),Pn(f,"link",l),n.state.loading|=4,tc(f,a.precedence,e),n.instance=f;case"script":return f=xr(a.src),(u=e.querySelector(Ll(f)))?(n.instance=u,mn(u),u):(l=a,(u=Mi.get(f))&&(l=x({},a),Kf(l,u)),e=e.ownerDocument||e,u=e.createElement("script"),mn(u),Pn(u,"link",l),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(l=n.instance,n.state.loading|=4,tc(l,a.precedence,e));return n.instance}function tc(e,n,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=l.length?l[l.length-1]:null,f=u,g=0;g<l.length;g++){var C=l[g];if(C.dataset.precedence===n)f=C;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Zf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Kf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var nc=null;function mg(e,n,a){if(nc===null){var l=new Map,u=nc=new Map;u.set(a,l)}else u=nc,l=u.get(a),l||(l=new Map,u.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[Ca]||f[cn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(n)||"";g=e+g;var C=l.get(g);C?C.push(f):l.set(g,[f])}}return l}function gg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function _x(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function vg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function xx(e,n,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=_r(l.href),f=n.querySelector(Ul(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=ic.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,mn(f);return}f=n.ownerDocument||n,l=hg(l),(u=Mi.get(u))&&Zf(l,u),f=f.createElement("link"),mn(f);var g=f;g._p=new Promise(function(C,F){g.onload=C,g.onerror=F}),Pn(f,"link",l),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=ic.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Qf=0;function Sx(e,n){return e.stylesheets&&e.count===0&&sc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&sc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&Qf===0&&(Qf=62500*ex());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&sc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Qf?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(u)}}:null}function ic(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)sc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ac=null;function sc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ac=new Map,n.forEach(Mx,e),ac=null,ic.call(e))}function Mx(e,n){if(!(n.state.loading&4)){var a=ac.get(e);if(a)var l=a.get(null);else{a=new Map,ac.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var g=u[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),l=g)}l&&a.set(null,l)}u=n.instance,g=u.getAttribute("data-precedence"),f=a.get(g)||l,f===l&&a.set(null,u),a.set(g,u),this.count++,l=ic.bind(this),u.addEventListener("load",l),u.addEventListener("error",l),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Ol={$$typeof:L,Provider:null,Consumer:null,_currentValue:ie,_currentValue2:ie,_threadCount:0};function bx(e,n,a,l,u,f,g,C,F){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Xe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xe(0),this.hiddenUpdates=Xe(null),this.identifierPrefix=l,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=F,this.incompleteTransitions=new Map}function _g(e,n,a,l,u,f,g,C,F,J,ue,ge){return e=new bx(e,n,a,g,F,J,ue,ge,C),n=1,f===!0&&(n|=24),f=ii(3,null,null,n),e.current=f,f.stateNode=e,n=wu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:l,isDehydrated:a,cache:n},Lu(f),e}function xg(e){return e?(e=Ks,e):Ks}function Sg(e,n,a,l,u,f){u=xg(u),l.context===null?l.context=u:l.pendingContext=u,l=za(n),l.payload={element:a},f=f===void 0?null:f,f!==null&&(l.callback=f),a=Ha(e,l,n),a!==null&&(Kn(a,e,n),dl(a,e,n))}function Mg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Jf(e,n){Mg(e,n),(e=e.alternate)&&Mg(e,n)}function bg(e){if(e.tag===13||e.tag===31){var n=vs(e,67108864);n!==null&&Kn(n,e,67108864),Jf(e,67108864)}}function yg(e){if(e.tag===13||e.tag===31){var n=oi();n=fs(n);var a=vs(e,n);a!==null&&Kn(a,e,n),Jf(e,n)}}var rc=!0;function yx(e,n,a,l){var u=U.T;U.T=null;var f=I.p;try{I.p=2,$f(e,n,a,l)}finally{I.p=f,U.T=u}}function Ex(e,n,a,l){var u=U.T;U.T=null;var f=I.p;try{I.p=8,$f(e,n,a,l)}finally{I.p=f,U.T=u}}function $f(e,n,a,l){if(rc){var u=ed(l);if(u===null)zf(e,n,l,lc,a),Tg(e,l);else if(Ax(u,e,n,a,l))l.stopPropagation();else if(Tg(e,l),n&4&&-1<Tx.indexOf(e)){for(;u!==null;){var f=Da(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=Me(f.pendingLanes);if(g!==0){var C=f;for(C.pendingLanes|=2,C.entangledLanes|=2;g;){var F=1<<31-Ne(g);C.entanglements[1]|=F,g&=~F}Vi(f),(Lt&6)===0&&(ko=be()+500,Cl(0))}}break;case 31:case 13:C=vs(f,2),C!==null&&Kn(C,f,2),Xo(),Jf(f,2)}if(f=ed(l),f===null&&zf(e,n,l,lc,a),f===u)break;u=f}u!==null&&l.stopPropagation()}else zf(e,n,l,null,a)}}function ed(e){return e=tu(e),td(e)}var lc=null;function td(e){if(lc=null,e=wa(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return lc=e,null}function Eg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(en()){case N:return 2;case E:return 8;case Z:case me:return 32;case Se:return 268435456;default:return 32}default:return 32}}var nd=!1,Qa=null,Ja=null,$a=null,Pl=new Map,Bl=new Map,es=[],Tx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Tg(e,n){switch(e){case"focusin":case"focusout":Qa=null;break;case"dragenter":case"dragleave":Ja=null;break;case"mouseover":case"mouseout":$a=null;break;case"pointerover":case"pointerout":Pl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bl.delete(n.pointerId)}}function Fl(e,n,a,l,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:l,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Da(n),n!==null&&bg(n)),e):(e.eventSystemFlags|=l,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function Ax(e,n,a,l,u){switch(n){case"focusin":return Qa=Fl(Qa,e,n,a,l,u),!0;case"dragenter":return Ja=Fl(Ja,e,n,a,l,u),!0;case"mouseover":return $a=Fl($a,e,n,a,l,u),!0;case"pointerover":var f=u.pointerId;return Pl.set(f,Fl(Pl.get(f)||null,e,n,a,l,u)),!0;case"gotpointercapture":return f=u.pointerId,Bl.set(f,Fl(Bl.get(f)||null,e,n,a,l,u)),!0}return!1}function Ag(e){var n=wa(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,Yr(e.priority,function(){yg(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,Yr(e.priority,function(){yg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function oc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=ed(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);eu=l,a.target.dispatchEvent(l),eu=null}else return n=Da(a),n!==null&&bg(n),e.blockedOn=a,!1;n.shift()}return!0}function Rg(e,n,a){oc(e)&&a.delete(n)}function Rx(){nd=!1,Qa!==null&&oc(Qa)&&(Qa=null),Ja!==null&&oc(Ja)&&(Ja=null),$a!==null&&oc($a)&&($a=null),Pl.forEach(Rg),Bl.forEach(Rg)}function cc(e,n){e.blockedOn===n&&(e.blockedOn=null,nd||(nd=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Rx)))}var uc=null;function Cg(e){uc!==e&&(uc=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){uc===e&&(uc=null);for(var n=0;n<e.length;n+=3){var a=e[n],l=e[n+1],u=e[n+2];if(typeof l!="function"){if(td(l||a)===null)continue;break}var f=Da(a);f!==null&&(e.splice(n,3),n-=3,$u(f,{pending:!0,data:u,method:a.method,action:l},l,u))}}))}function Sr(e){function n(F){return cc(F,e)}Qa!==null&&cc(Qa,e),Ja!==null&&cc(Ja,e),$a!==null&&cc($a,e),Pl.forEach(n),Bl.forEach(n);for(var a=0;a<es.length;a++){var l=es[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<es.length&&(a=es[0],a.blockedOn===null);)Ag(a),a.blockedOn===null&&es.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var u=a[l],f=a[l+1],g=u[Nn]||null;if(typeof f=="function")g||Cg(a);else if(g){var C=null;if(f&&f.hasAttribute("formAction")){if(u=f,g=f[Nn]||null)C=g.formAction;else if(td(u)!==null)continue}else C=g.action;typeof C=="function"?a[l+1]=C:(a.splice(l,3),l-=3),Cg(a)}}}function wg(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(g){return u=g})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function id(e){this._internalRoot=e}fc.prototype.render=id.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,l=oi();Sg(a,l,e,n,null,null)},fc.prototype.unmount=id.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Sg(e.current,2,null,e,null,null),Xo(),n[Qi]=null}};function fc(e){this._internalRoot=e}fc.prototype.unstable_scheduleHydration=function(e){if(e){var n=qr();e={blockedOn:null,target:e,priority:n};for(var a=0;a<es.length&&n!==0&&n<es[a].priority;a++);es.splice(a,0,e),a===0&&Ag(e)}};var Dg=t.version;if(Dg!=="19.2.5")throw Error(r(527,Dg,"19.2.5"));I.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=m(n),e=e!==null?M(e):null,e=e===null?null:e.stateNode,e};var Cx={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dc.isDisabled&&dc.supportsFiber)try{re=dc.inject(Cx),ce=dc}catch{}}return zl.createRoot=function(e,n){if(!o(e))throw Error(r(299));var a=!1,l="",u=Fm,f=Im,g=zm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=_g(e,1,!1,null,null,a,l,null,u,f,g,wg),e[Qi]=n.current,If(e),new id(n)},zl.hydrateRoot=function(e,n,a){if(!o(e))throw Error(r(299));var l=!1,u="",f=Fm,g=Im,C=zm,F=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(C=a.onRecoverableError),a.formState!==void 0&&(F=a.formState)),n=_g(e,1,!0,n,a??null,l,u,F,f,g,C,wg),n.context=xg(null),a=n.current,l=oi(),l=fs(l),u=za(l),u.callback=null,Ha(a,u,l),a=l,n.current.lanes=a,tt(n,a),Vi(n),e[Qi]=n.current,If(e),new fc(n)},zl.version="19.2.5",zl}var Bg;function Fx(){if(Bg)return sd.exports;Bg=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),sd.exports=Bx(),sd.exports}var Ix=Fx();const zx=k1(Ix),Hx=["BV1F7okBcE59","BV11qosBWEnd","BV1u9ojB6EUd"],Gx=[{name:"MIDI伴奏包",bpm:114,quark:"https://v.luoboy.com/freemidi.html",thunder:"https://v.luoboy.com/freemidi.html"}];/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zc="184",Vx=0,Fg=1,kx=2,Bc=1,jx=2,Yl=3,ya=0,wn=1,fi=2,Bi=0,Br=1,Ig=2,zg=3,Hg=4,Xx=5,Ps=100,Wx=101,qx=102,Yx=103,Zx=104,Kx=200,Qx=201,Jx=202,$x=203,Xd=204,Wd=205,e2=206,t2=207,n2=208,i2=209,a2=210,s2=211,r2=212,l2=213,o2=214,qd=0,Vc=1,Yd=2,Ir=3,Zd=4,Kd=5,Qd=6,Jd=7,j1=0,c2=1,u2=2,Yi=0,X1=1,W1=2,q1=3,Y1=4,Z1=5,K1=6,Q1=7,J1=300,zs=301,zr=302,od=303,cd=304,Kc=306,$d=1e3,Sa=1001,eh=1002,Bn=1003,f2=1004,hc=1005,on=1006,ud=1007,Fs=1008,Gn=1009,$1=1010,ev=1011,Kl=1012,Ih=1013,Zi=1014,Oi=1015,Ea=1016,zh=1017,Hh=1018,Hr=1020,tv=35902,nv=35899,iv=1021,av=1022,Pi=1023,Ta=1026,os=1027,sv=1028,Gh=1029,Hs=1030,Vh=1031,kh=1033,Fc=33776,Ic=33777,zc=33778,Hc=33779,th=35840,nh=35841,ih=35842,ah=35843,sh=36196,rh=37492,lh=37496,oh=37488,ch=37489,kc=37490,uh=37491,fh=37808,dh=37809,hh=37810,ph=37811,mh=37812,gh=37813,vh=37814,_h=37815,xh=37816,Sh=37817,Mh=37818,bh=37819,yh=37820,Eh=37821,Th=36492,Ah=36494,Rh=36495,Ch=36283,wh=36284,jc=36285,Dh=36286,Ql=3200,Gg=0,d2=1,Wi="",hn="srgb",Gr="srgb-linear",Xc="linear",Vt="srgb",Mr=7680,Vg=519,h2=512,p2=513,m2=514,jh=515,g2=516,v2=517,Xh=518,_2=519,kg=35044,Nh="300 es",qi=2e3,Wc=2001;function x2(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function qc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function S2(){const s=qc("canvas");return s.style.display="block",s}const jg={};function Xg(...s){const t="THREE."+s.shift();console.log(t,...s)}function rv(s){const t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=s[1];i&&i.isStackTrace?s[0]+=" "+i.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function nt(...s){s=rv(s);const t="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...s)}}function Rt(...s){s=rv(s);const t="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...s)}}function Uh(...s){const t=s.join(" ");t in jg||(jg[t]=!0,nt(...s))}function M2(s,t,i){return new Promise(function(r,o){function c(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const b2={[qd]:Vc,[Yd]:Qd,[Zd]:Jd,[Ir]:Kd,[Vc]:qd,[Qd]:Yd,[Jd]:Zd,[Kd]:Ir};class Aa{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const o=r[t];if(o!==void 0){const c=o.indexOf(i);c!==-1&&o.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const o=r.slice(0);for(let c=0,d=o.length;c<d;c++)o[c].call(this,t);t.target=null}}}const zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fd=Math.PI/180,Lh=180/Math.PI;function Jl(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(zn[s&255]+zn[s>>8&255]+zn[s>>16&255]+zn[s>>24&255]+"-"+zn[t&255]+zn[t>>8&255]+"-"+zn[t>>16&15|64]+zn[t>>24&255]+"-"+zn[i&63|128]+zn[i>>8&255]+"-"+zn[i>>16&255]+zn[i>>24&255]+zn[r&255]+zn[r>>8&255]+zn[r>>16&255]+zn[r>>24&255]).toLowerCase()}function Tt(s,t,i){return Math.max(t,Math.min(i,s))}function y2(s,t){return(s%t+t)%t}function dd(s,t,i){return(1-i)*s+i*t}function Hl(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Qn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Yh=class Yh{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,o=t.elements;return this.x=o[0]*i+o[3]*r+o[6],this.y=o[1]*i+o[4]*r+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Tt(this.x,t.x,i.x),this.y=Tt(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Tt(this.x,t,i),this.y=Tt(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Tt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Tt(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),o=Math.sin(i),c=this.x-t.x,d=this.y-t.y;return this.x=c*r-d*o+t.x,this.y=c*o+d*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Yh.prototype.isVector2=!0;let pt=Yh;class kr{constructor(t=0,i=0,r=0,o=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=o}static slerpFlat(t,i,r,o,c,d,h){let p=r[o+0],m=r[o+1],M=r[o+2],x=r[o+3],v=c[d+0],b=c[d+1],T=c[d+2],w=c[d+3];if(x!==w||p!==v||m!==b||M!==T){let S=p*v+m*b+M*T+x*w;S<0&&(v=-v,b=-b,T=-T,w=-w,S=-S);let _=1-h;if(S<.9995){const D=Math.acos(S),L=Math.sin(D);_=Math.sin(_*D)/L,h=Math.sin(h*D)/L,p=p*_+v*h,m=m*_+b*h,M=M*_+T*h,x=x*_+w*h}else{p=p*_+v*h,m=m*_+b*h,M=M*_+T*h,x=x*_+w*h;const D=1/Math.sqrt(p*p+m*m+M*M+x*x);p*=D,m*=D,M*=D,x*=D}}t[i]=p,t[i+1]=m,t[i+2]=M,t[i+3]=x}static multiplyQuaternionsFlat(t,i,r,o,c,d){const h=r[o],p=r[o+1],m=r[o+2],M=r[o+3],x=c[d],v=c[d+1],b=c[d+2],T=c[d+3];return t[i]=h*T+M*x+p*b-m*v,t[i+1]=p*T+M*v+m*x-h*b,t[i+2]=m*T+M*b+h*v-p*x,t[i+3]=M*T-h*x-p*v-m*b,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,o){return this._x=t,this._y=i,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,o=t._y,c=t._z,d=t._order,h=Math.cos,p=Math.sin,m=h(r/2),M=h(o/2),x=h(c/2),v=p(r/2),b=p(o/2),T=p(c/2);switch(d){case"XYZ":this._x=v*M*x+m*b*T,this._y=m*b*x-v*M*T,this._z=m*M*T+v*b*x,this._w=m*M*x-v*b*T;break;case"YXZ":this._x=v*M*x+m*b*T,this._y=m*b*x-v*M*T,this._z=m*M*T-v*b*x,this._w=m*M*x+v*b*T;break;case"ZXY":this._x=v*M*x-m*b*T,this._y=m*b*x+v*M*T,this._z=m*M*T+v*b*x,this._w=m*M*x-v*b*T;break;case"ZYX":this._x=v*M*x-m*b*T,this._y=m*b*x+v*M*T,this._z=m*M*T-v*b*x,this._w=m*M*x+v*b*T;break;case"YZX":this._x=v*M*x+m*b*T,this._y=m*b*x+v*M*T,this._z=m*M*T-v*b*x,this._w=m*M*x-v*b*T;break;case"XZY":this._x=v*M*x-m*b*T,this._y=m*b*x-v*M*T,this._z=m*M*T+v*b*x,this._w=m*M*x+v*b*T;break;default:nt("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,o=Math.sin(r);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],o=i[4],c=i[8],d=i[1],h=i[5],p=i[9],m=i[2],M=i[6],x=i[10],v=r+h+x;if(v>0){const b=.5/Math.sqrt(v+1);this._w=.25/b,this._x=(M-p)*b,this._y=(c-m)*b,this._z=(d-o)*b}else if(r>h&&r>x){const b=2*Math.sqrt(1+r-h-x);this._w=(M-p)/b,this._x=.25*b,this._y=(o+d)/b,this._z=(c+m)/b}else if(h>x){const b=2*Math.sqrt(1+h-r-x);this._w=(c-m)/b,this._x=(o+d)/b,this._y=.25*b,this._z=(p+M)/b}else{const b=2*Math.sqrt(1+x-r-h);this._w=(d-o)/b,this._x=(c+m)/b,this._y=(p+M)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Tt(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const o=Math.min(1,i/r);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,o=t._y,c=t._z,d=t._w,h=i._x,p=i._y,m=i._z,M=i._w;return this._x=r*M+d*h+o*m-c*p,this._y=o*M+d*p+c*h-r*m,this._z=c*M+d*m+r*p-o*h,this._w=d*M-r*h-o*p-c*m,this._onChangeCallback(),this}slerp(t,i){let r=t._x,o=t._y,c=t._z,d=t._w,h=this.dot(t);h<0&&(r=-r,o=-o,c=-c,d=-d,h=-h);let p=1-i;if(h<.9995){const m=Math.acos(h),M=Math.sin(m);p=Math.sin(p*m)/M,i=Math.sin(i*m)/M,this._x=this._x*p+r*i,this._y=this._y*p+o*i,this._z=this._z*p+c*i,this._w=this._w*p+d*i,this._onChangeCallback()}else this._x=this._x*p+r*i,this._y=this._y*p+o*i,this._z=this._z*p+c*i,this._w=this._w*p+d*i,this.normalize();return this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(t),o*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Zh=class Zh{constructor(t=0,i=0,r=0){this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Wg.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Wg.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,o=this.z,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6]*o,this.y=c[1]*i+c[4]*r+c[7]*o,this.z=c[2]*i+c[5]*r+c[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,o=this.z,c=t.elements,d=1/(c[3]*i+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*o+c[12])*d,this.y=(c[1]*i+c[5]*r+c[9]*o+c[13])*d,this.z=(c[2]*i+c[6]*r+c[10]*o+c[14])*d,this}applyQuaternion(t){const i=this.x,r=this.y,o=this.z,c=t.x,d=t.y,h=t.z,p=t.w,m=2*(d*o-h*r),M=2*(h*i-c*o),x=2*(c*r-d*i);return this.x=i+p*m+d*x-h*M,this.y=r+p*M+h*m-c*x,this.z=o+p*x+c*M-d*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,o=this.z,c=t.elements;return this.x=c[0]*i+c[4]*r+c[8]*o,this.y=c[1]*i+c[5]*r+c[9]*o,this.z=c[2]*i+c[6]*r+c[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Tt(this.x,t.x,i.x),this.y=Tt(this.y,t.y,i.y),this.z=Tt(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Tt(this.x,t,i),this.y=Tt(this.y,t,i),this.z=Tt(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Tt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,o=t.y,c=t.z,d=i.x,h=i.y,p=i.z;return this.x=o*p-c*h,this.y=c*d-r*p,this.z=r*h-o*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return hd.copy(this).projectOnVector(t),this.sub(hd)}reflect(t){return this.sub(hd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Tt(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,o=this.z-t.z;return i*i+r*r+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const o=Math.sin(i)*t;return this.x=o*Math.sin(r),this.y=Math.cos(i)*t,this.z=o*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=o,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Zh.prototype.isVector3=!0;let ae=Zh;const hd=new ae,Wg=new kr,Kh=class Kh{constructor(t,i,r,o,c,d,h,p,m){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,o,c,d,h,p,m)}set(t,i,r,o,c,d,h,p,m){const M=this.elements;return M[0]=t,M[1]=o,M[2]=h,M[3]=i,M[4]=c,M[5]=p,M[6]=r,M[7]=d,M[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,o=i.elements,c=this.elements,d=r[0],h=r[3],p=r[6],m=r[1],M=r[4],x=r[7],v=r[2],b=r[5],T=r[8],w=o[0],S=o[3],_=o[6],D=o[1],L=o[4],O=o[7],X=o[2],P=o[5],j=o[8];return c[0]=d*w+h*D+p*X,c[3]=d*S+h*L+p*P,c[6]=d*_+h*O+p*j,c[1]=m*w+M*D+x*X,c[4]=m*S+M*L+x*P,c[7]=m*_+M*O+x*j,c[2]=v*w+b*D+T*X,c[5]=v*S+b*L+T*P,c[8]=v*_+b*O+T*j,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],o=t[2],c=t[3],d=t[4],h=t[5],p=t[6],m=t[7],M=t[8];return i*d*M-i*h*m-r*c*M+r*h*p+o*c*m-o*d*p}invert(){const t=this.elements,i=t[0],r=t[1],o=t[2],c=t[3],d=t[4],h=t[5],p=t[6],m=t[7],M=t[8],x=M*d-h*m,v=h*p-M*c,b=m*c-d*p,T=i*x+r*v+o*b;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/T;return t[0]=x*w,t[1]=(o*m-M*r)*w,t[2]=(h*r-o*d)*w,t[3]=v*w,t[4]=(M*i-o*p)*w,t[5]=(o*c-h*i)*w,t[6]=b*w,t[7]=(r*p-m*i)*w,t[8]=(d*i-r*c)*w,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,o,c,d,h){const p=Math.cos(c),m=Math.sin(c);return this.set(r*p,r*m,-r*(p*d+m*h)+d+t,-o*m,o*p,-o*(-m*d+p*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(pd.makeScale(t,i)),this}rotate(t){return this.premultiply(pd.makeRotation(-t)),this}translate(t,i){return this.premultiply(pd.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let o=0;o<9;o++)if(i[o]!==r[o])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Kh.prototype.isMatrix3=!0;let st=Kh;const pd=new st,qg=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yg=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function E2(){const s={enabled:!0,workingColorSpace:Gr,spaces:{},convert:function(o,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===Vt&&(o.r=Ma(o.r),o.g=Ma(o.g),o.b=Ma(o.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Vt&&(o.r=Fr(o.r),o.g=Fr(o.g),o.b=Fr(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Wi?Xc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,d){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return Uh("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return Uh("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Gr]:{primaries:t,whitePoint:r,transfer:Xc,toXYZ:qg,fromXYZ:Yg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:hn},outputColorSpaceConfig:{drawingBufferColorSpace:hn}},[hn]:{primaries:t,whitePoint:r,transfer:Vt,toXYZ:qg,fromXYZ:Yg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:hn}}}),s}const Et=E2();function Ma(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Fr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let br;class T2{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{br===void 0&&(br=qc("canvas")),br.width=t.width,br.height=t.height;const o=br.getContext("2d");t instanceof ImageData?o.putImageData(t,0,0):o.drawImage(t,0,0,t.width,t.height),r=br}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=qc("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const o=r.getImageData(0,0,t.width,t.height),c=o.data;for(let d=0;d<c.length;d++)c[d]=Ma(c[d]/255)*255;return r.putImageData(o,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Ma(i[r]/255)*255):i[r]=Ma(i[r]);return{data:i,width:t.width,height:t.height}}else return nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let A2=0;class Wh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:A2++}),this.uuid=Jl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayWidth,i.displayHeight,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let d=0,h=o.length;d<h;d++)o[d].isDataTexture?c.push(md(o[d].image)):c.push(md(o[d]))}else c=md(o);r.url=c}return i||(t.images[this.uuid]=r),r}}function md(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?T2.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(nt("Texture: Unable to serialize Texture."),{})}let R2=0;const gd=new ae;class Dn extends Aa{constructor(t=Dn.DEFAULT_IMAGE,i=Dn.DEFAULT_MAPPING,r=Sa,o=Sa,c=on,d=Fs,h=Pi,p=Gn,m=Dn.DEFAULT_ANISOTROPY,M=Wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:R2++}),this.uuid=Jl(),this.name="",this.source=new Wh(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=d,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=M,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(gd).x}get height(){return this.source.getSize(gd).y}get depth(){return this.source.getSize(gd).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){nt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const o=this[i];if(o===void 0){nt(`Texture.setValues(): property '${i}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==J1)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case $d:t.x=t.x-Math.floor(t.x);break;case Sa:t.x=t.x<0?0:1;break;case eh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case $d:t.y=t.y-Math.floor(t.y);break;case Sa:t.y=t.y<0?0:1;break;case eh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=J1;Dn.DEFAULT_ANISOTROPY=1;const Qh=class Qh{constructor(t=0,i=0,r=0,o=1){this.x=t,this.y=i,this.z=r,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,o){return this.x=t,this.y=i,this.z=r,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,o=this.z,c=this.w,d=t.elements;return this.x=d[0]*i+d[4]*r+d[8]*o+d[12]*c,this.y=d[1]*i+d[5]*r+d[9]*o+d[13]*c,this.z=d[2]*i+d[6]*r+d[10]*o+d[14]*c,this.w=d[3]*i+d[7]*r+d[11]*o+d[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,o,c;const p=t.elements,m=p[0],M=p[4],x=p[8],v=p[1],b=p[5],T=p[9],w=p[2],S=p[6],_=p[10];if(Math.abs(M-v)<.01&&Math.abs(x-w)<.01&&Math.abs(T-S)<.01){if(Math.abs(M+v)<.1&&Math.abs(x+w)<.1&&Math.abs(T+S)<.1&&Math.abs(m+b+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(m+1)/2,O=(b+1)/2,X=(_+1)/2,P=(M+v)/4,j=(x+w)/4,R=(T+S)/4;return L>O&&L>X?L<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(L),o=P/r,c=j/r):O>X?O<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(O),r=P/o,c=R/o):X<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(X),r=j/c,o=R/c),this.set(r,o,c,i),this}let D=Math.sqrt((S-T)*(S-T)+(x-w)*(x-w)+(v-M)*(v-M));return Math.abs(D)<.001&&(D=1),this.x=(S-T)/D,this.y=(x-w)/D,this.z=(v-M)/D,this.w=Math.acos((m+b+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Tt(this.x,t.x,i.x),this.y=Tt(this.y,t.y,i.y),this.z=Tt(this.z,t.z,i.z),this.w=Tt(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Tt(this.x,t,i),this.y=Tt(this.y,t,i),this.z=Tt(this.z,t,i),this.w=Tt(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Tt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Qh.prototype.isVector4=!0;let pn=Qh;class C2 extends Aa{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new pn(0,0,t,i),this.scissorTest=!1,this.viewport=new pn(0,0,t,i),this.textures=[];const o={width:t,height:i,depth:r.depth},c=new Dn(o),d=r.count;for(let h=0;h<d;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:on,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=t,this.textures[o].image.height=i,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const o=Object.assign({},t.textures[i].image);this.textures[i].source=new Wh(o)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jn extends C2{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class lv extends Dn{constructor(t=null,i=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:o},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=Sa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class w2 extends Dn{constructor(t=null,i=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:o},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=Sa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Yc=class Yc{constructor(t,i,r,o,c,d,h,p,m,M,x,v,b,T,w,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,o,c,d,h,p,m,M,x,v,b,T,w,S)}set(t,i,r,o,c,d,h,p,m,M,x,v,b,T,w,S){const _=this.elements;return _[0]=t,_[4]=i,_[8]=r,_[12]=o,_[1]=c,_[5]=d,_[9]=h,_[13]=p,_[2]=m,_[6]=M,_[10]=x,_[14]=v,_[3]=b,_[7]=T,_[11]=w,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yc().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,r=t.elements,o=1/yr.setFromMatrixColumn(t,0).length(),c=1/yr.setFromMatrixColumn(t,1).length(),d=1/yr.setFromMatrixColumn(t,2).length();return i[0]=r[0]*o,i[1]=r[1]*o,i[2]=r[2]*o,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,o=t.y,c=t.z,d=Math.cos(r),h=Math.sin(r),p=Math.cos(o),m=Math.sin(o),M=Math.cos(c),x=Math.sin(c);if(t.order==="XYZ"){const v=d*M,b=d*x,T=h*M,w=h*x;i[0]=p*M,i[4]=-p*x,i[8]=m,i[1]=b+T*m,i[5]=v-w*m,i[9]=-h*p,i[2]=w-v*m,i[6]=T+b*m,i[10]=d*p}else if(t.order==="YXZ"){const v=p*M,b=p*x,T=m*M,w=m*x;i[0]=v+w*h,i[4]=T*h-b,i[8]=d*m,i[1]=d*x,i[5]=d*M,i[9]=-h,i[2]=b*h-T,i[6]=w+v*h,i[10]=d*p}else if(t.order==="ZXY"){const v=p*M,b=p*x,T=m*M,w=m*x;i[0]=v-w*h,i[4]=-d*x,i[8]=T+b*h,i[1]=b+T*h,i[5]=d*M,i[9]=w-v*h,i[2]=-d*m,i[6]=h,i[10]=d*p}else if(t.order==="ZYX"){const v=d*M,b=d*x,T=h*M,w=h*x;i[0]=p*M,i[4]=T*m-b,i[8]=v*m+w,i[1]=p*x,i[5]=w*m+v,i[9]=b*m-T,i[2]=-m,i[6]=h*p,i[10]=d*p}else if(t.order==="YZX"){const v=d*p,b=d*m,T=h*p,w=h*m;i[0]=p*M,i[4]=w-v*x,i[8]=T*x+b,i[1]=x,i[5]=d*M,i[9]=-h*M,i[2]=-m*M,i[6]=b*x+T,i[10]=v-w*x}else if(t.order==="XZY"){const v=d*p,b=d*m,T=h*p,w=h*m;i[0]=p*M,i[4]=-x,i[8]=m*M,i[1]=v*x+w,i[5]=d*M,i[9]=b*x-T,i[2]=T*x-b,i[6]=h*M,i[10]=w*x+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(D2,t,N2)}lookAt(t,i,r){const o=this.elements;return ci.subVectors(t,i),ci.lengthSq()===0&&(ci.z=1),ci.normalize(),ns.crossVectors(r,ci),ns.lengthSq()===0&&(Math.abs(r.z)===1?ci.x+=1e-4:ci.z+=1e-4,ci.normalize(),ns.crossVectors(r,ci)),ns.normalize(),pc.crossVectors(ci,ns),o[0]=ns.x,o[4]=pc.x,o[8]=ci.x,o[1]=ns.y,o[5]=pc.y,o[9]=ci.y,o[2]=ns.z,o[6]=pc.z,o[10]=ci.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,o=i.elements,c=this.elements,d=r[0],h=r[4],p=r[8],m=r[12],M=r[1],x=r[5],v=r[9],b=r[13],T=r[2],w=r[6],S=r[10],_=r[14],D=r[3],L=r[7],O=r[11],X=r[15],P=o[0],j=o[4],R=o[8],B=o[12],Y=o[1],z=o[5],K=o[9],oe=o[13],le=o[2],H=o[6],U=o[10],I=o[14],ie=o[3],de=o[7],_e=o[11],Ue=o[15];return c[0]=d*P+h*Y+p*le+m*ie,c[4]=d*j+h*z+p*H+m*de,c[8]=d*R+h*K+p*U+m*_e,c[12]=d*B+h*oe+p*I+m*Ue,c[1]=M*P+x*Y+v*le+b*ie,c[5]=M*j+x*z+v*H+b*de,c[9]=M*R+x*K+v*U+b*_e,c[13]=M*B+x*oe+v*I+b*Ue,c[2]=T*P+w*Y+S*le+_*ie,c[6]=T*j+w*z+S*H+_*de,c[10]=T*R+w*K+S*U+_*_e,c[14]=T*B+w*oe+S*I+_*Ue,c[3]=D*P+L*Y+O*le+X*ie,c[7]=D*j+L*z+O*H+X*de,c[11]=D*R+L*K+O*U+X*_e,c[15]=D*B+L*oe+O*I+X*Ue,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],o=t[8],c=t[12],d=t[1],h=t[5],p=t[9],m=t[13],M=t[2],x=t[6],v=t[10],b=t[14],T=t[3],w=t[7],S=t[11],_=t[15],D=p*b-m*v,L=h*b-m*x,O=h*v-p*x,X=d*b-m*M,P=d*v-p*M,j=d*x-h*M;return i*(w*D-S*L+_*O)-r*(T*D-S*X+_*P)+o*(T*L-w*X+_*j)-c*(T*O-w*P+S*j)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=i,o[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],o=t[2],c=t[3],d=t[4],h=t[5],p=t[6],m=t[7],M=t[8],x=t[9],v=t[10],b=t[11],T=t[12],w=t[13],S=t[14],_=t[15],D=i*h-r*d,L=i*p-o*d,O=i*m-c*d,X=r*p-o*h,P=r*m-c*h,j=o*m-c*p,R=M*w-x*T,B=M*S-v*T,Y=M*_-b*T,z=x*S-v*w,K=x*_-b*w,oe=v*_-b*S,le=D*oe-L*K+O*z+X*Y-P*B+j*R;if(le===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/le;return t[0]=(h*oe-p*K+m*z)*H,t[1]=(o*K-r*oe-c*z)*H,t[2]=(w*j-S*P+_*X)*H,t[3]=(v*P-x*j-b*X)*H,t[4]=(p*Y-d*oe-m*B)*H,t[5]=(i*oe-o*Y+c*B)*H,t[6]=(S*O-T*j-_*L)*H,t[7]=(M*j-v*O+b*L)*H,t[8]=(d*K-h*Y+m*R)*H,t[9]=(r*Y-i*K-c*R)*H,t[10]=(T*P-w*O+_*D)*H,t[11]=(x*O-M*P-b*D)*H,t[12]=(h*B-d*z-p*R)*H,t[13]=(i*z-r*B+o*R)*H,t[14]=(w*L-T*X-S*D)*H,t[15]=(M*X-x*L+v*D)*H,this}scale(t){const i=this.elements,r=t.x,o=t.y,c=t.z;return i[0]*=r,i[4]*=o,i[8]*=c,i[1]*=r,i[5]*=o,i[9]*=c,i[2]*=r,i[6]*=o,i[10]*=c,i[3]*=r,i[7]*=o,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,o))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),o=Math.sin(i),c=1-r,d=t.x,h=t.y,p=t.z,m=c*d,M=c*h;return this.set(m*d+r,m*h-o*p,m*p+o*h,0,m*h+o*p,M*h+r,M*p-o*d,0,m*p-o*h,M*p+o*d,c*p*p+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,o,c,d){return this.set(1,r,c,0,t,1,d,0,i,o,1,0,0,0,0,1),this}compose(t,i,r){const o=this.elements,c=i._x,d=i._y,h=i._z,p=i._w,m=c+c,M=d+d,x=h+h,v=c*m,b=c*M,T=c*x,w=d*M,S=d*x,_=h*x,D=p*m,L=p*M,O=p*x,X=r.x,P=r.y,j=r.z;return o[0]=(1-(w+_))*X,o[1]=(b+O)*X,o[2]=(T-L)*X,o[3]=0,o[4]=(b-O)*P,o[5]=(1-(v+_))*P,o[6]=(S+D)*P,o[7]=0,o[8]=(T+L)*j,o[9]=(S-D)*j,o[10]=(1-(v+w))*j,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,i,r){const o=this.elements;t.x=o[12],t.y=o[13],t.z=o[14];const c=this.determinant();if(c===0)return r.set(1,1,1),i.identity(),this;let d=yr.set(o[0],o[1],o[2]).length();const h=yr.set(o[4],o[5],o[6]).length(),p=yr.set(o[8],o[9],o[10]).length();c<0&&(d=-d),Di.copy(this);const m=1/d,M=1/h,x=1/p;return Di.elements[0]*=m,Di.elements[1]*=m,Di.elements[2]*=m,Di.elements[4]*=M,Di.elements[5]*=M,Di.elements[6]*=M,Di.elements[8]*=x,Di.elements[9]*=x,Di.elements[10]*=x,i.setFromRotationMatrix(Di),r.x=d,r.y=h,r.z=p,this}makePerspective(t,i,r,o,c,d,h=qi,p=!1){const m=this.elements,M=2*c/(i-t),x=2*c/(r-o),v=(i+t)/(i-t),b=(r+o)/(r-o);let T,w;if(p)T=c/(d-c),w=d*c/(d-c);else if(h===qi)T=-(d+c)/(d-c),w=-2*d*c/(d-c);else if(h===Wc)T=-d/(d-c),w=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=M,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=x,m[9]=b,m[13]=0,m[2]=0,m[6]=0,m[10]=T,m[14]=w,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,r,o,c,d,h=qi,p=!1){const m=this.elements,M=2/(i-t),x=2/(r-o),v=-(i+t)/(i-t),b=-(r+o)/(r-o);let T,w;if(p)T=1/(d-c),w=d/(d-c);else if(h===qi)T=-2/(d-c),w=-(d+c)/(d-c);else if(h===Wc)T=-1/(d-c),w=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=M,m[4]=0,m[8]=0,m[12]=v,m[1]=0,m[5]=x,m[9]=0,m[13]=b,m[2]=0,m[6]=0,m[10]=T,m[14]=w,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let o=0;o<16;o++)if(i[o]!==r[o])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}};Yc.prototype.isMatrix4=!0;let yn=Yc;const yr=new ae,Di=new yn,D2=new ae(0,0,0),N2=new ae(1,1,1),ns=new ae,pc=new ae,ci=new ae,Zg=new yn,Kg=new kr;class Gs{constructor(t=0,i=0,r=0,o=Gs.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,o=this._order){return this._x=t,this._y=i,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const o=t.elements,c=o[0],d=o[4],h=o[8],p=o[1],m=o[5],M=o[9],x=o[2],v=o[6],b=o[10];switch(i){case"XYZ":this._y=Math.asin(Tt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-M,b),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(v,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(M,-1,1)),Math.abs(M)<.9999999?(this._y=Math.atan2(h,b),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-x,b),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Tt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(v,b),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(Tt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-M,m),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(h,b));break;case"XZY":this._z=Math.asin(-Tt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(v,m),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-M,b),this._y=0);break;default:nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Zg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Zg,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Kg.setFromEuler(this),this.setFromQuaternion(Kg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gs.DEFAULT_ORDER="XYZ";class ov{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let U2=0;const Qg=new ae,Er=new kr,ma=new yn,mc=new ae,Gl=new ae,L2=new ae,O2=new kr,Jg=new ae(1,0,0),$g=new ae(0,1,0),e1=new ae(0,0,1),t1={type:"added"},P2={type:"removed"},Tr={type:"childadded",child:null},vd={type:"childremoved",child:null};class di extends Aa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:U2++}),this.uuid=Jl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=di.DEFAULT_UP.clone();const t=new ae,i=new Gs,r=new kr,o=new ae(1,1,1);function c(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new yn},normalMatrix:{value:new st}}),this.matrix=new yn,this.matrixWorld=new yn,this.matrixAutoUpdate=di.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=di.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ov,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Er.setFromAxisAngle(t,i),this.quaternion.multiply(Er),this}rotateOnWorldAxis(t,i){return Er.setFromAxisAngle(t,i),this.quaternion.premultiply(Er),this}rotateX(t){return this.rotateOnAxis(Jg,t)}rotateY(t){return this.rotateOnAxis($g,t)}rotateZ(t){return this.rotateOnAxis(e1,t)}translateOnAxis(t,i){return Qg.copy(t).applyQuaternion(this.quaternion),this.position.add(Qg.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Jg,t)}translateY(t){return this.translateOnAxis($g,t)}translateZ(t){return this.translateOnAxis(e1,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ma.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?mc.copy(t):mc.set(t,i,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Gl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ma.lookAt(Gl,mc,this.up):ma.lookAt(mc,Gl,this.up),this.quaternion.setFromRotationMatrix(ma),o&&(ma.extractRotation(o.matrixWorld),Er.setFromRotationMatrix(ma),this.quaternion.premultiply(Er.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Rt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(t1),Tr.child=t,this.dispatchEvent(Tr),Tr.child=null):Rt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(P2),vd.child=t,this.dispatchEvent(vd),vd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ma.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ma.multiply(t.parent.matrixWorld)),t.applyMatrix4(ma),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(t1),Tr.child=t,this.dispatchEvent(Tr),Tr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,o=this.children.length;r<o;r++){const d=this.children[r].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const o=this.children;for(let c=0,d=o.length;c<d;c++)o[c].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gl,t,L2),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gl,O2,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,r=t.y,o=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*r-c[8]*o,c[13]+=r-c[1]*i-c[5]*r-c[9]*o,c[14]+=o-c[2]*i-c[6]*r-c[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const o=this.children;for(let c=0,d=o.length;c<d;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(h=>({...h})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(t),o.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,M=p.length;m<M;m++){const x=p[m];c(t.shapes,x)}else c(t.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(c(t.materials,this.material[p]));o.material=h}else o.material=c(t.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];o.animations.push(c(t.animations,p))}}if(i){const h=d(t.geometries),p=d(t.materials),m=d(t.textures),M=d(t.images),x=d(t.shapes),v=d(t.skeletons),b=d(t.animations),T=d(t.nodes);h.length>0&&(r.geometries=h),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),M.length>0&&(r.images=M),x.length>0&&(r.shapes=x),v.length>0&&(r.skeletons=v),b.length>0&&(r.animations=b),T.length>0&&(r.nodes=T)}return r.object=o,r;function d(h){const p=[];for(const m in h){const M=h[m];delete M.metadata,p.push(M)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const o=t.children[r];this.add(o.clone())}return this}}di.DEFAULT_UP=new ae(0,1,0);di.DEFAULT_MATRIX_AUTO_UPDATE=!0;di.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class gc extends di{constructor(){super(),this.isGroup=!0,this.type="Group"}}const B2={type:"move"};class _d{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ae,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ae),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ae,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ae,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let o=null,c=null,d=null;const h=this._targetRay,p=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){d=!0;for(const w of t.hand.values()){const S=i.getJointPose(w,r),_=this._getHandJoint(m,w);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const M=m.joints["index-finger-tip"],x=m.joints["thumb-tip"],v=M.position.distanceTo(x.position),b=.02,T=.005;m.inputState.pinching&&v>b+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&v<=b-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:t,target:this})));h!==null&&(o=i.getPose(t.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(B2)))}return h!==null&&(h.visible=o!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new gc;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}const cv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},is={h:0,s:0,l:0},vc={h:0,s:0,l:0};function xd(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class Pt{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=hn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Et.colorSpaceToWorking(this,i),this}setRGB(t,i,r,o=Et.workingColorSpace){return this.r=t,this.g=i,this.b=r,Et.colorSpaceToWorking(this,o),this}setHSL(t,i,r,o=Et.workingColorSpace){if(t=y2(t,1),i=Tt(i,0,1),r=Tt(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,d=2*r-c;this.r=xd(d,c,t+1/3),this.g=xd(d,c,t),this.b=xd(d,c,t-1/3)}return Et.colorSpaceToWorking(this,o),this}setStyle(t,i=hn){function r(c){c!==void 0&&parseFloat(c)<1&&nt("Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const d=o[1],h=o[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:nt("Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=o[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);nt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=hn){const r=cv[t.toLowerCase()];return r!==void 0?this.setHex(r,i):nt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ma(t.r),this.g=Ma(t.g),this.b=Ma(t.b),this}copyLinearToSRGB(t){return this.r=Fr(t.r),this.g=Fr(t.g),this.b=Fr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=hn){return Et.workingToColorSpace(Hn.copy(this),t),Math.round(Tt(Hn.r*255,0,255))*65536+Math.round(Tt(Hn.g*255,0,255))*256+Math.round(Tt(Hn.b*255,0,255))}getHexString(t=hn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Et.workingColorSpace){Et.workingToColorSpace(Hn.copy(this),i);const r=Hn.r,o=Hn.g,c=Hn.b,d=Math.max(r,o,c),h=Math.min(r,o,c);let p,m;const M=(h+d)/2;if(h===d)p=0,m=0;else{const x=d-h;switch(m=M<=.5?x/(d+h):x/(2-d-h),d){case r:p=(o-c)/x+(o<c?6:0);break;case o:p=(c-r)/x+2;break;case c:p=(r-o)/x+4;break}p/=6}return t.h=p,t.s=m,t.l=M,t}getRGB(t,i=Et.workingColorSpace){return Et.workingToColorSpace(Hn.copy(this),i),t.r=Hn.r,t.g=Hn.g,t.b=Hn.b,t}getStyle(t=hn){Et.workingToColorSpace(Hn.copy(this),t);const i=Hn.r,r=Hn.g,o=Hn.b;return t!==hn?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(t,i,r){return this.getHSL(is),this.setHSL(is.h+t,is.s+i,is.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(is),t.getHSL(vc);const r=dd(is.h,vc.h,i),o=dd(is.s,vc.s,i),c=dd(is.l,vc.l,i);return this.setHSL(r,o,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,o=this.b,c=t.elements;return this.r=c[0]*i+c[3]*r+c[6]*o,this.g=c[1]*i+c[4]*r+c[7]*o,this.b=c[2]*i+c[5]*r+c[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Hn=new Pt;Pt.NAMES=cv;class Oh extends di{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gs,this.environmentIntensity=1,this.environmentRotation=new Gs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ni=new ae,ga=new ae,Sd=new ae,va=new ae,Ar=new ae,Rr=new ae,n1=new ae,Md=new ae,bd=new ae,yd=new ae,Ed=new pn,Td=new pn,Ad=new pn;class Li{constructor(t=new ae,i=new ae,r=new ae){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,o){o.subVectors(r,i),Ni.subVectors(t,i),o.cross(Ni);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(t,i,r,o,c){Ni.subVectors(o,i),ga.subVectors(r,i),Sd.subVectors(t,i);const d=Ni.dot(Ni),h=Ni.dot(ga),p=Ni.dot(Sd),m=ga.dot(ga),M=ga.dot(Sd),x=d*m-h*h;if(x===0)return c.set(0,0,0),null;const v=1/x,b=(m*p-h*M)*v,T=(d*M-h*p)*v;return c.set(1-b-T,T,b)}static containsPoint(t,i,r,o){return this.getBarycoord(t,i,r,o,va)===null?!1:va.x>=0&&va.y>=0&&va.x+va.y<=1}static getInterpolation(t,i,r,o,c,d,h,p){return this.getBarycoord(t,i,r,o,va)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,va.x),p.addScaledVector(d,va.y),p.addScaledVector(h,va.z),p)}static getInterpolatedAttribute(t,i,r,o,c,d){return Ed.setScalar(0),Td.setScalar(0),Ad.setScalar(0),Ed.fromBufferAttribute(t,i),Td.fromBufferAttribute(t,r),Ad.fromBufferAttribute(t,o),d.setScalar(0),d.addScaledVector(Ed,c.x),d.addScaledVector(Td,c.y),d.addScaledVector(Ad,c.z),d}static isFrontFacing(t,i,r,o){return Ni.subVectors(r,i),ga.subVectors(t,i),Ni.cross(ga).dot(o)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,o){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,i,r,o){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ni.subVectors(this.c,this.b),ga.subVectors(this.a,this.b),Ni.cross(ga).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Li.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Li.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,o,c){return Li.getInterpolation(t,this.a,this.b,this.c,i,r,o,c)}containsPoint(t){return Li.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Li.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,o=this.b,c=this.c;let d,h;Ar.subVectors(o,r),Rr.subVectors(c,r),Md.subVectors(t,r);const p=Ar.dot(Md),m=Rr.dot(Md);if(p<=0&&m<=0)return i.copy(r);bd.subVectors(t,o);const M=Ar.dot(bd),x=Rr.dot(bd);if(M>=0&&x<=M)return i.copy(o);const v=p*x-M*m;if(v<=0&&p>=0&&M<=0)return d=p/(p-M),i.copy(r).addScaledVector(Ar,d);yd.subVectors(t,c);const b=Ar.dot(yd),T=Rr.dot(yd);if(T>=0&&b<=T)return i.copy(c);const w=b*m-p*T;if(w<=0&&m>=0&&T<=0)return h=m/(m-T),i.copy(r).addScaledVector(Rr,h);const S=M*T-b*x;if(S<=0&&x-M>=0&&b-T>=0)return n1.subVectors(c,o),h=(x-M)/(x-M+(b-T)),i.copy(o).addScaledVector(n1,h);const _=1/(S+w+v);return d=w*_,h=v*_,i.copy(r).addScaledVector(Ar,d).addScaledVector(Rr,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class $l{constructor(t=new ae(1/0,1/0,1/0),i=new ae(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(Ui.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(Ui.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=Ui.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let d=0,h=c.count;d<h;d++)t.isMesh===!0?t.getVertexPosition(d,Ui):Ui.fromBufferAttribute(c,d),Ui.applyMatrix4(t.matrixWorld),this.expandByPoint(Ui);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),_c.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),_c.copy(r.boundingBox)),_c.applyMatrix4(t.matrixWorld),this.union(_c)}const o=t.children;for(let c=0,d=o.length;c<d;c++)this.expandByObject(o[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ui),Ui.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Vl),xc.subVectors(this.max,Vl),Cr.subVectors(t.a,Vl),wr.subVectors(t.b,Vl),Dr.subVectors(t.c,Vl),as.subVectors(wr,Cr),ss.subVectors(Dr,wr),Ds.subVectors(Cr,Dr);let i=[0,-as.z,as.y,0,-ss.z,ss.y,0,-Ds.z,Ds.y,as.z,0,-as.x,ss.z,0,-ss.x,Ds.z,0,-Ds.x,-as.y,as.x,0,-ss.y,ss.x,0,-Ds.y,Ds.x,0];return!Rd(i,Cr,wr,Dr,xc)||(i=[1,0,0,0,1,0,0,0,1],!Rd(i,Cr,wr,Dr,xc))?!1:(Sc.crossVectors(as,ss),i=[Sc.x,Sc.y,Sc.z],Rd(i,Cr,wr,Dr,xc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ui).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ui).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(_a[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),_a[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),_a[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),_a[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),_a[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),_a[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),_a[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),_a[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(_a),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const _a=[new ae,new ae,new ae,new ae,new ae,new ae,new ae,new ae],Ui=new ae,_c=new $l,Cr=new ae,wr=new ae,Dr=new ae,as=new ae,ss=new ae,Ds=new ae,Vl=new ae,xc=new ae,Sc=new ae,Ns=new ae;function Rd(s,t,i,r,o){for(let c=0,d=s.length-3;c<=d;c+=3){Ns.fromArray(s,c);const h=o.x*Math.abs(Ns.x)+o.y*Math.abs(Ns.y)+o.z*Math.abs(Ns.z),p=t.dot(Ns),m=i.dot(Ns),M=r.dot(Ns);if(Math.max(-Math.max(p,m,M),Math.min(p,m,M))>h)return!1}return!0}const Sn=new ae,Mc=new pt;let F2=0;class Ei extends Aa{constructor(t,i,r=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:F2++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=kg,this.updateRanges=[],this.gpuType=Oi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[t+o]=i.array[r+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Mc.fromBufferAttribute(this,i),Mc.applyMatrix3(t),this.setXY(i,Mc.x,Mc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)Sn.fromBufferAttribute(this,i),Sn.applyMatrix3(t),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)Sn.fromBufferAttribute(this,i),Sn.applyMatrix4(t),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)Sn.fromBufferAttribute(this,i),Sn.applyNormalMatrix(t),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)Sn.fromBufferAttribute(this,i),Sn.transformDirection(t),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Hl(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Qn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Hl(i,this.array)),i}setX(t,i){return this.normalized&&(i=Qn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Hl(i,this.array)),i}setY(t,i){return this.normalized&&(i=Qn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Hl(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Qn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Hl(i,this.array)),i}setW(t,i){return this.normalized&&(i=Qn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Qn(i,this.array),r=Qn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,o){return t*=this.itemSize,this.normalized&&(i=Qn(i,this.array),r=Qn(r,this.array),o=Qn(o,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=o,this}setXYZW(t,i,r,o,c){return t*=this.itemSize,this.normalized&&(i=Qn(i,this.array),r=Qn(r,this.array),o=Qn(o,this.array),c=Qn(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=o,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==kg&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class uv extends Ei{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class fv extends Ei{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class ba extends Ei{constructor(t,i,r){super(new Float32Array(t),i,r)}}const I2=new $l,kl=new ae,Cd=new ae;class qh{constructor(t=new ae,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):I2.setFromPoints(t).getCenter(r);let o=0;for(let c=0,d=t.length;c<d;c++)o=Math.max(o,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;kl.subVectors(t,this.center);const i=kl.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),o=(r-this.radius)*.5;this.center.addScaledVector(kl,o/r),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Cd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(kl.copy(t.center).add(Cd)),this.expandByPoint(kl.copy(t.center).sub(Cd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let z2=0;const bi=new yn,wd=new di,Nr=new ae,ui=new $l,jl=new $l,Rn=new ae;class Ki extends Aa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:z2++}),this.uuid=Jl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(x2(t)?fv:uv)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new st().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return bi.makeRotationFromQuaternion(t),this.applyMatrix4(bi),this}rotateX(t){return bi.makeRotationX(t),this.applyMatrix4(bi),this}rotateY(t){return bi.makeRotationY(t),this.applyMatrix4(bi),this}rotateZ(t){return bi.makeRotationZ(t),this.applyMatrix4(bi),this}translate(t,i,r){return bi.makeTranslation(t,i,r),this.applyMatrix4(bi),this}scale(t,i,r){return bi.makeScale(t,i,r),this.applyMatrix4(bi),this}lookAt(t){return wd.lookAt(t),wd.updateMatrix(),this.applyMatrix4(wd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Nr).negate(),this.translate(Nr.x,Nr.y,Nr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let o=0,c=t.length;o<c;o++){const d=t[o];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new ba(r,3))}else{const r=Math.min(t.length,i.count);for(let o=0;o<r;o++){const c=t[o];i.setXYZ(o,c.x,c.y,c.z||0)}t.length>i.count&&nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $l);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ae(-1/0,-1/0,-1/0),new ae(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,o=i.length;r<o;r++){const c=i[r];ui.setFromBufferAttribute(c),this.morphTargetsRelative?(Rn.addVectors(this.boundingBox.min,ui.min),this.boundingBox.expandByPoint(Rn),Rn.addVectors(this.boundingBox.max,ui.max),this.boundingBox.expandByPoint(Rn)):(this.boundingBox.expandByPoint(ui.min),this.boundingBox.expandByPoint(ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qh);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ae,1/0);return}if(t){const r=this.boundingSphere.center;if(ui.setFromBufferAttribute(t),i)for(let c=0,d=i.length;c<d;c++){const h=i[c];jl.setFromBufferAttribute(h),this.morphTargetsRelative?(Rn.addVectors(ui.min,jl.min),ui.expandByPoint(Rn),Rn.addVectors(ui.max,jl.max),ui.expandByPoint(Rn)):(ui.expandByPoint(jl.min),ui.expandByPoint(jl.max))}ui.getCenter(r);let o=0;for(let c=0,d=t.count;c<d;c++)Rn.fromBufferAttribute(t,c),o=Math.max(o,r.distanceToSquared(Rn));if(i)for(let c=0,d=i.length;c<d;c++){const h=i[c],p=this.morphTargetsRelative;for(let m=0,M=h.count;m<M;m++)Rn.fromBufferAttribute(h,m),p&&(Nr.fromBufferAttribute(t,m),Rn.add(Nr)),o=Math.max(o,r.distanceToSquared(Rn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,o=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ei(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],p=[];for(let R=0;R<r.count;R++)h[R]=new ae,p[R]=new ae;const m=new ae,M=new ae,x=new ae,v=new pt,b=new pt,T=new pt,w=new ae,S=new ae;function _(R,B,Y){m.fromBufferAttribute(r,R),M.fromBufferAttribute(r,B),x.fromBufferAttribute(r,Y),v.fromBufferAttribute(c,R),b.fromBufferAttribute(c,B),T.fromBufferAttribute(c,Y),M.sub(m),x.sub(m),b.sub(v),T.sub(v);const z=1/(b.x*T.y-T.x*b.y);isFinite(z)&&(w.copy(M).multiplyScalar(T.y).addScaledVector(x,-b.y).multiplyScalar(z),S.copy(x).multiplyScalar(b.x).addScaledVector(M,-T.x).multiplyScalar(z),h[R].add(w),h[B].add(w),h[Y].add(w),p[R].add(S),p[B].add(S),p[Y].add(S))}let D=this.groups;D.length===0&&(D=[{start:0,count:t.count}]);for(let R=0,B=D.length;R<B;++R){const Y=D[R],z=Y.start,K=Y.count;for(let oe=z,le=z+K;oe<le;oe+=3)_(t.getX(oe+0),t.getX(oe+1),t.getX(oe+2))}const L=new ae,O=new ae,X=new ae,P=new ae;function j(R){X.fromBufferAttribute(o,R),P.copy(X);const B=h[R];L.copy(B),L.sub(X.multiplyScalar(X.dot(B))).normalize(),O.crossVectors(P,B);const z=O.dot(p[R])<0?-1:1;d.setXYZW(R,L.x,L.y,L.z,z)}for(let R=0,B=D.length;R<B;++R){const Y=D[R],z=Y.start,K=Y.count;for(let oe=z,le=z+K;oe<le;oe+=3)j(t.getX(oe+0)),j(t.getX(oe+1)),j(t.getX(oe+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ei(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let v=0,b=r.count;v<b;v++)r.setXYZ(v,0,0,0);const o=new ae,c=new ae,d=new ae,h=new ae,p=new ae,m=new ae,M=new ae,x=new ae;if(t)for(let v=0,b=t.count;v<b;v+=3){const T=t.getX(v+0),w=t.getX(v+1),S=t.getX(v+2);o.fromBufferAttribute(i,T),c.fromBufferAttribute(i,w),d.fromBufferAttribute(i,S),M.subVectors(d,c),x.subVectors(o,c),M.cross(x),h.fromBufferAttribute(r,T),p.fromBufferAttribute(r,w),m.fromBufferAttribute(r,S),h.add(M),p.add(M),m.add(M),r.setXYZ(T,h.x,h.y,h.z),r.setXYZ(w,p.x,p.y,p.z),r.setXYZ(S,m.x,m.y,m.z)}else for(let v=0,b=i.count;v<b;v+=3)o.fromBufferAttribute(i,v+0),c.fromBufferAttribute(i,v+1),d.fromBufferAttribute(i,v+2),M.subVectors(d,c),x.subVectors(o,c),M.cross(x),r.setXYZ(v+0,M.x,M.y,M.z),r.setXYZ(v+1,M.x,M.y,M.z),r.setXYZ(v+2,M.x,M.y,M.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)Rn.fromBufferAttribute(t,i),Rn.normalize(),t.setXYZ(i,Rn.x,Rn.y,Rn.z)}toNonIndexed(){function t(h,p){const m=h.array,M=h.itemSize,x=h.normalized,v=new m.constructor(p.length*M);let b=0,T=0;for(let w=0,S=p.length;w<S;w++){h.isInterleavedBufferAttribute?b=p[w]*h.data.stride+h.offset:b=p[w]*M;for(let _=0;_<M;_++)v[T++]=m[b++]}return new Ei(v,M,x)}if(this.index===null)return nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ki,r=this.index.array,o=this.attributes;for(const h in o){const p=o[h],m=t(p,r);i.setAttribute(h,m)}const c=this.morphAttributes;for(const h in c){const p=[],m=c[h];for(let M=0,x=m.length;M<x;M++){const v=m[M],b=t(v,r);p.push(b)}i.morphAttributes[h]=p}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,p=d.length;h<p;h++){const m=d[h];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const m=r[p];t.data.attributes[p]=m.toJSON(t.data)}const o={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],M=[];for(let x=0,v=m.length;x<v;x++){const b=m[x];M.push(b.toJSON(t.data))}M.length>0&&(o[p]=M,c=!0)}c&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const o=t.attributes;for(const m in o){const M=o[m];this.setAttribute(m,M.clone(i))}const c=t.morphAttributes;for(const m in c){const M=[],x=c[m];for(let v=0,b=x.length;v<b;v++)M.push(x[v].clone(i));this.morphAttributes[m]=M}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let m=0,M=d.length;m<M;m++){const x=d[m];this.addGroup(x.start,x.count,x.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let H2=0;class jr extends Aa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:H2++}),this.uuid=Jl(),this.name="",this.type="Material",this.blending=Br,this.side=ya,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xd,this.blendDst=Wd,this.blendEquation=Ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=Ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mr,this.stencilZFail=Mr,this.stencilZPass=Mr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){nt(`Material: parameter '${i}' has value of undefined.`);continue}const o=this[i];if(o===void 0){nt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Br&&(r.blending=this.blending),this.side!==ya&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Xd&&(r.blendSrc=this.blendSrc),this.blendDst!==Wd&&(r.blendDst=this.blendDst),this.blendEquation!==Ps&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ir&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vg&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mr&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Mr&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Mr&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const d=[];for(const h in c){const p=c[h];delete p.metadata,d.push(p)}return d}if(i){const c=o(t.textures),d=o(t.images);c.length>0&&(r.textures=c),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const o=i.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const xa=new ae,Dd=new ae,bc=new ae,rs=new ae,Nd=new ae,yc=new ae,Ud=new ae;class G2{constructor(t=new ae,i=new ae(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,xa)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=xa.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(xa.copy(this.origin).addScaledVector(this.direction,i),xa.distanceToSquared(t))}distanceSqToSegment(t,i,r,o){Dd.copy(t).add(i).multiplyScalar(.5),bc.copy(i).sub(t).normalize(),rs.copy(this.origin).sub(Dd);const c=t.distanceTo(i)*.5,d=-this.direction.dot(bc),h=rs.dot(this.direction),p=-rs.dot(bc),m=rs.lengthSq(),M=Math.abs(1-d*d);let x,v,b,T;if(M>0)if(x=d*p-h,v=d*h-p,T=c*M,x>=0)if(v>=-T)if(v<=T){const w=1/M;x*=w,v*=w,b=x*(x+d*v+2*h)+v*(d*x+v+2*p)+m}else v=c,x=Math.max(0,-(d*v+h)),b=-x*x+v*(v+2*p)+m;else v=-c,x=Math.max(0,-(d*v+h)),b=-x*x+v*(v+2*p)+m;else v<=-T?(x=Math.max(0,-(-d*c+h)),v=x>0?-c:Math.min(Math.max(-c,-p),c),b=-x*x+v*(v+2*p)+m):v<=T?(x=0,v=Math.min(Math.max(-c,-p),c),b=v*(v+2*p)+m):(x=Math.max(0,-(d*c+h)),v=x>0?c:Math.min(Math.max(-c,-p),c),b=-x*x+v*(v+2*p)+m);else v=d>0?-c:c,x=Math.max(0,-(d*v+h)),b=-x*x+v*(v+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,x),o&&o.copy(Dd).addScaledVector(bc,v),b}intersectSphere(t,i){xa.subVectors(t.center,this.origin);const r=xa.dot(this.direction),o=xa.dot(xa)-r*r,c=t.radius*t.radius;if(o>c)return null;const d=Math.sqrt(c-o),h=r-d,p=r+d;return p<0?null:h<0?this.at(p,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,o,c,d,h,p;const m=1/this.direction.x,M=1/this.direction.y,x=1/this.direction.z,v=this.origin;return m>=0?(r=(t.min.x-v.x)*m,o=(t.max.x-v.x)*m):(r=(t.max.x-v.x)*m,o=(t.min.x-v.x)*m),M>=0?(c=(t.min.y-v.y)*M,d=(t.max.y-v.y)*M):(c=(t.max.y-v.y)*M,d=(t.min.y-v.y)*M),r>d||c>o||((c>r||isNaN(r))&&(r=c),(d<o||isNaN(o))&&(o=d),x>=0?(h=(t.min.z-v.z)*x,p=(t.max.z-v.z)*x):(h=(t.max.z-v.z)*x,p=(t.min.z-v.z)*x),r>p||h>o)||((h>r||r!==r)&&(r=h),(p<o||o!==o)&&(o=p),o<0)?null:this.at(r>=0?r:o,i)}intersectsBox(t){return this.intersectBox(t,xa)!==null}intersectTriangle(t,i,r,o,c){Nd.subVectors(i,t),yc.subVectors(r,t),Ud.crossVectors(Nd,yc);let d=this.direction.dot(Ud),h;if(d>0){if(o)return null;h=1}else if(d<0)h=-1,d=-d;else return null;rs.subVectors(this.origin,t);const p=h*this.direction.dot(yc.crossVectors(rs,yc));if(p<0)return null;const m=h*this.direction.dot(Nd.cross(rs));if(m<0||p+m>d)return null;const M=-h*rs.dot(Ud);return M<0?null:this.at(M/d,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dv extends jr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gs,this.combine=j1,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const i1=new yn,Us=new G2,Ec=new qh,a1=new ae,Tc=new ae,Ac=new ae,Rc=new ae,Ld=new ae,Cc=new ae,s1=new ae,wc=new ae;class Fi extends di{constructor(t=new Ki,i=new dv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const o=i[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=o.length;c<d;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,i){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(o,t);const h=this.morphTargetInfluences;if(c&&h){Cc.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const M=h[p],x=c[p];M!==0&&(Ld.fromBufferAttribute(x,t),d?Cc.addScaledVector(Ld,M):Cc.addScaledVector(Ld.sub(i),M))}i.add(Cc)}return i}raycast(t,i){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ec.copy(r.boundingSphere),Ec.applyMatrix4(c),Us.copy(t.ray).recast(t.near),!(Ec.containsPoint(Us.origin)===!1&&(Us.intersectSphere(Ec,a1)===null||Us.origin.distanceToSquared(a1)>(t.far-t.near)**2))&&(i1.copy(c).invert(),Us.copy(t.ray).applyMatrix4(i1),!(r.boundingBox!==null&&Us.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,Us)))}_computeIntersections(t,i,r){let o;const c=this.geometry,d=this.material,h=c.index,p=c.attributes.position,m=c.attributes.uv,M=c.attributes.uv1,x=c.attributes.normal,v=c.groups,b=c.drawRange;if(h!==null)if(Array.isArray(d))for(let T=0,w=v.length;T<w;T++){const S=v[T],_=d[S.materialIndex],D=Math.max(S.start,b.start),L=Math.min(h.count,Math.min(S.start+S.count,b.start+b.count));for(let O=D,X=L;O<X;O+=3){const P=h.getX(O),j=h.getX(O+1),R=h.getX(O+2);o=Dc(this,_,t,r,m,M,x,P,j,R),o&&(o.faceIndex=Math.floor(O/3),o.face.materialIndex=S.materialIndex,i.push(o))}}else{const T=Math.max(0,b.start),w=Math.min(h.count,b.start+b.count);for(let S=T,_=w;S<_;S+=3){const D=h.getX(S),L=h.getX(S+1),O=h.getX(S+2);o=Dc(this,d,t,r,m,M,x,D,L,O),o&&(o.faceIndex=Math.floor(S/3),i.push(o))}}else if(p!==void 0)if(Array.isArray(d))for(let T=0,w=v.length;T<w;T++){const S=v[T],_=d[S.materialIndex],D=Math.max(S.start,b.start),L=Math.min(p.count,Math.min(S.start+S.count,b.start+b.count));for(let O=D,X=L;O<X;O+=3){const P=O,j=O+1,R=O+2;o=Dc(this,_,t,r,m,M,x,P,j,R),o&&(o.faceIndex=Math.floor(O/3),o.face.materialIndex=S.materialIndex,i.push(o))}}else{const T=Math.max(0,b.start),w=Math.min(p.count,b.start+b.count);for(let S=T,_=w;S<_;S+=3){const D=S,L=S+1,O=S+2;o=Dc(this,d,t,r,m,M,x,D,L,O),o&&(o.faceIndex=Math.floor(S/3),i.push(o))}}}}function V2(s,t,i,r,o,c,d,h){let p;if(t.side===wn?p=r.intersectTriangle(d,c,o,!0,h):p=r.intersectTriangle(o,c,d,t.side===ya,h),p===null)return null;wc.copy(h),wc.applyMatrix4(s.matrixWorld);const m=i.ray.origin.distanceTo(wc);return m<i.near||m>i.far?null:{distance:m,point:wc.clone(),object:s}}function Dc(s,t,i,r,o,c,d,h,p,m){s.getVertexPosition(h,Tc),s.getVertexPosition(p,Ac),s.getVertexPosition(m,Rc);const M=V2(s,t,i,r,Tc,Ac,Rc,s1);if(M){const x=new ae;Li.getBarycoord(s1,Tc,Ac,Rc,x),o&&(M.uv=Li.getInterpolatedAttribute(o,h,p,m,x,new pt)),c&&(M.uv1=Li.getInterpolatedAttribute(c,h,p,m,x,new pt)),d&&(M.normal=Li.getInterpolatedAttribute(d,h,p,m,x,new ae),M.normal.dot(r.direction)>0&&M.normal.multiplyScalar(-1));const v={a:h,b:p,c:m,normal:new ae,materialIndex:0};Li.getNormal(Tc,Ac,Rc,v.normal),M.face=v,M.barycoord=x}return M}class k2 extends Dn{constructor(t=null,i=1,r=1,o,c,d,h,p,m=Bn,M=Bn,x,v){super(null,d,h,p,m,M,o,c,x,v),this.isDataTexture=!0,this.image={data:t,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Od=new ae,j2=new ae,X2=new st;class Os{constructor(t=new ae(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,o){return this.normal.set(t,i,r),this.constant=o,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const o=Od.subVectors(r,i).cross(j2.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i,r=!0){const o=t.delta(Od),c=this.normal.dot(o);if(c===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const d=-(t.start.dot(this.normal)+this.constant)/c;return r===!0&&(d<0||d>1)?null:i.copy(t.start).addScaledVector(o,d)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||X2.getNormalMatrix(t),o=this.coplanarPoint(Od).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ls=new qh,W2=new pt(.5,.5),Nc=new ae;class hv{constructor(t=new Os,i=new Os,r=new Os,o=new Os,c=new Os,d=new Os){this.planes=[t,i,r,o,c,d]}set(t,i,r,o,c,d){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(r),h[3].copy(o),h[4].copy(c),h[5].copy(d),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=qi,r=!1){const o=this.planes,c=t.elements,d=c[0],h=c[1],p=c[2],m=c[3],M=c[4],x=c[5],v=c[6],b=c[7],T=c[8],w=c[9],S=c[10],_=c[11],D=c[12],L=c[13],O=c[14],X=c[15];if(o[0].setComponents(m-d,b-M,_-T,X-D).normalize(),o[1].setComponents(m+d,b+M,_+T,X+D).normalize(),o[2].setComponents(m+h,b+x,_+w,X+L).normalize(),o[3].setComponents(m-h,b-x,_-w,X-L).normalize(),r)o[4].setComponents(p,v,S,O).normalize(),o[5].setComponents(m-p,b-v,_-S,X-O).normalize();else if(o[4].setComponents(m-p,b-v,_-S,X-O).normalize(),i===qi)o[5].setComponents(m+p,b+v,_+S,X+O).normalize();else if(i===Wc)o[5].setComponents(p,v,S,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ls.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ls.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ls)}intersectsSprite(t){Ls.center.set(0,0,0);const i=W2.distanceTo(t.center);return Ls.radius=.7071067811865476+i,Ls.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ls)}intersectsSphere(t){const i=this.planes,r=t.center,o=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const o=i[r];if(Nc.x=o.normal.x>0?t.max.x:t.min.x,Nc.y=o.normal.y>0?t.max.y:t.min.y,Nc.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(Nc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class pv extends Dn{constructor(t=[],i=zs,r,o,c,d,h,p,m,M){super(t,i,r,o,c,d,h,p,m,M),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Vs extends Dn{constructor(t,i,r=Zi,o,c,d,h=Bn,p=Bn,m,M=Ta,x=1){if(M!==Ta&&M!==os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:i,depth:x};super(v,o,c,d,h,p,M,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Wh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class q2 extends Vs{constructor(t,i=Zi,r=zs,o,c,d=Bn,h=Bn,p,m=Ta){const M={width:t,height:t,depth:1},x=[M,M,M,M,M,M];super(t,t,i,r,o,c,d,h,p,m),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class mv extends Dn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class eo extends Ki{constructor(t=1,i=1,r=1,o=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:o,heightSegments:c,depthSegments:d};const h=this;o=Math.floor(o),c=Math.floor(c),d=Math.floor(d);const p=[],m=[],M=[],x=[];let v=0,b=0;T("z","y","x",-1,-1,r,i,t,d,c,0),T("z","y","x",1,-1,r,i,-t,d,c,1),T("x","z","y",1,1,t,r,i,o,d,2),T("x","z","y",1,-1,t,r,-i,o,d,3),T("x","y","z",1,-1,t,i,r,o,c,4),T("x","y","z",-1,-1,t,i,-r,o,c,5),this.setIndex(p),this.setAttribute("position",new ba(m,3)),this.setAttribute("normal",new ba(M,3)),this.setAttribute("uv",new ba(x,2));function T(w,S,_,D,L,O,X,P,j,R,B){const Y=O/j,z=X/R,K=O/2,oe=X/2,le=P/2,H=j+1,U=R+1;let I=0,ie=0;const de=new ae;for(let _e=0;_e<U;_e++){const Ue=_e*z-oe;for(let Re=0;Re<H;Re++){const He=Re*Y-K;de[w]=He*D,de[S]=Ue*L,de[_]=le,m.push(de.x,de.y,de.z),de[w]=0,de[S]=0,de[_]=P>0?1:-1,M.push(de.x,de.y,de.z),x.push(Re/j),x.push(1-_e/R),I+=1}}for(let _e=0;_e<R;_e++)for(let Ue=0;Ue<j;Ue++){const Re=v+Ue+H*_e,He=v+Ue+H*(_e+1),et=v+(Ue+1)+H*(_e+1),Ze=v+(Ue+1)+H*_e;p.push(Re,He,Ze),p.push(He,et,Ze),ie+=6}h.addGroup(b,ie,B),b+=ie,v+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new eo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class to extends Ki{constructor(t=1,i=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:o};const c=t/2,d=i/2,h=Math.floor(r),p=Math.floor(o),m=h+1,M=p+1,x=t/h,v=i/p,b=[],T=[],w=[],S=[];for(let _=0;_<M;_++){const D=_*v-d;for(let L=0;L<m;L++){const O=L*x-c;T.push(O,-D,0),w.push(0,0,1),S.push(L/h),S.push(1-_/p)}}for(let _=0;_<p;_++)for(let D=0;D<h;D++){const L=D+m*_,O=D+m*(_+1),X=D+1+m*(_+1),P=D+1+m*_;b.push(L,O,P),b.push(O,X,P)}this.setIndex(b),this.setAttribute("position",new ba(T,3)),this.setAttribute("normal",new ba(w,3)),this.setAttribute("uv",new ba(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new to(t.width,t.height,t.widthSegments,t.heightSegments)}}function Vr(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const o=s[i][r];if(r1(o))o.isRenderTargetTexture?(nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=o.clone();else if(Array.isArray(o))if(r1(o[0])){const c=[];for(let d=0,h=o.length;d<h;d++)c[d]=o[d].clone();t[i][r]=c}else t[i][r]=o.slice();else t[i][r]=o}}return t}function kn(s){const t={};for(let i=0;i<s.length;i++){const r=Vr(s[i]);for(const o in r)t[o]=r[o]}return t}function r1(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Y2(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function gv(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Et.workingColorSpace}const Z2={clone:Vr,merge:kn};var K2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Q2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Jn extends jr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=K2,this.fragmentShader=Q2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Vr(t.uniforms),this.uniformsGroups=Y2(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const o in this.uniforms){const d=this.uniforms[o].value;d&&d.isTexture?i.uniforms[o]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[o]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[o]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[o]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[o]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[o]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[o]={type:"m4",value:d.toArray()}:i.uniforms[o]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class J2 extends Jn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class $2 extends jr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ql,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class e3 extends jr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Uc=new ae,Lc=new kr,ki=new ae;class vv extends di{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yn,this.projectionMatrix=new yn,this.projectionMatrixInverse=new yn,this.coordinateSystem=qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Uc,Lc,ki),ki.x===1&&ki.y===1&&ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Uc,Lc,ki.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose(Uc,Lc,ki),ki.x===1&&ki.y===1&&ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Uc,Lc,ki.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ls=new ae,l1=new pt,o1=new pt;class yi extends vv{constructor(t=50,i=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Lh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(fd*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Lh*2*Math.atan(Math.tan(fd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){ls.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ls.x,ls.y).multiplyScalar(-t/ls.z),ls.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ls.x,ls.y).multiplyScalar(-t/ls.z)}getViewSize(t,i){return this.getViewBounds(t,l1,o1),i.subVectors(o1,l1)}setViewOffset(t,i,r,o,c,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(fd*.5*this.fov)/this.zoom,r=2*i,o=this.aspect*r,c=-.5*o;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,m=d.fullHeight;c+=d.offsetX*o/p,i-=d.offsetY*r/m,o*=d.width/p,r*=d.height/m}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Qc extends vv{constructor(t=-1,i=1,r=1,o=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=o,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,o,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-t,d=r+t,h=o+i,p=o-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,M=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,d=c+m*this.view.width,h-=M*this.view.offsetY,p=h-M*this.view.height}this.projectionMatrix.makeOrthographic(c,d,h,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Ur=-90,Lr=1;class t3 extends di{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new yi(Ur,Lr,t,i);o.layers=this.layers,this.add(o);const c=new yi(Ur,Lr,t,i);c.layers=this.layers,this.add(c);const d=new yi(Ur,Lr,t,i);d.layers=this.layers,this.add(d);const h=new yi(Ur,Lr,t,i);h.layers=this.layers,this.add(h);const p=new yi(Ur,Lr,t,i);p.layers=this.layers,this.add(p);const m=new yi(Ur,Lr,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,o,c,d,h,p]=i;for(const m of i)this.remove(m);if(t===qi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===Wc)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,d,h,p,m,M]=this.children,x=t.getRenderTarget(),v=t.getActiveCubeFace(),b=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let S=!1;t.isWebGLRenderer===!0?S=t.state.buffers.depth.getReversed():S=t.reversedDepthBuffer,t.setRenderTarget(r,0,o),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(r,1,o),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),t.setRenderTarget(r,2,o),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),t.setRenderTarget(r,3,o),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),t.setRenderTarget(r,4,o),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),r.texture.generateMipmaps=w,t.setRenderTarget(r,5,o),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,M),t.setRenderTarget(x,v,b),t.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class n3 extends yi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class dn{constructor(t){this.value=t}clone(){return new dn(this.value.clone===void 0?this.value:this.value.clone())}}class i3{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,nt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}const Jh=class Jh{constructor(t,i,r,o){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let r=0;r<4;r++)this.elements[r]=t[r+i];return this}set(t,i,r,o){const c=this.elements;return c[0]=t,c[2]=i,c[1]=r,c[3]=o,this}};Jh.prototype.isMatrix2=!0;let c1=Jh;function u1(s,t,i,r){const o=a3(r);switch(i){case iv:return s*t;case sv:return s*t/o.components*o.byteLength;case Gh:return s*t/o.components*o.byteLength;case Hs:return s*t*2/o.components*o.byteLength;case Vh:return s*t*2/o.components*o.byteLength;case av:return s*t*3/o.components*o.byteLength;case Pi:return s*t*4/o.components*o.byteLength;case kh:return s*t*4/o.components*o.byteLength;case Fc:case Ic:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case zc:case Hc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case nh:case ah:return Math.max(s,16)*Math.max(t,8)/4;case th:case ih:return Math.max(s,8)*Math.max(t,8)/2;case sh:case rh:case oh:case ch:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case lh:case kc:case uh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case fh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case dh:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case hh:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case ph:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case mh:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case gh:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case vh:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case _h:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case xh:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Sh:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Mh:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case bh:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case yh:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Eh:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Th:case Ah:case Rh:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Ch:case wh:return Math.ceil(s/4)*Math.ceil(t/4)*8;case jc:case Dh:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function a3(s){switch(s){case Gn:case $1:return{byteLength:1,components:1};case Kl:case ev:case Ea:return{byteLength:2,components:1};case zh:case Hh:return{byteLength:2,components:4};case Zi:case Ih:case Oi:return{byteLength:4,components:1};case tv:case nv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zc}}));typeof window<"u"&&(window.__THREE__?nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zc);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function _v(){let s=null,t=!1,i=null,r=null;function o(c,d){i(c,d),r=s.requestAnimationFrame(o)}return{start:function(){t!==!0&&i!==null&&s!==null&&(r=s.requestAnimationFrame(o),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function s3(s){const t=new WeakMap;function i(h,p){const m=h.array,M=h.usage,x=m.byteLength,v=s.createBuffer();s.bindBuffer(p,v),s.bufferData(p,m,M),h.onUploadCallback();let b;if(m instanceof Float32Array)b=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)b=s.HALF_FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?b=s.HALF_FLOAT:b=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)b=s.SHORT;else if(m instanceof Uint32Array)b=s.UNSIGNED_INT;else if(m instanceof Int32Array)b=s.INT;else if(m instanceof Int8Array)b=s.BYTE;else if(m instanceof Uint8Array)b=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)b=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:v,type:b,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:x}}function r(h,p,m){const M=p.array,x=p.updateRanges;if(s.bindBuffer(m,h),x.length===0)s.bufferSubData(m,0,M);else{x.sort((b,T)=>b.start-T.start);let v=0;for(let b=1;b<x.length;b++){const T=x[v],w=x[b];w.start<=T.start+T.count+1?T.count=Math.max(T.count,w.start+w.count-T.start):(++v,x[v]=w)}x.length=v+1;for(let b=0,T=x.length;b<T;b++){const w=x[b];s.bufferSubData(m,w.start*M.BYTES_PER_ELEMENT,M,w.start,w.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=t.get(h);p&&(s.deleteBuffer(p.buffer),t.delete(h))}function d(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const M=t.get(h);(!M||M.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=t.get(h);if(m===void 0)t.set(h,i(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,h,p),m.version=h.version}}return{get:o,remove:c,update:d}}var r3=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,l3=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,o3=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,c3=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,u3=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,f3=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,d3=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,h3=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,p3=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,m3=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,g3=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,v3=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_3=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,x3=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,S3=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,M3=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,b3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,y3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,E3=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,T3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,A3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,R3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,C3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,w3=`#define PI 3.141592653589793
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
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,D3=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
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
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
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
#endif`,N3=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,U3=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,L3=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,O3=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,P3=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,B3="gl_FragColor = linearToOutputTexel( gl_FragColor );",F3=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,I3=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,z3=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,H3=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,G3=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,V3=`#ifdef USE_ENVMAP
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
#endif`,k3=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,j3=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,X3=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,W3=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,q3=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Y3=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Z3=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,K3=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Q3=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,J3=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,$3=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,eS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,iS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,aS=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,sS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,rS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,oS=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,cS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_S=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,SS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,MS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,yS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ES=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,TS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,AS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,DS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,NS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,US=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,LS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,OS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,PS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,BS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,FS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,IS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,HS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,GS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,VS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,kS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,jS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,XS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,WS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,YS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ZS=`#ifdef USE_SKINNING
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
#endif`,KS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,QS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,JS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$S=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,eM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,tM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,nM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,iM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,aM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,sM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,hM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,pM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,mM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,gM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_M=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,SM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,MM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,yM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,TM=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,RM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,CM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,wM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,NM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
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
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,LM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
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
}`,PM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,BM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,IM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,zM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,dt={alphahash_fragment:r3,alphahash_pars_fragment:l3,alphamap_fragment:o3,alphamap_pars_fragment:c3,alphatest_fragment:u3,alphatest_pars_fragment:f3,aomap_fragment:d3,aomap_pars_fragment:h3,batching_pars_vertex:p3,batching_vertex:m3,begin_vertex:g3,beginnormal_vertex:v3,bsdfs:_3,iridescence_fragment:x3,bumpmap_pars_fragment:S3,clipping_planes_fragment:M3,clipping_planes_pars_fragment:b3,clipping_planes_pars_vertex:y3,clipping_planes_vertex:E3,color_fragment:T3,color_pars_fragment:A3,color_pars_vertex:R3,color_vertex:C3,common:w3,cube_uv_reflection_fragment:D3,defaultnormal_vertex:N3,displacementmap_pars_vertex:U3,displacementmap_vertex:L3,emissivemap_fragment:O3,emissivemap_pars_fragment:P3,colorspace_fragment:B3,colorspace_pars_fragment:F3,envmap_fragment:I3,envmap_common_pars_fragment:z3,envmap_pars_fragment:H3,envmap_pars_vertex:G3,envmap_physical_pars_fragment:J3,envmap_vertex:V3,fog_vertex:k3,fog_pars_vertex:j3,fog_fragment:X3,fog_pars_fragment:W3,gradientmap_pars_fragment:q3,lightmap_pars_fragment:Y3,lights_lambert_fragment:Z3,lights_lambert_pars_fragment:K3,lights_pars_begin:Q3,lights_toon_fragment:$3,lights_toon_pars_fragment:eS,lights_phong_fragment:tS,lights_phong_pars_fragment:nS,lights_physical_fragment:iS,lights_physical_pars_fragment:aS,lights_fragment_begin:sS,lights_fragment_maps:rS,lights_fragment_end:lS,lightprobes_pars_fragment:oS,logdepthbuf_fragment:cS,logdepthbuf_pars_fragment:uS,logdepthbuf_pars_vertex:fS,logdepthbuf_vertex:dS,map_fragment:hS,map_pars_fragment:pS,map_particle_fragment:mS,map_particle_pars_fragment:gS,metalnessmap_fragment:vS,metalnessmap_pars_fragment:_S,morphinstance_vertex:xS,morphcolor_vertex:SS,morphnormal_vertex:MS,morphtarget_pars_vertex:bS,morphtarget_vertex:yS,normal_fragment_begin:ES,normal_fragment_maps:TS,normal_pars_fragment:AS,normal_pars_vertex:RS,normal_vertex:CS,normalmap_pars_fragment:wS,clearcoat_normal_fragment_begin:DS,clearcoat_normal_fragment_maps:NS,clearcoat_pars_fragment:US,iridescence_pars_fragment:LS,opaque_fragment:OS,packing:PS,premultiplied_alpha_fragment:BS,project_vertex:FS,dithering_fragment:IS,dithering_pars_fragment:zS,roughnessmap_fragment:HS,roughnessmap_pars_fragment:GS,shadowmap_pars_fragment:VS,shadowmap_pars_vertex:kS,shadowmap_vertex:jS,shadowmask_pars_fragment:XS,skinbase_vertex:WS,skinning_pars_vertex:qS,skinning_vertex:YS,skinnormal_vertex:ZS,specularmap_fragment:KS,specularmap_pars_fragment:QS,tonemapping_fragment:JS,tonemapping_pars_fragment:$S,transmission_fragment:eM,transmission_pars_fragment:tM,uv_pars_fragment:nM,uv_pars_vertex:iM,uv_vertex:aM,worldpos_vertex:sM,background_vert:rM,background_frag:lM,backgroundCube_vert:oM,backgroundCube_frag:cM,cube_vert:uM,cube_frag:fM,depth_vert:dM,depth_frag:hM,distance_vert:pM,distance_frag:mM,equirect_vert:gM,equirect_frag:vM,linedashed_vert:_M,linedashed_frag:xM,meshbasic_vert:SM,meshbasic_frag:MM,meshlambert_vert:bM,meshlambert_frag:yM,meshmatcap_vert:EM,meshmatcap_frag:TM,meshnormal_vert:AM,meshnormal_frag:RM,meshphong_vert:CM,meshphong_frag:wM,meshphysical_vert:DM,meshphysical_frag:NM,meshtoon_vert:UM,meshtoon_frag:LM,points_vert:OM,points_frag:PM,shadow_vert:BM,shadow_frag:FM,sprite_vert:IM,sprite_frag:zM},Be={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ae},probesMax:{value:new ae},probesResolution:{value:new ae}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},Xi={basic:{uniforms:kn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:kn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Pt(0)},envMapIntensity:{value:1}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:kn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:kn([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:kn([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new Pt(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:kn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:kn([Be.points,Be.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:kn([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:kn([Be.common,Be.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:kn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:kn([Be.sprite,Be.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distance:{uniforms:kn([Be.common,Be.displacementmap,{referencePosition:{value:new ae},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distance_vert,fragmentShader:dt.distance_frag},shadow:{uniforms:kn([Be.lights,Be.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};Xi.physical={uniforms:kn([Xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const Oc={r:0,b:0,g:0},HM=new yn,xv=new st;xv.set(-1,0,0,0,1,0,0,0,1);function GM(s,t,i,r,o,c){const d=new Pt(0);let h=o===!0?0:1,p,m,M=null,x=0,v=null;function b(D){let L=D.isScene===!0?D.background:null;if(L&&L.isTexture){const O=D.backgroundBlurriness>0;L=t.get(L,O)}return L}function T(D){let L=!1;const O=b(D);O===null?S(d,h):O&&O.isColor&&(S(O,1),L=!0);const X=s.xr.getEnvironmentBlendMode();X==="additive"?i.buffers.color.setClear(0,0,0,1,c):X==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(s.autoClear||L)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function w(D,L){const O=b(L);O&&(O.isCubeTexture||O.mapping===Kc)?(m===void 0&&(m=new Fi(new eo(1,1,1),new Jn({name:"BackgroundCubeMaterial",uniforms:Vr(Xi.backgroundCube.uniforms),vertexShader:Xi.backgroundCube.vertexShader,fragmentShader:Xi.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(X,P,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),m.material.uniforms.envMap.value=O,m.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(HM.makeRotationFromEuler(L.backgroundRotation)).transpose(),O.isCubeTexture&&O.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(xv),m.material.toneMapped=Et.getTransfer(O.colorSpace)!==Vt,(M!==O||x!==O.version||v!==s.toneMapping)&&(m.material.needsUpdate=!0,M=O,x=O.version,v=s.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null)):O&&O.isTexture&&(p===void 0&&(p=new Fi(new to(2,2),new Jn({name:"BackgroundMaterial",uniforms:Vr(Xi.background.uniforms),vertexShader:Xi.background.vertexShader,fragmentShader:Xi.background.fragmentShader,side:ya,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=O,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.toneMapped=Et.getTransfer(O.colorSpace)!==Vt,O.matrixAutoUpdate===!0&&O.updateMatrix(),p.material.uniforms.uvTransform.value.copy(O.matrix),(M!==O||x!==O.version||v!==s.toneMapping)&&(p.material.needsUpdate=!0,M=O,x=O.version,v=s.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null))}function S(D,L){D.getRGB(Oc,gv(s)),i.buffers.color.setClear(Oc.r,Oc.g,Oc.b,L,c)}function _(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(D,L=1){d.set(D),h=L,S(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(D){h=D,S(d,h)},render:T,addToRenderList:w,dispose:_}}function VM(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=v(null);let c=o,d=!1;function h(z,K,oe,le,H){let U=!1;const I=x(z,le,oe,K);c!==I&&(c=I,m(c.object)),U=b(z,le,oe,H),U&&T(z,le,oe,H),H!==null&&t.update(H,s.ELEMENT_ARRAY_BUFFER),(U||d)&&(d=!1,O(z,K,oe,le),H!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function p(){return s.createVertexArray()}function m(z){return s.bindVertexArray(z)}function M(z){return s.deleteVertexArray(z)}function x(z,K,oe,le){const H=le.wireframe===!0;let U=r[K.id];U===void 0&&(U={},r[K.id]=U);const I=z.isInstancedMesh===!0?z.id:0;let ie=U[I];ie===void 0&&(ie={},U[I]=ie);let de=ie[oe.id];de===void 0&&(de={},ie[oe.id]=de);let _e=de[H];return _e===void 0&&(_e=v(p()),de[H]=_e),_e}function v(z){const K=[],oe=[],le=[];for(let H=0;H<i;H++)K[H]=0,oe[H]=0,le[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:oe,attributeDivisors:le,object:z,attributes:{},index:null}}function b(z,K,oe,le){const H=c.attributes,U=K.attributes;let I=0;const ie=oe.getAttributes();for(const de in ie)if(ie[de].location>=0){const Ue=H[de];let Re=U[de];if(Re===void 0&&(de==="instanceMatrix"&&z.instanceMatrix&&(Re=z.instanceMatrix),de==="instanceColor"&&z.instanceColor&&(Re=z.instanceColor)),Ue===void 0||Ue.attribute!==Re||Re&&Ue.data!==Re.data)return!0;I++}return c.attributesNum!==I||c.index!==le}function T(z,K,oe,le){const H={},U=K.attributes;let I=0;const ie=oe.getAttributes();for(const de in ie)if(ie[de].location>=0){let Ue=U[de];Ue===void 0&&(de==="instanceMatrix"&&z.instanceMatrix&&(Ue=z.instanceMatrix),de==="instanceColor"&&z.instanceColor&&(Ue=z.instanceColor));const Re={};Re.attribute=Ue,Ue&&Ue.data&&(Re.data=Ue.data),H[de]=Re,I++}c.attributes=H,c.attributesNum=I,c.index=le}function w(){const z=c.newAttributes;for(let K=0,oe=z.length;K<oe;K++)z[K]=0}function S(z){_(z,0)}function _(z,K){const oe=c.newAttributes,le=c.enabledAttributes,H=c.attributeDivisors;oe[z]=1,le[z]===0&&(s.enableVertexAttribArray(z),le[z]=1),H[z]!==K&&(s.vertexAttribDivisor(z,K),H[z]=K)}function D(){const z=c.newAttributes,K=c.enabledAttributes;for(let oe=0,le=K.length;oe<le;oe++)K[oe]!==z[oe]&&(s.disableVertexAttribArray(oe),K[oe]=0)}function L(z,K,oe,le,H,U,I){I===!0?s.vertexAttribIPointer(z,K,oe,H,U):s.vertexAttribPointer(z,K,oe,le,H,U)}function O(z,K,oe,le){w();const H=le.attributes,U=oe.getAttributes(),I=K.defaultAttributeValues;for(const ie in U){const de=U[ie];if(de.location>=0){let _e=H[ie];if(_e===void 0&&(ie==="instanceMatrix"&&z.instanceMatrix&&(_e=z.instanceMatrix),ie==="instanceColor"&&z.instanceColor&&(_e=z.instanceColor)),_e!==void 0){const Ue=_e.normalized,Re=_e.itemSize,He=t.get(_e);if(He===void 0)continue;const et=He.buffer,Ze=He.type,he=He.bytesPerElement,De=Ze===s.INT||Ze===s.UNSIGNED_INT||_e.gpuType===Ih;if(_e.isInterleavedBufferAttribute){const ve=_e.data,Ve=ve.stride,Je=_e.offset;if(ve.isInstancedInterleavedBuffer){for(let Ye=0;Ye<de.locationSize;Ye++)_(de.location+Ye,ve.meshPerAttribute);z.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Ye=0;Ye<de.locationSize;Ye++)S(de.location+Ye);s.bindBuffer(s.ARRAY_BUFFER,et);for(let Ye=0;Ye<de.locationSize;Ye++)L(de.location+Ye,Re/de.locationSize,Ze,Ue,Ve*he,(Je+Re/de.locationSize*Ye)*he,De)}else{if(_e.isInstancedBufferAttribute){for(let ve=0;ve<de.locationSize;ve++)_(de.location+ve,_e.meshPerAttribute);z.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let ve=0;ve<de.locationSize;ve++)S(de.location+ve);s.bindBuffer(s.ARRAY_BUFFER,et);for(let ve=0;ve<de.locationSize;ve++)L(de.location+ve,Re/de.locationSize,Ze,Ue,Re*he,Re/de.locationSize*ve*he,De)}}else if(I!==void 0){const Ue=I[ie];if(Ue!==void 0)switch(Ue.length){case 2:s.vertexAttrib2fv(de.location,Ue);break;case 3:s.vertexAttrib3fv(de.location,Ue);break;case 4:s.vertexAttrib4fv(de.location,Ue);break;default:s.vertexAttrib1fv(de.location,Ue)}}}}D()}function X(){B();for(const z in r){const K=r[z];for(const oe in K){const le=K[oe];for(const H in le){const U=le[H];for(const I in U)M(U[I].object),delete U[I];delete le[H]}}delete r[z]}}function P(z){if(r[z.id]===void 0)return;const K=r[z.id];for(const oe in K){const le=K[oe];for(const H in le){const U=le[H];for(const I in U)M(U[I].object),delete U[I];delete le[H]}}delete r[z.id]}function j(z){for(const K in r){const oe=r[K];for(const le in oe){const H=oe[le];if(H[z.id]===void 0)continue;const U=H[z.id];for(const I in U)M(U[I].object),delete U[I];delete H[z.id]}}}function R(z){for(const K in r){const oe=r[K],le=z.isInstancedMesh===!0?z.id:0,H=oe[le];if(H!==void 0){for(const U in H){const I=H[U];for(const ie in I)M(I[ie].object),delete I[ie];delete H[U]}delete oe[le],Object.keys(oe).length===0&&delete r[K]}}}function B(){Y(),d=!0,c!==o&&(c=o,m(c.object))}function Y(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:B,resetDefaultState:Y,dispose:X,releaseStatesOfGeometry:P,releaseStatesOfObject:R,releaseStatesOfProgram:j,initAttributes:w,enableAttribute:S,disableUnusedAttributes:D}}function kM(s,t,i){let r;function o(p){r=p}function c(p,m){s.drawArrays(r,p,m),i.update(m,r,1)}function d(p,m,M){M!==0&&(s.drawArraysInstanced(r,p,m,M),i.update(m,r,M))}function h(p,m,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,m,0,M);let v=0;for(let b=0;b<M;b++)v+=m[b];i.update(v,r,1)}this.setMode=o,this.render=c,this.renderInstances=d,this.renderMultiDraw=h}function jM(s,t,i,r){let o;function c(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){const j=t.get("EXT_texture_filter_anisotropic");o=s.getParameter(j.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function d(j){return!(j!==Pi&&r.convert(j)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(j){const R=j===Ea&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(j!==Gn&&r.convert(j)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&j!==Oi&&!R)}function p(j){if(j==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";j="mediump"}return j==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const M=p(m);M!==m&&(nt("WebGLRenderer:",m,"not supported, using",M,"instead."),m=M);const x=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&v===!1&&nt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const b=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),D=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),O=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),X=s.getParameter(s.MAX_SAMPLES),P=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:d,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:x,reversedDepthBuffer:v,maxTextures:b,maxVertexTextures:T,maxTextureSize:w,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:D,maxVaryings:L,maxFragmentUniforms:O,maxSamples:X,samples:P}}function XM(s){const t=this;let i=null,r=0,o=!1,c=!1;const d=new Os,h=new st,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(x,v){const b=x.length!==0||v||r!==0||o;return o=v,r=x.length,b},this.beginShadows=function(){c=!0,M(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,v){i=M(x,v,0)},this.setState=function(x,v,b){const T=x.clippingPlanes,w=x.clipIntersection,S=x.clipShadows,_=s.get(x);if(!o||T===null||T.length===0||c&&!S)c?M(null):m();else{const D=c?0:r,L=D*4;let O=_.clippingState||null;p.value=O,O=M(T,v,L,b);for(let X=0;X!==L;++X)O[X]=i[X];_.clippingState=O,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=D}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function M(x,v,b,T){const w=x!==null?x.length:0;let S=null;if(w!==0){if(S=p.value,T!==!0||S===null){const _=b+w*4,D=v.matrixWorldInverse;h.getNormalMatrix(D),(S===null||S.length<_)&&(S=new Float32Array(_));for(let L=0,O=b;L!==w;++L,O+=4)d.copy(x[L]).applyMatrix4(D,h),d.normal.toArray(S,O),S[O+3]=d.constant}p.value=S,p.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,S}}const cs=4,f1=[.125,.215,.35,.446,.526,.582],Bs=20,WM=256,Xl=new Qc,d1=new Pt;let Pd=null,Bd=0,Fd=0,Id=!1;const qM=new ae;class h1{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,r=.1,o=100,c={}){const{size:d=256,position:h=qM}=c;Pd=this._renderer.getRenderTarget(),Bd=this._renderer.getActiveCubeFace(),Fd=this._renderer.getActiveMipmapLevel(),Id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,r,o,p,h),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=g1(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=m1(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Pd,Bd,Fd),this._renderer.xr.enabled=Id,t.scissorTest=!1,Or(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===zs||t.mapping===zr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Pd=this._renderer.getRenderTarget(),Bd=this._renderer.getActiveCubeFace(),Fd=this._renderer.getActiveMipmapLevel(),Id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:on,minFilter:on,generateMipmaps:!1,type:Ea,format:Pi,colorSpace:Gr,depthBuffer:!1},o=p1(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=p1(t,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=YM(c)),this._blurMaterial=KM(c,t,i),this._ggxMaterial=ZM(c,t,i)}return o}_compileMaterial(t){const i=new Fi(new Ki,t);this._renderer.compile(i,Xl)}_sceneToCubeUV(t,i,r,o,c){const p=new yi(90,1,i,r),m=[1,-1,1,1,1,1],M=[1,1,1,-1,-1,-1],x=this._renderer,v=x.autoClear,b=x.toneMapping;x.getClearColor(d1),x.toneMapping=Yi,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(o),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Fi(new eo,new dv({name:"PMREM.Background",side:wn,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,S=w.material;let _=!1;const D=t.background;D?D.isColor&&(S.color.copy(D),t.background=null,_=!0):(S.color.copy(d1),_=!0);for(let L=0;L<6;L++){const O=L%3;O===0?(p.up.set(0,m[L],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+M[L],c.y,c.z)):O===1?(p.up.set(0,0,m[L]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+M[L],c.z)):(p.up.set(0,m[L],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+M[L]));const X=this._cubeSize;Or(o,O*X,L>2?X:0,X,X),x.setRenderTarget(o),_&&x.render(w,p),x.render(t,p)}x.toneMapping=b,x.autoClear=v,t.background=D}_textureToCubeUV(t,i){const r=this._renderer,o=t.mapping===zs||t.mapping===zr;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=g1()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=m1());const c=o?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const h=c.uniforms;h.envMap.value=t;const p=this._cubeSize;Or(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(d,Xl)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=r}_applyGGXFilter(t,i,r){const o=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[r];h.material=d;const p=d.uniforms,m=r/(this._lodMeshes.length-1),M=i/(this._lodMeshes.length-1),x=Math.sqrt(m*m-M*M),v=0+m*1.25,b=x*v,{_lodMax:T}=this,w=this._sizeLods[r],S=3*w*(r>T-cs?r-T+cs:0),_=4*(this._cubeSize-w);p.envMap.value=t.texture,p.roughness.value=b,p.mipInt.value=T-i,Or(c,S,_,3*w,2*w),o.setRenderTarget(c),o.render(h,Xl),p.envMap.value=c.texture,p.roughness.value=0,p.mipInt.value=T-r,Or(t,S,_,3*w,2*w),o.setRenderTarget(t),o.render(h,Xl)}_blur(t,i,r,o,c){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,r,o,"latitudinal",c),this._halfBlur(d,t,r,r,o,"longitudinal",c)}_halfBlur(t,i,r,o,c,d,h){const p=this._renderer,m=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Rt("blur direction must be either latitudinal or longitudinal!");const M=3,x=this._lodMeshes[o];x.material=m;const v=m.uniforms,b=this._sizeLods[r]-1,T=isFinite(c)?Math.PI/(2*b):2*Math.PI/(2*Bs-1),w=c/T,S=isFinite(c)?1+Math.floor(M*w):Bs;S>Bs&&nt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Bs}`);const _=[];let D=0;for(let j=0;j<Bs;++j){const R=j/w,B=Math.exp(-R*R/2);_.push(B),j===0?D+=B:j<S&&(D+=2*B)}for(let j=0;j<_.length;j++)_[j]=_[j]/D;v.envMap.value=t.texture,v.samples.value=S,v.weights.value=_,v.latitudinal.value=d==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:L}=this;v.dTheta.value=T,v.mipInt.value=L-r;const O=this._sizeLods[o],X=3*O*(o>L-cs?o-L+cs:0),P=4*(this._cubeSize-O);Or(i,X,P,3*O,2*O),p.setRenderTarget(i),p.render(x,Xl)}}function YM(s){const t=[],i=[],r=[];let o=s;const c=s-cs+1+f1.length;for(let d=0;d<c;d++){const h=Math.pow(2,o);t.push(h);let p=1/h;d>s-cs?p=f1[d-s+cs-1]:d===0&&(p=0),i.push(p);const m=1/(h-2),M=-m,x=1+m,v=[M,M,x,M,x,x,M,M,x,x,M,x],b=6,T=6,w=3,S=2,_=1,D=new Float32Array(w*T*b),L=new Float32Array(S*T*b),O=new Float32Array(_*T*b);for(let P=0;P<b;P++){const j=P%3*2/3-1,R=P>2?0:-1,B=[j,R,0,j+2/3,R,0,j+2/3,R+1,0,j,R,0,j+2/3,R+1,0,j,R+1,0];D.set(B,w*T*P),L.set(v,S*T*P);const Y=[P,P,P,P,P,P];O.set(Y,_*T*P)}const X=new Ki;X.setAttribute("position",new Ei(D,w)),X.setAttribute("uv",new Ei(L,S)),X.setAttribute("faceIndex",new Ei(O,_)),r.push(new Fi(X,null)),o>cs&&o--}return{lodMeshes:r,sizeLods:t,sigmas:i}}function p1(s,t,i){const r=new jn(s,t,i);return r.texture.mapping=Kc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Or(s,t,i,r,o){s.viewport.set(t,i,r,o),s.scissor.set(t,i,r,o)}function ZM(s,t,i){return new Jn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:WM,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Jc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function KM(s,t,i){const r=new Float32Array(Bs),o=new ae(0,1,0);return new Jn({name:"SphericalGaussianBlur",defines:{n:Bs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Jc(),fragmentShader:`

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

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function m1(){return new Jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function g1(){return new Jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Jc(){return`

		precision mediump float;
		precision mediump int;

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
	`}class Sv extends jn{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},o=[r,r,r,r,r,r];this.texture=new pv(o),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new eo(5,5,5),c=new Jn({name:"CubemapFromEquirect",uniforms:Vr(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:wn,blending:Bi});c.uniforms.tEquirect.value=i;const d=new Fi(o,c),h=i.minFilter;return i.minFilter===Fs&&(i.minFilter=on),new t3(1,10,this).update(t,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,r=!0,o=!0){const c=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,r,o);t.setRenderTarget(c)}}function QM(s){let t=new WeakMap,i=new WeakMap,r=null;function o(v,b=!1){return v==null?null:b?d(v):c(v)}function c(v){if(v&&v.isTexture){const b=v.mapping;if(b===od||b===cd)if(t.has(v)){const T=t.get(v).texture;return h(T,v.mapping)}else{const T=v.image;if(T&&T.height>0){const w=new Sv(T.height);return w.fromEquirectangularTexture(s,v),t.set(v,w),v.addEventListener("dispose",m),h(w.texture,v.mapping)}else return null}}return v}function d(v){if(v&&v.isTexture){const b=v.mapping,T=b===od||b===cd,w=b===zs||b===zr;if(T||w){let S=i.get(v);const _=S!==void 0?S.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==_)return r===null&&(r=new h1(s)),S=T?r.fromEquirectangular(v,S):r.fromCubemap(v,S),S.texture.pmremVersion=v.pmremVersion,i.set(v,S),S.texture;if(S!==void 0)return S.texture;{const D=v.image;return T&&D&&D.height>0||w&&D&&p(D)?(r===null&&(r=new h1(s)),S=T?r.fromEquirectangular(v):r.fromCubemap(v),S.texture.pmremVersion=v.pmremVersion,i.set(v,S),v.addEventListener("dispose",M),S.texture):null}}}return v}function h(v,b){return b===od?v.mapping=zs:b===cd&&(v.mapping=zr),v}function p(v){let b=0;const T=6;for(let w=0;w<T;w++)v[w]!==void 0&&b++;return b===T}function m(v){const b=v.target;b.removeEventListener("dispose",m);const T=t.get(b);T!==void 0&&(t.delete(b),T.dispose())}function M(v){const b=v.target;b.removeEventListener("dispose",M);const T=i.get(b);T!==void 0&&(i.delete(b),T.dispose())}function x(){t=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:x}}function JM(s){const t={};function i(r){if(t[r]!==void 0)return t[r];const o=s.getExtension(r);return t[r]=o,o}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const o=i(r);return o===null&&Uh("WebGLRenderer: "+r+" extension not supported."),o}}}function $M(s,t,i,r){const o={},c=new WeakMap;function d(x){const v=x.target;v.index!==null&&t.remove(v.index);for(const T in v.attributes)t.remove(v.attributes[T]);v.removeEventListener("dispose",d),delete o[v.id];const b=c.get(v);b&&(t.remove(b),c.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function h(x,v){return o[v.id]===!0||(v.addEventListener("dispose",d),o[v.id]=!0,i.memory.geometries++),v}function p(x){const v=x.attributes;for(const b in v)t.update(v[b],s.ARRAY_BUFFER)}function m(x){const v=[],b=x.index,T=x.attributes.position;let w=0;if(T===void 0)return;if(b!==null){const D=b.array;w=b.version;for(let L=0,O=D.length;L<O;L+=3){const X=D[L+0],P=D[L+1],j=D[L+2];v.push(X,P,P,j,j,X)}}else{const D=T.array;w=T.version;for(let L=0,O=D.length/3-1;L<O;L+=3){const X=L+0,P=L+1,j=L+2;v.push(X,P,P,j,j,X)}}const S=new(T.count>=65535?fv:uv)(v,1);S.version=w;const _=c.get(x);_&&t.remove(_),c.set(x,S)}function M(x){const v=c.get(x);if(v){const b=x.index;b!==null&&v.version<b.version&&m(x)}else m(x);return c.get(x)}return{get:h,update:p,getWireframeAttribute:M}}function eb(s,t,i){let r;function o(x){r=x}let c,d;function h(x){c=x.type,d=x.bytesPerElement}function p(x,v){s.drawElements(r,v,c,x*d),i.update(v,r,1)}function m(x,v,b){b!==0&&(s.drawElementsInstanced(r,v,c,x*d,b),i.update(v,r,b))}function M(x,v,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,v,0,c,x,0,b);let w=0;for(let S=0;S<b;S++)w+=v[S];i.update(w,r,1)}this.setMode=o,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=M}function tb(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,d,h){switch(i.calls++,d){case s.TRIANGLES:i.triangles+=h*(c/3);break;case s.LINES:i.lines+=h*(c/2);break;case s.LINE_STRIP:i.lines+=h*(c-1);break;case s.LINE_LOOP:i.lines+=h*c;break;case s.POINTS:i.points+=h*c;break;default:Rt("WebGLInfo: Unknown draw mode:",d);break}}function o(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:o,update:r}}function nb(s,t,i){const r=new WeakMap,o=new pn;function c(d,h,p){const m=d.morphTargetInfluences,M=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=M!==void 0?M.length:0;let v=r.get(h);if(v===void 0||v.count!==x){let B=function(){j.dispose(),r.delete(h),h.removeEventListener("dispose",B)};v!==void 0&&v.texture.dispose();const b=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,w=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],_=h.morphAttributes.normal||[],D=h.morphAttributes.color||[];let L=0;b===!0&&(L=1),T===!0&&(L=2),w===!0&&(L=3);let O=h.attributes.position.count*L,X=1;O>t.maxTextureSize&&(X=Math.ceil(O/t.maxTextureSize),O=t.maxTextureSize);const P=new Float32Array(O*X*4*x),j=new lv(P,O,X,x);j.type=Oi,j.needsUpdate=!0;const R=L*4;for(let Y=0;Y<x;Y++){const z=S[Y],K=_[Y],oe=D[Y],le=O*X*4*Y;for(let H=0;H<z.count;H++){const U=H*R;b===!0&&(o.fromBufferAttribute(z,H),P[le+U+0]=o.x,P[le+U+1]=o.y,P[le+U+2]=o.z,P[le+U+3]=0),T===!0&&(o.fromBufferAttribute(K,H),P[le+U+4]=o.x,P[le+U+5]=o.y,P[le+U+6]=o.z,P[le+U+7]=0),w===!0&&(o.fromBufferAttribute(oe,H),P[le+U+8]=o.x,P[le+U+9]=o.y,P[le+U+10]=o.z,P[le+U+11]=oe.itemSize===4?o.w:1)}}v={count:x,texture:j,size:new pt(O,X)},r.set(h,v),h.addEventListener("dispose",B)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",d.morphTexture,i);else{let b=0;for(let w=0;w<m.length;w++)b+=m[w];const T=h.morphTargetsRelative?1:1-b;p.getUniforms().setValue(s,"morphTargetBaseInfluence",T),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",v.texture,i),p.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:c}}function ib(s,t,i,r,o){let c=new WeakMap;function d(m){const M=o.render.frame,x=m.geometry,v=t.get(m,x);if(c.get(v)!==M&&(t.update(v),c.set(v,M)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),c.get(m)!==M&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),c.set(m,M))),m.isSkinnedMesh){const b=m.skeleton;c.get(b)!==M&&(b.update(),c.set(b,M))}return v}function h(){c=new WeakMap}function p(m){const M=m.target;M.removeEventListener("dispose",p),r.releaseStatesOfObject(M),i.remove(M.instanceMatrix),M.instanceColor!==null&&i.remove(M.instanceColor)}return{update:d,dispose:h}}const ab={[X1]:"LINEAR_TONE_MAPPING",[W1]:"REINHARD_TONE_MAPPING",[q1]:"CINEON_TONE_MAPPING",[Y1]:"ACES_FILMIC_TONE_MAPPING",[K1]:"AGX_TONE_MAPPING",[Q1]:"NEUTRAL_TONE_MAPPING",[Z1]:"CUSTOM_TONE_MAPPING"};function sb(s,t,i,r,o){const c=new jn(t,i,{type:s,depthBuffer:r,stencilBuffer:o,depthTexture:r?new Vs(t,i):void 0}),d=new jn(t,i,{type:Ea,depthBuffer:!1,stencilBuffer:!1}),h=new Ki;h.setAttribute("position",new ba([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ba([0,2,0,0,2,0],2));const p=new J2({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),m=new Fi(h,p),M=new Qc(-1,1,1,-1,0,1);let x=null,v=null,b=!1,T,w=null,S=[],_=!1;this.setSize=function(D,L){c.setSize(D,L),d.setSize(D,L);for(let O=0;O<S.length;O++){const X=S[O];X.setSize&&X.setSize(D,L)}},this.setEffects=function(D){S=D,_=S.length>0&&S[0].isRenderPass===!0;const L=c.width,O=c.height;for(let X=0;X<S.length;X++){const P=S[X];P.setSize&&P.setSize(L,O)}},this.begin=function(D,L){if(b||D.toneMapping===Yi&&S.length===0)return!1;if(w=L,L!==null){const O=L.width,X=L.height;(c.width!==O||c.height!==X)&&this.setSize(O,X)}return _===!1&&D.setRenderTarget(c),T=D.toneMapping,D.toneMapping=Yi,!0},this.hasRenderPass=function(){return _},this.end=function(D,L){D.toneMapping=T,b=!0;let O=c,X=d;for(let P=0;P<S.length;P++){const j=S[P];if(j.enabled!==!1&&(j.render(D,X,O,L),j.needsSwap!==!1)){const R=O;O=X,X=R}}if(x!==D.outputColorSpace||v!==D.toneMapping){x=D.outputColorSpace,v=D.toneMapping,p.defines={},Et.getTransfer(x)===Vt&&(p.defines.SRGB_TRANSFER="");const P=ab[v];P&&(p.defines[P]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=O.texture,D.setRenderTarget(w),D.render(m,M),w=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),d.dispose(),h.dispose(),p.dispose()}}const Mv=new Dn,Ph=new Vs(1,1),bv=new lv,yv=new w2,Ev=new pv,v1=[],_1=[],x1=new Float32Array(16),S1=new Float32Array(9),M1=new Float32Array(4);function Xr(s,t,i){const r=s[0];if(r<=0||r>0)return s;const o=t*i;let c=v1[o];if(c===void 0&&(c=new Float32Array(o),v1[o]=c),t!==0){r.toArray(c,0);for(let d=1,h=0;d!==t;++d)h+=i,s[d].toArray(c,h)}return c}function En(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function Tn(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function $c(s,t){let i=_1[t];i===void 0&&(i=new Int32Array(t),_1[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function rb(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function lb(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(En(i,t))return;s.uniform2fv(this.addr,t),Tn(i,t)}}function ob(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(En(i,t))return;s.uniform3fv(this.addr,t),Tn(i,t)}}function cb(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(En(i,t))return;s.uniform4fv(this.addr,t),Tn(i,t)}}function ub(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(En(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),Tn(i,t)}else{if(En(i,r))return;M1.set(r),s.uniformMatrix2fv(this.addr,!1,M1),Tn(i,r)}}function fb(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(En(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),Tn(i,t)}else{if(En(i,r))return;S1.set(r),s.uniformMatrix3fv(this.addr,!1,S1),Tn(i,r)}}function db(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(En(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),Tn(i,t)}else{if(En(i,r))return;x1.set(r),s.uniformMatrix4fv(this.addr,!1,x1),Tn(i,r)}}function hb(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function pb(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(En(i,t))return;s.uniform2iv(this.addr,t),Tn(i,t)}}function mb(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(En(i,t))return;s.uniform3iv(this.addr,t),Tn(i,t)}}function gb(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(En(i,t))return;s.uniform4iv(this.addr,t),Tn(i,t)}}function vb(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function _b(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(En(i,t))return;s.uniform2uiv(this.addr,t),Tn(i,t)}}function xb(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(En(i,t))return;s.uniform3uiv(this.addr,t),Tn(i,t)}}function Sb(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(En(i,t))return;s.uniform4uiv(this.addr,t),Tn(i,t)}}function Mb(s,t,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let c;this.type===s.SAMPLER_2D_SHADOW?(Ph.compareFunction=i.isReversedDepthBuffer()?Xh:jh,c=Ph):c=Mv,i.setTexture2D(t||c,o)}function bb(s,t,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),i.setTexture3D(t||yv,o)}function yb(s,t,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),i.setTextureCube(t||Ev,o)}function Eb(s,t,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),i.setTexture2DArray(t||bv,o)}function Tb(s){switch(s){case 5126:return rb;case 35664:return lb;case 35665:return ob;case 35666:return cb;case 35674:return ub;case 35675:return fb;case 35676:return db;case 5124:case 35670:return hb;case 35667:case 35671:return pb;case 35668:case 35672:return mb;case 35669:case 35673:return gb;case 5125:return vb;case 36294:return _b;case 36295:return xb;case 36296:return Sb;case 35678:case 36198:case 36298:case 36306:case 35682:return Mb;case 35679:case 36299:case 36307:return bb;case 35680:case 36300:case 36308:case 36293:return yb;case 36289:case 36303:case 36311:case 36292:return Eb}}function Ab(s,t){s.uniform1fv(this.addr,t)}function Rb(s,t){const i=Xr(t,this.size,2);s.uniform2fv(this.addr,i)}function Cb(s,t){const i=Xr(t,this.size,3);s.uniform3fv(this.addr,i)}function wb(s,t){const i=Xr(t,this.size,4);s.uniform4fv(this.addr,i)}function Db(s,t){const i=Xr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function Nb(s,t){const i=Xr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function Ub(s,t){const i=Xr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function Lb(s,t){s.uniform1iv(this.addr,t)}function Ob(s,t){s.uniform2iv(this.addr,t)}function Pb(s,t){s.uniform3iv(this.addr,t)}function Bb(s,t){s.uniform4iv(this.addr,t)}function Fb(s,t){s.uniform1uiv(this.addr,t)}function Ib(s,t){s.uniform2uiv(this.addr,t)}function zb(s,t){s.uniform3uiv(this.addr,t)}function Hb(s,t){s.uniform4uiv(this.addr,t)}function Gb(s,t,i){const r=this.cache,o=t.length,c=$c(i,o);En(r,c)||(s.uniform1iv(this.addr,c),Tn(r,c));let d;this.type===s.SAMPLER_2D_SHADOW?d=Ph:d=Mv;for(let h=0;h!==o;++h)i.setTexture2D(t[h]||d,c[h])}function Vb(s,t,i){const r=this.cache,o=t.length,c=$c(i,o);En(r,c)||(s.uniform1iv(this.addr,c),Tn(r,c));for(let d=0;d!==o;++d)i.setTexture3D(t[d]||yv,c[d])}function kb(s,t,i){const r=this.cache,o=t.length,c=$c(i,o);En(r,c)||(s.uniform1iv(this.addr,c),Tn(r,c));for(let d=0;d!==o;++d)i.setTextureCube(t[d]||Ev,c[d])}function jb(s,t,i){const r=this.cache,o=t.length,c=$c(i,o);En(r,c)||(s.uniform1iv(this.addr,c),Tn(r,c));for(let d=0;d!==o;++d)i.setTexture2DArray(t[d]||bv,c[d])}function Xb(s){switch(s){case 5126:return Ab;case 35664:return Rb;case 35665:return Cb;case 35666:return wb;case 35674:return Db;case 35675:return Nb;case 35676:return Ub;case 5124:case 35670:return Lb;case 35667:case 35671:return Ob;case 35668:case 35672:return Pb;case 35669:case 35673:return Bb;case 5125:return Fb;case 36294:return Ib;case 36295:return zb;case 36296:return Hb;case 35678:case 36198:case 36298:case 36306:case 35682:return Gb;case 35679:case 36299:case 36307:return Vb;case 35680:case 36300:case 36308:case 36293:return kb;case 36289:case 36303:case 36311:case 36292:return jb}}class Wb{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=Tb(i.type)}}class qb{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Xb(i.type)}}class Yb{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const o=this.seq;for(let c=0,d=o.length;c!==d;++c){const h=o[c];h.setValue(t,i[h.id],r)}}}const zd=/(\w+)(\])?(\[|\.)?/g;function b1(s,t){s.seq.push(t),s.map[t.id]=t}function Zb(s,t,i){const r=s.name,o=r.length;for(zd.lastIndex=0;;){const c=zd.exec(r),d=zd.lastIndex;let h=c[1];const p=c[2]==="]",m=c[3];if(p&&(h=h|0),m===void 0||m==="["&&d+2===o){b1(i,m===void 0?new Wb(h,s,t):new qb(h,s,t));break}else{let x=i.map[h];x===void 0&&(x=new Yb(h),b1(i,x)),i=x}}}class Gc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let d=0;d<r;++d){const h=t.getActiveUniform(i,d),p=t.getUniformLocation(i,h.name);Zb(h,p,this)}const o=[],c=[];for(const d of this.seq)d.type===t.SAMPLER_2D_SHADOW||d.type===t.SAMPLER_CUBE_SHADOW||d.type===t.SAMPLER_2D_ARRAY_SHADOW?o.push(d):c.push(d);o.length>0&&(this.seq=o.concat(c))}setValue(t,i,r,o){const c=this.map[i];c!==void 0&&c.setValue(t,r,o)}setOptional(t,i,r){const o=i[r];o!==void 0&&this.setValue(t,r,o)}static upload(t,i,r,o){for(let c=0,d=i.length;c!==d;++c){const h=i[c],p=r[h.id];p.needsUpdate!==!1&&h.setValue(t,p.value,o)}}static seqWithValue(t,i){const r=[];for(let o=0,c=t.length;o!==c;++o){const d=t[o];d.id in i&&r.push(d)}return r}}function y1(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const Kb=37297;let Qb=0;function Jb(s,t){const i=s.split(`
`),r=[],o=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let d=o;d<c;d++){const h=d+1;r.push(`${h===t?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const E1=new st;function $b(s){Et._getMatrix(E1,Et.workingColorSpace,s);const t=`mat3( ${E1.elements.map(i=>i.toFixed(4))} )`;switch(Et.getTransfer(s)){case Xc:return[t,"LinearTransferOETF"];case Vt:return[t,"sRGBTransferOETF"];default:return nt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function T1(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),c=(s.getShaderInfoLog(t)||"").trim();if(r&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+Jb(s.getShaderSource(t),h)}else return c}function ey(s,t){const i=$b(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const ty={[X1]:"Linear",[W1]:"Reinhard",[q1]:"Cineon",[Y1]:"ACESFilmic",[K1]:"AgX",[Q1]:"Neutral",[Z1]:"Custom"};function ny(s,t){const i=ty[t];return i===void 0?(nt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Pc=new ae;function iy(){Et.getLuminanceCoefficients(Pc);const s=Pc.x.toFixed(4),t=Pc.y.toFixed(4),i=Pc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ay(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zl).join(`
`)}function sy(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function ry(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=s.getActiveAttrib(t,o),d=c.name;let h=1;c.type===s.FLOAT_MAT2&&(h=2),c.type===s.FLOAT_MAT3&&(h=3),c.type===s.FLOAT_MAT4&&(h=4),i[d]={type:c.type,location:s.getAttribLocation(t,d),locationSize:h}}return i}function Zl(s){return s!==""}function A1(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function R1(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ly=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bh(s){return s.replace(ly,cy)}const oy=new Map;function cy(s,t){let i=dt[t];if(i===void 0){const r=oy.get(t);if(r!==void 0)i=dt[r],nt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Bh(i)}const uy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function C1(s){return s.replace(uy,fy)}function fy(s,t,i,r){let o="";for(let c=parseInt(t);c<parseInt(i);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function w1(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const dy={[Bc]:"SHADOWMAP_TYPE_PCF",[Yl]:"SHADOWMAP_TYPE_VSM"};function hy(s){return dy[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const py={[zs]:"ENVMAP_TYPE_CUBE",[zr]:"ENVMAP_TYPE_CUBE",[Kc]:"ENVMAP_TYPE_CUBE_UV"};function my(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":py[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const gy={[zr]:"ENVMAP_MODE_REFRACTION"};function vy(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":gy[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const _y={[j1]:"ENVMAP_BLENDING_MULTIPLY",[c2]:"ENVMAP_BLENDING_MIX",[u2]:"ENVMAP_BLENDING_ADD"};function xy(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":_y[s.combine]||"ENVMAP_BLENDING_NONE"}function Sy(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function My(s,t,i,r){const o=s.getContext(),c=i.defines;let d=i.vertexShader,h=i.fragmentShader;const p=hy(i),m=my(i),M=vy(i),x=xy(i),v=Sy(i),b=ay(i),T=sy(c),w=o.createProgram();let S,_,D=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Zl).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Zl).join(`
`),_.length>0&&(_+=`
`)):(S=[w1(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+M:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zl).join(`
`),_=[w1(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+M:"",i.envMap?"#define "+x:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Yi?"#define TONE_MAPPING":"",i.toneMapping!==Yi?dt.tonemapping_pars_fragment:"",i.toneMapping!==Yi?ny("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,ey("linearToOutputTexel",i.outputColorSpace),iy(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Zl).join(`
`)),d=Bh(d),d=A1(d,i),d=R1(d,i),h=Bh(h),h=A1(h,i),h=R1(h,i),d=C1(d),h=C1(h),i.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,S=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",i.glslVersion===Nh?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Nh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const L=D+S+d,O=D+_+h,X=y1(o,o.VERTEX_SHADER,L),P=y1(o,o.FRAGMENT_SHADER,O);o.attachShader(w,X),o.attachShader(w,P),i.index0AttributeName!==void 0?o.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&o.bindAttribLocation(w,0,"position"),o.linkProgram(w);function j(z){if(s.debug.checkShaderErrors){const K=o.getProgramInfoLog(w)||"",oe=o.getShaderInfoLog(X)||"",le=o.getShaderInfoLog(P)||"",H=K.trim(),U=oe.trim(),I=le.trim();let ie=!0,de=!0;if(o.getProgramParameter(w,o.LINK_STATUS)===!1)if(ie=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,w,X,P);else{const _e=T1(o,X,"vertex"),Ue=T1(o,P,"fragment");Rt("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(w,o.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+H+`
`+_e+`
`+Ue)}else H!==""?nt("WebGLProgram: Program Info Log:",H):(U===""||I==="")&&(de=!1);de&&(z.diagnostics={runnable:ie,programLog:H,vertexShader:{log:U,prefix:S},fragmentShader:{log:I,prefix:_}})}o.deleteShader(X),o.deleteShader(P),R=new Gc(o,w),B=ry(o,w)}let R;this.getUniforms=function(){return R===void 0&&j(this),R};let B;this.getAttributes=function(){return B===void 0&&j(this),B};let Y=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Y===!1&&(Y=o.getProgramParameter(w,Kb)),Y},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Qb++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=X,this.fragmentShader=P,this}let by=0;class yy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,o=this._getShaderStage(i),c=this._getShaderStage(r),d=this._getShaderCacheForMaterial(t);return d.has(o)===!1&&(d.add(o),o.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new Ey(t),i.set(t,r)),r}}class Ey{constructor(t){this.id=by++,this.code=t,this.usedTimes=0}}function Ty(s){return s===Hs||s===kc||s===jc}function Ay(s,t,i,r,o,c){const d=new ov,h=new yy,p=new Set,m=[],M=new Map,x=r.logarithmicDepthBuffer;let v=r.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(R){return p.add(R),R===0?"uv":`uv${R}`}function w(R,B,Y,z,K,oe){const le=z.fog,H=K.geometry,U=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?z.environment:null,I=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap,ie=t.get(R.envMap||U,I),de=ie&&ie.mapping===Kc?ie.image.height:null,_e=b[R.type];R.precision!==null&&(v=r.getMaxPrecision(R.precision),v!==R.precision&&nt("WebGLProgram.getParameters:",R.precision,"not supported, using",v,"instead."));const Ue=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Re=Ue!==void 0?Ue.length:0;let He=0;H.morphAttributes.position!==void 0&&(He=1),H.morphAttributes.normal!==void 0&&(He=2),H.morphAttributes.color!==void 0&&(He=3);let et,Ze,he,De;if(_e){const tt=Xi[_e];et=tt.vertexShader,Ze=tt.fragmentShader}else et=R.vertexShader,Ze=R.fragmentShader,h.update(R),he=h.getVertexShaderID(R),De=h.getFragmentShaderID(R);const ve=s.getRenderTarget(),Ve=s.state.buffers.depth.getReversed(),Je=K.isInstancedMesh===!0,Ye=K.isBatchedMesh===!0,Bt=!!R.map,ct=!!R.matcap,ut=!!ie,At=!!R.aoMap,Ie=!!R.lightMap,rt=!!R.bumpMap,xt=!!R.normalMap,kt=!!R.displacementMap,k=!!R.emissiveMap,Qt=!!R.metalnessMap,ht=!!R.roughnessMap,jt=R.anisotropy>0,be=R.clearcoat>0,en=R.dispersion>0,N=R.iridescence>0,E=R.sheen>0,Z=R.transmission>0,me=jt&&!!R.anisotropyMap,Se=be&&!!R.clearcoatMap,ye=be&&!!R.clearcoatNormalMap,Ce=be&&!!R.clearcoatRoughnessMap,re=N&&!!R.iridescenceMap,ce=N&&!!R.iridescenceThicknessMap,we=E&&!!R.sheenColorMap,Ne=E&&!!R.sheenRoughnessMap,Te=!!R.specularMap,Ee=!!R.specularColorMap,it=!!R.specularIntensityMap,at=Z&&!!R.transmissionMap,mt=Z&&!!R.thicknessMap,G=!!R.gradientMap,Me=!!R.alphaMap,fe=R.alphaTest>0,Pe=!!R.alphaHash,Ae=!!R.extensions;let xe=Yi;R.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(xe=s.toneMapping);const Xe={shaderID:_e,shaderType:R.type,shaderName:R.name,vertexShader:et,fragmentShader:Ze,defines:R.defines,customVertexShaderID:he,customFragmentShaderID:De,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:v,batching:Ye,batchingColor:Ye&&K._colorsTexture!==null,instancing:Je,instancingColor:Je&&K.instanceColor!==null,instancingMorph:Je&&K.morphTexture!==null,outputColorSpace:ve===null?s.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Et.workingColorSpace,alphaToCoverage:!!R.alphaToCoverage,map:Bt,matcap:ct,envMap:ut,envMapMode:ut&&ie.mapping,envMapCubeUVHeight:de,aoMap:At,lightMap:Ie,bumpMap:rt,normalMap:xt,displacementMap:kt,emissiveMap:k,normalMapObjectSpace:xt&&R.normalMapType===d2,normalMapTangentSpace:xt&&R.normalMapType===Gg,packedNormalMap:xt&&R.normalMapType===Gg&&Ty(R.normalMap.format),metalnessMap:Qt,roughnessMap:ht,anisotropy:jt,anisotropyMap:me,clearcoat:be,clearcoatMap:Se,clearcoatNormalMap:ye,clearcoatRoughnessMap:Ce,dispersion:en,iridescence:N,iridescenceMap:re,iridescenceThicknessMap:ce,sheen:E,sheenColorMap:we,sheenRoughnessMap:Ne,specularMap:Te,specularColorMap:Ee,specularIntensityMap:it,transmission:Z,transmissionMap:at,thicknessMap:mt,gradientMap:G,opaque:R.transparent===!1&&R.blending===Br&&R.alphaToCoverage===!1,alphaMap:Me,alphaTest:fe,alphaHash:Pe,combine:R.combine,mapUv:Bt&&T(R.map.channel),aoMapUv:At&&T(R.aoMap.channel),lightMapUv:Ie&&T(R.lightMap.channel),bumpMapUv:rt&&T(R.bumpMap.channel),normalMapUv:xt&&T(R.normalMap.channel),displacementMapUv:kt&&T(R.displacementMap.channel),emissiveMapUv:k&&T(R.emissiveMap.channel),metalnessMapUv:Qt&&T(R.metalnessMap.channel),roughnessMapUv:ht&&T(R.roughnessMap.channel),anisotropyMapUv:me&&T(R.anisotropyMap.channel),clearcoatMapUv:Se&&T(R.clearcoatMap.channel),clearcoatNormalMapUv:ye&&T(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&T(R.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&T(R.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&T(R.iridescenceThicknessMap.channel),sheenColorMapUv:we&&T(R.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&T(R.sheenRoughnessMap.channel),specularMapUv:Te&&T(R.specularMap.channel),specularColorMapUv:Ee&&T(R.specularColorMap.channel),specularIntensityMapUv:it&&T(R.specularIntensityMap.channel),transmissionMapUv:at&&T(R.transmissionMap.channel),thicknessMapUv:mt&&T(R.thicknessMap.channel),alphaMapUv:Me&&T(R.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(xt||jt),vertexNormals:!!H.attributes.normal,vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!H.attributes.uv&&(Bt||Me),fog:!!le,useFog:R.fog===!0,fogExp2:!!le&&le.isFogExp2,flatShading:R.wireframe===!1&&(R.flatShading===!0||H.attributes.normal===void 0&&xt===!1&&(R.isMeshLambertMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isMeshPhysicalMaterial)),sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Ve,skinning:K.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:He,numDirLights:B.directional.length,numPointLights:B.point.length,numSpotLights:B.spot.length,numSpotLightMaps:B.spotLightMap.length,numRectAreaLights:B.rectArea.length,numHemiLights:B.hemi.length,numDirLightShadows:B.directionalShadowMap.length,numPointLightShadows:B.pointShadowMap.length,numSpotLightShadows:B.spotShadowMap.length,numSpotLightShadowsWithMaps:B.numSpotLightShadowsWithMaps,numLightProbes:B.numLightProbes,numLightProbeGrids:oe.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:R.dithering,shadowMapEnabled:s.shadowMap.enabled&&Y.length>0,shadowMapType:s.shadowMap.type,toneMapping:xe,decodeVideoTexture:Bt&&R.map.isVideoTexture===!0&&Et.getTransfer(R.map.colorSpace)===Vt,decodeVideoTextureEmissive:k&&R.emissiveMap.isVideoTexture===!0&&Et.getTransfer(R.emissiveMap.colorSpace)===Vt,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===fi,flipSided:R.side===wn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:Ae&&R.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ae&&R.extensions.multiDraw===!0||Ye)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return Xe.vertexUv1s=p.has(1),Xe.vertexUv2s=p.has(2),Xe.vertexUv3s=p.has(3),p.clear(),Xe}function S(R){const B=[];if(R.shaderID?B.push(R.shaderID):(B.push(R.customVertexShaderID),B.push(R.customFragmentShaderID)),R.defines!==void 0)for(const Y in R.defines)B.push(Y),B.push(R.defines[Y]);return R.isRawShaderMaterial===!1&&(_(B,R),D(B,R),B.push(s.outputColorSpace)),B.push(R.customProgramCacheKey),B.join()}function _(R,B){R.push(B.precision),R.push(B.outputColorSpace),R.push(B.envMapMode),R.push(B.envMapCubeUVHeight),R.push(B.mapUv),R.push(B.alphaMapUv),R.push(B.lightMapUv),R.push(B.aoMapUv),R.push(B.bumpMapUv),R.push(B.normalMapUv),R.push(B.displacementMapUv),R.push(B.emissiveMapUv),R.push(B.metalnessMapUv),R.push(B.roughnessMapUv),R.push(B.anisotropyMapUv),R.push(B.clearcoatMapUv),R.push(B.clearcoatNormalMapUv),R.push(B.clearcoatRoughnessMapUv),R.push(B.iridescenceMapUv),R.push(B.iridescenceThicknessMapUv),R.push(B.sheenColorMapUv),R.push(B.sheenRoughnessMapUv),R.push(B.specularMapUv),R.push(B.specularColorMapUv),R.push(B.specularIntensityMapUv),R.push(B.transmissionMapUv),R.push(B.thicknessMapUv),R.push(B.combine),R.push(B.fogExp2),R.push(B.sizeAttenuation),R.push(B.morphTargetsCount),R.push(B.morphAttributeCount),R.push(B.numDirLights),R.push(B.numPointLights),R.push(B.numSpotLights),R.push(B.numSpotLightMaps),R.push(B.numHemiLights),R.push(B.numRectAreaLights),R.push(B.numDirLightShadows),R.push(B.numPointLightShadows),R.push(B.numSpotLightShadows),R.push(B.numSpotLightShadowsWithMaps),R.push(B.numLightProbes),R.push(B.shadowMapType),R.push(B.toneMapping),R.push(B.numClippingPlanes),R.push(B.numClipIntersection),R.push(B.depthPacking)}function D(R,B){d.disableAll(),B.instancing&&d.enable(0),B.instancingColor&&d.enable(1),B.instancingMorph&&d.enable(2),B.matcap&&d.enable(3),B.envMap&&d.enable(4),B.normalMapObjectSpace&&d.enable(5),B.normalMapTangentSpace&&d.enable(6),B.clearcoat&&d.enable(7),B.iridescence&&d.enable(8),B.alphaTest&&d.enable(9),B.vertexColors&&d.enable(10),B.vertexAlphas&&d.enable(11),B.vertexUv1s&&d.enable(12),B.vertexUv2s&&d.enable(13),B.vertexUv3s&&d.enable(14),B.vertexTangents&&d.enable(15),B.anisotropy&&d.enable(16),B.alphaHash&&d.enable(17),B.batching&&d.enable(18),B.dispersion&&d.enable(19),B.batchingColor&&d.enable(20),B.gradientMap&&d.enable(21),B.packedNormalMap&&d.enable(22),B.vertexNormals&&d.enable(23),R.push(d.mask),d.disableAll(),B.fog&&d.enable(0),B.useFog&&d.enable(1),B.flatShading&&d.enable(2),B.logarithmicDepthBuffer&&d.enable(3),B.reversedDepthBuffer&&d.enable(4),B.skinning&&d.enable(5),B.morphTargets&&d.enable(6),B.morphNormals&&d.enable(7),B.morphColors&&d.enable(8),B.premultipliedAlpha&&d.enable(9),B.shadowMapEnabled&&d.enable(10),B.doubleSided&&d.enable(11),B.flipSided&&d.enable(12),B.useDepthPacking&&d.enable(13),B.dithering&&d.enable(14),B.transmission&&d.enable(15),B.sheen&&d.enable(16),B.opaque&&d.enable(17),B.pointsUvs&&d.enable(18),B.decodeVideoTexture&&d.enable(19),B.decodeVideoTextureEmissive&&d.enable(20),B.alphaToCoverage&&d.enable(21),B.numLightProbeGrids>0&&d.enable(22),R.push(d.mask)}function L(R){const B=b[R.type];let Y;if(B){const z=Xi[B];Y=Z2.clone(z.uniforms)}else Y=R.uniforms;return Y}function O(R,B){let Y=M.get(B);return Y!==void 0?++Y.usedTimes:(Y=new My(s,B,R,o),m.push(Y),M.set(B,Y)),Y}function X(R){if(--R.usedTimes===0){const B=m.indexOf(R);m[B]=m[m.length-1],m.pop(),M.delete(R.cacheKey),R.destroy()}}function P(R){h.remove(R)}function j(){h.dispose()}return{getParameters:w,getProgramCacheKey:S,getUniforms:L,acquireProgram:O,releaseProgram:X,releaseShaderCache:P,programs:m,dispose:j}}function Ry(){let s=new WeakMap;function t(d){return s.has(d)}function i(d){let h=s.get(d);return h===void 0&&(h={},s.set(d,h)),h}function r(d){s.delete(d)}function o(d,h,p){s.get(d)[h]=p}function c(){s=new WeakMap}return{has:t,get:i,remove:r,update:o,dispose:c}}function Cy(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function D1(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function N1(){const s=[];let t=0;const i=[],r=[],o=[];function c(){t=0,i.length=0,r.length=0,o.length=0}function d(v){let b=0;return v.isInstancedMesh&&(b+=2),v.isSkinnedMesh&&(b+=1),b}function h(v,b,T,w,S,_){let D=s[t];return D===void 0?(D={id:v.id,object:v,geometry:b,material:T,materialVariant:d(v),groupOrder:w,renderOrder:v.renderOrder,z:S,group:_},s[t]=D):(D.id=v.id,D.object=v,D.geometry=b,D.material=T,D.materialVariant=d(v),D.groupOrder=w,D.renderOrder=v.renderOrder,D.z=S,D.group=_),t++,D}function p(v,b,T,w,S,_){const D=h(v,b,T,w,S,_);T.transmission>0?r.push(D):T.transparent===!0?o.push(D):i.push(D)}function m(v,b,T,w,S,_){const D=h(v,b,T,w,S,_);T.transmission>0?r.unshift(D):T.transparent===!0?o.unshift(D):i.unshift(D)}function M(v,b){i.length>1&&i.sort(v||Cy),r.length>1&&r.sort(b||D1),o.length>1&&o.sort(b||D1)}function x(){for(let v=t,b=s.length;v<b;v++){const T=s[v];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:i,transmissive:r,transparent:o,init:c,push:p,unshift:m,finish:x,sort:M}}function wy(){let s=new WeakMap;function t(r,o){const c=s.get(r);let d;return c===void 0?(d=new N1,s.set(r,[d])):o>=c.length?(d=new N1,c.push(d)):d=c[o],d}function i(){s=new WeakMap}return{get:t,dispose:i}}function Dy(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new ae,color:new Pt};break;case"SpotLight":i={position:new ae,direction:new ae,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ae,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ae,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":i={color:new Pt,position:new ae,halfWidth:new ae,halfHeight:new ae};break}return s[t.id]=i,i}}}function Ny(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let Uy=0;function Ly(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Oy(s){const t=new Dy,i=Ny(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new ae);const o=new ae,c=new yn,d=new yn;function h(m){let M=0,x=0,v=0;for(let B=0;B<9;B++)r.probe[B].set(0,0,0);let b=0,T=0,w=0,S=0,_=0,D=0,L=0,O=0,X=0,P=0,j=0;m.sort(Ly);for(let B=0,Y=m.length;B<Y;B++){const z=m[B],K=z.color,oe=z.intensity,le=z.distance;let H=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===Hs?H=z.shadow.map.texture:H=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)M+=K.r*oe,x+=K.g*oe,v+=K.b*oe;else if(z.isLightProbe){for(let U=0;U<9;U++)r.probe[U].addScaledVector(z.sh.coefficients[U],oe);j++}else if(z.isDirectionalLight){const U=t.get(z);if(U.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const I=z.shadow,ie=i.get(z);ie.shadowIntensity=I.intensity,ie.shadowBias=I.bias,ie.shadowNormalBias=I.normalBias,ie.shadowRadius=I.radius,ie.shadowMapSize=I.mapSize,r.directionalShadow[b]=ie,r.directionalShadowMap[b]=H,r.directionalShadowMatrix[b]=z.shadow.matrix,D++}r.directional[b]=U,b++}else if(z.isSpotLight){const U=t.get(z);U.position.setFromMatrixPosition(z.matrixWorld),U.color.copy(K).multiplyScalar(oe),U.distance=le,U.coneCos=Math.cos(z.angle),U.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),U.decay=z.decay,r.spot[w]=U;const I=z.shadow;if(z.map&&(r.spotLightMap[X]=z.map,X++,I.updateMatrices(z),z.castShadow&&P++),r.spotLightMatrix[w]=I.matrix,z.castShadow){const ie=i.get(z);ie.shadowIntensity=I.intensity,ie.shadowBias=I.bias,ie.shadowNormalBias=I.normalBias,ie.shadowRadius=I.radius,ie.shadowMapSize=I.mapSize,r.spotShadow[w]=ie,r.spotShadowMap[w]=H,O++}w++}else if(z.isRectAreaLight){const U=t.get(z);U.color.copy(K).multiplyScalar(oe),U.halfWidth.set(z.width*.5,0,0),U.halfHeight.set(0,z.height*.5,0),r.rectArea[S]=U,S++}else if(z.isPointLight){const U=t.get(z);if(U.color.copy(z.color).multiplyScalar(z.intensity),U.distance=z.distance,U.decay=z.decay,z.castShadow){const I=z.shadow,ie=i.get(z);ie.shadowIntensity=I.intensity,ie.shadowBias=I.bias,ie.shadowNormalBias=I.normalBias,ie.shadowRadius=I.radius,ie.shadowMapSize=I.mapSize,ie.shadowCameraNear=I.camera.near,ie.shadowCameraFar=I.camera.far,r.pointShadow[T]=ie,r.pointShadowMap[T]=H,r.pointShadowMatrix[T]=z.shadow.matrix,L++}r.point[T]=U,T++}else if(z.isHemisphereLight){const U=t.get(z);U.skyColor.copy(z.color).multiplyScalar(oe),U.groundColor.copy(z.groundColor).multiplyScalar(oe),r.hemi[_]=U,_++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Be.LTC_FLOAT_1,r.rectAreaLTC2=Be.LTC_FLOAT_2):(r.rectAreaLTC1=Be.LTC_HALF_1,r.rectAreaLTC2=Be.LTC_HALF_2)),r.ambient[0]=M,r.ambient[1]=x,r.ambient[2]=v;const R=r.hash;(R.directionalLength!==b||R.pointLength!==T||R.spotLength!==w||R.rectAreaLength!==S||R.hemiLength!==_||R.numDirectionalShadows!==D||R.numPointShadows!==L||R.numSpotShadows!==O||R.numSpotMaps!==X||R.numLightProbes!==j)&&(r.directional.length=b,r.spot.length=w,r.rectArea.length=S,r.point.length=T,r.hemi.length=_,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=O,r.spotShadowMap.length=O,r.directionalShadowMatrix.length=D,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=O+X-P,r.spotLightMap.length=X,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=j,R.directionalLength=b,R.pointLength=T,R.spotLength=w,R.rectAreaLength=S,R.hemiLength=_,R.numDirectionalShadows=D,R.numPointShadows=L,R.numSpotShadows=O,R.numSpotMaps=X,R.numLightProbes=j,r.version=Uy++)}function p(m,M){let x=0,v=0,b=0,T=0,w=0;const S=M.matrixWorldInverse;for(let _=0,D=m.length;_<D;_++){const L=m[_];if(L.isDirectionalLight){const O=r.directional[x];O.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),O.direction.sub(o),O.direction.transformDirection(S),x++}else if(L.isSpotLight){const O=r.spot[b];O.position.setFromMatrixPosition(L.matrixWorld),O.position.applyMatrix4(S),O.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),O.direction.sub(o),O.direction.transformDirection(S),b++}else if(L.isRectAreaLight){const O=r.rectArea[T];O.position.setFromMatrixPosition(L.matrixWorld),O.position.applyMatrix4(S),d.identity(),c.copy(L.matrixWorld),c.premultiply(S),d.extractRotation(c),O.halfWidth.set(L.width*.5,0,0),O.halfHeight.set(0,L.height*.5,0),O.halfWidth.applyMatrix4(d),O.halfHeight.applyMatrix4(d),T++}else if(L.isPointLight){const O=r.point[v];O.position.setFromMatrixPosition(L.matrixWorld),O.position.applyMatrix4(S),v++}else if(L.isHemisphereLight){const O=r.hemi[w];O.direction.setFromMatrixPosition(L.matrixWorld),O.direction.transformDirection(S),w++}}}return{setup:h,setupView:p,state:r}}function U1(s){const t=new Oy(s),i=[],r=[],o=[];function c(v){x.camera=v,i.length=0,r.length=0,o.length=0}function d(v){i.push(v)}function h(v){r.push(v)}function p(v){o.push(v)}function m(){t.setup(i)}function M(v){t.setupView(i,v)}const x={lightsArray:i,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:x,setupLights:m,setupLightsView:M,pushLight:d,pushShadow:h,pushLightProbeGrid:p}}function Py(s){let t=new WeakMap;function i(o,c=0){const d=t.get(o);let h;return d===void 0?(h=new U1(s),t.set(o,[h])):c>=d.length?(h=new U1(s),d.push(h)):h=d[c],h}function r(){t=new WeakMap}return{get:i,dispose:r}}const By=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Iy=[new ae(1,0,0),new ae(-1,0,0),new ae(0,1,0),new ae(0,-1,0),new ae(0,0,1),new ae(0,0,-1)],zy=[new ae(0,-1,0),new ae(0,-1,0),new ae(0,0,1),new ae(0,0,-1),new ae(0,-1,0),new ae(0,-1,0)],L1=new yn,Wl=new ae,Hd=new ae;function Hy(s,t,i){let r=new hv;const o=new pt,c=new pt,d=new pn,h=new $2,p=new e3,m={},M=i.maxTextureSize,x={[ya]:wn,[wn]:ya,[fi]:fi},v=new Jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:By,fragmentShader:Fy}),b=v.clone();b.defines.HORIZONTAL_PASS=1;const T=new Ki;T.setAttribute("position",new Ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Fi(T,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bc;let _=this.type;this.render=function(P,j,R){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||P.length===0)return;this.type===jx&&(nt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Bc);const B=s.getRenderTarget(),Y=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),K=s.state;K.setBlending(Bi),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const oe=_!==this.type;oe&&j.traverse(function(le){le.material&&(Array.isArray(le.material)?le.material.forEach(H=>H.needsUpdate=!0):le.material.needsUpdate=!0)});for(let le=0,H=P.length;le<H;le++){const U=P[le],I=U.shadow;if(I===void 0){nt("WebGLShadowMap:",U,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;o.copy(I.mapSize);const ie=I.getFrameExtents();o.multiply(ie),c.copy(I.mapSize),(o.x>M||o.y>M)&&(o.x>M&&(c.x=Math.floor(M/ie.x),o.x=c.x*ie.x,I.mapSize.x=c.x),o.y>M&&(c.y=Math.floor(M/ie.y),o.y=c.y*ie.y,I.mapSize.y=c.y));const de=s.state.buffers.depth.getReversed();if(I.camera._reversedDepth=de,I.map===null||oe===!0){if(I.map!==null&&(I.map.depthTexture!==null&&(I.map.depthTexture.dispose(),I.map.depthTexture=null),I.map.dispose()),this.type===Yl){if(U.isPointLight){nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}I.map=new jn(o.x,o.y,{format:Hs,type:Ea,minFilter:on,magFilter:on,generateMipmaps:!1}),I.map.texture.name=U.name+".shadowMap",I.map.depthTexture=new Vs(o.x,o.y,Oi),I.map.depthTexture.name=U.name+".shadowMapDepth",I.map.depthTexture.format=Ta,I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Bn,I.map.depthTexture.magFilter=Bn}else U.isPointLight?(I.map=new Sv(o.x),I.map.depthTexture=new q2(o.x,Zi)):(I.map=new jn(o.x,o.y),I.map.depthTexture=new Vs(o.x,o.y,Zi)),I.map.depthTexture.name=U.name+".shadowMap",I.map.depthTexture.format=Ta,this.type===Bc?(I.map.depthTexture.compareFunction=de?Xh:jh,I.map.depthTexture.minFilter=on,I.map.depthTexture.magFilter=on):(I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Bn,I.map.depthTexture.magFilter=Bn);I.camera.updateProjectionMatrix()}const _e=I.map.isWebGLCubeRenderTarget?6:1;for(let Ue=0;Ue<_e;Ue++){if(I.map.isWebGLCubeRenderTarget)s.setRenderTarget(I.map,Ue),s.clear();else{Ue===0&&(s.setRenderTarget(I.map),s.clear());const Re=I.getViewport(Ue);d.set(c.x*Re.x,c.y*Re.y,c.x*Re.z,c.y*Re.w),K.viewport(d)}if(U.isPointLight){const Re=I.camera,He=I.matrix,et=U.distance||Re.far;et!==Re.far&&(Re.far=et,Re.updateProjectionMatrix()),Wl.setFromMatrixPosition(U.matrixWorld),Re.position.copy(Wl),Hd.copy(Re.position),Hd.add(Iy[Ue]),Re.up.copy(zy[Ue]),Re.lookAt(Hd),Re.updateMatrixWorld(),He.makeTranslation(-Wl.x,-Wl.y,-Wl.z),L1.multiplyMatrices(Re.projectionMatrix,Re.matrixWorldInverse),I._frustum.setFromProjectionMatrix(L1,Re.coordinateSystem,Re.reversedDepth)}else I.updateMatrices(U);r=I.getFrustum(),O(j,R,I.camera,U,this.type)}I.isPointLightShadow!==!0&&this.type===Yl&&D(I,R),I.needsUpdate=!1}_=this.type,S.needsUpdate=!1,s.setRenderTarget(B,Y,z)};function D(P,j){const R=t.update(w);v.defines.VSM_SAMPLES!==P.blurSamples&&(v.defines.VSM_SAMPLES=P.blurSamples,b.defines.VSM_SAMPLES=P.blurSamples,v.needsUpdate=!0,b.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new jn(o.x,o.y,{format:Hs,type:Ea})),v.uniforms.shadow_pass.value=P.map.depthTexture,v.uniforms.resolution.value=P.mapSize,v.uniforms.radius.value=P.radius,s.setRenderTarget(P.mapPass),s.clear(),s.renderBufferDirect(j,null,R,v,w,null),b.uniforms.shadow_pass.value=P.mapPass.texture,b.uniforms.resolution.value=P.mapSize,b.uniforms.radius.value=P.radius,s.setRenderTarget(P.map),s.clear(),s.renderBufferDirect(j,null,R,b,w,null)}function L(P,j,R,B){let Y=null;const z=R.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(z!==void 0)Y=z;else if(Y=R.isPointLight===!0?p:h,s.localClippingEnabled&&j.clipShadows===!0&&Array.isArray(j.clippingPlanes)&&j.clippingPlanes.length!==0||j.displacementMap&&j.displacementScale!==0||j.alphaMap&&j.alphaTest>0||j.map&&j.alphaTest>0||j.alphaToCoverage===!0){const K=Y.uuid,oe=j.uuid;let le=m[K];le===void 0&&(le={},m[K]=le);let H=le[oe];H===void 0&&(H=Y.clone(),le[oe]=H,j.addEventListener("dispose",X)),Y=H}if(Y.visible=j.visible,Y.wireframe=j.wireframe,B===Yl?Y.side=j.shadowSide!==null?j.shadowSide:j.side:Y.side=j.shadowSide!==null?j.shadowSide:x[j.side],Y.alphaMap=j.alphaMap,Y.alphaTest=j.alphaToCoverage===!0?.5:j.alphaTest,Y.map=j.map,Y.clipShadows=j.clipShadows,Y.clippingPlanes=j.clippingPlanes,Y.clipIntersection=j.clipIntersection,Y.displacementMap=j.displacementMap,Y.displacementScale=j.displacementScale,Y.displacementBias=j.displacementBias,Y.wireframeLinewidth=j.wireframeLinewidth,Y.linewidth=j.linewidth,R.isPointLight===!0&&Y.isMeshDistanceMaterial===!0){const K=s.properties.get(Y);K.light=R}return Y}function O(P,j,R,B,Y){if(P.visible===!1)return;if(P.layers.test(j.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&Y===Yl)&&(!P.frustumCulled||r.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,P.matrixWorld);const oe=t.update(P),le=P.material;if(Array.isArray(le)){const H=oe.groups;for(let U=0,I=H.length;U<I;U++){const ie=H[U],de=le[ie.materialIndex];if(de&&de.visible){const _e=L(P,de,B,Y);P.onBeforeShadow(s,P,j,R,oe,_e,ie),s.renderBufferDirect(R,null,oe,_e,P,ie),P.onAfterShadow(s,P,j,R,oe,_e,ie)}}}else if(le.visible){const H=L(P,le,B,Y);P.onBeforeShadow(s,P,j,R,oe,H,null),s.renderBufferDirect(R,null,oe,H,P,null),P.onAfterShadow(s,P,j,R,oe,H,null)}}const K=P.children;for(let oe=0,le=K.length;oe<le;oe++)O(K[oe],j,R,B,Y)}function X(P){P.target.removeEventListener("dispose",X);for(const R in m){const B=m[R],Y=P.target.uuid;Y in B&&(B[Y].dispose(),delete B[Y])}}}function Gy(s,t){function i(){let G=!1;const Me=new pn;let fe=null;const Pe=new pn(0,0,0,0);return{setMask:function(Ae){fe!==Ae&&!G&&(s.colorMask(Ae,Ae,Ae,Ae),fe=Ae)},setLocked:function(Ae){G=Ae},setClear:function(Ae,xe,Xe,tt,sn){sn===!0&&(Ae*=tt,xe*=tt,Xe*=tt),Me.set(Ae,xe,Xe,tt),Pe.equals(Me)===!1&&(s.clearColor(Ae,xe,Xe,tt),Pe.copy(Me))},reset:function(){G=!1,fe=null,Pe.set(-1,0,0,0)}}}function r(){let G=!1,Me=!1,fe=null,Pe=null,Ae=null;return{setReversed:function(xe){if(Me!==xe){const Xe=t.get("EXT_clip_control");xe?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT),Me=xe;const tt=Ae;Ae=null,this.setClear(tt)}},getReversed:function(){return Me},setTest:function(xe){xe?ve(s.DEPTH_TEST):Ve(s.DEPTH_TEST)},setMask:function(xe){fe!==xe&&!G&&(s.depthMask(xe),fe=xe)},setFunc:function(xe){if(Me&&(xe=b2[xe]),Pe!==xe){switch(xe){case qd:s.depthFunc(s.NEVER);break;case Vc:s.depthFunc(s.ALWAYS);break;case Yd:s.depthFunc(s.LESS);break;case Ir:s.depthFunc(s.LEQUAL);break;case Zd:s.depthFunc(s.EQUAL);break;case Kd:s.depthFunc(s.GEQUAL);break;case Qd:s.depthFunc(s.GREATER);break;case Jd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Pe=xe}},setLocked:function(xe){G=xe},setClear:function(xe){Ae!==xe&&(Ae=xe,Me&&(xe=1-xe),s.clearDepth(xe))},reset:function(){G=!1,fe=null,Pe=null,Ae=null,Me=!1}}}function o(){let G=!1,Me=null,fe=null,Pe=null,Ae=null,xe=null,Xe=null,tt=null,sn=null;return{setTest:function(Ut){G||(Ut?ve(s.STENCIL_TEST):Ve(s.STENCIL_TEST))},setMask:function(Ut){Me!==Ut&&!G&&(s.stencilMask(Ut),Me=Ut)},setFunc:function(Ut,hi,$n){(fe!==Ut||Pe!==hi||Ae!==$n)&&(s.stencilFunc(Ut,hi,$n),fe=Ut,Pe=hi,Ae=$n)},setOp:function(Ut,hi,$n){(xe!==Ut||Xe!==hi||tt!==$n)&&(s.stencilOp(Ut,hi,$n),xe=Ut,Xe=hi,tt=$n)},setLocked:function(Ut){G=Ut},setClear:function(Ut){sn!==Ut&&(s.clearStencil(Ut),sn=Ut)},reset:function(){G=!1,Me=null,fe=null,Pe=null,Ae=null,xe=null,Xe=null,tt=null,sn=null}}}const c=new i,d=new r,h=new o,p=new WeakMap,m=new WeakMap;let M={},x={},v={},b=new WeakMap,T=[],w=null,S=!1,_=null,D=null,L=null,O=null,X=null,P=null,j=null,R=new Pt(0,0,0),B=0,Y=!1,z=null,K=null,oe=null,le=null,H=null;const U=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,ie=0;const de=s.getParameter(s.VERSION);de.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(de)[1]),I=ie>=1):de.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(de)[1]),I=ie>=2);let _e=null,Ue={};const Re=s.getParameter(s.SCISSOR_BOX),He=s.getParameter(s.VIEWPORT),et=new pn().fromArray(Re),Ze=new pn().fromArray(He);function he(G,Me,fe,Pe){const Ae=new Uint8Array(4),xe=s.createTexture();s.bindTexture(G,xe),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Xe=0;Xe<fe;Xe++)G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY?s.texImage3D(Me,0,s.RGBA,1,1,Pe,0,s.RGBA,s.UNSIGNED_BYTE,Ae):s.texImage2D(Me+Xe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ae);return xe}const De={};De[s.TEXTURE_2D]=he(s.TEXTURE_2D,s.TEXTURE_2D,1),De[s.TEXTURE_CUBE_MAP]=he(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),De[s.TEXTURE_2D_ARRAY]=he(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),De[s.TEXTURE_3D]=he(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),h.setClear(0),ve(s.DEPTH_TEST),d.setFunc(Ir),rt(!1),xt(Fg),ve(s.CULL_FACE),At(Bi);function ve(G){M[G]!==!0&&(s.enable(G),M[G]=!0)}function Ve(G){M[G]!==!1&&(s.disable(G),M[G]=!1)}function Je(G,Me){return v[G]!==Me?(s.bindFramebuffer(G,Me),v[G]=Me,G===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Me),G===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Me),!0):!1}function Ye(G,Me){let fe=T,Pe=!1;if(G){fe=b.get(Me),fe===void 0&&(fe=[],b.set(Me,fe));const Ae=G.textures;if(fe.length!==Ae.length||fe[0]!==s.COLOR_ATTACHMENT0){for(let xe=0,Xe=Ae.length;xe<Xe;xe++)fe[xe]=s.COLOR_ATTACHMENT0+xe;fe.length=Ae.length,Pe=!0}}else fe[0]!==s.BACK&&(fe[0]=s.BACK,Pe=!0);Pe&&s.drawBuffers(fe)}function Bt(G){return w!==G?(s.useProgram(G),w=G,!0):!1}const ct={[Ps]:s.FUNC_ADD,[Wx]:s.FUNC_SUBTRACT,[qx]:s.FUNC_REVERSE_SUBTRACT};ct[Yx]=s.MIN,ct[Zx]=s.MAX;const ut={[Kx]:s.ZERO,[Qx]:s.ONE,[Jx]:s.SRC_COLOR,[Xd]:s.SRC_ALPHA,[a2]:s.SRC_ALPHA_SATURATE,[n2]:s.DST_COLOR,[e2]:s.DST_ALPHA,[$x]:s.ONE_MINUS_SRC_COLOR,[Wd]:s.ONE_MINUS_SRC_ALPHA,[i2]:s.ONE_MINUS_DST_COLOR,[t2]:s.ONE_MINUS_DST_ALPHA,[s2]:s.CONSTANT_COLOR,[r2]:s.ONE_MINUS_CONSTANT_COLOR,[l2]:s.CONSTANT_ALPHA,[o2]:s.ONE_MINUS_CONSTANT_ALPHA};function At(G,Me,fe,Pe,Ae,xe,Xe,tt,sn,Ut){if(G===Bi){S===!0&&(Ve(s.BLEND),S=!1);return}if(S===!1&&(ve(s.BLEND),S=!0),G!==Xx){if(G!==_||Ut!==Y){if((D!==Ps||X!==Ps)&&(s.blendEquation(s.FUNC_ADD),D=Ps,X=Ps),Ut)switch(G){case Br:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ig:s.blendFunc(s.ONE,s.ONE);break;case zg:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Hg:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Rt("WebGLState: Invalid blending: ",G);break}else switch(G){case Br:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ig:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case zg:Rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hg:Rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Rt("WebGLState: Invalid blending: ",G);break}L=null,O=null,P=null,j=null,R.set(0,0,0),B=0,_=G,Y=Ut}return}Ae=Ae||Me,xe=xe||fe,Xe=Xe||Pe,(Me!==D||Ae!==X)&&(s.blendEquationSeparate(ct[Me],ct[Ae]),D=Me,X=Ae),(fe!==L||Pe!==O||xe!==P||Xe!==j)&&(s.blendFuncSeparate(ut[fe],ut[Pe],ut[xe],ut[Xe]),L=fe,O=Pe,P=xe,j=Xe),(tt.equals(R)===!1||sn!==B)&&(s.blendColor(tt.r,tt.g,tt.b,sn),R.copy(tt),B=sn),_=G,Y=!1}function Ie(G,Me){G.side===fi?Ve(s.CULL_FACE):ve(s.CULL_FACE);let fe=G.side===wn;Me&&(fe=!fe),rt(fe),G.blending===Br&&G.transparent===!1?At(Bi):At(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),d.setFunc(G.depthFunc),d.setTest(G.depthTest),d.setMask(G.depthWrite),c.setMask(G.colorWrite);const Pe=G.stencilWrite;h.setTest(Pe),Pe&&(h.setMask(G.stencilWriteMask),h.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),h.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),k(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ve(s.SAMPLE_ALPHA_TO_COVERAGE):Ve(s.SAMPLE_ALPHA_TO_COVERAGE)}function rt(G){z!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),z=G)}function xt(G){G!==Vx?(ve(s.CULL_FACE),G!==K&&(G===Fg?s.cullFace(s.BACK):G===kx?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ve(s.CULL_FACE),K=G}function kt(G){G!==oe&&(I&&s.lineWidth(G),oe=G)}function k(G,Me,fe){G?(ve(s.POLYGON_OFFSET_FILL),(le!==Me||H!==fe)&&(le=Me,H=fe,d.getReversed()&&(Me=-Me),s.polygonOffset(Me,fe))):Ve(s.POLYGON_OFFSET_FILL)}function Qt(G){G?ve(s.SCISSOR_TEST):Ve(s.SCISSOR_TEST)}function ht(G){G===void 0&&(G=s.TEXTURE0+U-1),_e!==G&&(s.activeTexture(G),_e=G)}function jt(G,Me,fe){fe===void 0&&(_e===null?fe=s.TEXTURE0+U-1:fe=_e);let Pe=Ue[fe];Pe===void 0&&(Pe={type:void 0,texture:void 0},Ue[fe]=Pe),(Pe.type!==G||Pe.texture!==Me)&&(_e!==fe&&(s.activeTexture(fe),_e=fe),s.bindTexture(G,Me||De[G]),Pe.type=G,Pe.texture=Me)}function be(){const G=Ue[_e];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function en(){try{s.compressedTexImage2D(...arguments)}catch(G){Rt("WebGLState:",G)}}function N(){try{s.compressedTexImage3D(...arguments)}catch(G){Rt("WebGLState:",G)}}function E(){try{s.texSubImage2D(...arguments)}catch(G){Rt("WebGLState:",G)}}function Z(){try{s.texSubImage3D(...arguments)}catch(G){Rt("WebGLState:",G)}}function me(){try{s.compressedTexSubImage2D(...arguments)}catch(G){Rt("WebGLState:",G)}}function Se(){try{s.compressedTexSubImage3D(...arguments)}catch(G){Rt("WebGLState:",G)}}function ye(){try{s.texStorage2D(...arguments)}catch(G){Rt("WebGLState:",G)}}function Ce(){try{s.texStorage3D(...arguments)}catch(G){Rt("WebGLState:",G)}}function re(){try{s.texImage2D(...arguments)}catch(G){Rt("WebGLState:",G)}}function ce(){try{s.texImage3D(...arguments)}catch(G){Rt("WebGLState:",G)}}function we(G){return x[G]!==void 0?x[G]:s.getParameter(G)}function Ne(G,Me){x[G]!==Me&&(s.pixelStorei(G,Me),x[G]=Me)}function Te(G){et.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),et.copy(G))}function Ee(G){Ze.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),Ze.copy(G))}function it(G,Me){let fe=m.get(Me);fe===void 0&&(fe=new WeakMap,m.set(Me,fe));let Pe=fe.get(G);Pe===void 0&&(Pe=s.getUniformBlockIndex(Me,G.name),fe.set(G,Pe))}function at(G,Me){const Pe=m.get(Me).get(G);p.get(Me)!==Pe&&(s.uniformBlockBinding(Me,Pe,G.__bindingPointIndex),p.set(Me,Pe))}function mt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),M={},x={},_e=null,Ue={},v={},b=new WeakMap,T=[],w=null,S=!1,_=null,D=null,L=null,O=null,X=null,P=null,j=null,R=new Pt(0,0,0),B=0,Y=!1,z=null,K=null,oe=null,le=null,H=null,et.set(0,0,s.canvas.width,s.canvas.height),Ze.set(0,0,s.canvas.width,s.canvas.height),c.reset(),d.reset(),h.reset()}return{buffers:{color:c,depth:d,stencil:h},enable:ve,disable:Ve,bindFramebuffer:Je,drawBuffers:Ye,useProgram:Bt,setBlending:At,setMaterial:Ie,setFlipSided:rt,setCullFace:xt,setLineWidth:kt,setPolygonOffset:k,setScissorTest:Qt,activeTexture:ht,bindTexture:jt,unbindTexture:be,compressedTexImage2D:en,compressedTexImage3D:N,texImage2D:re,texImage3D:ce,pixelStorei:Ne,getParameter:we,updateUBOMapping:it,uniformBlockBinding:at,texStorage2D:ye,texStorage3D:Ce,texSubImage2D:E,texSubImage3D:Z,compressedTexSubImage2D:me,compressedTexSubImage3D:Se,scissor:Te,viewport:Ee,reset:mt}}function Vy(s,t,i,r,o,c,d){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new pt,M=new WeakMap,x=new Set;let v;const b=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(N,E){return T?new OffscreenCanvas(N,E):qc("canvas")}function S(N,E,Z){let me=1;const Se=en(N);if((Se.width>Z||Se.height>Z)&&(me=Z/Math.max(Se.width,Se.height)),me<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ye=Math.floor(me*Se.width),Ce=Math.floor(me*Se.height);v===void 0&&(v=w(ye,Ce));const re=E?w(ye,Ce):v;return re.width=ye,re.height=Ce,re.getContext("2d").drawImage(N,0,0,ye,Ce),nt("WebGLRenderer: Texture has been resized from ("+Se.width+"x"+Se.height+") to ("+ye+"x"+Ce+")."),re}else return"data"in N&&nt("WebGLRenderer: Image in DataTexture is too big ("+Se.width+"x"+Se.height+")."),N;return N}function _(N){return N.generateMipmaps}function D(N){s.generateMipmap(N)}function L(N){return N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?s.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function O(N,E,Z,me,Se,ye=!1){if(N!==null){if(s[N]!==void 0)return s[N];nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let Ce;me&&(Ce=t.get("EXT_texture_norm16"),Ce||nt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let re=E;if(E===s.RED&&(Z===s.FLOAT&&(re=s.R32F),Z===s.HALF_FLOAT&&(re=s.R16F),Z===s.UNSIGNED_BYTE&&(re=s.R8),Z===s.UNSIGNED_SHORT&&Ce&&(re=Ce.R16_EXT),Z===s.SHORT&&Ce&&(re=Ce.R16_SNORM_EXT)),E===s.RED_INTEGER&&(Z===s.UNSIGNED_BYTE&&(re=s.R8UI),Z===s.UNSIGNED_SHORT&&(re=s.R16UI),Z===s.UNSIGNED_INT&&(re=s.R32UI),Z===s.BYTE&&(re=s.R8I),Z===s.SHORT&&(re=s.R16I),Z===s.INT&&(re=s.R32I)),E===s.RG&&(Z===s.FLOAT&&(re=s.RG32F),Z===s.HALF_FLOAT&&(re=s.RG16F),Z===s.UNSIGNED_BYTE&&(re=s.RG8),Z===s.UNSIGNED_SHORT&&Ce&&(re=Ce.RG16_EXT),Z===s.SHORT&&Ce&&(re=Ce.RG16_SNORM_EXT)),E===s.RG_INTEGER&&(Z===s.UNSIGNED_BYTE&&(re=s.RG8UI),Z===s.UNSIGNED_SHORT&&(re=s.RG16UI),Z===s.UNSIGNED_INT&&(re=s.RG32UI),Z===s.BYTE&&(re=s.RG8I),Z===s.SHORT&&(re=s.RG16I),Z===s.INT&&(re=s.RG32I)),E===s.RGB_INTEGER&&(Z===s.UNSIGNED_BYTE&&(re=s.RGB8UI),Z===s.UNSIGNED_SHORT&&(re=s.RGB16UI),Z===s.UNSIGNED_INT&&(re=s.RGB32UI),Z===s.BYTE&&(re=s.RGB8I),Z===s.SHORT&&(re=s.RGB16I),Z===s.INT&&(re=s.RGB32I)),E===s.RGBA_INTEGER&&(Z===s.UNSIGNED_BYTE&&(re=s.RGBA8UI),Z===s.UNSIGNED_SHORT&&(re=s.RGBA16UI),Z===s.UNSIGNED_INT&&(re=s.RGBA32UI),Z===s.BYTE&&(re=s.RGBA8I),Z===s.SHORT&&(re=s.RGBA16I),Z===s.INT&&(re=s.RGBA32I)),E===s.RGB&&(Z===s.UNSIGNED_SHORT&&Ce&&(re=Ce.RGB16_EXT),Z===s.SHORT&&Ce&&(re=Ce.RGB16_SNORM_EXT),Z===s.UNSIGNED_INT_5_9_9_9_REV&&(re=s.RGB9_E5),Z===s.UNSIGNED_INT_10F_11F_11F_REV&&(re=s.R11F_G11F_B10F)),E===s.RGBA){const ce=ye?Xc:Et.getTransfer(Se);Z===s.FLOAT&&(re=s.RGBA32F),Z===s.HALF_FLOAT&&(re=s.RGBA16F),Z===s.UNSIGNED_BYTE&&(re=ce===Vt?s.SRGB8_ALPHA8:s.RGBA8),Z===s.UNSIGNED_SHORT&&Ce&&(re=Ce.RGBA16_EXT),Z===s.SHORT&&Ce&&(re=Ce.RGBA16_SNORM_EXT),Z===s.UNSIGNED_SHORT_4_4_4_4&&(re=s.RGBA4),Z===s.UNSIGNED_SHORT_5_5_5_1&&(re=s.RGB5_A1)}return(re===s.R16F||re===s.R32F||re===s.RG16F||re===s.RG32F||re===s.RGBA16F||re===s.RGBA32F)&&t.get("EXT_color_buffer_float"),re}function X(N,E){let Z;return N?E===null||E===Zi||E===Hr?Z=s.DEPTH24_STENCIL8:E===Oi?Z=s.DEPTH32F_STENCIL8:E===Kl&&(Z=s.DEPTH24_STENCIL8,nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Zi||E===Hr?Z=s.DEPTH_COMPONENT24:E===Oi?Z=s.DEPTH_COMPONENT32F:E===Kl&&(Z=s.DEPTH_COMPONENT16),Z}function P(N,E){return _(N)===!0||N.isFramebufferTexture&&N.minFilter!==Bn&&N.minFilter!==on?Math.log2(Math.max(E.width,E.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?E.mipmaps.length:1}function j(N){const E=N.target;E.removeEventListener("dispose",j),B(E),E.isVideoTexture&&M.delete(E),E.isHTMLTexture&&x.delete(E)}function R(N){const E=N.target;E.removeEventListener("dispose",R),z(E)}function B(N){const E=r.get(N);if(E.__webglInit===void 0)return;const Z=N.source,me=b.get(Z);if(me){const Se=me[E.__cacheKey];Se.usedTimes--,Se.usedTimes===0&&Y(N),Object.keys(me).length===0&&b.delete(Z)}r.remove(N)}function Y(N){const E=r.get(N);s.deleteTexture(E.__webglTexture);const Z=N.source,me=b.get(Z);delete me[E.__cacheKey],d.memory.textures--}function z(N){const E=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(E.__webglFramebuffer[me]))for(let Se=0;Se<E.__webglFramebuffer[me].length;Se++)s.deleteFramebuffer(E.__webglFramebuffer[me][Se]);else s.deleteFramebuffer(E.__webglFramebuffer[me]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[me])}else{if(Array.isArray(E.__webglFramebuffer))for(let me=0;me<E.__webglFramebuffer.length;me++)s.deleteFramebuffer(E.__webglFramebuffer[me]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let me=0;me<E.__webglColorRenderbuffer.length;me++)E.__webglColorRenderbuffer[me]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[me]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Z=N.textures;for(let me=0,Se=Z.length;me<Se;me++){const ye=r.get(Z[me]);ye.__webglTexture&&(s.deleteTexture(ye.__webglTexture),d.memory.textures--),r.remove(Z[me])}r.remove(N)}let K=0;function oe(){K=0}function le(){return K}function H(N){K=N}function U(){const N=K;return N>=o.maxTextures&&nt("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+o.maxTextures),K+=1,N}function I(N){const E=[];return E.push(N.wrapS),E.push(N.wrapT),E.push(N.wrapR||0),E.push(N.magFilter),E.push(N.minFilter),E.push(N.anisotropy),E.push(N.internalFormat),E.push(N.format),E.push(N.type),E.push(N.generateMipmaps),E.push(N.premultiplyAlpha),E.push(N.flipY),E.push(N.unpackAlignment),E.push(N.colorSpace),E.join()}function ie(N,E){const Z=r.get(N);if(N.isVideoTexture&&jt(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&Z.__version!==N.version){const me=N.image;if(me===null)nt("WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)nt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ve(Z,N,E);return}}else N.isExternalTexture&&(Z.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,Z.__webglTexture,s.TEXTURE0+E)}function de(N,E){const Z=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Z.__version!==N.version){Ve(Z,N,E);return}else N.isExternalTexture&&(Z.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,Z.__webglTexture,s.TEXTURE0+E)}function _e(N,E){const Z=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Z.__version!==N.version){Ve(Z,N,E);return}i.bindTexture(s.TEXTURE_3D,Z.__webglTexture,s.TEXTURE0+E)}function Ue(N,E){const Z=r.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&Z.__version!==N.version){Je(Z,N,E);return}i.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture,s.TEXTURE0+E)}const Re={[$d]:s.REPEAT,[Sa]:s.CLAMP_TO_EDGE,[eh]:s.MIRRORED_REPEAT},He={[Bn]:s.NEAREST,[f2]:s.NEAREST_MIPMAP_NEAREST,[hc]:s.NEAREST_MIPMAP_LINEAR,[on]:s.LINEAR,[ud]:s.LINEAR_MIPMAP_NEAREST,[Fs]:s.LINEAR_MIPMAP_LINEAR},et={[h2]:s.NEVER,[_2]:s.ALWAYS,[p2]:s.LESS,[jh]:s.LEQUAL,[m2]:s.EQUAL,[Xh]:s.GEQUAL,[g2]:s.GREATER,[v2]:s.NOTEQUAL};function Ze(N,E){if(E.type===Oi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===on||E.magFilter===ud||E.magFilter===hc||E.magFilter===Fs||E.minFilter===on||E.minFilter===ud||E.minFilter===hc||E.minFilter===Fs)&&nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,Re[E.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,Re[E.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,Re[E.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,He[E.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,He[E.minFilter]),E.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,et[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Bn||E.minFilter!==hc&&E.minFilter!==Fs||E.type===Oi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const Z=t.get("EXT_texture_filter_anisotropic");s.texParameterf(N,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function he(N,E){let Z=!1;N.__webglInit===void 0&&(N.__webglInit=!0,E.addEventListener("dispose",j));const me=E.source;let Se=b.get(me);Se===void 0&&(Se={},b.set(me,Se));const ye=I(E);if(ye!==N.__cacheKey){Se[ye]===void 0&&(Se[ye]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,Z=!0),Se[ye].usedTimes++;const Ce=Se[N.__cacheKey];Ce!==void 0&&(Se[N.__cacheKey].usedTimes--,Ce.usedTimes===0&&Y(E)),N.__cacheKey=ye,N.__webglTexture=Se[ye].texture}return Z}function De(N,E,Z){return Math.floor(Math.floor(N/Z)/E)}function ve(N,E,Z,me){const ye=N.updateRanges;if(ye.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,Z,me,E.data);else{ye.sort((Ne,Te)=>Ne.start-Te.start);let Ce=0;for(let Ne=1;Ne<ye.length;Ne++){const Te=ye[Ce],Ee=ye[Ne],it=Te.start+Te.count,at=De(Ee.start,E.width,4),mt=De(Te.start,E.width,4);Ee.start<=it+1&&at===mt&&De(Ee.start+Ee.count-1,E.width,4)===at?Te.count=Math.max(Te.count,Ee.start+Ee.count-Te.start):(++Ce,ye[Ce]=Ee)}ye.length=Ce+1;const re=i.getParameter(s.UNPACK_ROW_LENGTH),ce=i.getParameter(s.UNPACK_SKIP_PIXELS),we=i.getParameter(s.UNPACK_SKIP_ROWS);i.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let Ne=0,Te=ye.length;Ne<Te;Ne++){const Ee=ye[Ne],it=Math.floor(Ee.start/4),at=Math.ceil(Ee.count/4),mt=it%E.width,G=Math.floor(it/E.width),Me=at,fe=1;i.pixelStorei(s.UNPACK_SKIP_PIXELS,mt),i.pixelStorei(s.UNPACK_SKIP_ROWS,G),i.texSubImage2D(s.TEXTURE_2D,0,mt,G,Me,fe,Z,me,E.data)}N.clearUpdateRanges(),i.pixelStorei(s.UNPACK_ROW_LENGTH,re),i.pixelStorei(s.UNPACK_SKIP_PIXELS,ce),i.pixelStorei(s.UNPACK_SKIP_ROWS,we)}}function Ve(N,E,Z){let me=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(me=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(me=s.TEXTURE_3D);const Se=he(N,E),ye=E.source;i.bindTexture(me,N.__webglTexture,s.TEXTURE0+Z);const Ce=r.get(ye);if(ye.version!==Ce.__version||Se===!0){if(i.activeTexture(s.TEXTURE0+Z),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const fe=Et.getPrimaries(Et.workingColorSpace),Pe=E.colorSpace===Wi?null:Et.getPrimaries(E.colorSpace),Ae=E.colorSpace===Wi||fe===Pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;i.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae)}i.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment);let ce=S(E.image,!1,o.maxTextureSize);ce=be(E,ce);const we=c.convert(E.format,E.colorSpace),Ne=c.convert(E.type);let Te=O(E.internalFormat,we,Ne,E.normalized,E.colorSpace,E.isVideoTexture);Ze(me,E);let Ee;const it=E.mipmaps,at=E.isVideoTexture!==!0,mt=Ce.__version===void 0||Se===!0,G=ye.dataReady,Me=P(E,ce);if(E.isDepthTexture)Te=X(E.format===os,E.type),mt&&(at?i.texStorage2D(s.TEXTURE_2D,1,Te,ce.width,ce.height):i.texImage2D(s.TEXTURE_2D,0,Te,ce.width,ce.height,0,we,Ne,null));else if(E.isDataTexture)if(it.length>0){at&&mt&&i.texStorage2D(s.TEXTURE_2D,Me,Te,it[0].width,it[0].height);for(let fe=0,Pe=it.length;fe<Pe;fe++)Ee=it[fe],at?G&&i.texSubImage2D(s.TEXTURE_2D,fe,0,0,Ee.width,Ee.height,we,Ne,Ee.data):i.texImage2D(s.TEXTURE_2D,fe,Te,Ee.width,Ee.height,0,we,Ne,Ee.data);E.generateMipmaps=!1}else at?(mt&&i.texStorage2D(s.TEXTURE_2D,Me,Te,ce.width,ce.height),G&&ve(E,ce,we,Ne)):i.texImage2D(s.TEXTURE_2D,0,Te,ce.width,ce.height,0,we,Ne,ce.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){at&&mt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Me,Te,it[0].width,it[0].height,ce.depth);for(let fe=0,Pe=it.length;fe<Pe;fe++)if(Ee=it[fe],E.format!==Pi)if(we!==null)if(at){if(G)if(E.layerUpdates.size>0){const Ae=u1(Ee.width,Ee.height,E.format,E.type);for(const xe of E.layerUpdates){const Xe=Ee.data.subarray(xe*Ae/Ee.data.BYTES_PER_ELEMENT,(xe+1)*Ae/Ee.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,fe,0,0,xe,Ee.width,Ee.height,1,we,Xe)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,fe,0,0,0,Ee.width,Ee.height,ce.depth,we,Ee.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,fe,Te,Ee.width,Ee.height,ce.depth,0,Ee.data,0,0);else nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?G&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,fe,0,0,0,Ee.width,Ee.height,ce.depth,we,Ne,Ee.data):i.texImage3D(s.TEXTURE_2D_ARRAY,fe,Te,Ee.width,Ee.height,ce.depth,0,we,Ne,Ee.data)}else{at&&mt&&i.texStorage2D(s.TEXTURE_2D,Me,Te,it[0].width,it[0].height);for(let fe=0,Pe=it.length;fe<Pe;fe++)Ee=it[fe],E.format!==Pi?we!==null?at?G&&i.compressedTexSubImage2D(s.TEXTURE_2D,fe,0,0,Ee.width,Ee.height,we,Ee.data):i.compressedTexImage2D(s.TEXTURE_2D,fe,Te,Ee.width,Ee.height,0,Ee.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?G&&i.texSubImage2D(s.TEXTURE_2D,fe,0,0,Ee.width,Ee.height,we,Ne,Ee.data):i.texImage2D(s.TEXTURE_2D,fe,Te,Ee.width,Ee.height,0,we,Ne,Ee.data)}else if(E.isDataArrayTexture)if(at){if(mt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Me,Te,ce.width,ce.height,ce.depth),G)if(E.layerUpdates.size>0){const fe=u1(ce.width,ce.height,E.format,E.type);for(const Pe of E.layerUpdates){const Ae=ce.data.subarray(Pe*fe/ce.data.BYTES_PER_ELEMENT,(Pe+1)*fe/ce.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Pe,ce.width,ce.height,1,we,Ne,Ae)}E.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,we,Ne,ce.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Te,ce.width,ce.height,ce.depth,0,we,Ne,ce.data);else if(E.isData3DTexture)at?(mt&&i.texStorage3D(s.TEXTURE_3D,Me,Te,ce.width,ce.height,ce.depth),G&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,we,Ne,ce.data)):i.texImage3D(s.TEXTURE_3D,0,Te,ce.width,ce.height,ce.depth,0,we,Ne,ce.data);else if(E.isFramebufferTexture){if(mt)if(at)i.texStorage2D(s.TEXTURE_2D,Me,Te,ce.width,ce.height);else{let fe=ce.width,Pe=ce.height;for(let Ae=0;Ae<Me;Ae++)i.texImage2D(s.TEXTURE_2D,Ae,Te,fe,Pe,0,we,Ne,null),fe>>=1,Pe>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in s){const fe=s.canvas;if(fe.hasAttribute("layoutsubtree")||fe.setAttribute("layoutsubtree","true"),ce.parentNode!==fe){fe.appendChild(ce),x.add(E),fe.onpaint=tt=>{const sn=tt.changedElements;for(const Ut of x)sn.includes(Ut.image)&&(Ut.needsUpdate=!0)},fe.requestPaint();return}const Pe=0,Ae=s.RGBA,xe=s.RGBA,Xe=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,Pe,Ae,xe,Xe,ce),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(it.length>0){if(at&&mt){const fe=en(it[0]);i.texStorage2D(s.TEXTURE_2D,Me,Te,fe.width,fe.height)}for(let fe=0,Pe=it.length;fe<Pe;fe++)Ee=it[fe],at?G&&i.texSubImage2D(s.TEXTURE_2D,fe,0,0,we,Ne,Ee):i.texImage2D(s.TEXTURE_2D,fe,Te,we,Ne,Ee);E.generateMipmaps=!1}else if(at){if(mt){const fe=en(ce);i.texStorage2D(s.TEXTURE_2D,Me,Te,fe.width,fe.height)}G&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,we,Ne,ce)}else i.texImage2D(s.TEXTURE_2D,0,Te,we,Ne,ce);_(E)&&D(me),Ce.__version=ye.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function Je(N,E,Z){if(E.image.length!==6)return;const me=he(N,E),Se=E.source;i.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+Z);const ye=r.get(Se);if(Se.version!==ye.__version||me===!0){i.activeTexture(s.TEXTURE0+Z);const Ce=Et.getPrimaries(Et.workingColorSpace),re=E.colorSpace===Wi?null:Et.getPrimaries(E.colorSpace),ce=E.colorSpace===Wi||Ce===re?s.NONE:s.BROWSER_DEFAULT_WEBGL;i.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const we=E.isCompressedTexture||E.image[0].isCompressedTexture,Ne=E.image[0]&&E.image[0].isDataTexture,Te=[];for(let xe=0;xe<6;xe++)!we&&!Ne?Te[xe]=S(E.image[xe],!0,o.maxCubemapSize):Te[xe]=Ne?E.image[xe].image:E.image[xe],Te[xe]=be(E,Te[xe]);const Ee=Te[0],it=c.convert(E.format,E.colorSpace),at=c.convert(E.type),mt=O(E.internalFormat,it,at,E.normalized,E.colorSpace),G=E.isVideoTexture!==!0,Me=ye.__version===void 0||me===!0,fe=Se.dataReady;let Pe=P(E,Ee);Ze(s.TEXTURE_CUBE_MAP,E);let Ae;if(we){G&&Me&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,mt,Ee.width,Ee.height);for(let xe=0;xe<6;xe++){Ae=Te[xe].mipmaps;for(let Xe=0;Xe<Ae.length;Xe++){const tt=Ae[Xe];E.format!==Pi?it!==null?G?fe&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Xe,0,0,tt.width,tt.height,it,tt.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Xe,mt,tt.width,tt.height,0,tt.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?fe&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Xe,0,0,tt.width,tt.height,it,at,tt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Xe,mt,tt.width,tt.height,0,it,at,tt.data)}}}else{if(Ae=E.mipmaps,G&&Me){Ae.length>0&&Pe++;const xe=en(Te[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,mt,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(Ne){G?fe&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Te[xe].width,Te[xe].height,it,at,Te[xe].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,mt,Te[xe].width,Te[xe].height,0,it,at,Te[xe].data);for(let Xe=0;Xe<Ae.length;Xe++){const sn=Ae[Xe].image[xe].image;G?fe&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Xe+1,0,0,sn.width,sn.height,it,at,sn.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Xe+1,mt,sn.width,sn.height,0,it,at,sn.data)}}else{G?fe&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,it,at,Te[xe]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,mt,it,at,Te[xe]);for(let Xe=0;Xe<Ae.length;Xe++){const tt=Ae[Xe];G?fe&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Xe+1,0,0,it,at,tt.image[xe]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Xe+1,mt,it,at,tt.image[xe])}}}_(E)&&D(s.TEXTURE_CUBE_MAP),ye.__version=Se.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function Ye(N,E,Z,me,Se,ye){const Ce=c.convert(Z.format,Z.colorSpace),re=c.convert(Z.type),ce=O(Z.internalFormat,Ce,re,Z.normalized,Z.colorSpace),we=r.get(E),Ne=r.get(Z);if(Ne.__renderTarget=E,!we.__hasExternalTextures){const Te=Math.max(1,E.width>>ye),Ee=Math.max(1,E.height>>ye);Se===s.TEXTURE_3D||Se===s.TEXTURE_2D_ARRAY?i.texImage3D(Se,ye,ce,Te,Ee,E.depth,0,Ce,re,null):i.texImage2D(Se,ye,ce,Te,Ee,0,Ce,re,null)}i.bindFramebuffer(s.FRAMEBUFFER,N),ht(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,Se,Ne.__webglTexture,0,Qt(E)):(Se===s.TEXTURE_2D||Se>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Se<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,me,Se,Ne.__webglTexture,ye),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Bt(N,E,Z){if(s.bindRenderbuffer(s.RENDERBUFFER,N),E.depthBuffer){const me=E.depthTexture,Se=me&&me.isDepthTexture?me.type:null,ye=X(E.stencilBuffer,Se),Ce=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;ht(E)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Qt(E),ye,E.width,E.height):Z?s.renderbufferStorageMultisample(s.RENDERBUFFER,Qt(E),ye,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ye,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ce,s.RENDERBUFFER,N)}else{const me=E.textures;for(let Se=0;Se<me.length;Se++){const ye=me[Se],Ce=c.convert(ye.format,ye.colorSpace),re=c.convert(ye.type),ce=O(ye.internalFormat,Ce,re,ye.normalized,ye.colorSpace);ht(E)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Qt(E),ce,E.width,E.height):Z?s.renderbufferStorageMultisample(s.RENDERBUFFER,Qt(E),ce,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ce,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ct(N,E,Z){const me=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(s.FRAMEBUFFER,N),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Se=r.get(E.depthTexture);if(Se.__renderTarget=E,(!Se.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),me){if(Se.__webglInit===void 0&&(Se.__webglInit=!0,E.depthTexture.addEventListener("dispose",j)),Se.__webglTexture===void 0){Se.__webglTexture=s.createTexture(),i.bindTexture(s.TEXTURE_CUBE_MAP,Se.__webglTexture),Ze(s.TEXTURE_CUBE_MAP,E.depthTexture);const we=c.convert(E.depthTexture.format),Ne=c.convert(E.depthTexture.type);let Te;E.depthTexture.format===Ta?Te=s.DEPTH_COMPONENT24:E.depthTexture.format===os&&(Te=s.DEPTH24_STENCIL8);for(let Ee=0;Ee<6;Ee++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,Te,E.width,E.height,0,we,Ne,null)}}else ie(E.depthTexture,0);const ye=Se.__webglTexture,Ce=Qt(E),re=me?s.TEXTURE_CUBE_MAP_POSITIVE_X+Z:s.TEXTURE_2D,ce=E.depthTexture.format===os?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ta)ht(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ce,re,ye,0,Ce):s.framebufferTexture2D(s.FRAMEBUFFER,ce,re,ye,0);else if(E.depthTexture.format===os)ht(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ce,re,ye,0,Ce):s.framebufferTexture2D(s.FRAMEBUFFER,ce,re,ye,0);else throw new Error("Unknown depthTexture format")}function ut(N){const E=r.get(N),Z=N.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==N.depthTexture){const me=N.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),me){const Se=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,me.removeEventListener("dispose",Se)};me.addEventListener("dispose",Se),E.__depthDisposeCallback=Se}E.__boundDepthTexture=me}if(N.depthTexture&&!E.__autoAllocateDepthBuffer)if(Z)for(let me=0;me<6;me++)ct(E.__webglFramebuffer[me],N,me);else{const me=N.texture.mipmaps;me&&me.length>0?ct(E.__webglFramebuffer[0],N,0):ct(E.__webglFramebuffer,N,0)}else if(Z){E.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[me]),E.__webglDepthbuffer[me]===void 0)E.__webglDepthbuffer[me]=s.createRenderbuffer(),Bt(E.__webglDepthbuffer[me],N,!1);else{const Se=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ye=E.__webglDepthbuffer[me];s.bindRenderbuffer(s.RENDERBUFFER,ye),s.framebufferRenderbuffer(s.FRAMEBUFFER,Se,s.RENDERBUFFER,ye)}}else{const me=N.texture.mipmaps;if(me&&me.length>0?i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Bt(E.__webglDepthbuffer,N,!1);else{const Se=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ye=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ye),s.framebufferRenderbuffer(s.FRAMEBUFFER,Se,s.RENDERBUFFER,ye)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function At(N,E,Z){const me=r.get(N);E!==void 0&&Ye(me.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Z!==void 0&&ut(N)}function Ie(N){const E=N.texture,Z=r.get(N),me=r.get(E);N.addEventListener("dispose",R);const Se=N.textures,ye=N.isWebGLCubeRenderTarget===!0,Ce=Se.length>1;if(Ce||(me.__webglTexture===void 0&&(me.__webglTexture=s.createTexture()),me.__version=E.version,d.memory.textures++),ye){Z.__webglFramebuffer=[];for(let re=0;re<6;re++)if(E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer[re]=[];for(let ce=0;ce<E.mipmaps.length;ce++)Z.__webglFramebuffer[re][ce]=s.createFramebuffer()}else Z.__webglFramebuffer[re]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer=[];for(let re=0;re<E.mipmaps.length;re++)Z.__webglFramebuffer[re]=s.createFramebuffer()}else Z.__webglFramebuffer=s.createFramebuffer();if(Ce)for(let re=0,ce=Se.length;re<ce;re++){const we=r.get(Se[re]);we.__webglTexture===void 0&&(we.__webglTexture=s.createTexture(),d.memory.textures++)}if(N.samples>0&&ht(N)===!1){Z.__webglMultisampledFramebuffer=s.createFramebuffer(),Z.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let re=0;re<Se.length;re++){const ce=Se[re];Z.__webglColorRenderbuffer[re]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Z.__webglColorRenderbuffer[re]);const we=c.convert(ce.format,ce.colorSpace),Ne=c.convert(ce.type),Te=O(ce.internalFormat,we,Ne,ce.normalized,ce.colorSpace,N.isXRRenderTarget===!0),Ee=Qt(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ee,Te,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+re,s.RENDERBUFFER,Z.__webglColorRenderbuffer[re])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(Z.__webglDepthRenderbuffer=s.createRenderbuffer(),Bt(Z.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ye){i.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),Ze(s.TEXTURE_CUBE_MAP,E);for(let re=0;re<6;re++)if(E.mipmaps&&E.mipmaps.length>0)for(let ce=0;ce<E.mipmaps.length;ce++)Ye(Z.__webglFramebuffer[re][ce],N,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+re,ce);else Ye(Z.__webglFramebuffer[re],N,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);_(E)&&D(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ce){for(let re=0,ce=Se.length;re<ce;re++){const we=Se[re],Ne=r.get(we);let Te=s.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Te=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Te,Ne.__webglTexture),Ze(Te,we),Ye(Z.__webglFramebuffer,N,we,s.COLOR_ATTACHMENT0+re,Te,0),_(we)&&D(Te)}i.unbindTexture()}else{let re=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(re=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(re,me.__webglTexture),Ze(re,E),E.mipmaps&&E.mipmaps.length>0)for(let ce=0;ce<E.mipmaps.length;ce++)Ye(Z.__webglFramebuffer[ce],N,E,s.COLOR_ATTACHMENT0,re,ce);else Ye(Z.__webglFramebuffer,N,E,s.COLOR_ATTACHMENT0,re,0);_(E)&&D(re),i.unbindTexture()}N.depthBuffer&&ut(N)}function rt(N){const E=N.textures;for(let Z=0,me=E.length;Z<me;Z++){const Se=E[Z];if(_(Se)){const ye=L(N),Ce=r.get(Se).__webglTexture;i.bindTexture(ye,Ce),D(ye),i.unbindTexture()}}}const xt=[],kt=[];function k(N){if(N.samples>0){if(ht(N)===!1){const E=N.textures,Z=N.width,me=N.height;let Se=s.COLOR_BUFFER_BIT;const ye=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ce=r.get(N),re=E.length>1;if(re)for(let we=0;we<E.length;we++)i.bindFramebuffer(s.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Ce.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer);const ce=N.texture.mipmaps;ce&&ce.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let we=0;we<E.length;we++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(Se|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(Se|=s.STENCIL_BUFFER_BIT)),re){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ce.__webglColorRenderbuffer[we]);const Ne=r.get(E[we]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ne,0)}s.blitFramebuffer(0,0,Z,me,0,0,Z,me,Se,s.NEAREST),p===!0&&(xt.length=0,kt.length=0,xt.push(s.COLOR_ATTACHMENT0+we),N.depthBuffer&&N.resolveDepthBuffer===!1&&(xt.push(ye),kt.push(ye),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,kt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,xt))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),re)for(let we=0;we<E.length;we++){i.bindFramebuffer(s.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,Ce.__webglColorRenderbuffer[we]);const Ne=r.get(E[we]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Ce.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.TEXTURE_2D,Ne,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&p){const E=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function Qt(N){return Math.min(o.maxSamples,N.samples)}function ht(N){const E=r.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function jt(N){const E=d.render.frame;M.get(N)!==E&&(M.set(N,E),N.update())}function be(N,E){const Z=N.colorSpace,me=N.format,Se=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||Z!==Gr&&Z!==Wi&&(Et.getTransfer(Z)===Vt?(me!==Pi||Se!==Gn)&&nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Rt("WebGLTextures: Unsupported texture color space:",Z)),E}function en(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(m.width=N.naturalWidth||N.width,m.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(m.width=N.displayWidth,m.height=N.displayHeight):(m.width=N.width,m.height=N.height),m}this.allocateTextureUnit=U,this.resetTextureUnits=oe,this.getTextureUnits=le,this.setTextureUnits=H,this.setTexture2D=ie,this.setTexture2DArray=de,this.setTexture3D=_e,this.setTextureCube=Ue,this.rebindTextures=At,this.setupRenderTarget=Ie,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=k,this.setupDepthRenderbuffer=ut,this.setupFrameBufferTexture=Ye,this.useMultisampledRTT=ht,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function ky(s,t){function i(r,o=Wi){let c;const d=Et.getTransfer(o);if(r===Gn)return s.UNSIGNED_BYTE;if(r===zh)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Hh)return s.UNSIGNED_SHORT_5_5_5_1;if(r===tv)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===nv)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===$1)return s.BYTE;if(r===ev)return s.SHORT;if(r===Kl)return s.UNSIGNED_SHORT;if(r===Ih)return s.INT;if(r===Zi)return s.UNSIGNED_INT;if(r===Oi)return s.FLOAT;if(r===Ea)return s.HALF_FLOAT;if(r===iv)return s.ALPHA;if(r===av)return s.RGB;if(r===Pi)return s.RGBA;if(r===Ta)return s.DEPTH_COMPONENT;if(r===os)return s.DEPTH_STENCIL;if(r===sv)return s.RED;if(r===Gh)return s.RED_INTEGER;if(r===Hs)return s.RG;if(r===Vh)return s.RG_INTEGER;if(r===kh)return s.RGBA_INTEGER;if(r===Fc||r===Ic||r===zc||r===Hc)if(d===Vt)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Fc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ic)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Hc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Fc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ic)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===zc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Hc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===th||r===nh||r===ih||r===ah)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===th)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===nh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ih)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ah)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===sh||r===rh||r===lh||r===oh||r===ch||r===kc||r===uh)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===sh||r===rh)return d===Vt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===lh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===oh)return c.COMPRESSED_R11_EAC;if(r===ch)return c.COMPRESSED_SIGNED_R11_EAC;if(r===kc)return c.COMPRESSED_RG11_EAC;if(r===uh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===fh||r===dh||r===hh||r===ph||r===mh||r===gh||r===vh||r===_h||r===xh||r===Sh||r===Mh||r===bh||r===yh||r===Eh)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===fh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===dh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===hh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ph)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===mh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===gh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===vh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===_h)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===xh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Sh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Mh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===bh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===yh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Eh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Th||r===Ah||r===Rh)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===Th)return d===Vt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ah)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Rh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ch||r===wh||r===jc||r===Dh)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===Ch)return c.COMPRESSED_RED_RGTC1_EXT;if(r===wh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===jc)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Dh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Hr?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const jy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Wy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new mv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Jn({vertexShader:jy,fragmentShader:Xy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Fi(new to(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class qy extends Aa{constructor(t,i){super();const r=this;let o=null,c=1,d=null,h="local-floor",p=1,m=null,M=null,x=null,v=null,b=null,T=null;const w=typeof XRWebGLBinding<"u",S=new Wy,_={},D=i.getContextAttributes();let L=null,O=null;const X=[],P=[],j=new pt;let R=null;const B=new yi;B.viewport=new pn;const Y=new yi;Y.viewport=new pn;const z=[B,Y],K=new n3;let oe=null,le=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(he){let De=X[he];return De===void 0&&(De=new _d,X[he]=De),De.getTargetRaySpace()},this.getControllerGrip=function(he){let De=X[he];return De===void 0&&(De=new _d,X[he]=De),De.getGripSpace()},this.getHand=function(he){let De=X[he];return De===void 0&&(De=new _d,X[he]=De),De.getHandSpace()};function H(he){const De=P.indexOf(he.inputSource);if(De===-1)return;const ve=X[De];ve!==void 0&&(ve.update(he.inputSource,he.frame,m||d),ve.dispatchEvent({type:he.type,data:he.inputSource}))}function U(){o.removeEventListener("select",H),o.removeEventListener("selectstart",H),o.removeEventListener("selectend",H),o.removeEventListener("squeeze",H),o.removeEventListener("squeezestart",H),o.removeEventListener("squeezeend",H),o.removeEventListener("end",U),o.removeEventListener("inputsourceschange",I);for(let he=0;he<X.length;he++){const De=P[he];De!==null&&(P[he]=null,X[he].disconnect(De))}oe=null,le=null,S.reset();for(const he in _)delete _[he];t.setRenderTarget(L),b=null,v=null,x=null,o=null,O=null,Ze.stop(),r.isPresenting=!1,t.setPixelRatio(R),t.setSize(j.width,j.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(he){c=he,r.isPresenting===!0&&nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(he){h=he,r.isPresenting===!0&&nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(he){m=he},this.getBaseLayer=function(){return v!==null?v:b},this.getBinding=function(){return x===null&&w&&(x=new XRWebGLBinding(o,i)),x},this.getFrame=function(){return T},this.getSession=function(){return o},this.setSession=async function(he){if(o=he,o!==null){if(L=t.getRenderTarget(),o.addEventListener("select",H),o.addEventListener("selectstart",H),o.addEventListener("selectend",H),o.addEventListener("squeeze",H),o.addEventListener("squeezestart",H),o.addEventListener("squeezeend",H),o.addEventListener("end",U),o.addEventListener("inputsourceschange",I),D.xrCompatible!==!0&&await i.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(j),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,Ve=null,Je=null;D.depth&&(Je=D.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ve=D.stencil?os:Ta,Ve=D.stencil?Hr:Zi);const Ye={colorFormat:i.RGBA8,depthFormat:Je,scaleFactor:c};x=this.getBinding(),v=x.createProjectionLayer(Ye),o.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),O=new jn(v.textureWidth,v.textureHeight,{format:Pi,type:Gn,depthTexture:new Vs(v.textureWidth,v.textureHeight,Ve,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:D.stencil,colorSpace:t.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const ve={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:c};b=new XRWebGLLayer(o,i,ve),o.updateRenderState({baseLayer:b}),t.setPixelRatio(1),t.setSize(b.framebufferWidth,b.framebufferHeight,!1),O=new jn(b.framebufferWidth,b.framebufferHeight,{format:Pi,type:Gn,colorSpace:t.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(p),m=null,d=await o.requestReferenceSpace(h),Ze.setContext(o),Ze.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function I(he){for(let De=0;De<he.removed.length;De++){const ve=he.removed[De],Ve=P.indexOf(ve);Ve>=0&&(P[Ve]=null,X[Ve].disconnect(ve))}for(let De=0;De<he.added.length;De++){const ve=he.added[De];let Ve=P.indexOf(ve);if(Ve===-1){for(let Ye=0;Ye<X.length;Ye++)if(Ye>=P.length){P.push(ve),Ve=Ye;break}else if(P[Ye]===null){P[Ye]=ve,Ve=Ye;break}if(Ve===-1)break}const Je=X[Ve];Je&&Je.connect(ve)}}const ie=new ae,de=new ae;function _e(he,De,ve){ie.setFromMatrixPosition(De.matrixWorld),de.setFromMatrixPosition(ve.matrixWorld);const Ve=ie.distanceTo(de),Je=De.projectionMatrix.elements,Ye=ve.projectionMatrix.elements,Bt=Je[14]/(Je[10]-1),ct=Je[14]/(Je[10]+1),ut=(Je[9]+1)/Je[5],At=(Je[9]-1)/Je[5],Ie=(Je[8]-1)/Je[0],rt=(Ye[8]+1)/Ye[0],xt=Bt*Ie,kt=Bt*rt,k=Ve/(-Ie+rt),Qt=k*-Ie;if(De.matrixWorld.decompose(he.position,he.quaternion,he.scale),he.translateX(Qt),he.translateZ(k),he.matrixWorld.compose(he.position,he.quaternion,he.scale),he.matrixWorldInverse.copy(he.matrixWorld).invert(),Je[10]===-1)he.projectionMatrix.copy(De.projectionMatrix),he.projectionMatrixInverse.copy(De.projectionMatrixInverse);else{const ht=Bt+k,jt=ct+k,be=xt-Qt,en=kt+(Ve-Qt),N=ut*ct/jt*ht,E=At*ct/jt*ht;he.projectionMatrix.makePerspective(be,en,N,E,ht,jt),he.projectionMatrixInverse.copy(he.projectionMatrix).invert()}}function Ue(he,De){De===null?he.matrixWorld.copy(he.matrix):he.matrixWorld.multiplyMatrices(De.matrixWorld,he.matrix),he.matrixWorldInverse.copy(he.matrixWorld).invert()}this.updateCamera=function(he){if(o===null)return;let De=he.near,ve=he.far;S.texture!==null&&(S.depthNear>0&&(De=S.depthNear),S.depthFar>0&&(ve=S.depthFar)),K.near=Y.near=B.near=De,K.far=Y.far=B.far=ve,(oe!==K.near||le!==K.far)&&(o.updateRenderState({depthNear:K.near,depthFar:K.far}),oe=K.near,le=K.far),K.layers.mask=he.layers.mask|6,B.layers.mask=K.layers.mask&-5,Y.layers.mask=K.layers.mask&-3;const Ve=he.parent,Je=K.cameras;Ue(K,Ve);for(let Ye=0;Ye<Je.length;Ye++)Ue(Je[Ye],Ve);Je.length===2?_e(K,B,Y):K.projectionMatrix.copy(B.projectionMatrix),Re(he,K,Ve)};function Re(he,De,ve){ve===null?he.matrix.copy(De.matrixWorld):(he.matrix.copy(ve.matrixWorld),he.matrix.invert(),he.matrix.multiply(De.matrixWorld)),he.matrix.decompose(he.position,he.quaternion,he.scale),he.updateMatrixWorld(!0),he.projectionMatrix.copy(De.projectionMatrix),he.projectionMatrixInverse.copy(De.projectionMatrixInverse),he.isPerspectiveCamera&&(he.fov=Lh*2*Math.atan(1/he.projectionMatrix.elements[5]),he.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(v===null&&b===null))return p},this.setFoveation=function(he){p=he,v!==null&&(v.fixedFoveation=he),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=he)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(K)},this.getCameraTexture=function(he){return _[he]};let He=null;function et(he,De){if(M=De.getViewerPose(m||d),T=De,M!==null){const ve=M.views;b!==null&&(t.setRenderTargetFramebuffer(O,b.framebuffer),t.setRenderTarget(O));let Ve=!1;ve.length!==K.cameras.length&&(K.cameras.length=0,Ve=!0);for(let ct=0;ct<ve.length;ct++){const ut=ve[ct];let At=null;if(b!==null)At=b.getViewport(ut);else{const rt=x.getViewSubImage(v,ut);At=rt.viewport,ct===0&&(t.setRenderTargetTextures(O,rt.colorTexture,rt.depthStencilTexture),t.setRenderTarget(O))}let Ie=z[ct];Ie===void 0&&(Ie=new yi,Ie.layers.enable(ct),Ie.viewport=new pn,z[ct]=Ie),Ie.matrix.fromArray(ut.transform.matrix),Ie.matrix.decompose(Ie.position,Ie.quaternion,Ie.scale),Ie.projectionMatrix.fromArray(ut.projectionMatrix),Ie.projectionMatrixInverse.copy(Ie.projectionMatrix).invert(),Ie.viewport.set(At.x,At.y,At.width,At.height),ct===0&&(K.matrix.copy(Ie.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),Ve===!0&&K.cameras.push(Ie)}const Je=o.enabledFeatures;if(Je&&Je.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&w){x=r.getBinding();const ct=x.getDepthInformation(ve[0]);ct&&ct.isValid&&ct.texture&&S.init(ct,o.renderState)}if(Je&&Je.includes("camera-access")&&w){t.state.unbindTexture(),x=r.getBinding();for(let ct=0;ct<ve.length;ct++){const ut=ve[ct].camera;if(ut){let At=_[ut];At||(At=new mv,_[ut]=At);const Ie=x.getCameraImage(ut);At.sourceTexture=Ie}}}}for(let ve=0;ve<X.length;ve++){const Ve=P[ve],Je=X[ve];Ve!==null&&Je!==void 0&&Je.update(Ve,De,m||d)}He&&He(he,De),De.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:De}),T=null}const Ze=new _v;Ze.setAnimationLoop(et),this.setAnimationLoop=function(he){He=he},this.dispose=function(){}}}const Yy=new yn,Tv=new st;Tv.set(-1,0,0,0,1,0,0,0,1);function Zy(s,t){function i(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function r(S,_){_.color.getRGB(S.fogColor.value,gv(s)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function o(S,_,D,L,O){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?c(S,_):_.isMeshLambertMaterial?(c(S,_),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(c(S,_),x(S,_)):_.isMeshPhongMaterial?(c(S,_),M(S,_),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(c(S,_),v(S,_),_.isMeshPhysicalMaterial&&b(S,_,O)):_.isMeshMatcapMaterial?(c(S,_),T(S,_)):_.isMeshDepthMaterial?c(S,_):_.isMeshDistanceMaterial?(c(S,_),w(S,_)):_.isMeshNormalMaterial?c(S,_):_.isLineBasicMaterial?(d(S,_),_.isLineDashedMaterial&&h(S,_)):_.isPointsMaterial?p(S,_,D,L):_.isSpriteMaterial?m(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,i(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===wn&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,i(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===wn&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,i(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,i(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const D=t.get(_),L=D.envMap,O=D.envMapRotation;L&&(S.envMap.value=L,S.envMapRotation.value.setFromMatrix4(Yy.makeRotationFromEuler(O)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(Tv),S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,S.aoMapTransform))}function d(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform))}function h(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function p(S,_,D,L){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*D,S.scale.value=L*.5,_.map&&(S.map.value=_.map,i(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function m(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function M(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function x(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function v(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function b(S,_,D){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===wn&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=D.texture,S.transmissionSamplerSize.value.set(D.width,D.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,S.specularIntensityMapTransform))}function T(S,_){_.matcap&&(S.matcap.value=_.matcap)}function w(S,_){const D=t.get(_).light;S.referencePosition.value.setFromMatrixPosition(D.matrixWorld),S.nearDistance.value=D.shadow.camera.near,S.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function Ky(s,t,i,r){let o={},c={},d=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(D,L){const O=L.program;r.uniformBlockBinding(D,O)}function m(D,L){let O=o[D.id];O===void 0&&(T(D),O=M(D),o[D.id]=O,D.addEventListener("dispose",S));const X=L.program;r.updateUBOMapping(D,X);const P=t.render.frame;c[D.id]!==P&&(v(D),c[D.id]=P)}function M(D){const L=x();D.__bindingPointIndex=L;const O=s.createBuffer(),X=D.__size,P=D.usage;return s.bindBuffer(s.UNIFORM_BUFFER,O),s.bufferData(s.UNIFORM_BUFFER,X,P),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,O),O}function x(){for(let D=0;D<h;D++)if(d.indexOf(D)===-1)return d.push(D),D;return Rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(D){const L=o[D.id],O=D.uniforms,X=D.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let P=0,j=O.length;P<j;P++){const R=Array.isArray(O[P])?O[P]:[O[P]];for(let B=0,Y=R.length;B<Y;B++){const z=R[B];if(b(z,P,B,X)===!0){const K=z.__offset,oe=Array.isArray(z.value)?z.value:[z.value];let le=0;for(let H=0;H<oe.length;H++){const U=oe[H],I=w(U);typeof U=="number"||typeof U=="boolean"?(z.__data[0]=U,s.bufferSubData(s.UNIFORM_BUFFER,K+le,z.__data)):U.isMatrix3?(z.__data[0]=U.elements[0],z.__data[1]=U.elements[1],z.__data[2]=U.elements[2],z.__data[3]=0,z.__data[4]=U.elements[3],z.__data[5]=U.elements[4],z.__data[6]=U.elements[5],z.__data[7]=0,z.__data[8]=U.elements[6],z.__data[9]=U.elements[7],z.__data[10]=U.elements[8],z.__data[11]=0):ArrayBuffer.isView(U)?z.__data.set(new U.constructor(U.buffer,U.byteOffset,z.__data.length)):(U.toArray(z.__data,le),le+=I.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,K,z.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function b(D,L,O,X){const P=D.value,j=L+"_"+O;if(X[j]===void 0)return typeof P=="number"||typeof P=="boolean"?X[j]=P:ArrayBuffer.isView(P)?X[j]=P.slice():X[j]=P.clone(),!0;{const R=X[j];if(typeof P=="number"||typeof P=="boolean"){if(R!==P)return X[j]=P,!0}else{if(ArrayBuffer.isView(P))return!0;if(R.equals(P)===!1)return R.copy(P),!0}}return!1}function T(D){const L=D.uniforms;let O=0;const X=16;for(let j=0,R=L.length;j<R;j++){const B=Array.isArray(L[j])?L[j]:[L[j]];for(let Y=0,z=B.length;Y<z;Y++){const K=B[Y],oe=Array.isArray(K.value)?K.value:[K.value];for(let le=0,H=oe.length;le<H;le++){const U=oe[le],I=w(U),ie=O%X,de=ie%I.boundary,_e=ie+de;O+=de,_e!==0&&X-_e<I.storage&&(O+=X-_e),K.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=O,O+=I.storage}}}const P=O%X;return P>0&&(O+=X-P),D.__size=O,D.__cache={},this}function w(D){const L={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(L.boundary=4,L.storage=4):D.isVector2?(L.boundary=8,L.storage=8):D.isVector3||D.isColor?(L.boundary=16,L.storage=12):D.isVector4?(L.boundary=16,L.storage=16):D.isMatrix3?(L.boundary=48,L.storage=48):D.isMatrix4?(L.boundary=64,L.storage=64):D.isTexture?nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(D)?(L.boundary=16,L.storage=D.byteLength):nt("WebGLRenderer: Unsupported uniform value type.",D),L}function S(D){const L=D.target;L.removeEventListener("dispose",S);const O=d.indexOf(L.__bindingPointIndex);d.splice(O,1),s.deleteBuffer(o[L.id]),delete o[L.id],delete c[L.id]}function _(){for(const D in o)s.deleteBuffer(o[D]);d=[],o={},c={}}return{bind:p,update:m,dispose:_}}const Qy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ji=null;function Jy(){return ji===null&&(ji=new k2(Qy,16,16,Hs,Ea),ji.name="DFG_LUT",ji.minFilter=on,ji.magFilter=on,ji.wrapS=Sa,ji.wrapT=Sa,ji.generateMipmaps=!1,ji.needsUpdate=!0),ji}class $y{constructor(t={}){const{canvas:i=S2(),context:r=null,depth:o=!0,stencil:c=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:M="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:v=!1,outputBufferType:b=Gn}=t;this.isWebGLRenderer=!0;let T;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=r.getContextAttributes().alpha}else T=d;const w=b,S=new Set([kh,Vh,Gh]),_=new Set([Gn,Zi,Kl,Hr,zh,Hh]),D=new Uint32Array(4),L=new Int32Array(4),O=new ae;let X=null,P=null;const j=[],R=[];let B=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const Y=this;let z=!1,K=null;this._outputColorSpace=hn;let oe=0,le=0,H=null,U=-1,I=null;const ie=new pn,de=new pn;let _e=null;const Ue=new Pt(0);let Re=0,He=i.width,et=i.height,Ze=1,he=null,De=null;const ve=new pn(0,0,He,et),Ve=new pn(0,0,He,et);let Je=!1;const Ye=new hv;let Bt=!1,ct=!1;const ut=new yn,At=new ae,Ie=new pn,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xt=!1;function kt(){return H===null?Ze:1}let k=r;function Qt(A,W){return i.getContext(A,W)}try{const A={alpha:!0,depth:o,stencil:c,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:M,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Zc}`),i.addEventListener("webglcontextlost",xe,!1),i.addEventListener("webglcontextrestored",Xe,!1),i.addEventListener("webglcontextcreationerror",tt,!1),k===null){const W="webgl2";if(k=Qt(W,A),k===null)throw Qt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Rt("WebGLRenderer: "+A.message),A}let ht,jt,be,en,N,E,Z,me,Se,ye,Ce,re,ce,we,Ne,Te,Ee,it,at,mt,G,Me,fe;function Pe(){ht=new JM(k),ht.init(),G=new ky(k,ht),jt=new jM(k,ht,t,G),be=new Gy(k,ht),jt.reversedDepthBuffer&&v&&be.buffers.depth.setReversed(!0),en=new tb(k),N=new Ry,E=new Vy(k,ht,be,N,jt,G,en),Z=new QM(Y),me=new s3(k),Me=new VM(k,me),Se=new $M(k,me,en,Me),ye=new ib(k,Se,me,Me,en),it=new nb(k,jt,E),Ne=new XM(N),Ce=new Ay(Y,Z,ht,jt,Me,Ne),re=new Zy(Y,N),ce=new wy,we=new Py(ht),Ee=new GM(Y,Z,be,ye,T,p),Te=new Hy(Y,ye,jt),fe=new Ky(k,en,jt,be),at=new kM(k,ht,en),mt=new eb(k,ht,en),en.programs=Ce.programs,Y.capabilities=jt,Y.extensions=ht,Y.properties=N,Y.renderLists=ce,Y.shadowMap=Te,Y.state=be,Y.info=en}Pe(),w!==Gn&&(B=new sb(w,i.width,i.height,o,c));const Ae=new qy(Y,k);this.xr=Ae,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const A=ht.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ht.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Ze},this.setPixelRatio=function(A){A!==void 0&&(Ze=A,this.setSize(He,et,!1))},this.getSize=function(A){return A.set(He,et)},this.setSize=function(A,W,te=!0){if(Ae.isPresenting){nt("WebGLRenderer: Can't change size while VR device is presenting.");return}He=A,et=W,i.width=Math.floor(A*Ze),i.height=Math.floor(W*Ze),te===!0&&(i.style.width=A+"px",i.style.height=W+"px"),B!==null&&B.setSize(i.width,i.height),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(He*Ze,et*Ze).floor()},this.setDrawingBufferSize=function(A,W,te){He=A,et=W,Ze=te,i.width=Math.floor(A*te),i.height=Math.floor(W*te),this.setViewport(0,0,A,W)},this.setEffects=function(A){if(w===Gn){Rt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let W=0;W<A.length;W++)if(A[W].isOutputPass===!0){nt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}B.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(ie)},this.getViewport=function(A){return A.copy(ve)},this.setViewport=function(A,W,te,$){A.isVector4?ve.set(A.x,A.y,A.z,A.w):ve.set(A,W,te,$),be.viewport(ie.copy(ve).multiplyScalar(Ze).round())},this.getScissor=function(A){return A.copy(Ve)},this.setScissor=function(A,W,te,$){A.isVector4?Ve.set(A.x,A.y,A.z,A.w):Ve.set(A,W,te,$),be.scissor(de.copy(Ve).multiplyScalar(Ze).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(A){be.setScissorTest(Je=A)},this.setOpaqueSort=function(A){he=A},this.setTransparentSort=function(A){De=A},this.getClearColor=function(A){return A.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(A=!0,W=!0,te=!0){let $=0;if(A){let ee=!1;if(H!==null){const Oe=H.texture.format;ee=S.has(Oe)}if(ee){const Oe=H.texture.type,ze=_.has(Oe),Le=Ee.getClearColor(),ke=Ee.getClearAlpha(),Ge=Le.r,Ke=Le.g,lt=Le.b;ze?(D[0]=Ge,D[1]=Ke,D[2]=lt,D[3]=ke,k.clearBufferuiv(k.COLOR,0,D)):(L[0]=Ge,L[1]=Ke,L[2]=lt,L[3]=ke,k.clearBufferiv(k.COLOR,0,L))}else $|=k.COLOR_BUFFER_BIT}W&&($|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),te&&($|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&k.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),K=A},this.dispose=function(){i.removeEventListener("webglcontextlost",xe,!1),i.removeEventListener("webglcontextrestored",Xe,!1),i.removeEventListener("webglcontextcreationerror",tt,!1),Ee.dispose(),ce.dispose(),we.dispose(),N.dispose(),Z.dispose(),ye.dispose(),Me.dispose(),fe.dispose(),Ce.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",qr),Ae.removeEventListener("sessionend",Yr),Fn.stop()};function xe(A){A.preventDefault(),Xg("WebGLRenderer: Context Lost."),z=!0}function Xe(){Xg("WebGLRenderer: Context Restored."),z=!1;const A=en.autoReset,W=Te.enabled,te=Te.autoUpdate,$=Te.needsUpdate,ee=Te.type;Pe(),en.autoReset=A,Te.enabled=W,Te.autoUpdate=te,Te.needsUpdate=$,Te.type=ee}function tt(A){Rt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function sn(A){const W=A.target;W.removeEventListener("dispose",sn),Ut(W)}function Ut(A){hi(A),N.remove(A)}function hi(A){const W=N.get(A).programs;W!==void 0&&(W.forEach(function(te){Ce.releaseProgram(te)}),A.isShaderMaterial&&Ce.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,te,$,ee,Oe){W===null&&(W=rt);const ze=ee.isMesh&&ee.matrixWorld.determinant()<0,Le=wa(A,W,te,$,ee);be.setMaterial($,ze);let ke=te.index,Ge=1;if($.wireframe===!0){if(ke=Se.getWireframeAttribute(te),ke===void 0)return;Ge=2}const Ke=te.drawRange,lt=te.attributes.position;let qe=Ke.start*Ge,Ct=(Ke.start+Ke.count)*Ge;Oe!==null&&(qe=Math.max(qe,Oe.start*Ge),Ct=Math.min(Ct,(Oe.start+Oe.count)*Ge)),ke!==null?(qe=Math.max(qe,0),Ct=Math.min(Ct,ke.count)):lt!=null&&(qe=Math.max(qe,0),Ct=Math.min(Ct,lt.count));const tn=Ct-qe;if(tn<0||tn===1/0)return;Me.setup(ee,$,Le,te,ke);let Zt,Ft=at;if(ke!==null&&(Zt=me.get(ke),Ft=mt,Ft.setIndex(Zt)),ee.isMesh)$.wireframe===!0?(be.setLineWidth($.wireframeLinewidth*kt()),Ft.setMode(k.LINES)):Ft.setMode(k.TRIANGLES);else if(ee.isLine){let It=$.linewidth;It===void 0&&(It=1),be.setLineWidth(It*kt()),ee.isLineSegments?Ft.setMode(k.LINES):ee.isLineLoop?Ft.setMode(k.LINE_LOOP):Ft.setMode(k.LINE_STRIP)}else ee.isPoints?Ft.setMode(k.POINTS):ee.isSprite&&Ft.setMode(k.TRIANGLES);if(ee.isBatchedMesh)if(ht.get("WEBGL_multi_draw"))Ft.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{const It=ee._multiDrawStarts,Fe=ee._multiDrawCounts,In=ee._multiDrawCount,gt=ke?me.get(ke).bytesPerElement:1,Mn=N.get($).currentProgram.getUniforms();for(let ei=0;ei<In;ei++)Mn.setValue(k,"_gl_DrawID",ei),Ft.render(It[ei]/gt,Fe[ei])}else if(ee.isInstancedMesh)Ft.renderInstances(qe,tn,ee.count);else if(te.isInstancedBufferGeometry){const It=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Fe=Math.min(te.instanceCount,It);Ft.renderInstances(qe,tn,Fe)}else Ft.render(qe,tn)};function $n(A,W,te){A.transparent===!0&&A.side===fi&&A.forceSinglePass===!1?(A.side=wn,A.needsUpdate=!0,ks(A,W,te),A.side=ya,A.needsUpdate=!0,ks(A,W,te),A.side=fi):ks(A,W,te)}this.compile=function(A,W,te=null){te===null&&(te=A),P=we.get(te),P.init(W),R.push(P),te.traverseVisible(function(ee){ee.isLight&&ee.layers.test(W.layers)&&(P.pushLight(ee),ee.castShadow&&P.pushShadow(ee))}),A!==te&&A.traverseVisible(function(ee){ee.isLight&&ee.layers.test(W.layers)&&(P.pushLight(ee),ee.castShadow&&P.pushShadow(ee))}),P.setupLights();const $=new Set;return A.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;const Oe=ee.material;if(Oe)if(Array.isArray(Oe))for(let ze=0;ze<Oe.length;ze++){const Le=Oe[ze];$n(Le,te,ee),$.add(Le)}else $n(Oe,te,ee),$.add(Oe)}),P=R.pop(),$},this.compileAsync=function(A,W,te=null){const $=this.compile(A,W,te);return new Promise(ee=>{function Oe(){if($.forEach(function(ze){N.get(ze).currentProgram.isReady()&&$.delete(ze)}),$.size===0){ee(A);return}setTimeout(Oe,10)}ht.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let fs=null;function Wr(A){fs&&fs(A)}function qr(){Fn.stop()}function Yr(){Fn.start()}const Fn=new _v;Fn.setAnimationLoop(Wr),typeof self<"u"&&Fn.setContext(self),this.setAnimationLoop=function(A){fs=A,Ae.setAnimationLoop(A),A===null?Fn.stop():Fn.start()},Ae.addEventListener("sessionstart",qr),Ae.addEventListener("sessionend",Yr),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){Rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;K!==null&&K.renderStart(A,W);const te=Ae.enabled===!0&&Ae.isPresenting===!0,$=B!==null&&(H===null||te)&&B.begin(Y,H);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(B===null||B.isCompositing()===!1)&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(W),W=Ae.getCamera()),A.isScene===!0&&A.onBeforeRender(Y,A,W,H),P=we.get(A,R.length),P.init(W),P.state.textureUnits=E.getTextureUnits(),R.push(P),ut.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Ye.setFromProjectionMatrix(ut,qi,W.reversedDepth),ct=this.localClippingEnabled,Bt=Ne.init(this.clippingPlanes,ct),X=ce.get(A,j.length),X.init(),j.push(X),Ae.enabled===!0&&Ae.isPresenting===!0){const ze=Y.xr.getDepthSensingMesh();ze!==null&&cn(ze,W,-1/0,Y.sortObjects)}cn(A,W,0,Y.sortObjects),X.finish(),Y.sortObjects===!0&&X.sort(he,De),xt=Ae.enabled===!1||Ae.isPresenting===!1||Ae.hasDepthSensing()===!1,xt&&Ee.addToRenderList(X,A),this.info.render.frame++,Bt===!0&&Ne.beginShadows();const ee=P.state.shadowsArray;if(Te.render(ee,A,W),Bt===!0&&Ne.endShadows(),this.info.autoReset===!0&&this.info.reset(),($&&B.hasRenderPass())===!1){const ze=X.opaque,Le=X.transmissive;if(P.setupLights(),W.isArrayCamera){const ke=W.cameras;if(Le.length>0)for(let Ge=0,Ke=ke.length;Ge<Ke;Ge++){const lt=ke[Ge];Qi(ze,Le,A,lt)}xt&&Ee.render(A);for(let Ge=0,Ke=ke.length;Ge<Ke;Ge++){const lt=ke[Ge];Nn(X,A,lt,lt.viewport)}}else Le.length>0&&Qi(ze,Le,A,W),xt&&Ee.render(A),Nn(X,A,W)}H!==null&&le===0&&(E.updateMultisampleRenderTarget(H),E.updateRenderTargetMipmap(H)),$&&B.end(Y),A.isScene===!0&&A.onAfterRender(Y,A,W),Me.resetDefaultState(),U=-1,I=null,R.pop(),R.length>0?(P=R[R.length-1],E.setTextureUnits(P.state.textureUnits),Bt===!0&&Ne.setGlobalState(Y.clippingPlanes,P.state.camera)):P=null,j.pop(),j.length>0?X=j[j.length-1]:X=null,K!==null&&K.renderEnd()};function cn(A,W,te,$){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)te=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLightProbeGrid)P.pushLightProbeGrid(A);else if(A.isLight)P.pushLight(A),A.castShadow&&P.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ye.intersectsSprite(A)){$&&Ie.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ut);const ze=ye.update(A),Le=A.material;Le.visible&&X.push(A,ze,Le,te,Ie.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ye.intersectsObject(A))){const ze=ye.update(A),Le=A.material;if($&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ie.copy(A.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),Ie.copy(ze.boundingSphere.center)),Ie.applyMatrix4(A.matrixWorld).applyMatrix4(ut)),Array.isArray(Le)){const ke=ze.groups;for(let Ge=0,Ke=ke.length;Ge<Ke;Ge++){const lt=ke[Ge],qe=Le[lt.materialIndex];qe&&qe.visible&&X.push(A,ze,qe,te,Ie.z,lt)}}else Le.visible&&X.push(A,ze,Le,te,Ie.z,null)}}const Oe=A.children;for(let ze=0,Le=Oe.length;ze<Le;ze++)cn(Oe[ze],W,te,$)}function Nn(A,W,te,$){const{opaque:ee,transmissive:Oe,transparent:ze}=A;P.setupLightsView(te),Bt===!0&&Ne.setGlobalState(Y.clippingPlanes,te),$&&be.viewport(ie.copy($)),ee.length>0&&Ra(ee,W,te),Oe.length>0&&Ra(Oe,W,te),ze.length>0&&Ra(ze,W,te),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function Qi(A,W,te,$){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[$.id]===void 0){const qe=ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[$.id]=new jn(1,1,{generateMipmaps:!0,type:qe?Ea:Gn,minFilter:Fs,samples:Math.max(4,jt.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace})}const Oe=P.state.transmissionRenderTarget[$.id],ze=$.viewport||ie;Oe.setSize(ze.z*Y.transmissionResolutionScale,ze.w*Y.transmissionResolutionScale);const Le=Y.getRenderTarget(),ke=Y.getActiveCubeFace(),Ge=Y.getActiveMipmapLevel();Y.setRenderTarget(Oe),Y.getClearColor(Ue),Re=Y.getClearAlpha(),Re<1&&Y.setClearColor(16777215,.5),Y.clear(),xt&&Ee.render(te);const Ke=Y.toneMapping;Y.toneMapping=Yi;const lt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),P.setupLightsView($),Bt===!0&&Ne.setGlobalState(Y.clippingPlanes,$),Ra(A,te,$),E.updateMultisampleRenderTarget(Oe),E.updateRenderTargetMipmap(Oe),ht.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let Ct=0,tn=W.length;Ct<tn;Ct++){const Zt=W[Ct],{object:Ft,geometry:It,material:Fe,group:In}=Zt;if(Fe.side===fi&&Ft.layers.test($.layers)){const gt=Fe.side;Fe.side=wn,Fe.needsUpdate=!0,no(Ft,te,$,It,Fe,In),Fe.side=gt,Fe.needsUpdate=!0,qe=!0}}qe===!0&&(E.updateMultisampleRenderTarget(Oe),E.updateRenderTargetMipmap(Oe))}Y.setRenderTarget(Le,ke,Ge),Y.setClearColor(Ue,Re),lt!==void 0&&($.viewport=lt),Y.toneMapping=Ke}function Ra(A,W,te){const $=W.isScene===!0?W.overrideMaterial:null;for(let ee=0,Oe=A.length;ee<Oe;ee++){const ze=A[ee],{object:Le,geometry:ke,group:Ge}=ze;let Ke=ze.material;Ke.allowOverride===!0&&$!==null&&(Ke=$),Le.layers.test(te.layers)&&no(Le,W,te,ke,Ke,Ge)}}function no(A,W,te,$,ee,Oe){A.onBeforeRender(Y,W,te,$,ee,Oe),A.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ee.onBeforeRender(Y,W,te,$,A,Oe),ee.transparent===!0&&ee.side===fi&&ee.forceSinglePass===!1?(ee.side=wn,ee.needsUpdate=!0,Y.renderBufferDirect(te,W,$,ee,A,Oe),ee.side=ya,ee.needsUpdate=!0,Y.renderBufferDirect(te,W,$,ee,A,Oe),ee.side=fi):Y.renderBufferDirect(te,W,$,ee,A,Oe),A.onAfterRender(Y,W,te,$,ee,Oe)}function ks(A,W,te){W.isScene!==!0&&(W=rt);const $=N.get(A),ee=P.state.lights,Oe=P.state.shadowsArray,ze=ee.state.version,Le=Ce.getParameters(A,ee.state,Oe,W,te,P.state.lightProbeGridArray),ke=Ce.getProgramCacheKey(Le);let Ge=$.programs;$.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?W.environment:null,$.fog=W.fog;const Ke=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;$.envMap=Z.get(A.envMap||$.environment,Ke),$.envMapRotation=$.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,Ge===void 0&&(A.addEventListener("dispose",sn),Ge=new Map,$.programs=Ge);let lt=Ge.get(ke);if(lt!==void 0){if($.currentProgram===lt&&$.lightsStateVersion===ze)return Ca(A,Le),lt}else Le.uniforms=Ce.getUniforms(A),K!==null&&A.isNodeMaterial&&K.build(A,te,Le),A.onBeforeCompile(Le,Y),lt=Ce.acquireProgram(Le,ke),Ge.set(ke,lt),$.uniforms=Le.uniforms;const qe=$.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(qe.clippingPlanes=Ne.uniform),Ca(A,Le),$.needsLights=ds(A),$.lightsStateVersion=ze,$.needsLights&&(qe.ambientLightColor.value=ee.state.ambient,qe.lightProbe.value=ee.state.probe,qe.directionalLights.value=ee.state.directional,qe.directionalLightShadows.value=ee.state.directionalShadow,qe.spotLights.value=ee.state.spot,qe.spotLightShadows.value=ee.state.spotShadow,qe.rectAreaLights.value=ee.state.rectArea,qe.ltc_1.value=ee.state.rectAreaLTC1,qe.ltc_2.value=ee.state.rectAreaLTC2,qe.pointLights.value=ee.state.point,qe.pointLightShadows.value=ee.state.pointShadow,qe.hemisphereLights.value=ee.state.hemi,qe.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,qe.spotLightMatrix.value=ee.state.spotLightMatrix,qe.spotLightMap.value=ee.state.spotLightMap,qe.pointShadowMatrix.value=ee.state.pointShadowMatrix),$.lightProbeGrid=P.state.lightProbeGridArray.length>0,$.currentProgram=lt,$.uniformsList=null,lt}function Zr(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=Gc.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function Ca(A,W){const te=N.get(A);te.outputColorSpace=W.outputColorSpace,te.batching=W.batching,te.batchingColor=W.batchingColor,te.instancing=W.instancing,te.instancingColor=W.instancingColor,te.instancingMorph=W.instancingMorph,te.skinning=W.skinning,te.morphTargets=W.morphTargets,te.morphNormals=W.morphNormals,te.morphColors=W.morphColors,te.morphTargetsCount=W.morphTargetsCount,te.numClippingPlanes=W.numClippingPlanes,te.numIntersection=W.numClipIntersection,te.vertexAlphas=W.vertexAlphas,te.vertexTangents=W.vertexTangents,te.toneMapping=W.toneMapping}function Kr(A,W){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;O.setFromMatrixPosition(W.matrixWorld);for(let te=0,$=A.length;te<$;te++){const ee=A[te];if(ee.texture!==null&&ee.boundingBox.containsPoint(O))return ee}return null}function wa(A,W,te,$,ee){W.isScene!==!0&&(W=rt),E.resetTextureUnits();const Oe=W.fog,ze=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?W.environment:null,Le=H===null?Y.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Et.workingColorSpace,ke=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,Ge=Z.get($.envMap||ze,ke),Ke=$.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,lt=!!te.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),qe=!!te.morphAttributes.position,Ct=!!te.morphAttributes.normal,tn=!!te.morphAttributes.color;let Zt=Yi;$.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Zt=Y.toneMapping);const Ft=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,It=Ft!==void 0?Ft.length:0,Fe=N.get($),In=P.state.lights;if(Bt===!0&&(ct===!0||A!==I)){const Ot=A===I&&$.id===U;Ne.setState($,A,Ot)}let gt=!1;$.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==In.state.version||Fe.outputColorSpace!==Le||ee.isBatchedMesh&&Fe.batching===!1||!ee.isBatchedMesh&&Fe.batching===!0||ee.isBatchedMesh&&Fe.batchingColor===!0&&ee.colorTexture===null||ee.isBatchedMesh&&Fe.batchingColor===!1&&ee.colorTexture!==null||ee.isInstancedMesh&&Fe.instancing===!1||!ee.isInstancedMesh&&Fe.instancing===!0||ee.isSkinnedMesh&&Fe.skinning===!1||!ee.isSkinnedMesh&&Fe.skinning===!0||ee.isInstancedMesh&&Fe.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&Fe.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&Fe.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&Fe.instancingMorph===!1&&ee.morphTexture!==null||Fe.envMap!==Ge||$.fog===!0&&Fe.fog!==Oe||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==Ne.numPlanes||Fe.numIntersection!==Ne.numIntersection)||Fe.vertexAlphas!==Ke||Fe.vertexTangents!==lt||Fe.morphTargets!==qe||Fe.morphNormals!==Ct||Fe.morphColors!==tn||Fe.toneMapping!==Zt||Fe.morphTargetsCount!==It||!!Fe.lightProbeGrid!=P.state.lightProbeGridArray.length>0)&&(gt=!0):(gt=!0,Fe.__version=$.version);let Mn=Fe.currentProgram;gt===!0&&(Mn=ks($,W,ee),K&&$.isNodeMaterial&&K.onUpdateProgram($,Mn,Fe));let ei=!1,Ti=!1,ti=!1;const zt=Mn.getUniforms(),nn=Fe.uniforms;if(be.useProgram(Mn.program)&&(ei=!0,Ti=!0,ti=!0),$.id!==U&&(U=$.id,Ti=!0),Fe.needsLights){const Ot=Kr(P.state.lightProbeGridArray,ee);Fe.lightProbeGrid!==Ot&&(Fe.lightProbeGrid=Ot,Ti=!0)}if(ei||I!==A){be.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),zt.setValue(k,"projectionMatrix",A.projectionMatrix),zt.setValue(k,"viewMatrix",A.matrixWorldInverse);const Ii=zt.map.cameraPosition;Ii!==void 0&&Ii.setValue(k,At.setFromMatrixPosition(A.matrixWorld)),jt.logarithmicDepthBuffer&&zt.setValue(k,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&zt.setValue(k,"isOrthographic",A.isOrthographicCamera===!0),I!==A&&(I=A,Ti=!0,ti=!0)}if(Fe.needsLights&&(In.state.directionalShadowMap.length>0&&zt.setValue(k,"directionalShadowMap",In.state.directionalShadowMap,E),In.state.spotShadowMap.length>0&&zt.setValue(k,"spotShadowMap",In.state.spotShadowMap,E),In.state.pointShadowMap.length>0&&zt.setValue(k,"pointShadowMap",In.state.pointShadowMap,E)),ee.isSkinnedMesh){zt.setOptional(k,ee,"bindMatrix"),zt.setOptional(k,ee,"bindMatrixInverse");const Ot=ee.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),zt.setValue(k,"boneTexture",Ot.boneTexture,E))}ee.isBatchedMesh&&(zt.setOptional(k,ee,"batchingTexture"),zt.setValue(k,"batchingTexture",ee._matricesTexture,E),zt.setOptional(k,ee,"batchingIdTexture"),zt.setValue(k,"batchingIdTexture",ee._indirectTexture,E),zt.setOptional(k,ee,"batchingColorTexture"),ee._colorsTexture!==null&&zt.setValue(k,"batchingColorTexture",ee._colorsTexture,E));const Ai=te.morphAttributes;if((Ai.position!==void 0||Ai.normal!==void 0||Ai.color!==void 0)&&it.update(ee,te,Mn),(Ti||Fe.receiveShadow!==ee.receiveShadow)&&(Fe.receiveShadow=ee.receiveShadow,zt.setValue(k,"receiveShadow",ee.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&W.environment!==null&&(nn.envMapIntensity.value=W.environmentIntensity),nn.dfgLUT!==void 0&&(nn.dfgLUT.value=Jy()),Ti){if(zt.setValue(k,"toneMappingExposure",Y.toneMappingExposure),Fe.needsLights&&Da(nn,ti),Oe&&$.fog===!0&&re.refreshFogUniforms(nn,Oe),re.refreshMaterialUniforms(nn,$,Ze,et,P.state.transmissionRenderTarget[A.id]),Fe.needsLights&&Fe.lightProbeGrid){const Ot=Fe.lightProbeGrid;nn.probesSH.value=Ot.texture,nn.probesMin.value.copy(Ot.boundingBox.min),nn.probesMax.value.copy(Ot.boundingBox.max),nn.probesResolution.value.copy(Ot.resolution)}Gc.upload(k,Zr(Fe),nn,E)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Gc.upload(k,Zr(Fe),nn,E),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&zt.setValue(k,"center",ee.center),zt.setValue(k,"modelViewMatrix",ee.modelViewMatrix),zt.setValue(k,"normalMatrix",ee.normalMatrix),zt.setValue(k,"modelMatrix",ee.matrixWorld),$.uniformsGroups!==void 0){const Ot=$.uniformsGroups;for(let Ii=0,Ua=Ot.length;Ii<Ua;Ii++){const hs=Ot[Ii];fe.update(hs,Mn),fe.bind(hs,Mn)}}return Mn}function Da(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function ds(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return oe},this.getActiveMipmapLevel=function(){return le},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(A,W,te){const $=N.get(A);$.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),N.get(A.texture).__webglTexture=W,N.get(A.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:te,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,W){const te=N.get(A);te.__webglFramebuffer=W,te.__useDefaultFramebuffer=W===void 0};const Na=k.createFramebuffer();this.setRenderTarget=function(A,W=0,te=0){H=A,oe=W,le=te;let $=null,ee=!1,Oe=!1;if(A){const Le=N.get(A);if(Le.__useDefaultFramebuffer!==void 0){be.bindFramebuffer(k.FRAMEBUFFER,Le.__webglFramebuffer),ie.copy(A.viewport),de.copy(A.scissor),_e=A.scissorTest,be.viewport(ie),be.scissor(de),be.setScissorTest(_e),U=-1;return}else if(Le.__webglFramebuffer===void 0)E.setupRenderTarget(A);else if(Le.__hasExternalTextures)E.rebindTextures(A,N.get(A.texture).__webglTexture,N.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ke=A.depthTexture;if(Le.__boundDepthTexture!==Ke){if(Ke!==null&&N.has(Ke)&&(A.width!==Ke.image.width||A.height!==Ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(A)}}const ke=A.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Oe=!0);const Ge=N.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ge[W])?$=Ge[W][te]:$=Ge[W],ee=!0):A.samples>0&&E.useMultisampledRTT(A)===!1?$=N.get(A).__webglMultisampledFramebuffer:Array.isArray(Ge)?$=Ge[te]:$=Ge,ie.copy(A.viewport),de.copy(A.scissor),_e=A.scissorTest}else ie.copy(ve).multiplyScalar(Ze).floor(),de.copy(Ve).multiplyScalar(Ze).floor(),_e=Je;if(te!==0&&($=Na),be.bindFramebuffer(k.FRAMEBUFFER,$)&&be.drawBuffers(A,$),be.viewport(ie),be.scissor(de),be.setScissorTest(_e),ee){const Le=N.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+W,Le.__webglTexture,te)}else if(Oe){const Le=W;for(let ke=0;ke<A.textures.length;ke++){const Ge=N.get(A.textures[ke]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+ke,Ge.__webglTexture,te,Le)}}else if(A!==null&&te!==0){const Le=N.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Le.__webglTexture,te)}U=-1},this.readRenderTargetPixels=function(A,W,te,$,ee,Oe,ze,Le=0){if(!(A&&A.isWebGLRenderTarget)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=N.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ze!==void 0&&(ke=ke[ze]),ke){be.bindFramebuffer(k.FRAMEBUFFER,ke);try{const Ge=A.textures[Le],Ke=Ge.format,lt=Ge.type;if(A.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Le),!jt.textureFormatReadable(Ke)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!jt.textureTypeReadable(lt)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-$&&te>=0&&te<=A.height-ee&&k.readPixels(W,te,$,ee,G.convert(Ke),G.convert(lt),Oe)}finally{const Ge=H!==null?N.get(H).__webglFramebuffer:null;be.bindFramebuffer(k.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(A,W,te,$,ee,Oe,ze,Le=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=N.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ze!==void 0&&(ke=ke[ze]),ke)if(W>=0&&W<=A.width-$&&te>=0&&te<=A.height-ee){be.bindFramebuffer(k.FRAMEBUFFER,ke);const Ge=A.textures[Le],Ke=Ge.format,lt=Ge.type;if(A.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Le),!jt.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!jt.textureTypeReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const qe=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,qe),k.bufferData(k.PIXEL_PACK_BUFFER,Oe.byteLength,k.STREAM_READ),k.readPixels(W,te,$,ee,G.convert(Ke),G.convert(lt),0);const Ct=H!==null?N.get(H).__webglFramebuffer:null;be.bindFramebuffer(k.FRAMEBUFFER,Ct);const tn=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await M2(k,tn,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,qe),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Oe),k.deleteBuffer(qe),k.deleteSync(tn),Oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,W=null,te=0){const $=Math.pow(2,-te),ee=Math.floor(A.image.width*$),Oe=Math.floor(A.image.height*$),ze=W!==null?W.x:0,Le=W!==null?W.y:0;E.setTexture2D(A,0),k.copyTexSubImage2D(k.TEXTURE_2D,te,0,0,ze,Le,ee,Oe),be.unbindTexture()};const mn=k.createFramebuffer(),io=k.createFramebuffer();this.copyTextureToTexture=function(A,W,te=null,$=null,ee=0,Oe=0){let ze,Le,ke,Ge,Ke,lt,qe,Ct,tn;const Zt=A.isCompressedTexture?A.mipmaps[Oe]:A.image;if(te!==null)ze=te.max.x-te.min.x,Le=te.max.y-te.min.y,ke=te.isBox3?te.max.z-te.min.z:1,Ge=te.min.x,Ke=te.min.y,lt=te.isBox3?te.min.z:0;else{const nn=Math.pow(2,-ee);ze=Math.floor(Zt.width*nn),Le=Math.floor(Zt.height*nn),A.isDataArrayTexture?ke=Zt.depth:A.isData3DTexture?ke=Math.floor(Zt.depth*nn):ke=1,Ge=0,Ke=0,lt=0}$!==null?(qe=$.x,Ct=$.y,tn=$.z):(qe=0,Ct=0,tn=0);const Ft=G.convert(W.format),It=G.convert(W.type);let Fe;W.isData3DTexture?(E.setTexture3D(W,0),Fe=k.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(E.setTexture2DArray(W,0),Fe=k.TEXTURE_2D_ARRAY):(E.setTexture2D(W,0),Fe=k.TEXTURE_2D),be.activeTexture(k.TEXTURE0),be.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,W.flipY),be.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),be.pixelStorei(k.UNPACK_ALIGNMENT,W.unpackAlignment);const In=be.getParameter(k.UNPACK_ROW_LENGTH),gt=be.getParameter(k.UNPACK_IMAGE_HEIGHT),Mn=be.getParameter(k.UNPACK_SKIP_PIXELS),ei=be.getParameter(k.UNPACK_SKIP_ROWS),Ti=be.getParameter(k.UNPACK_SKIP_IMAGES);be.pixelStorei(k.UNPACK_ROW_LENGTH,Zt.width),be.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Zt.height),be.pixelStorei(k.UNPACK_SKIP_PIXELS,Ge),be.pixelStorei(k.UNPACK_SKIP_ROWS,Ke),be.pixelStorei(k.UNPACK_SKIP_IMAGES,lt);const ti=A.isDataArrayTexture||A.isData3DTexture,zt=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){const nn=N.get(A),Ai=N.get(W),Ot=N.get(nn.__renderTarget),Ii=N.get(Ai.__renderTarget);be.bindFramebuffer(k.READ_FRAMEBUFFER,Ot.__webglFramebuffer),be.bindFramebuffer(k.DRAW_FRAMEBUFFER,Ii.__webglFramebuffer);for(let Ua=0;Ua<ke;Ua++)ti&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,N.get(A).__webglTexture,ee,lt+Ua),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,N.get(W).__webglTexture,Oe,tn+Ua)),k.blitFramebuffer(Ge,Ke,ze,Le,qe,Ct,ze,Le,k.DEPTH_BUFFER_BIT,k.NEAREST);be.bindFramebuffer(k.READ_FRAMEBUFFER,null),be.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(ee!==0||A.isRenderTargetTexture||N.has(A)){const nn=N.get(A),Ai=N.get(W);be.bindFramebuffer(k.READ_FRAMEBUFFER,mn),be.bindFramebuffer(k.DRAW_FRAMEBUFFER,io);for(let Ot=0;Ot<ke;Ot++)ti?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,nn.__webglTexture,ee,lt+Ot):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,nn.__webglTexture,ee),zt?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ai.__webglTexture,Oe,tn+Ot):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ai.__webglTexture,Oe),ee!==0?k.blitFramebuffer(Ge,Ke,ze,Le,qe,Ct,ze,Le,k.COLOR_BUFFER_BIT,k.NEAREST):zt?k.copyTexSubImage3D(Fe,Oe,qe,Ct,tn+Ot,Ge,Ke,ze,Le):k.copyTexSubImage2D(Fe,Oe,qe,Ct,Ge,Ke,ze,Le);be.bindFramebuffer(k.READ_FRAMEBUFFER,null),be.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else zt?A.isDataTexture||A.isData3DTexture?k.texSubImage3D(Fe,Oe,qe,Ct,tn,ze,Le,ke,Ft,It,Zt.data):W.isCompressedArrayTexture?k.compressedTexSubImage3D(Fe,Oe,qe,Ct,tn,ze,Le,ke,Ft,Zt.data):k.texSubImage3D(Fe,Oe,qe,Ct,tn,ze,Le,ke,Ft,It,Zt):A.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Oe,qe,Ct,ze,Le,Ft,It,Zt.data):A.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Oe,qe,Ct,Zt.width,Zt.height,Ft,Zt.data):k.texSubImage2D(k.TEXTURE_2D,Oe,qe,Ct,ze,Le,Ft,It,Zt);be.pixelStorei(k.UNPACK_ROW_LENGTH,In),be.pixelStorei(k.UNPACK_IMAGE_HEIGHT,gt),be.pixelStorei(k.UNPACK_SKIP_PIXELS,Mn),be.pixelStorei(k.UNPACK_SKIP_ROWS,ei),be.pixelStorei(k.UNPACK_SKIP_IMAGES,Ti),Oe===0&&W.generateMipmaps&&k.generateMipmap(Fe),be.unbindTexture()},this.initRenderTarget=function(A){N.get(A).__webglFramebuffer===void 0&&E.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?E.setTextureCube(A,0):A.isData3DTexture?E.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?E.setTexture2DArray(A,0):E.setTexture2D(A,0),be.unbindTexture()},this.resetState=function(){oe=0,le=0,H=null,be.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Et._getDrawingBufferColorSpace(t),i.unpackColorSpace=Et._getUnpackColorSpace()}}/**
 * postprocessing v6.39.1 build Fri Apr 17 2026
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2026 Raoul van Rüschen
 * @license Zlib
 */var eE=(()=>{const s=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),t=new Float32Array([0,0,2,0,0,2]),i=new Ki;return i.setAttribute("position",new Ei(s,3)),i.setAttribute("uv",new Ei(t,2)),i})(),us=class Fh{static get fullscreenGeometry(){return eE}constructor(t="Pass",i=new Oh,r=new Qc){this.name=t,this.renderer=null,this.scene=i,this.camera=r,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthBlit=!1,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(t){if(this.rtt===t){const i=this.fullscreenMaterial;i!==null&&(i.needsUpdate=!0),this.rtt=!t}}set mainScene(t){}set mainCamera(t){}setRenderer(t){this.renderer=t}isEnabled(){return this.enabled}setEnabled(t){this.enabled=t}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(t){let i=this.screen;i!==null?i.material=t:(i=new Fi(Fh.fullscreenGeometry,t),i.frustumCulled=!1,this.scene===null&&(this.scene=new Oh),this.scene.add(i),this.screen=i)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(t){this.fullscreenMaterial=t}getDepthTexture(){return null}setDepthTexture(t,i=Ql){}render(t,i,r,o,c){throw new Error("Render method not implemented!")}setSize(t,i){}initialize(t,i,r){}dispose(){for(const t of Object.keys(this)){const i=this[t];(i instanceof jn||i instanceof jr||i instanceof Dn||i instanceof Fh)&&this[t].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},tE=class extends us{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(s,t,i,r,o){const c=s.state.buffers.stencil;c.setLocked(!1),c.setTest(!1)}},nE=`#ifdef COLOR_WRITE
#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#endif
#ifdef DEPTH_WRITE
#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}
#endif
#ifdef USE_WEIGHTS
uniform vec4 channelWeights;
#endif
uniform float opacity;varying vec2 vUv;void main(){
#ifdef COLOR_WRITE
vec4 texel=texture2D(inputBuffer,vUv);
#ifdef USE_WEIGHTS
texel*=channelWeights;
#endif
gl_FragColor=opacity*texel;
#ifdef COLOR_SPACE_CONVERSION
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
#else
gl_FragColor=vec4(0.0);
#endif
#ifdef DEPTH_WRITE
gl_FragDepth=readDepth(vUv);
#endif
}`,iE="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",aE=class extends Jn{constructor(){super({name:"CopyMaterial",defines:{COLOR_SPACE_CONVERSION:"1",DEPTH_PACKING:"0",COLOR_WRITE:"1"},uniforms:{inputBuffer:new dn(null),depthBuffer:new dn(null),channelWeights:new dn(null),opacity:new dn(1)},blending:Bi,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:nE,vertexShader:iE}),this.depthFunc=Vc}get inputBuffer(){return this.uniforms.inputBuffer.value}set inputBuffer(s){const t=s!==null;this.colorWrite!==t&&(t?this.defines.COLOR_WRITE=!0:delete this.defines.COLOR_WRITE,this.colorWrite=t,this.needsUpdate=!0),this.uniforms.inputBuffer.value=s}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(s){const t=s!==null;this.depthWrite!==t&&(t?this.defines.DEPTH_WRITE=!0:delete this.defines.DEPTH_WRITE,this.depthTest=t,this.depthWrite=t,this.needsUpdate=!0),this.uniforms.depthBuffer.value=s}set depthPacking(s){this.defines.DEPTH_PACKING=s.toFixed(0),this.needsUpdate=!0}get colorSpaceConversion(){return this.defines.COLOR_SPACE_CONVERSION!==void 0}set colorSpaceConversion(s){this.colorSpaceConversion!==s&&(s?this.defines.COLOR_SPACE_CONVERSION=!0:delete this.defines.COLOR_SPACE_CONVERSION,this.needsUpdate=!0)}get channelWeights(){return this.uniforms.channelWeights.value}set channelWeights(s){s!==null?(this.defines.USE_WEIGHTS="1",this.uniforms.channelWeights.value=s):delete this.defines.USE_WEIGHTS,this.needsUpdate=!0}setInputBuffer(s){this.uniforms.inputBuffer.value=s}getOpacity(s){return this.uniforms.opacity.value}setOpacity(s){this.uniforms.opacity.value=s}},sE=class extends us{constructor(s,t=!0){super("CopyPass"),this.fullscreenMaterial=new aE,this.needsSwap=!1,this.renderTarget=s,s===void 0&&(this.renderTarget=new jn(1,1,{minFilter:on,magFilter:on,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=t}get resize(){return this.autoResize}set resize(s){this.autoResize=s}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(s){this.autoResize=s}render(s,t,i,r,o){this.fullscreenMaterial.inputBuffer=t.texture,s.setRenderTarget(this.renderToScreen?null:this.renderTarget),s.render(this.scene,this.camera)}setSize(s,t){this.autoResize&&this.renderTarget.setSize(s,t)}initialize(s,t,i){i!==void 0&&(this.renderTarget.texture.type=i,i!==Gn?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":s!==null&&s.outputColorSpace===hn&&(this.renderTarget.texture.colorSpace=hn))}},O1=new Pt,Av=class extends us{constructor(s=!0,t=!0,i=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=s,this.depth=t,this.stencil=i,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(s,t,i){this.color=s,this.depth=t,this.stencil=i}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(s){this.overrideClearColor=s}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(s){this.overrideClearAlpha=s}render(s,t,i,r,o){const c=this.overrideClearColor,d=this.overrideClearAlpha,h=s.getClearAlpha(),p=c!==null,m=d>=0;p?(s.getClearColor(O1),s.setClearColor(c,m?d:h)):m&&s.setClearAlpha(d),s.setRenderTarget(this.renderToScreen?null:t),s.clear(this.color,this.depth,this.stencil),p?s.setClearColor(O1,h):m&&s.setClearAlpha(h)}},rE=class extends us{constructor(s,t){super("MaskPass",s,t),this.needsSwap=!1,this.clearPass=new Av(!1,!1,!0),this.inverse=!1}set mainScene(s){this.scene=s}set mainCamera(s){this.camera=s}get inverted(){return this.inverse}set inverted(s){this.inverse=s}get clear(){return this.clearPass.enabled}set clear(s){this.clearPass.enabled=s}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(s){this.inverted=s}render(s,t,i,r,o){const c=s.getContext(),d=s.state.buffers,h=this.scene,p=this.camera,m=this.clearPass,M=this.inverted?0:1,x=1-M;d.color.setMask(!1),d.depth.setMask(!1),d.color.setLocked(!0),d.depth.setLocked(!0),d.stencil.setTest(!0),d.stencil.setOp(c.REPLACE,c.REPLACE,c.REPLACE),d.stencil.setFunc(c.ALWAYS,M,4294967295),d.stencil.setClear(x),d.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?m.render(s,null):(m.render(s,t),m.render(s,i))),this.renderToScreen?(s.setRenderTarget(null),s.render(h,p)):(s.setRenderTarget(t),s.render(h,p),s.setRenderTarget(i),s.render(h,p)),d.color.setLocked(!1),d.depth.setLocked(!1),d.stencil.setLocked(!1),d.stencil.setFunc(c.EQUAL,1,4294967295),d.stencil.setOp(c.KEEP,c.KEEP,c.KEEP),d.stencil.setLocked(!0)}},Gd=1/1e3,lE=1e3,oE=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(s){typeof document<"u"&&document.hidden!==void 0&&(s?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=s)}get delta(){return this._delta*Gd}get fixedDelta(){return this._fixedDelta*Gd}set fixedDelta(s){this._fixedDelta=s*lE}get elapsed(){return this._elapsed*Gd}update(s){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(s!==void 0?s:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(s){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},P1=class{constructor(s=null,{depthBuffer:t=!0,stencilBuffer:i=!1,multisampling:r=0,frameBufferType:o}={}){this.renderer=null,this.inputBuffer=this.createBuffer(t,i,o,r),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new sE,this.depthTexture=null,this.depthRenderTarget=null,this.passes=[],this.timer=new oE,this.autoRenderToScreen=!0,this.setRenderer(s)}get multisampling(){return this.inputBuffer.samples}set multisampling(s){const t=this.inputBuffer,i=this.multisampling;i>0&&s>0?(this.inputBuffer.samples=s,this.outputBuffer.samples=s,this.inputBuffer.dispose(),this.outputBuffer.dispose()):i!==s&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.inputBuffer=this.createBuffer(t.depthBuffer,t.stencilBuffer,t.texture.type,s),this.outputBuffer=this.inputBuffer.clone())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(s){if(this.renderer=s,s!==null){const t=s.getSize(new pt),i=s.getContext().getContextAttributes().alpha,r=this.inputBuffer.texture.type;r===Gn&&s.outputColorSpace===hn&&(this.inputBuffer.texture.colorSpace=hn,this.outputBuffer.texture.colorSpace=hn,this.inputBuffer.dispose(),this.outputBuffer.dispose()),s.autoClear=!1,this.setSize(t.width,t.height);for(const o of this.passes)o.initialize(s,i,r)}}replaceRenderer(s,t=!0){const i=this.renderer,r=i.domElement.parentNode;return this.setRenderer(s),t&&r!==null&&(r.removeChild(i.domElement),r.appendChild(s.domElement)),i}createDepthTexture(){const s=this.inputBuffer,t=new Vs;this.depthTexture=t,s.stencilBuffer?(t.format=os,t.type=Hr):t.type=Oi;const i=t.clone();return i.name="EffectComposer.StableDepth",this.depthRenderTarget=new jn(s.width,s.height,{depthBuffer:!0,stencilBuffer:s.stencilBuffer,depthTexture:i}),i}blitDepthBuffer(s){const t=this.renderer,i=this.depthRenderTarget,r=t.properties,o=t.getContext();t.setRenderTarget(i);const c=r.get(s).__webglFramebuffer,d=r.get(i).__webglFramebuffer,h=s.stencilBuffer?o.DEPTH_BUFFER_BIT|o.STENCIL_BUFFER_BIT:o.DEPTH_BUFFER_BIT;o.bindFramebuffer(o.READ_FRAMEBUFFER,c),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,d),o.blitFramebuffer(0,0,s.width,s.height,0,0,i.width,i.height,h,o.NEAREST),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),t.setRenderTarget(null)}deleteDepthTexture(){if(this.depthTexture!==null){this.depthTexture.dispose(),this.depthTexture=null,this.depthRenderTarget.dispose(),this.depthRenderTarget=null,this.inputBuffer.depthTexture=null,this.outputBuffer.depthTexture=null;for(const s of this.passes)s.setDepthTexture(null)}}createBuffer(s,t,i,r){const o=this.renderer,c=o===null?new pt:o.getDrawingBufferSize(new pt),d={minFilter:on,magFilter:on,stencilBuffer:t,depthBuffer:s,type:i},h=new jn(c.width,c.height,d);return r>0&&(h.samples=r),i===Gn&&o!==null&&o.outputColorSpace===hn&&(h.texture.colorSpace=hn),h.texture.name="EffectComposer.Buffer",h.texture.generateMipmaps=!1,h}setMainScene(s){for(const t of this.passes)t.mainScene=s}setMainCamera(s){for(const t of this.passes)t.mainCamera=s}addPass(s,t){const i=this.passes,r=this.renderer,o=r.getDrawingBufferSize(new pt),c=r.getContext().getContextAttributes().alpha,d=this.inputBuffer.texture.type;if(s.renderer=r,s.setSize(o.width,o.height),s.initialize(r,c,d),this.autoRenderToScreen&&(i.length>0&&(i[i.length-1].renderToScreen=!1),s.renderToScreen&&(this.autoRenderToScreen=!1)),t!==void 0?i.splice(t,0,s):i.push(s),this.autoRenderToScreen&&(i[i.length-1].renderToScreen=!0),s.needsDepthTexture||this.depthTexture!==null)if(this.depthTexture===null){const h=this.createDepthTexture();for(s of i)s.setDepthTexture(h)}else{const h=this.depthRenderTarget.depthTexture;s.setDepthTexture(h)}}removePass(s){const t=this.passes,i=t.indexOf(s);if(i!==-1&&t.splice(i,1).length>0){if(this.depthTexture!==null){const c=(h,p)=>h||p.needsDepthTexture;if(!t.reduce(c,!1)){const h=this.depthRenderTarget.depthTexture;s.getDepthTexture()===h&&s.setDepthTexture(null),this.deleteDepthTexture()}}this.autoRenderToScreen&&i===t.length&&(s.renderToScreen=!1,t.length>0&&(t[t.length-1].renderToScreen=!0))}}removeAllPasses(){const s=this.passes;this.deleteDepthTexture(),s.length>0&&(this.autoRenderToScreen&&(s[s.length-1].renderToScreen=!1),this.passes=[])}render(s){const t=this.renderer,i=this.copyPass;let r=this.inputBuffer,o=this.outputBuffer,c,d=!1;s===void 0&&(this.timer.update(),s=this.timer.getDelta());for(const h of this.passes)if(h.enabled){if(r.depthTexture=this.depthTexture,o.depthTexture=null,h.render(t,r,o,s,d),h.needsDepthBlit&&this.depthRenderTarget!==null&&this.blitDepthBuffer(r),h.needsSwap){if(d){i.renderToScreen=h.renderToScreen;const p=t.getContext(),m=t.state.buffers.stencil;m.setFunc(p.NOTEQUAL,1,4294967295),i.render(t,r,o,s,d),m.setFunc(p.EQUAL,1,4294967295)}c=r,r=o,o=c}h instanceof rE?d=!0:h instanceof tE&&(d=!1)}}setSize(s,t,i){const r=this.renderer,o=r.getSize(new pt);(s===void 0||t===void 0)&&(s=o.width,t=o.height),(o.width!==s||o.height!==t)&&r.setSize(s,t,i);const c=r.getDrawingBufferSize(new pt);this.inputBuffer.setSize(c.width,c.height),this.outputBuffer.setSize(c.width,c.height),this.depthRenderTarget!==null&&this.depthRenderTarget.setSize(c.width,c.height);for(const d of this.passes)d.setSize(c.width,c.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(const s of this.passes)s.dispose();this.passes=[],this.inputBuffer!==null&&this.inputBuffer.dispose(),this.outputBuffer!==null&&this.outputBuffer.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose(),us.fullscreenGeometry.dispose()}},Is={NONE:0,DEPTH:1,CONVOLUTION:2},Nt={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},cE=class{constructor(){this.shaderParts=new Map([[Nt.FRAGMENT_HEAD,null],[Nt.FRAGMENT_MAIN_UV,null],[Nt.FRAGMENT_MAIN_IMAGE,null],[Nt.VERTEX_HEAD,null],[Nt.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=Is.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=Gr}},Vd=!1,B1=class{constructor(s=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(s),this.meshCount=0,this.replaceMaterial=t=>{if(t.isMesh){let i;if(t.material.flatShading)switch(t.material.side){case fi:i=this.materialsFlatShadedDoubleSide;break;case wn:i=this.materialsFlatShadedBackSide;break;default:i=this.materialsFlatShaded;break}else switch(t.material.side){case fi:i=this.materialsDoubleSide;break;case wn:i=this.materialsBackSide;break;default:i=this.materials;break}this.originalMaterials.set(t,t.material),t.isSkinnedMesh?t.material=i[2]:t.isInstancedMesh?t.material=i[1]:t.material=i[0],++this.meshCount}}}cloneMaterial(s){if(!(s instanceof Jn))return s.clone();const t=s.uniforms,i=new Map;for(const o in t){const c=t[o].value;c.isRenderTargetTexture&&(t[o].value=null,i.set(o,c))}const r=s.clone();for(const o of i)t[o[0]].value=o[1],r.uniforms[o[0]].value=o[1];return r}setMaterial(s){if(this.disposeMaterials(),this.material=s,s!==null){const t=this.materials=[this.cloneMaterial(s),this.cloneMaterial(s),this.cloneMaterial(s)];for(const i of t)i.uniforms=Object.assign({},s.uniforms),i.side=ya;t[2].skinning=!0,this.materialsBackSide=t.map(i=>{const r=this.cloneMaterial(i);return r.uniforms=Object.assign({},s.uniforms),r.side=wn,r}),this.materialsDoubleSide=t.map(i=>{const r=this.cloneMaterial(i);return r.uniforms=Object.assign({},s.uniforms),r.side=fi,r}),this.materialsFlatShaded=t.map(i=>{const r=this.cloneMaterial(i);return r.uniforms=Object.assign({},s.uniforms),r.flatShading=!0,r}),this.materialsFlatShadedBackSide=t.map(i=>{const r=this.cloneMaterial(i);return r.uniforms=Object.assign({},s.uniforms),r.flatShading=!0,r.side=wn,r}),this.materialsFlatShadedDoubleSide=t.map(i=>{const r=this.cloneMaterial(i);return r.uniforms=Object.assign({},s.uniforms),r.flatShading=!0,r.side=fi,r})}}render(s,t,i){const r=s.shadowMap.enabled;if(s.shadowMap.enabled=!1,Vd){const o=this.originalMaterials;this.meshCount=0,t.traverse(this.replaceMaterial),s.render(t,i);for(const c of o)c[0].material=c[1];this.meshCount!==o.size&&o.clear()}else{const o=t.overrideMaterial;t.overrideMaterial=this.material,s.render(t,i),t.overrideMaterial=o}s.shadowMap.enabled=r}disposeMaterials(){if(this.material!==null){const s=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(const t of s)t.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return Vd}static set workaroundEnabled(s){Vd=s}},yt={ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},uE="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",fE="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}",dE="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",hE="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",pE="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",mE="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",gE="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",vE="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",_E="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",xE="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",SE="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ME="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",bE="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",yE="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",EE="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",TE="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",AE="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",RE="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",CE="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",wE="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",DE="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",NE="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",UE="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}",LE="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",OE="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",PE="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",BE="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",FE="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",IE="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",zE="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}",HE="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",GE="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",VE=new Map([[yt.ADD,uE],[yt.ALPHA,fE],[yt.AVERAGE,dE],[yt.COLOR,hE],[yt.COLOR_BURN,pE],[yt.COLOR_DODGE,mE],[yt.DARKEN,gE],[yt.DIFFERENCE,vE],[yt.DIVIDE,_E],[yt.DST,null],[yt.EXCLUSION,xE],[yt.HARD_LIGHT,SE],[yt.HARD_MIX,ME],[yt.HUE,bE],[yt.INVERT,yE],[yt.INVERT_RGB,EE],[yt.LIGHTEN,TE],[yt.LINEAR_BURN,AE],[yt.LINEAR_DODGE,RE],[yt.LINEAR_LIGHT,CE],[yt.LUMINOSITY,wE],[yt.MULTIPLY,DE],[yt.NEGATION,NE],[yt.NORMAL,UE],[yt.OVERLAY,LE],[yt.PIN_LIGHT,OE],[yt.REFLECT,PE],[yt.SATURATION,BE],[yt.SCREEN,FE],[yt.SOFT_LIGHT,IE],[yt.SRC,zE],[yt.SUBTRACT,HE],[yt.VIVID_LIGHT,GE]]),kE=class extends Aa{constructor(s,t=1){super(),this._blendFunction=s,this.opacity=new dn(t)}getOpacity(){return this.opacity.value}setOpacity(s){this.opacity.value=s}get blendFunction(){return this._blendFunction}set blendFunction(s){this._blendFunction=s,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(s){this.blendFunction=s}getShaderCode(){return VE.get(this.blendFunction)}},Rv=class extends Aa{constructor(s,t,{attributes:i=Is.NONE,blendFunction:r=yt.NORMAL,defines:o=new Map,uniforms:c=new Map,extensions:d=null,vertexShader:h=null}={}){super(),this.name=s,this.renderer=null,this.attributes=i,this.fragmentShader=t,this.vertexShader=h,this.defines=o,this.uniforms=c,this.extensions=d,this.blendMode=new kE(r),this.blendMode.addEventListener("change",p=>this.setChanged()),this._inputColorSpace=Gr,this._outputColorSpace=Wi}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(s){this._inputColorSpace=s,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(s){this._outputColorSpace=s,this.setChanged()}set mainScene(s){}set mainCamera(s){}getName(){return this.name}setRenderer(s){this.renderer=s}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(s){this.attributes=s,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(s){this.fragmentShader=s,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(s){this.vertexShader=s,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(s,t=Ql){}update(s,t,i){}setSize(s,t){}initialize(s,t,i){}dispose(){for(const s of Object.keys(this)){const t=this[s];(t instanceof jn||t instanceof jr||t instanceof Dn||t instanceof us)&&this[s].dispose()}}},F1=class extends us{constructor(s,t,i=null){super("RenderPass",s,t),this.needsSwap=!1,this.needsDepthBlit=!0,this.clearPass=new Av,this.overrideMaterialManager=i===null?null:new B1(i),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(s){this.scene=s}set mainCamera(s){this.camera=s}get renderToScreen(){return super.renderToScreen}set renderToScreen(s){super.renderToScreen=s,this.clearPass.renderToScreen=s}get overrideMaterial(){const s=this.overrideMaterialManager;return s!==null?s.material:null}set overrideMaterial(s){const t=this.overrideMaterialManager;s!==null?t!==null?t.setMaterial(s):this.overrideMaterialManager=new B1(s):t!==null&&(t.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(s){this.overrideMaterial=s}get clear(){return this.clearPass.enabled}set clear(s){this.clearPass.enabled=s}getSelection(){return this.selection}setSelection(s){this.selection=s}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(s){this.ignoreBackground=s}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(s){this.skipShadowMapUpdate=s}getClearPass(){return this.clearPass}render(s,t,i,r,o){const c=this.scene,d=this.camera,h=this.selection,p=d.layers.mask,m=c.background,M=s.shadowMap.autoUpdate,x=this.renderToScreen?null:t;h!==null&&d.layers.set(h.getLayer()),this.skipShadowMapUpdate&&(s.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(c.background=null),this.clearPass.enabled&&this.clearPass.render(s,t),s.setRenderTarget(x),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(s,c,d):s.render(c,d),d.layers.mask=p,c.background=m,s.shadowMap.autoUpdate=M}},jE=`#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
float depth=unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
float depth=texture2D(depthBuffer,uv).r;
#endif
#if defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(LOG_DEPTH)
float d=pow(2.0,depth*log2(cameraFar+1.0))-1.0;float a=cameraFar/(cameraFar-cameraNear);float b=cameraFar*cameraNear/(cameraNear-cameraFar);depth=a+b/d;
#elif defined(USE_REVERSED_DEPTH_BUFFER)
depth=1.0-depth;
#endif
return depth;}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE color0.a=clamp(color0.a,0.0,1.0);gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`,XE="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",WE=class extends Jn{constructor(s,t,i,r,o=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:Zc.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new dn(null),depthBuffer:new dn(null),resolution:new dn(new pt),texelSize:new dn(new pt),cameraNear:new dn(.3),cameraFar:new dn(1e3),aspect:new dn(1),time:new dn(0)},blending:Bi,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:o}),s&&this.setShaderParts(s),t&&this.setDefines(t),i&&this.setUniforms(i),this.copyCameraSettings(r)}set inputBuffer(s){this.uniforms.inputBuffer.value=s}setInputBuffer(s){this.uniforms.inputBuffer.value=s}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(s){this.uniforms.depthBuffer.value=s}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(s){this.defines.DEPTH_PACKING=s.toFixed(0),this.needsUpdate=!0}setDepthBuffer(s,t=Ql){this.depthBuffer=s,this.depthPacking=t}setShaderData(s){this.setShaderParts(s.shaderParts),this.setDefines(s.defines),this.setUniforms(s.uniforms),this.setExtensions(s.extensions)}setShaderParts(s){return this.fragmentShader=jE.replace(Nt.FRAGMENT_HEAD,s.get(Nt.FRAGMENT_HEAD)||"").replace(Nt.FRAGMENT_MAIN_UV,s.get(Nt.FRAGMENT_MAIN_UV)||"").replace(Nt.FRAGMENT_MAIN_IMAGE,s.get(Nt.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=XE.replace(Nt.VERTEX_HEAD,s.get(Nt.VERTEX_HEAD)||"").replace(Nt.VERTEX_MAIN_SUPPORT,s.get(Nt.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(s){for(const t of s.entries())this.defines[t[0]]=t[1];return this.needsUpdate=!0,this}setUniforms(s){for(const t of s.entries())this.uniforms[t[0]]=t[1];return this}setExtensions(s){this.extensions={};for(const t of s)this.extensions[t]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(s){this.encodeOutput!==s&&(s?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(s){return this.encodeOutput}setOutputEncodingEnabled(s){this.encodeOutput=s}get time(){return this.uniforms.time.value}set time(s){this.uniforms.time.value=s}setDeltaTime(s){this.uniforms.time.value+=s}adoptCameraSettings(s){this.copyCameraSettings(s)}copyCameraSettings(s){s&&(this.uniforms.cameraNear.value=s.near,this.uniforms.cameraFar.value=s.far,s instanceof yi?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(s,t){const i=this.uniforms;i.resolution.value.set(s,t),i.texelSize.value.set(1/s,1/t),i.aspect.value=s/t}static get Section(){return Nt}};function I1(s,t,i){for(const r of t){const o="$1"+s+r.charAt(0).toUpperCase()+r.slice(1),c=new RegExp("([^\\.])(\\b"+r+"\\b)","g");for(const d of i.entries())d[1]!==null&&i.set(d[0],d[1].replace(c,o))}}function qE(s,t,i){let r=t.getFragmentShader(),o=t.getVertexShader();const c=r!==void 0&&/mainImage/.test(r),d=r!==void 0&&/mainUv/.test(r);if(i.attributes|=t.getAttributes(),r===void 0)throw new Error(`Missing fragment shader (${t.name})`);if(d&&(i.attributes&Is.CONVOLUTION)!==0)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${t.name})`);if(!c&&!d)throw new Error(`Could not find mainImage or mainUv function (${t.name})`);{const h=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,p=i.shaderParts;let m=p.get(Nt.FRAGMENT_HEAD)||"",M=p.get(Nt.FRAGMENT_MAIN_UV)||"",x=p.get(Nt.FRAGMENT_MAIN_IMAGE)||"",v=p.get(Nt.VERTEX_HEAD)||"",b=p.get(Nt.VERTEX_MAIN_SUPPORT)||"";const T=new Set,w=new Set;if(d&&(M+=`	${s}MainUv(UV);
`,i.uvTransformation=!0),o!==null&&/mainSupport/.test(o)){const D=/mainSupport *\([\w\s]*?uv\s*?\)/.test(o);b+=`	${s}MainSupport(`,b+=D?`vUv);
`:`);
`;for(const L of o.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(const O of L[1].split(/\s*,\s*/))i.varyings.add(O),T.add(O),w.add(O);for(const L of o.matchAll(h))w.add(L[1])}for(const D of r.matchAll(h))w.add(D[1]);for(const D of t.defines.keys())w.add(D.replace(/\([\w\s,]*\)/g,""));for(const D of t.uniforms.keys())w.add(D);w.delete("while"),w.delete("for"),w.delete("if"),t.uniforms.forEach((D,L)=>i.uniforms.set(s+L.charAt(0).toUpperCase()+L.slice(1),D)),t.defines.forEach((D,L)=>i.defines.set(s+L.charAt(0).toUpperCase()+L.slice(1),D));const S=new Map([["fragment",r],["vertex",o]]);I1(s,w,i.defines),I1(s,w,S),r=S.get("fragment"),o=S.get("vertex");const _=t.blendMode;if(i.blendModes.set(_.blendFunction,_),c){t.inputColorSpace!==null&&t.inputColorSpace!==i.colorSpace&&(x+=t.inputColorSpace===hn?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),t.outputColorSpace!==Wi?i.colorSpace=t.outputColorSpace:t.inputColorSpace!==null&&(i.colorSpace=t.inputColorSpace);const D=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;x+=`${s}MainImage(color0, UV, `,(i.attributes&Is.DEPTH)!==0&&D.test(r)&&(x+="depth, ",i.readDepth=!0),x+=`color1);
	`;const L=s+"BlendOpacity";i.uniforms.set(L,_.opacity),x+=`color0 = blend${_.blendFunction}(color0, color1, ${L});

	`,m+=`uniform float ${L};

`}if(m+=r+`
`,o!==null&&(v+=o+`
`),p.set(Nt.FRAGMENT_HEAD,m),p.set(Nt.FRAGMENT_MAIN_UV,M),p.set(Nt.FRAGMENT_MAIN_IMAGE,x),p.set(Nt.VERTEX_HEAD,v),p.set(Nt.VERTEX_MAIN_SUPPORT,b),t.extensions!==null)for(const D of t.extensions)i.extensions.add(D)}}var z1=class extends us{constructor(s,...t){super("EffectPass"),this.fullscreenMaterial=new WE(null,null,null,s),this.listener=i=>this.handleEvent(i),this.effects=[],this.setEffects(t),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(s){for(const t of this.effects)t.mainScene=s}set mainCamera(s){this.fullscreenMaterial.copyCameraSettings(s);for(const t of this.effects)t.mainCamera=s}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(s){this.fullscreenMaterial.encodeOutput=s}get dithering(){return this.fullscreenMaterial.dithering}set dithering(s){const t=this.fullscreenMaterial;t.dithering=s,t.needsUpdate=!0}setEffects(s){for(const t of this.effects)t.removeEventListener("change",this.listener);this.effects=s.sort((t,i)=>i.attributes-t.attributes);for(const t of this.effects)t.addEventListener("change",this.listener)}updateMaterial(){const s=new cE;let t=0;for(const d of this.effects)if(d.blendMode.blendFunction===yt.DST)s.attributes|=d.getAttributes()&Is.DEPTH;else{if((s.attributes&d.getAttributes()&Is.CONVOLUTION)!==0)throw new Error(`Convolution effects cannot be merged (${d.name})`);qE("e"+t++,d,s)}let i=s.shaderParts.get(Nt.FRAGMENT_HEAD),r=s.shaderParts.get(Nt.FRAGMENT_MAIN_IMAGE),o=s.shaderParts.get(Nt.FRAGMENT_MAIN_UV);const c=/\bblend\b/g;for(const d of s.blendModes.values())i+=d.getShaderCode().replace(c,`blend${d.blendFunction}`)+`
`;(s.attributes&Is.DEPTH)!==0?(s.readDepth&&(r=`float depth = readDepth(UV);

	`+r),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,s.colorSpace===hn&&(r+=`color0 = sRGBToLinear(color0);
	`),s.uvTransformation?(o=`vec2 transformedUv = vUv;
`+o,s.defines.set("UV","transformedUv")):s.defines.set("UV","vUv"),s.shaderParts.set(Nt.FRAGMENT_HEAD,i),s.shaderParts.set(Nt.FRAGMENT_MAIN_IMAGE,r),s.shaderParts.set(Nt.FRAGMENT_MAIN_UV,o);for(const[d,h]of s.shaderParts)h!==null&&s.shaderParts.set(d,h.trim().replace(/^#/,`
#`));this.skipRendering=t===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(s)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(s,t=Ql){this.fullscreenMaterial.depthBuffer=s,this.fullscreenMaterial.depthPacking=t;for(const i of this.effects)i.setDepthTexture(s,t)}render(s,t,i,r,o){for(const c of this.effects)c.update(s,t,r);if(!this.skipRendering||this.renderToScreen){const c=this.fullscreenMaterial;c.inputBuffer=t.texture,c.time+=r*this.timeScale,s.setRenderTarget(this.renderToScreen?null:i),s.render(this.scene,this.camera)}}setSize(s,t){this.fullscreenMaterial.setSize(s,t);for(const i of this.effects)i.setSize(s,t)}initialize(s,t,i){this.renderer=s;for(const r of this.effects)r.initialize(s,t,i);this.updateMaterial(),i!==void 0&&i!==Gn&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(const s of this.effects)s.removeEventListener("change",this.listener),s.dispose()}handleEvent(s){switch(s.type){case"change":this.recompile();break}}};const YE=()=>{const t=document.createElement("canvas");t.width=64,t.height=64;const i=t.getContext("2d");if(!i)throw new Error("2D context not available");i.fillStyle="black",i.fillRect(0,0,t.width,t.height);const r=new Dn(t);r.minFilter=on,r.magFilter=on,r.generateMipmaps=!1;const o=[];let c=null;const d=64;let h=.1*64;const p=1/d,m=()=>{i.fillStyle="black",i.fillRect(0,0,t.width,t.height)},M=b=>{const T={x:b.x*64,y:(1-b.y)*64};let w=1;const S=O=>Math.sin(O*Math.PI/2),_=O=>-O*(O-2);b.age<d*.3?w=S(b.age/(d*.3)):w=_(1-(b.age-d*.3)/(d*.7))||0,w*=b.force;const D=`${(b.vx+1)/2*255}, ${(b.vy+1)/2*255}, ${w*255}`,L=320;i.shadowOffsetX=L,i.shadowOffsetY=L,i.shadowBlur=h,i.shadowColor=`rgba(${D},${.22*w})`,i.beginPath(),i.fillStyle="rgba(255,0,0,1)",i.arc(T.x-L,T.y-L,h,0,Math.PI*2),i.fill()};return{canvas:t,texture:r,addTouch:b=>{let T=0,w=0,S=0;if(c){const _=b.x-c.x,D=b.y-c.y;if(_===0&&D===0)return;const L=_*_+D*D,O=Math.sqrt(L);w=_/(O||1),S=D/(O||1),T=Math.min(L*1e4,1)}c={x:b.x,y:b.y},o.push({x:b.x,y:b.y,age:0,force:T,vx:w,vy:S})},update:()=>{m();for(let b=o.length-1;b>=0;b--){const T=o[b],w=T.force*p*(1-T.age/d);T.x+=T.vx*w,T.y+=T.vy*w,T.age++,T.age>d&&o.splice(b,1)}for(let b=0;b<o.length;b++)M(o[b]);r.needsUpdate=!0},set radiusScale(b){h=.1*64*b},get radiusScale(){return h/(.1*64)},size:64}},ZE=(s,t)=>{const i=`
    uniform sampler2D uTexture;
    uniform float uStrength;
    uniform float uTime;
    uniform float uFreq;
    void mainUv(inout vec2 uv) {
      vec4 tex = texture2D(uTexture, uv);
      float vx = tex.r * 2.0 - 1.0;
      float vy = tex.g * 2.0 - 1.0;
      float intensity = tex.b;
      float wave = 0.5 + 0.5 * sin(uTime * uFreq + intensity * 6.2831853);
      float amt = uStrength * intensity * wave;
      uv += vec2(vx, vy) * amt;
    }
  `;return new Rv("LiquidEffect",i,{uniforms:new Map([["uTexture",new dn(s)],["uStrength",new dn(t?.strength??.025)],["uTime",new dn(0)],["uFreq",new dn(t?.freq??4.5)]])})},H1={square:0,circle:1,triangle:2,diamond:3},KE="void main() { gl_Position = vec4(position, 1.0); }",QE=`
precision highp float;
uniform vec3  uColor;
uniform vec2  uResolution;
uniform float uTime;
uniform float uPixelSize;
uniform float uScale;
uniform float uDensity;
uniform float uPixelJitter;
uniform int   uEnableRipples;
uniform float uRippleSpeed;
uniform float uRippleThickness;
uniform float uRippleIntensity;
uniform float uEdgeFade;
uniform int   uShapeType;
const int SHAPE_SQUARE   = 0;
const int SHAPE_CIRCLE   = 1;
const int SHAPE_TRIANGLE = 2;
const int SHAPE_DIAMOND  = 3;
const int   MAX_CLICKS = 10;
uniform vec2  uClickPos  [MAX_CLICKS];
uniform float uClickTimes[MAX_CLICKS];
out vec4 fragColor;
float Bayer2(vec2 a){a=floor(a);return fract(a.x/2.+a.y*a.y*.75);}
#define Bayer4(a) (Bayer2(.5*(a))*0.25+Bayer2(a))
#define Bayer8(a) (Bayer4(.5*(a))*0.25+Bayer2(a))
#define FBM_OCTAVES 5
#define FBM_LACUNARITY 1.25
#define FBM_GAIN 1.0
float hash11(float n){return fract(sin(n)*43758.5453);}
float vnoise(vec3 p){
  vec3 ip=floor(p);vec3 fp=fract(p);
  float n000=hash11(dot(ip+vec3(0,0,0),vec3(1,57,113)));
  float n100=hash11(dot(ip+vec3(1,0,0),vec3(1,57,113)));
  float n010=hash11(dot(ip+vec3(0,1,0),vec3(1,57,113)));
  float n110=hash11(dot(ip+vec3(1,1,0),vec3(1,57,113)));
  float n001=hash11(dot(ip+vec3(0,0,1),vec3(1,57,113)));
  float n101=hash11(dot(ip+vec3(1,0,1),vec3(1,57,113)));
  float n011=hash11(dot(ip+vec3(0,1,1),vec3(1,57,113)));
  float n111=hash11(dot(ip+vec3(1,1,1),vec3(1,57,113)));
  vec3 w=fp*fp*fp*(fp*(fp*6.0-15.0)+10.0);
  float x00=mix(n000,n100,w.x);float x10=mix(n010,n110,w.x);
  float x01=mix(n001,n101,w.x);float x11=mix(n011,n111,w.x);
  float y0=mix(x00,x10,w.y);float y1=mix(x01,x11,w.y);
  return mix(y0,y1,w.z)*2.0-1.0;
}
float fbm2(vec2 uv,float t){
  vec3 p=vec3(uv*uScale,t);
  float amp=1.0;float freq=1.0;float sum=1.0;
  for(int i=0;i<FBM_OCTAVES;++i){sum+=amp*vnoise(p*freq);freq*=FBM_LACUNARITY;amp*=FBM_GAIN;}
  return sum*0.5+0.5;
}
float maskCircle(vec2 p,float cov){float r=sqrt(cov)*.25;float d=length(p-0.5)-r;float aa=0.5*fwidth(d);return cov*(1.0-smoothstep(-aa,aa,d*2.0));}
float maskTriangle(vec2 p,vec2 id,float cov){bool flip=mod(id.x+id.y,2.0)>0.5;if(flip)p.x=1.0-p.x;float r=sqrt(cov);float d=p.y-r*(1.0-p.x);float aa=fwidth(d);return cov*clamp(0.5-d/aa,0.0,1.0);}
float maskDiamond(vec2 p,float cov){float r=sqrt(cov)*0.564;return step(abs(p.x-0.49)+abs(p.y-0.49),r);}
void main(){
  float pixelSize=uPixelSize;
  vec2 fragCoord=gl_FragCoord.xy-uResolution*.5;
  float aspectRatio=uResolution.x/uResolution.y;
  vec2 pixelId=floor(fragCoord/pixelSize);
  vec2 pixelUV=fract(fragCoord/pixelSize);
  float cellPixelSize=8.0*pixelSize;
  vec2 cellId=floor(fragCoord/cellPixelSize);
  vec2 cellCoord=cellId*cellPixelSize;
  vec2 uv=cellCoord/uResolution*vec2(aspectRatio,1.0);
  float base=fbm2(uv,uTime*0.05);
  base=base*0.5-0.65;
  float feed=base+(uDensity-0.5)*0.3;
  float speed=uRippleSpeed;
  float thickness=uRippleThickness;
  const float dampT=1.0;const float dampR=10.0;
  if(uEnableRipples==1){
    for(int i=0;i<MAX_CLICKS;++i){
      vec2 pos=uClickPos[i];
      if(pos.x<0.0)continue;
      float cellPixelSize2=8.0*pixelSize;
      vec2 cuv=(((pos-uResolution*.5-cellPixelSize2*.5)/(uResolution)))*vec2(aspectRatio,1.0);
      float t=max(uTime-uClickTimes[i],0.0);
      float r=distance(uv,cuv);
      float waveR=speed*t;
      float ring=exp(-pow((r-waveR)/thickness,2.0));
      float atten=exp(-dampT*t)*exp(-dampR*r);
      feed=max(feed,ring*atten*uRippleIntensity);
    }
  }
  float bayer=Bayer8(fragCoord/uPixelSize)-0.5;
  float bw=step(0.5,feed+bayer);
  float h=fract(sin(dot(floor(fragCoord/uPixelSize),vec2(127.1,311.7)))*43758.5453);
  float jitterScale=1.0+(h-0.5)*uPixelJitter;
  float coverage=bw*jitterScale;
  float M;
  if(uShapeType==SHAPE_CIRCLE) M=maskCircle(pixelUV,coverage);
  else if(uShapeType==SHAPE_TRIANGLE) M=maskTriangle(pixelUV,pixelId,coverage);
  else if(uShapeType==SHAPE_DIAMOND) M=maskDiamond(pixelUV,coverage);
  else M=coverage;
  if(uEdgeFade>0.0){
    vec2 norm=gl_FragCoord.xy/uResolution;
    float edge=min(min(norm.x,norm.y),min(1.0-norm.x,1.0-norm.y));
    float fade=smoothstep(0.0,uEdgeFade,edge);
    M*=fade;
  }
  vec3 color=uColor;
  vec3 srgbColor=mix(color*12.92,1.055*pow(color,vec3(1.0/2.4))-0.055,step(0.0031308,color));
  fragColor=vec4(srgbColor,M);
}`,kd=10,JE=({variant:s="square",pixelSize:t=3,color:i="#B497CF",className:r,style:o,antialias:c=!0,patternScale:d=2,patternDensity:h=1,liquid:p=!1,liquidStrength:m=.1,liquidRadius:M=1,pixelSizeJitter:x=0,enableRipples:v=!0,rippleIntensityScale:b=1,rippleThickness:T=.1,rippleSpeed:w=.3,liquidWobbleSpeed:S=4.5,autoPauseOffscreen:_=!0,speed:D=.5,transparent:L=!0,edgeFade:O=.5,noiseAmount:X=0})=>{const P=Yt.useRef(null),j=Yt.useRef({visible:!0}),R=Yt.useRef(D),B=Yt.useRef(null),Y=Yt.useRef(null);return Yt.useEffect(()=>{const z=P.current;if(!z)return;R.current=D;const K=["antialias","liquid","noiseAmount"],oe={antialias:c,liquid:p,noiseAmount:X};let le=!1;if(!B.current)le=!0;else if(Y.current){for(const H of K)if(Y.current[H]!==oe[H]){le=!0;break}}if(le){if(B.current){const Ie=B.current;Ie.resizeObserver?.disconnect(),cancelAnimationFrame(Ie.raf),Ie.quad?.geometry.dispose(),Ie.material.dispose(),Ie.composer?.dispose(),Ie.renderer.dispose(),Ie.renderer.forceContextLoss(),Ie.renderer.domElement.parentElement===z&&z.removeChild(Ie.renderer.domElement),B.current=null}const H=document.createElement("canvas"),U=new $y({canvas:H,antialias:c,alpha:!0,powerPreference:"high-performance"});U.domElement.style.width="100%",U.domElement.style.height="100%",U.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),z.appendChild(U.domElement),L?U.setClearAlpha(0):U.setClearColor(0,1);const I={uResolution:{value:new pt(0,0)},uTime:{value:0},uColor:{value:new Pt(i)},uClickPos:{value:Array.from({length:kd},()=>new pt(-1,-1))},uClickTimes:{value:new Float32Array(kd)},uShapeType:{value:H1[s]??0},uPixelSize:{value:t*U.getPixelRatio()},uScale:{value:d},uDensity:{value:h},uPixelJitter:{value:x},uEnableRipples:{value:v?1:0},uRippleSpeed:{value:w},uRippleThickness:{value:T},uRippleIntensity:{value:b},uEdgeFade:{value:O}},ie=new Oh,de=new Qc(-1,1,1,-1,0,1),_e=new Jn({vertexShader:KE,fragmentShader:QE,uniforms:I,transparent:!0,depthTest:!1,depthWrite:!1,glslVersion:Nh}),Ue=new to(2,2),Re=new Fi(Ue,_e);ie.add(Re);const He=new i3,et=()=>{const Ie=z.clientWidth||1,rt=z.clientHeight||1;U.setSize(Ie,rt,!1),I.uResolution.value.set(U.domElement.width,U.domElement.height),B.current?.composer&&B.current.composer.setSize(U.domElement.width,U.domElement.height),I.uPixelSize.value=t*U.getPixelRatio()};et();const Ze=new ResizeObserver(et);Ze.observe(z);const De=(()=>{if(typeof window<"u"&&window.crypto?.getRandomValues){const Ie=new Uint32Array(1);return window.crypto.getRandomValues(Ie),Ie[0]/4294967295}return Math.random()})()*1e3;let ve,Ve,Je;if(p){Ve=YE(),Ve.radiusScale=M,ve=new P1(U);const Ie=new F1(ie,de);Je=ZE(Ve.texture,{strength:m,freq:S});const rt=new z1(de,Je);rt.renderToScreen=!0,ve.addPass(Ie),ve.addPass(rt)}if(X>0){ve||(ve=new P1(U),ve.addPass(new F1(ie,de)));const Ie=new Rv("NoiseEffect",`uniform float uTime; uniform float uAmount;
           float hash(vec2 p){ return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453); }
           void mainUv(inout vec2 uv){}
           void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){
             float n=hash(floor(uv*vec2(1920.0,1080.0))+floor(uTime*60.0));
             float g=(n-0.5)*uAmount;
             outputColor=inputColor+vec4(vec3(g),0.0);
           }`,{uniforms:new Map([["uTime",new dn(0)],["uAmount",new dn(X)]])}),rt=new z1(de,Ie);rt.renderToScreen=!0,ve&&ve.passes.length>0&&ve.passes.forEach(xt=>xt.renderToScreen=!1),ve.addPass(rt)}ve&&ve.setSize(U.domElement.width,U.domElement.height);const Ye=Ie=>{const rt=U.domElement.getBoundingClientRect(),xt=U.domElement.width/rt.width,kt=U.domElement.height/rt.height,k=(Ie.clientX-rt.left)*xt,Qt=(rt.height-(Ie.clientY-rt.top))*kt;return{fx:k,fy:Qt,w:U.domElement.width,h:U.domElement.height}},Bt=Ie=>{const{fx:rt,fy:xt}=Ye(Ie),kt=B.current?.clickIx??0;I.uClickPos.value[kt].set(rt,xt),I.uClickTimes.value[kt]=I.uTime.value,B.current&&(B.current.clickIx=(kt+1)%kd)},ct=Ie=>{if(!Ve)return;const{fx:rt,fy:xt,w:kt,h:k}=Ye(Ie);Ve.addTouch({x:rt/kt,y:xt/k})};U.domElement.addEventListener("pointerdown",Bt,{passive:!0}),U.domElement.addEventListener("pointermove",ct,{passive:!0});let ut=0;const At=()=>{if(_&&!j.current.visible){ut=requestAnimationFrame(At);return}I.uTime.value=De+He.getElapsedTime()*R.current,Je&&(Je.uniforms.get("uTime").value=I.uTime.value),ve?(Ve&&Ve.update(),ve.passes.forEach(Ie=>{const rt=Ie.effects;rt&&rt.forEach(xt=>{const kt=xt.uniforms?.get("uTime");kt&&(kt.value=I.uTime.value)})}),ve.render()):U.render(ie,de),ut=requestAnimationFrame(At)};ut=requestAnimationFrame(At),B.current={renderer:U,scene:ie,camera:de,material:_e,clock:He,clickIx:0,uniforms:I,resizeObserver:Ze,raf:ut,quad:Re,timeOffset:De,composer:ve,touch:Ve,liquidEffect:Je}}else{const H=B.current;if(H.uniforms.uShapeType.value=H1[s]??0,H.uniforms.uPixelSize.value=t*H.renderer.getPixelRatio(),H.uniforms.uColor.value.set(i),H.uniforms.uScale.value=d,H.uniforms.uDensity.value=h,H.uniforms.uPixelJitter.value=x,H.uniforms.uEnableRipples.value=v?1:0,H.uniforms.uRippleIntensity.value=b,H.uniforms.uRippleThickness.value=T,H.uniforms.uRippleSpeed.value=w,H.uniforms.uEdgeFade.value=O,L?H.renderer.setClearAlpha(0):H.renderer.setClearColor(0,1),H.liquidEffect){const U=H.liquidEffect.uniforms.get("uFreq");U&&(U.value=S)}H.touch&&(H.touch.radiusScale=M)}return Y.current=oe,()=>{if(le||!B.current)return;const H=B.current;H.resizeObserver?.disconnect(),cancelAnimationFrame(H.raf),H.quad?.geometry.dispose(),H.material.dispose(),H.composer?.dispose(),H.renderer.dispose(),H.renderer.forceContextLoss(),H.renderer.domElement.parentElement===z&&z.removeChild(H.renderer.domElement),B.current=null}},[c,p,X,t,d,h,v,b,T,w,x,O,L,m,M,S,_,s,i,D]),y.jsx("div",{ref:P,className:`pixel-blast-container ${r??""}`,style:o,"aria-label":"PixelBlast interactive background"})};function jd(s){return s>=1e8?(s/1e8).toFixed(1)+"亿":s>=1e4?(s/1e4).toFixed(1)+"万":s.toString()}function $E(s){const t=Math.floor(s/60),i=s%60;return`${t}:${String(i).padStart(2,"0")}`}function eT({bvid:s,onPlay:t}){const[i,r]=Yt.useState(null),[o,c]=Yt.useState(!1);return Yt.useEffect(()=>{fetch(`/bili-api/x/web-interface/view?bvid=${s}`,{credentials:"omit"}).then(d=>d.json()).then(d=>{if(d.code!==0)throw new Error;const h=d.data;r({title:h.title,cover:h.pic,view:h.stat?.view??0,danmaku:h.stat?.danmaku??0,like:h.stat?.like??0,duration:h.duration??0,pubdate:h.pubdate??0})}).catch(()=>c(!0))},[s]),y.jsxs("div",{onClick:d=>{d.stopPropagation(),t(s)},className:"group block rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:border-sky-500/30 transition-all cursor-pointer",children:[y.jsxs("div",{className:"relative w-full overflow-hidden",style:{paddingBottom:"56.25%"},children:[i?y.jsx("img",{src:i.cover,alt:i.title,referrerPolicy:"no-referrer",className:"absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"}):y.jsx("div",{className:"absolute inset-0 bg-white/5 animate-pulse"}),i&&y.jsx("span",{className:"absolute bottom-2 right-2 bg-black/70 text-white text-xs px-1.5 py-0.5 rounded font-mono",children:$E(i.duration)}),y.jsx("div",{className:"absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20",children:y.jsx("div",{className:"w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center",children:y.jsx("svg",{className:"w-5 h-5 text-white ml-0.5",viewBox:"0 0 24 24",fill:"currentColor",children:y.jsx("path",{d:"M8 5v14l11-7z"})})})})]}),y.jsx("div",{className:"p-4",children:o?y.jsx("p",{className:"text-xs text-slate-500",children:"加载失败"}):i?y.jsxs(y.Fragment,{children:[y.jsx("p",{className:"text-sm font-medium text-slate-100 line-clamp-2 leading-snug group-hover:text-sky-300 transition-colors",children:i.title}),y.jsxs("div",{className:"mt-3 flex items-center gap-3 text-xs text-slate-500",children:[y.jsxs("span",{className:"flex items-center gap-1",children:[y.jsx("svg",{className:"w-3.5 h-3.5",viewBox:"0 0 24 24",fill:"currentColor",children:y.jsx("path",{d:"M8 5v14l11-7z"})}),jd(i.view)]}),y.jsxs("span",{className:"flex items-center gap-1",children:[y.jsx("svg",{className:"w-3.5 h-3.5",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:y.jsx("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})}),jd(i.danmaku)]}),y.jsxs("span",{className:"flex items-center gap-1",children:[y.jsxs("svg",{className:"w-3.5 h-3.5",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[y.jsx("path",{d:"M14 9V5a3 3 0 0 0-3-3l-4 10v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z"}),y.jsx("path",{d:"M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"})]}),jd(i.like)]}),y.jsx("span",{className:"ml-auto text-slate-600",children:new Date(i.pubdate*1e3).toLocaleDateString("zh-CN")})]})]}):y.jsxs(y.Fragment,{children:[y.jsx("div",{className:"h-4 bg-white/5 rounded animate-pulse mb-2"}),y.jsx("div",{className:"h-4 bg-white/5 rounded animate-pulse w-2/3"})]})})]})}function G1(...s){return s.filter(Boolean).join(" ")}function tT(){Yt.useEffect(()=>{document.documentElement.classList.add("dark")},[])}function nT(){Yt.useEffect(()=>{const s=Array.from(document.querySelectorAll("[data-reveal]"));if(s.length===0)return;if(typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches){s.forEach(r=>r.classList.add("is-visible"));return}const i=new IntersectionObserver(r=>{for(const o of r)o.isIntersecting&&(o.target.classList.add("is-visible"),i.unobserve(o.target))},{root:null,threshold:.12,rootMargin:"40px 0px -10% 0px"});return s.forEach(r=>i.observe(r)),()=>i.disconnect()},[])}function ql({id:s,title:t,desc:i,icon:r}){return y.jsxs("div",{className:"mb-8",children:[s?y.jsx("div",{id:s,className:"relative top-[-96px]"}):null,y.jsxs("div",{className:"flex items-center gap-3",children:[r?y.jsx("img",{src:r,alt:t,className:"h-8 w-8 rounded-lg object-cover",draggable:!1,loading:"lazy"}):null,y.jsx("h2",{className:"text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100",children:t})]}),i?y.jsx("p",{className:"mt-2 text-sm text-slate-600 dark:text-slate-400",children:i}):null]})}function Cn({children:s}){return y.jsx("span",{className:"glass inline-flex items-center rounded-full px-3 py-1 text-xs text-slate-800 shadow-sm dark:text-slate-100",children:s})}function Pr({title:s,desc:t,href:i,footer:r,badge:o,icon:c}){const d=y.jsx("div",{className:"glass glass-no-fog group relative p-5 transition",children:y.jsxs("div",{className:"relative z-10",children:[y.jsxs("div",{className:"flex items-start justify-between gap-4",children:[y.jsxs("div",{className:"flex items-center gap-2",children:[c&&y.jsx("div",{className:"shrink-0",children:c}),y.jsx("h3",{className:"text-base font-semibold text-slate-900 dark:text-slate-100",children:s}),o]}),i?y.jsx("span",{className:"shrink-0 text-xs text-slate-500 dark:text-slate-400",children:"打开 →"}):null]}),y.jsx("p",{className:"mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400",children:t}),r?y.jsx("div",{className:"mt-4",children:r}):null]})});return i?y.jsx("a",{href:i,target:"_blank",rel:"noreferrer",className:"block",children:d}):d}function iT({bvid:s,onClose:t}){return y.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4",children:[y.jsx("div",{className:"absolute inset-0 bg-black/80 backdrop-blur-sm",onClick:t}),y.jsxs("div",{className:"relative w-full max-w-4xl rounded-2xl overflow-hidden bg-slate-900 shadow-2xl border border-white/10",children:[y.jsx("button",{onClick:t,className:"absolute top-4 right-4 z-10 rounded-full bg-black/50 p-2 text-white hover:bg-white/20 transition-colors",children:y.jsx("svg",{className:"w-6 h-6",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:y.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})}),y.jsx("div",{className:"relative w-full",style:{paddingBottom:"56.25%"},children:y.jsx("iframe",{src:`https://player.bilibili.com/player.html?bvid=${s}&autoplay=1&danmaku=0`,className:"absolute inset-0 w-full h-full",scrolling:"no",frameBorder:"0",allowFullScreen:!0,title:"B站视频"})}),y.jsxs("div",{className:"p-4 bg-slate-900 border-t border-white/10 flex items-center justify-between",children:[y.jsxs("a",{href:`https://www.bilibili.com/video/${s}`,target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-2 text-sm text-sky-400 hover:text-sky-300 transition-colors",children:[y.jsx("svg",{className:"w-4 h-4",viewBox:"0 0 24 24",fill:"currentColor",children:y.jsx("path",{d:"M8 5v14l11-7z"})}),"去B站观看"]}),y.jsx("span",{className:"text-xs text-slate-500 font-mono",children:s})]})]})]})}function aT(){tT();const s=Yt.useRef(null),t=Yt.useRef(null),i=Yt.useRef(null),[r,o]=Yt.useState("top"),[c,d]=Yt.useState(!1),[h,p]=Yt.useState(!1),[m,M]=Yt.useState(!1),[x,v]=Yt.useState(!1),[b,T]=Yt.useState("");return nT(),Yt.useEffect(()=>{const w=()=>{const S=["top","music","vip","tools","projects","contact"];let _="top";for(const D of S){const L=document.getElementById(D);L&&L.getBoundingClientRect().top<=800&&(_=D)}o(_)};return window.addEventListener("scroll",w),()=>window.removeEventListener("scroll",w)},[]),Yt.useMemo(()=>[{title:"金胡萝卜会员",description:"存图、抓图、截图三合一浏览器插件，提升图片收集效率。",href:"#",tags:["Chrome扩展","JavaScript","UI设计"]},{title:"洪绘敲木鱼应用",description:"烦恼来了，通通敲走。现代解压应用，支持多种音效和主题。",href:"#",tags:["React Native","音频处理","移动端"]},{title:"洪绘AI网站构建工具",description:"构建具有AI优势的先进网站，集成智能内容生成和优化。",href:"#",tags:["AI集成","Next.js","Tailwind"]},{title:"博客系统",description:"分享设计与科技生活，持续沉淀。支持Markdown和自定义主题。",href:"https://blog.example.com",tags:["Vue.js","Node.js","MongoDB"]},{title:"轻量工具集",description:"日常开发工具集合，包括代码格式化、图片压缩、JSON处理等。",href:"https://github.com/",tags:["TypeScript","工具库","开源"]},{title:"设计系统组件库",description:"统一的设计语言和可复用组件，提升团队开发效率。",href:"https://github.com/",tags:["React","Storybook","设计系统"]}],[]),Yt.useMemo(()=>[{badge:{text:"免费",tone:"green"},title:`简单、配套、可用，
MIDI伴奏包。`,cta:"进一步了解 midi配布",href:"https://v.luoboy.com/",imageSrc:"/img/v.luoboy.webp",imageAlt:"插件预览"},{badge:{text:"推荐",tone:"purple"},title:`为你的作品做好前期工作，
MIDI定制。`,cta:"进一步了解",href:"https://v.luoboy.com/midi-diy.html",imageSrc:"/img/midi-SV.webp",imageAlt:"网站预览"},{badge:{text:"热门",tone:"red"},title:`烦恼来了，
去看鬼畜。`,cta:"立即去关注",href:"https://space.bilibili.com/11192010",imageSrc:"/img/bilibili.webp",imageAlt:"应用预览"},{badge:{text:"推荐",tone:"purple"},title:`更多等待更新，
coming soon。`,cta:"进一步了解",href:"#",imageSrc:"/img/avatar.webp",imageAlt:"博客图标"},{badge:{text:"新品",tone:"green"},title:`更多等待更新，
coming soon。`,cta:"进一步了解",href:"#",imageSrc:"/img/avatar.webp",imageAlt:"工具图标"},{badge:{text:"热门",tone:"red"},title:`更多等待更新，
coming soon。`,cta:"进一步了解",href:"#",imageSrc:"/img/avatar.webp",imageAlt:"开源图标"}],[]),y.jsxs("div",{ref:s,className:"glass-spotlight min-h-dvh text-slate-900 dark:text-slate-100",onPointerMove:w=>{s.current&&w.pointerType!=="touch"&&(t.current&&cancelAnimationFrame(t.current),t.current=requestAnimationFrame(()=>{const _=w.target?.closest?.(".glass, .glass-about");if(!_)return;i.current&&i.current!==_&&(i.current.style.removeProperty("--lx"),i.current.style.removeProperty("--ly")),i.current=_;const D=_.getBoundingClientRect(),L=(w.clientX-D.left)/D.width*100,O=(w.clientY-D.top)/D.height*100;_.style.setProperty("--lx",`${L.toFixed(2)}%`),_.style.setProperty("--ly",`${O.toFixed(2)}%`)}))},onPointerLeave:()=>{i.current&&(i.current.style.removeProperty("--lx"),i.current.style.removeProperty("--ly"),i.current=null)},children:[y.jsxs("div",{className:"pointer-events-none fixed inset-0 -z-10 overflow-hidden",children:[y.jsx("div",{className:"absolute inset-0 bg-slate-950"}),y.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"}),y.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(1200px_800px_at_20%_-10%,rgba(255,255,255,0.10),rgba(0,0,0,0)_55%),radial-gradient(900px_700px_at_110%_10%,rgba(255,255,255,0.08),rgba(0,0,0,0)_55%),radial-gradient(800px_700px_at_50%_120%,rgba(255,255,255,0.06),rgba(0,0,0,0)_60%)]"}),y.jsx("div",{className:"absolute left-1/2 top-[-320px] h-[780px] w-[780px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.12),rgba(255,255,255,0)_65%)] blur-3xl"}),y.jsx("div",{className:"absolute bottom-[-360px] left-[-260px] h-[780px] w-[780px] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.08),rgba(255,255,255,0)_65%)] blur-3xl"}),y.jsx("div",{className:"absolute -right-72 top-1/3 h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.06),rgba(255,255,255,0)_65%)] blur-3xl"}),y.jsx("div",{className:"absolute top-1/4 left-1/4 h-[400px] w-[400px] rounded-full bg-sky-500/5 blur-3xl bg-float-glow"}),y.jsx("div",{className:"absolute bottom-1/3 right-1/4 h-[300px] w-[300px] rounded-full bg-violet-500/5 blur-3xl bg-float-glow",style:{animationDelay:"5s"}}),y.jsx("div",{className:"absolute top-1/2 left-1/3 h-[250px] w-[250px] rounded-full bg-emerald-500/5 blur-3xl bg-float-glow",style:{animationDelay:"10s"}})]}),y.jsx("header",{className:"sticky top-0 z-20",children:y.jsx("div",{className:"mx-auto px-4 py-4 flex justify-center",children:y.jsxs("div",{className:"nav-floating glass flex items-center justify-between gap-6 rounded-full px-8 py-3 shadow-lg shadow-black/30 border border-white/10",children:[y.jsx("a",{href:"#top",className:"flex items-center gap-3 flex-shrink-0",children:y.jsx("img",{src:"/img/avatar.JPG",alt:"logo",className:"h-9 w-9 rounded-full object-cover",draggable:!1,loading:"lazy"})}),y.jsx("nav",{className:"hidden md:flex items-center gap-2",children:[["首页","top"],["MIDI分享","music"],["会员","vip"],["工具","tools"],["服务","projects"],["联系","contact"]].map(([w,S])=>y.jsx("a",{href:`#${S}`,className:G1("text-sm transition-all px-4 py-2 rounded-full",r===S?"text-slate-100 nav-active":"text-slate-300 hover:text-slate-100"),children:w},S))}),y.jsx("button",{type:"button",className:"md:hidden flex items-center justify-center h-8 w-8 text-slate-300 hover:text-slate-100 transition-colors",onClick:()=>d(!c),"aria-label":"菜单",children:y.jsx("svg",{className:"h-6 w-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})}),y.jsx("div",{className:"hidden md:block w-px h-6 bg-white/20"}),y.jsxs("div",{className:"flex items-center gap-4",children:[y.jsx("a",{href:"https://space.bilibili.com/11192010",target:"_blank",rel:"noreferrer",className:"flex items-center justify-center h-8 w-8 text-slate-300 hover:text-slate-100 transition-colors flex-shrink-0","aria-label":"哔哩哔哩",title:"哔哩哔哩",children:y.jsx("svg",{className:"h-5 w-5",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",children:y.jsx("path",{d:"M569.685333 100.010667a29.866667 29.866667 0 1 1 45.312 38.912l-21.6064 25.173333c102.178133 4.5568 148.360533 18.875733 181.179734 63.1296 23.620267 36.522667 27.4432 74.632533 27.562666 230.4v7.901867C802.133333 748.9024 783.8208 767.658667 453.8368 768H443.733333C107.4176 768 85.742933 752.0768 85.333333 474.043733v-24.132266c0.256-147.234133 4.317867-184.695467 27.562667-222.685867 31.8464-42.973867 78.2336-57.873067 181.316267-62.976L272.469333 138.922667a29.866667 29.866667 0 1 1 45.312-38.946134l52.445867 61.0304 1.5872 2.030934h143.8208l1.604267-2.030934zM563.2 222.7712H324.949333l-5.5808 0.187733c-101.4272 3.4304-136.311467 12.970667-155.989333 36.642134l-0.989867 1.194666c-13.4144 23.586133-16.964267 54.698667-17.3056 182.869334v29.354666c0.256 141.226667 8.2432 186.538667 30.6176 205.448534 26.0096 21.981867 86.033067 29.5424 259.669334 29.781333h16.725333c173.636267-0.238933 233.642667-7.799467 259.669333-29.781333 22.357333-18.909867 30.3616-64.221867 30.634667-205.431467v-7.509333c0-147.712-3.2256-181.248-16.605867-203.656534L725.333333 261.12l-1.297066-1.604267c-20.224-24.4736-53.930667-33.604267-154.180267-36.539733l-6.638933-0.170667z m-114.346667 266.734933a25.378133 25.378133 0 0 1 22.272 13.0048c11.2128 19.848533 19.797333 29.354667 25.4976 29.5424 2.594133 0.085333 6.0416-3.6864 9.966934-8.925866 2.218667-2.986667 4.266667-6.2976 6.007466-9.591467 3.6352-8.2944 8.874667-13.824 14.557867-16.878933a23.978667 23.978667 0 0 1 20.821333-1.058134 25.4976 25.4976 0 0 1 13.943467 33.348267c-2.696533 6.536533-7.406933 15.547733-14.301867 24.746667-13.960533 18.688-31.317333 30.190933-52.7872 29.44-16.247467-0.5632-31.470933-8.362667-45.755733-23.7056-14.0288 13.141333-28.416 20.599467-43.741867 21.9136-24.337067 0.904533-42.171733-9.710933-57.224533-26.9312a118.306133 118.306133 0 0 1-16.213333-23.7056 25.4976 25.4976 0 0 1 11.383466-34.304 25.582933 25.582933 0 0 1 34.269867 11.178666c4.266667 7.031467 6.6048 10.2912 9.181867 13.2608 5.1712 5.905067 9.984 9.728 13.858133 9.608534 6.6048-0.221867 15.189333-9.045333 25.941333-27.989334a25.378133 25.378133 0 0 1 22.3232-12.970666z m71.133867-143.121066a29.866667 29.866667 0 0 1 37.102933-20.1728l98.2016 29.013333a29.866667 29.866667 0 0 1-16.930133 57.2928l-98.2016-29.013333a29.866667 29.866667 0 0 1-20.1728-37.12z m-148.138667 0a29.866667 29.866667 0 0 1-20.1728 37.102933l-98.2016 29.013333a29.866667 29.866667 0 0 1-16.930133-57.275733l98.2016-29.013333a29.866667 29.866667 0 0 1 37.102933 20.1728z"})})}),y.jsx("a",{href:"https://ifdian.net/a/HLBXE",target:"_blank",rel:"noreferrer",className:"flex items-center justify-center h-8 w-8 text-slate-300 hover:text-slate-100 transition-colors flex-shrink-0","aria-label":"爱发电",title:"爱发电",children:y.jsxs("svg",{className:"h-5 w-5",viewBox:"0 0 1322 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",children:[y.jsx("path",{d:"M498.73322519 613.27172903c-14.25872488 0-25.75083059 11.49210654-25.7508306 25.7508306S484.4745003 664.77339104 498.73322519 664.77339104c14.25872488 0 25.75083059-11.49210654 25.75083059-25.75083141 0-14.25872488-11.49210654-25.75083059-25.75083059-25.7508306zM741.76999258 690.52422165c-14.25872488 0-25.75083059 11.49210654-25.75083142 25.75083059s11.49210654 25.75083059 25.75083142 25.75083143 25.75083059-11.49210654 25.75083059-25.75083143c0-14.0459079-11.49210654-25.53801443-25.75083059-25.75083059z"}),y.jsx("path",{d:"M1130.79907318 683.07563455c-11.06647256-6.81013696-23.8354802-11.06647256-36.81730316-12.34337366 28.73026594-70.01672168 47.03250943-161.74075617-15.32280899-252.82633969-94.91628598-138.96936007-231.33184388-211.53988312-405.20315588-214.94495159-49.58631079-1.06408411-107.89810977 1.27690109-169.61497724 3.83070244-71.71925592 2.76661835-167.27399204 6.59731998-231.97029483 1.27690027 12.9818238-7.02295395 26.8149147-13.83309092 38.73265521-19.57914376 45.75560833-22.34576212 81.50882822-39.58392151 69.59108854-70.22953867-6.38450381-17.87660952-24.89956347-27.24054868-55.54518064-28.0918158C260.37842737 88.67835684 121.40906728 125.92129397 96.50950381 188.70224473c-14.0459079 35.32758591-16.38689228 103.42895718 125.98753547 163.86892437 58.52461597 24.89956347 224.09607376 55.11954666 287.94110861 61.50405047 14.47154105 1.27690109 28.73026594 4.2563356 42.35054068 9.36393832-14.68435803 9.57675531-29.58153306 19.79196075-44.69152505 30.0071662-26.17646457-14.89717502-69.16545457-32.56096756-101.08797199-10.85365558-11.91773969 7.66140408-19.36632761 20.64322788-19.79196075 34.90195276-0.42563397 17.45097638 10.21520544 34.68913577 22.13294513 48.30940971-47.03250943 37.66857111-85.12671367 74.06024111-98.74698762 102.15205609-15.109992 34.47631878-21.28167801 91.08558352 7.02295395 146.205131 35.75321988 70.01672168 114.49542975 118.75176535 234.52409537 145.14104609 156.84596961 34.26350262 292.19744422 3.40506848 381.79331049-43.84025711 49.79912778-26.38928156 85.33953067-57.67334885 102.36487307-85.55234766 5.3204197 1.70253425 10.64083942 3.40506848 16.17407611 5.10760273 7.66140408 2.34098438 15.32280818 4.68196958 22.55857911 7.23577094 23.62266321 8.29985422 50.01194394 7.02295395 70.22953867-2.97943452l1.06408327-0.63845096c14.68435803-7.4485871 25.96364758-20.64322788 31.07125113-36.39167001 12.55619064-42.13772288-24.26111334-65.12193594-46.60687628-79.16784302z m-668.88315198-197.49397604l-14.25872406 10.42802243c-4.2563356-4.2563356-8.08703806-9.15112133-11.06647256-14.47154105 5.53323669-1.70253425 15.109992 0.21281699 25.32519662 4.04351862zM1130.79907318 747.77193653c-1.06408411 3.19225149-3.40506848 5.74605286-7.66140408 8.08703805-8.5126712 4.2563356-21.06886184 4.46915258-32.3481514 0.63845014-7.66140408-2.76661835-15.96125913-5.3204197-24.26111334-7.87422108-15.32280818-4.68196958-41.07363959-12.55619064-45.96842533-18.51506048-8.08703806-10.64083942-23.19702924-12.9818238-34.05068481-4.89478574s-12.9818238 23.19702924-4.89478655 34.05068564c2.97943533 3.61788547 6.17168682 6.81013696 10.00238927 9.57675531-37.03012014 51.28884503-199.62214343 153.44090112-429.67708703 103.00332321-103.64177417-22.77139609-173.44567886-64.05785183-201.75031082-119.81584946-20.43041089-40.22237246-15.74844214-81.50882822-5.95886985-104.06740731 28.0918158-58.52461597 231.33184388-193.23763962 361.15008179-269.63886512 11.49210654-6.81013696 15.32280818-21.70731199 8.5126712-33.19941852s-22.34576212-16.17407529-33.1994177-8.51267119c-10.42802243 6.17168682-45.96842532 27.24054868-91.51121749 56.18363076-15.32280818-10.42802243-41.92490671-22.98421307-84.48826273-27.24054785-67.46292032-6.81013696-223.24480664-36.604487-273.68238455-57.88616583C205.04606372 292.34401889 123.11160153 251.90883026 141.20102804 206.36603808c4.2563356-10.64083942 24.04829636-27.66618182 66.82447019-44.05307409 29.15589908-11.06647256 59.58869925-18.51506049 90.44713339-22.34576212l-9.5767553 4.68196875c-29.15589908 14.25872488-60.86560034 30.00716619-82.36009534 48.73504368-1.48971726-0.85126712-2.97943533-1.91535123-4.2563356-3.1922515-8.93830518-9.57675531-24.04829636-10.21520544-33.83786865-1.06408411l-0.42563398 0.42563315c-9.7895723 9.15112133-10.00238845 24.47393032-0.85126712 34.26350263 8.72548819 9.15112133 21.494495 15.96125913 37.6685711 21.06886185 0.63845014 0.21281699 1.06408411 0.42563397 1.70253425 0.63845012 56.60926474 17.45097638 157.0587866 15.32280818 298.58194803 9.57675532 61.07841733-2.34098438 118.75176535-4.68196958 166.84835806-3.83070246 159.61258794 3.19225149 279.42843741 66.6116532 366.47050231 194.08890757 53.41701242 78.31657673 34.26350262 155.35625235 3.61788547 222.3935387-3.83070245-2.97943533-7.4485871-6.38450381-10.42802242-10.00238847-8.5126712-10.21520544-23.62266321-11.91773969-34.05068565-3.83070245-10.42802243 8.29985422-12.13055667 23.62266321-3.83070245 34.05068564 4.89478574 6.17168682 30.21998318 35.32758591 61.50405049 32.77378455h1.70253422c1.06408411-0.21281699 1.91535123 0 2.97943534-0.21281699 21.28167801-3.83070245 34.90195276-2.97943533 47.45814258 5.10760272 16.81252625 10.64083942 24.89956347 16.81252625 23.40984622 22.13294595z"})]})})]})]})})}),c&&y.jsx("div",{className:"md:hidden fixed top-[60px] left-0 right-0 z-20 flex justify-center px-3",children:y.jsx("nav",{className:"nav-floating glass w-full max-w-sm rounded-2xl px-4 py-3 mt-2 shadow-lg shadow-black/30 border border-white/10 flex flex-col gap-1",children:[["首页","top"],["MIDI分享","music"],["会员","vip"],["工具","tools"],["服务","projects"],["联系","contact"]].map(([w,S])=>y.jsx("a",{href:`#${S}`,onClick:()=>d(!1),className:G1("text-sm transition-all px-4 py-2 rounded-lg",r===S?"text-slate-100 nav-active":"text-slate-300 hover:text-slate-100"),children:w},S))})}),y.jsxs("main",{id:"top",className:"mx-auto max-w-6xl px-4",children:[y.jsx("section",{className:"pt-0 md:pt-0",children:y.jsxs("div",{className:"relative",children:[y.jsx("div",{className:"absolute inset-x-0 top-0 -z-10",style:{height:"55%"},children:y.jsx(JE,{variant:"circle",pixelSize:6,color:"#818cf8",patternScale:3,patternDensity:1.2,pixelSizeJitter:.5,enableRipples:!0,rippleSpeed:.4,rippleThickness:.12,rippleIntensityScale:1.5,liquid:!0,liquidStrength:.12,liquidRadius:1.2,liquidWobbleSpeed:5,speed:.6,edgeFade:.2,transparent:!0})}),y.jsxs("div",{"data-reveal":!0,className:"reveal relative z-10 text-center py-16",children:[y.jsx("p",{className:"mb-4 text-xs tracking-[0.3em] uppercase text-slate-500",children:"胡萝卜须儿 / 鬼畜 · MIDI · 独立开发 · EST. 2019"}),y.jsx("h1",{className:"hero-title text-[clamp(3rem,10vw,8rem)] font-black leading-none tracking-tight uppercase",children:y.jsx("span",{className:"hero-word-white",children:"胡萝卜须儿"})}),y.jsx("div",{className:"mt-8 flex items-center justify-center gap-3",children:y.jsxs("a",{href:"https://space.bilibili.com/11192010",target:"_blank",rel:"noreferrer",className:"glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm text-slate-200 hover:text-white transition-all",children:["访问B站 ",y.jsx("span",{"aria-hidden":!0,children:"↗"})]})})]}),y.jsx("div",{"data-reveal":!0,className:"reveal relative z-10 pb-8",children:y.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6",children:Hx.map(w=>y.jsx(eT,{bvid:w,onPlay:S=>{T(S),v(!0)}},w))})})]})}),y.jsx("section",{"data-reveal":!0,className:"reveal py-10","aria-label":"about",children:y.jsxs("div",{className:"glass-about relative overflow-hidden p-8 md:p-12",children:[y.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[y.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 animate-flow"}),y.jsx("div",{className:"absolute inset-0 bg-gradient-to-tl from-cyan-500/3 via-transparent to-blue-500/3 animate-flow-reverse"})]}),y.jsxs("div",{className:"absolute inset-0 pointer-events-none overflow-hidden",children:[y.jsx("div",{className:"absolute top-[10%] right-0 whitespace-nowrap animate-danmaku text-sm text-slate-300",children:"MIDI配布中..."}),y.jsx("div",{className:"absolute top-[20%] right-0 whitespace-nowrap animate-danmaku text-sm text-slate-400",style:{animationDelay:"-2s"},children:"鬼畜素材"}),y.jsx("div",{className:"absolute top-[30%] right-0 whitespace-nowrap animate-danmaku text-sm text-slate-300",style:{animationDelay:"-4s"},children:"VOCALOID"}),y.jsx("div",{className:"absolute top-[40%] right-0 whitespace-nowrap animate-danmaku text-sm text-slate-400",style:{animationDelay:"-6s"},children:"调教教程"}),y.jsx("div",{className:"absolute top-[50%] right-0 whitespace-nowrap animate-danmaku text-sm text-slate-300",style:{animationDelay:"-8s"},children:"ACE Studio"}),y.jsx("div",{className:"absolute top-[60%] right-0 whitespace-nowrap animate-danmaku text-sm text-slate-400",style:{animationDelay:"-10s"},children:"UTAU"}),y.jsx("div",{className:"absolute top-[70%] right-0 whitespace-nowrap animate-danmaku text-sm text-slate-300",style:{animationDelay:"-12s"},children:"气人UP主"}),y.jsx("div",{className:"absolute top-[80%] right-0 whitespace-nowrap animate-danmaku text-sm text-slate-400",style:{animationDelay:"-14s"},children:"鬼畜混音"})]}),y.jsxs("div",{className:"relative z-10 space-y-8",children:[y.jsx("div",{className:"space-y-4",children:y.jsx("h3",{className:"text-2xl font-bold text-slate-100",children:"永远相信美好的事情即将发生"})}),y.jsx("div",{className:"h-px bg-gradient-to-r from-transparent via-slate-500/30 to-transparent"}),y.jsxs("div",{className:"flex items-center justify-between pt-4",children:[y.jsxs("div",{className:"flex items-center gap-4",children:[y.jsx("img",{src:"/img/avatar.JPG",alt:"胡萝卜须儿",className:"h-12 w-12 rounded-full border border-slate-400/30 object-cover",draggable:!1,loading:"lazy"}),y.jsxs("div",{children:[y.jsx("div",{className:"font-semibold text-slate-100",children:"胡萝卜须儿"}),y.jsx("div",{className:"text-sm text-slate-400",children:"鬼畜UP主、独立开发者"})]})]}),y.jsxs("div",{className:"flex items-center gap-3 text-sm",children:[y.jsx("a",{className:"text-slate-400 hover:text-sky-400 transition-colors",href:"https://space.bilibili.com/11192010",target:"_blank",rel:"noreferrer",title:"哔哩哔哩",children:y.jsx("svg",{className:"h-5 w-5",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",children:y.jsx("path",{d:"M569.685333 100.010667a29.866667 29.866667 0 1 1 45.312 38.912l-21.6064 25.173333c102.178133 4.5568 148.360533 18.875733 181.179734 63.1296 23.620267 36.522667 27.4432 74.632533 27.562666 230.4v7.901867C802.133333 748.9024 783.8208 767.658667 453.8368 768H443.733333C107.4176 768 85.742933 752.0768 85.333333 474.043733v-24.132266c0.256-147.234133 4.317867-184.695467 27.562667-222.685867 31.8464-42.973867 78.2336-57.873067 181.316267-62.976L272.469333 138.922667a29.866667 29.866667 0 1 1 45.312-38.946134l52.445867 61.0304 1.5872 2.030934h143.8208l1.604267-2.030934zM563.2 222.7712H324.949333l-5.5808 0.187733c-101.4272 3.4304-136.311467 12.970667-155.989333 36.642134l-0.989867 1.194666c-13.4144 23.586133-16.964267 54.698667-17.3056 182.869334v29.354666c0.256 141.226667 8.2432 186.538667 30.6176 205.448534 26.0096 21.981867 86.033067 29.5424 259.669334 29.781333h16.725333c173.636267-0.238933 233.642667-7.799467 259.669333-29.781333 22.357333-18.909867 30.3616-64.221867 30.634667-205.431467v-7.509333c0-147.712-3.2256-181.248-16.605867-203.656534L725.333333 261.12l-1.297066-1.604267c-20.224-24.4736-53.930667-33.604267-154.180267-36.539733l-6.638933-0.170667z m-114.346667 266.734933a25.378133 25.378133 0 0 1 22.272 13.0048c11.2128 19.848533 19.797333 29.354667 25.4976 29.5424 2.594133 0.085333 6.0416-3.6864 9.966934-8.925866 2.218667-2.986667 4.266667-6.2976 6.007466-9.591467 3.6352-8.2944 8.874667-13.824 14.557867-16.878933a23.978667 23.978667 0 0 1 20.821333-1.058134 25.4976 25.4976 0 0 1 13.943467 33.348267c-2.696533 6.536533-7.406933 15.547733-14.301867 24.746667-13.960533 18.688-31.317333 30.190933-52.7872 29.44-16.247467-0.5632-31.470933-8.362667-45.755733-23.7056-14.0288 13.141333-28.416 20.599467-43.741867 21.9136-24.337067 0.904533-42.171733-9.710933-57.224533-26.9312a118.306133 118.306133 0 0 1-16.213333-23.7056 25.4976 25.4976 0 0 1 11.383466-34.304 25.582933 25.582933 0 0 1 34.269867 11.178666c4.266667 7.031467 6.6048 10.2912 9.181867 13.2608 5.1712 5.905067 9.984 9.728 13.858133 9.608534 6.6048-0.221867 15.189333-9.045333 25.941333-27.989334a25.378133 25.378133 0 0 1 22.3232-12.970666z m71.133867-143.121066a29.866667 29.866667 0 0 1 37.102933-20.1728l98.2016 29.013333a29.866667 29.866667 0 0 1-16.930133 57.2928l-98.2016-29.013333a29.866667 29.866667 0 0 1-20.1728-37.12z m-148.138667 0a29.866667 29.866667 0 0 1-20.1728 37.102933l-98.2016 29.013333a29.866667 29.866667 0 0 1-16.930133-57.275733l98.2016-29.013333a29.866667 29.866667 0 0 1 37.102933 20.1728z"})})}),y.jsx("a",{className:"text-slate-400 hover:text-orange-400 transition-colors",href:"https://ifdian.net/a/HLBXE",target:"_blank",rel:"noreferrer",title:"爱发电",children:y.jsxs("svg",{className:"h-5 w-5",viewBox:"0 0 1322 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",children:[y.jsx("path",{d:"M498.73322519 613.27172903c-14.25872488 0-25.75083059 11.49210654-25.7508306 25.7508306S484.4745003 664.77339104 498.73322519 664.77339104c14.25872488 0 25.75083059-11.49210654 25.75083059-25.75083141 0-14.25872488-11.49210654-25.75083059-25.75083059-25.7508306zM741.76999258 690.52422165c-14.25872488 0-25.75083059 11.49210654-25.75083142 25.75083059s11.49210654 25.75083059 25.75083142 25.75083143 25.75083059-11.49210654 25.75083059-25.75083143c0-14.0459079-11.49210654-25.53801443-25.75083059-25.75083059z"}),y.jsx("path",{d:"M1130.79907318 683.07563455c-11.06647256-6.81013696-23.8354802-11.06647256-36.81730316-12.34337366 28.73026594-70.01672168 47.03250943-161.74075617-15.32280899-252.82633969-94.91628598-138.96936007-231.33184388-211.53988312-405.20315588-214.94495159-49.58631079-1.06408411-107.89810977 1.27690109-169.61497724 3.83070244-71.71925592 2.76661835-167.27399204 6.59731998-231.97029483 1.27690027 12.9818238-7.02295395 26.8149147-13.83309092 38.73265521-19.57914376 45.75560833-22.34576212 81.50882822-39.58392151 69.59108854-70.22953867-6.38450381-17.87660952-24.89956347-27.24054868-55.54518064-28.0918158C260.37842737 88.67835684 121.40906728 125.92129397 96.50950381 188.70224473c-14.0459079 35.32758591-16.38689228 103.42895718 125.98753547 163.86892437 58.52461597 24.89956347 224.09607376 55.11954666 287.94110861 61.50405047 14.47154105 1.27690109 28.73026594 4.2563356 42.35054068 9.36393832-14.68435803 9.57675531-29.58153306 19.79196075-44.69152505 30.0071662-26.17646457-14.89717502-69.16545457-32.56096756-101.08797199-10.85365558-11.91773969 7.66140408-19.36632761 20.64322788-19.79196075 34.90195276-0.42563397 17.45097638 10.21520544 34.68913577 22.13294513 48.30940971-47.03250943 37.66857111-85.12671367 74.06024111-98.74698762 102.15205609-15.109992 34.47631878-21.28167801 91.08558352 7.02295395 146.205131 35.75321988 70.01672168 114.49542975 118.75176535 234.52409537 145.14104609 156.84596961 34.26350262 292.19744422 3.40506848 381.79331049-43.84025711 49.79912778-26.38928156 85.33953067-57.67334885 102.36487307-85.55234766 5.3204197 1.70253425 10.64083942 3.40506848 16.17407611 5.10760273 7.66140408 2.34098438 15.32280818 4.68196958 22.55857911 7.23577094 23.62266321 8.29985422 50.01194394 7.02295395 70.22953867-2.97943452l1.06408327-0.63845096c14.68435803-7.4485871 25.96364758-20.64322788 31.07125113-36.39167001 12.55619064-42.13772288-24.26111334-65.12193594-46.60687628-79.16784302z m-668.88315198-197.49397604l-14.25872406 10.42802243c-4.2563356-4.2563356-8.08703806-9.15112133-11.06647256-14.47154105 5.53323669-1.70253425 15.109992 0.21281699 25.32519662 4.04351862zM1130.79907318 747.77193653c-1.06408411 3.19225149-3.40506848 5.74605286-7.66140408 8.08703805-8.5126712 4.2563356-21.06886184 4.46915258-32.3481514 0.63845014-7.66140408-2.76661835-15.96125913-5.3204197-24.26111334-7.87422108-15.32280818-4.68196958-41.07363959-12.55619064-45.96842533-18.51506048-8.08703806-10.64083942-23.19702924-12.9818238-34.05068481-4.89478574s-12.9818238 23.19702924-4.89478655 34.05068564c2.97943533 3.61788547 6.17168682 6.81013696 10.00238927 9.57675531-37.03012014 51.28884503-199.62214343 153.44090112-429.67708703 103.00332321-103.64177417-22.77139609-173.44567886-64.05785183-201.75031082-119.81584946-20.43041089-40.22237246-15.74844214-81.50882822-5.95886985-104.06740731 28.0918158-58.52461597 231.33184388-193.23763962 361.15008179-269.63886512 11.49210654-6.81013696 15.32280818-21.70731199 8.5126712-33.19941852s-22.34576212-16.17407529-33.1994177-8.51267119c-10.42802243 6.17168682-45.96842532 27.24054868-91.51121749 56.18363076-15.32280818-10.42802243-41.92490671-22.98421307-84.48826273-27.24054785-67.46292032-6.81013696-223.24480664-36.604487-273.68238455-57.88616583C205.04606372 292.34401889 123.11160153 251.90883026 141.20102804 206.36603808c4.2563356-10.64083942 24.04829636-27.66618182 66.82447019-44.05307409 29.15589908-11.06647256 59.58869925-18.51506049 90.44713339-22.34576212l-9.5767553 4.68196875c-29.15589908 14.25872488-60.86560034 30.00716619-82.36009534 48.73504368-1.48971726-0.85126712-2.97943533-1.91535123-4.2563356-3.1922515-8.93830518-9.57675531-24.04829636-10.21520544-33.83786865-1.06408411l-0.42563398 0.42563315c-9.7895723 9.15112133-10.00238845 24.47393032-0.85126712 34.26350263 8.72548819 9.15112133 21.494495 15.96125913 37.6685711 21.06886185 0.63845014 0.21281699 1.06408411 0.42563397 1.70253425 0.63845012 56.60926474 17.45097638 157.0587866 15.32280818 298.58194803 9.57675532 61.07841733-2.34098438 118.75176535-4.68196958 166.84835806-3.83070246 159.61258794 3.19225149 279.42843741 66.6116532 366.47050231 194.08890757 53.41701242 78.31657673 34.26350262 155.35625235 3.61788547 222.3935387-3.83070245-2.97943533-7.4485871-6.38450381-10.42802242-10.00238847-8.5126712-10.21520544-23.62266321-11.91773969-34.05068565-3.83070245-10.42802243 8.29985422-12.13055667 23.62266321-3.83070245 34.05068564 4.89478574 6.17168682 30.21998318 35.32758591 61.50405049 32.77378455h1.70253422c1.06408411-0.21281699 1.91535123 0 2.97943534-0.21281699 21.28167801-3.83070245 34.90195276-2.97943533 47.45814258 5.10760272 16.81252625 10.64083942 24.89956347 16.81252625 23.40984622 22.13294595z"})]})}),y.jsx("a",{className:"text-slate-400 hover:text-indigo-400 transition-colors",href:"mailto:liuyhi@qq.com",title:"邮箱",children:y.jsxs("svg",{className:"h-5 w-5",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[y.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),y.jsx("polyline",{points:"22,6 12,13 2,6"})]})})]})]})]})]})}),y.jsxs("section",{"data-reveal":!0,className:"reveal py-10",children:[y.jsx(ql,{id:"music",title:"MIDI分享",desc:"适用于VOCALOID/ACE studio/UTAU/Xstudio Synthesizer V‌等虚拟歌姬制作软件"}),y.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[y.jsx(Pr,{title:"公开配布",desc:"公开免费配布的MIDI，托管于MIDISHOW",href:"https://www.midishow.com/u/%E8%83%A1%E8%90%9D%E5%8D%9C%E9%A1%BB%E5%84%BF",badge:y.jsx("span",{className:"text-[10px] font-medium px-1.5 py-0.5 bg-emerald-500/20 text-emerald-400 rounded",children:"Free"}),footer:y.jsxs("div",{className:"flex flex-wrap gap-2",children:[y.jsx(Cn,{children:"MIDI"}),y.jsx(Cn,{children:"调教用"}),y.jsx(Cn,{children:"单轨人声"})]})}),y.jsx(Pr,{title:"配套伴奏",desc:"免费配布的midi配套的伴奏",href:"https://v.luoboy.com/freemidi.html",badge:y.jsx("span",{className:"text-[10px] font-medium px-1.5 py-0.5 bg-emerald-500/20 text-emerald-400 rounded",children:"Free"}),footer:y.jsxs("div",{className:"flex flex-wrap gap-2",children:[y.jsx(Cn,{children:"配套伴奏"}),y.jsx(Cn,{children:"高质量"}),y.jsx(Cn,{children:"已对轨"})]})})]})]}),y.jsxs("section",{"data-reveal":!0,className:"reveal py-10",children:[y.jsx(ql,{id:"vip",title:"金胡萝卜会员",desc:"订阅更新，第一时间获取最新动态"}),y.jsx("div",{className:"glass p-6 md:p-8",children:y.jsxs("div",{className:"grid md:grid-cols-2 gap-8 md:gap-12",children:[y.jsxs("div",{className:"text-center",children:[y.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 mb-4",children:y.jsx("svg",{className:"w-8 h-8 text-white",viewBox:"0 0 24 24",fill:"currentColor",children:y.jsx("path",{d:"M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"})})}),y.jsx("h3",{className:"text-xl font-bold text-slate-100 mb-2",children:"金胡萝卜会员"}),y.jsx("p",{className:"text-sm text-slate-400 leading-relaxed mb-4",children:"一次付费即可享用UP主手动扒谱的所有MIDI包，人工扒谱，质量高、匹配度好，性价比极高。让你用最少的钱获得最好的midi包！"}),y.jsx("div",{className:"flex items-center justify-center mb-4",children:y.jsxs("div",{className:"flex -space-x-3",children:[y.jsx("img",{className:"w-10 h-10 rounded-full border-2 border-slate-800",src:"/img/HeoMusic.webp",alt:"用户1",draggable:!1,loading:"lazy"}),y.jsx("img",{className:"w-10 h-10 rounded-full border-2 border-slate-800",src:"/img/HeoMusic.webp",alt:"用户2",draggable:!1,loading:"lazy"}),y.jsx("img",{className:"w-10 h-10 rounded-full border-2 border-slate-800",src:"/img/HeoMusic.webp",alt:"用户3",draggable:!1,loading:"lazy"}),y.jsx("img",{className:"w-10 h-10 rounded-full border-2 border-slate-800",src:"/img/HeoMusic.webp",alt:"用户4",draggable:!1,loading:"lazy"}),y.jsx("div",{className:"w-10 h-10 rounded-full border-2 border-slate-800 bg-slate-700 flex items-center justify-center text-xs text-slate-300",children:"+150"})]})}),y.jsx("p",{className:"text-xs text-slate-500 mb-6",children:"已有151人加入会员"}),y.jsxs("div",{className:"flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-slate-300",children:[y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsx("svg",{className:"w-4 h-4 text-amber-400 shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),y.jsx("span",{children:"前期对轨，开箱即用"})]}),y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsx("svg",{className:"w-4 h-4 text-amber-400 shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),y.jsx("span",{children:"专属QQ群"})]}),y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsx("svg",{className:"w-4 h-4 text-amber-400 shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),y.jsx("span",{children:"UP主答疑"})]}),y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsx("svg",{className:"w-4 h-4 text-amber-400 shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),y.jsx("span",{children:"一次付费永久更新"})]})]})]}),y.jsxs("div",{className:"flex flex-col",children:[y.jsxs("div",{className:"flex flex-col sm:flex-row gap-2 mb-4",children:[y.jsx("button",{onClick:()=>M(!0),className:"inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white font-semibold rounded-full transition-all hover:scale-105 shadow-lg shadow-amber-500/30 text-sm",children:"立即加入会员"}),y.jsx("a",{href:"https://www.kdocs.cn/l/csKZhd7ObH6b",target:"_blank",rel:"noreferrer",className:"inline-flex items-center justify-center gap-2 px-4 py-2 glass text-slate-200 hover:text-white font-medium rounded-full transition-all hover:bg-white/10 text-sm",children:"会员曲目目录"}),y.jsx("button",{onClick:()=>p(!0),className:"inline-flex items-center justify-center gap-2 px-4 py-2 glass text-slate-200 hover:text-white font-medium rounded-full transition-all hover:bg-white/10 text-sm",children:"会员登录"})]}),y.jsx("h3",{className:"text-lg font-semibold text-slate-100 mb-4",children:"更新日志"}),y.jsxs("div",{className:"relative flex-1",children:[y.jsxs("div",{className:"relative pl-6 pb-4 border-l-2 border-amber-500/50 last:pb-0 group",children:[y.jsx("div",{className:"absolute -left-[7px] top-0.5 w-3 h-3 rounded-full bg-amber-500 ring-3 ring-amber-500/20 group-hover:scale-125 transition-transform duration-300"}),y.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[y.jsx("span",{className:"text-sm font-bold text-amber-400",children:"2026-02-05"}),y.jsx("span",{className:"text-xs text-amber-300 bg-amber-500/20 px-2 py-0.5 rounded-full font-medium",children:"最新"})]}),y.jsx("h4",{className:"text-sm font-bold text-slate-100 group-hover:text-amber-300 transition-colors",children:"更新 73 首 · 当前共 483 首"})]}),y.jsxs("div",{className:"relative pl-6 pb-4 border-l-2 border-slate-600/50 last:pb-0 group",children:[y.jsx("div",{className:"absolute -left-[5px] top-0.5 w-2.5 h-2.5 rounded-full bg-slate-500 group-hover:bg-slate-400 transition-colors"}),y.jsx("div",{className:"mb-1",children:y.jsx("span",{className:"text-sm font-medium text-slate-400",children:"2025-07-03"})}),y.jsx("h4",{className:"text-sm font-medium text-slate-300 group-hover:text-white transition-colors",children:"更新 53 首 · 当前共 410 首"})]}),y.jsxs("div",{className:"relative pl-6 pb-0 border-l-2 border-slate-700/30 group",children:[y.jsx("div",{className:"absolute -left-[5px] top-0.5 w-2 h-2.5 rounded-full bg-slate-600 group-hover:bg-slate-500 transition-colors"}),y.jsx("div",{className:"mb-1",children:y.jsx("span",{className:"text-sm font-medium text-slate-500",children:"2025-06-06"})}),y.jsx("h4",{className:"text-sm font-medium text-slate-400 group-hover:text-slate-300 transition-colors",children:"更新 66 首 · 当前共 238 首"})]})]})]})]})})]}),y.jsxs("section",{"data-reveal":!0,className:"reveal py-10",children:[y.jsx(ql,{id:"tools",title:"工具",desc:"实用在线工具，提升工作效率"}),y.jsx("div",{className:"grid gap-4 md:grid-cols-2 lg:grid-cols-3",children:Yt.useMemo(()=>{const w=[];return w.push(y.jsx(Pr,{title:"音乐解锁",desc:"在线解锁各大平台加密音乐。",href:"/unlock",icon:y.jsxs("svg",{className:"w-8 h-8",viewBox:"0 0 1024 1024",fill:"none",children:[y.jsx("path",{d:"M375.44 649.93c38.39-38.39 89.44-59.53 143.75-59.53 28.74 0 56.5 6.08 82.02 17.35 1.01-1.16 1.82-2.45 2.92-3.55l78.4-78.37-42.46-42.46c-10.45-10.45-16.21-24.36-16.21-39.19 0-14.82 5.76-28.74 16.21-39.19l13.07-13.06c9.71-9.73 22.45-15.4 36.13-16.14 0.74-13.67 6.41-26.39 16.13-36.12l13.07-13.06c10.43-10.45 24.36-16.22 39.2-16.22 10.63 0 20.74 3.07 29.49 8.6V100.84c0-20.32-16.63-36.95-36.96-36.95H121.86c-20.33 0-36.96 16.63-36.96 36.95v775.92c0 20.32 16.63 36.95 36.96 36.95h233.63c-58.39-79.46-51.89-191.97 19.95-263.78z",fill:"#C199FF"}),y.jsx("path",{d:"M555.14 313.29h-367.6c-0.55 0-1-0.45-1-1v-53.42c0-0.55 0.45-1 1-1h367.61c0.55 0 1 0.45 1 1v53.42c-0.01 0.55-0.46 1-1.01 1zM407.3 451.85H187.54c-0.55 0-1-0.45-1-1v-53.42c0-0.55 0.45-1 1-1H407.3c0.55 0 1 0.45 1 1v53.42c0 0.55-0.45 1-1 1z",fill:"#FFFFFF"}),y.jsx("path",{d:"M930.81 395.19l-13.07-13.06c-10.78-10.78-28.42-10.78-39.21 0l-39.2 39.19-68.61-68.58c-7.19-7.19-18.95-7.18-26.14 0l-13.07 13.06c-7.19 7.18-7.19 18.94 0 26.13l68.61 68.58L774 486.64l-68.61-68.58c-7.19-7.18-18.95-7.18-26.13 0l-13.07 13.06c-7.19 7.18-7.19 18.94 0 26.13l68.6 68.58-127.15 127.11c-64.26-40.45-150.11-32.83-206.07 23.11-64.95 64.93-64.95 170.21 0 235.14 64.96 64.93 170.26 64.93 235.22 0 55.96-55.94 63.58-141.77 23.12-206l270.9-270.81c10.78-10.77 10.78-28.41 0-39.19z",fill:"#9457EA"})]}),badge:y.jsx("span",{className:"text-[10px] font-medium px-1.5 py-0.5 bg-sky-500/20 text-sky-400 rounded",children:"免费"}),footer:y.jsxs("div",{className:"flex flex-wrap gap-2",children:[y.jsx(Cn,{children:"在线工具"}),y.jsx(Cn,{children:"音乐解锁"}),y.jsx(Cn,{children:"多平台"})]})},"music-unlock")),w.push(y.jsx(Pr,{title:"文件分享",desc:"项目源码、设计素材、演示视频等文件下载。",href:"#/file-share",icon:y.jsxs("svg",{className:"w-8 h-8 text-emerald-400",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[y.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),y.jsx("polyline",{points:"7 10 12 15 17 10"}),y.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),badge:y.jsx("span",{className:"text-[10px] font-medium px-1.5 py-0.5 bg-emerald-500/20 text-emerald-400 rounded",children:"免费"}),footer:y.jsxs("div",{className:"flex flex-wrap gap-2",children:[y.jsx(Cn,{children:"网盘链接"}),y.jsx(Cn,{children:"文件下载"}),y.jsx(Cn,{children:"长期有效"})]})},"file-share")),w},[])})]}),y.jsxs("section",{"data-reveal":!0,className:"reveal py-10",children:[y.jsx(ql,{id:"projects",title:"服务",desc:"专业定制服务，满足你的音乐创作需求"}),y.jsxs("div",{className:"grid gap-4 md:grid-cols-2 lg:grid-cols-3",children:[y.jsx(Pr,{title:"MIDI定制",desc:"根据你的需求定制MIDI文件，供VOCALOID、UTAU等虚拟歌姬调教使用。",badge:y.jsx("span",{className:"text-[10px] font-medium px-1.5 py-0.5 bg-amber-500/20 text-amber-400 rounded",children:"¥25/首起"}),footer:y.jsxs("div",{children:[y.jsxs("div",{className:"flex flex-wrap gap-2 mb-3",children:[y.jsx(Cn,{children:"VOCALOID"}),y.jsx(Cn,{children:"UTAU"}),y.jsx(Cn,{children:"定制"})]}),y.jsxs("div",{className:"text-xs text-slate-500 space-y-1",children:[y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsx("span",{className:"text-amber-400",children:"①"})," QQ/微信联系，发送原曲试听"]}),y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsx("span",{className:"text-amber-400",children:"②"})," 确认需求：轨类型、情绪、速度"]}),y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsx("span",{className:"text-amber-400",children:"③"})," 报价 → 支付（首次可延后）"]}),y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsx("span",{className:"text-amber-400",children:"④"})," 制作 → 24小时内交付"]})]})]})}),y.jsx(Pr,{title:"混音服务",desc:"混音处理，提升音乐品质。包含均衡、压缩、混响、立体声处理等后期制作。",badge:y.jsx("span",{className:"text-[10px] font-medium px-1.5 py-0.5 bg-amber-500/20 text-amber-400 rounded",children:"¥25/首起"}),footer:y.jsxs("div",{className:"flex flex-wrap gap-2",children:[y.jsx(Cn,{children:"混音"}),y.jsx(Cn,{children:"后期"}),y.jsx(Cn,{children:"母带"})]})})]})]}),y.jsxs("section",{"data-reveal":!0,className:"reveal py-10",children:[y.jsx(ql,{id:"contact",title:"联系我",desc:"通过以下方式与我取得联系"}),y.jsxs("div",{className:"flex flex-wrap justify-center gap-4",children:[y.jsxs("a",{href:"https://ifdian.net/a/HLBXE",target:"_blank",rel:"noreferrer",className:"flex items-center gap-3 px-5 py-3 glass rounded-full hover:bg-white/10 transition-all",children:[y.jsxs("svg",{className:"w-5 h-5 text-orange-400",viewBox:"0 0 1322 1024",fill:"currentColor",children:[y.jsx("path",{d:"M498.73322519 613.27172903c-14.25872488 0-25.75083059 11.49210654-25.7508306 25.7508306S484.4745003 664.77339104 498.73322519 664.77339104c14.25872488 0 25.75083059-11.49210654 25.75083059-25.75083141 0-14.25872488-11.49210654-25.75083059-25.75083059-25.7508306zM741.76999258 690.52422165c-14.25872488 0-25.75083059 11.49210654-25.75083142 25.75083059s11.49210654 25.75083059 25.75083142 25.75083143 25.75083059-11.49210654 25.75083059-25.75083143c0-14.0459079-11.49210654-25.53801443-25.75083059-25.75083059z"}),y.jsx("path",{d:"M1130.79907318 683.07563455c-11.06647256-6.81013696-23.8354802-11.06647256-36.81730316-12.34337366 28.73026594-70.01672168 47.03250943-161.74075617-15.32280899-252.82633969-94.91628598-138.96936007-231.33184388-211.53988312-405.20315588-214.94495159-49.58631079-1.06408411-107.89810977 1.27690109-169.61497724 3.83070244-71.71925592 2.76661835-167.27399204 6.59731998-231.97029483 1.27690027 12.9818238-7.02295395 26.8149147-13.83309092 38.73265521-19.57914376 45.75560833-22.34576212 81.50882822-39.58392151 69.59108854-70.22953867-6.38450381-17.87660952-24.89956347-27.24054868-55.54518064-28.0918158C260.37842737 88.67835684 121.40906728 125.92129397 96.50950381 188.70224473c-14.0459079 35.32758591-16.38689228 103.42895718 125.98753547 163.86892437 58.52461597 24.89956347 224.09607376 55.11954666 287.94110861 61.50405047 14.47154105 1.27690109 28.73026594 4.2563356 42.35054068 9.36393832-14.68435803 9.57675531-29.58153306 19.79196075-44.69152505 30.0071662-26.17646457-14.89717502-69.16545457-32.56096756-101.08797199-10.85365558-11.91773969 7.66140408-19.36632761 20.64322788-19.79196075 34.90195276-0.42563397 17.45097638 10.21520544 34.68913577 22.13294513 48.30940971-47.03250943 37.66857111-85.12671367 74.06024111-98.74698762 102.15205609-15.109992 34.47631878-21.28167801 91.08558352 7.02295395 146.205131 35.75321988 70.01672168 114.49542975 118.75176535 234.52409537 145.14104609 156.84596961 34.26350262 292.19744422 3.40506848 381.79331049-43.84025711 49.79912778-26.38928156 85.33953067-57.67334885 102.36487307-85.55234766 5.3204197 1.70253425 10.64083942 3.40506848 16.17407611 5.10760273 7.66140408 2.34098438 15.32280818 4.68196958 22.55857911 7.23577094 23.62266321 8.29985422 50.01194394 7.02295395 70.22953867-2.97943452l1.06408327-0.63845096c14.68435803-7.4485871 25.96364758-20.64322788 31.07125113-36.39167001 12.55619064-42.13772288-24.26111334-65.12193594-46.60687628-79.16784302z"})]}),y.jsx("span",{className:"text-sm text-slate-300",children:"爱发电"})]}),y.jsxs("a",{href:"https://space.bilibili.com/11192010",target:"_blank",rel:"noreferrer",className:"flex items-center gap-3 px-5 py-3 glass rounded-full hover:bg-white/10 transition-all",children:[y.jsx("svg",{className:"w-5 h-5 text-sky-400",viewBox:"0 0 1024 1024",fill:"currentColor",children:y.jsx("path",{d:"M569.685333 100.010667a29.866667 29.866667 0 1 1 45.312 38.912l-21.6064 25.173333c102.178133 4.5568 148.360533 18.875733 181.179734 63.1296 23.620267 36.522667 27.4432 74.632533 27.562666 230.4v7.901867C802.133333 748.9024 783.8208 767.658667 453.8368 768H443.733333C107.4176 768 85.742933 752.0768 85.333333 474.043733v-24.132266c0.256-147.234133 4.317867-184.695467 27.562667-222.685867 31.8464-42.973867 78.2336-57.873067 181.316267-62.976L272.469333 138.922667a29.866667 29.866667 0 1 1 45.312-38.946134l52.445867 61.0304 1.5872 2.030934h143.8208l1.604267-2.030934z"})}),y.jsx("span",{className:"text-sm text-slate-300",children:"哔哩哔哩"})]}),y.jsxs("a",{href:"https://qm.qq.com/q/vLQTcHgbyC",target:"_blank",rel:"noreferrer",className:"flex items-center gap-3 px-5 py-3 glass rounded-full hover:bg-white/10 transition-all",children:[y.jsx("svg",{className:"w-5 h-5",viewBox:"0 0 1024 1024",fill:"#1296DB",children:y.jsx("path",{d:"M824.8 613.2c-16-51.4-34.4-94.6-62.7-165.3C766.5 262.2 689.3 112 511.5 112 331.7 112 256.2 265.2 261 447.9c-28.4 70.8-46.7 113.7-62.7 165.3-34 109.5-23 154.8-14.6 155.8 18 2.2 70.1-82.4 70.1-82.4 0 49 25.2 112.9 79.8 159-26.4 8.1-85.7 29.9-71.6 53.8 11.4 19.3 196.2 12.3 249.5 6.3 53.3 6 238.1 13 249.5-6.3 14.1-23.8-45.3-45.7-71.6-53.8 54.6-46.2 79.8-110.1 79.8-159 0 0 52.1 84.6 70.1 82.4 8.5-1.1 19.5-46.4-14.5-155.8z","p-id":"8933"})}),y.jsx("span",{className:"text-sm text-slate-300",children:"QQ"})]}),y.jsxs("a",{className:"flex items-center gap-3 px-5 py-3 glass rounded-full hover:bg-white/10 transition-all",children:[y.jsx("svg",{className:"w-5 h-5 text-green-500",viewBox:"0 0 24 24",fill:"currentColor",children:y.jsx("path",{d:"M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.045c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.27-.03-.406-.03zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z"})}),y.jsx("span",{className:"text-sm text-slate-300",children:"微信：HUU176"})]})]})]}),h&&y.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4",onClick:()=>p(!1),children:[y.jsx("div",{className:"absolute inset-0 bg-black/60 backdrop-blur-sm"}),y.jsxs("div",{className:"relative glass w-full max-w-md p-6",onClick:w=>w.stopPropagation(),children:[y.jsx("button",{onClick:()=>p(!1),className:"absolute top-4 right-4 text-slate-400 hover:text-white transition-colors",children:y.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})}),y.jsx("h3",{className:"text-xl font-bold text-slate-100 mb-6",children:"会员入口"}),y.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-4",children:[y.jsxs("a",{href:"http://117.72.64.80:5244/",target:"_blank",rel:"noreferrer",className:"flex flex-col items-center gap-2 p-4 glass rounded-xl hover:bg-white/10 transition-all group",children:[y.jsx("div",{className:"w-12 h-12 rounded-lg bg-red-500/20 flex items-center justify-center",children:y.jsx("svg",{className:"w-6 h-6 text-red-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"})})}),y.jsxs("div",{className:"text-center",children:[y.jsx("div",{className:"font-medium text-slate-100 group-hover:text-red-300 transition-colors",children:"京东云线路"}),y.jsx("div",{className:"text-xs text-slate-400",children:"推荐优先使用"})]})]}),y.jsxs("a",{href:"https://kmtgsrfu.ap-northeast-1.clawcloudrun.com/",target:"_blank",rel:"noreferrer",className:"flex flex-col items-center gap-2 p-4 glass rounded-xl hover:bg-white/10 transition-all group",children:[y.jsx("div",{className:"w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center",children:y.jsx("svg",{className:"w-6 h-6 text-blue-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"})})}),y.jsxs("div",{className:"text-center",children:[y.jsx("div",{className:"font-medium text-slate-100 group-hover:text-blue-300 transition-colors",children:"Claw云线路"}),y.jsx("div",{className:"text-xs text-slate-400",children:"会员网盘"})]})]})]}),y.jsxs("a",{href:"https://v.luoboy.com/",target:"_blank",rel:"noreferrer",className:"flex items-center gap-3 p-4 glass rounded-xl hover:bg-white/10 transition-all group",children:[y.jsx("div",{className:"w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center",children:y.jsx("svg",{className:"w-5 h-5 text-amber-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})})}),y.jsxs("div",{children:[y.jsx("div",{className:"font-medium text-slate-100 group-hover:text-amber-300 transition-colors",children:"文档站"}),y.jsx("div",{className:"text-xs text-slate-400",children:"会员文档资料"})]})]})]})]}),m&&y.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4",onClick:()=>M(!1),children:[y.jsx("div",{className:"absolute inset-0 bg-black/60 backdrop-blur-sm"}),y.jsxs("div",{className:"relative glass w-full max-w-md p-6",onClick:w=>w.stopPropagation(),children:[y.jsx("button",{onClick:()=>M(!1),className:"absolute top-4 right-4 text-slate-400 hover:text-white transition-colors",children:y.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})}),y.jsx("h3",{className:"text-xl font-bold text-slate-100 mb-4",children:"加入金胡萝卜会员"}),y.jsx("p",{className:"text-sm text-slate-300 mb-6 leading-relaxed",children:"一次付费即可享用UP主手动扒谱的所有MIDI包，人工扒谱，质量高、匹配度好，性价比极高。让你用最少的钱获得最好的midi包！"}),y.jsxs("div",{className:"space-y-3 mb-6",children:[y.jsxs("a",{href:"https://ifdian.net/a/HLBXE",target:"_blank",rel:"noreferrer",className:"flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white font-semibold rounded-full transition-all",children:[y.jsxs("svg",{className:"w-5 h-5",viewBox:"0 0 1322 1024",fill:"currentColor",children:[y.jsx("path",{d:"M498.73322519 613.27172903c-14.25872488 0-25.75083059 11.49210654-25.7508306 25.7508306S484.4745003 664.77339104 498.73322519 664.77339104c14.25872488 0 25.75083059-11.49210654 25.75083059-25.75083141 0-14.25872488-11.49210654-25.75083059-25.75083059-25.7508306zM741.76999258 690.52422165c-14.25872488 0-25.75083059 11.49210654-25.75083142 25.75083059s11.49210654 25.75083059 25.75083142 25.75083143 25.75083059-11.49210654 25.75083059-25.75083143c0-14.0459079-11.49210654-25.53801443-25.75083059-25.75083059z"}),y.jsx("path",{d:"M1130.79907318 683.07563455c-11.06647256-6.81013696-23.8354802-11.06647256-36.81730316-12.34337366 28.73026594-70.01672168 47.03250943-161.74075617-15.32280899-252.82633969-94.91628598-138.96936007-231.33184388-211.53988312-405.20315588-214.94495159-49.58631079-1.06408411-107.89810977 1.27690109-169.61497724 3.83070244-71.71925592 2.76661835-167.27399204 6.59731998-231.97029483 1.27690027 12.9818238-7.02295395 26.8149147-13.83309092 38.73265521-19.57914376 45.75560833-22.34576212 81.50882822-39.58392151 69.59108854-70.22953867-6.38450381-17.87660952-24.89956347-27.24054868-55.54518064-28.0918158C260.37842737 88.67835684 121.40906728 125.92129397 96.50950381 188.70224473c-14.0459079 35.32758591-16.38689228 103.42895718 125.98753547 163.86892437 58.52461597 24.89956347 224.09607376 55.11954666 287.94110861 61.50405047 14.47154105 1.27690109 28.73026594 4.2563356 42.35054068 9.36393832-14.68435803 9.57675531-29.58153306 19.79196075-44.69152505 30.0071662-26.17646457-14.89717502-69.16545457-32.56096756-101.08797199-10.85365558-11.91773969 7.66140408-19.36632761 20.64322788-19.79196075 34.90195276-0.42563397 17.45097638 10.21520544 34.68913577 22.13294513 48.30940971-47.03250943 37.66857111-85.12671367 74.06024111-98.74698762 102.15205609-15.109992 34.47631878-21.28167801 91.08558352 7.02295395 146.205131 35.75321988 70.01672168 114.49542975 118.75176535 234.52409537 145.14104609 156.84596961 34.26350262 292.19744422 3.40506848 381.79331049-43.84025711 49.79912778-26.38928156 85.33953067-57.67334885 102.36487307-85.55234766 5.3204197 1.70253425 10.64083942 3.40506848 16.17407611 5.10760273 7.66140408 2.34098438 15.32280818 4.68196958 22.55857911 7.23577094 23.62266321 8.29985422 50.01194394 7.02295395 70.22953867-2.97943452l1.06408327-0.63845096c14.68435803-7.4485871 25.96364758-20.64322788 31.07125113-36.39167001 12.55619064-42.13772288-24.26111334-65.12193594-46.60687628-79.16784302z"})]}),"爱发电加入"]}),y.jsxs("a",{href:"#contact",rel:"noreferrer",className:"flex items-center justify-center gap-2 px-4 py-3 glass text-slate-200 hover:text-white font-medium rounded-full transition-all hover:bg-white/10",children:[y.jsx("svg",{className:"w-5 h-5",viewBox:"0 0 1024 1024",fill:"#1296DB",children:y.jsx("path",{d:"M824.8 613.2c-16-51.4-34.4-94.6-62.7-165.3C766.5 262.2 689.3 112 511.5 112 331.7 112 256.2 265.2 261 447.9c-28.4 70.8-46.7 113.7-62.7 165.3-34 109.5-23 154.8-14.6 155.8 18 2.2 70.1-82.4 70.1-82.4 0 49 25.2 112.9 79.8 159-26.4 8.1-85.7 29.9-71.6 53.8 11.4 19.3 196.2 12.3 249.5 6.3 53.3 6 238.1 13 249.5-6.3 14.1-23.8-45.3-45.7-71.6-53.8 54.6-46.2 79.8-110.1 79.8-159 0 0 52.1 84.6 70.1 82.4 8.5-1.1 19.5-46.4-14.5-155.8z","p-id":"8933"})}),"QQ/微信联系加入"]})]}),y.jsxs("div",{className:"pt-4 border-t border-slate-600/30",children:[y.jsx("h4",{className:"text-sm font-medium text-slate-300 mb-3",children:"会员权益"}),y.jsxs("div",{className:"space-y-2 text-sm text-slate-400 mb-4",children:[y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsx("svg",{className:"w-4 h-4 text-amber-400 shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),y.jsx("span",{children:"前期对轨，开箱即用"})]}),y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsx("svg",{className:"w-4 h-4 text-amber-400 shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),y.jsx("span",{children:"一次付费永久更新"})]})]}),y.jsxs("div",{className:"flex items-center justify-between p-3 bg-amber-500/10 rounded-lg border border-amber-500/20",children:[y.jsx("span",{className:"text-sm text-slate-300",children:"价格"}),y.jsxs("span",{className:"text-2xl font-bold text-amber-400",children:["¥49.9 ",y.jsx("span",{className:"text-sm font-normal text-slate-400",children:"永久更新"})]})]}),y.jsx("p",{className:"text-xs text-slate-500 mt-3 text-center",children:"* 随着MIDI量的增多，会员价会逐渐上调"})]})]})]}),y.jsxs("div",{className:"mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200/70 py-8 text-sm text-slate-600 dark:border-slate-800/60 dark:text-slate-400",children:[y.jsx("div",{className:"flex items-center gap-4",children:y.jsxs("span",{children:["© ",new Date().getFullYear()," 胡萝卜须儿. All rights reserved."]})}),y.jsxs("div",{className:"flex items-center gap-3",children:[y.jsx("a",{className:"hover:text-slate-900 dark:hover:text-white transition-colors",href:"#top",children:"回到顶部"}),y.jsx("span",{className:"opacity-40",children:"/"}),y.jsx("a",{className:"hover:text-slate-900 dark:hover:text-white transition-colors",href:"https://bafvkvkk.ap-northeast-1.clawcloudrun.com/status/ol",target:"_blank",rel:"noreferrer",children:y.jsx("img",{src:"https://bafvkvkk.ap-northeast-1.clawcloudrun.com/api/badge/1/status",alt:"服务状态",className:"h-5",loading:"lazy"})})]})]}),y.jsx("div",{className:"fixed bottom-6 right-8 z-50",children:y.jsx("button",{type:"button",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),className:"glass inline-flex h-12 w-12 items-center justify-center rounded-full text-slate-100 shadow-lg shadow-black/30 hover:bg-white/10 hover:scale-110 transition-all duration-300","aria-label":"回到顶部",title:"回到顶部",children:y.jsx("svg",{className:"h-6 w-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 10l7-7m0 0l7 7m-7-7v18"})})})}),x&&y.jsx(iT,{bvid:b,onClose:()=>{v(!1),T("")}})]})]})}function sT(){return Yt.useEffect(()=>{document.documentElement.classList.add("dark")},[]),y.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8",children:[y.jsxs("div",{className:"pointer-events-none fixed inset-0 -z-10",children:[y.jsx("div",{className:"absolute inset-0 bg-slate-950"}),y.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"}),y.jsx("div",{className:"absolute left-1/2 top-[-200px] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.07),transparent_65%)] blur-3xl"})]}),y.jsxs("div",{className:"mx-auto max-w-3xl",children:[y.jsxs("div",{className:"mb-8 flex items-center gap-3",children:[y.jsx("a",{href:"./",className:"text-slate-400 hover:text-slate-200 transition-colors text-sm",children:"← 返回"}),y.jsx("div",{className:"w-px h-4 bg-white/20"}),y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsxs("svg",{className:"h-5 w-5 text-sky-400",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[y.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),y.jsx("polyline",{points:"7 10 12 15 17 10"}),y.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),y.jsx("h1",{className:"text-xl font-semibold",children:"文件分享"})]})]}),y.jsx("div",{className:"mb-6 rounded-xl border border-amber-500/20 bg-amber-500/10 p-4 text-sm text-amber-200/90",children:y.jsxs("p",{className:"leading-relaxed",children:["MIDI包已压缩包的形式进行分享，包含：伴奏、提取的干声、.mid文件",y.jsx("span",{className:"block mt-2 font-medium text-amber-100",children:"*使用必须标注 Midi：胡萝卜须儿 ，不允许私下传递，请分享本配布页面进行分享"})]})}),y.jsx("div",{className:"rounded-2xl border border-white/10 bg-white/5 overflow-hidden",children:y.jsxs("table",{className:"w-full text-sm",children:[y.jsx("thead",{className:"bg-white/5 text-slate-400",children:y.jsxs("tr",{children:[y.jsx("th",{className:"px-4 py-3 text-left font-medium",children:"文件名"}),y.jsx("th",{className:"px-4 py-3 text-left font-medium",children:"BPM"}),y.jsx("th",{className:"px-4 py-3 text-right font-medium",children:"下载"})]})}),y.jsx("tbody",{className:"divide-y divide-white/5",children:Gx.map((s,t)=>y.jsxs("tr",{className:"hover:bg-white/5 transition-colors",children:[y.jsx("td",{className:"px-4 py-3",children:y.jsx("span",{className:"text-slate-100 font-medium",children:s.name})}),y.jsx("td",{className:"px-4 py-3",children:y.jsx("span",{className:"inline-flex items-center rounded-full bg-sky-500/20 px-2.5 py-0.5 text-xs font-medium text-sky-300",children:s.bpm})}),y.jsx("td",{className:"px-4 py-3 text-right",children:y.jsxs("div",{className:"flex items-center justify-end gap-2",children:[y.jsxs("a",{href:s.quark,target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 transition-colors",children:["夸克",y.jsxs("svg",{className:"w-3.5 h-3.5",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[y.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),y.jsx("polyline",{points:"7 10 12 15 17 10"}),y.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]})]}),y.jsxs("a",{href:s.thunder,target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-1.5 text-xs text-sky-400 hover:text-sky-300 transition-colors",children:["迅雷",y.jsxs("svg",{className:"w-3.5 h-3.5",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[y.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),y.jsx("polyline",{points:"7 10 12 15 17 10"}),y.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]})]})]})})]},t))})]})}),y.jsx("p",{className:"mt-8 text-center text-xs text-slate-600",children:"点击链接下载文件 · 链接长期有效"})]})]})}function rT(){const[s,t]=Yt.useState(()=>window.location.hash);return Yt.useEffect(()=>{const i=()=>t(window.location.hash);return window.addEventListener("hashchange",i),()=>window.removeEventListener("hashchange",i)},[]),s==="#/file-share"?y.jsx(sT,{}):y.jsx(aT,{})}zx.createRoot(document.getElementById("root")).render(y.jsx(Lx.StrictMode,{children:y.jsx(rT,{})}));
