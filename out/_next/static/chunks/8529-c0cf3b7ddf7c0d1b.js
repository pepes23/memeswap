(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8529],{18552:function(t,e,n){var r=n(10852)(n(55639),"DataView");t.exports=r},53818:function(t,e,n){var r=n(10852)(n(55639),"Promise");t.exports=r},58525:function(t,e,n){var r=n(10852)(n(55639),"Set");t.exports=r},88668:function(t,e,n){var r=n(83369),a=n(90619),i=n(72385);function u(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new r;++e<n;)this.add(t[e])}u.prototype.add=u.prototype.push=a,u.prototype.has=i,t.exports=u},46384:function(t,e,n){var r=n(38407),a=n(37465),i=n(63779),u=n(67599),o=n(44758),s=n(34309);function p(t){var e=this.__data__=new r(t);this.size=e.size}p.prototype.clear=a,p.prototype.delete=i,p.prototype.get=u,p.prototype.has=o,p.prototype.set=s,t.exports=p},11149:function(t,e,n){var r=n(55639).Uint8Array;t.exports=r},70577:function(t,e,n){var r=n(10852)(n(55639),"WeakMap");t.exports=r},34963:function(t){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length,a=0,i=[];++n<r;){var u=t[n];e(u,n,t)&&(i[a++]=u)}return i}},14636:function(t,e,n){var r=n(22545),a=n(35694),i=n(1469),u=n(44144),o=n(65776),s=n(36719),p=Object.prototype.hasOwnProperty;t.exports=function(t,e){var n=i(t),c=!n&&a(t),f=!n&&!c&&u(t),y=!n&&!c&&!f&&s(t),l=n||c||f||y,d=l?r(t.length,String):[],v=d.length;for(var b in t)!e&&!p.call(t,b)||l&&("length"==b||f&&("offset"==b||"parent"==b)||y&&("buffer"==b||"byteLength"==b||"byteOffset"==b)||o(b,v))||d.push(b);return d}},90148:function(t){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length,a=Array(r);++n<r;)a[n]=e(t[n],n,t);return a}},62488:function(t){t.exports=function(t,e){for(var n=-1,r=e.length,a=t.length;++n<r;)t[a+n]=e[n];return t}},82908:function(t){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1}},89881:function(t,e,n){var r=n(47816),a=n(99291)(r);t.exports=a},21078:function(t,e,n){var r=n(62488),a=n(37285);t.exports=function t(e,n,i,u,o){var s=-1,p=e.length;for(i||(i=a),o||(o=[]);++s<p;){var c=e[s];n>0&&i(c)?n>1?t(c,n-1,i,u,o):r(o,c):u||(o[o.length]=c)}return o}},28483:function(t,e,n){var r=n(25063)();t.exports=r},47816:function(t,e,n){var r=n(28483),a=n(3674);t.exports=function(t,e){return t&&r(t,e,a)}},97786:function(t,e,n){var r=n(71811),a=n(40327);t.exports=function(t,e){for(var n=0,i=(e=r(e,t)).length;null!=t&&n<i;)t=t[a(e[n++])];return n&&n==i?t:void 0}},68866:function(t,e,n){var r=n(62488),a=n(1469);t.exports=function(t,e,n){var i=e(t);return a(t)?i:r(i,n(t))}},13:function(t){t.exports=function(t,e){return null!=t&&e in Object(t)}},9454:function(t,e,n){var r=n(44239),a=n(37005);t.exports=function(t){return a(t)&&"[object Arguments]"==r(t)}},90939:function(t,e,n){var r=n(2492),a=n(37005);t.exports=function t(e,n,i,u,o){return e===n||(null==e||null==n||!a(e)&&!a(n)?e!==e&&n!==n:r(e,n,i,u,t,o))}},2492:function(t,e,n){var r=n(46384),a=n(67114),i=n(18351),u=n(16096),o=n(64160),s=n(1469),p=n(44144),c=n(36719),f="[object Arguments]",y="[object Array]",l="[object Object]",d=Object.prototype.hasOwnProperty;t.exports=function(t,e,n,v,b,m){var x=s(t),T=s(e),h=x?y:o(t),j=T?y:o(e),_=(h=h==f?l:h)==l,g=(j=j==f?l:j)==l,w=h==j;if(w&&p(t)){if(!p(e))return!1;x=!0,_=!1}if(w&&!_)return m||(m=new r),x||c(t)?a(t,e,n,v,b,m):i(t,e,h,n,v,b,m);if(!(1&n)){var M=_&&d.call(t,"__wrapped__"),O=g&&d.call(e,"__wrapped__");if(M||O){var A=M?t.value():t,k=O?e.value():e;return m||(m=new r),b(A,k,n,v,m)}}return!!w&&(m||(m=new r),u(t,e,n,v,b,m))}},2958:function(t,e,n){var r=n(46384),a=n(90939);t.exports=function(t,e,n,i){var u=n.length,o=u,s=!i;if(null==t)return!o;for(t=Object(t);u--;){var p=n[u];if(s&&p[2]?p[1]!==t[p[0]]:!(p[0]in t))return!1}for(;++u<o;){var c=(p=n[u])[0],f=t[c],y=p[1];if(s&&p[2]){if(void 0===f&&!(c in t))return!1}else{var l=new r;if(i)var d=i(f,y,c,t,e,l);if(!(void 0===d?a(y,f,3,i,l):d))return!1}}return!0}},38749:function(t,e,n){var r=n(44239),a=n(41780),i=n(37005),u={};u["[object Float32Array]"]=u["[object Float64Array]"]=u["[object Int8Array]"]=u["[object Int16Array]"]=u["[object Int32Array]"]=u["[object Uint8Array]"]=u["[object Uint8ClampedArray]"]=u["[object Uint16Array]"]=u["[object Uint32Array]"]=!0,u["[object Arguments]"]=u["[object Array]"]=u["[object ArrayBuffer]"]=u["[object Boolean]"]=u["[object DataView]"]=u["[object Date]"]=u["[object Error]"]=u["[object Function]"]=u["[object Map]"]=u["[object Number]"]=u["[object Object]"]=u["[object RegExp]"]=u["[object Set]"]=u["[object String]"]=u["[object WeakMap]"]=!1,t.exports=function(t){return i(t)&&a(t.length)&&!!u[r(t)]}},67206:function(t,e,n){var r=n(91573),a=n(16432),i=n(6557),u=n(1469),o=n(39601);t.exports=function(t){return"function"==typeof t?t:null==t?i:"object"==typeof t?u(t)?a(t[0],t[1]):r(t):o(t)}},280:function(t,e,n){var r=n(25726),a=n(86916),i=Object.prototype.hasOwnProperty;t.exports=function(t){if(!r(t))return a(t);var e=[];for(var n in Object(t))i.call(t,n)&&"constructor"!=n&&e.push(n);return e}},69199:function(t,e,n){var r=n(89881),a=n(98612);t.exports=function(t,e){var n=-1,i=a(t)?Array(t.length):[];return r(t,(function(t,r,a){i[++n]=e(t,r,a)})),i}},91573:function(t,e,n){var r=n(2958),a=n(1499),i=n(42634);t.exports=function(t){var e=a(t);return 1==e.length&&e[0][2]?i(e[0][0],e[0][1]):function(n){return n===t||r(n,t,e)}}},16432:function(t,e,n){var r=n(90939),a=n(27361),i=n(79095),u=n(15403),o=n(89162),s=n(42634),p=n(40327);t.exports=function(t,e){return u(t)&&o(e)?s(p(t),e):function(n){var u=a(n,t);return void 0===u&&u===e?i(n,t):r(e,u,3)}}},40371:function(t){t.exports=function(t){return function(e){return null==e?void 0:e[t]}}},79152:function(t,e,n){var r=n(97786);t.exports=function(t){return function(e){return r(e,t)}}},22545:function(t){t.exports=function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}},80531:function(t,e,n){var r=n(62705),a=n(90148),i=n(1469),u=n(33448),o=r?r.prototype:void 0,s=o?o.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(i(e))return a(e,t)+"";if(u(e))return s?s.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n}},7518:function(t){t.exports=function(t){return function(e){return t(e)}}},74757:function(t){t.exports=function(t,e){return t.has(e)}},71811:function(t,e,n){var r=n(1469),a=n(15403),i=n(55514),u=n(79833);t.exports=function(t,e){return r(t)?t:a(t,e)?[t]:i(u(t))}},99291:function(t,e,n){var r=n(98612);t.exports=function(t,e){return function(n,a){if(null==n)return n;if(!r(n))return t(n,a);for(var i=n.length,u=e?i:-1,o=Object(n);(e?u--:++u<i)&&!1!==a(o[u],u,o););return n}}},25063:function(t){t.exports=function(t){return function(e,n,r){for(var a=-1,i=Object(e),u=r(e),o=u.length;o--;){var s=u[t?o:++a];if(!1===n(i[s],s,i))break}return e}}},67114:function(t,e,n){var r=n(88668),a=n(82908),i=n(74757);t.exports=function(t,e,n,u,o,s){var p=1&n,c=t.length,f=e.length;if(c!=f&&!(p&&f>c))return!1;var y=s.get(t),l=s.get(e);if(y&&l)return y==e&&l==t;var d=-1,v=!0,b=2&n?new r:void 0;for(s.set(t,e),s.set(e,t);++d<c;){var m=t[d],x=e[d];if(u)var T=p?u(x,m,d,e,t,s):u(m,x,d,t,e,s);if(void 0!==T){if(T)continue;v=!1;break}if(b){if(!a(e,(function(t,e){if(!i(b,e)&&(m===t||o(m,t,n,u,s)))return b.push(e)}))){v=!1;break}}else if(m!==x&&!o(m,x,n,u,s)){v=!1;break}}return s.delete(t),s.delete(e),v}},18351:function(t,e,n){var r=n(62705),a=n(11149),i=n(77813),u=n(67114),o=n(68776),s=n(21814),p=r?r.prototype:void 0,c=p?p.valueOf:void 0;t.exports=function(t,e,n,r,p,f,y){switch(n){case"[object DataView]":if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=e.byteLength||!f(new a(t),new a(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return i(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case"[object Map]":var l=o;case"[object Set]":var d=1&r;if(l||(l=s),t.size!=e.size&&!d)return!1;var v=y.get(t);if(v)return v==e;r|=2,y.set(t,e);var b=u(l(t),l(e),r,p,f,y);return y.delete(t),b;case"[object Symbol]":if(c)return c.call(t)==c.call(e)}return!1}},16096:function(t,e,n){var r=n(58234),a=Object.prototype.hasOwnProperty;t.exports=function(t,e,n,i,u,o){var s=1&n,p=r(t),c=p.length;if(c!=r(e).length&&!s)return!1;for(var f=c;f--;){var y=p[f];if(!(s?y in e:a.call(e,y)))return!1}var l=o.get(t),d=o.get(e);if(l&&d)return l==e&&d==t;var v=!0;o.set(t,e),o.set(e,t);for(var b=s;++f<c;){var m=t[y=p[f]],x=e[y];if(i)var T=s?i(x,m,y,e,t,o):i(m,x,y,t,e,o);if(!(void 0===T?m===x||u(m,x,n,i,o):T)){v=!1;break}b||(b="constructor"==y)}if(v&&!b){var h=t.constructor,j=e.constructor;h==j||!("constructor"in t)||!("constructor"in e)||"function"==typeof h&&h instanceof h&&"function"==typeof j&&j instanceof j||(v=!1)}return o.delete(t),o.delete(e),v}},58234:function(t,e,n){var r=n(68866),a=n(99551),i=n(3674);t.exports=function(t){return r(t,i,a)}},1499:function(t,e,n){var r=n(89162),a=n(3674);t.exports=function(t){for(var e=a(t),n=e.length;n--;){var i=e[n],u=t[i];e[n]=[i,u,r(u)]}return e}},99551:function(t,e,n){var r=n(34963),a=n(70479),i=Object.prototype.propertyIsEnumerable,u=Object.getOwnPropertySymbols,o=u?function(t){return null==t?[]:(t=Object(t),r(u(t),(function(e){return i.call(t,e)})))}:a;t.exports=o},64160:function(t,e,n){var r=n(18552),a=n(57071),i=n(53818),u=n(58525),o=n(70577),s=n(44239),p=n(80346),c="[object Map]",f="[object Promise]",y="[object Set]",l="[object WeakMap]",d="[object DataView]",v=p(r),b=p(a),m=p(i),x=p(u),T=p(o),h=s;(r&&h(new r(new ArrayBuffer(1)))!=d||a&&h(new a)!=c||i&&h(i.resolve())!=f||u&&h(new u)!=y||o&&h(new o)!=l)&&(h=function(t){var e=s(t),n="[object Object]"==e?t.constructor:void 0,r=n?p(n):"";if(r)switch(r){case v:return d;case b:return c;case m:return f;case x:return y;case T:return l}return e}),t.exports=h},222:function(t,e,n){var r=n(71811),a=n(35694),i=n(1469),u=n(65776),o=n(41780),s=n(40327);t.exports=function(t,e,n){for(var p=-1,c=(e=r(e,t)).length,f=!1;++p<c;){var y=s(e[p]);if(!(f=null!=t&&n(t,y)))break;t=t[y]}return f||++p!=c?f:!!(c=null==t?0:t.length)&&o(c)&&u(y,c)&&(i(t)||a(t))}},37285:function(t,e,n){var r=n(62705),a=n(35694),i=n(1469),u=r?r.isConcatSpreadable:void 0;t.exports=function(t){return i(t)||a(t)||!!(u&&t&&t[u])}},65776:function(t){var e=/^(?:0|[1-9]\d*)$/;t.exports=function(t,n){var r=typeof t;return!!(n=null==n?9007199254740991:n)&&("number"==r||"symbol"!=r&&e.test(t))&&t>-1&&t%1==0&&t<n}},15403:function(t,e,n){var r=n(1469),a=n(33448),i=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,u=/^\w*$/;t.exports=function(t,e){if(r(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!a(t))||(u.test(t)||!i.test(t)||null!=e&&t in Object(e))}},25726:function(t){var e=Object.prototype;t.exports=function(t){var n=t&&t.constructor;return t===("function"==typeof n&&n.prototype||e)}},89162:function(t,e,n){var r=n(13218);t.exports=function(t){return t===t&&!r(t)}},68776:function(t){t.exports=function(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n}},42634:function(t){t.exports=function(t,e){return function(n){return null!=n&&(n[t]===e&&(void 0!==e||t in Object(n)))}}},24523:function(t,e,n){var r=n(88306);t.exports=function(t){var e=r(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}},86916:function(t,e,n){var r=n(5569)(Object.keys,Object);t.exports=r},31167:function(t,e,n){t=n.nmd(t);var r=n(31957),a=e&&!e.nodeType&&e,i=a&&t&&!t.nodeType&&t,u=i&&i.exports===a&&r.process,o=function(){try{var t=i&&i.require&&i.require("util").types;return t||u&&u.binding&&u.binding("util")}catch(e){}}();t.exports=o},5569:function(t){t.exports=function(t,e){return function(n){return t(e(n))}}},90619:function(t){t.exports=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this}},72385:function(t){t.exports=function(t){return this.__data__.has(t)}},21814:function(t){t.exports=function(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n}},37465:function(t,e,n){var r=n(38407);t.exports=function(){this.__data__=new r,this.size=0}},63779:function(t){t.exports=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}},67599:function(t){t.exports=function(t){return this.__data__.get(t)}},44758:function(t){t.exports=function(t){return this.__data__.has(t)}},34309:function(t,e,n){var r=n(38407),a=n(57071),i=n(83369);t.exports=function(t,e){var n=this.__data__;if(n instanceof r){var u=n.__data__;if(!a||u.length<199)return u.push([t,e]),this.size=++n.size,this;n=this.__data__=new i(u)}return n.set(t,e),this.size=n.size,this}},55514:function(t,e,n){var r=n(24523),a=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,i=/\\(\\)?/g,u=r((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(a,(function(t,n,r,a){e.push(r?a.replace(i,"$1"):n||t)})),e}));t.exports=u},40327:function(t,e,n){var r=n(33448);t.exports=function(t){if("string"==typeof t||r(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e}},94654:function(t,e,n){var r=n(21078),a=n(35161);t.exports=function(t,e){return r(a(t,e),1)}},27361:function(t,e,n){var r=n(97786);t.exports=function(t,e,n){var a=null==t?void 0:r(t,e);return void 0===a?n:a}},79095:function(t,e,n){var r=n(13),a=n(222);t.exports=function(t,e){return null!=t&&a(t,e,r)}},6557:function(t){t.exports=function(t){return t}},35694:function(t,e,n){var r=n(9454),a=n(37005),i=Object.prototype,u=i.hasOwnProperty,o=i.propertyIsEnumerable,s=r(function(){return arguments}())?r:function(t){return a(t)&&u.call(t,"callee")&&!o.call(t,"callee")};t.exports=s},1469:function(t){var e=Array.isArray;t.exports=e},98612:function(t,e,n){var r=n(23560),a=n(41780);t.exports=function(t){return null!=t&&a(t.length)&&!r(t)}},44144:function(t,e,n){t=n.nmd(t);var r=n(55639),a=n(95062),i=e&&!e.nodeType&&e,u=i&&t&&!t.nodeType&&t,o=u&&u.exports===i?r.Buffer:void 0,s=(o?o.isBuffer:void 0)||a;t.exports=s},41780:function(t){t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}},37005:function(t){t.exports=function(t){return null!=t&&"object"==typeof t}},33448:function(t,e,n){var r=n(44239),a=n(37005);t.exports=function(t){return"symbol"==typeof t||a(t)&&"[object Symbol]"==r(t)}},36719:function(t,e,n){var r=n(38749),a=n(7518),i=n(31167),u=i&&i.isTypedArray,o=u?a(u):r;t.exports=o},3674:function(t,e,n){var r=n(14636),a=n(280),i=n(98612);t.exports=function(t){return i(t)?r(t):a(t)}},35161:function(t,e,n){var r=n(90148),a=n(67206),i=n(69199),u=n(1469);t.exports=function(t,e){return(u(t)?r:i)(t,a(e,3))}},39601:function(t,e,n){var r=n(40371),a=n(79152),i=n(15403),u=n(40327);t.exports=function(t){return i(t)?r(u(t)):a(t)}},70479:function(t){t.exports=function(){return[]}},95062:function(t){t.exports=function(){return!1}},79833:function(t,e,n){var r=n(80531);t.exports=function(t){return null==t?"":r(t)}},69587:function(t){"use strict";t.exports=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0Out","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1Out","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint112","name":"reserve0","type":"uint112"},{"indexed":false,"internalType":"uint112","name":"reserve1","type":"uint112"}],"name":"Sync","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MINIMUM_LIQUIDITY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"burn","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"reserve0","type":"uint112"},{"internalType":"uint112","name":"reserve1","type":"uint112"},{"internalType":"uint32","name":"blockTimestampLast","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"kLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"skim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount0Out","type":"uint256"},{"internalType":"uint256","name":"amount1Out","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"swap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"sync","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]')}}]);