(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[31],{1095:function(e,t,a){"use strict";a.r(t);var n=a(237),o=a(238),r=a(240),s=a(239),c=a(242),i=a(241),l=a(2),m=a.n(l),u=a(962),p=a(930),h=a(931),d=a(932),f=a(933),g=a(1042),E=a(979),_=a(980),w=a(936),y=a(949),v=a(926),b=a(912),j=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(s.a)(t).call(this,e))).state={name:"",username:"",email:"",password:"",password_confirmation:"",name_error:"",errors_example:""},a.validateForm=a.validateForm.bind(Object(c.a)(a)),a.registerUser=a.registerUser.bind(Object(c.a)(a)),a}return Object(i.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){}},{key:"validateForm",value:function(e){var t=e.target.name,a=e.target.value;switch(t){case"name":this.setState({name:a});break;case"username":this.setState({username:a});break;case"email":this.setState({email:a});break;case"password":this.setState({password:a});break;case"password_confirmation":this.setState({password_confirmation:a})}}},{key:"registerUser",value:function(){var e=this,t={name:this.state.name,username:this.state.username,email:this.state.email,password:this.state.password,password_confirmation:this.state.password_confirmation};!0===function(){var a=!!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(t.email),n=t.name.length>4,o=t.username.length>4,r=t.password.length>7;return n?o?a?r?!!(t.password===t.password_confirmation)||(e.setState({errors_example:"Las contrase\xf1as con considen"}),!1):(e.setState({errors_example:"La contrase\xf1a debe tener minimo 8 caracteres"}),!1):(e.setState({errors_example:"Correo invalido"}),!1):(e.setState({errors_example:"Usuario minimo 4 caracteres"}),!1):(e.setState({errors_example:"Nombre minimo 4 caracteres"}),!1)}()&&(this.setState({errors_example:"Campos validos, puede continuar"}),b.a.registerUser(t),this.props.history.push("/login"))}},{key:"render",value:function(){return m.a.createElement("div",{className:"app flex-row align-items-center"},m.a.createElement(u.a,null,m.a.createElement(p.a,{className:"justify-content-center"},m.a.createElement(h.a,{md:"9",lg:"7",xl:"6"},m.a.createElement(d.a,{className:"mx-4"},m.a.createElement(f.a,{className:"p-4"},m.a.createElement(g.a,null,m.a.createElement("h1",null,"Registrate"),m.a.createElement("p",{className:"text-muted"}),"Crea tu cuenta",m.a.createElement(E.a,{className:"mb-3"},m.a.createElement(_.a,{addonType:"prepend"},m.a.createElement(w.a,null,m.a.createElement("i",{className:"icon-user"}))),m.a.createElement(y.a,{type:"text",placeholder:"Ingresa tu Nombre",autoComplete:"name",name:"name",onChange:this.validateForm})),m.a.createElement("p",null,this.state.name_error),m.a.createElement(E.a,{className:"mb-3"},m.a.createElement(_.a,{addonType:"prepend"},m.a.createElement(w.a,null,m.a.createElement("i",{className:"icon-user"}))),m.a.createElement(y.a,{type:"text",placeholder:"Ingresa un usuario",autoComplete:"username",name:"username",onChange:this.validateForm})),m.a.createElement(E.a,{className:"mb-3"},m.a.createElement(_.a,{addonType:"prepend"},m.a.createElement(w.a,null,"@")),m.a.createElement(y.a,{type:"text",placeholder:"Ingresa correo electr\xf3nico",autoComplete:"email",name:"email",onChange:this.validateForm})),m.a.createElement(E.a,{className:"mb-3"},m.a.createElement(_.a,{addonType:"prepend"},m.a.createElement(w.a,null,m.a.createElement("i",{className:"icon-lock"}))),m.a.createElement(y.a,{type:"password",placeholder:"Ingresa Contrase\xf1a",autoComplete:"new-password",name:"password",onChange:this.validateForm})),m.a.createElement(E.a,{className:"mb-4"},m.a.createElement(_.a,{addonType:"prepend"},m.a.createElement(w.a,null,m.a.createElement("i",{className:"icon-lock"}))),m.a.createElement(y.a,{type:"password",placeholder:"Repita tu  contrase\xf1a",autoComplete:"new-password",name:"password_confirmation",onChange:this.validateForm})),m.a.createElement(v.a,{color:"primary",block:!0,onClick:this.registerUser},"Registrarme"),m.a.createElement("p",null,this.state.errors_example))))))))}}]),t}(l.Component);t.default=j},911:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return o}));var n=function(e){if(console.log(e),!1===e.success)throw e;if(e){var t={success:!1,errors:"Error de conexion"};if("TypeError: Failed to fetch"!==e)throw t;throw t}},o=function(e){throw e}},912:function(e,t,a){"use strict";var n=a(237),o=a(238),r=(a(911),function(){function e(){Object(n.a)(this,e);var t=window.location.host;"localhost:3000"===t&&(this.URL="http://localhost/coysa/public/api/"),"johnssther.github.io"===t&&(this.URL="http://coysa.herokuapp.com/api/"),this.API_TOKEN=localStorage.getItem("token")}return Object(o.a)(e,[{key:"onLogin",value:function(e,t){return fetch("".concat(this.URL,"login"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:e,password:t})}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){throw e}))}},{key:"registerUser",value:function(e){return fetch("".concat(this.URL,"register"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:e.name,email:e.email,username:e.username,password:e.password,password_confirmation:e.password_confirmation})}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){throw e}))}},{key:"getExpenses",value:function(e){return fetch("".concat(this.URL,"gastos?api_token=").concat(this.API_TOKEN,"\n        &user_id=").concat(JSON.parse(localStorage.getItem("auth")).id,"\n        &mes=").concat(e.mes)).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){throw e}))}},{key:"saveExpenses",value:function(e){return console.log(e,"joh"),fetch("".concat(this.URL,"gastos"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({api_token:this.API_TOKEN,gasto:e.gasto,cantidad:e.cantidad,precio_unidad:e.precio_unidad,precio_total:e.precio_total,fecha:e.fecha,user_id:e.user_id,tipogasto_id:e.tipogasto_id})}).then((function(e){return e.json()})).catch((function(e){throw e}))}},{key:"updateExpense",value:function(e){return console.log(e),fetch("".concat(this.URL,"gastos/").concat(e.id),{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({api_token:this.API_TOKEN,gasto:e.gasto,cantidad:e.cantidad,precio_unidad:e.precio_unidad,precio_total:e.precio_total,fecha:e.fecha,user_id:e.user_id,tipogasto_id:e.tipogasto_id})}).then((function(e){return e.json()})).catch((function(e){throw e}))}},{key:"showExpense",value:function(e){return fetch("".concat(this.URL,"gastos/").concat(e.id,"?api_token=").concat(this.API_TOKEN,"&user_id=").concat(JSON.parse(localStorage.getItem("auth")).id)).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){throw e}))}},{key:"deleteExpense",value:function(e){return fetch("".concat(this.URL,"gastos/").concat(e,"?api_token=").concat(this.API_TOKEN),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).catch((function(e){throw e}))}},{key:"getExpensesType",value:function(){return fetch("".concat(this.URL,"tipogastos?api_token=").concat(this.API_TOKEN,"&user_id=").concat(JSON.parse(localStorage.getItem("auth")).id)).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){throw e}))}}]),e}());t.a=new r}}]);
//# sourceMappingURL=31.9c60bbc2.chunk.js.map