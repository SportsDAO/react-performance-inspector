(this["webpackJsonpreact-callback"]=this["webpackJsonpreact-callback"]||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(4),r=n(1),u=function(e){return c.a.createElement("button",{onClick:e.onClick,style:{background:"#"+(16777215*Math.random()<<0).toString(16)}},e.children)},i=(n(3),new Set),o=function(){var e=Object(a.useState)(1),t=Object(r.a)(e,2),n=t[0],l=t[1],o=Object(a.useState)(0),s=Object(r.a)(o,2),d=s[0],m=s[1],E=function(){return l((function(e){return e+1}))},b=function(){return m((function(e){return e+n}))};return i.add(E),i.add(b),c.a.createElement("div",null,c.a.createElement("div",{className:"container"},c.a.createElement("h1",null,"Let's see how React re-creates components."),c.a.createElement("p",null,"While clicking a button, it updates status variables C and Delta."),c.a.createElement("p",null,"And it should not re-create two functions."),c.a.createElement("p",null,"But now it re-creates, and functions counter is increasing, so it generates performance-issue"),c.a.createElement("div",null,"Delta: ",n),c.a.createElement("div",null,"C: ",d),c.a.createElement(u,{onClick:E},"Increment Delta"),c.a.createElement(u,{onClick:b},"Increment Counter"),c.a.createElement("h3",null,"Newly created functions: ",i.size)))},s=new Set,d=function(){var e=Object(a.useState)(1),t=Object(r.a)(e,2),n=t[0],l=t[1],i=Object(a.useState)(0),o=Object(r.a)(i,2),d=o[0],m=o[1],E=Object(a.useCallback)((function(){return l((function(e){return e+1}))}),[]),b=Object(a.useCallback)((function(){return m((function(e){return e+n}))}),[n]);return s.add(E),s.add(b),c.a.createElement("div",null,c.a.createElement("div",{className:"container"},c.a.createElement("h3",null,"useCallback() only updates cache if dependency is updated."),c.a.createElement("p",null,"So it does not re-create increment2() unless delta2 is updated."),c.a.createElement("p",null,"Please check repository source code with care."),c.a.createElement("div",null,"Delta2: ",n),c.a.createElement("div",null,"C2: ",d),c.a.createElement(u,{onClick:E},"Increment Delta"),c.a.createElement(u,{onClick:b},"Increment Counter"),c.a.createElement("h3",null,"Newly created functions: ",s.size)))};Object(l.render)(c.a.createElement("div",null,c.a.createElement(o,null),c.a.createElement(d,null)),document.getElementById("root"))},3:function(e,t,n){},5:function(e,t,n){e.exports=n(10)}},[[5,1,2]]]);
//# sourceMappingURL=main.1e5b18b8.chunk.js.map