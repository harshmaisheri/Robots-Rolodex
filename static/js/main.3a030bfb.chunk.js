(this["webpackJsonprobots-rolodex"]=this["webpackJsonprobots-rolodex"]||[]).push([[0],{16:function(e,t,n){e.exports=n(29)},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),o=n.n(c),l=n(4),s=n(3),i=n(13),u=n(14),d=(n(25),n(15)),h=(n(26),function(e){var t=e.name,n=e.email,a=e.id;return r.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{alt:"",src:"https://robohash.org/".concat(a,"?size=200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,n)))}),m=function(e){var t=e.robots;return r.a.createElement("div",null,t.map((function(e,n){return r.a.createElement(h,{key:n,name:t[n].name,email:t[n].email,id:t[n].id})})))},b=function(e){return r.a.createElement("div",{className:"scroll"},e.children)},E=function(e){var t=e.SearchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{"aria-label":"Search Robots",className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},f=(n(27),function(e){e.store;var t=Object(a.useState)([]),n=Object(d.a)(t,2),c=n[0],o=n[1],s=Object(l.c)((function(e){return e.searchRobots.searchField})),i=Object(l.c)((function(e){return e.getRobotsReducer.users})),u=Object(l.b)();Object(a.useEffect)((function(){u((function(e){e({type:"FETCH_PRODUCTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:"FETCH_PRODUCTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"FETCH_PRODUCTS_ERROR",payload:t})}))}))}),[u]),Object(a.useEffect)((function(){var e=i.filter((function(e){return e.name.toLowerCase().includes(s.toLowerCase())}));o(e)}),[s,i]);var h=c;return r.a.createElement("div",{className:"tc"},r.a.createElement(b,null,r.a.createElement("h1",{className:"f2"},"RoboFriends"),r.a.createElement(E,{SearchChange:function(e){u(function(e){return{type:"CHANGE_SEARCH_FIELD",payload:e}}(e.target.value))}})),""===s?r.a.createElement(m,{robots:i}):r.a.createElement(m,{robots:h}))}),p=(n(28),n(5)),g={searchField:""},v={pending:!1,users:[],error:null};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var C=Object(u.createLogger)(),O=Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"CHANGE_SEARCH_FIELD":return Object(p.a)({},e,{searchField:a});default:return e}},getRobotsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_PRODUCTS_PENDING":return Object(p.a)({},e,{pending:!0});case"FETCH_PRODUCTS_SUCCESS":return Object(p.a)({},e,{pending:!1,users:t.payload});case"FETCH_PRODUCTS_ERROR":return Object(p.a)({},e,{pending:!1,error:t.error});default:return e}}}),R=Object(s.d)(O,Object(s.a)(i.a,C));o.a.render(r.a.createElement(l.a,{store:R},r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[16,1,2]]]);
//# sourceMappingURL=main.3a030bfb.chunk.js.map