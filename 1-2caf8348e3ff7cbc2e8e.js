(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{138:function(e,a,t){"use strict";t.r(a),t.d(a,"graphql",function(){return g}),t.d(a,"StaticQueryContext",function(){return d}),t.d(a,"StaticQuery",function(){return p});var n=t(0),r=t.n(n),o=t(4),l=t.n(o),s=t(139),c=t.n(s);t.d(a,"Link",function(){return c.a}),t.d(a,"withPrefix",function(){return s.withPrefix}),t.d(a,"navigate",function(){return s.navigate}),t.d(a,"push",function(){return s.push}),t.d(a,"replace",function(){return s.replace}),t.d(a,"navigateTo",function(){return s.navigateTo});var i=t(144),u=t.n(i);t.d(a,"PageRenderer",function(){return u.a});var m=t(29);t.d(a,"parsePath",function(){return m.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},140:function(e,a,t){"use strict";t(28),t(156);var n=t(4),r=t.n(n),o=t(0),l=t.n(o),s=function(e){var a=e.Tag,t=e.children,n=e.className,r=e.flex,o=e.dirColumn,s=e.spaceAround,c=e.spaceBetween,i=e.centered,u=e.autoBottomMargin,m=e.horizontalHalf,d=e.flexStart,p=e.props,g=[];return r&&g.push("element--flex"),u&&g.push("element--auto-bottom-margin"),o&&g.push("element--column"),s&&g.push("element--space-around"),c&&g.push("element--space-between"),i&&g.push("element--centered"),m&&g.push("element--horizontal-half"),d&&g.push("element--flex-start"),l.a.createElement(a,Object.assign({className:n+" "+g.join(" ")},p),t)};s.defaultProps={className:"",Tag:"div"},s.propTypes={Tag:r.a.string,children:r.a.node,className:r.a.string,flex:r.a.bool,spaceAround:r.a.bool,spaceBetween:r.a.bool,dirColumn:r.a.bool,centered:r.a.bool,horizontalHalf:r.a.bool,autoBottomMargin:r.a.bool,flexStart:r.a.bool},a.a=s},144:function(e,a,t){var n;e.exports=(n=t(155))&&n.default||n},146:function(e,a,t){"use strict";t.d(a,"a",function(){return i});t(28),t(157);var n=t(141),r=t.n(n),o=(t(158),t(4)),l=t.n(o),s=t(0),c=t.n(s),i=function(e){var a=e.src,t=e.alt,n=(e.hover,e.className),o=e.overlay,l=e.contain,s=e.circle,i=e.extraSmall,u=e.small,m=e.medium,d=e.large,p=e.fullWidth,g=e.actualSize,f=e.squareBig,b=r()(e,["src","alt","hover","className","overlay","contain","circle","extraSmall","small","medium","large","fullWidth","actualSize","squareBig"]),h=[];return l&&h.push("image--contain"),p&&h.push("image--full-width"),s&&h.push("image--circle"),i&&h.push("image--extra-small"),u&&h.push("image--small"),m&&h.push("image--medium"),d&&h.push("image--large"),f&&h.push("image--square-big"),g&&h.push("image--acctual-size"),c.a.createElement("div",Object.assign({className:"image "+n+" "+h.join(" ")},b),c.a.createElement("div",{className:"image__container"},c.a.createElement("img",{style:{backgroundColor:o,backgroundOpacity:"0.5"},className:"image__content",src:a,alt:t})))};i.defaultProps={src:"",alt:"",overlay:"",className:""},i.propTypes={overlay:l.a.string,src:l.a.oneOfType([l.a.string,l.a.object]),alt:l.a.oneOfType([l.a.string,l.a.array]),hover:l.a.string,className:l.a.string,contain:l.a.bool,circle:l.a.bool,extraSmall:l.a.bool,small:l.a.bool,medium:l.a.bool,large:l.a.bool,squareBig:l.a.bool,fullWidth:l.a.bool,actualSize:l.a.bool}},148:function(e,a,t){e.exports=t.p+"static/hgin_yliopisto-30c68104749d830b6cef6ea8c6339b16.png"},149:function(e,a,t){e.exports=t.p+"static/houston_logo-356bd2a9a75b44bdf7897b2cdd387600.png"},150:function(e,a,t){"use strict";t.d(a,"a",function(){return s});t(28),t(161);var n=t(4),r=t.n(n),o=t(0),l=t.n(o),s=function(e){var a=e.children,t=e.largeMargin,n=e.className,r=e.childrenClassName,o=e.backgroundColor,s=e.props;return l.a.createElement("div",Object.assign({className:"triple-border "+n+" "+(t?"triple-border--large-margin":""),style:{padding:t?"":"0.2em"}},s),l.a.createElement("div",{className:"triple-border__container "+r,style:{backgroundColor:o}},a))};s.defaultProps={className:"",childrenClassName:"",largeMargin:!1,backgroundColor:"transparent"},s.propTypes={children:r.a.node.isRequired,className:r.a.string,childrenClassName:r.a.string,largeMargin:r.a.bool,backgroundColor:r.a.string}},151:function(e,a,t){"use strict";t(159),t(160);var n=t(4),r=t.n(n),o=t(0),l=t.n(o),s=t(138),c=t(150),i=function(){return l.a.createElement("div",{className:"container",style:{alignItems:"center"}},l.a.createElement(s.Link,{to:"/",style:{textDecoration:"none"}},l.a.createElement(c.a,{className:"nav-item-hover",childrenClassName:"triple-border__logo"},"{() => fs}")),l.a.createElement("div",{className:"col-5 push-left-3",style:{display:"flex",justifyContent:"space-between",fontWeight:"bold"}},l.a.createElement(s.Link,{to:"/about",className:"nav-item-hover"},"KURSSISTA"),l.a.createElement(s.Link,{to:"/#course-contents",className:"nav-item-hover"},"KURSSIN SISÄLTÖ"),l.a.createElement(s.Link,{to:"/faq",className:"nav-item-hover"},"FAQs")))},u=function(e){var a=e.children;return l.a.createElement("div",null,l.a.createElement(i,null),a)};u.propTypes={children:r.a.node.isRequired};a.a=u},155:function(e,a,t){"use strict";t.r(a);t(28);var n=t(0),r=t.n(n),o=t(4),l=t.n(o),s=t(48),c=t(2),i=function(e){var a=e.location,t=c.default.getResourcesForPathnameSync(a.pathname);return r.a.createElement(s.a,Object.assign({location:a,pageResources:t},t.json))};i.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},a.default=i},156:function(e,a,t){},158:function(e,a,t){},159:function(e,a,t){},160:function(e,a,t){},161:function(e,a,t){},174:function(e){e.exports={white:"#ffffff",black:"#000000",main:"#e1e1e1",violet:"#B795F3",turquoise:"#82F7EB",green:"#AEFFDA","dark-orange":"#EB8755","light-orange":"#EEAC5D",yellow:"#F7F382",pink:"#E693CB",blue:"#706BE4","light-blue":"#82D2F7","light-violet":"#B2BBF0"}},175:function(e,a,t){"use strict";t(28),t(191),t(285);var n=t(141),r=t.n(n),o=(t(286),t(138)),l=t(4),s=t.n(l),c=t(0),i=t.n(c),u=t(140),m=function(e){var a,t=e.className,n=e.link,l=e.content,s=e.stack,c=e.bold,m=e.thickBorder,d=e.upperCase,p=r()(e,["className","link","content","stack","bold","thickBorder","upperCase"]),g=i.a.createElement("div",{className:"arrow__container arrows--horizontal"},l.map(function(e,a){var n={backgroundColor:e.backgroundColor?e.backgroundColor:"transparent",color:"black"===e.backgroundColor?"white":"black"};return i.a.createElement("div",Object.assign({key:"arrow"+a,className:"arrow__wrapper "+t},p),i.a.createElement("div",{className:"arrow__rectangle "+(c?"bold":"")+" "+(m?"arrow__rectangle--thick-border":""),style:n},e.link?i.a.createElement(o.Link,{to:e.link},d?e.text.toUpperCase():e.text):d?e.text.toUpperCase():e.text),i.a.createElement("div",{className:"arrow__point "+(m?"arrow__point--thick-border":""),style:n}))}));return s||n?!s&&n?a=i.a.createElement("div",{className:"spacing--small spacing--after-small"},i.a.createElement(o.Link,{to:n,style:{display:"inline-block"}},g)):s&&(a=i.a.createElement("div",{className:"col-10 spacing--after"},i.a.createElement("div",{className:"arrow__container arrow__container--with-link",style:{display:"flex",flexDirection:"column"}},l.map(function(e){var a={backgroundColor:e.backgroundColor?e.backgroundColor:"transparent",color:"black"===e.backgroundColor?"white":"black"};return i.a.createElement(o.Link,Object.assign({key:e.text,to:e.path,className:"arrow__wrapper--stacked "+t},p),i.a.createElement(u.a,{flex:!0,className:"arrow__rectangle",style:a},i.a.createElement("p",{className:"arrow--stacked-letter"},e.letter),i.a.createElement("p",{className:"arrow--stacked-title"},e.text)),i.a.createElement("div",{className:"arrow__point",style:a}))})))):a=i.a.createElement("div",{className:"col-10 spacing spacing--after"},g),a};m.propTypes={className:s.a.string,link:s.a.string,content:s.a.array.isRequired,stack:s.a.bool,upperCase:s.a.bool,bold:s.a.bool,thickBorder:s.a.bool},m.defaultProps={className:""},a.a=m},176:function(e,a,t){"use strict";t.d(a,"a",function(){return i});t(28);var n=t(141),r=t.n(n),o=(t(287),t(4)),l=t.n(o),s=t(0),c=t.n(s),i=function(e){var a=e.className,t=e.backgroundColor,n=r()(e,["className","backgroundColor"]),o=t?{backgroundColor:t}:null;return c.a.createElement("div",Object.assign({className:"banner "+a,style:o},n))};i.defaultProps={className:""},i.propTypes={className:l.a.string}},286:function(e,a,t){},287:function(e,a,t){}}]);
//# sourceMappingURL=1-2caf8348e3ff7cbc2e8e.js.map