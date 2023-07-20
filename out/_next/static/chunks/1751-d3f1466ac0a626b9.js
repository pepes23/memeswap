"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1751],{80853:function(e,t,n){var r=n(59499),o=n(73850),i=n(54961),a=n(86368),l=n(8035),u=n(98649),c=n(909),s=n(67294),d=n(11728),v=n(85893);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=(0,c.Z)((function(e){return e.x})).center,m=function(e){var t=e.data,n=e.stroke,r=e.strokeWidth,c=e.width,d=e.height,f=e.setSelectedIndex,m=(0,s.useRef)(),g=(0,s.useRef)(),b=(0,s.useMemo)((function(){var e,n,r,o;return(0,a.Z)({domain:[Math.min(null===(e=t[0])||void 0===e?void 0:e.x,null===(n=t[t.length-1])||void 0===n?void 0:n.x),Math.max(null===(r=t[0])||void 0===r?void 0:r.x,null===(o=t[t.length-1])||void 0===o?void 0:o.x)],range:[10,c-10]})}),[t,c]),x=(0,s.useMemo)((function(){var e=t.map((function(e){return e.y}));return(0,a.Z)({domain:[Math.max.apply(Math,e),Math.min.apply(Math,e)],range:[10,d-10]})}),[t,d]),y=(0,s.useCallback)((function(e){var n=((0,o.Z)(e)||{x:0}).x,r=b.invert(n),i=p(t,r,0),a=t[i];a&&m.current!==i&&(m.current=i,g.current.setAttribute("cx",b(a.x).toString()),g.current.setAttribute("cy",x(a.y).toString()),f(i))}),[t,f,b,x]),j=(0,s.useCallback)((function(){g.current.setAttribute("display","block")}),[]),O=(0,s.useCallback)((function(){f(t.length-1),g.current.setAttribute("display","none")}),[t,f]);return(0,v.jsx)("div",{className:"w-full h-full",children:(0,v.jsxs)("svg",{width:c,height:d,children:["gradient"in n&&(0,v.jsx)(i.Z,{id:"gradient",from:n.gradient.from,to:n.gradient.to,vertical:!1}),f&&(0,v.jsx)("g",{children:(0,v.jsx)("circle",{ref:g,r:4,fill:"solid"in n?n.solid:"#ffffff",display:"none"})}),(0,v.jsx)(l.Z,{data:t,x:function(e){var t;return null!==(t=b(e.x))&&void 0!==t?t:0},y:function(e){var t;return null!==(t=x(e.y))&&void 0!==t?t:0},stroke:"solid"in n?n.solid:"url('#gradient')",strokeWidth:r}),(0,v.jsx)(u.Z,h({width:c,height:d,fill:"transparent"},f&&{onTouchStart:y,onTouchMove:y,onMouseEnter:j,onMouseMove:y,onMouseLeave:O}))]})})};t.Z=function(e){var t=e.data,n=e.stroke,r=void 0===n?{solid:"#0993EC"}:n,o=e.strokeWidth,i=void 0===o?1.5:o,a=e.setSelectedIndex;return t?(0,v.jsx)(d.Z,{children:function(e){var n=e.width,o=e.height;return(0,v.jsx)(m,{data:t,stroke:r,strokeWidth:i,width:n,height:o,setSelectedIndex:a})}}):(0,v.jsx)(v.Fragment,{})}},90695:function(e,t,n){n.d(t,{T:function(){return o}});n(67294);var r=n(85893),o=function(e){var t=e.active;return(0,r.jsx)("div",{className:"animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-blue transition ".concat(t?"opacity-100":"opacity-0")})}},40334:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(67294),o=n(80853),i=n(31969),a=n(73803),l=n(85893);function u(e){var t=e.header,n=e.subheader,u=e.figure,c=e.change,s=e.chart,d=e.defaultTimespan,v=e.timespans,f=(0,r.useState)(null===v||void 0===v?void 0:v.find((function(e){return e.text===d}))),h=f[0],p=f[1],m=(0,r.useMemo)((function(){var e=Math.round(Date.now()/1e3);return null===s||void 0===s?void 0:s.reduce((function(t,n){var r=n.x.getTime();return Math.round(r/1e3)>=e-(null===h||void 0===h?void 0:h.length)&&t.push({x:r,y:n.y}),t}),[])}),[s,null===h||void 0===h?void 0:h.length]),g=(0,r.useState)((null===m||void 0===m?void 0:m.length)-1),b=g[0],x=g[1],y=(0,r.useMemo)((function(){var e;return null===m||void 0===m||null===(e=m[b])||void 0===e?void 0:e.y}),[m,b]),j=(0,r.useMemo)((function(){var e;return null===m||void 0===m||null===(e=m[b])||void 0===e?void 0:e.x}),[m,b]);return(0,l.jsxs)("div",{className:"w-full p-5 space-y-4 font-bold border border-dark-900 rounded shadow-md bg-[rgba(0,0,0,0.12)]",children:[(0,l.jsxs)("div",{className:"flex justify-between",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"text-xs text-secondary",children:n}),(0,l.jsx)("div",{className:"text-high-emphesis",children:t})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"flex justify-end text-2xl text-high-emphesis",children:(0,i.uf)(null!==y&&void 0!==y?y:u,!0,!1)}),(0,l.jsxs)("div",{className:"flex flex-row items-center justify-end",children:[b===(null===m||void 0===m?void 0:m.length)-1&&(0,l.jsx)(a.Z,{number:c,percent:!0}),(0,l.jsx)("div",{className:"ml-3 font-normal",children:j?(0,i.p6)(new Date(j)):"Past 24 Hours"})]})]})]}),(0,l.jsx)("div",{className:"py-4 h-36",children:m&&(0,l.jsx)(o.Z,{data:m,stroke:{gradient:{from:"#27B0E6",to:"#FA52A0"}},setSelectedIndex:x})}),(0,l.jsx)("div",{className:"flex flex-row justify-end space-x-4",children:v.map((function(e,t){return(0,l.jsx)("button",{className:(0,i.AK)(e===h?"text-blue bg-blue bg-opacity-30 rounded-xl font-bold border border-blue border-opacity-50":"text-secondary","text-sm px-3 py-0.5"),onClick:function(){return p(e)},children:e.text},t)}))})]})}},73803:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(31969),o=n(85893);function i(e){var t=e.number,n=e.scaleNumber,i=void 0===n||n,a=e.percent,l=void 0!==a&&a,u=e.className,c=void 0===u?"":u;return(isNaN(t)||t===1/0)&&(t=0),(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("div",{className:(0,r.AK)(t>0?"text-green":t<0&&"text-red","font-normal",c),children:(t>0?"+":t<0?"-":"")+(l?(0,r.T3)(t).replace("-",""):i?(0,r.nH)(t,!0).replace("-",""):(0,r.uf)(t,!0,!1).replace("-",""))})})}},29698:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(31969),o=n(73803),i=n(85893);function a(e){var t=e.text,n=e.number,a=e.numberType,l=void 0===a?"usd":a,u=e.percent;return(0,i.jsxs)("div",{className:"w-full p-6 space-y-2 font-bold border border-dark-900 rounded shadow-md bg-[rgba(0,0,0,0.12)]",children:[(0,i.jsx)("div",{className:"whitespace-nowrap",children:t}),(0,i.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,i.jsx)("div",{className:"text-2xl font-bold",children:function(){switch(l){case"usd":return(0,r.uf)(n,!0,!1);case"text":return n;case"percent":return(0,r.T3)(n)}}()}),(0,i.jsx)(o.Z,{number:u,percent:!0})]})]})}},93283:function(e,t,n){n.d(t,{x:function(){return k}});var r=n(59499),o=n(55929),i=n(83567),a=n(49501),l=n(31518),u=n(90695),c=n(89046),s=(n(25361),n(31969)),d=n(61739),v=n(35035),f=n.n(v),h=n(67294),p=n(8100);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var g=function(e){return e.map((function(e){var t="0"===e.amount0In?{type:"Swap ".concat(e.pair.token1.symbol," for ").concat(e.pair.token0.symbol),incomingAmt:"".concat((0,s.uf)(e.amount1In)," ").concat(e.pair.token1.symbol),outgoingAmt:"".concat((0,s.uf)(e.amount0Out)," ").concat(e.pair.token0.symbol)}:{type:"Swap ".concat(e.pair.token0.symbol," for ").concat(e.pair.token1.symbol),incomingAmt:"".concat((0,s.uf)(e.amount0In)," ").concat(e.pair.token0.symbol),outgoingAmt:"".concat((0,s.uf)(e.amount1Out)," ").concat(e.pair.token1.symbol)};return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({value:(0,s.uf)(e.amountUSD,!0),address:e.to,time:e.timestamp,txHash:e.id},t)}))},b=(n(12614),n(11163)),x=n(79521),y=n(56785),j=n(85874),O=n(50442),w=n(40195),P=n(85893);function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var k=function(e){var t=e.pairs,n=(0,b.useRouter)(),r=Number(n.query.chainId),o=function(e,t){var n={where:{pair_in:t}},r=(0,p.ZP)(e&&t?["legacyTransactions",e,f()(n)]:null,(function(){return(0,d.f1)(e,n)})),o=r.data,i=r.error,a=r.isValidating;return{transactions:(0,h.useMemo)((function(){return g(o||[])}),[o]),error:i,loading:a}}(r,t),i=o.transactions,a=o.error,l=o.loading;return(0,P.jsx)(N,{chainId:r,transactions:i,error:a,loading:l})},N=function(e){var t=e.chainId,n=void 0===t?l.a_.ETHEREUM:t,r=e.transactions,d=e.error,v=e.loading,f=(0,a.mV)().i18n,p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l.a_.ETHEREUM,t=arguments.length>1?arguments[1]:void 0,n=(0,h.useMemo)((function(){return[{Header:"Type",accessor:"type",minWidth:200},{Header:"Value",accessor:"value",maxWidth:100},{Header:"In",accessor:"incomingAmt"},{Header:"Out",accessor:"outgoingAmt"},{Header:"Transaction",accessor:"txHash",Cell:function(t){return(0,P.jsx)(O.Z,{color:"blue",href:(0,s.E8)(e,t.cell.value,"transaction"),children:(0,w.X)(t.cell.value)})}},{Header:"Time",accessor:"time",Cell:function(e){return(0,s.s4)(new Date(1e3*Number(e.cell.value)))}}]}),[e]),r=h.useMemo((function(){return{minWidth:0}}),[]);return(0,h.useMemo)((function(){return{config:{columns:n,data:t,defaultColumn:r,initialState:{sortBy:[{id:"time",type:"datetime",desc:!0}]}}}}),[n,r,t])}(n,r),m=p.config,g=(0,x.useTable)(m,x.useSortBy,x.usePagination,x.useFlexLayout),b=g.getTableProps,S=g.getTableBodyProps,k=g.headerGroups,N=g.page,U=g.gotoPage,C=g.canPreviousPage,Z=g.canNextPage,I=g.prepareRow,M=g.state,E=M.pageIndex,T=M.pageSize;return(0,P.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,P.jsxs)("div",{className:"flex items-center gap-3",children:[(0,P.jsx)(y.Z,{variant:"h3",className:"text-high-emphesis",weight:700,children:f._(f._("Transactions"))}),(0,P.jsx)(u.T,{active:v}),d&&(0,P.jsx)("span",{className:"-ml-2 text-sm italic text-red",children:f._(f._("\u26a0\ufe0f Loading Error"))})]}),(0,P.jsx)("div",{className:c._O,children:(0,P.jsxs)("table",D(D({},b()),{},{className:c.RR,children:[(0,P.jsx)("thead",{children:k.map((function(e,t){return(0,h.createElement)("tr",D(D({},e.getHeaderGroupProps()),{},{key:t}),e.headers.map((function(t,n){return(0,h.createElement)("th",D(D({},t.getHeaderProps(t.getSortByToggleProps())),{},{key:n,className:(0,c.G0)(n,e.headers.length)}),t.render("Header"),(0,P.jsx)("span",{className:"inline-block ml-1 align-middle",children:t.isSorted?t.isSortedDesc?(0,P.jsx)(o.Z,{width:12}):(0,P.jsx)(i.Z,{width:12}):""}))})))}))}),(0,P.jsx)("tbody",D(D({},S()),{},{children:N.map((function(e,t){return I(e),(0,h.createElement)("tr",D(D({},e.getRowProps()),{},{key:t,className:c.vu}),e.cells.map((function(t,n){return(0,P.jsx)("td",D(D({},t.getCellProps()),{},{className:(0,c.zm)(n,e.cells.length),children:t.render("Cell")}),n)})))}))}))]}))}),(0,P.jsx)(j.a,{pageIndex:E,pageSize:T,totalItems:r?r.length:0,gotoPage:U,canPreviousPage:C,canNextPage:Z,loading:v})]})}},25361:function(e,t,n){n.d(t,{By:function(){return h},G_:function(){return f},IA:function(){return m},Ll:function(){return p},fv:function(){return g}});var r=n(59499),o=n(31969),i=n(62483),a=n(84329),l=n(35035),u=n.n(l),c=n(8100),s=n(94348);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e){var t=e.chainId,n=e.variables,r=e.shouldFetch,o=void 0===r||r,a=e.swrConfig,l=void 0===a?void 0:a,d=(0,i.e_)();return(0,c.ZP)(o&&t?["trident-pools",t,u()(n)]:null,(function(){return(0,s.RD)({chainId:t,variables:n,tokens:d})}),l).data}function h(e){var t=e.chainId,n=e.variables,r=e.shouldFetch,o=void 0===r||r,i=e.swrConfig,a=void 0===i?void 0:i;return(0,c.ZP)(o&&t?["trident-pool-hour-buckets",t,u()(n)]:null,(function(){return(0,s.$P)(t,n)}),a).data}function p(e){var t=e.chainId,n=e.variables,r=e.shouldFetch,o=void 0===r||r,i=e.swrConfig,a=void 0===i?void 0:i;return(0,c.ZP)(o&&t?["trident-pool-day-buckets",t,u()(n)]:null,(function(){return(0,s.BU)(t,n)}),a).data}function m(e){var t=e.chainId,n=e.variables,r=e.shouldFetch,i=void 0===r||r,l=e.swrConfig,d=void 0===l?void 0:l,f=(0,a.ZU)({chainId:t,shouldFetch:!!t}).data,h=(0,a.G9)({chainId:t,shouldFetch:!!t}).data,p=function(e){var t=e.chainId,n=e.variables,r=e.shouldFetch,o=void 0===r||r,i=e.swrConfig,a=void 0===i?void 0:i;return(0,c.ZP)(o&&t?["trident-pool-kpis",t,u()(n)]:null,(function(){return(0,s.zY)(t,n)}),a)}({chainId:t,shouldFetch:i,variables:n,swrConfig:d}),m=p.data,g=p.isValidating,b=p.error,x=function(e){var t=e.chainId,n=e.variables,r=e.shouldFetch,o=void 0===r||r,i=e.swrConfig,a=void 0===i?void 0:i;return(0,c.ZP)(o&&t?["trident-pool-kpis",t,u()(n)]:null,(function(){return(0,s.zY)(t,n)}),a)}({chainId:t,shouldFetch:i,variables:v(v({},n),{},{block:f}),swrConfig:d}),y=x.data,j=x.isValidating,O=x.error,w=function(e){var t=e.chainId,n=e.variables,r=e.shouldFetch,o=void 0===r||r,i=e.swrConfig,a=void 0===i?void 0:i;return(0,c.ZP)(o&&t?["trident-pool-kpis",t,u()(n)]:null,(function(){return(0,s.zY)(t,n)}),a)}({chainId:t,shouldFetch:i,variables:v(v({},n),{},{block:h}),swrConfig:d}),P=w.data,S=w.isValidating,D=w.error;return{isValidating:g||j||S,error:b||O||D,data:null===m||void 0===m?void 0:m.map((function(e){var t=null===y||void 0===y?void 0:y.find((function(t){return t.id===e.id})),n=null===P||void 0===P?void 0:P.find((function(t){return t.id===e.id})),r=(0,o.uf)(null!==t&&void 0!==t&&t.volumeUSD?e.volumeUSD-t.volumeUSD:e.volumeUSD,!0,!1),i=((null===e||void 0===e?void 0:e.volumeUSD)-(null===t||void 0===t?void 0:t.volumeUSD))/((null===t||void 0===t?void 0:t.volumeUSD)-(null===n||void 0===n?void 0:n.volumeUSD))*100-100,a=(0,o.uf)(t?(null===e||void 0===e?void 0:e.feesUSD)-(null===t||void 0===t?void 0:t.feesUSD):null===e||void 0===e?void 0:e.feesUSD,!0,!1),l=((null===e||void 0===e?void 0:e.feesUSD)-(null===t||void 0===t?void 0:t.feesUSD))/((null===t||void 0===t?void 0:t.feesUSD)-(null===n||void 0===n?void 0:n.feesUSD))*100-100,u=(0,o.T3)((t?(null===e||void 0===e?void 0:e.volumeUSD)-(null===t||void 0===t?void 0:t.volumeUSD):null===e||void 0===e?void 0:e.volumeUSD)/(null===e||void 0===e?void 0:e.liquidityUSD)*100),c=t?e.transactionCount-t.transactionCount:e.transactionCount,s=e.liquidityUSD>0?365*Math.max(0,t?(null===e||void 0===e?void 0:e.feesUSD)-(null===t||void 0===t?void 0:t.feesUSD):null===e||void 0===e?void 0:e.feesUSD)*100/(null===e||void 0===e?void 0:e.liquidityUSD):0;return{volume:r,volume24hChange:i,fees:a,fees24hChange:l,liquidity:u,liquidity24hChange:((null===e||void 0===e?void 0:e.volumeUSD)-(null===t||void 0===t?void 0:t.volumeUSD))/(null===e||void 0===e?void 0:e.liquidityUSD)/(((null===t||void 0===t?void 0:t.volumeUSD)-(null===n||void 0===n?void 0:n.volumeUSD))/(null===t||void 0===t?void 0:t.liquidityUSD))*100-100,transactions:c,transactions24hChange:((null===e||void 0===e?void 0:e.transactionCount)-(null===t||void 0===t?void 0:t.transactionCount))/((null===t||void 0===t?void 0:t.transactionCount)-(null===n||void 0===n?void 0:n.transactionCount))*100-100,apy:s}}))}}var g=function(e){var t=e.chainId,n=e.variables,r=e.shouldFetch,o=void 0===r||r,a=e.swrConfig,l=void 0===a?void 0:a,u=(0,i.e_)();return(0,c.ZP)(o?["getAllTridentPools",t]:null,(function(){return(0,s.RD)({chainId:t,variables:n,tokens:u})}),l)}}}]);