(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2729],{49552:function(e){var n=e.exports=function(e){e||(e={}),"string"===typeof e&&(e={cookie:e}),void 0===e.cookie&&(e.cookie="");var n={get:function(n){for(var t=e.cookie.split(/;\s*/),i=0;i<t.length;i++){var o=t[i].split("=");if(unescape(o[0])===n)return unescape(o[1])}},set:function(n,t,i){i||(i={});var o=escape(n)+"="+escape(t);return i.expires&&(o+="; expires="+i.expires),i.path&&(o+="; path="+escape(i.path)),i.domain&&(o+="; domain="+escape(i.domain)),i.secure&&(o+="; secure"),e.cookie=o,o}};return n};if("undefined"!==typeof document){var t=n(document);n.get=t.get,n.set=t.set}},44345:function(e,n,t){"use strict";var i=t(56727),o=t(5506),r=t(67294),a=t(56785),s=t(85893);n.Z=function(e){var n=e.title,t=e.open,l=e.onClose,d=e.children,c=e.closeTrigger;return(0,s.jsx)(i.uT.Root,{show:t,as:r.Fragment,children:(0,s.jsx)(i.Vq,{as:"div",static:!0,className:"fixed inset-0 overflow-hidden z-20",open:t,onClose:l,children:(0,s.jsxs)("div",{className:"absolute inset-0 overflow-hidden",children:[(0,s.jsx)(i.uT.Child,{as:r.Fragment,enter:"ease-in-out duration-200",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in-out duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,s.jsx)(i.Vq.Overlay,{className:"absolute inset-0 bg-black bg-opacity-75 transition-opacity"})}),(0,s.jsx)("div",{className:"max-h-[fit-content] absolute bottom-0 fixed right-0 left-0 w-full flex",children:(0,s.jsx)(i.uT.Child,{as:r.Fragment,enter:"transform transition ease-in-out duration-200 sm:duration-700",enterFrom:"translate-y-full",enterTo:"translate-y-0",leave:"transform transition ease-in-out duration-200 sm:duration-700",leaveFrom:"translate-y-0",leaveTo:"translate-y-full",children:(0,s.jsx)("div",{className:"w-full rounded-t overflow-hidden",children:n?(0,s.jsxs)("div",{className:"flex flex-col shadow-xl overflow-y-auto h-full bg-gradient-to-r from-blue to-pink",children:[(0,s.jsx)("div",{className:"p-5",children:(0,s.jsxs)("div",{className:"flex items-center justify-between gap-3",children:[(0,s.jsx)(a.Z,{variant:"lg",weight:700,className:"text-high-emphesis",children:n}),c||(0,s.jsxs)("button",{onClick:l,children:[(0,s.jsx)("span",{className:"sr-only",children:"Close panel"}),(0,s.jsx)(o.Z,{className:"h-6 w-6 text-high-emphesis","aria-hidden":"true"})]})]})}),d]}):d})})})]})})})}},62828:function(e,n,t){"use strict";t.d(n,{x:function(){return f}});var i=t(31518),o=t(9444),r=t(50623),a=t(31969),s=t(61647),l=t(20290),d=t(62603),c=t(12614),u=t(22986),v=t(67294),h=t(85893),p=(0,v.createContext)(void 0),f=function(){var e=(0,v.useContext)(p);if(!e)throw new Error("Hook can only be used inside Pool Context");return e};n.Z=function(e){var n,t,f,m,x=e.children,g=(0,c.aQ)().account,w=(0,r.Z)(),j=w.currencies,y=w.twap,N=w.fee,b=(0,l.Z8)(j[0],j[1],N,y),_=(0,d.A)(null===b||void 0===b||null===(n=b.pool)||void 0===n?void 0:n.liquidityToken),Z=(0,u.mM)(null!==g&&void 0!==g?g:void 0,null===b||void 0===b||null===(t=b.pool)||void 0===t?void 0:t.liquidityToken),k=(0,s.Z)([null===b||void 0===b||null===(f=b.pool)||void 0===f?void 0:f.token0,null===b||void 0===b||null===(m=b.pool)||void 0===m?void 0:m.token1]),S=k.rebases,q=k.loading,T=(0,v.useMemo)((function(){return b.state===o.tK.NOT_EXISTS||Boolean(_&&i.QA.equal(_.quotient,i.xE))||Boolean(b.pool&&i.QA.equal(b.pool.reserve0.quotient,i.xE)&&i.QA.equal(b.pool.reserve1.quotient,i.xE))}),[b.pool,b.state,_]),C=(0,v.useMemo)((function(){if(null!==b&&void 0!==b&&b.pool&&_&&Z&&null!==_&&void 0!==_&&_.greaterThan(i.xE))return new i.gG(Z.quotient,_.quotient)}),[Z,null===b||void 0===b?void 0:b.pool,_]),M=(0,v.useMemo)((function(){return null!==b&&void 0!==b&&b.pool&&Z&&_&&null!==_&&void 0!==_&&_.greaterThan(i.xE)&&null!==S&&void 0!==S&&S[b.pool.token0.wrapped.address]&&null!==S&&void 0!==S&&S[b.pool.token1.wrapped.address]?[(0,a.nP)(S[b.pool.token0.wrapped.address],b.pool.getLiquidityValue(b.pool.token0,_.wrapped,Z.wrapped)),(0,a.nP)(S[b.pool.token1.wrapped.address],b.pool.getLiquidityValue(b.pool.token1,_.wrapped,Z.wrapped))]:[void 0,void 0]}),[Z,null===b||void 0===b?void 0:b.pool,S,_]);return(0,h.jsx)(p.Provider,{value:(0,v.useMemo)((function(){return{poolWithState:b,totalSupply:_,poolBalance:Z,rebases:S,noLiquidity:T,poolShare:C,liquidityValue:M,currencies:j}}),[j,M,T,Z,C,b,S,_]),children:b.state!==o.tK.LOADING&&!q&&x})}},22441:function(e,n,t){"use strict";var i=t(49501),o=t(31518),r=t(46430),a=t(56785),s=t(62828),l=t(53389),d=t(2886),c=(t(67294),t(85893));n.Z=function(e){var n=e.children,t=(0,i.mV)().i18n,u=(0,s.x)().poolWithState,v=(0,l.bL)(null===u||void 0===u?void 0:u.pool),h=(0,d.Wk)(v,"barFee").result;return(0,c.jsx)(r.Z,{trigger:n,children:function(e){var n,i,s=e.setOpen;return(0,c.jsxs)("div",{className:"flex flex-col gap-4 lg:max-w-2xl",children:[(0,c.jsx)(r.Z.Header,{header:t._(t._("Transaction Details")),onClose:function(){return s(!1)}}),(0,c.jsxs)(r.Z.BorderedContent,{className:"flex flex-col gap-4 border-dark-800",children:[(0,c.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,c.jsx)(a.Z,{weight:700,variant:"sm",className:"text-high-emphesis",children:t._(t._("Minimum Received"))}),(0,c.jsx)(a.Z,{variant:"sm",children:t._(t._("The minimum amount you\u2019ll receive from your transaction, or else the transaction will revert."))})]}),(0,c.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,c.jsx)(a.Z,{weight:700,variant:"sm",className:"text-high-emphesis",children:t._(t._("Price Impact"))}),(0,c.jsxs)(a.Z,{variant:"sm",children:[t._(t._("The difference between market price and estimated price due to the proportional makeup of the assets deposited."))," "]})]})]}),(0,c.jsxs)(r.Z.BorderedContent,{className:"flex flex-col gap-4",children:[(null===u||void 0===u||null===(n=u.pool)||void 0===n?void 0:n.fee)&&(0,c.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,c.jsx)(a.Z,{weight:700,variant:"sm",className:"text-high-emphesis",children:t._(t._("Liquidity Provider Fee"))}),(0,c.jsx)(a.Z,{variant:"sm",children:t._(t._("{0}% of each swap goes to liquidity providers.",{0:new o.iA(null===u||void 0===u||null===(i=u.pool)||void 0===i?void 0:i.fee.toString(),100).toSignificant(2)}))})]}),h&&Array.isArray(h)&&h.length>0&&(0,c.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,c.jsx)(a.Z,{weight:700,variant:"sm",className:"text-high-emphesis",children:t._(t._("xSUSHI Fee"))}),(0,c.jsxs)(a.Z,{variant:"sm",children:[t._(t._("{0}% of each swap goes to xSUSHI holders.",{0:new o.iA(h[0],100).toSignificant(2)}))," "]})]}),(0,c.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,c.jsx)(a.Z,{weight:700,variant:"sm",className:"text-high-emphesis",children:t._(t._("Estimated network Fee"))}),(0,c.jsx)(a.Z,{variant:"sm",children:t._(t._("This is our estimate of how much the gas cost for your transaction will be. Your wallet will give the true and final gas cost, which may be different from what is quoted."))})]})]}),(0,c.jsx)(r.Z.BorderedContent,{className:"border-purple/60",children:(0,c.jsx)(a.Z,{variant:"sm",children:t._(t._("Depositing with Zap Mode involves swapping your asset for the assets in the pool - this makes your transaction subject to swap-related fees."))})})]})}})}},67347:function(e,n,t){"use strict";t.d(n,{CG:function(){return s},H7:function(){return a},Il:function(){return c},VU:function(){return v},Wb:function(){return l},gc:function(){return d},uE:function(){return u},x:function(){return r}});var i=t(84243),o=t(31518),r=function(e){var n=e.contract,t=e.fn,i=e.args;return n.interface.encodeFunctionData(t,i)},a=function(e){var n=e.contract,t=e.actions,i=(void 0===t?[]:t).filter(Boolean);if(0===i.length)throw new Error("No valid actions");return 1===i.length?i[0]:i.length>1?n.interface.encodeFunctionData("multicall",[i]):void 0},s=function(e){var n=e.router,t=e.address,o=e.amount,r=e.recipient,a=e.receiveToWallet,s=e.liquidityOutput;return n.interface.encodeFunctionData("burnLiquidity",[t,o,i.$.encode(["address","bool"],[r,a]),s])},l=function(e){var n=e.router,t=e.token,o=e.address,r=e.amount,a=e.recipient,s=e.receiveToWallet,l=e.minWithdrawal;return n.interface.encodeFunctionData("burnLiquiditySingle",[o,r,i.$.encode(["address","address","bool"],[t,a,s]),l])},d=function(e){var n=e.chainId,t=e.router,i=e.recipient,r=e.amountMinimum;return n===o.a_.MATIC?t.interface.encodeFunctionData("unwrapWETH",[r,i]):t.interface.encodeFunctionData("unwrapWETH",[i])},c=function(e){var n=e.router,t=e.token,i=e.amount,o=e.recipient;return n.interface.encodeFunctionData("sweepNativeToken",[t,i,o])},u=function(e){var n=e.router,t=e.signature;if(t){var i=t.v,o=t.r,r=t.s;return n.interface.encodeFunctionData("approveMasterContract",[i,o,r])}},v=function(e){var n=e.router,t=e.signatureData;if(t){var i=t.tokenAddress,o=t.amount,r=t.deadline,a=t.v,s=t.r,l=t.s;return n.interface.encodeFunctionData("selfPermit",[i,o,r,a,s,l])}}},23310:function(e,n,t){"use strict";t.d(n,{d:function(){return o}});var i=t(31518),o=function(e){var n,t;if(null!==(n=e[0])&&void 0!==n&&n.greaterThan(0)&&null!==(t=e[1])&&void 0!==t&&t.greaterThan(0)){var o=e[1].divide(e[0]);return new i.tA(e[0].currency,e[1].currency,o.denominator,o.numerator)}}},20311:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return de}});var i=t(94323),o=t(49501),r=t(9444),a=t(98332),s=t(71862),l=t(94492),d=t(56785),c=t(34189),u=t(31518),v=t(20734),h=t(62828),p=t(31969),f=t(15423),m=t(12614),x=t(16339),g=t(67294),w=t(25617),j=t(50029),y=t(87794),N=t.n(y),b=function(){var e=(0,h.x)().currencies,n=(0,w.v9)(v.z_);return(0,g.useMemo)((function(){return e[0]&&e[1]?[(0,p.eo)(n[0],e[0]),(0,p.eo)(n[1],e[1])]:[void 0,void 0]}),[e,n])},_=function(){var e,n,t=(0,o.mV)().i18n,i=(0,m.aQ)().account,a=(0,h.x)(),s=a.poolWithState,l=a.currencies,d=(0,w.v9)(v.Fo),c=b(),p=(0,f.L)(null!==i&&void 0!==i?i:void 0,l,d),x=(0,g.useMemo)((function(){return!!c.find((function(e,n){var t;return!(!p||!e)&&(null===p||void 0===p||null===(t=p[n])||void 0===t?void 0:t.lessThan(e))}))}),[p,c]);return i?(null===s||void 0===s?void 0:s.state)===r.tK.INVALID?t._(t._("Invalid pool")):null!==(e=c[0])&&void 0!==e&&e.greaterThan(u.xE)||null!==(n=c[1])&&void 0!==n&&n.greaterThan(u.xE)?x?t._(t._("Insufficient Balance")):"":t._(t._("Enter an amount")):t._(t._("Connect Wallet"))},Z=function(){var e=(0,x.T)(),n=(0,x.C)(v.Zx),t=n.fixedRatio,i=n.spendFromWallet,o=n.normalInput,r=(0,g.useMemo)((function(){return function(n){return e((0,v.Mt)("function"===typeof n?n(o):n))}}),[e,o]);return function(e){var n=e.fixedRatio,t=e.spendFromWallet,i=e.inputs,o=e.setInputs,r=(0,m.aQ)().account,a=(0,h.x)(),s=a.poolWithState,l=a.noLiquidity,d=a.rebases,c=a.currencies,v=b(),x=(0,g.useCallback)((function(e){if(null!==s&&void 0!==s&&s.pool&&!l&&n&&null!==c&&void 0!==c&&c[0]&&null!==c&&void 0!==c&&c[1]){var t=[c[0].wrapped,c[1].wrapped],i=t[0],r=t[1],a=(0,p.eo)(e,i);if(i&&i&&a&&null!==d&&void 0!==d&&d[i.address]&&null!==d&&void 0!==d&&d[r.address]){var v,h=(0,p.nP)(d[r.address],s.pool.priceOf(i).quote((0,p.HW)(d[i.address],a)));return void o([e,(null!==(v=c[1])&&void 0!==v&&v.isNative?u.ih.fromRawAmount(c[1],h.quotient):h).toExact()])}}o((function(n){return[e,0===Number(e)?void 0:n[1]]}))}),[c,n,l,null===s||void 0===s?void 0:s.pool,d,o]),w=(0,g.useCallback)((function(e){if(null!==s&&void 0!==s&&s.pool&&!l&&n&&null!==c&&void 0!==c&&c[0]&&null!==c&&void 0!==c&&c[1]){var t=[c[0].wrapped,c[1].wrapped],i=t[0],r=t[1],a=(0,p.eo)(e,r);if(i&&i&&a&&null!==d&&void 0!==d&&d[i.address]&&null!==d&&void 0!==d&&d[r.address]){var v,h=(0,p.nP)(d[i.address],s.pool.priceOf(r).quote((0,p.HW)(d[r.address],a)));return void o([(null!==(v=c[0])&&void 0!==v&&v.isNative?u.ih.fromRawAmount(c[0],h.quotient):h).toExact(),e])}}o((function(n){return[0===Number(e)?void 0:n[0],e]}))}),[c,n,l,null===s||void 0===s?void 0:s.pool,d,o]),y=(0,f.L)(null!==r&&void 0!==r?r:void 0,c,t),_=(0,g.useCallback)((0,j.Z)(N().mark((function e(){var t,i,r,a,d;return N().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(y&&null!==s&&void 0!==s&&s.pool&&y[0]&&y[1]&&c[0]){e.next=2;break}return e.abrupt("return");case 2:!l&&n?null!==(t=s.pool.priceOf(c[0].wrapped).quote(y[0].wrapped))&&void 0!==t&&t.lessThan(y[1].wrapped)?x((null===(i=(0,p.iN)(y[0]))||void 0===i?void 0:i.toExact())||""):w((null===(r=(0,p.iN)(y[1]))||void 0===r?void 0:r.toExact())||""):o([null===(a=(0,p.iN)(y[0]))||void 0===a?void 0:a.toExact(),null===(d=(0,p.iN)(y[1]))||void 0===d?void 0:d.toExact()]);case 3:case"end":return e.stop()}}),e)}))),[y,c,n,x,w,l,null===s||void 0===s?void 0:s.pool,o]),Z=(0,g.useMemo)((function(){return!!(y&&null!==s&&void 0!==s&&s.pool&&y[0]&&y[1]&&c[0])&&(!l&&n?null!==(e=s.pool.priceOf(c[0].wrapped).quote(y[0].wrapped))&&void 0!==e&&e.lessThan(y[1].wrapped)?null===(t=v[0])||void 0===t?void 0:t.equalTo((0,p.iN)(y[0])||""):null===(i=v[1])||void 0===i?void 0:i.equalTo((0,p.iN)(y[1])||""):(null===(o=v[0])||void 0===o?void 0:o.equalTo((0,p.iN)(y[0])||""))&&(null===(r=v[1])||void 0===r?void 0:r.equalTo((0,p.iN)(y[1])||"")));var e,t,i,o,r}),[y,c,n,l,v,null===s||void 0===s?void 0:s.pool]);return(0,g.useEffect)((function(){n&&i[0]&&i[1]||n&&i[0]&&!i[1]?x(i[0]):n&&i[1]&&!i[0]&&w(i[1])}),[n]),(0,g.useMemo)((function(){return{mainInput:[i[0],x],secondaryInput:[i[1],w],onMax:_,isMax:Z}}),[x,w,i,Z,_])}({fixedRatio:t,spendFromWallet:i,inputs:o,setInputs:r})},k=t(16682),S=t(23310),q=t(37643),T=function(){var e=(0,h.x)(),n=e.poolWithState,t=e.totalSupply,i=e.poolBalance,o=e.rebases,r=e.noLiquidity,a=e.poolShare,s=e.liquidityValue,l=e.currencies,d=(0,x.C)(q.tE),c=b(),v=(0,g.useMemo)((function(){if(null!==n&&void 0!==n&&n.pool&&t&&l[0]&&l[1]&&null!==o&&void 0!==o&&o[l[0].wrapped.address]&&null!==o&&void 0!==o&&o[l[1].wrapped.address]){var e=(0,p.HW)(o[l[0].wrapped.address],c&&c[0]?c[0].wrapped:u.ih.fromRawAmount(l[0],"0").wrapped),i=(0,p.HW)(o[l[1].wrapped.address],c&&c[1]?c[1].wrapped:u.ih.fromRawAmount(l[1],"0").wrapped);if(e.equalTo(u.xE)&&i.equalTo(u.xE))return;try{var a=n.pool.getLiquidityMinted(t,e,i),s=(0,p.uc)(a,r?k.fI:d)[0];return u.ih.fromRawAmount(a.currency,s.toString())}catch(v){console.error(v)}}}),[l,r,c,null===n||void 0===n?void 0:n.pool,o,d,t]),f=(0,g.useMemo)((function(){if(v&&t&&i)return new u.gG(i.add(v).quotient,t.add(v).quotient)}),[v,i,t]),m=(0,g.useMemo)((function(){return r&&c?(0,S.d)(c):null!==c&&void 0!==c&&c[1]&&null!==n&&void 0!==n&&n.pool&&null!==(e=c[0])&&void 0!==e&&e.wrapped?null===n||void 0===n?void 0:n.pool.priceOf(null===(t=c[1])||void 0===t?void 0:t.currency.wrapped):void 0;var e,t}),[r,c,null===n||void 0===n?void 0:n.pool]);return(0,g.useMemo)((function(){return{poolShareBefore:a,poolShareAfter:f,liquidityMinted:v,liquidityValueBefore:s,price:m}}),[a,f,v,s,m])},C=t(22441),M=t(85893),E=function(){var e,n,t,i,r,a,s,l,c,u=(0,o.mV)().i18n,v=(0,h.x)(),p=v.poolWithState,f=v.poolBalance,m=T(),x=m.price,g=m.poolShareBefore,w=m.liquidityMinted,j=m.poolShareAfter;return(0,M.jsxs)("div",{className:"flex flex-col gap-4 lg:gap-8",children:[(0,M.jsxs)("div",{className:"flex flex-row justify-between gap-2",children:[(0,M.jsx)(d.Z,{weight:700,className:"text-high-emphesis",children:u._(u._("Transaction Details"))}),(0,M.jsx)(C.Z,{children:(0,M.jsx)(d.Z,{weight:700,variant:"sm",className:"text-right text-blue",children:u._(u._("What do these mean?"))})})]}),(0,M.jsxs)("div",{className:"flex flex-col gap-1",children:[(null===p||void 0===p?void 0:p.pool)&&(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)("div",{className:"flex flex-row justify-between gap-2",children:[(0,M.jsxs)(d.Z,{variant:"sm",className:"text-secondary",children:["1 ",null===(e=p.pool)||void 0===e||null===(n=e.token0)||void 0===n?void 0:n.symbol]}),(0,M.jsxs)(d.Z,{weight:700,variant:"sm",className:"text-right text-high-emphesis",children:[x?x.toSignificant(6):"0.000"," ",null===(t=p.pool)||void 0===t||null===(i=t.token1)||void 0===i?void 0:i.symbol]})]}),(0,M.jsxs)("div",{className:"flex flex-row justify-between",children:[(0,M.jsxs)(d.Z,{variant:"sm",className:"text-secondary",children:["1 ",null===(r=p.pool)||void 0===r||null===(a=r.token1)||void 0===a?void 0:a.symbol]}),(0,M.jsxs)(d.Z,{weight:700,variant:"sm",className:"text-right text-high-emphesis",children:[x?x.invert().toSignificant(6):"0.000"," ",null===(s=p.pool)||void 0===s||null===(l=s.token0)||void 0===l?void 0:l.symbol]})]})]}),(0,M.jsxs)("div",{className:"flex flex-row justify-between gap-2",children:[(0,M.jsx)(d.Z,{variant:"sm",className:"text-secondary",children:u._(u._("Minimum Received"))}),(0,M.jsxs)(d.Z,{id:"text-liquidity-minted",weight:700,variant:"sm",className:"text-high-emphesis",children:[(null===w||void 0===w?void 0:w.toSignificant(6))||"0.000"," SLP"]})]}),(0,M.jsxs)("div",{className:"flex flex-row justify-between gap-2",children:[(0,M.jsx)(d.Z,{variant:"sm",className:"text-secondary",children:u._(u._("Your Pool Share"))}),(0,M.jsxs)(d.Z,{weight:700,variant:"sm",className:"text-right text-high-emphesis",children:[null!==g&&void 0!==g&&g.greaterThan(0)?null===g||void 0===g?void 0:g.toSignificant(6):"0.000","%",(null===j||void 0===j?void 0:j.greaterThan(0))&&(0,M.jsxs)(M.Fragment,{children:["\u2192 ",(0,M.jsxs)("span",{className:"text-green",children:[(null===j||void 0===j?void 0:j.toSignificant(6))||"0.000","%"]})]})]})]}),(0,M.jsxs)("div",{className:"flex flex-row justify-between gap-2",children:[(0,M.jsx)(d.Z,{variant:"sm",className:"text-secondary whitespace-nowrap",children:u._(u._("Your Pool Tokens"))}),(0,M.jsxs)(d.Z,{weight:700,variant:"sm",className:"text-right text-high-emphesis",children:[null!==f&&void 0!==f&&f.greaterThan(0)?null===f||void 0===f?void 0:f.toSignificant(6):"0.000",(null===w||void 0===w?void 0:w.greaterThan(0))&&(0,M.jsxs)(M.Fragment,{children:[" SLP ","\u2192"," ",(0,M.jsxs)("span",{className:"text-green",children:[f&&w?null===(c=f.add(w))||void 0===c?void 0:c.toSignificant(6):"0.000"," SLP"]})]})]})]})]})]})},W=function(){var e=(0,o.mV)().i18n,n=_();return(0,M.jsxs)("div",{className:"flex flex-col p-10 rounded bg-dark-1000 shadow-lg gap-20",children:[(0,M.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,M.jsx)(d.Z,{variant:"h3",className:"text-high-emphesis",children:e._(e._("Standard Mode"))}),(0,M.jsx)(d.Z,{variant:"sm",children:e._(e._("Select any asset from your wallet or BentoBox balance to invest in this pool.  That asset will be split and converted into the pool assets and deposited in equal value."))})]}),(0,M.jsx)("div",{className:n?"opacity-50":"opacity-100",children:(0,M.jsx)(E,{})})]})},A=t(16835),F=t(97436),L=t(15097),P=t(53389),D=t(76866),I=t(49932),B=function(){var e=(0,o.mV)().i18n,n=(0,D.Z)(),t=(0,x.T)(),i=(0,P.rO)(),r=(0,P.sL)(),a=(0,h.x)().currencies,l=(0,x.C)(v.Zx),d=l.spendFromWallet,c=l.attemptingTxn,u=l.bentoPermit,f=b(),m=(0,A.Z)(f,2),g=m[0],w=m[1],j=_(),y=Z(),N=(0,A.Z)(y.mainInput,2),k=N[0],S=N[1],q=(0,A.Z)(y.secondaryInput,2),T=q[0],C=q[1],W=y.onMax,B=y.isMax;return(0,M.jsx)(M.Fragment,{children:(0,M.jsxs)("div",{className:"flex flex-col gap-6",children:[(0,M.jsx)("div",{}),(0,M.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,M.jsx)(F.Z,{value:k||"",currency:null===a||void 0===a?void 0:a[0],onChange:function(e){return S(e||"")},headerRight:(0,M.jsx)(F.Z.WalletSwitch,{onChange:function(){return t((0,v.B5)([!d[0],d[1]]))},checked:d[0],id:"switch-spend-from-wallet-a"}),spendFromWallet:d[0],id:"asset-input-a"}),(0,M.jsx)("div",{}),(0,M.jsx)(F.Z,{value:T||"",currency:null===a||void 0===a?void 0:a[1],onChange:function(e){return C(e||"")},headerRight:(0,M.jsx)(F.Z.WalletSwitch,{onChange:function(){return t((0,v.B5)([d[0],!d[1]]))},checked:d[1],id:"switch-spend-from-wallet-b"}),spendFromWallet:d[1],id:"asset-input-b"}),(0,M.jsx)("div",{className:"flex flex-col gap-3",children:(0,M.jsx)(I.Z,{inputAmounts:[g,w],tokenApproveOn:null===i||void 0===i?void 0:i.address,masterContractAddress:null===r||void 0===r?void 0:r.address,withPermit:!0,permit:u,onPermit:function(e){return t((0,v.MW)(e))},children:function(n){var i=n.approved,o=n.loading,r=!!j||!i||o||c,a=c?(0,M.jsx)(L.Z,{children:e._(e._("Depositing"))}):o?"":j||e._(e._("Confirm Deposit"));return(0,M.jsxs)("div",{className:(0,p.AK)(B?"flex":"grid grid-cols-2 gap-3"),children:[!B&&(0,M.jsx)(s.ZP,{fullWidth:!0,color:"blue",disabled:B,onClick:W,children:e._(e._("Max Deposit"))}),(0,M.jsx)(s.ZP,{id:"btn-".concat(a.toString().replace(/\s/g,"")),loading:o,fullWidth:!0,color:"gradient",disabled:r,onClick:function(){return t((0,v.O4)(!0))},children:a})]})}})})]}),!j&&!n&&(0,M.jsx)("div",{className:"flex flex-col",children:(0,M.jsx)(E,{})})]})})},R=t(92552),O=t(50484),V=t(2905),H=t(44345),z=t(46430),K=function(){var e=(0,D.Z)(),n=(0,g.useState)(!1),t=n[0],i=n[1],r=(0,o.mV)().i18n,a=(0,M.jsx)("div",{className:"flex items-center justify-center w-6 h-6 rounded cursor-pointer",onClick:function(){return i(!0)},children:(0,M.jsx)(V.Z,{className:"w-6 h-6 lg:w-4 lg:h-4 text-high-emphesis"})}),s=(0,M.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,M.jsx)(z.Z.Header,{header:r._(r._("Fixed ratio")),onClose:function(){return i(!1)}}),(0,M.jsxs)(z.Z.BorderedContent,{className:"flex flex-col gap-3",children:[(0,M.jsx)(d.Z,{variant:"sm",className:"text-high-emphesis",children:r._(r._("Balanced Mode is an optional UI setting to maintain the traditional style of equal-value adds and removes."))}),(0,M.jsx)(d.Z,{variant:"sm",weight:400,className:"text-high-emphesis",children:r._(r._("Previously, adding and removing liquidity had to be done with equal amounts of all assets. With the Trident\nupdate, this is no longer mandatory."))})]}),(0,M.jsxs)(z.Z.BorderedContent,{className:"flex flex-col gap-2",children:[(0,M.jsx)(d.Z,{variant:"sm",weight:700,className:"text-white",children:r._(r._("Why use Balance Mode?"))}),(0,M.jsx)(d.Z,{variant:"sm",weight:400,className:"text-high-emphesis",children:r._(r._("Lower price impacts. The closer to equilibrium you interact with a pool, the lower price impact there is on your investment."))})]})]});return(0,M.jsx)(M.Fragment,{children:e?(0,M.jsx)(z.Z,{trigger:a,children:function(){return s}}):(0,M.jsxs)(M.Fragment,{children:[a,(0,M.jsx)(H.Z,{open:t,onClose:function(){return i(!1)},children:s})]})})},Q=function(e){var n=e.margin,t=void 0===n||n,i=(0,D.Z)(),r=(0,o.mV)().i18n,a=(0,x.T)(),s=(0,x.C)(v.Zx),l=s.fixedRatio;if(s.liquidityMode!==O.LU.STANDARD)return(0,M.jsx)(M.Fragment,{});var c=(0,M.jsxs)("div",{className:"flex justify-between gap-1 lg:justify-start",children:[(0,M.jsxs)("div",{className:"flex flex-row items-center gap-3 cursor-pointer",onClick:function(){return a((0,v.JH)(!l))},children:[(0,M.jsx)(R.Z,{id:"chk-fixed-ratio-deposit",className:"w-6 h-6",checked:l}),(0,M.jsx)(d.Z,{variant:"sm",weight:700,className:l?"text-white":"",children:r._(r._("Deposit assets in equal amounts"))})]}),(0,M.jsx)(K,{})]});return i?(0,M.jsx)("div",{className:"pb-1",children:c}):(0,M.jsxs)("div",{className:t?"top-0 -ml-5 -mr-5 -mt-5 mb-4 pt-5 pb-5 relative":"py-5 relative",children:[(0,M.jsx)("div",{className:"z-[-1] top-0 pointer-events-none absolute w-full h-full border-t border-b border-gradient-r-blue-pink-dark-1000 border-transparent opacity-30",children:(0,M.jsx)("div",{className:"w-full h-full bg-gradient-to-r from-opaque-blue to-opaque-pink"})}),(0,M.jsx)("div",{className:"px-5 z-[1]",children:c})]})},X=t(27801),G=t(84243),U=t(9279),Y=t(67347),$=t(54907),J=t(53344),ee=t(68411),ne=t(70028),te=function(e){var n=e.txHash,t=e.onDismiss,i=(0,o.mV)().i18n;return(0,M.jsx)(ne.S.SubmittedModalContent,{txHash:n,header:i._(i._("Success!")),subheader:i._(i._("Success! Deposit Submitted")),onDismiss:t})},ie=function(){var e=(0,o.mV)().i18n,n=(0,x.T)(),t=(0,h.x)().currencies,i=(0,x.C)(v.Zx),r=i.attemptingTxn,a=i.showReview,l=i.txHash,c=i.spendFromWallet,f=i.bentoPermit,w=T(),y=w.liquidityMinted,_=w.poolShareAfter,Z=w.poolShareBefore,k=function(){var e=(0,o.mV)().i18n,n=(0,h.x)(),t=n.poolWithState,i=n.rebases,r=(0,m.aQ)(),a=r.chainId,s=r.library,l=r.account,d=(0,x.T)(),c=(0,ee.h7)(),f=(0,$.sL)();return(0,g.useCallback)(function(){var n=(0,j.Z)(N().mark((function n(o){var r,h,m,x,g,w,j,y,b,_,Z,k,S,q,T;return N().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=o.parsedAmounts,h=o.spendFromWallet,m=o.liquidityMinted,x=o.bentoPermit,g=(0,A.Z)(r,2),w=g[0],j=g[1],y=(0,A.Z)(h,2),b=y[0],_=y[1],null!==t&&void 0!==t&&t.pool&&a&&s&&l&&f&&m&&i){n.next=5;break}return n.abrupt("return");case 5:if(Z=t.pool,k="0x0",S=[],q=G.$.encode(["address"],[l]),w&&(w.currency.isNative&&b&&(k=(0,u.NC)(w)),S.push({token:w.currency.isNative&&b?U.d:w.currency.wrapped.address,native:b,amount:b?w.quotient.toString():(0,p.sO)(i[w.wrapped.currency.address],w.quotient).toString()})),j&&(j.currency.isNative&&_&&(k=(0,u.NC)(j)),S.push({token:j.currency.isNative&&_?U.d:j.currency.wrapped.address,native:_,amount:_?j.quotient.toString():(0,p.sO)(i[j.wrapped.currency.address],j.quotient).toString()})),0!==S.length){n.next=13;break}return n.abrupt("return");case 13:return n.prev=13,d((0,v.tD)(!0)),n.next=17,s.getSigner().sendTransaction({from:l,to:f.address,data:(0,Y.H7)({contract:f,actions:[(0,Y.uE)({router:f,signature:x}),(0,Y.x)({contract:f,fn:"addLiquidity",args:[S,Z.liquidityToken.address,m.quotient.toString(),q]})]}),value:k});case 17:if(null===(T=n.sent)||void 0===T||!T.hash){n.next=22;break}return c(T,{summary:e._(e._("Add {0} {1} and {2} {3} into {4}/{5}",{0:null===w||void 0===w?void 0:w.toSignificant(3),1:null===w||void 0===w?void 0:w.currency.symbol,2:null===j||void 0===j?void 0:j.toSignificant(3),3:null===j||void 0===j?void 0:j.currency.symbol,4:Z.token0.symbol,5:Z.token1.symbol}))}),n.next=22,T.wait();case 22:return d((0,v.tD)(!1)),gtag("event","Add",{event_category:"Liquidity",event_label:[Z.token0.symbol,Z.token1.symbol].join("/")}),d((0,v.MW)(void 0)),n.abrupt("return",T);case 28:n.prev=28,n.t0=n.catch(13),d((0,v.tD)(!1)),(null===n.t0||void 0===n.t0?void 0:n.t0.code)!==J.PM&&console.error(n.t0);case 32:case"end":return n.stop()}}),n,null,[[13,28]])})));return function(e){return n.apply(this,arguments)}}(),[t,a,s,l,f,i,d,c,e])}(),S=b(),q=(0,g.useCallback)((0,j.Z)(N().mark((function e(){var t;return N().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k({parsedAmounts:S,liquidityMinted:y,spendFromWallet:c,bentoPermit:f});case 2:null!==(t=e.sent)&&void 0!==t&&t.hash&&n((0,v.pW)(t.hash));case 4:case"end":return e.stop()}}),e)}))),[k,S,y,c,f,n]),C=[S[0]||(null!==t&&void 0!==t&&t[0]?u.ih.fromRawAmount(t[0],"0"):void 0),S[1]||(null!==t&&void 0!==t&&t[1]?u.ih.fromRawAmount(t[1],"0"):void 0)];return(0,M.jsx)(z.Z.Controlled,{isOpen:a,onDismiss:function(){return n((0,v.O4)(!1))},afterLeave:function(){return n((0,v.pW)(void 0))},maxWidth:"md",unmount:!1,children:l?(0,M.jsx)(te,{txHash:l,onDismiss:function(){return n((0,v.pW)(void 0))}}):(0,M.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,M.jsx)(z.Z.Header,{header:e._(e._("Confirm add liquidity")),onClose:function(){return n((0,v.O4)(!1))}}),(0,M.jsx)(d.Z,{variant:"sm",children:e._(e._("Output is estimated. If the price changes by more than 0.5% your transaction will revert."))}),(0,M.jsxs)(z.Z.BorderedContent,{className:"flex flex-col gap-3 bg-dark-1000/40",children:[(0,M.jsx)(d.Z,{weight:700,variant:"sm",className:"text-secondary",children:e._(e._("You are depositing:"))}),(0,M.jsx)(X.Z,{items:C.map((function(e,n){return(0,M.jsx)(X.Z.CurrencyAmountItem,{amount:e},n)}))})]}),(0,M.jsxs)(z.Z.BorderedContent,{className:"flex flex-col gap-3 bg-dark-1000/40",children:[(0,M.jsx)(d.Z,{weight:700,variant:"sm",className:"text-secondary",children:e._(e._("You'll receive (at least):"))}),(0,M.jsxs)(d.Z,{weight:700,variant:"lg",className:"text-high-emphesis",children:[null===y||void 0===y?void 0:y.toSignificant(6)," SLP"]})]}),(0,M.jsxs)("div",{className:"flex justify-between px-2 py-1",children:[(0,M.jsx)(d.Z,{variant:"sm",className:"text-secondary",children:e._(e._("Share of Pool"))}),(0,M.jsxs)(d.Z,{variant:"sm",weight:700,className:"text-right text-high-emphesis",children:[null!==Z&&void 0!==Z&&Z.greaterThan(0)?null===Z||void 0===Z?void 0:Z.toSignificant(6):"0.000","% \u2192"," ",(null===_||void 0===_?void 0:_.toSignificant(6))||"0.000","%"]})]}),(0,M.jsx)(s.ZP,{id:"btn-modal-confirm-deposit",disabled:r,color:"blue",onClick:q,children:e._(e._("Confirm Deposit"))})]})})},oe=t(87433),re=t(22680),ae=t(41664),se=t.n(ae),le=function(){var e=(0,o.mV)().i18n,n=(0,m.aQ)().chainId,t=(0,h.x)().poolWithState;return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(re.CV,{pattern:"bg-bubble",children:(0,M.jsxs)("div",{className:"relative flex flex-col w-full gap-5 mt-px lg:justify-between lg:w-7/12",children:[(0,M.jsxs)("div",{className:"flex justify-between",children:[(0,M.jsx)(s.ZP,{color:"blue",variant:"outlined",size:"sm",className:"!pl-2 !py-1 rounded-full",startIcon:(0,M.jsx)(i.Z,{width:24,height:24}),children:(0,M.jsx)(se(),{href:(null===t||void 0===t?void 0:t.state)===r.tK.EXISTS?{pathname:"/trident/pool",query:{tokens:[(0,p.yP)(n,t.pool.token0.address),(0,p.yP)(n,t.pool.token1.address)],fee:t.pool.fee,twap:t.pool.twap}}:"/trident/pools",children:(null===t||void 0===t?void 0:t.state)===r.tK.EXISTS?"".concat(t.pool.token0.symbol,"-").concat(t.pool.token1.symbol):e._(e._("Back"))})}),(0,M.jsx)(l.Z,{trident:!0})]}),(0,M.jsx)("div",{children:(0,M.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,M.jsx)(d.Z,{variant:"h2",weight:700,className:"text-high-emphesis",children:e._(e._("Add Liquidity"))}),(0,M.jsx)(d.Z,{variant:"sm",children:e._(e._("Deposit tokens in equal amounts or deposit either one of the two tokens or in any ratio."))}),t&&[r.tK.NOT_EXISTS,r.tK.INVALID].includes(t.state)&&(0,M.jsx)(a.Z,{className:"px-0 pb-0 bg-transparent",dismissable:!1,type:"error",showIcon:!0,message:e._(e._("A Pool could not be found for provided currencies"))})]})})]})}),(0,M.jsx)(re.A9,{children:(0,M.jsxs)("div",{className:"flex flex-row justify-between",children:[(0,M.jsxs)("div",{className:"flex flex-col w-full lg:w-7/12",children:[(0,M.jsx)(Q,{}),(0,M.jsx)(B,{}),(0,M.jsx)(ie,{})]}),(0,M.jsx)("div",{className:"flex flex-col hidden -mt-40 lg:block lg:w-4/12",children:(0,M.jsx)(W,{})})]})})]})};le.Guard=(0,oe.Z)(c.L.TRIDENT),le.Provider=h.Z,le.Layout=re.ZP;var de=le},82410:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/trident/add/[[...tokens]]",function(){return t(20311)}])},24635:function(e,n,t){"use strict";var i=t(67294);const o=i.forwardRef((function(e,n){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:n},e),i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}))}));n.Z=o},13342:function(e,n,t){"use strict";var i=t(67294);const o=i.forwardRef((function(e,n){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:n},e),i.createElement("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"}))}));n.Z=o},94323:function(e,n,t){"use strict";var i=t(67294);const o=i.forwardRef((function(e,n){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:n},e),i.createElement("path",{fillRule:"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",clipRule:"evenodd"}))}));n.Z=o},2905:function(e,n,t){"use strict";var i=t(67294);const o=i.forwardRef((function(e,n){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:n},e),i.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"}))}));n.Z=o}},function(e){e.O(0,[8306,8529,8897,2749,2407,7230,7032,3389,9658,9469,6688,134,6201,5710,3786,9774,2888,179],(function(){return n=82410,e(e.s=n);var n}));var n=e.O();_N_E=n}]);