(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[25],{1031:function(e,t,n){"use strict";n.r(t);var r=n(508),a=n.n(r),o=n(509),c=n(514),s=n(1),u=n.n(s),i=n(645),p=n(667),l=n.n(p),d=n(158),f=n(587),h=n(643),b=n(662),m=n(698),E=n(663),x=n(668);function v(){var e=Object(i.a)(["\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  height: 34px;\n  width: 32px;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return v=function(){return e},e}function g(){var e=Object(i.a)(["\n  height: 32px;\n  width: 200px;\n  border-radius: 3px;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border: 1px solid #e5e5e5;\n  padding: 0 32px 0 16px;\n\n  &:hover {\n    cursor: pointer;\n  }\n"]);return g=function(){return e},e}var w={header:{borderColor:"red",backgroundColor:"primary"},rows:{spacingBorderRadius:"7px",spacingMargin:"1px",backgroundColor:"white"},cells:{},footer:{separatorStyle:"none"}},y=x.default.input(g()),O=Object(x.default)(h.a)(v()),_=function(e){var t=e.filterText,n=e.onFilter,r=e.onClear;return u.a.createElement(u.a.Fragment,null,u.a.createElement(y,{id:"search",type:"text",placeholder:"Browser Expense",value:t,onChange:n}),u.a.createElement(O,{type:"button",onClick:r},"X"))},j=[{name:"Actions",selector:"id",sortable:!0,cell:function(e){return u.a.createElement(u.a.Fragment,null,u.a.createElement(d.Link,{to:"/expenses/moduls/personalexpenses/show/".concat(e.id)},u.a.createElement("i",{title:"Show",className:"text-success icon-eye m-1"})))},grow:0},{name:"Date",selector:"fecha",wrap:!0,sortable:!0,cell:function(e){return u.a.createElement("div",null,u.a.createElement("div",{style:{fontWeight:700}},e.fecha),e.summary)},grow:0},{name:"Expense type",selector:"tipo_gasto",wrap:!0,sortable:!0,grow:0},{name:"Count",selector:"cantidad",sortable:!0,grow:0},{name:"Expense",selector:"gasto",wrap:!0,sortable:!0,grow:4},{name:"Unit price",selector:"precio_unidad",sortable:!0},{name:"Total price",selector:"precio_total",sortable:!0},{cell:function(e){return u.a.createElement(u.a.Fragment,null)},allowOverflow:!0,button:!0,width:"56px"}];var S=function(e){var t=e.expenses,n=e.loading,r=e.onNew,a=u.a.useState(""),o=Object(c.a)(a,2),s=o[0],i=o[1],p=u.a.useState(!1),d=Object(c.a)(p,2),x=d[0],v=d[1],g=t.filter((function(e){return e.gasto&&e.gasto.toLowerCase().includes(s.toLowerCase())})),y=u.a.useMemo((function(){return u.a.createElement(_,{onFilter:function(e){return i(e.target.value)},onClear:function(){s&&(v(!x),i(""))},filterText:s})}),[s,x]);return console.log(n),u.a.createElement(b.a,null,u.a.createElement(m.a,null,u.a.createElement("i",{className:"fa fa-align-justify"}),u.a.createElement("strong",null,"Daily Expenses"),u.a.createElement("small",null," Expenses ")),u.a.createElement(E.a,null,u.a.createElement(l.a,{title:"Personal Expenses",columns:j,data:g,actions:u.a.createElement(h.a,{name:"Add",onClick:r},u.a.createElement("i",{className:"fa fa-plus m-1"}),"Add"),highlightOnHover:!0,pagination:!0,customTheme:w,progressPending:n,progressComponent:u.a.createElement(f.a,{data:t}),progressShowTableHead:!0,ignoreRowClick:!0,theme:"solarized",subHeader:!0,subHeaderComponent:y})))},T=n(163),k=n(558);t.default=Object(T.b)((function(e){return{expenses:e.personalexpenses.personalexpenses}}))((function(e){var t=e.expenses,n=Object(s.useState)(!0),r=Object(c.a)(n,2),i=r[0],p=r[1];return Object(s.useEffect)((function(){function e(){return(e=Object(o.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(k.b)();case 2:t=e.sent,console.log(t),p(!t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),u.a.createElement(S,{expenses:t,onNew:function(){e.history.push("/expenses/moduls/personalexpenses/create")},loading:i})}))},517:function(e,t,n){"use strict";var r=function(){var e=window.location.host,t=null;return"localhost:3000"===e&&(t="http://localhost/coysa-laravel6/public/api/"),"johnssther.github.io"===e&&(t="http://coysa.herokuapp.com/api/"),"http://159.65.226.161:3000"===e&&(t="http://localhost/coysa-laravel6/public/api/"),{URL:t,API_TOKEN:localStorage.getItem("token")}};t.a={URL:r().URL,API_TOKEN:r().API_TOKEN,id:JSON.parse(localStorage.getItem("auth")).id}},523:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r={};n.r(r),n.d(r,"setConfiguracion",(function(){return c}));var a={};n.r(a),n.d(a,"setPersonalexpense",(function(){return s})),n.d(a,"setPersonalexpenses",(function(){return u}));var o={};n.r(o),n.d(o,"setRevenueIndex",(function(){return p})),n.d(o,"setRevenueStore",(function(){return l})),n.d(o,"setRevenueShow",(function(){return d})),n.d(o,"setRevenueUpdate",(function(){return f})),n.d(o,"setRevenueDelete",(function(){return h}));var c=function(e){return{type:"SET_CONFIGURACION",payload:e}},s=function(e){return{type:"SET_PERSONALEXPENSE",payload:e}},u=function(e){return{type:"SET_PERSONALEXPENSES",payload:e}},i=n(530),p=function(e){return{type:"SET_REVENUE_INDEX",payload:e}},l=function(e){return{type:"SET_REVENUE_STORE",payload:e}},d=function(e){return{type:"SET_REVENUE_SHOW",payload:e}},f=function(e){return{type:"SET_REVENUE_UPDATE",payload:e}},h=function(e){return{type:"SET_REVENUE_DELETE",payload:e}},b={configuracion:r,personalexpenses:a,expensestype:i,revenues:o}},524:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c}));var r=n(555),a=n.n(r),o=function(e){if(console.log(e),!1===e.success)throw e;if(e){var t={success:!1,errors:"Ocurrio un error inesperado de conexi\xf3n por favor recargue su navegador nuevamente."};if(a.a.fire({title:"Atenci\xf3n",text:t.errors,icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si, recargar de nuevo"}).then((function(e){e.value&&window.location.reload()})),"TypeError: Failed to fetch"!==e)throw t;throw t}},c=function(e){throw e}},530:function(e,t,n){"use strict";n.r(t),n.d(t,"setExpensestype",(function(){return r}));var r=function(e){return{type:"SET_EXPENSES_TYPE",payload:e}}},558:function(e,t,n){"use strict";n.d(t,"b",(function(){return h})),n.d(t,"a",(function(){return b})),n.d(t,"d",(function(){return m})),n.d(t,"c",(function(){return E}));var r=n(508),a=n.n(r),o=n(509),c=n(517),s=function(){var e=Object(o.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(c.a.URL,"gastos?api_token=").concat(c.a.API_TOKEN,"&user_id=").concat(c.a.id,"&mes=").concat(t.mes));case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=Object(o.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(c.a.URL,"gastos"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({api_token:c.a.API_TOKEN,gasto:t.gasto,cantidad:t.cantidad,precio_unidad:t.precio_unidad,precio_total:t.precio_total,fecha:t.fecha,user_id:t.user_id,tipogasto_id:t.tipogasto_id})});case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=Object(o.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(c.a.URL,"gastos/").concat(t.id),{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({api_token:c.a.API_TOKEN,gasto:t.gasto,cantidad:t.cantidad,precio_unidad:t.precio_unidad,precio_total:t.precio_total,fecha:t.fecha,user_id:t.user_id,tipogasto_id:t.tipogasto_id})});case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(o.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(c.a.URL,"gastos/").concat(t.id,"?api_token=").concat(c.a.API_TOKEN,"&user_id=").concat(c.a.id));case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=n(524),d=n(523),f=n(107),h=function(){var e=Object(o.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={mes:null},e.prev=1,e.next=4,s(t);case 4:return n=e.sent,f.b.dispatch(d.a.personalexpenses.setPersonalexpenses(n)),e.abrupt("return",!0);case 9:e.prev=9,e.t0=e.catch(1),Object(l.b)(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(o.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u(t);case 3:if(!1!==(n=e.sent).success){e.next=8;break}Object(l.a)(n),e.next=9;break;case 8:return e.abrupt("return",n);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),Object(l.b)(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(o.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i(t);case 3:if(!1!==(n=e.sent).success){e.next=8;break}Object(l.a)(n),e.next=9;break;case 8:return e.abrupt("return",n);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),Object(l.b)(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(o.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p(t);case 3:return n=e.sent,e.next=6,f.b.dispatch(d.a.personalexpenses.setPersonalexpense(n));case 6:return e.abrupt("return",!0);case 9:e.prev=9,e.t0=e.catch(0),Object(l.b)(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()},587:function(e,t,n){"use strict";var r=n(1),a=n.n(r),o=n(835),c=n(985),s=Object(c.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}));t.a=function(){var e=s();return a.a.createElement("div",{className:e.root},a.a.createElement(o.a,{color:"secondary"}))}},645:function(e,t,n){"use strict";function r(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,"a",(function(){return r}))}}]);
//# sourceMappingURL=25.e6d61186.chunk.js.map