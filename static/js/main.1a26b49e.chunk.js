(this["webpackJsonpchim-shop-chai"]=this["webpackJsonpchim-shop-chai"]||[]).push([[0],{30:function(n,e,t){n.exports=t.p+"static/media/banner-left.6f2853c0.webp"},31:function(n,e,t){n.exports=t.p+"static/media/banner-center.6118b816.webp"},32:function(n,e,t){n.exports=t.p+"static/media/banner-right.3ed49c61.webp"},33:function(n,e,t){n.exports=t.p+"static/media/banner.cdb30d15.webp"},34:function(n,e,t){n.exports=t.p+"static/media/Banner_KTB_SQ.09ccb374.webp"},35:function(n,e,t){n.exports=t.p+"static/media/Banner_CGD_Sq.74263ae7.webp"},36:function(n,e,t){n.exports=t.p+"static/media/Banner_TAT_Hotline_Sq.cc2b0246.webp"},37:function(n,e,t){n.exports=t.p+"static/media/CGD.23f3c3c1.webp"},38:function(n,e,t){n.exports=t.p+"static/media/FPO.7f47fbe1.webp"},39:function(n,e,t){n.exports=t.p+"static/media/Krungthai.d3612648.webp"},40:function(n,e,t){n.exports=t.p+"static/media/MOF.6e7ab260.webp"},41:function(n,e,t){n.exports=t.p+"static/media/MOTS.e2e5c7ea.webp"},42:function(n,e,t){n.exports=t.p+"static/media/TAT.139fef39.webp"},45:function(n,e,t){n.exports=t(68)},68:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),i=t(20),o=t.n(i),l=t(21);function c(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}var u={laptop:1200,largeTablet:992,tablet:768,largePhone:578,mobile:320},p=Object.keys(u).reduce((function(n,e){var t={},a=u[e];return t[e]="@media screen and (min-width: ".concat(a,"px)"),function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?c(t,!0).forEach((function(e){Object(l.a)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):c(t).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}({},n,{},t)}),{}),s=t(10),m=t.n(s),d=t(22),f=t(9),g=t(23),h=t.n(g);var b=t(24),x=t.n(b);function w(n){return(0,x.a.sanitize)(n,{ALLOWED_TAGS:["span","br"],ALLOWED_ATTR:["class"]})}var v=t(25),E=t(26),O=t(43),y=t(27),j=t(44),k=function(n){function e(n){var t;return Object(v.a)(this,e),(t=Object(O.a)(this,Object(y.a)(e).call(this,n))).state={error:!1},t}return Object(j.a)(e,n),Object(E.a)(e,[{key:"componentDidCatch",value:function(n){this.setState({error:!this.state.error})}},{key:"render",value:function(){return this.state.error?r.a.createElement("div",null,"400: CLient Error. Please try again later."):this.props.children}}]),e}(a.Component),T=t(1),S=t(6),P=t(2);function z(){var n=Object(T.a)(["\n  margin: auto;\n"]);return z=function(){return n},n}function C(){var n=Object(T.a)(["\n  display: inline-block;\n  position: relative;\n  width: 64px;\n  height: 64px;\n\n  div {\n    display: inline-block;\n    position: absolute;\n    left: 6px;\n    width: 13px;\n    background: #fbba32;\n    animation: "," 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;\n\n    :nth-of-type(1) {\n      left: 6px;\n      animation-delay: -0.24s;\n    }\n\n    :nth-of-type(2) {\n      left: 26px;\n      animation-delay: -0.12s;\n    }\n\n    :nth-of-type(3) {\n      left: 45px;\n      animation-delay: 0;\n    }\n  }\n"]);return C=function(){return n},n}function A(){var n=Object(T.a)(["\n  0% {\n    top: 6px;\n    height: 51px;\n  }\n  50%, 100% {\n    top: 19px;\n    height: 26px;\n  }\n"]);return A=function(){return n},n}var _=Object(S.d)(A()),D=P.a.div(C(),_),N=P.a.div(z()),L=function(){return r.a.createElement(N,null,r.a.createElement(D,null))};function W(){var n=Object(T.a)(["\n  box-sizing: border-box;\n  width: 100%;\n  padding: 0 15px;\n  margin: 0 auto;\n\n  "," {\n    max-width: 540px;\n  }\n\n  "," {\n    max-width: 720px;\n  }\n\n  "," {\n    max-width: 960px;\n  }\n\n  "," {\n    max-width: 1140px;\n  }\n"]);return W=function(){return n},n}var B=P.a.div(W(),p.largePhone,p.tablet,p.largeTablet,p.laptop),R=function(n){return r.a.createElement(B,null,n.children)};function I(){var n=Object(T.a)(["\n  @font-face {\n    font-family: 'TATSanaSuksa';\n    src: url(./fonts/TATSanaSuksa-Regular.woff2);\n    font-weight: normal;\n  }\n\n  @font-face {\n    font-family: 'TATSanaSuksa';\n    src: url(./fonts/TATSanaChon-Bold.woff2);\n    font-weight: bold;\n  }\n\n  @font-face {\n    font-family: 'TATSanaChon';\n    src: url(./fonts/TATSanaChon-Regular.woff2);\n  }\n\n  html {\n    font-size: 16px;\n    font-family: 'TATSanaSuksa';\n  }\n\n  body {\n    margin: 0;\n    color: #333333;\n  }\n"]);return I=function(){return n},n}var F=Object(S.c)(I()),G=function(){return r.a.createElement(S.a,{styles:F})},H=t(8),K=t.n(H);function M(){var n=Object(T.a)(["\n  position: relative;\n  width: 30px;\n  height: 20px;\n\n  span {\n    display: block;\n    height: 3px;\n    width: 100%;\n    background: #333;\n    position: absolute;\n    left: 0;\n    transition: all ease-in-out 250ms;\n\n    :nth-of-type(1) {\n      top: ",";\n      transform: ",";\n    }\n\n    :nth-of-type(2) {\n      top: 10px;\n      left: ",";\n      opacity: ",";\n    }\n\n    :nth-of-type(3) {\n      top: ",";\n      transform: ",";\n    }\n  }\n"]);return M=function(){return n},n}var U=P.a.div(M(),(function(n){return n.isOpen?"10px":"0"}),(function(n){return n.isOpen?"rotate(135deg)":"rotate(0deg)"}),(function(n){return n.isOpen?"-35px":"0"}),(function(n){return n.isOpen?"0":"1"}),(function(n){return n.isOpen?"10px":"20px"}),(function(n){return n.isOpen?"rotate(-135deg)":"rotate(0deg)"})),q=function(n){var e=n.state;return r.a.createElement(U,{isOpen:e.isOpen,onClick:function(){return e.setOpen(!e.isOpen)}},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null))};function J(){var n=Object(T.a)(["\n  box-sizing: border-box;\n  background: #fff;\n  ","\n  padding: 10px 20px;\n  display: flex;\n  flex-flow: wrap;\n  justify-content: space-between;\n  align-items: center;\n  position: fixed;\n  width: 100%;\n  top: 0;\n  z-index: 200;\n\n  "," {\n    padding: 0 15px;\n  }\n\n  > img {\n    width: 35px;\n    height: 48px;\n\n    "," {\n      display: none;\n    }\n  }\n\n  .hamburg {\n    "," {\n      display: none;\n    }\n  }\n\n  .navbar-link {\n    flex: 1 0 100%;\n    overflow: hidden;\n    ","\n    transition: height ease-in-out 350ms;\n\n    "," {\n      height: auto;\n    }\n\n    ul {\n      margin: 0;\n      padding: 0;\n\n      "," {\n        text-align: center;\n        padding-top: 5px;\n      }\n\n      li {\n        list-style: none;\n        padding: 10px 0;\n        text-align: right;\n\n        "," {\n          padding: 14px 15px;\n          display: inline-block;\n        }\n\n        a {\n          color: rgba(0, 0, 0, 0.5);\n          text-decoration: none;\n\n          "," {\n            color: #000;\n            font-size: 0.875rem;\n            font-family: 'TATSanaChon';\n          }\n\n          :focus {\n            color: #000;\n          }\n        }\n      }\n    }\n  }\n"]);return J=function(){return n},n}var Q=P.a.div(J(),(function(n){return!n.isOpen&&"box-shadow: 0 1px 1px hsla(0, 0%, 0%, 3%);"}),p.largePhone,p.largePhone,p.largePhone,(function(n){return n.isOpen?"height: 150px;":"height: 0px;"}),p.largePhone,p.largePhone,p.largePhone,p.largePhone),Y=function(n){var e=n.navbarItems,t=Object(a.useState)(!1),i=Object(f.a)(t,2),o=i[0],l=i[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(Q,{isOpen:o},r.a.createElement("img",{src:K.a,alt:"logo"}),r.a.createElement("div",{className:"hamburg"},r.a.createElement(q,{state:{isOpen:o,setOpen:l}})),r.a.createElement("div",{className:"navbar-link"},r.a.createElement("ul",null,e.map((function(n){return r.a.createElement("li",{key:n.label},r.a.createElement("a",{href:n.href},n.label))}))))))},$=t(30),V=t.n($),X=t(31),Z=t.n(X),nn=t(32),en=t.n(nn),tn=t(33),an=t.n(tn);function rn(){var n=Object(T.a)(["\n  flex: 0 1 calc(100% / 3);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  ","\n\n  img {\n    width: 110px;\n\n    "," {\n      width: 146px;\n      height: 173px;\n    }\n\n    "," {\n      width: 240px;\n      height: auto;\n    }\n  }\n"]);return rn=function(){return n},n}function on(){var n=Object(T.a)(["\n  width: 100%;\n  display: flex;\n  height: 220px;\n  padding-top: 68px;\n\n  "," {\n    height: 242px;\n    padding-top: 63px;\n  }\n\n  "," {\n    height: 350px;\n  }\n"]);return on=function(){return n},n}var ln=P.a.div(on(),p.largePhone,p.tablet),cn=P.a.div(rn(),(function(n){return"\n    background: url(".concat(n.imageSrc,") no-repeat center;\n    background-size: cover;\n  ")}),p.largePhone,p.tablet),un=function(){return r.a.createElement(ln,null,r.a.createElement(cn,{imageSrc:V.a}),r.a.createElement(cn,{imageSrc:Z.a},r.a.createElement("img",{src:an.a,alt:"banner"})),r.a.createElement(cn,{imageSrc:en.a}))};function pn(){var n=Object(T.a)(["\n  font-size: 1.875rem;\n  color: #e6332a;\n  font-weight: bold;\n  margin-top: -10px;\n  margin-bottom: 0;\n\n  "," {\n    font-size: 3rem;\n  }\n"]);return pn=function(){return n},n}function sn(){var n=Object(T.a)(["\n  text-align: center;\n  margin-top: 35px;\n  margin-bottom: 10px;\n\n  > h1 {\n    margin: 0;\n    font-size: 1rem;\n  }\n"]);return sn=function(){return n},n}var mn=P.a.div(sn()),dn=P.a.p(pn(),p.tablet),fn=function(n){var e=n.duration;return r.a.createElement(mn,null,r.a.createElement("h1",null,"\u0e15\u0e31\u0e49\u0e07\u0e41\u0e15\u0e48\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48"),r.a.createElement(dn,null,e))};function gn(){var n=Object(T.a)(["\n  display: none;\n\n  "," {\n    display: block;\n    border: 0;\n    border-top: 1px solid rgba(0, 0, 0, 0.1);\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    width: 100%;\n    z-index: -1;\n  }\n"]);return gn=function(){return n},n}function hn(){var n=Object(T.a)(["\n  text-align: center;\n  color: #fff;\n  font-weight: bold;\n  font-size: 1.125rem;\n  text-decoration: none;\n\n  div {\n    background: #213a8f;\n    padding: 10px;\n    border-radius: 5px;\n    line-height: 1.5;\n    box-shadow: 0 5px 50px rgba(0, 0, 0, 0.5);\n    cursor: pointer;\n    margin: 0 30px 50px;\n    transition: background-color 0s ease-in-out, box-shadow 0s ease-in-out;\n\n    "," {\n      font-size: 1.5rem;\n    }\n\n    "," {\n      max-width: 800px;\n      margin: 0 auto 50px;\n    }\n\n    :hover {\n      box-shadow: none;\n      background: #fcbb33;\n    }\n  }\n"]);return hn=function(){return n},n}function bn(){var n=Object(T.a)(["\n  position: relative;\n"]);return bn=function(){return n},n}var xn=P.a.div(bn()),wn=P.a.a(hn(),p.tablet,p.largeTablet),vn=P.a.hr(gn(),p.tablet),En=function(){return r.a.createElement(xn,null,r.a.createElement(wn,{href:"https://www.xn--b3caa1e2a7e2b0h2be.com/close.html"},r.a.createElement("div",null,"\u0e04\u0e07\u0e40\u0e2b\u0e25\u0e37\u0e2d\u0e2a\u0e34\u0e17\u0e18\u0e34\u0e25\u0e07\u0e17\u0e30\u0e40\u0e1a\u0e35\u0e22\u0e19 \u0e40\u0e1f\u0e2a 2",r.a.createElement("br",null),"\u0e15\u0e31\u0e49\u0e07\u0e41\u0e15\u0e48\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48 24 \u0e15.\u0e04. 62 \u0e27\u0e31\u0e19\u0e25\u0e30 2 \u0e23\u0e2d\u0e1a \u0e40\u0e27\u0e25\u0e32 6.00 \u0e41\u0e25\u0e30 18.00 \u0e19.",r.a.createElement("br",null),"(\u0e08\u0e33\u0e01\u0e31\u0e14\u0e08\u0e33\u0e19\u0e27\u0e19\u0e1c\u0e39\u0e49\u0e25\u0e07\u0e17\u0e30\u0e40\u0e1a\u0e35\u0e22\u0e19\u0e23\u0e2d\u0e1a\u0e25\u0e30 5 \u0e41\u0e2a\u0e19\u0e04\u0e19 \u0e23\u0e27\u0e21 1 \u0e25\u0e49\u0e32\u0e19\u0e04\u0e19\u0e15\u0e48\u0e2d\u0e27\u0e31\u0e19)")),r.a.createElement(vn,null))};function On(){var n=Object(T.a)(["\n  margin-bottom: 40px;\n  width: 100%;\n\n  h1 {\n    color: #e6332a;\n    font-size: 1.5rem;\n    margin-bottom: 30px;\n    line-height: 1.6;\n  }\n\n  .no-wrap {\n    white-space: nowrap;\n  }\n\n  "," {\n    div {\n      font-size: 0.875rem;\n    }\n  }\n\n  "," {\n    max-width: 83.3%;\n\n    h1 {\n      font-size: 2.25rem;\n      line-height: 1.8;\n    }\n\n    div {\n      font-size: 1.125rem;\n    }\n  }\n"]);return On=function(){return n},n}var yn=P.a.div(On(),p.largePhone,p.tablet),jn=function(n){var e=n.detail;return r.a.createElement(yn,null,r.a.createElement("h1",null,"\u0e21\u0e32\u0e15\u0e23\u0e01\u0e32\u0e23\u0e2a\u0e48\u0e07\u0e40\u0e2a\u0e23\u0e34\u0e21\u0e01\u0e32\u0e23\u0e1a\u0e23\u0e34\u0e42\u0e20\u0e04",r.a.createElement("br",null),"\u0e43\u0e19\u0e1b\u0e23\u0e30\u0e40\u0e17\u0e28 ",r.a.createElement("span",{className:"no-wrap"},"\u201c\u0e0a\u0e34\u0e21\u0e0a\u0e49\u0e2d\u0e1b\u0e43\u0e0a\u0e49\u201d")),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:e}}))};function kn(){var n=Object(T.a)(["\n  margin-bottom: 80px;\n\n  h1 {\n    font-size: 1rem;\n  }\n\n  "," {\n    h1,\n    div {\n      font-size: 0.875rem;\n    }\n  }\n\n  "," {\n    max-width: 83.3%;\n\n    h1,\n    div {\n      font-size: 1.125rem;\n    }\n  }\n"]);return kn=function(){return n},n}var Tn=P.a.div(kn(),p.largePhone,p.tablet),Sn=function(n){var e=n.condition;return r.a.createElement(Tn,null,r.a.createElement("h1",null,"\u0e40\u0e07\u0e37\u0e48\u0e2d\u0e19\u0e44\u0e02\u0e01\u0e32\u0e23\u0e40\u0e02\u0e49\u0e32\u0e23\u0e48\u0e27\u0e21\u0e21\u0e32\u0e15\u0e23\u0e01\u0e32\u0e23"),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:e}}))},Pn=t(34),zn=t.n(Pn),Cn=t(35),An=t.n(Cn),_n=t(36),Dn=t.n(_n);function Nn(){var n=Object(T.a)(["\n  display: flex;\n  flex-flow: wrap;\n  justify-content: center;\n  padding: 0 15px;\n  margin-bottom: 80px;\n\n  img {\n    width: 80%;\n  }\n\n  "," {\n    img {\n      max-width: 510px;\n    }\n  }\n\n  "," {\n    flex-flow: nowrap;\n\n    img {\n      max-width: 210px;\n      max-height: 210px;\n      padding: 0 15px;\n    }\n  }\n\n  "," {\n    justify-content: space-between;\n\n    img {\n      flex: 0 0 calc(100% / 3);\n      max-width: calc(100% / 3);\n      max-height: none;\n      padding: 0;\n    }\n  }\n"]);return Nn=function(){return n},n}var Ln=P.a.div(Nn(),p.largePhone,p.tablet,p.largeTablet),Wn=function(){return r.a.createElement(Ln,null,r.a.createElement("img",{src:zn.a,alt:"\u0e04\u0e2d\u0e25\u0e40\u0e0b\u0e47\u0e19\u0e40\u0e15\u0e2d\u0e23\u0e4c\u0e01\u0e23\u0e38\u0e07\u0e44\u0e17\u0e22 KTB Call Center 021111144"}),r.a.createElement("img",{src:An.a,alt:"\u0e04\u0e2d\u0e25\u0e40\u0e0b\u0e47\u0e19\u0e40\u0e15\u0e2d\u0e23\u0e4c\u0e01\u0e23\u0e21\u0e1a\u0e31\u0e0d\u0e0a\u0e35\u0e01\u0e25\u0e32\u0e07 CGD Call Center 022706400 \u0e01\u0e14 7"}),r.a.createElement("img",{src:Dn.a,alt:"Tourist Hotline 1672"}))},Bn=t(37),Rn=t.n(Bn),In=t(38),Fn=t.n(In),Gn=t(39),Hn=t.n(Gn),Kn=t(40),Mn=t.n(Kn),Un=t(41),qn=t.n(Un),Jn=t(42),Qn=t.n(Jn);function Yn(){var n=Object(T.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, calc(100% / 3));\n  margin-bottom: 80px;\n\n  img {\n    justify-self: center;\n    width: 56px;\n    transition: all ease-in-out 550ms;\n\n    :hover {\n      transform: scale(1.2);\n    }\n  }\n\n  "," {\n    grid-template-columns: repeat(6, 1fr);\n    margin-left: 30px;\n    margin-right: 30px;\n\n    img {\n      width: 100%;\n    }\n  }\n\n  "," {\n    grid-gap: 30px;\n\n    img {\n      width: 102px;\n    }\n  }\n"]);return Yn=function(){return n},n}var $n=P.a.div(Yn(),p.largePhone,p.largeTablet),Vn=function(){return r.a.createElement($n,null,r.a.createElement("img",{src:Mn.a,alt:"logo"}),r.a.createElement("img",{src:Fn.a,alt:"logo"}),r.a.createElement("img",{src:Rn.a,alt:"logo"}),r.a.createElement("img",{src:Hn.a,alt:"logo"}),r.a.createElement("img",{src:qn.a,alt:"logo"}),r.a.createElement("img",{src:Qn.a,alt:"logo"}))};function Xn(){var n=Object(T.a)(["\n  background: #fafafa;\n  padding: 44px 30px;\n\n  .no-wrap {\n    white-space: nowrap;\n  }\n\n  .container {\n    padding: 0 30px;\n    display: grid;\n    grid-template-columns: 1fr;\n\n    h1 {\n      font-weight: normal;\n      font-size: 1rem;\n      color: #e6332a;\n      margin-top: 24px;\n      margin-bottom: 0;\n    }\n\n    p {\n      margin: 0;\n      font-size: 0.875rem;\n    }\n  }\n\n  "," {\n    padding: 30px;\n\n    h1 {\n      font-size: 1rem;\n    }\n\n    .container {\n      padding: 0;\n      grid-template-columns: repeat(3, 1fr);\n\n      > .logo {\n        grid-column: 1 / span 3;\n\n        img {\n          width: 108px;\n        }\n      }\n\n      div {\n        padding: 0 15px;\n      }\n    }\n  }\n\n  "," {\n    .container {\n      grid-template-columns: repeat(4, 1fr);\n      max-width: 720px;\n      margin: 0 auto;\n\n      .logo {\n        grid-column: auto;\n        padding: 0 15px;\n\n        img {\n          width: 108px;\n        }\n      }\n    }\n  }\n\n  "," {\n    .container {\n      max-width: 960px;\n    }\n  }\n\n  "," {\n    .container {\n      max-width: 1140px;\n    }\n  }\n"]);return Xn=function(){return n},n}var Zn=P.a.div(Xn(),p.largePhone,p.tablet,p.largeTablet,p.laptop),ne=function(){return r.a.createElement(Zn,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"logo"},r.a.createElement("img",{src:K.a,alt:"logo"})),r.a.createElement("div",null,r.a.createElement("h1",null,"\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e25\u0e07\u0e17\u0e30\u0e40\u0e1a\u0e35\u0e22\u0e19\u0e1b\u0e23\u0e30\u0e0a\u0e32\u0e0a\u0e19"),r.a.createElement("p",null,"\u0e01\u0e32\u0e23\u0e23\u0e31\u0e1a\u0e2a\u0e34\u0e17\u0e18\u0e34 \u0e01\u0e32\u0e23\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19\u0e41\u0e2d\u0e1b\u0e1e\u0e25\u0e34\u0e40\u0e04\u0e0a\u0e31\u0e48\u0e19"," ",r.a.createElement("span",{className:"no-wrap"},"\u201c\u0e40\u0e1b\u0e4b\u0e32\u0e15\u0e31\u0e07\u201d")," \u0e41\u0e25\u0e30"," ",r.a.createElement("span",{className:"no-wrap"},"\u201c\u0e16\u0e38\u0e07\u0e40\u0e07\u0e34\u0e19\u201d")),r.a.createElement("p",null,"\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d \u0e0a\u0e34\u0e21\u0e0a\u0e49\u0e2d\u0e1b\u0e43\u0e0a\u0e49 Call Center by Krungthai \u0e42\u0e17\u0e23.0 2111 1144")),r.a.createElement("div",null,r.a.createElement("h1",null,"\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e25\u0e07\u0e17\u0e30\u0e40\u0e1a\u0e35\u0e22\u0e19\u0e1c\u0e39\u0e49\u0e1b\u0e23\u0e30\u0e01\u0e2d\u0e1a\u0e01\u0e32\u0e23"),r.a.createElement("p",null,"\u0e40\u0e07\u0e37\u0e48\u0e2d\u0e19\u0e44\u0e02\u0e41\u0e25\u0e30\u0e27\u0e34\u0e18\u0e35\u0e01\u0e32\u0e23\u0e40\u0e02\u0e49\u0e32\u0e23\u0e48\u0e27\u0e21\u0e21\u0e32\u0e15\u0e23\u0e01\u0e32\u0e23\u0e2f"),r.a.createElement("p",null,"\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d \u0e42\u0e17\u0e23.0 2270 6400 \u0e01\u0e14 7")),r.a.createElement("div",null,r.a.createElement("h1",null,"\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e40\u0e17\u0e35\u0e48\u0e22\u0e27\u0e0a\u0e34\u0e21\u0e0a\u0e49\u0e2d\u0e1b\u0e43\u0e0a\u0e49"),r.a.createElement("p",null,"\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d \u0e17\u0e17\u0e17."),r.a.createElement("p",null,"\u0e42\u0e17\u0e23 1672"))))};function ee(){var n=Object(T.a)(["\n  padding: 15px 0;\n  background: #213a8f;\n  font-weight: bold;\n\n  "," {\n    padding: 0;\n  }\n\n  .container {\n    padding: 0 30px;\n    display: grid;\n    grid-template-columns: 1fr;\n    max-width: 100%;\n\n    div,\n    a {\n      font-size: 0.75rem;\n      color: #fff;\n      padding: 10px 40px;\n      text-decoration: none;\n      box-sizing: border-box;\n    }\n\n    "," {\n      grid-template-columns: repeat(3, 1fr);\n\n      div {\n        grid-column: 1 / span 2;\n        padding: 10px;\n      }\n\n      a {\n        grid-row: 2;\n        padding: 10px;\n      }\n    }\n\n    "," {\n      grid-template-columns: repeat(4, 1fr);\n      max-width: 720px;\n      margin: 0 auto;\n\n      div,\n      a {\n        padding: 10px;\n        font-size: 0.875rem;\n        grid-column: auto;\n        grid-row: auto;\n        width: 100%;\n      }\n    }\n\n    "," {\n      max-width: 960px;\n    }\n\n    "," {\n      max-width: 1140px;\n    }\n  }\n"]);return ee=function(){return n},n}var te=P.a.div(ee(),p.tablet,p.largePhone,p.tablet,p.largeTablet,p.laptop),ae=function(){return r.a.createElement(te,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",null,"Copyright \xa9 2003-2019"),r.a.createElement("a",{href:"https://regist.\u0e0a\u0e34\u0e21\u0e0a\u0e49\u0e2d\u0e1b\u0e43\u0e0a\u0e49.com/Register/"},"\u0e25\u0e07\u0e17\u0e30\u0e40\u0e1a\u0e35\u0e22\u0e19\u0e40\u0e02\u0e49\u0e32\u0e23\u0e48\u0e27\u0e21\u0e21\u0e32\u0e15\u0e23\u0e01\u0e32\u0e23"),r.a.createElement("a",{href:"https://www2.\u0e0a\u0e34\u0e21\u0e0a\u0e49\u0e2d\u0e1b\u0e43\u0e0a\u0e49.com/howto-register"},"\u0e02\u0e31\u0e49\u0e19\u0e15\u0e2d\u0e19\u0e01\u0e32\u0e23\u0e40\u0e02\u0e49\u0e32\u0e23\u0e48\u0e27\u0e21\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14"),r.a.createElement("a",{href:"https://www2.\u0e0a\u0e34\u0e21\u0e0a\u0e49\u0e2d\u0e1b\u0e43\u0e0a\u0e49.com/thung-ngern-shop-province"},"\u0e23\u0e32\u0e22\u0e0a\u0e37\u0e48\u0e2d\u0e23\u0e49\u0e32\u0e19\u0e04\u0e49\u0e32\u0e17\u0e35\u0e48\u0e40\u0e02\u0e49\u0e32\u0e23\u0e48\u0e27\u0e21\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23")))},re=function(){var n=function(){var n=Object(a.useState)(),e=Object(f.a)(n,2),t=e[0],r=e[1];return Object(a.useEffect)((function(){Object(d.a)(m.a.mark((function n(){var e,t;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,h.a.get("https://panjs.com/ywc.json");case 2:e=n.sent,t=e.data,r(t);case 5:case"end":return n.stop()}}),n)})))()}),[]),t}();return n?r.a.createElement(r.a.Fragment,null,r.a.createElement(k,null,r.a.createElement(a.Suspense,{fallback:r.a.createElement(L,null)},r.a.createElement(Y,{navbarItems:n.navbarItems}),r.a.createElement(un,null),r.a.createElement(R,null,r.a.createElement(fn,{duration:n.duration})),r.a.createElement(En,null),r.a.createElement(R,null,r.a.createElement(jn,{detail:w(n.detail)}),r.a.createElement(Sn,{condition:w(n.condition)}),r.a.createElement(Wn,null),r.a.createElement(Vn,null)),r.a.createElement(ne,null),r.a.createElement(ae,null),r.a.createElement(G,null)))):r.a.createElement(L,null)},ie=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function oe(n,e){navigator.serviceWorker.register(n).then((function(n){n.onupdatefound=function(){var t=n.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}})).catch((function(n){console.error("Error during service worker registration:",n)}))}o.a.render(r.a.createElement(re,null),document.getElementById("root")),function(n){if("serviceWorker"in navigator){if(new URL("/ywc17-homework",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/ywc17-homework","/service-worker.js");ie?(!function(n,e){fetch(n).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(n){n.unregister().then((function(){window.location.reload()}))})):oe(n,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,n),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):oe(e,n)}))}}()},8:function(n,e,t){n.exports=t.p+"static/media/footer.50efe035.webp"}},[[45,1,2]]]);
//# sourceMappingURL=main.1a26b49e.chunk.js.map