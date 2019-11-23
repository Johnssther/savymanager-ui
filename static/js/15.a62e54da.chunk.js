(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1011:function(e,t,a){"use strict";a.r(t);var n=a(227),o=a(228),r=a(231),c=a(229),s=a(233),i=a(230),l=a(3),u=a.n(l),p=a(234),m=a(86),h=a(936),d=a(901),f=a(902),g=a(35),E=a(100),b=a(112),j=a.n(b),v=a(884),y=a.n(v),w=a(885),N={tag:w.l,className:j.a.string,cssModule:j.a.object},O=function(e){var t=e.className,a=e.cssModule,n=e.tag,o=Object(E.a)(e,["className","cssModule","tag"]),r=Object(w.h)(y()(t,"card-group"),a);return u.a.createElement(n,Object(g.a)({},o,{className:r}))};O.propTypes=N,O.defaultProps={tag:"div"};var k=O,S=a(898),T=a(899),L=a(937),_=a(988),R=a(989),x=a(938),C=a(939),I=a(903),P=a(891),U=a(1003),A=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).state={inputUsername:"",inputPassword:"",errorLogin:!1,auth:null!=localStorage.getItem("token"),loading:!1},a.onLogin=a.onLogin.bind(Object(s.a)(a)),a}return Object(i.a)(t,e),Object(o.a)(t,[{key:"onLogin",value:function(){var e=this;return this.setState({loading:!0}),new Promise(function(t,a){P.a.onLogin(e.state.inputUsername,e.state.inputPassword).then(function(a){a.username&&(localStorage.setItem("auth",JSON.stringify(a)),localStorage.setItem("token",a.api_token),console.log(a.api_token),e.props.history.push("/")),"The given data was invalid."!==a.message||e.setState({errorLogin:!1,loading:!1}),t(a)},function(t){e.setState({loading:!1}),a(t)})})}},{key:"render",value:function(){var e=this;return u.a.createElement("div",{className:"app flex-row align-items-center"},u.a.createElement(h.a,null,u.a.createElement(d.a,{className:"justify-content-center"},u.a.createElement(f.a,{md:"8"},!0===this.state.loading?u.a.createElement(U.a,null):"",u.a.createElement(k,null,u.a.createElement(S.a,{className:"p-4"},u.a.createElement(T.a,null,u.a.createElement(L.a,null,u.a.createElement("h1",null,"Iniciar Sesi\xf3n"),u.a.createElement("p",{className:"text-muted"},"Ingresa si ya tienes una cuenta"),u.a.createElement(_.a,{className:"mb-3"},u.a.createElement(R.a,{addonType:"prepend"},u.a.createElement(x.a,null,u.a.createElement("i",{className:"icon-user"}))),u.a.createElement(C.a,{type:"text",placeholder:"Usuario",autoComplete:"username",onChange:function(t){return e.setState({inputUsername:t.target.value})}})),u.a.createElement(_.a,{className:"mb-4"},u.a.createElement(R.a,{addonType:"prepend"},u.a.createElement(x.a,null,u.a.createElement("i",{className:"icon-lock"}))),u.a.createElement(C.a,{type:"password",placeholder:"Contrace\xf1a",autoComplete:"current-password",onChange:function(t){return e.setState({inputPassword:t.target.value})}})),!0===this.state.errorLogin?u.a.createElement("div",{className:"alert alert-danger",role:"alert"},"Error: Credenciales incorrectas"):u.a.createElement("div",null),u.a.createElement(d.a,null,u.a.createElement(f.a,{xs:"6"},u.a.createElement(I.a,{color:"success",className:"px-4",onClick:this.onLogin},"Iniciar ses\xf3n")),u.a.createElement(f.a,{xs:"6",className:"text-right"}))))),u.a.createElement(S.a,{className:"text-white bg-success py-5 d-md-down-none",style:{width:"44%"}},u.a.createElement(T.a,{className:"text-center"},u.a.createElement("div",null,u.a.createElement("h2",null,"Crea tu cuenta"),u.a.createElement("p",null,"Registrate y vive una verdadera experiencia para llevar el control de tus finanzas personales"),u.a.createElement(p.Link,{to:"/register"},u.a.createElement(I.a,{color:"success",className:"mt-3",active:!0,tabIndex:-1},"Registrate Ahora!"))))))))),!0===this.state.auth&&u.a.createElement(m.c,{from:"/",to:"/"}))}}]),t}(l.Component);t.default=A},891:function(e,t,a){"use strict";var n=a(227),o=a(228),r=function(){function e(){Object(n.a)(this,e);var t=window.location.host;"localhost:3000"===t&&(this.URL="http://localhost/coysa/public/api/"),"johnssther.github.io"===t&&(this.URL="http://coysa.herokuapp.com/api/"),this.API_TOKEN=localStorage.getItem("token")}return Object(o.a)(e,[{key:"onLogin",value:function(e,t){return fetch("".concat(this.URL,"login"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:e,password:t})}).then(function(e){return e.json()}).then(function(e){return e}).catch(function(e){throw e})}},{key:"registerUser",value:function(e){return fetch("".concat(this.URL,"register"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:e.name,email:e.email,username:e.username,password:e.password,password_confirmation:e.password_confirmation})}).then(function(e){return e.json()}).then(function(e){return e}).catch(function(e){throw e})}},{key:"saveExpenses",value:function(e){return fetch("".concat(this.URL,"gastos"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({api_token:this.API_TOKEN,gasto:e.gasto,cantidad:e.cantidad,precio_unidad:e.precioUnidad,precio_total:e.precioTotal,fecha:e.Fecha,user_id:e.id_usuario,tipogasto_id:e.tipogasto_id})}).then(function(e){return console.log("objeto guardado"),e.json()}).catch(function(e){throw e})}},{key:"getExpenses",value:function(){var e=window.location;return console.log(e,"oo"),fetch("".concat(this.URL,"gastos?api_token=").concat(this.API_TOKEN,"&user_id=").concat(JSON.parse(localStorage.getItem("auth")).id)).then(function(e){return e.json()}).then(function(e){return e}).catch(function(e){throw e})}},{key:"getTipogastos",value:function(){return fetch("".concat(this.URL,"tipogastos?api_token=").concat(this.API_TOKEN,"&user_id=").concat(JSON.parse(localStorage.getItem("auth")).id)).then(function(e){return e.json()}).then(function(e){return e}).catch(function(e){throw e})}},{key:"deleteExpense",value:function(e){return fetch("".concat(this.URL,"gastos/").concat(e),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(e){return e.json()}).catch(function(e){throw e})}}]),e}();t.a=new r},892:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",function(){return n})},937:function(e,t,a){"use strict";var n=a(35),o=a(100),r=a(886),c=a(63),s=a(3),i=a.n(s),l=a(112),u=a.n(l),p=a(884),m=a.n(p),h=a(885),d={children:u.a.node,inline:u.a.bool,tag:h.l,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},f=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(r.a)(a)),a.submit=a.submit.bind(Object(r.a)(a)),a}Object(c.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,r=e.inline,c=e.tag,s=e.innerRef,l=Object(o.a)(e,["className","cssModule","inline","tag","innerRef"]),u=Object(h.h)(m()(t,!!r&&"form-inline"),a);return i.a.createElement(c,Object(n.a)({},l,{ref:s,className:u}))},t}(s.Component);f.propTypes=d,f.defaultProps={tag:"form"},t.a=f}}]);
//# sourceMappingURL=15.a62e54da.chunk.js.map