(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[13],{1041:function(e,t,n){"use strict";n.r(t);var a=n(235),o=n(236),r=n(238),i=n(237),c=n(239),s=n(2),l=n.n(s),u=n(917),d=n(937),f=n(914),p=n(915),m=n(905),b=n.n(m),h=n(992),g=function(e){function t(){return Object(a.a)(this,t),Object(r.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.cssModule,a=e.header,o=e.mainText,r=e.icon,i=e.color,c=e.footer,s=e.link,m=(e.children,e.variant),g=Object(u.a)(e,["className","cssModule","header","mainText","icon","color","footer","link","children","variant"]),y="0"===m?{card:"p-3",icon:"p-3",lead:"mt-2"}:"1"===m?{card:"p-0",icon:"p-4",lead:"pt-3"}:{card:"p-0",icon:"p-4 px-5",lead:"pt-3"},v={style:"clearfix",color:i,icon:r,classes:""};v.classes=Object(h.mapToCssModules)(b()(t,v.style,y.card),n);var E={style:"h5 mb-0",color:i,classes:""};E.classes=b()(E.style,"text-"+v.color,y.lead);return l.a.createElement(f.a,null,l.a.createElement(p.a,Object.assign({className:v.classes},g),function(e){var t=b()(e,"bg-"+v.color,y.icon,"font-2xl mr-3 float-left");return l.a.createElement("i",{className:t})}(v.icon),l.a.createElement("div",{className:E.classes},a),l.a.createElement("div",{className:"text-muted text-uppercase font-weight-bold font-xs"},o)),function(){if(c)return l.a.createElement(d.a,{className:"px-3 py-2"},l.a.createElement("a",{className:"font-weight-bold font-xs btn-block text-muted",href:s},"Ver M\xe1s",l.a.createElement("i",{className:"fa fa-angle-right float-right font-lg"})))}())}}]),t}(s.Component);g.defaultProps={header:"$1,999.50",mainText:"Income",icon:"fa fa-cogs",color:"primary",variant:"0",link:"#"};var y=g,v=n(909),E=n(923),O=n(912),j=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(r.a)(this,Object(i.a)(t).call(this,e))).loading=function(){return l.a.createElement("div",{className:"animated fadeIn pt-1 text-center"},"Loading...")},n.state={gastoTotal:"",mes:[]},n}return Object(c.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getGastos(),this.getGastosMensuales()}},{key:"getGastos",value:function(){var e=this;this.setState({data:[]}),setTimeout((function(){v.a.getExpenses({mes:null}).then((function(t){var n=t.map((function(e){return e.precio_total}));if(n.length>0)var a=n.reduce((function(e,t){return e+t}));else a=0;e.setState({gastoTotal:a})}))}),500)}},{key:"getGastosMensuales",value:function(){var e=this;v.a.getExpenses({mes:11}).then((function(t){e.setState({mes:t})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"animated fadeIn"},l.a.createElement(y,{header:"$"+(new Intl.NumberFormat).format(this.state.gastoTotal.toString()),mainText:"Gastos totales de este mes"})),l.a.createElement("div",{className:"animated fadeIn"},l.a.createElement("div",null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},this.state.mes.map((function(t,n){return l.a.createElement("div",{className:"col-sm",key:n},l.a.createElement(f.a,null,l.a.createElement(E.a,null,l.a.createElement("strong",null,e[t.mes-1]," ",t.anio)),l.a.createElement(p.a,null,"Tus gastos de ",e[t.mes-1]," del ",t.anio," fueron de: ","$ ".concat((new Intl.NumberFormat).format(t.precio_total_mes)),l.a.createElement("hr",null)),l.a.createElement(d.a,null,l.a.createElement(O.a,{type:"submit",size:"sm",color:"primary"},l.a.createElement("i",{className:"fa fa-dot-circle-o"})," Imprimir Gastos"))))})))))))}}]),t}(s.Component);t.default=j},909:function(e,t,n){"use strict";var a=n(235),o=n(236),r=function(){function e(){Object(a.a)(this,e);var t=window.location.host;"localhost:3000"===t&&(this.URL="http://localhost/coysa/public/api/"),"johnssther.github.io"===t&&(this.URL="http://coysa.herokuapp.com/api/"),this.API_TOKEN=localStorage.getItem("token")}return Object(o.a)(e,[{key:"onLogin",value:function(e,t){return fetch("".concat(this.URL,"login"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:e,password:t})}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){throw e}))}},{key:"registerUser",value:function(e){return fetch("".concat(this.URL,"register"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:e.name,email:e.email,username:e.username,password:e.password,password_confirmation:e.password_confirmation})}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){throw e}))}},{key:"saveExpenses",value:function(e){return fetch("".concat(this.URL,"gastos"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({api_token:this.API_TOKEN,gasto:e.gasto,cantidad:e.cantidad,precio_unidad:e.precioUnidad,precio_total:e.precioTotal,fecha:e.Fecha,user_id:e.id_usuario,tipogasto_id:e.tipogasto_id})}).then((function(e){return console.log("objeto guardado"),e.json()})).catch((function(e){throw e}))}},{key:"getExpenses",value:function(e){return fetch("".concat(this.URL,"gastos?api_token=").concat(this.API_TOKEN,"\n        &user_id=").concat(JSON.parse(localStorage.getItem("auth")).id,"\n        &mes=").concat(e.mes)).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){throw e}))}},{key:"getTipogastos",value:function(){return fetch("".concat(this.URL,"tipogastos?api_token=").concat(this.API_TOKEN,"&user_id=").concat(JSON.parse(localStorage.getItem("auth")).id)).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){throw e}))}},{key:"deleteExpense",value:function(e){return fetch("".concat(this.URL,"gastos/").concat(e,"?api_token=").concat(this.API_TOKEN),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).catch((function(e){throw e}))}}]),e}();t.a=new r},912:function(e,t,n){"use strict";var a=n(34),o=n(90),r=n(907),i=n(70),c=n(2),s=n.n(c),l=n(60),u=n.n(l),d=n(905),f=n.n(d),p=n(906),m={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:p.m,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},b=function(e){function t(t){var n;return(n=e.call(this,t)||this).onClick=n.onClick.bind(Object(r.a)(n)),n}Object(i.a)(t,e);var n=t.prototype;return n.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},n.render=function(){var e=this.props,t=e.active,n=e["aria-label"],r=e.block,i=e.className,c=e.close,l=e.cssModule,u=e.color,d=e.outline,m=e.size,b=e.tag,h=e.innerRef,g=Object(o.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);c&&"undefined"===typeof g.children&&(g.children=s.a.createElement("span",{"aria-hidden":!0},"\xd7"));var y="btn"+(d?"-outline":"")+"-"+u,v=Object(p.i)(f()(i,{close:c},c||"btn",c||y,!!m&&"btn-"+m,!!r&&"btn-block",{active:t,disabled:this.props.disabled}),l);g.href&&"button"===b&&(b="a");var E=c?"Close":null;return s.a.createElement(b,Object(a.a)({type:"button"===b&&g.onClick?"button":void 0},g,{className:v,ref:h,onClick:this.onClick,"aria-label":n||E}))},t}(s.a.Component);b.propTypes=m,b.defaultProps={color:"secondary",tag:"button"},t.a=b},914:function(e,t,n){"use strict";var a=n(34),o=n(90),r=n(2),i=n.n(r),c=n(60),s=n.n(c),l=n(905),u=n.n(l),d=n(906),f={tag:d.m,inverse:s.a.bool,color:s.a.string,body:s.a.bool,outline:s.a.bool,className:s.a.string,cssModule:s.a.object,innerRef:s.a.oneOfType([s.a.object,s.a.string,s.a.func])},p=function(e){var t=e.className,n=e.cssModule,r=e.color,c=e.body,s=e.inverse,l=e.outline,f=e.tag,p=e.innerRef,m=Object(o.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),b=Object(d.i)(u()(t,"card",!!s&&"text-white",!!c&&"card-body",!!r&&(l?"border":"bg")+"-"+r),n);return i.a.createElement(f,Object(a.a)({},m,{className:b,ref:p}))};p.propTypes=f,p.defaultProps={tag:"div"},t.a=p},915:function(e,t,n){"use strict";var a=n(34),o=n(90),r=n(2),i=n.n(r),c=n(60),s=n.n(c),l=n(905),u=n.n(l),d=n(906),f={tag:d.m,className:s.a.string,cssModule:s.a.object,innerRef:s.a.oneOfType([s.a.object,s.a.string,s.a.func])},p=function(e){var t=e.className,n=e.cssModule,r=e.innerRef,c=e.tag,s=Object(o.a)(e,["className","cssModule","innerRef","tag"]),l=Object(d.i)(u()(t,"card-body"),n);return i.a.createElement(c,Object(a.a)({},s,{className:l,ref:r}))};p.propTypes=f,p.defaultProps={tag:"div"},t.a=p},917:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,"a",(function(){return a}))},923:function(e,t,n){"use strict";var a=n(34),o=n(90),r=n(2),i=n.n(r),c=n(60),s=n.n(c),l=n(905),u=n.n(l),d=n(906),f={tag:d.m,className:s.a.string,cssModule:s.a.object},p=function(e){var t=e.className,n=e.cssModule,r=e.tag,c=Object(o.a)(e,["className","cssModule","tag"]),s=Object(d.i)(u()(t,"card-header"),n);return i.a.createElement(r,Object(a.a)({},c,{className:s}))};p.propTypes=f,p.defaultProps={tag:"div"},t.a=p},936:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},937:function(e,t,n){"use strict";var a=n(34),o=n(90),r=n(2),i=n.n(r),c=n(60),s=n.n(c),l=n(905),u=n.n(l),d=n(906),f={tag:d.m,className:s.a.string,cssModule:s.a.object},p=function(e){var t=e.className,n=e.cssModule,r=e.tag,c=Object(o.a)(e,["className","cssModule","tag"]),s=Object(d.i)(u()(t,"card-footer"),n);return i.a.createElement(r,Object(a.a)({},c,{className:s}))};p.propTypes=f,p.defaultProps={tag:"div"},t.a=p},992:function(e,t,n){"use strict";var a=n(936);t.__esModule=!0,t.getScrollbarWidth=i,t.setScrollbarWidth=c,t.isBodyOverflowing=s,t.getOriginalBodyPadding=function(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)},t.conditionallyUpdateScrollbar=function(){var e=i(),t=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],n=t?parseInt(t.style.paddingRight||0,10):0;s()&&c(n+e)},t.setGlobalCssModule=function(e){o=e},t.mapToCssModules=function(e,t){void 0===e&&(e="");void 0===t&&(t=o);return t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e},t.omit=function(e,t){var n={};return Object.keys(e).forEach((function(a){-1===t.indexOf(a)&&(n[a]=e[a])})),n},t.pick=function(e,t){var n,a=Array.isArray(t)?t:[t],o=a.length,r={};for(;o>0;)n=a[o-=1],r[n]=e[n];return r},t.warnOnce=u,t.deprecated=function(e,t){return function(n,a,o){null!==n[a]&&"undefined"!==typeof n[a]&&u('"'+a+'" property of "'+o+'" has been deprecated.\n'+t);for(var r=arguments.length,i=new Array(r>3?r-3:0),c=3;c<r;c++)i[c-3]=arguments[c];return e.apply(void 0,[n,a,o].concat(i))}},t.DOMElement=f,t.isReactRefObj=h,t.toNumber=function(e){var t=typeof e;if("number"===t)return e;if("symbol"===t||"object"===t&&"[object Symbol]"===g(e))return NaN;if(y(e)){var n="function"===typeof e.valueOf?e.valueOf():e;e=y(n)?""+n:n}if("string"!==t)return 0===e?e:+e;e=e.replace(/^\s+|\s+$/g,"");var a=/^0b[01]+$/i.test(e);return a||/^0o[0-7]+$/i.test(e)?parseInt(e.slice(2),a?2:8):/^[-+]0x[0-9a-f]+$/i.test(e)?NaN:+e},t.isObject=y,t.isFunction=v,t.findDOMElements=E,t.isArrayOrNodeList=O,t.getTarget=function(e,t){var n=E(e);if(O(n)&&!t)return n[0];return n},t.addMultipleEventListeners=function(e,t,n,a){var o=e;O(o)||(o=[o]);var r=n;"string"===typeof r&&(r=r.split(/\s+/));if(!O(o)||"function"!==typeof t||!Array.isArray(r))throw new Error("\n      The first argument of this function must be DOM node or an array on DOM nodes or NodeList.\n      The second must be a function.\n      The third is a string or an array of strings that represents DOM events\n    ");return Array.prototype.forEach.call(r,(function(e){Array.prototype.forEach.call(o,(function(n){n.addEventListener(e,t,a)}))})),function(){Array.prototype.forEach.call(r,(function(e){Array.prototype.forEach.call(o,(function(n){n.removeEventListener(e,t,a)}))}))}},t.focusableElements=t.defaultToggleEvents=t.canUseDOM=t.PopperPlacements=t.keyCodes=t.TransitionStatuses=t.TransitionPropTypeKeys=t.TransitionTimeouts=t.tagPropType=t.targetPropType=void 0;var o,r=a(n(60));function i(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}function c(e){document.body.style.paddingRight=e>0?e+"px":null}function s(){return document.body.clientWidth<window.innerWidth}var l={};function u(e){l[e]||("undefined"!==typeof console&&console.error(e),l[e]=!0)}var d="object"===typeof window&&window.Element||function(){};function f(e,t,n){if(!(e[t]instanceof d))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")}var p=r.default.oneOfType([r.default.string,r.default.func,f,r.default.shape({current:r.default.any})]);t.targetPropType=p;var m=r.default.oneOfType([r.default.func,r.default.string,r.default.shape({$$typeof:r.default.symbol,render:r.default.func}),r.default.arrayOf(r.default.oneOfType([r.default.func,r.default.string,r.default.shape({$$typeof:r.default.symbol,render:r.default.func})]))]);t.tagPropType=m;t.TransitionTimeouts={Fade:150,Collapse:350,Modal:300,Carousel:600};t.TransitionPropTypeKeys=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"];t.TransitionStatuses={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"};t.keyCodes={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80};t.PopperPlacements=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"];var b=!("undefined"===typeof window||!window.document||!window.document.createElement);function h(e){return!(!e||"object"!==typeof e)&&"current"in e}function g(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function y(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}function v(e){if(!y(e))return!1;var t=g(e);return"[object Function]"===t||"[object AsyncFunction]"===t||"[object GeneratorFunction]"===t||"[object Proxy]"===t}function E(e){if(h(e))return e.current;if(v(e))return e();if("string"===typeof e&&b){var t=document.querySelectorAll(e);if(t.length||(t=document.querySelectorAll("#"+e)),!t.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return t}return e}function O(e){return null!==e&&(Array.isArray(e)||b&&"number"===typeof e.length)}t.canUseDOM=b;t.defaultToggleEvents=["touchstart","click"];t.focusableElements=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']}}]);
//# sourceMappingURL=13.e6ff3ad8.chunk.js.map