(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9594],{26587:function(e,s,t){"use strict";t(67294);var i=t(85893);function n(e){return(e=parseFloat(e))<100&&e>=90?"#ff3a31":e<90&&e>=80?"#f85815":e<80&&e>=70?"#ed7000":e<70&&e>=60?"#de8400":e<60&&e>=50?"#ce9700":e<50&&e>=40?"#bba700":e<40&&e>=30?"#a6b500":e<30&&e>=20?"#8fc21b":e<20&&e>=10?"#73ce42":e<10&&e>=0||0==e?"#4ed864":"#ff3a31"}function r(e){return(e=parseFloat(e))<10&&e>=0?"#ff3a31":e<20&&e>=10?"#f85815":e<30&&e>=20?"#ed7000":e<40&&e>=30?"#de8400":e<50&&e>=40?"#ce9700":e<60&&e>=50?"#bba700":e<70&&e>=60?"#a6b500":e<80&&e>=70?"#8fc21b":e<90&&e>=80?"#73ce42":e<100&&e>=90||e>=100?"#4ed864":"#ff3a31"}s.ZP=function(e){var s=e.percent,t=e.desc,c=void 0===t||t;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("span",{style:{display:"block",height:"0.5rem",width:"0.5rem",borderRadius:"9999px",marginLeft:"0.5rem",background:"".concat(c?n(s):r(s))}})})}},30778:function(e,s,t){"use strict";var i=t(10822),n=t(61782),r=t(85893);s.Z=function(e){var s=e.id,t=e.active,c=e.direction;return s&&c&&t?"ascending"===c?(0,r.jsx)(i.Z,{width:12,height:12}):"descending"===c?(0,r.jsx)(n.Z,{width:12,height:12}):(0,r.jsx)(r.Fragment,{}):(0,r.jsx)(r.Fragment,{})}},29266:function(e,s,t){"use strict";t.d(s,{M:function(){return n}});var i=t(67294);function n(e){var s=(0,i.useState)(10),t=s[0],n=s[1];return(0,i.useEffect)((function(){return n(15)}),[e.length]),[t,n]}},23265:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return P}});var i=t(49501),n=t(56785),r=t(16835),c=t(30778),a=t(89046),l=t(77062),o=t(53389),u=t(29266),d=t(11163),m=t(67294),h=t(58533),x=t(8682),f=t(31518),j=t(41626),v=t(26587),g=t(31969),p=t(94633),A=t(85893),w=function(e){var s=e.market,t=(0,i.mV)().i18n,r=(0,d.useRouter)(),c=s.asset.token,l=s.collateral.token,o=(0,m.useMemo)((function(){return f.ih.fromRawAmount(c,s.currentAllAssets)}),[c,s]),u=(0,p.Gj)(o),h=u.value,x=u.loading,w=(0,m.useMemo)((function(){return f.ih.fromRawAmount(c,s.currentBorrowAmount)}),[c,s]),N=(0,p.Gj)(w),Z=N.value,k=N.loading,y=(0,m.useMemo)((function(){return f.ih.fromRawAmount(c,s.currentUserAssetAmount)}),[c,s]),_=(0,p.Gj)(y),b=_.value,z=_.loading,P=new f.gG(s.currentSupplyAPR,1e18),R=new f.gG(s.utilization,1e18);return(0,A.jsxs)("div",{className:(0,g.AK)(a.vu,"grid grid-cols-6"),onClick:function(){return r.push("/kashi/".concat(s.address))},children:[(0,A.jsxs)("div",{className:(0,g.AK)("flex gap-2",(0,a.zm)(0,6)),children:[c&&l&&(0,A.jsx)(j.B,{currencies:[c,l],dense:!0,size:32}),(0,A.jsxs)("div",{className:"flex flex-col items-start",children:[(0,A.jsxs)(n.Z,{weight:700,className:"flex gap-1 text-high-emphesis",children:[s.asset.token.symbol,(0,A.jsx)("span",{className:"text-low-emphesis",children:"/"}),s.collateral.token.symbol]}),(0,A.jsx)(n.Z,{variant:"xs",className:"text-low-emphesis",children:s.oracle.name})]})]}),(0,A.jsxs)("div",{className:(0,g.AK)("flex flex-col !items-end",(0,a.zm)(1,6)),children:[(0,A.jsxs)(n.Z,{weight:700,className:"text-high-emphesis",children:[(0,g.uf)(y.toSignificant(6))," ",s.asset.token.symbol]}),(0,A.jsx)(n.Z,{variant:"xs",className:"text-low-emphesis",children:b&&!z?g.oB.format(Number(null===b||void 0===b?void 0:b.toExact())):"-"})]}),(0,A.jsxs)("div",{className:(0,g.AK)("flex flex-col !items-end",(0,a.zm)(2,6)),children:[(0,A.jsxs)(n.Z,{weight:700,className:"text-high-emphesis",children:[(0,g.uf)(w.toSignificant(6))," ",s.asset.token.symbol]}),(0,A.jsx)(n.Z,{variant:"xs",className:"text-low-emphesis",children:Z&&!k?g.oB.format(Number(null===Z||void 0===Z?void 0:Z.toExact())):"-"})]}),(0,A.jsxs)("div",{className:(0,g.AK)("flex flex-col !items-end",(0,a.zm)(3,6)),children:[(0,A.jsxs)(n.Z,{weight:700,className:"text-high-emphesis",children:[(0,g.uf)(o.toSignificant(6))," ",s.asset.token.symbol]}),(0,A.jsx)(n.Z,{variant:"xs",className:"text-low-emphesis",children:h&&!x?g.oB.format(Number(null===h||void 0===h?void 0:h.toExact())):"-"})]}),(0,A.jsxs)("div",{className:(0,g.AK)("flex flex-col !items-end",(0,a.zm)(4,6)),children:[(0,A.jsxs)(n.Z,{weight:700,className:"flex items-center text-high-emphesis",children:[(0,g.T3)(R.toFixed(2))," ",f.QA.greaterThan(R.numerator,f.xE)?(0,A.jsx)(v.ZP,{percent:R.invert().toFixed(2)}):null]}),(0,A.jsx)(n.Z,{variant:"xs",className:"text-low-emphesis",children:t._(t._("utilized"))})]}),(0,A.jsxs)("div",{className:(0,g.AK)("flex flex-col !items-end",(0,a.zm)(5,6)),children:[(0,A.jsx)(n.Z,{weight:700,className:"text-high-emphesis",children:(0,g.T3)(P.toFixed(2))}),(0,A.jsx)(n.Z,{variant:"xs",className:"text-low-emphesis",children:t._(t._("annualized"))})]})]})},N=(0,m.memo)(w),Z=function(){var e=(0,i.mV)().i18n,s=(0,d.useRouter)().query.account,t=(0,x.LQ)(s),m=(0,o.cX)(t,{key:"currentSupplyAPR",direction:"descending"}),f=m.items,j=m.requestSort,v=m.sortConfig,g=(0,u.M)(f),p=(0,r.Z)(g,2),w=p[0],Z=p[1];return(0,A.jsx)("div",{className:"flex flex-col w-full gap-3",children:(0,A.jsxs)("div",{className:(0,l.A)(a._O),children:[(0,A.jsxs)("div",{className:"grid grid-cols-6 min-w-[768px]",children:[(0,A.jsx)("div",{className:(0,l.A)("flex gap-1 items-center cursor-pointer",(0,a.G0)(0,6)),children:(0,A.jsx)(n.Z,{variant:"sm",weight:700,children:e._(e._("Asset / Collateral"))})}),(0,A.jsxs)("div",{className:(0,l.A)("flex gap-1 items-center cursor-pointer justify-end",(0,a.G0)(1,6)),children:[(0,A.jsx)(n.Z,{variant:"sm",weight:700,onClick:function(){return j("currentUserAssetAmount")},children:e._(e._("Supplied"))}),(0,A.jsx)(c.Z,{id:v.key,direction:v.direction,active:"currentUserAssetAmount"===v.key})]}),(0,A.jsxs)("div",{className:(0,l.A)((0,a.G0)(2,6)),onClick:function(){return j("currentBorrowAmount")},children:[(0,A.jsx)(n.Z,{variant:"sm",weight:700,children:e._(e._("Borrowed"))}),(0,A.jsx)(c.Z,{id:v.key,direction:v.direction,active:"currentBorrowAmount"===v.key})]}),(0,A.jsxs)("div",{className:(0,l.A)((0,a.G0)(3,6)),onClick:function(){return j("totalAssetAmount")},children:[(0,A.jsx)(n.Z,{variant:"sm",weight:700,children:e._(e._("Available"))}),(0,A.jsx)(c.Z,{id:v.key,direction:v.direction,active:"totalAssetAmount"===v.key})]}),(0,A.jsxs)("div",{className:(0,l.A)("flex gap-1 items-center cursor-pointer justify-end",(0,a.G0)(4,6)),onClick:function(){return j("utilization")},children:[(0,A.jsx)(n.Z,{variant:"sm",weight:700,children:e._(e._("Utilization"))}),(0,A.jsx)(c.Z,{id:v.key,direction:v.direction,active:"utilization"===v.key})]}),(0,A.jsxs)("div",{className:(0,l.A)("flex gap-1 items-center cursor-pointer justify-end",(0,a.G0)(5,6)),onClick:function(){return j("currentSupplyAPR")},children:[(0,A.jsx)(n.Z,{variant:"sm",weight:700,children:e._(e._("Supply APR"))}),(0,A.jsx)(c.Z,{id:v.key,direction:v.direction,active:"currentSupplyAPR"===v.key})]})]}),(0,A.jsx)(h.Z,{dataLength:w,next:function(){return Z(w+5)},hasMore:!0,loader:null,children:f.slice(0,w).map((function(e,s){return(0,A.jsx)(N,{market:e},s)}))})]})})},k=t(86975),y=t(45572),_=t(22680),b=t(2962),z=function(){var e=(0,i.mV)().i18n,s=(0,d.useRouter)(),t=s.query.account,r=s.query.account?Number(s.query.chainId):void 0;return t&&r?(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(b.PB,{title:"Kashi lending positions for account ".concat(t)}),(0,A.jsx)(_.CV,{pattern:"bg-chevron",children:(0,A.jsx)(y.Z,{account:t,chainId:r})}),(0,A.jsxs)(_.A9,{children:[(0,A.jsx)(n.Z,{variant:"lg",className:"text-high-emphesis",weight:700,children:e._(e._("Kashi Lending Positions"))}),(0,A.jsx)(Z,{})]}),(0,A.jsx)(k.Z,{})]}):null};z.Layout=_.ZP;var P=z},93769:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/lending",function(){return t(23265)}])}},function(e){e.O(0,[8306,8529,8897,2749,2407,9268,6152,7230,7032,3389,9658,9469,134,6201,8682,5853,9774,2888,179],(function(){return s=93769,e(e.s=s);var s}));var s=e.O();_N_E=s}]);