(this.webpackJsonppeek=this.webpackJsonppeek||[]).push([[7],{57:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},71:function(e,t,c){"use strict";c.r(t);var s=c(43),n=c.n(s),a=c(44),r=c(11),i=c(1),l=c(0),j=c.n(l),u=c(9),o=(c(57),function(e){return Object(i.jsx)("div",{className:"avatar ".concat(e.className),style:e.style,children:Object(i.jsx)("img",{src:e.image,alt:e.alt,style:{width:e.width,height:e.width}})})}),h=c(45),m=(c(59),function(e){return Object(i.jsx)("li",{className:"user-item",children:Object(i.jsx)(h.a,{className:"user-item__content",children:Object(i.jsxs)(u.b,{to:"/".concat(e.id,"/places"),children:[Object(i.jsx)("div",{className:"user-item__image",children:Object(i.jsx)(o,{image:"https://peek-mern.herokuapp.com/".concat(e.image),alt:e.name})}),Object(i.jsxs)("div",{className:"user-item__info",children:[Object(i.jsx)("h2",{children:e.name}),Object(i.jsxs)("h3",{children:[e.placeCount," ",1===e.placeCount?"Place":"Places"]})]})]})})})}),d=(c(60),function(e){return 0===e.items.length?Object(i.jsx)("div",{className:"center",children:Object(i.jsx)(h.a,{children:Object(i.jsx)("h2",{children:"No Users Found!"})})}):Object(i.jsx)("ul",{className:"users-list",children:e.items.map((function(e){return Object(i.jsx)(m,{id:e.id,image:e.image,name:e.name,placeCount:e.places.length},e.id)}))})}),b=c(48),p=c(17),O=c(49);t.default=function(){var e=Object(O.a)(),t=e.isLoading,c=e.error,s=e.sendRequest,u=e.clearError,o=Object(l.useState)(),h=Object(r.a)(o,2),m=h[0],x=h[1];return Object(l.useEffect)((function(){(function(){var e=Object(a.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s("https://peek-mern.herokuapp.com/api/users");case 3:t=e.sent,x(t.users),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[s]),Object(i.jsxs)(j.a.Fragment,{children:[Object(i.jsx)(b.a,{error:c,onCLear:u}),t&&Object(i.jsx)("div",{className:"center",children:Object(i.jsx)(p.a,{})}),!t&&m&&Object(i.jsx)(d,{items:m})]})}}}]);
//# sourceMappingURL=7.f3c8d00a.chunk.js.map