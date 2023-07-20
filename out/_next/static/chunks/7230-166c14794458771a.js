"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7230],{17141:function(t,e,r){var s=r(68163),n=r(31969),o=r(85893),a={default:"h-[24px]",sm:"h-5 text-[10px]",lg:"h-12 text-[14px]"},i={filled:{default:"bg-gray-700 text-white",white:"bg-high-emphesis text-dark-700",purple:"bg-purple bg-opacity-25 text-purple",yellow:"bg-yellow bg-opacity-[0.35] text-yellow",blue:"bg-blue bg-opacity-[0.35] text-blue",green:"bg-green bg-opacity-25 text-green",pink:"bg-pink bg-opacity-25 text-pink",red:"bg-red bg-opacity-25 text-red"}};e.Z=function(t){var e=t.label,r=t.color,c=void 0===r?"default":r,l=t.variant,u=void 0===l?"filled":l,h=t.size,g=void 0===h?"default":h,p=t.className,d=void 0===p?"":p,v=t.onClick,f=t.icon,m=void 0===f?void 0:f,b=t.endIcon,w=void 0===b?(0,o.jsx)(s.Z,{width:12,height:12,strokeWidth:5}):b,y=t.id,O=void 0===y?"":y;return(0,o.jsxs)("div",{id:O,className:(0,n.AK)(i[u][c],a[g],v?"pr-1":"pr-3","whitespace-nowrap inline-flex rounded-[12px] py-0.5 pl-3 font-bold text-xs leading-5 gap-2 items-center justify-center",d),children:[m&&(0,o.jsx)("div",{className:"rounded",onClick:v,children:m}),e,v&&(0,o.jsx)("div",{className:"rounded bg-[rgba(255,255,255,0.12)] hover:bg-[rgba(255,255,255,0.24)] cursor-pointer p-0.5",onClick:v,children:w})]})}},35908:function(t,e,r){r.d(e,{N:function(){return d}});var s,n,o=r(27812),a=r(59499),i=r(31518),c=r(45369),l=r(90102),u=r(67294),h=r(65297),g=r(85893),p=(s={},(0,a.Z)(s,i.a_.ETHEREUM,"ethereum"),(0,a.Z)(s,i.a_.BSC,"bsc"),(0,a.Z)(s,i.a_.CELO,"celo"),(0,a.Z)(s,i.a_.FANTOM,"fantom"),(0,a.Z)(s,i.a_.AVALANCHE_TESTNET,"fuji"),(0,a.Z)(s,i.a_.FUSE,"fuse"),(0,a.Z)(s,i.a_.HARMONY,"harmony"),(0,a.Z)(s,i.a_.HECO,"heco"),(0,a.Z)(s,i.a_.MATIC,"matic"),(0,a.Z)(s,i.a_.MOONRIVER,"moonriver"),(0,a.Z)(s,i.a_.OKEX,"okex"),(0,a.Z)(s,i.a_.PALM,"palm"),(0,a.Z)(s,i.a_.TELOS,"telos"),(0,a.Z)(s,i.a_.XDAI,"xdai"),(0,a.Z)(s,i.a_.ARBITRUM,"arbitrum"),(0,a.Z)(s,i.a_.AVALANCHE,"avalanche"),(0,a.Z)(s,i.a_.MOONBEAM,"moonbeam"),(0,a.Z)(s,i.a_.KAVA,"kava"),(0,a.Z)(s,i.a_.METIS,"metis"),(0,a.Z)(s,i.a_.ARBITRUM_NOVA,"arbitrum-nova"),(0,a.Z)(s,i.a_.HARDHAT,"hardhat"),s),d=function(t){var e=[];return t.chainId in p&&(e.push("https://raw.githubusercontent.com/sushiswap/list/master/logos/token-logos/network/".concat(p[t.chainId],"/").concat(t.wrapped.address,".jpg")),e.push("https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/".concat(p[t.chainId],"/assets/").concat(t.wrapped.address,"/logo.png")),e.push("https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/".concat(p[t.chainId],"/assets/").concat(t.wrapped.address,"/logo.png"))),e},v="https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/avax.svg",f="https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/bnb.svg",m="https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/ethereum.svg",b="https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/ftm.svg",w="https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/one.svg",y="https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/ht.svg",O="https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/matic.svg",Z="https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/okt.svg",_="https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/palm.svg",E=(n={},(0,a.Z)(n,i.a_.ETHEREUM,m),(0,a.Z)(n,i.a_.KOVAN,m),(0,a.Z)(n,i.a_.RINKEBY,m),(0,a.Z)(n,i.a_.ROPSTEN,m),(0,a.Z)(n,i.a_["G\xd6RLI"],m),(0,a.Z)(n,i.a_.FANTOM,b),(0,a.Z)(n,i.a_.FANTOM_TESTNET,b),(0,a.Z)(n,i.a_.MATIC,O),(0,a.Z)(n,i.a_.MATIC_TESTNET,O),(0,a.Z)(n,i.a_.XDAI,"https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/xdai.svg"),(0,a.Z)(n,i.a_.BSC,f),(0,a.Z)(n,i.a_.BSC_TESTNET,f),(0,a.Z)(n,i.a_.AVALANCHE,v),(0,a.Z)(n,i.a_.AVALANCHE_TESTNET,v),(0,a.Z)(n,i.a_.HECO,y),(0,a.Z)(n,i.a_.HECO_TESTNET,y),(0,a.Z)(n,i.a_.HARMONY,w),(0,a.Z)(n,i.a_.HARMONY_TESTNET,w),(0,a.Z)(n,i.a_.OKEX,Z),(0,a.Z)(n,i.a_.OKEX_TESTNET,Z),(0,a.Z)(n,i.a_.ARBITRUM,m),(0,a.Z)(n,i.a_.ARBITRUM_TESTNET,m),(0,a.Z)(n,i.a_.CELO,"https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/celo.svg"),(0,a.Z)(n,i.a_.PALM,_),(0,a.Z)(n,i.a_.PALM_TESTNET,_),(0,a.Z)(n,i.a_.MOONRIVER,"https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/movr.svg"),(0,a.Z)(n,i.a_.FUSE,"https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/fuse.svg"),(0,a.Z)(n,i.a_.TELOS,"https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/telos.svg"),(0,a.Z)(n,i.a_.HARDHAT,m),(0,a.Z)(n,i.a_.MOONBEAM,"https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/glmr.svg"),(0,a.Z)(n,i.a_.OPTIMISM,m),(0,a.Z)(n,i.a_.KAVA,"https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/kava.svg"),(0,a.Z)(n,i.a_.ARBITRUM_NOVA,m),(0,a.Z)(n,i.a_.METIS,"https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/metis.svg"),(0,a.Z)(n,i.a_.BOBA_AVAX,"https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/boba.svg"),n);e.Z=function(t){var e=t.currency,r=t.size,s=void 0===r?"24px":r,n=t.className,a=t.style,p=(0,c.Z)(e instanceof l.D?e.logoURI||e.tokenInfo.logoURI:void 0),v=(0,u.useMemo)((function(){if(null!==e&&void 0!==e&&e.isNative||null!==e&&void 0!==e&&e.equals(i.FX[e.chainId]))return[E[e.chainId],h.R];if(null!==e&&void 0!==e&&e.isToken){var t=(0,o.Z)(d(e));return e instanceof l.D?[].concat((0,o.Z)(p),(0,o.Z)(t),[h.R]):t}return[h.R]}),[e,p]);return(0,g.jsx)(h.Z,{srcs:v,width:s,height:s,alt:null===e||void 0===e?void 0:e.symbol,className:n,style:a})}},41626:function(t,e,r){r.d(e,{X:function(){return s.Z},B:function(){return h}});var s=r(35908),n=r(59499),o=r(4730),a=(r(67294),r(56785)),i=r(85893),c=["currencies","dense","maxLogos","size"];function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var h=function(t){var e=t.currencies,r=t.dense,n=void 0!==r&&r,l=t.maxLogos,h=void 0===l?3:l,g=t.size,p=void 0===g?24:g,d=(0,o.Z)(t,c),v=e.length<=h?e:e.slice(0,Math.max(0,Math.min(e.length,h)-1)),f=e.length-v.length;return(0,i.jsxs)("div",{className:"flex",children:[v.map((function(t,e){return(0,i.jsx)("div",{className:"overflow-hidden rounded-full",style:{marginLeft:h>1?0===e?"":n?-Math.floor(p/2-4):-6:0,filter:"drop-shadow(0px 3px 6px rgba(15, 15, 15, 0.25))"},children:(0,i.jsx)(s.Z,u({currency:t,size:p},d))},e)}),[]),f>0&&(0,i.jsx)("div",{className:"rounded-full overflow-hidden flex items-center justify-center z-[1]",style:{marginLeft:h>1?n?-Math.floor(p/2+2):-6:0,width:p,height:p,background:"radial-gradient(50% 50% at 50% 50%, #FFFFFF 0%, #DBDBDB 100%)",filter:"drop-shadow(0px 3px 6px rgba(15, 15, 15, 0.25))"},children:(0,i.jsxs)(a.Z,{weight:700,className:"text-low-emphesis",variant:"sm",children:["+",e.length-h+1]})})]})}},13752:function(t,e,r){r.d(e,{Z:function(){return g}});var s=r(59499),n=r(4730),o=r(31969),a=r(25675),i=r.n(a),c=r(85893),l=["src","width","height","layout"];function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function h(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){(0,s.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var g=function(t){var e,r,s,a=t.src,u=t.width,g=t.height,p=t.layout,d=(0,n.Z)(t,l),v=parseInt(String(g),10)>=40&&parseInt(String(u),10)>=40,f="string"===typeof a&&a.includes("http")?o.HT:void 0;return(0,c.jsx)("div",{style:{width:u,height:g},className:"overflow-hidden rounded",children:v?(0,c.jsx)(i(),h({loader:f,src:a,width:u,height:g,layout:p,placeholder:"blur",blurDataURL:"data:image/svg+xml;base64,".concat((r=u,s=g,e='\n<svg width="'.concat(r,'" height="').concat(s,'" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n  <defs>\n    <linearGradient id="g">\n      <stop stop-color="#333" offset="20%" />\n      <stop stop-color="#222" offset="50%" />\n      <stop stop-color="#333" offset="70%" />\n    </linearGradient>\n  </defs>\n  <rect width="').concat(r,'" height="').concat(s,'" fill="#333" />\n  <rect id="r" width="').concat(r,'" height="').concat(s,'" fill="url(#g)" />\n  <animate xlink:href="#r" attributeName="x" from="-').concat(r,'" to="').concat(r,'" dur="1s" repeatCount="indefinite"  />\n</svg>'),window.btoa(e)))},d)):(0,c.jsx)(i(),h({loader:f,src:a,width:u,height:g,layout:p,placeholder:"empty"},d))})}},65297:function(t,e,r){r.d(e,{R:function(){return u}});var s=r(59499),n=r(31969),o=r(67294),a=r(13752),i=r(85893);function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){(0,s.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var u="https://raw.githubusercontent.com/sushiswap/icons/master/token/unknown.png",h={};e.Z=function(t){var e=t.srcs,r=t.width,s=t.height,c=t.alt,g=void 0===c?"":c,p=t.className,d=t.style,v=(0,o.useState)(0)[1],f=e.find((function(t){return!h[t]})),m=(0,o.useCallback)((function(){f&&(h[f]=!0),v((function(t){return t+1}))}),[f]);return(0,i.jsx)("div",{className:"rounded-full",style:l({width:r,height:s},d),children:(0,i.jsx)(a.Z,{src:f||u,onErrorCapture:m,width:r,height:s,alt:g,layout:"fixed",className:(0,n.AK)("rounded-full",p)})})}},45369:function(t,e,r){r.d(e,{Z:function(){return u}});var s=r(67294),n=r(980),o=r(1901),a=r(84706),i=r(2886),c=r(31969),l=r(54907);function u(t){var e=(0,s.useMemo)((function(){return t?(0,o.y)(t):void 0}),[t]),r=function(t){var e,r,n,o=(0,s.useMemo)((function(){if(!t)return[void 0];try{return t?[(0,a.VM)(t)]:[void 0]}catch(e){return[void 0]}}),[t]),u=(0,l.zb)(!1),h=(0,i.Wk)(u,"resolver",o),g=null===(e=h.result)||void 0===e?void 0:e[0],p=(0,l.uU)(g&&(0,c.Fr)(g)?void 0:g,!1),d=(0,i.Wk)(p,"contenthash",o);return{contenthash:null!==(r=null===(n=d.result)||void 0===n?void 0:n[0])&&void 0!==r?r:null,loading:h.loading||d.loading}}(null===e||void 0===e?void 0:e.ensName);return(0,s.useMemo)((function(){return e?r.contenthash?(0,n.ie)((0,n.il)(r.contenthash)):[]:t?(0,n.ie)(t):[]}),[e,r.contenthash,t])}}}]);