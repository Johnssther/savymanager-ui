(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[35],{1024:function(e,n,t){"use strict";t.r(n);var a=t(159),r=t(160),l=t(161),s=t(162),c=t(1),o=t.n(c),u=t(18),i=t(163),m=t(757),p=(t(809),t(730)),d=t(748),f=[{path:"/",exact:!0,name:"Home"},{path:"/dashboard",name:"Dashboard",component:o.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(10),t.e(24)]).then(t.bind(null,1020))}))},{path:"/notifications/alerts",name:"Alerts",component:o.a.lazy((function(){return Promise.all([t.e(1),t.e(31)]).then(t.bind(null,1031))}))},{path:"/notifications/badges",name:"Badges",component:o.a.lazy((function(){return t.e(28).then(t.bind(null,1015))}))},{exact:!0,path:"/profile",name:"ProfileShow",component:o.a.lazy((function(){return t.e(32).then(t.bind(null,1032))}))},{exact:!0,path:"/profile/edit/:id",name:"ProfileEdit",component:o.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(17)]).then(t.bind(null,1033))}))},{exact:!0,path:"/expenses/moduls/personalexpenses",name:"Expenses",component:o.a.lazy((function(){return Promise.all([t.e(0),t.e(4),t.e(25)]).then(t.bind(null,1034))}))},{exact:!0,path:"/expenses/moduls/personalexpenses/create",name:"ExpensesCreate",component:o.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(12)]).then(t.bind(null,1016))}))},{exact:!0,path:"/expenses/moduls/personalexpenses/show/:id",name:"ExpensesShow",component:o.a.lazy((function(){return Promise.all([t.e(0),t.e(20)]).then(t.bind(null,1035))}))},{exact:!0,path:"/expenses/moduls/personalexpenses/edit/:id",name:"ExpensesEdit",component:o.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(13)]).then(t.bind(null,1017))}))},{exact:!0,path:"/expenses/references/expensestype",name:"Expenses Type",component:o.a.lazy((function(){return Promise.all([t.e(0),t.e(4),t.e(30)]).then(t.bind(null,1036))}))},{exact:!0,path:"/expenses/references/expensestype/create",name:"ExpensesTypeCreate",component:o.a.lazy((function(){return Promise.all([t.e(0),t.e(3),t.e(29)]).then(t.bind(null,1019))}))},{exact:!0,path:"/expenses/reports/rpersonalexpenses",name:"Personal Report Expenses",component:o.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(4),t.e(14)]).then(t.bind(null,1023))}))},{exact:!0,path:"/revenues",name:"Revenues",component:o.a.lazy((function(){return Promise.all([t.e(0),t.e(4),t.e(27)]).then(t.bind(null,1037))}))},{exact:!0,path:"/revenues/create",name:"RevenuesCreate",component:o.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(15)]).then(t.bind(null,1038))}))},{exact:!0,path:"/budget",name:"Budget",component:o.a.lazy((function(){return Promise.all([t.e(0),t.e(4),t.e(26)]).then(t.bind(null,1027))}))},{exact:!0,path:"/budget/create",name:"BudgetCreate",component:o.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(11)]).then(t.bind(null,1028))}))}],h=o.a.lazy((function(){return t.e(33).then(t.bind(null,1022))})),E=o.a.lazy((function(){return t.e(36).then(t.bind(null,1013))})),y=o.a.lazy((function(){return Promise.all([t.e(1),t.e(23)]).then(t.bind(null,1026))})),b=function(e){Object(l.a)(t,e);var n=Object(s.a)(t);function t(e){var r;return Object(a.a)(this,t),(r=n.call(this,e)).loading=function(){return o.a.createElement("div",{className:"animated fadeIn pt-1 text-center"},"Loading...")},r.state={auth:null!=localStorage.getItem("token")},r}return Object(r.a)(t,[{key:"signOut",value:function(e){e.preventDefault(),this.props.history.push("/login"),localStorage.clear()}},{key:"onProfile",value:function(e){e.preventDefault(),this.props.history.push("/profile")}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"app"},o.a.createElement(p.e,{fixed:!0,style:{background:"#39811D",border:"none"}},o.a.createElement(c.Suspense,{fallback:this.loading()},o.a.createElement(y,{onLogout:function(n){return e.signOut(n)},onProfile:function(n){return e.onProfile(n)}}))),o.a.createElement("div",{className:"app-body"},o.a.createElement(p.g,{fixed:!0,display:"lg",className:"primary"},o.a.createElement(p.j,null),o.a.createElement(p.i,null),o.a.createElement(c.Suspense,null,o.a.createElement(d.a,Object.assign({className:"sidebar-nav"},this.props,{router:i}))),o.a.createElement(p.h,null),o.a.createElement(p.k,null)),o.a.createElement("main",{className:"main"},o.a.createElement(p.c,{appRoutes:f,router:i}),o.a.createElement(m.a,{fluid:!0},o.a.createElement(c.Suspense,{fallback:this.loading()},o.a.createElement(u.g,null,f.map((function(e,n){return e.component?o.a.createElement(u.d,{key:n,path:e.path,exact:e.exact,name:e.name,render:function(n){return o.a.createElement(e.component,n)}}):null})),o.a.createElement(u.c,{from:"/",to:"/dashboard"}))))),o.a.createElement(p.a,{fixed:!0},o.a.createElement(c.Suspense,{fallback:this.loading()},o.a.createElement(h,Object.assign({},this.props,{router:i}))))),o.a.createElement(p.d,null,o.a.createElement(c.Suspense,{fallback:this.loading()},o.a.createElement(E,null))),!1===this.state.auth&&o.a.createElement(u.c,{from:"/",to:"/login"}))}}]),t}(c.Component);n.default=b},748:function(e,n,t){"use strict";var a=t(512),r=t.n(a),l=t(513),s=t(514),c=t(1),o=t.n(c),u=t(994),i=t(998),m=t(997),p=t(1039),d=t(1003),f=t(1e3),h=t(1025),E=t(1004),y=t(1005),b=t(1006),x=t(1007),g=t(1008),v=t(1009),k=t(754),O=t.n(k),P=t(755),j=t.n(P),z=t(756),S=t.n(z),w=t(838),C=t(837),N=t(999),R=t(1040),D=t(1001),I=t(1002),B=Object(u.a)((function(e){return{root:{width:"100%",maxWidth:560,fontSize:"10px"},nested:{paddingLeft:e.spacing(3)}}}));n.a=function(e){var n=B(),t=o.a.useState(!1),a=Object(s.a)(t,2),c=a[0],u=a[1],k=o.a.useState(!1),P=Object(s.a)(k,2),z=P[0],F=P[1],J=o.a.useState("#212121"),L=Object(s.a)(J,2),M=L[0],T=L[1],A=o.a.useState("#212121"),H=Object(s.a)(A,2),W=H[0],q=H[1],G=o.a.useState("#212121"),K=Object(s.a)(G,2),Q=K[0],U=K[1],V=o.a.useState(),X=Object(s.a)(V,2),Y=(X[0],X[1],o.a.useState(null===localStorage.getItem("auth")?"":JSON.parse(localStorage.getItem("auth")).name)),Z=Object(s.a)(Y,2),$=Z[0];function _(){if(e.location){console.log(e.location.pathname);var n=e.location.pathname;"/expenses/moduls/personalexpenses"===n&&(u(!0),F(!1),T("green"),q("#212121"),U("#212121")),"/expenses/references/expensestype"===n&&(u(!0),F(!1),T("#212121"),q("green"),U("#212121")),"/expenses/reports/rpersonalexpenses"===n&&(u(!0),F(!1),T("#212121"),q("#212121"),U("green"))}}Z[1],o.a.useEffect((function(){function e(){return(e=Object(l.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:_();case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var ee=function(){var n=Object(l.a)(r.a.mark((function n(){return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.history.push("/expenses/moduls/personalexpenses");case 2:T("green"),q("#212121"),U("#212121");case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),ne=function(){var n=Object(l.a)(r.a.mark((function n(){return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.history.push("/expenses/references/expensestype");case 2:T("#212121"),q("green"),U("#212121");case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),te=function(){var n=Object(l.a)(r.a.mark((function n(){return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.history.push("/expenses/reports/rpersonalexpenses");case 2:T("#212121"),q("#212121"),U("green");case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),ae=function(){var n=Object(l.a)(r.a.mark((function n(){return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.history.push("/revenues");case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),re=function(){var n=Object(l.a)(r.a.mark((function n(){return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.history.push("/budget");case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return o.a.createElement(m.a,{component:"nav","aria-labelledby":"nested-list-subheader",dense:!0,subheader:o.a.createElement(i.a,{component:"div",id:"nested-list-subheader",color:"inherit"},o.a.createElement(p.a,{alignItems:"flex-start",button:!0,onClick:function(){e.history.push("/profile"),u(!1),F(!1)}},o.a.createElement(N.a,null,o.a.createElement(R.a,{alt:$,src:"/static/images/avatar/2.jpg"})),o.a.createElement(f.a,{primary:$,secondary:o.a.createElement(o.a.Fragment,null,o.a.createElement(D.a,{component:"span",variant:"body2",className:n.inline,style:{color:w.a[500]}},"Online"))}))),className:n.root},o.a.createElement(I.a,{variant:"inset",component:"li",style:{color:C.a[50]}}),o.a.createElement(p.a,{dense:!0,button:!0,onClick:function(){e.history.push("/dashboard"),u(!1),F(!1)}},o.a.createElement(d.a,null,o.a.createElement(E.a,{style:{color:C.a[50]}})),o.a.createElement(f.a,{primary:"Dashboard"})),o.a.createElement(p.a,{dense:!0,button:!0,onClick:function(){u(!c),F(!1)}},o.a.createElement(d.a,null,o.a.createElement(y.a,{style:{color:C.a[50]}})),o.a.createElement(f.a,{primary:"Expenses"}),c?o.a.createElement(O.a,null):o.a.createElement(j.a,null)),o.a.createElement(h.a,{in:c,timeout:"auto",unmountOnExit:!0},o.a.createElement(m.a,{component:"div",disablePadding:!0},o.a.createElement(p.a,{style:{background:M},dense:!0,button:!0,onClick:ee,className:n.nested,autoFocus:!0},o.a.createElement(d.a,null,o.a.createElement(b.a,{style:{color:C.a[50]}})),o.a.createElement(f.a,{primary:"My Expenses"})),o.a.createElement(p.a,{style:{background:W},dense:!0,button:!0,onClick:ne,className:n.nested},o.a.createElement(d.a,null,o.a.createElement(x.a,{style:{color:C.a[50]}})),o.a.createElement(f.a,{primary:"Expenses Type"})),o.a.createElement(p.a,{style:{background:Q},dense:!0,button:!0,onClick:te,className:n.nested},o.a.createElement(d.a,null,o.a.createElement(S.a,{style:{color:C.a[50]}})),o.a.createElement(f.a,{primary:"R. Expenses",style:{fontSize:"8px"}})))),o.a.createElement(p.a,{dense:!0,button:!0,onClick:function(){u(!1),F(!z)}},o.a.createElement(d.a,{style:{color:C.a[50]}},o.a.createElement(g.a,{style:{color:C.a[50]}})),o.a.createElement(f.a,{primary:"Revenues"}),z?o.a.createElement(O.a,null):o.a.createElement(j.a,null)),o.a.createElement(h.a,{in:z,timeout:"auto",unmountOnExit:!0},o.a.createElement(m.a,{component:"div",disablePadding:!0},o.a.createElement(p.a,{style:{background:"#212121"},dense:!0,button:!0,onClick:ae,className:n.nested,autoFocus:!0},o.a.createElement(d.a,null,o.a.createElement(v.a,{style:{color:C.a[50]}})),o.a.createElement(f.a,{primary:"My Revenues"})),o.a.createElement(p.a,{style:{background:"#212121"},dense:!0,button:!0,onClick:re,className:n.nested,autoFocus:!0},o.a.createElement(d.a,null,o.a.createElement(v.a,{style:{color:C.a[50]}})),o.a.createElement(f.a,{primary:"My Budget"})))))}}}]);
//# sourceMappingURL=35.8a7bb0b0.chunk.js.map