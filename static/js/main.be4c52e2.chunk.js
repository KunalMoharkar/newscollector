(this.webpackJsonpnews=this.webpackJsonpnews||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(8),s=n.n(r),i=n(2),o=n(3),l=n(6),u=n(5),j=n(4),b=(n(13),n.p,n(14),n(0));var h=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(t){return Object(i.a)(this,n),e.call(this,t)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsx)("a",{class:"navbar-brand",href:"#",children:this.props.brandname})}}]),n}(c.a.Component),d=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsx)("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#collapsibleNavbar",children:Object(b.jsx)("span",{class:"navbar-toggler-icon"})})}}]),n}(c.a.Component),O=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(t){return Object(i.a)(this,n),e.call(this,t)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsx)("ul",{class:"navbar-nav",children:this.props.links.map((function(t){return Object(b.jsx)("li",{class:"nav-item",children:Object(b.jsx)("a",{class:"nav-link",href:"#",children:t})})}))})}}]),n}(c.a.Component),v=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(t){var a;return Object(i.a)(this,n),(a=e.call(this,t)).state={links:["Home","About","Contact"],brandname:"Mybrand"},a}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("nav",{class:"navbar navbar-expand-md bg-dark navbar-dark",children:[Object(b.jsx)(h,{brandname:this.state.brandname}),Object(b.jsx)(d,{}),Object(b.jsx)("div",{class:"collapse navbar-collapse",id:"collapsibleNavbar",children:Object(b.jsx)(O,{links:this.state.links})})]})}}]),n}(c.a.Component),p=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(t){return Object(i.a)(this,n),e.call(this,t)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{class:"header container-fluid p-3 my-3 bg-secondary text-white",children:Object(b.jsx)("h1",{children:this.props.content})})}}]),n}(c.a.Component),f=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(t){var a;return Object(i.a)(this,n),(a=e.call(this,t)).state={country:a.props.country,isLoaded:!1,items:[]},a}return Object(o.a)(n,[{key:"componentDidUpdate",value:function(t){t.country!==this.props.country&&(this.setState({country:this.props.country}),this.fetchdata())}},{key:"componentDidMount",value:function(){this.fetchdata()}},{key:"fetchdata",value:function(){var t=this,e="https://newsapi.org/v2/top-headlines?country="+this.props.country+"&apiKey=f0597c3b2f81427ca2c47ae854474efb";fetch(e).then((function(t){return t.json()})).then((function(e){t.setState({isLoaded:!0,count:e.totalResults,items:e.articles})}))}},{key:"render",value:function(){return Object(b.jsx)("div",{class:"row",children:this.state.items.map((function(t){return Object(b.jsx)("div",{class:"col-sm-4",children:Object(b.jsxs)("div",{class:"card p-3 my-3",children:[Object(b.jsx)("img",{class:"card-img-top",width:"match-parent",src:t.urlToImage,alt:"image loading failed"}),Object(b.jsxs)("div",{class:"card-body",children:[Object(b.jsx)("h4",{class:"card-title",children:t.title}),Object(b.jsx)("p",{class:"card-text",children:t.description}),Object(b.jsx)("a",{href:t.url,class:"btn btn-primary",children:"Details"})]})]})})}))})}}]),n}(c.a.Component),m=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(t){var a;return Object(i.a)(this,n),(a=e.call(this,t)).state={value:"us"},a.handleChange=a.handleChange.bind(Object(l.a)(a)),a}return Object(o.a)(n,[{key:"handleChange",value:function(t){this.setState({value:t.target.value})}},{key:"render",value:function(){return Object(b.jsxs)("div",{class:"container-fluid",children:[Object(b.jsx)(v,{}),Object(b.jsxs)("div",{children:[Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("form",{onSubmit:this.handleSubmit,children:Object(b.jsxs)("label",{children:["change country:",Object(b.jsxs)("select",{value:this.state.value,onChange:this.handleChange,children:[Object(b.jsx)("option",{value:"us",children:"USA"}),Object(b.jsx)("option",{value:"in",children:"India"}),Object(b.jsx)("option",{value:"ch",children:"China"}),Object(b.jsx)("option",{value:"hu",children:"Hungary"})]})]})})]}),Object(b.jsx)(p,{content:"Latest News"}),Object(b.jsx)(f,{country:this.state.value})]})}}]),n}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(m,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.be4c52e2.chunk.js.map