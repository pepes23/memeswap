"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8682],{8682:function(t,e,r){r.d(e,{lZ:function(){return T},tT:function(){return q},Hj:function(){return F},LQ:function(){return O},q7:function(){return Z}});var a=r(27812),i=r(16835),n=r(84243),s=r(19485),o=r(9279),l=r(31518),u=r(10552),c=r(56279),d=r(38239),A=r(31969),h=r(53389),g=r(62483),v=r(61647),f=r(94633),Q=r(2886),m=r(84329),p=r(12614),x=r(67294),B=r(92777),y=r(82262),E=r(59499),b=r(69807),I=r(70867);function w(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function k(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?w(Object(r),!0).forEach((function(e){(0,E.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var R=function(){function t(e){var r=e.accrueInfo,a=e.collateral,i=e.asset,n=e.collateralPrice,s=e.assetPrice,o=e.oracle,l=e.totalCollateralShare,u=e.totalAsset,c=e.totalBorrow,d=e.exchangeRate,A=e.oracleExchangeRate,h=e.spotExchangeRate,g=e.userCollateralShare,v=e.userAssetFraction,f=e.userBorrowPart;(0,B.Z)(this,t),(0,E.Z)(this,"address",void 0),(0,E.Z)(this,"accrueInfo",void 0),(0,E.Z)(this,"collateral",void 0),(0,E.Z)(this,"asset",void 0),(0,E.Z)(this,"collateralPrice",void 0),(0,E.Z)(this,"assetPrice",void 0),(0,E.Z)(this,"oracle",void 0),(0,E.Z)(this,"totalCollateralShare",void 0),(0,E.Z)(this,"totalAsset",void 0),(0,E.Z)(this,"totalBorrow",void 0),(0,E.Z)(this,"exchangeRate",void 0),(0,E.Z)(this,"oracleExchangeRate",void 0),(0,E.Z)(this,"spotExchangeRate",void 0),(0,E.Z)(this,"userCollateralShare",void 0),(0,E.Z)(this,"userAssetFraction",void 0),(0,E.Z)(this,"userBorrowPart",void 0),this.address=t.getAddress(a.token,i.token,o.address,o.data),this.accrueInfo=r,this.collateral=a,this.asset=i,this.collateralPrice=n,this.assetPrice=s,this.oracle=o,this.totalCollateralShare=l,this.totalAsset=u,this.totalBorrow=c,this.exchangeRate=d,this.oracleExchangeRate=A,this.spotExchangeRate=h,this.userCollateralShare=g,this.userAssetFraction=v,this.userBorrowPart=f}return(0,y.Z)(t,[{key:"elapsedSeconds",get:function(){var t=l.QA.divide(l.QA.BigInt(Date.now()),l.QA.BigInt(1e3));return l.QA.subtract(t,this.accrueInfo.lastAccrued)}},{key:"interestPerYear",get:function(){return l.QA.multiply(this.accrueInfo.interestPerSecond,l.QA.BigInt(31536e3))}},{key:"currentInterestPerYear",get:function(){return(0,I.FO)(this,this.interestPerYear)}},{key:"totalCollateralAmount",get:function(){return(0,b.s)(this.collateral,this.totalCollateralShare)}},{key:"totalAssetAmount",get:function(){return(0,b.s)(this.asset,this.totalAsset.elastic)}},{key:"totalAssetAmountUSD",get:function(){var t;return null===(t=this.assetPrice)||void 0===t?void 0:t.quote(l.ih.fromRawAmount(this.asset.token,this.totalAssetAmount))}},{key:"currentBorrowAmount",get:function(){return(0,I.Mu)(this,this.totalBorrow.elastic,!0)}},{key:"currentBorrowAmountUSD",get:function(){var t;return null===(t=this.assetPrice)||void 0===t?void 0:t.quote(l.ih.fromRawAmount(this.asset.token,this.currentBorrowAmount))}},{key:"currentAllAssets",get:function(){return l.QA.add(this.totalAssetAmount,this.currentBorrowAmount)}},{key:"currentAllAssetsUSD",get:function(){var t;return null===(t=this.assetPrice)||void 0===t?void 0:t.quote(l.ih.fromRawAmount(this.asset.token,this.currentAllAssets))}},{key:"currentAllAssetShares",get:function(){return(0,b.T)(this.asset,this.currentAllAssets)}},{key:"currentTotalAsset",get:function(){return function(t){var e=l.QA.divide(l.QA.multiply(l.QA.multiply(t.totalBorrow.elastic,t.accrueInfo.interestPerSecond),l.QA.add(t.elapsedSeconds,l.QA.BigInt(3600))),l.QA.BigInt(1e18)),r=l.QA.divide(l.QA.multiply(e,I.rO),I.LY),a=l.QA.greaterThan(t.currentAllAssets,l.xE)?l.QA.divide(l.QA.multiply(r,t.totalAsset.base),t.currentAllAssets):l.xE;return{elastic:t.totalAsset.elastic,base:l.QA.add(t.totalAsset.base,a)}}(this)}},{key:"maxAssetAvailable",get:function(){return(0,l.LT)(l.QA.greaterThan(this.currentAllAssetShares,l.xE)?l.QA.divide(l.QA.multiply(this.totalAsset.elastic,this.currentAllAssets),this.currentAllAssetShares):l.xE,(0,b.s)(this.asset,(0,l.Nt)(this.currentTotalAsset,l.QA.subtract(this.totalAsset.base,l.QA.BigInt(1e3)),!1)))}},{key:"maxAssetAvailableFraction",get:function(){return l.QA.equal(this.currentAllAssets,l.xE)?l.xE:l.QA.divide(l.QA.multiply(this.maxAssetAvailable,this.currentTotalAsset.base),this.currentAllAssets)}},{key:"minimumExchangeRate",get:function(){return(0,l.LT)(this.exchangeRate,this.spotExchangeRate,this.oracleExchangeRate)}},{key:"maximumExchangeRate",get:function(){return(0,l.gW)(this.exchangeRate,this.spotExchangeRate,this.oracleExchangeRate)}},{key:"marketHealth",get:function(){return l.QA.equal(this.currentBorrowAmount,l.xE)||l.QA.equal(this.maximumExchangeRate,l.xE)?l.xE:l.QA.divide(l.QA.multiply(l.QA.divide(l.QA.multiply(this.totalCollateralAmount,l.QA.BigInt(1e18)),this.maximumExchangeRate),l.QA.BigInt(1e18)),this.currentBorrowAmount)}},{key:"utilization",get:function(){return l.QA.equal(this.currentAllAssets,l.xE)?l.xE:l.QA.divide(l.QA.multiply(l.QA.BigInt(1e18),this.currentBorrowAmount),this.currentAllAssets)}},{key:"supplyAPR",get:function(){return(0,I.Ym)(l.QA.divide(l.QA.multiply(this.interestPerYear,this.utilization),l.QA.BigInt(1e18)))}},{key:"currentSupplyAPR",get:function(){return(0,I.Ym)(l.QA.divide(l.QA.multiply(this.currentInterestPerYear,this.utilization),l.QA.BigInt(1e18)))}},{key:"userCollateralAmount",get:function(){return(0,b.s)(this.collateral,this.userCollateralShare)}},{key:"currentUserAssetAmount",get:function(){return l.QA.equal(this.totalAsset.base,l.xE)?l.xE:l.QA.divide(l.QA.multiply(this.userAssetFraction,this.currentAllAssets),this.totalAsset.base)}},{key:"currentUserBorrowAmount",get:function(){return l.QA.equal(this.totalBorrow.base,l.xE)?l.xE:l.QA.divide(l.QA.multiply(this.userBorrowPart,this.currentBorrowAmount),this.totalBorrow.base)}},{key:"currentUserLentAmount",get:function(){return l.QA.equal(this.totalAsset.base,l.xE)?l.xE:l.QA.divide(l.QA.multiply(this.userAssetFraction,this.currentBorrowAmount),this.totalAsset.base)}},{key:"feesEarned",get:function(){return l.QA.equal(this.totalAsset.base,l.xE)?l.xE:l.QA.divide(l.QA.multiply(this.accrueInfo.feesEarnedFraction,this.currentAllAssets),this.totalAsset.base)}},{key:"maxBorrowable",get:function(){var t={oracle:l.QA.greaterThan(this.oracleExchangeRate,l.xE)?l.QA.divide(l.QA.multiply(this.userCollateralAmount,l.QA.multiply(l.QA.BigInt(1e16),l.QA.BigInt(75))),this.oracleExchangeRate):l.xE,spot:l.QA.greaterThan(this.spotExchangeRate,l.xE)?l.QA.divide(l.QA.multiply(this.userCollateralAmount,l.QA.multiply(l.QA.BigInt(1e16),l.QA.BigInt(75))),this.spotExchangeRate):l.xE,stored:l.QA.greaterThan(this.exchangeRate,l.xE)?l.QA.divide(l.QA.multiply(this.userCollateralAmount,l.QA.multiply(l.QA.BigInt(1e16),l.QA.BigInt(75))),this.exchangeRate):l.xE},e=l.LT.apply(void 0,(0,a.Z)(Object.values(t))),r=l.QA.subtract(l.QA.divide(l.QA.multiply(e,l.QA.BigInt(95)),l.QA.BigInt(100)),this.currentUserBorrowAmount),i=(0,l.LT)(r,this.maxAssetAvailable);return k(k({},t),{},{minimum:e,safe:r,possible:i})}},{key:"simulatedMaxBorrowable",value:function(t,e){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i={oracle:l.QA.greaterThan(this.oracleExchangeRate,l.xE)?l.QA.divide(l.QA.multiply(e,l.QA.multiply(l.QA.BigInt(1e16),l.QA.BigInt(75))),this.oracleExchangeRate):l.xE,spot:l.QA.greaterThan(this.spotExchangeRate,l.xE)?l.QA.divide(l.QA.multiply(e,l.QA.multiply(l.QA.BigInt(1e16),l.QA.BigInt(75))),this.spotExchangeRate):l.xE,stored:l.QA.greaterThan(this.exchangeRate,l.xE)?l.QA.divide(l.QA.multiply(e,l.QA.multiply(l.QA.BigInt(1e16),l.QA.BigInt(75))),r?this.oracleExchangeRate:this.exchangeRate):l.xE},n=l.LT.apply(void 0,(0,a.Z)(Object.values(i))),s=l.QA.subtract(l.QA.divide(l.QA.multiply(n,l.QA.BigInt(95)),l.QA.BigInt(100)),this.currentUserBorrowAmount),o=(0,l.LT)(s,this.maxAssetAvailable);return k(k({},i),{},{minimum:n,safe:s,possible:o})}},{key:"health",get:function(){return l.QA.equal(this.maxBorrowable.minimum,l.xE)?l.xE:l.QA.divide(l.QA.multiply(this.currentUserBorrowAmount,l.QA.BigInt(1e18)),this.maxBorrowable.minimum)}},{key:"simulatedHealth",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l.QA.BigInt(0),e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l.QA.BigInt(0),r=this.simulatedMaxBorrowable(t,e),a=r.minimum;return l.QA.equal(a,l.xE)?l.xE:l.QA.divide(l.QA.multiply(t,l.QA.BigInt(1e18)),a)}}],[{key:"getAddress",value:function(t,e,r,a){return(0,I.f7)({collateral:t,asset:e,oracle:r,oracleData:a})}}]),t}(),S=R,C=["0xC6d54D2f624bc83815b49d9c2203b1330B841cA0","0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F","0x8Ab7404063Ec4DBcfd4598215992DC3F8EC853d7","0x4fE83213D56308330EC302a8BD641f1d0113A4Cc","0xADE00C28244d5CE17D72E40330B1c318cD12B7c3"],P=["0x8f2CC3376078568a04eBC600ae5F0a036DBfd812","0x8f7C7181Ed1a2BA41cfC3f5d064eF91b67daef66","0x6b7D436583e5fE0874B7310b74D29A13af816860"],O=function(t){return F(t,Z()).filter((function(t){return l.QA.greaterThan(t.userAssetFraction,l.xE)}))},T=function(t){return F(t,Z()).filter((function(t){return l.QA.greaterThan(t.userCollateralShare,l.xE)||l.QA.greaterThan(t.userBorrowPart,l.xE)}))};function D(){var t=(0,p.aQ)().chainId,e=(0,g.rU)();return(0,x.useMemo)((function(){return Object.values(e).reduce((function(e,r){var a;return t&&null!==c.k&&void 0!==c.k&&c.k[t]&&null!==(a=Object.values(null===c.k||void 0===c.k?void 0:c.k[t]))&&void 0!==a&&a.some((function(t){return r.address===t.from||r.address===t.to}))&&(e[r.address]=r),e}),{})}),[e,t])}function Z(){var t=(0,h.rO)(),e=(0,p.aQ)().chainId,r=(0,x.useMemo)((function(){return Boolean(e&&e!==l.a_.BSC&&e!==l.a_.MATIC&&e!==l.a_.ARBITRUM&&e!==l.a_.AVALANCHE)}),[e]),s=D(),o=(0,p.Tp)({chainId:e,contract:t,event:e&&t&&t.filters.LogDeploy(l.MO[e]),shouldFetch:Boolean(e&&r&&(0,A.vR)(d.L.KASHI,e))}).data,u=(0,m.HD)({chainId:e,shouldFetch:!r});return(0,x.useMemo)((function(){var t;return null===(t=r?null===o||void 0===o?void 0:o.map((function(t){return{address:t.args.cloneAddress,data:t.args.data}})):u)||void 0===t?void 0:t.reduce((function(t,r){try{var o=n.$.decode(["address","address","address","bytes"],r.data),l=(0,i.Z)(o,4),u=l[0],c=l[1],d=l[2],h=l[3];return C.includes(u)||C.includes(c)||P.includes(d)||!(0,A.nm)(e,s[u],s[c],h)?t:[].concat((0,a.Z)(t),[r.address])}catch(g){return t}}),[])}),[e,u,o,s,r])}function F(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=(0,p.aQ)(),a=r.chainId,i=(0,h.HW)(),n=D(),s=(0,x.useMemo)((function(){return[t||o.d,e]}),[t,e]),c=(0,Q.Wk)(i,"pollKashiPairs",s,{gasRequired:2e7}),d=c.result,g=(c.valid,c.loading,c.syncing,c.error);g&&(console.log(null===i||void 0===i?void 0:i.interface.encodeFunctionData("pollKashiPairs",["0xfcf383459e08ccb1679f32ae7f22eb0afe974a4c",e])),console.log("BoringHelper failed: network: ".concat(a?u.z[a]:"undef",", boringhelper: ").concat(null===i||void 0===i?void 0:i.address,", calldata in console")));var m=(0,v.Z)((0,x.useMemo)((function(){return Object.values(n)}),[n])),B=m.rebases,y=(0,f.SA)(Object.values(n));return(0,x.useMemo)((function(){return a&&d&&B&&y?null===d||void 0===d?void 0:d[0].reduce((function(t,e){var r,i;return!(C.includes(e.collateral)||C.includes(e.asset)||P.includes(e.oracle))&&B[e.collateral]&&null!==(r=B[e.collateral])&&void 0!==r&&r.token&&B[e.asset]&&null!==(i=B[e.asset])&&void 0!==i&&i.token?(t.push(new S({accrueInfo:{feesEarnedFraction:l.QA.BigInt(e.accrueInfo.feesEarnedFraction.toString()),lastAccrued:l.QA.BigInt(e.accrueInfo.lastAccrued),interestPerSecond:l.QA.BigInt(e.accrueInfo.interestPerSecond.toString())},collateral:B[e.collateral],asset:B[e.asset],collateralPrice:y[e.collateral],assetPrice:y[e.asset],oracle:(0,A.uw)(a,e.oracle,e.oracleData),totalCollateralShare:l.QA.BigInt(e.totalCollateralShare.toString()),totalAsset:{elastic:l.QA.BigInt(e.totalAsset.elastic.toString()),base:l.QA.BigInt(e.totalAsset.base.toString())},totalBorrow:{elastic:l.QA.BigInt(e.totalBorrow.elastic.toString()),base:l.QA.BigInt(e.totalBorrow.base.toString())},exchangeRate:l.QA.BigInt(e.currentExchangeRate.toString()),oracleExchangeRate:l.QA.BigInt(e.oracleExchangeRate.toString()),spotExchangeRate:l.QA.BigInt(e.spotExchangeRate.toString()),userCollateralShare:l.QA.BigInt(e.userCollateralShare.toString()),userAssetFraction:l.QA.BigInt(e.userAssetFraction.toString()),userBorrowPart:l.QA.BigInt(e.userBorrowPart.toString())})),t):t}),[]):[]}),[a,y,B,d])}function q(t,e){return F(t,[(0,s.getAddress)(e)])[0]}},94633:function(t,e,r){r.d(e,{Gj:function(){return c},SA:function(){return o},ZP:function(){return l},or:function(){return u}});var a=r(31518),i=r(84329),n=r(12614),s=r(67294);function o(t){var e=(0,n.aQ)(),r=e.chainId,o=r&&a.qY[r]?a.ih.fromRawAmount(a.qY[r],0).currency:void 0,l=(0,i.k$)({chainId:r}),u=l.data,c=(0,i.rU)({chainId:r,variables:{where:{id_in:null===t||void 0===t?void 0:t.map((function(t){return t.wrapped.address.toLowerCase()}))}},shouldFetch:t&&(null===t||void 0===t?void 0:t.length)>0}),d=(0,i.EO)({chainId:r,variables:{where:{id_in:null===t||void 0===t?void 0:t.map((function(t){return t.wrapped.address.toLowerCase()}))}},shouldFetch:t&&(null===t||void 0===t?void 0:t.length)>0}),A=d.data;return(0,s.useMemo)((function(){if(t&&0!==t.length&&o&&(c||A)){var e={};return t.map((function(t){var r=void 0,i=null===c||void 0===c?void 0:c.find((function(e){return e.id===t.wrapped.address.toLowerCase()})),n=null===A||void 0===A?void 0:A.find((function(e){return e.id===t.wrapped.address.toLowerCase()}));if(null!==t&&void 0!==t&&t.wrapped.equals(o))e[t.wrapped.address]=new a.tA(o,o,"1","1");else if(i&&n?r=i.liquidity>n.kpi.liquidity?u*i.derivedETH:n.price.derivedUSD:u&&i?r=u*i.derivedETH:n&&(r=n.price.derivedUSD),void 0!==r&&0!==r){var s,l,d,h=Math.pow(10,null!==(s=null===(l=String(r).split("."))||void 0===l||null===(d=l[1])||void 0===d?void 0:d.length)&&void 0!==s?s:0),g=Math.floor(r*h);try{e[t.wrapped.address]=new a.tA(t,o,h*Math.pow(10,t.decimals)/Math.pow(10,o.decimals),g)}catch(v){}}})),e}}),[t,o,c,A,u])}function l(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=o(t?[t]:void 0,e);return r?Object.values(r)[0]:void 0}function u(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=l(null===t||void 0===t?void 0:t.currency,e);return(0,s.useMemo)((function(){if(!r||!t)return null;try{return r.quote(t)}catch(e){return null}}),[t,r])}function c(t){var e=l(null===t||void 0===t?void 0:t.currency);return(0,s.useMemo)((function(){if(!e||!t)return{value:void 0,loading:!1};try{return{value:e.quote(t),loading:!1}}catch(r){return{value:void 0,loading:!1}}}),[t,e])}}}]);