(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[23],{509:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return s}));var a=n(542),o=n.n(a),r=function(e){if(console.log(e),!1===e.success)throw e;if(e){var t={success:!1,errors:"Ocurrio un error inesperado de conexi\xf3n por favor recargue su navegador nuevamente."};if(o.a.fire({title:"Atenci\xf3n",text:t.errors,icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si, recargar de nuevo"}).then((function(e){e.value&&window.location.reload()})),"TypeError: Failed to fetch"!==e)throw t;throw t}},s=function(e){throw e}},514:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=function(){var e=window.location.host,t=null;return"localhost:3000"===e&&(t="http://localhost/coysa/public/api/"),"johnssther.github.io"===e&&(t="http://coysa.herokuapp.com/api/"),"http://159.65.226.161:3000"===e&&(t="http://localhost/coysa/public/api/"),{URL:t,API_TOKEN:localStorage.getItem("token")}}},519:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var a={};n.r(a),n.d(a,"setConfiguracion",(function(){return s}));var o={};n.r(o),n.d(o,"setPersonalexpense",(function(){return c})),n.d(o,"setPersonalexpenses",(function(){return i}));var r={};n.r(r),n.d(r,"setRevenueIndex",(function(){return u})),n.d(r,"setRevenueStore",(function(){return m})),n.d(r,"setRevenueShow",(function(){return p})),n.d(r,"setRevenueUpdate",(function(){return d})),n.d(r,"setRevenueDelete",(function(){return f}));var s=function(e){return{type:"SET_CONFIGURACION",payload:e}},c=function(e){return{type:"SET_PERSONALEXPENSE",payload:e}},i=function(e){return{type:"SET_PERSONALEXPENSES",payload:e}},l=n(526),u=function(e){return{type:"SET_REVENUE_INDEX",payload:e}},m=function(e){return{type:"SET_REVENUE_STORE",payload:e}},p=function(e){return{type:"SET_REVENUE_SHOW",payload:e}},d=function(e){return{type:"SET_REVENUE_UPDATE",payload:e}},f=function(e){return{type:"SET_REVENUE_DELETE",payload:e}},h={configuracion:a,personalexpenses:o,expensestype:l,revenues:r}},526:function(e,t,n){"use strict";n.r(t),n.d(t,"setExpensestype",(function(){return a}));var a=function(e){return{type:"SET_EXPENSES_TYPE",payload:e}}},576:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return f}));var a=n(517),o=n.n(a),r=n(518),s=n(158),c=n(159),i=n(514),l=new(function(){function e(){Object(s.a)(this,e),this.URL=Object(i.a)().URL,this.API_TOKEN=localStorage.getItem("token")}return Object(c.a)(e,[{key:"getExpensesType",value:function(){return fetch("".concat(this.URL,"tipogastos?api_token=").concat(this.API_TOKEN,"&user_id=").concat(JSON.parse(localStorage.getItem("auth")).id)).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){throw e}))}},{key:"saveExpenseType",value:function(e){return console.log(e,"joh"),fetch("".concat(this.URL,"tipogastos"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({api_token:this.API_TOKEN,tipogastos_name:e.tipogastos_name,tipogastos_active:e.tipogastos_active,tipogastos_usuario:e.tipogastos_usuario})}).then((function(e){return e.json()})).catch((function(e){throw e}))}}]),e}()),u=n(509),m=n(519),p=n(107),d=function(){var e=Object(r.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.getExpensesType();case 3:t=e.sent,p.b.dispatch(m.a.expensestype.setExpensestype(t)),e.next=12;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Ha ocurrido un error"),console.log(e.t0),Object(u.b)(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(r.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.saveExpenseType(t);case 3:n=e.sent,console.log(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),Object(u.b)(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},585:function(e,t,n){"use strict";var a=n(513),o=n(1),r=n.n(o);n(951),n(658),n(842),n(659),n(656),t.a=function(e){var t=e.children,n=(e.success,Object(o.useState)(!0)),s=Object(a.a)(n,2);s[0],s[1];return r.a.createElement("div",null,t)}},672:function(e,t,n){"use strict";var a=n(1),o=n.n(a);n(699),n(542);t.a=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-3 offset-md-4"},o.a.createElement("div",{className:"container center-block"},o.a.createElement("div",{className:"lds-facebook"},o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null)),o.a.createElement("h4",null,"Cargando..."))))))}},699:function(e,t,n){},999:function(e,t,n){"use strict";n.r(t);var a=n(517),o=n.n(a),r=n(518),s=n(158),c=n(159),i=n(162),l=n(161),u=n(1),m=n.n(u),p=(n(509),n(514)),d=new(function(){function e(){Object(s.a)(this,e),this.URL=Object(p.a)().URL,this.API_TOKEN=localStorage.getItem("token")}return Object(c.a)(e,[{key:"getTotalExpensesMonths",value:function(){return fetch("".concat(this.URL,"dashboard/totalexpensesmonths?api_token=").concat(this.API_TOKEN,"&user_id=").concat(JSON.parse(localStorage.getItem("auth")).id)).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){throw e}))}},{key:"getTotalExpensesMonth",value:function(e){return fetch("".concat(this.URL,"dashboard/totalexpensesmonth?api_token=").concat(this.API_TOKEN,"&user_id=").concat(JSON.parse(localStorage.getItem("auth")).id,"&tipogasto=").concat(e)).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){throw e}))}}]),e}()),f=(n(845),n(695)),h=n(586),E=n(696);var g=n(160),v=n(585),b=n(941),_=n(672),x=n(539),y=n(751),N=n(506),w=n.n(N),S=n(846),O=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.cssModule,a=e.header,o=e.mainText,r=e.icon,s=e.color,c=e.footer,i=e.link,l=(e.children,e.variant),u=Object(x.a)(e,["className","cssModule","header","mainText","icon","color","footer","link","children","variant"]),p="0"===l?{card:"p-3",icon:"p-3",lead:"mt-2"}:"1"===l?{card:"p-0",icon:"p-4",lead:"pt-3"}:{card:"p-0",icon:"p-4 px-5",lead:"pt-3"},d={style:"clearfix",color:s,icon:r,classes:""};d.classes=Object(S.mapToCssModules)(w()(t,d.style,p.card),n);var h={style:"h5 mb-0",color:s,classes:""};h.classes=w()(h.style,"text-"+d.color,p.lead);return m.a.createElement(f.a,null,m.a.createElement(E.a,Object.assign({className:d.classes},u),function(e){var t=w()(e,"bg-"+d.color,p.icon,"font-2xl mr-3 float-left");return m.a.createElement("i",{className:t})}(d.icon),m.a.createElement("div",{className:h.classes},a),m.a.createElement("div",{className:"text-muted text-uppercase font-weight-bold font-xs"},o)),function(){if(c)return m.a.createElement(y.a,{className:"px-3 py-2"},m.a.createElement("a",{className:"font-weight-bold font-xs btn-block text-muted",href:i},"Ver M\xe1s",m.a.createElement("i",{className:"fa fa-angle-right float-right font-lg"})))}())}}]),n}(u.Component);O.defaultProps={header:"$1,999.50",mainText:"Income",icon:"fa fa-cogs",color:"primary",variant:"0",link:"#"};var j=n(847),T=n(940),k=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={gastoTotal:""},a}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.mes;return console.log(e,"a"),m.a.createElement(m.a.Fragment,null,m.a.createElement(f.a,{style:{borderRadius:"10px"}},m.a.createElement(h.a,{style:{borderRadius:"10px 10px 0px 0px"}},"Histograma del 2020",m.a.createElement("div",{className:"card-header-actions"})),m.a.createElement(E.a,null,m.a.createElement("div",{className:"chart-wrapper"},m.a.createElement(j.a,{data:{labels:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],datasets:[{label:"Gastos mensuales",backgroundColor:this.props.color,borderColor:"rgba(255,99,132,1)",borderWidth:1,hoverBackgroundColor:"rgba(168,132,8,66)",hoverBorderColor:"rgba(255,99,132,1)",data:e.map((function(e){return e.precio_total_mes}))}]},options:{tooltips:{enabled:!1,custom:T.CustomTooltips},maintainAspectRatio:!1}})))))}}]),n}(u.Component),R=n(970),C=n(992),I=(u.Component,n(163)),M=n(644),A=n(576),P={coming_soon:"Proximamente:",coming_soon_item1:"Seleccionar su idioma preferido (Multiidioma).",news:"Novedades",news_item1:"-Ahora puedes registrar tus ingresos y verlos en el modulo de ingresos que hemos creado para t\xed.",news_item2:"-Una vista mas limpia y minimalista.",news_item3:"-Aun continuamos mejorando.",to_explore:"Explorar",btn_en:"Ingles",btn_es:"Espa\xf1ol",btn_fr:"Frances",my_expenses:"Mis Gastos"},U={coming_soon:"Coming Soon:",coming_soon_item1:"Select your preferred language (Multi-language)",news:"News",news_item1:"-Now you can register your income and see them in the income module that we have created for you.",news_item2:"-A cleaner and minimalist view.",news_item3:"-We are still improving.",to_explore:"To explore",btn_en:"English",btn_es:"Spanish",btn_fr:"French",my_expenses:"My expenses"},L={coming_soon:"Bient\xf4t disponible:",coming_soon_item1:"S\xe9lectionnez votre langue pr\xe9f\xe9r\xe9e (multilingue).",news:"Nouveautes",news_item1:"-Vous pouvez d\xe9sormais enregistrer vos revenus et les consulter dans le module de revenus que nous avons cr\xe9\xe9 pour vous.",news_item2:"-Une vue \xe9pur\xe9e et minimaliste.",news_item3:"-Nous nous am\xe9liorons encore.",to_explore:"Explorer",btn_en:"Anglais",btn_es:"Espagnol",btn_fr:"Fran\xe7ais",my_expenses:"Mes d\xe9penses"},F=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={gastoTotal:"",mes:[],loading:!0,expensestype:[],valueSelectExpensestype:"",color:"#F55457",languaje:P,btn_color:!1},a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=Object(r.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.getExpensesMonths(),this.getExpensesMonth(),e.next=4,Object(A.b)();case 4:return e.next=6,this.props.expensestypes.map((function(e){return{value:e.id,label:e.gasto}}));case 6:t=e.sent,this.setState({expensestype:t});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getExpensesMonth",value:function(e){var t=this;d.getTotalExpensesMonth(e).then((function(e){t.setState({gastoTotal:e,loading:!1})})).catch((function(e){console.log(e),t.setState({loading:!1})}))}},{key:"getExpensesMonths",value:function(){var e=this;d.getTotalExpensesMonths().then((function(t){e.setState({mes:t,loading:!1})})).catch((function(t){console.log(t),e.setState({loading:!1})}))}},{key:"onChangeSelect",value:function(){var e=Object(r.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setState({valueSelectExpensestype:t});case 2:this.getExpensesMonth(this.state.valueSelectExpensestype);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,n=t.languaje,a=t.btn_color;return this.state.loading?m.a.createElement(_.a,{loading:this.state.loading}):m.a.createElement(v.a,{success:!1},m.a.createElement("div",{className:"row mb-2"},m.a.createElement("div",{className:"offset-sm-3 col-sm-6"},m.a.createElement(b.a,{color:"primary"},n.coming_soon,m.a.createElement("br",null),n.coming_soon_item1,m.a.createElement("br",null)),m.a.createElement(b.a,{color:"success"},n.news,m.a.createElement("br",null),n.news_item1,m.a.createElement("br",null),n.news_item2,m.a.createElement("br",null),n.news_item3,m.a.createElement("br",null),m.a.createElement(g.Link,{title:"Ir al modulo de ingresos",className:"btn btn-warning",to:"/revenues"},n.to_explore)),m.a.createElement(M.a,{className:"is-invalid",options:this.state.expensestype,onChange:function(t){e.onChangeSelect(t.value)}})),m.a.createElement("div",{className:" col-sm-3"},m.a.createElement("button",{className:"btn btn-sm btn-".concat("warning"," m-1"),onClick:function(){e.setState({languaje:P,btn_color:!a})}},n.btn_es),m.a.createElement("button",{className:"btn btn-sm btn-".concat("warning"," m-1"),onClick:function(){e.setState({languaje:U,btn_color:!a})}},n.btn_en),m.a.createElement("button",{className:"btn btn-sm btn-".concat("warning"," m-1"),onClick:function(){e.setState({languaje:L,btn_color:!a})}},n.btn_fr))),m.a.createElement("div",{className:"row mb-2"},m.a.createElement("div",{className:"offset-sm-3 col-sm-6"},m.a.createElement(f.a,{style:{borderRadius:"10px"}},m.a.createElement(E.a,null,m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col"},m.a.createElement("h6",null,n.my_expenses),m.a.createElement("h3",null,"$"+(new Intl.NumberFormat).format(this.state.gastoTotal.toString())))))))),m.a.createElement("div",{className:"row mb-2"},m.a.createElement("div",{className:"offset-sm-3 col-sm-6"},m.a.createElement(k,{mes:this.state.mes,color:this.state.color}))))}}]),n}(u.Component);t.default=Object(I.b)((function(e){return{expensestypes:e.expensestype.expensestype,expense:e.personalexpenses.createpersonalexpense}}))(F)}}]);
//# sourceMappingURL=23.5ab4b21a.chunk.js.map