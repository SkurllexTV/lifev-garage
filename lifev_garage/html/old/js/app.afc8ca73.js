(function(e){function t(t){for(var i,c,o=t[0],r=t[1],l=t[2],p=0,u=[];p<o.length;p++)c=o[p],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&u.push(a[c][0]),a[c]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);h&&h(t);while(u.length)u.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],i=!0,o=1;o<n.length;o++){var r=n[o];0!==a[r]&&(i=!1)}i&&(s.splice(t--,1),e=c(c.s=n[0]))}return e}var i={},a={app:0},s=[];function c(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=i,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)c.d(n,i,function(t){return e[t]}.bind(null,i));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],r=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var h=r;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0775":function(e,t,n){"use strict";n("90b4")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("7a23"),a=(n("ac1f"),n("841c"),{key:0}),s={class:"main__container"},c={class:"main__header"},o=["src"],r=Object(i["e"])("h1",null,"Garage",-1),l={class:"flex__header"},h={class:"main__header-right"},p={class:"main__header-right"},u=Object(i["e"])("i",{class:"fas fa-garage"},null,-1),f=Object(i["e"])("p",null,"Einparken",-1),d=[u,f],b=Object(i["e"])("i",{class:"fad fa-garage-open"},null,-1),v=Object(i["e"])("p",null,"Ausparken",-1),g=[b,v],O={class:"main__content"},m={class:"overflow__container"},j={class:"item__grid",id:"item__grid"},_={key:0},k=["onClick"],y=Object(i["e"])("i",{class:"far fa-edit"},null,-1),w=[y],C={class:"car__header"},x=Object(i["f"])("Name: "),S={class:"button__container"},U=["onClick"],J=["onClick"],N={key:1},P={class:"vehiclerename__window"},T={class:"vehiclerename__header"},E=["onClick"],M=Object(i["e"])("h1",null,"Fahrzeug umbennen",-1),B=["id"],A=["onClick"],L=Object(i["e"])("p",null,"Umbennen",-1),z=[L];function F(e,t,u,f,b,v){return b.visible?(Object(i["i"])(),Object(i["d"])("div",a,[Object(i["e"])("div",s,[Object(i["e"])("div",c,[Object(i["e"])("img",{src:n("cf05"),alt:""},null,8,o),r,Object(i["e"])("div",l,[Object(i["e"])("div",h,[Object(i["e"])("div",{class:Object(i["g"])(b.search?"main__search active":"main__search"),id:"main__search-input"},[Object(i["e"])("i",{onClick:t[0]||(t[0]=function(e){return v.changesearchstate()}),class:"fas fa-search"}),Object(i["m"])(Object(i["e"])("input",{type:"text",placeholder:"Suche","onUpdate:modelValue":t[1]||(t[1]=function(e){return b.searching=e}),style:Object(i["h"])({display:b.search?"block":"none"}),id:"input"},null,4),[[i["l"],b.searching]])],2),Object(i["e"])("div",{class:"main__fav",onClick:t[2]||(t[2]=function(e){return v.changefavstate()})},[Object(i["e"])("i",{class:"fas fa-bookmark",style:Object(i["h"])({color:b.showonlyfav?"var(--clr-purple)":"var(--clr-text)"})},null,4)])]),Object(i["e"])("div",p,[Object(i["e"])("div",{class:Object(i["g"])("einparken"==b.state?"main__header-parkin active__park":"main__header-parkin"),onClick:t[3]||(t[3]=function(e){return v.changestate("einparken")})},d,2),Object(i["e"])("div",{class:Object(i["g"])("ausparken"==b.state?"main__header-parkin active__park":"main__header-parkin"),onClick:t[4]||(t[4]=function(e){return v.changestate("ausparken")})},g,2)])])]),Object(i["e"])("div",O,[Object(i["e"])("div",m,[Object(i["e"])("div",j,[(Object(i["i"])(!0),Object(i["d"])(i["a"],null,Object(i["j"])(b.vehiclelist,(function(e,t){return Object(i["i"])(),Object(i["d"])("div",{class:"grid__item",key:t,style:Object(i["h"])({display:v.getdata(t)})},[0==e.showrenamewindow?(Object(i["i"])(),Object(i["d"])("div",_,[Object(i["e"])("div",{class:"rename__button",onClick:function(t){return e.showrenamewindow=!0}},w,8,k),Object(i["e"])("h1",C,Object(i["k"])(e.model),1),Object(i["e"])("h2",null,[x,Object(i["e"])("span",null,Object(i["k"])(e.nickname),1)]),Object(i["e"])("div",S,[Object(i["e"])("button",{onClick:function(e){return v.stateaction(t)}},[Object(i["e"])("p",null,Object(i["k"])(b.state),1)],8,U),Object(i["e"])("button",{onClick:function(e){return v.favourite(t)}},[Object(i["e"])("i",{class:"fas fa-bookmark",style:Object(i["h"])({color:e.isfav?"var(--clr-purple)":"var(--clr-text)"})},null,4)],8,J)])])):(Object(i["i"])(),Object(i["d"])("div",N,[Object(i["e"])("div",P,[Object(i["e"])("div",T,[Object(i["e"])("i",{class:"fas fa-arrow-left",onClick:function(t){return e.showrenamewindow=!1}},null,8,E),M]),Object(i["e"])("input",{maxlength:"10",class:"vehiclerename__input",id:e.plate,placeholder:"Name"},null,8,B),Object(i["e"])("button",{style:{"margin-top":"1.3vh"},onClick:function(n){return v.rename(t,e.plate)}},z,8,A)])]))],4)})),128))])])])])])):Object(i["c"])("",!0)}n("d3b7"),n("e9c4");var G={name:"App",data:function(){return{visible:!1,search:!1,searching:"",state:"einparken",showonlyfav:!1,vehiclelist:[],cooldown:!1,gotresponse:!0}},methods:{changestate:function(e){1==this.gotresponse&&this.state!=e&&(this.state=e,this.vehiclelist=[],this.gotresponse=!1,"einparken"==this.state?fetch("https://lifev_garage/enable-parking",{method:"post"}):"ausparken"==this.state&&fetch("https://lifev_garage/enable-parkout",{method:"post"}))},close:function(){this.visible=!1,this.vehiclelist=[],this.search=!1,this.searching="",this.state="einparken",this.gotresponse=!0,fetch("https://lifev_garage/escape",{method:"post"})},changefavstate:function(){this.showonlyfav?this.showonlyfav=!1:this.showonlyfav=!0},favourite:function(e){var t=this;this.cooldown?fetch("https://lifev_garage/notify",{method:"post",body:JSON.stringify({text:"Bitte warten sie einen moment..."})}):this.vehiclelist[e].isfav?(this.vehiclelist[e].isfav=!1,fetch("https://lifev_garage/setvehfav",{method:"post",body:JSON.stringify({plate:this.vehiclelist[e].plate,state:!1})}),this.cooldown=!0,setTimeout((function(){t.cooldown=!1}),1e4)):(this.vehiclelist[e].isfav=!0,fetch("https://lifev_garage/setvehfav",{method:"post",body:JSON.stringify({plate:this.vehiclelist[e].plate,state:!0})}),this.cooldown=!0,setTimeout((function(){t.cooldown=!1}),1e4))},changesearchstate:function(){this.search?(this.search=!1,this.searching=""):this.search=!0},getdata:function(e){var t=this.vehiclelist[e].model.toUpperCase(),n=this.vehiclelist[e].nickname.toUpperCase();return 1==this.showonlyfav?""==this.searching?this.vehiclelist[e].isfav?"block":"none":(t.toUpperCase().indexOf(this.searching.toUpperCase())>-1||n.toUpperCase().indexOf(this.searching.toUpperCase())>-1)&&this.vehiclelist[e].isfav?"block":"none":""==this.searching||t.toUpperCase().indexOf(this.searching.toUpperCase())>-1||n.toUpperCase().indexOf(this.searching.toUpperCase())>-1?"block":"none"},rename:function(e,t){var n=this,i=document.getElementById(t).value;this.cooldown?fetch("https://lifev_garage/notify",{method:"post",body:JSON.stringify({text:"Bitte warten sie einen moment..."})}):""!=i&&(fetch("https://lifev_garage/rename",{method:"post",body:JSON.stringify({plate:t,nickname:i})}),this.vehiclelist[e].nickname=i,this.vehiclelist[e].showrenamewindow=!1,this.cooldown=!0,setTimeout((function(){n.cooldown=!1}),1e4))},stateaction:function(e){"einparken"==this.state?fetch("https://lifev_garage/park-in",{method:"post",body:JSON.stringify({plate:this.vehiclelist[e].plate})}):"ausparken"==this.state&&fetch("https://lifev_garage/park-out",{method:"post",body:JSON.stringify({plate:this.vehiclelist[e].plate})}),this.close()}},mounted:function(){var e=this;window.addEventListener("message",(function(t){var n=t.data;"show"==n.action?n.state?(e.visible=!0,fetch("https://lifev_garage/enable-parking",{method:"post"})):e.close():"setcars"==n.action&&(e.vehiclelist=JSON.parse(n.data),e.gotresponse=!0,console.log("yes"))}))},created:function(){var e=this;document.addEventListener("keyup",(function(t){e.visible&&27===t.keyCode&&e.close()}))}},I=(n("0775"),n("6b0d")),V=n.n(I);const q=V()(G,[["render",F]]);var D=q;Object(i["b"])(D).mount("#app")},"90b4":function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.abbecdf0.png"}});
//# sourceMappingURL=app.afc8ca73.js.map