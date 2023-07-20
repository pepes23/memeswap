"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[121],{62607:function(t,n,e){e.d(n,{q:function(){return c}});var i=e(92777),a=e(82262),r=e(59499),o=e(31518),u=e(16682),s=e(64527),c=function(){function t(n){var e=n.template,a=n.auctionToken,o=n.paymentToken,u=n.liquidityToken,s=n.auctionInfo,c=n.marketInfo,l=n.launcherInfo,d=n.auctionDocuments,m=n.pointListAddress,f=n.status;(0,i.Z)(this,t),(0,r.Z)(this,"template",void 0),(0,r.Z)(this,"auctionToken",void 0),(0,r.Z)(this,"paymentToken",void 0),(0,r.Z)(this,"liquidityToken",void 0),(0,r.Z)(this,"auctionInfo",void 0),(0,r.Z)(this,"marketInfo",void 0),(0,r.Z)(this,"launcherInfo",void 0),(0,r.Z)(this,"auctionDocuments",void 0),(0,r.Z)(this,"pointListAddress",void 0),(0,r.Z)(this,"auctionLauncherAddress",void 0),(0,r.Z)(this,"status",void 0),this.template=e,this.auctionToken=a,this.auctionInfo=s,this.paymentToken=o,this.marketInfo=c,this.launcherInfo=l,this.liquidityToken=u,this.auctionDocuments=d,this.pointListAddress=m,this.status=f}return(0,a.Z)(t,[{key:"isOwner",get:function(){var t;return null===(t=this.marketInfo)||void 0===t?void 0:t.isAdmin}},{key:"totalTokensCommitted",get:function(){var t;if(null!==(t=this.marketInfo)&&void 0!==t&&t.commitments)return o.ih.fromRawAmount(this.paymentToken,o.QA.BigInt(this.marketInfo.commitments))}},{key:"remainingTime",get:function(){if(this.status===s.wo.UPCOMING){var t=Date.now(),n=this.auctionInfo.startTime.mul("1000").toNumber()-t;return{days:Math.floor(n/864e5),hours:Math.floor(n%864e5/36e5),minutes:Math.floor(n%36e5/6e4),seconds:Math.floor(n%6e4/1e3)}}if(this.status===s.wo.LIVE){var e=Date.now(),i=this.auctionInfo.endTime.mul("1000").toNumber()-e;return{days:Math.floor(i/864e5),hours:Math.floor(i%864e5/36e5),minutes:Math.floor(i%36e5/6e4),seconds:Math.floor(i%6e4/1e3)}}return{days:0,hours:0,minutes:0,seconds:0}}},{key:"rate",get:function(){if(this.auctionInfo.rate)return new o.tA(this.auctionToken,this.paymentToken,o.QA.BigInt(o.QA.exponentiate(o.QA.BigInt(10),o.QA.BigInt(this.auctionToken.decimals))),o.QA.BigInt(this.auctionInfo.rate))}},{key:"totalTokens",get:function(){if(this.auctionInfo.totalTokens)return o.ih.fromRawAmount(this.auctionToken,o.QA.BigInt(this.auctionInfo.totalTokens))}},{key:"commitmentsTotal",get:function(){if(this.auctionInfo.commitmentsTotal)return o.ih.fromRawAmount(this.paymentToken,o.QA.BigInt(this.auctionInfo.commitmentsTotal))}},{key:"currentPrice",get:function(){if(this.template===s.tn.CROWDSALE)return this.rate;if(this.template===s.tn.DUTCH_AUCTION){var t=this.tokenPrice,n=this.auctionInfo.startTime.mul("1000").toNumber(),e=this.auctionInfo.endTime.mul("1000").toNumber(),i=Date.now();if(i<=n)return this.startPrice;if(this.startPrice&&this.reservePrice){var a=this.startPrice.subtract(this.startPrice.subtract(this.reservePrice).multiply(new o.iA(i-n,e-n))),r=a.numerator,u=a.denominator,c=new o.tA(this.auctionToken,this.paymentToken,u,r);if(t)return t.greaterThan(c)?t:c}}return this.template===s.tn.BATCH_AUCTION?this.tokenPrice:void 0}},{key:"reservePrice",get:function(){if(this.auctionInfo.minimumPrice)return new o.tA(this.auctionToken,this.paymentToken,o.QA.BigInt(o.QA.exponentiate(o.QA.BigInt(10),o.QA.BigInt(this.auctionToken.decimals))),o.QA.BigInt(this.auctionInfo.minimumPrice))}},{key:"tokenPrice",get:function(){if([s.tn.DUTCH_AUCTION,s.tn.BATCH_AUCTION].includes(this.template)&&this.commitmentsTotal&&this.totalTokens){var t=this.commitmentsTotal.divide(this.totalTokens),n=t.denominator,e=t.numerator;return new o.tA(this.totalTokens.currency,this.commitmentsTotal.currency,n,e)}return this.rate}},{key:"startPrice",get:function(){return this.template==s.tn.CROWDSALE?this.rate:this.auctionInfo.startPrice?new o.tA(this.auctionToken,this.paymentToken,o.QA.BigInt(o.QA.exponentiate(o.QA.BigInt(10),o.QA.BigInt(this.auctionToken.decimals))),o.QA.BigInt(this.auctionInfo.startPrice)):void 0}},{key:"minimumPrice",get:function(){if(this.auctionInfo.minimumPrice)return new o.tA(this.auctionToken,this.paymentToken,o.QA.BigInt(o.QA.exponentiate(o.QA.BigInt(10),o.QA.BigInt(this.auctionToken.decimals))),o.QA.BigInt(this.auctionInfo.minimumPrice))}},{key:"minimumCommitment",get:function(){if(this.template===s.tn.CROWDSALE&&this.totalTokens&&this.rate){var t=this.totalTokens.divide(this.rate),n=t.denominator,e=t.numerator;return o.ih.fromFractionalAmount(this.paymentToken,e,n)}if(this.template===s.tn.DUTCH_AUCTION&&this.totalTokens&&this.reservePrice){var i=this.totalTokens.multiply(this.reservePrice),a=i.denominator,r=i.numerator;return o.ih.fromFractionalAmount(this.paymentToken,r,a)}if(this.template===s.tn.BATCH_AUCTION&&this.auctionInfo.minimumCommitmentAmount)return o.ih.fromRawAmount(this.paymentToken,o.QA.BigInt(this.auctionInfo.minimumCommitmentAmount))}},{key:"minimumTargetRaised",get:function(){if(this.template===s.tn.BATCH_AUCTION)return this.minimumCommitment;if(this.minimumPrice&&this.totalTokens){var t=this.minimumPrice.asFraction.multiply(this.totalTokens),n=t.numerator,e=t.denominator;return o.ih.fromFractionalAmount(this.paymentToken,n,e)}}},{key:"maximumTargetRaised",get:function(){if(this.startPrice&&this.totalTokens){var t=this.startPrice.asFraction.multiply(this.totalTokens),n=t.numerator,e=t.denominator;return o.ih.fromFractionalAmount(this.paymentToken,n,e)}}},{key:"remainingPercentage",get:function(){if(this.template===s.tn.BATCH_AUCTION)return this.status===s.wo.LIVE?new o.gG("1","1"):u.fI;if(this.template===s.tn.DUTCH_AUCTION&&this.totalTokens&&this.currentPrice&&this.commitmentsTotal){var t=new o.gG("1","1");if(this.currentPrice.quote(this.totalTokens).greaterThan(o.xE)){var n=new o.gG(this.commitmentsTotal.quotient,this.currentPrice.quote(this.totalTokens).quotient.toString());return t.subtract(n)}return t}return this.template===s.tn.CROWDSALE&&this.maximumTargetRaised&&this.commitmentsTotal?new o.gG(this.maximumTargetRaised.subtract(this.commitmentsTotal).quotient,this.maximumTargetRaised.quotient):void 0}},{key:"tokenAmount",value:function(t){if(this.currentPrice&&t.greaterThan(0))return this.template===s.tn.BATCH_AUCTION&&this.currentPrice.equalTo(o.xE)?this.totalTokens:this.currentPrice.invert().quote(t)}},{key:"tokensClaimable",get:function(){var t;if(null!==(t=this.marketInfo)&&void 0!==t&&t.tokensClaimable)return o.ih.fromRawAmount(this.auctionToken,o.QA.BigInt(this.marketInfo.tokensClaimable))}},{key:"launcherHasFunds",get:function(){return!!this.launcherInfo&&(this.launcherInfo.token1Balance.gt(0)||this.launcherInfo.token2Balance.gt(0))}},{key:"canWithdrawDeposits",get:function(){var t;return!!(this.isOwner&&null!==(t=this.launcherInfo)&&void 0!==t&&t.launched&&this.launcherHasFunds)}},{key:"canFinalize",get:function(){var t,n;return!(!this.launcherInfo||this.launcherInfo.launched||!this.auctionInfo.finalized)||!this.auctionInfo.finalized&&(this.status===s.wo.FINISHED&&(!!this.isOwner||(this.auctionInfo.endTime.mul("1000").toNumber()+6048e5<Date.now()||!(null===(t=this.launcherInfo)||void 0===t||!t.liquidityTemplate)&&(null===(n=this.launcherInfo)||void 0===n?void 0:n.liquidityTemplate)>0)))}},{key:"canClaim",get:function(){if(!this.auctionInfo.finalized)return!1;if(!this.marketInfo)return!1;var t=o.QA.BigInt(this.marketInfo.tokensClaimable);return o.QA.greaterThan(t,o.QA.BigInt(0))}},{key:"canWithdraw",get:function(){return!!this.auctionInfo.finalized&&(!!this.marketInfo&&(!this.auctionInfo.auctionSuccessful&&o.QA.greaterThan(o.QA.BigInt(this.marketInfo.commitments),o.QA.BigInt(0))))}},{key:"liquidityAmount",get:function(){if(this.launcherInfo&&this.liquidityToken)return o.ih.fromRawAmount(this.liquidityToken,o.QA.BigInt(this.launcherInfo.liquidityAdded))}}]),t}()},62071:function(t,n,e){e.d(n,{RZ:function(){return r},Ti:function(){return i},jt:function(){return a}});var i=["0xEd4A285845f19945b0EbC04a3165e3DCAf62fEeD","0x595Ff4d3Cebb8Bf652C198481A82F6A4440f551c"],a="0x077511a636ba1f10551cc7b89c13ff66a6ac9344e8a917527817a9690b15af7a",r="0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"},80121:function(t,n,e){e.d(n,{ZP:function(){return P},xE:function(){return w}});var i=e(59499),a=e(9279),r=e(31518),o=e(53389),u=e(2886),s=function(t){var n=(0,o.JE)(),e=(0,u.es)(n,"getDocuments",t.map((function(t){return[t]})));return e&&Array.isArray(e)&&e.length===t.length?e.map((function(t){if(t.result&&Array.isArray(t.result)&&t.result.length>0)return t.result[0].reduce((function(t,n){return t[n.name]=n.data,t}),{})})):Array(t.length).fill(void 0)},c=e(90981),l=e(16835),d=e(8198),m=e(25401),f=e(15615),h=e(64527),A=e(12614),v=e(67294),T=new d.vU(f),I=new d.vU(f),y=function(t){var n=(0,u._Y)(t,I,"marketTemplate");return n&&Array.isArray(n)&&n.length===t.length?n.map((function(t){if(t.result&&Array.isArray(t.result)&&t.result.length>0)return t.result[0]})):Array(t.length).fill(void 0)},p=e(53502),k=function(t,n){var e=(0,o.JE)(!1),i=(0,v.useMemo)((function(){return e&&n&&n.length===t.length&&!n.some((function(t){return!t}))?t.map((function(t,i){return n[i].toNumber()===h.tn.BATCH_AUCTION?e.interface.encodeFunctionData("getBatchAuctionInfo",[t]):n[i].toNumber()===h.tn.DUTCH_AUCTION?e.interface.encodeFunctionData("getDutchAuctionInfo",[t]):e.interface.encodeFunctionData("getCrowdsaleInfo",[t])})):[]}),[t,e,n]),a=(0,u.o6)(e,i);return a&&Array.isArray(a)&&a.length===t.length?a.map((function(t){if(t.result&&Array.isArray(t.result)&&t.result.length>0)return t.result[0]})):Array(t.length).fill(void 0)},g=e(4840),b=e(92037),C=e(62607),B=e(62071);function M(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,i)}return e}function N(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?M(Object(e),!0).forEach((function(n){(0,i.Z)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):M(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var w=function(t,n){var e=(0,A.aQ)().chainId,i=function(t){var n=(0,o.JE)(),e=(0,u.Wk)(n,"getMarkets",void 0,{gasRequired:8e6}).result;return(0,v.useMemo)((function(){if(!e||!Array.isArray(e)||!(e.length>0))return[];var n=e[0].filter((function(t){return!B.Ti.includes(t.addr)})),i=(new Date).getTime();return t===h.wo.LIVE?n.filter((function(t){return i>=t.startTime.mul("1000").toNumber()&&i<t.endTime.mul("1000").toNumber()&&!t.finalized})):t===h.wo.UPCOMING?n.filter((function(t){return i<t.startTime.mul("1000").toNumber()&&!t.finalized})):t===h.wo.FINISHED?n.filter((function(t){return i>t.endTime.mul("1000").toNumber()||t.finalized})):n}),[e,t])}(t),a=(0,v.useMemo)((function(){return i.map((function(t){return t.addr}))}),[i]),c=function(t,n){var e=(0,A.aQ)().account,i=(0,o.JE)(),a=(0,u.es)(i,"getUserMarketInfo",t.map((function(t){var i;return[t,null!==(i=null!==n&&void 0!==n?n:e)&&void 0!==i?i:void 0]})));return a&&Array.isArray(a)&&a.length===t.length?a.map((function(t){if(t.result&&Array.isArray(t.result)&&t.result.length>0)return t.result[0]})):Array(t.length).fill(void 0)}(a,n),l=y(a),d=k(a,l),m=s(a),f=(0,p.Fz)(a),T=(0,b.Z)();return(0,v.useMemo)((function(){return e?i.reduce((function(t,i,a){var o,u=null===(o=l[a])||void 0===o?void 0:o.toNumber(),s=d[a],h=c[a],A=m[a],v=f[a],I=s?(0,g.$T)(e,s.paymentCurrencyInfo):void 0;return!n||null!==h&&void 0!==h&&h.isAdmin?(u&&s&&I&&A&&v&&T?t.push(new C.q({template:u,auctionToken:new r.WU(e,i.tokenInfo.addr,i.tokenInfo.decimals.toNumber(),i.tokenInfo.symbol,i.tokenInfo.name),paymentToken:I,liquidityToken:void 0,auctionInfo:s,marketInfo:h,launcherInfo:void 0,auctionDocuments:A,pointListAddress:v,status:(0,g.ku)(T.toNumber(),s)})):t.push(void 0),t):t}),[]).sort((function(n,e){return n&&e?t===h.wo.LIVE||t===h.wo.UPCOMING?n.auctionInfo.endTime.toNumber()<=e.auctionInfo.endTime.toNumber()?-1:1:n.auctionInfo.endTime.toNumber()<=e.auctionInfo.endTime.toNumber()?1:-1:0})):Array(Math.min(i.length,6)).fill(void 0)}),[m,d,l,i,T,e,n,f,t,c])},P=function(t,n){var e=(0,A.aQ)().chainId,i=(0,b.Z)(),s=function(t){var n=(0,o.cq)(t,T),e=(0,v.useMemo)((function(){return n?[n.interface.encodeFunctionData("marketTemplate",[]),n.interface.encodeFunctionData("pointList",[]),n.interface.encodeFunctionData("wallet",[])]:[]}),[n]),i=(0,u.o6)(n,e);if(n&&t&&i&&Array.isArray(i)&&i.length===e.length&&i.every((function(t){return!t.error}))){var a=(0,l.Z)(i,3),r=a[0].result,s=a[1].result,c=a[2].result;return{marketTemplateId:null===r||void 0===r?void 0:r[0],pointListAddress:null===s||void 0===s?void 0:s[0],auctionLauncherAddress:null===c||void 0===c?void 0:c[0],loading:i.some((function(t){return t.loading})),error:i.some((function(t){return t.error}))}}return{marketTemplateId:void 0,pointListAddress:void 0,auctionLauncherAddress:void 0,loading:i.some((function(t){return t.loading})),error:i.some((function(t){return t.error}))}}(t),d=s.marketTemplateId,f=s.pointListAddress,I=s.auctionLauncherAddress,y=s.loading,p=s.error,k=function(t,n){var e=(0,c.Z)().map,i=(n&&e?e[n]:{abi:void 0}).abi,a=(0,o.cq)(t,i),r=(0,u.Wk)(a,"auctionEnded").result;if(r&&Array.isArray(r)&&r.length>0)return r[0]}(t,d),B=function(t){var n,e,i=(0,A.aQ)().chainId,a=(0,o.cq)(t,i?null===(n=m[i])||void 0===n||null===(e=n[r.bk[i]])||void 0===e?void 0:e.contracts.PostAuctionLauncher.abi:void 0),s=(0,v.useMemo)((function(){return a&&t?[a.interface.encodeFunctionData("launcherInfo",[]),a.interface.encodeFunctionData("liquidityTemplate",[]),a.interface.encodeFunctionData("getLPTokenAddress",[]),a.interface.encodeFunctionData("getToken1Balance",[]),a.interface.encodeFunctionData("getToken2Balance",[])]:[]}),[a,t]),c=(0,u.o6)(a,s);if(a&&t&&c&&Array.isArray(c)&&c.length===s.length&&c.every((function(t){return!t.error}))){var d=(0,l.Z)(c,5),f=d[0].result,h=d[1].result,T=d[2].result,I=d[3].result,y=d[4].result;return{launcherInfo:f,liquidityTemplate:null===h||void 0===h?void 0:h[0],lpTokenAddress:null===T||void 0===T?void 0:T[0],token1Balance:null===I||void 0===I?void 0:I[0],token2Balance:null===y||void 0===y?void 0:y[0]}}return{launcherInfo:void 0,lpTokenAddress:void 0}}(I),M=B.launcherInfo,w=B.lpTokenAddress,P=B.token1Balance,S=B.token2Balance,D=B.liquidityTemplate,E=function(t,n,e){var i,a=(0,o.JE)(),r=(0,v.useMemo)((function(){return a&&t&&n?[a.interface.encodeFunctionData("getDocuments",[t]),a.interface.encodeFunctionData("getUserMarketInfo",[t,e]),a.interface.encodeFunctionData((null===n||void 0===n?void 0:n.toNumber())===h.tn.BATCH_AUCTION?"getBatchAuctionInfo":(null===n||void 0===n?void 0:n.toNumber())===h.tn.DUTCH_AUCTION?"getDutchAuctionInfo":"getCrowdsaleInfo",[t])]:[]}),[t,a,n,e]),s=(0,u.o6)(a,r);if(a&&t&&n&&s&&Array.isArray(s)&&s.length===r.length&&s.every((function(t){return!t.error}))){var c=(0,l.Z)(s,3),d=c[0].result,m=c[1].result,f=c[2].result;return{auctionDocuments:(i=null===d||void 0===d?void 0:d[0],null===i||void 0===i?void 0:i.reduce((function(t,n){return t[n.name]=n.data,t}),{})),marketInfo:null===m||void 0===m?void 0:m[0],auctionInfo:null===f||void 0===f?void 0:f[0],loading:s.some((function(t){return t.loading})),error:s.some((function(t){return t.error}))}}return{auctionDocuments:void 0,marketInfo:void 0,auctionInfo:void 0,loading:s.some((function(t){return t.loading})),error:s.some((function(t){return t.error}))}}(t,d,null!==n&&void 0!==n?n:a.d),O=E.auctionDocuments,L=E.marketInfo,U=E.auctionInfo,_=E.loading,F=E.error;return(0,v.useMemo)((function(){var t=p||F;if(t)return{loading:!1,auction:void 0,error:t};if(y||_||!i||!e||!d||!U||!O)return{loading:!0,auction:void 0,error:t};var n=(0,g.$T)(e,U.paymentCurrencyInfo);return{loading:!1,auction:new C.q({template:d.toNumber(),auctionToken:new r.WU(e,U.tokenInfo.addr,U.tokenInfo.decimals.toNumber(),U.tokenInfo.symbol,U.tokenInfo.name),liquidityToken:w?new r.WU(e,w,18,"SLP","Sushiswap LP Token"):void 0,paymentToken:n,auctionInfo:U,marketInfo:L,launcherInfo:M&&P&&S&&D&&I?N(N({},M),{},{address:I,liquidityTemplate:D.toNumber(),token1Balance:P,token2Balance:S}):void 0,auctionDocuments:O,pointListAddress:f,status:(0,g.ku)(i.toNumber(),U,k)}),error:t}}),[O,k,U,I,i,e,p,F,M,D,y,_,w,L,d,f,P,S])}},53502:function(t,n,e){e.d(n,{Fz:function(){return v},ge:function(){return I},n8:function(){return T}});var i=e(50029),a=e(87794),r=e.n(a),o=e(8198),u=e(9279),s=e(31518),c=e(25401),l=e(15615),d=e(53389),m=e(2886),f=e(12614),h=e(68411),A=e(67294),v=function(t){var n=(0,m._Y)(t,new o.vU(l),"pointList");return n&&Array.isArray(n)&&n.length===t.length?n.map((function(t){var n;return String(null===t||void 0===t||null===(n=t.result)||void 0===n?void 0:n[0])})):Array(t.length).fill(u.d)},T=function(t,n,e){var i,a,r=(0,f.aQ)(),o=r.account,u=r.chainId,l=(0,d.cq)(t,u?null===(i=c[u])||void 0===i||null===(a=i[s.bk[u]])||void 0===a?void 0:a.contracts.PointList.abi:void 0),h=(0,m.Wk)(l,"points",n?[n]:o?[o]:void 0).result;if(Array.isArray(h)&&h.length>0&&e){var A=new s.iA(s.QA.BigInt(h[0]),1),v=A.denominator,T=A.numerator;return s.ih.fromFractionalAmount(e,T,v)}},I=function(){var t,n,e,a,o=(0,f.aQ)(),u=o.account,l=o.chainId,m=(0,h.h7)(),v=(0,d.cq)(l?null===(t=c[l])||void 0===t||null===(n=t[s.bk[l]])||void 0===n?void 0:n.contracts.ListFactory.address:void 0,l?null===(e=c[l])||void 0===e||null===(a=e[s.bk[l]])||void 0===a?void 0:a.contracts.ListFactory.abi:void 0),T=(0,A.useCallback)((function(t,n){v&&v.on(t,n)}),[v]),I=(0,A.useCallback)((function(t,n){v&&v.off(t,n)}),[v]),y=(0,A.useCallback)(function(){var t=(0,i.Z)(r().mark((function t(n,e){var i;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(v){t.next=2;break}throw new Error("Contract not initialized");case 2:if(u){t.next=4;break}throw new Error("Wallet not connected");case 4:return t.next=6,v.deployPointList(u,n,e);case 6:return i=t.sent,m(i,{summary:"Initialize permission list"}),t.abrupt("return",i);case 9:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}(),[u,m,v]);return{subscribe:T,unsubscribe:I,init:y}}},90981:function(t,n,e){var i=e(59499),a=e(49501),r=e(31518),o=e(25401),u=e(64527),s=e(12614),c=e(67294);n.Z=function(){var t=(0,a.mV)().i18n,n=(0,s.aQ)().chainId,e=(0,c.useCallback)((function(n){var e;return(e={},(0,i.Z)(e,u.tn.NOT_SET,t._(t._("Not set"))),(0,i.Z)(e,u.tn.CROWDSALE,t._(t._("Crowdsale"))),(0,i.Z)(e,u.tn.DUTCH_AUCTION,t._(t._("Dutch Auction"))),(0,i.Z)(e,u.tn.BATCH_AUCTION,t._(t._("Batch Auction"))),(0,i.Z)(e,u.tn.HYPERBOLIC_AUCTION,t._(t._("Hyperbolic Auction"))),e)[n]}),[t]);return{map:(0,c.useMemo)((function(){var t,e,a,s,c,l,d,m,f,h,A,v,T,I,y,p,k;if(n)return k={},(0,i.Z)(k,null===(t=o[n])||void 0===t||null===(e=t[r.bk[n]])||void 0===e?void 0:e.contracts.Crowdsale.address,u.tn.CROWDSALE),(0,i.Z)(k,null===(a=o[n])||void 0===a||null===(s=a[r.bk[n]])||void 0===s?void 0:s.contracts.DutchAuction.address,u.tn.DUTCH_AUCTION),(0,i.Z)(k,null===(c=o[n])||void 0===c||null===(l=c[r.bk[n]])||void 0===l?void 0:l.contracts.BatchAuction.address,u.tn.BATCH_AUCTION),(0,i.Z)(k,null===(d=o[n])||void 0===d||null===(m=d[r.bk[n]])||void 0===m?void 0:m.contracts.HyperbolicAuction.address,u.tn.HYPERBOLIC_AUCTION),(0,i.Z)(k,u.tn.CROWDSALE,null===(f=o[n])||void 0===f||null===(h=f[r.bk[n]])||void 0===h?void 0:h.contracts.Crowdsale),(0,i.Z)(k,u.tn.DUTCH_AUCTION,null===(A=o[n])||void 0===A||null===(v=A[r.bk[n]])||void 0===v?void 0:v.contracts.DutchAuction),(0,i.Z)(k,u.tn.BATCH_AUCTION,null===(T=o[n])||void 0===T||null===(I=T[r.bk[n]])||void 0===I?void 0:I.contracts.BatchAuction),(0,i.Z)(k,u.tn.HYPERBOLIC_AUCTION,null===(y=o[n])||void 0===y||null===(p=y[r.bk[n]])||void 0===p?void 0:p.contracts.HyperbolicAuction),k}),[n]),templateIdToLabel:e}}},4840:function(t,n,e){e.d(n,{$T:function(){return h},RF:function(){return u},av:function(){return s},ku:function(){return A},kx:function(){return m},m2:function(){return c},od:function(){return l},pD:function(){return f},rI:function(){return d}});var i=e(31518),a=e(25401),r=e(62071),o=e(64527),u=function(t){return{1:t._(t._("LIVE")),2:t._(t._("UPCOMING")),3:t._(t._("FINISHED"))}},s=function(t){return{1:t._(t._("Crowdsale")),2:t._(t._("Dutch Auction")),3:t._(t._("Batch Auction"))}},c=function(t){return{1:t._(t._("Fixed price with fixed amount")),2:t._(t._("Price discovery that linearly declines from ceiling to floor price")),3:t._(t._("Valuation discovery with a minimum threshold and uncapped raise"))}},l=function(t){return{1:t._(t._("Fixed price, doesn't change over time")),2:t._(t._("This is the current price per token. It is calculated from the total commitments divided by the number of tokens on sale")),3:t._(t._("The estimated final price per token. It is calculated on a pro rata basis of the final total commitment"))}},d=function(t,n){var e,r,o,u,s,c;return{1:null===(e=a[t])||void 0===e||null===(r=e[i.bk[t]])||void 0===r?void 0:r.contracts.Crowdsale.abi,2:null===(o=a[t])||void 0===o||null===(u=o[i.bk[t]])||void 0===u?void 0:u.contracts.DutchAuction.abi,3:null===(s=a[t])||void 0===s||null===(c=s[i.bk[t]])||void 0===c?void 0:c.contracts.BatchAuction.abi}[n]},m={AF:"Afghanistan",AX:"Aland Islands",AL:"Albania",DZ:"Algeria",AS:"American Samoa",AD:"Andorra",AO:"Angola",AI:"Anguilla",AQ:"Antarctica",AG:"Antigua And Barbuda",AR:"Argentina",AM:"Armenia",AW:"Aruba",AU:"Australia",AT:"Austria",AZ:"Azerbaijan",BS:"Bahamas",BH:"Bahrain",BD:"Bangladesh",BB:"Barbados",BY:"Belarus",BE:"Belgium",BZ:"Belize",BJ:"Benin",BM:"Bermuda",BT:"Bhutan",BO:"Bolivia",BA:"Bosnia And Herzegovina",BW:"Botswana",BV:"Bouvet Island",BR:"Brazil",IO:"British Indian Ocean Territory",BN:"Brunei Darussalam",BG:"Bulgaria",BF:"Burkina Faso",BI:"Burundi",KH:"Cambodia",CM:"Cameroon",CA:"Canada",CV:"Cape Verde",KY:"Cayman Islands",CF:"Central African Republic",TD:"Chad",CL:"Chile",CN:"China",CX:"Christmas Island",CC:"Cocos (Keeling) Islands",CO:"Colombia",KM:"Comoros",CG:"Congo",CD:"Congo, Democratic Republic",CK:"Cook Islands",CR:"Costa Rica",CI:"Cote D'Ivoire",HR:"Croatia",CU:"Cuba",CY:"Cyprus",CZ:"Czech Republic",DK:"Denmark",DJ:"Djibouti",DM:"Dominica",DO:"Dominican Republic",EC:"Ecuador",EG:"Egypt",SV:"El Salvador",GQ:"Equatorial Guinea",ER:"Eritrea",EE:"Estonia",ET:"Ethiopia",FK:"Falkland Islands (Malvinas)",FO:"Faroe Islands",FJ:"Fiji",FI:"Finland",FR:"France",GF:"French Guiana",PF:"French Polynesia",TF:"French Southern Territories",GA:"Gabon",GM:"Gambia",GE:"Georgia",DE:"Germany",GH:"Ghana",GI:"Gibraltar",GR:"Greece",GL:"Greenland",GD:"Grenada",GP:"Guadeloupe",GU:"Guam",GT:"Guatemala",GG:"Guernsey",GN:"Guinea",GW:"Guinea-Bissau",GY:"Guyana",HT:"Haiti",HM:"Heard Island & Mcdonald Islands",VA:"Holy See (Vatican City State)",HN:"Honduras",HK:"Hong Kong",HU:"Hungary",IS:"Iceland",IN:"India",ID:"Indonesia",IR:"Iran, Islamic Republic Of",IQ:"Iraq",IE:"Ireland",IM:"Isle Of Man",IL:"Israel",IT:"Italy",JM:"Jamaica",JP:"Japan",JE:"Jersey",JO:"Jordan",KZ:"Kazakhstan",KE:"Kenya",KI:"Kiribati",KR:"Korea",KW:"Kuwait",KG:"Kyrgyzstan",LA:"Lao People's Democratic Republic",LV:"Latvia",LB:"Lebanon",LS:"Lesotho",LR:"Liberia",LY:"Libyan Arab Jamahiriya",LI:"Liechtenstein",LT:"Lithuania",LU:"Luxembourg",MO:"Macao",MK:"Macedonia",MG:"Madagascar",MW:"Malawi",MY:"Malaysia",MV:"Maldives",ML:"Mali",MT:"Malta",MH:"Marshall Islands",MQ:"Martinique",MR:"Mauritania",MU:"Mauritius",YT:"Mayotte",MX:"Mexico",FM:"Micronesia, Federated States Of",MD:"Moldova",MC:"Monaco",MN:"Mongolia",ME:"Montenegro",MS:"Montserrat",MA:"Morocco",MZ:"Mozambique",MM:"Myanmar",NA:"Namibia",NR:"Nauru",NP:"Nepal",NL:"Netherlands",AN:"Netherlands Antilles",NC:"New Caledonia",NZ:"New Zealand",NI:"Nicaragua",NE:"Niger",NG:"Nigeria",NU:"Niue",NF:"Norfolk Island",MP:"Northern Mariana Islands",NO:"Norway",OM:"Oman",PK:"Pakistan",PW:"Palau",PS:"Palestinian Territory, Occupied",PA:"Panama",PG:"Papua New Guinea",PY:"Paraguay",PE:"Peru",PH:"Philippines",PN:"Pitcairn",PL:"Poland",PT:"Portugal",PR:"Puerto Rico",QA:"Qatar",RE:"Reunion",RO:"Romania",RU:"Russian Federation",RW:"Rwanda",BL:"Saint Barthelemy",SH:"Saint Helena",KN:"Saint Kitts And Nevis",LC:"Saint Lucia",MF:"Saint Martin",PM:"Saint Pierre And Miquelon",VC:"Saint Vincent And Grenadines",WS:"Samoa",SM:"San Marino",ST:"Sao Tome And Principe",SA:"Saudi Arabia",SN:"Senegal",RS:"Serbia",SC:"Seychelles",SL:"Sierra Leone",SG:"Singapore",SK:"Slovakia",SI:"Slovenia",SB:"Solomon Islands",SO:"Somalia",ZA:"South Africa",GS:"South Georgia And Sandwich Isl.",ES:"Spain",LK:"Sri Lanka",SD:"Sudan",SR:"Suriname",SJ:"Svalbard And Jan Mayen",SZ:"Swaziland",SE:"Sweden",CH:"Switzerland",SY:"Syrian Arab Republic",TW:"Taiwan",TJ:"Tajikistan",TZ:"Tanzania",TH:"Thailand",TL:"Timor-Leste",TG:"Togo",TK:"Tokelau",TO:"Tonga",TT:"Trinidad And Tobago",TN:"Tunisia",TR:"Turkey",TM:"Turkmenistan",TC:"Turks And Caicos Islands",TV:"Tuvalu",UG:"Uganda",UA:"Ukraine",AE:"United Arab Emirates",GB:"United Kingdom",US:"United States",UM:"United States Outlying Islands",UY:"Uruguay",UZ:"Uzbekistan",VU:"Vanuatu",VE:"Venezuela",VN:"Viet Nam",VG:"Virgin Islands, British",VI:"Virgin Islands, U.S.",WF:"Wallis And Futuna",EH:"Western Sahara",YE:"Yemen",ZM:"Zambia",ZW:"Zimbabwe"};function f(t){return m.hasOwnProperty(t)?m[t]:t}var h=function(t,n){return n.addr===r.RZ?i.B5[t]:new i.WU(t,n.addr,n.decimals.toNumber(),n.symbol,n.name)},A=function(t,n,e){var i=n.startTime.toNumber(),a=n.endTime.toNumber();return"undefined"!==typeof e&&e?o.wo.FINISHED:t>=i&&t<=a&&!n.finalized?o.wo.LIVE:t<i&&!n.finalized?o.wo.UPCOMING:o.wo.FINISHED}},92037:function(t,n,e){e.d(n,{Z:function(){return r}});var i=e(2886),a=e(54907);function r(){var t,n,e=(0,a.h$)();return null===(t=(0,i.Wk)(e,"getCurrentBlockTimestamp"))||void 0===t||null===(n=t.result)||void 0===n?void 0:n[0]}},15615:function(t){t.exports=JSON.parse('[{"inputs":[{"internalType":"address payable","name":"_beneficiary","type":"address"},{"internalType":"bool","name":"readAndAgreedToMarketParticipationAgreement","type":"bool"}],"name":"commitEth","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"bool","name":"readAndAgreedToMarketParticipationAgreement","type":"bool"}],"name":"commitTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"finalize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"beneficiary","type":"address"}],"name":"withdrawTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_wallet","type":"address"}],"name":"setAuctionWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"marketTemplate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"wallet","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pointList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]')}}]);