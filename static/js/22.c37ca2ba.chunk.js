(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[22],{509:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return c}));var n=a(538),r=a.n(n),l=function(e){if(console.log(e),!1===e.success)throw e;if(e){var t={success:!1,errors:"Ocurrio un error inesperado de conexi\xf3n por favor recargue su navegador nuevamente."};if(r.a.fire({title:"Atenci\xf3n",text:t.errors,icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si, recargar de nuevo"}).then((function(e){e.value&&window.location.reload()})),"TypeError: Failed to fetch"!==e)throw t;throw t}},c=function(e){throw e}},512:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=function(){var e=window.location.host,t=null;return"localhost:3000"===e&&(t="http://localhost/coysa/public/api/"),"johnssther.github.io"===e&&(t="http://coysa.herokuapp.com/api/"),"http://159.65.226.161:3000"===e&&(t="http://localhost/coysa/public/api/"),{URL:t,API_TOKEN:localStorage.getItem("token")}}},521:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n={};a.r(n),a.d(n,"setConfiguracion",(function(){return l}));var r={};a.r(r),a.d(r,"setPersonalexpense",(function(){return c})),a.d(r,"setPersonalexpenses",(function(){return o}));var l=function(e){return{type:"SET_CONFIGURACION",payload:e}},c=function(e){return{type:"SET_PERSONALEXPENSE",payload:e}},o=function(e){return{type:"SET_PERSONALEXPENSES",payload:e}},s={configuracion:n,personalexpenses:r,expensestype:a(522)}},522:function(e,t,a){"use strict";a.r(t),a.d(t,"setExpensestype",(function(){return n}));var n=function(e){return{type:"SET_EXPENSES_TYPE",payload:e}}},564:function(e,t,a){"use strict";a.d(t,"b",(function(){return d})),a.d(t,"a",(function(){return E}));var n=a(516),r=a.n(n),l=a(517),c=a(158),o=a(159),s=a(512),u=new(function(){function e(){Object(c.a)(this,e),this.URL=Object(s.a)().URL,this.API_TOKEN=localStorage.getItem("token")}return Object(o.a)(e,[{key:"getExpensesType",value:function(){return fetch("".concat(this.URL,"tipogastos?api_token=").concat(this.API_TOKEN,"&user_id=").concat(JSON.parse(localStorage.getItem("auth")).id)).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){throw e}))}},{key:"saveExpenseType",value:function(e){return console.log(e,"joh"),fetch("".concat(this.URL,"tipogastos"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({api_token:this.API_TOKEN,tipogastos_name:e.tipogastos_name,tipogastos_active:e.tipogastos_active,tipogastos_usuario:e.tipogastos_usuario})}).then((function(e){return e.json()})).catch((function(e){throw e}))}}]),e}()),i=a(509),m=a(521),p=a(107),d=function(){var e=Object(l.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.getExpensesType();case 3:t=e.sent,p.b.dispatch(m.a.expensestype.setExpensestype(t)),e.next=12;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Ha ocurrido un error"),console.log(e.t0),Object(i.b)(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(l.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.saveExpenseType(t);case 3:a=e.sent,console.log(a),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),Object(i.b)(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},667:function(e,t,a){"use strict";var n=a(1),r=a.n(n);a(697),a(538);t.a=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3 offset-md-4"},r.a.createElement("div",{className:"container center-block"},r.a.createElement("div",{className:"lds-facebook"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)),r.a.createElement("h4",null,"Cargando..."))))))}},697:function(e,t,a){},995:function(e,t,a){"use strict";a.r(t);var n=a(516),r=a.n(n),l=a(517),c=a(158),o=a(159),s=a(161),u=a(160),i=a(1),m=a.n(i),p=(a(509),a(512)),d=new(function(){function e(){Object(c.a)(this,e),this.URL=Object(p.a)().URL,this.API_TOKEN=localStorage.getItem("token")}return Object(o.a)(e,[{key:"getTotalExpensesMonths",value:function(){return fetch("".concat(this.URL,"dashboard/totalexpensesmonths?api_token=").concat(this.API_TOKEN,"&user_id=").concat(JSON.parse(localStorage.getItem("auth")).id)).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){throw e}))}},{key:"getTotalExpensesMonth",value:function(e){return fetch("".concat(this.URL,"dashboard/totalexpensesmonth?api_token=").concat(this.API_TOKEN,"&user_id=").concat(JSON.parse(localStorage.getItem("auth")).id,"&tipogasto=").concat(e)).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){throw e}))}}]),e}()),E=(a(843),a(691)),h=a(589),f=a(692);var g=a(987),v=a(667),b=a(535),x=a(751),y=a(506),N=a.n(y),O=a(844),k=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.className,a=e.cssModule,n=e.header,r=e.mainText,l=e.icon,c=e.color,o=e.footer,s=e.link,u=(e.children,e.variant),i=Object(b.a)(e,["className","cssModule","header","mainText","icon","color","footer","link","children","variant"]),p="0"===u?{card:"p-3",icon:"p-3",lead:"mt-2"}:"1"===u?{card:"p-0",icon:"p-4",lead:"pt-3"}:{card:"p-0",icon:"p-4 px-5",lead:"pt-3"},d={style:"clearfix",color:c,icon:l,classes:""};d.classes=Object(O.mapToCssModules)(N()(t,d.style,p.card),a);var h={style:"h5 mb-0",color:c,classes:""};h.classes=N()(h.style,"text-"+d.color,p.lead);return m.a.createElement(E.a,null,m.a.createElement(f.a,Object.assign({className:d.classes},i),function(e){var t=N()(e,"bg-"+d.color,p.icon,"font-2xl mr-3 float-left");return m.a.createElement("i",{className:t})}(d.icon),m.a.createElement("div",{className:h.classes},n),m.a.createElement("div",{className:"text-muted text-uppercase font-weight-bold font-xs"},r)),function(){if(o)return m.a.createElement(x.a,{className:"px-3 py-2"},m.a.createElement("a",{className:"font-weight-bold font-xs btn-block text-muted",href:s},"Ver M\xe1s",m.a.createElement("i",{className:"fa fa-angle-right float-right font-lg"})))}())}}]),a}(i.Component);k.defaultProps={header:"$1,999.50",mainText:"Income",icon:"fa fa-cogs",color:"primary",variant:"0",link:"#"};var j=a(845),S=a(938),$=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={gastoTotal:""},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.mes;return console.log(e,"a"),m.a.createElement(m.a.Fragment,null,m.a.createElement(E.a,null,m.a.createElement(h.a,null,"Histograma del 2020",m.a.createElement("div",{className:"card-header-actions"})),m.a.createElement(f.a,null,m.a.createElement("div",{className:"chart-wrapper"},m.a.createElement(j.a,{data:{labels:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],datasets:[{label:"Gastos mensuales",backgroundColor:this.props.color,borderColor:"rgba(255,99,132,1)",borderWidth:1,hoverBackgroundColor:"rgba(168,132,8,66)",hoverBorderColor:"rgba(255,99,132,1)",data:e.map((function(e){return e.precio_total_mes}))}]},options:{tooltips:{enabled:!1,custom:S.CustomTooltips},maintainAspectRatio:!1}})))))}}]),a}(i.Component),w=a(967),T=a(986),_=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={gastoTotal:""},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props.mes;return console.log(e,"a"),m.a.createElement(m.a.Fragment,null,m.a.createElement(E.a,null,m.a.createElement(h.a,null,m.a.createElement("i",{className:"fa fa-align-justify"})," Mis finanzas en el a\xf1o. ",m.a.createElement(w.a,{color:"success"},"Beta")),m.a.createElement(f.a,null,m.a.createElement(T.a,{responsive:!0,striped:!0},m.a.createElement("thead",null,m.a.createElement("tr",{className:"bg-success"},m.a.createElement("th",null,"2020"),m.a.createElement("th",null,"Enero"),m.a.createElement("th",null,"Febrero"),m.a.createElement("th",null,"Marzo"),m.a.createElement("th",null,"Abril"),m.a.createElement("th",null,"Mayo"),m.a.createElement("th",null,"Junio"),m.a.createElement("th",null,"Julio"),m.a.createElement("th",null,"Agosto"),m.a.createElement("th",null,"Septiembre"),m.a.createElement("th",null,"Octubre"),m.a.createElement("th",null,"Noviembre"),m.a.createElement("th",null,"Diciembre"))),m.a.createElement("tbody",null,m.a.createElement("tr",null,m.a.createElement("td",null,m.a.createElement(w.a,{color:"success"},"Ingresos")),m.a.createElement("td",null,"$1.000.000"),m.a.createElement("td",null,"$1.000.000"),m.a.createElement("td",null,"$1.000.000"),m.a.createElement("td",null,"$1.000.000"),m.a.createElement("td",null,"$1.000.000"),m.a.createElement("td",null,"$1.000.000"),m.a.createElement("td",null,"$1.000.000"),m.a.createElement("td",null,"$1.000.000"),m.a.createElement("td",null,"$1.000.000"),m.a.createElement("td",null,"$1.000.000"),m.a.createElement("td",null,"$1.000.000"),m.a.createElement("td",null,"$1.000.000")),m.a.createElement("tr",null,m.a.createElement("td",null,m.a.createElement(w.a,{color:"danger"},"Gastos")),m.a.createElement("td",null,"$600.000"),m.a.createElement("td",null,"$1.000.000"),m.a.createElement("td",null,"$1.000.000"),m.a.createElement("td",null,"$1.000.000"),m.a.createElement("td",null,"$1.000.000"),m.a.createElement("td",null,"$1.000.000"),m.a.createElement("td",null,"$1.000.000"),m.a.createElement("td",null,"$1.000.000"),m.a.createElement("td",null,"$1.000.000"),m.a.createElement("td",null,"$1.000.000"),m.a.createElement("td",null,"$1.000.000"),m.a.createElement("td",null,"$0")),m.a.createElement("tr",null,m.a.createElement("td",null,m.a.createElement(w.a,{color:"warning"},"Ahorro")),m.a.createElement("td",null,"$1.800.000"),m.a.createElement("td",null,"$1.000.000"),m.a.createElement("td",null,"$1.000.000"),m.a.createElement("td",null,"$1.000.000"),m.a.createElement("td",null,"$1.000.000"),m.a.createElement("td",null,"$1.000.000"),m.a.createElement("td",null,"$1.000.000"),m.a.createElement("td",null,"$1.000.000"),m.a.createElement("td",null,"$1.000.000"),m.a.createElement("td",null,"$1.000.000"),m.a.createElement("td",null,"$1.000.000"),m.a.createElement("td",null,"$0")))))))}}]),a}(i.Component),C=a(163),M=a(594),A=a(564),I=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={gastoTotal:"",mes:[],loading:!0,expensestype:[],valueSelectExpensestype:"",color:"#F55457"},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.getExpensesMonths(),this.getExpensesMonth(),e.next=4,Object(A.b)();case 4:return e.next=6,this.props.expensestypes.map((function(e){return{value:e.id,label:e.gasto}}));case 6:t=e.sent,this.setState({expensestype:t});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getExpensesMonth",value:function(e){var t=this;d.getTotalExpensesMonth(e).then((function(e){t.setState({gastoTotal:e,loading:!1})})).catch((function(e){console.log(e),t.setState({loading:!1})}))}},{key:"getExpensesMonths",value:function(){var e=this;d.getTotalExpensesMonths().then((function(t){e.setState({mes:t,loading:!1})})).catch((function(t){console.log(t),e.setState({loading:!1})}))}},{key:"onChangeSelect",value:function(){var e=Object(l.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setState({valueSelectExpensestype:t});case 2:this.getExpensesMonth(this.state.valueSelectExpensestype);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return this.state.loading?m.a.createElement(v.a,{loading:this.state.loading}):m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"row mb-2"},m.a.createElement("div",{className:"offset-sm-3 col-sm-6"},m.a.createElement(M.a,{className:"is-invalid",options:this.state.expensestype,onChange:function(t){e.onChangeSelect(t.value)}}))),m.a.createElement(g.a,{className:"cols-2"},m.a.createElement($,{mes:this.state.mes,color:this.state.color}),m.a.createElement(E.a,null,m.a.createElement(h.a,null,"Mis datos de este mes"),m.a.createElement(f.a,null,m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col"},m.a.createElement(E.a,{onClick:function(){return e.setState({color:"green"})}},m.a.createElement(h.a,{style:{background:"#4caf50"},className:"bg-success text-white"},"Ingresos"),m.a.createElement(f.a,null,m.a.createElement("h3",null,"$0.00"))))),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col"},m.a.createElement(E.a,{onClick:function(){return e.setState({color:"red"})}},m.a.createElement(h.a,{style:{background:"#f50057"},className:"text-white"},"Gastos"),m.a.createElement(f.a,null,m.a.createElement("h3",null,"$"+(new Intl.NumberFormat).format(this.state.gastoTotal.toString())))))),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col"},m.a.createElement(E.a,{onClick:function(){return e.setState({color:"orange"})}},m.a.createElement(h.a,{style:{background:"orange"},className:"text-white"},"Ahorro"),m.a.createElement(f.a,null,m.a.createElement("h3",null,"$0.00")))))))),m.a.createElement(_,null))}}]),a}(i.Component);t.default=Object(C.b)((function(e){return{expensestypes:e.expensestype.expensestype,expense:e.personalexpenses.createpersonalexpense}}))(I)}}]);
//# sourceMappingURL=22.c37ca2ba.chunk.js.map