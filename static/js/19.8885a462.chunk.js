/*! For license information please see 19.8885a462.chunk.js.LICENSE.txt */
(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[19],{506:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var r=typeof a;if("string"===r||"number"===r)e.push(a);else if(Array.isArray(a)&&a.length){var s=o.apply(null,a);s&&e.push(s)}else if("object"===r)for(var i in a)n.call(a,i)&&a[i]&&e.push(i)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(a=function(){return o}.apply(t,[]))||(e.exports=a)}()},507:function(e,t,n){"use strict";n.d(t,"l",(function(){return s})),n.d(t,"f",(function(){return i})),n.d(t,"d",(function(){return c})),n.d(t,"i",(function(){return l})),n.d(t,"j",(function(){return u})),n.d(t,"k",(function(){return d})),n.d(t,"o",(function(){return p})),n.d(t,"m",(function(){return m})),n.d(t,"b",(function(){return g})),n.d(t,"a",(function(){return h})),n.d(t,"h",(function(){return v})),n.d(t,"c",(function(){return y})),n.d(t,"n",(function(){return O})),n.d(t,"g",(function(){return E})),n.d(t,"e",(function(){return N}));var a,o=n(59),r=n.n(o);function s(e){document.body.style.paddingRight=e>0?e+"px":null}function i(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)}function c(){var e=function(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}(),t=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],n=t?parseInt(t.style.paddingRight||0,10):0;document.body.clientWidth<window.innerWidth&&s(n+e)}function l(e,t){return void 0===e&&(e=""),void 0===t&&(t=a),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function u(e,t){var n={};return Object.keys(e).forEach((function(a){-1===t.indexOf(a)&&(n[a]=e[a])})),n}function d(e,t){for(var n,a=Array.isArray(t)?t:[t],o=a.length,r={};o>0;)r[n=a[o-=1]]=e[n];return r}var f={};function p(e){f[e]||("undefined"!==typeof console&&console.error(e),f[e]=!0)}var b="object"===typeof window&&window.Element||function(){};r.a.oneOfType([r.a.string,r.a.func,function(e,t,n){if(!(e[t]instanceof b))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")},r.a.shape({current:r.a.any})]);var m=r.a.oneOfType([r.a.func,r.a.string,r.a.shape({$$typeof:r.a.symbol,render:r.a.func}),r.a.arrayOf(r.a.oneOfType([r.a.func,r.a.string,r.a.shape({$$typeof:r.a.symbol,render:r.a.func})]))]),g={Fade:150,Collapse:350,Modal:300,Carousel:600},h=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],v={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},y=!("undefined"===typeof window||!window.document||!window.document.createElement);function j(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function O(e){var t=typeof e;if("number"===t)return e;if("symbol"===t||"object"===t&&"[object Symbol]"===j(e))return NaN;if(E(e)){var n="function"===typeof e.valueOf?e.valueOf():e;e=E(n)?""+n:n}if("string"!==t)return 0===e?e:+e;e=e.replace(/^\s+|\s+$/g,"");var a=/^0b[01]+$/i.test(e);return a||/^0o[0-7]+$/i.test(e)?parseInt(e.slice(2),a?2:8):/^[-+]0x[0-9a-f]+$/i.test(e)?NaN:+e}function E(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}var N=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},512:function(e,t,n){"use strict";function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return a}))},556:function(e,t,n){"use strict";var a=n(19),o=n(51),r=n(512),s=n(39),i=n(1),c=n.n(i),l=n(59),u=n.n(l),d=n(506),f=n.n(d),p=n(507),b={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:p.m,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},m=function(e){function t(t){var n;return(n=e.call(this,t)||this).onClick=n.onClick.bind(Object(r.a)(n)),n}Object(s.a)(t,e);var n=t.prototype;return n.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},n.render=function(){var e=this.props,t=e.active,n=e["aria-label"],r=e.block,s=e.className,i=e.close,l=e.cssModule,u=e.color,d=e.outline,b=e.size,m=e.tag,g=e.innerRef,h=Object(o.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);i&&"undefined"===typeof h.children&&(h.children=c.a.createElement("span",{"aria-hidden":!0},"\xd7"));var v="btn"+(d?"-outline":"")+"-"+u,y=Object(p.i)(f()(s,{close:i},i||"btn",i||v,!!b&&"btn-"+b,!!r&&"btn-block",{active:t,disabled:this.props.disabled}),l);h.href&&"button"===m&&(m="a");var j=i?"Close":null;return c.a.createElement(m,Object(a.a)({type:"button"===m&&h.onClick?"button":void 0},h,{className:y,ref:g,onClick:this.onClick,"aria-label":n||j}))},t}(c.a.Component);m.propTypes=b,m.defaultProps={color:"secondary",tag:"button"},t.a=m},571:function(e,t,n){"use strict";var a=n(19),o=n(51),r=n(1),s=n.n(r),i=n(59),c=n.n(i),l=n(506),u=n.n(l),d=n(507),f=c.a.oneOfType([c.a.number,c.a.string]),p={tag:d.m,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool,xs:f,sm:f,md:f,lg:f,xl:f},b={tag:"div",widths:["xs","sm","md","lg","xl"]},m=function(e){var t=e.className,n=e.cssModule,r=e.noGutters,i=e.tag,c=e.form,l=e.widths,f=Object(o.a)(e,["className","cssModule","noGutters","tag","form","widths"]),p=[];l.forEach((function(t,n){var a=e[t];if(delete f[t],a){var o=!n;p.push(o?"row-cols-"+a:"row-cols-"+t+"-"+a)}}));var b=Object(d.i)(u()(t,r?"no-gutters":null,c?"form-row":"row",p),n);return s.a.createElement(i,Object(a.a)({},f,{className:b}))};m.propTypes=p,m.defaultProps=b,t.a=m},572:function(e,t,n){"use strict";var a=n(19),o=n(51),r=n(1),s=n.n(r),i=n(59),c=n.n(i),l=n(506),u=n.n(l),d=n(507),f=c.a.oneOfType([c.a.number,c.a.string]),p=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:f,offset:f})]),b={tag:d.m,xs:p,sm:p,md:p,lg:p,xl:p,className:c.a.string,cssModule:c.a.object,widths:c.a.array},m={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},h=function(e){var t=e.className,n=e.cssModule,r=e.widths,i=e.tag,c=Object(o.a)(e,["className","cssModule","widths","tag"]),l=[];r.forEach((function(t,a){var o=e[t];if(delete c[t],o||""===o){var r=!a;if(Object(d.g)(o)){var s,i=r?"-":"-"+t+"-",f=g(r,t,o.size);l.push(Object(d.i)(u()(((s={})[f]=o.size||""===o.size,s["order"+i+o.order]=o.order||0===o.order,s["offset"+i+o.offset]=o.offset||0===o.offset,s)),n))}else{var p=g(r,t,o);l.push(p)}}})),l.length||l.push("col");var f=Object(d.i)(u()(t,l),n);return s.a.createElement(i,Object(a.a)({},c,{className:f}))};h.propTypes=b,h.defaultProps=m,t.a=h},584:function(e,t,n){"use strict";var a=n(19),o=n(51),r=n(1),s=n.n(r),i=n(59),c=n.n(i),l=n(506),u=n.n(l),d=n(507),f={tag:d.m,className:c.a.string,cssModule:c.a.object},p=function(e){var t=e.className,n=e.cssModule,r=e.tag,i=Object(o.a)(e,["className","cssModule","tag"]),c=Object(d.i)(u()(t,"input-group-text"),n);return s.a.createElement(r,Object(a.a)({},i,{className:c}))};p.propTypes=f,p.defaultProps={tag:"span"},t.a=p},604:function(e,t,n){"use strict";var a=n(19),o=n(51),r=n(512),s=n(39),i=n(1),c=n.n(i),l=n(59),u=n.n(l),d=n(506),f=n.n(d),p=n(507),b={children:u.a.node,type:u.a.string,size:u.a.string,bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:p.m,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},m=function(e){function t(t){var n;return(n=e.call(this,t)||this).getRef=n.getRef.bind(Object(r.a)(n)),n.focus=n.focus.bind(Object(r.a)(n)),n}Object(s.a)(t,e);var n=t.prototype;return n.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},n.focus=function(){this.ref&&this.ref.focus()},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,r=e.type,s=e.bsSize,i=e.valid,l=e.invalid,u=e.tag,d=e.addon,b=e.plaintext,m=e.innerRef,g=Object(o.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),h=["radio","checkbox"].indexOf(r)>-1,v=new RegExp("\\D","g"),y=u||("select"===r||"textarea"===r?r:"input"),j="form-control";b?(j+="-plaintext",y=u||"input"):"file"===r?j+="-file":h&&(j=d?null:"form-check-input"),g.size&&v.test(g.size)&&(Object(p.o)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),s=g.size,delete g.size);var O=Object(p.i)(f()(t,l&&"is-invalid",i&&"is-valid",!!s&&"form-control-"+s,j),n);return("input"===y||u&&"function"===typeof u)&&(g.type=r),g.children&&!b&&"select"!==r&&"string"===typeof y&&"select"!==y&&(Object(p.o)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),c.a.createElement(y,Object(a.a)({},g,{ref:m,className:O}))},t}(c.a.Component);m.propTypes=b,m.defaultProps={type:"text"},t.a=m},628:function(e,t,n){"use strict";var a=n(19),o=n(51),r=n(1),s=n.n(r),i=n(59),c=n.n(i),l=n(506),u=n.n(l),d=n(507),f={tag:d.m,fluid:c.a.oneOfType([c.a.bool,c.a.string]),className:c.a.string,cssModule:c.a.object},p=function(e){var t=e.className,n=e.cssModule,r=e.fluid,i=e.tag,c=Object(o.a)(e,["className","cssModule","fluid","tag"]),l="container";!0===r?l="container-fluid":r&&(l="container-"+r);var f=Object(d.i)(u()(t,l),n);return s.a.createElement(i,Object(a.a)({},c,{className:f}))};p.propTypes=f,p.defaultProps={tag:"div"},t.a=p},643:function(e,t,n){"use strict";var a=n(19),o=n(51),r=n(1),s=n.n(r),i=n(59),c=n.n(i),l=n(506),u=n.n(l),d=n(507),f={tag:d.m,size:c.a.string,className:c.a.string,cssModule:c.a.object},p=function(e){var t=e.className,n=e.cssModule,r=e.tag,i=e.size,c=Object(o.a)(e,["className","cssModule","tag","size"]),l=Object(d.i)(u()(t,"input-group",i?"input-group-"+i:null),n);return s.a.createElement(r,Object(a.a)({},c,{className:l}))};p.propTypes=f,p.defaultProps={tag:"div"},t.a=p},644:function(e,t,n){"use strict";var a=n(19),o=n(51),r=n(1),s=n.n(r),i=n(59),c=n.n(i),l=n(506),u=n.n(l),d=n(507),f=n(584),p={tag:d.m,addonType:c.a.oneOf(["prepend","append"]).isRequired,children:c.a.node,className:c.a.string,cssModule:c.a.object},b=function(e){var t=e.className,n=e.cssModule,r=e.tag,i=e.addonType,c=e.children,l=Object(o.a)(e,["className","cssModule","tag","addonType","children"]),p=Object(d.i)(u()(t,"input-group-"+i),n);return"string"===typeof c?s.a.createElement(r,Object(a.a)({},l,{className:p}),s.a.createElement(f.a,{children:c})):s.a.createElement(r,Object(a.a)({},l,{className:p,children:c}))};b.propTypes=p,b.defaultProps={tag:"div"},t.a=b},825:function(e,t,n){"use strict";n.r(t);var a=n(158),o=n(159),r=n(161),s=n(160),i=n(1),c=n.n(i),l=n(628),u=n(571),d=n(572),f=n(643),p=n(644),b=n(584),m=n(604),g=n(556),h=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{className:"app flex-row align-items-center"},c.a.createElement(l.a,null,c.a.createElement(u.a,{className:"justify-content-center"},c.a.createElement(d.a,{md:"6"},c.a.createElement("div",{className:"clearfix"},c.a.createElement("h1",{className:"float-left display-3 mr-4"},"404"),c.a.createElement("h4",{className:"pt-3"},"Oops! Estas perdido."),c.a.createElement("p",{className:"text-muted float-left"},"La p\xe1gina que estas buscando no se encontro.")),c.a.createElement(f.a,{className:"input-prepend"},c.a.createElement(p.a,{addonType:"prepend"},c.a.createElement(b.a,null,c.a.createElement("i",{className:"fa fa-search"}))),c.a.createElement(m.a,{size:"16",type:"text",placeholder:"\xbfQu\xe9 estas buscando?"}),c.a.createElement(p.a,{addonType:"append"},c.a.createElement(g.a,{color:"info"},"Buscar")))))))}}]),n}(i.Component);t.default=h}}]);
//# sourceMappingURL=19.8885a462.chunk.js.map