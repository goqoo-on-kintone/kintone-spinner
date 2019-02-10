!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.Spinner=n():e.Spinner=n()}(window,function(){return function(e){var n={};function r(t){if(n[t])return n[t].exports;var m=n[t]={i:t,l:!1,exports:{}};return e[t].call(m.exports,m,m.exports,r),m.l=!0,m.exports}return r.m=e,r.c=n,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var m in e)r.d(t,m,function(n){return e[n]}.bind(null,m));return t},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="",r(r.s=0)}([function(e,n,r){"use strict";r.r(n);r(1);n.default=class{constructor(){this.spinner=document.createElement("div"),this.spinner.innerHTML='\n    <div id="spinner" class="kuc-spinner-outer">\n      <div class="kuc-spinner">\n        <div class="kuc-loader" />\n      </div>\n    </div>',this.spinner.style.visibility="hidden"}render(){return this.spinner}show(){this.spinner.style.visibility="visible"}hide(){this.spinner.style.visibility="hidden"}}},function(e,n,r){var t=r(2);"string"==typeof t&&(t=[[e.i,t,""]]);var m={hmr:!0,transform:void 0,insertInto:void 0};r(4)(t,m);t.locals&&(e.exports=t.locals)},function(e,n,r){(e.exports=r(3)(!1)).push([e.i,".kuc-spinner-outer {\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.2);\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 9999;\n}\n.kuc-spinner {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n.kuc-loader {\n    margin: 100px auto;\n    font-size: 12px;\n    width: 1em;\n    height: 1em;\n    border-radius: 50%;\n    position: relative;\n    text-indent: -9999em;\n    -webkit-animation: kuc-load 1.1s infinite ease;\n    animation: kuc-load 1.1s infinite ease;\n    -webkit-transform: translateZ(0);\n    -ms-transform: translateZ(0);\n    transform: translateZ(0);\n}\n@-webkit-keyframes kuc-load {\n    0%, 100% {\n        box-shadow: 0em -2.6em 0em 0em #a0dcfc, 1.8em -1.8em 0 0em rgba(160,220,252, 0.2), 2.5em 0em 0 0em rgba(160,220,252, 0.2), 1.75em 1.75em 0 0em rgba(160,220,252, 0.2), 0em 2.5em 0 0em rgba(160,220,252, 0.2), -1.8em 1.8em 0 0em rgba(160,220,252, 0.2), -2.6em 0em 0 0em rgba(160,220,252, 0.5), -1.8em -1.8em 0 0em rgba(160,220,252, 0.7);\n   }\n    12.5% {\n        box-shadow: 0em -2.6em 0em 0em rgba(160,220,252, 0.7), 1.8em -1.8em 0 0em #a0dcfc, 2.5em 0em 0 0em rgba(160,220,252, 0.2), 1.75em 1.75em 0 0em rgba(160,220,252, 0.2), 0em 2.5em 0 0em rgba(160,220,252, 0.2), -1.8em 1.8em 0 0em rgba(160,220,252, 0.2), -2.6em 0em 0 0em rgba(160,220,252, 0.2), -1.8em -1.8em 0 0em rgba(160,220,252, 0.5);\n   }\n    25% {\n        box-shadow: 0em -2.6em 0em 0em rgba(160,220,252, 0.5), 1.8em -1.8em 0 0em rgba(160,220,252, 0.7), 2.5em 0em 0 0em #a0dcfc, 1.75em 1.75em 0 0em rgba(160,220,252, 0.2), 0em 2.5em 0 0em rgba(160,220,252, 0.2), -1.8em 1.8em 0 0em rgba(160,220,252, 0.2), -2.6em 0em 0 0em rgba(160,220,252, 0.2), -1.8em -1.8em 0 0em rgba(160,220,252, 0.2);\n   }\n    37.5% {\n        box-shadow: 0em -2.6em 0em 0em rgba(160,220,252, 0.2), 1.8em -1.8em 0 0em rgba(160,220,252, 0.5), 2.5em 0em 0 0em rgba(160,220,252, 0.7), 1.75em 1.75em 0 0em #a0dcfc, 0em 2.5em 0 0em rgba(160,220,252, 0.2), -1.8em 1.8em 0 0em rgba(160,220,252, 0.2), -2.6em 0em 0 0em rgba(160,220,252, 0.2), -1.8em -1.8em 0 0em rgba(160,220,252, 0.2);\n   }\n    50% {\n        box-shadow: 0em -2.6em 0em 0em rgba(160,220,252, 0.2), 1.8em -1.8em 0 0em rgba(160,220,252, 0.2), 2.5em 0em 0 0em rgba(160,220,252, 0.5), 1.75em 1.75em 0 0em rgba(160,220,252, 0.7), 0em 2.5em 0 0em #a0dcfc, -1.8em 1.8em 0 0em rgba(160,220,252, 0.2), -2.6em 0em 0 0em rgba(160,220,252, 0.2), -1.8em -1.8em 0 0em rgba(160,220,252, 0.2);\n   }\n    62.5% {\n        box-shadow: 0em -2.6em 0em 0em rgba(160,220,252, 0.2), 1.8em -1.8em 0 0em rgba(160,220,252, 0.2), 2.5em 0em 0 0em rgba(160,220,252, 0.2), 1.75em 1.75em 0 0em rgba(160,220,252, 0.5), 0em 2.5em 0 0em rgba(160,220,252, 0.7), -1.8em 1.8em 0 0em #a0dcfc, -2.6em 0em 0 0em rgba(160,220,252, 0.2), -1.8em -1.8em 0 0em rgba(160,220,252, 0.2);\n   }\n    75% {\n        box-shadow: 0em -2.6em 0em 0em rgba(160,220,252, 0.2), 1.8em -1.8em 0 0em rgba(160,220,252, 0.2), 2.5em 0em 0 0em rgba(160,220,252, 0.2), 1.75em 1.75em 0 0em rgba(160,220,252, 0.2), 0em 2.5em 0 0em rgba(160,220,252, 0.5), -1.8em 1.8em 0 0em rgba(160,220,252, 0.7), -2.6em 0em 0 0em #a0dcfc, -1.8em -1.8em 0 0em rgba(160,220,252, 0.2);\n   }\n    87.5% {\n        box-shadow: 0em -2.6em 0em 0em rgba(160,220,252, 0.2), 1.8em -1.8em 0 0em rgba(160,220,252, 0.2), 2.5em 0em 0 0em rgba(160,220,252, 0.2), 1.75em 1.75em 0 0em rgba(160,220,252, 0.2), 0em 2.5em 0 0em rgba(160,220,252, 0.2), -1.8em 1.8em 0 0em rgba(160,220,252, 0.5), -2.6em 0em 0 0em rgba(160,220,252, 0.7), -1.8em -1.8em 0 0em #a0dcfc;\n   }\n}\n@keyframes kuc-load {\n    0%, 100% {\n        box-shadow: 0em -2.6em 0em 0em #a0dcfc, 1.8em -1.8em 0 0em rgba(160,220,252, 0.2), 2.5em 0em 0 0em rgba(160,220,252, 0.2), 1.75em 1.75em 0 0em rgba(160,220,252, 0.2), 0em 2.5em 0 0em rgba(160,220,252, 0.2), -1.8em 1.8em 0 0em rgba(160,220,252, 0.2), -2.6em 0em 0 0em rgba(160,220,252, 0.5), -1.8em -1.8em 0 0em rgba(160,220,252, 0.7);\n   }\n    12.5% {\n        box-shadow: 0em -2.6em 0em 0em rgba(160,220,252, 0.7), 1.8em -1.8em 0 0em #a0dcfc, 2.5em 0em 0 0em rgba(160,220,252, 0.2), 1.75em 1.75em 0 0em rgba(160,220,252, 0.2), 0em 2.5em 0 0em rgba(160,220,252, 0.2), -1.8em 1.8em 0 0em rgba(160,220,252, 0.2), -2.6em 0em 0 0em rgba(160,220,252, 0.2), -1.8em -1.8em 0 0em rgba(160,220,252, 0.5);\n   }\n    25% {\n        box-shadow: 0em -2.6em 0em 0em rgba(160,220,252, 0.5), 1.8em -1.8em 0 0em rgba(160,220,252, 0.7), 2.5em 0em 0 0em #a0dcfc, 1.75em 1.75em 0 0em rgba(160,220,252, 0.2), 0em 2.5em 0 0em rgba(160,220,252, 0.2), -1.8em 1.8em 0 0em rgba(160,220,252, 0.2), -2.6em 0em 0 0em rgba(160,220,252, 0.2), -1.8em -1.8em 0 0em rgba(160,220,252, 0.2);\n   }\n    37.5% {\n        box-shadow: 0em -2.6em 0em 0em rgba(160,220,252, 0.2), 1.8em -1.8em 0 0em rgba(160,220,252, 0.5), 2.5em 0em 0 0em rgba(160,220,252, 0.7), 1.75em 1.75em 0 0em #a0dcfc, 0em 2.5em 0 0em rgba(160,220,252, 0.2), -1.8em 1.8em 0 0em rgba(160,220,252, 0.2), -2.6em 0em 0 0em rgba(160,220,252, 0.2), -1.8em -1.8em 0 0em rgba(160,220,252, 0.2);\n   }\n    50% {\n        box-shadow: 0em -2.6em 0em 0em rgba(160,220,252, 0.2), 1.8em -1.8em 0 0em rgba(160,220,252, 0.2), 2.5em 0em 0 0em rgba(160,220,252, 0.5), 1.75em 1.75em 0 0em rgba(160,220,252, 0.7), 0em 2.5em 0 0em #a0dcfc, -1.8em 1.8em 0 0em rgba(160,220,252, 0.2), -2.6em 0em 0 0em rgba(160,220,252, 0.2), -1.8em -1.8em 0 0em rgba(160,220,252, 0.2);\n   }\n    62.5% {\n        box-shadow: 0em -2.6em 0em 0em rgba(160,220,252, 0.2), 1.8em -1.8em 0 0em rgba(160,220,252, 0.2), 2.5em 0em 0 0em rgba(160,220,252, 0.2), 1.75em 1.75em 0 0em rgba(160,220,252, 0.5), 0em 2.5em 0 0em rgba(160,220,252, 0.7), -1.8em 1.8em 0 0em #a0dcfc, -2.6em 0em 0 0em rgba(160,220,252, 0.2), -1.8em -1.8em 0 0em rgba(160,220,252, 0.2);\n   }\n    75% {\n        box-shadow: 0em -2.6em 0em 0em rgba(160,220,252, 0.2), 1.8em -1.8em 0 0em rgba(160,220,252, 0.2), 2.5em 0em 0 0em rgba(160,220,252, 0.2), 1.75em 1.75em 0 0em rgba(160,220,252, 0.2), 0em 2.5em 0 0em rgba(160,220,252, 0.5), -1.8em 1.8em 0 0em rgba(160,220,252, 0.7), -2.6em 0em 0 0em #a0dcfc, -1.8em -1.8em 0 0em rgba(160,220,252, 0.2);\n   }\n    87.5% {\n        box-shadow: 0em -2.6em 0em 0em rgba(160,220,252, 0.2), 1.8em -1.8em 0 0em rgba(160,220,252, 0.2), 2.5em 0em 0 0em rgba(160,220,252, 0.2), 1.75em 1.75em 0 0em rgba(160,220,252, 0.2), 0em 2.5em 0 0em rgba(160,220,252, 0.2), -1.8em 1.8em 0 0em rgba(160,220,252, 0.5), -2.6em 0em 0 0em rgba(160,220,252, 0.7), -1.8em -1.8em 0 0em #a0dcfc;\n   }\n}\n",""])},function(e,n,r){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var r=function(e,n){var r=e[1]||"",t=e[3];if(!t)return r;if(n&&"function"==typeof btoa){var m=(o=t,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),a=t.sources.map(function(e){return"/*# sourceURL="+t.sourceRoot+e+" */"});return[r].concat(a).concat([m]).join("\n")}var o;return[r].join("\n")}(n,e);return n[2]?"@media "+n[2]+"{"+r+"}":r}).join("")},n.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var t={},m=0;m<this.length;m++){var a=this[m][0];null!=a&&(t[a]=!0)}for(m=0;m<e.length;m++){var o=e[m];null!=o[0]&&t[o[0]]||(r&&!o[2]?o[2]=r:r&&(o[2]="("+o[2]+") and ("+r+")"),n.push(o))}},n}},function(e,n,r){var t,m,a={},o=(t=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===m&&(m=t.apply(this,arguments)),m}),i=function(e){var n={};return function(e,r){if("function"==typeof e)return e();if(void 0===n[e]){var t=function(e,n){return n?n.querySelector(e):document.querySelector(e)}.call(this,e,r);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}}(),s=null,c=0,f=[],b=r(5);function u(e,n){for(var r=0;r<e.length;r++){var t=e[r],m=a[t.id];if(m){m.refs++;for(var o=0;o<m.parts.length;o++)m.parts[o](t.parts[o]);for(;o<t.parts.length;o++)m.parts.push(v(t.parts[o],n))}else{var i=[];for(o=0;o<t.parts.length;o++)i.push(v(t.parts[o],n));a[t.id]={id:t.id,refs:1,parts:i}}}}function d(e,n){for(var r=[],t={},m=0;m<e.length;m++){var a=e[m],o=n.base?a[0]+n.base:a[0],i={css:a[1],media:a[2],sourceMap:a[3]};t[o]?t[o].parts.push(i):r.push(t[o]={id:o,parts:[i]})}return r}function l(e,n){var r=i(e.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var t=f[f.length-1];if("top"===e.insertAt)t?t.nextSibling?r.insertBefore(n,t.nextSibling):r.appendChild(n):r.insertBefore(n,r.firstChild),f.push(n);else if("bottom"===e.insertAt)r.appendChild(n);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var m=i(e.insertAt.before,r);r.insertBefore(n,m)}}function g(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var n=f.indexOf(e);n>=0&&f.splice(n,1)}function p(e){var n=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var t=function(){0;return r.nc}();t&&(e.attrs.nonce=t)}return h(n,e.attrs),l(e,n),n}function h(e,n){Object.keys(n).forEach(function(r){e.setAttribute(r,n[r])})}function v(e,n){var r,t,m,a;if(n.transform&&e.css){if(!(a="function"==typeof n.transform?n.transform(e.css):n.transform.default(e.css)))return function(){};e.css=a}if(n.singleton){var o=c++;r=s||(s=p(n)),t=x.bind(null,r,o,!1),m=x.bind(null,r,o,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=function(e){var n=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",h(n,e.attrs),l(e,n),n}(n),t=function(e,n,r){var t=r.css,m=r.sourceMap,a=void 0===n.convertToAbsoluteUrls&&m;(n.convertToAbsoluteUrls||a)&&(t=b(t));m&&(t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(m))))+" */");var o=new Blob([t],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(o),i&&URL.revokeObjectURL(i)}.bind(null,r,n),m=function(){g(r),r.href&&URL.revokeObjectURL(r.href)}):(r=p(n),t=function(e,n){var r=n.css,t=n.media;t&&e.setAttribute("media",t);if(e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}.bind(null,r),m=function(){g(r)});return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else m()}}e.exports=function(e,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(n=n||{}).attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=o()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var r=d(e,n);return u(r,n),function(e){for(var t=[],m=0;m<r.length;m++){var o=r[m];(i=a[o.id]).refs--,t.push(i)}e&&u(d(e,n),n);for(m=0;m<t.length;m++){var i;if(0===(i=t[m]).refs){for(var s=0;s<i.parts.length;s++)i.parts[s]();delete a[i.id]}}}};var y,w=(y=[],function(e,n){return y[e]=n,y.filter(Boolean).join("\n")});function x(e,n,r,t){var m=r?"":t.css;if(e.styleSheet)e.styleSheet.cssText=w(n,m);else{var a=document.createTextNode(m),o=e.childNodes;o[n]&&e.removeChild(o[n]),o.length?e.insertBefore(a,o[n]):e.appendChild(a)}}},function(e,n){e.exports=function(e){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var r=n.protocol+"//"+n.host,t=r+n.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,n){var m,a=n.trim().replace(/^"(.*)"$/,function(e,n){return n}).replace(/^'(.*)'$/,function(e,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)?e:(m=0===a.indexOf("//")?a:0===a.indexOf("/")?r+a:t+a.replace(/^\.\//,""),"url("+JSON.stringify(m)+")")})}}])});