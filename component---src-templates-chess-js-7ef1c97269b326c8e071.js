(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"6Gk8":function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("Wbzz"),c=n("9eSz"),i=n.n(c);t.a=function(){var e=Object(o.useStaticQuery)("501480091"),t=e.site,n=e.avatar,r=t.siteMetadata,c=r.author,l=r.social,s=r.shortBio;return a.a.createElement("div",{style:{display:"flex",marginBottom:"4.375rem"}},a.a.createElement(i.a,{fixed:n.childImageSharp.fixed,alt:c,style:{marginRight:"0.875rem",marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),a.a.createElement("p",{style:{margin:0}},"Written by ",a.a.createElement("strong",null,c),a.a.createElement("br",null),a.a.createElement("span",{style:{fontSize:"calc(6px + 1vh)"}},s?" "+s:"","."," "),l.github?a.a.createElement("a",{href:"https://github.com/"+l.github},"You should follow them on Github."):null))}},"A2+M":function(e,t,n){var r=n("X8hv");e.exports={MDXRenderer:r}},A2po:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f})),n.d(t,"pageQuery",(function(){return p}));var r=n("q1tI"),a=n.n(r),o=n("Wbzz"),c=n("A2+M"),i=n("vrFN"),l=n("XOxS"),s=n("6Gk8"),u=n("8GIm"),m=n("Krw4");n("cXBx"),n("xPY7");function f(e){var t=e.data,n=t.mdx,f=t.site,p=(t.allGames,e.pageContext),d=p.previous,b=p.next,y=p.permalink,h=Object(r.useState)([]),g=h[0],w=h[1];return Object(r.useEffect)((function(){var e=new XMLHttpRequest;e.addEventListener("readystatechange",(function(){4===this.readyState&&w(JSON.parse(this.responseText.toString()))})),e.open("GET","https://lichess-proxy.herokuapp.com/"),e.send()}),[]),a.a.createElement("div",null,a.a.createElement(i.a,{title:n.frontmatter.title,description:n.frontmatter.description||n.excerpt,canonicalLink:n.frontmatter.canonical_link,keywords:n.frontmatter.categories||[],meta:[{name:"twitter:label1",content:"Reading time"},{name:"twitter:data1",content:n.timeToRead+" min read"}]}),a.a.createElement("section",{className:"center blog"},a.a.createElement("article",{className:"container small"},a.a.createElement("header",null,a.a.createElement("h1",null,a.a.createElement("button",{className:"link-button back",onClick:function(){return window.history.back()}},"«")," ",n.frontmatter.title),a.a.createElement("p",null,Object(m.a)(n.frontmatter.date)," • "+Object(m.b)(n.timeToRead)),a.a.createElement(l.a,{items:n.frontmatter.categories})),a.a.createElement(c.MDXRenderer,{scope:{Embed:u.a}},n.body),a.a.createElement("div",{className:"chess-games"},g.map((function(e){return a.a.createElement("div",{key:e.id,className:"chess-game"},a.a.createElement("img",{className:"chess-gif",alt:"chess game id: "+e.id,src:"https://lichess1.org/game/export/gif/"+e.id+".gif"}),a.a.createElement("p",null,a.a.createElement("a",{href:"https://lichess.org/"+e.id},"Link")," to game that started as a ",e.opening.name,", played ",(t=new Date(e.createdAt),n="en-CA",r=new Date(t),0===(o=Math.round((r.getTime()-Date.now())/864e5))?"today":new Intl.RelativeTimeFormat(n).format(o,"days"))," at ",new Date(e.createdAt).toLocaleTimeString("en-CA")," where I ","draw"===e.status?"drew":"SwanJaguar"===e.players[e.winner].user.name?"won":"lost"));var t,n,r,o})))),a.a.createElement("footer",{className:"container small"},a.a.createElement("small",null,a.a.createElement("a",{target:"_blank",rel:"nofollow noopener noreferrer",href:"https://twitter.com/search?q="+y},"Discuss on Twitter")," ","·"," ",a.a.createElement("a",{target:"_blank",rel:"nofollow noopener noreferrer",href:f.siteMetadata.githubUrl+"/edit/master/content"+n.fields.slug+"index.md"},"Suggest changes on Github")),a.a.createElement("hr",{style:{margin:"24px 0"}}),a.a.createElement(s.a,null),a.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},a.a.createElement("li",null,d&&a.a.createElement(o.Link,{to:d.fields.slug,rel:"prev"},"← ",d.frontmatter.title)),a.a.createElement("li",null,b&&a.a.createElement(o.Link,{to:b.fields.slug,rel:"next"},b.frontmatter.title," →"))))))}var p="1340635250"},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),o=n("ZhPi"),c=n("Bnag");e.exports=function(e){return r(e)||a(e)||o(e)||c()}},SksO:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},X8hv:function(e,t,n){var r=n("sXyB"),a=n("RIqP"),o=n("lSNA"),c=n("8OQS");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s=n("q1tI"),u=n("7ljp"),m=u.useMDXComponents,f=u.mdx,p=n("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,n=e.components,o=e.children,i=c(e,["scope","components","children"]),u=m(n),d=p(t),b=s.useMemo((function(){if(!o)return null;var e=l({React:s,mdx:f},d),t=Object.keys(e),n=t.map((function(t){return e[t]}));return r(Function,["_fn"].concat(a(t),[""+o])).apply(void 0,[{}].concat(a(n)))}),[o,t]);return s.createElement(b,l({components:u},i))}},ZhPi:function(e,t,n){var r=n("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},b48C:function(e,t){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}},cXBx:function(e,t,n){},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},sXyB:function(e,t,n){var r=n("SksO"),a=n("b48C");function o(t,n,c){return a()?e.exports=o=Reflect.construct:e.exports=o=function(e,t,n){var a=[null];a.push.apply(a,t);var o=new(Function.bind.apply(e,a));return n&&r(o,n.prototype),o},o.apply(null,arguments)}e.exports=o},xPY7:function(e,t,n){}}]);
//# sourceMappingURL=component---src-templates-chess-js-7ef1c97269b326c8e071.js.map