(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1250],{45486:function(e,t,n){"use strict";var r=n(59499),i=n(78268),o=n(85893);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.Z=function(e){return(0,o.jsx)(i.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({className:"cursor-pointer"},e))}},3382:function(e,t,n){"use strict";var r=n(31969),i=n(76866),o=(n(67294),n(85893));t.Z=function(e){var t=e.children,n=e.className;return(0,i.Z)()?(0,o.jsxs)("div",{className:(0,r.AK)(n,"relative w-full max-w-2xl"),children:[(0,o.jsx)("div",{className:(0,r.AK)("from-pink/5 to-blue/5 fixed inset-0 bg-gradient-radial z-0 pointer-events-none")}),(0,o.jsx)("div",{className:"relative filter z-10",children:t})]}):(0,o.jsx)(o.Fragment,{children:t})}},23987:function(e,t,n){"use strict";var r=n(59499),i=n(4730),o=n(31969),s=n(67294),a=n(85893),l=["value","onUserInput","placeholder","className","align","fontSize"];function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=RegExp("^\\d*$"),v=s.memo((function(e){var t=e.value,n=e.onUserInput,r=e.placeholder,s=e.className,c=e.align,v=e.fontSize,f=(0,i.Z)(e,l);return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("input",d({value:t,onChange:function(e){var t;(""===(t=e.target.value.replace(/,/g,".").replace(/%/g,""))||u.test((0,o.hr)(t)))&&Number(t)<=100&&n(t)},inputMode:"decimal",title:"Token Amount",autoComplete:"off",autoCorrect:"off",type:"text",pattern:"^[0-9]*$",placeholder:r||"100%",maxLength:3,className:(0,o.AK)("right"===c&&"text-right","relative font-bold outline-none border-none flex-auto overflow-hidden overflow-ellipsis placeholder-low-emphesis focus:placeholder-primary",s),style:{fontSize:v}},f))})}));v.displayName="PercentInput",t.Z=v},39281:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(59499),i=n(4730),o=n(31969),s=n(67294),a=n(85893),l=["value","onUserInput","placeholder","className","align","fontSize"];function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=s.memo((function(e){var t=e.value,n=e.onUserInput,r=(e.placeholder,e.className),s=void 0===r?"flex w-full h-full p-3 font-bold rounded overflow-ellipsis recipient-address-input bg-dark-900 placeholder-low-emphesis":r,c=e.align,u=e.fontSize,v=void 0===u?"24px":u,f=(0,i.Z)(e,l);return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("input",d({value:t,onChange:function(e){n(e.target.value.replace(/\s+/g,""))},inputMode:"text",title:"Wallet Address or ENS name",autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",placeholder:"Wallet Address or ENS name",pattern:"^(0x[a-fA-F0-9]{40})$",type:"text",className:(0,o.AK)("right"===c&&"text-right","font-medium bg-transparent whitespace-nowrap overflow-ellipsis flex-auto",s),style:{fontSize:v}},f))})}));u.displayName="AddressInput";var v=u,f=n(48410),p={Address:v,Percent:n(23987).Z,Numeric:f.Z}},573:function(e,t,n){"use strict";var r=n(56727),i=n(31969),o=n(85893),s={default:function(e){return"bg-high-emphesis"},gradient:function(e){return e?"bg-gradient-to-r from-blue to-pink":"bg-dark-700"}},a={xs:20,sm:28,md:36},l={xs:53,sm:57,md:65};t.Z=function(e){var t=e.size,n=void 0===t?"md":t,c=e.checked,d=e.onChange,u=e.checkedIcon,v=void 0===u?"":u,f=e.uncheckedIcon,p=void 0===f?"":f,h=e.color,m=void 0===h?"default":h,g=e.id,x=void 0===g?"":g,b=a[n],y=l[n];return(0,o.jsx)(r.rs,{checked:c,onChange:d,className:(0,i.AK)("flex items-center bg-dark-800 border border-dark-700 relative inline-flex flex-shrink-0 rounded-full cursor-pointer ease-in-out duration-200 ".concat(x)),style:{height:b,width:y},children:(0,o.jsx)("span",{id:x,className:(0,i.AK)(c?"translate-x-[30px]":"translate-x-[2px]",s[m](c),"transition-colors transition-transform pointer-events-none p-1 rounded-full shadow-md ease-in-out duration-200 inline-flex items-center justify-center"),style:{height:b-6,width:b-6,transform:"translate(".concat(c?30:2,", 0)")},children:c?v:p})})}},94633:function(e,t,n){"use strict";n.d(t,{Gj:function(){return d},SA:function(){return a},ZP:function(){return l},or:function(){return c}});var r=n(31518),i=n(84329),o=n(12614),s=n(67294);function a(e){var t=(0,o.aQ)(),n=t.chainId,a=n&&r.qY[n]?r.ih.fromRawAmount(r.qY[n],0).currency:void 0,l=(0,i.k$)({chainId:n}),c=l.data,d=(0,i.rU)({chainId:n,variables:{where:{id_in:null===e||void 0===e?void 0:e.map((function(e){return e.wrapped.address.toLowerCase()}))}},shouldFetch:e&&(null===e||void 0===e?void 0:e.length)>0}),u=(0,i.EO)({chainId:n,variables:{where:{id_in:null===e||void 0===e?void 0:e.map((function(e){return e.wrapped.address.toLowerCase()}))}},shouldFetch:e&&(null===e||void 0===e?void 0:e.length)>0}),v=u.data;return(0,s.useMemo)((function(){if(e&&0!==e.length&&a&&(d||v)){var t={};return e.map((function(e){var n=void 0,i=null===d||void 0===d?void 0:d.find((function(t){return t.id===e.wrapped.address.toLowerCase()})),o=null===v||void 0===v?void 0:v.find((function(t){return t.id===e.wrapped.address.toLowerCase()}));if(null!==e&&void 0!==e&&e.wrapped.equals(a))t[e.wrapped.address]=new r.tA(a,a,"1","1");else if(i&&o?n=i.liquidity>o.kpi.liquidity?c*i.derivedETH:o.price.derivedUSD:c&&i?n=c*i.derivedETH:o&&(n=o.price.derivedUSD),void 0!==n&&0!==n){var s,l,u,f=Math.pow(10,null!==(s=null===(l=String(n).split("."))||void 0===l||null===(u=l[1])||void 0===u?void 0:u.length)&&void 0!==s?s:0),p=Math.floor(n*f);try{t[e.wrapped.address]=new r.tA(e,a,f*Math.pow(10,e.decimals)/Math.pow(10,a.decimals),p)}catch(h){}}})),t}}),[e,a,d,v,c])}function l(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=a(e?[e]:void 0,t);return n?Object.values(n)[0]:void 0}function c(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=l(null===e||void 0===e?void 0:e.currency,t);return(0,s.useMemo)((function(){if(!n||!e)return null;try{return n.quote(e)}catch(t){return null}}),[e,n])}function d(e){var t=l(null===e||void 0===e?void 0:e.currency);return(0,s.useMemo)((function(){if(!t||!e)return{value:void 0,loading:!1};try{return{value:t.quote(e),loading:!1}}catch(n){return{value:void 0,loading:!1}}}),[e,t])}},73179:function(e,t,n){"use strict";n.d(t,{Pf:function(){return v},yz:function(){return d}});var r=n(59499),i=n(72457),o=n(3382),s=n(31969),a=(n(67294),n(76138)),l=n(85893);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var d=function(e){var t=e.children,n=e.className;return(0,l.jsx)("div",{className:(0,s.AK)("flex flex-col gap-3 p-2 md:p-4 pt-4 rounded-[24px] bg-dark-800 shadow-md shadow-dark-1000",n),children:t})},u=function(e){var t=e.children,n=e.id;return(0,l.jsx)(a.Z,{children:(0,l.jsx)(i.Z,{id:n,className:"py-4 md:py-12 lg:py-[120px] px-2 mx-auto",maxWidth:"md",children:(0,l.jsx)(o.Z,{children:t})})})},v=function(e){return function(t){return(0,l.jsx)(u,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({id:e},t))}}},79526:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return K}});var r=n(27812),i=n(59499),o=n(50029),s=n(16835),a=n(87794),l=n.n(a),c=n(2593),d=n(93973),u=n(49501),v=n(31518),f=n(71862),p=n(41626),h=n(39281),m=n(27801),g=n(94492),x=n(56785),b=n(63192),y=n(31969),j=n(92659),w=n(62483),N=n(27262),C=n(54907),O=n(67294);var R=n(44232),E=n(66367),_=n(73179),P=n(23816),k=n(12614),U=n(53344),S=n(68211),Z=n(1025),I=n(16339),A=n(37643),Y=n(68411),D=n(41664),T=n.n(D),q=n(11163),L=n(2962),B=n(61896),z=n(85893),F=new v.gG(5,100);function K(){var e,t,n,a,D,K,M,H,Q=(0,u.mV)().i18n,W=(0,q.useRouter)(),X=W.query.tokens||[void 0,void 0],V=(0,s.Z)(X,2),G=V[0],$=V[1],J=null!==(e=(0,w.U8)(G))&&void 0!==e?e:void 0,ee=null!==(t=(0,w.U8)($))&&void 0!==t?t:void 0,te=(0,k.aQ)(),ne=te.account,re=te.chainId,ie=te.library,oe=(0,O.useMemo)((function(){return[null===J||void 0===J?void 0:J.wrapped,null===ee||void 0===ee?void 0:ee.wrapped]}),[J,ee]),se=oe[0],ae=oe[1],le=(0,Z.Vx)(null!==J&&void 0!==J?J:void 0,null!==ee&&void 0!==ee?ee:void 0),ce=le.pair,de=le.parsedAmounts,ue=le.error,ve=(0,Z.GF)().onUserInput,fe=!ue,pe=(0,O.useState)(!1),he=pe[0],me=pe[1],ge=(0,O.useState)(!1),xe=ge[0],be=ge[1],ye=(0,O.useState)(""),je=ye[0],we=ye[1],Ne=(0,E.Z)(),Ce=(0,I.C)((0,A.yr)(F)),Oe=(0,C.t0)(null===ce||void 0===ce||null===(n=ce.liquidityToken)||void 0===n?void 0:n.address),Re=(0,C.Ti)(),Ee=(0,R.pO)(de[S.g.LIQUIDITY],null===Re||void 0===Re?void 0:Re.address),_e=Ee.gatherPermitSignature,Pe=Ee.signatureData,ke=(0,N.qL)(de[S.g.LIQUIDITY],null===Re||void 0===Re?void 0:Re.address),Ue=(0,s.Z)(ke,2),Se=Ue[0],Ze=Ue[1];function Ie(){return(Ie=(0,o.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Oe&&ce&&ie&&Ne){e.next=2;break}throw new Error("missing dependencies");case 2:if(de[S.g.LIQUIDITY]){e.next=5;break}throw new Error("missing liquidity amount");case 5:if(re===v.a_.HARMONY||!_e){e.next=18;break}return e.prev=6,e.next=9,_e();case 9:e.next=16;break;case 11:if(e.prev=11,e.t0=e.catch(6),(null===e.t0||void 0===e.t0?void 0:e.t0.code)===U.PM){e.next=16;break}return e.next=16,Ze();case 16:e.next=20;break;case 18:return e.next=20,Ze();case 20:case"end":return e.stop()}}),e,null,[[6,11]])})))).apply(this,arguments)}var Ae=(0,O.useCallback)((function(e,t){return ve(e,t)}),[ve]),Ye=(0,Y.h7)();function De(){return De=(0,o.Z)(l().mark((function e(){var t,n,o,s,a,d,u,v,f,p,h,m,g;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(re&&ie&&ne&&Ne&&W){e.next=2;break}throw new Error("missing dependencies");case 2:if(n=de[S.g.CURRENCY_A],o=de[S.g.CURRENCY_B],n&&o){e.next=5;break}throw new Error("missing currency amounts");case 5:if(t={},(0,i.Z)(t,S.g.CURRENCY_A,(0,j.uc)(n,Ce)[0]),(0,i.Z)(t,S.g.CURRENCY_B,(0,j.uc)(o,Ce)[0]),s=t,J&&ee){e.next=8;break}throw new Error("missing tokens");case 8:if(a=de[S.g.LIQUIDITY]){e.next=11;break}throw new Error("missing liquidity amount");case 11:if(d=ee.isNative,u=J.isNative||d,se&&ae){e.next=15;break}throw new Error("could not wrap");case 15:if(Se!==N.UK.APPROVED){e.next=19;break}u?(v=["removeLiquidityETH","removeLiquidityETHSupportingFeeOnTransferTokens"],f=[d?se.address:ae.address,a.quotient.toString(),s[d?S.g.CURRENCY_A:S.g.CURRENCY_B].toString(),s[d?S.g.CURRENCY_B:S.g.CURRENCY_A].toString(),ne,Ne.toHexString()]):(v=["removeLiquidity"],f=[se.address,ae.address,a.quotient.toString(),s[S.g.CURRENCY_A].toString(),s[S.g.CURRENCY_B].toString(),ne,Ne.toHexString()]),e.next=24;break;case 19:if(null===Pe){e.next=23;break}u?(v=["removeLiquidityETHWithPermit","removeLiquidityETHWithPermitSupportingFeeOnTransferTokens"],f=[d?se.address:ae.address,a.quotient.toString(),s[d?S.g.CURRENCY_A:S.g.CURRENCY_B].toString(),s[d?S.g.CURRENCY_B:S.g.CURRENCY_A].toString(),ne,Pe.deadline,!1,Pe.v,Pe.r,Pe.s]):(v=["removeLiquidityWithPermit"],f=[se.address,ae.address,a.quotient.toString(),s[S.g.CURRENCY_A].toString(),s[S.g.CURRENCY_B].toString(),ne,Pe.deadline,!1,Pe.v,Pe.r,Pe.s]),e.next=24;break;case 23:throw new Error("Attempting to confirm without approval or a signature. Please contact support.");case 24:return e.next=26,Promise.all(v.map((function(e){var t;return(t=Re.estimateGas)[e].apply(t,(0,r.Z)(f)).then(j.yC).catch((function(t){console.error("estimateGas failed",e,f,t)}))})));case 26:if(p=e.sent,h=p.findIndex((function(e){return c.O$.isBigNumber(e)})),-1!==h){e.next=32;break}console.error("This transaction would fail. Please contact support."),e.next=37;break;case 32:return m=v[h],g=p[h],be(!0),e.next=37,Re[m].apply(Re,(0,r.Z)(f).concat([{gasLimit:g}])).then((function(e){var t,n;be(!1),Ye(e,{summary:Q._("Remove {0} {1} and {2} {3}",{0:null===(t=de[S.g.CURRENCY_A])||void 0===t?void 0:t.toSignificant(3),1:null===J||void 0===J?void 0:J.symbol,2:null===(n=de[S.g.CURRENCY_B])||void 0===n?void 0:n.toSignificant(3),3:null===ee||void 0===ee?void 0:ee.symbol})}),we(e.hash),gtag("event","Remove",{event_category:"Routing",event_label:[null===J||void 0===J?void 0:J.symbol,null===ee||void 0===ee?void 0:ee.symbol].join("/")})})).catch((function(e){be(!1),console.log(e)}));case 37:case"end":return e.stop()}}),e)}))),De.apply(this,arguments)}var Te=(0,z.jsxs)("div",{className:"grid gap-4 pt-3 pb-4",children:[(0,z.jsxs)("div",{className:"grid gap-2",children:[(0,z.jsxs)("div",{className:"flex items-center justify-between",children:[(0,z.jsxs)("div",{className:"flex items-center gap-3",children:[(0,z.jsx)(p.X,{currency:J,size:48}),(0,z.jsx)("div",{className:"text-2xl font-bold text-high-emphesis",children:null===(a=de[S.g.CURRENCY_A])||void 0===a?void 0:a.toSignificant(6)})]}),(0,z.jsx)("div",{className:"ml-3 text-2xl font-medium text-high-emphesis",children:null===J||void 0===J?void 0:J.symbol})]}),(0,z.jsx)("div",{className:"ml-3 mr-3 min-w-[24px]",children:(0,z.jsx)(B.Z,{size:24})}),(0,z.jsxs)("div",{className:"flex items-center justify-between",children:[(0,z.jsxs)("div",{className:"flex items-center gap-3",children:[(0,z.jsx)(p.X,{currency:ee,size:48}),(0,z.jsx)("div",{className:"text-2xl font-bold text-high-emphesis",children:null===(D=de[S.g.CURRENCY_B])||void 0===D?void 0:D.toSignificant(6)})]}),(0,z.jsx)("div",{className:"ml-3 text-2xl font-medium text-high-emphesis",children:null===ee||void 0===ee?void 0:ee.symbol})]})]}),(0,z.jsx)("div",{className:"justify-start text-sm text-secondary",children:Q._("Output is estimated. If the price changes by more than {0}% your transaction will revert.",{0:Ce.toSignificant(4)})})]}),qe=(0,z.jsxs)("div",{className:"p-6 mt-0 -m-6 bg-dark-800",children:[ce&&(0,z.jsxs)(z.Fragment,{children:[(0,z.jsxs)("div",{className:"grid gap-1",children:[(0,z.jsxs)("div",{className:"flex items-center justify-between",children:[(0,z.jsx)("div",{className:"text-sm text-high-emphesis",children:Q._(Q._("Rates"))}),(0,z.jsx)("div",{className:"text-sm font-bold justify-center items-center flex right-align pl-1.5 text-high-emphesis",children:"1 ".concat(null===J||void 0===J?void 0:J.symbol," = ").concat(se?ce.priceOf(se).toSignificant(6):"-"," ").concat(null===ee||void 0===ee?void 0:ee.symbol)})]}),(0,z.jsx)("div",{className:"flex items-center justify-end",children:(0,z.jsx)("div",{className:"text-sm font-bold justify-center items-center flex right-align pl-1.5 text-high-emphesis",children:"1 ".concat(null===ee||void 0===ee?void 0:ee.symbol," = ").concat(ae?ce.priceOf(ae).toSignificant(6):"-"," ").concat(null===J||void 0===J?void 0:J.symbol)})})]}),(0,z.jsx)("div",{className:"h-px my-6 bg-gray-700"})]}),(0,z.jsx)("div",{className:"grid gap-1 pb-6",children:(0,z.jsxs)("div",{className:"flex items-center justify-between",children:[(0,z.jsx)("div",{className:"text-sm text-secondary",children:Q._(Q._("{0}/{1} Burned",{0:null===J||void 0===J?void 0:J.symbol,1:null===ee||void 0===ee?void 0:ee.symbol}))}),(0,z.jsx)("div",{className:"text-sm font-bold justify-center items-center flex right-align pl-1.5 text-high-emphasis",children:null===(K=de[S.g.LIQUIDITY])||void 0===K?void 0:K.toSignificant(6)})]})}),(0,z.jsx)(f.ZP,{color:"gradient",size:"lg",disabled:!(Se===N.UK.APPROVED||null!==Pe),onClick:function(){return De.apply(this,arguments)},children:Q._(Q._("Confirm"))})]}),Le=Q._(Q._("Removing {0} {1} and {2} {3}",{0:null===(M=de[S.g.CURRENCY_A])||void 0===M?void 0:M.toSignificant(6),1:null===J||void 0===J?void 0:J.symbol,2:null===(H=de[S.g.CURRENCY_B])||void 0===H?void 0:H.toSignificant(6),3:null===ee||void 0===ee?void 0:ee.symbol})),Be=(0,O.useCallback)((function(e){Ae(S.g.LIQUIDITY_PERCENT,e)}),[Ae]),ze=(null===J||void 0===J?void 0:J.isNative)||(null===ee||void 0===ee?void 0:ee.isNative),Fe=Boolean(re&&v.FX[re]&&((null===J||void 0===J?void 0:J.equals(v.FX[re]))||(null===ee||void 0===ee?void 0:ee.equals(v.FX[re])))),Ke=(0,O.useCallback)((function(){me(!1),je&&Ae(S.g.LIQUIDITY_PERCENT,"0"),we("")}),[Ae,je]),Me=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100,r=(0,O.useState)((function(){return e})),i=r[0],o=r[1],s=(0,O.useRef)(),a=(0,O.useCallback)((function(e){o(e),s.current&&clearTimeout(s.current),s.current=setTimeout((function(){t(e),s.current=void 0}),n)}),[n,t]);return(0,O.useEffect)((function(){s.current&&(clearTimeout(s.current),s.current=void 0),o(e)}),[e]),[i,a]}(de[S.g.LIQUIDITY_PERCENT].toFixed(0),Be),He=(0,s.Z)(Me,2),Qe=He[0],We=He[1],Xe=+Qe>100||+Qe<0,Ve=[null!==J&&void 0!==J&&J.isNative?(0,y.kU)(de[S.g.CURRENCY_A]):de[S.g.CURRENCY_A],null!==ee&&void 0!==ee&&ee.isNative?(0,y.kU)(de[S.g.CURRENCY_B]):de[S.g.CURRENCY_B]];return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(L.PB,{title:"Remove Liquidity"}),(0,z.jsx)(P.ZP,{isOpen:he,onDismiss:Ke,attemptingTxn:xe,hash:je||"",content:(0,z.jsx)(P.pM,{title:Q._(Q._("You will receive")),onDismiss:Ke,topContent:Te,bottomContent:qe}),pendingText:Le}),(0,z.jsxs)(_.yz,{children:[(0,z.jsxs)("div",{className:"grid items-center grid-cols-3",children:[(0,z.jsx)(d.Z,{width:24,height:24,className:"cursor-pointer text-high-emphesis hover:text-white focus:text-white",onClick:function(){return W.push("/pool")}}),(0,z.jsx)(x.Z,{weight:700,className:"text-center whitespace-nowrap text-high-emphesis",children:Q._(Q._("Remove Liquidity"))}),(0,z.jsx)(g.Z,{className:"!w-6 !h-6 justify-self-end"})]}),(0,z.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,z.jsxs)("div",{className:(0,y.AK)(Xe?"border-red/40 hover:border-red":"border-dark-700 hover:border-dark-600","flex flex-col gap-1 bg-dark-900 px-4 py-2 rounded border"),children:[(0,z.jsx)(x.Z,{variant:"sm",weight:700,children:Q._(Q._("Percent to remove"))}),(0,z.jsx)("div",{className:"flex items-center gap-1",children:(0,z.jsx)(x.Z,{weight:700,variant:"lg",className:"relative flex items-baseline flex-grow gap-3 overflow-hidden text-high-emphesis",children:(0,z.jsx)(h.Z.Percent,{className:"leading-[32px] focus:placeholder:text-low-emphesis flex-grow w-full text-left bg-transparent text-inherit disabled:cursor-not-allowed",value:Qe,onUserInput:We,placeholder:"0%",id:"liquidity-percent"})})})]}),(0,z.jsxs)("div",{className:"flex-col overflow-hidden border rounded bg-dark-900 border-dark-700",children:[(0,z.jsxs)("div",{className:"flex items-center justify-between px-4 py-2 overflow-hidden bg-dark-900",children:[(0,z.jsx)(x.Z,{variant:"sm",weight:700,className:"text-high-emphesis",children:Q._(Q._("You'll receive"))}),re&&(Fe||ze)&&(0,z.jsx)(x.Z,{variant:"xs",weight:700,children:ze?(0,z.jsx)(T(),{href:"/remove/".concat(null!==J&&void 0!==J&&J.isNative?v.df[re]:G,"/").concat(null!==ee&&void 0!==ee&&ee.isNative?v.df[re]:$),children:(0,z.jsxs)("a",{className:"text-baseline text-blue opacity-80 hover:opacity-100 focus:opacity-100 whitespace-nowrap",children:["Receive W",v.B5[re].symbol," instead"]})}):Fe&&(0,z.jsx)(T(),{href:"/remove/".concat(null!==J&&void 0!==J&&J.equals(v.FX[re])?"ETH":G,"/").concat(null!==ee&&void 0!==ee&&ee.equals(v.FX[re])?"ETH":$),children:(0,z.jsxs)("a",{className:"text-baseline text-blue opacity-80 hover:opacity-100 whitespace-nowrap",children:["Receive ",v.B5[re].symbol," instead"]})})})]}),Ve.map((function(e,t){return(0,z.jsx)(m.Z.CurrencyAmountItem,{amount:e,size:"xs",hideIfZero:!1},t)}))]}),ne?(0,z.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,z.jsx)(f.ZP,{fullWidth:!0,loading:Se===N.UK.PENDING,onClick:function(){return Ie.apply(this,arguments)},disabled:Se!==N.UK.NOT_APPROVED||null!==Pe,children:Se===N.UK.APPROVED||null!==Pe?Q._(Q._("Approved")):Q._(Q._("Approve"))}),(0,z.jsx)(f.ZP,{fullWidth:!0,color:!fe&&de[S.g.CURRENCY_A]&&de[S.g.CURRENCY_B]?"red":"blue",onClick:function(){me(!0)},disabled:!fe||null===Pe&&Se!==N.UK.APPROVED,children:ue||Q._(Q._("Confirm Withdrawal"))})]}):(0,z.jsx)(b.Z,{size:"lg",color:"blue",className:"w-full"})]})]})]})}K.Layout=(0,_.Pf)("remove-page")},49060:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/legacy/remove/[[...tokens]]",function(){return n(79526)}])}},function(e){e.O(0,[8306,8529,8897,129,2168,7230,7032,6688,3935,6345,9774,2888,179],(function(){return t=49060,e(e.s=t);var t}));var t=e.O();_N_E=t}]);