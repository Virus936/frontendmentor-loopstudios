(this.webpackJsonploopstudio=this.webpackJsonploopstudio||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var i,r,a=n(1),o=n.n(a),l=n(8),c=n.n(l),s=(n(17),n(2)),d=(n(18),n(3)),p=n(12),m=n(0);var f,b=d.a.nav(i||(i=Object(s.a)(["\n  display:flex;\n  flex-direction:column;\n  @media(min-width:700px){\n    flex-direction:row;\n    gap:1em;\n  }\n\n"]))),u=d.a.div(r||(r=Object(s.a)(["\n  position:relative;\n  width:max-content;\n  cursor:pointer;\n  :hover{\n    :after{\n      position:absolute;\n      bottom:-5px;\n      right:0;\n      content:'';\n      width:100%;\n      border:solid 1px;\n\n    }\n  }\n  \n\n"]))),h=function(e){var t=e.active;return Object(m.jsxs)(b,{className:t&&"active",children:[Object(m.jsx)(u,{children:"About"}),Object(m.jsx)(u,{children:"Careers"}),Object(m.jsx)(u,{children:"Events"}),Object(m.jsx)(u,{children:"Products"}),Object(m.jsx)(u,{children:"Support"})]})},g=["title","titleId"];function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function v(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function O(e,t){var n=e.title,i=e.titleId,r=v(e,g);return a.createElement("svg",j({width:20,height:20,xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":i},r),n?a.createElement("title",{id:i},n):null,f||(f=a.createElement("path",{d:"M17.778.808l1.414 1.414L11.414 10l7.778 7.778-1.414 1.414L10 11.414l-7.778 7.778-1.414-1.414L8.586 10 .808 2.222 2.222.808 10 8.586 17.778.808z",fillRule:"evenodd"})))}var x,w=a.forwardRef(O),y=(n.p,["title","titleId"]);function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function E(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function z(e,t){var n=e.title,i=e.titleId,r=E(e,y);return a.createElement("svg",k({width:24,height:16,xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":i},r),n?a.createElement("title",{id:i},n):null,x||(x=a.createElement("g",{fillRule:"evenodd"},a.createElement("path",{d:"M0 0h24v2H0zM0 7h24v2H0zM0 14h24v2H0z"}))))}var I,P=a.forwardRef(z);n.p;var S,C,R=d.a.div(I||(I=Object(s.a)(["\n  margin-left:auto;\n  cursor:pointer;\n  z-index:10;\n  @media(min-width:700px){\n    display:none;\n  }\n"]))),L=function(e){var t=e.activeToggle,n=e.active;return Object(m.jsx)(R,{className:n&&"active",onClick:function(){return t()},children:n?Object(m.jsx)(w,{fill:"white"}):Object(m.jsx)(P,{fill:"white"})})};var M,A,N=d.a.header(S||(S=Object(s.a)(["\n\n  position:fixed;\n  z-index:99999;\n  top:0;\n  right:0;\n  left:0;\n"]))),T=d.a.div(C||(C=Object(s.a)(["\n  display:flex;\n  align-items:center;\n  height:3em;\n  max-width:min(max(800px,70%),1000px);\n  font-size:1.2rem;\n  color:white;\n  \n  margin:auto;\n  font-family: 'Alata', sans-serif;\n\n  span.Logo{\n    z-index:10;\n    font-family: 'Alata', sans-serif;\n    font-weight:bold;\n  }\n\n  nav{\n    position:absolute;\n    top:0;\n    right:0;\n    transform:translateX(-100%);\n    padding-top:3em;\n    padding-left:1em;\n    transition:0.3s;\n    text-align:left;\n    height:100vh;\n    background-color:rgba(3,3,3,.8);\n    width:100%;\n\n    &.active{\n      transform:translateX(0%);\n    }\n\n    @media(min-width:700px){\n      position:relative;\n      height:auto;\n      width:auto;\n      transform:none;\n      padding:inherit;\n      margin-left:auto;\n      background-color:inherit;\n\n    }\n  }\n\n\n"]))),F=function(){var e=Object(a.useState)(!1),t=Object(p.a)(e,2),n=t[0],i=t[1];return Object(m.jsx)(N,{children:Object(m.jsxs)(T,{children:[Object(m.jsx)("span",{className:"Logo",children:"loopstudios"}),Object(m.jsx)(L,{active:n,activeToggle:function(){i(!n)}}),Object(m.jsx)(h,{active:n})]})})},H=n.p+"static/media/image-deep-earth.2a157951.jpg",J=n.p+"static/media/image-night-arcade.a4f25d3b.jpg",B=n.p+"static/media/image-soccer-team.18a63d8d.jpg",V=n.p+"static/media/image-grid.a8ce4f2b.jpg",X=n.p+"static/media/image-from-above.b7b9dba0.jpg",_=n.p+"static/media/image-pocket-borealis.799292df.jpg",D=n.p+"static/media/image-curiosity.7f14665a.jpg",Y=n.p+"static/media/image-fisheye.ff97b54e.jpg",q=n.p+"static/media/image-deep-earth.f8da6014.jpg",G=n.p+"static/media/image-night-arcade.a5acf9d0.jpg",K=n.p+"static/media/image-soccer-team.24ac0872.jpg",Q=n.p+"static/media/image-grid.043c26ef.jpg",U=n.p+"static/media/image-from-above.f316f3f3.jpg",W=n.p+"static/media/image-pocket-borealis.0b89db1f.jpg",Z=n.p+"static/media/image-curiosity.40d51f38.jpg",$=n.p+"static/media/image-fisheye.8bb3f74e.jpg",ee={mobile:n.p+"static/media/image-hero.9b5aacea.jpg",desktop:n.p+"static/media/image-hero.3de81110.jpg"},te=[{id:1,title:"deep earth",mobile:H,desktop:q},{id:2,title:"night arcade",mobile:J,desktop:G},{id:3,title:"soccer team vr",mobile:B,desktop:K},{id:4,title:"the grid",mobile:V,desktop:Q},{id:5,title:"from up above vr",mobile:X,desktop:U},{id:6,title:"pocket borealis",mobile:_,desktop:W},{id:7,title:"the curiosity",mobile:D,desktop:Z},{id:8,title:"make it fisheye",mobile:Y,desktop:$}];var ne,ie=d.a.div(M||(M=Object(s.a)(["\n  display:flex;\n  flex-direction:column;\n  justify-content:center;\n  align-items:center;\n  background-image:url('","');\n  background-size:cover;\n  height:100vh;\n"])),ee.mobile),re=d.a.div(A||(A=Object(s.a)(["\n\n  @media(min-width:700px){\n    width:100%;\n    max-width:min(max(600px,70%),1000px);\n  }\n  div{\n    text-transform:uppercase;\n    max-width:400px;\n    font-size:2.6em;\n    font-family: 'Josefin Sans', sans-serif;\n    color:white;\n    border:solid;\n    padding:.51em;\n\n  }\n\n"]))),ae=function(){return Object(m.jsx)(ie,{children:Object(m.jsx)(re,{children:Object(m.jsx)("div",{children:"Immersive experiences that deliver"})})})};var oe,le=d.a.div(ne||(ne=Object(s.a)(["\n  position:relative;\n  cursor:pointer;\n  &>img{\n    width:100%;\n  }\n  p{\n    position:absolute;\n    font-family:'Josefin Sans';\n    left:1em;\n    top:50%;\n    color:white;\n    transform:translateY(-50%);\n    text-transform:uppercase;\n\n  }\n"]))),ce=function(e){var t=e.creation;return Object(m.jsxs)(le,{children:[Object(m.jsx)("img",{src:t.desktop,srcSet:"".concat(t.mobile," 1000w, ").concat(t.desktop," 1900w"),alt:""}),Object(m.jsx)("p",{children:t.title})]})};var se,de=d.a.h1(oe||(oe=Object(s.a)(["\n  text-align:center;\n  text-transform:uppercase;\n  font-family:'Josefin Sans';\n  margin-bottom:2em;\n  color:black;\n\n  @media(min-width:1000px){\n    text-align:left;\n  }\n"]))),pe=function(e){var t=e.children;return Object(m.jsx)(de,{children:t})},me=n.p+"static/media/image-interactive.d6a3949b.jpg";var fe,be=d.a.main(se||(se=Object(s.a)(['\n  position:relative;\n  max-width:min(max(600px,70%),1000px);\n  margin:auto;\n  .introduction{\n    position:relative;\n    img{\n     max-width: 100%;\n    }\n    h1{\n    margin-bottom:1em;\n    }\n\n    .introduction_desc{\n      padding:2em 0;\n      background-color:white;\n      text-align:center;\n\n      @media(min-width:1000px){\n        position:absolute;\n        width:400px;\n        padding:2em;\n        bottom:0;\n        right:0;\n        text-align:left;\n      }\n    }\n  }\n  section{\n  margin-top:5em;\n  }\n\n  .creation{\n    text-align:center;\n\n    &>div{\n      display:grid;\n      gap:1em;\n      margin-bottom:1rem;\n      @media(min-width:1000px){\n        grid-template-columns:repeat(4,1fr);\n      }\n    }\n    span{\n      border:solid;\n      padding:.2rem .5rem;\n      cursor:pointer;\n    }\n    @media(min-width:1000px){\n      display:grid;\n      grid-template-areas:\n      "Title allButton"\n      "content content" ;\n      &>div{\n        grid-area:content;\n      }\n      h1{\n        grid-area:Title;\n      }\n      span{\n        grid-areas:allButton;\n        justify-self:end;\n        align-self:start;\n      }\n    }\n\n    \n  }\n\n']))),ue=function(){return Object(m.jsxs)(be,{children:[Object(m.jsxs)("section",{className:"introduction",children:[Object(m.jsx)("img",{src:me,alt:""}),Object(m.jsxs)("div",{className:"introduction_desc",children:[Object(m.jsx)(pe,{children:"The leader in interactive vr"}),Object(m.jsx)("p",{children:"Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand."})]})]}),Object(m.jsxs)("section",{className:"creation",children:[Object(m.jsx)(pe,{children:"Our creations"}),Object(m.jsx)("div",{children:te&&te.map((function(e){return Object(m.jsx)(ce,{creation:e},e.id)}))}),Object(m.jsx)("span",{children:"see all"})]})]})},he=["title","titleId"];function ge(){return(ge=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function je(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function ve(e,t){var n=e.title,i=e.titleId,r=je(e,he);return a.createElement("svg",ge({width:24,height:24,xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":i},r),n?a.createElement("title",{id:i},n):null,fe||(fe=a.createElement("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",fillRule:"nonzero"})))}var Oe,xe=a.forwardRef(ve),we=(n.p,["title","titleId"]);function ye(){return(ye=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function ke(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function Ee(e,t){var n=e.title,i=e.titleId,r=ke(e,we);return a.createElement("svg",ye({width:24,height:24,xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":i},r),n?a.createElement("title",{id:i},n):null,Oe||(Oe=a.createElement("path",{d:"M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z",fillRule:"nonzero"})))}var ze,Ie=a.forwardRef(Ee),Pe=(n.p,["title","titleId"]);function Se(){return(Se=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function Ce(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function Re(e,t){var n=e.title,i=e.titleId,r=Ce(e,Pe);return a.createElement("svg",Se({width:24,height:20,xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":i},r),n?a.createElement("title",{id:i},n):null,ze||(ze=a.createElement("path",{d:"M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z",fillRule:"nonzero"})))}var Le,Me=a.forwardRef(Re),Ae=(n.p,["title","titleId"]);function Ne(){return(Ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function Te(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function Fe(e,t){var n=e.title,i=e.titleId,r=Te(e,Ae);return a.createElement("svg",Ne({width:24,height:24,xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":i},r),n?a.createElement("title",{id:i},n):null,Le||(Le=a.createElement("path",{d:"M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z",fillRule:"nonzero"})))}var He,Je,Be,Ve,Xe=a.forwardRef(Fe);n.p;var _e,De=d.a.footer(He||(He=Object(s.a)(["\n  background-color:black;\n  margin-top:2em;\n"]))),Ye=d.a.div(Je||(Je=Object(s.a)(["\n  display:flex;\n  flex-direction:column;\n  max-width:min(max(800px,70%), 1000px);\n  align-items:center;\n  margin:auto;\n  padding-top:2em ;\n  padding-bottom:2em ;\n  gap:1em;\n  \n  .Logo{\n    font-size:1.2rem;\n    cursor:pointer;\n  }\n\n  div{\n    display:flex;\n    flex-direction:column;\n    align-items:center;\n\n  }\n  \n  nav{\n    align-items:center;\n  }\n\n  @media(min-width:700px){\n    flex-direction:row;\n    justify-content:space-between;\n    &>div:nth-child(1){\n      align-items:start;\n    }\n    &>div:nth-child(2){\n      align-items:end;\n    }\n    }\n  }\n\n\n\n"]))),qe=d.a.ul(Be||(Be=Object(s.a)(["\n  display:flex;\n  flex-direction:row;\n\n  gap:1em;\n"]))),Ge=d.a.div(Ve||(Ve=Object(s.a)(["\n  cursor:pointer;\n"]))),Ke=function(){return Object(m.jsx)(De,{children:Object(m.jsxs)(Ye,{children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("span",{className:"Logo",children:"loopstudios"}),Object(m.jsx)(h,{})]}),Object(m.jsxs)("div",{children:[Object(m.jsxs)(qe,{children:[Object(m.jsxs)(Ge,{children:[" ",Object(m.jsx)(Ie,{fill:"hsl(0,0%,55%)"})," "]}),Object(m.jsx)(Ge,{children:Object(m.jsx)(Me,{fill:"hsl(0,0%,55%)"})}),Object(m.jsx)(Ge,{children:Object(m.jsx)(Xe,{fill:"hsl(0,0%,55%)"})}),Object(m.jsx)(Ge,{children:Object(m.jsx)(xe,{fill:"hsl(0,0%,55%)"})})]}),Object(m.jsx)("p",{children:"@2021 Loopstudios. All rights reserved."})]})]})})};var Qe=d.a.div(_e||(_e=Object(s.a)(["\n  position:relative;\n  overflow:hidden;\n  margin:auto;\n  font-family:'Alata';\n  color:hsl(0,0%,55%);\n  & > * {\n    padding:0 1em;\n  }\n"]))),Ue=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(Qe,{children:[Object(m.jsx)(F,{}),Object(m.jsx)(ae,{}),Object(m.jsx)(ue,{}),Object(m.jsx)(Ke,{})]})})},We=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),i(e),r(e),a(e),o(e)}))};c.a.render(Object(m.jsx)(o.a.StrictMode,{children:Object(m.jsx)(Ue,{})}),document.getElementById("root")),We()}},[[22,1,2]]]);
//# sourceMappingURL=main.c5282983.chunk.js.map