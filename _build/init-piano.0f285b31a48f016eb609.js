(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{onTemplateShow:()=>r});var n={};e.r(n),e.d(n,{onTemplateShow:()=>B});const o=(e,t=null)=>{var n,o;const r=`; ${document.cookie}`.split(`; ${e}=`);return 2===r.length?decodeURIComponent(null!==(n=null===(o=r.pop())||void 0===o?void 0:o.split(";").shift())&&void 0!==n?n:""):t},r=e=>{"OTN6797XUKB0"===e.templateId&&window.ga&&window.ga("send","event","adBlocker",location.pathname)},i=e=>{location.href=e},a=(e="/")=>((e,t)=>{const n=new URLSearchParams(t);return 0===Array.from(n.keys()).length?`${e}`:`${e}?${n}`})(e,{showUpgradeSuccessMessage:"true"}),s=()=>{const e=location.search.includes("CMP=ILC-refresh"),t="/"===location.pathname;return e&&t};let c,d;const l=()=>{if("undefined"==typeof window)return"prod"!=={NODE_ENV:"production",npm_config_domain:""}.SERVER;if("undefined"!=typeof window&&void 0===c){var e;const t=new URLSearchParams(null===(e=window)||void 0===e||null===(e=e.location)||void 0===e?void 0:e.search);c=t.has("__DEBUG__")}return c||"true"===o("__DEBUG__")},u=()=>{var e;return void 0===d&&(d=!0===(null===(e=window.JSGlobals)||void 0===e||null===(e=e.featureFlags)||void 0===e?void 0:e.feat__sentry)),d},p=(...e)=>{l()&&console.log(...e)},m=()=>{var e;null===(e=window.braze)||void 0===e||e.requestImmediateDataFlush((e=>{e||((...e)=>{const t=l(),n=u();t&&console.warn(...e),n&&Sentry.captureException(...e)})("Braze data flush was unsuccessful")}))};function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function w(e){var t=function(e,t){if("object"!=f(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!=f(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==f(t)?t:t+""}function y(e,t,n){return(t=w(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const v="indy",b=`${v}:spError`,h=async(e,t)=>new Promise((n=>{var o;null!==(o=JSGlobals)&&void 0!==o&&null!==(o=o.cmp)&&void 0!==o&&o.enabled?window.__tcfapi&&new Promise((e=>{JSGlobals.cmp.enabled?(document.getElementById("sp-script").error&&e(!1),window.addEventListener(b,(()=>{e(!1)})),window.__tcfapi("addEventListener",2,((t,n)=>{var o;if(n)if(["useractioncomplete","tcloaded"].includes(t.eventStatus))if(window.__tcfapi("removeEventListener",2,(()=>{}),t.listenerId),t.gdprApplies){if(p("Consent Or Pay: valid GDPR tcData ---\x3e",t),null!==(o=t.publisher)&&void 0!==o&&null!==(o=o.consents)&&void 0!==o&&o[1])return p('Consent Or Pay: tcData.publisher?.consents?.["1"] ---\x3e',t),void e(!0);e(!1)}else e(!0);else p("Consent Or Pay: !['useractioncomplete', 'tcloaded'].includes(tcData.eventStatus) ---\x3e",{tcData:t,eventStatus:t.eventStatus})}))):e(!0)})).then((o=>{o?window.__tcfapi("getCustomVendorConsents",2,(o=>{var r;const i=!(null===(r=o.grants)||void 0===r||null===(r=r[e])||void 0===r||!r.vendorGrant);p("CMP:getCustomVendorConsents",t,i),n(i)})):n(!1)})):n(!0)})),g=(e,{async:t=!0,defer:n=document.location.search.includes("___FORCE_DEFER___"),parent:o=document.body,attributes:r}={})=>{window.JSGlobals=window.JSGlobals||{};const i=window.JSGlobals.loadedJS=[];return new Promise(((a,s)=>{const c=(e instanceof Array?e:[e]).map((e=>i.includes(e)?Promise.resolve():new Promise(((a,s)=>{const c=((e,{id:t,async:n,defer:o,ok:r,error:i,attributes:a})=>{const s=document.createElement("script");return s.onload=r,s.onerror=i,t&&"undefined"!==t&&(s.id=t),n&&!o&&s.setAttribute("async",""),o&&s.setAttribute("defer",""),a&&a.forEach((([e,t])=>{s.setAttribute(e,t)})),s.src=e,s})(e,{async:t,defer:n,ok:a,error:s,attributes:r});o.appendChild(c),i.push(e)}))));return Promise.all(c).then(a,s)}))},S=()=>{var e;null===(e=document.querySelector(".notification-prompt"))||void 0===e||null===(e=e.classList)||void 0===e||e.remove("notification-prompt--show")},_=()=>{braze.openSession(),Notification.requestPermission(),S()};function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}const P=()=>{const e=o("esi_puid");var t;e&&(null===(t=window.braze)||void 0===t||t.changeUser(e))},O=async()=>{if(!!window.braze)return P(),!0;try{var e;if(!await h("5ed8c49c4b8ce4571c7ad801","braze"))return!1;const{braze:{sdkAPIKey:t="",sdkEndpoint:n=""}={}}=window.JSGlobals;return await g(["https://js.appboycdn.com/web-sdk/4.8/braze.min.js"]),null===(e=window.braze)||void 0===e||e.initialize(t,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({baseUrl:n,manageServiceWorkerExternally:!0,requireExplicitInAppMessageDismissal:!0,minimumIntervalBetweenTriggerActionsInSeconds:0},!1)),P(),(()=>{const e=document.querySelector(".notification-prompt__accept"),t=document.querySelector(".notification-prompt__deny");null==e||e.addEventListener("click",_),null==t||t.addEventListener("click",(()=>S()))})(),document.dispatchEvent(new CustomEvent("brazeLoaded")),!0}catch(e){return((...e)=>{const t=l(),n=u();t&&console.error(...e),n&&Sentry.captureException(...e)})("Error initializing braze sdk",e),!1}},C=async(e,t)=>{try{var n;if(await O())null===(n=window.braze)||void 0===n||n.logCustomEvent(e,t),m()}catch(t){console.error(`Error logging ${e} Braze event:`,t.message)}},j=(e,t,n)=>{const o=new Date;if(n){const e=n.days?24*n.days*60*60*1e3:60*n.hours*60*1e3;o.setTime(o.getTime()+e)}const r=[];r.push(`${e}=${encodeURIComponent(t)}`),r.push("path=/"),r.push("secure"),n&&r.push(`expires=${o.toGMTString()}`),document.cookie=r.join(";")},k=async()=>{s()||await(async()=>{await g(["https://cdn.tinypass.com/api/tinypass.min.js"])})()},I=()=>{const e=window.tp||[];return window.tp=e,e},U=(...e)=>{I().push(...e)},x=e=>{const t=new URLSearchParams;new URL(document.location.href).pathname.startsWith("/donations")&&(t.set("donations",""),t.set("regSourceMethod","Donations")),(async(e,t)=>{if(t){j("__pianoParams",JSON.stringify(t),{hours:1});const n=new URL(location.origin);n.pathname="/internal-api/subscription/term",n.searchParams.set("__amp_source_origin",location.origin),n.searchParams.set("termId",t.termId);const o=await fetch(n.toString(),{credentials:"same-origin"}),r=await o.json();j("__pianoTerm",JSON.stringify(r),{hours:1}),e.set("offerId",t.offerId),e.set("termId",t.termId)}location.href=`/register?${e.toString()}`})(t,e)},T=e=>{switch(e.eventName){case"openLogin":(()=>{var e;return null===(e=document.getElementById("loginButton"))||void 0===e?void 0:e.click()})();break;case"set-return-url":document.cookie=`ref_url=${location.origin}${location.pathname}; path=/;`;break;case"reg-return-url":localStorage.setItem("regReturnUrl",location.href)}};function D(e){const[t]=document.getElementsByClassName("tp-modal"),n=(new Date).toUTCString();t&&(t.scrollTop=0),document.cookie=`__pianoTerm=null; expires=${n}; path=/;`,document.cookie=`__pianoParams=null; expires=${n}; path=/;`,fetch("/internal-api/update-user-subscription-auto-renew",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}})}function A(){}function L(e){if("checkoutCompleted"!==e.state){const[e]=document.getElementsByClassName("payment-methods");e.classList.remove("hide")}}function J(e){0===e.viewsLeft&&"DefaultMeter"===e.meterName&&C("premium_meter_expired",{})}function G(){}function z(){}function $(){}function N(){}function R(e){if(-1===e.origin.indexOf("tinypass.com")&&-1===e.origin.indexOf("independent.co.uk")||!e.data)return;const t=function(e){if(null==e)return;if("object"==typeof e&&!Array.isArray(e))return e;if("string"==typeof e)try{return JSON.parse(e)}catch{return}}(e.data);if(t&&"completeUpgradePurchase"===t.event)i(a(window.location.href))}const B=e=>{if(window.JSGlobals.MOCK_ENV&&"modal"===e.displayMode){const e=I();if(Array.isArray(e))return;e.template.close()}};(async(e=!1)=>{const r=e?n:t,{onTemplateShow:i}=r;(()=>{const e="true"===o("feat__force_piano_prod"),t="development"===window.JSGlobals.pianoEnvironment&&!e;U(["setAid",window.JSGlobals.piano.pianoAppId],...t?[]:[["setCxenseSiteId","1134082880659765068"]],["setEndpoint",window.JSGlobals.piano.pianoEndpoint],["setUseTinypassAccounts",!1],["setSandbox",t],["setDebug",!1])})();const a=(e=>[["addHandler","checkoutComplete",D],["addHandler","checkoutClose",L],["addHandler","checkoutCustomEvent",A],["addHandler","loginRequired",x],["addHandler","loginSuccess",z],["addHandler","meterExpired",J],["addHandler","meterActive",G],["addHandler","experienceExecute",$],["addHandler","experienceExecutionFailed",N],["addHandler","showTemplate",e],["addHandler","customEvent",T],["setUseTinypassAccounts",!1],["setUsePianoIdUserProvider",!1],["setUsePianoIdLiteUserProvider",!0],["setExternalJWT",o("esi_auth")]])(i);U(...a),window.addEventListener("message",R),await k()})()})();