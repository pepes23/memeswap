(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4583],{54961:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(45697),i=n.n(r),o=n(67294),a=["children","id","from","to","x1","y1","x2","y2","fromOffset","fromOpacity","toOffset","toOpacity","rotate","transform","vertical"];function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function s(e){var t=e.children,n=e.id,r=e.from,i=e.to,s=e.x1,c=e.y1,u=e.x2,d=e.y2,f=e.fromOffset,v=void 0===f?"0%":f,h=e.fromOpacity,g=void 0===h?1:h,p=e.toOffset,m=void 0===p?"100%":p,x=e.toOpacity,y=void 0===x?1:x,b=e.rotate,j=e.transform,w=e.vertical,O=void 0===w||w,P=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a),N=s,k=u,S=c,M=d;return!O||N||k||S||M||(N="0",k="0",S="0",M="1"),o.createElement("defs",null,o.createElement("linearGradient",l({id:n,x1:N,y1:S,x2:k,y2:M,gradientTransform:b?"rotate("+b+")":j},P),!!t&&t,!t&&o.createElement("stop",{offset:v,stopColor:r,stopOpacity:g}),!t&&o.createElement("stop",{offset:m,stopColor:i,stopOpacity:y})))}s.propTypes={id:i().string.isRequired,from:i().string,to:i().string,x1:i().oneOfType([i().string,i().number]),x2:i().oneOfType([i().string,i().number]),y1:i().oneOfType([i().string,i().number]),y2:i().oneOfType([i().string,i().number]),fromOffset:i().oneOfType([i().string,i().number]),fromOpacity:i().oneOfType([i().string,i().number]),toOffset:i().oneOfType([i().string,i().number]),toOpacity:i().oneOfType([i().string,i().number]),rotate:i().oneOfType([i().string,i().number]),transform:i().string,children:i().node,vertical:i().bool}},80853:function(e,t,n){"use strict";var r=n(59499),i=n(73850),o=n(54961),a=n(86368),l=n(8035),s=n(98649),c=n(909),u=n(67294),d=n(11728),f=n(85893);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g=(0,c.Z)((function(e){return e.x})).center,p=function(e){var t=e.data,n=e.stroke,r=e.strokeWidth,c=e.width,d=e.height,v=e.setSelectedIndex,p=(0,u.useRef)(),m=(0,u.useRef)(),x=(0,u.useMemo)((function(){var e,n,r,i;return(0,a.Z)({domain:[Math.min(null===(e=t[0])||void 0===e?void 0:e.x,null===(n=t[t.length-1])||void 0===n?void 0:n.x),Math.max(null===(r=t[0])||void 0===r?void 0:r.x,null===(i=t[t.length-1])||void 0===i?void 0:i.x)],range:[10,c-10]})}),[t,c]),y=(0,u.useMemo)((function(){var e=t.map((function(e){return e.y}));return(0,a.Z)({domain:[Math.max.apply(Math,e),Math.min.apply(Math,e)],range:[10,d-10]})}),[t,d]),b=(0,u.useCallback)((function(e){var n=((0,i.Z)(e)||{x:0}).x,r=x.invert(n),o=g(t,r,0),a=t[o];a&&p.current!==o&&(p.current=o,m.current.setAttribute("cx",x(a.x).toString()),m.current.setAttribute("cy",y(a.y).toString()),v(o))}),[t,v,x,y]),j=(0,u.useCallback)((function(){m.current.setAttribute("display","block")}),[]),w=(0,u.useCallback)((function(){v(t.length-1),m.current.setAttribute("display","none")}),[t,v]);return(0,f.jsx)("div",{className:"w-full h-full",children:(0,f.jsxs)("svg",{width:c,height:d,children:["gradient"in n&&(0,f.jsx)(o.Z,{id:"gradient",from:n.gradient.from,to:n.gradient.to,vertical:!1}),v&&(0,f.jsx)("g",{children:(0,f.jsx)("circle",{ref:m,r:4,fill:"solid"in n?n.solid:"#ffffff",display:"none"})}),(0,f.jsx)(l.Z,{data:t,x:function(e){var t;return null!==(t=x(e.x))&&void 0!==t?t:0},y:function(e){var t;return null!==(t=y(e.y))&&void 0!==t?t:0},stroke:"solid"in n?n.solid:"url('#gradient')",strokeWidth:r}),(0,f.jsx)(s.Z,h({width:c,height:d,fill:"transparent"},v&&{onTouchStart:b,onTouchMove:b,onMouseEnter:j,onMouseMove:b,onMouseLeave:w}))]})})};t.Z=function(e){var t=e.data,n=e.stroke,r=void 0===n?{solid:"#0993EC"}:n,i=e.strokeWidth,o=void 0===i?1.5:i,a=e.setSelectedIndex;return t?(0,f.jsx)(d.Z,{children:function(e){var n=e.width,i=e.height;return(0,f.jsx)(p,{data:t,stroke:r,strokeWidth:o,width:n,height:i,setSelectedIndex:a})}}):(0,f.jsx)(f.Fragment,{})}},40334:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(67294),i=n(80853),o=n(31969),a=n(73803),l=n(85893);function s(e){var t=e.header,n=e.subheader,s=e.figure,c=e.change,u=e.chart,d=e.defaultTimespan,f=e.timespans,v=(0,r.useState)(null===f||void 0===f?void 0:f.find((function(e){return e.text===d}))),h=v[0],g=v[1],p=(0,r.useMemo)((function(){var e=Math.round(Date.now()/1e3);return null===u||void 0===u?void 0:u.reduce((function(t,n){var r=n.x.getTime();return Math.round(r/1e3)>=e-(null===h||void 0===h?void 0:h.length)&&t.push({x:r,y:n.y}),t}),[])}),[u,null===h||void 0===h?void 0:h.length]),m=(0,r.useState)((null===p||void 0===p?void 0:p.length)-1),x=m[0],y=m[1],b=(0,r.useMemo)((function(){var e;return null===p||void 0===p||null===(e=p[x])||void 0===e?void 0:e.y}),[p,x]),j=(0,r.useMemo)((function(){var e;return null===p||void 0===p||null===(e=p[x])||void 0===e?void 0:e.x}),[p,x]);return(0,l.jsxs)("div",{className:"w-full p-5 space-y-4 font-bold border border-dark-900 rounded shadow-md bg-[rgba(0,0,0,0.12)]",children:[(0,l.jsxs)("div",{className:"flex justify-between",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"text-xs text-secondary",children:n}),(0,l.jsx)("div",{className:"text-high-emphesis",children:t})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"flex justify-end text-2xl text-high-emphesis",children:(0,o.uf)(null!==b&&void 0!==b?b:s,!0,!1)}),(0,l.jsxs)("div",{className:"flex flex-row items-center justify-end",children:[x===(null===p||void 0===p?void 0:p.length)-1&&(0,l.jsx)(a.Z,{number:c,percent:!0}),(0,l.jsx)("div",{className:"ml-3 font-normal",children:j?(0,o.p6)(new Date(j)):"Past 24 Hours"})]})]})]}),(0,l.jsx)("div",{className:"py-4 h-36",children:p&&(0,l.jsx)(i.Z,{data:p,stroke:{gradient:{from:"#27B0E6",to:"#FA52A0"}},setSelectedIndex:y})}),(0,l.jsx)("div",{className:"flex flex-row justify-end space-x-4",children:f.map((function(e,t){return(0,l.jsx)("button",{className:(0,o.AK)(e===h?"text-blue bg-blue bg-opacity-30 rounded-xl font-bold border border-blue border-opacity-50":"text-secondary","text-sm px-3 py-0.5"),onClick:function(){return g(e)},children:e.text},t)}))})]})}},73803:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(31969),i=n(85893);function o(e){var t=e.number,n=e.scaleNumber,o=void 0===n||n,a=e.percent,l=void 0!==a&&a,s=e.className,c=void 0===s?"":s;return(isNaN(t)||t===1/0)&&(t=0),(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:(0,r.AK)(t>0?"text-green":t<0&&"text-red","font-normal",c),children:(t>0?"+":t<0?"-":"")+(l?(0,r.T3)(t).replace("-",""):o?(0,r.nH)(t,!0).replace("-",""):(0,r.uf)(t,!0,!1).replace("-",""))})})}},20701:function(e,t,n){"use strict";n.d(t,{Z:function(){return C}});var r=n(59499),i=n(55929),o=n(83567),a=n(85874),l=n(89046),s=n(41664),c=n.n(s),u=n(67294),d=n(79521),f=n(49501),v=n(56785),h=n(16339),g=n(83898),p=n(85893),m=function(){var e=(0,f.mV)().i18n,t=(0,h.C)(g.i0).searchQuery;return(0,p.jsx)("div",{className:"flex flex-row items-center justify-between px-2 py-2",children:(0,p.jsx)(v.Z,{variant:"base",className:"text-high-emphesis",weight:700,children:t?"".concat(e._(e._("Search results for"))," '").concat(t,"'"):e._(e._("Top Tokens"))})})},x=n(73232),y=function(e){!function(e){var t=(0,h.C)(x.i0).searchQuery;(0,u.useMemo)((function(){return e("token",{searchQuery:t})}),[t,e])}(e)},b=n(19485),j=n(31518),w=n(41626),O=n(31969),P=n(62483),N=n(8100),k=function(e,t,n){return e.filter((function(e){var t,r,i,o,a=e.original,l=null===a||void 0===a||null===(t=a.token)||void 0===t||null===(r=t.name)||void 0===r||null===(i=r.concat(null===a||void 0===a||null===(o=a.token)||void 0===o?void 0:o.symbol))||void 0===i?void 0:i.toLowerCase();return!n.searchQuery.length||l.includes(n.searchQuery.toLowerCase())}))};function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var C=function(e){var t=e.chainId,n=function(e){var t=(0,P.e_)(),n=(0,N.ZP)(e?"/api/analytics/bentobox/".concat(e):null,(function(e){return fetch(e).then((function(e){return e.json()}))})).data,r=null===n||void 0===n?void 0:n.bentoBoxTokens,i=(0,u.useMemo)((function(){return[{Header:"Name",accessor:"token",maxWidth:100,Cell:function(n){var r=(0,b.getAddress)(n.value.id),i=(0,u.useMemo)((function(){return r in t?t[r]:new j.WU(e,r,Number(n.value.decimals),n.value.symbol,n.value.name)}),[n,r]);return(0,p.jsxs)("div",{className:"flex items-center gap-2",children:[(0,p.jsx)(w.X,{currency:null!==i&&void 0!==i?i:void 0,className:"!rounded-full",size:36}),n.value.symbol]})},filter:k},{Header:"Price",accessor:"price",minWidth:150,Cell:function(e){return(0,O.uf)(e.value,!0,void 0,2)},align:"right"},{Header:"Liquidity",accessor:"liquidity",minWidth:150,Cell:function(e){return(0,O.uf)(e.value,!0,!1)},align:"right"},{id:"target",Header:"Strategy Target",accessor:"strategy.targetPercentage",minWidth:150,Cell:function(e){return(0,O.T3)(e.value)}},{id:"utilisation",Header:"Strategy Utilization",accessor:"strategy.utilization",minWidth:150,Cell:function(e){return(0,O.T3)(e.value)}},{Header:"APY",accessor:"strategy.apy",minWidth:150,Cell:function(e){return(0,O.T3)(e.value)}}]}),[t,e]);return(0,u.useMemo)((function(){return{config:{columns:i,data:null!==r&&void 0!==r?r:[],initialState:{sortBy:[{id:"liquidity",desc:!0},{id:"price",desc:!0},{id:"targetPercentage",desc:!0},{id:"utilization",desc:!0},{id:"apy",desc:!0}]},autoResetFilters:!1}}}),[i,r])}(t),r=n.config,s=(0,d.useTable)(r,d.useFlexLayout,d.useFilters,d.useSortBy,d.useFlexLayout,d.usePagination),f=s.getTableProps,v=s.getTableBodyProps,h=s.headerGroups,g=s.rows,x=s.page,S=s.gotoPage,C=s.canPreviousPage,Z=s.canNextPage,T=s.prepareRow,E=s.setFilter,R=(s.toggleSortBy,s.state),_=R.pageIndex,H=R.pageSize;return y(E),(0,p.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,p.jsx)(m,{}),(0,p.jsx)("div",{className:l._O,children:(0,p.jsxs)("table",M(M({},f()),{},{className:l.RR,children:[(0,p.jsx)("thead",{children:h.map((function(e,t){return(0,u.createElement)("tr",M(M({},e.getHeaderGroupProps()),{},{key:t}),e.headers.map((function(t,n){return(0,u.createElement)("th",M(M({},t.getHeaderProps(t.getSortByToggleProps())),{},{key:n,className:(0,l.G0)(n,e.headers.length)}),t.render("Header"),(0,p.jsx)("span",{className:"inline-block ml-1 align-middle",children:t.isSorted?t.isSortedDesc?(0,p.jsx)(i.Z,{width:12}):(0,p.jsx)(o.Z,{width:12}):""}))})))}))}),(0,p.jsx)("tbody",M(M({},v()),{},{children:x.map((function(e,n){return T(e),(0,p.jsx)(c(),{href:{pathname:"/analytics/tokens/".concat(e.original.token.id),query:{chainId:t}},passHref:!0,children:(0,u.createElement)("tr",M(M({},e.getRowProps()),{},{key:n,className:l.vu}),e.cells.map((function(t,n){return(0,p.jsx)("td",M(M({},t.getCellProps()),{},{className:(0,l.zm)(n,e.cells.length),children:t.render("Cell")}),n)})))},n)}))}))]}))}),(0,p.jsx)(a.a,{pageIndex:_,pageSize:H,totalItems:g.length,gotoPage:S,canPreviousPage:C,canNextPage:Z,loading:!g.length})]})}},26702:function(e,t,n){"use strict";n.d(t,{Z:function(){return T}});var r=n(59499),i=n(55929),o=n(83567),a=n(85874),l=n(89046),s=n(41664),c=n.n(s),u=n(67294),d=n(79521),f=n(49501),v=n(56785),h=n(16339),g=n(95382),p=n(85893),m=function(){var e=(0,f.mV)().i18n,t=(0,h.C)(g.AE).searchQuery;return(0,p.jsx)("div",{className:"flex flex-row items-center justify-between px-2 py-2",children:(0,p.jsx)(v.Z,{variant:"base",className:"text-high-emphesis",weight:700,children:t?"".concat(e._(e._("Search results for"))," '").concat(t,"'"):e._(e._("Top Pools"))})})},x=n(731),y=function(e){!function(e){var t=(0,h.C)(x.AE).searchQuery;(0,u.useMemo)((function(){return e("pair",{searchQuery:t})}),[t,e])}(e)},b=n(19485),j=n(31518),w=n(41626),O=n(31969),P=n(62483),N=n(25675),k=n.n(N),S=n(8100),M=function(e,t,n){return e.filter((function(e){var t,r,i,o,a,l,s,c,u,d,f,v,h=e.original,g=null===h||void 0===h||null===(t=h.pair)||void 0===t||null===(r=t.token0)||void 0===r||null===(i=r.symbol)||void 0===i||null===(o=i.concat(null===h||void 0===h||null===(s=h.pair)||void 0===s||null===(c=s.token0)||void 0===c?void 0:c.name))||void 0===o||null===(a=o.concat(null===h||void 0===h||null===(u=h.pair)||void 0===u||null===(d=u.token1)||void 0===d?void 0:d.symbol))||void 0===a||null===(l=a.concat(null===h||void 0===h||null===(f=h.pair)||void 0===f||null===(v=f.token1)||void 0===v?void 0:v.name))||void 0===l?void 0:l.toLowerCase();return!n.searchQuery.length||g.includes(n.searchQuery.toLowerCase())}))};function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var T=function(e){var t=e.chainId,n=function(e){var t=(0,P.e_)(),n=(0,S.ZP)(e?"/api/analytics/pairs/".concat(e):null,(function(e){return fetch(e).then((function(e){return e.json()}))})).data,r=(0,u.useMemo)((function(){return[{Header:"Name",accessor:"pair",maxWidth:150,Cell:function(n){var r=(0,b.getAddress)(n.value.token0.id),i=(0,u.useMemo)((function(){return r in t?t[r]:new j.WU(e,(0,b.getAddress)(n.value.token0.id),Number(n.value.token0.decimals),n.value.token0.symbol,n.value.token0.name)}),[n,r]),o=(0,b.getAddress)(n.value.token1.id),a=(0,u.useMemo)((function(){return o in t?t[o]:new j.WU(e,o,Number(n.value.token1.decimals),n.value.token1.symbol,n.value.token1.name)}),[n,o]);return(0,p.jsxs)("div",{className:"flex items-center gap-2 overflow-hidden",children:[(0,p.jsx)(w.B,{currencies:[i,a],size:40,dense:!0}),(0,p.jsxs)("div",{id:"pool-".concat(n.value.token0.symbol,"/").concat(n.value.token1.symbol),className:"overflow-hidden font-bold text-high-emphesis overflow-ellipsis whitespace-nowrap",children:[n.value.token0.symbol,"/",n.value.token1.symbol]}),(0,p.jsx)("div",{className:"w-3.5",children:(0,p.jsx)(k(),{src:"https://app.sushi.com/images/rss.svg",alt:"rss icon",layout:"fixed",width:"14",height:"14"})})]})},filter:M},{Header:"TVL",accessor:"liquidity",minWidth:150,Cell:function(e){return(0,O.uf)(e.value,!0,!1,2)},align:"right"},{Header:"Volume 1d",accessor:"volume1d",minWidth:150,Cell:function(e){return(0,O.uf)(e.value,!0,!1,2)},align:"right"},{Header:"Fees 1d",accessor:"fees1d",minWidth:150,Cell:function(e){return(0,O.uf)(e.value,!0,!1,2)},align:"right"},{Header:"APY",accessor:"apy",minWidth:150,Cell:function(e){return(0,p.jsxs)(p.Fragment,{children:[e.value," ","-"!==e.value&&(e.row.original.utilisation1dChange>0?(0,p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ml-2",viewBox:"0 0 20 20",fill:"currentColor",children:(0,p.jsx)("path",{fillRule:"evenodd",d:"M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z",clipRule:"evenodd"})}):(0,p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ml-2",viewBox:"0 0 20 20",fill:"currentColor",children:(0,p.jsx)("path",{fillRule:"evenodd",d:"M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z",clipRule:"evenodd"})}))]})}}]}),[t,e]);return(0,u.useMemo)((function(){return{config:{columns:r,data:null!==n&&void 0!==n?n:[],initialState:{sortBy:[{id:"liquidity",desc:!0},{id:"apy",desc:!0}]},autoResetFilters:!1,autoResetPage:!1}}}),[r,n])}(t),r=n.config,s=(0,d.useTable)(r,d.useFlexLayout,d.useFilters,d.useSortBy,d.useFlexLayout,d.usePagination),f=s.getTableProps,v=s.getTableBodyProps,h=s.headerGroups,g=s.rows,x=s.page,N=s.gotoPage,C=s.canPreviousPage,T=s.canNextPage,E=s.prepareRow,R=s.setFilter,_=(s.toggleSortBy,s.state),H=_.pageIndex,A=_.pageSize;return y(R),(0,p.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,p.jsx)(m,{}),(0,p.jsx)("div",{className:l._O,children:(0,p.jsxs)("table",Z(Z({},f()),{},{className:l.RR,children:[(0,p.jsx)("thead",{children:h.map((function(e,t){return(0,u.createElement)("tr",Z(Z({},e.getHeaderGroupProps()),{},{key:t}),e.headers.map((function(t,n){return(0,u.createElement)("th",Z(Z({},t.getHeaderProps(t.getSortByToggleProps())),{},{key:n,className:(0,l.G0)(n,e.headers.length)}),t.render("Header"),(0,p.jsx)("span",{className:"inline-block ml-1 align-middle",children:t.isSorted?t.isSortedDesc?(0,p.jsx)(i.Z,{width:12}):(0,p.jsx)(o.Z,{width:12}):""}))})))}))}),(0,p.jsx)("tbody",Z(Z({},v()),{},{children:x.map((function(e,n){return E(e),(0,p.jsx)(c(),{href:{pathname:"/analytics/pools/".concat(e.original.pair.id),query:{chainId:t}},passHref:!0,children:(0,u.createElement)("tr",Z(Z({},e.getRowProps()),{},{key:n,className:l.vu}),e.cells.map((function(t,n){return(0,p.jsx)("td",Z(Z({},t.getCellProps()),{},{className:(0,l.zm)(n,e.cells.length),children:t.render("Cell")}),n)})))},n)}))}))]}))}),(0,p.jsx)(a.a,{pageIndex:H,pageSize:A,totalItems:g.length,gotoPage:N,canPreviousPage:C,canNextPage:T,loading:!g.length})]})}},68359:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return m},default:function(){return x}});var r=n(59499),i=n(49501),o=n(56785),a=n(20701),l=n(40334),s=n(26702),c=n(22680),u=n(11163),d=n(2962),f=n(8100),v=n(85893);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=[{text:"1W",length:604800},{text:"1M",length:2629746},{text:"1Y",length:31556952},{text:"ALL",length:1/0}],m=!0;function x(e){var t=e.fallback;return(0,v.jsx)(f.J$,{value:{fallback:t},children:(0,v.jsx)(y,{})})}function y(){var e,t,n,r,h=(0,i.mV)().i18n,m=(0,u.useRouter)(),x=Number(m.query.chainId),y=(0,f.ZP)(x?"/api/analytics/dashboard/".concat(x):null,(function(e){return fetch(e).then((function(e){return e.json()}))})).data,b={liquidity:null===y||void 0===y?void 0:y.liquidity.chart.map((function(e){return g(g({},e),{},{x:new Date(1e3*e.x)})})),volume:null===y||void 0===y?void 0:y.volume.chart.map((function(e){return g(g({},e),{},{x:new Date(1e3*e.x)})}))};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(d.PB,{title:"Memeswap Analytics"}),(0,v.jsx)(c.CV,{className:"sm:!flex-row justify-between items-center",pattern:"bg-bubble",children:(0,v.jsxs)("div",{children:[(0,v.jsx)(o.Z,{variant:"h2",className:"text-high-emphesis",weight:700,children:h._(h._("Memeswap Analytics."))}),(0,v.jsx)(o.Z,{variant:"sm",weight:400,children:h._(h._("Dive deeper in the analytics of Sushi Bar, BentoBox, Pools, Farms and Tokens."))})]})}),(0,v.jsx)(c.A9,{children:(0,v.jsxs)("div",{className:"flex flex-col w-full gap-10",children:[(0,v.jsx)("div",{className:"text-2xl font-bold text-high-emphesis",children:"Overview"}),(0,v.jsxs)("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2",children:[(0,v.jsx)(l.Z,{header:"TVL",subheader:"SUSHI AMM",figure:null!==(e=null===y||void 0===y?void 0:y.liquidity.value)&&void 0!==e?e:0,change:null!==(t=null===y||void 0===y?void 0:y.liquidity.change)&&void 0!==t?t:0,chart:b.liquidity,defaultTimespan:"1M",timespans:p}),(0,v.jsx)(l.Z,{header:"Volume",subheader:"SUSHI AMM",figure:null!==(n=null===y||void 0===y?void 0:y.volume.value)&&void 0!==n?n:0,change:null!==(r=null===y||void 0===y?void 0:y.volume.change)&&void 0!==r?r:0,chart:b.volume,defaultTimespan:"1M",timespans:p})]}),(0,v.jsxs)("div",{className:"pt-4",children:[(0,v.jsx)(s.Z,{chainId:x}),(0,v.jsx)(a.Z,{chainId:x})]})]})})]})}},95382:function(e,t,n){"use strict";n.d(t,{AE:function(){return r.AE},jr:function(){return r.jr}});var r=n(731)},83898:function(e,t,n){"use strict";n.d(t,{i0:function(){return r.i0},zr:function(){return r.zr}});var r=n(73232)},44813:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/analytics",function(){return n(68359)}])},55929:function(e,t,n){"use strict";var r=n(67294);const i=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{fillRule:"evenodd",d:"M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z",clipRule:"evenodd"}))}));t.Z=i},83567:function(e,t,n){"use strict";var r=n(67294);const i=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{fillRule:"evenodd",d:"M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z",clipRule:"evenodd"}))}));t.Z=i},94323:function(e,t,n){"use strict";var r=n(67294);const i=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{fillRule:"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",clipRule:"evenodd"}))}));t.Z=i},51183:function(e,t,n){"use strict";var r=n(67294);const i=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{fillRule:"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",clipRule:"evenodd"}))}));t.Z=i},909:function(e,t,n){"use strict";function r(e,t){return null==e||null==t?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function i(e,t){return null==e||null==t?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function o(e){let t,n,o;function l(e,r,i=0,o=e.length){if(i<o){if(0!==t(r,r))return o;do{const t=i+o>>>1;n(e[t],r)<0?i=t+1:o=t}while(i<o)}return i}return 2!==e.length?(t=r,n=(t,n)=>r(e(t),n),o=(t,n)=>e(t)-n):(t=e===r||e===i?e:a,n=e,o=e),{left:l,center:function(e,t,n=0,r=e.length){const i=l(e,t,n,r-1);return i>n&&o(e[i-1],t)>-o(e[i],t)?i-1:i},right:function(e,r,i=0,o=e.length){if(i<o){if(0!==t(r,r))return o;do{const t=i+o>>>1;n(e[t],r)<=0?i=t+1:o=t}while(i<o)}return i}}}function a(){return 0}n.d(t,{Z:function(){return o}})}},function(e){e.O(0,[9521,5963,8769,9774,2888,179],(function(){return t=44813,e(e.s=t);var t}));var t=e.O();_N_E=t}]);