(this.webpackJsonploopstudio=this.webpackJsonploopstudio||[]).push([[0],{17:function(e,n,t){},18:function(e,n,t){},22:function(e,n,t){"use strict";t.r(n);var i,a,r=t(1),o=t.n(r),c=t(8),s=t.n(c),d=(t(17),t(2)),l=(t(18),t(3)),m=t(12),p=t(0);var b,j=l.a.nav(i||(i=Object(d.a)(["\n  display:flex;\n  flex-direction:column;\n  @media(min-width:700px){\n    flex-direction:row;\n    gap:1em;\n  }\n\n"]))),g=l.a.div(a||(a=Object(d.a)(["\n  position:relative;\n  width:max-content;\n  cursor:pointer;\n  :hover{\n    :after{\n      position:absolute;\n      bottom:-5px;\n      right:0;\n      content:'';\n      width:100%;\n      border:solid 1px;\n\n    }\n  }\n  \n\n"]))),h=function(e){var n=e.active;return Object(p.jsxs)(j,{className:n&&"active",children:[Object(p.jsx)(g,{children:"About"}),Object(p.jsx)(g,{children:"Careers"}),Object(p.jsx)(g,{children:"Events"}),Object(p.jsx)(g,{children:"Products"}),Object(p.jsx)(g,{children:"Support"})]})},u=["title","titleId"];function f(){return(f=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}function x(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function v(e,n){var t=e.title,i=e.titleId,a=x(e,u);return r.createElement("svg",f({width:20,height:20,xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":i},a),t?r.createElement("title",{id:i},t):null,b||(b=r.createElement("path",{d:"M17.778.808l1.414 1.414L11.414 10l7.778 7.778-1.414 1.414L10 11.414l-7.778 7.778-1.414-1.414L8.586 10 .808 2.222 2.222.808 10 8.586 17.778.808z",fillRule:"evenodd"})))}var O,w=r.forwardRef(v),y=(t.p,["title","titleId"]);function k(){return(k=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}function S(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function L(e,n){var t=e.title,i=e.titleId,a=S(e,y);return r.createElement("svg",k({width:24,height:16,xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":i},a),t?r.createElement("title",{id:i},t):null,O||(O=r.createElement("g",{fillRule:"evenodd"},r.createElement("path",{d:"M0 0h24v2H0zM0 7h24v2H0zM0 14h24v2H0z"}))))}var E,z=r.forwardRef(L);t.p;var I,P,N=l.a.div(E||(E=Object(d.a)(["\n  margin-left:auto;\n  cursor:pointer;\n  z-index:10;\n  @media(min-width:700px){\n    display:none;\n  }\n"]))),T=function(e){var n=e.activeToggle,t=e.active;return Object(p.jsx)(N,{className:t&&"active",onClick:function(){return n()},children:t?Object(p.jsx)(w,{fill:"white"}):Object(p.jsx)(z,{fill:"white"})})};var A,F,C=l.a.header(I||(I=Object(d.a)(["\n\n  position:fixed;\n  z-index:99999;\n  top:0;\n  right:0;\n  left:0;\n"]))),J=l.a.div(P||(P=Object(d.a)(["\n  display:flex;\n  align-items:center;\n  height:3em;\n  max-width:min(max(800px,70%),1000px);\n  font-size:1.2rem;\n  color:white;\n  \n  margin:auto;\n  font-family: 'Alata', sans-serif;\n\n  span.Logo{\n    z-index:10;\n    font-family: 'Alata', sans-serif;\n    font-weight:bold;\n  }\n\n  nav{\n    position:absolute;\n    top:0;\n    right:0;\n    transform:translateX(-100%);\n    padding-top:3em;\n    padding-left:1em;\n    transition:0.3s;\n    text-align:left;\n    height:100vh;\n    background-color:rgba(3,3,3,.8);\n    width:100%;\n\n    &.active{\n      transform:translateX(0%);\n    }\n\n    @media(min-width:700px){\n      position:relative;\n      height:auto;\n      width:auto;\n      transform:none;\n      padding:inherit;\n      margin-left:auto;\n      background-color:inherit;\n\n    }\n  }\n\n\n"]))),M=function(){var e=Object(r.useState)(!1),n=Object(m.a)(e,2),t=n[0],i=n[1];return Object(p.jsx)(C,{children:Object(p.jsxs)(J,{children:[Object(p.jsx)("span",{className:"Logo",children:"loopsider"}),Object(p.jsx)(T,{active:t,activeToggle:function(){i(!t)}}),Object(p.jsx)(h,{active:t})]})})},B=t.p+"static/media/image-deep-earth.2a157951.jpg",R=t.p+"static/media/image-night-arcade.a4f25d3b.jpg",H=t.p+"static/media/image-soccer-team.18a63d8d.jpg",X=t.p+"static/media/image-grid.a8ce4f2b.jpg",_=t.p+"static/media/image-from-above.b7b9dba0.jpg",q=t.p+"static/media/image-pocket-borealis.799292df.jpg",D=t.p+"static/media/image-curiosity.7f14665a.jpg",Y=t.p+"static/media/image-fisheye.ff97b54e.jpg",G=t.p+"static/media/image-deep-earth.f8da6014.jpg",K=t.p+"static/media/image-night-arcade.a5acf9d0.jpg",Q=t.p+"static/media/image-soccer-team.24ac0872.jpg",U=t.p+"static/media/image-grid.043c26ef.jpg",V=t.p+"static/media/image-from-above.f316f3f3.jpg",W=t.p+"static/media/image-pocket-borealis.0b89db1f.jpg",Z=t.p+"static/media/image-curiosity.40d51f38.jpg",$=t.p+"static/media/image-fisheye.8bb3f74e.jpg",ee={mobile:t.p+"static/media/image-hero.9b5aacea.jpg",desktop:t.p+"static/media/image-hero.3de81110.jpg"},ne=[{id:1,title:"deep earth",mobile:B,desktop:G},{id:2,title:"night arcade",mobile:R,desktop:K},{id:3,title:"soccer team vr",mobile:H,desktop:Q},{id:4,title:"the grid",mobile:X,desktop:U},{id:5,title:"from up above vr",mobile:_,desktop:V},{id:6,title:"pocket borealis",mobile:q,desktop:W},{id:7,title:"the curiosity",mobile:D,desktop:Z},{id:8,title:"make it fisheye",mobile:Y,desktop:$}];var te,ie=l.a.div(A||(A=Object(d.a)(["\n  display:flex;\n  flex-direction:column;\n  justify-content:center;\n  align-items:center;\n  background-image:url('","');\n  background-size:cover;\n  height:100vh;\n"])),ee.mobile),ae=l.a.div(F||(F=Object(d.a)(["\n\n  @media(min-width:700px){\n    width:100%;\n    max-width:min(max(600px,70%),1000px);\n  }\n  div{\n    text-transform:uppercase;\n    max-width:400px;\n    font-size:2.6em;\n    font-family: 'Josefin Sans', sans-serif;\n    color:white;\n    border:solid;\n    padding:.51em;\n\n  }\n\n"]))),re=function(){return Object(p.jsx)(ie,{children:Object(p.jsx)(ae,{children:Object(p.jsx)("div",{children:"Immersive experiences that deliver"})})})};var oe,ce=l.a.div(te||(te=Object(d.a)(["\n  position:relative;\n  cursor:pointer;\n  &>img{\n    width:100%;\n  }\n  p{\n    position:absolute;\n    font-family:'Josefin Sans';\n    left:1em;\n    top:50%;\n    color:white;\n    transform:translateY(-50%);\n    text-transform:uppercase;\n\n  }\n"]))),se=function(e){var n=e.creation;return Object(p.jsxs)(ce,{children:[Object(p.jsx)("img",{src:n.desktop,srcSet:"".concat(n.mobile," 1000w, ").concat(n.desktop," 1900w"),alt:""}),Object(p.jsx)("p",{children:n.title})]})};var de,le=l.a.h1(oe||(oe=Object(d.a)(["\n  text-align:center;\n  text-transform:uppercase;\n  font-family:'Josefin Sans';\n  margin-bottom:2em;\n  color:black;\n\n  @media(min-width:1000px){\n    text-align:left;\n  }\n"]))),me=function(e){var n=e.children;return Object(p.jsx)(le,{children:n})},pe=t.p+"static/media/image-interactive.d6a3949b.jpg";var be,je,ge,he,ue=l.a.main(de||(de=Object(d.a)(['\n  position:relative;\n  max-width:min(max(600px,70%),1000px);\n  margin:auto;\n  .introduction{\n    position:relative;\n    img{\n     max-width: 100%;\n    }\n    h1{\n    margin-bottom:1em;\n    }\n\n    .introduction_desc{\n      padding:2em 0;\n      background-color:white;\n      text-align:center;\n\n      @media(min-width:1000px){\n        position:absolute;\n        width:400px;\n        padding:2em;\n        bottom:0;\n        right:0;\n        text-align:left;\n      }\n    }\n  }\n  section{\n  margin-top:5em;\n  }\n\n  .creation{\n    text-align:center;\n\n    &>div{\n      display:grid;\n      gap:1em;\n      margin-bottom:1rem;\n      @media(min-width:1000px){\n        grid-template-columns:repeat(4,1fr);\n      }\n    }\n    span{\n      border:solid;\n      padding:.2rem .5rem;\n      cursor:pointer;\n    }\n    @media(min-width:1000px){\n      display:grid;\n      grid-template-areas:\n      "Title allButton"\n      "content content" ;\n      &>div{\n        grid-area:content;\n      }\n      h1{\n        grid-area:Title;\n      }\n      span{\n        grid-areas:allButton;\n        justify-self:end;\n        align-self:start;\n      }\n    }\n\n    \n  }\n\n']))),fe=function(){return Object(p.jsxs)(ue,{children:["Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",Object(p.jsxs)("section",{className:"introduction",children:[Object(p.jsx)("img",{src:pe,alt:""}),Object(p.jsxs)("div",{className:"introduction_desc",children:[Object(p.jsx)(me,{children:"The leader in interactive vr"}),Object(p.jsx)("p",{children:"Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand."})]})]}),Object(p.jsxs)("section",{className:"creation",children:[Object(p.jsx)(me,{children:"Our creations"}),Object(p.jsx)("div",{children:ne&&ne.map((function(e){return Object(p.jsx)(se,{creation:e},e.id)}))}),Object(p.jsx)("span",{children:"see all"})]})]})};var xe,ve=l.a.footer(be||(be=Object(d.a)(["\n  background-color:black;\n  margin-top:2em;\n"]))),Oe=l.a.div(je||(je=Object(d.a)(["\n  display:flex;\n  flex-direction:column;\n  max-width:min(max(800px,70%), 1000px);\n  align-items:center;\n  marg\n  margin:auto;\n  padding-top:2em ;\n  padding-bottom:2em ;\n  \n  div{\n    display:flex;\n    flex-direction:column;\n    align-items:center;\n  }\n  \n  nav{\n    align-items:center;\n  }\n\n  @media(min-width:700px){\n    flex-direction:row;\n    justify-content:space-between;\n    &>div:nth-child(1){\n      align-items:start;\n    }\n    &>div:nth-child(2){\n      align-items:end;\n    }\n    }\n  }\n\n\n\n"]))),we=l.a.ul(ge||(ge=Object(d.a)(["\n  display:flex;\n  flex-direction:row;\n"]))),ye=l.a.div(he||(he=Object(d.a)(["\n\n"]))),ke=function(){return Object(p.jsx)(ve,{children:Object(p.jsxs)(Oe,{children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("span",{className:"Logo",children:"loopsider"}),Object(p.jsx)(h,{})]}),Object(p.jsxs)("div",{children:[Object(p.jsxs)(we,{children:[Object(p.jsx)(ye,{children:"facebook"}),Object(p.jsx)(ye,{children:"twitter"}),Object(p.jsx)(ye,{children:"printeret"}),Object(p.jsx)(ye,{children:"instagram"})]}),Object(p.jsx)("p",{children:"@2021 Loopstudios. All rights reserved."})]})]})})};var Se=l.a.div(xe||(xe=Object(d.a)(["\n  position:relative;\n  overflow:hidden;\n  margin:auto;\n  font-family:'Alata';\n  color:hsl(0,0%,55%);\n  & > * {\n    padding:0 1em;\n  }\n"]))),Le=function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(Se,{children:[Object(p.jsx)(M,{}),Object(p.jsx)(re,{}),Object(p.jsx)(fe,{}),Object(p.jsx)(ke,{})]})})},Ee=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,23)).then((function(n){var t=n.getCLS,i=n.getFID,a=n.getFCP,r=n.getLCP,o=n.getTTFB;t(e),i(e),a(e),r(e),o(e)}))};s.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(Le,{})}),document.getElementById("root")),Ee()}},[[22,1,2]]]);
//# sourceMappingURL=main.1fb3c885.chunk.js.map