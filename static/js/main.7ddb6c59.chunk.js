(this.webpackJsonpcolleges=this.webpackJsonpcolleges||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var c=s(0),n=s(1),a=s.n(n),l=s(8),i=s.n(l),r=(s(14),s(7)),o=s(2),j=s(3),d=s(5),h=s(4),b=(s(15),s(16),s(17),function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(j.a)(s,[{key:"render",value:function(){var e=this.props,t=e.college;e.position;return Object(c.jsx)("div",{id:"tile",children:Object(c.jsxs)("div",{className:"width-50 tile",children:[Object(c.jsxs)("div",{className:"image-container flex",style:{background:"linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('".concat("/colleges","/images/").concat(t.image,"')")},children:[t.promoted?Object(c.jsx)("div",{className:"promoted text-white",children:Object(c.jsx)("p",{children:"PROMOTED"})}):"",Object(c.jsxs)("div",{className:"rating text-white font-small",children:[Object(c.jsxs)("p",{className:"",children:[Object(c.jsx)("span",{className:"",children:t.rating}),"/5"]}),Object(c.jsx)("p",{children:t.rating_remarks})]}),Object(c.jsxs)("div",{className:"image-bottom text-white flex",children:[Object(c.jsx)("div",{className:"tags flex",children:t.tags.map((function(e){return Object(c.jsx)("div",{className:"tag",children:Object(c.jsx)("p",{className:"font-small",children:e})})}))}),Object(c.jsx)("div",{children:Object(c.jsxs)("p",{className:"ranking font-small",children:["#",t.ranking]})})]})]}),Object(c.jsxs)("div",{className:"college-info flex",children:[Object(c.jsxs)("div",{className:"description",children:[Object(c.jsxs)("div",{className:"college-name-rating flex",children:[Object(c.jsx)("h3",{className:"college-name text-black",children:t.college_name}),Object(c.jsxs)("div",{className:"star-ratings",children:[Object(c.jsxs)("div",{className:"star-ratings-top",style:{width:"".concat(20*t.rating,"%")},children:[Object(c.jsx)("span",{children:"\u2605"}),Object(c.jsx)("span",{children:"\u2605"}),Object(c.jsx)("span",{children:"\u2605"}),Object(c.jsx)("span",{children:"\u2605"}),Object(c.jsx)("span",{children:"\u2605"})]}),Object(c.jsxs)("div",{className:"star-ratings-bottom",children:[Object(c.jsx)("span",{children:"\u2605"}),Object(c.jsx)("span",{children:"\u2605"}),Object(c.jsx)("span",{children:"\u2605"}),Object(c.jsx)("span",{children:"\u2605"}),Object(c.jsx)("span",{children:"\u2605"})]})]})]}),Object(c.jsxs)("p",{className:"famous-nearest-place font-small",children:[Object(c.jsx)("span",{className:"text-black",children:t.nearest_place[0]}),Object(c.jsxs)("span",{className:"text-gray",children:[" | ",t.nearest_place[1]," "]})]}),Object(c.jsxs)("p",{className:"nearest-place",children:[Object(c.jsx)("span",{children:"93% Match :"})," ",t.famous_nearest_places]})]}),Object(c.jsxs)("div",{className:"fees",children:[Object(c.jsxs)("div",{className:"flex flex-fees",children:[Object(c.jsx)("p",{className:"original-fees",children:Object(c.jsxs)("del",{children:["\u20b9",t.original_fees.toLocaleString()]})}),Object(c.jsxs)("p",{className:"discount",children:["\u25cf ",t.discount]})]}),Object(c.jsxs)("p",{className:"discounted-fees",children:["\u20b9",t.discounted_fees.toLocaleString()]}),Object(c.jsx)("p",{className:"fees-cycle",children:t.fees_cycle})]})]}),Object(c.jsxs)("div",{className:"tile-bottom flex",children:[Object(c.jsx)("div",{className:"offer",children:Object(c.jsx)("p",{children:t.offertext})}),Object(c.jsx)("div",{className:"amneties flex",children:t.amenties.map((function(e){return Object(c.jsx)("p",{children:e})}))})]})]})})}}]),s}(n.Component)),p=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(j.a)(s,[{key:"render",value:function(){var e=this.props.colleges;return Object(c.jsxs)("div",{id:"home",children:[Object(c.jsx)("p",{className:"home-colleges",children:"Colleges in North India"}),Object(c.jsx)("div",{className:"home flex",children:e.map((function(e,t){return Object(c.jsx)(b,{position:t,college:e},t)}))})]})}}]),s}(n.Component),x=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(o.a)(this,s);for(var c=arguments.length,n=new Array(c),l=0;l<c;l++)n[l]=arguments[l];return(e=t.call.apply(t,[this].concat(n))).myRef=a.a.createRef(),e.state={allColleges:[],colleges:[],start:0,end:10},e.getData=function(){fetch("".concat("/colleges","/colleges.json"),{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(t){e.setState({allColleges:t.colleges,colleges:t.colleges.slice(0,10)})}))},e.onScroll=function(){var t=e.state,s=t.start,c=t.end,n=document.getElementsByClassName("App")[0];n.scrollTop+n.clientHeight===n.scrollHeight&&(e.setState({start:s+10,end:c+10}),e.appendData(s+10,c+10))},e}return Object(j.a)(s,[{key:"componentDidMount",value:function(){this.getData()}},{key:"appendData",value:function(e,t){var s=this.state,c=s.allColleges,n=s.colleges,a=c.slice(e,t);this.setState({colleges:[].concat(Object(r.a)(n),Object(r.a)(a))})}},{key:"render",value:function(){var e=this.state.colleges;return Object(c.jsx)("div",{className:"App",ref:this.myRef,onScroll:this.onScroll,style:{height:"100vh",overflow:"scroll"},children:Object(c.jsx)("div",{className:"app-home",children:e.length>0?Object(c.jsx)(p,{colleges:e}):""})})}}]),s}(n.Component),m=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,19)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,a=t.getLCP,l=t.getTTFB;s(e),c(e),n(e),a(e),l(e)}))};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(x,{})}),document.getElementById("root")),m()}],[[18,1,2]]]);
//# sourceMappingURL=main.7ddb6c59.chunk.js.map