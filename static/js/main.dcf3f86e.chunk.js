(this.webpackJsonpshoppies=this.webpackJsonpshoppies||[]).push([[0],{62:function(e,t,a){e.exports=a(91)},67:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){e.exports=a.p+"static/media/goldFrame.aaf4a312.png"},79:function(e,t,a){},91:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(7),o=a.n(i),s=(a(67),a(26)),l=a(54),c=a(38),m=a.n(c),u=a(48),p=a(10),d=a(11),v=a(12),f=a(13),h=(a(69),a(124)),g=a(120),E=a(37),N=a.n(E),b=(a(70),function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState({input:e.target.value})},n.returnSearch=function(e,t){"Enter"===e.key&&t(n.state.input,1)},n.props=e,n.state={input:""},n}return Object(d.a)(a,[{key:"render",value:function(){var e=this,t=this.props.search,a=this.state.input;return r.a.createElement("div",{className:"Container"},r.a.createElement("div",null,r.a.createElement(g.a,{container:!0,spacing:1,alignItems:"flex-end"},r.a.createElement(g.a,{item:!0},r.a.createElement(N.a,null)),r.a.createElement(g.a,{item:!0},r.a.createElement(h.a,{id:"input-with-icon-grid",label:"Movie Title",input:a,onChange:function(t){return e.handleChange(t)},onKeyDown:function(a){return e.returnSearch(a,t)}})))))}}]),a}(n.Component)),C=a(125),y=(a(75),a(50)),O=a.n(y),j=a(51),I=a.n(j),S=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).props=e,n.state={},n}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.year,n=e.nominated,i=e.poster,o=e.movie,s=e.addNominee,l=e.displayMovieInfo,c=e.imdbID;return r.a.createElement("div",{className:"movieContainer"},r.a.createElement("div",{className:"bannerContainer"},r.a.createElement("img",{className:"imageContainer",src:i})),r.a.createElement("div",{className:"infoContainer"},r.a.createElement("div",{className:"textContainer",onClick:function(){return l(c)}},"Title: ",t),r.a.createElement("div",{className:"textContainer"},"Year: ",a),null==n.find((function(e){return e.imdbID===o.imdbID}))?r.a.createElement(C.a,{variant:"contained",onClick:function(){return s(o)}},"Nominate"):r.a.createElement(C.a,{variant:"contained",disabled:!0},"Nominated")))}}]),a}(n.Component),k=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState({pageTemp:e})},n.returnPage=function(e,t){"Enter"===e&&(NaN!==parseInt(n.state.pageTemp)&&n.state.pageTemp<=Math.floor(n.props.totalResults/10)+1&&n.state.pageTemp>0?(n.setState({page:n.state.pageTemp}),t(n.state.pageTemp)):n.setState({pageTemp:n.state.page}))},n.nextPage=function(e){n.setState({pageTemp:parseInt(n.state.page)+1},(function(){n.returnPage("Enter",e)}))},n.prevPage=function(e){n.setState({pageTemp:parseInt(n.state.page)-1},(function(){n.returnPage("Enter",e)}))},n.props=e,n.state={input:"",page:n.props.page,pageTemp:n.props.page},n}return Object(d.a)(a,[{key:"componentDidUpdate",value:function(e){e!==this.props&&this.setState({page:this.props.page,pageTemp:this.state.page})}},{key:"render",value:function(){var e=this,t=this.props,a=t.Search,n=t.Response,i=t.nominated,o=t.input,s=t.totalResults,l=t.addNominee,c=t.error,m=t.pageChange,u=t.displayMovieInfo,p=[];if("True"===n)for(var d=0;d<a.length;d++){var v=a[d];p.push(r.a.createElement(S,{key:d,title:v.Title,year:v.Year,nominated:i,poster:v.Poster,movie:a[d],addNominee:l,imdbID:v.imdbID,displayMovieInfo:u}))}return r.a.createElement("div",{className:"SectionContainer"},r.a.createElement("div",{className:"resultsTitle"},"False"===n?"Too many results."===c?r.a.createElement("div",null," ","Too many results, narrow down your search"," "):r.a.createElement("div",null,' No results found for "',o,'" '):r.a.createElement("div",null," ",s,' Total Results For "',o,'"'," ")),r.a.createElement("div",{className:"MovieListContainer"},p),s>10?r.a.createElement("div",{className:"pageChangeContainer"},r.a.createElement(O.a,{id:"pageArrow",fontSize:"large",onClick:function(){return e.prevPage(m)}}),r.a.createElement("input",{className:"pageChange",type:"text",value:this.state.pageTemp,onChange:function(t){return e.handleChange(t.target.value)},onKeyDown:function(t){return e.returnPage(t.key,m)}}),r.a.createElement("div",{className:"totalPages"}," ","/",Math.floor(this.props.totalResults/10)+1," "),r.a.createElement(I.a,{id:"pageArrow",fontSize:"large",onClick:function(){return e.nextPage(m)}})):r.a.createElement("div",null))}}]),a}(n.Component),T=(a(76),function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).props=e,n.state={},n}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.year,n=e.poster,i=e.id,o=e.removeNominee;return r.a.createElement("div",{className:"movieNominationContainer"},r.a.createElement("div",{className:"bannerContainer"},r.a.createElement("img",{className:"imageContainer",src:n})),r.a.createElement("div",{className:"infoContainer"},r.a.createElement("div",{className:"textNominationContainer"},"Title: ",t),r.a.createElement("div",{className:"textNominationContainer"},"Year: ",a),r.a.createElement(C.a,{variant:"contained",color:"secondary",onClick:function(){return o(i)}},"Remove")))}}]),a}(n.Component)),R=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).props=e,n.state={input:""},n}return Object(d.a)(a,[{key:"render",value:function(){for(var e=this.props,t=e.nominated,a=e.removeNominee,n=(e.apikey,[]),i=0;i<t.length;i++){var o=t[i];null!=o&&n.push(r.a.createElement(T,{key:i,title:o.Title,year:o.Year,poster:o.Poster,removeNominee:a,id:t[i]}))}return r.a.createElement("div",{className:"SectionNominationContainer"},r.a.createElement("div",{className:"MovieListNominationContainer"},n))}}]),a}(n.Component),x=(a(77),a(78),function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).props=e,n.state={},n}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props.poster;return r.a.createElement("div",{className:"bannerFrameContainer"},r.a.createElement("div",{className:"goldFrame",alt:"cannot display"},r.a.createElement("div",null,r.a.createElement("img",{src:e,className:"posterFrame"}))))}}]),a}(n.Component)),w=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).props=e,n.state={input:""},n}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props.nominated,t=[];if(5===e.length)for(var a=0;a<e.length;a++){var n=e[a].Poster;t.push(r.a.createElement(x,{key:a,poster:n}))}return r.a.createElement("div",{className:"bannerSectionContainer"},r.a.createElement("h4",{id:"topPicksHeader"},"YOUR TOP PICKS"),r.a.createElement("div",{className:"topList"},t))}}]),a}(n.Component),P=(a(79),function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).props=e,n.state={displayInfo:n.props.displayInfo},n}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props.displayInfo;return r.a.createElement("div",{className:"movieDisplayContainer"},r.a.createElement("div",{className:"bannerInfoContainer"},r.a.createElement("img",{className:"imageInfoContainer",src:e.Poster}),r.a.createElement("div",{className:"MovieInfoContainer"},r.a.createElement("div",{className:"textInfoContainer"},r.a.createElement("b",null,"Title: "),e.Title),r.a.createElement("div",{className:"textInfoContainer"},r.a.createElement("b",null,"Year: "),e.Year),r.a.createElement("div",{className:"textInfoContainer"},r.a.createElement("b",null,"Rated: "),e.Rated),r.a.createElement("div",{className:"textInfoContainer"},r.a.createElement("b",null,"Runtime: "),e.Runtime),r.a.createElement("div",{className:"textInfoContainer"},r.a.createElement("b",null,"Genre: "),e.Genre),r.a.createElement("div",{className:"textInfoContainer"},r.a.createElement("b",null,"Director: "),e.Director),r.a.createElement("div",{className:"textInfoContainer"},r.a.createElement("b",null,"Actors: "),e.Actors),r.a.createElement("div",{className:"textInfoContainer"},r.a.createElement("b",null,"Metascore: "),e.Metascore),r.a.createElement("div",{className:"textInfoContainer"},r.a.createElement("b",null,"imdbRating: "),e.imdbRating),r.a.createElement("div",{className:"textInfoContainer"},r.a.createElement("b",null,"Country: "),e.Country),r.a.createElement("div",{className:"textInfoContainer"},r.a.createElement("b",null,"Language: "),e.Language))),r.a.createElement("div",{className:"synopsisContainer"},r.a.createElement("div",{className:"textInfoContainer"},r.a.createElement("b",null,"Plot:")),r.a.createElement("div",{className:"textInfoContainer"},e.Plot)))}}]),a}(n.Component)),M=a(25),D=a(52),Y=a.n(D),F=(a(90),function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).state={input:null,apikey:"88d64122",nominations:JSON.parse(localStorage.getItem("nominations"))||[],Response:"False",Search:null,visualID:null,error:null,totalResults:0,isPaneOpen:!1,page:1,displayInfo:null},n.getMovies=function(){var e=Object(u.a)(m.a.mark((function e(t,a){var r,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.omdbapi.com/?s="+t+"&type=movie&apikey="+n.state.apikey+"&page="+a);case 2:return r=e.sent,e.next=5,r.json();case 5:"True"===(i=e.sent).Response?n.setState({input:t,Response:i.Response,Search:i.Search,error:null,totalResults:i.totalResults}):n.setState({input:t,Response:i.Response,Search:null,error:i.Error,totalResults:0});case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),n.searchMovie=function(e,t){n.setState({input:e,page:1}),n.getMovies(e,t)},n.addNominee=function(e){var t=n.props.alert;n.state.nominations.length<5?n.setState((function(t){return{nominations:[].concat(Object(l.a)(t.nominations),[e])}}),(function(){localStorage.setItem("nominations",JSON.stringify(n.state.nominations))})):t.show("5 Nominations already made, Remove one to add")},n.removeNominee=function(e){n.setState({nominations:n.state.nominations.filter((function(t){return t!==e}))})},n.pageChange=function(e){n.setState({page:e}),n.getMovies(n.state.input,e)},n.displayMovieInfo=function(e){n.setState({displayInfo:e}),fetch("https://www.omdbapi.com/?i="+e+"&apikey="+n.state.apikey+"&plot=full").then((function(e){return e.json()})).then((function(e){return n.setState({displayInfo:e},(function(){return console.log(n.state.displayInfo)}))}))},n}return Object(d.a)(a,[{key:"render",value:function(){var e,t=this,a=this.state,n=a.input,i=a.Response,o=a.error,l=a.Search,c=a.nominations,m=a.totalResults,u=a.apikey,p=a.page,d=a.displayInfo;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{id:"Title"},"The Shoppies"),r.a.createElement("div",{className:"functionContainer"},r.a.createElement(b,{search:this.searchMovie})),r.a.createElement("div",{className:"functionContainer"},r.a.createElement(k,(e={Search:l,Response:i,nominated:c,input:n,error:o,totalResults:m,addNominee:this.addNominee},Object(s.a)(e,"error",o),Object(s.a)(e,"page",p),Object(s.a)(e,"pageTemp",p),Object(s.a)(e,"pageChange",this.pageChange),Object(s.a)(e,"displayMovieInfo",this.displayMovieInfo),e)),null!==d?r.a.createElement(P,{displayInfo:d}):r.a.createElement("div",null))),r.a.createElement("div",{className:"rightPanel",onClick:function(){return t.setState({isPaneOpen:!0})}},"Open to view nominations"),r.a.createElement(Y.a,{className:"some-custom-class",overlayClassName:"some-custom-overlay-class",isOpen:this.state.isPaneOpen,title:"Nomination List",subtitle:"Your top 5 picks",width:"800px",onRequestClose:function(){t.setState({isPaneOpen:!1})}},r.a.createElement(R,{nominated:c,removeNominee:this.removeNominee,apikey:u}),5===c.length?r.a.createElement(w,{nominated:c}):r.a.createElement("div",null)))}}]),a}(r.a.Component)),L=Object(M.d)()(F);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A=a(53),J={position:M.b.BOTTOM_CENTER,timeout:2e3,offset:"10px",transition:M.c.SCALE};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M.a,Object.assign({template:A.a},J),r.a.createElement(L,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[62,1,2]]]);
//# sourceMappingURL=main.dcf3f86e.chunk.js.map