(this["webpackJsonpspace-gallery-app"]=this["webpackJsonpspace-gallery-app"]||[]).push([[0],{2:function(e,t,a){e.exports={"container-outer":"App_container-outer__f0qrr",containerInner:"App_containerInner__1UfAb",header:"App_header__3ZZ1n",image:"App_image__3byI1",text:"App_text__PPQbm"}},20:function(e,t,a){e.exports=a(43)},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),o=a.n(c),s=a(3),i=a.n(s),p=a(4),u=a(15),l=a(16),m=a(19),d=a(18),f=a(17),v=a.n(f),h="https://api.nasa.gov/planetary/apod?api_key="+"CcitfAYaIPK6PFUaG9HKTkJ2bHG41m4ppKI2J2wP".toString(),b=function(){var e=Object(p.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get(h);case 3:return t=e.sent,e.abrupt("return",t);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),_=a(2),y=a.n(_),g=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{}},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(p.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:if(void 0===(t=e.sent).data){e.next=7;break}this.setState({data:t.data}),e.next=8;break;case 7:return e.abrupt("return",!1);case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.data,t=e.date,a=e.explanation,n=e.title,c=e.url;return r.a.createElement("div",{className:y.a.containerOuter},r.a.createElement("div",{className:y.a.containerInner},r.a.createElement("div",{className:y.a.header},r.a.createElement("h1",null,"NASA Astronomy Picture of the Day for ",new Date(t).toDateString()))),r.a.createElement("div",{className:y.a.containerInner},r.a.createElement("img",{className:y.a.image,src:c,alt:n}),r.a.createElement("div",{className:y.a.text},r.a.createElement("h1",null,n),r.a.createElement("p",null,a))))}}]),a}(r.a.Component);o.a.render(r.a.createElement(g,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.48aa0897.chunk.js.map