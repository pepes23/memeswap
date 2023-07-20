(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6341],{13752:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(59499),i=n(4730),s=n(31969),o=n(25675),a=n.n(o),l=n(85893),c=["src","width","height","layout"];function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=function(e){var t,n,r,o=e.src,d=e.width,h=e.height,p=e.layout,v=(0,i.Z)(e,c),f=parseInt(String(h),10)>=40&&parseInt(String(d),10)>=40,m="string"===typeof o&&o.includes("http")?s.HT:void 0;return(0,l.jsx)("div",{style:{width:d,height:h},className:"overflow-hidden rounded",children:f?(0,l.jsx)(a(),u({loader:m,src:o,width:d,height:h,layout:p,placeholder:"blur",blurDataURL:"data:image/svg+xml;base64,".concat((n=d,r=h,t='\n<svg width="'.concat(n,'" height="').concat(r,'" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n  <defs>\n    <linearGradient id="g">\n      <stop stop-color="#333" offset="20%" />\n      <stop stop-color="#222" offset="50%" />\n      <stop stop-color="#333" offset="70%" />\n    </linearGradient>\n  </defs>\n  <rect width="').concat(n,'" height="').concat(r,'" fill="#333" />\n  <rect id="r" width="').concat(n,'" height="').concat(r,'" fill="url(#g)" />\n  <animate xlink:href="#r" attributeName="x" from="-').concat(n,'" to="').concat(n,'" dur="1s" repeatCount="indefinite"  />\n</svg>'),window.btoa(t)))},v)):(0,l.jsx)(a(),u({loader:m,src:o,width:d,height:h,layout:p,placeholder:"empty"},v))})}},72356:function(e,t,n){"use strict";var r=n(59499),i=n(49501),s=n(31518),o=n(25401),a=n(64527),l=n(12614),c=n(67294);t.Z=function(){var e=(0,i.mV)().i18n,t=(0,l.aQ)().chainId,n=(0,c.useCallback)((function(t){var n;return(n={},(0,r.Z)(n,a.iv.FIXED,e._(e._("Fixed"))),(0,r.Z)(n,a.iv.SUSHI,e._(e._("Sushi"))),(0,r.Z)(n,a.iv.MINTABLE,e._(e._("Mintable"))),n)[t]}),[e]);return{map:(0,c.useMemo)((function(){var e,n,i,l,c,d,u,h,p,v,f,m,b;if(t)return b={},(0,r.Z)(b,null===(e=o[t])||void 0===e||null===(n=e[s.bk[t]])||void 0===n?void 0:n.contracts.FixedToken.address,a.iv.FIXED),(0,r.Z)(b,null===(i=o[t])||void 0===i||null===(l=i[s.bk[t]])||void 0===l?void 0:l.contracts.SushiToken.address,a.iv.SUSHI),(0,r.Z)(b,null===(c=o[t])||void 0===c||null===(d=c[s.bk[t]])||void 0===d?void 0:d.contracts.MintableToken.address,a.iv.MINTABLE),(0,r.Z)(b,a.iv.FIXED,null===(u=o[t])||void 0===u||null===(h=u[s.bk[t]])||void 0===h?void 0:h.contracts.FixedToken),(0,r.Z)(b,a.iv.SUSHI,null===(p=o[t])||void 0===p||null===(v=p[s.bk[t]])||void 0===v?void 0:v.contracts.SushiToken),(0,r.Z)(b,a.iv.MINTABLE,null===(f=o[t])||void 0===f||null===(m=f[s.bk[t]])||void 0===m?void 0:m.contracts.MintableToken),b}),[t]),templateIdToLabel:n}}},12281:function(e,t,n){"use strict";n.d(t,{q:function(){return i}});var r=n(19485),i=n(74231).Z_().test("is-address","${value} is not a valid address",(function(e){if(0===(null===e||void 0===e?void 0:e.length))return!0;try{return!(!e||!(0,r.getAddress)(e))}catch(t){return!1}}))},77191:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ne}});var r=n(94323),i=n(49501),s=n(71862),o=n(56785),a=n(38239),l=n(59499),c=n(84389),d=n(95496),u=n(31518),h=n(25401),p=n(29300),v=n(12614),f=n(67294),m=n(87536),b=n(85893),x=function(e){var t,n;(0,c.Z)(e);var r=(0,v.aQ)().chainId,s=(0,i.mV)().i18n,o=(0,m.qo)({name:"tokenTypeAddress"});return(0,b.jsxs)(p.Z.Section,{header:(0,b.jsx)(p.Z.Section.Header,{header:s._(s._("Token Details"))}),className:"pt-8",children:[(0,b.jsx)("div",{className:"col-span-6",children:(0,b.jsx)(p.Z.TextField,{name:"tokenName",label:s._(s._("Name*")),helperText:s._(s._("This will be the name of your token. Choose wisely, this is final and immutable.")),placeholder:"The name of your token"})}),(0,b.jsx)("div",{className:"col-span-6",children:(0,b.jsx)(p.Z.TextField,{name:"tokenSymbol",label:s._(s._("Symbol*")),helperText:s._(s._("This will be the symbol of your token. Choose wisely, this is final and immutable.")),placeholder:"The symbol of your token"})}),(0,b.jsx)("div",{className:"col-span-6",children:(0,b.jsx)(p.Z.TextField,{name:"tokenSupply",label:s._(s._("Initial Supply*")),helperText:o===(r?null===(t=h[r])||void 0===t||null===(n=t[u.bk[r]])||void 0===n?void 0:n.contracts.FixedToken.address:void 0)?s._(s._("This will be the initial supply of your token. Because your token type is set to fixed. This value will be final and immutable")):s._(s._("This will be the initial supply of your token.")),placeholder:"The name of your token"})})]})},y=n(56727),j=n(42144),g=n(72356),k=n(64527),w=n(31969),_=function(){var e=(0,m.Gc)(),t=e.watch,n=e.setValue,r=t("tokenTypeAddress"),s=(0,i.mV)().i18n,a=(0,g.Z)(),l=a.map,c=a.templateIdToLabel,d=[{icon:(0,b.jsx)(j.Wh,{height:83,width:83}),address:null===l||void 0===l?void 0:l[k.iv.FIXED],value:k.iv.FIXED,label:c(k.iv.FIXED),description:s._(s._('A "standard" ERC20 token with a fixed supply and protections against further token minting or burning.'))},{icon:(0,b.jsx)(j.ZF,{height:83,width:83}),address:null===l||void 0===l?void 0:l[k.iv.MINTABLE],value:k.iv.MINTABLE,label:c(k.iv.MINTABLE),description:s._(s._("An ERC20 token with a function allowing further minting at a later date. Creators will have to assign an owner for the minting controls."))},{icon:(0,b.jsx)(j.tG,{height:83,width:83}),address:null===l||void 0===l?void 0:l[k.iv.SUSHI],value:k.iv.SUSHI,label:c(k.iv.SUSHI),description:s._(s._("Sushi tokens function similar to mintable tokens but with additional capabilities built into the token. Creators will have to assign an owner address for token functions during minting."))}];return(0,b.jsx)(p.Z.Section,{columns:6,header:(0,b.jsx)(p.Z.Section.Header,{header:s._(s._("Select Token Type")),subheader:s._(s._("Decide on the type of token"))}),children:(0,b.jsx)("div",{className:"col-span-6",children:(0,b.jsxs)(y.Ee,{value:r,onChange:function(e){return n("tokenTypeAddress",e)},className:"grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10",children:[(0,b.jsx)("input",{className:"hidden",name:"tokenTypeAddress",value:r,onChange:function(){}}),d.map((function(e){var t=e.icon,n=e.value,r=e.address,i=e.label,s=e.description;return(0,b.jsx)(y.Ee.Option,{value:r,children:function(e){var n=e.checked;return(0,b.jsxs)("div",{className:(0,w.AK)(n?"bg-dark-1000/40":"bg-dark-900","flex flex-col gap-4 border border-dark-800 p-5 rounded h-full cursor-pointer"),children:[(0,b.jsx)(o.Z,{variant:"lg",weight:700,className:"text-high-emphesis",children:i}),t,(0,b.jsx)(o.Z,{className:"text-high-emphesis",children:s})]})}},n)}))]})})})},O=n(50029),T=n(87794),Z=n.n(T),S=n(22244),N=n(46430),C=n(84243),P=n(53389),I=n(68411),E=n(18269),D=function(){var e,t,n,r,i=(0,v.aQ)(),s=i.account,o=i.chainId,a=(0,I.h7)(),l=(0,P.cq)(o?null===(e=h[o])||void 0===e||null===(t=e[u.bk[o]])||void 0===t?void 0:t.contracts.MISOTokenFactory.address:void 0,o?null===(n=h[o])||void 0===n||null===(r=n[u.bk[o]])||void 0===r?void 0:r.contracts.MISOTokenFactory.abi:void 0),c=(0,f.useCallback)((function(e,t){l&&l.on(e,t)}),[l]),d=(0,f.useCallback)((function(e,t){l&&l.off(e,t)}),[l]),p=(0,f.useCallback)(function(){var e=(0,O.Z)(Z().mark((function e(t,n,r,i){var o,c;return Z().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l){e.next=2;break}throw new Error("Contract not initialized");case 2:if(s){e.next=4;break}throw new Error("Wallet not connected");case 4:return e.next=6,l.getTemplateId(i);case 6:return o=e.sent,e.next=9,l.createToken(o,s,C.$.encode(["string","string","address","uint256"],[t,n,s,(0,E.toWei)(r.toString())]));case 9:return c=e.sent,a(c,{summary:"Initialize Fixed Token"}),e.abrupt("return",c);case 12:case"end":return e.stop()}}),e)})));return function(t,n,r,i){return e.apply(this,arguments)}}(),[s,a,l]);return{subscribe:c,unsubscribe:d,init:p}},A=n(15003),F=n(70028),M=n(69260),L=n.n(M);function H(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function V(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?H(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var X=function(e){var t=e.txHash,n=e.onDismiss,r=e.tokenAddress,s=(0,i.mV)().i18n;return(0,b.jsx)(F.S.SubmittedModalContent,{txHash:t,header:s._(s._("Success!")),subheader:s._(s._("Token creation transaction successfully submitted. Your newly created token address will appear here once we receive the event from the blockchain")),onDismiss:n,actions:(0,b.jsx)(F.S.Action,V(V({main:!0,disabled:!r},!r&&{startIcon:(0,b.jsx)("div",{className:"w-4 h-4 mr-1",children:(0,b.jsx)(L(),{animationData:S,autoplay:!0,loop:!0})})}),{},{children:(0,b.jsx)("a",{href:"/miso/auction?token=".concat(r),target:"_blank",rel:"noreferrer",className:r?"":"pointer-events-none",children:s._(s._("Create auction"))})})),children:(0,b.jsxs)("div",{className:"flex flex-col px-4 py-3 bg-dark-900 rounded border border-dark-700 mt-4",children:[(0,b.jsx)(o.Z,{variant:"sm",className:"text-secondary",children:s._(s._("Token Address"))}),r?(0,b.jsx)(o.Z,{variant:"sm",className:"text-high-emphesis",weight:700,children:(0,b.jsx)(A.Z,{toCopy:r,className:"text-high-emphesis opacity-100",children:r})}):(0,b.jsx)("div",{className:"w-4 h-4",children:(0,b.jsx)(L(),{animationData:S,autoplay:!0,loop:!0})})]})})};function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?q(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var R=function(e){var t=e.open,n=e.onDismiss,r=e.data,s=(0,i.mV)().i18n,a=(0,f.useState)(),l=a[0],c=a[1],d=(0,f.useState)(!1),u=d[0],h=d[1],p=D(),v=p.init,m=p.subscribe,x=p.unsubscribe,y=(0,f.useState)(),j=y[0],k=y[1],w=(0,f.useState)(),_=w[0],T=w[1],C=(0,g.Z)(),P=C.map,I=C.templateIdToLabel,E=(0,f.useCallback)((function(){u||(k(void 0),c(void 0),T(void 0))}),[u]),A=(0,f.useCallback)((function(){E(),n()}),[n,E]),F=(0,f.useCallback)(function(){var e=(0,O.Z)(Z().mark((function e(t){var n,r;return Z().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),e.prev=1,e.next=4,v(t.tokenName,t.tokenSymbol,t.tokenSupply,t.tokenTypeAddress);case 4:if(null===(n=e.sent)||void 0===n||!n.hash){e.next=9;break}return c(n.hash),e.next=9,n.wait();case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),T(null===(r=e.t0.error)||void 0===r?void 0:r.message);case 14:return e.prev=14,h(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[1,11,14,17]])})));return function(t){return e.apply(this,arguments)}}(),[v]);return(0,f.useEffect)((function(){return m("TokenCreated",(function(e,t,n,r){var i=r.transactionHash;(null===i||void 0===i?void 0:i.toLowerCase())===(null===l||void 0===l?void 0:l.toLowerCase())&&k(t)})),function(){x("TokenCreated",(function(){return console.log("unsubscribed")}))}}),[m,l,x]),(0,b.jsx)(N.Z.Controlled,{isOpen:t,onDismiss:A,afterLeave:function(){return c(void 0)},children:l?(0,b.jsx)(X,{txHash:l,tokenAddress:j,onDismiss:A}):(0,b.jsxs)(N.Z.Body,{children:[(0,b.jsx)(N.Z.Header,{header:s._(s._("Create Token")),subheader:s._(s._("Please review your entered details thoroughly."))}),(0,b.jsx)(N.Z.Content,{children:(0,b.jsx)("div",{className:"flex flex-col gap-4",children:(0,b.jsxs)("div",{className:"flex flex-col divide-y divide-dark-700",children:[(0,b.jsxs)("div",{className:"flex justify-between gap-2 py-3",children:[(0,b.jsx)(o.Z,{variant:"sm",className:"text-secondary",children:s._(s._("Type"))}),(0,b.jsx)(o.Z,{weight:700,variant:"sm",className:"text-high-emphesis",children:I(null===P||void 0===P?void 0:P[r.tokenTypeAddress])})]}),(0,b.jsxs)("div",{className:"flex justify-between gap-2 py-3",children:[(0,b.jsx)(o.Z,{variant:"sm",className:"text-secondary",children:s._(s._("Name"))}),(0,b.jsx)(o.Z,{weight:700,variant:"sm",className:"text-high-emphesis",children:r.tokenName})]}),(0,b.jsxs)("div",{className:"flex justify-between gap-2 py-3",children:[(0,b.jsx)(o.Z,{variant:"sm",className:"text-secondary",children:s._(s._("Symbol"))}),(0,b.jsx)(o.Z,{weight:700,variant:"sm",className:"text-high-emphesis",children:r.tokenSymbol})]}),(0,b.jsxs)("div",{className:"flex justify-between gap-2 py-3",children:[(0,b.jsx)(o.Z,{variant:"sm",className:"text-secondary",children:s._(s._("Total Supply"))}),(0,b.jsx)(o.Z,{weight:700,variant:"sm",className:"text-high-emphesis",children:r.tokenSupply})]})]})})}),(0,b.jsxs)(N.Z.Actions,{children:[(0,b.jsx)(N.Z.Action,{onClick:A,children:s._(s._("Cancel"))}),(0,b.jsx)(N.Z.Action,B(B({main:!0},u&&{startIcon:(0,b.jsx)("div",{className:"w-4 h-4 mr-1",children:(0,b.jsx)(L(),{animationData:S,autoplay:!0,loop:!0})})}),{},{disabled:u,onClick:function(){return F(r)},children:s._(s._("Create Token"))}))]}),(0,b.jsx)(N.Z.Error,{children:_})]})})},U=n(12281),G=n(74231);function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var W=G.Ry({tokenTypeAddress:U.q.required("Must be a valid ERC-20 token address"),tokenName:G.Z_().required("Must enter a valid name"),tokenSymbol:G.Z_().required("Must enter a valid symbol"),tokenSupply:G.Rx().typeError("Supply must be a number").required("Must enter a valid number").moreThan(0,"Token supply must be larger than zero").max(2e256,"Token supply can be at most 2^256 - 1 due to network limitations")}),$=function(e){var t,n;(0,c.Z)(e);var r=(0,v.aQ)().chainId,o=(0,i.mV)().i18n,a=(0,f.useState)(!1),l=a[0],y=a[1],j=(0,m.cI)({resolver:(0,d.X)(W),defaultValues:{tokenTypeAddress:r?null===(t=h[r])||void 0===t||null===(n=t[u.bk[r]])||void 0===n?void 0:n.contracts.FixedToken.address:void 0},reValidateMode:"onChange",mode:"onChange"}),g=j.watch,k=j.formState.errors,w=g();return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(p.Z,Q(Q({},j),{},{onSubmit:j.handleSubmit((function(){return y(!0)})),children:(0,b.jsxs)(p.Z.Card,{children:[(0,b.jsx)(_,{}),(0,b.jsx)(x,{}),(0,b.jsx)(p.Z.Submit,{children:(0,b.jsx)("div",{children:(0,b.jsx)(s.ZP,{disabled:Object.keys(k).length>0,color:"blue",type:"submit",children:o._(o._("Review"))})})})]})})),(0,b.jsx)(R,{open:l,onDismiss:function(){return y(!1)},data:w})]})},K=n(87433),Y=n(95497),J=n(41664),ee=n.n(J),te=function(){var e=(0,i.mV)().i18n,t=(0,b.jsx)("a",{href:"https://instantmiso.gitbook.io/miso/tokens",target:"_blank",rel:"noreferrer",className:"text-blue",children:"documentation"});return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(Y.Zo,{className:"bg-miso-bowl bg-cover",children:(0,b.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,b.jsx)("div",{children:(0,b.jsx)(s.ZP,{color:"blue",size:"sm",className:"rounded-full !pl-2 !py-1.5",startIcon:(0,b.jsx)(r.Z,{width:24,height:24}),children:(0,b.jsx)(ee(),{href:"/miso",children:e._(e._("All Auctions"))})})}),(0,b.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,b.jsx)(o.Z,{variant:"h2",className:"text-high-emphesis",weight:700,children:e._(e._("New Token"))}),(0,b.jsx)(o.Z,{variant:"sm",weight:400,children:(0,b.jsx)(i.cC,{id:"Create your own Token at the Token Factory. For details on all current Token types, please visit our {link}",values:{link:t},components:f.Fragment})})]})]})}),(0,b.jsx)(Y.SX,{children:(0,b.jsx)($,{})})]})};te.Layout=Y.ZP,te.Guard=(0,K.Z)(a.L.MISO);var ne=te},92066:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/miso/token",function(){return n(77191)}])},89214:function(){},85568:function(){},84389:function(e,t,n){"use strict";function r(e){if(null==e)throw new TypeError("Cannot destructure undefined")}n.d(t,{Z:function(){return r}})}},function(e){e.O(0,[8306,8529,2749,9294,3584,3389,1600,9774,2888,179],(function(){return t=92066,e(e.s=t);var t}));var t=e.O();_N_E=t}]);