"use strict";(self.webpackChunkreactportfolio=self.webpackChunkreactportfolio||[]).push([[987],{7466:function(e,t,n){n.r(t),n.d(t,{default:function(){return i}});var r=n(885),o=(n(498),n(2791)),l=n(323),s=n(6157),a=n(9731),u=n(4851),c=n(184),i=function(e){var t=(0,o.useState)(!0),n=(0,r.Z)(t,2),i=n[0],d=n[1],f=(0,o.useState)(""),h=(0,r.Z)(f,2),p=h[0],m=h[1],x=(0,o.useState)(""),g=(0,r.Z)(x,2),v=g[0],j=g[1],Z=(0,o.useState)(""),y=(0,r.Z)(Z,2),S=y[0],C=y[1],L=(0,o.useState)(""),b=(0,r.Z)(L,2),N=b[0],q=b[1],k=(0,o.useState)(""),F=(0,r.Z)(k,2),G=F[0],T=F[1];(0,o.useEffect)((function(){w()}),[N,G]);var w=function(){document.querySelector(".result-name").innerText=G,document.querySelector(".result-phone").innerText=N},H=function(){var e=/^\d+$/,t=/^\d+$/;if(p.length<2||e.test(p)||""===p){d((function(e){return!0})),T((function(e){return"\u041f\u0435\u0440\u0435\u0432\u0456\u0440\u0442\u0435 \u0434\u0430\u043d\u0456 \u0432\u0438\u0434\u0456\u043b\u0435\u043d\u0456 \u0447\u0435\u0440\u0432\u043e\u043d\u0438\u043c \u043a\u043e\u043b\u044c\u043e\u0440\u043e\u043c\n"})),w();var n=document.querySelector(".form-name");n.style.color="red",n.addEventListener("input",(function(t){console.log(t.target.value.length>2&&!e.test(t.target.value)),t.target.value.length>2&&!e.test(t.target.value)&&(n.style.color="grey",T((function(e){return""})),w())}))}if(v.length<6||!t.test(v)||v.length>12||""===v){d((function(e){return!0})),q((function(e){return"\u0412\u0438 \u0432\u0432\u0435\u043b\u0438 \u043d\u0435\u043a\u043e\u0440\u0435\u043a\u0442\u043d\u0438\u0439 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443 \n"})),w();var r=document.querySelector(".form-phone");r.style.color="red",r.addEventListener("input",(function(e){e.target.value.length>=6&&t.test(e.target.value)&&(r.style.color="grey",q((function(e){return""})),w())}))}else{var o=new XMLHttpRequest,l="&p1="+v+"&p2="+p+"&p3="+v+"&p4="+S;o.open("GET","https://script.google.com/macros/s/AKfycbx4e-pmSXOxl7DddOz7V_zwylQBHQ-D0lIK2qFGjMQLK6tnulHgaSPepr1LslNnlKu5/exec??"+l,!0),o.onreadystatechange=function(){4==o.readyState&&o.status},o.send(null),document.querySelector(".formGoogle").innerText="\u0414\u044f\u043a\u0443\u0454\u043c\u043e \u0437\u0430 \u0434\u043e\u0432\u0456\u0440\u0443, \n \u041c\u0438 \u043d\u0430\u0439\u0431\u043b\u0438\u0436\u0447\u0438\u043c \u0447\u0430\u0441\u043e\u043c \u0437\u0430\u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443\u0454\u043c\u043e \u0434\u043e \u0432\u0430\u0441",setTimeout((function(){I()}),4e3)}},I=function(){d((function(e){return!1}))};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(u.Z,{show:i,onHide:H,children:[" ",(0,c.jsxs)(u.Z.Header,{closeButton:!0,children:[" ",(0,c.jsx)(u.Z.Title,{children:"\u0417\u0430\u043c\u043e\u0432\u0438\u0442\u0438 \u0434\u0437\u0432\u0456\u043d\u043e\u043a"})," "]})," ",(0,c.jsxs)(u.Z.Body,{children:[" ",(0,c.jsxs)(a.Z,{className:"formGoogle",children:[(0,c.jsxs)(a.Z.Group,{className:"mb-3",controlId:"exampleForm.ControlInput1",children:[(0,c.jsx)("div",{className:"result-name result"}),(0,c.jsx)("div",{className:"result-phone result"}),(0,c.jsx)(a.Z.Label,{children:"\u0412\u0430\u0448\u0435 \u0456\u043c'\u044f"})," ",(0,c.jsx)(a.Z.Control,{type:"text",value:p,placeholder:"\u0406\u043c'\u044f",onChange:function(e){var t=e.target.value;m((function(e){return t}))},className:"form-name",autoFocus:!0})]})," ",(0,c.jsxs)(a.Z.Group,{className:"mb-3",controlId:"exampleForm.ControlInput1",children:[(0,c.jsx)(a.Z.Label,{children:"\u0412\u0430\u0448 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443"}),(0,c.jsx)(a.Z.Control,{type:"tel",value:v,placeholder:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d",className:"form-phone",onChange:function(e){var t=e.target.value;j((function(e){return t}))}})]})," ",(0,c.jsx)(l.Z,{children:(0,c.jsxs)("label",{children:["\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044c \u0444\u043e\u0440\u043c\u0430\u0442 \u0441\u0430\u0439\u0442\u0443 \u0412\u0438 \u0440\u043e\u0437\u0433\u043b\u044f\u0434\u0430\u0454\u0442\u0435:",(0,c.jsxs)("select",{onChange:function(e){var t=e.target.value;C((function(e){return t}))},children:[(0,c.jsx)("option",{value:"Corporate",children:"\u041a\u043e\u0440\u043f\u043e\u0440\u0430\u0442\u0438\u0432\u043d\u0438\u0439"}),(0,c.jsx)("option",{value:"CardSite",children:"\u0421\u0430\u0439\u0442 \u0412\u0456\u0437\u0438\u0442\u043a\u0430"}),(0,c.jsx)("option",{value:"Landing",children:"Landing"})]})]})})]})," "]})," ",(0,c.jsxs)(u.Z.Footer,{children:[" ",(0,c.jsxs)(s.Z,{variant:"secondary",onClick:I,children:[" ","Close"," "]})," ",(0,c.jsxs)(s.Z,{variant:"primary",onClick:H,children:[" ","\u0412\u0456\u0434\u043f\u0440\u0430\u0432\u0438\u0442\u0438"," "]})," "]})," "]})," "]})}}}]);
//# sourceMappingURL=987.25f1db4f.chunk.js.map