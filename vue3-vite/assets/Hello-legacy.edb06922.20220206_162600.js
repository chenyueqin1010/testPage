!function(){function e(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(u){s=!0,o=u}finally{try{a||null==n.return||n.return()}finally{if(s)throw o}}return i}(e,n)||t(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}var o=document.createElement("style");o.innerHTML='.ant-message{box-sizing:border-box;margin:0;padding:0;color:rgba(0,0,0,.85);font-size:14px;font-variant:tabular-nums;line-height:1.5715;list-style:none;font-feature-settings:"tnum";position:fixed;top:8px;left:0;z-index:1010;width:100%;pointer-events:none}.ant-message-notice{padding:8px;text-align:center}.ant-message-notice-content{display:inline-block;padding:10px 16px;background:#fff;border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,.15);pointer-events:all}.ant-message-success .anticon{color:#52c41a}.ant-message-error .anticon{color:#ff4d4f}.ant-message-warning .anticon{color:#faad14}.ant-message-info .anticon,.ant-message-loading .anticon{color:#1890ff}.ant-message .anticon{position:relative;top:1px;margin-right:8px;font-size:16px}.ant-message-notice.ant-move-up-leave.ant-move-up-leave-active{animation-name:MessageMoveOut;animation-duration:.3s}@keyframes MessageMoveOut{0%{max-height:150px;padding:8px;opacity:1}to{max-height:0;padding:0;opacity:0}}.ant-message-rtl,.ant-message-rtl span{direction:rtl}.ant-message-rtl .anticon{margin-right:0;margin-left:8px}\n',document.head.appendChild(o),System.register(["./index-legacy.54c283df.20220206_162600.js","./vendor-legacy.827e5a75.20220206_162600.js","./index-legacy.a0f0ede6.20220206_162600.js"],(function(n){"use strict";var o,i,a,s,u,c,f,l,d,p,h,m,g,y;return{setters:[function(e){o=e.$,i=e.B},function(e){a=e.i,s=e.j,u=e.o,c=e.c,f=e.b,l=e.t,d=e.a,p=e.w,h=e.F,m=e.k,g=e.l},function(e){y=e.u}],execute:function(){var v={exports:{}},b=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}},w=b,x=Object.prototype.toString;function S(e){return Array.isArray(e)}function E(e){return void 0===e}function j(e){return"[object ArrayBuffer]"===x.call(e)}function O(e){return null!==e&&"object"===r(e)}function C(e){if("[object Object]"!==x.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function A(e){return"[object Function]"===x.call(e)}function T(e,t){if(null!=e)if("object"!==r(e)&&(e=[e]),S(e))for(var n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}var N={isArray:S,isArrayBuffer:j,isBuffer:function(e){return null!==e&&!E(e)&&null!==e.constructor&&!E(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"[object FormData]"===x.call(e)},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&j(e.buffer)},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:O,isPlainObject:C,isUndefined:E,isDate:function(e){return"[object Date]"===x.call(e)},isFile:function(e){return"[object File]"===x.call(e)},isBlob:function(e){return"[object Blob]"===x.call(e)},isFunction:A,isStream:function(e){return O(e)&&A(e.pipe)},isURLSearchParams:function(e){return"[object URLSearchParams]"===x.call(e)},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:T,merge:function e(){var t={};function n(n,r){C(t[r])&&C(n)?t[r]=e(t[r],n):C(n)?t[r]=e({},n):S(n)?t[r]=n.slice():t[r]=n}for(var r=0,o=arguments.length;r<o;r++)T(arguments[r],n);return t},extend:function(e,t,n){return T(t,(function(t,r){e[r]=n&&"function"==typeof t?w(t,n):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}},R=N;function k(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var P=function(e,t,n){if(!t)return e;var r;if(n)r=n(t);else if(R.isURLSearchParams(t))r=t.toString();else{var o=[];R.forEach(t,(function(e,t){null!=e&&(R.isArray(e)?t+="[]":e=[e],R.forEach(e,(function(e){R.isDate(e)?e=e.toISOString():R.isObject(e)&&(e=JSON.stringify(e)),o.push(k(t)+"="+k(e))})))})),r=o.join("&")}if(r){var i=e.indexOf("#");-1!==i&&(e=e.slice(0,i)),e+=(-1===e.indexOf("?")?"?":"&")+r}return e},U=N;function _(){this.handlers=[]}_.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},_.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},_.prototype.forEach=function(e){U.forEach(this.handlers,(function(t){null!==t&&e(t)}))};var B=_,L=N,q=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e},D=q,I=function(e,t,n,r,o){var i=new Error(e);return D(i,t,n,r,o)},M=I,z=N,F=z.isStandardBrowserEnv()?{write:function(e,t,n,r,o,i){var a=[];a.push(e+"="+encodeURIComponent(t)),z.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),z.isString(r)&&a.push("path="+r),z.isString(o)&&a.push("domain="+o),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},J=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},H=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},V=N,$=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],W=N,X=W.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function r(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=r(window.location.href),function(t){var n=W.isString(t)?r(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0};function K(e){this.message=e}K.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},K.prototype.__CANCEL__=!0;var G=K,Q=N,Y=function(e,t,n){var r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(M("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)},Z=F,ee=P,te=function(e,t){return e&&!J(t)?H(e,t):t},ne=function(e){var t,n,r,o={};return e?(V.forEach(e.split("\n"),(function(e){if(r=e.indexOf(":"),t=V.trim(e.substr(0,r)).toLowerCase(),n=V.trim(e.substr(r+1)),t){if(o[t]&&$.indexOf(t)>=0)return;o[t]="set-cookie"===t?(o[t]?o[t]:[]).concat([n]):o[t]?o[t]+", "+n:n}})),o):o},re=X,oe=I,ie=me,ae=G,se=function(e){return new Promise((function(t,n){var r,o=e.data,i=e.headers,a=e.responseType;function s(){e.cancelToken&&e.cancelToken.unsubscribe(r),e.signal&&e.signal.removeEventListener("abort",r)}Q.isFormData(o)&&delete i["Content-Type"];var u=new XMLHttpRequest;if(e.auth){var c=e.auth.username||"",f=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.Authorization="Basic "+btoa(c+":"+f)}var l=te(e.baseURL,e.url);function d(){if(u){var r="getAllResponseHeaders"in u?ne(u.getAllResponseHeaders()):null,o={data:a&&"text"!==a&&"json"!==a?u.response:u.responseText,status:u.status,statusText:u.statusText,headers:r,config:e,request:u};Y((function(e){t(e),s()}),(function(e){n(e),s()}),o),u=null}}if(u.open(e.method.toUpperCase(),ee(l,e.params,e.paramsSerializer),!0),u.timeout=e.timeout,"onloadend"in u?u.onloadend=d:u.onreadystatechange=function(){u&&4===u.readyState&&(0!==u.status||u.responseURL&&0===u.responseURL.indexOf("file:"))&&setTimeout(d)},u.onabort=function(){u&&(n(oe("Request aborted",e,"ECONNABORTED",u)),u=null)},u.onerror=function(){n(oe("Network Error",e,null,u)),u=null},u.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",r=e.transitional||ie.transitional;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(oe(t,e,r.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",u)),u=null},Q.isStandardBrowserEnv()){var p=(e.withCredentials||re(l))&&e.xsrfCookieName?Z.read(e.xsrfCookieName):void 0;p&&(i[e.xsrfHeaderName]=p)}"setRequestHeader"in u&&Q.forEach(i,(function(e,t){void 0===o&&"content-type"===t.toLowerCase()?delete i[t]:u.setRequestHeader(t,e)})),Q.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),a&&"json"!==a&&(u.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&u.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&u.upload&&u.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(r=function(e){u&&(n(!e||e&&e.type?new ae("canceled"):e),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(r),e.signal&&(e.signal.aborted?r():e.signal.addEventListener("abort",r))),o||(o=null),u.send(o)}))},ue=N,ce=function(e,t){L.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))},fe=q,le={"Content-Type":"application/x-www-form-urlencoded"};function de(e,t){!ue.isUndefined(e)&&ue.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var pe,he={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(pe=se),pe),transformRequest:[function(e,t){return ce(t,"Accept"),ce(t,"Content-Type"),ue.isFormData(e)||ue.isArrayBuffer(e)||ue.isBuffer(e)||ue.isStream(e)||ue.isFile(e)||ue.isBlob(e)?e:ue.isArrayBufferView(e)?e.buffer:ue.isURLSearchParams(e)?(de(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):ue.isObject(e)||t&&"application/json"===t["Content-Type"]?(de(t,"application/json"),function(e,t,n){if(ue.isString(e))try{return(t||JSON.parse)(e),ue.trim(e)}catch(r){if("SyntaxError"!==r.name)throw r}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||he.transitional,n=t&&t.silentJSONParsing,r=t&&t.forcedJSONParsing,o=!n&&"json"===this.responseType;if(o||r&&ue.isString(e)&&e.length)try{return JSON.parse(e)}catch(i){if(o){if("SyntaxError"===i.name)throw fe(i,this,"E_JSON_PARSE");throw i}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};ue.forEach(["delete","get","head"],(function(e){he.headers[e]={}})),ue.forEach(["post","put","patch"],(function(e){he.headers[e]=ue.merge(le)}));var me=he,ge=N,ye=me,ve=function(e){return!(!e||!e.__CANCEL__)},be=N,we=function(e,t,n){var r=this||ye;return ge.forEach(n,(function(n){e=n.call(r,e,t)})),e},xe=ve,Se=me,Ee=G;function je(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Ee("canceled")}var Oe=N,Ce=function(e,t){t=t||{};var n={};function r(e,t){return Oe.isPlainObject(e)&&Oe.isPlainObject(t)?Oe.merge(e,t):Oe.isPlainObject(t)?Oe.merge({},t):Oe.isArray(t)?t.slice():t}function o(n){return Oe.isUndefined(t[n])?Oe.isUndefined(e[n])?void 0:r(void 0,e[n]):r(e[n],t[n])}function i(e){if(!Oe.isUndefined(t[e]))return r(void 0,t[e])}function a(n){return Oe.isUndefined(t[n])?Oe.isUndefined(e[n])?void 0:r(void 0,e[n]):r(void 0,t[n])}function s(n){return n in t?r(e[n],t[n]):n in e?r(void 0,e[n]):void 0}var u={url:i,method:i,data:i,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:s};return Oe.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=u[e]||o,r=t(e);Oe.isUndefined(r)&&t!==s||(n[e]=r)})),n},Ae="0.25.0",Te=Ae,Ne={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){Ne[e]=function(n){return r(n)===e||"a"+(t<1?"n ":" ")+e}}));var Re={};Ne.transitional=function(e,t,n){function r(e,t){return"[Axios v"+Te+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return function(n,o,i){if(!1===e)throw new Error(r(o," has been removed"+(t?" in "+t:"")));return t&&!Re[o]&&(Re[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,o,i)}};var ke={assertOptions:function(e,t,n){if("object"!==r(e))throw new TypeError("options must be an object");for(var o=Object.keys(e),i=o.length;i-- >0;){var a=o[i],s=t[a];if(s){var u=e[a],c=void 0===u||s(u,a,e);if(!0!==c)throw new TypeError("option "+a+" must be "+c)}else if(!0!==n)throw Error("Unknown option "+a)}},validators:Ne},Pe=N,Ue=P,_e=B,Be=function(e){return je(e),e.headers=e.headers||{},e.data=we.call(e,e.data,e.headers,e.transformRequest),e.headers=be.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),be.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||Se.adapter)(e).then((function(t){return je(e),t.data=we.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return xe(t)||(je(e),t&&t.response&&(t.response.data=we.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))},Le=Ce,qe=ke,De=qe.validators;function Ie(e){this.defaults=e,this.interceptors={request:new _e,response:new _e}}Ie.prototype.request=function(e,t){if("string"==typeof e?(t=t||{}).url=e:t=e||{},!t.url)throw new Error("Provided config url is not valid");(t=Le(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var n=t.transitional;void 0!==n&&qe.assertOptions(n,{silentJSONParsing:De.transitional(De.boolean),forcedJSONParsing:De.transitional(De.boolean),clarifyTimeoutError:De.transitional(De.boolean)},!1);var r=[],o=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(o=o&&e.synchronous,r.unshift(e.fulfilled,e.rejected))}));var i,a=[];if(this.interceptors.response.forEach((function(e){a.push(e.fulfilled,e.rejected)})),!o){var s=[Be,void 0];for(Array.prototype.unshift.apply(s,r),s=s.concat(a),i=Promise.resolve(t);s.length;)i=i.then(s.shift(),s.shift());return i}for(var u=t;r.length;){var c=r.shift(),f=r.shift();try{u=c(u)}catch(l){f(l);break}}try{i=Be(u)}catch(l){return Promise.reject(l)}for(;a.length;)i=i.then(a.shift(),a.shift());return i},Ie.prototype.getUri=function(e){if(!e.url)throw new Error("Provided config url is not valid");return e=Le(this.defaults,e),Ue(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},Pe.forEach(["delete","get","head","options"],(function(e){Ie.prototype[e]=function(t,n){return this.request(Le(n||{},{method:e,url:t,data:(n||{}).data}))}})),Pe.forEach(["post","put","patch"],(function(e){Ie.prototype[e]=function(t,n,r){return this.request(Le(r||{},{method:e,url:t,data:n}))}}));var Me=Ie,ze=G;function Fe(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;this.promise.then((function(e){if(n._listeners){var t,r=n._listeners.length;for(t=0;t<r;t++)n._listeners[t](e);n._listeners=null}})),this.promise.then=function(e){var t,r=new Promise((function(e){n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e){n.reason||(n.reason=new ze(e),t(n.reason))}))}Fe.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},Fe.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},Fe.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},Fe.source=function(){var e;return{token:new Fe((function(t){e=t})),cancel:e}};var Je=Fe,He=N,Ve=N,$e=b,We=Me,Xe=Ce;var Ke=function e(t){var n=new We(t),r=$e(We.prototype.request,n);return Ve.extend(r,We.prototype,n),Ve.extend(r,n),r.create=function(n){return e(Xe(t,n))},r}(me);Ke.Axios=We,Ke.Cancel=G,Ke.CancelToken=Je,Ke.isCancel=ve,Ke.VERSION=Ae,Ke.all=function(e){return Promise.all(e)},Ke.spread=function(e){return function(t){return e.apply(null,t)}},Ke.isAxiosError=function(e){return He.isObject(e)&&!0===e.isAxiosError},v.exports=Ke,v.exports.default=Ke;var Ge=v.exports.create({baseURL:"https://www.fastmock.site",withCredentials:!0,timeout:1e4,method:"post"});Ge.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),Ge.interceptors.response.use((function(e){var t=e.data;if("0000"===t.code)return t.data||!0;o.error(t.desc||"请求异常，请稍后再试")}),(function(e){return o.error("网络出错了~"),Promise.reject(e)}));var Qe=function(n,r){var o,i=n.__vccOpts||n,a=function(e,n){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=t(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var o=0,i=function(){};return{s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,u=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return s=e.done,e},e:function(e){u=!0,a=e},f:function(){try{s||null==r.return||r.return()}finally{if(u)throw a}}}}(r);try{for(a.s();!(o=a.n()).done;){var s=e(o.value,2),u=s[0],c=s[1];i[u]=c}}catch(f){a.e(f)}finally{a.f()}return i},Ye=m("Update Store"),Ze=m("Request"),et=m("Page1"),tt=Qe({props:{title:String},setup:function(e){var t=y(),n=a(),r=function(){t.text="Welcome To Use Pinia",o.success("更新成功")},m=function(){Ge({url:"/mock/871b3e736e653b99374b7713e4011f9f/boss/user/list",method:"get",withCredentials:!1}).then((function(e){o.success("请求成功"),console.log("请求数据",e)}))},g=function(){n.push({path:"/page1"})};return s((function(e){})),function(t,n){var o=i;return u(),c(h,null,[f("h1",null,l(e.title),1),f("div",null,[d(o,{type:"primary",onClick:r},{default:p((function(){return[Ye]})),_:1}),d(o,{type:"link",onClick:m},{default:p((function(){return[Ze]})),_:1}),d(o,{type:"link",onClick:g},{default:p((function(){return[et]})),_:1})])],64)}}},[["__scopeId","data-v-3794a566"]]);n("default",{setup:function(e){return function(e,t){return u(),g(tt,{title:"Vue3 + vite"})}}})}}}))}();
