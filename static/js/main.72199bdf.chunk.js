(this.webpackJsonpmedicalreactappv0=this.webpackJsonpmedicalreactappv0||[]).push([[0],{173:function(e,t,a){e.exports=a.p+"static/media/melmed.8ffcfdae.png"},180:function(e,t,a){e.exports=a(358)},185:function(e,t,a){},186:function(e,t,a){},358:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(13),i=a.n(r),o=(a(185),a(186),a(3)),c=a(4),s=a(5),m=a(6),u=a(369),d=a(362),p=a(363),h=a(361),b=a(365),E=a(364),f=a(360),g=a(366),v=function(){var e=new Date;return e.getMonth()+1+"/"+e.getDate()+"/"+e.getFullYear()},y=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={reportStartDate:v()},n}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement(b.a,{style:{width:"260px"},readonly:!0,name:"reportStartDate",className:"form-control",placeholder:"Report Start Date",defaultValue:this.state.reportStartDate})}}]),a}(l.a.Component);function O(e,t){console.log(e,t)}l.a.Component;var j=a(161),k=(a(47),function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){this.props.myProp;return l.a.createElement("div",{style:{margin:"8px"},className:"item-1"},l.a.createElement(h.a,null,l.a.createElement("label",null,this.props.label)),l.a.createElement(b.a,{style:{width:"260px"},name:this.props.name,id:this.props.id,placeholder:this.props.placeholder,onChange:this.props.onChange,onBlur:this.props.onBlur,value:this.props.value}))}}]),a}(l.a.Component)),x=E.a.Option,w=(l.a.Component,function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{style:{paddingLeft:"15px"},className:"item-1"},l.a.createElement("div",{style:{paddingTop:"8px"}},l.a.createElement("label",null,"Date of Birth:")),l.a.createElement(j.a,Object.assign({style:{width:"260px"},mask:"11/11/1111",placeholder:"MM/DD/YYYY",size:"11"},this.props,{formatCharacters:{W:{validate:function(e){return/\w/.test(e)},transform:function(e){return e.toUpperCase()}}}})))}}]),a}(l.a.Component)),C=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{style:{margin:"1px",paddingTop:"6px",width:"260px"},className:"item-1"},l.a.createElement(h.a,null,l.a.createElement("label",null,this.props.label)),l.a.createElement(y,null))}}]),a}(l.a.Component),D=a(367),N=a(1),S=a.n(N),I=(l.a.Component,function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={value:1},e.onChange=function(t){console.log("radio checked",t.target.value),e.setState({value:t.target.value})},e}return Object(c.a)(a,[{key:"render",value:function(){this.props.myProp;return l.a.createElement("div",{style:{paddingLeft:"20px"},className:"item-1"},l.a.createElement("div",{style:{paddingTop:"6px"}},l.a.createElement("label",null,this.props.label)),l.a.createElement(h.a,null,l.a.createElement(D.a.Group,{style:{paddingTop:"7px"},onChange:this.onChange,value:this.state.value},l.a.createElement(D.a,{value:1},this.props.a),l.a.createElement(D.a,{value:2},this.props.b))))}}]),a}(l.a.Component)),P=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={value:1},e.onChange=function(t){console.log("radio checked",t.target.value),e.setState({value:t.target.value})},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props,t=e.name;e.label;return l.a.createElement(p.a.Item,{name:this.props.name,className:function(e){return e%2==0?S()("blue-radiobutton"):null}(t),style:{background:"",width:"100%"}},l.a.createElement(D.a.Group,{onChange:this.onChange,value:this.state.value},l.a.createElement(D.a,{value:1},"0"),l.a.createElement(D.a,{value:2},"1"),l.a.createElement(D.a,{value:3},"2"),l.a.createElement(D.a,{value:4},"3")),l.a.createElement("label",{style:{marginLeft:"15px"}},this.props.label))}}]),a}(l.a.Component),A=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement(f.a,null,l.a.createElement(p.a.Item,{name:this.props.name},l.a.createElement("h3",null,this.props.label),l.a.createElement("div",{id:"textarea",contentEditable:"true"})))}}]),a}(l.a.Component),F=a(175),G=a(368),L=E.a.Option,T=0,B=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={items:[],name:""},n.onNameChange=function(e){n.setState({name:e.target.value})},n.addItem=function(){console.log("addItem");var e=n.state,t=e.items,a=e.name;n.setState({items:[].concat(Object(F.a)(t),[a||"New item ".concat(T++)]),name:""})},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.items,n=t.name,r=this.props,i=(r.myProp,r.arrayOfData.map((function(e){return l.a.createElement(L,{key:e.id,value:e.id},e.name)})));return l.a.createElement("div",{style:{paddingLeft:"9px"},className:"item-1"},l.a.createElement(f.a,null,l.a.createElement("div",{style:{paddingTop:"6px"}},l.a.createElement("label",null," ",this.props.label," ")),l.a.createElement(E.a,{style:{width:"260px",paddingTop:"1px"},placeholder:"Click here",dropdownRender:function(t){return l.a.createElement("div",null,t,l.a.createElement(d.a,{style:{margin:"4px 0"}}),l.a.createElement("div",{style:{display:"flex",flexWrap:"nowrap",padding:8}},l.a.createElement(b.a,{style:{flex:"auto"},value:n,onChange:e.onNameChange}),l.a.createElement("a",{style:{flex:"none",padding:"8px",display:"block",cursor:"pointer"},onClick:e.addItem},l.a.createElement(G.a,null)," Add item")))}},i,a.map((function(e){return l.a.createElement(L,{key:e},e)})))))}}]),a}(l.a.Component),R=[{id:"1",name:"Pre-K"},{id:"2",name:"Kindergarten"},{id:"3",name:"1st Grade"},{id:"4",name:"2nd Grade"},{id:"5",name:"3rd Grade"},{id:"6",name:"4th Grade"},{id:"7",name:"5th Grade"},{id:"8",name:"6th Grade"},{id:"9",name:"7th Grade"},{id:"10",name:"8th Grade"},{id:"11",name:"Freshman"},{id:"12",name:"Sophomore"},{id:"13",name:"Junior"},{id:"14",name:"Senior"},{id:"15",name:"College"},{id:"16",name:"Working"}],Y=[{id:"1",name:"Mother"},{id:"2",name:"Father"},{id:"3",name:"Parents"},{id:"4",name:"Legal Guardian"}],H=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(p.a,{name:"FormDev"},l.a.createElement("h2",{style:{textAlign:"center"}},"Developmental Consultation"),l.a.createElement("div",{className:"container"},l.a.createElement(k,{label:"Name of Child: ",placeholder:"Enter name of child",name:"nameOfChild"}),l.a.createElement(k,{label:"Person Completing the Form ",placeholder:"Enter name",name:"personCompleting"}),l.a.createElement(C,{label:"Date:"}),l.a.createElement(w,{label:"Date of Birth:"})),l.a.createElement("div",{className:"container"},l.a.createElement(k,{label:"Age: ",placeholder:"Enter Age",name:"age"}),l.a.createElement(B,{label:"Grade: ",arrayOfData:R}),l.a.createElement(k,{label:"School: ",placeholder:"Enter school",name:"school"}),l.a.createElement(k,{label:"PCP: ",placeholder:"Enter Primary care provider",name:"pcp"})),l.a.createElement("div",{className:"container-half"},l.a.createElement(B,{label:"Relationship to Child?",arrayOfData:Y}),l.a.createElement(k,{label:"Accompanied by: ",placeholder:"Enter name",name:"accompaniedBy"})),l.a.createElement(I,{label:"Are you the legal guardian?",a:"Y",b:"N"}),l.a.createElement("h1",null,"I. History"),l.a.createElement(A,{label:"A. What is your chief concern/current diagnosis?",placeholder:"Enter details here",name:"chiefConcern"})))}}]),a}(l.a.Component),q=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"form-sym"},l.a.createElement("div",null,l.a.createElement("h2",{style:{textAlign:"center"}},"Symptom Checklist Parent (Vanderbilt Modified Form)"),l.a.createElement("p",null,"Please rate each symptom by selecting the number that best describes the symptoms or severity of challenge."),l.a.createElement("h3",null,"Frequency Code: 0 = Never, 1 = Occasionally, 2 = Often, 3 = Very Often"),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"container-v"},l.a.createElement(P,{label:"Fails to give attention to details or makes careless mistakes",name:1}),l.a.createElement(P,{label:"Has difficulty sustaining attention in tasks",name:2}),l.a.createElement(P,{label:"Does not seem to listen when spoken to directly",name:3}),l.a.createElement(P,{label:"Difficulty following instructions and fails to complete assigned tasks",name:4}),l.a.createElement(P,{label:"Has difficulty organizing tasks",name:5}),l.a.createElement(P,{label:"Avoids or dislikes tasks that require sustained mental effort",name:6}),l.a.createElement(P,{label:"Loses things necessary for tasks",name:7}),l.a.createElement(P,{label:"Is easily distracted by extraneous stimuli",name:8}),l.a.createElement(P,{label:"Is forgetful in daily activities",name:9}),l.a.createElement(P,{label:"Fidgets with hands or feet or squirms in seat",name:10}),l.a.createElement(P,{label:"Difficulty remaining seated when expected",name:11}),l.a.createElement(P,{label:"Runs about or climbs excessively at inappropriate times",name:12}),l.a.createElement(P,{label:"Has difficulty playing quietly",name:13}),l.a.createElement(P,{label:"Is 'on the go' or often acts as if 'driven by a motor'",name:14}),l.a.createElement(P,{label:"Talks excessively",name:15}),l.a.createElement(P,{label:"Blurts out answers before questions complete",name:16}),l.a.createElement(P,{label:"Has difficulty awaiting turn",name:17}),l.a.createElement(P,{label:"Interrupts or intrudes on others",name:18}),l.a.createElement(P,{label:"Difficulty with homework completion",name:19}),l.a.createElement(P,{label:"Problematic school performance",name:20}),l.a.createElement(P,{label:"Difficulty in social situations with peers",name:21}),l.a.createElement(P,{label:"Difficulty managing anger or disappointment",name:22}),l.a.createElement(P,{label:"Oppositional with parents",name:23}),l.a.createElement(P,{label:"Aggressive verbally",name:24}),l.a.createElement(P,{label:"Aggressive physically",name:25}),l.a.createElement(P,{label:"Mood changes quickly and drastically",name:26}),l.a.createElement(P,{label:"Less social with friends, looks dull or flat",name:27})),l.a.createElement("div",{className:"container-v"},l.a.createElement(P,{label:"Is tired during the day",name:28}),l.a.createElement(P,{label:"Is dull, flat, \u201closs of spirit\u201d not him or herself",name:29}),l.a.createElement(P,{label:"Is worried or anxious about things",name:30}),l.a.createElement(P,{label:"Is sad, depressed, low mood, tearful",name:31}),l.a.createElement(P,{label:"Is irritated easily by things or crabby feeling",name:32}),l.a.createElement(P,{label:"Reacts emotionally i.e. yelling, slamming doors",name:33}),l.a.createElement(P,{label:"Tics or movements, twitches, jerks or noises",name:34}),l.a.createElement(P,{label:"Habits such as nail biting or skin picking",name:35}),l.a.createElement(P,{label:"Decreased appetite",name:36}),l.a.createElement(P,{label:"Difficulty falling asleep",name:37}))),l.a.createElement(d.a,null)))}}]),a}(l.a.Component),z=a(64),M=a.n(z),W=a(170),J=a(171),V=a.n(J),K=a(62),U=a(172),X=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).buttonStatesEnum=Object.freeze({READY:"Export to PDF",LOADING:"Exporting PDF",FAILED:"PDF Export Failed. Retry?"}),n.state={buttonState:n.buttonStatesEnum.READY},n}return Object(c.a)(a,[{key:"printDocument",value:function(){var e=Object(W.a)(M.a.mark((function e(t,a){var n,l,r,i=this;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({buttonState:this.buttonStatesEnum.LOADING}),n=new U("p","mm"),l=M.a.mark((function e(t){var l;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=document.getElementById(a[t]),e.next=3,V()(l,{scrollX:0,scrollY:-window.scrollY}).then((function(e){var a=e.toDataURL("image/png"),l=0,r=210*e.height/e.width,i=r;for(t>0&&n.addPage(),n.addImage(a,"PNG",0,l,210,r+15),i-=295;i>=0;)l=i-r,n.addPage(),n.addImage(a,"PNG",0,l,210,r+15),i-=295})).catch((function(e){console.log(e),i.setState({buttonState:i.buttonStatesEnum.FAILED})}));case 3:case"end":return e.stop()}}),e)})),r=0;case 4:if(!(r<a.length)){e.next=9;break}return e.delegateYield(l(r),"t0",6);case 6:r++,e.next=4;break;case 9:try{n.save(t+".pdf"),this.setState({buttonState:this.buttonStatesEnum.READY})}catch(o){console.log(o),this.setState({buttonState:this.buttonStatesEnum.FAILED})}case 10:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.props,a=t.pdfName,n=t.divIdsToPrint,r=this.state.buttonState;return l.a.createElement("div",null,l.a.createElement(K.a,{size:"large",type:"primary",loading:r===this.buttonStatesEnum.LOADING,danger:r===this.buttonStatesEnum.FAILED,onClick:function(){return e.printDocument(a,n)}},r))}}]),a}(n.Component),Z=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.divIdsToPrint;return l.a.createElement("div",null,l.a.createElement("div",{className:"centered"},"You are now finished with the form."),l.a.createElement("div",{style:{paddingBottom:"20px"},className:"centered"},"Please click below to submit and export."),l.a.createElement("div",{style:{paddingBottom:"20px",fontSize:"30px",fontColor:"black"},className:"centered"},"Please make your your browser as large as possible before exporting."),l.a.createElement("div",{style:{paddingBottom:"50px"},className:"centered"},l.a.createElement(X,{divIdsToPrint:e,pdfName:"melmed-forms"})))}}]),a}(l.a.Component),$=a(173),Q=a.n($),_=u.a.Header,ee=u.a.Footer,te=u.a.Content,ae=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={current:0},n}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement(u.a,null,l.a.createElement("div",{id:"page-1-to-pdf"},l.a.createElement(_,{className:"header",style:{zIndex:1}},l.a.createElement("div",null,l.a.createElement("img",{className:"header-image",src:Q.a,alt:""}))),l.a.createElement(te,null,l.a.createElement("div",{className:"site-layout-background",style:{paddingLeft:80,paddingTop:40,paddingRight:80,paddingBottom:5,minHeight:380}},l.a.createElement(H,null),l.a.createElement(d.a,null)))),l.a.createElement(te,null,l.a.createElement("div",{className:"site-layout-background",style:{paddingLeft:80,paddingTop:40,paddingRight:80,paddingBottom:50,minHeight:380},id:"page-2-to-pdf"},l.a.createElement(q,null),l.a.createElement("div",{style:{textAlign:"center"}},"4848 E. Cactus Rd. Ste. #940, Scottsdale, AZ 85254 | Phone (480) 443-0050 | Fax (480) 443-4018 | Toll Free 877-587-1770"))),l.a.createElement(ee,null,l.a.createElement(Z,{divIdsToPrint:["page-1-to-pdf","page-2-to-pdf"]})))}}]),a}(l.a.Component);var ne=function(){return l.a.createElement("div",null,l.a.createElement(ae,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},47:function(e,t,a){}},[[180,1,2]]]);
//# sourceMappingURL=main.72199bdf.chunk.js.map