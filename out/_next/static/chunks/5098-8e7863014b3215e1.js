(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5098],{49552:function(e){var r=e.exports=function(e){e||(e={}),"string"===typeof e&&(e={cookie:e}),void 0===e.cookie&&(e.cookie="");var r={get:function(r){for(var t=e.cookie.split(/;\s*/),n=0;n<t.length;n++){var o=t[n].split("=");if(unescape(o[0])===r)return unescape(o[1])}},set:function(r,t,n){n||(n={});var o=escape(r)+"="+escape(t);return n.expires&&(o+="; expires="+n.expires),n.path&&(o+="; path="+escape(n.path)),n.domain&&(o+="; domain="+escape(n.domain)),n.secure&&(o+="; secure"),e.cookie=o,o}};return r};if("undefined"!==typeof document){var t=r(document);r.get=t.get,r.set=t.set}},97698:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return pe}});var n=t(59499),o=t(50029),i=t(16835),a=t(87794),u=t.n(a),s=t(56727),c=t(52358),d=t(49501),l=t(31518),p=t(46206),v=t(15205),f=t(56785),m=t(38239),h=t(76537),g=t(10697),x=t(33318),w=t(32036),b=t(59497),y=t(4363),T=t(50623),j=t(31969),A=t(15174),O=t(60708),_=t(15423),k=t(61647),I=t(27812),S=t(2593),Z=t(9444),C=t(97503),P=t(69328),N=t(12614),E=t(16339),F=t(22166),G=t(67294),B=t(71195),D=t(20290);function W(e,r,t,n){var i=(0,N.aQ)(),a=i.chainId,s=i.library,c=(0,P.ZP)(),d=(0,E.T)(),p=(0,G.useState)(),v=p[0],f=p[1],m=(0,G.useMemo)((function(){return e===l.YL.EXACT_INPUT?[t,n]:[n,t]}),[e,t,n]),h=m[0],g=m[1],x=(0,k.C)(h).rebase,w=(0,k.C)(g).rebase,b=function(e,r){var t=(0,B.V)(e,r),n=(0,D.$k)(t),o=(0,C.OY)(t),i=(0,G.useMemo)((function(){return[].concat((0,I.Z)(n),(0,I.Z)(o))}),[o,n]);return(0,G.useMemo)((function(){return(0,I.Z)(Object.values(i.reduce((function(e,r){return!Array.isArray(r)&&r.state===Z.tK.EXISTS&&r.pool&&e.push(r.pool),Array.isArray(r)&&r[0]===C._G.EXISTS&&r[1]&&e.push(r[1]),e}),[])))}),[i])}(h,g);return(0,G.useEffect)((function(){if(s){var e=function(){var e=(0,o.Z)(u().mark((function e(){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.getGasPrice();case 2:return r=e.sent,e.abrupt("return",r.toNumber());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().then((function(e){return f(e)}))}}),[c,s]),(0,G.useMemo)((function(){if(v&&h&&g&&h.wrapped.address!==g.wrapped.address&&a&&r&&n&&x&&w&&b.length>0){var t=l.ih.fromRawAmount(r.currency,(0,j.HW)(x,r.wrapped).quotient.toString()),o=b.filter((function(e){return e instanceof Z.Pg})),i=b.filter((function(e){return e instanceof l.qA}));if(e===l.YL.EXACT_INPUT){var u=(0,Z.aD)(h.wrapped,g.wrapped,S.O$.from(t.quotient.toString()),o,l.FX[t.currency.chainId],v),s=(0,Z.v0)(h.wrapped,g.wrapped,S.O$.from(r.quotient.toString()),i,l.FX[r.currency.chainId],v);if(S.O$.from((0,j.p8)(w,l.QA.BigInt(u.amountOutBN.toString())).toString()).gt(s.amountOutBN)){if(u.status===Z.yB.Success){var c=u.priceImpact;return d((0,F.bg)({info:{chainId:a,allowedPools:o,route:u,mode:"multiple"}})),{trade:Z.ho.bestTradeExactIn(u,t,g),priceImpact:c}}}else if(s.status===Z.yB.Success){var p=s.priceImpact;d((0,F.bg)({info:{chainId:a,allowedPools:i,route:s,mode:"single"}}));var f=(0,Z.Yj)(s,i,h,g);try{return{trade:l.ho.exactIn(f,r),priceImpact:p}}catch(_){return{trade:void 0,priceImpact:void 0}}}}else{var m=(0,Z.cc)(h.wrapped,g.wrapped,S.O$.from(t.quotient.toString()),o,l.FX[t.currency.chainId],v),y=(0,Z.uH)(h.wrapped,g.wrapped,S.O$.from(r.quotient.toString()),i,l.FX[r.currency.chainId],v);if(S.O$.from((0,j.p8)(w,l.QA.BigInt(m.amountOut.toString())).toString()).lt(y.amountInBN)){if(m.status===Z.yB.Success){var T=m.priceImpact;return d((0,F.bg)({info:{chainId:a,allowedPools:o,route:m,mode:"multiple"}})),{trade:Z.ho.bestTradeExactOut(m,h,t),priceImpact:T}}}else if(y.status===Z.yB.Success){var A=y.priceImpact;d((0,F.bg)({info:{chainId:a,allowedPools:i,route:y,mode:"single"}}));var O=(0,Z.Yj)(y,i,h,g);try{return{trade:l.ho.exactOut(O,r),priceImpact:A}}catch(_){return{trade:void 0,priceImpact:void 0}}}}}return{trade:void 0,priceImpact:void 0}}),[b,r,a,h,g,v,n,x,w,e,d])}var M=function(){var e=(0,d.mV)().i18n,r=(0,E.C)(y.gD),t=r.value,n=r.typedField,o=r.spendFromWallet,a=(0,N.aQ)(),u=a.account,s=a.chainId,c=(0,T.Z)(),p=(0,i.Z)(c.currencies,2),v=p[0],f=p[1],m=(0,k.Z)([v,f]),h=m.rebases,g=m.loading,x=(0,G.useMemo)((function(){return(0,O.e)(t,n===y.GT.A?v:f)}),[v,f,n,t]),w=(0,G.useMemo)((function(){return v&&f&&!!s&&((null===v||void 0===v?void 0:v.isNative)&&l.FX[s].address===(null===f||void 0===f?void 0:f.wrapped.address)||(null===f||void 0===f?void 0:f.isNative)&&l.FX[s].address===(null===v||void 0===v?void 0:v.wrapped.address))}),[s,v,f]),b=W(n===y.GT.A?l.YL.EXACT_INPUT:l.YL.EXACT_OUTPUT,x,n===y.GT.A?v:f,n===y.GT.A?f:v),I=b.trade,S=b.priceImpact,Z=(0,G.useMemo)((function(){return S?new l.gG(S.toString().toBigNumber(18).toString(),l.QA.exponentiate(l.QA.BigInt(10),l.QA.BigInt(18))):void 0}),[S]),C=(0,G.useMemo)((function(){var e,r,t;if(I)return(0,A.C)(I)===l.G1.V2TRADE?I.outputAmount:(0,A.C)(I)===l.G1.V3TRADE&&!g&&null!==(e=I.outputAmount)&&void 0!==e&&e.currency.wrapped.address&&h[null===I||void 0===I||null===(r=I.outputAmount)||void 0===r?void 0:r.currency.wrapped.address]?(0,j.nP)(h[null===(t=I.outputAmount)||void 0===t?void 0:t.currency.wrapped.address],I.outputAmount.wrapped):void 0}),[h,g,I]),P=(0,_.C)(null!==u&&void 0!==u?u:void 0,v,o),F=(0,G.useMemo)((function(){var e,r;return w?[t,t]:[n===y.GT.A?t:null!==(e=null===C||void 0===C?void 0:C.toSignificant(6))&&void 0!==e?e:"",n===y.GT.B?t:null!==(r=null===C||void 0===C?void 0:C.toSignificant(6))&&void 0!==r?r:""]}),[w,C,n,t]),B=(0,G.useMemo)((function(){return w?[x,x]:[x,C]}),[w,x,C]),D=(0,G.useMemo)((function(){var r,t,n,o;return u?null!==(r=(0,j.iN)(P))&&void 0!==r&&r.equalTo(l.xE)?e._(e._("Insufficient balance to cover for fees")):null!==I&&void 0!==I&&null!==(t=I.inputAmount[0])&&void 0!==t&&t.greaterThan(l.xE)||null!==(n=B[1])&&void 0!==n&&n.greaterThan(l.xE)?void 0!==I||w?P&&I&&x&&null!==(o=(0,j.iN)(P))&&void 0!==o&&o.lessThan(x)?e._(e._("Insufficient Balance")):"":e._(e._("No route found")):e._(e._("Enter an amount")):e._(e._("Connect Wallet"))}),[u,P,e,x,w,B,I]);return(0,G.useMemo)((function(){return{isWrap:w,error:D,trade:I,priceImpact:Z,formattedAmounts:F,parsedAmounts:B}}),[Z,w,D,I,F,B])},X=(0,G.createContext)({formattedAmounts:void 0,trade:void 0,priceImpact:void 0,error:void 0,isWrap:void 0,parsedAmounts:void 0}),R=function(){return(0,G.useContext)(X)},V=t(92088),q=t(71862),L=t(15097),U=t(40588),Q=t(53389),H=t(90573),Y=t(627),$=t(49932),z=t(85893);function K(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function J(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?K(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):K(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var ee=function(e){var r=e.onClick,t=e.spendFromWallet,n=void 0===t||t,o=(0,d.mV)().i18n,a=(0,E.T)(),u=(0,E.C)(y.gD),s=u.attemptingTxn,c=u.bentoPermit,p=R(),v=p.parsedAmounts,m=p.error,h=p.trade,g=(0,Q.sL)(),x=(0,Q.Ti)(),w=(0,Q.rO)(),b=(0,H.NF)(null===v||void 0===v?void 0:v[0]),T=(0,H.NF)(null===v||void 0===v?void 0:v[1]),O=(0,j.Ld)(b,T),_=(0,Y.DG)(),k=(0,i.Z)(_,1)[0],I=(0,G.useState)(),S=I[0],C=I[1],P=(0,G.useState)(),N=(P[0],P[1],(0,G.useMemo)((function(){if(h instanceof l.ho){var e=null===h||void 0===h?void 0:h.priceImpact;return e&&O?e.greaterThan(O)?e:O:null!==e&&void 0!==e?e:O}if(h instanceof Z.ho)return new l.gG(Math.floor(1e4*Number(h.route.priceImpact)),1e4)}),[O,h])),F=(0,G.useMemo)((function(){return(0,j.oX)(N)}),[N]),B=(0,G.useCallback)((function(){h&&N&&(0,U.ZP)(N)&&(r(h),a((0,y.rg)(J(J({},u),{},{showReview:!0}))))}),[a,r,N,h,u]),D=(0,A.C)(h)===l.G1.V2TRADE;return(0,z.jsxs)(z.Fragment,{children:[S&&(0,z.jsx)(f.Z,{variant:"sm",className:"p-4 text-center border rounded border-yellow/40 text-yellow",children:o._(o._("Something went wrong during signing of the approval. This is expected for hardware wallets, such as Trezor and Ledger. Click 'Approve BentoBox' again for approving using the fallback method"))}),(0,z.jsx)($.Z,J(J({inputAmounts:[null===v||void 0===v?void 0:v[0]],tokenApproveOn:n?D?null===x||void 0===x?void 0:x.address:null===w||void 0===w?void 0:w.address:void 0,masterContractAddress:D||null===g||void 0===g?void 0:g.address},D?{withPermit:!1}:{withPermit:!0,permit:c,onPermit:function(e){a((0,y.T1)(e))},onPermitError:function(){return C(!0)}}),{},{children:function(e){var r=e.approved,t=e.loading,n=!!m||!r||t||s||F>3&&!k,i=s?(0,z.jsx)(L.Z,{children:o._(o._("Swapping"))}):t?"":m||(F>3&&!k?o._(o._("Price Impact Too High")):F>2?o._(o._("Swap Anyway")):o._(o._("Swap")));return(0,z.jsx)("div",{className:"flex",children:(0,z.jsx)(q.ZP,{fullWidth:!0,id:"swap-button",loading:t,color:F>2&&!m?"red":"gradient",disabled:n,onClick:B,className:"rounded-2xl md:rounded",children:i})})}}))]})},re=t(68411),te=function(){var e=(0,d.mV)().i18n,r=(0,N.aQ)().chainId,t=(0,Q.lz)(),n=(0,Q.rO)(),i=(0,Q.x7)(),a=i.deposit,s=i.withdraw,c=(0,k.C)(r?l.FX[r]:void 0).rebase,p=(0,re.h7)(),v=(0,E.C)(y.gD),f=v.spendFromWallet,m=v.receiveToWallet,h=v.attemptingTxn,g=R(),x=g.parsedAmounts,w=g.error,b=function(){var n=(0,o.Z)(u().mark((function n(){var o,i,d,v,h;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t&&null!==x&&void 0!==x&&x[0]&&r&&c){n.next=2;break}return n.abrupt("return");case 2:if(!f||!m){n.next=13;break}if(null===x||void 0===x||null===(o=x[0])||void 0===o||!o.currency.isNative){n.next=9;break}return n.next=6,t.deposit({value:null===x||void 0===x?void 0:x[0].quotient.toString()});case 6:d=n.sent,n.next=12;break;case 9:return n.next=11,t.withdraw(null===x||void 0===x?void 0:x[0].quotient.toString());case 11:d=n.sent;case 12:return n.abrupt("return",p(d,{summary:null!==x&&void 0!==x&&null!==(i=x[0])&&void 0!==i&&i.currency.isNative?e._(e._("Wrap {0} {1} to {2}",{0:null===x||void 0===x?void 0:x[0].toSignificant(6),1:l.B5[r].symbol,2:l.FX[r].symbol})):e._(e._("Unwrap {0} {1} to {2}",{0:null===x||void 0===x?void 0:x[0].toSignificant(6),1:l.FX[r].symbol,2:l.B5[r].symbol}))}));case 13:if(f||!m){n.next=17;break}return n.next=16,s(l.df[r],null===x||void 0===x||null===(v=x[0])||void 0===v?void 0:v.quotient.toString().toBigNumber(0));case 16:return n.abrupt("return",n.sent);case 17:if(!f||m){n.next=21;break}return n.next=20,a(l.FX[r],c,null===x||void 0===x||null===(h=x[0])||void 0===h?void 0:h.quotient.toString().toBigNumber(0));case 20:return n.abrupt("return",n.sent);case 21:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,z.jsx)($.Z,{inputAmounts:[null===x||void 0===x?void 0:x[0]],tokenApproveOn:null===n||void 0===n?void 0:n.address,children:function(r){var t,n=r.approved,o=r.loading,i=!!w||!n||o||h,a=[null!==x&&void 0!==x&&null!==(t=x[0])&&void 0!==t&&t.currency.isNative?e._(e._("Wrap")):e._(e._("Unwrap"))];!f&&m&&(a=[e._(e._("Withdraw"))].concat((0,I.Z)(a))),f&&!m&&(a=[e._(e._("Deposit"))]),f||m||(i=!0,a=[e._(e._("Unsupported"))]);var u=h?(0,z.jsx)(L.Z,{children:a.join(" + ")}):o?"":w||a.join(" + ");return(0,z.jsx)("div",{className:"flex",children:(0,z.jsx)(q.ZP,{fullWidth:!0,id:"wrap-button",loading:o,color:"gradient",disabled:i,onClick:b,children:u})})}})},ne=t(87433),oe=t(46472),ie=t(46847),ae=t(22651),ue=t(67801),se=t(73179);function ce(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function de(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ce(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ce(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var le=function(e){var r,t=e.banners,n=M(),a=n.formattedAmounts,m=n.trade,j=n.priceImpact,O=n.isWrap,_=n.parsedAmounts,k=n.error,I=(0,A.C)(m),S=(0,d.mV)().i18n,Z=(0,T.Z)(),C=Z.currencies,P=Z.setURLCurrency,N=Z.switchCurrencies,F=(0,Y.DG)(),B=(0,i.Z)(F,1)[0],D=(0,E.T)(),W=(0,E.C)(y.gD),R=W.typedField,q=W.spendFromWallet,L=W.receiveToWallet,U=W.recipient,Q=W.attemptingTxn,H=W.showReview,$=W.error,K=W.bentoPermit,J=(0,oe.Z)(U).address,re=(0,G.useState)(),ne=re[0],ce=re[1],le=(0,G.useState)(),pe=le[0],ve=le[1],fe=(0,ie.G)(C[0],C[1]),me=(0,ue.Z)(m),he=(0,G.useState)(),ge=he[0],xe=he[1],we=I===l.G1.V2TRADE||q,be=I===l.G1.V2TRADE||L,ye=(0,G.useCallback)((0,o.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return D((0,y.rg)(de(de({},W),{},{value:"",typedField:y.GT.A}))),e.next=3,N();case 3:case"end":return e.stop()}}),e)}))),[D,N,W]),Te=(0,ae.od)(m,me,null!==J&&void 0!==J?J:void 0,null,{receiveToWallet:be,fromWallet:we,parsedAmounts:_,bentoPermit:K,resetBentoPermit:function(){return D((0,y.T1)(void 0))}}),je=Te.callback,Ae=Te.error,Oe=(0,G.useCallback)((0,o.Z)(u().mark((function e(){var r,t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(je){e.next=2;break}return e.abrupt("return");case 2:return D((0,y.jv)(!0)),r=W.value,t=W.typedField,e.prev=4,e.next=7,je();case 7:n=e.sent,ce(n),r="",t=y.GT.A,e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),xe(e.t0.message);case 16:D((0,y.rg)(de(de({},W),{},{value:r,typedField:t,attemptingTxn:!1})));case 17:case"end":return e.stop()}}),e,null,[[4,13]])}))),[je,D,W]),_e=(0,G.useCallback)((function(){D((0,y.rg)(de(de({},W),{},{showReview:!1,error:void 0}))),ce(void 0)}),[D,W]);return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsxs)(se.yz,{children:[(0,z.jsx)("div",{className:"px-2",children:(0,z.jsx)(b.Z,{inputCurrency:C[0],outputCurrency:C[1],trident:!0})}),(0,z.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,z.jsx)(V.Z,{error:R===y.GT.A&&!!k&&!!a[0],header:function(e){return(0,z.jsx)(V.Z.Header,de(de({},e),{},{id:"asset-select-trigger-".concat(y.GT.A)}))},walletToggle:function(e){return(0,z.jsx)(s.uT,{show:!m||I===l.G1.V3TRADE,enter:"transition duration-100 ease-out",enterFrom:"transform scale-95 opacity-0",enterTo:"transform scale-100 opacity-100",leave:"transition duration-100 ease-out",leaveFrom:"transform scale-100 opacity-100",leaveTo:"transform scale-95 opacity-0",children:(0,z.jsx)(V.Z.Switch,de(de({},e),{},{label:S._(S._("Pay from")),onChange:function(e){return D((0,y.h0)(e))},id:"chk-pay-from-wallet"}))})},selected:R===y.GT.A,spendFromWallet:we,currency:C[0],value:a[0],onChange:function(e){return D((0,y.rg)(de(de({},W),{},{value:e||"",typedField:y.GT.A})))},onSelect:function(e){return P(e,0)}}),(0,z.jsx)("div",{className:"z-0 flex justify-center -mt-6 -mb-6",children:(0,z.jsx)("div",{role:"button",className:"p-1.5 rounded-full bg-dark-800 border shadow-md border-dark-700 hover:border-dark-600",onClick:ye,children:(0,z.jsx)(c.Z,{width:14,className:"text-high-emphesis hover:text-white"})})}),(0,z.jsx)(V.Z,{error:R===y.GT.B&&!!k&&!!a[0],header:function(e){return(0,z.jsx)(V.Z.Header,de(de({},e),{},{id:"asset-select-trigger-".concat(y.GT.B)}))},walletToggle:function(e){return(0,z.jsx)(s.uT,{show:!m||I===l.G1.V3TRADE,enter:"transition duration-100 ease-out",enterFrom:"transform scale-95 opacity-0",enterTo:"transform scale-100 opacity-100",leave:"transition duration-100 ease-out",leaveFrom:"transform scale-100 opacity-100",leaveTo:"transform scale-95 opacity-0",children:(0,z.jsx)(V.Z.Switch,de(de({},e),{},{label:S._(S._("Receive to")),onChange:function(e){return D((0,y.v7)(e))},id:"chk-receive-to-wallet"}))})},selected:R===y.GT.B,spendFromWallet:be,currency:C[1],value:a[1],onChange:function(e){D((0,y.rg)(de(de({},W),{},{value:e||"",typedField:y.GT.A})))},onSelect:function(e){return P(e,1)},priceImpact:j,inputDisabled:!0}),(0,z.jsxs)(X.Provider,{value:(0,G.useMemo)((function(){var e,r;return{formattedAmounts:a,trade:m,priceImpact:j,error:null!==(e=null!==(r=null!==k&&void 0!==k?k:$)&&void 0!==r?r:Ae)&&void 0!==e?e:void 0,isWrap:O,parsedAmounts:_}}),[Ae,k,a,O,_,j,$,m]),children:[B&&(0,z.jsx)(v.Z,{recipient:U,action:y.He}),Boolean(m)&&(0,z.jsx)(x.Z,{inputCurrency:C[0],outputCurrency:C[1],trade:m,recipient:null!==U&&void 0!==U?U:void 0}),m&&!(null!==m&&void 0!==m&&m.route)&&(null===(r=_[0])||void 0===r?void 0:r.greaterThan(l.xE))&&(0,z.jsxs)(f.Z,{variant:"xs",className:"py-2 text-center",children:[S._(S._("Insufficient liquidity for this trade."))," "]}),O?(0,z.jsx)(te,{}):(0,z.jsx)(ee,{onClick:function(e){return ve(e)},spendFromWallet:we})]}),B&&ge?(0,z.jsx)(g.Z,{error:ge}):null,fe?(0,z.jsx)(w.Z,{currencies:[C[0],C[1]]}):null]}),(0,z.jsx)(h.Z,{isOpen:H,trade:m,originalTrade:pe,onAcceptChanges:function(){return ve(m)},attemptingTxn:Q,txHash:ne,recipient:U,allowedSlippage:me,onConfirm:Oe,swapErrorMessage:$,onDismiss:_e})]}),(0,z.jsxs)(f.Z,{variant:"xs",className:"px-10 mt-5 text-center text-low-emphesis",children:[(0,z.jsx)(f.Z,{variant:"xs",weight:700,component:"span",children:"Tip"}),": ",S._(S._("BentoBox to BentoBox swaps are up to 50% cheaper than normal swaps"))]}),(0,z.jsx)(p.Z,{banners:t})]})};le.Layout=(0,se.Pf)("swap-page"),le.Guard=(0,ne.Z)(m.L.TRIDENT);var pe=le},52358:function(e,r,t){"use strict";var n=t(67294);const o=n.forwardRef((function(e,r){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:r},e),n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 14l-7 7m0 0l-7-7m7 7V3"}))}));r.Z=o}}]);