/*! License information can be found in https://cdn.jsdelivr.net/npm/@hodgef/slate-dark-theme@3.0.19/build/post.js.LICENSE.txt */
var PRSSComponent=function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=15)}([function(e,t){e.exports=React},function(e,t){e.exports=PRSS},function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=o(e,l(r)))}return e}function l(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)r.call(e,n)&&e[n]&&(t=o(t,n));return t}function o(e,t){return t?e?e+" "+t:e+t:e}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},function(e,t,r){"use strict";var n=r(0),a=r.n(n),l=r(1),o=r(2),i=r.n(o);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t,r){var n;return n=function(e,t){if("object"!=c(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==c(n)?n:String(n))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}t.a=function(e){var t=e.name,r=e.renderItem,o=e.renderItemLabel,c=e.ulClassName,m=void 0===c?"":c,s=e.mode,d=e.style,f=void 0===d?{}:d,v=e.prependedComponent,p=void 0===v?null:v,g=l.getProp("site.menus.".concat(t));if(!g)return null;var y,b=(y=[],g.forEach((function e(t){t&&(y.push(t),t.children&&t.children.forEach(e))})),y),E=function e(t){return("prev-next"===s?h:r||S)(t,e)},h=function(e,t){var r=b.findIndex((function(e){return e.key===l.getProp("item").uuid})),n=b[r-1]?b[r-1]:null,c=b[r+1]?b[r+1]:null,u=!!n&&n.key===e.key,m=!!c&&c.key===e.key;if(!u&&!m)return null;var s=l.getItem(e.key);return a.a.createElement("li",{className:i()({"menu-item-prev":u,"menu-item-next":m}),title:e.title||(null==s?void 0:s.title),key:e.key},o?o(s):a.a.createElement("a",{href:null==s?void 0:s.url},a.a.createElement("span",{className:"menu-item-title"},u?"Previous":"Next"),a.a.createElement("span",{className:"menu-item-label"},e.title||(null==s?void 0:s.title))))},N=function(e){var t=l.getProp("item").uuid;return e.key===t||l.hasItem(t,e)},S=function(e,t){var r=l.getItem(e.key);return a.a.createElement("li",{title:e.title||(null==r?void 0:r.title),className:i()({active:e.key===l.getProp("item").uuid,expanded:N(e)}),key:e.key},o?o(r):a.a.createElement("a",{href:null==r?void 0:r.url},e.title||(null==r?void 0:r.title)),e.children&&!!e.children.length&&a.a.createElement("ul",null,e.children.map(t)))},A="prev-next"===s?b.map(E):g.map(E);return A.filter((function(e){return!!e})).length?a.a.createElement(n.Fragment,null,p,a.a.createElement("ul",{className:i()("page-menu",m,u({},"mode-".concat(s),s)),style:f},A)):null}},function(e,t,r){"use strict";var n=r(0),a=r.n(n),l=r(1);t.a=function(){var e=l.getProp("vars"),t=e.footerLeft,r=e.footerRight,n=l.getProp("site").title;return a.a.createElement("footer",{className:"page-footer"},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col col-12 col-md-6"},t?a.a.createElement("div",{dangerouslySetInnerHTML:{__html:t}}):a.a.createElement("span",null,"© ",n)),a.a.createElement("div",{className:"col col-12 col-md-6 mt-3 mt-md-0 d-flex justify-content-md-end"},r?a.a.createElement("div",{dangerouslySetInnerHTML:{__html:r}}):a.a.createElement("a",{href:"https://prss.io",className:"d-flex align-items-center footer-shoutout",target:"_blank",rel:"noopener",title:"Powered by PRSS Site Creator"},a.a.createElement("img",{className:"prss-footer-image mr-1",src:"data:image/png;base64,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",width:15}),a.a.createElement("span",{className:"font-weight-bold prss-tag"},"PRSS Site Creator"))))))}},function(e,t,r){"use strict";var n=r(0),a=r.n(n),l=r(2),o=r.n(l),i=r(1),c=r(3);function u(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||s(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,l,o,i=[],c=!0,u=!1;try{if(l=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=l.call(r)).done)&&(i.push(n.value),i.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=r.return&&(o=r.return(),Object(o)!==o))return}finally{if(u)throw a}}return i}}(e,t)||s(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){if(e){if("string"==typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}t.a=function(e){var t=e.onScrollCallback,r=e.onResizeCallback,l=i.getProp("vars").logoImageUrl,s=i.getProp("site"),d=s.title,f=(s.url,i.getProp("item").uuid),v=m(Object(n.useState)(0),2),p=v[0],g=v[1],y=m(Object(n.useState)(!1),2),b=y[0],E=y[1],h=m(Object(n.useState)(!1),2),N=h[0],S=h[1],A=Object(n.useRef)(null);Object(n.useEffect)((function(){var e=function(e){var r=e.target.documentElement.scrollTop;t&&t(r),g(r),!b&&p>80&&(E(!0),S(!1)),!N&&b&&r<=20&&(E(!1),S(!0),A.current||(A.current=setTimeout((function(){S(!1),clearTimeout(A.current),A.current=null}),2e3)))},n=function(e){r&&r(e)};return window.addEventListener("scroll",e),window.addEventListener("resize",n),function(){window.removeEventListener("scroll",e),window.removeEventListener("resize",n)}}),[p]);return a.a.createElement("header",{className:"page-header"},a.a.createElement("div",{className:o()("header-nav",{scrolled:b,"sticky-unset":N,"sticky-top":b||N})},a.a.createElement("div",{className:"container"},a.a.createElement("nav",{className:"row navbar navbar-expand-lg navbar-dark"},a.a.createElement("a",{className:"navbar-brand logo",href:i.getSiteUrl()},l?a.a.createElement("img",{src:l}):d),a.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},a.a.createElement("span",{className:"navbar-toggler-icon"})),a.a.createElement("div",{className:"collapse navbar-collapse justify-content-end",id:"navbarSupportedContent"},a.a.createElement(c.a,{name:"header",ulClassName:"navbar-nav",renderItem:function(e){var t=i.getItem(e.key),r=null!=t&&t.path?i.findInStructure(e.key):null,n=(null==r?void 0:r.children)||[],l=(null==e?void 0:e.children)||[],c=[].concat(u(n),u(l)),m=i.hasItem(f,c);return a.a.createElement("li",{className:o()("nav-item",{dropdown:l&&l.length,active:e.key===f||m})},a.a.createElement("a",{className:o()("nav-link",{"dropdown-toggle":l&&l.length}),href:null==t?void 0:t.url},e.title||(null==t?void 0:t.title)),l&&function(e){return a.a.createElement("div",{className:"dropdown-menu"},e.map((function(e){var t=i.getItem(e.key);return a.a.createElement("a",{className:"dropdown-item",href:null==t?void 0:t.url},null==t?void 0:t.title)})))}(l))}}))))))}},function(e,t,r){"use strict";var n=r(0),a=r.n(n),l=r(2),o=r.n(l);t.a=function(e){var t=e.children,r=e.className;return a.a.createElement("div",{className:o()("page",r)},t)}},function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n=function(e){return!(!e||!e.trim().length)}},function(e,t,r){},function(e,t,r){"use strict";var n=r(0),a=r.n(n),l=r(1),o=r(2),i=r.n(o);t.a=function(e){var t=e.name,r=l.getProp("vars")[t],o=Object(n.useRef)(null);return r?(Object(n.useEffect)((function(){var e=document.createRange().createContextualFragment(r);o.current.innerHtml="",o.current.appendChild(e)}),[]),a.a.createElement("div",{ref:o,className:i()("page-aside",t)})):null}},,,,,,function(e,t,r){"use strict";r.r(t);r(8);var n=r(0),a=r.n(n),l=r(1),o=r(2),i=r.n(o),c=r(5),u=r(4),m=r(6),s=r(7),d=r(9);t.default=function(e){var t,r,n,o,f,v,p;l.init(e),window.PRSS=l;var g=l.getProp("vars"),y=g.featuredImageUrl,b=(g.featuredImageAlt,g.sidebarAsideHtml),E=(l.getJsonProp("vars.links"),l.getProp("item")),h=E.content,N=E.uuid,S=E.title,A=E.createdAt,P=l.getProp("site"),w=(P.title,P.url,l.getProp("sidebarHtml")),x=(l.getProp("headerHtml"),l.getItems("post").filter((function(e){return e.uuid!==N}))),j=l.shuffle(x)[0];return a.a.createElement(m.a,{className:"page-post"},a.a.createElement(c.a,null),a.a.createElement("main",null,a.a.createElement("div",{className:"container main-container"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col"},a.a.createElement("div",{className:"content"},a.a.createElement("div",{className:"post-title-container mb-2"},a.a.createElement("div",{className:"row justify-content-between"},a.a.createElement("div",{className:"col-12 col-lg d-lg-flex flex-column justify-content-center"},a.a.createElement("h1",{className:"mb-0"},S),A&&a.a.createElement("div",{className:"text-muted mt-4 date post-date d-flex align-items-center",title:l.formattedDate(A)},a.a.createElement("i",{className:"fa fa-clock-o mr-2"}),a.a.createElement("span",null,"Published on ",l.formattedDate(A)))),(null===(t=l.getProp("vars"))||void 0===t?void 0:t.asideHtml)&&a.a.createElement("div",{className:"col-12 col-lg-4 mt-3 mt-lg-0"},a.a.createElement(d.a,{name:"asideHtml"})))),y&&a.a.createElement("div",{className:"featured-image",style:{backgroundImage:"url(".concat(y,")")}}),h&&h.trim().length&&a.a.createElement("section",{className:"post-content mb-3 pb-5"},a.a.createElement("div",{className:"post-inner-content",dangerouslySetInnerHTML:{__html:h}})),j&&a.a.createElement("section",{className:"mb-3"},a.a.createElement("h4",{className:"section-title explore-more"},a.a.createElement("span",null,"Explore More")),a.a.createElement("div",{className:""},a.a.createElement("div",{className:i()("card mb-3 d-flex flex-row",{"has-img":!(null===(r=j.vars)||void 0===r||!r.featuredImageUrl)})},(null===(n=j.vars)||void 0===n?void 0:n.featuredImageUrl)&&a.a.createElement("div",{className:"col-2 p-0 explore-featured-image"},a.a.createElement("a",{className:i()("card-img-left",{"card-has-img":!(null===(o=j.vars)||void 0===o||!o.featuredImageUrl)}),href:j.url},(null===(f=j.vars)||void 0===f?void 0:f.featuredImageUrl)&&a.a.createElement("img",{src:null===(v=j.vars)||void 0===v?void 0:v.featuredImageUrl,alt:null===(p=j.vars)||void 0===p?void 0:p.featuredImageAlt,loading:"lazy"}))),a.a.createElement("div",{className:"card-body col"},j.title&&a.a.createElement("a",{className:"card-title",href:j.url},j.title),j.content&&a.a.createElement("p",{className:"card-text"},j.content))))))),Object(s.a)(w||b)&&a.a.createElement("div",{className:"col-3 page-sidebar"},a.a.createElement("div",{className:"page-sidebar-content",dangerouslySetInnerHTML:{__html:w}}),a.a.createElement(d.a,{name:"sidebarAsideHtml"}))))),a.a.createElement(u.a,null))}}]);
//# sourceMappingURL=post.js.map