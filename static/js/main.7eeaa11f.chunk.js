(this["webpackJsonpslack-clone"]=this["webpackJsonpslack-clone"]||[]).push([[0],{123:function(n,e,t){"use strict";t.r(e);var i,c,o,a,r,s,l,d,j,p,b,x,h,m,u,g,O,f,v,w,y,I,k,S,C=t(2),D=t.n(C),z=t(31),M=t.n(z),A=(t(89),t(6)),B=t(21),N=(t(90),t(82)),R=t(12),T=t(7),F=t(139),P=t(59),U=t.n(P),W=t(61),E=t.n(W),G=t(62),L=t.n(G),V=t(32),J=t(38),q=J.a.initializeApp({apiKey:"AIzaSyBCs7x5TOgTki0Wo3DROqtNLBiD3Pr1D3I",authDomain:"slack-clone-75e38.firebaseapp.com",projectId:"slack-clone-75e38",storageBucket:"slack-clone-75e38.appspot.com",messagingSenderId:"89964186683",appId:"1:89964186683:web:b00e9703382f6033f8a01e"}).firestore(),H=J.a.auth(),K=new J.a.auth.GoogleAuthProvider,Q=t(3),$=function(){var n=Object(V.a)(H),e=Object(B.a)(n,1)[0];return console.log("user is ",e),Object(Q.jsxs)(X,{children:[Object(Q.jsxs)(Y,{children:[Object(Q.jsx)(nn,{onClick:function(){return H.signOut()},src:null===e||void 0===e?void 0:e.photoURL,alt:null===e||void 0===e?void 0:e.displayName}),Object(Q.jsx)(U.a,{})]}),Object(Q.jsxs)(Z,{children:[Object(Q.jsx)(E.a,{}),Object(Q.jsx)("input",{placeholder:"Search"})]}),Object(Q.jsx)(_,{children:Object(Q.jsx)(L.a,{})})]})},X=T.a.div(i||(i=Object(A.a)(["\n  display: flex;\n  position: fixed;\n  width: 100%;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 0;\n  background-color: var(--slack-color);\n  color: white;\n"]))),Y=T.a.div(c||(c=Object(A.a)(["\n  flex: 0.3;\n  display: flex;\n  align-items: center;\n  margin-left: 1.5rem;\n  > .MuiSvgIcon-root {\n    margin-left: auto;\n    margin-right: 2rem;\n  }\n"]))),Z=T.a.div(o||(o=Object(A.a)(["\n  flex: 0.4;\n  opacity: 1;\n  height: 1.8rem;\n  border-radius: 6px;\n  background-color: #421f44;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  padding: 0 2rem;\n  color: gray;\n  border: 1px gray solid;\n\n  > input {\n    background-color: transparent;\n    border: none;\n    text-align: center;\n    color: white;\n    outline: none;\n    width: 100%;\n    height: 80%;\n    min-width: 30vw;\n    margin-left: 0.5rem;\n\n    :focus {\n      background-color: #603a63;\n      border-radius: 2px;\n    }\n  }\n"]))),_=T.a.div(a||(a=Object(A.a)(["\n  flex: 0.3;\n  display: flex;\n  align-items: flex-end;\n  > .MuiSvgIcon-root {\n    margin-left: auto;\n    margin-right: 1.5rem;\n  }\n"]))),nn=Object(T.a)(F.a)(r||(r=Object(A.a)(["\n  cursor: pointer;\n  :hover {\n    opacity: 0.8;\n  }\n"]))),en=t(67),tn=t.n(en),cn=t(68),on=t.n(cn),an=t(36),rn=t(49),sn=Object(rn.b)({name:"app",initialState:{roomId:null},reducers:{enterRoom:function(n,e){n.roomId=e.payload.roomId}}}),ln=sn.actions.enterRoom,dn=function(n){return n.app.roomId},jn=sn.reducer,pn=function(n){var e=n.Icon,t=n.title,i=n.addChannelOption,c=n.id,o=Object(an.b)();return Object(Q.jsxs)(bn,{onClick:i?function(){var n=prompt("Please enter the channel name.");n&&q.collection("rooms").add({name:n})}:function(){c&&o(ln({roomId:c}))},children:[e&&Object(Q.jsx)(e,{fontSize:"small",style:{padding:10}}),e?Object(Q.jsx)("h3",{children:t}):Object(Q.jsxs)(xn,{children:[Object(Q.jsx)("span",{children:"#"}),t]})]})},bn=T.a.div(s||(s=Object(A.a)(["\n  display: flex;\n  font-size: 12px;\n  align-items: center;\n  cursor: pointer;\n\n  :hover {\n    opacity: 0.9;\n    background-color: #340e36;\n  }\n\n  > h3 {\n    font-weight: 500;\n  }\n\n  > h3 > span {\n    padding: 15px;\n  }\n"]))),xn=T.a.h3(l||(l=Object(A.a)(["\n  padding: 10px 0;\n  font-weight: 300;\n"]))),hn=t(69),mn=t.n(hn),un=t(70),gn=t.n(un),On=t(71),fn=t.n(On),vn=t(72),wn=t.n(vn),yn=t(73),In=t.n(yn),kn=t(74),Sn=t.n(kn),Cn=t(75),Dn=t.n(Cn),zn=t(76),Mn=t.n(zn),An=t(77),Bn=t.n(An),Nn=t(78),Rn=t.n(Nn),Tn=t(43),Fn=function(){var n=Object(Tn.a)(q.collection("rooms")),e=Object(B.a)(n,3),t=e[0],i=(e[1],e[2],Object(V.a)(H)),c=Object(B.a)(i,1)[0];return Object(Q.jsxs)(Pn,{children:[Object(Q.jsxs)(Un,{children:[Object(Q.jsxs)(Wn,{children:[Object(Q.jsx)("h2",{children:"ABC HQ"}),Object(Q.jsxs)("h3",{children:[Object(Q.jsx)(tn.a,{}),c.displayName]})]}),Object(Q.jsx)(on.a,{})]}),Object(Q.jsx)(pn,{Icon:mn.a,title:"Threads"}),Object(Q.jsx)(pn,{Icon:gn.a,title:"Mentions & reactions"}),Object(Q.jsx)(pn,{Icon:fn.a,title:"Saved items"}),Object(Q.jsx)(pn,{Icon:wn.a,title:"Channel browser"}),Object(Q.jsx)(pn,{Icon:In.a,title:"People & user groups"}),Object(Q.jsx)(pn,{Icon:Sn.a,title:"Apps"}),Object(Q.jsx)(pn,{Icon:Dn.a,title:"File browser"}),Object(Q.jsx)(pn,{Icon:Mn.a,title:"Show less"}),Object(Q.jsx)("hr",{}),Object(Q.jsx)(pn,{Icon:Bn.a,title:"Channels"}),Object(Q.jsx)("hr",{}),Object(Q.jsx)(pn,{Icon:Rn.a,addChannelOption:!0,title:"Add Channel"}),null===t||void 0===t?void 0:t.docs.map((function(n){return Object(Q.jsx)(pn,{id:n.id,title:n.data().name},n.id)}))]})},Pn=T.a.div(d||(d=Object(A.a)(["\n  color: white;\n  background-color: var(--slack-color);\n  flex: 0.3;\n  margin-top: 60px;\n  border-top: 1px solid #49274b;\n  overflow-y: auto;\n\n  > hr {\n    margin-top: 10px;\n    margin-bottom: 10px;\n    border: 1px solid #49274b;\n  }\n"]))),Un=T.a.div(j||(j=Object(A.a)(["\n  display: flex;\n  border-bottom: 1px solid #49274b;\n  padding: 13px;\n\n  > .MuiSvgIcon-root {\n    padding: 8px;\n    color: #49274b;\n    font-size: 18px;\n    background-color: white;\n    border-radius: 999px;\n  }\n"]))),Wn=T.a.div(p||(p=Object(A.a)(["\n  flex: 1;\n\n  > h2 {\n    font-size: 15px;\n    font-weight: 900;\n    margin-bottom: 5px;\n  }\n\n  > h3 {\n    display: flex;\n    font-size: 13px;\n    font-weight: 400;\n    align-items: center;\n  }\n\n  > h3 > .MuiSvgIcon-root {\n    font-size: 14px;\n    margin-top: 1px;\n    margin-right: 2px;\n    color: green;\n  }\n"]))),En=t(79),Gn=t.n(En),Ln=t(80),Vn=t.n(Ln),Jn=t(138),qn=function(n){var e=n.channelName,t=n.channelId,i=n.chatRef,c=Object(C.useState)(""),o=Object(B.a)(c,2),a=o[0],r=o[1],s=Object(V.a)(H),l=Object(B.a)(s,1)[0];return Object(Q.jsx)(Hn,{children:Object(Q.jsxs)("form",{children:[Object(Q.jsx)("input",{value:a,onChange:function(n){return r(n.target.value)},placeholder:"Message #".concat(e)}),Object(Q.jsx)(Jn.a,{hidden:!0,type:"submit",onClick:function(n){if(n.preventDefault(),!t)return!1;q.collection("rooms").doc(t).collection("messageInputs").add({messageInput:a,timestamp:J.a.firestore.FieldValue.serverTimestamp(),user:l.displayName,userImage:l.photoURL}),i.current.scrollIntoView({behavior:"smooth"}),r("")},children:"SEND"})]})})},Hn=T.a.div(b||(b=Object(A.a)(["\n  border-radius: 20px;\n\n  > form {\n    position: relative;\n    display: flex;\n    justify-content: center;\n  }\n\n  > form > input {\n    position: fixed;\n    bottom: 30px;\n    width: 60%;\n    border: 1px solid gray;\n    border-radius: 3px;\n    padding: 20px;\n    outline: none;\n  }\n\n  > form > button {\n    display: none !important;\n  }\n"]))),Kn=function(n){var e=n.message,t=n.timestamp,i=n.user,c=n.userImage;return Object(Q.jsxs)(Qn,{children:[Object(Q.jsx)("img",{src:c,alt:""}),Object(Q.jsxs)($n,{children:[Object(Q.jsxs)("h4",{children:[i,"",Object(Q.jsx)("span",{children:new Date(null===t||void 0===t?void 0:t.toDate()).toUTCString()})]}),Object(Q.jsx)("p",{children:e})]})]})},Qn=T.a.div(x||(x=Object(A.a)(["\n  display: flex;\n  align-items: center;\n  padding: 20px;\n\n  > img {\n    height: 50px;\n    border-radius: 8px;\n  }\n"]))),$n=T.a.div(h||(h=Object(A.a)(["\n  padding-left: 10px;\n\n  > h4 > span {\n    color: gray;\n    font-weight: 300;\n    margin-left: 4px;\n    font-size: 10px;\n  }\n"]))),Xn=function(){var n=Object(C.useRef)(null),e=Object(an.c)(dn),t=Object(Tn.b)(e&&q.collection("rooms").doc(e)),i=Object(B.a)(t,1)[0],c=Object(Tn.a)(e&&q.collection("rooms").doc(e).collection("messageInputs").orderBy("timestamp","asc")),o=Object(B.a)(c,2),a=o[0],r=o[1];return Object(C.useEffect)((function(){var e;null===n||void 0===n||null===(e=n.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})}),[e,r,a]),Object(Q.jsx)(Yn,{children:i&&a&&Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsxs)(Zn,{children:[Object(Q.jsxs)(_n,{children:[Object(Q.jsx)("h4",{children:Object(Q.jsxs)("strong",{children:["#",null===i||void 0===i?void 0:i.data().name]})}),Object(Q.jsx)(Gn.a,{})]}),Object(Q.jsx)(ne,{children:Object(Q.jsxs)("p",{children:[Object(Q.jsx)(Vn.a,{})," Details"]})})]}),Object(Q.jsxs)(ee,{children:[null===a||void 0===a?void 0:a.docs.map((function(n){var e=n.data(),t=e.messageInput,i=e.timestamp,c=e.user,o=e.userImage;return Object(Q.jsx)(Kn,{message:t,timestamp:i,user:c,userImage:o},n.id)})),Object(Q.jsx)(te,{ref:n})]}),Object(Q.jsx)(qn,{chatRef:n,channelName:null===i||void 0===i?void 0:i.data().name,channelId:e})]})})},Yn=T.a.div(m||(m=Object(A.a)(["\n  flex: 0.7;\n  flex-grow: 1;\n  overflow-y: auto;\n  margin-top: 60px;\n"]))),Zn=T.a.div(u||(u=Object(A.a)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 20px;\n  border-bottom: 1px solid lightgray;\n"]))),_n=T.a.div(g||(g=Object(A.a)(["\n  display: flex;\n  align-items: center;\n\n  > h4 {\n    display: flex;\n    text-transform: lowercase;\n    margin-right: 10px;\n  }\n\n  > h4 > .MuiSvgIcon-root {\n    margin-left: 10px;\n    font-size: 18px;\n  }\n"]))),ne=T.a.div(O||(O=Object(A.a)(["\n  > p {\n    display: flex;\n    align-items: center;\n    font-size: 14px;\n  }\n\n  > p > .MuiSvgIcon-root {\n    margin-right: 5px !important;\n    font-size: 16px;\n  }\n"]))),ee=T.a.div(f||(f=Object(A.a)([""]))),te=T.a.div(v||(v=Object(A.a)(["\n  padding-bottom: 200px;\n"]))),ie=function(){return Object(Q.jsx)(ce,{children:Object(Q.jsxs)(oe,{children:[Object(Q.jsx)("img",{src:"https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"}),Object(Q.jsx)("h1",{children:"Sign in to the ABC Fam"}),Object(Q.jsx)("p",{children:"abc.slack.com"}),Object(Q.jsx)(Jn.a,{onClick:function(n){n.preventDefault(),H.signInWithPopup(K).catch((function(n){return alert(n.message)}))},children:"Sign in with google"})]})})},ce=T.a.div(w||(w=Object(A.a)(["\n  background-color: #f8f8f8;\n  height: 100vh;\n  display: grid;\n  place-items: center;\n"]))),oe=T.a.div(y||(y=Object(A.a)(["\n  padding: 100px;\n  text-align: center;\n  background-color: white;\n  border-radius: 10px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  > img {\n    object-fit: contain;\n    height: 100px;\n    margin-bottom: 40px;\n  }\n  > button {\n    margin-top: 50px;\n    text-transform: inherit !important;\n    background-color: #0a8d48 !important;\n    color: white;\n  }\n"]))),ae=t(81),re=t.n(ae);var se=function(){var n=Object(V.a)(H),e=Object(B.a)(n,2),t=e[0];return e[1]?Object(Q.jsx)(de,{children:Object(Q.jsxs)(je,{children:[Object(Q.jsx)("img",{src:"https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"}),Object(Q.jsx)(re.a,{name:"ball-spin-fade-loader",color:"purple",fadeIn:"none"})]})}):Object(Q.jsx)("div",{className:"App",children:Object(Q.jsx)(N.a,{children:t?Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)($,{}),Object(Q.jsxs)(le,{children:[Object(Q.jsx)(Fn,{}),Object(Q.jsx)(R.c,{children:Object(Q.jsx)(R.a,{path:"/",exact:!0,children:Object(Q.jsx)(Xn,{})})})]})]}):Object(Q.jsx)(ie,{})})})},le=T.a.div(I||(I=Object(A.a)(["\n  display: flex;\n  height: 100vh;\n"]))),de=T.a.div(k||(k=Object(A.a)(["\n  display: grid;\n  place-items: center;\n  height: 100vh;\n  width: 100%;\n"]))),je=T.a.div(S||(S=Object(A.a)(["\n  text-align: center;\n  padding-bottom: 100px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  > img {\n    height: 100px;\n    padding: 20px;\n    margin-bottom: 40px;\n  }\n"]))),pe=Object(rn.a)({reducer:{app:jn}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));M.a.render(Object(Q.jsx)(D.a.StrictMode,{children:Object(Q.jsx)(an.a,{store:pe,children:Object(Q.jsx)(se,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))},89:function(n,e,t){},90:function(n,e,t){}},[[123,1,2]]]);
//# sourceMappingURL=main.7eeaa11f.chunk.js.map