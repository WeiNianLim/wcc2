(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,a){"use strict";a.r(t);var n,o,l,r,i,c=a(0),m=a.n(c),s=a(12),p=a.n(s),d=(a(87),a(14)),h=a(15),g=a(17),u=a(16),b=a(18),y=a(9),E=a(4),f=a(71),x=Object(f.a)({palette:{primary:{light:"white",main:"#66FCF1",dark:"#45A29E"},secondary:{light:"#C5C6C7",main:"#566a84",dark:"#0B0C10"}}}),w=a(127),k=a(126),j=a(51),v=a(125),O=function(e){function t(){return Object(d.a)(this,t),Object(g.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return m.a.createElement("section",{style:{marginTop:"180px",paddingTop:"25px",paddingBottom:"25px",textAlign:"center",boxShadow:"inset -1px 11px 8px -12px rgba(32,77,75,1)"}},m.a.createElement(v.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},m.a.createElement(v.a,{item:!0},m.a.createElement(k.a,{href:"mailto:weinianlim26@gmail.com"},m.a.createElement("i",{class:"im im-mail",style:{color:x.palette.secondary.light}}))),m.a.createElement(v.a,{item:!0},m.a.createElement(k.a,{href:"https://www.linkedin.com/in/williamwnl/",target:"_blank"},m.a.createElement("i",{class:"im im-linkedin",style:{color:x.palette.secondary.light}}))),m.a.createElement(v.a,{item:!0},m.a.createElement(k.a,{href:"https://github.com/WeiNianLim",target:"_blank"},m.a.createElement("i",{class:"im im-github",style:{color:x.palette.secondary.light}})))),m.a.createElement(j.a,{variant:"subtitle1",style:{marginTop:"5px",fontFamily:"Roboto",fontWeight:"400",color:x.palette.secondary.light}},"Designed and built by William Lim"))}}]),t}(c.Component),R=a(128),W={contactButtonRoot:{borderWidth:2,borderColor:x.palette.primary.main,color:x.palette.primary.main,padding:"15px 30px"},divider:{margin:"10px 0 0 0",height:3,width:"80px",backgroundColor:x.palette.primary.main},button:{margin:x.spacing(1),"&:hover":{fontWeight:"600",color:x.palette.primary.main}},buttonLabel:{textTransform:"capitalize"},main:(n={paddingRight:"100px",paddingLeft:"100px"},Object(y.a)(n,x.breakpoints.down("md"),{paddingRight:"50px",paddingLeft:"50px"}),Object(y.a)(n,x.breakpoints.down("sm"),{paddingRight:"25px",paddingLeft:"25px"}),n)},F=function(e){function t(){return Object(d.a)(this,t),Object(g.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.width;return m.a.createElement("section",{id:"contact",style:{marginTop:"100px",paddingTop:"100px"}},m.a.createElement(v.a,{container:!0,direction:"column",justify:"center",alignItems:"center"},m.a.createElement(v.a,{item:!0},m.a.createElement(j.a,{variant:Object(w.b)("sm",a)?"h2":"h3",style:{marginTop:"10px",textAlign:"center",fontFamily:"Roboto",fontWeight:"500",color:x.palette.primary.light}},"Let's Get In Touch!")),m.a.createElement(v.a,{item:!0},m.a.createElement(R.a,{variant:"inset",className:t.divider})),m.a.createElement(v.a,{item:!0},m.a.createElement(j.a,{variant:"h6",style:{maxWidth:"700px",textAlign:"center",marginTop:"50px",fontFamily:"Roboto",fontWeight:"400",color:x.palette.secondary.main}},"I am currently looking for new existing opportunities, whether it is for a position or project or just to say hi, feel free to shoot me an email")),m.a.createElement(v.a,{item:!0},m.a.createElement(k.a,{variant:"outlined",className:t.button,classes:{root:t.contactButtonRoot,label:t.buttonLabel},color:"theme.palette.primary.main",style:{marginTop:"50px",marginLeft:"0px"},href:"mailto:weinianlim26@gmail.com",target:"_blank"},"Say Hi"))))}}]),t}(c.Component),C=Object(w.a)()(Object(E.a)(W)(F)),L=a(129),T=a(130),S={divider:{margin:"10px 0 0 0",height:3,width:"80px",backgroundColor:x.palette.primary.main},button:{margin:x.spacing(1),"&:hover":{fontWeight:"600",color:x.palette.primary.main}},main:(o={paddingRight:"100px",paddingLeft:"100px"},Object(y.a)(o,x.breakpoints.down("md"),{paddingRight:"50px",paddingLeft:"50px"}),Object(y.a)(o,x.breakpoints.down("sm"),{paddingRight:"25px",paddingLeft:"25px"}),o)},M=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(g.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={openEMF:!1,openFM:!1,emfList:["1","2","3","4","5","6"],fmList:["ma1","ma2","ma3","ma4"]},a.handleOpenDialog=function(e){"emf"===e?a.setState({openEMF:!0}):a.setState({openFM:!0})},a.handleCloseDialog=function(){a.setState({openEMF:!1,openFM:!1})},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.width,o=window.location.href;return m.a.createElement("section",{id:"work",style:{margin:"50px auto 0 auto",paddingTop:"30px",maxWidth:"1000px"}},m.a.createElement(j.a,{variant:"h4",style:{marginTop:"10px",fontFamily:"Roboto",fontWeight:"500",color:x.palette.secondary.light}},"A Glance At My Projects"),m.a.createElement(R.a,{variant:"inset",className:a.divider,style:{marginBottom:"50px"}}),m.a.createElement(v.a,{container:!0,spacing:4},m.a.createElement(v.a,{item:!0,xs:12,sm:5},m.a.createElement(k.a,{onClick:function(){return e.handleOpenDialog("emf")}},m.a.createElement("img",{src:o.includes("http://localhost:3000/")?"/images/wa.png":"https://weinianlim.github.io/wcc2/images/wa.png",style:{margin:"50px auto 0 auto",width:"100%",height:"auto",maxWidth:"250px",display:"block"}}))),m.a.createElement(v.a,{item:!0,xs:12,sm:7},m.a.createElement(j.a,{variant:"h5",style:{marginTop:"10px",fontFamily:"Roboto",fontWeight:"500",color:x.palette.secondary.light}},"Enjoy My Food"),m.a.createElement(j.a,{variant:"h6",style:{marginTop:"20px",fontFamily:"Roboto",fontWeight:"400",color:x.palette.secondary.main}},"A web app built with React, Node.js, Express and MongoDB, a platform where people can sell their food products")),Object(w.b)("sm",n)?m.a.createElement(m.a.Fragment,null,m.a.createElement(v.a,{item:!0,xs:12,sm:7},m.a.createElement(j.a,{variant:"h5",style:{marginTop:"10px",fontFamily:"Roboto",fontWeight:"500",color:x.palette.secondary.light}},"Fun Math"),m.a.createElement(j.a,{variant:"h6",style:{marginTop:"20px",fontFamily:"Roboto",fontWeight:"400",color:x.palette.secondary.main}},"An android app built with AndEngine, an education app that teaches kids to count better")),m.a.createElement(v.a,{item:!0,xs:12,sm:5},m.a.createElement(k.a,{onClick:function(){return e.handleOpenDialog("fm")}},m.a.createElement("img",{src:o.includes("http://localhost:3000/")?"/images/ma.png":"https://weinianlim.github.io/wcc2/images/ma.png",style:{margin:"50px auto 0 auto",width:"100%",height:"auto",maxWidth:"250px",display:"block"}})))):m.a.createElement(m.a.Fragment,null,m.a.createElement(v.a,{item:!0,xs:12,sm:5},m.a.createElement(k.a,{onClick:function(){return e.handleOpenDialog("fm")}},m.a.createElement("img",{src:o.includes("http://localhost:3000/")?"/images/ma.png":"https://weinianlim.github.io/wcc2/images/ma.png",style:{margin:"50px auto 0 auto",width:"100%",height:"auto",maxWidth:"250px",display:"block"}}))),m.a.createElement(v.a,{item:!0,xs:12,sm:7},m.a.createElement(j.a,{variant:"h5",style:{marginTop:"10px",fontFamily:"Roboto",fontWeight:"500",color:x.palette.secondary.light}},"Fun Math"),m.a.createElement(j.a,{variant:"h6",style:{marginTop:"20px",fontFamily:"Roboto",fontWeight:"400",color:x.palette.secondary.main}},"An Android App built with AndEngine, an education app that teaches kids to count better")))),m.a.createElement(L.a,{fullWidth:!0,maxWidth:Object(w.b)("sm",n)?"md":"xl",open:this.state.openEMF,onClose:this.handleCloseDialog,scroll:"paper"},m.a.createElement(T.a,null,this.state.emfList.map(function(e){return m.a.createElement("img",{src:o.includes("http://localhost:3000/")?"/images/".concat(e,".png"):"https://weinianlim.github.io/wcc2/images/".concat(e,".png"),style:{marginTop:"25px",marginBottom:"25px",width:"100%",height:"auto"}})}))),m.a.createElement(L.a,{fullWidth:!0,maxWidth:Object(w.b)("sm",n)?"md":"xl",open:this.state.openFM,onClose:this.handleCloseDialog,scroll:"paper"},m.a.createElement(T.a,null,this.state.fmList.map(function(e){return m.a.createElement("img",{src:o.includes("http://localhost:3000/")?"/images/".concat(e,".png"):"https://weinianlim.github.io/wcc2/images/".concat(e,".png"),style:{marginTop:"25px",marginBottom:"25px",width:"100%",height:"auto"}})}))))}}]),t}(c.Component),B=Object(w.a)()(Object(E.a)(S)(M)),N=a(131),D=a(132),A=a(7),I=a.n(A),H=a(133),P=a(134),U={divider:{margin:"10px 0 0 0",height:3,width:"80px",backgroundColor:x.palette.primary.main},main:(l={paddingRight:"100px",paddingLeft:"100px"},Object(y.a)(l,x.breakpoints.down("md"),{paddingRight:"50px",paddingLeft:"50px"}),Object(y.a)(l,x.breakpoints.down("sm"),{paddingRight:"25px",paddingLeft:"25px"}),l)},_=function(e){function t(){return Object(d.a)(this,t),Object(g.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes;e.width;return m.a.createElement("section",{id:"experience",style:{marginTop:"100px",paddingTop:"100px",paddingBottom:"70px",marginBottom:"50px"}},m.a.createElement(j.a,{variant:"h4",style:{marginTop:"10px",fontFamily:"Roboto",fontWeight:"500",color:x.palette.secondary.light}},"Places I've worked at"),m.a.createElement(R.a,{variant:"inset",className:t.divider,style:{marginBottom:"50px"}}),m.a.createElement(v.a,{container:!0,spacing:4},m.a.createElement(v.a,{item:!0,xs:12,md:6},m.a.createElement(j.a,{variant:"h6",style:{marginTop:"10px",fontFamily:"Roboto",fontWeight:"500",color:x.palette.secondary.light}},"Full Stack Developer @ Porton Health Corp"),m.a.createElement(N.a,null,m.a.createElement(D.a,null,m.a.createElement(H.a,null,m.a.createElement(I.a,{style:{color:x.palette.primary.dark}})),m.a.createElement(P.a,{style:{fontFamily:"Roboto",fontWeight:"500",color:x.palette.secondary.main}},"Developed and maintained software features in Porton Health web app using React, ES6, HTML and CSS")),m.a.createElement(D.a,null,m.a.createElement(H.a,null,m.a.createElement(I.a,{style:{color:x.palette.primary.dark}})),m.a.createElement(P.a,{style:{fontFamily:"Roboto",fontWeight:"500",color:x.palette.secondary.main}},"Worked closely with other developers to ensure thoughtful and coherent user experience across Porton\u2019s web app")),m.a.createElement(D.a,null,m.a.createElement(H.a,null,m.a.createElement(I.a,{style:{color:x.palette.primary.dark}})),m.a.createElement(P.a,{style:{fontFamily:"Roboto",fontWeight:"500",color:x.palette.secondary.main}},"Proposed, redesigned and built a responsive blog section using Material-UI, which helped improve user traffic by 50%")),m.a.createElement(D.a,null,m.a.createElement(H.a,null,m.a.createElement(I.a,{style:{color:x.palette.primary.dark}})),m.a.createElement(P.a,{style:{fontFamily:"Roboto",fontWeight:"500",color:x.palette.secondary.main}},"Implemented OSCAR EMR integration with Portion\u2019s web app which increased potential customers by 300%")),m.a.createElement(D.a,null,m.a.createElement(H.a,null,m.a.createElement(I.a,{style:{color:x.palette.primary.dark}})),m.a.createElement(P.a,{style:{fontFamily:"Roboto",fontWeight:"500",color:x.palette.secondary.main}},"Tested Web App in various browser and devices to ensure cross-browser compatibility and mobile responsiveness")))),m.a.createElement(v.a,{item:!0,xs:12,md:6},m.a.createElement(j.a,{variant:"h6",style:{marginTop:"10px",fontFamily:"Roboto",fontWeight:"500",color:x.palette.secondary.light}},"Software Engineer @ Clarius Mobile Health"),m.a.createElement(N.a,null,m.a.createElement(D.a,null,m.a.createElement(H.a,null,m.a.createElement(I.a,{style:{color:x.palette.primary.dark}})),m.a.createElement(P.a,{style:{fontFamily:"Roboto",fontWeight:"500",color:x.palette.secondary.main}},"Architected and developed Google Cast feature in Clarius cross platform mobile app in Qt and Java")),m.a.createElement(D.a,null,m.a.createElement(H.a,null,m.a.createElement(I.a,{style:{color:x.palette.primary.dark}})),m.a.createElement(P.a,{style:{fontFamily:"Roboto",fontWeight:"500",color:x.palette.secondary.main}},"Researched and built Speech Recognition feature with CMUSphinx as an online/offline speech control for Clarius wireless portable ultrasound probe")),m.a.createElement(D.a,null,m.a.createElement(H.a,null,m.a.createElement(I.a,{style:{color:x.palette.primary.dark}})),m.a.createElement(P.a,{style:{fontFamily:"Roboto",fontWeight:"500",color:x.palette.secondary.main}},"Maintained software functionality periodically to ensure the reproducibility of the software within Linux system")),m.a.createElement(D.a,null,m.a.createElement(H.a,null,m.a.createElement(I.a,{style:{color:x.palette.primary.dark}})),m.a.createElement(P.a,{style:{fontFamily:"Roboto",fontWeight:"500",color:x.palette.secondary.main}},"Implemented and shipped WiFi-Direct autoconnect feature which allowed devices to connect to wireless ultrasound probe seamlessly"))))))}}]),t}(c.Component),J=Object(w.a)()(Object(E.a)(U)(_)),z={divider:{margin:"10px 0 0 0",height:3,width:"80px",backgroundColor:x.palette.primary.main},main:(r={paddingRight:"100px",paddingLeft:"100px"},Object(y.a)(r,x.breakpoints.down("md"),{paddingRight:"50px",paddingLeft:"50px"}),Object(y.a)(r,x.breakpoints.down("sm"),{paddingRight:"25px",paddingLeft:"25px"}),r)},G=function(e){function t(){return Object(d.a)(this,t),Object(g.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.width,n=window.location.href;return m.a.createElement("section",{id:"aboutMe",style:{margin:"100px auto 0 auto",paddingTop:"100px",maxWidth:"1000px"}},m.a.createElement(j.a,{variant:"h4",style:{marginTop:"10px",fontFamily:"Roboto",fontWeight:"500",color:x.palette.secondary.light}},"About Me"),m.a.createElement(R.a,{variant:"inset",className:t.divider}),m.a.createElement(v.a,{container:!0,spacing:3},m.a.createElement(v.a,{item:!0,xs:12,sm:8},m.a.createElement(j.a,{variant:"h6",style:{marginTop:"50px",fontFamily:"Roboto",fontWeight:"400",color:x.palette.secondary.main}},"Hi there, I'm William! I am a software engineer located in Vancouver, BC.",Object(w.b)("sm",a)&&m.a.createElement("br",null),"I enjoy building exceptional websites and web application that has ",Object(w.b)("sm",a)&&m.a.createElement("br",null),"awesome user-interface."),m.a.createElement(j.a,{variant:"h6",style:{marginTop:"20px",fontFamily:"Roboto",fontWeight:"400",color:x.palette.secondary.main}},"I am currently a Full Stack Developer at Porton Health Corp, ",Object(w.b)("sm",a)&&m.a.createElement("br",null),"a vancouver based startup that provides telehealth platform."),m.a.createElement(j.a,{variant:"h6",style:{marginTop:"20px",fontFamily:"Roboto",fontWeight:"400",color:x.palette.secondary.main}},"Here are some of the Technologies that I am working with daily,"),m.a.createElement(v.a,{container:!0,spacing:3},Object(w.b)("sm",a)?m.a.createElement(m.a.Fragment,null,m.a.createElement(v.a,{item:!0,xs:12,sm:6},m.a.createElement(N.a,null,m.a.createElement(D.a,null,m.a.createElement(H.a,null,m.a.createElement(I.a,{style:{color:x.palette.primary.dark}})),m.a.createElement(P.a,{style:{fontFamily:"Roboto",fontWeight:"500",color:x.palette.secondary.main}},"Javascript(ES5 & ES6)")),m.a.createElement(D.a,null,m.a.createElement(H.a,null,m.a.createElement(I.a,{style:{color:x.palette.primary.dark}})),m.a.createElement(P.a,{style:{fontFamily:"Roboto",fontWeight:"500",color:x.palette.secondary.main}},"React")),m.a.createElement(D.a,null,m.a.createElement(H.a,null,m.a.createElement(I.a,{style:{color:x.palette.primary.dark}})),m.a.createElement(P.a,{style:{fontFamily:"Roboto",fontWeight:"500",color:x.palette.secondary.main}},"Material-UI")))),m.a.createElement(v.a,{item:!0,xs:12,sm:6},m.a.createElement(N.a,null,m.a.createElement(D.a,null,m.a.createElement(H.a,null,m.a.createElement(I.a,{style:{color:x.palette.primary.dark}})),m.a.createElement(P.a,{style:{fontFamily:"Roboto",fontWeight:"500",color:x.palette.secondary.main}},"HTML & CSS")),m.a.createElement(D.a,null,m.a.createElement(H.a,null,m.a.createElement(I.a,{style:{color:x.palette.primary.dark}})),m.a.createElement(P.a,{style:{fontFamily:"Roboto",fontWeight:"500",color:x.palette.secondary.main}},"Node.js")),m.a.createElement(D.a,null,m.a.createElement(H.a,null,m.a.createElement(I.a,{style:{color:x.palette.primary.dark}})),m.a.createElement(P.a,{style:{fontFamily:"Roboto",fontWeight:"500",color:x.palette.secondary.main}},"Material-UI"))))):m.a.createElement(v.a,{item:!0,xs:!0},m.a.createElement(N.a,null,m.a.createElement(D.a,null,m.a.createElement(H.a,null,m.a.createElement(I.a,{style:{color:x.palette.primary.dark}})),m.a.createElement(P.a,{style:{fontFamily:"Roboto",fontWeight:"500",color:x.palette.secondary.main}},"Javascript(ES5 & ES6)")),m.a.createElement(D.a,null,m.a.createElement(H.a,null,m.a.createElement(I.a,{style:{color:x.palette.primary.dark}})),m.a.createElement(P.a,{style:{fontFamily:"Roboto",fontWeight:"500",color:x.palette.secondary.main}},"React")),m.a.createElement(D.a,null,m.a.createElement(H.a,null,m.a.createElement(I.a,{style:{color:x.palette.primary.dark}})),m.a.createElement(P.a,{style:{fontFamily:"Roboto",fontWeight:"500",color:x.palette.secondary.main}},"Material-UI")),m.a.createElement(D.a,null,m.a.createElement(H.a,null,m.a.createElement(I.a,{style:{color:x.palette.primary.dark}})),m.a.createElement(P.a,{style:{fontFamily:"Roboto",fontWeight:"500",color:x.palette.secondary.main}},"HTML & CSS")),m.a.createElement(D.a,null,m.a.createElement(H.a,null,m.a.createElement(I.a,{style:{color:x.palette.primary.dark}})),m.a.createElement(P.a,{style:{fontFamily:"Roboto",fontWeight:"500",color:x.palette.secondary.main}},"Node.js")),m.a.createElement(D.a,null,m.a.createElement(H.a,null,m.a.createElement(I.a,{style:{color:x.palette.primary.dark}})),m.a.createElement(P.a,{style:{fontFamily:"Roboto",fontWeight:"500",color:x.palette.secondary.main}},"Material-UI")))))),Object(w.b)("sm",a)?m.a.createElement(v.a,{item:!0,xs:12,sm:4},m.a.createElement("img",{src:n.includes("http://localhost:3000/")?"/images/profile.jpg":"https://weinianlim.github.io/wcc2/images/profile.jpg",style:{margin:"50px auto 0 auto",borderRadius:"10px",width:"100%",height:"auto",maxWidth:"250px",display:"block"}})):m.a.createElement(v.a,{item:!0,xs:12,sm:4,alignItems:"center",container:!0},m.a.createElement("img",{src:n.includes("http://localhost:3000/")?"/images/profile.jpg":"https://weinianlim.github.io/wcc2/images/profile.jpg",style:{margin:"50px auto 0 auto",borderRadius:"10px",width:"100%",height:"auto",maxWidth:"250px",display:"block"}}))))}}]),t}(c.Component),V=Object(w.a)()(Object(E.a)(z)(G)),q=a(136),Q=a(137),Y=a(138),$=a(70),K=a.n($),X=a(139),Z=a(105),ee=a(135),te={appBar:{backgroundColor:x.palette.secondary.dark,boxShadow:"0px 1px 1px #de1dde",width:"100%",right:0,left:0},menuButton:{display:"flex",color:x.palette.secondary.light},button:{margin:x.spacing(1),"&:hover":{fontWeight:"600",color:x.palette.primary.main}},buttonRoot:{color:x.palette.secondary.light},drawerButtonRoot:{color:x.palette.secondary.main},buttonLabel:{textTransform:"capitalize"},grow:{flexGrow:1},main:(i={paddingRight:"100px",paddingLeft:"100px"},Object(y.a)(i,x.breakpoints.down("md"),{paddingRight:"50px",paddingLeft:"50px"}),Object(y.a)(i,x.breakpoints.down("sm"),{paddingRight:"25px",paddingLeft:"25px"}),i),anchorTag:{textDecoration:"none",color:x.palette.secondary.light,paddingLeft:10,paddingRight:10,"&:hover":{fontWeight:"600",color:x.palette.primary.main}},drawer:{backgroundColor:x.palette.secondary.dark}};function ae(e){var t=e.children,a=e.window,n=Object(ee.a)({target:a?a():void 0});return m.a.createElement(Z.a,{appear:!1,direction:"down",in:!n},t)}var ne,oe,le=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(g.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={open:!1,backgroundShadow:"none"},a.handleDrawerOpen=function(){a.setState({open:!0})},a.handleDrawerClose=function(){a.setState({open:!1})},a.handleScroll=function(e){window.pageYOffset>200?a.setState({backgroundShadow:"inset 0px -7px 11px -10px rgba(32,77,75,1)"}):a.setState({backgroundShadow:"none"})},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.width,n=window.location.href;return m.a.createElement(m.a.Fragment,null,m.a.createElement(ae,this.props,m.a.createElement(q.a,{className:t.appBar,style:{boxShadow:this.state.backgroundShadow}},Object(w.b)("sm",a)?m.a.createElement(Q.a,null,m.a.createElement("a",{href:"#landing",className:t.anchorTag},m.a.createElement("img",{src:n.includes("http://localhost:3000/")?"/images/logo.png":"https://weinianlim.github.io/wcc2/images/logo.png",style:{width:"auto",maxHeight:"45px"}})),m.a.createElement("div",{className:t.grow}),m.a.createElement(k.a,{className:t.button,classes:{root:t.buttonRoot,label:t.buttonLabel},href:"#aboutMe"},"About"),m.a.createElement(k.a,{className:t.button,classes:{root:t.buttonRoot,label:t.buttonLabel},href:"#experience"},"Experience"),m.a.createElement(k.a,{className:t.button,classes:{root:t.buttonRoot,label:t.buttonLabel},href:"#work"},"Work"),m.a.createElement(k.a,{className:t.button,classes:{root:t.buttonRoot,label:t.buttonLabel},href:"#contact"},"Contact"),m.a.createElement(k.a,{className:t.button,classes:{root:t.buttonRoot,label:t.buttonLabel},href:n.includes("http://localhost:3000/")?"/images/resume.pdf":"https://weinianlim.github.io/wcc2/images/resume.pdf",target:"_blank"},"Resume")):m.a.createElement(Q.a,null,m.a.createElement("img",{src:n.includes("http://localhost:3000/")?"/images/logo.png":"https://weinianlim.github.io/wcc2/images/logo.png",style:{width:"auto",maxHeight:"45px"}}),m.a.createElement("div",{className:t.grow}),m.a.createElement(Y.a,{className:t.menuButton,onClick:this.handleDrawerOpen},m.a.createElement(K.a,null))))),m.a.createElement(X.a,{classes:{root:t.drawer},open:this.state.open,onClose:this.handleDrawerClose,anchor:"right"},m.a.createElement(N.a,null,m.a.createElement(D.a,null,m.a.createElement(k.a,{className:t.button,classes:{root:t.drawerButtonRoot,label:t.buttonLabel},href:"#aboutMe",onClick:this.handleDrawerClose},"About")),m.a.createElement(D.a,null,m.a.createElement(k.a,{className:t.button,classes:{root:t.drawerButtonRoot,label:t.buttonLabel},href:"#experience",onClick:this.handleDrawerClose},"Experience")),m.a.createElement(D.a,null,m.a.createElement(k.a,{className:t.button,classes:{root:t.drawerButtonRoot,label:t.buttonLabel},href:"#work",onClick:this.handleDrawerClose},"Work")),m.a.createElement(D.a,null,m.a.createElement(k.a,{className:t.button,classes:{root:t.drawerButtonRoot,label:t.buttonLabel},href:"#contact",onClick:this.handleDrawerClose},"Contact")),m.a.createElement(D.a,null,m.a.createElement(k.a,{className:t.button,classes:{root:t.drawerButtonRoot,label:t.buttonLabel},href:n.includes("http://localhost:3000/")?"/images/resume.pdf":"https://weinianlim.github.io/wcc2/images/resume.pdf",target:"_blank",onClick:this.handleDrawerClose},"Resume")))))}}]),t}(c.Component),re=Object(w.a)()(Object(E.a)(te)(le)),ie={contactButtonRoot:{borderWidth:2,borderColor:x.palette.primary.main,color:x.palette.primary.main,padding:"15px 30px"},button:{margin:x.spacing(1),"&:hover":{fontWeight:"600",color:x.palette.primary.main}},buttonLabel:{textTransform:"capitalize"},main:(ne={paddingRight:"100px",paddingLeft:"100px"},Object(y.a)(ne,x.breakpoints.down("md"),{paddingRight:"50px",paddingLeft:"50px"}),Object(y.a)(ne,x.breakpoints.down("sm"),{paddingRight:"25px",paddingLeft:"25px"}),ne)},ce=function(e){function t(){return Object(d.a)(this,t),Object(g.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.width;window.location.href;return m.a.createElement("section",{id:"landing",style:{paddingTop:"150px"}},m.a.createElement(j.a,{variant:Object(w.b)("sm",a)?"h1":"h3",style:{fontFamily:"Roboto",fontWeight:"500",color:x.palette.primary.main}},"William Lim"),m.a.createElement(j.a,{variant:Object(w.b)("sm",a)?"h1":"h3",style:{marginTop:"10px",fontFamily:"Roboto",fontWeight:"450",color:x.palette.secondary.light}},"I build things for the Internet"),m.a.createElement(j.a,{variant:"h6",style:{marginTop:"50px",fontFamily:"Roboto",fontWeight:"400",color:x.palette.secondary.main}},"I am a software engineer based in Vancouver, BC specializing in ",Object(w.b)("sm",a)&&m.a.createElement("br",null),"building exceptional, responsive and high quality ",Object(w.b)("sm",a)&&m.a.createElement("br",null),"Websites and Web Applications"),m.a.createElement(k.a,{variant:"outlined",className:t.button,classes:{root:t.contactButtonRoot,label:t.buttonLabel},color:"theme.palette.primary.main",style:{marginTop:"50px",marginLeft:"0px"},href:"mailto:weinianlim26@gmail.com",target:"_blank"},"Let's talk"))}}]),t}(c.Component),me=Object(w.a)()(Object(E.a)(ie)(ce)),se={main:(oe={paddingRight:"100px",paddingLeft:"100px"},Object(y.a)(oe,x.breakpoints.down("md"),{paddingRight:"50px",paddingLeft:"50px"}),Object(y.a)(oe,x.breakpoints.down("sm"),{paddingRight:"25px",paddingLeft:"25px"}),oe)},pe=function(e){function t(){return Object(d.a)(this,t),Object(g.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props.classes;return m.a.createElement("div",{style:{background:x.palette.secondary.dark,margin:"0"}},m.a.createElement(re,null),m.a.createElement("main",{className:e.main},m.a.createElement(me,null),m.a.createElement(V,null),m.a.createElement(J,null),m.a.createElement(B,null),m.a.createElement(C,null)),m.a.createElement(O,null))}}]),t}(c.Component),de=Object(w.a)()(Object(E.a)(se)(pe));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));p.a.render(m.a.createElement(de,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},82:function(e,t,a){e.exports=a(101)},87:function(e,t,a){}},[[82,1,2]]]);
//# sourceMappingURL=main.71d8cf27.chunk.js.map