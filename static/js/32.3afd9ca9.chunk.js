(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[32],{592:function(e,a,t){"use strict";var r=t(522),l=t(524),n=t(1),c=t.n(n),s=t(530);a.a=function(e){var a=e.label,t=e.placeholder,n=Object(l.a)(e,["label","placeholder"]),m=Object(s.c)(n),o=Object(r.a)(m,2),i=o[0],u=o[1],E=c.a.useState(!1),d=Object(r.a)(E,2),p=d[0],g=d[1],v=!!p&&i.value.length>2||u.touched;return c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:i.name},a),c.a.createElement("input",Object.assign({className:"form-control sm ".concat(v?u.error?"is-invalid":"is-valid":"")},i,n,{placeholder:t,onFocus:function(){return g(!0)}})),c.a.createElement("div",{className:"valid-feedback"},"Completado"),c.a.createElement("div",{className:"invalid-feedback"},u.error))}},623:function(e,a,t){"use strict";var r=t(522),l=t(1),n=t.n(l),c=t(628),s=t(646),m=t(807),o=t(605),i=t(731),u=t(606),E=t(556),d=function(e){var a=e.text,t=n.a.useState(!1),l=Object(r.a)(t,2),c=l[0],s=l[1],d=function(){s(!c)};return n.a.createElement(n.a.Fragment,null,n.a.createElement(m.a,{isOpen:c,toggle:function(){d()},style:{width:"88%"},className:"modal-danger"},n.a.createElement(o.a,null,"Error"),n.a.createElement(i.a,null,a.error),n.a.createElement(u.a,null,n.a.createElement(E.a,{color:"danger",onClick:d},"Do Something")," ",n.a.createElement(E.a,{color:"secondary",onClick:d},"Cancel"))))};a.a=function(e){var a=e.children,t=e.success,m=Object(l.useState)(!0),o=Object(r.a)(m,2),i=o[0];o[1];return n.a.createElement(c.a,null,!1===t.success?null:n.a.createElement(s.a,{className:"bg-danger",isOpen:i},n.a.createElement("b",null,"Error: ",t.error),n.a.createElement("br",null),n.a.createElement("b",null,"Error de conexion"===t.error?"Ocurrio un error inesperado al momento de intetar establecer conexi\xf3n por favor recargue su navegador nuevamente.":"","  "),n.a.createElement("br",null)),n.a.createElement(d,{text:t}),a)}},750:function(e,a){},845:function(e,a,t){"use strict";t.r(a);var r=t(528),l=t.n(r),n=t(529),c=t(522),s=t(1),m=t.n(s),o=t(573),i=t(577),u=t(574),E=t(571),d=t(572),p=t(556),g=t(623),v=t(530),b=t(596),h=(t(576),t(592)),f=(t(750),function(e){var a=e.onCreate,t=(e.expensestype,e.success);e.expense;return m.a.createElement(g.a,{success:t},m.a.createElement(o.a,null,m.a.createElement("div",{className:"bg-primary text-center"},m.a.createElement("img",{className:"img-circle",src:"assets/img/avatars/6.jpg",alt:"admin@bootstrapmaster.com",width:"200"}),m.a.createElement("h1",null,JSON.parse(localStorage.getItem("auth")).name)),m.a.createElement(i.a,{className:"row bg-success"},m.a.createElement("div",{className:"col-sm"},m.a.createElement("h2",null,"Profile"))),m.a.createElement(u.a,null,m.a.createElement(v.b,{initialValues:{name:JSON.parse(localStorage.getItem("auth")).name,username:JSON.parse(localStorage.getItem("auth")).username,id:JSON.parse(localStorage.getItem("auth")).id},validationSchema:b.d({name:b.e().min(3,"Ingrese su nombre.").required("El nombre es requerido"),username:b.e().min(3,"Ingrese su username.").required("El usuario es requerido")}),onSubmit:function(e,t){var r=t.setSubmitting;a(e),r(!0)}},m.a.createElement(v.a,null,m.a.createElement("div",{class:""},m.a.createElement("div",{class:"row"},m.a.createElement("div",{class:"col-sm"},m.a.createElement("h4",null,"ID")),m.a.createElement("div",{class:"col-sm"},"AAB747CD65W2-",JSON.parse(localStorage.getItem("auth")).id)),m.a.createElement("div",{class:"row"},m.a.createElement("div",{class:"col-sm"},m.a.createElement("h4",null,"E-mail")),m.a.createElement("div",{class:"col-sm"},JSON.parse(localStorage.getItem("auth")).email)),m.a.createElement("div",{class:"row"},m.a.createElement("div",{class:"col-sm"},m.a.createElement("h4",null,"Name")),m.a.createElement("div",{class:"col-sm"},m.a.createElement(h.a,{name:"name",type:"text",label:!1,placeholder:"Ingrese su nombre."}))),m.a.createElement("div",{class:"row"},m.a.createElement("div",{class:"col-sm"},m.a.createElement("h4",null,"User")),m.a.createElement("div",{class:"col-sm"},m.a.createElement(h.a,{name:"username",type:"text",label:!1,placeholder:"Ingrese su usuario."})))),m.a.createElement("hr",null),m.a.createElement(E.a,null,m.a.createElement(d.a,{sm:{size:6,offset:4}},m.a.createElement(p.a,{className:"col-sm-3 m-1",type:"reset",color:"secondary",size:"sm"},"Reset"),m.a.createElement(p.a,{className:"col-sm-3 m-1",type:"submit",color:"primary",size:"sm"},"Save"))))))))});t(165);a.default=function(e){var a=e.match,t=(e.expensestypes,e.expense,a.params,m.a.useState({success:!1,error:null})),r=Object(c.a)(t,2),s=r[0],o=r[1],i=function(){var a=Object(n.a)(l.a.mark((function a(t){return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:try{Object.assign(t,{user_id:JSON.parse(localStorage.getItem("auth")).id}),e.history.push("/profile")}catch(r){Object.assign(r,{success:!0}),Object.assign(r,{error:r.errors}),o(r)}case 1:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return m.a.createElement(f,{onCreate:i,success:s})}}}]);
//# sourceMappingURL=32.3afd9ca9.chunk.js.map