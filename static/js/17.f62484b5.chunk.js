(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{1004:function(t,e,a){"use strict";a.r(e);var n=a(227),o=a(228),i=a(231),r=a(229),s=a(233),c=a(230),l=a(3),u=a.n(l),d=a(925),p=a.n(d),h=a(964),g=a(967),m=a.n(g),f=a(1003),E=a(999),b=a(898),v=a(924),C=a(899),k=a(903),y=a(978),j=a(951),O=a(952),T=a(997),w=a(998),x=a(939),S=a(953),_=(l.Component,a(891)),F=function(t){function e(t){var a;return Object(n.a)(this,e),(a=Object(i.a)(this,Object(r.a)(e).call(this,t))).delete=a.delete.bind(Object(s.a)(a)),a}return Object(c.a)(e,t),Object(o.a)(e,[{key:"delete",value:function(){!0===window.confirm("\xbfRealmente deseas eliminar este gasto? "+this.props.data.id)&&_.a.deleteExpense(this.props.data.id).then(function(t){console.log(t)})}},{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement(b.a,null,u.a.createElement(v.a,null,"Codigo: ",this.props.data.id),u.a.createElement(C.a,null,"Gasto: ",this.props.data.gasto," ",u.a.createElement("br",null),"Acciones:",u.a.createElement(k.a,{key:"delete",className:"btn-sm btn-danger",onClick:this.delete},"Eliminar Gasto"))))}}]),e}(l.Component),P={header:{borderColor:"transparent"},rows:{spacing:"spaced",spacingBorderRadius:"50px",spacingMargin:"3px",borderColor:"rgba(0,0,0,.12)",backgroundColor:"white",height:"52px"},cells:{cellPadding:"48px"},footer:{separatorStyle:"none"}},N=[{name:"Fecha",selector:"fecha",sortable:!0,cell:function(t){return u.a.createElement("div",null,u.a.createElement("div",{style:{fontWeight:700}},t.fecha),t.summary)}},{name:"Cantidad",selector:"cantidad",sortable:!0},{name:"Gasto",selector:"gasto",sortable:!0},{name:"Precio Unid.",selector:"preciounid",sortable:!0},{name:"Precio Total",selector:"precio",sortable:!0},{cell:function(t){return u.a.createElement(u.a.Fragment,null)},allowOverflow:!0,button:!0,width:"56px"}],U=function(){var t=L();return u.a.createElement("div",{className:t.root},u.a.createElement(f.a,{color:"secondary"}))},G=function(t){function e(){return Object(n.a)(this,e),Object(i.a)(this,Object(r.a)(e).apply(this,arguments))}return Object(c.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return u.a.createElement(b.a,null,u.a.createElement(v.a,null,u.a.createElement("i",{className:"fa fa-align-justify"}),u.a.createElement("strong",null,"Gastos diarios"),u.a.createElement("small",null," Gastos ")),u.a.createElement(C.a,null,u.a.createElement(m.a,{title:this.props.title,columns:N,data:this.props.gastos,highlightOnHover:!0,actions:u.a.createElement(k.a,{key:"add",onClick:this.props.handleClick},"Nuevo"),pagination:!0,customTheme:P,expandableRows:!0,expandableRowsComponent:u.a.createElement(F,{data:this.props.gastos}),expandOnRowClicked:!0,progressPending:this.props.loading,progressComponent:u.a.createElement(U,{data:this.props.gastos}),progressShowTableHead:!0,ignoreRowClick:!0})))}}]),e}(l.Component),L=Object(E.a)(function(t){return{root:{width:"100%","& > * + *":{marginTop:t.spacing(2)}}}}),R=G,I=a(972),Y=a(976),A=a(901),J=a(902),M=a(1e3),D=function(t){function e(t){var a;return Object(n.a)(this,e),(a=Object(i.a)(this,Object(r.a)(e).call(this,t))).tipoGasto=function(t,e){a.setState({inputTipogasto:t.value})},a.state={fecha:"",inputFecha:p()(),inputGasto:"",inputPrecioUnidad:"",inputPrecioTotal:"",inputTipogasto:"",options:[],loading:!0,large:!1,textError:""},a.addExpenses=a.addExpenses.bind(Object(s.a)(a)),a.toggleLarge=a.toggleLarge.bind(Object(s.a)(a)),a}return Object(c.a)(e,t),Object(o.a)(e,[{key:"componentDidMount",value:function(){var t=this;_.a.getTipogastos().then(function(e){var a=e.map(function(t){return{value:t.id,label:t.gasto}});t.setState({options:a,loading:!1})})}},{key:"addExpenses",value:function(){var t={gasto:this.state.inputGasto,cantidad:this.state.inputCantidad,precioUnidad:this.state.inputPrecioUnidad,precioTotal:""===this.state.inputPrecioTotal?this.state.inputCantidad*this.state.inputPrecioUnidad:this.state.inputPrecioTotal,Fecha:this.state.inputFecha.format("YYYY/M/D"),id_usuario:JSON.parse(localStorage.getItem("auth")).id,tipogasto_id:this.state.inputTipogasto};this.props.addExpense(t)}},{key:"toggleLarge",value:function(){this.setState({large:!this.state.large,textError:"Ingrese el costo por unidad"})}},{key:"render",value:function(){var t=this;return u.a.createElement(A.a,null,u.a.createElement(y.a,{isOpen:this.state.large,toggle:this.toggleLarge,className:"modal-sm "+this.props.className},u.a.createElement(j.a,{toggle:this.toggleLarge},"Modal title"),u.a.createElement(O.a,null),u.a.createElement(S.a,null,u.a.createElement(k.a,{color:"primary",onClick:this.toggleLarge},"Do Something")," ",u.a.createElement(k.a,{color:"secondary",onClick:this.toggleLarge},"Cancel"))),u.a.createElement(J.a,{xs:"12",sm:"6"},u.a.createElement(b.a,null,u.a.createElement(v.a,null,u.a.createElement("strong",null,"Nuevo gasto")," generado",u.a.createElement(k.a,{onClick:this.toggleLarge},"Abrir modal")),u.a.createElement(C.a,null,u.a.createElement(I.Calendar,{style:{backgroundColo:"red"},onChange:function(e){return t.setState({inputFecha:e})},value:this.state.inputFecha}),u.a.createElement("h6",null,u.a.createElement("strong",null,"Fecha: "),this.state.inputFecha.format("YYYY/M/D"))))),u.a.createElement(J.a,{xs:"12",sm:"6"},u.a.createElement(b.a,null,u.a.createElement(v.a,null,u.a.createElement("strong",null,"Ingresar gastos")," diarios",u.a.createElement(k.a,{style:{marginLeft:137},key:"add",onClick:this.props.handleClick},"Ver Mis gastos")),u.a.createElement(C.a,null,u.a.createElement(T.a,null,u.a.createElement(w.a,{htmlFor:"inputFecha"},"Fecha"),u.a.createElement(x.a,{type:"text",id:"inputFecha",value:this.state.inputFecha.format("YYYY/M/D"),onChange:function(t){return null}})),u.a.createElement(T.a,null,u.a.createElement(w.a,{htmlFor:"inputTipogasto"},"Tipo Gasto"),u.a.createElement(Y.a,{options:this.state.options,onChange:this.tipoGasto}),!0===this.state.loading?u.a.createElement(M.a,{color:"success"}):""),u.a.createElement(T.a,null,u.a.createElement(w.a,{htmlFor:"inputGasto"},"Gasto"),u.a.createElement(x.a,{placeholder:"Ingresar Gasto",type:"text",id:"inputGasto",onChange:function(e){return t.setState({inputGasto:e.target.value})}})),u.a.createElement(T.a,null,u.a.createElement(w.a,{htmlFor:"inputCantidad"},"Cantidad"),u.a.createElement(x.a,{placeholder:"Numero Total",type:"text",id:"inputCantidad",onChange:function(e){return t.setState({inputCantidad:e.target.value})}})),u.a.createElement(T.a,null,u.a.createElement(w.a,{htmlFor:"inputPrecioUnidad"},"Precio unidad"),u.a.createElement(x.a,{placeholder:"$ Costo Unidad",type:"text",id:"inputPrecioUnidad",onChange:function(e){return t.setState({inputPrecioUnidad:e.target.value})}})),u.a.createElement(T.a,null,u.a.createElement(w.a,{htmlFor:"inputPrecioTotal"},"Precio Total"),u.a.createElement(x.a,{placeholder:"$ Costo Total (opcional)",type:"text",id:"inputPrecioTotal",onChange:function(e){return t.setState({inputPrecioTotal:e.target.value})}})),u.a.createElement(k.a,{key:"add",onClick:this.addExpenses},"Registrar")))))}}]),e}(l.Component),$=function(t){function e(t){var a;return Object(n.a)(this,e),(a=Object(i.a)(this,Object(r.a)(e).call(this,t))).state={ingresargastos:!1,data:[],gastoTotal:0,loading:!0},a.handleClick=a.handleClick.bind(Object(s.a)(a)),a}return Object(c.a)(e,t),Object(o.a)(e,[{key:"componentDidMount",value:function(){var t=this;this.getGastos(),_.a.getTipogastos().then(function(e){var a=e.map(function(t){return{value:t.id,label:t.gasto}});t.setState({options:a})})}},{key:"getGastos",value:function(){var t=this;this.setState({data:[]}),_.a.getExpenses().then(function(e){var a=e.map(function(t){return t.precio_total}),n=e.map(function(t){return{id:t.id,fecha:t.fecha,cantidad:t.cantidad,gasto:t.gasto,preciounid:"$ "+(new Intl.NumberFormat).format(t.precio_unidad),precio:"$ "+(new Intl.NumberFormat).format(t.precio_total)}});if(a.length>0)var o=a.reduce(function(t,e){return t+e});else o=0;t.setState({data:n,gastoTotal:o,loading:!1})})}},{key:"addExpense",value:function(t){var e=this,a={gasto:t.gasto,cantidad:t.cantidad,precioUnidad:t.precioUnidad,precioTotal:t.precioTotal,Fecha:t.Fecha,id_usuario:t.id_usuario,tipogasto_id:t.tipogasto_id};_.a.saveExpenses(a).then(function(t){e.handleClick()}).catch(function(t){alert("Ha ocurrido un error inesperado :(")})}},{key:"handleClick",value:function(){this.setState({ingresargastos:!this.state.ingresargastos,loading:!this.state.loading}),this.getGastos()}},{key:"render",value:function(){if(!0===this.state.ingresargastos)return u.a.createElement(D,{addExpense:this.addExpense,handleClick:this.handleClick});var t=u.a.createElement("small",null,"Gastos diarios. Total: ",u.a.createElement(h.a,{className:"mr-1",href:"#",color:"danger"},"$ ".concat((new Intl.NumberFormat).format(this.state.gastoTotal))));return u.a.createElement(R,{gastos:this.state.data,loading:this.state.loading,title:t,handleClick:this.handleClick})}}]),e}(l.Component);e.default=$},891:function(t,e,a){"use strict";var n=a(227),o=a(228),i=function(){function t(){Object(n.a)(this,t);var e=window.location.host;"localhost:3000"===e&&(this.URL="http://localhost/coysa/public/api/"),"johnssther.github.io"===e&&(this.URL="http://coysa.herokuapp.com/api/"),this.API_TOKEN=localStorage.getItem("token")}return Object(o.a)(t,[{key:"onLogin",value:function(t,e){return fetch("".concat(this.URL,"login"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:t,password:e})}).then(function(t){return t.json()}).then(function(t){return t}).catch(function(t){throw t})}},{key:"registerUser",value:function(t){return fetch("".concat(this.URL,"register"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:t.name,email:t.email,username:t.username,password:t.password,password_confirmation:t.password_confirmation})}).then(function(t){return t.json()}).then(function(t){return t}).catch(function(t){throw t})}},{key:"saveExpenses",value:function(t){return fetch("".concat(this.URL,"gastos"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({api_token:this.API_TOKEN,gasto:t.gasto,cantidad:t.cantidad,precio_unidad:t.precioUnidad,precio_total:t.precioTotal,fecha:t.Fecha,user_id:t.id_usuario,tipogasto_id:t.tipogasto_id})}).then(function(t){return console.log("objeto guardado"),t.json()}).catch(function(t){throw t})}},{key:"getExpenses",value:function(){var t=window.location;return console.log(t,"oo"),fetch("".concat(this.URL,"gastos?api_token=").concat(this.API_TOKEN,"&user_id=").concat(JSON.parse(localStorage.getItem("auth")).id)).then(function(t){return t.json()}).then(function(t){return t}).catch(function(t){throw t})}},{key:"getTipogastos",value:function(){return fetch("".concat(this.URL,"tipogastos?api_token=").concat(this.API_TOKEN,"&user_id=").concat(JSON.parse(localStorage.getItem("auth")).id)).then(function(t){return t.json()}).then(function(t){return t}).catch(function(t){throw t})}},{key:"deleteExpense",value:function(t){return fetch("".concat(this.URL,"gastos/").concat(t),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(t){return t.json()}).catch(function(t){throw t})}}]),t}();e.a=new i}}]);
//# sourceMappingURL=17.f62484b5.chunk.js.map