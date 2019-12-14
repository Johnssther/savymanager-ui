(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[20],{1038:function(e,t,a){"use strict";a.r(t);var n=a(235),o=a(236),r=a(238),c=a(237),s=a(240),i=a(239),l=a(2),u=a.n(l),p=a(241),m=a(89),h=a(930),d=a(919),g=a(920),f=a(34),E=a(90),y=a(60),v=a.n(y),j=a(905),b=a.n(j),w=a(906),N={tag:w.m,className:v.a.string,cssModule:v.a.object},O=function(e){var t=e.className,a=e.cssModule,n=e.tag,o=Object(E.a)(e,["className","cssModule","tag"]),r=Object(w.i)(b()(t,"card-group"),a);return u.a.createElement(n,Object(f.a)({},o,{className:r}))};O.propTypes=N,O.defaultProps={tag:"div"};var k=O,S=a(913),L=a(914),_=a(1014),T=a(947),x=a(948),I=a(922),U=a(931),C=a(915),P=a(910),R=a(1034),A=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).state={inputUsername:"",inputPassword:"",errorLogin:!1,auth:null!=localStorage.getItem("token"),loading:!1},a.onLogin=a.onLogin.bind(Object(s.a)(a)),a}return Object(i.a)(t,e),Object(o.a)(t,[{key:"onLogin",value:function(){var e=this;return this.setState({loading:!0}),new Promise((function(t,a){P.a.onLogin(e.state.inputUsername,e.state.inputPassword).then((function(a){a.username&&(localStorage.setItem("auth",JSON.stringify(a)),localStorage.setItem("token",a.api_token),console.log(a.api_token),e.props.history.push("/")),"The given data was invalid."!==a.message||e.setState({errorLogin:!1,loading:!1}),t(a)}),(function(t){e.setState({loading:!1}),a(t)}))}))}},{key:"render",value:function(){var e=this;return u.a.createElement("div",{className:"app flex-row align-items-center"},u.a.createElement(h.a,null,u.a.createElement(d.a,{className:"justify-content-center"},u.a.createElement(g.a,{md:"8"},!0===this.state.loading?u.a.createElement(R.a,null):"",u.a.createElement(k,null,u.a.createElement(S.a,{className:"p-4"},u.a.createElement(L.a,null,u.a.createElement(_.a,null,u.a.createElement("h1",null,"Iniciar Sesi\xf3n"),u.a.createElement("p",{className:"text-muted"},"Ingresa si ya tienes una cuenta"),u.a.createElement(T.a,{className:"mb-3"},u.a.createElement(x.a,{addonType:"prepend"},u.a.createElement(I.a,null,u.a.createElement("i",{className:"icon-user"}))),u.a.createElement(U.a,{type:"text",placeholder:"Usuario",autoComplete:"username",onChange:function(t){return e.setState({inputUsername:t.target.value})}})),u.a.createElement(T.a,{className:"mb-4"},u.a.createElement(x.a,{addonType:"prepend"},u.a.createElement(I.a,null,u.a.createElement("i",{className:"icon-lock"}))),u.a.createElement(U.a,{type:"password",placeholder:"Contrace\xf1a",autoComplete:"current-password",onChange:function(t){return e.setState({inputPassword:t.target.value})}})),!0===this.state.errorLogin?u.a.createElement("div",{className:"alert alert-danger",role:"alert"},"Error: Credenciales incorrectas"):u.a.createElement("div",null),u.a.createElement(d.a,null,u.a.createElement(g.a,{xs:"6"},u.a.createElement(C.a,{color:"primary",className:"px-4",onClick:this.onLogin},"Iniciar ses\xf3n")),u.a.createElement(g.a,{xs:"6",className:"text-right"}))))),u.a.createElement(S.a,{className:"text-white bg-primary py-5 d-md-down-none",style:{width:"44%"}},u.a.createElement(L.a,{className:"text-center"},u.a.createElement("div",null,u.a.createElement("h2",null,"Crea tu cuenta"),u.a.createElement("p",null,"Registrate y vive una verdadera experiencia para llevar el control de tus finanzas personales"),u.a.createElement(p.Link,{to:"/register"},u.a.createElement(C.a,{color:"primary",className:"mt-3",active:!0,tabIndex:-1},"Registrate Ahora!"))))))))),!0===this.state.auth&&u.a.createElement(m.c,{from:"/",to:"/"}))}}]),t}(l.Component);t.default=A},910:function(e,t,a){"use strict";var n=a(235),o=a(236),r=function(){function e(){Object(n.a)(this,e);var t=window.location.host;"localhost:3000"===t&&(this.URL="http://localhost/coysa/public/api/"),"johnssther.github.io"===t&&(this.URL="http://coysa.herokuapp.com/api/"),this.API_TOKEN=localStorage.getItem("token")}return Object(o.a)(e,[{key:"onLogin",value:function(e,t){return fetch("".concat(this.URL,"login"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:e,password:t})}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){throw e}))}},{key:"registerUser",value:function(e){return fetch("".concat(this.URL,"register"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:e.name,email:e.email,username:e.username,password:e.password,password_confirmation:e.password_confirmation})}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){throw e}))}},{key:"saveExpenses",value:function(e){return fetch("".concat(this.URL,"gastos"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({api_token:this.API_TOKEN,gasto:e.gasto,cantidad:e.cantidad,precio_unidad:e.precioUnidad,precio_total:e.precioTotal,fecha:e.Fecha,user_id:e.id_usuario,tipogasto_id:e.tipogasto_id})}).then((function(e){return console.log("objeto guardado"),e.json()})).catch((function(e){throw e}))}},{key:"getExpenses",value:function(e){return fetch("".concat(this.URL,"gastos?api_token=").concat(this.API_TOKEN,"\n        &user_id=").concat(JSON.parse(localStorage.getItem("auth")).id,"\n        &mes=").concat(e.mes)).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){throw e}))}},{key:"getTipogastos",value:function(){return fetch("".concat(this.URL,"tipogastos?api_token=").concat(this.API_TOKEN,"&user_id=").concat(JSON.parse(localStorage.getItem("auth")).id)).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){throw e}))}},{key:"deleteExpense",value:function(e){return fetch("".concat(this.URL,"gastos/").concat(e),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).catch((function(e){throw e}))}}]),e}();t.a=new r},912:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",(function(){return n}))}}]);
//# sourceMappingURL=20.c8f195d8.chunk.js.map