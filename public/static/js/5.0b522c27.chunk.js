(this.webpackJsonppeek=this.webpackJsonppeek||[]).push([[5],{50:function(e,t,a){"use strict";a.d(t,"c",(function(){return u})),a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return o})),a.d(t,"d",(function(){return d}));var n=a(18);var i="REQUIRE",r="MINLENGTH",s="MAXLENGTH",c="EMAIL",u=function(){return{type:i}},l=function(e){return{type:r,val:e}},o=function(){return{type:c}},d=function(e,t){var a,u=!0,l=function(e,t){var a;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(a=Object(n.a)(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,c=!0,u=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return c=e.done,e},e:function(e){u=!0,s=e},f:function(){try{c||null==a.return||a.return()}finally{if(u)throw s}}}}(t);try{for(l.s();!(a=l.n()).done;){var o=a.value;o.type===i&&(u=u&&e.trim().length>0),o.type===r&&(u=u&&e.trim().length>=o.val),o.type===s&&(u=u&&e.trim().length<=o.val),"MIN"===o.type&&(u=u&&+e>=o.val),"MAX"===o.type&&(u=u&&+e<=o.val),o.type===c&&(u=u&&/^\S+@\S+\.\S+$/.test(e))}}catch(d){l.e(d)}finally{l.f()}return u}},52:function(e,t,a){"use strict";var n=a(11),i=a(46),r=a(1),s=a(0),c=a(50),u=(a(53),function(e,t){switch(t.type){case"CHANGE":return Object(i.a)(Object(i.a)({},e),{},{value:t.val,isValid:Object(c.d)(t.val,t.validators)});case"TOUCH":return Object(i.a)(Object(i.a)({},e),{},{isTouched:!0});default:return e}});t.a=function(e){var t=Object(s.useReducer)(u,{value:e.initialValue||"",isTouched:!1,isValid:e.initialValid||!1}),a=Object(n.a)(t,2),i=a[0],c=a[1],l=e.id,o=e.onInput,d=i.value,p=i.isValid;Object(s.useEffect)((function(){o(l,d,p)}),[l,d,p,o]);var j=function(t){c({type:"CHANGE",val:t.target.value,validators:e.validators})},b=function(){c({type:"TOUCH"})},f="input"===e.element?Object(r.jsx)("input",{id:e.id,type:e.type,placeholder:e.placeholder,onChange:j,onBlur:b,value:i.value}):Object(r.jsx)("textarea",{id:e.id,rows:e.rows||3,onChange:j,onBlur:b,value:i.value});return Object(r.jsxs)("div",{className:"form-control ".concat(!i.isValid&&i.isTouched&&"form-control--invalid"),children:[Object(r.jsx)("label",{htmlFor:e.id,children:e.label}),f,!i.isValid&&i.isTouched&&Object(r.jsx)("p",{children:e.errorText})]})}},53:function(e,t,a){},54:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(11),i=a(51),r=a(46),s=a(0),c=function(e,t){switch(t.type){case"INPUT_CHANGE":var a=!0;for(var n in e.inputs)e.inputs[n]&&(a=n===t.inputId?a&&t.isValid:a&&e.inputs[n].isValid);return Object(r.a)(Object(r.a)({},e),{},{inputs:Object(r.a)(Object(r.a)({},e.inputs),{},Object(i.a)({},t.inputId,{value:t.value,isValid:t.isValid})),isValid:a});case"SET_DATA":return{inputs:t.inputs,isValid:t.formIsValid};default:return e}},u=function(e,t){var a=Object(s.useReducer)(c,{inputs:e,isValid:t}),i=Object(n.a)(a,2),r=i[0],u=i[1];return[r,Object(s.useCallback)((function(e,t,a){u({type:"INPUT_CHANGE",value:t,isValid:a,inputId:e})}),[]),Object(s.useCallback)((function(e,t){u({type:"SET_DATA",inputs:e,formIsValid:t})}),[])]}},67:function(e,t,a){},68:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(43),i=a.n(n),r=a(44),s=a(46),c=a(11),u=a(1),l=a(0),o=a.n(l),d=a(45),p=a(52),j=a(47),b=a(48),f=a(17),v=(a(67),function(e){var t=Object(l.useState)(),a=Object(c.a)(t,2),n=a[0],i=a[1],r=Object(l.useState)(),s=Object(c.a)(r,2),o=s[0],d=s[1],p=Object(l.useState)(!1),b=Object(c.a)(p,2),f=b[0],v=b[1],O=Object(l.useRef)();Object(l.useEffect)((function(){if(n){var e=new FileReader;e.onload=function(){d(e.result)},e.readAsDataURL(n)}}),[n]);return Object(u.jsxs)("div",{className:"form-control",children:[Object(u.jsx)("input",{id:e.id,ref:O,style:{display:"none"},type:"file",accept:".jpg,.png,.jpeg",onChange:function(t){var a,n=f;t.target.files&&1===t.target.files.length?(a=t.target.files[0],i(a),v(!0),n=!0):(v(!1),n=!1),e.onInput(e.id,a,n)}}),Object(u.jsxs)("div",{className:"image-upload ".concat(e.center&&"center"),children:[Object(u.jsxs)("div",{className:"image-upload__preview",children:[o&&Object(u.jsx)("img",{src:o,alt:"Preview"}),!o&&Object(u.jsx)("p",{children:"Please pick an image."})]}),Object(u.jsx)(j.a,{type:"button",onClick:function(){O.current.click()},children:"PICK IMAGE"})]}),!f&&Object(u.jsx)("p",{children:e.errorText})]})}),O=a(50),m=a(54),h=a(49),x=a(12);a(68),t.default=function(){var e=Object(l.useContext)(x.a),t=Object(l.useState)(!0),a=Object(c.a)(t,2),n=a[0],y=a[1],g=Object(h.a)(),I=g.isLoading,w=g.error,T=g.sendRequest,V=g.clearError,k=Object(m.a)({email:{value:"",isValid:!1},password:{value:"",isValid:!1}},!1),N=Object(c.a)(k,3),S=N[0],C=N[1],E=N[2],A=function(){var t=Object(r.a)(i.a.mark((function t(a){var r,s,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),!n){t.next=13;break}return t.prev=2,t.next=5,T("https://peek-mern.herokuapp.com/api/users/login","POST",JSON.stringify({email:S.inputs.email.value,password:S.inputs.password.value}),{"Content-Type":"application/json"});case 5:r=t.sent,e.login(r.userId,r.token),t.next=11;break;case 9:t.prev=9,t.t0=t.catch(2);case 11:t.next=27;break;case 13:return t.prev=13,(s=new FormData).append("email",S.inputs.email.value),s.append("name",S.inputs.name.value),s.append("password",S.inputs.password.value),s.append("image",S.inputs.image.value),t.next=21,T("https://peek-mern.herokuapp.com/api/users/signup","POST",s);case 21:c=t.sent,e.login(c.userId,c.token),t.next=27;break;case 25:t.prev=25,t.t1=t.catch(13);case 27:case"end":return t.stop()}}),t,null,[[2,9],[13,25]])})));return function(e){return t.apply(this,arguments)}}();return Object(u.jsxs)(o.a.Fragment,{children:[Object(u.jsx)(b.a,{error:w,onClear:V}),Object(u.jsxs)(d.a,{className:"authentication",children:[I&&Object(u.jsx)(f.a,{asOverlay:!0}),Object(u.jsx)("h2",{children:"Login Required"}),Object(u.jsx)("hr",{}),Object(u.jsxs)("form",{onSubmit:A,children:[!n&&Object(u.jsx)(p.a,{element:"input",id:"name",type:"text",label:"Your Name",validators:[Object(O.c)()],errorText:"Please enter a name.",onInput:C}),!n&&Object(u.jsx)(v,{center:!0,id:"image",onInput:C,errorText:"Please provide an image."}),Object(u.jsx)(p.a,{element:"input",id:"email",type:"email",label:"E-Mail",validators:[Object(O.a)()],errorText:"Please enter a valid email address.",onInput:C}),Object(u.jsx)(p.a,{element:"input",id:"password",type:"password",label:"Password",validators:[Object(O.b)(6)],errorText:"Please enter a valid password, at least 6 characters.",onInput:C}),Object(u.jsx)(j.a,{type:"submit",disabled:!S.isValid,children:n?"LOGIN":"SIGNUP"})]}),Object(u.jsxs)(j.a,{inverse:!0,onClick:function(){n?E(Object(s.a)(Object(s.a)({},S.inputs),{},{name:{value:"",isValid:!1},image:{value:null,isValid:!1}}),!1):E(Object(s.a)(Object(s.a)({},S.inputs),{},{name:void 0,image:void 0}),S.inputs.email.isValid&&S.inputs.password.isValid),y((function(e){return!e}))},children:["SWITCH TO ",n?"SIGNUP":"LOGIN"]})]})]})}}}]);
//# sourceMappingURL=5.0b522c27.chunk.js.map