(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8274],{51820:function(e,t,i){"use strict";i.d(t,{Z:function(){return u}});var n=i(83946),r=i(19013),o=i(13882);function u(e,t){(0,o.Z)(2,arguments);var i=(0,r.Z)(e).getTime(),u=(0,n.Z)(t);return new Date(i+u)}},11640:function(e,t,i){"use strict";i.d(t,{Z:function(){return u}});var n=i(83946),r=i(19013),o=i(13882);function u(e,t){(0,o.Z)(2,arguments);var i=(0,r.Z)(e),u=(0,n.Z)(t);if(isNaN(u))return new Date(NaN);if(!u)return i;var l=i.getDate(),s=new Date(i.getTime());s.setMonth(i.getMonth()+u+1,0);var a=s.getDate();return l>=a?s:(i.setFullYear(s.getFullYear(),s.getMonth(),l),i)}},61973:function(e,t,i){"use strict";i.d(t,{Z:function(){return u}});var n=i(83946),r=i(51820),o=i(13882);function u(e,t){(0,o.Z)(2,arguments);var i=(0,n.Z)(t);return(0,r.Z)(e,1e3*i)}},81289:function(e,t,i){"use strict";i.d(t,{Z:function(){return s}});var n=i(83946),r=i(51820),o=i(13882),u=36e5;function l(e,t){(0,o.Z)(2,arguments);var i=(0,n.Z)(t);return(0,r.Z)(e,i*u)}function s(e,t){(0,o.Z)(2,arguments);var i=(0,n.Z)(t);return l(e,-i)}},54559:function(e,t,i){"use strict";i.d(t,{Z:function(){return u}});var n=i(83946),r=i(11640),o=i(13882);function u(e,t){(0,o.Z)(2,arguments);var i=(0,n.Z)(t);return(0,r.Z)(e,-i)}},85899:function(e,t,i){"use strict";i.d(t,{Z:function(){return l}});var n=i(83946),r=i(77349),o=i(13882);function u(e,t){(0,o.Z)(2,arguments);var i=(0,n.Z)(t),u=7*i;return(0,r.Z)(e,u)}function l(e,t){(0,o.Z)(2,arguments);var i=(0,n.Z)(t);return u(e,-i)}},6758:function(e,t,i){"use strict";i.d(t,{Z:function(){return l}});var n=i(83946),r=i(11640),o=i(13882);function u(e,t){(0,o.Z)(2,arguments);var i=(0,n.Z)(t);return(0,r.Z)(e,12*i)}function l(e,t){(0,o.Z)(2,arguments);var i=(0,n.Z)(t);return u(e,-i)}},278:function(e){e.exports=function(e,t){var i=-1,n=e.length;for(t||(t=Array(n));++i<n;)t[i]=e[i];return t}},57043:function(e,t,i){var n=i(62488),r=i(21078),o=i(278),u=i(1469);e.exports=function(){var e=arguments.length;if(!e)return[];for(var t=Array(e-1),i=arguments[0],l=e;l--;)t[l-1]=arguments[l];return n(u(i)?o(i):[i],r(t,1))}},93688:function(e,t,i){"use strict";var n,r=i(13752),o=i(31969),u=i(85893);!function(e){e[e.REPEAT=0]="REPEAT",e[e.SINGLE=1]="SINGLE"}(n||(n={}));var l={"bg-bars":{type:n.REPEAT,url:"https://app.sushi.com/images/trident/bars-pattern.png"},"bg-binary":{type:n.REPEAT,url:"https://app.sushi.com/images/trident/binary-pattern.png"},"bg-bubble":{type:n.REPEAT,url:"https://app.sushi.com/images/trident/bubble-pattern.png"},"bg-dots":{type:n.REPEAT,url:"https://app.sushi.com/images/trident/dots-pattern.png"},"bg-x-times-y-is-k":{type:n.REPEAT,url:"https://app.sushi.com/images/trident/x-times-y-is-k.png"},"bg-wavy":{type:n.REPEAT,url:"https://app.sushi.com/images/trident/wavy-pattern.png"},"bg-chevron":{type:n.REPEAT,url:"https://app.sushi.com/images/trident/chevron-pattern.png"},"miso-bowl":{type:n.SINGLE,url:"https://app.sushi.com/images/miso/banner.jpg"}};t.Z=function(e){var t=e.variant;if(!t)return(0,u.jsx)("div",{className:"absolute inset-0 bg-dark-900/30"});var i=l[t],s=i.type,a=i.url;return s===n.REPEAT?(0,u.jsx)("div",{className:(0,o.AK)("absolute inset-0 flex flex-col items-center bg-dark-900/30"),children:(0,u.jsx)("div",{className:(0,o.AK)("absolute inset-0 w-full h-full z-0 opacity-10",t)})}):(0,u.jsx)(r.Z,{alt:"background image",src:a,objectFit:"cover",objectPosition:"center",layout:"fill",priority:!0})}},89046:function(e,t,i){"use strict";i.d(t,{G0:function(){return l},RR:function(){return u},_O:function(){return o},k9:function(){return r},vu:function(){return s},zm:function(){return a}});var n=i(31969),r={ConstantProduct:{label:"Classic",label_long:"Classic Pool",color:"default",description:"Most common, traditional 50/50 value split between assets",long_description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim bibendum in ut amet, sit fames. Iaculis ultrices sit fermentum commodo nisl eget etiam fusce ac. Risus enim sollicitudin phasellus nibh. Neque turpis amet at scelerisque vitae nibh magna. Aliquet ut natoque quisque eget pellentesque id. Convallis enim.",image:{url:"/images/trident/a-b-pool.png",width:121,height:95}},Weighted:{label:"Index",label_long:"Index Pool",color:"yellow",description:"Two asset pools, with the value split skewed higher towards one.",long_description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim bibendum in ut amet, sit fames. Iaculis ultrices sit fermentum commodo nisl eget etiam fusce ac. Risus enim sollicitudin phasellus nibh. Neque turpis amet at scelerisque vitae nibh magna. Aliquet ut natoque quisque eget pellentesque id. Convallis enim.",image:{url:"/images/trident/index-pool-scale.png",width:151,height:95}},ConcentratedLiquidity:{label:"Concentrated",label_long:"Concentrated Range",color:"purple",description:"Same value makeup of a classic pool, but for a specific price range",long_description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim bibendum in ut amet, sit fames. Iaculis ultrices sit fermentum commodo nisl eget etiam fusce ac. Risus enim sollicitudin phasellus nibh. Neque turpis amet at scelerisque vitae nibh magna. Aliquet ut natoque quisque eget pellentesque id. Convallis enim.",image:{url:"/images/trident/a-b-pool.png",width:151,height:95}},Hybrid:{label:"Stable",label_long:"Stable Pool",color:"blue",description:"3 to 32 assets, with tokens deposited in equal values",long_description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim bibendum in ut amet, sit fames. Iaculis ultrices sit fermentum commodo nisl eget etiam fusce ac. Risus enim sollicitudin phasellus nibh. Neque turpis amet at scelerisque vitae nibh magna. Aliquet ut natoque quisque eget pellentesque id. Convallis enim.",image:{url:"/images/trident/a-b-pool.png",width:121,height:95}}},o="overflow-x-auto border border-dark-900 rounded shadow-md bg-[rgba(0,0,0,0.12)]",u="w-full border-collapse",l=function(e,t){return(0,n.AK)("text-secondary text-sm py-3",0===e?"pl-4 text-left":"text-right",e===t-1?"pr-4":"")},s="hover:bg-dark-900/40 hover:cursor-pointer",a=function(e,t){return(0,n.AK)("py-3 border-t border-dark-900 flex items-center",0===e?"pl-4 justify-start":"justify-end",e===t-1?"pr-4":"")}},85843:function(e,t,i){"use strict";i.d(t,{y:function(){return l}});var n=i(41626),r=i(25675),o=i.n(r),u=(i(67294),i(85893)),l=function(e){var t=e.assets,i=e.twapEnabled,r=t.map((function(e){return e.symbol})).join("-");return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("div",{className:"flex items-center gap-2 overflow-hidden",children:[(0,u.jsx)(n.B,{currencies:t,size:40,dense:!0}),(0,u.jsx)("div",{id:"pool-".concat(r),className:"overflow-hidden font-bold text-high-emphesis overflow-ellipsis whitespace-nowrap",children:r}),i&&(0,u.jsx)("div",{className:"w-3.5",children:(0,u.jsx)(o(),{src:"https://app.sushi.com/images/rss.svg",alt:"rss icon",layout:"responsive",width:"14",height:"14"})})]})})}},26797:function(e,t,i){"use strict";i.d(t,{S:function(){return r},_:function(){return n}});var n=function(e,t,i){return e.filter((function(e){var t=e.original;if(i.twapEnabled&&!t.twapEnabled)return!1;var n=[t.token0,t.token1].map((function(e){return e.symbol})).concat([t.token0,t.token1].map((function(e){return e.name}))).join(" ").toLowerCase();return!i.searchQuery.length||n.includes(i.searchQuery.toLowerCase())}))},r=function(e,t,i){return e.filter((function(e){var t=e.original;return!i.feeTiersSelected.length||i.feeTiersSelected.includes(t.swapFee)}))}},22680:function(e,t,i){"use strict";i.d(t,{A9:function(){return v},CV:function(){return d}});var n=i(93688),r=i(72457),o=i(39810),u=i(23573),l=i(52907),s=i(76844),a=i(31969),c=(i(67294),i(85893)),d=function(e){var t=e.children,i=e.className,o=e.pattern,u=e.maxWidth,l=void 0===u?"7xl":u,s=e.condensed;return(0,c.jsxs)("header",{className:"relative flex flex-col items-center justify-center w-full",children:[(0,c.jsx)(n.Z,{variant:o}),(0,c.jsx)(r.Z,{maxWidth:l,className:(0,a.AK)("flex flex-col gap-5 z-[1] p-6 lg:py-10",s&&"py-5",i),children:t})]})},v=function(e){var t=e.children,i=e.className,n=e.maxWidth,o=void 0===n?"7xl":n;return(0,c.jsx)(l.Z,{children:(0,c.jsx)(r.Z,{maxWidth:o,className:(0,a.AK)("flex flex-col gap-10 z-[1] p-6 lg:py-10 mx-auto",i),children:t})})};t.ZP=function(e){var t=e.children,i=void 0===t?[]:t;return(0,c.jsxs)("div",{className:"flex flex-col min-h-screen",children:[(0,c.jsx)(u.Z,{}),(0,c.jsxs)("div",{className:"flex flex-col items-center flex-grow w-full",children:[(0,c.jsx)("div",{className:"flex flex-col flex-grow w-full",children:i}),(0,c.jsx)(s.Z,{})]}),(0,c.jsx)(o.Z,{})]})}},25361:function(e,t,i){"use strict";i.d(t,{By:function(){return m},G_:function(){return f},IA:function(){return h},Ll:function(){return p},fv:function(){return g}});var n=i(59499),r=i(31969),o=i(62483),u=i(84329),l=i(35035),s=i.n(l),a=i(8100),c=i(94348);function d(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function v(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?d(Object(i),!0).forEach((function(t){(0,n.Z)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):d(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function f(e){var t=e.chainId,i=e.variables,n=e.shouldFetch,r=void 0===n||n,u=e.swrConfig,l=void 0===u?void 0:u,d=(0,o.e_)();return(0,a.ZP)(r&&t?["trident-pools",t,s()(i)]:null,(function(){return(0,c.RD)({chainId:t,variables:i,tokens:d})}),l).data}function m(e){var t=e.chainId,i=e.variables,n=e.shouldFetch,r=void 0===n||n,o=e.swrConfig,u=void 0===o?void 0:o;return(0,a.ZP)(r&&t?["trident-pool-hour-buckets",t,s()(i)]:null,(function(){return(0,c.$P)(t,i)}),u).data}function p(e){var t=e.chainId,i=e.variables,n=e.shouldFetch,r=void 0===n||n,o=e.swrConfig,u=void 0===o?void 0:o;return(0,a.ZP)(r&&t?["trident-pool-day-buckets",t,s()(i)]:null,(function(){return(0,c.BU)(t,i)}),u).data}function h(e){var t=e.chainId,i=e.variables,n=e.shouldFetch,o=void 0===n||n,l=e.swrConfig,d=void 0===l?void 0:l,f=(0,u.ZU)({chainId:t,shouldFetch:!!t}).data,m=(0,u.G9)({chainId:t,shouldFetch:!!t}).data,p=function(e){var t=e.chainId,i=e.variables,n=e.shouldFetch,r=void 0===n||n,o=e.swrConfig,u=void 0===o?void 0:o;return(0,a.ZP)(r&&t?["trident-pool-kpis",t,s()(i)]:null,(function(){return(0,c.zY)(t,i)}),u)}({chainId:t,shouldFetch:o,variables:i,swrConfig:d}),h=p.data,g=p.isValidating,b=p.error,w=function(e){var t=e.chainId,i=e.variables,n=e.shouldFetch,r=void 0===n||n,o=e.swrConfig,u=void 0===o?void 0:o;return(0,a.ZP)(r&&t?["trident-pool-kpis",t,s()(i)]:null,(function(){return(0,c.zY)(t,i)}),u)}({chainId:t,shouldFetch:o,variables:v(v({},i),{},{block:f}),swrConfig:d}),x=w.data,y=w.isValidating,Z=w.error,D=function(e){var t=e.chainId,i=e.variables,n=e.shouldFetch,r=void 0===n||n,o=e.swrConfig,u=void 0===o?void 0:o;return(0,a.ZP)(r&&t?["trident-pool-kpis",t,s()(i)]:null,(function(){return(0,c.zY)(t,i)}),u)}({chainId:t,shouldFetch:o,variables:v(v({},i),{},{block:m}),swrConfig:d}),j=D.data,S=D.isValidating,C=D.error;return{isValidating:g||y||S,error:b||Z||C,data:null===h||void 0===h?void 0:h.map((function(e){var t=null===x||void 0===x?void 0:x.find((function(t){return t.id===e.id})),i=null===j||void 0===j?void 0:j.find((function(t){return t.id===e.id})),n=(0,r.uf)(null!==t&&void 0!==t&&t.volumeUSD?e.volumeUSD-t.volumeUSD:e.volumeUSD,!0,!1),o=((null===e||void 0===e?void 0:e.volumeUSD)-(null===t||void 0===t?void 0:t.volumeUSD))/((null===t||void 0===t?void 0:t.volumeUSD)-(null===i||void 0===i?void 0:i.volumeUSD))*100-100,u=(0,r.uf)(t?(null===e||void 0===e?void 0:e.feesUSD)-(null===t||void 0===t?void 0:t.feesUSD):null===e||void 0===e?void 0:e.feesUSD,!0,!1),l=((null===e||void 0===e?void 0:e.feesUSD)-(null===t||void 0===t?void 0:t.feesUSD))/((null===t||void 0===t?void 0:t.feesUSD)-(null===i||void 0===i?void 0:i.feesUSD))*100-100,s=(0,r.T3)((t?(null===e||void 0===e?void 0:e.volumeUSD)-(null===t||void 0===t?void 0:t.volumeUSD):null===e||void 0===e?void 0:e.volumeUSD)/(null===e||void 0===e?void 0:e.liquidityUSD)*100),a=t?e.transactionCount-t.transactionCount:e.transactionCount,c=e.liquidityUSD>0?365*Math.max(0,t?(null===e||void 0===e?void 0:e.feesUSD)-(null===t||void 0===t?void 0:t.feesUSD):null===e||void 0===e?void 0:e.feesUSD)*100/(null===e||void 0===e?void 0:e.liquidityUSD):0;return{volume:n,volume24hChange:o,fees:u,fees24hChange:l,liquidity:s,liquidity24hChange:((null===e||void 0===e?void 0:e.volumeUSD)-(null===t||void 0===t?void 0:t.volumeUSD))/(null===e||void 0===e?void 0:e.liquidityUSD)/(((null===t||void 0===t?void 0:t.volumeUSD)-(null===i||void 0===i?void 0:i.volumeUSD))/(null===t||void 0===t?void 0:t.liquidityUSD))*100-100,transactions:a,transactions24hChange:((null===e||void 0===e?void 0:e.transactionCount)-(null===t||void 0===t?void 0:t.transactionCount))/((null===t||void 0===t?void 0:t.transactionCount)-(null===i||void 0===i?void 0:i.transactionCount))*100-100,apy:c}}))}}var g=function(e){var t=e.chainId,i=e.variables,n=e.shouldFetch,r=void 0===n||n,u=e.swrConfig,l=void 0===u?void 0:u,s=(0,o.e_)();return(0,a.ZP)(r?["getAllTridentPools",t]:null,(function(){return(0,c.RD)({chainId:t,variables:i,tokens:s})}),l)}},68163:function(e,t,i){"use strict";var n=i(67294);const r=n.forwardRef((function(e,t){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),n.createElement("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"}))}));t.Z=r}}]);