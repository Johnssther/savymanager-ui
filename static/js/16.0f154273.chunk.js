(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[16],{1049:function(e,t,a){"use strict";var n=a(34),o=a(90),i=a(2),r=a.n(i),s=a(60),l=a.n(s),c=a(907),u=a.n(c),d=a(908),g={children:l.a.node,row:l.a.bool,check:l.a.bool,inline:l.a.bool,disabled:l.a.bool,tag:d.m,className:l.a.string,cssModule:l.a.object},p=function(e){var t=e.className,a=e.cssModule,i=e.row,s=e.disabled,l=e.check,c=e.inline,g=e.tag,p=Object(o.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),m=Object(d.i)(u()(t,!!i&&"row",l?"form-check":"form-group",!(!l||!c)&&"form-check-inline",!(!l||!s)&&"disabled"),a);return"fieldset"===g&&(p.disabled=s),r.a.createElement(g,Object(n.a)({},p,{className:m}))};p.propTypes=g,p.defaultProps={tag:"div"},t.a=p},1050:function(e,t,a){"use strict";var n=a(34),o=a(90),i=a(2),r=a.n(i),s=a(60),l=a.n(s),c=a(907),u=a.n(c),d=a(908),g=l.a.oneOfType([l.a.number,l.a.string]),p=l.a.oneOfType([l.a.string,l.a.number,l.a.shape({size:g,order:g,offset:g})]),m={children:l.a.node,hidden:l.a.bool,check:l.a.bool,size:l.a.string,for:l.a.string,tag:d.m,className:l.a.string,cssModule:l.a.object,xs:p,sm:p,md:p,lg:p,xl:p,widths:l.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},f=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},E=function(e){var t=e.className,a=e.cssModule,i=e.hidden,s=e.widths,l=e.tag,c=e.check,g=e.size,p=e.for,m=Object(o.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),h=[];s.forEach((function(t,n){var o=e[t];if(delete m[t],o||""===o){var i,r=!n;if(Object(d.g)(o)){var s,l=r?"-":"-"+t+"-";i=f(r,t,o.size),h.push(Object(d.i)(u()(((s={})[i]=o.size||""===o.size,s["order"+l+o.order]=o.order||0===o.order,s["offset"+l+o.offset]=o.offset||0===o.offset,s))),a)}else i=f(r,t,o),h.push(i)}}));var E=Object(d.i)(u()(t,!!i&&"sr-only",!!c&&"form-check-label",!!g&&"col-form-label-"+g,h,!!h.length&&"col-form-label"),a);return r.a.createElement(l,Object(n.a)({htmlFor:p},m,{className:E}))};E.propTypes=m,E.defaultProps=h,t.a=E},1053:function(e,t,a){"use strict";var n=a(34),o=a(90),i=a(2),r=a.n(i),s=a(60),l=a.n(s),c=a(907),u=a.n(c),d=a(908),g={tag:d.m,type:l.a.string,size:l.a.string,color:l.a.string,className:l.a.string,cssModule:l.a.object,children:l.a.string},p=function(e){var t=e.className,a=e.cssModule,i=e.type,s=e.size,l=e.color,c=e.children,g=e.tag,p=Object(o.a)(e,["className","cssModule","type","size","color","children","tag"]),m=Object(d.i)(u()(t,!!s&&"spinner-"+i+"-"+s,"spinner-"+i,!!l&&"text-"+l),a);return r.a.createElement(g,Object(n.a)({role:"status"},p,{className:m}),c&&r.a.createElement("span",{className:Object(d.i)("sr-only",a)},c))};p.propTypes=g,p.defaultProps={tag:"div",type:"border",children:"Loading..."},t.a=p},1087:function(e,t,a){"use strict";a.r(t);var n=a(237),o=a(238),i=a(240),r=a(239),s=a(242),l=a(241),c=a(2),u=a.n(c),d=a(937),g=a.n(d),p=a(1070),m=a(959),h=a.n(m),f=a(1085),E=a(1080);var b=Object(E.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}})),v=function(){var e=b();return u.a.createElement("div",{className:e.root},u.a.createElement(f.a,{color:"success"}))},y=a(921),O=a(931),j=a(922),C=a(962),k=a(911),N=a(919),S=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(r.a)(t).call(this,e))).state={delete:""},a.delete=a.delete.bind(Object(s.a)(a)),a}return Object(l.a)(t,e),Object(o.a)(t,[{key:"delete",value:function(){var e=this;!0===window.confirm("\xbfRealmente deseas eliminar este gasto? "+this.props.data.id)&&k.a.deleteExpense(this.props.data.id).then((function(t){e.setState({delete:""})}))}},{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement(y.a,null,u.a.createElement(O.a,null,"Codigo: ",this.props.data.id),u.a.createElement(j.a,null,"Gasto: ",this.props.data.gasto," ",u.a.createElement("br",null),"Acciones:",u.a.createElement(N.a,{key:"delete",className:"btn-sm btn-danger",onClick:this.delete},"Eliminar Gasto"))))}}]),t}(c.Component),x=a(963),T=a(981),w=a(1059),P=a(998),_=a(1036),L=a(999),M=a(1049),F=a(1050),I=a(936),U=a(1053),D=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(r.a)(t).call(this,e))).tipoGasto=function(e,t){a.setState({inputTipogasto:e.value})},a.state={fecha:"",inputFecha:g()(),inputGasto:"",inputPrecioUnidad:"",inputCantidad:"",inputPrecioTotal:"",inputTipogasto:"",options:[],loading:!0,large:!1,textError:"No ha ingresado ningun gasto"},a.addExpenses=a.addExpenses.bind(Object(s.a)(a)),a.toggleLarge=a.toggleLarge.bind(Object(s.a)(a)),a}return Object(l.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;k.a.getExpensesType().then((function(t){var a=t.map((function(e){return{value:e.id,label:e.gasto}}));e.setState({options:a,loading:!1,textError:""})}))}},{key:"addExpenses",value:function(){var e={gasto:this.state.inputGasto,cantidad:this.state.inputCantidad,precioUnidad:this.state.inputPrecioUnidad,precioTotal:""===this.state.inputPrecioTotal?this.state.inputCantidad*this.state.inputPrecioUnidad:this.state.inputPrecioTotal,Fecha:this.state.inputFecha.format("YYYY/M/D"),id_usuario:JSON.parse(localStorage.getItem("auth")).id,tipogasto_id:this.state.inputTipogasto};return""===e.Fecha?(this.setState({textError:"Seleccione una fecha por favor"}),!1):""===e.tipogasto_id?(this.setState({textError:"Seleccione el tipo de gasto por favor"}),!1):""===e.cantidad?(this.setState({textError:"Debe ingresar la cantidad"}),!1):""===e.gasto?(this.setState({textError:"No ha ingresado ningun gasto"}),!1):""===e.precioUnidad?(this.setState({textError:"No ha ingresado el precio por unidad"}),!1):(this.props.addExpense(e),!0)}},{key:"toggleLarge",value:function(){this.setState({large:!this.state.large,textError:"Ingrese el costo por unidad"})}},{key:"render",value:function(){var e=this;return u.a.createElement(u.a.Fragment,null,u.a.createElement(w.a,{isOpen:this.state.large,toggle:this.toggleLarge,className:"modal-danger "+this.props.className},u.a.createElement(P.a,{toggle:this.toggleLarge},"Calendario"),u.a.createElement(_.a,null,u.a.createElement(x.Calendar,{style:{backgroundColo:"red"},onChange:function(t){return e.setState({inputFecha:t})},value:this.state.inputFecha}),u.a.createElement("h6",null,u.a.createElement("strong",null,"Fecha: "),this.state.inputFecha.format("YYYY/M/D"))),u.a.createElement(L.a,null,u.a.createElement(N.a,{color:"primary",onClick:this.toggleLarge},"Ok")," ")),u.a.createElement(y.a,null,u.a.createElement(j.a,null,u.a.createElement(M.a,null,u.a.createElement(F.a,{htmlFor:"inputFecha"},"Fecha"),u.a.createElement(I.a,{onClick:this.toggleLarge,type:"text",id:"inputFecha",value:this.state.inputFecha.format("YYYY/M/D"),onChange:function(e){return null}})),u.a.createElement(M.a,null,u.a.createElement(F.a,{htmlFor:"inputTipogasto"},"Tipo Gasto"),u.a.createElement(T.a,{options:this.state.options,onChange:this.tipoGasto}),!0===this.state.loading?u.a.createElement(U.a,{color:"success"}):""),u.a.createElement(M.a,null,u.a.createElement(F.a,{htmlFor:"inputCantidad"},"Cantidad"),u.a.createElement(I.a,{placeholder:"Numero Total",type:"text",id:"inputCantidad",onChange:function(t){return e.setState({inputCantidad:t.target.value})}})),u.a.createElement(M.a,null,u.a.createElement(F.a,{htmlFor:"inputGasto"},"Gasto"),u.a.createElement(I.a,{placeholder:"Ingresar Gasto",type:"text",id:"inputGasto",onChange:function(t){return e.setState({inputGasto:t.target.value})}})),u.a.createElement(M.a,null,u.a.createElement(F.a,{htmlFor:"inputPrecioUnidad"},"Precio unidad"),u.a.createElement(I.a,{placeholder:"$ Costo Unidad",type:"text",id:"inputPrecioUnidad",onChange:function(t){return e.setState({inputPrecioUnidad:t.target.value})}})),u.a.createElement(M.a,null,u.a.createElement(F.a,{htmlFor:"inputPrecioTotal"},"Precio Total"),u.a.createElement(I.a,{placeholder:"$ Costo Total (opcional)",type:"text",id:"inputPrecioTotal",onChange:function(t){return e.setState({inputPrecioTotal:t.target.value})}})),u.a.createElement(N.a,{color:"primary",key:"add",onClick:this.addExpenses},"Guardar"),u.a.createElement("h6",null,this.state.textError))))}}]),t}(c.Component),R={header:{borderColor:"transparent"},rows:{spacing:"spaced",spacingBorderRadius:"50px",spacingMargin:"3px",borderColor:"rgba(0,0,0,.12)",backgroundColor:"white",height:"52px"},cells:{cellPadding:"48px"},footer:{separatorStyle:"none"}},z=[{name:"Fecha",selector:"fecha",sortable:!0,cell:function(e){return u.a.createElement("div",null,u.a.createElement("div",{style:{fontWeight:700}},e.fecha),e.summary)}},{name:"Tipo de gasto",selector:"tipo_gasto",sortable:!0},{name:"Cantidad",selector:"cantidad",sortable:!0},{name:"Gasto",selector:"gasto",sortable:!0},{name:"Precio Unid.",selector:"preciounid",sortable:!0},{name:"Precio Total",selector:"precio",sortable:!0},{cell:function(e){return u.a.createElement(u.a.Fragment,null)},allowOverflow:!0,button:!0,width:"56px"}],G=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return u.a.createElement(y.a,null,u.a.createElement(O.a,null,u.a.createElement("i",{className:"fa fa-align-justify"}),u.a.createElement("strong",null,"Gastos diarios"),u.a.createElement("small",null," Gastos ")),u.a.createElement(j.a,null,u.a.createElement(h.a,{title:this.props.title,columns:z,data:this.props.gastos,highlightOnHover:!0,actions:u.a.createElement(C.a,{modal:"toggleLarge",name:"Nuevo",title:"Ingresar nuevo gasto",cerrarmodal:this.props.cerrarmodal}," ",u.a.createElement(D,{addExpense:this.props.addExpense,handleClick:this.props.handleClick})," "),pagination:!0,customTheme:R,expandableRows:!0,expandableRowsComponent:u.a.createElement(S,{data:this.props.gastos}),expandOnRowClicked:!0,progressPending:this.props.loading,progressComponent:u.a.createElement(v,{data:this.props.gastos}),progressShowTableHead:!0,ignoreRowClick:!0})))}}]),t}(c.Component),A=(Object(E.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}})),G),q=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(r.a)(t).call(this,e))).state={ingresargastos:!1,data:[],gastoTotal:0,loading:!0,cerrarmodal:!1},a.handleClick=a.handleClick.bind(Object(s.a)(a)),a}return Object(l.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.getGastos(),k.a.getExpensesType().then((function(t){var a=t.map((function(e){return{value:e.id,label:e.gasto}}));e.setState({options:a})}))}},{key:"getGastos",value:function(){var e=this;this.setState({data:[]});var t={mes:null};setTimeout((function(){k.a.getExpenses(t).then((function(t){var a=t.map((function(e){return e.precio_total})),n=t.map((function(e){return{id:e.id,fecha:e.fecha,tipo_gasto:e.tipo_gasto,cantidad:e.cantidad,gasto:e.gasto,preciounid:"$ "+(new Intl.NumberFormat).format(e.precio_unidad),precio:"$ "+(new Intl.NumberFormat).format(e.precio_total)}}));if(a.length>0)var o=a.reduce((function(e,t){return e+t}));else o=0;e.setState({data:n,gastoTotal:o,loading:!1})}))}),2e3)}},{key:"addExpense",value:function(e){var t=this,a={gasto:e.gasto,cantidad:e.cantidad,precioUnidad:e.precioUnidad,precioTotal:e.precioTotal,Fecha:e.Fecha,id_usuario:e.id_usuario,tipogasto_id:e.tipogasto_id};k.a.saveExpenses(a).then((function(e){t.handleClick()})).catch((function(e){alert("Ha ocurrido un error inesperado :(")}))}},{key:"handleClick",value:function(){this.setState({ingresargastos:!this.state.ingresargastos,cerrarmodal:!this.state.cerrarmodal}),this.getGastos()}},{key:"render",value:function(){var e=u.a.createElement("small",null,"Gastos diarios. Total: ",u.a.createElement(p.a,{className:"mr-1",href:"#",color:"danger"},"$ ".concat((new Intl.NumberFormat).format(this.state.gastoTotal))));return u.a.createElement(A,{gastos:this.state.data,loading:this.state.loading,title:e,addExpense:this.addExpense,handleClick:this.handleClick,cerrarmodal:this.state.cerrarmodal})}}]),t}(c.Component);t.default=q},911:function(e,t,a){"use strict";var n=a(237),o=a(238),i=function(){function e(){Object(n.a)(this,e);var t=window.location.host;"localhost:3000"===t&&(this.URL="http://localhost/coysa/public/api/"),"johnssther.github.io"===t&&(this.URL="http://coysa.herokuapp.com/api/"),this.API_TOKEN=localStorage.getItem("token")}return Object(o.a)(e,[{key:"onLogin",value:function(e,t){return fetch("".concat(this.URL,"login"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:e,password:t})}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){throw e}))}},{key:"registerUser",value:function(e){return fetch("".concat(this.URL,"register"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:e.name,email:e.email,username:e.username,password:e.password,password_confirmation:e.password_confirmation})}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){throw e}))}},{key:"saveExpenses",value:function(e){return fetch("".concat(this.URL,"gastos"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({api_token:this.API_TOKEN,gasto:e.gasto,cantidad:e.cantidad,precio_unidad:e.precioUnidad,precio_total:e.precioTotal,fecha:e.Fecha,user_id:e.id_usuario,tipogasto_id:e.tipogasto_id})}).then((function(e){return e.json()})).catch((function(e){throw e}))}},{key:"getExpenses",value:function(e){return fetch("".concat(this.URL,"gastos?api_token=").concat(this.API_TOKEN,"\n        &user_id=").concat(JSON.parse(localStorage.getItem("auth")).id,"\n        &mes=").concat(e.mes)).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){throw e}))}},{key:"getExpensesType",value:function(){return fetch("".concat(this.URL,"tipogastos?api_token=").concat(this.API_TOKEN,"&user_id=").concat(JSON.parse(localStorage.getItem("auth")).id)).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){throw e}))}},{key:"deleteExpense",value:function(e){return fetch("".concat(this.URL,"gastos/").concat(e,"?api_token=").concat(this.API_TOKEN),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).catch((function(e){throw e}))}}]),e}();t.a=new i},916:function(e,t,a){"use strict";var n={};a.r(n),a.d(n,"setConfiguracion",(function(){return r}));var o={};a.r(o),a.d(o,"setPersonalexpense",(function(){return s})),a.d(o,"setPersonalexpenses",(function(){return l}));var i={};a.r(i),a.d(i,"setExpensestype",(function(){return c}));var r=function(e){return{type:"SET_CONFIGURACION",payload:e}},s=function(e){return{type:"SET_PERSONALEXPENSE",payload:e}},l=function(e){return{type:"SET_PERSONALEXPENSES",payload:e}},c=function(e){return{type:"SET_EXPENSES_TYPE",payload:e}};a.d(t,"a",(function(){return u}));var u={configuracion:n,personalexpenses:o,expensestype:i}},936:function(e,t,a){"use strict";var n=a(34),o=a(90),i=a(910),r=a(70),s=a(2),l=a.n(s),c=a(60),u=a.n(c),d=a(907),g=a.n(d),p=a(908),m={children:u.a.node,type:u.a.string,size:u.a.string,bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:p.m,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(i.a)(a)),a.focus=a.focus.bind(Object(i.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,i=e.type,r=e.bsSize,s=e.valid,c=e.invalid,u=e.tag,d=e.addon,m=e.plaintext,h=e.innerRef,f=Object(o.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),E=["radio","checkbox"].indexOf(i)>-1,b=new RegExp("\\D","g"),v=u||("select"===i||"textarea"===i?i:"input"),y="form-control";m?(y+="-plaintext",v=u||"input"):"file"===i?y+="-file":E&&(y=d?null:"form-check-input"),f.size&&b.test(f.size)&&(Object(p.o)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=f.size,delete f.size);var O=Object(p.i)(g()(t,c&&"is-invalid",s&&"is-valid",!!r&&"form-control-"+r,y),a);return("input"===v||u&&"function"===typeof u)&&(f.type=i),f.children&&!m&&"select"!==i&&"string"===typeof v&&"select"!==v&&(Object(p.o)('Input with a type of "'+i+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete f.children),l.a.createElement(v,Object(n.a)({},f,{ref:h,className:O}))},t}(l.a.Component);h.propTypes=m,h.defaultProps={type:"text"},t.a=h},962:function(e,t,a){"use strict";var n=a(237),o=a(238),i=a(240),r=a(239),s=a(242),l=a(241),c=a(2),u=a.n(c),d=a(919),g=a(1059),p=a(998),m=a(1036),h=a(999),f=a(244),E=(a(916),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(r.a)(t).call(this,e))).state={modal:!1,large:a.props.config.modalActiva,small:!1,primary:!1,success:!1,warning:!1,danger:!1,info:!1},a.toggle=a.toggle.bind(Object(s.a)(a)),a.toggleLarge=a.toggleLarge.bind(Object(s.a)(a)),a.toggleSmall=a.toggleSmall.bind(Object(s.a)(a)),a.togglePrimary=a.togglePrimary.bind(Object(s.a)(a)),a.toggleSuccess=a.toggleSuccess.bind(Object(s.a)(a)),a.toggleWarning=a.toggleWarning.bind(Object(s.a)(a)),a.toggleDanger=a.toggleDanger.bind(Object(s.a)(a)),a.toggleInfo=a.toggleInfo.bind(Object(s.a)(a)),a}return Object(l.a)(t,e),Object(o.a)(t,[{key:"toggle",value:function(){this.setState({modal:!this.state.modal})}},{key:"toggleLarge",value:function(){this.setState({large:!this.state.large})}},{key:"toggleSmall",value:function(){this.setState({small:!this.state.small})}},{key:"togglePrimary",value:function(){this.setState({primary:!this.state.primary})}},{key:"toggleSuccess",value:function(){this.setState({success:!this.state.success})}},{key:"toggleWarning",value:function(){this.setState({warning:!this.state.warning})}},{key:"toggleDanger",value:function(){this.setState({danger:!this.state.danger})}},{key:"toggleInfo",value:function(){this.setState({info:!this.state.info})}},{key:"render",value:function(){return u.a.createElement("div",{className:"animated fadeIn"},"toggle"===this.props.modal?u.a.createElement(d.a,{onClick:this.toggle,className:"mr-1"},this.props.name):"","toggleLarge"===this.props.modal?u.a.createElement(d.a,{onClick:this.toggleLarge,className:"mr-1"},this.props.name):"","toggleSmall"===this.props.modal?u.a.createElement(d.a,{onClick:this.toggleSmall,className:"mr-1"},this.props.name):"","togglePrimary"===this.props.modal?u.a.createElement(d.a,{onClick:this.togglePrimary,className:"mr-1"},this.props.name):"","toggleDanger"===this.props.modal?u.a.createElement(d.a,{onClick:this.toggleDanger,className:"mr-1"},this.props.name):"","toggleWarning"===this.props.modal?u.a.createElement(d.a,{onClick:this.toggleWarning,className:"mr-1"},this.props.name):"","toggleSuccess"===this.props.modal?u.a.createElement(d.a,{onClick:this.toggleSuccess,className:"mr-1"},this.props.name):"","toggleInfo"===this.props.modal?u.a.createElement(d.a,{onClick:this.toggleInfo,className:"mr-1"},this.props.name):"",u.a.createElement(g.a,{isOpen:this.state.modal,toggle:this.toggle,className:this.props.className},u.a.createElement(p.a,{toggle:this.toggle},"Modal title"),u.a.createElement(m.a,null,this.props.children),u.a.createElement(h.a,null,u.a.createElement(d.a,{color:"primary",onClick:this.toggle},"Do Something")," ",u.a.createElement(d.a,{color:"secondary",onClick:this.toggle},"Cancel"))),u.a.createElement(g.a,{isOpen:this.state.large!==this.props.cerrarmodal,toggle:this.toggleLarge,className:"modal-lg "+this.props.className},u.a.createElement(p.a,{toggle:this.toggleLarge},this.props.title),u.a.createElement(m.a,null,this.props.children),u.a.createElement(h.a,null,u.a.createElement(d.a,{onClick:this.toggleLarge},"Cancelar")," ")),u.a.createElement(g.a,{isOpen:this.state.small,toggle:this.toggleSmall,className:"modal-sm "+this.props.className},u.a.createElement(p.a,{toggle:this.toggleSmall},"Modal title"),u.a.createElement(m.a,null,this.props.children),u.a.createElement(h.a,null,u.a.createElement(d.a,{color:"primary",onClick:this.toggleSmall},"Do Something")," ",u.a.createElement(d.a,{color:"secondary",onClick:this.toggleSmall},"Cancel"))),u.a.createElement(g.a,{isOpen:this.state.primary,toggle:this.togglePrimary,className:"modal-primary "+this.props.className},u.a.createElement(p.a,{toggle:this.togglePrimary},this.props.title),u.a.createElement(m.a,null,this.props.children),u.a.createElement(h.a,null,u.a.createElement(d.a,{onClick:this.togglePrimary},"Cancelar")," ")),u.a.createElement(g.a,{isOpen:this.state.success,toggle:this.toggleSuccess,className:"modal-success "+this.props.className},u.a.createElement(p.a,{toggle:this.toggleSuccess},"Modal title"),u.a.createElement(m.a,null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),u.a.createElement(h.a,null,u.a.createElement(d.a,{color:"success",onClick:this.toggleSuccess},"Do Something")," ",u.a.createElement(d.a,{color:"secondary",onClick:this.toggleSuccess},"Cancel"))),u.a.createElement(g.a,{isOpen:this.state.warning,toggle:this.toggleWarning,className:"modal-warning "+this.props.className},u.a.createElement(p.a,{toggle:this.toggleWarning},"Modal title"),u.a.createElement(m.a,null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),u.a.createElement(h.a,null,u.a.createElement(d.a,{color:"warning",onClick:this.toggleWarning},"Do Something")," ",u.a.createElement(d.a,{color:"secondary",onClick:this.toggleWarning},"Cancel"))),u.a.createElement(g.a,{isOpen:this.state.danger,toggle:this.toggleDanger,className:"modal-danger   "+this.props.className},u.a.createElement(p.a,{toggle:this.toggleDanger},"Modal title"),u.a.createElement(m.a,null,this.props.children),u.a.createElement(h.a,null,u.a.createElement(d.a,{color:"danger",onClick:this.toggleDanger},"Do Something")," ",u.a.createElement(d.a,{color:"secondary",onClick:this.toggleDanger},"Cancel"))),u.a.createElement(g.a,{isOpen:this.state.info,toggle:this.toggleInfo,className:"modal-info "+this.props.className},u.a.createElement(p.a,{toggle:this.toggleInfo},"Modal title"),u.a.createElement(m.a,null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),u.a.createElement(h.a,null,u.a.createElement(d.a,{color:"primary",onClick:this.toggleInfo},"Do Something")," ",u.a.createElement(d.a,{color:"secondary",onClick:this.toggleInfo},"Cancel"))))}}]),t}(c.Component));t.a=Object(f.b)((function(e){return{config:e.configuracion.configuracionUsuario}}),(function(e){return{actions:{}}}))(E)},998:function(e,t,a){"use strict";var n=a(34),o=a(90),i=a(2),r=a.n(i),s=a(60),l=a.n(s),c=a(907),u=a.n(c),d=a(908),g={tag:d.m,wrapTag:d.m,toggle:l.a.func,className:l.a.string,cssModule:l.a.object,children:l.a.node,closeAriaLabel:l.a.string,charCode:l.a.oneOfType([l.a.string,l.a.number]),close:l.a.object},p=function(e){var t,a=e.className,i=e.cssModule,s=e.children,l=e.toggle,c=e.tag,g=e.wrapTag,p=e.closeAriaLabel,m=e.charCode,h=e.close,f=Object(o.a)(e,["className","cssModule","children","toggle","tag","wrapTag","closeAriaLabel","charCode","close"]),E=Object(d.i)(u()(a,"modal-header"),i);if(!h&&l){var b="number"===typeof m?String.fromCharCode(m):m;t=r.a.createElement("button",{type:"button",onClick:l,className:Object(d.i)("close",i),"aria-label":p},r.a.createElement("span",{"aria-hidden":"true"},b))}return r.a.createElement(g,Object(n.a)({},f,{className:E}),r.a.createElement(c,{className:Object(d.i)("modal-title",i)},s),h||t)};p.propTypes=g,p.defaultProps={tag:"h5",wrapTag:"div",closeAriaLabel:"Close",charCode:215},t.a=p},999:function(e,t,a){"use strict";var n=a(34),o=a(90),i=a(2),r=a.n(i),s=a(60),l=a.n(s),c=a(907),u=a.n(c),d=a(908),g={tag:d.m,className:l.a.string,cssModule:l.a.object},p=function(e){var t=e.className,a=e.cssModule,i=e.tag,s=Object(o.a)(e,["className","cssModule","tag"]),l=Object(d.i)(u()(t,"modal-footer"),a);return r.a.createElement(i,Object(n.a)({},s,{className:l}))};p.propTypes=g,p.defaultProps={tag:"div"},t.a=p}}]);
//# sourceMappingURL=16.0f154273.chunk.js.map