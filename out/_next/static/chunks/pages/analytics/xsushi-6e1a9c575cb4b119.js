(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6348],{93688:function(t,e,n){"use strict";var r,i=n(13752),s=n(31969),a=n(85893);!function(t){t[t.REPEAT=0]="REPEAT",t[t.SINGLE=1]="SINGLE"}(r||(r={}));var u={"bg-bars":{type:r.REPEAT,url:"https://app.sushi.com/images/trident/bars-pattern.png"},"bg-binary":{type:r.REPEAT,url:"https://app.sushi.com/images/trident/binary-pattern.png"},"bg-bubble":{type:r.REPEAT,url:"https://app.sushi.com/images/trident/bubble-pattern.png"},"bg-dots":{type:r.REPEAT,url:"https://app.sushi.com/images/trident/dots-pattern.png"},"bg-x-times-y-is-k":{type:r.REPEAT,url:"https://app.sushi.com/images/trident/x-times-y-is-k.png"},"bg-wavy":{type:r.REPEAT,url:"https://app.sushi.com/images/trident/wavy-pattern.png"},"bg-chevron":{type:r.REPEAT,url:"https://app.sushi.com/images/trident/chevron-pattern.png"},"miso-bowl":{type:r.SINGLE,url:"https://app.sushi.com/images/miso/banner.jpg"}};e.Z=function(t){var e=t.variant;if(!e)return(0,a.jsx)("div",{className:"absolute inset-0 bg-dark-900/30"});var n=u[e],o=n.type,c=n.url;return o===r.REPEAT?(0,a.jsx)("div",{className:(0,s.AK)("absolute inset-0 flex flex-col items-center bg-dark-900/30"),children:(0,a.jsx)("div",{className:(0,s.AK)("absolute inset-0 w-full h-full z-0 opacity-10",e)})}):(0,a.jsx)(i.Z,{alt:"background image",src:c,objectFit:"cover",objectPosition:"center",layout:"fill",priority:!0})}},13752:function(t,e,n){"use strict";n.d(e,{Z:function(){return h}});var r=n(59499),i=n(4730),s=n(31969),a=n(25675),u=n.n(a),o=n(85893),c=["src","width","height","layout"];function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){(0,r.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var h=function(t){var e,n,r,a=t.src,l=t.width,h=t.height,p=t.layout,f=(0,i.Z)(t,c),x=parseInt(String(h),10)>=40&&parseInt(String(l),10)>=40,m="string"===typeof a&&a.includes("http")?s.HT:void 0;return(0,o.jsx)("div",{style:{width:l,height:h},className:"overflow-hidden rounded",children:x?(0,o.jsx)(u(),d({loader:m,src:a,width:l,height:h,layout:p,placeholder:"blur",blurDataURL:"data:image/svg+xml;base64,".concat((n=l,r=h,e='\n<svg width="'.concat(n,'" height="').concat(r,'" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n  <defs>\n    <linearGradient id="g">\n      <stop stop-color="#333" offset="20%" />\n      <stop stop-color="#222" offset="50%" />\n      <stop stop-color="#333" offset="70%" />\n    </linearGradient>\n  </defs>\n  <rect width="').concat(n,'" height="').concat(r,'" fill="#333" />\n  <rect id="r" width="').concat(n,'" height="').concat(r,'" fill="url(#g)" />\n  <animate xlink:href="#r" attributeName="x" from="-').concat(n,'" to="').concat(n,'" dur="1s" repeatCount="indefinite"  />\n</svg>'),window.btoa(e)))},f)):(0,o.jsx)(u(),d({loader:m,src:a,width:l,height:h,layout:p,placeholder:"empty"},f))})}},28297:function(t,e,n){"use strict";n.d(e,{Z:function(){return i}});n(67294);var r=n(85893);function i(t){var e=t.text,n=t.number;return(0,r.jsxs)("div",{className:"w-full py-3 border px-9 border-dark-900 rounded shadow-md bg-[rgba(0,0,0,0.12)]",children:[(0,r.jsx)("div",{className:"whitespace-nowrap",children:e}),(0,r.jsx)("div",{className:"text-2xl font-bold",children:n})]})}},22680:function(t,e,n){"use strict";n.d(e,{A9:function(){return h},CV:function(){return d}});var r=n(93688),i=n(72457),s=n(39810),a=n(23573),u=n(52907),o=n(76844),c=n(31969),l=(n(67294),n(85893)),d=function(t){var e=t.children,n=t.className,s=t.pattern,a=t.maxWidth,u=void 0===a?"7xl":a,o=t.condensed;return(0,l.jsxs)("header",{className:"relative flex flex-col items-center justify-center w-full",children:[(0,l.jsx)(r.Z,{variant:s}),(0,l.jsx)(i.Z,{maxWidth:u,className:(0,c.AK)("flex flex-col gap-5 z-[1] p-6 lg:py-10",o&&"py-5",n),children:e})]})},h=function(t){var e=t.children,n=t.className,r=t.maxWidth,s=void 0===r?"7xl":r;return(0,l.jsx)(u.Z,{children:(0,l.jsx)(i.Z,{maxWidth:s,className:(0,c.AK)("flex flex-col gap-10 z-[1] p-6 lg:py-10 mx-auto",n),children:e})})};e.ZP=function(t){var e=t.children,n=void 0===e?[]:e;return(0,l.jsxs)("div",{className:"flex flex-col min-h-screen",children:[(0,l.jsx)(a.Z,{}),(0,l.jsxs)("div",{className:"flex flex-col items-center flex-grow w-full",children:[(0,l.jsx)("div",{className:"flex flex-col flex-grow w-full",children:n}),(0,l.jsx)(o.Z,{})]}),(0,l.jsx)(s.Z,{})]})}},62576:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSP:function(){return q},default:function(){return K}});var r=n(49501),i=n(59499),s=n(11728),a=n(27812),u=n(29223),o=n(41788),c=n(55185),l=n(99540),d=n(24764),h=n(99599),p=n(30593),f=n(27674),x=n(86368),m=n(8035),v=n(9089),b=n(27459),g=n(67294),y=n(31969),j=n(85893);function w(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function S(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?w(Object(n),!0).forEach((function(e){(0,i.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var Z=function(t){return new Date(t.date)},k=function(t){return t.value},O={top:10,bottom:15,left:50,right:50},P="brush_pattern",A={fill:"url(#".concat(P,")"),stroke:"currentColor"},E="rgba(191, 191, 191, 0.4)",_={textAnchor:"middle",fontFamily:"Helvetica",fontSize:10,fill:E},N={dx:"-0.25em",dy:"0.25em",fontFamily:"Helvetica",fontSize:10,textAnchor:"end",fill:E},T=function(t){var e=t.width,n=t.height,r=t.margin,i=void 0===r?{top:96,right:48,bottom:16,left:64}:r,s=t.data,w=t.title,T=void 0===w?"":w,M=t.labels,D=void 0===M?void 0:M,C=t.timespans,R=void 0===C?[]:C,B=t.defaultTimespan,H=void 0===B?void 0:B,I=t.colors,$=void 0===I?["#A755DD","#F338C3","#0993EC"]:I,F=(0,g.useState)(null===R||void 0===R?void 0:R.find((function(t){return t.text===H}))),U=F[0],q=F[1],K=(0,g.useRef)(null),L=s.reduce((function(t,e){return t.concat(e)}),[]),W=(0,g.useState)(s.map((function(t){return t.slice(t.length-30,t.length-1)}))),X=W[0],z=W[1],Y=n-i.top-i.bottom,V=.8*Y-40,G=Y-V-30,Q=e>520?10:5,J=Math.max(e-i.left-i.right,0),tt=Math.max(V,0),et=(0,g.useMemo)((function(){return(0,f.Z)({range:[0,J],domain:(0,v.Z)(X.reduce((function(t,e){return t.concat(e)}),[]),Z),nice:!0})}),[J,X]),nt=(0,g.useMemo)((function(){return(0,x.Z)({range:[tt,0],domain:[Math.min.apply(Math,(0,a.Z)(X.reduce((function(t,e){return t.concat(e)}),[]).map((function(t){return k(t)})))),Math.max.apply(Math,(0,a.Z)(X.reduce((function(t,e){return t.concat(e)}),[]).map((function(t){return k(t)}))))],nice:!0})}),[tt,X]),rt=Math.max(e-O.left-O.right,0),it=Math.max(G-O.top-O.bottom,0),st=(0,g.useMemo)((function(){return(0,f.Z)({range:[0,rt],domain:(0,v.Z)(L,Z)})}),[rt,L]),at=(0,g.useMemo)((function(){return(0,x.Z)({range:[it,0],domain:[Math.min.apply(Math,(0,a.Z)(L.map((function(t){return k(t)})))),Math.max.apply(Math,(0,a.Z)(L.map((function(t){return k(t)}))))],nice:!0})}),[it,L]),ut=(0,g.useMemo)((function(){return{start:{x:st(Z(s[0][s[0].length>=60?s[0].length-60:0]))},end:{x:st(Z(s[0][s[0].length-1]))}}}),[st,s]),ot=function(t){if(null!==K&&void 0!==K&&K.current){K.current.updateBrush((function(e){var n=s[0][s[0].length-1].date,r=s[0].find((function(e){return e.date>=n-1e3*t.length})),i=K.current.getExtent({x:st(Z(r)),y:ut.start.y},ut.end);return S(S({},e),{},{start:{y:i.y0,x:i.x0},end:{y:i.y1,x:i.x1},extent:i})}))}};return(0,g.useEffect)((function(){return ot(null===R||void 0===R?void 0:R.find((function(t){return t.text===H})))}),[]),e<10?null:(0,j.jsxs)("div",{className:"relative h-full",style:{width:e},children:[(0,j.jsxs)("div",{className:"absolute w-full p-6",children:[(0,j.jsxs)("div",{className:"flex flex-row items-center space-x-4",children:[(0,j.jsx)("div",{className:"text-2xl font-bold text-high-emphesis whitespace-nowrap",children:T}),(0,j.jsx)("div",{className:"flex flex-row space-x-2",children:null===D||void 0===D?void 0:D.map((function(t,e){return(0,j.jsxs)("div",{className:"flex flex-row items-center px-2 py-1 text-xs bg-opacity-30 rounded-xl whitespace-nowrap",style:{color:$[e],backgroundColor:"".concat($[e],"25")},children:[(0,j.jsx)("div",{className:"h-[6px] w-[6px] rounded-full mr-1",style:{backgroundColor:$[e]}})," ",t]},t)}))})]}),(0,j.jsx)("div",{className:"flex justify-end",children:null===R||void 0===R?void 0:R.map((function(t){return(0,j.jsx)("button",{className:(0,y.AK)(t===U?"text-blue bg-blue bg-opacity-30 rounded-xl font-bold border border-blue border-opacity-50":"text-secondary","text-sm px-3 py-0.5"),onClick:function(){q(t),ot(t)},children:t.text},t.text)}))})]}),(0,j.jsxs)("svg",{width:e,height:n,children:[(0,j.jsx)("rect",{x:0,y:0,width:e,height:n,fill:"transparent"}),(0,j.jsx)(l.Z,{top:i.top,left:i.left,scale:nt,width:J,height:tt,numTicks:7,stroke:E,strokeOpacity:.4}),(0,j.jsx)(d.Z,{top:i.top,left:i.left,scale:et,height:tt,numTicks:Q,stroke:E,strokeOpacity:.4}),(0,j.jsxs)(h.Z,{top:i.top,left:i.left,children:[e>8&&X.map((function(t,e){return(0,j.jsx)(m.Z,{data:t,x:function(t){var e;return null!==(e=et(Z(t)))&&void 0!==e?e:0},y:function(t){var e;return null!==(e=nt(k(t)))&&void 0!==e?e:0},stroke:$[e],strokeWidth:2,strokeOpacity:1},"chart-".concat(e,"-").concat(null===U||void 0===U?void 0:U.text))})),(0,j.jsx)(u.Z,{top:tt,scale:et,stroke:E,strokeWidth:.4,tickLabelProps:function(){return _}}),(0,j.jsx)(o.Z,{scale:nt,numTicks:7,tickFormat:b.ZP,stroke:E,strokeWidth:.4,tickLabelProps:function(){return N}})]}),(0,j.jsxs)(h.Z,{top:V+40+i.top,left:O.left,children:[s.map((function(t,n){return(0,j.jsx)(m.Z,{stroke:$[n],strokeWidth:2,strokeOpacity:1,data:t,width:e,x:function(t){var e;return null!==(e=st(Z(t)))&&void 0!==e?e:0},y:function(t){var e;return null!==(e=at(k(t)))&&void 0!==e?e:0}},n)})),(0,j.jsx)(p.Z,{id:P,height:8,width:8,stroke:"#6c5efb",strokeWidth:1,orientation:["diagonal"]}),(0,j.jsx)(c.Z,{innerRef:K,xScale:st,yScale:at,width:rt,height:it,margin:O,handleSize:8,resizeTriggerAreas:["left","right"],brushDirection:"horizontal",initialBrushPosition:ut,onChange:function(t){if(t){var e=t.x0,n=t.x1,r=t.y0,i=t.y1,a=s.map((function(t){return t.filter((function(t){var s=Z(t).getTime(),a=k(t);return s>e&&s<n&&a>r&&a<i}))}));z(a)}},onClick:function(){return z(s)},selectedBoxStyle:A})]})]})]})};function M(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function D(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?M(Object(n),!0).forEach((function(e){(0,i.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function C(t){var e;return(0,j.jsx)(j.Fragment,{children:t.data&&0!==(null===(e=t.data[0])||void 0===e?void 0:e.length)&&(0,j.jsx)(s.Z,{children:function(e){var n=e.width,r=e.height;return(0,j.jsx)(T,D(D({},t),{},{width:n,height:r}))}})})}var R=n(56785),B=n(28297),H=n(22680),I=n(17847),$=n(2962),F=n(8100),U=[{text:"1W",length:604800},{text:"1M",length:2629746},{text:"1Y",length:31556952},{text:"ALL",length:1/0}],q=!0;function K(t){var e=t.fallback;return(0,j.jsx)(F.J$,{value:{fallback:e},children:(0,j.jsx)(L,{})})}function L(){var t,e,n,i,s=(0,r.mV)().i18n,a=(0,F.ZP)("/api/analytics/xsushi",(function(t){return fetch(t).then((function(t){return t.json()}))})).data,u=(0,g.useMemo)((function(){return[{title:"xSushi APY",labels:["APY %"],defaultTimespan:"1Y",data:[a.chart.map((function(t){return{date:1e3*t.date,value:t.apy}})).filter((function(t){return 0!==t.value}))]},{title:"xSushi Supply Movements",labels:["Daily Minted","Daily Burned"],defaultTimespan:"1M",data:[a.chart.map((function(t){return{date:1e3*t.date,value:t.sushiStaked}})),a.chart.map((function(t){return{date:1e3*t.date,value:t.sushiHarvested}}))]},{title:"xSushi Total Supply",labels:["Supply"],defaultTimespan:"1M",data:[a.chart.map((function(t){return{date:1e3*t.date,value:t.xSushiSupply}}))]}]}),[a]),o=(0,I.C3)({days:30}).data,c=(0,I.C3)({days:90}).data,l=(0,I.C3)({days:180}).data;return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)($.PB,{title:"Farm Analytics"}),(0,j.jsx)(H.CV,{className:"sm:!flex-row justify-between items-center",pattern:"bg-bubble",children:(0,j.jsxs)("div",{children:[(0,j.jsx)(R.Z,{variant:"h2",className:"text-high-emphesis",weight:700,children:s._(s._("xSUSHI Analytics."))}),(0,j.jsx)(R.Z,{variant:"sm",weight:400,children:s._(s._("Find out all about xSushi here."))})]})}),(0,j.jsx)(H.A9,{children:(0,j.jsxs)("div",{className:"space-y-5",children:[(0,j.jsxs)("div",{className:"grid grid-flow-col gap-4 overflow-auto grid-col-4",children:[(0,j.jsx)(B.Z,{text:"Price",number:(0,y.uf)(null!==(t=null===a||void 0===a?void 0:a.xSushiPrice)&&void 0!==t?t:0,!0)}),(0,j.jsx)(B.Z,{text:"Market Cap",number:(0,y.uf)(null!==(e=null===a||void 0===a?void 0:a.xSushiMarketcap)&&void 0!==e?e:0,!0,!1)}),(0,j.jsx)(B.Z,{text:"Total Supply",number:(0,y.uf)(null===a||void 0===a?void 0:a.bar.totalSupply)}),(0,j.jsx)(B.Z,{text:"xSUSHI : SUSHI",number:null===(n=Number(null!==(i=null===a||void 0===a?void 0:a.bar.ratio)&&void 0!==i?i:0))||void 0===n?void 0:n.toFixed(4)})]}),(0,j.jsxs)("div",{className:"grid grid-flow-col gap-4 overflow-auto grid-col-4",children:[(0,j.jsx)(B.Z,{text:"APY 1m",number:(0,y.T3)(null===a||void 0===a?void 0:a.apy1m)}),(0,j.jsx)(B.Z,{text:"APY 3m",number:(0,y.T3)(null===a||void 0===a?void 0:a.apy3m)}),(0,j.jsx)(B.Z,{text:"APY 6m",number:(0,y.T3)(null===a||void 0===a?void 0:a.apy6m)}),(0,j.jsx)(B.Z,{text:"APY 1y",number:(0,y.T3)(null===a||void 0===a?void 0:a.apy1y)})]}),(0,j.jsxs)("div",{className:"grid grid-flow-col gap-4 overflow-auto grid-col-4",children:[(0,j.jsx)(B.Z,{text:"Sushi Served 1m",number:(0,y.uf)(o,!1)}),(0,j.jsx)(B.Z,{text:"Sushi Served 3m",number:(0,y.uf)(c,!1)}),(0,j.jsx)(B.Z,{text:"Sushi Served 6m",number:(0,y.uf)(l,!1)})]}),(0,j.jsx)("div",{className:"space-y-4",children:u.map((function(t,e){return(0,j.jsx)("div",{className:(0,y.AK)(0===t.data[0].length&&"hidden","p-1 border border-dark-900 rounded shadow-md bg-[rgba(0,0,0,0.12)]"),children:(0,j.jsx)("div",{className:"w-full h-96",children:(0,j.jsx)(C,{labels:t.labels,title:t.title,timespans:U,defaultTimespan:t.defaultTimespan,data:t.data})})},e)}))})]})})]})}},18426:function(t,e,n){"use strict";n.d(e,{c:function(){return l},q:function(){return c}});var r,i,s=n(59499),a=n(31518),u="https://api.thegraph.com",o="https://q.hg.network",c=(r={},(0,s.Z)(r,a.a_.ETHEREUM,u),(0,s.Z)(r,a.a_.XDAI,u),(0,s.Z)(r,a.a_.MATIC,u),(0,s.Z)(r,a.a_.FANTOM,u),(0,s.Z)(r,a.a_.BSC,u),(0,s.Z)(r,a.a_.AVALANCHE,u),(0,s.Z)(r,a.a_.CELO,u),(0,s.Z)(r,a.a_.ARBITRUM,u),(0,s.Z)(r,a.a_.HARMONY,u),(0,s.Z)(r,a.a_.OKEX,o),(0,s.Z)(r,a.a_.HECO,o),(0,s.Z)(r,a.a_.MOONRIVER,u),(0,s.Z)(r,a.a_.TELOS,u),(0,s.Z)(r,a.a_.KOVAN,u),(0,s.Z)(r,a.a_.FUSE,u),(0,s.Z)(r,a.a_.MOONBEAM,u),(0,s.Z)(r,a.a_.OPTIMISM,u),(0,s.Z)(r,a.a_.KAVA,"https://pvt.graph.kava.io"),(0,s.Z)(r,a.a_.METIS,"https://andromeda.thegraph.metis.io"),r),l=(i={},(0,s.Z)(i,a.a_.MATIC,"sushi-labs/trident-polygon"),(0,s.Z)(i,a.a_.OPTIMISM,"sushi-labs/trident-optimism"),(0,s.Z)(i,a.a_.KAVA,"sushiswap/trident-kava"),(0,s.Z)(i,a.a_.METIS,"sushi-labs/trident-metis"),i)},48798:function(t,e,n){"use strict";n.d(e,{Fg:function(){return E},Gc:function(){return M},lO:function(){return N},zk:function(){return T}});var r,i,s,a,u,o,c=n(50029),l=n(59499),d=n(87794),h=n.n(d),p=n(31518),f=n(18426),x=n(71383),m=n(35306),v=(0,m.ZP)(r||(r=(0,x.Z)(['\n  query barQuery($id: String! = "0x8798249c2e607446efb7ad49ec89dd1865ff4272", $block: Block_height) {\n    bar(id: $id, block: $block) {\n      id\n      totalSupply\n      ratio\n      xSushiMinted\n      xSushiBurned\n      sushiStaked\n      sushiStakedUSD\n      sushiHarvested\n      sushiHarvestedUSD\n      xSushiAge\n      xSushiAgeDestroyed\n      # histories(first: 1000) {\n      #   id\n      #   date\n      #   timeframe\n      #   sushiStaked\n      #   sushiStakedUSD\n      #   sushiHarvested\n      #   sushiHarvestedUSD\n      #   xSushiAge\n      #   xSushiAgeDestroyed\n      #   xSushiMinted\n      #   xSushiBurned\n      #   xSushiSupply\n      #   ratio\n      # }\n    }\n  }\n']))),b=((0,m.ZP)(i||(i=(0,x.Z)(["\n  query barHistoriesQuery {\n    histories(first: 1000) {\n      id\n      date\n      timeframe\n      sushiStaked\n      sushiStakedUSD\n      sushiHarvested\n      sushiHarvestedUSD\n      xSushiAge\n      xSushiAgeDestroyed\n      xSushiMinted\n      xSushiBurned\n      xSushiSupply\n      ratio\n    }\n  }\n"]))),(0,m.ZP)(s||(s=(0,x.Z)(["\n  query barUserQuery($id: String!) {\n    user(id: $id) {\n      id\n      bar {\n        totalSupply\n        sushiStaked\n      }\n      xSushi\n      sushiStaked\n      sushiStakedUSD\n      sushiHarvested\n      sushiHarvestedUSD\n      xSushiIn\n      xSushiOut\n      xSushiOffset\n      xSushiMinted\n      xSushiBurned\n      sushiIn\n      sushiOut\n      usdIn\n      usdOut\n      createdAt\n      createdAtBlock\n    }\n  }\n"]))),(0,m.ZP)(a||(a=(0,x.Z)(['\n  query feesQuery(\n    $first: Int! = 1000\n    $skip: Int! = 0\n    $where: Fee_filter\n    $orderBy: Fee_orderBy! = "createdAtTimestamp"\n    $orderDirection: OrderDirection! = "desc"\n  ) {\n    fees(first: $first, skip: $skip, where: $where, orderBy: $orderBy, orderDirection: $orderDirection) {\n      id\n      amount\n      createdAtTimestamp\n    }\n  }\n'])))),g=(0,m.ZP)(u||(u=(0,x.Z)(['\n  query barXsushiQuery($block: Block_height) {\n    xsushi(id: "xSushi", block: $block) {\n      id\n      sushiHarvested\n      sushiStaked\n      sushiSupply\n      sushiXsushiRatio\n      totalFeeAmount\n      transactionCount\n      userCount\n      xSushiBurned\n      xSushiMinted\n      xSushiSupply\n      xSushiSushiRatio\n    }\n  }\n']))),y=(0,m.ZP)(o||(o=(0,x.Z)(["\n  query barXsushiUserQuery($id: String!, $block: Block_height) {\n    user(id: $id, block: $block) {\n      id\n      balance\n      createdAtBlock\n      createdAtTimestamp\n      modifiedAtBlock\n      modifiedAtTimestamp\n      deposits(first: 1000, orderBy: timestamp, orderBy: desc, orderDirection: desc) {\n        amount\n        xSushiSushiRatio\n        sushiXsushiRatio\n        block\n        id\n        timestamp\n        type\n      }\n      withdrawals(first: 1000, orderBy: timestamp, orderBy: desc, orderDirection: desc) {\n        amount\n        xSushiSushiRatio\n        sushiXsushiRatio\n        block\n        id\n        timestamp\n        type\n      }\n    }\n  }\n"]))),j=n(30301),w=n(18717),S=n(12383),Z=n(7069),k=n(28401),O=n(28687),P=(0,l.Z)({},p.a_.ETHEREUM,"olastenberg/bar"),A=function(){var t=(0,c.Z)(h().mark((function t(e,n){return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,O.request)("".concat(f.q[p.a_.ETHEREUM],"/subgraphs/name/").concat(P[p.a_.ETHEREUM]),e,n));case 1:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),E=function(){var t=(0,c.Z)(h().mark((function t(e){var n,r;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A(v,e);case 2:return n=t.sent,r=n.bar,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),_=function(){var t=(0,c.Z)(h().mark((function t(e,n){return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,O.request)("".concat(f.q[p.a_.ETHEREUM],"/subgraphs/name/jiro-ono/xsushi"),e,n));case 1:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),N=function(){var t=(0,c.Z)(h().mark((function t(e){var n,r;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_(g,e);case 2:return n=t.sent,r=n.xsushi,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),T=function(){var t=(0,c.Z)(h().mark((function t(e){var n,r;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_(y,e);case 2:return n=t.sent,r=n.user,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),M=function(){var t=(0,c.Z)(h().mark((function t(e){var n,r,i,s,a,u;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=(0,j.Z)((0,w.Z)((0,S.Z)((0,Z.Z)(Date.now(),e)))),r=(0,k.Z)(n),i=(0,k.Z)(Date.now()),t.next=5,_(b,{where:{createdAtTimestamp_gt:r,createdAtTimestamp_lt:i}});case 5:return s=t.sent,a=s.fees,u=null===a||void 0===a?void 0:a.reduce((function(t,e){return t+e.amount/1e18}),0),t.abrupt("return",u);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},17847:function(t,e,n){"use strict";n.d(e,{Af:function(){return c},C3:function(){return l},WP:function(){return u},gK:function(){return o}});var r=n(48798),i=n(35035),s=n.n(i),a=n(8100);function u(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.variables,n=t.shouldFetch,i=void 0===n||n,u=t.swrConfig,o=void 0===u?void 0:u;return(0,a.ZP)(i?["bar",s()(e)]:null,(function(){return(0,r.Fg)(e)}),o)}function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.variables,n=t.shouldFetch,i=void 0===n||n,u=t.swrConfig,o=void 0===u?void 0:u;return(0,a.ZP)(i?["barXsushi",s()(e)]:null,(function(){return(0,r.lO)(e)}),o)}function c(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.variables,n=t.shouldFetch,i=void 0===n||n,u=t.swrConfig,o=void 0===u?void 0:u;return(0,a.ZP)(i?["barXsushiUser",s()(e)]:null,(function(){return(0,r.zk)(e)}),o)}function l(t){var e=t.days,n=void 0===e?30:e,i=(t.shouldFetch,t.swrConfig),s=void 0===i?void 0:i;return(0,a.ZP)(n?["barFees",n]:null,(function(t,e){return(0,r.Gc)(e)}),s)}},8654:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/analytics/xsushi",function(){return n(62576)}])}},function(t){t.O(0,[8306,8897,5963,3338,9774,2888,179],(function(){return e=8654,t(t.s=e);var e}));var e=t.O();_N_E=e}]);