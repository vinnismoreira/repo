function Bc(e,t){for(var i=0;i<t.length;i++){const n=t[i];if(typeof n!="string"&&!Array.isArray(n)){for(const a in n)if(a!=="default"&&!(a in e)){const r=Object.getOwnPropertyDescriptor(n,a);r&&Object.defineProperty(e,a,r.get?r:{enumerable:!0,get:()=>n[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function i(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(a){if(a.ep)return;a.ep=!0;const r=i(a);fetch(a.href,r)}})();function $c(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var hs={exports:{}},ca={},gs={exports:{}},N={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tn=Symbol.for("react.element"),Qc=Symbol.for("react.portal"),qc=Symbol.for("react.fragment"),Hc=Symbol.for("react.strict_mode"),Wc=Symbol.for("react.profiler"),Kc=Symbol.for("react.provider"),Jc=Symbol.for("react.context"),Gc=Symbol.for("react.forward_ref"),Xc=Symbol.for("react.suspense"),Yc=Symbol.for("react.memo"),Zc=Symbol.for("react.lazy"),Xl=Symbol.iterator;function ed(e){return e===null||typeof e!="object"?null:(e=Xl&&e[Xl]||e["@@iterator"],typeof e=="function"?e:null)}var ys={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},bs=Object.assign,Ss={};function ui(e,t,i){this.props=e,this.context=t,this.refs=Ss,this.updater=i||ys}ui.prototype.isReactComponent={};ui.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ui.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function xs(){}xs.prototype=ui.prototype;function el(e,t,i){this.props=e,this.context=t,this.refs=Ss,this.updater=i||ys}var tl=el.prototype=new xs;tl.constructor=el;bs(tl,ui.prototype);tl.isPureReactComponent=!0;var Yl=Array.isArray,ws=Object.prototype.hasOwnProperty,il={current:null},_s={key:!0,ref:!0,__self:!0,__source:!0};function Es(e,t,i){var n,a={},r=null,l=null;if(t!=null)for(n in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(r=""+t.key),t)ws.call(t,n)&&!_s.hasOwnProperty(n)&&(a[n]=t[n]);var o=arguments.length-2;if(o===1)a.children=i;else if(1<o){for(var s=Array(o),u=0;u<o;u++)s[u]=arguments[u+2];a.children=s}if(e&&e.defaultProps)for(n in o=e.defaultProps,o)a[n]===void 0&&(a[n]=o[n]);return{$$typeof:tn,type:e,key:r,ref:l,props:a,_owner:il.current}}function td(e,t){return{$$typeof:tn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function nl(e){return typeof e=="object"&&e!==null&&e.$$typeof===tn}function id(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(i){return t[i]})}var Zl=/\/+/g;function Na(e,t){return typeof e=="object"&&e!==null&&e.key!=null?id(""+e.key):t.toString(36)}function Rn(e,t,i,n,a){var r=typeof e;(r==="undefined"||r==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(r){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case tn:case Qc:l=!0}}if(l)return l=e,a=a(l),e=n===""?"."+Na(l,0):n,Yl(a)?(i="",e!=null&&(i=e.replace(Zl,"$&/")+"/"),Rn(a,t,i,"",function(u){return u})):a!=null&&(nl(a)&&(a=td(a,i+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(Zl,"$&/")+"/")+e)),t.push(a)),1;if(l=0,n=n===""?".":n+":",Yl(e))for(var o=0;o<e.length;o++){r=e[o];var s=n+Na(r,o);l+=Rn(r,t,i,s,a)}else if(s=ed(e),typeof s=="function")for(e=s.call(e),o=0;!(r=e.next()).done;)r=r.value,s=n+Na(r,o++),l+=Rn(r,t,i,s,a);else if(r==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function cn(e,t,i){if(e==null)return e;var n=[],a=0;return Rn(e,n,"","",function(r){return t.call(i,r,a++)}),n}function nd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(i){(e._status===0||e._status===-1)&&(e._status=1,e._result=i)},function(i){(e._status===0||e._status===-1)&&(e._status=2,e._result=i)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ue={current:null},zn={transition:null},ad={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:zn,ReactCurrentOwner:il};function ks(){throw Error("act(...) is not supported in production builds of React.")}N.Children={map:cn,forEach:function(e,t,i){cn(e,function(){t.apply(this,arguments)},i)},count:function(e){var t=0;return cn(e,function(){t++}),t},toArray:function(e){return cn(e,function(t){return t})||[]},only:function(e){if(!nl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};N.Component=ui;N.Fragment=qc;N.Profiler=Wc;N.PureComponent=el;N.StrictMode=Hc;N.Suspense=Xc;N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ad;N.act=ks;N.cloneElement=function(e,t,i){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=bs({},e.props),a=e.key,r=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(r=t.ref,l=il.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(s in t)ws.call(t,s)&&!_s.hasOwnProperty(s)&&(n[s]=t[s]===void 0&&o!==void 0?o[s]:t[s])}var s=arguments.length-2;if(s===1)n.children=i;else if(1<s){o=Array(s);for(var u=0;u<s;u++)o[u]=arguments[u+2];n.children=o}return{$$typeof:tn,type:e.type,key:a,ref:r,props:n,_owner:l}};N.createContext=function(e){return e={$$typeof:Jc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Kc,_context:e},e.Consumer=e};N.createElement=Es;N.createFactory=function(e){var t=Es.bind(null,e);return t.type=e,t};N.createRef=function(){return{current:null}};N.forwardRef=function(e){return{$$typeof:Gc,render:e}};N.isValidElement=nl;N.lazy=function(e){return{$$typeof:Zc,_payload:{_status:-1,_result:e},_init:nd}};N.memo=function(e,t){return{$$typeof:Yc,type:e,compare:t===void 0?null:t}};N.startTransition=function(e){var t=zn.transition;zn.transition={};try{e()}finally{zn.transition=t}};N.unstable_act=ks;N.useCallback=function(e,t){return ue.current.useCallback(e,t)};N.useContext=function(e){return ue.current.useContext(e)};N.useDebugValue=function(){};N.useDeferredValue=function(e){return ue.current.useDeferredValue(e)};N.useEffect=function(e,t){return ue.current.useEffect(e,t)};N.useId=function(){return ue.current.useId()};N.useImperativeHandle=function(e,t,i){return ue.current.useImperativeHandle(e,t,i)};N.useInsertionEffect=function(e,t){return ue.current.useInsertionEffect(e,t)};N.useLayoutEffect=function(e,t){return ue.current.useLayoutEffect(e,t)};N.useMemo=function(e,t){return ue.current.useMemo(e,t)};N.useReducer=function(e,t,i){return ue.current.useReducer(e,t,i)};N.useRef=function(e){return ue.current.useRef(e)};N.useState=function(e){return ue.current.useState(e)};N.useSyncExternalStore=function(e,t,i){return ue.current.useSyncExternalStore(e,t,i)};N.useTransition=function(){return ue.current.useTransition()};N.version="18.3.1";gs.exports=N;var g=gs.exports;const rd=$c(g),ld=Bc({__proto__:null,default:rd},[g]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var od=g,sd=Symbol.for("react.element"),ud=Symbol.for("react.fragment"),cd=Object.prototype.hasOwnProperty,dd=od.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,fd={key:!0,ref:!0,__self:!0,__source:!0};function Cs(e,t,i){var n,a={},r=null,l=null;i!==void 0&&(r=""+i),t.key!==void 0&&(r=""+t.key),t.ref!==void 0&&(l=t.ref);for(n in t)cd.call(t,n)&&!fd.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)a[n]===void 0&&(a[n]=t[n]);return{$$typeof:sd,type:e,key:r,ref:l,props:a,_owner:dd.current}}ca.Fragment=ud;ca.jsx=Cs;ca.jsxs=Cs;hs.exports=ca;var M=hs.exports,Rs={exports:{}},Se={},zs={exports:{}},Ps={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(k,P){var D=k.length;k.push(P);e:for(;0<D;){var q=D-1>>>1,X=k[q];if(0<a(X,P))k[q]=P,k[D]=X,D=q;else break e}}function i(k){return k.length===0?null:k[0]}function n(k){if(k.length===0)return null;var P=k[0],D=k.pop();if(D!==P){k[0]=D;e:for(var q=0,X=k.length,sn=X>>>1;q<sn;){var bt=2*(q+1)-1,Da=k[bt],St=bt+1,un=k[St];if(0>a(Da,D))St<X&&0>a(un,Da)?(k[q]=un,k[St]=D,q=St):(k[q]=Da,k[bt]=D,q=bt);else if(St<X&&0>a(un,D))k[q]=un,k[St]=D,q=St;else break e}}return P}function a(k,P){var D=k.sortIndex-P.sortIndex;return D!==0?D:k.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var r=performance;e.unstable_now=function(){return r.now()}}else{var l=Date,o=l.now();e.unstable_now=function(){return l.now()-o}}var s=[],u=[],m=1,p=null,v=3,y=!1,b=!1,S=!1,_=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(k){for(var P=i(u);P!==null;){if(P.callback===null)n(u);else if(P.startTime<=k)n(u),P.sortIndex=P.expirationTime,t(s,P);else break;P=i(u)}}function h(k){if(S=!1,f(k),!b)if(i(s)!==null)b=!0,za(w);else{var P=i(u);P!==null&&Pa(h,P.startTime-k)}}function w(k,P){b=!1,S&&(S=!1,d(z),z=-1),y=!0;var D=v;try{for(f(P),p=i(s);p!==null&&(!(p.expirationTime>P)||k&&!ze());){var q=p.callback;if(typeof q=="function"){p.callback=null,v=p.priorityLevel;var X=q(p.expirationTime<=P);P=e.unstable_now(),typeof X=="function"?p.callback=X:p===i(s)&&n(s),f(P)}else n(s);p=i(s)}if(p!==null)var sn=!0;else{var bt=i(u);bt!==null&&Pa(h,bt.startTime-P),sn=!1}return sn}finally{p=null,v=D,y=!1}}var C=!1,R=null,z=-1,Q=5,L=-1;function ze(){return!(e.unstable_now()-L<Q)}function pi(){if(R!==null){var k=e.unstable_now();L=k;var P=!0;try{P=R(!0,k)}finally{P?mi():(C=!1,R=null)}}else C=!1}var mi;if(typeof c=="function")mi=function(){c(pi)};else if(typeof MessageChannel<"u"){var Gl=new MessageChannel,Uc=Gl.port2;Gl.port1.onmessage=pi,mi=function(){Uc.postMessage(null)}}else mi=function(){_(pi,0)};function za(k){R=k,C||(C=!0,mi())}function Pa(k,P){z=_(function(){k(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(k){k.callback=null},e.unstable_continueExecution=function(){b||y||(b=!0,za(w))},e.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<k?Math.floor(1e3/k):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return i(s)},e.unstable_next=function(k){switch(v){case 1:case 2:case 3:var P=3;break;default:P=v}var D=v;v=P;try{return k()}finally{v=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(k,P){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var D=v;v=k;try{return P()}finally{v=D}},e.unstable_scheduleCallback=function(k,P,D){var q=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?q+D:q):D=q,k){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=D+X,k={id:m++,callback:P,priorityLevel:k,startTime:D,expirationTime:X,sortIndex:-1},D>q?(k.sortIndex=D,t(u,k),i(s)===null&&k===i(u)&&(S?(d(z),z=-1):S=!0,Pa(h,D-q))):(k.sortIndex=X,t(s,k),b||y||(b=!0,za(w))),k},e.unstable_shouldYield=ze,e.unstable_wrapCallback=function(k){var P=v;return function(){var D=v;v=P;try{return k.apply(this,arguments)}finally{v=D}}}})(Ps);zs.exports=Ps;var pd=zs.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var md=g,be=pd;function x(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,i=1;i<arguments.length;i++)t+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ds=new Set,Ii={};function Tt(e,t){ii(e,t),ii(e+"Capture",t)}function ii(e,t){for(Ii[e]=t,e=0;e<t.length;e++)Ds.add(t[e])}var He=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ar=Object.prototype.hasOwnProperty,vd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,eo={},to={};function hd(e){return ar.call(to,e)?!0:ar.call(eo,e)?!1:vd.test(e)?to[e]=!0:(eo[e]=!0,!1)}function gd(e,t,i,n){if(i!==null&&i.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:i!==null?!i.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function yd(e,t,i,n){if(t===null||typeof t>"u"||gd(e,t,i,n))return!0;if(n)return!1;if(i!==null)switch(i.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ce(e,t,i,n,a,r,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=a,this.mustUseProperty=i,this.propertyName=e,this.type=t,this.sanitizeURL=r,this.removeEmptyString=l}var ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ie[e]=new ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ie[t]=new ce(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ie[e]=new ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ie[e]=new ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ie[e]=new ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ie[e]=new ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ie[e]=new ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ie[e]=new ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ie[e]=new ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var al=/[\-:]([a-z])/g;function rl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(al,rl);ie[t]=new ce(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(al,rl);ie[t]=new ce(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(al,rl);ie[t]=new ce(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ie[e]=new ce(e,1,!1,e.toLowerCase(),null,!1,!1)});ie.xlinkHref=new ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ie[e]=new ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function ll(e,t,i,n){var a=ie.hasOwnProperty(t)?ie[t]:null;(a!==null?a.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(yd(t,i,a,n)&&(i=null),n||a===null?hd(t)&&(i===null?e.removeAttribute(t):e.setAttribute(t,""+i)):a.mustUseProperty?e[a.propertyName]=i===null?a.type===3?!1:"":i:(t=a.attributeName,n=a.attributeNamespace,i===null?e.removeAttribute(t):(a=a.type,i=a===3||a===4&&i===!0?"":""+i,n?e.setAttributeNS(n,t,i):e.setAttribute(t,i))))}var Ge=md.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,dn=Symbol.for("react.element"),At=Symbol.for("react.portal"),jt=Symbol.for("react.fragment"),ol=Symbol.for("react.strict_mode"),rr=Symbol.for("react.profiler"),Ns=Symbol.for("react.provider"),Ls=Symbol.for("react.context"),sl=Symbol.for("react.forward_ref"),lr=Symbol.for("react.suspense"),or=Symbol.for("react.suspense_list"),ul=Symbol.for("react.memo"),Ye=Symbol.for("react.lazy"),Ts=Symbol.for("react.offscreen"),io=Symbol.iterator;function vi(e){return e===null||typeof e!="object"?null:(e=io&&e[io]||e["@@iterator"],typeof e=="function"?e:null)}var B=Object.assign,La;function _i(e){if(La===void 0)try{throw Error()}catch(i){var t=i.stack.trim().match(/\n( *(at )?)/);La=t&&t[1]||""}return`
`+La+e}var Ta=!1;function Ma(e,t){if(!e||Ta)return"";Ta=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var n=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){n=u}e.call(t.prototype)}else{try{throw Error()}catch(u){n=u}e()}}catch(u){if(u&&n&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),r=n.stack.split(`
`),l=a.length-1,o=r.length-1;1<=l&&0<=o&&a[l]!==r[o];)o--;for(;1<=l&&0<=o;l--,o--)if(a[l]!==r[o]){if(l!==1||o!==1)do if(l--,o--,0>o||a[l]!==r[o]){var s=`
`+a[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=o);break}}}finally{Ta=!1,Error.prepareStackTrace=i}return(e=e?e.displayName||e.name:"")?_i(e):""}function bd(e){switch(e.tag){case 5:return _i(e.type);case 16:return _i("Lazy");case 13:return _i("Suspense");case 19:return _i("SuspenseList");case 0:case 2:case 15:return e=Ma(e.type,!1),e;case 11:return e=Ma(e.type.render,!1),e;case 1:return e=Ma(e.type,!0),e;default:return""}}function sr(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case jt:return"Fragment";case At:return"Portal";case rr:return"Profiler";case ol:return"StrictMode";case lr:return"Suspense";case or:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ls:return(e.displayName||"Context")+".Consumer";case Ns:return(e._context.displayName||"Context")+".Provider";case sl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ul:return t=e.displayName||null,t!==null?t:sr(e.type)||"Memo";case Ye:t=e._payload,e=e._init;try{return sr(e(t))}catch{}}return null}function Sd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return sr(t);case 8:return t===ol?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function mt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ms(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function xd(e){var t=Ms(e)?"checked":"value",i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var a=i.get,r=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(l){n=""+l,r.call(this,l)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(l){n=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function fn(e){e._valueTracker||(e._valueTracker=xd(e))}function Os(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var i=t.getValue(),n="";return e&&(n=Ms(e)?e.checked?"true":"false":e.value),e=n,e!==i?(t.setValue(e),!0):!1}function jn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ur(e,t){var i=t.checked;return B({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??e._wrapperState.initialChecked})}function no(e,t){var i=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;i=mt(t.value!=null?t.value:i),e._wrapperState={initialChecked:n,initialValue:i,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Is(e,t){t=t.checked,t!=null&&ll(e,"checked",t,!1)}function cr(e,t){Is(e,t);var i=mt(t.value),n=t.type;if(i!=null)n==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+i):e.value!==""+i&&(e.value=""+i);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?dr(e,t.type,i):t.hasOwnProperty("defaultValue")&&dr(e,t.type,mt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ao(e,t,i){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,i||t===e.value||(e.value=t),e.defaultValue=t}i=e.name,i!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,i!==""&&(e.name=i)}function dr(e,t,i){(t!=="number"||jn(e.ownerDocument)!==e)&&(i==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+i&&(e.defaultValue=""+i))}var Ei=Array.isArray;function Gt(e,t,i,n){if(e=e.options,t){t={};for(var a=0;a<i.length;a++)t["$"+i[a]]=!0;for(i=0;i<e.length;i++)a=t.hasOwnProperty("$"+e[i].value),e[i].selected!==a&&(e[i].selected=a),a&&n&&(e[i].defaultSelected=!0)}else{for(i=""+mt(i),t=null,a=0;a<e.length;a++){if(e[a].value===i){e[a].selected=!0,n&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function fr(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(x(91));return B({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ro(e,t){var i=t.value;if(i==null){if(i=t.children,t=t.defaultValue,i!=null){if(t!=null)throw Error(x(92));if(Ei(i)){if(1<i.length)throw Error(x(93));i=i[0]}t=i}t==null&&(t=""),i=t}e._wrapperState={initialValue:mt(i)}}function Fs(e,t){var i=mt(t.value),n=mt(t.defaultValue);i!=null&&(i=""+i,i!==e.value&&(e.value=i),t.defaultValue==null&&e.defaultValue!==i&&(e.defaultValue=i)),n!=null&&(e.defaultValue=""+n)}function lo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function As(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pr(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?As(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var pn,js=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,i,n,a){MSApp.execUnsafeLocalFunction(function(){return e(t,i,n,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(pn=pn||document.createElement("div"),pn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=pn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Fi(e,t){if(t){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=t;return}}e.textContent=t}var Ri={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},wd=["Webkit","ms","Moz","O"];Object.keys(Ri).forEach(function(e){wd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ri[t]=Ri[e]})});function Vs(e,t,i){return t==null||typeof t=="boolean"||t===""?"":i||typeof t!="number"||t===0||Ri.hasOwnProperty(e)&&Ri[e]?(""+t).trim():t+"px"}function Us(e,t){e=e.style;for(var i in t)if(t.hasOwnProperty(i)){var n=i.indexOf("--")===0,a=Vs(i,t[i],n);i==="float"&&(i="cssFloat"),n?e.setProperty(i,a):e[i]=a}}var _d=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function mr(e,t){if(t){if(_d[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(x(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(x(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(x(61))}if(t.style!=null&&typeof t.style!="object")throw Error(x(62))}}function vr(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hr=null;function cl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var gr=null,Xt=null,Yt=null;function oo(e){if(e=rn(e)){if(typeof gr!="function")throw Error(x(280));var t=e.stateNode;t&&(t=va(t),gr(e.stateNode,e.type,t))}}function Bs(e){Xt?Yt?Yt.push(e):Yt=[e]:Xt=e}function $s(){if(Xt){var e=Xt,t=Yt;if(Yt=Xt=null,oo(e),t)for(e=0;e<t.length;e++)oo(t[e])}}function Qs(e,t){return e(t)}function qs(){}var Oa=!1;function Hs(e,t,i){if(Oa)return e(t,i);Oa=!0;try{return Qs(e,t,i)}finally{Oa=!1,(Xt!==null||Yt!==null)&&(qs(),$s())}}function Ai(e,t){var i=e.stateNode;if(i===null)return null;var n=va(i);if(n===null)return null;i=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(x(231,t,typeof i));return i}var yr=!1;if(He)try{var hi={};Object.defineProperty(hi,"passive",{get:function(){yr=!0}}),window.addEventListener("test",hi,hi),window.removeEventListener("test",hi,hi)}catch{yr=!1}function Ed(e,t,i,n,a,r,l,o,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(i,u)}catch(m){this.onError(m)}}var zi=!1,Vn=null,Un=!1,br=null,kd={onError:function(e){zi=!0,Vn=e}};function Cd(e,t,i,n,a,r,l,o,s){zi=!1,Vn=null,Ed.apply(kd,arguments)}function Rd(e,t,i,n,a,r,l,o,s){if(Cd.apply(this,arguments),zi){if(zi){var u=Vn;zi=!1,Vn=null}else throw Error(x(198));Un||(Un=!0,br=u)}}function Mt(e){var t=e,i=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(i=t.return),e=t.return;while(e)}return t.tag===3?i:null}function Ws(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function so(e){if(Mt(e)!==e)throw Error(x(188))}function zd(e){var t=e.alternate;if(!t){if(t=Mt(e),t===null)throw Error(x(188));return t!==e?null:e}for(var i=e,n=t;;){var a=i.return;if(a===null)break;var r=a.alternate;if(r===null){if(n=a.return,n!==null){i=n;continue}break}if(a.child===r.child){for(r=a.child;r;){if(r===i)return so(a),e;if(r===n)return so(a),t;r=r.sibling}throw Error(x(188))}if(i.return!==n.return)i=a,n=r;else{for(var l=!1,o=a.child;o;){if(o===i){l=!0,i=a,n=r;break}if(o===n){l=!0,n=a,i=r;break}o=o.sibling}if(!l){for(o=r.child;o;){if(o===i){l=!0,i=r,n=a;break}if(o===n){l=!0,n=r,i=a;break}o=o.sibling}if(!l)throw Error(x(189))}}if(i.alternate!==n)throw Error(x(190))}if(i.tag!==3)throw Error(x(188));return i.stateNode.current===i?e:t}function Ks(e){return e=zd(e),e!==null?Js(e):null}function Js(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Js(e);if(t!==null)return t;e=e.sibling}return null}var Gs=be.unstable_scheduleCallback,uo=be.unstable_cancelCallback,Pd=be.unstable_shouldYield,Dd=be.unstable_requestPaint,H=be.unstable_now,Nd=be.unstable_getCurrentPriorityLevel,dl=be.unstable_ImmediatePriority,Xs=be.unstable_UserBlockingPriority,Bn=be.unstable_NormalPriority,Ld=be.unstable_LowPriority,Ys=be.unstable_IdlePriority,da=null,je=null;function Td(e){if(je&&typeof je.onCommitFiberRoot=="function")try{je.onCommitFiberRoot(da,e,void 0,(e.current.flags&128)===128)}catch{}}var Te=Math.clz32?Math.clz32:Id,Md=Math.log,Od=Math.LN2;function Id(e){return e>>>=0,e===0?32:31-(Md(e)/Od|0)|0}var mn=64,vn=4194304;function ki(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function $n(e,t){var i=e.pendingLanes;if(i===0)return 0;var n=0,a=e.suspendedLanes,r=e.pingedLanes,l=i&268435455;if(l!==0){var o=l&~a;o!==0?n=ki(o):(r&=l,r!==0&&(n=ki(r)))}else l=i&~a,l!==0?n=ki(l):r!==0&&(n=ki(r));if(n===0)return 0;if(t!==0&&t!==n&&!(t&a)&&(a=n&-n,r=t&-t,a>=r||a===16&&(r&4194240)!==0))return t;if(n&4&&(n|=i&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)i=31-Te(t),a=1<<i,n|=e[i],t&=~a;return n}function Fd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ad(e,t){for(var i=e.suspendedLanes,n=e.pingedLanes,a=e.expirationTimes,r=e.pendingLanes;0<r;){var l=31-Te(r),o=1<<l,s=a[l];s===-1?(!(o&i)||o&n)&&(a[l]=Fd(o,t)):s<=t&&(e.expiredLanes|=o),r&=~o}}function Sr(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Zs(){var e=mn;return mn<<=1,!(mn&4194240)&&(mn=64),e}function Ia(e){for(var t=[],i=0;31>i;i++)t.push(e);return t}function nn(e,t,i){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Te(t),e[t]=i}function jd(e,t){var i=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<i;){var a=31-Te(i),r=1<<a;t[a]=0,n[a]=-1,e[a]=-1,i&=~r}}function fl(e,t){var i=e.entangledLanes|=t;for(e=e.entanglements;i;){var n=31-Te(i),a=1<<n;a&t|e[n]&t&&(e[n]|=t),i&=~a}}var O=0;function eu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var tu,pl,iu,nu,au,xr=!1,hn=[],rt=null,lt=null,ot=null,ji=new Map,Vi=new Map,et=[],Vd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function co(e,t){switch(e){case"focusin":case"focusout":rt=null;break;case"dragenter":case"dragleave":lt=null;break;case"mouseover":case"mouseout":ot=null;break;case"pointerover":case"pointerout":ji.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vi.delete(t.pointerId)}}function gi(e,t,i,n,a,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:i,eventSystemFlags:n,nativeEvent:r,targetContainers:[a]},t!==null&&(t=rn(t),t!==null&&pl(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function Ud(e,t,i,n,a){switch(t){case"focusin":return rt=gi(rt,e,t,i,n,a),!0;case"dragenter":return lt=gi(lt,e,t,i,n,a),!0;case"mouseover":return ot=gi(ot,e,t,i,n,a),!0;case"pointerover":var r=a.pointerId;return ji.set(r,gi(ji.get(r)||null,e,t,i,n,a)),!0;case"gotpointercapture":return r=a.pointerId,Vi.set(r,gi(Vi.get(r)||null,e,t,i,n,a)),!0}return!1}function ru(e){var t=_t(e.target);if(t!==null){var i=Mt(t);if(i!==null){if(t=i.tag,t===13){if(t=Ws(i),t!==null){e.blockedOn=t,au(e.priority,function(){iu(i)});return}}else if(t===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Pn(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var i=wr(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(i===null){i=e.nativeEvent;var n=new i.constructor(i.type,i);hr=n,i.target.dispatchEvent(n),hr=null}else return t=rn(i),t!==null&&pl(t),e.blockedOn=i,!1;t.shift()}return!0}function fo(e,t,i){Pn(e)&&i.delete(t)}function Bd(){xr=!1,rt!==null&&Pn(rt)&&(rt=null),lt!==null&&Pn(lt)&&(lt=null),ot!==null&&Pn(ot)&&(ot=null),ji.forEach(fo),Vi.forEach(fo)}function yi(e,t){e.blockedOn===t&&(e.blockedOn=null,xr||(xr=!0,be.unstable_scheduleCallback(be.unstable_NormalPriority,Bd)))}function Ui(e){function t(a){return yi(a,e)}if(0<hn.length){yi(hn[0],e);for(var i=1;i<hn.length;i++){var n=hn[i];n.blockedOn===e&&(n.blockedOn=null)}}for(rt!==null&&yi(rt,e),lt!==null&&yi(lt,e),ot!==null&&yi(ot,e),ji.forEach(t),Vi.forEach(t),i=0;i<et.length;i++)n=et[i],n.blockedOn===e&&(n.blockedOn=null);for(;0<et.length&&(i=et[0],i.blockedOn===null);)ru(i),i.blockedOn===null&&et.shift()}var Zt=Ge.ReactCurrentBatchConfig,Qn=!0;function $d(e,t,i,n){var a=O,r=Zt.transition;Zt.transition=null;try{O=1,ml(e,t,i,n)}finally{O=a,Zt.transition=r}}function Qd(e,t,i,n){var a=O,r=Zt.transition;Zt.transition=null;try{O=4,ml(e,t,i,n)}finally{O=a,Zt.transition=r}}function ml(e,t,i,n){if(Qn){var a=wr(e,t,i,n);if(a===null)Ha(e,t,n,qn,i),co(e,n);else if(Ud(a,e,t,i,n))n.stopPropagation();else if(co(e,n),t&4&&-1<Vd.indexOf(e)){for(;a!==null;){var r=rn(a);if(r!==null&&tu(r),r=wr(e,t,i,n),r===null&&Ha(e,t,n,qn,i),r===a)break;a=r}a!==null&&n.stopPropagation()}else Ha(e,t,n,null,i)}}var qn=null;function wr(e,t,i,n){if(qn=null,e=cl(n),e=_t(e),e!==null)if(t=Mt(e),t===null)e=null;else if(i=t.tag,i===13){if(e=Ws(t),e!==null)return e;e=null}else if(i===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return qn=e,null}function lu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Nd()){case dl:return 1;case Xs:return 4;case Bn:case Ld:return 16;case Ys:return 536870912;default:return 16}default:return 16}}var it=null,vl=null,Dn=null;function ou(){if(Dn)return Dn;var e,t=vl,i=t.length,n,a="value"in it?it.value:it.textContent,r=a.length;for(e=0;e<i&&t[e]===a[e];e++);var l=i-e;for(n=1;n<=l&&t[i-n]===a[r-n];n++);return Dn=a.slice(e,1<n?1-n:void 0)}function Nn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function gn(){return!0}function po(){return!1}function xe(e){function t(i,n,a,r,l){this._reactName=i,this._targetInst=a,this.type=n,this.nativeEvent=r,this.target=l,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(i=e[o],this[o]=i?i(r):r[o]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?gn:po,this.isPropagationStopped=po,this}return B(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=gn)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=gn)},persist:function(){},isPersistent:gn}),t}var ci={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hl=xe(ci),an=B({},ci,{view:0,detail:0}),qd=xe(an),Fa,Aa,bi,fa=B({},an,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==bi&&(bi&&e.type==="mousemove"?(Fa=e.screenX-bi.screenX,Aa=e.screenY-bi.screenY):Aa=Fa=0,bi=e),Fa)},movementY:function(e){return"movementY"in e?e.movementY:Aa}}),mo=xe(fa),Hd=B({},fa,{dataTransfer:0}),Wd=xe(Hd),Kd=B({},an,{relatedTarget:0}),ja=xe(Kd),Jd=B({},ci,{animationName:0,elapsedTime:0,pseudoElement:0}),Gd=xe(Jd),Xd=B({},ci,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Yd=xe(Xd),Zd=B({},ci,{data:0}),vo=xe(Zd),ef={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function af(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=nf[e])?!!t[e]:!1}function gl(){return af}var rf=B({},an,{key:function(e){if(e.key){var t=ef[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Nn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?tf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gl,charCode:function(e){return e.type==="keypress"?Nn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Nn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),lf=xe(rf),of=B({},fa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ho=xe(of),sf=B({},an,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gl}),uf=xe(sf),cf=B({},ci,{propertyName:0,elapsedTime:0,pseudoElement:0}),df=xe(cf),ff=B({},fa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),pf=xe(ff),mf=[9,13,27,32],yl=He&&"CompositionEvent"in window,Pi=null;He&&"documentMode"in document&&(Pi=document.documentMode);var vf=He&&"TextEvent"in window&&!Pi,su=He&&(!yl||Pi&&8<Pi&&11>=Pi),go=" ",yo=!1;function uu(e,t){switch(e){case"keyup":return mf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vt=!1;function hf(e,t){switch(e){case"compositionend":return cu(t);case"keypress":return t.which!==32?null:(yo=!0,go);case"textInput":return e=t.data,e===go&&yo?null:e;default:return null}}function gf(e,t){if(Vt)return e==="compositionend"||!yl&&uu(e,t)?(e=ou(),Dn=vl=it=null,Vt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return su&&t.locale!=="ko"?null:t.data;default:return null}}var yf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!yf[e.type]:t==="textarea"}function du(e,t,i,n){Bs(n),t=Hn(t,"onChange"),0<t.length&&(i=new hl("onChange","change",null,i,n),e.push({event:i,listeners:t}))}var Di=null,Bi=null;function bf(e){wu(e,0)}function pa(e){var t=$t(e);if(Os(t))return e}function Sf(e,t){if(e==="change")return t}var fu=!1;if(He){var Va;if(He){var Ua="oninput"in document;if(!Ua){var So=document.createElement("div");So.setAttribute("oninput","return;"),Ua=typeof So.oninput=="function"}Va=Ua}else Va=!1;fu=Va&&(!document.documentMode||9<document.documentMode)}function xo(){Di&&(Di.detachEvent("onpropertychange",pu),Bi=Di=null)}function pu(e){if(e.propertyName==="value"&&pa(Bi)){var t=[];du(t,Bi,e,cl(e)),Hs(bf,t)}}function xf(e,t,i){e==="focusin"?(xo(),Di=t,Bi=i,Di.attachEvent("onpropertychange",pu)):e==="focusout"&&xo()}function wf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return pa(Bi)}function _f(e,t){if(e==="click")return pa(t)}function Ef(e,t){if(e==="input"||e==="change")return pa(t)}function kf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Oe=typeof Object.is=="function"?Object.is:kf;function $i(e,t){if(Oe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var i=Object.keys(e),n=Object.keys(t);if(i.length!==n.length)return!1;for(n=0;n<i.length;n++){var a=i[n];if(!ar.call(t,a)||!Oe(e[a],t[a]))return!1}return!0}function wo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _o(e,t){var i=wo(e);e=0;for(var n;i;){if(i.nodeType===3){if(n=e+i.textContent.length,e<=t&&n>=t)return{node:i,offset:t-e};e=n}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=wo(i)}}function mu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?mu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function vu(){for(var e=window,t=jn();t instanceof e.HTMLIFrameElement;){try{var i=typeof t.contentWindow.location.href=="string"}catch{i=!1}if(i)e=t.contentWindow;else break;t=jn(e.document)}return t}function bl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Cf(e){var t=vu(),i=e.focusedElem,n=e.selectionRange;if(t!==i&&i&&i.ownerDocument&&mu(i.ownerDocument.documentElement,i)){if(n!==null&&bl(i)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in i)i.selectionStart=t,i.selectionEnd=Math.min(e,i.value.length);else if(e=(t=i.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=i.textContent.length,r=Math.min(n.start,a);n=n.end===void 0?r:Math.min(n.end,a),!e.extend&&r>n&&(a=n,n=r,r=a),a=_o(i,r);var l=_o(i,n);a&&l&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),r>n?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=i;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<t.length;i++)e=t[i],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Rf=He&&"documentMode"in document&&11>=document.documentMode,Ut=null,_r=null,Ni=null,Er=!1;function Eo(e,t,i){var n=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Er||Ut==null||Ut!==jn(n)||(n=Ut,"selectionStart"in n&&bl(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Ni&&$i(Ni,n)||(Ni=n,n=Hn(_r,"onSelect"),0<n.length&&(t=new hl("onSelect","select",null,t,i),e.push({event:t,listeners:n}),t.target=Ut)))}function yn(e,t){var i={};return i[e.toLowerCase()]=t.toLowerCase(),i["Webkit"+e]="webkit"+t,i["Moz"+e]="moz"+t,i}var Bt={animationend:yn("Animation","AnimationEnd"),animationiteration:yn("Animation","AnimationIteration"),animationstart:yn("Animation","AnimationStart"),transitionend:yn("Transition","TransitionEnd")},Ba={},hu={};He&&(hu=document.createElement("div").style,"AnimationEvent"in window||(delete Bt.animationend.animation,delete Bt.animationiteration.animation,delete Bt.animationstart.animation),"TransitionEvent"in window||delete Bt.transitionend.transition);function ma(e){if(Ba[e])return Ba[e];if(!Bt[e])return e;var t=Bt[e],i;for(i in t)if(t.hasOwnProperty(i)&&i in hu)return Ba[e]=t[i];return e}var gu=ma("animationend"),yu=ma("animationiteration"),bu=ma("animationstart"),Su=ma("transitionend"),xu=new Map,ko="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ht(e,t){xu.set(e,t),Tt(t,[e])}for(var $a=0;$a<ko.length;$a++){var Qa=ko[$a],zf=Qa.toLowerCase(),Pf=Qa[0].toUpperCase()+Qa.slice(1);ht(zf,"on"+Pf)}ht(gu,"onAnimationEnd");ht(yu,"onAnimationIteration");ht(bu,"onAnimationStart");ht("dblclick","onDoubleClick");ht("focusin","onFocus");ht("focusout","onBlur");ht(Su,"onTransitionEnd");ii("onMouseEnter",["mouseout","mouseover"]);ii("onMouseLeave",["mouseout","mouseover"]);ii("onPointerEnter",["pointerout","pointerover"]);ii("onPointerLeave",["pointerout","pointerover"]);Tt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Tt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Tt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Tt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Tt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Tt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ci="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Df=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ci));function Co(e,t,i){var n=e.type||"unknown-event";e.currentTarget=i,Rd(n,t,void 0,e),e.currentTarget=null}function wu(e,t){t=(t&4)!==0;for(var i=0;i<e.length;i++){var n=e[i],a=n.event;n=n.listeners;e:{var r=void 0;if(t)for(var l=n.length-1;0<=l;l--){var o=n[l],s=o.instance,u=o.currentTarget;if(o=o.listener,s!==r&&a.isPropagationStopped())break e;Co(a,o,u),r=s}else for(l=0;l<n.length;l++){if(o=n[l],s=o.instance,u=o.currentTarget,o=o.listener,s!==r&&a.isPropagationStopped())break e;Co(a,o,u),r=s}}}if(Un)throw e=br,Un=!1,br=null,e}function F(e,t){var i=t[Pr];i===void 0&&(i=t[Pr]=new Set);var n=e+"__bubble";i.has(n)||(_u(t,e,2,!1),i.add(n))}function qa(e,t,i){var n=0;t&&(n|=4),_u(i,e,n,t)}var bn="_reactListening"+Math.random().toString(36).slice(2);function Qi(e){if(!e[bn]){e[bn]=!0,Ds.forEach(function(i){i!=="selectionchange"&&(Df.has(i)||qa(i,!1,e),qa(i,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[bn]||(t[bn]=!0,qa("selectionchange",!1,t))}}function _u(e,t,i,n){switch(lu(t)){case 1:var a=$d;break;case 4:a=Qd;break;default:a=ml}i=a.bind(null,t,i,e),a=void 0,!yr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),n?a!==void 0?e.addEventListener(t,i,{capture:!0,passive:a}):e.addEventListener(t,i,!0):a!==void 0?e.addEventListener(t,i,{passive:a}):e.addEventListener(t,i,!1)}function Ha(e,t,i,n,a){var r=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var l=n.tag;if(l===3||l===4){var o=n.stateNode.containerInfo;if(o===a||o.nodeType===8&&o.parentNode===a)break;if(l===4)for(l=n.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===a||s.nodeType===8&&s.parentNode===a))return;l=l.return}for(;o!==null;){if(l=_t(o),l===null)return;if(s=l.tag,s===5||s===6){n=r=l;continue e}o=o.parentNode}}n=n.return}Hs(function(){var u=r,m=cl(i),p=[];e:{var v=xu.get(e);if(v!==void 0){var y=hl,b=e;switch(e){case"keypress":if(Nn(i)===0)break e;case"keydown":case"keyup":y=lf;break;case"focusin":b="focus",y=ja;break;case"focusout":b="blur",y=ja;break;case"beforeblur":case"afterblur":y=ja;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=mo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Wd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=uf;break;case gu:case yu:case bu:y=Gd;break;case Su:y=df;break;case"scroll":y=qd;break;case"wheel":y=pf;break;case"copy":case"cut":case"paste":y=Yd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=ho}var S=(t&4)!==0,_=!S&&e==="scroll",d=S?v!==null?v+"Capture":null:v;S=[];for(var c=u,f;c!==null;){f=c;var h=f.stateNode;if(f.tag===5&&h!==null&&(f=h,d!==null&&(h=Ai(c,d),h!=null&&S.push(qi(c,h,f)))),_)break;c=c.return}0<S.length&&(v=new y(v,b,null,i,m),p.push({event:v,listeners:S}))}}if(!(t&7)){e:{if(v=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",v&&i!==hr&&(b=i.relatedTarget||i.fromElement)&&(_t(b)||b[We]))break e;if((y||v)&&(v=m.window===m?m:(v=m.ownerDocument)?v.defaultView||v.parentWindow:window,y?(b=i.relatedTarget||i.toElement,y=u,b=b?_t(b):null,b!==null&&(_=Mt(b),b!==_||b.tag!==5&&b.tag!==6)&&(b=null)):(y=null,b=u),y!==b)){if(S=mo,h="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(S=ho,h="onPointerLeave",d="onPointerEnter",c="pointer"),_=y==null?v:$t(y),f=b==null?v:$t(b),v=new S(h,c+"leave",y,i,m),v.target=_,v.relatedTarget=f,h=null,_t(m)===u&&(S=new S(d,c+"enter",b,i,m),S.target=f,S.relatedTarget=_,h=S),_=h,y&&b)t:{for(S=y,d=b,c=0,f=S;f;f=Ft(f))c++;for(f=0,h=d;h;h=Ft(h))f++;for(;0<c-f;)S=Ft(S),c--;for(;0<f-c;)d=Ft(d),f--;for(;c--;){if(S===d||d!==null&&S===d.alternate)break t;S=Ft(S),d=Ft(d)}S=null}else S=null;y!==null&&Ro(p,v,y,S,!1),b!==null&&_!==null&&Ro(p,_,b,S,!0)}}e:{if(v=u?$t(u):window,y=v.nodeName&&v.nodeName.toLowerCase(),y==="select"||y==="input"&&v.type==="file")var w=Sf;else if(bo(v))if(fu)w=Ef;else{w=wf;var C=xf}else(y=v.nodeName)&&y.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(w=_f);if(w&&(w=w(e,u))){du(p,w,i,m);break e}C&&C(e,v,u),e==="focusout"&&(C=v._wrapperState)&&C.controlled&&v.type==="number"&&dr(v,"number",v.value)}switch(C=u?$t(u):window,e){case"focusin":(bo(C)||C.contentEditable==="true")&&(Ut=C,_r=u,Ni=null);break;case"focusout":Ni=_r=Ut=null;break;case"mousedown":Er=!0;break;case"contextmenu":case"mouseup":case"dragend":Er=!1,Eo(p,i,m);break;case"selectionchange":if(Rf)break;case"keydown":case"keyup":Eo(p,i,m)}var R;if(yl)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else Vt?uu(e,i)&&(z="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(z="onCompositionStart");z&&(su&&i.locale!=="ko"&&(Vt||z!=="onCompositionStart"?z==="onCompositionEnd"&&Vt&&(R=ou()):(it=m,vl="value"in it?it.value:it.textContent,Vt=!0)),C=Hn(u,z),0<C.length&&(z=new vo(z,e,null,i,m),p.push({event:z,listeners:C}),R?z.data=R:(R=cu(i),R!==null&&(z.data=R)))),(R=vf?hf(e,i):gf(e,i))&&(u=Hn(u,"onBeforeInput"),0<u.length&&(m=new vo("onBeforeInput","beforeinput",null,i,m),p.push({event:m,listeners:u}),m.data=R))}wu(p,t)})}function qi(e,t,i){return{instance:e,listener:t,currentTarget:i}}function Hn(e,t){for(var i=t+"Capture",n=[];e!==null;){var a=e,r=a.stateNode;a.tag===5&&r!==null&&(a=r,r=Ai(e,i),r!=null&&n.unshift(qi(e,r,a)),r=Ai(e,t),r!=null&&n.push(qi(e,r,a))),e=e.return}return n}function Ft(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ro(e,t,i,n,a){for(var r=t._reactName,l=[];i!==null&&i!==n;){var o=i,s=o.alternate,u=o.stateNode;if(s!==null&&s===n)break;o.tag===5&&u!==null&&(o=u,a?(s=Ai(i,r),s!=null&&l.unshift(qi(i,s,o))):a||(s=Ai(i,r),s!=null&&l.push(qi(i,s,o)))),i=i.return}l.length!==0&&e.push({event:t,listeners:l})}var Nf=/\r\n?/g,Lf=/\u0000|\uFFFD/g;function zo(e){return(typeof e=="string"?e:""+e).replace(Nf,`
`).replace(Lf,"")}function Sn(e,t,i){if(t=zo(t),zo(e)!==t&&i)throw Error(x(425))}function Wn(){}var kr=null,Cr=null;function Rr(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var zr=typeof setTimeout=="function"?setTimeout:void 0,Tf=typeof clearTimeout=="function"?clearTimeout:void 0,Po=typeof Promise=="function"?Promise:void 0,Mf=typeof queueMicrotask=="function"?queueMicrotask:typeof Po<"u"?function(e){return Po.resolve(null).then(e).catch(Of)}:zr;function Of(e){setTimeout(function(){throw e})}function Wa(e,t){var i=t,n=0;do{var a=i.nextSibling;if(e.removeChild(i),a&&a.nodeType===8)if(i=a.data,i==="/$"){if(n===0){e.removeChild(a),Ui(t);return}n--}else i!=="$"&&i!=="$?"&&i!=="$!"||n++;i=a}while(i);Ui(t)}function st(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Do(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"){if(t===0)return e;t--}else i==="/$"&&t++}e=e.previousSibling}return null}var di=Math.random().toString(36).slice(2),Ae="__reactFiber$"+di,Hi="__reactProps$"+di,We="__reactContainer$"+di,Pr="__reactEvents$"+di,If="__reactListeners$"+di,Ff="__reactHandles$"+di;function _t(e){var t=e[Ae];if(t)return t;for(var i=e.parentNode;i;){if(t=i[We]||i[Ae]){if(i=t.alternate,t.child!==null||i!==null&&i.child!==null)for(e=Do(e);e!==null;){if(i=e[Ae])return i;e=Do(e)}return t}e=i,i=e.parentNode}return null}function rn(e){return e=e[Ae]||e[We],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function $t(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(x(33))}function va(e){return e[Hi]||null}var Dr=[],Qt=-1;function gt(e){return{current:e}}function A(e){0>Qt||(e.current=Dr[Qt],Dr[Qt]=null,Qt--)}function I(e,t){Qt++,Dr[Qt]=e.current,e.current=t}var vt={},le=gt(vt),pe=gt(!1),zt=vt;function ni(e,t){var i=e.type.contextTypes;if(!i)return vt;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var a={},r;for(r in i)a[r]=t[r];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function me(e){return e=e.childContextTypes,e!=null}function Kn(){A(pe),A(le)}function No(e,t,i){if(le.current!==vt)throw Error(x(168));I(le,t),I(pe,i)}function Eu(e,t,i){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return i;n=n.getChildContext();for(var a in n)if(!(a in t))throw Error(x(108,Sd(e)||"Unknown",a));return B({},i,n)}function Jn(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||vt,zt=le.current,I(le,e),I(pe,pe.current),!0}function Lo(e,t,i){var n=e.stateNode;if(!n)throw Error(x(169));i?(e=Eu(e,t,zt),n.__reactInternalMemoizedMergedChildContext=e,A(pe),A(le),I(le,e)):A(pe),I(pe,i)}var Be=null,ha=!1,Ka=!1;function ku(e){Be===null?Be=[e]:Be.push(e)}function Af(e){ha=!0,ku(e)}function yt(){if(!Ka&&Be!==null){Ka=!0;var e=0,t=O;try{var i=Be;for(O=1;e<i.length;e++){var n=i[e];do n=n(!0);while(n!==null)}Be=null,ha=!1}catch(a){throw Be!==null&&(Be=Be.slice(e+1)),Gs(dl,yt),a}finally{O=t,Ka=!1}}return null}var qt=[],Ht=0,Gn=null,Xn=0,we=[],_e=0,Pt=null,$e=1,Qe="";function xt(e,t){qt[Ht++]=Xn,qt[Ht++]=Gn,Gn=e,Xn=t}function Cu(e,t,i){we[_e++]=$e,we[_e++]=Qe,we[_e++]=Pt,Pt=e;var n=$e;e=Qe;var a=32-Te(n)-1;n&=~(1<<a),i+=1;var r=32-Te(t)+a;if(30<r){var l=a-a%5;r=(n&(1<<l)-1).toString(32),n>>=l,a-=l,$e=1<<32-Te(t)+a|i<<a|n,Qe=r+e}else $e=1<<r|i<<a|n,Qe=e}function Sl(e){e.return!==null&&(xt(e,1),Cu(e,1,0))}function xl(e){for(;e===Gn;)Gn=qt[--Ht],qt[Ht]=null,Xn=qt[--Ht],qt[Ht]=null;for(;e===Pt;)Pt=we[--_e],we[_e]=null,Qe=we[--_e],we[_e]=null,$e=we[--_e],we[_e]=null}var ye=null,ge=null,j=!1,Le=null;function Ru(e,t){var i=Ee(5,null,null,0);i.elementType="DELETED",i.stateNode=t,i.return=e,t=e.deletions,t===null?(e.deletions=[i],e.flags|=16):t.push(i)}function To(e,t){switch(e.tag){case 5:var i=e.type;return t=t.nodeType!==1||i.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ye=e,ge=st(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ye=e,ge=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(i=Pt!==null?{id:$e,overflow:Qe}:null,e.memoizedState={dehydrated:t,treeContext:i,retryLane:1073741824},i=Ee(18,null,null,0),i.stateNode=t,i.return=e,e.child=i,ye=e,ge=null,!0):!1;default:return!1}}function Nr(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Lr(e){if(j){var t=ge;if(t){var i=t;if(!To(e,t)){if(Nr(e))throw Error(x(418));t=st(i.nextSibling);var n=ye;t&&To(e,t)?Ru(n,i):(e.flags=e.flags&-4097|2,j=!1,ye=e)}}else{if(Nr(e))throw Error(x(418));e.flags=e.flags&-4097|2,j=!1,ye=e}}}function Mo(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ye=e}function xn(e){if(e!==ye)return!1;if(!j)return Mo(e),j=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Rr(e.type,e.memoizedProps)),t&&(t=ge)){if(Nr(e))throw zu(),Error(x(418));for(;t;)Ru(e,t),t=st(t.nextSibling)}if(Mo(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(x(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"){if(t===0){ge=st(e.nextSibling);break e}t--}else i!=="$"&&i!=="$!"&&i!=="$?"||t++}e=e.nextSibling}ge=null}}else ge=ye?st(e.stateNode.nextSibling):null;return!0}function zu(){for(var e=ge;e;)e=st(e.nextSibling)}function ai(){ge=ye=null,j=!1}function wl(e){Le===null?Le=[e]:Le.push(e)}var jf=Ge.ReactCurrentBatchConfig;function Si(e,t,i){if(e=i.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(x(309));var n=i.stateNode}if(!n)throw Error(x(147,e));var a=n,r=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===r?t.ref:(t=function(l){var o=a.refs;l===null?delete o[r]:o[r]=l},t._stringRef=r,t)}if(typeof e!="string")throw Error(x(284));if(!i._owner)throw Error(x(290,e))}return e}function wn(e,t){throw e=Object.prototype.toString.call(t),Error(x(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Oo(e){var t=e._init;return t(e._payload)}function Pu(e){function t(d,c){if(e){var f=d.deletions;f===null?(d.deletions=[c],d.flags|=16):f.push(c)}}function i(d,c){if(!e)return null;for(;c!==null;)t(d,c),c=c.sibling;return null}function n(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function a(d,c){return d=ft(d,c),d.index=0,d.sibling=null,d}function r(d,c,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<c?(d.flags|=2,c):f):(d.flags|=2,c)):(d.flags|=1048576,c)}function l(d){return e&&d.alternate===null&&(d.flags|=2),d}function o(d,c,f,h){return c===null||c.tag!==6?(c=tr(f,d.mode,h),c.return=d,c):(c=a(c,f),c.return=d,c)}function s(d,c,f,h){var w=f.type;return w===jt?m(d,c,f.props.children,h,f.key):c!==null&&(c.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Ye&&Oo(w)===c.type)?(h=a(c,f.props),h.ref=Si(d,c,f),h.return=d,h):(h=An(f.type,f.key,f.props,null,d.mode,h),h.ref=Si(d,c,f),h.return=d,h)}function u(d,c,f,h){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=ir(f,d.mode,h),c.return=d,c):(c=a(c,f.children||[]),c.return=d,c)}function m(d,c,f,h,w){return c===null||c.tag!==7?(c=Rt(f,d.mode,h,w),c.return=d,c):(c=a(c,f),c.return=d,c)}function p(d,c,f){if(typeof c=="string"&&c!==""||typeof c=="number")return c=tr(""+c,d.mode,f),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case dn:return f=An(c.type,c.key,c.props,null,d.mode,f),f.ref=Si(d,null,c),f.return=d,f;case At:return c=ir(c,d.mode,f),c.return=d,c;case Ye:var h=c._init;return p(d,h(c._payload),f)}if(Ei(c)||vi(c))return c=Rt(c,d.mode,f,null),c.return=d,c;wn(d,c)}return null}function v(d,c,f,h){var w=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return w!==null?null:o(d,c,""+f,h);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case dn:return f.key===w?s(d,c,f,h):null;case At:return f.key===w?u(d,c,f,h):null;case Ye:return w=f._init,v(d,c,w(f._payload),h)}if(Ei(f)||vi(f))return w!==null?null:m(d,c,f,h,null);wn(d,f)}return null}function y(d,c,f,h,w){if(typeof h=="string"&&h!==""||typeof h=="number")return d=d.get(f)||null,o(c,d,""+h,w);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case dn:return d=d.get(h.key===null?f:h.key)||null,s(c,d,h,w);case At:return d=d.get(h.key===null?f:h.key)||null,u(c,d,h,w);case Ye:var C=h._init;return y(d,c,f,C(h._payload),w)}if(Ei(h)||vi(h))return d=d.get(f)||null,m(c,d,h,w,null);wn(c,h)}return null}function b(d,c,f,h){for(var w=null,C=null,R=c,z=c=0,Q=null;R!==null&&z<f.length;z++){R.index>z?(Q=R,R=null):Q=R.sibling;var L=v(d,R,f[z],h);if(L===null){R===null&&(R=Q);break}e&&R&&L.alternate===null&&t(d,R),c=r(L,c,z),C===null?w=L:C.sibling=L,C=L,R=Q}if(z===f.length)return i(d,R),j&&xt(d,z),w;if(R===null){for(;z<f.length;z++)R=p(d,f[z],h),R!==null&&(c=r(R,c,z),C===null?w=R:C.sibling=R,C=R);return j&&xt(d,z),w}for(R=n(d,R);z<f.length;z++)Q=y(R,d,z,f[z],h),Q!==null&&(e&&Q.alternate!==null&&R.delete(Q.key===null?z:Q.key),c=r(Q,c,z),C===null?w=Q:C.sibling=Q,C=Q);return e&&R.forEach(function(ze){return t(d,ze)}),j&&xt(d,z),w}function S(d,c,f,h){var w=vi(f);if(typeof w!="function")throw Error(x(150));if(f=w.call(f),f==null)throw Error(x(151));for(var C=w=null,R=c,z=c=0,Q=null,L=f.next();R!==null&&!L.done;z++,L=f.next()){R.index>z?(Q=R,R=null):Q=R.sibling;var ze=v(d,R,L.value,h);if(ze===null){R===null&&(R=Q);break}e&&R&&ze.alternate===null&&t(d,R),c=r(ze,c,z),C===null?w=ze:C.sibling=ze,C=ze,R=Q}if(L.done)return i(d,R),j&&xt(d,z),w;if(R===null){for(;!L.done;z++,L=f.next())L=p(d,L.value,h),L!==null&&(c=r(L,c,z),C===null?w=L:C.sibling=L,C=L);return j&&xt(d,z),w}for(R=n(d,R);!L.done;z++,L=f.next())L=y(R,d,z,L.value,h),L!==null&&(e&&L.alternate!==null&&R.delete(L.key===null?z:L.key),c=r(L,c,z),C===null?w=L:C.sibling=L,C=L);return e&&R.forEach(function(pi){return t(d,pi)}),j&&xt(d,z),w}function _(d,c,f,h){if(typeof f=="object"&&f!==null&&f.type===jt&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case dn:e:{for(var w=f.key,C=c;C!==null;){if(C.key===w){if(w=f.type,w===jt){if(C.tag===7){i(d,C.sibling),c=a(C,f.props.children),c.return=d,d=c;break e}}else if(C.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Ye&&Oo(w)===C.type){i(d,C.sibling),c=a(C,f.props),c.ref=Si(d,C,f),c.return=d,d=c;break e}i(d,C);break}else t(d,C);C=C.sibling}f.type===jt?(c=Rt(f.props.children,d.mode,h,f.key),c.return=d,d=c):(h=An(f.type,f.key,f.props,null,d.mode,h),h.ref=Si(d,c,f),h.return=d,d=h)}return l(d);case At:e:{for(C=f.key;c!==null;){if(c.key===C)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){i(d,c.sibling),c=a(c,f.children||[]),c.return=d,d=c;break e}else{i(d,c);break}else t(d,c);c=c.sibling}c=ir(f,d.mode,h),c.return=d,d=c}return l(d);case Ye:return C=f._init,_(d,c,C(f._payload),h)}if(Ei(f))return b(d,c,f,h);if(vi(f))return S(d,c,f,h);wn(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,c!==null&&c.tag===6?(i(d,c.sibling),c=a(c,f),c.return=d,d=c):(i(d,c),c=tr(f,d.mode,h),c.return=d,d=c),l(d)):i(d,c)}return _}var ri=Pu(!0),Du=Pu(!1),Yn=gt(null),Zn=null,Wt=null,_l=null;function El(){_l=Wt=Zn=null}function kl(e){var t=Yn.current;A(Yn),e._currentValue=t}function Tr(e,t,i){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===i)break;e=e.return}}function ei(e,t){Zn=e,_l=Wt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(fe=!0),e.firstContext=null)}function Ce(e){var t=e._currentValue;if(_l!==e)if(e={context:e,memoizedValue:t,next:null},Wt===null){if(Zn===null)throw Error(x(308));Wt=e,Zn.dependencies={lanes:0,firstContext:e}}else Wt=Wt.next=e;return t}var Et=null;function Cl(e){Et===null?Et=[e]:Et.push(e)}function Nu(e,t,i,n){var a=t.interleaved;return a===null?(i.next=i,Cl(t)):(i.next=a.next,a.next=i),t.interleaved=i,Ke(e,n)}function Ke(e,t){e.lanes|=t;var i=e.alternate;for(i!==null&&(i.lanes|=t),i=e,e=e.return;e!==null;)e.childLanes|=t,i=e.alternate,i!==null&&(i.childLanes|=t),i=e,e=e.return;return i.tag===3?i.stateNode:null}var Ze=!1;function Rl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Lu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function qe(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ut(e,t,i){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,T&2){var a=n.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),n.pending=t,Ke(e,i)}return a=n.interleaved,a===null?(t.next=t,Cl(n)):(t.next=a.next,a.next=t),n.interleaved=t,Ke(e,i)}function Ln(e,t,i){if(t=t.updateQueue,t!==null&&(t=t.shared,(i&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,i|=n,t.lanes=i,fl(e,i)}}function Io(e,t){var i=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,i===n)){var a=null,r=null;if(i=i.firstBaseUpdate,i!==null){do{var l={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};r===null?a=r=l:r=r.next=l,i=i.next}while(i!==null);r===null?a=r=t:r=r.next=t}else a=r=t;i={baseState:n.baseState,firstBaseUpdate:a,lastBaseUpdate:r,shared:n.shared,effects:n.effects},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=t:e.next=t,i.lastBaseUpdate=t}function ea(e,t,i,n){var a=e.updateQueue;Ze=!1;var r=a.firstBaseUpdate,l=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var s=o,u=s.next;s.next=null,l===null?r=u:l.next=u,l=s;var m=e.alternate;m!==null&&(m=m.updateQueue,o=m.lastBaseUpdate,o!==l&&(o===null?m.firstBaseUpdate=u:o.next=u,m.lastBaseUpdate=s))}if(r!==null){var p=a.baseState;l=0,m=u=s=null,o=r;do{var v=o.lane,y=o.eventTime;if((n&v)===v){m!==null&&(m=m.next={eventTime:y,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var b=e,S=o;switch(v=t,y=i,S.tag){case 1:if(b=S.payload,typeof b=="function"){p=b.call(y,p,v);break e}p=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=S.payload,v=typeof b=="function"?b.call(y,p,v):b,v==null)break e;p=B({},p,v);break e;case 2:Ze=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,v=a.effects,v===null?a.effects=[o]:v.push(o))}else y={eventTime:y,lane:v,tag:o.tag,payload:o.payload,callback:o.callback,next:null},m===null?(u=m=y,s=p):m=m.next=y,l|=v;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;v=o,o=v.next,v.next=null,a.lastBaseUpdate=v,a.shared.pending=null}}while(!0);if(m===null&&(s=p),a.baseState=s,a.firstBaseUpdate=u,a.lastBaseUpdate=m,t=a.shared.interleaved,t!==null){a=t;do l|=a.lane,a=a.next;while(a!==t)}else r===null&&(a.shared.lanes=0);Nt|=l,e.lanes=l,e.memoizedState=p}}function Fo(e,t,i){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],a=n.callback;if(a!==null){if(n.callback=null,n=i,typeof a!="function")throw Error(x(191,a));a.call(n)}}}var ln={},Ve=gt(ln),Wi=gt(ln),Ki=gt(ln);function kt(e){if(e===ln)throw Error(x(174));return e}function zl(e,t){switch(I(Ki,t),I(Wi,e),I(Ve,ln),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:pr(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=pr(t,e)}A(Ve),I(Ve,t)}function li(){A(Ve),A(Wi),A(Ki)}function Tu(e){kt(Ki.current);var t=kt(Ve.current),i=pr(t,e.type);t!==i&&(I(Wi,e),I(Ve,i))}function Pl(e){Wi.current===e&&(A(Ve),A(Wi))}var V=gt(0);function ta(e){for(var t=e;t!==null;){if(t.tag===13){var i=t.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ja=[];function Dl(){for(var e=0;e<Ja.length;e++)Ja[e]._workInProgressVersionPrimary=null;Ja.length=0}var Tn=Ge.ReactCurrentDispatcher,Ga=Ge.ReactCurrentBatchConfig,Dt=0,U=null,J=null,Y=null,ia=!1,Li=!1,Ji=0,Vf=0;function ne(){throw Error(x(321))}function Nl(e,t){if(t===null)return!1;for(var i=0;i<t.length&&i<e.length;i++)if(!Oe(e[i],t[i]))return!1;return!0}function Ll(e,t,i,n,a,r){if(Dt=r,U=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Tn.current=e===null||e.memoizedState===null?Qf:qf,e=i(n,a),Li){r=0;do{if(Li=!1,Ji=0,25<=r)throw Error(x(301));r+=1,Y=J=null,t.updateQueue=null,Tn.current=Hf,e=i(n,a)}while(Li)}if(Tn.current=na,t=J!==null&&J.next!==null,Dt=0,Y=J=U=null,ia=!1,t)throw Error(x(300));return e}function Tl(){var e=Ji!==0;return Ji=0,e}function Fe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Y===null?U.memoizedState=Y=e:Y=Y.next=e,Y}function Re(){if(J===null){var e=U.alternate;e=e!==null?e.memoizedState:null}else e=J.next;var t=Y===null?U.memoizedState:Y.next;if(t!==null)Y=t,J=e;else{if(e===null)throw Error(x(310));J=e,e={memoizedState:J.memoizedState,baseState:J.baseState,baseQueue:J.baseQueue,queue:J.queue,next:null},Y===null?U.memoizedState=Y=e:Y=Y.next=e}return Y}function Gi(e,t){return typeof t=="function"?t(e):t}function Xa(e){var t=Re(),i=t.queue;if(i===null)throw Error(x(311));i.lastRenderedReducer=e;var n=J,a=n.baseQueue,r=i.pending;if(r!==null){if(a!==null){var l=a.next;a.next=r.next,r.next=l}n.baseQueue=a=r,i.pending=null}if(a!==null){r=a.next,n=n.baseState;var o=l=null,s=null,u=r;do{var m=u.lane;if((Dt&m)===m)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:e(n,u.action);else{var p={lane:m,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(o=s=p,l=n):s=s.next=p,U.lanes|=m,Nt|=m}u=u.next}while(u!==null&&u!==r);s===null?l=n:s.next=o,Oe(n,t.memoizedState)||(fe=!0),t.memoizedState=n,t.baseState=l,t.baseQueue=s,i.lastRenderedState=n}if(e=i.interleaved,e!==null){a=e;do r=a.lane,U.lanes|=r,Nt|=r,a=a.next;while(a!==e)}else a===null&&(i.lanes=0);return[t.memoizedState,i.dispatch]}function Ya(e){var t=Re(),i=t.queue;if(i===null)throw Error(x(311));i.lastRenderedReducer=e;var n=i.dispatch,a=i.pending,r=t.memoizedState;if(a!==null){i.pending=null;var l=a=a.next;do r=e(r,l.action),l=l.next;while(l!==a);Oe(r,t.memoizedState)||(fe=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),i.lastRenderedState=r}return[r,n]}function Mu(){}function Ou(e,t){var i=U,n=Re(),a=t(),r=!Oe(n.memoizedState,a);if(r&&(n.memoizedState=a,fe=!0),n=n.queue,Ml(Au.bind(null,i,n,e),[e]),n.getSnapshot!==t||r||Y!==null&&Y.memoizedState.tag&1){if(i.flags|=2048,Xi(9,Fu.bind(null,i,n,a,t),void 0,null),Z===null)throw Error(x(349));Dt&30||Iu(i,t,a)}return a}function Iu(e,t,i){e.flags|=16384,e={getSnapshot:t,value:i},t=U.updateQueue,t===null?(t={lastEffect:null,stores:null},U.updateQueue=t,t.stores=[e]):(i=t.stores,i===null?t.stores=[e]:i.push(e))}function Fu(e,t,i,n){t.value=i,t.getSnapshot=n,ju(t)&&Vu(e)}function Au(e,t,i){return i(function(){ju(t)&&Vu(e)})}function ju(e){var t=e.getSnapshot;e=e.value;try{var i=t();return!Oe(e,i)}catch{return!0}}function Vu(e){var t=Ke(e,1);t!==null&&Me(t,e,1,-1)}function Ao(e){var t=Fe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:e},t.queue=e,e=e.dispatch=$f.bind(null,U,e),[t.memoizedState,e]}function Xi(e,t,i,n){return e={tag:e,create:t,destroy:i,deps:n,next:null},t=U.updateQueue,t===null?(t={lastEffect:null,stores:null},U.updateQueue=t,t.lastEffect=e.next=e):(i=t.lastEffect,i===null?t.lastEffect=e.next=e:(n=i.next,i.next=e,e.next=n,t.lastEffect=e)),e}function Uu(){return Re().memoizedState}function Mn(e,t,i,n){var a=Fe();U.flags|=e,a.memoizedState=Xi(1|t,i,void 0,n===void 0?null:n)}function ga(e,t,i,n){var a=Re();n=n===void 0?null:n;var r=void 0;if(J!==null){var l=J.memoizedState;if(r=l.destroy,n!==null&&Nl(n,l.deps)){a.memoizedState=Xi(t,i,r,n);return}}U.flags|=e,a.memoizedState=Xi(1|t,i,r,n)}function jo(e,t){return Mn(8390656,8,e,t)}function Ml(e,t){return ga(2048,8,e,t)}function Bu(e,t){return ga(4,2,e,t)}function $u(e,t){return ga(4,4,e,t)}function Qu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function qu(e,t,i){return i=i!=null?i.concat([e]):null,ga(4,4,Qu.bind(null,t,e),i)}function Ol(){}function Hu(e,t){var i=Re();t=t===void 0?null:t;var n=i.memoizedState;return n!==null&&t!==null&&Nl(t,n[1])?n[0]:(i.memoizedState=[e,t],e)}function Wu(e,t){var i=Re();t=t===void 0?null:t;var n=i.memoizedState;return n!==null&&t!==null&&Nl(t,n[1])?n[0]:(e=e(),i.memoizedState=[e,t],e)}function Ku(e,t,i){return Dt&21?(Oe(i,t)||(i=Zs(),U.lanes|=i,Nt|=i,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,fe=!0),e.memoizedState=i)}function Uf(e,t){var i=O;O=i!==0&&4>i?i:4,e(!0);var n=Ga.transition;Ga.transition={};try{e(!1),t()}finally{O=i,Ga.transition=n}}function Ju(){return Re().memoizedState}function Bf(e,t,i){var n=dt(e);if(i={lane:n,action:i,hasEagerState:!1,eagerState:null,next:null},Gu(e))Xu(t,i);else if(i=Nu(e,t,i,n),i!==null){var a=se();Me(i,e,n,a),Yu(i,t,n)}}function $f(e,t,i){var n=dt(e),a={lane:n,action:i,hasEagerState:!1,eagerState:null,next:null};if(Gu(e))Xu(t,a);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var l=t.lastRenderedState,o=r(l,i);if(a.hasEagerState=!0,a.eagerState=o,Oe(o,l)){var s=t.interleaved;s===null?(a.next=a,Cl(t)):(a.next=s.next,s.next=a),t.interleaved=a;return}}catch{}finally{}i=Nu(e,t,a,n),i!==null&&(a=se(),Me(i,e,n,a),Yu(i,t,n))}}function Gu(e){var t=e.alternate;return e===U||t!==null&&t===U}function Xu(e,t){Li=ia=!0;var i=e.pending;i===null?t.next=t:(t.next=i.next,i.next=t),e.pending=t}function Yu(e,t,i){if(i&4194240){var n=t.lanes;n&=e.pendingLanes,i|=n,t.lanes=i,fl(e,i)}}var na={readContext:Ce,useCallback:ne,useContext:ne,useEffect:ne,useImperativeHandle:ne,useInsertionEffect:ne,useLayoutEffect:ne,useMemo:ne,useReducer:ne,useRef:ne,useState:ne,useDebugValue:ne,useDeferredValue:ne,useTransition:ne,useMutableSource:ne,useSyncExternalStore:ne,useId:ne,unstable_isNewReconciler:!1},Qf={readContext:Ce,useCallback:function(e,t){return Fe().memoizedState=[e,t===void 0?null:t],e},useContext:Ce,useEffect:jo,useImperativeHandle:function(e,t,i){return i=i!=null?i.concat([e]):null,Mn(4194308,4,Qu.bind(null,t,e),i)},useLayoutEffect:function(e,t){return Mn(4194308,4,e,t)},useInsertionEffect:function(e,t){return Mn(4,2,e,t)},useMemo:function(e,t){var i=Fe();return t=t===void 0?null:t,e=e(),i.memoizedState=[e,t],e},useReducer:function(e,t,i){var n=Fe();return t=i!==void 0?i(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=Bf.bind(null,U,e),[n.memoizedState,e]},useRef:function(e){var t=Fe();return e={current:e},t.memoizedState=e},useState:Ao,useDebugValue:Ol,useDeferredValue:function(e){return Fe().memoizedState=e},useTransition:function(){var e=Ao(!1),t=e[0];return e=Uf.bind(null,e[1]),Fe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,i){var n=U,a=Fe();if(j){if(i===void 0)throw Error(x(407));i=i()}else{if(i=t(),Z===null)throw Error(x(349));Dt&30||Iu(n,t,i)}a.memoizedState=i;var r={value:i,getSnapshot:t};return a.queue=r,jo(Au.bind(null,n,r,e),[e]),n.flags|=2048,Xi(9,Fu.bind(null,n,r,i,t),void 0,null),i},useId:function(){var e=Fe(),t=Z.identifierPrefix;if(j){var i=Qe,n=$e;i=(n&~(1<<32-Te(n)-1)).toString(32)+i,t=":"+t+"R"+i,i=Ji++,0<i&&(t+="H"+i.toString(32)),t+=":"}else i=Vf++,t=":"+t+"r"+i.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},qf={readContext:Ce,useCallback:Hu,useContext:Ce,useEffect:Ml,useImperativeHandle:qu,useInsertionEffect:Bu,useLayoutEffect:$u,useMemo:Wu,useReducer:Xa,useRef:Uu,useState:function(){return Xa(Gi)},useDebugValue:Ol,useDeferredValue:function(e){var t=Re();return Ku(t,J.memoizedState,e)},useTransition:function(){var e=Xa(Gi)[0],t=Re().memoizedState;return[e,t]},useMutableSource:Mu,useSyncExternalStore:Ou,useId:Ju,unstable_isNewReconciler:!1},Hf={readContext:Ce,useCallback:Hu,useContext:Ce,useEffect:Ml,useImperativeHandle:qu,useInsertionEffect:Bu,useLayoutEffect:$u,useMemo:Wu,useReducer:Ya,useRef:Uu,useState:function(){return Ya(Gi)},useDebugValue:Ol,useDeferredValue:function(e){var t=Re();return J===null?t.memoizedState=e:Ku(t,J.memoizedState,e)},useTransition:function(){var e=Ya(Gi)[0],t=Re().memoizedState;return[e,t]},useMutableSource:Mu,useSyncExternalStore:Ou,useId:Ju,unstable_isNewReconciler:!1};function De(e,t){if(e&&e.defaultProps){t=B({},t),e=e.defaultProps;for(var i in e)t[i]===void 0&&(t[i]=e[i]);return t}return t}function Mr(e,t,i,n){t=e.memoizedState,i=i(n,t),i=i==null?t:B({},t,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var ya={isMounted:function(e){return(e=e._reactInternals)?Mt(e)===e:!1},enqueueSetState:function(e,t,i){e=e._reactInternals;var n=se(),a=dt(e),r=qe(n,a);r.payload=t,i!=null&&(r.callback=i),t=ut(e,r,a),t!==null&&(Me(t,e,a,n),Ln(t,e,a))},enqueueReplaceState:function(e,t,i){e=e._reactInternals;var n=se(),a=dt(e),r=qe(n,a);r.tag=1,r.payload=t,i!=null&&(r.callback=i),t=ut(e,r,a),t!==null&&(Me(t,e,a,n),Ln(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var i=se(),n=dt(e),a=qe(i,n);a.tag=2,t!=null&&(a.callback=t),t=ut(e,a,n),t!==null&&(Me(t,e,n,i),Ln(t,e,n))}};function Vo(e,t,i,n,a,r,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,r,l):t.prototype&&t.prototype.isPureReactComponent?!$i(i,n)||!$i(a,r):!0}function Zu(e,t,i){var n=!1,a=vt,r=t.contextType;return typeof r=="object"&&r!==null?r=Ce(r):(a=me(t)?zt:le.current,n=t.contextTypes,r=(n=n!=null)?ni(e,a):vt),t=new t(i,r),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ya,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=r),t}function Uo(e,t,i,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(i,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(i,n),t.state!==e&&ya.enqueueReplaceState(t,t.state,null)}function Or(e,t,i,n){var a=e.stateNode;a.props=i,a.state=e.memoizedState,a.refs={},Rl(e);var r=t.contextType;typeof r=="object"&&r!==null?a.context=Ce(r):(r=me(t)?zt:le.current,a.context=ni(e,r)),a.state=e.memoizedState,r=t.getDerivedStateFromProps,typeof r=="function"&&(Mr(e,t,r,i),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&ya.enqueueReplaceState(a,a.state,null),ea(e,i,a,n),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function oi(e,t){try{var i="",n=t;do i+=bd(n),n=n.return;while(n);var a=i}catch(r){a=`
Error generating stack: `+r.message+`
`+r.stack}return{value:e,source:t,stack:a,digest:null}}function Za(e,t,i){return{value:e,source:null,stack:i??null,digest:t??null}}function Ir(e,t){try{console.error(t.value)}catch(i){setTimeout(function(){throw i})}}var Wf=typeof WeakMap=="function"?WeakMap:Map;function ec(e,t,i){i=qe(-1,i),i.tag=3,i.payload={element:null};var n=t.value;return i.callback=function(){ra||(ra=!0,Hr=n),Ir(e,t)},i}function tc(e,t,i){i=qe(-1,i),i.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var a=t.value;i.payload=function(){return n(a)},i.callback=function(){Ir(e,t)}}var r=e.stateNode;return r!==null&&typeof r.componentDidCatch=="function"&&(i.callback=function(){Ir(e,t),typeof n!="function"&&(ct===null?ct=new Set([this]):ct.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),i}function Bo(e,t,i){var n=e.pingCache;if(n===null){n=e.pingCache=new Wf;var a=new Set;n.set(t,a)}else a=n.get(t),a===void 0&&(a=new Set,n.set(t,a));a.has(i)||(a.add(i),e=op.bind(null,e,t,i),t.then(e,e))}function $o(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Qo(e,t,i,n,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(t=qe(-1,1),t.tag=2,ut(i,t,1))),i.lanes|=1),e)}var Kf=Ge.ReactCurrentOwner,fe=!1;function oe(e,t,i,n){t.child=e===null?Du(t,null,i,n):ri(t,e.child,i,n)}function qo(e,t,i,n,a){i=i.render;var r=t.ref;return ei(t,a),n=Ll(e,t,i,n,r,a),i=Tl(),e!==null&&!fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Je(e,t,a)):(j&&i&&Sl(t),t.flags|=1,oe(e,t,n,a),t.child)}function Ho(e,t,i,n,a){if(e===null){var r=i.type;return typeof r=="function"&&!$l(r)&&r.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(t.tag=15,t.type=r,ic(e,t,r,n,a)):(e=An(i.type,null,n,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!(e.lanes&a)){var l=r.memoizedProps;if(i=i.compare,i=i!==null?i:$i,i(l,n)&&e.ref===t.ref)return Je(e,t,a)}return t.flags|=1,e=ft(r,n),e.ref=t.ref,e.return=t,t.child=e}function ic(e,t,i,n,a){if(e!==null){var r=e.memoizedProps;if($i(r,n)&&e.ref===t.ref)if(fe=!1,t.pendingProps=n=r,(e.lanes&a)!==0)e.flags&131072&&(fe=!0);else return t.lanes=e.lanes,Je(e,t,a)}return Fr(e,t,i,n,a)}function nc(e,t,i){var n=t.pendingProps,a=n.children,r=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},I(Jt,he),he|=i;else{if(!(i&1073741824))return e=r!==null?r.baseLanes|i:i,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,I(Jt,he),he|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=r!==null?r.baseLanes:i,I(Jt,he),he|=n}else r!==null?(n=r.baseLanes|i,t.memoizedState=null):n=i,I(Jt,he),he|=n;return oe(e,t,a,i),t.child}function ac(e,t){var i=t.ref;(e===null&&i!==null||e!==null&&e.ref!==i)&&(t.flags|=512,t.flags|=2097152)}function Fr(e,t,i,n,a){var r=me(i)?zt:le.current;return r=ni(t,r),ei(t,a),i=Ll(e,t,i,n,r,a),n=Tl(),e!==null&&!fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Je(e,t,a)):(j&&n&&Sl(t),t.flags|=1,oe(e,t,i,a),t.child)}function Wo(e,t,i,n,a){if(me(i)){var r=!0;Jn(t)}else r=!1;if(ei(t,a),t.stateNode===null)On(e,t),Zu(t,i,n),Or(t,i,n,a),n=!0;else if(e===null){var l=t.stateNode,o=t.memoizedProps;l.props=o;var s=l.context,u=i.contextType;typeof u=="object"&&u!==null?u=Ce(u):(u=me(i)?zt:le.current,u=ni(t,u));var m=i.getDerivedStateFromProps,p=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function";p||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==n||s!==u)&&Uo(t,l,n,u),Ze=!1;var v=t.memoizedState;l.state=v,ea(t,n,l,a),s=t.memoizedState,o!==n||v!==s||pe.current||Ze?(typeof m=="function"&&(Mr(t,i,m,n),s=t.memoizedState),(o=Ze||Vo(t,i,o,n,v,s,u))?(p||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=s),l.props=n,l.state=s,l.context=u,n=o):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{l=t.stateNode,Lu(e,t),o=t.memoizedProps,u=t.type===t.elementType?o:De(t.type,o),l.props=u,p=t.pendingProps,v=l.context,s=i.contextType,typeof s=="object"&&s!==null?s=Ce(s):(s=me(i)?zt:le.current,s=ni(t,s));var y=i.getDerivedStateFromProps;(m=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==p||v!==s)&&Uo(t,l,n,s),Ze=!1,v=t.memoizedState,l.state=v,ea(t,n,l,a);var b=t.memoizedState;o!==p||v!==b||pe.current||Ze?(typeof y=="function"&&(Mr(t,i,y,n),b=t.memoizedState),(u=Ze||Vo(t,i,u,n,v,b,s)||!1)?(m||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(n,b,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(n,b,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=b),l.props=n,l.state=b,l.context=s,n=u):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),n=!1)}return Ar(e,t,i,n,r,a)}function Ar(e,t,i,n,a,r){ac(e,t);var l=(t.flags&128)!==0;if(!n&&!l)return a&&Lo(t,i,!1),Je(e,t,r);n=t.stateNode,Kf.current=t;var o=l&&typeof i.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&l?(t.child=ri(t,e.child,null,r),t.child=ri(t,null,o,r)):oe(e,t,o,r),t.memoizedState=n.state,a&&Lo(t,i,!0),t.child}function rc(e){var t=e.stateNode;t.pendingContext?No(e,t.pendingContext,t.pendingContext!==t.context):t.context&&No(e,t.context,!1),zl(e,t.containerInfo)}function Ko(e,t,i,n,a){return ai(),wl(a),t.flags|=256,oe(e,t,i,n),t.child}var jr={dehydrated:null,treeContext:null,retryLane:0};function Vr(e){return{baseLanes:e,cachePool:null,transitions:null}}function lc(e,t,i){var n=t.pendingProps,a=V.current,r=!1,l=(t.flags&128)!==0,o;if((o=l)||(o=e!==null&&e.memoizedState===null?!1:(a&2)!==0),o?(r=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),I(V,a&1),e===null)return Lr(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=n.children,e=n.fallback,r?(n=t.mode,r=t.child,l={mode:"hidden",children:l},!(n&1)&&r!==null?(r.childLanes=0,r.pendingProps=l):r=xa(l,n,0,null),e=Rt(e,n,i,null),r.return=t,e.return=t,r.sibling=e,t.child=r,t.child.memoizedState=Vr(i),t.memoizedState=jr,e):Il(t,l));if(a=e.memoizedState,a!==null&&(o=a.dehydrated,o!==null))return Jf(e,t,l,n,o,a,i);if(r){r=n.fallback,l=t.mode,a=e.child,o=a.sibling;var s={mode:"hidden",children:n.children};return!(l&1)&&t.child!==a?(n=t.child,n.childLanes=0,n.pendingProps=s,t.deletions=null):(n=ft(a,s),n.subtreeFlags=a.subtreeFlags&14680064),o!==null?r=ft(o,r):(r=Rt(r,l,i,null),r.flags|=2),r.return=t,n.return=t,n.sibling=r,t.child=n,n=r,r=t.child,l=e.child.memoizedState,l=l===null?Vr(i):{baseLanes:l.baseLanes|i,cachePool:null,transitions:l.transitions},r.memoizedState=l,r.childLanes=e.childLanes&~i,t.memoizedState=jr,n}return r=e.child,e=r.sibling,n=ft(r,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=i),n.return=t,n.sibling=null,e!==null&&(i=t.deletions,i===null?(t.deletions=[e],t.flags|=16):i.push(e)),t.child=n,t.memoizedState=null,n}function Il(e,t){return t=xa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function _n(e,t,i,n){return n!==null&&wl(n),ri(t,e.child,null,i),e=Il(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Jf(e,t,i,n,a,r,l){if(i)return t.flags&256?(t.flags&=-257,n=Za(Error(x(422))),_n(e,t,l,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(r=n.fallback,a=t.mode,n=xa({mode:"visible",children:n.children},a,0,null),r=Rt(r,a,l,null),r.flags|=2,n.return=t,r.return=t,n.sibling=r,t.child=n,t.mode&1&&ri(t,e.child,null,l),t.child.memoizedState=Vr(l),t.memoizedState=jr,r);if(!(t.mode&1))return _n(e,t,l,null);if(a.data==="$!"){if(n=a.nextSibling&&a.nextSibling.dataset,n)var o=n.dgst;return n=o,r=Error(x(419)),n=Za(r,n,void 0),_n(e,t,l,n)}if(o=(l&e.childLanes)!==0,fe||o){if(n=Z,n!==null){switch(l&-l){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(n.suspendedLanes|l)?0:a,a!==0&&a!==r.retryLane&&(r.retryLane=a,Ke(e,a),Me(n,e,a,-1))}return Bl(),n=Za(Error(x(421))),_n(e,t,l,n)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=sp.bind(null,e),a._reactRetry=t,null):(e=r.treeContext,ge=st(a.nextSibling),ye=t,j=!0,Le=null,e!==null&&(we[_e++]=$e,we[_e++]=Qe,we[_e++]=Pt,$e=e.id,Qe=e.overflow,Pt=t),t=Il(t,n.children),t.flags|=4096,t)}function Jo(e,t,i){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Tr(e.return,t,i)}function er(e,t,i,n,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:i,tailMode:a}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=n,r.tail=i,r.tailMode=a)}function oc(e,t,i){var n=t.pendingProps,a=n.revealOrder,r=n.tail;if(oe(e,t,n.children,i),n=V.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Jo(e,i,t);else if(e.tag===19)Jo(e,i,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(I(V,n),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(i=t.child,a=null;i!==null;)e=i.alternate,e!==null&&ta(e)===null&&(a=i),i=i.sibling;i=a,i===null?(a=t.child,t.child=null):(a=i.sibling,i.sibling=null),er(t,!1,a,i,r);break;case"backwards":for(i=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&ta(e)===null){t.child=a;break}e=a.sibling,a.sibling=i,i=a,a=e}er(t,!0,i,null,r);break;case"together":er(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function On(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Je(e,t,i){if(e!==null&&(t.dependencies=e.dependencies),Nt|=t.lanes,!(i&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(x(153));if(t.child!==null){for(e=t.child,i=ft(e,e.pendingProps),t.child=i,i.return=t;e.sibling!==null;)e=e.sibling,i=i.sibling=ft(e,e.pendingProps),i.return=t;i.sibling=null}return t.child}function Gf(e,t,i){switch(t.tag){case 3:rc(t),ai();break;case 5:Tu(t);break;case 1:me(t.type)&&Jn(t);break;case 4:zl(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,a=t.memoizedProps.value;I(Yn,n._currentValue),n._currentValue=a;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(I(V,V.current&1),t.flags|=128,null):i&t.child.childLanes?lc(e,t,i):(I(V,V.current&1),e=Je(e,t,i),e!==null?e.sibling:null);I(V,V.current&1);break;case 19:if(n=(i&t.childLanes)!==0,e.flags&128){if(n)return oc(e,t,i);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),I(V,V.current),n)break;return null;case 22:case 23:return t.lanes=0,nc(e,t,i)}return Je(e,t,i)}var sc,Ur,uc,cc;sc=function(e,t){for(var i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return;i=i.return}i.sibling.return=i.return,i=i.sibling}};Ur=function(){};uc=function(e,t,i,n){var a=e.memoizedProps;if(a!==n){e=t.stateNode,kt(Ve.current);var r=null;switch(i){case"input":a=ur(e,a),n=ur(e,n),r=[];break;case"select":a=B({},a,{value:void 0}),n=B({},n,{value:void 0}),r=[];break;case"textarea":a=fr(e,a),n=fr(e,n),r=[];break;default:typeof a.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=Wn)}mr(i,n);var l;i=null;for(u in a)if(!n.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var o=a[u];for(l in o)o.hasOwnProperty(l)&&(i||(i={}),i[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ii.hasOwnProperty(u)?r||(r=[]):(r=r||[]).push(u,null));for(u in n){var s=n[u];if(o=a!=null?a[u]:void 0,n.hasOwnProperty(u)&&s!==o&&(s!=null||o!=null))if(u==="style")if(o){for(l in o)!o.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(i||(i={}),i[l]="");for(l in s)s.hasOwnProperty(l)&&o[l]!==s[l]&&(i||(i={}),i[l]=s[l])}else i||(r||(r=[]),r.push(u,i)),i=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,o=o?o.__html:void 0,s!=null&&o!==s&&(r=r||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(r=r||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ii.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&F("scroll",e),r||o===s||(r=[])):(r=r||[]).push(u,s))}i&&(r=r||[]).push("style",i);var u=r;(t.updateQueue=u)&&(t.flags|=4)}};cc=function(e,t,i,n){i!==n&&(t.flags|=4)};function xi(e,t){if(!j)switch(e.tailMode){case"hidden":t=e.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var n=null;i!==null;)i.alternate!==null&&(n=i),i=i.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,i=0,n=0;if(t)for(var a=e.child;a!==null;)i|=a.lanes|a.childLanes,n|=a.subtreeFlags&14680064,n|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)i|=a.lanes|a.childLanes,n|=a.subtreeFlags,n|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=n,e.childLanes=i,t}function Xf(e,t,i){var n=t.pendingProps;switch(xl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ae(t),null;case 1:return me(t.type)&&Kn(),ae(t),null;case 3:return n=t.stateNode,li(),A(pe),A(le),Dl(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(xn(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Le!==null&&(Jr(Le),Le=null))),Ur(e,t),ae(t),null;case 5:Pl(t);var a=kt(Ki.current);if(i=t.type,e!==null&&t.stateNode!=null)uc(e,t,i,n,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(x(166));return ae(t),null}if(e=kt(Ve.current),xn(t)){n=t.stateNode,i=t.type;var r=t.memoizedProps;switch(n[Ae]=t,n[Hi]=r,e=(t.mode&1)!==0,i){case"dialog":F("cancel",n),F("close",n);break;case"iframe":case"object":case"embed":F("load",n);break;case"video":case"audio":for(a=0;a<Ci.length;a++)F(Ci[a],n);break;case"source":F("error",n);break;case"img":case"image":case"link":F("error",n),F("load",n);break;case"details":F("toggle",n);break;case"input":no(n,r),F("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!r.multiple},F("invalid",n);break;case"textarea":ro(n,r),F("invalid",n)}mr(i,r),a=null;for(var l in r)if(r.hasOwnProperty(l)){var o=r[l];l==="children"?typeof o=="string"?n.textContent!==o&&(r.suppressHydrationWarning!==!0&&Sn(n.textContent,o,e),a=["children",o]):typeof o=="number"&&n.textContent!==""+o&&(r.suppressHydrationWarning!==!0&&Sn(n.textContent,o,e),a=["children",""+o]):Ii.hasOwnProperty(l)&&o!=null&&l==="onScroll"&&F("scroll",n)}switch(i){case"input":fn(n),ao(n,r,!0);break;case"textarea":fn(n),lo(n);break;case"select":case"option":break;default:typeof r.onClick=="function"&&(n.onclick=Wn)}n=a,t.updateQueue=n,n!==null&&(t.flags|=4)}else{l=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=As(i)),e==="http://www.w3.org/1999/xhtml"?i==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=l.createElement(i,{is:n.is}):(e=l.createElement(i),i==="select"&&(l=e,n.multiple?l.multiple=!0:n.size&&(l.size=n.size))):e=l.createElementNS(e,i),e[Ae]=t,e[Hi]=n,sc(e,t,!1,!1),t.stateNode=e;e:{switch(l=vr(i,n),i){case"dialog":F("cancel",e),F("close",e),a=n;break;case"iframe":case"object":case"embed":F("load",e),a=n;break;case"video":case"audio":for(a=0;a<Ci.length;a++)F(Ci[a],e);a=n;break;case"source":F("error",e),a=n;break;case"img":case"image":case"link":F("error",e),F("load",e),a=n;break;case"details":F("toggle",e),a=n;break;case"input":no(e,n),a=ur(e,n),F("invalid",e);break;case"option":a=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},a=B({},n,{value:void 0}),F("invalid",e);break;case"textarea":ro(e,n),a=fr(e,n),F("invalid",e);break;default:a=n}mr(i,a),o=a;for(r in o)if(o.hasOwnProperty(r)){var s=o[r];r==="style"?Us(e,s):r==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&js(e,s)):r==="children"?typeof s=="string"?(i!=="textarea"||s!=="")&&Fi(e,s):typeof s=="number"&&Fi(e,""+s):r!=="suppressContentEditableWarning"&&r!=="suppressHydrationWarning"&&r!=="autoFocus"&&(Ii.hasOwnProperty(r)?s!=null&&r==="onScroll"&&F("scroll",e):s!=null&&ll(e,r,s,l))}switch(i){case"input":fn(e),ao(e,n,!1);break;case"textarea":fn(e),lo(e);break;case"option":n.value!=null&&e.setAttribute("value",""+mt(n.value));break;case"select":e.multiple=!!n.multiple,r=n.value,r!=null?Gt(e,!!n.multiple,r,!1):n.defaultValue!=null&&Gt(e,!!n.multiple,n.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Wn)}switch(i){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ae(t),null;case 6:if(e&&t.stateNode!=null)cc(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(x(166));if(i=kt(Ki.current),kt(Ve.current),xn(t)){if(n=t.stateNode,i=t.memoizedProps,n[Ae]=t,(r=n.nodeValue!==i)&&(e=ye,e!==null))switch(e.tag){case 3:Sn(n.nodeValue,i,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Sn(n.nodeValue,i,(e.mode&1)!==0)}r&&(t.flags|=4)}else n=(i.nodeType===9?i:i.ownerDocument).createTextNode(n),n[Ae]=t,t.stateNode=n}return ae(t),null;case 13:if(A(V),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(j&&ge!==null&&t.mode&1&&!(t.flags&128))zu(),ai(),t.flags|=98560,r=!1;else if(r=xn(t),n!==null&&n.dehydrated!==null){if(e===null){if(!r)throw Error(x(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(x(317));r[Ae]=t}else ai(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ae(t),r=!1}else Le!==null&&(Jr(Le),Le=null),r=!0;if(!r)return t.flags&65536?t:null}return t.flags&128?(t.lanes=i,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||V.current&1?G===0&&(G=3):Bl())),t.updateQueue!==null&&(t.flags|=4),ae(t),null);case 4:return li(),Ur(e,t),e===null&&Qi(t.stateNode.containerInfo),ae(t),null;case 10:return kl(t.type._context),ae(t),null;case 17:return me(t.type)&&Kn(),ae(t),null;case 19:if(A(V),r=t.memoizedState,r===null)return ae(t),null;if(n=(t.flags&128)!==0,l=r.rendering,l===null)if(n)xi(r,!1);else{if(G!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=ta(e),l!==null){for(t.flags|=128,xi(r,!1),n=l.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=i,i=t.child;i!==null;)r=i,e=n,r.flags&=14680066,l=r.alternate,l===null?(r.childLanes=0,r.lanes=e,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=l.childLanes,r.lanes=l.lanes,r.child=l.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=l.memoizedProps,r.memoizedState=l.memoizedState,r.updateQueue=l.updateQueue,r.type=l.type,e=l.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),i=i.sibling;return I(V,V.current&1|2),t.child}e=e.sibling}r.tail!==null&&H()>si&&(t.flags|=128,n=!0,xi(r,!1),t.lanes=4194304)}else{if(!n)if(e=ta(l),e!==null){if(t.flags|=128,n=!0,i=e.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),xi(r,!0),r.tail===null&&r.tailMode==="hidden"&&!l.alternate&&!j)return ae(t),null}else 2*H()-r.renderingStartTime>si&&i!==1073741824&&(t.flags|=128,n=!0,xi(r,!1),t.lanes=4194304);r.isBackwards?(l.sibling=t.child,t.child=l):(i=r.last,i!==null?i.sibling=l:t.child=l,r.last=l)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=H(),t.sibling=null,i=V.current,I(V,n?i&1|2:i&1),t):(ae(t),null);case 22:case 23:return Ul(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?he&1073741824&&(ae(t),t.subtreeFlags&6&&(t.flags|=8192)):ae(t),null;case 24:return null;case 25:return null}throw Error(x(156,t.tag))}function Yf(e,t){switch(xl(t),t.tag){case 1:return me(t.type)&&Kn(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return li(),A(pe),A(le),Dl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Pl(t),null;case 13:if(A(V),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(x(340));ai()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return A(V),null;case 4:return li(),null;case 10:return kl(t.type._context),null;case 22:case 23:return Ul(),null;case 24:return null;default:return null}}var En=!1,re=!1,Zf=typeof WeakSet=="function"?WeakSet:Set,E=null;function Kt(e,t){var i=e.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(n){$(e,t,n)}else i.current=null}function Br(e,t,i){try{i()}catch(n){$(e,t,n)}}var Go=!1;function ep(e,t){if(kr=Qn,e=vu(),bl(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var n=i.getSelection&&i.getSelection();if(n&&n.rangeCount!==0){i=n.anchorNode;var a=n.anchorOffset,r=n.focusNode;n=n.focusOffset;try{i.nodeType,r.nodeType}catch{i=null;break e}var l=0,o=-1,s=-1,u=0,m=0,p=e,v=null;t:for(;;){for(var y;p!==i||a!==0&&p.nodeType!==3||(o=l+a),p!==r||n!==0&&p.nodeType!==3||(s=l+n),p.nodeType===3&&(l+=p.nodeValue.length),(y=p.firstChild)!==null;)v=p,p=y;for(;;){if(p===e)break t;if(v===i&&++u===a&&(o=l),v===r&&++m===n&&(s=l),(y=p.nextSibling)!==null)break;p=v,v=p.parentNode}p=y}i=o===-1||s===-1?null:{start:o,end:s}}else i=null}i=i||{start:0,end:0}}else i=null;for(Cr={focusedElem:e,selectionRange:i},Qn=!1,E=t;E!==null;)if(t=E,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,E=e;else for(;E!==null;){t=E;try{var b=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var S=b.memoizedProps,_=b.memoizedState,d=t.stateNode,c=d.getSnapshotBeforeUpdate(t.elementType===t.type?S:De(t.type,S),_);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(h){$(t,t.return,h)}if(e=t.sibling,e!==null){e.return=t.return,E=e;break}E=t.return}return b=Go,Go=!1,b}function Ti(e,t,i){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var a=n=n.next;do{if((a.tag&e)===e){var r=a.destroy;a.destroy=void 0,r!==void 0&&Br(t,i,r)}a=a.next}while(a!==n)}}function ba(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var i=t=t.next;do{if((i.tag&e)===e){var n=i.create;i.destroy=n()}i=i.next}while(i!==t)}}function $r(e){var t=e.ref;if(t!==null){var i=e.stateNode;switch(e.tag){case 5:e=i;break;default:e=i}typeof t=="function"?t(e):t.current=e}}function dc(e){var t=e.alternate;t!==null&&(e.alternate=null,dc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ae],delete t[Hi],delete t[Pr],delete t[If],delete t[Ff])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function fc(e){return e.tag===5||e.tag===3||e.tag===4}function Xo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||fc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qr(e,t,i){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?i.nodeType===8?i.parentNode.insertBefore(e,t):i.insertBefore(e,t):(i.nodeType===8?(t=i.parentNode,t.insertBefore(e,i)):(t=i,t.appendChild(e)),i=i._reactRootContainer,i!=null||t.onclick!==null||(t.onclick=Wn));else if(n!==4&&(e=e.child,e!==null))for(Qr(e,t,i),e=e.sibling;e!==null;)Qr(e,t,i),e=e.sibling}function qr(e,t,i){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?i.insertBefore(e,t):i.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(qr(e,t,i),e=e.sibling;e!==null;)qr(e,t,i),e=e.sibling}var ee=null,Ne=!1;function Xe(e,t,i){for(i=i.child;i!==null;)pc(e,t,i),i=i.sibling}function pc(e,t,i){if(je&&typeof je.onCommitFiberUnmount=="function")try{je.onCommitFiberUnmount(da,i)}catch{}switch(i.tag){case 5:re||Kt(i,t);case 6:var n=ee,a=Ne;ee=null,Xe(e,t,i),ee=n,Ne=a,ee!==null&&(Ne?(e=ee,i=i.stateNode,e.nodeType===8?e.parentNode.removeChild(i):e.removeChild(i)):ee.removeChild(i.stateNode));break;case 18:ee!==null&&(Ne?(e=ee,i=i.stateNode,e.nodeType===8?Wa(e.parentNode,i):e.nodeType===1&&Wa(e,i),Ui(e)):Wa(ee,i.stateNode));break;case 4:n=ee,a=Ne,ee=i.stateNode.containerInfo,Ne=!0,Xe(e,t,i),ee=n,Ne=a;break;case 0:case 11:case 14:case 15:if(!re&&(n=i.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){a=n=n.next;do{var r=a,l=r.destroy;r=r.tag,l!==void 0&&(r&2||r&4)&&Br(i,t,l),a=a.next}while(a!==n)}Xe(e,t,i);break;case 1:if(!re&&(Kt(i,t),n=i.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=i.memoizedProps,n.state=i.memoizedState,n.componentWillUnmount()}catch(o){$(i,t,o)}Xe(e,t,i);break;case 21:Xe(e,t,i);break;case 22:i.mode&1?(re=(n=re)||i.memoizedState!==null,Xe(e,t,i),re=n):Xe(e,t,i);break;default:Xe(e,t,i)}}function Yo(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var i=e.stateNode;i===null&&(i=e.stateNode=new Zf),t.forEach(function(n){var a=up.bind(null,e,n);i.has(n)||(i.add(n),n.then(a,a))})}}function Pe(e,t){var i=t.deletions;if(i!==null)for(var n=0;n<i.length;n++){var a=i[n];try{var r=e,l=t,o=l;e:for(;o!==null;){switch(o.tag){case 5:ee=o.stateNode,Ne=!1;break e;case 3:ee=o.stateNode.containerInfo,Ne=!0;break e;case 4:ee=o.stateNode.containerInfo,Ne=!0;break e}o=o.return}if(ee===null)throw Error(x(160));pc(r,l,a),ee=null,Ne=!1;var s=a.alternate;s!==null&&(s.return=null),a.return=null}catch(u){$(a,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)mc(t,e),t=t.sibling}function mc(e,t){var i=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pe(t,e),Ie(e),n&4){try{Ti(3,e,e.return),ba(3,e)}catch(S){$(e,e.return,S)}try{Ti(5,e,e.return)}catch(S){$(e,e.return,S)}}break;case 1:Pe(t,e),Ie(e),n&512&&i!==null&&Kt(i,i.return);break;case 5:if(Pe(t,e),Ie(e),n&512&&i!==null&&Kt(i,i.return),e.flags&32){var a=e.stateNode;try{Fi(a,"")}catch(S){$(e,e.return,S)}}if(n&4&&(a=e.stateNode,a!=null)){var r=e.memoizedProps,l=i!==null?i.memoizedProps:r,o=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{o==="input"&&r.type==="radio"&&r.name!=null&&Is(a,r),vr(o,l);var u=vr(o,r);for(l=0;l<s.length;l+=2){var m=s[l],p=s[l+1];m==="style"?Us(a,p):m==="dangerouslySetInnerHTML"?js(a,p):m==="children"?Fi(a,p):ll(a,m,p,u)}switch(o){case"input":cr(a,r);break;case"textarea":Fs(a,r);break;case"select":var v=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!r.multiple;var y=r.value;y!=null?Gt(a,!!r.multiple,y,!1):v!==!!r.multiple&&(r.defaultValue!=null?Gt(a,!!r.multiple,r.defaultValue,!0):Gt(a,!!r.multiple,r.multiple?[]:"",!1))}a[Hi]=r}catch(S){$(e,e.return,S)}}break;case 6:if(Pe(t,e),Ie(e),n&4){if(e.stateNode===null)throw Error(x(162));a=e.stateNode,r=e.memoizedProps;try{a.nodeValue=r}catch(S){$(e,e.return,S)}}break;case 3:if(Pe(t,e),Ie(e),n&4&&i!==null&&i.memoizedState.isDehydrated)try{Ui(t.containerInfo)}catch(S){$(e,e.return,S)}break;case 4:Pe(t,e),Ie(e);break;case 13:Pe(t,e),Ie(e),a=e.child,a.flags&8192&&(r=a.memoizedState!==null,a.stateNode.isHidden=r,!r||a.alternate!==null&&a.alternate.memoizedState!==null||(jl=H())),n&4&&Yo(e);break;case 22:if(m=i!==null&&i.memoizedState!==null,e.mode&1?(re=(u=re)||m,Pe(t,e),re=u):Pe(t,e),Ie(e),n&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!m&&e.mode&1)for(E=e,m=e.child;m!==null;){for(p=E=m;E!==null;){switch(v=E,y=v.child,v.tag){case 0:case 11:case 14:case 15:Ti(4,v,v.return);break;case 1:Kt(v,v.return);var b=v.stateNode;if(typeof b.componentWillUnmount=="function"){n=v,i=v.return;try{t=n,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(S){$(n,i,S)}}break;case 5:Kt(v,v.return);break;case 22:if(v.memoizedState!==null){es(p);continue}}y!==null?(y.return=v,E=y):es(p)}m=m.sibling}e:for(m=null,p=e;;){if(p.tag===5){if(m===null){m=p;try{a=p.stateNode,u?(r=a.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"):(o=p.stateNode,s=p.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,o.style.display=Vs("display",l))}catch(S){$(e,e.return,S)}}}else if(p.tag===6){if(m===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(S){$(e,e.return,S)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;m===p&&(m=null),p=p.return}m===p&&(m=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Pe(t,e),Ie(e),n&4&&Yo(e);break;case 21:break;default:Pe(t,e),Ie(e)}}function Ie(e){var t=e.flags;if(t&2){try{e:{for(var i=e.return;i!==null;){if(fc(i)){var n=i;break e}i=i.return}throw Error(x(160))}switch(n.tag){case 5:var a=n.stateNode;n.flags&32&&(Fi(a,""),n.flags&=-33);var r=Xo(e);qr(e,r,a);break;case 3:case 4:var l=n.stateNode.containerInfo,o=Xo(e);Qr(e,o,l);break;default:throw Error(x(161))}}catch(s){$(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function tp(e,t,i){E=e,vc(e)}function vc(e,t,i){for(var n=(e.mode&1)!==0;E!==null;){var a=E,r=a.child;if(a.tag===22&&n){var l=a.memoizedState!==null||En;if(!l){var o=a.alternate,s=o!==null&&o.memoizedState!==null||re;o=En;var u=re;if(En=l,(re=s)&&!u)for(E=a;E!==null;)l=E,s=l.child,l.tag===22&&l.memoizedState!==null?ts(a):s!==null?(s.return=l,E=s):ts(a);for(;r!==null;)E=r,vc(r),r=r.sibling;E=a,En=o,re=u}Zo(e)}else a.subtreeFlags&8772&&r!==null?(r.return=a,E=r):Zo(e)}}function Zo(e){for(;E!==null;){var t=E;if(t.flags&8772){var i=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:re||ba(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!re)if(i===null)n.componentDidMount();else{var a=t.elementType===t.type?i.memoizedProps:De(t.type,i.memoizedProps);n.componentDidUpdate(a,i.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var r=t.updateQueue;r!==null&&Fo(t,r,n);break;case 3:var l=t.updateQueue;if(l!==null){if(i=null,t.child!==null)switch(t.child.tag){case 5:i=t.child.stateNode;break;case 1:i=t.child.stateNode}Fo(t,l,i)}break;case 5:var o=t.stateNode;if(i===null&&t.flags&4){i=o;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&i.focus();break;case"img":s.src&&(i.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var m=u.memoizedState;if(m!==null){var p=m.dehydrated;p!==null&&Ui(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}re||t.flags&512&&$r(t)}catch(v){$(t,t.return,v)}}if(t===e){E=null;break}if(i=t.sibling,i!==null){i.return=t.return,E=i;break}E=t.return}}function es(e){for(;E!==null;){var t=E;if(t===e){E=null;break}var i=t.sibling;if(i!==null){i.return=t.return,E=i;break}E=t.return}}function ts(e){for(;E!==null;){var t=E;try{switch(t.tag){case 0:case 11:case 15:var i=t.return;try{ba(4,t)}catch(s){$(t,i,s)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var a=t.return;try{n.componentDidMount()}catch(s){$(t,a,s)}}var r=t.return;try{$r(t)}catch(s){$(t,r,s)}break;case 5:var l=t.return;try{$r(t)}catch(s){$(t,l,s)}}}catch(s){$(t,t.return,s)}if(t===e){E=null;break}var o=t.sibling;if(o!==null){o.return=t.return,E=o;break}E=t.return}}var ip=Math.ceil,aa=Ge.ReactCurrentDispatcher,Fl=Ge.ReactCurrentOwner,ke=Ge.ReactCurrentBatchConfig,T=0,Z=null,W=null,te=0,he=0,Jt=gt(0),G=0,Yi=null,Nt=0,Sa=0,Al=0,Mi=null,de=null,jl=0,si=1/0,Ue=null,ra=!1,Hr=null,ct=null,kn=!1,nt=null,la=0,Oi=0,Wr=null,In=-1,Fn=0;function se(){return T&6?H():In!==-1?In:In=H()}function dt(e){return e.mode&1?T&2&&te!==0?te&-te:jf.transition!==null?(Fn===0&&(Fn=Zs()),Fn):(e=O,e!==0||(e=window.event,e=e===void 0?16:lu(e.type)),e):1}function Me(e,t,i,n){if(50<Oi)throw Oi=0,Wr=null,Error(x(185));nn(e,i,n),(!(T&2)||e!==Z)&&(e===Z&&(!(T&2)&&(Sa|=i),G===4&&tt(e,te)),ve(e,n),i===1&&T===0&&!(t.mode&1)&&(si=H()+500,ha&&yt()))}function ve(e,t){var i=e.callbackNode;Ad(e,t);var n=$n(e,e===Z?te:0);if(n===0)i!==null&&uo(i),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(i!=null&&uo(i),t===1)e.tag===0?Af(is.bind(null,e)):ku(is.bind(null,e)),Mf(function(){!(T&6)&&yt()}),i=null;else{switch(eu(n)){case 1:i=dl;break;case 4:i=Xs;break;case 16:i=Bn;break;case 536870912:i=Ys;break;default:i=Bn}i=_c(i,hc.bind(null,e))}e.callbackPriority=t,e.callbackNode=i}}function hc(e,t){if(In=-1,Fn=0,T&6)throw Error(x(327));var i=e.callbackNode;if(ti()&&e.callbackNode!==i)return null;var n=$n(e,e===Z?te:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=oa(e,n);else{t=n;var a=T;T|=2;var r=yc();(Z!==e||te!==t)&&(Ue=null,si=H()+500,Ct(e,t));do try{rp();break}catch(o){gc(e,o)}while(!0);El(),aa.current=r,T=a,W!==null?t=0:(Z=null,te=0,t=G)}if(t!==0){if(t===2&&(a=Sr(e),a!==0&&(n=a,t=Kr(e,a))),t===1)throw i=Yi,Ct(e,0),tt(e,n),ve(e,H()),i;if(t===6)tt(e,n);else{if(a=e.current.alternate,!(n&30)&&!np(a)&&(t=oa(e,n),t===2&&(r=Sr(e),r!==0&&(n=r,t=Kr(e,r))),t===1))throw i=Yi,Ct(e,0),tt(e,n),ve(e,H()),i;switch(e.finishedWork=a,e.finishedLanes=n,t){case 0:case 1:throw Error(x(345));case 2:wt(e,de,Ue);break;case 3:if(tt(e,n),(n&130023424)===n&&(t=jl+500-H(),10<t)){if($n(e,0)!==0)break;if(a=e.suspendedLanes,(a&n)!==n){se(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=zr(wt.bind(null,e,de,Ue),t);break}wt(e,de,Ue);break;case 4:if(tt(e,n),(n&4194240)===n)break;for(t=e.eventTimes,a=-1;0<n;){var l=31-Te(n);r=1<<l,l=t[l],l>a&&(a=l),n&=~r}if(n=a,n=H()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*ip(n/1960))-n,10<n){e.timeoutHandle=zr(wt.bind(null,e,de,Ue),n);break}wt(e,de,Ue);break;case 5:wt(e,de,Ue);break;default:throw Error(x(329))}}}return ve(e,H()),e.callbackNode===i?hc.bind(null,e):null}function Kr(e,t){var i=Mi;return e.current.memoizedState.isDehydrated&&(Ct(e,t).flags|=256),e=oa(e,t),e!==2&&(t=de,de=i,t!==null&&Jr(t)),e}function Jr(e){de===null?de=e:de.push.apply(de,e)}function np(e){for(var t=e;;){if(t.flags&16384){var i=t.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var n=0;n<i.length;n++){var a=i[n],r=a.getSnapshot;a=a.value;try{if(!Oe(r(),a))return!1}catch{return!1}}}if(i=t.child,t.subtreeFlags&16384&&i!==null)i.return=t,t=i;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function tt(e,t){for(t&=~Al,t&=~Sa,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var i=31-Te(t),n=1<<i;e[i]=-1,t&=~n}}function is(e){if(T&6)throw Error(x(327));ti();var t=$n(e,0);if(!(t&1))return ve(e,H()),null;var i=oa(e,t);if(e.tag!==0&&i===2){var n=Sr(e);n!==0&&(t=n,i=Kr(e,n))}if(i===1)throw i=Yi,Ct(e,0),tt(e,t),ve(e,H()),i;if(i===6)throw Error(x(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wt(e,de,Ue),ve(e,H()),null}function Vl(e,t){var i=T;T|=1;try{return e(t)}finally{T=i,T===0&&(si=H()+500,ha&&yt())}}function Lt(e){nt!==null&&nt.tag===0&&!(T&6)&&ti();var t=T;T|=1;var i=ke.transition,n=O;try{if(ke.transition=null,O=1,e)return e()}finally{O=n,ke.transition=i,T=t,!(T&6)&&yt()}}function Ul(){he=Jt.current,A(Jt)}function Ct(e,t){e.finishedWork=null,e.finishedLanes=0;var i=e.timeoutHandle;if(i!==-1&&(e.timeoutHandle=-1,Tf(i)),W!==null)for(i=W.return;i!==null;){var n=i;switch(xl(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Kn();break;case 3:li(),A(pe),A(le),Dl();break;case 5:Pl(n);break;case 4:li();break;case 13:A(V);break;case 19:A(V);break;case 10:kl(n.type._context);break;case 22:case 23:Ul()}i=i.return}if(Z=e,W=e=ft(e.current,null),te=he=t,G=0,Yi=null,Al=Sa=Nt=0,de=Mi=null,Et!==null){for(t=0;t<Et.length;t++)if(i=Et[t],n=i.interleaved,n!==null){i.interleaved=null;var a=n.next,r=i.pending;if(r!==null){var l=r.next;r.next=a,n.next=l}i.pending=n}Et=null}return e}function gc(e,t){do{var i=W;try{if(El(),Tn.current=na,ia){for(var n=U.memoizedState;n!==null;){var a=n.queue;a!==null&&(a.pending=null),n=n.next}ia=!1}if(Dt=0,Y=J=U=null,Li=!1,Ji=0,Fl.current=null,i===null||i.return===null){G=1,Yi=t,W=null;break}e:{var r=e,l=i.return,o=i,s=t;if(t=te,o.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,m=o,p=m.tag;if(!(m.mode&1)&&(p===0||p===11||p===15)){var v=m.alternate;v?(m.updateQueue=v.updateQueue,m.memoizedState=v.memoizedState,m.lanes=v.lanes):(m.updateQueue=null,m.memoizedState=null)}var y=$o(l);if(y!==null){y.flags&=-257,Qo(y,l,o,r,t),y.mode&1&&Bo(r,u,t),t=y,s=u;var b=t.updateQueue;if(b===null){var S=new Set;S.add(s),t.updateQueue=S}else b.add(s);break e}else{if(!(t&1)){Bo(r,u,t),Bl();break e}s=Error(x(426))}}else if(j&&o.mode&1){var _=$o(l);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Qo(_,l,o,r,t),wl(oi(s,o));break e}}r=s=oi(s,o),G!==4&&(G=2),Mi===null?Mi=[r]:Mi.push(r),r=l;do{switch(r.tag){case 3:r.flags|=65536,t&=-t,r.lanes|=t;var d=ec(r,s,t);Io(r,d);break e;case 1:o=s;var c=r.type,f=r.stateNode;if(!(r.flags&128)&&(typeof c.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ct===null||!ct.has(f)))){r.flags|=65536,t&=-t,r.lanes|=t;var h=tc(r,o,t);Io(r,h);break e}}r=r.return}while(r!==null)}Sc(i)}catch(w){t=w,W===i&&i!==null&&(W=i=i.return);continue}break}while(!0)}function yc(){var e=aa.current;return aa.current=na,e===null?na:e}function Bl(){(G===0||G===3||G===2)&&(G=4),Z===null||!(Nt&268435455)&&!(Sa&268435455)||tt(Z,te)}function oa(e,t){var i=T;T|=2;var n=yc();(Z!==e||te!==t)&&(Ue=null,Ct(e,t));do try{ap();break}catch(a){gc(e,a)}while(!0);if(El(),T=i,aa.current=n,W!==null)throw Error(x(261));return Z=null,te=0,G}function ap(){for(;W!==null;)bc(W)}function rp(){for(;W!==null&&!Pd();)bc(W)}function bc(e){var t=wc(e.alternate,e,he);e.memoizedProps=e.pendingProps,t===null?Sc(e):W=t,Fl.current=null}function Sc(e){var t=e;do{var i=t.alternate;if(e=t.return,t.flags&32768){if(i=Yf(i,t),i!==null){i.flags&=32767,W=i;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{G=6,W=null;return}}else if(i=Xf(i,t,he),i!==null){W=i;return}if(t=t.sibling,t!==null){W=t;return}W=t=e}while(t!==null);G===0&&(G=5)}function wt(e,t,i){var n=O,a=ke.transition;try{ke.transition=null,O=1,lp(e,t,i,n)}finally{ke.transition=a,O=n}return null}function lp(e,t,i,n){do ti();while(nt!==null);if(T&6)throw Error(x(327));i=e.finishedWork;var a=e.finishedLanes;if(i===null)return null;if(e.finishedWork=null,e.finishedLanes=0,i===e.current)throw Error(x(177));e.callbackNode=null,e.callbackPriority=0;var r=i.lanes|i.childLanes;if(jd(e,r),e===Z&&(W=Z=null,te=0),!(i.subtreeFlags&2064)&&!(i.flags&2064)||kn||(kn=!0,_c(Bn,function(){return ti(),null})),r=(i.flags&15990)!==0,i.subtreeFlags&15990||r){r=ke.transition,ke.transition=null;var l=O;O=1;var o=T;T|=4,Fl.current=null,ep(e,i),mc(i,e),Cf(Cr),Qn=!!kr,Cr=kr=null,e.current=i,tp(i),Dd(),T=o,O=l,ke.transition=r}else e.current=i;if(kn&&(kn=!1,nt=e,la=a),r=e.pendingLanes,r===0&&(ct=null),Td(i.stateNode),ve(e,H()),t!==null)for(n=e.onRecoverableError,i=0;i<t.length;i++)a=t[i],n(a.value,{componentStack:a.stack,digest:a.digest});if(ra)throw ra=!1,e=Hr,Hr=null,e;return la&1&&e.tag!==0&&ti(),r=e.pendingLanes,r&1?e===Wr?Oi++:(Oi=0,Wr=e):Oi=0,yt(),null}function ti(){if(nt!==null){var e=eu(la),t=ke.transition,i=O;try{if(ke.transition=null,O=16>e?16:e,nt===null)var n=!1;else{if(e=nt,nt=null,la=0,T&6)throw Error(x(331));var a=T;for(T|=4,E=e.current;E!==null;){var r=E,l=r.child;if(E.flags&16){var o=r.deletions;if(o!==null){for(var s=0;s<o.length;s++){var u=o[s];for(E=u;E!==null;){var m=E;switch(m.tag){case 0:case 11:case 15:Ti(8,m,r)}var p=m.child;if(p!==null)p.return=m,E=p;else for(;E!==null;){m=E;var v=m.sibling,y=m.return;if(dc(m),m===u){E=null;break}if(v!==null){v.return=y,E=v;break}E=y}}}var b=r.alternate;if(b!==null){var S=b.child;if(S!==null){b.child=null;do{var _=S.sibling;S.sibling=null,S=_}while(S!==null)}}E=r}}if(r.subtreeFlags&2064&&l!==null)l.return=r,E=l;else e:for(;E!==null;){if(r=E,r.flags&2048)switch(r.tag){case 0:case 11:case 15:Ti(9,r,r.return)}var d=r.sibling;if(d!==null){d.return=r.return,E=d;break e}E=r.return}}var c=e.current;for(E=c;E!==null;){l=E;var f=l.child;if(l.subtreeFlags&2064&&f!==null)f.return=l,E=f;else e:for(l=c;E!==null;){if(o=E,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:ba(9,o)}}catch(w){$(o,o.return,w)}if(o===l){E=null;break e}var h=o.sibling;if(h!==null){h.return=o.return,E=h;break e}E=o.return}}if(T=a,yt(),je&&typeof je.onPostCommitFiberRoot=="function")try{je.onPostCommitFiberRoot(da,e)}catch{}n=!0}return n}finally{O=i,ke.transition=t}}return!1}function ns(e,t,i){t=oi(i,t),t=ec(e,t,1),e=ut(e,t,1),t=se(),e!==null&&(nn(e,1,t),ve(e,t))}function $(e,t,i){if(e.tag===3)ns(e,e,i);else for(;t!==null;){if(t.tag===3){ns(t,e,i);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(ct===null||!ct.has(n))){e=oi(i,e),e=tc(t,e,1),t=ut(t,e,1),e=se(),t!==null&&(nn(t,1,e),ve(t,e));break}}t=t.return}}function op(e,t,i){var n=e.pingCache;n!==null&&n.delete(t),t=se(),e.pingedLanes|=e.suspendedLanes&i,Z===e&&(te&i)===i&&(G===4||G===3&&(te&130023424)===te&&500>H()-jl?Ct(e,0):Al|=i),ve(e,t)}function xc(e,t){t===0&&(e.mode&1?(t=vn,vn<<=1,!(vn&130023424)&&(vn=4194304)):t=1);var i=se();e=Ke(e,t),e!==null&&(nn(e,t,i),ve(e,i))}function sp(e){var t=e.memoizedState,i=0;t!==null&&(i=t.retryLane),xc(e,i)}function up(e,t){var i=0;switch(e.tag){case 13:var n=e.stateNode,a=e.memoizedState;a!==null&&(i=a.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(x(314))}n!==null&&n.delete(t),xc(e,i)}var wc;wc=function(e,t,i){if(e!==null)if(e.memoizedProps!==t.pendingProps||pe.current)fe=!0;else{if(!(e.lanes&i)&&!(t.flags&128))return fe=!1,Gf(e,t,i);fe=!!(e.flags&131072)}else fe=!1,j&&t.flags&1048576&&Cu(t,Xn,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;On(e,t),e=t.pendingProps;var a=ni(t,le.current);ei(t,i),a=Ll(null,t,n,e,a,i);var r=Tl();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,me(n)?(r=!0,Jn(t)):r=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Rl(t),a.updater=ya,t.stateNode=a,a._reactInternals=t,Or(t,n,e,i),t=Ar(null,t,n,!0,r,i)):(t.tag=0,j&&r&&Sl(t),oe(null,t,a,i),t=t.child),t;case 16:n=t.elementType;e:{switch(On(e,t),e=t.pendingProps,a=n._init,n=a(n._payload),t.type=n,a=t.tag=dp(n),e=De(n,e),a){case 0:t=Fr(null,t,n,e,i);break e;case 1:t=Wo(null,t,n,e,i);break e;case 11:t=qo(null,t,n,e,i);break e;case 14:t=Ho(null,t,n,De(n.type,e),i);break e}throw Error(x(306,n,""))}return t;case 0:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:De(n,a),Fr(e,t,n,a,i);case 1:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:De(n,a),Wo(e,t,n,a,i);case 3:e:{if(rc(t),e===null)throw Error(x(387));n=t.pendingProps,r=t.memoizedState,a=r.element,Lu(e,t),ea(t,n,null,i);var l=t.memoizedState;if(n=l.element,r.isDehydrated)if(r={element:n,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){a=oi(Error(x(423)),t),t=Ko(e,t,n,i,a);break e}else if(n!==a){a=oi(Error(x(424)),t),t=Ko(e,t,n,i,a);break e}else for(ge=st(t.stateNode.containerInfo.firstChild),ye=t,j=!0,Le=null,i=Du(t,null,n,i),t.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(ai(),n===a){t=Je(e,t,i);break e}oe(e,t,n,i)}t=t.child}return t;case 5:return Tu(t),e===null&&Lr(t),n=t.type,a=t.pendingProps,r=e!==null?e.memoizedProps:null,l=a.children,Rr(n,a)?l=null:r!==null&&Rr(n,r)&&(t.flags|=32),ac(e,t),oe(e,t,l,i),t.child;case 6:return e===null&&Lr(t),null;case 13:return lc(e,t,i);case 4:return zl(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=ri(t,null,n,i):oe(e,t,n,i),t.child;case 11:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:De(n,a),qo(e,t,n,a,i);case 7:return oe(e,t,t.pendingProps,i),t.child;case 8:return oe(e,t,t.pendingProps.children,i),t.child;case 12:return oe(e,t,t.pendingProps.children,i),t.child;case 10:e:{if(n=t.type._context,a=t.pendingProps,r=t.memoizedProps,l=a.value,I(Yn,n._currentValue),n._currentValue=l,r!==null)if(Oe(r.value,l)){if(r.children===a.children&&!pe.current){t=Je(e,t,i);break e}}else for(r=t.child,r!==null&&(r.return=t);r!==null;){var o=r.dependencies;if(o!==null){l=r.child;for(var s=o.firstContext;s!==null;){if(s.context===n){if(r.tag===1){s=qe(-1,i&-i),s.tag=2;var u=r.updateQueue;if(u!==null){u=u.shared;var m=u.pending;m===null?s.next=s:(s.next=m.next,m.next=s),u.pending=s}}r.lanes|=i,s=r.alternate,s!==null&&(s.lanes|=i),Tr(r.return,i,t),o.lanes|=i;break}s=s.next}}else if(r.tag===10)l=r.type===t.type?null:r.child;else if(r.tag===18){if(l=r.return,l===null)throw Error(x(341));l.lanes|=i,o=l.alternate,o!==null&&(o.lanes|=i),Tr(l,i,t),l=r.sibling}else l=r.child;if(l!==null)l.return=r;else for(l=r;l!==null;){if(l===t){l=null;break}if(r=l.sibling,r!==null){r.return=l.return,l=r;break}l=l.return}r=l}oe(e,t,a.children,i),t=t.child}return t;case 9:return a=t.type,n=t.pendingProps.children,ei(t,i),a=Ce(a),n=n(a),t.flags|=1,oe(e,t,n,i),t.child;case 14:return n=t.type,a=De(n,t.pendingProps),a=De(n.type,a),Ho(e,t,n,a,i);case 15:return ic(e,t,t.type,t.pendingProps,i);case 17:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:De(n,a),On(e,t),t.tag=1,me(n)?(e=!0,Jn(t)):e=!1,ei(t,i),Zu(t,n,a),Or(t,n,a,i),Ar(null,t,n,!0,e,i);case 19:return oc(e,t,i);case 22:return nc(e,t,i)}throw Error(x(156,t.tag))};function _c(e,t){return Gs(e,t)}function cp(e,t,i,n){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ee(e,t,i,n){return new cp(e,t,i,n)}function $l(e){return e=e.prototype,!(!e||!e.isReactComponent)}function dp(e){if(typeof e=="function")return $l(e)?1:0;if(e!=null){if(e=e.$$typeof,e===sl)return 11;if(e===ul)return 14}return 2}function ft(e,t){var i=e.alternate;return i===null?(i=Ee(e.tag,t,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=t,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&14680064,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,t=e.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i}function An(e,t,i,n,a,r){var l=2;if(n=e,typeof e=="function")$l(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case jt:return Rt(i.children,a,r,t);case ol:l=8,a|=8;break;case rr:return e=Ee(12,i,t,a|2),e.elementType=rr,e.lanes=r,e;case lr:return e=Ee(13,i,t,a),e.elementType=lr,e.lanes=r,e;case or:return e=Ee(19,i,t,a),e.elementType=or,e.lanes=r,e;case Ts:return xa(i,a,r,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ns:l=10;break e;case Ls:l=9;break e;case sl:l=11;break e;case ul:l=14;break e;case Ye:l=16,n=null;break e}throw Error(x(130,e==null?e:typeof e,""))}return t=Ee(l,i,t,a),t.elementType=e,t.type=n,t.lanes=r,t}function Rt(e,t,i,n){return e=Ee(7,e,n,t),e.lanes=i,e}function xa(e,t,i,n){return e=Ee(22,e,n,t),e.elementType=Ts,e.lanes=i,e.stateNode={isHidden:!1},e}function tr(e,t,i){return e=Ee(6,e,null,t),e.lanes=i,e}function ir(e,t,i){return t=Ee(4,e.children!==null?e.children:[],e.key,t),t.lanes=i,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function fp(e,t,i,n,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ia(0),this.expirationTimes=Ia(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ia(0),this.identifierPrefix=n,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Ql(e,t,i,n,a,r,l,o,s){return e=new fp(e,t,i,o,s),t===1?(t=1,r===!0&&(t|=8)):t=0,r=Ee(3,null,null,t),e.current=r,r.stateNode=e,r.memoizedState={element:n,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},Rl(r),e}function pp(e,t,i){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:At,key:n==null?null:""+n,children:e,containerInfo:t,implementation:i}}function Ec(e){if(!e)return vt;e=e._reactInternals;e:{if(Mt(e)!==e||e.tag!==1)throw Error(x(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(me(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(x(171))}if(e.tag===1){var i=e.type;if(me(i))return Eu(e,i,t)}return t}function kc(e,t,i,n,a,r,l,o,s){return e=Ql(i,n,!0,e,a,r,l,o,s),e.context=Ec(null),i=e.current,n=se(),a=dt(i),r=qe(n,a),r.callback=t??null,ut(i,r,a),e.current.lanes=a,nn(e,a,n),ve(e,n),e}function wa(e,t,i,n){var a=t.current,r=se(),l=dt(a);return i=Ec(i),t.context===null?t.context=i:t.pendingContext=i,t=qe(r,l),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=ut(a,t,l),e!==null&&(Me(e,a,l,r),Ln(e,a,l)),l}function sa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function as(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<t?i:t}}function ql(e,t){as(e,t),(e=e.alternate)&&as(e,t)}function mp(){return null}var Cc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Hl(e){this._internalRoot=e}_a.prototype.render=Hl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(x(409));wa(e,t,null,null)};_a.prototype.unmount=Hl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Lt(function(){wa(null,e,null,null)}),t[We]=null}};function _a(e){this._internalRoot=e}_a.prototype.unstable_scheduleHydration=function(e){if(e){var t=nu();e={blockedOn:null,target:e,priority:t};for(var i=0;i<et.length&&t!==0&&t<et[i].priority;i++);et.splice(i,0,e),i===0&&ru(e)}};function Wl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ea(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function rs(){}function vp(e,t,i,n,a){if(a){if(typeof n=="function"){var r=n;n=function(){var u=sa(l);r.call(u)}}var l=kc(t,n,e,0,null,!1,!1,"",rs);return e._reactRootContainer=l,e[We]=l.current,Qi(e.nodeType===8?e.parentNode:e),Lt(),l}for(;a=e.lastChild;)e.removeChild(a);if(typeof n=="function"){var o=n;n=function(){var u=sa(s);o.call(u)}}var s=Ql(e,0,!1,null,null,!1,!1,"",rs);return e._reactRootContainer=s,e[We]=s.current,Qi(e.nodeType===8?e.parentNode:e),Lt(function(){wa(t,s,i,n)}),s}function ka(e,t,i,n,a){var r=i._reactRootContainer;if(r){var l=r;if(typeof a=="function"){var o=a;a=function(){var s=sa(l);o.call(s)}}wa(t,l,e,a)}else l=vp(i,t,e,a,n);return sa(l)}tu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var i=ki(t.pendingLanes);i!==0&&(fl(t,i|1),ve(t,H()),!(T&6)&&(si=H()+500,yt()))}break;case 13:Lt(function(){var n=Ke(e,1);if(n!==null){var a=se();Me(n,e,1,a)}}),ql(e,1)}};pl=function(e){if(e.tag===13){var t=Ke(e,134217728);if(t!==null){var i=se();Me(t,e,134217728,i)}ql(e,134217728)}};iu=function(e){if(e.tag===13){var t=dt(e),i=Ke(e,t);if(i!==null){var n=se();Me(i,e,t,n)}ql(e,t)}};nu=function(){return O};au=function(e,t){var i=O;try{return O=e,t()}finally{O=i}};gr=function(e,t,i){switch(t){case"input":if(cr(e,i),t=i.name,i.type==="radio"&&t!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<i.length;t++){var n=i[t];if(n!==e&&n.form===e.form){var a=va(n);if(!a)throw Error(x(90));Os(n),cr(n,a)}}}break;case"textarea":Fs(e,i);break;case"select":t=i.value,t!=null&&Gt(e,!!i.multiple,t,!1)}};Qs=Vl;qs=Lt;var hp={usingClientEntryPoint:!1,Events:[rn,$t,va,Bs,$s,Vl]},wi={findFiberByHostInstance:_t,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},gp={bundleType:wi.bundleType,version:wi.version,rendererPackageName:wi.rendererPackageName,rendererConfig:wi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ge.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ks(e),e===null?null:e.stateNode},findFiberByHostInstance:wi.findFiberByHostInstance||mp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cn.isDisabled&&Cn.supportsFiber)try{da=Cn.inject(gp),je=Cn}catch{}}Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hp;Se.createPortal=function(e,t){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wl(t))throw Error(x(200));return pp(e,t,null,i)};Se.createRoot=function(e,t){if(!Wl(e))throw Error(x(299));var i=!1,n="",a=Cc;return t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Ql(e,1,!1,null,null,i,!1,n,a),e[We]=t.current,Qi(e.nodeType===8?e.parentNode:e),new Hl(t)};Se.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(x(188)):(e=Object.keys(e).join(","),Error(x(268,e)));return e=Ks(t),e=e===null?null:e.stateNode,e};Se.flushSync=function(e){return Lt(e)};Se.hydrate=function(e,t,i){if(!Ea(t))throw Error(x(200));return ka(null,e,t,!0,i)};Se.hydrateRoot=function(e,t,i){if(!Wl(e))throw Error(x(405));var n=i!=null&&i.hydratedSources||null,a=!1,r="",l=Cc;if(i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(r=i.identifierPrefix),i.onRecoverableError!==void 0&&(l=i.onRecoverableError)),t=kc(t,null,e,1,i??null,a,!1,r,l),e[We]=t.current,Qi(e),n)for(e=0;e<n.length;e++)i=n[e],a=i._getVersion,a=a(i._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[i,a]:t.mutableSourceEagerHydrationData.push(i,a);return new _a(t)};Se.render=function(e,t,i){if(!Ea(t))throw Error(x(200));return ka(null,e,t,!1,i)};Se.unmountComponentAtNode=function(e){if(!Ea(e))throw Error(x(40));return e._reactRootContainer?(Lt(function(){ka(null,null,e,!1,function(){e._reactRootContainer=null,e[We]=null})}),!0):!1};Se.unstable_batchedUpdates=Vl;Se.unstable_renderSubtreeIntoContainer=function(e,t,i,n){if(!Ea(i))throw Error(x(200));if(e==null||e._reactInternals===void 0)throw Error(x(38));return ka(e,t,i,!1,n)};Se.version="18.3.1-next-f1338f8080-20240426";function Rc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Rc)}catch(e){console.error(e)}}Rc(),Rs.exports=Se;var yp=Rs.exports,zc,ls=yp;zc=ls.createRoot,ls.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zi(){return Zi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},Zi.apply(this,arguments)}var at;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(at||(at={}));const os="popstate";function bp(e){e===void 0&&(e={});function t(n,a){let{pathname:r,search:l,hash:o}=n.location;return Gr("",{pathname:r,search:l,hash:o},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function i(n,a){return typeof a=="string"?a:ua(a)}return xp(t,i,null,e)}function K(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Pc(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Sp(){return Math.random().toString(36).substr(2,8)}function ss(e,t){return{usr:e.state,key:e.key,idx:t}}function Gr(e,t,i,n){return i===void 0&&(i=null),Zi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?fi(t):t,{state:i,key:t&&t.key||n||Sp()})}function ua(e){let{pathname:t="/",search:i="",hash:n=""}=e;return i&&i!=="?"&&(t+=i.charAt(0)==="?"?i:"?"+i),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function fi(e){let t={};if(e){let i=e.indexOf("#");i>=0&&(t.hash=e.substr(i),e=e.substr(0,i));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function xp(e,t,i,n){n===void 0&&(n={});let{window:a=document.defaultView,v5Compat:r=!1}=n,l=a.history,o=at.Pop,s=null,u=m();u==null&&(u=0,l.replaceState(Zi({},l.state,{idx:u}),""));function m(){return(l.state||{idx:null}).idx}function p(){o=at.Pop;let _=m(),d=_==null?null:_-u;u=_,s&&s({action:o,location:S.location,delta:d})}function v(_,d){o=at.Push;let c=Gr(S.location,_,d);u=m()+1;let f=ss(c,u),h=S.createHref(c);try{l.pushState(f,"",h)}catch(w){if(w instanceof DOMException&&w.name==="DataCloneError")throw w;a.location.assign(h)}r&&s&&s({action:o,location:S.location,delta:1})}function y(_,d){o=at.Replace;let c=Gr(S.location,_,d);u=m();let f=ss(c,u),h=S.createHref(c);l.replaceState(f,"",h),r&&s&&s({action:o,location:S.location,delta:0})}function b(_){let d=a.location.origin!=="null"?a.location.origin:a.location.href,c=typeof _=="string"?_:ua(_);return c=c.replace(/ $/,"%20"),K(d,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,d)}let S={get action(){return o},get location(){return e(a,l)},listen(_){if(s)throw new Error("A history only accepts one active listener");return a.addEventListener(os,p),s=_,()=>{a.removeEventListener(os,p),s=null}},createHref(_){return t(a,_)},createURL:b,encodeLocation(_){let d=b(_);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:v,replace:y,go(_){return l.go(_)}};return S}var us;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(us||(us={}));function wp(e,t,i){return i===void 0&&(i="/"),_p(e,t,i)}function _p(e,t,i,n){let a=typeof t=="string"?fi(t):t,r=Kl(a.pathname||"/",i);if(r==null)return null;let l=Dc(e);Ep(l);let o=null;for(let s=0;o==null&&s<l.length;++s){let u=Ip(r);o=Tp(l[s],u)}return o}function Dc(e,t,i,n){t===void 0&&(t=[]),i===void 0&&(i=[]),n===void 0&&(n="");let a=(r,l,o)=>{let s={relativePath:o===void 0?r.path||"":o,caseSensitive:r.caseSensitive===!0,childrenIndex:l,route:r};s.relativePath.startsWith("/")&&(K(s.relativePath.startsWith(n),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(n.length));let u=pt([n,s.relativePath]),m=i.concat(s);r.children&&r.children.length>0&&(K(r.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Dc(r.children,t,m,u)),!(r.path==null&&!r.index)&&t.push({path:u,score:Np(u,r.index),routesMeta:m})};return e.forEach((r,l)=>{var o;if(r.path===""||!((o=r.path)!=null&&o.includes("?")))a(r,l);else for(let s of Nc(r.path))a(r,l,s)}),t}function Nc(e){let t=e.split("/");if(t.length===0)return[];let[i,...n]=t,a=i.endsWith("?"),r=i.replace(/\?$/,"");if(n.length===0)return a?[r,""]:[r];let l=Nc(n.join("/")),o=[];return o.push(...l.map(s=>s===""?r:[r,s].join("/"))),a&&o.push(...l),o.map(s=>e.startsWith("/")&&s===""?"/":s)}function Ep(e){e.sort((t,i)=>t.score!==i.score?i.score-t.score:Lp(t.routesMeta.map(n=>n.childrenIndex),i.routesMeta.map(n=>n.childrenIndex)))}const kp=/^:[\w-]+$/,Cp=3,Rp=2,zp=1,Pp=10,Dp=-2,cs=e=>e==="*";function Np(e,t){let i=e.split("/"),n=i.length;return i.some(cs)&&(n+=Dp),t&&(n+=Rp),i.filter(a=>!cs(a)).reduce((a,r)=>a+(kp.test(r)?Cp:r===""?zp:Pp),n)}function Lp(e,t){return e.length===t.length&&e.slice(0,-1).every((n,a)=>n===t[a])?e[e.length-1]-t[t.length-1]:0}function Tp(e,t,i){let{routesMeta:n}=e,a={},r="/",l=[];for(let o=0;o<n.length;++o){let s=n[o],u=o===n.length-1,m=r==="/"?t:t.slice(r.length)||"/",p=Mp({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},m),v=s.route;if(!p)return null;Object.assign(a,p.params),l.push({params:a,pathname:pt([r,p.pathname]),pathnameBase:Vp(pt([r,p.pathnameBase])),route:v}),p.pathnameBase!=="/"&&(r=pt([r,p.pathnameBase]))}return l}function Mp(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[i,n]=Op(e.path,e.caseSensitive,e.end),a=t.match(i);if(!a)return null;let r=a[0],l=r.replace(/(.)\/+$/,"$1"),o=a.slice(1);return{params:n.reduce((u,m,p)=>{let{paramName:v,isOptional:y}=m;if(v==="*"){let S=o[p]||"";l=r.slice(0,r.length-S.length).replace(/(.)\/+$/,"$1")}const b=o[p];return y&&!b?u[v]=void 0:u[v]=(b||"").replace(/%2F/g,"/"),u},{}),pathname:r,pathnameBase:l,pattern:e}}function Op(e,t,i){t===void 0&&(t=!1),i===void 0&&(i=!0),Pc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,o,s)=>(n.push({paramName:o,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(n.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),n]}function Ip(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Pc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Kl(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let i=t.endsWith("/")?t.length-1:t.length,n=e.charAt(i);return n&&n!=="/"?null:e.slice(i)||"/"}function Fp(e,t){t===void 0&&(t="/");let{pathname:i,search:n="",hash:a=""}=typeof e=="string"?fi(e):e;return{pathname:i?i.startsWith("/")?i:Ap(i,t):t,search:Up(n),hash:Bp(a)}}function Ap(e,t){let i=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?i.length>1&&i.pop():a!=="."&&i.push(a)}),i.length>1?i.join("/"):"/"}function nr(e,t,i,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+i+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function jp(e){return e.filter((t,i)=>i===0||t.route.path&&t.route.path.length>0)}function Lc(e,t){let i=jp(e);return t?i.map((n,a)=>a===i.length-1?n.pathname:n.pathnameBase):i.map(n=>n.pathnameBase)}function Tc(e,t,i,n){n===void 0&&(n=!1);let a;typeof e=="string"?a=fi(e):(a=Zi({},e),K(!a.pathname||!a.pathname.includes("?"),nr("?","pathname","search",a)),K(!a.pathname||!a.pathname.includes("#"),nr("#","pathname","hash",a)),K(!a.search||!a.search.includes("#"),nr("#","search","hash",a)));let r=e===""||a.pathname==="",l=r?"/":a.pathname,o;if(l==null)o=i;else{let p=t.length-1;if(!n&&l.startsWith("..")){let v=l.split("/");for(;v[0]==="..";)v.shift(),p-=1;a.pathname=v.join("/")}o=p>=0?t[p]:"/"}let s=Fp(a,o),u=l&&l!=="/"&&l.endsWith("/"),m=(r||l===".")&&i.endsWith("/");return!s.pathname.endsWith("/")&&(u||m)&&(s.pathname+="/"),s}const pt=e=>e.join("/").replace(/\/\/+/g,"/"),Vp=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Up=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Bp=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function $p(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Mc=["post","put","patch","delete"];new Set(Mc);const Qp=["get",...Mc];new Set(Qp);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function en(){return en=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},en.apply(this,arguments)}const Jl=g.createContext(null),qp=g.createContext(null),Ot=g.createContext(null),Ca=g.createContext(null),It=g.createContext({outlet:null,matches:[],isDataRoute:!1}),Oc=g.createContext(null);function Hp(e,t){let{relative:i}=t===void 0?{}:t;on()||K(!1);let{basename:n,navigator:a}=g.useContext(Ot),{hash:r,pathname:l,search:o}=Fc(e,{relative:i}),s=l;return n!=="/"&&(s=l==="/"?n:pt([n,l])),a.createHref({pathname:s,search:o,hash:r})}function on(){return g.useContext(Ca)!=null}function Ra(){return on()||K(!1),g.useContext(Ca).location}function Ic(e){g.useContext(Ot).static||g.useLayoutEffect(e)}function Wp(){let{isDataRoute:e}=g.useContext(It);return e?lm():Kp()}function Kp(){on()||K(!1);let e=g.useContext(Jl),{basename:t,future:i,navigator:n}=g.useContext(Ot),{matches:a}=g.useContext(It),{pathname:r}=Ra(),l=JSON.stringify(Lc(a,i.v7_relativeSplatPath)),o=g.useRef(!1);return Ic(()=>{o.current=!0}),g.useCallback(function(u,m){if(m===void 0&&(m={}),!o.current)return;if(typeof u=="number"){n.go(u);return}let p=Tc(u,JSON.parse(l),r,m.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:pt([t,p.pathname])),(m.replace?n.replace:n.push)(p,m.state,m)},[t,n,l,r,e])}function Fc(e,t){let{relative:i}=t===void 0?{}:t,{future:n}=g.useContext(Ot),{matches:a}=g.useContext(It),{pathname:r}=Ra(),l=JSON.stringify(Lc(a,n.v7_relativeSplatPath));return g.useMemo(()=>Tc(e,JSON.parse(l),r,i==="path"),[e,l,r,i])}function Jp(e,t){return Gp(e,t)}function Gp(e,t,i,n){on()||K(!1);let{navigator:a}=g.useContext(Ot),{matches:r}=g.useContext(It),l=r[r.length-1],o=l?l.params:{};l&&l.pathname;let s=l?l.pathnameBase:"/";l&&l.route;let u=Ra(),m;if(t){var p;let _=typeof t=="string"?fi(t):t;s==="/"||(p=_.pathname)!=null&&p.startsWith(s)||K(!1),m=_}else m=u;let v=m.pathname||"/",y=v;if(s!=="/"){let _=s.replace(/^\//,"").split("/");y="/"+v.replace(/^\//,"").split("/").slice(_.length).join("/")}let b=wp(e,{pathname:y}),S=tm(b&&b.map(_=>Object.assign({},_,{params:Object.assign({},o,_.params),pathname:pt([s,a.encodeLocation?a.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?s:pt([s,a.encodeLocation?a.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),r,i,n);return t&&S?g.createElement(Ca.Provider,{value:{location:en({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:at.Pop}},S):S}function Xp(){let e=rm(),t=$p(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),i=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return g.createElement(g.Fragment,null,g.createElement("h2",null,"Unexpected Application Error!"),g.createElement("h3",{style:{fontStyle:"italic"}},t),i?g.createElement("pre",{style:a},i):null,null)}const Yp=g.createElement(Xp,null);class Zp extends g.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,i){return i.location!==t.location||i.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:i.error,location:i.location,revalidation:t.revalidation||i.revalidation}}componentDidCatch(t,i){console.error("React Router caught the following error during render",t,i)}render(){return this.state.error!==void 0?g.createElement(It.Provider,{value:this.props.routeContext},g.createElement(Oc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function em(e){let{routeContext:t,match:i,children:n}=e,a=g.useContext(Jl);return a&&a.static&&a.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=i.route.id),g.createElement(It.Provider,{value:t},n)}function tm(e,t,i,n){var a;if(t===void 0&&(t=[]),i===void 0&&(i=null),n===void 0&&(n=null),e==null){var r;if(!i)return null;if(i.errors)e=i.matches;else if((r=n)!=null&&r.v7_partialHydration&&t.length===0&&!i.initialized&&i.matches.length>0)e=i.matches;else return null}let l=e,o=(a=i)==null?void 0:a.errors;if(o!=null){let m=l.findIndex(p=>p.route.id&&(o==null?void 0:o[p.route.id])!==void 0);m>=0||K(!1),l=l.slice(0,Math.min(l.length,m+1))}let s=!1,u=-1;if(i&&n&&n.v7_partialHydration)for(let m=0;m<l.length;m++){let p=l[m];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=m),p.route.id){let{loaderData:v,errors:y}=i,b=p.route.loader&&v[p.route.id]===void 0&&(!y||y[p.route.id]===void 0);if(p.route.lazy||b){s=!0,u>=0?l=l.slice(0,u+1):l=[l[0]];break}}}return l.reduceRight((m,p,v)=>{let y,b=!1,S=null,_=null;i&&(y=o&&p.route.id?o[p.route.id]:void 0,S=p.route.errorElement||Yp,s&&(u<0&&v===0?(om("route-fallback"),b=!0,_=null):u===v&&(b=!0,_=p.route.hydrateFallbackElement||null)));let d=t.concat(l.slice(0,v+1)),c=()=>{let f;return y?f=S:b?f=_:p.route.Component?f=g.createElement(p.route.Component,null):p.route.element?f=p.route.element:f=m,g.createElement(em,{match:p,routeContext:{outlet:m,matches:d,isDataRoute:i!=null},children:f})};return i&&(p.route.ErrorBoundary||p.route.errorElement||v===0)?g.createElement(Zp,{location:i.location,revalidation:i.revalidation,component:S,error:y,children:c(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):c()},null)}var Ac=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Ac||{}),jc=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(jc||{});function im(e){let t=g.useContext(Jl);return t||K(!1),t}function nm(e){let t=g.useContext(qp);return t||K(!1),t}function am(e){let t=g.useContext(It);return t||K(!1),t}function Vc(e){let t=am(),i=t.matches[t.matches.length-1];return i.route.id||K(!1),i.route.id}function rm(){var e;let t=g.useContext(Oc),i=nm(),n=Vc();return t!==void 0?t:(e=i.errors)==null?void 0:e[n]}function lm(){let{router:e}=im(Ac.UseNavigateStable),t=Vc(jc.UseNavigateStable),i=g.useRef(!1);return Ic(()=>{i.current=!0}),g.useCallback(function(a,r){r===void 0&&(r={}),i.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,en({fromRouteId:t},r)))},[e,t])}const ds={};function om(e,t,i){ds[e]||(ds[e]=!0)}function sm(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Xr(e){K(!1)}function um(e){let{basename:t="/",children:i=null,location:n,navigationType:a=at.Pop,navigator:r,static:l=!1,future:o}=e;on()&&K(!1);let s=t.replace(/^\/*/,"/"),u=g.useMemo(()=>({basename:s,navigator:r,static:l,future:en({v7_relativeSplatPath:!1},o)}),[s,o,r,l]);typeof n=="string"&&(n=fi(n));let{pathname:m="/",search:p="",hash:v="",state:y=null,key:b="default"}=n,S=g.useMemo(()=>{let _=Kl(m,s);return _==null?null:{location:{pathname:_,search:p,hash:v,state:y,key:b},navigationType:a}},[s,m,p,v,y,b,a]);return S==null?null:g.createElement(Ot.Provider,{value:u},g.createElement(Ca.Provider,{children:i,value:S}))}function cm(e){let{children:t,location:i}=e;return Jp(Yr(t),i)}new Promise(()=>{});function Yr(e,t){t===void 0&&(t=[]);let i=[];return g.Children.forEach(e,(n,a)=>{if(!g.isValidElement(n))return;let r=[...t,a];if(n.type===g.Fragment){i.push.apply(i,Yr(n.props.children,r));return}n.type!==Xr&&K(!1),!n.props.index||!n.props.children||K(!1);let l={id:n.props.id||r.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(l.children=Yr(n.props.children,r)),i.push(l)}),i}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zr(){return Zr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},Zr.apply(this,arguments)}function dm(e,t){if(e==null)return{};var i={},n=Object.keys(e),a,r;for(r=0;r<n.length;r++)a=n[r],!(t.indexOf(a)>=0)&&(i[a]=e[a]);return i}function fm(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function pm(e,t){return e.button===0&&(!t||t==="_self")&&!fm(e)}const mm=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],vm="6";try{window.__reactRouterVersion=vm}catch{}const hm="startTransition",fs=ld[hm];function gm(e){let{basename:t,children:i,future:n,window:a}=e,r=g.useRef();r.current==null&&(r.current=bp({window:a,v5Compat:!0}));let l=r.current,[o,s]=g.useState({action:l.action,location:l.location}),{v7_startTransition:u}=n||{},m=g.useCallback(p=>{u&&fs?fs(()=>s(p)):s(p)},[s,u]);return g.useLayoutEffect(()=>l.listen(m),[l,m]),g.useEffect(()=>sm(n),[n]),g.createElement(um,{basename:t,children:i,location:o.location,navigationType:o.action,navigator:l,future:n})}const ym=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",bm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Sm=g.forwardRef(function(t,i){let{onClick:n,relative:a,reloadDocument:r,replace:l,state:o,target:s,to:u,preventScrollReset:m,viewTransition:p}=t,v=dm(t,mm),{basename:y}=g.useContext(Ot),b,S=!1;if(typeof u=="string"&&bm.test(u)&&(b=u,ym))try{let f=new URL(window.location.href),h=u.startsWith("//")?new URL(f.protocol+u):new URL(u),w=Kl(h.pathname,y);h.origin===f.origin&&w!=null?u=w+h.search+h.hash:S=!0}catch{}let _=Hp(u,{relative:a}),d=xm(u,{replace:l,state:o,target:s,preventScrollReset:m,relative:a,viewTransition:p});function c(f){n&&n(f),f.defaultPrevented||d(f)}return g.createElement("a",Zr({},v,{href:b||_,onClick:S||r?n:c,ref:i,target:s}))});var ps;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(ps||(ps={}));var ms;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(ms||(ms={}));function xm(e,t){let{target:i,replace:n,state:a,preventScrollReset:r,relative:l,viewTransition:o}=t===void 0?{}:t,s=Wp(),u=Ra(),m=Fc(e,{relative:l});return g.useCallback(p=>{if(pm(p,i)){p.preventDefault();let v=n!==void 0?n:ua(u)===ua(m);s(e,{replace:v,state:a,preventScrollReset:r,relative:l,viewTransition:o})}},[u,s,m,n,a,i,e,r,l,o])}function wm(){const e=g.useRef(null);return g.useEffect(()=>{},[]),M.jsx("div",{ref:e,dangerouslySetInnerHTML:{__html:`
<!-- Toast Container -->
<div class="toast-container" id="toast-container"></div>
<!-- Header -->
<header class="header">
<div class="header-content">
<!-- Botão para abrir o menu -->
<button class="menu-toggle" id="menu-toggle">
<i class="fas fa-bars"></i>
</button>
<!-- Embraer Logo -->
<div class="embraer-logo">
<div class="logo-icon">
<!-- ajuste o caminho da imagem conforme seu ambiente -->
<img alt="Logo Embraer" src="assets/embraer-logo.svg" style="height:50px;"/>
</div>
<div class="logo-text"></div>
</div>
<div class="header-actions">
<button class="btn btn-primary btn-pulse" id="add-item-btn">
<i class="fas fa-plus"></i>
                    Anotar Registro
                </button>
</div>
</div>
</header>
<!-- Sidebar -->
<aside class="sidebar">
<button class="close-sidebar" id="close-sidebar">
<i class="fas fa-times"></i>
</button>
<aside class="sidebar" id="sidebar">

<!-- ... resto do conteúdo ... -->
</aside>
<ul class="sidebar-menu">
<!-- Rota -->
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-route"></i> Rota 
                <i class="fas fa-chevron-down dropdown-icon"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/src/rotas/DM/index_dm.html">DM</a></li>
<li><a href="/src/rotas/Sucata/index_sucata.html">Sucata</a></li>
<li><a href="/src/rotas/Reparo/index_reparo.html">Reparo</a></li>
<li><a href="/src/rotas/Sala-climatizada/index_sc.html">Sala Climatizada</a></li>
<li><a href="/src/rotas/Quarentena/index_quarentena.html">Quarentena</a></li>
</ul>
</li>
<!-- MIP -->
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-boxes"></i> MIP
                <i class="fas fa-chevron-down dropdown-icon"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/src/mip/mip_1/index_mip_1.html">1</a></li>
<li><a href="/src/mip/mip_2/index_mip_2.html">2</a></li>
<li><a href="/src/mip/mip_3/index_mip_3.html">3</a></li>
<li><a href="/src/mip/mip_4/index_mip_4.html">4</a></li>
</ul>
</li>
<!-- Freezer -->
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-snowflake"></i> Freezer
                <i class="fas fa-chevron-down dropdown-icon"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/src/freezer/freezer_2/index_freezer_2.html">2</a></li>
<li><a href="/src/freezer/freezer_3/index_freezer_3.html">3</a></li>
</ul>
</li>
<!-- Ponto -->
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-map-marker-alt"></i> Ponto
                <i class="fas fa-chevron-down dropdown-icon"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/src/pontos/163/index_163.html">163</a></li>
<li><a href="/src/pontos/164/index_164.html">164</a></li>
<li><a href="/src/pontos/165/index_165.html">165</a></li>
</ul>
</li>
<!-- PDU -->
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-plug"></i> PDU
            </a>
</li>
</ul>
<!-- Site -->
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-route"></i> Site
                <i class="fa-solid fa-chevron-down"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/index.html">SJK</a></li>
<li><a href="#">SOD</a></li>
<li><a href="#">GPX</a></li>
</ul>
</li>
</aside>
<div class="container">
<!-- Filters -->
<div class="card filters-card">
<div class="card-header">
<h3><i class="fas fa-filter"></i> Filtros</h3>
</div>
<div class="card-content">
<div class="filters-grid">
<div class="filter-group">
<div class="input-with-icon">
<i class="fas fa-search"></i>
<input id="search-input" placeholder="Buscar..." type="text"/>
</div>
</div>
<div class="filter-group">
<select id="status-filter">
<option value="ALL">Todos os Status</option>
<option value="OK">OK</option>
<option value="EM FALTA">EM FALTA</option>
<option value="VENCIDO">VENCIDO</option>
<option value="EM DESCARTE">EM DESCARTE</option>
</select>
</div>
</div>
</div>
</div>
<!-- Table -->
<div class="card table-card">
<div class="table-container">
<table class="stock-table">
<thead>
<tr>
<th>Nome do Produto</th>
<th>ECODE</th>
<th>Quantidade</th>
<th>Verificado por</th>
<th>Status</th>
<th>Motivo de Descarte</th> <!-- NOVO -->
<th>Ações</th>
</tr>
</thead>
<tbody id="stock-table-body"></tbody>
</table>
<div class="no-items" id="no-items-message" style="display: none;">
                    Nenhum item encontrado
                </div>
</div>
</div>
<!-- Pagination -->
<div class="pagination">
<div class="pagination-info">
<span id="items-count">Exibindo 0 de 0 itens</span>
</div>
<div class="pagination-controls">
<button class="btn btn-outline btn-sm">Anterior</button>
<button class="btn btn-outline btn-sm">1</button>
<button class="btn btn-outline btn-sm">Próximo</button>
</div>
</div>
</div>
<!-- Add/Edit Item Modal -->
<div class="modal" id="item-modal">
<div class="modal-content">
<div class="modal-header">
<h3 id="modal-title">Anotar Novo Registro</h3>
<button class="modal-close" id="close-modal-btn" type="button">
<i class="fas fa-times"></i>
</button>
</div>
<div class="modal-body">
<p class="modal-description" id="modal-description">Adicione um novo registro ao estoque preenchendo as informações abaixo.</p>
<form id="item-form">
<!-- Informações Básicas -->
<div class="form-section">
<h4>Informações Básicas</h4>
<div class="form-grid">
<!-- Nome do Material -->
<div class="form-group">
<label for="material-name">PN</label>
<select class="form-control" id="material-name" required="">
<option value="">Selecione um PN</option>
<!-- opções serão preenchidas via JavaScript -->
</select>
</div>
<!-- ECODE -->
<div class="form-group">
<label for="material-id">ECODE</label>
<select class="form-control" id="material-id" required="">
<option value="">Selecione o ECODE</option>
<!-- opções serão preenchidas via JavaScript -->
</select>
</div>
<!-- Descrição -->
<div class="form-group">
<label for="material-desc">Descrição</label>
<select class="form-control" id="material-desc" required="">
<option value="">Selecione a descrição</option>
<!-- opções serão preenchidas via JavaScript -->
</select>
</div>
</div>
</div>
<!-- Informações Complementares -->
<div class="form-section">
<h4>Informações Complementares</h4>
<div class="form-grid">
<!-- Localização no Estoque -->
<div class="form-group">
<label for="location">Localização no Estoque</label>
<select class="form-control" id="location" required="">
<option value="">Selecione a localização</option>
<option value="Bandeja 1">Bandeja 1</option>
<option value="Bandeja 2">Bandeja 2</option>
<option value="Freezer 1">Freezer 1</option>
<option value="Freezer 2">Freezer 2</option>
<option value="Freezer 3">Freezer 3</option>
</select>
</div>
<!-- Motivo de Descarte -->
<div class="form-group">
<label for="discard-reason">Motivo de Descarte</label>
<select id="discard-reason">
<option value="">Selecione o motivo</option>
<option value="Nenhum Uso">Nenhum Uso</option>
<option value="Total">Uso Total</option>
<option value="Validade Vencida">Validade Vencida</option>
</select>
</div>
<!-- Data de Verificação -->
<div class="form-group">
<label for="verification-date">Data de Verificação</label>
<input id="verification-date" required="" type="date"/>
</div>
<!-- Data de Validade -->
<div class="form-group">
<label for="expiry-date">Data de Validade</label>
<input id="expiry-date" type="date"/>
</div>
</div>
<!-- Responsável pelo Cadastro -->
<div class="form-group form-group-full">
<label for="responsible">Responsável pelo Registro</label>
<select class="form-control" id="responsible" required="">
<option value="">Selecione o responsável</option>
<option value="Glauco">Glauco</option>
<option value="Lucas Santos">Lucas Santos</option>
<option value="Jean">Jean</option>
</select>
</div>
<div class="form-group">
<label for="quantity">Quantidade</label>
<input id="quantity" min="1" required="" type="number" value="1"/>
</div>
<div class="form-group">
<label for="status">Status *</label>
<select id="status" required="">
<option value="OK">OK</option>
<option value="EM FALTA">EM FALTA</option>
<option value="VENCIDO">VENCIDO</option>
<option value="EM DESCARTE">EM DESCARTE</option>
</select>
</div>
</div>
</form>
<div class="modal-footer">
<button class="btn btn-outline" id="cancel-modal-btn" type="button">Cancelar</button>
<button class="btn btn-outline" id="clear-form-btn" type="button">
<i class="fas fa-undo"></i>
                    Limpar
                </button>
<!-- importante: type="button" para não submeter o form -->
<button class="btn btn-primary" id="save-item-btn" type="button">
<i class="fas fa-save"></i>
                    Salvar
                </button>
</div>
</div>
</div>
&lt;!-- script omitido: movido para /public/static/js --&gt;
</div>`}})}function _m(){const e=g.useRef(null);return g.useEffect(()=>{},[]),M.jsx("div",{ref:e,dangerouslySetInnerHTML:{__html:`
<!-- Toast Container -->
<div class="toast-container" id="toast-container"></div>
<!-- Header -->
<header class="header">
<div class="header-content">
<!-- Botão para abrir o menu -->
<button class="menu-toggle" id="menu-toggle">
<i class="fas fa-bars"></i>
</button>
<!-- Embraer Logo -->
<div class="embraer-logo">
<a aria-label="Ir para página principal" class="logo-link" href="/index.html">
<img alt="Logo Embraer" src="../../../assets/embraer-logo.svg" style="height:50px;"/>
</a>
</div>
<div class="header-actions">
<button class="btn btn-primary btn-pulse" id="add-item-btn">
<i class="fas fa-plus"></i>
                    Anotar Registro
                </button>
</div>
</div>
</header>
<!-- Sidebar -->
<aside class="sidebar">
<button class="close-sidebar" id="close-sidebar">
<i class="fas fa-times"></i>
</button>
<aside class="sidebar" id="sidebar">

<!-- ... resto do conteúdo ... -->
</aside>
<ul class="sidebar-menu">
<!-- Rota -->
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-route"></i> Rota 
                <i class="fas fa-chevron-down dropdown-icon"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/src/rotas/DM/index_dm.html">DM</a></li>
<li><a href="/src/rotas/Sucata/index_sucata.html">Sucata</a></li>
<li><a href="/src/rotas/Reparo/index_reparo.html">Reparo</a></li>
<li><a href="/src/rotas/Sala-climatizada/index_sc.html">Sala Climatizada</a></li>
<li><a href="/src/rotas/Quarentena/index_quarentena.html">Quarentena</a></li>
</ul>
</li>
<!-- MIP -->
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-boxes"></i> MIP
                <i class="fas fa-chevron-down dropdown-icon"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/src/mip/mip_1/index_mip_1.html">1</a></li>
<li><a href="/src/mip/mip_2/index_mip_2.html">2</a></li>
<li><a href="/src/mip/mip_3/index_mip_3.html">3</a></li>
<li><a href="/src/mip/mip_4/index_mip_4.html">4</a></li>
</ul>
</li>
<!-- Freezer -->
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-snowflake"></i> Freezer
                <i class="fas fa-chevron-down dropdown-icon"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/src/freezer/freezer_2/index_freezer_2.html">2</a></li>
<li><a href="/src/freezer/freezer_3/index_freezer_3.html">3</a></li>
</ul>
</li>
<!-- Ponto -->
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-map-marker-alt"></i> Ponto
                <i class="fas fa-chevron-down dropdown-icon"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/src/pontos/163/index_163.html">163</a></li>
<li><a href="/src/pontos/164/index_164.html">164</a></li>
<li><a href="/src/pontos/165/index_165.html">165</a></li>
</ul>
</li>
<!-- PDU -->
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-plug"></i> PDU
            </a>
</li>
</ul>
<!-- Site -->
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-route"></i> Site
                <i class="fa-solid fa-chevron-down"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/index.html">SJK</a></li>
<li><a href="#">SOD</a></li>
<li><a href="#">GPX</a></li>
</ul>
</li>
</aside>
<!-- Estatísticas de Registros -->
<div class="stats-cards">
<!-- Em Falta -->
<div class="stat-card em-falta">
<div class="stat-icon">
<i class="fas fa-box-open"></i>
</div>
<div class="stat-info">
<h4>Em Falta</h4>
<p id="missing-count">12</p>
</div>
</div>
<!-- Vencidos -->
<div class="stat-card vencidos">
<div class="stat-icon">
<i class="fas fa-exclamation-triangle"></i>
</div>
<div class="stat-info">
<h4>Vencidos</h4>
<p id="expired-count">5</p>
</div>
</div>
<!-- Ok -->
<div class="stat-card ok">
<div class="stat-icon">
<i class="fas fa-check-circle"></i>
</div>
<div class="stat-info">
<h4>Ok</h4>
<p id="ok-count">40</p>
</div>
</div>
<!-- Em Descarte -->
<div class="stat-card descarte">
<div class="stat-icon">
<i class="fas fa-trash-alt"></i>
</div>
<div class="stat-info">
<h4>Em Descarte</h4>
<p id="discard-count">3</p>
</div>
</div>
</div>
<div class="container">
<!-- Filters -->
<div class="card filters-card">
<div class="card-header">
<h3><i class="fas fa-filter"></i> Filtros</h3>
</div>
<div class="card-content">
<div class="filters-grid">
<div class="filter-group">
<div class="input-with-icon">
<i class="fas fa-search"></i>
<input id="search-input" placeholder="Buscar..." type="text"/>
</div>
</div>
<div class="filter-group">
<select id="status-filter">
<option value="ALL">Todos os Status</option>
<option value="OK">OK</option>
<option value="EM FALTA">EM FALTA</option>
<option value="VENCIDO">VENCIDO</option>
<option value="EM DESCARTE">EM DESCARTE</option>
</select>
</div>
</div>
</div>
</div>
<!-- Table -->
<div class="card table-card">
<div class="table-container">
<table class="stock-table">
<thead>
<tr>
<th>Nome do Produto</th>
<th>ECODE</th>
<th>Quantidade</th>
<th>Verificado por</th>
<th>Status</th>
<th>Motivo de Descarte</th> <!-- NOVO -->
<th>Ações</th>
</tr>
</thead>
<tbody id="stock-table-body"></tbody>
</table>
<div class="no-items" id="no-items-message" style="display: none;">
                    Nenhum item encontrado
                </div>
</div>
</div>
<!-- Pagination -->
<div class="pagination">
<div class="pagination-info">
<span id="items-count">Exibindo 0 de 0 itens</span>
</div>
<div class="pagination-controls">
<button class="btn btn-outline btn-sm">Anterior</button>
<button class="btn btn-outline btn-sm">1</button>
<button class="btn btn-outline btn-sm">Próximo</button>
</div>
</div>
</div>
<!-- Add/Edit Item Modal -->
<div class="modal" id="item-modal">
<div class="modal-content">
<div class="modal-header">
<h3 id="modal-title">Anotar Novo Registro</h3>
<button class="modal-close" id="close-modal-btn" type="button">
<i class="fas fa-times"></i>
</button>
</div>
<div class="modal-body">
<p class="modal-description" id="modal-description">Adicione um novo registro ao estoque preenchendo as informações abaixo.</p>
<form id="item-form">
<!-- Informações Básicas -->
<div class="form-section">
<h4>Informações Básicas</h4>
<div class="form-grid">
<!-- Nome do Material -->
<div class="form-group">
<label for="material-name">PN</label>
<select class="form-control" id="material-name" required="">
<option value="">Selecione um PN</option>
<!-- opções serão preenchidas via JavaScript -->
</select>
</div>
<!-- ECODE -->
<div class="form-group">
<label for="material-id">ECODE</label>
<select class="form-control" id="material-id" required="">
<option value="">Selecione o ECODE</option>
<!-- opções serão preenchidas via JavaScript -->
</select>
</div>
<!-- Descrição -->
<div class="form-group">
<label for="material-desc">Descrição</label>
<select class="form-control" id="material-desc" required="">
<option value="">Selecione a descrição</option>
<!-- opções serão preenchidas via JavaScript -->
</select>
</div>
</div>
</div>
<!-- Informações Complementares -->
<div class="form-section">
<h4>Informações Complementares</h4>
<div class="form-grid">
<!-- Localização no Estoque -->
<div class="form-group">
<label for="location">Localização no Estoque</label>
<select class="form-control" id="location" required="">
<option value="">Selecione a localização</option>
<option value="Bandeja 1">Bandeja 1</option>
<option value="Bandeja 2">Bandeja 2</option>
<option value="Freezer 1">Freezer 1</option>
<option value="Freezer 2">Freezer 2</option>
<option value="Freezer 3">Freezer 3</option>
</select>
</div>
<!-- Motivo de Descarte -->
<div class="form-group">
<label for="discard-reason">Motivo de Descarte</label>
<select id="discard-reason">
<option value="">Selecione o motivo</option>
<option value="Nenhum Uso">Nenhum Uso</option>
<option value="Total">Uso Total</option>
<option value="Validade Vencida">Validade Vencida</option>
</select>
</div>
<!-- Data de Verificação -->
<div class="form-group">
<label for="verification-date">Data de Verificação</label>
<input id="verification-date" required="" type="date"/>
</div>
<!-- Data de Validade -->
<div class="form-group">
<label for="expiry-date">Data de Validade</label>
<input id="expiry-date" type="date"/>
</div>
</div>
<!-- Responsável pelo Cadastro -->
<div class="form-group form-group-full">
<label for="responsible">Responsável pelo Registro</label>
<select class="form-control" id="responsible" required="">
<option value="">Selecione o responsável</option>
<option value="Glauco">Glauco</option>
<option value="Lucas Santos">Lucas Santos</option>
<option value="Jean">Jean</option>
</select>
</div>
<div class="form-group">
<label for="quantity">Quantidade</label>
<input id="quantity" min="1" required="" type="number" value="1"/>
</div>
<div class="form-group">
<label for="status">Status *</label>
<select id="status" required="">
<option value="OK">OK</option>
<option value="EM FALTA">EM FALTA</option>
<option value="VENCIDO">VENCIDO</option>
<option value="EM DESCARTE">EM DESCARTE</option>
</select>
</div>
</div>
</form>
<div class="modal-footer">
<button class="btn btn-outline" id="cancel-modal-btn" type="button">Cancelar</button>
<button class="btn btn-outline" id="clear-form-btn" type="button">
<i class="fas fa-undo"></i>
                    Limpar
                </button>
<!-- importante: type="button" para não submeter o form -->
<button class="btn btn-primary" id="save-item-btn" type="button">
<i class="fas fa-save"></i>
                    Salvar
                </button>
</div>
</div>
</div>
&lt;!-- script omitido: movido para /public/static/js --&gt;
</div>`}})}function Em(){const e=g.useRef(null);return g.useEffect(()=>{},[]),M.jsx("div",{ref:e,dangerouslySetInnerHTML:{__html:`
<!-- Toast Container -->
<div class="toast-container" id="toast-container"></div>
<!-- Header -->
<header class="header">
<div class="header-content">
<!-- Botão para abrir o menu -->
<button class="menu-toggle" id="menu-toggle">
<i class="fas fa-bars"></i>
</button>
<!-- Embraer Logo -->
<div class="embraer-logo">
<a aria-label="Ir para página principal" class="logo-link" href="/index.html">
<img alt="Logo Embraer" src="../../../assets/embraer-logo.svg" style="height:50px;"/>
</a>
</div>
<div class="header-actions">
<button class="btn btn-primary btn-pulse" id="add-item-btn">
<i class="fas fa-plus"></i>
                    Anotar Registro
                </button>
</div>
</div>
</header>
<!-- Sidebar -->
<aside class="sidebar">
<button class="close-sidebar" id="close-sidebar">
<i class="fas fa-times"></i>
</button>
<aside class="sidebar" id="sidebar">

<!-- ... resto do conteúdo ... -->
</aside>
<ul class="sidebar-menu">
<!-- Rota -->
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-route"></i> Rota 
                <i class="fas fa-chevron-down dropdown-icon"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/src/rotas/DM/index_dm.html">DM</a></li>
<li><a href="/src/rotas/Sucata/index_sucata.html">Sucata</a></li>
<li><a href="/src/rotas/Reparo/index_reparo.html">Reparo</a></li>
<li><a href="/src/rotas/Sala-climatizada/index_sc.html">Sala Climatizada</a></li>
<li><a href="/src/rotas/Quarentena/index_quarentena.html">Quarentena</a></li>
</ul>
</li>
<!-- MIP -->
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-boxes"></i> MIP
                <i class="fas fa-chevron-down dropdown-icon"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/src/mip/mip_1/index_mip_1.html">1</a></li>
<li><a href="/src/mip/mip_2/index_mip_2.html">2</a></li>
<li><a href="/src/mip/mip_3/index_mip_3.html">3</a></li>
<li><a href="/src/mip/mip_4/index_mip_4.html">4</a></li>
</ul>
</li>
<!-- Freezer -->
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-snowflake"></i> Freezer
                <i class="fas fa-chevron-down dropdown-icon"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/src/freezer/freezer_2/index_freezer_2.html">2</a></li>
<li><a href="/src/freezer/freezer_3/index_freezer_3.html">3</a></li>
</ul>
</li>
<!-- Ponto -->
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-map-marker-alt"></i> Ponto
                <i class="fas fa-chevron-down dropdown-icon"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/src/pontos/163/index_163.html">163</a></li>
<li><a href="/src/pontos/164/index_164.html">164</a></li>
<li><a href="/src/pontos/165/index_165.html">165</a></li>
</ul>
</li>
<!-- PDU -->
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-plug"></i> PDU
            </a>
</li>
</ul>
<!-- Site -->
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-route"></i> Site
                <i class="fa-solid fa-chevron-down"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/index.html">SJK</a></li>
<li><a href="#">SOD</a></li>
<li><a href="#">GPX</a></li>
</ul>
</li>
</aside>
<!-- Estatísticas de Registros -->
<div class="stats-cards">
<!-- Em Falta -->
<div class="stat-card em-falta">
<div class="stat-icon">
<i class="fas fa-box-open"></i>
</div>
<div class="stat-info">
<h4>Em Falta</h4>
<p id="missing-count">12</p>
</div>
</div>
<!-- Vencidos -->
<div class="stat-card vencidos">
<div class="stat-icon">
<i class="fas fa-exclamation-triangle"></i>
</div>
<div class="stat-info">
<h4>Vencidos</h4>
<p id="expired-count">5</p>
</div>
</div>
<!-- Ok -->
<div class="stat-card ok">
<div class="stat-icon">
<i class="fas fa-check-circle"></i>
</div>
<div class="stat-info">
<h4>Ok</h4>
<p id="ok-count">40</p>
</div>
</div>
<!-- Em Descarte -->
<div class="stat-card descarte">
<div class="stat-icon">
<i class="fas fa-trash-alt"></i>
</div>
<div class="stat-info">
<h4>Em Descarte</h4>
<p id="discard-count">3</p>
</div>
</div>
</div>
<div class="container">
<!-- Filters -->
<div class="card filters-card">
<div class="card-header">
<h3><i class="fas fa-filter"></i> Filtros</h3>
</div>
<div class="card-content">
<div class="filters-grid">
<div class="filter-group">
<div class="input-with-icon">
<i class="fas fa-search"></i>
<input id="search-input" placeholder="Buscar..." type="text"/>
</div>
</div>
<div class="filter-group">
<select id="status-filter">
<option value="ALL">Todos os Status</option>
<option value="OK">OK</option>
<option value="EM FALTA">EM FALTA</option>
<option value="VENCIDO">VENCIDO</option>
<option value="EM DESCARTE">EM DESCARTE</option>
</select>
</div>
</div>
</div>
</div>
<!-- Table -->
<div class="card table-card">
<div class="table-container">
<table class="stock-table">
<thead>
<tr>
<th>Nome do Produto</th>
<th>ECODE</th>
<th>Quantidade</th>
<th>Verificado por</th>
<th>Status</th>
<th>Motivo de Descarte</th> <!-- NOVO -->
<th>Ações</th>
</tr>
</thead>
<tbody id="stock-table-body"></tbody>
</table>
<div class="no-items" id="no-items-message" style="display: none;">
                    Nenhum item encontrado
                </div>
</div>
</div>
<!-- Pagination -->
<div class="pagination">
<div class="pagination-info">
<span id="items-count">Exibindo 0 de 0 itens</span>
</div>
<div class="pagination-controls">
<button class="btn btn-outline btn-sm">Anterior</button>
<button class="btn btn-outline btn-sm">1</button>
<button class="btn btn-outline btn-sm">Próximo</button>
</div>
</div>
</div>
<!-- Add/Edit Item Modal -->
<div class="modal" id="item-modal">
<div class="modal-content">
<div class="modal-header">
<h3 id="modal-title">Anotar Novo Registro</h3>
<button class="modal-close" id="close-modal-btn" type="button">
<i class="fas fa-times"></i>
</button>
</div>
<div class="modal-body">
<p class="modal-description" id="modal-description">Adicione um novo registro ao estoque preenchendo as informações abaixo.</p>
<form id="item-form">
<!-- Informações Básicas -->
<div class="form-section">
<h4>Informações Básicas</h4>
<div class="form-grid">
<!-- Nome do Material -->
<div class="form-group">
<label for="material-name">PN</label>
<select class="form-control" id="material-name" required="">
<option value="">Selecione um PN</option>
<!-- opções serão preenchidas via JavaScript -->
</select>
</div>
<!-- ECODE -->
<div class="form-group">
<label for="material-id">ECODE</label>
<select class="form-control" id="material-id" required="">
<option value="">Selecione o ECODE</option>
<!-- opções serão preenchidas via JavaScript -->
</select>
</div>
<!-- Descrição -->
<div class="form-group">
<label for="material-desc">Descrição</label>
<select class="form-control" id="material-desc" required="">
<option value="">Selecione a descrição</option>
<!-- opções serão preenchidas via JavaScript -->
</select>
</div>
</div>
</div>
<!-- Informações Complementares -->
<div class="form-section">
<h4>Informações Complementares</h4>
<div class="form-grid">
<!-- Localização no Estoque -->
<div class="form-group">
<label for="location">Localização no Estoque</label>
<select class="form-control" id="location" required="">
<option value="">Selecione a localização</option>
<option value="Bandeja 1">Bandeja 1</option>
<option value="Bandeja 2">Bandeja 2</option>
<option value="Freezer 1">Freezer 1</option>
<option value="Freezer 2">Freezer 2</option>
<option value="Freezer 3">Freezer 3</option>
</select>
</div>
<!-- Motivo de Descarte -->
<div class="form-group">
<label for="discard-reason">Motivo de Descarte</label>
<select id="discard-reason">
<option value="">Selecione o motivo</option>
<option value="Nenhum Uso">Nenhum Uso</option>
<option value="Total">Uso Total</option>
<option value="Validade Vencida">Validade Vencida</option>
</select>
</div>
<!-- Data de Verificação -->
<div class="form-group">
<label for="verification-date">Data de Verificação</label>
<input id="verification-date" required="" type="date"/>
</div>
<!-- Data de Validade -->
<div class="form-group">
<label for="expiry-date">Data de Validade</label>
<input id="expiry-date" type="date"/>
</div>
</div>
<!-- Responsável pelo Cadastro -->
<div class="form-group form-group-full">
<label for="responsible">Responsável pelo Registro</label>
<select class="form-control" id="responsible" required="">
<option value="">Selecione o responsável</option>
<option value="Glauco">Glauco</option>
<option value="Lucas Santos">Lucas Santos</option>
<option value="Jean">Jean</option>
</select>
</div>
<div class="form-group">
<label for="quantity">Quantidade</label>
<input id="quantity" min="1" required="" type="number" value="1"/>
</div>
<div class="form-group">
<label for="status">Status *</label>
<select id="status" required="">
<option value="OK">OK</option>
<option value="EM FALTA">EM FALTA</option>
<option value="VENCIDO">VENCIDO</option>
<option value="EM DESCARTE">EM DESCARTE</option>
</select>
</div>
</div>
</form>
<div class="modal-footer">
<button class="btn btn-outline" id="cancel-modal-btn" type="button">Cancelar</button>
<button class="btn btn-outline" id="clear-form-btn" type="button">
<i class="fas fa-undo"></i>
                    Limpar
                </button>
<!-- importante: type="button" para não submeter o form -->
<button class="btn btn-primary" id="save-item-btn" type="button">
<i class="fas fa-save"></i>
                    Salvar
                </button>
</div>
</div>
</div>
&lt;!-- script omitido: movido para /public/static/js --&gt;
</div>`}})}function km(){const e=g.useRef(null);return g.useEffect(()=>{},[]),M.jsx("div",{ref:e,dangerouslySetInnerHTML:{__html:`
<!-- Vídeo de fundo -->
<div class="video-background">
<video autoplay="" id="bgVideo" loop="" muted="" playsinline="" preload="metadata">
<source src="../../assets/teste-fundo.mp4" type="video/mp4"/>
            Seu navegador não suporta vídeo HTML5.
        </video>
</div>
<!-- Camada escura sobre o vídeo -->
<div class="dark-overlay"></div>
<!-- Login Background -->
<div class="login-background">
<div class="radar-circles">
<div class="radar-circle radar-circle-1"></div>
<div class="radar-circle radar-circle-2"></div>
<div class="radar-circle radar-circle-3"></div>
</div>
<div class="flying-dots">
<div class="flying-dot flying-dot-1"></div>
<div class="flying-dot flying-dot-2"></div>
<div class="flying-dot flying-dot-3"></div>
<div class="flying-dot flying-dot-4"></div>
<div class="flying-dot flying-dot-5"></div>
</div>
<div class="grid-pattern"></div>
</div>
<!-- Flight Info -->
<div class="flight-info">
<div class="flight-info-card">
<h3>Status</h3>
<div class="flight-info-items">
<div class="flight-info-item">
<svg class="icon" fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="10"></circle>
<polyline points="12,6 12,12 16,14"></polyline>
</svg>
<span id="utc-time">UTC: 10:34</span>
</div>
<div class="flight-info-item">
<svg class="icon" fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24">
<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
<span id="city-name">São José dos Campos</span>
</div>
<div class="flight-info-item">
<svg class="icon" fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24">
<path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"></path>
</svg>
<span id="temperature">24°C</span>
</div>
</div>
<div class="flight-status">
<span class="status-label">Status:</span>
<span class="status-value">Ready for Takeoff</span>
</div>
</div>
</div>
<!-- Main Content -->
<div class="main-content">
<div class="login-container">
<div class="embraer-logo" style="text-align:center; margin-top:8px; margin-left: -40px;">
<div class="logo-icon-container" style="display:inline-block;">
<div class="logo-icon no-bg">
<img alt="Embraer" class="embraer-main-logo" src="../../assets/embraer-logo.svg" style="width:220px; display:block; margin:0 auto;"/>
</div>
<div aria-hidden="true" class="logo-glow"></div>
</div>
<div class="logo-text" style="text-align:center; margin-top:8px; margin-right: -40px;">
<p style="font-size:14px; font-weight:600; letter-spacing:2px; margin:0;">MRO BRASIL</p>
</div>
</div>
<!-- Login Form -->
<div class="login-form-container">
<div class="login-form-card">
<div class="glassmorphism-effect"></div>
<div class="animated-border"></div>
<div class="form-content">
<div class="form-header">
<h2>Faça o seu Login</h2>
<p>Insira suas credenciais para continuar</p>
</div>
<form class="login-form" id="loginForm">
<div class="form-group">
<label for="email">Email</label>
<div class="input-container">
<svg class="input-icon" fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24">
<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
<polyline points="22,6 12,13 2,6"></polyline>
</svg>
<input id="email" placeholder="usuario@embraer.com.br" required="" type="email"/>
</div>
</div>
<div class="form-group">
<label for="password">Senha</label>
<div class="input-container">
<svg class="input-icon" fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24">
<rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
<input id="password" placeholder="••••••••" required="" type="password"/>
<button class="password-toggle" id="passwordToggle" type="button">
<svg class="eye-icon" fill="none" id="eyeIcon" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24">
<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
<svg class="eye-off-icon hidden" fill="none" id="eyeOffIcon" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24">
<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"></path>
<path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"></path>
<path d="M14.12 14.12a3 3 0 1 1-4.24-4.24"></path>
<line x1="1" x2="23" y1="1" y2="23"></line>
</svg>
</button>
</div>
</div>
<div class="form-options">
<label class="checkbox-label">
<input id="remember" type="checkbox"/>
<span class="checkmark"></span>
                                    Lembrar-me
                                </label>
<a class="forgot-password" href="#">Esqueceu a senha?</a>
</div>
<button class="login-button" id="loginButton" type="submit">
<div class="button-content" id="buttonContent">
<span>Entrar</span>
<svg class="arrow-icon" fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24">
<line x1="5" x2="19" y1="12" y2="12"></line>
<polyline points="12,5 19,12 12,19"></polyline>
</svg>
</div>
<div class="loading-content hidden" id="loadingContent">
<div class="spinner"></div>
<span>Authenticating...</span>
</div>
<div class="button-glow"></div>
</button>
</form>
<div class="form-footer">
<p>
                                Precisa de acesso? Entre em contato com seu 
                                <a href="#">Gerente</a>
</p>
</div>
</div>
</div>
</div>
</div>
</div>
<!-- Script Login -->
&lt;!-- script omitido: movido para /public/static/js --&gt;
&lt;!-- script omitido: movido para /public/static/js --&gt;
`}})}function Cm(){const e=g.useRef(null);return g.useEffect(()=>{},[]),M.jsx("div",{ref:e,dangerouslySetInnerHTML:{__html:`
<!-- Toast Container -->
<div class="toast-container" id="toast-container"></div>
<!-- Header -->
<header class="header">
<div class="header-content">
<!-- Botão para abrir o menu -->
<button class="menu-toggle" id="menu-toggle">
<i class="fas fa-bars"></i>
</button>
<!-- Embraer Logo -->
<div class="embraer-logo">
<a aria-label="Ir para página principal" class="logo-link" href="/index.html">
<img alt="Logo Embraer" src="../../../assets/embraer-logo.svg" style="height:50px;"/>
</a>
</div>
<div class="header-actions">
<button class="btn btn-primary btn-pulse" id="add-item-btn">
<i class="fas fa-plus"></i>
                    Anotar Registro
                </button>
</div>
</div>
</header>
<!-- Sidebar -->
<aside class="sidebar">
<button class="close-sidebar" id="close-sidebar">
<i class="fas fa-times"></i>
</button>
<aside class="sidebar" id="sidebar">

<!-- ... resto do conteúdo ... -->
</aside>
<ul class="sidebar-menu">
<!-- Rota -->
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-route"></i> Rota 
                <i class="fas fa-chevron-down dropdown-icon"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/src/rotas/DM/index_dm.html">DM</a></li>
<li><a href="/src/rotas/Sucata/index_sucata.html">Sucata</a></li>
<li><a href="/src/rotas/Reparo/index_reparo.html">Reparo</a></li>
<li><a href="/src/rotas/Sala-climatizada/index_sc.html">Sala Climatizada</a></li>
<li><a href="/src/rotas/Quarentena/index_quarentena.html">Quarentena</a></li>
</ul>
</li>
<!-- MIP -->
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-boxes"></i> MIP
                <i class="fas fa-chevron-down dropdown-icon"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/src/mip/mip_1/index_mip_1.html">1</a></li>
<li><a href="/src/mip/mip_2/index_mip_2.html">2</a></li>
<li><a href="/src/mip/mip_3/index_mip_3.html">3</a></li>
<li><a href="/src/mip/mip_4/index_mip_4.html">4</a></li>
</ul>
</li>
<!-- Freezer -->
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-snowflake"></i> Freezer
                <i class="fas fa-chevron-down dropdown-icon"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/src/freezer/freezer_2/index_freezer_2.html">2</a></li>
<li><a href="/src/freezer/freezer_3/index_freezer_3.html">3</a></li>
</ul>
</li>
<!-- Ponto -->
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-map-marker-alt"></i> Ponto
                <i class="fas fa-chevron-down dropdown-icon"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/src/pontos/163/index_163.html">163</a></li>
<li><a href="/src/pontos/164/index_164.html">164</a></li>
<li><a href="/src/pontos/165/index_165.html">165</a></li>
</ul>
</li>
<!-- PDU -->
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-plug"></i> PDU
            </a>
</li>
</ul>
<!-- Site -->
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-route"></i> Site
                <i class="fa-solid fa-chevron-down"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/index.html">SJK</a></li>
<li><a href="#">SOD</a></li>
<li><a href="#">GPX</a></li>
</ul>
</li>
</aside>
<!-- Estatísticas de Registros -->
<div class="stats-cards">
<!-- Em Falta -->
<div class="stat-card em-falta">
<div class="stat-icon">
<i class="fas fa-box-open"></i>
</div>
<div class="stat-info">
<h4>Em Falta</h4>
<p id="missing-count">12</p>
</div>
</div>
<!-- Vencidos -->
<div class="stat-card vencidos">
<div class="stat-icon">
<i class="fas fa-exclamation-triangle"></i>
</div>
<div class="stat-info">
<h4>Vencidos</h4>
<p id="expired-count">5</p>
</div>
</div>
<!-- Ok -->
<div class="stat-card ok">
<div class="stat-icon">
<i class="fas fa-check-circle"></i>
</div>
<div class="stat-info">
<h4>Ok</h4>
<p id="ok-count">40</p>
</div>
</div>
<!-- Em Descarte -->
<div class="stat-card descarte">
<div class="stat-icon">
<i class="fas fa-trash-alt"></i>
</div>
<div class="stat-info">
<h4>Em Descarte</h4>
<p id="discard-count">3</p>
</div>
</div>
</div>
<div class="container">
<!-- Filters -->
<div class="card filters-card">
<div class="card-header">
<h3><i class="fas fa-filter"></i> Filtros</h3>
</div>
<div class="card-content">
<div class="filters-grid">
<div class="filter-group">
<div class="input-with-icon">
<i class="fas fa-search"></i>
<input id="search-input" placeholder="Buscar..." type="text"/>
</div>
</div>
<div class="filter-group">
<select id="status-filter">
<option value="ALL">Todos os Status</option>
<option value="OK">OK</option>
<option value="EM FALTA">EM FALTA</option>
<option value="VENCIDO">VENCIDO</option>
<option value="EM DESCARTE">EM DESCARTE</option>
</select>
</div>
</div>
</div>
</div>
<!-- Table -->
<div class="card table-card">
<div class="table-container">
<table class="stock-table">
<thead>
<tr>
<th>PN</th>
<th>ECODE</th>
<th>Quantidade</th>
<th>Verificado por</th>
<th>Status</th>
<th>Motivo de Descarte</th> <!-- NOVO -->
<th>Ações</th>
</tr>
</thead>
<tbody id="stock-table-body"></tbody>
</table>
<div class="no-items" id="no-items-message" style="display: none;">
                    Nenhum item encontrado
                </div>
</div>
</div>
<!-- Pagination -->
<div class="pagination">
<div class="pagination-info">
<span id="items-count">Exibindo 0 de 0 itens</span>
</div>
<div class="pagination-controls">
<button class="btn btn-outline btn-sm">Anterior</button>
<button class="btn btn-outline btn-sm">1</button>
<button class="btn btn-outline btn-sm">Próximo</button>
</div>
</div>
</div>
<!-- Add/Edit Item Modal -->
<div class="modal" id="item-modal">
<div class="modal-content">
<div class="modal-header">
<h3 id="modal-title">Anotar Novo Registro</h3>
<button class="modal-close" id="close-modal-btn" type="button">
<i class="fas fa-times"></i>
</button>
</div>
<div class="modal-body">
<p class="modal-description" id="modal-description">Adicione um novo registro ao estoque preenchendo as informações abaixo.</p>
<form id="item-form">
<!-- Informações Básicas -->
<div class="form-section">
<h4>Informações Básicas</h4>
<div class="form-grid">
<!-- Nome do Material -->
<div class="form-group">
<label for="material-name">PN</label>
<select class="form-control" id="material-name" required="">
<option value="">Selecione um PN</option>
<!-- opções serão preenchidas via JavaScript -->
</select>
</div>
<!-- ECODE -->
<div class="form-group">
<label for="material-id">ECODE</label>
<select class="form-control" id="material-id" required="">
<option value="">Selecione o ECODE</option>
<!-- opções serão preenchidas via JavaScript -->
</select>
</div>
<!-- Descrição -->
<div class="form-group">
<label for="material-desc">Descrição</label>
<select class="form-control" id="material-desc" required="">
<option value="">Selecione a descrição</option>
<!-- opções serão preenchidas via JavaScript -->
</select>
</div>
</div>
</div>
<!-- Informações Complementares -->
<div class="form-section">
<h4>Informações Complementares</h4>
<div class="form-grid">
<!-- Localização no Estoque -->
<div class="form-group">
<label for="location">Localização no Estoque</label>
<select class="form-control" id="location" required="">
<option value="">Selecione a localização</option>
<option value="Bandeja 1">Bandeja 1</option>
<option value="Bandeja 2">Bandeja 2</option>
<option value="Freezer 1">Freezer 1</option>
<option value="Freezer 2">Freezer 2</option>
<option value="Freezer 3">Freezer 3</option>
</select>
</div>
<!-- Motivo de Descarte -->
<div class="form-group">
<label for="discard-reason">Motivo de Descarte</label>
<select id="discard-reason">
<option value="">Selecione o motivo</option>
<option value="Nenhum Uso">Nenhum Uso</option>
<option value="Total">Uso Total</option>
<option value="Validade Vencida">Validade Vencida</option>
</select>
</div>
<!-- Data de Verificação -->
<div class="form-group">
<label for="verification-date">Data de Verificação</label>
<input id="verification-date" required="" type="date"/>
</div>
<!-- Data de Validade -->
<div class="form-group">
<label for="expiry-date">Data de Validade</label>
<input id="expiry-date" type="date"/>
</div>
</div>
<!-- Responsável pelo Cadastro -->
<div class="form-group form-group-full">
<label for="responsible">Responsável pelo Registro</label>
<select class="form-control" id="responsible" required="">
<option value="">Selecione o responsável</option>
<option value="Glauco">Glauco</option>
<option value="Lucas Santos">Lucas Santos</option>
<option value="Jean">Jean</option>
</select>
</div>
<div class="form-group">
<label for="quantity">Quantidade</label>
<input id="quantity" min="1" required="" type="number" value="1"/>
</div>
<div class="form-group">
<label for="status">Status *</label>
<select id="status" required="">
<option value="OK">OK</option>
<option value="EM FALTA">EM FALTA</option>
<option value="VENCIDO">VENCIDO</option>
<option value="EM DESCARTE">EM DESCARTE</option>
</select>
</div>
</div>
</form>
<div class="modal-footer">
<button class="btn btn-outline" id="cancel-modal-btn" type="button">Cancelar</button>
<button class="btn btn-outline" id="clear-form-btn" type="button">
<i class="fas fa-undo"></i>
                    Limpar
                </button>
<!-- importante: type="button" para não submeter o form -->
<button class="btn btn-primary" id="save-item-btn" type="button">
<i class="fas fa-save"></i>
                    Salvar
                </button>
</div>
</div>
</div>
&lt;!-- script omitido: movido para /public/static/js --&gt;
</div>`}})}function Rm(){const e=g.useRef(null);return g.useEffect(()=>{},[]),M.jsx("div",{ref:e,dangerouslySetInnerHTML:{__html:`
<!-- Toast Container -->
<div class="toast-container" id="toast-container"></div>
<!-- Header -->
<header class="header">
<div class="header-content">
<!-- Botão para abrir o menu -->
<button class="menu-toggle" id="menu-toggle">
<i class="fas fa-bars"></i>
</button>
<!-- Embraer Logo -->
<div class="embraer-logo">
<a aria-label="Ir para página principal" class="logo-link" href="/index.html">
<img alt="Logo Embraer" src="../../../assets/embraer-logo.svg" style="height:50px;"/>
</a>
</div>
<div class="header-actions">
<button class="btn btn-primary btn-pulse" id="add-item-btn">
<i class="fas fa-plus"></i>
                    Anotar Registro
                </button>
</div>
</div>
</header>
<!-- Sidebar -->
<aside class="sidebar">
<button class="close-sidebar" id="close-sidebar">
<i class="fas fa-times"></i>
</button>
<aside class="sidebar" id="sidebar">

<!-- ... resto do conteúdo ... -->
</aside>
<ul class="sidebar-menu">
<!-- Rota -->
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-route"></i> Rota 
                <i class="fas fa-chevron-down dropdown-icon"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/src/rotas/DM/index_dm.html">DM</a></li>
<li><a href="/src/rotas/Sucata/index_sucata.html">Sucata</a></li>
<li><a href="/src/rotas/Reparo/index_reparo.html">Reparo</a></li>
<li><a href="/src/rotas/Sala-climatizada/index_sc.html">Sala Climatizada</a></li>
<li><a href="/src/rotas/Quarentena/index_quarentena.html">Quarentena</a></li>
</ul>
</li>
<!-- MIP -->
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-boxes"></i> MIP
                <i class="fas fa-chevron-down dropdown-icon"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/src/mip/mip_1/index_mip_1.html">1</a></li>
<li><a href="/src/mip/mip_2/index_mip_2.html">2</a></li>
<li><a href="/src/mip/mip_3/index_mip_3.html">3</a></li>
<li><a href="/src/mip/mip_4/index_mip_4.html">4</a></li>
</ul>
</li>
<!-- Freezer -->
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-snowflake"></i> Freezer
                <i class="fas fa-chevron-down dropdown-icon"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/src/freezer/freezer_2/index_freezer_2.html">2</a></li>
<li><a href="/src/freezer/freezer_3/index_freezer_3.html">3</a></li>
</ul>
</li>
<!-- Ponto -->
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-map-marker-alt"></i> Ponto
                <i class="fas fa-chevron-down dropdown-icon"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/src/pontos/163/index_163.html">163</a></li>
<li><a href="/src/pontos/164/index_164.html">164</a></li>
<li><a href="/src/pontos/165/index_165.html">165</a></li>
</ul>
</li>
<!-- PDU -->
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-plug"></i> PDU
            </a>
</li>
</ul>
<!-- Site -->
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-route"></i> Site
                <i class="fa-solid fa-chevron-down"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/index.html">SJK</a></li>
<li><a href="#">SOD</a></li>
<li><a href="#">GPX</a></li>
</ul>
</li>
</aside>
<!-- Estatísticas de Registros -->
<div class="stats-cards">
<!-- Em Falta -->
<div class="stat-card em-falta">
<div class="stat-icon">
<i class="fas fa-box-open"></i>
</div>
<div class="stat-info">
<h4>Em Falta</h4>
<p id="missing-count">12</p>
</div>
</div>
<!-- Vencidos -->
<div class="stat-card vencidos">
<div class="stat-icon">
<i class="fas fa-exclamation-triangle"></i>
</div>
<div class="stat-info">
<h4>Vencidos</h4>
<p id="expired-count">5</p>
</div>
</div>
<!-- Ok -->
<div class="stat-card ok">
<div class="stat-icon">
<i class="fas fa-check-circle"></i>
</div>
<div class="stat-info">
<h4>Ok</h4>
<p id="ok-count">40</p>
</div>
</div>
<!-- Em Descarte -->
<div class="stat-card descarte">
<div class="stat-icon">
<i class="fas fa-trash-alt"></i>
</div>
<div class="stat-info">
<h4>Em Descarte</h4>
<p id="discard-count">3</p>
</div>
</div>
</div>
<div class="container">
<!-- Filters -->
<div class="card filters-card">
<div class="card-header">
<h3><i class="fas fa-filter"></i> Filtros</h3>
</div>
<div class="card-content">
<div class="filters-grid">
<div class="filter-group">
<div class="input-with-icon">
<i class="fas fa-search"></i>
<input id="search-input" placeholder="Buscar..." type="text"/>
</div>
</div>
<div class="filter-group">
<select id="status-filter">
<option value="ALL">Todos os Status</option>
<option value="OK">OK</option>
<option value="EM FALTA">EM FALTA</option>
<option value="VENCIDO">VENCIDO</option>
<option value="EM DESCARTE">EM DESCARTE</option>
</select>
</div>
</div>
</div>
</div>
<!-- Table -->
<div class="card table-card">
<div class="table-container">
<table class="stock-table">
<thead>
<tr>
<th>PN</th>
<th>ECODE</th>
<th>Quantidade</th>
<th>Verificado por</th>
<th>Status</th>
<th>Motivo de Descarte</th> <!-- NOVO -->
<th>Ações</th>
</tr>
</thead>
<tbody id="stock-table-body"></tbody>
</table>
<div class="no-items" id="no-items-message" style="display: none;">
                    Nenhum item encontrado
                </div>
</div>
</div>
<!-- Pagination -->
<div class="pagination">
<div class="pagination-info">
<span id="items-count">Exibindo 0 de 0 itens</span>
</div>
<div class="pagination-controls">
<button class="btn btn-outline btn-sm">Anterior</button>
<button class="btn btn-outline btn-sm">1</button>
<button class="btn btn-outline btn-sm">Próximo</button>
</div>
</div>
</div>
<!-- Add/Edit Item Modal -->
<div class="modal" id="item-modal">
<div class="modal-content">
<div class="modal-header">
<h3 id="modal-title">Anotar Novo Registro</h3>
<button class="modal-close" id="close-modal-btn" type="button">
<i class="fas fa-times"></i>
</button>
</div>
<div class="modal-body">
<p class="modal-description" id="modal-description">Adicione um novo registro ao estoque preenchendo as informações abaixo.</p>
<form id="item-form">
<!-- Informações Básicas -->
<div class="form-section">
<h4>Informações Básicas</h4>
<div class="form-grid">
<!-- Nome do Material -->
<div class="form-group">
<label for="material-name">PN</label>
<select class="form-control" id="material-name" required="">
<option value="">Selecione um PN</option>
<!-- opções serão preenchidas via JavaScript -->
</select>
</div>
<!-- ECODE -->
<div class="form-group">
<label for="material-id">ECODE</label>
<select class="form-control" id="material-id" required="">
<option value="">Selecione o ECODE</option>
<!-- opções serão preenchidas via JavaScript -->
</select>
</div>
<!-- Descrição -->
<div class="form-group">
<label for="material-desc">Descrição</label>
<select class="form-control" id="material-desc" required="">
<option value="">Selecione a descrição</option>
<!-- opções serão preenchidas via JavaScript -->
</select>
</div>
</div>
</div>
<!-- Informações Complementares -->
<div class="form-section">
<h4>Informações Complementares</h4>
<div class="form-grid">
<!-- Localização no Estoque -->
<div class="form-group">
<label for="location">Localização no Estoque</label>
<select class="form-control" id="location" required="">
<option value="">Selecione a localização</option>
<option value="Bandeja 1">Bandeja 1</option>
<option value="Bandeja 2">Bandeja 2</option>
<option value="Freezer 1">Freezer 1</option>
<option value="Freezer 2">Freezer 2</option>
<option value="Freezer 3">Freezer 3</option>
</select>
</div>
<!-- Motivo de Descarte -->
<div class="form-group">
<label for="discard-reason">Motivo de Descarte</label>
<select id="discard-reason">
<option value="">Selecione o motivo</option>
<option value="Nenhum Uso">Nenhum Uso</option>
<option value="Total">Uso Total</option>
<option value="Validade Vencida">Validade Vencida</option>
</select>
</div>
<!-- Data de Verificação -->
<div class="form-group">
<label for="verification-date">Data de Verificação</label>
<input id="verification-date" required="" type="date"/>
</div>
<!-- Data de Validade -->
<div class="form-group">
<label for="expiry-date">Data de Validade</label>
<input id="expiry-date" type="date"/>
</div>
</div>
<!-- Responsável pelo Cadastro -->
<div class="form-group form-group-full">
<label for="responsible">Responsável pelo Registro</label>
<select class="form-control" id="responsible" required="">
<option value="">Selecione o responsável</option>
<option value="Glauco">Glauco</option>
<option value="Lucas Santos">Lucas Santos</option>
<option value="Jean">Jean</option>
</select>
</div>
<div class="form-group">
<label for="quantity">Quantidade</label>
<input id="quantity" min="1" required="" type="number" value="1"/>
</div>
<div class="form-group">
<label for="status">Status *</label>
<select id="status" required="">
<option value="OK">OK</option>
<option value="EM FALTA">EM FALTA</option>
<option value="VENCIDO">VENCIDO</option>
<option value="EM DESCARTE">EM DESCARTE</option>
</select>
</div>
</div>
</form>
<div class="modal-footer">
<button class="btn btn-outline" id="cancel-modal-btn" type="button">Cancelar</button>
<button class="btn btn-outline" id="clear-form-btn" type="button">
<i class="fas fa-undo"></i>
                    Limpar
                </button>
<!-- importante: type="button" para não submeter o form -->
<button class="btn btn-primary" id="save-item-btn" type="button">
<i class="fas fa-save"></i>
                    Salvar
                </button>
</div>
</div>
</div>
&lt;!-- script omitido: movido para /public/static/js --&gt;
</div>`}})}function zm(){const e=g.useRef(null);return g.useEffect(()=>{},[]),M.jsx("div",{ref:e,dangerouslySetInnerHTML:{__html:`
<!-- Toast Container -->
<div class="toast-container" id="toast-container"></div>
<!-- Header -->
<header class="header">
<div class="header-content">
<!-- Botão para abrir o menu -->
<button class="menu-toggle" id="menu-toggle">
<i class="fas fa-bars"></i>
</button>
<!-- Embraer Logo -->
<div class="embraer-logo">
<a aria-label="Ir para página principal" class="logo-link" href="/index.html">
<img alt="Logo Embraer" src="../../../assets/embraer-logo.svg" style="height:50px;"/>
</a>
</div>
<div class="header-actions">
<button class="btn btn-primary btn-pulse" id="add-item-btn">
<i class="fas fa-plus"></i>
                    Anotar Registro
                </button>
</div>
</div>
</header>
<!-- Sidebar -->
<aside class="sidebar">
<button class="close-sidebar" id="close-sidebar">
<i class="fas fa-times"></i>
</button>
<aside class="sidebar" id="sidebar">

<!-- ... resto do conteúdo ... -->
</aside>
<ul class="sidebar-menu">
<!-- Rota -->
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-route"></i> Rota 
                <i class="fas fa-chevron-down dropdown-icon"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/src/rotas/DM/index_dm.html">DM</a></li>
<li><a href="/src/rotas/Sucata/index_sucata.html">Sucata</a></li>
<li><a href="/src/rotas/Reparo/index_reparo.html">Reparo</a></li>
<li><a href="/src/rotas/Sala-climatizada/index_sc.html">Sala Climatizada</a></li>
<li><a href="/src/rotas/Quarentena/index_quarentena.html">Quarentena</a></li>
</ul>
</li>
<!-- MIP -->
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-boxes"></i> MIP
                <i class="fas fa-chevron-down dropdown-icon"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/src/mip/mip_1/index_mip_1.html">1</a></li>
<li><a href="/src/mip/mip_2/index_mip_2.html">2</a></li>
<li><a href="/src/mip/mip_3/index_mip_3.html">3</a></li>
<li><a href="/src/mip/mip_4/index_mip_4.html">4</a></li>
</ul>
</li>
<!-- Freezer -->
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-snowflake"></i> Freezer
                <i class="fas fa-chevron-down dropdown-icon"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/src/freezer/freezer_2/index_freezer_2.html">2</a></li>
<li><a href="/src/freezer/freezer_3/index_freezer_3.html">3</a></li>
</ul>
</li>
<!-- Ponto -->
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-map-marker-alt"></i> Ponto
                <i class="fas fa-chevron-down dropdown-icon"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/src/pontos/163/index_163.html">163</a></li>
<li><a href="/src/pontos/164/index_164.html">164</a></li>
<li><a href="/src/pontos/165/index_165.html">165</a></li>
</ul>
</li>
<!-- PDU -->
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-plug"></i> PDU
            </a>
</li>
</ul>
<!-- Site -->
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-route"></i> Site
                <i class="fa-solid fa-chevron-down"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/index.html">SJK</a></li>
<li><a href="#">SOD</a></li>
<li><a href="#">GPX</a></li>
</ul>
</li>
</aside>
<!-- Estatísticas de Registros -->
<div class="stats-cards">
<!-- Em Falta -->
<div class="stat-card em-falta">
<div class="stat-icon">
<i class="fas fa-box-open"></i>
</div>
<div class="stat-info">
<h4>Em Falta</h4>
<p id="missing-count">12</p>
</div>
</div>
<!-- Vencidos -->
<div class="stat-card vencidos">
<div class="stat-icon">
<i class="fas fa-exclamation-triangle"></i>
</div>
<div class="stat-info">
<h4>Vencidos</h4>
<p id="expired-count">5</p>
</div>
</div>
<!-- Ok -->
<div class="stat-card ok">
<div class="stat-icon">
<i class="fas fa-check-circle"></i>
</div>
<div class="stat-info">
<h4>Ok</h4>
<p id="ok-count">40</p>
</div>
</div>
<!-- Em Descarte -->
<div class="stat-card descarte">
<div class="stat-icon">
<i class="fas fa-trash-alt"></i>
</div>
<div class="stat-info">
<h4>Em Descarte</h4>
<p id="discard-count">3</p>
</div>
</div>
</div>
<div class="container">
<!-- Filters -->
<div class="card filters-card">
<div class="card-header">
<h3><i class="fas fa-filter"></i> Filtros</h3>
</div>
<div class="card-content">
<div class="filters-grid">
<div class="filter-group">
<div class="input-with-icon">
<i class="fas fa-search"></i>
<input id="search-input" placeholder="Buscar..." type="text"/>
</div>
</div>
<div class="filter-group">
<select id="status-filter">
<option value="ALL">Todos os Status</option>
<option value="OK">OK</option>
<option value="EM FALTA">EM FALTA</option>
<option value="VENCIDO">VENCIDO</option>
<option value="EM DESCARTE">EM DESCARTE</option>
</select>
</div>
</div>
</div>
</div>
<!-- Table -->
<div class="card table-card">
<div class="table-container">
<table class="stock-table">
<thead>
<tr>
<th>PN</th>
<th>ECODE</th>
<th>Quantidade</th>
<th>Verificado por</th>
<th>Status</th>
<th>Motivo de Descarte</th> <!-- NOVO -->
<th>Ações</th>
</tr>
</thead>
<tbody id="stock-table-body"></tbody>
</table>
<div class="no-items" id="no-items-message" style="display: none;">
                    Nenhum item encontrado
                </div>
</div>
</div>
<!-- Pagination -->
<div class="pagination">
<div class="pagination-info">
<span id="items-count">Exibindo 0 de 0 itens</span>
</div>
<div class="pagination-controls">
<button class="btn btn-outline btn-sm">Anterior</button>
<button class="btn btn-outline btn-sm">1</button>
<button class="btn btn-outline btn-sm">Próximo</button>
</div>
</div>
</div>
<!-- Add/Edit Item Modal -->
<div class="modal" id="item-modal">
<div class="modal-content">
<div class="modal-header">
<h3 id="modal-title">Anotar Novo Registro</h3>
<button class="modal-close" id="close-modal-btn" type="button">
<i class="fas fa-times"></i>
</button>
</div>
<div class="modal-body">
<p class="modal-description" id="modal-description">Adicione um novo registro ao estoque preenchendo as informações abaixo.</p>
<form id="item-form">
<!-- Informações Básicas -->
<div class="form-section">
<h4>Informações Básicas</h4>
<div class="form-grid">
<!-- Nome do Material -->
<div class="form-group">
<label for="material-name">PN</label>
<select class="form-control" id="material-name" required="">
<option value="">Selecione um PN</option>
<!-- opções serão preenchidas via JavaScript -->
</select>
</div>
<!-- ECODE -->
<div class="form-group">
<label for="material-id">ECODE</label>
<select class="form-control" id="material-id" required="">
<option value="">Selecione o ECODE</option>
<!-- opções serão preenchidas via JavaScript -->
</select>
</div>
<!-- Descrição -->
<div class="form-group">
<label for="material-desc">Descrição</label>
<select class="form-control" id="material-desc" required="">
<option value="">Selecione a descrição</option>
<!-- opções serão preenchidas via JavaScript -->
</select>
</div>
</div>
</div>
<!-- Informações Complementares -->
<div class="form-section">
<h4>Informações Complementares</h4>
<div class="form-grid">
<!-- Localização no Estoque -->
<div class="form-group">
<label for="location">Localização no Estoque</label>
<select class="form-control" id="location" required="">
<option value="">Selecione a localização</option>
<option value="Bandeja 1">Bandeja 1</option>
<option value="Bandeja 2">Bandeja 2</option>
<option value="Freezer 1">Freezer 1</option>
<option value="Freezer 2">Freezer 2</option>
<option value="Freezer 3">Freezer 3</option>
</select>
</div>
<!-- Motivo de Descarte -->
<div class="form-group">
<label for="discard-reason">Motivo de Descarte</label>
<select id="discard-reason">
<option value="">Selecione o motivo</option>
<option value="Nenhum Uso">Nenhum Uso</option>
<option value="Total">Uso Total</option>
<option value="Validade Vencida">Validade Vencida</option>
</select>
</div>
<!-- Data de Verificação -->
<div class="form-group">
<label for="verification-date">Data de Verificação</label>
<input id="verification-date" required="" type="date"/>
</div>
<!-- Data de Validade -->
<div class="form-group">
<label for="expiry-date">Data de Validade</label>
<input id="expiry-date" type="date"/>
</div>
</div>
<!-- Responsável pelo Cadastro -->
<div class="form-group form-group-full">
<label for="responsible">Responsável pelo Registro</label>
<select class="form-control" id="responsible" required="">
<option value="">Selecione o responsável</option>
<option value="Glauco">Glauco</option>
<option value="Lucas Santos">Lucas Santos</option>
<option value="Jean">Jean</option>
</select>
</div>
<div class="form-group">
<label for="quantity">Quantidade</label>
<input id="quantity" min="1" required="" type="number" value="1"/>
</div>
<div class="form-group">
<label for="status">Status *</label>
<select id="status" required="">
<option value="OK">OK</option>
<option value="EM FALTA">EM FALTA</option>
<option value="VENCIDO">VENCIDO</option>
<option value="EM DESCARTE">EM DESCARTE</option>
</select>
</div>
</div>
</form>
<div class="modal-footer">
<button class="btn btn-outline" id="cancel-modal-btn" type="button">Cancelar</button>
<button class="btn btn-outline" id="clear-form-btn" type="button">
<i class="fas fa-undo"></i>
                    Limpar
                </button>
<!-- importante: type="button" para não submeter o form -->
<button class="btn btn-primary" id="save-item-btn" type="button">
<i class="fas fa-save"></i>
                    Salvar
                </button>
</div>
</div>
</div>
&lt;!-- script omitido: movido para /public/static/js --&gt;
</div>`}})}function Pm(){const e=g.useRef(null);return g.useEffect(()=>{},[]),M.jsx("div",{ref:e,dangerouslySetInnerHTML:{__html:`
<!-- Toast Container -->
<div class="toast-container" id="toast-container"></div>
<!-- Header -->
<header class="header">
<div class="header-content">
<!-- Botão para abrir o menu -->
<button class="menu-toggle" id="menu-toggle">
<i class="fas fa-bars"></i>
</button>
<!-- Embraer Logo -->
<div class="embraer-logo">
<a aria-label="Ir para página principal" class="logo-link" href="/index.html">
<img alt="Logo Embraer" src="../../../assets/embraer-logo.svg" style="height:50px;"/>
</a>
</div>
<div class="header-actions">
<button class="btn btn-primary btn-pulse" id="add-item-btn">
<i class="fas fa-plus"></i>
                    Anotar Registro
                </button>
</div>
</div>
</header>
<!-- Sidebar -->
<aside class="sidebar">
<button class="close-sidebar" id="close-sidebar">
<i class="fas fa-times"></i>
</button>
<aside class="sidebar" id="sidebar">

<!-- ... resto do conteúdo ... -->
</aside>
<ul class="sidebar-menu">
<!-- Rota -->
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-route"></i> Rota 
                <i class="fas fa-chevron-down dropdown-icon"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/src/rotas/DM/index_dm.html">DM</a></li>
<li><a href="/src/rotas/Sucata/index_sucata.html">Sucata</a></li>
<li><a href="/src/rotas/Reparo/index_reparo.html">Reparo</a></li>
<li><a href="/src/rotas/Sala-climatizada/index_sc.html">Sala Climatizada</a></li>
<li><a href="/src/rotas/Quarentena/index_quarentena.html">Quarentena</a></li>
</ul>
</li>
<!-- MIP -->
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-boxes"></i> MIP
                <i class="fas fa-chevron-down dropdown-icon"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/src/mip/mip_1/index_mip_1.html">1</a></li>
<li><a href="/src/mip/mip_2/index_mip_2.html">2</a></li>
<li><a href="/src/mip/mip_3/index_mip_3.html">3</a></li>
<li><a href="/src/mip/mip_4/index_mip_4.html">4</a></li>
</ul>
</li>
<!-- Freezer -->
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-snowflake"></i> Freezer
                <i class="fas fa-chevron-down dropdown-icon"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/src/freezer/freezer_2/index_freezer_2.html">2</a></li>
<li><a href="/src/freezer/freezer_3/index_freezer_3.html">3</a></li>
</ul>
</li>
<!-- Ponto -->
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-map-marker-alt"></i> Ponto
                <i class="fas fa-chevron-down dropdown-icon"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/src/pontos/163/index_163.html">163</a></li>
<li><a href="/src/pontos/164/index_164.html">164</a></li>
<li><a href="/src/pontos/165/index_165.html">165</a></li>
</ul>
</li>
<!-- PDU -->
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-plug"></i> PDU
            </a>
</li>
</ul>
<!-- Site -->
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-route"></i> Site
                <i class="fa-solid fa-chevron-down"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/index.html">SJK</a></li>
<li><a href="#">SOD</a></li>
<li><a href="#">GPX</a></li>
</ul>
</li>
</aside>
<!-- Estatísticas de Registros -->
<div class="stats-cards">
<!-- Em Falta -->
<div class="stat-card em-falta">
<div class="stat-icon">
<i class="fas fa-box-open"></i>
</div>
<div class="stat-info">
<h4>Em Falta</h4>
<p id="missing-count">12</p>
</div>
</div>
<!-- Vencidos -->
<div class="stat-card vencidos">
<div class="stat-icon">
<i class="fas fa-exclamation-triangle"></i>
</div>
<div class="stat-info">
<h4>Vencidos</h4>
<p id="expired-count">5</p>
</div>
</div>
<!-- Ok -->
<div class="stat-card ok">
<div class="stat-icon">
<i class="fas fa-check-circle"></i>
</div>
<div class="stat-info">
<h4>Ok</h4>
<p id="ok-count">40</p>
</div>
</div>
<!-- Em Descarte -->
<div class="stat-card descarte">
<div class="stat-icon">
<i class="fas fa-trash-alt"></i>
</div>
<div class="stat-info">
<h4>Em Descarte</h4>
<p id="discard-count">3</p>
</div>
</div>
</div>
<div class="container">
<!-- Filters -->
<div class="card filters-card">
<div class="card-header">
<h3><i class="fas fa-filter"></i> Filtros</h3>
</div>
<div class="card-content">
<div class="filters-grid">
<div class="filter-group">
<div class="input-with-icon">
<i class="fas fa-search"></i>
<input id="search-input" placeholder="Buscar..." type="text"/>
</div>
</div>
<div class="filter-group">
<select id="status-filter">
<option value="ALL">Todos os Status</option>
<option value="OK">OK</option>
<option value="EM FALTA">EM FALTA</option>
<option value="VENCIDO">VENCIDO</option>
<option value="EM DESCARTE">EM DESCARTE</option>
</select>
</div>
</div>
</div>
</div>
<!-- Table -->
<div class="card table-card">
<div class="table-container">
<table class="stock-table">
<thead>
<tr>
<th>PN</th>
<th>ECODE</th>
<th>Quantidade</th>
<th>Verificado por</th>
<th>Status</th>
<th>Motivo de Descarte</th> <!-- NOVO -->
<th>Ações</th>
</tr>
</thead>
<tbody id="stock-table-body"></tbody>
</table>
<div class="no-items" id="no-items-message" style="display: none;">
                    Nenhum item encontrado
                </div>
</div>
</div>
<!-- Pagination -->
<div class="pagination">
<div class="pagination-info">
<span id="items-count">Exibindo 0 de 0 itens</span>
</div>
<div class="pagination-controls">
<button class="btn btn-outline btn-sm">Anterior</button>
<button class="btn btn-outline btn-sm">1</button>
<button class="btn btn-outline btn-sm">Próximo</button>
</div>
</div>
</div>
<!-- Add/Edit Item Modal -->
<div class="modal" id="item-modal">
<div class="modal-content">
<div class="modal-header">
<h3 id="modal-title">Anotar Novo Registro</h3>
<button class="modal-close" id="close-modal-btn" type="button">
<i class="fas fa-times"></i>
</button>
</div>
<div class="modal-body">
<p class="modal-description" id="modal-description">Adicione um novo registro ao estoque preenchendo as informações abaixo.</p>
<form id="item-form">
<!-- Informações Básicas -->
<div class="form-section">
<h4>Informações Básicas</h4>
<div class="form-grid">
<!-- Nome do Material -->
<div class="form-group">
<label for="material-name">PN</label>
<select class="form-control" id="material-name" required="">
<option value="">Selecione um PN</option>
<!-- opções serão preenchidas via JavaScript -->
</select>
</div>
<!-- ECODE -->
<div class="form-group">
<label for="material-id">ECODE</label>
<select class="form-control" id="material-id" required="">
<option value="">Selecione o ECODE</option>
<!-- opções serão preenchidas via JavaScript -->
</select>
</div>
<!-- Descrição -->
<div class="form-group">
<label for="material-desc">Descrição</label>
<select class="form-control" id="material-desc" required="">
<option value="">Selecione a descrição</option>
<!-- opções serão preenchidas via JavaScript -->
</select>
</div>
</div>
</div>
<!-- Informações Complementares -->
<div class="form-section">
<h4>Informações Complementares</h4>
<div class="form-grid">
<!-- Localização no Estoque -->
<div class="form-group">
<label for="location">Localização no Estoque</label>
<select class="form-control" id="location" required="">
<option value="">Selecione a localização</option>
<option value="Bandeja 1">Bandeja 1</option>
<option value="Bandeja 2">Bandeja 2</option>
<option value="Freezer 1">Freezer 1</option>
<option value="Freezer 2">Freezer 2</option>
<option value="Freezer 3">Freezer 3</option>
</select>
</div>
<!-- Motivo de Descarte -->
<div class="form-group">
<label for="discard-reason">Motivo de Descarte</label>
<select id="discard-reason">
<option value="">Selecione o motivo</option>
<option value="Nenhum Uso">Nenhum Uso</option>
<option value="Total">Uso Total</option>
<option value="Validade Vencida">Validade Vencida</option>
</select>
</div>
<!-- Data de Verificação -->
<div class="form-group">
<label for="verification-date">Data de Verificação</label>
<input id="verification-date" required="" type="date"/>
</div>
<!-- Data de Validade -->
<div class="form-group">
<label for="expiry-date">Data de Validade</label>
<input id="expiry-date" type="date"/>
</div>
</div>
<!-- Responsável pelo Cadastro -->
<div class="form-group form-group-full">
<label for="responsible">Responsável pelo Registro</label>
<select class="form-control" id="responsible" required="">
<option value="">Selecione o responsável</option>
<option value="Glauco">Glauco</option>
<option value="Lucas Santos">Lucas Santos</option>
<option value="Jean">Jean</option>
</select>
</div>
<div class="form-group">
<label for="quantity">Quantidade</label>
<input id="quantity" min="1" required="" type="number" value="1"/>
</div>
<div class="form-group">
<label for="status">Status *</label>
<select id="status" required="">
<option value="OK">OK</option>
<option value="EM FALTA">EM FALTA</option>
<option value="VENCIDO">VENCIDO</option>
<option value="EM DESCARTE">EM DESCARTE</option>
</select>
</div>
</div>
</form>
<div class="modal-footer">
<button class="btn btn-outline" id="cancel-modal-btn" type="button">Cancelar</button>
<button class="btn btn-outline" id="clear-form-btn" type="button">
<i class="fas fa-undo"></i>
                    Limpar
                </button>
<!-- importante: type="button" para não submeter o form -->
<button class="btn btn-primary" id="save-item-btn" type="button">
<i class="fas fa-save"></i>
                    Salvar
                </button>
</div>
</div>
</div>
&lt;!-- script omitido: movido para /public/static/js --&gt;
</div>`}})}function Dm(){const e=g.useRef(null);return g.useEffect(()=>{},[]),M.jsx("div",{ref:e,dangerouslySetInnerHTML:{__html:`
<!-- Toast Container -->
<div class="toast-container" id="toast-container"></div>
<!-- Header -->
<header class="header">
<div class="header-content">
<!-- Botão para abrir o menu -->
<button class="menu-toggle" id="menu-toggle">
<i class="fas fa-bars"></i>
</button>
<!-- Embraer Logo -->
<div class="embraer-logo">
<a aria-label="Ir para página principal" class="logo-link" href="/index.html">
<img alt="Logo Embraer" src="../../../assets/embraer-logo.svg" style="height:50px;"/>
</a>
</div>
<div class="header-actions">
<button class="btn btn-primary btn-pulse" id="add-item-btn">
<i class="fas fa-plus"></i>
                    Anotar Registro
                </button>
</div>
</div>
</header>
<!-- Sidebar -->
<aside class="sidebar" id="sidebar">
<button class="close-sidebar" id="close-sidebar">
<i class="fas fa-times"></i>
</button>
<ul class="sidebar-menu">
<!-- Rota -->
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-route"></i> Rota 
                    <i class="fas fa-chevron-down dropdown-icon"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/src/rotas/DM/index_dm.html">DM</a></li>
<li><a href="/src/rotas/Sucata/index_sucata.html">Sucata</a></li>
<li><a href="/src/rotas/Reparo/index_reparo.html">Reparo</a></li>
<li><a href="/src/rotas/Sala-climatizada/index_sc.html">Sala Climatizada</a></li>
<li><a href="/src/rotas/Quarentena/index_quarentena.html">Quarentena</a></li>
</ul>
</li>
<!-- MIP -->
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-boxes"></i> MIP
                    <i class="fas fa-chevron-down dropdown-icon"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/src/mip/mip_1/index_mip_1.html">1</a></li>
<li><a href="/src/mip/mip_2/index_mip_2.html">2</a></li>
<li><a href="/src/mip/mip_3/index_mip_3.html">3</a></li>
<li><a href="/src/mip/mip_4/index_mip_4.html">4</a></li>
</ul>
</li>
<!-- Freezer -->
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-snowflake"></i> Freezer
                    <i class="fas fa-chevron-down dropdown-icon"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/src/freezer/freezer_2/index_freezer_2.html">2</a></li>
<li><a href="/src/freezer/freezer_3/index_freezer_3.html">3</a></li>
</ul>
</li>
<!-- Ponto -->
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-map-marker-alt"></i> Ponto
                    <i class="fas fa-chevron-down dropdown-icon"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/src/pontos/163/index_163.html">163</a></li>
<li><a href="/src/pontos/164/index_164.html">164</a></li>
<li><a href="/src/pontos/165/index_165.html">165</a></li>
</ul>
</li>
<!-- PDU -->
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-plug"></i> PDU
                </a>
</li>
<!-- Site -->
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-route"></i> Site
                    <i class="fa-solid fa-chevron-down"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/index.html">SJK</a></li>
<li><a href="#">SOD</a></li>
<li><a href="#">GPX</a></li>
</ul>
</li>
</ul>
</aside>
<div class="container">
<!-- Filters -->
<div class="card filters-card">
<div class="card-header">
<h3><i class="fas fa-filter"></i> Filtros</h3>
</div>
<div class="card-content">
<div class="filters-grid">
<div class="filter-group">
<div class="input-with-icon">
<i class="fas fa-search"></i>
<input id="search-input" placeholder="Buscar..." type="text"/>
</div>
</div>
<div class="filter-group">
<select id="status-filter">
<option value="ALL">Todos os Status</option>
<option value="OK">ENVIADOS</option>
</select>
</div>
</div>
</div>
</div>
<!-- Tabela Simplificada -->
<div class="card table-card">
<div class="table-container">
<table class="stock-table">
<thead>
<tr>
<th>Limpo</th>
<th class="center-column">Ponto</th>
<th class="center-column">Data da Verificação</th>
<th class="right-column">Observação</th>
</tr>
</thead>
<tbody id="stock-table-body"></tbody>
</table>
<div class="no-items" id="no-items-message" style="display: none;">
                    Nenhum item encontrado
                </div>
</div>
</div>
<!-- Pagination -->
<div class="pagination">
<div class="pagination-info">
<span id="items-count">Exibindo 0 de 0 itens</span>
</div>
<div class="pagination-controls">
<button class="btn btn-outline btn-sm">Anterior</button>
<button class="btn btn-outline btn-sm">1</button>
<button class="btn btn-outline btn-sm">Próximo</button>
</div>
</div>
</div>
<!-- Add/Edit Item Modal -->
<div class="modal" id="item-modal">
<div class="modal-content">
<div class="modal-header">
<h3 id="modal-title">Anotar Novo Registro</h3>
<button class="modal-close" id="close-modal-btn" type="button">
<i class="fas fa-times"></i>
</button>
</div>
<div class="modal-body">
<p class="modal-description" id="modal-description">
                    Adicione um novo registro ao estoque preenchendo as informações abaixo.
                </p>
<form id="item-form">
<div class="form-section">
<h4>Informações do Registro</h4>
<div class="form-grid">
<div class="form-group">
<label for="clean">Limpo</label>
<select class="form-control" id="clean" required="">
<option value="">Selecione</option>
<option value="Sim">Sim</option>
<option value="Não">Não</option>
</select>
</div>
<div class="form-group">
<label for="ponto">Ponto</label>
<select class="form-control" id="ponto" required="">
<option value="">Selecione o ponto</option>
<option value="163">163</option>
<option value="164">164</option>
<option value="165">165</option>
</select>
</div>
<div class="form-group">
<label for="verification-date">Data de Verificação</label>
<input class="form-control" id="verification-date" required="" type="date"/>
</div>
<div class="form-group form-group-full">
<label for="observation">Observação</label>
<textarea class="form-control" id="observation" placeholder="Digite uma observação..." rows="3"></textarea>
</div>
</div>
</div>
</form>
<div class="modal-footer">
<button class="btn btn-outline" id="cancel-modal-btn" type="button">Cancelar</button>
<button class="btn btn-outline" id="clear-form-btn" type="button">
<i class="fas fa-undo"></i> Limpar
                    </button>
<button class="btn btn-primary" id="save-item-btn" type="button">
<i class="fas fa-save"></i> Salvar
                    </button>
</div>
</div>
</div>
</div>
&lt;!-- script omitido: movido para /public/static/js --&gt;
`}})}function Nm(){const e=g.useRef(null);return g.useEffect(()=>{},[]),M.jsx("div",{ref:e,dangerouslySetInnerHTML:{__html:`
<!-- Toast Container -->
<div class="toast-container" id="toast-container"></div>
<!-- Header -->
<header class="header">
<div class="header-content">
<!-- Botão para abrir o menu -->
<button class="menu-toggle" id="menu-toggle">
<i class="fas fa-bars"></i>
</button>
<!-- Embraer Logo -->
<div class="embraer-logo">
<a aria-label="Ir para página principal" class="logo-link" href="/index.html">
<img alt="Logo Embraer" src="../../../assets/embraer-logo.svg" style="height:50px;"/>
</a>
</div>
<div class="header-actions">
<button class="btn btn-primary btn-pulse" id="add-item-btn">
<i class="fas fa-plus"></i>
                    Anotar Registro
                </button>
</div>
</div>
</header>
<!-- Sidebar -->
<aside class="sidebar" id="sidebar">
<button class="close-sidebar" id="close-sidebar">
<i class="fas fa-times"></i>
</button>
<ul class="sidebar-menu">
<!-- Rota -->
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-route"></i> Rota 
                    <i class="fas fa-chevron-down dropdown-icon"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/src/rotas/DM/index_dm.html">DM</a></li>
<li><a href="/src/rotas/Sucata/index_sucata.html">Sucata</a></li>
<li><a href="/src/rotas/Reparo/index_reparo.html">Reparo</a></li>
<li><a href="/src/rotas/Sala-climatizada/index_sc.html">Sala Climatizada</a></li>
<li><a href="/src/rotas/Quarentena/index_quarentena.html">Quarentena</a></li>
</ul>
</li>
<!-- MIP -->
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-boxes"></i> MIP
                    <i class="fas fa-chevron-down dropdown-icon"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/src/mip/mip_1/index_mip_1.html">1</a></li>
<li><a href="/src/mip/mip_2/index_mip_2.html">2</a></li>
<li><a href="/src/mip/mip_3/index_mip_3.html">3</a></li>
<li><a href="/src/mip/mip_4/index_mip_4.html">4</a></li>
</ul>
</li>
<!-- Freezer -->
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-snowflake"></i> Freezer
                    <i class="fas fa-chevron-down dropdown-icon"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/src/freezer/freezer_2/index_freezer_2.html">2</a></li>
<li><a href="/src/freezer/freezer_3/index_freezer_3.html">3</a></li>
</ul>
</li>
<!-- Ponto -->
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-map-marker-alt"></i> Ponto
                    <i class="fas fa-chevron-down dropdown-icon"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/src/pontos/163/index_163.html">163</a></li>
<li><a href="/src/pontos/164/index_164.html">164</a></li>
<li><a href="/src/pontos/165/index_165.html">165</a></li>
</ul>
</li>
<!-- PDU -->
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-plug"></i> PDU
                </a>
</li>
<!-- Site -->
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-route"></i> Site
                    <i class="fa-solid fa-chevron-down"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/index.html">SJK</a></li>
<li><a href="#">SOD</a></li>
<li><a href="#">GPX</a></li>
</ul>
</li>
</ul>
</aside>
<div class="container">
<!-- Filters -->
<div class="card filters-card">
<div class="card-header">
<h3><i class="fas fa-filter"></i> Filtros</h3>
</div>
<div class="card-content">
<div class="filters-grid">
<div class="filter-group">
<div class="input-with-icon">
<i class="fas fa-search"></i>
<input id="search-input" placeholder="Buscar..." type="text"/>
</div>
</div>
<div class="filter-group">
<select id="status-filter">
<option value="ALL">Todos os Status</option>
<option value="OK">ENVIADOS</option>
</select>
</div>
</div>
</div>
</div>
<!-- Tabela Simplificada -->
<div class="card table-card">
<div class="table-container">
<table class="stock-table">
<thead>
<tr>
<th>Limpo</th>
<th class="center-column">Ponto</th>
<th class="center-column">Data da Verificação</th>
<th class="right-column">Observação</th>
</tr>
</thead>
<tbody id="stock-table-body"></tbody>
</table>
<div class="no-items" id="no-items-message" style="display: none;">
                    Nenhum item encontrado
                </div>
</div>
</div>
<!-- Pagination -->
<div class="pagination">
<div class="pagination-info">
<span id="items-count">Exibindo 0 de 0 itens</span>
</div>
<div class="pagination-controls">
<button class="btn btn-outline btn-sm">Anterior</button>
<button class="btn btn-outline btn-sm">1</button>
<button class="btn btn-outline btn-sm">Próximo</button>
</div>
</div>
</div>
<!-- Add/Edit Item Modal -->
<div class="modal" id="item-modal">
<div class="modal-content">
<div class="modal-header">
<h3 id="modal-title">Anotar Novo Registro</h3>
<button class="modal-close" id="close-modal-btn" type="button">
<i class="fas fa-times"></i>
</button>
</div>
<div class="modal-body">
<p class="modal-description" id="modal-description">
                    Adicione um novo registro ao estoque preenchendo as informações abaixo.
                </p>
<form id="item-form">
<div class="form-section">
<h4>Informações do Registro</h4>
<div class="form-grid">
<div class="form-group">
<label for="clean">Limpo</label>
<select class="form-control" id="clean" required="">
<option value="">Selecione</option>
<option value="Sim">Sim</option>
<option value="Não">Não</option>
</select>
</div>
<div class="form-group">
<label for="ponto">Ponto</label>
<select class="form-control" id="ponto" required="">
<option value="">Selecione o ponto</option>
<option value="163">163</option>
<option value="164">164</option>
<option value="165">165</option>
</select>
</div>
<div class="form-group">
<label for="verification-date">Data de Verificação</label>
<input class="form-control" id="verification-date" required="" type="date"/>
</div>
<div class="form-group form-group-full">
<label for="observation">Observação</label>
<textarea class="form-control" id="observation" placeholder="Digite uma observação..." rows="3"></textarea>
</div>
</div>
</div>
</form>
<div class="modal-footer">
<button class="btn btn-outline" id="cancel-modal-btn" type="button">Cancelar</button>
<button class="btn btn-outline" id="clear-form-btn" type="button">
<i class="fas fa-undo"></i> Limpar
                    </button>
<button class="btn btn-primary" id="save-item-btn" type="button">
<i class="fas fa-save"></i> Salvar
                    </button>
</div>
</div>
</div>
</div>
&lt;!-- script omitido: movido para /public/static/js --&gt;
`}})}function Lm(){const e=g.useRef(null);return g.useEffect(()=>{},[]),M.jsx("div",{ref:e,dangerouslySetInnerHTML:{__html:`
<!-- Toast Container -->
<div class="toast-container" id="toast-container"></div>
<!-- Header -->
<header class="header">
<div class="header-content">
<!-- Botão para abrir o menu -->
<button class="menu-toggle" id="menu-toggle">
<i class="fas fa-bars"></i>
</button>
<!-- Embraer Logo -->
<div class="embraer-logo">
<a aria-label="Ir para página principal" class="logo-link" href="/index.html">
<img alt="Logo Embraer" src="../../../assets/embraer-logo.svg" style="height:50px;"/>
</a>
</div>
<div class="header-actions">
<button class="btn btn-primary btn-pulse" id="add-item-btn">
<i class="fas fa-plus"></i>
                    Anotar Registro
                </button>
</div>
</div>
</header>
<!-- Sidebar -->
<aside class="sidebar" id="sidebar">
<button class="close-sidebar" id="close-sidebar">
<i class="fas fa-times"></i>
</button>
<ul class="sidebar-menu">
<!-- Rota -->
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-route"></i> Rota 
                    <i class="fas fa-chevron-down dropdown-icon"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/src/rotas/DM/index_dm.html">DM</a></li>
<li><a href="/src/rotas/Sucata/index_sucata.html">Sucata</a></li>
<li><a href="/src/rotas/Reparo/index_reparo.html">Reparo</a></li>
<li><a href="/src/rotas/Sala-climatizada/index_sc.html">Sala Climatizada</a></li>
<li><a href="/src/rotas/Quarentena/index_quarentena.html">Quarentena</a></li>
</ul>
</li>
<!-- MIP -->
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-boxes"></i> MIP
                    <i class="fas fa-chevron-down dropdown-icon"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/src/mip/mip_1/index_mip_1.html">1</a></li>
<li><a href="/src/mip/mip_2/index_mip_2.html">2</a></li>
<li><a href="/src/mip/mip_3/index_mip_3.html">3</a></li>
<li><a href="/src/mip/mip_4/index_mip_4.html">4</a></li>
</ul>
</li>
<!-- Freezer -->
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-snowflake"></i> Freezer
                    <i class="fas fa-chevron-down dropdown-icon"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/src/freezer/freezer_2/index_freezer_2.html">2</a></li>
<li><a href="/src/freezer/freezer_3/index_freezer_3.html">3</a></li>
</ul>
</li>
<!-- Ponto -->
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-map-marker-alt"></i> Ponto
                    <i class="fas fa-chevron-down dropdown-icon"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/src/pontos/163/index_163.html">163</a></li>
<li><a href="/src/pontos/164/index_164.html">164</a></li>
<li><a href="/src/pontos/165/index_165.html">165</a></li>
</ul>
</li>
<!-- PDU -->
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-plug"></i> PDU
                </a>
</li>
<!-- Site -->
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-route"></i> Site
                    <i class="fa-solid fa-chevron-down"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/index.html">SJK</a></li>
<li><a href="#">SOD</a></li>
<li><a href="#">GPX</a></li>
</ul>
</li>
</ul>
</aside>
<div class="container">
<!-- Filters -->
<div class="card filters-card">
<div class="card-header">
<h3><i class="fas fa-filter"></i> Filtros</h3>
</div>
<div class="card-content">
<div class="filters-grid">
<div class="filter-group">
<div class="input-with-icon">
<i class="fas fa-search"></i>
<input id="search-input" placeholder="Buscar..." type="text"/>
</div>
</div>
<div class="filter-group">
<select id="status-filter">
<option value="ALL">Todos os Status</option>
<option value="OK">ENVIADOS</option>
</select>
</div>
</div>
</div>
</div>
<!-- Tabela Simplificada -->
<div class="card table-card">
<div class="table-container">
<table class="stock-table">
<thead>
<tr>
<th>Limpo</th>
<th class="center-column">Ponto</th>
<th class="center-column">Data da Verificação</th>
<th class="right-column">Observação</th>
</tr>
</thead>
<tbody id="stock-table-body"></tbody>
</table>
<div class="no-items" id="no-items-message" style="display: none;">
                    Nenhum item encontrado
                </div>
</div>
</div>
<!-- Pagination -->
<div class="pagination">
<div class="pagination-info">
<span id="items-count">Exibindo 0 de 0 itens</span>
</div>
<div class="pagination-controls">
<button class="btn btn-outline btn-sm">Anterior</button>
<button class="btn btn-outline btn-sm">1</button>
<button class="btn btn-outline btn-sm">Próximo</button>
</div>
</div>
</div>
<!-- Add/Edit Item Modal -->
<div class="modal" id="item-modal">
<div class="modal-content">
<div class="modal-header">
<h3 id="modal-title">Anotar Novo Registro</h3>
<button class="modal-close" id="close-modal-btn" type="button">
<i class="fas fa-times"></i>
</button>
</div>
<div class="modal-body">
<p class="modal-description" id="modal-description">
                    Adicione um novo registro ao estoque preenchendo as informações abaixo.
                </p>
<form id="item-form">
<div class="form-section">
<h4>Informações do Registro</h4>
<div class="form-grid">
<div class="form-group">
<label for="clean">Limpo</label>
<select class="form-control" id="clean" required="">
<option value="">Selecione</option>
<option value="Sim">Sim</option>
<option value="Não">Não</option>
</select>
</div>
<div class="form-group">
<label for="ponto">Ponto</label>
<select class="form-control" id="ponto" required="">
<option value="">Selecione o ponto</option>
<option value="163">163</option>
<option value="164">164</option>
<option value="165">165</option>
</select>
</div>
<div class="form-group">
<label for="verification-date">Data de Verificação</label>
<input class="form-control" id="verification-date" required="" type="date"/>
</div>
<div class="form-group form-group-full">
<label for="observation">Observação</label>
<textarea class="form-control" id="observation" placeholder="Digite uma observação..." rows="3"></textarea>
</div>
</div>
</div>
</form>
<div class="modal-footer">
<button class="btn btn-outline" id="cancel-modal-btn" type="button">Cancelar</button>
<button class="btn btn-outline" id="clear-form-btn" type="button">
<i class="fas fa-undo"></i> Limpar
                    </button>
<button class="btn btn-primary" id="save-item-btn" type="button">
<i class="fas fa-save"></i> Salvar
                    </button>
</div>
</div>
</div>
</div>
&lt;!-- script omitido: movido para /public/static/js --&gt;
`}})}function Tm(){const e=g.useRef(null);return g.useEffect(()=>{},[]),M.jsx("div",{ref:e,dangerouslySetInnerHTML:{__html:`
<!-- Toast Container -->
<div class="toast-container" id="toast-container"></div>
<!-- Header -->
<header class="header">
<div class="header-content">
<!-- Botão para abrir o menu -->
<button class="menu-toggle" id="menu-toggle">
<i class="fas fa-bars"></i>
</button>
<!-- Embraer Logo -->
<div class="embraer-logo">
<a aria-label="Ir para página principal" class="logo-link" href="/index.html">
<img alt="Logo Embraer" src="../../../assets/embraer-logo.svg" style="height:50px;"/>
</a>
</div>
<!-- Botão principal -->
<div class="header-actions">
<button class="btn btn-primary btn-pulse" id="add-item-btn">
<i class="fas fa-plus"></i>
          Anotar Registro
        </button>
</div>
</div>
</header>
<!-- Sidebar -->
<aside class="sidebar" id="sidebar">
<button class="close-sidebar" id="close-sidebar">
<i class="fas fa-times"></i>
</button>
<ul class="sidebar-menu">
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-route"></i> Rota
          <i class="fas fa-chevron-down dropdown-icon"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/src/rotas/DM/index_dm.html">DM</a></li>
<li><a href="/src/rotas/Sucata/index_sucata.html">Sucata</a></li>
<li><a href="/src/rotas/Reparo/index_reparo.html">Reparo</a></li>
<li><a href="/src/rotas/Sala-climatizada/index_sc.html">Sala Climatizada</a></li>
<li><a href="/src/rotas/Quarentena/index_quarentena.html">Quarentena</a></li>
</ul>
</li>
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-boxes"></i> MIP
          <i class="fas fa-chevron-down dropdown-icon"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/src/mip/mip_1/index_mip_1.html">1</a></li>
<li><a href="/src/mip/mip_2/index_mip_2.html">2</a></li>
<li><a href="/src/mip/mip_3/index_mip_3.html">3</a></li>
<li><a href="/src/mip/mip_4/index_mip_4.html">4</a></li>
</ul>
</li>
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-snowflake"></i> Freezer
          <i class="fas fa-chevron-down dropdown-icon"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/src/freezer/freezer_2/index_freezer_2.html">2</a></li>
<li><a href="/src/freezer/freezer_3/index_freezer_3.html">3</a></li>
</ul>
</li>
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-map-marker-alt"></i> Ponto
          <i class="fas fa-chevron-down dropdown-icon"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/src/pontos/163/index_163.html">163</a></li>
<li><a href="/src/pontos/164/index_164.html">164</a></li>
<li><a href="/src/pontos/165/index_165.html">165</a></li>
</ul>
</li>
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-plug"></i> PDU
        </a>
</li>
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-route"></i> Site
          <i class="fas fa-chevron-down dropdown-icon"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/index.html">SJK</a></li>
<li><a href="#">SOD</a></li>
<li><a href="#">GPX</a></li>
</ul>
</li>
</ul>
</aside>
<!-- Conteúdo principal -->
<div class="container">
<div class="stats-cards">
<div class="stat-card registered">
<div class="stat-icon"><i class="fas fa-check-circle"></i></div>
<div class="stat-info">
<h4>Registrados</h4>
<p id="registered-count">45</p>
</div>
</div>
<div class="stat-card not-registered">
<div class="stat-icon"><i class="fas fa-times-circle"></i></div>
<div class="stat-info">
<h4>Não Registrados</h4>
<p id="not-registered-count">3</p>
</div>
</div>
</div>
<!-- Filtros -->
<div class="card filters-card">
<div class="card-header">
<h3><i class="fas fa-filter"></i> Filtros</h3>
</div>
<div class="card-content">
<div class="filters-grid">
<div class="filter-group">
<div class="input-with-icon">
<i class="fas fa-search"></i>
<input id="search-input" placeholder="Buscar..." type="text"/>
</div>
</div>
<div class="filter-group">
<select id="status-filter">
<option value="ALL">Todos os Status</option>
<option value="Anexados">Anexados</option>
<option value="Respostas">Respostas</option>
</select>
</div>
</div>
</div>
</div>
<!-- Tabela -->
<div class="card table-card">
<div class="table-container">
<table class="stock-table">
<thead>
<tr>
<th style="width: 50%;">Rota</th>
<th style="width: 25%; text-align: center;">Respostas</th>
<th style="width: 25%; text-align: center;">Anexados</th>
</tr>
</thead>
<tbody id="stock-table-body">
<tr>
<td>Checklist Técnico</td>
<td style="text-align: center;">12</td>
<td style="text-align: center;">5</td>
</tr>
<tr>
<td>Relatório de Voo</td>
<td style="text-align: center;">8</td>
<td style="text-align: center;">2</td>
</tr>
</tbody>
</table>
<div class="no-items" id="no-items-message" style="display:none;">
          Nenhum item encontrado
        </div>
</div>
</div>
<!-- Paginação -->
<div class="pagination">
<div class="pagination-info">
<span id="items-count">Exibindo 0 de 0 itens</span>
</div>
<div class="pagination-controls">
<button class="btn btn-outline btn-sm">Anterior</button>
<button class="btn btn-outline btn-sm">1</button>
<button class="btn btn-outline btn-sm">Próximo</button>
</div>
</div>
<!-- Modal -->
<div class="modal" id="item-modal">
<div class="modal-content">
<div class="modal-header">
<h3 id="modal-title">Anotar Novo Registro</h3>
<button class="modal-close" id="close-modal-btn" type="button">
<i class="fas fa-times"></i>
</button>
</div>
<div class="modal-body">
<p class="modal-description" id="modal-description">
            Adicione um novo registro ao estoque preenchendo as informações abaixo.
          </p>
<form id="item-form">
<!-- Seção Rota -->
<div class="form-section">
<h4>Rota</h4>
<div class="form-group">
<label for="route">Selecione a Rota</label>
<select class="form-control" id="route" required="">
<option value="">Selecione...</option>
<option value="DM">DM</option>
<option value="Sucata">Sucata</option>
<option value="Quarentena">Quarentena</option>
<option value="Sala Climatizada">Sala Climatizada</option>
<option value="Reparo">Reparo</option>
</select>
</div>
</div>
<!-- Seção Anexo -->
<div class="form-section">
<h4>Selecione</h4>
<div class="form-group">
<label for="has-image">Registre</label>
<select class="form-control" id="has-image" required="">
<option value="Não">Não</option>
<option value="Sim">Sim</option>
</select>
</div>
<div class="form-group" id="image-upload-group" style="display:none;">
<label for="image-upload">Anexar imagem</label>
<input accept="image/*" id="image-upload" type="file"/>
<div id="preview" style="margin-top:10px;"></div>
</div>
</div>
</form>
</div>
<div class="modal-footer">
<button class="btn btn-outline" id="cancel-modal-btn" type="button">Cancelar</button>
<button class="btn btn-outline" id="clear-form-btn" type="button">
<i class="fas fa-undo"></i> Limpar
          </button>
<button class="btn btn-primary" id="save-item-btn" type="button">
<i class="fas fa-save"></i> Salvar
          </button>
</div>
</div>
</div>
</div>
&lt;!-- script omitido: movido para /public/static/js --&gt;
`}})}function Mm(){const e=g.useRef(null);return g.useEffect(()=>{},[]),M.jsx("div",{ref:e,dangerouslySetInnerHTML:{__html:`
<!-- Toast Container -->
<div class="toast-container" id="toast-container"></div>
<!-- Header -->
<header class="header">
<div class="header-content">
<!-- Botão para abrir o menu -->
<button class="menu-toggle" id="menu-toggle">
<i class="fas fa-bars"></i>
</button>
<!-- Embraer Logo -->
<div class="embraer-logo">
<a aria-label="Ir para página principal" class="logo-link" href="/index.html">
<img alt="Logo Embraer" src="../../../assets/embraer-logo.svg" style="height:50px;"/>
</a>
</div>
<!-- Botão principal -->
<div class="header-actions">
<button class="btn btn-primary btn-pulse" id="add-item-btn">
<i class="fas fa-plus"></i>
          Anotar Registro
        </button>
</div>
</div>
</header>
<!-- Sidebar -->
<aside class="sidebar" id="sidebar">
<button class="close-sidebar" id="close-sidebar">
<i class="fas fa-times"></i>
</button>
<ul class="sidebar-menu">
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-route"></i> Rota
          <i class="fas fa-chevron-down dropdown-icon"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/src/rotas/DM/index_dm.html">DM</a></li>
<li><a href="/src/rotas/Sucata/index_sucata.html">Sucata</a></li>
<li><a href="/src/rotas/Reparo/index_reparo.html">Reparo</a></li>
<li><a href="/src/rotas/Sala-climatizada/index_sc.html">Sala Climatizada</a></li>
<li><a href="/src/rotas/Quarentena/index_quarentena.html">Quarentena</a></li>
</ul>
</li>
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-boxes"></i> MIP
          <i class="fas fa-chevron-down dropdown-icon"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/src/mip/mip_1/index_mip_1.html">1</a></li>
<li><a href="/src/mip/mip_2/index_mip_2.html">2</a></li>
<li><a href="/src/mip/mip_3/index_mip_3.html">3</a></li>
<li><a href="/src/mip/mip_4/index_mip_4.html">4</a></li>
</ul>
</li>
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-snowflake"></i> Freezer
          <i class="fas fa-chevron-down dropdown-icon"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/src/freezer/freezer_2/index_freezer_2.html">2</a></li>
<li><a href="/src/freezer/freezer_3/index_freezer_3.html">3</a></li>
</ul>
</li>
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-map-marker-alt"></i> Ponto
          <i class="fas fa-chevron-down dropdown-icon"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/src/pontos/163/index_163.html">163</a></li>
<li><a href="/src/pontos/164/index_164.html">164</a></li>
<li><a href="/src/pontos/165/index_165.html">165</a></li>
</ul>
</li>
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-plug"></i> PDU
        </a>
</li>
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-route"></i> Site
          <i class="fas fa-chevron-down dropdown-icon"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/index.html">SJK</a></li>
<li><a href="#">SOD</a></li>
<li><a href="#">GPX</a></li>
</ul>
</li>
</ul>
</aside>
<!-- Conteúdo principal -->
<div class="container">
<div class="stats-cards">
<div class="stat-card registered">
<div class="stat-icon"><i class="fas fa-check-circle"></i></div>
<div class="stat-info">
<h4>Registrados</h4>
<p id="registered-count">45</p>
</div>
</div>
<div class="stat-card not-registered">
<div class="stat-icon"><i class="fas fa-times-circle"></i></div>
<div class="stat-info">
<h4>Não Registrados</h4>
<p id="not-registered-count">3</p>
</div>
</div>
</div>
<!-- Filtros -->
<div class="card filters-card">
<div class="card-header">
<h3><i class="fas fa-filter"></i> Filtros</h3>
</div>
<div class="card-content">
<div class="filters-grid">
<div class="filter-group">
<div class="input-with-icon">
<i class="fas fa-search"></i>
<input id="search-input" placeholder="Buscar..." type="text"/>
</div>
</div>
<div class="filter-group">
<select id="status-filter">
<option value="ALL">Todos os Status</option>
<option value="Anexados">Anexados</option>
<option value="Respostas">Respostas</option>
</select>
</div>
</div>
</div>
</div>
<!-- Tabela -->
<div class="card table-card">
<div class="table-container">
<table class="stock-table">
<thead>
<tr>
<th style="width: 50%;">Rota</th>
<th style="width: 25%; text-align: center;">Respostas</th>
<th style="width: 25%; text-align: center;">Anexados</th>
</tr>
</thead>
<tbody id="stock-table-body">
<tr>
<td>Checklist Técnico</td>
<td style="text-align: center;">12</td>
<td style="text-align: center;">5</td>
</tr>
<tr>
<td>Relatório de Voo</td>
<td style="text-align: center;">8</td>
<td style="text-align: center;">2</td>
</tr>
</tbody>
</table>
<div class="no-items" id="no-items-message" style="display:none;">
          Nenhum item encontrado
        </div>
</div>
</div>
<!-- Paginação -->
<div class="pagination">
<div class="pagination-info">
<span id="items-count">Exibindo 0 de 0 itens</span>
</div>
<div class="pagination-controls">
<button class="btn btn-outline btn-sm">Anterior</button>
<button class="btn btn-outline btn-sm">1</button>
<button class="btn btn-outline btn-sm">Próximo</button>
</div>
</div>
<!-- Modal -->
<div class="modal" id="item-modal">
<div class="modal-content">
<div class="modal-header">
<h3 id="modal-title">Anotar Novo Registro</h3>
<button class="modal-close" id="close-modal-btn" type="button">
<i class="fas fa-times"></i>
</button>
</div>
<div class="modal-body">
<p class="modal-description" id="modal-description">
            Adicione um novo registro ao estoque preenchendo as informações abaixo.
          </p>
<form id="item-form">
<!-- Seção Rota -->
<div class="form-section">
<h4>Rota</h4>
<div class="form-group">
<label for="route">Selecione a Rota</label>
<select class="form-control" id="route" required="">
<option value="">Selecione...</option>
<option value="DM">DM</option>
<option value="Sucata">Sucata</option>
<option value="Quarentena">Quarentena</option>
<option value="Sala Climatizada">Sala Climatizada</option>
<option value="Reparo">Reparo</option>
</select>
</div>
</div>
<!-- Seção Anexo -->
<div class="form-section">
<h4>Selecione</h4>
<div class="form-group">
<label for="has-image">Registre</label>
<select class="form-control" id="has-image" required="">
<option value="Não">Não</option>
<option value="Sim">Sim</option>
</select>
</div>
<div class="form-group" id="image-upload-group" style="display:none;">
<label for="image-upload">Anexar imagem</label>
<input accept="image/*" id="image-upload" type="file"/>
<div id="preview" style="margin-top:10px;"></div>
</div>
</div>
</form>
</div>
<div class="modal-footer">
<button class="btn btn-outline" id="cancel-modal-btn" type="button">Cancelar</button>
<button class="btn btn-outline" id="clear-form-btn" type="button">
<i class="fas fa-undo"></i> Limpar
          </button>
<button class="btn btn-primary" id="save-item-btn" type="button">
<i class="fas fa-save"></i> Salvar
          </button>
</div>
</div>
</div>
</div>
&lt;!-- script omitido: movido para /public/static/js --&gt;
`}})}function Om(){const e=g.useRef(null);return g.useEffect(()=>{},[]),M.jsx("div",{ref:e,dangerouslySetInnerHTML:{__html:`
<!-- Toast Container -->
<div class="toast-container" id="toast-container"></div>
<!-- Header -->
<header class="header">
<div class="header-content">
<!-- Botão para abrir o menu -->
<button class="menu-toggle" id="menu-toggle">
<i class="fas fa-bars"></i>
</button>
<!-- Embraer Logo -->
<div class="embraer-logo">
<a aria-label="Ir para página principal" class="logo-link" href="/index.html">
<img alt="Logo Embraer" src="../../../assets/embraer-logo.svg" style="height:50px;"/>
</a>
</div>
<!-- Botão principal -->
<div class="header-actions">
<button class="btn btn-primary btn-pulse" id="add-item-btn">
<i class="fas fa-plus"></i>
          Anotar Registro
        </button>
</div>
</div>
</header>
<!-- Sidebar -->
<aside class="sidebar" id="sidebar">
<button class="close-sidebar" id="close-sidebar">
<i class="fas fa-times"></i>
</button>
<ul class="sidebar-menu">
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-route"></i> Rota
          <i class="fas fa-chevron-down dropdown-icon"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/src/rotas/DM/index_dm.html">DM</a></li>
<li><a href="/src/rotas/Sucata/index_sucata.html">Sucata</a></li>
<li><a href="/src/rotas/Reparo/index_reparo.html">Reparo</a></li>
<li><a href="/src/rotas/Sala-climatizada/index_sc.html">Sala Climatizada</a></li>
<li><a href="/src/rotas/Quarentena/index_quarentena.html">Quarentena</a></li>
</ul>
</li>
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-boxes"></i> MIP
          <i class="fas fa-chevron-down dropdown-icon"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/src/mip/mip_1/index_mip_1.html">1</a></li>
<li><a href="/src/mip/mip_2/index_mip_2.html">2</a></li>
<li><a href="/src/mip/mip_3/index_mip_3.html">3</a></li>
<li><a href="/src/mip/mip_4/index_mip_4.html">4</a></li>
</ul>
</li>
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-snowflake"></i> Freezer
          <i class="fas fa-chevron-down dropdown-icon"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/src/freezer/freezer_2/index_freezer_2.html">2</a></li>
<li><a href="/src/freezer/freezer_3/index_freezer_3.html">3</a></li>
</ul>
</li>
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-map-marker-alt"></i> Ponto
          <i class="fas fa-chevron-down dropdown-icon"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/src/pontos/163/index_163.html">163</a></li>
<li><a href="/src/pontos/164/index_164.html">164</a></li>
<li><a href="/src/pontos/165/index_165.html">165</a></li>
</ul>
</li>
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-plug"></i> PDU
        </a>
</li>
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-route"></i> Site
          <i class="fas fa-chevron-down dropdown-icon"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/index.html">SJK</a></li>
<li><a href="#">SOD</a></li>
<li><a href="#">GPX</a></li>
</ul>
</li>
</ul>
</aside>
<!-- Conteúdo principal -->
<div class="container">
<div class="stats-cards">
<div class="stat-card registered">
<div class="stat-icon"><i class="fas fa-check-circle"></i></div>
<div class="stat-info">
<h4>Registrados</h4>
<p id="registered-count">45</p>
</div>
</div>
<div class="stat-card not-registered">
<div class="stat-icon"><i class="fas fa-times-circle"></i></div>
<div class="stat-info">
<h4>Não Registrados</h4>
<p id="not-registered-count">3</p>
</div>
</div>
</div>
<!-- Filtros -->
<div class="card filters-card">
<div class="card-header">
<h3><i class="fas fa-filter"></i> Filtros</h3>
</div>
<div class="card-content">
<div class="filters-grid">
<div class="filter-group">
<div class="input-with-icon">
<i class="fas fa-search"></i>
<input id="search-input" placeholder="Buscar..." type="text"/>
</div>
</div>
<div class="filter-group">
<select id="status-filter">
<option value="ALL">Todos os Status</option>
<option value="Anexados">Anexados</option>
<option value="Respostas">Respostas</option>
</select>
</div>
</div>
</div>
</div>
<!-- Tabela -->
<div class="card table-card">
<div class="table-container">
<table class="stock-table">
<thead>
<tr>
<th style="width: 50%;">Rota</th>
<th style="width: 25%; text-align: center;">Respostas</th>
<th style="width: 25%; text-align: center;">Anexados</th>
</tr>
</thead>
<tbody id="stock-table-body">
<tr>
<td>Checklist Técnico</td>
<td style="text-align: center;">12</td>
<td style="text-align: center;">5</td>
</tr>
<tr>
<td>Relatório de Voo</td>
<td style="text-align: center;">8</td>
<td style="text-align: center;">2</td>
</tr>
</tbody>
</table>
<div class="no-items" id="no-items-message" style="display:none;">
          Nenhum item encontrado
        </div>
</div>
</div>
<!-- Paginação -->
<div class="pagination">
<div class="pagination-info">
<span id="items-count">Exibindo 0 de 0 itens</span>
</div>
<div class="pagination-controls">
<button class="btn btn-outline btn-sm">Anterior</button>
<button class="btn btn-outline btn-sm">1</button>
<button class="btn btn-outline btn-sm">Próximo</button>
</div>
</div>
<!-- Modal -->
<div class="modal" id="item-modal">
<div class="modal-content">
<div class="modal-header">
<h3 id="modal-title">Anotar Novo Registro</h3>
<button class="modal-close" id="close-modal-btn" type="button">
<i class="fas fa-times"></i>
</button>
</div>
<div class="modal-body">
<p class="modal-description" id="modal-description">
            Adicione um novo registro ao estoque preenchendo as informações abaixo.
          </p>
<form id="item-form">
<!-- Seção Rota -->
<div class="form-section">
<h4>Rota</h4>
<div class="form-group">
<label for="route">Selecione a Rota</label>
<select class="form-control" id="route" required="">
<option value="">Selecione...</option>
<option value="DM">DM</option>
<option value="Sucata">Sucata</option>
<option value="Quarentena">Quarentena</option>
<option value="Sala Climatizada">Sala Climatizada</option>
<option value="Reparo">Reparo</option>
</select>
</div>
</div>
<!-- Seção Anexo -->
<div class="form-section">
<h4>Selecione</h4>
<div class="form-group">
<label for="has-image">Registre</label>
<select class="form-control" id="has-image" required="">
<option value="Não">Não</option>
<option value="Sim">Sim</option>
</select>
</div>
<div class="form-group" id="image-upload-group" style="display:none;">
<label for="image-upload">Anexar imagem</label>
<input accept="image/*" id="image-upload" type="file"/>
<div id="preview" style="margin-top:10px;"></div>
</div>
</div>
</form>
</div>
<div class="modal-footer">
<button class="btn btn-outline" id="cancel-modal-btn" type="button">Cancelar</button>
<button class="btn btn-outline" id="clear-form-btn" type="button">
<i class="fas fa-undo"></i> Limpar
          </button>
<button class="btn btn-primary" id="save-item-btn" type="button">
<i class="fas fa-save"></i> Salvar
          </button>
</div>
</div>
</div>
</div>
&lt;!-- script omitido: movido para /public/static/js --&gt;
`}})}function Im(){const e=g.useRef(null);return g.useEffect(()=>{},[]),M.jsx("div",{ref:e,dangerouslySetInnerHTML:{__html:`
<!-- Toast Container -->
<div class="toast-container" id="toast-container"></div>
<!-- Header -->
<header class="header">
<div class="header-content">
<!-- Botão para abrir o menu -->
<button class="menu-toggle" id="menu-toggle">
<i class="fas fa-bars"></i>
</button>
<!-- Embraer Logo -->
<div class="embraer-logo">
<a aria-label="Ir para página principal" class="logo-link" href="/index.html">
<img alt="Logo Embraer" src="../../../assets/embraer-logo.svg" style="height:50px;"/>
</a>
</div>
<!-- Botão principal -->
<div class="header-actions">
<button class="btn btn-primary btn-pulse" id="add-item-btn">
<i class="fas fa-plus"></i>
          Anotar Registro
        </button>
</div>
</div>
</header>
<!-- Sidebar -->
<aside class="sidebar" id="sidebar">
<button class="close-sidebar" id="close-sidebar">
<i class="fas fa-times"></i>
</button>
<ul class="sidebar-menu">
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-route"></i> Rota
          <i class="fas fa-chevron-down dropdown-icon"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/src/rotas/DM/index_dm.html">DM</a></li>
<li><a href="/src/rotas/Sucata/index_sucata.html">Sucata</a></li>
<li><a href="/src/rotas/Reparo/index_reparo.html">Reparo</a></li>
<li><a href="/src/rotas/Sala-climatizada/index_sc.html">Sala Climatizada</a></li>
<li><a href="/src/rotas/Quarentena/index_quarentena.html">Quarentena</a></li>
</ul>
</li>
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-boxes"></i> MIP
          <i class="fas fa-chevron-down dropdown-icon"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/src/mip/mip_1/index_mip_1.html">1</a></li>
<li><a href="/src/mip/mip_2/index_mip_2.html">2</a></li>
<li><a href="/src/mip/mip_3/index_mip_3.html">3</a></li>
<li><a href="/src/mip/mip_4/index_mip_4.html">4</a></li>
</ul>
</li>
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-snowflake"></i> Freezer
          <i class="fas fa-chevron-down dropdown-icon"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/src/freezer/freezer_2/index_freezer_2.html">2</a></li>
<li><a href="/src/freezer/freezer_3/index_freezer_3.html">3</a></li>
</ul>
</li>
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-map-marker-alt"></i> Ponto
          <i class="fas fa-chevron-down dropdown-icon"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/src/pontos/163/index_163.html">163</a></li>
<li><a href="/src/pontos/164/index_164.html">164</a></li>
<li><a href="/src/pontos/165/index_165.html">165</a></li>
</ul>
</li>
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-plug"></i> PDU
        </a>
</li>
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-route"></i> Site
          <i class="fas fa-chevron-down dropdown-icon"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/index.html">SJK</a></li>
<li><a href="#">SOD</a></li>
<li><a href="#">GPX</a></li>
</ul>
</li>
</ul>
</aside>
<!-- Conteúdo principal -->
<div class="container">
<div class="stats-cards">
<div class="stat-card registered">
<div class="stat-icon"><i class="fas fa-check-circle"></i></div>
<div class="stat-info">
<h4>Registrados</h4>
<p id="registered-count">45</p>
</div>
</div>
<div class="stat-card not-registered">
<div class="stat-icon"><i class="fas fa-times-circle"></i></div>
<div class="stat-info">
<h4>Não Registrados</h4>
<p id="not-registered-count">3</p>
</div>
</div>
</div>
<!-- Filtros -->
<div class="card filters-card">
<div class="card-header">
<h3><i class="fas fa-filter"></i> Filtros</h3>
</div>
<div class="card-content">
<div class="filters-grid">
<div class="filter-group">
<div class="input-with-icon">
<i class="fas fa-search"></i>
<input id="search-input" placeholder="Buscar..." type="text"/>
</div>
</div>
<div class="filter-group">
<select id="status-filter">
<option value="ALL">Todos os Status</option>
<option value="Anexados">Anexados</option>
<option value="Respostas">Respostas</option>
</select>
</div>
</div>
</div>
</div>
<!-- Tabela -->
<div class="card table-card">
<div class="table-container">
<table class="stock-table">
<thead>
<tr>
<th style="width: 70%;">Rota</th>
<th style="width: 30%; text-align: center;">Respostas</th>
</tr>
</thead>
<tbody id="stock-table-body">
<tr>
<td>Checklist Técnico</td>
<td style="text-align: center;">12</td>
</tr>
<tr>
<td>Relatório de Voo</td>
<td style="text-align: center;">8</td>
</tr>
</tbody>
</table>
<div class="no-items" id="no-items-message" style="display:none;">
      Nenhum item encontrado
    </div>
</div>
</div>
<!-- Paginação -->
<div class="pagination">
<div class="pagination-info">
<span id="items-count">Exibindo 0 de 0 itens</span>
</div>
<div class="pagination-controls">
<button class="btn btn-outline btn-sm">Anterior</button>
<button class="btn btn-outline btn-sm">1</button>
<button class="btn btn-outline btn-sm">Próximo</button>
</div>
</div>
<!-- Modal -->
<div class="modal" id="item-modal">
<div class="modal-content">
<div class="modal-header">
<h3 id="modal-title">Anotar Novo Registro</h3>
<button class="modal-close" id="close-modal-btn" type="button">
<i class="fas fa-times"></i>
</button>
</div>
<div class="modal-body">
<p class="modal-description" id="modal-description">
            Adicione um novo registro ao estoque preenchendo as informações abaixo.
          </p>
<form id="item-form">
<!-- Seção Rota -->
<div class="form-section">
<h4>Rota</h4>
<div class="form-group">
<label for="route">Selecione a Rota</label>
<select class="form-control" id="route" required="">
<option value="">Selecione...</option>
<option value="DM">DM</option>
<option value="Sucata">Sucata</option>
<option value="Quarentena">Quarentena</option>
<option value="Sala Climatizada">Sala Climatizada</option>
<option value="Reparo">Reparo</option>
</select>
</div>
</div>
<!-- Seção Anexo -->
<div class="form-section">
<h4>Selecione</h4>
<div class="form-group">
<label for="has-image">Registre</label>
<select class="form-control" id="has-image" required="">
<option value="Não">Não</option>
<option value="Sim">Sim</option>
</select>
</div>
<div class="modal-footer">
<button class="btn btn-outline" id="cancel-modal-btn" type="button">Cancelar</button>
<button class="btn btn-outline" id="clear-form-btn" type="button">
<i class="fas fa-undo"></i> Limpar
          </button>
<button class="btn btn-primary" id="save-item-btn" type="button">
<i class="fas fa-save"></i> Salvar
          </button>
</div>
</div>
</form></div>
</div>
&lt;!-- script omitido: movido para /public/static/js --&gt;
</div></div>`}})}function Fm(){const e=g.useRef(null);return g.useEffect(()=>{},[]),M.jsx("div",{ref:e,dangerouslySetInnerHTML:{__html:`
<!-- Toast Container -->
<div class="toast-container" id="toast-container"></div>
<!-- Header -->
<header class="header">
<div class="header-content">
<!-- Botão para abrir o menu -->
<button class="menu-toggle" id="menu-toggle">
<i class="fas fa-bars"></i>
</button>
<!-- Embraer Logo -->
<div class="embraer-logo">
<a aria-label="Ir para página principal" class="logo-link" href="/index.html">
<img alt="Logo Embraer" src="../../../assets/embraer-logo.svg" style="height:50px;"/>
</a>
</div>
<!-- Botão principal -->
<div class="header-actions">
<button class="btn btn-primary btn-pulse" id="add-item-btn">
<i class="fas fa-plus"></i>
          Anotar Registro
        </button>
</div>
</div>
</header>
<!-- Sidebar -->
<aside class="sidebar" id="sidebar">
<button class="close-sidebar" id="close-sidebar">
<i class="fas fa-times"></i>
</button>
<ul class="sidebar-menu">
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-route"></i> Rota
          <i class="fas fa-chevron-down dropdown-icon"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/src/rotas/DM/index_dm.html">DM</a></li>
<li><a href="/src/rotas/Sucata/index_sucata.html">Sucata</a></li>
<li><a href="/src/rotas/Reparo/index_reparo.html">Reparo</a></li>
<li><a href="/src/rotas/Sala-climatizada/index_sc.html">Sala Climatizada</a></li>
<li><a href="/src/rotas/Quarentena/index_quarentena.html">Quarentena</a></li>
</ul>
</li>
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-boxes"></i> MIP
          <i class="fas fa-chevron-down dropdown-icon"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/src/mip/mip_1/index_mip_1.html">1</a></li>
<li><a href="/src/mip/mip_2/index_mip_2.html">2</a></li>
<li><a href="/src/mip/mip_3/index_mip_3.html">3</a></li>
<li><a href="/src/mip/mip_4/index_mip_4.html">4</a></li>
</ul>
</li>
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-snowflake"></i> Freezer
          <i class="fas fa-chevron-down dropdown-icon"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/src/freezer/freezer_2/index_freezer_2.html">2</a></li>
<li><a href="/src/freezer/freezer_3/index_freezer_3.html">3</a></li>
</ul>
</li>
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-map-marker-alt"></i> Ponto
          <i class="fas fa-chevron-down dropdown-icon"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/src/pontos/163/index_163.html">163</a></li>
<li><a href="/src/pontos/164/index_164.html">164</a></li>
<li><a href="/src/pontos/165/index_165.html">165</a></li>
</ul>
</li>
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-plug"></i> PDU
        </a>
</li>
<li class="sidebar-item">
<a class="sidebar-link" href="#">
<i class="fas fa-route"></i> Site
          <i class="fas fa-chevron-down dropdown-icon"></i>
</a>
<ul class="sidebar-submenu">
<li><a href="/index.html">SJK</a></li>
<li><a href="#">SOD</a></li>
<li><a href="#">GPX</a></li>
</ul>
</li>
</ul>
</aside>
<!-- Conteúdo principal -->
<div class="container">
<div class="stats-cards">
<div class="stat-card registered">
<div class="stat-icon"><i class="fas fa-check-circle"></i></div>
<div class="stat-info">
<h4>Registrados</h4>
<p id="registered-count">45</p>
</div>
</div>
<div class="stat-card not-registered">
<div class="stat-icon"><i class="fas fa-times-circle"></i></div>
<div class="stat-info">
<h4>Não Registrados</h4>
<p id="not-registered-count">3</p>
</div>
</div>
</div>
<!-- Filtros -->
<div class="card filters-card">
<div class="card-header">
<h3><i class="fas fa-filter"></i> Filtros</h3>
</div>
<div class="card-content">
<div class="filters-grid">
<div class="filter-group">
<div class="input-with-icon">
<i class="fas fa-search"></i>
<input id="search-input" placeholder="Buscar..." type="text"/>
</div>
</div>
<div class="filter-group">
<select id="status-filter">
<option value="ALL">Todos os Status</option>
<option value="Anexados">Anexados</option>
<option value="Respostas">Respostas</option>
</select>
</div>
</div>
</div>
</div>
<!-- Tabela -->
<div class="card table-card">
<div class="table-container">
<table class="stock-table">
<thead>
<tr>
<th style="width: 50%;">Rota</th>
<th style="width: 25%; text-align: center;">Respostas</th>
<th style="width: 25%; text-align: center;">Anexados</th>
</tr>
</thead>
<tbody id="stock-table-body">
<tr>
<td>Checklist Técnico</td>
<td style="text-align: center;">12</td>
<td style="text-align: center;">5</td>
</tr>
<tr>
<td>Relatório de Voo</td>
<td style="text-align: center;">8</td>
<td style="text-align: center;">2</td>
</tr>
</tbody>
</table>
<div class="no-items" id="no-items-message" style="display:none;">
          Nenhum item encontrado
        </div>
</div>
</div>
<!-- Paginação -->
<div class="pagination">
<div class="pagination-info">
<span id="items-count">Exibindo 0 de 0 itens</span>
</div>
<div class="pagination-controls">
<button class="btn btn-outline btn-sm">Anterior</button>
<button class="btn btn-outline btn-sm">1</button>
<button class="btn btn-outline btn-sm">Próximo</button>
</div>
</div>
<!-- Modal -->
<div class="modal" id="item-modal">
<div class="modal-content">
<div class="modal-header">
<h3 id="modal-title">Anotar Novo Registro</h3>
<button class="modal-close" id="close-modal-btn" type="button">
<i class="fas fa-times"></i>
</button>
</div>
<div class="modal-body">
<p class="modal-description" id="modal-description">
            Adicione um novo registro ao estoque preenchendo as informações abaixo.
          </p>
<form id="item-form">
<!-- Seção Rota -->
<div class="form-section">
<h4>Rota</h4>
<div class="form-group">
<label for="route">Selecione a Rota</label>
<select class="form-control" id="route" required="">
<option value="">Selecione...</option>
<option value="DM">DM</option>
<option value="Sucata">Sucata</option>
<option value="Quarentena">Quarentena</option>
<option value="Sala Climatizada">Sala Climatizada</option>
<option value="Reparo">Reparo</option>
</select>
</div>
</div>
<!-- Seção Anexo -->
<div class="form-section">
<h4>Selecione</h4>
<div class="form-group">
<label for="has-image">Registre</label>
<select class="form-control" id="has-image" required="">
<option value="Não">Não</option>
<option value="Sim">Sim</option>
</select>
</div>
<div class="form-group" id="image-upload-group" style="display:none;">
<label for="image-upload">Anexar imagem</label>
<input accept="image/*" id="image-upload" type="file"/>
<div id="preview" style="margin-top:10px;"></div>
</div>
</div>
</form>
</div>
<div class="modal-footer">
<button class="btn btn-outline" id="cancel-modal-btn" type="button">Cancelar</button>
<button class="btn btn-outline" id="clear-form-btn" type="button">
<i class="fas fa-undo"></i> Limpar
          </button>
<button class="btn btn-primary" id="save-item-btn" type="button">
<i class="fas fa-save"></i> Salvar
          </button>
</div>
</div>
</div>
</div>
&lt;!-- script omitido: movido para /public/static/js --&gt;
`}})}const vs=[{path:"/",Component:wm,label:"index.html"},{path:"/src/freezer/freezer_2/index_freezer_2",Component:_m,label:"index_freezer_2.html"},{path:"/src/freezer/freezer_3/index_freezer_3",Component:Em,label:"index_freezer_3.html"},{path:"/src/login/login",Component:km,label:"login.html"},{path:"/src/mip/mip_1/index_mip_1",Component:Cm,label:"index_mip_1.html"},{path:"/src/mip/mip_2/index_mip_2",Component:Rm,label:"index_mip_2.html"},{path:"/src/mip/mip_3/index_mip_3",Component:zm,label:"index_mip_3.html"},{path:"/src/mip/mip_4/index_mip_4",Component:Pm,label:"index_mip_4.html"},{path:"/src/pontos/163/index_163",Component:Dm,label:"index_163.html"},{path:"/src/pontos/164/index_164",Component:Nm,label:"index_164.html"},{path:"/src/pontos/165/index_165",Component:Lm,label:"index_165.html"},{path:"/src/rotas/DM/index_dm",Component:Tm,label:"index_dm.html"},{path:"/src/rotas/Quarentena/index_quarentena",Component:Mm,label:"index_quarentena.html"},{path:"/src/rotas/Reparo/index_reparo",Component:Om,label:"index_reparo.html"},{path:"/src/rotas/Sala-climatizada/index_sc",Component:Im,label:"index_sc.html"},{path:"/src/rotas/Sucata/index_sucata",Component:Fm,label:"index_sucata.html"}];function Am(){return M.jsx(gm,{children:M.jsxs("div",{className:"app-shell",children:[M.jsxs("aside",{className:"sidebar",children:[M.jsx("h2",{children:"Páginas"}),M.jsx("nav",{children:M.jsx("ul",{className:"nav-list",children:vs.map(e=>M.jsx("li",{children:M.jsx(Sm,{to:e.path,children:e.label})},e.path))})})]}),M.jsx("main",{className:"main",children:M.jsxs(cm,{children:[vs.map(e=>M.jsx(Xr,{path:e.path,element:M.jsx(e.Component,{})},e.path)),M.jsx(Xr,{path:"*",element:M.jsx("div",{children:"Selecione uma página no menu."})})]})})]})})}zc(document.getElementById("root")).render(M.jsx(Am,{}));
