(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[7],{107:function(e,t,n){"use strict";n.d(t,"b",(function(){return h})),n.d(t,"a",(function(){return v}));var a=n(38),r=n(157),o=n(415),i=n.n(o),c=(n(501),n(416)),l={configuracionUsuario:{modalActiva:!0}};var u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CONFIGURACION":return{configuracionUsuario:t.payload};default:return e}},s=n(50),d={createpersonalexpense:{id:null,gasto:"",cantidad:"",precio_unidad:"",precio_total:"",fecha:"",user_id:"",tipogasto_id:"",tipogasto:{id:"",gasto:""}},personalexpense:{id:null,gasto:"",cantidad:"",precio_unidad:"",precio_total:"",fecha:"",user_id:"",tipogasto_id:"",tipogasto:{id:"",gasto:""}},personalexpenses:[]};var p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PERSONALEXPENSE":return Object(s.a)(Object(s.a)({},e),{},{personalexpense:t.payload});case"SET_PERSONALEXPENSES":return Object(s.a)(Object(s.a)({},e),{},{personalexpenses:t.payload});default:return e}},m={expensestype:[]};var f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_EXPENSES_TYPE":return Object(s.a)(Object(s.a)({},e),{},{expensestype:t.payload});default:return e}},E=Object(a.c)({configuracion:u,personalexpenses:p,expensestype:f}),b={key:"root",storage:i.a,blacklist:["","configuracion","personalexpenses","expensestype"]},g=Object(r.a)(b,E),h=Object(a.d)(g,Object(a.a)(c.a)),v=Object(r.b)(h)},421:function(e,t,n){e.exports=n(504)},494:function(e,t,n){},502:function(e,t,n){},504:function(e,t,n){"use strict";n.r(t);n(422),n(431),n(121),n(122),n(123),n(124),n(125),n(126),n(127),n(128),n(129),n(130),n(131),n(132),n(133),n(134),n(135),n(224),n(226),n(227),n(228),n(229),n(230),n(231),n(233),n(234),n(138),n(236),n(237),n(79),n(238),n(239),n(241),n(242),n(243),n(244),n(245),n(246),n(247),n(248),n(249),n(250),n(251),n(252),n(255),n(256),n(257),n(258),n(139),n(65),n(259),n(261),n(262),n(263),n(264),n(265),n(266),n(267),n(269),n(270),n(271),n(272),n(273),n(274),n(275),n(276),n(140),n(277),n(278),n(279),n(281),n(283),n(284),n(285),n(286),n(287),n(288),n(290),n(291),n(293),n(294),n(295),n(297),n(298),n(299),n(300),n(301),n(302),n(303),n(305),n(306),n(307),n(308),n(309),n(310),n(311),n(312),n(92),n(313),n(314),n(320),n(321),n(322),n(323),n(324),n(325),n(326),n(327),n(328),n(329),n(330),n(331),n(332),n(333),n(147),n(334),n(335),n(93),n(336),n(337),n(338),n(339),n(77),n(340),n(341),n(344),n(345),n(346),n(347),n(348),n(349),n(350),n(351),n(352),n(353),n(354),n(355),n(356),n(357),n(358),n(359),n(360),n(361),n(362),n(363),n(364),n(365),n(366),n(367),n(370),n(371),n(372),n(373),n(374),n(375),n(376),n(377),n(378),n(379),n(380),n(381),n(382),n(383),n(384),n(385),n(386),n(387),n(388),n(389),n(390),n(391),n(392),n(393),n(394),n(395),n(396),n(397),n(398),n(399),n(400),n(401),n(402),n(106),n(404),n(443),n(444),n(445),n(446),n(447),n(448),n(180),n(181),n(182),n(183),n(184),n(185),n(186),n(187),n(188),n(189),n(190),n(191),n(192),n(193),n(194),n(195),n(196),n(450),n(451),n(452),n(453),n(454),n(455),n(456),n(457),n(458),n(459),n(460),n(461),n(462),n(463),n(464),n(465),n(467),n(468),n(469),n(470),n(471),n(472),n(473),n(474),n(475),n(476),n(477),n(197),n(199),n(200),n(201),n(202),n(203),n(204),n(205),n(206),n(207),n(208),n(209),n(210),n(211),n(212),n(213),n(214),n(215),n(478),n(479),n(480),n(482),n(220),n(221),n(222),n(483),n(484),n(485),n(486),n(487),n(488),n(489),n(405),n(120),n(406),n(407),n(408),n(410),n(152);!function(){if("function"===typeof window.CustomEvent)return!1;function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}e.prototype=window.Event.prototype,window.CustomEvent=e}();var a=n(1),r=n.n(a),o=n(85),i=n.n(o),c=(n(494),n(158)),l=n(159),u=n(161),s=n(160),d=n(162),p=n(18),m=n(163),f=n(107),E=n(417),b=(n(502),r.a.lazy((function(){return Promise.all([n.e(5),n.e(14),n.e(35)]).then(n.bind(null,1027))}))),g=r.a.lazy((function(){return Promise.all([n.e(5),n.e(20),n.e(32)]).then(n.bind(null,1008))})),h=r.a.lazy((function(){return Promise.all([n.e(17),n.e(33)]).then(n.bind(null,1010))})),v=r.a.lazy((function(){return n.e(18).then(n.bind(null,1011))})),y=r.a.lazy((function(){return n.e(19).then(n.bind(null,1012))})),O=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement(m.a,{store:f.b},r.a.createElement(E.a,{loading:r.a.createElement("div",null,"Cargando..."),persistor:f.a},r.a.createElement(d.HashRouter,null,r.a.createElement(r.a.Suspense,{fallback:r.a.createElement("div",{className:"animated fadeIn pt-3 text-center"},"Loading...")},r.a.createElement(p.g,null,r.a.createElement(p.d,{exact:!0,path:"/login",name:"Login Page",render:function(e){return r.a.createElement(g,e)}}),r.a.createElement(p.d,{exact:!0,path:"/register",name:"Register Page",render:function(e){return r.a.createElement(h,e)}}),r.a.createElement(p.d,{exact:!0,path:"/404",name:"Page 404",render:function(e){return r.a.createElement(v,e)}}),r.a.createElement(p.d,{exact:!0,path:"/500",name:"Page 500",render:function(e){return r.a.createElement(y,e)}}),r.a.createElement(p.d,{path:"/",name:"Home",render:function(e){return r.a.createElement(b,e)}}))))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[421,8,9]]]);
//# sourceMappingURL=main.6e177ea8.chunk.js.map