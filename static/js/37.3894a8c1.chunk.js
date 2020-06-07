(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[37],{841:function(e,n,a){"use strict";a.r(n);var t=a(158),s=a(159),o=a(161),l=a(160),r=a(1),i=a.n(r),c=a(18),u=a(163),m=a(628),p=a(666),d={items:[{name:"Dashboard",url:"/dashboard",icon:"icon-speedometer"},{name:"Gastos",url:"/gastos",icon:"icon-cursor",children:[{name:"Ingresar gastos",url:"/gastos/ingresargastos",icon:"icon-pencil"},{name:"Informe de gastos",url:"/gastos/informegastos",icon:"icon-pencil",children:[{name:"Reporte Gastos",url:"/gastos/informegastos/reporte",icon:"icon-puzzle"},{name:"Gastos diarios",url:"/gastos/informegastos/diarios",icon:"icon-puzzle"},{name:"Gastos semanales",url:"/gastos/informegastos/semanales",icon:"icon-puzzle"},{name:"Gastos mensuales",url:"/gastos/informegastos/mensuales",icon:"icon-puzzle"}]}]},{name:"Expenses",url:"/expenses",icon:"icon-cursor",badge:{variant:"danger",text:"NEW"},children:[{name:"Moduls",url:"/expenses/moduls",icon:"icon-folder",class:"bg-dark",children:[{name:"Personal Expenses",url:"/expenses/moduls/personalexpenses",icon:"icon-cursor",class:"",attributes:{activeStyle:{backgroundColor:"yellow",color:"black"}}}]},{name:"References",url:"/expenses/references",icon:"icon-folder",class:"bg-dark",children:[{name:"Expenses Type",url:"/expenses/references/expensestype",icon:"icon-grid",class:"",attributes:{activeStyle:{backgroundColor:"yellow",color:"black"},exact:!0}}]},{name:"Reports",url:"/expenses/reports",icon:"icon-folder",class:"bg-dark",attributes:{class:"bg-success "},children:[{name:"Expenses Type",url:"/expenses/reports/rpersonalexpenses",icon:"icon-doc",attributes:{activeStyle:{backgroundColor:"yellow",color:"black"},exact:!0}}]}]}]},f=i.a.lazy((function(){return a.e(24).then(a.bind(null,852))})),h=i.a.lazy((function(){return Promise.all([a.e(0),a.e(27)]).then(a.bind(null,830))})),g=i.a.lazy((function(){return a.e(26).then(a.bind(null,831))})),b=i.a.lazy((function(){return Promise.all([a.e(28),a.e(39)]).then(a.bind(null,844))})),x=i.a.lazy((function(){return Promise.all([a.e(0),a.e(2),a.e(5),a.e(12),a.e(32)]).then(a.bind(null,845))})),y=[{path:"/",exact:!0,name:"Home"},{path:"/dashboard",name:"Dashboard",component:f},{path:"/notifications/alerts",name:"Alerts",component:h},{path:"/notifications/badges",name:"Badges",component:g},{path:"/gastos/ingresargastos",name:"Ingresar gastos",component:i.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(3),a.e(15)]).then(a.bind(null,839))}))},{path:"/gastos/informegastos/reporte",name:"Reporte de gastos",component:i.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(3),a.e(16)]).then(a.bind(null,842))}))},{path:"/gastos/informegastos/diarios",name:"Gastos diarios",component:i.a.lazy((function(){return a.e(29).then(a.bind(null,832))}))},{path:"/gastos/informegastos/semanales",name:"Gastos semanales",component:i.a.lazy((function(){return Promise.all([a.e(0),a.e(31)]).then(a.bind(null,840))}))},{path:"/gastos/informegastos/mensuales",name:"Gastos mensuales",component:i.a.lazy((function(){return a.e(25).then(a.bind(null,833))}))},{exact:!0,path:"/profile",name:"ProfileShow",component:b},{exact:!0,path:"/profile/edit/:id",name:"ProfileEdit",component:x},{exact:!0,path:"/expenses/moduls/personalexpenses",name:"Expenses",component:i.a.lazy((function(){return Promise.all([a.e(1),a.e(4),a.e(21)]).then(a.bind(null,847))}))},{exact:!0,path:"/expenses/moduls/personalexpenses/create",name:"ExpensesCreate",component:i.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(3),a.e(9)]).then(a.bind(null,834))}))},{exact:!0,path:"/expenses/moduls/personalexpenses/show/:id",name:"ExpensesShow",component:i.a.lazy((function(){return Promise.all([a.e(5),a.e(23)]).then(a.bind(null,843))}))},{exact:!0,path:"/expenses/moduls/personalexpenses/edit/:id",name:"ExpensesEdit",component:i.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(3),a.e(10)]).then(a.bind(null,835))}))},{exact:!0,path:"/expenses/references/expensestype",name:"Expenses Type",component:i.a.lazy((function(){return Promise.all([a.e(1),a.e(4),a.e(22)]).then(a.bind(null,848))}))},{exact:!0,path:"/expenses/references/expensestype/create",name:"ExpensesTypeCreate",component:i.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(3),a.e(11)]).then(a.bind(null,850))}))},{exact:!0,path:"/expenses/reports/rpersonalexpenses",name:"Personal Report Expenses",component:i.a.lazy((function(){return a.e(38).then(a.bind(null,836))}))}],E=i.a.lazy((function(){return a.e(30).then(a.bind(null,838))})),z=i.a.lazy((function(){return a.e(36).then(a.bind(null,827))})),k=i.a.lazy((function(){return Promise.all([a.e(0),a.e(13),a.e(35)]).then(a.bind(null,853))})),P=function(e){Object(o.a)(a,e);var n=Object(l.a)(a);function a(e){var s;return Object(t.a)(this,a),(s=n.call(this,e)).loading=function(){return i.a.createElement("div",{className:"animated fadeIn pt-1 text-center"},"Loading...")},s.state={auth:null!=localStorage.getItem("token")},s}return Object(s.a)(a,[{key:"signOut",value:function(e){e.preventDefault(),this.props.history.push("/login"),localStorage.clear()}},{key:"onProfile",value:function(e){e.preventDefault(),this.props.history.push("/profile")}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"app"},i.a.createElement(p.e,{fixed:!0,style:{background:"#428bca",border:"none"}},i.a.createElement(r.Suspense,{fallback:this.loading()},i.a.createElement(k,{onLogout:function(n){return e.signOut(n)},onProfile:function(n){return e.onProfile(n)}}))),i.a.createElement("div",{className:"app-body"},i.a.createElement(p.g,{fixed:!0,display:"lg"},i.a.createElement(p.j,null),i.a.createElement(p.i,null),i.a.createElement(r.Suspense,null,i.a.createElement(p.l,Object.assign({className:"sidebar-nav",navConfig:d},this.props,{router:u}))),i.a.createElement(p.h,null),i.a.createElement(p.k,null)),i.a.createElement("main",{className:"main"},i.a.createElement(p.c,{appRoutes:y,router:u}),i.a.createElement(m.a,{fluid:!0},i.a.createElement(r.Suspense,{fallback:this.loading()},i.a.createElement(c.g,null,y.map((function(e,n){return e.component?i.a.createElement(c.d,{key:n,path:e.path,exact:e.exact,name:e.name,render:function(n){return i.a.createElement(e.component,n)}}):null})),i.a.createElement(c.c,{from:"/",to:"/dashboard"}))))),i.a.createElement(p.a,{fixed:!0},i.a.createElement(r.Suspense,{fallback:this.loading()},i.a.createElement(E,null)))),i.a.createElement(p.d,null,i.a.createElement(r.Suspense,{fallback:this.loading()},i.a.createElement(z,null))),!1===this.state.auth&&i.a.createElement(c.c,{from:"/",to:"/login"}))}}]),a}(r.Component);n.default=P}}]);
//# sourceMappingURL=37.3894a8c1.chunk.js.map