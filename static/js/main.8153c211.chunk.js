(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[5],{183:function(e,t,n){"use strict";var r=n(69),a=n(236),o=n(359),c=n.n(o),i=(n(903),n(360)),u={configuracionUsuario:{modalActiva:!0}};var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CONFIGURACION":return{configuracionUsuario:t.payload};default:return e}},s=n(182);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(n,!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f={createpersonalexpense:{id:null,gasto:"",cantidad:"",precio_unidad:"",precio_total:"",fecha:"",user_id:"",tipogasto_id:"",tipogasto:{id:"",gasto:""}},personalexpense:{id:null,gasto:"",cantidad:"",precio_unidad:"",precio_total:"",fecha:"",user_id:"",tipogasto_id:"",tipogasto:{id:"",gasto:""}},personalexpenses:[]};var b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PERSONALEXPENSE":return d({},e,{personalexpense:t.payload});case"SET_PERSONALEXPENSES":return d({},e,{personalexpenses:t.payload});default:return e}};function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var g={expensestype:[]};var y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_EXPENSES_TYPE":return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(n,!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{expensestype:t.payload});default:return e}},O=Object(r.c)({configuracion:l,personalexpenses:b,expensestype:y});n.d(t,"b",(function(){return v})),n.d(t,"a",(function(){return j}));var E={key:"root",storage:c.a,blacklist:[""]},h=Object(a.a)(E,O),v=Object(r.d)(h,Object(r.a)(i.a)),j=Object(a.b)(v)},365:function(e,t,n){e.exports=n(906)},896:function(e,t,n){},904:function(e,t,n){},906:function(e,t,n){"use strict";n.r(t);n(366),n(415),n(603),n(605),n(606),n(607),n(608),n(609),n(610),n(611),n(612),n(613),n(614),n(615),n(616),n(617),n(618),n(619),n(620),n(621),n(622),n(623),n(624),n(625),n(626),n(627),n(628),n(629),n(630),n(166),n(631),n(632),n(633),n(634),n(635),n(636),n(637),n(638),n(639),n(640),n(641),n(642),n(643),n(644),n(645),n(646),n(647),n(648),n(649),n(651),n(652),n(654),n(655),n(656),n(657),n(225),n(658),n(659),n(660),n(661),n(662),n(663),n(664),n(665),n(666),n(667),n(668),n(669),n(670),n(671),n(672),n(673),n(674),n(675),n(676),n(677),n(678),n(679),n(680),n(681),n(682),n(683),n(684),n(685),n(686),n(687),n(688),n(689),n(690),n(691),n(692),n(693),n(694),n(695),n(696),n(697),n(698),n(699),n(700),n(701),n(702),n(703),n(704),n(705),n(706),n(707),n(708),n(709),n(710),n(712),n(713),n(714),n(715),n(716),n(717),n(718),n(720),n(721),n(722),n(723),n(724),n(725),n(726),n(727),n(728),n(729),n(730),n(731),n(732),n(733),n(734),n(344),n(735),n(736),n(737),n(738),n(345),n(739),n(740),n(741),n(742),n(743),n(744),n(745),n(746),n(747),n(748),n(749),n(750),n(751),n(752),n(753),n(754),n(755),n(756),n(757),n(758),n(759),n(760),n(761),n(762),n(763),n(764),n(766),n(767),n(768),n(769),n(770),n(771),n(772),n(773),n(774),n(775),n(776),n(777),n(778),n(779),n(780),n(781),n(782),n(783),n(784),n(785),n(786),n(787),n(788),n(789),n(790),n(791),n(792),n(793),n(794),n(795),n(796),n(797),n(798),n(233),n(799),n(800),n(801),n(802),n(803),n(804),n(805),n(807),n(808),n(809),n(810),n(811),n(812),n(813),n(814),n(816),n(817),n(818),n(819),n(820),n(821),n(822),n(823),n(824),n(825),n(826),n(827),n(828),n(829),n(830),n(831),n(832),n(833),n(834),n(835),n(836),n(837),n(838),n(839),n(840),n(842),n(843),n(844),n(845),n(846),n(847),n(848),n(849),n(850),n(851),n(852),n(853),n(854),n(855),n(856),n(857),n(858),n(859),n(860),n(861),n(862),n(863),n(864),n(865),n(866),n(867),n(868),n(869),n(870),n(871),n(872),n(873),n(875),n(876),n(877),n(878),n(879),n(880),n(881),n(882),n(883),n(884),n(885),n(886),n(887),n(888),n(889),n(890),n(892),n(355);!function(){if("function"===typeof window.CustomEvent)return!1;function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}e.prototype=window.Event.prototype,window.CustomEvent=e}();var r=n(2),a=n.n(r),o=n(144),c=n.n(o),i=(n(896),n(237)),u=n(238),l=n(240),s=n(239),p=n(241),d=n(243),f=n(89),b=n(244),m=n(183),g=n(361),y=(n(904),a.a.lazy((function(){return Promise.all([n.e(8),n.e(34)]).then(n.bind(null,1115))}))),O=a.a.lazy((function(){return Promise.all([n.e(0),n.e(13),n.e(30)]).then(n.bind(null,1092))})),E=a.a.lazy((function(){return Promise.all([n.e(12),n.e(31)]).then(n.bind(null,1095))})),h=a.a.lazy((function(){return n.e(16).then(n.bind(null,1096))})),v=a.a.lazy((function(){return n.e(17).then(n.bind(null,1097))})),j=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return a.a.createElement(b.a,{store:m.b},a.a.createElement(g.a,{loading:a.a.createElement("div",null,"Cargando..."),persistor:m.a},a.a.createElement(d.HashRouter,null,a.a.createElement(a.a.Suspense,{fallback:a.a.createElement("div",{className:"animated fadeIn pt-3 text-center"},"Loading...")},a.a.createElement(f.g,null,a.a.createElement(f.d,{exact:!0,path:"/login",name:"Login Page",render:function(e){return a.a.createElement(O,e)}}),a.a.createElement(f.d,{exact:!0,path:"/register",name:"Register Page",render:function(e){return a.a.createElement(E,e)}}),a.a.createElement(f.d,{exact:!0,path:"/404",name:"Page 404",render:function(e){return a.a.createElement(h,e)}}),a.a.createElement(f.d,{exact:!0,path:"/500",name:"Page 500",render:function(e){return a.a.createElement(v,e)}}),a.a.createElement(f.d,{path:"/",name:"Home",render:function(e){return a.a.createElement(y,e)}}))))))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[365,6,7]]]);
//# sourceMappingURL=main.8153c211.chunk.js.map