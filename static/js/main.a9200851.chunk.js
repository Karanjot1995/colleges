(this.webpackJsonpcolleges=this.webpackJsonpcolleges||[]).push([[0],[,,,,,,,,,,,,,,function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){"use strict";t.r(s);var c=t(0),n=t(1),a=t.n(n),l=t(8),i=t.n(l),r=(t(14),t(7)),j=t(2),o=t(3),d=t(5),h=t(4),b=(t(15),t(16),t(17),function(e){Object(d.a)(t,e);var s=Object(h.a)(t);function t(){return Object(j.a)(this,t),s.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){var e=this.props,s=e.college;e.position;return Object(c.jsx)("div",{id:"tile",children:Object(c.jsxs)("div",{className:"width-50 tile",children:[Object(c.jsxs)("div",{className:"image-container flex",style:{background:"linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('images/".concat(s.image,"')")},children:[s.promoted?Object(c.jsx)("div",{className:"promoted text-white",children:Object(c.jsx)("p",{children:"PROMOTED"})}):"",Object(c.jsxs)("div",{className:"rating text-white font-small",children:[Object(c.jsxs)("p",{className:"",children:[Object(c.jsx)("span",{className:"",children:s.rating}),"/5"]}),Object(c.jsx)("p",{children:s.rating_remarks})]}),Object(c.jsxs)("div",{className:"image-bottom text-white flex",children:[Object(c.jsx)("div",{className:"tags flex",children:s.tags.map((function(e){return Object(c.jsx)("div",{className:"tag",children:Object(c.jsx)("p",{className:"font-small",children:e})})}))}),Object(c.jsx)("div",{children:Object(c.jsxs)("p",{className:"ranking font-small",children:["#",s.ranking]})})]})]}),Object(c.jsxs)("div",{className:"college-info flex",children:[Object(c.jsxs)("div",{className:"description",children:[Object(c.jsxs)("div",{className:"college-name-rating flex",children:[Object(c.jsx)("h3",{className:"college-name text-black",children:s.college_name}),Object(c.jsxs)("div",{className:"star-ratings-css",children:[Object(c.jsxs)("div",{className:"star-ratings-css-top",style:{width:"".concat(20*s.rating,"%")},children:[Object(c.jsx)("span",{children:"\u2605"}),Object(c.jsx)("span",{children:"\u2605"}),Object(c.jsx)("span",{children:"\u2605"}),Object(c.jsx)("span",{children:"\u2605"}),Object(c.jsx)("span",{children:"\u2605"})]}),Object(c.jsxs)("div",{className:"star-ratings-css-bottom",children:[Object(c.jsx)("span",{children:"\u2605"}),Object(c.jsx)("span",{children:"\u2605"}),Object(c.jsx)("span",{children:"\u2605"}),Object(c.jsx)("span",{children:"\u2605"}),Object(c.jsx)("span",{children:"\u2605"})]})]})]}),Object(c.jsxs)("p",{className:"famous-nearest-place font-small",children:[Object(c.jsx)("span",{className:"text-black",children:s.nearest_place[0]}),Object(c.jsxs)("span",{className:"text-gray",children:[" | ",s.nearest_place[1]," "]})]}),Object(c.jsxs)("p",{className:"nearest-place",children:[Object(c.jsx)("span",{children:"93% Match :"})," ",s.famous_nearest_places]})]}),Object(c.jsxs)("div",{className:"fees",children:[Object(c.jsxs)("div",{className:"flex flex-fees",children:[Object(c.jsx)("p",{className:"original-fees",children:Object(c.jsxs)("del",{children:["\u20b9",s.original_fees.toLocaleString()]})}),Object(c.jsxs)("p",{className:"discount",children:["\u25cf ",s.discount]})]}),Object(c.jsxs)("p",{className:"discounted-fees",children:["\u20b9",s.discounted_fees.toLocaleString()]}),Object(c.jsx)("p",{className:"fees-cycle",children:s.fees_cycle})]})]}),Object(c.jsxs)("div",{className:"tile-bottom flex",children:[Object(c.jsx)("div",{className:"offer",children:Object(c.jsx)("p",{children:s.offertext})}),Object(c.jsx)("div",{className:"amneties flex",children:s.amenties.map((function(e){return Object(c.jsx)("p",{children:e})}))})]})]})})}}]),t}(n.Component)),p=function(e){Object(d.a)(t,e);var s=Object(h.a)(t);function t(){return Object(j.a)(this,t),s.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){var e=this.props.colleges;return Object(c.jsxs)("div",{id:"home",children:[Object(c.jsx)("p",{className:"home-colleges",children:"Colleges in North India"}),Object(c.jsx)("div",{className:"home flex",children:e.map((function(e,s){return Object(c.jsx)(b,{position:s,college:e},s)}))})]})}}]),t}(n.Component),x=function(e){Object(d.a)(t,e);var s=Object(h.a)(t);function t(){var e;Object(j.a)(this,t);for(var c=arguments.length,n=new Array(c),l=0;l<c;l++)n[l]=arguments[l];return(e=s.call.apply(s,[this].concat(n))).myRef=a.a.createRef(),e.state={allColleges:[],colleges:[],start:0,end:10},e.getData=function(){fetch("colleges.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(s){e.setState({allColleges:s.colleges,colleges:s.colleges.slice(0,10)})}))},e.onScroll=function(){var s=e.state,t=s.start,c=s.end,n=document.getElementsByClassName("App")[0];n.scrollTop+n.clientHeight===n.scrollHeight&&(e.setState({start:t+10,end:c+10}),e.appendData(t+10,c+10))},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"appendData",value:function(e,s){var t=this.state,c=t.allColleges,n=t.colleges,a=c.slice(e,s);this.setState({colleges:[].concat(Object(r.a)(n),Object(r.a)(a))})}},{key:"render",value:function(){var e=this.state.colleges;return Object(c.jsx)("div",{className:"App",ref:this.myRef,onScroll:this.onScroll,style:{height:"100vh",overflow:"scroll"},children:Object(c.jsx)("div",{className:"app-home",children:e.length>0?Object(c.jsx)(p,{colleges:e}):""})})}}]),t}(n.Component),m=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,19)).then((function(s){var t=s.getCLS,c=s.getFID,n=s.getFCP,a=s.getLCP,l=s.getTTFB;t(e),c(e),n(e),a(e),l(e)}))};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(x,{})}),document.getElementById("root")),m()}],[[18,1,2]]]);
//# sourceMappingURL=main.a9200851.chunk.js.map