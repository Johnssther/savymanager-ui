(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[18],{1004:function(e,t,a){"use strict";var n=a(34),o=a(90),i=a(2),s=a.n(i),r=a(60),l=a.n(r),c=a(907),u=a.n(c),g=a(908),m={tag:g.m,wrapTag:g.m,toggle:l.a.func,className:l.a.string,cssModule:l.a.object,children:l.a.node,closeAriaLabel:l.a.string,charCode:l.a.oneOfType([l.a.string,l.a.number]),close:l.a.object},p=function(e){var t,a=e.className,i=e.cssModule,r=e.children,l=e.toggle,c=e.tag,m=e.wrapTag,p=e.closeAriaLabel,d=e.charCode,h=e.close,f=Object(o.a)(e,["className","cssModule","children","toggle","tag","wrapTag","closeAriaLabel","charCode","close"]),E=Object(g.i)(u()(a,"modal-header"),i);if(!h&&l){var b="number"===typeof d?String.fromCharCode(d):d;t=s.a.createElement("button",{type:"button",onClick:l,className:Object(g.i)("close",i),"aria-label":p},s.a.createElement("span",{"aria-hidden":"true"},b))}return s.a.createElement(m,Object(n.a)({},f,{className:E}),s.a.createElement(c,{className:Object(g.i)("modal-title",i)},r),h||t)};p.propTypes=m,p.defaultProps={tag:"h5",wrapTag:"div",closeAriaLabel:"Close",charCode:215},t.a=p},1005:function(e,t,a){"use strict";var n=a(34),o=a(90),i=a(2),s=a.n(i),r=a(60),l=a.n(r),c=a(907),u=a.n(c),g=a(908),m={tag:g.m,className:l.a.string,cssModule:l.a.object},p=function(e){var t=e.className,a=e.cssModule,i=e.tag,r=Object(o.a)(e,["className","cssModule","tag"]),l=Object(g.i)(u()(t,"modal-footer"),a);return s.a.createElement(i,Object(n.a)({},r,{className:l}))};p.propTypes=m,p.defaultProps={tag:"div"},t.a=p},1057:function(e,t,a){"use strict";var n=a(34),o=a(90),i=a(2),s=a.n(i),r=a(60),l=a.n(r),c=a(907),u=a.n(c),g=a(908),m=l.a.oneOfType([l.a.number,l.a.string]),p=l.a.oneOfType([l.a.string,l.a.number,l.a.shape({size:m,order:m,offset:m})]),d={children:l.a.node,hidden:l.a.bool,check:l.a.bool,size:l.a.string,for:l.a.string,tag:g.m,className:l.a.string,cssModule:l.a.object,xs:p,sm:p,md:p,lg:p,xl:p,widths:l.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},f=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},E=function(e){var t=e.className,a=e.cssModule,i=e.hidden,r=e.widths,l=e.tag,c=e.check,m=e.size,p=e.for,d=Object(o.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),h=[];r.forEach((function(t,n){var o=e[t];if(delete d[t],o||""===o){var i,s=!n;if(Object(g.g)(o)){var r,l=s?"-":"-"+t+"-";i=f(s,t,o.size),h.push(Object(g.i)(u()(((r={})[i]=o.size||""===o.size,r["order"+l+o.order]=o.order||0===o.order,r["offset"+l+o.offset]=o.offset||0===o.offset,r))),a)}else i=f(s,t,o),h.push(i)}}));var E=Object(g.i)(u()(t,!!i&&"sr-only",!!c&&"form-check-label",!!m&&"col-form-label-"+m,h,!!h.length&&"col-form-label"),a);return s.a.createElement(l,Object(n.a)({htmlFor:p},d,{className:E}))};E.propTypes=d,E.defaultProps=h,t.a=E},1060:function(e,t,a){"use strict";var n=a(34),o=a(90),i=a(2),s=a.n(i),r=a(60),l=a.n(r),c=a(907),u=a.n(c),g=a(908),m={tag:g.m,type:l.a.string,size:l.a.string,color:l.a.string,className:l.a.string,cssModule:l.a.object,children:l.a.string},p=function(e){var t=e.className,a=e.cssModule,i=e.type,r=e.size,l=e.color,c=e.children,m=e.tag,p=Object(o.a)(e,["className","cssModule","type","size","color","children","tag"]),d=Object(g.i)(u()(t,!!r&&"spinner-"+i+"-"+r,"spinner-"+i,!!l&&"text-"+l),a);return s.a.createElement(m,Object(n.a)({role:"status"},p,{className:d}),c&&s.a.createElement("span",{className:Object(g.i)("sr-only",a)},c))};p.propTypes=m,p.defaultProps={tag:"div",type:"border",children:"Loading..."},t.a=p},1106:function(e,t,a){"use strict";a.r(t);var n=a(237),o=a(238),i=a(240),s=a(239),r=a(242),l=a(241),c=a(2),u=a.n(c),g=a(1065),m=a(1004),p=a(928),d=a(934),h=a(929),f=a(1095),E=a(1057),b=a(946),y=a(1060),v=a(922),O=new(function(){function e(){Object(n.a)(this,e);var t=window.location.host;"localhost:3000"===t&&(this.URL="http://localhost/coysa/public/api/"),"johnssther.github.io"===t&&(this.URL="http://coysa.herokuapp.com/api/"),this.API_TOKEN=localStorage.getItem("token")}return Object(o.a)(e,[{key:"getGastosReport",value:function(e){return fetch("".concat(this.URL,"gastosreport?api_token=").concat(this.API_TOKEN,"&user_id=").concat(JSON.parse(localStorage.getItem("auth")).id,"&filterDate_in=").concat(e.filterDate_in,"&filterDate_out=").concat(e.filterDate_out,"&filterTipogasto=").concat(e.filterTipogasto)).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){throw e}))}}]),e}()),N=a(911),j=a(970),S=a.n(j),k=a(1067),C=a(1094),_=(a(974),{header:{borderColor:"transparent"},rows:{spacing:"spaced",spacingBorderRadius:"50px",spacingMargin:"3px",borderColor:"rgba(0,0,0,.12)",backgroundColor:"white",height:"52px"},cells:{cellPadding:"48px"},footer:{separatorStyle:"none"}}),w=[{name:"Fecha",selector:"fecha",sortable:!0,cell:function(e){return u.a.createElement("div",null,u.a.createElement("div",{style:{fontWeight:700}},e.fecha),e.summary)}},{name:"Tipo de gasto",selector:"tipo_gasto",sortable:!0},{name:"Cantidad",selector:"cantidad",sortable:!0},{name:"Gasto",selector:"gasto",sortable:!0},{name:"Precio Unid.",selector:"preciounid",sortable:!0},{name:"Precio Total",selector:"precio",sortable:!0},{cell:function(e){return u.a.createElement(u.a.Fragment,null)},allowOverflow:!0,button:!0,width:"56px"}],D=function(){var e=x();return u.a.createElement("div",{className:e.root},u.a.createElement(k.a,{color:"secondary"}))},T=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement(S.a,{title:this.props.title,columns:w,data:this.props.gastos,highlightOnHover:!0,pagination:!0,customTheme:_,expandableRows:!0,expandOnRowClicked:!0,progressPending:this.props.loading,progressComponent:u.a.createElement(D,{data:this.props.gastos}),progressShowTableHead:!0,ignoreRowClick:!0}))}}]),t}(c.Component),x=Object(C.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}})),L=T,P=a(956),R=a(935),I=a.n(R),M=a(959),z=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(s.a)(t).call(this,e))).tipoGasto=function(e,t){a.setState({inputTipogasto:e.value})},a.state={filterDate_in:I()(),filterDate_out:I()(),inputTipogasto:"",gastosShow:!0,data:[],inputFecha:I()(),loading:!1},a.getGastosReport=a.getGastosReport.bind(Object(r.a)(a)),a.toggleLarge=a.toggleLarge.bind(Object(r.a)(a)),a.toggleLargeOut=a.toggleLargeOut.bind(Object(r.a)(a)),a}return Object(l.a)(t,e),Object(o.a)(t,[{key:"getGastosReport",value:function(){var e=this;if(""===this.state.filterDate_in||""===this.state.filterDate_out)return alert("Debe ingresar una fecha inicial y una fecha final"),!1;this.setState({loading:!0});var t={filterDate_in:this.state.filterDate_in.format("YYYY/M/D"),filterDate_out:this.state.filterDate_out.format("YYYY/M/D"),filterTipogasto:this.state.inputTipogasto};O.getGastosReport(t).then((function(t){console.log(t,"Estos son los gastos de las fechas que seleccionaste");var a=t.map((function(e){return{id:e.id,fecha:e.fecha,tipo_gasto:e.tipo_gasto,cantidad:e.cantidad,gasto:e.gasto,preciounid:"$ "+(new Intl.NumberFormat).format(e.precio_unidad),precio:"$ "+(new Intl.NumberFormat).format(e.precio_total)}}));e.setState({data:a,loading:!1})})).catch((function(e){return console.log(e)}))}},{key:"toggleLarge",value:function(){this.setState({large:!this.state.large})}},{key:"toggleLargeOut",value:function(){this.setState({largeout:!this.state.largeout})}},{key:"componentDidMount",value:function(){var e=this;N.a.getExpensesType().then((function(t){var a=t.map((function(e){return{value:e.id,label:e.gasto}}));e.setState({options:a,loading:!1,textError:""})}))}},{key:"render",value:function(){var e=this;return u.a.createElement(u.a.Fragment,null,u.a.createElement(g.a,{isOpen:this.state.large,toggle:this.toggleLarge,className:"modal-danger "+this.props.className},u.a.createElement(m.a,{toggle:this.toggleLarge},"Fecha"),u.a.createElement(P.Calendar,{style:{backgroundColo:"red"},onChange:function(t){return e.setState({filterDate_in:t})},value:this.state.filterDate_in})),u.a.createElement(g.a,{isOpen:this.state.largeout,toggle:this.toggleLargeOut,className:"modal-danger "+this.props.className},u.a.createElement(m.a,{toggle:this.toggleLargeOut},"Fecha"),u.a.createElement(P.Calendar,{style:{backgroundColo:"red"},onChange:function(t){return e.setState({filterDate_out:t})},value:this.state.filterDate_out})),u.a.createElement("div",{className:"animated fadeIn"},u.a.createElement("div",null,u.a.createElement("div",{className:"container"},u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-sm"},u.a.createElement(p.a,null,u.a.createElement(d.a,null,u.a.createElement("strong",null,"Obtener Gastos")),u.a.createElement(h.a,null,u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-sm"},u.a.createElement(f.a,null,u.a.createElement(E.a,{htmlFor:"filterDate_in"},"Fecha Inicial"),u.a.createElement(b.a,{onClick:this.toggleLarge,value:this.state.filterDate_in.format("YYYY/M/D"),placeholder:"Fecha de inicio",type:"texty",id:"filterDate_in",name:"filterDate_in"}))),u.a.createElement("div",{className:"col-sm"},u.a.createElement(f.a,null,u.a.createElement(E.a,{htmlFor:"filterDate_out"},"Fecha Final"),u.a.createElement(b.a,{onClick:this.toggleLargeOut,value:this.state.filterDate_out.format("YYYY/M/D"),placeholder:"Fecha Fin",type:"text",id:"filterDate_out",name:"filterDate_out"}))),u.a.createElement("div",{className:"col-sm"},u.a.createElement(f.a,null,u.a.createElement(E.a,{htmlFor:"inputTipogasto"},"Tipo Gasto"),u.a.createElement(M.a,{options:this.state.options,onChange:this.tipoGasto}),!0===this.state.loading?u.a.createElement(y.a,{color:"success"}):"")),u.a.createElement("div",{className:"col-sm"},u.a.createElement(f.a,null,u.a.createElement(v.a,{color:"primary",key:"add",onClick:this.getGastosReport},"Obtener")))),u.a.createElement(L,{gastos:this.state.data,loading:this.state.loading,title:""})))))))))}}]),t}(c.Component);t.default=z},911:function(e,t,a){"use strict";var n=a(237),o=a(238),i=function(){function e(){Object(n.a)(this,e);var t=window.location.host;"localhost:3000"===t&&(this.URL="http://localhost/coysa/public/api/"),"johnssther.github.io"===t&&(this.URL="http://coysa.herokuapp.com/api/"),this.API_TOKEN=localStorage.getItem("token")}return Object(o.a)(e,[{key:"onLogin",value:function(e,t){return fetch("".concat(this.URL,"login"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:e,password:t})}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){throw e}))}},{key:"registerUser",value:function(e){return fetch("".concat(this.URL,"register"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:e.name,email:e.email,username:e.username,password:e.password,password_confirmation:e.password_confirmation})}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){throw e}))}},{key:"saveExpenses",value:function(e){return console.log(e,"joh"),fetch("".concat(this.URL,"gastos"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({api_token:this.API_TOKEN,gasto:e.gasto,cantidad:e.cantidad,precio_unidad:e.precio_unidad,precio_total:e.precio_total,fecha:e.fecha,user_id:e.user_id,tipogasto_id:e.tipogasto_id})}).then((function(e){return e.json()})).catch((function(e){throw e}))}},{key:"getExpenses",value:function(e){return fetch("".concat(this.URL,"gastos?api_token=").concat(this.API_TOKEN,"\n        &user_id=").concat(JSON.parse(localStorage.getItem("auth")).id,"\n        &mes=").concat(e.mes)).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){throw e}))}},{key:"showExpense",value:function(e){return fetch("".concat(this.URL,"gastos/").concat(e.id,"?api_token=").concat(this.API_TOKEN,"&user_id=").concat(JSON.parse(localStorage.getItem("auth")).id)).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){throw e}))}},{key:"getExpensesType",value:function(){return fetch("".concat(this.URL,"tipogastos?api_token=").concat(this.API_TOKEN,"&user_id=").concat(JSON.parse(localStorage.getItem("auth")).id)).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){throw e}))}},{key:"deleteExpense",value:function(e){return fetch("".concat(this.URL,"gastos/").concat(e,"?api_token=").concat(this.API_TOKEN),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).catch((function(e){throw e}))}}]),e}();t.a=new i},913:function(e,t,a){"use strict";var n={};a.r(n),a.d(n,"setConfiguracion",(function(){return s}));var o={};a.r(o),a.d(o,"setPersonalexpense",(function(){return r})),a.d(o,"setPersonalexpenses",(function(){return l}));var i={};a.r(i),a.d(i,"setExpensestype",(function(){return c}));var s=function(e){return{type:"SET_CONFIGURACION",payload:e}},r=function(e){return{type:"SET_PERSONALEXPENSE",payload:e}},l=function(e){return{type:"SET_PERSONALEXPENSES",payload:e}},c=function(e){return{type:"SET_EXPENSES_TYPE",payload:e}};a.d(t,"a",(function(){return u}));var u={configuracion:n,personalexpenses:o,expensestype:i}},946:function(e,t,a){"use strict";var n=a(34),o=a(90),i=a(910),s=a(70),r=a(2),l=a.n(r),c=a(60),u=a.n(c),g=a(907),m=a.n(g),p=a(908),d={children:u.a.node,type:u.a.string,size:u.a.string,bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:p.m,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(i.a)(a)),a.focus=a.focus.bind(Object(i.a)(a)),a}Object(s.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,i=e.type,s=e.bsSize,r=e.valid,c=e.invalid,u=e.tag,g=e.addon,d=e.plaintext,h=e.innerRef,f=Object(o.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),E=["radio","checkbox"].indexOf(i)>-1,b=new RegExp("\\D","g"),y=u||("select"===i||"textarea"===i?i:"input"),v="form-control";d?(v+="-plaintext",y=u||"input"):"file"===i?v+="-file":E&&(v=g?null:"form-check-input"),f.size&&b.test(f.size)&&(Object(p.o)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),s=f.size,delete f.size);var O=Object(p.i)(m()(t,c&&"is-invalid",r&&"is-valid",!!s&&"form-control-"+s,v),a);return("input"===y||u&&"function"===typeof u)&&(f.type=i),f.children&&!d&&"select"!==i&&"string"===typeof y&&"select"!==y&&(Object(p.o)('Input with a type of "'+i+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete f.children),l.a.createElement(y,Object(n.a)({},f,{ref:h,className:O}))},t}(l.a.Component);h.propTypes=d,h.defaultProps={type:"text"},t.a=h},974:function(e,t,a){"use strict";var n=a(237),o=a(238),i=a(240),s=a(239),r=a(242),l=a(241),c=a(2),u=a.n(c),g=a(922),m=a(1065),p=a(1004),d=a(1044),h=a(1005),f=a(244),E=(a(913),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(s.a)(t).call(this,e))).state={modal:!1,large:a.props.config.modalActiva,small:!1,primary:!1,success:!1,warning:!1,danger:!1,info:!1},a.toggle=a.toggle.bind(Object(r.a)(a)),a.toggleLarge=a.toggleLarge.bind(Object(r.a)(a)),a.toggleSmall=a.toggleSmall.bind(Object(r.a)(a)),a.togglePrimary=a.togglePrimary.bind(Object(r.a)(a)),a.toggleSuccess=a.toggleSuccess.bind(Object(r.a)(a)),a.toggleWarning=a.toggleWarning.bind(Object(r.a)(a)),a.toggleDanger=a.toggleDanger.bind(Object(r.a)(a)),a.toggleInfo=a.toggleInfo.bind(Object(r.a)(a)),a}return Object(l.a)(t,e),Object(o.a)(t,[{key:"toggle",value:function(){this.setState({modal:!this.state.modal})}},{key:"toggleLarge",value:function(){this.setState({large:!this.state.large})}},{key:"toggleSmall",value:function(){this.setState({small:!this.state.small})}},{key:"togglePrimary",value:function(){this.setState({primary:!this.state.primary})}},{key:"toggleSuccess",value:function(){this.setState({success:!this.state.success})}},{key:"toggleWarning",value:function(){this.setState({warning:!this.state.warning})}},{key:"toggleDanger",value:function(){this.setState({danger:!this.state.danger})}},{key:"toggleInfo",value:function(){this.setState({info:!this.state.info})}},{key:"render",value:function(){return u.a.createElement("div",{className:"animated fadeIn"},"toggle"===this.props.modal?u.a.createElement(g.a,{onClick:this.toggle,className:"mr-1"},this.props.name):"","toggleLarge"===this.props.modal?u.a.createElement(g.a,{onClick:this.toggleLarge,className:"mr-1"},this.props.name):"","toggleSmall"===this.props.modal?u.a.createElement(g.a,{onClick:this.toggleSmall,className:"mr-1"},this.props.name):"","togglePrimary"===this.props.modal?u.a.createElement(g.a,{onClick:this.togglePrimary,className:"mr-1"},this.props.name):"","toggleDanger"===this.props.modal?u.a.createElement(g.a,{onClick:this.toggleDanger,className:"mr-1"},this.props.name):"","toggleWarning"===this.props.modal?u.a.createElement(g.a,{onClick:this.toggleWarning,className:"mr-1"},this.props.name):"","toggleSuccess"===this.props.modal?u.a.createElement(g.a,{onClick:this.toggleSuccess,className:"mr-1"},this.props.name):"","toggleInfo"===this.props.modal?u.a.createElement(g.a,{onClick:this.toggleInfo,className:"mr-1"},this.props.name):"",u.a.createElement(m.a,{isOpen:this.state.modal,toggle:this.toggle,className:this.props.className},u.a.createElement(p.a,{toggle:this.toggle},"Modal title"),u.a.createElement(d.a,null,this.props.children),u.a.createElement(h.a,null,u.a.createElement(g.a,{color:"primary",onClick:this.toggle},"Do Something")," ",u.a.createElement(g.a,{color:"secondary",onClick:this.toggle},"Cancel"))),u.a.createElement(m.a,{isOpen:this.state.large!==this.props.cerrarmodal,toggle:this.toggleLarge,className:"modal-lg "+this.props.className},u.a.createElement(p.a,{toggle:this.toggleLarge},this.props.title),u.a.createElement(d.a,null,this.props.children),u.a.createElement(h.a,null,u.a.createElement(g.a,{onClick:this.toggleLarge},"Cancelar")," ")),u.a.createElement(m.a,{isOpen:this.state.small,toggle:this.toggleSmall,className:"modal-sm "+this.props.className},u.a.createElement(p.a,{toggle:this.toggleSmall},"Modal title"),u.a.createElement(d.a,null,this.props.children),u.a.createElement(h.a,null,u.a.createElement(g.a,{color:"primary",onClick:this.toggleSmall},"Do Something")," ",u.a.createElement(g.a,{color:"secondary",onClick:this.toggleSmall},"Cancel"))),u.a.createElement(m.a,{isOpen:this.state.primary,toggle:this.togglePrimary,className:"modal-primary "+this.props.className},u.a.createElement(p.a,{toggle:this.togglePrimary},this.props.title),u.a.createElement(d.a,null,this.props.children),u.a.createElement(h.a,null,u.a.createElement(g.a,{onClick:this.togglePrimary},"Cancelar")," ")),u.a.createElement(m.a,{isOpen:this.state.success,toggle:this.toggleSuccess,className:"modal-success "+this.props.className},u.a.createElement(p.a,{toggle:this.toggleSuccess},"Modal title"),u.a.createElement(d.a,null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),u.a.createElement(h.a,null,u.a.createElement(g.a,{color:"success",onClick:this.toggleSuccess},"Do Something")," ",u.a.createElement(g.a,{color:"secondary",onClick:this.toggleSuccess},"Cancel"))),u.a.createElement(m.a,{isOpen:this.state.warning,toggle:this.toggleWarning,className:"modal-warning "+this.props.className},u.a.createElement(p.a,{toggle:this.toggleWarning},"Modal title"),u.a.createElement(d.a,null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),u.a.createElement(h.a,null,u.a.createElement(g.a,{color:"warning",onClick:this.toggleWarning},"Do Something")," ",u.a.createElement(g.a,{color:"secondary",onClick:this.toggleWarning},"Cancel"))),u.a.createElement(m.a,{isOpen:this.state.danger,toggle:this.toggleDanger,className:"modal-danger   "+this.props.className},u.a.createElement(p.a,{toggle:this.toggleDanger},"Modal title"),u.a.createElement(d.a,null,this.props.children),u.a.createElement(h.a,null,u.a.createElement(g.a,{color:"danger",onClick:this.toggleDanger},"Do Something")," ",u.a.createElement(g.a,{color:"secondary",onClick:this.toggleDanger},"Cancel"))),u.a.createElement(m.a,{isOpen:this.state.info,toggle:this.toggleInfo,className:"modal-info "+this.props.className},u.a.createElement(p.a,{toggle:this.toggleInfo},"Modal title"),u.a.createElement(d.a,null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),u.a.createElement(h.a,null,u.a.createElement(g.a,{color:"primary",onClick:this.toggleInfo},"Do Something")," ",u.a.createElement(g.a,{color:"secondary",onClick:this.toggleInfo},"Cancel"))))}}]),t}(c.Component));t.a=Object(f.b)((function(e){return{config:e.configuracion.configuracionUsuario}}),(function(e){return{actions:{}}}))(E)}}]);
//# sourceMappingURL=18.8969db55.chunk.js.map