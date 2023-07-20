"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1820],{34604:function(t,e,n){var i=n(31969),r=n(52631),o=n(67294),c=n(85893);e.Z=function(t){var e=t.auction,n=t.children,a=(0,o.useState)(),l=a[0],s=a[1];return(0,r.Z)((function(){s(e.currentPrice)}),1e3),"function"===typeof n?n({price:l}):l?(0,c.jsxs)(c.Fragment,{children:[(0,i.uf)(null===l||void 0===l?void 0:l.toSignificant(6))," ",null===l||void 0===l?void 0:l.quoteCurrency.symbol]}):(0,c.jsx)(c.Fragment,{})}},41909:function(t,e,n){n.d(e,{Z:function(){return w}});var i=n(49501),r=n(31969),o=n(52631),c=n(27812),a=n(67294),l=function(){var t=document.createDocumentFragment(),e=document.createElement("canvas");return t.appendChild(e),e.getContext("2d")},s=function(t){var e=(0,a.useMemo)((function(){return"text"in t?t:void 0}),[t]),n=(0,a.useMemo)((function(){return"ref"in t?t:void 0}),[t]);return(0,a.useMemo)((function(){var t,i;if(null!==n&&void 0!==n&&null!==(t=n.ref.current)&&void 0!==t&&t.textContent){var r=l(),o=window.getComputedStyle(n.ref.current);return r.font=o.font,r.measureText(n.ref.current.textContent).width}return null!==e&&void 0!==e&&e.text?function(t,e){var n=l();return n.font=e,Array.isArray(t)?Math.max.apply(Math,(0,c.Z)(t.map((function(t){return n.measureText(t).width})))):n.measureText(t).width}(e.text,null!==(i=e.font)&&void 0!==i?i:"16px times"):NaN}),[null===e||void 0===e?void 0:e.text,null===e||void 0===e?void 0:e.font,null===n||void 0===n?void 0:n.ref])},u=n(11728),x=n(2905),d=n(54962),f=n(4840),m=n(85893),v=function(t){var e,n,r,o,c,a=t.orientation,l=t.x,u=t.y,v=t.auction,h=(0,i.mV)().i18n,p=null!==v&&void 0!==v&&v.minimumPrice?null===v||void 0===v||null===(e=v.minimumPrice)||void 0===e||null===(n=e.quoteCurrency)||void 0===n?void 0:n.symbol:null===v||void 0===v||null===(r=v.paymentToken)||void 0===r?void 0:r.symbol,j=l+10,y=u-35,g=l+145,b=u-45,S=l+10,w=u-10,C=l-(s({text:"Current Token Value",font:"14px DM Sans"})+20),N=u+20,P=l-17.5,M=u+10,F=l-(s({text:"".concat(null===v||void 0===v||null===(o=v.currentPrice)||void 0===o?void 0:o.toSignificant(6)," ").concat(p),font:"16px DM Sans"})+10),T=u+45;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("line",{x1:l+1,x2:l+1,y1:"bottom"===a?u+50:u,y2:"bottom"===a?u:u-50,stroke:"currentColor",strokeWidth:"2",opacity:.2}),(0,m.jsx)("text",{x:"bottom"===a?C:j,y:"bottom"===a?N:y,fill:"#7f7f7f",fontSize:"14px",children:h._(h._("Current Token Value"))}),(0,m.jsx)("foreignObject",{width:"10",height:"30",x:"bottom"===a?P:g,y:"bottom"===a?M:b,children:(0,m.jsx)(d.Z,{text:(0,f.od)(h)[v.template],children:(0,m.jsx)("span",{children:(0,m.jsx)(x.Z,{width:12,height:12,className:"ml-0 text-secondary mb-[4px] text-dark-400"})})})}),(0,m.jsxs)("text",{x:"bottom"===a?F:S,y:"bottom"===a?T:w,fill:"#ffffff",children:[null===v||void 0===v||null===(c=v.currentPrice)||void 0===c?void 0:c.toSignificant(6)," ",p]})]})},h=function(t){var e=t.auction,n=t.prices,c=t.showPriceIndicator,l=(0,i.mV)().i18n,x=s({text:"Current Token Value",font:"14px DM Sans"}),d=e.auctionInfo.startTime.mul("1000").toNumber(),f=e.auctionInfo.endTime.mul("1000").toNumber(),h=Date.now(),p=(0,a.useState)(Math.min(1,Math.max((h-d)/(f-d),0))),j=p[0],y=p[1];(0,o.Z)((function(){y(Math.min(1,Math.max((h-d)/(f-d),0)))}),1e3);var g=20,b=n?"min-h-[234px]":"min-h-[94px]";return(0,m.jsx)("div",{className:(0,r.AK)("relative w-full h-full",b),children:(0,m.jsx)(u.Z,{children:function(t){var i,r,o=t.width,a=t.height,s=n?a-60:a,u=g+(o-40)*j,d=s/2,f=u+x+15<o?"top":"bottom";return(0,m.jsxs)("div",{className:"relative",children:[(0,m.jsxs)("svg",{className:"text-green",width:o,height:s,viewBox:"0 0 ".concat(o," ").concat(s),children:[(0,m.jsx)("circle",{r:"4",cx:g,cy:s/2,fill:"currentColor"}),(0,m.jsx)("line",{x1:g,y1:d,x2:o-g,y2:d,stroke:"currentColor",strokeWidth:"2",opacity:.2}),(0,m.jsx)("line",{x1:g,y1:d,x2:u,y2:d,stroke:"currentColor",strokeWidth:"2"}),(0,m.jsx)("circle",{r:"4",cx:o-g,cy:d,fill:"currentColor"}),c&&(0,m.jsx)(v,{x:u,y:d,auction:e,orientation:f})]}),n&&(0,m.jsxs)("svg",{className:"text-green",width:o,height:60,viewBox:"0 0 ".concat(o," ").concat(60),children:[(0,m.jsx)("text",{x:20,y:14,fill:"#7f7f7f",fontSize:"14px",children:l._(l._("Price"))}),(0,m.jsxs)("text",{x:20,y:40,fill:"#FFFFFF",fontSize:"18px",fontWeight:700,children:[null===e||void 0===e||null===(i=e.startPrice)||void 0===i?void 0:i.toSignificant(6)," ",null===e||void 0===e||null===(r=e.startPrice)||void 0===r?void 0:r.quoteCurrency.symbol]})]})]})}})})},p=n(34160),j=n(68411);function y(t,e){return e.addedTime-t.addedTime}var g=function(){var t=(0,a.useState)(!1),e=t[0],n=t[1],i=(0,j.kf)(),r=!!(0,a.useMemo)((function(){return Object.values(i).filter(j.mH).sort(y)}),[i]).filter(p.b).map((function(t){return t.hash})).length;return(0,a.useEffect)((function(){n(r)}),[r]),e};var b=function(t){var e,n,o=t.auction,c=t.prices,l=t.showPriceIndicator,x=(0,i.mV)().i18n,d=s({text:"Ending Price",font:"14px DM Sans"}),f=s({text:"".concat(null===o||void 0===o||null===(e=o.minimumPrice)||void 0===e?void 0:e.toSignificant(6)," ").concat(null===o||void 0===o||null===(n=o.minimumPrice)||void 0===n?void 0:n.quoteCurrency.symbol),font:"18px DM Sans"}),h=s({text:"Current Token Value",font:"14px DM Sans"}),p=o.auctionInfo.startTime.mul("1000").toNumber(),j=o.auctionInfo.endTime.mul("1000").toNumber(),y=Date.now(),b=(0,a.useState)(Math.min(1,Math.max((y-p)/(j-p),0))),S=b[0],w=b[1];!function(t,e){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=(0,a.useRef)(),r=g();(0,a.useEffect)((function(){i.current=t}),[t]),(0,a.useEffect)((function(){function t(){var t=i.current;t&&t()}if(null!==e){n&&t();var r=setInterval(t,e);return function(){return clearInterval(r)}}}),[e,n,r])}((function(){w(Math.min(1,Math.max((y-p)/(j-p),0)))}),1e3);var C=60,N=28,P=l?60:28,M=20,F=c?"min-h-[234px]":"min-h-[94px]";return(0,m.jsx)("div",{className:(0,r.AK)("relative w-full h-full",F),children:(0,m.jsx)(u.Z,{children:function(t){var e,n,i,r,a=t.width,s=t.height,u=c?s-C:s,p=N+(a-56)*S,j=P+(u-2*P)*S,y=p+h+15<a?"top":"bottom";return(0,m.jsxs)("div",{className:"relative",children:[(0,m.jsxs)("svg",{className:"text-green",width:a,height:u,viewBox:"0 0 ".concat(a," ").concat(u),children:[(0,m.jsx)("circle",{r:"4",cx:N,cy:P,fill:"currentColor"}),(0,m.jsx)("line",{x1:N,y1:P,x2:a-N,y2:u-P,stroke:"currentColor",strokeWidth:"2",opacity:.2}),(0,m.jsx)("line",{x1:N,y1:P,x2:p,y2:j,stroke:"currentColor",strokeWidth:"2"}),(0,m.jsx)("circle",{r:"4",cx:a-N,cy:u-P,fill:"currentColor"}),l&&(0,m.jsx)(v,{x:p,y:j,auction:o,orientation:y})]}),c&&(0,m.jsxs)("svg",{className:"text-green",width:a,height:C,viewBox:"0 0 ".concat(a," ").concat(C),children:[(0,m.jsx)("text",{x:M,y:14,fill:"#7f7f7f",fontSize:"14px",children:x._(x._("Starting price"))}),(0,m.jsxs)("text",{x:M,y:40,fill:"#FFFFFF",fontSize:"18px",fontWeight:700,children:[null===o||void 0===o||null===(e=o.startPrice)||void 0===e?void 0:e.toSignificant(6)," ",null===o||void 0===o||null===(n=o.startPrice)||void 0===n?void 0:n.quoteCurrency.symbol]}),(0,m.jsx)("text",{x:a-M-d,y:14,fill:"#7f7f7f",fontSize:"14px",textAnchor:"right",children:x._(x._("Ending price"))}),(0,m.jsxs)("text",{x:a-M-f,y:40,fill:"#FFFFFF",fontSize:"18px",fontWeight:700,textAnchor:"right",children:[null===o||void 0===o||null===(i=o.minimumPrice)||void 0===i?void 0:i.toSignificant(6)," ",null===o||void 0===o||null===(r=o.minimumPrice)||void 0===r?void 0:r.quoteCurrency.symbol]})]})]})}})})},S=n(64527),w=function(t){var e=t.auction,n=t.prices,i=void 0===n||n,r=t.showPriceIndicator,o=void 0===r||r;return e.template===S.tn.DUTCH_AUCTION?(0,m.jsx)(b,{auction:e,prices:i,showPriceIndicator:o}):(0,m.jsx)(h,{auction:e,prices:i,showPriceIndicator:o})}},19652:function(t,e,n){var i=n(59499),r=n(4730),o=n(42144),c=n(64527),a=(n(67294),n(85893)),l=["auctionTemplate"];function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){(0,i.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e.Z=function(t){var e=t.auctionTemplate,n=(0,r.Z)(t,l);return e===c.tn.CROWDSALE?(0,a.jsx)(o.rs,u({},n)):e===c.tn.DUTCH_AUCTION?(0,a.jsx)(o.VK,u({},n)):e===c.tn.BATCH_AUCTION?(0,a.jsx)(o.gW,u({},n)):(0,a.jsx)(a.Fragment,{})}},77837:function(t,e,n){var i=n(56785),r=n(52631),o=n(67294),c=n(85893);e.Z=function(t){var e=t.auction,n=t.children,a=(0,o.useState)(),l=a[0],s=a[1];return(0,r.Z)((function(){if(null!==e&&void 0!==e&&e.remainingTime){var t=e.remainingTime,n=t.days,i=t.hours,r=t.minutes,o=t.seconds;s({days:String(Math.max(n,0)).padStart(2,"0"),hours:String(Math.max(i,0)).padStart(2,"0"),minutes:String(Math.max(r,0)).padStart(2,"0"),seconds:String(Math.max(o,0)).padStart(2,"0")})}}),1e3),l&&"function"===typeof n?n(l):l?(0,c.jsxs)("div",{className:"flex gap-1 text-high-emphesis",children:[(0,c.jsxs)("div",{className:"flex items-baseline gap-1",children:[(0,c.jsxs)(i.Z,{variant:"xs",className:"text-mono",children:[l.days,"D"]}),(0,c.jsx)(i.Z,{variant:"xxs",className:"text-mono text-secondary",children:":"})]}),(0,c.jsxs)("div",{className:"flex items-baseline gap-2",children:[(0,c.jsxs)(i.Z,{variant:"xs",className:"text-mono",children:[l.hours,"H"]}),(0,c.jsx)(i.Z,{variant:"xxs",className:"text-mono text-secondary",children:":"})]}),(0,c.jsxs)("div",{className:"flex items-baseline gap-2",children:[(0,c.jsxs)(i.Z,{variant:"xs",className:"text-mono",children:[l.minutes,"M"]}),(0,c.jsx)(i.Z,{variant:"xxs",className:"text-mono text-secondary",children:":"})]}),(0,c.jsx)("div",{className:"flex items-baseline gap-2",children:(0,c.jsxs)(i.Z,{variant:"xs",className:"text-mono",children:[l.seconds,"S"]})})]}):(0,c.jsx)(c.Fragment,{})}}}]);