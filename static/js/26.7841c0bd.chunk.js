(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[26],{1038:function(e,a,n){"use strict";n.r(a);var t=n(235),o=n(236),s=n(239),l=n(237),r=n(238),i=n(2),c=n.n(i),u=n(89),m=n(241),p=n(925),d=n(941),g={items:[{name:"Dashboard",url:"/dashboard",icon:"icon-speedometer"},{name:"Gastos",url:"/gastos",icon:"icon-cursor",children:[{name:"Ingresar gastos",url:"/gastos/ingresargastos",icon:"icon-pencil"},{name:"Informe de gastos",url:"/gastos/informegastos",icon:"icon-pencil",children:[{name:"Reporte Gastos",url:"/gastos/informegastos/reporte",icon:"icon-puzzle"},{name:"Gastos diarios",url:"/gastos/informegastos/diarios",icon:"icon-puzzle"},{name:"Gastos semanales",url:"/gastos/informegastos/semanales",icon:"icon-puzzle"},{name:"Gastos mensuales",url:"/gastos/informegastos/mensuales",icon:"icon-puzzle"}]}]}]},f=[{path:"/",exact:!0,name:"Home"},{path:"/dashboard",name:"Dashboard",component:c.a.lazy((function(){return n.e(13).then(n.bind(null,1040))}))},{path:"/notifications/alerts",name:"Alerts",component:c.a.lazy((function(){return Promise.all([n.e(0),n.e(17)]).then(n.bind(null,1046))}))},{path:"/notifications/badges",name:"Badges",component:c.a.lazy((function(){return n.e(14).then(n.bind(null,1027))}))},{path:"/gastos/ingresargastos",name:"Ingresar gastos",component:c.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(18),n.e(19)]).then(n.bind(null,1037))}))},{path:"/gastos/informegastos/reporte",name:"Reporte de gastos",component:c.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(21)]).then(n.bind(null,1039))}))},{path:"/gastos/informegastos/diarios",name:"Gastos diarios",component:c.a.lazy((function(){return n.e(16).then(n.bind(null,1032))}))},{path:"/gastos/informegastos/semanales",name:"Gastos semanales",component:c.a.lazy((function(){return Promise.all([n.e(0),n.e(20)]).then(n.bind(null,1036))}))},{path:"/gastos/informegastos/mensuales",name:"Gastos mensuales",component:c.a.lazy((function(){return n.e(15).then(n.bind(null,1033))}))}],h=c.a.lazy((function(){return Promise.all([n.e(12),n.e(24)]).then(n.bind(null,1019))})),b=c.a.lazy((function(){return n.e(25).then(n.bind(null,1024))})),E=c.a.lazy((function(){return Promise.all([n.e(0),n.e(7),n.e(22)]).then(n.bind(null,1043))})),z=function(e){function a(e){var n;return Object(t.a)(this,a),(n=Object(s.a)(this,Object(l.a)(a).call(this,e))).loading=function(){return c.a.createElement("div",{className:"animated fadeIn pt-1 text-center"},"Loading...")},n.state={auth:null!=localStorage.getItem("token")},n}return Object(r.a)(a,e),Object(o.a)(a,[{key:"signOut",value:function(e){e.preventDefault(),this.props.history.push("/login"),localStorage.clear()}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"app"},c.a.createElement(d.e,{fixed:!0,style:{background:"#428bca"}},c.a.createElement(i.Suspense,{fallback:this.loading()},c.a.createElement(E,{onLogout:function(a){return e.signOut(a)}}))),c.a.createElement("div",{className:"app-body"},c.a.createElement(d.g,{fixed:!0,display:"lg"},c.a.createElement(d.j,null),c.a.createElement(d.i,null),c.a.createElement(i.Suspense,null,c.a.createElement(d.l,Object.assign({navConfig:g},this.props,{router:m}))),c.a.createElement(d.h,null),c.a.createElement(d.k,null)),c.a.createElement("main",{className:"main"},c.a.createElement(d.c,{appRoutes:f,router:m}),c.a.createElement(p.a,{fluid:!0},c.a.createElement(i.Suspense,{fallback:this.loading()},c.a.createElement(u.g,null,f.map((function(e,a){return e.component?c.a.createElement(u.d,{key:a,path:e.path,exact:e.exact,name:e.name,render:function(a){return c.a.createElement(e.component,a)}}):null})),c.a.createElement(u.c,{from:"/",to:"/dashboard"}))))),c.a.createElement(d.a,{fixed:!0},c.a.createElement(i.Suspense,{fallback:this.loading()},c.a.createElement(h,null)))),c.a.createElement(d.d,null,c.a.createElement(i.Suspense,{fallback:this.loading()},c.a.createElement(b,null))),!1===this.state.auth&&c.a.createElement(u.c,{from:"/",to:"/login"}))}}]),a}(i.Component);a.default=z}}]);
//# sourceMappingURL=26.7841c0bd.chunk.js.map