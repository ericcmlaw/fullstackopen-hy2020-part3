(this.webpackJsonppart1=this.webpackJsonppart1||[]).push([[0],{15:function(e,n,t){e.exports=t(37)},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(14),c=t.n(o),u=(t(5),t(2)),l=t(3),i=t.n(l),m="/api/persons",s=function(){return i.a.get(m).then((function(e){return e.data}))},d=function(e){return i.a.post(m,e).then((function(e){return e.data}))},f=function(e,n){return i.a.delete("".concat(m,"/").concat(e),n).then((function(e){return e.data}))},h=function(e){var n=e.message;return null===n?null:r.a.createElement("div",{className:"success"},n)},b=function(e){var n=e.input,t=e.onChange;return r.a.createElement("div",null,"filter shown with ",r.a.createElement("input",{value:n,onChange:t}))},v=function(e){var n=e.person,t=e.deleteAction;return r.a.createElement("div",{key:n.name},n.name," ",n.number," ",r.a.createElement("button",{onClick:t},"delete"))},w=function(e){var n=e.newFilter,t=e.persons,a=e.deleteAction;return(""==n?t:t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))).map((function(e,n){return r.a.createElement(v,{key:n,person:e,deleteAction:function(){return a(e)}})}))},E=function(e){var n=e.newName,t=e.setNewName,a=e.newNumber,o=e.setNewNumber,c=e.addPerson;return r.a.createElement("form",{onSubmit:c},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:n,onChange:function(e){t(e.target.value)}})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:a,onChange:function(e){o(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},p=function(){var e=Object(a.useState)([]),n=Object(u.a)(e,2),t=n[0],o=n[1],c=Object(a.useState)(""),l=Object(u.a)(c,2),i=l[0],m=l[1],v=Object(a.useState)(""),p=Object(u.a)(v,2),g=p[0],N=p[1],j=Object(a.useState)(""),O=Object(u.a)(j,2),k=O[0],C=O[1],S=Object(a.useState)(null),y=Object(u.a)(S,2),A=y[0],P=y[1];Object(a.useEffect)((function(){s().then((function(e){o(e)}))}),[]);return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(h,{message:A}),r.a.createElement(b,{input:k,onChange:function(e){console.log(e.target.value),C(e.target.value)}}),r.a.createElement("h2",null,"Add a new"),r.a.createElement(E,{newName:i,setNewName:m,newNumber:g,setNewNumber:N,addPerson:function(e){e.preventDefault();var n=t.findIndex((function(e){return e.name===i}));(console.log(t),-1===n)?d({name:i,number:g}).then((function(e){P("Added ".concat(e.name)),setTimeout((function(){P(null)}),5e3),o(t.concat(e))})):alert("".concat(i," is already added to phonebook"))}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(w,{newFilter:k,persons:t,deleteAction:function(e){console.log(e),window.confirm("Delete ".concat(e.name," ?"))&&f(e.id,e).then((function(){o(t.filter((function(n){return n.id!==e.id})))}))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,n,t){}},[[15,1,2]]]);
//# sourceMappingURL=main.ca976f6d.chunk.js.map