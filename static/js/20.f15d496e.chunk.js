(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[20],{1030:function(e,t,a){"use strict";a.r(t);var n=a(508),r=a.n(n),c=a(509),s=a(514),o=a(1),u=a.n(o),l=a(163),i=a(558),p=a(748),m=a(662),f=a(698),d=a(582),E=a(583),b=a(663),h=a(752),v=a(643),x=a(158),g=function(e){var t=e.expense;return u.a.createElement(p.a,null,u.a.createElement(m.a,null,u.a.createElement(f.a,null,u.a.createElement(d.a,null,u.a.createElement(E.a,{sm:"2"},"Show Expense"),u.a.createElement(E.a,{className:"text-right",sm:"10"},u.a.createElement("i",{style:{fontSize:17,cursor:"pointer"},title:"Destroy",className:"text-danger fa fa-eraser"})))),u.a.createElement(b.a,null,u.a.createElement(p.a,null,u.a.createElement(d.a,{xs:"2"},u.a.createElement(E.a,{className:"text-right mb-23",sm:{size:5}}," ",u.a.createElement("b",null,u.a.createElement("label",null,"C\xf3digo:")," ")),u.a.createElement(E.a,null,t.id)),u.a.createElement(d.a,{xs:"1",sm:"2",md:"4"},u.a.createElement(E.a,{className:"text-right",sm:{size:5}},u.a.createElement("b",null,u.a.createElement("label",null,"Fecha:"))),u.a.createElement(E.a,null,t.fecha)),u.a.createElement(d.a,{xs:"1",sm:"2",md:"4"},u.a.createElement(E.a,{className:"text-right",sm:{size:5}},u.a.createElement("b",null,u.a.createElement("label",null,"Tipo de Gasto:"))),u.a.createElement(E.a,null,t.tipogasto.gasto)),u.a.createElement(d.a,{xs:"3"},u.a.createElement(E.a,{className:"text-right",sm:{size:5}},u.a.createElement("b",null,u.a.createElement("label",null,"Gasto:"))),u.a.createElement(E.a,null,t.gasto)),u.a.createElement(d.a,{xs:"4"},u.a.createElement(E.a,{className:"text-right",sm:{size:5}},u.a.createElement("b",null,u.a.createElement("label",null,"Cantidad:"))),u.a.createElement(E.a,null,t.cantidad)),u.a.createElement(d.a,{xs:"4"},u.a.createElement(E.a,{xs:"6",className:"text-right",sm:{size:5}},u.a.createElement("b",null,u.a.createElement("label",null,"Precio:"))),u.a.createElement(E.a,{xs:"6"},"$".concat((new Intl.NumberFormat).format(t.precio_unidad)))),u.a.createElement(d.a,{xs:"1",sm:"2",md:"4"},u.a.createElement(E.a,{className:"text-right",sm:{size:5}},u.a.createElement("b",null,u.a.createElement("label",null,"Precio Total:"))),u.a.createElement(E.a,{xs:"6"},"$".concat((new Intl.NumberFormat).format(t.precio_total)))))),u.a.createElement(h.a,null,u.a.createElement(d.a,null,u.a.createElement(E.a,{sm:{size:6,offset:4}},u.a.createElement(v.a,{className:"col-sm-3 m-1",color:"secondary",size:"sm"},"To return"),u.a.createElement(x.Link,{to:"/expenses/moduls/personalexpenses/edit/".concat(t.id)},u.a.createElement(v.a,{className:"col-sm-3 m-1",color:"dark",size:"sm"},"Edit")))))))},y=a(675);t.default=Object(l.b)((function(e){return{expensestype:e.expensestype.expensestype,expense:e.personalexpenses.personalexpense}}))((function(e){var t=e.match,a=e.expense,n=t.params,l=u.a.useState(!0),p=Object(s.a)(l,2),m=p[0],f=p[1];return Object(o.useEffect)((function(){function e(){return(e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(i.c)(n);case 2:f(!1);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),m?u.a.createElement(y.a,null):u.a.createElement(u.a.Fragment,null,u.a.createElement(g,{expense:a}))}))},517:function(e,t,a){"use strict";var n=function(){var e=window.location.host,t=null;return"localhost:3000"===e&&(t="http://localhost/coysa-laravel6/public/api/"),"johnssther.github.io"===e&&(t="http://coysa.herokuapp.com/api/"),"http://159.65.226.161:3000"===e&&(t="http://localhost/coysa-laravel6/public/api/"),{URL:t,API_TOKEN:localStorage.getItem("token")}};t.a={URL:n().URL,API_TOKEN:n().API_TOKEN,id:null==JSON.parse(localStorage.getItem("auth"))?null:JSON.parse(localStorage.getItem("auth")).id}},523:function(e,t,a){"use strict";a.d(t,"a",(function(){return E}));var n={};a.r(n),a.d(n,"setConfiguracion",(function(){return s}));var r={};a.r(r),a.d(r,"setPersonalexpense",(function(){return o})),a.d(r,"setPersonalexpenses",(function(){return u}));var c={};a.r(c),a.d(c,"setRevenueIndex",(function(){return i})),a.d(c,"setRevenueStore",(function(){return p})),a.d(c,"setRevenueShow",(function(){return m})),a.d(c,"setRevenueUpdate",(function(){return f})),a.d(c,"setRevenueDelete",(function(){return d}));var s=function(e){return{type:"SET_CONFIGURACION",payload:e}},o=function(e){return{type:"SET_PERSONALEXPENSE",payload:e}},u=function(e){return{type:"SET_PERSONALEXPENSES",payload:e}},l=a(530),i=function(e){return{type:"SET_REVENUE_INDEX",payload:e}},p=function(e){return{type:"SET_REVENUE_STORE",payload:e}},m=function(e){return{type:"SET_REVENUE_SHOW",payload:e}},f=function(e){return{type:"SET_REVENUE_UPDATE",payload:e}},d=function(e){return{type:"SET_REVENUE_DELETE",payload:e}},E={configuracion:n,personalexpenses:r,expensestype:l,revenues:c}},524:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return s}));var n=a(555),r=a.n(n),c=function(e){if(console.log(e),!1===e.success)throw e;if(e){var t={success:!1,errors:"Ocurrio un error inesperado de conexi\xf3n por favor recargue su navegador nuevamente."};if(r.a.fire({title:"Atenci\xf3n",text:t.errors,icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si, recargar de nuevo"}).then((function(e){e.value&&window.location.reload()})),"TypeError: Failed to fetch"!==e)throw t;throw t}},s=function(e){throw e}},530:function(e,t,a){"use strict";a.r(t),a.d(t,"setExpensestype",(function(){return n}));var n=function(e){return{type:"SET_EXPENSES_TYPE",payload:e}}},558:function(e,t,a){"use strict";a.d(t,"b",(function(){return d})),a.d(t,"a",(function(){return E})),a.d(t,"d",(function(){return b})),a.d(t,"c",(function(){return h}));var n=a(508),r=a.n(n),c=a(509),s=a(517),o=function(){var e=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s.a.URL,"gastos?api_token=").concat(s.a.API_TOKEN,"&user_id=").concat(s.a.id,"&mes=").concat(t.mes));case 2:return a=e.sent,e.next=5,a.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s.a.URL,"gastos"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({api_token:s.a.API_TOKEN,gasto:t.gasto,cantidad:t.cantidad,precio_unidad:t.precio_unidad,precio_total:t.precio_total,fecha:t.fecha,user_id:t.user_id,tipogasto_id:t.tipogasto_id})});case 2:return a=e.sent,e.next=5,a.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s.a.URL,"gastos/").concat(t.id),{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({api_token:s.a.API_TOKEN,gasto:t.gasto,cantidad:t.cantidad,precio_unidad:t.precio_unidad,precio_total:t.precio_total,fecha:t.fecha,user_id:t.user_id,tipogasto_id:t.tipogasto_id})});case 2:return a=e.sent,e.next=5,a.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s.a.URL,"gastos/").concat(t.id,"?api_token=").concat(s.a.API_TOKEN,"&user_id=").concat(s.a.id));case 2:return a=e.sent,e.next=5,a.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=a(524),m=a(523),f=a(107),d=function(){var e=Object(c.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={mes:null},e.prev=1,e.next=4,o(t);case 4:return a=e.sent,f.b.dispatch(m.a.personalexpenses.setPersonalexpenses(a)),e.abrupt("return",!0);case 9:e.prev=9,e.t0=e.catch(1),Object(p.b)(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u(t);case 3:if(!1!==(a=e.sent).success){e.next=8;break}Object(p.a)(a),e.next=9;break;case 8:return e.abrupt("return",a);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),Object(p.b)(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l(t);case 3:if(!1!==(a=e.sent).success){e.next=8;break}Object(p.a)(a),e.next=9;break;case 8:return e.abrupt("return",a);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),Object(p.b)(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i(t);case 3:return a=e.sent,e.next=6,f.b.dispatch(m.a.personalexpenses.setPersonalexpense(a));case 6:return e.abrupt("return",!0);case 9:e.prev=9,e.t0=e.catch(0),Object(p.b)(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()},582:function(e,t,a){"use strict";var n=a(19),r=a(51),c=a(1),s=a.n(c),o=a(59),u=a.n(o),l=a(506),i=a.n(l),p=a(507),m=u.a.oneOfType([u.a.number,u.a.string]),f={tag:p.m,noGutters:u.a.bool,className:u.a.string,cssModule:u.a.object,form:u.a.bool,xs:m,sm:m,md:m,lg:m,xl:m},d={tag:"div",widths:["xs","sm","md","lg","xl"]},E=function(e){var t=e.className,a=e.cssModule,c=e.noGutters,o=e.tag,u=e.form,l=e.widths,m=Object(r.a)(e,["className","cssModule","noGutters","tag","form","widths"]),f=[];l.forEach((function(t,a){var n=e[t];if(delete m[t],n){var r=!a;f.push(r?"row-cols-"+n:"row-cols-"+t+"-"+n)}}));var d=Object(p.i)(i()(t,c?"no-gutters":null,u?"form-row":"row",f),a);return s.a.createElement(o,Object(n.a)({},m,{className:d}))};E.propTypes=f,E.defaultProps=d,t.a=E},583:function(e,t,a){"use strict";var n=a(19),r=a(51),c=a(1),s=a.n(c),o=a(59),u=a.n(o),l=a(506),i=a.n(l),p=a(507),m=u.a.oneOfType([u.a.number,u.a.string]),f=u.a.oneOfType([u.a.bool,u.a.number,u.a.string,u.a.shape({size:u.a.oneOfType([u.a.bool,u.a.number,u.a.string]),order:m,offset:m})]),d={tag:p.m,xs:f,sm:f,md:f,lg:f,xl:f,className:u.a.string,cssModule:u.a.object,widths:u.a.array},E={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},h=function(e){var t=e.className,a=e.cssModule,c=e.widths,o=e.tag,u=Object(r.a)(e,["className","cssModule","widths","tag"]),l=[];c.forEach((function(t,n){var r=e[t];if(delete u[t],r||""===r){var c=!n;if(Object(p.g)(r)){var s,o=c?"-":"-"+t+"-",m=b(c,t,r.size);l.push(Object(p.i)(i()(((s={})[m]=r.size||""===r.size,s["order"+o+r.order]=r.order||0===r.order,s["offset"+o+r.offset]=r.offset||0===r.offset,s)),a))}else{var f=b(c,t,r);l.push(f)}}})),l.length||l.push("col");var m=Object(p.i)(i()(t,l),a);return s.a.createElement(o,Object(n.a)({},u,{className:m}))};h.propTypes=d,h.defaultProps=E,t.a=h},675:function(e,t,a){"use strict";var n=a(1),r=a.n(n);a(699),a(555);t.a=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3 offset-md-4"},r.a.createElement("div",{className:"container center-block"},r.a.createElement("div",{className:"lds-facebook"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)),r.a.createElement("h4",null,"Cargando..."))))))}},699:function(e,t,a){},752:function(e,t,a){"use strict";var n=a(19),r=a(51),c=a(1),s=a.n(c),o=a(59),u=a.n(o),l=a(506),i=a.n(l),p=a(507),m={tag:p.m,className:u.a.string,cssModule:u.a.object},f=function(e){var t=e.className,a=e.cssModule,c=e.tag,o=Object(r.a)(e,["className","cssModule","tag"]),u=Object(p.i)(i()(t,"card-footer"),a);return s.a.createElement(c,Object(n.a)({},o,{className:u}))};f.propTypes=m,f.defaultProps={tag:"div"},t.a=f}}]);
//# sourceMappingURL=20.f15d496e.chunk.js.map