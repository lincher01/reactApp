(this.webpackJsonptestapp=this.webpackJsonptestapp||[]).push([[0],{100:function(e,t,a){e.exports=a(262)},105:function(e,t,a){},12:function(e,t,a){},193:function(e,t,a){e.exports=a.p+"static/media/cat.424279d3.jpg"},194:function(e,t,a){e.exports=a.p+"static/media/elmo.e52c985d.PNG"},195:function(e,t,a){e.exports=a.p+"static/media/lunch.04b61616.jpg"},196:function(e,t,a){e.exports=a.p+"static/media/sands.54b5d462.jpg"},197:function(e,t,a){e.exports=a.p+"static/media/hometown.75fd5803.JPG"},198:function(e,t,a){e.exports=a.p+"static/media/IMG_1557.a09dc278.JPEG"},199:function(e,t,a){e.exports=a.p+"static/media/SBupset.ba6ad2cf.jpg"},200:function(e,t,a){e.exports=a.p+"static/media/secrets.802c522e.JPG"},262:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(26),c=a.n(i),l=(a(105),a(4)),s=a(5),o=a(7),m=a(6),u=(a(12),a(89)),h=a.n(u),p=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"homeBody"},r.a.createElement("div",{className:"homepic"},r.a.createElement("img",{src:h.a,alt:"raccoon"})),r.a.createElement("p",{paddingLeft:"25px"},"When your code finally works and you slowly lift your hands away from the keyboard and stare at the screen in confusion because that definitely should not have worked..."))}}]),a}(n.Component),d=a(19),b=a(90),f=function(e){Object(o.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={width:-1},e}return Object(s.a)(n,[{key:"render",value:function(){var e=[{src:a(193),width:"1",height:"1"},{src:a(194),width:"16",height:"9"},{src:a(195),width:"4",height:"3"},{src:a(196),width:"4",height:"3"},{src:a(197),width:"3",height:"4"},{src:a(198),width:"3",height:"4"},{src:a(199),width:"1",height:"1"},{src:a(200),width:"1",height:"1"}];return r.a.createElement(d.a,null,r.a.createElement(b.a,{photos:e}))}}]),n}(n.Component),v=a(92),g=a.n(v),E=a(49),y=a.n(E),j=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"player-wrapper"},r.a.createElement("div",{className:"vidclass"},r.a.createElement("div",{className:"vrow"},r.a.createElement(y.a,{className:"react-player",url:g.a,controls:!0}),r.a.createElement("p",{className:"caption"},"ECE 153 project using an RFID and Bluetooth to increase door security. I tried to put the entire video but github won't take vide's that are greater than 100MB I guess :("))),r.a.createElement("div",{className:"vidclass"},r.a.createElement("div",{className:"vrow"},r.a.createElement(y.a,{className:"react-player",url:"https://www.youtube.com/watch?v=oJIkBSaGiG0#action=share"}),r.a.createElement("p",{className:"caption"},"a good song :)"))))}}]),a}(n.Component),w=a(93),O=a.n(w),N=a(94),k=a.n(N),C=a(95),x=a.n(C),S=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"linkim"},r.a.createElement("a",{href:"https://www.youtube.com/watch?v=MIhNXrOuX5A&feature=emb_title"},r.a.createElement("img",{src:x.a,alt:"day3"})),r.a.createElement("p",{className:"caption"},"It's only my 1st voluntary cs class out here \xaf\\_(\u30c4)_/\xaf")),r.a.createElement("div",{className:"linkim"},r.a.createElement("a",{href:"https://lincher01.github.io/website/"},r.a.createElement("img",{src:O.a,alt:"p"})),r.a.createElement("p",{className:"caption"},"me everytime bash won't let me push to github because I forgot to pull the updates my friends have made to our project.")),r.a.createElement("div",{className:"linkim"},r.a.createElement("a",{href:"https://sites.google.com/view/front-door-securtiy/"},r.a.createElement("img",{src:k.a,alt:"visual"})),r.a.createElement("p",{className:"caption"},"Website of the ECE 153 project I did with my roommate.")))}}]),a}(n.Component),T=a(96),I=a(27),D=a(38),M=a.n(D),B={apiKey:"AIzaSyDY5IBJmWFz5vC8Jom7M3rs4o7c_lgvgB4",authDomain:"web-2ffa2.firebaseapp.com",databaseURL:"https://web-2ffa2.firebaseio.com"},A=a(50),G=a.n(A),J=a(51);M.a.initializeApp(B);var P=G.a.compile("MMM D YYYY hh:mm A"),L=RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i),R=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={name:"",info:"",message:"",email:"",date:"",perm:"false",items:[],error:{name:"",info:"",message:"",email:""}},e.handleChange=e.handleChange.bind(Object(I.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(I.a)(e)),e}return Object(s.a)(a,[{key:"handleChange",value:function(e){e.preventDefault();var t=e.target,a=t.name,n=t.value,r=this.state.error;switch(a){case"name":r.name=n.length<5||n.length>20?"name needs to be between 5-20 characters":"";break;case"info":r.info=n.length>100?"Intro too long":"";break;case"message":r.message=n.length<15||n.length>500?"Message needs to be 15-500 characters":"";break;case"email":r.email=L.test(n)?"enter Valid email please":""}this.setState(Object(T.a)({error:r},a,n))}},{key:"handleSubmit",value:function(e){if(e.preventDefault(),function(e,t,a){var n=!0;return Object.values(e).forEach((function(e){return e.length>0&&(n=!1)})),0!==t.length&&0!==a||(n=!1),n}(this.state.error,this.state.name,this.state.message)){alert("Submitted!");var t=M.a.database().ref("items"),a=G.a.format(new Date,P).toString(),n={name:this.state.name,info:this.state.info,message:this.state.message,email:this.state.email,perm:this.state.perm,date:a};t.push(n),this.setState({name:"",info:"",message:"",perm:"false",email:"",date:""})}else alert("Oops something went wrong")}},{key:"componentDidMount",value:function(){var e=this;M.a.database().ref("items").on("value",(function(t){var a=t.val(),n=[];for(var r in a)n.push({name:a[r].name,info:a[r].info,message:a[r].message,email:a[r].email,perm:a[r].perm,date:a[r].date});e.setState({items:n})}))}},{key:"render",value:function(){this.state.error;return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("section",{className:"add-item"},r.a.createElement("h1",null,"What's Happening!?"),r.a.createElement(J.a.form,{onSubmit:this.handleSubmit,animate:{y:10},transition:{ease:"easeOut",duration:3}},r.a.createElement("label",null,"Name"),r.a.createElement("input",{required:!0,type:"text",name:"name",onChange:this.handleChange,value:this.state.name}),r.a.createElement("label",null,"Intro*"),r.a.createElement("input",{type:"text",name:"info",onChange:this.handleChange,value:this.state.info}),r.a.createElement("label",null,"Message"),r.a.createElement("input",{required:!0,type:"text",name:"message",onChange:this.handleChange,value:this.state.message}),r.a.createElement("label",null,"Make Public"),r.a.createElement("select",{required:!0,type:"text",name:"perm",onChange:this.handleChange,value:this.state.perm},r.a.createElement("option",{value:"true"},"Yes"),r.a.createElement("option",{value:"false"},"No")),r.a.createElement("label",null,"Email*"),r.a.createElement("input",{type:"text",name:"email",onChange:this.handleChange,value:this.state.email}),r.a.createElement("button",null,"Submit"))),r.a.createElement("section",{className:"display-item"},r.a.createElement("ul",null,this.state.items.map((function(e){if("true"===e.perm)return r.a.createElement(J.a.li,{key:e.id,animate:{x:40},translate:{duration:3}},r.a.createElement("div",{className:"date"},e.date),r.a.createElement("div",{className:"namebio"},r.a.createElement("h1",null,e.name),r.a.createElement("p",null,e.info)),r.a.createElement("p",null,e.message),r.a.createElement("p",null,e.email))}))))))}}]),a}(n.Component),W=a(99),Y=a(97),_=a.n(Y),z="https://www.omdbapi.com/?apikey=858c4cb1&i=",q=["tt0377092","tt0454945","tt0381707","tt6320628","tt1431045","tt2452042","tt0094721","tt1964418","tt1677720","tt3501632","tt1772341","tt0330373","tt0120783","tt3783958","tt0398286","tt3521164"],F=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={mList:[]},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;q.map((function(t){return _.a.get(z+t).then((function(t){var a=t.data,n={title:a.Title,director:a.Director,rating:a.Rating,plot:a.Plot,poster:a.Poster,imdbID:a.imdbID};e.setState((function(e){return{mList:[].concat(Object(W.a)(e.mList),[n])}}))})).catch((function(e){console.log(e)})),console.log("got data "+z+t)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"movie_section"},r.a.createElement(d.b,null,r.a.createElement(d.a,null,this.state.mList.map((function(e){var t="Title: "+e.title+" ~ Director: "+e.director+" ~ Rating: "+e.rating+" ~ Plot: "+e.plot;return r.a.createElement("img",{className:"CARDS",alt:t,key:e.imdbID,src:e.poster})})))))}}]),a}(n.Component),H=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).displayContent=function(){var t=e.props.activeTab;return 1===t?r.a.createElement(p,null):2===t?r.a.createElement(f,null):3===t?r.a.createElement(j,null):4===t?r.a.createElement(S,null):5===t?r.a.createElement(R,null):r.a.createElement(F,null)},e}return Object(s.a)(a,[{key:"render",value:function(){return this.displayContent()}}]),a}(n.Component),V=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).addStyling=function(){return e.props.tab.id===e.props.activeTab?{borderBottom:"1px solid rgb(0, 172, 238)",color:"rgb(0,172,238)"}:{borderBottom:"1px solid rgb(136, 153, 166)",color:"rgb(136, 153, 166)"}},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"tab",style:this.addStyling(),fontFamily:"MS Shell Dlg 2",fontSize:"15px",onClick:this.props.changeTab.bind(this,this.props.tab.id)},r.a.createElement("h2",null,this.props.tab.title))}}]),a}(n.Component),X=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return this.props.tabs.map((function(t){return r.a.createElement(V,{tab:t,changeTab:e.props.changeTab,activeTab:e.props.activeTab})}))}}]),a}(n.Component),$=a(98),K=a.n($),U=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={activeTab:1},e.changeTab=function(t){e.setState({activeTab:t})},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"page"},r.a.createElement("div",{className:"header"}),r.a.createElement("div",{className:"profile"}),r.a.createElement("div",{className:"Name"},r.a.createElement("p",null,"Cher Lin")),r.a.createElement("div",{className:"bio-bar"},r.a.createElement("div",{className:"bio"},r.a.createElement("p",null,"Cell: (651) 431-1904"),r.a.createElement("p",null,"Email: cher@ucsb.edu"),r.a.createElement("p",null,"Santa Barbara, CA"))),r.a.createElement("div",{className:"nav-bar"},r.a.createElement(X,{tabs:[{id:1,title:"Home"},{id:2,title:"Images"},{id:3,title:"Videos"},{id:4,title:"Links"},{id:5,title:"Guests"},{id:6,title:"Movies"}],changeTab:this.changeTab,activeTab:this.state.activeTab})),r.a.createElement("div",{className:"body"},r.a.createElement("div",{className:"main-body"},r.a.createElement(d.b,null,r.a.createElement(H,{activeTab:this.state.activeTab})))),r.a.createElement(K.a,{showAt:"100",style:{color:"white",backgroundColor:"rgb(0,172,238)",fontSize:"14px",fontWeight:"800",borderRadius:"9999px",padding:"15px",cursor:"pointer"}},r.a.createElement("span",null,"Back To Top")))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},89:function(e,t,a){e.exports=a.p+"static/media/raccoon.2ad8dd9c.jpg"},92:function(e,t,a){e.exports=a.p+"static/media/rfid.b514fb00.mp4"},93:function(e,t,a){e.exports=a.p+"static/media/p.f1312b0d.png"},94:function(e,t,a){e.exports=a.p+"static/media/visual.2f35e4e5.JPG"},95:function(e,t,a){e.exports=a.p+"static/media/day3.86fb5a20.jpg"}},[[100,1,2]]]);
//# sourceMappingURL=main.c9346b76.chunk.js.map