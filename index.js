!function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=new Headers;r.append("Accept","text/html,application/xhtml+xml,application/xml"),e.findHTML=function(t){return new Promise(function(e,n){window.fetch(t,{method:"GET",mode:"no-cors",cache:"default",credentials:"same-origin",headers:r}).then(function(t){return e(t)}).catch(function(t){return n(t)})})},e.init=function(){window.__paper={router:{default:null}}}},function(t,e,n){"use strict";var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(i,o){function a(t){try{s(r.next(t))}catch(t){o(t)}}function c(t){try{s(r.throw(t))}catch(t){o(t)}}function s(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(a,c)}s((r=r.apply(t,e||[])).next())})},i=this&&this.__generator||function(t,e){function n(t){return function(e){return r([t,e])}}function r(n){if(i)throw new TypeError("Generator is already executing.");for(;s;)try{if(i=1,o&&(a=o[2&n[0]?"return":n[0]?"throw":"next"])&&!(a=a.call(o,n[1])).done)return a;switch(o=0,a&&(n=[0,a.value]),n[0]){case 0:case 1:a=n;break;case 4:return s.label++,{value:n[1],done:!1};case 5:s.label++,o=n[1],n=[0];continue;case 7:n=s.ops.pop(),s.trys.pop();continue;default:if(a=s.trys,!(a=a.length>0&&a[a.length-1])&&(6===n[0]||2===n[0])){s=0;continue}if(3===n[0]&&(!a||n[1]>a[0]&&n[1]<a[3])){s.label=n[1];break}if(6===n[0]&&s.label<a[1]){s.label=a[1],a=n;break}if(a&&s.label<a[2]){s.label=a[2],s.ops.push(n);break}a[2]&&s.ops.pop(),s.trys.pop();continue}n=e.call(t,s)}catch(t){n=[6,t],o=0}finally{i=a=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var i,o,a,c,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return c={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c},o=this;Object.defineProperty(e,"__esModule",{value:!0});var a=window.__config,c=window.__catalogs,s=n(2),u=n(0),l=n(7),f=n(8),d=function(t,e){return r(o,void 0,void 0,function(){var t,n,r;return i(this,function(i){switch(i.label){case 0:return t=new f.EventHub,n=e.getElementById("side"),[4,s.side(c,a)];case 1:return r=i.sent(),r.forEach(function(t){return n.appendChild(t)}),[4,s.event(a,t)];case 2:return i.sent(),new l.Router(e.getElementById("container"),a.docPath).listen(t),[2]}})})};window.onload=function(){u.init(),d(window,document).then()}},function(t,e,n){"use strict";var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(i,o){function a(t){try{s(r.next(t))}catch(t){o(t)}}function c(t){try{s(r.throw(t))}catch(t){o(t)}}function s(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(a,c)}s((r=r.apply(t,e||[])).next())})},i=this&&this.__generator||function(t,e){function n(t){return function(e){return r([t,e])}}function r(n){if(i)throw new TypeError("Generator is already executing.");for(;s;)try{if(i=1,o&&(a=o[2&n[0]?"return":n[0]?"throw":"next"])&&!(a=a.call(o,n[1])).done)return a;switch(o=0,a&&(n=[0,a.value]),n[0]){case 0:case 1:a=n;break;case 4:return s.label++,{value:n[1],done:!1};case 5:s.label++,o=n[1],n=[0];continue;case 7:n=s.ops.pop(),s.trys.pop();continue;default:if(a=s.trys,!(a=a.length>0&&a[a.length-1])&&(6===n[0]||2===n[0])){s=0;continue}if(3===n[0]&&(!a||n[1]>a[0]&&n[1]<a[3])){s.label=n[1];break}if(6===n[0]&&s.label<a[1]){s.label=a[1],a=n;break}if(a&&s.label<a[2]){s.label=a[2],s.ops.push(n);break}a[2]&&s.ops.pop(),s.trys.pop();continue}n=e.call(t,s)}catch(t){n=[6,t],o=0}finally{i=a=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var i,o,a,c,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return c={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c},o=this;Object.defineProperty(e,"__esModule",{value:!0});var a=n(3),c=n(4),s=n(5),u=n(6),l=function(t){window.__paper.router.default||(window.__paper.router.default=t)},f=function(t){return t.replace(".md","")},d=function(t,e,n){return r(o,void 0,void 0,function(){var r,o,a,c,s,u,h;return i(this,function(i){switch(i.label){case 0:r=n.createElement("ul"),o=0,a=t,i.label=1;case 1:return o<a.length?(c=a[o],s=n.createElement("li"),u=(c.showPath+c.name).replace(e,""),c.children&&c.children.length>0?(s.innerHTML='<p class="chapter dir"><a>'+f(c.name)+"</a></p>",s.classList.add("sub-list-container"),[4,d(c.children,e,n)]):[3,3]):[3,6];case 2:return h=i.sent(),h.classList.add("sub-list"),s.appendChild(h),[3,4];case 3:l(u),s.innerHTML='<p class="chapter link"><a href="#'+u+'">'+f(c.name)+"</a></p>",i.label=4;case 4:r.appendChild(s),i.label=5;case 5:return o++,[3,1];case 6:return[2,r]}})})},h=function(t){document.title=t.title;var e=document.createElement("div");return e.classList.add("side-title"),e.innerHTML="<h2>"+t.title+"</h2>",e};e.side=function(t,e){return r(o,void 0,void 0,function(){var n,r;return i(this,function(i){switch(i.label){case 0:return n=h(e),[4,d(t,e.__user_source_path,document)];case 1:return r=i.sent(),r.classList.add("side-list"),[2,[n,r]]}})})};var p=function(t){return r(o,void 0,void 0,function(){var e,n,r,o,a;return i(this,function(i){return e=document.querySelectorAll(".sub-list-container"),n=document.querySelectorAll(".sub-list"),r=Array.from(n),o=37,r.some(function(t){var e=t.querySelector("li");return e&&e.offsetHeight&&(o=e.offsetHeight),!!e}),a=function(t,e){var n=function(t){var e=t.querySelectorAll("li");return(Array.from(e).length||0)*o},r=t.querySelector(".sub-list"),i=n(r),a=r.offsetHeight>0,c=3,s=function(t){if(!(c<=0)){c--;var e=t.parentElement,r="ul"===e.nodeName.toLowerCase(),o=e.classList.contains("sub-list");if(!r||!o)return s(t.parentElement);var u=n(e);e.style.height=(a?u:u+i)+"px",c++,s(t.parentElement)}};s(r),r.style.height=e?i+"px":(a?0:i)+"px"},Array.from(e).forEach(function(e){t.expandAll&&a(e,!0),e.addEventListener("click",function(){return a(e)})}),r.forEach(function(t){t.addEventListener("click",function(t){return t.stopPropagation()})}),[2]})})},v=function(t,e){var n=function(t){var n=t.split("#/").reverse()[0];return n=n.replace("static/","").replace(".html","").replace("//","/").replace("//","/"),n.split("/").map(function(t){return t.replace(/\//g,"").replace(/^\d+_/g,"")}).filter(function(t){return!!t}).map(function(t){return e.alias[t]||t}).join(" - ")};t.listen("container-changed",function(t){var r=t.detail;document.title=n(r)+" - "+e.title})};e.event=function(t,e){return r(o,void 0,void 0,function(){return i(this,function(n){switch(n.label){case 0:return[4,p(t)];case 1:return n.sent(),t.backToTop&&new a.BackToTop,t.indicator&&new s.Indicator(e),new c.Highlight(e),new u.Responsive,v(e,t),[2]}})})}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(){this.init()}return t.toggleBackButton=function(t,e){t.classList.toggle("show",e)},t.handleBackButton=function(t){t.scrollTop=0},t.prototype.makeBackButtno=function(){var t=document.createElement("div");return t.classList.add("back-to-top"),t.innerHTML='<div class="back-to-top-container"><span>Back</span></div>',t},t.prototype.init=function(){var e=document.querySelector("#container"),n=document.querySelector(".main"),r=this.makeBackButtno();n.appendChild(r),r.addEventListener("click",function(){t.handleBackButton(e)}),e.addEventListener("scroll",function(e){t.toggleBackButton(r,e.target.scrollTop>300)})},t}();e.BackToTop=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t){t.listen("container-changed",this.handle)}return t.prototype.handle=function(){if(window.hljs){var t=document.querySelectorAll("pre");Array.from(t).forEach(function(t){window.hljs.highlightBlock(t)})}},t}();e.Highlight=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t){var e=this;this.init(),t.listen("container-will-change",function(){return e.willChange()}),t.listen("container-changed",function(){return e.changed()})}return t.toggleIndicator=function(t,e){t&&t.classList.toggle("show",e)},t.prototype.willChange=function(){t.toggleIndicator(this.indicatorElement,!0)},t.prototype.changed=function(){t.toggleIndicator(this.indicatorElement,!1)},t.prototype.makeIndicatorElement=function(){var t=document.createElement("div");return t.classList.add("loading-indicator"),t.innerHTML='<div class="loading-indicator-container"><span>Loading</span></div>',t},t.prototype.init=function(){var t=document.querySelector(".main");this.indicatorElement=this.makeIndicatorElement(),t.appendChild(this.indicatorElement)},t}();e.Indicator=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(){this.trunks=[],this.lastSize="",this.init(),this.initMobileEvent()}return t.TrunksClasses=function(){return[".main",".side-position","#side",".container-position","#container"]},t.MakeSize=function(t){return t<600?"xs":t<960?"sm":t<1300?"md":t<1920?"lg":"xl"},t.prototype.init=function(){var e=this,n=document.body;this.trunks=t.TrunksClasses().map(function(t){return n.querySelector(t)}).filter(function(t){return!!t}).concat([n]),window.addEventListener("resize",function(){return e.detector()}),this.detector()},t.prototype.detector=function(){var e=this,n=t.MakeSize(window.innerWidth);if(n!==this.lastSize){try{this.trunks.forEach(function(t){t.classList.add(n),e.lastSize&&t.classList.remove(e.lastSize)})}catch(t){}this.lastSize=n}},t.prototype.initMobileEvent=function(){var t=document.querySelector("#side");t.addEventListener("click",function(){(t.classList.contains("xs")||t.classList.contains("sm"))&&t.classList.toggle("active")})},t}();e.Responsive=r},function(t,e,n){"use strict";var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(i,o){function a(t){try{s(r.next(t))}catch(t){o(t)}}function c(t){try{s(r.throw(t))}catch(t){o(t)}}function s(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(a,c)}s((r=r.apply(t,e||[])).next())})},i=this&&this.__generator||function(t,e){function n(t){return function(e){return r([t,e])}}function r(n){if(i)throw new TypeError("Generator is already executing.");for(;s;)try{if(i=1,o&&(a=o[2&n[0]?"return":n[0]?"throw":"next"])&&!(a=a.call(o,n[1])).done)return a;switch(o=0,a&&(n=[0,a.value]),n[0]){case 0:case 1:a=n;break;case 4:return s.label++,{value:n[1],done:!1};case 5:s.label++,o=n[1],n=[0];continue;case 7:n=s.ops.pop(),s.trys.pop();continue;default:if(a=s.trys,!(a=a.length>0&&a[a.length-1])&&(6===n[0]||2===n[0])){s=0;continue}if(3===n[0]&&(!a||n[1]>a[0]&&n[1]<a[3])){s.label=n[1];break}if(6===n[0]&&s.label<a[1]){s.label=a[1],a=n;break}if(a&&s.label<a[2]){s.label=a[2],s.ops.push(n);break}a[2]&&s.ops.pop(),s.trys.pop();continue}n=e.call(t,s)}catch(t){n=[6,t],o=0}finally{i=a=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var i,o,a,c,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return c={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c};Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),a=function(){function t(t,e){void 0===e&&(e="/"),this.links=[],this.slotElement=t,this.docPath=e,this.origin=window.location.origin+window.location.pathname,this.initList()}return t.removeHashTag=function(t){return void 0===t&&(t=""),t.startsWith("#")?t.substr(1,t.length):t},t.removeSlash=function(t){return t.replace(/\/\//g,"/")},t.replaceSuffix=function(t){return(t=t.split(".md")[0])+".html"},t.prototype.listen=function(t){var e=this;this.eventHub=t,window.onhashchange=function(){return e._parseHash()},this._parseHash()},t.prototype.initList=function(){var t=this,e=document.querySelector(".side-list"),n=e.querySelectorAll("a");Array.from(n).forEach(function(e){t.links.push({el:e,href:e.getAttribute("href")})})},t.prototype.toggleList=function(t){var e=this.links.find(function(e){return e.href==="#"+t});e&&(this.lastLink&&this.lastLink.parentElement.classList.remove("active"),e.el.parentElement.classList.add("active"),this.lastLink=e.el)},t.prototype._parseHash=function(){this.eventHub.dispath("container-will-change");var e=t.removeHashTag(window.location.hash);this.toggleList(e);var n="/static/"+this.docPath+e;n.endsWith("/")&&(n+=window.__paper.router.default);var r=t.replaceSuffix(n);this._loader(t.removeSlash(r)).then()},t.prototype._loader=function(t){return r(this,void 0,void 0,function(){var e,n,r;return i(this,function(i){switch(i.label){case 0:return[4,o.findHTML(this.origin+t)];case 1:return e=i.sent(),n=document.createElement("div"),n.classList.add("container-inner"),r=n,[4,e.text()];case 2:return r.innerHTML=i.sent(),this.slotElement.innerHTML="",this.slotElement.appendChild(n),this.eventHub.dispath("container-changed",t),[2]}})})},t}();e.Router=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(){this.eventRecords=[],this.source=document.createTextNode("")}return t.prototype.dispath=function(t,e){var n=new CustomEvent(t,Object.assign({bubbles:!0,cancelable:!0},{detail:e}));this.source.dispatchEvent(n)},t.prototype.listen=function(t,e){this.eventRecords.find(function(n){return n.type===t&&n.handle===e})||(this.source.addEventListener(t,e),this.eventRecords.push({type:t,handle:e}))},t.prototype.remove=function(t,e){var n=this;if(e)return this.removeOne(t,e);this.eventRecords.filter(function(e){return e.type===t}).forEach(function(t){return n.source.removeEventListener(t.type,t.handle)})},t.prototype.removeAll=function(){var t=this;this.eventRecords.forEach(function(e){return t.source.removeEventListener(e.type,e.handle)})},t.prototype.removeOne=function(t,e){this.eventRecords.find(function(n){return n.type===t&&n.handle===e})&&this.source.removeEventListener(t,e)},t}();e.EventHub=r}]);