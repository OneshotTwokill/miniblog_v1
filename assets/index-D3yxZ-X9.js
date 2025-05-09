(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}})();function SP(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Jy={exports:{}},Kc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ib;function RP(){if(Ib)return Kc;Ib=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(r,a,o){var u=null;if(o!==void 0&&(u=""+o),a.key!==void 0&&(u=""+a.key),"key"in a){o={};for(var d in a)d!=="key"&&(o[d]=a[d])}else o=a;return a=o.ref,{$$typeof:n,type:r,key:u,ref:a!==void 0?a:null,props:o}}return Kc.Fragment=e,Kc.jsx=t,Kc.jsxs=t,Kc}var Ab;function CP(){return Ab||(Ab=1,Jy.exports=RP()),Jy.exports}var Y=CP(),e_={exports:{}},Qc={},t_={exports:{}},n_={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sb;function DP(){return Sb||(Sb=1,function(n){function e(he,be){var Te=he.length;he.push(be);e:for(;0<Te;){var Ne=Te-1>>>1,O=he[Ne];if(0<a(O,be))he[Ne]=be,he[Te]=O,Te=Ne;else break e}}function t(he){return he.length===0?null:he[0]}function r(he){if(he.length===0)return null;var be=he[0],Te=he.pop();if(Te!==be){he[0]=Te;e:for(var Ne=0,O=he.length,ie=O>>>1;Ne<ie;){var ge=2*(Ne+1)-1,pe=he[ge],fe=ge+1,Ce=he[fe];if(0>a(pe,Te))fe<O&&0>a(Ce,pe)?(he[Ne]=Ce,he[fe]=Te,Ne=fe):(he[Ne]=pe,he[ge]=Te,Ne=ge);else if(fe<O&&0>a(Ce,Te))he[Ne]=Ce,he[fe]=Te,Ne=fe;else break e}}return be}function a(he,be){var Te=he.sortIndex-be.sortIndex;return Te!==0?Te:he.id-be.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var o=performance;n.unstable_now=function(){return o.now()}}else{var u=Date,d=u.now();n.unstable_now=function(){return u.now()-d}}var p=[],m=[],_=1,v=null,w=3,S=!1,x=!1,U=!1,M=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,$=typeof setImmediate<"u"?setImmediate:null;function K(he){for(var be=t(m);be!==null;){if(be.callback===null)r(m);else if(be.startTime<=he)r(m),be.sortIndex=be.expirationTime,e(p,be);else break;be=t(m)}}function oe(he){if(U=!1,K(he),!x)if(t(p)!==null)x=!0,Nt();else{var be=t(m);be!==null&&It(oe,be.startTime-he)}}var ae=!1,le=-1,D=5,R=-1;function A(){return!(n.unstable_now()-R<D)}function P(){if(ae){var he=n.unstable_now();R=he;var be=!0;try{e:{x=!1,U&&(U=!1,H(le),le=-1),S=!0;var Te=w;try{t:{for(K(he),v=t(p);v!==null&&!(v.expirationTime>he&&A());){var Ne=v.callback;if(typeof Ne=="function"){v.callback=null,w=v.priorityLevel;var O=Ne(v.expirationTime<=he);if(he=n.unstable_now(),typeof O=="function"){v.callback=O,K(he),be=!0;break t}v===t(p)&&r(p),K(he)}else r(p);v=t(p)}if(v!==null)be=!0;else{var ie=t(m);ie!==null&&It(oe,ie.startTime-he),be=!1}}break e}finally{v=null,w=Te,S=!1}be=void 0}}finally{be?V():ae=!1}}}var V;if(typeof $=="function")V=function(){$(P)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,N=z.port2;z.port1.onmessage=P,V=function(){N.postMessage(null)}}else V=function(){M(P,0)};function Nt(){ae||(ae=!0,V())}function It(he,be){le=M(function(){he(n.unstable_now())},be)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(he){he.callback=null},n.unstable_continueExecution=function(){x||S||(x=!0,Nt())},n.unstable_forceFrameRate=function(he){0>he||125<he?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<he?Math.floor(1e3/he):5},n.unstable_getCurrentPriorityLevel=function(){return w},n.unstable_getFirstCallbackNode=function(){return t(p)},n.unstable_next=function(he){switch(w){case 1:case 2:case 3:var be=3;break;default:be=w}var Te=w;w=be;try{return he()}finally{w=Te}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(he,be){switch(he){case 1:case 2:case 3:case 4:case 5:break;default:he=3}var Te=w;w=he;try{return be()}finally{w=Te}},n.unstable_scheduleCallback=function(he,be,Te){var Ne=n.unstable_now();switch(typeof Te=="object"&&Te!==null?(Te=Te.delay,Te=typeof Te=="number"&&0<Te?Ne+Te:Ne):Te=Ne,he){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=Te+O,he={id:_++,callback:be,priorityLevel:he,startTime:Te,expirationTime:O,sortIndex:-1},Te>Ne?(he.sortIndex=Te,e(m,he),t(p)===null&&he===t(m)&&(U?(H(le),le=-1):U=!0,It(oe,Te-Ne))):(he.sortIndex=O,e(p,he),x||S||(x=!0,Nt())),he},n.unstable_shouldYield=A,n.unstable_wrapCallback=function(he){var be=w;return function(){var Te=w;w=be;try{return he.apply(this,arguments)}finally{w=Te}}}}(n_)),n_}var Rb;function xP(){return Rb||(Rb=1,t_.exports=DP()),t_.exports}var r_={exports:{}},Pe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cb;function PP(){if(Cb)return Pe;Cb=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),o=Symbol.for("react.consumer"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.iterator;function w(O){return O===null||typeof O!="object"?null:(O=v&&O[v]||O["@@iterator"],typeof O=="function"?O:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,U={};function M(O,ie,ge){this.props=O,this.context=ie,this.refs=U,this.updater=ge||S}M.prototype.isReactComponent={},M.prototype.setState=function(O,ie){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,ie,"setState")},M.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function H(){}H.prototype=M.prototype;function $(O,ie,ge){this.props=O,this.context=ie,this.refs=U,this.updater=ge||S}var K=$.prototype=new H;K.constructor=$,x(K,M.prototype),K.isPureReactComponent=!0;var oe=Array.isArray,ae={H:null,A:null,T:null,S:null},le=Object.prototype.hasOwnProperty;function D(O,ie,ge,pe,fe,Ce){return ge=Ce.ref,{$$typeof:n,type:O,key:ie,ref:ge!==void 0?ge:null,props:Ce}}function R(O,ie){return D(O.type,ie,void 0,void 0,void 0,O.props)}function A(O){return typeof O=="object"&&O!==null&&O.$$typeof===n}function P(O){var ie={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ge){return ie[ge]})}var V=/\/+/g;function z(O,ie){return typeof O=="object"&&O!==null&&O.key!=null?P(""+O.key):ie.toString(36)}function N(){}function Nt(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(N,N):(O.status="pending",O.then(function(ie){O.status==="pending"&&(O.status="fulfilled",O.value=ie)},function(ie){O.status==="pending"&&(O.status="rejected",O.reason=ie)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function It(O,ie,ge,pe,fe){var Ce=typeof O;(Ce==="undefined"||Ce==="boolean")&&(O=null);var Re=!1;if(O===null)Re=!0;else switch(Ce){case"bigint":case"string":case"number":Re=!0;break;case"object":switch(O.$$typeof){case n:case e:Re=!0;break;case _:return Re=O._init,It(Re(O._payload),ie,ge,pe,fe)}}if(Re)return fe=fe(O),Re=pe===""?"."+z(O,0):pe,oe(fe)?(ge="",Re!=null&&(ge=Re.replace(V,"$&/")+"/"),It(fe,ie,ge,"",function(Ze){return Ze})):fe!=null&&(A(fe)&&(fe=R(fe,ge+(fe.key==null||O&&O.key===fe.key?"":(""+fe.key).replace(V,"$&/")+"/")+Re)),ie.push(fe)),1;Re=0;var ut=pe===""?".":pe+":";if(oe(O))for(var Ve=0;Ve<O.length;Ve++)pe=O[Ve],Ce=ut+z(pe,Ve),Re+=It(pe,ie,ge,Ce,fe);else if(Ve=w(O),typeof Ve=="function")for(O=Ve.call(O),Ve=0;!(pe=O.next()).done;)pe=pe.value,Ce=ut+z(pe,Ve++),Re+=It(pe,ie,ge,Ce,fe);else if(Ce==="object"){if(typeof O.then=="function")return It(Nt(O),ie,ge,pe,fe);throw ie=String(O),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.")}return Re}function he(O,ie,ge){if(O==null)return O;var pe=[],fe=0;return It(O,pe,"","",function(Ce){return ie.call(ge,Ce,fe++)}),pe}function be(O){if(O._status===-1){var ie=O._result;ie=ie(),ie.then(function(ge){(O._status===0||O._status===-1)&&(O._status=1,O._result=ge)},function(ge){(O._status===0||O._status===-1)&&(O._status=2,O._result=ge)}),O._status===-1&&(O._status=0,O._result=ie)}if(O._status===1)return O._result.default;throw O._result}var Te=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ie=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(ie))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function Ne(){}return Pe.Children={map:he,forEach:function(O,ie,ge){he(O,function(){ie.apply(this,arguments)},ge)},count:function(O){var ie=0;return he(O,function(){ie++}),ie},toArray:function(O){return he(O,function(ie){return ie})||[]},only:function(O){if(!A(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Pe.Component=M,Pe.Fragment=t,Pe.Profiler=a,Pe.PureComponent=$,Pe.StrictMode=r,Pe.Suspense=p,Pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ae,Pe.act=function(){throw Error("act(...) is not supported in production builds of React.")},Pe.cache=function(O){return function(){return O.apply(null,arguments)}},Pe.cloneElement=function(O,ie,ge){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var pe=x({},O.props),fe=O.key,Ce=void 0;if(ie!=null)for(Re in ie.ref!==void 0&&(Ce=void 0),ie.key!==void 0&&(fe=""+ie.key),ie)!le.call(ie,Re)||Re==="key"||Re==="__self"||Re==="__source"||Re==="ref"&&ie.ref===void 0||(pe[Re]=ie[Re]);var Re=arguments.length-2;if(Re===1)pe.children=ge;else if(1<Re){for(var ut=Array(Re),Ve=0;Ve<Re;Ve++)ut[Ve]=arguments[Ve+2];pe.children=ut}return D(O.type,fe,void 0,void 0,Ce,pe)},Pe.createContext=function(O){return O={$$typeof:u,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:o,_context:O},O},Pe.createElement=function(O,ie,ge){var pe,fe={},Ce=null;if(ie!=null)for(pe in ie.key!==void 0&&(Ce=""+ie.key),ie)le.call(ie,pe)&&pe!=="key"&&pe!=="__self"&&pe!=="__source"&&(fe[pe]=ie[pe]);var Re=arguments.length-2;if(Re===1)fe.children=ge;else if(1<Re){for(var ut=Array(Re),Ve=0;Ve<Re;Ve++)ut[Ve]=arguments[Ve+2];fe.children=ut}if(O&&O.defaultProps)for(pe in Re=O.defaultProps,Re)fe[pe]===void 0&&(fe[pe]=Re[pe]);return D(O,Ce,void 0,void 0,null,fe)},Pe.createRef=function(){return{current:null}},Pe.forwardRef=function(O){return{$$typeof:d,render:O}},Pe.isValidElement=A,Pe.lazy=function(O){return{$$typeof:_,_payload:{_status:-1,_result:O},_init:be}},Pe.memo=function(O,ie){return{$$typeof:m,type:O,compare:ie===void 0?null:ie}},Pe.startTransition=function(O){var ie=ae.T,ge={};ae.T=ge;try{var pe=O(),fe=ae.S;fe!==null&&fe(ge,pe),typeof pe=="object"&&pe!==null&&typeof pe.then=="function"&&pe.then(Ne,Te)}catch(Ce){Te(Ce)}finally{ae.T=ie}},Pe.unstable_useCacheRefresh=function(){return ae.H.useCacheRefresh()},Pe.use=function(O){return ae.H.use(O)},Pe.useActionState=function(O,ie,ge){return ae.H.useActionState(O,ie,ge)},Pe.useCallback=function(O,ie){return ae.H.useCallback(O,ie)},Pe.useContext=function(O){return ae.H.useContext(O)},Pe.useDebugValue=function(){},Pe.useDeferredValue=function(O,ie){return ae.H.useDeferredValue(O,ie)},Pe.useEffect=function(O,ie){return ae.H.useEffect(O,ie)},Pe.useId=function(){return ae.H.useId()},Pe.useImperativeHandle=function(O,ie,ge){return ae.H.useImperativeHandle(O,ie,ge)},Pe.useInsertionEffect=function(O,ie){return ae.H.useInsertionEffect(O,ie)},Pe.useLayoutEffect=function(O,ie){return ae.H.useLayoutEffect(O,ie)},Pe.useMemo=function(O,ie){return ae.H.useMemo(O,ie)},Pe.useOptimistic=function(O,ie){return ae.H.useOptimistic(O,ie)},Pe.useReducer=function(O,ie,ge){return ae.H.useReducer(O,ie,ge)},Pe.useRef=function(O){return ae.H.useRef(O)},Pe.useState=function(O){return ae.H.useState(O)},Pe.useSyncExternalStore=function(O,ie,ge){return ae.H.useSyncExternalStore(O,ie,ge)},Pe.useTransition=function(){return ae.H.useTransition()},Pe.version="19.0.0",Pe}var Db;function Sv(){return Db||(Db=1,r_.exports=PP()),r_.exports}var i_={exports:{}},wn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xb;function NP(){if(xb)return wn;xb=1;var n=Sv();function e(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)m+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var r={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},a=Symbol.for("react.portal");function o(p,m,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:v==null?null:""+v,children:p,containerInfo:m,implementation:_}}var u=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,wn.createPortal=function(p,m){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return o(p,m,null,_)},wn.flushSync=function(p){var m=u.T,_=r.p;try{if(u.T=null,r.p=2,p)return p()}finally{u.T=m,r.p=_,r.d.f()}},wn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(p,m))},wn.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},wn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var _=m.as,v=d(_,m.crossOrigin),w=typeof m.integrity=="string"?m.integrity:void 0,S=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;_==="style"?r.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:v,integrity:w,fetchPriority:S}):_==="script"&&r.d.X(p,{crossOrigin:v,integrity:w,fetchPriority:S,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},wn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var _=d(m.as,m.crossOrigin);r.d.M(p,{crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(p)},wn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var _=m.as,v=d(_,m.crossOrigin);r.d.L(p,_,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},wn.preloadModule=function(p,m){if(typeof p=="string")if(m){var _=d(m.as,m.crossOrigin);r.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(p)},wn.requestFormReset=function(p){r.d.r(p)},wn.unstable_batchedUpdates=function(p,m){return p(m)},wn.useFormState=function(p,m,_){return u.H.useFormState(p,m,_)},wn.useFormStatus=function(){return u.H.useHostTransitionStatus()},wn.version="19.0.0",wn}var Pb;function OP(){if(Pb)return i_.exports;Pb=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),i_.exports=NP(),i_.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nb;function kP(){if(Nb)return Qc;Nb=1;var n=xP(),e=Sv(),t=OP();function r(i){var s="https://react.dev/errors/"+i;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}var o=Symbol.for("react.element"),u=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),w=Symbol.for("react.consumer"),S=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),U=Symbol.for("react.suspense"),M=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),$=Symbol.for("react.lazy"),K=Symbol.for("react.offscreen"),oe=Symbol.for("react.memo_cache_sentinel"),ae=Symbol.iterator;function le(i){return i===null||typeof i!="object"?null:(i=ae&&i[ae]||i["@@iterator"],typeof i=="function"?i:null)}var D=Symbol.for("react.client.reference");function R(i){if(i==null)return null;if(typeof i=="function")return i.$$typeof===D?null:i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case p:return"Fragment";case d:return"Portal";case _:return"Profiler";case m:return"StrictMode";case U:return"Suspense";case M:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case S:return(i.displayName||"Context")+".Provider";case w:return(i._context.displayName||"Context")+".Consumer";case x:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case H:return s=i.displayName||null,s!==null?s:R(i.type)||"Memo";case $:s=i._payload,i=i._init;try{return R(i(s))}catch{}}return null}var A=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P=Object.assign,V,z;function N(i){if(V===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);V=s&&s[1]||"",z=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+V+i+z}var Nt=!1;function It(i,s){if(!i||Nt)return"";Nt=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(s){var ne=function(){throw Error()};if(Object.defineProperty(ne.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ne,[])}catch(Z){var G=Z}Reflect.construct(i,[],ne)}else{try{ne.call()}catch(Z){G=Z}i.call(ne.prototype)}}else{try{throw Error()}catch(Z){G=Z}(ne=i())&&typeof ne.catch=="function"&&ne.catch(function(){})}}catch(Z){if(Z&&G&&typeof Z.stack=="string")return[Z.stack,G.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var g=c.DetermineComponentFrameRoot(),T=g[0],b=g[1];if(T&&b){var C=T.split(`
`),L=b.split(`
`);for(f=c=0;c<C.length&&!C[c].includes("DetermineComponentFrameRoot");)c++;for(;f<L.length&&!L[f].includes("DetermineComponentFrameRoot");)f++;if(c===C.length||f===L.length)for(c=C.length-1,f=L.length-1;1<=c&&0<=f&&C[c]!==L[f];)f--;for(;1<=c&&0<=f;c--,f--)if(C[c]!==L[f]){if(c!==1||f!==1)do if(c--,f--,0>f||C[c]!==L[f]){var J=`
`+C[c].replace(" at new "," at ");return i.displayName&&J.includes("<anonymous>")&&(J=J.replace("<anonymous>",i.displayName)),J}while(1<=c&&0<=f);break}}}finally{Nt=!1,Error.prepareStackTrace=l}return(l=i?i.displayName||i.name:"")?N(l):""}function he(i){switch(i.tag){case 26:case 27:case 5:return N(i.type);case 16:return N("Lazy");case 13:return N("Suspense");case 19:return N("SuspenseList");case 0:case 15:return i=It(i.type,!1),i;case 11:return i=It(i.type.render,!1),i;case 1:return i=It(i.type,!0),i;default:return""}}function be(i){try{var s="";do s+=he(i),i=i.return;while(i);return s}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}function Te(i){var s=i,l=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(l=s.return),i=s.return;while(i)}return s.tag===3?l:null}function Ne(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function O(i){if(Te(i)!==i)throw Error(r(188))}function ie(i){var s=i.alternate;if(!s){if(s=Te(i),s===null)throw Error(r(188));return s!==i?null:i}for(var l=i,c=s;;){var f=l.return;if(f===null)break;var g=f.alternate;if(g===null){if(c=f.return,c!==null){l=c;continue}break}if(f.child===g.child){for(g=f.child;g;){if(g===l)return O(f),i;if(g===c)return O(f),s;g=g.sibling}throw Error(r(188))}if(l.return!==c.return)l=f,c=g;else{for(var T=!1,b=f.child;b;){if(b===l){T=!0,l=f,c=g;break}if(b===c){T=!0,c=f,l=g;break}b=b.sibling}if(!T){for(b=g.child;b;){if(b===l){T=!0,l=g,c=f;break}if(b===c){T=!0,c=g,l=f;break}b=b.sibling}if(!T)throw Error(r(189))}}if(l.alternate!==c)throw Error(r(190))}if(l.tag!==3)throw Error(r(188));return l.stateNode.current===l?i:s}function ge(i){var s=i.tag;if(s===5||s===26||s===27||s===6)return i;for(i=i.child;i!==null;){if(s=ge(i),s!==null)return s;i=i.sibling}return null}var pe=Array.isArray,fe=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ce={pending:!1,data:null,method:null,action:null},Re=[],ut=-1;function Ve(i){return{current:i}}function Ze(i){0>ut||(i.current=Re[ut],Re[ut]=null,ut--)}function $e(i,s){ut++,Re[ut]=i.current,i.current=s}var Ut=Ve(null),Jt=Ve(null),rr=Ve(null),as=Ve(null);function os(i,s){switch($e(rr,s),$e(Jt,i),$e(Ut,null),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)&&(s=s.namespaceURI)?J0(s):0;break;default:if(i=i===8?s.parentNode:s,s=i.tagName,i=i.namespaceURI)i=J0(i),s=eb(i,s);else switch(s){case"svg":s=1;break;case"math":s=2;break;default:s=0}}Ze(Ut),$e(Ut,s)}function yi(){Ze(Ut),Ze(Jt),Ze(rr)}function ju(i){i.memoizedState!==null&&$e(as,i);var s=Ut.current,l=eb(s,i.type);s!==l&&($e(Jt,i),$e(Ut,l))}function Fo(i){Jt.current===i&&(Ze(Ut),Ze(Jt)),as.current===i&&(Ze(as),jc._currentValue=Ce)}var jo=Object.prototype.hasOwnProperty,Ia=n.unstable_scheduleCallback,qo=n.unstable_cancelCallback,tg=n.unstable_shouldYield,qu=n.unstable_requestPaint,Ln=n.unstable_now,Ad=n.unstable_getCurrentPriorityLevel,Gt=n.unstable_ImmediatePriority,en=n.unstable_UserBlockingPriority,_i=n.unstable_NormalPriority,Sd=n.unstable_LowPriority,Hu=n.unstable_IdlePriority,ng=n.log,Aa=n.unstable_setDisableYieldValue,ls=null,En=null;function Gu(i){if(En&&typeof En.onCommitFiberRoot=="function")try{En.onCommitFiberRoot(ls,i,void 0,(i.current.flags&128)===128)}catch{}}function Vr(i){if(typeof ng=="function"&&Aa(i),En&&typeof En.setStrictMode=="function")try{En.setStrictMode(ls,i)}catch{}}var Rn=Math.clz32?Math.clz32:Cd,$u=Math.log,Rd=Math.LN2;function Cd(i){return i>>>=0,i===0?32:31-($u(i)/Rd|0)|0}var Mr=128,us=4194304;function Ir(i){var s=i&42;if(s!==0)return s;switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return i&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return i}}function ir(i,s){var l=i.pendingLanes;if(l===0)return 0;var c=0,f=i.suspendedLanes,g=i.pingedLanes,T=i.warmLanes;i=i.finishedLanes!==0;var b=l&134217727;return b!==0?(l=b&~f,l!==0?c=Ir(l):(g&=b,g!==0?c=Ir(g):i||(T=b&~T,T!==0&&(c=Ir(T))))):(b=l&~f,b!==0?c=Ir(b):g!==0?c=Ir(g):i||(T=l&~T,T!==0&&(c=Ir(T)))),c===0?0:s!==0&&s!==c&&(s&f)===0&&(f=c&-c,T=s&-s,f>=T||f===32&&(T&4194176)!==0)?s:c}function cs(i,s){return(i.pendingLanes&~(i.suspendedLanes&~i.pingedLanes)&s)===0}function Ho(i,s){switch(i){case 1:case 2:case 4:case 8:return s+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ku(){var i=Mr;return Mr<<=1,(Mr&4194176)===0&&(Mr=128),i}function hs(){var i=us;return us<<=1,(us&62914560)===0&&(us=4194304),i}function Go(i){for(var s=[],l=0;31>l;l++)s.push(i);return s}function Ot(i,s){i.pendingLanes|=s,s!==268435456&&(i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0)}function Dd(i,s,l,c,f,g){var T=i.pendingLanes;i.pendingLanes=l,i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0,i.expiredLanes&=l,i.entangledLanes&=l,i.errorRecoveryDisabledLanes&=l,i.shellSuspendCounter=0;var b=i.entanglements,C=i.expirationTimes,L=i.hiddenUpdates;for(l=T&~l;0<l;){var J=31-Rn(l),ne=1<<J;b[J]=0,C[J]=-1;var G=L[J];if(G!==null)for(L[J]=null,J=0;J<G.length;J++){var Z=G[J];Z!==null&&(Z.lane&=-536870913)}l&=~ne}c!==0&&ds(i,c,0),g!==0&&f===0&&i.tag!==0&&(i.suspendedLanes|=g&~(T&~s))}function ds(i,s,l){i.pendingLanes|=s,i.suspendedLanes&=~s;var c=31-Rn(s);i.entangledLanes|=s,i.entanglements[c]=i.entanglements[c]|1073741824|l&4194218}function fs(i,s){var l=i.entangledLanes|=s;for(i=i.entanglements;l;){var c=31-Rn(l),f=1<<c;f&s|i[c]&s&&(i[c]|=s),l&=~f}}function xd(i){return i&=-i,2<i?8<i?(i&134217727)!==0?32:268435456:8:2}function Pd(){var i=fe.p;return i!==0?i:(i=window.event,i===void 0?32:_b(i.type))}function ps(i,s){var l=fe.p;try{return fe.p=i,s()}finally{fe.p=l}}var Lr=Math.random().toString(36).slice(2),tn="__reactFiber$"+Lr,$t="__reactProps$"+Lr,vi="__reactContainer$"+Lr,Sa="__reactEvents$"+Lr,$o="__reactListeners$"+Lr,Ur="__reactHandles$"+Lr,Qu="__reactResources$"+Lr,ms="__reactMarker$"+Lr;function Ra(i){delete i[tn],delete i[$t],delete i[Sa],delete i[$o],delete i[Ur]}function Ar(i){var s=i[tn];if(s)return s;for(var l=i.parentNode;l;){if(s=l[vi]||l[tn]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(i=rb(i);i!==null;){if(l=i[tn])return l;i=rb(i)}return s}i=l,l=i.parentNode}return null}function Ei(i){if(i=i[tn]||i[vi]){var s=i.tag;if(s===5||s===6||s===13||s===26||s===27||s===3)return i}return null}function gs(i){var s=i.tag;if(s===5||s===26||s===27||s===6)return i.stateNode;throw Error(r(33))}function ys(i){var s=i[Qu];return s||(s=i[Qu]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function yt(i){i[ms]=!0}var Wu=new Set,Ko={};function Gn(i,s){Un(i,s),Un(i+"Capture",s)}function Un(i,s){for(Ko[i]=s,i=0;i<s.length;i++)Wu.add(s[i])}var $n=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),rg=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Yu={},Xu={};function Nd(i){return jo.call(Xu,i)?!0:jo.call(Yu,i)?!1:rg.test(i)?Xu[i]=!0:(Yu[i]=!0,!1)}function _s(i,s,l){if(Nd(s))if(l===null)i.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":i.removeAttribute(s);return;case"boolean":var c=s.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){i.removeAttribute(s);return}}i.setAttribute(s,""+l)}}function vs(i,s,l){if(l===null)i.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(s);return}i.setAttribute(s,""+l)}}function sr(i,s,l,c){if(c===null)i.removeAttribute(l);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(l);return}i.setAttributeNS(s,l,""+c)}}function Cn(i){switch(typeof i){case"bigint":case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Od(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function ig(i){var s=Od(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),c=""+i[s];if(!i.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,g=l.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return f.call(this)},set:function(T){c=""+T,g.call(this,T)}}),Object.defineProperty(i,s,{enumerable:l.enumerable}),{getValue:function(){return c},setValue:function(T){c=""+T},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function Ca(i){i._valueTracker||(i._valueTracker=ig(i))}function Zu(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var l=s.getValue(),c="";return i&&(c=Od(i)?i.checked?"true":"false":i.value),i=c,i!==l?(s.setValue(i),!0):!1}function Qo(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}var Ti=/[\n"\\]/g;function At(i){return i.replace(Ti,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function Es(i,s,l,c,f,g,T,b){i.name="",T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?i.type=T:i.removeAttribute("type"),s!=null?T==="number"?(s===0&&i.value===""||i.value!=s)&&(i.value=""+Cn(s)):i.value!==""+Cn(s)&&(i.value=""+Cn(s)):T!=="submit"&&T!=="reset"||i.removeAttribute("value"),s!=null?Wo(i,T,Cn(s)):l!=null?Wo(i,T,Cn(l)):c!=null&&i.removeAttribute("value"),f==null&&g!=null&&(i.defaultChecked=!!g),f!=null&&(i.checked=f&&typeof f!="function"&&typeof f!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?i.name=""+Cn(b):i.removeAttribute("name")}function Da(i,s,l,c,f,g,T,b){if(g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(i.type=g),s!=null||l!=null){if(!(g!=="submit"&&g!=="reset"||s!=null))return;l=l!=null?""+Cn(l):"",s=s!=null?""+Cn(s):l,b||s===i.value||(i.value=s),i.defaultValue=s}c=c??f,c=typeof c!="function"&&typeof c!="symbol"&&!!c,i.checked=b?i.checked:!!c,i.defaultChecked=!!c,T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"&&(i.name=T)}function Wo(i,s,l){s==="number"&&Qo(i.ownerDocument)===i||i.defaultValue===""+l||(i.defaultValue=""+l)}function Ke(i,s,l,c){if(i=i.options,s){s={};for(var f=0;f<l.length;f++)s["$"+l[f]]=!0;for(l=0;l<i.length;l++)f=s.hasOwnProperty("$"+i[l].value),i[l].selected!==f&&(i[l].selected=f),f&&c&&(i[l].defaultSelected=!0)}else{for(l=""+Cn(l),s=null,f=0;f<i.length;f++){if(i[f].value===l){i[f].selected=!0,c&&(i[f].defaultSelected=!0);return}s!==null||i[f].disabled||(s=i[f])}s!==null&&(s.selected=!0)}}function xa(i,s,l){if(s!=null&&(s=""+Cn(s),s!==i.value&&(i.value=s),l==null)){i.defaultValue!==s&&(i.defaultValue=s);return}i.defaultValue=l!=null?""+Cn(l):""}function Ts(i,s,l,c){if(s==null){if(c!=null){if(l!=null)throw Error(r(92));if(pe(c)){if(1<c.length)throw Error(r(93));c=c[0]}l=c}l==null&&(l=""),s=l}l=Cn(s),i.defaultValue=l,c=i.textContent,c===l&&c!==""&&c!==null&&(i.value=c)}function ar(i,s){if(s){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=s;return}}i.textContent=s}var sg=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ju(i,s,l){var c=s.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?c?i.setProperty(s,""):s==="float"?i.cssFloat="":i[s]="":c?i.setProperty(s,l):typeof l!="number"||l===0||sg.has(s)?s==="float"?i.cssFloat=l:i[s]=(""+l).trim():i[s]=l+"px"}function kd(i,s,l){if(s!=null&&typeof s!="object")throw Error(r(62));if(i=i.style,l!=null){for(var c in l)!l.hasOwnProperty(c)||s!=null&&s.hasOwnProperty(c)||(c.indexOf("--")===0?i.setProperty(c,""):c==="float"?i.cssFloat="":i[c]="");for(var f in s)c=s[f],s.hasOwnProperty(f)&&l[f]!==c&&Ju(i,f,c)}else for(var g in s)s.hasOwnProperty(g)&&Ju(i,g,s[g])}function ec(i){if(i.indexOf("-")===-1)return!1;switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ag=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),og=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Br(i){return og.test(""+i)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":i}var or=null;function Yo(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var wi=null,bi=null;function Ii(i){var s=Ei(i);if(s&&(i=s.stateNode)){var l=i[$t]||null;e:switch(i=s.stateNode,s.type){case"input":if(Es(i,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),s=l.name,l.type==="radio"&&s!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+At(""+s)+'"][type="radio"]'),s=0;s<l.length;s++){var c=l[s];if(c!==i&&c.form===i.form){var f=c[$t]||null;if(!f)throw Error(r(90));Es(c,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(s=0;s<l.length;s++)c=l[s],c.form===i.form&&Zu(c)}break e;case"textarea":xa(i,l.value,l.defaultValue);break e;case"select":s=l.value,s!=null&&Ke(i,!!l.multiple,s,!1)}}}var tc=!1;function Vd(i,s,l){if(tc)return i(s,l);tc=!0;try{var c=i(s);return c}finally{if(tc=!1,(wi!==null||bi!==null)&&(Rf(),wi&&(s=wi,i=bi,bi=wi=null,Ii(s),i)))for(s=0;s<i.length;s++)Ii(i[s])}}function Pa(i,s){var l=i.stateNode;if(l===null)return null;var c=l[$t]||null;if(c===null)return null;l=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(i=i.type,c=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!c;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(r(231,s,typeof l));return l}var lr=!1;if($n)try{var Na={};Object.defineProperty(Na,"passive",{get:function(){lr=!0}}),window.addEventListener("test",Na,Na),window.removeEventListener("test",Na,Na)}catch{lr=!1}var zr=null,ws=null,Ai=null;function nc(){if(Ai)return Ai;var i,s=ws,l=s.length,c,f="value"in zr?zr.value:zr.textContent,g=f.length;for(i=0;i<l&&s[i]===f[i];i++);var T=l-i;for(c=1;c<=T&&s[l-c]===f[g-c];c++);return Ai=f.slice(i,1<c?1-c:void 0)}function Fr(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function jr(){return!0}function rc(){return!1}function nn(i){function s(l,c,f,g,T){this._reactName=l,this._targetInst=f,this.type=c,this.nativeEvent=g,this.target=T,this.currentTarget=null;for(var b in i)i.hasOwnProperty(b)&&(l=i[b],this[b]=l?l(g):g[b]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?jr:rc,this.isPropagationStopped=rc,this}return P(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=jr)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=jr)},persist:function(){},isPersistent:jr}),s}var Je={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xo=nn(Je),Oa=P({},Je,{view:0,detail:0}),Md=nn(Oa),Zo,Jo,qr,ka=P({},Oa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:La,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==qr&&(qr&&i.type==="mousemove"?(Zo=i.screenX-qr.screenX,Jo=i.screenY-qr.screenY):Jo=Zo=0,qr=i),Zo)},movementY:function(i){return"movementY"in i?i.movementY:Jo}}),ur=nn(ka),Ld=P({},ka,{dataTransfer:0}),lg=nn(Ld),Va=P({},Oa,{relatedTarget:0}),el=nn(Va),ic=P({},Je,{animationName:0,elapsedTime:0,pseudoElement:0}),tl=nn(ic),Ud=P({},Je,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),nl=nn(Ud),ug=P({},Je,{data:0}),sc=nn(ug),Ma={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ac(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=zd[i])?!!s[i]:!1}function La(){return ac}var Fd=P({},Oa,{key:function(i){if(i.key){var s=Ma[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=Fr(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?Bd[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:La,charCode:function(i){return i.type==="keypress"?Fr(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Fr(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),rl=nn(Fd),jd=P({},ka,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),oc=nn(jd),Si=P({},Oa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:La}),qd=nn(Si),Hd=P({},Je,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gd=nn(Hd),$d=P({},ka,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),il=nn($d),Dn=P({},Je,{newState:0,oldState:0}),Kd=nn(Dn),Qd=[9,13,27,32],Hr=$n&&"CompositionEvent"in window,h=null;$n&&"documentMode"in document&&(h=document.documentMode);var y=$n&&"TextEvent"in window&&!h,E=$n&&(!Hr||h&&8<h&&11>=h),I=" ",F=!1;function W(i,s){switch(i){case"keyup":return Qd.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ue(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var je=!1;function Kt(i,s){switch(i){case"compositionend":return ue(s);case"keypress":return s.which!==32?null:(F=!0,I);case"textInput":return i=s.data,i===I&&F?null:i;default:return null}}function qe(i,s){if(je)return i==="compositionend"||!Hr&&W(i,s)?(i=nc(),Ai=ws=zr=null,je=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return E&&s.locale!=="ko"?null:s.data;default:return null}}var rn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qt(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!rn[i.type]:s==="textarea"}function Ri(i,s,l,c){wi?bi?bi.push(c):bi=[c]:wi=c,s=Nf(s,"onChange"),0<s.length&&(l=new Xo("onChange","change",null,l,c),i.push({event:l,listeners:s}))}var dn=null,Gr=null;function lc(i){Q0(i,0)}function Wd(i){var s=gs(i);if(Zu(s))return i}function bT(i,s){if(i==="change")return s}var IT=!1;if($n){var cg;if($n){var hg="oninput"in document;if(!hg){var AT=document.createElement("div");AT.setAttribute("oninput","return;"),hg=typeof AT.oninput=="function"}cg=hg}else cg=!1;IT=cg&&(!document.documentMode||9<document.documentMode)}function ST(){dn&&(dn.detachEvent("onpropertychange",RT),Gr=dn=null)}function RT(i){if(i.propertyName==="value"&&Wd(Gr)){var s=[];Ri(s,Gr,i,Yo(i)),Vd(lc,s)}}function nx(i,s,l){i==="focusin"?(ST(),dn=s,Gr=l,dn.attachEvent("onpropertychange",RT)):i==="focusout"&&ST()}function rx(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Wd(Gr)}function ix(i,s){if(i==="click")return Wd(s)}function sx(i,s){if(i==="input"||i==="change")return Wd(s)}function ax(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var Kn=typeof Object.is=="function"?Object.is:ax;function uc(i,s){if(Kn(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var l=Object.keys(i),c=Object.keys(s);if(l.length!==c.length)return!1;for(c=0;c<l.length;c++){var f=l[c];if(!jo.call(s,f)||!Kn(i[f],s[f]))return!1}return!0}function CT(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function DT(i,s){var l=CT(i);i=0;for(var c;l;){if(l.nodeType===3){if(c=i+l.textContent.length,i<=s&&c>=s)return{node:l,offset:s-i};i=c}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=CT(l)}}function xT(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?xT(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function PT(i){i=i!=null&&i.ownerDocument!=null&&i.ownerDocument.defaultView!=null?i.ownerDocument.defaultView:window;for(var s=Qo(i.document);s instanceof i.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)i=s.contentWindow;else break;s=Qo(i.document)}return s}function dg(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function ox(i,s){var l=PT(s);s=i.focusedElem;var c=i.selectionRange;if(l!==s&&s&&s.ownerDocument&&xT(s.ownerDocument.documentElement,s)){if(c!==null&&dg(s)){if(i=c.start,l=c.end,l===void 0&&(l=i),"selectionStart"in s)s.selectionStart=i,s.selectionEnd=Math.min(l,s.value.length);else if(l=(i=s.ownerDocument||document)&&i.defaultView||window,l.getSelection){l=l.getSelection();var f=s.textContent.length,g=Math.min(c.start,f);c=c.end===void 0?g:Math.min(c.end,f),!l.extend&&g>c&&(f=c,c=g,g=f),f=DT(s,g);var T=DT(s,c);f&&T&&(l.rangeCount!==1||l.anchorNode!==f.node||l.anchorOffset!==f.offset||l.focusNode!==T.node||l.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),l.removeAllRanges(),g>c?(l.addRange(i),l.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),l.addRange(i)))}}for(i=[],l=s;l=l.parentNode;)l.nodeType===1&&i.push({element:l,left:l.scrollLeft,top:l.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<i.length;s++)l=i[s],l.element.scrollLeft=l.left,l.element.scrollTop=l.top}}var lx=$n&&"documentMode"in document&&11>=document.documentMode,sl=null,fg=null,cc=null,pg=!1;function NT(i,s,l){var c=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;pg||sl==null||sl!==Qo(c)||(c=sl,"selectionStart"in c&&dg(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),cc&&uc(cc,c)||(cc=c,c=Nf(fg,"onSelect"),0<c.length&&(s=new Xo("onSelect","select",null,s,l),i.push({event:s,listeners:c}),s.target=sl)))}function Ua(i,s){var l={};return l[i.toLowerCase()]=s.toLowerCase(),l["Webkit"+i]="webkit"+s,l["Moz"+i]="moz"+s,l}var al={animationend:Ua("Animation","AnimationEnd"),animationiteration:Ua("Animation","AnimationIteration"),animationstart:Ua("Animation","AnimationStart"),transitionrun:Ua("Transition","TransitionRun"),transitionstart:Ua("Transition","TransitionStart"),transitioncancel:Ua("Transition","TransitionCancel"),transitionend:Ua("Transition","TransitionEnd")},mg={},OT={};$n&&(OT=document.createElement("div").style,"AnimationEvent"in window||(delete al.animationend.animation,delete al.animationiteration.animation,delete al.animationstart.animation),"TransitionEvent"in window||delete al.transitionend.transition);function Ba(i){if(mg[i])return mg[i];if(!al[i])return i;var s=al[i],l;for(l in s)if(s.hasOwnProperty(l)&&l in OT)return mg[i]=s[l];return i}var kT=Ba("animationend"),VT=Ba("animationiteration"),MT=Ba("animationstart"),ux=Ba("transitionrun"),cx=Ba("transitionstart"),hx=Ba("transitioncancel"),LT=Ba("transitionend"),UT=new Map,BT="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function Sr(i,s){UT.set(i,s),Gn(s,[i])}var cr=[],ol=0,gg=0;function Yd(){for(var i=ol,s=gg=ol=0;s<i;){var l=cr[s];cr[s++]=null;var c=cr[s];cr[s++]=null;var f=cr[s];cr[s++]=null;var g=cr[s];if(cr[s++]=null,c!==null&&f!==null){var T=c.pending;T===null?f.next=f:(f.next=T.next,T.next=f),c.pending=f}g!==0&&zT(l,f,g)}}function Xd(i,s,l,c){cr[ol++]=i,cr[ol++]=s,cr[ol++]=l,cr[ol++]=c,gg|=c,i.lanes|=c,i=i.alternate,i!==null&&(i.lanes|=c)}function yg(i,s,l,c){return Xd(i,s,l,c),Zd(i)}function bs(i,s){return Xd(i,null,null,s),Zd(i)}function zT(i,s,l){i.lanes|=l;var c=i.alternate;c!==null&&(c.lanes|=l);for(var f=!1,g=i.return;g!==null;)g.childLanes|=l,c=g.alternate,c!==null&&(c.childLanes|=l),g.tag===22&&(i=g.stateNode,i===null||i._visibility&1||(f=!0)),i=g,g=g.return;f&&s!==null&&i.tag===3&&(g=i.stateNode,f=31-Rn(l),g=g.hiddenUpdates,i=g[f],i===null?g[f]=[s]:i.push(s),s.lane=l|536870912)}function Zd(i){if(50<Vc)throw Vc=0,by=null,Error(r(185));for(var s=i.return;s!==null;)i=s,s=i.return;return i.tag===3?i.stateNode:null}var ll={},FT=new WeakMap;function hr(i,s){if(typeof i=="object"&&i!==null){var l=FT.get(i);return l!==void 0?l:(s={value:i,source:s,stack:be(s)},FT.set(i,s),s)}return{value:i,source:s,stack:be(s)}}var ul=[],cl=0,Jd=null,ef=0,dr=[],fr=0,za=null,Ci=1,Di="";function Fa(i,s){ul[cl++]=ef,ul[cl++]=Jd,Jd=i,ef=s}function jT(i,s,l){dr[fr++]=Ci,dr[fr++]=Di,dr[fr++]=za,za=i;var c=Ci;i=Di;var f=32-Rn(c)-1;c&=~(1<<f),l+=1;var g=32-Rn(s)+f;if(30<g){var T=f-f%5;g=(c&(1<<T)-1).toString(32),c>>=T,f-=T,Ci=1<<32-Rn(s)+f|l<<f|c,Di=g+i}else Ci=1<<g|l<<f|c,Di=i}function _g(i){i.return!==null&&(Fa(i,1),jT(i,1,0))}function vg(i){for(;i===Jd;)Jd=ul[--cl],ul[cl]=null,ef=ul[--cl],ul[cl]=null;for(;i===za;)za=dr[--fr],dr[fr]=null,Di=dr[--fr],dr[fr]=null,Ci=dr[--fr],dr[fr]=null}var xn=null,fn=null,Qe=!1,Rr=null,$r=!1,Eg=Error(r(519));function ja(i){var s=Error(r(418,""));throw fc(hr(s,i)),Eg}function qT(i){var s=i.stateNode,l=i.type,c=i.memoizedProps;switch(s[tn]=i,s[$t]=c,l){case"dialog":Fe("cancel",s),Fe("close",s);break;case"iframe":case"object":case"embed":Fe("load",s);break;case"video":case"audio":for(l=0;l<Lc.length;l++)Fe(Lc[l],s);break;case"source":Fe("error",s);break;case"img":case"image":case"link":Fe("error",s),Fe("load",s);break;case"details":Fe("toggle",s);break;case"input":Fe("invalid",s),Da(s,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0),Ca(s);break;case"select":Fe("invalid",s);break;case"textarea":Fe("invalid",s),Ts(s,c.value,c.defaultValue,c.children),Ca(s)}l=c.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||s.textContent===""+l||c.suppressHydrationWarning===!0||Z0(s.textContent,l)?(c.popover!=null&&(Fe("beforetoggle",s),Fe("toggle",s)),c.onScroll!=null&&Fe("scroll",s),c.onScrollEnd!=null&&Fe("scrollend",s),c.onClick!=null&&(s.onclick=Of),s=!0):s=!1,s||ja(i)}function HT(i){for(xn=i.return;xn;)switch(xn.tag){case 3:case 27:$r=!0;return;case 5:case 13:$r=!1;return;default:xn=xn.return}}function hc(i){if(i!==xn)return!1;if(!Qe)return HT(i),Qe=!0,!1;var s=!1,l;if((l=i.tag!==3&&i.tag!==27)&&((l=i.tag===5)&&(l=i.type,l=!(l!=="form"&&l!=="button")||zy(i.type,i.memoizedProps)),l=!l),l&&(s=!0),s&&fn&&ja(i),HT(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(r(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8)if(l=i.data,l==="/$"){if(s===0){fn=Dr(i.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++;i=i.nextSibling}fn=null}}else fn=xn?Dr(i.stateNode.nextSibling):null;return!0}function dc(){fn=xn=null,Qe=!1}function fc(i){Rr===null?Rr=[i]:Rr.push(i)}var pc=Error(r(460)),GT=Error(r(474)),Tg={then:function(){}};function $T(i){return i=i.status,i==="fulfilled"||i==="rejected"}function tf(){}function KT(i,s,l){switch(l=i[l],l===void 0?i.push(s):l!==s&&(s.then(tf,tf),s=l),s.status){case"fulfilled":return s.value;case"rejected":throw i=s.reason,i===pc?Error(r(483)):i;default:if(typeof s.status=="string")s.then(tf,tf);else{if(i=at,i!==null&&100<i.shellSuspendCounter)throw Error(r(482));i=s,i.status="pending",i.then(function(c){if(s.status==="pending"){var f=s;f.status="fulfilled",f.value=c}},function(c){if(s.status==="pending"){var f=s;f.status="rejected",f.reason=c}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw i=s.reason,i===pc?Error(r(483)):i}throw mc=s,pc}}var mc=null;function QT(){if(mc===null)throw Error(r(459));var i=mc;return mc=null,i}var hl=null,gc=0;function nf(i){var s=gc;return gc+=1,hl===null&&(hl=[]),KT(hl,i,s)}function yc(i,s){s=s.props.ref,i.ref=s!==void 0?s:null}function rf(i,s){throw s.$$typeof===o?Error(r(525)):(i=Object.prototype.toString.call(s),Error(r(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i)))}function WT(i){var s=i._init;return s(i._payload)}function YT(i){function s(B,k){if(i){var q=B.deletions;q===null?(B.deletions=[k],B.flags|=16):q.push(k)}}function l(B,k){if(!i)return null;for(;k!==null;)s(B,k),k=k.sibling;return null}function c(B){for(var k=new Map;B!==null;)B.key!==null?k.set(B.key,B):k.set(B.index,B),B=B.sibling;return k}function f(B,k){return B=Vs(B,k),B.index=0,B.sibling=null,B}function g(B,k,q){return B.index=q,i?(q=B.alternate,q!==null?(q=q.index,q<k?(B.flags|=33554434,k):q):(B.flags|=33554434,k)):(B.flags|=1048576,k)}function T(B){return i&&B.alternate===null&&(B.flags|=33554434),B}function b(B,k,q,ee){return k===null||k.tag!==6?(k=my(q,B.mode,ee),k.return=B,k):(k=f(k,q),k.return=B,k)}function C(B,k,q,ee){var ye=q.type;return ye===p?J(B,k,q.props.children,ee,q.key):k!==null&&(k.elementType===ye||typeof ye=="object"&&ye!==null&&ye.$$typeof===$&&WT(ye)===k.type)?(k=f(k,q.props),yc(k,q),k.return=B,k):(k=wf(q.type,q.key,q.props,null,B.mode,ee),yc(k,q),k.return=B,k)}function L(B,k,q,ee){return k===null||k.tag!==4||k.stateNode.containerInfo!==q.containerInfo||k.stateNode.implementation!==q.implementation?(k=gy(q,B.mode,ee),k.return=B,k):(k=f(k,q.children||[]),k.return=B,k)}function J(B,k,q,ee,ye){return k===null||k.tag!==7?(k=Za(q,B.mode,ee,ye),k.return=B,k):(k=f(k,q),k.return=B,k)}function ne(B,k,q){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=my(""+k,B.mode,q),k.return=B,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case u:return q=wf(k.type,k.key,k.props,null,B.mode,q),yc(q,k),q.return=B,q;case d:return k=gy(k,B.mode,q),k.return=B,k;case $:var ee=k._init;return k=ee(k._payload),ne(B,k,q)}if(pe(k)||le(k))return k=Za(k,B.mode,q,null),k.return=B,k;if(typeof k.then=="function")return ne(B,nf(k),q);if(k.$$typeof===S)return ne(B,vf(B,k),q);rf(B,k)}return null}function G(B,k,q,ee){var ye=k!==null?k.key:null;if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return ye!==null?null:b(B,k,""+q,ee);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case u:return q.key===ye?C(B,k,q,ee):null;case d:return q.key===ye?L(B,k,q,ee):null;case $:return ye=q._init,q=ye(q._payload),G(B,k,q,ee)}if(pe(q)||le(q))return ye!==null?null:J(B,k,q,ee,null);if(typeof q.then=="function")return G(B,k,nf(q),ee);if(q.$$typeof===S)return G(B,k,vf(B,q),ee);rf(B,q)}return null}function Z(B,k,q,ee,ye){if(typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint")return B=B.get(q)||null,b(k,B,""+ee,ye);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case u:return B=B.get(ee.key===null?q:ee.key)||null,C(k,B,ee,ye);case d:return B=B.get(ee.key===null?q:ee.key)||null,L(k,B,ee,ye);case $:var Me=ee._init;return ee=Me(ee._payload),Z(B,k,q,ee,ye)}if(pe(ee)||le(ee))return B=B.get(q)||null,J(k,B,ee,ye,null);if(typeof ee.then=="function")return Z(B,k,q,nf(ee),ye);if(ee.$$typeof===S)return Z(B,k,q,vf(k,ee),ye);rf(k,ee)}return null}function ve(B,k,q,ee){for(var ye=null,Me=null,we=k,Ae=k=0,on=null;we!==null&&Ae<q.length;Ae++){we.index>Ae?(on=we,we=null):on=we.sibling;var We=G(B,we,q[Ae],ee);if(We===null){we===null&&(we=on);break}i&&we&&We.alternate===null&&s(B,we),k=g(We,k,Ae),Me===null?ye=We:Me.sibling=We,Me=We,we=on}if(Ae===q.length)return l(B,we),Qe&&Fa(B,Ae),ye;if(we===null){for(;Ae<q.length;Ae++)we=ne(B,q[Ae],ee),we!==null&&(k=g(we,k,Ae),Me===null?ye=we:Me.sibling=we,Me=we);return Qe&&Fa(B,Ae),ye}for(we=c(we);Ae<q.length;Ae++)on=Z(we,B,Ae,q[Ae],ee),on!==null&&(i&&on.alternate!==null&&we.delete(on.key===null?Ae:on.key),k=g(on,k,Ae),Me===null?ye=on:Me.sibling=on,Me=on);return i&&we.forEach(function(js){return s(B,js)}),Qe&&Fa(B,Ae),ye}function De(B,k,q,ee){if(q==null)throw Error(r(151));for(var ye=null,Me=null,we=k,Ae=k=0,on=null,We=q.next();we!==null&&!We.done;Ae++,We=q.next()){we.index>Ae?(on=we,we=null):on=we.sibling;var js=G(B,we,We.value,ee);if(js===null){we===null&&(we=on);break}i&&we&&js.alternate===null&&s(B,we),k=g(js,k,Ae),Me===null?ye=js:Me.sibling=js,Me=js,we=on}if(We.done)return l(B,we),Qe&&Fa(B,Ae),ye;if(we===null){for(;!We.done;Ae++,We=q.next())We=ne(B,We.value,ee),We!==null&&(k=g(We,k,Ae),Me===null?ye=We:Me.sibling=We,Me=We);return Qe&&Fa(B,Ae),ye}for(we=c(we);!We.done;Ae++,We=q.next())We=Z(we,B,Ae,We.value,ee),We!==null&&(i&&We.alternate!==null&&we.delete(We.key===null?Ae:We.key),k=g(We,k,Ae),Me===null?ye=We:Me.sibling=We,Me=We);return i&&we.forEach(function(AP){return s(B,AP)}),Qe&&Fa(B,Ae),ye}function Ct(B,k,q,ee){if(typeof q=="object"&&q!==null&&q.type===p&&q.key===null&&(q=q.props.children),typeof q=="object"&&q!==null){switch(q.$$typeof){case u:e:{for(var ye=q.key;k!==null;){if(k.key===ye){if(ye=q.type,ye===p){if(k.tag===7){l(B,k.sibling),ee=f(k,q.props.children),ee.return=B,B=ee;break e}}else if(k.elementType===ye||typeof ye=="object"&&ye!==null&&ye.$$typeof===$&&WT(ye)===k.type){l(B,k.sibling),ee=f(k,q.props),yc(ee,q),ee.return=B,B=ee;break e}l(B,k);break}else s(B,k);k=k.sibling}q.type===p?(ee=Za(q.props.children,B.mode,ee,q.key),ee.return=B,B=ee):(ee=wf(q.type,q.key,q.props,null,B.mode,ee),yc(ee,q),ee.return=B,B=ee)}return T(B);case d:e:{for(ye=q.key;k!==null;){if(k.key===ye)if(k.tag===4&&k.stateNode.containerInfo===q.containerInfo&&k.stateNode.implementation===q.implementation){l(B,k.sibling),ee=f(k,q.children||[]),ee.return=B,B=ee;break e}else{l(B,k);break}else s(B,k);k=k.sibling}ee=gy(q,B.mode,ee),ee.return=B,B=ee}return T(B);case $:return ye=q._init,q=ye(q._payload),Ct(B,k,q,ee)}if(pe(q))return ve(B,k,q,ee);if(le(q)){if(ye=le(q),typeof ye!="function")throw Error(r(150));return q=ye.call(q),De(B,k,q,ee)}if(typeof q.then=="function")return Ct(B,k,nf(q),ee);if(q.$$typeof===S)return Ct(B,k,vf(B,q),ee);rf(B,q)}return typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint"?(q=""+q,k!==null&&k.tag===6?(l(B,k.sibling),ee=f(k,q),ee.return=B,B=ee):(l(B,k),ee=my(q,B.mode,ee),ee.return=B,B=ee),T(B)):l(B,k)}return function(B,k,q,ee){try{gc=0;var ye=Ct(B,k,q,ee);return hl=null,ye}catch(we){if(we===pc)throw we;var Me=yr(29,we,null,B.mode);return Me.lanes=ee,Me.return=B,Me}finally{}}}var qa=YT(!0),XT=YT(!1),dl=Ve(null),sf=Ve(0);function ZT(i,s){i=zi,$e(sf,i),$e(dl,s),zi=i|s.baseLanes}function wg(){$e(sf,zi),$e(dl,dl.current)}function bg(){zi=sf.current,Ze(dl),Ze(sf)}var pr=Ve(null),Kr=null;function Is(i){var s=i.alternate;$e(Wt,Wt.current&1),$e(pr,i),Kr===null&&(s===null||dl.current!==null||s.memoizedState!==null)&&(Kr=i)}function JT(i){if(i.tag===22){if($e(Wt,Wt.current),$e(pr,i),Kr===null){var s=i.alternate;s!==null&&s.memoizedState!==null&&(Kr=i)}}else As()}function As(){$e(Wt,Wt.current),$e(pr,pr.current)}function xi(i){Ze(pr),Kr===i&&(Kr=null),Ze(Wt)}var Wt=Ve(0);function af(i){for(var s=i;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var dx=typeof AbortController<"u"?AbortController:function(){var i=[],s=this.signal={aborted:!1,addEventListener:function(l,c){i.push(c)}};this.abort=function(){s.aborted=!0,i.forEach(function(l){return l()})}},fx=n.unstable_scheduleCallback,px=n.unstable_NormalPriority,Yt={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ig(){return{controller:new dx,data:new Map,refCount:0}}function _c(i){i.refCount--,i.refCount===0&&fx(px,function(){i.controller.abort()})}var vc=null,Ag=0,fl=0,pl=null;function mx(i,s){if(vc===null){var l=vc=[];Ag=0,fl=Py(),pl={status:"pending",value:void 0,then:function(c){l.push(c)}}}return Ag++,s.then(ew,ew),s}function ew(){if(--Ag===0&&vc!==null){pl!==null&&(pl.status="fulfilled");var i=vc;vc=null,fl=0,pl=null;for(var s=0;s<i.length;s++)(0,i[s])()}}function gx(i,s){var l=[],c={status:"pending",value:null,reason:null,then:function(f){l.push(f)}};return i.then(function(){c.status="fulfilled",c.value=s;for(var f=0;f<l.length;f++)(0,l[f])(s)},function(f){for(c.status="rejected",c.reason=f,f=0;f<l.length;f++)(0,l[f])(void 0)}),c}var tw=A.S;A.S=function(i,s){typeof s=="object"&&s!==null&&typeof s.then=="function"&&mx(i,s),tw!==null&&tw(i,s)};var Ha=Ve(null);function Sg(){var i=Ha.current;return i!==null?i:at.pooledCache}function of(i,s){s===null?$e(Ha,Ha.current):$e(Ha,s.pool)}function nw(){var i=Sg();return i===null?null:{parent:Yt._currentValue,pool:i}}var Ss=0,ke=null,rt=null,Bt=null,lf=!1,ml=!1,Ga=!1,uf=0,Ec=0,gl=null,yx=0;function kt(){throw Error(r(321))}function Rg(i,s){if(s===null)return!1;for(var l=0;l<s.length&&l<i.length;l++)if(!Kn(i[l],s[l]))return!1;return!0}function Cg(i,s,l,c,f,g){return Ss=g,ke=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,A.H=i===null||i.memoizedState===null?$a:Rs,Ga=!1,g=l(c,f),Ga=!1,ml&&(g=iw(s,l,c,f)),rw(i),g}function rw(i){A.H=Qr;var s=rt!==null&&rt.next!==null;if(Ss=0,Bt=rt=ke=null,lf=!1,Ec=0,gl=null,s)throw Error(r(300));i===null||sn||(i=i.dependencies,i!==null&&_f(i)&&(sn=!0))}function iw(i,s,l,c){ke=i;var f=0;do{if(ml&&(gl=null),Ec=0,ml=!1,25<=f)throw Error(r(301));if(f+=1,Bt=rt=null,i.updateQueue!=null){var g=i.updateQueue;g.lastEffect=null,g.events=null,g.stores=null,g.memoCache!=null&&(g.memoCache.index=0)}A.H=Ka,g=s(l,c)}while(ml);return g}function _x(){var i=A.H,s=i.useState()[0];return s=typeof s.then=="function"?Tc(s):s,i=i.useState()[0],(rt!==null?rt.memoizedState:null)!==i&&(ke.flags|=1024),s}function Dg(){var i=uf!==0;return uf=0,i}function xg(i,s,l){s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~l}function Pg(i){if(lf){for(i=i.memoizedState;i!==null;){var s=i.queue;s!==null&&(s.pending=null),i=i.next}lf=!1}Ss=0,Bt=rt=ke=null,ml=!1,Ec=uf=0,gl=null}function Bn(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Bt===null?ke.memoizedState=Bt=i:Bt=Bt.next=i,Bt}function zt(){if(rt===null){var i=ke.alternate;i=i!==null?i.memoizedState:null}else i=rt.next;var s=Bt===null?ke.memoizedState:Bt.next;if(s!==null)Bt=s,rt=i;else{if(i===null)throw ke.alternate===null?Error(r(467)):Error(r(310));rt=i,i={memoizedState:rt.memoizedState,baseState:rt.baseState,baseQueue:rt.baseQueue,queue:rt.queue,next:null},Bt===null?ke.memoizedState=Bt=i:Bt=Bt.next=i}return Bt}var cf;cf=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Tc(i){var s=Ec;return Ec+=1,gl===null&&(gl=[]),i=KT(gl,i,s),s=ke,(Bt===null?s.memoizedState:Bt.next)===null&&(s=s.alternate,A.H=s===null||s.memoizedState===null?$a:Rs),i}function hf(i){if(i!==null&&typeof i=="object"){if(typeof i.then=="function")return Tc(i);if(i.$$typeof===S)return Tn(i)}throw Error(r(438,String(i)))}function Ng(i){var s=null,l=ke.updateQueue;if(l!==null&&(s=l.memoCache),s==null){var c=ke.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(s={data:c.data.map(function(f){return f.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),l===null&&(l=cf(),ke.updateQueue=l),l.memoCache=s,l=s.data[s.index],l===void 0)for(l=s.data[s.index]=Array(i),c=0;c<i;c++)l[c]=oe;return s.index++,l}function Pi(i,s){return typeof s=="function"?s(i):s}function df(i){var s=zt();return Og(s,rt,i)}function Og(i,s,l){var c=i.queue;if(c===null)throw Error(r(311));c.lastRenderedReducer=l;var f=i.baseQueue,g=c.pending;if(g!==null){if(f!==null){var T=f.next;f.next=g.next,g.next=T}s.baseQueue=f=g,c.pending=null}if(g=i.baseState,f===null)i.memoizedState=g;else{s=f.next;var b=T=null,C=null,L=s,J=!1;do{var ne=L.lane&-536870913;if(ne!==L.lane?(He&ne)===ne:(Ss&ne)===ne){var G=L.revertLane;if(G===0)C!==null&&(C=C.next={lane:0,revertLane:0,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null}),ne===fl&&(J=!0);else if((Ss&G)===G){L=L.next,G===fl&&(J=!0);continue}else ne={lane:0,revertLane:L.revertLane,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},C===null?(b=C=ne,T=g):C=C.next=ne,ke.lanes|=G,Ms|=G;ne=L.action,Ga&&l(g,ne),g=L.hasEagerState?L.eagerState:l(g,ne)}else G={lane:ne,revertLane:L.revertLane,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},C===null?(b=C=G,T=g):C=C.next=G,ke.lanes|=ne,Ms|=ne;L=L.next}while(L!==null&&L!==s);if(C===null?T=g:C.next=b,!Kn(g,i.memoizedState)&&(sn=!0,J&&(l=pl,l!==null)))throw l;i.memoizedState=g,i.baseState=T,i.baseQueue=C,c.lastRenderedState=g}return f===null&&(c.lanes=0),[i.memoizedState,c.dispatch]}function kg(i){var s=zt(),l=s.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=i;var c=l.dispatch,f=l.pending,g=s.memoizedState;if(f!==null){l.pending=null;var T=f=f.next;do g=i(g,T.action),T=T.next;while(T!==f);Kn(g,s.memoizedState)||(sn=!0),s.memoizedState=g,s.baseQueue===null&&(s.baseState=g),l.lastRenderedState=g}return[g,c]}function sw(i,s,l){var c=ke,f=zt(),g=Qe;if(g){if(l===void 0)throw Error(r(407));l=l()}else l=s();var T=!Kn((rt||f).memoizedState,l);if(T&&(f.memoizedState=l,sn=!0),f=f.queue,Lg(lw.bind(null,c,f,i),[i]),f.getSnapshot!==s||T||Bt!==null&&Bt.memoizedState.tag&1){if(c.flags|=2048,yl(9,ow.bind(null,c,f,l,s),{destroy:void 0},null),at===null)throw Error(r(349));g||(Ss&60)!==0||aw(c,s,l)}return l}function aw(i,s,l){i.flags|=16384,i={getSnapshot:s,value:l},s=ke.updateQueue,s===null?(s=cf(),ke.updateQueue=s,s.stores=[i]):(l=s.stores,l===null?s.stores=[i]:l.push(i))}function ow(i,s,l,c){s.value=l,s.getSnapshot=c,uw(s)&&cw(i)}function lw(i,s,l){return l(function(){uw(s)&&cw(i)})}function uw(i){var s=i.getSnapshot;i=i.value;try{var l=s();return!Kn(i,l)}catch{return!0}}function cw(i){var s=bs(i,2);s!==null&&Pn(s,i,2)}function Vg(i){var s=Bn();if(typeof i=="function"){var l=i;if(i=l(),Ga){Vr(!0);try{l()}finally{Vr(!1)}}}return s.memoizedState=s.baseState=i,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pi,lastRenderedState:i},s}function hw(i,s,l,c){return i.baseState=l,Og(i,rt,typeof c=="function"?c:Pi)}function vx(i,s,l,c,f){if(mf(i))throw Error(r(485));if(i=s.action,i!==null){var g={payload:f,action:i,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(T){g.listeners.push(T)}};A.T!==null?l(!0):g.isTransition=!1,c(g),l=s.pending,l===null?(g.next=s.pending=g,dw(s,g)):(g.next=l.next,s.pending=l.next=g)}}function dw(i,s){var l=s.action,c=s.payload,f=i.state;if(s.isTransition){var g=A.T,T={};A.T=T;try{var b=l(f,c),C=A.S;C!==null&&C(T,b),fw(i,s,b)}catch(L){Mg(i,s,L)}finally{A.T=g}}else try{g=l(f,c),fw(i,s,g)}catch(L){Mg(i,s,L)}}function fw(i,s,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(c){pw(i,s,c)},function(c){return Mg(i,s,c)}):pw(i,s,l)}function pw(i,s,l){s.status="fulfilled",s.value=l,mw(s),i.state=l,s=i.pending,s!==null&&(l=s.next,l===s?i.pending=null:(l=l.next,s.next=l,dw(i,l)))}function Mg(i,s,l){var c=i.pending;if(i.pending=null,c!==null){c=c.next;do s.status="rejected",s.reason=l,mw(s),s=s.next;while(s!==c)}i.action=null}function mw(i){i=i.listeners;for(var s=0;s<i.length;s++)(0,i[s])()}function gw(i,s){return s}function yw(i,s){if(Qe){var l=at.formState;if(l!==null){e:{var c=ke;if(Qe){if(fn){t:{for(var f=fn,g=$r;f.nodeType!==8;){if(!g){f=null;break t}if(f=Dr(f.nextSibling),f===null){f=null;break t}}g=f.data,f=g==="F!"||g==="F"?f:null}if(f){fn=Dr(f.nextSibling),c=f.data==="F!";break e}}ja(c)}c=!1}c&&(s=l[0])}}return l=Bn(),l.memoizedState=l.baseState=s,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:gw,lastRenderedState:s},l.queue=c,l=Vw.bind(null,ke,c),c.dispatch=l,c=Vg(!1),g=jg.bind(null,ke,!1,c.queue),c=Bn(),f={state:s,dispatch:null,action:i,pending:null},c.queue=f,l=vx.bind(null,ke,f,g,l),f.dispatch=l,c.memoizedState=i,[s,l,!1]}function _w(i){var s=zt();return vw(s,rt,i)}function vw(i,s,l){s=Og(i,s,gw)[0],i=df(Pi)[0],s=typeof s=="object"&&s!==null&&typeof s.then=="function"?Tc(s):s;var c=zt(),f=c.queue,g=f.dispatch;return l!==c.memoizedState&&(ke.flags|=2048,yl(9,Ex.bind(null,f,l),{destroy:void 0},null)),[s,g,i]}function Ex(i,s){i.action=s}function Ew(i){var s=zt(),l=rt;if(l!==null)return vw(s,l,i);zt(),s=s.memoizedState,l=zt();var c=l.queue.dispatch;return l.memoizedState=i,[s,c,!1]}function yl(i,s,l,c){return i={tag:i,create:s,inst:l,deps:c,next:null},s=ke.updateQueue,s===null&&(s=cf(),ke.updateQueue=s),l=s.lastEffect,l===null?s.lastEffect=i.next=i:(c=l.next,l.next=i,i.next=c,s.lastEffect=i),i}function Tw(){return zt().memoizedState}function ff(i,s,l,c){var f=Bn();ke.flags|=i,f.memoizedState=yl(1|s,l,{destroy:void 0},c===void 0?null:c)}function pf(i,s,l,c){var f=zt();c=c===void 0?null:c;var g=f.memoizedState.inst;rt!==null&&c!==null&&Rg(c,rt.memoizedState.deps)?f.memoizedState=yl(s,l,g,c):(ke.flags|=i,f.memoizedState=yl(1|s,l,g,c))}function ww(i,s){ff(8390656,8,i,s)}function Lg(i,s){pf(2048,8,i,s)}function bw(i,s){return pf(4,2,i,s)}function Iw(i,s){return pf(4,4,i,s)}function Aw(i,s){if(typeof s=="function"){i=i();var l=s(i);return function(){typeof l=="function"?l():s(null)}}if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function Sw(i,s,l){l=l!=null?l.concat([i]):null,pf(4,4,Aw.bind(null,s,i),l)}function Ug(){}function Rw(i,s){var l=zt();s=s===void 0?null:s;var c=l.memoizedState;return s!==null&&Rg(s,c[1])?c[0]:(l.memoizedState=[i,s],i)}function Cw(i,s){var l=zt();s=s===void 0?null:s;var c=l.memoizedState;if(s!==null&&Rg(s,c[1]))return c[0];if(c=i(),Ga){Vr(!0);try{i()}finally{Vr(!1)}}return l.memoizedState=[c,s],c}function Bg(i,s,l){return l===void 0||(Ss&1073741824)!==0?i.memoizedState=s:(i.memoizedState=l,i=x0(),ke.lanes|=i,Ms|=i,l)}function Dw(i,s,l,c){return Kn(l,s)?l:dl.current!==null?(i=Bg(i,l,c),Kn(i,s)||(sn=!0),i):(Ss&42)===0?(sn=!0,i.memoizedState=l):(i=x0(),ke.lanes|=i,Ms|=i,s)}function xw(i,s,l,c,f){var g=fe.p;fe.p=g!==0&&8>g?g:8;var T=A.T,b={};A.T=b,jg(i,!1,s,l);try{var C=f(),L=A.S;if(L!==null&&L(b,C),C!==null&&typeof C=="object"&&typeof C.then=="function"){var J=gx(C,c);wc(i,s,J,Xn(i))}else wc(i,s,c,Xn(i))}catch(ne){wc(i,s,{then:function(){},status:"rejected",reason:ne},Xn())}finally{fe.p=g,A.T=T}}function Tx(){}function zg(i,s,l,c){if(i.tag!==5)throw Error(r(476));var f=Pw(i).queue;xw(i,f,s,Ce,l===null?Tx:function(){return Nw(i),l(c)})}function Pw(i){var s=i.memoizedState;if(s!==null)return s;s={memoizedState:Ce,baseState:Ce,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pi,lastRenderedState:Ce},next:null};var l={};return s.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pi,lastRenderedState:l},next:null},i.memoizedState=s,i=i.alternate,i!==null&&(i.memoizedState=s),s}function Nw(i){var s=Pw(i).next.queue;wc(i,s,{},Xn())}function Fg(){return Tn(jc)}function Ow(){return zt().memoizedState}function kw(){return zt().memoizedState}function wx(i){for(var s=i.return;s!==null;){switch(s.tag){case 24:case 3:var l=Xn();i=xs(l);var c=Ps(s,i,l);c!==null&&(Pn(c,s,l),Ac(c,s,l)),s={cache:Ig()},i.payload=s;return}s=s.return}}function bx(i,s,l){var c=Xn();l={lane:c,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null},mf(i)?Mw(s,l):(l=yg(i,s,l,c),l!==null&&(Pn(l,i,c),Lw(l,s,c)))}function Vw(i,s,l){var c=Xn();wc(i,s,l,c)}function wc(i,s,l,c){var f={lane:c,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null};if(mf(i))Mw(s,f);else{var g=i.alternate;if(i.lanes===0&&(g===null||g.lanes===0)&&(g=s.lastRenderedReducer,g!==null))try{var T=s.lastRenderedState,b=g(T,l);if(f.hasEagerState=!0,f.eagerState=b,Kn(b,T))return Xd(i,s,f,0),at===null&&Yd(),!1}catch{}finally{}if(l=yg(i,s,f,c),l!==null)return Pn(l,i,c),Lw(l,s,c),!0}return!1}function jg(i,s,l,c){if(c={lane:2,revertLane:Py(),action:c,hasEagerState:!1,eagerState:null,next:null},mf(i)){if(s)throw Error(r(479))}else s=yg(i,l,c,2),s!==null&&Pn(s,i,2)}function mf(i){var s=i.alternate;return i===ke||s!==null&&s===ke}function Mw(i,s){ml=lf=!0;var l=i.pending;l===null?s.next=s:(s.next=l.next,l.next=s),i.pending=s}function Lw(i,s,l){if((l&4194176)!==0){var c=s.lanes;c&=i.pendingLanes,l|=c,s.lanes=l,fs(i,l)}}var Qr={readContext:Tn,use:hf,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useLayoutEffect:kt,useInsertionEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useSyncExternalStore:kt,useId:kt};Qr.useCacheRefresh=kt,Qr.useMemoCache=kt,Qr.useHostTransitionStatus=kt,Qr.useFormState=kt,Qr.useActionState=kt,Qr.useOptimistic=kt;var $a={readContext:Tn,use:hf,useCallback:function(i,s){return Bn().memoizedState=[i,s===void 0?null:s],i},useContext:Tn,useEffect:ww,useImperativeHandle:function(i,s,l){l=l!=null?l.concat([i]):null,ff(4194308,4,Aw.bind(null,s,i),l)},useLayoutEffect:function(i,s){return ff(4194308,4,i,s)},useInsertionEffect:function(i,s){ff(4,2,i,s)},useMemo:function(i,s){var l=Bn();s=s===void 0?null:s;var c=i();if(Ga){Vr(!0);try{i()}finally{Vr(!1)}}return l.memoizedState=[c,s],c},useReducer:function(i,s,l){var c=Bn();if(l!==void 0){var f=l(s);if(Ga){Vr(!0);try{l(s)}finally{Vr(!1)}}}else f=s;return c.memoizedState=c.baseState=f,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:f},c.queue=i,i=i.dispatch=bx.bind(null,ke,i),[c.memoizedState,i]},useRef:function(i){var s=Bn();return i={current:i},s.memoizedState=i},useState:function(i){i=Vg(i);var s=i.queue,l=Vw.bind(null,ke,s);return s.dispatch=l,[i.memoizedState,l]},useDebugValue:Ug,useDeferredValue:function(i,s){var l=Bn();return Bg(l,i,s)},useTransition:function(){var i=Vg(!1);return i=xw.bind(null,ke,i.queue,!0,!1),Bn().memoizedState=i,[!1,i]},useSyncExternalStore:function(i,s,l){var c=ke,f=Bn();if(Qe){if(l===void 0)throw Error(r(407));l=l()}else{if(l=s(),at===null)throw Error(r(349));(He&60)!==0||aw(c,s,l)}f.memoizedState=l;var g={value:l,getSnapshot:s};return f.queue=g,ww(lw.bind(null,c,g,i),[i]),c.flags|=2048,yl(9,ow.bind(null,c,g,l,s),{destroy:void 0},null),l},useId:function(){var i=Bn(),s=at.identifierPrefix;if(Qe){var l=Di,c=Ci;l=(c&~(1<<32-Rn(c)-1)).toString(32)+l,s=":"+s+"R"+l,l=uf++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=yx++,s=":"+s+"r"+l.toString(32)+":";return i.memoizedState=s},useCacheRefresh:function(){return Bn().memoizedState=wx.bind(null,ke)}};$a.useMemoCache=Ng,$a.useHostTransitionStatus=Fg,$a.useFormState=yw,$a.useActionState=yw,$a.useOptimistic=function(i){var s=Bn();s.memoizedState=s.baseState=i;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=l,s=jg.bind(null,ke,!0,l),l.dispatch=s,[i,s]};var Rs={readContext:Tn,use:hf,useCallback:Rw,useContext:Tn,useEffect:Lg,useImperativeHandle:Sw,useInsertionEffect:bw,useLayoutEffect:Iw,useMemo:Cw,useReducer:df,useRef:Tw,useState:function(){return df(Pi)},useDebugValue:Ug,useDeferredValue:function(i,s){var l=zt();return Dw(l,rt.memoizedState,i,s)},useTransition:function(){var i=df(Pi)[0],s=zt().memoizedState;return[typeof i=="boolean"?i:Tc(i),s]},useSyncExternalStore:sw,useId:Ow};Rs.useCacheRefresh=kw,Rs.useMemoCache=Ng,Rs.useHostTransitionStatus=Fg,Rs.useFormState=_w,Rs.useActionState=_w,Rs.useOptimistic=function(i,s){var l=zt();return hw(l,rt,i,s)};var Ka={readContext:Tn,use:hf,useCallback:Rw,useContext:Tn,useEffect:Lg,useImperativeHandle:Sw,useInsertionEffect:bw,useLayoutEffect:Iw,useMemo:Cw,useReducer:kg,useRef:Tw,useState:function(){return kg(Pi)},useDebugValue:Ug,useDeferredValue:function(i,s){var l=zt();return rt===null?Bg(l,i,s):Dw(l,rt.memoizedState,i,s)},useTransition:function(){var i=kg(Pi)[0],s=zt().memoizedState;return[typeof i=="boolean"?i:Tc(i),s]},useSyncExternalStore:sw,useId:Ow};Ka.useCacheRefresh=kw,Ka.useMemoCache=Ng,Ka.useHostTransitionStatus=Fg,Ka.useFormState=Ew,Ka.useActionState=Ew,Ka.useOptimistic=function(i,s){var l=zt();return rt!==null?hw(l,rt,i,s):(l.baseState=i,[i,l.queue.dispatch])};function qg(i,s,l,c){s=i.memoizedState,l=l(c,s),l=l==null?s:P({},s,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var Hg={isMounted:function(i){return(i=i._reactInternals)?Te(i)===i:!1},enqueueSetState:function(i,s,l){i=i._reactInternals;var c=Xn(),f=xs(c);f.payload=s,l!=null&&(f.callback=l),s=Ps(i,f,c),s!==null&&(Pn(s,i,c),Ac(s,i,c))},enqueueReplaceState:function(i,s,l){i=i._reactInternals;var c=Xn(),f=xs(c);f.tag=1,f.payload=s,l!=null&&(f.callback=l),s=Ps(i,f,c),s!==null&&(Pn(s,i,c),Ac(s,i,c))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var l=Xn(),c=xs(l);c.tag=2,s!=null&&(c.callback=s),s=Ps(i,c,l),s!==null&&(Pn(s,i,l),Ac(s,i,l))}};function Uw(i,s,l,c,f,g,T){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(c,g,T):s.prototype&&s.prototype.isPureReactComponent?!uc(l,c)||!uc(f,g):!0}function Bw(i,s,l,c){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,c),s.state!==i&&Hg.enqueueReplaceState(s,s.state,null)}function Qa(i,s){var l=s;if("ref"in s){l={};for(var c in s)c!=="ref"&&(l[c]=s[c])}if(i=i.defaultProps){l===s&&(l=P({},l));for(var f in i)l[f]===void 0&&(l[f]=i[f])}return l}var gf=typeof reportError=="function"?reportError:function(i){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof i=="object"&&i!==null&&typeof i.message=="string"?String(i.message):String(i),error:i});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",i);return}console.error(i)};function zw(i){gf(i)}function Fw(i){console.error(i)}function jw(i){gf(i)}function yf(i,s){try{var l=i.onUncaughtError;l(s.value,{componentStack:s.stack})}catch(c){setTimeout(function(){throw c})}}function qw(i,s,l){try{var c=i.onCaughtError;c(l.value,{componentStack:l.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Gg(i,s,l){return l=xs(l),l.tag=3,l.payload={element:null},l.callback=function(){yf(i,s)},l}function Hw(i){return i=xs(i),i.tag=3,i}function Gw(i,s,l,c){var f=l.type.getDerivedStateFromError;if(typeof f=="function"){var g=c.value;i.payload=function(){return f(g)},i.callback=function(){qw(s,l,c)}}var T=l.stateNode;T!==null&&typeof T.componentDidCatch=="function"&&(i.callback=function(){qw(s,l,c),typeof f!="function"&&(Ls===null?Ls=new Set([this]):Ls.add(this));var b=c.stack;this.componentDidCatch(c.value,{componentStack:b!==null?b:""})})}function Ix(i,s,l,c,f){if(l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(s=l.alternate,s!==null&&Ic(s,l,f,!0),l=pr.current,l!==null){switch(l.tag){case 13:return Kr===null?Sy():l.alternate===null&&Rt===0&&(Rt=3),l.flags&=-257,l.flags|=65536,l.lanes=f,c===Tg?l.flags|=16384:(s=l.updateQueue,s===null?l.updateQueue=new Set([c]):s.add(c),Cy(i,c,f)),!1;case 22:return l.flags|=65536,c===Tg?l.flags|=16384:(s=l.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([c])},l.updateQueue=s):(l=s.retryQueue,l===null?s.retryQueue=new Set([c]):l.add(c)),Cy(i,c,f)),!1}throw Error(r(435,l.tag))}return Cy(i,c,f),Sy(),!1}if(Qe)return s=pr.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=f,c!==Eg&&(i=Error(r(422),{cause:c}),fc(hr(i,l)))):(c!==Eg&&(s=Error(r(423),{cause:c}),fc(hr(s,l))),i=i.current.alternate,i.flags|=65536,f&=-f,i.lanes|=f,c=hr(c,l),f=Gg(i.stateNode,c,f),ay(i,f),Rt!==4&&(Rt=2)),!1;var g=Error(r(520),{cause:c});if(g=hr(g,l),Oc===null?Oc=[g]:Oc.push(g),Rt!==4&&(Rt=2),s===null)return!0;c=hr(c,l),l=s;do{switch(l.tag){case 3:return l.flags|=65536,i=f&-f,l.lanes|=i,i=Gg(l.stateNode,c,i),ay(l,i),!1;case 1:if(s=l.type,g=l.stateNode,(l.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Ls===null||!Ls.has(g))))return l.flags|=65536,f&=-f,l.lanes|=f,f=Hw(f),Gw(f,i,l,c),ay(l,f),!1}l=l.return}while(l!==null);return!1}var $w=Error(r(461)),sn=!1;function pn(i,s,l,c){s.child=i===null?XT(s,null,l,c):qa(s,i.child,l,c)}function Kw(i,s,l,c,f){l=l.render;var g=s.ref;if("ref"in c){var T={};for(var b in c)b!=="ref"&&(T[b]=c[b])}else T=c;return Ya(s),c=Cg(i,s,l,T,g,f),b=Dg(),i!==null&&!sn?(xg(i,s,f),Ni(i,s,f)):(Qe&&b&&_g(s),s.flags|=1,pn(i,s,c,f),s.child)}function Qw(i,s,l,c,f){if(i===null){var g=l.type;return typeof g=="function"&&!py(g)&&g.defaultProps===void 0&&l.compare===null?(s.tag=15,s.type=g,Ww(i,s,g,c,f)):(i=wf(l.type,null,c,s,s.mode,f),i.ref=s.ref,i.return=s,s.child=i)}if(g=i.child,!ey(i,f)){var T=g.memoizedProps;if(l=l.compare,l=l!==null?l:uc,l(T,c)&&i.ref===s.ref)return Ni(i,s,f)}return s.flags|=1,i=Vs(g,c),i.ref=s.ref,i.return=s,s.child=i}function Ww(i,s,l,c,f){if(i!==null){var g=i.memoizedProps;if(uc(g,c)&&i.ref===s.ref)if(sn=!1,s.pendingProps=c=g,ey(i,f))(i.flags&131072)!==0&&(sn=!0);else return s.lanes=i.lanes,Ni(i,s,f)}return $g(i,s,l,c,f)}function Yw(i,s,l){var c=s.pendingProps,f=c.children,g=(s.stateNode._pendingVisibility&2)!==0,T=i!==null?i.memoizedState:null;if(bc(i,s),c.mode==="hidden"||g){if((s.flags&128)!==0){if(c=T!==null?T.baseLanes|l:l,i!==null){for(f=s.child=i.child,g=0;f!==null;)g=g|f.lanes|f.childLanes,f=f.sibling;s.childLanes=g&~c}else s.childLanes=0,s.child=null;return Xw(i,s,c,l)}if((l&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},i!==null&&of(s,T!==null?T.cachePool:null),T!==null?ZT(s,T):wg(),JT(s);else return s.lanes=s.childLanes=536870912,Xw(i,s,T!==null?T.baseLanes|l:l,l)}else T!==null?(of(s,T.cachePool),ZT(s,T),As(),s.memoizedState=null):(i!==null&&of(s,null),wg(),As());return pn(i,s,f,l),s.child}function Xw(i,s,l,c){var f=Sg();return f=f===null?null:{parent:Yt._currentValue,pool:f},s.memoizedState={baseLanes:l,cachePool:f},i!==null&&of(s,null),wg(),JT(s),i!==null&&Ic(i,s,c,!0),null}function bc(i,s){var l=s.ref;if(l===null)i!==null&&i.ref!==null&&(s.flags|=2097664);else{if(typeof l!="function"&&typeof l!="object")throw Error(r(284));(i===null||i.ref!==l)&&(s.flags|=2097664)}}function $g(i,s,l,c,f){return Ya(s),l=Cg(i,s,l,c,void 0,f),c=Dg(),i!==null&&!sn?(xg(i,s,f),Ni(i,s,f)):(Qe&&c&&_g(s),s.flags|=1,pn(i,s,l,f),s.child)}function Zw(i,s,l,c,f,g){return Ya(s),s.updateQueue=null,l=iw(s,c,l,f),rw(i),c=Dg(),i!==null&&!sn?(xg(i,s,g),Ni(i,s,g)):(Qe&&c&&_g(s),s.flags|=1,pn(i,s,l,g),s.child)}function Jw(i,s,l,c,f){if(Ya(s),s.stateNode===null){var g=ll,T=l.contextType;typeof T=="object"&&T!==null&&(g=Tn(T)),g=new l(c,g),s.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,g.updater=Hg,s.stateNode=g,g._reactInternals=s,g=s.stateNode,g.props=c,g.state=s.memoizedState,g.refs={},iy(s),T=l.contextType,g.context=typeof T=="object"&&T!==null?Tn(T):ll,g.state=s.memoizedState,T=l.getDerivedStateFromProps,typeof T=="function"&&(qg(s,l,T,c),g.state=s.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(T=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),T!==g.state&&Hg.enqueueReplaceState(g,g.state,null),Rc(s,c,g,f),Sc(),g.state=s.memoizedState),typeof g.componentDidMount=="function"&&(s.flags|=4194308),c=!0}else if(i===null){g=s.stateNode;var b=s.memoizedProps,C=Qa(l,b);g.props=C;var L=g.context,J=l.contextType;T=ll,typeof J=="object"&&J!==null&&(T=Tn(J));var ne=l.getDerivedStateFromProps;J=typeof ne=="function"||typeof g.getSnapshotBeforeUpdate=="function",b=s.pendingProps!==b,J||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(b||L!==T)&&Bw(s,g,c,T),Ds=!1;var G=s.memoizedState;g.state=G,Rc(s,c,g,f),Sc(),L=s.memoizedState,b||G!==L||Ds?(typeof ne=="function"&&(qg(s,l,ne,c),L=s.memoizedState),(C=Ds||Uw(s,l,C,c,G,L,T))?(J||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(s.flags|=4194308)):(typeof g.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=L),g.props=c,g.state=L,g.context=T,c=C):(typeof g.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{g=s.stateNode,sy(i,s),T=s.memoizedProps,J=Qa(l,T),g.props=J,ne=s.pendingProps,G=g.context,L=l.contextType,C=ll,typeof L=="object"&&L!==null&&(C=Tn(L)),b=l.getDerivedStateFromProps,(L=typeof b=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(T!==ne||G!==C)&&Bw(s,g,c,C),Ds=!1,G=s.memoizedState,g.state=G,Rc(s,c,g,f),Sc();var Z=s.memoizedState;T!==ne||G!==Z||Ds||i!==null&&i.dependencies!==null&&_f(i.dependencies)?(typeof b=="function"&&(qg(s,l,b,c),Z=s.memoizedState),(J=Ds||Uw(s,l,J,c,G,Z,C)||i!==null&&i.dependencies!==null&&_f(i.dependencies))?(L||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(c,Z,C),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(c,Z,C)),typeof g.componentDidUpdate=="function"&&(s.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof g.componentDidUpdate!="function"||T===i.memoizedProps&&G===i.memoizedState||(s.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||T===i.memoizedProps&&G===i.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=Z),g.props=c,g.state=Z,g.context=C,c=J):(typeof g.componentDidUpdate!="function"||T===i.memoizedProps&&G===i.memoizedState||(s.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||T===i.memoizedProps&&G===i.memoizedState||(s.flags|=1024),c=!1)}return g=c,bc(i,s),c=(s.flags&128)!==0,g||c?(g=s.stateNode,l=c&&typeof l.getDerivedStateFromError!="function"?null:g.render(),s.flags|=1,i!==null&&c?(s.child=qa(s,i.child,null,f),s.child=qa(s,null,l,f)):pn(i,s,l,f),s.memoizedState=g.state,i=s.child):i=Ni(i,s,f),i}function e0(i,s,l,c){return dc(),s.flags|=256,pn(i,s,l,c),s.child}var Kg={dehydrated:null,treeContext:null,retryLane:0};function Qg(i){return{baseLanes:i,cachePool:nw()}}function Wg(i,s,l){return i=i!==null?i.childLanes&~l:0,s&&(i|=_r),i}function t0(i,s,l){var c=s.pendingProps,f=!1,g=(s.flags&128)!==0,T;if((T=g)||(T=i!==null&&i.memoizedState===null?!1:(Wt.current&2)!==0),T&&(f=!0,s.flags&=-129),T=(s.flags&32)!==0,s.flags&=-33,i===null){if(Qe){if(f?Is(s):As(),Qe){var b=fn,C;if(C=b){e:{for(C=b,b=$r;C.nodeType!==8;){if(!b){b=null;break e}if(C=Dr(C.nextSibling),C===null){b=null;break e}}b=C}b!==null?(s.memoizedState={dehydrated:b,treeContext:za!==null?{id:Ci,overflow:Di}:null,retryLane:536870912},C=yr(18,null,null,0),C.stateNode=b,C.return=s,s.child=C,xn=s,fn=null,C=!0):C=!1}C||ja(s)}if(b=s.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return b.data==="$!"?s.lanes=16:s.lanes=536870912,null;xi(s)}return b=c.children,c=c.fallback,f?(As(),f=s.mode,b=Xg({mode:"hidden",children:b},f),c=Za(c,f,l,null),b.return=s,c.return=s,b.sibling=c,s.child=b,f=s.child,f.memoizedState=Qg(l),f.childLanes=Wg(i,T,l),s.memoizedState=Kg,c):(Is(s),Yg(s,b))}if(C=i.memoizedState,C!==null&&(b=C.dehydrated,b!==null)){if(g)s.flags&256?(Is(s),s.flags&=-257,s=Zg(i,s,l)):s.memoizedState!==null?(As(),s.child=i.child,s.flags|=128,s=null):(As(),f=c.fallback,b=s.mode,c=Xg({mode:"visible",children:c.children},b),f=Za(f,b,l,null),f.flags|=2,c.return=s,f.return=s,c.sibling=f,s.child=c,qa(s,i.child,null,l),c=s.child,c.memoizedState=Qg(l),c.childLanes=Wg(i,T,l),s.memoizedState=Kg,s=f);else if(Is(s),b.data==="$!"){if(T=b.nextSibling&&b.nextSibling.dataset,T)var L=T.dgst;T=L,c=Error(r(419)),c.stack="",c.digest=T,fc({value:c,source:null,stack:null}),s=Zg(i,s,l)}else if(sn||Ic(i,s,l,!1),T=(l&i.childLanes)!==0,sn||T){if(T=at,T!==null){if(c=l&-l,(c&42)!==0)c=1;else switch(c){case 2:c=1;break;case 8:c=4;break;case 32:c=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:c=64;break;case 268435456:c=134217728;break;default:c=0}if(c=(c&(T.suspendedLanes|l))!==0?0:c,c!==0&&c!==C.retryLane)throw C.retryLane=c,bs(i,c),Pn(T,i,c),$w}b.data==="$?"||Sy(),s=Zg(i,s,l)}else b.data==="$?"?(s.flags|=128,s.child=i.child,s=Bx.bind(null,i),b._reactRetry=s,s=null):(i=C.treeContext,fn=Dr(b.nextSibling),xn=s,Qe=!0,Rr=null,$r=!1,i!==null&&(dr[fr++]=Ci,dr[fr++]=Di,dr[fr++]=za,Ci=i.id,Di=i.overflow,za=s),s=Yg(s,c.children),s.flags|=4096);return s}return f?(As(),f=c.fallback,b=s.mode,C=i.child,L=C.sibling,c=Vs(C,{mode:"hidden",children:c.children}),c.subtreeFlags=C.subtreeFlags&31457280,L!==null?f=Vs(L,f):(f=Za(f,b,l,null),f.flags|=2),f.return=s,c.return=s,c.sibling=f,s.child=c,c=f,f=s.child,b=i.child.memoizedState,b===null?b=Qg(l):(C=b.cachePool,C!==null?(L=Yt._currentValue,C=C.parent!==L?{parent:L,pool:L}:C):C=nw(),b={baseLanes:b.baseLanes|l,cachePool:C}),f.memoizedState=b,f.childLanes=Wg(i,T,l),s.memoizedState=Kg,c):(Is(s),l=i.child,i=l.sibling,l=Vs(l,{mode:"visible",children:c.children}),l.return=s,l.sibling=null,i!==null&&(T=s.deletions,T===null?(s.deletions=[i],s.flags|=16):T.push(i)),s.child=l,s.memoizedState=null,l)}function Yg(i,s){return s=Xg({mode:"visible",children:s},i.mode),s.return=i,i.child=s}function Xg(i,s){return R0(i,s,0,null)}function Zg(i,s,l){return qa(s,i.child,null,l),i=Yg(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function n0(i,s,l){i.lanes|=s;var c=i.alternate;c!==null&&(c.lanes|=s),ny(i.return,s,l)}function Jg(i,s,l,c,f){var g=i.memoizedState;g===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:l,tailMode:f}:(g.isBackwards=s,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=l,g.tailMode=f)}function r0(i,s,l){var c=s.pendingProps,f=c.revealOrder,g=c.tail;if(pn(i,s,c.children,l),c=Wt.current,(c&2)!==0)c=c&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&n0(i,l,s);else if(i.tag===19)n0(i,l,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}c&=1}switch($e(Wt,c),f){case"forwards":for(l=s.child,f=null;l!==null;)i=l.alternate,i!==null&&af(i)===null&&(f=l),l=l.sibling;l=f,l===null?(f=s.child,s.child=null):(f=l.sibling,l.sibling=null),Jg(s,!1,f,l,g);break;case"backwards":for(l=null,f=s.child,s.child=null;f!==null;){if(i=f.alternate,i!==null&&af(i)===null){s.child=f;break}i=f.sibling,f.sibling=l,l=f,f=i}Jg(s,!0,l,null,g);break;case"together":Jg(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Ni(i,s,l){if(i!==null&&(s.dependencies=i.dependencies),Ms|=s.lanes,(l&s.childLanes)===0)if(i!==null){if(Ic(i,s,l,!1),(l&s.childLanes)===0)return null}else return null;if(i!==null&&s.child!==i.child)throw Error(r(153));if(s.child!==null){for(i=s.child,l=Vs(i,i.pendingProps),s.child=l,l.return=s;i.sibling!==null;)i=i.sibling,l=l.sibling=Vs(i,i.pendingProps),l.return=s;l.sibling=null}return s.child}function ey(i,s){return(i.lanes&s)!==0?!0:(i=i.dependencies,!!(i!==null&&_f(i)))}function Ax(i,s,l){switch(s.tag){case 3:os(s,s.stateNode.containerInfo),Cs(s,Yt,i.memoizedState.cache),dc();break;case 27:case 5:ju(s);break;case 4:os(s,s.stateNode.containerInfo);break;case 10:Cs(s,s.type,s.memoizedProps.value);break;case 13:var c=s.memoizedState;if(c!==null)return c.dehydrated!==null?(Is(s),s.flags|=128,null):(l&s.child.childLanes)!==0?t0(i,s,l):(Is(s),i=Ni(i,s,l),i!==null?i.sibling:null);Is(s);break;case 19:var f=(i.flags&128)!==0;if(c=(l&s.childLanes)!==0,c||(Ic(i,s,l,!1),c=(l&s.childLanes)!==0),f){if(c)return r0(i,s,l);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),$e(Wt,Wt.current),c)break;return null;case 22:case 23:return s.lanes=0,Yw(i,s,l);case 24:Cs(s,Yt,i.memoizedState.cache)}return Ni(i,s,l)}function i0(i,s,l){if(i!==null)if(i.memoizedProps!==s.pendingProps)sn=!0;else{if(!ey(i,l)&&(s.flags&128)===0)return sn=!1,Ax(i,s,l);sn=(i.flags&131072)!==0}else sn=!1,Qe&&(s.flags&1048576)!==0&&jT(s,ef,s.index);switch(s.lanes=0,s.tag){case 16:e:{i=s.pendingProps;var c=s.elementType,f=c._init;if(c=f(c._payload),s.type=c,typeof c=="function")py(c)?(i=Qa(c,i),s.tag=1,s=Jw(null,s,c,i,l)):(s.tag=0,s=$g(null,s,c,i,l));else{if(c!=null){if(f=c.$$typeof,f===x){s.tag=11,s=Kw(null,s,c,i,l);break e}else if(f===H){s.tag=14,s=Qw(null,s,c,i,l);break e}}throw s=R(c)||c,Error(r(306,s,""))}}return s;case 0:return $g(i,s,s.type,s.pendingProps,l);case 1:return c=s.type,f=Qa(c,s.pendingProps),Jw(i,s,c,f,l);case 3:e:{if(os(s,s.stateNode.containerInfo),i===null)throw Error(r(387));var g=s.pendingProps;f=s.memoizedState,c=f.element,sy(i,s),Rc(s,g,null,l);var T=s.memoizedState;if(g=T.cache,Cs(s,Yt,g),g!==f.cache&&ry(s,[Yt],l,!0),Sc(),g=T.element,f.isDehydrated)if(f={element:g,isDehydrated:!1,cache:T.cache},s.updateQueue.baseState=f,s.memoizedState=f,s.flags&256){s=e0(i,s,g,l);break e}else if(g!==c){c=hr(Error(r(424)),s),fc(c),s=e0(i,s,g,l);break e}else for(fn=Dr(s.stateNode.containerInfo.firstChild),xn=s,Qe=!0,Rr=null,$r=!0,l=XT(s,null,g,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(dc(),g===c){s=Ni(i,s,l);break e}pn(i,s,g,l)}s=s.child}return s;case 26:return bc(i,s),i===null?(l=ob(s.type,null,s.pendingProps,null))?s.memoizedState=l:Qe||(l=s.type,i=s.pendingProps,c=kf(rr.current).createElement(l),c[tn]=s,c[$t]=i,mn(c,l,i),yt(c),s.stateNode=c):s.memoizedState=ob(s.type,i.memoizedProps,s.pendingProps,i.memoizedState),null;case 27:return ju(s),i===null&&Qe&&(c=s.stateNode=ib(s.type,s.pendingProps,rr.current),xn=s,$r=!0,fn=Dr(c.firstChild)),c=s.pendingProps.children,i!==null||Qe?pn(i,s,c,l):s.child=qa(s,null,c,l),bc(i,s),s.child;case 5:return i===null&&Qe&&((f=c=fn)&&(c=tP(c,s.type,s.pendingProps,$r),c!==null?(s.stateNode=c,xn=s,fn=Dr(c.firstChild),$r=!1,f=!0):f=!1),f||ja(s)),ju(s),f=s.type,g=s.pendingProps,T=i!==null?i.memoizedProps:null,c=g.children,zy(f,g)?c=null:T!==null&&zy(f,T)&&(s.flags|=32),s.memoizedState!==null&&(f=Cg(i,s,_x,null,null,l),jc._currentValue=f),bc(i,s),pn(i,s,c,l),s.child;case 6:return i===null&&Qe&&((i=l=fn)&&(l=nP(l,s.pendingProps,$r),l!==null?(s.stateNode=l,xn=s,fn=null,i=!0):i=!1),i||ja(s)),null;case 13:return t0(i,s,l);case 4:return os(s,s.stateNode.containerInfo),c=s.pendingProps,i===null?s.child=qa(s,null,c,l):pn(i,s,c,l),s.child;case 11:return Kw(i,s,s.type,s.pendingProps,l);case 7:return pn(i,s,s.pendingProps,l),s.child;case 8:return pn(i,s,s.pendingProps.children,l),s.child;case 12:return pn(i,s,s.pendingProps.children,l),s.child;case 10:return c=s.pendingProps,Cs(s,s.type,c.value),pn(i,s,c.children,l),s.child;case 9:return f=s.type._context,c=s.pendingProps.children,Ya(s),f=Tn(f),c=c(f),s.flags|=1,pn(i,s,c,l),s.child;case 14:return Qw(i,s,s.type,s.pendingProps,l);case 15:return Ww(i,s,s.type,s.pendingProps,l);case 19:return r0(i,s,l);case 22:return Yw(i,s,l);case 24:return Ya(s),c=Tn(Yt),i===null?(f=Sg(),f===null&&(f=at,g=Ig(),f.pooledCache=g,g.refCount++,g!==null&&(f.pooledCacheLanes|=l),f=g),s.memoizedState={parent:c,cache:f},iy(s),Cs(s,Yt,f)):((i.lanes&l)!==0&&(sy(i,s),Rc(s,null,null,l),Sc()),f=i.memoizedState,g=s.memoizedState,f.parent!==c?(f={parent:c,cache:c},s.memoizedState=f,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=f),Cs(s,Yt,c)):(c=g.cache,Cs(s,Yt,c),c!==f.cache&&ry(s,[Yt],l,!0))),pn(i,s,s.pendingProps.children,l),s.child;case 29:throw s.pendingProps}throw Error(r(156,s.tag))}var ty=Ve(null),Wa=null,Oi=null;function Cs(i,s,l){$e(ty,s._currentValue),s._currentValue=l}function ki(i){i._currentValue=ty.current,Ze(ty)}function ny(i,s,l){for(;i!==null;){var c=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),i===l)break;i=i.return}}function ry(i,s,l,c){var f=i.child;for(f!==null&&(f.return=i);f!==null;){var g=f.dependencies;if(g!==null){var T=f.child;g=g.firstContext;e:for(;g!==null;){var b=g;g=f;for(var C=0;C<s.length;C++)if(b.context===s[C]){g.lanes|=l,b=g.alternate,b!==null&&(b.lanes|=l),ny(g.return,l,i),c||(T=null);break e}g=b.next}}else if(f.tag===18){if(T=f.return,T===null)throw Error(r(341));T.lanes|=l,g=T.alternate,g!==null&&(g.lanes|=l),ny(T,l,i),T=null}else T=f.child;if(T!==null)T.return=f;else for(T=f;T!==null;){if(T===i){T=null;break}if(f=T.sibling,f!==null){f.return=T.return,T=f;break}T=T.return}f=T}}function Ic(i,s,l,c){i=null;for(var f=s,g=!1;f!==null;){if(!g){if((f.flags&524288)!==0)g=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var T=f.alternate;if(T===null)throw Error(r(387));if(T=T.memoizedProps,T!==null){var b=f.type;Kn(f.pendingProps.value,T.value)||(i!==null?i.push(b):i=[b])}}else if(f===as.current){if(T=f.alternate,T===null)throw Error(r(387));T.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(i!==null?i.push(jc):i=[jc])}f=f.return}i!==null&&ry(s,i,l,c),s.flags|=262144}function _f(i){for(i=i.firstContext;i!==null;){if(!Kn(i.context._currentValue,i.memoizedValue))return!0;i=i.next}return!1}function Ya(i){Wa=i,Oi=null,i=i.dependencies,i!==null&&(i.firstContext=null)}function Tn(i){return s0(Wa,i)}function vf(i,s){return Wa===null&&Ya(i),s0(i,s)}function s0(i,s){var l=s._currentValue;if(s={context:s,memoizedValue:l,next:null},Oi===null){if(i===null)throw Error(r(308));Oi=s,i.dependencies={lanes:0,firstContext:s},i.flags|=524288}else Oi=Oi.next=s;return l}var Ds=!1;function iy(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function sy(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,callbacks:null})}function xs(i){return{lane:i,tag:0,payload:null,callback:null,next:null}}function Ps(i,s,l){var c=i.updateQueue;if(c===null)return null;if(c=c.shared,(vt&2)!==0){var f=c.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),c.pending=s,s=Zd(i),zT(i,null,l),s}return Xd(i,c,s,l),Zd(i)}function Ac(i,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194176)!==0)){var c=s.lanes;c&=i.pendingLanes,l|=c,s.lanes=l,fs(i,l)}}function ay(i,s){var l=i.updateQueue,c=i.alternate;if(c!==null&&(c=c.updateQueue,l===c)){var f=null,g=null;if(l=l.firstBaseUpdate,l!==null){do{var T={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};g===null?f=g=T:g=g.next=T,l=l.next}while(l!==null);g===null?f=g=s:g=g.next=s}else f=g=s;l={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:g,shared:c.shared,callbacks:c.callbacks},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=s:i.next=s,l.lastBaseUpdate=s}var oy=!1;function Sc(){if(oy){var i=pl;if(i!==null)throw i}}function Rc(i,s,l,c){oy=!1;var f=i.updateQueue;Ds=!1;var g=f.firstBaseUpdate,T=f.lastBaseUpdate,b=f.shared.pending;if(b!==null){f.shared.pending=null;var C=b,L=C.next;C.next=null,T===null?g=L:T.next=L,T=C;var J=i.alternate;J!==null&&(J=J.updateQueue,b=J.lastBaseUpdate,b!==T&&(b===null?J.firstBaseUpdate=L:b.next=L,J.lastBaseUpdate=C))}if(g!==null){var ne=f.baseState;T=0,J=L=C=null,b=g;do{var G=b.lane&-536870913,Z=G!==b.lane;if(Z?(He&G)===G:(c&G)===G){G!==0&&G===fl&&(oy=!0),J!==null&&(J=J.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var ve=i,De=b;G=s;var Ct=l;switch(De.tag){case 1:if(ve=De.payload,typeof ve=="function"){ne=ve.call(Ct,ne,G);break e}ne=ve;break e;case 3:ve.flags=ve.flags&-65537|128;case 0:if(ve=De.payload,G=typeof ve=="function"?ve.call(Ct,ne,G):ve,G==null)break e;ne=P({},ne,G);break e;case 2:Ds=!0}}G=b.callback,G!==null&&(i.flags|=64,Z&&(i.flags|=8192),Z=f.callbacks,Z===null?f.callbacks=[G]:Z.push(G))}else Z={lane:G,tag:b.tag,payload:b.payload,callback:b.callback,next:null},J===null?(L=J=Z,C=ne):J=J.next=Z,T|=G;if(b=b.next,b===null){if(b=f.shared.pending,b===null)break;Z=b,b=Z.next,Z.next=null,f.lastBaseUpdate=Z,f.shared.pending=null}}while(!0);J===null&&(C=ne),f.baseState=C,f.firstBaseUpdate=L,f.lastBaseUpdate=J,g===null&&(f.shared.lanes=0),Ms|=T,i.lanes=T,i.memoizedState=ne}}function a0(i,s){if(typeof i!="function")throw Error(r(191,i));i.call(s)}function o0(i,s){var l=i.callbacks;if(l!==null)for(i.callbacks=null,i=0;i<l.length;i++)a0(l[i],s)}function Cc(i,s){try{var l=s.updateQueue,c=l!==null?l.lastEffect:null;if(c!==null){var f=c.next;l=f;do{if((l.tag&i)===i){c=void 0;var g=l.create,T=l.inst;c=g(),T.destroy=c}l=l.next}while(l!==f)}}catch(b){st(s,s.return,b)}}function Ns(i,s,l){try{var c=s.updateQueue,f=c!==null?c.lastEffect:null;if(f!==null){var g=f.next;c=g;do{if((c.tag&i)===i){var T=c.inst,b=T.destroy;if(b!==void 0){T.destroy=void 0,f=s;var C=l;try{b()}catch(L){st(f,C,L)}}}c=c.next}while(c!==g)}}catch(L){st(s,s.return,L)}}function l0(i){var s=i.updateQueue;if(s!==null){var l=i.stateNode;try{o0(s,l)}catch(c){st(i,i.return,c)}}}function u0(i,s,l){l.props=Qa(i.type,i.memoizedProps),l.state=i.memoizedState;try{l.componentWillUnmount()}catch(c){st(i,s,c)}}function Xa(i,s){try{var l=i.ref;if(l!==null){var c=i.stateNode;switch(i.tag){case 26:case 27:case 5:var f=c;break;default:f=c}typeof l=="function"?i.refCleanup=l(f):l.current=f}}catch(g){st(i,s,g)}}function Qn(i,s){var l=i.ref,c=i.refCleanup;if(l!==null)if(typeof c=="function")try{c()}catch(f){st(i,s,f)}finally{i.refCleanup=null,i=i.alternate,i!=null&&(i.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(f){st(i,s,f)}else l.current=null}function c0(i){var s=i.type,l=i.memoizedProps,c=i.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":l.autoFocus&&c.focus();break e;case"img":l.src?c.src=l.src:l.srcSet&&(c.srcset=l.srcSet)}}catch(f){st(i,i.return,f)}}function h0(i,s,l){try{var c=i.stateNode;Yx(c,i.type,l,s),c[$t]=s}catch(f){st(i,i.return,f)}}function d0(i){return i.tag===5||i.tag===3||i.tag===26||i.tag===27||i.tag===4}function ly(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||d0(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==27&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function uy(i,s,l){var c=i.tag;if(c===5||c===6)i=i.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(i,s):l.insertBefore(i,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(i,l)):(s=l,s.appendChild(i)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=Of));else if(c!==4&&c!==27&&(i=i.child,i!==null))for(uy(i,s,l),i=i.sibling;i!==null;)uy(i,s,l),i=i.sibling}function Ef(i,s,l){var c=i.tag;if(c===5||c===6)i=i.stateNode,s?l.insertBefore(i,s):l.appendChild(i);else if(c!==4&&c!==27&&(i=i.child,i!==null))for(Ef(i,s,l),i=i.sibling;i!==null;)Ef(i,s,l),i=i.sibling}var Vi=!1,St=!1,cy=!1,f0=typeof WeakSet=="function"?WeakSet:Set,an=null,p0=!1;function Sx(i,s){if(i=i.containerInfo,Uy=zf,i=PT(i),dg(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var c=l.getSelection&&l.getSelection();if(c&&c.rangeCount!==0){l=c.anchorNode;var f=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{l.nodeType,g.nodeType}catch{l=null;break e}var T=0,b=-1,C=-1,L=0,J=0,ne=i,G=null;t:for(;;){for(var Z;ne!==l||f!==0&&ne.nodeType!==3||(b=T+f),ne!==g||c!==0&&ne.nodeType!==3||(C=T+c),ne.nodeType===3&&(T+=ne.nodeValue.length),(Z=ne.firstChild)!==null;)G=ne,ne=Z;for(;;){if(ne===i)break t;if(G===l&&++L===f&&(b=T),G===g&&++J===c&&(C=T),(Z=ne.nextSibling)!==null)break;ne=G,G=ne.parentNode}ne=Z}l=b===-1||C===-1?null:{start:b,end:C}}else l=null}l=l||{start:0,end:0}}else l=null;for(By={focusedElem:i,selectionRange:l},zf=!1,an=s;an!==null;)if(s=an,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,an=i;else for(;an!==null;){switch(s=an,g=s.alternate,i=s.flags,s.tag){case 0:break;case 11:case 15:break;case 1:if((i&1024)!==0&&g!==null){i=void 0,l=s,f=g.memoizedProps,g=g.memoizedState,c=l.stateNode;try{var ve=Qa(l.type,f,l.elementType===l.type);i=c.getSnapshotBeforeUpdate(ve,g),c.__reactInternalSnapshotBeforeUpdate=i}catch(De){st(l,l.return,De)}}break;case 3:if((i&1024)!==0){if(i=s.stateNode.containerInfo,l=i.nodeType,l===9)qy(i);else if(l===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":qy(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((i&1024)!==0)throw Error(r(163))}if(i=s.sibling,i!==null){i.return=s.return,an=i;break}an=s.return}return ve=p0,p0=!1,ve}function m0(i,s,l){var c=l.flags;switch(l.tag){case 0:case 11:case 15:Li(i,l),c&4&&Cc(5,l);break;case 1:if(Li(i,l),c&4)if(i=l.stateNode,s===null)try{i.componentDidMount()}catch(b){st(l,l.return,b)}else{var f=Qa(l.type,s.memoizedProps);s=s.memoizedState;try{i.componentDidUpdate(f,s,i.__reactInternalSnapshotBeforeUpdate)}catch(b){st(l,l.return,b)}}c&64&&l0(l),c&512&&Xa(l,l.return);break;case 3:if(Li(i,l),c&64&&(c=l.updateQueue,c!==null)){if(i=null,l.child!==null)switch(l.child.tag){case 27:case 5:i=l.child.stateNode;break;case 1:i=l.child.stateNode}try{o0(c,i)}catch(b){st(l,l.return,b)}}break;case 26:Li(i,l),c&512&&Xa(l,l.return);break;case 27:case 5:Li(i,l),s===null&&c&4&&c0(l),c&512&&Xa(l,l.return);break;case 12:Li(i,l);break;case 13:Li(i,l),c&4&&_0(i,l);break;case 22:if(f=l.memoizedState!==null||Vi,!f){s=s!==null&&s.memoizedState!==null||St;var g=Vi,T=St;Vi=f,(St=s)&&!T?Os(i,l,(l.subtreeFlags&8772)!==0):Li(i,l),Vi=g,St=T}c&512&&(l.memoizedProps.mode==="manual"?Xa(l,l.return):Qn(l,l.return));break;default:Li(i,l)}}function g0(i){var s=i.alternate;s!==null&&(i.alternate=null,g0(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&Ra(s)),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}var Ft=null,Wn=!1;function Mi(i,s,l){for(l=l.child;l!==null;)y0(i,s,l),l=l.sibling}function y0(i,s,l){if(En&&typeof En.onCommitFiberUnmount=="function")try{En.onCommitFiberUnmount(ls,l)}catch{}switch(l.tag){case 26:St||Qn(l,s),Mi(i,s,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:St||Qn(l,s);var c=Ft,f=Wn;for(Ft=l.stateNode,Mi(i,s,l),l=l.stateNode,s=l.attributes;s.length;)l.removeAttributeNode(s[0]);Ra(l),Ft=c,Wn=f;break;case 5:St||Qn(l,s);case 6:f=Ft;var g=Wn;if(Ft=null,Mi(i,s,l),Ft=f,Wn=g,Ft!==null)if(Wn)try{i=Ft,c=l.stateNode,i.nodeType===8?i.parentNode.removeChild(c):i.removeChild(c)}catch(T){st(l,s,T)}else try{Ft.removeChild(l.stateNode)}catch(T){st(l,s,T)}break;case 18:Ft!==null&&(Wn?(s=Ft,l=l.stateNode,s.nodeType===8?jy(s.parentNode,l):s.nodeType===1&&jy(s,l),$c(s)):jy(Ft,l.stateNode));break;case 4:c=Ft,f=Wn,Ft=l.stateNode.containerInfo,Wn=!0,Mi(i,s,l),Ft=c,Wn=f;break;case 0:case 11:case 14:case 15:St||Ns(2,l,s),St||Ns(4,l,s),Mi(i,s,l);break;case 1:St||(Qn(l,s),c=l.stateNode,typeof c.componentWillUnmount=="function"&&u0(l,s,c)),Mi(i,s,l);break;case 21:Mi(i,s,l);break;case 22:St||Qn(l,s),St=(c=St)||l.memoizedState!==null,Mi(i,s,l),St=c;break;default:Mi(i,s,l)}}function _0(i,s){if(s.memoizedState===null&&(i=s.alternate,i!==null&&(i=i.memoizedState,i!==null&&(i=i.dehydrated,i!==null))))try{$c(i)}catch(l){st(s,s.return,l)}}function Rx(i){switch(i.tag){case 13:case 19:var s=i.stateNode;return s===null&&(s=i.stateNode=new f0),s;case 22:return i=i.stateNode,s=i._retryCache,s===null&&(s=i._retryCache=new f0),s;default:throw Error(r(435,i.tag))}}function hy(i,s){var l=Rx(i);s.forEach(function(c){var f=zx.bind(null,i,c);l.has(c)||(l.add(c),c.then(f,f))})}function mr(i,s){var l=s.deletions;if(l!==null)for(var c=0;c<l.length;c++){var f=l[c],g=i,T=s,b=T;e:for(;b!==null;){switch(b.tag){case 27:case 5:Ft=b.stateNode,Wn=!1;break e;case 3:Ft=b.stateNode.containerInfo,Wn=!0;break e;case 4:Ft=b.stateNode.containerInfo,Wn=!0;break e}b=b.return}if(Ft===null)throw Error(r(160));y0(g,T,f),Ft=null,Wn=!1,g=f.alternate,g!==null&&(g.return=null),f.return=null}if(s.subtreeFlags&13878)for(s=s.child;s!==null;)v0(s,i),s=s.sibling}var Cr=null;function v0(i,s){var l=i.alternate,c=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:mr(s,i),gr(i),c&4&&(Ns(3,i,i.return),Cc(3,i),Ns(5,i,i.return));break;case 1:mr(s,i),gr(i),c&512&&(St||l===null||Qn(l,l.return)),c&64&&Vi&&(i=i.updateQueue,i!==null&&(c=i.callbacks,c!==null&&(l=i.shared.hiddenCallbacks,i.shared.hiddenCallbacks=l===null?c:l.concat(c))));break;case 26:var f=Cr;if(mr(s,i),gr(i),c&512&&(St||l===null||Qn(l,l.return)),c&4){var g=l!==null?l.memoizedState:null;if(c=i.memoizedState,l===null)if(c===null)if(i.stateNode===null){e:{c=i.type,l=i.memoizedProps,f=f.ownerDocument||f;t:switch(c){case"title":g=f.getElementsByTagName("title")[0],(!g||g[ms]||g[tn]||g.namespaceURI==="http://www.w3.org/2000/svg"||g.hasAttribute("itemprop"))&&(g=f.createElement(c),f.head.insertBefore(g,f.querySelector("head > title"))),mn(g,c,l),g[tn]=i,yt(g),c=g;break e;case"link":var T=cb("link","href",f).get(c+(l.href||""));if(T){for(var b=0;b<T.length;b++)if(g=T[b],g.getAttribute("href")===(l.href==null?null:l.href)&&g.getAttribute("rel")===(l.rel==null?null:l.rel)&&g.getAttribute("title")===(l.title==null?null:l.title)&&g.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){T.splice(b,1);break t}}g=f.createElement(c),mn(g,c,l),f.head.appendChild(g);break;case"meta":if(T=cb("meta","content",f).get(c+(l.content||""))){for(b=0;b<T.length;b++)if(g=T[b],g.getAttribute("content")===(l.content==null?null:""+l.content)&&g.getAttribute("name")===(l.name==null?null:l.name)&&g.getAttribute("property")===(l.property==null?null:l.property)&&g.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&g.getAttribute("charset")===(l.charSet==null?null:l.charSet)){T.splice(b,1);break t}}g=f.createElement(c),mn(g,c,l),f.head.appendChild(g);break;default:throw Error(r(468,c))}g[tn]=i,yt(g),c=g}i.stateNode=c}else hb(f,i.type,i.stateNode);else i.stateNode=ub(f,c,i.memoizedProps);else g!==c?(g===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):g.count--,c===null?hb(f,i.type,i.stateNode):ub(f,c,i.memoizedProps)):c===null&&i.stateNode!==null&&h0(i,i.memoizedProps,l.memoizedProps)}break;case 27:if(c&4&&i.alternate===null){f=i.stateNode,g=i.memoizedProps;try{for(var C=f.firstChild;C;){var L=C.nextSibling,J=C.nodeName;C[ms]||J==="HEAD"||J==="BODY"||J==="SCRIPT"||J==="STYLE"||J==="LINK"&&C.rel.toLowerCase()==="stylesheet"||f.removeChild(C),C=L}for(var ne=i.type,G=f.attributes;G.length;)f.removeAttributeNode(G[0]);mn(f,ne,g),f[tn]=i,f[$t]=g}catch(ve){st(i,i.return,ve)}}case 5:if(mr(s,i),gr(i),c&512&&(St||l===null||Qn(l,l.return)),i.flags&32){f=i.stateNode;try{ar(f,"")}catch(ve){st(i,i.return,ve)}}c&4&&i.stateNode!=null&&(f=i.memoizedProps,h0(i,f,l!==null?l.memoizedProps:f)),c&1024&&(cy=!0);break;case 6:if(mr(s,i),gr(i),c&4){if(i.stateNode===null)throw Error(r(162));c=i.memoizedProps,l=i.stateNode;try{l.nodeValue=c}catch(ve){st(i,i.return,ve)}}break;case 3:if(Lf=null,f=Cr,Cr=Vf(s.containerInfo),mr(s,i),Cr=f,gr(i),c&4&&l!==null&&l.memoizedState.isDehydrated)try{$c(s.containerInfo)}catch(ve){st(i,i.return,ve)}cy&&(cy=!1,E0(i));break;case 4:c=Cr,Cr=Vf(i.stateNode.containerInfo),mr(s,i),gr(i),Cr=c;break;case 12:mr(s,i),gr(i);break;case 13:mr(s,i),gr(i),i.child.flags&8192&&i.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Ey=Ln()),c&4&&(c=i.updateQueue,c!==null&&(i.updateQueue=null,hy(i,c)));break;case 22:if(c&512&&(St||l===null||Qn(l,l.return)),C=i.memoizedState!==null,L=l!==null&&l.memoizedState!==null,J=Vi,ne=St,Vi=J||C,St=ne||L,mr(s,i),St=ne,Vi=J,gr(i),s=i.stateNode,s._current=i,s._visibility&=-3,s._visibility|=s._pendingVisibility&2,c&8192&&(s._visibility=C?s._visibility&-2:s._visibility|1,C&&(s=Vi||St,l===null||L||s||_l(i)),i.memoizedProps===null||i.memoizedProps.mode!=="manual"))e:for(l=null,s=i;;){if(s.tag===5||s.tag===26||s.tag===27){if(l===null){L=l=s;try{if(f=L.stateNode,C)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{T=L.stateNode,b=L.memoizedProps.style;var Z=b!=null&&b.hasOwnProperty("display")?b.display:null;T.style.display=Z==null||typeof Z=="boolean"?"":(""+Z).trim()}}catch(ve){st(L,L.return,ve)}}}else if(s.tag===6){if(l===null){L=s;try{L.stateNode.nodeValue=C?"":L.memoizedProps}catch(ve){st(L,L.return,ve)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===i)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break e;for(;s.sibling===null;){if(s.return===null||s.return===i)break e;l===s&&(l=null),s=s.return}l===s&&(l=null),s.sibling.return=s.return,s=s.sibling}c&4&&(c=i.updateQueue,c!==null&&(l=c.retryQueue,l!==null&&(c.retryQueue=null,hy(i,l))));break;case 19:mr(s,i),gr(i),c&4&&(c=i.updateQueue,c!==null&&(i.updateQueue=null,hy(i,c)));break;case 21:break;default:mr(s,i),gr(i)}}function gr(i){var s=i.flags;if(s&2){try{if(i.tag!==27){e:{for(var l=i.return;l!==null;){if(d0(l)){var c=l;break e}l=l.return}throw Error(r(160))}switch(c.tag){case 27:var f=c.stateNode,g=ly(i);Ef(i,g,f);break;case 5:var T=c.stateNode;c.flags&32&&(ar(T,""),c.flags&=-33);var b=ly(i);Ef(i,b,T);break;case 3:case 4:var C=c.stateNode.containerInfo,L=ly(i);uy(i,L,C);break;default:throw Error(r(161))}}}catch(J){st(i,i.return,J)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function E0(i){if(i.subtreeFlags&1024)for(i=i.child;i!==null;){var s=i;E0(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),i=i.sibling}}function Li(i,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)m0(i,s.alternate,s),s=s.sibling}function _l(i){for(i=i.child;i!==null;){var s=i;switch(s.tag){case 0:case 11:case 14:case 15:Ns(4,s,s.return),_l(s);break;case 1:Qn(s,s.return);var l=s.stateNode;typeof l.componentWillUnmount=="function"&&u0(s,s.return,l),_l(s);break;case 26:case 27:case 5:Qn(s,s.return),_l(s);break;case 22:Qn(s,s.return),s.memoizedState===null&&_l(s);break;default:_l(s)}i=i.sibling}}function Os(i,s,l){for(l=l&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var c=s.alternate,f=i,g=s,T=g.flags;switch(g.tag){case 0:case 11:case 15:Os(f,g,l),Cc(4,g);break;case 1:if(Os(f,g,l),c=g,f=c.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(L){st(c,c.return,L)}if(c=g,f=c.updateQueue,f!==null){var b=c.stateNode;try{var C=f.shared.hiddenCallbacks;if(C!==null)for(f.shared.hiddenCallbacks=null,f=0;f<C.length;f++)a0(C[f],b)}catch(L){st(c,c.return,L)}}l&&T&64&&l0(g),Xa(g,g.return);break;case 26:case 27:case 5:Os(f,g,l),l&&c===null&&T&4&&c0(g),Xa(g,g.return);break;case 12:Os(f,g,l);break;case 13:Os(f,g,l),l&&T&4&&_0(f,g);break;case 22:g.memoizedState===null&&Os(f,g,l),Xa(g,g.return);break;default:Os(f,g,l)}s=s.sibling}}function dy(i,s){var l=null;i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),i=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(i=s.memoizedState.cachePool.pool),i!==l&&(i!=null&&i.refCount++,l!=null&&_c(l))}function fy(i,s){i=null,s.alternate!==null&&(i=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==i&&(s.refCount++,i!=null&&_c(i))}function ks(i,s,l,c){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)T0(i,s,l,c),s=s.sibling}function T0(i,s,l,c){var f=s.flags;switch(s.tag){case 0:case 11:case 15:ks(i,s,l,c),f&2048&&Cc(9,s);break;case 3:ks(i,s,l,c),f&2048&&(i=null,s.alternate!==null&&(i=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==i&&(s.refCount++,i!=null&&_c(i)));break;case 12:if(f&2048){ks(i,s,l,c),i=s.stateNode;try{var g=s.memoizedProps,T=g.id,b=g.onPostCommit;typeof b=="function"&&b(T,s.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(C){st(s,s.return,C)}}else ks(i,s,l,c);break;case 23:break;case 22:g=s.stateNode,s.memoizedState!==null?g._visibility&4?ks(i,s,l,c):Dc(i,s):g._visibility&4?ks(i,s,l,c):(g._visibility|=4,vl(i,s,l,c,(s.subtreeFlags&10256)!==0)),f&2048&&dy(s.alternate,s);break;case 24:ks(i,s,l,c),f&2048&&fy(s.alternate,s);break;default:ks(i,s,l,c)}}function vl(i,s,l,c,f){for(f=f&&(s.subtreeFlags&10256)!==0,s=s.child;s!==null;){var g=i,T=s,b=l,C=c,L=T.flags;switch(T.tag){case 0:case 11:case 15:vl(g,T,b,C,f),Cc(8,T);break;case 23:break;case 22:var J=T.stateNode;T.memoizedState!==null?J._visibility&4?vl(g,T,b,C,f):Dc(g,T):(J._visibility|=4,vl(g,T,b,C,f)),f&&L&2048&&dy(T.alternate,T);break;case 24:vl(g,T,b,C,f),f&&L&2048&&fy(T.alternate,T);break;default:vl(g,T,b,C,f)}s=s.sibling}}function Dc(i,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var l=i,c=s,f=c.flags;switch(c.tag){case 22:Dc(l,c),f&2048&&dy(c.alternate,c);break;case 24:Dc(l,c),f&2048&&fy(c.alternate,c);break;default:Dc(l,c)}s=s.sibling}}var xc=8192;function El(i){if(i.subtreeFlags&xc)for(i=i.child;i!==null;)w0(i),i=i.sibling}function w0(i){switch(i.tag){case 26:El(i),i.flags&xc&&i.memoizedState!==null&&mP(Cr,i.memoizedState,i.memoizedProps);break;case 5:El(i);break;case 3:case 4:var s=Cr;Cr=Vf(i.stateNode.containerInfo),El(i),Cr=s;break;case 22:i.memoizedState===null&&(s=i.alternate,s!==null&&s.memoizedState!==null?(s=xc,xc=16777216,El(i),xc=s):El(i));break;default:El(i)}}function b0(i){var s=i.alternate;if(s!==null&&(i=s.child,i!==null)){s.child=null;do s=i.sibling,i.sibling=null,i=s;while(i!==null)}}function Pc(i){var s=i.deletions;if((i.flags&16)!==0){if(s!==null)for(var l=0;l<s.length;l++){var c=s[l];an=c,A0(c,i)}b0(i)}if(i.subtreeFlags&10256)for(i=i.child;i!==null;)I0(i),i=i.sibling}function I0(i){switch(i.tag){case 0:case 11:case 15:Pc(i),i.flags&2048&&Ns(9,i,i.return);break;case 3:Pc(i);break;case 12:Pc(i);break;case 22:var s=i.stateNode;i.memoizedState!==null&&s._visibility&4&&(i.return===null||i.return.tag!==13)?(s._visibility&=-5,Tf(i)):Pc(i);break;default:Pc(i)}}function Tf(i){var s=i.deletions;if((i.flags&16)!==0){if(s!==null)for(var l=0;l<s.length;l++){var c=s[l];an=c,A0(c,i)}b0(i)}for(i=i.child;i!==null;){switch(s=i,s.tag){case 0:case 11:case 15:Ns(8,s,s.return),Tf(s);break;case 22:l=s.stateNode,l._visibility&4&&(l._visibility&=-5,Tf(s));break;default:Tf(s)}i=i.sibling}}function A0(i,s){for(;an!==null;){var l=an;switch(l.tag){case 0:case 11:case 15:Ns(8,l,s);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var c=l.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:_c(l.memoizedState.cache)}if(c=l.child,c!==null)c.return=l,an=c;else e:for(l=i;an!==null;){c=an;var f=c.sibling,g=c.return;if(g0(c),c===l){an=null;break e}if(f!==null){f.return=g,an=f;break e}an=g}}}function Cx(i,s,l,c){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yr(i,s,l,c){return new Cx(i,s,l,c)}function py(i){return i=i.prototype,!(!i||!i.isReactComponent)}function Vs(i,s){var l=i.alternate;return l===null?(l=yr(i.tag,s,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=s,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&31457280,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,s=i.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l.refCleanup=i.refCleanup,l}function S0(i,s){i.flags&=31457282;var l=i.alternate;return l===null?(i.childLanes=0,i.lanes=s,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,s=l.dependencies,i.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),i}function wf(i,s,l,c,f,g){var T=0;if(c=i,typeof i=="function")py(i)&&(T=1);else if(typeof i=="string")T=fP(i,l,Ut.current)?26:i==="html"||i==="head"||i==="body"?27:5;else e:switch(i){case p:return Za(l.children,f,g,s);case m:T=8,f|=24;break;case _:return i=yr(12,l,s,f|2),i.elementType=_,i.lanes=g,i;case U:return i=yr(13,l,s,f),i.elementType=U,i.lanes=g,i;case M:return i=yr(19,l,s,f),i.elementType=M,i.lanes=g,i;case K:return R0(l,f,g,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case v:case S:T=10;break e;case w:T=9;break e;case x:T=11;break e;case H:T=14;break e;case $:T=16,c=null;break e}T=29,l=Error(r(130,i===null?"null":typeof i,"")),c=null}return s=yr(T,l,s,f),s.elementType=i,s.type=c,s.lanes=g,s}function Za(i,s,l,c){return i=yr(7,i,c,s),i.lanes=l,i}function R0(i,s,l,c){i=yr(22,i,c,s),i.elementType=K,i.lanes=l;var f={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var g=f._current;if(g===null)throw Error(r(456));if((f._pendingVisibility&2)===0){var T=bs(g,2);T!==null&&(f._pendingVisibility|=2,Pn(T,g,2))}},attach:function(){var g=f._current;if(g===null)throw Error(r(456));if((f._pendingVisibility&2)!==0){var T=bs(g,2);T!==null&&(f._pendingVisibility&=-3,Pn(T,g,2))}}};return i.stateNode=f,i}function my(i,s,l){return i=yr(6,i,null,s),i.lanes=l,i}function gy(i,s,l){return s=yr(4,i.children!==null?i.children:[],i.key,s),s.lanes=l,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function Ui(i){i.flags|=4}function C0(i,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)i.flags&=-16777217;else if(i.flags|=16777216,!db(s)){if(s=pr.current,s!==null&&((He&4194176)===He?Kr!==null:(He&62914560)!==He&&(He&536870912)===0||s!==Kr))throw mc=Tg,GT;i.flags|=8192}}function bf(i,s){s!==null&&(i.flags|=4),i.flags&16384&&(s=i.tag!==22?hs():536870912,i.lanes|=s,wl|=s)}function Nc(i,s){if(!Qe)switch(i.tailMode){case"hidden":s=i.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var c=null;l!==null;)l.alternate!==null&&(c=l),l=l.sibling;c===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:c.sibling=null}}function _t(i){var s=i.alternate!==null&&i.alternate.child===i.child,l=0,c=0;if(s)for(var f=i.child;f!==null;)l|=f.lanes|f.childLanes,c|=f.subtreeFlags&31457280,c|=f.flags&31457280,f.return=i,f=f.sibling;else for(f=i.child;f!==null;)l|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=i,f=f.sibling;return i.subtreeFlags|=c,i.childLanes=l,s}function Dx(i,s,l){var c=s.pendingProps;switch(vg(s),s.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _t(s),null;case 1:return _t(s),null;case 3:return l=s.stateNode,c=null,i!==null&&(c=i.memoizedState.cache),s.memoizedState.cache!==c&&(s.flags|=2048),ki(Yt),yi(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(i===null||i.child===null)&&(hc(s)?Ui(s):i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Rr!==null&&(Iy(Rr),Rr=null))),_t(s),null;case 26:return l=s.memoizedState,i===null?(Ui(s),l!==null?(_t(s),C0(s,l)):(_t(s),s.flags&=-16777217)):l?l!==i.memoizedState?(Ui(s),_t(s),C0(s,l)):(_t(s),s.flags&=-16777217):(i.memoizedProps!==c&&Ui(s),_t(s),s.flags&=-16777217),null;case 27:Fo(s),l=rr.current;var f=s.type;if(i!==null&&s.stateNode!=null)i.memoizedProps!==c&&Ui(s);else{if(!c){if(s.stateNode===null)throw Error(r(166));return _t(s),null}i=Ut.current,hc(s)?qT(s):(i=ib(f,c,l),s.stateNode=i,Ui(s))}return _t(s),null;case 5:if(Fo(s),l=s.type,i!==null&&s.stateNode!=null)i.memoizedProps!==c&&Ui(s);else{if(!c){if(s.stateNode===null)throw Error(r(166));return _t(s),null}if(i=Ut.current,hc(s))qT(s);else{switch(f=kf(rr.current),i){case 1:i=f.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:i=f.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":i=f.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":i=f.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":i=f.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof c.is=="string"?f.createElement("select",{is:c.is}):f.createElement("select"),c.multiple?i.multiple=!0:c.size&&(i.size=c.size);break;default:i=typeof c.is=="string"?f.createElement(l,{is:c.is}):f.createElement(l)}}i[tn]=s,i[$t]=c;e:for(f=s.child;f!==null;){if(f.tag===5||f.tag===6)i.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===s)break e;for(;f.sibling===null;){if(f.return===null||f.return===s)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}s.stateNode=i;e:switch(mn(i,l,c),l){case"button":case"input":case"select":case"textarea":i=!!c.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&Ui(s)}}return _t(s),s.flags&=-16777217,null;case 6:if(i&&s.stateNode!=null)i.memoizedProps!==c&&Ui(s);else{if(typeof c!="string"&&s.stateNode===null)throw Error(r(166));if(i=rr.current,hc(s)){if(i=s.stateNode,l=s.memoizedProps,c=null,f=xn,f!==null)switch(f.tag){case 27:case 5:c=f.memoizedProps}i[tn]=s,i=!!(i.nodeValue===l||c!==null&&c.suppressHydrationWarning===!0||Z0(i.nodeValue,l)),i||ja(s)}else i=kf(i).createTextNode(c),i[tn]=s,s.stateNode=i}return _t(s),null;case 13:if(c=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(f=hc(s),c!==null&&c.dehydrated!==null){if(i===null){if(!f)throw Error(r(318));if(f=s.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(r(317));f[tn]=s}else dc(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;_t(s),f=!1}else Rr!==null&&(Iy(Rr),Rr=null),f=!0;if(!f)return s.flags&256?(xi(s),s):(xi(s),null)}if(xi(s),(s.flags&128)!==0)return s.lanes=l,s;if(l=c!==null,i=i!==null&&i.memoizedState!==null,l){c=s.child,f=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(f=c.alternate.memoizedState.cachePool.pool);var g=null;c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(g=c.memoizedState.cachePool.pool),g!==f&&(c.flags|=2048)}return l!==i&&l&&(s.child.flags|=8192),bf(s,s.updateQueue),_t(s),null;case 4:return yi(),i===null&&Vy(s.stateNode.containerInfo),_t(s),null;case 10:return ki(s.type),_t(s),null;case 19:if(Ze(Wt),f=s.memoizedState,f===null)return _t(s),null;if(c=(s.flags&128)!==0,g=f.rendering,g===null)if(c)Nc(f,!1);else{if(Rt!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(g=af(i),g!==null){for(s.flags|=128,Nc(f,!1),i=g.updateQueue,s.updateQueue=i,bf(s,i),s.subtreeFlags=0,i=l,l=s.child;l!==null;)S0(l,i),l=l.sibling;return $e(Wt,Wt.current&1|2),s.child}i=i.sibling}f.tail!==null&&Ln()>If&&(s.flags|=128,c=!0,Nc(f,!1),s.lanes=4194304)}else{if(!c)if(i=af(g),i!==null){if(s.flags|=128,c=!0,i=i.updateQueue,s.updateQueue=i,bf(s,i),Nc(f,!0),f.tail===null&&f.tailMode==="hidden"&&!g.alternate&&!Qe)return _t(s),null}else 2*Ln()-f.renderingStartTime>If&&l!==536870912&&(s.flags|=128,c=!0,Nc(f,!1),s.lanes=4194304);f.isBackwards?(g.sibling=s.child,s.child=g):(i=f.last,i!==null?i.sibling=g:s.child=g,f.last=g)}return f.tail!==null?(s=f.tail,f.rendering=s,f.tail=s.sibling,f.renderingStartTime=Ln(),s.sibling=null,i=Wt.current,$e(Wt,c?i&1|2:i&1),s):(_t(s),null);case 22:case 23:return xi(s),bg(),c=s.memoizedState!==null,i!==null?i.memoizedState!==null!==c&&(s.flags|=8192):c&&(s.flags|=8192),c?(l&536870912)!==0&&(s.flags&128)===0&&(_t(s),s.subtreeFlags&6&&(s.flags|=8192)):_t(s),l=s.updateQueue,l!==null&&bf(s,l.retryQueue),l=null,i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),c=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(c=s.memoizedState.cachePool.pool),c!==l&&(s.flags|=2048),i!==null&&Ze(Ha),null;case 24:return l=null,i!==null&&(l=i.memoizedState.cache),s.memoizedState.cache!==l&&(s.flags|=2048),ki(Yt),_t(s),null;case 25:return null}throw Error(r(156,s.tag))}function xx(i,s){switch(vg(s),s.tag){case 1:return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return ki(Yt),yi(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 26:case 27:case 5:return Fo(s),null;case 13:if(xi(s),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(r(340));dc()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return Ze(Wt),null;case 4:return yi(),null;case 10:return ki(s.type),null;case 22:case 23:return xi(s),bg(),i!==null&&Ze(Ha),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 24:return ki(Yt),null;case 25:return null;default:return null}}function D0(i,s){switch(vg(s),s.tag){case 3:ki(Yt),yi();break;case 26:case 27:case 5:Fo(s);break;case 4:yi();break;case 13:xi(s);break;case 19:Ze(Wt);break;case 10:ki(s.type);break;case 22:case 23:xi(s),bg(),i!==null&&Ze(Ha);break;case 24:ki(Yt)}}var Px={getCacheForType:function(i){var s=Tn(Yt),l=s.data.get(i);return l===void 0&&(l=i(),s.data.set(i,l)),l}},Nx=typeof WeakMap=="function"?WeakMap:Map,vt=0,at=null,Le=null,He=0,ot=0,Yn=null,Bi=!1,Tl=!1,yy=!1,zi=0,Rt=0,Ms=0,Ja=0,_y=0,_r=0,wl=0,Oc=null,Wr=null,vy=!1,Ey=0,If=1/0,Af=null,Ls=null,Sf=!1,eo=null,kc=0,Ty=0,wy=null,Vc=0,by=null;function Xn(){if((vt&2)!==0&&He!==0)return He&-He;if(A.T!==null){var i=fl;return i!==0?i:Py()}return Pd()}function x0(){_r===0&&(_r=(He&536870912)===0||Qe?Ku():536870912);var i=pr.current;return i!==null&&(i.flags|=32),_r}function Pn(i,s,l){(i===at&&ot===2||i.cancelPendingCommit!==null)&&(bl(i,0),Fi(i,He,_r,!1)),Ot(i,l),((vt&2)===0||i!==at)&&(i===at&&((vt&2)===0&&(Ja|=l),Rt===4&&Fi(i,He,_r,!1)),Yr(i))}function P0(i,s,l){if((vt&6)!==0)throw Error(r(327));var c=!l&&(s&60)===0&&(s&i.expiredLanes)===0||cs(i,s),f=c?Vx(i,s):Ry(i,s,!0),g=c;do{if(f===0){Tl&&!c&&Fi(i,s,0,!1);break}else if(f===6)Fi(i,s,0,!Bi);else{if(l=i.current.alternate,g&&!Ox(l)){f=Ry(i,s,!1),g=!1;continue}if(f===2){if(g=s,i.errorRecoveryDisabledLanes&g)var T=0;else T=i.pendingLanes&-536870913,T=T!==0?T:T&536870912?536870912:0;if(T!==0){s=T;e:{var b=i;f=Oc;var C=b.current.memoizedState.isDehydrated;if(C&&(bl(b,T).flags|=256),T=Ry(b,T,!1),T!==2){if(yy&&!C){b.errorRecoveryDisabledLanes|=g,Ja|=g,f=4;break e}g=Wr,Wr=f,g!==null&&Iy(g)}f=T}if(g=!1,f!==2)continue}}if(f===1){bl(i,0),Fi(i,s,0,!0);break}e:{switch(c=i,f){case 0:case 1:throw Error(r(345));case 4:if((s&4194176)===s){Fi(c,s,_r,!Bi);break e}break;case 2:Wr=null;break;case 3:case 5:break;default:throw Error(r(329))}if(c.finishedWork=l,c.finishedLanes=s,(s&62914560)===s&&(g=Ey+300-Ln(),10<g)){if(Fi(c,s,_r,!Bi),ir(c,0)!==0)break e;c.timeoutHandle=tb(N0.bind(null,c,l,Wr,Af,vy,s,_r,Ja,wl,Bi,2,-0,0),g);break e}N0(c,l,Wr,Af,vy,s,_r,Ja,wl,Bi,0,-0,0)}}break}while(!0);Yr(i)}function Iy(i){Wr===null?Wr=i:Wr.push.apply(Wr,i)}function N0(i,s,l,c,f,g,T,b,C,L,J,ne,G){var Z=s.subtreeFlags;if((Z&8192||(Z&16785408)===16785408)&&(Fc={stylesheets:null,count:0,unsuspend:pP},w0(s),s=gP(),s!==null)){i.cancelPendingCommit=s(B0.bind(null,i,l,c,f,T,b,C,1,ne,G)),Fi(i,g,T,!L);return}B0(i,l,c,f,T,b,C,J,ne,G)}function Ox(i){for(var s=i;;){var l=s.tag;if((l===0||l===11||l===15)&&s.flags&16384&&(l=s.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var c=0;c<l.length;c++){var f=l[c],g=f.getSnapshot;f=f.value;try{if(!Kn(g(),f))return!1}catch{return!1}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Fi(i,s,l,c){s&=~_y,s&=~Ja,i.suspendedLanes|=s,i.pingedLanes&=~s,c&&(i.warmLanes|=s),c=i.expirationTimes;for(var f=s;0<f;){var g=31-Rn(f),T=1<<g;c[g]=-1,f&=~T}l!==0&&ds(i,l,s)}function Rf(){return(vt&6)===0?(Mc(0),!1):!0}function Ay(){if(Le!==null){if(ot===0)var i=Le.return;else i=Le,Oi=Wa=null,Pg(i),hl=null,gc=0,i=Le;for(;i!==null;)D0(i.alternate,i),i=i.return;Le=null}}function bl(i,s){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;l!==-1&&(i.timeoutHandle=-1,Zx(l)),l=i.cancelPendingCommit,l!==null&&(i.cancelPendingCommit=null,l()),Ay(),at=i,Le=l=Vs(i.current,null),He=s,ot=0,Yn=null,Bi=!1,Tl=cs(i,s),yy=!1,wl=_r=_y=Ja=Ms=Rt=0,Wr=Oc=null,vy=!1,(s&8)!==0&&(s|=s&32);var c=i.entangledLanes;if(c!==0)for(i=i.entanglements,c&=s;0<c;){var f=31-Rn(c),g=1<<f;s|=i[f],c&=~g}return zi=s,Yd(),l}function O0(i,s){ke=null,A.H=Qr,s===pc?(s=QT(),ot=3):s===GT?(s=QT(),ot=4):ot=s===$w?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,Yn=s,Le===null&&(Rt=1,yf(i,hr(s,i.current)))}function k0(){var i=A.H;return A.H=Qr,i===null?Qr:i}function V0(){var i=A.A;return A.A=Px,i}function Sy(){Rt=4,Bi||(He&4194176)!==He&&pr.current!==null||(Tl=!0),(Ms&134217727)===0&&(Ja&134217727)===0||at===null||Fi(at,He,_r,!1)}function Ry(i,s,l){var c=vt;vt|=2;var f=k0(),g=V0();(at!==i||He!==s)&&(Af=null,bl(i,s)),s=!1;var T=Rt;e:do try{if(ot!==0&&Le!==null){var b=Le,C=Yn;switch(ot){case 8:Ay(),T=6;break e;case 3:case 2:case 6:pr.current===null&&(s=!0);var L=ot;if(ot=0,Yn=null,Il(i,b,C,L),l&&Tl){T=0;break e}break;default:L=ot,ot=0,Yn=null,Il(i,b,C,L)}}kx(),T=Rt;break}catch(J){O0(i,J)}while(!0);return s&&i.shellSuspendCounter++,Oi=Wa=null,vt=c,A.H=f,A.A=g,Le===null&&(at=null,He=0,Yd()),T}function kx(){for(;Le!==null;)M0(Le)}function Vx(i,s){var l=vt;vt|=2;var c=k0(),f=V0();at!==i||He!==s?(Af=null,If=Ln()+500,bl(i,s)):Tl=cs(i,s);e:do try{if(ot!==0&&Le!==null){s=Le;var g=Yn;t:switch(ot){case 1:ot=0,Yn=null,Il(i,s,g,1);break;case 2:if($T(g)){ot=0,Yn=null,L0(s);break}s=function(){ot===2&&at===i&&(ot=7),Yr(i)},g.then(s,s);break e;case 3:ot=7;break e;case 4:ot=5;break e;case 7:$T(g)?(ot=0,Yn=null,L0(s)):(ot=0,Yn=null,Il(i,s,g,7));break;case 5:var T=null;switch(Le.tag){case 26:T=Le.memoizedState;case 5:case 27:var b=Le;if(!T||db(T)){ot=0,Yn=null;var C=b.sibling;if(C!==null)Le=C;else{var L=b.return;L!==null?(Le=L,Cf(L)):Le=null}break t}}ot=0,Yn=null,Il(i,s,g,5);break;case 6:ot=0,Yn=null,Il(i,s,g,6);break;case 8:Ay(),Rt=6;break e;default:throw Error(r(462))}}Mx();break}catch(J){O0(i,J)}while(!0);return Oi=Wa=null,A.H=c,A.A=f,vt=l,Le!==null?0:(at=null,He=0,Yd(),Rt)}function Mx(){for(;Le!==null&&!tg();)M0(Le)}function M0(i){var s=i0(i.alternate,i,zi);i.memoizedProps=i.pendingProps,s===null?Cf(i):Le=s}function L0(i){var s=i,l=s.alternate;switch(s.tag){case 15:case 0:s=Zw(l,s,s.pendingProps,s.type,void 0,He);break;case 11:s=Zw(l,s,s.pendingProps,s.type.render,s.ref,He);break;case 5:Pg(s);default:D0(l,s),s=Le=S0(s,zi),s=i0(l,s,zi)}i.memoizedProps=i.pendingProps,s===null?Cf(i):Le=s}function Il(i,s,l,c){Oi=Wa=null,Pg(s),hl=null,gc=0;var f=s.return;try{if(Ix(i,f,s,l,He)){Rt=1,yf(i,hr(l,i.current)),Le=null;return}}catch(g){if(f!==null)throw Le=f,g;Rt=1,yf(i,hr(l,i.current)),Le=null;return}s.flags&32768?(Qe||c===1?i=!0:Tl||(He&536870912)!==0?i=!1:(Bi=i=!0,(c===2||c===3||c===6)&&(c=pr.current,c!==null&&c.tag===13&&(c.flags|=16384))),U0(s,i)):Cf(s)}function Cf(i){var s=i;do{if((s.flags&32768)!==0){U0(s,Bi);return}i=s.return;var l=Dx(s.alternate,s,zi);if(l!==null){Le=l;return}if(s=s.sibling,s!==null){Le=s;return}Le=s=i}while(s!==null);Rt===0&&(Rt=5)}function U0(i,s){do{var l=xx(i.alternate,i);if(l!==null){l.flags&=32767,Le=l;return}if(l=i.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!s&&(i=i.sibling,i!==null)){Le=i;return}Le=i=l}while(i!==null);Rt=6,Le=null}function B0(i,s,l,c,f,g,T,b,C,L){var J=A.T,ne=fe.p;try{fe.p=2,A.T=null,Lx(i,s,l,c,ne,f,g,T,b,C,L)}finally{A.T=J,fe.p=ne}}function Lx(i,s,l,c,f,g,T,b){do Al();while(eo!==null);if((vt&6)!==0)throw Error(r(327));var C=i.finishedWork;if(c=i.finishedLanes,C===null)return null;if(i.finishedWork=null,i.finishedLanes=0,C===i.current)throw Error(r(177));i.callbackNode=null,i.callbackPriority=0,i.cancelPendingCommit=null;var L=C.lanes|C.childLanes;if(L|=gg,Dd(i,c,L,g,T,b),i===at&&(Le=at=null,He=0),(C.subtreeFlags&10256)===0&&(C.flags&10256)===0||Sf||(Sf=!0,Ty=L,wy=l,Fx(_i,function(){return Al(),null})),l=(C.flags&15990)!==0,(C.subtreeFlags&15990)!==0||l?(l=A.T,A.T=null,g=fe.p,fe.p=2,T=vt,vt|=4,Sx(i,C),v0(C,i),ox(By,i.containerInfo),zf=!!Uy,By=Uy=null,i.current=C,m0(i,C.alternate,C),qu(),vt=T,fe.p=g,A.T=l):i.current=C,Sf?(Sf=!1,eo=i,kc=c):z0(i,L),L=i.pendingLanes,L===0&&(Ls=null),Gu(C.stateNode),Yr(i),s!==null)for(f=i.onRecoverableError,C=0;C<s.length;C++)L=s[C],f(L.value,{componentStack:L.stack});return(kc&3)!==0&&Al(),L=i.pendingLanes,(c&4194218)!==0&&(L&42)!==0?i===by?Vc++:(Vc=0,by=i):Vc=0,Mc(0),null}function z0(i,s){(i.pooledCacheLanes&=s)===0&&(s=i.pooledCache,s!=null&&(i.pooledCache=null,_c(s)))}function Al(){if(eo!==null){var i=eo,s=Ty;Ty=0;var l=xd(kc),c=A.T,f=fe.p;try{if(fe.p=32>l?32:l,A.T=null,eo===null)var g=!1;else{l=wy,wy=null;var T=eo,b=kc;if(eo=null,kc=0,(vt&6)!==0)throw Error(r(331));var C=vt;if(vt|=4,I0(T.current),T0(T,T.current,b,l),vt=C,Mc(0,!1),En&&typeof En.onPostCommitFiberRoot=="function")try{En.onPostCommitFiberRoot(ls,T)}catch{}g=!0}return g}finally{fe.p=f,A.T=c,z0(i,s)}}return!1}function F0(i,s,l){s=hr(l,s),s=Gg(i.stateNode,s,2),i=Ps(i,s,2),i!==null&&(Ot(i,2),Yr(i))}function st(i,s,l){if(i.tag===3)F0(i,i,l);else for(;s!==null;){if(s.tag===3){F0(s,i,l);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Ls===null||!Ls.has(c))){i=hr(l,i),l=Hw(2),c=Ps(s,l,2),c!==null&&(Gw(l,c,s,i),Ot(c,2),Yr(c));break}}s=s.return}}function Cy(i,s,l){var c=i.pingCache;if(c===null){c=i.pingCache=new Nx;var f=new Set;c.set(s,f)}else f=c.get(s),f===void 0&&(f=new Set,c.set(s,f));f.has(l)||(yy=!0,f.add(l),i=Ux.bind(null,i,s,l),s.then(i,i))}function Ux(i,s,l){var c=i.pingCache;c!==null&&c.delete(s),i.pingedLanes|=i.suspendedLanes&l,i.warmLanes&=~l,at===i&&(He&l)===l&&(Rt===4||Rt===3&&(He&62914560)===He&&300>Ln()-Ey?(vt&2)===0&&bl(i,0):_y|=l,wl===He&&(wl=0)),Yr(i)}function j0(i,s){s===0&&(s=hs()),i=bs(i,s),i!==null&&(Ot(i,s),Yr(i))}function Bx(i){var s=i.memoizedState,l=0;s!==null&&(l=s.retryLane),j0(i,l)}function zx(i,s){var l=0;switch(i.tag){case 13:var c=i.stateNode,f=i.memoizedState;f!==null&&(l=f.retryLane);break;case 19:c=i.stateNode;break;case 22:c=i.stateNode._retryCache;break;default:throw Error(r(314))}c!==null&&c.delete(s),j0(i,l)}function Fx(i,s){return Ia(i,s)}var Df=null,Sl=null,Dy=!1,xf=!1,xy=!1,to=0;function Yr(i){i!==Sl&&i.next===null&&(Sl===null?Df=Sl=i:Sl=Sl.next=i),xf=!0,Dy||(Dy=!0,qx(jx))}function Mc(i,s){if(!xy&&xf){xy=!0;do for(var l=!1,c=Df;c!==null;){if(i!==0){var f=c.pendingLanes;if(f===0)var g=0;else{var T=c.suspendedLanes,b=c.pingedLanes;g=(1<<31-Rn(42|i)+1)-1,g&=f&~(T&~b),g=g&201326677?g&201326677|1:g?g|2:0}g!==0&&(l=!0,G0(c,g))}else g=He,g=ir(c,c===at?g:0),(g&3)===0||cs(c,g)||(l=!0,G0(c,g));c=c.next}while(l);xy=!1}}function jx(){xf=Dy=!1;var i=0;to!==0&&(Xx()&&(i=to),to=0);for(var s=Ln(),l=null,c=Df;c!==null;){var f=c.next,g=q0(c,s);g===0?(c.next=null,l===null?Df=f:l.next=f,f===null&&(Sl=l)):(l=c,(i!==0||(g&3)!==0)&&(xf=!0)),c=f}Mc(i)}function q0(i,s){for(var l=i.suspendedLanes,c=i.pingedLanes,f=i.expirationTimes,g=i.pendingLanes&-62914561;0<g;){var T=31-Rn(g),b=1<<T,C=f[T];C===-1?((b&l)===0||(b&c)!==0)&&(f[T]=Ho(b,s)):C<=s&&(i.expiredLanes|=b),g&=~b}if(s=at,l=He,l=ir(i,i===s?l:0),c=i.callbackNode,l===0||i===s&&ot===2||i.cancelPendingCommit!==null)return c!==null&&c!==null&&qo(c),i.callbackNode=null,i.callbackPriority=0;if((l&3)===0||cs(i,l)){if(s=l&-l,s===i.callbackPriority)return s;switch(c!==null&&qo(c),xd(l)){case 2:case 8:l=en;break;case 32:l=_i;break;case 268435456:l=Hu;break;default:l=_i}return c=H0.bind(null,i),l=Ia(l,c),i.callbackPriority=s,i.callbackNode=l,s}return c!==null&&c!==null&&qo(c),i.callbackPriority=2,i.callbackNode=null,2}function H0(i,s){var l=i.callbackNode;if(Al()&&i.callbackNode!==l)return null;var c=He;return c=ir(i,i===at?c:0),c===0?null:(P0(i,c,s),q0(i,Ln()),i.callbackNode!=null&&i.callbackNode===l?H0.bind(null,i):null)}function G0(i,s){if(Al())return null;P0(i,s,!0)}function qx(i){Jx(function(){(vt&6)!==0?Ia(Gt,i):i()})}function Py(){return to===0&&(to=Ku()),to}function $0(i){return i==null||typeof i=="symbol"||typeof i=="boolean"?null:typeof i=="function"?i:Br(""+i)}function K0(i,s){var l=s.ownerDocument.createElement("input");return l.name=s.name,l.value=s.value,i.id&&l.setAttribute("form",i.id),s.parentNode.insertBefore(l,s),i=new FormData(i),l.parentNode.removeChild(l),i}function Hx(i,s,l,c,f){if(s==="submit"&&l&&l.stateNode===f){var g=$0((f[$t]||null).action),T=c.submitter;T&&(s=(s=T[$t]||null)?$0(s.formAction):T.getAttribute("formAction"),s!==null&&(g=s,T=null));var b=new Xo("action","action",null,c,f);i.push({event:b,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(to!==0){var C=T?K0(f,T):new FormData(f);zg(l,{pending:!0,data:C,method:f.method,action:g},null,C)}}else typeof g=="function"&&(b.preventDefault(),C=T?K0(f,T):new FormData(f),zg(l,{pending:!0,data:C,method:f.method,action:g},g,C))},currentTarget:f}]})}}for(var Ny=0;Ny<BT.length;Ny++){var Oy=BT[Ny],Gx=Oy.toLowerCase(),$x=Oy[0].toUpperCase()+Oy.slice(1);Sr(Gx,"on"+$x)}Sr(kT,"onAnimationEnd"),Sr(VT,"onAnimationIteration"),Sr(MT,"onAnimationStart"),Sr("dblclick","onDoubleClick"),Sr("focusin","onFocus"),Sr("focusout","onBlur"),Sr(ux,"onTransitionRun"),Sr(cx,"onTransitionStart"),Sr(hx,"onTransitionCancel"),Sr(LT,"onTransitionEnd"),Un("onMouseEnter",["mouseout","mouseover"]),Un("onMouseLeave",["mouseout","mouseover"]),Un("onPointerEnter",["pointerout","pointerover"]),Un("onPointerLeave",["pointerout","pointerover"]),Gn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Gn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Gn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Gn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Gn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Gn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Lc));function Q0(i,s){s=(s&4)!==0;for(var l=0;l<i.length;l++){var c=i[l],f=c.event;c=c.listeners;e:{var g=void 0;if(s)for(var T=c.length-1;0<=T;T--){var b=c[T],C=b.instance,L=b.currentTarget;if(b=b.listener,C!==g&&f.isPropagationStopped())break e;g=b,f.currentTarget=L;try{g(f)}catch(J){gf(J)}f.currentTarget=null,g=C}else for(T=0;T<c.length;T++){if(b=c[T],C=b.instance,L=b.currentTarget,b=b.listener,C!==g&&f.isPropagationStopped())break e;g=b,f.currentTarget=L;try{g(f)}catch(J){gf(J)}f.currentTarget=null,g=C}}}}function Fe(i,s){var l=s[Sa];l===void 0&&(l=s[Sa]=new Set);var c=i+"__bubble";l.has(c)||(W0(s,i,2,!1),l.add(c))}function ky(i,s,l){var c=0;s&&(c|=4),W0(l,i,c,s)}var Pf="_reactListening"+Math.random().toString(36).slice(2);function Vy(i){if(!i[Pf]){i[Pf]=!0,Wu.forEach(function(l){l!=="selectionchange"&&(Kx.has(l)||ky(l,!1,i),ky(l,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[Pf]||(s[Pf]=!0,ky("selectionchange",!1,s))}}function W0(i,s,l,c){switch(_b(s)){case 2:var f=vP;break;case 8:f=EP;break;default:f=Qy}l=f.bind(null,s,l,i),f=void 0,!lr||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),c?f!==void 0?i.addEventListener(s,l,{capture:!0,passive:f}):i.addEventListener(s,l,!0):f!==void 0?i.addEventListener(s,l,{passive:f}):i.addEventListener(s,l,!1)}function My(i,s,l,c,f){var g=c;if((s&1)===0&&(s&2)===0&&c!==null)e:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var b=c.stateNode.containerInfo;if(b===f||b.nodeType===8&&b.parentNode===f)break;if(T===4)for(T=c.return;T!==null;){var C=T.tag;if((C===3||C===4)&&(C=T.stateNode.containerInfo,C===f||C.nodeType===8&&C.parentNode===f))return;T=T.return}for(;b!==null;){if(T=Ar(b),T===null)return;if(C=T.tag,C===5||C===6||C===26||C===27){c=g=T;continue e}b=b.parentNode}}c=c.return}Vd(function(){var L=g,J=Yo(l),ne=[];e:{var G=UT.get(i);if(G!==void 0){var Z=Xo,ve=i;switch(i){case"keypress":if(Fr(l)===0)break e;case"keydown":case"keyup":Z=rl;break;case"focusin":ve="focus",Z=el;break;case"focusout":ve="blur",Z=el;break;case"beforeblur":case"afterblur":Z=el;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Z=ur;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Z=lg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Z=qd;break;case kT:case VT:case MT:Z=tl;break;case LT:Z=Gd;break;case"scroll":case"scrollend":Z=Md;break;case"wheel":Z=il;break;case"copy":case"cut":case"paste":Z=nl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Z=oc;break;case"toggle":case"beforetoggle":Z=Kd}var De=(s&4)!==0,Ct=!De&&(i==="scroll"||i==="scrollend"),B=De?G!==null?G+"Capture":null:G;De=[];for(var k=L,q;k!==null;){var ee=k;if(q=ee.stateNode,ee=ee.tag,ee!==5&&ee!==26&&ee!==27||q===null||B===null||(ee=Pa(k,B),ee!=null&&De.push(Uc(k,ee,q))),Ct)break;k=k.return}0<De.length&&(G=new Z(G,ve,null,l,J),ne.push({event:G,listeners:De}))}}if((s&7)===0){e:{if(G=i==="mouseover"||i==="pointerover",Z=i==="mouseout"||i==="pointerout",G&&l!==or&&(ve=l.relatedTarget||l.fromElement)&&(Ar(ve)||ve[vi]))break e;if((Z||G)&&(G=J.window===J?J:(G=J.ownerDocument)?G.defaultView||G.parentWindow:window,Z?(ve=l.relatedTarget||l.toElement,Z=L,ve=ve?Ar(ve):null,ve!==null&&(Ct=Te(ve),De=ve.tag,ve!==Ct||De!==5&&De!==27&&De!==6)&&(ve=null)):(Z=null,ve=L),Z!==ve)){if(De=ur,ee="onMouseLeave",B="onMouseEnter",k="mouse",(i==="pointerout"||i==="pointerover")&&(De=oc,ee="onPointerLeave",B="onPointerEnter",k="pointer"),Ct=Z==null?G:gs(Z),q=ve==null?G:gs(ve),G=new De(ee,k+"leave",Z,l,J),G.target=Ct,G.relatedTarget=q,ee=null,Ar(J)===L&&(De=new De(B,k+"enter",ve,l,J),De.target=q,De.relatedTarget=Ct,ee=De),Ct=ee,Z&&ve)t:{for(De=Z,B=ve,k=0,q=De;q;q=Rl(q))k++;for(q=0,ee=B;ee;ee=Rl(ee))q++;for(;0<k-q;)De=Rl(De),k--;for(;0<q-k;)B=Rl(B),q--;for(;k--;){if(De===B||B!==null&&De===B.alternate)break t;De=Rl(De),B=Rl(B)}De=null}else De=null;Z!==null&&Y0(ne,G,Z,De,!1),ve!==null&&Ct!==null&&Y0(ne,Ct,ve,De,!0)}}e:{if(G=L?gs(L):window,Z=G.nodeName&&G.nodeName.toLowerCase(),Z==="select"||Z==="input"&&G.type==="file")var ye=bT;else if(Qt(G))if(IT)ye=sx;else{ye=rx;var Me=nx}else Z=G.nodeName,!Z||Z.toLowerCase()!=="input"||G.type!=="checkbox"&&G.type!=="radio"?L&&ec(L.elementType)&&(ye=bT):ye=ix;if(ye&&(ye=ye(i,L))){Ri(ne,ye,l,J);break e}Me&&Me(i,G,L),i==="focusout"&&L&&G.type==="number"&&L.memoizedProps.value!=null&&Wo(G,"number",G.value)}switch(Me=L?gs(L):window,i){case"focusin":(Qt(Me)||Me.contentEditable==="true")&&(sl=Me,fg=L,cc=null);break;case"focusout":cc=fg=sl=null;break;case"mousedown":pg=!0;break;case"contextmenu":case"mouseup":case"dragend":pg=!1,NT(ne,l,J);break;case"selectionchange":if(lx)break;case"keydown":case"keyup":NT(ne,l,J)}var we;if(Hr)e:{switch(i){case"compositionstart":var Ae="onCompositionStart";break e;case"compositionend":Ae="onCompositionEnd";break e;case"compositionupdate":Ae="onCompositionUpdate";break e}Ae=void 0}else je?W(i,l)&&(Ae="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(Ae="onCompositionStart");Ae&&(E&&l.locale!=="ko"&&(je||Ae!=="onCompositionStart"?Ae==="onCompositionEnd"&&je&&(we=nc()):(zr=J,ws="value"in zr?zr.value:zr.textContent,je=!0)),Me=Nf(L,Ae),0<Me.length&&(Ae=new sc(Ae,i,null,l,J),ne.push({event:Ae,listeners:Me}),we?Ae.data=we:(we=ue(l),we!==null&&(Ae.data=we)))),(we=y?Kt(i,l):qe(i,l))&&(Ae=Nf(L,"onBeforeInput"),0<Ae.length&&(Me=new sc("onBeforeInput","beforeinput",null,l,J),ne.push({event:Me,listeners:Ae}),Me.data=we)),Hx(ne,i,L,l,J)}Q0(ne,s)})}function Uc(i,s,l){return{instance:i,listener:s,currentTarget:l}}function Nf(i,s){for(var l=s+"Capture",c=[];i!==null;){var f=i,g=f.stateNode;f=f.tag,f!==5&&f!==26&&f!==27||g===null||(f=Pa(i,l),f!=null&&c.unshift(Uc(i,f,g)),f=Pa(i,s),f!=null&&c.push(Uc(i,f,g))),i=i.return}return c}function Rl(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5&&i.tag!==27);return i||null}function Y0(i,s,l,c,f){for(var g=s._reactName,T=[];l!==null&&l!==c;){var b=l,C=b.alternate,L=b.stateNode;if(b=b.tag,C!==null&&C===c)break;b!==5&&b!==26&&b!==27||L===null||(C=L,f?(L=Pa(l,g),L!=null&&T.unshift(Uc(l,L,C))):f||(L=Pa(l,g),L!=null&&T.push(Uc(l,L,C)))),l=l.return}T.length!==0&&i.push({event:s,listeners:T})}var Qx=/\r\n?/g,Wx=/\u0000|\uFFFD/g;function X0(i){return(typeof i=="string"?i:""+i).replace(Qx,`
`).replace(Wx,"")}function Z0(i,s){return s=X0(s),X0(i)===s}function Of(){}function it(i,s,l,c,f,g){switch(l){case"children":typeof c=="string"?s==="body"||s==="textarea"&&c===""||ar(i,c):(typeof c=="number"||typeof c=="bigint")&&s!=="body"&&ar(i,""+c);break;case"className":vs(i,"class",c);break;case"tabIndex":vs(i,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":vs(i,l,c);break;case"style":kd(i,c,g);break;case"data":if(s!=="object"){vs(i,"data",c);break}case"src":case"href":if(c===""&&(s!=="a"||l!=="href")){i.removeAttribute(l);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){i.removeAttribute(l);break}c=Br(""+c),i.setAttribute(l,c);break;case"action":case"formAction":if(typeof c=="function"){i.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof g=="function"&&(l==="formAction"?(s!=="input"&&it(i,s,"name",f.name,f,null),it(i,s,"formEncType",f.formEncType,f,null),it(i,s,"formMethod",f.formMethod,f,null),it(i,s,"formTarget",f.formTarget,f,null)):(it(i,s,"encType",f.encType,f,null),it(i,s,"method",f.method,f,null),it(i,s,"target",f.target,f,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){i.removeAttribute(l);break}c=Br(""+c),i.setAttribute(l,c);break;case"onClick":c!=null&&(i.onclick=Of);break;case"onScroll":c!=null&&Fe("scroll",i);break;case"onScrollEnd":c!=null&&Fe("scrollend",i);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(r(61));if(l=c.__html,l!=null){if(f.children!=null)throw Error(r(60));i.innerHTML=l}}break;case"multiple":i.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":i.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){i.removeAttribute("xlink:href");break}l=Br(""+c),i.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?i.setAttribute(l,""+c):i.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?i.setAttribute(l,""):i.removeAttribute(l);break;case"capture":case"download":c===!0?i.setAttribute(l,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?i.setAttribute(l,c):i.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?i.setAttribute(l,c):i.removeAttribute(l);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?i.removeAttribute(l):i.setAttribute(l,c);break;case"popover":Fe("beforetoggle",i),Fe("toggle",i),_s(i,"popover",c);break;case"xlinkActuate":sr(i,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":sr(i,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":sr(i,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":sr(i,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":sr(i,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":sr(i,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":sr(i,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":sr(i,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":sr(i,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":_s(i,"is",c);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=ag.get(l)||l,_s(i,l,c))}}function Ly(i,s,l,c,f,g){switch(l){case"style":kd(i,c,g);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(r(61));if(l=c.__html,l!=null){if(f.children!=null)throw Error(r(60));i.innerHTML=l}}break;case"children":typeof c=="string"?ar(i,c):(typeof c=="number"||typeof c=="bigint")&&ar(i,""+c);break;case"onScroll":c!=null&&Fe("scroll",i);break;case"onScrollEnd":c!=null&&Fe("scrollend",i);break;case"onClick":c!=null&&(i.onclick=Of);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ko.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(f=l.endsWith("Capture"),s=l.slice(2,f?l.length-7:void 0),g=i[$t]||null,g=g!=null?g[l]:null,typeof g=="function"&&i.removeEventListener(s,g,f),typeof c=="function")){typeof g!="function"&&g!==null&&(l in i?i[l]=null:i.hasAttribute(l)&&i.removeAttribute(l)),i.addEventListener(s,c,f);break e}l in i?i[l]=c:c===!0?i.setAttribute(l,""):_s(i,l,c)}}}function mn(i,s,l){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Fe("error",i),Fe("load",i);var c=!1,f=!1,g;for(g in l)if(l.hasOwnProperty(g)){var T=l[g];if(T!=null)switch(g){case"src":c=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,s));default:it(i,s,g,T,l,null)}}f&&it(i,s,"srcSet",l.srcSet,l,null),c&&it(i,s,"src",l.src,l,null);return;case"input":Fe("invalid",i);var b=g=T=f=null,C=null,L=null;for(c in l)if(l.hasOwnProperty(c)){var J=l[c];if(J!=null)switch(c){case"name":f=J;break;case"type":T=J;break;case"checked":C=J;break;case"defaultChecked":L=J;break;case"value":g=J;break;case"defaultValue":b=J;break;case"children":case"dangerouslySetInnerHTML":if(J!=null)throw Error(r(137,s));break;default:it(i,s,c,J,l,null)}}Da(i,g,b,C,L,T,f,!1),Ca(i);return;case"select":Fe("invalid",i),c=T=g=null;for(f in l)if(l.hasOwnProperty(f)&&(b=l[f],b!=null))switch(f){case"value":g=b;break;case"defaultValue":T=b;break;case"multiple":c=b;default:it(i,s,f,b,l,null)}s=g,l=T,i.multiple=!!c,s!=null?Ke(i,!!c,s,!1):l!=null&&Ke(i,!!c,l,!0);return;case"textarea":Fe("invalid",i),g=f=c=null;for(T in l)if(l.hasOwnProperty(T)&&(b=l[T],b!=null))switch(T){case"value":c=b;break;case"defaultValue":f=b;break;case"children":g=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(r(91));break;default:it(i,s,T,b,l,null)}Ts(i,c,f,g),Ca(i);return;case"option":for(C in l)if(l.hasOwnProperty(C)&&(c=l[C],c!=null))switch(C){case"selected":i.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:it(i,s,C,c,l,null)}return;case"dialog":Fe("cancel",i),Fe("close",i);break;case"iframe":case"object":Fe("load",i);break;case"video":case"audio":for(c=0;c<Lc.length;c++)Fe(Lc[c],i);break;case"image":Fe("error",i),Fe("load",i);break;case"details":Fe("toggle",i);break;case"embed":case"source":case"link":Fe("error",i),Fe("load",i);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(L in l)if(l.hasOwnProperty(L)&&(c=l[L],c!=null))switch(L){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,s));default:it(i,s,L,c,l,null)}return;default:if(ec(s)){for(J in l)l.hasOwnProperty(J)&&(c=l[J],c!==void 0&&Ly(i,s,J,c,l,void 0));return}}for(b in l)l.hasOwnProperty(b)&&(c=l[b],c!=null&&it(i,s,b,c,l,null))}function Yx(i,s,l,c){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,g=null,T=null,b=null,C=null,L=null,J=null;for(Z in l){var ne=l[Z];if(l.hasOwnProperty(Z)&&ne!=null)switch(Z){case"checked":break;case"value":break;case"defaultValue":C=ne;default:c.hasOwnProperty(Z)||it(i,s,Z,null,c,ne)}}for(var G in c){var Z=c[G];if(ne=l[G],c.hasOwnProperty(G)&&(Z!=null||ne!=null))switch(G){case"type":g=Z;break;case"name":f=Z;break;case"checked":L=Z;break;case"defaultChecked":J=Z;break;case"value":T=Z;break;case"defaultValue":b=Z;break;case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(r(137,s));break;default:Z!==ne&&it(i,s,G,Z,c,ne)}}Es(i,T,b,C,L,J,g,f);return;case"select":Z=T=b=G=null;for(g in l)if(C=l[g],l.hasOwnProperty(g)&&C!=null)switch(g){case"value":break;case"multiple":Z=C;default:c.hasOwnProperty(g)||it(i,s,g,null,c,C)}for(f in c)if(g=c[f],C=l[f],c.hasOwnProperty(f)&&(g!=null||C!=null))switch(f){case"value":G=g;break;case"defaultValue":b=g;break;case"multiple":T=g;default:g!==C&&it(i,s,f,g,c,C)}s=b,l=T,c=Z,G!=null?Ke(i,!!l,G,!1):!!c!=!!l&&(s!=null?Ke(i,!!l,s,!0):Ke(i,!!l,l?[]:"",!1));return;case"textarea":Z=G=null;for(b in l)if(f=l[b],l.hasOwnProperty(b)&&f!=null&&!c.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:it(i,s,b,null,c,f)}for(T in c)if(f=c[T],g=l[T],c.hasOwnProperty(T)&&(f!=null||g!=null))switch(T){case"value":G=f;break;case"defaultValue":Z=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:f!==g&&it(i,s,T,f,c,g)}xa(i,G,Z);return;case"option":for(var ve in l)if(G=l[ve],l.hasOwnProperty(ve)&&G!=null&&!c.hasOwnProperty(ve))switch(ve){case"selected":i.selected=!1;break;default:it(i,s,ve,null,c,G)}for(C in c)if(G=c[C],Z=l[C],c.hasOwnProperty(C)&&G!==Z&&(G!=null||Z!=null))switch(C){case"selected":i.selected=G&&typeof G!="function"&&typeof G!="symbol";break;default:it(i,s,C,G,c,Z)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var De in l)G=l[De],l.hasOwnProperty(De)&&G!=null&&!c.hasOwnProperty(De)&&it(i,s,De,null,c,G);for(L in c)if(G=c[L],Z=l[L],c.hasOwnProperty(L)&&G!==Z&&(G!=null||Z!=null))switch(L){case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(r(137,s));break;default:it(i,s,L,G,c,Z)}return;default:if(ec(s)){for(var Ct in l)G=l[Ct],l.hasOwnProperty(Ct)&&G!==void 0&&!c.hasOwnProperty(Ct)&&Ly(i,s,Ct,void 0,c,G);for(J in c)G=c[J],Z=l[J],!c.hasOwnProperty(J)||G===Z||G===void 0&&Z===void 0||Ly(i,s,J,G,c,Z);return}}for(var B in l)G=l[B],l.hasOwnProperty(B)&&G!=null&&!c.hasOwnProperty(B)&&it(i,s,B,null,c,G);for(ne in c)G=c[ne],Z=l[ne],!c.hasOwnProperty(ne)||G===Z||G==null&&Z==null||it(i,s,ne,G,c,Z)}var Uy=null,By=null;function kf(i){return i.nodeType===9?i:i.ownerDocument}function J0(i){switch(i){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function eb(i,s){if(i===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return i===1&&s==="foreignObject"?0:i}function zy(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Fy=null;function Xx(){var i=window.event;return i&&i.type==="popstate"?i===Fy?!1:(Fy=i,!0):(Fy=null,!1)}var tb=typeof setTimeout=="function"?setTimeout:void 0,Zx=typeof clearTimeout=="function"?clearTimeout:void 0,nb=typeof Promise=="function"?Promise:void 0,Jx=typeof queueMicrotask=="function"?queueMicrotask:typeof nb<"u"?function(i){return nb.resolve(null).then(i).catch(eP)}:tb;function eP(i){setTimeout(function(){throw i})}function jy(i,s){var l=s,c=0;do{var f=l.nextSibling;if(i.removeChild(l),f&&f.nodeType===8)if(l=f.data,l==="/$"){if(c===0){i.removeChild(f),$c(s);return}c--}else l!=="$"&&l!=="$?"&&l!=="$!"||c++;l=f}while(l);$c(s)}function qy(i){var s=i.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var l=s;switch(s=s.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":qy(l),Ra(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}i.removeChild(l)}}function tP(i,s,l,c){for(;i.nodeType===1;){var f=l;if(i.nodeName.toLowerCase()!==s.toLowerCase()){if(!c&&(i.nodeName!=="INPUT"||i.type!=="hidden"))break}else if(c){if(!i[ms])switch(s){case"meta":if(!i.hasAttribute("itemprop"))break;return i;case"link":if(g=i.getAttribute("rel"),g==="stylesheet"&&i.hasAttribute("data-precedence"))break;if(g!==f.rel||i.getAttribute("href")!==(f.href==null?null:f.href)||i.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||i.getAttribute("title")!==(f.title==null?null:f.title))break;return i;case"style":if(i.hasAttribute("data-precedence"))break;return i;case"script":if(g=i.getAttribute("src"),(g!==(f.src==null?null:f.src)||i.getAttribute("type")!==(f.type==null?null:f.type)||i.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&g&&i.hasAttribute("async")&&!i.hasAttribute("itemprop"))break;return i;default:return i}}else if(s==="input"&&i.type==="hidden"){var g=f.name==null?null:""+f.name;if(f.type==="hidden"&&i.getAttribute("name")===g)return i}else return i;if(i=Dr(i.nextSibling),i===null)break}return null}function nP(i,s,l){if(s==="")return null;for(;i.nodeType!==3;)if((i.nodeType!==1||i.nodeName!=="INPUT"||i.type!=="hidden")&&!l||(i=Dr(i.nextSibling),i===null))return null;return i}function Dr(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?"||s==="F!"||s==="F")break;if(s==="/$")return null}}return i}function rb(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return i;s--}else l==="/$"&&s++}i=i.previousSibling}return null}function ib(i,s,l){switch(s=kf(l),i){case"html":if(i=s.documentElement,!i)throw Error(r(452));return i;case"head":if(i=s.head,!i)throw Error(r(453));return i;case"body":if(i=s.body,!i)throw Error(r(454));return i;default:throw Error(r(451))}}var vr=new Map,sb=new Set;function Vf(i){return typeof i.getRootNode=="function"?i.getRootNode():i.ownerDocument}var ji=fe.d;fe.d={f:rP,r:iP,D:sP,C:aP,L:oP,m:lP,X:cP,S:uP,M:hP};function rP(){var i=ji.f(),s=Rf();return i||s}function iP(i){var s=Ei(i);s!==null&&s.tag===5&&s.type==="form"?Nw(s):ji.r(i)}var Cl=typeof document>"u"?null:document;function ab(i,s,l){var c=Cl;if(c&&typeof s=="string"&&s){var f=At(s);f='link[rel="'+i+'"][href="'+f+'"]',typeof l=="string"&&(f+='[crossorigin="'+l+'"]'),sb.has(f)||(sb.add(f),i={rel:i,crossOrigin:l,href:s},c.querySelector(f)===null&&(s=c.createElement("link"),mn(s,"link",i),yt(s),c.head.appendChild(s)))}}function sP(i){ji.D(i),ab("dns-prefetch",i,null)}function aP(i,s){ji.C(i,s),ab("preconnect",i,s)}function oP(i,s,l){ji.L(i,s,l);var c=Cl;if(c&&i&&s){var f='link[rel="preload"][as="'+At(s)+'"]';s==="image"&&l&&l.imageSrcSet?(f+='[imagesrcset="'+At(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(f+='[imagesizes="'+At(l.imageSizes)+'"]')):f+='[href="'+At(i)+'"]';var g=f;switch(s){case"style":g=Dl(i);break;case"script":g=xl(i)}vr.has(g)||(i=P({rel:"preload",href:s==="image"&&l&&l.imageSrcSet?void 0:i,as:s},l),vr.set(g,i),c.querySelector(f)!==null||s==="style"&&c.querySelector(Bc(g))||s==="script"&&c.querySelector(zc(g))||(s=c.createElement("link"),mn(s,"link",i),yt(s),c.head.appendChild(s)))}}function lP(i,s){ji.m(i,s);var l=Cl;if(l&&i){var c=s&&typeof s.as=="string"?s.as:"script",f='link[rel="modulepreload"][as="'+At(c)+'"][href="'+At(i)+'"]',g=f;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":g=xl(i)}if(!vr.has(g)&&(i=P({rel:"modulepreload",href:i},s),vr.set(g,i),l.querySelector(f)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(zc(g)))return}c=l.createElement("link"),mn(c,"link",i),yt(c),l.head.appendChild(c)}}}function uP(i,s,l){ji.S(i,s,l);var c=Cl;if(c&&i){var f=ys(c).hoistableStyles,g=Dl(i);s=s||"default";var T=f.get(g);if(!T){var b={loading:0,preload:null};if(T=c.querySelector(Bc(g)))b.loading=5;else{i=P({rel:"stylesheet",href:i,"data-precedence":s},l),(l=vr.get(g))&&Hy(i,l);var C=T=c.createElement("link");yt(C),mn(C,"link",i),C._p=new Promise(function(L,J){C.onload=L,C.onerror=J}),C.addEventListener("load",function(){b.loading|=1}),C.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Mf(T,s,c)}T={type:"stylesheet",instance:T,count:1,state:b},f.set(g,T)}}}function cP(i,s){ji.X(i,s);var l=Cl;if(l&&i){var c=ys(l).hoistableScripts,f=xl(i),g=c.get(f);g||(g=l.querySelector(zc(f)),g||(i=P({src:i,async:!0},s),(s=vr.get(f))&&Gy(i,s),g=l.createElement("script"),yt(g),mn(g,"link",i),l.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},c.set(f,g))}}function hP(i,s){ji.M(i,s);var l=Cl;if(l&&i){var c=ys(l).hoistableScripts,f=xl(i),g=c.get(f);g||(g=l.querySelector(zc(f)),g||(i=P({src:i,async:!0,type:"module"},s),(s=vr.get(f))&&Gy(i,s),g=l.createElement("script"),yt(g),mn(g,"link",i),l.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},c.set(f,g))}}function ob(i,s,l,c){var f=(f=rr.current)?Vf(f):null;if(!f)throw Error(r(446));switch(i){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(s=Dl(l.href),l=ys(f).hoistableStyles,c=l.get(s),c||(c={type:"style",instance:null,count:0,state:null},l.set(s,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){i=Dl(l.href);var g=ys(f).hoistableStyles,T=g.get(i);if(T||(f=f.ownerDocument||f,T={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},g.set(i,T),(g=f.querySelector(Bc(i)))&&!g._p&&(T.instance=g,T.state.loading=5),vr.has(i)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},vr.set(i,l),g||dP(f,i,l,T.state))),s&&c===null)throw Error(r(528,""));return T}if(s&&c!==null)throw Error(r(529,""));return null;case"script":return s=l.async,l=l.src,typeof l=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=xl(l),l=ys(f).hoistableScripts,c=l.get(s),c||(c={type:"script",instance:null,count:0,state:null},l.set(s,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,i))}}function Dl(i){return'href="'+At(i)+'"'}function Bc(i){return'link[rel="stylesheet"]['+i+"]"}function lb(i){return P({},i,{"data-precedence":i.precedence,precedence:null})}function dP(i,s,l,c){i.querySelector('link[rel="preload"][as="style"]['+s+"]")?c.loading=1:(s=i.createElement("link"),c.preload=s,s.addEventListener("load",function(){return c.loading|=1}),s.addEventListener("error",function(){return c.loading|=2}),mn(s,"link",l),yt(s),i.head.appendChild(s))}function xl(i){return'[src="'+At(i)+'"]'}function zc(i){return"script[async]"+i}function ub(i,s,l){if(s.count++,s.instance===null)switch(s.type){case"style":var c=i.querySelector('style[data-href~="'+At(l.href)+'"]');if(c)return s.instance=c,yt(c),c;var f=P({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return c=(i.ownerDocument||i).createElement("style"),yt(c),mn(c,"style",f),Mf(c,l.precedence,i),s.instance=c;case"stylesheet":f=Dl(l.href);var g=i.querySelector(Bc(f));if(g)return s.state.loading|=4,s.instance=g,yt(g),g;c=lb(l),(f=vr.get(f))&&Hy(c,f),g=(i.ownerDocument||i).createElement("link"),yt(g);var T=g;return T._p=new Promise(function(b,C){T.onload=b,T.onerror=C}),mn(g,"link",c),s.state.loading|=4,Mf(g,l.precedence,i),s.instance=g;case"script":return g=xl(l.src),(f=i.querySelector(zc(g)))?(s.instance=f,yt(f),f):(c=l,(f=vr.get(g))&&(c=P({},l),Gy(c,f)),i=i.ownerDocument||i,f=i.createElement("script"),yt(f),mn(f,"link",c),i.head.appendChild(f),s.instance=f);case"void":return null;default:throw Error(r(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(c=s.instance,s.state.loading|=4,Mf(c,l.precedence,i));return s.instance}function Mf(i,s,l){for(var c=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=c.length?c[c.length-1]:null,g=f,T=0;T<c.length;T++){var b=c[T];if(b.dataset.precedence===s)g=b;else if(g!==f)break}g?g.parentNode.insertBefore(i,g.nextSibling):(s=l.nodeType===9?l.head:l,s.insertBefore(i,s.firstChild))}function Hy(i,s){i.crossOrigin==null&&(i.crossOrigin=s.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=s.referrerPolicy),i.title==null&&(i.title=s.title)}function Gy(i,s){i.crossOrigin==null&&(i.crossOrigin=s.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=s.referrerPolicy),i.integrity==null&&(i.integrity=s.integrity)}var Lf=null;function cb(i,s,l){if(Lf===null){var c=new Map,f=Lf=new Map;f.set(l,c)}else f=Lf,c=f.get(l),c||(c=new Map,f.set(l,c));if(c.has(i))return c;for(c.set(i,null),l=l.getElementsByTagName(i),f=0;f<l.length;f++){var g=l[f];if(!(g[ms]||g[tn]||i==="link"&&g.getAttribute("rel")==="stylesheet")&&g.namespaceURI!=="http://www.w3.org/2000/svg"){var T=g.getAttribute(s)||"";T=i+T;var b=c.get(T);b?b.push(g):c.set(T,[g])}}return c}function hb(i,s,l){i=i.ownerDocument||i,i.head.insertBefore(l,s==="title"?i.querySelector("head > title"):null)}function fP(i,s,l){if(l===1||s.itemProp!=null)return!1;switch(i){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return i=s.disabled,typeof s.precedence=="string"&&i==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function db(i){return!(i.type==="stylesheet"&&(i.state.loading&3)===0)}var Fc=null;function pP(){}function mP(i,s,l){if(Fc===null)throw Error(r(475));var c=Fc;if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=Dl(l.href),g=i.querySelector(Bc(f));if(g){i=g._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(c.count++,c=Uf.bind(c),i.then(c,c)),s.state.loading|=4,s.instance=g,yt(g);return}g=i.ownerDocument||i,l=lb(l),(f=vr.get(f))&&Hy(l,f),g=g.createElement("link"),yt(g);var T=g;T._p=new Promise(function(b,C){T.onload=b,T.onerror=C}),mn(g,"link",l),s.instance=g}c.stylesheets===null&&(c.stylesheets=new Map),c.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(c.count++,s=Uf.bind(c),i.addEventListener("load",s),i.addEventListener("error",s))}}function gP(){if(Fc===null)throw Error(r(475));var i=Fc;return i.stylesheets&&i.count===0&&$y(i,i.stylesheets),0<i.count?function(s){var l=setTimeout(function(){if(i.stylesheets&&$y(i,i.stylesheets),i.unsuspend){var c=i.unsuspend;i.unsuspend=null,c()}},6e4);return i.unsuspend=s,function(){i.unsuspend=null,clearTimeout(l)}}:null}function Uf(){if(this.count--,this.count===0){if(this.stylesheets)$y(this,this.stylesheets);else if(this.unsuspend){var i=this.unsuspend;this.unsuspend=null,i()}}}var Bf=null;function $y(i,s){i.stylesheets=null,i.unsuspend!==null&&(i.count++,Bf=new Map,s.forEach(yP,i),Bf=null,Uf.call(i))}function yP(i,s){if(!(s.state.loading&4)){var l=Bf.get(i);if(l)var c=l.get(null);else{l=new Map,Bf.set(i,l);for(var f=i.querySelectorAll("link[data-precedence],style[data-precedence]"),g=0;g<f.length;g++){var T=f[g];(T.nodeName==="LINK"||T.getAttribute("media")!=="not all")&&(l.set(T.dataset.precedence,T),c=T)}c&&l.set(null,c)}f=s.instance,T=f.getAttribute("data-precedence"),g=l.get(T)||c,g===c&&l.set(null,f),l.set(T,f),this.count++,c=Uf.bind(this),f.addEventListener("load",c),f.addEventListener("error",c),g?g.parentNode.insertBefore(f,g.nextSibling):(i=i.nodeType===9?i.head:i,i.insertBefore(f,i.firstChild)),s.state.loading|=4}}var jc={$$typeof:S,Provider:null,Consumer:null,_currentValue:Ce,_currentValue2:Ce,_threadCount:0};function _P(i,s,l,c,f,g,T,b){this.tag=1,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Go(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Go(0),this.hiddenUpdates=Go(null),this.identifierPrefix=c,this.onUncaughtError=f,this.onCaughtError=g,this.onRecoverableError=T,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function fb(i,s,l,c,f,g,T,b,C,L,J,ne){return i=new _P(i,s,l,T,b,C,L,ne),s=1,g===!0&&(s|=24),g=yr(3,null,null,s),i.current=g,g.stateNode=i,s=Ig(),s.refCount++,i.pooledCache=s,s.refCount++,g.memoizedState={element:c,isDehydrated:l,cache:s},iy(g),i}function pb(i){return i?(i=ll,i):ll}function mb(i,s,l,c,f,g){f=pb(f),c.context===null?c.context=f:c.pendingContext=f,c=xs(s),c.payload={element:l},g=g===void 0?null:g,g!==null&&(c.callback=g),l=Ps(i,c,s),l!==null&&(Pn(l,i,s),Ac(l,i,s))}function gb(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<s?l:s}}function Ky(i,s){gb(i,s),(i=i.alternate)&&gb(i,s)}function yb(i){if(i.tag===13){var s=bs(i,67108864);s!==null&&Pn(s,i,67108864),Ky(i,67108864)}}var zf=!0;function vP(i,s,l,c){var f=A.T;A.T=null;var g=fe.p;try{fe.p=2,Qy(i,s,l,c)}finally{fe.p=g,A.T=f}}function EP(i,s,l,c){var f=A.T;A.T=null;var g=fe.p;try{fe.p=8,Qy(i,s,l,c)}finally{fe.p=g,A.T=f}}function Qy(i,s,l,c){if(zf){var f=Wy(c);if(f===null)My(i,s,c,Ff,l),vb(i,c);else if(wP(f,i,s,l,c))c.stopPropagation();else if(vb(i,c),s&4&&-1<TP.indexOf(i)){for(;f!==null;){var g=Ei(f);if(g!==null)switch(g.tag){case 3:if(g=g.stateNode,g.current.memoizedState.isDehydrated){var T=Ir(g.pendingLanes);if(T!==0){var b=g;for(b.pendingLanes|=2,b.entangledLanes|=2;T;){var C=1<<31-Rn(T);b.entanglements[1]|=C,T&=~C}Yr(g),(vt&6)===0&&(If=Ln()+500,Mc(0))}}break;case 13:b=bs(g,2),b!==null&&Pn(b,g,2),Rf(),Ky(g,2)}if(g=Wy(c),g===null&&My(i,s,c,Ff,l),g===f)break;f=g}f!==null&&c.stopPropagation()}else My(i,s,c,null,l)}}function Wy(i){return i=Yo(i),Yy(i)}var Ff=null;function Yy(i){if(Ff=null,i=Ar(i),i!==null){var s=Te(i);if(s===null)i=null;else{var l=s.tag;if(l===13){if(i=Ne(s),i!==null)return i;i=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null)}}return Ff=i,null}function _b(i){switch(i){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ad()){case Gt:return 2;case en:return 8;case _i:case Sd:return 32;case Hu:return 268435456;default:return 32}default:return 32}}var Xy=!1,Us=null,Bs=null,zs=null,qc=new Map,Hc=new Map,Fs=[],TP="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function vb(i,s){switch(i){case"focusin":case"focusout":Us=null;break;case"dragenter":case"dragleave":Bs=null;break;case"mouseover":case"mouseout":zs=null;break;case"pointerover":case"pointerout":qc.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Hc.delete(s.pointerId)}}function Gc(i,s,l,c,f,g){return i===null||i.nativeEvent!==g?(i={blockedOn:s,domEventName:l,eventSystemFlags:c,nativeEvent:g,targetContainers:[f]},s!==null&&(s=Ei(s),s!==null&&yb(s)),i):(i.eventSystemFlags|=c,s=i.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),i)}function wP(i,s,l,c,f){switch(s){case"focusin":return Us=Gc(Us,i,s,l,c,f),!0;case"dragenter":return Bs=Gc(Bs,i,s,l,c,f),!0;case"mouseover":return zs=Gc(zs,i,s,l,c,f),!0;case"pointerover":var g=f.pointerId;return qc.set(g,Gc(qc.get(g)||null,i,s,l,c,f)),!0;case"gotpointercapture":return g=f.pointerId,Hc.set(g,Gc(Hc.get(g)||null,i,s,l,c,f)),!0}return!1}function Eb(i){var s=Ar(i.target);if(s!==null){var l=Te(s);if(l!==null){if(s=l.tag,s===13){if(s=Ne(l),s!==null){i.blockedOn=s,ps(i.priority,function(){if(l.tag===13){var c=Xn(),f=bs(l,c);f!==null&&Pn(f,l,c),Ky(l,c)}});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function jf(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var l=Wy(i.nativeEvent);if(l===null){l=i.nativeEvent;var c=new l.constructor(l.type,l);or=c,l.target.dispatchEvent(c),or=null}else return s=Ei(l),s!==null&&yb(s),i.blockedOn=l,!1;s.shift()}return!0}function Tb(i,s,l){jf(i)&&l.delete(s)}function bP(){Xy=!1,Us!==null&&jf(Us)&&(Us=null),Bs!==null&&jf(Bs)&&(Bs=null),zs!==null&&jf(zs)&&(zs=null),qc.forEach(Tb),Hc.forEach(Tb)}function qf(i,s){i.blockedOn===s&&(i.blockedOn=null,Xy||(Xy=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,bP)))}var Hf=null;function wb(i){Hf!==i&&(Hf=i,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Hf===i&&(Hf=null);for(var s=0;s<i.length;s+=3){var l=i[s],c=i[s+1],f=i[s+2];if(typeof c!="function"){if(Yy(c||l)===null)continue;break}var g=Ei(l);g!==null&&(i.splice(s,3),s-=3,zg(g,{pending:!0,data:f,method:l.method,action:c},c,f))}}))}function $c(i){function s(C){return qf(C,i)}Us!==null&&qf(Us,i),Bs!==null&&qf(Bs,i),zs!==null&&qf(zs,i),qc.forEach(s),Hc.forEach(s);for(var l=0;l<Fs.length;l++){var c=Fs[l];c.blockedOn===i&&(c.blockedOn=null)}for(;0<Fs.length&&(l=Fs[0],l.blockedOn===null);)Eb(l),l.blockedOn===null&&Fs.shift();if(l=(i.ownerDocument||i).$$reactFormReplay,l!=null)for(c=0;c<l.length;c+=3){var f=l[c],g=l[c+1],T=f[$t]||null;if(typeof g=="function")T||wb(l);else if(T){var b=null;if(g&&g.hasAttribute("formAction")){if(f=g,T=g[$t]||null)b=T.formAction;else if(Yy(f)!==null)continue}else b=T.action;typeof b=="function"?l[c+1]=b:(l.splice(c,3),c-=3),wb(l)}}}function Zy(i){this._internalRoot=i}Gf.prototype.render=Zy.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(r(409));var l=s.current,c=Xn();mb(l,c,i,s,null,null)},Gf.prototype.unmount=Zy.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;i.tag===0&&Al(),mb(i.current,2,null,i,null,null),Rf(),s[vi]=null}};function Gf(i){this._internalRoot=i}Gf.prototype.unstable_scheduleHydration=function(i){if(i){var s=Pd();i={blockedOn:null,target:i,priority:s};for(var l=0;l<Fs.length&&s!==0&&s<Fs[l].priority;l++);Fs.splice(l,0,i),l===0&&Eb(i)}};var bb=e.version;if(bb!=="19.0.0")throw Error(r(527,bb,"19.0.0"));fe.findDOMNode=function(i){var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(r(188)):(i=Object.keys(i).join(","),Error(r(268,i)));return i=ie(s),i=i!==null?ge(i):null,i=i===null?null:i.stateNode,i};var IP={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:A,findFiberByHostInstance:Ar,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $f=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$f.isDisabled&&$f.supportsFiber)try{ls=$f.inject(IP),En=$f}catch{}}return Qc.createRoot=function(i,s){if(!a(i))throw Error(r(299));var l=!1,c="",f=zw,g=Fw,T=jw,b=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(g=s.onCaughtError),s.onRecoverableError!==void 0&&(T=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(b=s.unstable_transitionCallbacks)),s=fb(i,1,!1,null,null,l,c,f,g,T,b,null),i[vi]=s.current,Vy(i.nodeType===8?i.parentNode:i),new Zy(s)},Qc.hydrateRoot=function(i,s,l){if(!a(i))throw Error(r(299));var c=!1,f="",g=zw,T=Fw,b=jw,C=null,L=null;return l!=null&&(l.unstable_strictMode===!0&&(c=!0),l.identifierPrefix!==void 0&&(f=l.identifierPrefix),l.onUncaughtError!==void 0&&(g=l.onUncaughtError),l.onCaughtError!==void 0&&(T=l.onCaughtError),l.onRecoverableError!==void 0&&(b=l.onRecoverableError),l.unstable_transitionCallbacks!==void 0&&(C=l.unstable_transitionCallbacks),l.formState!==void 0&&(L=l.formState)),s=fb(i,1,!0,s,l??null,c,f,g,T,b,C,L),s.context=pb(null),l=s.current,c=Xn(),f=xs(c),f.callback=null,Ps(l,f,c),s.current.lanes=c,Ot(s,c),Yr(s),i[vi]=s.current,Vy(i),new Gf(s)},Qc.version="19.0.0",Qc}var Ob;function VP(){if(Ob)return e_.exports;Ob=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),e_.exports=kP(),e_.exports}var MP=VP(),X=Sv();const Rh=SP(X);var Wc={},kb;function LP(){if(kb)return Wc;kb=1,Object.defineProperty(Wc,"__esModule",{value:!0}),Wc.parse=u,Wc.serialize=m;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,r=/^[\u0020-\u003A\u003D-\u007E]*$/,a=Object.prototype.toString,o=(()=>{const w=function(){};return w.prototype=Object.create(null),w})();function u(w,S){const x=new o,U=w.length;if(U<2)return x;const M=(S==null?void 0:S.decode)||_;let H=0;do{const $=w.indexOf("=",H);if($===-1)break;const K=w.indexOf(";",H),oe=K===-1?U:K;if($>oe){H=w.lastIndexOf(";",$-1)+1;continue}const ae=d(w,H,$),le=p(w,$,ae),D=w.slice(ae,le);if(x[D]===void 0){let R=d(w,$+1,oe),A=p(w,oe,R);const P=M(w.slice(R,A));x[D]=P}H=oe+1}while(H<U);return x}function d(w,S,x){do{const U=w.charCodeAt(S);if(U!==32&&U!==9)return S}while(++S<x);return x}function p(w,S,x){for(;S>x;){const U=w.charCodeAt(--S);if(U!==32&&U!==9)return S+1}return x}function m(w,S,x){const U=(x==null?void 0:x.encode)||encodeURIComponent;if(!n.test(w))throw new TypeError(`argument name is invalid: ${w}`);const M=U(S);if(!e.test(M))throw new TypeError(`argument val is invalid: ${S}`);let H=w+"="+M;if(!x)return H;if(x.maxAge!==void 0){if(!Number.isInteger(x.maxAge))throw new TypeError(`option maxAge is invalid: ${x.maxAge}`);H+="; Max-Age="+x.maxAge}if(x.domain){if(!t.test(x.domain))throw new TypeError(`option domain is invalid: ${x.domain}`);H+="; Domain="+x.domain}if(x.path){if(!r.test(x.path))throw new TypeError(`option path is invalid: ${x.path}`);H+="; Path="+x.path}if(x.expires){if(!v(x.expires)||!Number.isFinite(x.expires.valueOf()))throw new TypeError(`option expires is invalid: ${x.expires}`);H+="; Expires="+x.expires.toUTCString()}if(x.httpOnly&&(H+="; HttpOnly"),x.secure&&(H+="; Secure"),x.partitioned&&(H+="; Partitioned"),x.priority)switch(typeof x.priority=="string"?x.priority.toLowerCase():void 0){case"low":H+="; Priority=Low";break;case"medium":H+="; Priority=Medium";break;case"high":H+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${x.priority}`)}if(x.sameSite)switch(typeof x.sameSite=="string"?x.sameSite.toLowerCase():x.sameSite){case!0:case"strict":H+="; SameSite=Strict";break;case"lax":H+="; SameSite=Lax";break;case"none":H+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${x.sameSite}`)}return H}function _(w){if(w.indexOf("%")===-1)return w;try{return decodeURIComponent(w)}catch{return w}}function v(w){return a.call(w)==="[object Date]"}return Wc}LP();/**
 * react-router v7.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Vb="popstate";function UP(n={}){function e(r,a){let{pathname:o,search:u,hash:d}=r.location;return x_("",{pathname:o,search:u,hash:d},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function t(r,a){return typeof a=="string"?a:Ch(a)}return zP(e,t,null,n)}function Et(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function ui(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function BP(){return Math.random().toString(36).substring(2,10)}function Mb(n,e){return{usr:n.state,key:n.key,idx:e}}function x_(n,e,t=null,r){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?Su(e):e,state:t,key:e&&e.key||r||BP()}}function Ch({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function Su(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let r=n.indexOf("?");r>=0&&(e.search=n.substring(r),n=n.substring(0,r)),n&&(e.pathname=n)}return e}function zP(n,e,t,r={}){let{window:a=document.defaultView,v5Compat:o=!1}=r,u=a.history,d="POP",p=null,m=_();m==null&&(m=0,u.replaceState({...u.state,idx:m},""));function _(){return(u.state||{idx:null}).idx}function v(){d="POP";let M=_(),H=M==null?null:M-m;m=M,p&&p({action:d,location:U.location,delta:H})}function w(M,H){d="PUSH";let $=x_(U.location,M,H);m=_()+1;let K=Mb($,m),oe=U.createHref($);try{u.pushState(K,"",oe)}catch(ae){if(ae instanceof DOMException&&ae.name==="DataCloneError")throw ae;a.location.assign(oe)}o&&p&&p({action:d,location:U.location,delta:1})}function S(M,H){d="REPLACE";let $=x_(U.location,M,H);m=_();let K=Mb($,m),oe=U.createHref($);u.replaceState(K,"",oe),o&&p&&p({action:d,location:U.location,delta:0})}function x(M){let H=a.location.origin!=="null"?a.location.origin:a.location.href,$=typeof M=="string"?M:Ch(M);return $=$.replace(/ $/,"%20"),Et(H,`No window.location.(origin|href) available to create URL for href: ${$}`),new URL($,H)}let U={get action(){return d},get location(){return n(a,u)},listen(M){if(p)throw new Error("A history only accepts one active listener");return a.addEventListener(Vb,v),p=M,()=>{a.removeEventListener(Vb,v),p=null}},createHref(M){return e(a,M)},createURL:x,encodeLocation(M){let H=x(M);return{pathname:H.pathname,search:H.search,hash:H.hash}},push:w,replace:S,go(M){return u.go(M)}};return U}function uS(n,e,t="/"){return FP(n,e,t,!1)}function FP(n,e,t,r){let a=typeof e=="string"?Su(e):e,o=Qi(a.pathname||"/",t);if(o==null)return null;let u=cS(n);jP(u);let d=null;for(let p=0;d==null&&p<u.length;++p){let m=JP(o);d=XP(u[p],m,r)}return d}function cS(n,e=[],t=[],r=""){let a=(o,u,d)=>{let p={relativePath:d===void 0?o.path||"":d,caseSensitive:o.caseSensitive===!0,childrenIndex:u,route:o};p.relativePath.startsWith("/")&&(Et(p.relativePath.startsWith(r),`Absolute route path "${p.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(r.length));let m=$i([r,p.relativePath]),_=t.concat(p);o.children&&o.children.length>0&&(Et(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),cS(o.children,e,_,m)),!(o.path==null&&!o.index)&&e.push({path:m,score:WP(m,o.index),routesMeta:_})};return n.forEach((o,u)=>{var d;if(o.path===""||!((d=o.path)!=null&&d.includes("?")))a(o,u);else for(let p of hS(o.path))a(o,u,p)}),e}function hS(n){let e=n.split("/");if(e.length===0)return[];let[t,...r]=e,a=t.endsWith("?"),o=t.replace(/\?$/,"");if(r.length===0)return a?[o,""]:[o];let u=hS(r.join("/")),d=[];return d.push(...u.map(p=>p===""?o:[o,p].join("/"))),a&&d.push(...u),d.map(p=>n.startsWith("/")&&p===""?"/":p)}function jP(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:YP(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}var qP=/^:[\w-]+$/,HP=3,GP=2,$P=1,KP=10,QP=-2,Lb=n=>n==="*";function WP(n,e){let t=n.split("/"),r=t.length;return t.some(Lb)&&(r+=QP),e&&(r+=GP),t.filter(a=>!Lb(a)).reduce((a,o)=>a+(qP.test(o)?HP:o===""?$P:KP),r)}function YP(n,e){return n.length===e.length&&n.slice(0,-1).every((r,a)=>r===e[a])?n[n.length-1]-e[e.length-1]:0}function XP(n,e,t=!1){let{routesMeta:r}=n,a={},o="/",u=[];for(let d=0;d<r.length;++d){let p=r[d],m=d===r.length-1,_=o==="/"?e:e.slice(o.length)||"/",v=Rp({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},_),w=p.route;if(!v&&m&&t&&!r[r.length-1].route.index&&(v=Rp({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},_)),!v)return null;Object.assign(a,v.params),u.push({params:a,pathname:$i([o,v.pathname]),pathnameBase:rN($i([o,v.pathnameBase])),route:w}),v.pathnameBase!=="/"&&(o=$i([o,v.pathnameBase]))}return u}function Rp(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,r]=ZP(n.path,n.caseSensitive,n.end),a=e.match(t);if(!a)return null;let o=a[0],u=o.replace(/(.)\/+$/,"$1"),d=a.slice(1);return{params:r.reduce((m,{paramName:_,isOptional:v},w)=>{if(_==="*"){let x=d[w]||"";u=o.slice(0,o.length-x.length).replace(/(.)\/+$/,"$1")}const S=d[w];return v&&!S?m[_]=void 0:m[_]=(S||"").replace(/%2F/g,"/"),m},{}),pathname:o,pathnameBase:u,pattern:n}}function ZP(n,e=!1,t=!0){ui(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let r=[],a="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,d,p)=>(r.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(r.push({paramName:"*"}),a+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":n!==""&&n!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),r]}function JP(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ui(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function Qi(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=n.charAt(t);return r&&r!=="/"?null:n.slice(t)||"/"}function eN(n,e="/"){let{pathname:t,search:r="",hash:a=""}=typeof n=="string"?Su(n):n;return{pathname:t?t.startsWith("/")?t:tN(t,e):e,search:iN(r),hash:sN(a)}}function tN(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function s_(n,e,t,r){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function nN(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function dS(n){let e=nN(n);return e.map((t,r)=>r===e.length-1?t.pathname:t.pathnameBase)}function fS(n,e,t,r=!1){let a;typeof n=="string"?a=Su(n):(a={...n},Et(!a.pathname||!a.pathname.includes("?"),s_("?","pathname","search",a)),Et(!a.pathname||!a.pathname.includes("#"),s_("#","pathname","hash",a)),Et(!a.search||!a.search.includes("#"),s_("#","search","hash",a)));let o=n===""||a.pathname==="",u=o?"/":a.pathname,d;if(u==null)d=t;else{let v=e.length-1;if(!r&&u.startsWith("..")){let w=u.split("/");for(;w[0]==="..";)w.shift(),v-=1;a.pathname=w.join("/")}d=v>=0?e[v]:"/"}let p=eN(a,d),m=u&&u!=="/"&&u.endsWith("/"),_=(o||u===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(m||_)&&(p.pathname+="/"),p}var $i=n=>n.join("/").replace(/\/\/+/g,"/"),rN=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),iN=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,sN=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function aN(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var pS=["POST","PUT","PATCH","DELETE"];new Set(pS);var oN=["GET",...pS];new Set(oN);var Ru=X.createContext(null);Ru.displayName="DataRouter";var om=X.createContext(null);om.displayName="DataRouterState";var mS=X.createContext({isTransitioning:!1});mS.displayName="ViewTransition";var lN=X.createContext(new Map);lN.displayName="Fetchers";var uN=X.createContext(null);uN.displayName="Await";var mi=X.createContext(null);mi.displayName="Navigation";var ed=X.createContext(null);ed.displayName="Location";var gi=X.createContext({outlet:null,matches:[],isDataRoute:!1});gi.displayName="Route";var Rv=X.createContext(null);Rv.displayName="RouteError";function cN(n,{relative:e}={}){Et(td(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:r}=X.useContext(mi),{hash:a,pathname:o,search:u}=nd(n,{relative:e}),d=o;return t!=="/"&&(d=o==="/"?t:$i([t,o])),r.createHref({pathname:d,search:u,hash:a})}function td(){return X.useContext(ed)!=null}function ko(){return Et(td(),"useLocation() may be used only in the context of a <Router> component."),X.useContext(ed).location}var gS="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function yS(n){X.useContext(mi).static||X.useLayoutEffect(n)}function lm(){let{isDataRoute:n}=X.useContext(gi);return n?IN():hN()}function hN(){Et(td(),"useNavigate() may be used only in the context of a <Router> component.");let n=X.useContext(Ru),{basename:e,navigator:t}=X.useContext(mi),{matches:r}=X.useContext(gi),{pathname:a}=ko(),o=JSON.stringify(dS(r)),u=X.useRef(!1);return yS(()=>{u.current=!0}),X.useCallback((p,m={})=>{if(ui(u.current,gS),!u.current)return;if(typeof p=="number"){t.go(p);return}let _=fS(p,JSON.parse(o),a,m.relative==="path");n==null&&e!=="/"&&(_.pathname=_.pathname==="/"?e:$i([e,_.pathname])),(m.replace?t.replace:t.push)(_,m.state,m)},[e,t,o,a,n])}X.createContext(null);function dN(){let{matches:n}=X.useContext(gi),e=n[n.length-1];return e?e.params:{}}function nd(n,{relative:e}={}){let{matches:t}=X.useContext(gi),{pathname:r}=ko(),a=JSON.stringify(dS(t));return X.useMemo(()=>fS(n,JSON.parse(a),r,e==="path"),[n,a,r,e])}function fN(n,e){return _S(n,e)}function _S(n,e,t,r){var $;Et(td(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a,static:o}=X.useContext(mi),{matches:u}=X.useContext(gi),d=u[u.length-1],p=d?d.params:{},m=d?d.pathname:"/",_=d?d.pathnameBase:"/",v=d&&d.route;{let K=v&&v.path||"";vS(m,!v||K.endsWith("*")||K.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${K}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${K}"> to <Route path="${K==="/"?"*":`${K}/*`}">.`)}let w=ko(),S;if(e){let K=typeof e=="string"?Su(e):e;Et(_==="/"||(($=K.pathname)==null?void 0:$.startsWith(_)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${_}" but pathname "${K.pathname}" was given in the \`location\` prop.`),S=K}else S=w;let x=S.pathname||"/",U=x;if(_!=="/"){let K=_.replace(/^\//,"").split("/");U="/"+x.replace(/^\//,"").split("/").slice(K.length).join("/")}let M=!o&&t&&t.matches&&t.matches.length>0?t.matches:uS(n,{pathname:U});ui(v||M!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),ui(M==null||M[M.length-1].route.element!==void 0||M[M.length-1].route.Component!==void 0||M[M.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let H=_N(M&&M.map(K=>Object.assign({},K,{params:Object.assign({},p,K.params),pathname:$i([_,a.encodeLocation?a.encodeLocation(K.pathname).pathname:K.pathname]),pathnameBase:K.pathnameBase==="/"?_:$i([_,a.encodeLocation?a.encodeLocation(K.pathnameBase).pathname:K.pathnameBase])})),u,t,r);return e&&H?X.createElement(ed.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},H):H}function pN(){let n=bN(),e=aN(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,r="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:r},o={padding:"2px 4px",backgroundColor:r},u=null;return console.error("Error handled by React Router default ErrorBoundary:",n),u=X.createElement(X.Fragment,null,X.createElement("p",null,"💿 Hey developer 👋"),X.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",X.createElement("code",{style:o},"ErrorBoundary")," or"," ",X.createElement("code",{style:o},"errorElement")," prop on your route.")),X.createElement(X.Fragment,null,X.createElement("h2",null,"Unexpected Application Error!"),X.createElement("h3",{style:{fontStyle:"italic"}},e),t?X.createElement("pre",{style:a},t):null,u)}var mN=X.createElement(pN,null),gN=class extends X.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){console.error("React Router caught the following error during render",n,e)}render(){return this.state.error!==void 0?X.createElement(gi.Provider,{value:this.props.routeContext},X.createElement(Rv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function yN({routeContext:n,match:e,children:t}){let r=X.useContext(Ru);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),X.createElement(gi.Provider,{value:n},t)}function _N(n,e=[],t=null,r=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let a=n,o=t==null?void 0:t.errors;if(o!=null){let p=a.findIndex(m=>m.route.id&&(o==null?void 0:o[m.route.id])!==void 0);Et(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),a=a.slice(0,Math.min(a.length,p+1))}let u=!1,d=-1;if(t)for(let p=0;p<a.length;p++){let m=a[p];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(d=p),m.route.id){let{loaderData:_,errors:v}=t,w=m.route.loader&&!_.hasOwnProperty(m.route.id)&&(!v||v[m.route.id]===void 0);if(m.route.lazy||w){u=!0,d>=0?a=a.slice(0,d+1):a=[a[0]];break}}}return a.reduceRight((p,m,_)=>{let v,w=!1,S=null,x=null;t&&(v=o&&m.route.id?o[m.route.id]:void 0,S=m.route.errorElement||mN,u&&(d<0&&_===0?(vS("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,x=null):d===_&&(w=!0,x=m.route.hydrateFallbackElement||null)));let U=e.concat(a.slice(0,_+1)),M=()=>{let H;return v?H=S:w?H=x:m.route.Component?H=X.createElement(m.route.Component,null):m.route.element?H=m.route.element:H=p,X.createElement(yN,{match:m,routeContext:{outlet:p,matches:U,isDataRoute:t!=null},children:H})};return t&&(m.route.ErrorBoundary||m.route.errorElement||_===0)?X.createElement(gN,{location:t.location,revalidation:t.revalidation,component:S,error:v,children:M(),routeContext:{outlet:null,matches:U,isDataRoute:!0}}):M()},null)}function Cv(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function vN(n){let e=X.useContext(Ru);return Et(e,Cv(n)),e}function EN(n){let e=X.useContext(om);return Et(e,Cv(n)),e}function TN(n){let e=X.useContext(gi);return Et(e,Cv(n)),e}function Dv(n){let e=TN(n),t=e.matches[e.matches.length-1];return Et(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function wN(){return Dv("useRouteId")}function bN(){var r;let n=X.useContext(Rv),e=EN("useRouteError"),t=Dv("useRouteError");return n!==void 0?n:(r=e.errors)==null?void 0:r[t]}function IN(){let{router:n}=vN("useNavigate"),e=Dv("useNavigate"),t=X.useRef(!1);return yS(()=>{t.current=!0}),X.useCallback(async(a,o={})=>{ui(t.current,gS),t.current&&(typeof a=="number"?n.navigate(a):await n.navigate(a,{fromRouteId:e,...o}))},[n,e])}var Ub={};function vS(n,e,t){!e&&!Ub[n]&&(Ub[n]=!0,ui(!1,t))}X.memo(AN);function AN({routes:n,future:e,state:t}){return _S(n,void 0,t,e)}function ip(n){Et(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function SN({basename:n="/",children:e=null,location:t,navigationType:r="POP",navigator:a,static:o=!1}){Et(!td(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let u=n.replace(/^\/*/,"/"),d=X.useMemo(()=>({basename:u,navigator:a,static:o,future:{}}),[u,a,o]);typeof t=="string"&&(t=Su(t));let{pathname:p="/",search:m="",hash:_="",state:v=null,key:w="default"}=t,S=X.useMemo(()=>{let x=Qi(p,u);return x==null?null:{location:{pathname:x,search:m,hash:_,state:v,key:w},navigationType:r}},[u,p,m,_,v,w,r]);return ui(S!=null,`<Router basename="${u}"> is not able to match the URL "${p}${m}${_}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:X.createElement(mi.Provider,{value:d},X.createElement(ed.Provider,{children:e,value:S}))}function RN({children:n,location:e}){return fN(P_(n),e)}function P_(n,e=[]){let t=[];return X.Children.forEach(n,(r,a)=>{if(!X.isValidElement(r))return;let o=[...e,a];if(r.type===X.Fragment){t.push.apply(t,P_(r.props.children,o));return}Et(r.type===ip,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Et(!r.props.index||!r.props.children,"An index route cannot have child routes.");let u={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(u.children=P_(r.props.children,o)),t.push(u)}),t}var sp="get",ap="application/x-www-form-urlencoded";function um(n){return n!=null&&typeof n.tagName=="string"}function CN(n){return um(n)&&n.tagName.toLowerCase()==="button"}function DN(n){return um(n)&&n.tagName.toLowerCase()==="form"}function xN(n){return um(n)&&n.tagName.toLowerCase()==="input"}function PN(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function NN(n,e){return n.button===0&&(!e||e==="_self")&&!PN(n)}var Kf=null;function ON(){if(Kf===null)try{new FormData(document.createElement("form"),0),Kf=!1}catch{Kf=!0}return Kf}var kN=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function a_(n){return n!=null&&!kN.has(n)?(ui(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ap}"`),null):n}function VN(n,e){let t,r,a,o,u;if(DN(n)){let d=n.getAttribute("action");r=d?Qi(d,e):null,t=n.getAttribute("method")||sp,a=a_(n.getAttribute("enctype"))||ap,o=new FormData(n)}else if(CN(n)||xN(n)&&(n.type==="submit"||n.type==="image")){let d=n.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=n.getAttribute("formaction")||d.getAttribute("action");if(r=p?Qi(p,e):null,t=n.getAttribute("formmethod")||d.getAttribute("method")||sp,a=a_(n.getAttribute("formenctype"))||a_(d.getAttribute("enctype"))||ap,o=new FormData(d,n),!ON()){let{name:m,type:_,value:v}=n;if(_==="image"){let w=m?`${m}.`:"";o.append(`${w}x`,"0"),o.append(`${w}y`,"0")}else m&&o.append(m,v)}}else{if(um(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=sp,r=null,a=ap,u=n}return o&&a==="text/plain"&&(u=o,o=void 0),{action:r,method:t.toLowerCase(),encType:a,formData:o,body:u}}function xv(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}async function MN(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function LN(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function UN(n,e,t){let r=await Promise.all(n.map(async a=>{let o=e.routes[a.route.id];if(o){let u=await MN(o,t);return u.links?u.links():[]}return[]}));return jN(r.flat(1).filter(LN).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function Bb(n,e,t,r,a,o){let u=(p,m)=>t[m]?p.route.id!==t[m].route.id:!0,d=(p,m)=>{var _;return t[m].pathname!==p.pathname||((_=t[m].route.path)==null?void 0:_.endsWith("*"))&&t[m].params["*"]!==p.params["*"]};return o==="assets"?e.filter((p,m)=>u(p,m)||d(p,m)):o==="data"?e.filter((p,m)=>{var v;let _=r.routes[p.route.id];if(!_||!_.hasLoader)return!1;if(u(p,m)||d(p,m))return!0;if(p.route.shouldRevalidate){let w=p.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((v=t[0])==null?void 0:v.params)||{},nextUrl:new URL(n,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function BN(n,e,{includeHydrateFallback:t}={}){return zN(n.map(r=>{let a=e.routes[r.route.id];if(!a)return[];let o=[a.module];return a.clientActionModule&&(o=o.concat(a.clientActionModule)),a.clientLoaderModule&&(o=o.concat(a.clientLoaderModule)),t&&a.hydrateFallbackModule&&(o=o.concat(a.hydrateFallbackModule)),a.imports&&(o=o.concat(a.imports)),o}).flat(1))}function zN(n){return[...new Set(n)]}function FN(n){let e={},t=Object.keys(n).sort();for(let r of t)e[r]=n[r];return e}function jN(n,e){let t=new Set;return new Set(e),n.reduce((r,a)=>{let o=JSON.stringify(FN(a));return t.has(o)||(t.add(o),r.push({key:o,link:a})),r},[])}function qN(n,e){let t=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return t.pathname==="/"?t.pathname="_root.data":e&&Qi(t.pathname,e)==="/"?t.pathname=`${e.replace(/\/$/,"")}/_root.data`:t.pathname=`${t.pathname.replace(/\/$/,"")}.data`,t}function ES(){let n=X.useContext(Ru);return xv(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function HN(){let n=X.useContext(om);return xv(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Pv=X.createContext(void 0);Pv.displayName="FrameworkContext";function TS(){let n=X.useContext(Pv);return xv(n,"You must render this element inside a <HydratedRouter> element"),n}function GN(n,e){let t=X.useContext(Pv),[r,a]=X.useState(!1),[o,u]=X.useState(!1),{onFocus:d,onBlur:p,onMouseEnter:m,onMouseLeave:_,onTouchStart:v}=e,w=X.useRef(null);X.useEffect(()=>{if(n==="render"&&u(!0),n==="viewport"){let U=H=>{H.forEach($=>{u($.isIntersecting)})},M=new IntersectionObserver(U,{threshold:.5});return w.current&&M.observe(w.current),()=>{M.disconnect()}}},[n]),X.useEffect(()=>{if(r){let U=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(U)}}},[r]);let S=()=>{a(!0)},x=()=>{a(!1),u(!1)};return t?n!=="intent"?[o,w,{}]:[o,w,{onFocus:Yc(d,S),onBlur:Yc(p,x),onMouseEnter:Yc(m,S),onMouseLeave:Yc(_,x),onTouchStart:Yc(v,S)}]:[!1,w,{}]}function Yc(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function $N({page:n,...e}){let{router:t}=ES(),r=X.useMemo(()=>uS(t.routes,n,t.basename),[t.routes,n,t.basename]);return r?X.createElement(QN,{page:n,matches:r,...e}):null}function KN(n){let{manifest:e,routeModules:t}=TS(),[r,a]=X.useState([]);return X.useEffect(()=>{let o=!1;return UN(n,e,t).then(u=>{o||a(u)}),()=>{o=!0}},[n,e,t]),r}function QN({page:n,matches:e,...t}){let r=ko(),{manifest:a,routeModules:o}=TS(),{basename:u}=ES(),{loaderData:d,matches:p}=HN(),m=X.useMemo(()=>Bb(n,e,p,a,r,"data"),[n,e,p,a,r]),_=X.useMemo(()=>Bb(n,e,p,a,r,"assets"),[n,e,p,a,r]),v=X.useMemo(()=>{if(n===r.pathname+r.search+r.hash)return[];let x=new Set,U=!1;if(e.forEach(H=>{var K;let $=a.routes[H.route.id];!$||!$.hasLoader||(!m.some(oe=>oe.route.id===H.route.id)&&H.route.id in d&&((K=o[H.route.id])!=null&&K.shouldRevalidate)||$.hasClientLoader?U=!0:x.add(H.route.id))}),x.size===0)return[];let M=qN(n,u);return U&&x.size>0&&M.searchParams.set("_routes",e.filter(H=>x.has(H.route.id)).map(H=>H.route.id).join(",")),[M.pathname+M.search]},[u,d,r,a,m,e,n,o]),w=X.useMemo(()=>BN(_,a),[_,a]),S=KN(_);return X.createElement(X.Fragment,null,v.map(x=>X.createElement("link",{key:x,rel:"prefetch",as:"fetch",href:x,...t})),w.map(x=>X.createElement("link",{key:x,rel:"modulepreload",href:x,...t})),S.map(({key:x,link:U})=>X.createElement("link",{key:x,...U})))}function WN(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var wS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{wS&&(window.__reactRouterVersion="7.5.0")}catch{}function YN({basename:n,children:e,window:t}){let r=X.useRef();r.current==null&&(r.current=UP({window:t,v5Compat:!0}));let a=r.current,[o,u]=X.useState({action:a.action,location:a.location}),d=X.useCallback(p=>{X.startTransition(()=>u(p))},[u]);return X.useLayoutEffect(()=>a.listen(d),[a,d]),X.createElement(SN,{basename:n,children:e,location:o.location,navigationType:o.action,navigator:a})}var bS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,IS=X.forwardRef(function({onClick:e,discover:t="render",prefetch:r="none",relative:a,reloadDocument:o,replace:u,state:d,target:p,to:m,preventScrollReset:_,viewTransition:v,...w},S){let{basename:x}=X.useContext(mi),U=typeof m=="string"&&bS.test(m),M,H=!1;if(typeof m=="string"&&U&&(M=m,wS))try{let A=new URL(window.location.href),P=m.startsWith("//")?new URL(A.protocol+m):new URL(m),V=Qi(P.pathname,x);P.origin===A.origin&&V!=null?m=V+P.search+P.hash:H=!0}catch{ui(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let $=cN(m,{relative:a}),[K,oe,ae]=GN(r,w),le=eO(m,{replace:u,state:d,target:p,preventScrollReset:_,relative:a,viewTransition:v});function D(A){e&&e(A),A.defaultPrevented||le(A)}let R=X.createElement("a",{...w,...ae,href:M||$,onClick:H||o?e:D,ref:WN(S,oe),target:p,"data-discover":!U&&t==="render"?"true":void 0});return K&&!U?X.createElement(X.Fragment,null,R,X.createElement($N,{page:$})):R});IS.displayName="Link";var XN=X.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:r="",end:a=!1,style:o,to:u,viewTransition:d,children:p,...m},_){let v=nd(u,{relative:m.relative}),w=ko(),S=X.useContext(om),{navigator:x,basename:U}=X.useContext(mi),M=S!=null&&sO(v)&&d===!0,H=x.encodeLocation?x.encodeLocation(v).pathname:v.pathname,$=w.pathname,K=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;t||($=$.toLowerCase(),K=K?K.toLowerCase():null,H=H.toLowerCase()),K&&U&&(K=Qi(K,U)||K);const oe=H!=="/"&&H.endsWith("/")?H.length-1:H.length;let ae=$===H||!a&&$.startsWith(H)&&$.charAt(oe)==="/",le=K!=null&&(K===H||!a&&K.startsWith(H)&&K.charAt(H.length)==="/"),D={isActive:ae,isPending:le,isTransitioning:M},R=ae?e:void 0,A;typeof r=="function"?A=r(D):A=[r,ae?"active":null,le?"pending":null,M?"transitioning":null].filter(Boolean).join(" ");let P=typeof o=="function"?o(D):o;return X.createElement(IS,{...m,"aria-current":R,className:A,ref:_,style:P,to:u,viewTransition:d},typeof p=="function"?p(D):p)});XN.displayName="NavLink";var ZN=X.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:r,replace:a,state:o,method:u=sp,action:d,onSubmit:p,relative:m,preventScrollReset:_,viewTransition:v,...w},S)=>{let x=rO(),U=iO(d,{relative:m}),M=u.toLowerCase()==="get"?"get":"post",H=typeof d=="string"&&bS.test(d),$=K=>{if(p&&p(K),K.defaultPrevented)return;K.preventDefault();let oe=K.nativeEvent.submitter,ae=(oe==null?void 0:oe.getAttribute("formmethod"))||u;x(oe||K.currentTarget,{fetcherKey:e,method:ae,navigate:t,replace:a,state:o,relative:m,preventScrollReset:_,viewTransition:v})};return X.createElement("form",{ref:S,method:M,action:U,onSubmit:r?p:$,...w,"data-discover":!H&&n==="render"?"true":void 0})});ZN.displayName="Form";function JN(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function AS(n){let e=X.useContext(Ru);return Et(e,JN(n)),e}function eO(n,{target:e,replace:t,state:r,preventScrollReset:a,relative:o,viewTransition:u}={}){let d=lm(),p=ko(),m=nd(n,{relative:o});return X.useCallback(_=>{if(NN(_,e)){_.preventDefault();let v=t!==void 0?t:Ch(p)===Ch(m);d(n,{replace:v,state:r,preventScrollReset:a,relative:o,viewTransition:u})}},[p,d,m,t,r,e,n,a,o,u])}var tO=0,nO=()=>`__${String(++tO)}__`;function rO(){let{router:n}=AS("useSubmit"),{basename:e}=X.useContext(mi),t=wN();return X.useCallback(async(r,a={})=>{let{action:o,method:u,encType:d,formData:p,body:m}=VN(r,e);if(a.navigate===!1){let _=a.fetcherKey||nO();await n.fetch(_,t,a.action||o,{preventScrollReset:a.preventScrollReset,formData:p,body:m,formMethod:a.method||u,formEncType:a.encType||d,flushSync:a.flushSync})}else await n.navigate(a.action||o,{preventScrollReset:a.preventScrollReset,formData:p,body:m,formMethod:a.method||u,formEncType:a.encType||d,replace:a.replace,state:a.state,fromRouteId:t,flushSync:a.flushSync,viewTransition:a.viewTransition})},[n,e,t])}function iO(n,{relative:e}={}){let{basename:t}=X.useContext(mi),r=X.useContext(gi);Et(r,"useFormAction must be used inside a RouteContext");let[a]=r.matches.slice(-1),o={...nd(n||".",{relative:e})},u=ko();if(n==null){o.search=u.search;let d=new URLSearchParams(o.search),p=d.getAll("index");if(p.some(_=>_==="")){d.delete("index"),p.filter(v=>v).forEach(v=>d.append("index",v));let _=d.toString();o.search=_?`?${_}`:""}}return(!n||n===".")&&a.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(o.pathname=o.pathname==="/"?t:$i([t,o.pathname])),Ch(o)}function sO(n,e={}){let t=X.useContext(mS);Et(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=AS("useViewTransitionState"),a=nd(n,{relative:e.relative});if(!t.isTransitioning)return!1;let o=Qi(t.currentLocation.pathname,r)||t.currentLocation.pathname,u=Qi(t.nextLocation.pathname,r)||t.nextLocation.pathname;return Rp(a.pathname,u)!=null||Rp(a.pathname,o)!=null}new TextEncoder;var Fn=function(){return Fn=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Fn.apply(this,arguments)};function Nv(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(n);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(n,r[a])&&(t[r[a]]=n[r[a]]);return t}function Cp(n,e,t){if(t||arguments.length===2)for(var r=0,a=e.length,o;r<a;r++)(o||!(r in e))&&(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return n.concat(o||Array.prototype.slice.call(e))}var ct="-ms-",ph="-moz-",et="-webkit-",SS="comm",cm="rule",Ov="decl",aO="@import",RS="@keyframes",oO="@layer",CS=Math.abs,kv=String.fromCharCode,N_=Object.assign;function lO(n,e){return un(n,0)^45?(((e<<2^un(n,0))<<2^un(n,1))<<2^un(n,2))<<2^un(n,3):0}function DS(n){return n.trim()}function qi(n,e){return(n=e.exec(n))?n[0]:n}function Oe(n,e,t){return n.replace(e,t)}function op(n,e,t){return n.indexOf(e,t)}function un(n,e){return n.charCodeAt(e)|0}function Zl(n,e,t){return n.slice(e,t)}function Zr(n){return n.length}function xS(n){return n.length}function ah(n,e){return e.push(n),n}function uO(n,e){return n.map(e).join("")}function zb(n,e){return n.filter(function(t){return!qi(t,e)})}var hm=1,Jl=1,PS=0,wr=0,Ht=0,Cu="";function dm(n,e,t,r,a,o,u,d){return{value:n,root:e,parent:t,type:r,props:a,children:o,line:hm,column:Jl,length:u,return:"",siblings:d}}function Qs(n,e){return N_(dm("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},e)}function Pl(n){for(;n.root;)n=Qs(n.root,{children:[n]});ah(n,n.siblings)}function cO(){return Ht}function hO(){return Ht=wr>0?un(Cu,--wr):0,Jl--,Ht===10&&(Jl=1,hm--),Ht}function Nr(){return Ht=wr<PS?un(Cu,wr++):0,Jl++,Ht===10&&(Jl=1,hm++),Ht}function yo(){return un(Cu,wr)}function lp(){return wr}function fm(n,e){return Zl(Cu,n,e)}function O_(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function dO(n){return hm=Jl=1,PS=Zr(Cu=n),wr=0,[]}function fO(n){return Cu="",n}function o_(n){return DS(fm(wr-1,k_(n===91?n+2:n===40?n+1:n)))}function pO(n){for(;(Ht=yo())&&Ht<33;)Nr();return O_(n)>2||O_(Ht)>3?"":" "}function mO(n,e){for(;--e&&Nr()&&!(Ht<48||Ht>102||Ht>57&&Ht<65||Ht>70&&Ht<97););return fm(n,lp()+(e<6&&yo()==32&&Nr()==32))}function k_(n){for(;Nr();)switch(Ht){case n:return wr;case 34:case 39:n!==34&&n!==39&&k_(Ht);break;case 40:n===41&&k_(n);break;case 92:Nr();break}return wr}function gO(n,e){for(;Nr()&&n+Ht!==57;)if(n+Ht===84&&yo()===47)break;return"/*"+fm(e,wr-1)+"*"+kv(n===47?n:Nr())}function yO(n){for(;!O_(yo());)Nr();return fm(n,wr)}function _O(n){return fO(up("",null,null,null,[""],n=dO(n),0,[0],n))}function up(n,e,t,r,a,o,u,d,p){for(var m=0,_=0,v=u,w=0,S=0,x=0,U=1,M=1,H=1,$=0,K="",oe=a,ae=o,le=r,D=K;M;)switch(x=$,$=Nr()){case 40:if(x!=108&&un(D,v-1)==58){op(D+=Oe(o_($),"&","&\f"),"&\f",CS(m?d[m-1]:0))!=-1&&(H=-1);break}case 34:case 39:case 91:D+=o_($);break;case 9:case 10:case 13:case 32:D+=pO(x);break;case 92:D+=mO(lp()-1,7);continue;case 47:switch(yo()){case 42:case 47:ah(vO(gO(Nr(),lp()),e,t,p),p);break;default:D+="/"}break;case 123*U:d[m++]=Zr(D)*H;case 125*U:case 59:case 0:switch($){case 0:case 125:M=0;case 59+_:H==-1&&(D=Oe(D,/\f/g,"")),S>0&&Zr(D)-v&&ah(S>32?jb(D+";",r,t,v-1,p):jb(Oe(D," ","")+";",r,t,v-2,p),p);break;case 59:D+=";";default:if(ah(le=Fb(D,e,t,m,_,a,d,K,oe=[],ae=[],v,o),o),$===123)if(_===0)up(D,e,le,le,oe,o,v,d,ae);else switch(w===99&&un(D,3)===110?100:w){case 100:case 108:case 109:case 115:up(n,le,le,r&&ah(Fb(n,le,le,0,0,a,d,K,a,oe=[],v,ae),ae),a,ae,v,d,r?oe:ae);break;default:up(D,le,le,le,[""],ae,0,d,ae)}}m=_=S=0,U=H=1,K=D="",v=u;break;case 58:v=1+Zr(D),S=x;default:if(U<1){if($==123)--U;else if($==125&&U++==0&&hO()==125)continue}switch(D+=kv($),$*U){case 38:H=_>0?1:(D+="\f",-1);break;case 44:d[m++]=(Zr(D)-1)*H,H=1;break;case 64:yo()===45&&(D+=o_(Nr())),w=yo(),_=v=Zr(K=D+=yO(lp())),$++;break;case 45:x===45&&Zr(D)==2&&(U=0)}}return o}function Fb(n,e,t,r,a,o,u,d,p,m,_,v){for(var w=a-1,S=a===0?o:[""],x=xS(S),U=0,M=0,H=0;U<r;++U)for(var $=0,K=Zl(n,w+1,w=CS(M=u[U])),oe=n;$<x;++$)(oe=DS(M>0?S[$]+" "+K:Oe(K,/&\f/g,S[$])))&&(p[H++]=oe);return dm(n,e,t,a===0?cm:d,p,m,_,v)}function vO(n,e,t,r){return dm(n,e,t,SS,kv(cO()),Zl(n,2,-2),0,r)}function jb(n,e,t,r,a){return dm(n,e,t,Ov,Zl(n,0,r),Zl(n,r+1,-1),r,a)}function NS(n,e,t){switch(lO(n,e)){case 5103:return et+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return et+n+n;case 4789:return ph+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return et+n+ph+n+ct+n+n;case 5936:switch(un(n,e+11)){case 114:return et+n+ct+Oe(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return et+n+ct+Oe(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return et+n+ct+Oe(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return et+n+ct+n+n;case 6165:return et+n+ct+"flex-"+n+n;case 5187:return et+n+Oe(n,/(\w+).+(:[^]+)/,et+"box-$1$2"+ct+"flex-$1$2")+n;case 5443:return et+n+ct+"flex-item-"+Oe(n,/flex-|-self/g,"")+(qi(n,/flex-|baseline/)?"":ct+"grid-row-"+Oe(n,/flex-|-self/g,""))+n;case 4675:return et+n+ct+"flex-line-pack"+Oe(n,/align-content|flex-|-self/g,"")+n;case 5548:return et+n+ct+Oe(n,"shrink","negative")+n;case 5292:return et+n+ct+Oe(n,"basis","preferred-size")+n;case 6060:return et+"box-"+Oe(n,"-grow","")+et+n+ct+Oe(n,"grow","positive")+n;case 4554:return et+Oe(n,/([^-])(transform)/g,"$1"+et+"$2")+n;case 6187:return Oe(Oe(Oe(n,/(zoom-|grab)/,et+"$1"),/(image-set)/,et+"$1"),n,"")+n;case 5495:case 3959:return Oe(n,/(image-set\([^]*)/,et+"$1$`$1");case 4968:return Oe(Oe(n,/(.+:)(flex-)?(.*)/,et+"box-pack:$3"+ct+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+et+n+n;case 4200:if(!qi(n,/flex-|baseline/))return ct+"grid-column-align"+Zl(n,e)+n;break;case 2592:case 3360:return ct+Oe(n,"template-","")+n;case 4384:case 3616:return t&&t.some(function(r,a){return e=a,qi(r.props,/grid-\w+-end/)})?~op(n+(t=t[e].value),"span",0)?n:ct+Oe(n,"-start","")+n+ct+"grid-row-span:"+(~op(t,"span",0)?qi(t,/\d+/):+qi(t,/\d+/)-+qi(n,/\d+/))+";":ct+Oe(n,"-start","")+n;case 4896:case 4128:return t&&t.some(function(r){return qi(r.props,/grid-\w+-start/)})?n:ct+Oe(Oe(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return Oe(n,/(.+)-inline(.+)/,et+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Zr(n)-1-e>6)switch(un(n,e+1)){case 109:if(un(n,e+4)!==45)break;case 102:return Oe(n,/(.+:)(.+)-([^]+)/,"$1"+et+"$2-$3$1"+ph+(un(n,e+3)==108?"$3":"$2-$3"))+n;case 115:return~op(n,"stretch",0)?NS(Oe(n,"stretch","fill-available"),e,t)+n:n}break;case 5152:case 5920:return Oe(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,a,o,u,d,p,m){return ct+a+":"+o+m+(u?ct+a+"-span:"+(d?p:+p-+o)+m:"")+n});case 4949:if(un(n,e+6)===121)return Oe(n,":",":"+et)+n;break;case 6444:switch(un(n,un(n,14)===45?18:11)){case 120:return Oe(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+et+(un(n,14)===45?"inline-":"")+"box$3$1"+et+"$2$3$1"+ct+"$2box$3")+n;case 100:return Oe(n,":",":"+ct)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Oe(n,"scroll-","scroll-snap-")+n}return n}function Dp(n,e){for(var t="",r=0;r<n.length;r++)t+=e(n[r],r,n,e)||"";return t}function EO(n,e,t,r){switch(n.type){case oO:if(n.children.length)break;case aO:case Ov:return n.return=n.return||n.value;case SS:return"";case RS:return n.return=n.value+"{"+Dp(n.children,r)+"}";case cm:if(!Zr(n.value=n.props.join(",")))return""}return Zr(t=Dp(n.children,r))?n.return=n.value+"{"+t+"}":""}function TO(n){var e=xS(n);return function(t,r,a,o){for(var u="",d=0;d<e;d++)u+=n[d](t,r,a,o)||"";return u}}function wO(n){return function(e){e.root||(e=e.return)&&n(e)}}function bO(n,e,t,r){if(n.length>-1&&!n.return)switch(n.type){case Ov:n.return=NS(n.value,n.length,t);return;case RS:return Dp([Qs(n,{value:Oe(n.value,"@","@"+et)})],r);case cm:if(n.length)return uO(t=n.props,function(a){switch(qi(a,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Pl(Qs(n,{props:[Oe(a,/:(read-\w+)/,":"+ph+"$1")]})),Pl(Qs(n,{props:[a]})),N_(n,{props:zb(t,r)});break;case"::placeholder":Pl(Qs(n,{props:[Oe(a,/:(plac\w+)/,":"+et+"input-$1")]})),Pl(Qs(n,{props:[Oe(a,/:(plac\w+)/,":"+ph+"$1")]})),Pl(Qs(n,{props:[Oe(a,/:(plac\w+)/,ct+"input-$1")]})),Pl(Qs(n,{props:[a]})),N_(n,{props:zb(t,r)});break}return""})}}var IO={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Zn={},eu=typeof process<"u"&&Zn!==void 0&&(Zn.REACT_APP_SC_ATTR||Zn.SC_ATTR)||"data-styled",OS="active",kS="data-styled-version",pm="6.1.17",Vv=`/*!sc*/
`,xp=typeof window<"u"&&"HTMLElement"in window,AO=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Zn!==void 0&&Zn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Zn.REACT_APP_SC_DISABLE_SPEEDY!==""?Zn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Zn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Zn!==void 0&&Zn.SC_DISABLE_SPEEDY!==void 0&&Zn.SC_DISABLE_SPEEDY!==""&&Zn.SC_DISABLE_SPEEDY!=="false"&&Zn.SC_DISABLE_SPEEDY),mm=Object.freeze([]),tu=Object.freeze({});function SO(n,e,t){return t===void 0&&(t=tu),n.theme!==t.theme&&n.theme||e||t.theme}var VS=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),RO=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,CO=/(^-|-$)/g;function qb(n){return n.replace(RO,"-").replace(CO,"")}var DO=/(a)(d)/gi,Qf=52,Hb=function(n){return String.fromCharCode(n+(n>25?39:97))};function V_(n){var e,t="";for(e=Math.abs(n);e>Qf;e=e/Qf|0)t=Hb(e%Qf)+t;return(Hb(e%Qf)+t).replace(DO,"$1-$2")}var l_,MS=5381,Hl=function(n,e){for(var t=e.length;t;)n=33*n^e.charCodeAt(--t);return n},LS=function(n){return Hl(MS,n)};function xO(n){return V_(LS(n)>>>0)}function PO(n){return n.displayName||n.name||"Component"}function u_(n){return typeof n=="string"&&!0}var US=typeof Symbol=="function"&&Symbol.for,BS=US?Symbol.for("react.memo"):60115,NO=US?Symbol.for("react.forward_ref"):60112,OO={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},kO={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},zS={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},VO=((l_={})[NO]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},l_[BS]=zS,l_);function Gb(n){return("type"in(e=n)&&e.type.$$typeof)===BS?zS:"$$typeof"in n?VO[n.$$typeof]:OO;var e}var MO=Object.defineProperty,LO=Object.getOwnPropertyNames,$b=Object.getOwnPropertySymbols,UO=Object.getOwnPropertyDescriptor,BO=Object.getPrototypeOf,Kb=Object.prototype;function FS(n,e,t){if(typeof e!="string"){if(Kb){var r=BO(e);r&&r!==Kb&&FS(n,r,t)}var a=LO(e);$b&&(a=a.concat($b(e)));for(var o=Gb(n),u=Gb(e),d=0;d<a.length;++d){var p=a[d];if(!(p in kO||t&&t[p]||u&&p in u||o&&p in o)){var m=UO(e,p);try{MO(n,p,m)}catch{}}}}return n}function nu(n){return typeof n=="function"}function Mv(n){return typeof n=="object"&&"styledComponentId"in n}function ho(n,e){return n&&e?"".concat(n," ").concat(e):n||e||""}function Qb(n,e){if(n.length===0)return"";for(var t=n[0],r=1;r<n.length;r++)t+=n[r];return t}function Dh(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function M_(n,e,t){if(t===void 0&&(t=!1),!t&&!Dh(n)&&!Array.isArray(n))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)n[r]=M_(n[r],e[r]);else if(Dh(e))for(var r in e)n[r]=M_(n[r],e[r]);return n}function Lv(n,e){Object.defineProperty(n,"toString",{value:e})}function rd(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var zO=function(){function n(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return n.prototype.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},n.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,a=r.length,o=a;e>=o;)if((o<<=1)<0)throw rd(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var u=a;u<o;u++)this.groupSizes[u]=0}for(var d=this.indexOfGroup(e+1),p=(u=0,t.length);u<p;u++)this.tag.insertRule(d,t[u])&&(this.groupSizes[e]++,d++)},n.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),a=r+t;this.groupSizes[e]=0;for(var o=r;o<a;o++)this.tag.deleteRule(r)}},n.prototype.getGroup=function(e){var t="";if(e>=this.length||this.groupSizes[e]===0)return t;for(var r=this.groupSizes[e],a=this.indexOfGroup(e),o=a+r,u=a;u<o;u++)t+="".concat(this.tag.getRule(u)).concat(Vv);return t},n}(),cp=new Map,Pp=new Map,hp=1,Wf=function(n){if(cp.has(n))return cp.get(n);for(;Pp.has(hp);)hp++;var e=hp++;return cp.set(n,e),Pp.set(e,n),e},FO=function(n,e){hp=e+1,cp.set(n,e),Pp.set(e,n)},jO="style[".concat(eu,"][").concat(kS,'="').concat(pm,'"]'),qO=new RegExp("^".concat(eu,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),HO=function(n,e,t){for(var r,a=t.split(","),o=0,u=a.length;o<u;o++)(r=a[o])&&n.registerName(e,r)},GO=function(n,e){for(var t,r=((t=e.textContent)!==null&&t!==void 0?t:"").split(Vv),a=[],o=0,u=r.length;o<u;o++){var d=r[o].trim();if(d){var p=d.match(qO);if(p){var m=0|parseInt(p[1],10),_=p[2];m!==0&&(FO(_,m),HO(n,_,p[3]),n.getTag().insertRules(m,a)),a.length=0}else a.push(d)}}},Wb=function(n){for(var e=document.querySelectorAll(jO),t=0,r=e.length;t<r;t++){var a=e[t];a&&a.getAttribute(eu)!==OS&&(GO(n,a),a.parentNode&&a.parentNode.removeChild(a))}};function $O(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var jS=function(n){var e=document.head,t=n||e,r=document.createElement("style"),a=function(d){var p=Array.from(d.querySelectorAll("style[".concat(eu,"]")));return p[p.length-1]}(t),o=a!==void 0?a.nextSibling:null;r.setAttribute(eu,OS),r.setAttribute(kS,pm);var u=$O();return u&&r.setAttribute("nonce",u),t.insertBefore(r,o),r},KO=function(){function n(e){this.element=jS(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var r=document.styleSheets,a=0,o=r.length;a<o;a++){var u=r[a];if(u.ownerNode===t)return u}throw rd(17)}(this.element),this.length=0}return n.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},n.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},n}(),QO=function(){function n(e){this.element=jS(e),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},n.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},n}(),WO=function(){function n(e){this.rules=[],this.length=0}return n.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},n.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},n.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},n}(),Yb=xp,YO={isServer:!xp,useCSSOMInjection:!AO},qS=function(){function n(e,t,r){e===void 0&&(e=tu),t===void 0&&(t={});var a=this;this.options=Fn(Fn({},YO),e),this.gs=t,this.names=new Map(r),this.server=!!e.isServer,!this.server&&xp&&Yb&&(Yb=!1,Wb(this)),Lv(this,function(){return function(o){for(var u=o.getTag(),d=u.length,p="",m=function(v){var w=function(H){return Pp.get(H)}(v);if(w===void 0)return"continue";var S=o.names.get(w),x=u.getGroup(v);if(S===void 0||!S.size||x.length===0)return"continue";var U="".concat(eu,".g").concat(v,'[id="').concat(w,'"]'),M="";S!==void 0&&S.forEach(function(H){H.length>0&&(M+="".concat(H,","))}),p+="".concat(x).concat(U,'{content:"').concat(M,'"}').concat(Vv)},_=0;_<d;_++)m(_);return p}(a)})}return n.registerId=function(e){return Wf(e)},n.prototype.rehydrate=function(){!this.server&&xp&&Wb(this)},n.prototype.reconstructWithOptions=function(e,t){return t===void 0&&(t=!0),new n(Fn(Fn({},this.options),e),this.gs,t&&this.names||void 0)},n.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(e=function(t){var r=t.useCSSOMInjection,a=t.target;return t.isServer?new WO(a):r?new KO(a):new QO(a)}(this.options),new zO(e)));var e},n.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},n.prototype.registerName=function(e,t){if(Wf(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},n.prototype.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(Wf(e),r)},n.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},n.prototype.clearRules=function(e){this.getTag().clearGroup(Wf(e)),this.clearNames(e)},n.prototype.clearTag=function(){this.tag=void 0},n}(),XO=/&/g,ZO=/^\s*\/\/.*$/gm;function HS(n,e){return n.map(function(t){return t.type==="rule"&&(t.value="".concat(e," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(e," ")),t.props=t.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=HS(t.children,e)),t})}function JO(n){var e,t,r,a=tu,o=a.options,u=o===void 0?tu:o,d=a.plugins,p=d===void 0?mm:d,m=function(w,S,x){return x.startsWith(t)&&x.endsWith(t)&&x.replaceAll(t,"").length>0?".".concat(e):w},_=p.slice();_.push(function(w){w.type===cm&&w.value.includes("&")&&(w.props[0]=w.props[0].replace(XO,t).replace(r,m))}),u.prefix&&_.push(bO),_.push(EO);var v=function(w,S,x,U){S===void 0&&(S=""),x===void 0&&(x=""),U===void 0&&(U="&"),e=U,t=S,r=new RegExp("\\".concat(t,"\\b"),"g");var M=w.replace(ZO,""),H=_O(x||S?"".concat(x," ").concat(S," { ").concat(M," }"):M);u.namespace&&(H=HS(H,u.namespace));var $=[];return Dp(H,TO(_.concat(wO(function(K){return $.push(K)})))),$};return v.hash=p.length?p.reduce(function(w,S){return S.name||rd(15),Hl(w,S.name)},MS).toString():"",v}var ek=new qS,L_=JO(),GS=Rh.createContext({shouldForwardProp:void 0,styleSheet:ek,stylis:L_});GS.Consumer;Rh.createContext(void 0);function Xb(){return X.useContext(GS)}var tk=function(){function n(e,t){var r=this;this.inject=function(a,o){o===void 0&&(o=L_);var u=r.name+o.hash;a.hasNameForId(r.id,u)||a.insertRules(r.id,u,o(r.rules,u,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Lv(this,function(){throw rd(12,String(r.name))})}return n.prototype.getName=function(e){return e===void 0&&(e=L_),this.name+e.hash},n}(),nk=function(n){return n>="A"&&n<="Z"};function Zb(n){for(var e="",t=0;t<n.length;t++){var r=n[t];if(t===1&&r==="-"&&n[0]==="-")return n;nk(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var $S=function(n){return n==null||n===!1||n===""},KS=function(n){var e,t,r=[];for(var a in n){var o=n[a];n.hasOwnProperty(a)&&!$S(o)&&(Array.isArray(o)&&o.isCss||nu(o)?r.push("".concat(Zb(a),":"),o,";"):Dh(o)?r.push.apply(r,Cp(Cp(["".concat(a," {")],KS(o),!1),["}"],!1)):r.push("".concat(Zb(a),": ").concat((e=a,(t=o)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in IO||e.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return r};function _o(n,e,t,r){if($S(n))return[];if(Mv(n))return[".".concat(n.styledComponentId)];if(nu(n)){if(!nu(o=n)||o.prototype&&o.prototype.isReactComponent||!e)return[n];var a=n(e);return _o(a,e,t,r)}var o;return n instanceof tk?t?(n.inject(t,r),[n.getName(r)]):[n]:Dh(n)?KS(n):Array.isArray(n)?Array.prototype.concat.apply(mm,n.map(function(u){return _o(u,e,t,r)})):[n.toString()]}function rk(n){for(var e=0;e<n.length;e+=1){var t=n[e];if(nu(t)&&!Mv(t))return!1}return!0}var ik=LS(pm),sk=function(){function n(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&rk(e),this.componentId=t,this.baseHash=Hl(ik,t),this.baseStyle=r,qS.registerId(t)}return n.prototype.generateAndInjectStyles=function(e,t,r){var a=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))a=ho(a,this.staticRulesId);else{var o=Qb(_o(this.rules,e,t,r)),u=V_(Hl(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,u)){var d=r(o,".".concat(u),void 0,this.componentId);t.insertRules(this.componentId,u,d)}a=ho(a,u),this.staticRulesId=u}else{for(var p=Hl(this.baseHash,r.hash),m="",_=0;_<this.rules.length;_++){var v=this.rules[_];if(typeof v=="string")m+=v;else if(v){var w=Qb(_o(v,e,t,r));p=Hl(p,w+_),m+=w}}if(m){var S=V_(p>>>0);t.hasNameForId(this.componentId,S)||t.insertRules(this.componentId,S,r(m,".".concat(S),void 0,this.componentId)),a=ho(a,S)}}return a},n}(),QS=Rh.createContext(void 0);QS.Consumer;var c_={};function ak(n,e,t){var r=Mv(n),a=n,o=!u_(n),u=e.attrs,d=u===void 0?mm:u,p=e.componentId,m=p===void 0?function(oe,ae){var le=typeof oe!="string"?"sc":qb(oe);c_[le]=(c_[le]||0)+1;var D="".concat(le,"-").concat(xO(pm+le+c_[le]));return ae?"".concat(ae,"-").concat(D):D}(e.displayName,e.parentComponentId):p,_=e.displayName,v=_===void 0?function(oe){return u_(oe)?"styled.".concat(oe):"Styled(".concat(PO(oe),")")}(n):_,w=e.displayName&&e.componentId?"".concat(qb(e.displayName),"-").concat(e.componentId):e.componentId||m,S=r&&a.attrs?a.attrs.concat(d).filter(Boolean):d,x=e.shouldForwardProp;if(r&&a.shouldForwardProp){var U=a.shouldForwardProp;if(e.shouldForwardProp){var M=e.shouldForwardProp;x=function(oe,ae){return U(oe,ae)&&M(oe,ae)}}else x=U}var H=new sk(t,w,r?a.componentStyle:void 0);function $(oe,ae){return function(le,D,R){var A=le.attrs,P=le.componentStyle,V=le.defaultProps,z=le.foldedComponentIds,N=le.styledComponentId,Nt=le.target,It=Rh.useContext(QS),he=Xb(),be=le.shouldForwardProp||he.shouldForwardProp,Te=SO(D,It,V)||tu,Ne=function(Ce,Re,ut){for(var Ve,Ze=Fn(Fn({},Re),{className:void 0,theme:ut}),$e=0;$e<Ce.length;$e+=1){var Ut=nu(Ve=Ce[$e])?Ve(Ze):Ve;for(var Jt in Ut)Ze[Jt]=Jt==="className"?ho(Ze[Jt],Ut[Jt]):Jt==="style"?Fn(Fn({},Ze[Jt]),Ut[Jt]):Ut[Jt]}return Re.className&&(Ze.className=ho(Ze.className,Re.className)),Ze}(A,D,Te),O=Ne.as||Nt,ie={};for(var ge in Ne)Ne[ge]===void 0||ge[0]==="$"||ge==="as"||ge==="theme"&&Ne.theme===Te||(ge==="forwardedAs"?ie.as=Ne.forwardedAs:be&&!be(ge,O)||(ie[ge]=Ne[ge]));var pe=function(Ce,Re){var ut=Xb(),Ve=Ce.generateAndInjectStyles(Re,ut.styleSheet,ut.stylis);return Ve}(P,Ne),fe=ho(z,N);return pe&&(fe+=" "+pe),Ne.className&&(fe+=" "+Ne.className),ie[u_(O)&&!VS.has(O)?"class":"className"]=fe,R&&(ie.ref=R),X.createElement(O,ie)}(K,oe,ae)}$.displayName=v;var K=Rh.forwardRef($);return K.attrs=S,K.componentStyle=H,K.displayName=v,K.shouldForwardProp=x,K.foldedComponentIds=r?ho(a.foldedComponentIds,a.styledComponentId):"",K.styledComponentId=w,K.target=r?a.target:n,Object.defineProperty(K,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(oe){this._foldedDefaultProps=r?function(ae){for(var le=[],D=1;D<arguments.length;D++)le[D-1]=arguments[D];for(var R=0,A=le;R<A.length;R++)M_(ae,A[R],!0);return ae}({},a.defaultProps,oe):oe}}),Lv(K,function(){return".".concat(K.styledComponentId)}),o&&FS(K,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),K}function Jb(n,e){for(var t=[n[0]],r=0,a=e.length;r<a;r+=1)t.push(e[r],n[r+1]);return t}var eI=function(n){return Object.assign(n,{isCss:!0})};function ok(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];if(nu(n)||Dh(n))return eI(_o(Jb(mm,Cp([n],e,!0))));var r=n;return e.length===0&&r.length===1&&typeof r[0]=="string"?_o(r):eI(_o(Jb(r,e)))}function U_(n,e,t){if(t===void 0&&(t=tu),!e)throw rd(1,e);var r=function(a){for(var o=[],u=1;u<arguments.length;u++)o[u-1]=arguments[u];return n(e,t,ok.apply(void 0,Cp([a],o,!1)))};return r.attrs=function(a){return U_(n,e,Fn(Fn({},t),{attrs:Array.prototype.concat(t.attrs,a).filter(Boolean)}))},r.withConfig=function(a){return U_(n,e,Fn(Fn({},t),a))},r}var WS=function(n){return U_(ak,n)},Xe=WS;VS.forEach(function(n){Xe[n]=WS(n)});const lk=Xe.button`
  height:50px;
  display: flex;
align-items: center;   /* 세로 정렬 */
justify-content: center; /* 가로 정렬 */
  color: white;
  font-size: 24px;
  background-color: #000000cb;
  border:none;
  border-radius: 100px;
  padding: 10px 84px 10px 84px;
  font-family: 'Pretendard-Regular';
  font-weight: 100;
  margin: 0 auto;
  white-space: nowrap;
   width: ${n=>n.width||"auto"}px;  
 transition: background-color 0.3s ease;  
     &:hover {
    background-color: #FE9015;
  }
`;function Uv(n){const{title:e,onClick:t,width:r}=n;return Y.jsx(lk,{width:r||"",onClick:t,children:e||"Button"})}const uk=Xe.div`
  width: 46px;
  height: 46px;
  background-color: ${n=>n.color||"#e0e0e0"};
  border-radius: 50%;
  display: flex;
  margin-right: 28px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: outline 0.2s ease;
  &:hover {
    opacity: 0.85;
  }
  &.active {
    outline: 2.5px solid #C2C2C2;       
    outline-offset: 3px;          
  }
`;function ck({color:n,isActive:e,onClick:t}){return Y.jsx(uk,{color:n,className:e?"active":"",onClick:t})}const hk=Xe.div`
  cursor: pointer;
  box-sizing: border-box;
  position: relative;
  background-color: white;
  width: 206px;
  aspect-ratio: 206 / 485;
  display: flex;
  flex-direction: column;
  color: #1A1A1A;
  border: solid 1px #D5D5D5;
  overflow: hidden;
  padding: 0;
  font-family: 'Pretendard-Regular';
  transition: background-color 0.3s ease;

  @media (max-width: 320px) {
    max-width: 160px;
  }

  @media (max-width: 250px) {
    transform: scale(0.9);
    transform-origin: top left;
  }

  &:hover {
    background-color: ${n=>n.color||"#e0e0e0"};

    .visible img {
      display: none;
    }

    .visible {
      display: none;
    }
  }
`,YS=Xe.div`
  position: absolute;
  top: 0;
  width: 12px;
  height: 346px;
  background-color: ${n=>n.color||"#e0e0e0"};

  @media (max-width: 400px) {
    height: 300px;
  }
`,dk=Xe(YS)`
  left: 0;
`,fk=Xe(YS)`
  right: 0;
`,pk=Xe.img`
  display: block;
  margin: 0 auto;
  position: absolute;
  bottom: 14px;
  left: 50px;
  width: 50%;
  max-width: 112px;
  height: auto;
`,mk=Xe.h1`
  font-size: clamp(24px, 4vw, 36px);
  color: #9F9F9F;
  font-weight: 300;
  margin: 0;
  padding-bottom: 8px;
  padding-left: 14px;
  margin-top: 14px;
`,gk=Xe.p`
  margin: 4px 0;
  color: white;
  background-color: black;
  width: 84px;
  height: 33px;
  text-align: center;
  font-size: clamp(18px, 3vw, 24px);
  font-weight: 100;
  line-height: 33px;
`,yk=Xe.h2`
  margin: 0;
  font-size: clamp(36px, 6vw, 64px);
  margin-bottom: 40px;
  word-break: break-word;
  line-height: 90%;
  text-align: left;
`,_k=Xe.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 8px;
  line-height: 90%;
`,vk=Xe.p`
  margin-left: 4px;
  font-size: 8px;
`,Ek=Xe.p`
  margin-right: 4px;
  font-size: 8px;
  text-align: right;
`;function Tk(n){const{id:e,year:t,country:r,place:a,date:o,passenger:u,thumbnail:d,barColor:p,post:m="#e0e0e0"}=n,{title:_,content:v}=m||{},w=lm(),S=M=>M?M.length<=3?[M,""]:[M.slice(0,2),M.slice(2)]:["",""],[x,U]=S(a);return Y.jsx("div",{onClick:()=>w(`/post/${e}`),className:"ticket-wrapper",children:Y.jsxs(hk,{color:p,children:[Y.jsx(dk,{color:p}),Y.jsx(fk,{color:p}),Y.jsxs("div",{style:{padding:"0px 12px"},className:"visible",children:[Y.jsx(mk,{children:t||"2025"}),Y.jsx("img",{src:"/miniblog_v1/Plane.svg",alt:"Plane icon",style:{display:"block",marginLeft:"auto",marginBottom:"8px",marginRight:"8px",width:"24px"}}),Y.jsx(gk,{children:r}),Y.jsxs(yk,{children:[x,Y.jsx("br",{}),U]}),Y.jsxs(_k,{children:[Y.jsxs(vk,{children:["DATE",Y.jsx("br",{}),o]}),Y.jsxs(Ek,{children:["PASSENGER",Y.jsx("br",{}),u||"@di_ed_ie"]})]}),Y.jsx(pk,{src:"/miniblog_v1/qrcode.svg",alt:"QR Code"})]}),Y.jsxs("div",{className:"HoverContent",children:[Y.jsx("img",{src:d||"/miniblog_v1/thumbnail.png",style:{width:"206px",height:"139px",objectFit:"cover"}}),Y.jsxs("div",{className:"HoverContent_container",children:[Y.jsx("h2",{style:{fontFamily:"Pretendard-Regular",fontSize:"12px",color:"white",fontWeight:"700"},children:_}),Y.jsx("h2",{style:{fontFamily:"Pretendard-Regular",fontSize:"12px",color:"white",fontWeight:"100",lineHeight:"146%"},children:v})]}),Y.jsx("p",{style:{marginTop:"8px",marginLeft:"150px",marginRight:"14px",fontSize:"8px",color:"white",fontWeight:"100"},children:u||"@di_ed_ie"})]})]})})}const wk=Xe.div`
  box-sizing: border-box;
  position: relative;
  background-color: white;
  width: 396px;
  height:168px;
  display: flex;
  flex-direction: column;
  color: #1A1A1A;
  border: solid 1px #D5D5D5;
  overflow: hidden;
  padding: 0;
  font-family: 'Pretendard-Regular';
`,bk=Xe.div`
  position: absolute;
  top: 0;
  width: 11.5px;
  height: 100%;
  background-color: ${n=>n.color||"#e0e0e0"};
`,Ik=Xe(bk)`
  left: 0;
`,Ak=Xe.img`
  display: block;
  margin: 0 auto;
  position: absolute;
  top:40%;
  right:10px;
  width: 30%;
  max-width: 91px;
  height: auto;
`;function Sk(n){const{year:e,country:t,place:r,date:a,thumbnail:o,passenger:u,barColor:d,post:p,onClick:m="#e0e0e0"}=n,{title:_,content:v}=p||{};return Y.jsxs("div",{onClick:m,className:"ticket-wrapper2",style:{paddingBottom:"23px",paddingTop:"23px",borderBottom:" 1px solid #BEBEBE"},children:[Y.jsxs(wk,{children:[Y.jsx(Ik,{color:d}),Y.jsxs("div",{style:{padding:"0px 12px",height:"100%",display:"flex",flexDirection:"column",gap:"0px"},children:[Y.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[Y.jsx("img",{src:"/miniblog_v1/Plane.svg",alt:"Plane icon",style:{display:"block",marginLeft:"auto",marginBottom:"0px",marginRight:"28px",width:"24px"}}),Y.jsx("h1",{style:{width:"74px",fontSize:"30px",color:"#9F9F9F",fontWeight:"300",margin:"0px",paddingBottom:"8px",paddingLeft:"0px",marginTop:"14px"},children:e||"2025"})]}),Y.jsx("p",{style:{position:"absolute",top:"24px",margin:"0 0 4px 0",color:"white",backgroundColor:"black",width:"68px",height:"27px",textAlign:"center",fontSize:"19px",fontWeight:"100",display:"flex",alignItems:"center",justifyContent:"center"},children:t}),Y.jsx("h2",{style:{position:"absolute",top:"55px",margin:"0",fontSize:"52px",fontWeight:"700",paddingLeft:"16px",paddingBottom:"20px",marginBottom:"0px",wordBreak:"break-word"},children:r}),Y.jsxs("div",{style:{position:"absolute",top:"126px",width:"150px",display:"flex",justifyContent:"space-between",padding:"0px 8px",paddingLeft:"20px",lineHeight:"90%"},children:[Y.jsxs("p",{style:{marginLeft:"4px",fontSize:"7px",color:"#1A1A1A"},children:["DATE",Y.jsx("br",{}),a]}),Y.jsxs("p",{style:{marginRight:"4px",fontSize:"7px",textAlign:"right",color:"#1A1A1A"},children:["PASSENGER",Y.jsx("br",{}),u||"@di_ed_ie"]})]})]}),Y.jsx(Ak,{src:"/miniblog_v1/qrcode.svg",alt:"QR Code"})]}),Y.jsxs("div",{style:{width:"802px",height:"168px",paddingLeft:"24px",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[Y.jsxs("div",{style:{display:"block",overflow:"hidden"},children:[Y.jsx("h2",{className:"List_TicketTitle",children:_}),Y.jsx("h2",{className:"List_TicketContent",children:v})]}),Y.jsxs("div",{style:{paddingTop:"10px",display:"flex",justifyContent:"space-between"},children:[Y.jsx("p",{style:{color:"#3A3A3A"},children:a}),Y.jsx("p",{style:{color:"#7B7B7B"},children:u||"@di_ed_ie"})]})]})]})}const Rk=Xe.div`
display: flex;
flex-wrap: wrap;
margin: 0 auto;
justify-content: space-between;
`,Ck=Xe.div`
display: flex;
flex-direction: column;
gap: 0px;
justify-content: flex-start;
border-top: 1.5px solid #6B6B6B;

height: calc(100vh - 124px);       
overflow-y: auto;            
`,Dk={height:"calc(100vh - 124px)",overflowY:"auto"};function xk({posts:n,layout:e,itemClicked:t}){const r=e==="grid"?Tk:Sk,a=e==="grid"?Rk:Ck;return Y.jsx("div",{style:Dk,children:Y.jsx(a,{children:n.map(o=>Y.jsx(r,{post:o,id:o.id,year:o.year,country:o.country,place:o.place,date:o.date,passenger:o.passenger,thumbnail:o.image,barColor:o.color,onClick:()=>t(o)},o.id))})})}const Pk=()=>{};var tI={};/**
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
 */const XS=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let a=n.charCodeAt(r);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(a=65536+((a&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},Nk=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const a=n[t++];if(a<128)e[r++]=String.fromCharCode(a);else if(a>191&&a<224){const o=n[t++];e[r++]=String.fromCharCode((a&31)<<6|o&63)}else if(a>239&&a<365){const o=n[t++],u=n[t++],d=n[t++],p=((a&7)<<18|(o&63)<<12|(u&63)<<6|d&63)-65536;e[r++]=String.fromCharCode(55296+(p>>10)),e[r++]=String.fromCharCode(56320+(p&1023))}else{const o=n[t++],u=n[t++];e[r++]=String.fromCharCode((a&15)<<12|(o&63)<<6|u&63)}}return e.join("")},ZS={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let a=0;a<n.length;a+=3){const o=n[a],u=a+1<n.length,d=u?n[a+1]:0,p=a+2<n.length,m=p?n[a+2]:0,_=o>>2,v=(o&3)<<4|d>>4;let w=(d&15)<<2|m>>6,S=m&63;p||(S=64,u||(w=64)),r.push(t[_],t[v],t[w],t[S])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(XS(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Nk(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let a=0;a<n.length;){const o=t[n.charAt(a++)],d=a<n.length?t[n.charAt(a)]:0;++a;const m=a<n.length?t[n.charAt(a)]:64;++a;const v=a<n.length?t[n.charAt(a)]:64;if(++a,o==null||d==null||m==null||v==null)throw new Ok;const w=o<<2|d>>4;if(r.push(w),m!==64){const S=d<<4&240|m>>2;if(r.push(S),v!==64){const x=m<<6&192|v;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ok extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const kk=function(n){const e=XS(n);return ZS.encodeByteArray(e,!0)},Np=function(n){return kk(n).replace(/\./g,"")},Bv=function(n){try{return ZS.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Op(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Vk(t)||(n[t]=Op(n[t],e[t]));return n}function Vk(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mk=()=>JS().__FIREBASE_DEFAULTS__,Lk=()=>{if(typeof process>"u"||typeof tI>"u")return;const n=tI.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Uk=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Bv(n[1]);return e&&JSON.parse(e)},zv=()=>{try{return Pk()||Mk()||Lk()||Uk()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},eR=()=>{var n;return(n=zv())===null||n===void 0?void 0:n.config},Bk=n=>{var e;return(e=zv())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class zk{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Fk(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",a=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:a,exp:a+3600,auth_time:a,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Np(JSON.stringify(t)),Np(JSON.stringify(u)),""].join(".")}/**
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
 */function wt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function jk(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(wt())}function Fv(){var n;const e=(n=zv())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function qk(){return typeof window<"u"||tR()}function tR(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function Hk(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function nR(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function jv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function rR(){const n=wt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function iR(){return!Fv()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function xh(){try{return typeof indexedDB=="object"}catch{return!1}}function Gk(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(r);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{var o;e(((o=a.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}/**
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
 */const $k="FirebaseError";class kn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=$k,Object.setPrototypeOf(this,kn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Vo.prototype.create)}}class Vo{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},a=`${this.service}/${e}`,o=this.errors[e],u=o?Kk(o,r):"Error",d=`${this.serviceName}: ${u} (${a}).`;return new kn(a,d,r)}}function Kk(n,e){return n.replace(Qk,(t,r)=>{const a=e[r];return a!=null?String(a):`<${r}?>`})}const Qk=/\{\$([^}]+)}/g;/**
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
 */function nI(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Wk(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ia(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const a of t){if(!r.includes(a))return!1;const o=n[a],u=e[a];if(rI(o)&&rI(u)){if(!ia(o,u))return!1}else if(o!==u)return!1}for(const a of r)if(!t.includes(a))return!1;return!0}function rI(n){return n!==null&&typeof n=="object"}/**
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
 */function Du(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(a=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Gl(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[a,o]=r.split("=");e[decodeURIComponent(a)]=decodeURIComponent(o)}}),e}function oh(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function sR(n,e){const t=new Yk(n,e);return t.subscribe.bind(t)}class Yk{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let a;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Xk(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:r},a.next===void 0&&(a.next=h_),a.error===void 0&&(a.error=h_),a.complete===void 0&&(a.complete=h_);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Xk(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function h_(){}/**
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
 */function Ie(n){return n&&n._delegate?n._delegate:n}class ci{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ro="[DEFAULT]";/**
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
 */class Zk{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new zk;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&r.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),a=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(a)return null;throw o}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(eV(e))try{this.getOrInitializeService({instanceIdentifier:ro})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:a});r.resolve(o)}catch{}}}}clearInstance(e=ro){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ro){return this.instances.has(e)}getOptions(e=ro){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[o,u]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(o);r===d&&u.resolve(a)}return a}onInit(e,t){var r;const a=this.normalizeInstanceIdentifier(t),o=(r=this.onInitCallbacks.get(a))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(a,o);const u=this.instances.get(a);return u&&e(u,a),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const a of r)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Jk(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ro){return this.component?this.component.multipleInstances?e:ro:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Jk(n){return n===ro?void 0:n}function eV(n){return n.instantiationMode==="EAGER"}/**
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
 */class aR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Zk(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const qv=[];var Ue;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Ue||(Ue={}));const oR={debug:Ue.DEBUG,verbose:Ue.VERBOSE,info:Ue.INFO,warn:Ue.WARN,error:Ue.ERROR,silent:Ue.SILENT},tV=Ue.INFO,nV={[Ue.DEBUG]:"log",[Ue.VERBOSE]:"log",[Ue.INFO]:"info",[Ue.WARN]:"warn",[Ue.ERROR]:"error"},rV=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),a=nV[e];if(a)console[a](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class gm{constructor(e){this.name=e,this._logLevel=tV,this._logHandler=rV,this._userLogHandler=null,qv.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?oR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ue.DEBUG,...e),this._logHandler(this,Ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ue.VERBOSE,...e),this._logHandler(this,Ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ue.INFO,...e),this._logHandler(this,Ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ue.WARN,...e),this._logHandler(this,Ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ue.ERROR,...e),this._logHandler(this,Ue.ERROR,...e)}}function iV(n){qv.forEach(e=>{e.setLogLevel(n)})}function sV(n,e){for(const t of qv){let r=null;e&&e.level&&(r=oR[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(a,o,...u)=>{const d=u.map(p=>{if(p==null)return null;if(typeof p=="string")return p;if(typeof p=="number"||typeof p=="boolean")return p.toString();if(p instanceof Error)return p.message;try{return JSON.stringify(p)}catch{return null}}).filter(p=>p).join(" ");o>=(r??a.logLevel)&&n({level:Ue[o].toLowerCase(),message:d,args:u,type:a.name})}}}const aV=(n,e)=>e.some(t=>n instanceof t);let iI,sI;function oV(){return iI||(iI=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function lV(){return sI||(sI=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const lR=new WeakMap,B_=new WeakMap,uR=new WeakMap,d_=new WeakMap,Hv=new WeakMap;function uV(n){const e=new Promise((t,r)=>{const a=()=>{n.removeEventListener("success",o),n.removeEventListener("error",u)},o=()=>{t(Js(n.result)),a()},u=()=>{r(n.error),a()};n.addEventListener("success",o),n.addEventListener("error",u)});return e.then(t=>{t instanceof IDBCursor&&lR.set(t,n)}).catch(()=>{}),Hv.set(e,n),e}function cV(n){if(B_.has(n))return;const e=new Promise((t,r)=>{const a=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",u),n.removeEventListener("abort",u)},o=()=>{t(),a()},u=()=>{r(n.error||new DOMException("AbortError","AbortError")),a()};n.addEventListener("complete",o),n.addEventListener("error",u),n.addEventListener("abort",u)});B_.set(n,e)}let z_={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return B_.get(n);if(e==="objectStoreNames")return n.objectStoreNames||uR.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Js(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function hV(n){z_=n(z_)}function dV(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(f_(this),e,...t);return uR.set(r,e.sort?e.sort():[e]),Js(r)}:lV().includes(n)?function(...e){return n.apply(f_(this),e),Js(lR.get(this))}:function(...e){return Js(n.apply(f_(this),e))}}function fV(n){return typeof n=="function"?dV(n):(n instanceof IDBTransaction&&cV(n),aV(n,oV())?new Proxy(n,z_):n)}function Js(n){if(n instanceof IDBRequest)return uV(n);if(d_.has(n))return d_.get(n);const e=fV(n);return e!==n&&(d_.set(n,e),Hv.set(e,n)),e}const f_=n=>Hv.get(n);function pV(n,e,{blocked:t,upgrade:r,blocking:a,terminated:o}={}){const u=indexedDB.open(n,e),d=Js(u);return r&&u.addEventListener("upgradeneeded",p=>{r(Js(u.result),p.oldVersion,p.newVersion,Js(u.transaction),p)}),t&&u.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),d.then(p=>{o&&p.addEventListener("close",()=>o()),a&&p.addEventListener("versionchange",m=>a(m.oldVersion,m.newVersion,m))}).catch(()=>{}),d}const mV=["get","getKey","getAll","getAllKeys","count"],gV=["put","add","delete","clear"],p_=new Map;function aI(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(p_.get(e))return p_.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,a=gV.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(a||mV.includes(t)))return;const o=async function(u,...d){const p=this.transaction(u,a?"readwrite":"readonly");let m=p.store;return r&&(m=m.index(d.shift())),(await Promise.all([m[t](...d),a&&p.done]))[0]};return p_.set(e,o),o}hV(n=>({...n,get:(e,t,r)=>aI(e,t)||n.get(e,t,r),has:(e,t)=>!!aI(e,t)||n.has(e,t)}));/**
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
 */class yV{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(_V(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function _V(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const kp="@firebase/app",F_="0.11.4";/**
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
 */const Wi=new gm("@firebase/app"),vV="@firebase/app-compat",EV="@firebase/analytics-compat",TV="@firebase/analytics",wV="@firebase/app-check-compat",bV="@firebase/app-check",IV="@firebase/auth",AV="@firebase/auth-compat",SV="@firebase/database",RV="@firebase/data-connect",CV="@firebase/database-compat",DV="@firebase/functions",xV="@firebase/functions-compat",PV="@firebase/installations",NV="@firebase/installations-compat",OV="@firebase/messaging",kV="@firebase/messaging-compat",VV="@firebase/performance",MV="@firebase/performance-compat",LV="@firebase/remote-config",UV="@firebase/remote-config-compat",BV="@firebase/storage",zV="@firebase/storage-compat",FV="@firebase/firestore",jV="@firebase/vertexai",qV="@firebase/firestore-compat",HV="firebase",GV="11.6.0";/**
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
 */const sa="[DEFAULT]",$V={[kp]:"fire-core",[vV]:"fire-core-compat",[TV]:"fire-analytics",[EV]:"fire-analytics-compat",[bV]:"fire-app-check",[wV]:"fire-app-check-compat",[IV]:"fire-auth",[AV]:"fire-auth-compat",[SV]:"fire-rtdb",[RV]:"fire-data-connect",[CV]:"fire-rtdb-compat",[DV]:"fire-fn",[xV]:"fire-fn-compat",[PV]:"fire-iid",[NV]:"fire-iid-compat",[OV]:"fire-fcm",[kV]:"fire-fcm-compat",[VV]:"fire-perf",[MV]:"fire-perf-compat",[LV]:"fire-rc",[UV]:"fire-rc-compat",[BV]:"fire-gcs",[zV]:"fire-gcs-compat",[FV]:"fire-fst",[qV]:"fire-fst-compat",[jV]:"fire-vertex","fire-js":"fire-js",[HV]:"fire-js-all"};/**
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
 */const aa=new Map,ru=new Map,iu=new Map;function Ph(n,e){try{n.container.addComponent(e)}catch(t){Wi.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function cR(n,e){n.container.addOrOverwriteComponent(e)}function oa(n){const e=n.name;if(iu.has(e))return Wi.debug(`There were multiple attempts to register component ${e}.`),!1;iu.set(e,n);for(const t of aa.values())Ph(t,n);for(const t of ru.values())Ph(t,n);return!0}function hR(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function KV(n,e,t=sa){hR(n,e).clearInstance(t)}function dR(n){return n.options!==void 0}function ft(n){return n==null?!1:n.settings!==void 0}function QV(){iu.clear()}/**
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
 */const WV={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Tr=new Vo("app","Firebase",WV);/**
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
 */let fR=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ci("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Tr.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oI(n,e){const t=Bv(n.split(".")[1]);if(t===null){console.error(`FirebaseServerApp ${e} is invalid: second part could not be parsed.`);return}if(JSON.parse(t).exp===void 0){console.error(`FirebaseServerApp ${e} is invalid: expiration claim could not be parsed`);return}const a=JSON.parse(t).exp*1e3,o=new Date().getTime();a-o<=0&&console.error(`FirebaseServerApp ${e} is invalid: the token has expired.`)}class YV extends fR{constructor(e,t,r,a){const o=t.automaticDataCollectionEnabled!==void 0?t.automaticDataCollectionEnabled:!1,u={name:r,automaticDataCollectionEnabled:o};if(e.apiKey!==void 0)super(e,u,a);else{const d=e;super(d.options,u,a)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:o},t),this._serverConfig.authIdToken&&oI(this._serverConfig.authIdToken,"authIdToken"),this._serverConfig.appCheckToken&&oI(this._serverConfig.appCheckToken,"appCheckToken"),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,t.releaseOnDeref=void 0,Or(kp,F_,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){$v(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw Tr.create("server-app-deleted")}}/**
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
 */const ya=GV;function Gv(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:sa,automaticDataCollectionEnabled:!1},e),a=r.name;if(typeof a!="string"||!a)throw Tr.create("bad-app-name",{appName:String(a)});if(t||(t=eR()),!t)throw Tr.create("no-options");const o=aa.get(a);if(o){if(ia(t,o.options)&&ia(r,o.config))return o;throw Tr.create("duplicate-app",{appName:a})}const u=new aR(a);for(const p of iu.values())u.addComponent(p);const d=new fR(t,r,u);return aa.set(a,d),d}function XV(n,e){if(qk()&&!tR())throw Tr.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let t;dR(n)?t=n.options:t=n;const r=Object.assign(Object.assign({},e),t);r.releaseOnDeref!==void 0&&delete r.releaseOnDeref;const a=m=>[...m].reduce((_,v)=>Math.imul(31,_)+v.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw Tr.create("finalization-registry-not-supported",{});const o=""+a(JSON.stringify(r)),u=ru.get(o);if(u)return u.incRefCount(e.releaseOnDeref),u;const d=new aR(o);for(const m of iu.values())d.addComponent(m);const p=new YV(t,e,o,d);return ru.set(o,p),p}function ZV(n=sa){const e=aa.get(n);if(!e&&n===sa&&eR())return Gv();if(!e)throw Tr.create("no-app",{appName:n});return e}function JV(){return Array.from(aa.values())}async function $v(n){let e=!1;const t=n.name;aa.has(t)?(e=!0,aa.delete(t)):ru.has(t)&&n.decRefCount()<=0&&(ru.delete(t),e=!0),e&&(await Promise.all(n.container.getProviders().map(r=>r.delete())),n.isDeleted=!0)}function Or(n,e,t){var r;let a=(r=$V[n])!==null&&r!==void 0?r:n;t&&(a+=`-${t}`);const o=a.match(/\s|\//),u=e.match(/\s|\//);if(o||u){const d=[`Unable to register library "${a}" with version "${e}":`];o&&d.push(`library name "${a}" contains illegal characters (whitespace or "/")`),o&&u&&d.push("and"),u&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Wi.warn(d.join(" "));return}oa(new ci(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}function pR(n,e){if(n!==null&&typeof n!="function")throw Tr.create("invalid-log-argument");sV(n,e)}function mR(n){iV(n)}/**
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
 */const eM="firebase-heartbeat-database",tM=1,Nh="firebase-heartbeat-store";let m_=null;function gR(){return m_||(m_=pV(eM,tM,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Nh)}catch(t){console.warn(t)}}}}).catch(n=>{throw Tr.create("idb-open",{originalErrorMessage:n.message})})),m_}async function nM(n){try{const t=(await gR()).transaction(Nh),r=await t.objectStore(Nh).get(yR(n));return await t.done,r}catch(e){if(e instanceof kn)Wi.warn(e.message);else{const t=Tr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Wi.warn(t.message)}}}async function lI(n,e){try{const r=(await gR()).transaction(Nh,"readwrite");await r.objectStore(Nh).put(e,yR(n)),await r.done}catch(t){if(t instanceof kn)Wi.warn(t.message);else{const r=Tr.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Wi.warn(r.message)}}}function yR(n){return`${n.name}!${n.options.appId}`}/**
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
 */const rM=1024,iM=30;class sM{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new oM(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=uI();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(u=>u.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:a}),this._heartbeatsCache.heartbeats.length>iM){const u=lM(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Wi.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=uI(),{heartbeatsToSend:r,unsentEntries:a}=aM(this._heartbeatsCache.heartbeats),o=Np(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return Wi.warn(t),""}}}function uI(){return new Date().toISOString().substring(0,10)}function aM(n,e=rM){const t=[];let r=n.slice();for(const a of n){const o=t.find(u=>u.agent===a.agent);if(o){if(o.dates.push(a.date),cI(t)>e){o.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),cI(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class oM{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xh()?Gk().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await nM(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return lI(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return lI(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function cI(n){return Np(JSON.stringify({version:2,heartbeats:n})).length}function lM(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function uM(n){oa(new ci("platform-logger",e=>new yV(e),"PRIVATE")),oa(new ci("heartbeat",e=>new sM(e),"PRIVATE")),Or(kp,F_,n),Or(kp,F_,"esm2017"),Or("fire-js","")}uM("");const cM=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:kn,SDK_VERSION:ya,_DEFAULT_ENTRY_NAME:sa,_addComponent:Ph,_addOrOverwriteComponent:cR,_apps:aa,_clearComponents:QV,_components:iu,_getProvider:hR,_isFirebaseApp:dR,_isFirebaseServerApp:ft,_registerComponent:oa,_removeServiceInstance:KV,_serverApps:ru,deleteApp:$v,getApp:ZV,getApps:JV,initializeApp:Gv,initializeServerApp:XV,onLog:pR,registerVersion:Or,setLogLevel:mR},Symbol.toStringTag,{value:"Module"}));/**
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
 */class hM{constructor(e,t){this._delegate=e,this.firebase=t,Ph(e,new ci("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),$v(this._delegate)))}_getService(e,t=sa){var r;this._delegate.checkDestroyed();const a=this._delegate.container.getProvider(e);return!a.isInitialized()&&((r=a.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&a.initialize(),a.getImmediate({identifier:t})}_removeServiceInstance(e,t=sa){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Ph(this._delegate,e)}_addOrOverwriteComponent(e){cR(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const dM={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},hI=new Vo("app-compat","Firebase",dM);/**
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
 */function fM(n){const e={},t={__esModule:!0,initializeApp:o,app:a,registerVersion:Or,setLogLevel:mR,onLog:pR,apps:null,SDK_VERSION:ya,INTERNAL:{registerComponent:d,removeApp:r,useAsService:p,modularAPIs:cM}};t.default=t,Object.defineProperty(t,"apps",{get:u});function r(m){delete e[m]}function a(m){if(m=m||sa,!nI(e,m))throw hI.create("no-app",{appName:m});return e[m]}a.App=n;function o(m,_={}){const v=Gv(m,_);if(nI(e,v.name))return e[v.name];const w=new n(v,t);return e[v.name]=w,w}function u(){return Object.keys(e).map(m=>e[m])}function d(m){const _=m.name,v=_.replace("-compat","");if(oa(m)&&m.type==="PUBLIC"){const w=(S=a())=>{if(typeof S[v]!="function")throw hI.create("invalid-app-argument",{appName:_});return S[v]()};m.serviceProps!==void 0&&Op(w,m.serviceProps),t[v]=w,n.prototype[v]=function(...S){return this._getService.bind(this,_).apply(this,m.multipleInstances?S:[])}}return m.type==="PUBLIC"?t[v]:null}function p(m,_){return _==="serverAuth"?null:_}return t}/**
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
 */function _R(){const n=fM(hM);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:_R,extendNamespace:e,createSubscribe:sR,ErrorFactory:Vo,deepExtend:Op});function e(t){Op(n,t)}return n}const pM=_R();/**
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
 */const dI=new gm("@firebase/app-compat"),mM="@firebase/app-compat",gM="0.2.53";/**
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
 */function yM(n){Or(mM,gM,n)}/**
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
 */try{const n=JS();if(n.firebase!==void 0){dI.warn(`
      Warning: Firebase is already defined in the global scope. Please make sure
      Firebase library is only loaded once.
    `);const e=n.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&dI.warn(`
        Warning: You are trying to load Firebase while using Firebase Performance standalone script.
        You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
        `)}}catch{}const xu=pM;yM();var _M="firebase",vM="11.6.0";/**
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
 */xu.registerVersion(_M,vM,"app-compat");const Xc={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",TWITTER:"twitter.com"},Nl={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function EM(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements.","invalid-hosting-link-domain":"The provided Hosting link domain is not configured in Firebase Hosting or is not owned by the current project. This cannot be a default Hosting domain (`web.app` or `firebaseapp.com`)."}}function vR(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const TM=EM,wM=vR,ER=new Vo("auth","Firebase",vR());/**
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
 */const Vp=new gm("@firebase/auth");function bM(n,...e){Vp.logLevel<=Ue.WARN&&Vp.warn(`Auth (${ya}): ${n}`,...e)}function dp(n,...e){Vp.logLevel<=Ue.ERROR&&Vp.error(`Auth (${ya}): ${n}`,...e)}/**
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
 */function vn(n,...e){throw Qv(n,...e)}function Xt(n,...e){return Qv(n,...e)}function Kv(n,e,t){const r=Object.assign(Object.assign({},wM()),{[e]:t});return new Vo("auth","Firebase",r).create(e,{appName:n.name})}function hn(n){return Kv(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Pu(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&vn(n,"argument-error"),Kv(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Qv(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return ER.create(n,...e)}function se(n,e,...t){if(!n)throw Qv(e,...t)}function ii(n){const e="INTERNAL ASSERTION FAILED: "+n;throw dp(e),new Error(e)}function kr(n,e){n||ii(e)}/**
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
 */function Oh(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Wv(){return fI()==="http:"||fI()==="https:"}function fI(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function IM(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Wv()||nR()||"connection"in navigator)?navigator.onLine:!0}function AM(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class id{constructor(e,t){this.shortDelay=e,this.longDelay=t,kr(t>e,"Short delay should be less than long delay!"),this.isMobile=jk()||jv()}get(){return IM()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Yv(n,e){kr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class TR{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ii("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ii("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ii("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const SM={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const RM=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],CM=new id(3e4,6e4);function xt(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Pt(n,e,t,r,a={}){return wR(n,a,async()=>{let o={},u={};r&&(e==="GET"?u=r:o={body:JSON.stringify(r)});const d=Du(Object.assign({key:n.config.apiKey},u)).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const m=Object.assign({method:e,headers:p},o);return Hk()||(m.referrerPolicy="no-referrer"),TR.fetch()(await bR(n,n.config.apiHost,t,d),m)})}async function wR(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},SM),e);try{const a=new xM(n),o=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const u=await o.json();if("needConfirmation"in u)throw lh(n,"account-exists-with-different-credential",u);if(o.ok&&!("errorMessage"in u))return u;{const d=o.ok?u.errorMessage:u.error.message,[p,m]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw lh(n,"credential-already-in-use",u);if(p==="EMAIL_EXISTS")throw lh(n,"email-already-in-use",u);if(p==="USER_DISABLED")throw lh(n,"user-disabled",u);const _=r[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw Kv(n,_,m);vn(n,_)}}catch(a){if(a instanceof kn)throw a;vn(n,"network-request-failed",{message:String(a)})}}async function es(n,e,t,r,a={}){const o=await Pt(n,e,t,r,a);return"mfaPendingCredential"in o&&vn(n,"multi-factor-auth-required",{_serverResponse:o}),o}async function bR(n,e,t,r){const a=`${e}${t}?${r}`,o=n,u=o.config.emulator?Yv(n.config,a):`${n.config.apiScheme}://${a}`;return RM.includes(t)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(u).toString():u}function DM(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class xM{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Xt(this.auth,"network-request-failed")),CM.get())})}}function lh(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const a=Xt(n,e,r);return a.customData._tokenResponse=t,a}/**
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
 */function pI(n){return n!==void 0&&n.getResponse!==void 0}function mI(n){return n!==void 0&&n.enterprise!==void 0}class IR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return DM(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
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
 */async function PM(n){return(await Pt(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function AR(n,e){return Pt(n,"GET","/v2/recaptchaConfig",xt(n,e))}/**
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
 */async function NM(n,e){return Pt(n,"POST","/v1/accounts:delete",e)}async function OM(n,e){return Pt(n,"POST","/v1/accounts:update",e)}async function Mp(n,e){return Pt(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function mh(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function kM(n,e=!1){const t=Ie(n),r=await t.getIdToken(e),a=ym(r);se(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const o=typeof a.firebase=="object"?a.firebase:void 0,u=o==null?void 0:o.sign_in_provider;return{claims:a,token:r,authTime:mh(g_(a.auth_time)),issuedAtTime:mh(g_(a.iat)),expirationTime:mh(g_(a.exp)),signInProvider:u||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function g_(n){return Number(n)*1e3}function ym(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return dp("JWT malformed, contained fewer than 3 sections"),null;try{const a=Bv(t);return a?JSON.parse(a):(dp("Failed to decode base64 JWT payload"),null)}catch(a){return dp("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function gI(n){const e=ym(n);return se(e,"internal-error"),se(typeof e.exp<"u","internal-error"),se(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Yi(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof kn&&VM(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function VM({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class MM{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const a=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class j_{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=mh(this.lastLoginAt),this.creationTime=mh(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function kh(n){var e;const t=n.auth,r=await n.getIdToken(),a=await Yi(n,Mp(t,{idToken:r}));se(a==null?void 0:a.users.length,t,"internal-error");const o=a.users[0];n._notifyReloadListener(o);const u=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?SR(o.providerUserInfo):[],d=UM(n.providerData,u),p=n.isAnonymous,m=!(n.email&&o.passwordHash)&&!(d!=null&&d.length),_=p?m:!1,v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:d,metadata:new j_(o.createdAt,o.lastLoginAt),isAnonymous:_};Object.assign(n,v)}async function LM(n){const e=Ie(n);await kh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function UM(n,e){return[...n.filter(r=>!e.some(a=>a.providerId===r.providerId)),...e]}function SR(n){return n.map(e=>{var{providerId:t}=e,r=Nv(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function BM(n,e){const t=await wR(n,{},async()=>{const r=Du({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:o}=n.config,u=await bR(n,a,"/v1/token",`key=${o}`),d=await n._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",TR.fetch()(u,{method:"POST",headers:d,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function zM(n,e){return Pt(n,"POST","/v2/accounts:revokeToken",xt(n,e))}/**
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
 */class $l{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){se(e.idToken,"internal-error"),se(typeof e.idToken<"u","internal-error"),se(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):gI(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){se(e.length!==0,"internal-error");const t=gI(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(se(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:a,expiresIn:o}=await BM(e,t);this.updateTokensAndExpiration(r,a,Number(o))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:a,expirationTime:o}=t,u=new $l;return r&&(se(typeof r=="string","internal-error",{appName:e}),u.refreshToken=r),a&&(se(typeof a=="string","internal-error",{appName:e}),u.accessToken=a),o&&(se(typeof o=="number","internal-error",{appName:e}),u.expirationTime=o),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $l,this.toJSON())}_performRefresh(){return ii("not implemented")}}/**
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
 */function qs(n,e){se(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Pr{constructor(e){var{uid:t,auth:r,stsTokenManager:a}=e,o=Nv(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new MM(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new j_(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await Yi(this,this.stsTokenManager.getToken(this.auth,e));return se(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return kM(this,e)}reload(){return LM(this)}_assign(e){this!==e&&(se(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Pr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){se(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await kh(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ft(this.auth.app))return Promise.reject(hn(this.auth));const e=await this.getIdToken();return await Yi(this,NM(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,a,o,u,d,p,m,_;const v=(r=t.displayName)!==null&&r!==void 0?r:void 0,w=(a=t.email)!==null&&a!==void 0?a:void 0,S=(o=t.phoneNumber)!==null&&o!==void 0?o:void 0,x=(u=t.photoURL)!==null&&u!==void 0?u:void 0,U=(d=t.tenantId)!==null&&d!==void 0?d:void 0,M=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,H=(m=t.createdAt)!==null&&m!==void 0?m:void 0,$=(_=t.lastLoginAt)!==null&&_!==void 0?_:void 0,{uid:K,emailVerified:oe,isAnonymous:ae,providerData:le,stsTokenManager:D}=t;se(K&&D,e,"internal-error");const R=$l.fromJSON(this.name,D);se(typeof K=="string",e,"internal-error"),qs(v,e.name),qs(w,e.name),se(typeof oe=="boolean",e,"internal-error"),se(typeof ae=="boolean",e,"internal-error"),qs(S,e.name),qs(x,e.name),qs(U,e.name),qs(M,e.name),qs(H,e.name),qs($,e.name);const A=new Pr({uid:K,auth:e,email:w,emailVerified:oe,displayName:v,isAnonymous:ae,photoURL:x,phoneNumber:S,tenantId:U,stsTokenManager:R,createdAt:H,lastLoginAt:$});return le&&Array.isArray(le)&&(A.providerData=le.map(P=>Object.assign({},P))),M&&(A._redirectEventId=M),A}static async _fromIdTokenResponse(e,t,r=!1){const a=new $l;a.updateFromServerResponse(t);const o=new Pr({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:r});return await kh(o),o}static async _fromGetAccountInfoResponse(e,t,r){const a=t.users[0];se(a.localId!==void 0,"internal-error");const o=a.providerUserInfo!==void 0?SR(a.providerUserInfo):[],u=!(a.email&&a.passwordHash)&&!(o!=null&&o.length),d=new $l;d.updateFromIdToken(r);const p=new Pr({uid:a.localId,auth:e,stsTokenManager:d,isAnonymous:u}),m={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:o,metadata:new j_(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(o!=null&&o.length)};return Object.assign(p,m),p}}/**
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
 */const yI=new Map;function tr(n){kr(n instanceof Function,"Expected a class definition");let e=yI.get(n);return e?(kr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,yI.set(n,e),e)}/**
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
 */class RR{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}RR.type="NONE";const su=RR;/**
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
 */function vo(n,e,t){return`firebase:${n}:${e}:${t}`}class Kl{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:a,name:o}=this.auth;this.fullUserKey=vo(this.userKey,a.apiKey,o),this.fullPersistenceKey=vo("persistence",a.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Mp(this.auth,{idToken:e}).catch(()=>{});return t?Pr._fromGetAccountInfoResponse(this.auth,t,e):null}return Pr._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Kl(tr(su),e,r);const a=(await Promise.all(t.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let o=a[0]||tr(su);const u=vo(r,e.config.apiKey,e.name);let d=null;for(const m of t)try{const _=await m._get(u);if(_){let v;if(typeof _=="string"){const w=await Mp(e,{idToken:_}).catch(()=>{});if(!w)break;v=await Pr._fromGetAccountInfoResponse(e,w,_)}else v=Pr._fromJSON(e,_);m!==o&&(d=v),o=m;break}}catch{}const p=a.filter(m=>m._shouldAllowMigration);return!o._shouldAllowMigration||!p.length?new Kl(o,e,r):(o=p[0],d&&await o._set(u,d.toJSON()),await Promise.all(t.map(async m=>{if(m!==o)try{await m._remove(u)}catch{}})),new Kl(o,e,r))}}/**
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
 */function _I(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(PR(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(CR(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(NR(e))return"Blackberry";if(OR(e))return"Webos";if(DR(e))return"Safari";if((e.includes("chrome/")||xR(e))&&!e.includes("edge/"))return"Chrome";if(sd(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function CR(n=wt()){return/firefox\//i.test(n)}function DR(n=wt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function xR(n=wt()){return/crios\//i.test(n)}function PR(n=wt()){return/iemobile/i.test(n)}function sd(n=wt()){return/android/i.test(n)}function NR(n=wt()){return/blackberry/i.test(n)}function OR(n=wt()){return/webos/i.test(n)}function ad(n=wt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function FM(n=wt()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(n)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(n)}function jM(n=wt()){var e;return ad(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function qM(){return rR()&&document.documentMode===10}function kR(n=wt()){return ad(n)||sd(n)||OR(n)||NR(n)||/windows phone/i.test(n)||PR(n)}/**
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
 */function VR(n,e=[]){let t;switch(n){case"Browser":t=_I(wt());break;case"Worker":t=`${_I(wt())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ya}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HM{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=o=>new Promise((u,d)=>{try{const p=e(o);u(p)}catch(p){d(p)}});r.onAbort=t,this.queue.push(r);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GM(n,e={}){return Pt(n,"GET","/v2/passwordPolicy",xt(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $M=6;class KM{constructor(e){var t,r,a,o;const u=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=u.minPasswordLength)!==null&&t!==void 0?t:$M,u.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=u.maxPasswordLength),u.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=u.containsLowercaseCharacter),u.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=u.containsUppercaseCharacter),u.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=u.containsNumericCharacter),u.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=u.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(a=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&a!==void 0?a:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,a,o,u,d;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(r=p.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),p.isValid&&(p.isValid=(a=p.containsLowercaseLetter)!==null&&a!==void 0?a:!0),p.isValid&&(p.isValid=(o=p.containsUppercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(u=p.containsNumericCharacter)!==null&&u!==void 0?u:!0),p.isValid&&(p.isValid=(d=p.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),p}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let a=0;a<e.length;a++)r=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,a,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
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
 */class QM{constructor(e,t,r,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new vI(this),this.idTokenSubscription=new vI(this),this.beforeStateQueue=new HM(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ER,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=tr(t)),this._initializationPromise=this.queue(async()=>{var r,a,o;if(!this._deleted&&(this.persistenceManager=await Kl.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((a=this._popupRedirectResolver)===null||a===void 0)&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Mp(this,{idToken:e}),r=await Pr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(ft(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(d,d))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let a=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=a==null?void 0:a._redirectEventId,p=await this.tryRedirectSignIn(e);(!u||u===d)&&(p!=null&&p.user)&&(a=p.user,o=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(a)}catch(u){a=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return se(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await kh(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=AM()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ft(this.app))return Promise.reject(hn(this));const t=e?Ie(e):null;return t&&se(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&se(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ft(this.app)?Promise.reject(hn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ft(this.app)?Promise.reject(hn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(tr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await GM(this),t=new KM(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Vo("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await zM(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&tr(e)||this._popupRedirectResolver;se(t,this,"argument-error"),this.redirectPersistenceManager=await Kl.create(this,[tr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,a){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t);let u=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(se(d,this,"internal-error"),d.then(()=>{u||o(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,r,a);return()=>{u=!0,p()}}else{const p=e.addObserver(t);return()=>{u=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return se(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=VR(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const a=await this._getAppCheckToken();return a&&(t["X-Firebase-AppCheck"]=a),t}async _getAppCheckToken(){var e;if(ft(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&bM(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function bt(n){return Ie(n)}class vI{constructor(e){this.auth=e,this.observer=null,this.addObserver=sR(t=>this.observer=t)}get next(){return se(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let od={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function WM(n){od=n}function Xv(n){return od.loadJS(n)}function YM(){return od.recaptchaV2Script}function XM(){return od.recaptchaEnterpriseScript}function ZM(){return od.gapiScript}function MR(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */const JM=500,e2=6e4,Yf=1e12;class t2{constructor(e){this.auth=e,this.counter=Yf,this._widgets=new Map}render(e,t){const r=this.counter;return this._widgets.set(r,new i2(e,this.auth.name,t||{})),this.counter++,r}reset(e){var t;const r=e||Yf;(t=this._widgets.get(r))===null||t===void 0||t.delete(),this._widgets.delete(r)}getResponse(e){var t;const r=e||Yf;return((t=this._widgets.get(r))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const r=e||Yf;return(t=this._widgets.get(r))===null||t===void 0||t.execute(),""}}class n2{constructor(){this.enterprise=new r2}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class r2{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class i2{constructor(e,t,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const a=typeof e=="string"?document.getElementById(e):e;se(a,"argument-error",{appName:t}),this.container=a,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=s2(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},e2)},JM))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function s2(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<n;r++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}const a2="recaptcha-enterprise",gh="NO_RECAPTCHA";class LR{constructor(e){this.type=a2,this.auth=bt(e)}async verify(e="verify",t=!1){async function r(o){if(!t){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(u,d)=>{AR(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const m=new IR(p);return o.tenantId==null?o._agentRecaptchaConfig=m:o._tenantRecaptchaConfigs[o.tenantId]=m,u(m.siteKey)}}).catch(p=>{d(p)})})}function a(o,u,d){const p=window.grecaptcha;mI(p)?p.enterprise.ready(()=>{p.enterprise.execute(o,{action:e}).then(m=>{u(m)}).catch(()=>{u(gh)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new n2().execute("siteKey",{action:"verify"}):new Promise((o,u)=>{r(this.auth).then(d=>{if(!t&&mI(window.grecaptcha))a(d,o,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let p=XM();p.length!==0&&(p+=d),Xv(p).then(()=>{a(d,o,u)}).catch(m=>{u(m)})}}).catch(d=>{u(d)})})}}async function Zc(n,e,t,r=!1,a=!1){const o=new LR(n);let u;if(a)u=gh;else try{u=await o.verify(t)}catch{u=await o.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const p=d.phoneEnrollmentInfo.phoneNumber,m=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:m,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const p=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return r?Object.assign(d,{captchaResp:u}):Object.assign(d,{captchaResponse:u}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function ea(n,e,t,r,a){var o,u;if(a==="EMAIL_PASSWORD_PROVIDER")if(!((o=n._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const d=await Zc(n,e,t,t==="getOobCode");return r(n,d)}else return r(n,e).catch(async d=>{if(d.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const p=await Zc(n,e,t,t==="getOobCode");return r(n,p)}else return Promise.reject(d)});else if(a==="PHONE_PROVIDER")if(!((u=n._getRecaptchaConfig())===null||u===void 0)&&u.isProviderEnabled("PHONE_PROVIDER")){const d=await Zc(n,e,t);return r(n,d).catch(async p=>{var m;if(((m=n._getRecaptchaConfig())===null||m===void 0?void 0:m.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(p.code==="auth/missing-recaptcha-token"||p.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);const _=await Zc(n,e,t,!1,!0);return r(n,_)}return Promise.reject(p)})}else{const d=await Zc(n,e,t,!1,!0);return r(n,d)}else return Promise.reject(a+" provider is not supported.")}async function o2(n){const e=bt(n),t=await AR(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new IR(t);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new LR(e).verify()}function l2(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(tr);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function u2(n,e,t){const r=bt(n);se(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const a=!!(t!=null&&t.disableWarnings),o=UR(e),{host:u,port:d}=c2(e),p=d===null?"":`:${d}`,m={url:`${o}//${u}${p}/`},_=Object.freeze({host:u,port:d,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!r._canInitEmulator){se(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),se(ia(m,r.config.emulator)&&ia(_,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=m,r.emulatorConfig=_,r.settings.appVerificationDisabledForTesting=!0,a||h2()}function UR(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function c2(n){const e=UR(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(r);if(a){const o=a[1];return{host:o,port:EI(r.substr(o.length+1))}}else{const[o,u]=r.split(":");return{host:o,port:EI(u)}}}function EI(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function h2(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Nu{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ii("not implemented")}_getIdTokenResponse(e){return ii("not implemented")}_linkToIdToken(e,t){return ii("not implemented")}_getReauthenticationResolver(e){return ii("not implemented")}}/**
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
 */async function BR(n,e){return Pt(n,"POST","/v1/accounts:resetPassword",xt(n,e))}async function d2(n,e){return Pt(n,"POST","/v1/accounts:update",e)}async function f2(n,e){return Pt(n,"POST","/v1/accounts:signUp",e)}async function p2(n,e){return Pt(n,"POST","/v1/accounts:update",xt(n,e))}/**
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
 */async function m2(n,e){return es(n,"POST","/v1/accounts:signInWithPassword",xt(n,e))}async function _m(n,e){return Pt(n,"POST","/v1/accounts:sendOobCode",xt(n,e))}async function g2(n,e){return _m(n,e)}async function y2(n,e){return _m(n,e)}async function _2(n,e){return _m(n,e)}async function v2(n,e){return _m(n,e)}/**
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
 */async function E2(n,e){return es(n,"POST","/v1/accounts:signInWithEmailLink",xt(n,e))}async function T2(n,e){return es(n,"POST","/v1/accounts:signInWithEmailLink",xt(n,e))}/**
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
 */class Vh extends Nu{constructor(e,t,r,a=null){super("password",r),this._email=e,this._password=t,this._tenantId=a}static _fromEmailAndPassword(e,t){return new Vh(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Vh(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ea(e,t,"signInWithPassword",m2,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return E2(e,{email:this._email,oobCode:this._password});default:vn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ea(e,r,"signUpPassword",f2,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return T2(e,{idToken:t,email:this._email,oobCode:this._password});default:vn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ki(n,e){return es(n,"POST","/v1/accounts:signInWithIdp",xt(n,e))}/**
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
 */const w2="http://localhost";class hi extends Nu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new hi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):vn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:a}=t,o=Nv(t,["providerId","signInMethod"]);if(!r||!a)return null;const u=new hi(r,a);return u.idToken=o.idToken||void 0,u.accessToken=o.accessToken||void 0,u.secret=o.secret,u.nonce=o.nonce,u.pendingToken=o.pendingToken||null,u}_getIdTokenResponse(e){const t=this.buildRequest();return Ki(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Ki(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ki(e,t)}buildRequest(){const e={requestUri:w2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Du(t)}return e}}/**
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
 */async function TI(n,e){return Pt(n,"POST","/v1/accounts:sendVerificationCode",xt(n,e))}async function b2(n,e){return es(n,"POST","/v1/accounts:signInWithPhoneNumber",xt(n,e))}async function I2(n,e){const t=await es(n,"POST","/v1/accounts:signInWithPhoneNumber",xt(n,e));if(t.temporaryProof)throw lh(n,"account-exists-with-different-credential",t);return t}const A2={USER_NOT_FOUND:"user-not-found"};async function S2(n,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return es(n,"POST","/v1/accounts:signInWithPhoneNumber",xt(n,t),A2)}/**
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
 */class Eo extends Nu{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Eo({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Eo({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return b2(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return I2(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return S2(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:a}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:a}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:r,phoneNumber:a,temporaryProof:o}=e;return!r&&!t&&!a&&!o?null:new Eo({verificationId:t,verificationCode:r,phoneNumber:a,temporaryProof:o})}}/**
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
 */function R2(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function C2(n){const e=Gl(oh(n)).link,t=e?Gl(oh(e)).deep_link_id:null,r=Gl(oh(n)).deep_link_id;return(r?Gl(oh(r)).link:null)||r||t||e||n}class vm{constructor(e){var t,r,a,o,u,d;const p=Gl(oh(e)),m=(t=p.apiKey)!==null&&t!==void 0?t:null,_=(r=p.oobCode)!==null&&r!==void 0?r:null,v=R2((a=p.mode)!==null&&a!==void 0?a:null);se(m&&_&&v,"argument-error"),this.apiKey=m,this.operation=v,this.code=_,this.continueUrl=(o=p.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(u=p.languageCode)!==null&&u!==void 0?u:null,this.tenantId=(d=p.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=C2(e);try{return new vm(t)}catch{return null}}}/**
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
 */class _a{constructor(){this.providerId=_a.PROVIDER_ID}static credential(e,t){return Vh._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=vm.parseLink(t);return se(r,"argument-error"),Vh._fromEmailAndCode(e,r.code,r.tenantId)}}_a.PROVIDER_ID="password";_a.EMAIL_PASSWORD_SIGN_IN_METHOD="password";_a.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ts{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ou extends ts{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Ql extends Ou{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return se("providerId"in t&&"signInMethod"in t,"argument-error"),hi._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return se(e.idToken||e.accessToken,"argument-error"),hi._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Ql.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Ql.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r,oauthTokenSecret:a,pendingToken:o,nonce:u,providerId:d}=e;if(!r&&!a&&!t&&!o||!d)return null;try{return new Ql(d)._credential({idToken:t,accessToken:r,nonce:u,pendingToken:o})}catch{return null}}}/**
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
 */class ei extends Ou{constructor(){super("facebook.com")}static credential(e){return hi._fromParams({providerId:ei.PROVIDER_ID,signInMethod:ei.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ei.credentialFromTaggedObject(e)}static credentialFromError(e){return ei.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ei.credential(e.oauthAccessToken)}catch{return null}}}ei.FACEBOOK_SIGN_IN_METHOD="facebook.com";ei.PROVIDER_ID="facebook.com";/**
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
 */class ti extends Ou{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return hi._fromParams({providerId:ti.PROVIDER_ID,signInMethod:ti.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ti.credentialFromTaggedObject(e)}static credentialFromError(e){return ti.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return ti.credential(t,r)}catch{return null}}}ti.GOOGLE_SIGN_IN_METHOD="google.com";ti.PROVIDER_ID="google.com";/**
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
 */class ni extends Ou{constructor(){super("github.com")}static credential(e){return hi._fromParams({providerId:ni.PROVIDER_ID,signInMethod:ni.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ni.credentialFromTaggedObject(e)}static credentialFromError(e){return ni.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ni.credential(e.oauthAccessToken)}catch{return null}}}ni.GITHUB_SIGN_IN_METHOD="github.com";ni.PROVIDER_ID="github.com";/**
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
 */const D2="http://localhost";class au extends Nu{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Ki(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Ki(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ki(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:a,pendingToken:o}=t;return!r||!a||!o||r!==a?null:new au(r,o)}static _create(e,t){return new au(e,t)}buildRequest(){return{requestUri:D2,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const x2="saml.";class Lp extends ts{constructor(e){se(e.startsWith(x2),"argument-error"),super(e)}static credentialFromResult(e){return Lp.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Lp.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=au.fromJSON(e);return se(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:r}=e;if(!t||!r)return null;try{return au._create(r,t)}catch{return null}}}/**
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
 */class ri extends Ou{constructor(){super("twitter.com")}static credential(e,t){return hi._fromParams({providerId:ri.PROVIDER_ID,signInMethod:ri.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ri.credentialFromTaggedObject(e)}static credentialFromError(e){return ri.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return ri.credential(t,r)}catch{return null}}}ri.TWITTER_SIGN_IN_METHOD="twitter.com";ri.PROVIDER_ID="twitter.com";/**
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
 */async function zR(n,e){return es(n,"POST","/v1/accounts:signUp",xt(n,e))}/**
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
 */class br{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,a=!1){const o=await Pr._fromIdTokenResponse(e,r,a),u=wI(r);return new br({user:o,providerId:u,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const a=wI(r);return new br({user:e,providerId:a,_tokenResponse:r,operationType:t})}}function wI(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */async function P2(n){var e;if(ft(n.app))return Promise.reject(hn(n));const t=bt(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new br({user:t.currentUser,providerId:null,operationType:"signIn"});const r=await zR(t,{returnSecureToken:!0}),a=await br._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(a.user),a}/**
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
 */class Up extends kn{constructor(e,t,r,a){var o;super(t.code,t.message),this.operationType=r,this.user=a,Object.setPrototypeOf(this,Up.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,a){return new Up(e,t,r,a)}}function FR(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Up._fromErrorAndOperation(n,o,e,r):o})}/**
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
 */function jR(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function N2(n,e){const t=Ie(n);await Em(!0,t,e);const{providerUserInfo:r}=await OM(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),a=jR(r||[]);return t.providerData=t.providerData.filter(o=>a.has(o.providerId)),a.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function Zv(n,e,t=!1){const r=await Yi(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return br._forOperation(n,"link",r)}async function Em(n,e,t){await kh(e);const r=jR(e.providerData),a=n===!1?"provider-already-linked":"no-such-provider";se(r.has(t)===n,e.auth,a)}/**
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
 */async function qR(n,e,t=!1){const{auth:r}=n;if(ft(r.app))return Promise.reject(hn(r));const a="reauthenticate";try{const o=await Yi(n,FR(r,a,e,n),t);se(o.idToken,r,"internal-error");const u=ym(o.idToken);se(u,r,"internal-error");const{sub:d}=u;return se(n.uid===d,r,"user-mismatch"),br._forOperation(n,a,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&vn(r,"user-mismatch"),o}}/**
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
 */async function HR(n,e,t=!1){if(ft(n.app))return Promise.reject(hn(n));const r="signIn",a=await FR(n,r,e),o=await br._fromIdTokenResponse(n,r,a);return t||await n._updateCurrentUser(o.user),o}async function Tm(n,e){return HR(bt(n),e)}async function GR(n,e){const t=Ie(n);return await Em(!1,t,e.providerId),Zv(t,e)}async function $R(n,e){return qR(Ie(n),e)}/**
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
 */async function O2(n,e){return es(n,"POST","/v1/accounts:signInWithCustomToken",xt(n,e))}/**
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
 */async function k2(n,e){if(ft(n.app))return Promise.reject(hn(n));const t=bt(n),r=await O2(t,{token:e,returnSecureToken:!0}),a=await br._fromIdTokenResponse(t,"signIn",r);return await t._updateCurrentUser(a.user),a}/**
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
 */class ld{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Jv._fromServerResponse(e,t):"totpInfo"in t?eE._fromServerResponse(e,t):vn(e,"internal-error")}}class Jv extends ld{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Jv(t)}}class eE extends ld{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new eE(t)}}/**
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
 */function wm(n,e,t){var r;se(((r=t.url)===null||r===void 0?void 0:r.length)>0,n,"invalid-continue-uri"),se(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),se(typeof t.linkDomain>"u"||t.linkDomain.length>0,n,"invalid-hosting-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.linkDomain=t.linkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(se(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(se(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
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
 */async function tE(n){const e=bt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function V2(n,e,t){const r=bt(n),a={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&wm(r,a,t),await ea(r,a,"getOobCode",y2,"EMAIL_PASSWORD_PROVIDER")}async function M2(n,e,t){await BR(Ie(n),{oobCode:e,newPassword:t}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&tE(n),r})}async function L2(n,e){await p2(Ie(n),{oobCode:e})}async function KR(n,e){const t=Ie(n),r=await BR(t,{oobCode:e}),a=r.requestType;switch(se(a,t,"internal-error"),a){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":se(r.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":se(r.mfaInfo,t,"internal-error");default:se(r.email,t,"internal-error")}let o=null;return r.mfaInfo&&(o=ld._fromServerResponse(bt(t),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:o},operation:a}}async function U2(n,e){const{data:t}=await KR(Ie(n),e);return t.email}async function B2(n,e,t){if(ft(n.app))return Promise.reject(hn(n));const r=bt(n),u=await ea(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",zR,"EMAIL_PASSWORD_PROVIDER").catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&tE(n),p}),d=await br._fromIdTokenResponse(r,"signIn",u);return await r._updateCurrentUser(d.user),d}function z2(n,e,t){return ft(n.app)?Promise.reject(hn(n)):Tm(Ie(n),_a.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&tE(n),r})}/**
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
 */async function F2(n,e,t){const r=bt(n),a={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function o(u,d){se(d.handleCodeInApp,r,"argument-error"),d&&wm(r,u,d)}o(a,t),await ea(r,a,"getOobCode",_2,"EMAIL_PASSWORD_PROVIDER")}function j2(n,e){const t=vm.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function q2(n,e,t){if(ft(n.app))return Promise.reject(hn(n));const r=Ie(n),a=_a.credentialWithLink(e,t||Oh());return se(a._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Tm(r,a)}/**
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
 */async function H2(n,e){return Pt(n,"POST","/v1/accounts:createAuthUri",xt(n,e))}/**
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
 */async function G2(n,e){const t=Wv()?Oh():"http://localhost",r={identifier:e,continueUri:t},{signinMethods:a}=await H2(Ie(n),r);return a||[]}async function $2(n,e){const t=Ie(n),a={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&wm(t.auth,a,e);const{email:o}=await g2(t.auth,a);o!==n.email&&await n.reload()}async function K2(n,e,t){const r=Ie(n),o={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await n.getIdToken(),newEmail:e};t&&wm(r.auth,o,t);const{email:u}=await v2(r.auth,o);u!==n.email&&await n.reload()}/**
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
 */async function Q2(n,e){return Pt(n,"POST","/v1/accounts:update",e)}/**
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
 */async function W2(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=Ie(n),o={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},u=await Yi(r,Q2(r.auth,o));r.displayName=u.displayName||null,r.photoURL=u.photoUrl||null;const d=r.providerData.find(({providerId:p})=>p==="password");d&&(d.displayName=r.displayName,d.photoURL=r.photoURL),await r._updateTokensIfNecessary(u)}function Y2(n,e){const t=Ie(n);return ft(t.auth.app)?Promise.reject(hn(t.auth)):QR(t,e,null)}function X2(n,e){return QR(Ie(n),null,e)}async function QR(n,e,t){const{auth:r}=n,o={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(o.email=e),t&&(o.password=t);const u=await Yi(n,d2(r,o));await n._updateTokensIfNecessary(u,!0)}/**
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
 */function Z2(n){var e,t;if(!n)return null;const{providerId:r}=n,a=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},o=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(n!=null&&n.idToken)){const u=(t=(e=ym(n.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(u){const d=u!=="anonymous"&&u!=="custom"?u:null;return new Wl(o,d)}}if(!r)return null;switch(r){case"facebook.com":return new J2(o,a);case"github.com":return new eL(o,a);case"google.com":return new tL(o,a);case"twitter.com":return new nL(o,a,n.screenName||null);case"custom":case"anonymous":return new Wl(o,null);default:return new Wl(o,r,a)}}class Wl{constructor(e,t,r={}){this.isNewUser=e,this.providerId=t,this.profile=r}}class WR extends Wl{constructor(e,t,r,a){super(e,t,r),this.username=a}}class J2 extends Wl{constructor(e,t){super(e,"facebook.com",t)}}class eL extends WR{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class tL extends Wl{constructor(e,t){super(e,"google.com",t)}}class nL extends WR{constructor(e,t,r){super(e,"twitter.com",t,r)}}function rL(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:Z2(t)}/**
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
 */class fo{constructor(e,t,r){this.type=e,this.credential=t,this.user=r}static _fromIdtoken(e,t){return new fo("enroll",e,t)}static _fromMfaPendingCredential(e){return new fo("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,r;if(e!=null&&e.multiFactorSession){if(!((t=e.multiFactorSession)===null||t===void 0)&&t.pendingCredential)return fo._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return fo._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class nE{constructor(e,t,r){this.session=e,this.hints=t,this.signInResolver=r}static _fromError(e,t){const r=bt(e),a=t.customData._serverResponse,o=(a.mfaInfo||[]).map(d=>ld._fromServerResponse(r,d));se(a.mfaPendingCredential,r,"internal-error");const u=fo._fromMfaPendingCredential(a.mfaPendingCredential);return new nE(u,o,async d=>{const p=await d._process(r,u);delete a.mfaInfo,delete a.mfaPendingCredential;const m=Object.assign(Object.assign({},a),{idToken:p.idToken,refreshToken:p.refreshToken});switch(t.operationType){case"signIn":const _=await br._fromIdTokenResponse(r,t.operationType,m);return await r._updateCurrentUser(_.user),_;case"reauthenticate":return se(t.user,r,"internal-error"),br._forOperation(t.user,t.operationType,m);default:vn(r,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function iL(n,e){var t;const r=Ie(n),a=e;return se(e.customData.operationType,r,"argument-error"),se((t=a.customData._serverResponse)===null||t===void 0?void 0:t.mfaPendingCredential,r,"argument-error"),nE._fromError(r,a)}/**
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
 */function bI(n,e){return Pt(n,"POST","/v2/accounts/mfaEnrollment:start",xt(n,e))}function sL(n,e){return Pt(n,"POST","/v2/accounts/mfaEnrollment:finalize",xt(n,e))}function aL(n,e){return Pt(n,"POST","/v2/accounts/mfaEnrollment:withdraw",xt(n,e))}class rE{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(r=>ld._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new rE(e)}async getSession(){return fo._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){const r=e,a=await this.getSession(),o=await Yi(this.user,r._process(this.user.auth,a,t));return await this.user._updateTokensIfNecessary(o),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const a=await Yi(this.user,aL(this.user.auth,{idToken:r,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:o})=>o!==t),await this.user._updateTokensIfNecessary(a),await this.user.reload()}catch(a){throw a}}}const y_=new WeakMap;function oL(n){const e=Ie(n);return y_.has(e)||y_.set(e,rE._fromUser(e)),y_.get(e)}const Bp="__sak";/**
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
 */class YR{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Bp,"1"),this.storage.removeItem(Bp),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const lL=1e3,uL=10;class XR extends YR{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=kR(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),a=this.localCache[t];r!==a&&e(t,a,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((u,d,p)=>{this.notifyListeners(u,p)});return}const r=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const u=this.storage.getItem(r);!t&&this.localCache[r]===u||this.notifyListeners(r,u)},o=this.storage.getItem(r);qM()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,uL):a()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const a of Array.from(r))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},lL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}XR.type="LOCAL";const iE=XR;/**
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
 */class ZR extends YR{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ZR.type="SESSION";const wo=ZR;/**
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
 */function cL(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class bm{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const r=new bm(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:a,data:o}=t.data,u=this.handlersMap[a];if(!(u!=null&&u.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:a});const d=Array.from(u).map(async m=>m(t.origin,o)),p=await cL(d);t.ports[0].postMessage({status:"done",eventId:r,eventType:a,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}bm.receivers=[];/**
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
 */function ud(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class hL{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let o,u;return new Promise((d,p)=>{const m=ud("",20);a.port1.start();const _=setTimeout(()=>{p(new Error("unsupported_event"))},r);u={messageChannel:a,onMessage(v){const w=v;if(w.data.eventId===m)switch(w.data.status){case"ack":clearTimeout(_),o=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),d(w.data.response);break;default:clearTimeout(_),clearTimeout(o),p(new Error("invalid_response"));break}}},this.handlers.add(u),a.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:m,data:t},[a.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
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
 */function qt(){return window}function dL(n){qt().location.href=n}/**
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
 */function sE(){return typeof qt().WorkerGlobalScope<"u"&&typeof qt().importScripts=="function"}async function fL(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function pL(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function mL(){return sE()?self:null}/**
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
 */const JR="firebaseLocalStorageDb",gL=1,zp="firebaseLocalStorage",eC="fbase_key";class cd{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Im(n,e){return n.transaction([zp],e?"readwrite":"readonly").objectStore(zp)}function yL(){const n=indexedDB.deleteDatabase(JR);return new cd(n).toPromise()}function q_(){const n=indexedDB.open(JR,gL);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(zp,{keyPath:eC})}catch(a){t(a)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(zp)?e(r):(r.close(),await yL(),e(await q_()))})})}async function II(n,e,t){const r=Im(n,!0).put({[eC]:e,value:t});return new cd(r).toPromise()}async function _L(n,e){const t=Im(n,!1).get(e),r=await new cd(t).toPromise();return r===void 0?null:r.value}function AI(n,e){const t=Im(n,!0).delete(e);return new cd(t).toPromise()}const vL=800,EL=3;class tC{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await q_(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>EL)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return sE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=bm._getInstance(mL()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await fL(),!this.activeServiceWorker)return;this.sender=new hL(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||pL()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await q_();return await II(e,Bp,"1"),await AI(e,Bp),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>II(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>_L(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>AI(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const o=Im(a,!1).getAll();return new cd(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:a,value:o}of e)r.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(o)&&(this.notifyListeners(a,o),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!r.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const a of Array.from(r))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),vL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}tC.type="LOCAL";const Mh=tC;/**
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
 */function SI(n,e){return Pt(n,"POST","/v2/accounts/mfaSignIn:start",xt(n,e))}function TL(n,e){return Pt(n,"POST","/v2/accounts/mfaSignIn:finalize",xt(n,e))}/**
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
 */const __=MR("rcb"),wL=new id(3e4,6e4);class bL{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=qt().grecaptcha)===null||e===void 0)&&e.render)}load(e,t=""){return se(IL(t),e,"argument-error"),this.shouldResolveImmediately(t)&&pI(qt().grecaptcha)?Promise.resolve(qt().grecaptcha):new Promise((r,a)=>{const o=qt().setTimeout(()=>{a(Xt(e,"network-request-failed"))},wL.get());qt()[__]=()=>{qt().clearTimeout(o),delete qt()[__];const d=qt().grecaptcha;if(!d||!pI(d)){a(Xt(e,"internal-error"));return}const p=d.render;d.render=(m,_)=>{const v=p(m,_);return this.counter++,v},this.hostLanguage=t,r(d)};const u=`${YM()}?${Du({onload:__,render:"explicit",hl:t})}`;Xv(u).catch(()=>{clearTimeout(o),a(Xt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(!((t=qt().grecaptcha)===null||t===void 0)&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function IL(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class AL{async load(e){return new t2(e)}clearedOneInstance(){}}/**
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
 */const yh="recaptcha",SL={theme:"light",type:"image"};let RL=class{constructor(e,t,r=Object.assign({},SL)){this.parameters=r,this.type=yh,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=bt(e),this.isInvisible=this.parameters.size==="invisible",se(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const a=typeof t=="string"?document.getElementById(t):t;se(a,this.auth,"argument-error"),this.container=a,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new AL:new bL,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),r=t.getResponse(e);return r||new Promise(a=>{const o=u=>{u&&(this.tokenChangeListeners.delete(o),a(u))};this.tokenChangeListeners.add(o),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){se(!this.parameters.sitekey,this.auth,"argument-error"),se(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),se(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(r=>r(t)),typeof e=="function")e(t);else if(typeof e=="string"){const r=qt()[e];typeof r=="function"&&r(t)}}}assertNotDestroyed(){se(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){se(Wv()&&!sE(),this.auth,"internal-error"),await CL(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await PM(this.auth);se(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return se(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function CL(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
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
 */class aE{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=Eo._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function DL(n,e,t){if(ft(n.app))return Promise.reject(hn(n));const r=bt(n),a=await Am(r,e,Ie(t));return new aE(a,o=>Tm(r,o))}async function xL(n,e,t){const r=Ie(n);await Em(!1,r,"phone");const a=await Am(r.auth,e,Ie(t));return new aE(a,o=>GR(r,o))}async function PL(n,e,t){const r=Ie(n);if(ft(r.auth.app))return Promise.reject(hn(r.auth));const a=await Am(r.auth,e,Ie(t));return new aE(a,o=>$R(r,o))}async function Am(n,e,t){var r;if(!n._getRecaptchaConfig())try{await o2(n)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let a;if(typeof e=="string"?a={phoneNumber:e}:a=e,"session"in a){const o=a.session;if("phoneNumber"in a){se(o.type==="enroll",n,"internal-error");const u={idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:a.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await ea(n,u,"mfaSmsEnrollment",async(_,v)=>{if(v.phoneEnrollmentInfo.captchaResponse===gh){se((t==null?void 0:t.type)===yh,_,"argument-error");const w=await v_(_,v,t);return bI(_,w)}return bI(_,v)},"PHONE_PROVIDER").catch(_=>Promise.reject(_))).phoneSessionInfo.sessionInfo}else{se(o.type==="signin",n,"internal-error");const u=((r=a.multiFactorHint)===null||r===void 0?void 0:r.uid)||a.multiFactorUid;se(u,n,"missing-multi-factor-info");const d={mfaPendingCredential:o.credential,mfaEnrollmentId:u,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await ea(n,d,"mfaSmsSignIn",async(v,w)=>{if(w.phoneSignInInfo.captchaResponse===gh){se((t==null?void 0:t.type)===yh,v,"argument-error");const S=await v_(v,w,t);return SI(v,S)}return SI(v,w)},"PHONE_PROVIDER").catch(v=>Promise.reject(v))).phoneResponseInfo.sessionInfo}}else{const o={phoneNumber:a.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await ea(n,o,"sendVerificationCode",async(m,_)=>{if(_.captchaResponse===gh){se((t==null?void 0:t.type)===yh,m,"argument-error");const v=await v_(m,_,t);return TI(m,v)}return TI(m,_)},"PHONE_PROVIDER").catch(m=>Promise.reject(m))).sessionInfo}}finally{t==null||t._reset()}}async function NL(n,e){const t=Ie(n);if(ft(t.auth.app))return Promise.reject(hn(t.auth));await Zv(t,e)}async function v_(n,e,t){se(t.type===yh,n,"argument-error");const r=await t.verify();se(typeof r=="string",n,"argument-error");const a=Object.assign({},e);if("phoneEnrollmentInfo"in a){const o=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.captchaResponse,d=a.phoneEnrollmentInfo.clientType,p=a.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:o,recaptchaToken:r,captchaResponse:u,clientType:d,recaptchaVersion:p}}),a}else if("phoneSignInInfo"in a){const o=a.phoneSignInInfo.captchaResponse,u=a.phoneSignInInfo.clientType,d=a.phoneSignInInfo.recaptchaVersion;return Object.assign(a,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:o,clientType:u,recaptchaVersion:d}}),a}else return Object.assign(a,{recaptchaToken:r}),a}/**
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
 */let bo=class fp{constructor(e){this.providerId=fp.PROVIDER_ID,this.auth=bt(e)}verifyPhoneNumber(e,t){return Am(this.auth,e,Ie(t))}static credential(e,t){return Eo._fromVerification(e,t)}static credentialFromResult(e){const t=e;return fp.credentialFromTaggedObject(t)}static credentialFromError(e){return fp.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:r}=e;return t&&r?Eo._fromTokenResponse(t,r):null}};bo.PROVIDER_ID="phone";bo.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function Mo(n,e){return e?tr(e):(se(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class oE extends Nu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ki(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ki(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ki(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function OL(n){return HR(n.auth,new oE(n),n.bypassAuthState)}function kL(n){const{auth:e,user:t}=n;return se(t,e,"internal-error"),qR(t,new oE(n),n.bypassAuthState)}async function VL(n){const{auth:e,user:t}=n;return se(t,e,"internal-error"),Zv(t,new oE(n),n.bypassAuthState)}/**
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
 */class nC{constructor(e,t,r,a,o=!1){this.auth=e,this.resolver=r,this.user=a,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:a,tenantId:o,error:u,type:d}=e;if(u){this.reject(u);return}const p={auth:this.auth,requestUri:t,sessionId:r,tenantId:o||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(m){this.reject(m)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return OL;case"linkViaPopup":case"linkViaRedirect":return VL;case"reauthViaPopup":case"reauthViaRedirect":return kL;default:vn(this.auth,"internal-error")}}resolve(e){kr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){kr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const ML=new id(2e3,1e4);async function LL(n,e,t){if(ft(n.app))return Promise.reject(Xt(n,"operation-not-supported-in-this-environment"));const r=bt(n);Pu(n,e,ts);const a=Mo(r,t);return new Hi(r,"signInViaPopup",e,a).executeNotNull()}async function UL(n,e,t){const r=Ie(n);if(ft(r.auth.app))return Promise.reject(Xt(r.auth,"operation-not-supported-in-this-environment"));Pu(r.auth,e,ts);const a=Mo(r.auth,t);return new Hi(r.auth,"reauthViaPopup",e,a,r).executeNotNull()}async function BL(n,e,t){const r=Ie(n);Pu(r.auth,e,ts);const a=Mo(r.auth,t);return new Hi(r.auth,"linkViaPopup",e,a,r).executeNotNull()}class Hi extends nC{constructor(e,t,r,a,o){super(e,t,a,o),this.provider=r,this.authWindow=null,this.pollId=null,Hi.currentPopupAction&&Hi.currentPopupAction.cancel(),Hi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return se(e,this.auth,"internal-error"),e}async onExecution(){kr(this.filter.length===1,"Popup operations only handle one event");const e=ud();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Xt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Xt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Hi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ML.get())};e()}}Hi.currentPopupAction=null;/**
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
 */const zL="pendingRedirect",_h=new Map;class FL extends nC{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=_h.get(this.auth._key());if(!e){try{const r=await jL(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}_h.set(this.auth._key(),e)}return this.bypassAuthState||_h.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function jL(n,e){const t=iC(e),r=rC(n);if(!await r._isAvailable())return!1;const a=await r._get(t)==="true";return await r._remove(t),a}async function lE(n,e){return rC(n)._set(iC(e),"true")}function qL(){_h.clear()}function uE(n,e){_h.set(n._key(),e)}function rC(n){return tr(n._redirectPersistence)}function iC(n){return vo(zL,n.config.apiKey,n.name)}/**
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
 */function HL(n,e,t){return GL(n,e,t)}async function GL(n,e,t){if(ft(n.app))return Promise.reject(hn(n));const r=bt(n);Pu(n,e,ts),await r._initializationPromise;const a=Mo(r,t);return await lE(a,r),a._openRedirect(r,e,"signInViaRedirect")}function $L(n,e,t){return KL(n,e,t)}async function KL(n,e,t){const r=Ie(n);if(Pu(r.auth,e,ts),ft(r.auth.app))return Promise.reject(hn(r.auth));await r.auth._initializationPromise;const a=Mo(r.auth,t);await lE(a,r.auth);const o=await sC(r);return a._openRedirect(r.auth,e,"reauthViaRedirect",o)}function QL(n,e,t){return WL(n,e,t)}async function WL(n,e,t){const r=Ie(n);Pu(r.auth,e,ts),await r.auth._initializationPromise;const a=Mo(r.auth,t);await Em(!1,r,e.providerId),await lE(a,r.auth);const o=await sC(r);return a._openRedirect(r.auth,e,"linkViaRedirect",o)}async function YL(n,e){return await bt(n)._initializationPromise,Sm(n,e,!1)}async function Sm(n,e,t=!1){if(ft(n.app))return Promise.reject(hn(n));const r=bt(n),a=Mo(r,e),u=await new FL(r,a,t).execute();return u&&!t&&(delete u.user._redirectEventId,await r._persistUserIfCurrent(u.user),await r._setRedirectUser(null,e)),u}async function sC(n){const e=ud(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}/**
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
 */const XL=10*60*1e3;class aC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ZL(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!oC(e)){const a=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Xt(this.auth,a))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=XL&&this.cachedEventUids.clear(),this.cachedEventUids.has(RI(e))}saveEventToCache(e){this.cachedEventUids.add(RI(e)),this.lastProcessedEventTime=Date.now()}}function RI(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function oC({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ZL(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return oC(n);default:return!1}}/**
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
 */async function lC(n,e={}){return Pt(n,"GET","/v1/projects",e)}/**
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
 */const JL=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,eU=/^https?/;async function tU(n){if(n.config.emulator)return;const{authorizedDomains:e}=await lC(n);for(const t of e)try{if(nU(t))return}catch{}vn(n,"unauthorized-domain")}function nU(n){const e=Oh(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const u=new URL(n);return u.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&u.hostname===r}if(!eU.test(t))return!1;if(JL.test(n))return r===n;const a=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(r)}/**
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
 */const rU=new id(3e4,6e4);function CI(){const n=qt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function iU(n){return new Promise((e,t)=>{var r,a,o;function u(){CI(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{CI(),t(Xt(n,"network-request-failed"))},timeout:rU.get()})}if(!((a=(r=qt().gapi)===null||r===void 0?void 0:r.iframes)===null||a===void 0)&&a.Iframe)e(gapi.iframes.getContext());else if(!((o=qt().gapi)===null||o===void 0)&&o.load)u();else{const d=MR("iframefcb");return qt()[d]=()=>{gapi.load?u():t(Xt(n,"network-request-failed"))},Xv(`${ZM()}?onload=${d}`).catch(p=>t(p))}}).catch(e=>{throw pp=null,e})}let pp=null;function sU(n){return pp=pp||iU(n),pp}/**
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
 */const aU=new id(5e3,15e3),oU="__/auth/iframe",lU="emulator/auth/iframe",uU={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},cU=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function hU(n){const e=n.config;se(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Yv(e,lU):`https://${n.config.authDomain}/${oU}`,r={apiKey:e.apiKey,appName:n.name,v:ya},a=cU.get(n.config.apiHost);a&&(r.eid=a);const o=n._getFrameworks();return o.length&&(r.fw=o.join(",")),`${t}?${Du(r).slice(1)}`}async function dU(n){const e=await sU(n),t=qt().gapi;return se(t,n,"internal-error"),e.open({where:document.body,url:hU(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:uU,dontclear:!0},r=>new Promise(async(a,o)=>{await r.restyle({setHideOnLeave:!1});const u=Xt(n,"network-request-failed"),d=qt().setTimeout(()=>{o(u)},aU.get());function p(){qt().clearTimeout(d),a(r)}r.ping(p).then(p,()=>{o(u)})}))}/**
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
 */const fU={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},pU=500,mU=600,gU="_blank",yU="http://localhost";class DI{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function _U(n,e,t,r=pU,a=mU){const o=Math.max((window.screen.availHeight-a)/2,0).toString(),u=Math.max((window.screen.availWidth-r)/2,0).toString();let d="";const p=Object.assign(Object.assign({},fU),{width:r.toString(),height:a.toString(),top:o,left:u}),m=wt().toLowerCase();t&&(d=xR(m)?gU:t),CR(m)&&(e=e||yU,p.scrollbars="yes");const _=Object.entries(p).reduce((w,[S,x])=>`${w}${S}=${x},`,"");if(jM(m)&&d!=="_self")return vU(e||"",d),new DI(null);const v=window.open(e||"",d,_);se(v,n,"popup-blocked");try{v.focus()}catch{}return new DI(v)}function vU(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const EU="__/auth/handler",TU="emulator/auth/handler",wU=encodeURIComponent("fac");async function H_(n,e,t,r,a,o){se(n.config.authDomain,n,"auth-domain-config-required"),se(n.config.apiKey,n,"invalid-api-key");const u={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:ya,eventId:a};if(e instanceof ts){e.setDefaultLanguage(n.languageCode),u.providerId=e.providerId||"",Wk(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[_,v]of Object.entries(o||{}))u[_]=v}if(e instanceof Ou){const _=e.getScopes().filter(v=>v!=="");_.length>0&&(u.scopes=_.join(","))}n.tenantId&&(u.tid=n.tenantId);const d=u;for(const _ of Object.keys(d))d[_]===void 0&&delete d[_];const p=await n._getAppCheckToken(),m=p?`#${wU}=${encodeURIComponent(p)}`:"";return`${bU(n)}?${Du(d).slice(1)}${m}`}function bU({config:n}){return n.emulator?Yv(n,TU):`https://${n.authDomain}/${EU}`}/**
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
 */const E_="webStorageSupport";class IU{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wo,this._completeRedirectFn=Sm,this._overrideRedirectResult=uE}async _openPopup(e,t,r,a){var o;kr((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const u=await H_(e,t,r,Oh(),a);return _U(e,u,ud())}async _openRedirect(e,t,r,a){await this._originValidation(e);const o=await H_(e,t,r,Oh(),a);return dL(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:o}=this.eventManagers[t];return a?Promise.resolve(a):(kr(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await dU(e),r=new aC(e);return t.register("authEvent",a=>(se(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:r.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(E_,{type:E_},a=>{var o;const u=(o=a==null?void 0:a[0])===null||o===void 0?void 0:o[E_];u!==void 0&&t(!!u),vn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=tU(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return kR()||DR()||ad()}}const AU=IU;class SU{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return ii("unexpected MultiFactorSessionType")}}}class cE extends SU{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new cE(e)}_finalizeEnroll(e,t,r){return sL(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return TL(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class uC{constructor(){}static assertion(e){return cE._fromCredential(e)}}uC.FACTOR_ID="phone";var xI="@firebase/auth",PI="1.10.0";/**
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
 */class RU{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){se(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function CU(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function DU(n){oa(new ci("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:u,authDomain:d}=r.options;se(u&&!u.includes(":"),"invalid-api-key",{appName:r.name});const p={apiKey:u,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:VR(n)},m=new QM(r,a,o,p);return l2(m,t),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),oa(new ci("auth-internal",e=>{const t=bt(e.getProvider("auth").getImmediate());return(r=>new RU(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Or(xI,PI,CU(n)),Or(xI,PI,"esm2017")}/**
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
 */const xU=5*60;Bk("authIdTokenMaxAge");function PU(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}WM({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=a=>{const o=Xt("internal-error");o.customData=a,t(o)},r.type="text/javascript",r.charset="UTF-8",PU().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});DU("Browser");/**
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
 */function Io(){return window}/**
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
 */const NU=2e3;async function OU(n,e,t){var r;const{BuildInfo:a}=Io();kr(e.sessionId,"AuthEvent did not contain a session ID");const o=await UU(e.sessionId),u={};return ad()?u.ibi=a.packageName:sd()?u.apn=a.packageName:vn(n,"operation-not-supported-in-this-environment"),a.displayName&&(u.appDisplayName=a.displayName),u.sessionId=o,H_(n,t,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,u)}async function kU(n){const{BuildInfo:e}=Io(),t={};ad()?t.iosBundleId=e.packageName:sd()?t.androidPackageName=e.packageName:vn(n,"operation-not-supported-in-this-environment"),await lC(n,t)}function VU(n){const{cordova:e}=Io();return new Promise(t=>{e.plugins.browsertab.isAvailable(r=>{let a=null;r?e.plugins.browsertab.openUrl(n):a=e.InAppBrowser.open(n,FM()?"_blank":"_system","location=yes"),t(a)})})}async function MU(n,e,t){const{cordova:r}=Io();let a=()=>{};try{await new Promise((o,u)=>{let d=null;function p(){var v;o();const w=(v=r.plugins.browsertab)===null||v===void 0?void 0:v.close;typeof w=="function"&&w(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function m(){d||(d=window.setTimeout(()=>{u(Xt(n,"redirect-cancelled-by-user"))},NU))}function _(){(document==null?void 0:document.visibilityState)==="visible"&&m()}e.addPassiveListener(p),document.addEventListener("resume",m,!1),sd()&&document.addEventListener("visibilitychange",_,!1),a=()=>{e.removePassiveListener(p),document.removeEventListener("resume",m,!1),document.removeEventListener("visibilitychange",_,!1),d&&window.clearTimeout(d)}})}finally{a()}}function LU(n){var e,t,r,a,o,u,d,p,m,_;const v=Io();se(typeof((e=v==null?void 0:v.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),se(typeof((t=v==null?void 0:v.BuildInfo)===null||t===void 0?void 0:t.packageName)<"u",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),se(typeof((o=(a=(r=v==null?void 0:v.cordova)===null||r===void 0?void 0:r.plugins)===null||a===void 0?void 0:a.browsertab)===null||o===void 0?void 0:o.openUrl)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),se(typeof((p=(d=(u=v==null?void 0:v.cordova)===null||u===void 0?void 0:u.plugins)===null||d===void 0?void 0:d.browsertab)===null||p===void 0?void 0:p.isAvailable)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),se(typeof((_=(m=v==null?void 0:v.cordova)===null||m===void 0?void 0:m.InAppBrowser)===null||_===void 0?void 0:_.open)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function UU(n){const e=BU(n),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(a=>a.toString(16).padStart(2,"0")).join("")}function BU(n){if(kr(/[0-9a-zA-Z]+/.test(n),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(n);const e=new ArrayBuffer(n.length),t=new Uint8Array(e);for(let r=0;r<n.length;r++)t[r]=n.charCodeAt(r);return t}/**
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
 */const zU=20;class FU extends aC{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInitialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInitialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function jU(n,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:GU(),postBody:null,tenantId:n.tenantId,error:Xt(n,"no-auth-event")}}function qU(n,e){return G_()._set($_(n),e)}async function NI(n){const e=await G_()._get($_(n));return e&&await G_()._remove($_(n)),e}function HU(n,e){var t,r;const a=KU(e);if(a.includes("/__/auth/callback")){const o=mp(a),u=o.firebaseError?$U(decodeURIComponent(o.firebaseError)):null,d=(r=(t=u==null?void 0:u.code)===null||t===void 0?void 0:t.split("auth/"))===null||r===void 0?void 0:r[1],p=d?Xt(d):null;return p?{type:n.type,eventId:n.eventId,tenantId:n.tenantId,error:p,urlResponse:null,sessionId:null,postBody:null}:{type:n.type,eventId:n.eventId,tenantId:n.tenantId,sessionId:n.sessionId,urlResponse:a,postBody:null}}return null}function GU(){const n=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<zU;t++){const r=Math.floor(Math.random()*e.length);n.push(e.charAt(r))}return n.join("")}function G_(){return tr(iE)}function $_(n){return vo("authEvent",n.config.apiKey,n.name)}function $U(n){try{return JSON.parse(n)}catch{return null}}function KU(n){const e=mp(n),t=e.link?decodeURIComponent(e.link):void 0,r=mp(t).link,a=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return mp(a).link||a||r||t||n}function mp(n){if(!(n!=null&&n.includes("?")))return{};const[e,...t]=n.split("?");return Gl(t.join("?"))}/**
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
 */const QU=500;class WU{constructor(){this._redirectPersistence=wo,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Sm,this._overrideRedirectResult=uE}async _initialize(e){const t=e._key();let r=this.eventManagers.get(t);return r||(r=new FU(e),this.eventManagers.set(t,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){vn(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,r,a){LU(e);const o=await this._initialize(e);await o.initialized(),o.resetRedirect(),qL(),await this._originValidation(e);const u=jU(e,r,a);await qU(e,u);const d=await OU(e,u,t),p=await VU(d);return MU(e,o,p)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=kU(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:r,handleOpenURL:a,BuildInfo:o}=Io(),u=setTimeout(async()=>{await NI(e),t.onEvent(OI())},QU),d=async _=>{clearTimeout(u);const v=await NI(e);let w=null;v&&(_!=null&&_.url)&&(w=HU(v,_.url)),t.onEvent(w||OI())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,d);const p=a,m=`${o.packageName.toLowerCase()}://`;Io().handleOpenURL=async _=>{if(_.toLowerCase().startsWith(m)&&d({url:_}),typeof p=="function")try{p(_)}catch(v){console.error(v)}}}}const YU=WU;function OI(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Xt("no-auth-event")}}/**
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
 */function XU(n,e){bt(n)._logFramework(e)}var ZU="@firebase/auth-compat",JU="0.5.20";/**
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
 */const e4=1e3;function vh(){var n;return((n=self==null?void 0:self.location)===null||n===void 0?void 0:n.protocol)||null}function t4(){return vh()==="http:"||vh()==="https:"}function cC(n=wt()){return!!((vh()==="file:"||vh()==="ionic:"||vh()==="capacitor:")&&n.toLowerCase().match(/iphone|ipad|ipod|android/))}function n4(){return jv()||Fv()}function r4(){return rR()&&(document==null?void 0:document.documentMode)===11}function i4(n=wt()){return/Edge\/\d+/.test(n)}function s4(n=wt()){return r4()||i4(n)}function hC(){try{const n=self.localStorage,e=ud();if(n)return n.setItem(e,"1"),n.removeItem(e),s4()?xh():!0}catch{return hE()&&xh()}return!1}function hE(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function T_(){return(t4()||nR()||cC())&&!n4()&&hC()&&!hE()}function dC(){return cC()&&typeof document<"u"}async function a4(){return dC()?new Promise(n=>{const e=setTimeout(()=>{n(!1)},e4);document.addEventListener("deviceready",()=>{clearTimeout(e),n(!0)})}):!1}function o4(){return typeof window<"u"?window:null}/**
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
 */const er={LOCAL:"local",NONE:"none",SESSION:"session"},Jc=se,fC="persistence";function l4(n,e){if(Jc(Object.values(er).includes(e),n,"invalid-persistence-type"),jv()){Jc(e!==er.SESSION,n,"unsupported-persistence-type");return}if(Fv()){Jc(e===er.NONE,n,"unsupported-persistence-type");return}if(hE()){Jc(e===er.NONE||e===er.LOCAL&&xh(),n,"unsupported-persistence-type");return}Jc(e===er.NONE||hC(),n,"unsupported-persistence-type")}async function K_(n){await n._initializationPromise;const e=pC(),t=vo(fC,n.config.apiKey,n.name);e&&e.setItem(t,n._getPersistenceType())}function u4(n,e){const t=pC();if(!t)return[];const r=vo(fC,n,e);switch(t.getItem(r)){case er.NONE:return[su];case er.LOCAL:return[Mh,wo];case er.SESSION:return[wo];default:return[]}}function pC(){var n;try{return((n=o4())===null||n===void 0?void 0:n.sessionStorage)||null}catch{return null}}/**
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
 */const c4=se;class Ys{constructor(){this.browserResolver=tr(AU),this.cordovaResolver=tr(YU),this.underlyingResolver=null,this._redirectPersistence=wo,this._completeRedirectFn=Sm,this._overrideRedirectResult=uE}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,r,a){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,r,a)}async _openRedirect(e,t,r,a){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,r,a)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return dC()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return c4(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await a4();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function mC(n){return n.unwrap()}function h4(n){return n.wrapped()}/**
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
 */function d4(n){return gC(n)}function f4(n,e){var t;const r=(t=e.customData)===null||t===void 0?void 0:t._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const a=e;a.resolver=new p4(n,iL(n,e))}else if(r){const a=gC(e),o=e;a&&(o.credential=a,o.tenantId=r.tenantId||void 0,o.email=r.email||void 0,o.phoneNumber=r.phoneNumber||void 0)}}function gC(n){const{_tokenResponse:e}=n instanceof kn?n.customData:n;if(!e)return null;if(!(n instanceof kn)&&"temporaryProof"in e&&"phoneNumber"in e)return bo.credentialFromResult(n);const t=e.providerId;if(!t||t===Xc.PASSWORD)return null;let r;switch(t){case Xc.GOOGLE:r=ti;break;case Xc.FACEBOOK:r=ei;break;case Xc.GITHUB:r=ni;break;case Xc.TWITTER:r=ri;break;default:const{oauthIdToken:a,oauthAccessToken:o,oauthTokenSecret:u,pendingToken:d,nonce:p}=e;return!o&&!u&&!a&&!d?null:d?t.startsWith("saml.")?au._create(t,d):hi._fromParams({providerId:t,signInMethod:t,pendingToken:d,idToken:a,accessToken:o}):new Ql(t).credential({idToken:a,accessToken:o,rawNonce:p})}return n instanceof kn?r.credentialFromError(n):r.credentialFromResult(n)}function zn(n,e){return e.catch(t=>{throw t instanceof kn&&f4(n,t),t}).then(t=>{const r=t.operationType,a=t.user;return{operationType:r,credential:d4(t),additionalUserInfo:rL(t),user:Rm.getOrCreate(a)}})}async function Q_(n,e){const t=await e;return{verificationId:t.verificationId,confirm:r=>zn(n,t.confirm(r))}}class p4{constructor(e,t){this.resolver=t,this.auth=h4(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return zn(mC(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */let Rm=class uh{constructor(e){this._delegate=e,this.multiFactor=oL(e)}static getOrCreate(e){return uh.USER_MAP.has(e)||uh.USER_MAP.set(e,new uh(e)),uh.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return zn(this.auth,GR(this._delegate,e))}async linkWithPhoneNumber(e,t){return Q_(this.auth,xL(this._delegate,e,t))}async linkWithPopup(e){return zn(this.auth,BL(this._delegate,e,Ys))}async linkWithRedirect(e){return await K_(bt(this.auth)),QL(this._delegate,e,Ys)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return zn(this.auth,$R(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return Q_(this.auth,PL(this._delegate,e,t))}reauthenticateWithPopup(e){return zn(this.auth,UL(this._delegate,e,Ys))}async reauthenticateWithRedirect(e){return await K_(bt(this.auth)),$L(this._delegate,e,Ys)}sendEmailVerification(e){return $2(this._delegate,e)}async unlink(e){return await N2(this._delegate,e),this}updateEmail(e){return Y2(this._delegate,e)}updatePassword(e){return X2(this._delegate,e)}updatePhoneNumber(e){return NL(this._delegate,e)}updateProfile(e){return W2(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return K2(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}};Rm.USER_MAP=new WeakMap;/**
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
 */const eh=se;class W_{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;eh(r,"invalid-api-key",{appName:e.name}),eh(r,"invalid-api-key",{appName:e.name});const a=typeof window<"u"?Ys:void 0;this._delegate=t.initialize({options:{persistence:m4(r,e.name),popupRedirectResolver:a}}),this._delegate._updateErrorMap(TM),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Rm.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){u2(this._delegate,e,t)}applyActionCode(e){return L2(this._delegate,e)}checkActionCode(e){return KR(this._delegate,e)}confirmPasswordReset(e,t){return M2(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return zn(this._delegate,B2(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return G2(this._delegate,e)}isSignInWithEmailLink(e){return j2(this._delegate,e)}async getRedirectResult(){eh(T_(),this._delegate,"operation-not-supported-in-this-environment");const e=await YL(this._delegate,Ys);return e?zn(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){XU(this._delegate,e)}onAuthStateChanged(e,t,r){const{next:a,error:o,complete:u}=kI(e,t,r);return this._delegate.onAuthStateChanged(a,o,u)}onIdTokenChanged(e,t,r){const{next:a,error:o,complete:u}=kI(e,t,r);return this._delegate.onIdTokenChanged(a,o,u)}sendSignInLinkToEmail(e,t){return F2(this._delegate,e,t)}sendPasswordResetEmail(e,t){return V2(this._delegate,e,t||void 0)}async setPersistence(e){l4(this._delegate,e);let t;switch(e){case er.SESSION:t=wo;break;case er.LOCAL:t=await tr(Mh)._isAvailable()?Mh:iE;break;case er.NONE:t=su;break;default:return vn("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return zn(this._delegate,P2(this._delegate))}signInWithCredential(e){return zn(this._delegate,Tm(this._delegate,e))}signInWithCustomToken(e){return zn(this._delegate,k2(this._delegate,e))}signInWithEmailAndPassword(e,t){return zn(this._delegate,z2(this._delegate,e,t))}signInWithEmailLink(e,t){return zn(this._delegate,q2(this._delegate,e,t))}signInWithPhoneNumber(e,t){return Q_(this._delegate,DL(this._delegate,e,t))}async signInWithPopup(e){return eh(T_(),this._delegate,"operation-not-supported-in-this-environment"),zn(this._delegate,LL(this._delegate,e,Ys))}async signInWithRedirect(e){return eh(T_(),this._delegate,"operation-not-supported-in-this-environment"),await K_(this._delegate),HL(this._delegate,e,Ys)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return U2(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}W_.Persistence=er;function kI(n,e,t){let r=n;typeof n!="function"&&({next:r,error:e,complete:t}=n);const a=r;return{next:u=>a(u&&Rm.getOrCreate(u)),error:e,complete:t}}function m4(n,e){const t=u4(n,e);if(typeof self<"u"&&!t.includes(Mh)&&t.push(Mh),typeof window<"u")for(const r of[iE,wo])t.includes(r)||t.push(r);return t.includes(su)||t.push(su),t}/**
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
 */class dE{static credential(e,t){return bo.credential(e,t)}constructor(){this.providerId="phone",this._delegate=new bo(mC(xu.auth()))}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}dE.PHONE_SIGN_IN_METHOD=bo.PHONE_SIGN_IN_METHOD;dE.PROVIDER_ID=bo.PROVIDER_ID;/**
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
 */const g4=se;class y4{constructor(e,t,r=xu.app()){var a;g4((a=r.options)===null||a===void 0?void 0:a.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new RL(r.auth(),e,t),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const _4="auth-compat";function v4(n){n.INTERNAL.registerComponent(new ci(_4,e=>{const t=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new W_(t,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Nl.EMAIL_SIGNIN,PASSWORD_RESET:Nl.PASSWORD_RESET,RECOVER_EMAIL:Nl.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Nl.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Nl.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Nl.VERIFY_EMAIL}},EmailAuthProvider:_a,FacebookAuthProvider:ei,GithubAuthProvider:ni,GoogleAuthProvider:ti,OAuthProvider:Ql,SAMLAuthProvider:Lp,PhoneAuthProvider:dE,PhoneMultiFactorGenerator:uC,RecaptchaVerifier:y4,TwitterAuthProvider:ri,Auth:W_,AuthCredential:Nu,Error:kn}).setInstantiationMode("LAZY").setMultipleInstances(!1)),n.registerVersion(ZU,JU)}v4(xu);var VI=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ta,yC;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(D,R){function A(){}A.prototype=R.prototype,D.D=R.prototype,D.prototype=new A,D.prototype.constructor=D,D.C=function(P,V,z){for(var N=Array(arguments.length-2),Nt=2;Nt<arguments.length;Nt++)N[Nt-2]=arguments[Nt];return R.prototype[V].apply(P,N)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(D,R,A){A||(A=0);var P=Array(16);if(typeof R=="string")for(var V=0;16>V;++V)P[V]=R.charCodeAt(A++)|R.charCodeAt(A++)<<8|R.charCodeAt(A++)<<16|R.charCodeAt(A++)<<24;else for(V=0;16>V;++V)P[V]=R[A++]|R[A++]<<8|R[A++]<<16|R[A++]<<24;R=D.g[0],A=D.g[1],V=D.g[2];var z=D.g[3],N=R+(z^A&(V^z))+P[0]+3614090360&4294967295;R=A+(N<<7&4294967295|N>>>25),N=z+(V^R&(A^V))+P[1]+3905402710&4294967295,z=R+(N<<12&4294967295|N>>>20),N=V+(A^z&(R^A))+P[2]+606105819&4294967295,V=z+(N<<17&4294967295|N>>>15),N=A+(R^V&(z^R))+P[3]+3250441966&4294967295,A=V+(N<<22&4294967295|N>>>10),N=R+(z^A&(V^z))+P[4]+4118548399&4294967295,R=A+(N<<7&4294967295|N>>>25),N=z+(V^R&(A^V))+P[5]+1200080426&4294967295,z=R+(N<<12&4294967295|N>>>20),N=V+(A^z&(R^A))+P[6]+2821735955&4294967295,V=z+(N<<17&4294967295|N>>>15),N=A+(R^V&(z^R))+P[7]+4249261313&4294967295,A=V+(N<<22&4294967295|N>>>10),N=R+(z^A&(V^z))+P[8]+1770035416&4294967295,R=A+(N<<7&4294967295|N>>>25),N=z+(V^R&(A^V))+P[9]+2336552879&4294967295,z=R+(N<<12&4294967295|N>>>20),N=V+(A^z&(R^A))+P[10]+4294925233&4294967295,V=z+(N<<17&4294967295|N>>>15),N=A+(R^V&(z^R))+P[11]+2304563134&4294967295,A=V+(N<<22&4294967295|N>>>10),N=R+(z^A&(V^z))+P[12]+1804603682&4294967295,R=A+(N<<7&4294967295|N>>>25),N=z+(V^R&(A^V))+P[13]+4254626195&4294967295,z=R+(N<<12&4294967295|N>>>20),N=V+(A^z&(R^A))+P[14]+2792965006&4294967295,V=z+(N<<17&4294967295|N>>>15),N=A+(R^V&(z^R))+P[15]+1236535329&4294967295,A=V+(N<<22&4294967295|N>>>10),N=R+(V^z&(A^V))+P[1]+4129170786&4294967295,R=A+(N<<5&4294967295|N>>>27),N=z+(A^V&(R^A))+P[6]+3225465664&4294967295,z=R+(N<<9&4294967295|N>>>23),N=V+(R^A&(z^R))+P[11]+643717713&4294967295,V=z+(N<<14&4294967295|N>>>18),N=A+(z^R&(V^z))+P[0]+3921069994&4294967295,A=V+(N<<20&4294967295|N>>>12),N=R+(V^z&(A^V))+P[5]+3593408605&4294967295,R=A+(N<<5&4294967295|N>>>27),N=z+(A^V&(R^A))+P[10]+38016083&4294967295,z=R+(N<<9&4294967295|N>>>23),N=V+(R^A&(z^R))+P[15]+3634488961&4294967295,V=z+(N<<14&4294967295|N>>>18),N=A+(z^R&(V^z))+P[4]+3889429448&4294967295,A=V+(N<<20&4294967295|N>>>12),N=R+(V^z&(A^V))+P[9]+568446438&4294967295,R=A+(N<<5&4294967295|N>>>27),N=z+(A^V&(R^A))+P[14]+3275163606&4294967295,z=R+(N<<9&4294967295|N>>>23),N=V+(R^A&(z^R))+P[3]+4107603335&4294967295,V=z+(N<<14&4294967295|N>>>18),N=A+(z^R&(V^z))+P[8]+1163531501&4294967295,A=V+(N<<20&4294967295|N>>>12),N=R+(V^z&(A^V))+P[13]+2850285829&4294967295,R=A+(N<<5&4294967295|N>>>27),N=z+(A^V&(R^A))+P[2]+4243563512&4294967295,z=R+(N<<9&4294967295|N>>>23),N=V+(R^A&(z^R))+P[7]+1735328473&4294967295,V=z+(N<<14&4294967295|N>>>18),N=A+(z^R&(V^z))+P[12]+2368359562&4294967295,A=V+(N<<20&4294967295|N>>>12),N=R+(A^V^z)+P[5]+4294588738&4294967295,R=A+(N<<4&4294967295|N>>>28),N=z+(R^A^V)+P[8]+2272392833&4294967295,z=R+(N<<11&4294967295|N>>>21),N=V+(z^R^A)+P[11]+1839030562&4294967295,V=z+(N<<16&4294967295|N>>>16),N=A+(V^z^R)+P[14]+4259657740&4294967295,A=V+(N<<23&4294967295|N>>>9),N=R+(A^V^z)+P[1]+2763975236&4294967295,R=A+(N<<4&4294967295|N>>>28),N=z+(R^A^V)+P[4]+1272893353&4294967295,z=R+(N<<11&4294967295|N>>>21),N=V+(z^R^A)+P[7]+4139469664&4294967295,V=z+(N<<16&4294967295|N>>>16),N=A+(V^z^R)+P[10]+3200236656&4294967295,A=V+(N<<23&4294967295|N>>>9),N=R+(A^V^z)+P[13]+681279174&4294967295,R=A+(N<<4&4294967295|N>>>28),N=z+(R^A^V)+P[0]+3936430074&4294967295,z=R+(N<<11&4294967295|N>>>21),N=V+(z^R^A)+P[3]+3572445317&4294967295,V=z+(N<<16&4294967295|N>>>16),N=A+(V^z^R)+P[6]+76029189&4294967295,A=V+(N<<23&4294967295|N>>>9),N=R+(A^V^z)+P[9]+3654602809&4294967295,R=A+(N<<4&4294967295|N>>>28),N=z+(R^A^V)+P[12]+3873151461&4294967295,z=R+(N<<11&4294967295|N>>>21),N=V+(z^R^A)+P[15]+530742520&4294967295,V=z+(N<<16&4294967295|N>>>16),N=A+(V^z^R)+P[2]+3299628645&4294967295,A=V+(N<<23&4294967295|N>>>9),N=R+(V^(A|~z))+P[0]+4096336452&4294967295,R=A+(N<<6&4294967295|N>>>26),N=z+(A^(R|~V))+P[7]+1126891415&4294967295,z=R+(N<<10&4294967295|N>>>22),N=V+(R^(z|~A))+P[14]+2878612391&4294967295,V=z+(N<<15&4294967295|N>>>17),N=A+(z^(V|~R))+P[5]+4237533241&4294967295,A=V+(N<<21&4294967295|N>>>11),N=R+(V^(A|~z))+P[12]+1700485571&4294967295,R=A+(N<<6&4294967295|N>>>26),N=z+(A^(R|~V))+P[3]+2399980690&4294967295,z=R+(N<<10&4294967295|N>>>22),N=V+(R^(z|~A))+P[10]+4293915773&4294967295,V=z+(N<<15&4294967295|N>>>17),N=A+(z^(V|~R))+P[1]+2240044497&4294967295,A=V+(N<<21&4294967295|N>>>11),N=R+(V^(A|~z))+P[8]+1873313359&4294967295,R=A+(N<<6&4294967295|N>>>26),N=z+(A^(R|~V))+P[15]+4264355552&4294967295,z=R+(N<<10&4294967295|N>>>22),N=V+(R^(z|~A))+P[6]+2734768916&4294967295,V=z+(N<<15&4294967295|N>>>17),N=A+(z^(V|~R))+P[13]+1309151649&4294967295,A=V+(N<<21&4294967295|N>>>11),N=R+(V^(A|~z))+P[4]+4149444226&4294967295,R=A+(N<<6&4294967295|N>>>26),N=z+(A^(R|~V))+P[11]+3174756917&4294967295,z=R+(N<<10&4294967295|N>>>22),N=V+(R^(z|~A))+P[2]+718787259&4294967295,V=z+(N<<15&4294967295|N>>>17),N=A+(z^(V|~R))+P[9]+3951481745&4294967295,D.g[0]=D.g[0]+R&4294967295,D.g[1]=D.g[1]+(V+(N<<21&4294967295|N>>>11))&4294967295,D.g[2]=D.g[2]+V&4294967295,D.g[3]=D.g[3]+z&4294967295}r.prototype.u=function(D,R){R===void 0&&(R=D.length);for(var A=R-this.blockSize,P=this.B,V=this.h,z=0;z<R;){if(V==0)for(;z<=A;)a(this,D,z),z+=this.blockSize;if(typeof D=="string"){for(;z<R;)if(P[V++]=D.charCodeAt(z++),V==this.blockSize){a(this,P),V=0;break}}else for(;z<R;)if(P[V++]=D[z++],V==this.blockSize){a(this,P),V=0;break}}this.h=V,this.o+=R},r.prototype.v=function(){var D=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);D[0]=128;for(var R=1;R<D.length-8;++R)D[R]=0;var A=8*this.o;for(R=D.length-8;R<D.length;++R)D[R]=A&255,A/=256;for(this.u(D),D=Array(16),R=A=0;4>R;++R)for(var P=0;32>P;P+=8)D[A++]=this.g[R]>>>P&255;return D};function o(D,R){var A=d;return Object.prototype.hasOwnProperty.call(A,D)?A[D]:A[D]=R(D)}function u(D,R){this.h=R;for(var A=[],P=!0,V=D.length-1;0<=V;V--){var z=D[V]|0;P&&z==R||(A[V]=z,P=!1)}this.g=A}var d={};function p(D){return-128<=D&&128>D?o(D,function(R){return new u([R|0],0>R?-1:0)}):new u([D|0],0>D?-1:0)}function m(D){if(isNaN(D)||!isFinite(D))return v;if(0>D)return M(m(-D));for(var R=[],A=1,P=0;D>=A;P++)R[P]=D/A|0,A*=4294967296;return new u(R,0)}function _(D,R){if(D.length==0)throw Error("number format error: empty string");if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(D.charAt(0)=="-")return M(_(D.substring(1),R));if(0<=D.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=m(Math.pow(R,8)),P=v,V=0;V<D.length;V+=8){var z=Math.min(8,D.length-V),N=parseInt(D.substring(V,V+z),R);8>z?(z=m(Math.pow(R,z)),P=P.j(z).add(m(N))):(P=P.j(A),P=P.add(m(N)))}return P}var v=p(0),w=p(1),S=p(16777216);n=u.prototype,n.m=function(){if(U(this))return-M(this).m();for(var D=0,R=1,A=0;A<this.g.length;A++){var P=this.i(A);D+=(0<=P?P:4294967296+P)*R,R*=4294967296}return D},n.toString=function(D){if(D=D||10,2>D||36<D)throw Error("radix out of range: "+D);if(x(this))return"0";if(U(this))return"-"+M(this).toString(D);for(var R=m(Math.pow(D,6)),A=this,P="";;){var V=oe(A,R).g;A=H(A,V.j(R));var z=((0<A.g.length?A.g[0]:A.h)>>>0).toString(D);if(A=V,x(A))return z+P;for(;6>z.length;)z="0"+z;P=z+P}},n.i=function(D){return 0>D?0:D<this.g.length?this.g[D]:this.h};function x(D){if(D.h!=0)return!1;for(var R=0;R<D.g.length;R++)if(D.g[R]!=0)return!1;return!0}function U(D){return D.h==-1}n.l=function(D){return D=H(this,D),U(D)?-1:x(D)?0:1};function M(D){for(var R=D.g.length,A=[],P=0;P<R;P++)A[P]=~D.g[P];return new u(A,~D.h).add(w)}n.abs=function(){return U(this)?M(this):this},n.add=function(D){for(var R=Math.max(this.g.length,D.g.length),A=[],P=0,V=0;V<=R;V++){var z=P+(this.i(V)&65535)+(D.i(V)&65535),N=(z>>>16)+(this.i(V)>>>16)+(D.i(V)>>>16);P=N>>>16,z&=65535,N&=65535,A[V]=N<<16|z}return new u(A,A[A.length-1]&-2147483648?-1:0)};function H(D,R){return D.add(M(R))}n.j=function(D){if(x(this)||x(D))return v;if(U(this))return U(D)?M(this).j(M(D)):M(M(this).j(D));if(U(D))return M(this.j(M(D)));if(0>this.l(S)&&0>D.l(S))return m(this.m()*D.m());for(var R=this.g.length+D.g.length,A=[],P=0;P<2*R;P++)A[P]=0;for(P=0;P<this.g.length;P++)for(var V=0;V<D.g.length;V++){var z=this.i(P)>>>16,N=this.i(P)&65535,Nt=D.i(V)>>>16,It=D.i(V)&65535;A[2*P+2*V]+=N*It,$(A,2*P+2*V),A[2*P+2*V+1]+=z*It,$(A,2*P+2*V+1),A[2*P+2*V+1]+=N*Nt,$(A,2*P+2*V+1),A[2*P+2*V+2]+=z*Nt,$(A,2*P+2*V+2)}for(P=0;P<R;P++)A[P]=A[2*P+1]<<16|A[2*P];for(P=R;P<2*R;P++)A[P]=0;return new u(A,0)};function $(D,R){for(;(D[R]&65535)!=D[R];)D[R+1]+=D[R]>>>16,D[R]&=65535,R++}function K(D,R){this.g=D,this.h=R}function oe(D,R){if(x(R))throw Error("division by zero");if(x(D))return new K(v,v);if(U(D))return R=oe(M(D),R),new K(M(R.g),M(R.h));if(U(R))return R=oe(D,M(R)),new K(M(R.g),R.h);if(30<D.g.length){if(U(D)||U(R))throw Error("slowDivide_ only works with positive integers.");for(var A=w,P=R;0>=P.l(D);)A=ae(A),P=ae(P);var V=le(A,1),z=le(P,1);for(P=le(P,2),A=le(A,2);!x(P);){var N=z.add(P);0>=N.l(D)&&(V=V.add(A),z=N),P=le(P,1),A=le(A,1)}return R=H(D,V.j(R)),new K(V,R)}for(V=v;0<=D.l(R);){for(A=Math.max(1,Math.floor(D.m()/R.m())),P=Math.ceil(Math.log(A)/Math.LN2),P=48>=P?1:Math.pow(2,P-48),z=m(A),N=z.j(R);U(N)||0<N.l(D);)A-=P,z=m(A),N=z.j(R);x(z)&&(z=w),V=V.add(z),D=H(D,N)}return new K(V,D)}n.A=function(D){return oe(this,D).h},n.and=function(D){for(var R=Math.max(this.g.length,D.g.length),A=[],P=0;P<R;P++)A[P]=this.i(P)&D.i(P);return new u(A,this.h&D.h)},n.or=function(D){for(var R=Math.max(this.g.length,D.g.length),A=[],P=0;P<R;P++)A[P]=this.i(P)|D.i(P);return new u(A,this.h|D.h)},n.xor=function(D){for(var R=Math.max(this.g.length,D.g.length),A=[],P=0;P<R;P++)A[P]=this.i(P)^D.i(P);return new u(A,this.h^D.h)};function ae(D){for(var R=D.g.length+1,A=[],P=0;P<R;P++)A[P]=D.i(P)<<1|D.i(P-1)>>>31;return new u(A,D.h)}function le(D,R){var A=R>>5;R%=32;for(var P=D.g.length-A,V=[],z=0;z<P;z++)V[z]=0<R?D.i(z+A)>>>R|D.i(z+A+1)<<32-R:D.i(z+A);return new u(V,D.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,yC=r,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=m,u.fromString=_,ta=u}).apply(typeof VI<"u"?VI:typeof self<"u"?self:typeof window<"u"?window:{});var Xf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _C,ch,vC,gp,Y_,EC,TC,wC;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,y,E){return h==Array.prototype||h==Object.prototype||(h[y]=E.value),h};function t(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof Xf=="object"&&Xf];for(var y=0;y<h.length;++y){var E=h[y];if(E&&E.Math==Math)return E}throw Error("Cannot find global object")}var r=t(this);function a(h,y){if(y)e:{var E=r;h=h.split(".");for(var I=0;I<h.length-1;I++){var F=h[I];if(!(F in E))break e;E=E[F]}h=h[h.length-1],I=E[h],y=y(I),y!=I&&y!=null&&e(E,h,{configurable:!0,writable:!0,value:y})}}function o(h,y){h instanceof String&&(h+="");var E=0,I=!1,F={next:function(){if(!I&&E<h.length){var W=E++;return{value:y(W,h[W]),done:!1}}return I=!0,{done:!0,value:void 0}}};return F[Symbol.iterator]=function(){return F},F}a("Array.prototype.values",function(h){return h||function(){return o(this,function(y,E){return E})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},d=this||self;function p(h){var y=typeof h;return y=y!="object"?y:h?Array.isArray(h)?"array":y:"null",y=="array"||y=="object"&&typeof h.length=="number"}function m(h){var y=typeof h;return y=="object"&&h!=null||y=="function"}function _(h,y,E){return h.call.apply(h.bind,arguments)}function v(h,y,E){if(!h)throw Error();if(2<arguments.length){var I=Array.prototype.slice.call(arguments,2);return function(){var F=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(F,I),h.apply(y,F)}}return function(){return h.apply(y,arguments)}}function w(h,y,E){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_:v,w.apply(null,arguments)}function S(h,y){var E=Array.prototype.slice.call(arguments,1);return function(){var I=E.slice();return I.push.apply(I,arguments),h.apply(this,I)}}function x(h,y){function E(){}E.prototype=y.prototype,h.aa=y.prototype,h.prototype=new E,h.prototype.constructor=h,h.Qb=function(I,F,W){for(var ue=Array(arguments.length-2),je=2;je<arguments.length;je++)ue[je-2]=arguments[je];return y.prototype[F].apply(I,ue)}}function U(h){const y=h.length;if(0<y){const E=Array(y);for(let I=0;I<y;I++)E[I]=h[I];return E}return[]}function M(h,y){for(let E=1;E<arguments.length;E++){const I=arguments[E];if(p(I)){const F=h.length||0,W=I.length||0;h.length=F+W;for(let ue=0;ue<W;ue++)h[F+ue]=I[ue]}else h.push(I)}}class H{constructor(y,E){this.i=y,this.j=E,this.h=0,this.g=null}get(){let y;return 0<this.h?(this.h--,y=this.g,this.g=y.next,y.next=null):y=this.i(),y}}function $(h){return/^[\s\xa0]*$/.test(h)}function K(){var h=d.navigator;return h&&(h=h.userAgent)?h:""}function oe(h){return oe[" "](h),h}oe[" "]=function(){};var ae=K().indexOf("Gecko")!=-1&&!(K().toLowerCase().indexOf("webkit")!=-1&&K().indexOf("Edge")==-1)&&!(K().indexOf("Trident")!=-1||K().indexOf("MSIE")!=-1)&&K().indexOf("Edge")==-1;function le(h,y,E){for(const I in h)y.call(E,h[I],I,h)}function D(h,y){for(const E in h)y.call(void 0,h[E],E,h)}function R(h){const y={};for(const E in h)y[E]=h[E];return y}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(h,y){let E,I;for(let F=1;F<arguments.length;F++){I=arguments[F];for(E in I)h[E]=I[E];for(let W=0;W<A.length;W++)E=A[W],Object.prototype.hasOwnProperty.call(I,E)&&(h[E]=I[E])}}function V(h){var y=1;h=h.split(":");const E=[];for(;0<y&&h.length;)E.push(h.shift()),y--;return h.length&&E.push(h.join(":")),E}function z(h){d.setTimeout(()=>{throw h},0)}function N(){var h=Ne;let y=null;return h.g&&(y=h.g,h.g=h.g.next,h.g||(h.h=null),y.next=null),y}class Nt{constructor(){this.h=this.g=null}add(y,E){const I=It.get();I.set(y,E),this.h?this.h.next=I:this.g=I,this.h=I}}var It=new H(()=>new he,h=>h.reset());class he{constructor(){this.next=this.g=this.h=null}set(y,E){this.h=y,this.g=E,this.next=null}reset(){this.next=this.g=this.h=null}}let be,Te=!1,Ne=new Nt,O=()=>{const h=d.Promise.resolve(void 0);be=()=>{h.then(ie)}};var ie=()=>{for(var h;h=N();){try{h.h.call(h.g)}catch(E){z(E)}var y=It;y.j(h),100>y.h&&(y.h++,h.next=y.g,y.g=h)}Te=!1};function ge(){this.s=this.s,this.C=this.C}ge.prototype.s=!1,ge.prototype.ma=function(){this.s||(this.s=!0,this.N())},ge.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function pe(h,y){this.type=h,this.g=this.target=y,this.defaultPrevented=!1}pe.prototype.h=function(){this.defaultPrevented=!0};var fe=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var h=!1,y=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const E=()=>{};d.addEventListener("test",E,y),d.removeEventListener("test",E,y)}catch{}return h}();function Ce(h,y){if(pe.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var E=this.type=h.type,I=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=y,y=h.relatedTarget){if(ae){e:{try{oe(y.nodeName);var F=!0;break e}catch{}F=!1}F||(y=null)}}else E=="mouseover"?y=h.fromElement:E=="mouseout"&&(y=h.toElement);this.relatedTarget=y,I?(this.clientX=I.clientX!==void 0?I.clientX:I.pageX,this.clientY=I.clientY!==void 0?I.clientY:I.pageY,this.screenX=I.screenX||0,this.screenY=I.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:Re[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&Ce.aa.h.call(this)}}x(Ce,pe);var Re={2:"touch",3:"pen",4:"mouse"};Ce.prototype.h=function(){Ce.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var ut="closure_listenable_"+(1e6*Math.random()|0),Ve=0;function Ze(h,y,E,I,F){this.listener=h,this.proxy=null,this.src=y,this.type=E,this.capture=!!I,this.ha=F,this.key=++Ve,this.da=this.fa=!1}function $e(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function Ut(h){this.src=h,this.g={},this.h=0}Ut.prototype.add=function(h,y,E,I,F){var W=h.toString();h=this.g[W],h||(h=this.g[W]=[],this.h++);var ue=rr(h,y,I,F);return-1<ue?(y=h[ue],E||(y.fa=!1)):(y=new Ze(y,this.src,W,!!I,F),y.fa=E,h.push(y)),y};function Jt(h,y){var E=y.type;if(E in h.g){var I=h.g[E],F=Array.prototype.indexOf.call(I,y,void 0),W;(W=0<=F)&&Array.prototype.splice.call(I,F,1),W&&($e(y),h.g[E].length==0&&(delete h.g[E],h.h--))}}function rr(h,y,E,I){for(var F=0;F<h.length;++F){var W=h[F];if(!W.da&&W.listener==y&&W.capture==!!E&&W.ha==I)return F}return-1}var as="closure_lm_"+(1e6*Math.random()|0),os={};function yi(h,y,E,I,F){if(Array.isArray(y)){for(var W=0;W<y.length;W++)yi(h,y[W],E,I,F);return null}return E=Ad(E),h&&h[ut]?h.K(y,E,m(I)?!!I.capture:!1,F):ju(h,y,E,!1,I,F)}function ju(h,y,E,I,F,W){if(!y)throw Error("Invalid event type");var ue=m(F)?!!F.capture:!!F,je=qu(h);if(je||(h[as]=je=new Ut(h)),E=je.add(y,E,I,ue,W),E.proxy)return E;if(I=Fo(),E.proxy=I,I.src=h,I.listener=E,h.addEventListener)fe||(F=ue),F===void 0&&(F=!1),h.addEventListener(y.toString(),I,F);else if(h.attachEvent)h.attachEvent(qo(y.toString()),I);else if(h.addListener&&h.removeListener)h.addListener(I);else throw Error("addEventListener and attachEvent are unavailable.");return E}function Fo(){function h(E){return y.call(h.src,h.listener,E)}const y=tg;return h}function jo(h,y,E,I,F){if(Array.isArray(y))for(var W=0;W<y.length;W++)jo(h,y[W],E,I,F);else I=m(I)?!!I.capture:!!I,E=Ad(E),h&&h[ut]?(h=h.i,y=String(y).toString(),y in h.g&&(W=h.g[y],E=rr(W,E,I,F),-1<E&&($e(W[E]),Array.prototype.splice.call(W,E,1),W.length==0&&(delete h.g[y],h.h--)))):h&&(h=qu(h))&&(y=h.g[y.toString()],h=-1,y&&(h=rr(y,E,I,F)),(E=-1<h?y[h]:null)&&Ia(E))}function Ia(h){if(typeof h!="number"&&h&&!h.da){var y=h.src;if(y&&y[ut])Jt(y.i,h);else{var E=h.type,I=h.proxy;y.removeEventListener?y.removeEventListener(E,I,h.capture):y.detachEvent?y.detachEvent(qo(E),I):y.addListener&&y.removeListener&&y.removeListener(I),(E=qu(y))?(Jt(E,h),E.h==0&&(E.src=null,y[as]=null)):$e(h)}}}function qo(h){return h in os?os[h]:os[h]="on"+h}function tg(h,y){if(h.da)h=!0;else{y=new Ce(y,this);var E=h.listener,I=h.ha||h.src;h.fa&&Ia(h),h=E.call(I,y)}return h}function qu(h){return h=h[as],h instanceof Ut?h:null}var Ln="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ad(h){return typeof h=="function"?h:(h[Ln]||(h[Ln]=function(y){return h.handleEvent(y)}),h[Ln])}function Gt(){ge.call(this),this.i=new Ut(this),this.M=this,this.F=null}x(Gt,ge),Gt.prototype[ut]=!0,Gt.prototype.removeEventListener=function(h,y,E,I){jo(this,h,y,E,I)};function en(h,y){var E,I=h.F;if(I)for(E=[];I;I=I.F)E.push(I);if(h=h.M,I=y.type||y,typeof y=="string")y=new pe(y,h);else if(y instanceof pe)y.target=y.target||h;else{var F=y;y=new pe(I,h),P(y,F)}if(F=!0,E)for(var W=E.length-1;0<=W;W--){var ue=y.g=E[W];F=_i(ue,I,!0,y)&&F}if(ue=y.g=h,F=_i(ue,I,!0,y)&&F,F=_i(ue,I,!1,y)&&F,E)for(W=0;W<E.length;W++)ue=y.g=E[W],F=_i(ue,I,!1,y)&&F}Gt.prototype.N=function(){if(Gt.aa.N.call(this),this.i){var h=this.i,y;for(y in h.g){for(var E=h.g[y],I=0;I<E.length;I++)$e(E[I]);delete h.g[y],h.h--}}this.F=null},Gt.prototype.K=function(h,y,E,I){return this.i.add(String(h),y,!1,E,I)},Gt.prototype.L=function(h,y,E,I){return this.i.add(String(h),y,!0,E,I)};function _i(h,y,E,I){if(y=h.i.g[String(y)],!y)return!0;y=y.concat();for(var F=!0,W=0;W<y.length;++W){var ue=y[W];if(ue&&!ue.da&&ue.capture==E){var je=ue.listener,Kt=ue.ha||ue.src;ue.fa&&Jt(h.i,ue),F=je.call(Kt,I)!==!1&&F}}return F&&!I.defaultPrevented}function Sd(h,y,E){if(typeof h=="function")E&&(h=w(h,E));else if(h&&typeof h.handleEvent=="function")h=w(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(y)?-1:d.setTimeout(h,y||0)}function Hu(h){h.g=Sd(()=>{h.g=null,h.i&&(h.i=!1,Hu(h))},h.l);const y=h.h;h.h=null,h.m.apply(null,y)}class ng extends ge{constructor(y,E){super(),this.m=y,this.l=E,this.h=null,this.i=!1,this.g=null}j(y){this.h=arguments,this.g?this.i=!0:Hu(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Aa(h){ge.call(this),this.h=h,this.g={}}x(Aa,ge);var ls=[];function En(h){le(h.g,function(y,E){this.g.hasOwnProperty(E)&&Ia(y)},h),h.g={}}Aa.prototype.N=function(){Aa.aa.N.call(this),En(this)},Aa.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Gu=d.JSON.stringify,Vr=d.JSON.parse,Rn=class{stringify(h){return d.JSON.stringify(h,void 0)}parse(h){return d.JSON.parse(h,void 0)}};function $u(){}$u.prototype.h=null;function Rd(h){return h.h||(h.h=h.i())}function Cd(){}var Mr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function us(){pe.call(this,"d")}x(us,pe);function Ir(){pe.call(this,"c")}x(Ir,pe);var ir={},cs=null;function Ho(){return cs=cs||new Gt}ir.La="serverreachability";function Ku(h){pe.call(this,ir.La,h)}x(Ku,pe);function hs(h){const y=Ho();en(y,new Ku(y))}ir.STAT_EVENT="statevent";function Go(h,y){pe.call(this,ir.STAT_EVENT,h),this.stat=y}x(Go,pe);function Ot(h){const y=Ho();en(y,new Go(y,h))}ir.Ma="timingevent";function Dd(h,y){pe.call(this,ir.Ma,h),this.size=y}x(Dd,pe);function ds(h,y){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){h()},y)}function fs(){this.g=!0}fs.prototype.xa=function(){this.g=!1};function xd(h,y,E,I,F,W){h.info(function(){if(h.g)if(W)for(var ue="",je=W.split("&"),Kt=0;Kt<je.length;Kt++){var qe=je[Kt].split("=");if(1<qe.length){var rn=qe[0];qe=qe[1];var Qt=rn.split("_");ue=2<=Qt.length&&Qt[1]=="type"?ue+(rn+"="+qe+"&"):ue+(rn+"=redacted&")}}else ue=null;else ue=W;return"XMLHTTP REQ ("+I+") [attempt "+F+"]: "+y+`
`+E+`
`+ue})}function Pd(h,y,E,I,F,W,ue){h.info(function(){return"XMLHTTP RESP ("+I+") [ attempt "+F+"]: "+y+`
`+E+`
`+W+" "+ue})}function ps(h,y,E,I){h.info(function(){return"XMLHTTP TEXT ("+y+"): "+tn(h,E)+(I?" "+I:"")})}function Lr(h,y){h.info(function(){return"TIMEOUT: "+y})}fs.prototype.info=function(){};function tn(h,y){if(!h.g)return y;if(!y)return null;try{var E=JSON.parse(y);if(E){for(h=0;h<E.length;h++)if(Array.isArray(E[h])){var I=E[h];if(!(2>I.length)){var F=I[1];if(Array.isArray(F)&&!(1>F.length)){var W=F[0];if(W!="noop"&&W!="stop"&&W!="close")for(var ue=1;ue<F.length;ue++)F[ue]=""}}}}return Gu(E)}catch{return y}}var $t={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},vi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Sa;function $o(){}x($o,$u),$o.prototype.g=function(){return new XMLHttpRequest},$o.prototype.i=function(){return{}},Sa=new $o;function Ur(h,y,E,I){this.j=h,this.i=y,this.l=E,this.R=I||1,this.U=new Aa(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Qu}function Qu(){this.i=null,this.g="",this.h=!1}var ms={},Ra={};function Ar(h,y,E){h.L=1,h.v=xa(At(y)),h.m=E,h.P=!0,Ei(h,null)}function Ei(h,y){h.F=Date.now(),yt(h),h.A=At(h.v);var E=h.A,I=h.R;Array.isArray(I)||(I=[String(I)]),bi(E.i,"t",I),h.C=0,E=h.j.J,h.h=new Qu,h.g=Gd(h.j,E?y:null,!h.m),0<h.O&&(h.M=new ng(w(h.Y,h,h.g),h.O)),y=h.U,E=h.g,I=h.ca;var F="readystatechange";Array.isArray(F)||(F&&(ls[0]=F.toString()),F=ls);for(var W=0;W<F.length;W++){var ue=yi(E,F[W],I||y.handleEvent,!1,y.h||y);if(!ue)break;y.g[ue.key]=ue}y=h.H?R(h.H):{},h.m?(h.u||(h.u="POST"),y["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,y)):(h.u="GET",h.g.ea(h.A,h.u,null,y)),hs(),xd(h.i,h.u,h.A,h.l,h.R,h.m)}Ur.prototype.ca=function(h){h=h.target;const y=this.M;y&&ur(h)==3?y.j():this.Y(h)},Ur.prototype.Y=function(h){try{if(h==this.g)e:{const Qt=ur(this.g);var y=this.g.Ba();const Ri=this.g.Z();if(!(3>Qt)&&(Qt!=3||this.g&&(this.h.h||this.g.oa()||Ld(this.g)))){this.J||Qt!=4||y==7||(y==8||0>=Ri?hs(3):hs(2)),Ko(this);var E=this.g.Z();this.X=E;t:if(gs(this)){var I=Ld(this.g);h="";var F=I.length,W=ur(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Un(this),Gn(this);var ue="";break t}this.h.i=new d.TextDecoder}for(y=0;y<F;y++)this.h.h=!0,h+=this.h.i.decode(I[y],{stream:!(W&&y==F-1)});I.length=0,this.h.g+=h,this.C=0,ue=this.h.g}else ue=this.g.oa();if(this.o=E==200,Pd(this.i,this.u,this.A,this.l,this.R,Qt,E),this.o){if(this.T&&!this.K){t:{if(this.g){var je,Kt=this.g;if((je=Kt.g?Kt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$(je)){var qe=je;break t}}qe=null}if(E=qe)ps(this.i,this.l,E,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,$n(this,E);else{this.o=!1,this.s=3,Ot(12),Un(this),Gn(this);break e}}if(this.P){E=!0;let dn;for(;!this.J&&this.C<ue.length;)if(dn=ys(this,ue),dn==Ra){Qt==4&&(this.s=4,Ot(14),E=!1),ps(this.i,this.l,null,"[Incomplete Response]");break}else if(dn==ms){this.s=4,Ot(15),ps(this.i,this.l,ue,"[Invalid Chunk]"),E=!1;break}else ps(this.i,this.l,dn,null),$n(this,dn);if(gs(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Qt!=4||ue.length!=0||this.h.h||(this.s=1,Ot(16),E=!1),this.o=this.o&&E,!E)ps(this.i,this.l,ue,"[Invalid Chunked Response]"),Un(this),Gn(this);else if(0<ue.length&&!this.W){this.W=!0;var rn=this.j;rn.g==this&&rn.ba&&!rn.M&&(rn.j.info("Great, no buffering proxy detected. Bytes received: "+ue.length),La(rn),rn.M=!0,Ot(11))}}else ps(this.i,this.l,ue,null),$n(this,ue);Qt==4&&Un(this),this.o&&!this.J&&(Qt==4?jd(this.j,this):(this.o=!1,yt(this)))}else lg(this.g),E==400&&0<ue.indexOf("Unknown SID")?(this.s=3,Ot(12)):(this.s=0,Ot(13)),Un(this),Gn(this)}}}catch{}finally{}};function gs(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function ys(h,y){var E=h.C,I=y.indexOf(`
`,E);return I==-1?Ra:(E=Number(y.substring(E,I)),isNaN(E)?ms:(I+=1,I+E>y.length?Ra:(y=y.slice(I,I+E),h.C=I+E,y)))}Ur.prototype.cancel=function(){this.J=!0,Un(this)};function yt(h){h.S=Date.now()+h.I,Wu(h,h.I)}function Wu(h,y){if(h.B!=null)throw Error("WatchDog timer not null");h.B=ds(w(h.ba,h),y)}function Ko(h){h.B&&(d.clearTimeout(h.B),h.B=null)}Ur.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(Lr(this.i,this.A),this.L!=2&&(hs(),Ot(17)),Un(this),this.s=2,Gn(this)):Wu(this,this.S-h)};function Gn(h){h.j.G==0||h.J||jd(h.j,h)}function Un(h){Ko(h);var y=h.M;y&&typeof y.ma=="function"&&y.ma(),h.M=null,En(h.U),h.g&&(y=h.g,h.g=null,y.abort(),y.ma())}function $n(h,y){try{var E=h.j;if(E.G!=0&&(E.g==h||_s(E.h,h))){if(!h.K&&_s(E.h,h)&&E.G==3){try{var I=E.Da.g.parse(y)}catch{I=null}if(Array.isArray(I)&&I.length==3){var F=I;if(F[0]==0){e:if(!E.u){if(E.g)if(E.g.F+3e3<h.F)rl(E),tl(E);else break e;ac(E),Ot(18)}}else E.za=F[1],0<E.za-E.T&&37500>F[2]&&E.F&&E.v==0&&!E.C&&(E.C=ds(w(E.Za,E),6e3));if(1>=Nd(E.h)&&E.ca){try{E.ca()}catch{}E.ca=void 0}}else Si(E,11)}else if((h.K||E.g==h)&&rl(E),!$(y))for(F=E.Da.g.parse(y),y=0;y<F.length;y++){let qe=F[y];if(E.T=qe[0],qe=qe[1],E.G==2)if(qe[0]=="c"){E.K=qe[1],E.ia=qe[2];const rn=qe[3];rn!=null&&(E.la=rn,E.j.info("VER="+E.la));const Qt=qe[4];Qt!=null&&(E.Aa=Qt,E.j.info("SVER="+E.Aa));const Ri=qe[5];Ri!=null&&typeof Ri=="number"&&0<Ri&&(I=1.5*Ri,E.L=I,E.j.info("backChannelRequestTimeoutMs_="+I)),I=E;const dn=h.g;if(dn){const Gr=dn.g?dn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Gr){var W=I.h;W.g||Gr.indexOf("spdy")==-1&&Gr.indexOf("quic")==-1&&Gr.indexOf("h2")==-1||(W.j=W.l,W.g=new Set,W.h&&(vs(W,W.h),W.h=null))}if(I.D){const lc=dn.g?dn.g.getResponseHeader("X-HTTP-Session-Id"):null;lc&&(I.ya=lc,Ke(I.I,I.D,lc))}}E.G=3,E.l&&E.l.ua(),E.ba&&(E.R=Date.now()-h.F,E.j.info("Handshake RTT: "+E.R+"ms")),I=E;var ue=h;if(I.qa=Hd(I,I.J?I.ia:null,I.W),ue.K){sr(I.h,ue);var je=ue,Kt=I.L;Kt&&(je.I=Kt),je.B&&(Ko(je),yt(je)),I.g=ue}else zd(I);0<E.i.length&&nl(E)}else qe[0]!="stop"&&qe[0]!="close"||Si(E,7);else E.G==3&&(qe[0]=="stop"||qe[0]=="close"?qe[0]=="stop"?Si(E,7):ic(E):qe[0]!="noop"&&E.l&&E.l.ta(qe),E.v=0)}}hs(4)}catch{}}var rg=class{constructor(h,y){this.g=h,this.map=y}};function Yu(h){this.l=h||10,d.PerformanceNavigationTiming?(h=d.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Xu(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function Nd(h){return h.h?1:h.g?h.g.size:0}function _s(h,y){return h.h?h.h==y:h.g?h.g.has(y):!1}function vs(h,y){h.g?h.g.add(y):h.h=y}function sr(h,y){h.h&&h.h==y?h.h=null:h.g&&h.g.has(y)&&h.g.delete(y)}Yu.prototype.cancel=function(){if(this.i=Cn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function Cn(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let y=h.i;for(const E of h.g.values())y=y.concat(E.D);return y}return U(h.i)}function Od(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(p(h)){for(var y=[],E=h.length,I=0;I<E;I++)y.push(h[I]);return y}y=[],E=0;for(I in h)y[E++]=h[I];return y}function ig(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(p(h)||typeof h=="string"){var y=[];h=h.length;for(var E=0;E<h;E++)y.push(E);return y}y=[],E=0;for(const I in h)y[E++]=I;return y}}}function Ca(h,y){if(h.forEach&&typeof h.forEach=="function")h.forEach(y,void 0);else if(p(h)||typeof h=="string")Array.prototype.forEach.call(h,y,void 0);else for(var E=ig(h),I=Od(h),F=I.length,W=0;W<F;W++)y.call(void 0,I[W],E&&E[W],h)}var Zu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Qo(h,y){if(h){h=h.split("&");for(var E=0;E<h.length;E++){var I=h[E].indexOf("="),F=null;if(0<=I){var W=h[E].substring(0,I);F=h[E].substring(I+1)}else W=h[E];y(W,F?decodeURIComponent(F.replace(/\+/g," ")):"")}}}function Ti(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof Ti){this.h=h.h,Es(this,h.j),this.o=h.o,this.g=h.g,Da(this,h.s),this.l=h.l;var y=h.i,E=new Br;E.i=y.i,y.g&&(E.g=new Map(y.g),E.h=y.h),Wo(this,E),this.m=h.m}else h&&(y=String(h).match(Zu))?(this.h=!1,Es(this,y[1]||"",!0),this.o=Ts(y[2]||""),this.g=Ts(y[3]||"",!0),Da(this,y[4]),this.l=Ts(y[5]||"",!0),Wo(this,y[6]||"",!0),this.m=Ts(y[7]||"")):(this.h=!1,this.i=new Br(null,this.h))}Ti.prototype.toString=function(){var h=[],y=this.j;y&&h.push(ar(y,Ju,!0),":");var E=this.g;return(E||y=="file")&&(h.push("//"),(y=this.o)&&h.push(ar(y,Ju,!0),"@"),h.push(encodeURIComponent(String(E)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),E=this.s,E!=null&&h.push(":",String(E))),(E=this.l)&&(this.g&&E.charAt(0)!="/"&&h.push("/"),h.push(ar(E,E.charAt(0)=="/"?ec:kd,!0))),(E=this.i.toString())&&h.push("?",E),(E=this.m)&&h.push("#",ar(E,og)),h.join("")};function At(h){return new Ti(h)}function Es(h,y,E){h.j=E?Ts(y,!0):y,h.j&&(h.j=h.j.replace(/:$/,""))}function Da(h,y){if(y){if(y=Number(y),isNaN(y)||0>y)throw Error("Bad port number "+y);h.s=y}else h.s=null}function Wo(h,y,E){y instanceof Br?(h.i=y,tc(h.i,h.h)):(E||(y=ar(y,ag)),h.i=new Br(y,h.h))}function Ke(h,y,E){h.i.set(y,E)}function xa(h){return Ke(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function Ts(h,y){return h?y?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function ar(h,y,E){return typeof h=="string"?(h=encodeURI(h).replace(y,sg),E&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function sg(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var Ju=/[#\/\?@]/g,kd=/[#\?:]/g,ec=/[#\?]/g,ag=/[#\?@]/g,og=/#/g;function Br(h,y){this.h=this.g=null,this.i=h||null,this.j=!!y}function or(h){h.g||(h.g=new Map,h.h=0,h.i&&Qo(h.i,function(y,E){h.add(decodeURIComponent(y.replace(/\+/g," ")),E)}))}n=Br.prototype,n.add=function(h,y){or(this),this.i=null,h=Ii(this,h);var E=this.g.get(h);return E||this.g.set(h,E=[]),E.push(y),this.h+=1,this};function Yo(h,y){or(h),y=Ii(h,y),h.g.has(y)&&(h.i=null,h.h-=h.g.get(y).length,h.g.delete(y))}function wi(h,y){return or(h),y=Ii(h,y),h.g.has(y)}n.forEach=function(h,y){or(this),this.g.forEach(function(E,I){E.forEach(function(F){h.call(y,F,I,this)},this)},this)},n.na=function(){or(this);const h=Array.from(this.g.values()),y=Array.from(this.g.keys()),E=[];for(let I=0;I<y.length;I++){const F=h[I];for(let W=0;W<F.length;W++)E.push(y[I])}return E},n.V=function(h){or(this);let y=[];if(typeof h=="string")wi(this,h)&&(y=y.concat(this.g.get(Ii(this,h))));else{h=Array.from(this.g.values());for(let E=0;E<h.length;E++)y=y.concat(h[E])}return y},n.set=function(h,y){return or(this),this.i=null,h=Ii(this,h),wi(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[y]),this.h+=1,this},n.get=function(h,y){return h?(h=this.V(h),0<h.length?String(h[0]):y):y};function bi(h,y,E){Yo(h,y),0<E.length&&(h.i=null,h.g.set(Ii(h,y),U(E)),h.h+=E.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],y=Array.from(this.g.keys());for(var E=0;E<y.length;E++){var I=y[E];const W=encodeURIComponent(String(I)),ue=this.V(I);for(I=0;I<ue.length;I++){var F=W;ue[I]!==""&&(F+="="+encodeURIComponent(String(ue[I]))),h.push(F)}}return this.i=h.join("&")};function Ii(h,y){return y=String(y),h.j&&(y=y.toLowerCase()),y}function tc(h,y){y&&!h.j&&(or(h),h.i=null,h.g.forEach(function(E,I){var F=I.toLowerCase();I!=F&&(Yo(this,I),bi(this,F,E))},h)),h.j=y}function Vd(h,y){const E=new fs;if(d.Image){const I=new Image;I.onload=S(lr,E,"TestLoadImage: loaded",!0,y,I),I.onerror=S(lr,E,"TestLoadImage: error",!1,y,I),I.onabort=S(lr,E,"TestLoadImage: abort",!1,y,I),I.ontimeout=S(lr,E,"TestLoadImage: timeout",!1,y,I),d.setTimeout(function(){I.ontimeout&&I.ontimeout()},1e4),I.src=h}else y(!1)}function Pa(h,y){const E=new fs,I=new AbortController,F=setTimeout(()=>{I.abort(),lr(E,"TestPingServer: timeout",!1,y)},1e4);fetch(h,{signal:I.signal}).then(W=>{clearTimeout(F),W.ok?lr(E,"TestPingServer: ok",!0,y):lr(E,"TestPingServer: server error",!1,y)}).catch(()=>{clearTimeout(F),lr(E,"TestPingServer: error",!1,y)})}function lr(h,y,E,I,F){try{F&&(F.onload=null,F.onerror=null,F.onabort=null,F.ontimeout=null),I(E)}catch{}}function Na(){this.g=new Rn}function zr(h,y,E){const I=E||"";try{Ca(h,function(F,W){let ue=F;m(F)&&(ue=Gu(F)),y.push(I+W+"="+encodeURIComponent(ue))})}catch(F){throw y.push(I+"type="+encodeURIComponent("_badmap")),F}}function ws(h){this.l=h.Ub||null,this.j=h.eb||!1}x(ws,$u),ws.prototype.g=function(){return new Ai(this.l,this.j)},ws.prototype.i=function(h){return function(){return h}}({});function Ai(h,y){Gt.call(this),this.D=h,this.o=y,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(Ai,Gt),n=Ai.prototype,n.open=function(h,y){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=y,this.readyState=1,jr(this)},n.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const y={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(y.body=h),(this.D||d).fetch(new Request(this.A,y)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Fr(this)),this.readyState=0},n.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,jr(this)),this.g&&(this.readyState=3,jr(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;nc(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function nc(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}n.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var y=h.value?h.value:new Uint8Array(0);(y=this.v.decode(y,{stream:!h.done}))&&(this.response=this.responseText+=y)}h.done?Fr(this):jr(this),this.readyState==3&&nc(this)}},n.Ra=function(h){this.g&&(this.response=this.responseText=h,Fr(this))},n.Qa=function(h){this.g&&(this.response=h,Fr(this))},n.ga=function(){this.g&&Fr(this)};function Fr(h){h.readyState=4,h.l=null,h.j=null,h.v=null,jr(h)}n.setRequestHeader=function(h,y){this.u.append(h,y)},n.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],y=this.h.entries();for(var E=y.next();!E.done;)E=E.value,h.push(E[0]+": "+E[1]),E=y.next();return h.join(`\r
`)};function jr(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(Ai.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function rc(h){let y="";return le(h,function(E,I){y+=I,y+=":",y+=E,y+=`\r
`}),y}function nn(h,y,E){e:{for(I in E){var I=!1;break e}I=!0}I||(E=rc(E),typeof h=="string"?E!=null&&encodeURIComponent(String(E)):Ke(h,y,E))}function Je(h){Gt.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(Je,Gt);var Xo=/^https?$/i,Oa=["POST","PUT"];n=Je.prototype,n.Ha=function(h){this.J=h},n.ea=function(h,y,E,I){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);y=y?y.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Sa.g(),this.v=this.o?Rd(this.o):Rd(Sa),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(y,String(h),!0),this.B=!1}catch(W){Md(this,W);return}if(h=E||"",E=new Map(this.headers),I)if(Object.getPrototypeOf(I)===Object.prototype)for(var F in I)E.set(F,I[F]);else if(typeof I.keys=="function"&&typeof I.get=="function")for(const W of I.keys())E.set(W,I.get(W));else throw Error("Unknown input type for opt_headers: "+String(I));I=Array.from(E.keys()).find(W=>W.toLowerCase()=="content-type"),F=d.FormData&&h instanceof d.FormData,!(0<=Array.prototype.indexOf.call(Oa,y,void 0))||I||F||E.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[W,ue]of E)this.g.setRequestHeader(W,ue);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ka(this),this.u=!0,this.g.send(h),this.u=!1}catch(W){Md(this,W)}};function Md(h,y){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=y,h.m=5,Zo(h),qr(h)}function Zo(h){h.A||(h.A=!0,en(h,"complete"),en(h,"error"))}n.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,en(this,"complete"),en(this,"abort"),qr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),qr(this,!0)),Je.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Jo(this):this.bb())},n.bb=function(){Jo(this)};function Jo(h){if(h.h&&typeof u<"u"&&(!h.v[1]||ur(h)!=4||h.Z()!=2)){if(h.u&&ur(h)==4)Sd(h.Ea,0,h);else if(en(h,"readystatechange"),ur(h)==4){h.h=!1;try{const ue=h.Z();e:switch(ue){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var y=!0;break e;default:y=!1}var E;if(!(E=y)){var I;if(I=ue===0){var F=String(h.D).match(Zu)[1]||null;!F&&d.self&&d.self.location&&(F=d.self.location.protocol.slice(0,-1)),I=!Xo.test(F?F.toLowerCase():"")}E=I}if(E)en(h,"complete"),en(h,"success");else{h.m=6;try{var W=2<ur(h)?h.g.statusText:""}catch{W=""}h.l=W+" ["+h.Z()+"]",Zo(h)}}finally{qr(h)}}}}function qr(h,y){if(h.g){ka(h);const E=h.g,I=h.v[0]?()=>{}:null;h.g=null,h.v=null,y||en(h,"ready");try{E.onreadystatechange=I}catch{}}}function ka(h){h.I&&(d.clearTimeout(h.I),h.I=null)}n.isActive=function(){return!!this.g};function ur(h){return h.g?h.g.readyState:0}n.Z=function(){try{return 2<ur(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(h){if(this.g){var y=this.g.responseText;return h&&y.indexOf(h)==0&&(y=y.substring(h.length)),Vr(y)}};function Ld(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function lg(h){const y={};h=(h.g&&2<=ur(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let I=0;I<h.length;I++){if($(h[I]))continue;var E=V(h[I]);const F=E[0];if(E=E[1],typeof E!="string")continue;E=E.trim();const W=y[F]||[];y[F]=W,W.push(E)}D(y,function(I){return I.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Va(h,y,E){return E&&E.internalChannelParams&&E.internalChannelParams[h]||y}function el(h){this.Aa=0,this.i=[],this.j=new fs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Va("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Va("baseRetryDelayMs",5e3,h),this.cb=Va("retryDelaySeedMs",1e4,h),this.Wa=Va("forwardChannelMaxRetries",2,h),this.wa=Va("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new Yu(h&&h.concurrentRequestLimit),this.Da=new Na,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=el.prototype,n.la=8,n.G=1,n.connect=function(h,y,E,I){Ot(0),this.W=h,this.H=y||{},E&&I!==void 0&&(this.H.OSID=E,this.H.OAID=I),this.F=this.X,this.I=Hd(this,null,this.W),nl(this)};function ic(h){if(Ud(h),h.G==3){var y=h.U++,E=At(h.I);if(Ke(E,"SID",h.K),Ke(E,"RID",y),Ke(E,"TYPE","terminate"),Ma(h,E),y=new Ur(h,h.j,y),y.L=2,y.v=xa(At(E)),E=!1,d.navigator&&d.navigator.sendBeacon)try{E=d.navigator.sendBeacon(y.v.toString(),"")}catch{}!E&&d.Image&&(new Image().src=y.v,E=!0),E||(y.g=Gd(y.j,null),y.g.ea(y.v)),y.F=Date.now(),yt(y)}qd(h)}function tl(h){h.g&&(La(h),h.g.cancel(),h.g=null)}function Ud(h){tl(h),h.u&&(d.clearTimeout(h.u),h.u=null),rl(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&d.clearTimeout(h.s),h.s=null)}function nl(h){if(!Xu(h.h)&&!h.s){h.s=!0;var y=h.Ga;be||O(),Te||(be(),Te=!0),Ne.add(y,h),h.B=0}}function ug(h,y){return Nd(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=y.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=ds(w(h.Ga,h,y),oc(h,h.B)),h.B++,!0)}n.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const F=new Ur(this,this.j,h);let W=this.o;if(this.S&&(W?(W=R(W),P(W,this.S)):W=this.S),this.m!==null||this.O||(F.H=W,W=null),this.P)e:{for(var y=0,E=0;E<this.i.length;E++){t:{var I=this.i[E];if("__data__"in I.map&&(I=I.map.__data__,typeof I=="string")){I=I.length;break t}I=void 0}if(I===void 0)break;if(y+=I,4096<y){y=E;break e}if(y===4096||E===this.i.length-1){y=E+1;break e}}y=1e3}else y=1e3;y=Bd(this,F,y),E=At(this.I),Ke(E,"RID",h),Ke(E,"CVER",22),this.D&&Ke(E,"X-HTTP-Session-Id",this.D),Ma(this,E),W&&(this.O?y="headers="+encodeURIComponent(String(rc(W)))+"&"+y:this.m&&nn(E,this.m,W)),vs(this.h,F),this.Ua&&Ke(E,"TYPE","init"),this.P?(Ke(E,"$req",y),Ke(E,"SID","null"),F.T=!0,Ar(F,E,null)):Ar(F,E,y),this.G=2}}else this.G==3&&(h?sc(this,h):this.i.length==0||Xu(this.h)||sc(this))};function sc(h,y){var E;y?E=y.l:E=h.U++;const I=At(h.I);Ke(I,"SID",h.K),Ke(I,"RID",E),Ke(I,"AID",h.T),Ma(h,I),h.m&&h.o&&nn(I,h.m,h.o),E=new Ur(h,h.j,E,h.B+1),h.m===null&&(E.H=h.o),y&&(h.i=y.D.concat(h.i)),y=Bd(h,E,1e3),E.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),vs(h.h,E),Ar(E,I,y)}function Ma(h,y){h.H&&le(h.H,function(E,I){Ke(y,I,E)}),h.l&&Ca({},function(E,I){Ke(y,I,E)})}function Bd(h,y,E){E=Math.min(h.i.length,E);var I=h.l?w(h.l.Na,h.l,h):null;e:{var F=h.i;let W=-1;for(;;){const ue=["count="+E];W==-1?0<E?(W=F[0].g,ue.push("ofs="+W)):W=0:ue.push("ofs="+W);let je=!0;for(let Kt=0;Kt<E;Kt++){let qe=F[Kt].g;const rn=F[Kt].map;if(qe-=W,0>qe)W=Math.max(0,F[Kt].g-100),je=!1;else try{zr(rn,ue,"req"+qe+"_")}catch{I&&I(rn)}}if(je){I=ue.join("&");break e}}}return h=h.i.splice(0,E),y.D=h,I}function zd(h){if(!h.g&&!h.u){h.Y=1;var y=h.Fa;be||O(),Te||(be(),Te=!0),Ne.add(y,h),h.v=0}}function ac(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=ds(w(h.Fa,h),oc(h,h.v)),h.v++,!0)}n.Fa=function(){if(this.u=null,Fd(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=ds(w(this.ab,this),h)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ot(10),tl(this),Fd(this))};function La(h){h.A!=null&&(d.clearTimeout(h.A),h.A=null)}function Fd(h){h.g=new Ur(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var y=At(h.qa);Ke(y,"RID","rpc"),Ke(y,"SID",h.K),Ke(y,"AID",h.T),Ke(y,"CI",h.F?"0":"1"),!h.F&&h.ja&&Ke(y,"TO",h.ja),Ke(y,"TYPE","xmlhttp"),Ma(h,y),h.m&&h.o&&nn(y,h.m,h.o),h.L&&(h.g.I=h.L);var E=h.g;h=h.ia,E.L=1,E.v=xa(At(y)),E.m=null,E.P=!0,Ei(E,h)}n.Za=function(){this.C!=null&&(this.C=null,tl(this),ac(this),Ot(19))};function rl(h){h.C!=null&&(d.clearTimeout(h.C),h.C=null)}function jd(h,y){var E=null;if(h.g==y){rl(h),La(h),h.g=null;var I=2}else if(_s(h.h,y))E=y.D,sr(h.h,y),I=1;else return;if(h.G!=0){if(y.o)if(I==1){E=y.m?y.m.length:0,y=Date.now()-y.F;var F=h.B;I=Ho(),en(I,new Dd(I,E)),nl(h)}else zd(h);else if(F=y.s,F==3||F==0&&0<y.X||!(I==1&&ug(h,y)||I==2&&ac(h)))switch(E&&0<E.length&&(y=h.h,y.i=y.i.concat(E)),F){case 1:Si(h,5);break;case 4:Si(h,10);break;case 3:Si(h,6);break;default:Si(h,2)}}}function oc(h,y){let E=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(E*=2),E*y}function Si(h,y){if(h.j.info("Error code "+y),y==2){var E=w(h.fb,h),I=h.Xa;const F=!I;I=new Ti(I||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Es(I,"https"),xa(I),F?Vd(I.toString(),E):Pa(I.toString(),E)}else Ot(2);h.G=0,h.l&&h.l.sa(y),qd(h),Ud(h)}n.fb=function(h){h?(this.j.info("Successfully pinged google.com"),Ot(2)):(this.j.info("Failed to ping google.com"),Ot(1))};function qd(h){if(h.G=0,h.ka=[],h.l){const y=Cn(h.h);(y.length!=0||h.i.length!=0)&&(M(h.ka,y),M(h.ka,h.i),h.h.i.length=0,U(h.i),h.i.length=0),h.l.ra()}}function Hd(h,y,E){var I=E instanceof Ti?At(E):new Ti(E);if(I.g!="")y&&(I.g=y+"."+I.g),Da(I,I.s);else{var F=d.location;I=F.protocol,y=y?y+"."+F.hostname:F.hostname,F=+F.port;var W=new Ti(null);I&&Es(W,I),y&&(W.g=y),F&&Da(W,F),E&&(W.l=E),I=W}return E=h.D,y=h.ya,E&&y&&Ke(I,E,y),Ke(I,"VER",h.la),Ma(h,I),I}function Gd(h,y,E){if(y&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return y=h.Ca&&!h.pa?new Je(new ws({eb:E})):new Je(h.pa),y.Ha(h.J),y}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function $d(){}n=$d.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function il(){}il.prototype.g=function(h,y){return new Dn(h,y)};function Dn(h,y){Gt.call(this),this.g=new el(y),this.l=h,this.h=y&&y.messageUrlParams||null,h=y&&y.messageHeaders||null,y&&y.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=y&&y.initMessageHeaders||null,y&&y.messageContentType&&(h?h["X-WebChannel-Content-Type"]=y.messageContentType:h={"X-WebChannel-Content-Type":y.messageContentType}),y&&y.va&&(h?h["X-WebChannel-Client-Profile"]=y.va:h={"X-WebChannel-Client-Profile":y.va}),this.g.S=h,(h=y&&y.Sb)&&!$(h)&&(this.g.m=h),this.v=y&&y.supportsCrossDomainXhr||!1,this.u=y&&y.sendRawJson||!1,(y=y&&y.httpSessionIdParam)&&!$(y)&&(this.g.D=y,h=this.h,h!==null&&y in h&&(h=this.h,y in h&&delete h[y])),this.j=new Hr(this)}x(Dn,Gt),Dn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Dn.prototype.close=function(){ic(this.g)},Dn.prototype.o=function(h){var y=this.g;if(typeof h=="string"){var E={};E.__data__=h,h=E}else this.u&&(E={},E.__data__=Gu(h),h=E);y.i.push(new rg(y.Ya++,h)),y.G==3&&nl(y)},Dn.prototype.N=function(){this.g.l=null,delete this.j,ic(this.g),delete this.g,Dn.aa.N.call(this)};function Kd(h){us.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var y=h.__sm__;if(y){e:{for(const E in y){h=E;break e}h=void 0}(this.i=h)&&(h=this.i,y=y!==null&&h in y?y[h]:void 0),this.data=y}else this.data=h}x(Kd,us);function Qd(){Ir.call(this),this.status=1}x(Qd,Ir);function Hr(h){this.g=h}x(Hr,$d),Hr.prototype.ua=function(){en(this.g,"a")},Hr.prototype.ta=function(h){en(this.g,new Kd(h))},Hr.prototype.sa=function(h){en(this.g,new Qd)},Hr.prototype.ra=function(){en(this.g,"b")},il.prototype.createWebChannel=il.prototype.g,Dn.prototype.send=Dn.prototype.o,Dn.prototype.open=Dn.prototype.m,Dn.prototype.close=Dn.prototype.close,wC=function(){return new il},TC=function(){return Ho()},EC=ir,Y_={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},$t.NO_ERROR=0,$t.TIMEOUT=8,$t.HTTP_ERROR=6,gp=$t,vi.COMPLETE="complete",vC=vi,Cd.EventType=Mr,Mr.OPEN="a",Mr.CLOSE="b",Mr.ERROR="c",Mr.MESSAGE="d",Gt.prototype.listen=Gt.prototype.K,ch=Cd,Je.prototype.listenOnce=Je.prototype.L,Je.prototype.getLastError=Je.prototype.Ka,Je.prototype.getLastErrorCode=Je.prototype.Ba,Je.prototype.getStatus=Je.prototype.Z,Je.prototype.getResponseJson=Je.prototype.Oa,Je.prototype.getResponseText=Je.prototype.oa,Je.prototype.send=Je.prototype.ea,Je.prototype.setWithCredentials=Je.prototype.Ha,_C=Je}).apply(typeof Xf<"u"?Xf:typeof self<"u"?self:typeof window<"u"?window:{});const MI="@firebase/firestore",LI="4.7.10";/**
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
 */class cn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}cn.UNAUTHENTICATED=new cn(null),cn.GOOGLE_CREDENTIALS=new cn("google-credentials-uid"),cn.FIRST_PARTY=new cn("first-party-uid"),cn.MOCK_USER=new cn("mock-user");/**
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
 */let ku="11.5.0";/**
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
 */const la=new gm("@firebase/firestore");function Bl(){return la.logLevel}function E4(n){la.setLogLevel(n)}function re(n,...e){if(la.logLevel<=Ue.DEBUG){const t=e.map(fE);la.debug(`Firestore (${ku}): ${n}`,...t)}}function Vt(n,...e){if(la.logLevel<=Ue.ERROR){const t=e.map(fE);la.error(`Firestore (${ku}): ${n}`,...t)}}function di(n,...e){if(la.logLevel<=Ue.WARN){const t=e.map(fE);la.warn(`Firestore (${ku}): ${n}`,...t)}}function fE(n){if(typeof n=="string")return n;try{/**
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
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function me(n="Unexpected state"){const e=`FIRESTORE (${ku}) INTERNAL ASSERTION FAILED: `+n;throw Vt(e),new Error(e)}function _e(n,e){n||me()}function T4(n,e){n||me()}function de(n,e){return n}/**
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
 */const Q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class te extends kn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class _n{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class bC{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class w4{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(cn.UNAUTHENTICATED))}shutdown(){}}class b4{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class I4{constructor(e){this.t=e,this.currentUser=cn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){_e(this.o===void 0);let r=this.i;const a=p=>this.i!==r?(r=this.i,t(p)):Promise.resolve();let o=new _n;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new _n,e.enqueueRetryable(()=>a(this.currentUser))};const u=()=>{const p=o;e.enqueueRetryable(async()=>{await p.promise,await a(this.currentUser)})},d=p=>{re("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(p=>d(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(re("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new _n)}},0),u()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(re("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(_e(typeof r.accessToken=="string"),new bC(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return _e(e===null||typeof e=="string"),new cn(e)}}class A4{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=cn.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class S4{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new A4(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(cn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class UI{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class R4{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,ft(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){_e(this.o===void 0);const r=o=>{o.error!=null&&re("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.R;return this.R=o.token,re("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const a=o=>{re("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>a(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?a(o):re("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new UI(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(_e(typeof t.token=="string"),this.R=t.token,new UI(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function C4(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pE(){return new TextEncoder}/**
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
 */class IC{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const a=C4(40);for(let o=0;o<a.length;++o)r.length<20&&a[o]<t&&(r+=e.charAt(a[o]%62))}return r}}function Se(n,e){return n<e?-1:n>e?1:0}function X_(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),a=e.codePointAt(t);if(r!==a){if(r<128&&a<128)return Se(r,a);{const o=pE(),u=D4(o.encode(BI(n,t)),o.encode(BI(e,t)));return u!==0?u:Se(r,a)}}t+=r>65535?2:1}return Se(n.length,e.length)}function BI(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function D4(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return Se(n[t],e[t]);return Se(n.length,e.length)}function ou(n,e,t){return n.length===e.length&&n.every((r,a)=>t(r,e[a]))}function AC(n){return n+"\0"}/**
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
 */const zI=-62135596800,FI=1e6;class gt{static now(){return gt.fromMillis(Date.now())}static fromDate(e){return gt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*FI);return new gt(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new te(Q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new te(Q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<zI)throw new te(Q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new te(Q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/FI}_compareTo(e){return this.seconds===e.seconds?Se(this.nanoseconds,e.nanoseconds):Se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-zI;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Ee{static fromTimestamp(e){return new Ee(e)}static min(){return new Ee(new gt(0,0))}static max(){return new Ee(new gt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const jI="__name__";class Xr{constructor(e,t,r){t===void 0?t=0:t>e.length&&me(),r===void 0?r=e.length-t:r>e.length-t&&me(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Xr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Xr?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let a=0;a<r;a++){const o=Xr.compareSegments(e.get(a),t.get(a));if(o!==0)return o}return Se(e.length,t.length)}static compareSegments(e,t){const r=Xr.isNumericId(e),a=Xr.isNumericId(t);return r&&!a?-1:!r&&a?1:r&&a?Xr.extractNumericId(e).compare(Xr.extractNumericId(t)):X_(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ta.fromString(e.substring(4,e.length-2))}}class Be extends Xr{construct(e,t,r){return new Be(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new te(Q.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(a=>a.length>0))}return new Be(t)}static emptyPath(){return new Be([])}}const x4=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class pt extends Xr{construct(e,t,r){return new pt(e,t,r)}static isValidIdentifier(e){return x4.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),pt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===jI}static keyField(){return new pt([jI])}static fromServerFormat(e){const t=[];let r="",a=0;const o=()=>{if(r.length===0)throw new te(Q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let u=!1;for(;a<e.length;){const d=e[a];if(d==="\\"){if(a+1===e.length)throw new te(Q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[a+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new te(Q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=p,a+=2}else d==="`"?(u=!u,a++):d!=="."||u?(r+=d,a++):(o(),a++)}if(o(),u)throw new te(Q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new pt(t)}static emptyPath(){return new pt([])}}/**
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
 */class ce{constructor(e){this.path=e}static fromPath(e){return new ce(Be.fromString(e))}static fromName(e){return new ce(Be.fromString(e).popFirst(5))}static empty(){return new ce(Be.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Be.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Be.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ce(new Be(e.slice()))}}/**
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
 */const lu=-1;class Fp{constructor(e,t,r,a){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=a}}function Z_(n){return n.fields.find(e=>e.kind===2)}function io(n){return n.fields.filter(e=>e.kind!==2)}Fp.UNKNOWN_ID=-1;class yp{constructor(e,t){this.fieldPath=e,this.kind=t}}class Lh{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Lh(0,nr.min())}}function SC(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,a=Ee.fromTimestamp(r===1e9?new gt(t+1,0):new gt(t,r));return new nr(a,ce.empty(),e)}function RC(n){return new nr(n.readTime,n.key,lu)}class nr{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new nr(Ee.min(),ce.empty(),lu)}static max(){return new nr(Ee.max(),ce.empty(),lu)}}function mE(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ce.comparator(n.documentKey,e.documentKey),t!==0?t:Se(n.largestBatchId,e.largestBatchId))}/**
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
 */const CC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class DC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function va(n){if(n.code!==Q.FAILED_PRECONDITION||n.message!==CC)throw n;re("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&me(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new j((r,a)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,a)},this.catchCallback=o=>{this.wrapFailure(t,o).next(r,a)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof j?t:j.resolve(t)}catch(t){return j.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):j.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):j.reject(t)}static resolve(e){return new j((t,r)=>{t(e)})}static reject(e){return new j((t,r)=>{r(e)})}static waitFor(e){return new j((t,r)=>{let a=0,o=0,u=!1;e.forEach(d=>{++a,d.next(()=>{++o,u&&o===a&&t()},p=>r(p))}),u=!0,o===a&&t()})}static or(e){let t=j.resolve(!1);for(const r of e)t=t.next(a=>a?j.resolve(a):r());return t}static forEach(e,t){const r=[];return e.forEach((a,o)=>{r.push(t.call(this,a,o))}),this.waitFor(r)}static mapArray(e,t){return new j((r,a)=>{const o=e.length,u=new Array(o);let d=0;for(let p=0;p<o;p++){const m=p;t(e[m]).next(_=>{u[m]=_,++d,d===o&&r(u)},_=>a(_))}})}static doWhile(e,t){return new j((r,a)=>{const o=()=>{e()===!0?t().next(()=>{o()},a):r()};o()})}}/**
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
 */const Jn="SimpleDb";class Cm{static open(e,t,r,a){try{return new Cm(t,e.transaction(a,r))}catch(o){throw new Eh(t,o)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.m=new _n,this.transaction.oncomplete=()=>{this.m.resolve()},this.transaction.onabort=()=>{t.error?this.m.reject(new Eh(e,t.error)):this.m.resolve()},this.transaction.onerror=r=>{const a=gE(r.target.error);this.m.reject(new Eh(e,a))}}get p(){return this.m.promise}abort(e){e&&this.m.reject(e),this.aborted||(re(Jn,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}S(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new N4(t)}}class oi{static delete(e){return re(Jn,"Removing database:",e),ao(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!xh())return!1;if(oi.v())return!0;const e=wt(),t=oi.C(e),r=0<t&&t<10,a=xC(e),o=0<a&&a<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||o)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,t){return e.store(t)}static C(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}constructor(e,t,r){this.name=e,this.version=t,this.O=r,oi.C(wt())===12.2&&Vt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async N(e){return this.db||(re(Jn,"Opening database:",this.name),this.db=await new Promise((t,r)=>{const a=indexedDB.open(this.name,this.version);a.onsuccess=o=>{const u=o.target.result;t(u)},a.onblocked=()=>{r(new Eh(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},a.onerror=o=>{const u=o.target.error;u.name==="VersionError"?r(new te(Q.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):u.name==="InvalidStateError"?r(new te(Q.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+u)):r(new Eh(e,u))},a.onupgradeneeded=o=>{re(Jn,'Database "'+this.name+'" requires upgrade from version:',o.oldVersion);const u=o.target.result;this.O.B(u,a.transaction,o.oldVersion,this.version).next(()=>{re(Jn,"Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=t=>this.L(t)),this.db}k(e){this.L=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,a){const o=t==="readonly";let u=0;for(;;){++u;try{this.db=await this.N(e);const d=Cm.open(this.db,e,o?"readonly":"readwrite",r),p=a(d).next(m=>(d.S(),m)).catch(m=>(d.abort(m),j.reject(m))).toPromise();return p.catch(()=>{}),await d.p,p}catch(d){const p=d,m=p.name!=="FirebaseError"&&u<3;if(re(Jn,"Transaction failed with error:",p.message,"Retrying:",m),this.close(),!m)return Promise.reject(p)}}}close(){this.db&&this.db.close(),this.db=void 0}}function xC(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class P4{constructor(e){this.q=e,this.$=!1,this.U=null}get isDone(){return this.$}get K(){return this.U}set cursor(e){this.q=e}done(){this.$=!0}W(e){this.U=e}delete(){return ao(this.q.delete())}}class Eh extends te{constructor(e,t){super(Q.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Ea(n){return n.name==="IndexedDbTransactionError"}class N4{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(re(Jn,"PUT",this.store.name,e,t),r=this.store.put(t,e)):(re(Jn,"PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),ao(r)}add(e){return re(Jn,"ADD",this.store.name,e,e),ao(this.store.add(e))}get(e){return ao(this.store.get(e)).next(t=>(t===void 0&&(t=null),re(Jn,"GET",this.store.name,e,t),t))}delete(e){return re(Jn,"DELETE",this.store.name,e),ao(this.store.delete(e))}count(){return re(Jn,"COUNT",this.store.name),ao(this.store.count())}G(e,t){const r=this.options(e,t),a=r.index?this.store.index(r.index):this.store;if(typeof a.getAll=="function"){const o=a.getAll(r.range);return new j((u,d)=>{o.onerror=p=>{d(p.target.error)},o.onsuccess=p=>{u(p.target.result)}})}{const o=this.cursor(r),u=[];return this.j(o,(d,p)=>{u.push(p)}).next(()=>u)}}H(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new j((a,o)=>{r.onerror=u=>{o(u.target.error)},r.onsuccess=u=>{a(u.target.result)}})}J(e,t){re(Jn,"DELETE ALL",this.store.name);const r=this.options(e,t);r.Y=!1;const a=this.cursor(r);return this.j(a,(o,u,d)=>d.delete())}Z(e,t){let r;t?r=e:(r={},t=e);const a=this.cursor(r);return this.j(a,t)}X(e){const t=this.cursor({});return new j((r,a)=>{t.onerror=o=>{const u=gE(o.target.error);a(u)},t.onsuccess=o=>{const u=o.target.result;u?e(u.primaryKey,u.value).next(d=>{d?u.continue():r()}):r()}})}j(e,t){const r=[];return new j((a,o)=>{e.onerror=u=>{o(u.target.error)},e.onsuccess=u=>{const d=u.target.result;if(!d)return void a();const p=new P4(d),m=t(d.primaryKey,d.value,p);if(m instanceof j){const _=m.catch(v=>(p.done(),j.reject(v)));r.push(_)}p.isDone?a():p.K===null?d.continue():d.continue(p.K)}}).next(()=>j.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function ao(n){return new j((e,t)=>{n.onsuccess=r=>{const a=r.target.result;e(a)},n.onerror=r=>{const a=gE(r.target.error);t(a)}})}let qI=!1;function gE(n){const e=oi.C(wt());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new te("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return qI||(qI=!0,setTimeout(()=>{throw r},0)),r}}return n}const Th="IndexBackfiller";class O4{constructor(e,t){this.asyncQueue=e,this.ee=t,this.task=null}start(){this.te(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}te(e){re(Th,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{const t=await this.ee.ne();re(Th,`Documents written: ${t}`)}catch(t){Ea(t)?re(Th,"Ignoring IndexedDB error during index backfill: ",t):await va(t)}await this.te(6e4)})}}class k4{constructor(e,t){this.localStore=e,this.persistence=t}async ne(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.re(t,e))}re(e,t){const r=new Set;let a=t,o=!0;return j.doWhile(()=>o===!0&&a>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(u=>{if(u!==null&&!r.has(u))return re(Th,`Processing collection: ${u}`),this.ie(e,u,a).next(d=>{a-=d,r.add(u)});o=!1})).next(()=>t-a)}ie(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(a=>this.localStore.localDocuments.getNextDocuments(e,t,a,r).next(o=>{const u=o.changes;return this.localStore.indexManager.updateIndexEntries(e,u).next(()=>this.se(a,o)).next(d=>(re(Th,`Updating offset: ${d}`),this.localStore.indexManager.updateCollectionGroup(e,t,d))).next(()=>u.size)}))}se(e,t){let r=e;return t.changes.forEach((a,o)=>{const u=RC(o);mE(u,r)>0&&(r=u)}),new nr(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.oe(r),this._e=r=>t.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}jn.ae=-1;/**
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
 */const na=-1;function hd(n){return n==null}function Uh(n){return n===0&&1/n==-1/0}function PC(n){return typeof n=="number"&&Number.isInteger(n)&&!Uh(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const jp="";function An(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=HI(e)),e=V4(n.get(t),e);return HI(e)}function V4(n,e){let t=e;const r=n.length;for(let a=0;a<r;a++){const o=n.charAt(a);switch(o){case"\0":t+="";break;case jp:t+="";break;default:t+=o}}return t}function HI(n){return n+jp+""}function si(n){const e=n.length;if(_e(e>=2),e===2)return _e(n.charAt(0)===jp&&n.charAt(1)===""),Be.emptyPath();const t=e-2,r=[];let a="";for(let o=0;o<e;){const u=n.indexOf(jp,o);switch((u<0||u>t)&&me(),n.charAt(u+1)){case"":const d=n.substring(o,u);let p;a.length===0?p=d:(a+=d,p=a,a=""),r.push(p);break;case"":a+=n.substring(o,u),a+="\0";break;case"":a+=n.substring(o,u+1);break;default:me()}o=u+2}return new Be(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const so="remoteDocuments",dd="owner",Ol="owner",Bh="mutationQueues",M4="userId",xr="mutations",GI="batchId",po="userMutationsIndex",$I=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _p(n,e){return[n,An(e)]}function NC(n,e,t){return[n,An(e),t]}const L4={},uu="documentMutations",qp="remoteDocumentsV14",U4=["prefixPath","collectionGroup","readTime","documentId"],vp="documentKeyIndex",B4=["prefixPath","collectionGroup","documentId"],OC="collectionGroupIndex",z4=["collectionGroup","readTime","prefixPath","documentId"],zh="remoteDocumentGlobal",J_="remoteDocumentGlobalKey",cu="targets",kC="queryTargetsIndex",F4=["canonicalId","targetId"],hu="targetDocuments",j4=["targetId","path"],yE="documentTargetsIndex",q4=["path","targetId"],Hp="targetGlobalKey",To="targetGlobal",Fh="collectionParents",H4=["collectionId","parent"],du="clientMetadata",G4="clientId",Dm="bundles",$4="bundleId",xm="namedQueries",K4="name",_E="indexConfiguration",Q4="indexId",ev="collectionGroupIndex",W4="collectionGroup",Gp="indexState",Y4=["indexId","uid"],VC="sequenceNumberIndex",X4=["uid","sequenceNumber"],$p="indexEntries",Z4=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],MC="documentKeyIndex",J4=["indexId","uid","orderedDocumentKey"],Pm="documentOverlays",eB=["userId","collectionPath","documentId"],tv="collectionPathOverlayIndex",tB=["userId","collectionPath","largestBatchId"],LC="collectionGroupOverlayIndex",nB=["userId","collectionGroup","largestBatchId"],vE="globals",rB="name",UC=[Bh,xr,uu,so,cu,dd,To,hu,du,zh,Fh,Dm,xm],iB=[...UC,Pm],BC=[Bh,xr,uu,qp,cu,dd,To,hu,du,zh,Fh,Dm,xm,Pm],zC=BC,EE=[...zC,_E,Gp,$p],sB=EE,aB=[...EE,vE];/**
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
 */class nv extends DC{constructor(e,t){super(),this.ue=e,this.currentSequenceNumber=t}}function Zt(n,e){const t=de(n);return oi.M(t.ue,e)}/**
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
 */function KI(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ta(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function FC(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class lt{constructor(e,t){this.comparator=e,this.root=t||gn.EMPTY}insert(e,t){return new lt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,gn.BLACK,null,null))}remove(e){return new lt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,gn.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const a=this.comparator(e,r.key);if(a===0)return t+r.left.size;a<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Zf(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Zf(this.root,e,this.comparator,!1)}getReverseIterator(){return new Zf(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Zf(this.root,e,this.comparator,!0)}}class Zf{constructor(e,t,r,a){this.isReverse=a,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?r(e.key,t):1,t&&a&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class gn{constructor(e,t,r,a,o){this.key=e,this.value=t,this.color=r??gn.RED,this.left=a??gn.EMPTY,this.right=o??gn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,a,o){return new gn(e??this.key,t??this.value,r??this.color,a??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let a=this;const o=r(e,a.key);return a=o<0?a.copy(null,null,null,a.left.insert(e,t,r),null):o===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,r)),a.fixUp()}removeMin(){if(this.left.isEmpty())return gn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return gn.EMPTY;r=a.right.min(),a=a.copy(r.key,r.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,gn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,gn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw me();const e=this.left.check();if(e!==this.right.check())throw me();return e+(this.isRed()?0:1)}}gn.EMPTY=null,gn.RED=!0,gn.BLACK=!1;gn.EMPTY=new class{constructor(){this.size=0}get key(){throw me()}get value(){throw me()}get color(){throw me()}get left(){throw me()}get right(){throw me()}copy(e,t,r,a,o){return this}insert(e,t,r){return new gn(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class nt{constructor(e){this.comparator=e,this.data=new lt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const a=r.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new QI(this.data.getIterator())}getIteratorFrom(e){return new QI(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof nt)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,o=r.getNext().key;if(this.comparator(a,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new nt(this.comparator);return t.data=e,t}}class QI{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function kl(n){return n.hasNext()?n.getNext():void 0}/**
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
 */class qn{constructor(e){this.fields=e,e.sort(pt.comparator)}static empty(){return new qn([])}unionWith(e){let t=new nt(pt.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new qn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ou(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jC extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */function oB(){return typeof atob<"u"}/**
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
 */class Dt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(a){try{return atob(a)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new jC("Invalid base64 string: "+o):o}}(e);return new Dt(t)}static fromUint8Array(e){const t=function(a){let o="";for(let u=0;u<a.length;++u)o+=String.fromCharCode(a[u]);return o}(e);return new Dt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let a=0;a<t.length;a++)r[a]=t.charCodeAt(a);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Dt.EMPTY_BYTE_STRING=new Dt("");const lB=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xi(n){if(_e(!!n),typeof n=="string"){let e=0;const t=lB.exec(n);if(_e(!!t),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:dt(n.seconds),nanos:dt(n.nanos)}}function dt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Zi(n){return typeof n=="string"?Dt.fromBase64String(n):Dt.fromUint8Array(n)}/**
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
 */const qC="server_timestamp",HC="__type__",GC="__previous_value__",$C="__local_write_time__";function Nm(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[HC])===null||t===void 0?void 0:t.stringValue)===qC}function Om(n){const e=n.mapValue.fields[GC];return Nm(e)?Om(e):e}function jh(n){const e=Xi(n.mapValue.fields[$C].timestampValue);return new gt(e.seconds,e.nanos)}/**
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
 */class uB{constructor(e,t,r,a,o,u,d,p,m){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=a,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=m}}const rv="(default)";class ua{constructor(e,t){this.projectId=e,this.database=t||rv}static empty(){return new ua("","")}get isDefaultDatabase(){return this.database===rv}isEqual(e){return e instanceof ua&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const TE="__type__",KC="__max__",Xs={mapValue:{fields:{__type__:{stringValue:KC}}}},wE="__vector__",fu="value",Ep={nullValue:"NULL_VALUE"};function ca(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Nm(n)?4:QC(n)?9007199254740991:km(n)?10:11:me()}function fi(n,e){if(n===e)return!0;const t=ca(n);if(t!==ca(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return jh(n).isEqual(jh(e));case 3:return function(a,o){if(typeof a.timestampValue=="string"&&typeof o.timestampValue=="string"&&a.timestampValue.length===o.timestampValue.length)return a.timestampValue===o.timestampValue;const u=Xi(a.timestampValue),d=Xi(o.timestampValue);return u.seconds===d.seconds&&u.nanos===d.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(a,o){return Zi(a.bytesValue).isEqual(Zi(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(a,o){return dt(a.geoPointValue.latitude)===dt(o.geoPointValue.latitude)&&dt(a.geoPointValue.longitude)===dt(o.geoPointValue.longitude)}(n,e);case 2:return function(a,o){if("integerValue"in a&&"integerValue"in o)return dt(a.integerValue)===dt(o.integerValue);if("doubleValue"in a&&"doubleValue"in o){const u=dt(a.doubleValue),d=dt(o.doubleValue);return u===d?Uh(u)===Uh(d):isNaN(u)&&isNaN(d)}return!1}(n,e);case 9:return ou(n.arrayValue.values||[],e.arrayValue.values||[],fi);case 10:case 11:return function(a,o){const u=a.mapValue.fields||{},d=o.mapValue.fields||{};if(KI(u)!==KI(d))return!1;for(const p in u)if(u.hasOwnProperty(p)&&(d[p]===void 0||!fi(u[p],d[p])))return!1;return!0}(n,e);default:return me()}}function qh(n,e){return(n.values||[]).find(t=>fi(t,e))!==void 0}function ha(n,e){if(n===e)return 0;const t=ca(n),r=ca(e);if(t!==r)return Se(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Se(n.booleanValue,e.booleanValue);case 2:return function(o,u){const d=dt(o.integerValue||o.doubleValue),p=dt(u.integerValue||u.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1}(n,e);case 3:return WI(n.timestampValue,e.timestampValue);case 4:return WI(jh(n),jh(e));case 5:return X_(n.stringValue,e.stringValue);case 6:return function(o,u){const d=Zi(o),p=Zi(u);return d.compareTo(p)}(n.bytesValue,e.bytesValue);case 7:return function(o,u){const d=o.split("/"),p=u.split("/");for(let m=0;m<d.length&&m<p.length;m++){const _=Se(d[m],p[m]);if(_!==0)return _}return Se(d.length,p.length)}(n.referenceValue,e.referenceValue);case 8:return function(o,u){const d=Se(dt(o.latitude),dt(u.latitude));return d!==0?d:Se(dt(o.longitude),dt(u.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return YI(n.arrayValue,e.arrayValue);case 10:return function(o,u){var d,p,m,_;const v=o.fields||{},w=u.fields||{},S=(d=v[fu])===null||d===void 0?void 0:d.arrayValue,x=(p=w[fu])===null||p===void 0?void 0:p.arrayValue,U=Se(((m=S==null?void 0:S.values)===null||m===void 0?void 0:m.length)||0,((_=x==null?void 0:x.values)===null||_===void 0?void 0:_.length)||0);return U!==0?U:YI(S,x)}(n.mapValue,e.mapValue);case 11:return function(o,u){if(o===Xs.mapValue&&u===Xs.mapValue)return 0;if(o===Xs.mapValue)return 1;if(u===Xs.mapValue)return-1;const d=o.fields||{},p=Object.keys(d),m=u.fields||{},_=Object.keys(m);p.sort(),_.sort();for(let v=0;v<p.length&&v<_.length;++v){const w=X_(p[v],_[v]);if(w!==0)return w;const S=ha(d[p[v]],m[_[v]]);if(S!==0)return S}return Se(p.length,_.length)}(n.mapValue,e.mapValue);default:throw me()}}function WI(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Se(n,e);const t=Xi(n),r=Xi(e),a=Se(t.seconds,r.seconds);return a!==0?a:Se(t.nanos,r.nanos)}function YI(n,e){const t=n.values||[],r=e.values||[];for(let a=0;a<t.length&&a<r.length;++a){const o=ha(t[a],r[a]);if(o)return o}return Se(t.length,r.length)}function pu(n){return iv(n)}function iv(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Xi(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Zi(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return ce.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",a=!0;for(const o of t.values||[])a?a=!1:r+=",",r+=iv(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let a="{",o=!0;for(const u of r)o?o=!1:a+=",",a+=`${u}:${iv(t.fields[u])}`;return a+"}"}(n.mapValue):me()}function Tp(n){switch(ca(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Om(n);return e?16+Tp(e):16;case 5:return 2*n.stringValue.length;case 6:return Zi(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((a,o)=>a+Tp(o),0)}(n.arrayValue);case 10:case 11:return function(r){let a=0;return Ta(r.fields,(o,u)=>{a+=o.length+Tp(u)}),a}(n.mapValue);default:throw me()}}function Ao(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function sv(n){return!!n&&"integerValue"in n}function Hh(n){return!!n&&"arrayValue"in n}function XI(n){return!!n&&"nullValue"in n}function ZI(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function wp(n){return!!n&&"mapValue"in n}function km(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[TE])===null||t===void 0?void 0:t.stringValue)===wE}function wh(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Ta(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=wh(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=wh(n.arrayValue.values[t]);return e}return Object.assign({},n)}function QC(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===KC}const WC={mapValue:{fields:{[TE]:{stringValue:wE},[fu]:{arrayValue:{}}}}};function cB(n){return"nullValue"in n?Ep:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?Ao(ua.empty(),ce.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?km(n)?WC:{mapValue:{}}:me()}function hB(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?Ao(ua.empty(),ce.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?WC:"mapValue"in n?km(n)?{mapValue:{}}:Xs:me()}function JI(n,e){const t=ha(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function eA(n,e){const t=ha(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
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
 */class yn{constructor(e){this.value=e}static empty(){return new yn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!wp(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=wh(t)}setAll(e){let t=pt.emptyPath(),r={},a=[];e.forEach((u,d)=>{if(!t.isImmediateParentOf(d)){const p=this.getFieldsMap(t);this.applyChanges(p,r,a),r={},a=[],t=d.popLast()}u?r[d.lastSegment()]=wh(u):a.push(d.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,r,a)}delete(e){const t=this.field(e.popLast());wp(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return fi(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let a=t.mapValue.fields[e.get(r)];wp(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,r){Ta(t,(a,o)=>e[a]=o);for(const a of r)delete e[a]}clone(){return new yn(wh(this.value))}}function YC(n){const e=[];return Ta(n.fields,(t,r)=>{const a=new pt([t]);if(wp(r)){const o=YC(r.mapValue).fields;if(o.length===0)e.push(a);else for(const u of o)e.push(a.child(u))}else e.push(a)}),new qn(e)}/**
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
 */class ht{constructor(e,t,r,a,o,u,d){this.key=e,this.documentType=t,this.version=r,this.readTime=a,this.createTime=o,this.data=u,this.documentState=d}static newInvalidDocument(e){return new ht(e,0,Ee.min(),Ee.min(),Ee.min(),yn.empty(),0)}static newFoundDocument(e,t,r,a){return new ht(e,1,t,Ee.min(),r,a,0)}static newNoDocument(e,t){return new ht(e,2,t,Ee.min(),Ee.min(),yn.empty(),0)}static newUnknownDocument(e,t){return new ht(e,3,t,Ee.min(),Ee.min(),yn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=yn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=yn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ht&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ht(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e,t){this.position=e,this.inclusive=t}}function tA(n,e,t){let r=0;for(let a=0;a<n.position.length;a++){const o=e[a],u=n.position[a];if(o.field.isKeyField()?r=ce.comparator(ce.fromName(u.referenceValue),t.key):r=ha(u,t.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function nA(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!fi(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(e,t="asc"){this.field=e,this.dir=t}}function dB(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XC{}class ze extends XC{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new fB(e,t,r):t==="array-contains"?new gB(e,r):t==="in"?new r1(e,r):t==="not-in"?new yB(e,r):t==="array-contains-any"?new _B(e,r):new ze(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new pB(e,r):new mB(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(ha(t,this.value)):t!==null&&ca(this.value)===ca(t)&&this.matchesComparison(ha(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return me()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class tt extends XC{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new tt(e,t)}matches(e){return mu(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function mu(n){return n.op==="and"}function av(n){return n.op==="or"}function bE(n){return ZC(n)&&mu(n)}function ZC(n){for(const e of n.filters)if(e instanceof tt)return!1;return!0}function ov(n){if(n instanceof ze)return n.field.canonicalString()+n.op.toString()+pu(n.value);if(bE(n))return n.filters.map(e=>ov(e)).join(",");{const e=n.filters.map(t=>ov(t)).join(",");return`${n.op}(${e})`}}function JC(n,e){return n instanceof ze?function(r,a){return a instanceof ze&&r.op===a.op&&r.field.isEqual(a.field)&&fi(r.value,a.value)}(n,e):n instanceof tt?function(r,a){return a instanceof tt&&r.op===a.op&&r.filters.length===a.filters.length?r.filters.reduce((o,u,d)=>o&&JC(u,a.filters[d]),!0):!1}(n,e):void me()}function e1(n,e){const t=n.filters.concat(e);return tt.create(t,n.op)}function t1(n){return n instanceof ze?function(t){return`${t.field.canonicalString()} ${t.op} ${pu(t.value)}`}(n):n instanceof tt?function(t){return t.op.toString()+" {"+t.getFilters().map(t1).join(" ,")+"}"}(n):"Filter"}class fB extends ze{constructor(e,t,r){super(e,t,r),this.key=ce.fromName(r.referenceValue)}matches(e){const t=ce.comparator(e.key,this.key);return this.matchesComparison(t)}}class pB extends ze{constructor(e,t){super(e,"in",t),this.keys=n1("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class mB extends ze{constructor(e,t){super(e,"not-in",t),this.keys=n1("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function n1(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>ce.fromName(r.referenceValue))}class gB extends ze{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Hh(t)&&qh(t.arrayValue,this.value)}}class r1 extends ze{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&qh(this.value.arrayValue,t)}}class yB extends ze{constructor(e,t){super(e,"not-in",t)}matches(e){if(qh(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!qh(this.value.arrayValue,t)}}class _B extends ze{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Hh(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>qh(this.value.arrayValue,r))}}/**
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
 */class vB{constructor(e,t=null,r=[],a=[],o=null,u=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=a,this.limit=o,this.startAt=u,this.endAt=d,this.le=null}}function lv(n,e=null,t=[],r=[],a=null,o=null,u=null){return new vB(n,e,t,r,a,o,u)}function So(n){const e=de(n);if(e.le===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>ov(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),hd(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>pu(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>pu(r)).join(",")),e.le=t}return e.le}function fd(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!dB(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!JC(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!nA(n.startAt,e.startAt)&&nA(n.endAt,e.endAt)}function Kp(n){return ce.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Qp(n,e){return n.filters.filter(t=>t instanceof ze&&t.field.isEqual(e))}function rA(n,e,t){let r=Ep,a=!0;for(const o of Qp(n,e)){let u=Ep,d=!0;switch(o.op){case"<":case"<=":u=cB(o.value);break;case"==":case"in":case">=":u=o.value;break;case">":u=o.value,d=!1;break;case"!=":case"not-in":u=Ep}JI({value:r,inclusive:a},{value:u,inclusive:d})<0&&(r=u,a=d)}if(t!==null){for(let o=0;o<n.orderBy.length;++o)if(n.orderBy[o].field.isEqual(e)){const u=t.position[o];JI({value:r,inclusive:a},{value:u,inclusive:t.inclusive})<0&&(r=u,a=t.inclusive);break}}return{value:r,inclusive:a}}function iA(n,e,t){let r=Xs,a=!0;for(const o of Qp(n,e)){let u=Xs,d=!0;switch(o.op){case">=":case">":u=hB(o.value),d=!1;break;case"==":case"in":case"<=":u=o.value;break;case"<":u=o.value,d=!1;break;case"!=":case"not-in":u=Xs}eA({value:r,inclusive:a},{value:u,inclusive:d})>0&&(r=u,a=d)}if(t!==null){for(let o=0;o<n.orderBy.length;++o)if(n.orderBy[o].field.isEqual(e)){const u=t.position[o];eA({value:r,inclusive:a},{value:u,inclusive:t.inclusive})>0&&(r=u,a=t.inclusive);break}}return{value:r,inclusive:a}}/**
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
 */class ns{constructor(e,t=null,r=[],a=[],o=null,u="F",d=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=a,this.limit=o,this.limitType=u,this.startAt=d,this.endAt=p,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function i1(n,e,t,r,a,o,u,d){return new ns(n,e,t,r,a,o,u,d)}function Vu(n){return new ns(n)}function sA(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function IE(n){return n.collectionGroup!==null}function Yl(n){const e=de(n);if(e.he===null){e.he=[];const t=new Set;for(const o of e.explicitOrderBy)e.he.push(o),t.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(u){let d=new nt(pt.comparator);return u.filters.forEach(p=>{p.getFlattenedFilters().forEach(m=>{m.isInequality()&&(d=d.add(m.field))})}),d})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.he.push(new Gh(o,r))}),t.has(pt.keyField().canonicalString())||e.he.push(new Gh(pt.keyField(),r))}return e.he}function Vn(n){const e=de(n);return e.Pe||(e.Pe=EB(e,Yl(n))),e.Pe}function EB(n,e){if(n.limitType==="F")return lv(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(a=>{const o=a.dir==="desc"?"asc":"desc";return new Gh(a.field,o)});const t=n.endAt?new da(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new da(n.startAt.position,n.startAt.inclusive):null;return lv(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function uv(n,e){const t=n.filters.concat([e]);return new ns(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Wp(n,e,t){return new ns(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function pd(n,e){return fd(Vn(n),Vn(e))&&n.limitType===e.limitType}function s1(n){return`${So(Vn(n))}|lt:${n.limitType}`}function zl(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(a=>t1(a)).join(", ")}]`),hd(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(a=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(a)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(a=>pu(a)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(a=>pu(a)).join(",")),`Target(${r})`}(Vn(n))}; limitType=${n.limitType})`}function md(n,e){return e.isFoundDocument()&&function(r,a){const o=a.key.path;return r.collectionGroup!==null?a.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):ce.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,e)&&function(r,a){for(const o of Yl(r))if(!o.field.isKeyField()&&a.data.field(o.field)===null)return!1;return!0}(n,e)&&function(r,a){for(const o of r.filters)if(!o.matches(a))return!1;return!0}(n,e)&&function(r,a){return!(r.startAt&&!function(u,d,p){const m=tA(u,d,p);return u.inclusive?m<=0:m<0}(r.startAt,Yl(r),a)||r.endAt&&!function(u,d,p){const m=tA(u,d,p);return u.inclusive?m>=0:m>0}(r.endAt,Yl(r),a))}(n,e)}function a1(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function o1(n){return(e,t)=>{let r=!1;for(const a of Yl(n)){const o=TB(a,e,t);if(o!==0)return o;r=r||a.field.isKeyField()}return 0}}function TB(n,e,t){const r=n.field.isKeyField()?ce.comparator(e.key,t.key):function(o,u,d){const p=u.data.field(o),m=d.data.field(o);return p!==null&&m!==null?ha(p,m):me()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return me()}}/**
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
 */class rs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[a,o]of r)if(this.equalsFn(a,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),a=this.inner[r];if(a===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let o=0;o<a.length;o++)if(this.equalsFn(a[o][0],e))return void(a[o]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let a=0;a<r.length;a++)if(this.equalsFn(r[a][0],e))return r.length===1?delete this.inner[t]:r.splice(a,1),this.innerSize--,!0;return!1}forEach(e){Ta(this.inner,(t,r)=>{for(const[a,o]of r)e(a,o)})}isEmpty(){return FC(this.inner)}size(){return this.innerSize}}/**
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
 */const wB=new lt(ce.comparator);function Hn(){return wB}const l1=new lt(ce.comparator);function hh(...n){let e=l1;for(const t of n)e=e.insert(t.key,t);return e}function u1(n){let e=l1;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function ai(){return bh()}function c1(){return bh()}function bh(){return new rs(n=>n.toString(),(n,e)=>n.isEqual(e))}const bB=new lt(ce.comparator),IB=new nt(ce.comparator);function xe(...n){let e=IB;for(const t of n)e=e.add(t);return e}const AB=new nt(Se);function AE(){return AB}/**
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
 */function SE(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Uh(e)?"-0":e}}function h1(n){return{integerValue:""+n}}function d1(n,e){return PC(e)?h1(e):SE(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(){this._=void 0}}function SB(n,e,t){return n instanceof gu?function(a,o){const u={fields:{[HC]:{stringValue:qC},[$C]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return o&&Nm(o)&&(o=Om(o)),o&&(u.fields[GC]=o),{mapValue:u}}(t,e):n instanceof Ro?p1(n,e):n instanceof Co?m1(n,e):function(a,o){const u=f1(a,o),d=aA(u)+aA(a.Ie);return sv(u)&&sv(a.Ie)?h1(d):SE(a.serializer,d)}(n,e)}function RB(n,e,t){return n instanceof Ro?p1(n,e):n instanceof Co?m1(n,e):t}function f1(n,e){return n instanceof yu?function(r){return sv(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class gu extends Vm{}class Ro extends Vm{constructor(e){super(),this.elements=e}}function p1(n,e){const t=g1(e);for(const r of n.elements)t.some(a=>fi(a,r))||t.push(r);return{arrayValue:{values:t}}}class Co extends Vm{constructor(e){super(),this.elements=e}}function m1(n,e){let t=g1(e);for(const r of n.elements)t=t.filter(a=>!fi(a,r));return{arrayValue:{values:t}}}class yu extends Vm{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function aA(n){return dt(n.integerValue||n.doubleValue)}function g1(n){return Hh(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class gd{constructor(e,t){this.field=e,this.transform=t}}function CB(n,e){return n.field.isEqual(e.field)&&function(r,a){return r instanceof Ro&&a instanceof Ro||r instanceof Co&&a instanceof Co?ou(r.elements,a.elements,fi):r instanceof yu&&a instanceof yu?fi(r.Ie,a.Ie):r instanceof gu&&a instanceof gu}(n.transform,e.transform)}class DB{constructor(e,t){this.version=e,this.transformResults=t}}class mt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new mt}static exists(e){return new mt(void 0,e)}static updateTime(e){return new mt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function bp(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Mm{}function y1(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Lu(n.key,mt.none()):new Mu(n.key,n.data,mt.none());{const t=n.data,r=yn.empty();let a=new nt(pt.comparator);for(let o of e.fields)if(!a.has(o)){let u=t.field(o);u===null&&o.length>1&&(o=o.popLast(),u=t.field(o)),u===null?r.delete(o):r.set(o,u),a=a.add(o)}return new is(n.key,r,new qn(a.toArray()),mt.none())}}function xB(n,e,t){n instanceof Mu?function(a,o,u){const d=a.value.clone(),p=lA(a.fieldTransforms,o,u.transformResults);d.setAll(p),o.convertToFoundDocument(u.version,d).setHasCommittedMutations()}(n,e,t):n instanceof is?function(a,o,u){if(!bp(a.precondition,o))return void o.convertToUnknownDocument(u.version);const d=lA(a.fieldTransforms,o,u.transformResults),p=o.data;p.setAll(_1(a)),p.setAll(d),o.convertToFoundDocument(u.version,p).setHasCommittedMutations()}(n,e,t):function(a,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()}(0,e,t)}function Ih(n,e,t,r){return n instanceof Mu?function(o,u,d,p){if(!bp(o.precondition,u))return d;const m=o.value.clone(),_=uA(o.fieldTransforms,p,u);return m.setAll(_),u.convertToFoundDocument(u.version,m).setHasLocalMutations(),null}(n,e,t,r):n instanceof is?function(o,u,d,p){if(!bp(o.precondition,u))return d;const m=uA(o.fieldTransforms,p,u),_=u.data;return _.setAll(_1(o)),_.setAll(m),u.convertToFoundDocument(u.version,_).setHasLocalMutations(),d===null?null:d.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(v=>v.field))}(n,e,t,r):function(o,u,d){return bp(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):d}(n,e,t)}function PB(n,e){let t=null;for(const r of n.fieldTransforms){const a=e.data.field(r.field),o=f1(r.transform,a||null);o!=null&&(t===null&&(t=yn.empty()),t.set(r.field,o))}return t||null}function oA(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,a){return r===void 0&&a===void 0||!(!r||!a)&&ou(r,a,(o,u)=>CB(o,u))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Mu extends Mm{constructor(e,t,r,a=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class is extends Mm{constructor(e,t,r,a,o=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=a,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function _1(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function lA(n,e,t){const r=new Map;_e(n.length===t.length);for(let a=0;a<t.length;a++){const o=n[a],u=o.transform,d=e.data.field(o.field);r.set(o.field,RB(u,d,t[a]))}return r}function uA(n,e,t){const r=new Map;for(const a of n){const o=a.transform,u=t.data.field(a.field);r.set(a.field,SB(o,u,e))}return r}class Lu extends Mm{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class RE extends Mm{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class CE{constructor(e,t,r,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=a}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const o=this.mutations[a];o.key.isEqual(e.key)&&xB(o,e,r[a])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Ih(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Ih(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=c1();return this.mutations.forEach(a=>{const o=e.get(a.key),u=o.overlayedDocument;let d=this.applyToLocalView(u,o.mutatedFields);d=t.has(a.key)?null:d;const p=y1(u,d);p!==null&&r.set(a.key,p),u.isValidDocument()||u.convertToNoDocument(Ee.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),xe())}isEqual(e){return this.batchId===e.batchId&&ou(this.mutations,e.mutations,(t,r)=>oA(t,r))&&ou(this.baseMutations,e.baseMutations,(t,r)=>oA(t,r))}}class DE{constructor(e,t,r,a){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=a}static from(e,t,r){_e(e.mutations.length===r.length);let a=function(){return bB}();const o=e.mutations;for(let u=0;u<o.length;u++)a=a.insert(o[u].key,r[u].version);return new DE(e,t,r,a)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class NB{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var jt,Ge;function v1(n){switch(n){case Q.OK:return me();case Q.CANCELLED:case Q.UNKNOWN:case Q.DEADLINE_EXCEEDED:case Q.RESOURCE_EXHAUSTED:case Q.INTERNAL:case Q.UNAVAILABLE:case Q.UNAUTHENTICATED:return!1;case Q.INVALID_ARGUMENT:case Q.NOT_FOUND:case Q.ALREADY_EXISTS:case Q.PERMISSION_DENIED:case Q.FAILED_PRECONDITION:case Q.ABORTED:case Q.OUT_OF_RANGE:case Q.UNIMPLEMENTED:case Q.DATA_LOSS:return!0;default:return me()}}function E1(n){if(n===void 0)return Vt("GRPC error has no .code"),Q.UNKNOWN;switch(n){case jt.OK:return Q.OK;case jt.CANCELLED:return Q.CANCELLED;case jt.UNKNOWN:return Q.UNKNOWN;case jt.DEADLINE_EXCEEDED:return Q.DEADLINE_EXCEEDED;case jt.RESOURCE_EXHAUSTED:return Q.RESOURCE_EXHAUSTED;case jt.INTERNAL:return Q.INTERNAL;case jt.UNAVAILABLE:return Q.UNAVAILABLE;case jt.UNAUTHENTICATED:return Q.UNAUTHENTICATED;case jt.INVALID_ARGUMENT:return Q.INVALID_ARGUMENT;case jt.NOT_FOUND:return Q.NOT_FOUND;case jt.ALREADY_EXISTS:return Q.ALREADY_EXISTS;case jt.PERMISSION_DENIED:return Q.PERMISSION_DENIED;case jt.FAILED_PRECONDITION:return Q.FAILED_PRECONDITION;case jt.ABORTED:return Q.ABORTED;case jt.OUT_OF_RANGE:return Q.OUT_OF_RANGE;case jt.UNIMPLEMENTED:return Q.UNIMPLEMENTED;case jt.DATA_LOSS:return Q.DATA_LOSS;default:return me()}}(Ge=jt||(jt={}))[Ge.OK=0]="OK",Ge[Ge.CANCELLED=1]="CANCELLED",Ge[Ge.UNKNOWN=2]="UNKNOWN",Ge[Ge.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ge[Ge.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ge[Ge.NOT_FOUND=5]="NOT_FOUND",Ge[Ge.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ge[Ge.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ge[Ge.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ge[Ge.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ge[Ge.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ge[Ge.ABORTED=10]="ABORTED",Ge[Ge.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ge[Ge.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ge[Ge.INTERNAL=13]="INTERNAL",Ge[Ge.UNAVAILABLE=14]="UNAVAILABLE",Ge[Ge.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OB=new ta([4294967295,4294967295],0);function cA(n){const e=pE().encode(n),t=new yC;return t.update(e),new Uint8Array(t.digest())}function hA(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),a=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new ta([t,r],0),new ta([a,o],0)]}class PE{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new dh(`Invalid padding: ${t}`);if(r<0)throw new dh(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new dh(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new dh(`Invalid padding when bitmap length is 0: ${t}`);this.Ee=8*e.length-t,this.de=ta.fromNumber(this.Ee)}Ae(e,t,r){let a=e.add(t.multiply(ta.fromNumber(r)));return a.compare(OB)===1&&(a=new ta([a.getBits(0),a.getBits(1)],0)),a.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const t=cA(e),[r,a]=hA(t);for(let o=0;o<this.hashCount;o++){const u=this.Ae(r,a,o);if(!this.Re(u))return!1}return!0}static create(e,t,r){const a=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),u=new PE(o,a,t);return r.forEach(d=>u.insert(d)),u}insert(e){if(this.Ee===0)return;const t=cA(e),[r,a]=hA(t);for(let o=0;o<this.hashCount;o++){const u=this.Ae(r,a,o);this.Ve(u)}}Ve(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class dh extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class yd{constructor(e,t,r,a,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=a,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const a=new Map;return a.set(e,_d.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new yd(Ee.min(),a,new lt(Se),Hn(),xe())}}class _d{constructor(e,t,r,a,o){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=a,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new _d(r,t,xe(),xe(),xe())}}/**
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
 */class Ip{constructor(e,t,r,a){this.me=e,this.removedTargetIds=t,this.key=r,this.fe=a}}class T1{constructor(e,t){this.targetId=e,this.ge=t}}class w1{constructor(e,t,r=Dt.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=a}}class dA{constructor(){this.pe=0,this.ye=fA(),this.we=Dt.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=xe(),t=xe(),r=xe();return this.ye.forEach((a,o)=>{switch(o){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:r=r.add(a);break;default:me()}}),new _d(this.we,this.Se,e,t,r)}Me(){this.be=!1,this.ye=fA()}xe(e,t){this.be=!0,this.ye=this.ye.insert(e,t)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,_e(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class kB{constructor(e){this.ke=e,this.qe=new Map,this.Qe=Hn(),this.$e=Jf(),this.Ue=Jf(),this.Ke=new lt(Se)}We(e){for(const t of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(t,e.fe):this.ze(t,e.key,e.fe);for(const t of e.removedTargetIds)this.ze(t,e.key,e.fe)}je(e){this.forEachTarget(e,t=>{const r=this.He(t);switch(e.state){case 0:this.Je(t)&&r.Ce(e.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(e.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(t);break;case 3:this.Je(t)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),r.Ce(e.resumeToken));break;default:me()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qe.forEach((r,a)=>{this.Je(a)&&t(a)})}Ze(e){const t=e.targetId,r=e.ge.count,a=this.Xe(t);if(a){const o=a.target;if(Kp(o))if(r===0){const u=new ce(o.path);this.ze(t,u,ht.newNoDocument(u,Ee.min()))}else _e(r===1);else{const u=this.et(t);if(u!==r){const d=this.tt(e),p=d?this.nt(d,e,u):1;if(p!==0){this.Ye(t);const m=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,m)}}}}}tt(e){const t=e.ge.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:a=0},hashCount:o=0}=t;let u,d;try{u=Zi(r).toUint8Array()}catch(p){if(p instanceof jC)return di("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new PE(u,a,o)}catch(p){return di(p instanceof dh?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.Ee===0?null:d}nt(e,t,r){return t.ge.count===r-this.st(e,t.targetId)?0:2}st(e,t){const r=this.ke.getRemoteKeysForTarget(t);let a=0;return r.forEach(o=>{const u=this.ke.it(),d=`projects/${u.projectId}/databases/${u.database}/documents/${o.path.canonicalString()}`;e.mightContain(d)||(this.ze(t,o,null),a++)}),a}ot(e){const t=new Map;this.qe.forEach((o,u)=>{const d=this.Xe(u);if(d){if(o.current&&Kp(d.target)){const p=new ce(d.target.path);this._t(p).has(u)||this.ut(u,p)||this.ze(u,p,ht.newNoDocument(p,e))}o.ve&&(t.set(u,o.Fe()),o.Me())}});let r=xe();this.Ue.forEach((o,u)=>{let d=!0;u.forEachWhile(p=>{const m=this.Xe(p);return!m||m.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(r=r.add(o))}),this.Qe.forEach((o,u)=>u.setReadTime(e));const a=new yd(e,t,this.Ke,this.Qe,r);return this.Qe=Hn(),this.$e=Jf(),this.Ue=Jf(),this.Ke=new lt(Se),a}Ge(e,t){if(!this.Je(e))return;const r=this.ut(e,t.key)?2:0;this.He(e).xe(t.key,r),this.Qe=this.Qe.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e)),this.Ue=this.Ue.insert(t.key,this.ct(t.key).add(e))}ze(e,t,r){if(!this.Je(e))return;const a=this.He(e);this.ut(e,t)?a.xe(t,1):a.Oe(t),this.Ue=this.Ue.insert(t,this.ct(t).delete(e)),this.Ue=this.Ue.insert(t,this.ct(t).add(e)),r&&(this.Qe=this.Qe.insert(t,r))}removeTarget(e){this.qe.delete(e)}et(e){const t=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let t=this.qe.get(e);return t||(t=new dA,this.qe.set(e,t)),t}ct(e){let t=this.Ue.get(e);return t||(t=new nt(Se),this.Ue=this.Ue.insert(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new nt(Se),this.$e=this.$e.insert(e,t)),t}Je(e){const t=this.Xe(e)!==null;return t||re("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.qe.get(e);return t&&t.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new dA),this.ke.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ut(e,t){return this.ke.getRemoteKeysForTarget(e).has(t)}}function Jf(){return new lt(ce.comparator)}function fA(){return new lt(ce.comparator)}const VB={asc:"ASCENDING",desc:"DESCENDING"},MB={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},LB={and:"AND",or:"OR"};class UB{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function cv(n,e){return n.useProto3Json||hd(e)?e:{value:e}}function _u(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function b1(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function BB(n,e){return _u(n,e.toTimestamp())}function Mt(n){return _e(!!n),Ee.fromTimestamp(function(t){const r=Xi(t);return new gt(r.seconds,r.nanos)}(n))}function NE(n,e){return hv(n,e).canonicalString()}function hv(n,e){const t=function(a){return new Be(["projects",a.projectId,"databases",a.database])}(n).child("documents");return e===void 0?t:t.child(e)}function I1(n){const e=Be.fromString(n);return _e(k1(e)),e}function $h(n,e){return NE(n.databaseId,e.path)}function li(n,e){const t=I1(e);if(t.get(1)!==n.databaseId.projectId)throw new te(Q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new te(Q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ce(R1(t))}function A1(n,e){return NE(n.databaseId,e)}function S1(n){const e=I1(n);return e.length===4?Be.emptyPath():R1(e)}function dv(n){return new Be(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function R1(n){return _e(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function pA(n,e,t){return{name:$h(n,e),fields:t.value.mapValue.fields}}function C1(n,e,t){const r=li(n,e.name),a=Mt(e.updateTime),o=e.createTime?Mt(e.createTime):Ee.min(),u=new yn({mapValue:{fields:e.fields}}),d=ht.newFoundDocument(r,a,o,u);return t&&d.setHasCommittedMutations(),t?d.setHasCommittedMutations():d}function zB(n,e){return"found"in e?function(r,a){_e(!!a.found),a.found.name,a.found.updateTime;const o=li(r,a.found.name),u=Mt(a.found.updateTime),d=a.found.createTime?Mt(a.found.createTime):Ee.min(),p=new yn({mapValue:{fields:a.found.fields}});return ht.newFoundDocument(o,u,d,p)}(n,e):"missing"in e?function(r,a){_e(!!a.missing),_e(!!a.readTime);const o=li(r,a.missing),u=Mt(a.readTime);return ht.newNoDocument(o,u)}(n,e):me()}function FB(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(m){return m==="NO_CHANGE"?0:m==="ADD"?1:m==="REMOVE"?2:m==="CURRENT"?3:m==="RESET"?4:me()}(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],o=function(m,_){return m.useProto3Json?(_e(_===void 0||typeof _=="string"),Dt.fromBase64String(_||"")):(_e(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array),Dt.fromUint8Array(_||new Uint8Array))}(n,e.targetChange.resumeToken),u=e.targetChange.cause,d=u&&function(m){const _=m.code===void 0?Q.UNKNOWN:E1(m.code);return new te(_,m.message||"")}(u);t=new w1(r,a,o,d||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const a=li(n,r.document.name),o=Mt(r.document.updateTime),u=r.document.createTime?Mt(r.document.createTime):Ee.min(),d=new yn({mapValue:{fields:r.document.fields}}),p=ht.newFoundDocument(a,o,u,d),m=r.targetIds||[],_=r.removedTargetIds||[];t=new Ip(m,_,p.key,p)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const a=li(n,r.document),o=r.readTime?Mt(r.readTime):Ee.min(),u=ht.newNoDocument(a,o),d=r.removedTargetIds||[];t=new Ip([],d,u.key,u)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const a=li(n,r.document),o=r.removedTargetIds||[];t=new Ip([],o,a,null)}else{if(!("filter"in e))return me();{e.filter;const r=e.filter;r.targetId;const{count:a=0,unchangedNames:o}=r,u=new NB(a,o),d=r.targetId;t=new T1(d,u)}}return t}function Kh(n,e){let t;if(e instanceof Mu)t={update:pA(n,e.key,e.value)};else if(e instanceof Lu)t={delete:$h(n,e.key)};else if(e instanceof is)t={update:pA(n,e.key,e.data),updateMask:KB(e.fieldMask)};else{if(!(e instanceof RE))return me();t={verify:$h(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(o,u){const d=u.transform;if(d instanceof gu)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof Ro)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof Co)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof yu)return{fieldPath:u.field.canonicalString(),increment:d.Ie};throw me()}(0,r))),e.precondition.isNone||(t.currentDocument=function(a,o){return o.updateTime!==void 0?{updateTime:BB(a,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:me()}(n,e.precondition)),t}function fv(n,e){const t=e.currentDocument?function(o){return o.updateTime!==void 0?mt.updateTime(Mt(o.updateTime)):o.exists!==void 0?mt.exists(o.exists):mt.none()}(e.currentDocument):mt.none(),r=e.updateTransforms?e.updateTransforms.map(a=>function(u,d){let p=null;if("setToServerValue"in d)_e(d.setToServerValue==="REQUEST_TIME"),p=new gu;else if("appendMissingElements"in d){const _=d.appendMissingElements.values||[];p=new Ro(_)}else if("removeAllFromArray"in d){const _=d.removeAllFromArray.values||[];p=new Co(_)}else"increment"in d?p=new yu(u,d.increment):me();const m=pt.fromServerFormat(d.fieldPath);return new gd(m,p)}(n,a)):[];if(e.update){e.update.name;const a=li(n,e.update.name),o=new yn({mapValue:{fields:e.update.fields}});if(e.updateMask){const u=function(p){const m=p.fieldPaths||[];return new qn(m.map(_=>pt.fromServerFormat(_)))}(e.updateMask);return new is(a,o,u,t,r)}return new Mu(a,o,t,r)}if(e.delete){const a=li(n,e.delete);return new Lu(a,t)}if(e.verify){const a=li(n,e.verify);return new RE(a,t)}return me()}function jB(n,e){return n&&n.length>0?(_e(e!==void 0),n.map(t=>function(a,o){let u=a.updateTime?Mt(a.updateTime):Mt(o);return u.isEqual(Ee.min())&&(u=Mt(o)),new DB(u,a.transformResults||[])}(t,e))):[]}function D1(n,e){return{documents:[A1(n,e.path)]}}function x1(n,e){const t={structuredQuery:{}},r=e.path;let a;e.collectionGroup!==null?(a=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=A1(n,a);const o=function(m){if(m.length!==0)return O1(tt.create(m,"and"))}(e.filters);o&&(t.structuredQuery.where=o);const u=function(m){if(m.length!==0)return m.map(_=>function(w){return{field:Fl(w.field),direction:HB(w.dir)}}(_))}(e.orderBy);u&&(t.structuredQuery.orderBy=u);const d=cv(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=function(m){return{before:m.inclusive,values:m.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(m){return{before:!m.inclusive,values:m.position}}(e.endAt)),{ht:t,parent:a}}function P1(n){let e=S1(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let a=null;if(r>0){_e(r===1);const _=t.from[0];_.allDescendants?a=_.collectionId:e=e.child(_.collectionId)}let o=[];t.where&&(o=function(v){const w=N1(v);return w instanceof tt&&bE(w)?w.getFilters():[w]}(t.where));let u=[];t.orderBy&&(u=function(v){return v.map(w=>function(x){return new Gh(jl(x.field),function(M){switch(M){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(w))}(t.orderBy));let d=null;t.limit&&(d=function(v){let w;return w=typeof v=="object"?v.value:v,hd(w)?null:w}(t.limit));let p=null;t.startAt&&(p=function(v){const w=!!v.before,S=v.values||[];return new da(S,w)}(t.startAt));let m=null;return t.endAt&&(m=function(v){const w=!v.before,S=v.values||[];return new da(S,w)}(t.endAt)),i1(e,a,u,o,d,"F",p,m)}function qB(n,e){const t=function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return me()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function N1(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=jl(t.unaryFilter.field);return ze.create(r,"==",{doubleValue:NaN});case"IS_NULL":const a=jl(t.unaryFilter.field);return ze.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=jl(t.unaryFilter.field);return ze.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=jl(t.unaryFilter.field);return ze.create(u,"!=",{nullValue:"NULL_VALUE"});default:return me()}}(n):n.fieldFilter!==void 0?function(t){return ze.create(jl(t.fieldFilter.field),function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return me()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return tt.create(t.compositeFilter.filters.map(r=>N1(r)),function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return me()}}(t.compositeFilter.op))}(n):me()}function HB(n){return VB[n]}function GB(n){return MB[n]}function $B(n){return LB[n]}function Fl(n){return{fieldPath:n.canonicalString()}}function jl(n){return pt.fromServerFormat(n.fieldPath)}function O1(n){return n instanceof ze?function(t){if(t.op==="=="){if(ZI(t.value))return{unaryFilter:{field:Fl(t.field),op:"IS_NAN"}};if(XI(t.value))return{unaryFilter:{field:Fl(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(ZI(t.value))return{unaryFilter:{field:Fl(t.field),op:"IS_NOT_NAN"}};if(XI(t.value))return{unaryFilter:{field:Fl(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Fl(t.field),op:GB(t.op),value:t.value}}}(n):n instanceof tt?function(t){const r=t.getFilters().map(a=>O1(a));return r.length===1?r[0]:{compositeFilter:{op:$B(t.op),filters:r}}}(n):me()}function KB(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function k1(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Gi{constructor(e,t,r,a,o=Ee.min(),u=Ee.min(),d=Dt.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=a,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(e){return new Gi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Gi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Gi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Gi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class V1{constructor(e){this.Tt=e}}function QB(n,e){let t;if(e.document)t=C1(n.Tt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=ce.fromSegments(e.noDocument.path),a=xo(e.noDocument.readTime);t=ht.newNoDocument(r,a),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return me();{const r=ce.fromSegments(e.unknownDocument.path),a=xo(e.unknownDocument.version);t=ht.newUnknownDocument(r,a)}}return e.readTime&&t.setReadTime(function(a){const o=new gt(a[0],a[1]);return Ee.fromTimestamp(o)}(e.readTime)),t}function mA(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Yp(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(o,u){return{name:$h(o,u.key),fields:u.data.value.mapValue.fields,updateTime:_u(o,u.version.toTimestamp()),createTime:_u(o,u.createTime.toTimestamp())}}(n.Tt,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:Do(e.version)};else{if(!e.isUnknownDocument())return me();r.unknownDocument={path:t.path.toArray(),version:Do(e.version)}}return r}function Yp(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function Do(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function xo(n){const e=new gt(n.seconds,n.nanoseconds);return Ee.fromTimestamp(e)}function oo(n,e){const t=(e.baseMutations||[]).map(o=>fv(n.Tt,o));for(let o=0;o<e.mutations.length-1;++o){const u=e.mutations[o];if(o+1<e.mutations.length&&e.mutations[o+1].transform!==void 0){const d=e.mutations[o+1];u.updateTransforms=d.transform.fieldTransforms,e.mutations.splice(o+1,1),++o}}const r=e.mutations.map(o=>fv(n.Tt,o)),a=gt.fromMillis(e.localWriteTimeMs);return new CE(e.batchId,a,t,r)}function fh(n){const e=xo(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?xo(n.lastLimboFreeSnapshotVersion):Ee.min();let r;return r=function(o){return o.documents!==void 0}(n.query)?function(o){return _e(o.documents.length===1),Vn(Vu(S1(o.documents[0])))}(n.query):function(o){return Vn(P1(o))}(n.query),new Gi(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,Dt.fromBase64String(n.resumeToken))}function M1(n,e){const t=Do(e.snapshotVersion),r=Do(e.lastLimboFreeSnapshotVersion);let a;a=Kp(e.target)?D1(n.Tt,e.target):x1(n.Tt,e.target).ht;const o=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:So(e.target),readTime:t,resumeToken:o,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:a}}function OE(n){const e=P1({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Wp(e,e.limit,"L"):e}function w_(n,e){return new xE(e.largestBatchId,fv(n.Tt,e.overlayMutation))}function gA(n,e){const t=e.path.lastSegment();return[n,An(e.path.popLast()),t]}function yA(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:Do(r.readTime),documentKey:An(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class WB{getBundleMetadata(e,t){return _A(e).get(t).next(r=>{if(r)return function(o){return{id:o.bundleId,createTime:xo(o.createTime),version:o.version}}(r)})}saveBundleMetadata(e,t){return _A(e).put(function(a){return{bundleId:a.id,createTime:Do(Mt(a.createTime)),version:a.version}}(t))}getNamedQuery(e,t){return vA(e).get(t).next(r=>{if(r)return function(o){return{name:o.name,query:OE(o.bundledQuery),readTime:xo(o.readTime)}}(r)})}saveNamedQuery(e,t){return vA(e).put(function(a){return{name:a.name,readTime:Do(Mt(a.readTime)),bundledQuery:a.bundledQuery}}(t))}}function _A(n){return Zt(n,Dm)}function vA(n){return Zt(n,xm)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(e,t){this.serializer=e,this.userId=t}static It(e,t){const r=t.uid||"";return new Lm(e,r)}getOverlay(e,t){return th(e).get(gA(this.userId,t)).next(r=>r?w_(this.serializer,r):null)}getOverlays(e,t){const r=ai();return j.forEach(t,a=>this.getOverlay(e,a).next(o=>{o!==null&&r.set(a,o)})).next(()=>r)}saveOverlays(e,t,r){const a=[];return r.forEach((o,u)=>{const d=new xE(t,u);a.push(this.Et(e,d))}),j.waitFor(a)}removeOverlaysForBatchId(e,t,r){const a=new Set;t.forEach(u=>a.add(An(u.getCollectionPath())));const o=[];return a.forEach(u=>{const d=IDBKeyRange.bound([this.userId,u,r],[this.userId,u,r+1],!1,!0);o.push(th(e).J(tv,d))}),j.waitFor(o)}getOverlaysForCollection(e,t,r){const a=ai(),o=An(t),u=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,Number.POSITIVE_INFINITY],!0);return th(e).G(tv,u).next(d=>{for(const p of d){const m=w_(this.serializer,p);a.set(m.getKey(),m)}return a})}getOverlaysForCollectionGroup(e,t,r,a){const o=ai();let u;const d=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return th(e).Z({index:LC,range:d},(p,m,_)=>{const v=w_(this.serializer,m);o.size()<a||v.largestBatchId===u?(o.set(v.getKey(),v),u=v.largestBatchId):_.done()}).next(()=>o)}Et(e,t){return th(e).put(function(a,o,u){const[d,p,m]=gA(o,u.mutation.key);return{userId:o,collectionPath:p,documentId:m,collectionGroup:u.mutation.key.getCollectionGroup(),largestBatchId:u.largestBatchId,overlayMutation:Kh(a.Tt,u.mutation)}}(this.serializer,this.userId,t))}}function th(n){return Zt(n,Pm)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YB{dt(e){return Zt(e,vE)}getSessionToken(e){return this.dt(e).get("sessionToken").next(t=>{const r=t==null?void 0:t.value;return r?Dt.fromUint8Array(r):Dt.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.dt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class lo{constructor(){}At(e,t){this.Rt(e,t),t.Vt()}Rt(e,t){if("nullValue"in e)this.ft(t,5);else if("booleanValue"in e)this.ft(t,10),t.gt(e.booleanValue?1:0);else if("integerValue"in e)this.ft(t,15),t.gt(dt(e.integerValue));else if("doubleValue"in e){const r=dt(e.doubleValue);isNaN(r)?this.ft(t,13):(this.ft(t,15),Uh(r)?t.gt(0):t.gt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.ft(t,20),typeof r=="string"&&(r=Xi(r)),t.yt(`${r.seconds||""}`),t.gt(r.nanos||0)}else if("stringValue"in e)this.wt(e.stringValue,t),this.St(t);else if("bytesValue"in e)this.ft(t,30),t.bt(Zi(e.bytesValue)),this.St(t);else if("referenceValue"in e)this.Dt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.ft(t,45),t.gt(r.latitude||0),t.gt(r.longitude||0)}else"mapValue"in e?QC(e)?this.ft(t,Number.MAX_SAFE_INTEGER):km(e)?this.vt(e.mapValue,t):(this.Ct(e.mapValue,t),this.St(t)):"arrayValue"in e?(this.Ft(e.arrayValue,t),this.St(t)):me()}wt(e,t){this.ft(t,25),this.Mt(e,t)}Mt(e,t){t.yt(e)}Ct(e,t){const r=e.fields||{};this.ft(t,55);for(const a of Object.keys(r))this.wt(a,t),this.Rt(r[a],t)}vt(e,t){var r,a;const o=e.fields||{};this.ft(t,53);const u=fu,d=((a=(r=o[u].arrayValue)===null||r===void 0?void 0:r.values)===null||a===void 0?void 0:a.length)||0;this.ft(t,15),t.gt(dt(d)),this.wt(u,t),this.Rt(o[u],t)}Ft(e,t){const r=e.values||[];this.ft(t,50);for(const a of r)this.Rt(a,t)}Dt(e,t){this.ft(t,37),ce.fromName(e).path.forEach(r=>{this.ft(t,60),this.Mt(r,t)})}ft(e,t){e.gt(t)}St(e){e.gt(2)}}lo.xt=new lo;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vl=255;function XB(n){if(n===0)return 8;let e=0;return n>>4||(e+=4,n<<=4),n>>6||(e+=2,n<<=2),n>>7||(e+=1),e}function EA(n){const e=64-function(r){let a=0;for(let o=0;o<8;++o){const u=XB(255&r[o]);if(a+=u,u!==8)break}return a}(n);return Math.ceil(e/8)}class ZB{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ot(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Nt(r.value),r=t.next();this.Bt()}Lt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.kt(r.value),r=t.next();this.qt()}Qt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Nt(r);else if(r<2048)this.Nt(960|r>>>6),this.Nt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Nt(480|r>>>12),this.Nt(128|63&r>>>6),this.Nt(128|63&r);else{const a=t.codePointAt(0);this.Nt(240|a>>>18),this.Nt(128|63&a>>>12),this.Nt(128|63&a>>>6),this.Nt(128|63&a)}}this.Bt()}$t(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.kt(r);else if(r<2048)this.kt(960|r>>>6),this.kt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.kt(480|r>>>12),this.kt(128|63&r>>>6),this.kt(128|63&r);else{const a=t.codePointAt(0);this.kt(240|a>>>18),this.kt(128|63&a>>>12),this.kt(128|63&a>>>6),this.kt(128|63&a)}}this.qt()}Ut(e){const t=this.Kt(e),r=EA(t);this.Wt(1+r),this.buffer[this.position++]=255&r;for(let a=t.length-r;a<t.length;++a)this.buffer[this.position++]=255&t[a]}Gt(e){const t=this.Kt(e),r=EA(t);this.Wt(1+r),this.buffer[this.position++]=~(255&r);for(let a=t.length-r;a<t.length;++a)this.buffer[this.position++]=~(255&t[a])}zt(){this.jt(Vl),this.jt(255)}Ht(){this.Jt(Vl),this.Jt(255)}reset(){this.position=0}seed(e){this.Wt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Yt(){return this.buffer.slice(0,this.position)}Kt(e){const t=function(o){const u=new DataView(new ArrayBuffer(8));return u.setFloat64(0,o,!1),new Uint8Array(u.buffer)}(e),r=!!(128&t[0]);t[0]^=r?255:128;for(let a=1;a<t.length;++a)t[a]^=r?255:0;return t}Nt(e){const t=255&e;t===0?(this.jt(0),this.jt(255)):t===Vl?(this.jt(Vl),this.jt(0)):this.jt(t)}kt(e){const t=255&e;t===0?(this.Jt(0),this.Jt(255)):t===Vl?(this.Jt(Vl),this.Jt(0)):this.Jt(e)}Bt(){this.jt(0),this.jt(1)}qt(){this.Jt(0),this.Jt(1)}jt(e){this.Wt(1),this.buffer[this.position++]=e}Jt(e){this.Wt(1),this.buffer[this.position++]=~e}Wt(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const a=new Uint8Array(r);a.set(this.buffer),this.buffer=a}}class JB{constructor(e){this.Zt=e}bt(e){this.Zt.Ot(e)}yt(e){this.Zt.Qt(e)}gt(e){this.Zt.Ut(e)}Vt(){this.Zt.zt()}}class ez{constructor(e){this.Zt=e}bt(e){this.Zt.Lt(e)}yt(e){this.Zt.$t(e)}gt(e){this.Zt.Gt(e)}Vt(){this.Zt.Ht()}}class nh{constructor(){this.Zt=new ZB,this.Xt=new JB(this.Zt),this.en=new ez(this.Zt)}seed(e){this.Zt.seed(e)}tn(e){return e===0?this.Xt:this.en}Yt(){return this.Zt.Yt()}reset(){this.Zt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e,t,r,a){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=a}nn(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new uo(this.indexId,this.documentKey,this.arrayValue,r)}}function Hs(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=TA(n.arrayValue,e.arrayValue),t!==0?t:(t=TA(n.directionalValue,e.directionalValue),t!==0?t:ce.comparator(n.documentKey,e.documentKey)))}function TA(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA{constructor(e){this.rn=new nt((t,r)=>pt.comparator(t.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.sn=e.orderBy,this._n=[];for(const t of e.filters){const r=t;r.isInequality()?this.rn=this.rn.add(r):this._n.push(r)}}get an(){return this.rn.size>1}un(e){if(_e(e.collectionGroup===this.collectionId),this.an)return!1;const t=Z_(e);if(t!==void 0&&!this.cn(t))return!1;const r=io(e);let a=new Set,o=0,u=0;for(;o<r.length&&this.cn(r[o]);++o)a=a.add(r[o].fieldPath.canonicalString());if(o===r.length)return!0;if(this.rn.size>0){const d=this.rn.getIterator().getNext();if(!a.has(d.field.canonicalString())){const p=r[o];if(!this.ln(d,p)||!this.hn(this.sn[u++],p))return!1}++o}for(;o<r.length;++o){const d=r[o];if(u>=this.sn.length||!this.hn(this.sn[u++],d))return!1}return!0}Pn(){if(this.an)return null;let e=new nt(pt.comparator);const t=[];for(const r of this._n)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new yp(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new yp(r.field,0))}for(const r of this.sn)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new yp(r.field,r.dir==="asc"?0:1)));return new Fp(Fp.UNKNOWN_ID,this.collectionId,t,Lh.empty())}cn(e){for(const t of this._n)if(this.ln(t,e))return!0;return!1}ln(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}hn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L1(n){var e,t;if(_e(n instanceof ze||n instanceof tt),n instanceof ze){if(n instanceof r1){const a=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(o=>ze.create(n.field,"==",o)))||[];return tt.create(a,"or")}return n}const r=n.filters.map(a=>L1(a));return tt.create(r,n.op)}function tz(n){if(n.getFilters().length===0)return[];const e=gv(L1(n));return _e(U1(e)),pv(e)||mv(e)?[e]:e.getFilters()}function pv(n){return n instanceof ze}function mv(n){return n instanceof tt&&bE(n)}function U1(n){return pv(n)||mv(n)||function(t){if(t instanceof tt&&av(t)){for(const r of t.getFilters())if(!pv(r)&&!mv(r))return!1;return!0}return!1}(n)}function gv(n){if(_e(n instanceof ze||n instanceof tt),n instanceof ze)return n;if(n.filters.length===1)return gv(n.filters[0]);const e=n.filters.map(r=>gv(r));let t=tt.create(e,n.op);return t=Xp(t),U1(t)?t:(_e(t instanceof tt),_e(mu(t)),_e(t.filters.length>1),t.filters.reduce((r,a)=>kE(r,a)))}function kE(n,e){let t;return _e(n instanceof ze||n instanceof tt),_e(e instanceof ze||e instanceof tt),t=n instanceof ze?e instanceof ze?function(a,o){return tt.create([a,o],"and")}(n,e):bA(n,e):e instanceof ze?bA(e,n):function(a,o){if(_e(a.filters.length>0&&o.filters.length>0),mu(a)&&mu(o))return e1(a,o.getFilters());const u=av(a)?a:o,d=av(a)?o:a,p=u.filters.map(m=>kE(m,d));return tt.create(p,"or")}(n,e),Xp(t)}function bA(n,e){if(mu(e))return e1(e,n.getFilters());{const t=e.filters.map(r=>kE(n,r));return tt.create(t,"or")}}function Xp(n){if(_e(n instanceof ze||n instanceof tt),n instanceof ze)return n;const e=n.getFilters();if(e.length===1)return Xp(e[0]);if(ZC(n))return n;const t=e.map(a=>Xp(a)),r=[];return t.forEach(a=>{a instanceof ze?r.push(a):a instanceof tt&&(a.op===n.op?r.push(...a.filters):r.push(a))}),r.length===1?r[0]:tt.create(r,n.op)}/**
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
 */class nz{constructor(){this.Tn=new VE}addToCollectionParentIndex(e,t){return this.Tn.add(t),j.resolve()}getCollectionParents(e,t){return j.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return j.resolve()}deleteFieldIndex(e,t){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,t){return j.resolve()}getDocumentsMatchingTarget(e,t){return j.resolve(null)}getIndexType(e,t){return j.resolve(0)}getFieldIndexes(e,t){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,t){return j.resolve(nr.min())}getMinOffsetFromCollectionGroup(e,t){return j.resolve(nr.min())}updateCollectionGroup(e,t,r){return j.resolve()}updateIndexEntries(e,t){return j.resolve()}}class VE{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),a=this.index[t]||new nt(Be.comparator),o=!a.has(r);return this.index[t]=a.add(r),o}has(e){const t=e.lastSegment(),r=e.popLast(),a=this.index[t];return a&&a.has(r)}getEntries(e){return(this.index[e]||new nt(Be.comparator)).toArray()}}/**
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
 */const IA="IndexedDbIndexManager",ep=new Uint8Array(0);class rz{constructor(e,t){this.databaseId=t,this.In=new VE,this.En=new rs(r=>So(r),(r,a)=>fd(r,a)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.In.has(t)){const r=t.lastSegment(),a=t.popLast();e.addOnCommittedListener(()=>{this.In.add(t)});const o={collectionId:r,parent:An(a)};return AA(e).put(o)}return j.resolve()}getCollectionParents(e,t){const r=[],a=IDBKeyRange.bound([t,""],[AC(t),""],!1,!0);return AA(e).G(a).next(o=>{for(const u of o){if(u.collectionId!==t)break;r.push(si(u.parent))}return r})}addFieldIndex(e,t){const r=rh(e),a=function(d){return{indexId:d.indexId,collectionGroup:d.collectionGroup,fields:d.fields.map(p=>[p.fieldPath.canonicalString(),p.kind])}}(t);delete a.indexId;const o=r.add(a);if(t.indexState){const u=Ll(e);return o.next(d=>{u.put(yA(d,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return o.next()}deleteFieldIndex(e,t){const r=rh(e),a=Ll(e),o=Ml(e);return r.delete(t.indexId).next(()=>a.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>o.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=rh(e),r=Ml(e),a=Ll(e);return t.J().next(()=>r.J()).next(()=>a.J())}createTargetIndexes(e,t){return j.forEach(this.dn(t),r=>this.getIndexType(e,r).next(a=>{if(a===0||a===1){const o=new wA(r).Pn();if(o!=null)return this.addFieldIndex(e,o)}}))}getDocumentsMatchingTarget(e,t){const r=Ml(e);let a=!0;const o=new Map;return j.forEach(this.dn(t),u=>this.An(e,u).next(d=>{a&&(a=!!d),o.set(u,d)})).next(()=>{if(a){let u=xe();const d=[];return j.forEach(o,(p,m)=>{re(IA,`Using index ${function(K){return`id=${K.indexId}|cg=${K.collectionGroup}|f=${K.fields.map(oe=>`${oe.fieldPath}:${oe.kind}`).join(",")}`}(p)} to execute ${So(t)}`);const _=function(K,oe){const ae=Z_(oe);if(ae===void 0)return null;for(const le of Qp(K,ae.fieldPath))switch(le.op){case"array-contains-any":return le.value.arrayValue.values||[];case"array-contains":return[le.value]}return null}(m,p),v=function(K,oe){const ae=new Map;for(const le of io(oe))for(const D of Qp(K,le.fieldPath))switch(D.op){case"==":case"in":ae.set(le.fieldPath.canonicalString(),D.value);break;case"not-in":case"!=":return ae.set(le.fieldPath.canonicalString(),D.value),Array.from(ae.values())}return null}(m,p),w=function(K,oe){const ae=[];let le=!0;for(const D of io(oe)){const R=D.kind===0?rA(K,D.fieldPath,K.startAt):iA(K,D.fieldPath,K.startAt);ae.push(R.value),le&&(le=R.inclusive)}return new da(ae,le)}(m,p),S=function(K,oe){const ae=[];let le=!0;for(const D of io(oe)){const R=D.kind===0?iA(K,D.fieldPath,K.endAt):rA(K,D.fieldPath,K.endAt);ae.push(R.value),le&&(le=R.inclusive)}return new da(ae,le)}(m,p),x=this.Rn(p,m,w),U=this.Rn(p,m,S),M=this.Vn(p,m,v),H=this.mn(p.indexId,_,x,w.inclusive,U,S.inclusive,M);return j.forEach(H,$=>r.H($,t.limit).next(K=>{K.forEach(oe=>{const ae=ce.fromSegments(oe.documentKey);u.has(ae)||(u=u.add(ae),d.push(ae))})}))}).next(()=>d)}return j.resolve(null)})}dn(e){let t=this.En.get(e);return t||(e.filters.length===0?t=[e]:t=tz(tt.create(e.filters,"and")).map(r=>lv(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.En.set(e,t),t)}mn(e,t,r,a,o,u,d){const p=(t!=null?t.length:1)*Math.max(r.length,o.length),m=p/(t!=null?t.length:1),_=[];for(let v=0;v<p;++v){const w=t?this.fn(t[v/m]):ep,S=this.gn(e,w,r[v%m],a),x=this.pn(e,w,o[v%m],u),U=d.map(M=>this.gn(e,w,M,!0));_.push(...this.createRange(S,x,U))}return _}gn(e,t,r,a){const o=new uo(e,ce.empty(),t,r);return a?o:o.nn()}pn(e,t,r,a){const o=new uo(e,ce.empty(),t,r);return a?o.nn():o}An(e,t){const r=new wA(t),a=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,a).next(o=>{let u=null;for(const d of o)r.un(d)&&(!u||d.fields.length>u.fields.length)&&(u=d);return u})}getIndexType(e,t){let r=2;const a=this.dn(t);return j.forEach(a,o=>this.An(e,o).next(u=>{u?r!==0&&u.fields.length<function(p){let m=new nt(pt.comparator),_=!1;for(const v of p.filters)for(const w of v.getFlattenedFilters())w.field.isKeyField()||(w.op==="array-contains"||w.op==="array-contains-any"?_=!0:m=m.add(w.field));for(const v of p.orderBy)v.field.isKeyField()||(m=m.add(v.field));return m.size+(_?1:0)}(o)&&(r=1):r=0})).next(()=>function(u){return u.limit!==null}(t)&&a.length>1&&r===2?1:r)}yn(e,t){const r=new nh;for(const a of io(e)){const o=t.data.field(a.fieldPath);if(o==null)return null;const u=r.tn(a.kind);lo.xt.At(o,u)}return r.Yt()}fn(e){const t=new nh;return lo.xt.At(e,t.tn(0)),t.Yt()}wn(e,t){const r=new nh;return lo.xt.At(Ao(this.databaseId,t),r.tn(function(o){const u=io(o);return u.length===0?0:u[u.length-1].kind}(e))),r.Yt()}Vn(e,t,r){if(r===null)return[];let a=[];a.push(new nh);let o=0;for(const u of io(e)){const d=r[o++];for(const p of a)if(this.Sn(t,u.fieldPath)&&Hh(d))a=this.bn(a,u,d);else{const m=p.tn(u.kind);lo.xt.At(d,m)}}return this.Dn(a)}Rn(e,t,r){return this.Vn(e,t,r.position)}Dn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].Yt();return t}bn(e,t,r){const a=[...e],o=[];for(const u of r.arrayValue.values||[])for(const d of a){const p=new nh;p.seed(d.Yt()),lo.xt.At(u,p.tn(t.kind)),o.push(p)}return o}Sn(e,t){return!!e.filters.find(r=>r instanceof ze&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=rh(e),a=Ll(e);return(t?r.G(ev,IDBKeyRange.bound(t,t)):r.G()).next(o=>{const u=[];return j.forEach(o,d=>a.get([d.indexId,this.uid]).next(p=>{u.push(function(_,v){const w=v?new Lh(v.sequenceNumber,new nr(xo(v.readTime),new ce(si(v.documentKey)),v.largestBatchId)):Lh.empty(),S=_.fields.map(([x,U])=>new yp(pt.fromServerFormat(x),U));return new Fp(_.indexId,_.collectionGroup,S,w)}(d,p))})).next(()=>u)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,a)=>{const o=r.indexState.sequenceNumber-a.indexState.sequenceNumber;return o!==0?o:Se(r.collectionGroup,a.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const a=rh(e),o=Ll(e);return this.vn(e).next(u=>a.G(ev,IDBKeyRange.bound(t,t)).next(d=>j.forEach(d,p=>o.put(yA(p.indexId,this.uid,u,r)))))}updateIndexEntries(e,t){const r=new Map;return j.forEach(t,(a,o)=>{const u=r.get(a.collectionGroup);return(u?j.resolve(u):this.getFieldIndexes(e,a.collectionGroup)).next(d=>(r.set(a.collectionGroup,d),j.forEach(d,p=>this.Cn(e,a,p).next(m=>{const _=this.Fn(o,p);return m.isEqual(_)?j.resolve():this.Mn(e,o,p,m,_)}))))})}xn(e,t,r,a){return Ml(e).put({indexId:a.indexId,uid:this.uid,arrayValue:a.arrayValue,directionalValue:a.directionalValue,orderedDocumentKey:this.wn(r,t.key),documentKey:t.key.path.toArray()})}On(e,t,r,a){return Ml(e).delete([a.indexId,this.uid,a.arrayValue,a.directionalValue,this.wn(r,t.key),t.key.path.toArray()])}Cn(e,t,r){const a=Ml(e);let o=new nt(Hs);return a.Z({index:MC,range:IDBKeyRange.only([r.indexId,this.uid,this.wn(r,t)])},(u,d)=>{o=o.add(new uo(r.indexId,t,d.arrayValue,d.directionalValue))}).next(()=>o)}Fn(e,t){let r=new nt(Hs);const a=this.yn(t,e);if(a==null)return r;const o=Z_(t);if(o!=null){const u=e.data.field(o.fieldPath);if(Hh(u))for(const d of u.arrayValue.values||[])r=r.add(new uo(t.indexId,e.key,this.fn(d),a))}else r=r.add(new uo(t.indexId,e.key,ep,a));return r}Mn(e,t,r,a,o){re(IA,"Updating index entries for document '%s'",t.key);const u=[];return function(p,m,_,v,w){const S=p.getIterator(),x=m.getIterator();let U=kl(S),M=kl(x);for(;U||M;){let H=!1,$=!1;if(U&&M){const K=_(U,M);K<0?$=!0:K>0&&(H=!0)}else U!=null?$=!0:H=!0;H?(v(M),M=kl(x)):$?(w(U),U=kl(S)):(U=kl(S),M=kl(x))}}(a,o,Hs,d=>{u.push(this.xn(e,t,r,d))},d=>{u.push(this.On(e,t,r,d))}),j.waitFor(u)}vn(e){let t=1;return Ll(e).Z({index:VC,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,a,o)=>{o.done(),t=a.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((u,d)=>Hs(u,d)).filter((u,d,p)=>!d||Hs(u,p[d-1])!==0);const a=[];a.push(e);for(const u of r){const d=Hs(u,e),p=Hs(u,t);if(d===0)a[0]=e.nn();else if(d>0&&p<0)a.push(u),a.push(u.nn());else if(p>0)break}a.push(t);const o=[];for(let u=0;u<a.length;u+=2){if(this.Nn(a[u],a[u+1]))return[];const d=[a[u].indexId,this.uid,a[u].arrayValue,a[u].directionalValue,ep,[]],p=[a[u+1].indexId,this.uid,a[u+1].arrayValue,a[u+1].directionalValue,ep,[]];o.push(IDBKeyRange.bound(d,p))}return o}Nn(e,t){return Hs(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(SA)}getMinOffset(e,t){return j.mapArray(this.dn(t),r=>this.An(e,r).next(a=>a||me())).next(SA)}}function AA(n){return Zt(n,Fh)}function Ml(n){return Zt(n,$p)}function rh(n){return Zt(n,_E)}function Ll(n){return Zt(n,Gp)}function SA(n){_e(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const a=n[r].indexState.offset;mE(a,e)<0&&(e=a),t<a.largestBatchId&&(t=a.largestBatchId)}return new nr(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RA={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},B1=41943040;class In{static withCacheSize(e){return new In(e,In.DEFAULT_COLLECTION_PERCENTILE,In.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */function z1(n,e,t){const r=n.store(xr),a=n.store(uu),o=[],u=IDBKeyRange.only(t.batchId);let d=0;const p=r.Z({range:u},(_,v,w)=>(d++,w.delete()));o.push(p.next(()=>{_e(d===1)}));const m=[];for(const _ of t.mutations){const v=NC(e,_.key.path,t.batchId);o.push(a.delete(v)),m.push(_.key)}return j.waitFor(o).next(()=>m)}function Zp(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw me();e=n.noDocument}return JSON.stringify(e).length}/**
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
 */In.DEFAULT_COLLECTION_PERCENTILE=10,In.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,In.DEFAULT=new In(B1,In.DEFAULT_COLLECTION_PERCENTILE,In.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),In.DISABLED=new In(-1,0,0);class Um{constructor(e,t,r,a){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=a,this.Bn={}}static It(e,t,r,a){_e(e.uid!=="");const o=e.isAuthenticated()?e.uid:"";return new Um(o,t,r,a)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Gs(e).Z({index:po,range:r},(a,o,u)=>{t=!1,u.done()}).next(()=>t)}addMutationBatch(e,t,r,a){const o=ql(e),u=Gs(e);return u.add({}).next(d=>{_e(typeof d=="number");const p=new CE(d,t,r,a),m=function(S,x,U){const M=U.baseMutations.map($=>Kh(S.Tt,$)),H=U.mutations.map($=>Kh(S.Tt,$));return{userId:x,batchId:U.batchId,localWriteTimeMs:U.localWriteTime.toMillis(),baseMutations:M,mutations:H}}(this.serializer,this.userId,p),_=[];let v=new nt((w,S)=>Se(w.canonicalString(),S.canonicalString()));for(const w of a){const S=NC(this.userId,w.key.path,d);v=v.add(w.key.path.popLast()),_.push(u.put(m)),_.push(o.put(S,L4))}return v.forEach(w=>{_.push(this.indexManager.addToCollectionParentIndex(e,w))}),e.addOnCommittedListener(()=>{this.Bn[d]=p.keys()}),j.waitFor(_).next(()=>p)})}lookupMutationBatch(e,t){return Gs(e).get(t).next(r=>r?(_e(r.userId===this.userId),oo(this.serializer,r)):null)}Ln(e,t){return this.Bn[t]?j.resolve(this.Bn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const a=r.keys();return this.Bn[t]=a,a}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,a=IDBKeyRange.lowerBound([this.userId,r]);let o=null;return Gs(e).Z({index:po,range:a},(u,d,p)=>{d.userId===this.userId&&(_e(d.batchId>=r),o=oo(this.serializer,d)),p.done()}).next(()=>o)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=na;return Gs(e).Z({index:po,range:t,reverse:!0},(a,o,u)=>{r=o.batchId,u.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,na],[this.userId,Number.POSITIVE_INFINITY]);return Gs(e).G(po,t).next(r=>r.map(a=>oo(this.serializer,a)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=_p(this.userId,t.path),a=IDBKeyRange.lowerBound(r),o=[];return ql(e).Z({range:a},(u,d,p)=>{const[m,_,v]=u,w=si(_);if(m===this.userId&&t.path.isEqual(w))return Gs(e).get(v).next(S=>{if(!S)throw me();_e(S.userId===this.userId),o.push(oo(this.serializer,S))});p.done()}).next(()=>o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new nt(Se);const a=[];return t.forEach(o=>{const u=_p(this.userId,o.path),d=IDBKeyRange.lowerBound(u),p=ql(e).Z({range:d},(m,_,v)=>{const[w,S,x]=m,U=si(S);w===this.userId&&o.path.isEqual(U)?r=r.add(x):v.done()});a.push(p)}),j.waitFor(a).next(()=>this.kn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,a=r.length+1,o=_p(this.userId,r),u=IDBKeyRange.lowerBound(o);let d=new nt(Se);return ql(e).Z({range:u},(p,m,_)=>{const[v,w,S]=p,x=si(w);v===this.userId&&r.isPrefixOf(x)?x.length===a&&(d=d.add(S)):_.done()}).next(()=>this.kn(e,d))}kn(e,t){const r=[],a=[];return t.forEach(o=>{a.push(Gs(e).get(o).next(u=>{if(u===null)throw me();_e(u.userId===this.userId),r.push(oo(this.serializer,u))}))}),j.waitFor(a).next(()=>r)}removeMutationBatch(e,t){return z1(e.ue,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.qn(t.batchId)}),j.forEach(r,a=>this.referenceDelegate.markPotentiallyOrphaned(e,a))))}qn(e){delete this.Bn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return j.resolve();const r=IDBKeyRange.lowerBound(function(u){return[u]}(this.userId)),a=[];return ql(e).Z({range:r},(o,u,d)=>{if(o[0]===this.userId){const p=si(o[1]);a.push(p)}else d.done()}).next(()=>{_e(a.length===0)})})}containsKey(e,t){return F1(e,this.userId,t)}Qn(e){return j1(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:na,lastStreamToken:""})}}function F1(n,e,t){const r=_p(e,t.path),a=r[1],o=IDBKeyRange.lowerBound(r);let u=!1;return ql(n).Z({range:o,Y:!0},(d,p,m)=>{const[_,v,w]=d;_===e&&v===a&&(u=!0),m.done()}).next(()=>u)}function Gs(n){return Zt(n,xr)}function ql(n){return Zt(n,uu)}function j1(n){return Zt(n,Bh)}/**
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
 */class Po{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Un(){return new Po(0)}static Kn(){return new Po(-1)}}/**
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
 */class iz{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.Wn(e).next(t=>{const r=new Po(t.highestTargetId);return t.highestTargetId=r.next(),this.Gn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Wn(e).next(t=>Ee.fromTimestamp(new gt(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Wn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.Wn(e).next(a=>(a.highestListenSequenceNumber=t,r&&(a.lastRemoteSnapshotVersion=r.toTimestamp()),t>a.highestListenSequenceNumber&&(a.highestListenSequenceNumber=t),this.Gn(e,a)))}addTargetData(e,t){return this.zn(e,t).next(()=>this.Wn(e).next(r=>(r.targetCount+=1,this.jn(t,r),this.Gn(e,r))))}updateTargetData(e,t){return this.zn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Ul(e).delete(t.targetId)).next(()=>this.Wn(e)).next(r=>(_e(r.targetCount>0),r.targetCount-=1,this.Gn(e,r)))}removeTargets(e,t,r){let a=0;const o=[];return Ul(e).Z((u,d)=>{const p=fh(d);p.sequenceNumber<=t&&r.get(p.targetId)===null&&(a++,o.push(this.removeTargetData(e,p)))}).next(()=>j.waitFor(o)).next(()=>a)}forEachTarget(e,t){return Ul(e).Z((r,a)=>{const o=fh(a);t(o)})}Wn(e){return CA(e).get(Hp).next(t=>(_e(t!==null),t))}Gn(e,t){return CA(e).put(Hp,t)}zn(e,t){return Ul(e).put(M1(this.serializer,t))}jn(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Wn(e).next(t=>t.targetCount)}getTargetData(e,t){const r=So(t),a=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let o=null;return Ul(e).Z({range:a,index:kC},(u,d,p)=>{const m=fh(d);fd(t,m.target)&&(o=m,p.done())}).next(()=>o)}addMatchingKeys(e,t,r){const a=[],o=Ws(e);return t.forEach(u=>{const d=An(u.path);a.push(o.put({targetId:r,path:d})),a.push(this.referenceDelegate.addReference(e,r,u))}),j.waitFor(a)}removeMatchingKeys(e,t,r){const a=Ws(e);return j.forEach(t,o=>{const u=An(o.path);return j.waitFor([a.delete([r,u]),this.referenceDelegate.removeReference(e,r,o)])})}removeMatchingKeysForTargetId(e,t){const r=Ws(e),a=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(a)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),a=Ws(e);let o=xe();return a.Z({range:r,Y:!0},(u,d,p)=>{const m=si(u[1]),_=new ce(m);o=o.add(_)}).next(()=>o)}containsKey(e,t){const r=An(t.path),a=IDBKeyRange.bound([r],[AC(r)],!1,!0);let o=0;return Ws(e).Z({index:yE,Y:!0,range:a},([u,d],p,m)=>{u!==0&&(o++,m.done())}).next(()=>o>0)}lt(e,t){return Ul(e).get(t).next(r=>r?fh(r):null)}}function Ul(n){return Zt(n,cu)}function CA(n){return Zt(n,To)}function Ws(n){return Zt(n,hu)}/**
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
 */const DA="LruGarbageCollector",sz=1048576;function xA([n,e],[t,r]){const a=Se(n,t);return a===0?Se(e,r):a}class az{constructor(e){this.Hn=e,this.buffer=new nt(xA),this.Jn=0}Yn(){return++this.Jn}Zn(e){const t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();xA(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class q1{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){re(DA,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ea(t)?re(DA,"Ignoring IndexedDB error during garbage collection: ",t):await va(t)}await this.er(3e5)})}}class oz{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return j.resolve(jn.ae);const r=new az(t);return this.tr.forEachTarget(e,a=>r.Zn(a.sequenceNumber)).next(()=>this.tr.rr(e,a=>r.Zn(a))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.tr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(re("LruGarbageCollector","Garbage collection skipped; disabled"),j.resolve(RA)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(re("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),RA):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let r,a,o,u,d,p,m;const _=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(v=>(v>this.params.maximumSequenceNumbersToCollect?(re("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${v}`),a=this.params.maximumSequenceNumbersToCollect):a=v,u=Date.now(),this.nthSequenceNumber(e,a))).next(v=>(r=v,d=Date.now(),this.removeTargets(e,r,t))).next(v=>(o=v,p=Date.now(),this.removeOrphanedDocuments(e,r))).next(v=>(m=Date.now(),Bl()<=Ue.DEBUG&&re("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-_}ms
	Determined least recently used ${a} in `+(d-u)+`ms
	Removed ${o} targets in `+(p-d)+`ms
	Removed ${v} documents in `+(m-p)+`ms
Total Duration: ${m-_}ms`),j.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:o,documentsRemoved:v})))}}function H1(n,e){return new oz(n,e)}/**
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
 */class lz{constructor(e,t){this.db=e,this.garbageCollector=H1(this,t)}nr(e){const t=this.sr(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(a=>r+a))}sr(e){let t=0;return this.rr(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}rr(e,t){return this._r(e,(r,a)=>t(a))}addReference(e,t,r){return tp(e,r)}removeReference(e,t,r){return tp(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return tp(e,t)}ar(e,t){return function(a,o){let u=!1;return j1(a).X(d=>F1(a,d,o).next(p=>(p&&(u=!0),j.resolve(!p)))).next(()=>u)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),a=[];let o=0;return this._r(e,(u,d)=>{if(d<=t){const p=this.ar(e,u).next(m=>{if(!m)return o++,r.getEntry(e,u).next(()=>(r.removeEntry(u,Ee.min()),Ws(e).delete(function(v){return[0,An(v.path)]}(u))))});a.push(p)}}).next(()=>j.waitFor(a)).next(()=>r.apply(e)).next(()=>o)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return tp(e,t)}_r(e,t){const r=Ws(e);let a,o=jn.ae;return r.Z({index:yE},([u,d],{path:p,sequenceNumber:m})=>{u===0?(o!==jn.ae&&t(new ce(si(a)),o),o=m,a=p):o=jn.ae}).next(()=>{o!==jn.ae&&t(new ce(si(a)),o)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function tp(n,e){return Ws(n).put(function(r,a){return{targetId:0,path:An(r.path),sequenceNumber:a}}(e,n.currentSequenceNumber))}/**
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
 */class G1{constructor(){this.changes=new rs(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ht.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?j.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class uz{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return no(e).put(r)}removeEntry(e,t,r){return no(e).delete(function(o,u){const d=o.path.toArray();return[d.slice(0,d.length-2),d[d.length-2],Yp(u),d[d.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.ur(e,r)))}getEntry(e,t){let r=ht.newInvalidDocument(t);return no(e).Z({index:vp,range:IDBKeyRange.only(ih(t))},(a,o)=>{r=this.cr(t,o)}).next(()=>r)}lr(e,t){let r={size:0,document:ht.newInvalidDocument(t)};return no(e).Z({index:vp,range:IDBKeyRange.only(ih(t))},(a,o)=>{r={document:this.cr(t,o),size:Zp(o)}}).next(()=>r)}getEntries(e,t){let r=Hn();return this.hr(e,t,(a,o)=>{const u=this.cr(a,o);r=r.insert(a,u)}).next(()=>r)}Pr(e,t){let r=Hn(),a=new lt(ce.comparator);return this.hr(e,t,(o,u)=>{const d=this.cr(o,u);r=r.insert(o,d),a=a.insert(o,Zp(u))}).next(()=>({documents:r,Tr:a}))}hr(e,t,r){if(t.isEmpty())return j.resolve();let a=new nt(OA);t.forEach(p=>a=a.add(p));const o=IDBKeyRange.bound(ih(a.first()),ih(a.last())),u=a.getIterator();let d=u.getNext();return no(e).Z({index:vp,range:o},(p,m,_)=>{const v=ce.fromSegments([...m.prefixPath,m.collectionGroup,m.documentId]);for(;d&&OA(d,v)<0;)r(d,null),d=u.getNext();d&&d.isEqual(v)&&(r(d,m),d=u.hasNext()?u.getNext():null),d?_.W(ih(d)):_.done()}).next(()=>{for(;d;)r(d,null),d=u.hasNext()?u.getNext():null})}getDocumentsMatchingQuery(e,t,r,a,o){const u=t.path,d=[u.popLast().toArray(),u.lastSegment(),Yp(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],p=[u.popLast().toArray(),u.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return no(e).G(IDBKeyRange.bound(d,p,!0)).next(m=>{o==null||o.incrementDocumentReadCount(m.length);let _=Hn();for(const v of m){const w=this.cr(ce.fromSegments(v.prefixPath.concat(v.collectionGroup,v.documentId)),v);w.isFoundDocument()&&(md(t,w)||a.has(w.key))&&(_=_.insert(w.key,w))}return _})}getAllFromCollectionGroup(e,t,r,a){let o=Hn();const u=NA(t,r),d=NA(t,nr.max());return no(e).Z({index:OC,range:IDBKeyRange.bound(u,d,!0)},(p,m,_)=>{const v=this.cr(ce.fromSegments(m.prefixPath.concat(m.collectionGroup,m.documentId)),m);o=o.insert(v.key,v),o.size===a&&_.done()}).next(()=>o)}newChangeBuffer(e){return new cz(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return PA(e).get(J_).next(t=>(_e(!!t),t))}ur(e,t){return PA(e).put(J_,t)}cr(e,t){if(t){const r=QB(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(Ee.min())))return r}return ht.newInvalidDocument(e)}}function $1(n){return new uz(n)}class cz extends G1{constructor(e,t){super(),this.Ir=e,this.trackRemovals=t,this.Er=new rs(r=>r.toString(),(r,a)=>r.isEqual(a))}applyChanges(e){const t=[];let r=0,a=new nt((o,u)=>Se(o.canonicalString(),u.canonicalString()));return this.changes.forEach((o,u)=>{const d=this.Er.get(o);if(t.push(this.Ir.removeEntry(e,o,d.readTime)),u.isValidDocument()){const p=mA(this.Ir.serializer,u);a=a.add(o.path.popLast());const m=Zp(p);r+=m-d.size,t.push(this.Ir.addEntry(e,o,p))}else if(r-=d.size,this.trackRemovals){const p=mA(this.Ir.serializer,u.convertToNoDocument(Ee.min()));t.push(this.Ir.addEntry(e,o,p))}}),a.forEach(o=>{t.push(this.Ir.indexManager.addToCollectionParentIndex(e,o))}),t.push(this.Ir.updateMetadata(e,r)),j.waitFor(t)}getFromCache(e,t){return this.Ir.lr(e,t).next(r=>(this.Er.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.Ir.Pr(e,t).next(({documents:r,Tr:a})=>(a.forEach((o,u)=>{this.Er.set(o,{size:u,readTime:r.get(o).readTime})}),r))}}function PA(n){return Zt(n,zh)}function no(n){return Zt(n,qp)}function ih(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function NA(n,e){const t=e.documentKey.path.toArray();return[n,Yp(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function OA(n,e){const t=n.path.toArray(),r=e.path.toArray();let a=0;for(let o=0;o<t.length-2&&o<r.length-2;++o)if(a=Se(t[o],r[o]),a)return a;return a=Se(t.length,r.length),a||(a=Se(t[t.length-2],r[r.length-2]),a||Se(t[t.length-1],r[r.length-1]))}/**
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
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hz{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class K1{constructor(e,t,r,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=a}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(a=>(r=a,this.remoteDocumentCache.getEntry(e,t))).next(a=>(r!==null&&Ih(r.mutation,a,qn.empty(),gt.now()),a))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,xe()).next(()=>r))}getLocalViewOfDocuments(e,t,r=xe()){const a=ai();return this.populateOverlays(e,a,t).next(()=>this.computeViews(e,t,a,r).next(o=>{let u=hh();return o.forEach((d,p)=>{u=u.insert(d,p.overlayedDocument)}),u}))}getOverlayedDocuments(e,t){const r=ai();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,xe()))}populateOverlays(e,t,r){const a=[];return r.forEach(o=>{t.has(o)||a.push(o)}),this.documentOverlayCache.getOverlays(e,a).next(o=>{o.forEach((u,d)=>{t.set(u,d)})})}computeViews(e,t,r,a){let o=Hn();const u=bh(),d=function(){return bh()}();return t.forEach((p,m)=>{const _=r.get(m.key);a.has(m.key)&&(_===void 0||_.mutation instanceof is)?o=o.insert(m.key,m):_!==void 0?(u.set(m.key,_.mutation.getFieldMask()),Ih(_.mutation,m,_.mutation.getFieldMask(),gt.now())):u.set(m.key,qn.empty())}),this.recalculateAndSaveOverlays(e,o).next(p=>(p.forEach((m,_)=>u.set(m,_)),t.forEach((m,_)=>{var v;return d.set(m,new hz(_,(v=u.get(m))!==null&&v!==void 0?v:null))}),d))}recalculateAndSaveOverlays(e,t){const r=bh();let a=new lt((u,d)=>u-d),o=xe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(u=>{for(const d of u)d.keys().forEach(p=>{const m=t.get(p);if(m===null)return;let _=r.get(p)||qn.empty();_=d.applyToLocalView(m,_),r.set(p,_);const v=(a.get(d.batchId)||xe()).add(p);a=a.insert(d.batchId,v)})}).next(()=>{const u=[],d=a.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),m=p.key,_=p.value,v=c1();_.forEach(w=>{if(!o.has(w)){const S=y1(t.get(w),r.get(w));S!==null&&v.set(w,S),o=o.add(w)}}),u.push(this.documentOverlayCache.saveOverlays(e,m,v))}return j.waitFor(u)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,a){return function(u){return ce.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):IE(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,a):this.getDocumentsMatchingCollectionQuery(e,t,r,a)}getNextDocuments(e,t,r,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,a).next(o=>{const u=a-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,a-o.size):j.resolve(ai());let d=lu,p=o;return u.next(m=>j.forEach(m,(_,v)=>(d<v.largestBatchId&&(d=v.largestBatchId),o.get(_)?j.resolve():this.remoteDocumentCache.getEntry(e,_).next(w=>{p=p.insert(_,w)}))).next(()=>this.populateOverlays(e,m,o)).next(()=>this.computeViews(e,p,m,xe())).next(_=>({batchId:d,changes:u1(_)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ce(t)).next(r=>{let a=hh();return r.isFoundDocument()&&(a=a.insert(r.key,r)),a})}getDocumentsMatchingCollectionGroupQuery(e,t,r,a){const o=t.collectionGroup;let u=hh();return this.indexManager.getCollectionParents(e,o).next(d=>j.forEach(d,p=>{const m=function(v,w){return new ns(w,null,v.explicitOrderBy.slice(),v.filters.slice(),v.limit,v.limitType,v.startAt,v.endAt)}(t,p.child(o));return this.getDocumentsMatchingCollectionQuery(e,m,r,a).next(_=>{_.forEach((v,w)=>{u=u.insert(v,w)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(e,t,r,a){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,o,a))).next(u=>{o.forEach((p,m)=>{const _=m.getKey();u.get(_)===null&&(u=u.insert(_,ht.newInvalidDocument(_)))});let d=hh();return u.forEach((p,m)=>{const _=o.get(p);_!==void 0&&Ih(_.mutation,m,qn.empty(),gt.now()),md(t,m)&&(d=d.insert(p,m))}),d})}}/**
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
 */class dz{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return j.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,function(a){return{id:a.id,version:a.version,createTime:Mt(a.createTime)}}(t)),j.resolve()}getNamedQuery(e,t){return j.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,function(a){return{name:a.name,query:OE(a.bundledQuery),readTime:Mt(a.readTime)}}(t)),j.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fz{constructor(){this.overlays=new lt(ce.comparator),this.Rr=new Map}getOverlay(e,t){return j.resolve(this.overlays.get(t))}getOverlays(e,t){const r=ai();return j.forEach(t,a=>this.getOverlay(e,a).next(o=>{o!==null&&r.set(a,o)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((a,o)=>{this.Et(e,t,o)}),j.resolve()}removeOverlaysForBatchId(e,t,r){const a=this.Rr.get(r);return a!==void 0&&(a.forEach(o=>this.overlays=this.overlays.remove(o)),this.Rr.delete(r)),j.resolve()}getOverlaysForCollection(e,t,r){const a=ai(),o=t.length+1,u=new ce(t.child("")),d=this.overlays.getIteratorFrom(u);for(;d.hasNext();){const p=d.getNext().value,m=p.getKey();if(!t.isPrefixOf(m.path))break;m.path.length===o&&p.largestBatchId>r&&a.set(p.getKey(),p)}return j.resolve(a)}getOverlaysForCollectionGroup(e,t,r,a){let o=new lt((m,_)=>m-_);const u=this.overlays.getIterator();for(;u.hasNext();){const m=u.getNext().value;if(m.getKey().getCollectionGroup()===t&&m.largestBatchId>r){let _=o.get(m.largestBatchId);_===null&&(_=ai(),o=o.insert(m.largestBatchId,_)),_.set(m.getKey(),m)}}const d=ai(),p=o.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((m,_)=>d.set(m,_)),!(d.size()>=a)););return j.resolve(d)}Et(e,t,r){const a=this.overlays.get(r.key);if(a!==null){const u=this.Rr.get(a.largestBatchId).delete(r.key);this.Rr.set(a.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new xE(t,r));let o=this.Rr.get(t);o===void 0&&(o=xe(),this.Rr.set(t,o)),this.Rr.set(t,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pz{constructor(){this.sessionToken=Dt.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,j.resolve()}}/**
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
 */class ME{constructor(){this.Vr=new nt(ln.mr),this.gr=new nt(ln.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){const r=new ln(e,t);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.wr(new ln(e,t))}Sr(e,t){e.forEach(r=>this.removeReference(r,t))}br(e){const t=new ce(new Be([])),r=new ln(t,e),a=new ln(t,e+1),o=[];return this.gr.forEachInRange([r,a],u=>{this.wr(u),o.push(u.key)}),o}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const t=new ce(new Be([])),r=new ln(t,e),a=new ln(t,e+1);let o=xe();return this.gr.forEachInRange([r,a],u=>{o=o.add(u.key)}),o}containsKey(e){const t=new ln(e,0),r=this.Vr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class ln{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return ce.comparator(e.key,t.key)||Se(e.Cr,t.Cr)}static pr(e,t){return Se(e.Cr,t.Cr)||ce.comparator(e.key,t.key)}}/**
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
 */class mz{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new nt(ln.mr)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,a){const o=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new CE(o,t,r,a);this.mutationQueue.push(u);for(const d of a)this.Mr=this.Mr.add(new ln(d.key,o)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return j.resolve(u)}lookupMutationBatch(e,t){return j.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,a=this.Nr(r),o=a<0?0:a;return j.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?na:this.Fr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new ln(t,0),a=new ln(t,Number.POSITIVE_INFINITY),o=[];return this.Mr.forEachInRange([r,a],u=>{const d=this.Or(u.Cr);o.push(d)}),j.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new nt(Se);return t.forEach(a=>{const o=new ln(a,0),u=new ln(a,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([o,u],d=>{r=r.add(d.Cr)})}),j.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,a=r.length+1;let o=r;ce.isDocumentKey(o)||(o=o.child(""));const u=new ln(new ce(o),0);let d=new nt(Se);return this.Mr.forEachWhile(p=>{const m=p.key.path;return!!r.isPrefixOf(m)&&(m.length===a&&(d=d.add(p.Cr)),!0)},u),j.resolve(this.Br(d))}Br(e){const t=[];return e.forEach(r=>{const a=this.Or(r);a!==null&&t.push(a)}),t}removeMutationBatch(e,t){_e(this.Lr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return j.forEach(t.mutations,a=>{const o=new ln(a.key,t.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)}).next(()=>{this.Mr=r})}qn(e){}containsKey(e,t){const r=new ln(t,0),a=this.Mr.firstAfterOrEqual(r);return j.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class gz{constructor(e){this.kr=e,this.docs=function(){return new lt(ce.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,a=this.docs.get(r),o=a?a.size:0,u=this.kr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return j.resolve(r?r.document.mutableCopy():ht.newInvalidDocument(t))}getEntries(e,t){let r=Hn();return t.forEach(a=>{const o=this.docs.get(a);r=r.insert(a,o?o.document.mutableCopy():ht.newInvalidDocument(a))}),j.resolve(r)}getDocumentsMatchingQuery(e,t,r,a){let o=Hn();const u=t.path,d=new ce(u.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:m,value:{document:_}}=p.getNext();if(!u.isPrefixOf(m.path))break;m.path.length>u.length+1||mE(RC(_),r)<=0||(a.has(_.key)||md(t,_))&&(o=o.insert(_.key,_.mutableCopy()))}return j.resolve(o)}getAllFromCollectionGroup(e,t,r,a){me()}qr(e,t){return j.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new yz(this)}getSize(e){return j.resolve(this.size)}}class yz extends G1{constructor(e){super(),this.Ir=e}applyChanges(e){const t=[];return this.changes.forEach((r,a)=>{a.isValidDocument()?t.push(this.Ir.addEntry(e,a)):this.Ir.removeEntry(r)}),j.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
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
 */class _z{constructor(e){this.persistence=e,this.Qr=new rs(t=>So(t),fd),this.lastRemoteSnapshotVersion=Ee.min(),this.highestTargetId=0,this.$r=0,this.Ur=new ME,this.targetCount=0,this.Kr=Po.Un()}forEachTarget(e,t){return this.Qr.forEach((r,a)=>t(a)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Kr.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.$r&&(this.$r=t),j.resolve()}zn(e){this.Qr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Kr=new Po(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,j.resolve()}updateTargetData(e,t){return this.zn(t),j.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Ur.br(t.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,t,r){let a=0;const o=[];return this.Qr.forEach((u,d)=>{d.sequenceNumber<=t&&r.get(d.targetId)===null&&(this.Qr.delete(u),o.push(this.removeMatchingKeysForTargetId(e,d.targetId)),a++)}),j.waitFor(o).next(()=>a)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,t){const r=this.Qr.get(t)||null;return j.resolve(r)}addMatchingKeys(e,t,r){return this.Ur.yr(t,r),j.resolve()}removeMatchingKeys(e,t,r){this.Ur.Sr(t,r);const a=this.persistence.referenceDelegate,o=[];return a&&t.forEach(u=>{o.push(a.markPotentiallyOrphaned(e,u))}),j.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.Ur.br(t),j.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Ur.vr(t);return j.resolve(r)}containsKey(e,t){return j.resolve(this.Ur.containsKey(t))}}/**
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
 */class LE{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new jn(0),this.zr=!1,this.zr=!0,this.jr=new pz,this.referenceDelegate=e(this),this.Hr=new _z(this),this.indexManager=new nz,this.remoteDocumentCache=function(a){return new gz(a)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new V1(t),this.Yr=new dz(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new fz,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Wr[e.toKey()];return r||(r=new mz(t,this.referenceDelegate),this.Wr[e.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,r){re("MemoryPersistence","Starting transaction:",e);const a=new vz(this.Gr.next());return this.referenceDelegate.Zr(),r(a).next(o=>this.referenceDelegate.Xr(a).next(()=>o)).toPromise().then(o=>(a.raiseOnCommittedEvent(),o))}ei(e,t){return j.or(Object.values(this.Wr).map(r=>()=>r.containsKey(e,t)))}}class vz extends DC{constructor(e){super(),this.currentSequenceNumber=e}}class Bm{constructor(e){this.persistence=e,this.ti=new ME,this.ni=null}static ri(e){return new Bm(e)}get ii(){if(this.ni)return this.ni;throw me()}addReference(e,t,r){return this.ti.addReference(r,t),this.ii.delete(r.toString()),j.resolve()}removeReference(e,t,r){return this.ti.removeReference(r,t),this.ii.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),j.resolve()}removeTarget(e,t){this.ti.br(t.targetId).forEach(a=>this.ii.add(a.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(a=>{a.forEach(o=>this.ii.add(o.toString()))}).next(()=>r.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.ii,r=>{const a=ce.fromPath(r);return this.si(e,a).next(o=>{o||t.removeEntry(a,Ee.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(r=>{r?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return j.or([()=>j.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class Jp{constructor(e,t){this.persistence=e,this.oi=new rs(r=>An(r.path),(r,a)=>r.isEqual(a)),this.garbageCollector=H1(this,t)}static ri(e,t){return new Jp(e,t)}Zr(){}Xr(e){return j.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){const t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(a=>r+a))}sr(e){let t=0;return this.rr(e,r=>{t++}).next(()=>t)}rr(e,t){return j.forEach(this.oi,(r,a)=>this.ar(e,r,a).next(o=>o?j.resolve():t(a)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const a=this.persistence.getRemoteDocumentCache(),o=a.newChangeBuffer();return a.qr(e,u=>this.ar(e,u,t).next(d=>{d||(r++,o.removeEntry(u,Ee.min()))})).next(()=>o.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),j.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),j.resolve()}removeReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),j.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),j.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Tp(e.data.value)),t}ar(e,t,r){return j.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.oi.get(t);return j.resolve(a!==void 0&&a>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Ez{constructor(e){this.serializer=e}B(e,t,r,a){const o=new Cm("createOrUpgrade",t);r<1&&a>=1&&(function(p){p.createObjectStore(dd)}(e),function(p){p.createObjectStore(Bh,{keyPath:M4}),p.createObjectStore(xr,{keyPath:GI,autoIncrement:!0}).createIndex(po,$I,{unique:!0}),p.createObjectStore(uu)}(e),kA(e),function(p){p.createObjectStore(so)}(e));let u=j.resolve();return r<3&&a>=3&&(r!==0&&(function(p){p.deleteObjectStore(hu),p.deleteObjectStore(cu),p.deleteObjectStore(To)}(e),kA(e)),u=u.next(()=>function(p){const m=p.store(To),_={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:Ee.min().toTimestamp(),targetCount:0};return m.put(Hp,_)}(o))),r<4&&a>=4&&(r!==0&&(u=u.next(()=>function(p,m){return m.store(xr).G().next(v=>{p.deleteObjectStore(xr),p.createObjectStore(xr,{keyPath:GI,autoIncrement:!0}).createIndex(po,$I,{unique:!0});const w=m.store(xr),S=v.map(x=>w.put(x));return j.waitFor(S)})}(e,o))),u=u.next(()=>{(function(p){p.createObjectStore(du,{keyPath:G4})})(e)})),r<5&&a>=5&&(u=u.next(()=>this._i(o))),r<6&&a>=6&&(u=u.next(()=>(function(p){p.createObjectStore(zh)}(e),this.ai(o)))),r<7&&a>=7&&(u=u.next(()=>this.ui(o))),r<8&&a>=8&&(u=u.next(()=>this.ci(e,o))),r<9&&a>=9&&(u=u.next(()=>{(function(p){p.objectStoreNames.contains("remoteDocumentChanges")&&p.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&a>=10&&(u=u.next(()=>this.li(o))),r<11&&a>=11&&(u=u.next(()=>{(function(p){p.createObjectStore(Dm,{keyPath:$4})})(e),function(p){p.createObjectStore(xm,{keyPath:K4})}(e)})),r<12&&a>=12&&(u=u.next(()=>{(function(p){const m=p.createObjectStore(Pm,{keyPath:eB});m.createIndex(tv,tB,{unique:!1}),m.createIndex(LC,nB,{unique:!1})})(e)})),r<13&&a>=13&&(u=u.next(()=>function(p){const m=p.createObjectStore(qp,{keyPath:U4});m.createIndex(vp,B4),m.createIndex(OC,z4)}(e)).next(()=>this.hi(e,o)).next(()=>e.deleteObjectStore(so))),r<14&&a>=14&&(u=u.next(()=>this.Pi(e,o))),r<15&&a>=15&&(u=u.next(()=>function(p){p.createObjectStore(_E,{keyPath:Q4,autoIncrement:!0}).createIndex(ev,W4,{unique:!1}),p.createObjectStore(Gp,{keyPath:Y4}).createIndex(VC,X4,{unique:!1}),p.createObjectStore($p,{keyPath:Z4}).createIndex(MC,J4,{unique:!1})}(e))),r<16&&a>=16&&(u=u.next(()=>{t.objectStore(Gp).clear()}).next(()=>{t.objectStore($p).clear()})),r<17&&a>=17&&(u=u.next(()=>{(function(p){p.createObjectStore(vE,{keyPath:rB})})(e)})),u}ai(e){let t=0;return e.store(so).Z((r,a)=>{t+=Zp(a)}).next(()=>{const r={byteSize:t};return e.store(zh).put(J_,r)})}_i(e){const t=e.store(Bh),r=e.store(xr);return t.G().next(a=>j.forEach(a,o=>{const u=IDBKeyRange.bound([o.userId,na],[o.userId,o.lastAcknowledgedBatchId]);return r.G(po,u).next(d=>j.forEach(d,p=>{_e(p.userId===o.userId);const m=oo(this.serializer,p);return z1(e,o.userId,m).next(()=>{})}))}))}ui(e){const t=e.store(hu),r=e.store(so);return e.store(To).get(Hp).next(a=>{const o=[];return r.Z((u,d)=>{const p=new Be(u),m=function(v){return[0,An(v)]}(p);o.push(t.get(m).next(_=>_?j.resolve():(v=>t.put({targetId:0,path:An(v),sequenceNumber:a.highestListenSequenceNumber}))(p)))}).next(()=>j.waitFor(o))})}ci(e,t){e.createObjectStore(Fh,{keyPath:H4});const r=t.store(Fh),a=new VE,o=u=>{if(a.add(u)){const d=u.lastSegment(),p=u.popLast();return r.put({collectionId:d,parent:An(p)})}};return t.store(so).Z({Y:!0},(u,d)=>{const p=new Be(u);return o(p.popLast())}).next(()=>t.store(uu).Z({Y:!0},([u,d,p],m)=>{const _=si(d);return o(_.popLast())}))}li(e){const t=e.store(cu);return t.Z((r,a)=>{const o=fh(a),u=M1(this.serializer,o);return t.put(u)})}hi(e,t){const r=t.store(so),a=[];return r.Z((o,u)=>{const d=t.store(qp),p=function(v){return v.document?new ce(Be.fromString(v.document.name).popFirst(5)):v.noDocument?ce.fromSegments(v.noDocument.path):v.unknownDocument?ce.fromSegments(v.unknownDocument.path):me()}(u).path.toArray(),m={prefixPath:p.slice(0,p.length-2),collectionGroup:p[p.length-2],documentId:p[p.length-1],readTime:u.readTime||[0,0],unknownDocument:u.unknownDocument,noDocument:u.noDocument,document:u.document,hasCommittedMutations:!!u.hasCommittedMutations};a.push(d.put(m))}).next(()=>j.waitFor(a))}Pi(e,t){const r=t.store(xr),a=$1(this.serializer),o=new LE(Bm.ri,this.serializer.Tt);return r.G().next(u=>{const d=new Map;return u.forEach(p=>{var m;let _=(m=d.get(p.userId))!==null&&m!==void 0?m:xe();oo(this.serializer,p).keys().forEach(v=>_=_.add(v)),d.set(p.userId,_)}),j.forEach(d,(p,m)=>{const _=new cn(m),v=Lm.It(this.serializer,_),w=o.getIndexManager(_),S=Um.It(_,this.serializer,w,o.referenceDelegate);return new K1(a,S,v,w).recalculateAndSaveOverlaysForDocumentKeys(new nv(t,jn.ae),p).next()})})}}function kA(n){n.createObjectStore(hu,{keyPath:j4}).createIndex(yE,q4,{unique:!0}),n.createObjectStore(cu,{keyPath:"targetId"}).createIndex(kC,F4,{unique:!0}),n.createObjectStore(To)}const $s="IndexedDbPersistence",b_=18e5,I_=5e3,A_="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",Q1="main";class UE{constructor(e,t,r,a,o,u,d,p,m,_,v=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.Ti=o,this.window=u,this.document=d,this.Ii=m,this.Ei=_,this.di=v,this.Gr=null,this.zr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Ai=null,this.inForeground=!1,this.Ri=null,this.Vi=null,this.mi=Number.NEGATIVE_INFINITY,this.fi=w=>Promise.resolve(),!UE.D())throw new te(Q.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new lz(this,a),this.gi=t+Q1,this.serializer=new V1(p),this.pi=new oi(this.gi,this.di,new Ez(this.serializer)),this.jr=new YB,this.Hr=new iz(this.referenceDelegate,this.serializer),this.remoteDocumentCache=$1(this.serializer),this.Yr=new WB,this.window&&this.window.localStorage?this.yi=this.window.localStorage:(this.yi=null,_===!1&&Vt($s,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.wi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new te(Q.FAILED_PRECONDITION,A_);return this.Si(),this.bi(),this.Di(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Hr.getHighestSequenceNumber(e))}).then(e=>{this.Gr=new jn(e,this.Ii)}).then(()=>{this.zr=!0}).catch(e=>(this.pi&&this.pi.close(),Promise.reject(e)))}Ci(e){return this.fi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.pi.k(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Ti.enqueueAndForget(async()=>{this.started&&await this.wi()}))}wi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>np(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Fi(e).next(t=>{t||(this.isPrimary=!1,this.Ti.enqueueRetryable(()=>this.fi(!1)))})}).next(()=>this.Mi(e)).next(t=>this.isPrimary&&!t?this.xi(e).next(()=>!1):!!t&&this.Oi(e).next(()=>!0))).catch(e=>{if(Ea(e))return re($s,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return re($s,"Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Ti.enqueueRetryable(()=>this.fi(e)),this.isPrimary=e})}Fi(e){return sh(e).get(Ol).next(t=>j.resolve(this.Ni(t)))}Bi(e){return np(e).delete(this.clientId)}async Li(){if(this.isPrimary&&!this.ki(this.mi,b_)){this.mi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=Zt(t,du);return r.G().next(a=>{const o=this.qi(a,b_),u=a.filter(d=>o.indexOf(d)===-1);return j.forEach(u,d=>r.delete(d.clientId)).next(()=>u)})}).catch(()=>[]);if(this.yi)for(const t of e)this.yi.removeItem(this.Qi(t.clientId))}}Di(){this.Vi=this.Ti.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.wi().then(()=>this.Li()).then(()=>this.Di()))}Ni(e){return!!e&&e.ownerId===this.clientId}Mi(e){return this.Ei?j.resolve(!0):sh(e).get(Ol).next(t=>{if(t!==null&&this.ki(t.leaseTimestampMs,I_)&&!this.$i(t.ownerId)){if(this.Ni(t)&&this.networkEnabled)return!0;if(!this.Ni(t)){if(!t.allowTabSynchronization)throw new te(Q.FAILED_PRECONDITION,A_);return!1}}return!(!this.networkEnabled||!this.inForeground)||np(e).G().next(r=>this.qi(r,I_).find(a=>{if(this.clientId!==a.clientId){const o=!this.networkEnabled&&a.networkEnabled,u=!this.inForeground&&a.inForeground,d=this.networkEnabled===a.networkEnabled;if(o||u&&d)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&re($s,`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.zr=!1,this.Ui(),this.Vi&&(this.Vi.cancel(),this.Vi=null),this.Ki(),this.Wi(),await this.pi.runTransaction("shutdown","readwrite",[dd,du],e=>{const t=new nv(e,jn.ae);return this.xi(t).next(()=>this.Bi(t))}),this.pi.close(),this.Gi()}qi(e,t){return e.filter(r=>this.ki(r.updateTimeMs,t)&&!this.$i(r.clientId))}zi(){return this.runTransaction("getActiveClients","readonly",e=>np(e).G().next(t=>this.qi(t,b_).map(r=>r.clientId)))}get started(){return this.zr}getGlobalsCache(){return this.jr}getMutationQueue(e,t){return Um.It(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new rz(e,this.serializer.Tt.databaseId)}getDocumentOverlayCache(e){return Lm.It(this.serializer,e)}getBundleCache(){return this.Yr}runTransaction(e,t,r){re($s,"Starting transaction:",e);const a=t==="readonly"?"readonly":"readwrite",o=function(p){return p===17?aB:p===16?sB:p===15?EE:p===14?zC:p===13?BC:p===12?iB:p===11?UC:void me()}(this.di);let u;return this.pi.runTransaction(e,a,o,d=>(u=new nv(d,this.Gr?this.Gr.next():jn.ae),t==="readwrite-primary"?this.Fi(u).next(p=>!!p||this.Mi(u)).next(p=>{if(!p)throw Vt(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Ti.enqueueRetryable(()=>this.fi(!1)),new te(Q.FAILED_PRECONDITION,CC);return r(u)}).next(p=>this.Oi(u).next(()=>p)):this.ji(u).next(()=>r(u)))).then(d=>(u.raiseOnCommittedEvent(),d))}ji(e){return sh(e).get(Ol).next(t=>{if(t!==null&&this.ki(t.leaseTimestampMs,I_)&&!this.$i(t.ownerId)&&!this.Ni(t)&&!(this.Ei||this.allowTabSynchronization&&t.allowTabSynchronization))throw new te(Q.FAILED_PRECONDITION,A_)})}Oi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return sh(e).put(Ol,t)}static D(){return oi.D()}xi(e){const t=sh(e);return t.get(Ol).next(r=>this.Ni(r)?(re($s,"Releasing primary lease."),t.delete(Ol)):j.resolve())}ki(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(Vt(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Si(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ri=()=>{this.Ti.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.wi()))},this.document.addEventListener("visibilitychange",this.Ri),this.inForeground=this.document.visibilityState==="visible")}Ki(){this.Ri&&(this.document.removeEventListener("visibilitychange",this.Ri),this.Ri=null)}bi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Ai=()=>{this.Ui();const t=/(?:Version|Mobile)\/1[456]/;iR()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.Ti.enterRestrictedMode(!0),this.Ti.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Ai))}Wi(){this.Ai&&(this.window.removeEventListener("pagehide",this.Ai),this.Ai=null)}$i(e){var t;try{const r=((t=this.yi)===null||t===void 0?void 0:t.getItem(this.Qi(e)))!==null;return re($s,`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Vt($s,"Failed to get zombied client id.",r),!1}}Ui(){if(this.yi)try{this.yi.setItem(this.Qi(this.clientId),String(Date.now()))}catch(e){Vt("Failed to set zombie client id.",e)}}Gi(){if(this.yi)try{this.yi.removeItem(this.Qi(this.clientId))}catch{}}Qi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function sh(n){return Zt(n,dd)}function np(n){return Zt(n,du)}function BE(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class zE{constructor(e,t,r,a){this.targetId=e,this.fromCache=t,this.Hi=r,this.Ji=a}static Yi(e,t){let r=xe(),a=xe();for(const o of t.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:a=a.add(o.doc.key)}return new zE(e,t.fromCache,r,a)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tz{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class W1{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return iR()?8:xC(wt())>0?6:4}()}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,r,a){const o={result:null};return this.rs(e,t).next(u=>{o.result=u}).next(()=>{if(!o.result)return this.ss(e,t,a,r).next(u=>{o.result=u})}).next(()=>{if(o.result)return;const u=new Tz;return this._s(e,t,u).next(d=>{if(o.result=d,this.Xi)return this.us(e,t,u,d.size)})}).next(()=>o.result)}us(e,t,r,a){return r.documentReadCount<this.es?(Bl()<=Ue.DEBUG&&re("QueryEngine","SDK will not create cache indexes for query:",zl(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),j.resolve()):(Bl()<=Ue.DEBUG&&re("QueryEngine","Query:",zl(t),"scans",r.documentReadCount,"local documents and returns",a,"documents as results."),r.documentReadCount>this.ts*a?(Bl()<=Ue.DEBUG&&re("QueryEngine","The SDK decides to create cache indexes for query:",zl(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Vn(t))):j.resolve())}rs(e,t){if(sA(t))return j.resolve(null);let r=Vn(t);return this.indexManager.getIndexType(e,r).next(a=>a===0?null:(t.limit!==null&&a===1&&(t=Wp(t,null,"F"),r=Vn(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const u=xe(...o);return this.ns.getDocuments(e,u).next(d=>this.indexManager.getMinOffset(e,r).next(p=>{const m=this.cs(t,d);return this.ls(t,m,u,p.readTime)?this.rs(e,Wp(t,null,"F")):this.hs(e,m,t,p)}))})))}ss(e,t,r,a){return sA(t)||a.isEqual(Ee.min())?j.resolve(null):this.ns.getDocuments(e,r).next(o=>{const u=this.cs(t,o);return this.ls(t,u,r,a)?j.resolve(null):(Bl()<=Ue.DEBUG&&re("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),zl(t)),this.hs(e,u,t,SC(a,lu)).next(d=>d))})}cs(e,t){let r=new nt(o1(e));return t.forEach((a,o)=>{md(e,o)&&(r=r.add(o))}),r}ls(e,t,r,a){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(a)>0)}_s(e,t,r){return Bl()<=Ue.DEBUG&&re("QueryEngine","Using full collection scan to execute query:",zl(t)),this.ns.getDocumentsMatchingQuery(e,t,nr.min(),r)}hs(e,t,r,a){return this.ns.getDocumentsMatchingQuery(e,r,a).next(o=>(t.forEach(u=>{o=o.insert(u.key,u)}),o))}}/**
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
 */const FE="LocalStore",wz=3e8;class bz{constructor(e,t,r,a){this.persistence=e,this.Ps=t,this.serializer=a,this.Ts=new lt(Se),this.Is=new rs(o=>So(o),fd),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(r)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new K1(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}}function Y1(n,e,t,r){return new bz(n,e,t,r)}async function X1(n,e){const t=de(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let a;return t.mutationQueue.getAllMutationBatches(r).next(o=>(a=o,t.As(e),t.mutationQueue.getAllMutationBatches(r))).next(o=>{const u=[],d=[];let p=xe();for(const m of a){u.push(m.batchId);for(const _ of m.mutations)p=p.add(_.key)}for(const m of o){d.push(m.batchId);for(const _ of m.mutations)p=p.add(_.key)}return t.localDocuments.getDocuments(r,p).next(m=>({Rs:m,removedBatchIds:u,addedBatchIds:d}))})})}function Iz(n,e){const t=de(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const a=e.batch.keys(),o=t.ds.newChangeBuffer({trackRemovals:!0});return function(d,p,m,_){const v=m.batch,w=v.keys();let S=j.resolve();return w.forEach(x=>{S=S.next(()=>_.getEntry(p,x)).next(U=>{const M=m.docVersions.get(x);_e(M!==null),U.version.compareTo(M)<0&&(v.applyToRemoteDocument(U,m),U.isValidDocument()&&(U.setReadTime(m.commitVersion),_.addEntry(U)))})}),S.next(()=>d.mutationQueue.removeMutationBatch(p,v))}(t,r,e,o).next(()=>o.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,a,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(d){let p=xe();for(let m=0;m<d.mutationResults.length;++m)d.mutationResults[m].transformResults.length>0&&(p=p.add(d.batch.mutations[m].key));return p}(e))).next(()=>t.localDocuments.getDocuments(r,a))})}function Z1(n){const e=de(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}function Az(n,e){const t=de(n),r=e.snapshotVersion;let a=t.Ts;return t.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const u=t.ds.newChangeBuffer({trackRemovals:!0});a=t.Ts;const d=[];e.targetChanges.forEach((_,v)=>{const w=a.get(v);if(!w)return;d.push(t.Hr.removeMatchingKeys(o,_.removedDocuments,v).next(()=>t.Hr.addMatchingKeys(o,_.addedDocuments,v)));let S=w.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(v)!==null?S=S.withResumeToken(Dt.EMPTY_BYTE_STRING,Ee.min()).withLastLimboFreeSnapshotVersion(Ee.min()):_.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(_.resumeToken,r)),a=a.insert(v,S),function(U,M,H){return U.resumeToken.approximateByteSize()===0||M.snapshotVersion.toMicroseconds()-U.snapshotVersion.toMicroseconds()>=wz?!0:H.addedDocuments.size+H.modifiedDocuments.size+H.removedDocuments.size>0}(w,S,_)&&d.push(t.Hr.updateTargetData(o,S))});let p=Hn(),m=xe();if(e.documentUpdates.forEach(_=>{e.resolvedLimboDocuments.has(_)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(o,_))}),d.push(J1(o,u,e.documentUpdates).next(_=>{p=_.Vs,m=_.fs})),!r.isEqual(Ee.min())){const _=t.Hr.getLastRemoteSnapshotVersion(o).next(v=>t.Hr.setTargetsMetadata(o,o.currentSequenceNumber,r));d.push(_)}return j.waitFor(d).next(()=>u.apply(o)).next(()=>t.localDocuments.getLocalViewOfDocuments(o,p,m)).next(()=>p)}).then(o=>(t.Ts=a,o))}function J1(n,e,t){let r=xe(),a=xe();return t.forEach(o=>r=r.add(o)),e.getEntries(n,r).next(o=>{let u=Hn();return t.forEach((d,p)=>{const m=o.get(d);p.isFoundDocument()!==m.isFoundDocument()&&(a=a.add(d)),p.isNoDocument()&&p.version.isEqual(Ee.min())?(e.removeEntry(d,p.readTime),u=u.insert(d,p)):!m.isValidDocument()||p.version.compareTo(m.version)>0||p.version.compareTo(m.version)===0&&m.hasPendingWrites?(e.addEntry(p),u=u.insert(d,p)):re(FE,"Ignoring outdated watch update for ",d,". Current version:",m.version," Watch version:",p.version)}),{Vs:u,fs:a}})}function Sz(n,e){const t=de(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=na),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function vu(n,e){const t=de(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let a;return t.Hr.getTargetData(r,e).next(o=>o?(a=o,j.resolve(a)):t.Hr.allocateTargetId(r).next(u=>(a=new Gi(e,u,"TargetPurposeListen",r.currentSequenceNumber),t.Hr.addTargetData(r,a).next(()=>a))))}).then(r=>{const a=t.Ts.get(r.targetId);return(a===null||r.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.Ts=t.Ts.insert(r.targetId,r),t.Is.set(e,r.targetId)),r})}async function Eu(n,e,t){const r=de(n),a=r.Ts.get(e),o=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",o,u=>r.persistence.referenceDelegate.removeTarget(u,a))}catch(u){if(!Ea(u))throw u;re(FE,`Failed to update sequence numbers for target ${e}: ${u}`)}r.Ts=r.Ts.remove(e),r.Is.delete(a.target)}function em(n,e,t){const r=de(n);let a=Ee.min(),o=xe();return r.persistence.runTransaction("Execute query","readwrite",u=>function(p,m,_){const v=de(p),w=v.Is.get(_);return w!==void 0?j.resolve(v.Ts.get(w)):v.Hr.getTargetData(m,_)}(r,u,Vn(e)).next(d=>{if(d)return a=d.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(u,d.targetId).next(p=>{o=p})}).next(()=>r.Ps.getDocumentsMatchingQuery(u,e,t?a:Ee.min(),t?o:xe())).next(d=>(nD(r,a1(e),d),{documents:d,gs:o})))}function eD(n,e){const t=de(n),r=de(t.Hr),a=t.Ts.get(e);return a?Promise.resolve(a.target):t.persistence.runTransaction("Get target data","readonly",o=>r.lt(o,e).next(u=>u?u.target:null))}function tD(n,e){const t=de(n),r=t.Es.get(e)||Ee.min();return t.persistence.runTransaction("Get new document changes","readonly",a=>t.ds.getAllFromCollectionGroup(a,e,SC(r,lu),Number.MAX_SAFE_INTEGER)).then(a=>(nD(t,e,a),a))}function nD(n,e,t){let r=n.Es.get(e)||Ee.min();t.forEach((a,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.Es.set(e,r)}async function Rz(n,e,t,r){const a=de(n);let o=xe(),u=Hn();for(const m of t){const _=e.ps(m.metadata.name);m.document&&(o=o.add(_));const v=e.ys(m);v.setReadTime(e.ws(m.metadata.readTime)),u=u.insert(_,v)}const d=a.ds.newChangeBuffer({trackRemovals:!0}),p=await vu(a,function(_){return Vn(Vu(Be.fromString(`__bundle__/docs/${_}`)))}(r));return a.persistence.runTransaction("Apply bundle documents","readwrite",m=>J1(m,d,u).next(_=>(d.apply(m),_)).next(_=>a.Hr.removeMatchingKeysForTargetId(m,p.targetId).next(()=>a.Hr.addMatchingKeys(m,o,p.targetId)).next(()=>a.localDocuments.getLocalViewOfDocuments(m,_.Vs,_.fs)).next(()=>_.Vs)))}async function Cz(n,e,t=xe()){const r=await vu(n,Vn(OE(e.bundledQuery))),a=de(n);return a.persistence.runTransaction("Save named query","readwrite",o=>{const u=Mt(e.readTime);if(r.snapshotVersion.compareTo(u)>=0)return a.Yr.saveNamedQuery(o,e);const d=r.withResumeToken(Dt.EMPTY_BYTE_STRING,u);return a.Ts=a.Ts.insert(d.targetId,d),a.Hr.updateTargetData(o,d).next(()=>a.Hr.removeMatchingKeysForTargetId(o,r.targetId)).next(()=>a.Hr.addMatchingKeys(o,t,r.targetId)).next(()=>a.Yr.saveNamedQuery(o,e))})}/**
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
 */const rD="firestore_clients";function VA(n,e){return`${rD}_${n}_${e}`}const iD="firestore_mutations";function MA(n,e,t){let r=`${iD}_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}const sD="firestore_targets";function S_(n,e){return`${sD}_${n}_${e}`}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr="SharedClientState";class tm{constructor(e,t,r,a){this.user=e,this.batchId=t,this.state=r,this.error=a}static Ss(e,t,r){const a=JSON.parse(r);let o,u=typeof a=="object"&&["pending","acknowledged","rejected"].indexOf(a.state)!==-1&&(a.error===void 0||typeof a.error=="object");return u&&a.error&&(u=typeof a.error.message=="string"&&typeof a.error.code=="string",u&&(o=new te(a.error.code,a.error.message))),u?new tm(e,t,a.state,o):(Vt(Jr,`Failed to parse mutation state for ID '${t}': ${r}`),null)}bs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Ah{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static Ss(e,t){const r=JSON.parse(t);let a,o=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return o&&r.error&&(o=typeof r.error.message=="string"&&typeof r.error.code=="string",o&&(a=new te(r.error.code,r.error.message))),o?new Ah(e,r.state,a):(Vt(Jr,`Failed to parse target state for ID '${e}': ${t}`),null)}bs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class nm{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Ss(e,t){const r=JSON.parse(t);let a=typeof r=="object"&&r.activeTargetIds instanceof Array,o=AE();for(let u=0;a&&u<r.activeTargetIds.length;++u)a=PC(r.activeTargetIds[u]),o=o.add(r.activeTargetIds[u]);return a?new nm(e,o):(Vt(Jr,`Failed to parse client data for instance '${e}': ${t}`),null)}}class jE{constructor(e,t){this.clientId=e,this.onlineState=t}static Ss(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new jE(t.clientId,t.onlineState):(Vt(Jr,`Failed to parse online state: ${e}`),null)}}class yv{constructor(){this.activeTargetIds=AE()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class R_{constructor(e,t,r,a,o){this.window=e,this.Ti=t,this.persistenceKey=r,this.Cs=a,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Fs=this.Ms.bind(this),this.xs=new lt(Se),this.started=!1,this.Os=[];const u=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=o,this.Ns=VA(this.persistenceKey,this.Cs),this.Bs=function(p){return`firestore_sequence_number_${p}`}(this.persistenceKey),this.xs=this.xs.insert(this.Cs,new yv),this.Ls=new RegExp(`^${rD}_${u}_([^_]*)$`),this.ks=new RegExp(`^${iD}_${u}_(\\d+)(?:_(.*))?$`),this.qs=new RegExp(`^${sD}_${u}_(\\d+)$`),this.Qs=function(p){return`firestore_online_state_${p}`}(this.persistenceKey),this.$s=function(p){return`firestore_bundle_loaded_v2_${p}`}(this.persistenceKey),this.window.addEventListener("storage",this.Fs)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.zi();for(const r of e){if(r===this.Cs)continue;const a=this.getItem(VA(this.persistenceKey,r));if(a){const o=nm.Ss(r,a);o&&(this.xs=this.xs.insert(o.clientId,o))}}this.Us();const t=this.storage.getItem(this.Qs);if(t){const r=this.Ks(t);r&&this.Ws(r)}for(const r of this.Os)this.Ms(r);this.Os=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Bs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Gs(this.xs)}isActiveQueryTarget(e){let t=!1;return this.xs.forEach((r,a)=>{a.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.zs(e,"pending")}updateMutationState(e,t,r){this.zs(e,t,r),this.js(e)}addLocalQueryTarget(e,t=!0){let r="not-current";if(this.isActiveQueryTarget(e)){const a=this.storage.getItem(S_(this.persistenceKey,e));if(a){const o=Ah.Ss(e,a);o&&(r=o.state)}}return t&&this.Hs.Ds(e),this.Us(),r}removeLocalQueryTarget(e){this.Hs.vs(e),this.Us()}isLocalQueryTarget(e){return this.Hs.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(S_(this.persistenceKey,e))}updateQueryState(e,t,r){this.Js(e,t,r)}handleUserChange(e,t,r){t.forEach(a=>{this.js(a)}),this.currentUser=e,r.forEach(a=>{this.addPendingMutation(a)})}setOnlineState(e){this.Ys(e)}notifyBundleLoaded(e){this.Zs(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Fs),this.removeItem(this.Ns),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return re(Jr,"READ",e,t),t}setItem(e,t){re(Jr,"SET",e,t),this.storage.setItem(e,t)}removeItem(e){re(Jr,"REMOVE",e),this.storage.removeItem(e)}Ms(e){const t=e;if(t.storageArea===this.storage){if(re(Jr,"EVENT",t.key,t.newValue),t.key===this.Ns)return void Vt("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Ti.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Ls.test(t.key)){if(t.newValue==null){const r=this.Xs(t.key);return this.eo(r,null)}{const r=this.no(t.key,t.newValue);if(r)return this.eo(r.clientId,r)}}else if(this.ks.test(t.key)){if(t.newValue!==null){const r=this.ro(t.key,t.newValue);if(r)return this.io(r)}}else if(this.qs.test(t.key)){if(t.newValue!==null){const r=this.so(t.key,t.newValue);if(r)return this.oo(r)}}else if(t.key===this.Qs){if(t.newValue!==null){const r=this.Ks(t.newValue);if(r)return this.Ws(r)}}else if(t.key===this.Bs){const r=function(o){let u=jn.ae;if(o!=null)try{const d=JSON.parse(o);_e(typeof d=="number"),u=d}catch(d){Vt(Jr,"Failed to read sequence number from WebStorage",d)}return u}(t.newValue);r!==jn.ae&&this.sequenceNumberHandler(r)}else if(t.key===this.$s){const r=this._o(t.newValue);await Promise.all(r.map(a=>this.syncEngine.ao(a)))}}}else this.Os.push(t)})}}get Hs(){return this.xs.get(this.Cs)}Us(){this.setItem(this.Ns,this.Hs.bs())}zs(e,t,r){const a=new tm(this.currentUser,e,t,r),o=MA(this.persistenceKey,this.currentUser,e);this.setItem(o,a.bs())}js(e){const t=MA(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Ys(e){const t={clientId:this.Cs,onlineState:e};this.storage.setItem(this.Qs,JSON.stringify(t))}Js(e,t,r){const a=S_(this.persistenceKey,e),o=new Ah(e,t,r);this.setItem(a,o.bs())}Zs(e){const t=JSON.stringify(Array.from(e));this.setItem(this.$s,t)}Xs(e){const t=this.Ls.exec(e);return t?t[1]:null}no(e,t){const r=this.Xs(e);return nm.Ss(r,t)}ro(e,t){const r=this.ks.exec(e),a=Number(r[1]),o=r[2]!==void 0?r[2]:null;return tm.Ss(new cn(o),a,t)}so(e,t){const r=this.qs.exec(e),a=Number(r[1]);return Ah.Ss(a,t)}Ks(e){return jE.Ss(e)}_o(e){return JSON.parse(e)}async io(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.uo(e.batchId,e.state,e.error);re(Jr,`Ignoring mutation for non-active user ${e.user.uid}`)}oo(e){return this.syncEngine.co(e.targetId,e.state,e.error)}eo(e,t){const r=t?this.xs.insert(e,t):this.xs.remove(e),a=this.Gs(this.xs),o=this.Gs(r),u=[],d=[];return o.forEach(p=>{a.has(p)||u.push(p)}),a.forEach(p=>{o.has(p)||d.push(p)}),this.syncEngine.lo(u,d).then(()=>{this.xs=r})}Ws(e){this.xs.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Gs(e){let t=AE();return e.forEach((r,a)=>{t=t.unionWith(a.activeTargetIds)}),t}}class aD{constructor(){this.ho=new yv,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,r){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new yv,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Dz{To(e){}shutdown(){}}/**
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
 */const LA="ConnectivityMonitor";class UA{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){re(LA,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){re(LA,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rp=null;function _v(){return rp===null?rp=function(){return 268435456+Math.round(2147483648*Math.random())}():rp++,"0x"+rp.toString(16)}/**
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
 */const C_="RestConnection",xz={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Pz{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${r}/databases/${a}`,this.wo=this.databaseId.database===rv?`project_id=${r}`:`project_id=${r}&database_id=${a}`}So(e,t,r,a,o){const u=_v(),d=this.bo(e,t.toUriEncodedString());re(C_,`Sending RPC '${e}' ${u}:`,d,r);const p={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(p,a,o),this.vo(e,d,p,r).then(m=>(re(C_,`Received RPC '${e}' ${u}: `,m),m),m=>{throw di(C_,`RPC '${e}' ${u} failed with error: `,m,"url: ",d,"request:",r),m})}Co(e,t,r,a,o,u){return this.So(e,t,r,a,o)}Do(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ku}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((a,o)=>e[o]=a),r&&r.headers.forEach((a,o)=>e[o]=a)}bo(e,t){const r=xz[e];return`${this.po}/v1/${t}:${r}`}terminate(){}}/**
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
 */class Nz{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Uo(e){this.ko(e)}Ko(e){this.qo(e)}}/**
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
 */const bn="WebChannelConnection";class Oz extends Pz{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,r,a){const o=_v();return new Promise((u,d)=>{const p=new _C;p.setWithCredentials(!0),p.listenOnce(vC.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case gp.NO_ERROR:const _=p.getResponseJson();re(bn,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(_)),u(_);break;case gp.TIMEOUT:re(bn,`RPC '${e}' ${o} timed out`),d(new te(Q.DEADLINE_EXCEEDED,"Request time out"));break;case gp.HTTP_ERROR:const v=p.getStatus();if(re(bn,`RPC '${e}' ${o} failed with status:`,v,"response text:",p.getResponseText()),v>0){let w=p.getResponseJson();Array.isArray(w)&&(w=w[0]);const S=w==null?void 0:w.error;if(S&&S.status&&S.message){const x=function(M){const H=M.toLowerCase().replace(/_/g,"-");return Object.values(Q).indexOf(H)>=0?H:Q.UNKNOWN}(S.status);d(new te(x,S.message))}else d(new te(Q.UNKNOWN,"Server responded with status "+p.getStatus()))}else d(new te(Q.UNAVAILABLE,"Connection failed."));break;default:me()}}finally{re(bn,`RPC '${e}' ${o} completed.`)}});const m=JSON.stringify(a);re(bn,`RPC '${e}' ${o} sending request:`,a),p.send(t,"POST",m,r,15)})}Wo(e,t,r){const a=_v(),o=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],u=wC(),d=TC(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},m=this.longPollingOptions.timeoutSeconds;m!==void 0&&(p.longPollingTimeout=Math.round(1e3*m)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Do(p.initMessageHeaders,t,r),p.encodeInitMessageHeaders=!0;const _=o.join("");re(bn,`Creating RPC '${e}' stream ${a}: ${_}`,p);const v=u.createWebChannel(_,p);let w=!1,S=!1;const x=new Nz({Fo:M=>{S?re(bn,`Not sending because RPC '${e}' stream ${a} is closed:`,M):(w||(re(bn,`Opening RPC '${e}' stream ${a} transport.`),v.open(),w=!0),re(bn,`RPC '${e}' stream ${a} sending:`,M),v.send(M))},Mo:()=>v.close()}),U=(M,H,$)=>{M.listen(H,K=>{try{$(K)}catch(oe){setTimeout(()=>{throw oe},0)}})};return U(v,ch.EventType.OPEN,()=>{S||(re(bn,`RPC '${e}' stream ${a} transport opened.`),x.Qo())}),U(v,ch.EventType.CLOSE,()=>{S||(S=!0,re(bn,`RPC '${e}' stream ${a} transport closed`),x.Uo())}),U(v,ch.EventType.ERROR,M=>{S||(S=!0,di(bn,`RPC '${e}' stream ${a} transport errored:`,M),x.Uo(new te(Q.UNAVAILABLE,"The operation could not be completed")))}),U(v,ch.EventType.MESSAGE,M=>{var H;if(!S){const $=M.data[0];_e(!!$);const K=$,oe=(K==null?void 0:K.error)||((H=K[0])===null||H===void 0?void 0:H.error);if(oe){re(bn,`RPC '${e}' stream ${a} received error:`,oe);const ae=oe.status;let le=function(A){const P=jt[A];if(P!==void 0)return E1(P)}(ae),D=oe.message;le===void 0&&(le=Q.INTERNAL,D="Unknown error status: "+ae+" with message "+oe.message),S=!0,x.Uo(new te(le,D)),v.close()}else re(bn,`RPC '${e}' stream ${a} received:`,$),x.Ko($)}}),U(d,EC.STAT_EVENT,M=>{M.stat===Y_.PROXY?re(bn,`RPC '${e}' stream ${a} detected buffering proxy`):M.stat===Y_.NOPROXY&&re(bn,`RPC '${e}' stream ${a} detected no buffering proxy`)}),setTimeout(()=>{x.$o()},0),x}}/**
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
 *//**
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
 */function oD(){return typeof window<"u"?window:null}function Ap(){return typeof document<"u"?document:null}/**
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
 */function vd(n){return new UB(n,!0)}/**
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
 */class qE{constructor(e,t,r=1e3,a=1.5,o=6e4){this.Ti=e,this.timerId=t,this.Go=r,this.zo=a,this.jo=o,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const t=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),a=Math.max(0,t-r);a>0&&re("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,a,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
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
 */const BA="PersistentStream";class lD{constructor(e,t,r,a,o,u,d,p){this.Ti=e,this.n_=r,this.r_=a,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new qE(e,t)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():t&&t.code===Q.RESOURCE_EXHAUSTED?(Vt(t.toString()),Vt("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===Q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,a])=>{this.i_===t&&this.V_(r,a)},r=>{e(()=>{const a=new te(Q.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(a)})})}V_(e,t){const r=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(a=>{r(()=>this.m_(a))}),this.stream.onMessage(a=>{r(()=>++this.__==1?this.g_(a):this.onNext(a))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return re(BA,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():(re(BA,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class kz extends lD{constructor(e,t,r,a,o,u){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,a,u),this.serializer=o}f_(e,t){return this.connection.Wo("Listen",e,t)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const t=FB(this.serializer,e),r=function(o){if(!("targetChange"in o))return Ee.min();const u=o.targetChange;return u.targetIds&&u.targetIds.length?Ee.min():u.readTime?Mt(u.readTime):Ee.min()}(e);return this.listener.p_(t,r)}y_(e){const t={};t.database=dv(this.serializer),t.addTarget=function(o,u){let d;const p=u.target;if(d=Kp(p)?{documents:D1(o,p)}:{query:x1(o,p).ht},d.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){d.resumeToken=b1(o,u.resumeToken);const m=cv(o,u.expectedCount);m!==null&&(d.expectedCount=m)}else if(u.snapshotVersion.compareTo(Ee.min())>0){d.readTime=_u(o,u.snapshotVersion.toTimestamp());const m=cv(o,u.expectedCount);m!==null&&(d.expectedCount=m)}return d}(this.serializer,e);const r=qB(this.serializer,e);r&&(t.labels=r),this.I_(t)}w_(e){const t={};t.database=dv(this.serializer),t.removeTarget=e,this.I_(t)}}class Vz extends lD{constructor(e,t,r,a,o,u){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,a,u),this.serializer=o}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return _e(!!e.streamToken),this.lastStreamToken=e.streamToken,_e(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){_e(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const t=jB(e.writeResults,e.commitTime),r=Mt(e.commitTime);return this.listener.v_(r,t)}C_(){const e={};e.database=dv(this.serializer),this.I_(e)}b_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Kh(this.serializer,r))};this.I_(t)}}/**
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
 */class Mz{}class Lz extends Mz{constructor(e,t,r,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=a,this.F_=!1}M_(){if(this.F_)throw new te(Q.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,r,a){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.So(e,hv(t,r),a,o,u)).catch(o=>{throw o.name==="FirebaseError"?(o.code===Q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new te(Q.UNKNOWN,o.toString())})}Co(e,t,r,a,o){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,d])=>this.connection.Co(e,hv(t,r),a,u,d,o)).catch(u=>{throw u.name==="FirebaseError"?(u.code===Q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new te(Q.UNKNOWN,u.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class Uz{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Vt(t),this.N_=!1):re("OnlineStateTracker",t)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
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
 */const No="RemoteStore";class Bz{constructor(e,t,r,a,o){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=o,this.z_.To(u=>{r.enqueueAndForget(async()=>{wa(this)&&(re(No,"Restarting streams for network reachability change."),await async function(p){const m=de(p);m.W_.add(4),await Uu(m),m.j_.set("Unknown"),m.W_.delete(4),await Ed(m)}(this))})}),this.j_=new Uz(r,a)}}async function Ed(n){if(wa(n))for(const e of n.G_)await e(!0)}async function Uu(n){for(const e of n.G_)await e(!1)}function zm(n,e){const t=de(n);t.K_.has(e.targetId)||(t.K_.set(e.targetId,e),$E(t)?GE(t):zu(t).c_()&&HE(t,e))}function Tu(n,e){const t=de(n),r=zu(t);t.K_.delete(e),r.c_()&&uD(t,e),t.K_.size===0&&(r.c_()?r.P_():wa(t)&&t.j_.set("Unknown"))}function HE(n,e){if(n.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ee.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}zu(n).y_(e)}function uD(n,e){n.H_.Ne(e),zu(n).w_(e)}function GE(n){n.H_=new kB({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>n.K_.get(e)||null,it:()=>n.datastore.serializer.databaseId}),zu(n).start(),n.j_.B_()}function $E(n){return wa(n)&&!zu(n).u_()&&n.K_.size>0}function wa(n){return de(n).W_.size===0}function cD(n){n.H_=void 0}async function zz(n){n.j_.set("Online")}async function Fz(n){n.K_.forEach((e,t)=>{HE(n,e)})}async function jz(n,e){cD(n),$E(n)?(n.j_.q_(e),GE(n)):n.j_.set("Unknown")}async function qz(n,e,t){if(n.j_.set("Online"),e instanceof w1&&e.state===2&&e.cause)try{await async function(a,o){const u=o.cause;for(const d of o.targetIds)a.K_.has(d)&&(await a.remoteSyncer.rejectListen(d,u),a.K_.delete(d),a.H_.removeTarget(d))}(n,e)}catch(r){re(No,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await rm(n,r)}else if(e instanceof Ip?n.H_.We(e):e instanceof T1?n.H_.Ze(e):n.H_.je(e),!t.isEqual(Ee.min()))try{const r=await Z1(n.localStore);t.compareTo(r)>=0&&await function(o,u){const d=o.H_.ot(u);return d.targetChanges.forEach((p,m)=>{if(p.resumeToken.approximateByteSize()>0){const _=o.K_.get(m);_&&o.K_.set(m,_.withResumeToken(p.resumeToken,u))}}),d.targetMismatches.forEach((p,m)=>{const _=o.K_.get(p);if(!_)return;o.K_.set(p,_.withResumeToken(Dt.EMPTY_BYTE_STRING,_.snapshotVersion)),uD(o,p);const v=new Gi(_.target,p,m,_.sequenceNumber);HE(o,v)}),o.remoteSyncer.applyRemoteEvent(d)}(n,t)}catch(r){re(No,"Failed to raise snapshot:",r),await rm(n,r)}}async function rm(n,e,t){if(!Ea(e))throw e;n.W_.add(1),await Uu(n),n.j_.set("Offline"),t||(t=()=>Z1(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{re(No,"Retrying IndexedDB access"),await t(),n.W_.delete(1),await Ed(n)})}function hD(n,e){return e().catch(t=>rm(n,t,e))}async function Bu(n){const e=de(n),t=fa(e);let r=e.U_.length>0?e.U_[e.U_.length-1].batchId:na;for(;Hz(e);)try{const a=await Sz(e.localStore,r);if(a===null){e.U_.length===0&&t.P_();break}r=a.batchId,Gz(e,a)}catch(a){await rm(e,a)}dD(e)&&fD(e)}function Hz(n){return wa(n)&&n.U_.length<10}function Gz(n,e){n.U_.push(e);const t=fa(n);t.c_()&&t.S_&&t.b_(e.mutations)}function dD(n){return wa(n)&&!fa(n).u_()&&n.U_.length>0}function fD(n){fa(n).start()}async function $z(n){fa(n).C_()}async function Kz(n){const e=fa(n);for(const t of n.U_)e.b_(t.mutations)}async function Qz(n,e,t){const r=n.U_.shift(),a=DE.from(r,e,t);await hD(n,()=>n.remoteSyncer.applySuccessfulWrite(a)),await Bu(n)}async function Wz(n,e){e&&fa(n).S_&&await async function(r,a){if(function(u){return v1(u)&&u!==Q.ABORTED}(a.code)){const o=r.U_.shift();fa(r).h_(),await hD(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,a)),await Bu(r)}}(n,e),dD(n)&&fD(n)}async function zA(n,e){const t=de(n);t.asyncQueue.verifyOperationInProgress(),re(No,"RemoteStore received new credentials");const r=wa(t);t.W_.add(3),await Uu(t),r&&t.j_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.W_.delete(3),await Ed(t)}async function vv(n,e){const t=de(n);e?(t.W_.delete(2),await Ed(t)):e||(t.W_.add(2),await Uu(t),t.j_.set("Unknown"))}function zu(n){return n.J_||(n.J_=function(t,r,a){const o=de(t);return o.M_(),new kz(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,a)}(n.datastore,n.asyncQueue,{xo:zz.bind(null,n),No:Fz.bind(null,n),Lo:jz.bind(null,n),p_:qz.bind(null,n)}),n.G_.push(async e=>{e?(n.J_.h_(),$E(n)?GE(n):n.j_.set("Unknown")):(await n.J_.stop(),cD(n))})),n.J_}function fa(n){return n.Y_||(n.Y_=function(t,r,a){const o=de(t);return o.M_(),new Vz(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,a)}(n.datastore,n.asyncQueue,{xo:()=>Promise.resolve(),No:$z.bind(null,n),Lo:Wz.bind(null,n),D_:Kz.bind(null,n),v_:Qz.bind(null,n)}),n.G_.push(async e=>{e?(n.Y_.h_(),await Bu(n)):(await n.Y_.stop(),n.U_.length>0&&(re(No,`Stopping write stream with ${n.U_.length} pending writes`),n.U_=[]))})),n.Y_}/**
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
 */class KE{constructor(e,t,r,a,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=a,this.removalCallback=o,this.deferred=new _n,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,a,o){const u=Date.now()+r,d=new KE(e,t,u,a,o);return d.start(r),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new te(Q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Fu(n,e){if(Vt("AsyncQueue",`${e}: ${n}`),Ea(n))return new te(Q.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Xl{static emptySet(e){return new Xl(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||ce.comparator(t.key,r.key):(t,r)=>ce.comparator(t.key,r.key),this.keyedMap=hh(),this.sortedSet=new lt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Xl)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,o=r.getNext().key;if(!a.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Xl;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class FA{constructor(){this.Z_=new lt(ce.comparator)}track(e){const t=e.doc.key,r=this.Z_.get(t);r?e.type!==0&&r.type===3?this.Z_=this.Z_.insert(t,e):e.type===3&&r.type!==1?this.Z_=this.Z_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Z_=this.Z_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Z_=this.Z_.remove(t):e.type===1&&r.type===2?this.Z_=this.Z_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):me():this.Z_=this.Z_.insert(t,e)}X_(){const e=[];return this.Z_.inorderTraversal((t,r)=>{e.push(r)}),e}}class wu{constructor(e,t,r,a,o,u,d,p,m){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=a,this.mutatedKeys=o,this.fromCache=u,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=m}static fromInitialDocuments(e,t,r,a,o){const u=[];return t.forEach(d=>{u.push({type:0,doc:d})}),new wu(e,t,Xl.emptySet(t),u,r,a,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&pd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==r[a].type||!t[a].doc.isEqual(r[a].doc))return!1;return!0}}/**
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
 */class Yz{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class Xz{constructor(){this.queries=jA(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(t,r){const a=de(t),o=a.queries;a.queries=jA(),o.forEach((u,d)=>{for(const p of d.ta)p.onError(r)})})(this,new te(Q.ABORTED,"Firestore shutting down"))}}function jA(){return new rs(n=>s1(n),pd)}async function QE(n,e){const t=de(n);let r=3;const a=e.query;let o=t.queries.get(a);o?!o.na()&&e.ra()&&(r=2):(o=new Yz,r=e.ra()?0:1);try{switch(r){case 0:o.ea=await t.onListen(a,!0);break;case 1:o.ea=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(u){const d=Fu(u,`Initialization of query '${zl(e.query)}' failed`);return void e.onError(d)}t.queries.set(a,o),o.ta.push(e),e.sa(t.onlineState),o.ea&&e.oa(o.ea)&&YE(t)}async function WE(n,e){const t=de(n),r=e.query;let a=3;const o=t.queries.get(r);if(o){const u=o.ta.indexOf(e);u>=0&&(o.ta.splice(u,1),o.ta.length===0?a=e.ra()?0:1:!o.na()&&e.ra()&&(a=2))}switch(a){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Zz(n,e){const t=de(n);let r=!1;for(const a of e){const o=a.query,u=t.queries.get(o);if(u){for(const d of u.ta)d.oa(a)&&(r=!0);u.ea=a}}r&&YE(t)}function Jz(n,e,t){const r=de(n),a=r.queries.get(e);if(a)for(const o of a.ta)o.onError(t);r.queries.delete(e)}function YE(n){n.ia.forEach(e=>{e.next()})}var Ev,qA;(qA=Ev||(Ev={}))._a="default",qA.Cache="cache";class XE{constructor(e,t,r){this.query=e,this.aa=t,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(e){if(!this.options.includeMetadataChanges){const r=[];for(const a of e.docChanges)a.type!==3&&r.push(a);e=new wu(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ua?this.la(e)&&(this.aa.next(e),t=!0):this.ha(e,this.onlineState)&&(this.Pa(e),t=!0),this.ca=e,t}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let t=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),t=!0),t}ha(e,t){if(!e.fromCache||!this.ra())return!0;const r=t!=="Offline";return(!this.options.Ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}la(e){if(e.docChanges.length>0)return!0;const t=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Pa(e){e=wu.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==Ev.Cache}}/**
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
 */class e9{constructor(e,t){this.Ia=e,this.byteLength=t}Ea(){return"metadata"in this.Ia}}/**
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
 */class HA{constructor(e){this.serializer=e}ps(e){return li(this.serializer,e)}ys(e){return e.metadata.exists?C1(this.serializer,e.document,!1):ht.newNoDocument(this.ps(e.metadata.name),this.ws(e.metadata.readTime))}ws(e){return Mt(e)}}class t9{constructor(e,t,r){this.da=e,this.localStore=t,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=pD(e)}Aa(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Ia.namedQuery)this.queries.push(e.Ia.namedQuery);else if(e.Ia.documentMetadata){this.documents.push({metadata:e.Ia.documentMetadata}),e.Ia.documentMetadata.exists||++t;const r=Be.fromString(e.Ia.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.Ia.document&&(this.documents[this.documents.length-1].document=e.Ia.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}Ra(e){const t=new Map,r=new HA(this.serializer);for(const a of e)if(a.metadata.queries){const o=r.ps(a.metadata.name);for(const u of a.metadata.queries){const d=(t.get(u)||xe()).add(o);t.set(u,d)}}return t}async complete(){const e=await Rz(this.localStore,new HA(this.serializer),this.documents,this.da.id),t=this.Ra(this.documents);for(const r of this.queries)await Cz(this.localStore,r,t.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Va:this.collectionGroups,ma:e}}}function pD(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
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
 */class mD{constructor(e){this.key=e}}class gD{constructor(e){this.key=e}}class yD{constructor(e,t){this.query=e,this.fa=t,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=xe(),this.mutatedKeys=xe(),this.ya=o1(e),this.wa=new Xl(this.ya)}get Sa(){return this.fa}ba(e,t){const r=t?t.Da:new FA,a=t?t.wa:this.wa;let o=t?t.mutatedKeys:this.mutatedKeys,u=a,d=!1;const p=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,m=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal((_,v)=>{const w=a.get(_),S=md(this.query,v)?v:null,x=!!w&&this.mutatedKeys.has(w.key),U=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let M=!1;w&&S?w.data.isEqual(S.data)?x!==U&&(r.track({type:3,doc:S}),M=!0):this.va(w,S)||(r.track({type:2,doc:S}),M=!0,(p&&this.ya(S,p)>0||m&&this.ya(S,m)<0)&&(d=!0)):!w&&S?(r.track({type:0,doc:S}),M=!0):w&&!S&&(r.track({type:1,doc:w}),M=!0,(p||m)&&(d=!0)),M&&(S?(u=u.add(S),o=U?o.add(_):o.delete(_)):(u=u.delete(_),o=o.delete(_)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const _=this.query.limitType==="F"?u.last():u.first();u=u.delete(_.key),o=o.delete(_.key),r.track({type:1,doc:_})}return{wa:u,Da:r,ls:d,mutatedKeys:o}}va(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,a){const o=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const u=e.Da.X_();u.sort((_,v)=>function(S,x){const U=M=>{switch(M){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return me()}};return U(S)-U(x)}(_.type,v.type)||this.ya(_.doc,v.doc)),this.Ca(r),a=a!=null&&a;const d=t&&!a?this.Fa():[],p=this.pa.size===0&&this.current&&!a?1:0,m=p!==this.ga;return this.ga=p,u.length!==0||m?{snapshot:new wu(this.query,e.wa,o,u,e.mutatedKeys,p===0,m,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:d}:{Ma:d}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new FA,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(t=>this.fa=this.fa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.fa=this.fa.delete(t)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=xe(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const t=[];return e.forEach(r=>{this.pa.has(r)||t.push(new gD(r))}),this.pa.forEach(r=>{e.has(r)||t.push(new mD(r))}),t}Oa(e){this.fa=e.gs,this.pa=xe();const t=this.ba(e.documents);return this.applyChanges(t,!0)}Na(){return wu.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const ba="SyncEngine";class n9{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class r9{constructor(e){this.key=e,this.Ba=!1}}class i9{constructor(e,t,r,a,o,u){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=a,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.La={},this.ka=new rs(d=>s1(d),pd),this.qa=new Map,this.Qa=new Set,this.$a=new lt(ce.comparator),this.Ua=new Map,this.Ka=new ME,this.Wa={},this.Ga=new Map,this.za=Po.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function s9(n,e,t=!0){const r=Fm(n);let a;const o=r.ka.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),a=o.view.Na()):a=await _D(r,e,t,!0),a}async function a9(n,e){const t=Fm(n);await _D(t,e,!0,!1)}async function _D(n,e,t,r){const a=await vu(n.localStore,Vn(e)),o=a.targetId,u=n.sharedClientState.addLocalQueryTarget(o,t);let d;return r&&(d=await ZE(n,e,o,u==="current",a.resumeToken)),n.isPrimaryClient&&t&&zm(n.remoteStore,a),d}async function ZE(n,e,t,r,a){n.Ha=(v,w,S)=>async function(U,M,H,$){let K=M.view.ba(H);K.ls&&(K=await em(U.localStore,M.query,!1).then(({documents:D})=>M.view.ba(D,K)));const oe=$&&$.targetChanges.get(M.targetId),ae=$&&$.targetMismatches.get(M.targetId)!=null,le=M.view.applyChanges(K,U.isPrimaryClient,oe,ae);return Tv(U,M.targetId,le.Ma),le.snapshot}(n,v,w,S);const o=await em(n.localStore,e,!0),u=new yD(e,o.gs),d=u.ba(o.documents),p=_d.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",a),m=u.applyChanges(d,n.isPrimaryClient,p);Tv(n,t,m.Ma);const _=new n9(e,t,u);return n.ka.set(e,_),n.qa.has(t)?n.qa.get(t).push(e):n.qa.set(t,[e]),m.snapshot}async function o9(n,e,t){const r=de(n),a=r.ka.get(e),o=r.qa.get(a.targetId);if(o.length>1)return r.qa.set(a.targetId,o.filter(u=>!pd(u,e))),void r.ka.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(a.targetId),r.sharedClientState.isActiveQueryTarget(a.targetId)||await Eu(r.localStore,a.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(a.targetId),t&&Tu(r.remoteStore,a.targetId),bu(r,a.targetId)}).catch(va)):(bu(r,a.targetId),await Eu(r.localStore,a.targetId,!0))}async function l9(n,e){const t=de(n),r=t.ka.get(e),a=t.qa.get(r.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Tu(t.remoteStore,r.targetId))}async function u9(n,e,t){const r=nT(n);try{const a=await function(u,d){const p=de(u),m=gt.now(),_=d.reduce((S,x)=>S.add(x.key),xe());let v,w;return p.persistence.runTransaction("Locally write mutations","readwrite",S=>{let x=Hn(),U=xe();return p.ds.getEntries(S,_).next(M=>{x=M,x.forEach((H,$)=>{$.isValidDocument()||(U=U.add(H))})}).next(()=>p.localDocuments.getOverlayedDocuments(S,x)).next(M=>{v=M;const H=[];for(const $ of d){const K=PB($,v.get($.key).overlayedDocument);K!=null&&H.push(new is($.key,K,YC(K.value.mapValue),mt.exists(!0)))}return p.mutationQueue.addMutationBatch(S,m,H,d)}).next(M=>{w=M;const H=M.applyToLocalDocumentSet(v,U);return p.documentOverlayCache.saveOverlays(S,M.batchId,H)})}).then(()=>({batchId:w.batchId,changes:u1(v)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(a.batchId),function(u,d,p){let m=u.Wa[u.currentUser.toKey()];m||(m=new lt(Se)),m=m.insert(d,p),u.Wa[u.currentUser.toKey()]=m}(r,a.batchId,t),await ss(r,a.changes),await Bu(r.remoteStore)}catch(a){const o=Fu(a,"Failed to persist write");t.reject(o)}}async function vD(n,e){const t=de(n);try{const r=await Az(t.localStore,e);e.targetChanges.forEach((a,o)=>{const u=t.Ua.get(o);u&&(_e(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1),a.addedDocuments.size>0?u.Ba=!0:a.modifiedDocuments.size>0?_e(u.Ba):a.removedDocuments.size>0&&(_e(u.Ba),u.Ba=!1))}),await ss(t,r,e)}catch(r){await va(r)}}function GA(n,e,t){const r=de(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const a=[];r.ka.forEach((o,u)=>{const d=u.view.sa(e);d.snapshot&&a.push(d.snapshot)}),function(u,d){const p=de(u);p.onlineState=d;let m=!1;p.queries.forEach((_,v)=>{for(const w of v.ta)w.sa(d)&&(m=!0)}),m&&YE(p)}(r.eventManager,e),a.length&&r.La.p_(a),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function c9(n,e,t){const r=de(n);r.sharedClientState.updateQueryState(e,"rejected",t);const a=r.Ua.get(e),o=a&&a.key;if(o){let u=new lt(ce.comparator);u=u.insert(o,ht.newNoDocument(o,Ee.min()));const d=xe().add(o),p=new yd(Ee.min(),new Map,new lt(Se),u,d);await vD(r,p),r.$a=r.$a.remove(o),r.Ua.delete(e),tT(r)}else await Eu(r.localStore,e,!1).then(()=>bu(r,e,t)).catch(va)}async function h9(n,e){const t=de(n),r=e.batch.batchId;try{const a=await Iz(t.localStore,e);eT(t,r,null),JE(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await ss(t,a)}catch(a){await va(a)}}async function d9(n,e,t){const r=de(n);try{const a=await function(u,d){const p=de(u);return p.persistence.runTransaction("Reject batch","readwrite-primary",m=>{let _;return p.mutationQueue.lookupMutationBatch(m,d).next(v=>(_e(v!==null),_=v.keys(),p.mutationQueue.removeMutationBatch(m,v))).next(()=>p.mutationQueue.performConsistencyCheck(m)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(m,_,d)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(m,_)).next(()=>p.localDocuments.getDocuments(m,_))})}(r.localStore,e);eT(r,e,t),JE(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await ss(r,a)}catch(a){await va(a)}}async function f9(n,e){const t=de(n);wa(t.remoteStore)||re(ba,"The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(u){const d=de(u);return d.persistence.runTransaction("Get highest unacknowledged batch id","readonly",p=>d.mutationQueue.getHighestUnacknowledgedBatchId(p))}(t.localStore);if(r===na)return void e.resolve();const a=t.Ga.get(r)||[];a.push(e),t.Ga.set(r,a)}catch(r){const a=Fu(r,"Initialization of waitForPendingWrites() operation failed");e.reject(a)}}function JE(n,e){(n.Ga.get(e)||[]).forEach(t=>{t.resolve()}),n.Ga.delete(e)}function eT(n,e,t){const r=de(n);let a=r.Wa[r.currentUser.toKey()];if(a){const o=a.get(e);o&&(t?o.reject(t):o.resolve(),a=a.remove(e)),r.Wa[r.currentUser.toKey()]=a}}function bu(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.qa.get(e))n.ka.delete(r),t&&n.La.Ja(r,t);n.qa.delete(e),n.isPrimaryClient&&n.Ka.br(e).forEach(r=>{n.Ka.containsKey(r)||ED(n,r)})}function ED(n,e){n.Qa.delete(e.path.canonicalString());const t=n.$a.get(e);t!==null&&(Tu(n.remoteStore,t),n.$a=n.$a.remove(e),n.Ua.delete(t),tT(n))}function Tv(n,e,t){for(const r of t)r instanceof mD?(n.Ka.addReference(r.key,e),p9(n,r)):r instanceof gD?(re(ba,"Document no longer in limbo: "+r.key),n.Ka.removeReference(r.key,e),n.Ka.containsKey(r.key)||ED(n,r.key)):me()}function p9(n,e){const t=e.key,r=t.path.canonicalString();n.$a.get(t)||n.Qa.has(r)||(re(ba,"New document in limbo: "+t),n.Qa.add(r),tT(n))}function tT(n){for(;n.Qa.size>0&&n.$a.size<n.maxConcurrentLimboResolutions;){const e=n.Qa.values().next().value;n.Qa.delete(e);const t=new ce(Be.fromString(e)),r=n.za.next();n.Ua.set(r,new r9(t)),n.$a=n.$a.insert(t,r),zm(n.remoteStore,new Gi(Vn(Vu(t.path)),r,"TargetPurposeLimboResolution",jn.ae))}}async function ss(n,e,t){const r=de(n),a=[],o=[],u=[];r.ka.isEmpty()||(r.ka.forEach((d,p)=>{u.push(r.Ha(p,e,t).then(m=>{var _;if((m||t)&&r.isPrimaryClient){const v=m?!m.fromCache:(_=t==null?void 0:t.targetChanges.get(p.targetId))===null||_===void 0?void 0:_.current;r.sharedClientState.updateQueryState(p.targetId,v?"current":"not-current")}if(m){a.push(m);const v=zE.Yi(p.targetId,m);o.push(v)}}))}),await Promise.all(u),r.La.p_(a),await async function(p,m){const _=de(p);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",v=>j.forEach(m,w=>j.forEach(w.Hi,S=>_.persistence.referenceDelegate.addReference(v,w.targetId,S)).next(()=>j.forEach(w.Ji,S=>_.persistence.referenceDelegate.removeReference(v,w.targetId,S)))))}catch(v){if(!Ea(v))throw v;re(FE,"Failed to update sequence numbers: "+v)}for(const v of m){const w=v.targetId;if(!v.fromCache){const S=_.Ts.get(w),x=S.snapshotVersion,U=S.withLastLimboFreeSnapshotVersion(x);_.Ts=_.Ts.insert(w,U)}}}(r.localStore,o))}async function m9(n,e){const t=de(n);if(!t.currentUser.isEqual(e)){re(ba,"User change. New user:",e.toKey());const r=await X1(t.localStore,e);t.currentUser=e,function(o,u){o.Ga.forEach(d=>{d.forEach(p=>{p.reject(new te(Q.CANCELLED,u))})}),o.Ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ss(t,r.Rs)}}function g9(n,e){const t=de(n),r=t.Ua.get(e);if(r&&r.Ba)return xe().add(r.key);{let a=xe();const o=t.qa.get(e);if(!o)return a;for(const u of o){const d=t.ka.get(u);a=a.unionWith(d.view.Sa)}return a}}async function y9(n,e){const t=de(n),r=await em(t.localStore,e.query,!0),a=e.view.Oa(r);return t.isPrimaryClient&&Tv(t,e.targetId,a.Ma),a}async function _9(n,e){const t=de(n);return tD(t.localStore,e).then(r=>ss(t,r))}async function v9(n,e,t,r){const a=de(n),o=await function(d,p){const m=de(d),_=de(m.mutationQueue);return m.persistence.runTransaction("Lookup mutation documents","readonly",v=>_.Ln(v,p).next(w=>w?m.localDocuments.getDocuments(v,w):j.resolve(null)))}(a.localStore,e);o!==null?(t==="pending"?await Bu(a.remoteStore):t==="acknowledged"||t==="rejected"?(eT(a,e,r||null),JE(a,e),function(d,p){de(de(d).mutationQueue).qn(p)}(a.localStore,e)):me(),await ss(a,o)):re(ba,"Cannot apply mutation batch with id: "+e)}async function E9(n,e){const t=de(n);if(Fm(t),nT(t),e===!0&&t.ja!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),a=await $A(t,r.toArray());t.ja=!0,await vv(t.remoteStore,!0);for(const o of a)zm(t.remoteStore,o)}else if(e===!1&&t.ja!==!1){const r=[];let a=Promise.resolve();t.qa.forEach((o,u)=>{t.sharedClientState.isLocalQueryTarget(u)?r.push(u):a=a.then(()=>(bu(t,u),Eu(t.localStore,u,!0))),Tu(t.remoteStore,u)}),await a,await $A(t,r),function(u){const d=de(u);d.Ua.forEach((p,m)=>{Tu(d.remoteStore,m)}),d.Ka.Dr(),d.Ua=new Map,d.$a=new lt(ce.comparator)}(t),t.ja=!1,await vv(t.remoteStore,!1)}}async function $A(n,e,t){const r=de(n),a=[],o=[];for(const u of e){let d;const p=r.qa.get(u);if(p&&p.length!==0){d=await vu(r.localStore,Vn(p[0]));for(const m of p){const _=r.ka.get(m),v=await y9(r,_);v.snapshot&&o.push(v.snapshot)}}else{const m=await eD(r.localStore,u);d=await vu(r.localStore,m),await ZE(r,TD(m),u,!1,d.resumeToken)}a.push(d)}return r.La.p_(o),a}function TD(n){return i1(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function T9(n){return function(t){return de(de(t).persistence).zi()}(de(n).localStore)}async function w9(n,e,t,r){const a=de(n);if(a.ja)return void re(ba,"Ignoring unexpected query state notification.");const o=a.qa.get(e);if(o&&o.length>0)switch(t){case"current":case"not-current":{const u=await tD(a.localStore,a1(o[0])),d=yd.createSynthesizedRemoteEventForCurrentChange(e,t==="current",Dt.EMPTY_BYTE_STRING);await ss(a,u,d);break}case"rejected":await Eu(a.localStore,e,!0),bu(a,e,r);break;default:me()}}async function b9(n,e,t){const r=Fm(n);if(r.ja){for(const a of e){if(r.qa.has(a)&&r.sharedClientState.isActiveQueryTarget(a)){re(ba,"Adding an already active target "+a);continue}const o=await eD(r.localStore,a),u=await vu(r.localStore,o);await ZE(r,TD(o),u.targetId,!1,u.resumeToken),zm(r.remoteStore,u)}for(const a of t)r.qa.has(a)&&await Eu(r.localStore,a,!1).then(()=>{Tu(r.remoteStore,a),bu(r,a)}).catch(va)}}function Fm(n){const e=de(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=vD.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=g9.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=c9.bind(null,e),e.La.p_=Zz.bind(null,e.eventManager),e.La.Ja=Jz.bind(null,e.eventManager),e}function nT(n){const e=de(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=h9.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=d9.bind(null,e),e}function I9(n,e,t){const r=de(n);(async function(o,u,d){try{const p=await u.getMetadata();if(await function(S,x){const U=de(S),M=Mt(x.createTime);return U.persistence.runTransaction("hasNewerBundle","readonly",H=>U.Yr.getBundleMetadata(H,x.id)).then(H=>!!H&&H.createTime.compareTo(M)>=0)}(o.localStore,p))return await u.close(),d._completeWith(function(S){return{taskState:"Success",documentsLoaded:S.totalDocuments,bytesLoaded:S.totalBytes,totalDocuments:S.totalDocuments,totalBytes:S.totalBytes}}(p)),Promise.resolve(new Set);d._updateProgress(pD(p));const m=new t9(p,o.localStore,u.serializer);let _=await u.Ya();for(;_;){const w=await m.Aa(_);w&&d._updateProgress(w),_=await u.Ya()}const v=await m.complete();return await ss(o,v.ma,void 0),await function(S,x){const U=de(S);return U.persistence.runTransaction("Save bundle","readwrite",M=>U.Yr.saveBundleMetadata(M,x))}(o.localStore,p),d._completeWith(v.progress),Promise.resolve(v.Va)}catch(p){return di(ba,`Loading bundle failed with ${p}`),d._failWith(p),Promise.resolve(new Set)}})(r,e,t).then(a=>{r.sharedClientState.notifyBundleLoaded(a)})}class Qh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=vd(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){return Y1(this.persistence,new W1,e.initialUser,this.serializer)}Xa(e){return new LE(Bm.ri,this.serializer)}Za(e){return new aD}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Qh.provider={build:()=>new Qh};class A9 extends Qh{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){_e(this.persistence.referenceDelegate instanceof Jp);const r=this.persistence.referenceDelegate.garbageCollector;return new q1(r,e.asyncQueue,t)}Xa(e){const t=this.cacheSizeBytes!==void 0?In.withCacheSize(this.cacheSizeBytes):In.DEFAULT;return new LE(r=>Jp.ri(r,t),this.serializer)}}class wD extends Qh{constructor(e,t,r){super(),this.ru=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.ru.initialize(this,e),await nT(this.ru.syncEngine),await Bu(this.ru.remoteStore),await this.persistence.Ci(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}eu(e){return Y1(this.persistence,new W1,e.initialUser,this.serializer)}tu(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new q1(r,e.asyncQueue,t)}nu(e,t){const r=new k4(t,this.persistence);return new O4(e.asyncQueue,r)}Xa(e){const t=BE(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?In.withCacheSize(this.cacheSizeBytes):In.DEFAULT;return new UE(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,oD(),Ap(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Za(e){return new aD}}class S9 extends wD{constructor(e,t){super(e,t,!1),this.ru=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.ru.syncEngine;this.sharedClientState instanceof R_&&(this.sharedClientState.syncEngine={uo:v9.bind(null,t),co:w9.bind(null,t),lo:b9.bind(null,t),zi:T9.bind(null,t),ao:_9.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Ci(async r=>{await E9(this.ru.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}Za(e){const t=oD();if(!R_.D(t))throw new te(Q.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=BE(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new R_(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class Wh{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>GA(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=m9.bind(null,this.syncEngine),await vv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Xz}()}createDatastore(e){const t=vd(e.databaseInfo.databaseId),r=function(o){return new Oz(o)}(e.databaseInfo);return function(o,u,d,p){return new Lz(o,u,d,p)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,a,o,u,d){return new Bz(r,a,o,u,d)}(this.localStore,this.datastore,e.asyncQueue,t=>GA(this.syncEngine,t,0),function(){return UA.D()?new UA:new Dz}())}createSyncEngine(e,t){return function(a,o,u,d,p,m,_){const v=new i9(a,o,u,d,p,m);return _&&(v.ja=!0),v}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(a){const o=de(a);re(No,"RemoteStore shutting down."),o.W_.add(5),await Uu(o),o.z_.shutdown(),o.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Wh.provider={build:()=>new Wh};function KA(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const r={value:n.slice(t,t+e),done:!1};return t+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 *//**
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
 */class jm{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):Vt("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class R9{constructor(e,t){this.ou=e,this.serializer=t,this.metadata=new _n,this.buffer=new Uint8Array,this._u=function(){return new TextDecoder("utf-8")}(),this.au().then(r=>{r&&r.Ea()?this.metadata.resolve(r.Ia.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.Ia)}`))},r=>this.metadata.reject(r))}close(){return this.ou.cancel()}async getMetadata(){return this.metadata.promise}async Ya(){return await this.getMetadata(),this.au()}async au(){const e=await this.uu();if(e===null)return null;const t=this._u.decode(e),r=Number(t);isNaN(r)&&this.cu(`length string (${t}) is not valid number`);const a=await this.lu(r);return new e9(JSON.parse(a),e.length+r)}hu(){return this.buffer.findIndex(e=>e===123)}async uu(){for(;this.hu()<0&&!await this.Pu(););if(this.buffer.length===0)return null;const e=this.hu();e<0&&this.cu("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async lu(e){for(;this.buffer.length<e;)await this.Pu()&&this.cu("Reached the end of bundle when more is expected.");const t=this._u.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}cu(e){throw this.ou.cancel(),new Error(`Invalid bundle format: ${e}`)}async Pu(){const e=await this.ou.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
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
 */class C9{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new te(Q.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await async function(a,o){const u=de(a),d={documents:o.map(v=>$h(u.serializer,v))},p=await u.Co("BatchGetDocuments",u.serializer.databaseId,Be.emptyPath(),d,o.length),m=new Map;p.forEach(v=>{const w=zB(u.serializer,v);m.set(w.key.toString(),w)});const _=[];return o.forEach(v=>{const w=m.get(v.toString());_e(!!w),_.push(w)}),_}(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Lu(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{const a=ce.fromPath(r);this.mutations.push(new RE(a,this.precondition(a)))}),await async function(r,a){const o=de(r),u={writes:a.map(d=>Kh(o.serializer,d))};await o.So("Commit",o.serializer.databaseId,Be.emptyPath(),u)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw me();t=Ee.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new te(Q.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(Ee.min())?mt.exists(!1):mt.updateTime(t):mt.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(Ee.min()))throw new te(Q.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return mt.updateTime(t)}return mt.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class D9{constructor(e,t,r,a,o){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=a,this.deferred=o,this.Tu=r.maxAttempts,this.a_=new qE(this.asyncQueue,"transaction_retry")}Iu(){this.Tu-=1,this.Eu()}Eu(){this.a_.Xo(async()=>{const e=new C9(this.datastore),t=this.du(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(a=>{this.Au(a)}))}).catch(r=>{this.Au(r)})})}du(e){try{const t=this.updateFunction(e);return!hd(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Au(e){this.Tu>0&&this.Ru(e)?(this.Tu-=1,this.asyncQueue.enqueueAndForget(()=>(this.Eu(),Promise.resolve()))):this.deferred.reject(e)}Ru(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!v1(t)}return!1}}/**
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
 */const pa="FirestoreClient";class x9{constructor(e,t,r,a,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=a,this.user=cn.UNAUTHENTICATED,this.clientId=IC.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async u=>{re(pa,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(r,u=>(re(pa,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new _n;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Fu(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function D_(n,e){n.asyncQueue.verifyOperationInProgress(),re(pa,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async a=>{r.isEqual(a)||(await X1(e.localStore,a),r=a)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function QA(n,e){n.asyncQueue.verifyOperationInProgress();const t=await rT(n);re(pa,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>zA(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,a)=>zA(e.remoteStore,a)),n._onlineComponents=e}async function rT(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){re(pa,"Using user provided OfflineComponentProvider");try{await D_(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(a){return a.name==="FirebaseError"?a.code===Q.FAILED_PRECONDITION||a.code===Q.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11}(t))throw t;di("Error using user provided cache. Falling back to memory cache: "+t),await D_(n,new Qh)}}else re(pa,"Using default OfflineComponentProvider"),await D_(n,new A9(void 0));return n._offlineComponents}async function qm(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(re(pa,"Using user provided OnlineComponentProvider"),await QA(n,n._uninitializedComponentsProvider._online)):(re(pa,"Using default OnlineComponentProvider"),await QA(n,new Wh))),n._onlineComponents}function bD(n){return rT(n).then(e=>e.persistence)}function iT(n){return rT(n).then(e=>e.localStore)}function ID(n){return qm(n).then(e=>e.remoteStore)}function sT(n){return qm(n).then(e=>e.syncEngine)}function P9(n){return qm(n).then(e=>e.datastore)}async function Iu(n){const e=await qm(n),t=e.eventManager;return t.onListen=s9.bind(null,e.syncEngine),t.onUnlisten=o9.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=a9.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=l9.bind(null,e.syncEngine),t}function N9(n){return n.asyncQueue.enqueue(async()=>{const e=await bD(n),t=await ID(n);return e.setNetworkEnabled(!0),function(a){const o=de(a);return o.W_.delete(0),Ed(o)}(t)})}function O9(n){return n.asyncQueue.enqueue(async()=>{const e=await bD(n),t=await ID(n);return e.setNetworkEnabled(!1),async function(a){const o=de(a);o.W_.add(0),await Uu(o),o.j_.set("Offline")}(t)})}function k9(n,e){const t=new _n;return n.asyncQueue.enqueueAndForget(async()=>async function(a,o,u){try{const d=await function(m,_){const v=de(m);return v.persistence.runTransaction("read document","readonly",w=>v.localDocuments.getDocument(w,_))}(a,o);d.isFoundDocument()?u.resolve(d):d.isNoDocument()?u.resolve(null):u.reject(new te(Q.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(d){const p=Fu(d,`Failed to get document '${o} from cache`);u.reject(p)}}(await iT(n),e,t)),t.promise}function AD(n,e,t={}){const r=new _n;return n.asyncQueue.enqueueAndForget(async()=>function(o,u,d,p,m){const _=new jm({next:w=>{_.su(),u.enqueueAndForget(()=>WE(o,v));const S=w.docs.has(d);!S&&w.fromCache?m.reject(new te(Q.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&w.fromCache&&p&&p.source==="server"?m.reject(new te(Q.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):m.resolve(w)},error:w=>m.reject(w)}),v=new XE(Vu(d.path),_,{includeMetadataChanges:!0,Ta:!0});return QE(o,v)}(await Iu(n),n.asyncQueue,e,t,r)),r.promise}function V9(n,e){const t=new _n;return n.asyncQueue.enqueueAndForget(async()=>async function(a,o,u){try{const d=await em(a,o,!0),p=new yD(o,d.gs),m=p.ba(d.documents),_=p.applyChanges(m,!1);u.resolve(_.snapshot)}catch(d){const p=Fu(d,`Failed to execute query '${o} against cache`);u.reject(p)}}(await iT(n),e,t)),t.promise}function SD(n,e,t={}){const r=new _n;return n.asyncQueue.enqueueAndForget(async()=>function(o,u,d,p,m){const _=new jm({next:w=>{_.su(),u.enqueueAndForget(()=>WE(o,v)),w.fromCache&&p.source==="server"?m.reject(new te(Q.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):m.resolve(w)},error:w=>m.reject(w)}),v=new XE(d,_,{includeMetadataChanges:!0,Ta:!0});return QE(o,v)}(await Iu(n),n.asyncQueue,e,t,r)),r.promise}function M9(n,e){const t=new jm(e);return n.asyncQueue.enqueueAndForget(async()=>function(a,o){de(a).ia.add(o),o.next()}(await Iu(n),t)),()=>{t.su(),n.asyncQueue.enqueueAndForget(async()=>function(a,o){de(a).ia.delete(o)}(await Iu(n),t))}}function L9(n,e,t,r){const a=function(u,d){let p;return p=typeof u=="string"?pE().encode(u):u,function(_,v){return new R9(_,v)}(function(_,v){if(_ instanceof Uint8Array)return KA(_,v);if(_ instanceof ArrayBuffer)return KA(new Uint8Array(_),v);if(_ instanceof ReadableStream)return _.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(p),d)}(t,vd(e));n.asyncQueue.enqueueAndForget(async()=>{I9(await sT(n),a,r)})}function U9(n,e){return n.asyncQueue.enqueue(async()=>function(r,a){const o=de(r);return o.persistence.runTransaction("Get named query","readonly",u=>o.Yr.getNamedQuery(u,a))}(await iT(n),e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RD(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const WA=new Map;/**
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
 */function aT(n,e,t){if(!t)throw new te(Q.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function CD(n,e,t,r){if(e===!0&&r===!0)throw new te(Q.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function YA(n){if(!ce.isDocumentKey(n))throw new te(Q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function XA(n){if(ce.isDocumentKey(n))throw new te(Q.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Hm(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":me()}function Ye(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new te(Q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Hm(n);throw new te(Q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function DD(n,e){if(e<=0)throw new te(Q.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */const xD="firestore.googleapis.com",ZA=!0;class JA{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new te(Q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=xD,this.ssl=ZA}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:ZA;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=B1;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<sz)throw new te(Q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}CD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=RD((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new te(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new te(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new te(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,a){return r.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Td{constructor(e,t,r,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new JA({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new te(Q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new te(Q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new JA(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new w4;switch(r.type){case"firstParty":return new S4(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new te(Q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=WA.get(t);r&&(re("ComponentProvider","Removing Datastore"),WA.delete(t),r.terminate())}(this),Promise.resolve()}}function B9(n,e,t,r={}){var a;const o=(n=Ye(n,Td))._getSettings(),u=Object.assign(Object.assign({},o),{emulatorOptions:n._getEmulatorOptions()}),d=`${e}:${t}`;o.host!==xD&&o.host!==d&&di("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p=Object.assign(Object.assign({},o),{host:d,ssl:!1,emulatorOptions:r});if(!ia(p,u)&&(n._setSettings(p),r.mockUserToken)){let m,_;if(typeof r.mockUserToken=="string")m=r.mockUserToken,_=cn.MOCK_USER;else{m=Fk(r.mockUserToken,(a=n._app)===null||a===void 0?void 0:a.options.projectId);const v=r.mockUserToken.sub||r.mockUserToken.user_id;if(!v)throw new te(Q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");_=new cn(v)}n._authCredentials=new b4(new bC(m,_))}}/**
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
 */let Mn=class PD{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new PD(this.firestore,e,this._query)}},Tt=class ND{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ra(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ND(this.firestore,e,this._key)}},ra=class OD extends Mn{constructor(e,t,r){super(e,t,Vu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Tt(this.firestore,null,new ce(e))}withConverter(e){return new OD(this.firestore,e,this._path)}};function kD(n,e,...t){if(n=Ie(n),aT("collection","path",e),n instanceof Td){const r=Be.fromString(e,...t);return XA(r),new ra(n,null,r)}{if(!(n instanceof Tt||n instanceof ra))throw new te(Q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Be.fromString(e,...t));return XA(r),new ra(n.firestore,null,r)}}function z9(n,e){if(n=Ye(n,Td),aT("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new te(Q.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Mn(n,null,function(r){return new ns(Be.emptyPath(),r)}(e))}function im(n,e,...t){if(n=Ie(n),arguments.length===1&&(e=IC.newId()),aT("doc","path",e),n instanceof Td){const r=Be.fromString(e,...t);return YA(r),new Tt(n,null,new ce(r))}{if(!(n instanceof Tt||n instanceof ra))throw new te(Q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Be.fromString(e,...t));return YA(r),new Tt(n.firestore,n instanceof ra?n.converter:null,new ce(r))}}function VD(n,e){return n=Ie(n),e=Ie(e),(n instanceof Tt||n instanceof ra)&&(e instanceof Tt||e instanceof ra)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function MD(n,e){return n=Ie(n),e=Ie(e),n instanceof Mn&&e instanceof Mn&&n.firestore===e.firestore&&pd(n._query,e._query)&&n.converter===e.converter}/**
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
 */const eS="AsyncQueue";class tS{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new qE(this,"async_queue_retry"),this.Su=()=>{const r=Ap();r&&re(eS,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.bu=e;const t=Ap();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const t=Ap();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const t=new _n;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!Ea(e))throw e;re(eS,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const t=this.bu.then(()=>(this.pu=!0,e().catch(r=>{this.gu=r,this.pu=!1;const a=function(u){let d=u.message||"";return u.stack&&(d=u.stack.includes(u.message)?u.stack:u.message+`
`+u.stack),d}(r);throw Vt("INTERNAL UNHANDLED ERROR: ",a),r}).then(r=>(this.pu=!1,r))));return this.bu=t,t}enqueueAfterDelay(e,t,r){this.Du(),this.wu.indexOf(e)>-1&&(t=0);const a=KE.createAndSchedule(this,e,t,r,o=>this.Fu(o));return this.fu.push(a),a}Du(){this.gu&&me()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.fu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const t=this.fu.indexOf(e);this.fu.splice(t,1)}}function wv(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const a=t;for(const o of r)if(o in a&&typeof a[o]=="function")return!0;return!1}(n,["next","error","complete"])}class F9{constructor(){this._progressObserver={},this._taskCompletionResolver=new _n,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,r){this._progressObserver={next:e,error:t,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const j9=-1;let Lt=class extends Td{constructor(e,t,r,a){super(e,t,r,a),this.type="firestore",this._queue=new tS,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new tS(e),this._firestoreClient=void 0,await e}}};function Sn(n){if(n._terminated)throw new te(Q.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||LD(n),n._firestoreClient}function LD(n){var e,t,r;const a=n._freezeSettings(),o=function(d,p,m,_){return new uB(d,p,m,_.host,_.ssl,_.experimentalForceLongPolling,_.experimentalAutoDetectLongPolling,RD(_.experimentalLongPollingOptions),_.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,a);n._componentsProvider||!((t=a.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=a.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:a.localCache._offlineComponentProvider,_online:a.localCache._onlineComponentProvider}),n._firestoreClient=new x9(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(d){const p=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(p),_online:p}}(n._componentsProvider))}function q9(n,e){di("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings();return UD(n,Wh.provider,{build:r=>new wD(r,t.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}async function H9(n){di("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=n._freezeSettings();UD(n,Wh.provider,{build:t=>new S9(t,e.cacheSizeBytes)})}function UD(n,e,t){if((n=Ye(n,Lt))._firestoreClient||n._terminated)throw new te(Q.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(n._componentsProvider||n._getSettings().localCache)throw new te(Q.FAILED_PRECONDITION,"SDK cache is already specified.");n._componentsProvider={_online:e,_offline:t},LD(n)}function G9(n){if(n._initialized&&!n._terminated)throw new te(Q.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new _n;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!oi.D())return Promise.resolve();const a=r+Q1;await oi.delete(a)}(BE(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function $9(n){return function(t){const r=new _n;return t.asyncQueue.enqueueAndForget(async()=>f9(await sT(t),r)),r.promise}(Sn(n=Ye(n,Lt)))}function K9(n){return N9(Sn(n=Ye(n,Lt)))}function Q9(n){return O9(Sn(n=Ye(n,Lt)))}function W9(n,e){const t=Sn(n=Ye(n,Lt)),r=new F9;return L9(t,n._databaseId,e,r),r}function Y9(n,e){return U9(Sn(n=Ye(n,Lt)),e).then(t=>t?new Mn(n,null,t.query):null)}/**
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
 */class pi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new pi(Dt.fromBase64String(e))}catch(t){throw new te(Q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new pi(Dt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */let ma=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new te(Q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new pt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
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
 */let Lo=class{constructor(e){this._methodName=e}};/**
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
 */class Gm{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new te(Q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new te(Q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Se(this._lat,e._lat)||Se(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oT{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,a){if(r.length!==a.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==a[o])return!1;return!0}(this._values,e._values)}}/**
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
 */const X9=/^__.*__$/;class Z9{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new is(e,this.data,this.fieldMask,t,this.fieldTransforms):new Mu(e,this.data,t,this.fieldTransforms)}}class BD{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new is(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function zD(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw me()}}class $m{constructor(e,t,r,a,o,u){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=a,o===void 0&&this.Bu(),this.fieldTransforms=o||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new $m(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.ku({path:r,Qu:!1});return a.$u(e),a}Uu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.ku({path:r,Qu:!1});return a.Bu(),a}Ku(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return sm(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(zD(this.Lu)&&X9.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class J9{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||vd(e)}ju(e,t,r,a=!1){return new $m({Lu:e,methodName:t,zu:r,path:pt.emptyPath(),Qu:!1,Gu:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Uo(n){const e=n._freezeSettings(),t=vd(n._databaseId);return new J9(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Km(n,e,t,r,a,o={}){const u=n.ju(o.merge||o.mergeFields?2:0,e,t,a);pT("Data must be an object, but it was:",u,r);const d=qD(r,u);let p,m;if(o.merge)p=new qn(u.fieldMask),m=u.fieldTransforms;else if(o.mergeFields){const _=[];for(const v of o.mergeFields){const w=bv(e,v,t);if(!u.contains(w))throw new te(Q.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);GD(_,w)||_.push(w)}p=new qn(_),m=u.fieldTransforms.filter(v=>p.covers(v.field))}else p=null,m=u.fieldTransforms;return new Z9(new yn(d),p,m)}class wd extends Lo{_toFieldTransform(e){if(e.Lu!==2)throw e.Lu===1?e.Wu(`${this._methodName}() can only appear at the top level of your update data`):e.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof wd}}function FD(n,e,t){return new $m({Lu:3,zu:e.settings.zu,methodName:n._methodName,Qu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class lT extends Lo{_toFieldTransform(e){return new gd(e.path,new gu)}isEqual(e){return e instanceof lT}}class uT extends Lo{constructor(e,t){super(e),this.Hu=t}_toFieldTransform(e){const t=FD(this,e,!0),r=this.Hu.map(o=>Bo(o,t)),a=new Ro(r);return new gd(e.path,a)}isEqual(e){return e instanceof uT&&ia(this.Hu,e.Hu)}}class cT extends Lo{constructor(e,t){super(e),this.Hu=t}_toFieldTransform(e){const t=FD(this,e,!0),r=this.Hu.map(o=>Bo(o,t)),a=new Co(r);return new gd(e.path,a)}isEqual(e){return e instanceof cT&&ia(this.Hu,e.Hu)}}class hT extends Lo{constructor(e,t){super(e),this.Ju=t}_toFieldTransform(e){const t=new yu(e.serializer,d1(e.serializer,this.Ju));return new gd(e.path,t)}isEqual(e){return e instanceof hT&&this.Ju===e.Ju}}function dT(n,e,t,r){const a=n.ju(1,e,t);pT("Data must be an object, but it was:",a,r);const o=[],u=yn.empty();Ta(r,(p,m)=>{const _=mT(e,p,t);m=Ie(m);const v=a.Uu(_);if(m instanceof wd)o.push(_);else{const w=Bo(m,v);w!=null&&(o.push(_),u.set(_,w))}});const d=new qn(o);return new BD(u,d,a.fieldTransforms)}function fT(n,e,t,r,a,o){const u=n.ju(1,e,t),d=[bv(e,r,t)],p=[a];if(o.length%2!=0)throw new te(Q.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<o.length;w+=2)d.push(bv(e,o[w])),p.push(o[w+1]);const m=[],_=yn.empty();for(let w=d.length-1;w>=0;--w)if(!GD(m,d[w])){const S=d[w];let x=p[w];x=Ie(x);const U=u.Uu(S);if(x instanceof wd)m.push(S);else{const M=Bo(x,U);M!=null&&(m.push(S),_.set(S,M))}}const v=new qn(m);return new BD(_,v,u.fieldTransforms)}function jD(n,e,t,r=!1){return Bo(t,n.ju(r?4:3,e))}function Bo(n,e){if(HD(n=Ie(n)))return pT("Unsupported field value:",e,n),qD(n,e);if(n instanceof Lo)return function(r,a){if(!zD(a.Lu))throw a.Wu(`${r._methodName}() can only be used with update() and set()`);if(!a.path)throw a.Wu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(a);o&&a.fieldTransforms.push(o)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(r,a){const o=[];let u=0;for(const d of r){let p=Bo(d,a.Ku(u));p==null&&(p={nullValue:"NULL_VALUE"}),o.push(p),u++}return{arrayValue:{values:o}}}(n,e)}return function(r,a){if((r=Ie(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return d1(a.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=gt.fromDate(r);return{timestampValue:_u(a.serializer,o)}}if(r instanceof gt){const o=new gt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:_u(a.serializer,o)}}if(r instanceof Gm)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof pi)return{bytesValue:b1(a.serializer,r._byteString)};if(r instanceof Tt){const o=a.databaseId,u=r.firestore._databaseId;if(!u.isEqual(o))throw a.Wu(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:NE(r.firestore._databaseId||a.databaseId,r._key.path)}}if(r instanceof oT)return function(u,d){return{mapValue:{fields:{[TE]:{stringValue:wE},[fu]:{arrayValue:{values:u.toArray().map(m=>{if(typeof m!="number")throw d.Wu("VectorValues must only contain numeric values.");return SE(d.serializer,m)})}}}}}}(r,a);throw a.Wu(`Unsupported field value: ${Hm(r)}`)}(n,e)}function qD(n,e){const t={};return FC(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ta(n,(r,a)=>{const o=Bo(a,e.qu(r));o!=null&&(t[r]=o)}),{mapValue:{fields:t}}}function HD(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof gt||n instanceof Gm||n instanceof pi||n instanceof Tt||n instanceof Lo||n instanceof oT)}function pT(n,e,t){if(!HD(t)||!function(a){return typeof a=="object"&&a!==null&&(Object.getPrototypeOf(a)===Object.prototype||Object.getPrototypeOf(a)===null)}(t)){const r=Hm(t);throw r==="an object"?e.Wu(n+" a custom object"):e.Wu(n+" "+r)}}function bv(n,e,t){if((e=Ie(e))instanceof ma)return e._internalPath;if(typeof e=="string")return mT(n,e);throw sm("Field path arguments must be of type string or ",n,!1,void 0,t)}const e6=new RegExp("[~\\*/\\[\\]]");function mT(n,e,t){if(e.search(e6)>=0)throw sm(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ma(...e.split("."))._internalPath}catch{throw sm(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function sm(n,e,t,r,a){const o=r&&!r.isEmpty(),u=a!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let p="";return(o||u)&&(p+=" (found",o&&(p+=` in field ${r}`),u&&(p+=` in document ${a}`),p+=")"),new te(Q.INVALID_ARGUMENT,d+n+p)}function GD(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Yh{constructor(e,t,r,a,o){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=a,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new t6(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Qm("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class t6 extends Yh{data(){return super.data()}}function Qm(n,e){return typeof e=="string"?mT(n,e):e instanceof ma?e._internalPath:e._delegate._internalPath}/**
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
 */function $D(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new te(Q.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class gT{}class bd extends gT{}function Ks(n,e,...t){let r=[];e instanceof gT&&r.push(e),r=r.concat(t),function(o){const u=o.filter(p=>p instanceof yT).length,d=o.filter(p=>p instanceof Wm).length;if(u>1||u>0&&d>0)throw new te(Q.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const a of r)n=a._apply(n);return n}class Wm extends bd{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Wm(e,t,r)}_apply(e){const t=this._parse(e);return QD(e._query,t),new Mn(e.firestore,e.converter,uv(e._query,t))}_parse(e){const t=Uo(e.firestore);return function(o,u,d,p,m,_,v){let w;if(m.isKeyField()){if(_==="array-contains"||_==="array-contains-any")throw new te(Q.INVALID_ARGUMENT,`Invalid Query. You can't perform '${_}' queries on documentId().`);if(_==="in"||_==="not-in"){rS(v,_);const x=[];for(const U of v)x.push(nS(p,o,U));w={arrayValue:{values:x}}}else w=nS(p,o,v)}else _!=="in"&&_!=="not-in"&&_!=="array-contains-any"||rS(v,_),w=jD(d,u,v,_==="in"||_==="not-in");return ze.create(m,_,w)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function n6(n,e,t){const r=e,a=Qm("where",n);return Wm._create(a,r,t)}class yT extends gT{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new yT(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:tt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(a,o){let u=a;const d=o.getFlattenedFilters();for(const p of d)QD(u,p),u=uv(u,p)}(e._query,t),new Mn(e.firestore,e.converter,uv(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class _T extends bd{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new _T(e,t)}_apply(e){const t=function(a,o,u){if(a.startAt!==null)throw new te(Q.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(a.endAt!==null)throw new te(Q.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Gh(o,u)}(e._query,this._field,this._direction);return new Mn(e.firestore,e.converter,function(a,o){const u=a.explicitOrderBy.concat([o]);return new ns(a.path,a.collectionGroup,u,a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt)}(e._query,t))}}function r6(n,e="asc"){const t=e,r=Qm("orderBy",n);return _T._create(r,t)}class Ym extends bd{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Ym(e,t,r)}_apply(e){return new Mn(e.firestore,e.converter,Wp(e._query,this._limit,this._limitType))}}function i6(n){return DD("limit",n),Ym._create("limit",n,"F")}function s6(n){return DD("limitToLast",n),Ym._create("limitToLast",n,"L")}class Xm extends bd{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new Xm(e,t,r)}_apply(e){const t=KD(e,this.type,this._docOrFields,this._inclusive);return new Mn(e.firestore,e.converter,function(a,o){return new ns(a.path,a.collectionGroup,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,o,a.endAt)}(e._query,t))}}function a6(...n){return Xm._create("startAt",n,!0)}function o6(...n){return Xm._create("startAfter",n,!1)}class Zm extends bd{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new Zm(e,t,r)}_apply(e){const t=KD(e,this.type,this._docOrFields,this._inclusive);return new Mn(e.firestore,e.converter,function(a,o){return new ns(a.path,a.collectionGroup,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,o)}(e._query,t))}}function l6(...n){return Zm._create("endBefore",n,!1)}function u6(...n){return Zm._create("endAt",n,!0)}function KD(n,e,t,r){if(t[0]=Ie(t[0]),t[0]instanceof Yh)return function(o,u,d,p,m){if(!p)throw new te(Q.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${d}().`);const _=[];for(const v of Yl(o))if(v.field.isKeyField())_.push(Ao(u,p.key));else{const w=p.data.field(v.field);if(Nm(w))throw new te(Q.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+v.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(w===null){const S=v.field.canonicalString();throw new te(Q.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${S}' (used as the orderBy) does not exist.`)}_.push(w)}return new da(_,m)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const a=Uo(n.firestore);return function(u,d,p,m,_,v){const w=u.explicitOrderBy;if(_.length>w.length)throw new te(Q.INVALID_ARGUMENT,`Too many arguments provided to ${m}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const S=[];for(let x=0;x<_.length;x++){const U=_[x];if(w[x].field.isKeyField()){if(typeof U!="string")throw new te(Q.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${m}(), but got a ${typeof U}`);if(!IE(u)&&U.indexOf("/")!==-1)throw new te(Q.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${m}() must be a plain document ID, but '${U}' contains a slash.`);const M=u.path.child(Be.fromString(U));if(!ce.isDocumentKey(M))throw new te(Q.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${m}() must result in a valid document path, but '${M}' is not because it contains an odd number of segments.`);const H=new ce(M);S.push(Ao(d,H))}else{const M=jD(p,m,U);S.push(M)}}return new da(S,v)}(n._query,n.firestore._databaseId,a,e,t,r)}}function nS(n,e,t){if(typeof(t=Ie(t))=="string"){if(t==="")throw new te(Q.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!IE(e)&&t.indexOf("/")!==-1)throw new te(Q.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Be.fromString(t));if(!ce.isDocumentKey(r))throw new te(Q.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ao(n,new ce(r))}if(t instanceof Tt)return Ao(n,t._key);throw new te(Q.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Hm(t)}.`)}function rS(n,e){if(!Array.isArray(n)||n.length===0)throw new te(Q.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function QD(n,e){const t=function(a,o){for(const u of a)for(const d of u.getFlattenedFilters())if(o.indexOf(d.op)>=0)return d.op;return null}(n.filters,function(a){switch(a){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new te(Q.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new te(Q.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class vT{convertValue(e,t="none"){switch(ca(e)){case 0:return null;case 1:return e.booleanValue;case 2:return dt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Zi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw me()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Ta(e,(a,o)=>{r[a]=this.convertValue(o,t)}),r}convertVectorValue(e){var t,r,a;const o=(a=(r=(t=e.fields)===null||t===void 0?void 0:t[fu].arrayValue)===null||r===void 0?void 0:r.values)===null||a===void 0?void 0:a.map(u=>dt(u.doubleValue));return new oT(o)}convertGeoPoint(e){return new Gm(dt(e.latitude),dt(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Om(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(jh(e));default:return null}}convertTimestamp(e){const t=Xi(e);return new gt(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Be.fromString(e);_e(k1(r));const a=new ua(r.get(1),r.get(3)),o=new ce(r.popFirst(5));return a.isEqual(t)||Vt(`Document ${o} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}/**
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
 */function Jm(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class c6 extends vT{constructor(e){super(),this.firestore=e}convertBytes(e){return new pi(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Tt(this.firestore,null,t)}}/**
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
 */class mo{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let Ji=class extends Yh{constructor(e,t,r,a,o,u){super(e,t,r,a,u),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Sh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Qm("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}},Sh=class extends Ji{data(e={}){return super.data(e)}},ga=class{constructor(e,t,r,a){this._firestore=e,this._userDataWriter=t,this._snapshot=a,this.metadata=new mo(a.hasPendingWrites,a.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Sh(this._firestore,this._userDataWriter,r.key,r,new mo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new te(Q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(a,o){if(a._snapshot.oldDocs.isEmpty()){let u=0;return a._snapshot.docChanges.map(d=>{const p=new Sh(a._firestore,a._userDataWriter,d.doc.key,d.doc,new mo(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);return d.doc,{type:"added",doc:p,oldIndex:-1,newIndex:u++}})}{let u=a._snapshot.oldDocs;return a._snapshot.docChanges.filter(d=>o||d.type!==3).map(d=>{const p=new Sh(a._firestore,a._userDataWriter,d.doc.key,d.doc,new mo(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);let m=-1,_=-1;return d.type!==0&&(m=u.indexOf(d.doc.key),u=u.delete(d.doc.key)),d.type!==1&&(u=u.add(d.doc),_=u.indexOf(d.doc.key)),{type:h6(d.type),doc:p,oldIndex:m,newIndex:_}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}};function h6(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return me()}}function WD(n,e){return n instanceof Ji&&e instanceof Ji?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof ga&&e instanceof ga&&n._firestore===e._firestore&&MD(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
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
 */function d6(n){n=Ye(n,Tt);const e=Ye(n.firestore,Lt);return AD(Sn(e),n._key).then(t=>ET(e,n,t))}class zo extends vT{constructor(e){super(),this.firestore=e}convertBytes(e){return new pi(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Tt(this.firestore,null,t)}}function f6(n){n=Ye(n,Tt);const e=Ye(n.firestore,Lt),t=Sn(e),r=new zo(e);return k9(t,n._key).then(a=>new Ji(e,r,n._key,a,new mo(a!==null&&a.hasLocalMutations,!0),n.converter))}function p6(n){n=Ye(n,Tt);const e=Ye(n.firestore,Lt);return AD(Sn(e),n._key,{source:"server"}).then(t=>ET(e,n,t))}function m6(n){n=Ye(n,Mn);const e=Ye(n.firestore,Lt),t=Sn(e),r=new zo(e);return $D(n._query),SD(t,n._query).then(a=>new ga(e,r,n,a))}function g6(n){n=Ye(n,Mn);const e=Ye(n.firestore,Lt),t=Sn(e),r=new zo(e);return V9(t,n._query).then(a=>new ga(e,r,n,a))}function y6(n){n=Ye(n,Mn);const e=Ye(n.firestore,Lt),t=Sn(e),r=new zo(e);return SD(t,n._query,{source:"server"}).then(a=>new ga(e,r,n,a))}function iS(n,e,t){n=Ye(n,Tt);const r=Ye(n.firestore,Lt),a=Jm(n.converter,e,t);return Id(r,[Km(Uo(r),"setDoc",n._key,a,n.converter!==null,t).toMutation(n._key,mt.none())])}function sS(n,e,t,...r){n=Ye(n,Tt);const a=Ye(n.firestore,Lt),o=Uo(a);let u;return u=typeof(e=Ie(e))=="string"||e instanceof ma?fT(o,"updateDoc",n._key,e,t,r):dT(o,"updateDoc",n._key,e),Id(a,[u.toMutation(n._key,mt.exists(!0))])}function _6(n){return Id(Ye(n.firestore,Lt),[new Lu(n._key,mt.none())])}function v6(n,e){const t=Ye(n.firestore,Lt),r=im(n),a=Jm(n.converter,e);return Id(t,[Km(Uo(n.firestore),"addDoc",r._key,a,n.converter!==null,{}).toMutation(r._key,mt.exists(!1))]).then(()=>r)}function YD(n,...e){var t,r,a;n=Ie(n);let o={includeMetadataChanges:!1,source:"default"},u=0;typeof e[u]!="object"||wv(e[u])||(o=e[u],u++);const d={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(wv(e[u])){const v=e[u];e[u]=(t=v.next)===null||t===void 0?void 0:t.bind(v),e[u+1]=(r=v.error)===null||r===void 0?void 0:r.bind(v),e[u+2]=(a=v.complete)===null||a===void 0?void 0:a.bind(v)}let p,m,_;if(n instanceof Tt)m=Ye(n.firestore,Lt),_=Vu(n._key.path),p={next:v=>{e[u]&&e[u](ET(m,n,v))},error:e[u+1],complete:e[u+2]};else{const v=Ye(n,Mn);m=Ye(v.firestore,Lt),_=v._query;const w=new zo(m);p={next:S=>{e[u]&&e[u](new ga(m,w,v,S))},error:e[u+1],complete:e[u+2]},$D(n._query)}return function(w,S,x,U){const M=new jm(U),H=new XE(S,M,x);return w.asyncQueue.enqueueAndForget(async()=>QE(await Iu(w),H)),()=>{M.su(),w.asyncQueue.enqueueAndForget(async()=>WE(await Iu(w),H))}}(Sn(m),_,d,p)}function E6(n,e){return M9(Sn(n=Ye(n,Lt)),wv(e)?e:{next:e})}function Id(n,e){return function(r,a){const o=new _n;return r.asyncQueue.enqueueAndForget(async()=>u9(await sT(r),a,o)),o.promise}(Sn(n),e)}function ET(n,e,t){const r=t.docs.get(e._key),a=new zo(n);return new Ji(n,a,e._key,r,new mo(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T6={maxAttempts:5};/**
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
 */let w6=class{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Uo(e)}set(e,t,r){this._verifyNotCommitted();const a=Zs(e,this._firestore),o=Jm(a.converter,t,r),u=Km(this._dataReader,"WriteBatch.set",a._key,o,a.converter!==null,r);return this._mutations.push(u.toMutation(a._key,mt.none())),this}update(e,t,r,...a){this._verifyNotCommitted();const o=Zs(e,this._firestore);let u;return u=typeof(t=Ie(t))=="string"||t instanceof ma?fT(this._dataReader,"WriteBatch.update",o._key,t,r,a):dT(this._dataReader,"WriteBatch.update",o._key,t),this._mutations.push(u.toMutation(o._key,mt.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Zs(e,this._firestore);return this._mutations=this._mutations.concat(new Lu(t._key,mt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new te(Q.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function Zs(n,e){if((n=Ie(n)).firestore!==e)throw new te(Q.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */class b6{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Uo(e)}get(e){const t=Zs(e,this._firestore),r=new c6(this._firestore);return this._transaction.lookup([t._key]).then(a=>{if(!a||a.length!==1)return me();const o=a[0];if(o.isFoundDocument())return new Yh(this._firestore,r,o.key,o,t.converter);if(o.isNoDocument())return new Yh(this._firestore,r,t._key,null,t.converter);throw me()})}set(e,t,r){const a=Zs(e,this._firestore),o=Jm(a.converter,t,r),u=Km(this._dataReader,"Transaction.set",a._key,o,a.converter!==null,r);return this._transaction.set(a._key,u),this}update(e,t,r,...a){const o=Zs(e,this._firestore);let u;return u=typeof(t=Ie(t))=="string"||t instanceof ma?fT(this._dataReader,"Transaction.update",o._key,t,r,a):dT(this._dataReader,"Transaction.update",o._key,t),this._transaction.update(o._key,u),this}delete(e){const t=Zs(e,this._firestore);return this._transaction.delete(t._key),this}}/**
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
 */let I6=class extends b6{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Zs(e,this._firestore),r=new zo(this._firestore);return super.get(e).then(a=>new Ji(this._firestore,r,t._key,a._document,new mo(!1,!1),t.converter))}};function A6(n,e,t){n=Ye(n,Lt);const r=Object.assign(Object.assign({},T6),t);return function(o){if(o.maxAttempts<1)throw new te(Q.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(o,u,d){const p=new _n;return o.asyncQueue.enqueueAndForget(async()=>{const m=await P9(o);new D9(o.asyncQueue,m,d,u,p).Iu()}),p.promise}(Sn(n),a=>e(new I6(n,a)),r)}/**
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
 */function S6(){return new wd("deleteField")}function R6(){return new lT("serverTimestamp")}function C6(...n){return new uT("arrayUnion",n)}function D6(...n){return new cT("arrayRemove",n)}function x6(n){return new hT("increment",n)}(function(e,t=!0){(function(a){ku=a})(ya),oa(new ci("firestore",(r,{instanceIdentifier:a,options:o})=>{const u=r.getProvider("app").getImmediate(),d=new Lt(new I4(r.getProvider("auth-internal")),new R4(u,r.getProvider("app-check-internal")),function(m,_){if(!Object.prototype.hasOwnProperty.apply(m.options,["projectId"]))throw new te(Q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ua(m.options.projectId,_)}(u,a),u);return o=Object.assign({useFetchStreams:t},o),d._setSettings(o),d},"PUBLIC").setMultipleInstances(!0)),Or(MI,LI,e),Or(MI,LI,"esm2017")})();const P6="@firebase/firestore-compat",N6="0.3.45";/**
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
 */function TT(n,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new te("invalid-argument",`Invalid options passed to function ${n}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function aS(){if(typeof Uint8Array>"u")throw new te("unimplemented","Uint8Arrays are not available in this environment.")}function oS(){if(!oB())throw new te("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Xh{constructor(e){this._delegate=e}static fromBase64String(e){return oS(),new Xh(pi.fromBase64String(e))}static fromUint8Array(e){return aS(),new Xh(pi.fromUint8Array(e))}toBase64(){return oS(),this._delegate.toBase64()}toUint8Array(){return aS(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
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
 */function Iv(n){return O6(n,["next","error","complete"])}function O6(n,e){if(typeof n!="object"||n===null)return!1;const t=n;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}/**
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
 */class k6{enableIndexedDbPersistence(e,t){return q9(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return H9(e._delegate)}clearIndexedDbPersistence(e){return G9(e._delegate)}}class XD{constructor(e,t,r){this._delegate=t,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof ua||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&di("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,r={}){B9(this._delegate,e,t,r)}enableNetwork(){return K9(this._delegate)}disableNetwork(){return Q9(this._delegate)}enablePersistence(e){let t=!1,r=!1;return e&&(t=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,CD("synchronizeTabs",t,"experimentalForceOwningTab",r)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return $9(this._delegate)}onSnapshotsInSync(e){return E6(this._delegate,e)}get app(){if(!this._appCompat)throw new te("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Au(this,kD(this._delegate,e))}catch(t){throw On(t,"collection()","Firestore.collection()")}}doc(e){try{return new Er(this,im(this._delegate,e))}catch(t){throw On(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Nn(this,z9(this._delegate,e))}catch(t){throw On(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return A6(this._delegate,t=>e(new ZD(this,t)))}batch(){return Sn(this._delegate),new JD(new w6(this._delegate,e=>Id(this._delegate,e)))}loadBundle(e){return W9(this._delegate,e)}namedQuery(e){return Y9(this._delegate,e).then(t=>t?new Nn(this,t):null)}}class eg extends vT{constructor(e){super(),this.firestore=e}convertBytes(e){return new Xh(new pi(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return Er.forKey(t,this.firestore,null)}}function V6(n){E4(n)}class ZD{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new eg(e)}get(e){const t=go(e);return this._delegate.get(t).then(r=>new Zh(this._firestore,new Ji(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,t.converter)))}set(e,t,r){const a=go(e);return r?(TT("Transaction.set",r),this._delegate.set(a,t,r)):this._delegate.set(a,t),this}update(e,t,r,...a){const o=go(e);return arguments.length===2?this._delegate.update(o,t):this._delegate.update(o,t,r,...a),this}delete(e){const t=go(e);return this._delegate.delete(t),this}}class JD{constructor(e){this._delegate=e}set(e,t,r){const a=go(e);return r?(TT("WriteBatch.set",r),this._delegate.set(a,t,r)):this._delegate.set(a,t),this}update(e,t,r,...a){const o=go(e);return arguments.length===2?this._delegate.update(o,t):this._delegate.update(o,t,r,...a),this}delete(e){const t=go(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class Oo{constructor(e,t,r){this._firestore=e,this._userDataWriter=t,this._delegate=r}fromFirestore(e,t){const r=new Sh(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Jh(this._firestore,r),t??{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const r=Oo.INSTANCES;let a=r.get(e);a||(a=new WeakMap,r.set(e,a));let o=a.get(t);return o||(o=new Oo(e,new eg(e),t),a.set(t,o)),o}}Oo.INSTANCES=new WeakMap;class Er{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new eg(e)}static forPath(e,t,r){if(e.length%2!==0)throw new te("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Er(t,new Tt(t._delegate,r,new ce(e)))}static forKey(e,t,r){return new Er(t,new Tt(t._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new Au(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Au(this.firestore,kD(this._delegate,e))}catch(t){throw On(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=Ie(e),e instanceof Tt?VD(this._delegate,e):!1}set(e,t){t=TT("DocumentReference.set",t);try{return t?iS(this._delegate,e,t):iS(this._delegate,e)}catch(r){throw On(r,"setDoc()","DocumentReference.set()")}}update(e,t,...r){try{return arguments.length===1?sS(this._delegate,e):sS(this._delegate,e,t,...r)}catch(a){throw On(a,"updateDoc()","DocumentReference.update()")}}delete(){return _6(this._delegate)}onSnapshot(...e){const t=ex(e),r=tx(e,a=>new Zh(this.firestore,new Ji(this.firestore._delegate,this._userDataWriter,a._key,a._document,a.metadata,this._delegate.converter)));return YD(this._delegate,t,r)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=f6(this._delegate):(e==null?void 0:e.source)==="server"?t=p6(this._delegate):t=d6(this._delegate),t.then(r=>new Zh(this.firestore,new Ji(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new Er(this.firestore,e?this._delegate.withConverter(Oo.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function On(n,e,t){return n.message=n.message.replace(e,t),n}function ex(n){for(const e of n)if(typeof e=="object"&&!Iv(e))return e;return{}}function tx(n,e){var t,r;let a;return Iv(n[0])?a=n[0]:Iv(n[1])?a=n[1]:typeof n[0]=="function"?a={next:n[0],error:n[1],complete:n[2]}:a={next:n[1],error:n[2],complete:n[3]},{next:o=>{a.next&&a.next(e(o))},error:(t=a.error)===null||t===void 0?void 0:t.bind(a),complete:(r=a.complete)===null||r===void 0?void 0:r.bind(a)}}class Zh{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new Er(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return WD(this._delegate,e._delegate)}}class Jh extends Zh{data(e){const t=this._delegate.data(e);return this._delegate._converter||T4(t!==void 0),t}}class Nn{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new eg(e)}where(e,t,r){try{return new Nn(this.firestore,Ks(this._delegate,n6(e,t,r)))}catch(a){throw On(a,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new Nn(this.firestore,Ks(this._delegate,r6(e,t)))}catch(r){throw On(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Nn(this.firestore,Ks(this._delegate,i6(e)))}catch(t){throw On(t,"limit()","Query.limit()")}}limitToLast(e){try{return new Nn(this.firestore,Ks(this._delegate,s6(e)))}catch(t){throw On(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Nn(this.firestore,Ks(this._delegate,a6(...e)))}catch(t){throw On(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Nn(this.firestore,Ks(this._delegate,o6(...e)))}catch(t){throw On(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Nn(this.firestore,Ks(this._delegate,l6(...e)))}catch(t){throw On(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Nn(this.firestore,Ks(this._delegate,u6(...e)))}catch(t){throw On(t,"endAt()","Query.endAt()")}}isEqual(e){return MD(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=g6(this._delegate):(e==null?void 0:e.source)==="server"?t=y6(this._delegate):t=m6(this._delegate),t.then(r=>new Av(this.firestore,new ga(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const t=ex(e),r=tx(e,a=>new Av(this.firestore,new ga(this.firestore._delegate,this._userDataWriter,this._delegate,a._snapshot)));return YD(this._delegate,t,r)}withConverter(e){return new Nn(this.firestore,e?this._delegate.withConverter(Oo.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class M6{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new Jh(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Av{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new Nn(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Jh(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new M6(this._firestore,t))}forEach(e,t){this._delegate.forEach(r=>{e.call(t,new Jh(this._firestore,r))})}isEqual(e){return WD(this._delegate,e._delegate)}}class Au extends Nn{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Er(this.firestore,e):null}doc(e){try{return e===void 0?new Er(this.firestore,im(this._delegate)):new Er(this.firestore,im(this._delegate,e))}catch(t){throw On(t,"doc()","CollectionReference.doc()")}}add(e){return v6(this._delegate,e).then(t=>new Er(this.firestore,t))}isEqual(e){return VD(this._delegate,e._delegate)}withConverter(e){return new Au(this.firestore,e?this._delegate.withConverter(Oo.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function go(n){return Ye(n,Tt)}/**
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
 */class wT{constructor(...e){this._delegate=new ma(...e)}static documentId(){return new wT(pt.keyField().canonicalString())}isEqual(e){return e=Ie(e),e instanceof ma?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class co{static serverTimestamp(){const e=R6();return e._methodName="FieldValue.serverTimestamp",new co(e)}static delete(){const e=S6();return e._methodName="FieldValue.delete",new co(e)}static arrayUnion(...e){const t=C6(...e);return t._methodName="FieldValue.arrayUnion",new co(t)}static arrayRemove(...e){const t=D6(...e);return t._methodName="FieldValue.arrayRemove",new co(t)}static increment(e){const t=x6(e);return t._methodName="FieldValue.increment",new co(t)}constructor(e){this._delegate=e}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const L6={Firestore:XD,GeoPoint:Gm,Timestamp:gt,Blob:Xh,Transaction:ZD,WriteBatch:JD,DocumentReference:Er,DocumentSnapshot:Zh,Query:Nn,QueryDocumentSnapshot:Jh,QuerySnapshot:Av,CollectionReference:Au,FieldPath:wT,FieldValue:co,setLogLevel:V6,CACHE_SIZE_UNLIMITED:j9};function U6(n,e){n.INTERNAL.registerComponent(new ci("firestore-compat",t=>{const r=t.getProvider("app-compat").getImmediate(),a=t.getProvider("firestore").getImmediate();return e(r,a)},"PUBLIC").setServiceProps(Object.assign({},L6)))}/**
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
 */function B6(n){U6(n,(e,t)=>new XD(e,t,new k6)),n.registerVersion(P6,N6)}B6(xu);const z6={apiKey:"AIzaSyAJa3iZYHCFjFC1suil_4g9E_FujVCSfhM",authDomain:"mini-blog-chaewon.firebaseapp.com",projectId:"mini-blog-chaewon",storageBucket:"mini-blog-chaewon.firebasestorage.app",messagingSenderId:"592149089393",appId:"1:592149089393:web:54e7e27b4df5d1a6705fd0"},F6=xu.initializeApp(z6),am=F6.firestore();function j6(n){const e=lm(),[t,r]=X.useState([]),[a,o]=X.useState([]),[u,d]=X.useState("list");return X.useEffect(()=>{let p=[];am.collection("post").orderBy("id","desc").get().then(m=>{m.forEach(_=>{p.push({id:_.id,..._.data()})}),r(p),o(p.slice(0,5))})},[]),Y.jsxs("div",{className:"bodyPadding",style:{height:"900px",overflow:"hidden",display:"flex",flexDirection:"column"},children:[Y.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"46px",alignItems:"flex-end"},children:[Y.jsxs("div",{children:[Y.jsxs("div",{style:{display:"flex",gap:"7px"},children:[Y.jsxs("div",{style:{display:"flex"},children:[Y.jsx("h2",{className:"Text1",children:"12"}),Y.jsx("h2",{className:"Text2",children:"D"})]}),Y.jsxs("div",{style:{display:"flex"},children:[Y.jsx("h2",{className:"Text1",children:"18"}),Y.jsx("h2",{className:"Text2",children:"H"})]}),Y.jsxs("div",{style:{display:"flex"},children:[Y.jsx("h2",{className:"Text1",children:"23"}),Y.jsx("h2",{className:"Text2",children:"M"})]})]}),Y.jsxs("div",{style:{display:"flex",marginTop:"7px"},children:[Y.jsx("h2",{className:"Text1",children:"146,321"}),Y.jsx("h2",{className:"Text2",children:"km"})]})]}),Y.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[Y.jsx("img",{src:"/miniblog_v1/grid-icon-grid.png",style:{cursor:"pointer",opacity:u==="grid"?1:.5},onClick:()=>d("grid")}),Y.jsx("img",{src:"/miniblog_v1/grid-icon-list.png",style:{cursor:"pointer",opacity:u==="list"?1:.5},onClick:()=>d("list")})]})]}),Y.jsx(xk,{posts:u==="list"?t:a,layout:u,itemClicked:p=>{console.log("클릭됨:",p.id),e(`/post/${p.id}`)}}),Y.jsx("div",{className:"whiteBox2"}),Y.jsx("div",{style:{position:"absolute",bottom:"100px",left:"50%",transform:"translateX(-50%)"},children:Y.jsx(Uv,{title:"글 작성하기",onClick:p=>{e("/write")}})})]})}const q6=Xe.textarea`
    background-color: rgba(0, 0, 0, 0);
    width: ${n=>n.width}px;
    height: ${n=>n.height}px;
    display: block;
    margin: 0 auto;
    border: none;
    font-size: ${n=>n.fontsize}px;
    border-bottom: solid 1px  ${n=>n.borderColor};
    font-family: 'Pretendard-Regular', sans-serif; 

    resize: none;  

    &::placeholder {
    color: #999;   
    font-size: ${n=>n.fontsize}px;
    align-items:center;
    opacity: 0.8;
    font-family: 'Pretendard-Regular', sans-serif; 
  }
     &:focus {    
     border-bottom: solid 1px ${n=>n.borderColor}; /* 포커스 상태에서도 border 진해지지 않게 고정 */
    outline: none;
  }
`;function lS(n){const{width:e,height:t,value:r,placeholder:a,fontsize:o,borderColor:u,onChange:d}=n;return Y.jsx(q6,{width:e||20,height:t||20,value:r,borderColor:u||"#B7B7B7",placeholder:a||"",fontsize:o||20,onChange:d})}const H6=Xe.textarea`
    background-color: none;
    width: ${n=>n.width}px;
    height: ${n=>n.height}px;
    border-radius: ${n=>n.radius}px;
    margin: 0 auto;
    font-size: 20px;
      font-family: 'Pretendard-Regular', sans-serif; 
      border: 1px solid #B7B7B7;

    resize: none;

    padding-left:20px;
    line-height: 1.4;
     padding-top: calc((${n=>n.height}px - 24px * 1.4) / 2);
    

    &::placeholder {
    color: #999;   
    font-size: 20px;
    align-items:center;
    opacity: 0.8;
    font-family: 'Pretendard-Regular', sans-serif; 
  }
     &:focus {    
     border: 1px solid #B7B7B7;
    outline: none;
  }
`;function Sp(n){const{width:e,height:t,radius:r,value:a,onChange:o,placeholder:u}=n;return Y.jsx(H6,{width:e||20,height:t||20,radius:r||20,placeholder:u||"",value:a,onChange:o})}function G6({value:n,onChange:e}){const t=["#D35456","#FE9015","#FEE315","#63D354","#1595FE"],r=t.findIndex(o=>o===n),a=o=>{const u=t[o];e(u)};return Y.jsx("div",{style:{display:"flex"},children:t.map((o,u)=>Y.jsx(ck,{color:o,isActive:r===u,onClick:()=>a(u)},u))})}function $6(n){const e=lm(),[t,r]=X.useState(""),[a,o]=X.useState(""),[u,d]=X.useState(""),[p,m]=X.useState(""),[_,v]=X.useState(""),[w,S]=X.useState(""),x=()=>{if(!w){alert("색상을 선택해주세요!");return}let $=new Date().getTime().toString();am.collection("post").doc($).set({id:$,title:t,content:a,country:u,place:p,date:_,comments:[],color:w,image:U}).then(()=>{alert("글이 등록되었습니다!"),e("/")})},[U,M]=X.useState(null),H=$=>{let K=new FileReader;K.readAsDataURL($.target.files[0]),K.onload=oe=>{console.log(oe.target.result),M(oe.target.result)}};return Y.jsxs("div",{children:[Y.jsxs("div",{className:"bodyPadding2",children:[Y.jsxs("div",{style:{display:"flex",gap:"24px"},children:[Y.jsx("h2",{style:{fontSize:"28px",fontWeight:"100",color:"#FE9015"},children:"LADING PASS"}),Y.jsx("h2",{style:{fontSize:"28px",fontWeight:"100",color:"#FE9015",fontFamily:'"Fuzzy Bubbles", sans-serif'},children:"Check-List"})]}),Y.jsxs("div",{style:{display:"flex",gap:"30px",justifyContent:"space-evenly"},children:[Y.jsxs("div",{className:"InputBox",children:[Y.jsx("span",{className:"NumBox",children:"1"}),Y.jsx(Sp,{width:"266",height:"50",radius:"10",placeholder:"나라를 입력해주세요",value:u,onChange:$=>d($.target.value)})]}),Y.jsxs("div",{className:"InputBox",children:[Y.jsx("span",{className:"NumBox",children:"2"}),Y.jsx(Sp,{width:"266",height:"50",radius:"10",placeholder:"지역을 입력해주세요",value:p,onChange:$=>m($.target.value)})]}),Y.jsxs("div",{className:"InputBox",children:[Y.jsx("span",{className:"NumBox",children:"3"}),Y.jsx(Sp,{width:"266",height:"50",radius:"10",placeholder:"날짜를 입력해주세요",value:_,onChange:$=>v($.target.value)})]})]}),Y.jsx("div",{style:{display:"flex",marginLeft:"26px"},children:Y.jsx(G6,{value:w,onChange:$=>S($)})})]}),Y.jsxs("div",{className:"bodyPadding2",children:[Y.jsx("div",{style:{marginBottom:"30px"},children:Y.jsx(lS,{width:"1050",height:"50",value:t,placeholder:"제목",fontsize:"32",onChange:$=>r($.target.value)})}),Y.jsxs("div",{style:{width:"874px",position:"relative"},children:[Y.jsx(lS,{width:"1050",height:"320",value:a,borderColor:"none",placeholder:"내용을 작성해주세요",onChange:$=>o($.target.value)}),U&&Y.jsx("img",{src:U,alt:"미리보기",className:"ContentImage",style:{position:"absolute",bottom:"-50px",right:"-180px",width:"150px",objectFit:"cover",borderRadius:"10px",boxShadow:"0 0 5px rgba(0,0,0,0.2)"}})]}),Y.jsx("input",{type:"file",id:"image-upload",accept:"image/*",onChange:$=>H($),style:{display:"none"}}),Y.jsx("div",{style:{position:"absolute",bottom:"82px",left:"50%",transform:"translateX(-50%)"},children:Y.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"18px"},children:[Y.jsx(Uv,{title:"업로드",onClick:$=>{x()}}),Y.jsx("label",{htmlFor:"image-upload",className:"ImageInput"})]})})]})]})}const K6=Xe.div`
    background-color: none;
    display: block;
    line-height:160%;
    border-bottom: solid 1px #BEBEBE;
`,Q6=Xe.h3`
color: #3A3A3A;
font-size:24px;
font-weight: 700;
margin-bottom:14px;
`,W6=Xe.p`
font-size:20px;
color: #3A3A3A;
margin-bottom:62px;
`,Y6=Xe.div`
display:flex;
justify-content:space-between;
padding: 0px 0px 15px 16px;
border-bottom: solid 1px #3C3C3C;
color: #808080;
font-size:18px;
font-weight:100;
`;function X6(n){const{post:e}=n;return Y.jsxs(K6,{children:[Y.jsx(Q6,{children:e.title}),Y.jsx(W6,{children:e.content}),e.image&&Y.jsx("img",{src:e.image,alt:"업로드 이미지",style:{width:"200px",height:"200px",borderRadius:"10px",marginTop:"16px",objectFit:"cover"}}),Y.jsxs(Y6,{children:[Y.jsx("p",{children:"2025.3.3"}),Y.jsx("p",{children:"@di_ed_ie"})]})]})}const Z6=Xe.div`
 display: flex;
  justify-content: space-between;
  align-items: center; 
  height: 47px;
  margin-bottom: 14px;
`,J6=Xe.p`
    font-size: 20px;
`,e5=Xe.p`
    font-size:16px;
    color:#C2C2C2;
    text-align:right;
`,t5=Xe.div`
  width: 46px;
  height: 46px;
  background-color: #e0e0e0;
  border-radius: 50%;
  display: flex;
  margin-right: 28px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;function n5(n){const{comment:e}=n;return Y.jsxs(Z6,{children:[Y.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[Y.jsx(t5,{}),Y.jsx(J6,{children:e.content})]}),Y.jsx(e5,{children:"@di_ed_ie"})]})}const r5=Xe.div`
  height: 380px;       
  overflow-y: auto;       
  padding-right: 8px;         
  display: flex;
  flex-direction: column;
  gap: 13px;
`;function i5({comments:n}){return Y.jsx(r5,{children:n.map(e=>Y.jsx(n5,{comment:e},e.id))})}const s5=Xe.div`
  width: 48px;
  height: 48px;
  background-color: #e0e0e0;
  border-radius: 50%;
  display: flex;
  margin-right: 12px;
  margin-left: 4px;
  align-items: center;
  justify-content: center;
`;function a5(n){const e=dN().id,[t,r]=X.useState({id:e,title:"",content:"",comments:[],image:""});X.useEffect(()=>{am.collection("post").doc(e).get().then(m=>{r(m.data())})},[]),X.useEffect(()=>{d(t.comments||[])},[t]);const[a,o]=X.useState(""),[u,d]=X.useState(t.comments||[]),p=async()=>{if(a.trim()==="")return;const _=[{content:a,author:"익명",createdAt:new Date},...u];d(_),o("");try{await am.collection("post").doc(e).update({comments:_})}catch(v){console.error("댓글 저장 중 오류 발생:",v)}};return Y.jsx("div",{className:"bodyPadding",children:Y.jsxs("div",{style:{paddingLeft:"5%",paddingRight:"5%",boxSizing:"border-box",overflow:"hidden"},children:[Y.jsx(X6,{post:t}),Y.jsx("h1",{style:{fontSize:"24px",paddingTop:"20px",paddingBottom:"30px"},children:"COMMENT"}),Y.jsx(i5,{comments:u}),Y.jsx("div",{className:"whiteBox"}),Y.jsxs("div",{style:{display:"flex",gap:"8px",marginTop:"30px",alignItems:"center",position:"absolute",bottom:"50px"},children:[Y.jsx(s5,{}),Y.jsx(Sp,{width:"874",height:"50",radius:"100",value:a,onChange:m=>o(m.target.value),placeholder:"댓글을 작성해주세요."}),Y.jsx(Uv,{title:"작성하기",width:"177",onClick:p})]})]})})}MP.createRoot(document.getElementById("root")).render(Y.jsx("div",{children:Y.jsx(YN,{basename:"/miniblog_v1/",children:Y.jsxs(RN,{children:[Y.jsx(ip,{index:!0,element:Y.jsx(j6,{})}),Y.jsx(ip,{path:"write",element:Y.jsx($6,{})}),Y.jsx(ip,{path:"post/:id",element:Y.jsx(a5,{})})]})})}));
