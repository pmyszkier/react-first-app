(this.webpackJsonpmyfirstreact=this.webpackJsonpmyfirstreact||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(6),i=n.n(l),o=(n(14),n(1)),c=n(2),s=n(4),u=n(3),m=n(5),d=n(8),h=n.n(d),f=(n(15),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:h.a,className:"App-logo",alt:"logo"}),r.a.createElement("p",null,"Edit ",r.a.createElement("code",null,"src/App.js")," and save to reload."),r.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")))}}]),t}(r.a.Component)),b=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("h2",null,"I am a ",this.props.brand.model,"!")}}]),t}(r.a.Component),p=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Who lives in my garage?"),r.a.createElement(b,{brand:{name:"Ford",model:"Mustang"}}))}}]),t}(r.a.Component),k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function E(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var v=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("button",{onClick:this.onClickHandler},"Kliknij!")}},{key:"onClickHandler",value:function(){alert("Klikni\u0119to!")}}]),t}(r.a.Component),g=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={counter:0,totalClicks:0,totalDoubleClicks:0},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"CLICK COUNTER:",r.a.createElement("br",null),r.a.createElement("button",{onClick:this.decrement.bind(this),onDoubleClick:this.doubleClick.bind(this)},"-"),r.a.createElement("output",null,this.state.counter),r.a.createElement("button",{onClick:this.increment.bind(this),onDoubleClick:this.doubleClick.bind(this)},"+"),r.a.createElement("br",null),r.a.createElement("output",null,"Total clicks: ",this.state.totalClicks),r.a.createElement("br",null),r.a.createElement("output",null,"Total double clicks: ",this.state.totalDoubleClicks),r.a.createElement("br",null),r.a.createElement("br",null))}},{key:"increment",value:function(){this.setState((function(e){return{counter:e.counter+1,totalClicks:e.totalClicks+1}}))}},{key:"decrement",value:function(){this.setState((function(e){return{counter:e.counter-1,totalClicks:e.totalClicks+1}}))}},{key:"doubleClick",value:function(){this.setState((function(e){return{totalDoubleClicks:e.totalDoubleClicks+1}}))}}]),t}(r.a.Component),j=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={firstName:"",lastName:""},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"INPUT CONTENT:",r.a.createElement("form",null,"Imi\u0119: ",r.a.createElement("input",{class:"misiek",onChange:this.inputFirstName.bind(this),value:this.state.firstName}),r.a.createElement("br",null),r.a.createElement("output",null,"Wpisano imi\u0119: ",this.state.firstName),r.a.createElement("br",null),"Nazwisko: ",r.a.createElement("input",{onChange:this.inputLastName.bind(this),value:this.state.lastName}),r.a.createElement("br",null),r.a.createElement("output",null,"Wpisano nazwisko: ",this.state.lastName),r.a.createElement("br",null),r.a.createElement("output",null,"Wpisano imi\u0119 i nazwisko: ",this.state.firstName," ",this.state.lastName),r.a.createElement("br",null),r.a.createElement("br",null)))}},{key:"inputFirstName",value:function(e){this.setState({firstName:e.target.value}),console.log(e),console.log(e.target),console.log(e.target.value)}},{key:"inputLastName",value:function(e){this.setState({lastName:e.target.value})}}]),t}(r.a.Component),O=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={date:new Date},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.timerId=window.setInterval(this.updateDate.bind(this),1e3)}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timerId)}},{key:"misiek",value:function(){window.clearInterval(this.timerId),alert("Unmount1")}},{key:"clickAlert",value:function(){}},{key:"updateDate",value:function(){this.setState({date:new Date})}},{key:"render",value:function(){var e=this.state.date.toString();return r.a.createElement("time",null,e)}}]),t}(r.a.Component),y=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={dateVisible:!0},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"onButtonClick",value:function(){var e=this;this.clickButtonTimeout=setTimeout((function(){e.setState((function(e){return{dateVisible:!e.dateVisible}}))}),5e3)}},{key:"onButtonClickSecond",value:function(){!0===this.state.dateVisible?alert("jest true"):alert("nie jest true")}},{key:"render",value:function(){return r.a.createElement("div",null,"SHOW DATE AND DATE COMPONENT:",r.a.createElement("br",null),r.a.createElement("button",{onClick:this.onButtonClick.bind(this)},"Kliknij"),r.a.createElement("span",{id:"date-field"},this.state.dateVisible&&r.a.createElement(O,null)),r.a.createElement("br",null),r.a.createElement("br",null))}}]),t}(r.a.Component),C=["Michal","Kasia","Jacek","Marta","Tomek","Ania","Asia"],w=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={filteredUsers:C},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"filterUsers",value:function(e){var t=e.currentTarget.value,n=this.getFilteredUsersForText(t);this.setState({filteredUsers:n})}},{key:"getFilteredUsersForText",value:function(e){return C.filter((function(t){return t.toLowerCase().includes(e.toLowerCase())}))}},{key:"resetFilteredList",value:function(){return this.filterUsers=""}},{key:"render",value:function(){return r.a.createElement("div",null,"FILTERED LIST:",r.a.createElement("br",null),r.a.createElement("input",{onInput:this.filterUsers.bind(this)}),r.a.createElement("button",{onClick:this.state.resetFilteredList},"Resetuj"),r.a.createElement(N,{users:this.state.filteredUsers}))}}]),t}(r.a.Component),N=function(e){var t=e.users;return t.length>0?r.a.createElement("ul",null,t.map((function(e){return r.a.createElement("li",{key:e},e)}))):r.a.createElement("p",null,"No results!")},I=w;i.a.render(r.a.createElement(f,null),document.getElementById("root")),i.a.render(r.a.createElement(p,null),document.getElementById("root1")),i.a.render(r.a.createElement(p,null),document.getElementById("root2")),i.a.render(r.a.createElement(v,null),document.getElementById("root3")),i.a.render(r.a.createElement(g,null),document.getElementById("root4")),i.a.render(r.a.createElement(j,null),document.getElementById("root5")),i.a.render(r.a.createElement(y,null),document.getElementById("root6")),i.a.render(r.a.createElement(I,null),document.getElementById("root7")),function(e){if("serviceWorker"in navigator){if(new URL("/pmyszkier/react-first-app.git",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/pmyszkier/react-first-app.git","/service-worker.js");k?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):E(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):E(t,e)}))}}()}],[[9,1,2]]]);
//# sourceMappingURL=main.953a330b.chunk.js.map