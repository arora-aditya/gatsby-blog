(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"6Gk8":function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n),o=r("Wbzz"),l=r("9eSz"),i=r.n(l);t.a=function(){var e=Object(o.useStaticQuery)("501480091"),t=e.site,r=e.avatar,n=t.siteMetadata,l=n.author,s=n.social,c=n.shortBio;return a.a.createElement("div",{style:{display:"flex",marginBottom:"4.375rem"}},a.a.createElement(i.a,{fixed:r.childImageSharp.fixed,alt:l,style:{marginRight:"0.875rem",marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),a.a.createElement("p",{style:{margin:0}},"Written by ",a.a.createElement("strong",null,l),a.a.createElement("br",null),a.a.createElement("span",{style:{fontSize:"calc(6px + 1vh)"}},c?" "+c:"","."," "),s.github?a.a.createElement("a",{href:"https://github.com/"+s.github},"You should follow them on Github."):null))}},"A2+M":function(e,t,r){var n=r("X8hv");e.exports={MDXRenderer:n}},A2po:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return f}));var n=r("q1tI"),a=r.n(n),o=r("Wbzz"),l=r("A2+M"),i=r("vrFN"),s=r("XOxS"),c=r("6Gk8"),u=r("8GIm"),p=r("Krw4");r("cXBx"),r("xPY7");function f(e){var t=e.data,r=t.mdx,f=t.site,m=(t.allGames,e.pageContext),d=m.previous,x=m.next,b=m.permalink,y=Object(n.useState)([]),g=y[0],h=y[1];return Object(n.useEffect)((function(){var e=new XMLHttpRequest;e.addEventListener("readystatechange",(function(){4===this.readyState&&h(JSON.parse(this.responseText.toString()))})),e.open("GET","https://backend.arora-aditya.com/"),e.send()}),[]),a.a.createElement("div",null,a.a.createElement(i.a,{title:r.frontmatter.title,description:r.frontmatter.description||r.excerpt,canonicalLink:r.frontmatter.canonical_link,keywords:r.frontmatter.categories||[],meta:[{name:"twitter:label1",content:"Reading time"},{name:"twitter:data1",content:r.timeToRead+" min read"}]}),a.a.createElement("section",{className:"center blog"},a.a.createElement("article",{className:"container small"},a.a.createElement("header",null,a.a.createElement("h1",null,a.a.createElement("button",{className:"link-button back",onClick:function(){return window.history.back()}},"«")," ",r.frontmatter.title),a.a.createElement("p",null,Object(p.a)(r.frontmatter.date)," • "+Object(p.b)(r.timeToRead)),a.a.createElement(s.a,{items:r.frontmatter.categories})),a.a.createElement(l.MDXRenderer,{scope:{Embed:u.a}},r.body),a.a.createElement("div",{className:"chess-games"},g.map((function(e){var t,r,n,o,l,i;return a.a.createElement("div",{key:e.id,className:"chess-game"},a.a.createElement("img",{className:"chess-gif",alt:"chess game id: "+e.id,src:"https://lichess1.org/game/export/gif/"+e.id+".gif"}),a.a.createElement("p",null,a.a.createElement("a",{href:"https://lichess.org/"+e.id},"Link")," to game that started as a ",null!==(t=e.opening)&&void 0!==t&&t.name?null===(r=e.opening)||void 0===r?void 0:r.name:"unknown opening",", played ",(n=new Date(e.createdAt),o="en-CA",l=new Date(n),0===(i=Math.round((l.getTime()-Date.now())/864e5))?"today":new Intl.RelativeTimeFormat(o).format(i,"days"))," at ",new Date(e.createdAt).toLocaleTimeString("en-CA")," where I ","draw"===e.status?"drew":"SwanJaguar"===e.players[e.winner].user.name?"won":"lost"))})))),a.a.createElement("footer",{className:"container small"},a.a.createElement("small",null,a.a.createElement("a",{target:"_blank",rel:"nofollow noopener noreferrer",href:"https://twitter.com/search?q="+b},"Discuss on Twitter")," ","·"," ",a.a.createElement("a",{target:"_blank",rel:"nofollow noopener noreferrer",href:f.siteMetadata.githubUrl+"/edit/master/content"+r.fields.slug+"index.md"},"Suggest changes on Github")),a.a.createElement("hr",{style:{margin:"24px 0"}}),a.a.createElement(c.a,null),a.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},a.a.createElement("li",null,d&&a.a.createElement(o.Link,{to:d.fields.slug,rel:"prev"},"← ",d.frontmatter.title)),a.a.createElement("li",null,x&&a.a.createElement(o.Link,{to:x.fields.slug,rel:"next"},x.frontmatter.title," →"))))))}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},Ijbi:function(e,t,r){var n=r("WkPL");e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.default=e.exports,e.exports.__esModule=!0},RIqP:function(e,t,r){var n=r("Ijbi"),a=r("EbDI"),o=r("ZhPi"),l=r("Bnag");e.exports=function(e){return n(e)||a(e)||o(e)||l()},e.exports.default=e.exports,e.exports.__esModule=!0},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.default=e.exports,e.exports.__esModule=!0},X8hv:function(e,t,r){var n=r("sXyB"),a=r("RIqP"),o=r("lSNA"),l=r("8OQS"),i=["scope","children"];function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=r("q1tI"),p=r("7ljp").mdx,f=r("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,o=l(e,i),s=f(t),m=u.useMemo((function(){if(!r)return null;var e=c({React:u,mdx:p},s),t=Object.keys(e),o=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(a(t),[""+r])).apply(void 0,[{}].concat(a(o)))}),[r,t]);return u.createElement(m,c({},o))}},ZhPi:function(e,t,r){var n=r("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},b48C:function(e,t){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},cXBx:function(e,t,r){},lSNA:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},sXyB:function(e,t,r){var n=r("SksO"),a=r("b48C");function o(t,r,l){return a()?(e.exports=o=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=o=function(e,t,r){var a=[null];a.push.apply(a,t);var o=new(Function.bind.apply(e,a));return r&&n(o,r.prototype),o},e.exports.default=e.exports,e.exports.__esModule=!0),o.apply(null,arguments)}e.exports=o,e.exports.default=e.exports,e.exports.__esModule=!0},xPY7:function(e,t,r){}}]);
//# sourceMappingURL=component---src-templates-chess-js-2e480b45c3056af8a2e3.js.map