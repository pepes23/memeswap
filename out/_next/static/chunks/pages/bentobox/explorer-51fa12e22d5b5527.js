(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8471],{93688:function(t,e,r){"use strict";var n,s=r(13752),i=r(31969),a=r(85893);!function(t){t[t.REPEAT=0]="REPEAT",t[t.SINGLE=1]="SINGLE"}(n||(n={}));var c={"bg-bars":{type:n.REPEAT,url:"https://app.sushi.com/images/trident/bars-pattern.png"},"bg-binary":{type:n.REPEAT,url:"https://app.sushi.com/images/trident/binary-pattern.png"},"bg-bubble":{type:n.REPEAT,url:"https://app.sushi.com/images/trident/bubble-pattern.png"},"bg-dots":{type:n.REPEAT,url:"https://app.sushi.com/images/trident/dots-pattern.png"},"bg-x-times-y-is-k":{type:n.REPEAT,url:"https://app.sushi.com/images/trident/x-times-y-is-k.png"},"bg-wavy":{type:n.REPEAT,url:"https://app.sushi.com/images/trident/wavy-pattern.png"},"bg-chevron":{type:n.REPEAT,url:"https://app.sushi.com/images/trident/chevron-pattern.png"},"miso-bowl":{type:n.SINGLE,url:"https://app.sushi.com/images/miso/banner.jpg"}};e.Z=function(t){var e=t.variant;if(!e)return(0,a.jsx)("div",{className:"absolute inset-0 bg-dark-900/30"});var r=c[e],o=r.type,l=r.url;return o===n.REPEAT?(0,a.jsx)("div",{className:(0,i.AK)("absolute inset-0 flex flex-col items-center bg-dark-900/30"),children:(0,a.jsx)("div",{className:(0,i.AK)("absolute inset-0 w-full h-full z-0 opacity-10",e)})}):(0,a.jsx)(s.Z,{alt:"background image",src:l,objectFit:"cover",objectPosition:"center",layout:"fill",priority:!0})}},13752:function(t,e,r){"use strict";r.d(e,{Z:function(){return h}});var n=r(59499),s=r(4730),i=r(31969),a=r(25675),c=r.n(a),o=r(85893),l=["src","width","height","layout"];function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var h=function(t){var e,r,n,a=t.src,p=t.width,h=t.height,d=t.layout,f=(0,s.Z)(t,l),g=parseInt(String(h),10)>=40&&parseInt(String(p),10)>=40,x="string"===typeof a&&a.includes("http")?i.HT:void 0;return(0,o.jsx)("div",{style:{width:p,height:h},className:"overflow-hidden rounded",children:g?(0,o.jsx)(c(),u({loader:x,src:a,width:p,height:h,layout:d,placeholder:"blur",blurDataURL:"data:image/svg+xml;base64,".concat((r=p,n=h,e='\n<svg width="'.concat(r,'" height="').concat(n,'" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n  <defs>\n    <linearGradient id="g">\n      <stop stop-color="#333" offset="20%" />\n      <stop stop-color="#222" offset="50%" />\n      <stop stop-color="#333" offset="70%" />\n    </linearGradient>\n  </defs>\n  <rect width="').concat(r,'" height="').concat(n,'" fill="#333" />\n  <rect id="r" width="').concat(r,'" height="').concat(n,'" fill="url(#g)" />\n  <animate xlink:href="#r" attributeName="x" from="-').concat(r,'" to="').concat(r,'" dur="1s" repeatCount="indefinite"  />\n</svg>'),window.btoa(e)))},f)):(0,o.jsx)(c(),u({loader:x,src:a,width:p,height:h,layout:d,placeholder:"empty"},f))})}},22680:function(t,e,r){"use strict";r.d(e,{A9:function(){return h},CV:function(){return u}});var n=r(93688),s=r(72457),i=r(39810),a=r(23573),c=r(52907),o=r(76844),l=r(31969),p=(r(67294),r(85893)),u=function(t){var e=t.children,r=t.className,i=t.pattern,a=t.maxWidth,c=void 0===a?"7xl":a,o=t.condensed;return(0,p.jsxs)("header",{className:"relative flex flex-col items-center justify-center w-full",children:[(0,p.jsx)(n.Z,{variant:i}),(0,p.jsx)(s.Z,{maxWidth:c,className:(0,l.AK)("flex flex-col gap-5 z-[1] p-6 lg:py-10",o&&"py-5",r),children:e})]})},h=function(t){var e=t.children,r=t.className,n=t.maxWidth,i=void 0===n?"7xl":n;return(0,p.jsx)(c.Z,{children:(0,p.jsx)(s.Z,{maxWidth:i,className:(0,l.AK)("flex flex-col gap-10 z-[1] p-6 lg:py-10 mx-auto",r),children:e})})};e.ZP=function(t){var e=t.children,r=void 0===e?[]:e;return(0,p.jsxs)("div",{className:"flex flex-col min-h-screen",children:[(0,p.jsx)(a.Z,{}),(0,p.jsxs)("div",{className:"flex flex-col items-center flex-grow w-full",children:[(0,p.jsx)("div",{className:"flex flex-col flex-grow w-full",children:r}),(0,p.jsx)(o.Z,{})]}),(0,p.jsx)(i.Z,{})]})}},96216:function(t,e,r){"use strict";r.r(e);var n=r(49501),s=r(56785),i=r(22680),a=(r(67294),r(85893));e.default=function(){var t=(0,n.mV)().i18n;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.CV,{className:"sm:!flex-row justify-between items-center",pattern:"bg-bubble",children:(0,a.jsxs)("div",{children:[(0,a.jsx)(s.Z,{variant:"h2",className:"text-high-emphesis",weight:700,children:t._(t._("BentoBox Explorer"))}),(0,a.jsx)(s.Z,{variant:"sm",weight:400,children:t._(t._("Explore the BentoBox"))})]})}),(0,a.jsx)(i.A9,{children:"Test..."})]})}},80517:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/bentobox/explorer",function(){return r(96216)}])}},function(t){t.O(0,[9774,2888,179],(function(){return e=80517,t(t.s=e);var e}));var e=t.O();_N_E=e}]);