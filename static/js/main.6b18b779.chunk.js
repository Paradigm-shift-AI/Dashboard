(this["webpackJsonpparadigm-dashboard"]=this["webpackJsonpparadigm-dashboard"]||[]).push([[0],{133:function(e,t,a){},134:function(e,t,a){},159:function(e,t,a){"use strict";a.r(t);var n=a(2),i=a(0),c=a.n(i),r=a(11),s=a.n(r),o=(a(133),a(59)),l=(a(134),a(107)),d=a(232),j=a(46),b=a(12),x=a(16),h=a(237),p=a(214),m=a(207),g=a(238),u=a(212),O=a(235),f=a(204),v=a(215),y=a(234),w=a(100),S=a.n(w),N=a(55),I=a(205),C=a(206),B=a(96),k=a.n(B);function D(){return Object(n.jsxs)(N.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(n.jsx)(f.a,{color:"inherit",href:"https://material-ui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]})}var F=Object(I.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function L(){var e=F(),t=Object(i.useState)(""),a=Object(x.a)(t,2),c=a[0],r=a[1],s=Object(i.useState)(""),o=Object(x.a)(s,2),l=o[0],d=o[1],j=Object(i.useState)(""),w=Object(x.a)(j,2),I=(w[0],w[1]),B=Object(b.f)();return Object(n.jsxs)(C.a,{component:"main",maxWidth:"xs",children:[Object(n.jsx)(m.a,{}),Object(n.jsxs)("div",{className:e.paper,children:[Object(n.jsx)(h.a,{className:e.avatar,children:Object(n.jsx)(S.a,{})}),Object(n.jsx)(N.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(n.jsxs)("form",{className:e.form,noValidate:!0,children:[Object(n.jsx)(g.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",value:c,onChange:function(e){return r(e.target.value)},autoComplete:"email",autoFocus:!0}),Object(n.jsx)(g.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",value:l,onChange:function(e){return d(e.target.value)},label:"Password",type:"password",id:"password",autoComplete:"current-password"}),Object(n.jsx)(u.a,{control:Object(n.jsx)(O.a,{value:"remember",color:"primary"}),label:"Remember me"}),Object(n.jsx)(p.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:function(e){localStorage.setItem("email",c),e.preventDefault(),k.a.post("http://localhost:5000/api/login",{email:c,password:l}).then((function(e){console.log(e),200==e.status?(I("Signin successful"),B.push("/dashboardstudent")):I("SignUp unsuccessful")})).catch((function(e){console.log(e)}))},children:"Sign In"}),Object(n.jsxs)(v.a,{container:!0,children:[Object(n.jsx)(v.a,{item:!0,xs:!0,children:Object(n.jsx)(f.a,{href:"#",variant:"body2",children:"Forgot password?"})}),Object(n.jsx)(v.a,{item:!0,children:Object(n.jsx)(f.a,{href:"/signup",variant:"body2",children:"Don't have an account? Sign Up"})})]})]})]}),Object(n.jsx)(y.a,{mt:8,children:Object(n.jsx)(D,{})})]})}var T=a(110),R=a(239),W=a(216),A=a(210),P=a(233),z=a.p+"static/media/bookclub.60e3454c.jpg",Q=a.p+"static/media/exam.b9a207ce.svg",H=a.p+"static/media/red-flag.f8ee1ad4.svg";function G(e){var t=e.logo,a=e.label,i=e.count;return Object(n.jsxs)(T.a,{elevation:0,style:{marginLeft:"15px"},children:[Object(n.jsxs)(v.a,{container:!0,direction:"row",alignItems:"end",children:[Object(n.jsx)("img",{src:t,style:{width:"42px",height:"42px"}}),Object(n.jsxs)("p",{style:{fontSize:"24px",fontFamily:"Lato",color:"#505050",margin:"5px",marginLeft:"15px"},children:[" ",i," "]})]}),Object(n.jsxs)("p",{style:{fontSize:"15px",fontFamily:"Lato",fontWeight:"200",opacity:"0.35"},children:[" ",a," "]})]})}function J(e){return Object(n.jsxs)(T.a,{style:{padding:"10px",backgroundColor:"#FAFAFA",marginLeft:"30px",textAlign:"center",borderRadius:"7.5px",alignSelf:"flex-end"},elevation:0,children:[Object(n.jsx)("p",{style:{fontSize:"48px",color:"#505050",fontFamily:"Lato",margin:"10px",marginBottom:"2px"},children:e.count}),Object(n.jsx)("p",{style:{fontSize:"12px",fontFamily:"Lato",fontWeight:"100",color:"#505050",marginTop:"0px"},children:" Attendees "})]})}var M=function(e){var t=Object(i.useState)({label:"Total Question",logo:Q}),a=Object(x.a)(t,2),c=(a[0],a[1],Object(i.useState)({label:"Flagged Question",logo:H})),r=Object(x.a)(c,2);return r[0],r[1],Object(n.jsx)(T.a,{style:{margin:"10px",borderRadius:"7.5px",boxShadow:"0px 2px 4px 0 rgba(0, 0, 0, 0.25)",padding:"10px"},elevation:0,children:Object(n.jsxs)(v.a,{style:{display:"flex",justifyContent:"space-between"},container:!0,direction:"row",alignItems:"center",children:[Object(n.jsxs)(T.a,{elevation:0,children:[Object(n.jsxs)("p",{style:{fontSize:"1.5rem",fontFamily:"Lato",color:"#414141"},children:[" ",e.date," "]}),Object(n.jsxs)(v.a,{container:!0,direction:"row",alignItems:"center",children:[G({logo:Q,label:"Total Question",count:e.totalQuestion}),G({logo:H,label:"flagged Question",count:e.flaggedQuestion})]})]}),J({count:e.attend})]})})};function E(e){return Object(n.jsx)(N.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0,children:e.children})}var q=a(240),U=a(217),Y=a.p+"static/media/brain-blue.9f798787.svg",_=a.p+"static/media/book.8d81fcdf.svg",V=Object(I.a)((function(e){return{fixedHeight:{minheight:720,padding:"50px",width:"80%",marginLeft:"10%"},formControl:{margin:e.spacing(1),minWidth:240},selectEmpty:{marginTop:e.spacing(2)},card:{backgroundImage:"url(".concat(z,")"),color:"white",margin:"20px"},chips:{"& > *":{margin:e.spacing(.5)}},item:{display:"flex",alignItems:"center",flexWrap:"wrap"},imageIcon:{display:"flex",height:"inherit",width:"inherit"},iconRoot:{textAlign:"center",marginRight:"10px"}}}));var X=Object(b.g)((function(e){var t=V(),a=["DBMS","OS"],i=c.a.useState(a[0]),r=Object(x.a)(i,2),s=r[0],o=r[1];return Object(n.jsxs)(T.a,{className:t.fixedHeight,children:[Object(n.jsx)(E,{children:"Dashboard"}),Object(n.jsxs)(v.a,{container:!0,spacing:2,alignItems:"center",style:{marginTop:"30px",marginBottom:"30px"},children:[Object(n.jsx)(v.a,{md:4,children:Object(n.jsxs)(A.a,{variant:"outlined",className:t.formControl,children:[Object(n.jsx)(R.a,{id:"demo-simple-select-outlined-label",children:"Course"}),Object(n.jsx)(P.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:s,onChange:function(e){o(e.target.value)},label:"Course",children:a.map((function(e){return Object(n.jsx)(W.a,{value:e,children:Object(n.jsxs)("div",{className:t.item,children:[Object(n.jsx)(U.a,{classes:{root:t.iconRoot},style:e==s?{visibility:"visible"}:{visibility:"hidden"},children:Object(n.jsx)("img",{className:t.imageIcon,src:_})}),e]})})}))})]})}),Object(n.jsxs)(v.a,{md:8,className:t.chips,children:[["SQL","DBMS","JDBC"].map((function(e){return Object(n.jsx)(q.a,{label:e,variant:"outlined"})})),Object(n.jsx)(p.a,{variant:"outlined",color:"#505050",className:t.button,endIcon:Object(n.jsx)(U.a,{classes:{root:t.iconRoot},children:Object(n.jsx)("img",{className:t.imageIcon,src:Y})}),href:"/plugins/".concat(s),children:"Add Plugins"})]})]}),Object(n.jsx)(v.a,{container:!0,spacing:2,children:[{classname:"MySQL",asked:14,flagged:3,Date:"Wed, 13 Dec 2020",Attendance:"53"},{classname:"Cross Join",asked:15,flagged:3,Date:"Wed, 15 Dec 2020",Attendance:"57"}].map((function(t){return Object(n.jsx)(v.a,{style:{cursor:"pointer"},item:!0,md:6,onClick:function(a){e.history.push("/lectures/".concat(s,"/").concat(t.Date))},children:Object(n.jsx)(M,{date:t.Date,attend:t.Attendance,totalQuestion:t.asked,flaggedQuestion:t.flagged})},t.Date)}))})]})})),K=a(65),Z=a(4),$=a(218),ee=a(219),te=a(213),ae=a(101),ne=a.n(ae),ie=a.p+"static/media/online-education.3c865504.png",ce=Object(I.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(o.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(K.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:720},imageIcon:{display:"flex",height:"inherit",width:"inherit"},iconRoot:{textAlign:"center"}}}));function re(){var e=ce(),t=c.a.useState(!1),a=Object(x.a)(t,2),i=a[0];a[1];return Object(n.jsxs)("div",{children:[Object(n.jsx)(m.a,{}),Object(n.jsx)($.a,{position:"absolute",className:Object(Z.a)(e.appBar,i&&e.appBarShift),children:Object(n.jsxs)(ee.a,{className:e.toolbar,children:[Object(n.jsx)(te.a,{color:"inherit",children:Object(n.jsx)(U.a,{classes:{root:e.iconRoot},fontSize:"large",children:Object(n.jsx)("img",{className:e.imageIcon,src:ie})})}),Object(n.jsx)(N.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:e.title,children:"Paradigm"}),Object(n.jsx)(te.a,{color:"inherit",children:Object(n.jsx)(h.a,{alt:"Remy Sharp",src:""})}),Object(n.jsx)(te.a,{color:"inherit",href:"/",children:Object(n.jsx)(ne.a,{fontSize:"large"})})]})})]})}function se(){return Object(n.jsxs)(N.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(n.jsx)(f.a,{color:"inherit",href:"https://material-ui.com/",children:"Paradigm"})," ",(new Date).getFullYear(),"."]})}var oe=Object(I.a)((function(e){return{root:{display:"flex"},appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)}}}));function le(){var e=oe();return Object(n.jsxs)("div",{className:e.root,children:[Object(n.jsx)(re,{}),Object(n.jsxs)("main",{className:e.content,children:[Object(n.jsx)("div",{className:e.appBarSpacer}),Object(n.jsxs)(C.a,{maxWidth:"lg",className:e.container,children:[Object(n.jsx)(v.a,{container:!0,spacing:3,children:Object(n.jsx)(v.a,{item:!0,xs:12,md:12,lg:12,children:Object(n.jsx)(X,{})})}),Object(n.jsx)(y.a,{pt:4,children:Object(n.jsx)(se,{})})]})]})]})}var de=a(84),je=a(211),be=a(102),xe=a.n(be),he=a(161),pe=a(220),me=a(221),ge=a(223),ue=a(227),Oe=a(226),fe=a(222),ve=a(224),ye=a(225),we=Object(I.a)((function(e){return{root:{display:"flex"},appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},fixedHeight:{minheight:720,padding:"50px",width:"70%",marginLeft:"15%"},card:{margin:"20px",padding:"20px","& > *":{margin:e.spacing(.5)}},list:{width:200,height:230,overflow:"auto"},table:{marginTop:"50px"},button:{marginTop:"30px"}}}));function Se(e,t,a,n,i){return{name:e,calories:t,fat:a,carbs:n,protein:i}}var Ne=[Se("Frozen yoghurt",159,6,24,4),Se("Ice cream sandwich",237,9,37,4.3),Se("Eclair",262,16,24,6),Se("Cupcake",305,3.7,67,4.3),Se("Gingerbread",356,16,49,3.9)];function Ie(){var e=we(),t=c.a.useState(!1),a=Object(x.a)(t,2),i=a[0],r=a[1],s=[0,1,2,3,4,5,6],o=c.a.useState([]),l=Object(x.a)(o,2),d=l[0],j=l[1],b=function(e){return function(){var t=d.indexOf(e),a=Object(de.a)(d);-1===t?a.push(e):a.splice(t,1),j(a),console.log(a)}},h=c.a.useState([]),m=Object(x.a)(h,2),u=m[0],f=m[1],w=function(e){return function(){var t=u.indexOf(e),a=Object(de.a)(u);-1===t?a.push(e):a.splice(t,1),f(a),console.log(a)}};return Object(n.jsxs)("div",{className:e.root,children:[Object(n.jsx)(re,{}),Object(n.jsxs)("main",{className:e.content,children:[Object(n.jsx)("div",{className:e.appBarSpacer}),Object(n.jsxs)(C.a,{maxWidth:"lg",className:e.container,children:[Object(n.jsx)(v.a,{container:!0,spacing:3,children:Object(n.jsx)(v.a,{item:!0,xs:12,md:12,lg:12,children:Object(n.jsxs)(T.a,{className:e.fixedHeight,children:[Object(n.jsx)(E,{children:"Admin Dashboard"}),Object(n.jsx)(p.a,{variant:"contained",color:"primary",size:"large",className:e.button,endIcon:Object(n.jsx)(xe.a,{}),onClick:function(){return r(!0)},children:"Create"}),i?Object(n.jsx)(T.a,{variant:"outlined",className:e.card,children:Object(n.jsxs)(v.a,{container:!0,spacing:3,children:[Object(n.jsx)(v.a,{item:!0,xs:12,md:4,lg:4,children:Object(n.jsx)(g.a,{id:"outlined-basic",label:"Course Name",variant:"outlined"})}),Object(n.jsx)(v.a,{item:!0,xs:12,md:4,lg:4,children:Object(n.jsxs)(T.a,{variant:"outlined",children:[Object(n.jsx)(N.a,{align:"center",children:"Teacher"}),Object(n.jsxs)(je.a,{dense:!0,component:"div",role:"list",className:e.list,children:[s.map((function(e){var t="transfer-list-item-".concat(e,"-label");return Object(n.jsxs)(he.a,{role:"listitem",button:!0,onClick:b(e),children:[Object(n.jsx)(pe.a,{children:Object(n.jsx)(O.a,{checked:-1!==d.indexOf(e),tabIndex:-1,disableRipple:!0,inputProps:{"aria-labelledby":t}})}),Object(n.jsx)(me.a,{id:t,primary:"List item ".concat(e+1)})]},e)})),Object(n.jsx)(he.a,{})]})]})}),Object(n.jsxs)(v.a,{item:!0,xs:12,md:4,lg:4,children:[Object(n.jsxs)(T.a,{variant:"outlined",children:[Object(n.jsx)(N.a,{align:"center",children:"Student"}),Object(n.jsxs)(je.a,{dense:!0,component:"div",role:"list",className:e.list,children:[s.map((function(e){var t="transfer-list-item-".concat(e,"-label");return Object(n.jsxs)(he.a,{role:"listitem",button:!0,onClick:w(e),children:[Object(n.jsx)(pe.a,{children:Object(n.jsx)(O.a,{checked:-1!==u.indexOf(e),tabIndex:-1,disableRipple:!0,inputProps:{"aria-labelledby":t}})}),Object(n.jsx)(me.a,{id:t,primary:"List item ".concat(e+1)})]},e)})),Object(n.jsx)(he.a,{})]})]}),Object(n.jsx)(p.a,{variant:"contained",color:"primary",className:e.button,onClick:function(){return r(!0)},children:"Submit"})]})]})}):Object(n.jsx)("div",{}),Object(n.jsx)(fe.a,{children:Object(n.jsxs)(ge.a,{className:e.table,"aria-label":"simple table",children:[Object(n.jsx)(ve.a,{children:Object(n.jsxs)(ye.a,{children:[Object(n.jsx)(Oe.a,{children:"Dessert (100g serving)"}),Object(n.jsx)(Oe.a,{align:"right",children:"Calories"}),Object(n.jsx)(Oe.a,{align:"right",children:"Fat\xa0(g)"}),Object(n.jsx)(Oe.a,{align:"right",children:"Carbs\xa0(g)"}),Object(n.jsx)(Oe.a,{align:"right",children:"Protein\xa0(g)"})]})}),Object(n.jsx)(ue.a,{children:Ne.map((function(e){return Object(n.jsxs)(ye.a,{children:[Object(n.jsx)(Oe.a,{component:"th",scope:"row",children:e.name}),Object(n.jsx)(Oe.a,{align:"right",children:e.calories}),Object(n.jsx)(Oe.a,{align:"right",children:e.fat}),Object(n.jsx)(Oe.a,{align:"right",children:e.carbs}),Object(n.jsx)(Oe.a,{align:"right",children:e.protein})]},e.name)}))})]})})]})})}),Object(n.jsx)(y.a,{pt:4,children:Object(n.jsx)(se,{})})]})]})]})}var Ce=a(236),Be=a(228),ke=a(243),De=a(103),Fe=a.n(De),Le=a(104),Te=a.n(Le),Re=Object(I.a)((function(e){return{card:{margin:"20px",padding:"20px","& > *":{margin:e.spacing(.5)}}}}));var We=Object(b.g)((function(e){var t=Re(),a=c.a.useState(""),i=Object(x.a)(a,2),r=i[0];return i[1],Object(n.jsx)(T.a,{variant:"outlined",className:t.card,children:Object(n.jsxs)(v.a,{container:!0,spacing:3,children:[Object(n.jsxs)(v.a,{item:!0,xs:8,md:8,lg:8,children:[Object(n.jsx)(E,{children:"Ques:"}),Object(n.jsx)(N.a,{children:"MongoDB is an example of SQL?"}),Object(n.jsx)("br",{}),Object(n.jsx)(E,{children:"Ans:"}),Object(n.jsx)(N.a,{children:"False"})]}),Object(n.jsxs)(v.a,{item:!0,xs:4,md:4,lg:4,children:[Object(n.jsx)("div",{style:{display:"flex"},children:Object(n.jsxs)(ke.a,{value:r,exclusive:!0,"aria-label":"flagged",style:{float:"right",marginRight:"30px"},children:[Object(n.jsx)(Be.a,{value:"true","aria-label":"right",children:Object(n.jsx)(Fe.a,{style:{color:"green"}})}),Object(n.jsx)(Be.a,{value:"false","aria-label":"wrong",children:Object(n.jsx)(Te.a,{style:{color:"red"}})})]})}),Object(n.jsx)("br",{}),Object(n.jsxs)(N.a,{children:["No. of correct: 5",Object(n.jsx)("br",{}),"No. of incorrect: 6"]})]})]})})})),Ae=a(229),Pe=Object(I.a)((function(e){return{fixedHeight:{minheight:720,padding:"50px",width:"80%",marginLeft:"10%"},card:{margin:"20px",padding:"20px","& > *":{margin:e.spacing(.5)}},item:{display:"flex",alignItems:"center",flexWrap:"wrap"},queshead:{padding:"1%"}}}));var ze=Object(b.g)((function(e){var t=Pe();return Object(n.jsxs)(T.a,{className:t.fixedHeight,children:[Object(n.jsxs)(Ce.a,{"aria-label":"breadcrumb",children:[Object(n.jsx)(f.a,{component:"h2",variant:"h6",color:"textPrimary",onClick:function(){return e.history.push("/dashboard")},children:e.match.params.course}),Object(n.jsx)(N.a,{component:"h2",variant:"h6",color:"inherit",children:e.match.params.date})]}),Object(n.jsx)(T.a,{variant:"outlined",className:t.card}),Object(n.jsxs)(v.a,{container:!0,spacing:3,children:[Object(n.jsx)(v.a,{item:!0,xs:12,md:6,lg:6,children:Object(n.jsxs)(T.a,{variant:"outlined",className:t.card,children:[Object(n.jsx)(E,{children:"Weak Topics:"}),["Inner Join"].map((function(e){return Object(n.jsx)(q.a,{label:e,variant:"outlined"})}))]})}),Object(n.jsx)(v.a,{item:!0,xs:12,md:6,lg:6,children:Object(n.jsxs)(T.a,{variant:"outlined",className:t.card,children:[Object(n.jsx)(E,{children:"Strong Topics:"}),["Union","Joins","Cross Joins"].map((function(e){return Object(n.jsx)(q.a,{label:e,variant:"outlined"})}))]})})]}),Object(n.jsxs)(v.a,{container:!0,className:t.queshead,children:[Object(n.jsx)(v.a,{item:!0,xs:12,md:2,lg:2,children:"Flagged Questions"}),Object(n.jsx)(v.a,{item:!0,xs:12,md:10,lg:10,style:{marginTop:"10px"},children:Object(n.jsx)(Ae.a,{})})]}),Object(n.jsx)(We,{})]})})),Qe=Object(I.a)((function(e){return{root:{display:"flex"},appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)}}}));function He(){var e=Qe();return Object(n.jsxs)("div",{className:e.root,children:[Object(n.jsx)(re,{}),Object(n.jsxs)("main",{className:e.content,children:[Object(n.jsx)("div",{className:e.appBarSpacer}),Object(n.jsxs)(C.a,{maxWidth:"lg",className:e.container,children:[Object(n.jsx)(v.a,{container:!0,spacing:3,children:Object(n.jsx)(v.a,{item:!0,xs:12,md:12,lg:12,children:Object(n.jsx)(ze,{})})}),Object(n.jsx)(y.a,{pt:4,children:Object(n.jsx)(se,{})})]})]})]})}var Ge=a(111),Je=a(106),Me=a.n(Je),Ee=a(230),qe=a(231),Ue=a(105),Ye=a.n(Ue),_e=a.p+"static/media/cloud.71a61f98.svg",Ve=a.p+"static/media/account.7f73584e.svg",Xe=Object(I.a)({root:{marginTop:"5%"},media:{height:140},button:{textTransform:"none"},imageIcon:{display:"flex",height:"inherit",width:"inherit"},iconRoot:{textAlign:"center",marginRight:"10px",display:"inline-block"},iconContent:{display:"flex",alignItems:"center",flexWrap:"wrap"}});function Ke(e){var t=Xe();return Object(n.jsx)(Ee.a,{className:t.root,elevation:2,children:Object(n.jsxs)(qe.a,{children:[Object(n.jsxs)(v.a,{container:!0,spacing:3,children:[Object(n.jsxs)(v.a,{item:!0,md:10,lg:10,children:[Object(n.jsx)(N.a,{variant:"h5",component:"h2",style:{display:"inline-block",marginBottom:"25px"},children:e.name}),Object(n.jsx)(N.a,{variant:"body1",color:"textSecondary",style:{display:"inline-block",marginLeft:"10px"},children:e.version})]}),Object(n.jsxs)(v.a,{item:!0,md:2,lg:2,className:t.iconContent,children:[Object(n.jsx)(U.a,{classes:{root:t.iconRoot},children:Object(n.jsx)("img",{className:t.imageIcon,src:_e})}),Object(n.jsx)(N.a,{variant:"body1",children:e.downloads})]})]}),Object(n.jsx)(N.a,{variant:"h6",color:"textSecondary",component:"p",style:{marginBottom:"25px"},children:e.content}),Object(n.jsxs)(v.a,{container:!0,spacing:3,children:[Object(n.jsxs)(v.a,{item:!0,md:10,lg:10,className:t.iconContent,children:[Object(n.jsx)(U.a,{classes:{root:t.iconRoot},children:Object(n.jsx)("img",{className:t.imageIcon,src:Ve})}),Object(n.jsx)(N.a,{variant:"body1",color:"textSecondary",children:e.creator})]}),Object(n.jsx)(v.a,{item:!0,md:2,lg:2,children:Object(n.jsx)(p.a,{variant:"contained",color:"#505050",className:t.button,startIcon:Object(n.jsx)(Ye.a,{}),disableElevation:!0,children:"Install"})})]})]})})}var Ze=Object(I.a)((function(e){return{root:{display:"flex"},appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},fixedHeight:{minheight:720,padding:"50px",width:"80%",marginLeft:"10%"},heading:{display:"flex",alignItems:"center",flexWrap:"wrap",fontSize:32,"& > *":{margin:e.spacing(.5)}},imageIcon:{display:"flex",height:"40px",width:"40px"},iconRoot:{textAlign:"center",height:"40px",width:"40px"},search:{padding:"2px 4px",display:"flex",alignItems:"center",width:"100%",marginTop:"30px"},input:{marginLeft:e.spacing(1),flex:1},iconButton:{padding:10},divider:{height:28,margin:4}}}));function $e(){var e=Ze();return Object(n.jsxs)("div",{className:e.root,children:[Object(n.jsx)(re,{}),Object(n.jsxs)("main",{className:e.content,children:[Object(n.jsx)("div",{className:e.appBarSpacer}),Object(n.jsxs)(C.a,{maxWidth:"lg",className:e.container,children:[Object(n.jsx)(v.a,{container:!0,spacing:3,children:Object(n.jsx)(v.a,{item:!0,xs:12,md:12,lg:12,children:Object(n.jsxs)(T.a,{className:e.fixedHeight,children:[Object(n.jsxs)("div",{className:e.heading,children:[Object(n.jsx)(U.a,{classes:{root:e.iconRoot},children:Object(n.jsx)("img",{className:e.imageIcon,src:Y})}),Object(n.jsx)("span",{children:"Install Plugins"})]}),Object(n.jsxs)(T.a,{component:"form",variant:"outlined",className:e.search,children:[Object(n.jsx)(Ge.a,{className:e.input,placeholder:"Search plugins",inputProps:{"aria-label":"search google maps"}}),Object(n.jsx)(te.a,{type:"submit",className:e.iconButton,"aria-label":"search",children:Object(n.jsx)(Me.a,{})})]}),[{name:"Android Development",version:"2.0.0",downloads:"1220",content:"Most detailed glossary for android development, with RDF mappings for 90% index words.",creator:"vedangj044",install_url:""}].map((function(e){return Object(n.jsx)(Ke,{name:e.name,version:e.version,downloads:e.downloads,content:e.content,creator:e.creator,install_url:e.install_url})}))]})})}),Object(n.jsx)(y.a,{pt:4,children:Object(n.jsx)(se,{})})]})]})]})}var et=function(){var e=Object(l.a)({typography:{fontFamily:"Lato",fontSize:14}});return Object(n.jsx)(d.a,{theme:e,children:Object(n.jsx)(j.a,{children:Object(n.jsxs)(b.c,{children:[Object(n.jsx)(b.a,{path:"/dashboard",children:Object(n.jsx)(le,{})}),Object(n.jsx)(b.a,{path:"/admin",children:Object(n.jsx)(Ie,{})}),Object(n.jsx)(b.a,{path:"/lectures/:course/:date",component:function(e){return Object(n.jsx)(He,Object(o.a)({},e))}}),Object(n.jsx)(b.a,{path:"/plugins/:course",component:function(e){return Object(n.jsx)($e,Object(o.a)({},e))}}),Object(n.jsx)(b.a,{path:"/",children:Object(n.jsx)(L,{})})]})})})},tt=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,244)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),i(e),c(e),r(e)}))};s.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(et,{})}),document.getElementById("root")),tt()}},[[159,1,2]]]);
//# sourceMappingURL=main.6b18b779.chunk.js.map