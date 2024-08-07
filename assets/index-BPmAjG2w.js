function l1(e,t){for(var n=0;n<t.length;n++){const i=t[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in e)){const o=Object.getOwnPropertyDescriptor(i,r);o&&Object.defineProperty(e,r,o.get?o:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function Hm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Vm={exports:{}},Ja={},Ym={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rs=Symbol.for("react.element"),c1=Symbol.for("react.portal"),u1=Symbol.for("react.fragment"),d1=Symbol.for("react.strict_mode"),f1=Symbol.for("react.profiler"),h1=Symbol.for("react.provider"),p1=Symbol.for("react.context"),m1=Symbol.for("react.forward_ref"),g1=Symbol.for("react.suspense"),y1=Symbol.for("react.memo"),v1=Symbol.for("react.lazy"),ih=Symbol.iterator;function w1(e){return e===null||typeof e!="object"?null:(e=ih&&e[ih]||e["@@iterator"],typeof e=="function"?e:null)}var Xm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qm=Object.assign,Qm={};function Hr(e,t,n){this.props=e,this.context=t,this.refs=Qm,this.updater=n||Xm}Hr.prototype.isReactComponent={};Hr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Hr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Gm(){}Gm.prototype=Hr.prototype;function Id(e,t,n){this.props=e,this.context=t,this.refs=Qm,this.updater=n||Xm}var Td=Id.prototype=new Gm;Td.constructor=Id;qm(Td,Hr.prototype);Td.isPureReactComponent=!0;var rh=Array.isArray,Km=Object.prototype.hasOwnProperty,Od={current:null},Zm={key:!0,ref:!0,__self:!0,__source:!0};function Jm(e,t,n){var i,r={},o=null,s=null;if(t!=null)for(i in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Km.call(t,i)&&!Zm.hasOwnProperty(i)&&(r[i]=t[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(e&&e.defaultProps)for(i in a=e.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:rs,type:e,key:o,ref:s,props:r,_owner:Od.current}}function x1(e,t){return{$$typeof:rs,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Md(e){return typeof e=="object"&&e!==null&&e.$$typeof===rs}function b1(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var oh=/\/+/g;function uc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?b1(""+e.key):t.toString(36)}function Js(e,t,n,i,r){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case rs:case c1:s=!0}}if(s)return s=e,r=r(s),e=i===""?"."+uc(s,0):i,rh(r)?(n="",e!=null&&(n=e.replace(oh,"$&/")+"/"),Js(r,t,n,"",function(c){return c})):r!=null&&(Md(r)&&(r=x1(r,n+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(oh,"$&/")+"/")+e)),t.push(r)),1;if(s=0,i=i===""?".":i+":",rh(e))for(var a=0;a<e.length;a++){o=e[a];var l=i+uc(o,a);s+=Js(o,t,n,l,r)}else if(l=w1(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=i+uc(o,a++),s+=Js(o,t,n,l,r);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function ys(e,t,n){if(e==null)return e;var i=[],r=0;return Js(e,i,"","",function(o){return t.call(n,o,r++)}),i}function S1(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ot={current:null},ea={transition:null},k1={ReactCurrentDispatcher:ot,ReactCurrentBatchConfig:ea,ReactCurrentOwner:Od};function eg(){throw Error("act(...) is not supported in production builds of React.")}X.Children={map:ys,forEach:function(e,t,n){ys(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ys(e,function(){t++}),t},toArray:function(e){return ys(e,function(t){return t})||[]},only:function(e){if(!Md(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};X.Component=Hr;X.Fragment=u1;X.Profiler=f1;X.PureComponent=Id;X.StrictMode=d1;X.Suspense=g1;X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=k1;X.act=eg;X.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=qm({},e.props),r=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Od.current),t.key!==void 0&&(r=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Km.call(t,l)&&!Zm.hasOwnProperty(l)&&(i[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:rs,type:e.type,key:r,ref:o,props:i,_owner:s}};X.createContext=function(e){return e={$$typeof:p1,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:h1,_context:e},e.Consumer=e};X.createElement=Jm;X.createFactory=function(e){var t=Jm.bind(null,e);return t.type=e,t};X.createRef=function(){return{current:null}};X.forwardRef=function(e){return{$$typeof:m1,render:e}};X.isValidElement=Md;X.lazy=function(e){return{$$typeof:v1,_payload:{_status:-1,_result:e},_init:S1}};X.memo=function(e,t){return{$$typeof:y1,type:e,compare:t===void 0?null:t}};X.startTransition=function(e){var t=ea.transition;ea.transition={};try{e()}finally{ea.transition=t}};X.unstable_act=eg;X.useCallback=function(e,t){return ot.current.useCallback(e,t)};X.useContext=function(e){return ot.current.useContext(e)};X.useDebugValue=function(){};X.useDeferredValue=function(e){return ot.current.useDeferredValue(e)};X.useEffect=function(e,t){return ot.current.useEffect(e,t)};X.useId=function(){return ot.current.useId()};X.useImperativeHandle=function(e,t,n){return ot.current.useImperativeHandle(e,t,n)};X.useInsertionEffect=function(e,t){return ot.current.useInsertionEffect(e,t)};X.useLayoutEffect=function(e,t){return ot.current.useLayoutEffect(e,t)};X.useMemo=function(e,t){return ot.current.useMemo(e,t)};X.useReducer=function(e,t,n){return ot.current.useReducer(e,t,n)};X.useRef=function(e){return ot.current.useRef(e)};X.useState=function(e){return ot.current.useState(e)};X.useSyncExternalStore=function(e,t,n){return ot.current.useSyncExternalStore(e,t,n)};X.useTransition=function(){return ot.current.useTransition()};X.version="18.3.1";Ym.exports=X;var j=Ym.exports;const xt=Hm(j),sh=l1({__proto__:null,default:xt},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _1=j,C1=Symbol.for("react.element"),P1=Symbol.for("react.fragment"),E1=Object.prototype.hasOwnProperty,I1=_1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,T1={key:!0,ref:!0,__self:!0,__source:!0};function tg(e,t,n){var i,r={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(i in t)E1.call(t,i)&&!T1.hasOwnProperty(i)&&(r[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps,t)r[i]===void 0&&(r[i]=t[i]);return{$$typeof:C1,type:e,key:o,ref:s,props:r,_owner:I1.current}}Ja.Fragment=P1;Ja.jsx=tg;Ja.jsxs=tg;Vm.exports=Ja;var _=Vm.exports,su={},ng={exports:{}},Et={},ig={exports:{}},rg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,N){var U=T.length;T.push(N);e:for(;0<U;){var Q=U-1>>>1,Z=T[Q];if(0<r(Z,N))T[Q]=N,T[U]=Z,U=Q;else break e}}function n(T){return T.length===0?null:T[0]}function i(T){if(T.length===0)return null;var N=T[0],U=T.pop();if(U!==N){T[0]=U;e:for(var Q=0,Z=T.length,et=Z>>>1;Q<et;){var ae=2*(Q+1)-1,Rn=T[ae],mt=ae+1,xn=T[mt];if(0>r(Rn,U))mt<Z&&0>r(xn,Rn)?(T[Q]=xn,T[mt]=U,Q=mt):(T[Q]=Rn,T[ae]=U,Q=ae);else if(mt<Z&&0>r(xn,U))T[Q]=xn,T[mt]=U,Q=mt;else break e}}return N}function r(T,N){var U=T.sortIndex-N.sortIndex;return U!==0?U:T.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],c=[],u=1,h=null,f=3,y=!1,v=!1,m=!1,C=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(T){for(var N=n(c);N!==null;){if(N.callback===null)i(c);else if(N.startTime<=T)i(c),N.sortIndex=N.expirationTime,t(l,N);else break;N=n(c)}}function p(T){if(m=!1,d(T),!v)if(n(l)!==null)v=!0,B(x);else{var N=n(c);N!==null&&H(p,N.startTime-T)}}function x(T,N){v=!1,m&&(m=!1,w(P),P=-1),y=!0;var U=f;try{for(d(N),h=n(l);h!==null&&(!(h.expirationTime>N)||T&&!A());){var Q=h.callback;if(typeof Q=="function"){h.callback=null,f=h.priorityLevel;var Z=Q(h.expirationTime<=N);N=e.unstable_now(),typeof Z=="function"?h.callback=Z:h===n(l)&&i(l),d(N)}else i(l);h=n(l)}if(h!==null)var et=!0;else{var ae=n(c);ae!==null&&H(p,ae.startTime-N),et=!1}return et}finally{h=null,f=U,y=!1}}var b=!1,k=null,P=-1,I=5,O=-1;function A(){return!(e.unstable_now()-O<I)}function E(){if(k!==null){var T=e.unstable_now();O=T;var N=!0;try{N=k(!0,T)}finally{N?D():(b=!1,k=null)}}else b=!1}var D;if(typeof g=="function")D=function(){g(E)};else if(typeof MessageChannel<"u"){var M=new MessageChannel,L=M.port2;M.port1.onmessage=E,D=function(){L.postMessage(null)}}else D=function(){C(E,0)};function B(T){k=T,b||(b=!0,D())}function H(T,N){P=C(function(){T(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){v||y||(v=!0,B(x))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(T){switch(f){case 1:case 2:case 3:var N=3;break;default:N=f}var U=f;f=N;try{return T()}finally{f=U}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,N){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var U=f;f=T;try{return N()}finally{f=U}},e.unstable_scheduleCallback=function(T,N,U){var Q=e.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?Q+U:Q):U=Q,T){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=U+Z,T={id:u++,callback:N,priorityLevel:T,startTime:U,expirationTime:Z,sortIndex:-1},U>Q?(T.sortIndex=U,t(c,T),n(l)===null&&T===n(c)&&(m?(w(P),P=-1):m=!0,H(p,U-Q))):(T.sortIndex=Z,t(l,T),v||y||(v=!0,B(x))),T},e.unstable_shouldYield=A,e.unstable_wrapCallback=function(T){var N=f;return function(){var U=f;f=N;try{return T.apply(this,arguments)}finally{f=U}}}})(rg);ig.exports=rg;var O1=ig.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M1=j,Pt=O1;function $(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var og=new Set,Oo={};function Ui(e,t){Er(e,t),Er(e+"Capture",t)}function Er(e,t){for(Oo[e]=t,e=0;e<t.length;e++)og.add(t[e])}var On=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),au=Object.prototype.hasOwnProperty,D1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ah={},lh={};function $1(e){return au.call(lh,e)?!0:au.call(ah,e)?!1:D1.test(e)?lh[e]=!0:(ah[e]=!0,!1)}function A1(e,t,n,i){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function R1(e,t,n,i){if(t===null||typeof t>"u"||A1(e,t,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function st(e,t,n,i,r,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var He={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){He[e]=new st(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];He[t]=new st(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){He[e]=new st(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){He[e]=new st(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){He[e]=new st(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){He[e]=new st(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){He[e]=new st(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){He[e]=new st(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){He[e]=new st(e,5,!1,e.toLowerCase(),null,!1,!1)});var Dd=/[\-:]([a-z])/g;function $d(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Dd,$d);He[t]=new st(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Dd,$d);He[t]=new st(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Dd,$d);He[t]=new st(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){He[e]=new st(e,1,!1,e.toLowerCase(),null,!1,!1)});He.xlinkHref=new st("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){He[e]=new st(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ad(e,t,n,i){var r=He.hasOwnProperty(t)?He[t]:null;(r!==null?r.type!==0:i||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(R1(t,n,r,i)&&(n=null),i||r===null?$1(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):r.mustUseProperty?e[r.propertyName]=n===null?r.type===3?!1:"":n:(t=r.attributeName,i=r.attributeNamespace,n===null?e.removeAttribute(t):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?e.setAttributeNS(i,t,n):e.setAttribute(t,n))))}var An=M1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,vs=Symbol.for("react.element"),Ji=Symbol.for("react.portal"),er=Symbol.for("react.fragment"),Rd=Symbol.for("react.strict_mode"),lu=Symbol.for("react.profiler"),sg=Symbol.for("react.provider"),ag=Symbol.for("react.context"),zd=Symbol.for("react.forward_ref"),cu=Symbol.for("react.suspense"),uu=Symbol.for("react.suspense_list"),Ld=Symbol.for("react.memo"),Fn=Symbol.for("react.lazy"),lg=Symbol.for("react.offscreen"),ch=Symbol.iterator;function Kr(e){return e===null||typeof e!="object"?null:(e=ch&&e[ch]||e["@@iterator"],typeof e=="function"?e:null)}var we=Object.assign,dc;function po(e){if(dc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);dc=t&&t[1]||""}return`
`+dc+e}var fc=!1;function hc(e,t){if(!e||fc)return"";fc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var i=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){i=c}e.call(t.prototype)}else{try{throw Error()}catch(c){i=c}e()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),o=i.stack.split(`
`),s=r.length-1,a=o.length-1;1<=s&&0<=a&&r[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(r[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||r[s]!==o[a]){var l=`
`+r[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{fc=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?po(e):""}function z1(e){switch(e.tag){case 5:return po(e.type);case 16:return po("Lazy");case 13:return po("Suspense");case 19:return po("SuspenseList");case 0:case 2:case 15:return e=hc(e.type,!1),e;case 11:return e=hc(e.type.render,!1),e;case 1:return e=hc(e.type,!0),e;default:return""}}function du(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case er:return"Fragment";case Ji:return"Portal";case lu:return"Profiler";case Rd:return"StrictMode";case cu:return"Suspense";case uu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ag:return(e.displayName||"Context")+".Consumer";case sg:return(e._context.displayName||"Context")+".Provider";case zd:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ld:return t=e.displayName||null,t!==null?t:du(e.type)||"Memo";case Fn:t=e._payload,e=e._init;try{return du(e(t))}catch{}}return null}function L1(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return du(t);case 8:return t===Rd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ii(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function cg(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function j1(e){var t=cg(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(s){i=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ws(e){e._valueTracker||(e._valueTracker=j1(e))}function ug(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=cg(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function ba(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function fu(e,t){var n=t.checked;return we({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function uh(e,t){var n=t.defaultValue==null?"":t.defaultValue,i=t.checked!=null?t.checked:t.defaultChecked;n=ii(t.value!=null?t.value:n),e._wrapperState={initialChecked:i,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function dg(e,t){t=t.checked,t!=null&&Ad(e,"checked",t,!1)}function hu(e,t){dg(e,t);var n=ii(t.value),i=t.type;if(n!=null)i==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?pu(e,t.type,n):t.hasOwnProperty("defaultValue")&&pu(e,t.type,ii(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function dh(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var i=t.type;if(!(i!=="submit"&&i!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function pu(e,t,n){(t!=="number"||ba(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var mo=Array.isArray;function mr(e,t,n,i){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&i&&(e[n].defaultSelected=!0)}else{for(n=""+ii(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,i&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function mu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error($(91));return we({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function fh(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error($(92));if(mo(n)){if(1<n.length)throw Error($(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ii(n)}}function fg(e,t){var n=ii(t.value),i=ii(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),i!=null&&(e.defaultValue=""+i)}function hh(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function hg(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?hg(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var xs,pg=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,i,r){MSApp.execUnsafeLocalFunction(function(){return e(t,n,i,r)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(xs=xs||document.createElement("div"),xs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=xs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Mo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var wo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},F1=["Webkit","ms","Moz","O"];Object.keys(wo).forEach(function(e){F1.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),wo[t]=wo[e]})});function mg(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||wo.hasOwnProperty(e)&&wo[e]?(""+t).trim():t+"px"}function gg(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=mg(n,t[n],i);n==="float"&&(n="cssFloat"),i?e.setProperty(n,r):e[n]=r}}var N1=we({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yu(e,t){if(t){if(N1[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error($(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error($(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error($(61))}if(t.style!=null&&typeof t.style!="object")throw Error($(62))}}function vu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wu=null;function jd(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var xu=null,gr=null,yr=null;function ph(e){if(e=as(e)){if(typeof xu!="function")throw Error($(280));var t=e.stateNode;t&&(t=rl(t),xu(e.stateNode,e.type,t))}}function yg(e){gr?yr?yr.push(e):yr=[e]:gr=e}function vg(){if(gr){var e=gr,t=yr;if(yr=gr=null,ph(e),t)for(e=0;e<t.length;e++)ph(t[e])}}function wg(e,t){return e(t)}function xg(){}var pc=!1;function bg(e,t,n){if(pc)return e(t,n);pc=!0;try{return wg(e,t,n)}finally{pc=!1,(gr!==null||yr!==null)&&(xg(),vg())}}function Do(e,t){var n=e.stateNode;if(n===null)return null;var i=rl(n);if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error($(231,t,typeof n));return n}var bu=!1;if(On)try{var Zr={};Object.defineProperty(Zr,"passive",{get:function(){bu=!0}}),window.addEventListener("test",Zr,Zr),window.removeEventListener("test",Zr,Zr)}catch{bu=!1}function B1(e,t,n,i,r,o,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(u){this.onError(u)}}var xo=!1,Sa=null,ka=!1,Su=null,U1={onError:function(e){xo=!0,Sa=e}};function W1(e,t,n,i,r,o,s,a,l){xo=!1,Sa=null,B1.apply(U1,arguments)}function H1(e,t,n,i,r,o,s,a,l){if(W1.apply(this,arguments),xo){if(xo){var c=Sa;xo=!1,Sa=null}else throw Error($(198));ka||(ka=!0,Su=c)}}function Wi(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Sg(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function mh(e){if(Wi(e)!==e)throw Error($(188))}function V1(e){var t=e.alternate;if(!t){if(t=Wi(e),t===null)throw Error($(188));return t!==e?null:e}for(var n=e,i=t;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return mh(r),e;if(o===i)return mh(r),t;o=o.sibling}throw Error($(188))}if(n.return!==i.return)n=r,i=o;else{for(var s=!1,a=r.child;a;){if(a===n){s=!0,n=r,i=o;break}if(a===i){s=!0,i=r,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,i=r;break}if(a===i){s=!0,i=o,n=r;break}a=a.sibling}if(!s)throw Error($(189))}}if(n.alternate!==i)throw Error($(190))}if(n.tag!==3)throw Error($(188));return n.stateNode.current===n?e:t}function kg(e){return e=V1(e),e!==null?_g(e):null}function _g(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=_g(e);if(t!==null)return t;e=e.sibling}return null}var Cg=Pt.unstable_scheduleCallback,gh=Pt.unstable_cancelCallback,Y1=Pt.unstable_shouldYield,X1=Pt.unstable_requestPaint,Se=Pt.unstable_now,q1=Pt.unstable_getCurrentPriorityLevel,Fd=Pt.unstable_ImmediatePriority,Pg=Pt.unstable_UserBlockingPriority,_a=Pt.unstable_NormalPriority,Q1=Pt.unstable_LowPriority,Eg=Pt.unstable_IdlePriority,el=null,pn=null;function G1(e){if(pn&&typeof pn.onCommitFiberRoot=="function")try{pn.onCommitFiberRoot(el,e,void 0,(e.current.flags&128)===128)}catch{}}var Zt=Math.clz32?Math.clz32:J1,K1=Math.log,Z1=Math.LN2;function J1(e){return e>>>=0,e===0?32:31-(K1(e)/Z1|0)|0}var bs=64,Ss=4194304;function go(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ca(e,t){var n=e.pendingLanes;if(n===0)return 0;var i=0,r=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~r;a!==0?i=go(a):(o&=s,o!==0&&(i=go(o)))}else s=n&~r,s!==0?i=go(s):o!==0&&(i=go(o));if(i===0)return 0;if(t!==0&&t!==i&&!(t&r)&&(r=i&-i,o=t&-t,r>=o||r===16&&(o&4194240)!==0))return t;if(i&4&&(i|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=i;0<t;)n=31-Zt(t),r=1<<n,i|=e[n],t&=~r;return i}function ew(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tw(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,r=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Zt(o),a=1<<s,l=r[s];l===-1?(!(a&n)||a&i)&&(r[s]=ew(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function ku(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ig(){var e=bs;return bs<<=1,!(bs&4194240)&&(bs=64),e}function mc(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function os(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Zt(t),e[t]=n}function nw(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<n;){var r=31-Zt(n),o=1<<r;t[r]=0,i[r]=-1,e[r]=-1,n&=~o}}function Nd(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Zt(n),r=1<<i;r&t|e[i]&t&&(e[i]|=t),n&=~r}}var ie=0;function Tg(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Og,Bd,Mg,Dg,$g,_u=!1,ks=[],Xn=null,qn=null,Qn=null,$o=new Map,Ao=new Map,Bn=[],iw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yh(e,t){switch(e){case"focusin":case"focusout":Xn=null;break;case"dragenter":case"dragleave":qn=null;break;case"mouseover":case"mouseout":Qn=null;break;case"pointerover":case"pointerout":$o.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ao.delete(t.pointerId)}}function Jr(e,t,n,i,r,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},t!==null&&(t=as(t),t!==null&&Bd(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function rw(e,t,n,i,r){switch(t){case"focusin":return Xn=Jr(Xn,e,t,n,i,r),!0;case"dragenter":return qn=Jr(qn,e,t,n,i,r),!0;case"mouseover":return Qn=Jr(Qn,e,t,n,i,r),!0;case"pointerover":var o=r.pointerId;return $o.set(o,Jr($o.get(o)||null,e,t,n,i,r)),!0;case"gotpointercapture":return o=r.pointerId,Ao.set(o,Jr(Ao.get(o)||null,e,t,n,i,r)),!0}return!1}function Ag(e){var t=vi(e.target);if(t!==null){var n=Wi(t);if(n!==null){if(t=n.tag,t===13){if(t=Sg(n),t!==null){e.blockedOn=t,$g(e.priority,function(){Mg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ta(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Cu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);wu=i,n.target.dispatchEvent(i),wu=null}else return t=as(n),t!==null&&Bd(t),e.blockedOn=n,!1;t.shift()}return!0}function vh(e,t,n){ta(e)&&n.delete(t)}function ow(){_u=!1,Xn!==null&&ta(Xn)&&(Xn=null),qn!==null&&ta(qn)&&(qn=null),Qn!==null&&ta(Qn)&&(Qn=null),$o.forEach(vh),Ao.forEach(vh)}function eo(e,t){e.blockedOn===t&&(e.blockedOn=null,_u||(_u=!0,Pt.unstable_scheduleCallback(Pt.unstable_NormalPriority,ow)))}function Ro(e){function t(r){return eo(r,e)}if(0<ks.length){eo(ks[0],e);for(var n=1;n<ks.length;n++){var i=ks[n];i.blockedOn===e&&(i.blockedOn=null)}}for(Xn!==null&&eo(Xn,e),qn!==null&&eo(qn,e),Qn!==null&&eo(Qn,e),$o.forEach(t),Ao.forEach(t),n=0;n<Bn.length;n++)i=Bn[n],i.blockedOn===e&&(i.blockedOn=null);for(;0<Bn.length&&(n=Bn[0],n.blockedOn===null);)Ag(n),n.blockedOn===null&&Bn.shift()}var vr=An.ReactCurrentBatchConfig,Pa=!0;function sw(e,t,n,i){var r=ie,o=vr.transition;vr.transition=null;try{ie=1,Ud(e,t,n,i)}finally{ie=r,vr.transition=o}}function aw(e,t,n,i){var r=ie,o=vr.transition;vr.transition=null;try{ie=4,Ud(e,t,n,i)}finally{ie=r,vr.transition=o}}function Ud(e,t,n,i){if(Pa){var r=Cu(e,t,n,i);if(r===null)Cc(e,t,i,Ea,n),yh(e,i);else if(rw(r,e,t,n,i))i.stopPropagation();else if(yh(e,i),t&4&&-1<iw.indexOf(e)){for(;r!==null;){var o=as(r);if(o!==null&&Og(o),o=Cu(e,t,n,i),o===null&&Cc(e,t,i,Ea,n),o===r)break;r=o}r!==null&&i.stopPropagation()}else Cc(e,t,i,null,n)}}var Ea=null;function Cu(e,t,n,i){if(Ea=null,e=jd(i),e=vi(e),e!==null)if(t=Wi(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Sg(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ea=e,null}function Rg(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(q1()){case Fd:return 1;case Pg:return 4;case _a:case Q1:return 16;case Eg:return 536870912;default:return 16}default:return 16}}var Hn=null,Wd=null,na=null;function zg(){if(na)return na;var e,t=Wd,n=t.length,i,r="value"in Hn?Hn.value:Hn.textContent,o=r.length;for(e=0;e<n&&t[e]===r[e];e++);var s=n-e;for(i=1;i<=s&&t[n-i]===r[o-i];i++);return na=r.slice(e,1<i?1-i:void 0)}function ia(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function _s(){return!0}function wh(){return!1}function It(e){function t(n,i,r,o,s){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?_s:wh,this.isPropagationStopped=wh,this}return we(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_s)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_s)},persist:function(){},isPersistent:_s}),t}var Vr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hd=It(Vr),ss=we({},Vr,{view:0,detail:0}),lw=It(ss),gc,yc,to,tl=we({},ss,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==to&&(to&&e.type==="mousemove"?(gc=e.screenX-to.screenX,yc=e.screenY-to.screenY):yc=gc=0,to=e),gc)},movementY:function(e){return"movementY"in e?e.movementY:yc}}),xh=It(tl),cw=we({},tl,{dataTransfer:0}),uw=It(cw),dw=we({},ss,{relatedTarget:0}),vc=It(dw),fw=we({},Vr,{animationName:0,elapsedTime:0,pseudoElement:0}),hw=It(fw),pw=we({},Vr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),mw=It(pw),gw=we({},Vr,{data:0}),bh=It(gw),yw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ww={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xw(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ww[e])?!!t[e]:!1}function Vd(){return xw}var bw=we({},ss,{key:function(e){if(e.key){var t=yw[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ia(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vw[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vd,charCode:function(e){return e.type==="keypress"?ia(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ia(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Sw=It(bw),kw=we({},tl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sh=It(kw),_w=we({},ss,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vd}),Cw=It(_w),Pw=we({},Vr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ew=It(Pw),Iw=we({},tl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Tw=It(Iw),Ow=[9,13,27,32],Yd=On&&"CompositionEvent"in window,bo=null;On&&"documentMode"in document&&(bo=document.documentMode);var Mw=On&&"TextEvent"in window&&!bo,Lg=On&&(!Yd||bo&&8<bo&&11>=bo),kh=" ",_h=!1;function jg(e,t){switch(e){case"keyup":return Ow.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var tr=!1;function Dw(e,t){switch(e){case"compositionend":return Fg(t);case"keypress":return t.which!==32?null:(_h=!0,kh);case"textInput":return e=t.data,e===kh&&_h?null:e;default:return null}}function $w(e,t){if(tr)return e==="compositionend"||!Yd&&jg(e,t)?(e=zg(),na=Wd=Hn=null,tr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Lg&&t.locale!=="ko"?null:t.data;default:return null}}var Aw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ch(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Aw[e.type]:t==="textarea"}function Ng(e,t,n,i){yg(i),t=Ia(t,"onChange"),0<t.length&&(n=new Hd("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var So=null,zo=null;function Rw(e){Kg(e,0)}function nl(e){var t=rr(e);if(ug(t))return e}function zw(e,t){if(e==="change")return t}var Bg=!1;if(On){var wc;if(On){var xc="oninput"in document;if(!xc){var Ph=document.createElement("div");Ph.setAttribute("oninput","return;"),xc=typeof Ph.oninput=="function"}wc=xc}else wc=!1;Bg=wc&&(!document.documentMode||9<document.documentMode)}function Eh(){So&&(So.detachEvent("onpropertychange",Ug),zo=So=null)}function Ug(e){if(e.propertyName==="value"&&nl(zo)){var t=[];Ng(t,zo,e,jd(e)),bg(Rw,t)}}function Lw(e,t,n){e==="focusin"?(Eh(),So=t,zo=n,So.attachEvent("onpropertychange",Ug)):e==="focusout"&&Eh()}function jw(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return nl(zo)}function Fw(e,t){if(e==="click")return nl(t)}function Nw(e,t){if(e==="input"||e==="change")return nl(t)}function Bw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var rn=typeof Object.is=="function"?Object.is:Bw;function Lo(e,t){if(rn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!au.call(t,r)||!rn(e[r],t[r]))return!1}return!0}function Ih(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Th(e,t){var n=Ih(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ih(n)}}function Wg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Wg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Hg(){for(var e=window,t=ba();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ba(e.document)}return t}function Xd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Uw(e){var t=Hg(),n=e.focusedElem,i=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Wg(n.ownerDocument.documentElement,n)){if(i!==null&&Xd(n)){if(t=i.start,e=i.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var r=n.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!e.extend&&o>i&&(r=i,i=o,o=r),r=Th(n,o);var s=Th(n,i);r&&s&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(r.node,r.offset),e.removeAllRanges(),o>i?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ww=On&&"documentMode"in document&&11>=document.documentMode,nr=null,Pu=null,ko=null,Eu=!1;function Oh(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Eu||nr==null||nr!==ba(i)||(i=nr,"selectionStart"in i&&Xd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ko&&Lo(ko,i)||(ko=i,i=Ia(Pu,"onSelect"),0<i.length&&(t=new Hd("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=nr)))}function Cs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ir={animationend:Cs("Animation","AnimationEnd"),animationiteration:Cs("Animation","AnimationIteration"),animationstart:Cs("Animation","AnimationStart"),transitionend:Cs("Transition","TransitionEnd")},bc={},Vg={};On&&(Vg=document.createElement("div").style,"AnimationEvent"in window||(delete ir.animationend.animation,delete ir.animationiteration.animation,delete ir.animationstart.animation),"TransitionEvent"in window||delete ir.transitionend.transition);function il(e){if(bc[e])return bc[e];if(!ir[e])return e;var t=ir[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Vg)return bc[e]=t[n];return e}var Yg=il("animationend"),Xg=il("animationiteration"),qg=il("animationstart"),Qg=il("transitionend"),Gg=new Map,Mh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ai(e,t){Gg.set(e,t),Ui(t,[e])}for(var Sc=0;Sc<Mh.length;Sc++){var kc=Mh[Sc],Hw=kc.toLowerCase(),Vw=kc[0].toUpperCase()+kc.slice(1);ai(Hw,"on"+Vw)}ai(Yg,"onAnimationEnd");ai(Xg,"onAnimationIteration");ai(qg,"onAnimationStart");ai("dblclick","onDoubleClick");ai("focusin","onFocus");ai("focusout","onBlur");ai(Qg,"onTransitionEnd");Er("onMouseEnter",["mouseout","mouseover"]);Er("onMouseLeave",["mouseout","mouseover"]);Er("onPointerEnter",["pointerout","pointerover"]);Er("onPointerLeave",["pointerout","pointerover"]);Ui("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ui("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ui("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ui("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ui("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ui("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yw=new Set("cancel close invalid load scroll toggle".split(" ").concat(yo));function Dh(e,t,n){var i=e.type||"unknown-event";e.currentTarget=n,H1(i,t,void 0,e),e.currentTarget=null}function Kg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],r=i.event;i=i.listeners;e:{var o=void 0;if(t)for(var s=i.length-1;0<=s;s--){var a=i[s],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==o&&r.isPropagationStopped())break e;Dh(r,a,c),o=l}else for(s=0;s<i.length;s++){if(a=i[s],l=a.instance,c=a.currentTarget,a=a.listener,l!==o&&r.isPropagationStopped())break e;Dh(r,a,c),o=l}}}if(ka)throw e=Su,ka=!1,Su=null,e}function le(e,t){var n=t[Du];n===void 0&&(n=t[Du]=new Set);var i=e+"__bubble";n.has(i)||(Zg(t,e,2,!1),n.add(i))}function _c(e,t,n){var i=0;t&&(i|=4),Zg(n,e,i,t)}var Ps="_reactListening"+Math.random().toString(36).slice(2);function jo(e){if(!e[Ps]){e[Ps]=!0,og.forEach(function(n){n!=="selectionchange"&&(Yw.has(n)||_c(n,!1,e),_c(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ps]||(t[Ps]=!0,_c("selectionchange",!1,t))}}function Zg(e,t,n,i){switch(Rg(t)){case 1:var r=sw;break;case 4:r=aw;break;default:r=Ud}n=r.bind(null,t,n,e),r=void 0,!bu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),i?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function Cc(e,t,n,i,r){var o=i;if(!(t&1)&&!(t&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;s=s.return}for(;a!==null;){if(s=vi(a),s===null)return;if(l=s.tag,l===5||l===6){i=o=s;continue e}a=a.parentNode}}i=i.return}bg(function(){var c=o,u=jd(n),h=[];e:{var f=Gg.get(e);if(f!==void 0){var y=Hd,v=e;switch(e){case"keypress":if(ia(n)===0)break e;case"keydown":case"keyup":y=Sw;break;case"focusin":v="focus",y=vc;break;case"focusout":v="blur",y=vc;break;case"beforeblur":case"afterblur":y=vc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=xh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=uw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Cw;break;case Yg:case Xg:case qg:y=hw;break;case Qg:y=Ew;break;case"scroll":y=lw;break;case"wheel":y=Tw;break;case"copy":case"cut":case"paste":y=mw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Sh}var m=(t&4)!==0,C=!m&&e==="scroll",w=m?f!==null?f+"Capture":null:f;m=[];for(var g=c,d;g!==null;){d=g;var p=d.stateNode;if(d.tag===5&&p!==null&&(d=p,w!==null&&(p=Do(g,w),p!=null&&m.push(Fo(g,p,d)))),C)break;g=g.return}0<m.length&&(f=new y(f,v,null,n,u),h.push({event:f,listeners:m}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",f&&n!==wu&&(v=n.relatedTarget||n.fromElement)&&(vi(v)||v[Mn]))break e;if((y||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,y?(v=n.relatedTarget||n.toElement,y=c,v=v?vi(v):null,v!==null&&(C=Wi(v),v!==C||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=c),y!==v)){if(m=xh,p="onMouseLeave",w="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(m=Sh,p="onPointerLeave",w="onPointerEnter",g="pointer"),C=y==null?f:rr(y),d=v==null?f:rr(v),f=new m(p,g+"leave",y,n,u),f.target=C,f.relatedTarget=d,p=null,vi(u)===c&&(m=new m(w,g+"enter",v,n,u),m.target=d,m.relatedTarget=C,p=m),C=p,y&&v)t:{for(m=y,w=v,g=0,d=m;d;d=Yi(d))g++;for(d=0,p=w;p;p=Yi(p))d++;for(;0<g-d;)m=Yi(m),g--;for(;0<d-g;)w=Yi(w),d--;for(;g--;){if(m===w||w!==null&&m===w.alternate)break t;m=Yi(m),w=Yi(w)}m=null}else m=null;y!==null&&$h(h,f,y,m,!1),v!==null&&C!==null&&$h(h,C,v,m,!0)}}e:{if(f=c?rr(c):window,y=f.nodeName&&f.nodeName.toLowerCase(),y==="select"||y==="input"&&f.type==="file")var x=zw;else if(Ch(f))if(Bg)x=Nw;else{x=jw;var b=Lw}else(y=f.nodeName)&&y.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(x=Fw);if(x&&(x=x(e,c))){Ng(h,x,n,u);break e}b&&b(e,f,c),e==="focusout"&&(b=f._wrapperState)&&b.controlled&&f.type==="number"&&pu(f,"number",f.value)}switch(b=c?rr(c):window,e){case"focusin":(Ch(b)||b.contentEditable==="true")&&(nr=b,Pu=c,ko=null);break;case"focusout":ko=Pu=nr=null;break;case"mousedown":Eu=!0;break;case"contextmenu":case"mouseup":case"dragend":Eu=!1,Oh(h,n,u);break;case"selectionchange":if(Ww)break;case"keydown":case"keyup":Oh(h,n,u)}var k;if(Yd)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else tr?jg(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Lg&&n.locale!=="ko"&&(tr||P!=="onCompositionStart"?P==="onCompositionEnd"&&tr&&(k=zg()):(Hn=u,Wd="value"in Hn?Hn.value:Hn.textContent,tr=!0)),b=Ia(c,P),0<b.length&&(P=new bh(P,e,null,n,u),h.push({event:P,listeners:b}),k?P.data=k:(k=Fg(n),k!==null&&(P.data=k)))),(k=Mw?Dw(e,n):$w(e,n))&&(c=Ia(c,"onBeforeInput"),0<c.length&&(u=new bh("onBeforeInput","beforeinput",null,n,u),h.push({event:u,listeners:c}),u.data=k))}Kg(h,t)})}function Fo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ia(e,t){for(var n=t+"Capture",i=[];e!==null;){var r=e,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=Do(e,n),o!=null&&i.unshift(Fo(e,o,r)),o=Do(e,t),o!=null&&i.push(Fo(e,o,r))),e=e.return}return i}function Yi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function $h(e,t,n,i,r){for(var o=t._reactName,s=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Do(n,o),l!=null&&s.unshift(Fo(n,l,a))):r||(l=Do(n,o),l!=null&&s.push(Fo(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Xw=/\r\n?/g,qw=/\u0000|\uFFFD/g;function Ah(e){return(typeof e=="string"?e:""+e).replace(Xw,`
`).replace(qw,"")}function Es(e,t,n){if(t=Ah(t),Ah(e)!==t&&n)throw Error($(425))}function Ta(){}var Iu=null,Tu=null;function Ou(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Mu=typeof setTimeout=="function"?setTimeout:void 0,Qw=typeof clearTimeout=="function"?clearTimeout:void 0,Rh=typeof Promise=="function"?Promise:void 0,Gw=typeof queueMicrotask=="function"?queueMicrotask:typeof Rh<"u"?function(e){return Rh.resolve(null).then(e).catch(Kw)}:Mu;function Kw(e){setTimeout(function(){throw e})}function Pc(e,t){var n=t,i=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){e.removeChild(r),Ro(t);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ro(t)}function Gn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function zh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Yr=Math.random().toString(36).slice(2),hn="__reactFiber$"+Yr,No="__reactProps$"+Yr,Mn="__reactContainer$"+Yr,Du="__reactEvents$"+Yr,Zw="__reactListeners$"+Yr,Jw="__reactHandles$"+Yr;function vi(e){var t=e[hn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Mn]||n[hn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=zh(e);e!==null;){if(n=e[hn])return n;e=zh(e)}return t}e=n,n=e.parentNode}return null}function as(e){return e=e[hn]||e[Mn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function rr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error($(33))}function rl(e){return e[No]||null}var $u=[],or=-1;function li(e){return{current:e}}function ue(e){0>or||(e.current=$u[or],$u[or]=null,or--)}function se(e,t){or++,$u[or]=e.current,e.current=t}var ri={},Ke=li(ri),dt=li(!1),Mi=ri;function Ir(e,t){var n=e.type.contextTypes;if(!n)return ri;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===t)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in n)r[o]=t[o];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=r),r}function ft(e){return e=e.childContextTypes,e!=null}function Oa(){ue(dt),ue(Ke)}function Lh(e,t,n){if(Ke.current!==ri)throw Error($(168));se(Ke,t),se(dt,n)}function Jg(e,t,n){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in t))throw Error($(108,L1(e)||"Unknown",r));return we({},n,i)}function Ma(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ri,Mi=Ke.current,se(Ke,e),se(dt,dt.current),!0}function jh(e,t,n){var i=e.stateNode;if(!i)throw Error($(169));n?(e=Jg(e,t,Mi),i.__reactInternalMemoizedMergedChildContext=e,ue(dt),ue(Ke),se(Ke,e)):ue(dt),se(dt,n)}var kn=null,ol=!1,Ec=!1;function e0(e){kn===null?kn=[e]:kn.push(e)}function ex(e){ol=!0,e0(e)}function ci(){if(!Ec&&kn!==null){Ec=!0;var e=0,t=ie;try{var n=kn;for(ie=1;e<n.length;e++){var i=n[e];do i=i(!0);while(i!==null)}kn=null,ol=!1}catch(r){throw kn!==null&&(kn=kn.slice(e+1)),Cg(Fd,ci),r}finally{ie=t,Ec=!1}}return null}var sr=[],ar=0,Da=null,$a=0,Mt=[],Dt=0,Di=null,Cn=1,Pn="";function mi(e,t){sr[ar++]=$a,sr[ar++]=Da,Da=e,$a=t}function t0(e,t,n){Mt[Dt++]=Cn,Mt[Dt++]=Pn,Mt[Dt++]=Di,Di=e;var i=Cn;e=Pn;var r=32-Zt(i)-1;i&=~(1<<r),n+=1;var o=32-Zt(t)+r;if(30<o){var s=r-r%5;o=(i&(1<<s)-1).toString(32),i>>=s,r-=s,Cn=1<<32-Zt(t)+r|n<<r|i,Pn=o+e}else Cn=1<<o|n<<r|i,Pn=e}function qd(e){e.return!==null&&(mi(e,1),t0(e,1,0))}function Qd(e){for(;e===Da;)Da=sr[--ar],sr[ar]=null,$a=sr[--ar],sr[ar]=null;for(;e===Di;)Di=Mt[--Dt],Mt[Dt]=null,Pn=Mt[--Dt],Mt[Dt]=null,Cn=Mt[--Dt],Mt[Dt]=null}var kt=null,bt=null,he=!1,qt=null;function n0(e,t){var n=At(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Fh(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,kt=e,bt=Gn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,kt=e,bt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Di!==null?{id:Cn,overflow:Pn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=At(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,kt=e,bt=null,!0):!1;default:return!1}}function Au(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ru(e){if(he){var t=bt;if(t){var n=t;if(!Fh(e,t)){if(Au(e))throw Error($(418));t=Gn(n.nextSibling);var i=kt;t&&Fh(e,t)?n0(i,n):(e.flags=e.flags&-4097|2,he=!1,kt=e)}}else{if(Au(e))throw Error($(418));e.flags=e.flags&-4097|2,he=!1,kt=e}}}function Nh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;kt=e}function Is(e){if(e!==kt)return!1;if(!he)return Nh(e),he=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ou(e.type,e.memoizedProps)),t&&(t=bt)){if(Au(e))throw i0(),Error($(418));for(;t;)n0(e,t),t=Gn(t.nextSibling)}if(Nh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error($(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){bt=Gn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}bt=null}}else bt=kt?Gn(e.stateNode.nextSibling):null;return!0}function i0(){for(var e=bt;e;)e=Gn(e.nextSibling)}function Tr(){bt=kt=null,he=!1}function Gd(e){qt===null?qt=[e]:qt.push(e)}var tx=An.ReactCurrentBatchConfig;function no(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error($(309));var i=n.stateNode}if(!i)throw Error($(147,e));var r=i,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=r.refs;s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error($(284));if(!n._owner)throw Error($(290,e))}return e}function Ts(e,t){throw e=Object.prototype.toString.call(t),Error($(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Bh(e){var t=e._init;return t(e._payload)}function r0(e){function t(w,g){if(e){var d=w.deletions;d===null?(w.deletions=[g],w.flags|=16):d.push(g)}}function n(w,g){if(!e)return null;for(;g!==null;)t(w,g),g=g.sibling;return null}function i(w,g){for(w=new Map;g!==null;)g.key!==null?w.set(g.key,g):w.set(g.index,g),g=g.sibling;return w}function r(w,g){return w=ei(w,g),w.index=0,w.sibling=null,w}function o(w,g,d){return w.index=d,e?(d=w.alternate,d!==null?(d=d.index,d<g?(w.flags|=2,g):d):(w.flags|=2,g)):(w.flags|=1048576,g)}function s(w){return e&&w.alternate===null&&(w.flags|=2),w}function a(w,g,d,p){return g===null||g.tag!==6?(g=Ac(d,w.mode,p),g.return=w,g):(g=r(g,d),g.return=w,g)}function l(w,g,d,p){var x=d.type;return x===er?u(w,g,d.props.children,p,d.key):g!==null&&(g.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Fn&&Bh(x)===g.type)?(p=r(g,d.props),p.ref=no(w,g,d),p.return=w,p):(p=ua(d.type,d.key,d.props,null,w.mode,p),p.ref=no(w,g,d),p.return=w,p)}function c(w,g,d,p){return g===null||g.tag!==4||g.stateNode.containerInfo!==d.containerInfo||g.stateNode.implementation!==d.implementation?(g=Rc(d,w.mode,p),g.return=w,g):(g=r(g,d.children||[]),g.return=w,g)}function u(w,g,d,p,x){return g===null||g.tag!==7?(g=Ei(d,w.mode,p,x),g.return=w,g):(g=r(g,d),g.return=w,g)}function h(w,g,d){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Ac(""+g,w.mode,d),g.return=w,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case vs:return d=ua(g.type,g.key,g.props,null,w.mode,d),d.ref=no(w,null,g),d.return=w,d;case Ji:return g=Rc(g,w.mode,d),g.return=w,g;case Fn:var p=g._init;return h(w,p(g._payload),d)}if(mo(g)||Kr(g))return g=Ei(g,w.mode,d,null),g.return=w,g;Ts(w,g)}return null}function f(w,g,d,p){var x=g!==null?g.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return x!==null?null:a(w,g,""+d,p);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case vs:return d.key===x?l(w,g,d,p):null;case Ji:return d.key===x?c(w,g,d,p):null;case Fn:return x=d._init,f(w,g,x(d._payload),p)}if(mo(d)||Kr(d))return x!==null?null:u(w,g,d,p,null);Ts(w,d)}return null}function y(w,g,d,p,x){if(typeof p=="string"&&p!==""||typeof p=="number")return w=w.get(d)||null,a(g,w,""+p,x);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case vs:return w=w.get(p.key===null?d:p.key)||null,l(g,w,p,x);case Ji:return w=w.get(p.key===null?d:p.key)||null,c(g,w,p,x);case Fn:var b=p._init;return y(w,g,d,b(p._payload),x)}if(mo(p)||Kr(p))return w=w.get(d)||null,u(g,w,p,x,null);Ts(g,p)}return null}function v(w,g,d,p){for(var x=null,b=null,k=g,P=g=0,I=null;k!==null&&P<d.length;P++){k.index>P?(I=k,k=null):I=k.sibling;var O=f(w,k,d[P],p);if(O===null){k===null&&(k=I);break}e&&k&&O.alternate===null&&t(w,k),g=o(O,g,P),b===null?x=O:b.sibling=O,b=O,k=I}if(P===d.length)return n(w,k),he&&mi(w,P),x;if(k===null){for(;P<d.length;P++)k=h(w,d[P],p),k!==null&&(g=o(k,g,P),b===null?x=k:b.sibling=k,b=k);return he&&mi(w,P),x}for(k=i(w,k);P<d.length;P++)I=y(k,w,P,d[P],p),I!==null&&(e&&I.alternate!==null&&k.delete(I.key===null?P:I.key),g=o(I,g,P),b===null?x=I:b.sibling=I,b=I);return e&&k.forEach(function(A){return t(w,A)}),he&&mi(w,P),x}function m(w,g,d,p){var x=Kr(d);if(typeof x!="function")throw Error($(150));if(d=x.call(d),d==null)throw Error($(151));for(var b=x=null,k=g,P=g=0,I=null,O=d.next();k!==null&&!O.done;P++,O=d.next()){k.index>P?(I=k,k=null):I=k.sibling;var A=f(w,k,O.value,p);if(A===null){k===null&&(k=I);break}e&&k&&A.alternate===null&&t(w,k),g=o(A,g,P),b===null?x=A:b.sibling=A,b=A,k=I}if(O.done)return n(w,k),he&&mi(w,P),x;if(k===null){for(;!O.done;P++,O=d.next())O=h(w,O.value,p),O!==null&&(g=o(O,g,P),b===null?x=O:b.sibling=O,b=O);return he&&mi(w,P),x}for(k=i(w,k);!O.done;P++,O=d.next())O=y(k,w,P,O.value,p),O!==null&&(e&&O.alternate!==null&&k.delete(O.key===null?P:O.key),g=o(O,g,P),b===null?x=O:b.sibling=O,b=O);return e&&k.forEach(function(E){return t(w,E)}),he&&mi(w,P),x}function C(w,g,d,p){if(typeof d=="object"&&d!==null&&d.type===er&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case vs:e:{for(var x=d.key,b=g;b!==null;){if(b.key===x){if(x=d.type,x===er){if(b.tag===7){n(w,b.sibling),g=r(b,d.props.children),g.return=w,w=g;break e}}else if(b.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Fn&&Bh(x)===b.type){n(w,b.sibling),g=r(b,d.props),g.ref=no(w,b,d),g.return=w,w=g;break e}n(w,b);break}else t(w,b);b=b.sibling}d.type===er?(g=Ei(d.props.children,w.mode,p,d.key),g.return=w,w=g):(p=ua(d.type,d.key,d.props,null,w.mode,p),p.ref=no(w,g,d),p.return=w,w=p)}return s(w);case Ji:e:{for(b=d.key;g!==null;){if(g.key===b)if(g.tag===4&&g.stateNode.containerInfo===d.containerInfo&&g.stateNode.implementation===d.implementation){n(w,g.sibling),g=r(g,d.children||[]),g.return=w,w=g;break e}else{n(w,g);break}else t(w,g);g=g.sibling}g=Rc(d,w.mode,p),g.return=w,w=g}return s(w);case Fn:return b=d._init,C(w,g,b(d._payload),p)}if(mo(d))return v(w,g,d,p);if(Kr(d))return m(w,g,d,p);Ts(w,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,g!==null&&g.tag===6?(n(w,g.sibling),g=r(g,d),g.return=w,w=g):(n(w,g),g=Ac(d,w.mode,p),g.return=w,w=g),s(w)):n(w,g)}return C}var Or=r0(!0),o0=r0(!1),Aa=li(null),Ra=null,lr=null,Kd=null;function Zd(){Kd=lr=Ra=null}function Jd(e){var t=Aa.current;ue(Aa),e._currentValue=t}function zu(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function wr(e,t){Ra=e,Kd=lr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ut=!0),e.firstContext=null)}function Lt(e){var t=e._currentValue;if(Kd!==e)if(e={context:e,memoizedValue:t,next:null},lr===null){if(Ra===null)throw Error($(308));lr=e,Ra.dependencies={lanes:0,firstContext:e}}else lr=lr.next=e;return t}var wi=null;function ef(e){wi===null?wi=[e]:wi.push(e)}function s0(e,t,n,i){var r=t.interleaved;return r===null?(n.next=n,ef(t)):(n.next=r.next,r.next=n),t.interleaved=n,Dn(e,i)}function Dn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Nn=!1;function tf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function a0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function In(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Kn(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,K&2){var r=i.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),i.pending=t,Dn(e,n)}return r=i.interleaved,r===null?(t.next=t,ef(i)):(t.next=r.next,r.next=t),i.interleaved=t,Dn(e,n)}function ra(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Nd(e,n)}}function Uh(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?r=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?r=o=t:o=o.next=t}else r=o=t;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function za(e,t,n,i){var r=e.updateQueue;Nn=!1;var o=r.firstBaseUpdate,s=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,s===null?o=c:s.next=c,s=l;var u=e.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==s&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(o!==null){var h=r.baseState;s=0,u=c=l=null,a=o;do{var f=a.lane,y=a.eventTime;if((i&f)===f){u!==null&&(u=u.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,m=a;switch(f=t,y=n,m.tag){case 1:if(v=m.payload,typeof v=="function"){h=v.call(y,h,f);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=m.payload,f=typeof v=="function"?v.call(y,h,f):v,f==null)break e;h=we({},h,f);break e;case 2:Nn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else y={eventTime:y,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=y,l=h):u=u.next=y,s|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(u===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,t=r.shared.interleaved,t!==null){r=t;do s|=r.lane,r=r.next;while(r!==t)}else o===null&&(r.shared.lanes=0);Ai|=s,e.lanes=s,e.memoizedState=h}}function Wh(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error($(191,r));r.call(i)}}}var ls={},mn=li(ls),Bo=li(ls),Uo=li(ls);function xi(e){if(e===ls)throw Error($(174));return e}function nf(e,t){switch(se(Uo,t),se(Bo,e),se(mn,ls),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:gu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=gu(t,e)}ue(mn),se(mn,t)}function Mr(){ue(mn),ue(Bo),ue(Uo)}function l0(e){xi(Uo.current);var t=xi(mn.current),n=gu(t,e.type);t!==n&&(se(Bo,e),se(mn,n))}function rf(e){Bo.current===e&&(ue(mn),ue(Bo))}var ge=li(0);function La(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ic=[];function of(){for(var e=0;e<Ic.length;e++)Ic[e]._workInProgressVersionPrimary=null;Ic.length=0}var oa=An.ReactCurrentDispatcher,Tc=An.ReactCurrentBatchConfig,$i=0,ve=null,Oe=null,De=null,ja=!1,_o=!1,Wo=0,nx=0;function Ve(){throw Error($(321))}function sf(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!rn(e[n],t[n]))return!1;return!0}function af(e,t,n,i,r,o){if($i=o,ve=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,oa.current=e===null||e.memoizedState===null?sx:ax,e=n(i,r),_o){o=0;do{if(_o=!1,Wo=0,25<=o)throw Error($(301));o+=1,De=Oe=null,t.updateQueue=null,oa.current=lx,e=n(i,r)}while(_o)}if(oa.current=Fa,t=Oe!==null&&Oe.next!==null,$i=0,De=Oe=ve=null,ja=!1,t)throw Error($(300));return e}function lf(){var e=Wo!==0;return Wo=0,e}function an(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return De===null?ve.memoizedState=De=e:De=De.next=e,De}function jt(){if(Oe===null){var e=ve.alternate;e=e!==null?e.memoizedState:null}else e=Oe.next;var t=De===null?ve.memoizedState:De.next;if(t!==null)De=t,Oe=e;else{if(e===null)throw Error($(310));Oe=e,e={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},De===null?ve.memoizedState=De=e:De=De.next=e}return De}function Ho(e,t){return typeof t=="function"?t(e):t}function Oc(e){var t=jt(),n=t.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=e;var i=Oe,r=i.baseQueue,o=n.pending;if(o!==null){if(r!==null){var s=r.next;r.next=o.next,o.next=s}i.baseQueue=r=o,n.pending=null}if(r!==null){o=r.next,i=i.baseState;var a=s=null,l=null,c=o;do{var u=c.lane;if(($i&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:e(i,c.action);else{var h={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,s=i):l=l.next=h,ve.lanes|=u,Ai|=u}c=c.next}while(c!==null&&c!==o);l===null?s=i:l.next=a,rn(i,t.memoizedState)||(ut=!0),t.memoizedState=i,t.baseState=s,t.baseQueue=l,n.lastRenderedState=i}if(e=n.interleaved,e!==null){r=e;do o=r.lane,ve.lanes|=o,Ai|=o,r=r.next;while(r!==e)}else r===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Mc(e){var t=jt(),n=t.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=e;var i=n.dispatch,r=n.pending,o=t.memoizedState;if(r!==null){n.pending=null;var s=r=r.next;do o=e(o,s.action),s=s.next;while(s!==r);rn(o,t.memoizedState)||(ut=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,i]}function c0(){}function u0(e,t){var n=ve,i=jt(),r=t(),o=!rn(i.memoizedState,r);if(o&&(i.memoizedState=r,ut=!0),i=i.queue,cf(h0.bind(null,n,i,e),[e]),i.getSnapshot!==t||o||De!==null&&De.memoizedState.tag&1){if(n.flags|=2048,Vo(9,f0.bind(null,n,i,r,t),void 0,null),Re===null)throw Error($(349));$i&30||d0(n,t,r)}return r}function d0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ve.updateQueue,t===null?(t={lastEffect:null,stores:null},ve.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function f0(e,t,n,i){t.value=n,t.getSnapshot=i,p0(t)&&m0(e)}function h0(e,t,n){return n(function(){p0(t)&&m0(e)})}function p0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!rn(e,n)}catch{return!0}}function m0(e){var t=Dn(e,1);t!==null&&Jt(t,e,1,-1)}function Hh(e){var t=an();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ho,lastRenderedState:e},t.queue=e,e=e.dispatch=ox.bind(null,ve,e),[t.memoizedState,e]}function Vo(e,t,n,i){return e={tag:e,create:t,destroy:n,deps:i,next:null},t=ve.updateQueue,t===null?(t={lastEffect:null,stores:null},ve.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e)),e}function g0(){return jt().memoizedState}function sa(e,t,n,i){var r=an();ve.flags|=e,r.memoizedState=Vo(1|t,n,void 0,i===void 0?null:i)}function sl(e,t,n,i){var r=jt();i=i===void 0?null:i;var o=void 0;if(Oe!==null){var s=Oe.memoizedState;if(o=s.destroy,i!==null&&sf(i,s.deps)){r.memoizedState=Vo(t,n,o,i);return}}ve.flags|=e,r.memoizedState=Vo(1|t,n,o,i)}function Vh(e,t){return sa(8390656,8,e,t)}function cf(e,t){return sl(2048,8,e,t)}function y0(e,t){return sl(4,2,e,t)}function v0(e,t){return sl(4,4,e,t)}function w0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function x0(e,t,n){return n=n!=null?n.concat([e]):null,sl(4,4,w0.bind(null,t,e),n)}function uf(){}function b0(e,t){var n=jt();t=t===void 0?null:t;var i=n.memoizedState;return i!==null&&t!==null&&sf(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function S0(e,t){var n=jt();t=t===void 0?null:t;var i=n.memoizedState;return i!==null&&t!==null&&sf(t,i[1])?i[0]:(e=e(),n.memoizedState=[e,t],e)}function k0(e,t,n){return $i&21?(rn(n,t)||(n=Ig(),ve.lanes|=n,Ai|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ut=!0),e.memoizedState=n)}function ix(e,t){var n=ie;ie=n!==0&&4>n?n:4,e(!0);var i=Tc.transition;Tc.transition={};try{e(!1),t()}finally{ie=n,Tc.transition=i}}function _0(){return jt().memoizedState}function rx(e,t,n){var i=Jn(e);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},C0(e))P0(t,n);else if(n=s0(e,t,n,i),n!==null){var r=it();Jt(n,e,i,r),E0(n,t,i)}}function ox(e,t,n){var i=Jn(e),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(C0(e))P0(t,r);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(r.hasEagerState=!0,r.eagerState=a,rn(a,s)){var l=t.interleaved;l===null?(r.next=r,ef(t)):(r.next=l.next,l.next=r),t.interleaved=r;return}}catch{}finally{}n=s0(e,t,r,i),n!==null&&(r=it(),Jt(n,e,i,r),E0(n,t,i))}}function C0(e){var t=e.alternate;return e===ve||t!==null&&t===ve}function P0(e,t){_o=ja=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function E0(e,t,n){if(n&4194240){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Nd(e,n)}}var Fa={readContext:Lt,useCallback:Ve,useContext:Ve,useEffect:Ve,useImperativeHandle:Ve,useInsertionEffect:Ve,useLayoutEffect:Ve,useMemo:Ve,useReducer:Ve,useRef:Ve,useState:Ve,useDebugValue:Ve,useDeferredValue:Ve,useTransition:Ve,useMutableSource:Ve,useSyncExternalStore:Ve,useId:Ve,unstable_isNewReconciler:!1},sx={readContext:Lt,useCallback:function(e,t){return an().memoizedState=[e,t===void 0?null:t],e},useContext:Lt,useEffect:Vh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,sa(4194308,4,w0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return sa(4194308,4,e,t)},useInsertionEffect:function(e,t){return sa(4,2,e,t)},useMemo:function(e,t){var n=an();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var i=an();return t=n!==void 0?n(t):t,i.memoizedState=i.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},i.queue=e,e=e.dispatch=rx.bind(null,ve,e),[i.memoizedState,e]},useRef:function(e){var t=an();return e={current:e},t.memoizedState=e},useState:Hh,useDebugValue:uf,useDeferredValue:function(e){return an().memoizedState=e},useTransition:function(){var e=Hh(!1),t=e[0];return e=ix.bind(null,e[1]),an().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var i=ve,r=an();if(he){if(n===void 0)throw Error($(407));n=n()}else{if(n=t(),Re===null)throw Error($(349));$i&30||d0(i,t,n)}r.memoizedState=n;var o={value:n,getSnapshot:t};return r.queue=o,Vh(h0.bind(null,i,o,e),[e]),i.flags|=2048,Vo(9,f0.bind(null,i,o,n,t),void 0,null),n},useId:function(){var e=an(),t=Re.identifierPrefix;if(he){var n=Pn,i=Cn;n=(i&~(1<<32-Zt(i)-1)).toString(32)+n,t=":"+t+"R"+n,n=Wo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=nx++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ax={readContext:Lt,useCallback:b0,useContext:Lt,useEffect:cf,useImperativeHandle:x0,useInsertionEffect:y0,useLayoutEffect:v0,useMemo:S0,useReducer:Oc,useRef:g0,useState:function(){return Oc(Ho)},useDebugValue:uf,useDeferredValue:function(e){var t=jt();return k0(t,Oe.memoizedState,e)},useTransition:function(){var e=Oc(Ho)[0],t=jt().memoizedState;return[e,t]},useMutableSource:c0,useSyncExternalStore:u0,useId:_0,unstable_isNewReconciler:!1},lx={readContext:Lt,useCallback:b0,useContext:Lt,useEffect:cf,useImperativeHandle:x0,useInsertionEffect:y0,useLayoutEffect:v0,useMemo:S0,useReducer:Mc,useRef:g0,useState:function(){return Mc(Ho)},useDebugValue:uf,useDeferredValue:function(e){var t=jt();return Oe===null?t.memoizedState=e:k0(t,Oe.memoizedState,e)},useTransition:function(){var e=Mc(Ho)[0],t=jt().memoizedState;return[e,t]},useMutableSource:c0,useSyncExternalStore:u0,useId:_0,unstable_isNewReconciler:!1};function Vt(e,t){if(e&&e.defaultProps){t=we({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Lu(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:we({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var al={isMounted:function(e){return(e=e._reactInternals)?Wi(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var i=it(),r=Jn(e),o=In(i,r);o.payload=t,n!=null&&(o.callback=n),t=Kn(e,o,r),t!==null&&(Jt(t,e,r,i),ra(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=it(),r=Jn(e),o=In(i,r);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Kn(e,o,r),t!==null&&(Jt(t,e,r,i),ra(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=it(),i=Jn(e),r=In(n,i);r.tag=2,t!=null&&(r.callback=t),t=Kn(e,r,i),t!==null&&(Jt(t,e,i,n),ra(t,e,i))}};function Yh(e,t,n,i,r,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,o,s):t.prototype&&t.prototype.isPureReactComponent?!Lo(n,i)||!Lo(r,o):!0}function I0(e,t,n){var i=!1,r=ri,o=t.contextType;return typeof o=="object"&&o!==null?o=Lt(o):(r=ft(t)?Mi:Ke.current,i=t.contextTypes,o=(i=i!=null)?Ir(e,r):ri),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=al,e.stateNode=t,t._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=o),t}function Xh(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&al.enqueueReplaceState(t,t.state,null)}function ju(e,t,n,i){var r=e.stateNode;r.props=n,r.state=e.memoizedState,r.refs={},tf(e);var o=t.contextType;typeof o=="object"&&o!==null?r.context=Lt(o):(o=ft(t)?Mi:Ke.current,r.context=Ir(e,o)),r.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Lu(e,t,o,n),r.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(t=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),t!==r.state&&al.enqueueReplaceState(r,r.state,null),za(e,n,r,i),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function Dr(e,t){try{var n="",i=t;do n+=z1(i),i=i.return;while(i);var r=n}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:r,digest:null}}function Dc(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Fu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var cx=typeof WeakMap=="function"?WeakMap:Map;function T0(e,t,n){n=In(-1,n),n.tag=3,n.payload={element:null};var i=t.value;return n.callback=function(){Ba||(Ba=!0,Qu=i),Fu(e,t)},n}function O0(e,t,n){n=In(-1,n),n.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var r=t.value;n.payload=function(){return i(r)},n.callback=function(){Fu(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Fu(e,t),typeof i!="function"&&(Zn===null?Zn=new Set([this]):Zn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function qh(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new cx;var r=new Set;i.set(t,r)}else r=i.get(t),r===void 0&&(r=new Set,i.set(t,r));r.has(n)||(r.add(n),e=kx.bind(null,e,t,n),t.then(e,e))}function Qh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Gh(e,t,n,i,r){return e.mode&1?(e.flags|=65536,e.lanes=r,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=In(-1,1),t.tag=2,Kn(n,t,1))),n.lanes|=1),e)}var ux=An.ReactCurrentOwner,ut=!1;function tt(e,t,n,i){t.child=e===null?o0(t,null,n,i):Or(t,e.child,n,i)}function Kh(e,t,n,i,r){n=n.render;var o=t.ref;return wr(t,r),i=af(e,t,n,i,o,r),n=lf(),e!==null&&!ut?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,$n(e,t,r)):(he&&n&&qd(t),t.flags|=1,tt(e,t,i,r),t.child)}function Zh(e,t,n,i,r){if(e===null){var o=n.type;return typeof o=="function"&&!vf(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,M0(e,t,o,i,r)):(e=ua(n.type,null,i,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&r)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Lo,n(s,i)&&e.ref===t.ref)return $n(e,t,r)}return t.flags|=1,e=ei(o,i),e.ref=t.ref,e.return=t,t.child=e}function M0(e,t,n,i,r){if(e!==null){var o=e.memoizedProps;if(Lo(o,i)&&e.ref===t.ref)if(ut=!1,t.pendingProps=i=o,(e.lanes&r)!==0)e.flags&131072&&(ut=!0);else return t.lanes=e.lanes,$n(e,t,r)}return Nu(e,t,n,i,r)}function D0(e,t,n){var i=t.pendingProps,r=i.children,o=e!==null?e.memoizedState:null;if(i.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},se(ur,vt),vt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,se(ur,vt),vt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,se(ur,vt),vt|=i}else o!==null?(i=o.baseLanes|n,t.memoizedState=null):i=n,se(ur,vt),vt|=i;return tt(e,t,r,n),t.child}function $0(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Nu(e,t,n,i,r){var o=ft(n)?Mi:Ke.current;return o=Ir(t,o),wr(t,r),n=af(e,t,n,i,o,r),i=lf(),e!==null&&!ut?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,$n(e,t,r)):(he&&i&&qd(t),t.flags|=1,tt(e,t,n,r),t.child)}function Jh(e,t,n,i,r){if(ft(n)){var o=!0;Ma(t)}else o=!1;if(wr(t,r),t.stateNode===null)aa(e,t),I0(t,n,i),ju(t,n,i,r),i=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=Lt(c):(c=ft(n)?Mi:Ke.current,c=Ir(t,c));var u=n.getDerivedStateFromProps,h=typeof u=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Xh(t,s,i,c),Nn=!1;var f=t.memoizedState;s.state=f,za(t,i,s,r),l=t.memoizedState,a!==i||f!==l||dt.current||Nn?(typeof u=="function"&&(Lu(t,n,u,i),l=t.memoizedState),(a=Nn||Yh(t,n,a,i,f,l,c))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=l),s.props=i,s.state=l,s.context=c,i=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{s=t.stateNode,a0(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Vt(t.type,a),s.props=c,h=t.pendingProps,f=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Lt(l):(l=ft(n)?Mi:Ke.current,l=Ir(t,l));var y=n.getDerivedStateFromProps;(u=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==h||f!==l)&&Xh(t,s,i,l),Nn=!1,f=t.memoizedState,s.state=f,za(t,i,s,r);var v=t.memoizedState;a!==h||f!==v||dt.current||Nn?(typeof y=="function"&&(Lu(t,n,y,i),v=t.memoizedState),(c=Nn||Yh(t,n,c,i,f,v,l)||!1)?(u||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,v,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,v,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=v),s.props=i,s.state=v,s.context=l,i=c):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),i=!1)}return Bu(e,t,n,i,o,r)}function Bu(e,t,n,i,r,o){$0(e,t);var s=(t.flags&128)!==0;if(!i&&!s)return r&&jh(t,n,!1),$n(e,t,o);i=t.stateNode,ux.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:i.render();return t.flags|=1,e!==null&&s?(t.child=Or(t,e.child,null,o),t.child=Or(t,null,a,o)):tt(e,t,a,o),t.memoizedState=i.state,r&&jh(t,n,!0),t.child}function A0(e){var t=e.stateNode;t.pendingContext?Lh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Lh(e,t.context,!1),nf(e,t.containerInfo)}function ep(e,t,n,i,r){return Tr(),Gd(r),t.flags|=256,tt(e,t,n,i),t.child}var Uu={dehydrated:null,treeContext:null,retryLane:0};function Wu(e){return{baseLanes:e,cachePool:null,transitions:null}}function R0(e,t,n){var i=t.pendingProps,r=ge.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(r&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),se(ge,r&1),e===null)return Ru(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=i.children,e=i.fallback,o?(i=t.mode,o=t.child,s={mode:"hidden",children:s},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=ul(s,i,0,null),e=Ei(e,i,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Wu(n),t.memoizedState=Uu,e):df(t,s));if(r=e.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return dx(e,t,s,i,a,r,n);if(o){o=i.fallback,s=t.mode,r=e.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(s&1)&&t.child!==r?(i=t.child,i.childLanes=0,i.pendingProps=l,t.deletions=null):(i=ei(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?o=ei(a,o):(o=Ei(o,s,n,null),o.flags|=2),o.return=t,i.return=t,i.sibling=o,t.child=i,i=o,o=t.child,s=e.child.memoizedState,s=s===null?Wu(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Uu,i}return o=e.child,e=o.sibling,i=ei(o,{mode:"visible",children:i.children}),!(t.mode&1)&&(i.lanes=n),i.return=t,i.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function df(e,t){return t=ul({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Os(e,t,n,i){return i!==null&&Gd(i),Or(t,e.child,null,n),e=df(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function dx(e,t,n,i,r,o,s){if(n)return t.flags&256?(t.flags&=-257,i=Dc(Error($(422))),Os(e,t,s,i)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=i.fallback,r=t.mode,i=ul({mode:"visible",children:i.children},r,0,null),o=Ei(o,r,s,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,t.mode&1&&Or(t,e.child,null,s),t.child.memoizedState=Wu(s),t.memoizedState=Uu,o);if(!(t.mode&1))return Os(e,t,s,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,o=Error($(419)),i=Dc(o,i,void 0),Os(e,t,s,i)}if(a=(s&e.childLanes)!==0,ut||a){if(i=Re,i!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|s)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,Dn(e,r),Jt(i,e,r,-1))}return yf(),i=Dc(Error($(421))),Os(e,t,s,i)}return r.data==="$?"?(t.flags|=128,t.child=e.child,t=_x.bind(null,e),r._reactRetry=t,null):(e=o.treeContext,bt=Gn(r.nextSibling),kt=t,he=!0,qt=null,e!==null&&(Mt[Dt++]=Cn,Mt[Dt++]=Pn,Mt[Dt++]=Di,Cn=e.id,Pn=e.overflow,Di=t),t=df(t,i.children),t.flags|=4096,t)}function tp(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),zu(e.return,t,n)}function $c(e,t,n,i,r){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r)}function z0(e,t,n){var i=t.pendingProps,r=i.revealOrder,o=i.tail;if(tt(e,t,i.children,n),i=ge.current,i&2)i=i&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&tp(e,n,t);else if(e.tag===19)tp(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(se(ge,i),!(t.mode&1))t.memoizedState=null;else switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&La(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),$c(t,!1,r,n,o);break;case"backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&La(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}$c(t,!0,n,null,o);break;case"together":$c(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function aa(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function $n(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ai|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error($(153));if(t.child!==null){for(e=t.child,n=ei(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ei(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function fx(e,t,n){switch(t.tag){case 3:A0(t),Tr();break;case 5:l0(t);break;case 1:ft(t.type)&&Ma(t);break;case 4:nf(t,t.stateNode.containerInfo);break;case 10:var i=t.type._context,r=t.memoizedProps.value;se(Aa,i._currentValue),i._currentValue=r;break;case 13:if(i=t.memoizedState,i!==null)return i.dehydrated!==null?(se(ge,ge.current&1),t.flags|=128,null):n&t.child.childLanes?R0(e,t,n):(se(ge,ge.current&1),e=$n(e,t,n),e!==null?e.sibling:null);se(ge,ge.current&1);break;case 19:if(i=(n&t.childLanes)!==0,e.flags&128){if(i)return z0(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),se(ge,ge.current),i)break;return null;case 22:case 23:return t.lanes=0,D0(e,t,n)}return $n(e,t,n)}var L0,Hu,j0,F0;L0=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Hu=function(){};j0=function(e,t,n,i){var r=e.memoizedProps;if(r!==i){e=t.stateNode,xi(mn.current);var o=null;switch(n){case"input":r=fu(e,r),i=fu(e,i),o=[];break;case"select":r=we({},r,{value:void 0}),i=we({},i,{value:void 0}),o=[];break;case"textarea":r=mu(e,r),i=mu(e,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=Ta)}yu(n,i);var s;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Oo.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Oo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&le("scroll",e),o||a===l||(o=[])):(o=o||[]).push(c,l))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};F0=function(e,t,n,i){n!==i&&(t.flags|=4)};function io(e,t){if(!he)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Ye(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function hx(e,t,n){var i=t.pendingProps;switch(Qd(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(t),null;case 1:return ft(t.type)&&Oa(),Ye(t),null;case 3:return i=t.stateNode,Mr(),ue(dt),ue(Ke),of(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Is(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,qt!==null&&(Zu(qt),qt=null))),Hu(e,t),Ye(t),null;case 5:rf(t);var r=xi(Uo.current);if(n=t.type,e!==null&&t.stateNode!=null)j0(e,t,n,i,r),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error($(166));return Ye(t),null}if(e=xi(mn.current),Is(t)){i=t.stateNode,n=t.type;var o=t.memoizedProps;switch(i[hn]=t,i[No]=o,e=(t.mode&1)!==0,n){case"dialog":le("cancel",i),le("close",i);break;case"iframe":case"object":case"embed":le("load",i);break;case"video":case"audio":for(r=0;r<yo.length;r++)le(yo[r],i);break;case"source":le("error",i);break;case"img":case"image":case"link":le("error",i),le("load",i);break;case"details":le("toggle",i);break;case"input":uh(i,o),le("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},le("invalid",i);break;case"textarea":fh(i,o),le("invalid",i)}yu(n,o),r=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?i.textContent!==a&&(o.suppressHydrationWarning!==!0&&Es(i.textContent,a,e),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Es(i.textContent,a,e),r=["children",""+a]):Oo.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&le("scroll",i)}switch(n){case"input":ws(i),dh(i,o,!0);break;case"textarea":ws(i),hh(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=Ta)}i=r,t.updateQueue=i,i!==null&&(t.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=hg(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=s.createElement(n,{is:i.is}):(e=s.createElement(n),n==="select"&&(s=e,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):e=s.createElementNS(e,n),e[hn]=t,e[No]=i,L0(e,t,!1,!1),t.stateNode=e;e:{switch(s=vu(n,i),n){case"dialog":le("cancel",e),le("close",e),r=i;break;case"iframe":case"object":case"embed":le("load",e),r=i;break;case"video":case"audio":for(r=0;r<yo.length;r++)le(yo[r],e);r=i;break;case"source":le("error",e),r=i;break;case"img":case"image":case"link":le("error",e),le("load",e),r=i;break;case"details":le("toggle",e),r=i;break;case"input":uh(e,i),r=fu(e,i),le("invalid",e);break;case"option":r=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},r=we({},i,{value:void 0}),le("invalid",e);break;case"textarea":fh(e,i),r=mu(e,i),le("invalid",e);break;default:r=i}yu(n,r),a=r;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?gg(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&pg(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Mo(e,l):typeof l=="number"&&Mo(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Oo.hasOwnProperty(o)?l!=null&&o==="onScroll"&&le("scroll",e):l!=null&&Ad(e,o,l,s))}switch(n){case"input":ws(e),dh(e,i,!1);break;case"textarea":ws(e),hh(e);break;case"option":i.value!=null&&e.setAttribute("value",""+ii(i.value));break;case"select":e.multiple=!!i.multiple,o=i.value,o!=null?mr(e,!!i.multiple,o,!1):i.defaultValue!=null&&mr(e,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=Ta)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ye(t),null;case 6:if(e&&t.stateNode!=null)F0(e,t,e.memoizedProps,i);else{if(typeof i!="string"&&t.stateNode===null)throw Error($(166));if(n=xi(Uo.current),xi(mn.current),Is(t)){if(i=t.stateNode,n=t.memoizedProps,i[hn]=t,(o=i.nodeValue!==n)&&(e=kt,e!==null))switch(e.tag){case 3:Es(i.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Es(i.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[hn]=t,t.stateNode=i}return Ye(t),null;case 13:if(ue(ge),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(he&&bt!==null&&t.mode&1&&!(t.flags&128))i0(),Tr(),t.flags|=98560,o=!1;else if(o=Is(t),i!==null&&i.dehydrated!==null){if(e===null){if(!o)throw Error($(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error($(317));o[hn]=t}else Tr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ye(t),o=!1}else qt!==null&&(Zu(qt),qt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,t.mode&1&&(e===null||ge.current&1?Me===0&&(Me=3):yf())),t.updateQueue!==null&&(t.flags|=4),Ye(t),null);case 4:return Mr(),Hu(e,t),e===null&&jo(t.stateNode.containerInfo),Ye(t),null;case 10:return Jd(t.type._context),Ye(t),null;case 17:return ft(t.type)&&Oa(),Ye(t),null;case 19:if(ue(ge),o=t.memoizedState,o===null)return Ye(t),null;if(i=(t.flags&128)!==0,s=o.rendering,s===null)if(i)io(o,!1);else{if(Me!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=La(e),s!==null){for(t.flags|=128,io(o,!1),i=s.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=n,n=t.child;n!==null;)o=n,e=i,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return se(ge,ge.current&1|2),t.child}e=e.sibling}o.tail!==null&&Se()>$r&&(t.flags|=128,i=!0,io(o,!1),t.lanes=4194304)}else{if(!i)if(e=La(s),e!==null){if(t.flags|=128,i=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),io(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!he)return Ye(t),null}else 2*Se()-o.renderingStartTime>$r&&n!==1073741824&&(t.flags|=128,i=!0,io(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Se(),t.sibling=null,n=ge.current,se(ge,i?n&1|2:n&1),t):(Ye(t),null);case 22:case 23:return gf(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&t.mode&1?vt&1073741824&&(Ye(t),t.subtreeFlags&6&&(t.flags|=8192)):Ye(t),null;case 24:return null;case 25:return null}throw Error($(156,t.tag))}function px(e,t){switch(Qd(t),t.tag){case 1:return ft(t.type)&&Oa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Mr(),ue(dt),ue(Ke),of(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return rf(t),null;case 13:if(ue(ge),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error($(340));Tr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ue(ge),null;case 4:return Mr(),null;case 10:return Jd(t.type._context),null;case 22:case 23:return gf(),null;case 24:return null;default:return null}}var Ms=!1,qe=!1,mx=typeof WeakSet=="function"?WeakSet:Set,F=null;function cr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){be(e,t,i)}else n.current=null}function Vu(e,t,n){try{n()}catch(i){be(e,t,i)}}var np=!1;function gx(e,t){if(Iu=Pa,e=Hg(),Xd(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,c=0,u=0,h=e,f=null;t:for(;;){for(var y;h!==n||r!==0&&h.nodeType!==3||(a=s+r),h!==o||i!==0&&h.nodeType!==3||(l=s+i),h.nodeType===3&&(s+=h.nodeValue.length),(y=h.firstChild)!==null;)f=h,h=y;for(;;){if(h===e)break t;if(f===n&&++c===r&&(a=s),f===o&&++u===i&&(l=s),(y=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Tu={focusedElem:e,selectionRange:n},Pa=!1,F=t;F!==null;)if(t=F,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,F=e;else for(;F!==null;){t=F;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var m=v.memoizedProps,C=v.memoizedState,w=t.stateNode,g=w.getSnapshotBeforeUpdate(t.elementType===t.type?m:Vt(t.type,m),C);w.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var d=t.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error($(163))}}catch(p){be(t,t.return,p)}if(e=t.sibling,e!==null){e.return=t.return,F=e;break}F=t.return}return v=np,np=!1,v}function Co(e,t,n){var i=t.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&e)===e){var o=r.destroy;r.destroy=void 0,o!==void 0&&Vu(t,n,o)}r=r.next}while(r!==i)}}function ll(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var i=n.create;n.destroy=i()}n=n.next}while(n!==t)}}function Yu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function N0(e){var t=e.alternate;t!==null&&(e.alternate=null,N0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[hn],delete t[No],delete t[Du],delete t[Zw],delete t[Jw])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function B0(e){return e.tag===5||e.tag===3||e.tag===4}function ip(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||B0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xu(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ta));else if(i!==4&&(e=e.child,e!==null))for(Xu(e,t,n),e=e.sibling;e!==null;)Xu(e,t,n),e=e.sibling}function qu(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(qu(e,t,n),e=e.sibling;e!==null;)qu(e,t,n),e=e.sibling}var je=null,Xt=!1;function Ln(e,t,n){for(n=n.child;n!==null;)U0(e,t,n),n=n.sibling}function U0(e,t,n){if(pn&&typeof pn.onCommitFiberUnmount=="function")try{pn.onCommitFiberUnmount(el,n)}catch{}switch(n.tag){case 5:qe||cr(n,t);case 6:var i=je,r=Xt;je=null,Ln(e,t,n),je=i,Xt=r,je!==null&&(Xt?(e=je,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):je.removeChild(n.stateNode));break;case 18:je!==null&&(Xt?(e=je,n=n.stateNode,e.nodeType===8?Pc(e.parentNode,n):e.nodeType===1&&Pc(e,n),Ro(e)):Pc(je,n.stateNode));break;case 4:i=je,r=Xt,je=n.stateNode.containerInfo,Xt=!0,Ln(e,t,n),je=i,Xt=r;break;case 0:case 11:case 14:case 15:if(!qe&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Vu(n,t,s),r=r.next}while(r!==i)}Ln(e,t,n);break;case 1:if(!qe&&(cr(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){be(n,t,a)}Ln(e,t,n);break;case 21:Ln(e,t,n);break;case 22:n.mode&1?(qe=(i=qe)||n.memoizedState!==null,Ln(e,t,n),qe=i):Ln(e,t,n);break;default:Ln(e,t,n)}}function rp(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new mx),t.forEach(function(i){var r=Cx.bind(null,e,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Ht(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:je=a.stateNode,Xt=!1;break e;case 3:je=a.stateNode.containerInfo,Xt=!0;break e;case 4:je=a.stateNode.containerInfo,Xt=!0;break e}a=a.return}if(je===null)throw Error($(160));U0(o,s,r),je=null,Xt=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){be(r,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)W0(t,e),t=t.sibling}function W0(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ht(t,e),sn(e),i&4){try{Co(3,e,e.return),ll(3,e)}catch(m){be(e,e.return,m)}try{Co(5,e,e.return)}catch(m){be(e,e.return,m)}}break;case 1:Ht(t,e),sn(e),i&512&&n!==null&&cr(n,n.return);break;case 5:if(Ht(t,e),sn(e),i&512&&n!==null&&cr(n,n.return),e.flags&32){var r=e.stateNode;try{Mo(r,"")}catch(m){be(e,e.return,m)}}if(i&4&&(r=e.stateNode,r!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&dg(r,o),vu(a,s);var c=vu(a,o);for(s=0;s<l.length;s+=2){var u=l[s],h=l[s+1];u==="style"?gg(r,h):u==="dangerouslySetInnerHTML"?pg(r,h):u==="children"?Mo(r,h):Ad(r,u,h,c)}switch(a){case"input":hu(r,o);break;case"textarea":fg(r,o);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?mr(r,!!o.multiple,y,!1):f!==!!o.multiple&&(o.defaultValue!=null?mr(r,!!o.multiple,o.defaultValue,!0):mr(r,!!o.multiple,o.multiple?[]:"",!1))}r[No]=o}catch(m){be(e,e.return,m)}}break;case 6:if(Ht(t,e),sn(e),i&4){if(e.stateNode===null)throw Error($(162));r=e.stateNode,o=e.memoizedProps;try{r.nodeValue=o}catch(m){be(e,e.return,m)}}break;case 3:if(Ht(t,e),sn(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ro(t.containerInfo)}catch(m){be(e,e.return,m)}break;case 4:Ht(t,e),sn(e);break;case 13:Ht(t,e),sn(e),r=e.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(pf=Se())),i&4&&rp(e);break;case 22:if(u=n!==null&&n.memoizedState!==null,e.mode&1?(qe=(c=qe)||u,Ht(t,e),qe=c):Ht(t,e),sn(e),i&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!u&&e.mode&1)for(F=e,u=e.child;u!==null;){for(h=F=u;F!==null;){switch(f=F,y=f.child,f.tag){case 0:case 11:case 14:case 15:Co(4,f,f.return);break;case 1:cr(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){i=f,n=f.return;try{t=i,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(m){be(i,n,m)}}break;case 5:cr(f,f.return);break;case 22:if(f.memoizedState!==null){sp(h);continue}}y!==null?(y.return=f,F=y):sp(h)}u=u.sibling}e:for(u=null,h=e;;){if(h.tag===5){if(u===null){u=h;try{r=h.stateNode,c?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=h.stateNode,l=h.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=mg("display",s))}catch(m){be(e,e.return,m)}}}else if(h.tag===6){if(u===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(m){be(e,e.return,m)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ht(t,e),sn(e),i&4&&rp(e);break;case 21:break;default:Ht(t,e),sn(e)}}function sn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(B0(n)){var i=n;break e}n=n.return}throw Error($(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Mo(r,""),i.flags&=-33);var o=ip(e);qu(e,o,r);break;case 3:case 4:var s=i.stateNode.containerInfo,a=ip(e);Xu(e,a,s);break;default:throw Error($(161))}}catch(l){be(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yx(e,t,n){F=e,H0(e)}function H0(e,t,n){for(var i=(e.mode&1)!==0;F!==null;){var r=F,o=r.child;if(r.tag===22&&i){var s=r.memoizedState!==null||Ms;if(!s){var a=r.alternate,l=a!==null&&a.memoizedState!==null||qe;a=Ms;var c=qe;if(Ms=s,(qe=l)&&!c)for(F=r;F!==null;)s=F,l=s.child,s.tag===22&&s.memoizedState!==null?ap(r):l!==null?(l.return=s,F=l):ap(r);for(;o!==null;)F=o,H0(o),o=o.sibling;F=r,Ms=a,qe=c}op(e)}else r.subtreeFlags&8772&&o!==null?(o.return=r,F=o):op(e)}}function op(e){for(;F!==null;){var t=F;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:qe||ll(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!qe)if(n===null)i.componentDidMount();else{var r=t.elementType===t.type?n.memoizedProps:Vt(t.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Wh(t,o,i);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Wh(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var h=u.dehydrated;h!==null&&Ro(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error($(163))}qe||t.flags&512&&Yu(t)}catch(f){be(t,t.return,f)}}if(t===e){F=null;break}if(n=t.sibling,n!==null){n.return=t.return,F=n;break}F=t.return}}function sp(e){for(;F!==null;){var t=F;if(t===e){F=null;break}var n=t.sibling;if(n!==null){n.return=t.return,F=n;break}F=t.return}}function ap(e){for(;F!==null;){var t=F;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ll(4,t)}catch(l){be(t,n,l)}break;case 1:var i=t.stateNode;if(typeof i.componentDidMount=="function"){var r=t.return;try{i.componentDidMount()}catch(l){be(t,r,l)}}var o=t.return;try{Yu(t)}catch(l){be(t,o,l)}break;case 5:var s=t.return;try{Yu(t)}catch(l){be(t,s,l)}}}catch(l){be(t,t.return,l)}if(t===e){F=null;break}var a=t.sibling;if(a!==null){a.return=t.return,F=a;break}F=t.return}}var vx=Math.ceil,Na=An.ReactCurrentDispatcher,ff=An.ReactCurrentOwner,zt=An.ReactCurrentBatchConfig,K=0,Re=null,Ie=null,Ue=0,vt=0,ur=li(0),Me=0,Yo=null,Ai=0,cl=0,hf=0,Po=null,ct=null,pf=0,$r=1/0,bn=null,Ba=!1,Qu=null,Zn=null,Ds=!1,Vn=null,Ua=0,Eo=0,Gu=null,la=-1,ca=0;function it(){return K&6?Se():la!==-1?la:la=Se()}function Jn(e){return e.mode&1?K&2&&Ue!==0?Ue&-Ue:tx.transition!==null?(ca===0&&(ca=Ig()),ca):(e=ie,e!==0||(e=window.event,e=e===void 0?16:Rg(e.type)),e):1}function Jt(e,t,n,i){if(50<Eo)throw Eo=0,Gu=null,Error($(185));os(e,n,i),(!(K&2)||e!==Re)&&(e===Re&&(!(K&2)&&(cl|=n),Me===4&&Un(e,Ue)),ht(e,i),n===1&&K===0&&!(t.mode&1)&&($r=Se()+500,ol&&ci()))}function ht(e,t){var n=e.callbackNode;tw(e,t);var i=Ca(e,e===Re?Ue:0);if(i===0)n!==null&&gh(n),e.callbackNode=null,e.callbackPriority=0;else if(t=i&-i,e.callbackPriority!==t){if(n!=null&&gh(n),t===1)e.tag===0?ex(lp.bind(null,e)):e0(lp.bind(null,e)),Gw(function(){!(K&6)&&ci()}),n=null;else{switch(Tg(i)){case 1:n=Fd;break;case 4:n=Pg;break;case 16:n=_a;break;case 536870912:n=Eg;break;default:n=_a}n=Z0(n,V0.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function V0(e,t){if(la=-1,ca=0,K&6)throw Error($(327));var n=e.callbackNode;if(xr()&&e.callbackNode!==n)return null;var i=Ca(e,e===Re?Ue:0);if(i===0)return null;if(i&30||i&e.expiredLanes||t)t=Wa(e,i);else{t=i;var r=K;K|=2;var o=X0();(Re!==e||Ue!==t)&&(bn=null,$r=Se()+500,Pi(e,t));do try{bx();break}catch(a){Y0(e,a)}while(!0);Zd(),Na.current=o,K=r,Ie!==null?t=0:(Re=null,Ue=0,t=Me)}if(t!==0){if(t===2&&(r=ku(e),r!==0&&(i=r,t=Ku(e,r))),t===1)throw n=Yo,Pi(e,0),Un(e,i),ht(e,Se()),n;if(t===6)Un(e,i);else{if(r=e.current.alternate,!(i&30)&&!wx(r)&&(t=Wa(e,i),t===2&&(o=ku(e),o!==0&&(i=o,t=Ku(e,o))),t===1))throw n=Yo,Pi(e,0),Un(e,i),ht(e,Se()),n;switch(e.finishedWork=r,e.finishedLanes=i,t){case 0:case 1:throw Error($(345));case 2:gi(e,ct,bn);break;case 3:if(Un(e,i),(i&130023424)===i&&(t=pf+500-Se(),10<t)){if(Ca(e,0)!==0)break;if(r=e.suspendedLanes,(r&i)!==i){it(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=Mu(gi.bind(null,e,ct,bn),t);break}gi(e,ct,bn);break;case 4:if(Un(e,i),(i&4194240)===i)break;for(t=e.eventTimes,r=-1;0<i;){var s=31-Zt(i);o=1<<s,s=t[s],s>r&&(r=s),i&=~o}if(i=r,i=Se()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*vx(i/1960))-i,10<i){e.timeoutHandle=Mu(gi.bind(null,e,ct,bn),i);break}gi(e,ct,bn);break;case 5:gi(e,ct,bn);break;default:throw Error($(329))}}}return ht(e,Se()),e.callbackNode===n?V0.bind(null,e):null}function Ku(e,t){var n=Po;return e.current.memoizedState.isDehydrated&&(Pi(e,t).flags|=256),e=Wa(e,t),e!==2&&(t=ct,ct=n,t!==null&&Zu(t)),e}function Zu(e){ct===null?ct=e:ct.push.apply(ct,e)}function wx(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],o=r.getSnapshot;r=r.value;try{if(!rn(o(),r))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Un(e,t){for(t&=~hf,t&=~cl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Zt(t),i=1<<n;e[n]=-1,t&=~i}}function lp(e){if(K&6)throw Error($(327));xr();var t=Ca(e,0);if(!(t&1))return ht(e,Se()),null;var n=Wa(e,t);if(e.tag!==0&&n===2){var i=ku(e);i!==0&&(t=i,n=Ku(e,i))}if(n===1)throw n=Yo,Pi(e,0),Un(e,t),ht(e,Se()),n;if(n===6)throw Error($(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,gi(e,ct,bn),ht(e,Se()),null}function mf(e,t){var n=K;K|=1;try{return e(t)}finally{K=n,K===0&&($r=Se()+500,ol&&ci())}}function Ri(e){Vn!==null&&Vn.tag===0&&!(K&6)&&xr();var t=K;K|=1;var n=zt.transition,i=ie;try{if(zt.transition=null,ie=1,e)return e()}finally{ie=i,zt.transition=n,K=t,!(K&6)&&ci()}}function gf(){vt=ur.current,ue(ur)}function Pi(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Qw(n)),Ie!==null)for(n=Ie.return;n!==null;){var i=n;switch(Qd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Oa();break;case 3:Mr(),ue(dt),ue(Ke),of();break;case 5:rf(i);break;case 4:Mr();break;case 13:ue(ge);break;case 19:ue(ge);break;case 10:Jd(i.type._context);break;case 22:case 23:gf()}n=n.return}if(Re=e,Ie=e=ei(e.current,null),Ue=vt=t,Me=0,Yo=null,hf=cl=Ai=0,ct=Po=null,wi!==null){for(t=0;t<wi.length;t++)if(n=wi[t],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,o=n.pending;if(o!==null){var s=o.next;o.next=r,i.next=s}n.pending=i}wi=null}return e}function Y0(e,t){do{var n=Ie;try{if(Zd(),oa.current=Fa,ja){for(var i=ve.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}ja=!1}if($i=0,De=Oe=ve=null,_o=!1,Wo=0,ff.current=null,n===null||n.return===null){Me=1,Yo=t,Ie=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=Ue,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,h=u.tag;if(!(u.mode&1)&&(h===0||h===11||h===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var y=Qh(s);if(y!==null){y.flags&=-257,Gh(y,s,a,o,t),y.mode&1&&qh(o,c,t),t=y,l=c;var v=t.updateQueue;if(v===null){var m=new Set;m.add(l),t.updateQueue=m}else v.add(l);break e}else{if(!(t&1)){qh(o,c,t),yf();break e}l=Error($(426))}}else if(he&&a.mode&1){var C=Qh(s);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Gh(C,s,a,o,t),Gd(Dr(l,a));break e}}o=l=Dr(l,a),Me!==4&&(Me=2),Po===null?Po=[o]:Po.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var w=T0(o,l,t);Uh(o,w);break e;case 1:a=l;var g=o.type,d=o.stateNode;if(!(o.flags&128)&&(typeof g.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Zn===null||!Zn.has(d)))){o.flags|=65536,t&=-t,o.lanes|=t;var p=O0(o,a,t);Uh(o,p);break e}}o=o.return}while(o!==null)}Q0(n)}catch(x){t=x,Ie===n&&n!==null&&(Ie=n=n.return);continue}break}while(!0)}function X0(){var e=Na.current;return Na.current=Fa,e===null?Fa:e}function yf(){(Me===0||Me===3||Me===2)&&(Me=4),Re===null||!(Ai&268435455)&&!(cl&268435455)||Un(Re,Ue)}function Wa(e,t){var n=K;K|=2;var i=X0();(Re!==e||Ue!==t)&&(bn=null,Pi(e,t));do try{xx();break}catch(r){Y0(e,r)}while(!0);if(Zd(),K=n,Na.current=i,Ie!==null)throw Error($(261));return Re=null,Ue=0,Me}function xx(){for(;Ie!==null;)q0(Ie)}function bx(){for(;Ie!==null&&!Y1();)q0(Ie)}function q0(e){var t=K0(e.alternate,e,vt);e.memoizedProps=e.pendingProps,t===null?Q0(e):Ie=t,ff.current=null}function Q0(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=px(n,t),n!==null){n.flags&=32767,Ie=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Me=6,Ie=null;return}}else if(n=hx(n,t,vt),n!==null){Ie=n;return}if(t=t.sibling,t!==null){Ie=t;return}Ie=t=e}while(t!==null);Me===0&&(Me=5)}function gi(e,t,n){var i=ie,r=zt.transition;try{zt.transition=null,ie=1,Sx(e,t,n,i)}finally{zt.transition=r,ie=i}return null}function Sx(e,t,n,i){do xr();while(Vn!==null);if(K&6)throw Error($(327));n=e.finishedWork;var r=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error($(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(nw(e,o),e===Re&&(Ie=Re=null,Ue=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ds||(Ds=!0,Z0(_a,function(){return xr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=zt.transition,zt.transition=null;var s=ie;ie=1;var a=K;K|=4,ff.current=null,gx(e,n),W0(n,e),Uw(Tu),Pa=!!Iu,Tu=Iu=null,e.current=n,yx(n),X1(),K=a,ie=s,zt.transition=o}else e.current=n;if(Ds&&(Ds=!1,Vn=e,Ua=r),o=e.pendingLanes,o===0&&(Zn=null),G1(n.stateNode),ht(e,Se()),t!==null)for(i=e.onRecoverableError,n=0;n<t.length;n++)r=t[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ba)throw Ba=!1,e=Qu,Qu=null,e;return Ua&1&&e.tag!==0&&xr(),o=e.pendingLanes,o&1?e===Gu?Eo++:(Eo=0,Gu=e):Eo=0,ci(),null}function xr(){if(Vn!==null){var e=Tg(Ua),t=zt.transition,n=ie;try{if(zt.transition=null,ie=16>e?16:e,Vn===null)var i=!1;else{if(e=Vn,Vn=null,Ua=0,K&6)throw Error($(331));var r=K;for(K|=4,F=e.current;F!==null;){var o=F,s=o.child;if(F.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(F=c;F!==null;){var u=F;switch(u.tag){case 0:case 11:case 15:Co(8,u,o)}var h=u.child;if(h!==null)h.return=u,F=h;else for(;F!==null;){u=F;var f=u.sibling,y=u.return;if(N0(u),u===c){F=null;break}if(f!==null){f.return=y,F=f;break}F=y}}}var v=o.alternate;if(v!==null){var m=v.child;if(m!==null){v.child=null;do{var C=m.sibling;m.sibling=null,m=C}while(m!==null)}}F=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,F=s;else e:for(;F!==null;){if(o=F,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Co(9,o,o.return)}var w=o.sibling;if(w!==null){w.return=o.return,F=w;break e}F=o.return}}var g=e.current;for(F=g;F!==null;){s=F;var d=s.child;if(s.subtreeFlags&2064&&d!==null)d.return=s,F=d;else e:for(s=g;F!==null;){if(a=F,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ll(9,a)}}catch(x){be(a,a.return,x)}if(a===s){F=null;break e}var p=a.sibling;if(p!==null){p.return=a.return,F=p;break e}F=a.return}}if(K=r,ci(),pn&&typeof pn.onPostCommitFiberRoot=="function")try{pn.onPostCommitFiberRoot(el,e)}catch{}i=!0}return i}finally{ie=n,zt.transition=t}}return!1}function cp(e,t,n){t=Dr(n,t),t=T0(e,t,1),e=Kn(e,t,1),t=it(),e!==null&&(os(e,1,t),ht(e,t))}function be(e,t,n){if(e.tag===3)cp(e,e,n);else for(;t!==null;){if(t.tag===3){cp(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Zn===null||!Zn.has(i))){e=Dr(n,e),e=O0(t,e,1),t=Kn(t,e,1),e=it(),t!==null&&(os(t,1,e),ht(t,e));break}}t=t.return}}function kx(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),t=it(),e.pingedLanes|=e.suspendedLanes&n,Re===e&&(Ue&n)===n&&(Me===4||Me===3&&(Ue&130023424)===Ue&&500>Se()-pf?Pi(e,0):hf|=n),ht(e,t)}function G0(e,t){t===0&&(e.mode&1?(t=Ss,Ss<<=1,!(Ss&130023424)&&(Ss=4194304)):t=1);var n=it();e=Dn(e,t),e!==null&&(os(e,t,n),ht(e,n))}function _x(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),G0(e,n)}function Cx(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=e.stateNode;break;default:throw Error($(314))}i!==null&&i.delete(t),G0(e,n)}var K0;K0=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||dt.current)ut=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ut=!1,fx(e,t,n);ut=!!(e.flags&131072)}else ut=!1,he&&t.flags&1048576&&t0(t,$a,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;aa(e,t),e=t.pendingProps;var r=Ir(t,Ke.current);wr(t,n),r=af(null,t,i,e,r,n);var o=lf();return t.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ft(i)?(o=!0,Ma(t)):o=!1,t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,tf(t),r.updater=al,t.stateNode=r,r._reactInternals=t,ju(t,i,e,n),t=Bu(null,t,i,!0,o,n)):(t.tag=0,he&&o&&qd(t),tt(null,t,r,n),t=t.child),t;case 16:i=t.elementType;e:{switch(aa(e,t),e=t.pendingProps,r=i._init,i=r(i._payload),t.type=i,r=t.tag=Ex(i),e=Vt(i,e),r){case 0:t=Nu(null,t,i,e,n);break e;case 1:t=Jh(null,t,i,e,n);break e;case 11:t=Kh(null,t,i,e,n);break e;case 14:t=Zh(null,t,i,Vt(i.type,e),n);break e}throw Error($(306,i,""))}return t;case 0:return i=t.type,r=t.pendingProps,r=t.elementType===i?r:Vt(i,r),Nu(e,t,i,r,n);case 1:return i=t.type,r=t.pendingProps,r=t.elementType===i?r:Vt(i,r),Jh(e,t,i,r,n);case 3:e:{if(A0(t),e===null)throw Error($(387));i=t.pendingProps,o=t.memoizedState,r=o.element,a0(e,t),za(t,i,null,n);var s=t.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){r=Dr(Error($(423)),t),t=ep(e,t,i,n,r);break e}else if(i!==r){r=Dr(Error($(424)),t),t=ep(e,t,i,n,r);break e}else for(bt=Gn(t.stateNode.containerInfo.firstChild),kt=t,he=!0,qt=null,n=o0(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Tr(),i===r){t=$n(e,t,n);break e}tt(e,t,i,n)}t=t.child}return t;case 5:return l0(t),e===null&&Ru(t),i=t.type,r=t.pendingProps,o=e!==null?e.memoizedProps:null,s=r.children,Ou(i,r)?s=null:o!==null&&Ou(i,o)&&(t.flags|=32),$0(e,t),tt(e,t,s,n),t.child;case 6:return e===null&&Ru(t),null;case 13:return R0(e,t,n);case 4:return nf(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Or(t,null,i,n):tt(e,t,i,n),t.child;case 11:return i=t.type,r=t.pendingProps,r=t.elementType===i?r:Vt(i,r),Kh(e,t,i,r,n);case 7:return tt(e,t,t.pendingProps,n),t.child;case 8:return tt(e,t,t.pendingProps.children,n),t.child;case 12:return tt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(i=t.type._context,r=t.pendingProps,o=t.memoizedProps,s=r.value,se(Aa,i._currentValue),i._currentValue=s,o!==null)if(rn(o.value,s)){if(o.children===r.children&&!dt.current){t=$n(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=In(-1,n&-n),l.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),zu(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error($(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),zu(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}tt(e,t,r.children,n),t=t.child}return t;case 9:return r=t.type,i=t.pendingProps.children,wr(t,n),r=Lt(r),i=i(r),t.flags|=1,tt(e,t,i,n),t.child;case 14:return i=t.type,r=Vt(i,t.pendingProps),r=Vt(i.type,r),Zh(e,t,i,r,n);case 15:return M0(e,t,t.type,t.pendingProps,n);case 17:return i=t.type,r=t.pendingProps,r=t.elementType===i?r:Vt(i,r),aa(e,t),t.tag=1,ft(i)?(e=!0,Ma(t)):e=!1,wr(t,n),I0(t,i,r),ju(t,i,r,n),Bu(null,t,i,!0,e,n);case 19:return z0(e,t,n);case 22:return D0(e,t,n)}throw Error($(156,t.tag))};function Z0(e,t){return Cg(e,t)}function Px(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function At(e,t,n,i){return new Px(e,t,n,i)}function vf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ex(e){if(typeof e=="function")return vf(e)?1:0;if(e!=null){if(e=e.$$typeof,e===zd)return 11;if(e===Ld)return 14}return 2}function ei(e,t){var n=e.alternate;return n===null?(n=At(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ua(e,t,n,i,r,o){var s=2;if(i=e,typeof e=="function")vf(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case er:return Ei(n.children,r,o,t);case Rd:s=8,r|=8;break;case lu:return e=At(12,n,t,r|2),e.elementType=lu,e.lanes=o,e;case cu:return e=At(13,n,t,r),e.elementType=cu,e.lanes=o,e;case uu:return e=At(19,n,t,r),e.elementType=uu,e.lanes=o,e;case lg:return ul(n,r,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case sg:s=10;break e;case ag:s=9;break e;case zd:s=11;break e;case Ld:s=14;break e;case Fn:s=16,i=null;break e}throw Error($(130,e==null?e:typeof e,""))}return t=At(s,n,t,r),t.elementType=e,t.type=i,t.lanes=o,t}function Ei(e,t,n,i){return e=At(7,e,i,t),e.lanes=n,e}function ul(e,t,n,i){return e=At(22,e,i,t),e.elementType=lg,e.lanes=n,e.stateNode={isHidden:!1},e}function Ac(e,t,n){return e=At(6,e,null,t),e.lanes=n,e}function Rc(e,t,n){return t=At(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ix(e,t,n,i,r){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mc(0),this.expirationTimes=mc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function wf(e,t,n,i,r,o,s,a,l){return e=new Ix(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=At(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},tf(o),e}function Tx(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ji,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}function J0(e){if(!e)return ri;e=e._reactInternals;e:{if(Wi(e)!==e||e.tag!==1)throw Error($(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ft(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error($(171))}if(e.tag===1){var n=e.type;if(ft(n))return Jg(e,n,t)}return t}function ey(e,t,n,i,r,o,s,a,l){return e=wf(n,i,!0,e,r,o,s,a,l),e.context=J0(null),n=e.current,i=it(),r=Jn(n),o=In(i,r),o.callback=t??null,Kn(n,o,r),e.current.lanes=r,os(e,r,i),ht(e,i),e}function dl(e,t,n,i){var r=t.current,o=it(),s=Jn(r);return n=J0(n),t.context===null?t.context=n:t.pendingContext=n,t=In(o,s),t.payload={element:e},i=i===void 0?null:i,i!==null&&(t.callback=i),e=Kn(r,t,s),e!==null&&(Jt(e,r,s,o),ra(e,r,s)),s}function Ha(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function up(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function xf(e,t){up(e,t),(e=e.alternate)&&up(e,t)}function Ox(){return null}var ty=typeof reportError=="function"?reportError:function(e){console.error(e)};function bf(e){this._internalRoot=e}fl.prototype.render=bf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error($(409));dl(e,t,null,null)};fl.prototype.unmount=bf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ri(function(){dl(null,e,null,null)}),t[Mn]=null}};function fl(e){this._internalRoot=e}fl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Dg();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Bn.length&&t!==0&&t<Bn[n].priority;n++);Bn.splice(n,0,e),n===0&&Ag(e)}};function Sf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function hl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function dp(){}function Mx(e,t,n,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var c=Ha(s);o.call(c)}}var s=ey(t,i,e,0,null,!1,!1,"",dp);return e._reactRootContainer=s,e[Mn]=s.current,jo(e.nodeType===8?e.parentNode:e),Ri(),s}for(;r=e.lastChild;)e.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Ha(l);a.call(c)}}var l=wf(e,0,!1,null,null,!1,!1,"",dp);return e._reactRootContainer=l,e[Mn]=l.current,jo(e.nodeType===8?e.parentNode:e),Ri(function(){dl(t,l,n,i)}),l}function pl(e,t,n,i,r){var o=n._reactRootContainer;if(o){var s=o;if(typeof r=="function"){var a=r;r=function(){var l=Ha(s);a.call(l)}}dl(t,s,e,r)}else s=Mx(n,t,e,r,i);return Ha(s)}Og=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=go(t.pendingLanes);n!==0&&(Nd(t,n|1),ht(t,Se()),!(K&6)&&($r=Se()+500,ci()))}break;case 13:Ri(function(){var i=Dn(e,1);if(i!==null){var r=it();Jt(i,e,1,r)}}),xf(e,1)}};Bd=function(e){if(e.tag===13){var t=Dn(e,134217728);if(t!==null){var n=it();Jt(t,e,134217728,n)}xf(e,134217728)}};Mg=function(e){if(e.tag===13){var t=Jn(e),n=Dn(e,t);if(n!==null){var i=it();Jt(n,e,t,i)}xf(e,t)}};Dg=function(){return ie};$g=function(e,t){var n=ie;try{return ie=e,t()}finally{ie=n}};xu=function(e,t,n){switch(t){case"input":if(hu(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var r=rl(i);if(!r)throw Error($(90));ug(i),hu(i,r)}}}break;case"textarea":fg(e,n);break;case"select":t=n.value,t!=null&&mr(e,!!n.multiple,t,!1)}};wg=mf;xg=Ri;var Dx={usingClientEntryPoint:!1,Events:[as,rr,rl,yg,vg,mf]},ro={findFiberByHostInstance:vi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$x={bundleType:ro.bundleType,version:ro.version,rendererPackageName:ro.rendererPackageName,rendererConfig:ro.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:An.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=kg(e),e===null?null:e.stateNode},findFiberByHostInstance:ro.findFiberByHostInstance||Ox,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $s=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$s.isDisabled&&$s.supportsFiber)try{el=$s.inject($x),pn=$s}catch{}}Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dx;Et.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Sf(t))throw Error($(200));return Tx(e,t,null,n)};Et.createRoot=function(e,t){if(!Sf(e))throw Error($(299));var n=!1,i="",r=ty;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=wf(e,1,!1,null,null,n,!1,i,r),e[Mn]=t.current,jo(e.nodeType===8?e.parentNode:e),new bf(t)};Et.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error($(188)):(e=Object.keys(e).join(","),Error($(268,e)));return e=kg(t),e=e===null?null:e.stateNode,e};Et.flushSync=function(e){return Ri(e)};Et.hydrate=function(e,t,n){if(!hl(t))throw Error($(200));return pl(null,e,t,!0,n)};Et.hydrateRoot=function(e,t,n){if(!Sf(e))throw Error($(405));var i=n!=null&&n.hydratedSources||null,r=!1,o="",s=ty;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=ey(t,null,e,1,n??null,r,!1,o,s),e[Mn]=t.current,jo(e),i)for(e=0;e<i.length;e++)n=i[e],r=n._getVersion,r=r(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,r]:t.mutableSourceEagerHydrationData.push(n,r);return new fl(t)};Et.render=function(e,t,n){if(!hl(t))throw Error($(200));return pl(null,e,t,!1,n)};Et.unmountComponentAtNode=function(e){if(!hl(e))throw Error($(40));return e._reactRootContainer?(Ri(function(){pl(null,null,e,!1,function(){e._reactRootContainer=null,e[Mn]=null})}),!0):!1};Et.unstable_batchedUpdates=mf;Et.unstable_renderSubtreeIntoContainer=function(e,t,n,i){if(!hl(n))throw Error($(200));if(e==null||e._reactInternals===void 0)throw Error($(38));return pl(e,t,n,!1,i)};Et.version="18.3.1-next-f1338f8080-20240426";function ny(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ny)}catch(e){console.error(e)}}ny(),ng.exports=Et;var Ax=ng.exports,fp=Ax;su.createRoot=fp.createRoot,su.hydrateRoot=fp.hydrateRoot;var Ae=function(){return Ae=Object.assign||function(t){for(var n,i=1,r=arguments.length;i<r;i++){n=arguments[i];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Ae.apply(this,arguments)};function Xo(e,t,n){if(n||arguments.length===2)for(var i=0,r=t.length,o;i<r;i++)(o||!(i in t))&&(o||(o=Array.prototype.slice.call(t,0,i)),o[i]=t[i]);return e.concat(o||Array.prototype.slice.call(t))}var ce="-ms-",Io="-moz-",ne="-webkit-",iy="comm",ml="rule",kf="decl",Rx="@import",ry="@keyframes",zx="@layer",oy=Math.abs,_f=String.fromCharCode,Ju=Object.assign;function Lx(e,t){return $e(e,0)^45?(((t<<2^$e(e,0))<<2^$e(e,1))<<2^$e(e,2))<<2^$e(e,3):0}function sy(e){return e.trim()}function Sn(e,t){return(e=t.exec(e))?e[0]:e}function Y(e,t,n){return e.replace(t,n)}function da(e,t,n){return e.indexOf(t,n)}function $e(e,t){return e.charCodeAt(t)|0}function Ar(e,t,n){return e.slice(t,n)}function un(e){return e.length}function ay(e){return e.length}function vo(e,t){return t.push(e),e}function jx(e,t){return e.map(t).join("")}function hp(e,t){return e.filter(function(n){return!Sn(n,t)})}var gl=1,Rr=1,ly=0,Ft=0,Pe=0,Xr="";function yl(e,t,n,i,r,o,s,a){return{value:e,root:t,parent:n,type:i,props:r,children:o,line:gl,column:Rr,length:s,return:"",siblings:a}}function jn(e,t){return Ju(yl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Xi(e){for(;e.root;)e=jn(e.root,{children:[e]});vo(e,e.siblings)}function Fx(){return Pe}function Nx(){return Pe=Ft>0?$e(Xr,--Ft):0,Rr--,Pe===10&&(Rr=1,gl--),Pe}function en(){return Pe=Ft<ly?$e(Xr,Ft++):0,Rr++,Pe===10&&(Rr=1,gl++),Pe}function Ii(){return $e(Xr,Ft)}function fa(){return Ft}function vl(e,t){return Ar(Xr,e,t)}function ed(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Bx(e){return gl=Rr=1,ly=un(Xr=e),Ft=0,[]}function Ux(e){return Xr="",e}function zc(e){return sy(vl(Ft-1,td(e===91?e+2:e===40?e+1:e)))}function Wx(e){for(;(Pe=Ii())&&Pe<33;)en();return ed(e)>2||ed(Pe)>3?"":" "}function Hx(e,t){for(;--t&&en()&&!(Pe<48||Pe>102||Pe>57&&Pe<65||Pe>70&&Pe<97););return vl(e,fa()+(t<6&&Ii()==32&&en()==32))}function td(e){for(;en();)switch(Pe){case e:return Ft;case 34:case 39:e!==34&&e!==39&&td(Pe);break;case 40:e===41&&td(e);break;case 92:en();break}return Ft}function Vx(e,t){for(;en()&&e+Pe!==57;)if(e+Pe===84&&Ii()===47)break;return"/*"+vl(t,Ft-1)+"*"+_f(e===47?e:en())}function Yx(e){for(;!ed(Ii());)en();return vl(e,Ft)}function Xx(e){return Ux(ha("",null,null,null,[""],e=Bx(e),0,[0],e))}function ha(e,t,n,i,r,o,s,a,l){for(var c=0,u=0,h=s,f=0,y=0,v=0,m=1,C=1,w=1,g=0,d="",p=r,x=o,b=i,k=d;C;)switch(v=g,g=en()){case 40:if(v!=108&&$e(k,h-1)==58){da(k+=Y(zc(g),"&","&\f"),"&\f",oy(c?a[c-1]:0))!=-1&&(w=-1);break}case 34:case 39:case 91:k+=zc(g);break;case 9:case 10:case 13:case 32:k+=Wx(v);break;case 92:k+=Hx(fa()-1,7);continue;case 47:switch(Ii()){case 42:case 47:vo(qx(Vx(en(),fa()),t,n,l),l);break;default:k+="/"}break;case 123*m:a[c++]=un(k)*w;case 125*m:case 59:case 0:switch(g){case 0:case 125:C=0;case 59+u:w==-1&&(k=Y(k,/\f/g,"")),y>0&&un(k)-h&&vo(y>32?mp(k+";",i,n,h-1,l):mp(Y(k," ","")+";",i,n,h-2,l),l);break;case 59:k+=";";default:if(vo(b=pp(k,t,n,c,u,r,a,d,p=[],x=[],h,o),o),g===123)if(u===0)ha(k,t,b,b,p,o,h,a,x);else switch(f===99&&$e(k,3)===110?100:f){case 100:case 108:case 109:case 115:ha(e,b,b,i&&vo(pp(e,b,b,0,0,r,a,d,r,p=[],h,x),x),r,x,h,a,i?p:x);break;default:ha(k,b,b,b,[""],x,0,a,x)}}c=u=y=0,m=w=1,d=k="",h=s;break;case 58:h=1+un(k),y=v;default:if(m<1){if(g==123)--m;else if(g==125&&m++==0&&Nx()==125)continue}switch(k+=_f(g),g*m){case 38:w=u>0?1:(k+="\f",-1);break;case 44:a[c++]=(un(k)-1)*w,w=1;break;case 64:Ii()===45&&(k+=zc(en())),f=Ii(),u=h=un(d=k+=Yx(fa())),g++;break;case 45:v===45&&un(k)==2&&(m=0)}}return o}function pp(e,t,n,i,r,o,s,a,l,c,u,h){for(var f=r-1,y=r===0?o:[""],v=ay(y),m=0,C=0,w=0;m<i;++m)for(var g=0,d=Ar(e,f+1,f=oy(C=s[m])),p=e;g<v;++g)(p=sy(C>0?y[g]+" "+d:Y(d,/&\f/g,y[g])))&&(l[w++]=p);return yl(e,t,n,r===0?ml:a,l,c,u,h)}function qx(e,t,n,i){return yl(e,t,n,iy,_f(Fx()),Ar(e,2,-2),0,i)}function mp(e,t,n,i,r){return yl(e,t,n,kf,Ar(e,0,i),Ar(e,i+1,-1),i,r)}function cy(e,t,n){switch(Lx(e,t)){case 5103:return ne+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ne+e+e;case 4789:return Io+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ne+e+Io+e+ce+e+e;case 5936:switch($e(e,t+11)){case 114:return ne+e+ce+Y(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ne+e+ce+Y(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ne+e+ce+Y(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ne+e+ce+e+e;case 6165:return ne+e+ce+"flex-"+e+e;case 5187:return ne+e+Y(e,/(\w+).+(:[^]+)/,ne+"box-$1$2"+ce+"flex-$1$2")+e;case 5443:return ne+e+ce+"flex-item-"+Y(e,/flex-|-self/g,"")+(Sn(e,/flex-|baseline/)?"":ce+"grid-row-"+Y(e,/flex-|-self/g,""))+e;case 4675:return ne+e+ce+"flex-line-pack"+Y(e,/align-content|flex-|-self/g,"")+e;case 5548:return ne+e+ce+Y(e,"shrink","negative")+e;case 5292:return ne+e+ce+Y(e,"basis","preferred-size")+e;case 6060:return ne+"box-"+Y(e,"-grow","")+ne+e+ce+Y(e,"grow","positive")+e;case 4554:return ne+Y(e,/([^-])(transform)/g,"$1"+ne+"$2")+e;case 6187:return Y(Y(Y(e,/(zoom-|grab)/,ne+"$1"),/(image-set)/,ne+"$1"),e,"")+e;case 5495:case 3959:return Y(e,/(image-set\([^]*)/,ne+"$1$`$1");case 4968:return Y(Y(e,/(.+:)(flex-)?(.*)/,ne+"box-pack:$3"+ce+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ne+e+e;case 4200:if(!Sn(e,/flex-|baseline/))return ce+"grid-column-align"+Ar(e,t)+e;break;case 2592:case 3360:return ce+Y(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(i,r){return t=r,Sn(i.props,/grid-\w+-end/)})?~da(e+(n=n[t].value),"span",0)?e:ce+Y(e,"-start","")+e+ce+"grid-row-span:"+(~da(n,"span",0)?Sn(n,/\d+/):+Sn(n,/\d+/)-+Sn(e,/\d+/))+";":ce+Y(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(i){return Sn(i.props,/grid-\w+-start/)})?e:ce+Y(Y(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Y(e,/(.+)-inline(.+)/,ne+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(un(e)-1-t>6)switch($e(e,t+1)){case 109:if($e(e,t+4)!==45)break;case 102:return Y(e,/(.+:)(.+)-([^]+)/,"$1"+ne+"$2-$3$1"+Io+($e(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~da(e,"stretch",0)?cy(Y(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return Y(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,r,o,s,a,l,c){return ce+r+":"+o+c+(s?ce+r+"-span:"+(a?l:+l-+o)+c:"")+e});case 4949:if($e(e,t+6)===121)return Y(e,":",":"+ne)+e;break;case 6444:switch($e(e,$e(e,14)===45?18:11)){case 120:return Y(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ne+($e(e,14)===45?"inline-":"")+"box$3$1"+ne+"$2$3$1"+ce+"$2box$3")+e;case 100:return Y(e,":",":"+ce)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Y(e,"scroll-","scroll-snap-")+e}return e}function Va(e,t){for(var n="",i=0;i<e.length;i++)n+=t(e[i],i,e,t)||"";return n}function Qx(e,t,n,i){switch(e.type){case zx:if(e.children.length)break;case Rx:case kf:return e.return=e.return||e.value;case iy:return"";case ry:return e.return=e.value+"{"+Va(e.children,i)+"}";case ml:if(!un(e.value=e.props.join(",")))return""}return un(n=Va(e.children,i))?e.return=e.value+"{"+n+"}":""}function Gx(e){var t=ay(e);return function(n,i,r,o){for(var s="",a=0;a<t;a++)s+=e[a](n,i,r,o)||"";return s}}function Kx(e){return function(t){t.root||(t=t.return)&&e(t)}}function Zx(e,t,n,i){if(e.length>-1&&!e.return)switch(e.type){case kf:e.return=cy(e.value,e.length,n);return;case ry:return Va([jn(e,{value:Y(e.value,"@","@"+ne)})],i);case ml:if(e.length)return jx(n=e.props,function(r){switch(Sn(r,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Xi(jn(e,{props:[Y(r,/:(read-\w+)/,":"+Io+"$1")]})),Xi(jn(e,{props:[r]})),Ju(e,{props:hp(n,i)});break;case"::placeholder":Xi(jn(e,{props:[Y(r,/:(plac\w+)/,":"+ne+"input-$1")]})),Xi(jn(e,{props:[Y(r,/:(plac\w+)/,":"+Io+"$1")]})),Xi(jn(e,{props:[Y(r,/:(plac\w+)/,ce+"input-$1")]})),Xi(jn(e,{props:[r]})),Ju(e,{props:hp(n,i)});break}return""})}}var Jx={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},gt={},zr=typeof process<"u"&&gt!==void 0&&(gt.REACT_APP_SC_ATTR||gt.SC_ATTR)||"data-styled",uy="active",dy="data-styled-version",wl="6.1.12",Cf=`/*!sc*/
`,Ya=typeof window<"u"&&"HTMLElement"in window,eb=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&gt!==void 0&&gt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&gt.REACT_APP_SC_DISABLE_SPEEDY!==""?gt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&gt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&gt!==void 0&&gt.SC_DISABLE_SPEEDY!==void 0&&gt.SC_DISABLE_SPEEDY!==""&&gt.SC_DISABLE_SPEEDY!=="false"&&gt.SC_DISABLE_SPEEDY),tb={},xl=Object.freeze([]),Lr=Object.freeze({});function fy(e,t,n){return n===void 0&&(n=Lr),e.theme!==n.theme&&e.theme||t||n.theme}var hy=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),nb=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ib=/(^-|-$)/g;function gp(e){return e.replace(nb,"-").replace(ib,"")}var rb=/(a)(d)/gi,As=52,yp=function(e){return String.fromCharCode(e+(e>25?39:97))};function nd(e){var t,n="";for(t=Math.abs(e);t>As;t=t/As|0)n=yp(t%As)+n;return(yp(t%As)+n).replace(rb,"$1-$2")}var Lc,py=5381,dr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},my=function(e){return dr(py,e)};function gy(e){return nd(my(e)>>>0)}function ob(e){return e.displayName||e.name||"Component"}function jc(e){return typeof e=="string"&&!0}var yy=typeof Symbol=="function"&&Symbol.for,vy=yy?Symbol.for("react.memo"):60115,sb=yy?Symbol.for("react.forward_ref"):60112,ab={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},lb={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},wy={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},cb=((Lc={})[sb]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Lc[vy]=wy,Lc);function vp(e){return("type"in(t=e)&&t.type.$$typeof)===vy?wy:"$$typeof"in e?cb[e.$$typeof]:ab;var t}var ub=Object.defineProperty,db=Object.getOwnPropertyNames,wp=Object.getOwnPropertySymbols,fb=Object.getOwnPropertyDescriptor,hb=Object.getPrototypeOf,xp=Object.prototype;function xy(e,t,n){if(typeof t!="string"){if(xp){var i=hb(t);i&&i!==xp&&xy(e,i,n)}var r=db(t);wp&&(r=r.concat(wp(t)));for(var o=vp(e),s=vp(t),a=0;a<r.length;++a){var l=r[a];if(!(l in lb||n&&n[l]||s&&l in s||o&&l in o)){var c=fb(t,l);try{ub(e,l,c)}catch{}}}}return e}function zi(e){return typeof e=="function"}function Pf(e){return typeof e=="object"&&"styledComponentId"in e}function bi(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function id(e,t){if(e.length===0)return"";for(var n=e[0],i=1;i<e.length;i++)n+=e[i];return n}function qo(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function rd(e,t,n){if(n===void 0&&(n=!1),!n&&!qo(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var i=0;i<t.length;i++)e[i]=rd(e[i],t[i]);else if(qo(t))for(var i in t)e[i]=rd(e[i],t[i]);return e}function Ef(e,t){Object.defineProperty(e,"toString",{value:t})}function Li(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var pb=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,i=0;i<t;i++)n+=this.groupSizes[i];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var i=this.groupSizes,r=i.length,o=r;t>=o;)if((o<<=1)<0)throw Li(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var s=r;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(t+1),l=(s=0,n.length);s<l;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],i=this.indexOfGroup(t),r=i+n;this.groupSizes[t]=0;for(var o=i;o<r;o++)this.tag.deleteRule(i)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var i=this.groupSizes[t],r=this.indexOfGroup(t),o=r+i,s=r;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(Cf);return n},e}(),pa=new Map,Xa=new Map,ma=1,Rs=function(e){if(pa.has(e))return pa.get(e);for(;Xa.has(ma);)ma++;var t=ma++;return pa.set(e,t),Xa.set(t,e),t},mb=function(e,t){ma=t+1,pa.set(e,t),Xa.set(t,e)},gb="style[".concat(zr,"][").concat(dy,'="').concat(wl,'"]'),yb=new RegExp("^".concat(zr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),vb=function(e,t,n){for(var i,r=n.split(","),o=0,s=r.length;o<s;o++)(i=r[o])&&e.registerName(t,i)},wb=function(e,t){for(var n,i=((n=t.textContent)!==null&&n!==void 0?n:"").split(Cf),r=[],o=0,s=i.length;o<s;o++){var a=i[o].trim();if(a){var l=a.match(yb);if(l){var c=0|parseInt(l[1],10),u=l[2];c!==0&&(mb(u,c),vb(e,u,l[3]),e.getTag().insertRules(c,r)),r.length=0}else r.push(a)}}},bp=function(e){for(var t=document.querySelectorAll(gb),n=0,i=t.length;n<i;n++){var r=t[n];r&&r.getAttribute(zr)!==uy&&(wb(e,r),r.parentNode&&r.parentNode.removeChild(r))}};function xb(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var by=function(e){var t=document.head,n=e||t,i=document.createElement("style"),r=function(a){var l=Array.from(a.querySelectorAll("style[".concat(zr,"]")));return l[l.length-1]}(n),o=r!==void 0?r.nextSibling:null;i.setAttribute(zr,uy),i.setAttribute(dy,wl);var s=xb();return s&&i.setAttribute("nonce",s),n.insertBefore(i,o),i},bb=function(){function e(t){this.element=by(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var i=document.styleSheets,r=0,o=i.length;r<o;r++){var s=i[r];if(s.ownerNode===n)return s}throw Li(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Sb=function(){function e(t){this.element=by(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var i=document.createTextNode(n);return this.element.insertBefore(i,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),kb=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Sp=Ya,_b={isServer:!Ya,useCSSOMInjection:!eb},qa=function(){function e(t,n,i){t===void 0&&(t=Lr),n===void 0&&(n={});var r=this;this.options=Ae(Ae({},_b),t),this.gs=n,this.names=new Map(i),this.server=!!t.isServer,!this.server&&Ya&&Sp&&(Sp=!1,bp(this)),Ef(this,function(){return function(o){for(var s=o.getTag(),a=s.length,l="",c=function(h){var f=function(w){return Xa.get(w)}(h);if(f===void 0)return"continue";var y=o.names.get(f),v=s.getGroup(h);if(y===void 0||!y.size||v.length===0)return"continue";var m="".concat(zr,".g").concat(h,'[id="').concat(f,'"]'),C="";y!==void 0&&y.forEach(function(w){w.length>0&&(C+="".concat(w,","))}),l+="".concat(v).concat(m,'{content:"').concat(C,'"}').concat(Cf)},u=0;u<a;u++)c(u);return l}(r)})}return e.registerId=function(t){return Rs(t)},e.prototype.rehydrate=function(){!this.server&&Ya&&bp(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Ae(Ae({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var i=n.useCSSOMInjection,r=n.target;return n.isServer?new kb(r):i?new bb(r):new Sb(r)}(this.options),new pb(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Rs(t),this.names.has(t))this.names.get(t).add(n);else{var i=new Set;i.add(n),this.names.set(t,i)}},e.prototype.insertRules=function(t,n,i){this.registerName(t,n),this.getTag().insertRules(Rs(t),i)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Rs(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Cb=/&/g,Pb=/^\s*\/\/.*$/gm;function Sy(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(i){return"".concat(t," ").concat(i)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Sy(n.children,t)),n})}function Eb(e){var t,n,i,r=Lr,o=r.options,s=o===void 0?Lr:o,a=r.plugins,l=a===void 0?xl:a,c=function(f,y,v){return v.startsWith(n)&&v.endsWith(n)&&v.replaceAll(n,"").length>0?".".concat(t):f},u=l.slice();u.push(function(f){f.type===ml&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(Cb,n).replace(i,c))}),s.prefix&&u.push(Zx),u.push(Qx);var h=function(f,y,v,m){y===void 0&&(y=""),v===void 0&&(v=""),m===void 0&&(m="&"),t=m,n=y,i=new RegExp("\\".concat(n,"\\b"),"g");var C=f.replace(Pb,""),w=Xx(v||y?"".concat(v," ").concat(y," { ").concat(C," }"):C);s.namespace&&(w=Sy(w,s.namespace));var g=[];return Va(w,Gx(u.concat(Kx(function(d){return g.push(d)})))),g};return h.hash=l.length?l.reduce(function(f,y){return y.name||Li(15),dr(f,y.name)},py).toString():"",h}var Ib=new qa,od=Eb(),ky=xt.createContext({shouldForwardProp:void 0,styleSheet:Ib,stylis:od});ky.Consumer;xt.createContext(void 0);function sd(){return j.useContext(ky)}var Tb=function(){function e(t,n){var i=this;this.inject=function(r,o){o===void 0&&(o=od);var s=i.name+o.hash;r.hasNameForId(i.id,s)||r.insertRules(i.id,s,o(i.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Ef(this,function(){throw Li(12,String(i.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=od),this.name+t.hash},e}(),Ob=function(e){return e>="A"&&e<="Z"};function kp(e){for(var t="",n=0;n<e.length;n++){var i=e[n];if(n===1&&i==="-"&&e[0]==="-")return e;Ob(i)?t+="-"+i.toLowerCase():t+=i}return t.startsWith("ms-")?"-"+t:t}var _y=function(e){return e==null||e===!1||e===""},Cy=function(e){var t,n,i=[];for(var r in e){var o=e[r];e.hasOwnProperty(r)&&!_y(o)&&(Array.isArray(o)&&o.isCss||zi(o)?i.push("".concat(kp(r),":"),o,";"):qo(o)?i.push.apply(i,Xo(Xo(["".concat(r," {")],Cy(o),!1),["}"],!1)):i.push("".concat(kp(r),": ").concat((t=r,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Jx||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return i};function ti(e,t,n,i){if(_y(e))return[];if(Pf(e))return[".".concat(e.styledComponentId)];if(zi(e)){if(!zi(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var r=e(t);return ti(r,t,n,i)}var o;return e instanceof Tb?n?(e.inject(n,i),[e.getName(i)]):[e]:qo(e)?Cy(e):Array.isArray(e)?Array.prototype.concat.apply(xl,e.map(function(s){return ti(s,t,n,i)})):[e.toString()]}function Py(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(zi(n)&&!Pf(n))return!1}return!0}var Mb=my(wl),Db=function(){function e(t,n,i){this.rules=t,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&Py(t),this.componentId=n,this.baseHash=dr(Mb,n),this.baseStyle=i,qa.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,i){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))r=bi(r,this.staticRulesId);else{var o=id(ti(this.rules,t,n,i)),s=nd(dr(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=i(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}r=bi(r,s),this.staticRulesId=s}else{for(var l=dr(this.baseHash,i.hash),c="",u=0;u<this.rules.length;u++){var h=this.rules[u];if(typeof h=="string")c+=h;else if(h){var f=id(ti(h,t,n,i));l=dr(l,f+u),c+=f}}if(c){var y=nd(l>>>0);n.hasNameForId(this.componentId,y)||n.insertRules(this.componentId,y,i(c,".".concat(y),void 0,this.componentId)),r=bi(r,y)}}return r},e}(),Qo=xt.createContext(void 0);Qo.Consumer;function $b(e){var t=xt.useContext(Qo),n=j.useMemo(function(){return function(i,r){if(!i)throw Li(14);if(zi(i)){var o=i(r);return o}if(Array.isArray(i)||typeof i!="object")throw Li(8);return r?Ae(Ae({},r),i):i}(e.theme,t)},[e.theme,t]);return e.children?xt.createElement(Qo.Provider,{value:n},e.children):null}var Fc={};function Ab(e,t,n){var i=Pf(e),r=e,o=!jc(e),s=t.attrs,a=s===void 0?xl:s,l=t.componentId,c=l===void 0?function(p,x){var b=typeof p!="string"?"sc":gp(p);Fc[b]=(Fc[b]||0)+1;var k="".concat(b,"-").concat(gy(wl+b+Fc[b]));return x?"".concat(x,"-").concat(k):k}(t.displayName,t.parentComponentId):l,u=t.displayName,h=u===void 0?function(p){return jc(p)?"styled.".concat(p):"Styled(".concat(ob(p),")")}(e):u,f=t.displayName&&t.componentId?"".concat(gp(t.displayName),"-").concat(t.componentId):t.componentId||c,y=i&&r.attrs?r.attrs.concat(a).filter(Boolean):a,v=t.shouldForwardProp;if(i&&r.shouldForwardProp){var m=r.shouldForwardProp;if(t.shouldForwardProp){var C=t.shouldForwardProp;v=function(p,x){return m(p,x)&&C(p,x)}}else v=m}var w=new Db(n,f,i?r.componentStyle:void 0);function g(p,x){return function(b,k,P){var I=b.attrs,O=b.componentStyle,A=b.defaultProps,E=b.foldedComponentIds,D=b.styledComponentId,M=b.target,L=xt.useContext(Qo),B=sd(),H=b.shouldForwardProp||B.shouldForwardProp,T=fy(k,L,A)||Lr,N=function(Rn,mt,xn){for(var Gr,ui=Ae(Ae({},mt),{className:void 0,theme:xn}),cc=0;cc<Rn.length;cc+=1){var gs=zi(Gr=Rn[cc])?Gr(ui):Gr;for(var zn in gs)ui[zn]=zn==="className"?bi(ui[zn],gs[zn]):zn==="style"?Ae(Ae({},ui[zn]),gs[zn]):gs[zn]}return mt.className&&(ui.className=bi(ui.className,mt.className)),ui}(I,k,T),U=N.as||M,Q={};for(var Z in N)N[Z]===void 0||Z[0]==="$"||Z==="as"||Z==="theme"&&N.theme===T||(Z==="forwardedAs"?Q.as=N.forwardedAs:H&&!H(Z,U)||(Q[Z]=N[Z]));var et=function(Rn,mt){var xn=sd(),Gr=Rn.generateAndInjectStyles(mt,xn.styleSheet,xn.stylis);return Gr}(O,N),ae=bi(E,D);return et&&(ae+=" "+et),N.className&&(ae+=" "+N.className),Q[jc(U)&&!hy.has(U)?"class":"className"]=ae,Q.ref=P,j.createElement(U,Q)}(d,p,x)}g.displayName=h;var d=xt.forwardRef(g);return d.attrs=y,d.componentStyle=w,d.displayName=h,d.shouldForwardProp=v,d.foldedComponentIds=i?bi(r.foldedComponentIds,r.styledComponentId):"",d.styledComponentId=f,d.target=i?r.target:e,Object.defineProperty(d,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(p){this._foldedDefaultProps=i?function(x){for(var b=[],k=1;k<arguments.length;k++)b[k-1]=arguments[k];for(var P=0,I=b;P<I.length;P++)rd(x,I[P],!0);return x}({},r.defaultProps,p):p}}),Ef(d,function(){return".".concat(d.styledComponentId)}),o&&xy(d,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),d}function _p(e,t){for(var n=[e[0]],i=0,r=t.length;i<r;i+=1)n.push(t[i],e[i+1]);return n}var Cp=function(e){return Object.assign(e,{isCss:!0})};function Ti(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(zi(e)||qo(e))return Cp(ti(_p(xl,Xo([e],t,!0))));var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?ti(i):Cp(ti(_p(i,t)))}function ad(e,t,n){if(n===void 0&&(n=Lr),!t)throw Li(1,t);var i=function(r){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return e(t,n,Ti.apply(void 0,Xo([r],o,!1)))};return i.attrs=function(r){return ad(e,t,Ae(Ae({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},i.withConfig=function(r){return ad(e,t,Ae(Ae({},n),r))},i}var Ey=function(e){return ad(Ab,e)},z=Ey;hy.forEach(function(e){z[e]=Ey(e)});var Rb=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Py(t),qa.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,i,r){var o=r(id(ti(this.rules,n,i,r)),""),s=this.componentId+t;i.insertRules(s,s,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,i,r){t>2&&qa.registerId(this.componentId+t),this.removeStyles(t,i),this.createStyles(t,n,i,r)},e}();function zb(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var i=Ti.apply(void 0,Xo([e],t,!1)),r="sc-global-".concat(gy(JSON.stringify(i))),o=new Rb(i,r),s=function(l){var c=sd(),u=xt.useContext(Qo),h=xt.useRef(c.styleSheet.allocateGSInstance(r)).current;return c.styleSheet.server&&a(h,l,c.styleSheet,u,c.stylis),xt.useLayoutEffect(function(){if(!c.styleSheet.server)return a(h,l,c.styleSheet,u,c.stylis),function(){return o.removeStyles(h,c.styleSheet)}},[h,l,c.styleSheet,u,c.stylis]),null};function a(l,c,u,h,f){if(o.isStatic)o.renderStyles(l,tb,u,f);else{var y=Ae(Ae({},c),{theme:fy(c,h,s.defaultProps)});o.renderStyles(l,y,u,f)}}return xt.memo(s)}const Iy=j.createContext({theme:"dark",width:1600}),Lb=j.memo(({children:e})=>{const[t,n]=j.useState({theme:"dark",width:1600}),i=o=>{n({...t,width:o})},r=o=>{n({...t,theme:o})};return j.useEffect(()=>{const o=()=>i(window.innerWidth);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[window.innerWidth]),j.useEffect(()=>{r(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")},[]),_.jsx(Iy.Provider,{value:{...t,setTheme:r,setWidth:i},children:e})}),at=()=>j.useContext(Iy),Si="generated",jb="pointerdown",Fb="pointerup",ld="pointerleave",Nb="pointerout",ji="pointermove",Bb="touchstart",Pp="touchend",Ub="touchmove",Wb="touchcancel",Hb="resize",Vb="visibilitychange",Nt="tsParticles - Error",Yn=100,Ep=.5,Qe=1e3;var Fe;(function(e){e.bottom="bottom",e.bottomLeft="bottom-left",e.bottomRight="bottom-right",e.left="left",e.none="none",e.right="right",e.top="top",e.topLeft="top-left",e.topRight="top-right",e.outside="outside",e.inside="inside"})(Fe||(Fe={}));function Ty(e){return typeof e=="boolean"}function oi(e){return typeof e=="string"}function si(e){return typeof e=="number"}function fr(e){return typeof e=="object"&&e!==null}function vn(e){return Array.isArray(e)}const cn={x:0,y:0,z:0},Ip=2,Yb=1;class yt{constructor(t,n,i){if(this._updateFromAngle=(r,o)=>{this.x=Math.cos(r)*o,this.y=Math.sin(r)*o},!si(t)&&t){this.x=t.x,this.y=t.y;const r=t;this.z=r.z?r.z:cn.z}else if(t!==void 0&&n!==void 0)this.x=t,this.y=n,this.z=i??cn.z;else throw new Error(`${Nt} Vector3d not initialized correctly`)}static get origin(){return yt.create(cn.x,cn.y,cn.z)}get angle(){return Math.atan2(this.y,this.x)}set angle(t){this._updateFromAngle(t,this.length)}get length(){return Math.sqrt(this.getLengthSq())}set length(t){this._updateFromAngle(this.angle,t)}static clone(t){return yt.create(t.x,t.y,t.z)}static create(t,n,i){return new yt(t,n,i)}add(t){return yt.create(this.x+t.x,this.y+t.y,this.z+t.z)}addTo(t){this.x+=t.x,this.y+=t.y,this.z+=t.z}copy(){return yt.clone(this)}distanceTo(t){return this.sub(t).length}distanceToSq(t){return this.sub(t).getLengthSq()}div(t){return yt.create(this.x/t,this.y/t,this.z/t)}divTo(t){this.x/=t,this.y/=t,this.z/=t}getLengthSq(){return this.x**Ip+this.y**Ip}mult(t){return yt.create(this.x*t,this.y*t,this.z*t)}multTo(t){this.x*=t,this.y*=t,this.z*=t}normalize(){const t=this.length;t!=0&&this.multTo(Yb/t)}rotate(t){return yt.create(this.x*Math.cos(t)-this.y*Math.sin(t),this.x*Math.sin(t)+this.y*Math.cos(t),cn.z)}setTo(t){this.x=t.x,this.y=t.y;const n=t;this.z=n.z?n.z:cn.z}sub(t){return yt.create(this.x-t.x,this.y-t.y,this.z-t.z)}subFrom(t){this.x-=t.x,this.y-=t.y,this.z-=t.z}}class ze extends yt{constructor(t,n){super(t,n,cn.z)}static get origin(){return ze.create(cn.x,cn.y)}static clone(t){return ze.create(t.x,t.y)}static create(t,n){return new ze(t,n)}}let Xb=Math.random;const Oy={nextFrame:e=>requestAnimationFrame(e),cancel:e=>cancelAnimationFrame(e)},cd=new Map,qb=2,Qb=Math.PI*qb;function Nc(e,t){cd.get(e)||cd.set(e,t)}function My(e){return cd.get(e)??(t=>t)}function de(){return Bt(Xb(),0,1-Number.EPSILON)}function Gb(e){return Oy.nextFrame(e)}function Kb(e){Oy.cancel(e)}function Bt(e,t,n){return Math.min(Math.max(e,t),n)}function Bc(e,t,n,i){return Math.floor((e*n+t*i)/(n+i))}function St(e){const t=Qt(e),n=0;let i=bl(e);return t===i&&(i=n),de()*(t-i)+i}function W(e){return si(e)?e:St(e)}function bl(e){return si(e)?e:e.min}function Qt(e){return si(e)?e:e.max}function J(e,t){if(e===t||t===void 0&&si(e))return e;const n=bl(e),i=Qt(e);return t!==void 0?{min:Math.min(n,t),max:Math.max(i,t)}:J(n,i)}function rt(e,t){const n=e.x-t.x,i=e.y-t.y,r=2;return{dx:n,dy:i,distance:Math.sqrt(n**r+i**r)}}function _t(e,t){return rt(e,t).distance}function ni(e){return e*Math.PI/180}function Zb(e,t,n){if(si(e))return ni(e);const i=0,r=.5,o=.25,s=r+o;switch(e){case Fe.top:return-Math.PI*r;case Fe.topRight:return-Math.PI*o;case Fe.right:return i;case Fe.bottomRight:return Math.PI*o;case Fe.bottom:return Math.PI*r;case Fe.bottomLeft:return Math.PI*s;case Fe.left:return Math.PI;case Fe.topLeft:return-Math.PI*s;case Fe.inside:return Math.atan2(n.y-t.y,n.x-t.x);case Fe.outside:return Math.atan2(t.y-n.y,t.x-n.x);default:return de()*Qb}}function Jb(e){const t=ze.origin;return t.length=1,t.angle=e,t}function Tp(e,t,n,i){return ze.create(e.x*(n-i)/(n+i)+t.x*2*i/(n+i),e.y)}function eS(e){var t,n;return{x:((t=e.position)==null?void 0:t.x)??de()*e.size.width,y:((n=e.position)==null?void 0:n.y)??de()*e.size.height}}function Dy(e){return e?e.endsWith("%")?parseFloat(e)/Yn:parseFloat(e):1}var ki;(function(e){e.auto="auto",e.increase="increase",e.decrease="decrease",e.random="random"})(ki||(ki={}));var Ce;(function(e){e.increasing="increasing",e.decreasing="decreasing"})(Ce||(Ce={}));var Fi;(function(e){e.none="none",e.max="max",e.min="min"})(Fi||(Fi={}));var q;(function(e){e.bottom="bottom",e.left="left",e.right="right",e.top="top"})(q||(q={}));var jr;(function(e){e.precise="precise",e.percent="percent"})(jr||(jr={}));var br;(function(e){e.max="max",e.min="min",e.random="random"})(br||(br={}));const tS={debug:console.debug,error:console.error,info:console.info,log:console.log,verbose:console.log,warning:console.warn};function Ni(){return tS}function Op(e){const t={bounced:!1},{pSide:n,pOtherSide:i,rectSide:r,rectOtherSide:o,velocity:s,factor:a}=e,l=.5,c=0;return i.min<o.min||i.min>o.max||i.max<o.min||i.max>o.max||(n.max>=r.min&&n.max<=(r.max+r.min)*l&&s>c||n.min<=r.max&&n.min>(r.max+r.min)*l&&s<c)&&(t.velocity=s*-a,t.bounced=!0),t}function nS(e,t){const n=Ut(t,i=>e.matches(i));return vn(n)?n.some(i=>i):n}function Bi(){return typeof window>"u"||!window||typeof window.document>"u"||!window.document}function iS(){return!Bi()&&typeof matchMedia<"u"}function $y(e){if(iS())return matchMedia(e)}function rS(e){if(!(Bi()||typeof IntersectionObserver>"u"))return new IntersectionObserver(e)}function oS(e){if(!(Bi()||typeof MutationObserver>"u"))return new MutationObserver(e)}function ke(e,t){return e===t||vn(t)&&t.indexOf(e)>-1}async function Mp(e,t){try{await document.fonts.load(`${t??"400"} 36px '${e??"Verdana"}'`)}catch{}}function sS(e){return Math.floor(de()*e.length)}function Sl(e,t,n=!0){return e[t!==void 0&&n?t%e.length:sS(e)]}function If(e,t,n,i,r){return aS(cs(e,i??0),t,n,r)}function aS(e,t,n,i){let r=!0;return(!i||i===q.bottom)&&(r=e.top<t.height+n.x),r&&(!i||i===q.left)&&(r=e.right>n.x),r&&(!i||i===q.right)&&(r=e.left<t.width+n.y),r&&(!i||i===q.top)&&(r=e.bottom>n.y),r}function cs(e,t){return{bottom:e.y+t,left:e.x-t,right:e.x+t,top:e.y-t}}function Ze(e,...t){for(const n of t){if(n==null)continue;if(!fr(n)){e=n;continue}const i=Array.isArray(n);i&&(fr(e)||!e||!Array.isArray(e))?e=[]:!i&&(fr(e)||!e||Array.isArray(e))&&(e={});for(const r in n){if(r==="__proto__")continue;const o=n,s=o[r],a=e;a[r]=fr(s)&&Array.isArray(s)?s.map(l=>Ze(a[r],l)):Ze(a[r],s)}}return e}function Tf(e,t){return!!zy(t,n=>n.enable&&ke(e,n.mode))}function Of(e,t,n){Ut(t,i=>{const r=i.mode;i.enable&&ke(e,r)&&lS(i,n)})}function lS(e,t){const n=e.selectors;Ut(n,i=>{t(i,e)})}function Ay(e,t){if(!(!t||!e))return zy(e,n=>nS(t,n.selectors))}function ud(e){return{position:e.getPosition(),radius:e.getRadius(),mass:e.getMass(),velocity:e.velocity,factor:ze.create(W(e.options.bounce.horizontal.value),W(e.options.bounce.vertical.value))}}function Ry(e,t){const{x:n,y:i}=e.velocity.sub(t.velocity),[r,o]=[e.position,t.position],{dx:s,dy:a}=rt(o,r);if(n*s+i*a<0)return;const c=-Math.atan2(a,s),u=e.mass,h=t.mass,f=e.velocity.rotate(c),y=t.velocity.rotate(c),v=Tp(f,y,u,h),m=Tp(y,f,u,h),C=v.rotate(-c),w=m.rotate(-c);e.velocity.x=C.x*e.factor.x,e.velocity.y=C.y*e.factor.y,t.velocity.x=w.x*t.factor.x,t.velocity.y=w.y*t.factor.y}function cS(e,t){const n=e.getPosition(),i=e.getRadius(),r=cs(n,i),o=e.options.bounce,s=Op({pSide:{min:r.left,max:r.right},pOtherSide:{min:r.top,max:r.bottom},rectSide:{min:t.left,max:t.right},rectOtherSide:{min:t.top,max:t.bottom},velocity:e.velocity.x,factor:W(o.horizontal.value)});s.bounced&&(s.velocity!==void 0&&(e.velocity.x=s.velocity),s.position!==void 0&&(e.position.x=s.position));const a=Op({pSide:{min:r.top,max:r.bottom},pOtherSide:{min:r.left,max:r.right},rectSide:{min:t.top,max:t.bottom},rectOtherSide:{min:t.left,max:t.right},velocity:e.velocity.y,factor:W(o.vertical.value)});a.bounced&&(a.velocity!==void 0&&(e.velocity.y=a.velocity),a.position!==void 0&&(e.position.y=a.position))}function Ut(e,t){return vn(e)?e.map((i,r)=>t(i,r)):t(e,0)}function Gt(e,t,n){return vn(e)?Sl(e,t,n):e}function zy(e,t){return vn(e)?e.find((i,r)=>t(i,r)):t(e,0)?e:void 0}function Ly(e,t){const n=e.value,i=e.animation,r={delayTime:W(i.delay)*Qe,enable:i.enable,value:W(e.value)*t,max:Qt(n)*t,min:bl(n)*t,loops:0,maxLoops:W(i.count),time:0},o=1;if(i.enable){switch(r.decay=o-W(i.decay),i.mode){case ki.increase:r.status=Ce.increasing;break;case ki.decrease:r.status=Ce.decreasing;break;case ki.random:r.status=de()>=Ep?Ce.increasing:Ce.decreasing;break}const s=i.mode===ki.auto;switch(i.startValue){case br.min:r.value=r.min,s&&(r.status=Ce.increasing);break;case br.max:r.value=r.max,s&&(r.status=Ce.decreasing);break;case br.random:default:r.value=St(r),s&&(r.status=de()>=Ep?Ce.increasing:Ce.decreasing);break}}return r.initialValue=r.value,r}function uS(e,t){if(!(e.mode===jr.percent)){const{mode:r,...o}=e;return o}return"x"in e?{x:e.x/Yn*t.width,y:e.y/Yn*t.height}:{width:e.width/Yn*t.width,height:e.height/Yn*t.height}}function jy(e,t){return uS(e,t)}function dS(e,t,n,i,r){switch(t){case Fi.max:n>=r&&e.destroy();break;case Fi.min:n<=i&&e.destroy();break}}function Mf(e,t,n,i,r){if(e.destroyed||!t||!t.enable||(t.maxLoops??0)>0&&(t.loops??0)>(t.maxLoops??0))return;const u=(t.velocity??0)*r.factor,h=t.min,f=t.max,y=t.decay??1;if(t.time||(t.time=0),(t.delayTime??0)>0&&t.time<(t.delayTime??0)&&(t.time+=r.value),!((t.delayTime??0)>0&&t.time<(t.delayTime??0))){switch(t.status){case Ce.increasing:t.value>=f?(n?t.status=Ce.decreasing:t.value-=f,t.loops||(t.loops=0),t.loops++):t.value+=u;break;case Ce.decreasing:t.value<=h?(n?t.status=Ce.increasing:t.value+=f,t.loops||(t.loops=0),t.loops++):t.value-=u}t.velocity&&y!==1&&(t.velocity*=y),dS(e,i,t.value,h,f),e.destroyed||(t.value=Bt(t.value,h,f))}}var dd;(function(e){e.darken="darken",e.enlighten="enlighten"})(dd||(dd={}));var yi;(function(e){e[e.r=1]="r",e[e.g=2]="g",e[e.b=3]="b",e[e.a=4]="a"})(yi||(yi={}));const Qa="random",ga="mid",kl=new Map;function Dp(e){kl.set(e.key,e)}function fS(e){for(const[,l]of kl)if(e.startsWith(l.stringPrefix))return l.parseString(e);const t=/^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i,n=e.replace(t,(l,c,u,h,f)=>c+c+u+u+h+h+(f!==void 0?f+f:"")),i=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i,r=i.exec(n),o=16;return r?{a:r[yi.a]!==void 0?parseInt(r[yi.a],o)/255:1,b:parseInt(r[yi.b],o),g:parseInt(r[yi.g],o),r:parseInt(r[yi.r],o)}:void 0}function tn(e,t,n=!0){if(!e)return;const i=oi(e)?{value:e}:e;if(oi(i.value))return Fy(i.value,t,n);if(vn(i.value))return tn({value:Sl(i.value,t,n)});for(const[,r]of kl){const o=r.handleRangeColor(i);if(o)return o}}function Fy(e,t,n=!0){if(!e)return;const i=oi(e)?{value:e}:e;if(oi(i.value))return i.value===Qa?By():hS(i.value);if(vn(i.value))return Fy({value:Sl(i.value,t,n)});for(const[,r]of kl){const o=r.handleColor(i);if(o)return o}}function Go(e,t,n=!0){const i=tn(e,t,n);return i?Ny(i):void 0}function Ny(e){const u=e.r/255,h=e.g/255,f=e.b/255,y=Math.max(u,h,f),v=Math.min(u,h,f),m={h:0,l:(y+v)*.5,s:0};return y!==v&&(m.s=m.l<.5?(y-v)/(y+v):(y-v)/(2-y-v),m.h=u===y?(h-f)/(y-v):m.h=h===y?2+(f-u)/(y-v):2*2+(u-h)/(y-v)),m.l*=100,m.s*=100,m.h*=60,m.h<0&&(m.h+=360),m.h>=360&&(m.h-=360),m}function hS(e){return fS(e)}function Fr(e){const s=(e.h%360+360)%360,a=Math.max(0,Math.min(100,e.s)),l=Math.max(0,Math.min(100,e.l)),c=s/360,u=a/100,h=l/100,f=255,y=3;if(a===0){const I=Math.round(h*f);return{r:I,g:I,b:I}}const v=.5,m=2,C=(I,O,A)=>{if(A<0&&A++,A>1&&A--,A*6<1)return I+(O-I)*6*A;if(A*m<1)return O;if(A*y<1*m){const L=m/y;return I+(O-I)*(L-A)*6}return I},w=1,g=h<v?h*(w+u):h+u-h*u,d=m*h-g,p=1,x=p/y,b=Math.min(f,f*C(d,g,c+x)),k=Math.min(f,f*C(d,g,c)),P=Math.min(f,f*C(d,g,c-x));return{r:Math.round(b),g:Math.round(k),b:Math.round(P)}}function pS(e){const t=Fr(e);return{a:e.a,b:t.b,g:t.g,r:t.r}}function By(e){return{b:Math.floor(St(J(0,256))),g:Math.floor(St(J(0,256))),r:Math.floor(St(J(0,256)))}}function Tn(e,t){return`rgba(${e.r}, ${e.g}, ${e.b}, ${t??1})`}function Ko(e,t){return`hsla(${e.h}, ${e.s}%, ${e.l}%, ${t??1})`}function Df(e,t,n,i){let r=e,o=t;return r.r===void 0&&(r=Fr(e)),o.r===void 0&&(o=Fr(t)),{b:Bc(r.b,o.b,n,i),g:Bc(r.g,o.g,n,i),r:Bc(r.r,o.r,n,i)}}function fd(e,t,n){if(n===Qa)return By();if(n===ga){const i=e.getFillColor()??e.getStrokeColor(),r=(t==null?void 0:t.getFillColor())??(t==null?void 0:t.getStrokeColor());if(i&&r&&t)return Df(i,r,e.getRadius(),t.getRadius());{const o=i??r;if(o)return Fr(o)}}else return n}function Uy(e,t,n){const i=oi(e)?e:e.value;return i===Qa?n?tn({value:i}):t?Qa:ga:i===ga?ga:tn({value:i})}function $p(e){return e!==void 0?{h:e.h.value,s:e.s.value,l:e.l.value}:void 0}function Wy(e,t,n){const i={h:{enable:!1,value:e.h},s:{enable:!1,value:e.s},l:{enable:!1,value:e.l}};return t&&(Uc(i.h,t.h,n),Uc(i.s,t.s,n),Uc(i.l,t.l,n)),i}function Uc(e,t,n){e.enable=t.enable;const i=0,r=1,o=0,s=0;e.enable?(e.velocity=W(t.speed)/Yn*n,e.decay=r-W(t.decay),e.status=Ce.increasing,e.loops=o,e.maxLoops=W(t.count),e.time=s,e.delayTime=W(t.delay)*Qe,t.sync||(e.velocity*=de(),e.value*=de()),e.initialValue=e.value,e.offset=J(t.offset)):e.velocity=i}function Wc(e,t,n,i){if(!e||!e.enable||(e.maxLoops??0)>0&&(e.loops??0)>(e.maxLoops??0)||(e.time||(e.time=0),(e.delayTime??0)>0&&e.time<(e.delayTime??0)&&(e.time+=i.value),(e.delayTime??0)>0&&e.time<(e.delayTime??0)))return;const u=e.offset?St(e.offset):0,h=(e.velocity??0)*i.factor+u*3.6,f=e.decay??1,y=Qt(t),v=bl(t);!n||e.status===Ce.increasing?(e.value+=h,e.value>y&&(e.loops||(e.loops=0),e.loops++,n?e.status=Ce.decreasing:e.value-=y)):(e.value-=h,e.value<0&&(e.loops||(e.loops=0),e.loops++,e.status=Ce.increasing)),e.velocity&&f!==1&&(e.velocity*=f),e.value=Bt(e.value,v,y)}function Hy(e,t){if(!e)return;const{h:n,s:i,l:r}=e,o={h:{min:0,max:360},s:{min:0,max:100},l:{min:0,max:100}};n&&Wc(n,o.h,!1,t),i&&Wc(i,o.s,!0,t),r&&Wc(r,o.l,!0,t)}const Nr={x:0,y:0},zs={a:1,b:0,c:0,d:1};function To(e,t,n){e.beginPath(),e.moveTo(t.x,t.y),e.lineTo(n.x,n.y),e.closePath()}function mS(e,t,n){e.fillStyle=n??"rgba(0,0,0,0)",e.fillRect(Nr.x,Nr.y,t.width,t.height)}function gS(e,t,n,i){n&&(e.globalAlpha=i,e.drawImage(n,Nr.x,Nr.y,t.width,t.height),e.globalAlpha=1)}function Hc(e,t){e.clearRect(Nr.x,Nr.y,t.width,t.height)}function yS(e){const{container:t,context:n,particle:i,delta:r,colorStyles:o,backgroundMask:s,composite:a,radius:l,opacity:c,shadow:u,transform:h}=e,f=i.getPosition(),y=0,v=i.rotation+(i.pathRotation?i.velocity.angle:y),m={sin:Math.sin(v),cos:Math.cos(v)},C=!!v,w=1,g={a:m.cos*(h.a??zs.a),b:C?m.sin*(h.b??w):h.b??zs.b,c:C?-m.sin*(h.c??w):h.c??zs.c,d:m.cos*(h.d??zs.d)};n.setTransform(g.a,g.b,g.c,g.d,f.x,f.y),s&&(n.globalCompositeOperation=a);const d=i.shadowColor;u.enable&&d&&(n.shadowBlur=u.blur,n.shadowColor=Tn(d),n.shadowOffsetX=u.offset.x,n.shadowOffsetY=u.offset.y),o.fill&&(n.fillStyle=o.fill);const p=0,x=i.strokeWidth??p;n.lineWidth=x,o.stroke&&(n.strokeStyle=o.stroke);const b={container:t,context:n,particle:i,radius:l,opacity:c,delta:r,transformData:g,strokeWidth:x};wS(b),xS(b),vS(b),n.globalCompositeOperation="source-over",n.resetTransform()}function vS(e){const{container:t,context:n,particle:i,radius:r,opacity:o,delta:s,transformData:a}=e;if(!i.effect)return;const l=t.effectDrawers.get(i.effect);l&&l.draw({context:n,particle:i,radius:r,opacity:o,delta:s,pixelRatio:t.retina.pixelRatio,transformData:{...a}})}function wS(e){const{container:t,context:n,particle:i,radius:r,opacity:o,delta:s,strokeWidth:a,transformData:l}=e,c=0;if(!i.shape)return;const u=t.shapeDrawers.get(i.shape);u&&(n.beginPath(),u.draw({context:n,particle:i,radius:r,opacity:o,delta:s,pixelRatio:t.retina.pixelRatio,transformData:{...l}}),i.shapeClose&&n.closePath(),a>c&&n.stroke(),i.shapeFill&&n.fill())}function xS(e){const{container:t,context:n,particle:i,radius:r,opacity:o,delta:s,transformData:a}=e;if(!i.shape)return;const l=t.shapeDrawers.get(i.shape);l!=null&&l.afterDraw&&l.afterDraw({context:n,particle:i,radius:r,opacity:o,delta:s,pixelRatio:t.retina.pixelRatio,transformData:{...a}})}function bS(e,t,n){t.draw&&t.draw(e,n)}function SS(e,t,n,i){t.drawParticle&&t.drawParticle(e,n,i)}function kS(e,t,n){return{h:e.h,s:e.s,l:e.l+(t===dd.darken?-1:1)*n}}function _S(e,t,n){const i=t[n],r=1;i!==void 0&&(e[n]=(e[n]??r)*i)}function Ap(e,t,n=!1){if(!t)return;const i=e;if(!i)return;const r=i.style;if(r)for(const o in t){const s=t[o];s&&r.setProperty(o,s,n?"important":"")}}class CS{constructor(t){this.container=t,this._applyPostDrawUpdaters=n=>{var i;for(const r of this._postDrawUpdaters)(i=r.afterDraw)==null||i.call(r,n)},this._applyPreDrawUpdaters=(n,i,r,o,s,a)=>{var l;for(const c of this._preDrawUpdaters){if(c.getColorStyles){const{fill:u,stroke:h}=c.getColorStyles(i,n,r,o);u&&(s.fill=u),h&&(s.stroke=h)}if(c.getTransformValues){const u=c.getTransformValues(i);for(const h in u)_S(a,u,h)}(l=c.beforeDraw)==null||l.call(c,i)}},this._applyResizePlugins=()=>{var n;for(const i of this._resizePlugins)(n=i.resize)==null||n.call(i)},this._getPluginParticleColors=n=>{let i,r;for(const o of this._colorPlugins)if(!i&&o.particleFillColor&&(i=Go(o.particleFillColor(n))),!r&&o.particleStrokeColor&&(r=Go(o.particleStrokeColor(n))),i&&r)break;return[i,r]},this._initCover=async()=>{const n=this.container.actualOptions,i=n.backgroundMask.cover,r=i.color;if(r){const o=tn(r);if(o){const s={...o,a:i.opacity};this._coverColorStyle=Tn(s,s.a)}}else await new Promise((o,s)=>{if(!i.image)return;const a=document.createElement("img");a.addEventListener("load",()=>{this._coverImage={image:a,opacity:i.opacity},o()}),a.addEventListener("error",l=>{s(l.error)}),a.src=i.image})},this._initStyle=()=>{const n=this.element,i=this.container.actualOptions;if(n){this._fullScreen?(this._originalStyle=Ze({},n.style),this._setFullScreenStyle()):this._resetOriginalStyle();for(const r in i.style){if(!r||!i.style)continue;const o=i.style[r];o&&n.style.setProperty(r,o,"important")}}},this._initTrail=async()=>{const n=this.container.actualOptions,i=n.particles.move.trail,r=i.fill;if(!i.enable)return;const o=1,s=o/i.length;if(r.color){const a=tn(r.color);if(!a)return;this._trailFill={color:{...a},opacity:s}}else await new Promise((a,l)=>{if(!r.image)return;const c=document.createElement("img");c.addEventListener("load",()=>{this._trailFill={image:c,opacity:s},a()}),c.addEventListener("error",u=>{l(u.error)}),c.src=r.image})},this._paintBase=n=>{this.draw(i=>mS(i,this.size,n))},this._paintImage=(n,i)=>{this.draw(r=>gS(r,this.size,n,i))},this._repairStyle=()=>{const n=this.element;n&&(this._safeMutationObserver(i=>i.disconnect()),this._initStyle(),this.initBackground(),this._safeMutationObserver(i=>{!n||!(n instanceof Node)||i.observe(n,{attributes:!0})}))},this._resetOriginalStyle=()=>{const n=this.element,i=this._originalStyle;n&&i&&Ap(n,i)},this._safeMutationObserver=n=>{this._mutationObserver&&n(this._mutationObserver)},this._setFullScreenStyle=()=>{const n=this.element;if(!n)return;Ap(n,{position:"fixed",zIndex:this.container.actualOptions.fullScreen.zIndex.toString(10),top:"0",left:"0",width:"100%",height:"100%"},!0)},this.size={height:0,width:0},this._context=null,this._generated=!1,this._preDrawUpdaters=[],this._postDrawUpdaters=[],this._resizePlugins=[],this._colorPlugins=[]}get _fullScreen(){return this.container.actualOptions.fullScreen.enable}clear(){const t=this.container.actualOptions,n=t.particles.move.trail,i=this._trailFill;t.backgroundMask.enable?this.paint():n.enable&&n.length>0&&i?i.color?this._paintBase(Tn(i.color,i.opacity)):i.image&&this._paintImage(i.image,i.opacity):t.clear&&this.draw(o=>{Hc(o,this.size)})}destroy(){if(this.stop(),this._generated){const t=this.element;t==null||t.remove()}else this._resetOriginalStyle();this._preDrawUpdaters=[],this._postDrawUpdaters=[],this._resizePlugins=[],this._colorPlugins=[]}draw(t){const n=this._context;if(n)return t(n)}drawAsync(t){const n=this._context;if(n)return t(n)}drawParticle(t,n){if(t.spawning||t.destroyed)return;const i=t.getRadius();if(i<=0)return;const o=t.getFillColor(),s=t.getStrokeColor()??o;let[a,l]=this._getPluginParticleColors(t);a||(a=o),l||(l=s),!(!a&&!l)&&this.draw(c=>{var k;const u=this.container,h=u.actualOptions,f=t.options.zIndex,y=1,v=y-t.zIndexFactor,m=v**f.opacityRate,C=1,w=t.bubble.opacity??((k=t.opacity)==null?void 0:k.value)??C,g=t.strokeOpacity??w,d=w*m,p=g*m,x={},b={fill:a?Ko(a,d):void 0};b.stroke=l?Ko(l,p):b.fill,this._applyPreDrawUpdaters(c,t,i,d,b,x),yS({container:u,context:c,particle:t,delta:n,colorStyles:b,backgroundMask:h.backgroundMask.enable,composite:h.backgroundMask.composite,radius:i*v**f.sizeRate,opacity:d,shadow:t.options.shadow,transform:x}),this._applyPostDrawUpdaters(t)})}drawParticlePlugin(t,n,i){this.draw(r=>SS(r,t,n,i))}drawPlugin(t,n){this.draw(i=>bS(i,t,n))}async init(){this._safeMutationObserver(t=>t.disconnect()),this._mutationObserver=oS(t=>{for(const n of t)n.type==="attributes"&&n.attributeName==="style"&&this._repairStyle()}),this.resize(),this._initStyle(),await this._initCover();try{await this._initTrail()}catch(t){Ni().error(t)}this.initBackground(),this._safeMutationObserver(t=>{!this.element||!(this.element instanceof Node)||t.observe(this.element,{attributes:!0})}),this.initUpdaters(),this.initPlugins(),this.paint()}initBackground(){const t=this.container.actualOptions,n=t.background,i=this.element;if(!i)return;const r=i.style;if(r){if(n.color){const o=tn(n.color);r.backgroundColor=o?Tn(o,n.opacity):""}else r.backgroundColor="";r.backgroundImage=n.image||"",r.backgroundPosition=n.position||"",r.backgroundRepeat=n.repeat||"",r.backgroundSize=n.size||""}}initPlugins(){this._resizePlugins=[];for(const[,t]of this.container.plugins)t.resize&&this._resizePlugins.push(t),(t.particleFillColor??t.particleStrokeColor)&&this._colorPlugins.push(t)}initUpdaters(){this._preDrawUpdaters=[],this._postDrawUpdaters=[];for(const t of this.container.particles.updaters)t.afterDraw&&this._postDrawUpdaters.push(t),(t.getColorStyles??t.getTransformValues??t.beforeDraw)&&this._preDrawUpdaters.push(t)}loadCanvas(t){this._generated&&this.element&&this.element.remove(),this._generated=t.dataset&&Si in t.dataset?t.dataset[Si]==="true":this._generated,this.element=t,this.element.ariaHidden="true",this._originalStyle=Ze({},this.element.style),this.size.height=t.offsetHeight,this.size.width=t.offsetWidth,this._context=this.element.getContext("2d"),this._safeMutationObserver(n=>{!this.element||!(this.element instanceof Node)||n.observe(this.element,{attributes:!0})}),this.container.retina.init(),this.initBackground()}paint(){const t=this.container.actualOptions;this.draw(n=>{t.backgroundMask.enable&&t.backgroundMask.cover?(Hc(n,this.size),this._coverImage?this._paintImage(this._coverImage.image,this._coverImage.opacity):this._coverColorStyle?this._paintBase(this._coverColorStyle):this._paintBase()):this._paintBase()})}resize(){if(!this.element)return!1;const t=this.container,n=t.retina.pixelRatio,i=t.canvas.size,r={width:this.element.offsetWidth*n,height:this.element.offsetHeight*n};if(r.height===i.height&&r.width===i.width&&r.height===this.element.height&&r.width===this.element.width)return!1;const o={...i};return this.element.width=i.width=this.element.offsetWidth*n,this.element.height=i.height=this.element.offsetHeight*n,this.container.started&&t.particles.setResizeFactor({width:i.width/o.width,height:i.height/o.height}),!0}stop(){this._safeMutationObserver(t=>t.disconnect()),this._mutationObserver=void 0,this.draw(t=>Hc(t,this.size))}async windowResize(){if(!this.element||!this.resize())return;const t=this.container,n=t.updateActualOptions();t.particles.setDensity(),this._applyResizePlugins(),n&&await t.refresh()}}var Sr;(function(e){e.canvas="canvas",e.parent="parent",e.window="window"})(Sr||(Sr={}));const Rp=2;function Ot(e,t,n,i,r){if(i){let o={passive:!0};Ty(r)?o.capture=r:r!==void 0&&(o=r),e.addEventListener(t,n,o)}else{const o=r;e.removeEventListener(t,n,o)}}class PS{constructor(t){this.container=t,this._doMouseTouchClick=n=>{const i=this.container,r=i.actualOptions;if(this._canPush){const o=i.interactivity.mouse,s=o.position;if(!s)return;o.clickPosition={...s},o.clickTime=new Date().getTime();const a=r.interactivity.events.onClick;Ut(a.mode,l=>this.container.handleClickMode(l))}n.type==="touchend"&&setTimeout(()=>this._mouseTouchFinish(),500)},this._handleThemeChange=n=>{const i=n,r=this.container,o=r.options,s=o.defaultThemes,a=i.matches?s.dark:s.light,l=o.themes.find(c=>c.name===a);l!=null&&l.default.auto&&r.loadTheme(a)},this._handleVisibilityChange=()=>{const n=this.container,i=n.actualOptions;this._mouseTouchFinish(),i.pauseOnBlur&&(document!=null&&document.hidden?(n.pageHidden=!0,n.pause()):(n.pageHidden=!1,n.animationStatus?n.play(!0):n.draw(!0)))},this._handleWindowResize=()=>{this._resizeTimeout&&(clearTimeout(this._resizeTimeout),delete this._resizeTimeout);const n=async()=>{const i=this.container.canvas;await(i==null?void 0:i.windowResize())};this._resizeTimeout=setTimeout(()=>void n(),this.container.actualOptions.interactivity.events.resize.delay*Qe)},this._manageInteractivityListeners=(n,i)=>{const r=this._handlers,o=this.container,s=o.actualOptions,a=o.interactivity.element;if(!a)return;const l=a,c=o.canvas.element;c&&(c.style.pointerEvents=l===c?"initial":"none"),(s.interactivity.events.onHover.enable||s.interactivity.events.onClick.enable)&&(Ot(a,ji,r.mouseMove,i),Ot(a,Bb,r.touchStart,i),Ot(a,Ub,r.touchMove,i),s.interactivity.events.onClick.enable?(Ot(a,Pp,r.touchEndClick,i),Ot(a,Fb,r.mouseUp,i),Ot(a,jb,r.mouseDown,i)):Ot(a,Pp,r.touchEnd,i),Ot(a,n,r.mouseLeave,i),Ot(a,Wb,r.touchCancel,i))},this._manageListeners=n=>{const i=this._handlers,r=this.container,o=r.actualOptions,s=o.interactivity.detectsOn,a=r.canvas.element;let l=ld;s===Sr.window?(r.interactivity.element=window,l=Nb):s===Sr.parent&&a?r.interactivity.element=a.parentElement??a.parentNode:r.interactivity.element=a,this._manageMediaMatch(n),this._manageResize(n),this._manageInteractivityListeners(l,n),document&&Ot(document,Vb,i.visibilityChange,n,!1)},this._manageMediaMatch=n=>{const i=this._handlers,r=$y("(prefers-color-scheme: dark)");if(r){if(r.addEventListener!==void 0){Ot(r,"change",i.themeChange,n);return}r.addListener!==void 0&&(n?r.addListener(i.oldThemeChange):r.removeListener(i.oldThemeChange))}},this._manageResize=n=>{const i=this._handlers,r=this.container;if(!r.actualOptions.interactivity.events.resize)return;if(typeof ResizeObserver>"u"){Ot(window,Hb,i.resize,n);return}const s=r.canvas.element;this._resizeObserver&&!n?(s&&this._resizeObserver.unobserve(s),this._resizeObserver.disconnect(),delete this._resizeObserver):!this._resizeObserver&&n&&s&&(this._resizeObserver=new ResizeObserver(a=>{a.find(c=>c.target===s)&&this._handleWindowResize()}),this._resizeObserver.observe(s))},this._mouseDown=()=>{const{interactivity:n}=this.container;if(!n)return;const{mouse:i}=n;i.clicking=!0,i.downPosition=i.position},this._mouseTouchClick=n=>{const i=this.container,r=i.actualOptions,{mouse:o}=i.interactivity;o.inside=!0;let s=!1;const a=o.position;if(!(!a||!r.interactivity.events.onClick.enable)){for(const[,l]of i.plugins)if(l.clickPositionValid&&(s=l.clickPositionValid(a),s))break;s||this._doMouseTouchClick(n),o.clicking=!1}},this._mouseTouchFinish=()=>{const n=this.container.interactivity;if(!n)return;const i=n.mouse;delete i.position,delete i.clickPosition,delete i.downPosition,n.status=ld,i.inside=!1,i.clicking=!1},this._mouseTouchMove=n=>{const i=this.container,r=i.actualOptions,o=i.interactivity,s=i.canvas.element;if(!(o!=null&&o.element))return;o.mouse.inside=!0;let a;if(n.type.startsWith("pointer")){this._canPush=!0;const c=n;if(o.element===window){if(s){const u=s.getBoundingClientRect();a={x:c.clientX-u.left,y:c.clientY-u.top}}}else if(r.interactivity.detectsOn===Sr.parent){const u=c.target,h=c.currentTarget;if(u&&h&&s){const f=u.getBoundingClientRect(),y=h.getBoundingClientRect(),v=s.getBoundingClientRect();a={x:c.offsetX+Rp*f.left-(y.left+v.left),y:c.offsetY+Rp*f.top-(y.top+v.top)}}else a={x:c.offsetX??c.clientX,y:c.offsetY??c.clientY}}else c.target===s&&(a={x:c.offsetX??c.clientX,y:c.offsetY??c.clientY})}else if(this._canPush=n.type!=="touchmove",s){const c=n,u=1,h=c.touches[c.touches.length-u],f=s.getBoundingClientRect(),y=0;a={x:h.clientX-(f.left??y),y:h.clientY-(f.top??y)}}const l=i.retina.pixelRatio;a&&(a.x*=l,a.y*=l),o.mouse.position=a,o.status=ji},this._touchEnd=n=>{const i=n,r=Array.from(i.changedTouches);for(const o of r)this._touches.delete(o.identifier);this._mouseTouchFinish()},this._touchEndClick=n=>{const i=n,r=Array.from(i.changedTouches);for(const o of r)this._touches.delete(o.identifier);this._mouseTouchClick(n)},this._touchStart=n=>{const i=n,r=Array.from(i.changedTouches);for(const o of r)this._touches.set(o.identifier,performance.now());this._mouseTouchMove(n)},this._canPush=!0,this._touches=new Map,this._handlers={mouseDown:()=>this._mouseDown(),mouseLeave:()=>this._mouseTouchFinish(),mouseMove:n=>this._mouseTouchMove(n),mouseUp:n=>this._mouseTouchClick(n),touchStart:n=>this._touchStart(n),touchMove:n=>this._mouseTouchMove(n),touchEnd:n=>this._touchEnd(n),touchCancel:n=>this._touchEnd(n),touchEndClick:n=>this._touchEndClick(n),visibilityChange:()=>this._handleVisibilityChange(),themeChange:n=>this._handleThemeChange(n),oldThemeChange:n=>this._handleThemeChange(n),resize:()=>{this._handleWindowResize()}}}addListeners(){this._manageListeners(!0)}removeListeners(){this._manageListeners(!1)}}var nt;(function(e){e.configAdded="configAdded",e.containerInit="containerInit",e.particlesSetup="particlesSetup",e.containerStarted="containerStarted",e.containerStopped="containerStopped",e.containerDestroyed="containerDestroyed",e.containerPaused="containerPaused",e.containerPlay="containerPlay",e.containerBuilt="containerBuilt",e.particleAdded="particleAdded",e.particleDestroyed="particleDestroyed",e.particleRemoved="particleRemoved"})(nt||(nt={}));class Je{constructor(){this.value=""}static create(t,n){const i=new Je;return i.load(t),n!==void 0&&(oi(n)||vn(n)?i.load({value:n}):i.load(n)),i}load(t){(t==null?void 0:t.value)!==void 0&&(this.value=t.value)}}class ES{constructor(){this.color=new Je,this.color.value="",this.image="",this.position="",this.repeat="",this.size="",this.opacity=1}load(t){t&&(t.color!==void 0&&(this.color=Je.create(this.color,t.color)),t.image!==void 0&&(this.image=t.image),t.position!==void 0&&(this.position=t.position),t.repeat!==void 0&&(this.repeat=t.repeat),t.size!==void 0&&(this.size=t.size),t.opacity!==void 0&&(this.opacity=t.opacity))}}class IS{constructor(){this.opacity=1}load(t){t&&(t.color!==void 0&&(this.color=Je.create(this.color,t.color)),t.image!==void 0&&(this.image=t.image),t.opacity!==void 0&&(this.opacity=t.opacity))}}class TS{constructor(){this.composite="destination-out",this.cover=new IS,this.enable=!1}load(t){if(t){if(t.composite!==void 0&&(this.composite=t.composite),t.cover!==void 0){const n=t.cover,i=oi(t.cover)?{color:t.cover}:t.cover;this.cover.load(n.color!==void 0||n.image!==void 0?n:{color:i})}t.enable!==void 0&&(this.enable=t.enable)}}}class OS{constructor(){this.enable=!0,this.zIndex=0}load(t){t&&(t.enable!==void 0&&(this.enable=t.enable),t.zIndex!==void 0&&(this.zIndex=t.zIndex))}}class MS{constructor(){this.enable=!1,this.mode=[]}load(t){t&&(t.enable!==void 0&&(this.enable=t.enable),t.mode!==void 0&&(this.mode=t.mode))}}var Br;(function(e){e.circle="circle",e.rectangle="rectangle"})(Br||(Br={}));class zp{constructor(){this.selectors=[],this.enable=!1,this.mode=[],this.type=Br.circle}load(t){t&&(t.selectors!==void 0&&(this.selectors=t.selectors),t.enable!==void 0&&(this.enable=t.enable),t.mode!==void 0&&(this.mode=t.mode),t.type!==void 0&&(this.type=t.type))}}class DS{constructor(){this.enable=!1,this.force=2,this.smooth=10}load(t){t&&(t.enable!==void 0&&(this.enable=t.enable),t.force!==void 0&&(this.force=t.force),t.smooth!==void 0&&(this.smooth=t.smooth))}}class $S{constructor(){this.enable=!1,this.mode=[],this.parallax=new DS}load(t){t&&(t.enable!==void 0&&(this.enable=t.enable),t.mode!==void 0&&(this.mode=t.mode),this.parallax.load(t.parallax))}}class AS{constructor(){this.delay=.5,this.enable=!0}load(t){t!==void 0&&(t.delay!==void 0&&(this.delay=t.delay),t.enable!==void 0&&(this.enable=t.enable))}}class RS{constructor(){this.onClick=new MS,this.onDiv=new zp,this.onHover=new $S,this.resize=new AS}load(t){if(!t)return;this.onClick.load(t.onClick);const n=t.onDiv;n!==void 0&&(this.onDiv=Ut(n,i=>{const r=new zp;return r.load(i),r})),this.onHover.load(t.onHover),this.resize.load(t.resize)}}class zS{constructor(t,n){this._engine=t,this._container=n}load(t){if(!t||!this._container)return;const n=this._engine.interactors.get(this._container);if(n)for(const i of n)i.loadModeOptions&&i.loadModeOptions(this,t)}}class Vy{constructor(t,n){this.detectsOn=Sr.window,this.events=new RS,this.modes=new zS(t,n)}load(t){if(!t)return;const n=t.detectsOn;n!==void 0&&(this.detectsOn=n),this.events.load(t.events),this.modes.load(t.modes)}}const Lp=50;class LS{load(t){t&&(t.position&&(this.position={x:t.position.x??Lp,y:t.position.y??Lp,mode:t.position.mode??jr.percent}),t.options&&(this.options=Ze({},t.options)))}}var _i;(function(e){e.screen="screen",e.canvas="canvas"})(_i||(_i={}));class jS{constructor(){this.maxWidth=1/0,this.options={},this.mode=_i.canvas}load(t){t&&(t.maxWidth!==void 0&&(this.maxWidth=t.maxWidth),t.mode!==void 0&&(t.mode===_i.screen?this.mode=_i.screen:this.mode=_i.canvas),t.options!==void 0&&(this.options=Ze({},t.options)))}}var Wn;(function(e){e.any="any",e.dark="dark",e.light="light"})(Wn||(Wn={}));class FS{constructor(){this.auto=!1,this.mode=Wn.any,this.value=!1}load(t){t&&(t.auto!==void 0&&(this.auto=t.auto),t.mode!==void 0&&(this.mode=t.mode),t.value!==void 0&&(this.value=t.value))}}class NS{constructor(){this.name="",this.default=new FS}load(t){t&&(t.name!==void 0&&(this.name=t.name),this.default.load(t.default),t.options!==void 0&&(this.options=Ze({},t.options)))}}class $f{constructor(){this.count=0,this.enable=!1,this.speed=1,this.decay=0,this.delay=0,this.sync=!1}load(t){t&&(t.count!==void 0&&(this.count=J(t.count)),t.enable!==void 0&&(this.enable=t.enable),t.speed!==void 0&&(this.speed=J(t.speed)),t.decay!==void 0&&(this.decay=J(t.decay)),t.delay!==void 0&&(this.delay=J(t.delay)),t.sync!==void 0&&(this.sync=t.sync))}}class Af extends $f{constructor(){super(),this.mode=ki.auto,this.startValue=br.random}load(t){super.load(t),t&&(t.mode!==void 0&&(this.mode=t.mode),t.startValue!==void 0&&(this.startValue=t.startValue))}}class Vc extends $f{constructor(){super(),this.offset=0,this.sync=!0}load(t){super.load(t),t&&t.offset!==void 0&&(this.offset=J(t.offset))}}class BS{constructor(){this.h=new Vc,this.s=new Vc,this.l=new Vc}load(t){t&&(this.h.load(t.h),this.s.load(t.s),this.l.load(t.l))}}class Zo extends Je{constructor(){super(),this.animation=new BS}static create(t,n){const i=new Zo;return i.load(t),n!==void 0&&(oi(n)||vn(n)?i.load({value:n}):i.load(n)),i}load(t){if(super.load(t),!t)return;const n=t.animation;n!==void 0&&(n.enable!==void 0?this.animation.h.load(n):this.animation.load(t.animation))}}var kr;(function(e){e.absorb="absorb",e.bounce="bounce",e.destroy="destroy"})(kr||(kr={}));class US{constructor(){this.speed=2}load(t){t&&t.speed!==void 0&&(this.speed=t.speed)}}class WS{constructor(){this.enable=!0,this.retries=0}load(t){t&&(t.enable!==void 0&&(this.enable=t.enable),t.retries!==void 0&&(this.retries=t.retries))}}class Hi{constructor(){this.value=0}load(t){t&&t.value!==void 0&&(this.value=J(t.value))}}class HS extends Hi{constructor(){super(),this.animation=new $f}load(t){if(super.load(t),!t)return;const n=t.animation;n!==void 0&&this.animation.load(n)}}class Yy extends HS{constructor(){super(),this.animation=new Af}load(t){super.load(t)}}class jp extends Hi{constructor(){super(),this.value=1}}class Xy{constructor(){this.horizontal=new jp,this.vertical=new jp}load(t){t&&(this.horizontal.load(t.horizontal),this.vertical.load(t.vertical))}}class VS{constructor(){this.absorb=new US,this.bounce=new Xy,this.enable=!1,this.maxSpeed=50,this.mode=kr.bounce,this.overlap=new WS}load(t){t&&(this.absorb.load(t.absorb),this.bounce.load(t.bounce),t.enable!==void 0&&(this.enable=t.enable),t.maxSpeed!==void 0&&(this.maxSpeed=J(t.maxSpeed)),t.mode!==void 0&&(this.mode=t.mode),this.overlap.load(t.overlap))}}class YS{constructor(){this.close=!0,this.fill=!0,this.options={},this.type=[]}load(t){if(!t)return;const n=t.options;if(n!==void 0)for(const i in n){const r=n[i];r&&(this.options[i]=Ze(this.options[i]??{},r))}t.close!==void 0&&(this.close=t.close),t.fill!==void 0&&(this.fill=t.fill),t.type!==void 0&&(this.type=t.type)}}class XS{constructor(){this.offset=0,this.value=90}load(t){t&&(t.offset!==void 0&&(this.offset=J(t.offset)),t.value!==void 0&&(this.value=J(t.value)))}}class qS{constructor(){this.distance=200,this.enable=!1,this.rotate={x:3e3,y:3e3}}load(t){if(t&&(t.distance!==void 0&&(this.distance=J(t.distance)),t.enable!==void 0&&(this.enable=t.enable),t.rotate)){const n=t.rotate.x;n!==void 0&&(this.rotate.x=n);const i=t.rotate.y;i!==void 0&&(this.rotate.y=i)}}}class QS{constructor(){this.x=50,this.y=50,this.mode=jr.percent,this.radius=0}load(t){t&&(t.x!==void 0&&(this.x=t.x),t.y!==void 0&&(this.y=t.y),t.mode!==void 0&&(this.mode=t.mode),t.radius!==void 0&&(this.radius=t.radius))}}class GS{constructor(){this.acceleration=9.81,this.enable=!1,this.inverse=!1,this.maxSpeed=50}load(t){t&&(t.acceleration!==void 0&&(this.acceleration=J(t.acceleration)),t.enable!==void 0&&(this.enable=t.enable),t.inverse!==void 0&&(this.inverse=t.inverse),t.maxSpeed!==void 0&&(this.maxSpeed=J(t.maxSpeed)))}}class KS{constructor(){this.clamp=!0,this.delay=new Hi,this.enable=!1,this.options={}}load(t){t&&(t.clamp!==void 0&&(this.clamp=t.clamp),this.delay.load(t.delay),t.enable!==void 0&&(this.enable=t.enable),this.generator=t.generator,t.options&&(this.options=Ze(this.options,t.options)))}}class ZS{load(t){t&&(t.color!==void 0&&(this.color=Je.create(this.color,t.color)),t.image!==void 0&&(this.image=t.image))}}class JS{constructor(){this.enable=!1,this.length=10,this.fill=new ZS}load(t){t&&(t.enable!==void 0&&(this.enable=t.enable),t.fill!==void 0&&this.fill.load(t.fill),t.length!==void 0&&(this.length=t.length))}}var Te;(function(e){e.bounce="bounce",e.none="none",e.out="out",e.destroy="destroy",e.split="split"})(Te||(Te={}));class ek{constructor(){this.default=Te.out}load(t){t&&(t.default!==void 0&&(this.default=t.default),this.bottom=t.bottom??t.default,this.left=t.left??t.default,this.right=t.right??t.default,this.top=t.top??t.default)}}class tk{constructor(){this.acceleration=0,this.enable=!1}load(t){t&&(t.acceleration!==void 0&&(this.acceleration=J(t.acceleration)),t.enable!==void 0&&(this.enable=t.enable),t.position&&(this.position=Ze({},t.position)))}}class nk{constructor(){this.angle=new XS,this.attract=new qS,this.center=new QS,this.decay=0,this.distance={},this.direction=Fe.none,this.drift=0,this.enable=!1,this.gravity=new GS,this.path=new KS,this.outModes=new ek,this.random=!1,this.size=!1,this.speed=2,this.spin=new tk,this.straight=!1,this.trail=new JS,this.vibrate=!1,this.warp=!1}load(t){if(!t)return;this.angle.load(si(t.angle)?{value:t.angle}:t.angle),this.attract.load(t.attract),this.center.load(t.center),t.decay!==void 0&&(this.decay=J(t.decay)),t.direction!==void 0&&(this.direction=t.direction),t.distance!==void 0&&(this.distance=si(t.distance)?{horizontal:t.distance,vertical:t.distance}:{...t.distance}),t.drift!==void 0&&(this.drift=J(t.drift)),t.enable!==void 0&&(this.enable=t.enable),this.gravity.load(t.gravity);const n=t.outModes;n!==void 0&&(fr(n)?this.outModes.load(n):this.outModes.load({default:n})),this.path.load(t.path),t.random!==void 0&&(this.random=t.random),t.size!==void 0&&(this.size=t.size),t.speed!==void 0&&(this.speed=J(t.speed)),this.spin.load(t.spin),t.straight!==void 0&&(this.straight=t.straight),this.trail.load(t.trail),t.vibrate!==void 0&&(this.vibrate=t.vibrate),t.warp!==void 0&&(this.warp=t.warp)}}class ik extends Af{constructor(){super(),this.destroy=Fi.none,this.speed=2}load(t){super.load(t),t&&t.destroy!==void 0&&(this.destroy=t.destroy)}}class rk extends Yy{constructor(){super(),this.animation=new ik,this.value=1}load(t){if(!t)return;super.load(t);const n=t.animation;n!==void 0&&this.animation.load(n)}}class ok{constructor(){this.enable=!1,this.width=1920,this.height=1080}load(t){if(!t)return;t.enable!==void 0&&(this.enable=t.enable);const n=t.width;n!==void 0&&(this.width=n);const i=t.height;i!==void 0&&(this.height=i)}}var Jo;(function(e){e.delete="delete",e.wait="wait"})(Jo||(Jo={}));class sk{constructor(){this.mode=Jo.delete,this.value=0}load(t){t&&(t.mode!==void 0&&(this.mode=t.mode),t.value!==void 0&&(this.value=t.value))}}class ak{constructor(){this.density=new ok,this.limit=new sk,this.value=0}load(t){t&&(this.density.load(t.density),this.limit.load(t.limit),t.value!==void 0&&(this.value=t.value))}}class lk{constructor(){this.blur=0,this.color=new Je,this.enable=!1,this.offset={x:0,y:0},this.color.value="#000"}load(t){t&&(t.blur!==void 0&&(this.blur=t.blur),this.color=Je.create(this.color,t.color),t.enable!==void 0&&(this.enable=t.enable),t.offset!==void 0&&(t.offset.x!==void 0&&(this.offset.x=t.offset.x),t.offset.y!==void 0&&(this.offset.y=t.offset.y)))}}class ck{constructor(){this.close=!0,this.fill=!0,this.options={},this.type="circle"}load(t){if(!t)return;const n=t.options;if(n!==void 0)for(const i in n){const r=n[i];r&&(this.options[i]=Ze(this.options[i]??{},r))}t.close!==void 0&&(this.close=t.close),t.fill!==void 0&&(this.fill=t.fill),t.type!==void 0&&(this.type=t.type)}}class uk extends Af{constructor(){super(),this.destroy=Fi.none,this.speed=5}load(t){super.load(t),t&&t.destroy!==void 0&&(this.destroy=t.destroy)}}class dk extends Yy{constructor(){super(),this.animation=new uk,this.value=3}load(t){if(super.load(t),!t)return;const n=t.animation;n!==void 0&&this.animation.load(n)}}class Fp{constructor(){this.width=0}load(t){t&&(t.color!==void 0&&(this.color=Zo.create(this.color,t.color)),t.width!==void 0&&(this.width=J(t.width)),t.opacity!==void 0&&(this.opacity=J(t.opacity)))}}class fk extends Hi{constructor(){super(),this.opacityRate=1,this.sizeRate=1,this.velocityRate=1}load(t){super.load(t),t&&(t.opacityRate!==void 0&&(this.opacityRate=t.opacityRate),t.sizeRate!==void 0&&(this.sizeRate=t.sizeRate),t.velocityRate!==void 0&&(this.velocityRate=t.velocityRate))}}class hk{constructor(t,n){this._engine=t,this._container=n,this.bounce=new Xy,this.collisions=new VS,this.color=new Zo,this.color.value="#fff",this.effect=new YS,this.groups={},this.move=new nk,this.number=new ak,this.opacity=new rk,this.reduceDuplicates=!1,this.shadow=new lk,this.shape=new ck,this.size=new dk,this.stroke=new Fp,this.zIndex=new fk}load(t){if(!t)return;if(t.groups!==void 0)for(const i of Object.keys(t.groups)){if(!Object.hasOwn(t.groups,i))continue;const r=t.groups[i];r!==void 0&&(this.groups[i]=Ze(this.groups[i]??{},r))}t.reduceDuplicates!==void 0&&(this.reduceDuplicates=t.reduceDuplicates),this.bounce.load(t.bounce),this.color.load(Zo.create(this.color,t.color)),this.effect.load(t.effect),this.move.load(t.move),this.number.load(t.number),this.opacity.load(t.opacity),this.shape.load(t.shape),this.size.load(t.size),this.shadow.load(t.shadow),this.zIndex.load(t.zIndex),this.collisions.load(t.collisions),t.interactivity!==void 0&&(this.interactivity=Ze({},t.interactivity));const n=t.stroke;if(n&&(this.stroke=Ut(n,i=>{const r=new Fp;return r.load(i),r})),this._container){const i=this._engine.updaters.get(this._container);if(i)for(const o of i)o.loadOptions&&o.loadOptions(this,t);const r=this._engine.interactors.get(this._container);if(r)for(const o of r)o.loadParticlesOptions&&o.loadParticlesOptions(this,t)}}}function qy(e,...t){for(const n of t)e.load(n)}function Qy(e,t,...n){const i=new hk(e,t);return qy(i,...n),i}class pk{constructor(t,n){this._findDefaultTheme=i=>this.themes.find(r=>r.default.value&&r.default.mode===i)??this.themes.find(r=>r.default.value&&r.default.mode===Wn.any),this._importPreset=i=>{this.load(this._engine.getPreset(i))},this._engine=t,this._container=n,this.autoPlay=!0,this.background=new ES,this.backgroundMask=new TS,this.clear=!0,this.defaultThemes={},this.delay=0,this.fullScreen=new OS,this.detectRetina=!0,this.duration=0,this.fpsLimit=120,this.interactivity=new Vy(t,n),this.manualParticles=[],this.particles=Qy(this._engine,this._container),this.pauseOnBlur=!0,this.pauseOnOutsideViewport=!0,this.responsive=[],this.smooth=!1,this.style={},this.themes=[],this.zLayers=100}load(t){var s,a;if(!t)return;t.preset!==void 0&&Ut(t.preset,l=>this._importPreset(l)),t.autoPlay!==void 0&&(this.autoPlay=t.autoPlay),t.clear!==void 0&&(this.clear=t.clear),t.key!==void 0&&(this.key=t.key),t.name!==void 0&&(this.name=t.name),t.delay!==void 0&&(this.delay=J(t.delay));const n=t.detectRetina;n!==void 0&&(this.detectRetina=n),t.duration!==void 0&&(this.duration=J(t.duration));const i=t.fpsLimit;i!==void 0&&(this.fpsLimit=i),t.pauseOnBlur!==void 0&&(this.pauseOnBlur=t.pauseOnBlur),t.pauseOnOutsideViewport!==void 0&&(this.pauseOnOutsideViewport=t.pauseOnOutsideViewport),t.zLayers!==void 0&&(this.zLayers=t.zLayers),this.background.load(t.background);const r=t.fullScreen;Ty(r)?this.fullScreen.enable=r:this.fullScreen.load(r),this.backgroundMask.load(t.backgroundMask),this.interactivity.load(t.interactivity),t.manualParticles&&(this.manualParticles=t.manualParticles.map(l=>{const c=new LS;return c.load(l),c})),this.particles.load(t.particles),this.style=Ze(this.style,t.style),this._engine.loadOptions(this,t),t.smooth!==void 0&&(this.smooth=t.smooth);const o=this._engine.interactors.get(this._container);if(o)for(const l of o)l.loadOptions&&l.loadOptions(this,t);if(t.responsive!==void 0)for(const l of t.responsive){const c=new jS;c.load(l),this.responsive.push(c)}if(this.responsive.sort((l,c)=>l.maxWidth-c.maxWidth),t.themes!==void 0)for(const l of t.themes){const c=this.themes.find(u=>u.name===l.name);if(c)c.load(l);else{const u=new NS;u.load(l),this.themes.push(u)}}this.defaultThemes.dark=(s=this._findDefaultTheme(Wn.dark))==null?void 0:s.name,this.defaultThemes.light=(a=this._findDefaultTheme(Wn.light))==null?void 0:a.name}setResponsive(t,n,i){this.load(i);const r=this.responsive.find(o=>o.mode===_i.screen&&screen?o.maxWidth>screen.availWidth:o.maxWidth*n>t);return this.load(r==null?void 0:r.options),r==null?void 0:r.maxWidth}setTheme(t){if(t){const n=this.themes.find(i=>i.name===t);n&&this.load(n.options)}else{const n=$y("(prefers-color-scheme: dark)"),i=n==null?void 0:n.matches,r=this._findDefaultTheme(i?Wn.dark:Wn.light);r&&this.load(r.options)}}}var Ur;(function(e){e.external="external",e.particles="particles"})(Ur||(Ur={}));class mk{constructor(t,n){this.container=n,this._engine=t,this._interactors=[],this._externalInteractors=[],this._particleInteractors=[]}externalInteract(t){for(const n of this._externalInteractors)n.isEnabled()&&n.interact(t)}handleClickMode(t){var n;for(const i of this._externalInteractors)(n=i.handleClickMode)==null||n.call(i,t)}async init(){this._interactors=await this._engine.getInteractors(this.container,!0),this._externalInteractors=[],this._particleInteractors=[];for(const t of this._interactors){switch(t.type){case Ur.external:this._externalInteractors.push(t);break;case Ur.particles:this._particleInteractors.push(t);break}t.init()}}particlesInteract(t,n){for(const i of this._externalInteractors)i.clear(t,n);for(const i of this._particleInteractors)i.isEnabled(t)&&i.interact(t,n)}reset(t){for(const n of this._externalInteractors)n.isEnabled()&&n.reset(t);for(const n of this._particleInteractors)n.isEnabled(t)&&n.reset(t)}}var nn;(function(e){e.normal="normal",e.inside="inside",e.outside="outside"})(nn||(nn={}));const Np=0,hd=2,Ls=.5,gk=2,Bp="random";function yk(e,t,n,i){const r=t.options[e];if(r)return Ze({close:t.close,fill:t.fill},Gt(r,n,i))}function vk(e,t,n,i){const r=t.options[e];if(r)return Ze({close:t.close,fill:t.fill},Gt(r,n,i))}function Up(e){if(!ke(e.outMode,e.checkModes))return;const t=e.radius*hd;e.coord>e.maxCoord-t?e.setCb(-e.radius):e.coord<t&&e.setCb(e.radius)}class wk{constructor(t,n){this.container=n,this._calcPosition=(i,r,o,s=Np)=>{for(const[,v]of i.plugins){const m=v.particlePosition!==void 0?v.particlePosition(r,this):void 0;if(m)return yt.create(m.x,m.y,o)}const a=i.canvas.size,l=eS({size:a,position:r}),c=yt.create(l.x,l.y,o),u=this.getRadius(),h=this.options.move.outModes,f=v=>{Up({outMode:v,checkModes:[Te.bounce],coord:c.x,maxCoord:i.canvas.size.width,setCb:m=>c.x+=m,radius:u})},y=v=>{Up({outMode:v,checkModes:[Te.bounce],coord:c.y,maxCoord:i.canvas.size.height,setCb:m=>c.y+=m,radius:u})};return f(h.left??h.default),f(h.right??h.default),y(h.top??h.default),y(h.bottom??h.default),this._checkOverlap(c,s)?this._calcPosition(i,void 0,o,s+1):c},this._calculateVelocity=()=>{const i=Jb(this.direction),r=i.copy(),o=this.options.move;if(o.direction===Fe.inside||o.direction===Fe.outside)return r;const s=ni(W(o.angle.value)),a=ni(W(o.angle.offset)),l={left:a-s*Ls,right:a+s*Ls};return o.straight||(r.angle+=St(J(l.left,l.right))),o.random&&typeof o.speed=="number"&&(r.length*=de()),r},this._checkOverlap=(i,r=Np)=>{const o=this.options.collisions,s=this.getRadius();if(!o.enable)return!1;const a=o.overlap;if(a.enable)return!1;const l=a.retries;if(l>=0&&r>l)throw new Error(`${Nt} particle is overlapping and can't be placed`);return!!this.container.particles.find(u=>_t(i,u.position)<s+u.getRadius())},this._getRollColor=i=>{if(!i||!this.roll||!this.backColor&&!this.roll.alter)return i;const r=1,o=0,s=this.roll.horizontal&&this.roll.vertical?hd*r:r,a=this.roll.horizontal?Math.PI*Ls:o;return Math.floor(((this.roll.angle??o)+a)/(Math.PI/s))%hd?this.backColor?this.backColor:this.roll.alter?kS(i,this.roll.alter.type,this.roll.alter.value):i:i},this._initPosition=i=>{const r=this.container,o=W(this.options.zIndex.value),s=0;this.position=this._calcPosition(r,i,Bt(o,s,r.zLayers)),this.initialPosition=this.position.copy();const a=r.canvas.size,l=0;switch(this.moveCenter={...jy(this.options.move.center,a),radius:this.options.move.center.radius??l,mode:this.options.move.center.mode??jr.percent},this.direction=Zb(this.options.move.direction,this.position,this.moveCenter),this.options.move.direction){case Fe.inside:this.outType=nn.inside;break;case Fe.outside:this.outType=nn.outside;break}this.offset=ze.origin},this._engine=t}destroy(t){var o,s,a;if(this.unbreakable||this.destroyed)return;this.destroyed=!0,this.bubble.inRange=!1,this.slow.inRange=!1;const n=this.container,i=this.pathGenerator,r=n.shapeDrawers.get(this.shape);(o=r==null?void 0:r.particleDestroy)==null||o.call(r,this);for(const[,l]of n.plugins)(s=l.particleDestroyed)==null||s.call(l,this,t);for(const l of n.particles.updaters)(a=l.particleDestroyed)==null||a.call(l,this,t);i==null||i.reset(this),this._engine.dispatchEvent(nt.particleDestroyed,{container:this.container,data:{particle:this}})}draw(t){const n=this.container,i=n.canvas;for(const[,r]of n.plugins)i.drawParticlePlugin(r,this,t);i.drawParticle(this,t)}getFillColor(){return this._getRollColor(this.bubble.color??$p(this.color))}getMass(){return this.getRadius()**gk*Math.PI*Ls}getPosition(){return{x:this.position.x+this.offset.x,y:this.position.y+this.offset.y,z:this.position.z}}getRadius(){return this.bubble.radius??this.size.value}getStrokeColor(){return this._getRollColor(this.bubble.color??$p(this.strokeColor))}init(t,n,i,r){var P,I,O,A,E,D;const o=this.container,s=this._engine;this.id=t,this.group=r,this.effectClose=!0,this.effectFill=!0,this.shapeClose=!0,this.shapeFill=!0,this.pathRotation=!1,this.lastPathTime=0,this.destroyed=!1,this.unbreakable=!1,this.isRotating=!1,this.rotation=0,this.misplaced=!1,this.retina={maxDistance:{}},this.outType=nn.normal,this.ignoresResizeRatio=!0;const a=o.retina.pixelRatio,l=o.actualOptions,c=Qy(this._engine,o,l.particles),{reduceDuplicates:u}=c,h=c.effect.type,f=c.shape.type;this.effect=Gt(h,this.id,u),this.shape=Gt(f,this.id,u);const y=c.effect,v=c.shape;if(i){if((P=i.effect)!=null&&P.type){const M=i.effect.type,L=Gt(M,this.id,u);L&&(this.effect=L,y.load(i.effect))}if((I=i.shape)!=null&&I.type){const M=i.shape.type,L=Gt(M,this.id,u);L&&(this.shape=L,v.load(i.shape))}}if(this.effect===Bp){const M=[...this.container.effectDrawers.keys()];this.effect=M[Math.floor(Math.random()*M.length)]}if(this.shape===Bp){const M=[...this.container.shapeDrawers.keys()];this.shape=M[Math.floor(Math.random()*M.length)]}this.effectData=yk(this.effect,y,this.id,u),this.shapeData=vk(this.shape,v,this.id,u),c.load(i);const m=this.effectData;m&&c.load(m.particles);const C=this.shapeData;C&&c.load(C.particles);const w=new Vy(s,o);w.load(o.actualOptions.interactivity),w.load(c.interactivity),this.interactivity=w,this.effectFill=(m==null?void 0:m.fill)??c.effect.fill,this.effectClose=(m==null?void 0:m.close)??c.effect.close,this.shapeFill=(C==null?void 0:C.fill)??c.shape.fill,this.shapeClose=(C==null?void 0:C.close)??c.shape.close,this.options=c;const g=this.options.move.path;this.pathDelay=W(g.delay.value)*Qe,g.generator&&(this.pathGenerator=this._engine.getPathGenerator(g.generator),this.pathGenerator&&o.addPath(g.generator,this.pathGenerator)&&this.pathGenerator.init(o)),o.retina.initParticle(this),this.size=Ly(this.options.size,a),this.bubble={inRange:!1},this.slow={inRange:!1,factor:1},this._initPosition(n),this.initialVelocity=this._calculateVelocity(),this.velocity=this.initialVelocity.copy();const d=1;this.moveDecay=d-W(this.options.move.decay);const p=o.particles;p.setLastZIndex(this.position.z),this.zIndexFactor=this.position.z/o.zLayers,this.sides=24;let x=o.effectDrawers.get(this.effect);x||(x=this._engine.getEffectDrawer(this.effect),x&&o.effectDrawers.set(this.effect,x)),x!=null&&x.loadEffect&&x.loadEffect(this);let b=o.shapeDrawers.get(this.shape);b||(b=this._engine.getShapeDrawer(this.shape),b&&o.shapeDrawers.set(this.shape,b)),b!=null&&b.loadShape&&b.loadShape(this);const k=b==null?void 0:b.getSidesCount;k&&(this.sides=k(this)),this.spawning=!1,this.shadowColor=tn(this.options.shadow.color);for(const M of p.updaters)M.init(this);for(const M of p.movers)(O=M.init)==null||O.call(M,this);(A=x==null?void 0:x.particleInit)==null||A.call(x,o,this),(E=b==null?void 0:b.particleInit)==null||E.call(b,o,this);for(const[,M]of o.plugins)(D=M.particleCreated)==null||D.call(M,this)}isInsideCanvas(){const t=this.getRadius(),n=this.container.canvas.size,i=this.position;return i.x>=-t&&i.y>=-t&&i.y<=n.height+t&&i.x<=n.width+t}isVisible(){return!this.destroyed&&!this.spawning&&this.isInsideCanvas()}reset(){var t;for(const n of this.container.particles.updaters)(t=n.reset)==null||t.call(n,this)}}class xk{constructor(t,n){this.position=t,this.particle=n}}var _r;(function(e){e.circle="circle",e.rectangle="rectangle"})(_r||(_r={}));const oo=2;class Gy{constructor(t,n,i){this.position={x:t,y:n},this.type=i}}class Ge extends Gy{constructor(t,n,i){super(t,n,_r.circle),this.radius=i}contains(t){return _t(t,this.position)<=this.radius}intersects(t){const n=this.position,i=t.position,r={x:Math.abs(i.x-n.x),y:Math.abs(i.y-n.y)},o=this.radius;if(t instanceof Ge||t.type===_r.circle){const s=t,a=o+s.radius,l=Math.sqrt(r.x**oo+r.y**oo);return a>l}else if(t instanceof on||t.type===_r.rectangle){const s=t,{width:a,height:l}=s.size;return Math.pow(r.x-a,oo)+Math.pow(r.y-l,oo)<=o**oo||r.x<=o+a&&r.y<=o+l||r.x<=a||r.y<=l}return!1}}class on extends Gy{constructor(t,n,i,r){super(t,n,_r.rectangle),this.size={height:r,width:i}}contains(t){const n=this.size.width,i=this.size.height,r=this.position;return t.x>=r.x&&t.x<=r.x+n&&t.y>=r.y&&t.y<=r.y+i}intersects(t){if(t instanceof Ge)return t.intersects(this);const n=this.size.width,i=this.size.height,r=this.position,o=t.position,s=t instanceof on?t.size:{width:0,height:0},a=s.width,l=s.height;return o.x<r.x+n&&o.x+a>r.x&&o.y<r.y+i&&o.y+l>r.y}}const so=.5,bk=2,Sk=4;class Ga{constructor(t,n){this.rectangle=t,this.capacity=n,this._subdivide=()=>{const{x:i,y:r}=this.rectangle.position,{width:o,height:s}=this.rectangle.size,{capacity:a}=this;for(let l=0;l<Sk;l++){const c=l%bk;this._subs.push(new Ga(new on(i+o*so*c,r+s*so*(Math.round(l*so)-c),o*so,s*so),a))}this._divided=!0},this._points=[],this._divided=!1,this._subs=[]}insert(t){return this.rectangle.contains(t.position)?this._points.length<this.capacity?(this._points.push(t),!0):(this._divided||this._subdivide(),this._subs.some(n=>n.insert(t))):!1}query(t,n){const i=[];if(!t.intersects(this.rectangle))return[];for(const r of this._points)!t.contains(r.position)&&_t(t.position,r.position)>r.particle.getRadius()&&(!n||n(r.particle))||i.push(r.particle);if(this._divided)for(const r of this._subs)i.push(...r.query(t,n));return i}queryCircle(t,n,i){return this.query(new Ge(t.x,t.y,n),i)}queryRectangle(t,n,i){return this.query(new on(t.x,t.y,n.width,n.height),i)}}const Wp=4,kk=2,_k=1,Hp=e=>{const{height:t,width:n}=e,i=-.25,r=1.5;return new on(i*n,i*t,r*n,r*t)};class Ck{constructor(t,n){this._addToPool=(...r)=>{this._pool.push(...r)},this._applyDensity=(r,o,s)=>{var v;const a=r.number;if(!((v=r.number.density)!=null&&v.enable)){s===void 0?this._limit=a.limit.value:a.limit&&this._groupLimits.set(s,a.limit.value);return}const l=this._initDensityFactor(a.density),c=a.value,u=0,h=a.limit.value>u?a.limit.value:c,f=Math.min(c,h)*l+o,y=Math.min(this.count,this.filter(m=>m.group===s).length);s===void 0?this._limit=a.limit.value*l:this._groupLimits.set(s,a.limit.value*l),y<f?this.push(Math.abs(f-y),void 0,r,s):y>f&&this.removeQuantity(y-f,s)},this._initDensityFactor=r=>{const o=this._container,s=1;if(!o.canvas.element||!r.enable)return s;const a=o.canvas.element,l=o.retina.pixelRatio;return a.width*a.height/(r.height*r.width*l**kk)},this._pushParticle=(r,o,s,a)=>{try{let l=this._pool.pop();l||(l=new wk(this._engine,this._container)),l.init(this._nextId,r,o,s);let c=!0;return a&&(c=a(l)),c?(this._array.push(l),this._zArray.push(l),this._nextId++,this._engine.dispatchEvent(nt.particleAdded,{container:this._container,data:{particle:l}}),l):void 0}catch(l){Ni().warning(`${Nt} adding particle: ${l}`)}},this._removeParticle=(r,o,s)=>{const a=this._array[r];if(!a||a.group!==o)return!1;const l=this._zArray.indexOf(a),c=1;return this._array.splice(r,c),this._zArray.splice(l,c),a.destroy(s),this._engine.dispatchEvent(nt.particleRemoved,{container:this._container,data:{particle:a}}),this._addToPool(a),!0},this._engine=t,this._container=n,this._nextId=0,this._array=[],this._zArray=[],this._pool=[],this._limit=0,this._groupLimits=new Map,this._needsSort=!1,this._lastZIndex=0,this._interactionManager=new mk(t,n),this._pluginsInitialized=!1;const i=n.canvas.size;this.quadTree=new Ga(Hp(i),Wp),this.movers=[],this.updaters=[]}get count(){return this._array.length}addManualParticles(){const t=this._container;t.actualOptions.manualParticles.forEach(i=>this.addParticle(i.position?jy(i.position,t.canvas.size):void 0,i.options))}addParticle(t,n,i,r){const o=this._container.actualOptions.particles.number.limit.mode,s=i===void 0?this._limit:this._groupLimits.get(i)??this._limit,a=this.count;if(s>0)switch(o){case Jo.delete:{const h=a+1-s;h>0&&this.removeQuantity(h);break}case Jo.wait:if(a>=s)return;break}return this._pushParticle(t,n,i,r)}clear(){this._array=[],this._zArray=[],this._pluginsInitialized=!1}destroy(){this._array=[],this._zArray=[],this.movers=[],this.updaters=[]}draw(t){const n=this._container,i=n.canvas;i.clear(),this.update(t);for(const[,r]of n.plugins)i.drawPlugin(r,t);for(const r of this._zArray)r.draw(t)}filter(t){return this._array.filter(t)}find(t){return this._array.find(t)}get(t){return this._array[t]}handleClickMode(t){this._interactionManager.handleClickMode(t)}async init(){var r,o;const t=this._container,n=t.actualOptions;this._lastZIndex=0,this._needsSort=!1,await this.initPlugins();let i=!1;for(const[,s]of t.plugins)if(i=((r=s.particlesInitialization)==null?void 0:r.call(s))??i,i)break;if(this.addManualParticles(),!i){const s=n.particles,a=s.groups;for(const l in a){const c=a[l];for(let u=this.count,h=0;h<((o=c.number)==null?void 0:o.value)&&u<s.number.value;u++,h++)this.addParticle(void 0,c,l)}for(let l=this.count;l<s.number.value;l++)this.addParticle()}}async initPlugins(){if(this._pluginsInitialized)return;const t=this._container;this.movers=await this._engine.getMovers(t,!0),this.updaters=await this._engine.getUpdaters(t,!0),await this._interactionManager.init();for(const[,n]of t.pathGenerators)n.init(t)}push(t,n,i,r){for(let o=0;o<t;o++)this.addParticle(n==null?void 0:n.position,i,r)}async redraw(){this.clear(),await this.init(),this.draw({value:0,factor:0})}remove(t,n,i){this.removeAt(this._array.indexOf(t),void 0,n,i)}removeAt(t,n=_k,i,r){if(t<0||t>this.count)return;let s=0;for(let a=t;s<n&&a<this.count;a++)this._removeParticle(a--,i,r)&&s++}removeQuantity(t,n){this.removeAt(0,t,n)}setDensity(){const t=this._container.actualOptions,n=t.particles.groups,i=0;for(const r in n)this._applyDensity(n[r],i,r);this._applyDensity(t.particles,t.manualParticles.length)}setLastZIndex(t){this._lastZIndex=t,this._needsSort=this._needsSort||this._lastZIndex<t}setResizeFactor(t){this._resizeFactor=t}update(t){var o,s;const n=this._container,i=new Set;this.quadTree=new Ga(Hp(n.canvas.size),Wp);for(const[,a]of n.pathGenerators)a.update();for(const[,a]of n.plugins)(o=a.update)==null||o.call(a,t);const r=this._resizeFactor;for(const a of this._array){r&&!a.ignoresResizeRatio&&(a.position.x*=r.width,a.position.y*=r.height,a.initialPosition.x*=r.width,a.initialPosition.y*=r.height),a.ignoresResizeRatio=!1,this._interactionManager.reset(a);for(const[,l]of this._container.plugins){if(a.destroyed)break;(s=l.particleUpdate)==null||s.call(l,a,t)}for(const l of this.movers)l.isEnabled(a)&&l.move(a,t);if(a.destroyed){i.add(a);continue}this.quadTree.insert(new xk(a.getPosition(),a))}if(i.size){const a=l=>!i.has(l);this._array=this.filter(a),this._zArray=this._zArray.filter(a);for(const l of i)this._engine.dispatchEvent(nt.particleRemoved,{container:this._container,data:{particle:l}});this._addToPool(...i)}this._interactionManager.externalInteract(t);for(const a of this._array){for(const l of this.updaters)l.update(a,t);!a.destroyed&&!a.spawning&&this._interactionManager.particlesInteract(a,t)}if(delete this._resizeFactor,this._needsSort){const a=this._zArray;a.sort((c,u)=>u.position.z-c.position.z||c.id-u.id);const l=1;this._lastZIndex=a[a.length-l].position.z,this._needsSort=!1}}}const Vp=1,Yp=1;class Pk{constructor(t){this.container=t,this.pixelRatio=Vp,this.reduceFactor=Yp}init(){const t=this.container,n=t.actualOptions;this.pixelRatio=!n.detectRetina||Bi()?Vp:window.devicePixelRatio,this.reduceFactor=Yp;const i=this.pixelRatio,r=t.canvas;if(r.element){const a=r.element;r.size.width=a.offsetWidth*i,r.size.height=a.offsetHeight*i}const o=n.particles,s=o.move;this.maxSpeed=W(s.gravity.maxSpeed)*i,this.sizeAnimationSpeed=W(o.size.animation.speed)*i}initParticle(t){const n=t.options,i=this.pixelRatio,r=n.move,o=r.distance,s=t.retina;s.moveDrift=W(r.drift)*i,s.moveSpeed=W(r.speed)*i,s.sizeAnimationSpeed=W(n.size.animation.speed)*i;const a=s.maxDistance;a.horizontal=o.horizontal!==void 0?o.horizontal*i:void 0,a.vertical=o.vertical!==void 0?o.vertical*i:void 0,s.maxSpeed=W(r.gravity.maxSpeed)*i}}function xe(e){return e&&!e.destroyed}const Yc=60;function Ek(e,t=Yc,n=!1){return{value:e,factor:n?Yc/t:Yc*e/Qe}}function qi(e,t,...n){const i=new pk(e,t);return qy(i,...n),i}let Ik=class{constructor(t,n,i){this._intersectionManager=r=>{if(!(!xe(this)||!this.actualOptions.pauseOnOutsideViewport))for(const o of r)o.target===this.interactivity.element&&(o.isIntersecting?this.play():this.pause())},this._nextFrame=r=>{try{if(!this._smooth&&this._lastFrameTime!==void 0&&r<this._lastFrameTime+Qe/this.fpsLimit){this.draw(!1);return}this._lastFrameTime??(this._lastFrameTime=r);const o=Ek(r-this._lastFrameTime,this.fpsLimit,this._smooth);if(this.addLifeTime(o.value),this._lastFrameTime=r,o.value>Qe){this.draw(!1);return}if(this.particles.draw(o),!this.alive()){this.destroy();return}this.animationStatus&&this.draw(!1)}catch(o){Ni().error(`${Nt} in animation loop`,o)}},this._engine=t,this.id=Symbol(n),this.fpsLimit=120,this._smooth=!1,this._delay=0,this._duration=0,this._lifeTime=0,this._firstStart=!0,this.started=!1,this.destroyed=!1,this._paused=!0,this._lastFrameTime=0,this.zLayers=100,this.pageHidden=!1,this._clickHandlers=new Map,this._sourceOptions=i,this._initialSourceOptions=i,this.retina=new Pk(this),this.canvas=new CS(this),this.particles=new Ck(this._engine,this),this.pathGenerators=new Map,this.interactivity={mouse:{clicking:!1,inside:!1}},this.plugins=new Map,this.effectDrawers=new Map,this.shapeDrawers=new Map,this._options=qi(this._engine,this),this.actualOptions=qi(this._engine,this),this._eventListeners=new PS(this),this._intersectionObserver=rS(r=>this._intersectionManager(r)),this._engine.dispatchEvent(nt.containerBuilt,{container:this})}get animationStatus(){return!this._paused&&!this.pageHidden&&xe(this)}get options(){return this._options}get sourceOptions(){return this._sourceOptions}addClickHandler(t){if(!xe(this))return;const n=this.interactivity.element;if(!n)return;const i=(h,f,y)=>{if(!xe(this))return;const v=this.retina.pixelRatio,m={x:f.x*v,y:f.y*v},C=this.particles.quadTree.queryCircle(m,y*v);t(h,C)},r=h=>{if(!xe(this))return;const f=h,y={x:f.offsetX||f.clientX,y:f.offsetY||f.clientY};i(h,y,1)},o=()=>{xe(this)&&(c=!0,u=!1)},s=()=>{xe(this)&&(u=!0)},a=h=>{if(xe(this)){if(c&&!u){const f=h,y=1;let v=f.touches[f.touches.length-y];if(!v&&(v=f.changedTouches[f.changedTouches.length-y],!v))return;const m=this.canvas.element,C=m?m.getBoundingClientRect():void 0,w=0,g={x:v.clientX-(C?C.left:w),y:v.clientY-(C?C.top:w)};i(h,g,Math.max(v.radiusX,v.radiusY))}c=!1,u=!1}},l=()=>{xe(this)&&(c=!1,u=!1)};let c=!1,u=!1;this._clickHandlers.set("click",r),this._clickHandlers.set("touchstart",o),this._clickHandlers.set("touchmove",s),this._clickHandlers.set("touchend",a),this._clickHandlers.set("touchcancel",l);for(const[h,f]of this._clickHandlers)n.addEventListener(h,f)}addLifeTime(t){this._lifeTime+=t}addPath(t,n,i=!1){return!xe(this)||!i&&this.pathGenerators.has(t)?!1:(this.pathGenerators.set(t,n),!0)}alive(){return!this._duration||this._lifeTime<=this._duration}clearClickHandlers(){var t;if(xe(this)){for(const[n,i]of this._clickHandlers)(t=this.interactivity.element)==null||t.removeEventListener(n,i);this._clickHandlers.clear()}}destroy(t=!0){var n,i;if(xe(this)){this.stop(),this.clearClickHandlers(),this.particles.destroy(),this.canvas.destroy();for(const[,r]of this.effectDrawers)(n=r.destroy)==null||n.call(r,this);for(const[,r]of this.shapeDrawers)(i=r.destroy)==null||i.call(r,this);for(const r of this.effectDrawers.keys())this.effectDrawers.delete(r);for(const r of this.shapeDrawers.keys())this.shapeDrawers.delete(r);if(this._engine.clearPlugins(this),this.destroyed=!0,t){const r=this._engine.items,o=r.findIndex(a=>a===this);o>=0&&r.splice(o,1)}this._engine.dispatchEvent(nt.containerDestroyed,{container:this})}}draw(t){if(!xe(this))return;let n=t;const i=r=>{n&&(this._lastFrameTime=void 0,n=!1),this._nextFrame(r)};this._drawAnimationFrame=Gb(r=>i(r))}async export(t,n={}){for(const[,i]of this.plugins){if(!i.export)continue;const r=await i.export(t,n);if(r.supported)return r.blob}Ni().error(`${Nt} - Export plugin with type ${t} not found`)}handleClickMode(t){var n;if(xe(this)){this.particles.handleClickMode(t);for(const[,i]of this.plugins)(n=i.handleClickMode)==null||n.call(i,t)}}async init(){var h,f,y,v;if(!xe(this))return;const t=this._engine.getSupportedEffects();for(const m of t){const C=this._engine.getEffectDrawer(m);C&&this.effectDrawers.set(m,C)}const n=this._engine.getSupportedShapes();for(const m of n){const C=this._engine.getShapeDrawer(m);C&&this.shapeDrawers.set(m,C)}await this.particles.initPlugins(),this._options=qi(this._engine,this,this._initialSourceOptions,this.sourceOptions),this.actualOptions=qi(this._engine,this,this._options);const i=await this._engine.getAvailablePlugins(this);for(const[m,C]of i)this.plugins.set(m,C);this.retina.init(),await this.canvas.init(),this.updateActualOptions(),this.canvas.initBackground(),this.canvas.resize();const{zLayers:r,duration:o,delay:s,fpsLimit:a,smooth:l}=this.actualOptions;this.zLayers=r,this._duration=W(o)*Qe,this._delay=W(s)*Qe,this._lifeTime=0;const c=120,u=0;this.fpsLimit=a>u?a:c,this._smooth=l;for(const[,m]of this.effectDrawers)await((h=m.init)==null?void 0:h.call(m,this));for(const[,m]of this.shapeDrawers)await((f=m.init)==null?void 0:f.call(m,this));for(const[,m]of this.plugins)await((y=m.init)==null?void 0:y.call(m));this._engine.dispatchEvent(nt.containerInit,{container:this}),await this.particles.init(),this.particles.setDensity();for(const[,m]of this.plugins)(v=m.particlesSetup)==null||v.call(m);this._engine.dispatchEvent(nt.particlesSetup,{container:this})}async loadTheme(t){xe(this)&&(this._currentTheme=t,await this.refresh())}pause(){var t;if(xe(this)&&(this._drawAnimationFrame!==void 0&&(Kb(this._drawAnimationFrame),delete this._drawAnimationFrame),!this._paused)){for(const[,n]of this.plugins)(t=n.pause)==null||t.call(n);this.pageHidden||(this._paused=!0),this._engine.dispatchEvent(nt.containerPaused,{container:this})}}play(t){if(!xe(this))return;const n=this._paused||t;if(this._firstStart&&!this.actualOptions.autoPlay){this._firstStart=!1;return}if(this._paused&&(this._paused=!1),n)for(const[,i]of this.plugins)i.play&&i.play();this._engine.dispatchEvent(nt.containerPlay,{container:this}),this.draw(n??!1)}async refresh(){if(xe(this))return this.stop(),this.start()}async reset(t){if(xe(this))return this._initialSourceOptions=t,this._sourceOptions=t,this._options=qi(this._engine,this,this._initialSourceOptions,this.sourceOptions),this.actualOptions=qi(this._engine,this,this._options),this.refresh()}async start(){!xe(this)||this.started||(await this.init(),this.started=!0,await new Promise(t=>{const n=async()=>{var i;this._eventListeners.addListeners(),this.interactivity.element instanceof HTMLElement&&this._intersectionObserver&&this._intersectionObserver.observe(this.interactivity.element);for(const[,r]of this.plugins)await((i=r.start)==null?void 0:i.call(r));this._engine.dispatchEvent(nt.containerStarted,{container:this}),this.play(),t()};this._delayTimeout=setTimeout(()=>void n(),this._delay)}))}stop(){var t;if(!(!xe(this)||!this.started)){this._delayTimeout&&(clearTimeout(this._delayTimeout),delete this._delayTimeout),this._firstStart=!0,this.started=!1,this._eventListeners.removeListeners(),this.pause(),this.particles.clear(),this.canvas.stop(),this.interactivity.element instanceof HTMLElement&&this._intersectionObserver&&this._intersectionObserver.unobserve(this.interactivity.element);for(const[,n]of this.plugins)(t=n.stop)==null||t.call(n);for(const n of this.plugins.keys())this.plugins.delete(n);this._sourceOptions=this._options,this._engine.dispatchEvent(nt.containerStopped,{container:this})}}updateActualOptions(){this.actualOptions.responsive=[];const t=this.actualOptions.setResponsive(this.canvas.size.width,this.retina.pixelRatio,this._options);return this.actualOptions.setTheme(this._currentTheme),this._responsiveMaxWidth===t?!1:(this._responsiveMaxWidth=t,!0)}};class Tk{constructor(){this._listeners=new Map}addEventListener(t,n){this.removeEventListener(t,n);let i=this._listeners.get(t);i||(i=[],this._listeners.set(t,i)),i.push(n)}dispatchEvent(t,n){const i=this._listeners.get(t);i==null||i.forEach(r=>r(n))}hasEventListener(t){return!!this._listeners.get(t)}removeAllEventListeners(t){t?this._listeners.delete(t):this._listeners=new Map}removeEventListener(t,n){const i=this._listeners.get(t);if(!i)return;const r=i.length,o=i.indexOf(n);if(o<0)return;const a=1;r===a?this._listeners.delete(t):i.splice(o,a)}}async function Xc(e,t,n,i=!1){let r=t.get(e);return(!r||i)&&(r=await Promise.all([...n.values()].map(o=>o(e))),t.set(e,r)),r}async function Ok(e){const t=Gt(e.url,e.index);if(!t)return e.fallback;const n=await fetch(t);return n.ok?await n.json():(Ni().error(`${Nt} ${n.status} while retrieving config file`),e.fallback)}const Ky="true",Xp="false",qc="canvas",Mk=e=>{let t;if(e instanceof HTMLCanvasElement||e.tagName.toLowerCase()===qc)t=e,t.dataset[Si]||(t.dataset[Si]=Xp);else{const i=e.getElementsByTagName(qc);i.length?(t=i[0],t.dataset[Si]=Xp):(t=document.createElement(qc),t.dataset[Si]=Ky,e.appendChild(t))}const n="100%";return t.style.width||(t.style.width=n),t.style.height||(t.style.height=n),t},Dk=(e,t)=>{let n=t??document.getElementById(e);return n||(n=document.createElement("div"),n.id=e,n.dataset[Si]=Ky,document.body.append(n),n)};class $k{constructor(){this._configs=new Map,this._domArray=[],this._eventDispatcher=new Tk,this._initialized=!1,this.plugins=[],this._initializers={interactors:new Map,movers:new Map,updaters:new Map},this.interactors=new Map,this.movers=new Map,this.updaters=new Map,this.presets=new Map,this.effectDrawers=new Map,this.shapeDrawers=new Map,this.pathGenerators=new Map}get configs(){const t={};for(const[n,i]of this._configs)t[n]=i;return t}get items(){return this._domArray}get version(){return"3.5.0"}addConfig(t){const n=t.key??t.name??"default";this._configs.set(n,t),this._eventDispatcher.dispatchEvent(nt.configAdded,{data:{name:n,config:t}})}async addEffect(t,n,i=!0){Ut(t,r=>{this.getEffectDrawer(r)||this.effectDrawers.set(r,n)}),await this.refresh(i)}addEventListener(t,n){this._eventDispatcher.addEventListener(t,n)}async addInteractor(t,n,i=!0){this._initializers.interactors.set(t,n),await this.refresh(i)}async addMover(t,n,i=!0){this._initializers.movers.set(t,n),await this.refresh(i)}async addParticleUpdater(t,n,i=!0){this._initializers.updaters.set(t,n),await this.refresh(i)}async addPathGenerator(t,n,i=!0){this.getPathGenerator(t)||this.pathGenerators.set(t,n),await this.refresh(i)}async addPlugin(t,n=!0){this.getPlugin(t.id)||this.plugins.push(t),await this.refresh(n)}async addPreset(t,n,i=!1,r=!0){(i||!this.getPreset(t))&&this.presets.set(t,n),await this.refresh(r)}async addShape(t,n=!0){for(const i of t.validTypes)this.getShapeDrawer(i)||this.shapeDrawers.set(i,t);await this.refresh(n)}clearPlugins(t){this.updaters.delete(t),this.movers.delete(t),this.interactors.delete(t)}dispatchEvent(t,n){this._eventDispatcher.dispatchEvent(t,n)}dom(){return this.items}domItem(t){return this.item(t)}async getAvailablePlugins(t){const n=new Map;for(const i of this.plugins)i.needsPlugin(t.actualOptions)&&n.set(i.id,await i.getPlugin(t));return n}getEffectDrawer(t){return this.effectDrawers.get(t)}async getInteractors(t,n=!1){return Xc(t,this.interactors,this._initializers.interactors,n)}async getMovers(t,n=!1){return Xc(t,this.movers,this._initializers.movers,n)}getPathGenerator(t){return this.pathGenerators.get(t)}getPlugin(t){return this.plugins.find(n=>n.id===t)}getPreset(t){return this.presets.get(t)}getShapeDrawer(t){return this.shapeDrawers.get(t)}getSupportedEffects(){return this.effectDrawers.keys()}getSupportedShapes(){return this.shapeDrawers.keys()}async getUpdaters(t,n=!1){return Xc(t,this.updaters,this._initializers.updaters,n)}init(){this._initialized||(this._initialized=!0)}item(t){const{items:n}=this,i=n[t];if(!i||i.destroyed){n.splice(t,1);return}return i}async load(t){var v;const i=t.id??((v=t.element)==null?void 0:v.id)??`tsparticles${Math.floor(de()*1e4)}`,{index:r,url:o}=t,s=o?await Ok({fallback:t.options,url:o,index:r}):t.options,a=Gt(s,r),{items:l}=this,c=l.findIndex(m=>m.id.description===i),u=0,h=new Ik(this,i,a);if(c>=u){const m=this.item(c),C=1,w=0,g=m?C:w;m&&!m.destroyed&&m.destroy(!1),l.splice(c,g,h)}else l.push(h);const f=Dk(i,t.element),y=Mk(f);return h.canvas.loadCanvas(y),await h.start(),h}loadOptions(t,n){this.plugins.forEach(i=>{var r;return(r=i.loadOptions)==null?void 0:r.call(i,t,n)})}loadParticlesOptions(t,n,...i){const r=this.updaters.get(t);r&&r.forEach(o=>{var s;return(s=o.loadOptions)==null?void 0:s.call(o,n,...i)})}async refresh(t=!0){t&&await Promise.all(this.items.map(n=>n.refresh()))}removeEventListener(t,n){this._eventDispatcher.removeEventListener(t,n)}setOnClickHandler(t){const{items:n}=this;if(!n.length)throw new Error(`${Nt} can only set click handlers after calling tsParticles.load()`);n.forEach(i=>i.addClickHandler(t))}}var hr;(function(e){e[e.h=1]="h",e[e.s=2]="s",e[e.l=3]="l",e[e.a=5]="a"})(hr||(hr={}));class Ak{constructor(){this.key="hsl",this.stringPrefix="hsl"}handleColor(t){const n=t.value,i=n.hsl??t.value;if(i.h!==void 0&&i.s!==void 0&&i.l!==void 0)return Fr(i)}handleRangeColor(t){const n=t.value,i=n.hsl??t.value;if(i.h!==void 0&&i.l!==void 0)return Fr({h:W(i.h),l:W(i.l),s:W(i.s)})}parseString(t){if(!t.startsWith("hsl"))return;const n=/hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.%]+)\s*)?\)/i,i=n.exec(t),r=4,o=1,s=10;return i?pS({a:i.length>r?Dy(i[hr.a]):o,h:parseInt(i[hr.h],s),l:parseInt(i[hr.l],s),s:parseInt(i[hr.s],s)}):void 0}}var pr;(function(e){e[e.r=1]="r",e[e.g=2]="g",e[e.b=3]="b",e[e.a=5]="a"})(pr||(pr={}));class Rk{constructor(){this.key="rgb",this.stringPrefix="rgb"}handleColor(t){const n=t.value,i=n.rgb??t.value;if(i.r!==void 0)return i}handleRangeColor(t){const n=t.value,i=n.rgb??t.value;if(i.r!==void 0)return{r:W(i.r),g:W(i.g),b:W(i.b)}}parseString(t){if(!t.startsWith(this.stringPrefix))return;const n=/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([\d.%]+)\s*)?\)/i,i=n.exec(t),r=10;return i?{a:i.length>4?Dy(i[pr.a]):1,b:parseInt(i[pr.b],r),g:parseInt(i[pr.g],r),r:parseInt(i[pr.r],r)}:void 0}}function zk(){const e=new Rk,t=new Ak;Dp(e),Dp(t);const n=new $k;return n.init(),n}class wn{constructor(t){this.type=Ur.external,this.container=t}}class Rf{constructor(t){this.type=Ur.particles,this.container=t}}var $t;(function(e){e.clockwise="clockwise",e.counterClockwise="counter-clockwise",e.random="random"})($t||($t={}));var qp;(function(e){e.linear="linear",e.radial="radial",e.random="random"})(qp||(qp={}));var Oi;(function(e){e.easeInBack="ease-in-back",e.easeInCirc="ease-in-circ",e.easeInCubic="ease-in-cubic",e.easeInLinear="ease-in-linear",e.easeInQuad="ease-in-quad",e.easeInQuart="ease-in-quart",e.easeInQuint="ease-in-quint",e.easeInExpo="ease-in-expo",e.easeInSine="ease-in-sine",e.easeOutBack="ease-out-back",e.easeOutCirc="ease-out-circ",e.easeOutCubic="ease-out-cubic",e.easeOutLinear="ease-out-linear",e.easeOutQuad="ease-out-quad",e.easeOutQuart="ease-out-quart",e.easeOutQuint="ease-out-quint",e.easeOutExpo="ease-out-expo",e.easeOutSine="ease-out-sine",e.easeInOutBack="ease-in-out-back",e.easeInOutCirc="ease-in-out-circ",e.easeInOutCubic="ease-in-out-cubic",e.easeInOutLinear="ease-in-out-linear",e.easeInOutQuad="ease-in-out-quad",e.easeInOutQuart="ease-in-out-quart",e.easeInOutQuint="ease-in-out-quint",e.easeInOutExpo="ease-in-out-expo",e.easeInOutSine="ease-in-out-sine"})(Oi||(Oi={}));const zf=zk();Bi()||(window.tsParticles=zf);const Lk=e=>{const t=e.id??"tsparticles";return j.useEffect(()=>{let n;return zf.load({id:t,url:e.url,options:e.options}).then(i=>{var r;n=i,(r=e.particlesLoaded)==null||r.call(e,i)}),()=>{n==null||n.destroy()}},[t,e,e.url,e.options]),_.jsx("div",{id:t,className:e.className})};async function jk(e){await e(zf)}const pd=.5,Ci=0,Kt=1,Qp=60,Gp=0,Fk=.01;function Nk(e){const t=e.initialPosition,{dx:n,dy:i}=rt(t,e.position),r=Math.abs(n),o=Math.abs(i),{maxDistance:s}=e.retina,a=s.horizontal,l=s.vertical;if(!a&&!l)return;const c=(a&&r>=a)??!1,u=(l&&o>=l)??!1;if((c||u)&&!e.misplaced)e.misplaced=!!a&&r>a||!!l&&o>l,a&&(e.velocity.x=e.velocity.y*pd-e.velocity.x),l&&(e.velocity.y=e.velocity.x*pd-e.velocity.y);else if((!a||r<a)&&(!l||o<l)&&e.misplaced)e.misplaced=!1;else if(e.misplaced){const h=e.position,f=e.velocity;a&&(h.x<t.x&&f.x<Ci||h.x>t.x&&f.x>Ci)&&(f.x*=-de()),l&&(h.y<t.y&&f.y<Ci||h.y>t.y&&f.y>Ci)&&(f.y*=-de())}}function Bk(e,t,n,i,r,o){Wk(e,o);const s=e.gravity,a=s!=null&&s.enable&&s.inverse?-Kt:Kt;r&&n&&(e.velocity.x+=r*o.factor/(Qp*n)),s!=null&&s.enable&&n&&(e.velocity.y+=a*(s.acceleration*o.factor)/(Qp*n));const l=e.moveDecay;e.velocity.multTo(l);const c=e.velocity.mult(n);s!=null&&s.enable&&i>Ci&&(!s.inverse&&c.y>=Ci&&c.y>=i||s.inverse&&c.y<=Ci&&c.y<=-i)&&(c.y=a*i,n&&(e.velocity.y=c.y/n));const u=e.options.zIndex,h=(Kt-e.zIndexFactor)**u.velocityRate;c.multTo(h);const{position:f}=e;f.addTo(c),t.vibrate&&(f.x+=Math.sin(f.x*Math.cos(f.y)),f.y+=Math.cos(f.y*Math.sin(f.x)))}function Uk(e,t){const n=e.container;if(!e.spin)return;const i={x:e.spin.direction===$t.clockwise?Math.cos:Math.sin,y:e.spin.direction===$t.clockwise?Math.sin:Math.cos};e.position.x=e.spin.center.x+e.spin.radius*i.x(e.spin.angle),e.position.y=e.spin.center.y+e.spin.radius*i.y(e.spin.angle),e.spin.radius+=e.spin.acceleration;const r=Math.max(n.canvas.size.width,n.canvas.size.height),o=r*pd;e.spin.radius>o?(e.spin.radius=o,e.spin.acceleration*=-Kt):e.spin.radius<Gp&&(e.spin.radius=Gp,e.spin.acceleration*=-Kt),e.spin.angle+=t*Fk*(Kt-e.spin.radius/r)}function Wk(e,t){var s;const n=e.options,i=n.move.path;if(!i.enable)return;if(e.lastPathTime<=e.pathDelay){e.lastPathTime+=t.value;return}const o=(s=e.pathGenerator)==null?void 0:s.generate(e,t);o&&e.velocity.addTo(o),i.clamp&&(e.velocity.x=Bt(e.velocity.x,-Kt,Kt),e.velocity.y=Bt(e.velocity.y,-Kt,Kt)),e.lastPathTime-=e.pathDelay}function Hk(e){return e.slow.inRange?e.slow.factor:Kt}function Vk(e){const t=e.container,n=e.options,i=n.move.spin;if(!i.enable)return;const r=i.position??{x:50,y:50},o=.01,s={x:r.x*o*t.canvas.size.width,y:r.y*o*t.canvas.size.height},a=e.getPosition(),l=_t(a,s),c=W(i.acceleration);e.retina.spinAcceleration=c*t.retina.pixelRatio;const u=0;e.spin={center:s,direction:e.velocity.x>=u?$t.clockwise:$t.counterClockwise,angle:e.velocity.angle,radius:l,acceleration:e.retina.spinAcceleration}}const Yk=2,Xk=1,qk=1;class Qk{init(t){const n=t.options,i=n.move.gravity;t.gravity={enable:i.enable,acceleration:W(i.acceleration),inverse:i.inverse},Vk(t)}isEnabled(t){return!t.destroyed&&t.options.move.enable}move(t,n){var m,C;const i=t.options,r=i.move;if(!r.enable)return;const o=t.container,s=o.retina.pixelRatio;(m=t.retina).moveSpeed??(m.moveSpeed=W(r.speed)*s),(C=t.retina).moveDrift??(C.moveDrift=W(t.options.move.drift)*s);const a=Hk(t),l=t.retina.moveSpeed*o.retina.reduceFactor,c=t.retina.moveDrift,u=Qt(i.size.value)*s,h=r.size?t.getRadius()/u:Xk,f=n.factor||qk,y=l*h*a*f/Yk,v=t.retina.maxSpeed??o.retina.maxSpeed;r.spin.enable?Uk(t,y):Bk(t,r,y,v,c,n),Nk(t)}}async function Gk(e,t=!0){await e.addMover("base",()=>Promise.resolve(new Qk),t)}const Kk=2,Zk=Math.PI*Kk,Jk=0,Kp={x:0,y:0};function e_(e){const{context:t,particle:n,radius:i}=e;n.circleRange||(n.circleRange={min:Jk,max:Zk});const r=n.circleRange;t.arc(Kp.x,Kp.y,i,r.min,r.max,!1)}const t_=12,n_=360,Zp=0;class i_{constructor(){this.validTypes=["circle"]}draw(t){e_(t)}getSidesCount(){return t_}particleInit(t,n){const i=n.shapeData,r=(i==null?void 0:i.angle)??{max:n_,min:Zp};n.circleRange=fr(r)?{min:ni(r.min),max:ni(r.max)}:{min:Zp,max:ni(r)}}}async function r_(e,t=!0){await e.addShape(new i_,t)}class o_{constructor(t){this.container=t}init(t){const n=Go(t.options.color,t.id,t.options.reduceDuplicates);n&&(t.color=Wy(n,t.options.color.animation,this.container.retina.reduceFactor))}isEnabled(t){const{h:n,s:i,l:r}=t.options.color.animation,{color:o}=t;return!t.destroyed&&!t.spawning&&((o==null?void 0:o.h.value)!==void 0&&n.enable||(o==null?void 0:o.s.value)!==void 0&&i.enable||(o==null?void 0:o.l.value)!==void 0&&r.enable)}update(t,n){Hy(t.color,n)}}async function s_(e,t=!0){await e.addParticleUpdater("color",n=>Promise.resolve(new o_(n)),t)}class a_{constructor(t){this.container=t}init(t){const n=t.options.opacity,i=1;t.opacity=Ly(n,i);const r=n.animation;r.enable&&(t.opacity.velocity=W(r.speed)/Yn*this.container.retina.reduceFactor,r.sync||(t.opacity.velocity*=de()))}isEnabled(t){return!t.destroyed&&!t.spawning&&!!t.opacity&&t.opacity.enable&&((t.opacity.maxLoops??0)<=0||(t.opacity.maxLoops??0)>0&&(t.opacity.loops??0)<(t.opacity.maxLoops??0))}reset(t){t.opacity&&(t.opacity.time=0,t.opacity.loops=0)}update(t,n){!this.isEnabled(t)||!t.opacity||Mf(t,t.opacity,!0,t.options.opacity.animation.destroy,n)}}async function l_(e,t=!0){await e.addParticleUpdater("opacity",n=>Promise.resolve(new a_(n)),t)}const Ka=0,Cr=0;function c_(e){if(e.outMode!==Te.bounce&&e.outMode!==Te.split||e.direction!==q.left&&e.direction!==q.right)return;e.bounds.right<Cr&&e.direction===q.left?e.particle.position.x=e.size+e.offset.x:e.bounds.left>e.canvasSize.width&&e.direction===q.right&&(e.particle.position.x=e.canvasSize.width-e.size-e.offset.x);const t=e.particle.velocity.x;let n=!1;if(e.direction===q.right&&e.bounds.right>=e.canvasSize.width&&t>Ka||e.direction===q.left&&e.bounds.left<=Cr&&t<Ka){const r=W(e.particle.options.bounce.horizontal.value);e.particle.velocity.x*=-r,n=!0}if(!n)return;const i=e.offset.x+e.size;e.bounds.right>=e.canvasSize.width&&e.direction===q.right?e.particle.position.x=e.canvasSize.width-i:e.bounds.left<=Cr&&e.direction===q.left&&(e.particle.position.x=i),e.outMode===Te.split&&e.particle.destroy()}function u_(e){if(e.outMode!==Te.bounce&&e.outMode!==Te.split||e.direction!==q.bottom&&e.direction!==q.top)return;e.bounds.bottom<Cr&&e.direction===q.top?e.particle.position.y=e.size+e.offset.y:e.bounds.top>e.canvasSize.height&&e.direction===q.bottom&&(e.particle.position.y=e.canvasSize.height-e.size-e.offset.y);const t=e.particle.velocity.y;let n=!1;if(e.direction===q.bottom&&e.bounds.bottom>=e.canvasSize.height&&t>Ka||e.direction===q.top&&e.bounds.top<=Cr&&t<Ka){const r=W(e.particle.options.bounce.vertical.value);e.particle.velocity.y*=-r,n=!0}if(!n)return;const i=e.offset.y+e.size;e.bounds.bottom>=e.canvasSize.height&&e.direction===q.bottom?e.particle.position.y=e.canvasSize.height-i:e.bounds.top<=Cr&&e.direction===q.top&&(e.particle.position.y=i),e.outMode===Te.split&&e.particle.destroy()}class d_{constructor(t){this.container=t,this.modes=[Te.bounce,Te.split]}update(t,n,i,r){if(!this.modes.includes(r))return;const o=this.container;let s=!1;for(const[,f]of o.plugins)if(f.particleBounce!==void 0&&(s=f.particleBounce(t,i,n)),s)break;if(s)return;const a=t.getPosition(),l=t.offset,c=t.getRadius(),u=cs(a,c),h=o.canvas.size;c_({particle:t,outMode:r,direction:n,bounds:u,canvasSize:h,offset:l,size:c}),u_({particle:t,outMode:r,direction:n,bounds:u,canvasSize:h,offset:l,size:c})}}const js=0;class f_{constructor(t){this.container=t,this.modes=[Te.destroy]}update(t,n,i,r){if(!this.modes.includes(r))return;const o=this.container;switch(t.outType){case nn.normal:case nn.outside:if(If(t.position,o.canvas.size,ze.origin,t.getRadius(),n))return;break;case nn.inside:{const{dx:s,dy:a}=rt(t.position,t.moveCenter),{x:l,y:c}=t.velocity;if(l<js&&s>t.moveCenter.radius||c<js&&a>t.moveCenter.radius||l>=js&&s<-t.moveCenter.radius||c>=js&&a<-t.moveCenter.radius)return;break}}o.particles.remove(t,void 0,!0)}}const Fs=0;class h_{constructor(t){this.container=t,this.modes=[Te.none]}update(t,n,i,r){if(!this.modes.includes(r)||((t.options.move.distance.horizontal&&(n===q.left||n===q.right))??(t.options.move.distance.vertical&&(n===q.top||n===q.bottom))))return;const o=t.options.move.gravity,s=this.container,a=s.canvas.size,l=t.getRadius();if(o.enable){const c=t.position;(!o.inverse&&c.y>a.height+l&&n===q.bottom||o.inverse&&c.y<-l&&n===q.top)&&s.particles.remove(t)}else{if(t.velocity.y>Fs&&t.position.y<=a.height+l||t.velocity.y<Fs&&t.position.y>=-l||t.velocity.x>Fs&&t.position.x<=a.width+l||t.velocity.x<Fs&&t.position.x>=-l)return;If(t.position,s.canvas.size,ze.origin,l,n)||s.particles.remove(t)}}}const Ns=0,Bs=0;class p_{constructor(t){this.container=t,this.modes=[Te.out]}update(t,n,i,r){if(!this.modes.includes(r))return;const o=this.container;switch(t.outType){case nn.inside:{const{x:s,y:a}=t.velocity,l=ze.origin;l.length=t.moveCenter.radius,l.angle=t.velocity.angle+Math.PI,l.addTo(ze.create(t.moveCenter));const{dx:c,dy:u}=rt(t.position,l);if(s<=Ns&&c>=Bs||a<=Ns&&u>=Bs||s>=Ns&&c<=Bs||a>=Ns&&u<=Bs)return;t.position.x=Math.floor(St({min:0,max:o.canvas.size.width})),t.position.y=Math.floor(St({min:0,max:o.canvas.size.height}));const{dx:h,dy:f}=rt(t.position,t.moveCenter);t.direction=Math.atan2(-f,-h),t.velocity.angle=t.direction;break}default:{if(If(t.position,o.canvas.size,ze.origin,t.getRadius(),n))return;switch(t.outType){case nn.outside:{t.position.x=Math.floor(St({min:-t.moveCenter.radius,max:t.moveCenter.radius}))+t.moveCenter.x,t.position.y=Math.floor(St({min:-t.moveCenter.radius,max:t.moveCenter.radius}))+t.moveCenter.y;const{dx:s,dy:a}=rt(t.position,t.moveCenter);t.moveCenter.radius&&(t.direction=Math.atan2(a,s),t.velocity.angle=t.direction);break}case nn.normal:{const s=t.options.move.warp,a=o.canvas.size,l={bottom:a.height+t.getRadius()+t.offset.y,left:-t.getRadius()-t.offset.x,right:a.width+t.getRadius()+t.offset.x,top:-t.getRadius()-t.offset.y},c=t.getRadius(),u=cs(t.position,c);n===q.right&&u.left>a.width+t.offset.x?(t.position.x=l.left,t.initialPosition.x=t.position.x,s||(t.position.y=de()*a.height,t.initialPosition.y=t.position.y)):n===q.left&&u.right<-t.offset.x&&(t.position.x=l.right,t.initialPosition.x=t.position.x,s||(t.position.y=de()*a.height,t.initialPosition.y=t.position.y)),n===q.bottom&&u.top>a.height+t.offset.y?(s||(t.position.x=de()*a.width,t.initialPosition.x=t.position.x),t.position.y=l.top,t.initialPosition.y=t.position.y):n===q.top&&u.bottom<-t.offset.y&&(s||(t.position.x=de()*a.width,t.initialPosition.x=t.position.x),t.position.y=l.bottom,t.initialPosition.y=t.position.y);break}}break}}}}const Us=(e,t)=>e.default===t||e.bottom===t||e.left===t||e.right===t||e.top===t;class m_{constructor(t){this._updateOutMode=(n,i,r,o)=>{for(const s of this.updaters)s.update(n,o,i,r)},this.container=t,this.updaters=[]}init(t){this.updaters=[];const n=t.options.move.outModes;Us(n,Te.bounce)?this.updaters.push(new d_(this.container)):Us(n,Te.out)?this.updaters.push(new p_(this.container)):Us(n,Te.destroy)?this.updaters.push(new f_(this.container)):Us(n,Te.none)&&this.updaters.push(new h_(this.container))}isEnabled(t){return!t.destroyed&&!t.spawning}update(t,n){const i=t.options.move.outModes;this._updateOutMode(t,n,i.bottom??i.default,q.bottom),this._updateOutMode(t,n,i.left??i.default,q.left),this._updateOutMode(t,n,i.right??i.default,q.right),this._updateOutMode(t,n,i.top??i.default,q.top)}}async function g_(e,t=!0){await e.addParticleUpdater("outModes",n=>Promise.resolve(new m_(n)),t)}const di=0;class y_{init(t){const n=t.container,i=t.options.size,r=i.animation;r.enable&&(t.size.velocity=(t.retina.sizeAnimationSpeed??n.retina.sizeAnimationSpeed)/Yn*n.retina.reduceFactor,r.sync||(t.size.velocity*=de()))}isEnabled(t){return!t.destroyed&&!t.spawning&&t.size.enable&&((t.size.maxLoops??di)<=di||(t.size.maxLoops??di)>di&&(t.size.loops??di)<(t.size.maxLoops??di))}reset(t){t.size.loops=di}update(t,n){this.isEnabled(t)&&Mf(t,t.size,!0,t.options.size.animation.destroy,n)}}async function v_(e,t=!0){await e.addParticleUpdater("size",()=>Promise.resolve(new y_),t)}async function w_(e,t=!0){await Gk(e,!1),await r_(e,!1),await s_(e,!1),await l_(e,!1),await g_(e,!1),await v_(e,!1),await e.refresh(t)}async function x_(){Nc(Oi.easeInQuad,e=>e**2),Nc(Oi.easeOutQuad,e=>1-(1-e)**2),Nc(Oi.easeInOutQuad,e=>e<.5?2*e**2:1-(-2*e+2)**2/2),await Promise.resolve()}function b_(e){const{context:t,particle:n,radius:i,opacity:r}=e,o=n.emojiData,s=2,a=i*s,l=t.globalAlpha;o&&(t.globalAlpha=r,t.drawImage(o,-i,-i,a,a),t.globalAlpha=l)}const Jp='"Twemoji Mozilla", Apple Color Emoji, "Segoe UI Emoji", "Noto Color Emoji", "EmojiOne Color"';class S_{constructor(){this.validTypes=["emoji"],this._emojiShapeDict=new Map}destroy(){for(const[t,n]of this._emojiShapeDict)n instanceof ImageBitmap&&(n==null||n.close(),this._emojiShapeDict.delete(t))}draw(t){b_(t)}async init(t){const n=t.actualOptions,{validTypes:i}=this;if(!i.find(s=>ke(s,n.particles.shape.type)))return;const r=[Mp(Jp)],o=i.map(s=>n.particles.shape.options[s]).find(s=>!!s);o&&Ut(o,s=>{s.font&&r.push(Mp(s.font))}),await Promise.all(r)}particleDestroy(t){delete t.emojiData}particleInit(t,n){const r=n.shapeData;if(!(r!=null&&r.value))return;const o=Gt(r.value,n.randomIndexData),s=r.font??Jp;if(!o)return;const a=`${o}_${s}`,l=this._emojiShapeDict.get(a);if(l){n.emojiData=l;return}const c=Qt(n.size.value)*2;let u;const h=Qt(n.size.value);if(typeof OffscreenCanvas<"u"){const f=new OffscreenCanvas(c,c),y=f.getContext("2d");if(!y)return;y.font=`400 ${h*2}px ${s}`,y.textBaseline="middle",y.textAlign="center",y.fillText(o,h,h),u=f.transferToImageBitmap()}else{const f=document.createElement("canvas");f.width=c,f.height=c;const y=f.getContext("2d");if(!y)return;y.font=`400 ${h*2}px ${s}`,y.textBaseline="middle",y.textAlign="center",y.fillText(o,h,h),u=f}this._emojiShapeDict.set(a,u),n.emojiData=u}}async function k_(e,t=!0){await e.addShape(new S_,t)}const __=1,C_=1,Zy=0;function Jy(e,t,n,i,r){const o=e.actualOptions.interactivity.modes.attract;if(!o)return;const s=e.particles.quadTree.query(i,r);for(const a of s){const{dx:l,dy:c,distance:u}=rt(a.position,t),h=o.speed*o.factor,f=Bt(My(o.easing)(C_-u/n)*h,__,o.maxSpeed),y=ze.create(u?l/u*f:h,u?c/u*f:h);a.position.subFrom(y)}}function P_(e,t){e.attract||(e.attract={particles:[]});const{attract:n}=e;if(n.finish||(n.count||(n.count=0),n.count++,n.count===e.particles.count&&(n.finish=!0)),n.clicking){const i=e.interactivity.mouse.clickPosition,r=e.retina.attractModeDistance;if(!r||r<Zy||!i)return;Jy(e,i,r,new Ge(i.x,i.y,r),o=>t(o))}else n.clicking===!1&&(n.particles=[])}function E_(e,t){const n=e.interactivity.mouse.position,i=e.retina.attractModeDistance;!i||i<Zy||!n||Jy(e,n,i,new Ge(n.x,n.y,i),r=>t(r))}class I_{constructor(){this.distance=200,this.duration=.4,this.easing=Oi.easeOutQuad,this.factor=1,this.maxSpeed=50,this.speed=1}load(t){t&&(t.distance!==void 0&&(this.distance=t.distance),t.duration!==void 0&&(this.duration=t.duration),t.easing!==void 0&&(this.easing=t.easing),t.factor!==void 0&&(this.factor=t.factor),t.maxSpeed!==void 0&&(this.maxSpeed=t.maxSpeed),t.speed!==void 0&&(this.speed=t.speed))}}const ao="attract";let T_=class extends wn{constructor(t,n){super(n),this._engine=t,n.attract||(n.attract={particles:[]}),this.handleClickMode=i=>{const r=this.container.actualOptions,o=r.interactivity.modes.attract;if(!(!o||i!==ao)){n.attract||(n.attract={particles:[]}),n.attract.clicking=!0,n.attract.count=0;for(const s of n.attract.particles)this.isEnabled(s)&&s.velocity.setTo(s.initialVelocity);n.attract.particles=[],n.attract.finish=!1,setTimeout(()=>{n.destroyed||(n.attract||(n.attract={particles:[]}),n.attract.clicking=!1)},o.duration*Qe)}}}clear(){}init(){const t=this.container,n=t.actualOptions.interactivity.modes.attract;n&&(t.retina.attractModeDistance=n.distance*t.retina.pixelRatio)}interact(){const t=this.container,n=t.actualOptions,i=t.interactivity.status===ji,r=n.interactivity.events,{enable:o,mode:s}=r.onHover,{enable:a,mode:l}=r.onClick;i&&o&&ke(ao,s)?E_(this.container,c=>this.isEnabled(c)):a&&ke(ao,l)&&P_(this.container,c=>this.isEnabled(c))}isEnabled(t){const n=this.container,i=n.actualOptions,r=n.interactivity.mouse,o=((t==null?void 0:t.interactivity)??i.interactivity).events;if((!r.position||!o.onHover.enable)&&(!r.clickPosition||!o.onClick.enable))return!1;const s=o.onHover.mode,a=o.onClick.mode;return ke(ao,s)||ke(ao,a)}loadModeOptions(t,...n){t.attract||(t.attract=new I_);for(const i of n)t.attract.load(i==null?void 0:i.attract)}reset(){}};async function O_(e,t=!0){await e.addInteractor("externalAttract",n=>Promise.resolve(new T_(e,n)),t)}const M_=2,ya=.5,D_=Math.PI*ya,em=2,ev=10,$_=0;function tv(e,t,n,i,r){const o=e.particles.quadTree.query(i,r);for(const s of o)i instanceof Ge?Ry(ud(s),{position:t,radius:n,mass:n**M_*D_,velocity:ze.origin,factor:ze.origin}):i instanceof on&&cS(s,cs(t,n))}function A_(e,t,n,i){const r=document.querySelectorAll(t);r.length&&r.forEach(o=>{const s=o,a=e.retina.pixelRatio,l={x:(s.offsetLeft+s.offsetWidth*ya)*a,y:(s.offsetTop+s.offsetHeight*ya)*a},c=s.offsetWidth*ya*a,u=ev*a,h=n.type===Br.circle?new Ge(l.x,l.y,c+u):new on(s.offsetLeft*a-u,s.offsetTop*a-u,s.offsetWidth*a+u*em,s.offsetHeight*a+u*em);i(l,c,h)})}function R_(e,t,n,i){Of(n,t,(r,o)=>A_(e,r,o,(s,a,l)=>tv(e,s,a,l,i)))}function z_(e,t){const n=e.retina.pixelRatio,i=ev*n,r=e.interactivity.mouse.position,o=e.retina.bounceModeDistance;!o||o<$_||!r||tv(e,r,o,new Ge(r.x,r.y,o+i),t)}class L_{constructor(){this.distance=200}load(t){t&&t.distance!==void 0&&(this.distance=t.distance)}}const Ws="bounce";class j_ extends wn{constructor(t){super(t)}clear(){}init(){const t=this.container,n=t.actualOptions.interactivity.modes.bounce;n&&(t.retina.bounceModeDistance=n.distance*t.retina.pixelRatio)}interact(){const t=this.container,n=t.actualOptions,i=n.interactivity.events,r=t.interactivity.status===ji,o=i.onHover.enable,s=i.onHover.mode,a=i.onDiv;r&&o&&ke(Ws,s)?z_(this.container,l=>this.isEnabled(l)):R_(this.container,a,Ws,l=>this.isEnabled(l))}isEnabled(t){const n=this.container,i=n.actualOptions,r=n.interactivity.mouse,o=((t==null?void 0:t.interactivity)??i.interactivity).events,s=o.onDiv;return!!r.position&&o.onHover.enable&&ke(Ws,o.onHover.mode)||Tf(Ws,s)}loadModeOptions(t,...n){t.bounce||(t.bounce=new L_);for(const i of n)t.bounce.load(i==null?void 0:i.bounce)}reset(){}}async function F_(e,t=!0){await e.addInteractor("externalBounce",n=>Promise.resolve(new j_(n)),t)}class nv{constructor(){this.distance=200,this.duration=.4,this.mix=!1}load(t){if(t){if(t.distance!==void 0&&(this.distance=t.distance),t.duration!==void 0&&(this.duration=t.duration),t.mix!==void 0&&(this.mix=t.mix),t.opacity!==void 0&&(this.opacity=t.opacity),t.color!==void 0){const n=vn(this.color)?void 0:this.color;this.color=Ut(t.color,i=>Je.create(n,i))}t.size!==void 0&&(this.size=t.size)}}}class N_ extends nv{constructor(){super(),this.selectors=[]}load(t){super.load(t),t&&t.selectors!==void 0&&(this.selectors=t.selectors)}}class B_ extends nv{load(t){super.load(t),t&&(this.divs=Ut(t.divs,n=>{const i=new N_;return i.load(n),i}))}}var ln;(function(e){e.color="color",e.opacity="opacity",e.size="size"})(ln||(ln={}));function tm(e,t,n,i){if(t>=n){const r=e+(t-n)*i;return Bt(r,e,t)}else if(t<n){const r=e-(n-t)*i;return Bt(r,t,e)}}const fi="bubble",Qc=0,U_=0,W_=2,nm=1,im=1,H_=0,V_=0,Gc=.5,Kc=1;class Y_ extends wn{constructor(t){super(t),this._clickBubble=()=>{var c;const n=this.container,i=n.actualOptions,r=n.interactivity.mouse.clickPosition,o=i.interactivity.modes.bubble;if(!o||!r)return;n.bubble||(n.bubble={});const s=n.retina.bubbleModeDistance;if(!s||s<Qc)return;const a=n.particles.quadTree.queryCircle(r,s,u=>this.isEnabled(u)),{bubble:l}=n;for(const u of a){if(!l.clicking)continue;u.bubble.inRange=!l.durationEnd;const h=u.getPosition(),f=_t(h,r),y=(new Date().getTime()-(n.interactivity.mouse.clickTime??U_))/Qe;y>o.duration&&(l.durationEnd=!0),y>o.duration*W_&&(l.clicking=!1,l.durationEnd=!1);const v={bubbleObj:{optValue:n.retina.bubbleModeSize,value:u.bubble.radius},particlesObj:{optValue:Qt(u.options.size.value)*n.retina.pixelRatio,value:u.size.value},type:ln.size};this._process(u,f,y,v);const m={bubbleObj:{optValue:o.opacity,value:u.bubble.opacity},particlesObj:{optValue:Qt(u.options.opacity.value),value:((c=u.opacity)==null?void 0:c.value)??nm},type:ln.opacity};this._process(u,f,y,m),!l.durationEnd&&f<=s?this._hoverBubbleColor(u,f):delete u.bubble.color}},this._hoverBubble=()=>{const n=this.container,i=n.interactivity.mouse.position,r=n.retina.bubbleModeDistance;if(!r||r<Qc||!i)return;const o=n.particles.quadTree.queryCircle(i,r,s=>this.isEnabled(s));for(const s of o){s.bubble.inRange=!0;const a=s.getPosition(),l=_t(a,i),c=im-l/r;l<=r?c>=V_&&n.interactivity.status===ji&&(this._hoverBubbleSize(s,c),this._hoverBubbleOpacity(s,c),this._hoverBubbleColor(s,c)):this.reset(s),n.interactivity.status===ld&&this.reset(s)}},this._hoverBubbleColor=(n,i,r)=>{const o=this.container.actualOptions,s=r??o.interactivity.modes.bubble;if(s){if(!n.bubble.finalColor){const a=s.color;if(!a)return;const l=Gt(a);n.bubble.finalColor=Go(l)}if(n.bubble.finalColor)if(s.mix){n.bubble.color=void 0;const a=n.getFillColor();n.bubble.color=a?Ny(Df(a,n.bubble.finalColor,im-i,i)):n.bubble.finalColor}else n.bubble.color=n.bubble.finalColor}},this._hoverBubbleOpacity=(n,i,r)=>{var h,f;const o=this.container,s=o.actualOptions,a=(r==null?void 0:r.opacity)??((h=s.interactivity.modes.bubble)==null?void 0:h.opacity);if(!a)return;const l=n.options.opacity.value,c=((f=n.opacity)==null?void 0:f.value)??nm,u=tm(c,a,Qt(l),i);u!==void 0&&(n.bubble.opacity=u)},this._hoverBubbleSize=(n,i,r)=>{const o=this.container,s=r!=null&&r.size?r.size*o.retina.pixelRatio:o.retina.bubbleModeSize;if(s===void 0)return;const a=Qt(n.options.size.value)*o.retina.pixelRatio,l=n.size.value,c=tm(l,s,a,i);c!==void 0&&(n.bubble.radius=c)},this._process=(n,i,r,o)=>{const s=this.container,a=o.bubbleObj.optValue,l=s.actualOptions,c=l.interactivity.modes.bubble;if(!c||a===void 0)return;const u=c.duration,h=s.retina.bubbleModeDistance,f=o.particlesObj.optValue,y=o.bubbleObj.value,v=o.particlesObj.value??H_,m=o.type;if(!(!h||h<Qc||a===f))if(s.bubble||(s.bubble={}),s.bubble.durationEnd)y&&(m===ln.size&&delete n.bubble.radius,m===ln.opacity&&delete n.bubble.opacity);else if(i<=h){if((y??v)!==a){const w=v-r*(v-a)/u;m===ln.size&&(n.bubble.radius=w),m===ln.opacity&&(n.bubble.opacity=w)}}else m===ln.size&&delete n.bubble.radius,m===ln.opacity&&delete n.bubble.opacity},this._singleSelectorHover=(n,i,r)=>{const o=this.container,s=document.querySelectorAll(i),a=o.actualOptions.interactivity.modes.bubble;!a||!s.length||s.forEach(l=>{const c=l,u=o.retina.pixelRatio,h={x:(c.offsetLeft+c.offsetWidth*Gc)*u,y:(c.offsetTop+c.offsetHeight*Gc)*u},f=c.offsetWidth*Gc*u,y=r.type===Br.circle?new Ge(h.x,h.y,f):new on(c.offsetLeft*u,c.offsetTop*u,c.offsetWidth*u,c.offsetHeight*u),v=o.particles.quadTree.query(y,m=>this.isEnabled(m));for(const m of v){if(!y.contains(m.getPosition()))continue;m.bubble.inRange=!0;const C=a.divs,w=Ay(C,c);(!m.bubble.div||m.bubble.div!==c)&&(this.clear(m,n,!0),m.bubble.div=c),this._hoverBubbleSize(m,Kc,w),this._hoverBubbleOpacity(m,Kc,w),this._hoverBubbleColor(m,Kc,w)}})},t.bubble||(t.bubble={}),this.handleClickMode=n=>{n===fi&&(t.bubble||(t.bubble={}),t.bubble.clicking=!0)}}clear(t,n,i){t.bubble.inRange&&!i||(delete t.bubble.div,delete t.bubble.opacity,delete t.bubble.radius,delete t.bubble.color)}init(){const t=this.container,n=t.actualOptions.interactivity.modes.bubble;n&&(t.retina.bubbleModeDistance=n.distance*t.retina.pixelRatio,n.size!==void 0&&(t.retina.bubbleModeSize=n.size*t.retina.pixelRatio))}interact(t){const n=this.container.actualOptions,i=n.interactivity.events,r=i.onHover,o=i.onClick,s=r.enable,a=r.mode,l=o.enable,c=o.mode,u=i.onDiv;s&&ke(fi,a)?this._hoverBubble():l&&ke(fi,c)?this._clickBubble():Of(fi,u,(h,f)=>this._singleSelectorHover(t,h,f))}isEnabled(t){const n=this.container,i=n.actualOptions,r=n.interactivity.mouse,o=((t==null?void 0:t.interactivity)??i.interactivity).events,{onClick:s,onDiv:a,onHover:l}=o,c=Tf(fi,a);return c||l.enable&&r.position||s.enable&&r.clickPosition?ke(fi,l.mode)||ke(fi,s.mode)||c:!1}loadModeOptions(t,...n){t.bubble||(t.bubble=new B_);for(const i of n)t.bubble.load(i==null?void 0:i.bubble)}reset(t){t.bubble.inRange=!1}}async function X_(e,t=!0){await e.addInteractor("externalBubble",n=>Promise.resolve(new Y_(n)),t)}class q_{constructor(){this.opacity=.5}load(t){t&&t.opacity!==void 0&&(this.opacity=t.opacity)}}class Q_{constructor(){this.distance=80,this.links=new q_,this.radius=60}load(t){t&&(t.distance!==void 0&&(this.distance=t.distance),this.links.load(t.links),t.radius!==void 0&&(this.radius=t.radius))}}const rm=0,om=1,G_=0;function K_(e,t,n,i){const r=Math.floor(n.getRadius()/t.getRadius()),o=t.getFillColor(),s=n.getFillColor();if(!o||!s)return;const a=t.getPosition(),l=n.getPosition(),c=Df(o,s,t.getRadius(),n.getRadius()),u=e.createLinearGradient(a.x,a.y,l.x,l.y);return u.addColorStop(rm,Ko(o,i)),u.addColorStop(Bt(r,rm,om),Tn(c,i)),u.addColorStop(om,Ko(s,i)),u}function Z_(e,t,n,i,r){To(e,i,r),e.lineWidth=t,e.strokeStyle=n,e.stroke()}function J_(e,t,n,i){const r=e.actualOptions,o=r.interactivity.modes.connect;if(o)return K_(t,n,i,o.links.opacity)}function eC(e,t,n){e.canvas.draw(i=>{const r=J_(e,i,t,n);if(!r)return;const o=t.getPosition(),s=n.getPosition();Z_(i,t.retina.linksWidth??G_,r,o,s)})}const tC="connect",sm=0;class nC extends wn{constructor(t){super(t)}clear(){}init(){const t=this.container,n=t.actualOptions.interactivity.modes.connect;n&&(t.retina.connectModeDistance=n.distance*t.retina.pixelRatio,t.retina.connectModeRadius=n.radius*t.retina.pixelRatio)}interact(){const t=this.container;if(t.actualOptions.interactivity.events.onHover.enable&&t.interactivity.status==="pointermove"){const i=t.interactivity.mouse.position,{connectModeDistance:r,connectModeRadius:o}=t.retina;if(!r||r<sm||!o||o<sm||!i)return;const s=Math.abs(o),a=t.particles.quadTree.queryCircle(i,s,l=>this.isEnabled(l));a.forEach((l,c)=>{const u=l.getPosition(),h=1;for(const f of a.slice(c+h)){const y=f.getPosition(),v=Math.abs(r),m=Math.abs(u.x-y.x),C=Math.abs(u.y-y.y);m<v&&C<v&&eC(t,l,f)}})}}isEnabled(t){const n=this.container,i=n.interactivity.mouse,r=((t==null?void 0:t.interactivity)??n.actualOptions.interactivity).events;return r.onHover.enable&&i.position?ke(tC,r.onHover.mode):!1}loadModeOptions(t,...n){t.connect||(t.connect=new Q_);for(const i of n)t.connect.load(i==null?void 0:i.connect)}reset(){}}async function iC(e,t=!0){await e.addInteractor("externalConnect",n=>Promise.resolve(new nC(n)),t)}class rC{constructor(){this.blink=!1,this.consent=!1,this.opacity=1}load(t){t&&(t.blink!==void 0&&(this.blink=t.blink),t.color!==void 0&&(this.color=Je.create(this.color,t.color)),t.consent!==void 0&&(this.consent=t.consent),t.opacity!==void 0&&(this.opacity=t.opacity))}}class oC{constructor(){this.distance=100,this.links=new rC}load(t){t&&(t.distance!==void 0&&(this.distance=t.distance),this.links.load(t.links))}}const sC=0;function aC(e,t,n,i,r,o){To(e,n,i),e.strokeStyle=Tn(r,o),e.lineWidth=t,e.stroke()}function lC(e,t,n,i,r){e.canvas.draw(o=>{const s=t.getPosition();aC(o,t.retina.linksWidth??sC,s,r,n,i)})}const cC="grab",uC=0,dC=0;class fC extends wn{constructor(t){super(t)}clear(){}init(){const t=this.container,n=t.actualOptions.interactivity.modes.grab;n&&(t.retina.grabModeDistance=n.distance*t.retina.pixelRatio)}interact(){var a;const t=this.container,n=t.actualOptions,i=n.interactivity;if(!i.modes.grab||!i.events.onHover.enable||t.interactivity.status!==ji)return;const r=t.interactivity.mouse.position;if(!r)return;const o=t.retina.grabModeDistance;if(!o||o<uC)return;const s=t.particles.quadTree.queryCircle(r,o,l=>this.isEnabled(l));for(const l of s){const c=l.getPosition(),u=_t(c,r);if(u>o)continue;const h=i.modes.grab.links,f=h.opacity,y=f-u*f/o;if(y<=dC)continue;const v=h.color??((a=l.options.links)==null?void 0:a.color);if(!t.particles.grabLineColor&&v){const C=i.modes.grab.links;t.particles.grabLineColor=Uy(v,C.blink,C.consent)}const m=fd(l,void 0,t.particles.grabLineColor);m&&lC(t,l,m,y,r)}}isEnabled(t){const n=this.container,i=n.interactivity.mouse,r=((t==null?void 0:t.interactivity)??n.actualOptions.interactivity).events;return r.onHover.enable&&!!i.position&&ke(cC,r.onHover.mode)}loadModeOptions(t,...n){t.grab||(t.grab=new oC);for(const i of n)t.grab.load(i==null?void 0:i.grab)}reset(){}}async function hC(e,t=!0){await e.addInteractor("externalGrab",n=>Promise.resolve(new fC(n)),t)}const pC="pause";class mC extends wn{constructor(t){super(t),this.handleClickMode=n=>{if(n!==pC)return;const i=this.container;i.animationStatus?i.pause():i.play()}}clear(){}init(){}interact(){}isEnabled(){return!0}reset(){}}async function gC(e,t=!0){await e.addInteractor("externalPause",n=>Promise.resolve(new mC(n)),t)}class yC{constructor(){this.default=!0,this.groups=[],this.quantity=4}load(t){if(!t)return;t.default!==void 0&&(this.default=t.default),t.groups!==void 0&&(this.groups=t.groups.map(i=>i)),this.groups.length||(this.default=!0);const n=t.quantity;n!==void 0&&(this.quantity=J(n))}}const vC="push",wC=0;class xC extends wn{constructor(t){super(t),this.handleClickMode=n=>{if(n!==vC)return;const i=this.container,r=i.actualOptions,o=r.interactivity.modes.push;if(!o)return;const s=W(o.quantity);if(s<=wC)return;const a=Sl([void 0,...o.groups]),l=a!==void 0?i.actualOptions.particles.groups[a]:void 0;i.particles.push(s,i.interactivity.mouse,l,a)}}clear(){}init(){}interact(){}isEnabled(){return!0}loadModeOptions(t,...n){t.push||(t.push=new yC);for(const i of n)t.push.load(i==null?void 0:i.push)}reset(){}}async function bC(e,t=!0){await e.addInteractor("externalPush",n=>Promise.resolve(new xC(n)),t)}class SC{constructor(){this.quantity=2}load(t){if(!t)return;const n=t.quantity;n!==void 0&&(this.quantity=J(n))}}const kC="remove";class _C extends wn{constructor(t){super(t),this.handleClickMode=n=>{const i=this.container,r=i.actualOptions;if(!r.interactivity.modes.remove||n!==kC)return;const o=W(r.interactivity.modes.remove.quantity);i.particles.removeQuantity(o)}}clear(){}init(){}interact(){}isEnabled(){return!0}loadModeOptions(t,...n){t.remove||(t.remove=new SC);for(const i of n)t.remove.load(i==null?void 0:i.remove)}reset(){}}async function CC(e,t=!0){await e.addInteractor("externalRemove",n=>Promise.resolve(new _C(n)),t)}class iv{constructor(){this.distance=200,this.duration=.4,this.factor=100,this.speed=1,this.maxSpeed=50,this.easing=Oi.easeOutQuad}load(t){t&&(t.distance!==void 0&&(this.distance=t.distance),t.duration!==void 0&&(this.duration=t.duration),t.easing!==void 0&&(this.easing=t.easing),t.factor!==void 0&&(this.factor=t.factor),t.speed!==void 0&&(this.speed=t.speed),t.maxSpeed!==void 0&&(this.maxSpeed=t.maxSpeed))}}class PC extends iv{constructor(){super(),this.selectors=[]}load(t){super.load(t),t&&t.selectors!==void 0&&(this.selectors=t.selectors)}}class EC extends iv{load(t){super.load(t),t&&(this.divs=Ut(t.divs,n=>{const i=new PC;return i.load(n),i}))}}const hi="repulse",IC=0,TC=6,OC=3,MC=2,DC=0,$C=0,AC=1,Zc=.5;class RC extends wn{constructor(t,n){super(n),this._clickRepulse=()=>{const i=this.container,r=i.actualOptions.interactivity.modes.repulse;if(!r)return;const o=i.repulse??{particles:[]};if(o.finish||(o.count||(o.count=0),o.count++,o.count===i.particles.count&&(o.finish=!0)),o.clicking){const s=i.retina.repulseModeDistance;if(!s||s<IC)return;const a=Math.pow(s/TC,OC),l=i.interactivity.mouse.clickPosition;if(l===void 0)return;const c=new Ge(l.x,l.y,a),u=i.particles.quadTree.query(c,h=>this.isEnabled(h));for(const h of u){const{dx:f,dy:y,distance:v}=rt(l,h.position),m=v**MC,C=r.speed,w=-a*C/m;if(m<=a){o.particles.push(h);const g=ze.create(f,y);g.length=w,h.velocity.setTo(g)}}}else if(o.clicking===!1){for(const s of o.particles)s.velocity.setTo(s.initialVelocity);o.particles=[]}},this._hoverRepulse=()=>{const i=this.container,r=i.interactivity.mouse.position,o=i.retina.repulseModeDistance;!o||o<DC||!r||this._processRepulse(r,o,new Ge(r.x,r.y,o))},this._processRepulse=(i,r,o,s)=>{const a=this.container,l=a.particles.quadTree.query(o,C=>this.isEnabled(C)),c=a.actualOptions.interactivity.modes.repulse;if(!c)return;const{easing:u,speed:h,factor:f,maxSpeed:y}=c,v=My(u),m=((s==null?void 0:s.speed)??h)*f;for(const C of l){const{dx:w,dy:g,distance:d}=rt(C.position,i),p=Bt(v(AC-d/r)*m,$C,y),x=ze.create(d?w/d*p:m,d?g/d*p:m);C.position.addTo(x)}},this._singleSelectorRepulse=(i,r)=>{const o=this.container,s=o.actualOptions.interactivity.modes.repulse;if(!s)return;const a=document.querySelectorAll(i);a.length&&a.forEach(l=>{const c=l,u=o.retina.pixelRatio,h={x:(c.offsetLeft+c.offsetWidth*Zc)*u,y:(c.offsetTop+c.offsetHeight*Zc)*u},f=c.offsetWidth*Zc*u,y=r.type===Br.circle?new Ge(h.x,h.y,f):new on(c.offsetLeft*u,c.offsetTop*u,c.offsetWidth*u,c.offsetHeight*u),v=s.divs,m=Ay(v,c);this._processRepulse(h,f,y,m)})},this._engine=t,n.repulse||(n.repulse={particles:[]}),this.handleClickMode=i=>{const r=this.container.actualOptions,o=r.interactivity.modes.repulse;if(!o||i!==hi)return;n.repulse||(n.repulse={particles:[]});const s=n.repulse;s.clicking=!0,s.count=0;for(const a of n.repulse.particles)this.isEnabled(a)&&a.velocity.setTo(a.initialVelocity);s.particles=[],s.finish=!1,setTimeout(()=>{n.destroyed||(s.clicking=!1)},o.duration*Qe)}}clear(){}init(){const t=this.container,n=t.actualOptions.interactivity.modes.repulse;n&&(t.retina.repulseModeDistance=n.distance*t.retina.pixelRatio)}interact(){const t=this.container,n=t.actualOptions,i=t.interactivity.status===ji,r=n.interactivity.events,o=r.onHover,s=o.enable,a=o.mode,l=r.onClick,c=l.enable,u=l.mode,h=r.onDiv;i&&s&&ke(hi,a)?this._hoverRepulse():c&&ke(hi,u)?this._clickRepulse():Of(hi,h,(f,y)=>this._singleSelectorRepulse(f,y))}isEnabled(t){const n=this.container,i=n.actualOptions,r=n.interactivity.mouse,o=((t==null?void 0:t.interactivity)??i.interactivity).events,s=o.onDiv,a=o.onHover,l=o.onClick,c=Tf(hi,s);if(!(c||a.enable&&r.position||l.enable&&r.clickPosition))return!1;const u=a.mode,h=l.mode;return ke(hi,u)||ke(hi,h)||c}loadModeOptions(t,...n){t.repulse||(t.repulse=new EC);for(const i of n)t.repulse.load(i==null?void 0:i.repulse)}reset(){}}async function zC(e,t=!0){await e.addInteractor("externalRepulse",n=>Promise.resolve(new RC(e,n)),t)}class LC{constructor(){this.factor=3,this.radius=200}load(t){t&&(t.factor!==void 0&&(this.factor=t.factor),t.radius!==void 0&&(this.radius=t.radius))}}const jC="slow",FC=0;class NC extends wn{constructor(t){super(t)}clear(t,n,i){t.slow.inRange&&!i||(t.slow.factor=1)}init(){const t=this.container,n=t.actualOptions.interactivity.modes.slow;n&&(t.retina.slowModeRadius=n.radius*t.retina.pixelRatio)}interact(){}isEnabled(t){const n=this.container,i=n.interactivity.mouse,r=((t==null?void 0:t.interactivity)??n.actualOptions.interactivity).events;return r.onHover.enable&&!!i.position&&ke(jC,r.onHover.mode)}loadModeOptions(t,...n){t.slow||(t.slow=new LC);for(const i of n)t.slow.load(i==null?void 0:i.slow)}reset(t){t.slow.inRange=!1;const n=this.container,i=n.actualOptions,r=n.interactivity.mouse.position,o=n.retina.slowModeRadius,s=i.interactivity.modes.slow;if(!s||!o||o<FC||!r)return;const a=t.getPosition(),l=_t(r,a),c=l/o,u=s.factor,{slow:h}=t;l>o||(h.inRange=!0,h.factor=c/u)}}async function BC(e,t=!0){await e.addInteractor("externalSlow",n=>Promise.resolve(new NC(n)),t)}const UC=0,WC=1,HC=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d.]+%?\))|currentcolor/gi;function VC(e,t,n){const{svgData:i}=e;if(!i)return"";const r=Ko(t,n);if(i.includes("fill"))return i.replace(HC,()=>r);const o=i.indexOf(">");return`${i.substring(UC,o)} fill="${r}"${i.substring(o)}`}async function _l(e){return new Promise(t=>{e.loading=!0;const n=new Image;e.element=n,n.addEventListener("load",()=>{e.loading=!1,t()}),n.addEventListener("error",()=>{e.element=void 0,e.error=!0,e.loading=!1,Ni().error(`${Nt} loading image: ${e.source}`),t()}),n.src=e.source})}async function YC(e){if(e.type!=="svg"){await _l(e);return}e.loading=!0;const t=await fetch(e.source);t.ok?e.svgData=await t.text():(Ni().error(`${Nt} Image not found`),e.error=!0),e.loading=!1}function XC(e,t,n,i){var s;const r=VC(e,n,((s=i.opacity)==null?void 0:s.value)??WC),o={color:n,gif:t.gif,data:{...e,svgData:r},loaded:!1,ratio:t.width/t.height,replaceColor:t.replaceColor,source:t.src};return new Promise(a=>{const l=new Blob([r],{type:"image/svg+xml"}),c=URL||window.URL||window.webkitURL||window,u=c.createObjectURL(l),h=new Image;h.addEventListener("load",()=>{o.loaded=!0,o.element=h,a(o),c.revokeObjectURL(u)});const f=async()=>{c.revokeObjectURL(u);const y={...e,error:!1,loading:!0};await _l(y),o.loaded=!0,o.element=y.element,a(o)};h.addEventListener("error",()=>void f()),h.src=u})}const Jc=[0,4,2,1],am=[8,8,4,2];class qC{constructor(t){this.pos=0,this.data=new Uint8ClampedArray(t)}getString(t){const n=this.data.slice(this.pos,this.pos+t);return this.pos+=n.length,n.reduce((i,r)=>i+String.fromCharCode(r),"")}nextByte(){return this.data[this.pos++]}nextTwoBytes(){return this.pos+=2,this.data[this.pos-2]+(this.data[this.pos-1]<<8)}readSubBlocks(){let t="",n=0;const i=0,r=0;do{n=this.data[this.pos++];for(let o=n;--o>=i;t+=String.fromCharCode(this.data[this.pos++]));}while(n!==r);return t}readSubBlocksBin(){let t=this.data[this.pos],n=0;const i=0,r=1;for(let s=0;t!==i;s+=t+r,t=this.data[this.pos+s])n+=t;const o=new Uint8Array(n);t=this.data[this.pos++];for(let s=0;t!==i;t=this.data[this.pos++])for(let a=t;--a>=i;o[s++]=this.data[this.pos++]);return o}skipSubBlocks(){for(const t=1,n=0;this.data[this.pos]!==n;this.pos+=this.data[this.pos]+t);this.pos++}}var Yt;(function(e){e[e.Replace=0]="Replace",e[e.Combine=1]="Combine",e[e.RestoreBackground=2]="RestoreBackground",e[e.RestorePrevious=3]="RestorePrevious",e[e.UndefinedA=4]="UndefinedA",e[e.UndefinedB=5]="UndefinedB",e[e.UndefinedC=6]="UndefinedC",e[e.UndefinedD=7]="UndefinedD"})(Yt||(Yt={}));var En;(function(e){e[e.Extension=33]="Extension",e[e.ApplicationExtension=255]="ApplicationExtension",e[e.GraphicsControlExtension=249]="GraphicsControlExtension",e[e.PlainTextExtension=1]="PlainTextExtension",e[e.CommentExtension=254]="CommentExtension",e[e.Image=44]="Image",e[e.EndOfFile=59]="EndOfFile"})(En||(En={}));const lt={x:0,y:0},QC=0,lm=.5,GC=0,cm=0,md=0;function rv(e,t){const n=[];for(let i=0;i<t;i++)n.push({r:e.data[e.pos],g:e.data[e.pos+1],b:e.data[e.pos+2]}),e.pos+=3;return n}function KC(e,t,n,i){switch(e.nextByte()){case En.GraphicsControlExtension:{const r=t.frames[n(!1)];e.pos++;const o=e.nextByte();r.GCreserved=(o&224)>>>5,r.disposalMethod=(o&28)>>>2,r.userInputDelayFlag=(o&2)===2;const s=(o&1)===1;r.delayTime=e.nextTwoBytes()*10;const a=e.nextByte();s&&i(a),e.pos++;break}case En.ApplicationExtension:{e.pos++;const r={identifier:e.getString(8),authenticationCode:e.getString(3),data:e.readSubBlocksBin()};t.applicationExtensions.push(r);break}case En.CommentExtension:{t.comments.push([n(!1),e.readSubBlocks()]);break}case En.PlainTextExtension:{if(t.globalColorTable.length===0)throw new EvalError("plain text extension without global color table");e.pos++,t.frames[n(!1)].plainTextData={left:e.nextTwoBytes(),top:e.nextTwoBytes(),width:e.nextTwoBytes(),height:e.nextTwoBytes(),charSize:{width:e.nextTwoBytes(),height:e.nextTwoBytes()},foregroundColor:e.nextByte(),backgroundColor:e.nextByte(),text:e.readSubBlocks()};break}default:e.skipSubBlocks();break}}async function ZC(e,t,n,i,r,o){const s=t.frames[i(!0)];s.left=e.nextTwoBytes(),s.top=e.nextTwoBytes(),s.width=e.nextTwoBytes(),s.height=e.nextTwoBytes();const a=e.nextByte(),l=(a&128)===128,c=(a&64)===64;s.sortFlag=(a&32)===32,s.reserved=(a&24)>>>3;const u=1<<(a&7)+1;l&&(s.localColorTable=rv(e,u));const h=w=>{const{r:g,g:d,b:p}=(l?s.localColorTable:t.globalColorTable)[w];return w!==r(null)?{r:g,g:d,b:p,a:255}:{r:g,g:d,b:p,a:n?~~((g+d+p)/3):0}},f=(()=>{try{return new ImageData(s.width,s.height,{colorSpace:"srgb"})}catch(w){if(w instanceof DOMException&&w.name==="IndexSizeError")return null;throw w}})();if(f==null)throw new EvalError("GIF frame size is to large");const y=e.nextByte(),v=e.readSubBlocksBin(),m=1<<y,C=(w,g)=>{const d=w>>>3,p=w&7;return(v[d]+(v[d+1]<<8)+(v[d+2]<<16)&(1<<g)-1<<p)>>>p};if(c){for(let w=0,g=y+1,d=0,p=[[0]],x=0;x<4;x++)if(Jc[x]<s.height){let b=0,k=0,P=!1;for(;!P;){const I=w;if(w=C(d,g),d+=g+1,w===m){g=y+1,p.length=m+2;for(let O=0;O<p.length;O++)p[O]=O<m?[O]:[]}else{w>=p.length?p.push(p[I].concat(p[I][0])):I!==m&&p.push(p[I].concat(p[w][0]));for(const O of p[w]){const{r:A,g:E,b:D,a:M}=h(O);f.data.set([A,E,D,M],Jc[x]*s.width+am[x]*k+b%(s.width*4)),b+=4}p.length===1<<g&&g<12&&g++}b===s.width*4*(k+1)&&(k++,Jc[x]+am[x]*k>=s.height&&(P=!0))}}s.image=f,s.bitmap=await createImageBitmap(f)}else{let w=0,g=y+1,d=0,p=-4,x=!1;const b=[[0]];for(;!x;){const k=w;if(w=C(d,g),d+=g,w===m){g=y+1,b.length=m+2;for(let P=0;P<b.length;P++)b[P]=P<m?[P]:[]}else{if(w===m+1){x=!0;break}w>=b.length?b.push(b[k].concat(b[k][0])):k!==m&&b.push(b[k].concat(b[w][0]));for(const P of b[w]){const{r:I,g:O,b:A,a:E}=h(P);f.data.set([I,O,A,E],p+=4)}b.length>=1<<g&&g<12&&g++}}s.image=f,s.bitmap=await createImageBitmap(f)}}async function JC(e,t,n,i,r,o){switch(e.nextByte()){case En.EndOfFile:return!0;case En.Image:await ZC(e,t,n,i,r);break;case En.Extension:KC(e,t,i,r);break;default:throw new EvalError("undefined block found")}return!1}function eP(e){for(const t of e.applicationExtensions)if(t.identifier+t.authenticationCode==="NETSCAPE2.0")return t.data[1]+(t.data[2]<<8);return NaN}async function tP(e,t,n){n||(n=!1);const i=await fetch(e);if(!i.ok&&i.status===404)throw new EvalError("file not found");const r=await i.arrayBuffer(),o={width:0,height:0,totalTime:0,colorRes:0,pixelAspectRatio:0,frames:[],sortFlag:!1,globalColorTable:[],backgroundImage:new ImageData(1,1,{colorSpace:"srgb"}),comments:[],applicationExtensions:[]},s=new qC(new Uint8ClampedArray(r));if(s.getString(6)!=="GIF89a")throw new Error("not a supported GIF file");o.width=s.nextTwoBytes(),o.height=s.nextTwoBytes();const a=s.nextByte(),l=(a&128)===128;o.colorRes=(a&112)>>>4,o.sortFlag=(a&8)===8;const c=1<<(a&7)+1,u=s.nextByte();o.pixelAspectRatio=s.nextByte(),o.pixelAspectRatio!==0&&(o.pixelAspectRatio=(o.pixelAspectRatio+15)/64),l&&(o.globalColorTable=rv(s,c));const h=(()=>{try{return new ImageData(o.width,o.height,{colorSpace:"srgb"})}catch(p){if(p instanceof DOMException&&p.name==="IndexSizeError")return null;throw p}})();if(h==null)throw new Error("GIF frame size is to large");const{r:f,g:y,b:v}=o.globalColorTable[u];h.data.set(l?[f,y,v,255]:[0,0,0,0]);for(let p=4;p<h.data.length;p*=2)h.data.copyWithin(p,0,p);o.backgroundImage=h;let m=-1,C=!0,w=-1;const g=p=>(p&&(C=!0),m),d=p=>(p!=null&&(w=p),w);try{do C&&(o.frames.push({left:0,top:0,width:0,height:0,disposalMethod:Yt.Replace,image:new ImageData(1,1,{colorSpace:"srgb"}),plainTextData:null,userInputDelayFlag:!1,delayTime:0,sortFlag:!1,localColorTable:[],reserved:0,GCreserved:0}),m++,w=-1,C=!1);while(!await JC(s,o,n,g,d,t));o.frames.length--;for(const p of o.frames){if(p.userInputDelayFlag&&p.delayTime===0){o.totalTime=1/0;break}o.totalTime+=p.delayTime}return o}catch(p){throw p instanceof EvalError?new Error(`error while parsing frame ${m} "${p.message}"`):p}}function nP(e){const{context:t,radius:n,particle:i,delta:r}=e,o=i.image;if(!(o!=null&&o.gifData)||!o.gif)return;const s=new OffscreenCanvas(o.gifData.width,o.gifData.height),a=s.getContext("2d");if(!a)throw new Error("could not create offscreen canvas context");a.imageSmoothingQuality="low",a.imageSmoothingEnabled=!1,a.clearRect(lt.x,lt.y,s.width,s.height),i.gifLoopCount===void 0&&(i.gifLoopCount=o.gifLoopCount??md);let l=i.gifFrame??QC;const c={x:-o.gifData.width*lm,y:-o.gifData.height*lm},u=o.gifData.frames[l];if(i.gifTime===void 0&&(i.gifTime=GC),!!u.bitmap){switch(t.scale(n/o.gifData.width,n/o.gifData.height),u.disposalMethod){case Yt.UndefinedA:case Yt.UndefinedB:case Yt.UndefinedC:case Yt.UndefinedD:case Yt.Replace:a.drawImage(u.bitmap,u.left,u.top),t.drawImage(s,c.x,c.y),a.clearRect(lt.x,lt.y,s.width,s.height);break;case Yt.Combine:a.drawImage(u.bitmap,u.left,u.top),t.drawImage(s,c.x,c.y);break;case Yt.RestoreBackground:a.drawImage(u.bitmap,u.left,u.top),t.drawImage(s,c.x,c.y),a.clearRect(lt.x,lt.y,s.width,s.height),o.gifData.globalColorTable.length?a.putImageData(o.gifData.backgroundImage,c.x,c.y):a.putImageData(o.gifData.frames[cm].image,c.x+u.left,c.y+u.top);break;case Yt.RestorePrevious:{const h=a.getImageData(lt.x,lt.y,s.width,s.height);a.drawImage(u.bitmap,u.left,u.top),t.drawImage(s,c.x,c.y),a.clearRect(lt.x,lt.y,s.width,s.height),a.putImageData(h,lt.x,lt.y)}break}if(i.gifTime+=r.value,i.gifTime>u.delayTime){if(i.gifTime-=u.delayTime,++l>=o.gifData.frames.length){if(--i.gifLoopCount<=md)return;l=cm,a.clearRect(lt.x,lt.y,s.width,s.height)}i.gifFrame=l}t.scale(o.gifData.width/n,o.gifData.height/n)}}async function iP(e){if(e.type!=="gif"){await _l(e);return}e.loading=!0;try{e.gifData=await tP(e.source),e.gifLoopCount=eP(e.gifData)??md,e.gifLoopCount||(e.gifLoopCount=1/0)}catch{e.error=!0}e.loading=!1}const rP=2,oP=1,sP=12,aP=1;class lP{constructor(t){this.validTypes=["image","images"],this.loadImageShape=async n=>{if(!this._engine.loadImage)throw new Error(`${Nt} image shape not initialized`);await this._engine.loadImage({gif:n.gif,name:n.name,replaceColor:n.replaceColor??!1,src:n.src})},this._engine=t}addImage(t){this._engine.images||(this._engine.images=[]),this._engine.images.push(t)}draw(t){const{context:n,radius:i,particle:r,opacity:o}=t,s=r.image,a=s==null?void 0:s.element;if(s){if(n.globalAlpha=o,s.gif&&s.gifData)nP(t);else if(a){const l=s.ratio,c={x:-i,y:-i},u=i*rP;n.drawImage(a,c.x,c.y,u,u/l)}n.globalAlpha=oP}}getSidesCount(){return sP}async init(t){const n=t.actualOptions;if(!(!n.preload||!this._engine.loadImage))for(const i of n.preload)await this._engine.loadImage(i)}loadShape(t){if(t.shape!=="image"&&t.shape!=="images")return;this._engine.images||(this._engine.images=[]);const n=t.shapeData;if(!n)return;this._engine.images.find(r=>r.name===n.name||r.source===n.src)||this.loadImageShape(n).then(()=>{this.loadShape(t)})}particleInit(t,n){if(n.shape!=="image"&&n.shape!=="images")return;this._engine.images||(this._engine.images=[]);const i=this._engine.images,r=n.shapeData;if(!r)return;const o=n.getFillColor(),s=i.find(l=>l.name===r.name||l.source===r.src);if(!s)return;const a=r.replaceColor??s.replaceColor;if(s.loading){setTimeout(()=>{this.particleInit(t,n)});return}(async()=>{let l;s.svgData&&o?l=await XC(s,r,o,n):l={color:o,data:s,element:s.element,gif:s.gif,gifData:s.gifData,gifLoopCount:s.gifLoopCount,loaded:!0,ratio:r.width&&r.height?r.width/r.height:s.ratio??aP,replaceColor:a,source:r.src},l.ratio||(l.ratio=1);const c=r.fill??n.shapeFill,u=r.close??n.shapeClose,h={image:l,fill:c,close:u};n.image=h.image,n.shapeFill=h.fill,n.shapeClose=h.close})()}}class cP{constructor(){this.src="",this.gif=!1}load(t){t&&(t.gif!==void 0&&(this.gif=t.gif),t.height!==void 0&&(this.height=t.height),t.name!==void 0&&(this.name=t.name),t.replaceColor!==void 0&&(this.replaceColor=t.replaceColor),t.src!==void 0&&(this.src=t.src),t.width!==void 0&&(this.width=t.width))}}class uP{constructor(t){this.id="imagePreloader",this._engine=t}async getPlugin(){return await Promise.resolve(),{}}loadOptions(t,n){if(!(n!=null&&n.preload))return;t.preload||(t.preload=[]);const i=t.preload;for(const r of n.preload){const o=i.find(s=>s.name===r.name||s.src===r.src);if(o)o.load(r);else{const s=new cP;s.load(r),i.push(s)}}}needsPlugin(){return!0}}const dP=3;function fP(e){e.loadImage||(e.loadImage=async t=>{if(!t.name&&!t.src)throw new Error(`${Nt} no image source provided`);if(e.images||(e.images=[]),!e.images.find(n=>n.name===t.name||n.source===t.src))try{const n={gif:t.gif??!1,name:t.name??t.src,source:t.src,type:t.src.substring(t.src.length-dP),error:!1,loading:!0,replaceColor:t.replaceColor,ratio:t.width&&t.height?t.width/t.height:void 0};e.images.push(n);let i;t.gif?i=iP:i=t.replaceColor?YC:_l,await i(n)}catch{throw new Error(`${Nt} ${t.name??t.src} not found`)}})}async function hP(e,t=!0){fP(e);const n=new uP(e);await e.addPlugin(n,t),await e.addShape(new lP(e),t)}class pP extends Hi{constructor(){super(),this.sync=!1}load(t){t&&(super.load(t),t.sync!==void 0&&(this.sync=t.sync))}}class mP extends Hi{constructor(){super(),this.sync=!1}load(t){t&&(super.load(t),t.sync!==void 0&&(this.sync=t.sync))}}class gP{constructor(){this.count=0,this.delay=new pP,this.duration=new mP}load(t){t&&(t.count!==void 0&&(this.count=t.count),this.delay.load(t.delay),this.duration.load(t.duration))}}const Qi=0,yP=-1,um=0,dm=0;function vP(e,t,n){if(!e.life)return;const i=e.life;let r=!1;if(e.spawning)if(i.delayTime+=t.value,i.delayTime>=e.life.delay)r=!0,e.spawning=!1,i.delayTime=Qi,i.time=Qi;else return;if(i.duration===yP||e.spawning||(r?i.time=Qi:i.time+=t.value,i.time<i.duration))return;if(i.time=Qi,e.life.count>um&&e.life.count--,e.life.count===um){e.destroy();return}const o=J(dm,n.width),s=J(dm,n.width);e.position.x=St(o),e.position.y=St(s),e.spawning=!0,i.delayTime=Qi,i.time=Qi,e.reset();const a=e.options.life;a&&(i.delay=W(a.delay.value)*Qe,i.duration=W(a.duration.value)*Qe)}const pi=0,fm=1,hm=-1;class wP{constructor(t){this.container=t}init(t){const n=this.container,i=t.options,r=i.life;r&&(t.life={delay:n.retina.reduceFactor?W(r.delay.value)*(r.delay.sync?fm:de())/n.retina.reduceFactor*Qe:pi,delayTime:pi,duration:n.retina.reduceFactor?W(r.duration.value)*(r.duration.sync?fm:de())/n.retina.reduceFactor*Qe:pi,time:pi,count:r.count},t.life.duration<=pi&&(t.life.duration=hm),t.life.count<=pi&&(t.life.count=hm),t.life&&(t.spawning=t.life.delay>pi))}isEnabled(t){return!t.destroyed}loadOptions(t,...n){t.life||(t.life=new gP);for(const i of n)t.life.load(i==null?void 0:i.life)}update(t,n){!this.isEnabled(t)||!t.life||vP(t,n,this.container.canvas.size)}}async function xP(e,t=!0){await e.addParticleUpdater("life",async n=>Promise.resolve(new wP(n)),t)}function bP(e){const{context:t,particle:n,radius:i}=e,r=n.shapeData,o=0;t.moveTo(-i,o),t.lineTo(i,o),t.lineCap=(r==null?void 0:r.cap)??"butt"}const SP=1;class kP{constructor(){this.validTypes=["line"]}draw(t){bP(t)}getSidesCount(){return SP}}async function _P(e,t=!0){await e.addShape(new kP,t)}const pm=.5;class CP{init(){}isEnabled(t){return!Bi()&&!t.destroyed&&t.container.actualOptions.interactivity.events.onHover.parallax.enable}move(t){const n=t.container,i=n.actualOptions,r=i.interactivity.events.onHover.parallax;if(Bi()||!r.enable)return;const o=r.force,s=n.interactivity.mouse.position;if(!s)return;const a=n.canvas.size,l={x:a.width*pm,y:a.height*pm},c=r.smooth,u=t.getRadius()/o,h={x:(s.x-l.x)*u,y:(s.y-l.y)*u},{offset:f}=t;f.x+=(h.x-f.x)/c,f.y+=(h.y-f.y)/c}}async function PP(e,t=!0){await e.addMover("parallax",()=>Promise.resolve(new CP),t)}const mm=1e3,EP=1;class IP extends Rf{constructor(t){super(t)}clear(){}init(){}interact(t){const n=this.container;t.attractDistance===void 0&&(t.attractDistance=W(t.options.move.attract.distance)*n.retina.pixelRatio);const i=t.attractDistance,r=t.getPosition(),o=n.particles.quadTree.queryCircle(r,i);for(const s of o){if(t===s||!s.options.move.attract.enable||s.destroyed||s.spawning)continue;const a=s.getPosition(),{dx:l,dy:c}=rt(r,a),u=t.options.move.attract.rotate,h=l/(u.x*mm),f=c/(u.y*mm),y=s.size.value/t.size.value,v=EP/y;t.velocity.x-=h*y,t.velocity.y-=f*y,s.velocity.x+=h*v,s.velocity.y+=f*v}}isEnabled(t){return t.options.move.attract.enable}reset(){}}async function TP(e,t=!0){await e.addInteractor("particlesAttract",n=>Promise.resolve(new IP(n)),t)}const OP=.5,MP=10,DP=0;function gm(e,t,n,i,r,o){const s=Bt(e.options.collisions.absorb.speed*r.factor/MP,DP,i);e.size.value+=s*OP,n.size.value-=s,i<=o&&(n.size.value=0,n.destroy())}function $P(e,t,n,i){const r=e.getRadius(),o=t.getRadius();r===void 0&&o!==void 0?e.destroy():r!==void 0&&o===void 0?t.destroy():r!==void 0&&o!==void 0&&(r>=o?gm(e,r,t,o,n,i):gm(t,o,e,r,n,i))}const ym=e=>{e.collisionMaxSpeed===void 0&&(e.collisionMaxSpeed=W(e.options.collisions.maxSpeed)),e.velocity.length>e.collisionMaxSpeed&&(e.velocity.length=e.collisionMaxSpeed)};function ov(e,t){Ry(ud(e),ud(t)),ym(e),ym(t)}function AP(e,t){!e.unbreakable&&!t.unbreakable&&ov(e,t),e.getRadius()===void 0&&t.getRadius()!==void 0?e.destroy():e.getRadius()!==void 0&&t.getRadius()===void 0?t.destroy():e.getRadius()!==void 0&&t.getRadius()!==void 0&&(e.getRadius()>=t.getRadius()?t:e).destroy()}function RP(e,t,n,i){switch(e.options.collisions.mode){case kr.absorb:{$P(e,t,n,i);break}case kr.bounce:{ov(e,t);break}case kr.destroy:{AP(e,t);break}}}const zP=2;class LP extends Rf{constructor(t){super(t)}clear(){}init(){}interact(t,n){if(t.destroyed||t.spawning)return;const i=this.container,r=t.getPosition(),o=t.getRadius(),s=i.particles.quadTree.queryCircle(r,o*zP);for(const a of s){if(t===a||!a.options.collisions.enable||t.options.collisions.mode!==a.options.collisions.mode||a.destroyed||a.spawning)continue;const l=a.getPosition(),c=a.getRadius();if(Math.abs(Math.round(r.z)-Math.round(l.z))>o+c)continue;const u=_t(r,l),h=o+c;u>h||RP(t,a,n,i.retina.pixelRatio)}}isEnabled(t){return t.options.collisions.enable}reset(){}}async function jP(e,t=!0){await e.addInteractor("particlesCollisions",n=>Promise.resolve(new LP(n)),t)}const eu=2;class FP extends Ge{constructor(t,n,i,r){super(t,n,i),this.canvasSize=r,this.canvasSize={...r}}contains(t){const{width:n,height:i}=this.canvasSize,{x:r,y:o}=t;return super.contains(t)||super.contains({x:r-n,y:o})||super.contains({x:r-n,y:o-i})||super.contains({x:r,y:o-i})}intersects(t){if(super.intersects(t))return!0;const n=t,i=t,r={x:t.position.x-this.canvasSize.width,y:t.position.y-this.canvasSize.height};if(i.radius!==void 0){const o=new Ge(r.x,r.y,i.radius*eu);return super.intersects(o)}else if(n.size!==void 0){const o=new on(r.x,r.y,n.size.width*eu,n.size.height*eu);return super.intersects(o)}return!1}}class NP{constructor(){this.blur=5,this.color=new Je,this.color.value="#000",this.enable=!1}load(t){t&&(t.blur!==void 0&&(this.blur=t.blur),this.color=Je.create(this.color,t.color),t.enable!==void 0&&(this.enable=t.enable))}}class BP{constructor(){this.enable=!1,this.frequency=1}load(t){t&&(t.color!==void 0&&(this.color=Je.create(this.color,t.color)),t.enable!==void 0&&(this.enable=t.enable),t.frequency!==void 0&&(this.frequency=t.frequency),t.opacity!==void 0&&(this.opacity=t.opacity))}}class UP{constructor(){this.blink=!1,this.color=new Je,this.color.value="#fff",this.consent=!1,this.distance=100,this.enable=!1,this.frequency=1,this.opacity=1,this.shadow=new NP,this.triangles=new BP,this.width=1,this.warp=!1}load(t){t&&(t.id!==void 0&&(this.id=t.id),t.blink!==void 0&&(this.blink=t.blink),this.color=Je.create(this.color,t.color),t.consent!==void 0&&(this.consent=t.consent),t.distance!==void 0&&(this.distance=t.distance),t.enable!==void 0&&(this.enable=t.enable),t.frequency!==void 0&&(this.frequency=t.frequency),t.opacity!==void 0&&(this.opacity=t.opacity),this.shadow.load(t.shadow),this.triangles.load(t.triangles),t.width!==void 0&&(this.width=t.width),t.warp!==void 0&&(this.warp=t.warp))}}const vm=2,WP=1,Hs={x:0,y:0},HP=0;function VP(e,t,n,i,r){const{dx:o,dy:s,distance:a}=rt(e,t);if(!r||a<=n)return a;const l={x:Math.abs(o),y:Math.abs(s)},c={x:Math.min(l.x,i.width-l.x),y:Math.min(l.y,i.height-l.y)};return Math.sqrt(c.x**vm+c.y**vm)}class YP extends Rf{constructor(t){super(t),this._setColor=n=>{if(!n.options.links)return;const i=this.linkContainer,r=n.options.links;let o=r.id===void 0?i.particles.linksColor:i.particles.linksColors.get(r.id);if(o)return;const s=r.color;o=Uy(s,r.blink,r.consent),r.id===void 0?i.particles.linksColor=o:i.particles.linksColors.set(r.id,o)},this.linkContainer=t}clear(){}init(){this.linkContainer.particles.linksColor=void 0,this.linkContainer.particles.linksColors=new Map}interact(t){if(!t.options.links)return;t.links=[];const n=t.getPosition(),i=this.container,r=i.canvas.size;if(n.x<Hs.x||n.y<Hs.y||n.x>r.width||n.y>r.height)return;const o=t.options.links,s=o.opacity,a=t.retina.linksDistance??HP,l=o.warp;let c;l?c=new FP(n.x,n.y,a,r):c=new Ge(n.x,n.y,a);const u=i.particles.quadTree.query(c);for(const h of u){const f=h.options.links;if(t===h||!(f!=null&&f.enable)||o.id!==f.id||h.spawning||h.destroyed||!h.links||t.links.some(C=>C.destination===h)||h.links.some(C=>C.destination===t))continue;const y=h.getPosition();if(y.x<Hs.x||y.y<Hs.y||y.x>r.width||y.y>r.height)continue;const v=VP(n,y,a,r,l&&f.warp);if(v>a)continue;const m=(WP-v/a)*s;this._setColor(t),t.links.push({destination:h,opacity:m})}}isEnabled(t){var n;return!!((n=t.options.links)!=null&&n.enable)}loadParticlesOptions(t,...n){t.links||(t.links=new UP);for(const i of n)t.links.load(i==null?void 0:i.links)}reset(){}}async function XP(e,t=!0){await e.addInteractor("particlesLinks",async n=>Promise.resolve(new YP(n)),t)}function qP(e,t,n,i){e.beginPath(),e.moveTo(t.x,t.y),e.lineTo(n.x,n.y),e.lineTo(i.x,i.y),e.closePath()}function QP(e){let t=!1;const{begin:n,end:i,maxDistance:r,context:o,canvasSize:s,width:a,backgroundMask:l,colorLine:c,opacity:u,links:h}=e;if(_t(n,i)<=r)To(o,n,i),t=!0;else if(h.warp){let y,v;const m={x:i.x-s.width,y:i.y},C=rt(n,m);if(C.distance<=r){const w=n.y-C.dy/C.dx*n.x;y={x:0,y:w},v={x:s.width,y:w}}else{const w={x:i.x,y:i.y-s.height},g=rt(n,w);if(g.distance<=r){const p=-(n.y-g.dy/g.dx*n.x)/(g.dy/g.dx);y={x:p,y:0},v={x:p,y:s.height}}else{const d={x:i.x-s.width,y:i.y-s.height},p=rt(n,d);if(p.distance<=r){const x=n.y-p.dy/p.dx*n.x;y={x:-x/(p.dy/p.dx),y:x},v={x:y.x+s.width,y:y.y+s.height}}}}y&&v&&(To(o,n,y),To(o,i,v),t=!0)}if(!t)return;o.lineWidth=a,l.enable&&(o.globalCompositeOperation=l.composite),o.strokeStyle=Tn(c,u);const{shadow:f}=h;if(f.enable){const y=tn(f.color);y&&(o.shadowBlur=f.blur,o.shadowColor=Tn(y))}o.stroke()}function GP(e){const{context:t,pos1:n,pos2:i,pos3:r,backgroundMask:o,colorTriangle:s,opacityTriangle:a}=e;qP(t,n,i,r),o.enable&&(t.globalCompositeOperation=o.composite),t.fillStyle=Tn(s,a),t.fill()}function KP(e){return e.sort((t,n)=>t-n),e.join("_")}function wm(e,t){const n=KP(e.map(r=>r.id));let i=t.get(n);return i===void 0&&(i=de(),t.set(n,i)),i}const xm=0,tu=0,bm=0,ZP=.5,JP=1;class eE{constructor(t){this.container=t,this._drawLinkLine=(n,i)=>{const r=n.options.links;if(!(r!=null&&r.enable))return;const o=this.container,s=o.actualOptions,a=i.destination,l=n.getPosition(),c=a.getPosition();let u=i.opacity;o.canvas.draw(h=>{var w;let f;const y=(w=n.options.twinkle)==null?void 0:w.lines;if(y!=null&&y.enable){const g=y.frequency,d=tn(y.color);de()<g&&d&&(f=d,u=W(y.opacity))}if(!f){const g=r.id!==void 0?o.particles.linksColors.get(r.id):o.particles.linksColor;f=fd(n,a,g)}if(!f)return;const v=n.retina.linksWidth??tu,m=n.retina.linksDistance??bm,{backgroundMask:C}=s;QP({context:h,width:v,begin:l,end:c,maxDistance:m,canvasSize:o.canvas.size,links:r,backgroundMask:C,colorLine:f,opacity:u})})},this._drawLinkTriangle=(n,i,r)=>{const o=n.options.links;if(!(o!=null&&o.enable))return;const s=o.triangles;if(!s.enable)return;const a=this.container,l=a.actualOptions,c=i.destination,u=r.destination,h=s.opacity??(i.opacity+r.opacity)*ZP;h<=xm||a.canvas.draw(f=>{const y=n.getPosition(),v=c.getPosition(),m=u.getPosition(),C=n.retina.linksDistance??bm;if(_t(y,v)>C||_t(m,v)>C||_t(m,y)>C)return;let w=tn(s.color);if(!w){const g=o.id!==void 0?a.particles.linksColors.get(o.id):a.particles.linksColor;w=fd(n,c,g)}w&&GP({context:f,pos1:y,pos2:v,pos3:m,backgroundMask:l.backgroundMask,colorTriangle:w,opacityTriangle:h})})},this._drawTriangles=(n,i,r,o)=>{var l,c,u;const s=r.destination;if(!((l=n.links)!=null&&l.triangles.enable&&((c=s.options.links)!=null&&c.triangles.enable)))return;const a=(u=s.links)==null?void 0:u.filter(h=>{const f=this._getLinkFrequency(s,h.destination);return s.options.links&&f<=s.options.links.frequency&&o.findIndex(v=>v.destination===h.destination)>=0});if(a!=null&&a.length)for(const h of a){const f=h.destination;this._getTriangleFrequency(i,s,f)>n.links.triangles.frequency||this._drawLinkTriangle(i,r,h)}},this._getLinkFrequency=(n,i)=>wm([n,i],this._freqs.links),this._getTriangleFrequency=(n,i,r)=>wm([n,i,r],this._freqs.triangles),this._freqs={links:new Map,triangles:new Map}}drawParticle(t,n){const{links:i,options:r}=n;if(!(i!=null&&i.length))return;const o=i.filter(s=>r.links&&(r.links.frequency>=JP||this._getLinkFrequency(n,s.destination)<=r.links.frequency));for(const s of o)this._drawTriangles(r,n,s,o),s.opacity>xm&&(n.retina.linksWidth??tu)>tu&&this._drawLinkLine(n,s)}async init(){this._freqs.links=new Map,this._freqs.triangles=new Map,await Promise.resolve()}particleCreated(t){if(t.links=[],!t.options.links)return;const n=this.container.retina.pixelRatio,{retina:i}=t,{distance:r,width:o}=t.options.links;i.linksDistance=r*n,i.linksWidth=o*n}particleDestroyed(t){t.links=[]}}class tE{constructor(){this.id="links"}getPlugin(t){return Promise.resolve(new eE(t))}loadOptions(){}needsPlugin(){return!0}}async function nE(e,t=!0){const n=new tE;await e.addPlugin(n,t)}async function iE(e,t=!0){await XP(e,t),await nE(e,t)}const rE=180,Vs={x:0,y:0},oE=2;function sE(e,t,n){const{context:i}=e,r=n.count.numerator*n.count.denominator,o=n.count.numerator/n.count.denominator,s=rE*(o-oE)/o,a=Math.PI-ni(s);if(i){i.beginPath(),i.translate(t.x,t.y),i.moveTo(Vs.x,Vs.y);for(let l=0;l<r;l++)i.lineTo(n.length,Vs.y),i.translate(n.length,Vs.y),i.rotate(a)}}const aE=5;class sv{draw(t){const{particle:n,radius:i}=t,r=this.getCenter(n,i),o=this.getSidesData(n,i);sE(t,r,o)}getSidesCount(t){const n=t.shapeData;return Math.round(W((n==null?void 0:n.sides)??aE))}}const Sm=3.5,km=2.66,lE=3;class cE extends sv{constructor(){super(...arguments),this.validTypes=["polygon"]}getCenter(t,n){return{x:-n/(t.sides/Sm),y:-n/(km/Sm)}}getSidesData(t,n){const i=t.sides;return{count:{denominator:1,numerator:i},length:n*km/(i/lE)}}}const uE=1.66,dE=3,fE=2;class hE extends sv{constructor(){super(...arguments),this.validTypes=["triangle"]}getCenter(t,n){return{x:-n,y:n/uE}}getSidesCount(){return dE}getSidesData(t,n){const i=n*fE;return{count:{denominator:2,numerator:3},length:i}}}async function pE(e,t=!0){await e.addShape(new cE,t)}async function mE(e,t=!0){await e.addShape(new hE,t)}async function gE(e,t=!0){await pE(e,t),await mE(e,t)}class yE{constructor(){this.enable=!1,this.speed=0,this.decay=0,this.sync=!1}load(t){t&&(t.enable!==void 0&&(this.enable=t.enable),t.speed!==void 0&&(this.speed=J(t.speed)),t.decay!==void 0&&(this.decay=J(t.decay)),t.sync!==void 0&&(this.sync=t.sync))}}class vE extends Hi{constructor(){super(),this.animation=new yE,this.direction=$t.clockwise,this.path=!1,this.value=0}load(t){t&&(super.load(t),t.direction!==void 0&&(this.direction=t.direction),this.animation.load(t.animation),t.path!==void 0&&(this.path=t.path))}}const av=2,wE=Math.PI*av,xE=1,bE=360;class SE{constructor(t){this.container=t}init(t){const n=t.options.rotate;if(!n)return;t.rotate={enable:n.animation.enable,value:ni(W(n.value)),min:0,max:wE},t.pathRotation=n.path;let i=n.direction;switch(i===$t.random&&(i=Math.floor(de()*av)>0?$t.counterClockwise:$t.clockwise),i){case $t.counterClockwise:case"counterClockwise":t.rotate.status=Ce.decreasing;break;case $t.clockwise:t.rotate.status=Ce.increasing;break}const r=n.animation;r.enable&&(t.rotate.decay=xE-W(r.decay),t.rotate.velocity=W(r.speed)/bE*this.container.retina.reduceFactor,r.sync||(t.rotate.velocity*=de())),t.rotation=t.rotate.value}isEnabled(t){const n=t.options.rotate;return n?!t.destroyed&&!t.spawning&&(!!n.value||n.animation.enable||n.path):!1}loadOptions(t,...n){t.rotate||(t.rotate=new vE);for(const i of n)t.rotate.load(i==null?void 0:i.rotate)}update(t,n){this.isEnabled(t)&&(t.isRotating=!!t.rotate,t.rotate&&(Mf(t,t.rotate,!1,Fi.none,n),t.rotation=t.rotate.value))}}async function kE(e,t=!0){await e.addParticleUpdater("rotate",n=>Promise.resolve(new SE(n)),t)}const _E=2,CE=Math.sqrt(_E),PE=2;function EE(e){const{context:t,radius:n}=e,i=n/CE,r=i*PE;t.rect(-i,-i,r,r)}const IE=4;class TE{constructor(){this.validTypes=["edge","square"]}draw(t){EE(t)}getSidesCount(){return IE}}async function OE(e,t=!0){await e.addShape(new TE,t)}const ME=2,Gi={x:0,y:0};function DE(e){const{context:t,particle:n,radius:i}=e,r=n.sides,o=n.starInset??ME;t.moveTo(Gi.x,Gi.y-i);for(let s=0;s<r;s++)t.rotate(Math.PI/r),t.lineTo(Gi.x,Gi.y-i*o),t.rotate(Math.PI/r),t.lineTo(Gi.x,Gi.y-i)}const $E=2,AE=5;class RE{constructor(){this.validTypes=["star"]}draw(t){DE(t)}getSidesCount(t){const n=t.shapeData;return Math.round(W((n==null?void 0:n.sides)??AE))}particleInit(t,n){const i=n.shapeData;n.starInset=W((i==null?void 0:i.inset)??$E)}}async function zE(e,t=!0){await e.addShape(new RE,t)}const LE=1;class jE{constructor(t){this.container=t}init(t){var s;const n=this.container,i=t.options,r=Gt(i.stroke,t.id,i.reduceDuplicates);t.strokeWidth=W(r.width)*n.retina.pixelRatio,t.strokeOpacity=W(r.opacity??LE),t.strokeAnimation=(s=r.color)==null?void 0:s.animation;const o=Go(r.color)??t.getFillColor();o&&(t.strokeColor=Wy(o,t.strokeAnimation,n.retina.reduceFactor))}isEnabled(t){const n=t.strokeAnimation,{strokeColor:i}=t;return!t.destroyed&&!t.spawning&&!!n&&((i==null?void 0:i.h.value)!==void 0&&i.h.enable||(i==null?void 0:i.s.value)!==void 0&&i.s.enable||(i==null?void 0:i.l.value)!==void 0&&i.l.enable)}update(t,n){this.isEnabled(t)&&Hy(t.strokeColor,n)}}async function FE(e,t=!0){await e.addParticleUpdater("strokeColor",n=>Promise.resolve(new jE(n)),t)}async function NE(e,t=!0){await PP(e,!1),await O_(e,!1),await F_(e,!1),await X_(e,!1),await iC(e,!1),await hC(e,!1),await gC(e,!1),await bC(e,!1),await CC(e,!1),await zC(e,!1),await BC(e,!1),await TP(e,!1),await jP(e,!1),await iE(e,!1),await x_(),await k_(e,!1),await hP(e,!1),await _P(e,!1),await gE(e,!1),await OE(e,!1),await zE(e,!1),await xP(e,!1),await kE(e,!1),await FE(e,!1),await w_(e,t)}const S={dark:{color:{background:{bannerBorder:"rgba(71, 71, 71, 0.30)",card:"rgba(53, 53, 53, 1)",form:"rgba(44, 43, 43, 1)",input:"rgba(57, 56, 56, 1)",primary:"rgba(34, 34, 34, 1)",second:"rgba(36, 51, 92, 1)"},text:{link:"rgb(68, 116, 248)",placeholder:"rgba(165, 165, 165, 1)",primary:"rgb(255, 255, 255)",second:"rgba(57, 57, 57, 1)"}},gradient:{banner:"linear-gradient(147deg, rgba(57, 57, 57, 0.50) -6.76%, rgba(0, 66, 255, 0.05) 102.96%)",dot:"linear-gradient(180deg, rgba(166, 188, 250, 1), rgba(33, 87, 242, 1))"},shadow:{card:"rgba(0, 0, 0, 0.15) 0 4px 6px",main:"rgba(0, 0, 0, 0.05) 8px 8px 34px",text:"rgba(0, 0, 0,  0.25) 0 4px 4px"}},light:{color:{background:{bannerBorder:"rgba(255, 255, 255, 0.6)",card:"rgba(249, 249, 252, 1)",form:"rgb(255, 255, 255)",input:"rgba(245, 245, 245, 1)",primary:"rgb(255, 255, 255)",second:"rgb(166, 188, 250)"},text:{link:"rgba(33, 87, 242, 1)",placeholder:"rgba(165, 165, 165, 1)",primary:"rgb(57, 57, 57)",second:"rgb(255, 255, 255)"}},gradient:{banner:"linear-gradient(147deg, rgba(255, 255, 255, 0.50) -6.76%, rgba(0, 71, 255, 0.05) 102.96%)",dot:"linear-gradient(180deg, rgba(166, 188, 250, 1), rgba(33, 87, 242, 1))"},shadow:{card:"rgba(0, 0, 0, 0.15) 0 4px 6px",main:"rgba(0, 0, 0, 0.05) 8px 8px 34px",text:"rgba(0, 0, 0,  0.25) 0 4px 4px"}},media:{mobile:"screen and (max-width: 576px)",tablet:"screen and (max-width: 768px)"}},BE={interactivity:{events:{onClick:{enable:!1,mode:"push"},onHover:{enable:!0,mode:"bubble",parallax:{enable:!1,force:2,smooth:10}}},modes:{bubble:{distance:40,duration:2,opacity:8,size:6},connect:{distance:80,links:{opacity:.5},radius:80},grab:{distance:400,links:{opacity:1}},push:{quantity:4},remove:{quantity:2},repulse:{distance:200,duration:.4},slow:{active:!1,factor:1,radius:0}}},key:"polygonMask",name:"Polygon Mask",particles:{color:{value:S.light.color.background.second},move:{enable:!0,outModes:"bounce",speed:.4},number:{value:20},opacity:{animation:{enable:!0,speed:.5,sync:!1},value:{max:.4,min:.05}},shape:{type:["circle","triangle","square"]},size:{value:{max:15,min:5}}}},Cl=e=>+e.replace(/(^.+\D)(\d+)(\D.+$)/i,"$2"),UE=j.memo(()=>{const[e,t]=j.useState(!1),{width:n}=at(),i=Cl(S.media.mobile);return j.useEffect(()=>{n&&n>i?jk(async r=>{await NE(r)}).then(()=>{t(!0)}):t(!1)},[n]),e?_.jsx(Lk,{id:"tsparticles",options:BE}):null}),ye=z.a`
  display: flex;
  white-space: nowrap;
  align-items: center;
  justify-content: center;
  color: ${e=>e.color||(e.theme==="light"?S.light.color.text.link:S.dark.color.text.link)};
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-shadow: ${e=>e.theme==="light"?S.light.shadow.text:S.dark.shadow.text};
  }
  ${e=>e.type==="button"&&Ti`
      border-radius: ${t=>t.borderRadius||"0px"};
      padding: ${t=>t.padding||"0px"};
      background-color: ${t=>t.background||(n=>n.theme==="light"?S.light.color.text.link:S.dark.color.text.link)};
      &:hover {
        box-shadow: ${t=>t.theme==="light"?S.light.shadow.card:S.dark.shadow.card};
      }
    `}
`,WE="data:image/svg+xml,%3csvg%20width='1440'%20height='153'%20viewBox='0%200%201440%20153'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M-1201.13%2044.7823C-1201.13%2044.7823%20-1099.63%204.58005%20-959.747%201.09382C-795.61%20-2.99693%20-797.448%2043.8551%20-631.47%2044.7823C-458.116%2045.7507%20-452.498%201.45838%20-279.055%201.09382C-102.606%200.722937%20-93.2496%2046.1381%2083.0148%2044.7823C248.904%2043.5064%20245.484%202.62348%20411.292%201.09382C589.739%20-0.552463%20601.88%2045.1485%20780.603%2044.7823C956.299%2044.4224%20964.581%201.62913%201140.26%201.09382C1320.49%200.544628%201334.92%2047.4908%201514.4%2044.7823C1674.03%2042.3734%201664.41%204.47381%201823.36%201.09382C2012.07%20-2.91869%202038.61%2044.0492%202228.88%2044.7823C2426.27%2045.5428%202458.7%200.593025%202656.13%201.09382C2848.79%201.58254%202876.48%2043.1002%203068.89%2044.7823C3278.92%2046.6186%203326.67%20-3.87903%203534.75%201.09382C3715.81%205.42086%203889.58%2050.6335%203889.58%2050.6335V71.5385V152.59H-1201.13V44.7823Z'%20fill='%2324335C'/%3e%3c/svg%3e",HE="data:image/svg+xml,%3csvg%20width='1440'%20height='153'%20viewBox='0%200%201440%20153'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M-1201.13%2044.7823C-1201.13%2044.7823%20-1099.63%204.58005%20-959.747%201.09382C-795.61%20-2.99693%20-797.448%2043.8551%20-631.47%2044.7823C-458.116%2045.7507%20-452.498%201.45838%20-279.055%201.09382C-102.606%200.722937%20-93.2496%2046.1381%2083.0148%2044.7823C248.904%2043.5064%20245.484%202.62348%20411.292%201.09382C589.739%20-0.552463%20601.88%2045.1485%20780.603%2044.7823C956.299%2044.4224%20964.581%201.62913%201140.26%201.09382C1320.49%200.544628%201334.92%2047.4908%201514.4%2044.7823C1674.03%2042.3734%201664.41%204.47381%201823.36%201.09382C2012.07%20-2.91869%202038.61%2044.0492%202228.88%2044.7823C2426.27%2045.5428%202458.7%200.593025%202656.13%201.09382C2848.79%201.58254%202876.48%2043.1002%203068.89%2044.7823C3278.92%2046.6186%203326.67%20-3.87903%203534.75%201.09382C3715.81%205.42086%203889.58%2050.6335%203889.58%2050.6335V71.5385V152.59H-1201.13V44.7823Z'%20fill='%23A5BBF8'/%3e%3c/svg%3e",V=z.div`
  display: flex;
  flex-direction: ${e=>e.direction||"row"};
  justify-content: ${e=>e.justify||"flex-start"};
  align-items: ${e=>e.align||"stretch"};
  flex-wrap: ${e=>e.wrap||"nowrap"};
  gap: ${e=>e.gap||"none"};
  width: ${e=>e.width||"none"};
  height: ${e=>e.height||"none"};
`,pe=({Fmax:e,Fmin:t,family:n,lineHeight:i,weight:r})=>`
   font-family: ${n||"Roboto"};
   font-weight: ${r||400};
   line-height: ${i||1};
   font-size: clamp(${t}px, calc( (100vw - 360px)/(1440 - 360) * (${e} - ${t}) + ${t}px), ${e}px);
`,VE=z.footer`
  height: 200px;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  border-bottom: 1px solid;
  background-color: ${e=>e.theme==="light"?S.light.color.background.primary:S.dark.color.background.primary};
`,YE=z.span`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  ${pe({Fmax:16,Fmin:13,family:"Inter, sans-serif",lineHeight:1,weight:700})}

  color: ${e=>e.theme==="light"?S.light.color.text.second:S.dark.color.text.primary};
  outline: 2px solid
    ${e=>e.theme==="light"?S.light.color.background.second:S.dark.color.background.second};
  background-color: ${e=>e.theme==="light"?S.light.color.background.second:S.dark.color.background.second};
  ${ye} {
    color: ${e=>e.theme==="light"?S.light.color.text.second:S.dark.color.text.primary};
  }
`,XE=z.span`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  ${pe({Fmax:11,Fmin:10,family:"Inter, sans-serif",lineHeight:1,weight:400})}
  color: ${e=>e.theme==="light"?S.light.color.text.second:S.dark.color.text.primary};
  padding-top: 6px;
  background-color: ${e=>e.theme==="light"?S.light.color.background.second:S.dark.color.background.second};
`,qE=z(V)`
  background-image: url(${e=>e.theme==="light"?HE:WE});
  background-size: contain;
  background-repeat: repeat-x;
  background-position: center bottom;
`,QE=z(V)`
  height: 70%;
  background-color: ${e=>e.theme==="light"?S.light.color.background.second:S.dark.color.background.second};
`,lo={BackgroundBottom:QE,BackgroundImgTop:qE,Copyrights:XE,Footer:VE,Name:YE},GE=()=>{const{theme:e}=at();return _.jsxs(lo.Footer,{theme:e,children:[_.jsx(lo.BackgroundImgTop,{height:"100%",theme:e,width:"100%"}),_.jsxs(lo.BackgroundBottom,{direction:"column",theme:e,width:"100%",children:[_.jsxs(lo.Name,{theme:e,children:["Coded by ",_.jsx(ye,{href:"mailto:proffery@gmail.com?subject=Mail from Portfolio",children:"Dmitry Shamko"})]}),_.jsxs(lo.Copyrights,{theme:e,children:["All Rights Reserved ",new Date().getFullYear()]})]})]})},KE="/assets/icons-sprite-4TBbk3Fg.svg",me=e=>_.jsx("svg",{height:e.height||"50px",viewBox:e.viewBox||"-8 -5 37 35",width:e.width||"50px",xmlns:"http://www.w3.org/2000/svg",children:_.jsx("use",{xlinkHref:`${KE}#${e.iconId}`})}),_m=e=>_.jsx(ZE,{"aria-label":"Logotype main page link",href:"#",children:_.jsx(JE,{color:e.color,children:" DS"})}),ZE=z.a`
  display: flex;
  align-items: center;
  z-index: 1;
`,JE=z.span`
  font-family: Kalam, sans-serif;
  font-weight: 700;
  font-size: 35px;
  color: ${e=>e.color==="gray"?S.light.color.text.primary:S.light.color.text.second};
  @media ${S.media.mobile} {
    font-size: 26px;
  }
`,Vi=z(V)`
  display: flex;
  flex-direction: ${e=>e.direction||"row"};
  max-width: 1440px;
  width: 90%;
  height: 100%;
  margin: 0 auto;
  padding: 0 0 60px 0;
  @media ${S.media.mobile} {
    padding: 27px 0;
  }
  @media ${S.media.mobile} {
    background-position:
      bottom right,
      center;
  }
`,e2=z.header`
  height: 75px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 99999;
  background-color: ${e=>e.theme==="light"?S.light.color.background.primary:S.dark.color.background.primary};
  color: ${e=>e.theme==="light"?S.light.color.text.primary:S.dark.color.text.primary};
  box-shadow: ${e=>e.scrolled&&S.light.shadow.main};
  @media ${S.media.mobile} {
    height: 44px;
  }
`,t2=z(Vi)`
  padding: 0;
  height: 75px;
  @media ${S.media.mobile} {
    height: 44px;
  }
`,n2=z(V)`
  display: flex;
  position: relative;
  width: 10%;
  z-index: 0;
  background-color: ${e=>e.theme==="light"&&e.scrolled?S.light.color.background.primary:t=>t.theme==="light"?S.light.color.background.second:n=>n.theme==="dark"&&n.scrolled?S.dark.color.background.primary:S.dark.color.background.second};
  &::after {
    position: absolute;
    content: '';
    width: 300%;
    height: 100%;
    background-color: ${e=>e.theme==="light"&&e.scrolled?S.light.color.background.primary:t=>t.theme==="light"?S.light.color.background.second:n=>n.theme==="dark"&&n.scrolled?S.dark.color.background.primary:S.dark.color.background.second};

    @media ${S.media.tablet} {
      width: 500%;
    }
  }
`,i2=z(V)`
  display: flex;
  background-color: ${e=>e.theme==="light"?S.light.color.background.primary:S.dark.color.background.primary};
`,r2=z(ye)`
  display: none;
  position: fixed;
  height: 50px;
  left: 0;
  top: 90%;
  transform-origin: top left;
  transform: rotate(-90deg);
  background-color: ${e=>e.theme==="light"?S.light.color.background.second:S.dark.color.background.second};
  border-radius: 0 0 22px 22px;
  border: 2px solid
    ${e=>e.theme==="light"?S.light.color.background.bannerBorder:S.dark.color.background.bannerBorder};

  color: ${e=>e.theme==="light"?S.light.color.text.second:S.dark.color.text.primary};
  z-index: -1;
  border-top: none;

  @media ${S.media.tablet} {
    display: flex;
    height: 40px;
    min-width: 80px;
    border-radius: 0 0 18px 18px;
  }

  @media ${S.media.mobile} {
    height: 30px;
    min-width: 70px;
    border-radius: 0 0 16px 16px;
  }
`,co={Header:e2,HeaderContainer:t2,Left:n2,Right:i2,TopButton:r2};var o2=!1;function s2(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function a2(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var l2=function(){function e(n){var i=this;this._insertTag=function(r){var o;i.tags.length===0?i.insertionPoint?o=i.insertionPoint.nextSibling:i.prepend?o=i.container.firstChild:o=i.before:o=i.tags[i.tags.length-1].nextSibling,i.container.insertBefore(r,o),i.tags.push(r)},this.isSpeedy=n.speedy===void 0?!o2:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(i){i.forEach(this._insertTag)},t.insert=function(i){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(a2(this));var r=this.tags[this.tags.length-1];if(this.isSpeedy){var o=s2(r);try{o.insertRule(i,o.cssRules.length)}catch{}}else r.appendChild(document.createTextNode(i));this.ctr++},t.flush=function(){this.tags.forEach(function(i){var r;return(r=i.parentNode)==null?void 0:r.removeChild(i)}),this.tags=[],this.ctr=0},e}(),Xe="-ms-",Za="-moz-",ee="-webkit-",lv="comm",Lf="rule",jf="decl",c2="@import",cv="@keyframes",u2="@layer",d2=Math.abs,Pl=String.fromCharCode,f2=Object.assign;function h2(e,t){return Ne(e,0)^45?(((t<<2^Ne(e,0))<<2^Ne(e,1))<<2^Ne(e,2))<<2^Ne(e,3):0}function uv(e){return e.trim()}function p2(e,t){return(e=t.exec(e))?e[0]:e}function te(e,t,n){return e.replace(t,n)}function gd(e,t){return e.indexOf(t)}function Ne(e,t){return e.charCodeAt(t)|0}function es(e,t,n){return e.slice(t,n)}function dn(e){return e.length}function Ff(e){return e.length}function Ys(e,t){return t.push(e),e}function m2(e,t){return e.map(t).join("")}var El=1,Wr=1,dv=0,pt=0,Ee=0,qr="";function Il(e,t,n,i,r,o,s){return{value:e,root:t,parent:n,type:i,props:r,children:o,line:El,column:Wr,length:s,return:""}}function uo(e,t){return f2(Il("",null,null,"",null,null,0),e,{length:-e.length},t)}function g2(){return Ee}function y2(){return Ee=pt>0?Ne(qr,--pt):0,Wr--,Ee===10&&(Wr=1,El--),Ee}function Ct(){return Ee=pt<dv?Ne(qr,pt++):0,Wr++,Ee===10&&(Wr=1,El++),Ee}function gn(){return Ne(qr,pt)}function va(){return pt}function us(e,t){return es(qr,e,t)}function ts(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function fv(e){return El=Wr=1,dv=dn(qr=e),pt=0,[]}function hv(e){return qr="",e}function wa(e){return uv(us(pt-1,yd(e===91?e+2:e===40?e+1:e)))}function v2(e){for(;(Ee=gn())&&Ee<33;)Ct();return ts(e)>2||ts(Ee)>3?"":" "}function w2(e,t){for(;--t&&Ct()&&!(Ee<48||Ee>102||Ee>57&&Ee<65||Ee>70&&Ee<97););return us(e,va()+(t<6&&gn()==32&&Ct()==32))}function yd(e){for(;Ct();)switch(Ee){case e:return pt;case 34:case 39:e!==34&&e!==39&&yd(Ee);break;case 40:e===41&&yd(e);break;case 92:Ct();break}return pt}function x2(e,t){for(;Ct()&&e+Ee!==57;)if(e+Ee===84&&gn()===47)break;return"/*"+us(t,pt-1)+"*"+Pl(e===47?e:Ct())}function b2(e){for(;!ts(gn());)Ct();return us(e,pt)}function S2(e){return hv(xa("",null,null,null,[""],e=fv(e),0,[0],e))}function xa(e,t,n,i,r,o,s,a,l){for(var c=0,u=0,h=s,f=0,y=0,v=0,m=1,C=1,w=1,g=0,d="",p=r,x=o,b=i,k=d;C;)switch(v=g,g=Ct()){case 40:if(v!=108&&Ne(k,h-1)==58){gd(k+=te(wa(g),"&","&\f"),"&\f")!=-1&&(w=-1);break}case 34:case 39:case 91:k+=wa(g);break;case 9:case 10:case 13:case 32:k+=v2(v);break;case 92:k+=w2(va()-1,7);continue;case 47:switch(gn()){case 42:case 47:Ys(k2(x2(Ct(),va()),t,n),l);break;default:k+="/"}break;case 123*m:a[c++]=dn(k)*w;case 125*m:case 59:case 0:switch(g){case 0:case 125:C=0;case 59+u:w==-1&&(k=te(k,/\f/g,"")),y>0&&dn(k)-h&&Ys(y>32?Pm(k+";",i,n,h-1):Pm(te(k," ","")+";",i,n,h-2),l);break;case 59:k+=";";default:if(Ys(b=Cm(k,t,n,c,u,r,a,d,p=[],x=[],h),o),g===123)if(u===0)xa(k,t,b,b,p,o,h,a,x);else switch(f===99&&Ne(k,3)===110?100:f){case 100:case 108:case 109:case 115:xa(e,b,b,i&&Ys(Cm(e,b,b,0,0,r,a,d,r,p=[],h),x),r,x,h,a,i?p:x);break;default:xa(k,b,b,b,[""],x,0,a,x)}}c=u=y=0,m=w=1,d=k="",h=s;break;case 58:h=1+dn(k),y=v;default:if(m<1){if(g==123)--m;else if(g==125&&m++==0&&y2()==125)continue}switch(k+=Pl(g),g*m){case 38:w=u>0?1:(k+="\f",-1);break;case 44:a[c++]=(dn(k)-1)*w,w=1;break;case 64:gn()===45&&(k+=wa(Ct())),f=gn(),u=h=dn(d=k+=b2(va())),g++;break;case 45:v===45&&dn(k)==2&&(m=0)}}return o}function Cm(e,t,n,i,r,o,s,a,l,c,u){for(var h=r-1,f=r===0?o:[""],y=Ff(f),v=0,m=0,C=0;v<i;++v)for(var w=0,g=es(e,h+1,h=d2(m=s[v])),d=e;w<y;++w)(d=uv(m>0?f[w]+" "+g:te(g,/&\f/g,f[w])))&&(l[C++]=d);return Il(e,t,n,r===0?Lf:a,l,c,u)}function k2(e,t,n){return Il(e,t,n,lv,Pl(g2()),es(e,2,-2),0)}function Pm(e,t,n,i){return Il(e,t,n,jf,es(e,0,i),es(e,i+1,-1),i)}function Pr(e,t){for(var n="",i=Ff(e),r=0;r<i;r++)n+=t(e[r],r,e,t)||"";return n}function _2(e,t,n,i){switch(e.type){case u2:if(e.children.length)break;case c2:case jf:return e.return=e.return||e.value;case lv:return"";case cv:return e.return=e.value+"{"+Pr(e.children,i)+"}";case Lf:e.value=e.props.join(",")}return dn(n=Pr(e.children,i))?e.return=e.value+"{"+n+"}":""}function C2(e){var t=Ff(e);return function(n,i,r,o){for(var s="",a=0;a<t;a++)s+=e[a](n,i,r,o)||"";return s}}function P2(e){return function(t){t.root||(t=t.return)&&e(t)}}function E2(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var I2=function(t,n,i){for(var r=0,o=0;r=o,o=gn(),r===38&&o===12&&(n[i]=1),!ts(o);)Ct();return us(t,pt)},T2=function(t,n){var i=-1,r=44;do switch(ts(r)){case 0:r===38&&gn()===12&&(n[i]=1),t[i]+=I2(pt-1,n,i);break;case 2:t[i]+=wa(r);break;case 4:if(r===44){t[++i]=gn()===58?"&\f":"",n[i]=t[i].length;break}default:t[i]+=Pl(r)}while(r=Ct());return t},O2=function(t,n){return hv(T2(fv(t),n))},Em=new WeakMap,M2=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,i=t.parent,r=t.column===i.column&&t.line===i.line;i.type!=="rule";)if(i=i.parent,!i)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Em.get(i))&&!r){Em.set(t,!0);for(var o=[],s=O2(n,o),a=i.props,l=0,c=0;l<s.length;l++)for(var u=0;u<a.length;u++,c++)t.props[c]=o[l]?s[l].replace(/&\f/g,a[u]):a[u]+" "+s[l]}}},D2=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function pv(e,t){switch(h2(e,t)){case 5103:return ee+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ee+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ee+e+Za+e+Xe+e+e;case 6828:case 4268:return ee+e+Xe+e+e;case 6165:return ee+e+Xe+"flex-"+e+e;case 5187:return ee+e+te(e,/(\w+).+(:[^]+)/,ee+"box-$1$2"+Xe+"flex-$1$2")+e;case 5443:return ee+e+Xe+"flex-item-"+te(e,/flex-|-self/,"")+e;case 4675:return ee+e+Xe+"flex-line-pack"+te(e,/align-content|flex-|-self/,"")+e;case 5548:return ee+e+Xe+te(e,"shrink","negative")+e;case 5292:return ee+e+Xe+te(e,"basis","preferred-size")+e;case 6060:return ee+"box-"+te(e,"-grow","")+ee+e+Xe+te(e,"grow","positive")+e;case 4554:return ee+te(e,/([^-])(transform)/g,"$1"+ee+"$2")+e;case 6187:return te(te(te(e,/(zoom-|grab)/,ee+"$1"),/(image-set)/,ee+"$1"),e,"")+e;case 5495:case 3959:return te(e,/(image-set\([^]*)/,ee+"$1$`$1");case 4968:return te(te(e,/(.+:)(flex-)?(.*)/,ee+"box-pack:$3"+Xe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ee+e+e;case 4095:case 3583:case 4068:case 2532:return te(e,/(.+)-inline(.+)/,ee+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(dn(e)-1-t>6)switch(Ne(e,t+1)){case 109:if(Ne(e,t+4)!==45)break;case 102:return te(e,/(.+:)(.+)-([^]+)/,"$1"+ee+"$2-$3$1"+Za+(Ne(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~gd(e,"stretch")?pv(te(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(Ne(e,t+1)!==115)break;case 6444:switch(Ne(e,dn(e)-3-(~gd(e,"!important")&&10))){case 107:return te(e,":",":"+ee)+e;case 101:return te(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+ee+(Ne(e,14)===45?"inline-":"")+"box$3$1"+ee+"$2$3$1"+Xe+"$2box$3")+e}break;case 5936:switch(Ne(e,t+11)){case 114:return ee+e+Xe+te(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ee+e+Xe+te(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ee+e+Xe+te(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return ee+e+Xe+e+e}return e}var $2=function(t,n,i,r){if(t.length>-1&&!t.return)switch(t.type){case jf:t.return=pv(t.value,t.length);break;case cv:return Pr([uo(t,{value:te(t.value,"@","@"+ee)})],r);case Lf:if(t.length)return m2(t.props,function(o){switch(p2(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Pr([uo(t,{props:[te(o,/:(read-\w+)/,":"+Za+"$1")]})],r);case"::placeholder":return Pr([uo(t,{props:[te(o,/:(plac\w+)/,":"+ee+"input-$1")]}),uo(t,{props:[te(o,/:(plac\w+)/,":"+Za+"$1")]}),uo(t,{props:[te(o,/:(plac\w+)/,Xe+"input-$1")]})],r)}return""})}},A2=[$2],R2=function(t){var n=t.key;if(n==="css"){var i=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(i,function(m){var C=m.getAttribute("data-emotion");C.indexOf(" ")!==-1&&(document.head.appendChild(m),m.setAttribute("data-s",""))})}var r=t.stylisPlugins||A2,o={},s,a=[];s=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(m){for(var C=m.getAttribute("data-emotion").split(" "),w=1;w<C.length;w++)o[C[w]]=!0;a.push(m)});var l,c=[M2,D2];{var u,h=[_2,P2(function(m){u.insert(m)})],f=C2(c.concat(r,h)),y=function(C){return Pr(S2(C),f)};l=function(C,w,g,d){u=g,y(C?C+"{"+w.styles+"}":w.styles),d&&(v.inserted[w.name]=!0)}}var v={key:n,sheet:new l2({key:n,container:s,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:l};return v.sheet.hydrate(a),v},mv={exports:{}},re={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Le=typeof Symbol=="function"&&Symbol.for,Nf=Le?Symbol.for("react.element"):60103,Bf=Le?Symbol.for("react.portal"):60106,Tl=Le?Symbol.for("react.fragment"):60107,Ol=Le?Symbol.for("react.strict_mode"):60108,Ml=Le?Symbol.for("react.profiler"):60114,Dl=Le?Symbol.for("react.provider"):60109,$l=Le?Symbol.for("react.context"):60110,Uf=Le?Symbol.for("react.async_mode"):60111,Al=Le?Symbol.for("react.concurrent_mode"):60111,Rl=Le?Symbol.for("react.forward_ref"):60112,zl=Le?Symbol.for("react.suspense"):60113,z2=Le?Symbol.for("react.suspense_list"):60120,Ll=Le?Symbol.for("react.memo"):60115,jl=Le?Symbol.for("react.lazy"):60116,L2=Le?Symbol.for("react.block"):60121,j2=Le?Symbol.for("react.fundamental"):60117,F2=Le?Symbol.for("react.responder"):60118,N2=Le?Symbol.for("react.scope"):60119;function Tt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Nf:switch(e=e.type,e){case Uf:case Al:case Tl:case Ml:case Ol:case zl:return e;default:switch(e=e&&e.$$typeof,e){case $l:case Rl:case jl:case Ll:case Dl:return e;default:return t}}case Bf:return t}}}function gv(e){return Tt(e)===Al}re.AsyncMode=Uf;re.ConcurrentMode=Al;re.ContextConsumer=$l;re.ContextProvider=Dl;re.Element=Nf;re.ForwardRef=Rl;re.Fragment=Tl;re.Lazy=jl;re.Memo=Ll;re.Portal=Bf;re.Profiler=Ml;re.StrictMode=Ol;re.Suspense=zl;re.isAsyncMode=function(e){return gv(e)||Tt(e)===Uf};re.isConcurrentMode=gv;re.isContextConsumer=function(e){return Tt(e)===$l};re.isContextProvider=function(e){return Tt(e)===Dl};re.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Nf};re.isForwardRef=function(e){return Tt(e)===Rl};re.isFragment=function(e){return Tt(e)===Tl};re.isLazy=function(e){return Tt(e)===jl};re.isMemo=function(e){return Tt(e)===Ll};re.isPortal=function(e){return Tt(e)===Bf};re.isProfiler=function(e){return Tt(e)===Ml};re.isStrictMode=function(e){return Tt(e)===Ol};re.isSuspense=function(e){return Tt(e)===zl};re.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Tl||e===Al||e===Ml||e===Ol||e===zl||e===z2||typeof e=="object"&&e!==null&&(e.$$typeof===jl||e.$$typeof===Ll||e.$$typeof===Dl||e.$$typeof===$l||e.$$typeof===Rl||e.$$typeof===j2||e.$$typeof===F2||e.$$typeof===N2||e.$$typeof===L2)};re.typeOf=Tt;mv.exports=re;var B2=mv.exports,yv=B2,U2={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},W2={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},vv={};vv[yv.ForwardRef]=U2;vv[yv.Memo]=W2;var H2=!0;function wv(e,t,n){var i="";return n.split(" ").forEach(function(r){e[r]!==void 0?t.push(e[r]+";"):i+=r+" "}),i}var Wf=function(t,n,i){var r=t.key+"-"+n.name;(i===!1||H2===!1)&&t.registered[r]===void 0&&(t.registered[r]=n.styles)},xv=function(t,n,i){Wf(t,n,i);var r=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+r:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function V2(e){for(var t=0,n,i=0,r=e.length;r>=4;++i,r-=4)n=e.charCodeAt(i)&255|(e.charCodeAt(++i)&255)<<8|(e.charCodeAt(++i)&255)<<16|(e.charCodeAt(++i)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(r){case 3:t^=(e.charCodeAt(i+2)&255)<<16;case 2:t^=(e.charCodeAt(i+1)&255)<<8;case 1:t^=e.charCodeAt(i)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var Y2={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},X2=!1,q2=/[A-Z]|^ms/g,Q2=/_EMO_([^_]+?)_([^]*?)_EMO_/g,bv=function(t){return t.charCodeAt(1)===45},Im=function(t){return t!=null&&typeof t!="boolean"},nu=E2(function(e){return bv(e)?e:e.replace(q2,"-$&").toLowerCase()}),Tm=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(Q2,function(i,r,o){return fn={name:r,styles:o,next:fn},r})}return Y2[t]!==1&&!bv(t)&&typeof n=="number"&&n!==0?n+"px":n},G2="Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";function ns(e,t,n){if(n==null)return"";var i=n;if(i.__emotion_styles!==void 0)return i;switch(typeof n){case"boolean":return"";case"object":{var r=n;if(r.anim===1)return fn={name:r.name,styles:r.styles,next:fn},r.name;var o=n;if(o.styles!==void 0){var s=o.next;if(s!==void 0)for(;s!==void 0;)fn={name:s.name,styles:s.styles,next:fn},s=s.next;var a=o.styles+";";return a}return K2(e,t,n)}case"function":{if(e!==void 0){var l=fn,c=n(e);return fn=l,ns(e,t,c)}break}}var u=n;if(t==null)return u;var h=t[u];return h!==void 0?h:u}function K2(e,t,n){var i="";if(Array.isArray(n))for(var r=0;r<n.length;r++)i+=ns(e,t,n[r])+";";else for(var o in n){var s=n[o];if(typeof s!="object"){var a=s;t!=null&&t[a]!==void 0?i+=o+"{"+t[a]+"}":Im(a)&&(i+=nu(o)+":"+Tm(o,a)+";")}else{if(o==="NO_COMPONENT_SELECTOR"&&X2)throw new Error(G2);if(Array.isArray(s)&&typeof s[0]=="string"&&(t==null||t[s[0]]===void 0))for(var l=0;l<s.length;l++)Im(s[l])&&(i+=nu(o)+":"+Tm(o,s[l])+";");else{var c=ns(e,t,s);switch(o){case"animation":case"animationName":{i+=nu(o)+":"+c+";";break}default:i+=o+"{"+c+"}"}}}}return i}var Om=/label:\s*([^\s;\n{]+)\s*(;|$)/g,fn;function Hf(e,t,n){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var i=!0,r="";fn=void 0;var o=e[0];if(o==null||o.raw===void 0)i=!1,r+=ns(n,t,o);else{var s=o;r+=s[0]}for(var a=1;a<e.length;a++)if(r+=ns(n,t,e[a]),i){var l=o;r+=l[a]}Om.lastIndex=0;for(var c="",u;(u=Om.exec(r))!==null;)c+="-"+u[1];var h=V2(r)+c;return{name:h,styles:r,next:fn}}var Z2=function(t){return t()},J2=sh.useInsertionEffect?sh.useInsertionEffect:!1,Sv=J2||Z2,vd=!1,kv=j.createContext(typeof HTMLElement<"u"?R2({key:"css"}):null);kv.Provider;var _v=function(t){return j.forwardRef(function(n,i){var r=j.useContext(kv);return t(n,r,i)})},Cv=j.createContext({}),Vf={}.hasOwnProperty,wd="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",e3=function(t,n){var i={};for(var r in n)Vf.call(n,r)&&(i[r]=n[r]);return i[wd]=t,i},t3=function(t){var n=t.cache,i=t.serialized,r=t.isStringTag;return Wf(n,i,r),Sv(function(){return xv(n,i,r)}),null},n3=_v(function(e,t,n){var i=e.css;typeof i=="string"&&t.registered[i]!==void 0&&(i=t.registered[i]);var r=e[wd],o=[i],s="";typeof e.className=="string"?s=wv(t.registered,o,e.className):e.className!=null&&(s=e.className+" ");var a=Hf(o,void 0,j.useContext(Cv));s+=t.key+"-"+a.name;var l={};for(var c in e)Vf.call(e,c)&&c!=="css"&&c!==wd&&!vd&&(l[c]=e[c]);return l.className=s,n&&(l.ref=n),j.createElement(j.Fragment,null,j.createElement(t3,{cache:t,serialized:a,isStringTag:typeof r=="string"}),j.createElement(r,l))}),i3=n3,r3=_.Fragment;function _e(e,t,n){return Vf.call(t,"css")?_.jsx(i3,e3(e,t),n):_.jsx(e,t,n)}function Pv(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Hf(t)}var R=function(){var t=Pv.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},o3=function e(t){for(var n=t.length,i=0,r="";i<n;i++){var o=t[i];if(o!=null){var s=void 0;switch(typeof o){case"boolean":break;case"object":{if(Array.isArray(o))s=e(o);else{s="";for(var a in o)o[a]&&a&&(s&&(s+=" "),s+=a)}break}default:s=o}s&&(r&&(r+=" "),r+=s)}}return r};function s3(e,t,n){var i=[],r=wv(e,i,n);return i.length<2?n:r+t(i)}var a3=function(t){var n=t.cache,i=t.serializedArr;return Sv(function(){for(var r=0;r<i.length;r++)xv(n,i[r],!1)}),null},iu=_v(function(e,t){var n=!1,i=[],r=function(){if(n&&vd)throw new Error("css can only be used during render");for(var c=arguments.length,u=new Array(c),h=0;h<c;h++)u[h]=arguments[h];var f=Hf(u,t.registered);return i.push(f),Wf(t,f,!1),t.key+"-"+f.name},o=function(){if(n&&vd)throw new Error("cx can only be used during render");for(var c=arguments.length,u=new Array(c),h=0;h<c;h++)u[h]=arguments[h];return s3(t.registered,r,o3(u))},s={css:r,cx:o,theme:j.useContext(Cv)},a=e.children(s);return n=!0,j.createElement(j.Fragment,null,j.createElement(a3,{cache:t,serializedArr:i}),a)}),l3=Object.defineProperty,c3=(e,t,n)=>t in e?l3(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Xs=(e,t,n)=>c3(e,typeof t!="symbol"?t+"":t,n),xd=new Map,qs=new WeakMap,Mm=0,u3=void 0;function d3(e){return e?(qs.has(e)||(Mm+=1,qs.set(e,Mm.toString())),qs.get(e)):"0"}function f3(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?d3(e.root):e[t]}`).toString()}function h3(e){const t=f3(e);let n=xd.get(t);if(!n){const i=new Map;let r;const o=new IntersectionObserver(s=>{s.forEach(a=>{var l;const c=a.isIntersecting&&r.some(u=>a.intersectionRatio>=u);e.trackVisibility&&typeof a.isVisible>"u"&&(a.isVisible=c),(l=i.get(a.target))==null||l.forEach(u=>{u(c,a)})})},e);r=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:o,elements:i},xd.set(t,n)}return n}function Ev(e,t,n={},i=u3){if(typeof window.IntersectionObserver>"u"&&i!==void 0){const l=e.getBoundingClientRect();return t(i,{isIntersecting:i,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:l,intersectionRect:l,rootBounds:l}),()=>{}}const{id:r,observer:o,elements:s}=h3(n),a=s.get(e)||[];return s.has(e)||s.set(e,a),a.push(t),o.observe(e),function(){a.splice(a.indexOf(t),1),a.length===0&&(s.delete(e),o.unobserve(e)),s.size===0&&(o.disconnect(),xd.delete(r))}}function p3(e){return typeof e.children!="function"}var Dm=class extends j.Component{constructor(e){super(e),Xs(this,"node",null),Xs(this,"_unobserveCb",null),Xs(this,"handleNode",t=>{this.node&&(this.unobserve(),!t&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()}),Xs(this,"handleChange",(t,n)=>{t&&this.props.triggerOnce&&this.unobserve(),p3(this.props)||this.setState({inView:t,entry:n}),this.props.onChange&&this.props.onChange(t,n)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:n,trackVisibility:i,delay:r,fallbackInView:o}=this.props;this._unobserveCb=Ev(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:i,delay:r},o)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if(typeof e=="function"){const{inView:y,entry:v}=this.state;return e({inView:y,entry:v,ref:this.handleNode})}const{as:t,triggerOnce:n,threshold:i,root:r,rootMargin:o,onChange:s,skip:a,trackVisibility:l,delay:c,initialInView:u,fallbackInView:h,...f}=this.props;return j.createElement(t||"div",{ref:this.handleNode,...f},e)}};function Iv({threshold:e,delay:t,trackVisibility:n,rootMargin:i,root:r,triggerOnce:o,skip:s,initialInView:a,fallbackInView:l,onChange:c}={}){var u;const[h,f]=j.useState(null),y=j.useRef(),[v,m]=j.useState({inView:!!a,entry:void 0});y.current=c,j.useEffect(()=>{if(s||!h)return;let d;return d=Ev(h,(p,x)=>{m({inView:p,entry:x}),y.current&&y.current(p,x),x.isIntersecting&&o&&d&&(d(),d=void 0)},{root:r,rootMargin:i,threshold:e,trackVisibility:n,delay:t},l),()=>{d&&d()}},[Array.isArray(e)?e.toString():e,h,r,i,o,s,n,l,t]);const C=(u=v.entry)==null?void 0:u.target,w=j.useRef();!h&&C&&!o&&!s&&w.current!==C&&(w.current=C,m({inView:!!a,entry:void 0}));const g=[f,v.inView,v.entry];return g.ref=g[0],g.inView=g[1],g.entry=g[2],g}var Tv={exports:{}},oe={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yf=Symbol.for("react.element"),Xf=Symbol.for("react.portal"),Fl=Symbol.for("react.fragment"),Nl=Symbol.for("react.strict_mode"),Bl=Symbol.for("react.profiler"),Ul=Symbol.for("react.provider"),Wl=Symbol.for("react.context"),m3=Symbol.for("react.server_context"),Hl=Symbol.for("react.forward_ref"),Vl=Symbol.for("react.suspense"),Yl=Symbol.for("react.suspense_list"),Xl=Symbol.for("react.memo"),ql=Symbol.for("react.lazy"),g3=Symbol.for("react.offscreen"),Ov;Ov=Symbol.for("react.module.reference");function Wt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Yf:switch(e=e.type,e){case Fl:case Bl:case Nl:case Vl:case Yl:return e;default:switch(e=e&&e.$$typeof,e){case m3:case Wl:case Hl:case ql:case Xl:case Ul:return e;default:return t}}case Xf:return t}}}oe.ContextConsumer=Wl;oe.ContextProvider=Ul;oe.Element=Yf;oe.ForwardRef=Hl;oe.Fragment=Fl;oe.Lazy=ql;oe.Memo=Xl;oe.Portal=Xf;oe.Profiler=Bl;oe.StrictMode=Nl;oe.Suspense=Vl;oe.SuspenseList=Yl;oe.isAsyncMode=function(){return!1};oe.isConcurrentMode=function(){return!1};oe.isContextConsumer=function(e){return Wt(e)===Wl};oe.isContextProvider=function(e){return Wt(e)===Ul};oe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Yf};oe.isForwardRef=function(e){return Wt(e)===Hl};oe.isFragment=function(e){return Wt(e)===Fl};oe.isLazy=function(e){return Wt(e)===ql};oe.isMemo=function(e){return Wt(e)===Xl};oe.isPortal=function(e){return Wt(e)===Xf};oe.isProfiler=function(e){return Wt(e)===Bl};oe.isStrictMode=function(e){return Wt(e)===Nl};oe.isSuspense=function(e){return Wt(e)===Vl};oe.isSuspenseList=function(e){return Wt(e)===Yl};oe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Fl||e===Bl||e===Nl||e===Vl||e===Yl||e===g3||typeof e=="object"&&e!==null&&(e.$$typeof===ql||e.$$typeof===Xl||e.$$typeof===Ul||e.$$typeof===Wl||e.$$typeof===Hl||e.$$typeof===Ov||e.getModuleId!==void 0)};oe.typeOf=Wt;Tv.exports=oe;var y3=Tv.exports;R`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;R`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;R`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`;R`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;R`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;R`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;R`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;R`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;R`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;R`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`;R`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;R`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;R`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;const v3=R`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,w3=R`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,x3=R`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,b3=R`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,S3=R`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,qf=R`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,k3=R`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,_3=R`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,C3=R`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,P3=R`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,E3=R`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,I3=R`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,T3=R`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function O3({duration:e=1e3,delay:t=0,timingFunction:n="ease",keyframes:i=qf,iterationCount:r=1}){return Pv`
    animation-duration: ${e}ms;
    animation-timing-function: ${n};
    animation-delay: ${t}ms;
    animation-name: ${i};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${r};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function M3(e){return e==null}function D3(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function Mv(e,t){return n=>n?e():t()}function is(e){return Mv(e,()=>null)}function bd(e){return is(()=>({opacity:0}))(e)}const Ql=e=>{const{cascade:t=!1,damping:n=.5,delay:i=0,duration:r=1e3,fraction:o=0,keyframes:s=qf,triggerOnce:a=!1,className:l,style:c,childClassName:u,childStyle:h,children:f,onVisibilityChange:y}=e,v=j.useMemo(()=>O3({keyframes:s,duration:r}),[r,s]);return M3(f)?null:D3(f)?_e(A3,{...e,animationStyles:v,children:String(f)}):y3.isFragment(f)?_e(Dv,{...e,animationStyles:v}):_e(r3,{children:j.Children.map(f,(m,C)=>{if(!j.isValidElement(m))return null;const w=i+(t?C*r*n:0);switch(m.type){case"ol":case"ul":return _e(iu,{children:({cx:g})=>_e(m.type,{...m.props,className:g(l,m.props.className),style:Object.assign({},c,m.props.style),children:_e(Ql,{...e,children:m.props.children})})});case"li":return _e(Dm,{threshold:o,triggerOnce:a,onChange:y,children:({inView:g,ref:d})=>_e(iu,{children:({cx:p})=>_e(m.type,{...m.props,ref:d,className:p(u,m.props.className),css:is(()=>v)(g),style:Object.assign({},h,m.props.style,bd(!g),{animationDelay:w+"ms"})})})});default:return _e(Dm,{threshold:o,triggerOnce:a,onChange:y,children:({inView:g,ref:d})=>_e("div",{ref:d,className:l,css:is(()=>v)(g),style:Object.assign({},c,bd(!g),{animationDelay:w+"ms"}),children:_e(iu,{children:({cx:p})=>_e(m.type,{...m.props,className:p(u,m.props.className),style:Object.assign({},h,m.props.style)})})})})}})})},$3={display:"inline-block",whiteSpace:"pre"},A3=e=>{const{animationStyles:t,cascade:n=!1,damping:i=.5,delay:r=0,duration:o=1e3,fraction:s=0,triggerOnce:a=!1,className:l,style:c,children:u,onVisibilityChange:h}=e,{ref:f,inView:y}=Iv({triggerOnce:a,threshold:s,onChange:h});return Mv(()=>_e("div",{ref:f,className:l,style:Object.assign({},c,$3),children:u.split("").map((v,m)=>_e("span",{css:is(()=>t)(y),style:{animationDelay:r+m*o*i+"ms"},children:v},m))}),()=>_e(Dv,{...e,children:u}))(n)},Dv=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:i=!1,className:r,style:o,children:s,onVisibilityChange:a}=e,{ref:l,inView:c}=Iv({triggerOnce:i,threshold:n,onChange:a});return _e("div",{ref:l,className:r,css:is(()=>t)(c),style:Object.assign({},o,bd(!c)),children:s})};R`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;R`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;R`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;R`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;R`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;R`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;R`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`;R`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;R`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;R`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;const R3=R`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,z3=R`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,L3=R`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,j3=R`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,F3=R`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,N3=R`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,B3=R`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,U3=R`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,W3=R`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,H3=R`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,V3=R`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,Y3=R`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,X3=R`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function q3(e,t,n){switch(n){case"bottom-left":return t?z3:w3;case"bottom-right":return t?L3:x3;case"down":return e?t?F3:S3:t?j3:b3;case"left":return e?t?B3:k3:t?N3:qf;case"right":return e?t?W3:C3:t?U3:_3;case"top-left":return t?H3:P3;case"top-right":return t?V3:E3;case"up":return e?t?X3:T3:t?Y3:I3;default:return t?R3:v3}}const ds=e=>{const{big:t=!1,direction:n,reverse:i=!1,...r}=e,o=j.useMemo(()=>q3(t,i,n),[t,n,i]);return _e(Ql,{keyframes:o,...r})};R`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;R`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;R`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;R`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;R`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;const Q3=R`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;R`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;R`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;R`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;const G3={transformOrigin:"top left"},K3=e=>{const{style:t,...n}=e;return _e(Ql,{keyframes:Q3,style:Object.assign({},t,G3),...n})};R`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;R`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;R`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;R`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;R`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;R`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;R`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;R`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;R`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;R`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;R`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;R`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;R`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;R`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;R`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`;R`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`;R`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`;R`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;const Z3=R`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,J3=R`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,eI=R`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,tI=R`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,nI=R`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,iI=R`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`,rI=R`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,oI=R`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,sI=R`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,aI=R`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;function lI(e,t){switch(t){case"down":return e?rI:J3;case"left":return e?oI:eI;case"right":return e?sI:tI;case"up":return e?aI:nI;default:return e?iI:Z3}}const cI=e=>{const{direction:t,reverse:n=!1,...i}=e,r=j.useMemo(()=>lI(n,t),[t,n]);return _e(Ql,{keyframes:r,...i})},$v=[{item_href:"#main",item_name:"Home"},{item_href:"#projects",item_name:"Projects"},{item_href:"#about",item_name:"About"},{item_href:"#interests",item_name:"Interests"},{item_href:"#skills",item_name:"Skills"},{item_href:"#contact",item_name:"Contact"}],Gl=z.button`
  background-color: ${e=>e.background||(t=>t.theme==="light"?S.light.color.background.primary:S.dark.color.background.primary)};
  color: ${e=>e.color||(t=>t.theme==="light"?S.light.color.text.primary:S.dark.color.text.primary)};
  border-radius: ${e=>e.borderRadius||"100px"};
  padding: ${e=>e.padding||"0px"};
  border-color: ${e=>e.borderColor||(t=>t.theme==="light"?S.light.color.background.second:S.dark.color.background.second)};
  border-width: ${e=>e.borderWidth||"0px"};
  border-style: ${e=>e.borderStyle||"none"};
  min-width: ${e=>e.minWidth||"100px"};
  cursor: pointer;
  transition: all ease-in 0.2s;
  &:hover {
    box-shadow: ${e=>e.hoverShadow||(t=>t.theme==="light"?S.light.shadow.card:S.dark.shadow.card)};
    background-color: ${e=>e.hoverBackground||(t=>t.theme==="light"?S.light.color.background.second:S.dark.color.background.second)};
    color: ${e=>e.hoverColor||(t=>t.theme==="light"?S.light.color.text.primary:S.dark.color.text.primary)};
  }
`,Av=({className:e})=>{const{setTheme:t,theme:n}=at(),i=()=>{n==="light"?t==null||t("dark"):t==null||t("light")};return _.jsx(Gl,{"aria-label":"Theme change button",background:"transparent",borderColor:"transparent",className:e,hoverBackground:"none",hoverShadow:"none",minWidth:"0px",onClick:i,children:_.jsx(me,{height:"40px",iconId:n==="light"?"moon":"sun",viewBox:n==="light"?"0 0 45 50":"10 20 500 500",width:"40px"})})},uI=z.nav`
  display: flex;
  width: 100%;
  justify-content: end;
  text-align: center;
  ul {
    display: flex;
    justify-content: end;
    list-style-type: none;
  }
  li {
    display: flex;
    margin-right: 35px;
    align-items: center;
    ${pe({Fmax:16,Fmin:12})}
  }
  z-index: 999;
  @media ${S.media.tablet} {
    li {
      margin-right: 15px;
    }
  }
`,dI=z(Av)`
  display: inline-block;
  @media ${S.media.mobile} {
    display: none;
  }
`,$m={DesktopMenu:uI,HeaderThemeChangeButton:dI},fI=()=>{const{theme:e}=at();return _.jsxs($m.DesktopMenu,{children:[_.jsx("ul",{"aria-label":"menu",role:"menu",children:_.jsx(ds,{cascade:!0,duration:500,fraction:0,triggerOnce:!0,children:$v.map((t,n)=>_.jsx("li",{role:"menuitem",children:_.jsx(ye,{color:e==="light"?S.light.color.text.primary:S.dark.color.text.primary,href:t.item_href,theme:e,children:t.item_name})},n))})}),_.jsx($m.HeaderThemeChangeButton,{})]})},hI=z.nav`
  opacity: 0.9;
`,pI=z.div`
  display: none;

  ${e=>e.isOpen&&Ti`
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      justify-content: center;
      text-align: center;
    `}

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  background-color: ${e=>e.theme==="light"?S.light.color.background.primary:S.dark.color.background.primary};

  ul {
    align-items: center;
    list-style-type: none;
    font-size: 40px;
    font-weight: 700;
    line-height: 136%;
  }
  li + li {
    margin-top: 50px;
  }
`,mI=z.button`
  position: fixed;
  right: 25px;
  top: 5px;
  width: 30px;
  height: 30px;
  z-index: 99999;
  background-color: transparent;
  border: none;
  cursor: pointer;
  span {
    display: block;
    width: 30px;
    height: 2px;
    background-color: ${e=>e.theme==="light"?S.light.color.text.primary:S.dark.color.text.primary};

    ${e=>e.isOpen&&Ti`
        background-color: rgba(255, 255, 255, 0);
      `}

    position: absolute;
    &::before {
      content: '';
      position: absolute;
      display: block;
      width: 30px;
      height: 2px;
      background-color: ${e=>e.theme==="light"?S.light.color.text.primary:S.dark.color.text.primary};
      transform: translateY(-8px);

      ${e=>e.isOpen&&Ti`
          transform: translateY(0) rotate(-45deg);
        `}
    }

    &::after {
      content: '';
      position: absolute;
      display: block;
      width: 30px;
      height: 2px;
      background-color: ${e=>e.theme==="light"?S.light.color.text.primary:S.dark.color.text.primary};
      transform: translateY(8px);

      ${e=>e.isOpen&&Ti`
          transform: translateY(0) rotate(45deg);
          width: 30px;
        `}
    }
  }
`,ru={BurgerButton:mI,MobileMenu:hI,MobileMenuPopup:pI},gI=()=>{const{theme:e}=at(),[t,n]=j.useState(!1);return _.jsxs(ru.MobileMenu,{children:[_.jsx(ru.BurgerButton,{"aria-label":"Burger menu button",isOpen:t,onClick:()=>{n(!t)},theme:e,children:_.jsx("span",{})}),_.jsx(ru.MobileMenuPopup,{isOpen:t,onClick:()=>{n(!t)},theme:e,children:_.jsxs("ul",{"aria-label":"menu",role:"menu",children:[_.jsx(ds,{cascade:!0,duration:300,triggerOnce:!0,children:$v.map((i,r)=>_.jsx("li",{role:"menuitem",children:_.jsx(ye,{color:e==="light"?S.light.color.text.primary:S.dark.color.text.primary,href:i.item_href,theme:e,children:i.item_name})},r))}),_.jsx("li",{children:_.jsx(Av,{})})]})})]})},yI=()=>{const{theme:e,width:t}=at(),[n,i]=j.useState(!1),r=Cl(S.media.mobile);return j.useEffect(()=>{const o=()=>{window.scrollY>50?i(!0):i(!1)};return window.addEventListener("scroll",o),()=>window.removeEventListener("scroll",o)},[]),_.jsxs(co.Header,{scrolled:n,theme:e,children:[_.jsxs(co.HeaderContainer,{justify:"space-between",children:[_.jsx(co.Left,{scrolled:n,theme:e,children:e==="light"&&n?_.jsx(_m,{color:"gray"}):_.jsx(_m,{color:"white"})}),_.jsx(co.Right,{align:"center",justify:"end",theme:e,children:t<r?_.jsx(gI,{}):_.jsx(fI,{})})]}),n&&_.jsx(co.TopButton,{href:"#",theme:e,type:"button",children:_.jsx(me,{"aria-label":"Go to top",height:"100%",iconId:"arrowRight",viewBox:"-6 -2 37 35",width:"100%"})})]})},fs=z.h2`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  padding-bottom: 60px;
  color: ${e=>e.color||(t=>t.theme==="light"?S.light.color.text.primary:S.dark.color.text.primary)};
  ${pe({Fmax:32,Fmin:20,lineHeight:1.36,weight:600})}
  &::before {
    position: absolute;
    content: '';
    border-radius: 50% 50%;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    background-image: ${e=>e.theme==="light"?S.light.gradient.dot:S.dark.gradient.dot};
    @media ${S.media.tablet} {
      width: 16px;
      height: 16px;
    }

    @media ${S.media.mobile} {
      width: 12px;
      height: 12px;
    }
  }
`,vI="/assets/Photo2-my-CAZeV4c6.webp",wI="/assets/map-Dja_7-Xc.svg",xI=z.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${e=>e.theme==="light"?S.light.color.background.primary:S.dark.color.background.primary};
  color: ${e=>e.theme==="light"?S.light.color.text.primary:S.dark.color.text.primary};
`,bI=z(Vi)`
  position: relative;
  height: 100vh;
  padding-top: 60px;
  background-color: ${e=>e.theme==="light"?S.light.color.background.second:S.dark.color.background.second};
  background-image: url(${vI}), url(${wI});
  background-repeat: no-repeat;
  background-position:
    bottom right,
    center;
  background-size: contain, cover;
  @media ${S.media.mobile} {
    height: 70vh;
  }
`,SI=z(V)`
  position: absolute;
  top: 90%;
  left: 10%;
  transform: translate(-10%, -90%);
  background: ${e=>e.theme==="light"?S.light.gradient.banner:S.dark.gradient.banner};
  backdrop-filter: blur(10px);
  border: 2px solid
    ${e=>e.theme==="light"?S.light.color.background.bannerBorder:S.dark.color.background.bannerBorder};
  border-radius: 100px 0;
  min-width: 250px;
  padding: 20px 30px 30px;
  @media ${S.media.tablet} {
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
    width: auto;
  }

  @media ${S.media.mobile} {
    padding-top: 10px;
    border-radius: 54px 0;
  }
`,kI=z(V)`
  align-self: flex-end;
  ${ye} {
    color: ${e=>e.theme==="light"?S.light.color.text.second:S.dark.color.text.primary};
  }
`,_I=z.h2`
  white-space: nowrap;
  align-self: center;
  display: none;
  ${pe({Fmax:30,Fmin:20,family:"Montserrat",lineHeight:1.36,weight:700})}
  @media ${S.media.tablet} {
    display: flex;
  }
`,CI=z.ul`
  position: relative;
  ${pe({Fmax:20,Fmin:12,lineHeight:1.36,weight:400})}
  li {
    display: flex;
    align-items: start;
    margin-left: 28px;

    @media ${S.media.tablet} {
      margin-left: 18px;
    }

    @media ${S.media.mobile} {
      margin-left: 14px;
    }
  }

  li::before {
    position: absolute;
    display: flex;
    align-self: center;
    content: '';
    border-radius: 50% 50%;
    left: 0;
    width: 18px;
    height: 18px;
    background-image: ${e=>e.theme==="light"?S.light.gradient.dot:S.dark.gradient.dot};

    @media ${S.media.tablet} {
      width: 14px;
      height: 14px;
    }

    @media ${S.media.mobile} {
      align-self: flex-start;
      width: 10px;
      height: 10px;
      margin-top: 2px;
    }
  }
`,Ki={About:xI,AboutBanner:SI,AboutBannerList:CI,AboutBannerTitle:_I,AboutContainer:bI,SocialLinksWrapper:kI},PI=()=>{const{theme:e,width:t}=at(),n=Cl(S.media.mobile),i=new Date,r=new Date(1987,6,16,14,45,0),o=new Date(2023,1,1,0,0,1),s=new Date(i.getTime()-o.getTime()).getFullYear()-1970,a=new Date(i.getTime()-r.getTime()).getFullYear()-1970;return _.jsx(Ki.About,{id:"about",theme:e,children:_.jsxs(Ki.AboutContainer,{direction:"column",theme:e,children:[t>n&&_.jsx(fs,{color:"white",theme:e,children:"About me"}),_.jsxs(Ki.AboutBanner,{align:"center",direction:"column",justify:"center",theme:e,wrap:"wrap",children:[_.jsxs(Ki.SocialLinksWrapper,{align:"center",children:[_.jsx(ye,{"aria-label":"GitHub page link",href:"https://github.com/proffery",children:_.jsx(me,{height:"50px",iconId:"gitHub",viewBox:"-90 -60 260 260",width:"50px"})}),_.jsx(ye,{"aria-label":"LinkedIn account",href:"https://www.linkedin.com/in/dmitryshamko/",children:_.jsx(me,{iconId:"linkedIn",viewBox:"-25 -12 158 158",width:"30px"})}),_.jsx(ye,{"aria-label":"Telegram link",href:"https://t.me/ShamkoDmitry",children:_.jsx(me,{iconId:"aboutTelegram",viewBox:"-4 0 35 35",width:"46px"})})]}),_.jsxs(V,{align:"flex-start",direction:"column",gap:"10px",wrap:"wrap",children:[_.jsx(Ki.AboutBannerTitle,{children:"About me:"}),_.jsxs(Ki.AboutBannerList,{theme:e,children:[_.jsx("li",{children:"I was born in Belarus"}),_.jsx("li",{children:"I’m web developer"}),_.jsxs("li",{children:["I have my interest in this field more than ",s," years"]}),_.jsxs("li",{children:["I’m ",a," years old"]}),_.jsx("li",{children:"My phone number +375256979075"})]})]})]})]})})};class hs{constructor(t=0,n="Network Error"){this.status=t,this.text=n}}const EI=()=>{if(!(typeof localStorage>"u"))return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}},Be={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:EI()},Qf=e=>e?typeof e=="string"?{publicKey:e}:e.toString()==="[object Object]"?e:{}:{},II=(e,t="https://api.emailjs.com")=>{if(!e)return;const n=Qf(e);Be.publicKey=n.publicKey,Be.blockHeadless=n.blockHeadless,Be.storageProvider=n.storageProvider,Be.blockList=n.blockList,Be.limitRate=n.limitRate,Be.origin=n.origin||t},Rv=async(e,t,n={})=>{const i=await fetch(Be.origin+e,{method:"POST",headers:n,body:t}),r=await i.text(),o=new hs(i.status,r);if(i.ok)return o;throw o},zv=(e,t,n)=>{if(!e||typeof e!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||typeof t!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n||typeof n!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},TI=e=>{if(e&&e.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},Lv=e=>e.webdriver||!e.languages||e.languages.length===0,jv=()=>new hs(451,"Unavailable For Headless Browser"),OI=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if(typeof t!="string")throw"The BlockList watchVariable has to be a string"},MI=e=>{var t;return!((t=e.list)!=null&&t.length)||!e.watchVariable},DI=(e,t)=>e instanceof FormData?e.get(t):e[t],Fv=(e,t)=>{if(MI(e))return!1;OI(e.list,e.watchVariable);const n=DI(t,e.watchVariable);return typeof n!="string"?!1:e.list.includes(n)},Nv=()=>new hs(403,"Forbidden"),$I=(e,t)=>{if(typeof e!="number"||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&typeof t!="string")throw"The LimitRate ID has to be a non-empty string"},AI=async(e,t,n)=>{const i=Number(await n.get(e)||0);return t-Date.now()+i},Bv=async(e,t,n)=>{if(!t.throttle||!n)return!1;$I(t.throttle,t.id);const i=t.id||e;return await AI(i,t.throttle,n)>0?!0:(await n.set(i,Date.now().toString()),!1)},Uv=()=>new hs(429,"Too Many Requests"),RI=async(e,t,n,i)=>{const r=Qf(i),o=r.publicKey||Be.publicKey,s=r.blockHeadless||Be.blockHeadless,a=r.storageProvider||Be.storageProvider,l={...Be.blockList,...r.blockList},c={...Be.limitRate,...r.limitRate};return s&&Lv(navigator)?Promise.reject(jv()):(zv(o,e,t),TI(n),n&&Fv(l,n)?Promise.reject(Nv()):await Bv(location.pathname,c,a)?Promise.reject(Uv()):Rv("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:o,service_id:e,template_id:t,template_params:n}),{"Content-type":"application/json"}))},zI=e=>{if(!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},LI=e=>typeof e=="string"?document.querySelector(e):e,jI=async(e,t,n,i)=>{const r=Qf(i),o=r.publicKey||Be.publicKey,s=r.blockHeadless||Be.blockHeadless,a=Be.storageProvider||r.storageProvider,l={...Be.blockList,...r.blockList},c={...Be.limitRate,...r.limitRate};if(s&&Lv(navigator))return Promise.reject(jv());const u=LI(n);zv(o,e,t),zI(u);const h=new FormData(u);return Fv(l,h)?Promise.reject(Nv()):await Bv(location.pathname,c,a)?Promise.reject(Uv()):(h.append("lib_version","4.4.1"),h.append("service_id",e),h.append("template_id",t),h.append("user_id",o),Rv("/api/v1.0/email/send-form",h))},FI={init:II,send:RI,sendForm:jI,EmailJSResponseStatus:hs},NI=z.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${e=>e.theme==="light"?S.light.color.background.primary:S.dark.color.background.primary};
  gap: 20px;
  @media ${S.media.mobile} {
    padding-top: 60px 0;
  }
`,BI=z(V)`
  position: relative;
  height: 100%;
  width: 100%;
  padding: 53px 82px;
  background-color: ${e=>e.theme==="light"?S.light.color.background.form:S.dark.color.background.form};
  box-shadow: ${e=>e.theme==="light"?S.light.shadow.main:S.dark.shadow.main};
  max-width: 932px;
  min-width: 300px;
  @media ${S.media.tablet} {
    box-shadow: none;
    padding: 0;
  }
`,UI=z(V)`
  flex-wrap: wrap;
  align-items: center;
  height: 100%;
  justify-content: space-between;
  @media ${S.media.tablet} {
    gap: 0;
  }
`,WI=z.form`
  display: flex;
  align-items: center;
  min-width: 200px;
  width: 58%;
  textarea {
    width: 100%;
    height: 152px;
    padding: 10px 18px;
    &::placeholder {
      padding: 0;
    }
    &:focus {
      padding: 10px 18px;
    }
    @media ${S.media.mobile} {
      height: 92px;
    }
  }
  @media ${S.media.tablet} {
    box-shadow: ${e=>e.theme==="light"?S.light.shadow.main:S.dark.shadow.main};
    padding: 53px 82px;
    width: 100%;
  }
  @media ${S.media.mobile} {
    padding: 32px 50px;
  }
`,HI=z.h3`
  display: flex;
  align-self: flex-start;
  ${pe({Fmax:36,Fmin:22,lineHeight:1.36,weight:500})}

  color: ${e=>e.theme==="light"?S.light.color.text.primary:S.dark.color.text.primary};
`,VI=z.input`
  display: flex;
  width: 50%;
  ${pe({Fmax:13,Fmin:10,lineHeight:1.36,weight:400})}

  padding: 0 18px;
  color: ${e=>e.theme==="light"?S.light.color.text.placeholder:S.dark.color.text.placeholder};
  background-color: ${e=>e.theme==="light"?S.light.color.background.input:S.dark.color.background.input};
  border-radius: 9px;
  height: 36px;
  border: none;

  &::placeholder {
    color: ${e=>e.theme==="light"?S.light.color.text.placeholder:S.dark.color.text.placeholder};
  }

  &:focus-visible {
    outline: 1px solid
      ${e=>e.theme==="light"?S.light.color.text.placeholder:S.dark.color.text.placeholder};
  }

  @media ${S.media.mobile} {
    height: 28px;
    border-radius: 6px;
  }
`,YI=z.textarea`
  display: flex;
  width: 50%;
  ${pe({Fmax:13,Fmin:10,lineHeight:1.36,weight:400})}

  padding: 0 18px;
  color: ${e=>e.theme==="light"?S.light.color.text.placeholder:S.dark.color.text.placeholder};
  background-color: ${e=>e.theme==="light"?S.light.color.background.input:S.dark.color.background.input};
  border-radius: 9px;
  height: 36px;
  resize: none;
  border: none;

  &::placeholder {
    color: ${e=>e.theme==="light"?S.light.color.text.placeholder:S.dark.color.text.placeholder};
  }

  &:focus-visible {
    outline: 1px solid
      ${e=>e.theme==="light"?S.light.color.text.placeholder:S.dark.color.text.placeholder};
  }

  @media ${S.media.mobile} {
    height: 22px;
    border-radius: 6px;
  }
`,XI=z(Gl)`
  width: 118px;
  height: 44px;
  border-radius: 9px;
  background-color: ${e=>e.theme==="light"?S.light.color.text.link:S.dark.color.text.link};
  ${pe({Fmax:16,Fmin:10,lineHeight:1.36,weight:500})}

  @media ${S.media.tablet} {
    min-width: 92px;
    width: 92px;
    height: 36px;
    border-radius: 5.5px;
  }

  @media ${S.media.mobile} {
    min-width: 72px;
    width: 72px;
    height: 26px;
  }
`,qI=z(V)`
  width: 28%;
  @media ${S.media.tablet} {
    box-shadow: ${e=>e.theme==="light"?S.light.shadow.main:S.dark.shadow.main};
    padding: 50px;
    width: 100%;
  }
`,QI=z(V)`
  color: ${e=>e.theme==="light"?S.light.color.text.link:S.dark.color.text.link};
`,GI=z.h4`
  font-size: 16px;
  font-weight: 500;
  line-height: 136%;
  color: ${e=>e.theme==="light"?S.light.color.text.primary:S.dark.color.text.primary};

  @media ${S.media.tablet} {
    font-size: 30px;
  }

  @media ${S.media.mobile} {
    font-size: 18px;
  }
`,KI=z(V)`
  height: 38px;
  width: 38px;
  @media ${S.media.tablet} {
    width: 72px;
    height: 72px;
  }
  @media ${S.media.mobile} {
    width: 44px;
    height: 44px;
  }
`,ZI=z.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 136%;
  color: ${e=>e.theme==="light"?S.light.color.text.placeholder:S.dark.color.text.placeholder};
  @media ${S.media.tablet} {
    font-size: 23px;
  }
  @media ${S.media.mobile} {
    font-size: 14px;
  }
`,JI=z(V)`
  ${ye} {
    color: ${e=>e.theme==="light"?S.light.color.background.primary:S.dark.color.background.primary};
  }
  margin-top: 65px;
  @media ${S.media.tablet} {
    margin-top: 43px;
  }
  @media ${S.media.mobile} {
    margin-top: 75px;
  }
`,eT=z(V)`
  height: 200px;
  position: fixed;
  left: 0;
  top: 70%;
  ${ye} {
    color: ${e=>e.theme==="light"?S.light.color.text.second:S.dark.color.text.primary};
  }
  background-color: ${e=>e.theme==="light"?S.light.color.background.second:S.dark.color.background.second};
  border-radius: 0 25px 25px 0;
  border: 2px solid
    ${e=>e.theme==="light"?S.light.color.background.bannerBorder:S.dark.color.background.bannerBorder};
  border-left: none;
  z-index: 200;
  @media ${S.media.tablet} {
    display: none;
  }
`,fe={AddDescription:ZI,AddIconWrapper:KI,AddTitle:GI,Contact:NI,ContactForm:WI,ContactFormField:VI,ContactFormSubmitButton:XI,ContactFormTextarea:YI,ContactFormTitle:HI,ContactFormWrapper:UI,ContactWrapper:BI,ContactsAddWrapper:QI,ContactsAddsWrapper:qI,FixedSocialIconsWrapper:eT,SocialIconsWrapper:JI},tT=()=>{const e=j.useRef(null),{theme:t}=at(),[n,i]=j.useState("Send"),r=o=>{o.preventDefault(),e.current&&FI.sendForm("service_ypumi3n","template_mnxi9t4",e.current,"u6DZWsUFpg84ikb5W").then(s=>{console.log(s.text),i("Sended!"),setTimeout(()=>{o.target.reset(),i("Send")},2e3)},s=>{console.log(s.text),i("Error!")})};return _.jsx(fe.Contact,{id:"contact",theme:t,children:_.jsxs(Vi,{align:"center",direction:"column",justify:"center",children:[_.jsx(fs,{theme:t,children:"Contact"}),_.jsx(fe.ContactWrapper,{direction:"column",theme:t,children:_.jsxs(fe.ContactFormWrapper,{align:"start",children:[_.jsx(fe.ContactForm,{onSubmit:r,ref:e,children:_.jsxs(V,{align:"center",direction:"column",gap:"30px",justify:"center",width:"100%",children:[_.jsx(fe.ContactFormTitle,{theme:t,children:"Get in touch"}),_.jsxs(V,{gap:"10px",width:"100%",children:[_.jsx(fe.ContactFormField,{"aria-label":"enter name",name:"user_name",placeholder:"Name",required:!0,theme:t,type:"text"}),_.jsx(fe.ContactFormField,{"aria-label":"enter email",name:"user_email",placeholder:"Email",required:!0,theme:t,type:"email"})]}),_.jsx(fe.ContactFormTextarea,{"aria-label":"enter your message",name:"message",placeholder:"Message",required:!0,theme:t}),_.jsx(fe.ContactFormSubmitButton,{color:"white",hoverBackground:"none",type:"submit",children:n})]})}),_.jsx(fe.ContactsAddsWrapper,{align:"start",direction:"column",gap:"30px",height:"100%",width:"100%",children:_.jsxs(cI,{cascade:!0,triggerOnce:!0,children:[_.jsxs(fe.ContactsAddWrapper,{align:"center",theme:t,children:[_.jsx(fe.AddIconWrapper,{children:_.jsx(me,{height:"100%",iconId:"location",viewBox:"94 405 47 47",width:"100%"})}),_.jsxs(V,{align:"left",direction:"column",children:[_.jsx(fe.AddTitle,{theme:t,children:"Location"}),_.jsx(fe.AddDescription,{theme:t,children:"Belarus"})]})]}),_.jsxs(fe.ContactsAddWrapper,{align:"center",theme:t,children:[_.jsx(fe.AddIconWrapper,{children:_.jsx(me,{height:"100%",iconId:"phone",viewBox:"-3 -6 34 34",width:"100%"})}),_.jsxs(V,{align:"left",direction:"column",children:[_.jsx(fe.AddTitle,{theme:t,children:"Phone"}),_.jsx(fe.AddDescription,{theme:t,children:"+375256979075"})]})]}),_.jsxs(fe.ContactsAddWrapper,{align:"center",theme:t,children:[_.jsx(fe.AddIconWrapper,{children:_.jsx(me,{height:"100%",iconId:"email",viewBox:"-3 -4 31 31",width:"100%"})}),_.jsxs(V,{align:"left",direction:"column",children:[_.jsx(fe.AddTitle,{theme:t,children:"Email"}),_.jsx(fe.AddDescription,{theme:t,children:"proffery@gmail.com"})]})]})]})})]})}),_.jsxs(fe.SocialIconsWrapper,{theme:t,children:[_.jsx(ye,{"aria-label":"Instagram link",href:"https://www.instagram.com/proffery/",children:_.jsx(me,{height:"50px",iconId:"instagramColor",viewBox:"0 0 55 55"})}),_.jsx(ye,{"aria-label":"WhatsApp link",href:"https://wa.me/375256979075",children:_.jsx(me,{height:"50px",iconId:"whatsappColor",viewBox:"-4 -3 59 59"})}),_.jsx(ye,{"aria-label":"Viber link",href:"viber://chat?number=%2B375256979075",children:_.jsx(me,{height:"50px",iconId:"viberColor",viewBox:"-100 -100 900 900"})})]}),_.jsxs(fe.FixedSocialIconsWrapper,{align:"center",direction:"column",justify:"center",theme:t,children:[_.jsx(ye,{"aria-label":"GitHub profile link",href:"https://github.com/proffery",children:_.jsx(me,{height:"50px",iconId:"gitHub",viewBox:"-35 -27 210 210",width:"50px"})}),_.jsx(ye,{"aria-label":"LinkedIn account",href:"https://www.linkedin.com/in/dmitryshamko/",children:_.jsx(me,{height:"50px",iconId:"linkedIn",viewBox:"-37 -59 220 220",width:"50px"})}),_.jsx(ye,{"aria-label":"Telegram link",href:"https://t.me/ShamkoDmitry",children:_.jsx(me,{height:"50px",iconId:"aboutTelegram",viewBox:"0 -5 33 33",width:"50px"})})]})]})})},nT=[{description:"I'm a web developer who loves creating visually appealing and user-friendly websites. From responsive designs to interactive features, I enjoy turning ideas into digital realities.",imageId:"code",title:"Web Development",viewBox:"0 0 24 24"},{description:"I'm an avid film photographer capturing moments through the lens of an analog camera. I embrace the artistry and nostalgia of film photography, exploring different techniques and developing my own prints.",imageId:"camera",title:"Film Photography",viewBox:"0 0 70 70"},{description:"Passionate about the ever-evolving IT industry, I stay up-to-date with the latest technologies and trends. From cloud computing to AI, I enjoy diving into new possibilities and contributing to growth and innovation.",imageId:"robot",title:"IT Industry",viewBox:"0 0 400 400"}],iT=z.section`
  ${V} {
    gap: 30px;
    @media ${S.media.tablet} {
      gap: 26px;
    }
    @media ${S.media.mobile} {
      gap: 14px;
    }
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${e=>e.theme==="light"?S.light.color.background.primary:S.dark.color.background.primary};
`,rT={Services:iT},oT=z(V)`
  min-width: 320px;
  aspect-ratio: 3 / 4;
  width: 30%;
  padding: 0 45px;
  border-radius: 20px;
  cursor: pointer;
  color: ${e=>e.theme==="light"?S.light.color.text.primary:S.dark.color.text.primary};
  background-color: ${e=>e.theme==="light"?S.light.color.background.card:S.dark.color.background.card};
  box-shadow: ${e=>e.theme==="light"?S.light.shadow.card:S.dark.shadow.card};
  align-items: start;
  justify-content: space-around;
  transition: all 0.6s;
  transform-style: preserve-3d;
  transform: ${e=>e.isFlip?"rotateY(-180deg)":"rotateY(0deg)"};
  p {
    ${pe({Fmax:24,Fmin:14})}
    text-align: justify;
    transform: ${e=>e.isFlip?"rotateY(-180deg)":"rotateY(0deg)"};
  }

  @media ${S.media.tablet} {
    padding: 0 35px;
  }
`,sT=z(V)`
  height: 173px;
  width: 173px;
  align-self: center;
  @media ${S.media.tablet} {
    width: 162px;
    height: 162px;
  }
  @media ${S.media.mobile} {
    width: 154px;
    height: 154px;
  }
`,aT=z(Gl)`
  ${pe({Fmax:16,Fmin:10,lineHeight:1.96,weight:400})}
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: transparent;
  color: ${e=>e.theme==="light"?S.light.color.text.link:S.dark.color.text.link};
  transform: ${e=>e.isFlip?"rotateY(-180deg)":"rotateY(0deg)"};
  svg {
    transform: ${e=>e.isFlip?"rotateY(-180deg)":"rotateY(0deg)"};
  }
`,lT=z.h3`
  ${pe({Fmax:32,Fmin:15,lineHeight:1.25,weight:500})}
  color: ${e=>e.theme==="light"?S.light.color.text.primary:S.dark.color.text.primary};
`,Qs={ServicesCard:oT,ServicesCardButton:aT,ServicesCardIconWrapper:sT,ServicesCardTitle:lT},cT=e=>{const{theme:t}=at(),n=()=>{e.setServicesWithFlip(e.servicesWithFlip.map((i,r)=>r===e.cardIndex?{...i,isFlip:!i.isFlip}:{...i,isFlip:!1}))};return _.jsx(Qs.ServicesCard,{direction:"column",isFlip:e.isFlip,justify:"space-around",onClick:n,theme:t,width:"30%",children:e.isFlip?_.jsxs(_.Fragment,{children:[_.jsx(Qs.ServicesCardIconWrapper,{children:_.jsx(me,{height:"100%",iconId:e.iconId,viewBox:e.viewBox||"0 0 70 70",width:"100%"})}),_.jsx(ds,{delay:300,children:_.jsx("p",{children:e.description})})]}):_.jsxs(_.Fragment,{children:[_.jsx(Qs.ServicesCardIconWrapper,{children:_.jsx(me,{height:"100%",iconId:e.iconId,viewBox:e.viewBox||"0 0 70 70",width:"100%"})}),_.jsx(Qs.ServicesCardTitle,{theme:t,children:e.title})]})})},uT=()=>{const{theme:e}=at(),[t,n]=j.useState(nT.map(i=>({...i,isFlip:!1})));return _.jsx(rT.Services,{id:"interests",theme:e,children:_.jsxs(Vi,{direction:"column",children:[_.jsx(fs,{theme:e,children:"Interests"}),_.jsx(V,{align:"center",justify:"center",wrap:"wrap",children:t.map((i,r)=>_.jsx(cT,{cardIndex:r,description:i.description,iconId:i.imageId,isFlip:i.isFlip,servicesWithFlip:t,setServicesWithFlip:n,title:i.title,viewBox:i.viewBox},i.imageId+r))})]})})};function dT(e,t,n,i){return new(n||(n=Promise))(function(r,o){function s(c){try{l(i.next(c))}catch(u){o(u)}}function a(c){try{l(i.throw(c))}catch(u){o(u)}}function l(c){var u;c.done?r(c.value):(u=c.value,u instanceof n?u:new n(function(h){h(u)})).then(s,a)}l((i=i.apply(e,[])).next())})}const Am=(e,t,n,i)=>{e.style.transition=`${t} ${n}ms ${i}`},_n=(e,t,n)=>Math.min(Math.max(e,t),n);class fT{constructor(t,n){this.glareAngle=0,this.glareOpacity=0,this.calculateGlareSize=s=>{const{width:a,height:l}=s,c=Math.sqrt(Math.pow(a,2)+Math.pow(l,2));return{width:c,height:c}},this.setSize=s=>{const a=this.calculateGlareSize(s);this.glareEl.style.width=`${a.width}px`,this.glareEl.style.height=`${a.height}px`},this.update=(s,a,l,c)=>{this.updateAngle(s,a.glareReverse),this.updateOpacity(s,a,l,c)},this.updateAngle=(s,a)=>{const{xPercentage:l,yPercentage:c}=s,u=180/Math.PI,h=l?Math.atan2(c,-l)*u:0;this.glareAngle=h-(a?180:0)},this.updateOpacity=(s,a,l,c)=>{const{xPercentage:u,yPercentage:h}=s,{glarePosition:f,glareReverse:y,glareMaxOpacity:v}=a,m=l?-1:1,C=c?-1:1,w=y?-1:1;let g=0;switch(f){case"top":g=-u*m*w;break;case"right":g=h*C*w;break;case"bottom":case void 0:g=u*m*w;break;case"left":g=-h*C*w;break;case"all":g=Math.hypot(u,h)}const d=_n(g,0,100);this.glareOpacity=d*v/100},this.render=s=>{const{glareColor:a}=s;this.glareEl.style.transform=`rotate(${this.glareAngle}deg) translate(-50%, -50%)`,this.glareEl.style.opacity=this.glareOpacity.toString(),this.glareEl.style.background=`linear-gradient(0deg, rgba(255,255,255,0) 0%, ${a} 100%)`},this.glareWrapperEl=document.createElement("div"),this.glareEl=document.createElement("div"),this.glareWrapperEl.appendChild(this.glareEl),this.glareWrapperEl.className="glare-wrapper",this.glareEl.className="glare";const i={position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden",borderRadius:n,WebkitMaskImage:"-webkit-radial-gradient(white, black)",pointerEvents:"none"},r=this.calculateGlareSize(t),o={position:"absolute",top:"50%",left:"50%",transformOrigin:"0% 0%",pointerEvents:"none",width:`${r.width}px`,height:`${r.height}px`};Object.assign(this.glareWrapperEl.style,i),Object.assign(this.glareEl.style,o)}}class hT{constructor(){this.glareAngle=0,this.glareOpacity=0,this.tiltAngleX=0,this.tiltAngleY=0,this.tiltAngleXPercentage=0,this.tiltAngleYPercentage=0,this.update=(t,n)=>{this.updateTilt(t,n),this.updateTiltManualInput(t,n),this.updateTiltReverse(n),this.updateTiltLimits(n)},this.updateTilt=(t,n)=>{const{xPercentage:i,yPercentage:r}=t,{tiltMaxAngleX:o,tiltMaxAngleY:s}=n;this.tiltAngleX=i*o/100,this.tiltAngleY=r*s/100*-1},this.updateTiltManualInput=(t,n)=>{const{tiltAngleXManual:i,tiltAngleYManual:r,tiltMaxAngleX:o,tiltMaxAngleY:s}=n;(i!==null||r!==null)&&(this.tiltAngleX=i!==null?i:0,this.tiltAngleY=r!==null?r:0,t.xPercentage=100*this.tiltAngleX/o,t.yPercentage=100*this.tiltAngleY/s)},this.updateTiltReverse=t=>{const n=t.tiltReverse?-1:1;this.tiltAngleX=n*this.tiltAngleX,this.tiltAngleY=n*this.tiltAngleY},this.updateTiltLimits=t=>{const{tiltAxis:n}=t;this.tiltAngleX=_n(this.tiltAngleX,-90,90),this.tiltAngleY=_n(this.tiltAngleY,-90,90),n&&(this.tiltAngleX=n==="x"?this.tiltAngleX:0,this.tiltAngleY=n==="y"?this.tiltAngleY:0)},this.updateTiltAnglesPercentage=t=>{const{tiltMaxAngleX:n,tiltMaxAngleY:i}=t;this.tiltAngleXPercentage=this.tiltAngleX/n*100,this.tiltAngleYPercentage=this.tiltAngleY/i*100},this.render=t=>{t.style.transform+=`rotateX(${this.tiltAngleX}deg) rotateY(${this.tiltAngleY}deg) `}}}const pT=Object.assign(Object.assign({scale:1,perspective:1e3,flipVertically:!1,flipHorizontally:!1,reset:!0,transitionEasing:"cubic-bezier(.03,.98,.52,.99)",transitionSpeed:400,trackOnWindow:!1,gyroscope:!1},{tiltEnable:!0,tiltReverse:!1,tiltAngleXInitial:0,tiltAngleYInitial:0,tiltMaxAngleX:20,tiltMaxAngleY:20,tiltAxis:void 0,tiltAngleXManual:null,tiltAngleYManual:null}),{glareEnable:!1,glareMaxOpacity:.7,glareColor:"#ffffff",glarePosition:"bottom",glareReverse:!1,glareBorderRadius:"0"});class Wv extends j.PureComponent{constructor(){super(...arguments),this.wrapperEl={node:null,size:{width:0,height:0,left:0,top:0},clientPosition:{x:null,y:null,xPercentage:0,yPercentage:0},updateAnimationId:null,scale:1},this.tilt=null,this.glare=null,this.addDeviceOrientationEventListener=()=>dT(this,void 0,void 0,function*(){if(!window.DeviceOrientationEvent)return;const t=DeviceOrientationEvent.requestPermission;typeof t=="function"?(yield t())==="granted"&&window.addEventListener("deviceorientation",this.onMove):window.addEventListener("deviceorientation",this.onMove)}),this.setSize=()=>{this.setWrapperElSize(),this.glare&&this.glare.setSize(this.wrapperEl.size)},this.mainLoop=t=>{this.wrapperEl.updateAnimationId!==null&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.processInput(t),this.update(t.type),this.wrapperEl.updateAnimationId=requestAnimationFrame(this.renderFrame)},this.onEnter=t=>{const{onEnter:n}=this.props;this.setSize(),this.wrapperEl.node.style.willChange="transform",this.setTransitions(),n&&n(t.type)},this.onMove=t=>{this.mainLoop(t),this.emitOnMove(t)},this.onLeave=t=>{const{onLeave:n}=this.props;if(this.setTransitions(),n&&n(t.type),this.props.reset){const i=new CustomEvent("autoreset");this.onMove(i)}},this.processInput=t=>{const{scale:n}=this.props;switch(t.type){case"mousemove":this.wrapperEl.clientPosition.x=t.pageX,this.wrapperEl.clientPosition.y=t.pageY,this.wrapperEl.scale=n;break;case"touchmove":this.wrapperEl.clientPosition.x=t.touches[0].pageX,this.wrapperEl.clientPosition.y=t.touches[0].pageY,this.wrapperEl.scale=n;break;case"deviceorientation":this.processInputDeviceOrientation(t),this.wrapperEl.scale=n;break;case"autoreset":const{tiltAngleXInitial:i,tiltAngleYInitial:r,tiltMaxAngleX:o,tiltMaxAngleY:s}=this.props,a=r/s*100;this.wrapperEl.clientPosition.xPercentage=_n(i/o*100,-100,100),this.wrapperEl.clientPosition.yPercentage=_n(a,-100,100),this.wrapperEl.scale=1}},this.processInputDeviceOrientation=t=>{if(!t.gamma||!t.beta||!this.props.gyroscope)return;const{tiltMaxAngleX:n,tiltMaxAngleY:i}=this.props,r=t.gamma;this.wrapperEl.clientPosition.xPercentage=t.beta/n*100,this.wrapperEl.clientPosition.yPercentage=r/i*100,this.wrapperEl.clientPosition.xPercentage=_n(this.wrapperEl.clientPosition.xPercentage,-100,100),this.wrapperEl.clientPosition.yPercentage=_n(this.wrapperEl.clientPosition.yPercentage,-100,100)},this.update=t=>{const{tiltEnable:n,flipVertically:i,flipHorizontally:r}=this.props;t!=="autoreset"&&t!=="deviceorientation"&&t!=="propChange"&&this.updateClientInput(),n&&this.tilt.update(this.wrapperEl.clientPosition,this.props),this.updateFlip(),this.tilt.updateTiltAnglesPercentage(this.props),this.glare&&this.glare.update(this.wrapperEl.clientPosition,this.props,i,r)},this.updateClientInput=()=>{const{trackOnWindow:t}=this.props;let n,i;if(t){const{x:r,y:o}=this.wrapperEl.clientPosition;n=o/window.innerHeight*200-100,i=r/window.innerWidth*200-100}else{const{size:{width:r,height:o,left:s,top:a},clientPosition:{x:l,y:c}}=this.wrapperEl;n=(c-a)/o*200-100,i=(l-s)/r*200-100}this.wrapperEl.clientPosition.xPercentage=_n(n,-100,100),this.wrapperEl.clientPosition.yPercentage=_n(i,-100,100)},this.updateFlip=()=>{const{flipVertically:t,flipHorizontally:n}=this.props;t&&(this.tilt.tiltAngleX+=180,this.tilt.tiltAngleY*=-1),n&&(this.tilt.tiltAngleY+=180)},this.renderFrame=()=>{this.resetWrapperElTransform(),this.renderPerspective(),this.tilt.render(this.wrapperEl.node),this.renderScale(),this.glare&&this.glare.render(this.props)}}componentDidMount(){if(this.tilt=new hT,this.initGlare(),this.addEventListeners(),typeof CustomEvent>"u")return;const t=new CustomEvent("autoreset");this.mainLoop(t);const n=new CustomEvent("initial");this.emitOnMove(n)}componentWillUnmount(){this.wrapperEl.updateAnimationId!==null&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.removeEventListeners()}componentDidUpdate(){const t=new CustomEvent("propChange");this.mainLoop(t),this.emitOnMove(t)}addEventListeners(){const{trackOnWindow:t,gyroscope:n}=this.props;window.addEventListener("resize",this.setSize),t&&(window.addEventListener("mouseenter",this.onEnter),window.addEventListener("mousemove",this.onMove),window.addEventListener("mouseout",this.onLeave),window.addEventListener("touchstart",this.onEnter),window.addEventListener("touchmove",this.onMove),window.addEventListener("touchend",this.onLeave)),n&&this.addDeviceOrientationEventListener()}removeEventListeners(){const{trackOnWindow:t,gyroscope:n}=this.props;window.removeEventListener("resize",this.setSize),t&&(window.removeEventListener("mouseenter",this.onEnter),window.removeEventListener("mousemove",this.onMove),window.removeEventListener("mouseout",this.onLeave),window.removeEventListener("touchstart",this.onEnter),window.removeEventListener("touchmove",this.onMove),window.removeEventListener("touchend",this.onLeave)),n&&window.DeviceOrientationEvent&&window.removeEventListener("deviceorientation",this.onMove)}setWrapperElSize(){const t=this.wrapperEl.node.getBoundingClientRect();this.wrapperEl.size.width=this.wrapperEl.node.offsetWidth,this.wrapperEl.size.height=this.wrapperEl.node.offsetHeight,this.wrapperEl.size.left=t.left+window.scrollX,this.wrapperEl.size.top=t.top+window.scrollY}initGlare(){const{glareEnable:t,glareBorderRadius:n}=this.props;t&&(this.glare=new fT(this.wrapperEl.size,n),this.wrapperEl.node.appendChild(this.glare.glareWrapperEl))}emitOnMove(t){const{onMove:n}=this.props;if(!n)return;let i=0,r=0;this.glare&&(i=this.glare.glareAngle,r=this.glare.glareOpacity),n({tiltAngleX:this.tilt.tiltAngleX,tiltAngleY:this.tilt.tiltAngleY,tiltAngleXPercentage:this.tilt.tiltAngleXPercentage,tiltAngleYPercentage:this.tilt.tiltAngleYPercentage,glareAngle:i,glareOpacity:r,eventType:t.type})}resetWrapperElTransform(){this.wrapperEl.node.style.transform=""}renderPerspective(){const{perspective:t}=this.props;this.wrapperEl.node.style.transform+=`perspective(${t}px) `}renderScale(){const{scale:t}=this.wrapperEl;this.wrapperEl.node.style.transform+=`scale3d(${t},${t},${t})`}setTransitions(){const{transitionSpeed:t,transitionEasing:n}=this.props;Am(this.wrapperEl.node,"all",t,n),this.glare&&Am(this.glare.glareEl,"opacity",t,n)}render(){const{children:t,className:n,style:i}=this.props;return xt.createElement("div",{ref:r=>this.wrapperEl.node=r,onMouseEnter:this.onEnter,onMouseMove:this.onMove,onMouseLeave:this.onLeave,onTouchStart:this.onEnter,onTouchMove:this.onMove,onTouchEnd:this.onLeave,className:n,style:i},t)}}Wv.defaultProps=pT;const mT="/assets/Photo-my-Nxdf0k7E.webp",gT=["WEB DEVELOPER","JS/TS DEVELOPER","REACT DEVELOPER"],yT=e=>{const[t,n]=j.useState(0),[i,r]=j.useState(!1),[o,s]=j.useState(""),[a,l]=j.useState(300-Math.random()*100),c=2e3;j.useEffect(()=>{const h=setInterval(()=>{u()},a);return()=>{clearInterval(h)}},[o]);const u=()=>{const h=t%e.length,f=e[h],y=i?f.substring(0,o.length-1):f.substring(0,o.length+1);s(y),i&&l(v=>v/2),!i&&y===f?(r(!0),l(c)):i&&y===""&&(r(!1),n(t+1),l(500))};return o},vT=z.section`
  display: flex;
  flex-direction: column;
  background-color: ${e=>e.theme==="light"?S.light.color.background.primary:S.dark.color.background.primary};
  color: ${e=>e.theme==="light"?S.light.color.text.primary:S.dark.color.text.primary};
  z-index: 0;
  overflow-x: hidden;
  padding-top: 60px;
  @media ${S.media.mobile} {
    padding-top: 27px;
  }
`,wT=z(Vi)`
  padding: 0;
  height: 100%;
`,xT=z(V)`
  margin: 80px auto;
  padding: 42px;
  min-height: 508px;
  width: 95%;
  left: 5%;
  flex-wrap: wrap;
  gap: 50px;
  transform: translateX(-5%);
  background: ${e=>e.theme==="light"?S.light.gradient.banner:S.dark.gradient.banner};
  backdrop-filter: blur(10px);
  border: 2px solid
    ${e=>e.theme==="light"?S.light.color.background.bannerBorder:S.dark.color.background.bannerBorder};
  border-radius: 200px 0;
  z-index: 999999;
  @media ${S.media.mobile} {
    border-radius: 112px 0;
    width: 70vw;
  }
`,bT=z(V)`
  position: relative;
  width: 10%;
  background-color: ${e=>e.theme==="light"?S.light.color.background.second:S.dark.color.background.second};
  &::after {
    position: absolute;
    content: '';
    width: 300%;
    height: 100%;
    background-color: ${e=>e.theme==="light"?S.light.color.background.second:S.dark.color.background.second};
    @media ${S.media.tablet} {
      width: 500%;
    }
  }
`,ST=z(V)`
  position: relative;
  width: 90%;
  z-index: 1;
  &::before {
    content: '+';
    position: absolute;
    top: 1%;
    left: 30%;
    transform: rotate(45deg) translate(-20%, -1%);
    height: 88px;
    width: 88px;
    ${pe({Fmax:150,Fmin:100,lineHeight:1.36,weight:600})}
    color: ${e=>e.theme==="light"?S.light.color.background.second:S.dark.color.background.second};
    z-index: 0;
    @media ${S.media.tablet} {
      top: 10%;
      left: 80%;
      transform: rotate(45deg) translate(-80%, -10%);
    }
    @media ${S.media.mobile} {
      top: 8%;
      left: 80%;
      transform: rotate(45deg) translate(-80%, -8%);
    }
  }

  &::after {
    content: '';
    position: absolute;
    height: 150px;
    width: 150px;
    border-radius: 50% 50%;
    border: 25px solid
      ${e=>e.theme==="light"?S.light.color.background.second:S.dark.color.background.second};
    top: 90%;
    left: 95%;
    transform: translate(-95%, -90%);
    z-index: -1;
    @media ${S.media.mobile} {
      height: 100px;
      width: 100px;
      border-width: 15px;
    }
  }
`,kT=z.img`
  display: flex;
  max-width: 400px;
  min-width: 188px;
  height: auto;
  border-radius: 50% 50%;
  border: 15px solid
    ${e=>e.theme==="light"?S.light.color.background.primary:S.dark.color.background.primary};
  object-fit: cover;
`,_T=z.h1`
  ${pe({Fmax:30,Fmin:20,lineHeight:1.68,weight:700})}
  text-shadow: ${e=>e.theme==="light"?S.light.shadow.text:S.dark.shadow.text};
`,CT=z.div`
  ${pe({Fmax:60,Fmin:28,family:"Montserrat",lineHeight:1,weight:700})}
  text-shadow: ${e=>e.theme==="light"?S.light.shadow.text:S.dark.shadow.text};
  text-align: end;
`,PT=z(V)`
  min-width: 376px;
  gap: 20px;
  @media ${S.media.tablet} {
    gap: 15px;
  }
  @media ${S.media.mobile} {
    min-width: 210px;
    gap: 10px;
  }
`,ET=z.p`
  ${pe({Fmax:20,Fmin:11,lineHeight:1.5,weight:400})}
`,IT=z(V)`
  gap: 26px;
  @media ${S.media.mobile} {
    gap: 16px;
  }
`,TT=z(ye)`
  ${pe({Fmax:18,Fmin:12,lineHeight:1.5,weight:600})}
  max-width: 200px;
  min-height: 54px;
  border-radius: 12px;
  padding: 5px 30px;
  @media ${S.media.tablet} {
    min-width: 132px;
    min-height: 40px;
    border-radius: 10px;
    padding: 0px 10px;
  }
`,OT=z(ye)`
  ${pe({Fmax:18,Fmin:12,lineHeight:1.5,weight:600})}
  @media ${S.media.mobile} {
    margin-left: 10px;
  }
`,MT=z(V)`
  height: 30px;
  width: 30px;
  align-items: center;
`,DT=z(V)`
  width: 30%;
  z-index: 0;
  background-color: ${e=>e.theme==="light"?S.light.color.background.second:S.dark.color.background.second};
  @media ${S.media.tablet} {
    width: 0;
  }
`,$T=z(V)`
  width: 70%;
  padding-left: 32px;
  z-index: 0;
  @media ${S.media.tablet} {
    width: 100%;
    padding-left: 0px;
  }
  @media ${S.media.mobile} {
    width: 100%;
  }
`,AT=z(V)`
  bottom: 0;
  margin-right: auto;
  z-index: 0;
`,RT=z.div`
  position: relative;
  min-width: 160px;
  min-height: 90px;
  margin: 80px 0;
  &::before {
    position: absolute;
    content: '';
    display: flex;
    flex-direction: column;
    min-width: 160px;
    min-height: 90px;
    border-radius: 24px;
    outline: 1px solid
      ${e=>e.theme==="light"?S.light.color.background.primary:S.dark.color.background.primary};
    background-color: ${e=>e.theme==="light"?S.light.color.background.second:S.dark.color.background.second};

    @media ${S.media.tablet} {
      margin-bottom: 0;
      min-width: 270px;
      min-height: 152px;
    }

    @media ${S.media.mobile} {
      margin-bottom: 0;
      min-width: 146px;
      min-height: 82px;
    }
  }
  @media ${S.media.tablet} {
    margin-bottom: 0;
    min-width: 270px;
    min-height: 152px;
  }

  @media ${S.media.mobile} {
    margin-bottom: 0;
    min-width: 146px;
    min-height: 82px;
  }
`,zT=z.div`
  position: absolute;
  border: 10px solid
    ${e=>e.theme==="light"?S.light.color.background.primary:S.dark.color.background.primary};
  border-radius: 50%;
  left: 50%;
  top: -50%;
  transform: translate(-50%, 10%);
  background-color: black;
  overflow: hidden;
  width: 75px;
  height: 75px;

  @media ${S.media.tablet} {
    border: 16px solid
      ${e=>e.theme==="light"?S.light.color.background.primary:S.dark.color.background.primary};
    width: 125px;
    height: 125px;
  }

  @media ${S.media.mobile} {
    border: 9px solid
      ${e=>e.theme==="light"?S.light.color.background.primary:S.dark.color.background.primary};
    width: 72px;
    height: 72px;
  }
`,LT=z.span`
  position: absolute;
  width: 100%;
  text-align: center;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -80%);
  color: ${S.light.color.text.second};
  font-size: 20px;
  font-weight: 600;
  line-height: 80%;
  @media ${S.media.tablet} {
    font-size: 34px;
  }

  @media ${S.media.mobile} {
    font-size: 18px;
  }
`,G={App:RT,AppIconWrapper:zT,AppText:LT,AppsLeft:DT,AppsRight:$T,AppsWrapper:AT,ArrowIconWrapper:MT,BannerDescription:ET,BannerLeft:bT,BannerLinksWrapper:IT,BannerPhoto:kT,BannerRight:ST,BannerTitleMain:_T,BannerTitleSecond:CT,BannerTitleWrapper:PT,BannerWrapper:xT,Main:vT,MainContainer:wT,ProjectsLink:TT,ResumeLink:OT},jT=()=>{const{theme:e,width:t}=at(),n=Cl(S.media.tablet),i=yT(gT),[r,o]=j.useState(!0);return j.useEffect(()=>{setTimeout(()=>{o(!1)},5e3)},[]),_.jsxs(G.Main,{id:"main",theme:e,children:[_.jsxs(G.MainContainer,{children:[_.jsx(G.BannerLeft,{theme:e}),_.jsx(G.BannerRight,{justify:"center",theme:e,children:_.jsx(Wv,{perspective:4e3,tiltEnable:t>=n,transitionSpeed:800,children:_.jsxs(G.BannerWrapper,{align:"center",justify:"center",theme:e,children:[_.jsx(V,{align:"center",justify:"center",width:"47%",children:_.jsx(G.BannerPhoto,{alt:"Photography",src:mT,theme:e})}),_.jsxs(G.BannerTitleWrapper,{direction:"column",width:"47%",children:[_.jsxs(V,{align:"start",direction:"column",justify:"center",children:[_.jsxs(G.BannerTitleSecond,{theme:e,children:["Hi, I'm",_.jsx(ye,{href:"#contact",children:"Dmitry Shamko"})]}),_.jsxs(G.BannerTitleMain,{"aria-label":"Web Developer",theme:e,children:[i," "]})]}),_.jsx(G.BannerDescription,{children:"Draft is a revolutionary web app built to help you manage your business easily and save your money."}),_.jsxs(G.BannerLinksWrapper,{align:"center",justify:"start",wrap:"wrap",children:[_.jsxs(G.ProjectsLink,{color:S.light.color.text.second,href:"#projects",type:"button",children:["See Projects",_.jsx(G.ArrowIconWrapper,{children:_.jsx(me,{iconId:"arrowRight",viewBox:"-8 -5 37 35"})})]}),_.jsx(G.ResumeLink,{download:!0,href:e==="dark"?"./cv/cv-eng-dark.pdf":"./cv/cv-eng-light.pdf",children:"Download Resume"})]})]})]})})})]}),_.jsxs(G.MainContainer,{children:[_.jsx(G.AppsLeft,{theme:e}),_.jsx(G.AppsRight,{direction:"column",justify:"end",children:_.jsxs(G.AppsWrapper,{gap:"12px",justify:"center",wrap:"wrap",children:[r&&_.jsx(K3,{delay:3e3,duration:2e3,triggerOnce:!0,children:_.jsxs(G.App,{theme:e,children:[_.jsx(G.AppIconWrapper,{theme:e,children:_.jsx(me,{height:"100%",iconId:"javaScript",viewBox:"-26 -28 180 180",width:"100%"})}),_.jsx(G.AppText,{children:"JavaScript"})]})}),_.jsxs(G.App,{theme:e,children:[_.jsx(G.AppIconWrapper,{theme:e,children:_.jsx(me,{height:"100%",iconId:"typeScript",viewBox:"-26 -28 180 180",width:"100%"})}),_.jsx(G.AppText,{children:"TypeScript"})]}),_.jsxs(G.App,{theme:e,children:[_.jsx(G.AppIconWrapper,{theme:e,children:_.jsx(me,{height:"100%",iconId:"react",viewBox:"-10 -12 150 150",width:"100%"})}),_.jsx(G.AppText,{children:"React"})]}),_.jsxs(G.App,{theme:e,children:[_.jsx(G.AppIconWrapper,{theme:e,children:_.jsx(me,{height:"100%",iconId:"redux",viewBox:"-18 -11 165 165",width:"100%"})}),_.jsx(G.AppText,{children:"Redux"})]}),_.jsxs(G.App,{theme:e,children:[_.jsx(G.AppIconWrapper,{theme:e,children:_.jsx(me,{height:"100%",iconId:"styled",viewBox:"2 -0 30 30",width:"100%"})}),_.jsx(G.AppText,{children:"Styled Components"})]})]})})]})]})},FT="data:image/webp;base64,UklGRiAJAABXRUJQVlA4TBQJAAAvDUFiAPcHvdb2tM0j6TOEmTNF1+4Y9LsTMDNXsvXZWgOSbbtppC8rVYbCZmZcQe23d9JzHPWMmbnbkUKGXNvW8uS8T/58/487kVFaYEYP2gAVw9Td4y4v67f5D8CUSm1TSKnktIAARQQyBTk8Q38wqD0kFQTeiL8IVZSAJidpplJgVdmeeSf8S0a+AxvXxcpLLavNl6psTqMV4ljqLXx9FNQNyPiYdAJmNoCm8U+bbLZI5hgSwk7hKrohYY3h2Moyr7AVji1jhDWGgbDGcGwZEoaEIeGMIQ0EmYQlA6WAwZJPykIZKLAQoCo4DjMNVhRQAKyRoMJHrqeRn5RoFdhYUAS0fH+qPwUYKi0+P3PhxcH9e/1SL7Ly+zfCG4L2/IrzKYLvFE8l9X0eij7qbqq+z7xCQC1MgyGwYIhHgBb4Ab8gB3+gAgLewDsQ0K7iFlAM7MEcgAIQrKg0wEqibZOsKvK2RbZtZGKGrC45Mo2mmPujqSDqW364iW9ehn5FvCbwClILW3f6O2CIuUM9h9kUxg5Y9BhN3CKyzg6d76fCtyzkBf5rq/0tlYiNEfRXjk0nA9vpE5sYdiOpXhOc6OHZYLCtjyq8woui2CB/64reup7ZIT5lHdpgFd/ewWIBsqj7UrxC7oCl9+RptS6vAmcTxgT9kOG56uNtyquo45J+ifH8DWZj/yzODkZimdIqo1XmvDFYfcM+fs42QYHeIOMqSUGfYnHoTLodynOnn1jU3/RvRuuZ3+GHzWLDw+gI6dbhpYBOcIKjUdP96alGDdgL/xM3x30pZZpmqO4Gf41a7p0RIApCHlEYgy+1373GIZO2af3bXr8JiIgJwAxOW1uOtv9t2wC2t3BLmzC72+oSCSlX4JOz1N1r6g10hjR3pmikRvctvTc+6T0hmQL8/oCYioj+Q4IkuW3TKB0KVLqjsmSg/Ja1bZshOe9BrW3bf8J2bNtYY7S2Y9u2bSeHdg5tJ9Nd1VWj5DCi/47YtnEkGdi+e3Fmb8rV/0jBaM5//2GkroFMb4zA4ZmQdNLJcjJozHRg3su42xu7Xbk5BqORtAIG48TMdltLQNZGsPTGnCffUONpATgxEwoIab+EcXSu0BAkrYIm0PzJnA0siLxGyMWhi82dFYD5k/AdaHQhMqWs/veTW45qLzqIgxQJA0eMm6wCeu/dFOXCyAmLgN67fkdmPLRO+FUFoMWWkPMb5DUUH7y+EnZWgSHtA1uKO6OmAvPu+dIcqgSAD4RkbV2kfeFrghwEPlnRpK1vcJP4ClqaR1YiJO5ipq7WXZ9qimMQgddXdilYoh/z/DpQ6naj20U5hyqppJgc34Bg/uZH5vS1AClrlTInPuH2JTDJXwKGFgQzJx93quiSNz3EKomL24FmO372AJr7N6xIfP+t9H2UW66HyjsH/L64N59dJjUr1wm5NGwxUOfG8g4pIPuUbWojTNBPmRkl+uxxk10KXRjdJ6zU3x/i8PviZj/Q4EbXHFI9wqTDgchlcqwS5FwhB5w1XdJa9UNro3CuUICU5dAFM9uY084MtBGMespMVhIHj50CQDupSoRvQKhCyygOpy8BMkvQ5MiIcxV0ARSy00yWvcA7Do4sBi1BAg0Mpy8BssvQbKdg0iw4USl1+hi9jflhevapsODJdULI5b5Cm/cA74yCoi8Bzs5ldsAy5ujbLdOG6b3DgZEe6VmRWcIYtuWUinBMhTpPxlNox/xgCjtZeR6p4IfDF3fVuUepc95mbRaQvFlAfdR1QhLubFMBn62l9OrCbQi5OGSLChwolN+Cpzes9FwavAlos5UlWBdCyIXh0wB+BHx9BR7YExJ/ccg4dbsdPXCTX0jaYx6Qo+yxs/S6SvoyKGhBKCF9loCpBm9Zr2wpAKXuW8IPsNVhr79ZVezgHlrz+aISUMnuUUsJUXKl6P7MLvrfq3TKnOUtoah/VUx18vdDQW8Ue+zAAnlrm75RsWcvGyaw62pOX1RtqaKpD5cV82ZGHP7UESxR/mg5YNTEKmh6ntJjt+Th4xdh4cs4m3OF3BNWwIukBvpFnA0j5GnAvJfRtwq5J5y+KPWTv/YXdZ0RyOgpwLznflaE8E0KRnP+c/4bnA60i0ArGIf29w7FQqdgaDv/Of85/1nLPT6Qo5KB3BTwwcz5H5z/wfkfnP/h3+5QNFbWKhpr0Dn/uelJ2RnimttQR0p42iYVrZuU/jDX3oZ9KeFpUyqaGr/JAa3pS3jahIqmJmhVEaqtAJ42naLpaVQQKo0Anjadosnx62WEct2Hp02naIJKCKW6D0+bTtH01DBqPjxtMkX/t9sbUSiEN/tI4TVy3jA2t/++hxJ3n+PNC24RcTfhvHfoCso8E/jQe+ThxF3xVe+QoCQS+V2B0Tv0nMJgPuHAEHcZm9tNKpzdDdz8Jt0BGqn1yEF0/GPC7SA8lnz3GY9ldw41Sj00PNidnsrKQbG3yAVF394nQJuP9+HmE9u863uT7YfwMf2zKfTWeQ/8hjF2xQO+uCa6KPYD+D3wz/dF49Oi89/vM2392il42oSKJvgX3bOBbsFsqe7D06ZUNL2/9p9e29jU2jbWpst1H562QUUDZoLMTKyta21rEzOVRgBP26CiAbOESjPTU5Ma29T0TKnaCuBpG1Q0YAZZtVIuaW3lSrXpS3jaBhUNmF3YatTrNY2tXm+0fCnhaRtUNGDmaRD4mlsQSAlP26SiXahrOzggzLOsPQeKspmNSPNZ2lYhcnN5caLjfcWVLnSlbZvBG4FzdndumjjItxlHwjLi+x5yHm4ubbTEMsJryJO8YYwJjh1E7Dkl4bH88y/UvADqjaVhFHyS4wevmRnUxsZu5tzggdIYaNvL3aex4ge7zaQyRor0nkRhOQUzKY3NPcl8lnXR+Hz0bwXn/9oOm1o5/9d2cPKv7cDzF/B6qMyJvuIhxV3GnhMTXgN7c1cPxZKBwmMiDVYRHV82gsqsV8voPdwdGSyt2DbeJDyCb06A5sU8Y89JmWeM5Z5BUcLHnkYKT3gJ8C6wk26ZT0wKBirEBCy8BnS8n17EVt8qZ8uCsSLr0vQPoQhg0W+EZQbZTmQsMWBtB7U3fUXj85Hz3x8AHA==",NT="/assets/EtchASketch-TEkrX8Rm.webp",BT="/assets/FlashCards-B6QejnGJ.png",UT="/assets/Library-LviRboBm.webp",WT="/assets/MemoryCard-CV3gwdpw.webp",HT="/assets/OpenAIClientApp-HgANN5-5.webp",VT="/assets/PhotographerHomePage-BCoC2w-T.webp",YT="/assets/SocialNetwork-CWcDyoqD.png",XT="/assets/TicTacToe-ejmztdeZ.webp",qT="/assets/TodoList-DzkUYHmE.webp",QT="/assets/WeatherApp-C7_AyP6F.webp",Gs=[{imageUrl:FT,projectCategory:"Vanilla JS",projectCode:"https://github.com/proffery/odin-calculator",projectDemo:"https://proffery.github.io/odin-calculator/",projectTitle:"Calculator. Foundations Course"},{imageUrl:NT,projectCategory:"Vanilla JS",projectCode:"https://github.com/proffery/odin-etch-a-sketch",projectDemo:"https://proffery.github.io/odin-etch-a-sketch/",projectTitle:"Etch-a-Sketch. Foundations Course"},{imageUrl:UT,projectCategory:"Vanilla JS",projectCode:"https://github.com/proffery/odin-library",projectDemo:"https://proffery.github.io/odin-library/",projectTitle:"Library. Foundations Course"},{imageUrl:XT,projectCategory:"Vanilla JS",projectCode:"https://github.com/proffery/odin-tic-tac-toe",projectDemo:"https://proffery.github.io/odin-tic-tac-toe/",projectTitle:"Tic Tac Toe. Foundations Course"},{imageUrl:qT,projectCategory:"Vanilla JS",projectCode:"https://github.com/proffery/odin-todo-list",projectDemo:"https://proffery.github.io/odin-todo-list/",projectTitle:"Todo List. Foundations Course"},{imageUrl:QT,projectCategory:"Vanilla JS",projectCode:"https://github.com/proffery/odin-weather-app",projectDemo:"https://proffery.github.io/odin-weather-app/",projectTitle:"Weather App. Foundations Course"},{imageUrl:HT,projectCategory:"Vanilla JS",projectCode:"https://github.com/proffery/openaiclient",projectDemo:"https://proffery.github.io/openaiclient/",projectTitle:"OpenAI API Client"},{imageUrl:WT,projectCategory:"React",projectCode:"https://github.com/proffery/odin-memory-card",projectDemo:"https://proffery.github.io/odin-memory-card/",projectTitle:"Memory Card Game. JavaScript"},{imageUrl:VT,projectCategory:"React",projectCode:"https://github.com/proffery/portfolio-project-two",projectDemo:"https://proffery.github.io/portfolio-project-two/",projectTitle:"Photographer page: JavaScript, React-Bootstrap. Firebase"},{imageUrl:YT,projectCategory:"React",projectCode:"https://github.com/proffery/samurai-way",projectDemo:"https://proffery.github.io/samurai-way/",projectTitle:"Social Network: TypeScrypt. React. Redux. Axios. Styled-components"},{imageUrl:BT,projectCategory:"React",projectCode:"https://github.com/proffery/cards",projectDemo:"https://flashcards-proffery.vercel.app/",projectTitle:"Flash Cards: TypeScrypt. React. RTK Query. SCSS. Storybook"}],GT="/assets/decorations-dots-CrmKnois.svg",KT=z.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  background-color: ${e=>e.theme==="light"?S.light.color.background.primary:S.dark.color.background.primary};
  color: ${e=>e.theme==="light"?S.light.color.text.primary:S.dark.color.text.primary};
`,ZT=z(Vi)`
  background-image: url(${GT});
  background-repeat: no-repeat;
  background-position: top left;
  position: relative;
  &::before {
    content: '+';
    position: absolute;
    top: 120%;
    left: 50%;
    transform: rotate(45deg) translate(-50%, -110%);
    opacity: 0.3;
    ${pe({Fmax:550,Fmin:350,lineHeight:1.36,weight:600})}
    color: ${e=>e.theme==="light"?S.light.color.background.second:S.dark.color.background.second};
    @media ${S.media.tablet} {
      opacity: 0;
    }
  }
`,JT=z(V)`
  margin-top: 40px;
  max-height: 100vh;
  overflow-y: auto;
  gap: 38px;
  padding: 0 38px;
  @media ${S.media.mobile} {
    gap: 22px;
    padding: 0 22px;
  }
`,e5=z(Gl)`
  ${pe({Fmax:20,Fmin:12,lineHeight:1.36,weight:400})}
  min-width: 160px;
  @media ${S.media.tablet} {
    min-width: 110px;
  }
  @media ${S.media.mobile} {
    min-width: 96px;
  }
`,Ks={CategoryButton:e5,ProjectWrapper:JT,Projects:KT,ProjectsContainer:ZT},Hv=z(V)`
  background-color: ${e=>e.theme==="light"?S.light.color.background.card:S.dark.color.background.card};
  position: relative;
  top: 100%;
  transform: translateY(-100%);
  height: 40%;
  width: 100%;
  border-radius: 0 0 20px 20px;
  padding: 22px 32px;
  box-shadow: ${e=>e.theme==="light"?S.light.shadow.card:S.dark.shadow.card};
  transition: height ease-in 0.5s;
  outline: 1px solid
    ${e=>e.theme==="light"?S.light.color.background.primary:S.dark.color.background.primary};

  @media ${S.media.mobile} {
    border-radius: 0 0 16px 16px;
    padding: 16px;
  }
`,Vv=z.h3`
  color: ${e=>e.theme==="light"?S.light.color.text.link:S.dark.color.text.primary};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-align: left;
  ${pe({Fmax:20,Fmin:14,lineHeight:1.36,weight:700})}
`,Sd=z(ye)`
  ${pe({Fmax:14,Fmin:12,lineHeight:1.48,weight:700})}
  max-width: 100px;
  width: 50%;
  max-height: 30px;
  aspect-ratio: 11 / 3;
  border-radius: 10px;
  @media ${S.media.mobile} {
    border-radius: 7px;
  }
`,t5=z(V)`
  background-image: ${e=>e.backgroundImage};
  position: relative;
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  border-radius: 20px;
  max-width: 270px;
  width: 30%;
  aspect-ratio: 9 / 14;
  flex-grow: 1;
  margin-bottom: 10px;
  @media ${S.media.mobile} {
    border-radius: 16px;
    min-width: 163px;
  }

  ${Sd} {
    background-color: transparent;
  }
  ${Sd}[type="button"] {
    color: ${e=>e.theme==="light"?S.light.color.text.second:S.dark.color.text.second};
    background-color: ${e=>e.theme==="light"?S.light.color.text.link:S.dark.color.text.primary};
  }
  &:hover {
    ${Hv} {
      background-color: ${e=>e.theme==="light"?S.light.color.background.second:S.dark.color.background.second};
      height: 45%;
    }
    ${Vv} {
      color: ${e=>e.theme==="light"?S.light.color.text.second:S.dark.color.text.primary};
      display: inline-block;
    }
    ${V} ${ye} {
      color: ${e=>e.theme==="light"?S.light.color.text.second:S.dark.color.text.primary};
    }
    ${V} ${ye}[type="button"] {
      color: ${e=>e.theme==="light"?S.light.color.text.second:S.dark.color.text.primary};
      background-color: ${e=>e.theme==="light"?S.light.color.text.link:S.dark.color.text.link};
    }
  }
`,fo={ProjectCard:t5,ProjectCardContent:Hv,ProjectCardLink:Sd,ProjectCardTitle:Vv},n5=e=>{const{theme:t}=at();return _.jsx(fo.ProjectCard,{align:"center",backgroundImage:`url("${e.imageUrl}")`,direction:"column",theme:t,children:_.jsx(fo.ProjectCardContent,{direction:"column",justify:"space-between",theme:t,children:_.jsxs(ds,{cascade:!0,duration:500,triggerOnce:!0,children:[_.jsx(fo.ProjectCardTitle,{theme:t,children:e.title}),_.jsxs(V,{align:"center",justify:"center",width:"100%",children:[_.jsx(fo.ProjectCardLink,{href:e.githubUrl,target:"_blank",theme:t,type:"button",children:"Code"}),_.jsx(fo.ProjectCardLink,{href:e.previewUrl,target:"_blank",theme:t,children:"Demo"})]})]})})})},i5=()=>{const{theme:e}=at(),[t,n]=j.useState([...Gs]),[i,r]=j.useState("React"),[o,s]=j.useState(["All"]);return j.useEffect(()=>{const a=[...o];Gs.forEach(l=>{!a.includes(l.projectCategory)&&a.unshift(l.projectCategory)}),s(a)},[]),j.useEffect(()=>{n(i==="All"?[...Gs]:Gs.filter(a=>a.projectCategory===i))},[i]),_.jsx(Ks.Projects,{id:"projects",theme:e,children:_.jsxs(Ks.ProjectsContainer,{direction:"column",theme:e,children:[_.jsx(fs,{theme:e,children:"Projects"}),_.jsx(V,{align:"center",gap:"20px",justify:"center",wrap:"wrap",children:_.jsx(ds,{cascade:!0,duration:700,triggerOnce:!0,children:o.map((a,l)=>_.jsx(Ks.CategoryButton,{background:a===i?S[`${e}`].color.background.second:S[`${e}`].color.background.primary,borderStyle:"solid",borderWidth:"3px",color:a===i?S[`${e}`].color.text.second:S[`${e}`].color.text.primary,hoverColor:S.light.color.text.second,onClick:()=>{r(a)},padding:"7px",theme:e,children:a},l))})}),_.jsx(Ks.ProjectWrapper,{align:"center",justify:"center",wrap:"wrap",children:t.slice(0).reverse().map((a,l)=>_.jsx(n5,{githubUrl:a.projectCode,imageUrl:a.imageUrl,previewUrl:a.projectDemo,title:a.projectTitle},l+a.projectCategory))})]})})},Rm=[{category:"front",imageId:"html",title:"HTML",viewBox:"0 0 128 128"},{category:"front",imageId:"css",title:"CSS",viewBox:"0 0 128 128"},{category:"front",imageId:"javaScript",title:"JavaScript",viewBox:"0 0 128 128"},{category:"front",imageId:"typeScript",title:"TypeScript",viewBox:"0 0 128 128"},{category:"front",imageId:"react",title:"React",viewBox:"0 0 128 128"},{category:"front",imageId:"redux",title:"Redux",viewBox:"0 0 128 128"},{category:"front",imageId:"styled",title:"Styled Components",viewBox:"0 1 30 30"},{category:"front",imageId:"bootstrap",title:"Bootstrap",viewBox:"0 0 128 128"},{category:"other",imageId:"firebase",title:"Firebase",viewBox:"0 0 128 128"},{category:"front",imageId:"sass",title:"SASS",viewBox:"0 0 128 128"},{category:"other",imageId:"git",title:"Git",viewBox:"0 0 128 128"},{category:"other",imageId:"gitHub",title:"GitHub",viewBox:"0 0 128 128"},{category:"other",imageId:"vsCode",title:"VS Code",viewBox:"0 0 128 128"},{category:"other",imageId:"storyBook",title:"Storybook",viewBox:"0 0 128 128"}];var Yv={},Xv={},qv={},Kl={},We={};Object.defineProperty(We,"__esModule",{value:!0});We.TraceDirectionKey=We.Direction=We.Axis=void 0;var kd;We.TraceDirectionKey=kd;(function(e){e.NEGATIVE="NEGATIVE",e.POSITIVE="POSITIVE",e.NONE="NONE"})(kd||(We.TraceDirectionKey=kd={}));var _d;We.Direction=_d;(function(e){e.TOP="TOP",e.LEFT="LEFT",e.RIGHT="RIGHT",e.BOTTOM="BOTTOM",e.NONE="NONE"})(_d||(We.Direction=_d={}));var Cd;We.Axis=Cd;(function(e){e.X="x",e.Y="y"})(Cd||(We.Axis=Cd={}));Object.defineProperty(Kl,"__esModule",{value:!0});Kl.calculateDirection=r5;var ou=We;function r5(e){var t,n=ou.TraceDirectionKey.NEGATIVE,i=ou.TraceDirectionKey.POSITIVE,r=e[e.length-1],o=e[e.length-2]||0;return e.every(function(s){return s===0})?ou.TraceDirectionKey.NONE:(t=r>o?i:n,r===0&&(t=o<0?i:n),t)}var Zl={},Rt={};Object.defineProperty(Rt,"__esModule",{value:!0});Rt.resolveAxisDirection=Rt.getDirectionValue=Rt.getDirectionKey=Rt.getDifference=void 0;var wt=We,o5=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=Object.keys(t).toString();switch(n){case wt.TraceDirectionKey.POSITIVE:return wt.TraceDirectionKey.POSITIVE;case wt.TraceDirectionKey.NEGATIVE:return wt.TraceDirectionKey.NEGATIVE;default:return wt.TraceDirectionKey.NONE}};Rt.getDirectionKey=o5;var s5=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return t[t.length-1]||0};Rt.getDirectionValue=s5;var a5=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return Math.abs(t-n)};Rt.getDifference=a5;var l5=function(t,n){var i=wt.Direction.LEFT,r=wt.Direction.RIGHT,o=wt.Direction.NONE;return t===wt.Axis.Y&&(i=wt.Direction.BOTTOM,r=wt.Direction.TOP),n===wt.TraceDirectionKey.NEGATIVE&&(o=i),n===wt.TraceDirectionKey.POSITIVE&&(o=r),o};Rt.resolveAxisDirection=l5;Object.defineProperty(Zl,"__esModule",{value:!0});Zl.calculateDirectionDelta=u5;var c5=We,ho=Rt;function u5(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=e.length,i=n-1,r=c5.TraceDirectionKey.NONE;i>=0;i--){var o=e[i],s=(0,ho.getDirectionKey)(o),a=(0,ho.getDirectionValue)(o[s]),l=e[i-1]||{},c=(0,ho.getDirectionKey)(l),u=(0,ho.getDirectionValue)(l[c]),h=(0,ho.getDifference)(a,u);if(h>=t){r=s;break}else r=c}return r}var Jl={};Object.defineProperty(Jl,"__esModule",{value:!0});Jl.calculateDuration=d5;function d5(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return e?t-e:0}var Gf={};Object.defineProperty(Gf,"__esModule",{value:!0});Gf.calculateMovingPosition=f5;function f5(e){if("changedTouches"in e){var t=e.changedTouches&&e.changedTouches[0];return{x:t&&t.clientX,y:t&&t.clientY}}return{x:e.clientX,y:e.clientY}}var Kf={},ec={};Object.defineProperty(ec,"__esModule",{value:!0});ec.updateTrace=h5;function h5(e,t){var n=e[e.length-1];return n!==t&&e.push(t),e}var tc={},nc={};Object.defineProperty(nc,"__esModule",{value:!0});nc.calculateTraceDirections=p5;var Zs=We;function zm(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p5(){for(var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],t=[],n=Zs.TraceDirectionKey.POSITIVE,i=Zs.TraceDirectionKey.NEGATIVE,r=0,o=[],s=Zs.TraceDirectionKey.NONE;r<e.length;r++){var a=e[r],l=e[r-1];if(o.length){var c=a>l?n:i;s===Zs.TraceDirectionKey.NONE&&(s=c),c===s?o.push(a):(t.push(zm({},s,o.slice())),o=[],o.push(a),s=c)}else a!==0&&(s=a>0?n:i),o.push(a)}return o.length&&t.push(zm({},s,o)),t}Object.defineProperty(tc,"__esModule",{value:!0});tc.resolveDirection=w5;var m5=Kl,g5=nc,y5=Zl,Lm=Rt,v5=We;function w5(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:v5.Axis.X,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0;if(n){var i=(0,g5.calculateTraceDirections)(e),r=(0,y5.calculateDirectionDelta)(i,n);return(0,Lm.resolveAxisDirection)(t,r)}var o=(0,m5.calculateDirection)(e);return(0,Lm.resolveAxisDirection)(t,o)}var ic={};Object.defineProperty(ic,"__esModule",{value:!0});ic.calculateVelocity=x5;function x5(e,t,n){var i=Math.sqrt(e*e+t*t);return i/(n||1)}Object.defineProperty(Kf,"__esModule",{value:!0});Kf.calculatePosition=k5;var jm=ec,Fm=tc,b5=Jl,S5=ic,Nm=We;function k5(e,t){var n=e.start,i=e.x,r=e.y,o=e.traceX,s=e.traceY,a=t.rotatePosition,l=t.directionDelta,c=a.x-i,u=r-a.y,h=Math.abs(c),f=Math.abs(u);(0,jm.updateTrace)(o,c),(0,jm.updateTrace)(s,u);var y=(0,Fm.resolveDirection)(o,Nm.Axis.X,l),v=(0,Fm.resolveDirection)(s,Nm.Axis.Y,l),m=(0,b5.calculateDuration)(n,Date.now()),C=(0,S5.calculateVelocity)(h,f,m);return{absX:h,absY:f,deltaX:c,deltaY:u,directionX:y,directionY:v,duration:m,positionX:a.x,positionY:a.y,velocity:C}}var rc={};Object.defineProperty(rc,"__esModule",{value:!0});rc.checkIsMoreThanSingleTouches=void 0;var _5=function(t){return!!(t.touches&&t.touches.length>1)};rc.checkIsMoreThanSingleTouches=_5;var ps={},oc={};Object.defineProperty(oc,"__esModule",{value:!0});oc.createOptions=C5;function C5(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.defineProperty(e,"passive",{get:function(){return this.isPassiveSupported=!0,!0},enumerable:!0}),e}Object.defineProperty(ps,"__esModule",{value:!0});ps.checkIsPassiveSupported=E5;ps.noop=void 0;var P5=oc;function E5(e){if(typeof e=="boolean")return e;var t={isPassiveSupported:e};try{var n=(0,P5.createOptions)(t);window.addEventListener("checkIsPassiveSupported",Pd,n),window.removeEventListener("checkIsPassiveSupported",Pd,n)}catch{}return t.isPassiveSupported}var Pd=function(){};ps.noop=Pd;var sc={};Object.defineProperty(sc,"__esModule",{value:!0});sc.checkIsTouchEventsSupported=void 0;function Ed(e){"@babel/helpers - typeof";return Ed=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ed(e)}var I5=function(){return(typeof window>"u"?"undefined":Ed(window))==="object"&&("ontouchstart"in window||!!window.navigator.maxTouchPoints)};sc.checkIsTouchEventsSupported=I5;var ac={};Object.defineProperty(ac,"__esModule",{value:!0});ac.getInitialState=void 0;function Bm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,i)}return n}function T5(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Bm(Object(n),!0).forEach(function(i){O5(e,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Bm(Object(n)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))})}return e}function O5(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var M5=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return T5({x:0,y:0,start:0,isSwiping:!1,traceX:[],traceY:[]},t)};ac.getInitialState=M5;var lc={};Object.defineProperty(lc,"__esModule",{value:!0});lc.getInitialProps=void 0;function Um(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,i)}return n}function D5(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Um(Object(n),!0).forEach(function(i){$5(e,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Um(Object(n)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))})}return e}function $5(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var A5=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return D5({element:null,target:null,delta:10,directionDelta:0,rotationAngle:0,mouseTrackingEnabled:!1,touchTrackingEnabled:!0,preventDefaultTouchmoveEvent:!1,preventTrackingOnMouseleave:!1},t)};lc.getInitialProps=A5;var Zf={};Object.defineProperty(Zf,"__esModule",{value:!0});Zf.getOptions=R5;function R5(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;return e?{passive:!1}:{}}var Jf={};Object.defineProperty(Jf,"__esModule",{value:!0});Jf.rotateByAngle=z5;function z5(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;if(t===0)return e;var n=e.x,i=e.y,r=Math.PI/180*t,o=n*Math.cos(r)+i*Math.sin(r),s=i*Math.cos(r)-n*Math.sin(r);return{x:o,y:s}}(function(e){Object.defineProperty(e,"__esModule",{value:!0});var t=Kl;Object.keys(t).forEach(function(d){d==="default"||d==="__esModule"||d in e&&e[d]===t[d]||Object.defineProperty(e,d,{enumerable:!0,get:function(){return t[d]}})});var n=Zl;Object.keys(n).forEach(function(d){d==="default"||d==="__esModule"||d in e&&e[d]===n[d]||Object.defineProperty(e,d,{enumerable:!0,get:function(){return n[d]}})});var i=Jl;Object.keys(i).forEach(function(d){d==="default"||d==="__esModule"||d in e&&e[d]===i[d]||Object.defineProperty(e,d,{enumerable:!0,get:function(){return i[d]}})});var r=Gf;Object.keys(r).forEach(function(d){d==="default"||d==="__esModule"||d in e&&e[d]===r[d]||Object.defineProperty(e,d,{enumerable:!0,get:function(){return r[d]}})});var o=Kf;Object.keys(o).forEach(function(d){d==="default"||d==="__esModule"||d in e&&e[d]===o[d]||Object.defineProperty(e,d,{enumerable:!0,get:function(){return o[d]}})});var s=nc;Object.keys(s).forEach(function(d){d==="default"||d==="__esModule"||d in e&&e[d]===s[d]||Object.defineProperty(e,d,{enumerable:!0,get:function(){return s[d]}})});var a=ic;Object.keys(a).forEach(function(d){d==="default"||d==="__esModule"||d in e&&e[d]===a[d]||Object.defineProperty(e,d,{enumerable:!0,get:function(){return a[d]}})});var l=rc;Object.keys(l).forEach(function(d){d==="default"||d==="__esModule"||d in e&&e[d]===l[d]||Object.defineProperty(e,d,{enumerable:!0,get:function(){return l[d]}})});var c=ps;Object.keys(c).forEach(function(d){d==="default"||d==="__esModule"||d in e&&e[d]===c[d]||Object.defineProperty(e,d,{enumerable:!0,get:function(){return c[d]}})});var u=sc;Object.keys(u).forEach(function(d){d==="default"||d==="__esModule"||d in e&&e[d]===u[d]||Object.defineProperty(e,d,{enumerable:!0,get:function(){return u[d]}})});var h=Rt;Object.keys(h).forEach(function(d){d==="default"||d==="__esModule"||d in e&&e[d]===h[d]||Object.defineProperty(e,d,{enumerable:!0,get:function(){return h[d]}})});var f=oc;Object.keys(f).forEach(function(d){d==="default"||d==="__esModule"||d in e&&e[d]===f[d]||Object.defineProperty(e,d,{enumerable:!0,get:function(){return f[d]}})});var y=ac;Object.keys(y).forEach(function(d){d==="default"||d==="__esModule"||d in e&&e[d]===y[d]||Object.defineProperty(e,d,{enumerable:!0,get:function(){return y[d]}})});var v=lc;Object.keys(v).forEach(function(d){d==="default"||d==="__esModule"||d in e&&e[d]===v[d]||Object.defineProperty(e,d,{enumerable:!0,get:function(){return v[d]}})});var m=Zf;Object.keys(m).forEach(function(d){d==="default"||d==="__esModule"||d in e&&e[d]===m[d]||Object.defineProperty(e,d,{enumerable:!0,get:function(){return m[d]}})});var C=tc;Object.keys(C).forEach(function(d){d==="default"||d==="__esModule"||d in e&&e[d]===C[d]||Object.defineProperty(e,d,{enumerable:!0,get:function(){return C[d]}})});var w=Jf;Object.keys(w).forEach(function(d){d==="default"||d==="__esModule"||d in e&&e[d]===w[d]||Object.defineProperty(e,d,{enumerable:!0,get:function(){return w[d]}})});var g=ec;Object.keys(g).forEach(function(d){d==="default"||d==="__esModule"||d in e&&e[d]===g[d]||Object.defineProperty(e,d,{enumerable:!0,get:function(){return g[d]}})})})(qv);(function(e){function t(f){"@babel/helpers - typeof";return t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(y){return typeof y}:function(y){return y&&typeof Symbol=="function"&&y.constructor===Symbol&&y!==Symbol.prototype?"symbol":typeof y},t(f)}Object.defineProperty(e,"__esModule",{value:!0});var n={};e.default=void 0;var i=s(qv),r=We;Object.keys(r).forEach(function(f){f==="default"||f==="__esModule"||Object.prototype.hasOwnProperty.call(n,f)||f in e&&e[f]===r[f]||Object.defineProperty(e,f,{enumerable:!0,get:function(){return r[f]}})});function o(f){if(typeof WeakMap!="function")return null;var y=new WeakMap,v=new WeakMap;return(o=function(C){return C?v:y})(f)}function s(f,y){if(f&&f.__esModule)return f;if(f===null||t(f)!=="object"&&typeof f!="function")return{default:f};var v=o(y);if(v&&v.has(f))return v.get(f);var m={},C=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var w in f)if(w!=="default"&&Object.prototype.hasOwnProperty.call(f,w)){var g=C?Object.getOwnPropertyDescriptor(f,w):null;g&&(g.get||g.set)?Object.defineProperty(m,w,g):m[w]=f[w]}return m.default=f,v&&v.set(f,m),m}function a(f,y){if(!(f instanceof y))throw new TypeError("Cannot call a class as a function")}function l(f,y){for(var v=0;v<y.length;v++){var m=y[v];m.enumerable=m.enumerable||!1,m.configurable=!0,"value"in m&&(m.writable=!0),Object.defineProperty(f,m.key,m)}}function c(f,y,v){return y&&l(f.prototype,y),v&&l(f,v),Object.defineProperty(f,"prototype",{writable:!1}),f}function u(f,y,v){return y in f?Object.defineProperty(f,y,{value:v,enumerable:!0,configurable:!0,writable:!0}):f[y]=v,f}var h=function(){function f(y){a(this,f),u(this,"state",void 0),u(this,"props",void 0),this.state=i.getInitialState(),this.props=i.getInitialProps(y),this.handleSwipeStart=this.handleSwipeStart.bind(this),this.handleSwipeMove=this.handleSwipeMove.bind(this),this.handleSwipeEnd=this.handleSwipeEnd.bind(this),this.handleMouseDown=this.handleMouseDown.bind(this),this.handleMouseMove=this.handleMouseMove.bind(this),this.handleMouseUp=this.handleMouseUp.bind(this),this.handleMouseLeave=this.handleMouseLeave.bind(this)}return c(f,[{key:"init",value:function(){this.setupTouchListeners(),this.setupMouseListeners()}},{key:"update",value:function(v){var m=this.props,C=Object.assign({},m,v);if(m.element!==C.element||m.target!==C.target){this.destroy(),this.props=C,this.init();return}this.props=C,(m.mouseTrackingEnabled!==C.mouseTrackingEnabled||m.preventTrackingOnMouseleave!==C.preventTrackingOnMouseleave)&&(this.cleanupMouseListeners(),C.mouseTrackingEnabled?this.setupMouseListeners():this.cleanupMouseListeners()),m.touchTrackingEnabled!==C.touchTrackingEnabled&&(this.cleanupTouchListeners(),C.touchTrackingEnabled?this.setupTouchListeners():this.cleanupTouchListeners())}},{key:"destroy",value:function(){this.cleanupMouseListeners(),this.cleanupTouchListeners(),this.state=i.getInitialState(),this.props=i.getInitialProps()}},{key:"setupTouchListeners",value:function(){var v=this.props,m=v.element,C=v.target,w=v.touchTrackingEnabled;if(m&&w){var g=C||m,d=i.checkIsPassiveSupported(),p=i.getOptions(d);g.addEventListener("touchstart",this.handleSwipeStart,p),g.addEventListener("touchmove",this.handleSwipeMove,p),g.addEventListener("touchend",this.handleSwipeEnd,p)}}},{key:"cleanupTouchListeners",value:function(){var v=this.props,m=v.element,C=v.target,w=C||m;w&&(w.removeEventListener("touchstart",this.handleSwipeStart),w.removeEventListener("touchmove",this.handleSwipeMove),w.removeEventListener("touchend",this.handleSwipeEnd))}},{key:"setupMouseListeners",value:function(){var v=this.props,m=v.element,C=v.mouseTrackingEnabled,w=v.preventTrackingOnMouseleave;C&&m&&(m.addEventListener("mousedown",this.handleMouseDown),m.addEventListener("mousemove",this.handleMouseMove),m.addEventListener("mouseup",this.handleMouseUp),w&&m.addEventListener("mouseleave",this.handleMouseLeave))}},{key:"cleanupMouseListeners",value:function(){var v=this.props.element;v&&(v.removeEventListener("mousedown",this.handleMouseDown),v.removeEventListener("mousemove",this.handleMouseMove),v.removeEventListener("mouseup",this.handleMouseUp),v.removeEventListener("mouseleave",this.handleMouseLeave))}},{key:"getEventData",value:function(v){var m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{directionDelta:0},C=this.props.rotationAngle,w=m.directionDelta,g=i.calculateMovingPosition(v),d=i.rotateByAngle(g,C);return i.calculatePosition(this.state,{rotatePosition:d,directionDelta:w})}},{key:"handleSwipeStart",value:function(v){if(!i.checkIsMoreThanSingleTouches(v)){var m=this.props.rotationAngle,C=i.calculateMovingPosition(v),w=i.rotateByAngle(C,m),g=w.x,d=w.y;this.state=i.getInitialState({isSwiping:!1,start:Date.now(),x:g,y:d})}}},{key:"handleSwipeMove",value:function(v){var m=this.state,C=m.x,w=m.y,g=m.isSwiping;if(!(!C||!w||i.checkIsMoreThanSingleTouches(v))){var d=this.props.directionDelta||0,p=this.getEventData(v,{directionDelta:d}),x=p.absX,b=p.absY,k=p.deltaX,P=p.deltaY,I=p.directionX,O=p.directionY,A=p.duration,E=p.velocity,D=this.props,M=D.delta,L=D.preventDefaultTouchmoveEvent,B=D.onSwipeStart,H=D.onSwiping;v.cancelable&&L&&v.preventDefault(),!(x<Number(M)&&b<Number(M)&&!g)&&(B&&!g&&B(v,{deltaX:k,deltaY:P,absX:x,absY:b,directionX:I,directionY:O,duration:A,velocity:E}),this.state.isSwiping=!0,H&&H(v,{deltaX:k,deltaY:P,absX:x,absY:b,directionX:I,directionY:O,duration:A,velocity:E}))}}},{key:"handleSwipeEnd",value:function(v){var m=this.props,C=m.onSwiped,w=m.onTap;if(this.state.isSwiping){var g=this.props.directionDelta||0,d=this.getEventData(v,{directionDelta:g});C&&C(v,d)}else{var p=this.getEventData(v);w&&w(v,p)}this.state=i.getInitialState()}},{key:"handleMouseDown",value:function(v){var m=this.props.target;m?m===v.target&&this.handleSwipeStart(v):this.handleSwipeStart(v)}},{key:"handleMouseMove",value:function(v){this.handleSwipeMove(v)}},{key:"handleMouseUp",value:function(v){var m=this.state.isSwiping,C=this.props.target;C?(C===v.target||m)&&this.handleSwipeEnd(v):this.handleSwipeEnd(v)}},{key:"handleMouseLeave",value:function(v){var m=this.state.isSwiping;m&&this.handleSwipeEnd(v)}}],[{key:"isTouchEventsSupported",value:function(){return i.checkIsTouchEventsSupported()}}]),f}();e.default=h})(Xv);var Qv={},yn={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Modifiers=e.Classnames=e.AutoplayDirection=e.ControlsStrategy=e.AutoPlayStrategy=e.AnimationType=e.EventType=void 0,function(t){t.ACTION="action",t.INIT="init",t.RESIZE="resize",t.UPDATE="update"}(e.EventType||(e.EventType={})),function(t){t.FADEOUT="fadeout",t.SLIDE="slide"}(e.AnimationType||(e.AnimationType={})),function(t){t.DEFAULT="default",t.ALL="all",t.ACTION="action",t.NONE="none"}(e.AutoPlayStrategy||(e.AutoPlayStrategy={})),function(t){t.DEFAULT="default",t.ALTERNATE="alternate",t.RESPONSIVE="responsive"}(e.ControlsStrategy||(e.ControlsStrategy={})),function(t){t.RTL="rtl",t.LTR="ltr"}(e.AutoplayDirection||(e.AutoplayDirection={})),function(t){t.ANIMATED="animated animated-out fadeOut",t.ROOT="alice-carousel",t.WRAPPER="alice-carousel__wrapper",t.STAGE="alice-carousel__stage",t.STAGE_ITEM="alice-carousel__stage-item",t.DOTS="alice-carousel__dots",t.DOTS_ITEM="alice-carousel__dots-item",t.PLAY_BTN="alice-carousel__play-btn",t.PLAY_BTN_ITEM="alice-carousel__play-btn-item",t.PLAY_BTN_WRAPPER="alice-carousel__play-btn-wrapper",t.SLIDE_INFO="alice-carousel__slide-info",t.SLIDE_INFO_ITEM="alice-carousel__slide-info-item",t.BUTTON_PREV="alice-carousel__prev-btn",t.BUTTON_PREV_WRAPPER="alice-carousel__prev-btn-wrapper",t.BUTTON_PREV_ITEM="alice-carousel__prev-btn-item",t.BUTTON_NEXT="alice-carousel__next-btn",t.BUTTON_NEXT_WRAPPER="alice-carousel__next-btn-wrapper",t.BUTTON_NEXT_ITEM="alice-carousel__next-btn-item"}(e.Classnames||(e.Classnames={})),function(t){t.ACTIVE="__active",t.INACTIVE="__inactive",t.CLONED="__cloned",t.CUSTOM="__custom",t.PAUSE="__pause",t.SEPARATOR="__separator",t.SSR="__ssr",t.TARGET="__target"}(e.Modifiers||(e.Modifiers={}))})(yn);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.defaultProps=void 0;var t=yn;e.defaultProps={activeIndex:0,animationDuration:400,animationEasingFunction:"ease",animationType:t.AnimationType.SLIDE,autoHeight:!1,autoWidth:!1,autoPlay:!1,autoPlayControls:!1,autoPlayDirection:t.AutoplayDirection.LTR,autoPlayInterval:400,autoPlayStrategy:t.AutoPlayStrategy.DEFAULT,children:void 0,controlsStrategy:t.ControlsStrategy.DEFAULT,disableButtonsControls:!1,disableDotsControls:!1,disableSlideInfo:!0,infinite:!1,innerWidth:void 0,items:void 0,keyboardNavigation:!1,mouseTracking:!1,syncStateOnPropsUpdate:!0,name:"",paddingLeft:0,paddingRight:0,responsive:void 0,swipeDelta:20,swipeExtraPadding:200,ssrSilentMode:!0,touchTracking:!0,touchMoveDefaultEvents:!0,onInitialized:function(){},onResized:function(){},onUpdated:function(){},onResizeEvent:void 0,onSlideChange:function(){},onSlideChanged:function(){}}})(Qv);var Gv={};(function(e){var t=function(){return(t=Object.assign||function(o){for(var s,a=1,l=arguments.length;a<l;a++)for(var c in s=arguments[a])Object.prototype.hasOwnProperty.call(s,c)&&(o[c]=s[c]);return o}).apply(this,arguments)},n=function(o){return o&&o.__esModule?o:{default:o}},i=(Object.defineProperty(e,"__esModule",{value:!0}),n(j));function r(o){var s={xDown:null,xUp:null};return i.default.createElement("a",t({onClick:function(a){s.xDown!==s.xUp&&a.preventDefault()},onMouseDown:function(a){a.preventDefault(),s.xUp=null,s.xDown=a.clientX},onMouseUp:function(a){a.preventDefault(),s.xUp=a.clientX}},o),o.children)}e.default=r})(Gv);var Kv={},Zv={},Qr={},eh={},th={},nh={};(function(e){var t=function(){return(t=Object.assign||function(r){for(var o,s=1,a=arguments.length;s<a;s++)for(var l in o=arguments[s])Object.prototype.hasOwnProperty.call(o,l)&&(r[l]=o[l]);return r}).apply(this,arguments)},n=(Object.defineProperty(e,"__esModule",{value:!0}),e.mapPositionCoords=e.mapPartialCoords=void 0,function(r){return r.map(function(o){return{width:o.width,position:0}})}),i=(e.mapPartialCoords=n,function(r,o){return o===void 0&&(o=0),r.map(function(s){return s.position>o?t(t({},s),{position:o}):s})});e.mapPositionCoords=i})(nh);var ms={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isVerticalTouchmoveDetected=e.getFadeoutAnimationPosition=e.getFadeoutAnimationIndex=e.getSwipeTouchendIndex=e.getSwipeTouchendPosition=e.getSwipeTransformationCursor=e.getTransformationItemIndex=e.getSwipeShiftValue=e.getItemCoords=e.getIsLeftDirection=e.shouldRecalculateSwipePosition=e.getSwipeLimitMax=e.getSwipeLimitMin=e.shouldCancelSlideAnimation=e.shouldRecalculateSlideIndex=e.getUpdateSlidePositionIndex=e.getActiveIndex=e.getStartIndex=e.getShiftIndex=void 0;var t=function(p,x){return(p=p===void 0?0:p)+(x=x===void 0?0:x)},n=(e.getShiftIndex=t,function(p,x){if(p===void 0&&(p=0),x=x===void 0?0:x){if(x<=p)return x-1;if(0<p)return p}return 0}),i=(e.getStartIndex=n,function(k){var x=k.startIndex,x=x===void 0?0:x,b=k.itemsCount,k=k.infinite;return k!==void 0&&k?x:(0,e.getStartIndex)(x,b===void 0?0:b)}),r=(e.getActiveIndex=i,function(p,x){return p<0?x-1:x<=p?0:p}),o=(e.getUpdateSlidePositionIndex=r,function(p,x){return p<0||x<=p}),s=(e.shouldRecalculateSlideIndex=o,function(p,x){return p<0||x<=p}),a=(e.shouldCancelSlideAnimation=s,function(k,I){var b=k.itemsOffset,k=k.transformationSet,k=k===void 0?[]:k,P=I.infinite,I=I.swipeExtraPadding;return P?(k[b===void 0?0:b]||{}).position:(P=(k[0]||{}).width,Math.min(I===void 0?0:I,P===void 0?0:P))}),l=(e.getSwipeLimitMin=a,function(A,k){var b=k.infinite,k=k.swipeExtraPadding,k=k===void 0?0:k,P=A.itemsCount,I=A.itemsOffset,O=A.itemsInSlide,O=O===void 0?1:O,A=A.transformationSet,A=A===void 0?[]:A;return b?(A[(P===void 0?1:P)+(0,e.getShiftIndex)(O,I===void 0?0:I)]||{}).position||0:(0,e.getItemCoords)(-O,A).position+k}),c=(e.getSwipeLimitMax=l,function(p,x,b){return-x<=p||Math.abs(p)>=b}),u=(e.shouldRecalculateSwipePosition=c,function(p){return(p=p===void 0?0:p)<0}),h=(e.getIsLeftDirection=u,function(p,x){return(x=x===void 0?[]:x).slice(p=p===void 0?0:p)[0]||{position:0,width:0}}),f=(e.getItemCoords=h,function(p,x){return p===void 0&&(p=0),x===void 0&&(x=[]),(0,e.getItemCoords)(p,x).position}),y=(e.getSwipeShiftValue=f,function(p,x){return x===void 0&&(x=0),(p=p===void 0?[]:p).findIndex(function(b){return b.position>=Math.abs(x)})}),v=(e.getTransformationItemIndex=y,function(p,x,b){return p===void 0&&(p=[]),x===void 0&&(x=0),b===void 0&&(b=0),p=(0,e.getTransformationItemIndex)(p,x),(0,e.getIsLeftDirection)(b)?p:p-1}),m=(e.getSwipeTransformationCursor=v,function(A,D,E){E===void 0&&(E=0);var k=A.infinite,P=A.autoWidth,I=A.isStageContentPartial,O=A.swipeAllowedPositionMax,A=A.transformationSet,E=(0,e.getSwipeTransformationCursor)(A,E,D),D=(0,e.getItemCoords)(E,A).position;if(!k){if(P&&I)return 0;if(O<D)return-O}return-D}),C=(e.getSwipeTouchendPosition=m,function(p,D){var b=D.transformationSet,k=D.itemsInSlide,P=D.itemsOffset,I=D.itemsCount,O=D.infinite,A=D.isStageContentPartial,E=D.activeIndex,D=D.translate3d;return O||!A&&D!==Math.abs(p)?(A=(0,e.getTransformationItemIndex)(b,p),O?A<(D=(0,e.getShiftIndex)(k,P))?I-k-P+A:D+I<=A?A-(D+I):A-D:A):E}),w=(e.getSwipeTouchendIndex=C,function(k){var x=k.infinite,b=k.activeIndex,k=k.itemsInSlide;return x?b+k:b}),g=(e.getFadeoutAnimationIndex=w,function(p,k){var b=k.activeIndex,k=k.stageWidth;return p<b?(b-p)*-k||0:(p-b)*k||0}),d=(e.getFadeoutAnimationPosition=g,function(p,x,b){return p<(b=b===void 0?0:b)||p<.1*x});e.isVerticalTouchmoveDetected=d})(ms);(function(e){var t=function(){return(t=Object.assign||function(E){for(var D,M=1,L=arguments.length;M<L;M++)for(var B in D=arguments[M])Object.prototype.hasOwnProperty.call(D,B)&&(E[B]=D[B]);return E}).apply(this,arguments)},n=(Object.defineProperty(e,"__esModule",{value:!0}),e.getItemsInSlide=e.canUseDOM=e.getTransformMatrix=e.getTranslateXProperty=e.getTouchmoveTranslatePosition=e.getTranslate3dProperty=e.getRenderStageItemStyles=e.getRenderStageStyles=e.getTransitionProperty=e.getRenderWrapperStyles=e.animate=e.shouldHandleResizeEvent=e.getElementFirstChild=e.getElementCursor=e.getAutoheightProperty=e.getElementDimensions=e.getItemWidth=e.createDefaultTransformationSet=e.createAutowidthTransformationSet=e.isElement=e.createClones=e.getItemsOffset=e.getItemsCount=e.getSlides=void 0,nh),i=ms,r=function(M){var D=M.children,M=M.items;return D?D.length?D:[D]:M===void 0?[]:M},o=(e.getSlides=r,function(E){return(0,e.getSlides)(E).length}),s=(e.getItemsCount=o,function(L){var D=L.infinite,M=L.paddingRight,L=L.paddingLeft;return D&&(L||M)?1:0}),a=(e.getItemsOffset=s,function(E){var D,M,L,B,H=(0,e.getSlides)(E);return E.infinite?(D=(0,e.getItemsCount)(E),B=(0,e.getItemsOffset)(E),E=(0,e.getItemsInSlide)(D,E),L=Math.min(E,D)+B,M=H.slice(0,L),L=H.slice(-L),B&&E===D&&(B=H[0],E=H.slice(-1)[0],L.unshift(E),M.push(B)),L.concat(H,M)):H}),l=(e.createClones=a,function(E){try{return E instanceof Element||E instanceof HTMLDocument}catch{return!1}}),c=(e.isElement=l,function(E,D,M){D===void 0&&(D=0),M===void 0&&(M=!1);var L=0,B=!0,H=[];return(0,e.isElement)(E)&&(H=Array.from((E==null?void 0:E.children)||[]).reduce(function(T,ae,Z){var Q=0,Z=Z-1,et=T[Z],ae=f(ae==null?void 0:ae.firstChild).width,ae=ae===void 0?0:ae;return B=(L+=ae)<=D,et&&(Q=Z==0?et.width:et.width+et.position),T.push({position:Q,width:ae}),T},[]),M||(H=B?(0,n.mapPartialCoords)(H):(E=L-D,(0,n.mapPositionCoords)(H,E)))),{coords:H,content:L,partial:B}}),u=(e.createAutowidthTransformationSet=c,function(E,D,M,L){L===void 0&&(L=!1);var B=0,H=!0,T=[],N=(0,e.getItemWidth)(D,M);return T=E.reduce(function(U,Q,ae){var et=0,ae=U[ae-1];return H=(B+=N)<=D,ae&&(et=N+ae.position||0),U.push({width:N,position:et}),U},[]),{coords:T=L?T:H?(0,n.mapPartialCoords)(T):(M=B-D,(0,n.mapPositionCoords)(T,M)),content:B,partial:H}}),h=(e.createDefaultTransformationSet=u,function(E,D){return 0<D?E/D:E});function f(E){return E&&E.getBoundingClientRect?{width:(E=E.getBoundingClientRect()).width,height:E.height}:{width:0,height:0}}e.getItemWidth=h,e.getElementDimensions=f;var y=function(E,L,B){var L=(0,e.getElementCursor)(L,B),B=(0,e.getElementFirstChild)(E,L);if((0,e.isElement)(B))return E=window.getComputedStyle(B),L=parseFloat(E.marginTop),E=parseFloat(E.marginBottom),Math.ceil(B.offsetHeight+L+E)},v=(e.getAutoheightProperty=y,function(E,L){var M=L.activeIndex,L=L.itemsInSlide;return E.infinite?M+L+(0,e.getItemsOffset)(E):M}),m=(e.getElementCursor=v,function(E,D){return E=E&&E.children||[],E[D]&&E[D].firstChild||null});function C(E,D,M){return(D=D===void 0?{}:D).width!==(M=M===void 0?{}:M).width}function w(E,B){var B=B||{},M=B.position,M=M===void 0?0:M,L=B.animationDuration,L=L===void 0?0:L,B=B.animationEasingFunction,B=B===void 0?"ease":B;return E&&(0,e.isElement)(E)&&(E.style.transition="transform ".concat(L,"ms ").concat(B," 0ms"),E.style.transform="translate3d(".concat(M,"px, 0, 0)")),E}e.getElementFirstChild=m,e.shouldHandleResizeEvent=C,e.animate=w;var g=function(E,D,M){var H=E||{},L=H.paddingLeft,B=H.paddingRight,T=H.autoHeight,H=H.animationDuration,T=T?(0,e.getAutoheightProperty)(M,E,D):void 0;return{height:T,transition:T?"height ".concat(H,"ms"):void 0,paddingLeft:"".concat(L,"px"),paddingRight:"".concat(B,"px")}},d=(e.getRenderWrapperStyles=g,function(M){var M=M||{},D=M.animationDuration,M=M.animationEasingFunction,M=M===void 0?"ease":M;return"transform ".concat(D===void 0?0:D,"ms ").concat(M," 0ms")}),p=(e.getTransitionProperty=d,function(E,D){return E=(E||{}).translate3d,E="translate3d(".concat(-(E===void 0?0:E),"px, 0, 0)"),t(t({},D),{transform:E})}),x=(e.getRenderStageStyles=p,function(E,H){var T=H.transformationSet,M=H.fadeoutAnimationIndex,L=H.fadeoutAnimationPosition,B=H.fadeoutAnimationProcessing,H=H.animationDuration,T=(T[E]||{}).width;return B&&M===E?{transform:"translateX(".concat(L,"px)"),animationDuration:"".concat(H,"ms"),width:"".concat(T,"px")}:{width:T}}),b=(e.getRenderStageItemStyles=x,function(E,T){var M=E,L=T.infinite,B=T.itemsOffset,H=T.itemsInSlide,T=T.transformationSet;return((T===void 0?[]:T)[M=L?E+(0,i.getShiftIndex)(H===void 0?0:H,B===void 0?0:B):M]||{}).position||0}),k=(e.getTranslate3dProperty=b,function(E,D){return-(D-Math.floor(E))});function P(E){return E=I(E),E=E&&E[4]||"",Number(E)}function I(E){return E&&(0,e.isElement)(E)&&window.getComputedStyle(E).transform.match(/(-?[0-9.]+)/g)||[]}e.getTouchmoveTranslatePosition=k,e.getTranslateXProperty=P,e.getTransformMatrix=I;var O=function(){var E;try{return!!((E=window==null?void 0:window.document)!=null&&E.createElement)}catch{return!1}},A=(e.canUseDOM=O,function(E,N){var M,L=1,B=N.responsive,H=N.autoWidth,T=N.infinite,N=N.innerWidth;return H!==void 0&&H?T!==void 0&&T?E:L:(B&&(H=Object.keys(B)).length&&(N||(0,e.canUseDOM)())&&(M=N===void 0?window.innerWidth:N,H.forEach(function(U){var Q;Number(U)<=M&&(Q=(U=B[U]).items,U=U.itemsFit,L=(U===void 0?"fill":U)==="contain"?Q:Math.min(Q,E))})),L||1)});e.getItemsInSlide=A})(th);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.calculateInitialState=e.getIsStageContentPartial=e.concatClassnames=void 0;var t=th,n=ms,i=function(){for(var s=[],a=0;a<arguments.length;a++)s[a]=arguments[a];return s.filter(Boolean).join(" ")},r=(e.concatClassnames=i,function(s,a,l){return a===void 0&&(a=0),l===void 0&&(l=0),!(s=s!==void 0&&s)&&l<=a}),o=(e.getIsStageContentPartial=r,function(P,a,l){l===void 0&&(l=(0,t.canUseDOM)());var c,u,h=P.animationDuration,h=h===void 0?0:h,f=P.infinite,f=f!==void 0&&f,y=P.autoPlay,y=y!==void 0&&y,v=P.autoWidth,v=v!==void 0&&v,m=(0,t.createClones)(P),C=(0,t.getTransitionProperty)(),w=(0,t.getItemsCount)(P),g=(0,t.getItemsOffset)(P),d=(0,t.getItemsInSlide)(w,P),p=(0,n.getStartIndex)(P.activeIndex,w),p=(0,n.getActiveIndex)({startIndex:p,itemsCount:w,infinite:f}),x=(0,t.getElementDimensions)(a).width,b=(u=(a=(v?(c=(a=(0,t.createAutowidthTransformationSet)(a,x,f)).coords,u=a.content,a):(c=(a=(0,t.createDefaultTransformationSet)(m,x,d,f)).coords,u=a.content,a)).partial,u),(0,n.getItemCoords)(-d,c=c).position),k=(0,n.getSwipeLimitMin)({itemsOffset:g,transformationSet:c},P),P=(0,n.getSwipeLimitMax)({itemsCount:w,itemsOffset:g,itemsInSlide:d,transformationSet:c},P),I=(0,n.getSwipeShiftValue)(w,c);return{activeIndex:p,autoWidth:v,animationDuration:h,clones:m,infinite:f,itemsCount:w,itemsInSlide:d,itemsOffset:g,translate3d:(0,t.getTranslate3dProperty)(p,{itemsInSlide:d,itemsOffset:g,transformationSet:c,autoWidth:v,infinite:f}),stageWidth:x,stageContentWidth:u,initialStageHeight:0,isStageContentPartial:a,isAutoPlaying:y,isAutoPlayCanceledOnAction:!1,transformationSet:c,transition:C,fadeoutAnimationIndex:null,fadeoutAnimationPosition:null,fadeoutAnimationProcessing:!1,swipeLimitMin:k,swipeLimitMax:P,swipeAllowedPositionMax:b,swipeShiftValue:I,canUseDom:l}});e.calculateInitialState=o})(eh);var Jv={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isClonedItem=e.isTargetItem=e.isActiveItem=e.getRenderStageItemClasses=void 0;var t=yn,n=eh,i=ms,r=function(v,y){v===void 0&&(v=0);var u=y.fadeoutAnimationIndex,h=(0,e.isActiveItem)(v,y)?t.Modifiers.ACTIVE:"",f=(0,e.isClonedItem)(v,y)?t.Modifiers.CLONED:"",y=(0,e.isTargetItem)(v,y)?t.Modifiers.TARGET:"",v=v===u?t.Classnames.ANIMATED:"";return(0,n.concatClassnames)(t.Classnames.STAGE_ITEM,h,f,y,v)},o=(e.getRenderStageItemClasses=r,function(l,v){l===void 0&&(l=0);var u=v.activeIndex,h=v.itemsInSlide,f=v.itemsOffset,y=v.infinite,v=v.autoWidth,m=(0,i.getShiftIndex)(h,f);return v&&y?l-m===u+f:(v=u+m,y?v<=l&&l<v+h:u<=l&&l<v)}),s=(e.isActiveItem=o,function(l,y){l===void 0&&(l=0);var u=y.activeIndex,v=y.itemsInSlide,h=y.itemsOffset,f=y.infinite,y=y.autoWidth,v=(0,i.getShiftIndex)(v,h);return f?y&&f?l-v===u+h:l===u+v:l===u}),a=(e.isTargetItem=s,function(l,v){l===void 0&&(l=0);var u=v.itemsInSlide,h=v.itemsOffset,f=v.itemsCount,y=v.infinite,v=v.autoWidth;return!!y&&(v&&y?l<u||f-1+u<l:l<(v=(0,i.getShiftIndex)(u,h))||f-1+v<l)});e.isClonedItem=a})(Jv);var e1={};(function(e){function t(n,i){i===void 0&&(i=0);function r(){o&&(clearTimeout(o),o=void 0)}var o=void 0;return[function(){for(var s=this,a=[],l=0;l<arguments.length;l++)a[l]=arguments[l];r(),o=window.setTimeout(function(){n.apply(s,a),o=void 0},i)},r]}Object.defineProperty(e,"__esModule",{value:!0}),e.debounce=void 0,e.debounce=t})(e1);var t1={};(function(e){function t(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i]}Object.defineProperty(e,"__esModule",{value:!0}),e.debug=void 0,e.debug=t})(t1);var n1={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.getSlideItemInfo=e.getSlideInfo=e.getSlideIndexForMultipleItems=e.getSlideIndexForNonMultipleItems=e.getActiveSlideDotsLength=e.getActiveSlideIndex=void 0;var t=function(a,u){var u=u||{},h=u.activeIndex,c=u.itemsInSlide,u=u.itemsCount,h=h+c;return c===1?(0,e.getSlideIndexForNonMultipleItems)(h,c,u):(0,e.getSlideIndexForMultipleItems)(h,c,u,a)},n=(e.getActiveSlideIndex=t,function(a,l){var c;return l===void 0&&(l=1),(a=a===void 0?0:a)&&l?(c=Math.floor(a/l),a%l==0?c-1:c):0}),i=(e.getActiveSlideDotsLength=n,function(a,l,c){return a<l?c-l:c<a?0:a-1}),r=(e.getSlideIndexForNonMultipleItems=i,function(a,l,c,u){var h=(0,e.getActiveSlideDotsLength)(c,l);return a===c+l?0:u||a<l&&a!==0?h:a===0?c%l==0?h:h-1:0<l?Math.floor(a/l)-1:0}),o=(e.getSlideIndexForMultipleItems=r,function(a,l){return l===void 0&&(l=0),a=(a=a===void 0?0:a)+1,a<1?a=l:l<a&&(a=1),{item:a,itemsCount:l}}),s=(e.getSlideInfo=o,function(l){var l=l||{},c=l.itemsInSlide,u=l.activeIndex,h=l.infinite,f=l.itemsCount;return l.isStageContentPartial?{isPrevSlideDisabled:!0,isNextSlideDisabled:!0}:{isPrevSlideDisabled:h===!1&&u===0,isNextSlideDisabled:h===!1&&f-c<=u}});e.getSlideItemInfo=s})(n1);var i1={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.shouldCancelAutoPlayOnHover=e.shouldCancelAutoPlayOnAction=e.getItemIndexForDotNavigation=e.checkIsTheLastDotIndex=e.getDotsNavigationLength=e.hasDotForEachSlide=e.isStrategy=e.shouldDisableButtons=e.shouldDisableDots=e.shouldDisableControls=void 0;var t=yn;function n(v,w){var v=(v||{}).controlsStrategy,w=w||{},m=w.itemsInSlide,C=w.itemsCount,w=w.autoWidth;if((0,e.isStrategy)(v,t.ControlsStrategy.RESPONSIVE))return!w&&m===C}function i(f,y){return f.disableDotsControls||n(f,y)}function r(f,y){return f.disableButtonsControls||!f.infinite&&n(f,y)}e.shouldDisableControls=n,e.shouldDisableDots=i,e.shouldDisableButtons=r;var o=function(f,y){return f===void 0&&(f=""),y===void 0&&(y=""),!!(f&&f.includes(y))},s=(e.isStrategy=o,function(f,y){return f||(0,e.isStrategy)(y,t.ControlsStrategy.ALTERNATE)}),a=(e.hasDotForEachSlide=s,function(f,y,v){return f===void 0&&(f=0),y===void 0&&(y=1),(v=v!==void 0&&v)?f:Number(y)!==0&&Math.ceil(f/y)||0}),l=(e.getDotsNavigationLength=a,function(f,y,v){return!y&&f===v-1}),c=(e.checkIsTheLastDotIndex=l,function(f,y,v,m){return(y?v-m:f*m)||0}),u=(e.getItemIndexForDotNavigation=c,function(f){return(f=f===void 0?"":f)===t.AutoPlayStrategy.ACTION||f===t.AutoPlayStrategy.ALL}),h=(e.shouldCancelAutoPlayOnAction=u,function(f){return(f=f===void 0?"":f)===t.AutoPlayStrategy.DEFAULT||f===t.AutoPlayStrategy.ALL});e.shouldCancelAutoPlayOnHover=h})(i1);(function(e){var t=Object.create?function(i,r,o,s){s===void 0&&(s=o);var a=Object.getOwnPropertyDescriptor(r,o);a&&("get"in a?r.__esModule:!a.writable&&!a.configurable)||(a={enumerable:!0,get:function(){return r[o]}}),Object.defineProperty(i,s,a)}:function(i,r,o,s){i[s=s===void 0?o:s]=r[o]},n=function(i,r){for(var o in i)o==="default"||Object.prototype.hasOwnProperty.call(r,o)||t(r,i,o)};Object.defineProperty(e,"__esModule",{value:!0}),n(eh,e),n(th,e),n(Jv,e),n(e1,e),n(ms,e),n(t1,e),n(n1,e),n(i1,e),n(nh,e)})(Qr);(function(e){var t=function(s){return s&&s.__esModule?s:{default:s}},n=(Object.defineProperty(e,"__esModule",{value:!0}),e.SlideInfo=void 0,t(j)),i=yn,r=Qr,o=function(l){var c=l.activeIndex,a=l.itemsCount,l=l.renderSlideInfo,c=(0,r.getSlideInfo)(c,a).item;return typeof l=="function"?n.default.createElement("div",{className:i.Classnames.SLIDE_INFO},l({item:c,itemsCount:a})):(l=(0,r.concatClassnames)(i.Classnames.SLIDE_INFO_ITEM,i.Modifiers.SEPARATOR),n.default.createElement("div",{className:i.Classnames.SLIDE_INFO},n.default.createElement("span",{className:i.Classnames.SLIDE_INFO_ITEM},c),n.default.createElement("span",{className:l},"/"),n.default.createElement("span",{className:i.Classnames.SLIDE_INFO_ITEM},a)))};e.SlideInfo=o})(Zv);var r1={};(function(e){var t=function(r){return r&&r.__esModule?r:{default:r}},n=(Object.defineProperty(e,"__esModule",{value:!0}),e.StageItem=void 0,t(j)),i=function(a){var o=a.item,s=a.className,a=a.styles;return n.default.createElement("li",{style:a,className:s},o)};e.StageItem=i})(r1);var o1={};(function(e){var t=function(s){return s&&s.__esModule?s:{default:s}},n=(Object.defineProperty(e,"__esModule",{value:!0}),e.DotsNavigation=void 0,t(j)),i=yn,r=Qr,o=function(C){var a=C.state,l=C.onClick,c=C.onMouseEnter,u=C.onMouseLeave,h=C.controlsStrategy,f=C.renderDotsItem,y=a.itemsCount,v=a.itemsInSlide,m=a.infinite,C=a.autoWidth,w=a.activeIndex,g=(0,r.getSlideItemInfo)(a).isNextSlideDisabled,d=(0,r.hasDotForEachSlide)(C,h),p=(0,r.getDotsNavigationLength)(y,v,d);return n.default.createElement("ul",{className:i.Classnames.DOTS},Array.from({length:y}).map(function(x,b){var k,P,I;if(b<p)return P=(0,r.checkIsTheLastDotIndex)(b,!!m,p),k=(0,r.getItemIndexForDotNavigation)(b,P,y,v),P=(0,r.getActiveSlideIndex)(g,a),d&&((P=w)<0?P=y-1:y<=w&&(P=0),k=b),P=P===b?i.Modifiers.ACTIVE:"",I=f?i.Modifiers.CUSTOM:"",I=(0,r.concatClassnames)(i.Classnames.DOTS_ITEM,P,I),n.default.createElement("li",{key:"dot-item-".concat(b),onMouseEnter:c,onMouseLeave:u,onClick:function(){return l(k)},className:I},f&&f({isActive:!!P,activeIndex:b}))}))};e.DotsNavigation=o})(o1);var s1={};(function(e){var t=function(s){return s&&s.__esModule?s:{default:s}},n=(Object.defineProperty(e,"__esModule",{value:!0}),e.PlayPauseButton=void 0,t(j)),i=yn,r=Qr,o=function(c){var a=c.isPlaying,l=c.onClick,c=c.renderPlayPauseButton;return typeof c=="function"?n.default.createElement("div",{className:i.Classnames.PLAY_BTN,onClick:l},c({isPlaying:a})):(c=a?i.Modifiers.PAUSE:"",a=(0,r.concatClassnames)(i.Classnames.PLAY_BTN_ITEM,c),n.default.createElement("div",{className:i.Classnames.PLAY_BTN},n.default.createElement("div",{className:i.Classnames.PLAY_BTN_WRAPPER},n.default.createElement("div",{onClick:l,className:a}))))};e.PlayPauseButton=o})(s1);var a1={};(function(e){var t=function(s){return s&&s.__esModule?s:{default:s}},n=(Object.defineProperty(e,"__esModule",{value:!0}),e.PrevNextButton=void 0,t(j)),i=yn,r=Qr,o=function(f){var a,l=f.name,c=f.isDisabled,u=f.onClick,h=f.renderPrevButton,f=f.renderNextButton;return typeof h=="function"?n.default.createElement("div",{className:i.Classnames.BUTTON_PREV,onClick:u},h({isDisabled:c})):typeof f=="function"?n.default.createElement("div",{className:i.Classnames.BUTTON_NEXT,onClick:u},f({isDisabled:c})):(f=(h=l==="prev")?"<":">",l=h?i.Classnames.BUTTON_PREV:i.Classnames.BUTTON_NEXT,a=h?i.Classnames.BUTTON_PREV_WRAPPER:i.Classnames.BUTTON_NEXT_WRAPPER,h=h?i.Classnames.BUTTON_PREV_ITEM:i.Classnames.BUTTON_NEXT_ITEM,c=c?i.Modifiers.INACTIVE:"",h=(0,r.concatClassnames)(h,c),n.default.createElement("div",{className:l},n.default.createElement("div",{className:a},n.default.createElement("p",{className:h,onClick:function(y){return u(y)}},n.default.createElement("span",{"data-area":f})))))};e.PrevNextButton=o})(a1);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.PrevNextButton=e.PlayPauseButton=e.DotsNavigation=e.StageItem=e.SlideInfo=void 0;var t=Zv,n=(Object.defineProperty(e,"SlideInfo",{enumerable:!0,get:function(){return t.SlideInfo}}),r1),i=(Object.defineProperty(e,"StageItem",{enumerable:!0,get:function(){return n.StageItem}}),o1),r=(Object.defineProperty(e,"DotsNavigation",{enumerable:!0,get:function(){return i.DotsNavigation}}),s1),o=(Object.defineProperty(e,"PlayPauseButton",{enumerable:!0,get:function(){return r.PlayPauseButton}}),a1);Object.defineProperty(e,"PrevNextButton",{enumerable:!0,get:function(){return o.PrevNextButton}})})(Kv);(function(e){var t=function(){var g=function(d,p){return(g=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(x,b){x.__proto__=b}:function(x,b){for(var k in b)Object.prototype.hasOwnProperty.call(b,k)&&(x[k]=b[k])}))(d,p)};return function(d,p){if(typeof p!="function"&&p!==null)throw new TypeError("Class extends value "+String(p)+" is not a constructor or null");function x(){this.constructor=d}g(d,p),d.prototype=p===null?Object.create(p):(x.prototype=p.prototype,new x)}}(),n=function(){return(n=Object.assign||function(g){for(var d,p=1,x=arguments.length;p<x;p++)for(var b in d=arguments[p])Object.prototype.hasOwnProperty.call(d,b)&&(g[b]=d[b]);return g}).apply(this,arguments)},i=Object.create?function(g,d,p,x){x===void 0&&(x=p);var b=Object.getOwnPropertyDescriptor(d,p);b&&("get"in b?d.__esModule:!b.writable&&!b.configurable)||(b={enumerable:!0,get:function(){return d[p]}}),Object.defineProperty(g,x,b)}:function(g,d,p,x){g[x=x===void 0?p:x]=d[p]},r=Object.create?function(g,d){Object.defineProperty(g,"default",{enumerable:!0,value:d})}:function(g,d){g.default=d},o=function(g){if(g&&g.__esModule)return g;var d={};if(g!=null)for(var p in g)p!=="default"&&Object.prototype.hasOwnProperty.call(g,p)&&i(d,g,p);return r(d,g),d},s=function(g,d){for(var p in g)p==="default"||Object.prototype.hasOwnProperty.call(d,p)||i(d,g,p)},a=function(g,d,p,x){return new(p=p||Promise)(function(b,k){function P(A){try{O(x.next(A))}catch(E){k(E)}}function I(A){try{O(x.throw(A))}catch(E){k(E)}}function O(A){var E;A.done?b(A.value):((E=A.value)instanceof p?E:new p(function(D){D(E)})).then(P,I)}O((x=x.apply(g,[])).next())})},l=function(g,d){var p,x,b,k={label:0,sent:function(){if(1&b[0])throw b[1];return b[1]},trys:[],ops:[]},P={next:I(0),throw:I(1),return:I(2)};return typeof Symbol=="function"&&(P[Symbol.iterator]=function(){return this}),P;function I(O){return function(A){var E=[O,A];if(p)throw new TypeError("Generator is already executing.");for(;k;)try{if(p=1,x&&(b=2&E[0]?x.return:E[0]?x.throw||((b=x.return)&&b.call(x),0):x.next)&&!(b=b.call(x,E[1])).done)return b;switch(x=0,(E=b?[2&E[0],b.value]:E)[0]){case 0:case 1:b=E;break;case 4:return k.label++,{value:E[1],done:!1};case 5:k.label++,x=E[1],E=[0];continue;case 7:E=k.ops.pop(),k.trys.pop();continue;default:if(!(b=0<(b=k.trys).length&&b[b.length-1])&&(E[0]===6||E[0]===2)){k=0;continue}if(E[0]===3&&(!b||E[1]>b[0]&&E[1]<b[3]))k.label=E[1];else if(E[0]===6&&k.label<b[1])k.label=b[1],b=E;else{if(!(b&&k.label<b[2])){b[2]&&k.ops.pop(),k.trys.pop();continue}k.label=b[2],k.ops.push(E)}}E=d.call(g,k)}catch(D){E=[6,D],x=0}finally{p=b=0}if(5&E[0])throw E[1];return{value:E[0]?E[1]:void 0,done:!0}}}},c=function(g){return g&&g.__esModule?g:{default:g}},u=(Object.defineProperty(e,"__esModule",{value:!0}),e.Link=void 0,c(j)),h=c(Xv),f=Qv,y=c(Gv),v=(e.Link=y.default,o(Kv)),m=o(Qr),C=yn,w=(s(yn,e),function(g){function d(p){var x=g.call(this,p)||this;return x.swipeListener=null,x._handleKeyboardEvents=function(b){switch(b.code){case"Space":return x.props.autoPlay&&x._handlePlayPauseToggle();case"ArrowLeft":return x.slidePrev(b);case"ArrowRight":return x.slideNext(b)}},x._handleBeforeSlideEnd=function(b){return a(x,void 0,void 0,function(){var k,P,I;return l(this,function(O){switch(O.label){case 0:return P=this.state,I=P.activeIndex,k=P.itemsCount,P=P.fadeoutAnimationProcessing,m.shouldRecalculateSlideIndex(I,k)?(I=m.getUpdateSlidePositionIndex(I,k),[4,this._handleUpdateSlidePosition(I)]):[3,2];case 1:return O.sent(),[3,4];case 2:return P?[4,this.setState({fadeoutAnimationIndex:null,fadeoutAnimationPosition:null,fadeoutAnimationProcessing:!1})]:[3,4];case 3:O.sent(),O.label=4;case 4:return this._handleSlideChanged(b),[2]}})})},x._handleMouseEnter=function(){var b=x.props.autoPlayStrategy;m.shouldCancelAutoPlayOnHover(b)&&x.state.isAutoPlaying&&(x.isHovered=!0,x._handlePause())},x._handleMouseLeave=function(){x.state.isAutoPlaying&&(x.isHovered=!1,x._handlePlay())},x._handlePause=function(){x._clearAutoPlayTimeout()},x._handlePlayPauseToggle=function(){return a(x,void 0,void 0,function(){var b;return l(this,function(k){switch(k.label){case 0:return b=this.state.isAutoPlaying,this.hasUserAction=!0,[4,this.setState({isAutoPlaying:!b,isAutoPlayCanceledOnAction:!0})];case 1:return k.sent(),b?this._handlePause():this._handlePlay(),[2]}})})},x._setRootComponentRef=function(b){return x.rootElement=b},x._setStageComponentRef=function(b){return x.stageComponent=b},x._renderStageItem=function(b,k){var P=m.getRenderStageItemStyles(k,x.state),I=m.getRenderStageItemClasses(k,x.state);return u.default.createElement(v.StageItem,{styles:P,className:I,key:"stage-item-".concat(k),item:b})},x._renderSlideInfo=function(){var b=x.props.renderSlideInfo,P=x.state,k=P.activeIndex,P=P.itemsCount;return u.default.createElement(v.SlideInfo,{itemsCount:P,activeIndex:k,renderSlideInfo:b})},x.state=m.calculateInitialState(p,null),x.isHovered=!1,x.isAnimationDisabled=!1,x.isTouchMoveProcessStarted=!1,x.cancelTouchAnimations=!1,x.hasUserAction=!1,x.rootElement=null,x.rootComponentDimensions={},x.stageComponent=null,x.startTouchmovePosition=void 0,x.slideTo=x.slideTo.bind(x),x.slidePrev=x.slidePrev.bind(x),x.slideNext=x.slideNext.bind(x),x._handleTouchmove=x._handleTouchmove.bind(x),x._handleTouchend=x._handleTouchend.bind(x),x._handleDotClick=x._handleDotClick.bind(x),x._handleResize=x._handleResize.bind(x),p=m.debounce(x._handleResize,100),x._handleResizeDebounced=p[0],x._cancelResizeDebounced=p[1],x}return t(d,g),d.prototype.componentDidMount=function(){return a(this,void 0,void 0,function(){return l(this,function(p){switch(p.label){case 0:return[4,this._setInitialState()];case 1:return p.sent(),this._addEventListeners(),this._setupSwipeHandlers(),this.props.autoPlay&&this._handlePlay(),[2]}})})},d.prototype.componentDidUpdate=function(p){var T=this.props,x=T.activeIndex,b=T.animationDuration,k=T.autoWidth,P=T.children,I=T.infinite,O=T.items,A=T.paddingLeft,E=T.paddingRight,D=T.responsive,M=T.swipeExtraPadding,L=T.mouseTracking,B=T.swipeDelta,H=T.touchTracking,T=T.touchMoveDefaultEvents;P&&p.children!==P||p.autoWidth!==k||p.infinite!==I||p.items!==O||p.paddingLeft!==A||p.paddingRight!==E||p.responsive!==D||p.swipeExtraPadding!==M?this._updateComponent():(p.animationDuration!==b&&this.setState({animationDuration:b}),p.activeIndex!==x&&this.slideTo(x,C.EventType.UPDATE)),p.swipeDelta===B&&p.mouseTracking===L&&p.touchTracking===H&&p.touchMoveDefaultEvents===T||this._updateSwipeProps(),this.props.keyboardNavigation!==p.keyboardNavigation&&this._updateEventListeners()},d.prototype.componentWillUnmount=function(){this._cancelResizeDebounced(),this._cancelTimeoutAnimations(),this._removeEventListeners()},Object.defineProperty(d.prototype,"eventObject",{get:function(){var x=this.state,p=x.itemsInSlide,x=x.activeIndex,k=m.getSlideItemInfo(this.state),b=k.isNextSlideDisabled,k=k.isPrevSlideDisabled;return{item:x,slide:m.getActiveSlideIndex(b,this.state),itemsInSlide:p,isNextSlideDisabled:b,isPrevSlideDisabled:k,type:C.EventType.ACTION}},enumerable:!1,configurable:!0}),Object.defineProperty(d.prototype,"isFadeoutAnimationAllowed",{get:function(){var p=this.state.itemsInSlide,P=this.props,x=P.animationType,b=P.paddingLeft,k=P.paddingRight,P=P.autoWidth;return p===1&&x===C.AnimationType.FADEOUT&&!(b||k||P)},enumerable:!1,configurable:!0}),Object.defineProperty(d.prototype,"touchmovePosition",{get:function(){return this.startTouchmovePosition!==void 0?this.startTouchmovePosition:this.state.translate3d},enumerable:!1,configurable:!0}),d.prototype.slideTo=function(p,x){var b,k,P;p===void 0&&(p=0),this._handlePause(),this.isFadeoutAnimationAllowed?(b=m.getUpdateSlidePositionIndex(p,this.state.itemsCount),k=m.getFadeoutAnimationPosition(b,this.state),P=m.getFadeoutAnimationIndex(this.state),this._handleSlideTo({activeIndex:b,fadeoutAnimationIndex:P,fadeoutAnimationPosition:k,eventType:x})):this._handleSlideTo({activeIndex:p,eventType:x})},d.prototype.slidePrev=function(k){this._handlePause(),k&&k.isTrusted&&(this.hasUserAction=!0);var x,b,k=this.state.activeIndex-1;this.isFadeoutAnimationAllowed?(x=-this.state.stageWidth,b=m.getFadeoutAnimationIndex(this.state),this._handleSlideTo({activeIndex:k,fadeoutAnimationIndex:b,fadeoutAnimationPosition:x})):this._handleSlideTo({activeIndex:k})},d.prototype.slideNext=function(k){this._handlePause(),k&&k.isTrusted&&(this.hasUserAction=!0);var x,b,k=this.state.activeIndex+1;this.isFadeoutAnimationAllowed?(x=this.state.stageWidth,b=m.getFadeoutAnimationIndex(this.state),this._handleSlideTo({activeIndex:k,fadeoutAnimationIndex:b,fadeoutAnimationPosition:x})):this._handleSlideTo({activeIndex:k})},d.prototype._addEventListeners=function(){window.addEventListener("resize",this._handleResizeDebounced),this.props.keyboardNavigation&&window.addEventListener("keyup",this._handleKeyboardEvents)},d.prototype._removeEventListeners=function(){this.swipeListener&&this.swipeListener.destroy(),window.removeEventListener("resize",this._handleResizeDebounced),window.removeEventListener("keyup",this._handleKeyboardEvents)},d.prototype._updateEventListeners=function(){this.props.keyboardNavigation?window.addEventListener("keyup",this._handleKeyboardEvents):window.removeEventListener("keyup",this._handleKeyboardEvents)},d.prototype._handleResize=function(p){return a(this,void 0,void 0,function(){var x,b,k,P;return l(this,function(I){switch(I.label){case 0:return k=this.props.onResizeEvent,b=m.getElementDimensions(this.rootElement),(k||m.shouldHandleResizeEvent)(p,this.rootComponentDimensions,b)?(this._cancelTimeoutAnimations(),this.rootComponentDimensions=b,k=this.state,b=k.itemsCount,x=k.isAutoPlaying,k=m.getUpdateSlidePositionIndex(this.state.activeIndex,b),b=m.calculateInitialState(n(n({},this.props),{activeIndex:k}),this.stageComponent),k=m.getTranslate3dProperty(b.activeIndex,b),P=n(n({},b),{translate3d:k,isAutoPlaying:x}),m.animate(this.stageComponent,{position:-k}),[4,this.setState(P)]):[3,2];case 1:I.sent(),this._handleResized({itemsInSlide:P.itemsInSlide}),this.isAnimationDisabled=!1,x&&this._handlePlay(),I.label=2;case 2:return[2]}})})},d.prototype._handleTouchmove=function(p,I){var b=I.absY,k=I.absX,P=I.deltaX,I=this.props.swipeDelta,M=this.state,O=M.swipeShiftValue,A=M.swipeLimitMin,E=M.swipeLimitMax,D=M.infinite,M=M.fadeoutAnimationProcessing;if(this.hasUserAction=!0,!(M||!this.isTouchMoveProcessStarted&&m.isVerticalTouchmoveDetected(k,b,I))){this.isTouchMoveProcessStarted||(this._cancelTimeoutAnimations(),this._setTouchmovePosition(),this.isAnimationDisabled=!0,this.isTouchMoveProcessStarted=!0,this._handleSlideChange());var L=m.getTouchmoveTranslatePosition(P,this.touchmovePosition);if(D===!1)return A<L||L<-E?void 0:void m.animate(this.stageComponent,{position:L});if(m.shouldRecalculateSwipePosition(L,A,E))try{(function B(){m.getIsLeftDirection(P)?L+=O:L+=-O,m.shouldRecalculateSwipePosition(L,A,E)&&B()})()}catch(B){m.debug(B)}m.animate(this.stageComponent,{position:L})}},d.prototype._handleTouchend=function(p,I){var b,k,P,I=I.deltaX;this._clearTouchmovePosition(),this.isTouchMoveProcessStarted&&(this.isTouchMoveProcessStarted=!1,b=this.state.animationDuration,k=this.props.animationEasingFunction,P=m.getTranslateXProperty(this.stageComponent),I=m.getSwipeTouchendPosition(this.state,I,P),m.animate(this.stageComponent,{position:I,animationDuration:b,animationEasingFunction:k}),this._handleBeforeTouchEnd(I))},d.prototype._handleBeforeTouchEnd=function(p){var x=this,b=this.state.animationDuration;this.touchEndTimeoutId=window.setTimeout(function(){return a(x,void 0,void 0,function(){var k,P,I,O=this;return l(this,function(A){switch(A.label){case 0:return k=m.getSwipeTouchendIndex(p,this.state),P=m.getTranslate3dProperty(k,this.state),m.animate(this.stageComponent,{position:-P}),I=m.getTransitionProperty(),[4,this.setState({activeIndex:k,translate3d:P,transition:I})];case 1:return A.sent(),requestAnimationFrame(function(){return O._handleSlideChanged()}),[2]}})})},b)},d.prototype._handleSlideTo=function(p){var k=p.activeIndex,x=k===void 0?0:k,k=p.fadeoutAnimationIndex,b=k===void 0?null:k,k=p.fadeoutAnimationPosition,P=k===void 0?null:k,I=p.eventType;return a(this,void 0,void 0,function(){var O,A,E,D,M=this;return l(this,function(L){switch(L.label){case 0:return A=this.props,E=A.infinite,A=A.animationEasingFunction,O=this.state,D=O.itemsCount,O=O.animationDuration,this.isAnimationDisabled||this.state.activeIndex===x||!E&&m.shouldCancelSlideAnimation(x,D)?[2]:(this.isAnimationDisabled=!0,this._cancelTimeoutAnimations(),this._handleSlideChange(I),E=!1,D=m.getTranslate3dProperty(x,this.state),A=b!==null&&P!==null?(E=!0,m.getTransitionProperty()):m.getTransitionProperty({animationDuration:O,animationEasingFunction:A}),[4,this.setState({activeIndex:x,transition:A,translate3d:D,animationDuration:O,fadeoutAnimationIndex:b,fadeoutAnimationPosition:P,fadeoutAnimationProcessing:E})]);case 1:return L.sent(),this.slideEndTimeoutId=window.setTimeout(function(){return M._handleBeforeSlideEnd(I)},O),[2]}})})},d.prototype._handleUpdateSlidePosition=function(p){return a(this,void 0,void 0,function(){var x,b,k;return l(this,function(P){switch(P.label){case 0:return x=this.state.animationDuration,b=m.getTranslate3dProperty(p,this.state),k=m.getTransitionProperty({animationDuration:0}),[4,this.setState({activeIndex:p,translate3d:b,transition:k,animationDuration:x,fadeoutAnimationIndex:null,fadeoutAnimationPosition:null,fadeoutAnimationProcessing:!1})];case 1:return P.sent(),[2]}})})},d.prototype._handleUpdated=function(){this.props.onUpdated&&this.props.onUpdated(n(n({},this.eventObject),{type:C.EventType.UPDATE}))},d.prototype._handleResized=function(p){p===void 0&&(p={}),this.props.onResized&&this.props.onResized(n(n(n({},this.eventObject),p),{type:C.EventType.RESIZE}))},d.prototype._handleSlideChange=function(p){this.props.onSlideChange&&(p=p?n(n({},this.eventObject),{type:p}):this.eventObject,this.props.onSlideChange(p))},d.prototype._handleSlideChanged=function(p){return a(this,void 0,void 0,function(){var x,b,k,P;return l(this,function(I){switch(I.label){case 0:return b=this.state,x=b.isAutoPlaying,b=b.isAutoPlayCanceledOnAction,k=this.props,P=k.autoPlayStrategy,k=k.onSlideChanged,m.shouldCancelAutoPlayOnAction(P)&&this.hasUserAction&&!b?[4,this.setState({isAutoPlayCanceledOnAction:!0,isAutoPlaying:!1})]:[3,2];case 1:return I.sent(),[3,3];case 2:x&&this._handlePlay(),I.label=3;case 3:return this.isAnimationDisabled=!1,k&&(P=p?n(n({},this.eventObject),{type:p}):this.eventObject,k(P)),p===C.EventType.UPDATE&&this._handleUpdated(),[2]}})})},d.prototype._handleDotClick=function(p){this.hasUserAction=!0,this.slideTo(p)},d.prototype._handlePlay=function(){this._setAutoPlayInterval()},d.prototype._cancelTimeoutAnimations=function(){this._clearAutoPlayTimeout(),this._clearSlideEndTimeout(),this.clearTouchendTimeout()},d.prototype._clearAutoPlayTimeout=function(){window.clearTimeout(this.autoPlayTimeoutId),this.autoPlayTimeoutId=void 0},d.prototype._clearSlideEndTimeout=function(){clearTimeout(this.slideEndTimeoutId),this.slideEndTimeoutId=void 0},d.prototype.clearTouchendTimeout=function(){clearTimeout(this.touchEndTimeoutId),this.touchEndTimeoutId=void 0},d.prototype._clearTouchmovePosition=function(){this.startTouchmovePosition=void 0},d.prototype._setTouchmovePosition=function(){var p=m.getTranslateXProperty(this.stageComponent);this.startTouchmovePosition=-p},d.prototype._setInitialState=function(){return a(this,void 0,void 0,function(){var p;return l(this,function(x){switch(x.label){case 0:return p=m.calculateInitialState(this.props,this.stageComponent),this.rootComponentDimensions=m.getElementDimensions(this.rootElement),[4,this.setState(p)];case 1:return x.sent(),this.props.onInitialized&&this.props.onInitialized(n(n({},this.eventObject),{type:C.EventType.INIT})),[2]}})})},d.prototype._setAutoPlayInterval=function(){var p=this,b=this.props,x=b.autoPlayDirection,b=b.autoPlayInterval;this.autoPlayTimeoutId=window.setTimeout(function(){p.isHovered||(x===C.AutoplayDirection.RTL?p.slidePrev():p.slideNext())},b)},d.prototype._setupSwipeHandlers=function(){this.swipeListener=new h.default({element:this.rootElement,delta:this.props.swipeDelta,onSwiping:this._handleTouchmove,onSwiped:this._handleTouchend,rotationAngle:5,mouseTrackingEnabled:this.props.mouseTracking,touchTrackingEnabled:this.props.touchTracking,preventDefaultTouchmoveEvent:!this.props.touchMoveDefaultEvents,preventTrackingOnMouseleave:!0}),this.swipeListener.init()},d.prototype._updateComponent=function(){var p=this,x=(this.props.syncStateOnPropsUpdate?this.state:this.props).activeIndex,b=n(n({},this.props),{activeIndex:x});this._cancelTimeoutAnimations(),this.isAnimationDisabled=!1,this.state.isAutoPlaying&&this._handlePlay(),this.setState({clones:m.createClones(b)}),requestAnimationFrame(function(){p.setState(m.calculateInitialState(b,p.stageComponent),function(){return p._handleUpdated()})})},d.prototype._updateSwipeProps=function(){this.swipeListener&&this.swipeListener.update({delta:this.props.swipeDelta,mouseTrackingEnabled:this.props.mouseTracking,touchTrackingEnabled:this.props.touchTracking,preventDefaultTouchmoveEvent:!this.props.touchMoveDefaultEvents})},d.prototype._renderDotsNavigation=function(){var x=this.props,p=x.renderDotsItem,x=x.controlsStrategy;return u.default.createElement(v.DotsNavigation,{state:this.state,onClick:this._handleDotClick,renderDotsItem:p,controlsStrategy:x})},d.prototype._renderPrevButton=function(){var p=this.props.renderPrevButton,x=m.getSlideItemInfo(this.state).isPrevSlideDisabled;return u.default.createElement(v.PrevNextButton,{name:"prev",onClick:this.slidePrev,isDisabled:x,renderPrevButton:p})},d.prototype._renderNextButton=function(){var p=this.props.renderNextButton,x=m.getSlideItemInfo(this.state).isNextSlideDisabled;return u.default.createElement(v.PrevNextButton,{name:"next",onClick:this.slideNext,isDisabled:x,renderNextButton:p})},d.prototype._renderPlayPauseButton=function(){var p=this.props.renderPlayPauseButton,x=this.state.isAutoPlaying;return u.default.createElement(v.PlayPauseButton,{isPlaying:x,onClick:this._handlePlayPauseToggle,renderPlayPauseButton:p})},d.prototype.render=function(){var O=this.state,P=O.translate3d,p=O.clones,I=O.transition,O=O.canUseDom,x=m.shouldDisableDots(this.props,this.state),b=m.shouldDisableButtons(this.props,this.state),k=m.getRenderWrapperStyles(this.props,this.state,this.stageComponent),P=m.getRenderStageStyles({translate3d:P},{transition:I}),I=this.props.ssrSilentMode||O?"":C.Modifiers.SSR,O=m.concatClassnames(C.Classnames.ROOT,I);return u.default.createElement("div",{className:O},u.default.createElement("div",{ref:this._setRootComponentRef},u.default.createElement("div",{style:k,className:C.Classnames.WRAPPER,onMouseEnter:this._handleMouseEnter,onMouseLeave:this._handleMouseLeave},u.default.createElement("ul",{style:P,className:C.Classnames.STAGE,ref:this._setStageComponentRef},p.map(this._renderStageItem)))),x?null:this._renderDotsNavigation(),b?null:this._renderPrevButton(),b?null:this._renderNextButton(),this.props.disableSlideInfo?null:this._renderSlideInfo(),this.props.autoPlayControls?this._renderPlayPauseButton():null)},d.defaultProps=f.defaultProps,d}(u.default.PureComponent));e.default=w})(Yv);const L5=Hm(Yv),j5={0:{items:1},576:{items:2,itemsFit:"contain"},1024:{items:3,itemsFit:"contain"},1444:{items:5,itemsFit:"contain"}},F5=z(V)`
  background-color: ${e=>e.theme==="light"?S.light.color.background.primary:S.dark.color.background.primary};

  align-items: center;
  justify-content: center;
  position: relative;
  margin: 20px auto;
  width: 250px;
  height: 250px;
  border-radius: 20px;
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  font-weight: lighter;
  letter-spacing: 2px;
  transition: 1s box-shadow;

  @keyframes clockwise {
    0% {
      top: -5px;
      left: 0;
    }
    12% {
      top: -2px;
      left: 2px;
    }
    25% {
      top: 0;
      left: 5px;
    }
    37% {
      top: 2px;
      left: 2px;
    }
    50% {
      top: 5px;
      left: 0;
    }
    62% {
      top: 2px;
      left: -2px;
    }
    75% {
      top: 0;
      left: -5px;
    }
    87% {
      top: -2px;
      left: -2px;
    }
    100% {
      top: -5px;
      left: 0;
    }
  }

  @keyframes counterclockwise {
    0% {
      top: -5px;
      right: 0;
    }
    12% {
      top: -2px;
      right: 2px;
    }
    25% {
      top: 0;
      right: 5px;
    }
    37% {
      top: 2px;
      right: 2px;
    }
    50% {
      top: 5px;
      right: 0;
    }
    62% {
      top: 2px;
      right: -2px;
    }
    75% {
      top: 0;
      right: -5px;
    }
    87% {
      top: -2px;
      right: -2px;
    }
    100% {
      top: -5px;
      right: 0;
    }
  }

  &:hover {
    box-shadow: 0 5px 35px 0px rgba(0, 0, 0, 0.1);
  }
  &:hover::before,
  &:hover::after {
    display: block;
    content: '';
    position: absolute;
    width: 250px;
    height: 250px;
    background: #fda8cf;
    border-radius: 20px;
    z-index: -1;
    animation: 1s clockwise infinite;
  }
  &:hover:after {
    background: #f3ce5e;
    animation: 2s counterclockwise infinite;
  }
`,N5={LearningCard:F5},B5=e=>{const{theme:t}=at();return _.jsx(N5.LearningCard,{align:"end",justify:"center",theme:t,children:_.jsx(me,{height:"70%",iconId:e.imageId,viewBox:e.viewBox,width:"70%"})})},U5=z(V)`
  display: flex;
  justify-content: start;
  padding: 0 30px 30px;
`,W5={Skills:U5},Wm=j.memo(({slides:e})=>{const t=e.map((n,i)=>_.jsx(B5,{imageId:n.imageId,title:n.title,viewBox:n.viewBox||"0 0 128 128"},n.category+i.toString()));return _.jsx(W5.Skills,{children:_.jsx(L5,{autoPlay:!0,autoPlayInterval:2500,disableButtonsControls:!0,infinite:!0,items:t,mouseTracking:!0,responsive:j5})})}),H5=z.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${e=>e.theme==="light"?S.light.color.background.primary:S.dark.color.background.primary};
`,V5=z(Vi)`
  position: relative;
  background-color: ${e=>e.theme==="light"?S.light.color.background.second:S.dark.color.background.second};
  padding: 60px 0;
  @media ${S.media.mobile} {
    padding: 27px 0;
  }
`,Y5=z(V)`
  width: 100%;
  background-color: ${e=>e.theme==="light"?S.light.color.background.second:S.dark.color.background.second};
`,X5=z.h3`
  display: flex;
  padding: 0 30px 30px;
  ${pe({Fmax:22,Fmin:16,lineHeight:1.36,weight:700})}
  color: ${e=>e.theme==="light"?S.light.color.text.second:S.dark.color.text.primary};
  @media ${S.media.mobile} {
    padding-top: 0;
    margin-top: 10px;
  }
`,Zi={Learning:H5,LearningContainer:V5,LearningSkillContainer:Y5,LearningSkillsTitle:X5},q5=()=>{const{theme:e}=at();return _.jsx(Zi.Learning,{id:"skills",theme:e,children:_.jsxs(Zi.LearningContainer,{align:"center",direction:"column",theme:e,children:[_.jsx(fs,{color:"white",theme:e,children:"Skills"}),_.jsxs(Zi.LearningSkillContainer,{direction:"column",theme:e,children:[_.jsx(Zi.LearningSkillsTitle,{children:"Front-end:"}),_.jsx(Wm,{slides:Rm.filter(t=>t.category==="front")})]}),_.jsxs(Zi.LearningSkillContainer,{direction:"column",theme:e,children:[_.jsx(Zi.LearningSkillsTitle,{children:"Other:"}),_.jsx(Wm,{slides:Rm.filter(t=>t.category==="other")})]})]})})};function Q5(){return _.jsxs(Lb,{children:[_.jsx(UE,{}),_.jsx(yI,{}),_.jsx(jT,{}),_.jsx(i5,{}),_.jsx(PI,{}),_.jsx(uT,{}),_.jsx(q5,{}),_.jsx(tT,{}),_.jsx(GE,{})]})}const G5=zb`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    *:focus-visible {
        outline: 2px solid ${S.light.color.text.link};
    }
    
    html {
        scroll-behavior: smooth;
    }
    
    body {
        margin: 0 auto;
        height: 100vh;
        min-width: 320px;
        font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${S.light.color.background.primary}

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    }

    a {
        text-decoration: none;
    }

    section {
        padding:  0 0 60px  0;
        @media ${S.media.mobile} {
            padding: 27px 0;
        }
    }
    //////SCROLLBAR//////

    /* width */
    ::-webkit-scrollbar {
        width: 3px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
        background: transparent;
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #888; 
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #555; 
    }


    @media (prefers-reduced-motion: reduce) {
        animation: unset;
    }
`,K5=su.createRoot(document.getElementById("root"));K5.render(_.jsxs($b,{theme:S,children:[_.jsx(Q5,{}),_.jsx(G5,{theme:S})]}));
