/*! For license information please see 18.afe840bf.chunk.js.LICENSE.txt */
(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[18],{1130:function(e,t,n){"use strict";n.r(t);var a=n(203),r=n(204),o=n(205),i=n(206),s=n(1),c=n.n(s),l=n(826),u=n(688),d=n(689),f=n(827),p=n(828),b=n(764),m=n(802),g=n(765),h=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{className:"app flex-row align-items-center"},c.a.createElement(l.a,null,c.a.createElement(u.a,{className:"justify-content-center"},c.a.createElement(d.a,{md:"6"},c.a.createElement("div",{className:"clearfix"},c.a.createElement("h1",{className:"float-left display-3 mr-4"},"404"),c.a.createElement("h4",{className:"pt-3"},"Oops! Estas perdido."),c.a.createElement("p",{className:"text-muted float-left"},"La p\xe1gina que estas buscando no se encontro.")),c.a.createElement(f.a,{className:"input-prepend"},c.a.createElement(p.a,{addonType:"prepend"},c.a.createElement(b.a,null,c.a.createElement("i",{className:"fa fa-search"}))),c.a.createElement(m.a,{size:"16",type:"text",placeholder:"\xbfQu\xe9 estas buscando?"}),c.a.createElement(p.a,{addonType:"append"},c.a.createElement(g.a,{color:"info"},"Buscar")))))))}}]),n}(s.Component);t.default=h},606:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)){if(a.length){var i=r.apply(null,a);i&&e.push(i)}}else if("object"===o){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){e.push(a.toString());continue}for(var s in a)n.call(a,s)&&a[s]&&e.push(s)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},607:function(e,t,n){"use strict";n.d(t,"m",(function(){return i})),n.d(t,"f",(function(){return s})),n.d(t,"d",(function(){return c})),n.d(t,"j",(function(){return l})),n.d(t,"k",(function(){return u})),n.d(t,"l",(function(){return d})),n.d(t,"q",(function(){return p})),n.d(t,"o",(function(){return m})),n.d(t,"n",(function(){return g})),n.d(t,"b",(function(){return h})),n.d(t,"a",(function(){return v})),n.d(t,"i",(function(){return y})),n.d(t,"c",(function(){return j})),n.d(t,"p",(function(){return E})),n.d(t,"h",(function(){return N})),n.d(t,"g",(function(){return M})),n.d(t,"e",(function(){return T}));var a,r=n(94),o=n.n(r);function i(e){document.body.style.paddingRight=e>0?e+"px":null}function s(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)}function c(){var e=function(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}(),t=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],n=t?parseInt(t.style.paddingRight||0,10):0;document.body.clientWidth<window.innerWidth&&i(n+e)}function l(e,t){return void 0===e&&(e=""),void 0===t&&(t=a),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function u(e,t){var n={};return Object.keys(e).forEach((function(a){-1===t.indexOf(a)&&(n[a]=e[a])})),n}function d(e,t){for(var n,a=Array.isArray(t)?t:[t],r=a.length,o={};r>0;)o[n=a[r-=1]]=e[n];return o}var f={};function p(e){f[e]||("undefined"!==typeof console&&console.error(e),f[e]=!0)}var b="object"===typeof window&&window.Element||function(){};var m=o.a.oneOfType([o.a.string,o.a.func,function(e,t,n){if(!(e[t]instanceof b))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")},o.a.shape({current:o.a.any})]),g=o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func}),o.a.arrayOf(o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func})]))]),h={Fade:150,Collapse:350,Modal:300,Carousel:600},v=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],y={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},j=!("undefined"===typeof window||!window.document||!window.document.createElement);function O(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function E(e){var t=typeof e;if("number"===t)return e;if("symbol"===t||"object"===t&&"[object Symbol]"===O(e))return NaN;if(N(e)){var n="function"===typeof e.valueOf?e.valueOf():e;e=N(n)?""+n:n}if("string"!==t)return 0===e?e:+e;e=e.replace(/^\s+|\s+$/g,"");var a=/^0b[01]+$/i.test(e);return a||/^0o[0-7]+$/i.test(e)?parseInt(e.slice(2),a?2:8):/^[-+]0x[0-9a-f]+$/i.test(e)?NaN:+e}function N(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}function x(e){if(function(e){return!(!e||"object"!==typeof e)&&"current"in e}(e))return e.current;if(function(e){if(!N(e))return!1;var t=O(e);return"[object Function]"===t||"[object AsyncFunction]"===t||"[object GeneratorFunction]"===t||"[object Proxy]"===t}(e))return e();if("string"===typeof e&&j){var t=document.querySelectorAll(e);if(t.length||(t=document.querySelectorAll("#"+e)),!t.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return t}return e}function w(e){return null!==e&&(Array.isArray(e)||j&&"number"===typeof e.length)}function M(e,t){var n=x(e);return t?w(n)?n:null===n?[]:[n]:w(n)?n[0]:n}var T=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},618:function(e,t,n){"use strict";function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return a}))},688:function(e,t,n){"use strict";var a=n(12),r=n(32),o=n(1),i=n.n(o),s=n(94),c=n.n(s),l=n(606),u=n.n(l),d=n(607),f=["className","cssModule","noGutters","tag","form","widths"],p=c.a.oneOfType([c.a.number,c.a.string]),b={tag:d.n,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool,xs:p,sm:p,md:p,lg:p,xl:p},m={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e){var t=e.className,n=e.cssModule,o=e.noGutters,s=e.tag,c=e.form,l=e.widths,p=Object(r.a)(e,f),b=[];l.forEach((function(t,n){var a=e[t];if(delete p[t],a){var r=!n;b.push(r?"row-cols-"+a:"row-cols-"+t+"-"+a)}}));var m=Object(d.j)(u()(t,o?"no-gutters":null,c?"form-row":"row",b),n);return i.a.createElement(s,Object(a.a)({},p,{className:m}))};g.propTypes=b,g.defaultProps=m,t.a=g},689:function(e,t,n){"use strict";var a=n(12),r=n(32),o=n(1),i=n.n(o),s=n(94),c=n.n(s),l=n(606),u=n.n(l),d=n(607),f=["className","cssModule","widths","tag"],p=c.a.oneOfType([c.a.number,c.a.string]),b=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:p,offset:p})]),m={tag:d.n,xs:b,sm:b,md:b,lg:b,xl:b,className:c.a.string,cssModule:c.a.object,widths:c.a.array},g={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},v=function(e){var t=e.className,n=e.cssModule,o=e.widths,s=e.tag,c=Object(r.a)(e,f),l=[];o.forEach((function(t,a){var r=e[t];if(delete c[t],r||""===r){var o=!a;if(Object(d.h)(r)){var i,s=o?"-":"-"+t+"-",f=h(o,t,r.size);l.push(Object(d.j)(u()(((i={})[f]=r.size||""===r.size,i["order"+s+r.order]=r.order||0===r.order,i["offset"+s+r.offset]=r.offset||0===r.offset,i)),n))}else{var p=h(o,t,r);l.push(p)}}})),l.length||l.push("col");var p=Object(d.j)(u()(t,l),n);return i.a.createElement(s,Object(a.a)({},c,{className:p}))};v.propTypes=m,v.defaultProps=g,t.a=v},764:function(e,t,n){"use strict";var a=n(12),r=n(32),o=n(1),i=n.n(o),s=n(94),c=n.n(s),l=n(606),u=n.n(l),d=n(607),f=["className","cssModule","tag"],p={tag:d.n,className:c.a.string,cssModule:c.a.object},b=function(e){var t=e.className,n=e.cssModule,o=e.tag,s=Object(r.a)(e,f),c=Object(d.j)(u()(t,"input-group-text"),n);return i.a.createElement(o,Object(a.a)({},s,{className:c}))};b.propTypes=p,b.defaultProps={tag:"span"},t.a=b},765:function(e,t,n){"use strict";var a=n(12),r=n(32),o=n(618),i=n(44),s=n(1),c=n.n(s),l=n(94),u=n.n(l),d=n(606),f=n.n(d),p=n(607),b=["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"],m={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:p.n,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},g=function(e){function t(t){var n;return(n=e.call(this,t)||this).onClick=n.onClick.bind(Object(o.a)(n)),n}Object(i.a)(t,e);var n=t.prototype;return n.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},n.render=function(){var e=this.props,t=e.active,n=e["aria-label"],o=e.block,i=e.className,s=e.close,l=e.cssModule,u=e.color,d=e.outline,m=e.size,g=e.tag,h=e.innerRef,v=Object(r.a)(e,b);s&&"undefined"===typeof v.children&&(v.children=c.a.createElement("span",{"aria-hidden":!0},"\xd7"));var y="btn"+(d?"-outline":"")+"-"+u,j=Object(p.j)(f()(i,{close:s},s||"btn",s||y,!!m&&"btn-"+m,!!o&&"btn-block",{active:t,disabled:this.props.disabled}),l);v.href&&"button"===g&&(g="a");var O=s?"Close":null;return c.a.createElement(g,Object(a.a)({type:"button"===g&&v.onClick?"button":void 0},v,{className:j,ref:h,onClick:this.onClick,"aria-label":n||O}))},t}(c.a.Component);g.propTypes=m,g.defaultProps={color:"secondary",tag:"button"},t.a=g},802:function(e,t,n){"use strict";var a=n(12),r=n(32),o=n(618),i=n(44),s=n(1),c=n.n(s),l=n(94),u=n.n(l),d=n(606),f=n.n(d),p=n(607),b=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],m={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:p.n,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},g=function(e){function t(t){var n;return(n=e.call(this,t)||this).getRef=n.getRef.bind(Object(o.a)(n)),n.focus=n.focus.bind(Object(o.a)(n)),n}Object(i.a)(t,e);var n=t.prototype;return n.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},n.focus=function(){this.ref&&this.ref.focus()},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,o=e.type,i=e.bsSize,s=e.valid,l=e.invalid,u=e.tag,d=e.addon,m=e.plaintext,g=e.innerRef,h=Object(r.a)(e,b),v=["radio","checkbox"].indexOf(o)>-1,y=new RegExp("\\D","g"),j=u||("select"===o||"textarea"===o?o:"input"),O="form-control";m?(O+="-plaintext",j=u||"input"):"file"===o?O+="-file":"range"===o?O+="-range":v&&(O=d?null:"form-check-input"),h.size&&y.test(h.size)&&(Object(p.q)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),i=h.size,delete h.size);var E=Object(p.j)(f()(t,l&&"is-invalid",s&&"is-valid",!!i&&"form-control-"+i,O),n);return("input"===j||u&&"function"===typeof u)&&(h.type=o),h.children&&!m&&"select"!==o&&"string"===typeof j&&"select"!==j&&(Object(p.q)('Input with a type of "'+o+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),c.a.createElement(j,Object(a.a)({},h,{ref:g,className:E,"aria-invalid":l}))},t}(c.a.Component);g.propTypes=m,g.defaultProps={type:"text"},t.a=g},826:function(e,t,n){"use strict";var a=n(12),r=n(32),o=n(1),i=n.n(o),s=n(94),c=n.n(s),l=n(606),u=n.n(l),d=n(607),f=["className","cssModule","fluid","tag"],p={tag:d.n,fluid:c.a.oneOfType([c.a.bool,c.a.string]),className:c.a.string,cssModule:c.a.object},b=function(e){var t=e.className,n=e.cssModule,o=e.fluid,s=e.tag,c=Object(r.a)(e,f),l="container";!0===o?l="container-fluid":o&&(l="container-"+o);var p=Object(d.j)(u()(t,l),n);return i.a.createElement(s,Object(a.a)({},c,{className:p}))};b.propTypes=p,b.defaultProps={tag:"div"},t.a=b},827:function(e,t,n){"use strict";var a=n(12),r=n(32),o=n(1),i=n.n(o),s=n(94),c=n.n(s),l=n(606),u=n.n(l),d=n(607),f=["className","cssModule","tag","size"],p={tag:d.n,size:c.a.string,className:c.a.string,cssModule:c.a.object},b=function(e){var t=e.className,n=e.cssModule,o=e.tag,s=e.size,c=Object(r.a)(e,f),l=Object(d.j)(u()(t,"input-group",s?"input-group-"+s:null),n);return i.a.createElement(o,Object(a.a)({},c,{className:l}))};b.propTypes=p,b.defaultProps={tag:"div"},t.a=b},828:function(e,t,n){"use strict";var a=n(12),r=n(32),o=n(1),i=n.n(o),s=n(94),c=n.n(s),l=n(606),u=n.n(l),d=n(607),f=n(764),p=["className","cssModule","tag","addonType","children"],b={tag:d.n,addonType:c.a.oneOf(["prepend","append"]).isRequired,children:c.a.node,className:c.a.string,cssModule:c.a.object},m=function(e){var t=e.className,n=e.cssModule,o=e.tag,s=e.addonType,c=e.children,l=Object(r.a)(e,p),b=Object(d.j)(u()(t,"input-group-"+s),n);return"string"===typeof c?i.a.createElement(o,Object(a.a)({},l,{className:b}),i.a.createElement(f.a,{children:c})):i.a.createElement(o,Object(a.a)({},l,{className:b,children:c}))};m.propTypes=b,m.defaultProps={tag:"div"},t.a=m}}]);
//# sourceMappingURL=18.afe840bf.chunk.js.map