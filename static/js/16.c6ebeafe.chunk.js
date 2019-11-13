(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{894:function(t,e,a){"use strict";var n=a(227),o=a(228),r=function(){function t(){Object(n.a)(this,t),this.URL="http://coysa.herokuapp.com/api/",this.API_TOKEN=localStorage.getItem("token")}return Object(o.a)(t,[{key:"onLogin",value:function(t,e){return fetch("".concat(this.URL,"login"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:t,password:e})}).then(function(t){return t.json()}).then(function(t){return t}).catch(function(t){throw t})}},{key:"registerUser",value:function(t){return fetch("".concat(this.URL,"register"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:t.name,email:t.email,username:t.username,password:t.password,password_confirmation:t.password_confirmation})}).then(function(t){return t.json()}).then(function(t){return t}).catch(function(t){throw t})}},{key:"saveExpenses",value:function(t){fetch("".concat(this.URL,"gastos"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({api_token:localStorage.getItem("token"),gasto:t.gasto,cantidad:t.cantidad,precio_unidad:t.precioUnidad,precio_total:t.precioTotal,fecha:t.Fecha,user_id:t.id_usuario,tipogasto_id:t.tipogasto_id})}).then(function(t){return t.json()}).catch(function(t){throw t})}},{key:"getExpenses",value:function(){return fetch("".concat(this.URL,"gastos?api_token=").concat(localStorage.getItem("token"),"&user_id=").concat(JSON.parse(localStorage.getItem("auth")).id)).then(function(t){return t.json()}).then(function(t){return t}).catch(function(t){throw t})}},{key:"getTipogastos",value:function(){return fetch("".concat(this.URL,"tipogastos?api_token=").concat(localStorage.getItem("token"),"&user_id=").concat(JSON.parse(localStorage.getItem("auth")).id)).then(function(t){return t.json()}).then(function(t){return t}).catch(function(t){throw t})}}]),t}();e.a=new r},978:function(t,e,a){"use strict";a.r(e);var n=a(227),o=a(228),r=a(230),i=a(229),s=a(233),l=a(231),c=a(3),u=a.n(c),d=a(956),g=a.n(d),p=a(961),h=a(964),m=a.n(h),f=a(967),E=a(913),v=a(925),k=a(918),b=a(919),y=a(920),C=a(895),S=a(914),T=a(891),O=a(906),j=a(892),w=a(979),x=a(980),P=a(933),_=a(955),G=a(981),F=a(894),U=[{name:"Fecha",selector:"fecha",sortable:!0,cell:function(t){return u.a.createElement("div",null,u.a.createElement("div",{style:{fontWeight:700}},t.fecha),t.summary)}},{name:"Cantidad",selector:"cantidad",sortable:!0},{name:"Gasto",selector:"gasto",sortable:!0},{name:"Precio Unid.",selector:"preciounid",sortable:!0},{name:"Precio Total",selector:"precio",sortable:!0}],N=function(t){function e(t){var a;return Object(n.a)(this,e),(a=Object(r.a)(this,Object(i.a)(e).call(this,t))).tipoGasto=function(t,e){console.log(t.value),a.setState({inputTipogasto:t.value})},a.state={ingresargastos:!0,data:[],gastoTotal:0,inputFecha:"",inputCantidad:"",inputGasto:"",inputPrecioUnidad:"",inputPrecioTotal:"",inputTipogasto:"",value:m()(),options:[],danger:!1,textError:"",loading:!0},a.disabledRanges=[{color:"green",start:m()(),end:m()()}],a.handleClick=a.handleClick.bind(Object(s.a)(a)),a.addExpenses=a.addExpenses.bind(Object(s.a)(a)),a.tipoGasto=a.tipoGasto.bind(Object(s.a)(a)),a.toggleDanger=a.toggleDanger.bind(Object(s.a)(a)),a}return Object(l.a)(e,t),Object(o.a)(e,[{key:"componentDidMount",value:function(){var t=this;this.getGastos(),F.a.getTipogastos().then(function(e){var a=e.map(function(t){return{value:t.id,label:t.gasto}});t.setState({options:a})})}},{key:"getGastos",value:function(){var t=this;this.setState({data:[]}),setTimeout(function(){F.a.getExpenses().then(function(e){console.log(e);var a=e.map(function(t){return t.precio_total}),n=e.map(function(t){return{fecha:t.fecha,cantidad:t.cantidad,gasto:t.gasto,preciounid:"$ "+(new Intl.NumberFormat).format(t.precio_unidad),precio:"$ "+(new Intl.NumberFormat).format(t.precio_total)}});if(a.length>0)var o=a.reduce(function(t,e){return t+e});else o=0;t.setState({data:n,gastoTotal:o,loading:!1})})},500)}},{key:"handleClick",value:function(){this.setState({ingresargastos:!this.state.ingresargastos}),this.getGastos()}},{key:"addExpenses",value:function(){var t=this;!function(e){""===e.tipogasto_id?t.setState({danger:!t.state.danger,textError:"Debe seleccionar el tipo de gasto"}):""===e.gasto?t.setState({danger:!t.state.danger,textError:"Debe ingresar un gasto en el campo gasto"}):""===e.cantidad?t.setState({danger:!t.state.danger,textError:"Ingrese una cantidad"}):""===e.precioUnidad?t.setState({danger:!t.state.danger,textError:"Ingrese el costo por unidad"}):(F.a.saveExpenses(e),t.handleClick())}({gasto:this.state.inputGasto,cantidad:this.state.inputCantidad,precioUnidad:this.state.inputPrecioUnidad,precioTotal:""===this.state.inputPrecioTotal?this.state.inputCantidad*this.state.inputPrecioUnidad:this.state.inputPrecioTotal,Fecha:this.state.value.format("YYYY/M/D"),id_usuario:JSON.parse(localStorage.getItem("auth")).id,tipogasto_id:this.state.inputTipogasto})}},{key:"toggleDanger",value:function(){this.setState({danger:!this.state.danger}),console.log("sesion cerrada")}},{key:"render",value:function(){var t=this;return!0===this.state.ingresargastos?u.a.createElement(E.a,null,u.a.createElement(v.a,{isOpen:this.state.danger,toggle:this.toggleDanger,className:"modal-danger "+this.props.className},u.a.createElement(k.a,{toggle:this.toggleDanger},"Error al intentar registrar este gasto"),u.a.createElement(b.a,null,this.state.textError),u.a.createElement(y.a,null,u.a.createElement(C.a,{color:"danger",onClick:this.toggleDanger},"Ok")," ")),u.a.createElement(S.a,{xs:"12",sm:"6"},u.a.createElement(T.a,null,u.a.createElement(O.a,null,u.a.createElement("strong",null,"Nuevo gasto")," generado"),u.a.createElement(j.a,null,u.a.createElement(p.Calendar,{style:{backgroundColo:"red"},onChange:function(e){return t.setState({value:e})},value:this.state.value}),u.a.createElement("h6",null,u.a.createElement("strong",null,"Fecha: "),this.state.value.format("YYYY/M/D"))))),u.a.createElement(S.a,{xs:"12",sm:"6"},u.a.createElement(T.a,null,u.a.createElement(O.a,null,u.a.createElement("strong",null,"Ingresar gastos")," diarios",u.a.createElement(C.a,{style:{marginLeft:137},key:"add",onClick:this.handleClick},"Ver Mis gastos")),u.a.createElement(j.a,null,u.a.createElement(w.a,null,u.a.createElement(x.a,{htmlFor:"inputFecha"},"Fecha"),u.a.createElement(P.a,{type:"text",id:"inputFecha",value:this.state.value.format("YYYY/M/D"),onChange:function(e){return t.setState({inputFecha:e.target.value})}})),u.a.createElement(w.a,null,u.a.createElement(x.a,{htmlFor:"inputTipogasto"},"Tipo Gasto"),u.a.createElement(f.a,{options:this.state.options,onChange:this.tipoGasto})),u.a.createElement(w.a,null,u.a.createElement(x.a,{htmlFor:"inputGasto"},"Gasto"),u.a.createElement(P.a,{placeholder:"Ingresar Gasto",type:"text",id:"inputGasto",onChange:function(e){return t.setState({inputGasto:e.target.value})}})),u.a.createElement(w.a,null,u.a.createElement(x.a,{htmlFor:"inputCantidad"},"Cantidad"),u.a.createElement(P.a,{placeholder:"Numero Total",type:"text",id:"inputCantidad",onChange:function(e){return t.setState({inputCantidad:e.target.value})}})),u.a.createElement(w.a,null,u.a.createElement(x.a,{htmlFor:"inputPrecioUnidad"},"Precio unidad"),u.a.createElement(P.a,{placeholder:"$ Costo Unidad",type:"text",id:"inputPrecioUnidad",onChange:function(e){return t.setState({inputPrecioUnidad:e.target.value})}})),u.a.createElement(w.a,null,u.a.createElement(x.a,{htmlFor:"inputPrecioTotal"},"Precio Total"),u.a.createElement(P.a,{placeholder:"$ Costo Total (opcional)",type:"text",id:"inputPrecioTotal",onChange:function(e){return t.setState({inputPrecioTotal:e.target.value})}})),u.a.createElement(C.a,{key:"add",onClick:this.addExpenses},"Registrar"))))):u.a.createElement(T.a,null,u.a.createElement(O.a,null,u.a.createElement("i",{className:"fa fa-align-justify"}),u.a.createElement("strong",null,"Gastos diarios"),u.a.createElement("small",null," Gastos ")),u.a.createElement(j.a,null,u.a.createElement(g.a,{title:u.a.createElement("small",null,"Gastos diarios. Total: ",u.a.createElement(_.a,{className:"mr-1",href:"#",color:"danger"},"$ ".concat((new Intl.NumberFormat).format(this.state.gastoTotal)))),columns:U,data:this.state.data,highlightOnHover:!0,selectableRows:!0,actions:u.a.createElement(C.a,{key:"add",onClick:this.handleClick},"Nuevo"),pagination:!0,progressPending:this.state.loading,progressComponent:u.a.createElement(G.a,{animation:"border",variant:"primary"})})))}}]),e}(c.Component);e.default=N}}]);
//# sourceMappingURL=16.c6ebeafe.chunk.js.map