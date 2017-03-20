/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(26);
	__webpack_require__(28);
	__webpack_require__(5);
	__webpack_require__(30);
	__webpack_require__(10);
	__webpack_require__(12);
	var stage3point_1 = __webpack_require__(32);
	var KOA_1 = __webpack_require__(38);
	var Stage5v5_1 = __webpack_require__(53);
	var StageOnlineView_1 = __webpack_require__(56);
	var RKBOPView_1 = __webpack_require__(74);
	var routes = [
	    {
	        path: '/', name: 'panel',
	        components: { default: RKBOPView_1.rkbView }
	    },
	    {
	        path: '/rkb/:op/:game_id',
	        components: { default: RKBOPView_1.rkbView }
	    },
	    {
	        path: '/koa/:op',
	        components: { default: KOA_1.koa }
	    },
	    {
	        path: '/5v5/:op',
	        components: { default: Stage5v5_1.stage5v5 }
	    },
	    {
	        path: '/3/:op',
	        components: { default: stage3point_1.stage3point }
	    },
	    {
	        path: '/ol/:op/:game_id',
	        components: { default: StageOnlineView_1.stageOnlineView }
	    }
	];
	var router = new VueRouter({
	    routes: routes
	});
	router.afterEach(function (to, from) {
	});
	var app = new Vue({
	    router: router
	}).$mount('#panel');


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(6)(__webpack_require__(7))

/***/ },
/* 6 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	module.exports = function(src) {
		if (typeof execScript !== "undefined")
			execScript(src);
		else
			eval.call(null, src);
	}


/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */\r\n!function(a,b){\"object\"==typeof module&&\"object\"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error(\"jQuery requires a window with a document\");return b(a)}:b(a)}(\"undefined\"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m=\"2.1.4\",n=function(a,b){return new n.fn.init(a,b)},o=/^[\\s\\uFEFF\\xA0]+|[\\s\\uFEFF\\xA0]+$/g,p=/^-ms-/,q=/-([\\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:\"\",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for(\"boolean\"==typeof g&&(j=g,g=arguments[h]||{},h++),\"object\"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:\"jQuery\"+(m+Math.random()).replace(/\\D/g,\"\"),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return\"function\"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return\"object\"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,\"isPrototypeOf\")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+\"\":\"object\"==typeof a||\"function\"==typeof a?h[i.call(a)]||\"object\":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf(\"use strict\")?(b=l.createElement(\"script\"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,\"ms-\").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?\"\":(a+\"\").replace(o,\"\")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,\"string\"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return\"string\"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each(\"Boolean Number String Function Array Date RegExp Object Error\".split(\" \"),function(a,b){h[\"[object \"+b+\"]\"]=b.toLowerCase()});function s(a){var b=\"length\"in a&&a.length,c=n.type(a);return\"function\"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:\"array\"===c||0===b||\"number\"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u=\"sizzle\"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K=\"checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped\",L=\"[\\\\x20\\\\t\\\\r\\\\n\\\\f]\",M=\"(?:\\\\\\\\.|[\\\\w-]|[^\\\\x00-\\\\xa0])+\",N=M.replace(\"w\",\"w#\"),O=\"\\\\[\"+L+\"*(\"+M+\")(?:\"+L+\"*([*^$|!~]?=)\"+L+\"*(?:'((?:\\\\\\\\.|[^\\\\\\\\'])*)'|\\\"((?:\\\\\\\\.|[^\\\\\\\\\\\"])*)\\\"|(\"+N+\"))|)\"+L+\"*\\\\]\",P=\":(\"+M+\")(?:\\\\((('((?:\\\\\\\\.|[^\\\\\\\\'])*)'|\\\"((?:\\\\\\\\.|[^\\\\\\\\\\\"])*)\\\")|((?:\\\\\\\\.|[^\\\\\\\\()[\\\\]]|\"+O+\")*)|.*)\\\\)|)\",Q=new RegExp(L+\"+\",\"g\"),R=new RegExp(\"^\"+L+\"+|((?:^|[^\\\\\\\\])(?:\\\\\\\\.)*)\"+L+\"+$\",\"g\"),S=new RegExp(\"^\"+L+\"*,\"+L+\"*\"),T=new RegExp(\"^\"+L+\"*([>+~]|\"+L+\")\"+L+\"*\"),U=new RegExp(\"=\"+L+\"*([^\\\\]'\\\"]*?)\"+L+\"*\\\\]\",\"g\"),V=new RegExp(P),W=new RegExp(\"^\"+N+\"$\"),X={ID:new RegExp(\"^#(\"+M+\")\"),CLASS:new RegExp(\"^\\\\.(\"+M+\")\"),TAG:new RegExp(\"^(\"+M.replace(\"w\",\"w*\")+\")\"),ATTR:new RegExp(\"^\"+O),PSEUDO:new RegExp(\"^\"+P),CHILD:new RegExp(\"^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\\\(\"+L+\"*(even|odd|(([+-]|)(\\\\d*)n|)\"+L+\"*(?:([+-]|)\"+L+\"*(\\\\d+)|))\"+L+\"*\\\\)|)\",\"i\"),bool:new RegExp(\"^(?:\"+K+\")$\",\"i\"),needsContext:new RegExp(\"^\"+L+\"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\\\(\"+L+\"*((?:-\\\\d)?\\\\d*)\"+L+\"*\\\\)|)(?=[^-]|$)\",\"i\")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\\d$/i,$=/^[^{]+\\{\\s*\\[native \\w/,_=/^(?:#([\\w-]+)|(\\w+)|\\.([\\w-]+))$/,aa=/[+~]/,ba=/'|\\\\/g,ca=new RegExp(\"\\\\\\\\([\\\\da-f]{1,6}\"+L+\"?|(\"+L+\")|.)\",\"ig\"),da=function(a,b,c){var d=\"0x\"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,\"string\"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&\"object\"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute(\"id\"))?s=r.replace(ba,\"\\\\$&\"):b.setAttribute(\"id\",s),s=\"[id='\"+s+\"'] \",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(\",\")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute(\"id\")}}}return i(a.replace(R,\"$1\"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+\" \")>d.cacheLength&&delete b[a.shift()],b[c+\" \"]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement(\"div\");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split(\"|\"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return\"input\"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return(\"input\"===c||\"button\"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&\"undefined\"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?\"HTML\"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener(\"unload\",ea,!1):e.attachEvent&&e.attachEvent(\"onunload\",ea)),p=!f(g),c.attributes=ja(function(a){return a.className=\"i\",!a.getAttribute(\"className\")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment(\"\")),!a.getElementsByTagName(\"*\").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(\"undefined\"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute(\"id\")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c=\"undefined\"!=typeof a.getAttributeNode&&a.getAttributeNode(\"id\");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return\"undefined\"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if(\"*\"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML=\"<a id='\"+u+\"'></a><select id='\"+u+\"-\\f]' msallowcapture=''><option selected=''></option></select>\",a.querySelectorAll(\"[msallowcapture^='']\").length&&q.push(\"[*^$]=\"+L+\"*(?:''|\\\"\\\")\"),a.querySelectorAll(\"[selected]\").length||q.push(\"\\\\[\"+L+\"*(?:value|\"+K+\")\"),a.querySelectorAll(\"[id~=\"+u+\"-]\").length||q.push(\"~=\"),a.querySelectorAll(\":checked\").length||q.push(\":checked\"),a.querySelectorAll(\"a#\"+u+\"+*\").length||q.push(\".#.+[+~]\")}),ja(function(a){var b=g.createElement(\"input\");b.setAttribute(\"type\",\"hidden\"),a.appendChild(b).setAttribute(\"name\",\"D\"),a.querySelectorAll(\"[name=d]\").length&&q.push(\"name\"+L+\"*[*^$|!~]?=\"),a.querySelectorAll(\":enabled\").length||q.push(\":enabled\",\":disabled\"),a.querySelectorAll(\"*,:x\"),q.push(\",.*:\")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,\"div\"),s.call(a,\"[s!='']:x\"),r.push(\"!=\",P)}),q=q.length&&new RegExp(q.join(\"|\")),r=r.length&&new RegExp(r.join(\"|\")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,\"='$1']\"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error(\"Syntax error, unrecognized expression: \"+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c=\"\",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if(\"string\"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{\">\":{dir:\"parentNode\",first:!0},\" \":{dir:\"parentNode\"},\"+\":{dir:\"previousSibling\",first:!0},\"~\":{dir:\"previousSibling\"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||\"\").replace(ca,da),\"~=\"===a[2]&&(a[3]=\" \"+a[3]+\" \"),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),\"nth\"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*(\"even\"===a[3]||\"odd\"===a[3])),a[5]=+(a[7]+a[8]||\"odd\"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||\"\":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(\")\",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return\"*\"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+\" \"];return b||(b=new RegExp(\"(^|\"+L+\")\"+a+\"(\"+L+\"|$)\"))&&y(a,function(a){return b.test(\"string\"==typeof a.className&&a.className||\"undefined\"!=typeof a.getAttribute&&a.getAttribute(\"class\")||\"\")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?\"!=\"===b:b?(e+=\"\",\"=\"===b?e===c:\"!=\"===b?e!==c:\"^=\"===b?c&&0===e.indexOf(c):\"*=\"===b?c&&e.indexOf(c)>-1:\"$=\"===b?c&&e.slice(-c.length)===c:\"~=\"===b?(\" \"+e.replace(Q,\" \")+\" \").indexOf(c)>-1:\"|=\"===b?e===c||e.slice(0,c.length+1)===c+\"-\":!1):!0}},CHILD:function(a,b,c,d,e){var f=\"nth\"!==a.slice(0,3),g=\"last\"!==a.slice(-4),h=\"of-type\"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?\"nextSibling\":\"previousSibling\",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p=\"only\"===a&&!o&&\"nextSibling\"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error(\"unsupported pseudo: \"+a);return e[u]?e(b):e.length>1?(c=[a,a,\"\",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,\"$1\"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||\"\")||ga.error(\"unsupported lang: \"+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute(\"xml:lang\")||b.getAttribute(\"lang\"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+\"-\");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return\"input\"===b&&!!a.checked||\"option\"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return\"input\"===b&&\"button\"===a.type||\"button\"===b},text:function(a){var b;return\"input\"===a.nodeName.toLowerCase()&&\"text\"===a.type&&(null==(b=a.getAttribute(\"type\"))||\"text\"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+\" \"];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R,\" \")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d=\"\";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&\"parentNode\"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||\"*\",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[\" \"],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:\" \"===a[i-2].type?\"*\":\"\"})).replace(R,\"$1\"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q=\"0\",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG(\"*\",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+\" \"];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n=\"function\"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&\"ID\"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split(\"\").sort(B).join(\"\")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement(\"div\"))}),ja(function(a){return a.innerHTML=\"<a href='#'></a>\",\"#\"===a.firstChild.getAttribute(\"href\")})||ka(\"type|href|height|width\",function(a,b,c){return c?void 0:a.getAttribute(b,\"type\"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML=\"<input/>\",a.firstChild.setAttribute(\"value\",\"\"),\"\"===a.firstChild.getAttribute(\"value\")})||ka(\"value\",function(a,b,c){return c||\"input\"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute(\"disabled\")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);n.find=t,n.expr=t.selectors,n.expr[\":\"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\\w+)\\s*\\/?>(?:<\\/\\1>|)$/,w=/^.[^:#\\[\\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if(\"string\"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=\":not(\"+a+\")\"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if(\"string\"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+\" \"+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,\"string\"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\\s*(<[\\w\\W]+>)[^>]*|#([\\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if(\"string\"==typeof a){if(c=\"<\"===a[0]&&\">\"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?\"undefined\"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||\"string\"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?\"string\"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,\"parentNode\")},parentsUntil:function(a,b,c){return n.dir(a,\"parentNode\",c)},next:function(a){return D(a,\"nextSibling\")},prev:function(a){return D(a,\"previousSibling\")},nextAll:function(a){return n.dir(a,\"nextSibling\")},prevAll:function(a){return n.dir(a,\"previousSibling\")},nextUntil:function(a,b,c){return n.dir(a,\"nextSibling\",c)},prevUntil:function(a,b,c){return n.dir(a,\"previousSibling\",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return\"Until\"!==a.slice(-5)&&(d=c),d&&\"string\"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a=\"string\"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);\"function\"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&\"string\"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[[\"resolve\",\"done\",n.Callbacks(\"once memory\"),\"resolved\"],[\"reject\",\"fail\",n.Callbacks(\"once memory\"),\"rejected\"],[\"notify\",\"progress\",n.Callbacks(\"memory\")]],c=\"pending\",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+\"With\"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+\"With\"](this===e?d:this,arguments),this},e[f[0]+\"With\"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler(\"ready\"),n(l).off(\"ready\"))))}});function I(){l.removeEventListener(\"DOMContentLoaded\",I,!1),a.removeEventListener(\"load\",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),\"complete\"===l.readyState?setTimeout(n.ready):(l.addEventListener(\"DOMContentLoaded\",I,!1),a.addEventListener(\"load\",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if(\"object\"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if(\"string\"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&\"string\"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\\{[\\w\\W]*\\}|\\[[\\w\\W]*\\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d=\"data-\"+b.replace(O,\"-$1\").toLowerCase(),c=a.getAttribute(d),\"string\"==typeof c){try{c=\"true\"===c?!0:\"false\"===c?!1:\"null\"===c?null:+c+\"\"===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){\r\nreturn M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,\"hasDataAttrs\"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf(\"data-\")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,\"hasDataAttrs\",!0)}return e}return\"object\"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf(\"-\")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||\"fx\")+\"queue\",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||\"fx\";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};\"inprogress\"===e&&(e=c.shift(),d--),e&&(\"fx\"===b&&c.unshift(\"inprogress\"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+\"queueHooks\";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks(\"once memory\").add(function(){L.remove(a,[b+\"queue\",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return\"string\"!=typeof a&&(b=a,a=\"fx\",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),\"fx\"===a&&\"inprogress\"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||\"fx\",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};\"string\"!=typeof a&&(b=a,a=void 0),a=a||\"fx\";while(g--)c=L.get(f[g],a+\"queueHooks\"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\\d*\\.|)\\d+(?:[eE][+-]?\\d+|)/.source,R=[\"Top\",\"Right\",\"Bottom\",\"Left\"],S=function(a,b){return a=b||a,\"none\"===n.css(a,\"display\")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement(\"div\")),c=l.createElement(\"input\");c.setAttribute(\"type\",\"radio\"),c.setAttribute(\"checked\",\"checked\"),c.setAttribute(\"name\",\"t\"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML=\"<textarea>x</textarea>\",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U=\"undefined\";k.focusinBubbles=\"onfocusin\"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||\"\").match(E)||[\"\"],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||\"\").split(\".\").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(\".\")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||\"\").match(E)||[\"\"],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||\"\").split(\".\").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp(\"(^|\\\\.)\"+p.join(\"\\\\.(?:.*\\\\.|)\")+\"(\\\\.|$)\"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&(\"**\"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,\"events\"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,\"type\")?b.type:b,r=j.call(b,\"namespace\")?b.namespace.split(\".\"):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(\".\")>=0&&(r=q.split(\".\"),q=r.shift(),r.sort()),k=q.indexOf(\":\")<0&&\"on\"+q,b=b[n.expando]?b:new n.Event(q,\"object\"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join(\".\"),b.namespace_re=b.namespace?new RegExp(\"(^|\\\\.)\"+r.join(\"\\\\.(?:.*\\\\.|)\")+\"(\\\\.|$)\"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,\"events\")||{})[b.type]&&L.get(g,\"handle\"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,\"events\")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||\"click\"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||\"click\"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+\" \",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:\"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which\".split(\" \"),fixHooks:{},keyHooks:{props:\"char charCode key keyCode\".split(\" \"),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:\"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement\".split(\" \"),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:\"focusin\"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:\"focusout\"},click:{trigger:function(){return\"checkbox\"===this.type&&this.click&&n.nodeName(this,\"input\")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,\"a\")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:\"mouseover\",mouseleave:\"mouseout\",pointerenter:\"pointerover\",pointerleave:\"pointerout\"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:\"focusin\",blur:\"focusout\"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if(\"object\"==typeof a){\"string\"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&(\"string\"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+\".\"+d.namespace:d.origType,d.selector,d.handler),this;if(\"object\"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||\"function\"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\\w:]+)[^>]*)\\/>/gi,ba=/<([\\w:]+)/,ca=/<|&#?\\w+;/,da=/<(?:script|style|link)/i,ea=/checked\\s*(?:[^=]|=\\s*.checked.)/i,fa=/^$|\\/(?:java|ecma)script/i,ga=/^true\\/(.*)/,ha=/^\\s*<!(?:\\[CDATA\\[|--)|(?:\\]\\]|--)>\\s*$/g,ia={option:[1,\"<select multiple='multiple'>\",\"</select>\"],thead:[1,\"<table>\",\"</table>\"],col:[2,\"<table><colgroup>\",\"</colgroup></table>\"],tr:[2,\"<table><tbody>\",\"</tbody></table>\"],td:[3,\"<table><tbody><tr>\",\"</tr></tbody></table>\"],_default:[0,\"\",\"\"]};ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;function ja(a,b){return n.nodeName(a,\"table\")&&n.nodeName(11!==b.nodeType?b:b.firstChild,\"tr\")?a.getElementsByTagName(\"tbody\")[0]||a.appendChild(a.ownerDocument.createElement(\"tbody\")):a}function ka(a){return a.type=(null!==a.getAttribute(\"type\"))+\"/\"+a.type,a}function la(a){var b=ga.exec(a.type);return b?a.type=b[1]:a.removeAttribute(\"type\"),a}function ma(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],\"globalEval\",!b||L.get(b[c],\"globalEval\"))}function na(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||\"*\"):a.querySelectorAll?a.querySelectorAll(b||\"*\"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pa(a,b){var c=b.nodeName.toLowerCase();\"input\"===c&&T.test(a.type)?b.checked=a.checked:(\"input\"===c||\"textarea\"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=oa(h),f=oa(a),d=0,e=f.length;e>d;d++)pa(f[d],g[d]);if(b)if(c)for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;e>d;d++)na(f[d],g[d]);else na(a,h);return g=oa(h,\"script\"),g.length>0&&ma(g,!i&&oa(a,\"script\")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if(\"object\"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(ca.test(e)){f=f||k.appendChild(b.createElement(\"div\")),g=(ba.exec(e)||[\"\",\"\"])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa,\"<$1></$2>\")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=\"\"}else l.push(b.createTextNode(e));k.textContent=\"\",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),\"script\"),i&&ma(f),c)){j=0;while(e=f[j++])fa.test(e.type||\"\")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,\"script\")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent=\"\");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if(\"string\"==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||[\"\",\"\"])[1].toLowerCase()]){a=a.replace(aa,\"<$1></$2>\");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&\"string\"==typeof p&&!k.checkClone&&ea.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,\"script\"),ka),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,\"script\"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;g>j;j++)h=f[j],fa.test(h.type||\"\")&&!L.access(h,\"globalEval\")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,\"\")))}return this}}),n.each({appendTo:\"append\",prependTo:\"prepend\",insertBefore:\"before\",insertAfter:\"after\",replaceAll:\"replaceWith\"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qa,ra={};function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],\"display\");return e.detach(),f}function ta(a){var b=l,c=ra[a];return c||(c=sa(a,b),\"none\"!==c&&c||(qa=(qa||n(\"<iframe frameborder='0' width='0' height='0'/>\")).appendTo(b.documentElement),b=qa[0].contentDocument,b.write(),b.close(),c=sa(a,b),qa.detach()),ra[a]=c),c}var ua=/^margin/,va=new RegExp(\"^(\"+Q+\")(?!px)[a-z%]+$\",\"i\"),wa=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xa(a,b,c){var d,e,f,g,h=a.style;return c=c||wa(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(\"\"!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),va.test(g)&&ua.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+\"\":g}function ya(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement(\"div\"),f=l.createElement(\"div\");if(f.style){f.style.backgroundClip=\"content-box\",f.cloneNode(!0).style.backgroundClip=\"\",k.clearCloneStyle=\"content-box\"===f.style.backgroundClip,e.style.cssText=\"border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute\",e.appendChild(f);function g(){f.style.cssText=\"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute\",f.innerHTML=\"\",d.appendChild(e);var g=a.getComputedStyle(f,null);b=\"1%\"!==g.top,c=\"4px\"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement(\"div\"));return c.style.cssText=f.style.cssText=\"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0\",c.style.marginRight=c.style.width=\"0\",f.style.width=\"1px\",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var za=/^(none|table(?!-c[ea]).+)/,Aa=new RegExp(\"^(\"+Q+\")(.*)$\",\"i\"),Ba=new RegExp(\"^([+-])=(\"+Q+\")\",\"i\"),Ca={position:\"absolute\",visibility:\"hidden\",display:\"block\"},Da={letterSpacing:\"0\",fontWeight:\"400\"},Ea=[\"Webkit\",\"O\",\"Moz\",\"ms\"];function Fa(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Ea.length;while(e--)if(b=Ea[e]+c,b in a)return b;return d}function Ga(a,b,c){var d=Aa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||\"px\"):b}function Ha(a,b,c,d,e){for(var f=c===(d?\"border\":\"content\")?4:\"width\"===b?1:0,g=0;4>f;f+=2)\"margin\"===c&&(g+=n.css(a,c+R[f],!0,e)),d?(\"content\"===c&&(g-=n.css(a,\"padding\"+R[f],!0,e)),\"margin\"!==c&&(g-=n.css(a,\"border\"+R[f]+\"Width\",!0,e))):(g+=n.css(a,\"padding\"+R[f],!0,e),\"padding\"!==c&&(g+=n.css(a,\"border\"+R[f]+\"Width\",!0,e)));return g}function Ia(a,b,c){var d=!0,e=\"width\"===b?a.offsetWidth:a.offsetHeight,f=wa(a),g=\"border-box\"===n.css(a,\"boxSizing\",!1,f);if(0>=e||null==e){if(e=xa(a,b,f),(0>e||null==e)&&(e=a.style[b]),va.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Ha(a,b,c||(g?\"border\":\"content\"),d,f)+\"px\"}function Ja(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,\"olddisplay\"),c=d.style.display,b?(f[g]||\"none\"!==c||(d.style.display=\"\"),\"\"===d.style.display&&S(d)&&(f[g]=L.access(d,\"olddisplay\",ta(d.nodeName)))):(e=S(d),\"none\"===c&&e||L.set(d,\"olddisplay\",e?c:n.css(d,\"display\"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&\"none\"!==d.style.display&&\"\"!==d.style.display||(d.style.display=b?f[g]||\"\":\"none\"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xa(a,\"opacity\");return\"\"===c?\"1\":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{\"float\":\"cssFloat\"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fa(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&\"get\"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,\"string\"===f&&(e=Ba.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f=\"number\"),null!=c&&c===c&&(\"number\"!==f||n.cssNumber[h]||(c+=\"px\"),k.clearCloneStyle||\"\"!==c||0!==b.indexOf(\"background\")||(i[b]=\"inherit\"),g&&\"set\"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fa(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&\"get\"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xa(a,b,d)),\"normal\"===e&&b in Da&&(e=Da[b]),\"\"===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each([\"height\",\"width\"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?za.test(n.css(a,\"display\"))&&0===a.offsetWidth?n.swap(a,Ca,function(){return Ia(a,b,d)}):Ia(a,b,d):void 0},set:function(a,c,d){var e=d&&wa(a);return Ga(a,c,d?Ha(a,b,d,\"border-box\"===n.css(a,\"boxSizing\",!1,e),e):0)}}}),n.cssHooks.marginRight=ya(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:\"inline-block\"},xa,[a,\"marginRight\"]):void 0}),n.each({margin:\"\",padding:\"\",border:\"Width\"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f=\"string\"==typeof c?c.split(\" \"):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ua.test(a)||(n.cssHooks[a+b].set=Ga)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wa(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Ja(this,!0)},hide:function(){return Ja(this)},toggle:function(a){return\"boolean\"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Ka(a,b,c,d,e){return new Ka.prototype.init(a,b,c,d,e)}n.Tween=Ka,Ka.prototype={constructor:Ka,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||\"swing\",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?\"\":\"px\")},cur:function(){var a=Ka.propHooks[this.prop];return a&&a.get?a.get(this):Ka.propHooks._default.get(this)},run:function(a){var b,c=Ka.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ka.propHooks._default.set(this),this}},Ka.prototype.init.prototype=Ka.prototype,Ka.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,\"\"),b&&\"auto\"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Ka.propHooks.scrollTop=Ka.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Ka.prototype.init,n.fx.step={};var La,Ma,Na=/^(?:toggle|show|hide)$/,Oa=new RegExp(\"^(?:([+-])=|)(\"+Q+\")([a-z%]*)$\",\"i\"),Pa=/queueHooks$/,Qa=[Va],Ra={\"*\":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Oa.exec(b),f=e&&e[3]||(n.cssNumber[a]?\"\":\"px\"),g=(n.cssNumber[a]||\"px\"!==f&&+d)&&Oa.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||\".5\",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sa(){return setTimeout(function(){La=void 0}),La=n.now()}function Ta(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e[\"margin\"+c]=e[\"padding\"+c]=a;return b&&(e.opacity=e.width=a),e}function Ua(a,b,c){for(var d,e=(Ra[b]||[]).concat(Ra[\"*\"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Va(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,\"fxshow\");c.queue||(h=n._queueHooks(a,\"fx\"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,\"fx\").length||h.empty.fire()})})),1===a.nodeType&&(\"height\"in b||\"width\"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,\"display\"),k=\"none\"===j?L.get(a,\"olddisplay\")||ta(a.nodeName):j,\"inline\"===k&&\"none\"===n.css(a,\"float\")&&(o.display=\"inline-block\")),c.overflow&&(o.overflow=\"hidden\",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Na.exec(e)){if(delete b[d],f=f||\"toggle\"===e,e===(p?\"hide\":\"show\")){if(\"show\"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))\"inline\"===(\"none\"===j?ta(a.nodeName):j)&&(o.display=j);else{q?\"hidden\"in q&&(p=q.hidden):q=L.access(a,\"fxshow\",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,\"fxshow\");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ua(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start=\"width\"===d||\"height\"===d?1:0))}}function Wa(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&\"expand\"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xa(a,b,c){var d,e,f=0,g=Qa.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=La||Sa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:La||Sa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wa(k,j.opts.specialEasing);g>f;f++)if(d=Qa[f].call(j,a,k,j.opts))return d;return n.map(k,Ua,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xa,{tweener:function(a,b){n.isFunction(a)?(b=a,a=[\"*\"]):a=a.split(\" \");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Ra[c]=Ra[c]||[],Ra[c].unshift(b)},prefilter:function(a,b){b?Qa.unshift(a):Qa.push(a)}}),n.speed=function(a,b,c){var d=a&&\"object\"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:\"number\"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue=\"fx\"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css(\"opacity\",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xa(this,n.extend({},a),f);(e||L.get(this,\"finish\"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return\"string\"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||\"fx\",[]),this.each(function(){var b=!0,e=null!=a&&a+\"queueHooks\",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pa.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||\"fx\"),this.each(function(){var b,c=L.get(this),d=c[a+\"queue\"],e=c[a+\"queueHooks\"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each([\"toggle\",\"show\",\"hide\"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||\"boolean\"==typeof a?c.apply(this,arguments):this.animate(Ta(b,!0),a,d,e)}}),n.each({slideDown:Ta(\"show\"),slideUp:Ta(\"hide\"),slideToggle:Ta(\"toggle\"),fadeIn:{opacity:\"show\"},fadeOut:{opacity:\"hide\"},fadeToggle:{opacity:\"toggle\"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(La=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),La=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ma||(Ma=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Ma),Ma=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||\"fx\",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement(\"input\"),b=l.createElement(\"select\"),c=b.appendChild(l.createElement(\"option\"));a.type=\"checkbox\",k.checkOn=\"\"!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement(\"input\"),a.value=\"t\",a.type=\"radio\",k.radioValue=\"t\"===a.value}();var Ya,Za,$a=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Za:Ya)),\r\nvoid 0===c?d&&\"get\"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&\"set\"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+\"\"),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&\"radio\"===b&&n.nodeName(a,\"input\")){var c=a.value;return a.setAttribute(\"type\",b),c&&(a.value=c),b}}}}}),Za={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\\w+/g),function(a,b){var c=$a[b]||n.find.attr;$a[b]=function(a,b,d){var e,f;return d||(f=$a[b],$a[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$a[b]=f),e}});var _a=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{\"for\":\"htmlFor\",\"class\":\"className\"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&\"set\"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&\"get\"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute(\"tabindex\")||_a.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each([\"tabIndex\",\"readOnly\",\"maxLength\",\"cellSpacing\",\"cellPadding\",\"rowSpan\",\"colSpan\",\"useMap\",\"frameBorder\",\"contentEditable\"],function(){n.propFix[this.toLowerCase()]=this});var ab=/[\\t\\r\\n\\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=\"string\"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||\"\").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(\" \"+c.className+\" \").replace(ab,\" \"):\" \")){f=0;while(e=b[f++])d.indexOf(\" \"+e+\" \")<0&&(d+=e+\" \");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||\"string\"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||\"\").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(\" \"+c.className+\" \").replace(ab,\" \"):\"\")){f=0;while(e=b[f++])while(d.indexOf(\" \"+e+\" \")>=0)d=d.replace(\" \"+e+\" \",\" \");g=a?n.trim(d):\"\",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return\"boolean\"==typeof b&&\"string\"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if(\"string\"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||\"boolean\"===c)&&(this.className&&L.set(this,\"__className__\",this.className),this.className=this.className||a===!1?\"\":L.get(this,\"__className__\")||\"\")})},hasClass:function(a){for(var b=\" \"+a+\" \",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(\" \"+this[c].className+\" \").replace(ab,\" \").indexOf(b)>=0)return!0;return!1}});var bb=/\\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e=\"\":\"number\"==typeof e?e+=\"\":n.isArray(e)&&(e=n.map(e,function(a){return null==a?\"\":a+\"\"})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&\"set\"in b&&void 0!==b.set(this,e,\"value\")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&\"get\"in b&&void 0!==(c=b.get(e,\"value\"))?c:(c=e.value,\"string\"==typeof c?c.replace(bb,\"\"):null==c?\"\":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,\"value\");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f=\"select-one\"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute(\"disabled\"))||c.parentNode.disabled&&n.nodeName(c.parentNode,\"optgroup\"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each([\"radio\",\"checkbox\"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute(\"value\")?\"on\":a.value})}),n.each(\"blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu\".split(\" \"),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,\"**\"):this.off(b,a||\"**\",c)}});var cb=n.now(),db=/\\?/;n.parseJSON=function(a){return JSON.parse(a+\"\")},n.parseXML=function(a){var b,c;if(!a||\"string\"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,\"text/xml\")}catch(d){b=void 0}return(!b||b.getElementsByTagName(\"parsererror\").length)&&n.error(\"Invalid XML: \"+a),b};var eb=/#.*$/,fb=/([?&])_=[^&]*/,gb=/^(.*?):[ \\t]*([^\\r\\n]*)$/gm,hb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ib=/^(?:GET|HEAD)$/,jb=/^\\/\\//,kb=/^([\\w.+-]+:)(?:\\/\\/(?:[^\\/?#]*@|)([^\\/?#:]*)(?::(\\d+)|)|)/,lb={},mb={},nb=\"*/\".concat(\"*\"),ob=a.location.href,pb=kb.exec(ob.toLowerCase())||[];function qb(a){return function(b,c){\"string\"!=typeof b&&(c=b,b=\"*\");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])\"+\"===d[0]?(d=d.slice(1)||\"*\",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rb(a,b,c,d){var e={},f=a===mb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return\"string\"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e[\"*\"]&&g(\"*\")}function sb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while(\"*\"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader(\"Content-Type\"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+\" \"+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function ub(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if(\"*\"===f)f=i;else if(\"*\"!==i&&i!==f){if(g=j[i+\" \"+f]||j[\"* \"+f],!g)for(e in j)if(h=e.split(\" \"),h[1]===f&&(g=j[i+\" \"+h[0]]||j[\"* \"+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a[\"throws\"])b=g(b);else try{b=g(b)}catch(l){return{state:\"parsererror\",error:g?l:\"No conversion from \"+i+\" to \"+f}}}return{state:\"success\",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ob,type:\"GET\",isLocal:hb.test(pb[1]),global:!0,processData:!0,async:!0,contentType:\"application/x-www-form-urlencoded; charset=UTF-8\",accepts:{\"*\":nb,text:\"text/plain\",html:\"text/html\",xml:\"application/xml, text/xml\",json:\"application/json, text/javascript\"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:\"responseXML\",text:\"responseText\",json:\"responseJSON\"},converters:{\"* text\":String,\"text html\":!0,\"text json\":n.parseJSON,\"text xml\":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sb(sb(a,n.ajaxSettings),b):sb(n.ajaxSettings,a)},ajaxPrefilter:qb(lb),ajaxTransport:qb(mb),ajax:function(a,b){\"object\"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks(\"once memory\"),q=k.statusCode||{},r={},s={},t=0,u=\"canceled\",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gb.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||ob)+\"\").replace(eb,\"\").replace(jb,pb[1]+\"//\"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||\"*\").toLowerCase().match(E)||[\"\"],null==k.crossDomain&&(h=kb.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pb[1]&&h[2]===pb[2]&&(h[3]||(\"http:\"===h[1]?\"80\":\"443\"))===(pb[3]||(\"http:\"===pb[1]?\"80\":\"443\")))),k.data&&k.processData&&\"string\"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rb(lb,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger(\"ajaxStart\"),k.type=k.type.toUpperCase(),k.hasContent=!ib.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(db.test(d)?\"&\":\"?\")+k.data,delete k.data),k.cache===!1&&(k.url=fb.test(d)?d.replace(fb,\"$1_=\"+cb++):d+(db.test(d)?\"&\":\"?\")+\"_=\"+cb++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader(\"If-Modified-Since\",n.lastModified[d]),n.etag[d]&&v.setRequestHeader(\"If-None-Match\",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader(\"Content-Type\",k.contentType),v.setRequestHeader(\"Accept\",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+(\"*\"!==k.dataTypes[0]?\", \"+nb+\"; q=0.01\":\"\"):k.accepts[\"*\"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u=\"abort\";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rb(mb,k,b,v)){v.readyState=1,i&&m.trigger(\"ajaxSend\",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort(\"timeout\")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,\"No Transport\");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||\"\",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tb(k,v,f)),u=ub(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader(\"Last-Modified\"),w&&(n.lastModified[d]=w),w=v.getResponseHeader(\"etag\"),w&&(n.etag[d]=w)),204===a||\"HEAD\"===k.type?x=\"nocontent\":304===a?x=\"notmodified\":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x=\"error\",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+\"\",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?\"ajaxSuccess\":\"ajaxError\",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger(\"ajaxComplete\",[v,k]),--n.active||n.event.trigger(\"ajaxStop\")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,\"json\")},getScript:function(a,b){return n.get(a,void 0,b,\"script\")}}),n.each([\"get\",\"post\"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:\"GET\",dataType:\"script\",async:!1,global:!1,\"throws\":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,\"body\")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vb=/%20/g,wb=/\\[\\]$/,xb=/\\r?\\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+\"[\"+(\"object\"==typeof e?b:\"\")+\"]\",e,c,d)});else if(c||\"object\"!==n.type(b))d(a,b);else for(e in b)Ab(a+\"[\"+e+\"]\",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?\"\":b,d[d.length]=encodeURIComponent(a)+\"=\"+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join(\"&\").replace(vb,\"+\")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,\"elements\");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(\":disabled\")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xb,\"\\r\\n\")}}):{name:b.name,value:c.replace(xb,\"\\r\\n\")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bb=0,Cb={},Db={0:200,1223:204},Eb=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent(\"onunload\",function(){for(var a in Cb)Cb[a]()}),k.cors=!!Eb&&\"withCredentials\"in Eb,k.ajax=Eb=!!Eb,n.ajaxTransport(function(a){var b;return k.cors||Eb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c[\"X-Requested-With\"]||(c[\"X-Requested-With\"]=\"XMLHttpRequest\");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cb[g],b=f.onload=f.onerror=null,\"abort\"===a?f.abort():\"error\"===a?d(f.status,f.statusText):d(Db[f.status]||f.status,f.statusText,\"string\"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b(\"error\"),b=Cb[g]=b(\"abort\");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:\"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript\"},contents:{script:/(?:java|ecma)script/},converters:{\"text script\":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter(\"script\",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type=\"GET\")}),n.ajaxTransport(\"script\",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n(\"<script>\").prop({async:!0,charset:a.scriptCharset,src:a.url}).on(\"load error\",c=function(a){b.remove(),c=null,a&&e(\"error\"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fb=[],Gb=/(=)\\?(?=&|$)|\\?\\?/;n.ajaxSetup({jsonp:\"callback\",jsonpCallback:function(){var a=Fb.pop()||n.expando+\"_\"+cb++;return this[a]=!0,a}}),n.ajaxPrefilter(\"json jsonp\",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gb.test(b.url)?\"url\":\"string\"==typeof b.data&&!(b.contentType||\"\").indexOf(\"application/x-www-form-urlencoded\")&&Gb.test(b.data)&&\"data\");return h||\"jsonp\"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gb,\"$1\"+e):b.jsonp!==!1&&(b.url+=(db.test(b.url)?\"&\":\"?\")+b.jsonp+\"=\"+e),b.converters[\"script json\"]=function(){return g||n.error(e+\" was not called\"),g[0]},b.dataTypes[0]=\"json\",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),\"script\"):void 0}),n.parseHTML=function(a,b,c){if(!a||\"string\"!=typeof a)return null;\"boolean\"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hb=n.fn.load;n.fn.load=function(a,b,c){if(\"string\"!=typeof a&&Hb)return Hb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(\" \");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&\"object\"==typeof b&&(e=\"POST\"),g.length>0&&n.ajax({url:a,type:e,dataType:\"html\",data:b}).done(function(a){f=arguments,g.html(d?n(\"<div>\").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each([\"ajaxStart\",\"ajaxStop\",\"ajaxComplete\",\"ajaxError\",\"ajaxSuccess\",\"ajaxSend\"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ib=a.document.documentElement;function Jb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,\"position\"),l=n(a),m={};\"static\"===k&&(a.style.position=\"relative\"),h=l.offset(),f=n.css(a,\"top\"),i=n.css(a,\"left\"),j=(\"absolute\"===k||\"fixed\"===k)&&(f+i).indexOf(\"auto\")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),\"using\"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return\"fixed\"===n.css(c,\"position\")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],\"html\")||(d=a.offset()),d.top+=n.css(a[0],\"borderTopWidth\",!0),d.left+=n.css(a[0],\"borderLeftWidth\",!0)),{top:b.top-d.top-n.css(c,\"marginTop\",!0),left:b.left-d.left-n.css(c,\"marginLeft\",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ib;while(a&&!n.nodeName(a,\"html\")&&\"static\"===n.css(a,\"position\"))a=a.offsetParent;return a||Ib})}}),n.each({scrollLeft:\"pageXOffset\",scrollTop:\"pageYOffset\"},function(b,c){var d=\"pageYOffset\"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jb(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each([\"top\",\"left\"],function(a,b){n.cssHooks[b]=ya(k.pixelPosition,function(a,c){return c?(c=xa(a,b),va.test(c)?n(a).position()[b]+\"px\":c):void 0})}),n.each({Height:\"height\",Width:\"width\"},function(a,b){n.each({padding:\"inner\"+a,content:b,\"\":\"outer\"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||\"boolean\"!=typeof d),g=c||(d===!0||e===!0?\"margin\":\"border\");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement[\"client\"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body[\"scroll\"+a],e[\"scroll\"+a],b.body[\"offset\"+a],e[\"offset\"+a],e[\"client\"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,\"function\"==typeof define&&define.amd&&define(\"jquery\",[],function(){return n});var Kb=a.jQuery,Lb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lb),b&&a.jQuery===n&&(a.jQuery=Kb),n},typeof b===U&&(a.jQuery=a.$=n),n});\r\n"

/***/ },
/* 8 */,
/* 9 */,
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(6)(__webpack_require__(11))

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "/*!\r\n * Vue.js v2.1.3\r\n * (c) 2014-2016 Evan You\r\n * Released under the MIT License.\r\n */\r\n!function(e,t){\"object\"==typeof exports&&\"undefined\"!=typeof module?module.exports=t():\"function\"==typeof define&&define.amd?define(t):e.Vue=t()}(this,function(){\"use strict\";function e(e){return null==e?\"\":\"object\"==typeof e?JSON.stringify(e,null,2):String(e)}function t(e){var t=parseFloat(e,10);return t||0===t?t:e}function n(e,t){for(var n=Object.create(null),r=e.split(\",\"),i=0;i<r.length;i++)n[r[i]]=!0;return t?function(e){return n[e.toLowerCase()]}:function(e){return n[e]}}function r(e,t){if(e.length){var n=e.indexOf(t);if(n>-1)return e.splice(n,1)}}function i(e,t){return Ur.call(e,t)}function o(e){return\"string\"==typeof e||\"number\"==typeof e}function a(e){var t=Object.create(null);return function(n){var r=t[n];return r||(t[n]=e(n))}}function s(e,t){function n(n){var r=arguments.length;return r?r>1?e.apply(t,arguments):e.call(t,n):e.call(t)}return n._length=e.length,n}function c(e,t){t=t||0;for(var n=e.length-t,r=new Array(n);n--;)r[n]=e[n+t];return r}function l(e,t){for(var n in t)e[n]=t[n];return e}function u(e){return null!==e&&\"object\"==typeof e}function f(e){return qr.call(e)===Wr}function d(e){for(var t={},n=0;n<e.length;n++)e[n]&&l(t,e[n]);return t}function p(){}function v(e){return e.reduce(function(e,t){return e.concat(t.staticKeys||[])},[]).join(\",\")}function h(e,t){return e==t||!(!u(e)||!u(t))&&JSON.stringify(e)===JSON.stringify(t)}function m(e,t){for(var n=0;n<e.length;n++)if(h(e[n],t))return n;return-1}function g(e){var t=(e+\"\").charCodeAt(0);return 36===t||95===t}function y(e,t,n,r){Object.defineProperty(e,t,{value:n,enumerable:!!r,writable:!0,configurable:!0})}function _(e){if(!Gr.test(e)){var t=e.split(\".\");return function(e){for(var n=0;n<t.length;n++){if(!e)return;e=e[t[n]]}return e}}}function b(e){return/native code/.test(e.toString())}function $(e){di.target&&pi.push(di.target),di.target=e}function w(){di.target=pi.pop()}function x(e,t){e.__proto__=t}function C(e,t,n){for(var r=0,i=n.length;r<i;r++){var o=n[r];y(e,o,t[o])}}function k(e){if(u(e)){var t;return i(e,\"__ob__\")&&e.__ob__ instanceof yi?t=e.__ob__:gi.shouldConvert&&!oi()&&(Array.isArray(e)||f(e))&&Object.isExtensible(e)&&!e._isVue&&(t=new yi(e)),t}}function A(e,t,n,r){var i=new di,o=Object.getOwnPropertyDescriptor(e,t);if(!o||o.configurable!==!1){var a=o&&o.get,s=o&&o.set,c=k(n);Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){var t=a?a.call(e):n;return di.target&&(i.depend(),c&&c.dep.depend(),Array.isArray(t)&&T(t)),t},set:function(t){var r=a?a.call(e):n;t===r||t!==t&&r!==r||(s?s.call(e,t):n=t,c=k(t),i.notify())}})}}function O(e,t,n){if(Array.isArray(e))return e.length=Math.max(e.length,t),e.splice(t,1,n),n;if(i(e,t))return void(e[t]=n);var r=e.__ob__;if(!(e._isVue||r&&r.vmCount))return r?(A(r.value,t,n),r.dep.notify(),n):void(e[t]=n)}function S(e,t){var n=e.__ob__;e._isVue||n&&n.vmCount||i(e,t)&&(delete e[t],n&&n.dep.notify())}function T(e){for(var t=void 0,n=0,r=e.length;n<r;n++)t=e[n],t&&t.__ob__&&t.__ob__.dep.depend(),Array.isArray(t)&&T(t)}function j(e,t){if(!t)return e;for(var n,r,o,a=Object.keys(t),s=0;s<a.length;s++)n=a[s],r=e[n],o=t[n],i(e,n)?f(r)&&f(o)&&j(r,o):O(e,n,o);return e}function E(e,t){return t?e?e.concat(t):Array.isArray(t)?t:[t]:e}function N(e,t){var n=Object.create(e||null);return t?l(n,t):n}function L(e){var t=e.props;if(t){var n,r,i,o={};if(Array.isArray(t))for(n=t.length;n--;)r=t[n],\"string\"==typeof r&&(i=Vr(r),o[i]={type:null});else if(f(t))for(var a in t)r=t[a],i=Vr(a),o[i]=f(r)?r:{type:r};e.props=o}}function D(e){var t=e.directives;if(t)for(var n in t){var r=t[n];\"function\"==typeof r&&(t[n]={bind:r,update:r})}}function M(e,t,n){function r(r){var i=_i[r]||bi;u[r]=i(e[r],t[r],n,r)}L(t),D(t);var o=t.extends;if(o&&(e=\"function\"==typeof o?M(e,o.options,n):M(e,o,n)),t.mixins)for(var a=0,s=t.mixins.length;a<s;a++){var c=t.mixins[a];c.prototype instanceof Re&&(c=c.options),e=M(e,c,n)}var l,u={};for(l in e)r(l);for(l in t)i(e,l)||r(l);return u}function P(e,t,n,r){if(\"string\"==typeof n){var i=e[t],o=i[n]||i[Vr(n)]||i[zr(Vr(n))];return o}}function R(e,t,n,r){var o=t[e],a=!i(n,e),s=n[e];if(B(o.type)&&(a&&!i(o,\"default\")?s=!1:\"\"!==s&&s!==Kr(e)||(s=!0)),void 0===s){s=I(r,o,e);var c=gi.shouldConvert;gi.shouldConvert=!0,k(s),gi.shouldConvert=c}return s}function I(e,t,n){if(i(t,\"default\")){var r=t.default;return u(r),e&&e.$options.propsData&&void 0===e.$options.propsData[n]&&void 0!==e[n]?e[n]:\"function\"==typeof r&&t.type!==Function?r.call(e):r}}function F(e){var t=e&&e.toString().match(/^\\s*function (\\w+)/);return t&&t[1]}function B(e){if(!Array.isArray(e))return\"Boolean\"===F(e);for(var t=0,n=e.length;t<n;t++)if(\"Boolean\"===F(e[t]))return!0;return!1}function U(){wi.length=0,xi={},Ci=ki=!1}function H(){for(ki=!0,wi.sort(function(e,t){return e.id-t.id}),Ai=0;Ai<wi.length;Ai++){var e=wi[Ai],t=e.id;xi[t]=null,e.run()}ai&&li.devtools&&ai.emit(\"flush\"),U()}function V(e){var t=e.id;if(null==xi[t]){if(xi[t]=!0,ki){for(var n=wi.length-1;n>=0&&wi[n].id>e.id;)n--;wi.splice(Math.max(n,Ai)+1,0,e)}else wi.push(e);Ci||(Ci=!0,si(H))}}function z(e){Ti.clear(),J(e,Ti)}function J(e,t){var n,r,i=Array.isArray(e);if((i||u(e))&&Object.isExtensible(e)){if(e.__ob__){var o=e.__ob__.dep.id;if(t.has(o))return;t.add(o)}if(i)for(n=e.length;n--;)J(e[n],t);else for(r=Object.keys(e),n=r.length;n--;)J(e[r[n]],t)}}function K(e){e._watchers=[],q(e),W(e),Z(e),Y(e),Q(e)}function q(e){var t=e.$options.props;if(t){var n=e.$options.propsData||{},r=e.$options._propKeys=Object.keys(t),i=!e.$parent;gi.shouldConvert=i;for(var o=function(i){var o=r[i];A(e,o,R(o,t,n,e))},a=0;a<r.length;a++)o(a);gi.shouldConvert=!0}}function W(e){var t=e.$options.data;t=e._data=\"function\"==typeof t?t.call(e):t||{},f(t)||(t={});for(var n=Object.keys(t),r=e.$options.props,o=n.length;o--;)r&&i(r,n[o])||te(e,n[o]);k(t),t.__ob__&&t.__ob__.vmCount++}function Z(e){var t=e.$options.computed;if(t)for(var n in t){var r=t[n];\"function\"==typeof r?(ji.get=G(r,e),ji.set=p):(ji.get=r.get?r.cache!==!1?G(r.get,e):s(r.get,e):p,ji.set=r.set?s(r.set,e):p),Object.defineProperty(e,n,ji)}}function G(e,t){var n=new Si(t,e,p,{lazy:!0});return function(){return n.dirty&&n.evaluate(),di.target&&n.depend(),n.value}}function Y(e){var t=e.$options.methods;if(t)for(var n in t)e[n]=null==t[n]?p:s(t[n],e)}function Q(e){var t=e.$options.watch;if(t)for(var n in t){var r=t[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)X(e,n,r[i]);else X(e,n,r)}}function X(e,t,n){var r;f(n)&&(r=n,n=n.handler),\"string\"==typeof n&&(n=e[n]),e.$watch(t,n,r)}function ee(e){var t={};t.get=function(){return this._data},Object.defineProperty(e.prototype,\"$data\",t),e.prototype.$set=O,e.prototype.$delete=S,e.prototype.$watch=function(e,t,n){var r=this;n=n||{},n.user=!0;var i=new Si(r,e,t,n);return n.immediate&&t.call(r,i.value),function(){i.teardown()}}}function te(e,t){g(t)||Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){return e._data[t]},set:function(n){e._data[t]=n}})}function ne(e){var t=new Ei(e.tag,e.data,e.children,e.text,e.elm,e.ns,e.context,e.componentOptions);return t.isStatic=e.isStatic,t.key=e.key,t.isCloned=!0,t}function re(e){for(var t=new Array(e.length),n=0;n<e.length;n++)t[n]=ne(e[n]);return t}function ie(e,t,n,r){r+=t;var i=e.__injected||(e.__injected={});if(!i[r]){i[r]=!0;var o=e[t];o?e[t]=function(){o.apply(this,arguments),n.apply(this,arguments)}:e[t]=n}}function oe(e,t,n,r,i){var o,a,s,c,l,u;for(o in e)if(a=e[o],s=t[o],a)if(s){if(a!==s)if(Array.isArray(s)){s.length=a.length;for(var f=0;f<s.length;f++)s[f]=a[f];e[o]=s}else s.fn=a,e[o]=s}else u=\"!\"===o.charAt(0),l=u?o.slice(1):o,Array.isArray(a)?n(l,a.invoker=ae(a),u):(a.invoker||(c=a,a=e[o]={},a.fn=c,a.invoker=se(a)),n(l,a.invoker,u));else;for(o in t)e[o]||(l=\"!\"===o.charAt(0)?o.slice(1):o,r(l,t[o].invoker))}function ae(e){return function(t){for(var n=arguments,r=1===arguments.length,i=0;i<e.length;i++)r?e[i](t):e[i].apply(null,n)}}function se(e){return function(t){var n=1===arguments.length;n?e.fn(t):e.fn.apply(null,arguments)}}function ce(e,t,n){if(o(e))return[le(e)];if(Array.isArray(e)){for(var r=[],i=0,a=e.length;i<a;i++){var s=e[i],c=r[r.length-1];Array.isArray(s)?r.push.apply(r,ce(s,t,(n||\"\")+\"_\"+i)):o(s)?c&&c.text?c.text+=String(s):\"\"!==s&&r.push(le(s)):s instanceof Ei&&(s.text&&c&&c.text?c.isCloned||(c.text+=s.text):(t&&ue(s,t),s.tag&&null==s.key&&null!=n&&(s.key=\"__vlist\"+n+\"_\"+i+\"__\"),r.push(s)))}return r}}function le(e){return new Ei(void 0,void 0,void 0,String(e))}function ue(e,t){if(e.tag&&!e.ns&&(e.ns=t,e.children))for(var n=0,r=e.children.length;n<r;n++)ue(e.children[n],t)}function fe(e){return e&&e.filter(function(e){return e&&e.componentOptions})[0]}function de(e){var t=e.$options,n=t.parent;if(n&&!t.abstract){for(;n.$options.abstract&&n.$parent;)n=n.$parent;n.$children.push(e)}e.$parent=n,e.$root=n?n.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}function pe(e){e.prototype._mount=function(e,t){var n=this;return n.$el=e,n.$options.render||(n.$options.render=Ni),ve(n,\"beforeMount\"),n._watcher=new Si(n,function(){n._update(n._render(),t)},p),t=!1,null==n.$vnode&&(n._isMounted=!0,ve(n,\"mounted\")),n},e.prototype._update=function(e,t){var n=this;n._isMounted&&ve(n,\"beforeUpdate\");var r=n.$el,i=Li;Li=n;var o=n._vnode;n._vnode=e,o?n.$el=n.__patch__(o,e):n.$el=n.__patch__(n.$el,e,t),Li=i,r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el),n._isMounted&&ve(n,\"updated\")},e.prototype._updateFromParent=function(e,t,n,r){var i=this,o=!(!i.$options._renderChildren&&!r);if(i.$options._parentVnode=n,i.$vnode=n,i._vnode&&(i._vnode.parent=n),i.$options._renderChildren=r,e&&i.$options.props){gi.shouldConvert=!1;for(var a=i.$options._propKeys||[],s=0;s<a.length;s++){var c=a[s];i[c]=R(c,i.$options.props,e,i)}gi.shouldConvert=!0,i.$options.propsData=e}if(t){var l=i.$options._parentListeners;i.$options._parentListeners=t,i._updateListeners(t,l)}o&&(i.$slots=Ee(r,i._renderContext),i.$forceUpdate())},e.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){ve(e,\"beforeDestroy\"),e._isBeingDestroyed=!0;var t=e.$parent;!t||t._isBeingDestroyed||e.$options.abstract||r(t.$children,e),e._watcher&&e._watcher.teardown();for(var n=e._watchers.length;n--;)e._watchers[n].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,ve(e,\"destroyed\"),e.$off(),e.$el&&(e.$el.__vue__=null),e.__patch__(e._vnode,null)}}}function ve(e,t){var n=e.$options[t];if(n)for(var r=0,i=n.length;r<i;r++)n[r].call(e);e.$emit(\"hook:\"+t)}function he(e,t,n,r,i){if(e){var o=n.$options._base;if(u(e)&&(e=o.extend(e)),\"function\"==typeof e){if(!e.cid)if(e.resolved)e=e.resolved;else if(e=we(e,o,function(){n.$forceUpdate()}),!e)return;Pe(e),t=t||{};var a=xe(t,e);if(e.options.functional)return me(e,a,t,n,r);var s=t.on;t.on=t.nativeOn,e.options.abstract&&(t={}),ke(t);var c=e.options.name||i,l=new Ei(\"vue-component-\"+e.cid+(c?\"-\"+c:\"\"),t,void 0,void 0,void 0,void 0,n,{Ctor:e,propsData:a,listeners:s,tag:i,children:r});return l}}}function me(e,t,n,r,i){var o={},a=e.options.props;if(a)for(var c in a)o[c]=R(c,a,t);var l=e.options.render.call(null,s(Oe,{_self:Object.create(r)}),{props:o,data:n,parent:r,children:ce(i),slots:function(){return Ee(i,r)}});return l instanceof Ei&&(l.functionalContext=r,n.slot&&((l.data||(l.data={})).slot=n.slot)),l}function ge(e,t){var n=e.componentOptions,r={_isComponent:!0,parent:t,propsData:n.propsData,_componentTag:n.tag,_parentVnode:e,_parentListeners:n.listeners,_renderChildren:n.children},i=e.data.inlineTemplate;return i&&(r.render=i.render,r.staticRenderFns=i.staticRenderFns),new n.Ctor(r)}function ye(e,t){if(!e.child||e.child._isDestroyed){var n=e.child=ge(e,Li);n.$mount(t?e.elm:void 0,t)}else if(e.data.keepAlive){var r=e;_e(r,r)}}function _e(e,t){var n=t.componentOptions,r=t.child=e.child;r._updateFromParent(n.propsData,n.listeners,t,n.children)}function be(e){e.child._isMounted||(e.child._isMounted=!0,ve(e.child,\"mounted\")),e.data.keepAlive&&(e.child._inactive=!1,ve(e.child,\"activated\"))}function $e(e){e.child._isDestroyed||(e.data.keepAlive?(e.child._inactive=!0,ve(e.child,\"deactivated\")):e.child.$destroy())}function we(e,t,n){if(!e.requested){e.requested=!0;var r=e.pendingCallbacks=[n],i=!0,o=function(n){if(u(n)&&(n=t.extend(n)),e.resolved=n,!i)for(var o=0,a=r.length;o<a;o++)r[o](n)},a=function(e){},s=e(o,a);return s&&\"function\"==typeof s.then&&!e.resolved&&s.then(o,a),i=!1,e.resolved}e.pendingCallbacks.push(n)}function xe(e,t){var n=t.options.props;if(n){var r={},i=e.attrs,o=e.props,a=e.domProps;if(i||o||a)for(var s in n){var c=Kr(s);Ce(r,o,s,c,!0)||Ce(r,i,s,c)||Ce(r,a,s,c)}return r}}function Ce(e,t,n,r,o){if(t){if(i(t,n))return e[n]=t[n],o||delete t[n],!0;if(i(t,r))return e[n]=t[r],o||delete t[r],!0}return!1}function ke(e){e.hook||(e.hook={});for(var t=0;t<Mi.length;t++){var n=Mi[t],r=e.hook[n],i=Di[n];e.hook[n]=r?Ae(i,r):i}}function Ae(e,t){return function(n,r){e(n,r),t(n,r)}}function Oe(e,t,n){return t&&(Array.isArray(t)||\"object\"!=typeof t)&&(n=t,t=void 0),Se(this._self,e,t,n)}function Se(e,t,n,r){if(!n||!n.__ob__){if(!t)return Ni();if(Array.isArray(r)&&\"function\"==typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),\"string\"==typeof t){var i,o=li.getTagNamespace(t);if(li.isReservedTag(t))return new Ei(t,n,ce(r,o),void 0,void 0,o,e);if(i=P(e.$options,\"components\",t))return he(i,n,e,r,t);var a=\"foreignObject\"===t?\"xhtml\":o;return new Ei(t,n,ce(r,a),void 0,void 0,o,e)}return he(t,n,e,r)}}function Te(e){e.$vnode=null,e._vnode=null,e._staticTrees=null,e._renderContext=e.$options._parentVnode&&e.$options._parentVnode.context,e.$slots=Ee(e.$options._renderChildren,e._renderContext),e.$scopedSlots={},e.$createElement=s(Oe,e),e.$options.el&&e.$mount(e.$options.el)}function je(n){function r(e,t,n){if(Array.isArray(e))for(var r=0;r<e.length;r++)e[r]&&\"string\"!=typeof e[r]&&i(e[r],t+\"_\"+r,n);else i(e,t,n)}function i(e,t,n){e.isStatic=!0,e.key=t,e.isOnce=n}n.prototype.$nextTick=function(e){return si(e,this)},n.prototype._render=function(){var e=this,t=e.$options,n=t.render,r=t.staticRenderFns,i=t._parentVnode;if(e._isMounted)for(var o in e.$slots)e.$slots[o]=re(e.$slots[o]);i&&i.data.scopedSlots&&(e.$scopedSlots=i.data.scopedSlots),r&&!e._staticTrees&&(e._staticTrees=[]),e.$vnode=i;var a;try{a=n.call(e._renderProxy,e.$createElement)}catch(t){if(li.errorHandler)li.errorHandler.call(null,t,e);else{if(oi())throw t;console.error(t)}a=e._vnode}return a instanceof Ei||(a=Ni()),a.parent=i,a},n.prototype._h=Oe,n.prototype._s=e,n.prototype._n=t,n.prototype._e=Ni,n.prototype._q=h,n.prototype._i=m,n.prototype._m=function(e,t){var n=this._staticTrees[e];return n&&!t?Array.isArray(n)?re(n):ne(n):(n=this._staticTrees[e]=this.$options.staticRenderFns[e].call(this._renderProxy),r(n,\"__static__\"+e,!1),n)},n.prototype._o=function(e,t,n){return r(e,\"__once__\"+t+(n?\"_\"+n:\"\"),!0),e};var o=function(e){return e};n.prototype._f=function(e){return P(this.$options,\"filters\",e,!0)||o},n.prototype._l=function(e,t){var n,r,i,o,a;if(Array.isArray(e))for(n=new Array(e.length),r=0,i=e.length;r<i;r++)n[r]=t(e[r],r);else if(\"number\"==typeof e)for(n=new Array(e),r=0;r<e;r++)n[r]=t(r+1,r);else if(u(e))for(o=Object.keys(e),n=new Array(o.length),r=0,i=o.length;r<i;r++)a=o[r],n[r]=t(e[a],a,r);return n},n.prototype._t=function(e,t,n){var r=this.$scopedSlots[e];if(r)return r(n||{})||t;var i=this.$slots[e];return i||t},n.prototype._b=function(e,t,n,r){if(n)if(u(n)){Array.isArray(n)&&(n=d(n));for(var i in n)if(\"class\"===i||\"style\"===i)e[i]=n[i];else{var o=r||li.mustUseProp(t,i)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={});o[i]=n[i]}}else;return e},n.prototype._k=function(e){return li.keyCodes[e]}}function Ee(e,t){var n={};if(!e)return n;for(var r,i,o=ce(e)||[],a=[],s=0,c=o.length;s<c;s++)if(i=o[s],(i.context===t||i.functionalContext===t)&&i.data&&(r=i.data.slot)){var l=n[r]||(n[r]=[]);\"template\"===i.tag?l.push.apply(l,i.children):l.push(i)}else a.push(i);return a.length&&(1!==a.length||\" \"!==a[0].text&&!a[0].isComment)&&(n.default=a),n}function Ne(e){e._events=Object.create(null);var t=e.$options._parentListeners,n=s(e.$on,e),r=s(e.$off,e);e._updateListeners=function(t,i){oe(t,i||{},n,r,e)},t&&e._updateListeners(t)}function Le(e){e.prototype.$on=function(e,t){var n=this;return(n._events[e]||(n._events[e]=[])).push(t),n},e.prototype.$once=function(e,t){function n(){r.$off(e,n),t.apply(r,arguments)}var r=this;return n.fn=t,r.$on(e,n),r},e.prototype.$off=function(e,t){var n=this;if(!arguments.length)return n._events=Object.create(null),n;var r=n._events[e];if(!r)return n;if(1===arguments.length)return n._events[e]=null,n;for(var i,o=r.length;o--;)if(i=r[o],i===t||i.fn===t){r.splice(o,1);break}return n},e.prototype.$emit=function(e){var t=this,n=t._events[e];if(n){n=n.length>1?c(n):n;for(var r=c(arguments,1),i=0,o=n.length;i<o;i++)n[i].apply(t,r)}return t}}function De(e){e.prototype._init=function(e){var t=this;t._uid=Pi++,t._isVue=!0,e&&e._isComponent?Me(t,e):t.$options=M(Pe(t.constructor),e||{},t),t._renderProxy=t,t._self=t,de(t),Ne(t),ve(t,\"beforeCreate\"),K(t),ve(t,\"created\"),Te(t)}}function Me(e,t){var n=e.$options=Object.create(e.constructor.options);n.parent=t.parent,n.propsData=t.propsData,n._parentVnode=t._parentVnode,n._parentListeners=t._parentListeners,n._renderChildren=t._renderChildren,n._componentTag=t._componentTag,t.render&&(n.render=t.render,n.staticRenderFns=t.staticRenderFns)}function Pe(e){var t=e.options;if(e.super){var n=e.super.options,r=e.superOptions,i=e.extendOptions;n!==r&&(e.superOptions=n,i.render=t.render,i.staticRenderFns=t.staticRenderFns,i._scopeId=t._scopeId,t=e.options=M(n,i),t.name&&(t.components[t.name]=e))}return t}function Re(e){this._init(e)}function Ie(e){e.use=function(e){if(!e.installed){var t=c(arguments,1);return t.unshift(this),\"function\"==typeof e.install?e.install.apply(e,t):e.apply(null,t),e.installed=!0,this}}}function Fe(e){e.mixin=function(e){this.options=M(this.options,e)}}function Be(e){e.cid=0;var t=1;e.extend=function(e){e=e||{};var n=this,r=n.cid,i=e._Ctor||(e._Ctor={});if(i[r])return i[r];var o=e.name||n.options.name,a=function(e){this._init(e)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=t++,a.options=M(n.options,e),a.super=n,a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,li._assetTypes.forEach(function(e){a[e]=n[e]}),o&&(a.options.components[o]=a),a.superOptions=n.options,a.extendOptions=e,i[r]=a,a}}function Ue(e){li._assetTypes.forEach(function(t){e[t]=function(e,n){return n?(\"component\"===t&&f(n)&&(n.name=n.name||e,n=this.options._base.extend(n)),\"directive\"===t&&\"function\"==typeof n&&(n={bind:n,update:n}),this.options[t+\"s\"][e]=n,n):this.options[t+\"s\"][e]}})}function He(e,t){return\"string\"==typeof e?e.split(\",\").indexOf(t)>-1:e.test(t)}function Ve(e){var t={};t.get=function(){return li},Object.defineProperty(e,\"config\",t),e.util=$i,e.set=O,e.delete=S,e.nextTick=si,e.options=Object.create(null),li._assetTypes.forEach(function(t){e.options[t+\"s\"]=Object.create(null)}),e.options._base=e,l(e.options.components,Fi),Ie(e),Fe(e),Be(e),Ue(e)}function ze(e){for(var t=e.data,n=e,r=e;r.child;)r=r.child._vnode,r.data&&(t=Je(r.data,t));for(;n=n.parent;)n.data&&(t=Je(t,n.data));return Ke(t)}function Je(e,t){return{staticClass:qe(e.staticClass,t.staticClass),class:e.class?[e.class,t.class]:t.class}}function Ke(e){var t=e.class,n=e.staticClass;return n||t?qe(n,We(t)):\"\"}function qe(e,t){return e?t?e+\" \"+t:e:t||\"\"}function We(e){var t=\"\";if(!e)return t;if(\"string\"==typeof e)return e;if(Array.isArray(e)){for(var n,r=0,i=e.length;r<i;r++)e[r]&&(n=We(e[r]))&&(t+=n+\" \");return t.slice(0,-1)}if(u(e)){for(var o in e)e[o]&&(t+=o+\" \");return t.slice(0,-1)}return t}function Ze(e){return Xi(e)?\"svg\":\"math\"===e?\"math\":void 0}function Ge(e){if(!Qr)return!0;if(to(e))return!1;if(e=e.toLowerCase(),null!=no[e])return no[e];var t=document.createElement(e);return e.indexOf(\"-\")>-1?no[e]=t.constructor===window.HTMLUnknownElement||t.constructor===window.HTMLElement:no[e]=/HTMLUnknownElement/.test(t.toString())}function Ye(e){if(\"string\"==typeof e){if(e=document.querySelector(e),!e)return document.createElement(\"div\")}return e}function Qe(e,t){var n=document.createElement(e);return\"select\"!==e?n:(t.data&&t.data.attrs&&\"multiple\"in t.data.attrs&&n.setAttribute(\"multiple\",\"multiple\"),n)}function Xe(e,t){return document.createElementNS(Wi[e],t)}function et(e){return document.createTextNode(e)}function tt(e){return document.createComment(e)}function nt(e,t,n){e.insertBefore(t,n)}function rt(e,t){e.removeChild(t)}function it(e,t){e.appendChild(t)}function ot(e){return e.parentNode}function at(e){return e.nextSibling}function st(e){return e.tagName}function ct(e,t){e.textContent=t}function lt(e){return e.childNodes}function ut(e,t,n){e.setAttribute(t,n)}function ft(e,t){var n=e.data.ref;if(n){var i=e.context,o=e.child||e.elm,a=i.$refs;t?Array.isArray(a[n])?r(a[n],o):a[n]===o&&(a[n]=void 0):e.data.refInFor?Array.isArray(a[n])&&a[n].indexOf(o)<0?a[n].push(o):a[n]=[o]:a[n]=o}}function dt(e){return null==e}function pt(e){return null!=e}function vt(e,t){return e.key===t.key&&e.tag===t.tag&&e.isComment===t.isComment&&!e.data==!t.data}function ht(e,t,n){var r,i,o={};for(r=t;r<=n;++r)i=e[r].key,pt(i)&&(o[i]=r);return o}function mt(e){function t(e){return new Ei(x.tagName(e).toLowerCase(),{},[],void 0,e)}function n(e,t){function n(){0===--n.listeners&&r(e)}return n.listeners=t,n}function r(e){var t=x.parentNode(e);t&&x.removeChild(t,e)}function i(e,t,n){var r,i=e.data;if(e.isRootInsert=!n,pt(i)&&(pt(r=i.hook)&&pt(r=r.init)&&r(e),pt(r=e.child)))return l(e,t),e.elm;var o=e.children,s=e.tag;return pt(s)?(e.elm=e.ns?x.createElementNS(e.ns,s):x.createElement(s,e),u(e),a(e,o,t),pt(i)&&c(e,t)):e.isComment?e.elm=x.createComment(e.text):e.elm=x.createTextNode(e.text),e.elm}function a(e,t,n){if(Array.isArray(t))for(var r=0;r<t.length;++r)x.appendChild(e.elm,i(t[r],n,!0));else o(e.text)&&x.appendChild(e.elm,x.createTextNode(e.text))}function s(e){for(;e.child;)e=e.child._vnode;return pt(e.tag)}function c(e,t){for(var n=0;n<$.create.length;++n)$.create[n](oo,e);_=e.data.hook,pt(_)&&(_.create&&_.create(oo,e),_.insert&&t.push(e))}function l(e,t){e.data.pendingInsert&&t.push.apply(t,e.data.pendingInsert),e.elm=e.child.$el,s(e)?(c(e,t),u(e)):(ft(e),t.push(e))}function u(e){var t;pt(t=e.context)&&pt(t=t.$options._scopeId)&&x.setAttribute(e.elm,t,\"\"),pt(t=Li)&&t!==e.context&&pt(t=t.$options._scopeId)&&x.setAttribute(e.elm,t,\"\")}function f(e,t,n,r,o,a){for(;r<=o;++r)x.insertBefore(e,i(n[r],a),t)}function d(e){var t,n,r=e.data;if(pt(r))for(pt(t=r.hook)&&pt(t=t.destroy)&&t(e),t=0;t<$.destroy.length;++t)$.destroy[t](e);if(pt(t=e.children))for(n=0;n<e.children.length;++n)d(e.children[n])}function p(e,t,n,r){for(;n<=r;++n){var i=t[n];pt(i)&&(pt(i.tag)?(v(i),d(i)):x.removeChild(e,i.elm))}}function v(e,t){if(t||pt(e.data)){var i=$.remove.length+1;for(t?t.listeners+=i:t=n(e.elm,i),pt(_=e.child)&&pt(_=_._vnode)&&pt(_.data)&&v(_,t),_=0;_<$.remove.length;++_)$.remove[_](e,t);pt(_=e.data.hook)&&pt(_=_.remove)?_(e,t):t()}else r(e.elm)}function h(e,t,n,r,o){for(var a,s,c,l,u=0,d=0,v=t.length-1,h=t[0],g=t[v],y=n.length-1,_=n[0],b=n[y],$=!o;u<=v&&d<=y;)dt(h)?h=t[++u]:dt(g)?g=t[--v]:vt(h,_)?(m(h,_,r),h=t[++u],_=n[++d]):vt(g,b)?(m(g,b,r),g=t[--v],b=n[--y]):vt(h,b)?(m(h,b,r),$&&x.insertBefore(e,h.elm,x.nextSibling(g.elm)),h=t[++u],b=n[--y]):vt(g,_)?(m(g,_,r),$&&x.insertBefore(e,g.elm,h.elm),g=t[--v],_=n[++d]):(dt(a)&&(a=ht(t,u,v)),s=pt(_.key)?a[_.key]:null,dt(s)?(x.insertBefore(e,i(_,r),h.elm),_=n[++d]):(c=t[s],c.tag!==_.tag?(x.insertBefore(e,i(_,r),h.elm),_=n[++d]):(m(c,_,r),t[s]=void 0,$&&x.insertBefore(e,_.elm,h.elm),_=n[++d])));u>v?(l=dt(n[y+1])?null:n[y+1].elm,f(e,l,n,d,y,r)):d>y&&p(e,t,u,v)}function m(e,t,n,r){if(e!==t){if(t.isStatic&&e.isStatic&&t.key===e.key&&(t.isCloned||t.isOnce))return t.elm=e.elm,void(t.child=e.child);var i,o=t.data,a=pt(o);a&&pt(i=o.hook)&&pt(i=i.prepatch)&&i(e,t);var c=t.elm=e.elm,l=e.children,u=t.children;if(a&&s(t)){for(i=0;i<$.update.length;++i)$.update[i](e,t);pt(i=o.hook)&&pt(i=i.update)&&i(e,t)}dt(t.text)?pt(l)&&pt(u)?l!==u&&h(c,l,u,n,r):pt(u)?(pt(e.text)&&x.setTextContent(c,\"\"),f(c,null,u,0,u.length-1,n)):pt(l)?p(c,l,0,l.length-1):pt(e.text)&&x.setTextContent(c,\"\"):e.text!==t.text&&x.setTextContent(c,t.text),a&&pt(i=o.hook)&&pt(i=i.postpatch)&&i(e,t)}}function g(e,t,n){if(n&&e.parent)e.parent.data.pendingInsert=t;else for(var r=0;r<t.length;++r)t[r].data.hook.insert(t[r])}function y(e,t,n){t.elm=e;var r=t.tag,i=t.data,o=t.children;if(pt(i)&&(pt(_=i.hook)&&pt(_=_.init)&&_(t,!0),pt(_=t.child)))return l(t,n),!0;if(pt(r)){if(pt(o)){var s=x.childNodes(e);if(s.length){var u=!0;if(s.length!==o.length)u=!1;else for(var f=0;f<o.length;f++)if(!y(s[f],o[f],n)){u=!1;break}if(!u)return!1}else a(t,o,n)}pt(i)&&c(t,n)}return!0}var _,b,$={},w=e.modules,x=e.nodeOps;for(_=0;_<ao.length;++_)for($[ao[_]]=[],b=0;b<w.length;++b)void 0!==w[b][ao[_]]&&$[ao[_]].push(w[b][ao[_]]);return function(e,n,r,o){if(!n)return void(e&&d(e));var a,c,l=!1,u=[];if(e){var f=pt(e.nodeType);if(!f&&vt(e,n))m(e,n,u,o);else{if(f){if(1===e.nodeType&&e.hasAttribute(\"server-rendered\")&&(e.removeAttribute(\"server-rendered\"),r=!0),r&&y(e,n,u))return g(n,u,!0),e;e=t(e)}if(a=e.elm,c=x.parentNode(a),i(n,u),n.parent){for(var v=n.parent;v;)v.elm=n.elm,v=v.parent;if(s(n))for(var h=0;h<$.create.length;++h)$.create[h](oo,n.parent)}null!==c?(x.insertBefore(c,n.elm,x.nextSibling(a)),p(c,[e],0,0)):pt(e.tag)&&d(e)}}else l=!0,i(n,u);return g(n,u,l),n.elm}}function gt(e,t){if(e.data.directives||t.data.directives){var n,r,i,o=e===oo,a=yt(e.data.directives,e.context),s=yt(t.data.directives,t.context),c=[],l=[];for(n in s)r=a[n],i=s[n],r?(i.oldValue=r.value,bt(i,\"update\",t,e),i.def&&i.def.componentUpdated&&l.push(i)):(bt(i,\"bind\",t,e),i.def&&i.def.inserted&&c.push(i));if(c.length){var u=function(){c.forEach(function(n){bt(n,\"inserted\",t,e)})};o?ie(t.data.hook||(t.data.hook={}),\"insert\",u,\"dir-insert\"):u()}if(l.length&&ie(t.data.hook||(t.data.hook={}),\"postpatch\",function(){l.forEach(function(n){bt(n,\"componentUpdated\",t,e)})},\"dir-postpatch\"),!o)for(n in a)s[n]||bt(a[n],\"unbind\",e)}}function yt(e,t){var n=Object.create(null);if(!e)return n;var r,i;for(r=0;r<e.length;r++)i=e[r],i.modifiers||(i.modifiers=co),n[_t(i)]=i,i.def=P(t.$options,\"directives\",i.name,!0);return n}function _t(e){return e.rawName||e.name+\".\"+Object.keys(e.modifiers||{}).join(\".\")}function bt(e,t,n,r){var i=e.def&&e.def[t];i&&i(n.elm,e,n,r)}function $t(e,t){if(e.data.attrs||t.data.attrs){var n,r,i,o=t.elm,a=e.data.attrs||{},s=t.data.attrs||{};s.__ob__&&(s=t.data.attrs=l({},s));for(n in s)r=s[n],i=a[n],i!==r&&wt(o,n,r);for(n in a)null==s[n]&&(Ji(n)?o.removeAttributeNS(zi,Ki(n)):Hi(n)||o.removeAttribute(n))}}function wt(e,t,n){Vi(t)?qi(n)?e.removeAttribute(t):e.setAttribute(t,t):Hi(t)?e.setAttribute(t,qi(n)||\"false\"===n?\"false\":\"true\"):Ji(t)?qi(n)?e.removeAttributeNS(zi,Ki(t)):e.setAttributeNS(zi,t,n):qi(n)?e.removeAttribute(t):e.setAttribute(t,n)}function xt(e,t){var n=t.elm,r=t.data,i=e.data;if(r.staticClass||r.class||i&&(i.staticClass||i.class)){var o=ze(t),a=n._transitionClasses;a&&(o=qe(o,We(a))),o!==n._prevClass&&(n.setAttribute(\"class\",o),n._prevClass=o)}}function Ct(e,t){if(e.data.on||t.data.on){var n=t.data.on||{},r=e.data.on||{},i=t.elm._v_add||(t.elm._v_add=function(e,n,r){t.elm.addEventListener(e,n,r)}),o=t.elm._v_remove||(t.elm._v_remove=function(e,n){t.elm.removeEventListener(e,n)});oe(n,r,i,o,t.context)}}function kt(e,t){if(e.data.domProps||t.data.domProps){var n,r,i=t.elm,o=e.data.domProps||{},a=t.data.domProps||{};a.__ob__&&(a=t.data.domProps=l({},a));for(n in o)null==a[n]&&(i[n]=\"\");for(n in a)if(r=a[n],\"textContent\"!==n&&\"innerHTML\"!==n||(t.children&&(t.children.length=0),r!==o[n]))if(\"value\"===n){i._value=r;var s=null==r?\"\":String(r);i.value===s||i.composing||(i.value=s)}else i[n]=r}}function At(e){var t=Ot(e.style);return e.staticStyle?l(e.staticStyle,t):t}function Ot(e){return Array.isArray(e)?d(e):\"string\"==typeof e?ho(e):e}function St(e,t){var n,r={};if(t)for(var i=e;i.child;)i=i.child._vnode,i.data&&(n=At(i.data))&&l(r,n);(n=At(e.data))&&l(r,n);for(var o=e;o=o.parent;)o.data&&(n=At(o.data))&&l(r,n);return r}function Tt(e,t){var n=t.data,r=e.data;if(n.staticStyle||n.style||r.staticStyle||r.style){var i,o,a=t.elm,s=e.data.staticStyle,c=e.data.style||{},u=s||c,f=Ot(t.data.style)||{};t.data.style=f.__ob__?l({},f):f;var d=St(t,!0);for(o in u)null==d[o]&&go(a,o,\"\");for(o in d)i=d[o],i!==u[o]&&go(a,o,null==i?\"\":i)}}function jt(e,t){if(t&&t.trim())if(e.classList)t.indexOf(\" \")>-1?t.split(/\\s+/).forEach(function(t){return e.classList.add(t)}):e.classList.add(t);else{var n=\" \"+e.getAttribute(\"class\")+\" \";n.indexOf(\" \"+t+\" \")<0&&e.setAttribute(\"class\",(n+t).trim())}}function Et(e,t){if(t&&t.trim())if(e.classList)t.indexOf(\" \")>-1?t.split(/\\s+/).forEach(function(t){return e.classList.remove(t)}):e.classList.remove(t);else{for(var n=\" \"+e.getAttribute(\"class\")+\" \",r=\" \"+t+\" \";n.indexOf(r)>=0;)n=n.replace(r,\" \");e.setAttribute(\"class\",n.trim())}}function Nt(e){So(function(){So(e)})}function Lt(e,t){(e._transitionClasses||(e._transitionClasses=[])).push(t),jt(e,t)}function Dt(e,t){e._transitionClasses&&r(e._transitionClasses,t),Et(e,t)}function Mt(e,t,n){var r=Pt(e,t),i=r.type,o=r.timeout,a=r.propCount;if(!i)return n();var s=i===wo?ko:Oo,c=0,l=function(){e.removeEventListener(s,u),n()},u=function(t){t.target===e&&++c>=a&&l()};setTimeout(function(){c<a&&l()},o+1),e.addEventListener(s,u)}function Pt(e,t){var n,r=window.getComputedStyle(e),i=r[Co+\"Delay\"].split(\", \"),o=r[Co+\"Duration\"].split(\", \"),a=Rt(i,o),s=r[Ao+\"Delay\"].split(\", \"),c=r[Ao+\"Duration\"].split(\", \"),l=Rt(s,c),u=0,f=0;t===wo?a>0&&(n=wo,u=a,f=o.length):t===xo?l>0&&(n=xo,u=l,f=c.length):(u=Math.max(a,l),n=u>0?a>l?wo:xo:null,f=n?n===wo?o.length:c.length:0);var d=n===wo&&To.test(r[Co+\"Property\"]);return{type:n,timeout:u,propCount:f,hasTransform:d}}function Rt(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max.apply(null,t.map(function(t,n){return It(t)+It(e[n])}))}function It(e){return 1e3*Number(e.slice(0,-1))}function Ft(e){var t=e.elm;t._leaveCb&&(t._leaveCb.cancelled=!0,t._leaveCb());var n=Ut(e.data.transition);if(n&&!t._enterCb&&1===t.nodeType){var r=n.css,i=n.type,o=n.enterClass,a=n.enterActiveClass,s=n.appearClass,c=n.appearActiveClass,l=n.beforeEnter,u=n.enter,f=n.afterEnter,d=n.enterCancelled,p=n.beforeAppear,v=n.appear,h=n.afterAppear,m=n.appearCancelled,g=Li.$vnode,y=g&&g.parent?g.parent.context:Li,_=!y._isMounted||!e.isRootInsert;if(!_||v||\"\"===v){var b=_?s:o,$=_?c:a,w=_?p||l:l,x=_&&\"function\"==typeof v?v:u,C=_?h||f:f,k=_?m||d:d,A=r!==!1&&!ti,O=x&&(x._length||x.length)>1,S=t._enterCb=Ht(function(){A&&Dt(t,$),S.cancelled?(A&&Dt(t,b),k&&k(t)):C&&C(t),t._enterCb=null});e.data.show||ie(e.data.hook||(e.data.hook={}),\"insert\",function(){var n=t.parentNode,r=n&&n._pending&&n._pending[e.key];r&&r.tag===e.tag&&r.elm._leaveCb&&r.elm._leaveCb(),x&&x(t,S)},\"transition-insert\"),w&&w(t),A&&(Lt(t,b),Lt(t,$),Nt(function(){Dt(t,b),S.cancelled||O||Mt(t,i,S)})),e.data.show&&x&&x(t,S),A||O||S()}}}function Bt(e,t){function n(){m.cancelled||(e.data.show||((r.parentNode._pending||(r.parentNode._pending={}))[e.key]=e),l&&l(r),v&&(Lt(r,s),Lt(r,c),Nt(function(){Dt(r,s),m.cancelled||h||Mt(r,a,m)})),u&&u(r,m),v||h||m())}var r=e.elm;r._enterCb&&(r._enterCb.cancelled=!0,r._enterCb());var i=Ut(e.data.transition);if(!i)return t();if(!r._leaveCb&&1===r.nodeType){var o=i.css,a=i.type,s=i.leaveClass,c=i.leaveActiveClass,l=i.beforeLeave,u=i.leave,f=i.afterLeave,d=i.leaveCancelled,p=i.delayLeave,v=o!==!1&&!ti,h=u&&(u._length||u.length)>1,m=r._leaveCb=Ht(function(){r.parentNode&&r.parentNode._pending&&(r.parentNode._pending[e.key]=null),v&&Dt(r,c),m.cancelled?(v&&Dt(r,s),d&&d(r)):(t(),f&&f(r)),r._leaveCb=null});p?p(n):n()}}function Ut(e){if(e){if(\"object\"==typeof e){var t={};return e.css!==!1&&l(t,jo(e.name||\"v\")),\r\nl(t,e),t}return\"string\"==typeof e?jo(e):void 0}}function Ht(e){var t=!1;return function(){t||(t=!0,e())}}function Vt(e,t,n){var r=t.value,i=e.multiple;if(!i||Array.isArray(r)){for(var o,a,s=0,c=e.options.length;s<c;s++)if(a=e.options[s],i)o=m(r,Jt(a))>-1,a.selected!==o&&(a.selected=o);else if(h(Jt(a),r))return void(e.selectedIndex!==s&&(e.selectedIndex=s));i||(e.selectedIndex=-1)}}function zt(e,t){for(var n=0,r=t.length;n<r;n++)if(h(Jt(t[n]),e))return!1;return!0}function Jt(e){return\"_value\"in e?e._value:e.value}function Kt(e){e.target.composing=!0}function qt(e){e.target.composing=!1,Wt(e.target,\"input\")}function Wt(e,t){var n=document.createEvent(\"HTMLEvents\");n.initEvent(t,!0,!0),e.dispatchEvent(n)}function Zt(e){return!e.child||e.data&&e.data.transition?e:Zt(e.child._vnode)}function Gt(e){var t=e&&e.componentOptions;return t&&t.Ctor.options.abstract?Gt(fe(t.children)):e}function Yt(e){var t={},n=e.$options;for(var r in n.propsData)t[r]=e[r];var i=n._parentListeners;for(var o in i)t[Vr(o)]=i[o].fn;return t}function Qt(e,t){return/\\d-keep-alive$/.test(t.tag)?e(\"keep-alive\"):null}function Xt(e){for(;e=e.parent;)if(e.data.transition)return!0}function en(e){e.elm._moveCb&&e.elm._moveCb(),e.elm._enterCb&&e.elm._enterCb()}function tn(e){e.data.newPos=e.elm.getBoundingClientRect()}function nn(e){var t=e.data.pos,n=e.data.newPos,r=t.left-n.left,i=t.top-n.top;if(r||i){e.data.moved=!0;var o=e.elm.style;o.transform=o.WebkitTransform=\"translate(\"+r+\"px,\"+i+\"px)\",o.transitionDuration=\"0s\"}}function rn(e,t){var n=document.createElement(\"div\");return n.innerHTML='<div a=\"'+e+'\">',n.innerHTML.indexOf(t)>0}function on(e){return Vo=Vo||document.createElement(\"div\"),Vo.innerHTML=e,Vo.textContent}function an(e,t){return t&&(e=e.replace(Da,\"\\n\")),e.replace(Na,\"<\").replace(La,\">\").replace(Ma,\"&\").replace(Pa,'\"')}function sn(e,t){function n(t){f+=t,e=e.substring(t)}function r(){var t=e.match(Yo);if(t){var r={tagName:t[1],attrs:[],start:f};n(t[0].length);for(var i,o;!(i=e.match(Qo))&&(o=e.match(Wo));)n(o[0].length),r.attrs.push(o);if(i)return r.unarySlash=i[1],n(i[0].length),r.end=f,r}}function i(e){var n=e.tagName,r=e.unarySlash;l&&(\"p\"===s&&Qi(n)&&o(\"\",s),Yi(n)&&s===n&&o(\"\",n));for(var i=u(n)||\"html\"===n&&\"head\"===s||!!r,a=e.attrs.length,f=new Array(a),d=0;d<a;d++){var p=e.attrs[d];ra&&p[0].indexOf('\"\"')===-1&&(\"\"===p[3]&&delete p[3],\"\"===p[4]&&delete p[4],\"\"===p[5]&&delete p[5]);var v=p[3]||p[4]||p[5]||\"\";f[d]={name:p[1],value:an(v,t.shouldDecodeNewlines)}}i||(c.push({tag:n,attrs:f}),s=n,r=\"\"),t.start&&t.start(n,f,i,e.start,e.end)}function o(e,n,r,i){var o;if(null==r&&(r=f),null==i&&(i=f),n){var a=n.toLowerCase();for(o=c.length-1;o>=0&&c[o].tag.toLowerCase()!==a;o--);}else o=0;if(o>=0){for(var l=c.length-1;l>=o;l--)t.end&&t.end(c[l].tag,r,i);c.length=o,s=o&&c[o-1].tag}else\"br\"===n.toLowerCase()?t.start&&t.start(n,[],!0,r,i):\"p\"===n.toLowerCase()&&(t.start&&t.start(n,[],!1,r,i),t.end&&t.end(n,r,i))}for(var a,s,c=[],l=t.expectHTML,u=t.isUnaryTag||Zr,f=0;e;){if(a=e,s&&ja(s,t.sfc,c)){var d=s.toLowerCase(),p=Ea[d]||(Ea[d]=new RegExp(\"([\\\\s\\\\S]*?)(</\"+d+\"[^>]*>)\",\"i\")),v=0,h=e.replace(p,function(e,n,r){return v=r.length,\"script\"!==d&&\"style\"!==d&&\"noscript\"!==d&&(n=n.replace(/<!--([\\s\\S]*?)-->/g,\"$1\").replace(/<!\\[CDATA\\[([\\s\\S]*?)]]>/g,\"$1\")),t.chars&&t.chars(n),\"\"});f+=e.length-h.length,e=h,o(\"</\"+d+\">\",d,f-v,f)}else{var m=e.indexOf(\"<\");if(0===m){if(ta.test(e)){var g=e.indexOf(\"-->\");if(g>=0){n(g+3);continue}}if(na.test(e)){var y=e.indexOf(\"]>\");if(y>=0){n(y+2);continue}}var _=e.match(ea);if(_){n(_[0].length);continue}var b=e.match(Xo);if(b){var $=f;n(b[0].length),o(b[0],b[1],$,f);continue}var w=r();if(w){i(w);continue}}var x=void 0,C=void 0,k=void 0;if(m>0){for(C=e.slice(m);!(Xo.test(C)||Yo.test(C)||ta.test(C)||na.test(C)||(k=C.indexOf(\"<\",1),k<0));)m+=k,C=e.slice(m);x=e.substring(0,m),n(m)}m<0&&(x=e,e=\"\"),t.chars&&x&&t.chars(x)}if(e===a&&t.chars){t.chars(e);break}}o()}function cn(e){function t(){(a||(a=[])).push(e.slice(v,i).trim()),v=i+1}var n,r,i,o,a,s=!1,c=!1,l=!1,u=!1,f=0,d=0,p=0,v=0;for(i=0;i<e.length;i++)if(r=n,n=e.charCodeAt(i),s)39===n&&92!==r&&(s=!1);else if(c)34===n&&92!==r&&(c=!1);else if(l)96===n&&92!==r&&(l=!1);else if(u)47===n&&92!==r&&(u=!1);else if(124!==n||124===e.charCodeAt(i+1)||124===e.charCodeAt(i-1)||f||d||p)switch(n){case 34:c=!0;break;case 39:s=!0;break;case 96:l=!0;break;case 47:u=!0;break;case 40:p++;break;case 41:p--;break;case 91:d++;break;case 93:d--;break;case 123:f++;break;case 125:f--}else void 0===o?(v=i+1,o=e.slice(0,i).trim()):t();if(void 0===o?o=e.slice(0,i).trim():0!==v&&t(),a)for(i=0;i<a.length;i++)o=ln(o,a[i]);return o}function ln(e,t){var n=t.indexOf(\"(\");if(n<0)return'_f(\"'+t+'\")('+e+\")\";var r=t.slice(0,n),i=t.slice(n+1);return'_f(\"'+r+'\")('+e+\",\"+i}function un(e,t){var n=t?Fa(t):Ra;if(n.test(e)){for(var r,i,o=[],a=n.lastIndex=0;r=n.exec(e);){i=r.index,i>a&&o.push(JSON.stringify(e.slice(a,i)));var s=cn(r[1].trim());o.push(\"_s(\"+s+\")\"),a=i+r[0].length}return a<e.length&&o.push(JSON.stringify(e.slice(a))),o.join(\"+\")}}function fn(e){console.error(\"[Vue parser]: \"+e)}function dn(e,t){return e?e.map(function(e){return e[t]}).filter(function(e){return e}):[]}function pn(e,t,n){(e.props||(e.props=[])).push({name:t,value:n})}function vn(e,t,n){(e.attrs||(e.attrs=[])).push({name:t,value:n})}function hn(e,t,n,r,i,o){(e.directives||(e.directives=[])).push({name:t,rawName:n,value:r,arg:i,modifiers:o})}function mn(e,t,n,r,i){r&&r.capture&&(delete r.capture,t=\"!\"+t);var o;r&&r.native?(delete r.native,o=e.nativeEvents||(e.nativeEvents={})):o=e.events||(e.events={});var a={value:n,modifiers:r},s=o[t];Array.isArray(s)?i?s.unshift(a):s.push(a):s?o[t]=i?[a,s]:[s,a]:o[t]=a}function gn(e,t,n){var r=yn(e,\":\"+t)||yn(e,\"v-bind:\"+t);if(null!=r)return cn(r);if(n!==!1){var i=yn(e,t);if(null!=i)return JSON.stringify(i)}}function yn(e,t){var n;if(null!=(n=e.attrsMap[t]))for(var r=e.attrsList,i=0,o=r.length;i<o;i++)if(r[i].name===t){r.splice(i,1);break}return n}function _n(e){if(oa=e,ia=oa.length,sa=ca=la=0,e.indexOf(\"[\")<0||e.lastIndexOf(\"]\")<ia-1)return{exp:e,idx:null};for(;!$n();)aa=bn(),wn(aa)?Cn(aa):91===aa&&xn(aa);return{exp:e.substring(0,ca),idx:e.substring(ca+1,la)}}function bn(){return oa.charCodeAt(++sa)}function $n(){return sa>=ia}function wn(e){return 34===e||39===e}function xn(e){var t=1;for(ca=sa;!$n();)if(e=bn(),wn(e))Cn(e);else if(91===e&&t++,93===e&&t--,0===t){la=sa;break}}function Cn(e){for(var t=e;!$n()&&(e=bn(),e!==t););}function kn(e,t){ua=t.warn||fn,fa=t.getTagNamespace||Zr,da=t.mustUseProp||Zr,pa=t.isPreTag||Zr,va=dn(t.modules,\"preTransformNode\"),ha=dn(t.modules,\"transformNode\"),ma=dn(t.modules,\"postTransformNode\"),ga=t.delimiters;var n,r,i=[],o=t.preserveWhitespace!==!1,a=!1,s=!1;return sn(e,{expectHTML:t.expectHTML,isUnaryTag:t.isUnaryTag,shouldDecodeNewlines:t.shouldDecodeNewlines,start:function(e,o,c){function l(e){}var u=r&&r.ns||fa(e);ei&&\"svg\"===u&&(o=Vn(o));var f={type:1,tag:e,attrsList:o,attrsMap:Bn(o),parent:r,children:[]};u&&(f.ns=u),Hn(f)&&!oi()&&(f.forbidden=!0);for(var d=0;d<va.length;d++)va[d](f,t);if(a||(An(f),f.pre&&(a=!0)),pa(f.tag)&&(s=!0),a)On(f);else{jn(f),En(f),Dn(f),Sn(f),f.plain=!f.key&&!o.length,Tn(f),Mn(f),Pn(f);for(var p=0;p<ha.length;p++)ha[p](f,t);Rn(f)}if(n?i.length||n.if&&(f.elseif||f.else)&&(l(f),Ln(n,{exp:f.elseif,block:f})):(n=f,l(n)),r&&!f.forbidden)if(f.elseif||f.else)Nn(f,r);else if(f.slotScope){r.plain=!1;var v=f.slotTarget||\"default\";(r.scopedSlots||(r.scopedSlots={}))[v]=f}else r.children.push(f),f.parent=r;c||(r=f,i.push(f));for(var h=0;h<ma.length;h++)ma[h](f,t)},end:function(){var e=i[i.length-1],t=e.children[e.children.length-1];t&&3===t.type&&\" \"===t.text&&e.children.pop(),i.length-=1,r=i[i.length-1],e.pre&&(a=!1),pa(e.tag)&&(s=!1)},chars:function(e){if(r&&(!ei||\"textarea\"!==r.tag||r.attrsMap.placeholder!==e)&&(e=s||e.trim()?qa(e):o&&r.children.length?\" \":\"\")){var t;!a&&\" \"!==e&&(t=un(e,ga))?r.children.push({type:2,expression:t,text:e}):r.children.push({type:3,text:e})}}}),n}function An(e){null!=yn(e,\"v-pre\")&&(e.pre=!0)}function On(e){var t=e.attrsList.length;if(t)for(var n=e.attrs=new Array(t),r=0;r<t;r++)n[r]={name:e.attrsList[r].name,value:JSON.stringify(e.attrsList[r].value)};else e.pre||(e.plain=!0)}function Sn(e){var t=gn(e,\"key\");t&&(e.key=t)}function Tn(e){var t=gn(e,\"ref\");t&&(e.ref=t,e.refInFor=In(e))}function jn(e){var t;if(t=yn(e,\"v-for\")){var n=t.match(Ua);if(!n)return;e.for=n[2].trim();var r=n[1].trim(),i=r.match(Ha);i?(e.alias=i[1].trim(),e.iterator1=i[2].trim(),i[3]&&(e.iterator2=i[3].trim())):e.alias=r}}function En(e){var t=yn(e,\"v-if\");if(t)e.if=t,Ln(e,{exp:t,block:e});else{null!=yn(e,\"v-else\")&&(e.else=!0);var n=yn(e,\"v-else-if\");n&&(e.elseif=n)}}function Nn(e,t){var n=Un(t.children);n&&n.if&&Ln(n,{exp:e.elseif,block:e})}function Ln(e,t){e.conditions||(e.conditions=[]),e.conditions.push(t)}function Dn(e){var t=yn(e,\"v-once\");null!=t&&(e.once=!0)}function Mn(e){if(\"slot\"===e.tag)e.slotName=gn(e,\"name\");else{var t=gn(e,\"slot\");t&&(e.slotTarget='\"\"'===t?'\"default\"':t),\"template\"===e.tag&&(e.slotScope=yn(e,\"scope\"))}}function Pn(e){var t;(t=gn(e,\"is\"))&&(e.component=t),null!=yn(e,\"inline-template\")&&(e.inlineTemplate=!0)}function Rn(e){var t,n,r,i,o,a,s,c,l=e.attrsList;for(t=0,n=l.length;t<n;t++)if(r=i=l[t].name,o=l[t].value,Ba.test(r))if(e.hasBindings=!0,s=Fn(r),s&&(r=r.replace(Ka,\"\")),Va.test(r))r=r.replace(Va,\"\"),o=cn(o),s&&(s.prop&&(c=!0,r=Vr(r),\"innerHtml\"===r&&(r=\"innerHTML\")),s.camel&&(r=Vr(r))),c||da(e.tag,r)?pn(e,r,o):vn(e,r,o);else if(za.test(r))r=r.replace(za,\"\"),mn(e,r,o,s);else{r=r.replace(Ba,\"\");var u=r.match(Ja);u&&(a=u[1])&&(r=r.slice(0,-(a.length+1))),hn(e,r,i,o,a,s)}else vn(e,r,JSON.stringify(o))}function In(e){for(var t=e;t;){if(void 0!==t.for)return!0;t=t.parent}return!1}function Fn(e){var t=e.match(Ka);if(t){var n={};return t.forEach(function(e){n[e.slice(1)]=!0}),n}}function Bn(e){for(var t={},n=0,r=e.length;n<r;n++)t[e[n].name]=e[n].value;return t}function Un(e){for(var t=e.length;t--;)if(e[t].tag)return e[t]}function Hn(e){return\"style\"===e.tag||\"script\"===e.tag&&(!e.attrsMap.type||\"text/javascript\"===e.attrsMap.type)}function Vn(e){for(var t=[],n=0;n<e.length;n++){var r=e[n];Wa.test(r.name)||(r.name=r.name.replace(Za,\"\"),t.push(r))}return t}function zn(e,t){e&&(ya=Ga(t.staticKeys||\"\"),_a=t.isReservedTag||function(){return!1},Kn(e),qn(e,!1))}function Jn(e){return n(\"type,tag,attrsList,attrsMap,plain,parent,children,attrs\"+(e?\",\"+e:\"\"))}function Kn(e){if(e.static=Zn(e),1===e.type){if(!_a(e.tag)&&\"slot\"!==e.tag&&null==e.attrsMap[\"inline-template\"])return;for(var t=0,n=e.children.length;t<n;t++){var r=e.children[t];Kn(r),r.static||(e.static=!1)}}}function qn(e,t){if(1===e.type){if((e.static||e.once)&&(e.staticInFor=t),e.static&&e.children.length&&(1!==e.children.length||3!==e.children[0].type))return void(e.staticRoot=!0);if(e.staticRoot=!1,e.children)for(var n=0,r=e.children.length;n<r;n++)qn(e.children[n],t||!!e.for);e.conditions&&Wn(e.conditions,t)}}function Wn(e,t){for(var n=1,r=e.length;n<r;n++)qn(e[n].block,t)}function Zn(e){return 2!==e.type&&(3===e.type||!(!e.pre&&(e.hasBindings||e.if||e.for||Br(e.tag)||!_a(e.tag)||Gn(e)||!Object.keys(e).every(ya))))}function Gn(e){for(;e.parent;){if(e=e.parent,\"template\"!==e.tag)return!1;if(e.for)return!0}return!1}function Yn(e,t){var n=t?\"nativeOn:{\":\"on:{\";for(var r in e)n+='\"'+r+'\":'+Qn(r,e[r])+\",\";return n.slice(0,-1)+\"}\"}function Qn(e,t){if(t){if(Array.isArray(t))return\"[\"+t.map(function(t){return Qn(e,t)}).join(\",\")+\"]\";if(t.modifiers){var n=\"\",r=[],i=ts.test(e);for(var o in t.modifiers)es[o]?n+=es[o]:i&&ns[o]?n+=ns[o]:r.push(o);r.length&&(n=Xn(r)+n);var a=Qa.test(t.value)?t.value+\"($event)\":t.value;return\"function($event){\"+n+a+\"}\"}return Ya.test(t.value)||Qa.test(t.value)?t.value:\"function($event){\"+t.value+\"}\"}return\"function(){}\"}function Xn(e){var t=1===e.length?er(e[0]):Array.prototype.concat.apply([],e.map(er));return Array.isArray(t)?\"if(\"+t.map(function(e){return\"$event.keyCode!==\"+e}).join(\"&&\")+\")return;\":\"if($event.keyCode!==\"+t+\")return;\"}function er(e){return parseInt(e,10)||Xa[e]||\"_k(\"+JSON.stringify(e)+\")\"}function tr(e,t){e.wrapData=function(n){return\"_b(\"+n+\",'\"+e.tag+\"',\"+t.value+(t.modifiers&&t.modifiers.prop?\",true\":\"\")+\")\"}}function nr(e,t){var n=Ca,r=Ca=[],i=ka;ka=0,Aa=t,ba=t.warn||fn,$a=dn(t.modules,\"transformCode\"),wa=dn(t.modules,\"genData\"),xa=t.directives||{};var o=e?rr(e):'_h(\"div\")';return Ca=n,ka=i,{render:\"with(this){return \"+o+\"}\",staticRenderFns:r}}function rr(e){if(e.staticRoot&&!e.staticProcessed)return ir(e);if(e.once&&!e.onceProcessed)return or(e);if(e.for&&!e.forProcessed)return cr(e);if(e.if&&!e.ifProcessed)return ar(e);if(\"template\"!==e.tag||e.slotTarget){if(\"slot\"===e.tag)return gr(e);var t;if(e.component)t=yr(e.component,e);else{var n=e.plain?void 0:lr(e),r=e.inlineTemplate?null:vr(e);t=\"_h('\"+e.tag+\"'\"+(n?\",\"+n:\"\")+(r?\",\"+r:\"\")+\")\"}for(var i=0;i<$a.length;i++)t=$a[i](e,t);return t}return vr(e)||\"void 0\"}function ir(e){return e.staticProcessed=!0,Ca.push(\"with(this){return \"+rr(e)+\"}\"),\"_m(\"+(Ca.length-1)+(e.staticInFor?\",true\":\"\")+\")\"}function or(e){if(e.onceProcessed=!0,e.if&&!e.ifProcessed)return ar(e);if(e.staticInFor){for(var t=\"\",n=e.parent;n;){if(n.for){t=n.key;break}n=n.parent}return t?\"_o(\"+rr(e)+\",\"+ka++ +(t?\",\"+t:\"\")+\")\":rr(e)}return ir(e)}function ar(e){return e.ifProcessed=!0,sr(e.conditions)}function sr(e){function t(e){return e.once?or(e):rr(e)}if(!e.length)return\"_e()\";var n=e.shift();return n.exp?\"(\"+n.exp+\")?\"+t(n.block)+\":\"+sr(e):\"\"+t(n.block)}function cr(e){var t=e.for,n=e.alias,r=e.iterator1?\",\"+e.iterator1:\"\",i=e.iterator2?\",\"+e.iterator2:\"\";return e.forProcessed=!0,\"_l((\"+t+\"),function(\"+n+r+i+\"){return \"+rr(e)+\"})\"}function lr(e){var t=\"{\",n=ur(e);n&&(t+=n+\",\"),e.key&&(t+=\"key:\"+e.key+\",\"),e.ref&&(t+=\"ref:\"+e.ref+\",\"),e.refInFor&&(t+=\"refInFor:true,\"),e.component&&(t+='tag:\"'+e.tag+'\",');for(var r=0;r<wa.length;r++)t+=wa[r](e);if(e.attrs&&(t+=\"attrs:{\"+_r(e.attrs)+\"},\"),e.props&&(t+=\"domProps:{\"+_r(e.props)+\"},\"),e.events&&(t+=Yn(e.events)+\",\"),e.nativeEvents&&(t+=Yn(e.nativeEvents,!0)+\",\"),e.slotTarget&&(t+=\"slot:\"+e.slotTarget+\",\"),e.scopedSlots&&(t+=dr(e.scopedSlots)+\",\"),e.inlineTemplate){var i=fr(e);i&&(t+=i+\",\")}return t=t.replace(/,$/,\"\")+\"}\",e.wrapData&&(t=e.wrapData(t)),t}function ur(e){var t=e.directives;if(t){var n,r,i,o,a=\"directives:[\",s=!1;for(n=0,r=t.length;n<r;n++){i=t[n],o=!0;var c=xa[i.name]||rs[i.name];c&&(o=!!c(e,i,ba)),o&&(s=!0,a+='{name:\"'+i.name+'\",rawName:\"'+i.rawName+'\"'+(i.value?\",value:(\"+i.value+\"),expression:\"+JSON.stringify(i.value):\"\")+(i.arg?',arg:\"'+i.arg+'\"':\"\")+(i.modifiers?\",modifiers:\"+JSON.stringify(i.modifiers):\"\")+\"},\")}return s?a.slice(0,-1)+\"]\":void 0}}function fr(e){var t=e.children[0];if(1===t.type){var n=nr(t,Aa);return\"inlineTemplate:{render:function(){\"+n.render+\"},staticRenderFns:[\"+n.staticRenderFns.map(function(e){return\"function(){\"+e+\"}\"}).join(\",\")+\"]}\"}}function dr(e){return\"scopedSlots:{\"+Object.keys(e).map(function(t){return pr(t,e[t])}).join(\",\")+\"}\"}function pr(e,t){return e+\":function(\"+String(t.attrsMap.scope)+\"){return \"+(\"template\"===t.tag?vr(t)||\"void 0\":rr(t))+\"}\"}function vr(e){if(e.children.length)return\"[\"+e.children.map(hr).join(\",\")+\"]\"}function hr(e){return 1===e.type?rr(e):mr(e)}function mr(e){return 2===e.type?e.expression:br(JSON.stringify(e.text))}function gr(e){var t=e.slotName||'\"default\"',n=vr(e);return\"_t(\"+t+(n?\",\"+n:\"\")+(e.attrs?(n?\"\":\",null\")+\",{\"+e.attrs.map(function(e){return Vr(e.name)+\":\"+e.value}).join(\",\")+\"}\":\"\")+\")\"}function yr(e,t){var n=t.inlineTemplate?null:vr(t);return\"_h(\"+e+\",\"+lr(t)+(n?\",\"+n:\"\")+\")\"}function _r(e){for(var t=\"\",n=0;n<e.length;n++){var r=e[n];t+='\"'+r.name+'\":'+br(r.value)+\",\"}return t.slice(0,-1)}function br(e){return e.replace(/\\u2028/g,\"\\\\u2028\").replace(/\\u2029/g,\"\\\\u2029\")}function $r(e,t){var n=kn(e.trim(),t);zn(n,t);var r=nr(n,t);return{ast:n,render:r.render,staticRenderFns:r.staticRenderFns}}function wr(e,t){var n=(t.warn||fn,yn(e,\"class\"));n&&(e.staticClass=JSON.stringify(n));var r=gn(e,\"class\",!1);r&&(e.classBinding=r)}function xr(e){var t=\"\";return e.staticClass&&(t+=\"staticClass:\"+e.staticClass+\",\"),e.classBinding&&(t+=\"class:\"+e.classBinding+\",\"),t}function Cr(e,t){var n=(t.warn||fn,yn(e,\"style\"));n&&(e.staticStyle=JSON.stringify(ho(n)));var r=gn(e,\"style\",!1);r&&(e.styleBinding=r)}function kr(e){var t=\"\";return e.staticStyle&&(t+=\"staticStyle:\"+e.staticStyle+\",\"),e.styleBinding&&(t+=\"style:(\"+e.styleBinding+\"),\"),t}function Ar(e,t,n){Oa=n;var r=t.value,i=t.modifiers,o=e.tag,a=e.attrsMap.type;return\"select\"===o?jr(e,r,i):\"input\"===o&&\"checkbox\"===a?Or(e,r,i):\"input\"===o&&\"radio\"===a?Sr(e,r,i):Tr(e,r,i),!0}function Or(e,t,n){var r=n&&n.number,i=gn(e,\"value\")||\"null\",o=gn(e,\"true-value\")||\"true\",a=gn(e,\"false-value\")||\"false\";pn(e,\"checked\",\"Array.isArray(\"+t+\")?_i(\"+t+\",\"+i+\")>-1:_q(\"+t+\",\"+o+\")\"),mn(e,\"change\",\"var $$a=\"+t+\",$$el=$event.target,$$c=$$el.checked?(\"+o+\"):(\"+a+\");if(Array.isArray($$a)){var $$v=\"+(r?\"_n(\"+i+\")\":i)+\",$$i=_i($$a,$$v);if($$c){$$i<0&&(\"+t+\"=$$a.concat($$v))}else{$$i>-1&&(\"+t+\"=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{\"+t+\"=$$c}\",null,!0)}function Sr(e,t,n){var r=n&&n.number,i=gn(e,\"value\")||\"null\";i=r?\"_n(\"+i+\")\":i,pn(e,\"checked\",\"_q(\"+t+\",\"+i+\")\"),mn(e,\"change\",Er(t,i),null,!0)}function Tr(e,t,n){var r=e.attrsMap.type,i=n||{},o=i.lazy,a=i.number,s=i.trim,c=o||ei&&\"range\"===r?\"change\":\"input\",l=!o&&\"range\"!==r,u=\"input\"===e.tag||\"textarea\"===e.tag,f=u?\"$event.target.value\"+(s?\".trim()\":\"\"):s?\"(typeof $event === 'string' ? $event.trim() : $event)\":\"$event\";f=a||\"number\"===r?\"_n(\"+f+\")\":f;var d=Er(t,f);u&&l&&(d=\"if($event.target.composing)return;\"+d),pn(e,\"value\",u?\"_s(\"+t+\")\":\"(\"+t+\")\"),mn(e,c,d,null,!0)}function jr(e,t,n){var r=n&&n.number,i='Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = \"_value\" in o ? o._value : o.value;return '+(r?\"_n(val)\":\"val\")+\"})\"+(null==e.attrsMap.multiple?\"[0]\":\"\"),o=Er(t,i);mn(e,\"change\",o,null,!0)}function Er(e,t){var n=_n(e);return null===n.idx?e+\"=\"+t:\"var $$exp = \"+n.exp+\", $$idx = \"+n.idx+\";if (!Array.isArray($$exp)){\"+e+\"=\"+t+\"}else{$$exp.splice($$idx, 1, \"+t+\")}\"}function Nr(e,t){t.value&&pn(e,\"textContent\",\"_s(\"+t.value+\")\")}function Lr(e,t){t.value&&pn(e,\"innerHTML\",\"_s(\"+t.value+\")\")}function Dr(e,t){return t=t?l(l({},ls),t):ls,$r(e,t)}function Mr(e,t,n){var r=(t&&t.warn||ui,t&&t.delimiters?String(t.delimiters)+e:e);if(cs[r])return cs[r];var i={},o=Dr(e,t);i.render=Pr(o.render);var a=o.staticRenderFns.length;i.staticRenderFns=new Array(a);for(var s=0;s<a;s++)i.staticRenderFns[s]=Pr(o.staticRenderFns[s]);return cs[r]=i}function Pr(e){try{return new Function(e)}catch(e){return p}}function Rr(e){if(e.outerHTML)return e.outerHTML;var t=document.createElement(\"div\");return t.appendChild(e.cloneNode(!0)),t.innerHTML}var Ir,Fr,Br=n(\"slot,component\",!0),Ur=Object.prototype.hasOwnProperty,Hr=/-(\\w)/g,Vr=a(function(e){return e.replace(Hr,function(e,t){return t?t.toUpperCase():\"\"})}),zr=a(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}),Jr=/([^-])([A-Z])/g,Kr=a(function(e){return e.replace(Jr,\"$1-$2\").replace(Jr,\"$1-$2\").toLowerCase()}),qr=Object.prototype.toString,Wr=\"[object Object]\",Zr=function(){return!1},Gr=/[^\\w.$]/,Yr=\"__proto__\"in{},Qr=\"undefined\"!=typeof window&&\"[object Object]\"!==Object.prototype.toString.call(window),Xr=Qr&&window.navigator.userAgent.toLowerCase(),ei=Xr&&/msie|trident/.test(Xr),ti=Xr&&Xr.indexOf(\"msie 9.0\")>0,ni=Xr&&Xr.indexOf(\"edge/\")>0,ri=Xr&&Xr.indexOf(\"android\")>0,ii=Xr&&/iphone|ipad|ipod|ios/.test(Xr),oi=function(){return void 0===Ir&&(Ir=!Qr&&\"undefined\"!=typeof global&&\"server\"===global.process.env.VUE_ENV),Ir},ai=Qr&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__,si=function(){function e(){r=!1;var e=n.slice(0);n.length=0;for(var t=0;t<e.length;t++)e[t]()}var t,n=[],r=!1;if(\"undefined\"!=typeof Promise&&b(Promise)){var i=Promise.resolve();t=function(){i.then(e),ii&&setTimeout(p)}}else if(\"undefined\"==typeof MutationObserver||!b(MutationObserver)&&\"[object MutationObserverConstructor]\"!==MutationObserver.toString())t=function(){setTimeout(e,0)};else{var o=1,a=new MutationObserver(e),s=document.createTextNode(String(o));a.observe(s,{characterData:!0}),t=function(){o=(o+1)%2,s.data=String(o)}}return function(e,i){var o;if(n.push(function(){e&&e.call(i),o&&o(i)}),r||(r=!0,t()),!e&&\"undefined\"!=typeof Promise)return new Promise(function(e){o=e})}}();Fr=\"undefined\"!=typeof Set&&b(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return void 0!==this.set[e]},e.prototype.add=function(e){this.set[e]=1},e.prototype.clear=function(){this.set=Object.create(null)},e}();var ci,li={optionMergeStrategies:Object.create(null),silent:!1,devtools:!1,errorHandler:null,ignoredElements:null,keyCodes:Object.create(null),isReservedTag:Zr,isUnknownElement:Zr,getTagNamespace:p,mustUseProp:Zr,_assetTypes:[\"component\",\"directive\",\"filter\"],_lifecycleHooks:[\"beforeCreate\",\"created\",\"beforeMount\",\"mounted\",\"beforeUpdate\",\"updated\",\"beforeDestroy\",\"destroyed\",\"activated\",\"deactivated\"],_maxUpdateCount:100},ui=p,fi=0,di=function(){this.id=fi++,this.subs=[]};di.prototype.addSub=function(e){this.subs.push(e)},di.prototype.removeSub=function(e){r(this.subs,e)},di.prototype.depend=function(){di.target&&di.target.addDep(this)},di.prototype.notify=function(){for(var e=this.subs.slice(),t=0,n=e.length;t<n;t++)e[t].update()},di.target=null;var pi=[],vi=Array.prototype,hi=Object.create(vi);[\"push\",\"pop\",\"shift\",\"unshift\",\"splice\",\"sort\",\"reverse\"].forEach(function(e){var t=vi[e];y(hi,e,function(){for(var n=arguments,r=arguments.length,i=new Array(r);r--;)i[r]=n[r];var o,a=t.apply(this,i),s=this.__ob__;switch(e){case\"push\":o=i;break;case\"unshift\":o=i;break;case\"splice\":o=i.slice(2)}return o&&s.observeArray(o),s.dep.notify(),a})});var mi=Object.getOwnPropertyNames(hi),gi={shouldConvert:!0,isSettingProps:!1},yi=function(e){if(this.value=e,this.dep=new di,this.vmCount=0,y(e,\"__ob__\",this),Array.isArray(e)){var t=Yr?x:C;t(e,hi,mi),this.observeArray(e)}else this.walk(e)};yi.prototype.walk=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)A(e,t[n],e[t[n]])},yi.prototype.observeArray=function(e){for(var t=0,n=e.length;t<n;t++)k(e[t])};var _i=li.optionMergeStrategies;_i.data=function(e,t,n){return n?e||t?function(){var r=\"function\"==typeof t?t.call(n):t,i=\"function\"==typeof e?e.call(n):void 0;return r?j(r,i):i}:void 0:t?\"function\"!=typeof t?e:e?function(){return j(t.call(this),e.call(this))}:t:e},li._lifecycleHooks.forEach(function(e){_i[e]=E}),li._assetTypes.forEach(function(e){_i[e+\"s\"]=N}),_i.watch=function(e,t){if(!t)return e;if(!e)return t;var n={};l(n,e);for(var r in t){var i=n[r],o=t[r];i&&!Array.isArray(i)&&(i=[i]),n[r]=i?i.concat(o):[o]}return n},_i.props=_i.methods=_i.computed=function(e,t){if(!t)return e;if(!e)return t;var n=Object.create(null);return l(n,e),l(n,t),n};var bi=function(e,t){return void 0===t?e:t},$i=Object.freeze({defineReactive:A,_toString:e,toNumber:t,makeMap:n,isBuiltInTag:Br,remove:r,hasOwn:i,isPrimitive:o,cached:a,camelize:Vr,capitalize:zr,hyphenate:Kr,bind:s,toArray:c,extend:l,isObject:u,isPlainObject:f,toObject:d,noop:p,no:Zr,genStaticKeys:v,looseEqual:h,looseIndexOf:m,isReserved:g,def:y,parsePath:_,hasProto:Yr,inBrowser:Qr,UA:Xr,isIE:ei,isIE9:ti,isEdge:ni,isAndroid:ri,isIOS:ii,isServerRendering:oi,devtools:ai,nextTick:si,get _Set(){return Fr},mergeOptions:M,resolveAsset:P,warn:ui,formatComponentName:ci,validateProp:R}),wi=[],xi={},Ci=!1,ki=!1,Ai=0,Oi=0,Si=function(e,t,n,r){void 0===r&&(r={}),this.vm=e,e._watchers.push(this),this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.expression=t.toString(),this.cb=n,this.id=++Oi,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new Fr,this.newDepIds=new Fr,\"function\"==typeof t?this.getter=t:(this.getter=_(t),this.getter||(this.getter=function(){})),this.value=this.lazy?void 0:this.get()};Si.prototype.get=function(){$(this);var e=this.getter.call(this.vm,this.vm);return this.deep&&z(e),w(),this.cleanupDeps(),e},Si.prototype.addDep=function(e){var t=e.id;this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this))},Si.prototype.cleanupDeps=function(){for(var e=this,t=this.deps.length;t--;){var n=e.deps[t];e.newDepIds.has(n.id)||n.removeSub(e)}var r=this.depIds;this.depIds=this.newDepIds,this.newDepIds=r,this.newDepIds.clear(),r=this.deps,this.deps=this.newDeps,this.newDeps=r,this.newDeps.length=0},Si.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():V(this)},Si.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||u(e)||this.deep){var t=this.value;if(this.value=e,this.user)try{this.cb.call(this.vm,e,t)}catch(e){if(!li.errorHandler)throw e;li.errorHandler.call(null,e,this.vm)}else this.cb.call(this.vm,e,t)}}},Si.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Si.prototype.depend=function(){for(var e=this,t=this.deps.length;t--;)e.deps[t].depend()},Si.prototype.teardown=function(){var e=this;if(this.active){this.vm._isBeingDestroyed||this.vm._vForRemoving||r(this.vm._watchers,this);for(var t=this.deps.length;t--;)e.deps[t].removeSub(e);this.active=!1}};var Ti=new Fr,ji={enumerable:!0,configurable:!0,get:p,set:p},Ei=function(e,t,n,r,i,o,a,s){this.tag=e,this.data=t,this.children=n,this.text=r,this.elm=i,this.ns=o,this.context=a,this.functionalContext=void 0,this.key=t&&t.key,this.componentOptions=s,this.child=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1},Ni=function(){var e=new Ei;return e.text=\"\",e.isComment=!0,e},Li=null,Di={init:ye,prepatch:_e,insert:be,destroy:$e},Mi=Object.keys(Di),Pi=0;De(Re),ee(Re),Le(Re),pe(Re),je(Re);var Ri=[String,RegExp],Ii={name:\"keep-alive\",abstract:!0,props:{include:Ri,exclude:Ri},created:function(){this.cache=Object.create(null)},render:function(){var e=fe(this.$slots.default);if(e&&e.componentOptions){var t=e.componentOptions,n=t.Ctor.options.name||t.tag;if(n&&(this.include&&!He(this.include,n)||this.exclude&&He(this.exclude,n)))return e;var r=null==e.key?t.Ctor.cid+(t.tag?\"::\"+t.tag:\"\"):e.key;this.cache[r]?e.child=this.cache[r].child:this.cache[r]=e,e.data.keepAlive=!0}return e},destroyed:function(){var e=this;for(var t in this.cache){var n=e.cache[t];ve(n.child,\"deactivated\"),n.child.$destroy()}}},Fi={KeepAlive:Ii};Ve(Re),Object.defineProperty(Re.prototype,\"$isServer\",{get:oi}),Re.version=\"2.1.3\";var Bi,Ui=function(e,t){return\"value\"===t&&(\"input\"===e||\"textarea\"===e||\"option\"===e)||\"selected\"===t&&\"option\"===e||\"checked\"===t&&\"input\"===e||\"muted\"===t&&\"video\"===e},Hi=n(\"contenteditable,draggable,spellcheck\"),Vi=n(\"allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible\"),zi=\"http://www.w3.org/1999/xlink\",Ji=function(e){return\":\"===e.charAt(5)&&\"xlink\"===e.slice(0,5)},Ki=function(e){return Ji(e)?e.slice(6,e.length):\"\"},qi=function(e){return null==e||e===!1},Wi={svg:\"http://www.w3.org/2000/svg\",math:\"http://www.w3.org/1998/Math/MathML\",xhtml:\"http://www.w3.org/1999/xhtml\"},Zi=n(\"html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template\"),Gi=n(\"area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr\",!0),Yi=n(\"colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source\",!0),Qi=n(\"address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track\",!0),Xi=n(\"svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font,font-face,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view\",!0),eo=function(e){return\"pre\"===e},to=function(e){return Zi(e)||Xi(e)},no=Object.create(null),ro=Object.freeze({createElement:Qe,createElementNS:Xe,createTextNode:et,createComment:tt,insertBefore:nt,removeChild:rt,appendChild:it,parentNode:ot,nextSibling:at,tagName:st,setTextContent:ct,childNodes:lt,setAttribute:ut}),io={create:function(e,t){ft(t)},update:function(e,t){e.data.ref!==t.data.ref&&(ft(e,!0),ft(t))},destroy:function(e){ft(e,!0)}},oo=new Ei(\"\",{},[]),ao=[\"create\",\"update\",\"remove\",\"destroy\"],so={create:gt,update:gt,destroy:function(e){gt(e,oo)}},co=Object.create(null),lo=[io,so],uo={create:$t,update:$t},fo={create:xt,update:xt},po={create:Ct,update:Ct},vo={create:kt,update:kt},ho=a(function(e){var t={},n=e.indexOf(\"background\")>=0,r=n?/;(?![^(]*\\))/g:\";\",i=n?/:(.+)/:\":\";return e.split(r).forEach(function(e){if(e){var n=e.split(i);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}),mo=/^--/,go=function(e,t,n){mo.test(t)?e.style.setProperty(t,n):e.style[_o(t)]=n},yo=[\"Webkit\",\"Moz\",\"ms\"],_o=a(function(e){if(Bi=Bi||document.createElement(\"div\"),e=Vr(e),\"filter\"!==e&&e in Bi.style)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<yo.length;n++){var r=yo[n]+t;if(r in Bi.style)return r}}),bo={create:Tt,update:Tt},$o=Qr&&!ti,wo=\"transition\",xo=\"animation\",Co=\"transition\",ko=\"transitionend\",Ao=\"animation\",Oo=\"animationend\";$o&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(Co=\"WebkitTransition\",ko=\"webkitTransitionEnd\"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(Ao=\"WebkitAnimation\",Oo=\"webkitAnimationEnd\"));var So=Qr&&window.requestAnimationFrame||setTimeout,To=/\\b(transform|all)(,|$)/,jo=a(function(e){return{enterClass:e+\"-enter\",leaveClass:e+\"-leave\",appearClass:e+\"-enter\",enterActiveClass:e+\"-enter-active\",leaveActiveClass:e+\"-leave-active\",appearActiveClass:e+\"-enter-active\"}}),Eo=Qr?{create:function(e,t){t.data.show||Ft(t)},remove:function(e,t){e.data.show?t():Bt(e,t)}}:{},No=[uo,fo,po,vo,bo,Eo],Lo=No.concat(lo),Do=mt({nodeOps:ro,modules:Lo});ti&&document.addEventListener(\"selectionchange\",function(){var e=document.activeElement;e&&e.vmodel&&Wt(e,\"input\")});var Mo={inserted:function(e,t,n){if(\"select\"===n.tag){var r=function(){Vt(e,t,n.context)};r(),(ei||ni)&&setTimeout(r,0)}else\"textarea\"!==n.tag&&\"text\"!==e.type||t.modifiers.lazy||(ri||(e.addEventListener(\"compositionstart\",Kt),e.addEventListener(\"compositionend\",qt)),ti&&(e.vmodel=!0))},componentUpdated:function(e,t,n){if(\"select\"===n.tag){Vt(e,t,n.context);var r=e.multiple?t.value.some(function(t){return zt(t,e.options)}):t.value!==t.oldValue&&zt(t.value,e.options);r&&Wt(e,\"change\")}}},Po={bind:function(e,t,n){var r=t.value;n=Zt(n);var i=n.data&&n.data.transition;r&&i&&!ti&&Ft(n);var o=\"none\"===e.style.display?\"\":e.style.display;e.style.display=r?o:\"none\",e.__vOriginalDisplay=o},update:function(e,t,n){var r=t.value,i=t.oldValue;if(r!==i){n=Zt(n);var o=n.data&&n.data.transition;o&&!ti?r?(Ft(n),e.style.display=e.__vOriginalDisplay):Bt(n,function(){e.style.display=\"none\"}):e.style.display=r?e.__vOriginalDisplay:\"none\"}}},Ro={model:Mo,show:Po},Io={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterActiveClass:String,leaveActiveClass:String,\r\nappearClass:String,appearActiveClass:String},Fo={name:\"transition\",props:Io,abstract:!0,render:function(e){var t=this,n=this.$slots.default;if(n&&(n=n.filter(function(e){return e.tag}),n.length)){var r=this.mode,i=n[0];if(Xt(this.$vnode))return i;var o=Gt(i);if(!o)return i;if(this._leaving)return Qt(e,i);var a=o.key=null==o.key||o.isStatic?\"__v\"+(o.tag+this._uid)+\"__\":o.key,s=(o.data||(o.data={})).transition=Yt(this),c=this._vnode,u=Gt(c);if(o.data.directives&&o.data.directives.some(function(e){return\"show\"===e.name})&&(o.data.show=!0),u&&u.data&&u.key!==a){var f=u.data.transition=l({},s);if(\"out-in\"===r)return this._leaving=!0,ie(f,\"afterLeave\",function(){t._leaving=!1,t.$forceUpdate()},a),Qt(e,i);if(\"in-out\"===r){var d,p=function(){d()};ie(s,\"afterEnter\",p,a),ie(s,\"enterCancelled\",p,a),ie(f,\"delayLeave\",function(e){d=e},a)}}return i}}},Bo=l({tag:String,moveClass:String},Io);delete Bo.mode;var Uo={props:Bo,render:function(e){for(var t=this.tag||this.$vnode.data.tag||\"span\",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],o=this.children=[],a=Yt(this),s=0;s<i.length;s++){var c=i[s];c.tag&&null!=c.key&&0!==String(c.key).indexOf(\"__vlist\")&&(o.push(c),n[c.key]=c,(c.data||(c.data={})).transition=a)}if(r){for(var l=[],u=[],f=0;f<r.length;f++){var d=r[f];d.data.transition=a,d.data.pos=d.elm.getBoundingClientRect(),n[d.key]?l.push(d):u.push(d)}this.kept=e(t,null,l),this.removed=u}return e(t,null,o)},beforeUpdate:function(){this.__patch__(this._vnode,this.kept,!1,!0),this._vnode=this.kept},updated:function(){var e=this.prevChildren,t=this.moveClass||(this.name||\"v\")+\"-move\";if(e.length&&this.hasMove(e[0].elm,t)){e.forEach(en),e.forEach(tn),e.forEach(nn);document.body.offsetHeight;e.forEach(function(e){if(e.data.moved){var n=e.elm,r=n.style;Lt(n,t),r.transform=r.WebkitTransform=r.transitionDuration=\"\",n.addEventListener(ko,n._moveCb=function e(r){r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(ko,e),n._moveCb=null,Dt(n,t))})}})}},methods:{hasMove:function(e,t){if(!$o)return!1;if(null!=this._hasMove)return this._hasMove;Lt(e,t);var n=Pt(e);return Dt(e,t),this._hasMove=n.hasTransform}}},Ho={Transition:Fo,TransitionGroup:Uo};Re.config.isUnknownElement=Ge,Re.config.isReservedTag=to,Re.config.getTagNamespace=Ze,Re.config.mustUseProp=Ui,l(Re.options.directives,Ro),l(Re.options.components,Ho),Re.prototype.__patch__=Qr?Do:p,Re.prototype.$mount=function(e,t){return e=e&&Qr?Ye(e):void 0,this._mount(e,t)},setTimeout(function(){li.devtools&&ai&&ai.emit(\"init\",Re)},0);var Vo,zo=!!Qr&&rn(\"\\n\",\"&#10;\"),Jo=/([^\\s\"'<>\\/=]+)/,Ko=/(?:=)/,qo=[/\"([^\"]*)\"+/.source,/'([^']*)'+/.source,/([^\\s\"'=<>`]+)/.source],Wo=new RegExp(\"^\\\\s*\"+Jo.source+\"(?:\\\\s*(\"+Ko.source+\")\\\\s*(?:\"+qo.join(\"|\")+\"))?\"),Zo=\"[a-zA-Z_][\\\\w\\\\-\\\\.]*\",Go=\"((?:\"+Zo+\"\\\\:)?\"+Zo+\")\",Yo=new RegExp(\"^<\"+Go),Qo=/^\\s*(\\/?)>/,Xo=new RegExp(\"^<\\\\/\"+Go+\"[^>]*>\"),ea=/^<!DOCTYPE [^>]+>/i,ta=/^<!--/,na=/^<!\\[/,ra=!1;\"x\".replace(/x(.)?/g,function(e,t){ra=\"\"===t});var ia,oa,aa,sa,ca,la,ua,fa,da,pa,va,ha,ma,ga,ya,_a,ba,$a,wa,xa,Ca,ka,Aa,Oa,Sa=n(\"script,style\",!0),Ta=function(e){return\"lang\"===e.name&&\"html\"!==e.value},ja=function(e,t,n){return!!Sa(e)||!(!t||1!==n.length)&&!(\"template\"===e&&!n[0].attrs.some(Ta))},Ea={},Na=/&lt;/g,La=/&gt;/g,Da=/&#10;/g,Ma=/&amp;/g,Pa=/&quot;/g,Ra=/\\{\\{((?:.|\\n)+?)\\}\\}/g,Ia=/[-.*+?^${}()|[\\]\\/\\\\]/g,Fa=a(function(e){var t=e[0].replace(Ia,\"\\\\$&\"),n=e[1].replace(Ia,\"\\\\$&\");return new RegExp(t+\"((?:.|\\\\n)+?)\"+n,\"g\")}),Ba=/^v-|^@|^:/,Ua=/(.*?)\\s+(?:in|of)\\s+(.*)/,Ha=/\\((\\{[^}]*\\}|[^,]*),([^,]*)(?:,([^,]*))?\\)/,Va=/^:|^v-bind:/,za=/^@|^v-on:/,Ja=/:(.*)$/,Ka=/\\.[^.]+/g,qa=a(on),Wa=/^xmlns:NS\\d+/,Za=/^NS\\d+:/,Ga=a(Jn),Ya=/^\\s*([\\w$_]+|\\([^)]*?\\))\\s*=>|^function\\s*\\(/,Qa=/^\\s*[A-Za-z_$][\\w$]*(?:\\.[A-Za-z_$][\\w$]*|\\['.*?']|\\[\".*?\"]|\\[\\d+]|\\[[A-Za-z_$][\\w$]*])*\\s*$/,Xa={esc:27,tab:9,enter:13,space:32,up:38,left:37,right:39,down:40,delete:[8,46]},es={stop:\"$event.stopPropagation();\",prevent:\"$event.preventDefault();\",self:\"if($event.target !== $event.currentTarget)return;\"},ts=/^mouse|^pointer|^(click|dblclick|contextmenu|wheel)$/,ns={ctrl:\"if(!$event.ctrlKey)return;\",shift:\"if(!$event.shiftKey)return;\",alt:\"if(!$event.altKey)return;\",meta:\"if(!$event.metaKey)return;\"},rs={bind:tr,cloak:p},is={staticKeys:[\"staticClass\"],transformNode:wr,genData:xr},os={staticKeys:[\"staticStyle\"],transformNode:Cr,genData:kr},as=[is,os],ss={model:Ar,text:Nr,html:Lr},cs=Object.create(null),ls={expectHTML:!0,modules:as,staticKeys:v(as),directives:ss,isReservedTag:to,isUnaryTag:Gi,mustUseProp:Ui,getTagNamespace:Ze,isPreTag:eo},us=a(function(e){var t=Ye(e);return t&&t.innerHTML}),fs=Re.prototype.$mount;return Re.prototype.$mount=function(e,t){if(e=e&&Ye(e),e===document.body||e===document.documentElement)return this;var n=this.$options;if(!n.render){var r=n.template;if(r)if(\"string\"==typeof r)\"#\"===r.charAt(0)&&(r=us(r));else{if(!r.nodeType)return this;r=r.innerHTML}else e&&(r=Rr(e));if(r){var i=Mr(r,{warn:ui,shouldDecodeNewlines:zo,delimiters:n.delimiters},this),o=i.render,a=i.staticRenderFns;n.render=o,n.staticRenderFns=a}}return fs.call(this,e,t)},Re.compile=Mr,Re});"

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(6)(__webpack_require__(13))

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "/**\r\n  * vue-router v2.1.0\r\n  * (c) 2016 Evan You\r\n  * @license MIT\r\n  */\r\n!function(t,e){\"object\"==typeof exports&&\"undefined\"!=typeof module?module.exports=e():\"function\"==typeof define&&define.amd?define(e):t.VueRouter=e()}(this,function(){\"use strict\";function t(t,e){t||\"undefined\"!=typeof console&&console.warn(\"[vue-router] \"+e)}function e(t,e){if(void 0===e&&(e={}),t){var r;try{r=n(t)}catch(t){r={}}for(var o in e)r[o]=e[o];return r}return e}function n(t){var e={};return(t=t.trim().replace(/^(\\?|#|&)/,\"\"))?(t.split(\"&\").forEach(function(t){var n=t.replace(/\\+/g,\" \").split(\"=\"),r=vt(n.shift()),o=n.length>0?vt(n.join(\"=\")):null;void 0===e[r]?e[r]=o:Array.isArray(e[r])?e[r].push(o):e[r]=[e[r],o]}),e):e}function r(t){var e=t?Object.keys(t).map(function(e){var n=t[e];if(void 0===n)return\"\";if(null===n)return yt(e);if(Array.isArray(n)){var r=[];return n.slice().forEach(function(t){void 0!==t&&(null===t?r.push(yt(e)):r.push(yt(e)+\"=\"+yt(t)))}),r.join(\"&\")}return yt(e)+\"=\"+yt(n)}).filter(function(t){return t.length>0}).join(\"&\"):null;return e?\"?\"+e:\"\"}function o(t,e,n){var r={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||\"/\",hash:e.hash||\"\",query:e.query||{},params:e.params||{},fullPath:a(e),matched:t?i(t):[]};return n&&(r.redirectedFrom=a(n)),Object.freeze(r)}function i(t){for(var e=[];t;)e.unshift(t),t=t.parent;return e}function a(t){var e=t.path,n=t.query;void 0===n&&(n={});var o=t.hash;return void 0===o&&(o=\"\"),(e||\"/\")+r(n)+o}function u(t,e){return e===mt?t===e:!!e&&(t.path&&e.path?t.path.replace(gt,\"\")===e.path.replace(gt,\"\")&&t.hash===e.hash&&c(t.query,e.query):!(!t.name||!e.name)&&(t.name===e.name&&t.hash===e.hash&&c(t.query,e.query)&&c(t.params,e.params)))}function c(t,e){void 0===t&&(t={}),void 0===e&&(e={});var n=Object.keys(t),r=Object.keys(e);return n.length===r.length&&n.every(function(n){return String(t[n])===String(e[n])})}function s(t,e){return 0===t.path.indexOf(e.path.replace(/\\/$/,\"\"))&&(!e.hash||t.hash===e.hash)&&p(t.query,e.query)}function p(t,e){for(var n in e)if(!(n in t))return!1;return!0}function f(t){if(!(t.metaKey||t.ctrlKey||t.shiftKey||t.defaultPrevented||0!==t.button)){var e=t.target.getAttribute(\"target\");if(!/\\b_blank\\b/i.test(e))return t.preventDefault(),!0}}function h(t){if(t)for(var e,n=0;n<t.length;n++){if(e=t[n],\"a\"===e.tag)return e;if(e.children&&(e=h(e.children)))return e}}function l(t){if(!l.installed){l.installed=!0,lt=t,Object.defineProperty(t.prototype,\"$router\",{get:function(){return this.$root._router}}),Object.defineProperty(t.prototype,\"$route\",{get:function(){return this.$root._route}}),t.mixin({beforeCreate:function(){this.$options.router&&(this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,\"_route\",this._router.history.current))}}),t.component(\"router-view\",dt),t.component(\"router-link\",bt);var e=t.config.optionMergeStrategies;e.beforeRouteEnter=e.beforeRouteLeave=e.created}}function d(t,e,n){if(\"/\"===t.charAt(0))return t;if(\"?\"===t.charAt(0)||\"#\"===t.charAt(0))return e+t;var r=e.split(\"/\");n&&r[r.length-1]||r.pop();for(var o=t.replace(/^\\//,\"\").split(\"/\"),i=0;i<o.length;i++){var a=o[i];\".\"!==a&&(\"..\"===a?r.pop():r.push(a))}return\"\"!==r[0]&&r.unshift(\"\"),r.join(\"/\")}function y(t){var e=\"\",n=\"\",r=t.indexOf(\"#\");r>=0&&(e=t.slice(r),t=t.slice(0,r));var o=t.indexOf(\"?\");return o>=0&&(n=t.slice(o+1),t=t.slice(0,o)),{path:t,query:n,hash:e}}function v(t){return t.replace(/\\/\\//g,\"/\")}function m(t){var e=Object.create(null),n=Object.create(null);return t.forEach(function(t){g(e,n,t)}),{pathMap:e,nameMap:n}}function g(t,e,n,r,o){var i=n.path,a=n.name,u={path:w(i,r),components:n.components||{default:n.component},instances:{},name:a,parent:r,matchAs:o,redirect:n.redirect,beforeEnter:n.beforeEnter,meta:n.meta||{}};n.children&&n.children.forEach(function(n){g(t,e,n,u)}),void 0!==n.alias&&(Array.isArray(n.alias)?n.alias.forEach(function(n){g(t,e,{path:n},r,u.path)}):g(t,e,{path:n.alias},r,u.path)),t[u.path]||(t[u.path]=u),a&&(e[a]||(e[a]=u))}function w(t,e){return t=t.replace(/\\/$/,\"\"),\"/\"===t[0]?t:null==e?t:v(e.path+\"/\"+t)}function b(t,e){for(var n,r=[],o=0,i=0,a=\"\",u=e&&e.delimiter||\"/\";null!=(n=_t.exec(t));){var c=n[0],s=n[1],p=n.index;if(a+=t.slice(i,p),i=p+c.length,s)a+=s[1];else{var f=t[i],h=n[2],l=n[3],d=n[4],y=n[5],v=n[6],m=n[7];a&&(r.push(a),a=\"\");var g=null!=h&&null!=f&&f!==h,w=\"+\"===v||\"*\"===v,b=\"?\"===v||\"*\"===v,x=n[2]||u,k=d||y;r.push({name:l||o++,prefix:h||\"\",delimiter:x,optional:b,repeat:w,partial:g,asterisk:!!m,pattern:k?j(k):m?\".*\":\"[^\"+E(x)+\"]+?\"})}}return i<t.length&&(a+=t.substr(i)),a&&r.push(a),r}function x(t,e){return A(b(t,e))}function k(t){return encodeURI(t).replace(/[\\/?#]/g,function(t){return\"%\"+t.charCodeAt(0).toString(16).toUpperCase()})}function O(t){return encodeURI(t).replace(/[?#]/g,function(t){return\"%\"+t.charCodeAt(0).toString(16).toUpperCase()})}function A(t){for(var e=new Array(t.length),n=0;n<t.length;n++)\"object\"==typeof t[n]&&(e[n]=new RegExp(\"^(?:\"+t[n].pattern+\")$\"));return function(n,r){for(var o=\"\",i=n||{},a=r||{},u=a.pretty?k:encodeURIComponent,c=0;c<t.length;c++){var s=t[c];if(\"string\"!=typeof s){var p,f=i[s.name];if(null==f){if(s.optional){s.partial&&(o+=s.prefix);continue}throw new TypeError('Expected \"'+s.name+'\" to be defined')}if(kt(f)){if(!s.repeat)throw new TypeError('Expected \"'+s.name+'\" to not repeat, but received `'+JSON.stringify(f)+\"`\");if(0===f.length){if(s.optional)continue;throw new TypeError('Expected \"'+s.name+'\" to not be empty')}for(var h=0;h<f.length;h++){if(p=u(f[h]),!e[c].test(p))throw new TypeError('Expected all \"'+s.name+'\" to match \"'+s.pattern+'\", but received `'+JSON.stringify(p)+\"`\");o+=(0===h?s.prefix:s.delimiter)+p}}else{if(p=s.asterisk?O(f):u(f),!e[c].test(p))throw new TypeError('Expected \"'+s.name+'\" to match \"'+s.pattern+'\", but received \"'+p+'\"');o+=s.prefix+p}}else o+=s}return o}}function E(t){return t.replace(/([.+*?=^!:${}()[\\]|\\/\\\\])/g,\"\\\\$1\")}function j(t){return t.replace(/([=!:$\\/()])/g,\"\\\\$1\")}function R(t,e){return t.keys=e,t}function _(t){return t.sensitive?\"\":\"i\"}function $(t,e){var n=t.source.match(/\\((?!\\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return R(t,e)}function T(t,e,n){for(var r=[],o=0;o<t.length;o++)r.push(C(t[o],e,n).source);var i=new RegExp(\"(?:\"+r.join(\"|\")+\")\",_(n));return R(i,e)}function S(t,e,n){return q(b(t,n),e,n)}function q(t,e,n){kt(e)||(n=e||n,e=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i=\"\",a=0;a<t.length;a++){var u=t[a];if(\"string\"==typeof u)i+=E(u);else{var c=E(u.prefix),s=\"(?:\"+u.pattern+\")\";e.push(u),u.repeat&&(s+=\"(?:\"+c+s+\")*\"),s=u.optional?u.partial?c+\"(\"+s+\")?\":\"(?:\"+c+\"(\"+s+\"))?\":c+\"(\"+s+\")\",i+=s}}var p=E(n.delimiter||\"/\"),f=i.slice(-p.length)===p;return r||(i=(f?i.slice(0,-p.length):i)+\"(?:\"+p+\"(?=$))?\"),i+=o?\"$\":r&&f?\"\":\"(?=\"+p+\"|$)\",R(new RegExp(\"^\"+i,_(n)),e)}function C(t,e,n){return kt(e)||(n=e||n,e=[]),n=n||{},t instanceof RegExp?$(t,e):kt(t)?T(t,e,n):S(t,e,n)}function P(t){var e,n,r=$t[t];return r?(e=r.keys,n=r.regexp):(e=[],n=Ot(t,e),$t[t]={keys:e,regexp:n}),{keys:e,regexp:n}}function U(t,e,n){try{var r=Tt[t]||(Tt[t]=Ot.compile(t));return r(e||{},{pretty:!0})}catch(t){return\"\"}}function L(t,n,r){var o=\"string\"==typeof t?{path:t}:t;if(o.name||o._normalized)return o;if(!o.path&&o.params&&n){o=z({},o),o._normalized=!0;var i=z(z({},n.params),o.params);if(n.name)o.name=n.name,o.params=i;else if(n.matched){var a=n.matched[n.matched.length-1].path;o.path=U(a,i,\"path \"+n.path)}return o}var u=y(o.path||\"\"),c=n&&n.path||\"/\",s=u.path?d(u.path,c,r||o.append):n&&n.path||\"/\",p=e(u.query,o.query),f=o.hash||u.hash;return f&&\"#\"!==f.charAt(0)&&(f=\"#\"+f),{_normalized:!0,path:s,query:p,hash:f}}function z(t,e){for(var n in e)t[n]=e[n];return t}function H(e){function n(t,e,n){var r=L(t,e),o=r.name;if(o){var i=s[o],u=P(i.path).keys.filter(function(t){return!t.optional}).map(function(t){return t.name});if(\"object\"!=typeof r.params&&(r.params={}),e&&\"object\"==typeof e.params)for(var p in e.params)!(p in r.params)&&u.indexOf(p)>-1&&(r.params[p]=e.params[p]);if(i)return r.path=U(i.path,r.params,'named route \"'+o+'\"'),a(i,r,n)}else if(r.path){r.params={};for(var f in c)if(M(f,r.params,r.path))return a(c[f],r,n)}return a(null,r)}function r(e,r){var i=e.redirect,u=\"function\"==typeof i?i(o(e,r)):i;if(\"string\"==typeof u&&(u={path:u}),!u||\"object\"!=typeof u)return a(null,r);var c=u,p=c.name,f=c.path,h=r.query,l=r.hash,d=r.params;if(h=c.hasOwnProperty(\"query\")?c.query:h,l=c.hasOwnProperty(\"hash\")?c.hash:l,d=c.hasOwnProperty(\"params\")?c.params:d,p){s[p];return n({_normalized:!0,name:p,query:h,hash:l,params:d},void 0,r)}if(f){var y=V(f,e),v=U(y,d,'redirect route with path \"'+y+'\"');return n({_normalized:!0,path:v,query:h,hash:l},void 0,r)}return t(!1,\"invalid redirect option: \"+JSON.stringify(u)),a(null,r)}function i(t,e,r){var o=U(r,e.params,'aliased route with path \"'+r+'\"'),i=n({_normalized:!0,path:o});if(i){var u=i.matched,c=u[u.length-1];return e.params=i.params,a(c,e)}return a(null,e)}function a(t,e,n){return t&&t.redirect?r(t,n||e):t&&t.matchAs?i(t,e,t.matchAs):o(t,e,n)}var u=m(e),c=u.pathMap,s=u.nameMap;return n}function M(t,e,n){var r=P(t),o=r.regexp,i=r.keys,a=n.match(o);if(!a)return!1;if(!e)return!0;for(var u=1,c=a.length;u<c;++u){var s=i[u-1],p=\"string\"==typeof a[u]?decodeURIComponent(a[u]):a[u];s&&(e[s.name]=p)}return!0}function V(t,e){return d(t,e.parent?e.parent.path:\"/\",!0)}function B(t,e,n){var r=function(o){o>=t.length?n():t[o]?e(t[o],function(){r(o+1)}):r(o+1)};r(0)}function F(t){if(!t)if(St){var e=document.querySelector(\"base\");t=e?e.getAttribute(\"href\"):\"/\"}else t=\"/\";return\"/\"!==t.charAt(0)&&(t=\"/\"+t),t.replace(/\\/$/,\"\")}function I(t,e){var n,r=Math.max(t.length,e.length);for(n=0;n<r&&t[n]===e[n];n++);return{activated:e.slice(n),deactivated:t.slice(n)}}function D(t,e){return\"function\"!=typeof t&&(t=lt.extend(t)),t.options[e]}function J(t){return Q(G(t,function(t,e){var n=D(t,\"beforeRouteLeave\");if(n)return Array.isArray(n)?n.map(function(t){return K(t,e)}):K(n,e)}).reverse())}function K(t,e){return function(){return t.apply(e,arguments)}}function N(t,e,n){return Q(G(t,function(t,r,o,i){var a=D(t,\"beforeRouteEnter\");if(a)return Array.isArray(a)?a.map(function(t){return X(t,e,o,i,n)}):X(a,e,o,i,n)}))}function X(t,e,n,r,o){return function(i,a,u){return t(i,a,function(t){u(t),\"function\"==typeof t&&e.push(function(){Y(t,n.instances,r,o)})})}}function Y(t,e,n,r){e[n]?t(e[n]):r()&&setTimeout(function(){Y(t,e,n,r)},16)}function W(e){return G(e,function(e,n,r,o){if(\"function\"==typeof e&&!e.options)return function(n,i,a){var u=function(t){r.components[o]=t,a()},c=function(e){t(!1,\"Failed to resolve async component \"+o+\": \"+e),a(!1)},s=e(u,c);s&&\"function\"==typeof s.then&&s.then(u,c)}})}function G(t,e){return Q(t.map(function(t){return Object.keys(t.components).map(function(n){return e(t.components[n],t.instances[n],t,n)})}))}function Q(t){return Array.prototype.concat.apply([],t)}function Z(t){t&&(Pt[t]={x:window.pageXOffset,y:window.pageYOffset})}function tt(t){if(t)return Pt[t]}function et(t){var e=document.documentElement.getBoundingClientRect(),n=t.getBoundingClientRect();return{x:n.left-e.left,y:n.top-e.top}}function nt(t){return ot(t.x)||ot(t.y)}function rt(t){return{x:ot(t.x)?t.x:window.pageXOffset,y:ot(t.y)?t.y:window.pageYOffset}}function ot(t){return\"number\"==typeof t}function it(t){var e=window.location.pathname;return t&&0===e.indexOf(t)&&(e=e.slice(t.length)),(e||\"/\")+window.location.search+window.location.hash}function at(t,e){var n=window.history;try{e?n.replaceState({key:Lt},\"\",t):(Lt=Ut(),n.pushState({key:Lt},\"\",t)),Z(Lt)}catch(n){window.location[e?\"assign\":\"replace\"](t)}}function ut(t){at(t,!0)}function ct(){var t=st();return\"/\"===t.charAt(0)||(ft(\"/\"+t),!1)}function st(){var t=window.location.href,e=t.indexOf(\"#\");return e===-1?\"\":t.slice(e+1)}function pt(t){window.location.hash=t}function ft(t){var e=window.location.href.indexOf(\"#\");window.location.replace(window.location.href.slice(0,e>=0?e:0)+\"#\"+t)}function ht(t,e,n){var r=\"hash\"===n?\"/#\"+e:e;return t?v(t+r):r}var lt,dt={name:\"router-view\",functional:!0,props:{name:{type:String,default:\"default\"}},render:function(t,e){var n=e.props,r=e.children,o=e.parent,i=e.data;i.routerView=!0;for(var a=o.$route,u=o._routerViewCache||(o._routerViewCache={}),c=0,s=!1;o;)o.$vnode&&o.$vnode.data.routerView&&c++,o._inactive&&(s=!0),o=o.$parent;i.routerViewDepth=c;var p=a.matched[c];if(!p)return t();var f=n.name,h=s?u[f]:u[f]=p.components[f];if(!s){var l=i.hook||(i.hook={});l.init=function(t){p.instances[f]=t.child},l.prepatch=function(t,e){p.instances[f]=e.child},l.destroy=function(t){p.instances[f]===t.child&&(p.instances[f]=void 0)}}return t(h,i,r)}},yt=encodeURIComponent,vt=decodeURIComponent,mt=o(null,{path:\"/\"}),gt=/\\/$/,wt=[String,Object],bt={name:\"router-link\",props:{to:{type:wt,required:!0},tag:{type:String,default:\"a\"},exact:Boolean,append:Boolean,replace:Boolean,activeClass:String,event:{type:[String,Array],default:\"click\"}},render:function(t){var e=this,n=this.$router,r=this.$route,i=n.resolve(this.to,r,this.append),a=i.normalizedTo,c=i.resolved,p=i.href,l={},d=this.activeClass||n.options.linkActiveClass||\"router-link-active\",y=a.path?o(null,a):c;l[d]=this.exact?u(r,y):s(r,y);var v=function(t){f(t)&&(e.replace?n.replace(a):n.push(a))},m={click:f};Array.isArray(this.event)?this.event.forEach(function(t){m[t]=v}):m[this.event]=v;var g={class:l};if(\"a\"===this.tag)g.on=m,g.attrs={href:p};else{var w=h(this.$slots.default);if(w){w.isStatic=!1;var b=lt.util.extend,x=w.data=b({},w.data);x.on=m;var k=w.data.attrs=b({},w.data.attrs);k.href=p}else g.on=m}return t(this.tag,g,this.$slots.default)}},xt=Array.isArray||function(t){return\"[object Array]\"==Object.prototype.toString.call(t)},kt=xt,Ot=C,At=b,Et=x,jt=A,Rt=q,_t=new RegExp([\"(\\\\\\\\.)\",\"([\\\\/.])?(?:(?:\\\\:(\\\\w+)(?:\\\\(((?:\\\\\\\\.|[^\\\\\\\\()])+)\\\\))?|\\\\(((?:\\\\\\\\.|[^\\\\\\\\()])+)\\\\))([+*?])?|(\\\\*))\"].join(\"|\"),\"g\");Ot.parse=At,Ot.compile=Et,Ot.tokensToFunction=jt,Ot.tokensToRegExp=Rt;var $t=Object.create(null),Tt=Object.create(null),St=\"undefined\"!=typeof window,qt=St&&function(){var t=window.navigator.userAgent;return(t.indexOf(\"Android 2.\")===-1&&t.indexOf(\"Android 4.0\")===-1||t.indexOf(\"Mobile Safari\")===-1||t.indexOf(\"Chrome\")!==-1||t.indexOf(\"Windows Phone\")!==-1)&&(window.history&&\"pushState\"in window.history)}(),Ct=function(t,e){this.router=t,this.base=F(e),this.current=mt,this.pending=null};Ct.prototype.listen=function(t){this.cb=t},Ct.prototype.transitionTo=function(t,e){var n=this,r=this.router.match(t,this.current);this.confirmTransition(r,function(){n.updateRoute(r),e&&e(r),n.ensureURL()})},Ct.prototype.confirmTransition=function(t,e){var n=this,r=this.current;if(u(t,r))return void this.ensureURL();var o=I(this.current.matched,t.matched),i=o.deactivated,a=o.activated,c=[].concat(J(i),this.router.beforeHooks,a.map(function(t){return t.beforeEnter}),W(a));this.pending=t;var s=function(e,o){n.pending===t&&e(t,r,function(t){t===!1?n.ensureURL(!0):\"string\"==typeof t||\"object\"==typeof t?\"object\"==typeof t&&t.replace?n.replace(t):n.push(t):o(t)})};B(c,s,function(){var r=[],o=N(a,r,function(){return n.current===t});B(o,s,function(){n.pending===t&&(n.pending=null,e(t),n.router.app&&n.router.app.$nextTick(function(){r.forEach(function(t){return t()})}))})})},Ct.prototype.updateRoute=function(t){var e=this.current;this.current=t,this.cb&&this.cb(t),this.router.afterHooks.forEach(function(n){n&&n(t,e)})};var Pt=Object.create(null),Ut=function(){return String(Date.now())},Lt=Ut(),zt=function(t){function e(e,n){var r=this;t.call(this,e,n);var o=e.options.scrollBehavior;window.addEventListener(\"popstate\",function(t){Lt=t.state&&t.state.key;var e=r.current;r.transitionTo(it(r.base),function(t){o&&r.handleScroll(t,e,!0)})}),o&&window.addEventListener(\"scroll\",function(){Z(Lt)})}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t){var e=this,n=this.current;this.transitionTo(t,function(t){at(v(e.base+t.fullPath)),e.handleScroll(t,n,!1)})},e.prototype.replace=function(t){var e=this,n=this.current;this.transitionTo(t,function(t){ut(v(e.base+t.fullPath)),e.handleScroll(t,n,!1)})},e.prototype.ensureURL=function(t){if(it(this.base)!==this.current.fullPath){var e=v(this.base+this.current.fullPath);t?at(e):ut(e)}},e.prototype.handleScroll=function(t,e,n){var r=this.router;if(r.app){var o=r.options.scrollBehavior;o&&r.app.$nextTick(function(){var r=tt(Lt),i=o(t,e,n?r:null);if(i){var a=\"object\"==typeof i;if(a&&\"string\"==typeof i.selector){var u=document.querySelector(i.selector);u?r=et(u):nt(i)&&(r=rt(i))}else a&&nt(i)&&(r=rt(i));r&&window.scrollTo(r.x,r.y)}})}},e}(Ct),Ht=function(t){function e(e,n,r){var o=this;t.call(this,e,n),window.addEventListener(\"hashchange\",function(){o.onHashChange()}),r&&this.checkFallback()||ct()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.checkFallback=function(){var t=it(this.base);if(!/^\\/#/.test(t))return window.location.replace(v(this.base+\"/#\"+t)),!0},e.prototype.onHashChange=function(){ct()&&this.transitionTo(st(),function(t){ft(t.fullPath)})},e.prototype.push=function(t){this.transitionTo(t,function(t){pt(t.fullPath)})},e.prototype.replace=function(t){this.transitionTo(t,function(t){ft(t.fullPath)})},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;st()!==e&&(t?pt(e):ft(e))},e}(Ct),Mt=function(t){function e(e){t.call(this,e),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t){var e=this;this.transitionTo(t,function(t){e.stack=e.stack.slice(0,e.index+1).concat(t),e.index++})},e.prototype.replace=function(t){var e=this;this.transitionTo(t,function(t){e.stack=e.stack.slice(0,e.index).concat(t)})},e.prototype.go=function(t){var e=this,n=this.index+t;if(!(n<0||n>=this.stack.length)){var r=this.stack[n];this.confirmTransition(r,function(){e.index=n,e.updateRoute(r)})}},e.prototype.ensureURL=function(){},e}(Ct),Vt=function(t){void 0===t&&(t={}),this.app=null,this.options=t,this.beforeHooks=[],this.afterHooks=[],this.match=H(t.routes||[]);var e=t.mode||\"hash\";switch(this.fallback=\"history\"===e&&!qt,this.fallback&&(e=\"hash\"),St||(e=\"abstract\"),this.mode=e,e){case\"history\":this.history=new zt(this,t.base);break;case\"hash\":this.history=new Ht(this,t.base,this.fallback);break;case\"abstract\":this.history=new Mt(this)}},Bt={currentRoute:{}};return Bt.currentRoute.get=function(){return this.history&&this.history.current},Vt.prototype.init=function(t){var e=this;this.app=t;var n=this.history;n instanceof zt?n.transitionTo(it(n.base)):n instanceof Ht&&n.transitionTo(st()),n.listen(function(t){e.app._route=t})},Vt.prototype.beforeEach=function(t){this.beforeHooks.push(t)},Vt.prototype.afterEach=function(t){this.afterHooks.push(t)},Vt.prototype.push=function(t){this.history.push(t)},Vt.prototype.replace=function(t){this.history.replace(t)},Vt.prototype.go=function(t){this.history.go(t)},Vt.prototype.back=function(){this.go(-1)},Vt.prototype.forward=function(){this.go(1)},Vt.prototype.getMatchedComponents=function(t){var e=t?this.resolve(t).resolved:this.currentRoute;return e?[].concat.apply([],e.matched.map(function(t){return Object.keys(t.components).map(function(e){return t.components[e]})})):[]},Vt.prototype.resolve=function(t,e,n){var r=L(t,e||this.history.current,n),o=this.match(r,e),i=o.redirectedFrom||o.fullPath,a=this.history.base,u=ht(a,i,this.mode);return{normalizedTo:r,resolved:o,href:u}},Object.defineProperties(Vt.prototype,Bt),Vt.install=l,St&&window.Vue&&window.Vue.use(Vt),Vt});"

/***/ },
/* 14 */,
/* 15 */,
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var JsFunc_1 = __webpack_require__(17);
	var VueBase_1 = __webpack_require__(18);
	function getScorePanelUrl(gameId, isDark, isOb) {
	    if (isOb === void 0) { isOb = true; }
	    var op = 'op';
	    if (isOb)
	        op = 'ob';
	    if (isDark)
	        return "/panel/#/ol/" + op + "/" + gameId + "?panel=score&theme=dark";
	    return "/panel/#/ol/" + op + "/" + gameId + "?panel=score";
	}
	exports.getScorePanelUrl = getScorePanelUrl;
	var HomeView = (function (_super) {
	    __extends(HomeView, _super);
	    function HomeView() {
	        _super.call(this);
	        this.template = __webpack_require__(19);
	        this.links = VueBase_1.VueBase.PROP;
	        this.opUrlArr = VueBase_1.VueBase.PROP;
	        this.selected = VueBase_1.VueBase.PROP;
	        this.options = VueBase_1.VueBase.PROP;
	        this.gameDataArr = VueBase_1.VueBase.PROP;
	        this.iosParam = VueBase_1.VueBase.Dict;
	        this.rmtpUrl = VueBase_1.VueBase.String;
	        this.playUrl = VueBase_1.VueBase.String;
	        this.watch = {
	            selected: "onSelGameID"
	        };
	        this.methods = {
	            onSelGameID: function (gameId) {
	                var _this = this;
	                this.updateLinks(gameId);
	                var url = 'http://api.liangle.com/api/passerbyking/game/info/' + gameId;
	                $.get("/proxy?url=" + url, function (res1) {
	                    console.log(res1);
	                    var p = res1.data.stream.publish;
	                    _this.rmtpUrl = p.url + "/" + p.stream;
	                    _this.playUrl = res1.data.stream.play;
	                    _this.genQRCode();
	                });
	            },
	            onClkQRCode: function () {
	                this.genQRCode();
	            }
	        };
	        VueBase_1.VueBase.initProps(this);
	    }
	    HomeView.prototype.created = function () {
	        var _this = this;
	        console.log('post /admin/');
	        var url = 'http://api.liangle.com/api/passerbyking/game/list';
	        $.get("/proxy?url=" + url, function (res1) {
	            console.log(res1);
	            var gameDataArr = res1.data;
	            _this.gameDataArr = [];
	            for (var i = 0; i < gameDataArr.length; i++) {
	                var gameData = gameDataArr[gameDataArr.length - 1 - i];
	                if (Number(gameData.id) > 131) {
	                    gameData.text = "[" + gameData.id + "]:" + gameData.title;
	                    gameData.value = gameData.id;
	                    _this.gameDataArr.push(gameData);
	                }
	            }
	            _this.gameDataArr.sort(JsFunc_1.ascendingProp('id'));
	            _this.options = _this.gameDataArr;
	        });
	    };
	    HomeView.prototype.mounted = function () {
	        this.updateLinks(79);
	    };
	    HomeView.prototype.updateLinks = function (gameId) {
	        this.links = [
	            { title: "比分面板（蓝色）", url: getScorePanelUrl(gameId, true) },
	            { title: "比分面板（绿色）", url: getScorePanelUrl(gameId, false) },
	            { title: "线上控制台", url: getScorePanelUrl(gameId, false, false) },
	            { title: "八强面板", url: "/panel/#/ol/ob/" + gameId + "?panel=bracket" },
	        ];
	    };
	    HomeView.prototype.genQRCode = function () {
	        this.iosParam = { "rtmp": this.rmtpUrl, gameId: this.selected + "" };
	        if (this.qrcode) {
	            $('#qrcode').empty();
	            console.log('clear');
	        }
	        this.qrcode = new QRCode(document.getElementById("qrcode"), {
	            text: JSON.stringify(this.iosParam),
	            width: 256,
	            height: 256,
	            colorDark: "#000000",
	            colorLight: "#ffffff",
	            correctLevel: QRCode.CorrectLevel.H
	        });
	    };
	    return HomeView;
	}(VueBase_1.VueBase));
	exports.homeView = new HomeView();


/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";
	function ascendingProp(prop) {
	    return function (a, b) {
	        return a[prop] - b[prop];
	    };
	}
	exports.ascendingProp = ascendingProp;
	function descendingProp(prop) {
	    return function (a, b) {
	        return b[prop] - a[prop];
	    };
	}
	exports.descendingProp = descendingProp;
	function mapToSortArray(map, prop, sortFunc) {
	    var arr = [];
	    for (var k in map) {
	        arr.push(map[k]);
	    }
	    arr.sort(sortFunc(prop));
	    return arr;
	}
	exports.mapToSortArray = mapToSortArray;
	function mapToArr(map, clone) {
	    var a = [];
	    for (var k in map) {
	        a.push(map[k]);
	    }
	    if (clone)
	        a = JSON.parse(JSON.stringify(a));
	    return a;
	}
	exports.mapToArr = mapToArr;
	function arrCountSame(arrA, arrB) {
	    var n = 0;
	    for (var i = 0; i < arrB.length; i++) {
	        var obj = arrB[i];
	        if (arrA.indexOf(obj) > -1) {
	            n++;
	        }
	    }
	    return n;
	}
	exports.arrCountSame = arrCountSame;
	function arrUniqueFilter(el, i, a) {
	    return i == a.indexOf(el);
	}
	exports.arrUniqueFilter = arrUniqueFilter;
	function loadImg(path1, callback, onerror) {
	    var img = new Image();
	    img.onload = function () {
	        callback(img);
	    };
	    if (onerror != null) {
	        img.onerror = function (e) {
	            onerror(e);
	        };
	    }
	    img.src = path1;
	}
	exports.loadImg = loadImg;
	function loadImgArr(pathArr, callback) {
	    var count = pathArr.length;
	    var imgCollection;
	    var isArr;
	    function onLoadImg() {
	        count--;
	        if (count === 0) {
	            count = -1;
	            callback(imgCollection);
	        }
	    }
	    if (count && pathArr[0].hasOwnProperty('name') && pathArr[0].hasOwnProperty('url')) {
	        isArr = false;
	        imgCollection = {};
	    }
	    else {
	        isArr = true;
	        imgCollection = [];
	    }
	    var img;
	    var url;
	    for (var i = 0; i < pathArr.length; i++) {
	        var p = pathArr[i];
	        img = new Image();
	        if (isArr) {
	            imgCollection.push(img);
	            url = p;
	        }
	        else {
	            imgCollection[p.name] = img;
	            url = p.url;
	        }
	        img.onload = onLoadImg;
	        img.src = url;
	    }
	}
	exports.loadImgArr = loadImgArr;
	function combineArr(arr, num) {
	    var r = [];
	    (function f(t, a, n) {
	        if (n == 0) {
	            return r.push(t);
	        }
	        for (var i = 0, l = a.length; i <= l - n; i++) {
	            f(t.concat(a[i]), a.slice(i + 1), n - 1);
	        }
	    })([], arr, num);
	    return r;
	}
	exports.combineArr = combineArr;
	function formatSecond(sec, minStr, secStr) {
	    if (minStr === void 0) { minStr = ":"; }
	    if (secStr === void 0) { secStr = ""; }
	    var min = Math.floor(sec / 60);
	    var s = sec % 60;
	    var strMin = min + "";
	    var strSec = s + "";
	    if (min < 10)
	        strMin = "0" + strMin;
	    if (s < 10)
	        strSec = "0" + strSec;
	    return strMin + minStr + strSec + secStr;
	}
	exports.formatSecond = formatSecond;
	function getLength(str) {
	    var realLength = 0, len = str.length, charCode = -1;
	    for (var i = 0; i < len; i++) {
	        charCode = str.charCodeAt(i);
	        if (charCode >= 0 && charCode <= 128)
	            realLength += 1;
	        else
	            realLength += 2;
	    }
	    return realLength;
	}
	exports.getLength = getLength;
	function cnWrap(str, len, limit) {
	    if (limit === void 0) { limit = 0; }
	    var str_line_length = 0;
	    var str_len = str.length;
	    var str_cut = new String();
	    var str_out = '';
	    var total_len = 0;
	    for (var i = 0; i < str_len; i++) {
	        if (limit != 0 && total_len > limit)
	            break;
	        var a = str.charAt(i);
	        str_line_length++;
	        total_len++;
	        if (escape(a).length > 4) {
	            str_line_length++;
	            total_len++;
	        }
	        str_cut = str_cut.concat(a);
	        if (str_line_length >= len) {
	            str_out += str_cut.concat('\n');
	            str_cut = new String();
	            str_line_length = 0;
	        }
	    }
	    str_out += str_cut;
	    return str_out;
	}
	exports.cnWrap = cnWrap;
	exports.getUrlFilename = function (url) {
	    var a = url.split('/');
	    var filename = a[a.length - 1];
	    return filename;
	};
	exports.DateFormat = function (date, fmt) {
	    var o = {
	        "M+": date.getMonth() + 1,
	        "d+": date.getDate(),
	        "h+": date.getHours(),
	        "m+": date.getMinutes(),
	        "s+": date.getSeconds(),
	        "q+": Math.floor((date.getMonth() + 3) / 3),
	        "S": date.getMilliseconds()
	    };
	    if (/(y+)/.test(fmt))
	        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
	    for (var k in o)
	        if (new RegExp("(" + k + ")").test(fmt))
	            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	    return fmt;
	};
	function paddy(number, p, c) {
	    var pad_char = typeof c !== 'undefined' ? c : '0';
	    var pad = new Array(1 + p).join(pad_char);
	    return (pad + number).slice(-pad.length);
	}
	exports.paddy = paddy;


/***/ },
/* 18 */
/***/ function(module, exports) {

	"use strict";
	var VueBase = (function () {
	    function VueBase() {
	        this.props = {};
	        this.methods = {};
	    }
	    VueBase.$method = function (func) {
	        return { f: func, _: null };
	    };
	    VueBase.initProps = function (subClassObj) {
	        for (var key in subClassObj) {
	            var o = subClassObj[key];
	            if (o.hasOwnProperty("_")) {
	                if (o.hasOwnProperty("v")) {
	                    subClassObj.props[key] = o.v;
	                }
	                else if (o.hasOwnProperty("f")) {
	                    subClassObj.methods[key] = o.f;
	                }
	            }
	            else {
	                var isClsFunc = o instanceof Function;
	                if (isClsFunc) {
	                    subClassObj.methods[key] = o;
	                }
	            }
	        }
	        return subClassObj;
	    };
	    VueBase.prototype.created = function () {
	    };
	    VueBase.prototype.mounted = function () {
	    };
	    VueBase.PROP = { v: null, _: null };
	    VueBase.Dict = { v: {}, _: null };
	    VueBase.Number = { v: 0, _: null };
	    VueBase.String = { v: "", _: null };
	    return VueBase;
	}());
	exports.VueBase = VueBase;


/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = "<div class=\"container\">\r\n    <nav class=\"panel\">\r\n        <p class=\"panel-heading\">\r\n            直播面板op入口 Game ID: {{ selected }}\r\n            <span class=\"select\">\r\n                <select v-model=\"selected\">\r\n                    <option v-for=\"option in options\" v-bind:value=\"option.value\">\r\n                        {{ option.text }}\r\n                    </option>\r\n                </select>\r\n            </span>\r\n        </p>\r\n        <vue v-for=\"link in links\">\r\n            <a class=\"panel-block\" :href=\"link.url\" target=\"_blank\">\r\n                <span class=\"panel-icon\">\r\n            <i class=\"fa fa-book\"></i>\r\n            </span> {{link.url}}\r\n                <br> {{link.title}}\r\n            </a>\r\n            <!--<button class=\"button\">复制地址</button>-->\r\n        </vue>\r\n        command:\r\n        <br> /game/bracket/clear\r\n        <br>/game/clear/bracketIdx\r\n        <br>/git/pull\r\n    </nav>\r\n    播放地址:<input type=\"text\" v-model=\"playUrl\" style=\"width: 1000px\">\r\n    <p>\r\n        推流地址:<input type=\"text\" v-model=\"rmtpUrl\" style=\"width: 1000px\">\r\n        <p>\r\n            <button class=\"button is-primary\" @click=\"onClkQRCode\">生成IOS二维码</button> {{iosParam | json}}\r\n            <div id=\"qrcode\"></div>\r\n</div>";

/***/ },
/* 20 */,
/* 21 */,
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var WebJsFunc_1 = __webpack_require__(23);
	exports.getHupuWS = function (callback) {
	    var url = 'http://test.jrstvapi.hupu.com/zhubo/getNodeServer';
	    $.get(WebJsFunc_1.proxy(url), function (res) {
	        var a = JSON.parse(res);
	        if (a && a.length) {
	            callback(a[0]);
	        }
	        else
	            console.error(url);
	    });
	};
	function getRegularPlayer(gameId, callback) {
	    var url = 'http://api.liangle.com/api/passerbyking/game/wheel/ready/' + gameId;
	    _get(url, callback);
	}
	exports.getRegularPlayer = getRegularPlayer;
	var _get = function (url, callback) {
	    $.get(url, callback);
	};
	exports.getPlayerDoc = function (callback) {
	    $.get('/game/player', function (res) {
	        callback(res);
	    });
	};
	exports.updatePlayerDoc = function (playerDoc, callback) {
	    WebJsFunc_1.$post('/game/player/update', playerDoc, callback);
	};
	exports.getGameInfo = function (callback) {
	    _get('/game/', callback);
	};
	exports._avatar = function (filename) {
	    return '/img/player/avatar/' + filename;
	};


/***/ },
/* 23 */
/***/ function(module, exports) {

	"use strict";
	exports.dynamicLoading = {
	    css: function (path) {
	        if (!path || path.length === 0) {
	            throw new Error('argument "path" is required !');
	        }
	        var head = document.getElementsByTagName('head')[0];
	        var link = document.createElement('link');
	        link.href = path;
	        link.rel = 'stylesheet';
	        link.type = 'text/css';
	        head.appendChild(link);
	    },
	    js: function (path) {
	        if (!path || path.length === 0) {
	            throw new Error('argument "path" is required !');
	        }
	        var head = document.getElementsByTagName('head')[0];
	        var script = document.createElement('script');
	        script.src = path;
	        script.type = 'text/javascript';
	        head.appendChild(script);
	    }
	};
	exports.proxy = function (url) {
	    return "/proxy?url=" + url;
	};
	var OpReq = (function () {
	    function OpReq(io, reqFunc) {
	        this.cmdMap = {};
	        this.reqFunc = reqFunc;
	        this.io = io;
	    }
	    OpReq.prototype.send = function (cmd, data) {
	        var _this = this;
	        this.reqFunc(cmd, data);
	        if (!this.cmdMap[cmd]) {
	            this.cmdMap[cmd] = true;
	            return {
	                on: function (resCmd, callback) {
	                    _this.io.on(resCmd, function (data) {
	                        callback(data);
	                    });
	                }
	            };
	        }
	        return { on: function (resCmd, callback) { } };
	    };
	    return OpReq;
	}());
	exports.OpReq = OpReq;
	exports.$post = function (url, data, callback) {
	    $.ajax({
	        url: url,
	        type: 'post',
	        data: JSON.stringify(data),
	        headers: { "Content-Type": "application/json" },
	        dataType: 'json',
	        success: callback
	    });
	};


/***/ },
/* 24 */,
/* 25 */,
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(6)(__webpack_require__(27))

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = "/*!\n * pixi.js - v4.2.3\n * Compiled Wed, 30 Nov 2016 19:08:52 UTC\n *\n * pixi.js is licensed under the MIT License.\n * http://www.opensource.org/licenses/mit-license\n */\n!function(t){if(\"object\"==typeof exports&&\"undefined\"!=typeof module)module.exports=t();else if(\"function\"==typeof define&&define.amd)define([],t);else{var e;e=\"undefined\"!=typeof window?window:\"undefined\"!=typeof global?global:\"undefined\"!=typeof self?self:this,e.PIXI=t()}}(function(){var t;return function t(e,r,n){function i(s,a){if(!r[s]){if(!e[s]){var u=\"function\"==typeof require&&require;if(!a&&u)return u(s,!0);if(o)return o(s,!0);var h=new Error(\"Cannot find module '\"+s+\"'\");throw h.code=\"MODULE_NOT_FOUND\",h}var l=r[s]={exports:{}};e[s][0].call(l.exports,function(t){var r=e[s][1][t];return i(r?r:t)},l,l.exports,t,e,r,n)}return r[s].exports}for(var o=\"function\"==typeof require&&require,s=0;s<n.length;s++)i(n[s]);return i}({1:[function(t,e,r){\"use strict\";\"use restrict\";function n(t){var e=32;return t&=-t,t&&e--,65535&t&&(e-=16),16711935&t&&(e-=8),252645135&t&&(e-=4),858993459&t&&(e-=2),1431655765&t&&(e-=1),e}var i=32;r.INT_BITS=i,r.INT_MAX=2147483647,r.INT_MIN=-1<<i-1,r.sign=function(t){return(t>0)-(t<0)},r.abs=function(t){var e=t>>i-1;return(t^e)-e},r.min=function(t,e){return e^(t^e)&-(t<e)},r.max=function(t,e){return t^(t^e)&-(t<e)},r.isPow2=function(t){return!(t&t-1||!t)},r.log2=function(t){var e,r;return e=(t>65535)<<4,t>>>=e,r=(t>255)<<3,t>>>=r,e|=r,r=(t>15)<<2,t>>>=r,e|=r,r=(t>3)<<1,t>>>=r,e|=r,e|t>>1},r.log10=function(t){return t>=1e9?9:t>=1e8?8:t>=1e7?7:t>=1e6?6:t>=1e5?5:t>=1e4?4:t>=1e3?3:t>=100?2:t>=10?1:0},r.popCount=function(t){return t-=t>>>1&1431655765,t=(858993459&t)+(t>>>2&858993459),16843009*(t+(t>>>4)&252645135)>>>24},r.countTrailingZeros=n,r.nextPow2=function(t){return t+=0===t,--t,t|=t>>>1,t|=t>>>2,t|=t>>>4,t|=t>>>8,t|=t>>>16,t+1},r.prevPow2=function(t){return t|=t>>>1,t|=t>>>2,t|=t>>>4,t|=t>>>8,t|=t>>>16,t-(t>>>1)},r.parity=function(t){return t^=t>>>16,t^=t>>>8,t^=t>>>4,t&=15,27030>>>t&1};var o=new Array(256);!function(t){for(var e=0;e<256;++e){var r=e,n=e,i=7;for(r>>>=1;r;r>>>=1)n<<=1,n|=1&r,--i;t[e]=n<<i&255}}(o),r.reverse=function(t){return o[255&t]<<24|o[t>>>8&255]<<16|o[t>>>16&255]<<8|o[t>>>24&255]},r.interleave2=function(t,e){return t&=65535,t=16711935&(t|t<<8),t=252645135&(t|t<<4),t=858993459&(t|t<<2),t=1431655765&(t|t<<1),e&=65535,e=16711935&(e|e<<8),e=252645135&(e|e<<4),e=858993459&(e|e<<2),e=1431655765&(e|e<<1),t|e<<1},r.deinterleave2=function(t,e){return t=t>>>e&1431655765,t=858993459&(t|t>>>1),t=252645135&(t|t>>>2),t=16711935&(t|t>>>4),t=65535&(t|t>>>16),t<<16>>16},r.interleave3=function(t,e,r){return t&=1023,t=4278190335&(t|t<<16),t=251719695&(t|t<<8),t=3272356035&(t|t<<4),t=1227133513&(t|t<<2),e&=1023,e=4278190335&(e|e<<16),e=251719695&(e|e<<8),e=3272356035&(e|e<<4),e=1227133513&(e|e<<2),t|=e<<1,r&=1023,r=4278190335&(r|r<<16),r=251719695&(r|r<<8),r=3272356035&(r|r<<4),r=1227133513&(r|r<<2),t|r<<2},r.deinterleave3=function(t,e){return t=t>>>e&1227133513,t=3272356035&(t|t>>>2),t=251719695&(t|t>>>4),t=4278190335&(t|t>>>8),t=1023&(t|t>>>16),t<<22>>22},r.nextCombination=function(t){var e=t|t-1;return e+1|(~e&-~e)-1>>>n(t)+1}},{}],2:[function(t,e,r){\"use strict\";function n(t,e,r){r=r||2;var n=e&&e.length,o=n?e[0]*r:t.length,a=i(t,0,o,r,!0),u=[];if(!a)return u;var h,l,d,f,p,v,y;if(n&&(a=c(t,e,a,r)),t.length>80*r){h=d=t[0],l=f=t[1];for(var g=r;g<o;g+=r)p=t[g],v=t[g+1],p<h&&(h=p),v<l&&(l=v),p>d&&(d=p),v>f&&(f=v);y=Math.max(d-h,f-l)}return s(a,u,r,h,l,y),u}function i(t,e,r,n,i){var o,s;if(i===A(t,e,r,n)>0)for(o=e;o<r;o+=n)s=P(o,t[o],t[o+1],s);else for(o=r-n;o>=e;o-=n)s=P(o,t[o],t[o+1],s);return s&&T(s,s.next)&&(C(s),s=s.next),s}function o(t,e){if(!t)return t;e||(e=t);var r,n=t;do if(r=!1,n.steiner||!T(n,n.next)&&0!==x(n.prev,n,n.next))n=n.next;else{if(C(n),n=e=n.prev,n===n.next)return null;r=!0}while(r||n!==e);return e}function s(t,e,r,n,i,c,d){if(t){!d&&c&&v(t,n,i,c);for(var f,p,y=t;t.prev!==t.next;)if(f=t.prev,p=t.next,c?u(t,n,i,c):a(t))e.push(f.i/r),e.push(t.i/r),e.push(p.i/r),C(t),t=p.next,y=p.next;else if(t=p,t===y){d?1===d?(t=h(t,e,r),s(t,e,r,n,i,c,2)):2===d&&l(t,e,r,n,i,c):s(o(t),e,r,n,i,c,1);break}}}function a(t){var e=t.prev,r=t,n=t.next;if(x(e,r,n)>=0)return!1;for(var i=t.next.next;i!==t.prev;){if(_(e.x,e.y,r.x,r.y,n.x,n.y,i.x,i.y)&&x(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function u(t,e,r,n){var i=t.prev,o=t,s=t.next;if(x(i,o,s)>=0)return!1;for(var a=i.x<o.x?i.x<s.x?i.x:s.x:o.x<s.x?o.x:s.x,u=i.y<o.y?i.y<s.y?i.y:s.y:o.y<s.y?o.y:s.y,h=i.x>o.x?i.x>s.x?i.x:s.x:o.x>s.x?o.x:s.x,l=i.y>o.y?i.y>s.y?i.y:s.y:o.y>s.y?o.y:s.y,c=g(a,u,e,r,n),d=g(h,l,e,r,n),f=t.nextZ;f&&f.z<=d;){if(f!==t.prev&&f!==t.next&&_(i.x,i.y,o.x,o.y,s.x,s.y,f.x,f.y)&&x(f.prev,f,f.next)>=0)return!1;f=f.nextZ}for(f=t.prevZ;f&&f.z>=c;){if(f!==t.prev&&f!==t.next&&_(i.x,i.y,o.x,o.y,s.x,s.y,f.x,f.y)&&x(f.prev,f,f.next)>=0)return!1;f=f.prevZ}return!0}function h(t,e,r){var n=t;do{var i=n.prev,o=n.next.next;!T(i,o)&&w(i,n,n.next,o)&&O(i,o)&&O(o,i)&&(e.push(i.i/r),e.push(n.i/r),e.push(o.i/r),C(n),C(n.next),n=t=o),n=n.next}while(n!==t);return n}function l(t,e,r,n,i,a){var u=t;do{for(var h=u.next.next;h!==u.prev;){if(u.i!==h.i&&b(u,h)){var l=M(u,h);return u=o(u,u.next),l=o(l,l.next),s(u,e,r,n,i,a),void s(l,e,r,n,i,a)}h=h.next}u=u.next}while(u!==t)}function c(t,e,r,n){var s,a,u,h,l,c=[];for(s=0,a=e.length;s<a;s++)u=e[s]*n,h=s<a-1?e[s+1]*n:t.length,l=i(t,u,h,n,!1),l===l.next&&(l.steiner=!0),c.push(m(l));for(c.sort(d),s=0;s<c.length;s++)f(c[s],r),r=o(r,r.next);return r}function d(t,e){return t.x-e.x}function f(t,e){if(e=p(t,e)){var r=M(e,t);o(r,r.next)}}function p(t,e){var r,n=e,i=t.x,o=t.y,s=-(1/0);do{if(o<=n.y&&o>=n.next.y){var a=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(a<=i&&a>s){if(s=a,a===i){if(o===n.y)return n;if(o===n.next.y)return n.next}r=n.x<n.next.x?n:n.next}}n=n.next}while(n!==e);if(!r)return null;if(i===s)return r.prev;var u,h=r,l=r.x,c=r.y,d=1/0;for(n=r.next;n!==h;)i>=n.x&&n.x>=l&&_(o<c?i:s,o,l,c,o<c?s:i,o,n.x,n.y)&&(u=Math.abs(o-n.y)/(i-n.x),(u<d||u===d&&n.x>r.x)&&O(n,t)&&(r=n,d=u)),n=n.next;return r}function v(t,e,r,n){var i=t;do null===i.z&&(i.z=g(i.x,i.y,e,r,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==t);i.prevZ.nextZ=null,i.prevZ=null,y(i)}function y(t){var e,r,n,i,o,s,a,u,h=1;do{for(r=t,t=null,o=null,s=0;r;){for(s++,n=r,a=0,e=0;e<h&&(a++,n=n.nextZ,n);e++);for(u=h;a>0||u>0&&n;)0===a?(i=n,n=n.nextZ,u--):0!==u&&n?r.z<=n.z?(i=r,r=r.nextZ,a--):(i=n,n=n.nextZ,u--):(i=r,r=r.nextZ,a--),o?o.nextZ=i:t=i,i.prevZ=o,o=i;r=n}o.nextZ=null,h*=2}while(s>1);return t}function g(t,e,r,n,i){return t=32767*(t-r)/i,e=32767*(e-n)/i,t=16711935&(t|t<<8),t=252645135&(t|t<<4),t=858993459&(t|t<<2),t=1431655765&(t|t<<1),e=16711935&(e|e<<8),e=252645135&(e|e<<4),e=858993459&(e|e<<2),e=1431655765&(e|e<<1),t|e<<1}function m(t){var e=t,r=t;do e.x<r.x&&(r=e),e=e.next;while(e!==t);return r}function _(t,e,r,n,i,o,s,a){return(i-s)*(e-a)-(t-s)*(o-a)>=0&&(t-s)*(n-a)-(r-s)*(e-a)>=0&&(r-s)*(o-a)-(i-s)*(n-a)>=0}function b(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!E(t,e)&&O(t,e)&&O(e,t)&&S(t,e)}function x(t,e,r){return(e.y-t.y)*(r.x-e.x)-(e.x-t.x)*(r.y-e.y)}function T(t,e){return t.x===e.x&&t.y===e.y}function w(t,e,r,n){return!!(T(t,e)&&T(r,n)||T(t,n)&&T(r,e))||x(t,e,r)>0!=x(t,e,n)>0&&x(r,n,t)>0!=x(r,n,e)>0}function E(t,e){var r=t;do{if(r.i!==t.i&&r.next.i!==t.i&&r.i!==e.i&&r.next.i!==e.i&&w(r,r.next,t,e))return!0;r=r.next}while(r!==t);return!1}function O(t,e){return x(t.prev,t,t.next)<0?x(t,e,t.next)>=0&&x(t,t.prev,e)>=0:x(t,e,t.prev)<0||x(t,t.next,e)<0}function S(t,e){var r=t,n=!1,i=(t.x+e.x)/2,o=(t.y+e.y)/2;do r.y>o!=r.next.y>o&&i<(r.next.x-r.x)*(o-r.y)/(r.next.y-r.y)+r.x&&(n=!n),r=r.next;while(r!==t);return n}function M(t,e){var r=new R(t.i,t.x,t.y),n=new R(e.i,e.x,e.y),i=t.next,o=e.prev;return t.next=e,e.prev=t,r.next=i,i.prev=r,n.next=r,r.prev=n,o.next=n,n.prev=o,n}function P(t,e,r,n){var i=new R(t,e,r);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function C(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function R(t,e,r){this.i=t,this.x=e,this.y=r,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function A(t,e,r,n){for(var i=0,o=e,s=r-n;o<r;o+=n)i+=(t[s]-t[o])*(t[o+1]+t[s+1]),s=o;return i}e.exports=n,n.deviation=function(t,e,r,n){var i=e&&e.length,o=i?e[0]*r:t.length,s=Math.abs(A(t,0,o,r));if(i)for(var a=0,u=e.length;a<u;a++){var h=e[a]*r,l=a<u-1?e[a+1]*r:t.length;s-=Math.abs(A(t,h,l,r))}var c=0;for(a=0;a<n.length;a+=3){var d=n[a]*r,f=n[a+1]*r,p=n[a+2]*r;c+=Math.abs((t[d]-t[p])*(t[f+1]-t[d+1])-(t[d]-t[f])*(t[p+1]-t[d+1]))}return 0===s&&0===c?0:Math.abs((c-s)/s)},n.flatten=function(t){for(var e=t[0][0].length,r={vertices:[],holes:[],dimensions:e},n=0,i=0;i<t.length;i++){for(var o=0;o<t[i].length;o++)for(var s=0;s<e;s++)r.vertices.push(t[i][o][s]);i>0&&(n+=t[i-1].length,r.holes.push(n))}return r}},{}],3:[function(t,e,r){\"use strict\";function n(){}function i(t,e,r){this.fn=t,this.context=e,this.once=r||!1}function o(){this._events=new n,this._eventsCount=0}var s=Object.prototype.hasOwnProperty,a=\"~\";Object.create&&(n.prototype=Object.create(null),(new n).__proto__||(a=!1)),o.prototype.eventNames=function(){var t,e,r=[];if(0===this._eventsCount)return r;for(e in t=this._events)s.call(t,e)&&r.push(a?e.slice(1):e);return Object.getOwnPropertySymbols?r.concat(Object.getOwnPropertySymbols(t)):r},o.prototype.listeners=function(t,e){var r=a?a+t:t,n=this._events[r];if(e)return!!n;if(!n)return[];if(n.fn)return[n.fn];for(var i=0,o=n.length,s=new Array(o);i<o;i++)s[i]=n[i].fn;return s},o.prototype.emit=function(t,e,r,n,i,o){var s=a?a+t:t;if(!this._events[s])return!1;var u,h,l=this._events[s],c=arguments.length;if(l.fn){switch(l.once&&this.removeListener(t,l.fn,void 0,!0),c){case 1:return l.fn.call(l.context),!0;case 2:return l.fn.call(l.context,e),!0;case 3:return l.fn.call(l.context,e,r),!0;case 4:return l.fn.call(l.context,e,r,n),!0;case 5:return l.fn.call(l.context,e,r,n,i),!0;case 6:return l.fn.call(l.context,e,r,n,i,o),!0}for(h=1,u=new Array(c-1);h<c;h++)u[h-1]=arguments[h];l.fn.apply(l.context,u)}else{var d,f=l.length;for(h=0;h<f;h++)switch(l[h].once&&this.removeListener(t,l[h].fn,void 0,!0),c){case 1:l[h].fn.call(l[h].context);break;case 2:l[h].fn.call(l[h].context,e);break;case 3:l[h].fn.call(l[h].context,e,r);break;case 4:l[h].fn.call(l[h].context,e,r,n);break;default:if(!u)for(d=1,u=new Array(c-1);d<c;d++)u[d-1]=arguments[d];l[h].fn.apply(l[h].context,u)}}return!0},o.prototype.on=function(t,e,r){var n=new i(e,r||this),o=a?a+t:t;return this._events[o]?this._events[o].fn?this._events[o]=[this._events[o],n]:this._events[o].push(n):(this._events[o]=n,this._eventsCount++),this},o.prototype.once=function(t,e,r){var n=new i(e,r||this,(!0)),o=a?a+t:t;return this._events[o]?this._events[o].fn?this._events[o]=[this._events[o],n]:this._events[o].push(n):(this._events[o]=n,this._eventsCount++),this},o.prototype.removeListener=function(t,e,r,i){var o=a?a+t:t;if(!this._events[o])return this;if(!e)return 0===--this._eventsCount?this._events=new n:delete this._events[o],this;var s=this._events[o];if(s.fn)s.fn!==e||i&&!s.once||r&&s.context!==r||(0===--this._eventsCount?this._events=new n:delete this._events[o]);else{for(var u=0,h=[],l=s.length;u<l;u++)(s[u].fn!==e||i&&!s[u].once||r&&s[u].context!==r)&&h.push(s[u]);h.length?this._events[o]=1===h.length?h[0]:h:0===--this._eventsCount?this._events=new n:delete this._events[o]}return this},o.prototype.removeAllListeners=function(t){var e;return t?(e=a?a+t:t,this._events[e]&&(0===--this._eventsCount?this._events=new n:delete this._events[e])):(this._events=new n,this._eventsCount=0),this},o.prototype.off=o.prototype.removeListener,o.prototype.addListener=o.prototype.on,o.prototype.setMaxListeners=function(){return this},o.prefixed=a,o.EventEmitter=o,\"undefined\"!=typeof e&&(e.exports=o)},{}],4:[function(e,r,n){!function(e){var n=/iPhone/i,i=/iPod/i,o=/iPad/i,s=/(?=.*\\bAndroid\\b)(?=.*\\bMobile\\b)/i,a=/Android/i,u=/(?=.*\\bAndroid\\b)(?=.*\\bSD4930UR\\b)/i,h=/(?=.*\\bAndroid\\b)(?=.*\\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\\b)/i,l=/IEMobile/i,c=/(?=.*\\bWindows\\b)(?=.*\\bARM\\b)/i,d=/BlackBerry/i,f=/BB10/i,p=/Opera Mini/i,v=/(CriOS|Chrome)(?=.*\\bMobile\\b)/i,y=/(?=.*\\bFirefox\\b)(?=.*\\bMobile\\b)/i,g=new RegExp(\"(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)\",\"i\"),m=function(t,e){return t.test(e)},_=function(t){var e=t||navigator.userAgent,r=e.split(\"[FBAN\");if(\"undefined\"!=typeof r[1]&&(e=r[0]),r=e.split(\"Twitter\"),\"undefined\"!=typeof r[1]&&(e=r[0]),this.apple={phone:m(n,e),ipod:m(i,e),tablet:!m(n,e)&&m(o,e),device:m(n,e)||m(i,e)||m(o,e)},this.amazon={phone:m(u,e),tablet:!m(u,e)&&m(h,e),device:m(u,e)||m(h,e)},this.android={phone:m(u,e)||m(s,e),tablet:!m(u,e)&&!m(s,e)&&(m(h,e)||m(a,e)),device:m(u,e)||m(h,e)||m(s,e)||m(a,e)},this.windows={phone:m(l,e),tablet:m(c,e),device:m(l,e)||m(c,e)},this.other={blackberry:m(d,e),blackberry10:m(f,e),opera:m(p,e),firefox:m(y,e),chrome:m(v,e),device:m(d,e)||m(f,e)||m(p,e)||m(y,e)||m(v,e)},this.seven_inch=m(g,e),this.any=this.apple.device||this.android.device||this.windows.device||this.other.device||this.seven_inch,this.phone=this.apple.phone||this.android.phone||this.windows.phone,this.tablet=this.apple.tablet||this.android.tablet||this.windows.tablet,\"undefined\"==typeof window)return this},b=function(){var t=new _;return t.Class=_,t};\"undefined\"!=typeof r&&r.exports&&\"undefined\"==typeof window?r.exports=_:\"undefined\"!=typeof r&&r.exports&&\"undefined\"!=typeof window?r.exports=b():\"function\"==typeof t&&t.amd?t(\"isMobile\",[],e.isMobile=b()):e.isMobile=b()}(this)},{}],5:[function(t,e,r){\"use strict\";function n(t){if(null===t||void 0===t)throw new TypeError(\"Object.assign cannot be called with null or undefined\");return Object(t)}function i(){try{if(!Object.assign)return!1;var t=new String(\"abc\");if(t[5]=\"de\",\"5\"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},r=0;r<10;r++)e[\"_\"+String.fromCharCode(r)]=r;var n=Object.getOwnPropertyNames(e).map(function(t){return e[t]});if(\"0123456789\"!==n.join(\"\"))return!1;var i={};return\"abcdefghijklmnopqrst\".split(\"\").forEach(function(t){i[t]=t}),\"abcdefghijklmnopqrst\"===Object.keys(Object.assign({},i)).join(\"\")}catch(t){return!1}}var o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;e.exports=i()?Object.assign:function(t,e){for(var r,i,a=n(t),u=1;u<arguments.length;u++){r=Object(arguments[u]);for(var h in r)o.call(r,h)&&(a[h]=r[h]);if(Object.getOwnPropertySymbols){i=Object.getOwnPropertySymbols(r);for(var l=0;l<i.length;l++)s.call(r,i[l])&&(a[i[l]]=r[i[l]])}}return a}},{}],6:[function(t,e,r){var n=new ArrayBuffer(0),i=function(t,e,r,i){this.gl=t,this.buffer=t.createBuffer(),this.type=e||t.ARRAY_BUFFER,this.drawType=i||t.STATIC_DRAW,this.data=n,r&&this.upload(r)};i.prototype.upload=function(t,e,r){r||this.bind();var n=this.gl;t=t||this.data,e=e||0,this.data.byteLength>=t.byteLength?n.bufferSubData(this.type,e,t):n.bufferData(this.type,t,this.drawType),this.data=t},i.prototype.bind=function(){var t=this.gl;t.bindBuffer(this.type,this.buffer)},i.createVertexBuffer=function(t,e,r){return new i(t,t.ARRAY_BUFFER,e,r)},i.createIndexBuffer=function(t,e,r){return new i(t,t.ELEMENT_ARRAY_BUFFER,e,r)},i.create=function(t,e,r,n){return new i(t,e,r,n)},i.prototype.destroy=function(){this.gl.deleteBuffer(this.buffer)},e.exports=i},{}],7:[function(t,e,r){var n=t(\"./GLTexture\"),i=function(t,e,r){this.gl=t,this.framebuffer=t.createFramebuffer(),this.stencil=null,this.texture=null,this.width=e||100,this.height=r||100};i.prototype.enableTexture=function(t){var e=this.gl;this.texture=t||new n(e),this.texture.bind(),this.bind(),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,this.texture.texture,0)},i.prototype.enableStencil=function(){if(!this.stencil){var t=this.gl;this.stencil=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,this.stencil),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,this.stencil),t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,this.width,this.height)}},i.prototype.clear=function(t,e,r,n){this.bind();var i=this.gl;i.clearColor(t,e,r,n),i.clear(i.COLOR_BUFFER_BIT)},i.prototype.bind=function(){var t=this.gl;t.bindFramebuffer(t.FRAMEBUFFER,this.framebuffer)},i.prototype.unbind=function(){var t=this.gl;t.bindFramebuffer(t.FRAMEBUFFER,null)},i.prototype.resize=function(t,e){var r=this.gl;this.width=t,this.height=e,this.texture&&this.texture.uploadData(null,t,e),this.stencil&&(r.bindRenderbuffer(r.RENDERBUFFER,this.stencil),r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,t,e))},i.prototype.destroy=function(){var t=this.gl;this.texture&&this.texture.destroy(),t.deleteFramebuffer(this.framebuffer),this.gl=null,this.stencil=null,this.texture=null},i.createRGBA=function(t,e,r,o){var s=n.fromData(t,null,e,r);s.enableNearestScaling(),s.enableWrapClamp();var a=new i(t,e,r);return a.enableTexture(s),a.unbind(),a},i.createFloat32=function(t,e,r,o){var s=new n.fromData(t,o,e,r);s.enableNearestScaling(),s.enableWrapClamp();var a=new i(t,e,r);return a.enableTexture(s),a.unbind(),a},e.exports=i},{\"./GLTexture\":9}],8:[function(t,e,r){var n=t(\"./shader/compileProgram\"),i=t(\"./shader/extractAttributes\"),o=t(\"./shader/extractUniforms\"),s=t(\"./shader/generateUniformAccessObject\"),a=function(t,e,r){this.gl=t,this.program=n(t,e,r),this.attributes=i(t,this.program);var a=o(t,this.program);this.uniforms=s(t,a)};a.prototype.bind=function(){this.gl.useProgram(this.program)},a.prototype.destroy=function(){},e.exports=a},{\"./shader/compileProgram\":14,\"./shader/extractAttributes\":16,\"./shader/extractUniforms\":17,\"./shader/generateUniformAccessObject\":18}],9:[function(t,e,r){var n=function(t,e,r,n,i){this.gl=t,this.texture=t.createTexture(),this.mipmap=!1,this.premultiplyAlpha=!1,this.width=e||-1,this.height=r||-1,this.format=n||t.RGBA,this.type=i||t.UNSIGNED_BYTE};n.prototype.upload=function(t){this.bind();var e=this.gl;e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this.premultiplyAlpha);var r=t.videoWidth||t.width,n=t.videoHeight||t.height;n!==this.height||r!==this.width?e.texImage2D(e.TEXTURE_2D,0,this.format,this.format,this.type,t):e.texSubImage2D(e.TEXTURE_2D,0,0,0,this.format,this.type,t),this.width=r,this.height=n};var i=!1;n.prototype.uploadData=function(t,e,r){this.bind();var n=this.gl;if(t instanceof Float32Array){if(!i){var o=n.getExtension(\"OES_texture_float\");if(!o)throw new Error(\"floating point textures not available\");i=!0}this.type=n.FLOAT}else this.type=n.UNSIGNED_BYTE;n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this.premultiplyAlpha),e!==this.width||r!==this.height?n.texImage2D(n.TEXTURE_2D,0,this.format,e,r,0,this.format,this.type,t||null):n.texSubImage2D(n.TEXTURE_2D,0,0,0,e,r,this.format,this.type,t||null),this.width=e,this.height=r},n.prototype.bind=function(t){var e=this.gl;void 0!==t&&e.activeTexture(e.TEXTURE0+t),e.bindTexture(e.TEXTURE_2D,this.texture)},n.prototype.unbind=function(){var t=this.gl;t.bindTexture(t.TEXTURE_2D,null)},n.prototype.minFilter=function(t){var e=this.gl;this.bind(),this.mipmap?e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,t?e.LINEAR_MIPMAP_LINEAR:e.NEAREST_MIPMAP_NEAREST):e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,t?e.LINEAR:e.NEAREST)},n.prototype.magFilter=function(t){var e=this.gl;this.bind(),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,t?e.LINEAR:e.NEAREST)},n.prototype.enableMipmap=function(){var t=this.gl;this.bind(),this.mipmap=!0,t.generateMipmap(t.TEXTURE_2D)},n.prototype.enableLinearScaling=function(){this.minFilter(!0),this.magFilter(!0)},n.prototype.enableNearestScaling=function(){this.minFilter(!1),this.magFilter(!1)},n.prototype.enableWrapClamp=function(){var t=this.gl;this.bind(),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)},n.prototype.enableWrapRepeat=function(){var t=this.gl;this.bind(),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.REPEAT),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.REPEAT)},n.prototype.enableWrapMirrorRepeat=function(){var t=this.gl;this.bind(),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.MIRRORED_REPEAT),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.MIRRORED_REPEAT)},n.prototype.destroy=function(){var t=this.gl;t.deleteTexture(this.texture)},n.fromSource=function(t,e,r){var i=new n(t);return i.premultiplyAlpha=r||!1,i.upload(e),i},n.fromData=function(t,e,r,i){var o=new n(t);return o.uploadData(e,r,i),o},e.exports=n},{}],10:[function(t,e,r){function n(t,e){if(this.nativeVaoExtension=null,n.FORCE_NATIVE||(this.nativeVaoExtension=t.getExtension(\"OES_vertex_array_object\")||t.getExtension(\"MOZ_OES_vertex_array_object\")||t.getExtension(\"WEBKIT_OES_vertex_array_object\")),this.nativeState=e,this.nativeVaoExtension){this.nativeVao=this.nativeVaoExtension.createVertexArrayOES();var r=t.getParameter(t.MAX_VERTEX_ATTRIBS);this.nativeState={tempAttribState:new Array(r),attribState:new Array(r)}}this.gl=t,this.attributes=[],this.indexBuffer=null,this.dirty=!1}var i=t(\"./setVertexAttribArrays\");n.prototype.constructor=n,e.exports=n,n.FORCE_NATIVE=!1,n.prototype.bind=function(){return this.nativeVao?(this.nativeVaoExtension.bindVertexArrayOES(this.nativeVao),this.dirty&&(this.dirty=!1,this.activate())):this.activate(),this},n.prototype.unbind=function(){return this.nativeVao&&this.nativeVaoExtension.bindVertexArrayOES(null),this},n.prototype.activate=function(){for(var t=this.gl,e=null,r=0;r<this.attributes.length;r++){var n=this.attributes[r];e!==n.buffer&&(n.buffer.bind(),e=n.buffer),t.vertexAttribPointer(n.attribute.location,n.attribute.size,n.type||t.FLOAT,n.normalized||!1,n.stride||0,n.start||0)}return i(t,this.attributes,this.nativeState),this.indexBuffer.bind(),this},n.prototype.addAttribute=function(t,e,r,n,i,o){return this.attributes.push({buffer:t,attribute:e,location:e.location,type:r||this.gl.FLOAT,normalized:n||!1,stride:i||0,start:o||0}),this.dirty=!0,this},n.prototype.addIndex=function(t){return this.indexBuffer=t,this.dirty=!0,this},n.prototype.clear=function(){return this.nativeVao&&this.nativeVaoExtension.bindVertexArrayOES(this.nativeVao),this.attributes.length=0,this.indexBuffer=null,this},n.prototype.draw=function(t,e,r){var n=this.gl;return n.drawElements(t,e,n.UNSIGNED_SHORT,r||0),this},n.prototype.destroy=function(){this.gl=null,this.indexBuffer=null,this.attributes=null,this.nativeState=null,this.nativeVao&&this.nativeVaoExtension.deleteVertexArrayOES(this.nativeVao),this.nativeVaoExtension=null,this.nativeVao=null}},{\"./setVertexAttribArrays\":13}],11:[function(t,e,r){var n=function(t,e){var r=t.getContext(\"webgl\",e)||t.getContext(\"experimental-webgl\",e);if(!r)throw new Error(\"This browser does not support webGL. Try using the canvas renderer\");return r};e.exports=n},{}],12:[function(t,e,r){var n={createContext:t(\"./createContext\"),setVertexAttribArrays:t(\"./setVertexAttribArrays\"),GLBuffer:t(\"./GLBuffer\"),GLFramebuffer:t(\"./GLFramebuffer\"),GLShader:t(\"./GLShader\"),GLTexture:t(\"./GLTexture\"),VertexArrayObject:t(\"./VertexArrayObject\"),shader:t(\"./shader\")};\"undefined\"!=typeof e&&e.exports&&(e.exports=n),\"undefined\"!=typeof window&&(window.PIXI=window.PIXI||{},window.PIXI.glCore=n)},{\"./GLBuffer\":6,\"./GLFramebuffer\":7,\"./GLShader\":8,\"./GLTexture\":9,\"./VertexArrayObject\":10,\"./createContext\":11,\"./setVertexAttribArrays\":13,\"./shader\":19}],13:[function(t,e,r){var n=function(t,e,r){var n;if(r){var i=r.tempAttribState,o=r.attribState;for(n=0;n<i.length;n++)i[n]=!1;for(n=0;n<e.length;n++)i[e[n].attribute.location]=!0;for(n=0;n<o.length;n++)o[n]!==i[n]&&(o[n]=i[n],r.attribState[n]?t.enableVertexAttribArray(n):t.disableVertexAttribArray(n))}else for(n=0;n<e.length;n++){var s=e[n];t.enableVertexAttribArray(s.attribute.location)}};e.exports=n},{}],14:[function(t,e,r){var n=function(t,e,r){var n=i(t,t.VERTEX_SHADER,e),o=i(t,t.FRAGMENT_SHADER,r),s=t.createProgram();return t.attachShader(s,n),t.attachShader(s,o),t.linkProgram(s),t.getProgramParameter(s,t.LINK_STATUS)||(console.error(\"Pixi.js Error: Could not initialize shader.\"),console.error(\"gl.VALIDATE_STATUS\",t.getProgramParameter(s,t.VALIDATE_STATUS)),console.error(\"gl.getError()\",t.getError()),\"\"!==t.getProgramInfoLog(s)&&console.warn(\"Pixi.js Warning: gl.getProgramInfoLog()\",t.getProgramInfoLog(s)),t.deleteProgram(s),s=null),t.deleteShader(n),t.deleteShader(o),s},i=function(t,e,r){var n=t.createShader(e);return t.shaderSource(n,r),t.compileShader(n),t.getShaderParameter(n,t.COMPILE_STATUS)?n:(console.log(t.getShaderInfoLog(n)),null)};e.exports=n},{}],15:[function(t,e,r){var n=function(t,e){switch(t){case\"float\":return 0;case\"vec2\":return new Float32Array(2*e);case\"vec3\":return new Float32Array(3*e);case\"vec4\":return new Float32Array(4*e);case\"int\":case\"sampler2D\":return 0;case\"ivec2\":return new Int32Array(2*e);case\"ivec3\":return new Int32Array(3*e);case\"ivec4\":return new Int32Array(4*e);case\"bool\":return!1;case\"bvec2\":return i(2*e);case\"bvec3\":return i(3*e);case\"bvec4\":return i(4*e);case\"mat2\":return new Float32Array([1,0,0,1]);case\"mat3\":return new Float32Array([1,0,0,0,1,0,0,0,1]);case\"mat4\":return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}},i=function(t){for(var e=new Array(t),r=0;r<e.length;r++)e[r]=!1;return e};e.exports=n},{}],16:[function(t,e,r){var n=t(\"./mapType\"),i=t(\"./mapSize\"),o=function(t,e){for(var r={},o=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES),a=0;a<o;a++){var u=t.getActiveAttrib(e,a),h=n(t,u.type);r[u.name]={type:h,size:i(h),location:t.getAttribLocation(e,u.name),pointer:s}}return r},s=function(t,e,r,n){gl.vertexAttribPointer(this.location,this.size,t||gl.FLOAT,e||!1,r||0,n||0)};e.exports=o},{\"./mapSize\":20,\"./mapType\":21}],17:[function(t,e,r){var n=t(\"./mapType\"),i=t(\"./defaultValue\"),o=function(t,e){for(var r={},o=t.getProgramParameter(e,t.ACTIVE_UNIFORMS),s=0;s<o;s++){var a=t.getActiveUniform(e,s),u=a.name.replace(/\\[.*?\\]/,\"\"),h=n(t,a.type);r[u]={type:h,size:a.size,location:t.getUniformLocation(e,u),value:i(h,a.size)}}return r};e.exports=o},{\"./defaultValue\":15,\"./mapType\":21}],18:[function(t,e,r){var n=function(t,e){var r={data:{}};r.gl=t;for(var n=Object.keys(e),a=0;a<n.length;a++){var u=n[a],h=u.split(\".\"),l=h[h.length-1],c=s(h,r),d=e[u];c.data[l]=d,c.gl=t,Object.defineProperty(c,l,{get:i(l),set:o(l,d)})}return r},i=function(t){var e=a.replace(\"%%\",t);return new Function(e)},o=function(t,e){var r,n=u.replace(/%%/g,t);return r=1===e.size?h[e.type]:l[e.type],r&&(n+=\"\\nthis.gl.\"+r+\";\"),new Function(\"value\",n)},s=function(t,e){for(var r=e,n=0;n<t.length-1;n++){var i=r[t[n]]||{data:{}};r[t[n]]=i,r=i}return r},a=[\"return this.data.%%.value;\"].join(\"\\n\"),u=[\"this.data.%%.value = value;\",\"var location = this.data.%%.location;\"].join(\"\\n\"),h={float:\"uniform1f(location, value)\",vec2:\"uniform2f(location, value[0], value[1])\",vec3:\"uniform3f(location, value[0], value[1], value[2])\",vec4:\"uniform4f(location, value[0], value[1], value[2], value[3])\",int:\"uniform1i(location, value)\",ivec2:\"uniform2i(location, value[0], value[1])\",ivec3:\"uniform3i(location, value[0], value[1], value[2])\",ivec4:\"uniform4i(location, value[0], value[1], value[2], value[3])\",bool:\"uniform1i(location, value)\",bvec2:\"uniform2i(location, value[0], value[1])\",bvec3:\"uniform3i(location, value[0], value[1], value[2])\",bvec4:\"uniform4i(location, value[0], value[1], value[2], value[3])\",mat2:\"uniformMatrix2fv(location, false, value)\",mat3:\"uniformMatrix3fv(location, false, value)\",mat4:\"uniformMatrix4fv(location, false, value)\",sampler2D:\"uniform1i(location, value)\"},l={float:\"uniform1fv(location, value)\",vec2:\"uniform2fv(location, value)\",vec3:\"uniform3fv(location, value)\",vec4:\"uniform4fv(location, value)\",int:\"uniform1iv(location, value)\",ivec2:\"uniform2iv(location, value)\",ivec3:\"uniform3iv(location, value)\",ivec4:\"uniform4iv(location, value)\",bool:\"uniform1iv(location, value)\",bvec2:\"uniform2iv(location, value)\",bvec3:\"uniform3iv(location, value)\",bvec4:\"uniform4iv(location, value)\",sampler2D:\"uniform1iv(location, value)\"};e.exports=n},{}],19:[function(t,e,r){e.exports={compileProgram:t(\"./compileProgram\"),defaultValue:t(\"./defaultValue\"),extractAttributes:t(\"./extractAttributes\"),extractUniforms:t(\"./extractUniforms\"),generateUniformAccessObject:t(\"./generateUniformAccessObject\"),mapSize:t(\"./mapSize\"),mapType:t(\"./mapType\")}},{\"./compileProgram\":14,\"./defaultValue\":15,\"./extractAttributes\":16,\"./extractUniforms\":17,\"./generateUniformAccessObject\":18,\"./mapSize\":20,\"./mapType\":21}],20:[function(t,e,r){var n=function(t){return i[t]},i={float:1,vec2:2,vec3:3,vec4:4,int:1,ivec2:2,ivec3:3,ivec4:4,bool:1,bvec2:2,bvec3:3,bvec4:4,mat2:4,mat3:9,mat4:16,sampler2D:1};e.exports=n},{}],21:[function(t,e,r){var n=function(t,e){if(!i){var r=Object.keys(o);i={};for(var n=0;n<r.length;++n){var s=r[n];i[t[s]]=o[s]}}return i[e]},i=null,o={FLOAT:\"float\",FLOAT_VEC2:\"vec2\",FLOAT_VEC3:\"vec3\",FLOAT_VEC4:\"vec4\",INT:\"int\",INT_VEC2:\"ivec2\",INT_VEC3:\"ivec3\",INT_VEC4:\"ivec4\",BOOL:\"bool\",BOOL_VEC2:\"bvec2\",BOOL_VEC3:\"bvec3\",BOOL_VEC4:\"bvec4\",FLOAT_MAT2:\"mat2\",FLOAT_MAT3:\"mat3\",FLOAT_MAT4:\"mat4\",SAMPLER_2D:\"sampler2D\"};e.exports=n},{}],22:[function(t,e,r){(function(t){function e(t,e){for(var r=0,n=t.length-1;n>=0;n--){var i=t[n];\".\"===i?t.splice(n,1):\"..\"===i?(t.splice(n,1),r++):r&&(t.splice(n,1),r--)}if(e)for(;r--;r)t.unshift(\"..\");return t}function n(t,e){if(t.filter)return t.filter(e);for(var r=[],n=0;n<t.length;n++)e(t[n],n,t)&&r.push(t[n]);return r}var i=/^(\\/?|)([\\s\\S]*?)((?:\\.{1,2}|[^\\/]+?|)(\\.[^.\\/]*|))(?:[\\/]*)$/,o=function(t){return i.exec(t).slice(1)};r.resolve=function(){for(var r=\"\",i=!1,o=arguments.length-1;o>=-1&&!i;o--){var s=o>=0?arguments[o]:t.cwd();if(\"string\"!=typeof s)throw new TypeError(\"Arguments to path.resolve must be strings\");s&&(r=s+\"/\"+r,i=\"/\"===s.charAt(0))}return r=e(n(r.split(\"/\"),function(t){return!!t}),!i).join(\"/\"),(i?\"/\":\"\")+r||\".\"},r.normalize=function(t){var i=r.isAbsolute(t),o=\"/\"===s(t,-1);return t=e(n(t.split(\"/\"),function(t){return!!t}),!i).join(\"/\"),t||i||(t=\".\"),t&&o&&(t+=\"/\"),(i?\"/\":\"\")+t},r.isAbsolute=function(t){return\"/\"===t.charAt(0)},r.join=function(){var t=Array.prototype.slice.call(arguments,0);return r.normalize(n(t,function(t,e){if(\"string\"!=typeof t)throw new TypeError(\"Arguments to path.join must be strings\");return t}).join(\"/\"))},r.relative=function(t,e){function n(t){for(var e=0;e<t.length&&\"\"===t[e];e++);for(var r=t.length-1;r>=0&&\"\"===t[r];r--);return e>r?[]:t.slice(e,r-e+1)}t=r.resolve(t).substr(1),e=r.resolve(e).substr(1);for(var i=n(t.split(\"/\")),o=n(e.split(\"/\")),s=Math.min(i.length,o.length),a=s,u=0;u<s;u++)if(i[u]!==o[u]){a=u;break}for(var h=[],u=a;u<i.length;u++)h.push(\"..\");return h=h.concat(o.slice(a)),h.join(\"/\")},r.sep=\"/\",r.delimiter=\":\",r.dirname=function(t){var e=o(t),r=e[0],n=e[1];return r||n?(n&&(n=n.substr(0,n.length-1)),r+n):\".\"},r.basename=function(t,e){var r=o(t)[2];return e&&r.substr(-1*e.length)===e&&(r=r.substr(0,r.length-e.length)),r},r.extname=function(t){return o(t)[3]};var s=\"b\"===\"ab\".substr(-1)?function(t,e,r){return t.substr(e,r)}:function(t,e,r){return e<0&&(e=t.length+e),t.substr(e,r)}}).call(this,t(\"_process\"))},{_process:23}],23:[function(t,e,r){function n(){throw new Error(\"setTimeout has not been defined\")}function i(){throw new Error(\"clearTimeout has not been defined\")}function o(t){if(c===setTimeout)return setTimeout(t,0);if((c===n||!c)&&setTimeout)return c=setTimeout,setTimeout(t,0);try{return c(t,0)}catch(e){try{return c.call(null,t,0)}catch(e){return c.call(this,t,0)}}}function s(t){if(d===clearTimeout)return clearTimeout(t);if((d===i||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(t);try{return d(t)}catch(e){try{return d.call(null,t)}catch(e){return d.call(this,t)}}}function a(){y&&p&&(y=!1,p.length?v=p.concat(v):g=-1,v.length&&u())}function u(){if(!y){var t=o(a);y=!0;for(var e=v.length;e;){for(p=v,v=[];++g<e;)p&&p[g].run();g=-1,e=v.length}p=null,y=!1,s(t)}}function h(t,e){this.fun=t,this.array=e}function l(){}var c,d,f=e.exports={};!function(){try{c=\"function\"==typeof setTimeout?setTimeout:n}catch(t){c=n}try{d=\"function\"==typeof clearTimeout?clearTimeout:i;\n}catch(t){d=i}}();var p,v=[],y=!1,g=-1;f.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];v.push(new h(t,e)),1!==v.length||y||o(u)},h.prototype.run=function(){this.fun.apply(null,this.array)},f.title=\"browser\",f.browser=!0,f.env={},f.argv=[],f.version=\"\",f.versions={},f.on=l,f.addListener=l,f.once=l,f.off=l,f.removeListener=l,f.removeAllListeners=l,f.emit=l,f.binding=function(t){throw new Error(\"process.binding is not supported\")},f.cwd=function(){return\"/\"},f.chdir=function(t){throw new Error(\"process.chdir is not supported\")},f.umask=function(){return 0}},{}],24:[function(e,r,n){(function(e){!function(i){function o(t){throw new RangeError(L[t])}function s(t,e){for(var r=t.length,n=[];r--;)n[r]=e(t[r]);return n}function a(t,e){var r=t.split(\"@\"),n=\"\";r.length>1&&(n=r[0]+\"@\",t=r[1]),t=t.replace(I,\".\");var i=t.split(\".\"),o=s(i,e).join(\".\");return n+o}function u(t){for(var e,r,n=[],i=0,o=t.length;i<o;)e=t.charCodeAt(i++),e>=55296&&e<=56319&&i<o?(r=t.charCodeAt(i++),56320==(64512&r)?n.push(((1023&e)<<10)+(1023&r)+65536):(n.push(e),i--)):n.push(e);return n}function h(t){return s(t,function(t){var e=\"\";return t>65535&&(t-=65536,e+=F(t>>>10&1023|55296),t=56320|1023&t),e+=F(t)}).join(\"\")}function l(t){return t-48<10?t-22:t-65<26?t-65:t-97<26?t-97:w}function c(t,e){return t+22+75*(t<26)-((0!=e)<<5)}function d(t,e,r){var n=0;for(t=r?B(t/M):t>>1,t+=B(t/e);t>j*O>>1;n+=w)t=B(t/j);return B(n+(j+1)*t/(t+S))}function f(t){var e,r,n,i,s,a,u,c,f,p,v=[],y=t.length,g=0,m=C,_=P;for(r=t.lastIndexOf(R),r<0&&(r=0),n=0;n<r;++n)t.charCodeAt(n)>=128&&o(\"not-basic\"),v.push(t.charCodeAt(n));for(i=r>0?r+1:0;i<y;){for(s=g,a=1,u=w;i>=y&&o(\"invalid-input\"),c=l(t.charCodeAt(i++)),(c>=w||c>B((T-g)/a))&&o(\"overflow\"),g+=c*a,f=u<=_?E:u>=_+O?O:u-_,!(c<f);u+=w)p=w-f,a>B(T/p)&&o(\"overflow\"),a*=p;e=v.length+1,_=d(g-s,e,0==s),B(g/e)>T-m&&o(\"overflow\"),m+=B(g/e),g%=e,v.splice(g++,0,m)}return h(v)}function p(t){var e,r,n,i,s,a,h,l,f,p,v,y,g,m,_,b=[];for(t=u(t),y=t.length,e=C,r=0,s=P,a=0;a<y;++a)v=t[a],v<128&&b.push(F(v));for(n=i=b.length,i&&b.push(R);n<y;){for(h=T,a=0;a<y;++a)v=t[a],v>=e&&v<h&&(h=v);for(g=n+1,h-e>B((T-r)/g)&&o(\"overflow\"),r+=(h-e)*g,e=h,a=0;a<y;++a)if(v=t[a],v<e&&++r>T&&o(\"overflow\"),v==e){for(l=r,f=w;p=f<=s?E:f>=s+O?O:f-s,!(l<p);f+=w)_=l-p,m=w-p,b.push(F(c(p+_%m,0))),l=B(_/m);b.push(F(c(l,0))),s=d(r,g,n==i),r=0,++n}++r,++e}return b.join(\"\")}function v(t){return a(t,function(t){return A.test(t)?f(t.slice(4).toLowerCase()):t})}function y(t){return a(t,function(t){return D.test(t)?\"xn--\"+p(t):t})}var g=\"object\"==typeof n&&n&&!n.nodeType&&n,m=\"object\"==typeof r&&r&&!r.nodeType&&r,_=\"object\"==typeof e&&e;_.global!==_&&_.window!==_&&_.self!==_||(i=_);var b,x,T=2147483647,w=36,E=1,O=26,S=38,M=700,P=72,C=128,R=\"-\",A=/^xn--/,D=/[^\\x20-\\x7E]/,I=/[\\x2E\\u3002\\uFF0E\\uFF61]/g,L={overflow:\"Overflow: input needs wider integers to process\",\"not-basic\":\"Illegal input >= 0x80 (not a basic code point)\",\"invalid-input\":\"Invalid input\"},j=w-E,B=Math.floor,F=String.fromCharCode;if(b={version:\"1.4.1\",ucs2:{decode:u,encode:h},decode:f,encode:p,toASCII:y,toUnicode:v},\"function\"==typeof t&&\"object\"==typeof t.amd&&t.amd)t(\"punycode\",function(){return b});else if(g&&m)if(r.exports==g)m.exports=b;else for(x in b)b.hasOwnProperty(x)&&(g[x]=b[x]);else i.punycode=b}(this)}).call(this,\"undefined\"!=typeof global?global:\"undefined\"!=typeof self?self:\"undefined\"!=typeof window?window:{})},{}],25:[function(t,e,r){\"use strict\";function n(t,e){return Object.prototype.hasOwnProperty.call(t,e)}e.exports=function(t,e,r,o){e=e||\"&\",r=r||\"=\";var s={};if(\"string\"!=typeof t||0===t.length)return s;var a=/\\+/g;t=t.split(e);var u=1e3;o&&\"number\"==typeof o.maxKeys&&(u=o.maxKeys);var h=t.length;u>0&&h>u&&(h=u);for(var l=0;l<h;++l){var c,d,f,p,v=t[l].replace(a,\"%20\"),y=v.indexOf(r);y>=0?(c=v.substr(0,y),d=v.substr(y+1)):(c=v,d=\"\"),f=decodeURIComponent(c),p=decodeURIComponent(d),n(s,f)?i(s[f])?s[f].push(p):s[f]=[s[f],p]:s[f]=p}return s};var i=Array.isArray||function(t){return\"[object Array]\"===Object.prototype.toString.call(t)}},{}],26:[function(t,e,r){\"use strict\";function n(t,e){if(t.map)return t.map(e);for(var r=[],n=0;n<t.length;n++)r.push(e(t[n],n));return r}var i=function(t){switch(typeof t){case\"string\":return t;case\"boolean\":return t?\"true\":\"false\";case\"number\":return isFinite(t)?t:\"\";default:return\"\"}};e.exports=function(t,e,r,a){return e=e||\"&\",r=r||\"=\",null===t&&(t=void 0),\"object\"==typeof t?n(s(t),function(s){var a=encodeURIComponent(i(s))+r;return o(t[s])?n(t[s],function(t){return a+encodeURIComponent(i(t))}).join(e):a+encodeURIComponent(i(t[s]))}).join(e):a?encodeURIComponent(i(a))+r+encodeURIComponent(i(t)):\"\"};var o=Array.isArray||function(t){return\"[object Array]\"===Object.prototype.toString.call(t)},s=Object.keys||function(t){var e=[];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.push(r);return e}},{}],27:[function(t,e,r){\"use strict\";r.decode=r.parse=t(\"./decode\"),r.encode=r.stringify=t(\"./encode\")},{\"./decode\":25,\"./encode\":26}],28:[function(t,e,r){\"use strict\";function n(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}function i(t,e,r){if(t&&h.isObject(t)&&t instanceof n)return t;var i=new n;return i.parse(t,e,r),i}function o(t){return h.isString(t)&&(t=i(t)),t instanceof n?t.format():n.prototype.format.call(t)}function s(t,e){return i(t,!1,!0).resolve(e)}function a(t,e){return t?i(t,!1,!0).resolveObject(e):e}var u=t(\"punycode\"),h=t(\"./util\");r.parse=i,r.resolve=s,r.resolveObject=a,r.format=o,r.Url=n;var l=/^([a-z0-9.+-]+:)/i,c=/:[0-9]*$/,d=/^(\\/\\/?(?!\\/)[^\\?\\s]*)(\\?[^\\s]*)?$/,f=[\"<\",\">\",'\"',\"`\",\" \",\"\\r\",\"\\n\",\"\\t\"],p=[\"{\",\"}\",\"|\",\"\\\\\",\"^\",\"`\"].concat(f),v=[\"'\"].concat(p),y=[\"%\",\"/\",\"?\",\";\",\"#\"].concat(v),g=[\"/\",\"?\",\"#\"],m=255,_=/^[+a-z0-9A-Z_-]{0,63}$/,b=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,x={javascript:!0,\"javascript:\":!0},T={javascript:!0,\"javascript:\":!0},w={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,\"http:\":!0,\"https:\":!0,\"ftp:\":!0,\"gopher:\":!0,\"file:\":!0},E=t(\"querystring\");n.prototype.parse=function(t,e,r){if(!h.isString(t))throw new TypeError(\"Parameter 'url' must be a string, not \"+typeof t);var n=t.indexOf(\"?\"),i=n!==-1&&n<t.indexOf(\"#\")?\"?\":\"#\",o=t.split(i),s=/\\\\/g;o[0]=o[0].replace(s,\"/\"),t=o.join(i);var a=t;if(a=a.trim(),!r&&1===t.split(\"#\").length){var c=d.exec(a);if(c)return this.path=a,this.href=a,this.pathname=c[1],c[2]?(this.search=c[2],e?this.query=E.parse(this.search.substr(1)):this.query=this.search.substr(1)):e&&(this.search=\"\",this.query={}),this}var f=l.exec(a);if(f){f=f[0];var p=f.toLowerCase();this.protocol=p,a=a.substr(f.length)}if(r||f||a.match(/^\\/\\/[^@\\/]+@[^@\\/]+/)){var O=\"//\"===a.substr(0,2);!O||f&&T[f]||(a=a.substr(2),this.slashes=!0)}if(!T[f]&&(O||f&&!w[f])){for(var S=-1,M=0;M<g.length;M++){var P=a.indexOf(g[M]);P!==-1&&(S===-1||P<S)&&(S=P)}var C,R;R=S===-1?a.lastIndexOf(\"@\"):a.lastIndexOf(\"@\",S),R!==-1&&(C=a.slice(0,R),a=a.slice(R+1),this.auth=decodeURIComponent(C)),S=-1;for(var M=0;M<y.length;M++){var P=a.indexOf(y[M]);P!==-1&&(S===-1||P<S)&&(S=P)}S===-1&&(S=a.length),this.host=a.slice(0,S),a=a.slice(S),this.parseHost(),this.hostname=this.hostname||\"\";var A=\"[\"===this.hostname[0]&&\"]\"===this.hostname[this.hostname.length-1];if(!A)for(var D=this.hostname.split(/\\./),M=0,I=D.length;M<I;M++){var L=D[M];if(L&&!L.match(_)){for(var j=\"\",B=0,F=L.length;B<F;B++)j+=L.charCodeAt(B)>127?\"x\":L[B];if(!j.match(_)){var N=D.slice(0,M),k=D.slice(M+1),U=L.match(b);U&&(N.push(U[1]),k.unshift(U[2])),k.length&&(a=\"/\"+k.join(\".\")+a),this.hostname=N.join(\".\");break}}}this.hostname.length>m?this.hostname=\"\":this.hostname=this.hostname.toLowerCase(),A||(this.hostname=u.toASCII(this.hostname));var X=this.port?\":\"+this.port:\"\",W=this.hostname||\"\";this.host=W+X,this.href+=this.host,A&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),\"/\"!==a[0]&&(a=\"/\"+a))}if(!x[p])for(var M=0,I=v.length;M<I;M++){var G=v[M];if(a.indexOf(G)!==-1){var H=encodeURIComponent(G);H===G&&(H=escape(G)),a=a.split(G).join(H)}}var V=a.indexOf(\"#\");V!==-1&&(this.hash=a.substr(V),a=a.slice(0,V));var Y=a.indexOf(\"?\");if(Y!==-1?(this.search=a.substr(Y),this.query=a.substr(Y+1),e&&(this.query=E.parse(this.query)),a=a.slice(0,Y)):e&&(this.search=\"\",this.query={}),a&&(this.pathname=a),w[p]&&this.hostname&&!this.pathname&&(this.pathname=\"/\"),this.pathname||this.search){var X=this.pathname||\"\",z=this.search||\"\";this.path=X+z}return this.href=this.format(),this},n.prototype.format=function(){var t=this.auth||\"\";t&&(t=encodeURIComponent(t),t=t.replace(/%3A/i,\":\"),t+=\"@\");var e=this.protocol||\"\",r=this.pathname||\"\",n=this.hash||\"\",i=!1,o=\"\";this.host?i=t+this.host:this.hostname&&(i=t+(this.hostname.indexOf(\":\")===-1?this.hostname:\"[\"+this.hostname+\"]\"),this.port&&(i+=\":\"+this.port)),this.query&&h.isObject(this.query)&&Object.keys(this.query).length&&(o=E.stringify(this.query));var s=this.search||o&&\"?\"+o||\"\";return e&&\":\"!==e.substr(-1)&&(e+=\":\"),this.slashes||(!e||w[e])&&i!==!1?(i=\"//\"+(i||\"\"),r&&\"/\"!==r.charAt(0)&&(r=\"/\"+r)):i||(i=\"\"),n&&\"#\"!==n.charAt(0)&&(n=\"#\"+n),s&&\"?\"!==s.charAt(0)&&(s=\"?\"+s),r=r.replace(/[?#]/g,function(t){return encodeURIComponent(t)}),s=s.replace(\"#\",\"%23\"),e+i+r+s+n},n.prototype.resolve=function(t){return this.resolveObject(i(t,!1,!0)).format()},n.prototype.resolveObject=function(t){if(h.isString(t)){var e=new n;e.parse(t,!1,!0),t=e}for(var r=new n,i=Object.keys(this),o=0;o<i.length;o++){var s=i[o];r[s]=this[s]}if(r.hash=t.hash,\"\"===t.href)return r.href=r.format(),r;if(t.slashes&&!t.protocol){for(var a=Object.keys(t),u=0;u<a.length;u++){var l=a[u];\"protocol\"!==l&&(r[l]=t[l])}return w[r.protocol]&&r.hostname&&!r.pathname&&(r.path=r.pathname=\"/\"),r.href=r.format(),r}if(t.protocol&&t.protocol!==r.protocol){if(!w[t.protocol]){for(var c=Object.keys(t),d=0;d<c.length;d++){var f=c[d];r[f]=t[f]}return r.href=r.format(),r}if(r.protocol=t.protocol,t.host||T[t.protocol])r.pathname=t.pathname;else{for(var p=(t.pathname||\"\").split(\"/\");p.length&&!(t.host=p.shift()););t.host||(t.host=\"\"),t.hostname||(t.hostname=\"\"),\"\"!==p[0]&&p.unshift(\"\"),p.length<2&&p.unshift(\"\"),r.pathname=p.join(\"/\")}if(r.search=t.search,r.query=t.query,r.host=t.host||\"\",r.auth=t.auth,r.hostname=t.hostname||t.host,r.port=t.port,r.pathname||r.search){var v=r.pathname||\"\",y=r.search||\"\";r.path=v+y}return r.slashes=r.slashes||t.slashes,r.href=r.format(),r}var g=r.pathname&&\"/\"===r.pathname.charAt(0),m=t.host||t.pathname&&\"/\"===t.pathname.charAt(0),_=m||g||r.host&&t.pathname,b=_,x=r.pathname&&r.pathname.split(\"/\")||[],p=t.pathname&&t.pathname.split(\"/\")||[],E=r.protocol&&!w[r.protocol];if(E&&(r.hostname=\"\",r.port=null,r.host&&(\"\"===x[0]?x[0]=r.host:x.unshift(r.host)),r.host=\"\",t.protocol&&(t.hostname=null,t.port=null,t.host&&(\"\"===p[0]?p[0]=t.host:p.unshift(t.host)),t.host=null),_=_&&(\"\"===p[0]||\"\"===x[0])),m)r.host=t.host||\"\"===t.host?t.host:r.host,r.hostname=t.hostname||\"\"===t.hostname?t.hostname:r.hostname,r.search=t.search,r.query=t.query,x=p;else if(p.length)x||(x=[]),x.pop(),x=x.concat(p),r.search=t.search,r.query=t.query;else if(!h.isNullOrUndefined(t.search)){if(E){r.hostname=r.host=x.shift();var O=!!(r.host&&r.host.indexOf(\"@\")>0)&&r.host.split(\"@\");O&&(r.auth=O.shift(),r.host=r.hostname=O.shift())}return r.search=t.search,r.query=t.query,h.isNull(r.pathname)&&h.isNull(r.search)||(r.path=(r.pathname?r.pathname:\"\")+(r.search?r.search:\"\")),r.href=r.format(),r}if(!x.length)return r.pathname=null,r.search?r.path=\"/\"+r.search:r.path=null,r.href=r.format(),r;for(var S=x.slice(-1)[0],M=(r.host||t.host||x.length>1)&&(\".\"===S||\"..\"===S)||\"\"===S,P=0,C=x.length;C>=0;C--)S=x[C],\".\"===S?x.splice(C,1):\"..\"===S?(x.splice(C,1),P++):P&&(x.splice(C,1),P--);if(!_&&!b)for(;P--;P)x.unshift(\"..\");!_||\"\"===x[0]||x[0]&&\"/\"===x[0].charAt(0)||x.unshift(\"\"),M&&\"/\"!==x.join(\"/\").substr(-1)&&x.push(\"\");var R=\"\"===x[0]||x[0]&&\"/\"===x[0].charAt(0);if(E){r.hostname=r.host=R?\"\":x.length?x.shift():\"\";var O=!!(r.host&&r.host.indexOf(\"@\")>0)&&r.host.split(\"@\");O&&(r.auth=O.shift(),r.host=r.hostname=O.shift())}return _=_||r.host&&x.length,_&&!R&&x.unshift(\"\"),x.length?r.pathname=x.join(\"/\"):(r.pathname=null,r.path=null),h.isNull(r.pathname)&&h.isNull(r.search)||(r.path=(r.pathname?r.pathname:\"\")+(r.search?r.search:\"\")),r.auth=t.auth||r.auth,r.slashes=r.slashes||t.slashes,r.href=r.format(),r},n.prototype.parseHost=function(){var t=this.host,e=c.exec(t);e&&(e=e[0],\":\"!==e&&(this.port=e.substr(1)),t=t.substr(0,t.length-e.length)),t&&(this.hostname=t)}},{\"./util\":29,punycode:24,querystring:27}],29:[function(t,e,r){\"use strict\";e.exports={isString:function(t){return\"string\"==typeof t},isObject:function(t){return\"object\"==typeof t&&null!==t},isNull:function(t){return null===t},isNullOrUndefined:function(t){return null==t}}},{}],30:[function(t,e,r){\"use strict\";e.exports=function(t,e){e=e||{};for(var r={key:[\"source\",\"protocol\",\"authority\",\"userInfo\",\"user\",\"password\",\"host\",\"port\",\"relative\",\"path\",\"directory\",\"file\",\"query\",\"anchor\"],q:{name:\"queryKey\",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\\/?#]+):)?(?:\\/\\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\\/?#]*)(?::(\\d*))?))?((((?:[^?#\\/]*\\/)*)([^?#]*))(?:\\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\\/]*@)([^:\\/?#.]+):)?(?:\\/\\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\\/?#]*)(?::(\\d*))?)(((\\/(?:[^?#](?![^?#\\/]*\\.[^?#\\/.]+(?:[?#]|$)))*\\/?)?([^?#\\/]*))(?:\\?([^#]*))?(?:#(.*))?)/}},n=r.parser[e.strictMode?\"strict\":\"loose\"].exec(t),i={},o=14;o--;)i[r.key[o]]=n[o]||\"\";return i[r.q.name]={},i[r.key[12]].replace(r.q.parser,function(t,e,n){e&&(i[r.q.name][e]=n)}),i}},{}],31:[function(t,e,r){\"use strict\";function n(t,e){a.call(this),e=e||u,this.baseUrl=t||\"\",this.progress=0,this.loading=!1,this._progressChunk=0,this._beforeMiddleware=[],this._afterMiddleware=[],this._boundLoadResource=this._loadResource.bind(this),this._buffer=[],this._numToLoad=0,this._queue=o.queue(this._boundLoadResource,e),this.resources={}}var i=t(\"parse-uri\"),o=t(\"./async\"),s=t(\"./Resource\"),a=t(\"eventemitter3\"),u=10,h=100;n.prototype=Object.create(a.prototype),n.prototype.constructor=n,e.exports=n,n.prototype.add=n.prototype.enqueue=function(t,e,r,n){if(Array.isArray(t)){for(var i=0;i<t.length;++i)this.add(t[i]);return this}if(\"object\"==typeof t&&(n=e||t.callback||t.onComplete,r=t,e=t.url,t=t.name||t.key||t.url),\"string\"!=typeof e&&(n=r,r=e,e=t),\"string\"!=typeof e)throw new Error(\"No url passed to add resource to loader.\");if(\"function\"==typeof r&&(n=r,r=null),this.resources[t])throw new Error('Resource with name \"'+t+'\" already exists.');return e=this._prepareUrl(e),this.resources[t]=new s(t,e,r),\"function\"==typeof n&&this.resources[t].once(\"afterMiddleware\",n),this._numToLoad++,this._queue.started?(this._queue.push(this.resources[t]),this._progressChunk=(h-this.progress)/(this._queue.length()+this._queue.running())):(this._buffer.push(this.resources[t]),this._progressChunk=h/this._buffer.length),this},n.prototype.before=n.prototype.pre=function(t){return this._beforeMiddleware.push(t),this},n.prototype.after=n.prototype.use=function(t){return this._afterMiddleware.push(t),this},n.prototype.reset=function(){this.progress=0,this.loading=!1,this._progressChunk=0,this._buffer.length=0,this._numToLoad=0,this._queue.kill(),this._queue.started=!1;for(var t in this.resources){var e=this.resources[t];e.off(\"complete\",this._onLoad,this),e.isLoading&&e.abort()}return this.resources={},this},n.prototype.load=function(t){if(\"function\"==typeof t&&this.once(\"complete\",t),this._queue.started)return this;this.emit(\"start\",this),this.loading=!0;for(var e=0;e<this._buffer.length;++e)this._queue.push(this._buffer[e]);return this._buffer.length=0,this},n.prototype._prepareUrl=function(t){var e=i(t,{strictMode:!0});return e.protocol||!e.path||0===e.path.indexOf(\"//\")?t:this.baseUrl.length&&this.baseUrl.lastIndexOf(\"/\")!==this.baseUrl.length-1&&\"/\"!==t.charAt(0)?this.baseUrl+\"/\"+t:this.baseUrl+t},n.prototype._loadResource=function(t,e){var r=this;t._dequeue=e,o.eachSeries(this._beforeMiddleware,function(e,n){e.call(r,t,function(){n(t.isComplete?{}:null)})},function(){t.isComplete?r._onLoad(t):(t.once(\"complete\",r._onLoad,r),t.load())})},n.prototype._onComplete=function(){this.loading=!1,this.emit(\"complete\",this,this.resources)},n.prototype._onLoad=function(t){var e=this;o.eachSeries(this._afterMiddleware,function(r,n){r.call(e,t,n)},function(){t.emit(\"afterMiddleware\",t),e._numToLoad--,e.progress+=e._progressChunk,e.emit(\"progress\",e,t),t.error?e.emit(\"error\",t.error,e,t):e.emit(\"load\",e,t),0===e._numToLoad&&(e.progress=100,e._onComplete())}),t._dequeue()},n.LOAD_TYPE=s.LOAD_TYPE,n.XHR_RESPONSE_TYPE=s.XHR_RESPONSE_TYPE},{\"./Resource\":32,\"./async\":33,eventemitter3:3,\"parse-uri\":30}],32:[function(t,e,r){\"use strict\";function n(t,e,r){if(s.call(this),r=r||{},\"string\"!=typeof t||\"string\"!=typeof e)throw new Error(\"Both name and url are required for constructing a resource.\");this.name=t,this.url=e,this.isDataUrl=0===this.url.indexOf(\"data:\"),this.data=null,this.crossOrigin=r.crossOrigin===!0?\"anonymous\":r.crossOrigin,this.loadType=r.loadType||this._determineLoadType(),this.xhrType=r.xhrType,this.metadata=r.metadata||{},this.error=null,this.xhr=null,this.isJson=!1,this.isXml=!1,this.isImage=!1,this.isAudio=!1,this.isVideo=!1,this.isComplete=!1,this.isLoading=!1,this._dequeue=null,this._boundComplete=this.complete.bind(this),this._boundOnError=this._onError.bind(this),this._boundOnProgress=this._onProgress.bind(this),this._boundXhrOnError=this._xhrOnError.bind(this),this._boundXhrOnAbort=this._xhrOnAbort.bind(this),this._boundXhrOnLoad=this._xhrOnLoad.bind(this),this._boundXdrOnTimeout=this._xdrOnTimeout.bind(this)}function i(t){return t.toString().replace(\"object \",\"\")}function o(t,e,r){e&&0===e.indexOf(\".\")&&(e=e.substring(1)),e&&(t[e]=r)}var s=t(\"eventemitter3\"),a=t(\"parse-uri\"),u=!(!window.XDomainRequest||\"withCredentials\"in new XMLHttpRequest),h=null,l=0,c=200,d=204;n.prototype=Object.create(s.prototype),n.prototype.constructor=n,e.exports=n,n.prototype.complete=function(){if(this.data&&this.data.removeEventListener&&(this.data.removeEventListener(\"error\",this._boundOnError,!1),this.data.removeEventListener(\"load\",this._boundComplete,!1),this.data.removeEventListener(\"progress\",this._boundOnProgress,!1),this.data.removeEventListener(\"canplaythrough\",this._boundComplete,!1)),this.xhr&&(this.xhr.removeEventListener?(this.xhr.removeEventListener(\"error\",this._boundXhrOnError,!1),this.xhr.removeEventListener(\"abort\",this._boundXhrOnAbort,!1),this.xhr.removeEventListener(\"progress\",this._boundOnProgress,!1),this.xhr.removeEventListener(\"load\",this._boundXhrOnLoad,!1)):(this.xhr.onerror=null,this.xhr.ontimeout=null,this.xhr.onprogress=null,this.xhr.onload=null)),this.isComplete)throw new Error(\"Complete called again for an already completed resource.\");this.isComplete=!0,this.isLoading=!1,this.emit(\"complete\",this)},n.prototype.abort=function(t){if(!this.error){if(this.error=new Error(t),this.xhr)this.xhr.abort();else if(this.xdr)this.xdr.abort();else if(this.data)if(\"undefined\"!=typeof this.data.src)this.data.src=\"\";else for(;this.data.firstChild;)this.data.removeChild(this.data.firstChild);this.complete()}},n.prototype.load=function(t){if(!this.isLoading)if(this.isComplete){if(t){var e=this;setTimeout(function(){t(e)},1)}}else switch(t&&this.once(\"complete\",t),this.isLoading=!0,this.emit(\"start\",this),this.crossOrigin!==!1&&\"string\"==typeof this.crossOrigin||(this.crossOrigin=this._determineCrossOrigin(this.url)),this.loadType){case n.LOAD_TYPE.IMAGE:this._loadElement(\"image\");break;case n.LOAD_TYPE.AUDIO:this._loadSourceElement(\"audio\");break;case n.LOAD_TYPE.VIDEO:this._loadSourceElement(\"video\");break;case n.LOAD_TYPE.XHR:default:u&&this.crossOrigin?this._loadXdr():this._loadXhr()}},n.prototype._loadElement=function(t){this.metadata.loadElement?this.data=this.metadata.loadElement:\"image\"===t&&\"undefined\"!=typeof window.Image?this.data=new Image:this.data=document.createElement(t),this.crossOrigin&&(this.data.crossOrigin=this.crossOrigin),this.metadata.skipSource||(this.data.src=this.url);var e=\"is\"+t[0].toUpperCase()+t.substring(1);this[e]===!1&&(this[e]=!0),this.data.addEventListener(\"error\",this._boundOnError,!1),this.data.addEventListener(\"load\",this._boundComplete,!1),this.data.addEventListener(\"progress\",this._boundOnProgress,!1)},n.prototype._loadSourceElement=function(t){if(this.metadata.loadElement?this.data=this.metadata.loadElement:\"audio\"===t&&\"undefined\"!=typeof window.Audio?this.data=new Audio:this.data=document.createElement(t),null===this.data)return void this.abort(\"Unsupported element \"+t);if(!this.metadata.skipSource)if(navigator.isCocoonJS)this.data.src=Array.isArray(this.url)?this.url[0]:this.url;else if(Array.isArray(this.url))for(var e=0;e<this.url.length;++e)this.data.appendChild(this._createSource(t,this.url[e]));else this.data.appendChild(this._createSource(t,this.url));this[\"is\"+t[0].toUpperCase()+t.substring(1)]=!0,this.data.addEventListener(\"error\",this._boundOnError,!1),this.data.addEventListener(\"load\",this._boundComplete,!1),this.data.addEventListener(\"progress\",this._boundOnProgress,!1),this.data.addEventListener(\"canplaythrough\",this._boundComplete,!1),this.data.load()},n.prototype._loadXhr=function(){\"string\"!=typeof this.xhrType&&(this.xhrType=this._determineXhrType());var t=this.xhr=new XMLHttpRequest;t.open(\"GET\",this.url,!0),this.xhrType===n.XHR_RESPONSE_TYPE.JSON||this.xhrType===n.XHR_RESPONSE_TYPE.DOCUMENT?t.responseType=n.XHR_RESPONSE_TYPE.TEXT:t.responseType=this.xhrType,t.addEventListener(\"error\",this._boundXhrOnError,!1),t.addEventListener(\"abort\",this._boundXhrOnAbort,!1),t.addEventListener(\"progress\",this._boundOnProgress,!1),t.addEventListener(\"load\",this._boundXhrOnLoad,!1),t.send()},n.prototype._loadXdr=function(){\"string\"!=typeof this.xhrType&&(this.xhrType=this._determineXhrType());var t=this.xhr=new XDomainRequest;t.timeout=5e3,t.onerror=this._boundXhrOnError,t.ontimeout=this._boundXdrOnTimeout,t.onprogress=this._boundOnProgress,t.onload=this._boundXhrOnLoad,t.open(\"GET\",this.url,!0),setTimeout(function(){t.send()},0)},n.prototype._createSource=function(t,e,r){r||(r=t+\"/\"+e.substr(e.lastIndexOf(\".\")+1));var n=document.createElement(\"source\");return n.src=e,n.type=r,n},n.prototype._onError=function(t){this.abort(\"Failed to load element using \"+t.target.nodeName)},n.prototype._onProgress=function(t){t&&t.lengthComputable&&this.emit(\"progress\",this,t.loaded/t.total)},n.prototype._xhrOnError=function(){var t=this.xhr;this.abort(i(t)+\" Request failed. Status: \"+t.status+', text: \"'+t.statusText+'\"')},n.prototype._xhrOnAbort=function(){this.abort(i(this.xhr)+\" Request was aborted by the user.\")},n.prototype._xdrOnTimeout=function(){this.abort(i(this.xhr)+\" Request timed out.\")},n.prototype._xhrOnLoad=function(){var t=this.xhr,e=\"undefined\"==typeof t.status?t.status:c;if(!(e===c||e===d||e===l&&t.responseText.length>0))return void this.abort(\"[\"+t.status+\"]\"+t.statusText+\":\"+t.responseURL);if(this.xhrType===n.XHR_RESPONSE_TYPE.TEXT)this.data=t.responseText;else if(this.xhrType===n.XHR_RESPONSE_TYPE.JSON)try{this.data=JSON.parse(t.responseText),this.isJson=!0}catch(t){return void this.abort(\"Error trying to parse loaded json:\",t)}else if(this.xhrType===n.XHR_RESPONSE_TYPE.DOCUMENT)try{if(window.DOMParser){var r=new DOMParser;this.data=r.parseFromString(t.responseText,\"text/xml\")}else{var i=document.createElement(\"div\");i.innerHTML=t.responseText,this.data=i}this.isXml=!0}catch(t){return void this.abort(\"Error trying to parse loaded xml:\",t)}else this.data=t.response||t.responseText;this.complete()},n.prototype._determineCrossOrigin=function(t,e){if(0===t.indexOf(\"data:\"))return\"\";e=e||window.location,h||(h=document.createElement(\"a\")),h.href=t,t=a(h.href,{strictMode:!0});var r=!t.port&&\"\"===e.port||t.port===e.port,n=t.protocol?t.protocol+\":\":\"\";return t.host===e.hostname&&r&&n===e.protocol?\"\":\"anonymous\"},n.prototype._determineXhrType=function(){return n._xhrTypeMap[this._getExtension()]||n.XHR_RESPONSE_TYPE.TEXT},n.prototype._determineLoadType=function(){return n._loadTypeMap[this._getExtension()]||n.LOAD_TYPE.XHR},n.prototype._getExtension=function(){var t=this.url,e=\"\";if(this.isDataUrl){var r=t.indexOf(\"/\");e=t.substring(r+1,t.indexOf(\";\",r))}else{var n=t.indexOf(\"?\");n!==-1&&(t=t.substring(0,n)),e=t.substring(t.lastIndexOf(\".\")+1)}return e.toLowerCase()},n.prototype._getMimeFromXhrType=function(t){switch(t){case n.XHR_RESPONSE_TYPE.BUFFER:return\"application/octet-binary\";case n.XHR_RESPONSE_TYPE.BLOB:return\"application/blob\";case n.XHR_RESPONSE_TYPE.DOCUMENT:return\"application/xml\";case n.XHR_RESPONSE_TYPE.JSON:return\"application/json\";case n.XHR_RESPONSE_TYPE.DEFAULT:case n.XHR_RESPONSE_TYPE.TEXT:default:return\"text/plain\"}},n.LOAD_TYPE={XHR:1,IMAGE:2,AUDIO:3,VIDEO:4},n.XHR_RESPONSE_TYPE={DEFAULT:\"text\",BUFFER:\"arraybuffer\",BLOB:\"blob\",DOCUMENT:\"document\",JSON:\"json\",TEXT:\"text\"},n._loadTypeMap={gif:n.LOAD_TYPE.IMAGE,png:n.LOAD_TYPE.IMAGE,bmp:n.LOAD_TYPE.IMAGE,jpg:n.LOAD_TYPE.IMAGE,jpeg:n.LOAD_TYPE.IMAGE,tif:n.LOAD_TYPE.IMAGE,tiff:n.LOAD_TYPE.IMAGE,webp:n.LOAD_TYPE.IMAGE,tga:n.LOAD_TYPE.IMAGE,\"svg+xml\":n.LOAD_TYPE.IMAGE},n._xhrTypeMap={xhtml:n.XHR_RESPONSE_TYPE.DOCUMENT,html:n.XHR_RESPONSE_TYPE.DOCUMENT,htm:n.XHR_RESPONSE_TYPE.DOCUMENT,xml:n.XHR_RESPONSE_TYPE.DOCUMENT,tmx:n.XHR_RESPONSE_TYPE.DOCUMENT,tsx:n.XHR_RESPONSE_TYPE.DOCUMENT,svg:n.XHR_RESPONSE_TYPE.DOCUMENT,gif:n.XHR_RESPONSE_TYPE.BLOB,png:n.XHR_RESPONSE_TYPE.BLOB,bmp:n.XHR_RESPONSE_TYPE.BLOB,jpg:n.XHR_RESPONSE_TYPE.BLOB,jpeg:n.XHR_RESPONSE_TYPE.BLOB,tif:n.XHR_RESPONSE_TYPE.BLOB,tiff:n.XHR_RESPONSE_TYPE.BLOB,webp:n.XHR_RESPONSE_TYPE.BLOB,tga:n.XHR_RESPONSE_TYPE.BLOB,json:n.XHR_RESPONSE_TYPE.JSON,text:n.XHR_RESPONSE_TYPE.TEXT,txt:n.XHR_RESPONSE_TYPE.TEXT},n.setExtensionLoadType=function(t,e){o(n._loadTypeMap,t,e)},n.setExtensionXhrType=function(t,e){o(n._xhrTypeMap,t,e)}},{eventemitter3:3,\"parse-uri\":30}],33:[function(t,e,r){\"use strict\";function n(){}function i(t,e,r){var n=0,i=t.length;!function o(s){return s||n===i?void(r&&r(s)):void e(t[n++],o)}()}function o(t){return function(){if(null===t)throw new Error(\"Callback was already called.\");var e=t;t=null,e.apply(this,arguments)}}function s(t,e){function r(t,e,r){if(null!=r&&\"function\"!=typeof r)throw new Error(\"task callback must be a function\");if(a.started=!0,null==t&&a.idle())return void setTimeout(function(){a.drain()},1);var i={data:t,callback:\"function\"==typeof r?r:n};e?a._tasks.unshift(i):a._tasks.push(i),setTimeout(function(){a.process()},1)}function i(t){return function(){s-=1,t.callback.apply(t,arguments),null!=arguments[0]&&a.error(arguments[0],t.data),s<=a.concurrency-a.buffer&&a.unsaturated(),a.idle()&&a.drain(),a.process()}}if(null==e)e=1;else if(0===e)throw new Error(\"Concurrency must not be zero\");var s=0,a={_tasks:[],concurrency:e,saturated:n,unsaturated:n,buffer:e/4,empty:n,drain:n,error:n,started:!1,paused:!1,push:function(t,e){r(t,!1,e)},kill:function(){a.drain=n,a._tasks=[]},unshift:function(t,e){r(t,!0,e)},process:function(){for(;!a.paused&&s<a.concurrency&&a._tasks.length;){var e=a._tasks.shift();0===a._tasks.length&&a.empty(),s+=1,s===a.concurrency&&a.saturated(),t(e.data,o(i(e)))}},length:function(){return a._tasks.length},running:function(){return s},idle:function(){return a._tasks.length+s===0},pause:function(){a.paused!==!0&&(a.paused=!0)},resume:function(){if(a.paused!==!1){a.paused=!1;for(var t=1;t<=a.concurrency;t++)a.process()}}};return a}e.exports={eachSeries:i,queue:s}},{}],34:[function(t,e,r){\"use strict\";e.exports={_keyStr:\"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\",encodeBinary:function(t){for(var e,r=\"\",n=new Array(4),i=0,o=0,s=0;i<t.length;){for(e=new Array(3),o=0;o<e.length;o++)i<t.length?e[o]=255&t.charCodeAt(i++):e[o]=0;switch(n[0]=e[0]>>2,n[1]=(3&e[0])<<4|e[1]>>4,n[2]=(15&e[1])<<2|e[2]>>6,n[3]=63&e[2],s=i-(t.length-1)){case 2:n[3]=64,n[2]=64;break;case 1:n[3]=64}for(o=0;o<n.length;o++)r+=this._keyStr.charAt(n[o])}return r}}},{}],35:[function(t,e,r){\"use strict\";e.exports=t(\"./Loader\"),e.exports.Resource=t(\"./Resource\"),e.exports.middleware={caching:{memory:t(\"./middlewares/caching/memory\")},parsing:{blob:t(\"./middlewares/parsing/blob\")}},e.exports.async=t(\"./async\")},{\"./Loader\":31,\"./Resource\":32,\"./async\":33,\"./middlewares/caching/memory\":36,\"./middlewares/parsing/blob\":37}],36:[function(t,e,r){\"use strict\";var n={};e.exports=function(){return function(t,e){n[t.url]?(t.data=n[t.url],t.complete()):t.once(\"complete\",function(){n[this.url]=this.data}),e()}}},{}],37:[function(t,e,r){\"use strict\";var n=t(\"../../Resource\"),i=t(\"../../b64\"),o=window.URL||window.webkitURL;e.exports=function(){return function(t,e){if(!t.data)return void e();if(t.xhr&&t.xhrType===n.XHR_RESPONSE_TYPE.BLOB)if(window.Blob&&\"string\"!=typeof t.data){if(0===t.data.type.indexOf(\"image\")){var r=o.createObjectURL(t.data);return t.blob=t.data,t.data=new Image,t.data.src=r,t.isImage=!0,void(t.data.onload=function(){o.revokeObjectURL(r),t.data.onload=null,e()})}}else{var s=t.xhr.getResponseHeader(\"content-type\");if(s&&0===s.indexOf(\"image\"))return t.data=new Image,t.data.src=\"data:\"+s+\";base64,\"+i.encodeBinary(t.xhr.responseText),t.isImage=!0,void(t.data.onload=function(){t.data.onload=null,e()})}e()}}},{\"../../Resource\":32,\"../../b64\":34}],38:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}function i(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function o(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}r.__esModule=!0;var s=t(\"../core\"),a=i(s),u=t(\"ismobilejs\"),h=n(u),l=t(\"./accessibleTarget\"),c=n(l);Object.assign(a.DisplayObject.prototype,c.default);var d=9,f=100,p=0,v=0,y=2,g=1,m=-1e3,_=-1e3,b=2,x=function(){function t(e){o(this,t),!h.default.tablet&&!h.default.phone||navigator.isCocoonJS||this.createTouchHook();var r=document.createElement(\"div\");r.style.width=f+\"px\",r.style.height=f+\"px\",r.style.position=\"absolute\",r.style.top=p+\"px\",r.style.left=v+\"px\",r.style.zIndex=y,this.div=r,this.pool=[],this.renderId=0,this.debug=!1,this.renderer=e,this.children=[],this._onKeyDown=this._onKeyDown.bind(this),this._onMouseMove=this._onMouseMove.bind(this),this.isActive=!1,this.isMobileAccessabillity=!1,window.addEventListener(\"keydown\",this._onKeyDown,!1)}return t.prototype.createTouchHook=function(){var t=this,e=document.createElement(\"button\");e.style.width=g+\"px\",e.style.height=g+\"px\",e.style.position=\"absolute\",e.style.top=m+\"px\",e.style.left=_+\"px\",e.style.zIndex=b,e.style.backgroundColor=\"#FF0000\",e.title=\"HOOK DIV\",e.addEventListener(\"focus\",function(){t.isMobileAccessabillity=!0,t.activate(),document.body.removeChild(e)}),document.body.appendChild(e)},t.prototype.activate=function(){this.isActive||(this.isActive=!0,window.document.addEventListener(\"mousemove\",this._onMouseMove,!0),window.removeEventListener(\"keydown\",this._onKeyDown,!1),this.renderer.on(\"postrender\",this.update,this),this.renderer.view.parentNode&&this.renderer.view.parentNode.appendChild(this.div))},t.prototype.deactivate=function(){this.isActive&&!this.isMobileAccessabillity&&(this.isActive=!1,window.document.removeEventListener(\"mousemove\",this._onMouseMove),window.addEventListener(\"keydown\",this._onKeyDown,!1),this.renderer.off(\"postrender\",this.update),this.div.parentNode&&this.div.parentNode.removeChild(this.div))},t.prototype.updateAccessibleObjects=function(t){if(t.visible){t.accessible&&t.interactive&&(t._accessibleActive||this.addChild(t),t.renderId=this.renderId);for(var e=t.children,r=e.length-1;r>=0;r--)this.updateAccessibleObjects(e[r])}},t.prototype.update=function(){if(this.renderer.renderingToScreen){this.updateAccessibleObjects(this.renderer._lastObjectRendered);var t=this.renderer.view.getBoundingClientRect(),e=t.width/this.renderer.width,r=t.height/this.renderer.height,n=this.div;\nn.style.left=t.left+\"px\",n.style.top=t.top+\"px\",n.style.width=this.renderer.width+\"px\",n.style.height=this.renderer.height+\"px\";for(var i=0;i<this.children.length;i++){var o=this.children[i];if(o.renderId!==this.renderId)o._accessibleActive=!1,a.utils.removeItems(this.children,i,1),this.div.removeChild(o._accessibleDiv),this.pool.push(o._accessibleDiv),o._accessibleDiv=null,i--,0===this.children.length&&this.deactivate();else{n=o._accessibleDiv;var s=o.hitArea,u=o.worldTransform;o.hitArea?(n.style.left=(u.tx+s.x*u.a)*e+\"px\",n.style.top=(u.ty+s.y*u.d)*r+\"px\",n.style.width=s.width*u.a*e+\"px\",n.style.height=s.height*u.d*r+\"px\"):(s=o.getBounds(),this.capHitArea(s),n.style.left=s.x*e+\"px\",n.style.top=s.y*r+\"px\",n.style.width=s.width*e+\"px\",n.style.height=s.height*r+\"px\")}}this.renderId++}},t.prototype.capHitArea=function(t){t.x<0&&(t.width+=t.x,t.x=0),t.y<0&&(t.height+=t.y,t.y=0),t.x+t.width>this.renderer.width&&(t.width=this.renderer.width-t.x),t.y+t.height>this.renderer.height&&(t.height=this.renderer.height-t.y)},t.prototype.addChild=function(t){var e=this.pool.pop();e||(e=document.createElement(\"button\"),e.style.width=f+\"px\",e.style.height=f+\"px\",e.style.backgroundColor=this.debug?\"rgba(255,0,0,0.5)\":\"transparent\",e.style.position=\"absolute\",e.style.zIndex=y,e.style.borderStyle=\"none\",e.addEventListener(\"click\",this._onClick.bind(this)),e.addEventListener(\"focus\",this._onFocus.bind(this)),e.addEventListener(\"focusout\",this._onFocusOut.bind(this))),t.accessibleTitle?e.title=t.accessibleTitle:t.accessibleTitle||t.accessibleHint||(e.title=\"displayObject \"+this.tabIndex),t.accessibleHint&&e.setAttribute(\"aria-label\",t.accessibleHint),t._accessibleActive=!0,t._accessibleDiv=e,e.displayObject=t,this.children.push(t),this.div.appendChild(t._accessibleDiv),t._accessibleDiv.tabIndex=t.tabIndex},t.prototype._onClick=function(t){var e=this.renderer.plugins.interaction;e.dispatchEvent(t.target.displayObject,\"click\",e.eventData)},t.prototype._onFocus=function(t){var e=this.renderer.plugins.interaction;e.dispatchEvent(t.target.displayObject,\"mouseover\",e.eventData)},t.prototype._onFocusOut=function(t){var e=this.renderer.plugins.interaction;e.dispatchEvent(t.target.displayObject,\"mouseout\",e.eventData)},t.prototype._onKeyDown=function(t){t.keyCode===d&&this.activate()},t.prototype._onMouseMove=function(){this.deactivate()},t.prototype.destroy=function(){this.div=null;for(var t=0;t<this.children.length;t++)this.children[t].div=null;window.document.removeEventListener(\"mousemove\",this._onMouseMove),window.removeEventListener(\"keydown\",this._onKeyDown),this.pool=null,this.children=null,this.renderer=null},t}();r.default=x,a.WebGLRenderer.registerPlugin(\"accessibility\",x),a.CanvasRenderer.registerPlugin(\"accessibility\",x)},{\"../core\":61,\"./accessibleTarget\":39,ismobilejs:4}],39:[function(t,e,r){\"use strict\";r.__esModule=!0,r.default={accessible:!1,accessibleTitle:null,accessibleHint:null,tabIndex:0,_accessibleActive:!1,_accessibleDiv:!1}},{}],40:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}r.__esModule=!0;var i=t(\"./accessibleTarget\");Object.defineProperty(r,\"accessibleTarget\",{enumerable:!0,get:function(){return n(i).default}});var o=t(\"./AccessibilityManager\");Object.defineProperty(r,\"AccessibilityManager\",{enumerable:!0,get:function(){return n(o).default}})},{\"./AccessibilityManager\":38,\"./accessibleTarget\":39}],41:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}function o(t,e){if(!t)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!e||\"object\"!=typeof e&&\"function\"!=typeof e?t:e}function s(t,e){if(\"function\"!=typeof e&&null!==e)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function a(t){if(t instanceof Array){if(\"precision\"!==t[0].substring(0,9)){var e=t.slice(0);return e.unshift(\"precision \"+c+\" float;\"),e}}else if(\"precision\"!==t.substring(0,9))return\"precision \"+c+\" float;\\n\"+t;return t}r.__esModule=!0;var u=t(\"pixi-gl-core\"),h=t(\"./settings\"),l=n(h),c=l.default.PRECISION,d=function(t){function e(r,n,s){return i(this,e),o(this,t.call(this,r,a(n),a(s)))}return s(e,t),e}(u.GLShader);r.default=d},{\"./settings\":97,\"pixi-gl-core\":12}],42:[function(t,e,r){\"use strict\";r.__esModule=!0;r.VERSION=\"4.2.3\",r.PI_2=2*Math.PI,r.RAD_TO_DEG=180/Math.PI,r.DEG_TO_RAD=Math.PI/180,r.RENDERER_TYPE={UNKNOWN:0,WEBGL:1,CANVAS:2},r.BLEND_MODES={NORMAL:0,ADD:1,MULTIPLY:2,SCREEN:3,OVERLAY:4,DARKEN:5,LIGHTEN:6,COLOR_DODGE:7,COLOR_BURN:8,HARD_LIGHT:9,SOFT_LIGHT:10,DIFFERENCE:11,EXCLUSION:12,HUE:13,SATURATION:14,COLOR:15,LUMINOSITY:16},r.DRAW_MODES={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},r.SCALE_MODES={LINEAR:0,NEAREST:1},r.WRAP_MODES={CLAMP:0,REPEAT:1,MIRRORED_REPEAT:2},r.GC_MODES={AUTO:0,MANUAL:1},r.URL_FILE_EXTENSION=/\\.(\\w{3,4})(?:$|\\?|#)/i,r.DATA_URI=/^\\s*data:(?:([\\w-]+)\\/([\\w+.-]+))?(?:;(charset=[\\w-]+|base64))?,(.*)/i,r.SVG_SIZE=/<svg[^>]*(?:\\s(width|height)=('|\")(\\d*(?:\\.\\d+)?)(?:px)?('|\"))[^>]*(?:\\s(width|height)=('|\")(\\d*(?:\\.\\d+)?)(?:px)?('|\"))[^>]*>/i,r.SHAPES={POLY:0,RECT:1,CIRC:2,ELIP:3,RREC:4},r.PRECISION={LOW:\"lowp\",MEDIUM:\"mediump\",HIGH:\"highp\"},r.TRANSFORM_MODE={STATIC:0,DYNAMIC:1},r.TEXT_GRADIENT={LINEAR_VERTICAL:0,LINEAR_HORIZONTAL:1}},{}],43:[function(t,e,r){\"use strict\";function n(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}r.__esModule=!0;var i=t(\"../math\"),o=function(){function t(){n(this,t),this.minX=1/0,this.minY=1/0,this.maxX=-(1/0),this.maxY=-(1/0),this.rect=null}return t.prototype.isEmpty=function(){return this.minX>this.maxX||this.minY>this.maxY},t.prototype.clear=function(){this.updateID++,this.minX=1/0,this.minY=1/0,this.maxX=-(1/0),this.maxY=-(1/0)},t.prototype.getRectangle=function(t){return this.minX>this.maxX||this.minY>this.maxY?i.Rectangle.EMPTY:(t=t||new i.Rectangle(0,0,1,1),t.x=this.minX,t.y=this.minY,t.width=this.maxX-this.minX,t.height=this.maxY-this.minY,t)},t.prototype.addPoint=function(t){this.minX=Math.min(this.minX,t.x),this.maxX=Math.max(this.maxX,t.x),this.minY=Math.min(this.minY,t.y),this.maxY=Math.max(this.maxY,t.y)},t.prototype.addQuad=function(t){var e=this.minX,r=this.minY,n=this.maxX,i=this.maxY,o=t[0],s=t[1];e=o<e?o:e,r=s<r?s:r,n=o>n?o:n,i=s>i?s:i,o=t[2],s=t[3],e=o<e?o:e,r=s<r?s:r,n=o>n?o:n,i=s>i?s:i,o=t[4],s=t[5],e=o<e?o:e,r=s<r?s:r,n=o>n?o:n,i=s>i?s:i,o=t[6],s=t[7],e=o<e?o:e,r=s<r?s:r,n=o>n?o:n,i=s>i?s:i,this.minX=e,this.minY=r,this.maxX=n,this.maxY=i},t.prototype.addFrame=function(t,e,r,n,i){var o=t.worldTransform,s=o.a,a=o.b,u=o.c,h=o.d,l=o.tx,c=o.ty,d=this.minX,f=this.minY,p=this.maxX,v=this.maxY,y=s*e+u*r+l,g=a*e+h*r+c;d=y<d?y:d,f=g<f?g:f,p=y>p?y:p,v=g>v?g:v,y=s*n+u*r+l,g=a*n+h*r+c,d=y<d?y:d,f=g<f?g:f,p=y>p?y:p,v=g>v?g:v,y=s*e+u*i+l,g=a*e+h*i+c,d=y<d?y:d,f=g<f?g:f,p=y>p?y:p,v=g>v?g:v,y=s*n+u*i+l,g=a*n+h*i+c,d=y<d?y:d,f=g<f?g:f,p=y>p?y:p,v=g>v?g:v,this.minX=d,this.minY=f,this.maxX=p,this.maxY=v},t.prototype.addVertices=function(t,e,r,n){for(var i=t.worldTransform,o=i.a,s=i.b,a=i.c,u=i.d,h=i.tx,l=i.ty,c=this.minX,d=this.minY,f=this.maxX,p=this.maxY,v=r;v<n;v+=2){var y=e[v],g=e[v+1],m=o*y+a*g+h,_=u*g+s*y+l;c=m<c?m:c,d=_<d?_:d,f=m>f?m:f,p=_>p?_:p}this.minX=c,this.minY=d,this.maxX=f,this.maxY=p},t.prototype.addBounds=function(t){var e=this.minX,r=this.minY,n=this.maxX,i=this.maxY;this.minX=t.minX<e?t.minX:e,this.minY=t.minY<r?t.minY:r,this.maxX=t.maxX>n?t.maxX:n,this.maxY=t.maxY>i?t.maxY:i},t.prototype.addBoundsMask=function(t,e){var r=t.minX>e.minX?t.minX:e.minX,n=t.minY>e.minY?t.minY:e.minY,i=t.maxX<e.maxX?t.maxX:e.maxX,o=t.maxY<e.maxY?t.maxY:e.maxY;if(r<=i&&n<=o){var s=this.minX,a=this.minY,u=this.maxX,h=this.maxY;this.minX=r<s?r:s,this.minY=n<a?n:a,this.maxX=i>u?i:u,this.maxY=o>h?o:h}},t.prototype.addBoundsArea=function(t,e){var r=t.minX>e.x?t.minX:e.x,n=t.minY>e.y?t.minY:e.y,i=t.maxX<e.x+e.width?t.maxX:e.x+e.width,o=t.maxY<e.y+e.height?t.maxY:e.y+e.height;if(r<=i&&n<=o){var s=this.minX,a=this.minY,u=this.maxX,h=this.maxY;this.minX=r<s?r:s,this.minY=n<a?n:a,this.maxX=i>u?i:u,this.maxY=o>h?o:h}},t}();r.default=o},{\"../math\":66}],44:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}function o(t,e){if(!t)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!e||\"object\"!=typeof e&&\"function\"!=typeof e?t:e}function s(t,e){if(\"function\"!=typeof e&&null!==e)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,\"value\"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),u=t(\"../utils\"),h=t(\"./DisplayObject\"),l=n(h),c=function(t){function e(){i(this,e);var r=o(this,t.call(this));return r.children=[],r}return s(e,t),e.prototype.onChildrenChange=function(){},e.prototype.addChild=function(t){var e=arguments.length;if(e>1)for(var r=0;r<e;r++)this.addChild(arguments[r]);else t.parent&&t.parent.removeChild(t),t.parent=this,this.transform._parentID=-1,this._boundsID++,this.children.push(t),this.onChildrenChange(this.children.length-1),t.emit(\"added\",this);return t},e.prototype.addChildAt=function(t,e){if(e<0||e>this.children.length)throw new Error(t+\"addChildAt: The index \"+e+\" supplied is out of bounds \"+this.children.length);return t.parent&&t.parent.removeChild(t),t.parent=this,this.children.splice(e,0,t),this.onChildrenChange(e),t.emit(\"added\",this),t},e.prototype.swapChildren=function(t,e){if(t!==e){var r=this.getChildIndex(t),n=this.getChildIndex(e);this.children[r]=e,this.children[n]=t,this.onChildrenChange(r<n?r:n)}},e.prototype.getChildIndex=function(t){var e=this.children.indexOf(t);if(e===-1)throw new Error(\"The supplied DisplayObject must be a child of the caller\");return e},e.prototype.setChildIndex=function(t,e){if(e<0||e>=this.children.length)throw new Error(\"The supplied index is out of bounds\");var r=this.getChildIndex(t);(0,u.removeItems)(this.children,r,1),this.children.splice(e,0,t),this.onChildrenChange(e)},e.prototype.getChildAt=function(t){if(t<0||t>=this.children.length)throw new Error(\"getChildAt: Index (\"+t+\") does not exist.\");return this.children[t]},e.prototype.removeChild=function(t){var e=arguments.length;if(e>1)for(var r=0;r<e;r++)this.removeChild(arguments[r]);else{var n=this.children.indexOf(t);if(n===-1)return null;t.parent=null,(0,u.removeItems)(this.children,n,1),this.transform._parentID=-1,this._boundsID++,this.onChildrenChange(n),t.emit(\"removed\",this)}return t},e.prototype.removeChildAt=function(t){var e=this.getChildAt(t);return e.parent=null,(0,u.removeItems)(this.children,t,1),this.onChildrenChange(t),e.emit(\"removed\",this),e},e.prototype.removeChildren=function(){var t=arguments.length<=0||void 0===arguments[0]?0:arguments[0],e=arguments[1],r=t,n=\"number\"==typeof e?e:this.children.length,i=n-r,o=void 0;if(i>0&&i<=n){o=this.children.splice(r,i);for(var s=0;s<o.length;++s)o[s].parent=null;this.onChildrenChange(t);for(var a=0;a<o.length;++a)o[a].emit(\"removed\",this);return o}if(0===i&&0===this.children.length)return[];throw new RangeError(\"removeChildren: numeric values are outside the acceptable range.\")},e.prototype.updateTransform=function(){this._boundsID++,this.transform.updateTransform(this.parent.transform),this.worldAlpha=this.alpha*this.parent.worldAlpha;for(var t=0,e=this.children.length;t<e;++t){var r=this.children[t];r.visible&&r.updateTransform()}},e.prototype.calculateBounds=function(){this._bounds.clear(),this._calculateBounds();for(var t=0;t<this.children.length;t++){var e=this.children[t];e.visible&&e.renderable&&(e.calculateBounds(),e._mask?(e._mask.calculateBounds(),this._bounds.addBoundsMask(e._bounds,e._mask._bounds)):e.filterArea?this._bounds.addBoundsArea(e._bounds,e.filterArea):this._bounds.addBounds(e._bounds))}this._lastBoundsID=this._boundsID},e.prototype._calculateBounds=function(){},e.prototype.renderWebGL=function(t){if(this.visible&&!(this.worldAlpha<=0)&&this.renderable)if(this._mask||this._filters)this.renderAdvancedWebGL(t);else{this._renderWebGL(t);for(var e=0,r=this.children.length;e<r;++e)this.children[e].renderWebGL(t)}},e.prototype.renderAdvancedWebGL=function(t){t.flush();var e=this._filters,r=this._mask;if(e){this._enabledFilters||(this._enabledFilters=[]),this._enabledFilters.length=0;for(var n=0;n<e.length;n++)e[n].enabled&&this._enabledFilters.push(e[n]);this._enabledFilters.length&&t.filterManager.pushFilter(this,this._enabledFilters)}r&&t.maskManager.pushMask(this,this._mask),this._renderWebGL(t);for(var i=0,o=this.children.length;i<o;i++)this.children[i].renderWebGL(t);t.flush(),r&&t.maskManager.popMask(this,this._mask),e&&this._enabledFilters&&this._enabledFilters.length&&t.filterManager.popFilter()},e.prototype._renderWebGL=function(t){},e.prototype._renderCanvas=function(t){},e.prototype.renderCanvas=function(t){if(this.visible&&!(this.worldAlpha<=0)&&this.renderable){this._mask&&t.maskManager.pushMask(this._mask),this._renderCanvas(t);for(var e=0,r=this.children.length;e<r;++e)this.children[e].renderCanvas(t);this._mask&&t.maskManager.popMask(t)}},e.prototype.destroy=function(e){t.prototype.destroy.call(this);var r=\"boolean\"==typeof e?e:e&&e.children,n=this.removeChildren(0,this.children.length);if(r)for(var i=0;i<n.length;++i)n[i].destroy(e)},a(e,[{key:\"width\",get:function(){return this.scale.x*this.getLocalBounds().width},set:function(t){var e=this.getLocalBounds().width;0!==e?this.scale.x=t/e:this.scale.x=1,this._width=t}},{key:\"height\",get:function(){return this.scale.y*this.getLocalBounds().height},set:function(t){var e=this.getLocalBounds().height;0!==e?this.scale.y=t/e:this.scale.y=1,this._height=t}}]),e}(l.default);r.default=c,c.prototype.containerUpdateTransform=c.prototype.updateTransform},{\"../utils\":117,\"./DisplayObject\":45}],45:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}function o(t,e){if(!t)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!e||\"object\"!=typeof e&&\"function\"!=typeof e?t:e}function s(t,e){if(\"function\"!=typeof e&&null!==e)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,\"value\"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),u=t(\"eventemitter3\"),h=n(u),l=t(\"../const\"),c=t(\"../settings\"),d=n(c),f=t(\"./TransformStatic\"),p=n(f),v=t(\"./Transform\"),y=n(v),g=t(\"./Bounds\"),m=n(g),_=t(\"../math\"),b=function(t){function e(){i(this,e);var r=o(this,t.call(this)),n=d.default.TRANSFORM_MODE===l.TRANSFORM_MODE.STATIC?p.default:y.default;return r.tempDisplayObjectParent=null,r.transform=new n,r.alpha=1,r.visible=!0,r.renderable=!0,r.parent=null,r.worldAlpha=1,r.filterArea=null,r._filters=null,r._enabledFilters=null,r._bounds=new m.default,r._boundsID=0,r._lastBoundsID=-1,r._boundsRect=null,r._localBoundsRect=null,r._mask=null,r}return s(e,t),e.prototype.updateTransform=function(){this.transform.updateTransform(this.parent.transform),this.worldAlpha=this.alpha*this.parent.worldAlpha,this._bounds.updateID++},e.prototype._recursivePostUpdateTransform=function(){this.parent?(this.parent._recursivePostUpdateTransform(),this.transform.updateTransform(this.parent.transform)):this.transform.updateTransform(this._tempDisplayObjectParent.transform)},e.prototype.getBounds=function(t,e){return t||(this.parent?(this._recursivePostUpdateTransform(),this.updateTransform()):(this.parent=this._tempDisplayObjectParent,this.updateTransform(),this.parent=null)),this._boundsID!==this._lastBoundsID&&this.calculateBounds(),e||(this._boundsRect||(this._boundsRect=new _.Rectangle),e=this._boundsRect),this._bounds.getRectangle(e)},e.prototype.getLocalBounds=function(t){var e=this.transform,r=this.parent;this.parent=null,this.transform=this._tempDisplayObjectParent.transform,t||(this._localBoundsRect||(this._localBoundsRect=new _.Rectangle),t=this._localBoundsRect);var n=this.getBounds(!1,t);return this.parent=r,this.transform=e,n},e.prototype.toGlobal=function(t,e){var r=!(arguments.length<=2||void 0===arguments[2])&&arguments[2];return r||(this._recursivePostUpdateTransform(),this.parent?this.displayObjectUpdateTransform():(this.parent=this._tempDisplayObjectParent,this.displayObjectUpdateTransform(),this.parent=null)),this.worldTransform.apply(t,e)},e.prototype.toLocal=function(t,e,r,n){return e&&(t=e.toGlobal(t,r,n)),n||(this._recursivePostUpdateTransform(),this.parent?this.displayObjectUpdateTransform():(this.parent=this._tempDisplayObjectParent,this.displayObjectUpdateTransform(),this.parent=null)),this.worldTransform.applyInverse(t,r)},e.prototype.renderWebGL=function(t){},e.prototype.renderCanvas=function(t){},e.prototype.setParent=function(t){if(!t||!t.addChild)throw new Error(\"setParent: Argument must be a Container\");return t.addChild(this),t},e.prototype.setTransform=function(){var t=arguments.length<=0||void 0===arguments[0]?0:arguments[0],e=arguments.length<=1||void 0===arguments[1]?0:arguments[1],r=arguments.length<=2||void 0===arguments[2]?1:arguments[2],n=arguments.length<=3||void 0===arguments[3]?1:arguments[3],i=arguments.length<=4||void 0===arguments[4]?0:arguments[4],o=arguments.length<=5||void 0===arguments[5]?0:arguments[5],s=arguments.length<=6||void 0===arguments[6]?0:arguments[6],a=arguments.length<=7||void 0===arguments[7]?0:arguments[7],u=arguments.length<=8||void 0===arguments[8]?0:arguments[8];return this.position.x=t,this.position.y=e,this.scale.x=r?r:1,this.scale.y=n?n:1,this.rotation=i,this.skew.x=o,this.skew.y=s,this.pivot.x=a,this.pivot.y=u,this},e.prototype.destroy=function(){this.removeAllListeners(),this.parent&&this.parent.removeChild(this),this.transform=null,this.parent=null,this._bounds=null,this._currentBounds=null,this._mask=null,this.filterArea=null,this.interactive=!1,this.interactiveChildren=!1},a(e,[{key:\"_tempDisplayObjectParent\",get:function(){return null===this.tempDisplayObjectParent&&(this.tempDisplayObjectParent=new e),this.tempDisplayObjectParent}},{key:\"x\",get:function(){return this.position.x},set:function(t){this.transform.position.x=t}},{key:\"y\",get:function(){return this.position.y},set:function(t){this.transform.position.y=t}},{key:\"worldTransform\",get:function(){return this.transform.worldTransform}},{key:\"localTransform\",get:function(){return this.transform.localTransform}},{key:\"position\",get:function(){return this.transform.position},set:function(t){this.transform.position.copy(t)}},{key:\"scale\",get:function(){return this.transform.scale},set:function(t){this.transform.scale.copy(t)}},{key:\"pivot\",get:function(){return this.transform.pivot},set:function(t){this.transform.pivot.copy(t)}},{key:\"skew\",get:function(){return this.transform.skew},set:function(t){this.transform.skew.copy(t)}},{key:\"rotation\",get:function(){return this.transform.rotation},set:function(t){this.transform.rotation=t}},{key:\"worldVisible\",get:function(){var t=this;do{if(!t.visible)return!1;t=t.parent}while(t);return!0}},{key:\"mask\",get:function(){return this._mask},set:function(t){this._mask&&(this._mask.renderable=!0),this._mask=t,this._mask&&(this._mask.renderable=!1)}},{key:\"filters\",get:function(){return this._filters&&this._filters.slice()},set:function(t){this._filters=t&&t.slice()}}]),e}(h.default);r.default=b,b.prototype.displayObjectUpdateTransform=b.prototype.updateTransform},{\"../const\":42,\"../math\":66,\"../settings\":97,\"./Bounds\":43,\"./Transform\":46,\"./TransformStatic\":48,eventemitter3:3}],46:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}function o(t,e){if(!t)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!e||\"object\"!=typeof e&&\"function\"!=typeof e?t:e}function s(t,e){if(\"function\"!=typeof e&&null!==e)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,\"value\"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),u=t(\"../math\"),h=t(\"./TransformBase\"),l=n(h),c=function(t){function e(){i(this,e);var r=o(this,t.call(this));return r.position=new u.Point(0,0),r.scale=new u.Point(1,1),r.skew=new u.ObservablePoint(r.updateSkew,r,0,0),r.pivot=new u.Point(0,0),r._rotation=0,r._sr=Math.sin(0),r._cr=Math.cos(0),r._cy=Math.cos(0),r._sy=Math.sin(0),r._nsx=Math.sin(0),r._cx=Math.cos(0),r}return s(e,t),e.prototype.updateSkew=function(){this._cy=Math.cos(this.skew.y),this._sy=Math.sin(this.skew.y),this._nsx=Math.sin(this.skew.x),this._cx=Math.cos(this.skew.x)},e.prototype.updateLocalTransform=function(){var t=this.localTransform,e=this._cr*this.scale.x,r=this._sr*this.scale.x,n=-this._sr*this.scale.y,i=this._cr*this.scale.y;t.a=this._cy*e+this._sy*n,t.b=this._cy*r+this._sy*i,t.c=this._nsx*e+this._cx*n,t.d=this._nsx*r+this._cx*i},e.prototype.updateTransform=function(t){var e=t.worldTransform,r=this.worldTransform,n=this.localTransform,i=this._cr*this.scale.x,o=this._sr*this.scale.x,s=-this._sr*this.scale.y,a=this._cr*this.scale.y;n.a=this._cy*i+this._sy*s,n.b=this._cy*o+this._sy*a,n.c=this._nsx*i+this._cx*s,n.d=this._nsx*o+this._cx*a,n.tx=this.position.x-(this.pivot.x*n.a+this.pivot.y*n.c),n.ty=this.position.y-(this.pivot.x*n.b+this.pivot.y*n.d),r.a=n.a*e.a+n.b*e.c,r.b=n.a*e.b+n.b*e.d,r.c=n.c*e.a+n.d*e.c,r.d=n.c*e.b+n.d*e.d,r.tx=n.tx*e.a+n.ty*e.c+e.tx,r.ty=n.tx*e.b+n.ty*e.d+e.ty,this._worldID++},e.prototype.setFromMatrix=function(t){t.decompose(this)},a(e,[{key:\"rotation\",get:function(){return this._rotation},set:function(t){this._rotation=t,this._sr=Math.sin(t),this._cr=Math.cos(t)}}]),e}(l.default);r.default=c},{\"../math\":66,\"./TransformBase\":47}],47:[function(t,e,r){\"use strict\";function n(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}r.__esModule=!0;var i=t(\"../math\"),o=function(){function t(){n(this,t),this.worldTransform=new i.Matrix,this.localTransform=new i.Matrix,this._worldID=0,this._parentID=0}return t.prototype.updateLocalTransform=function(){},t.prototype.updateTransform=function(t){var e=t.worldTransform,r=this.worldTransform,n=this.localTransform;r.a=n.a*e.a+n.b*e.c,r.b=n.a*e.b+n.b*e.d,r.c=n.c*e.a+n.d*e.c,r.d=n.c*e.b+n.d*e.d,r.tx=n.tx*e.a+n.ty*e.c+e.tx,r.ty=n.tx*e.b+n.ty*e.d+e.ty,this._worldID++},t}();r.default=o,o.prototype.updateWorldTransform=o.prototype.updateTransform,o.IDENTITY=new o},{\"../math\":66}],48:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}function o(t,e){if(!t)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!e||\"object\"!=typeof e&&\"function\"!=typeof e?t:e}function s(t,e){if(\"function\"!=typeof e&&null!==e)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,\"value\"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),u=t(\"../math\"),h=t(\"./TransformBase\"),l=n(h),c=function(t){function e(){i(this,e);var r=o(this,t.call(this));return r.position=new u.ObservablePoint(r.onChange,r,0,0),r.scale=new u.ObservablePoint(r.onChange,r,1,1),r.pivot=new u.ObservablePoint(r.onChange,r,0,0),r.skew=new u.ObservablePoint(r.updateSkew,r,0,0),r._rotation=0,r._sr=Math.sin(0),r._cr=Math.cos(0),r._cy=Math.cos(0),r._sy=Math.sin(0),r._nsx=Math.sin(0),r._cx=Math.cos(0),r._localID=0,r._currentLocalID=0,r}return s(e,t),e.prototype.onChange=function(){this._localID++},e.prototype.updateSkew=function(){this._cy=Math.cos(this.skew._y),this._sy=Math.sin(this.skew._y),this._nsx=Math.sin(this.skew._x),this._cx=Math.cos(this.skew._x),this._localID++},e.prototype.updateLocalTransform=function(){var t=this.localTransform;if(this._localID!==this._currentLocalID){var e=this._cr*this.scale._x,r=this._sr*this.scale._x,n=-this._sr*this.scale._y,i=this._cr*this.scale._y;t.a=this._cy*e+this._sy*n,t.b=this._cy*r+this._sy*i,t.c=this._nsx*e+this._cx*n,t.d=this._nsx*r+this._cx*i,t.tx=this.position._x-(this.pivot._x*t.a+this.pivot._y*t.c),t.ty=this.position._y-(this.pivot._x*t.b+this.pivot._y*t.d),this._currentLocalID=this._localID,this._parentID=-1}},e.prototype.updateTransform=function(t){var e=t.worldTransform,r=this.worldTransform,n=this.localTransform;if(this._localID!==this._currentLocalID){var i=this._cr*this.scale._x,o=this._sr*this.scale._x,s=-this._sr*this.scale._y,a=this._cr*this.scale._y;n.a=this._cy*i+this._sy*s,n.b=this._cy*o+this._sy*a,n.c=this._nsx*i+this._cx*s,n.d=this._nsx*o+this._cx*a,n.tx=this.position._x-(this.pivot._x*n.a+this.pivot._y*n.c),n.ty=this.position._y-(this.pivot._x*n.b+this.pivot._y*n.d),this._currentLocalID=this._localID,this._parentID=-1}this._parentID!==t._worldID&&(r.a=n.a*e.a+n.b*e.c,r.b=n.a*e.b+n.b*e.d,r.c=n.c*e.a+n.d*e.c,r.d=n.c*e.b+n.d*e.d,r.tx=n.tx*e.a+n.ty*e.c+e.tx,r.ty=n.tx*e.b+n.ty*e.d+e.ty,this._parentID=t._worldID,this._worldID++)},e.prototype.setFromMatrix=function(t){t.decompose(this),this._localID++},a(e,[{key:\"rotation\",get:function(){return this._rotation},set:function(t){this._rotation=t,this._sr=Math.sin(t),this._cr=Math.cos(t),this._localID++}}]),e}(l.default);r.default=c},{\"../math\":66,\"./TransformBase\":47}],49:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}function o(t,e){if(!t)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!e||\"object\"!=typeof e&&\"function\"!=typeof e?t:e}function s(t,e){if(\"function\"!=typeof e&&null!==e)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=t(\"../display/Container\"),u=n(a),h=t(\"../textures/RenderTexture\"),l=n(h),c=t(\"../textures/Texture\"),d=n(c),f=t(\"./GraphicsData\"),p=n(f),v=t(\"../sprites/Sprite\"),y=n(v),g=t(\"../math\"),m=t(\"../utils\"),_=t(\"../const\"),b=t(\"../display/Bounds\"),x=n(b),T=t(\"./utils/bezierCurveTo\"),w=n(T),E=t(\"../renderers/canvas/CanvasRenderer\"),O=n(E),S=void 0,M=new g.Matrix,P=new g.Point,C=new Float32Array(4),R=new Float32Array(4),A=function(t){function e(){i(this,e);var r=o(this,t.call(this));return r.fillAlpha=1,r.lineWidth=0,r.lineColor=0,r.graphicsData=[],r.tint=16777215,r._prevTint=16777215,r.blendMode=_.BLEND_MODES.NORMAL,r.currentPath=null,r._webGL={},r.isMask=!1,r.boundsPadding=0,r._localBounds=new x.default,r.dirty=0,r.fastRectDirty=-1,r.clearDirty=0,r.boundsDirty=-1,r.cachedSpriteDirty=!1,r._spriteRect=null,r._fastRect=!1,r}return s(e,t),e.prototype.clone=function t(){var t=new e;t.renderable=this.renderable,t.fillAlpha=this.fillAlpha,t.lineWidth=this.lineWidth,t.lineColor=this.lineColor,t.tint=this.tint,t.blendMode=this.blendMode,t.isMask=this.isMask,t.boundsPadding=this.boundsPadding,t.dirty=0,t.cachedSpriteDirty=this.cachedSpriteDirty;for(var r=0;r<this.graphicsData.length;++r)t.graphicsData.push(this.graphicsData[r].clone());return t.currentPath=t.graphicsData[t.graphicsData.length-1],t.updateLocalBounds(),t},e.prototype.lineStyle=function(){var t=arguments.length<=0||void 0===arguments[0]?0:arguments[0],e=arguments.length<=1||void 0===arguments[1]?0:arguments[1],r=arguments.length<=2||void 0===arguments[2]?1:arguments[2];if(this.lineWidth=t,this.lineColor=e,this.lineAlpha=r,this.currentPath)if(this.currentPath.shape.points.length){var n=new g.Polygon(this.currentPath.shape.points.slice(-2));n.closed=!1,this.drawShape(n)}else this.currentPath.lineWidth=this.lineWidth,this.currentPath.lineColor=this.lineColor,this.currentPath.lineAlpha=this.lineAlpha;return this},e.prototype.moveTo=function(t,e){var r=new g.Polygon([t,e]);return r.closed=!1,this.drawShape(r),this},e.prototype.lineTo=function(t,e){return this.currentPath.shape.points.push(t,e),this.dirty++,this},e.prototype.quadraticCurveTo=function(t,e,r,n){this.currentPath?0===this.currentPath.shape.points.length&&(this.currentPath.shape.points=[0,0]):this.moveTo(0,0);var i=20,o=this.currentPath.shape.points,s=0,a=0;0===o.length&&this.moveTo(0,0);for(var u=o[o.length-2],h=o[o.length-1],l=1;l<=i;++l){var c=l/i;s=u+(t-u)*c,a=h+(e-h)*c,o.push(s+(t+(r-t)*c-s)*c,a+(e+(n-e)*c-a)*c)}return this.dirty++,this},e.prototype.bezierCurveTo=function(t,e,r,n,i,o){this.currentPath?0===this.currentPath.shape.points.length&&(this.currentPath.shape.points=[0,0]):this.moveTo(0,0);var s=this.currentPath.shape.points,a=s[s.length-2],u=s[s.length-1];return s.length-=2,(0,w.default)(a,u,t,e,r,n,i,o,s),this.dirty++,this},e.prototype.arcTo=function(t,e,r,n,i){this.currentPath?0===this.currentPath.shape.points.length&&this.currentPath.shape.points.push(t,e):this.moveTo(t,e);var o=this.currentPath.shape.points,s=o[o.length-2],a=o[o.length-1],u=a-e,h=s-t,l=n-e,c=r-t,d=Math.abs(u*c-h*l);if(d<1e-8||0===i)o[o.length-2]===t&&o[o.length-1]===e||o.push(t,e);else{var f=u*u+h*h,p=l*l+c*c,v=u*l+h*c,y=i*Math.sqrt(f)/d,g=i*Math.sqrt(p)/d,m=y*v/f,_=g*v/p,b=y*c+g*h,x=y*l+g*u,T=h*(g+m),w=u*(g+m),E=c*(y+_),O=l*(y+_),S=Math.atan2(w-x,T-b),M=Math.atan2(O-x,E-b);this.arc(b+t,x+e,i,S,M,h*l>c*u)}return this.dirty++,this},e.prototype.arc=function(t,e,r,n,i){var o=!(arguments.length<=5||void 0===arguments[5])&&arguments[5];if(n===i)return this;!o&&i<=n?i+=2*Math.PI:o&&n<=i&&(n+=2*Math.PI);var s=i-n,a=40*Math.ceil(Math.abs(s)/(2*Math.PI));if(0===s)return this;var u=t+Math.cos(n)*r,h=e+Math.sin(n)*r,l=this.currentPath.shape.points;this.currentPath?l[l.length-2]===u&&l[l.length-1]===h||l.push(u,h):this.moveTo(u,h);for(var c=s/(2*a),d=2*c,f=Math.cos(c),p=Math.sin(c),v=a-1,y=v%1/v,g=0;g<=v;++g){var m=g+y*g,_=c+n+d*m,b=Math.cos(_),x=-Math.sin(_);l.push((f*b+p*x)*r+t,(f*-x+p*b)*r+e)}return this.dirty++,this},e.prototype.beginFill=function(){var t=arguments.length<=0||void 0===arguments[0]?0:arguments[0],e=arguments.length<=1||void 0===arguments[1]?1:arguments[1];return this.filling=!0,this.fillColor=t,this.fillAlpha=e,this.currentPath&&this.currentPath.shape.points.length<=2&&(this.currentPath.fill=this.filling,this.currentPath.fillColor=this.fillColor,\nthis.currentPath.fillAlpha=this.fillAlpha),this},e.prototype.endFill=function(){return this.filling=!1,this.fillColor=null,this.fillAlpha=1,this},e.prototype.drawRect=function(t,e,r,n){return this.drawShape(new g.Rectangle(t,e,r,n)),this},e.prototype.drawRoundedRect=function(t,e,r,n,i){return this.drawShape(new g.RoundedRectangle(t,e,r,n,i)),this},e.prototype.drawCircle=function(t,e,r){return this.drawShape(new g.Circle(t,e,r)),this},e.prototype.drawEllipse=function(t,e,r,n){return this.drawShape(new g.Ellipse(t,e,r,n)),this},e.prototype.drawPolygon=function(t){var e=t,r=!0;if(e instanceof g.Polygon&&(r=e.closed,e=e.points),!Array.isArray(e)){e=new Array(arguments.length);for(var n=0;n<e.length;++n)e[n]=arguments[n]}var i=new g.Polygon(e);return i.closed=r,this.drawShape(i),this},e.prototype.clear=function(){return(this.lineWidth||this.filling||this.graphicsData.length>0)&&(this.lineWidth=0,this.filling=!1,this.dirty++,this.clearDirty++,this.graphicsData.length=0),this},e.prototype.isFastRect=function(){return 1===this.graphicsData.length&&this.graphicsData[0].shape.type===_.SHAPES.RECT&&!this.graphicsData[0].lineWidth},e.prototype._renderWebGL=function(t){this.dirty!==this.fastRectDirty&&(this.fastRectDirty=this.dirty,this._fastRect=this.isFastRect()),this._fastRect?this._renderSpriteRect(t):(t.setObjectRenderer(t.plugins.graphics),t.plugins.graphics.render(this))},e.prototype._renderSpriteRect=function(t){var r=this.graphicsData[0].shape;if(!this._spriteRect){if(!e._SPRITE_TEXTURE){e._SPRITE_TEXTURE=l.default.create(10,10);var n=document.createElement(\"canvas\");n.width=10,n.height=10;var i=n.getContext(\"2d\");i.fillStyle=\"white\",i.fillRect(0,0,10,10),e._SPRITE_TEXTURE=d.default.fromCanvas(n)}this._spriteRect=new y.default(e._SPRITE_TEXTURE)}if(16777215===this.tint)this._spriteRect.tint=this.graphicsData[0].fillColor;else{var o=C,s=R;(0,m.hex2rgb)(this.graphicsData[0].fillColor,o),(0,m.hex2rgb)(this.tint,s),o[0]*=s[0],o[1]*=s[1],o[2]*=s[2],this._spriteRect.tint=(0,m.rgb2hex)(o)}this._spriteRect.alpha=this.graphicsData[0].fillAlpha,this._spriteRect.worldAlpha=this.worldAlpha*this._spriteRect.alpha,e._SPRITE_TEXTURE._frame.width=r.width,e._SPRITE_TEXTURE._frame.height=r.height,this._spriteRect.transform.worldTransform=this.transform.worldTransform,this._spriteRect.anchor.set(-r.x/r.width,-r.y/r.height),this._spriteRect._onAnchorUpdate(),this._spriteRect._renderWebGL(t)},e.prototype._renderCanvas=function(t){this.isMask!==!0&&t.plugins.graphics.render(this)},e.prototype._calculateBounds=function(){this.boundsDirty!==this.dirty&&(this.boundsDirty=this.dirty,this.updateLocalBounds(),this.dirty++,this.cachedSpriteDirty=!0);var t=this._localBounds;this._bounds.addFrame(this.transform,t.minX,t.minY,t.maxX,t.maxY)},e.prototype.containsPoint=function(t){this.worldTransform.applyInverse(t,P);for(var e=this.graphicsData,r=0;r<e.length;++r){var n=e[r];if(n.fill&&n.shape&&n.shape.contains(P.x,P.y))return!0}return!1},e.prototype.updateLocalBounds=function(){var t=1/0,e=-(1/0),r=1/0,n=-(1/0);if(this.graphicsData.length)for(var i=0,o=0,s=0,a=0,u=0,h=0;h<this.graphicsData.length;h++){var l=this.graphicsData[h],c=l.type,d=l.lineWidth;if(i=l.shape,c===_.SHAPES.RECT||c===_.SHAPES.RREC)o=i.x-d/2,s=i.y-d/2,a=i.width+d,u=i.height+d,t=o<t?o:t,e=o+a>e?o+a:e,r=s<r?s:r,n=s+u>n?s+u:n;else if(c===_.SHAPES.CIRC)o=i.x,s=i.y,a=i.radius+d/2,u=i.radius+d/2,t=o-a<t?o-a:t,e=o+a>e?o+a:e,r=s-u<r?s-u:r,n=s+u>n?s+u:n;else if(c===_.SHAPES.ELIP)o=i.x,s=i.y,a=i.width+d/2,u=i.height+d/2,t=o-a<t?o-a:t,e=o+a>e?o+a:e,r=s-u<r?s-u:r,n=s+u>n?s+u:n;else for(var f=i.points,p=0,v=0,y=0,g=0,m=0,b=0,x=0,T=0,w=0;w+2<f.length;w+=2)o=f[w],s=f[w+1],p=f[w+2],v=f[w+3],y=Math.abs(p-o),g=Math.abs(v-s),u=d,a=Math.sqrt(y*y+g*g),a<1e-9||(m=(u/a*g+y)/2,b=(u/a*y+g)/2,x=(p+o)/2,T=(v+s)/2,t=x-m<t?x-m:t,e=x+m>e?x+m:e,r=T-b<r?T-b:r,n=T+b>n?T+b:n)}else t=0,e=0,r=0,n=0;var E=this.boundsPadding;this._localBounds.minX=t-E,this._localBounds.maxX=e+2*E,this._localBounds.minY=r-E,this._localBounds.maxY=n+2*E},e.prototype.drawShape=function(t){this.currentPath&&this.currentPath.shape.points.length<=2&&this.graphicsData.pop(),this.currentPath=null;var e=new p.default(this.lineWidth,this.lineColor,this.lineAlpha,this.fillColor,this.fillAlpha,this.filling,t);return this.graphicsData.push(e),e.type===_.SHAPES.POLY&&(e.shape.closed=e.shape.closed||this.filling,this.currentPath=e),this.dirty++,e},e.prototype.generateCanvasTexture=function(t){var e=arguments.length<=1||void 0===arguments[1]?1:arguments[1],r=this.getLocalBounds(),n=l.default.create(r.width,r.height,t,e);S||(S=new O.default),M.tx=-r.x,M.ty=-r.y,S.render(this,n,!1,M);var i=d.default.fromCanvas(n.baseTexture._canvasRenderTarget.canvas,t);return i.baseTexture.resolution=e,i.baseTexture.update(),i},e.prototype.closePath=function(){var t=this.currentPath;return t&&t.shape&&t.shape.close(),this},e.prototype.addHole=function(){var t=this.graphicsData.pop();return this.currentPath=this.graphicsData[this.graphicsData.length-1],this.currentPath.addHole(t.shape),this.currentPath=null,this},e.prototype.destroy=function(e){t.prototype.destroy.call(this,e);for(var r=0;r<this.graphicsData.length;++r)this.graphicsData[r].destroy();for(var n in this._webgl)for(var i=0;i<this._webgl[n].data.length;++i)this._webgl[n].data[i].destroy();this._spriteRect&&this._spriteRect.destroy(),this.graphicsData=null,this.currentPath=null,this._webgl=null,this._localBounds=null},e}(u.default);r.default=A,A._SPRITE_TEXTURE=null},{\"../const\":42,\"../display/Bounds\":43,\"../display/Container\":44,\"../math\":66,\"../renderers/canvas/CanvasRenderer\":73,\"../sprites/Sprite\":98,\"../textures/RenderTexture\":108,\"../textures/Texture\":109,\"../utils\":117,\"./GraphicsData\":50,\"./utils/bezierCurveTo\":52}],50:[function(t,e,r){\"use strict\";function n(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}r.__esModule=!0;var i=function(){function t(e,r,i,o,s,a,u){n(this,t),this.lineWidth=e,this.lineColor=r,this.lineAlpha=i,this._lineTint=r,this.fillColor=o,this.fillAlpha=s,this._fillTint=o,this.fill=a,this.holes=[],this.shape=u,this.type=u.type}return t.prototype.clone=function(){return new t(this.lineWidth,this.lineColor,this.lineAlpha,this.fillColor,this.fillAlpha,this.fill,this.shape)},t.prototype.addHole=function(t){this.holes.push(t)},t.prototype.destroy=function(){this.shape=null,this.holes=null},t}();r.default=i},{}],51:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}r.__esModule=!0;var o=t(\"../../renderers/canvas/CanvasRenderer\"),s=n(o),a=t(\"../../const\"),u=function(){function t(e){i(this,t),this.renderer=e}return t.prototype.render=function(t){var e=this.renderer,r=e.context,n=t.worldAlpha,i=t.transform.worldTransform,o=e.resolution;this._prevTint!==this.tint&&(this.dirty=!0),r.setTransform(i.a*o,i.b*o,i.c*o,i.d*o,i.tx*o,i.ty*o),t.dirty&&(this.updateGraphicsTint(t),t.dirty=!1),e.setBlendMode(t.blendMode);for(var s=0;s<t.graphicsData.length;s++){var u=t.graphicsData[s],h=u.shape,l=u._fillTint,c=u._lineTint;if(r.lineWidth=u.lineWidth,u.type===a.SHAPES.POLY){r.beginPath(),this.renderPolygon(h.points,h.closed,r);for(var d=0;d<u.holes.length;d++)this.renderPolygon(u.holes[d].points,!0,r);u.fill&&(r.globalAlpha=u.fillAlpha*n,r.fillStyle=\"#\"+(\"00000\"+(0|l).toString(16)).substr(-6),r.fill()),u.lineWidth&&(r.globalAlpha=u.lineAlpha*n,r.strokeStyle=\"#\"+(\"00000\"+(0|c).toString(16)).substr(-6),r.stroke())}else if(u.type===a.SHAPES.RECT)(u.fillColor||0===u.fillColor)&&(r.globalAlpha=u.fillAlpha*n,r.fillStyle=\"#\"+(\"00000\"+(0|l).toString(16)).substr(-6),r.fillRect(h.x,h.y,h.width,h.height)),u.lineWidth&&(r.globalAlpha=u.lineAlpha*n,r.strokeStyle=\"#\"+(\"00000\"+(0|c).toString(16)).substr(-6),r.strokeRect(h.x,h.y,h.width,h.height));else if(u.type===a.SHAPES.CIRC)r.beginPath(),r.arc(h.x,h.y,h.radius,0,2*Math.PI),r.closePath(),u.fill&&(r.globalAlpha=u.fillAlpha*n,r.fillStyle=\"#\"+(\"00000\"+(0|l).toString(16)).substr(-6),r.fill()),u.lineWidth&&(r.globalAlpha=u.lineAlpha*n,r.strokeStyle=\"#\"+(\"00000\"+(0|c).toString(16)).substr(-6),r.stroke());else if(u.type===a.SHAPES.ELIP){var f=2*h.width,p=2*h.height,v=h.x-f/2,y=h.y-p/2;r.beginPath();var g=.5522848,m=f/2*g,_=p/2*g,b=v+f,x=y+p,T=v+f/2,w=y+p/2;r.moveTo(v,w),r.bezierCurveTo(v,w-_,T-m,y,T,y),r.bezierCurveTo(T+m,y,b,w-_,b,w),r.bezierCurveTo(b,w+_,T+m,x,T,x),r.bezierCurveTo(T-m,x,v,w+_,v,w),r.closePath(),u.fill&&(r.globalAlpha=u.fillAlpha*n,r.fillStyle=\"#\"+(\"00000\"+(0|l).toString(16)).substr(-6),r.fill()),u.lineWidth&&(r.globalAlpha=u.lineAlpha*n,r.strokeStyle=\"#\"+(\"00000\"+(0|c).toString(16)).substr(-6),r.stroke())}else if(u.type===a.SHAPES.RREC){var E=h.x,O=h.y,S=h.width,M=h.height,P=h.radius,C=Math.min(S,M)/2|0;P=P>C?C:P,r.beginPath(),r.moveTo(E,O+P),r.lineTo(E,O+M-P),r.quadraticCurveTo(E,O+M,E+P,O+M),r.lineTo(E+S-P,O+M),r.quadraticCurveTo(E+S,O+M,E+S,O+M-P),r.lineTo(E+S,O+P),r.quadraticCurveTo(E+S,O,E+S-P,O),r.lineTo(E+P,O),r.quadraticCurveTo(E,O,E,O+P),r.closePath(),(u.fillColor||0===u.fillColor)&&(r.globalAlpha=u.fillAlpha*n,r.fillStyle=\"#\"+(\"00000\"+(0|l).toString(16)).substr(-6),r.fill()),u.lineWidth&&(r.globalAlpha=u.lineAlpha*n,r.strokeStyle=\"#\"+(\"00000\"+(0|c).toString(16)).substr(-6),r.stroke())}}},t.prototype.updateGraphicsTint=function(t){t._prevTint=t.tint;for(var e=(t.tint>>16&255)/255,r=(t.tint>>8&255)/255,n=(255&t.tint)/255,i=0;i<t.graphicsData.length;++i){var o=t.graphicsData[i],s=0|o.fillColor,a=0|o.lineColor;o._fillTint=((s>>16&255)/255*e*255<<16)+((s>>8&255)/255*r*255<<8)+(255&s)/255*n*255,o._lineTint=((a>>16&255)/255*e*255<<16)+((a>>8&255)/255*r*255<<8)+(255&a)/255*n*255}},t.prototype.renderPolygon=function(t,e,r){r.moveTo(t[0],t[1]);for(var n=1;n<t.length/2;++n)r.lineTo(t[2*n],t[2*n+1]);e&&r.closePath()},t.prototype.destroy=function(){this.renderer=null},t}();r.default=u,s.default.registerPlugin(\"graphics\",u)},{\"../../const\":42,\"../../renderers/canvas/CanvasRenderer\":73}],52:[function(t,e,r){\"use strict\";function n(t,e,r,n,i,o,s,a){var u=arguments.length<=8||void 0===arguments[8]?[]:arguments[8],h=20,l=0,c=0,d=0,f=0,p=0;u.push(t,e);for(var v=1,y=0;v<=h;++v)y=v/h,l=1-y,c=l*l,d=c*l,f=y*y,p=f*y,u.push(d*t+3*c*y*r+3*l*f*i+p*s,d*e+3*c*y*n+3*l*f*o+p*a);return u}r.__esModule=!0,r.default=n},{}],53:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}function o(t,e){if(!t)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!e||\"object\"!=typeof e&&\"function\"!=typeof e?t:e}function s(t,e){if(\"function\"!=typeof e&&null!==e)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=t(\"../../utils\"),u=t(\"../../const\"),h=t(\"../../renderers/webgl/utils/ObjectRenderer\"),l=n(h),c=t(\"../../renderers/webgl/WebGLRenderer\"),d=n(c),f=t(\"./WebGLGraphicsData\"),p=n(f),v=t(\"./shaders/PrimitiveShader\"),y=n(v),g=t(\"./utils/buildPoly\"),m=n(g),_=t(\"./utils/buildRectangle\"),b=n(_),x=t(\"./utils/buildRoundedRectangle\"),T=n(x),w=t(\"./utils/buildCircle\"),E=n(w),O=function(t){function e(r){i(this,e);var n=o(this,t.call(this,r));return n.graphicsDataPool=[],n.primitiveShader=null,n.gl=r.gl,n.CONTEXT_UID=0,n}return s(e,t),e.prototype.onContextChange=function(){this.gl=this.renderer.gl,this.CONTEXT_UID=this.renderer.CONTEXT_UID,this.primitiveShader=new y.default(this.gl)},e.prototype.destroy=function(){l.default.prototype.destroy.call(this);for(var t=0;t<this.graphicsDataPool.length;++t)this.graphicsDataPool[t].destroy();this.graphicsDataPool=null},e.prototype.render=function(t){var e=this.renderer,r=e.gl,n=void 0,i=t._webGL[this.CONTEXT_UID];i&&t.dirty===i.dirty||(this.updateGraphics(t),i=t._webGL[this.CONTEXT_UID]);var o=this.primitiveShader;e.bindShader(o),e.state.setBlendMode(t.blendMode);for(var s=0,u=i.data.length;s<u;s++){n=i.data[s];var h=n.shader;e.bindShader(h),h.uniforms.translationMatrix=t.transform.worldTransform.toArray(!0),h.uniforms.tint=(0,a.hex2rgb)(t.tint),h.uniforms.alpha=t.worldAlpha,e.bindVao(n.vao),n.vao.draw(r.TRIANGLE_STRIP,n.indices.length)}},e.prototype.updateGraphics=function(t){var e=this.renderer.gl,r=t._webGL[this.CONTEXT_UID];if(r||(r=t._webGL[this.CONTEXT_UID]={lastIndex:0,data:[],gl:e,clearDirty:-1,dirty:-1}),r.dirty=t.dirty,t.clearDirty!==r.clearDirty){r.clearDirty=t.clearDirty;for(var n=0;n<r.data.length;n++)this.graphicsDataPool.push(r.data[n]);r.data.length=0,r.lastIndex=0}for(var i=void 0,o=r.lastIndex;o<t.graphicsData.length;o++){var s=t.graphicsData[o];i=this.getWebGLData(r,0),s.type===u.SHAPES.POLY&&(0,m.default)(s,i),s.type===u.SHAPES.RECT?(0,b.default)(s,i):s.type===u.SHAPES.CIRC||s.type===u.SHAPES.ELIP?(0,E.default)(s,i):s.type===u.SHAPES.RREC&&(0,T.default)(s,i),r.lastIndex++}this.renderer.bindVao(null);for(var a=0;a<r.data.length;a++)i=r.data[a],i.dirty&&i.upload()},e.prototype.getWebGLData=function(t,e){var r=t.data[t.data.length-1];return(!r||r.points.length>32e4)&&(r=this.graphicsDataPool.pop()||new p.default(this.renderer.gl,this.primitiveShader,this.renderer.state.attribsState),r.reset(e),t.data.push(r)),r.dirty=!0,r},e}(l.default);r.default=O,d.default.registerPlugin(\"graphics\",O)},{\"../../const\":42,\"../../renderers/webgl/WebGLRenderer\":80,\"../../renderers/webgl/utils/ObjectRenderer\":90,\"../../utils\":117,\"./WebGLGraphicsData\":54,\"./shaders/PrimitiveShader\":55,\"./utils/buildCircle\":56,\"./utils/buildPoly\":58,\"./utils/buildRectangle\":59,\"./utils/buildRoundedRectangle\":60}],54:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}r.__esModule=!0;var o=t(\"pixi-gl-core\"),s=n(o),a=function(){function t(e,r,n){i(this,t),this.gl=e,this.color=[0,0,0],this.points=[],this.indices=[],this.buffer=s.default.GLBuffer.createVertexBuffer(e),this.indexBuffer=s.default.GLBuffer.createIndexBuffer(e),this.dirty=!0,this.glPoints=null,this.glIndices=null,this.shader=r,this.vao=new s.default.VertexArrayObject(e,n).addIndex(this.indexBuffer).addAttribute(this.buffer,r.attributes.aVertexPosition,e.FLOAT,!1,24,0).addAttribute(this.buffer,r.attributes.aColor,e.FLOAT,!1,24,8)}return t.prototype.reset=function(){this.points.length=0,this.indices.length=0},t.prototype.upload=function(){this.glPoints=new Float32Array(this.points),this.buffer.upload(this.glPoints),this.glIndices=new Uint16Array(this.indices),this.indexBuffer.upload(this.glIndices),this.dirty=!1},t.prototype.destroy=function(){this.color=null,this.points=null,this.indices=null,this.vao.destroy(),this.buffer.destroy(),this.indexBuffer.destroy(),this.gl=null,this.buffer=null,this.indexBuffer=null,this.glPoints=null,this.glIndices=null},t}();r.default=a},{\"pixi-gl-core\":12}],55:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}function o(t,e){if(!t)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!e||\"object\"!=typeof e&&\"function\"!=typeof e?t:e}function s(t,e){if(\"function\"!=typeof e&&null!==e)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=t(\"../../../Shader\"),u=n(a),h=function(t){function e(r){return i(this,e),o(this,t.call(this,r,[\"attribute vec2 aVertexPosition;\",\"attribute vec4 aColor;\",\"uniform mat3 translationMatrix;\",\"uniform mat3 projectionMatrix;\",\"uniform float alpha;\",\"uniform vec3 tint;\",\"varying vec4 vColor;\",\"void main(void){\",\"   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\",\"   vColor = aColor * vec4(tint * alpha, alpha);\",\"}\"].join(\"\\n\"),[\"varying vec4 vColor;\",\"void main(void){\",\"   gl_FragColor = vColor;\",\"}\"].join(\"\\n\")))}return s(e,t),e}(u.default);r.default=h},{\"../../../Shader\":41}],56:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){var r=t.shape,n=r.x,i=r.y,o=void 0,h=void 0;t.type===a.SHAPES.CIRC?(o=r.radius,h=r.radius):(o=r.width,h=r.height);var l=Math.floor(30*Math.sqrt(r.radius))||Math.floor(15*Math.sqrt(r.width+r.height)),c=2*Math.PI/l;if(t.fill){var d=(0,u.hex2rgb)(t.fillColor),f=t.fillAlpha,p=d[0]*f,v=d[1]*f,y=d[2]*f,g=e.points,m=e.indices,_=g.length/6;m.push(_);for(var b=0;b<l+1;b++)g.push(n,i,p,v,y,f),g.push(n+Math.sin(c*b)*o,i+Math.cos(c*b)*h,p,v,y,f),m.push(_++,_++);m.push(_-1)}if(t.lineWidth){var x=t.points;t.points=[];for(var T=0;T<l+1;T++)t.points.push(n+Math.sin(c*T)*o,i+Math.cos(c*T)*h);(0,s.default)(t,e),t.points=x}}r.__esModule=!0,r.default=i;var o=t(\"./buildLine\"),s=n(o),a=t(\"../../../const\"),u=t(\"../../../utils\")},{\"../../../const\":42,\"../../../utils\":117,\"./buildLine\":57}],57:[function(t,e,r){\"use strict\";function n(t,e){var r=t.points;if(0!==r.length){var n=new i.Point(r[0],r[1]),s=new i.Point(r[r.length-2],r[r.length-1]);if(n.x===s.x&&n.y===s.y){r=r.slice(),r.pop(),r.pop(),s=new i.Point(r[r.length-2],r[r.length-1]);var a=s.x+.5*(n.x-s.x),u=s.y+.5*(n.y-s.y);r.unshift(a,u),r.push(a,u)}var h=e.points,l=e.indices,c=r.length/2,d=r.length,f=h.length/6,p=t.lineWidth/2,v=(0,o.hex2rgb)(t.lineColor),y=t.lineAlpha,g=v[0]*y,m=v[1]*y,_=v[2]*y,b=r[0],x=r[1],T=r[2],w=r[3],E=0,O=0,S=-(x-w),M=b-T,P=0,C=0,R=0,A=0,D=Math.sqrt(S*S+M*M);S/=D,M/=D,S*=p,M*=p,h.push(b-S,x-M,g,m,_,y),h.push(b+S,x+M,g,m,_,y);for(var I=1;I<c-1;++I){b=r[2*(I-1)],x=r[2*(I-1)+1],T=r[2*I],w=r[2*I+1],E=r[2*(I+1)],O=r[2*(I+1)+1],S=-(x-w),M=b-T,D=Math.sqrt(S*S+M*M),S/=D,M/=D,S*=p,M*=p,P=-(w-O),C=T-E,D=Math.sqrt(P*P+C*C),P/=D,C/=D,P*=p,C*=p;var L=-M+x-(-M+w),j=-S+T-(-S+b),B=(-S+b)*(-M+w)-(-S+T)*(-M+x),F=-C+O-(-C+w),N=-P+T-(-P+E),k=(-P+E)*(-C+w)-(-P+T)*(-C+O),U=L*N-F*j;if(Math.abs(U)<.1)U+=10.1,h.push(T-S,w-M,g,m,_,y),h.push(T+S,w+M,g,m,_,y);else{var X=(j*k-N*B)/U,W=(F*B-L*k)/U,G=(X-T)*(X-T)+(W-w)*(W-w);G>196*p*p?(R=S-P,A=M-C,D=Math.sqrt(R*R+A*A),R/=D,A/=D,R*=p,A*=p,h.push(T-R,w-A),h.push(g,m,_,y),h.push(T+R,w+A),h.push(g,m,_,y),h.push(T-R,w-A),h.push(g,m,_,y),d++):(h.push(X,W),h.push(g,m,_,y),h.push(T-(X-T),w-(W-w)),h.push(g,m,_,y))}}b=r[2*(c-2)],x=r[2*(c-2)+1],T=r[2*(c-1)],w=r[2*(c-1)+1],S=-(x-w),M=b-T,D=Math.sqrt(S*S+M*M),S/=D,M/=D,S*=p,M*=p,h.push(T-S,w-M),h.push(g,m,_,y),h.push(T+S,w+M),h.push(g,m,_,y),l.push(f);for(var H=0;H<d;++H)l.push(f++);l.push(f-1)}}r.__esModule=!0,r.default=n;var i=t(\"../../../math\"),o=t(\"../../../utils\")},{\"../../../math\":66,\"../../../utils\":117}],58:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){t.points=t.shape.points.slice();var r=t.points;if(t.fill&&r.length>=6){for(var n=[],i=t.holes,o=0;o<i.length;o++){var u=i[o];n.push(r.length/2),r=r.concat(u.points)}var l=e.points,c=e.indices,d=r.length/2,f=(0,a.hex2rgb)(t.fillColor),p=t.fillAlpha,v=f[0]*p,y=f[1]*p,g=f[2]*p,m=(0,h.default)(r,n,2);if(!m)return;for(var _=l.length/6,b=0;b<m.length;b+=3)c.push(m[b]+_),c.push(m[b]+_),c.push(m[b+1]+_),c.push(m[b+2]+_),c.push(m[b+2]+_);for(var x=0;x<d;x++)l.push(r[2*x],r[2*x+1],v,y,g,p)}t.lineWidth>0&&(0,s.default)(t,e)}r.__esModule=!0,r.default=i;var o=t(\"./buildLine\"),s=n(o),a=t(\"../../../utils\"),u=t(\"earcut\"),h=n(u)},{\"../../../utils\":117,\"./buildLine\":57,earcut:2}],59:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){var r=t.shape,n=r.x,i=r.y,o=r.width,u=r.height;if(t.fill){var h=(0,a.hex2rgb)(t.fillColor),l=t.fillAlpha,c=h[0]*l,d=h[1]*l,f=h[2]*l,p=e.points,v=e.indices,y=p.length/6;p.push(n,i),p.push(c,d,f,l),p.push(n+o,i),p.push(c,d,f,l),p.push(n,i+u),p.push(c,d,f,l),p.push(n+o,i+u),p.push(c,d,f,l),v.push(y,y,y+1,y+2,y+3,y+3)}if(t.lineWidth){var g=t.points;t.points=[n,i,n+o,i,n+o,i+u,n,i+u,n,i],(0,s.default)(t,e),t.points=g}}r.__esModule=!0,r.default=i;var o=t(\"./buildLine\"),s=n(o),a=t(\"../../../utils\")},{\"../../../utils\":117,\"./buildLine\":57}],60:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){var r=t.shape,n=r.x,i=r.y,s=r.width,u=r.height,c=r.radius,d=[];if(d.push(n,i+c),o(n,i+u-c,n,i+u,n+c,i+u,d),o(n+s-c,i+u,n+s,i+u,n+s,i+u-c,d),o(n+s,i+c,n+s,i,n+s-c,i,d),o(n+c,i,n,i,n,i+c+1e-10,d),t.fill){for(var f=(0,l.hex2rgb)(t.fillColor),p=t.fillAlpha,v=f[0]*p,y=f[1]*p,g=f[2]*p,m=e.points,_=e.indices,b=m.length/6,x=(0,a.default)(d,null,2),T=0,w=x.length;T<w;T+=3)_.push(x[T]+b),_.push(x[T]+b),_.push(x[T+1]+b),_.push(x[T+2]+b),_.push(x[T+2]+b);for(var E=0,O=d.length;E<O;E++)m.push(d[E],d[++E],v,y,g,p)}if(t.lineWidth){var S=t.points;t.points=d,(0,h.default)(t,e),t.points=S}}function o(t,e,r,n,i,o){function s(t,e,r){var n=e-t;return t+n*r}for(var a=arguments.length<=6||void 0===arguments[6]?[]:arguments[6],u=20,h=a,l=0,c=0,d=0,f=0,p=0,v=0,y=0,g=0;y<=u;++y)g=y/u,l=s(t,r,g),c=s(e,n,g),d=s(r,i,g),f=s(n,o,g),p=s(l,d,g),v=s(c,f,g),h.push(p,v);return h}r.__esModule=!0,r.default=i;var s=t(\"earcut\"),a=n(s),u=t(\"./buildLine\"),h=n(u),l=t(\"../../../utils\")},{\"../../../utils\":117,\"./buildLine\":57,earcut:2}],61:[function(t,e,r){\"use strict\";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function i(t){return t&&t.__esModule?t:{default:t}}function o(){var t=arguments.length<=0||void 0===arguments[0]?800:arguments[0],e=arguments.length<=1||void 0===arguments[1]?600:arguments[1],r=arguments[2],n=arguments[3];return!n&&U.isWebGLSupported()?new q.default(t,e,r):new Y.default(t,e,r)}r.__esModule=!0,r.Filter=r.SpriteMaskFilter=r.Quad=r.RenderTarget=r.ObjectRenderer=r.WebGLManager=r.Shader=r.CanvasRenderTarget=r.TextureUvs=r.VideoBaseTexture=r.BaseRenderTexture=r.RenderTexture=r.BaseTexture=r.Texture=r.CanvasGraphicsRenderer=r.GraphicsRenderer=r.GraphicsData=r.Graphics=r.TextStyle=r.Text=r.SpriteRenderer=r.CanvasTinter=r.CanvasSpriteRenderer=r.Sprite=r.TransformBase=r.TransformStatic=r.Transform=r.Container=r.DisplayObject=r.Bounds=r.glCore=r.WebGLRenderer=r.CanvasRenderer=r.ticker=r.utils=r.settings=void 0;var s=t(\"./const\");Object.keys(s).forEach(function(t){\"default\"!==t&&\"__esModule\"!==t&&Object.defineProperty(r,t,{enumerable:!0,get:function(){return s[t]}})});var a=t(\"./math\");Object.keys(a).forEach(function(t){\"default\"!==t&&\"__esModule\"!==t&&Object.defineProperty(r,t,{enumerable:!0,get:function(){return a[t]}})});var u=t(\"pixi-gl-core\");Object.defineProperty(r,\"glCore\",{enumerable:!0,get:function(){return i(u).default}});var h=t(\"./display/Bounds\");Object.defineProperty(r,\"Bounds\",{enumerable:!0,get:function(){return i(h).default}});var l=t(\"./display/DisplayObject\");Object.defineProperty(r,\"DisplayObject\",{enumerable:!0,get:function(){return i(l).default}});var c=t(\"./display/Container\");Object.defineProperty(r,\"Container\",{enumerable:!0,get:function(){return i(c).default}});var d=t(\"./display/Transform\");Object.defineProperty(r,\"Transform\",{enumerable:!0,get:function(){return i(d).default}});var f=t(\"./display/TransformStatic\");Object.defineProperty(r,\"TransformStatic\",{enumerable:!0,get:function(){return i(f).default}});var p=t(\"./display/TransformBase\");Object.defineProperty(r,\"TransformBase\",{enumerable:!0,get:function(){return i(p).default}});var v=t(\"./sprites/Sprite\");Object.defineProperty(r,\"Sprite\",{enumerable:!0,get:function(){return i(v).default}});var y=t(\"./sprites/canvas/CanvasSpriteRenderer\");Object.defineProperty(r,\"CanvasSpriteRenderer\",{enumerable:!0,get:function(){return i(y).default}});var g=t(\"./sprites/canvas/CanvasTinter\");Object.defineProperty(r,\"CanvasTinter\",{enumerable:!0,get:function(){return i(g).default}});var m=t(\"./sprites/webgl/SpriteRenderer\");Object.defineProperty(r,\"SpriteRenderer\",{enumerable:!0,get:function(){return i(m).default}});var _=t(\"./text/Text\");Object.defineProperty(r,\"Text\",{enumerable:!0,get:function(){return i(_).default}});var b=t(\"./text/TextStyle\");Object.defineProperty(r,\"TextStyle\",{enumerable:!0,get:function(){return i(b).default}});var x=t(\"./graphics/Graphics\");Object.defineProperty(r,\"Graphics\",{enumerable:!0,get:function(){return i(x).default}});var T=t(\"./graphics/GraphicsData\");Object.defineProperty(r,\"GraphicsData\",{enumerable:!0,get:function(){return i(T).default}});var w=t(\"./graphics/webgl/GraphicsRenderer\");Object.defineProperty(r,\"GraphicsRenderer\",{enumerable:!0,get:function(){return i(w).default}});var E=t(\"./graphics/canvas/CanvasGraphicsRenderer\");Object.defineProperty(r,\"CanvasGraphicsRenderer\",{enumerable:!0,get:function(){return i(E).default}});var O=t(\"./textures/Texture\");Object.defineProperty(r,\"Texture\",{enumerable:!0,get:function(){return i(O).default}});var S=t(\"./textures/BaseTexture\");Object.defineProperty(r,\"BaseTexture\",{enumerable:!0,get:function(){return i(S).default}});var M=t(\"./textures/RenderTexture\");Object.defineProperty(r,\"RenderTexture\",{enumerable:!0,get:function(){return i(M).default}});var P=t(\"./textures/BaseRenderTexture\");Object.defineProperty(r,\"BaseRenderTexture\",{enumerable:!0,get:function(){return i(P).default}});var C=t(\"./textures/VideoBaseTexture\");Object.defineProperty(r,\"VideoBaseTexture\",{enumerable:!0,get:function(){return i(C).default}});var R=t(\"./textures/TextureUvs\");Object.defineProperty(r,\"TextureUvs\",{enumerable:!0,get:function(){return i(R).default}});var A=t(\"./renderers/canvas/utils/CanvasRenderTarget\");Object.defineProperty(r,\"CanvasRenderTarget\",{enumerable:!0,get:function(){return i(A).default}});var D=t(\"./Shader\");Object.defineProperty(r,\"Shader\",{enumerable:!0,get:function(){return i(D).default}});var I=t(\"./renderers/webgl/managers/WebGLManager\");Object.defineProperty(r,\"WebGLManager\",{enumerable:!0,get:function(){return i(I).default}});var L=t(\"./renderers/webgl/utils/ObjectRenderer\");Object.defineProperty(r,\"ObjectRenderer\",{enumerable:!0,get:function(){return i(L).default}});var j=t(\"./renderers/webgl/utils/RenderTarget\");Object.defineProperty(r,\"RenderTarget\",{enumerable:!0,get:function(){return i(j).default}});var B=t(\"./renderers/webgl/utils/Quad\");Object.defineProperty(r,\"Quad\",{enumerable:!0,get:function(){return i(B).default}});var F=t(\"./renderers/webgl/filters/spriteMask/SpriteMaskFilter\");Object.defineProperty(r,\"SpriteMaskFilter\",{enumerable:!0,get:function(){return i(F).default}});var N=t(\"./renderers/webgl/filters/Filter\");Object.defineProperty(r,\"Filter\",{enumerable:!0,get:function(){return i(N).default}}),r.autoDetectRenderer=o;var k=t(\"./utils\"),U=n(k),X=t(\"./ticker\"),W=n(X),G=t(\"./settings\"),H=i(G),V=t(\"./renderers/canvas/CanvasRenderer\"),Y=i(V),z=t(\"./renderers/webgl/WebGLRenderer\"),q=i(z);r.settings=H.default,r.utils=U,r.ticker=W,r.CanvasRenderer=Y.default,r.WebGLRenderer=q.default},{\"./Shader\":41,\"./const\":42,\"./display/Bounds\":43,\"./display/Container\":44,\"./display/DisplayObject\":45,\"./display/Transform\":46,\"./display/TransformBase\":47,\"./display/TransformStatic\":48,\"./graphics/Graphics\":49,\"./graphics/GraphicsData\":50,\"./graphics/canvas/CanvasGraphicsRenderer\":51,\"./graphics/webgl/GraphicsRenderer\":53,\"./math\":66,\"./renderers/canvas/CanvasRenderer\":73,\"./renderers/canvas/utils/CanvasRenderTarget\":75,\"./renderers/webgl/WebGLRenderer\":80,\"./renderers/webgl/filters/Filter\":82,\"./renderers/webgl/filters/spriteMask/SpriteMaskFilter\":85,\"./renderers/webgl/managers/WebGLManager\":89,\"./renderers/webgl/utils/ObjectRenderer\":90,\"./renderers/webgl/utils/Quad\":91,\"./renderers/webgl/utils/RenderTarget\":92,\"./settings\":97,\"./sprites/Sprite\":98,\"./sprites/canvas/CanvasSpriteRenderer\":99,\"./sprites/canvas/CanvasTinter\":100,\"./sprites/webgl/SpriteRenderer\":102,\"./text/Text\":104,\"./text/TextStyle\":105,\"./textures/BaseRenderTexture\":106,\"./textures/BaseTexture\":107,\"./textures/RenderTexture\":108,\"./textures/Texture\":109,\"./textures/TextureUvs\":110,\"./textures/VideoBaseTexture\":111,\"./ticker\":113,\"./utils\":117,\"pixi-gl-core\":12}],62:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}function i(t){return t<0?-1:t>0?1:0}function o(){for(var t=0;t<16;t++){var e=[];f.push(e);for(var r=0;r<16;r++)for(var n=i(u[t]*u[r]+l[t]*h[r]),o=i(h[t]*u[r]+c[t]*h[r]),s=i(u[t]*l[r]+l[t]*c[r]),p=i(h[t]*l[r]+c[t]*c[r]),v=0;v<16;v++)if(u[v]===n&&h[v]===o&&l[v]===s&&c[v]===p){e.push(v);break}}for(var y=0;y<16;y++){var g=new a.default;g.set(u[y],h[y],l[y],c[y],0,0),d.push(g)}}r.__esModule=!0;var s=t(\"./Matrix\"),a=n(s),u=[1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1,0,1],h=[0,1,1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1],l=[0,-1,-1,-1,0,1,1,1,0,1,1,1,0,-1,-1,-1],c=[1,1,0,-1,-1,-1,0,1,-1,-1,0,1,1,1,0,-1],d=[],f=[];o();var p={E:0,SE:1,S:2,SW:3,W:4,NW:5,N:6,NE:7,MIRROR_VERTICAL:8,MIRROR_HORIZONTAL:12,uX:function(t){return u[t]},uY:function(t){return h[t]},vX:function(t){return l[t]},vY:function(t){return c[t]},inv:function(t){return 8&t?15&t:7&-t},add:function(t,e){return f[t][e]},sub:function(t,e){return f[t][p.inv(e)]},rotate180:function(t){return 4^t},isSwapWidthHeight:function(t){return 2===(3&t)},byDirection:function(t,e){return 2*Math.abs(t)<=Math.abs(e)?e>=0?p.S:p.N:2*Math.abs(e)<=Math.abs(t)?t>0?p.E:p.W:e>0?t>0?p.SE:p.SW:t>0?p.NE:p.NW},matrixAppendRotationInv:function(t,e){var r=arguments.length<=2||void 0===arguments[2]?0:arguments[2],n=arguments.length<=3||void 0===arguments[3]?0:arguments[3],i=d[p.inv(e)];i.tx=r,i.ty=n,t.append(i)}};r.default=p},{\"./Matrix\":63}],63:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}r.__esModule=!0;var o=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,\"value\"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),s=t(\"./Point\"),a=n(s),u=function(){function t(){i(this,t),this.a=1,this.b=0,this.c=0,this.d=1,this.tx=0,this.ty=0,this.array=null}return t.prototype.fromArray=function(t){this.a=t[0],this.b=t[1],this.c=t[3],this.d=t[4],this.tx=t[2],this.ty=t[5]},t.prototype.set=function(t,e,r,n,i,o){return this.a=t,this.b=e,this.c=r,this.d=n,this.tx=i,this.ty=o,this},t.prototype.toArray=function(t,e){this.array||(this.array=new Float32Array(9));var r=e||this.array;return t?(r[0]=this.a,r[1]=this.b,r[2]=0,r[3]=this.c,r[4]=this.d,r[5]=0,r[6]=this.tx,r[7]=this.ty,r[8]=1):(r[0]=this.a,r[1]=this.c,r[2]=this.tx,r[3]=this.b,r[4]=this.d,r[5]=this.ty,r[6]=0,r[7]=0,r[8]=1),r},t.prototype.apply=function(t,e){e=e||new a.default;var r=t.x,n=t.y;return e.x=this.a*r+this.c*n+this.tx,e.y=this.b*r+this.d*n+this.ty,e},t.prototype.applyInverse=function(t,e){e=e||new a.default;var r=1/(this.a*this.d+this.c*-this.b),n=t.x,i=t.y;return e.x=this.d*r*n+-this.c*r*i+(this.ty*this.c-this.tx*this.d)*r,e.y=this.a*r*i+-this.b*r*n+(-this.ty*this.a+this.tx*this.b)*r,e},t.prototype.translate=function(t,e){return this.tx+=t,this.ty+=e,this},t.prototype.scale=function(t,e){return this.a*=t,this.d*=e,this.c*=t,this.b*=e,this.tx*=t,this.ty*=e,this},t.prototype.rotate=function(t){var e=Math.cos(t),r=Math.sin(t),n=this.a,i=this.c,o=this.tx;return this.a=n*e-this.b*r,this.b=n*r+this.b*e,this.c=i*e-this.d*r,this.d=i*r+this.d*e,this.tx=o*e-this.ty*r,this.ty=o*r+this.ty*e,this},t.prototype.append=function(t){var e=this.a,r=this.b,n=this.c,i=this.d;return this.a=t.a*e+t.b*n,this.b=t.a*r+t.b*i,this.c=t.c*e+t.d*n,this.d=t.c*r+t.d*i,this.tx=t.tx*e+t.ty*n+this.tx,this.ty=t.tx*r+t.ty*i+this.ty,this},t.prototype.setTransform=function(t,e,r,n,i,o,s,a,u){var h=Math.sin(s),l=Math.cos(s),c=Math.cos(u),d=Math.sin(u),f=-Math.sin(a),p=Math.cos(a),v=l*i,y=h*i,g=-h*o,m=l*o;return this.a=c*v+d*g,this.b=c*y+d*m,this.c=f*v+p*g,this.d=f*y+p*m,\nthis.tx=t+(r*v+n*g),this.ty=e+(r*y+n*m),this},t.prototype.prepend=function(t){var e=this.tx;if(1!==t.a||0!==t.b||0!==t.c||1!==t.d){var r=this.a,n=this.c;this.a=r*t.a+this.b*t.c,this.b=r*t.b+this.b*t.d,this.c=n*t.a+this.d*t.c,this.d=n*t.b+this.d*t.d}return this.tx=e*t.a+this.ty*t.c+t.tx,this.ty=e*t.b+this.ty*t.d+t.ty,this},t.prototype.decompose=function(t){var e=this.a,r=this.b,n=this.c,i=this.d,o=Math.atan2(-n,i),s=Math.atan2(r,e),a=Math.abs(1-o/s);return a<1e-5?(t.rotation=s,e<0&&i>=0&&(t.rotation+=t.rotation<=0?Math.PI:-Math.PI),t.skew.x=t.skew.y=0):(t.skew.x=o,t.skew.y=s),t.scale.x=Math.sqrt(e*e+r*r),t.scale.y=Math.sqrt(n*n+i*i),t.position.x=this.tx,t.position.y=this.ty,t},t.prototype.invert=function(){var t=this.a,e=this.b,r=this.c,n=this.d,i=this.tx,o=t*n-e*r;return this.a=n/o,this.b=-e/o,this.c=-r/o,this.d=t/o,this.tx=(r*this.ty-n*i)/o,this.ty=-(t*this.ty-e*i)/o,this},t.prototype.identity=function(){return this.a=1,this.b=0,this.c=0,this.d=1,this.tx=0,this.ty=0,this},t.prototype.clone=function(){var e=new t;return e.a=this.a,e.b=this.b,e.c=this.c,e.d=this.d,e.tx=this.tx,e.ty=this.ty,e},t.prototype.copy=function(t){return t.a=this.a,t.b=this.b,t.c=this.c,t.d=this.d,t.tx=this.tx,t.ty=this.ty,t},o(t,null,[{key:\"IDENTITY\",get:function(){return new t}},{key:\"TEMP_MATRIX\",get:function(){return new t}}]),t}();r.default=u},{\"./Point\":65}],64:[function(t,e,r){\"use strict\";function n(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}r.__esModule=!0;var i=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,\"value\"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),o=function(){function t(e,r){var i=arguments.length<=2||void 0===arguments[2]?0:arguments[2],o=arguments.length<=3||void 0===arguments[3]?0:arguments[3];n(this,t),this._x=i,this._y=o,this.cb=e,this.scope=r}return t.prototype.set=function(t,e){var r=t||0,n=e||(0!==e?r:0);this._x===r&&this._y===n||(this._x=r,this._y=n,this.cb.call(this.scope))},t.prototype.copy=function(t){this._x===t.x&&this._y===t.y||(this._x=t.x,this._y=t.y,this.cb.call(this.scope))},i(t,[{key:\"x\",get:function(){return this._x},set:function(t){this._x!==t&&(this._x=t,this.cb.call(this.scope))}},{key:\"y\",get:function(){return this._y},set:function(t){this._y!==t&&(this._y=t,this.cb.call(this.scope))}}]),t}();r.default=o},{}],65:[function(t,e,r){\"use strict\";function n(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}r.__esModule=!0;var i=function(){function t(){var e=arguments.length<=0||void 0===arguments[0]?0:arguments[0],r=arguments.length<=1||void 0===arguments[1]?0:arguments[1];n(this,t),this.x=e,this.y=r}return t.prototype.clone=function(){return new t(this.x,this.y)},t.prototype.copy=function(t){this.set(t.x,t.y)},t.prototype.equals=function(t){return t.x===this.x&&t.y===this.y},t.prototype.set=function(t,e){this.x=t||0,this.y=e||(0!==e?this.x:0)},t}();r.default=i},{}],66:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}r.__esModule=!0;var i=t(\"./Point\");Object.defineProperty(r,\"Point\",{enumerable:!0,get:function(){return n(i).default}});var o=t(\"./ObservablePoint\");Object.defineProperty(r,\"ObservablePoint\",{enumerable:!0,get:function(){return n(o).default}});var s=t(\"./Matrix\");Object.defineProperty(r,\"Matrix\",{enumerable:!0,get:function(){return n(s).default}});var a=t(\"./GroupD8\");Object.defineProperty(r,\"GroupD8\",{enumerable:!0,get:function(){return n(a).default}});var u=t(\"./shapes/Circle\");Object.defineProperty(r,\"Circle\",{enumerable:!0,get:function(){return n(u).default}});var h=t(\"./shapes/Ellipse\");Object.defineProperty(r,\"Ellipse\",{enumerable:!0,get:function(){return n(h).default}});var l=t(\"./shapes/Polygon\");Object.defineProperty(r,\"Polygon\",{enumerable:!0,get:function(){return n(l).default}});var c=t(\"./shapes/Rectangle\");Object.defineProperty(r,\"Rectangle\",{enumerable:!0,get:function(){return n(c).default}});var d=t(\"./shapes/RoundedRectangle\");Object.defineProperty(r,\"RoundedRectangle\",{enumerable:!0,get:function(){return n(d).default}})},{\"./GroupD8\":62,\"./Matrix\":63,\"./ObservablePoint\":64,\"./Point\":65,\"./shapes/Circle\":67,\"./shapes/Ellipse\":68,\"./shapes/Polygon\":69,\"./shapes/Rectangle\":70,\"./shapes/RoundedRectangle\":71}],67:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}r.__esModule=!0;var o=t(\"./Rectangle\"),s=n(o),a=t(\"../../const\"),u=function(){function t(){var e=arguments.length<=0||void 0===arguments[0]?0:arguments[0],r=arguments.length<=1||void 0===arguments[1]?0:arguments[1],n=arguments.length<=2||void 0===arguments[2]?0:arguments[2];i(this,t),this.x=e,this.y=r,this.radius=n,this.type=a.SHAPES.CIRC}return t.prototype.clone=function(){return new t(this.x,this.y,this.radius)},t.prototype.contains=function(t,e){if(this.radius<=0)return!1;var r=this.radius*this.radius,n=this.x-t,i=this.y-e;return n*=n,i*=i,n+i<=r},t.prototype.getBounds=function(){return new s.default(this.x-this.radius,this.y-this.radius,2*this.radius,2*this.radius)},t}();r.default=u},{\"../../const\":42,\"./Rectangle\":70}],68:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}r.__esModule=!0;var o=t(\"./Rectangle\"),s=n(o),a=t(\"../../const\"),u=function(){function t(){var e=arguments.length<=0||void 0===arguments[0]?0:arguments[0],r=arguments.length<=1||void 0===arguments[1]?0:arguments[1],n=arguments.length<=2||void 0===arguments[2]?0:arguments[2],o=arguments.length<=3||void 0===arguments[3]?0:arguments[3];i(this,t),this.x=e,this.y=r,this.width=n,this.height=o,this.type=a.SHAPES.ELIP}return t.prototype.clone=function(){return new t(this.x,this.y,this.width,this.height)},t.prototype.contains=function(t,e){if(this.width<=0||this.height<=0)return!1;var r=(t-this.x)/this.width,n=(e-this.y)/this.height;return r*=r,n*=n,r+n<=1},t.prototype.getBounds=function(){return new s.default(this.x-this.width,this.y-this.height,this.width,this.height)},t}();r.default=u},{\"../../const\":42,\"./Rectangle\":70}],69:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}r.__esModule=!0;var o=t(\"../Point\"),s=n(o),a=t(\"../../const\"),u=function(){function t(){for(var e=arguments.length,r=Array(e),n=0;n<e;n++)r[n]=arguments[n];if(i(this,t),Array.isArray(r[0])&&(r=r[0]),r[0]instanceof s.default){for(var o=[],u=0,h=r.length;u<h;u++)o.push(r[u].x,r[u].y);r=o}this.closed=!0,this.points=r,this.type=a.SHAPES.POLY}return t.prototype.clone=function(){return new t(this.points.slice())},t.prototype.close=function(){var t=this.points;t[0]===t[t.length-2]&&t[1]===t[t.length-1]||t.push(t[0],t[1])},t.prototype.contains=function(t,e){for(var r=!1,n=this.points.length/2,i=0,o=n-1;i<n;o=i++){var s=this.points[2*i],a=this.points[2*i+1],u=this.points[2*o],h=this.points[2*o+1],l=a>e!=h>e&&t<(u-s)*((e-a)/(h-a))+s;l&&(r=!r)}return r},t}();r.default=u},{\"../../const\":42,\"../Point\":65}],70:[function(t,e,r){\"use strict\";function n(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}r.__esModule=!0;var i=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,\"value\"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),o=t(\"../../const\"),s=function(){function t(){var e=arguments.length<=0||void 0===arguments[0]?0:arguments[0],r=arguments.length<=1||void 0===arguments[1]?0:arguments[1],i=arguments.length<=2||void 0===arguments[2]?0:arguments[2],s=arguments.length<=3||void 0===arguments[3]?0:arguments[3];n(this,t),this.x=e,this.y=r,this.width=i,this.height=s,this.type=o.SHAPES.RECT}return t.prototype.clone=function(){return new t(this.x,this.y,this.width,this.height)},t.prototype.copy=function(t){return this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height,this},t.prototype.contains=function(t,e){return!(this.width<=0||this.height<=0)&&(t>=this.x&&t<this.x+this.width&&e>=this.y&&e<this.y+this.height)},t.prototype.pad=function(t,e){t=t||0,e=e||(0!==e?t:0),this.x-=t,this.y-=e,this.width+=2*t,this.height+=2*e},t.prototype.fit=function(t){this.x<t.x&&(this.width+=this.x,this.width<0&&(this.width=0),this.x=t.x),this.y<t.y&&(this.height+=this.y,this.height<0&&(this.height=0),this.y=t.y),this.x+this.width>t.x+t.width&&(this.width=t.width-this.x,this.width<0&&(this.width=0)),this.y+this.height>t.y+t.height&&(this.height=t.height-this.y,this.height<0&&(this.height=0))},t.prototype.enlarge=function(e){if(e!==t.EMPTY){var r=Math.min(this.x,e.x),n=Math.max(this.x+this.width,e.x+e.width),i=Math.min(this.y,e.y),o=Math.max(this.y+this.height,e.y+e.height);this.x=r,this.width=n-r,this.y=i,this.height=o-i}},i(t,[{key:\"left\",get:function(){return this.x}},{key:\"right\",get:function(){return this.x+this.width}},{key:\"top\",get:function(){return this.y}},{key:\"bottom\",get:function(){return this.y+this.height}}],[{key:\"EMPTY\",get:function(){return new t(0,0,0,0)}}]),t}();r.default=s},{\"../../const\":42}],71:[function(t,e,r){\"use strict\";function n(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}r.__esModule=!0;var i=t(\"../../const\"),o=function(){function t(){var e=arguments.length<=0||void 0===arguments[0]?0:arguments[0],r=arguments.length<=1||void 0===arguments[1]?0:arguments[1],o=arguments.length<=2||void 0===arguments[2]?0:arguments[2],s=arguments.length<=3||void 0===arguments[3]?0:arguments[3],a=arguments.length<=4||void 0===arguments[4]?20:arguments[4];n(this,t),this.x=e,this.y=r,this.width=o,this.height=s,this.radius=a,this.type=i.SHAPES.RREC}return t.prototype.clone=function(){return new t(this.x,this.y,this.width,this.height,this.radius)},t.prototype.contains=function(t,e){if(this.width<=0||this.height<=0)return!1;if(t>=this.x&&t<=this.x+this.width&&e>=this.y&&e<=this.y+this.height){if(e>=this.y+this.radius&&e<=this.y+this.height-this.radius||t>=this.x+this.radius&&t<=this.x+this.width-this.radius)return!0;var r=t-(this.x+this.radius),n=e-(this.y+this.radius),i=this.radius*this.radius;if(r*r+n*n<=i)return!0;if(r=t-(this.x+this.width-this.radius),r*r+n*n<=i)return!0;if(n=e-(this.y+this.height-this.radius),r*r+n*n<=i)return!0;if(r=t-(this.x+this.radius),r*r+n*n<=i)return!0}return!1},t}();r.default=o},{\"../../const\":42}],72:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}function o(t,e){if(!t)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!e||\"object\"!=typeof e&&\"function\"!=typeof e?t:e}function s(t,e){if(\"function\"!=typeof e&&null!==e)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,\"value\"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),u=t(\"../utils\"),h=t(\"../math\"),l=t(\"../const\"),c=t(\"../settings\"),d=n(c),f=t(\"../display/Container\"),p=n(f),v=t(\"../textures/RenderTexture\"),y=n(v),g=t(\"eventemitter3\"),m=n(g),_=new h.Matrix,b=function(t){function e(r,n,s,a){i(this,e);var h=o(this,t.call(this));if((0,u.sayHello)(r),a)for(var c in d.default.RENDER_OPTIONS)\"undefined\"==typeof a[c]&&(a[c]=d.default.RENDER_OPTIONS[c]);else a=d.default.RENDER_OPTIONS;return h.type=l.RENDERER_TYPE.UNKNOWN,h.width=n||800,h.height=s||600,h.view=a.view||document.createElement(\"canvas\"),h.resolution=a.resolution||d.default.RESOLUTION,h.transparent=a.transparent,h.autoResize=a.autoResize||!1,h.blendModes=null,h.preserveDrawingBuffer=a.preserveDrawingBuffer,h.clearBeforeRender=a.clearBeforeRender,h.roundPixels=a.roundPixels,h._backgroundColor=0,h._backgroundColorRgba=[0,0,0,0],h._backgroundColorString=\"#000000\",h.backgroundColor=a.backgroundColor||h._backgroundColor,h._tempDisplayObjectParent=new p.default,h._lastObjectRendered=h._tempDisplayObjectParent,h}return s(e,t),e.prototype.resize=function(t,e){this.width=t*this.resolution,this.height=e*this.resolution,this.view.width=this.width,this.view.height=this.height,this.autoResize&&(this.view.style.width=this.width/this.resolution+\"px\",this.view.style.height=this.height/this.resolution+\"px\")},e.prototype.generateTexture=function(t,e,r){var n=t.getLocalBounds(),i=y.default.create(0|n.width,0|n.height,e,r);return _.tx=-n.x,_.ty=-n.y,this.render(t,i,!1,_,!0),i},e.prototype.destroy=function(t){t&&this.view.parentNode&&this.view.parentNode.removeChild(this.view),this.type=l.RENDERER_TYPE.UNKNOWN,this.width=0,this.height=0,this.view=null,this.resolution=0,this.transparent=!1,this.autoResize=!1,this.blendModes=null,this.preserveDrawingBuffer=!1,this.clearBeforeRender=!1,this.roundPixels=!1,this._backgroundColor=0,this._backgroundColorRgba=null,this._backgroundColorString=null,this.backgroundColor=0,this._tempDisplayObjectParent=null,this._lastObjectRendered=null},a(e,[{key:\"backgroundColor\",get:function(){return this._backgroundColor},set:function(t){this._backgroundColor=t,this._backgroundColorString=(0,u.hex2string)(t),(0,u.hex2rgb)(t,this._backgroundColorRgba)}}]),e}(m.default);r.default=b},{\"../const\":42,\"../display/Container\":44,\"../math\":66,\"../settings\":97,\"../textures/RenderTexture\":108,\"../utils\":117,eventemitter3:3}],73:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}function o(t,e){if(!t)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!e||\"object\"!=typeof e&&\"function\"!=typeof e?t:e}function s(t,e){if(\"function\"!=typeof e&&null!==e)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=t(\"../SystemRenderer\"),u=n(a),h=t(\"./utils/CanvasMaskManager\"),l=n(h),c=t(\"./utils/CanvasRenderTarget\"),d=n(c),f=t(\"./utils/mapCanvasBlendModesToPixi\"),p=n(f),v=t(\"../../utils\"),y=t(\"../../const\"),g=t(\"../../settings\"),m=n(g),_=function(t){function e(r,n){var s=arguments.length<=2||void 0===arguments[2]?{}:arguments[2];i(this,e);var a=o(this,t.call(this,\"Canvas\",r,n,s));return a.type=y.RENDERER_TYPE.CANVAS,a.rootContext=a.view.getContext(\"2d\",{alpha:a.transparent}),a.refresh=!0,a.maskManager=new l.default(a),a.smoothProperty=\"imageSmoothingEnabled\",a.rootContext.imageSmoothingEnabled||(a.rootContext.webkitImageSmoothingEnabled?a.smoothProperty=\"webkitImageSmoothingEnabled\":a.rootContext.mozImageSmoothingEnabled?a.smoothProperty=\"mozImageSmoothingEnabled\":a.rootContext.oImageSmoothingEnabled?a.smoothProperty=\"oImageSmoothingEnabled\":a.rootContext.msImageSmoothingEnabled&&(a.smoothProperty=\"msImageSmoothingEnabled\")),a.initPlugins(),a.blendModes=(0,p.default)(),a._activeBlendMode=null,a.context=null,a.renderingToScreen=!1,a.resize(r,n),a}return s(e,t),e.prototype.render=function(t,e,r,n,i){if(this.view){this.renderingToScreen=!e,this.emit(\"prerender\"),e?(e=e.baseTexture||e,e._canvasRenderTarget||(e._canvasRenderTarget=new d.default(e.width,e.height,e.resolution),e.source=e._canvasRenderTarget.canvas,e.valid=!0),this.context=e._canvasRenderTarget.context,this.resolution=e._canvasRenderTarget.resolution):this.context=this.rootContext;var o=this.context;if(e||(this._lastObjectRendered=t),!i){var s=t.parent,a=this._tempDisplayObjectParent.transform.worldTransform;n?n.copy(a):a.identity(),t.parent=this._tempDisplayObjectParent,t.updateTransform(),t.parent=s}o.setTransform(1,0,0,1,0,0),o.globalAlpha=1,o.globalCompositeOperation=this.blendModes[y.BLEND_MODES.NORMAL],navigator.isCocoonJS&&this.view.screencanvas&&(o.fillStyle=\"black\",o.clear()),(void 0!==r?r:this.clearBeforeRender)&&this.renderingToScreen&&(this.transparent?o.clearRect(0,0,this.width,this.height):(o.fillStyle=this._backgroundColorString,o.fillRect(0,0,this.width,this.height)));var u=this.context;this.context=o,t.renderCanvas(this),this.context=u,this.emit(\"postrender\")}},e.prototype.setBlendMode=function(t){this._activeBlendMode!==t&&(this._activeBlendMode=t,this.context.globalCompositeOperation=this.blendModes[t])},e.prototype.destroy=function(e){this.destroyPlugins(),t.prototype.destroy.call(this,e),this.context=null,this.refresh=!0,this.maskManager.destroy(),this.maskManager=null,this.smoothProperty=null},e.prototype.resize=function(e,r){t.prototype.resize.call(this,e,r),this.smoothProperty&&(this.rootContext[this.smoothProperty]=m.default.SCALE_MODE===y.SCALE_MODES.LINEAR)},e}(u.default);r.default=_,v.pluginTarget.mixin(_)},{\"../../const\":42,\"../../settings\":97,\"../../utils\":117,\"../SystemRenderer\":72,\"./utils/CanvasMaskManager\":74,\"./utils/CanvasRenderTarget\":75,\"./utils/mapCanvasBlendModesToPixi\":77}],74:[function(t,e,r){\"use strict\";function n(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}r.__esModule=!0;var i=t(\"../../../const\"),o=function(){function t(e){n(this,t),this.renderer=e}return t.prototype.pushMask=function(t){var e=this.renderer;e.context.save();var r=t.alpha,n=t.transform.worldTransform,i=e.resolution;e.context.setTransform(n.a*i,n.b*i,n.c*i,n.d*i,n.tx*i,n.ty*i),t._texture||(this.renderGraphicsShape(t),e.context.clip()),t.worldAlpha=r},t.prototype.renderGraphicsShape=function(t){var e=this.renderer.context,r=t.graphicsData.length;if(0!==r){e.beginPath();for(var n=0;n<r;n++){var o=t.graphicsData[n],s=o.shape;if(o.type===i.SHAPES.POLY){var a=s.points;e.moveTo(a[0],a[1]);for(var u=1;u<a.length/2;u++)e.lineTo(a[2*u],a[2*u+1]);a[0]===a[a.length-2]&&a[1]===a[a.length-1]&&e.closePath()}else if(o.type===i.SHAPES.RECT)e.rect(s.x,s.y,s.width,s.height),e.closePath();else if(o.type===i.SHAPES.CIRC)e.arc(s.x,s.y,s.radius,0,2*Math.PI),e.closePath();else if(o.type===i.SHAPES.ELIP){var h=2*s.width,l=2*s.height,c=s.x-h/2,d=s.y-l/2,f=.5522848,p=h/2*f,v=l/2*f,y=c+h,g=d+l,m=c+h/2,_=d+l/2;e.moveTo(c,_),e.bezierCurveTo(c,_-v,m-p,d,m,d),e.bezierCurveTo(m+p,d,y,_-v,y,_),e.bezierCurveTo(y,_+v,m+p,g,m,g),e.bezierCurveTo(m-p,g,c,_+v,c,_),e.closePath()}else if(o.type===i.SHAPES.RREC){var b=s.x,x=s.y,T=s.width,w=s.height,E=s.radius,O=Math.min(T,w)/2|0;E=E>O?O:E,e.moveTo(b,x+E),e.lineTo(b,x+w-E),e.quadraticCurveTo(b,x+w,b+E,x+w),e.lineTo(b+T-E,x+w),e.quadraticCurveTo(b+T,x+w,b+T,x+w-E),e.lineTo(b+T,x+E),e.quadraticCurveTo(b+T,x,b+T-E,x),e.lineTo(b+E,x),e.quadraticCurveTo(b,x,b,x+E),e.closePath()}}}},t.prototype.popMask=function(t){t.context.restore()},t.prototype.destroy=function(){},t}();r.default=o},{\"../../../const\":42}],75:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}r.__esModule=!0;var o=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,\"value\"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),s=t(\"../../../settings\"),a=n(s),u=a.default.RESOLUTION,h=function(){function t(e,r,n){i(this,t),this.canvas=document.createElement(\"canvas\"),this.context=this.canvas.getContext(\"2d\"),this.resolution=n||u,this.resize(e,r)}return t.prototype.clear=function(){this.context.setTransform(1,0,0,1,0,0),this.context.clearRect(0,0,this.canvas.width,this.canvas.height)},t.prototype.resize=function(t,e){this.canvas.width=t*this.resolution,this.canvas.height=e*this.resolution},t.prototype.destroy=function(){this.context=null,this.canvas=null},o(t,[{key:\"width\",get:function(){return this.canvas.width},set:function(t){this.canvas.width=t}},{key:\"height\",get:function(){return this.canvas.height},set:function(t){this.canvas.height=t}}]),t}();r.default=h},{\"../../../settings\":97}],76:[function(t,e,r){\"use strict\";function n(t){var e=document.createElement(\"canvas\");e.width=6,e.height=1;var r=e.getContext(\"2d\");return r.fillStyle=t,r.fillRect(0,0,6,1),e}function i(){if(\"undefined\"==typeof document)return!1;var t=n(\"#ff00ff\"),e=n(\"#ffff00\"),r=document.createElement(\"canvas\");r.width=6,r.height=1;var i=r.getContext(\"2d\");i.globalCompositeOperation=\"multiply\",i.drawImage(t,0,0),i.drawImage(e,2,0);var o=i.getImageData(2,0,1,1);if(!o)return!1;var s=o.data;return 255===s[0]&&0===s[1]&&0===s[2]}r.__esModule=!0,r.default=i},{}],77:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}function i(){var t=arguments.length<=0||void 0===arguments[0]?[]:arguments[0];return(0,a.default)()?(t[o.BLEND_MODES.NORMAL]=\"source-over\",t[o.BLEND_MODES.ADD]=\"lighter\",t[o.BLEND_MODES.MULTIPLY]=\"multiply\",t[o.BLEND_MODES.SCREEN]=\"screen\",t[o.BLEND_MODES.OVERLAY]=\"overlay\",t[o.BLEND_MODES.DARKEN]=\"darken\",t[o.BLEND_MODES.LIGHTEN]=\"lighten\",t[o.BLEND_MODES.COLOR_DODGE]=\"color-dodge\",t[o.BLEND_MODES.COLOR_BURN]=\"color-burn\",t[o.BLEND_MODES.HARD_LIGHT]=\"hard-light\",t[o.BLEND_MODES.SOFT_LIGHT]=\"soft-light\",t[o.BLEND_MODES.DIFFERENCE]=\"difference\",t[o.BLEND_MODES.EXCLUSION]=\"exclusion\",t[o.BLEND_MODES.HUE]=\"hue\",t[o.BLEND_MODES.SATURATION]=\"saturate\",t[o.BLEND_MODES.COLOR]=\"color\",t[o.BLEND_MODES.LUMINOSITY]=\"luminosity\"):(t[o.BLEND_MODES.NORMAL]=\"source-over\",t[o.BLEND_MODES.ADD]=\"lighter\",t[o.BLEND_MODES.MULTIPLY]=\"source-over\",t[o.BLEND_MODES.SCREEN]=\"source-over\",t[o.BLEND_MODES.OVERLAY]=\"source-over\",t[o.BLEND_MODES.DARKEN]=\"source-over\",t[o.BLEND_MODES.LIGHTEN]=\"source-over\",t[o.BLEND_MODES.COLOR_DODGE]=\"source-over\",t[o.BLEND_MODES.COLOR_BURN]=\"source-over\",t[o.BLEND_MODES.HARD_LIGHT]=\"source-over\",t[o.BLEND_MODES.SOFT_LIGHT]=\"source-over\",t[o.BLEND_MODES.DIFFERENCE]=\"source-over\",t[o.BLEND_MODES.EXCLUSION]=\"source-over\",t[o.BLEND_MODES.HUE]=\"source-over\",t[o.BLEND_MODES.SATURATION]=\"source-over\",t[o.BLEND_MODES.COLOR]=\"source-over\",t[o.BLEND_MODES.LUMINOSITY]=\"source-over\"),t}r.__esModule=!0,r.default=i;var o=t(\"../../../const\"),s=t(\"./canUseNewCanvasBlendModes\"),a=n(s)},{\"../../../const\":42,\"./canUseNewCanvasBlendModes\":76}],78:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}r.__esModule=!0;var o=t(\"../../const\"),s=t(\"../../settings\"),a=n(s),u=function(){function t(e){i(this,t),this.renderer=e,this.count=0,this.checkCount=0,this.maxIdle=a.default.GC_MAX_IDLE,this.checkCountMax=a.default.GC_MAX_CHECK_COUNT,this.mode=a.default.GC_MODE}return t.prototype.update=function(){this.count++,this.mode!==o.GC_MODES.MANUAL&&(this.checkCount++,this.checkCount>this.checkCountMax&&(this.checkCount=0,this.run()))},t.prototype.run=function(){for(var t=this.renderer.textureManager,e=t._managedTextures,r=!1,n=0;n<e.length;n++){var i=e[n];!i._glRenderTargets&&this.count-i.touched>this.maxIdle&&(t.destroyTexture(i,!0),e[n]=null,r=!0)}if(r){for(var o=0,s=0;s<e.length;s++)null!==e[s]&&(e[o++]=e[s]);e.length=o}},t.prototype.unload=function(t){var e=this.renderer.textureManager;t._texture&&e.destroyTexture(t._texture,!0);for(var r=t.children.length-1;r>=0;r--)this.unload(t.children[r])},t}();r.default=u},{\"../../const\":42,\"../../settings\":97}],79:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}r.__esModule=!0;var o=t(\"pixi-gl-core\"),s=t(\"../../const\"),a=t(\"./utils/RenderTarget\"),u=n(a),h=t(\"../../utils\"),l=function(){function t(e){i(this,t),this.renderer=e,this.gl=e.gl,this._managedTextures=[]}return t.prototype.bindTexture=function(){},t.prototype.getTexture=function(){},t.prototype.updateTexture=function(t,e){e=e||0;var r=this.gl,n=!!t._glRenderTargets;if(!t.hasLoaded)return null;r.activeTexture(r.TEXTURE0+e);var i=t._glTextures[this.renderer.CONTEXT_UID];if(i)n?t._glRenderTargets[this.renderer.CONTEXT_UID].resize(t.width,t.height):i.upload(t.source);else{if(n){var a=new u.default(this.gl,t.width,t.height,t.scaleMode,t.resolution);a.resize(t.width,t.height),t._glRenderTargets[this.renderer.CONTEXT_UID]=a,i=a.texture}else i=new o.GLTexture(this.gl,null,null,null,null),i.bind(e),i.premultiplyAlpha=!0,i.upload(t.source);t._glTextures[this.renderer.CONTEXT_UID]=i,t.on(\"update\",this.updateTexture,this),t.on(\"dispose\",this.destroyTexture,this),this._managedTextures.push(t),t.isPowerOfTwo?(t.mipmap&&i.enableMipmap(),t.wrapMode===s.WRAP_MODES.CLAMP?i.enableWrapClamp():t.wrapMode===s.WRAP_MODES.REPEAT?i.enableWrapRepeat():i.enableWrapMirrorRepeat()):i.enableWrapClamp(),t.scaleMode===s.SCALE_MODES.NEAREST?i.enableNearestScaling():i.enableLinearScaling()}return this.renderer.boundTextures[e]=t,i},t.prototype.destroyTexture=function(t,e){if(t=t.baseTexture||t,t.hasLoaded&&t._glTextures[this.renderer.CONTEXT_UID]&&(this.renderer.unbindTexture(t),t._glTextures[this.renderer.CONTEXT_UID].destroy(),t.off(\"update\",this.updateTexture,this),t.off(\"dispose\",this.destroyTexture,this),delete t._glTextures[this.renderer.CONTEXT_UID],!e)){var r=this._managedTextures.indexOf(t);r!==-1&&(0,h.removeItems)(this._managedTextures,r,1)}},t.prototype.removeAll=function(){for(var t=0;t<this._managedTextures.length;++t){var e=this._managedTextures[t];e._glTextures[this.renderer.CONTEXT_UID]&&delete e._glTextures[this.renderer.CONTEXT_UID]}},t.prototype.destroy=function(){for(var t=0;t<this._managedTextures.length;++t){var e=this._managedTextures[t];this.destroyTexture(e,!0),e.off(\"update\",this.updateTexture,this),e.off(\"dispose\",this.destroyTexture,this)}this._managedTextures=null},t}();r.default=l},{\"../../const\":42,\"../../utils\":117,\"./utils/RenderTarget\":92,\"pixi-gl-core\":12}],80:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}function o(t,e){if(!t)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!e||\"object\"!=typeof e&&\"function\"!=typeof e?t:e}function s(t,e){if(\"function\"!=typeof e&&null!==e)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=t(\"../SystemRenderer\"),u=n(a),h=t(\"./managers/MaskManager\"),l=n(h),c=t(\"./managers/StencilManager\"),d=n(c),f=t(\"./managers/FilterManager\"),p=n(f),v=t(\"./utils/RenderTarget\"),y=n(v),g=t(\"./utils/ObjectRenderer\"),m=n(g),_=t(\"./TextureManager\"),b=n(_),x=t(\"../../textures/BaseTexture\"),T=n(x),w=t(\"./TextureGarbageCollector\"),E=n(w),O=t(\"./WebGLState\"),S=n(O),M=t(\"./utils/mapWebGLDrawModesToPixi\"),P=n(M),C=t(\"./utils/validateContext\"),R=n(C),A=t(\"../../utils\"),D=t(\"pixi-gl-core\"),I=n(D),L=t(\"../../const\"),j=0,B=function(t){function e(r,n){var s=arguments.length<=2||void 0===arguments[2]?{}:arguments[2];i(this,e);var a=o(this,t.call(this,\"WebGL\",r,n,s));return a.type=L.RENDERER_TYPE.WEBGL,a.handleContextLost=a.handleContextLost.bind(a),a.handleContextRestored=a.handleContextRestored.bind(a),a.view.addEventListener(\"webglcontextlost\",a.handleContextLost,!1),a.view.addEventListener(\"webglcontextrestored\",a.handleContextRestored,!1),a._contextOptions={alpha:a.transparent,antialias:s.antialias,premultipliedAlpha:a.transparent&&\"notMultiplied\"!==a.transparent,stencil:!0,preserveDrawingBuffer:s.preserveDrawingBuffer},a._backgroundColorRgba[3]=a.transparent?0:1,a.maskManager=new l.default(a),a.stencilManager=new d.default(a),a.emptyRenderer=new m.default(a),a.currentRenderer=a.emptyRenderer,a.initPlugins(),s.context&&(0,R.default)(s.context),a.gl=s.context||I.default.createContext(a.view,a._contextOptions),a.CONTEXT_UID=j++,a.state=new S.default(a.gl),a.renderingToScreen=!0,a.boundTextures=null,a._initContext(),a.filterManager=new p.default(a),a.drawModes=(0,P.default)(a.gl),a._activeShader=null,a._activeVao=null,a._activeRenderTarget=null,a._nextTextureLocation=0,a.setBlendMode(0),a}return s(e,t),e.prototype._initContext=function(){var t=this.gl;t.isContextLost()&&t.getExtension(\"WEBGL_lose_context\")&&t.getExtension(\"WEBGL_lose_context\").restoreContext();var e=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS);this.boundTextures=new Array(e),this.emptyTextures=new Array(e),this.textureManager=new b.default(this),this.textureGC=new E.default(this),this.state.resetToDefault(),this.rootRenderTarget=new y.default(t,this.width,this.height,null,this.resolution,(!0)),this.rootRenderTarget.clearColor=this._backgroundColorRgba,this.bindRenderTarget(this.rootRenderTarget);var r=new I.default.GLTexture.fromData(t,null,1,1),n={_glTextures:{}};n._glTextures[this.CONTEXT_UID]={};for(var i=0;i<e;i++){var o=new T.default;o._glTextures[this.CONTEXT_UID]=r,this.boundTextures[i]=n,this.emptyTextures[i]=o,this.bindTexture(null,i)}this.emit(\"context\",t),this.resize(this.width,this.height)},e.prototype.render=function(t,e,r,n,i){if(this.renderingToScreen=!e,this.emit(\"prerender\"),this.gl&&!this.gl.isContextLost()){if(this._nextTextureLocation=0,e||(this._lastObjectRendered=t),!i){var o=t.parent;t.parent=this._tempDisplayObjectParent,t.updateTransform(),t.parent=o}this.bindRenderTexture(e,n),this.currentRenderer.start(),(void 0!==r?r:this.clearBeforeRender)&&this._activeRenderTarget.clear(),t.renderWebGL(this),this.currentRenderer.flush(),this.textureGC.update(),this.emit(\"postrender\")}},e.prototype.setObjectRenderer=function(t){this.currentRenderer!==t&&(this.currentRenderer.stop(),this.currentRenderer=t,this.currentRenderer.start())},e.prototype.flush=function(){this.setObjectRenderer(this.emptyRenderer)},e.prototype.resize=function(t,e){u.default.prototype.resize.call(this,t,e),this.rootRenderTarget.resize(t,e),this._activeRenderTarget===this.rootRenderTarget&&(this.rootRenderTarget.activate(),this._activeShader&&(this._activeShader.uniforms.projectionMatrix=this.rootRenderTarget.projectionMatrix.toArray(!0)))},e.prototype.setBlendMode=function(t){this.state.setBlendMode(t)},e.prototype.clear=function(t){this._activeRenderTarget.clear(t)},e.prototype.setTransform=function(t){this._activeRenderTarget.transform=t},e.prototype.bindRenderTexture=function(t,e){var r=void 0;if(t){var n=t.baseTexture;n._glRenderTargets[this.CONTEXT_UID]||this.textureManager.updateTexture(n,0),this.unbindTexture(n),r=n._glRenderTargets[this.CONTEXT_UID],r.setFrame(t.frame)}else r=this.rootRenderTarget;return r.transform=e,this.bindRenderTarget(r),this},e.prototype.bindRenderTarget=function(t){return t!==this._activeRenderTarget&&(this._activeRenderTarget=t,t.activate(),this._activeShader&&(this._activeShader.uniforms.projectionMatrix=t.projectionMatrix.toArray(!0)),this.stencilManager.setMaskStack(t.stencilMaskStack)),this},e.prototype.bindShader=function(t){return this._activeShader!==t&&(this._activeShader=t,t.bind(),t.uniforms.projectionMatrix=this._activeRenderTarget.projectionMatrix.toArray(!0)),this},e.prototype.bindTexture=function(t,e,r){if(t=t||this.emptyTextures[e],t=t.baseTexture||t,t.touched=this.textureGC.count,r)e=e||0;else{for(var n=0;n<this.boundTextures.length;n++)if(this.boundTextures[n]===t)return n;void 0===e&&(this._nextTextureLocation++,this._nextTextureLocation%=this.boundTextures.length,e=this.boundTextures.length-this._nextTextureLocation-1)}var i=this.gl,o=t._glTextures[this.CONTEXT_UID];\nreturn o?(this.boundTextures[e]=t,i.activeTexture(i.TEXTURE0+e),i.bindTexture(i.TEXTURE_2D,o.texture)):this.textureManager.updateTexture(t,e),e},e.prototype.unbindTexture=function(t){var e=this.gl;t=t.baseTexture||t;for(var r=0;r<this.boundTextures.length;r++)this.boundTextures[r]===t&&(this.boundTextures[r]=this.emptyTextures[r],e.activeTexture(e.TEXTURE0+r),e.bindTexture(e.TEXTURE_2D,this.emptyTextures[r]._glTextures[this.CONTEXT_UID].texture));return this},e.prototype.createVao=function(){return new I.default.VertexArrayObject(this.gl,this.state.attribState)},e.prototype.bindVao=function(t){return this._activeVao===t?this:(t?t.bind():this._activeVao&&this._activeVao.unbind(),this._activeVao=t,this)},e.prototype.reset=function(){return this.setObjectRenderer(this.emptyRenderer),this._activeShader=null,this._activeRenderTarget=this.rootRenderTarget,this.rootRenderTarget.activate(),this.state.resetToDefault(),this},e.prototype.handleContextLost=function(t){t.preventDefault()},e.prototype.handleContextRestored=function(){this._initContext(),this.textureManager.removeAll()},e.prototype.destroy=function(e){this.destroyPlugins(),this.view.removeEventListener(\"webglcontextlost\",this.handleContextLost),this.view.removeEventListener(\"webglcontextrestored\",this.handleContextRestored),this.textureManager.destroy(),t.prototype.destroy.call(this,e),this.uid=0,this.maskManager.destroy(),this.stencilManager.destroy(),this.filterManager.destroy(),this.maskManager=null,this.filterManager=null,this.textureManager=null,this.currentRenderer=null,this.handleContextLost=null,this.handleContextRestored=null,this._contextOptions=null,this.gl.useProgram(null),this.gl.getExtension(\"WEBGL_lose_context\")&&this.gl.getExtension(\"WEBGL_lose_context\").loseContext(),this.gl=null},e}(u.default);r.default=B,A.pluginTarget.mixin(B)},{\"../../const\":42,\"../../textures/BaseTexture\":107,\"../../utils\":117,\"../SystemRenderer\":72,\"./TextureGarbageCollector\":78,\"./TextureManager\":79,\"./WebGLState\":81,\"./managers/FilterManager\":86,\"./managers/MaskManager\":87,\"./managers/StencilManager\":88,\"./utils/ObjectRenderer\":90,\"./utils/RenderTarget\":92,\"./utils/mapWebGLDrawModesToPixi\":95,\"./utils/validateContext\":96,\"pixi-gl-core\":12}],81:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}r.__esModule=!0;var o=t(\"./utils/mapWebGLBlendModesToPixi\"),s=n(o),a=0,u=1,h=2,l=3,c=4,d=function(){function t(e){i(this,t),this.activeState=new Uint8Array(16),this.defaultState=new Uint8Array(16),this.defaultState[0]=1,this.stackIndex=0,this.stack=[],this.gl=e,this.maxAttribs=e.getParameter(e.MAX_VERTEX_ATTRIBS),this.attribState={tempAttribState:new Array(this.maxAttribs),attribState:new Array(this.maxAttribs)},this.blendModes=(0,s.default)(e),this.nativeVaoExtension=e.getExtension(\"OES_vertex_array_object\")||e.getExtension(\"MOZ_OES_vertex_array_object\")||e.getExtension(\"WEBKIT_OES_vertex_array_object\")}return t.prototype.push=function(){var t=this.stack[++this.stackIndex];t||(t=this.stack[this.stackIndex]=new Uint8Array(16));for(var e=0;e<this.activeState.length;e++)this.activeState[e]=t[e]},t.prototype.pop=function(){var t=this.stack[--this.stackIndex];this.setState(t)},t.prototype.setState=function(t){this.setBlend(t[a]),this.setDepthTest(t[u]),this.setFrontFace(t[h]),this.setCullFace(t[l]),this.setBlendMode(t[c])},t.prototype.setBlend=function(t){t=t?1:0,this.activeState[a]!==t&&(this.activeState[a]=t,this.gl[t?\"enable\":\"disable\"](this.gl.BLEND))},t.prototype.setBlendMode=function(t){t!==this.activeState[c]&&(this.activeState[c]=t,this.gl.blendFunc(this.blendModes[t][0],this.blendModes[t][1]))},t.prototype.setDepthTest=function(t){t=t?1:0,this.activeState[u]!==t&&(this.activeState[u]=t,this.gl[t?\"enable\":\"disable\"](this.gl.DEPTH_TEST))},t.prototype.setCullFace=function(t){t=t?1:0,this.activeState[l]!==t&&(this.activeState[l]=t,this.gl[t?\"enable\":\"disable\"](this.gl.CULL_FACE))},t.prototype.setFrontFace=function(t){t=t?1:0,this.activeState[h]!==t&&(this.activeState[h]=t,this.gl.frontFace(this.gl[t?\"CW\":\"CCW\"]))},t.prototype.resetAttributes=function(){for(var t=0;t<this.attribState.tempAttribState.length;t++)this.attribState.tempAttribState[t]=0;for(var e=0;e<this.attribState.attribState.length;e++)this.attribState.attribState[e]=0;for(var r=1;r<this.maxAttribs;r++)this.gl.disableVertexAttribArray(r)},t.prototype.resetToDefault=function(){this.nativeVaoExtension&&this.nativeVaoExtension.bindVertexArrayOES(null),this.resetAttributes();for(var t=0;t<this.activeState.length;++t)this.activeState[t]=32;this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,!1),this.setState(this.defaultState)},t}();r.default=d},{\"./utils/mapWebGLBlendModesToPixi\":94}],82:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}r.__esModule=!0;var o=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,\"value\"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),s=t(\"./extractUniformsFromSrc\"),a=n(s),u=t(\"../../../utils\"),h=t(\"../../../const\"),l={},c=function(){function t(e,r,n){i(this,t),this.vertexSrc=e||t.defaultVertexSrc,this.fragmentSrc=r||t.defaultFragmentSrc,this.blendMode=h.BLEND_MODES.NORMAL,this.uniformData=n||(0,a.default)(this.vertexSrc,this.fragmentSrc,\"projectionMatrix|uSampler\"),this.uniforms={};for(var o in this.uniformData)this.uniforms[o]=this.uniformData[o].value;this.glShaders={},l[this.vertexSrc+this.fragmentSrc]||(l[this.vertexSrc+this.fragmentSrc]=(0,u.uid)()),this.glShaderKey=l[this.vertexSrc+this.fragmentSrc],this.padding=4,this.resolution=1,this.enabled=!0}return t.prototype.apply=function(t,e,r,n){t.applyFilter(this,e,r,n)},o(t,null,[{key:\"defaultVertexSrc\",get:function(){return[\"attribute vec2 aVertexPosition;\",\"attribute vec2 aTextureCoord;\",\"uniform mat3 projectionMatrix;\",\"uniform mat3 filterMatrix;\",\"varying vec2 vTextureCoord;\",\"varying vec2 vFilterCoord;\",\"void main(void){\",\"   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\",\"   vFilterCoord = ( filterMatrix * vec3( aTextureCoord, 1.0)  ).xy;\",\"   vTextureCoord = aTextureCoord ;\",\"}\"].join(\"\\n\")}},{key:\"defaultFragmentSrc\",get:function(){return[\"varying vec2 vTextureCoord;\",\"varying vec2 vFilterCoord;\",\"uniform sampler2D uSampler;\",\"uniform sampler2D filterSampler;\",\"void main(void){\",\"   vec4 masky = texture2D(filterSampler, vFilterCoord);\",\"   vec4 sample = texture2D(uSampler, vTextureCoord);\",\"   vec4 color;\",\"   if(mod(vFilterCoord.x, 1.0) > 0.5)\",\"   {\",\"     color = vec4(1.0, 0.0, 0.0, 1.0);\",\"   }\",\"   else\",\"   {\",\"     color = vec4(0.0, 1.0, 0.0, 1.0);\",\"   }\",\"   gl_FragColor = mix(sample, masky, 0.5);\",\"   gl_FragColor *= sample.a;\",\"}\"].join(\"\\n\")}}]),t}();r.default=c},{\"../../../const\":42,\"../../../utils\":117,\"./extractUniformsFromSrc\":83}],83:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e,r){var n=o(t,r),i=o(e,r);return Object.assign(n,i)}function o(t){for(var e=new RegExp(\"^(projectionMatrix|uSampler|filterArea)$\"),r={},n=void 0,i=t.replace(/\\s+/g,\" \").split(/\\s*;\\s*/),o=0;o<i.length;o++){var s=i[o].trim();if(s.indexOf(\"uniform\")>-1){var a=s.split(\" \"),h=a[1],l=a[2],c=1;l.indexOf(\"[\")>-1&&(n=l.split(/\\[|]/),l=n[0],c*=Number(n[1])),l.match(e)||(r[l]={value:u(h,c),name:l,type:h})}}return r}r.__esModule=!0,r.default=i;var s=t(\"pixi-gl-core\"),a=n(s),u=a.default.shader.defaultValue},{\"pixi-gl-core\":12}],84:[function(t,e,r){\"use strict\";function n(t,e,r){var n=t.identity();return n.translate(e.x/r.width,e.y/r.height),n.scale(r.width,r.height),n}function i(t,e,r){var n=t.identity();n.translate(e.x/r.width,e.y/r.height);var i=r.width/e.width,o=r.height/e.height;return n.scale(i,o),n}function o(t,e,r,n){var i=n.worldTransform.copy(s.Matrix.TEMP_MATRIX),o=n._texture.baseTexture,a=t.identity(),u=r.height/r.width;a.translate(e.x/r.width,e.y/r.height),a.scale(1,u);var h=r.width/o.width,l=r.height/o.height;return i.tx/=o.width*h,i.ty/=o.width*h,i.invert(),a.prepend(i),a.scale(1,1/u),a.scale(h,l),a.translate(n.anchor.x,n.anchor.y),a}r.__esModule=!0,r.calculateScreenSpaceMatrix=n,r.calculateNormalizedScreenSpaceMatrix=i,r.calculateSpriteMatrix=o;var s=t(\"../../../math\")},{\"../../../math\":66}],85:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}function o(t,e){if(!t)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!e||\"object\"!=typeof e&&\"function\"!=typeof e?t:e}function s(t,e){if(\"function\"!=typeof e&&null!==e)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=t(\"../Filter\"),u=n(a),h=t(\"../../../../math\"),l=(t(\"path\"),function(t){function e(r){i(this,e);var n=new h.Matrix,s=o(this,t.call(this,\"attribute vec2 aVertexPosition;\\nattribute vec2 aTextureCoord;\\n\\nuniform mat3 projectionMatrix;\\nuniform mat3 otherMatrix;\\n\\nvarying vec2 vMaskCoord;\\nvarying vec2 vTextureCoord;\\n\\nvoid main(void)\\n{\\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\\n\\n    vTextureCoord = aTextureCoord;\\n    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;\\n}\\n\",\"varying vec2 vMaskCoord;\\nvarying vec2 vTextureCoord;\\n\\nuniform sampler2D uSampler;\\nuniform float alpha;\\nuniform sampler2D mask;\\n\\nvoid main(void)\\n{\\n    // check clip! this will stop the mask bleeding out from the edges\\n    vec2 text = abs( vMaskCoord - 0.5 );\\n    text = step(0.5, text);\\n\\n    float clip = 1.0 - max(text.y, text.x);\\n    vec4 original = texture2D(uSampler, vTextureCoord);\\n    vec4 masky = texture2D(mask, vMaskCoord);\\n\\n    original *= (masky.r * masky.a * alpha * clip);\\n\\n    gl_FragColor = original;\\n}\\n\"));return r.renderable=!1,s.maskSprite=r,s.maskMatrix=n,s}return s(e,t),e.prototype.apply=function(t,e,r){var n=this.maskSprite;this.uniforms.mask=n._texture,this.uniforms.otherMatrix=t.calculateSpriteMatrix(this.maskMatrix,n),this.uniforms.alpha=n.worldAlpha,t.applyFilter(this,e,r)},e}(u.default));r.default=l},{\"../../../../math\":66,\"../Filter\":82,path:22}],86:[function(t,e,r){\"use strict\";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function i(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!t)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!e||\"object\"!=typeof e&&\"function\"!=typeof e?t:e}function s(t,e){if(\"function\"!=typeof e&&null!==e)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function a(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}r.__esModule=!0;var u=t(\"./WebGLManager\"),h=i(u),l=t(\"../utils/RenderTarget\"),c=i(l),d=t(\"../utils/Quad\"),f=i(d),p=t(\"../../../math\"),v=t(\"../../../Shader\"),y=i(v),g=t(\"../filters/filterTransforms\"),m=n(g),_=t(\"bit-twiddle\"),b=i(_),x=function t(){a(this,t),this.renderTarget=null,this.sourceFrame=new p.Rectangle,this.destinationFrame=new p.Rectangle,this.filters=[],this.target=null,this.resolution=1},T=function(t){function e(r){a(this,e);var n=o(this,t.call(this,r));return n.gl=n.renderer.gl,n.quad=new f.default(n.gl,r.state.attribState),n.shaderCache={},n.pool={},n.filterData=null,n}return s(e,t),e.prototype.pushFilter=function(t,e){var r=this.renderer,n=this.filterData;if(!n){n=this.renderer._activeRenderTarget.filterStack;var i=new x;i.sourceFrame=i.destinationFrame=this.renderer._activeRenderTarget.size,i.renderTarget=r._activeRenderTarget,this.renderer._activeRenderTarget.filterData=n={index:0,stack:[i]},this.filterData=n}var o=n.stack[++n.index];o||(o=n.stack[n.index]=new x);var s=e[0].resolution,a=0|e[0].padding,u=t.filterArea||t.getBounds(!0),h=o.sourceFrame,l=o.destinationFrame;h.x=(u.x*s|0)/s,h.y=(u.y*s|0)/s,h.width=(u.width*s|0)/s,h.height=(u.height*s|0)/s,n.stack[0].renderTarget.transform||h.fit(n.stack[0].destinationFrame),h.pad(a),l.width=h.width,l.height=h.height;var c=this.getPotRenderTarget(r.gl,h.width,h.height,s);o.target=t,o.filters=e,o.resolution=s,o.renderTarget=c,c.setFrame(l,h),r.bindRenderTarget(c),r.clear()},e.prototype.popFilter=function(){var t=this.filterData,e=t.stack[t.index-1],r=t.stack[t.index];this.quad.map(r.renderTarget.size,r.sourceFrame).upload();var n=r.filters;if(1===n.length)n[0].apply(this,r.renderTarget,e.renderTarget,!1),this.freePotRenderTarget(r.renderTarget);else{var i=r.renderTarget,o=this.getPotRenderTarget(this.renderer.gl,r.sourceFrame.width,r.sourceFrame.height,r.resolution);o.setFrame(r.destinationFrame,r.sourceFrame);var s=0;for(s=0;s<n.length-1;++s){n[s].apply(this,i,o,!0);var a=i;i=o,o=a}n[s].apply(this,i,e.renderTarget,!1),this.freePotRenderTarget(i),this.freePotRenderTarget(o)}t.index--,0===t.index&&(this.filterData=null)},e.prototype.applyFilter=function(t,e,r,n){var i=this.renderer,o=i.gl,s=t.glShaders[i.CONTEXT_UID];s||(t.glShaderKey?(s=this.shaderCache[t.glShaderKey],s||(s=new y.default(this.gl,t.vertexSrc,t.fragmentSrc),t.glShaders[i.CONTEXT_UID]=this.shaderCache[t.glShaderKey]=s)):s=t.glShaders[i.CONTEXT_UID]=new y.default(this.gl,t.vertexSrc,t.fragmentSrc),i.bindVao(null),this.quad.initVao(s)),i.bindVao(this.quad.vao),i.bindRenderTarget(r),n&&(o.disable(o.SCISSOR_TEST),i.clear(),o.enable(o.SCISSOR_TEST)),r===i.maskManager.scissorRenderTarget&&i.maskManager.pushScissorMask(null,i.maskManager.scissorData),i.bindShader(s),this.syncUniforms(s,t),i.state.setBlendMode(t.blendMode);var a=this.renderer.boundTextures[0];o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D,e.texture.texture),this.quad.vao.draw(this.renderer.gl.TRIANGLES,6,0),o.bindTexture(o.TEXTURE_2D,a._glTextures[this.renderer.CONTEXT_UID].texture)},e.prototype.syncUniforms=function(t,e){var r=e.uniformData,n=e.uniforms,i=1,o=void 0;if(t.uniforms.data.filterArea){o=this.filterData.stack[this.filterData.index];var s=t.uniforms.filterArea;s[0]=o.renderTarget.size.width,s[1]=o.renderTarget.size.height,s[2]=o.sourceFrame.x,s[3]=o.sourceFrame.y,t.uniforms.filterArea=s}if(t.uniforms.data.filterClamp){o=this.filterData.stack[this.filterData.index];var a=t.uniforms.filterClamp;a[0]=0,a[1]=0,a[2]=(o.sourceFrame.width-1)/o.renderTarget.size.width,a[3]=(o.sourceFrame.height-1)/o.renderTarget.size.height,t.uniforms.filterClamp=a}for(var u in r)if(\"sampler2D\"===r[u].type&&0!==n[u]){if(n[u].baseTexture)t.uniforms[u]=this.renderer.bindTexture(n[u].baseTexture,i);else{t.uniforms[u]=i;var h=this.renderer.gl;h.activeTexture(h.TEXTURE0+i),n[u].texture.bind()}i++}else if(\"mat3\"===r[u].type)void 0!==n[u].a?t.uniforms[u]=n[u].toArray(!0):t.uniforms[u]=n[u];else if(\"vec2\"===r[u].type)if(void 0!==n[u].x){var l=t.uniforms[u]||new Float32Array(2);l[0]=n[u].x,l[1]=n[u].y,t.uniforms[u]=l}else t.uniforms[u]=n[u];else\"float\"===r[u].type?t.uniforms.data[u].value!==r[u]&&(t.uniforms[u]=n[u]):t.uniforms[u]=n[u]},e.prototype.getRenderTarget=function(t,e){var r=this.filterData.stack[this.filterData.index],n=this.getPotRenderTarget(this.renderer.gl,r.sourceFrame.width,r.sourceFrame.height,e||r.resolution);return n.setFrame(r.destinationFrame,r.sourceFrame),n},e.prototype.returnRenderTarget=function(t){this.freePotRenderTarget(t)},e.prototype.calculateScreenSpaceMatrix=function(t){var e=this.filterData.stack[this.filterData.index];return m.calculateScreenSpaceMatrix(t,e.sourceFrame,e.renderTarget.size)},e.prototype.calculateNormalizedScreenSpaceMatrix=function(t){var e=this.filterData.stack[this.filterData.index];return m.calculateNormalizedScreenSpaceMatrix(t,e.sourceFrame,e.renderTarget.size,e.destinationFrame)},e.prototype.calculateSpriteMatrix=function(t,e){var r=this.filterData.stack[this.filterData.index];return m.calculateSpriteMatrix(t,r.sourceFrame,r.renderTarget.size,e)},e.prototype.destroy=function(){this.shaderCache=[],this.emptyPool()},e.prototype.getPotRenderTarget=function(t,e,r,n){e=b.default.nextPow2(e*n),r=b.default.nextPow2(r*n);var i=(65535&e)<<16|65535&r;this.pool[i]||(this.pool[i]=[]);var o=this.pool[i].pop();if(!o){var s=this.renderer.boundTextures[0];t.activeTexture(t.TEXTURE0),o=new c.default(t,e,r,null,1),t.bindTexture(t.TEXTURE_2D,s._glTextures[this.renderer.CONTEXT_UID].texture)}return o.resolution=n,o.defaultFrame.width=o.size.width=e/n,o.defaultFrame.height=o.size.height=r/n,o},e.prototype.emptyPool=function(){for(var t in this.pool){var e=this.pool[t];if(e)for(var r=0;r<e.length;r++)e[r].destroy(!0)}this.pool={}},e.prototype.freePotRenderTarget=function(t){var e=t.size.width*t.resolution,r=t.size.height*t.resolution,n=(65535&e)<<16|65535&r;this.pool[n].push(t)},e}(h.default);r.default=T},{\"../../../Shader\":41,\"../../../math\":66,\"../filters/filterTransforms\":84,\"../utils/Quad\":91,\"../utils/RenderTarget\":92,\"./WebGLManager\":89,\"bit-twiddle\":1}],87:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}function o(t,e){if(!t)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!e||\"object\"!=typeof e&&\"function\"!=typeof e?t:e}function s(t,e){if(\"function\"!=typeof e&&null!==e)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=t(\"./WebGLManager\"),u=n(a),h=t(\"../filters/spriteMask/SpriteMaskFilter\"),l=n(h),c=function(t){function e(r){i(this,e);var n=o(this,t.call(this,r));return n.scissor=!1,n.scissorData=null,n.scissorRenderTarget=null,n.enableScissor=!0,n.alphaMaskPool=[],n.alphaMaskIndex=0,n}return s(e,t),e.prototype.pushMask=function(t,e){if(e.texture)this.pushSpriteMask(t,e);else if(this.enableScissor&&!this.scissor&&!this.renderer.stencilManager.stencilMaskStack.length&&e.isFastRect()){var r=e.worldTransform,n=Math.atan2(r.b,r.a);n=Math.round(n*(180/Math.PI)),n%90?this.pushStencilMask(e):this.pushScissorMask(t,e)}else this.pushStencilMask(e)},e.prototype.popMask=function(t,e){e.texture?this.popSpriteMask(t,e):this.enableScissor&&!this.renderer.stencilManager.stencilMaskStack.length?this.popScissorMask(t,e):this.popStencilMask(t,e)},e.prototype.pushSpriteMask=function(t,e){var r=this.alphaMaskPool[this.alphaMaskIndex];r||(r=this.alphaMaskPool[this.alphaMaskIndex]=[new l.default(e)]),r[0].resolution=this.renderer.resolution,r[0].maskSprite=e,t.filterArea=e.getBounds(!0),this.renderer.filterManager.pushFilter(t,r),this.alphaMaskIndex++},e.prototype.popSpriteMask=function(){this.renderer.filterManager.popFilter(),this.alphaMaskIndex--},e.prototype.pushStencilMask=function(t){this.renderer.currentRenderer.stop(),this.renderer.stencilManager.pushStencil(t)},e.prototype.popStencilMask=function(){this.renderer.currentRenderer.stop(),this.renderer.stencilManager.popStencil()},e.prototype.pushScissorMask=function(t,e){e.renderable=!0;var r=this.renderer._activeRenderTarget,n=e.getBounds();n.fit(r.size),e.renderable=!1,this.renderer.gl.enable(this.renderer.gl.SCISSOR_TEST);var i=this.renderer.resolution;this.renderer.gl.scissor(n.x*i,(r.root?r.size.height-n.y-n.height:n.y)*i,n.width*i,n.height*i),this.scissorRenderTarget=r,this.scissorData=e,this.scissor=!0},e.prototype.popScissorMask=function(){this.scissorRenderTarget=null,this.scissorData=null,this.scissor=!1;var t=this.renderer.gl;t.disable(t.SCISSOR_TEST)},e}(u.default);r.default=c},{\"../filters/spriteMask/SpriteMaskFilter\":85,\"./WebGLManager\":89}],88:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}function o(t,e){if(!t)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!e||\"object\"!=typeof e&&\"function\"!=typeof e?t:e}function s(t,e){if(\"function\"!=typeof e&&null!==e)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=t(\"./WebGLManager\"),u=n(a),h=function(t){function e(r){i(this,e);var n=o(this,t.call(this,r));return n.stencilMaskStack=null,n}return s(e,t),e.prototype.setMaskStack=function(t){this.stencilMaskStack=t;var e=this.renderer.gl;0===t.length?e.disable(e.STENCIL_TEST):e.enable(e.STENCIL_TEST)},e.prototype.pushStencil=function(t){this.renderer.setObjectRenderer(this.renderer.plugins.graphics),this.renderer._activeRenderTarget.attachStencilBuffer();var e=this.renderer.gl,r=this.stencilMaskStack;0===r.length&&(e.enable(e.STENCIL_TEST),e.clear(e.STENCIL_BUFFER_BIT),e.stencilFunc(e.ALWAYS,1,1)),r.push(t),e.colorMask(!1,!1,!1,!1),e.stencilOp(e.KEEP,e.KEEP,e.INCR),this.renderer.plugins.graphics.render(t),e.colorMask(!0,!0,!0,!0),e.stencilFunc(e.NOTEQUAL,0,r.length),e.stencilOp(e.KEEP,e.KEEP,e.KEEP)},e.prototype.popStencil=function(){this.renderer.setObjectRenderer(this.renderer.plugins.graphics);var t=this.renderer.gl,e=this.stencilMaskStack,r=e.pop();0===e.length?t.disable(t.STENCIL_TEST):(t.colorMask(!1,!1,!1,!1),t.stencilOp(t.KEEP,t.KEEP,t.DECR),this.renderer.plugins.graphics.render(r),t.colorMask(!0,!0,!0,!0),t.stencilFunc(t.NOTEQUAL,0,e.length),t.stencilOp(t.KEEP,t.KEEP,t.KEEP))},e.prototype.destroy=function(){u.default.prototype.destroy.call(this),this.stencilMaskStack.stencilStack=null},e}(u.default);r.default=h},{\"./WebGLManager\":89}],89:[function(t,e,r){\"use strict\";function n(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}r.__esModule=!0;var i=function(){function t(e){n(this,t),this.renderer=e,this.renderer.on(\"context\",this.onContextChange,this)}return t.prototype.onContextChange=function(){},t.prototype.destroy=function(){this.renderer.off(\"context\",this.onContextChange,this),this.renderer=null},t}();r.default=i},{}],90:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}function o(t,e){if(!t)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!e||\"object\"!=typeof e&&\"function\"!=typeof e?t:e}function s(t,e){if(\"function\"!=typeof e&&null!==e)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=t(\"../managers/WebGLManager\"),u=n(a),h=function(t){function e(){return i(this,e),o(this,t.apply(this,arguments))}return s(e,t),e.prototype.start=function(){},e.prototype.stop=function(){this.flush()},e.prototype.flush=function(){},e.prototype.render=function(t){},e}(u.default);r.default=h},{\"../managers/WebGLManager\":89}],91:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}r.__esModule=!0;var o=t(\"pixi-gl-core\"),s=n(o),a=t(\"../../../utils/createIndicesForQuads\"),u=n(a),h=function(){function t(e,r){i(this,t),this.gl=e,this.vertices=new Float32Array([-1,-1,1,-1,1,1,-1,1]),this.uvs=new Float32Array([0,0,1,0,1,1,0,1]),this.interleaved=new Float32Array(16);for(var n=0;n<4;n++)this.interleaved[4*n]=this.vertices[2*n],this.interleaved[4*n+1]=this.vertices[2*n+1],this.interleaved[4*n+2]=this.uvs[2*n],this.interleaved[4*n+3]=this.uvs[2*n+1];this.indices=(0,u.default)(1),this.vertexBuffer=s.default.GLBuffer.createVertexBuffer(e,this.interleaved,e.STATIC_DRAW),this.indexBuffer=s.default.GLBuffer.createIndexBuffer(e,this.indices,e.STATIC_DRAW),this.vao=new s.default.VertexArrayObject(e,r)}return t.prototype.initVao=function(t){this.vao.clear().addIndex(this.indexBuffer).addAttribute(this.vertexBuffer,t.attributes.aVertexPosition,this.gl.FLOAT,!1,16,0).addAttribute(this.vertexBuffer,t.attributes.aTextureCoord,this.gl.FLOAT,!1,16,8)},t.prototype.map=function(t,e){var r=0,n=0;return this.uvs[0]=r,this.uvs[1]=n,this.uvs[2]=r+e.width/t.width,this.uvs[3]=n,this.uvs[4]=r+e.width/t.width,this.uvs[5]=n+e.height/t.height,this.uvs[6]=r,this.uvs[7]=n+e.height/t.height,r=e.x,n=e.y,this.vertices[0]=r,this.vertices[1]=n,this.vertices[2]=r+e.width,this.vertices[3]=n,this.vertices[4]=r+e.width,this.vertices[5]=n+e.height,this.vertices[6]=r,this.vertices[7]=n+e.height,this},t.prototype.upload=function(){for(var t=0;t<4;t++)this.interleaved[4*t]=this.vertices[2*t],this.interleaved[4*t+1]=this.vertices[2*t+1],this.interleaved[4*t+2]=this.uvs[2*t],this.interleaved[4*t+3]=this.uvs[2*t+1];return this.vertexBuffer.upload(this.interleaved),this},t.prototype.destroy=function(){var t=this.gl;t.deleteBuffer(this.vertexBuffer),t.deleteBuffer(this.indexBuffer)},t}();r.default=h},{\"../../../utils/createIndicesForQuads\":115,\"pixi-gl-core\":12}],92:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}r.__esModule=!0;var o=t(\"../../../math\"),s=t(\"../../../const\"),a=t(\"../../../settings\"),u=n(a),h=t(\"pixi-gl-core\"),l=function(){function t(e,r,n,a,l,c){i(this,t),this.gl=e,this.frameBuffer=null,this.texture=null,this.clearColor=[0,0,0,0],this.size=new o.Rectangle(0,0,1,1),this.resolution=l||u.default.RESOLUTION,this.projectionMatrix=new o.Matrix,this.transform=null,this.frame=null,this.defaultFrame=new o.Rectangle,this.destinationFrame=null,this.sourceFrame=null,this.stencilBuffer=null,this.stencilMaskStack=[],this.filterData=null,this.scaleMode=a||u.default.SCALE_MODE,this.root=c,this.root?(this.frameBuffer=new h.GLFramebuffer(e,100,100),this.frameBuffer.framebuffer=null):(this.frameBuffer=h.GLFramebuffer.createRGBA(e,100,100),this.scaleMode===s.SCALE_MODES.NEAREST?this.frameBuffer.texture.enableNearestScaling():this.frameBuffer.texture.enableLinearScaling(),this.texture=this.frameBuffer.texture),this.setFrame(),this.resize(r,n)}return t.prototype.clear=function(t){var e=t||this.clearColor;this.frameBuffer.clear(e[0],e[1],e[2],e[3])},t.prototype.attachStencilBuffer=function(){this.root||this.frameBuffer.enableStencil()},t.prototype.setFrame=function(t,e){this.destinationFrame=t||this.destinationFrame||this.defaultFrame,this.sourceFrame=e||this.sourceFrame||t},t.prototype.activate=function(){var t=this.gl;this.frameBuffer.bind(),this.calculateProjection(this.destinationFrame,this.sourceFrame),this.transform&&this.projectionMatrix.append(this.transform),this.destinationFrame!==this.sourceFrame?(t.enable(t.SCISSOR_TEST),t.scissor(0|this.destinationFrame.x,0|this.destinationFrame.y,this.destinationFrame.width*this.resolution|0,this.destinationFrame.height*this.resolution|0)):t.disable(t.SCISSOR_TEST),t.viewport(0|this.destinationFrame.x,0|this.destinationFrame.y,this.destinationFrame.width*this.resolution|0,this.destinationFrame.height*this.resolution|0)},t.prototype.calculateProjection=function(t,e){var r=this.projectionMatrix;e=e||t,r.identity(),this.root?(r.a=1/t.width*2,r.d=-1/t.height*2,r.tx=-1-e.x*r.a,r.ty=1-e.y*r.d):(r.a=1/t.width*2,r.d=1/t.height*2,r.tx=-1-e.x*r.a,r.ty=-1-e.y*r.d)},t.prototype.resize=function(t,e){if(t=0|t,e=0|e,this.size.width!==t||this.size.height!==e){this.size.width=t,this.size.height=e,this.defaultFrame.width=t,this.defaultFrame.height=e,this.frameBuffer.resize(t*this.resolution,e*this.resolution);var r=this.frame||this.size;this.calculateProjection(r)}},t.prototype.destroy=function(){this.frameBuffer.destroy(),this.frameBuffer=null,this.texture=null},t}();r.default=l},{\"../../../const\":42,\"../../../math\":66,\"../../../settings\":97,\"pixi-gl-core\":12}],93:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){var r=!e;if(r){var n=document.createElement(\"canvas\");n.width=1,n.height=1,e=a.default.createContext(n)}for(var i=e.createShader(e.FRAGMENT_SHADER);;){var s=u.replace(/%forloop%/gi,o(t));if(e.shaderSource(i,s),e.compileShader(i),e.getShaderParameter(i,e.COMPILE_STATUS))break;t=t/2|0}return r&&e.getExtension(\"WEBGL_lose_context\")&&e.getExtension(\"WEBGL_lose_context\").loseContext(),t}function o(t){for(var e=\"\",r=0;r<t;++r)r>0&&(e+=\"\\nelse \"),r<t-1&&(e+=\"if(test == \"+r+\".0){}\");return e}r.__esModule=!0,r.default=i;var s=t(\"pixi-gl-core\"),a=n(s),u=[\"precision mediump float;\",\"void main(void){\",\"float test = 0.1;\",\"%forloop%\",\"gl_FragColor = vec4(0.0);\",\"}\"].join(\"\\n\")},{\"pixi-gl-core\":12}],94:[function(t,e,r){\"use strict\";function n(t){var e=arguments.length<=1||void 0===arguments[1]?[]:arguments[1];return e[i.BLEND_MODES.NORMAL]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[i.BLEND_MODES.ADD]=[t.ONE,t.DST_ALPHA],e[i.BLEND_MODES.MULTIPLY]=[t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA],e[i.BLEND_MODES.SCREEN]=[t.ONE,t.ONE_MINUS_SRC_COLOR],e[i.BLEND_MODES.OVERLAY]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[i.BLEND_MODES.DARKEN]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[i.BLEND_MODES.LIGHTEN]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[i.BLEND_MODES.COLOR_DODGE]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[i.BLEND_MODES.COLOR_BURN]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[i.BLEND_MODES.HARD_LIGHT]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[i.BLEND_MODES.SOFT_LIGHT]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[i.BLEND_MODES.DIFFERENCE]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[i.BLEND_MODES.EXCLUSION]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[i.BLEND_MODES.HUE]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[i.BLEND_MODES.SATURATION]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[i.BLEND_MODES.COLOR]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[i.BLEND_MODES.LUMINOSITY]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],e}r.__esModule=!0,r.default=n;var i=t(\"../../../const\")},{\"../../../const\":42}],95:[function(t,e,r){\"use strict\";function n(t){var e=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return e[i.DRAW_MODES.POINTS]=t.POINTS,e[i.DRAW_MODES.LINES]=t.LINES,e[i.DRAW_MODES.LINE_LOOP]=t.LINE_LOOP,e[i.DRAW_MODES.LINE_STRIP]=t.LINE_STRIP,e[i.DRAW_MODES.TRIANGLES]=t.TRIANGLES,e[i.DRAW_MODES.TRIANGLE_STRIP]=t.TRIANGLE_STRIP,e[i.DRAW_MODES.TRIANGLE_FAN]=t.TRIANGLE_FAN,e}r.__esModule=!0,r.default=n;var i=t(\"../../../const\")},{\"../../../const\":42}],96:[function(t,e,r){\"use strict\";function n(t){var e=t.getContextAttributes();e.stencil||console.warn(\"Provided WebGL context does not have a stencil buffer, masks may not render correctly\")}r.__esModule=!0,r.default=n},{}],97:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}r.__esModule=!0;var i=t(\"./utils/maxRecommendedTextures\"),o=n(i),s=t(\"./utils/canUploadSameBuffer\"),a=n(s);r.default={TARGET_FPMS:.06,MIPMAP_TEXTURES:!0,RESOLUTION:1,FILTER_RESOLUTION:1,SPRITE_MAX_TEXTURES:(0,o.default)(32),SPRITE_BATCH_SIZE:4096,RETINA_PREFIX:/@(.+)x/,RENDER_OPTIONS:{view:null,antialias:!1,forceFXAA:!1,autoResize:!1,transparent:!1,backgroundColor:0,clearBeforeRender:!0,preserveDrawingBuffer:!1,roundPixels:!1},TRANSFORM_MODE:0,GC_MODE:0,GC_MAX_IDLE:3600,GC_MAX_CHECK_COUNT:600,WRAP_MODE:0,SCALE_MODE:0,PRECISION:\"mediump\",CAN_UPLOAD_SAME_BUFFER:(0,a.default)()}},{\"./utils/canUploadSameBuffer\":114,\"./utils/maxRecommendedTextures\":118}],98:[function(t,e,r){\"use strict\";function n(t){\nreturn t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}function o(t,e){if(!t)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!e||\"object\"!=typeof e&&\"function\"!=typeof e?t:e}function s(t,e){if(\"function\"!=typeof e&&null!==e)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,\"value\"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),u=t(\"../math\"),h=t(\"../utils\"),l=t(\"../const\"),c=t(\"../textures/Texture\"),d=n(c),f=t(\"../display/Container\"),p=n(f),v=new u.Point,y=function(t){function e(r){i(this,e);var n=o(this,t.call(this));return n._anchor=new u.ObservablePoint(n._onAnchorUpdate,n),n._texture=null,n._width=0,n._height=0,n._tint=null,n._tintRGB=null,n.tint=16777215,n.blendMode=l.BLEND_MODES.NORMAL,n.shader=null,n.cachedTint=16777215,n.texture=r||d.default.EMPTY,n.vertexData=new Float32Array(8),n.vertexTrimmedData=null,n._transformID=-1,n._textureID=-1,n}return s(e,t),e.prototype._onTextureUpdate=function(){this._textureID=-1,this._width&&(this.scale.x=(0,h.sign)(this.scale.x)*this._width/this.texture.orig.width),this._height&&(this.scale.y=(0,h.sign)(this.scale.y)*this._height/this.texture.orig.height)},e.prototype._onAnchorUpdate=function(){this._transformID=-1},e.prototype.calculateVertices=function(){if(this._transformID!==this.transform._worldID||this._textureID!==this._texture._updateID){this._transformID=this.transform._worldID,this._textureID=this._texture._updateID;var t=this._texture,e=this.transform.worldTransform,r=e.a,n=e.b,i=e.c,o=e.d,s=e.tx,a=e.ty,u=this.vertexData,h=t.trim,l=t.orig,c=this._anchor,d=0,f=0,p=0,v=0;h?(f=h.x-c._x*l.width,d=f+h.width,v=h.y-c._y*l.height,p=v+h.height):(d=l.width*(1-c._x),f=l.width*-c._x,p=l.height*(1-c._y),v=l.height*-c._y),u[0]=r*f+i*v+s,u[1]=o*v+n*f+a,u[2]=r*d+i*v+s,u[3]=o*v+n*d+a,u[4]=r*d+i*p+s,u[5]=o*p+n*d+a,u[6]=r*f+i*p+s,u[7]=o*p+n*f+a}},e.prototype.calculateTrimmedVertices=function(){this.vertexTrimmedData||(this.vertexTrimmedData=new Float32Array(8));var t=this._texture,e=this.vertexTrimmedData,r=t.orig,n=this._anchor,i=this.transform.worldTransform,o=i.a,s=i.b,a=i.c,u=i.d,h=i.tx,l=i.ty,c=r.width*(1-n._x),d=r.width*-n._x,f=r.height*(1-n._y),p=r.height*-n._y;e[0]=o*d+a*p+h,e[1]=u*p+s*d+l,e[2]=o*c+a*p+h,e[3]=u*p+s*c+l,e[4]=o*c+a*f+h,e[5]=u*f+s*c+l,e[6]=o*d+a*f+h,e[7]=u*f+s*d+l},e.prototype._renderWebGL=function(t){this.calculateVertices(),t.setObjectRenderer(t.plugins.sprite),t.plugins.sprite.render(this)},e.prototype._renderCanvas=function(t){t.plugins.sprite.render(this)},e.prototype._calculateBounds=function(){var t=this._texture.trim,e=this._texture.orig;!t||t.width===e.width&&t.height===e.height?(this.calculateVertices(),this._bounds.addQuad(this.vertexData)):(this.calculateTrimmedVertices(),this._bounds.addQuad(this.vertexTrimmedData))},e.prototype.getLocalBounds=function(e){return 0===this.children.length?(this._bounds.minX=this._texture.orig.width*-this._anchor._x,this._bounds.minY=this._texture.orig.height*-this._anchor._y,this._bounds.maxX=this._texture.orig.width*(1-this._anchor._x),this._bounds.maxY=this._texture.orig.height*(1-this._anchor._x),e||(this._localBoundsRect||(this._localBoundsRect=new u.Rectangle),e=this._localBoundsRect),this._bounds.getRectangle(e)):t.prototype.getLocalBounds.call(this,e)},e.prototype.containsPoint=function(t){this.worldTransform.applyInverse(t,v);var e=this._texture.orig.width,r=this._texture.orig.height,n=-e*this.anchor.x,i=0;return v.x>n&&v.x<n+e&&(i=-r*this.anchor.y,v.y>i&&v.y<i+r)},e.prototype.destroy=function(e){t.prototype.destroy.call(this,e),this._anchor=null;var r=\"boolean\"==typeof e?e:e&&e.texture;if(r){var n=\"boolean\"==typeof e?e:e&&e.baseTexture;this._texture.destroy(!!n)}this._texture=null,this.shader=null},e.from=function(t){return new e(d.default.from(t))},e.fromFrame=function(t){var r=h.TextureCache[t];if(!r)throw new Error('The frameId \"'+t+'\" does not exist in the texture cache');return new e(r)},e.fromImage=function(t,r,n){return new e(d.default.fromImage(t,r,n))},a(e,[{key:\"width\",get:function(){return Math.abs(this.scale.x)*this.texture.orig.width},set:function(t){var e=(0,h.sign)(this.scale.x)||1;this.scale.x=e*t/this.texture.orig.width,this._width=t}},{key:\"height\",get:function(){return Math.abs(this.scale.y)*this.texture.orig.height},set:function(t){var e=(0,h.sign)(this.scale.y)||1;this.scale.y=e*t/this.texture.orig.height,this._height=t}},{key:\"anchor\",get:function(){return this._anchor},set:function(t){this._anchor.copy(t)}},{key:\"tint\",get:function(){return this._tint},set:function(t){this._tint=t,this._tintRGB=(t>>16)+(65280&t)+((255&t)<<16)}},{key:\"texture\",get:function(){return this._texture},set:function(t){this._texture!==t&&(this._texture=t,this.cachedTint=16777215,this._textureID=-1,t&&(t.baseTexture.hasLoaded?this._onTextureUpdate():t.once(\"update\",this._onTextureUpdate,this)))}}]),e}(p.default);r.default=y},{\"../const\":42,\"../display/Container\":44,\"../math\":66,\"../textures/Texture\":109,\"../utils\":117}],99:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}r.__esModule=!0;var o=t(\"../../renderers/canvas/CanvasRenderer\"),s=n(o),a=t(\"../../const\"),u=t(\"../../math\"),h=t(\"./CanvasTinter\"),l=n(h),c=new u.Matrix,d=function(){function t(e){i(this,t),this.renderer=e}return t.prototype.render=function(t){var e=t._texture,r=this.renderer,n=e._frame.width,i=e._frame.height,o=t.transform.worldTransform,s=0,h=0;if(!(e.orig.width<=0||e.orig.height<=0)&&e.baseTexture.source&&(r.setBlendMode(t.blendMode),e.valid)){r.context.globalAlpha=t.worldAlpha;var d=e.baseTexture.scaleMode===a.SCALE_MODES.LINEAR;r.smoothProperty&&r.context[r.smoothProperty]!==d&&(r.context[r.smoothProperty]=d),e.trim?(s=e.trim.width/2+e.trim.x-t.anchor.x*e.orig.width,h=e.trim.height/2+e.trim.y-t.anchor.y*e.orig.height):(s=(.5-t.anchor.x)*e.orig.width,h=(.5-t.anchor.y)*e.orig.height),e.rotate&&(o.copy(c),o=c,u.GroupD8.matrixAppendRotationInv(o,e.rotate,s,h),s=0,h=0),s-=n/2,h-=i/2,r.roundPixels?(r.context.setTransform(o.a,o.b,o.c,o.d,o.tx*r.resolution|0,o.ty*r.resolution|0),s=0|s,h=0|h):r.context.setTransform(o.a,o.b,o.c,o.d,o.tx*r.resolution,o.ty*r.resolution);var f=e.baseTexture.resolution;16777215!==t.tint?(t.cachedTint!==t.tint&&(t.cachedTint=t.tint,t.tintedTexture=l.default.getTintedTexture(t,t.tint)),r.context.drawImage(t.tintedTexture,0,0,n*f,i*f,s*r.resolution,h*r.resolution,n*r.resolution,i*r.resolution)):r.context.drawImage(e.baseTexture.source,e._frame.x*f,e._frame.y*f,n*f,i*f,s*r.resolution,h*r.resolution,n*r.resolution,i*r.resolution)}},t.prototype.destroy=function(){this.renderer=null},t}();r.default=d,s.default.registerPlugin(\"sprite\",d)},{\"../../const\":42,\"../../math\":66,\"../../renderers/canvas/CanvasRenderer\":73,\"./CanvasTinter\":100}],100:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}r.__esModule=!0;var i=t(\"../../utils\"),o=t(\"../../renderers/canvas/utils/canUseNewCanvasBlendModes\"),s=n(o),a={getTintedTexture:function(t,e){var r=t.texture;e=a.roundColor(e);var n=\"#\"+(\"00000\"+(0|e).toString(16)).substr(-6);if(r.tintCache=r.tintCache||{},r.tintCache[n])return r.tintCache[n];var i=a.canvas||document.createElement(\"canvas\");if(a.tintMethod(r,e,i),a.convertTintToImage){var o=new Image;o.src=i.toDataURL(),r.tintCache[n]=o}else r.tintCache[n]=i,a.canvas=null;return i},tintWithMultiply:function(t,e,r){var n=r.getContext(\"2d\"),i=t._frame.clone(),o=t.baseTexture.resolution;i.x*=o,i.y*=o,i.width*=o,i.height*=o,r.width=i.width,r.height=i.height,n.fillStyle=\"#\"+(\"00000\"+(0|e).toString(16)).substr(-6),n.fillRect(0,0,i.width,i.height),n.globalCompositeOperation=\"multiply\",n.drawImage(t.baseTexture.source,i.x,i.y,i.width,i.height,0,0,i.width,i.height),n.globalCompositeOperation=\"destination-atop\",n.drawImage(t.baseTexture.source,i.x,i.y,i.width,i.height,0,0,i.width,i.height)},tintWithOverlay:function(t,e,r){var n=r.getContext(\"2d\"),i=t._frame.clone(),o=t.baseTexture.resolution;i.x*=o,i.y*=o,i.width*=o,i.height*=o,r.width=i.width,r.height=i.height,n.globalCompositeOperation=\"copy\",n.fillStyle=\"#\"+(\"00000\"+(0|e).toString(16)).substr(-6),n.fillRect(0,0,i.width,i.height),n.globalCompositeOperation=\"destination-atop\",n.drawImage(t.baseTexture.source,i.x,i.y,i.width,i.height,0,0,i.width,i.height)},tintWithPerPixel:function(t,e,r){var n=r.getContext(\"2d\"),o=t._frame.clone(),s=t.baseTexture.resolution;o.x*=s,o.y*=s,o.width*=s,o.height*=s,r.width=o.width,r.height=o.height,n.globalCompositeOperation=\"copy\",n.drawImage(t.baseTexture.source,o.x,o.y,o.width,o.height,0,0,o.width,o.height);for(var a=(0,i.hex2rgb)(e),u=a[0],h=a[1],l=a[2],c=n.getImageData(0,0,o.width,o.height),d=c.data,f=0;f<d.length;f+=4)d[f+0]*=u,d[f+1]*=h,d[f+2]*=l;n.putImageData(c,0,0)},roundColor:function(t){var e=a.cacheStepsPerColorChannel,r=(0,i.hex2rgb)(t);return r[0]=Math.min(255,r[0]/e*e),r[1]=Math.min(255,r[1]/e*e),r[2]=Math.min(255,r[2]/e*e),(0,i.rgb2hex)(r)},cacheStepsPerColorChannel:8,convertTintToImage:!1,canUseMultiply:(0,s.default)(),tintMethod:0};a.tintMethod=a.canUseMultiply?a.tintWithMultiply:a.tintWithPerPixel,r.default=a},{\"../../renderers/canvas/utils/canUseNewCanvasBlendModes\":76,\"../../utils\":117}],101:[function(t,e,r){\"use strict\";function n(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}r.__esModule=!0;var i=function(){function t(e){n(this,t),this.vertices=new ArrayBuffer(e),this.float32View=new Float32Array(this.vertices),this.uint32View=new Uint32Array(this.vertices)}return t.prototype.destroy=function(){this.vertices=null,this.positions=null,this.uvs=null,this.colors=null},t}();r.default=i},{}],102:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}function o(t,e){if(!t)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!e||\"object\"!=typeof e&&\"function\"!=typeof e?t:e}function s(t,e){if(\"function\"!=typeof e&&null!==e)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=t(\"../../renderers/webgl/utils/ObjectRenderer\"),u=n(a),h=t(\"../../renderers/webgl/WebGLRenderer\"),l=n(h),c=t(\"../../utils/createIndicesForQuads\"),d=n(c),f=t(\"./generateMultiTextureShader\"),p=n(f),v=t(\"../../renderers/webgl/utils/checkMaxIfStatmentsInShader\"),y=n(v),g=t(\"./BatchBuffer\"),m=n(g),_=t(\"../../settings\"),b=n(_),x=t(\"pixi-gl-core\"),T=n(x),w=t(\"bit-twiddle\"),E=n(w),O=0,S=0,M=function(t){function e(r){i(this,e);var n=o(this,t.call(this,r));n.vertSize=5,n.vertByteSize=4*n.vertSize,n.size=b.default.SPRITE_BATCH_SIZE,n.buffers=[];for(var s=1;s<=E.default.nextPow2(n.size);s*=2)n.buffers.push(new m.default(4*s*n.vertByteSize));n.indices=(0,d.default)(n.size),n.shader=null,n.currentIndex=0,O=0,n.groups=[];for(var a=0;a<n.size;a++)n.groups[a]={textures:[],textureCount:0,ids:[],size:0,start:0,blend:0};return n.sprites=[],n.vertexBuffers=[],n.vaos=[],n.vaoMax=2,n.vertexCount=0,n.renderer.on(\"prerender\",n.onPrerender,n),n}return s(e,t),e.prototype.onContextChange=function(){var t=this.renderer.gl;this.MAX_TEXTURES=Math.min(t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),b.default.SPRITE_MAX_TEXTURES),this.MAX_TEXTURES=(0,y.default)(this.MAX_TEXTURES,t);var e=this.shader=(0,p.default)(t,this.MAX_TEXTURES);this.indexBuffer=T.default.GLBuffer.createIndexBuffer(t,this.indices,t.STATIC_DRAW),this.renderer.bindVao(null);for(var r=0;r<this.vaoMax;r++)this.vertexBuffers[r]=T.default.GLBuffer.createVertexBuffer(t,null,t.STREAM_DRAW),this.vaos[r]=this.renderer.createVao().addIndex(this.indexBuffer).addAttribute(this.vertexBuffers[r],e.attributes.aVertexPosition,t.FLOAT,!1,this.vertByteSize,0).addAttribute(this.vertexBuffers[r],e.attributes.aTextureCoord,t.UNSIGNED_SHORT,!0,this.vertByteSize,8).addAttribute(this.vertexBuffers[r],e.attributes.aColor,t.UNSIGNED_BYTE,!0,this.vertByteSize,12).addAttribute(this.vertexBuffers[r],e.attributes.aTextureId,t.FLOAT,!1,this.vertByteSize,16);this.vao=this.vaos[0],this.currentBlendMode=99999,this.boundTextures=new Array(this.MAX_TEXTURES)},e.prototype.onPrerender=function(){this.vertexCount=0},e.prototype.render=function(t){this.currentIndex>=this.size&&this.flush(),t.texture._uvs&&(this.sprites[this.currentIndex++]=t)},e.prototype.flush=function(){if(0!==this.currentIndex){var t=this.renderer.gl,e=this.MAX_TEXTURES,r=E.default.nextPow2(this.currentIndex),n=E.default.log2(r),i=this.buffers[n],o=this.sprites,s=this.groups,a=i.float32View,u=i.uint32View,h=this.boundTextures,l=this.renderer.boundTextures,c=this.renderer.textureGC.count,d=0,f=void 0,p=void 0,v=1,y=0,g=s[0],m=void 0,_=void 0,x=o[0].blendMode;g.textureCount=0,g.start=0,g.blend=x,O++;var w=void 0;for(w=0;w<e;++w)h[w]=l[w],h[w]._virtalBoundId=w;for(w=0;w<this.currentIndex;++w){var M=o[w];if(f=M._texture.baseTexture,x!==M.blendMode&&(x=M.blendMode,p=null,y=e,O++),p!==f&&(p=f,f._enabled!==O)){if(y===e&&(O++,g.size=w-g.start,y=0,g=s[v++],g.blend=x,g.textureCount=0,g.start=w),f.touched=c,f._virtalBoundId===-1)for(var P=0;P<e;++P){var C=(P+S)%e,R=h[C];if(R._enabled!==O){S++,R._virtalBoundId=-1,f._virtalBoundId=C,h[C]=f;break}}f._enabled=O,g.textureCount++,g.ids[y]=f._virtalBoundId,g.textures[y++]=f}if(m=M.vertexData,_=M._texture._uvs.uvsUint32,this.renderer.roundPixels){var A=this.renderer.resolution;a[d]=(m[0]*A|0)/A,a[d+1]=(m[1]*A|0)/A,a[d+5]=(m[2]*A|0)/A,a[d+6]=(m[3]*A|0)/A,a[d+10]=(m[4]*A|0)/A,a[d+11]=(m[5]*A|0)/A,a[d+15]=(m[6]*A|0)/A,a[d+16]=(m[7]*A|0)/A}else a[d]=m[0],a[d+1]=m[1],a[d+5]=m[2],a[d+6]=m[3],a[d+10]=m[4],a[d+11]=m[5],a[d+15]=m[6],a[d+16]=m[7];u[d+2]=_[0],u[d+7]=_[1],u[d+12]=_[2],u[d+17]=_[3],u[d+3]=u[d+8]=u[d+13]=u[d+18]=M._tintRGB+(255*M.worldAlpha<<24),a[d+4]=a[d+9]=a[d+14]=a[d+19]=f._virtalBoundId,d+=20}for(g.size=w-g.start,b.default.CAN_UPLOAD_SAME_BUFFER?this.vertexBuffers[this.vertexCount].upload(i.vertices,0,!0):(this.vaoMax<=this.vertexCount&&(this.vaoMax++,this.vertexBuffers[this.vertexCount]=T.default.GLBuffer.createVertexBuffer(t,null,t.STREAM_DRAW),this.vaos[this.vertexCount]=this.renderer.createVao().addIndex(this.indexBuffer).addAttribute(this.vertexBuffers[this.vertexCount],this.shader.attributes.aVertexPosition,t.FLOAT,!1,this.vertByteSize,0).addAttribute(this.vertexBuffers[this.vertexCount],this.shader.attributes.aTextureCoord,t.UNSIGNED_SHORT,!0,this.vertByteSize,8).addAttribute(this.vertexBuffers[this.vertexCount],this.shader.attributes.aColor,t.UNSIGNED_BYTE,!0,this.vertByteSize,12).addAttribute(this.vertexBuffers[this.vertexCount],this.shader.attributes.aTextureId,t.FLOAT,!1,this.vertByteSize,16)),this.renderer.bindVao(this.vaos[this.vertexCount]),this.vertexBuffers[this.vertexCount].upload(i.vertices,0,!1),this.vertexCount++),w=0;w<e;++w)l[w]._virtalBoundId=-1;for(w=0;w<v;++w){for(var D=s[w],I=D.textureCount,L=0;L<I;L++)p=D.textures[L],l[D.ids[L]]!==p&&this.renderer.bindTexture(p,D.ids[L],!0),p._virtalBoundId=-1;this.renderer.state.setBlendMode(D.blend),t.drawElements(t.TRIANGLES,6*D.size,t.UNSIGNED_SHORT,6*D.start*2)}this.currentIndex=0}},e.prototype.start=function(){this.renderer.bindShader(this.shader),b.default.CAN_UPLOAD_SAME_BUFFER&&(this.renderer.bindVao(this.vaos[this.vertexCount]),this.vertexBuffers[this.vertexCount].bind())},e.prototype.stop=function(){this.flush()},e.prototype.destroy=function(){for(var e=0;e<this.vaoMax;e++)this.vertexBuffers[e]&&this.vertexBuffers[e].destroy(),this.vaos[e]&&this.vaos[e].destroy();this.indexBuffer&&this.indexBuffer.destroy(),this.renderer.off(\"prerender\",this.onPrerender,this),t.prototype.destroy.call(this),this.shader&&(this.shader.destroy(),this.shader=null),this.vertexBuffers=null,this.vaos=null,this.indexBuffer=null,this.indices=null,this.sprites=null;for(var r=0;r<this.buffers.length;++r)this.buffers[r].destroy()},e}(u.default);r.default=M,l.default.registerPlugin(\"sprite\",M)},{\"../../renderers/webgl/WebGLRenderer\":80,\"../../renderers/webgl/utils/ObjectRenderer\":90,\"../../renderers/webgl/utils/checkMaxIfStatmentsInShader\":93,\"../../settings\":97,\"../../utils/createIndicesForQuads\":115,\"./BatchBuffer\":101,\"./generateMultiTextureShader\":103,\"bit-twiddle\":1,\"pixi-gl-core\":12}],103:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){var r=\"attribute vec2 aVertexPosition;\\nattribute vec2 aTextureCoord;\\nattribute vec4 aColor;\\nattribute float aTextureId;\\n\\nuniform mat3 projectionMatrix;\\n\\nvarying vec2 vTextureCoord;\\nvarying vec4 vColor;\\nvarying float vTextureId;\\n\\nvoid main(void){\\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\\n\\n    vTextureCoord = aTextureCoord;\\n    vTextureId = aTextureId;\\n    vColor = vec4(aColor.rgb * aColor.a, aColor.a);\\n}\\n\",n=u;n=n.replace(/%count%/gi,e),n=n.replace(/%forloop%/gi,o(e));for(var i=new a.default(t,r,n),s=[],h=0;h<e;h++)s[h]=h;return i.bind(),i.uniforms.uSamplers=s,i}function o(t){var e=\"\";e+=\"\\n\",e+=\"\\n\";for(var r=0;r<t;r++)r>0&&(e+=\"\\nelse \"),r<t-1&&(e+=\"if(textureId == \"+r+\".0)\"),e+=\"\\n{\",e+=\"\\n\\tcolor = texture2D(uSamplers[\"+r+\"], vTextureCoord);\",e+=\"\\n}\";return e+=\"\\n\",e+=\"\\n\"}r.__esModule=!0,r.default=i;var s=t(\"../../Shader\"),a=n(s),u=(t(\"path\"),[\"varying vec2 vTextureCoord;\",\"varying vec4 vColor;\",\"varying float vTextureId;\",\"uniform sampler2D uSamplers[%count%];\",\"void main(void){\",\"vec4 color;\",\"float textureId = floor(vTextureId+0.5);\",\"%forloop%\",\"gl_FragColor = color * vColor;\",\"}\"].join(\"\\n\"))},{\"../../Shader\":41,path:22}],104:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}function o(t,e){if(!t)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!e||\"object\"!=typeof e&&\"function\"!=typeof e?t:e}function s(t,e){if(\"function\"!=typeof e&&null!==e)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,\"value\"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),u=t(\"../sprites/Sprite\"),h=n(u),l=t(\"../textures/Texture\"),c=n(l),d=t(\"../math\"),f=t(\"../utils\"),p=t(\"../const\"),v=t(\"../settings\"),y=n(v),g=t(\"./TextStyle\"),m=n(g),_={texture:!0,children:!1,baseTexture:!0},b=function(t){function e(r,n){i(this,e);var s=document.createElement(\"canvas\");s.width=3,s.height=3;var a=c.default.fromCanvas(s);a.orig=new d.Rectangle,a.trim=new d.Rectangle;var u=o(this,t.call(this,a));return u.canvas=s,u.context=u.canvas.getContext(\"2d\"),u.resolution=y.default.RESOLUTION,u._text=null,u._style=null,u._styleListener=null,u._font=\"\",u.text=r,u.style=n,u.localStyleID=-1,u}return s(e,t),e.prototype.updateText=function(t){var r=this._style;if(this.localStyleID!==r.styleID&&(this.dirty=!0,this.localStyleID=r.styleID),this.dirty||!t){this._font=e.getFontStyle(r),this.context.font=this._font;for(var n=r.wordWrap?this.wordWrap(this._text):this._text,i=n.split(/(?:\\r\\n|\\r|\\n)/),o=new Array(i.length),s=0,a=e.calculateFontProperties(this._font),u=0;u<i.length;u++){var h=this.context.measureText(i[u]).width+(i[u].length-1)*r.letterSpacing;o[u]=h,s=Math.max(s,h)}var l=s+r.strokeThickness;r.dropShadow&&(l+=r.dropShadowDistance),l+=2*r.padding,this.canvas.width=Math.ceil((l+this.context.lineWidth)*this.resolution);var c=this.style.lineHeight||a.fontSize+r.strokeThickness,d=Math.max(c,a.fontSize+r.strokeThickness)+(i.length-1)*c;r.dropShadow&&(d+=r.dropShadowDistance),this.canvas.height=Math.ceil((d+2*this._style.padding)*this.resolution),this.context.scale(this.resolution,this.resolution),this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.font=this._font,this.context.strokeStyle=r.stroke,this.context.lineWidth=r.strokeThickness,this.context.textBaseline=r.textBaseline,this.context.lineJoin=r.lineJoin,this.context.miterLimit=r.miterLimit;var f=void 0,p=void 0;if(r.dropShadow){r.dropShadowBlur>0?(this.context.shadowColor=r.dropShadowColor,this.context.shadowBlur=r.dropShadowBlur):this.context.fillStyle=r.dropShadowColor;for(var v=Math.cos(r.dropShadowAngle)*r.dropShadowDistance,y=Math.sin(r.dropShadowAngle)*r.dropShadowDistance,g=0;g<i.length;g++)f=r.strokeThickness/2,p=r.strokeThickness/2+g*c+a.ascent,\"right\"===r.align?f+=s-o[g]:\"center\"===r.align&&(f+=(s-o[g])/2),r.fill&&(this.drawLetterSpacing(i[g],f+v+r.padding,p+y+r.padding),r.stroke&&r.strokeThickness&&(this.context.strokeStyle=r.dropShadowColor,this.drawLetterSpacing(i[g],f+v+r.padding,p+y+r.padding,!0),this.context.strokeStyle=r.stroke))}this.context.fillStyle=this._generateFillStyle(r,i);for(var m=0;m<i.length;m++)f=r.strokeThickness/2,p=r.strokeThickness/2+m*c+a.ascent,\"right\"===r.align?f+=s-o[m]:\"center\"===r.align&&(f+=(s-o[m])/2),r.stroke&&r.strokeThickness&&this.drawLetterSpacing(i[m],f+r.padding,p+r.padding,!0),r.fill&&this.drawLetterSpacing(i[m],f+r.padding,p+r.padding);this.updateTexture()}},e.prototype.drawLetterSpacing=function(t,e,r){var n=!(arguments.length<=3||void 0===arguments[3])&&arguments[3],i=this._style,o=i.letterSpacing;if(0===o)return void(n?this.context.strokeText(t,e,r):this.context.fillText(t,e,r));for(var s=String.prototype.split.call(t,\"\"),a=e,u=0,h=\"\";u<t.length;)h=s[u++],n?this.context.strokeText(h,a,r):this.context.fillText(h,a,r),a+=this.context.measureText(h).width+o},e.prototype.updateTexture=function(){var t=this._texture,e=this._style;t.baseTexture.hasLoaded=!0,t.baseTexture.resolution=this.resolution,t.baseTexture.realWidth=this.canvas.width,t.baseTexture.realHeight=this.canvas.height,t.baseTexture.width=this.canvas.width/this.resolution,t.baseTexture.height=this.canvas.height/this.resolution,t.trim.width=t._frame.width=this.canvas.width/this.resolution,t.trim.height=t._frame.height=this.canvas.height/this.resolution,t.trim.x=-e.padding,t.trim.y=-e.padding,t.orig.width=t._frame.width-2*e.padding,t.orig.height=t._frame.height-2*e.padding,this._onTextureUpdate(),t.baseTexture.emit(\"update\",t.baseTexture),this.dirty=!1},e.prototype.renderWebGL=function(e){this.resolution!==e.resolution&&(this.resolution=e.resolution,this.dirty=!0),this.updateText(!0),t.prototype.renderWebGL.call(this,e)},e.prototype._renderCanvas=function(e){this.resolution!==e.resolution&&(this.resolution=e.resolution,this.dirty=!0),this.updateText(!0),t.prototype._renderCanvas.call(this,e)},e.prototype.wordWrap=function(t){for(var e=\"\",r=t.split(\"\\n\"),n=this._style.wordWrapWidth,i=0;i<r.length;i++){for(var o=n,s=r[i].split(\" \"),a=0;a<s.length;a++){var u=this.context.measureText(s[a]).width;if(this._style.breakWords&&u>n)for(var h=s[a].split(\"\"),l=0;l<h.length;l++){var c=this.context.measureText(h[l]).width;c>o?(e+=\"\\n\"+h[l],o=n-c):(0===l&&(e+=\" \"),e+=h[l],o-=c)}else{var d=u+this.context.measureText(\" \").width;0===a||d>o?(a>0&&(e+=\"\\n\"),e+=s[a],o=n-u):(o-=d,e+=\" \"+s[a])}}i<r.length-1&&(e+=\"\\n\")}return e},e.prototype._calculateBounds=function(){this.updateText(!0),this.calculateVertices(),this._bounds.addQuad(this.vertexData)},e.prototype._onStyleChange=function(){this.dirty=!0},e.prototype._generateFillStyle=function(t,e){if(!Array.isArray(t.fill))return t.fill;if(navigator.isCocoonJS)return t.fill[0];var r=void 0,n=void 0,i=void 0,o=void 0,s=this.canvas.width/this.resolution,a=this.canvas.height/this.resolution;if(t.fillGradientType===p.TEXT_GRADIENT.LINEAR_VERTICAL){r=this.context.createLinearGradient(s/2,0,s/2,a),n=(t.fill.length+1)*e.length,i=0;for(var u=0;u<e.length;u++){i+=1;for(var h=0;h<t.fill.length;h++)o=i/n,r.addColorStop(o,t.fill[h]),i++}}else{r=this.context.createLinearGradient(0,a/2,s,a/2),n=t.fill.length+1,i=1;for(var l=0;l<t.fill.length;l++)o=i/n,r.addColorStop(o,t.fill[l]),i++}return r},e.prototype.destroy=function(e){\"boolean\"==typeof e&&(e={children:e}),e=Object.assign({},_,e),t.prototype.destroy.call(this,e),this.context=null,this.canvas=null,this._style=null},e.getFontStyle=function(t){t=t||{},t instanceof m.default||(t=new m.default(t));var e=\"number\"==typeof t.fontSize?t.fontSize+\"px\":t.fontSize;return t.fontStyle+\" \"+t.fontVariant+\" \"+t.fontWeight+\" \"+e+' \"'+t.fontFamily+'\"'},e.calculateFontProperties=function(t){if(e.fontPropertiesCache[t])return e.fontPropertiesCache[t];var r={},n=e.fontPropertiesCanvas,i=e.fontPropertiesContext;i.font=t;var o=Math.ceil(i.measureText(\"|MÉq\").width),s=Math.ceil(i.measureText(\"M\").width),a=2*s;s=1.4*s|0,n.width=o,n.height=a,i.fillStyle=\"#f00\",i.fillRect(0,0,o,a),i.font=t,i.textBaseline=\"alphabetic\",i.fillStyle=\"#000\",i.fillText(\"|MÉq\",0,s);var u=i.getImageData(0,0,o,a).data,h=u.length,l=4*o,c=0,d=0,f=!1;for(c=0;c<s;++c){for(var p=0;p<l;p+=4)if(255!==u[d+p]){f=!0;break}if(f)break;d+=l}for(r.ascent=s-c,d=h-l,f=!1,c=a;c>s;--c){for(var v=0;v<l;v+=4)if(255!==u[d+v]){f=!0;break}if(f)break;d-=l}return r.descent=c-s,r.fontSize=r.ascent+r.descent,e.fontPropertiesCache[t]=r,r},a(e,[{key:\"width\",get:function(){return this.updateText(!0),Math.abs(this.scale.x)*this.texture.orig.width},set:function(t){this.updateText(!0);var e=(0,f.sign)(this.scale.x)||1;this.scale.x=e*t/this.texture.orig.width,this._width=t}},{key:\"height\",get:function(){return this.updateText(!0),Math.abs(this.scale.y)*this._texture.orig.height},set:function(t){this.updateText(!0);var e=(0,f.sign)(this.scale.y)||1;this.scale.y=e*t/this.texture.orig.height,this._height=t}},{key:\"style\",get:function(){return this._style},set:function(t){t=t||{},t instanceof m.default?this._style=t:this._style=new m.default(t),this.localStyleID=-1,this.dirty=!0}},{key:\"text\",get:function(){return this._text},set:function(t){t=t||\" \",t=t.toString(),this._text!==t&&(this._text=t,this.dirty=!0)}}]),e}(h.default);r.default=b,b.fontPropertiesCache={},b.fontPropertiesCanvas=document.createElement(\"canvas\"),b.fontPropertiesContext=b.fontPropertiesCanvas.getContext(\"2d\")},{\"../const\":42,\"../math\":66,\"../settings\":97,\"../sprites/Sprite\":98,\"../textures/Texture\":109,\"../utils\":117,\"./TextStyle\":105}],105:[function(t,e,r){\"use strict\";function n(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}function i(t){if(\"number\"==typeof t)return(0,a.hex2string)(t);if(Array.isArray(t))for(var e=0;e<t.length;++e)\"number\"==typeof t[e]&&(t[e]=(0,a.hex2string)(t[e]));return t}r.__esModule=!0;var o=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,\"value\"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),s=t(\"../const\"),a=t(\"../utils\"),u={align:\"left\",breakWords:!1,dropShadow:!1,dropShadowAngle:Math.PI/6,dropShadowBlur:0,dropShadowColor:\"#000000\",dropShadowDistance:5,fill:\"black\",fillGradientType:s.TEXT_GRADIENT.LINEAR_VERTICAL,fontFamily:\"Arial\",fontSize:26,fontStyle:\"normal\",fontVariant:\"normal\",fontWeight:\"normal\",letterSpacing:0,lineHeight:0,lineJoin:\"miter\",miterLimit:10,padding:0,stroke:\"black\",strokeThickness:0,textBaseline:\"alphabetic\",wordWrap:!1,wordWrapWidth:100},h=function(){function t(e){n(this,t),this.styleID=0,Object.assign(this,u,e)}return t.prototype.clone=function(){var e={};for(var r in this._defaults)e[r]=this[r];return new t(e)},t.prototype.reset=function(){Object.assign(this,this._defaults)},o(t,[{key:\"align\",get:function(){return this._align},set:function(t){this._align!==t&&(this._align=t,this.styleID++)}},{key:\"breakWords\",get:function(){return this._breakWords},set:function(t){this._breakWords!==t&&(this._breakWords=t,this.styleID++)}},{key:\"dropShadow\",get:function(){return this._dropShadow},set:function(t){this._dropShadow!==t&&(this._dropShadow=t,this.styleID++)}},{key:\"dropShadowAngle\",get:function(){return this._dropShadowAngle},set:function(t){this._dropShadowAngle!==t&&(this._dropShadowAngle=t,this.styleID++)}},{key:\"dropShadowBlur\",get:function(){return this._dropShadowBlur},set:function(t){this._dropShadowBlur!==t&&(this._dropShadowBlur=t,this.styleID++)}},{key:\"dropShadowColor\",get:function(){return this._dropShadowColor},set:function(t){var e=i(t);this._dropShadowColor!==e&&(this._dropShadowColor=e,this.styleID++)}},{key:\"dropShadowDistance\",get:function(){return this._dropShadowDistance},set:function(t){this._dropShadowDistance!==t&&(this._dropShadowDistance=t,this.styleID++)}},{key:\"fill\",get:function(){return this._fill},set:function(t){var e=i(t);this._fill!==e&&(this._fill=e,this.styleID++)}},{key:\"fillGradientType\",get:function(){return this._fillGradientType},set:function(t){this._fillGradientType!==t&&(this._fillGradientType=t,this.styleID++)}},{key:\"fontFamily\",get:function(){return this._fontFamily},set:function(t){this.fontFamily!==t&&(this._fontFamily=t,this.styleID++)}},{key:\"fontSize\",get:function(){return this._fontSize},set:function(t){this._fontSize!==t&&(this._fontSize=t,this.styleID++)}},{key:\"fontStyle\",get:function(){return this._fontStyle},set:function(t){this._fontStyle!==t&&(this._fontStyle=t,this.styleID++)}},{key:\"fontVariant\",get:function(){return this._fontVariant},set:function(t){this._fontVariant!==t&&(this._fontVariant=t,this.styleID++)}},{key:\"fontWeight\",get:function(){return this._fontWeight},set:function(t){this._fontWeight!==t&&(this._fontWeight=t,this.styleID++)}},{key:\"letterSpacing\",get:function(){return this._letterSpacing},set:function(t){this._letterSpacing!==t&&(this._letterSpacing=t,this.styleID++)}},{key:\"lineHeight\",get:function(){return this._lineHeight},set:function(t){this._lineHeight!==t&&(this._lineHeight=t,this.styleID++)}},{key:\"lineJoin\",get:function(){return this._lineJoin},set:function(t){this._lineJoin!==t&&(this._lineJoin=t,this.styleID++)}},{key:\"miterLimit\",get:function(){return this._miterLimit},set:function(t){this._miterLimit!==t&&(this._miterLimit=t,this.styleID++)}},{key:\"padding\",get:function(){return this._padding},set:function(t){this._padding!==t&&(this._padding=t,this.styleID++)}},{key:\"stroke\",get:function(){return this._stroke},set:function(t){var e=i(t);this._stroke!==e&&(this._stroke=e,this.styleID++)}},{key:\"strokeThickness\",get:function(){return this._strokeThickness},set:function(t){this._strokeThickness!==t&&(this._strokeThickness=t,this.styleID++)}},{key:\"textBaseline\",get:function(){return this._textBaseline},set:function(t){this._textBaseline!==t&&(this._textBaseline=t,this.styleID++)}},{key:\"wordWrap\",get:function(){return this._wordWrap},set:function(t){this._wordWrap!==t&&(this._wordWrap=t,this.styleID++)}},{key:\"wordWrapWidth\",get:function(){return this._wordWrapWidth},set:function(t){this._wordWrapWidth!==t&&(this._wordWrapWidth=t,this.styleID++)}}]),t}();r.default=h},{\"../const\":42,\"../utils\":117}],106:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}function o(t,e){if(!t)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!e||\"object\"!=typeof e&&\"function\"!=typeof e?t:e}function s(t,e){if(\"function\"!=typeof e&&null!==e)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof e);\nt.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=t(\"./BaseTexture\"),u=n(a),h=t(\"../settings\"),l=n(h),c=l.default.RESOLUTION,d=l.default.SCALE_MODE,f=function(t){function e(){var r=arguments.length<=0||void 0===arguments[0]?100:arguments[0],n=arguments.length<=1||void 0===arguments[1]?100:arguments[1],s=arguments[2],a=arguments[3];i(this,e);var u=o(this,t.call(this,null,s));return u.resolution=a||c,u.width=r,u.height=n,u.realWidth=u.width*u.resolution,u.realHeight=u.height*u.resolution,u.scaleMode=s||d,u.hasLoaded=!0,u._glRenderTargets={},u._canvasRenderTarget=null,u.valid=!1,u}return s(e,t),e.prototype.resize=function(t,e){t===this.width&&e===this.height||(this.valid=t>0&&e>0,this.width=t,this.height=e,this.realWidth=this.width*this.resolution,this.realHeight=this.height*this.resolution,this.valid&&this.emit(\"update\",this))},e.prototype.destroy=function(){t.prototype.destroy.call(this,!0),this.renderer=null},e}(u.default);r.default=f},{\"../settings\":97,\"./BaseTexture\":107}],107:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}function o(t,e){if(!t)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!e||\"object\"!=typeof e&&\"function\"!=typeof e?t:e}function s(t,e){if(\"function\"!=typeof e&&null!==e)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=\"function\"==typeof Symbol&&\"symbol\"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&\"function\"==typeof Symbol&&t.constructor===Symbol?\"symbol\":typeof t},u=t(\"../utils\"),h=t(\"../settings\"),l=n(h),c=t(\"eventemitter3\"),d=n(c),f=t(\"../utils/determineCrossOrigin\"),p=n(f),v=t(\"bit-twiddle\"),y=n(v),g=function(t){function e(r,n,s){i(this,e);var a=o(this,t.call(this));return a.uid=(0,u.uid)(),a.touched=0,a.resolution=s||l.default.RESOLUTION,a.width=100,a.height=100,a.realWidth=100,a.realHeight=100,a.scaleMode=n||l.default.SCALE_MODE,a.hasLoaded=!1,a.isLoading=!1,a.source=null,a.origSource=null,a.imageType=null,a.sourceScale=1,a.premultipliedAlpha=!0,a.imageUrl=null,a.isPowerOfTwo=!1,a.mipmap=l.default.MIPMAP_TEXTURES,a.wrapMode=l.default.WRAP_MODE,a._glTextures={},a._enabled=0,a._virtalBoundId=-1,r&&a.loadSource(r),a}return s(e,t),e.prototype.update=function(){\"svg\"!==this.imageType&&(this.realWidth=this.source.naturalWidth||this.source.videoWidth||this.source.width,this.realHeight=this.source.naturalHeight||this.source.videoHeight||this.source.height,this.width=this.realWidth/this.resolution,this.height=this.realHeight/this.resolution,this.isPowerOfTwo=y.default.isPow2(this.realWidth)&&y.default.isPow2(this.realHeight)),this.emit(\"update\",this)},e.prototype.loadSource=function(t){var e=this,r=this.isLoading;this.hasLoaded=!1,this.isLoading=!1,r&&this.source&&(this.source.onload=null,this.source.onerror=null);var n=!this.source;if(this.source=t,(t.src&&t.complete||t.getContext)&&t.width&&t.height)this._updateImageType(),\"svg\"===this.imageType?this._loadSvgSource():this._sourceLoaded(),n&&this.emit(\"loaded\",this);else if(!t.getContext){var i=function(){e.isLoading=!0;var n=e;if(t.onload=function(){if(n._updateImageType(),t.onload=null,t.onerror=null,n.isLoading)return n.isLoading=!1,n._sourceLoaded(),\"svg\"===n.imageType?void n._loadSvgSource():void n.emit(\"loaded\",n)},t.onerror=function(){t.onload=null,t.onerror=null,n.isLoading&&(n.isLoading=!1,n.emit(\"error\",n))},t.complete&&t.src){if(t.onload=null,t.onerror=null,\"svg\"===n.imageType)return n._loadSvgSource(),{v:void 0};e.isLoading=!1,t.width&&t.height?(e._sourceLoaded(),r&&e.emit(\"loaded\",e)):r&&e.emit(\"error\",e)}}();if(\"object\"===(\"undefined\"==typeof i?\"undefined\":a(i)))return i.v}},e.prototype._updateImageType=function(){if(this.imageUrl){var t=(0,u.decomposeDataUri)(this.imageUrl),e=void 0;if(t&&\"image\"===t.mediaType){var r=t.subType.split(\"+\")[0];if(e=(0,u.getUrlFileExtension)(\".\"+r),!e)throw new Error(\"Invalid image type in data URI.\")}else e=(0,u.getUrlFileExtension)(this.imageUrl),e||(e=\"png\");this.imageType=e}},e.prototype._loadSvgSource=function(){if(\"svg\"===this.imageType){var t=(0,u.decomposeDataUri)(this.imageUrl);t?this._loadSvgSourceUsingDataUri(t):this._loadSvgSourceUsingXhr()}},e.prototype._loadSvgSourceUsingDataUri=function(t){var e=void 0;if(\"base64\"===t.encoding){if(!atob)throw new Error(\"Your browser doesn't support base64 conversions.\");e=atob(t.data)}else e=t.data;this._loadSvgSourceUsingString(e)},e.prototype._loadSvgSourceUsingXhr=function(){var t=this,e=new XMLHttpRequest;e.onload=function(){if(e.readyState!==e.DONE||200!==e.status)throw new Error(\"Failed to load SVG using XHR.\");t._loadSvgSourceUsingString(e.response)},e.onerror=function(){return t.emit(\"error\",t)},e.open(\"GET\",this.imageUrl,!0),e.send()},e.prototype._loadSvgSourceUsingString=function(t){var e=(0,u.getSvgSize)(t),r=e.width,n=e.height;if(!r||!n)throw new Error(\"The SVG image must have width and height defined (in pixels), canvas API needs them.\");this.realWidth=Math.round(r*this.sourceScale),this.realHeight=Math.round(n*this.sourceScale),this.width=this.realWidth/this.resolution,this.height=this.realHeight/this.resolution,this.isPowerOfTwo=y.default.isPow2(this.realWidth)&&y.default.isPow2(this.realHeight);var i=document.createElement(\"canvas\");i.width=this.realWidth,i.height=this.realHeight,i._pixiId=\"canvas_\"+(0,u.uid)(),i.getContext(\"2d\").drawImage(this.source,0,0,r,n,0,0,this.realWidth,this.realHeight),this.origSource=this.source,this.source=i,u.BaseTextureCache[i._pixiId]=this,this.isLoading=!1,this._sourceLoaded(),this.emit(\"loaded\",this)},e.prototype._sourceLoaded=function(){this.hasLoaded=!0,this.update()},e.prototype.destroy=function(){this.imageUrl&&(delete u.BaseTextureCache[this.imageUrl],delete u.TextureCache[this.imageUrl],this.imageUrl=null,navigator.isCocoonJS||(this.source.src=\"\")),this.source&&this.source._pixiId&&delete u.BaseTextureCache[this.source._pixiId],this.source=null,this.dispose()},e.prototype.dispose=function(){this.emit(\"dispose\",this)},e.prototype.updateSourceImage=function(t){this.source.src=t,this.loadSource(this.source)},e.fromImage=function(t,r,n,i){var o=u.BaseTextureCache[t];if(!o){var s=new Image;void 0===r&&0!==t.indexOf(\"data:\")&&(s.crossOrigin=(0,p.default)(t)),o=new e(s,n),o.imageUrl=t,i&&(o.sourceScale=i),o.resolution=(0,u.getResolutionOfUrl)(t),s.src=t,u.BaseTextureCache[t]=o}return o},e.fromCanvas=function(t,r){t._pixiId||(t._pixiId=\"canvas_\"+(0,u.uid)());var n=u.BaseTextureCache[t._pixiId];return n||(n=new e(t,r),u.BaseTextureCache[t._pixiId]=n),n},e}(d.default);r.default=g},{\"../settings\":97,\"../utils\":117,\"../utils/determineCrossOrigin\":116,\"bit-twiddle\":1,eventemitter3:3}],108:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}function o(t,e){if(!t)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!e||\"object\"!=typeof e&&\"function\"!=typeof e?t:e}function s(t,e){if(\"function\"!=typeof e&&null!==e)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=t(\"./BaseRenderTexture\"),u=n(a),h=t(\"./Texture\"),l=n(h),c=function(t){function e(r,n){i(this,e);var s=null;if(!(r instanceof u.default)){var a=arguments[1],h=arguments[2],l=arguments[3]||0,c=arguments[4]||1;console.warn(\"Please use RenderTexture.create(\"+a+\", \"+h+\") instead of the ctor directly.\"),s=arguments[0],n=null,r=new u.default(a,h,l,c)}var d=o(this,t.call(this,r,n));return d.legacyRenderer=s,d.valid=!0,d._updateUvs(),d}return s(e,t),e.prototype.resize=function(t,e,r){this.valid=t>0&&e>0,this._frame.width=this.orig.width=t,this._frame.height=this.orig.height=e,r||this.baseTexture.resize(t,e),this._updateUvs()},e.create=function(t,r,n,i){return new e(new u.default(t,r,n,i))},e}(l.default);r.default=c},{\"./BaseRenderTexture\":106,\"./Texture\":109}],109:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}function o(t,e){if(!t)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!e||\"object\"!=typeof e&&\"function\"!=typeof e?t:e}function s(t,e){if(\"function\"!=typeof e&&null!==e)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,\"value\"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),u=t(\"./BaseTexture\"),h=n(u),l=t(\"./VideoBaseTexture\"),c=n(l),d=t(\"./TextureUvs\"),f=n(d),p=t(\"eventemitter3\"),v=n(p),y=t(\"../math\"),g=t(\"../utils\"),m=function(t){function e(r,n,s,a,u){i(this,e);var h=o(this,t.call(this));if(h.noFrame=!1,n||(h.noFrame=!0,n=new y.Rectangle(0,0,1,1)),r instanceof e&&(r=r.baseTexture),h.baseTexture=r,h._frame=n,h.trim=a,h.valid=!1,h.requiresUpdate=!1,h._uvs=null,h.orig=s||n,h._rotate=Number(u||0),u===!0)h._rotate=2;else if(h._rotate%2!==0)throw new Error(\"attempt to use diamond-shaped UVs. If you are sure, set rotation manually\");return r.hasLoaded?(h.noFrame&&(n=new y.Rectangle(0,0,r.width,r.height),r.on(\"update\",h.onBaseTextureUpdated,h)),h.frame=n):r.once(\"loaded\",h.onBaseTextureLoaded,h),h._updateID=0,h.transform=null,h}return s(e,t),e.prototype.update=function(){this.baseTexture.update()},e.prototype.onBaseTextureLoaded=function(t){this._updateID++,this.noFrame?this.frame=new y.Rectangle(0,0,t.width,t.height):this.frame=this._frame,this.baseTexture.on(\"update\",this.onBaseTextureUpdated,this),this.emit(\"update\",this)},e.prototype.onBaseTextureUpdated=function(t){this._updateID++,this._frame.width=t.width,this._frame.height=t.height,this.emit(\"update\",this)},e.prototype.destroy=function(t){this.baseTexture&&(t&&(g.TextureCache[this.baseTexture.imageUrl]&&delete g.TextureCache[this.baseTexture.imageUrl],this.baseTexture.destroy()),this.baseTexture.off(\"update\",this.onBaseTextureUpdated,this),this.baseTexture.off(\"loaded\",this.onBaseTextureLoaded,this),this.baseTexture=null),this._frame=null,this._uvs=null,this.trim=null,this.orig=null,this.valid=!1,this.off(\"dispose\",this.dispose,this),this.off(\"update\",this.update,this)},e.prototype.clone=function(){return new e(this.baseTexture,this.frame,this.orig,this.trim,this.rotate)},e.prototype._updateUvs=function(){this._uvs||(this._uvs=new f.default),this._uvs.set(this._frame,this.baseTexture,this.rotate),this._updateID++},e.fromImage=function(t,r,n,i){var o=g.TextureCache[t];return o||(o=new e(h.default.fromImage(t,r,n,i)),g.TextureCache[t]=o),o},e.fromFrame=function(t){var e=g.TextureCache[t];if(!e)throw new Error('The frameId \"'+t+'\" does not exist in the texture cache');return e},e.fromCanvas=function(t,r){return new e(h.default.fromCanvas(t,r))},e.fromVideo=function(t,r){return\"string\"==typeof t?e.fromVideoUrl(t,r):new e(c.default.fromVideo(t,r))},e.fromVideoUrl=function(t,r){return new e(c.default.fromUrl(t,r))},e.from=function(t){if(\"string\"==typeof t){var r=g.TextureCache[t];if(!r){var n=null!==t.match(/\\.(mp4|webm|ogg|h264|avi|mov)$/);return n?e.fromVideoUrl(t):e.fromImage(t)}return r}return t instanceof HTMLImageElement?new e(new h.default(t)):t instanceof HTMLCanvasElement?e.fromCanvas(t):t instanceof HTMLVideoElement?e.fromVideo(t):t instanceof h.default?new e(t):t},e.addTextureToCache=function(t,e){g.TextureCache[e]=t},e.removeTextureFromCache=function(t){var e=g.TextureCache[t];return delete g.TextureCache[t],delete g.BaseTextureCache[t],e},a(e,[{key:\"frame\",get:function(){return this._frame},set:function(t){if(this._frame=t,this.noFrame=!1,t.x+t.width>this.baseTexture.width||t.y+t.height>this.baseTexture.height)throw new Error(\"Texture Error: frame does not fit inside the base Texture dimensions \"+this);this.valid=t&&t.width&&t.height&&this.baseTexture.hasLoaded,this.trim||this.rotate||(this.orig=t),this.valid&&this._updateUvs()}},{key:\"rotate\",get:function(){return this._rotate},set:function(t){this._rotate=t,this.valid&&this._updateUvs()}},{key:\"width\",get:function(){return this.orig?this.orig.width:0}},{key:\"height\",get:function(){return this.orig?this.orig.height:0}}]),e}(v.default);r.default=m,m.EMPTY=new m(new h.default),m.EMPTY.destroy=function(){},m.EMPTY.on=function(){},m.EMPTY.once=function(){},m.EMPTY.emit=function(){}},{\"../math\":66,\"../utils\":117,\"./BaseTexture\":107,\"./TextureUvs\":110,\"./VideoBaseTexture\":111,eventemitter3:3}],110:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}r.__esModule=!0;var o=t(\"../math/GroupD8\"),s=n(o),a=function(){function t(){i(this,t),this.x0=0,this.y0=0,this.x1=1,this.y1=0,this.x2=1,this.y2=1,this.x3=0,this.y3=1,this.uvsUint32=new Uint32Array(4)}return t.prototype.set=function(t,e,r){var n=e.width,i=e.height;if(r){var o=t.width/2/n,a=t.height/2/i,u=t.x/n+o,h=t.y/i+a;r=s.default.add(r,s.default.NW),this.x0=u+o*s.default.uX(r),this.y0=h+a*s.default.uY(r),r=s.default.add(r,2),this.x1=u+o*s.default.uX(r),this.y1=h+a*s.default.uY(r),r=s.default.add(r,2),this.x2=u+o*s.default.uX(r),this.y2=h+a*s.default.uY(r),r=s.default.add(r,2),this.x3=u+o*s.default.uX(r),this.y3=h+a*s.default.uY(r)}else this.x0=t.x/n,this.y0=t.y/i,this.x1=(t.x+t.width)/n,this.y1=t.y/i,this.x2=(t.x+t.width)/n,this.y2=(t.y+t.height)/i,this.x3=t.x/n,this.y3=(t.y+t.height)/i;this.uvsUint32[0]=(65535*this.y0&65535)<<16|65535*this.x0&65535,this.uvsUint32[1]=(65535*this.y1&65535)<<16|65535*this.x1&65535,this.uvsUint32[2]=(65535*this.y2&65535)<<16|65535*this.x2&65535,this.uvsUint32[3]=(65535*this.y3&65535)<<16|65535*this.x3&65535},t}();r.default=a},{\"../math/GroupD8\":62}],111:[function(t,e,r){\"use strict\";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function i(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}function s(t,e){if(!t)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!e||\"object\"!=typeof e&&\"function\"!=typeof e?t:e}function a(t,e){if(\"function\"!=typeof e&&null!==e)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function u(t,e){e||(e=\"video/\"+t.substr(t.lastIndexOf(\".\")+1));var r=document.createElement(\"source\");return r.src=t,r.type=e,r}r.__esModule=!0;var h=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,\"value\"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),l=t(\"./BaseTexture\"),c=i(l),d=t(\"../utils\"),f=t(\"../ticker\"),p=n(f),v=function(t){function e(r,n){if(o(this,e),!r)throw new Error(\"No video source element specified.\");(r.readyState===r.HAVE_ENOUGH_DATA||r.readyState===r.HAVE_FUTURE_DATA)&&r.width&&r.height&&(r.complete=!0);var i=s(this,t.call(this,r,n));return i.width=r.videoWidth,i.height=r.videoHeight,i._autoUpdate=!0,i._isAutoUpdating=!1,i.autoPlay=!0,i.update=i.update.bind(i),i._onCanPlay=i._onCanPlay.bind(i),r.addEventListener(\"play\",i._onPlayStart.bind(i)),r.addEventListener(\"pause\",i._onPlayStop.bind(i)),i.hasLoaded=!1,i.__loaded=!1,i._isSourceReady()?i._onCanPlay():(r.addEventListener(\"canplay\",i._onCanPlay),r.addEventListener(\"canplaythrough\",i._onCanPlay)),i}return a(e,t),e.prototype._isSourcePlaying=function(){var t=this.source;return t.currentTime>0&&t.paused===!1&&t.ended===!1&&t.readyState>2},e.prototype._isSourceReady=function(){return 3===this.source.readyState||4===this.source.readyState},e.prototype._onPlayStart=function(){this.hasLoaded||this._onCanPlay(),!this._isAutoUpdating&&this.autoUpdate&&(p.shared.add(this.update,this),this._isAutoUpdating=!0)},e.prototype._onPlayStop=function(){this._isAutoUpdating&&(p.shared.remove(this.update,this),this._isAutoUpdating=!1)},e.prototype._onCanPlay=function(){this.hasLoaded=!0,this.source&&(this.source.removeEventListener(\"canplay\",this._onCanPlay),this.source.removeEventListener(\"canplaythrough\",this._onCanPlay),this.width=this.source.videoWidth,this.height=this.source.videoHeight,this.__loaded||(this.__loaded=!0,this.emit(\"loaded\",this)),this._isSourcePlaying()?this._onPlayStart():this.autoPlay&&this.source.play())},e.prototype.destroy=function(){this._isAutoUpdating&&p.shared.remove(this.update,this),this.source&&this.source._pixiId&&(delete d.BaseTextureCache[this.source._pixiId],delete this.source._pixiId),t.prototype.destroy.call(this)},e.fromVideo=function(t,r){t._pixiId||(t._pixiId=\"video_\"+(0,d.uid)());var n=d.BaseTextureCache[t._pixiId];return n||(n=new e(t,r),d.BaseTextureCache[t._pixiId]=n),n},e.fromUrl=function(t,r){var n=document.createElement(\"video\");if(n.setAttribute(\"webkit-playsinline\",\"\"),n.setAttribute(\"playsinline\",\"\"),Array.isArray(t))for(var i=0;i<t.length;++i)n.appendChild(u(t[i].src||t[i],t[i].mime));else n.appendChild(u(t.src||t,t.mime));return n.load(),e.fromVideo(n,r)},h(e,[{key:\"autoUpdate\",get:function(){return this._autoUpdate},set:function(t){t!==this._autoUpdate&&(this._autoUpdate=t,!this._autoUpdate&&this._isAutoUpdating?(p.shared.remove(this.update,this),this._isAutoUpdating=!1):this._autoUpdate&&!this._isAutoUpdating&&(p.shared.add(this.update,this),this._isAutoUpdating=!0))}}]),e}(c.default);r.default=v,v.fromUrls=v.fromUrl},{\"../ticker\":113,\"../utils\":117,\"./BaseTexture\":107}],112:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}r.__esModule=!0;var o=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,\"value\"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),s=t(\"../settings\"),a=n(s),u=t(\"eventemitter3\"),h=n(u),l=\"tick\",c=function(){function t(){var e=this;i(this,t),this._emitter=new h.default,this._requestId=null,this._maxElapsedMS=100,this.autoStart=!1,this.deltaTime=1,this.elapsedMS=1/a.default.TARGET_FPMS,this.lastTime=0,this.speed=1,this.started=!1,this._tick=function(t){e._requestId=null,e.started&&(e.update(t),e.started&&null===e._requestId&&e._emitter.listeners(l,!0)&&(e._requestId=requestAnimationFrame(e._tick)))}}return t.prototype._requestIfNeeded=function(){null===this._requestId&&this._emitter.listeners(l,!0)&&(this.lastTime=performance.now(),this._requestId=requestAnimationFrame(this._tick))},t.prototype._cancelIfNeeded=function(){null!==this._requestId&&(cancelAnimationFrame(this._requestId),this._requestId=null)},t.prototype._startIfPossible=function(){this.started?this._requestIfNeeded():this.autoStart&&this.start()},t.prototype.add=function(t,e){return this._emitter.on(l,t,e),this._startIfPossible(),this},t.prototype.addOnce=function(t,e){return this._emitter.once(l,t,e),this._startIfPossible(),this},t.prototype.remove=function(t,e){return this._emitter.off(l,t,e),this._emitter.listeners(l,!0)||this._cancelIfNeeded(),this},t.prototype.start=function(){this.started||(this.started=!0,this._requestIfNeeded())},t.prototype.stop=function(){this.started&&(this.started=!1,this._cancelIfNeeded())},t.prototype.update=function(){var t=arguments.length<=0||void 0===arguments[0]?performance.now():arguments[0],e=void 0;t>this.lastTime?(e=this.elapsedMS=t-this.lastTime,e>this._maxElapsedMS&&(e=this._maxElapsedMS),this.deltaTime=e*a.default.TARGET_FPMS*this.speed,this._emitter.emit(l,this.deltaTime)):this.deltaTime=this.elapsedMS=0,this.lastTime=t},o(t,[{key:\"FPS\",get:function(){return 1e3/this.elapsedMS}},{key:\"minFPS\",get:function(){return 1e3/this._maxElapsedMS},set:function(t){var e=Math.min(Math.max(0,t)/1e3,a.default.TARGET_FPMS);this._maxElapsedMS=1/e}}]),t}();r.default=c},{\"../settings\":97,eventemitter3:3}],113:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}r.__esModule=!0,r.Ticker=r.shared=void 0;var i=t(\"./Ticker\"),o=n(i),s=new o.default;s.autoStart=!0,r.shared=s,r.Ticker=o.default},{\"./Ticker\":112}],114:[function(t,e,r){\"use strict\";function n(){var t=!!navigator.platform&&/iPad|iPhone|iPod/.test(navigator.platform);return!t}r.__esModule=!0,r.default=n},{}],115:[function(t,e,r){\"use strict\";function n(t){for(var e=6*t,r=new Uint16Array(e),n=0,i=0;n<e;n+=6,i+=4)r[n+0]=i+0,r[n+1]=i+1,r[n+2]=i+2,r[n+3]=i+0,r[n+4]=i+2,r[n+5]=i+3;return r}r.__esModule=!0,r.default=n},{}],116:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}function i(t){var e=arguments.length<=1||void 0===arguments[1]?window.location:arguments[1];if(0===t.indexOf(\"data:\"))return\"\";e=e||window.location,a||(a=document.createElement(\"a\")),a.href=t,t=s.default.parse(a.href);var r=!t.port&&\"\"===e.port||t.port===e.port;return t.hostname===e.hostname&&r&&t.protocol===e.protocol?\"\":\"anonymous\"}r.__esModule=!0,r.default=i;var o=t(\"url\"),s=n(o),a=void 0},{url:28}],117:[function(t,e,r){\"use strict\";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function i(t){return t&&t.__esModule?t:{default:t}}function o(){return++M}function s(t,e){return e=e||[],e[0]=(t>>16&255)/255,e[1]=(t>>8&255)/255,e[2]=(255&t)/255,e}function a(t){return t=t.toString(16),t=\"000000\".substr(0,6-t.length)+t,\"#\"+t}function u(t){return(255*t[0]<<16)+(255*t[1]<<8)+255*t[2]}function h(t){var e=b.default.RETINA_PREFIX.exec(t);return e?parseFloat(e[1]):1}function l(t){var e=m.DATA_URI.exec(t);if(e)return{mediaType:e[1]?e[1].toLowerCase():void 0,subType:e[2]?e[2].toLowerCase():void 0,encoding:e[3]?e[3].toLowerCase():void 0,data:e[4]}}function c(t){var e=m.URL_FILE_EXTENSION.exec(t);if(e)return e[1].toLowerCase()}function d(t){var e=m.SVG_SIZE.exec(t),r={};return e&&(r[e[1]]=Math.round(parseFloat(e[3])),r[e[5]]=Math.round(parseFloat(e[7]))),r}function f(){P=!0}function p(t){if(!P){if(navigator.userAgent.toLowerCase().indexOf(\"chrome\")>-1){var e=[\"\\n %c %c %c Pixi.js \"+m.VERSION+\" - ✰ \"+t+\" ✰  %c  %c  http://www.pixijs.com/  %c %c ♥%c♥%c♥ \\n\\n\",\"background: #ff66a5; padding:5px 0;\",\"background: #ff66a5; padding:5px 0;\",\"color: #ff66a5; background: #030307; padding:5px 0;\",\"background: #ff66a5; padding:5px 0;\",\"background: #ffc3dc; padding:5px 0;\",\"background: #ff66a5; padding:5px 0;\",\"color: #ff2424; background: #fff; padding:5px 0;\",\"color: #ff2424; background: #fff; padding:5px 0;\",\"color: #ff2424; background: #fff; padding:5px 0;\"];window.console.log.apply(console,e)}else window.console&&window.console.log(\"Pixi.js \"+m.VERSION+\" - \"+t+\" - http://www.pixijs.com/\");P=!0}}function v(){var t={stencil:!0,failIfMajorPerformanceCaveat:!0};try{if(!window.WebGLRenderingContext)return!1;var e=document.createElement(\"canvas\"),r=e.getContext(\"webgl\",t)||e.getContext(\"experimental-webgl\",t),n=!(!r||!r.getContextAttributes().stencil);if(r){var i=r.getExtension(\"WEBGL_lose_context\");i&&i.loseContext()}return r=null,n}catch(t){return!1}}function y(t){return 0===t?0:t<0?-1:1}function g(t,e,r){var n=t.length;if(!(e>=n||0===r)){r=e+r>n?n-e:r;for(var i=n-r,o=e;o<i;++o)t[o]=t[o+r];t.length=i}}r.__esModule=!0,r.BaseTextureCache=r.TextureCache=r.pluginTarget=r.EventEmitter=r.isMobile=void 0,r.uid=o,r.hex2rgb=s,r.hex2string=a,r.rgb2hex=u,r.getResolutionOfUrl=h,r.decomposeDataUri=l,r.getUrlFileExtension=c,r.getSvgSize=d,r.skipHello=f,r.sayHello=p,r.isWebGLSupported=v,r.sign=y,r.removeItems=g;var m=t(\"../const\"),_=t(\"../settings\"),b=i(_),x=t(\"eventemitter3\"),T=i(x),w=t(\"./pluginTarget\"),E=i(w),O=t(\"ismobilejs\"),S=n(O),M=0,P=!1;r.isMobile=S,r.EventEmitter=T.default,r.pluginTarget=E.default;r.TextureCache={},r.BaseTextureCache={}},{\"../const\":42,\"../settings\":97,\"./pluginTarget\":119,eventemitter3:3,ismobilejs:4}],118:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}function i(t){return s.default.tablet||s.default.phone?4:t}r.__esModule=!0,r.default=i;var o=t(\"ismobilejs\"),s=n(o)},{ismobilejs:4}],119:[function(t,e,r){\"use strict\";function n(t){t.__plugins={},t.registerPlugin=function(e,r){t.__plugins[e]=r},t.prototype.initPlugins=function(){this.plugins=this.plugins||{};for(var e in t.__plugins)this.plugins[e]=new t.__plugins[e](this)},t.prototype.destroyPlugins=function(){for(var t in this.plugins)this.plugins[t].destroy(),this.plugins[t]=null;this.plugins=null}}r.__esModule=!0,r.default={mixin:function(t){n(t)}}},{}],120:[function(t,e,r){\"use strict\";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function i(t){}var o=t(\"./core\"),s=n(o),a=t(\"./mesh\"),u=n(a),h=t(\"./particles\"),l=n(h),c=t(\"./extras\"),d=n(c),f=t(\"./filters\"),p=n(f),v=t(\"./prepare\"),y=n(v);s.SpriteBatch=function(){throw new ReferenceError(\"SpriteBatch does not exist any more, please use the new ParticleContainer instead.\")},s.AssetLoader=function(){throw new ReferenceError(\"The loader system was overhauled in pixi v3, please see the new PIXI.loaders.Loader class.\")},Object.defineProperties(s,{Stage:{enumerable:!0,get:function(){return i(\"You do not need to use a PIXI Stage any more, you can simply render any container.\"),s.Container}},DisplayObjectContainer:{enumerable:!0,get:function(){return i(\"DisplayObjectContainer has been shortened to Container, please use Container from now on.\"),s.Container}},Strip:{enumerable:!0,get:function(){return i(\"The Strip class has been renamed to Mesh and moved to mesh.Mesh, please use mesh.Mesh from now on.\"),u.Mesh}},Rope:{enumerable:!0,get:function(){return i(\"The Rope class has been moved to mesh.Rope, please use mesh.Rope from now on.\"),u.Rope}},ParticleContainer:{enumerable:!0,get:function(){return i(\"The ParticleContainer class has been moved to particles.ParticleContainer, please use particles.ParticleContainer from now on.\"),l.ParticleContainer}},MovieClip:{enumerable:!0,get:function(){return i(\"The MovieClip class has been moved to extras.AnimatedSprite, please use extras.AnimatedSprite.\"),d.AnimatedSprite}},TilingSprite:{enumerable:!0,get:function(){return i(\"The TilingSprite class has been moved to extras.TilingSprite, please use extras.TilingSprite from now on.\"),d.TilingSprite}},BitmapText:{enumerable:!0,get:function(){return i(\"The BitmapText class has been moved to extras.BitmapText, please use extras.BitmapText from now on.\"),d.BitmapText}},blendModes:{enumerable:!0,get:function(){return i(\"The blendModes has been moved to BLEND_MODES, please use BLEND_MODES from now on.\"),s.BLEND_MODES}},scaleModes:{enumerable:!0,get:function(){return i(\"The scaleModes has been moved to SCALE_MODES, please use SCALE_MODES from now on.\"),s.SCALE_MODES}},BaseTextureCache:{enumerable:!0,get:function(){return i(\"The BaseTextureCache class has been moved to utils.BaseTextureCache, please use utils.BaseTextureCache from now on.\"),s.utils.BaseTextureCache}},TextureCache:{enumerable:!0,get:function(){return i(\"The TextureCache class has been moved to utils.TextureCache, please use utils.TextureCache from now on.\"),s.utils.TextureCache}},math:{enumerable:!0,get:function(){return i(\"The math namespace is deprecated, please access members already accessible on PIXI.\"),s}},AbstractFilter:{enumerable:!0,get:function(){return i(\"AstractFilter has been renamed to Filter, please use PIXI.Filter\"),s.Filter}},TransformManual:{enumerable:!0,get:function(){return i(\"TransformManual has been renamed to TransformBase, please update your pixi-spine\"),s.TransformBase}},TARGET_FPMS:{enumerable:!0,get:function(){return i(\"PIXI.TARGET_FPMS has been deprecated, please use PIXI.settings.TARGET_FPMS\"),s.settings.TARGET_FPMS},set:function(t){i(\"PIXI.TARGET_FPMS has been deprecated, please use PIXI.settings.TARGET_FPMS\"),s.settings.TARGET_FPMS=t}},FILTER_RESOLUTION:{enumerable:!0,get:function(){return i(\"PIXI.FILTER_RESOLUTION has been deprecated, please use PIXI.settings.FILTER_RESOLUTION\"),s.settings.FILTER_RESOLUTION},set:function(t){i(\"PIXI.FILTER_RESOLUTION has been deprecated, please use PIXI.settings.FILTER_RESOLUTION\"),s.settings.FILTER_RESOLUTION=t}},RESOLUTION:{enumerable:!0,get:function(){return i(\"PIXI.RESOLUTION has been deprecated, please use PIXI.settings.RESOLUTION\"),s.settings.RESOLUTION},set:function(t){i(\"PIXI.RESOLUTION has been deprecated, please use PIXI.settings.RESOLUTION\"),s.settings.RESOLUTION=t}},MIPMAP_TEXTURES:{enumerable:!0,get:function(){return i(\"PIXI.MIPMAP_TEXTURES has been deprecated, please use PIXI.settings.MIPMAP_TEXTURES\"),s.settings.MIPMAP_TEXTURES},set:function(t){i(\"PIXI.MIPMAP_TEXTURES has been deprecated, please use PIXI.settings.MIPMAP_TEXTURES\"),s.settings.MIPMAP_TEXTURES=t}},SPRITE_BATCH_SIZE:{enumerable:!0,get:function(){return i(\"PIXI.SPRITE_BATCH_SIZE has been deprecated, please use PIXI.settings.SPRITE_BATCH_SIZE\"),s.settings.SPRITE_BATCH_SIZE},set:function(t){i(\"PIXI.SPRITE_BATCH_SIZE has been deprecated, please use PIXI.settings.SPRITE_BATCH_SIZE\"),s.settings.SPRITE_BATCH_SIZE=t}},SPRITE_MAX_TEXTURES:{enumerable:!0,get:function(){return i(\"PIXI.SPRITE_MAX_TEXTURES has been deprecated, please use PIXI.settings.SPRITE_MAX_TEXTURES\"),s.settings.SPRITE_MAX_TEXTURES},set:function(t){i(\"PIXI.SPRITE_MAX_TEXTURES has been deprecated, please use PIXI.settings.SPRITE_MAX_TEXTURES\"),s.settings.SPRITE_MAX_TEXTURES=t}},RETINA_PREFIX:{enumerable:!0,get:function(){return i(\"PIXI.RETINA_PREFIX has been deprecated, please use PIXI.settings.RETINA_PREFIX\"),s.settings.RETINA_PREFIX},set:function(t){i(\"PIXI.RETINA_PREFIX has been deprecated, please use PIXI.settings.RETINA_PREFIX\"),s.settings.RETINA_PREFIX=t}},DEFAULT_RENDER_OPTIONS:{enumerable:!0,get:function(){return i(\"PIXI.DEFAULT_RENDER_OPTIONS has been deprecated, please use PIXI.settings.DEFAULT_RENDER_OPTIONS\"),s.settings.RENDER_OPTIONS}}});for(var g=[{parent:\"TRANSFORM_MODE\",target:\"TRANSFORM_MODE\"},{parent:\"GC_MODES\",target:\"GC_MODE\"},{parent:\"WRAP_MODES\",target:\"WRAP_MODE\"},{parent:\"SCALE_MODES\",target:\"SCALE_MODE\"},{parent:\"PRECISION\",target:\"PRECISION\"}],m=function(t){var e=g[t];Object.defineProperty(s[e.parent],\"DEFAULT\",{enumerable:!0,get:function(){return i(\"PIXI.\"+e.parent+\".DEFAULT has been deprecated, please use PIXI.settings.\"+e.target),s.settings[e.target]},set:function(t){i(\"PIXI.\"+e.parent+\".DEFAULT has been deprecated, please use PIXI.settings.\"+e.target),s.settings[e.target]=t}})},_=0;_<g.length;_++)m(_);Object.defineProperties(d,{MovieClip:{enumerable:!0,get:function(){return i(\"The MovieClip class has been renamed to AnimatedSprite, please use AnimatedSprite from now on.\"),d.AnimatedSprite}}}),s.DisplayObject.prototype.generateTexture=function(t,e,r){return i(\"generateTexture has moved to the renderer, please use renderer.generateTexture(displayObject)\"),t.generateTexture(this,e,r);\n},s.Graphics.prototype.generateTexture=function(t,e){return i(\"graphics generate texture has moved to the renderer. Or to render a graphics to a texture using canvas please use generateCanvasTexture\"),this.generateCanvasTexture(t,e)},s.RenderTexture.prototype.render=function(t,e,r,n){this.legacyRenderer.render(t,this,r,e,!n),i(\"RenderTexture.render is now deprecated, please use renderer.render(displayObject, renderTexture)\")},s.RenderTexture.prototype.getImage=function(t){return i(\"RenderTexture.getImage is now deprecated, please use renderer.extract.image(target)\"),this.legacyRenderer.extract.image(t)},s.RenderTexture.prototype.getBase64=function(t){return i(\"RenderTexture.getBase64 is now deprecated, please use renderer.extract.base64(target)\"),this.legacyRenderer.extract.base64(t)},s.RenderTexture.prototype.getCanvas=function(t){return i(\"RenderTexture.getCanvas is now deprecated, please use renderer.extract.canvas(target)\"),this.legacyRenderer.extract.canvas(t)},s.RenderTexture.prototype.getPixels=function(t){return i(\"RenderTexture.getPixels is now deprecated, please use renderer.extract.pixels(target)\"),this.legacyRenderer.pixels(t)},s.Sprite.prototype.setTexture=function(t){this.texture=t,i(\"setTexture is now deprecated, please use the texture property, e.g : sprite.texture = texture;\")},d.BitmapText.prototype.setText=function(t){this.text=t,i(\"setText is now deprecated, please use the text property, e.g : myBitmapText.text = 'my text';\")},s.Text.prototype.setText=function(t){this.text=t,i(\"setText is now deprecated, please use the text property, e.g : myText.text = 'my text';\")},s.Text.prototype.setStyle=function(t){this.style=t,i(\"setStyle is now deprecated, please use the style property, e.g : myText.style = style;\")},s.Text.prototype.determineFontProperties=function(t){return i(\"determineFontProperties is now deprecated, please use the static calculateFontProperties method, e.g : Text.calculateFontProperties(fontStyle);\"),Text.calculateFontProperties(t)},Object.defineProperties(s.TextStyle.prototype,{font:{get:function(){i(\"text style property 'font' is now deprecated, please use the 'fontFamily', 'fontSize', 'fontStyle', 'fontVariant' and 'fontWeight' properties from now on\");var t=\"number\"==typeof this._fontSize?this._fontSize+\"px\":this._fontSize;return this._fontStyle+\" \"+this._fontVariant+\" \"+this._fontWeight+\" \"+t+\" \"+this._fontFamily},set:function(t){i(\"text style property 'font' is now deprecated, please use the 'fontFamily','fontSize',fontStyle','fontVariant' and 'fontWeight' properties from now on\"),t.indexOf(\"italic\")>1?this._fontStyle=\"italic\":t.indexOf(\"oblique\")>-1?this._fontStyle=\"oblique\":this._fontStyle=\"normal\",t.indexOf(\"small-caps\")>-1?this._fontVariant=\"small-caps\":this._fontVariant=\"normal\";var e=t.split(\" \"),r=-1;this._fontSize=26;for(var n=0;n<e.length;++n)if(e[n].match(/(px|pt|em|%)/)){r=n,this._fontSize=e[n];break}this._fontWeight=\"normal\";for(var o=0;o<r;++o)if(e[o].match(/(bold|bolder|lighter|100|200|300|400|500|600|700|800|900)/)){this._fontWeight=e[o];break}if(r>-1&&r<e.length-1){this._fontFamily=\"\";for(var s=r+1;s<e.length;++s)this._fontFamily+=e[s]+\" \";this._fontFamily=this._fontFamily.slice(0,-1)}else this._fontFamily=\"Arial\";this.styleID++}}}),s.Texture.prototype.setFrame=function(t){this.frame=t,i(\"setFrame is now deprecated, please use the frame property, e.g: myTexture.frame = frame;\")},Object.defineProperties(p,{AbstractFilter:{get:function(){return i(\"AstractFilter has been renamed to Filter, please use PIXI.Filter\"),s.AbstractFilter}},SpriteMaskFilter:{get:function(){return i(\"filters.SpriteMaskFilter is an undocumented alias, please use SpriteMaskFilter from now on.\"),s.SpriteMaskFilter}}}),s.utils.uuid=function(){return i(\"utils.uuid() is deprecated, please use utils.uid() from now on.\"),s.utils.uid()},s.utils.canUseNewCanvasBlendModes=function(){return i(\"utils.canUseNewCanvasBlendModes() is deprecated, please use CanvasTinter.canUseMultiply from now on\"),s.CanvasTinter.canUseMultiply};var b=!0;Object.defineProperty(s.utils,\"_saidHello\",{set:function(t){t&&(i(\"PIXI.utils._saidHello is deprecated, please use PIXI.utils.skipHello()\"),this.skipHello()),b=t},get:function(){return b}}),Object.defineProperty(y.canvas,\"UPLOADS_PER_FRAME\",{set:function(){i(\"PIXI.CanvasPrepare.UPLOADS_PER_FRAME has been removed. Please set renderer.plugins.prepare.limiter.maxItemsPerFrame on your renderer\")},get:function(){return i(\"PIXI.CanvasPrepare.UPLOADS_PER_FRAME has been removed. Please use renderer.plugins.prepare.limiter\"),NaN}}),Object.defineProperty(y.webgl,\"UPLOADS_PER_FRAME\",{set:function(){i(\"PIXI.WebGLPrepare.UPLOADS_PER_FRAME has been removed. Please set renderer.plugins.prepare.limiter.maxItemsPerFrame on your renderer\")},get:function(){return i(\"PIXI.WebGLPrepare.UPLOADS_PER_FRAME has been removed. Please use renderer.plugins.prepare.limiter\"),NaN}})},{\"./core\":61,\"./extras\":131,\"./filters\":142,\"./mesh\":160,\"./particles\":163,\"./prepare\":173}],121:[function(t,e,r){\"use strict\";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function i(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}r.__esModule=!0;var o=t(\"../../core\"),s=n(o),a=new s.Rectangle,u=function(){function t(e){i(this,t),this.renderer=e,e.extract=this}return t.prototype.image=function t(e){var t=new Image;return t.src=this.base64(e),t},t.prototype.base64=function(t){return this.canvas(t).toDataURL()},t.prototype.canvas=function(t){var e=this.renderer,r=void 0,n=void 0,i=void 0,o=void 0;t&&(o=t instanceof s.RenderTexture?t:e.generateTexture(t)),o?(r=o.baseTexture._canvasRenderTarget.context,n=o.baseTexture._canvasRenderTarget.resolution,i=o.frame):(r=e.rootContext,i=a,i.width=this.renderer.width,i.height=this.renderer.height);var u=i.width*n,h=i.height*n,l=new s.CanvasRenderTarget(u,h),c=r.getImageData(i.x*n,i.y*n,u,h);return l.context.putImageData(c,0,0),l.canvas},t.prototype.pixels=function(t){var e=this.renderer,r=void 0,n=void 0,i=void 0,o=void 0;return t&&(o=t instanceof s.RenderTexture?t:e.generateTexture(t)),o?(r=o.baseTexture._canvasRenderTarget.context,n=o.baseTexture._canvasRenderTarget.resolution,i=o.frame):(r=e.rootContext,i=a,i.width=e.width,i.height=e.height),r.getImageData(0,0,i.width*n,i.height*n).data},t.prototype.destroy=function(){this.renderer.extract=null,this.renderer=null},t}();r.default=u,s.CanvasRenderer.registerPlugin(\"extract\",u)},{\"../../core\":61}],122:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}r.__esModule=!0;var i=t(\"./webgl/WebGLExtract\");Object.defineProperty(r,\"webgl\",{enumerable:!0,get:function(){return n(i).default}});var o=t(\"./canvas/CanvasExtract\");Object.defineProperty(r,\"canvas\",{enumerable:!0,get:function(){return n(o).default}})},{\"./canvas/CanvasExtract\":121,\"./webgl/WebGLExtract\":123}],123:[function(t,e,r){\"use strict\";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function i(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}r.__esModule=!0;var o=t(\"../../core\"),s=n(o),a=new s.Rectangle,u=4,h=function(){function t(e){i(this,t),this.renderer=e,e.extract=this}return t.prototype.image=function t(e){var t=new Image;return t.src=this.base64(e),t},t.prototype.base64=function(t){return this.canvas(t).toDataURL()},t.prototype.canvas=function(t){var e=this.renderer,r=void 0,n=void 0,i=void 0,o=!1,h=void 0;t&&(h=t instanceof s.RenderTexture?t:this.renderer.generateTexture(t)),h?(r=h.baseTexture._glRenderTargets[this.renderer.CONTEXT_UID],n=r.resolution,i=h.frame,o=!1):(r=this.renderer.rootRenderTarget,n=r.resolution,o=!0,i=a,i.width=r.size.width,i.height=r.size.height);var l=i.width*n,c=i.height*n,d=new s.CanvasRenderTarget(l,c);if(r){e.bindRenderTarget(r);var f=new Uint8Array(u*l*c),p=e.gl;p.readPixels(i.x*n,i.y*n,l,c,p.RGBA,p.UNSIGNED_BYTE,f);var v=d.context.getImageData(0,0,l,c);v.data.set(f),d.context.putImageData(v,0,0),o&&(d.context.scale(1,-1),d.context.drawImage(d.canvas,0,-c))}return d.canvas},t.prototype.pixels=function(t){var e=this.renderer,r=void 0,n=void 0,i=void 0,o=void 0;t&&(o=t instanceof s.RenderTexture?t:this.renderer.generateTexture(t)),o?(r=o.baseTexture._glRenderTargets[this.renderer.CONTEXT_UID],n=r.resolution,i=o.frame):(r=this.renderer.rootRenderTarget,n=r.resolution,i=a,i.width=r.size.width,i.height=r.size.height);var h=i.width*n,l=i.height*n,c=new Uint8Array(u*h*l);if(r){e.bindRenderTarget(r);var d=e.gl;d.readPixels(i.x*n,i.y*n,h,l,d.RGBA,d.UNSIGNED_BYTE,c)}return c},t.prototype.destroy=function(){this.renderer.extract=null,this.renderer=null},t}();r.default=h,s.WebGLRenderer.registerPlugin(\"extract\",h)},{\"../../core\":61}],124:[function(t,e,r){\"use strict\";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function i(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}function o(t,e){if(!t)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!e||\"object\"!=typeof e&&\"function\"!=typeof e?t:e}function s(t,e){if(\"function\"!=typeof e&&null!==e)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,\"value\"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),u=t(\"../core\"),h=n(u),l=function(t){function e(r){i(this,e);var n=o(this,t.call(this,r[0]instanceof h.Texture?r[0]:r[0].texture));return n._textures=null,n._durations=null,n.textures=r,n.animationSpeed=1,n.loop=!0,n.onComplete=null,n.onFrameChange=null,n._currentTime=0,n.playing=!1,n}return s(e,t),e.prototype.stop=function(){this.playing&&(this.playing=!1,h.ticker.shared.remove(this.update,this))},e.prototype.play=function(){this.playing||(this.playing=!0,h.ticker.shared.add(this.update,this))},e.prototype.gotoAndStop=function(t){this.stop();var e=this.currentFrame;this._currentTime=t,e!==this.currentFrame&&this.updateTexture()},e.prototype.gotoAndPlay=function(t){var e=this.currentFrame;this._currentTime=t,e!==this.currentFrame&&this.updateTexture(),this.play()},e.prototype.update=function(t){var e=this.animationSpeed*t,r=this.currentFrame;if(null!==this._durations){var n=this._currentTime%1*this._durations[this.currentFrame];for(n+=e/60*1e3;n<0;)this._currentTime--,n+=this._durations[this.currentFrame];var i=Math.sign(this.animationSpeed*t);for(this._currentTime=Math.floor(this._currentTime);n>=this._durations[this.currentFrame];)n-=this._durations[this.currentFrame]*i,this._currentTime+=i;this._currentTime+=n/this._durations[this.currentFrame]}else this._currentTime+=e;this._currentTime<0&&!this.loop?(this.gotoAndStop(0),this.onComplete&&this.onComplete()):this._currentTime>=this._textures.length&&!this.loop?(this.gotoAndStop(this._textures.length-1),this.onComplete&&this.onComplete()):r!==this.currentFrame&&this.updateTexture()},e.prototype.updateTexture=function(){this._texture=this._textures[this.currentFrame],this._textureID=-1,this.onFrameChange&&this.onFrameChange(this.currentFrame)},e.prototype.destroy=function(){this.stop(),t.prototype.destroy.call(this)},e.fromFrames=function(t){for(var r=[],n=0;n<t.length;++n)r.push(h.Texture.fromFrame(t[n]));return new e(r)},e.fromImages=function(t){for(var r=[],n=0;n<t.length;++n)r.push(h.Texture.fromImage(t[n]));return new e(r)},a(e,[{key:\"totalFrames\",get:function(){return this._textures.length}},{key:\"textures\",get:function(){return this._textures},set:function(t){if(t[0]instanceof h.Texture)this._textures=t,this._durations=null;else{this._textures=[],this._durations=[];for(var e=0;e<t.length;e++)this._textures.push(t[e].texture),this._durations.push(t[e].time)}}},{key:\"currentFrame\",get:function(){var t=Math.floor(this._currentTime)%this._textures.length;return t<0&&(t+=this._textures.length),t}}]),e}(h.Sprite);r.default=l},{\"../core\":61}],125:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}function i(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function o(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}function s(t,e){if(!t)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!e||\"object\"!=typeof e&&\"function\"!=typeof e?t:e}function a(t,e){if(\"function\"!=typeof e&&null!==e)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var u=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,\"value\"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),h=t(\"../core\"),l=i(h),c=t(\"../core/math/ObservablePoint\"),d=n(c),f=function(t){function e(r){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];o(this,e);var i=s(this,t.call(this));return i.textWidth=0,i.textHeight=0,i._glyphs=[],i._font={tint:void 0!==n.tint?n.tint:16777215,align:n.align||\"left\",name:null,size:0},i.font=n.font,i._text=r,i.maxWidth=0,i.maxLineHeight=0,i._anchor=new d.default(function(){i.dirty=!0},i,0,0),i.dirty=!1,i.updateText(),i}return a(e,t),e.prototype.updateText=function(){for(var t=e.fonts[this._font.name],r=this._font.size/t.size,n=new l.Point,i=[],o=[],s=null,a=0,u=0,h=0,c=-1,d=0,f=0,p=0;p<this.text.length;p++){var v=this.text.charCodeAt(p);if(/(\\s)/.test(this.text.charAt(p))&&(c=p,d=a),/(?:\\r\\n|\\r|\\n)/.test(this.text.charAt(p)))o.push(a),u=Math.max(u,a),h++,n.x=0,n.y+=t.lineHeight,s=null;else if(c!==-1&&this.maxWidth>0&&n.x*r>this.maxWidth)l.utils.removeItems(i,c,p-c),p=c,c=-1,o.push(d),u=Math.max(u,d),h++,n.x=0,n.y+=t.lineHeight,s=null;else{var y=t.chars[v];y&&(s&&y.kerning[s]&&(n.x+=y.kerning[s]),i.push({texture:y.texture,line:h,charCode:v,position:new l.Point(n.x+y.xOffset,n.y+y.yOffset)}),a=n.x+(y.texture.width+y.xOffset),n.x+=y.xAdvance,f=Math.max(f,y.yOffset+y.texture.height),s=v)}}o.push(a),u=Math.max(u,a);for(var g=[],m=0;m<=h;m++){var _=0;\"right\"===this._font.align?_=u-o[m]:\"center\"===this._font.align&&(_=(u-o[m])/2),g.push(_)}for(var b=i.length,x=this.tint,T=0;T<b;T++){var w=this._glyphs[T];w?w.texture=i[T].texture:(w=new l.Sprite(i[T].texture),this._glyphs.push(w)),w.position.x=(i[T].position.x+g[i[T].line])*r,w.position.y=i[T].position.y*r,w.scale.x=w.scale.y=r,w.tint=x,w.parent||this.addChild(w)}for(var E=b;E<this._glyphs.length;++E)this.removeChild(this._glyphs[E]);if(this.textWidth=u*r,this.textHeight=(n.y+t.lineHeight)*r,0!==this.anchor.x||0!==this.anchor.y)for(var O=0;O<b;O++)this._glyphs[O].x-=this.textWidth*this.anchor.x,this._glyphs[O].y-=this.textHeight*this.anchor.y;this.maxLineHeight=f*r},e.prototype.updateTransform=function(){this.validate(),this.containerUpdateTransform()},e.prototype.getLocalBounds=function(){return this.validate(),t.prototype.getLocalBounds.call(this)},e.prototype.validate=function(){this.dirty&&(this.updateText(),this.dirty=!1)},u(e,[{key:\"tint\",get:function(){return this._font.tint},set:function(t){this._font.tint=\"number\"==typeof t&&t>=0?t:16777215,this.dirty=!0}},{key:\"align\",get:function(){return this._font.align},set:function(t){this._font.align=t||\"left\",this.dirty=!0}},{key:\"anchor\",get:function(){return this._anchor},set:function(t){\"number\"==typeof t?this._anchor.set(t):this._anchor.copy(t)}},{key:\"font\",get:function(){return this._font},set:function(t){t&&(\"string\"==typeof t?(t=t.split(\" \"),this._font.name=1===t.length?t[0]:t.slice(1).join(\" \"),this._font.size=t.length>=2?parseInt(t[0],10):e.fonts[this._font.name].size):(this._font.name=t.name,this._font.size=\"number\"==typeof t.size?t.size:parseInt(t.size,10)),this.dirty=!0)}},{key:\"text\",get:function(){return this._text},set:function(t){t=t.toString()||\" \",this._text!==t&&(this._text=t,this.dirty=!0)}}]),e}(l.Container);r.default=f,f.fonts={}},{\"../core\":61,\"../core/math/ObservablePoint\":64}],126:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}r.__esModule=!0;var o=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,\"value\"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),s=t(\"../core/math/Matrix\"),a=n(s),u=new a.default,h=function(){function t(e,r){i(this,t),this._texture=e,this.mapCoord=new a.default,this.uClampFrame=new Float32Array(4),this.uClampOffset=new Float32Array(2),this._lastTextureID=-1,this.clampOffset=0,this.clampMargin=\"undefined\"==typeof r?.5:r}return t.prototype.update=function(t){var e=this.texture;if(e&&e.valid&&(t||this._lastTextureID!==this.texture._updateID)){this._lastTextureID=this.texture._updateID;var r=this.texture._uvs;this.mapCoord.set(r.x1-r.x0,r.y1-r.y0,r.x3-r.x0,r.y3-r.y0,r.x0,r.y0);var n=e.orig,i=e.trim;i&&(u.set(n.width/i.width,0,0,n.height/i.height,-i.x/i.width,-i.y/i.height),this.mapCoord.append(u));var o=e.baseTexture,s=this.uClampFrame,a=this.clampMargin/o.resolution,h=this.clampOffset;s[0]=(e._frame.x+a+h)/o.width,s[1]=(e._frame.y+a+h)/o.height,s[2]=(e._frame.x+e._frame.width-a+h)/o.width,s[3]=(e._frame.y+e._frame.height-a+h)/o.height,this.uClampOffset[0]=h/o.realWidth,this.uClampOffset[1]=h/o.realHeight}},o(t,[{key:\"texture\",get:function(){return this._texture},set:function(t){this._texture=t,this._lastTextureID=-1}}]),t}();r.default=h},{\"../core/math/Matrix\":63}],127:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}function i(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function o(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}function s(t,e){if(!t)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!e||\"object\"!=typeof e&&\"function\"!=typeof e?t:e}function a(t,e){if(\"function\"!=typeof e&&null!==e)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var u=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,\"value\"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),h=t(\"../core\"),l=i(h),c=t(\"../core/sprites/canvas/CanvasTinter\"),d=n(c),f=t(\"./TextureTransform\"),p=n(f),v=new l.Point,y=function(t){function e(r){var n=arguments.length<=1||void 0===arguments[1]?100:arguments[1],i=arguments.length<=2||void 0===arguments[2]?100:arguments[2];o(this,e);var a=s(this,t.call(this,r));return a.tileTransform=new l.TransformStatic,a._width=n,a._height=i,a._canvasPattern=null,a.uvTransform=r.transform||new p.default(r),a}return a(e,t),e.prototype._onTextureUpdate=function(){this.uvTransform&&(this.uvTransform.texture=this._texture)},e.prototype._renderWebGL=function(t){var e=this._texture;e&&e.valid&&(this.tileTransform.updateLocalTransform(),this.uvTransform.update(),t.setObjectRenderer(t.plugins.tilingSprite),t.plugins.tilingSprite.render(this))},e.prototype._renderCanvas=function(t){var e=this._texture;if(e.baseTexture.hasLoaded){var r=t.context,n=this.worldTransform,i=t.resolution,o=e.baseTexture,s=e.baseTexture.resolution,a=this.tilePosition.x/this.tileScale.x%e._frame.width,u=this.tilePosition.y/this.tileScale.y%e._frame.height;if(!this._canvasPattern){var h=new l.CanvasRenderTarget(e._frame.width,e._frame.height,s);16777215!==this.tint?(this.cachedTint!==this.tint&&(this.cachedTint=this.tint,this.tintedTexture=d.default.getTintedTexture(this,this.tint)),h.context.drawImage(this.tintedTexture,0,0)):h.context.drawImage(o.source,-e._frame.x,-e._frame.y),this._canvasPattern=h.context.createPattern(h.canvas,\"repeat\")}r.globalAlpha=this.worldAlpha,r.setTransform(n.a*i,n.b*i,n.c*i,n.d*i,n.tx*i,n.ty*i),r.scale(this.tileScale.x/s,this.tileScale.y/s),r.translate(a+this.anchor.x*-this._width,u+this.anchor.y*-this._height),t.setBlendMode(this.blendMode),r.fillStyle=this._canvasPattern,r.fillRect(-a,-u,this._width/this.tileScale.x*s,this._height/this.tileScale.y*s)}},e.prototype._calculateBounds=function(){var t=this._width*-this._anchor._x,e=this._height*-this._anchor._y,r=this._width*(1-this._anchor._x),n=this._height*(1-this._anchor._y);this._bounds.addFrame(this.transform,t,e,r,n)},e.prototype.getLocalBounds=function(e){return 0===this.children.length?(this._bounds.minX=this._width*-this._anchor._x,this._bounds.minY=this._height*-this._anchor._y,this._bounds.maxX=this._width*(1-this._anchor._x),this._bounds.maxY=this._height*(1-this._anchor._x),e||(this._localBoundsRect||(this._localBoundsRect=new l.Rectangle),e=this._localBoundsRect),this._bounds.getRectangle(e)):t.prototype.getLocalBounds.call(this,e)},e.prototype.containsPoint=function(t){this.worldTransform.applyInverse(t,v);var e=this._width,r=this._height,n=-e*this.anchor._x;if(v.x>n&&v.x<n+e){var i=-r*this.anchor._y;if(v.y>i&&v.y<i+r)return!0}return!1},e.prototype.destroy=function(){t.prototype.destroy.call(this),this.tileTransform=null,this.uvTransform=null},e.from=function(t,r,n){return new e(l.Texture.from(t),r,n)},e.fromFrame=function(t,r,n){var i=l.utils.TextureCache[t];if(!i)throw new Error('The frameId \"'+t+'\" does not exist in the texture cache '+this);return new e(i,r,n)},e.fromImage=function(t,r,n,i,o){return new e(l.Texture.fromImage(t,i,o),r,n)},u(e,[{key:\"clampMargin\",get:function(){return this.uvTransform.clampMargin},set:function(t){this.uvTransform.clampMargin=t,this.uvTransform.update(!0)}},{key:\"tileScale\",get:function(){return this.tileTransform.scale},set:function(t){this.tileTransform.scale.copy(t)}},{key:\"tilePosition\",get:function(){return this.tileTransform.position},set:function(t){this.tileTransform.position.copy(t)}},{key:\"width\",get:function(){return this._width},set:function(t){this._width=t}},{key:\"height\",get:function(){return this._height},set:function(t){this._height=t}}]),e}(l.Sprite);r.default=y},{\"../core\":61,\"../core/sprites/canvas/CanvasTinter\":100,\"./TextureTransform\":126}],128:[function(t,e,r){\"use strict\";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function i(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}var o=t(\"../core\"),s=n(o),a=s.DisplayObject,u=new s.Matrix;a.prototype._cacheAsBitmap=!1,a.prototype._cacheData=!1;var h=function t(){i(this,t),this.originalRenderWebGL=null,this.originalRenderCanvas=null,this.originalCalculateBounds=null,this.originalGetLocalBounds=null,this.originalUpdateTransform=null,this.originalHitTest=null,this.originalDestroy=null,this.originalMask=null,this.originalFilterArea=null,this.sprite=null};Object.defineProperties(a.prototype,{cacheAsBitmap:{get:function(){return this._cacheAsBitmap},set:function(t){if(this._cacheAsBitmap!==t){this._cacheAsBitmap=t;var e=void 0;t?(this._cacheData||(this._cacheData=new h),e=this._cacheData,e.originalRenderWebGL=this.renderWebGL,e.originalRenderCanvas=this.renderCanvas,e.originalUpdateTransform=this.updateTransform,e.originalCalculateBounds=this._calculateBounds,e.originalGetLocalBounds=this.getLocalBounds,e.originalDestroy=this.destroy,e.originalContainsPoint=this.containsPoint,e.originalMask=this._mask,e.originalFilterArea=this.filterArea,this.renderWebGL=this._renderCachedWebGL,this.renderCanvas=this._renderCachedCanvas,this.destroy=this._cacheAsBitmapDestroy):(e=this._cacheData,e.sprite&&this._destroyCachedDisplayObject(),this.renderWebGL=e.originalRenderWebGL,this.renderCanvas=e.originalRenderCanvas,this._calculateBounds=e.originalCalculateBounds,this.getLocalBounds=e.originalGetLocalBounds,this.destroy=e.originalDestroy,this.updateTransform=e.originalUpdateTransform,this.containsPoint=e.originalContainsPoint,this._mask=e.originalMask,this.filterArea=e.originalFilterArea)}}}}),a.prototype._renderCachedWebGL=function(t){!this.visible||this.worldAlpha<=0||!this.renderable||(this._initCachedDisplayObject(t),this._cacheData.sprite._transformID=-1,this._cacheData.sprite.worldAlpha=this.worldAlpha,this._cacheData.sprite._renderWebGL(t))},a.prototype._initCachedDisplayObject=function(t){if(!this._cacheData||!this._cacheData.sprite){var e=this.alpha;this.alpha=1,t.currentRenderer.flush();var r=this.getLocalBounds().clone();if(this._filters){var n=this._filters[0].padding;r.pad(n)}var i=t._activeRenderTarget,o=t.filterManager.filterStack,a=s.RenderTexture.create(0|r.width,0|r.height),h=u;h.tx=-r.x,h.ty=-r.y,this.transform.worldTransform.identity(),this.renderWebGL=this._cacheData.originalRenderWebGL,t.render(this,a,!0,h,!0),t.bindRenderTarget(i),t.filterManager.filterStack=o,this.renderWebGL=this._renderCachedWebGL,this.updateTransform=this.displayObjectUpdateTransform,this._mask=null,this.filterArea=null;var l=new s.Sprite(a);l.transform.worldTransform=this.transform.worldTransform,l.anchor.x=-(r.x/r.width),l.anchor.y=-(r.y/r.height),l.alpha=e,l._bounds=this._bounds,this._calculateBounds=this._calculateCachedBounds,this.getLocalBounds=this._getCachedLocalBounds,this._cacheData.sprite=l,this.transform._parentID=-1,this.updateTransform(),this.containsPoint=l.containsPoint.bind(l)}},a.prototype._renderCachedCanvas=function(t){!this.visible||this.worldAlpha<=0||!this.renderable||(this._initCachedDisplayObjectCanvas(t),this._cacheData.sprite.worldAlpha=this.worldAlpha,this._cacheData.sprite.renderCanvas(t))},a.prototype._initCachedDisplayObjectCanvas=function(t){if(!this._cacheData||!this._cacheData.sprite){var e=this.getLocalBounds(),r=this.alpha;this.alpha=1;var n=t.context,i=s.RenderTexture.create(0|e.width,0|e.height),o=u;this.transform.worldTransform.copy(o),o.invert(),o.tx-=e.x,o.ty-=e.y,this.renderCanvas=this._cacheData.originalRenderCanvas,t.render(this,i,!0,o,!1),t.context=n,this.renderCanvas=this._renderCachedCanvas,this._calculateBounds=this._calculateCachedBounds,this._mask=null,this.filterArea=null;var a=new s.Sprite(i);a.transform.worldTransform=this.transform.worldTransform,a.anchor.x=-(e.x/e.width),a.anchor.y=-(e.y/e.height),a._bounds=this._bounds,a.alpha=r,this.updateTransform(),this.updateTransform=this.displayObjectUpdateTransform,this._cacheData.sprite=a,this.containsPoint=a.containsPoint.bind(a)}},a.prototype._calculateCachedBounds=function(){this._cacheData.sprite._calculateBounds()},a.prototype._getCachedLocalBounds=function(){return this._cacheData.sprite.getLocalBounds()},a.prototype._destroyCachedDisplayObject=function(){this._cacheData.sprite._texture.destroy(!0),this._cacheData.sprite=null},a.prototype._cacheAsBitmapDestroy=function(){this.cacheAsBitmap=!1,this.destroy()}},{\"../core\":61}],129:[function(t,e,r){\"use strict\";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}var i=t(\"../core\"),o=n(i);o.DisplayObject.prototype.name=null,o.Container.prototype.getChildByName=function(t){for(var e=0;e<this.children.length;e++)if(this.children[e].name===t)return this.children[e];return null}},{\"../core\":61}],130:[function(t,e,r){\"use strict\";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}var i=t(\"../core\"),o=n(i);o.DisplayObject.prototype.getGlobalPosition=function(){var t=arguments.length<=0||void 0===arguments[0]?new o.Point:arguments[0],e=!(arguments.length<=1||void 0===arguments[1])&&arguments[1];return this.parent?this.parent.toGlobal(this.position,t,e):(t.x=this.position.x,t.y=this.position.y),t}},{\"../core\":61}],131:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}r.__esModule=!0,r.BitmapText=r.TilingSpriteRenderer=r.TilingSprite=r.AnimatedSprite=r.TextureTransform=void 0;var i=t(\"./TextureTransform\");Object.defineProperty(r,\"TextureTransform\",{enumerable:!0,get:function(){return n(i).default}});var o=t(\"./AnimatedSprite\");Object.defineProperty(r,\"AnimatedSprite\",{enumerable:!0,get:function(){return n(o).default}});var s=t(\"./TilingSprite\");Object.defineProperty(r,\"TilingSprite\",{enumerable:!0,get:function(){return n(s).default}});var a=t(\"./webgl/TilingSpriteRenderer\");Object.defineProperty(r,\"TilingSpriteRenderer\",{enumerable:!0,get:function(){return n(a).default}});var u=t(\"./BitmapText\");Object.defineProperty(r,\"BitmapText\",{enumerable:!0,get:function(){return n(u).default}}),t(\"./cacheAsBitmap\"),t(\"./getChildByName\"),t(\"./getGlobalPosition\")},{\"./AnimatedSprite\":124,\"./BitmapText\":125,\"./TextureTransform\":126,\"./TilingSprite\":127,\"./cacheAsBitmap\":128,\"./getChildByName\":129,\"./getGlobalPosition\":130,\"./webgl/TilingSpriteRenderer\":132}],132:[function(t,e,r){\"use strict\";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function i(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}function o(t,e){if(!t)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!e||\"object\"!=typeof e&&\"function\"!=typeof e?t:e}function s(t,e){if(\"function\"!=typeof e&&null!==e)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=t(\"../../core\"),u=n(a),h=t(\"../../core/const\"),l=(t(\"path\"),new u.Matrix),c=new Float32Array(4),d=function(t){function e(r){i(this,e);var n=o(this,t.call(this,r));return n.shader=null,n.simpleShader=null,n.quad=null,n}return s(e,t),e.prototype.onContextChange=function(){var t=this.renderer.gl;this.shader=new u.Shader(t,\"attribute vec2 aVertexPosition;\\nattribute vec2 aTextureCoord;\\n\\nuniform mat3 projectionMatrix;\\nuniform mat3 translationMatrix;\\nuniform mat3 uTransform;\\n\\nvarying vec2 vTextureCoord;\\n\\nvoid main(void)\\n{\\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\\n\\n    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;\\n}\\n\",\"varying vec2 vTextureCoord;\\n\\nuniform sampler2D uSampler;\\nuniform vec4 uColor;\\nuniform mat3 uMapCoord;\\nuniform vec4 uClampFrame;\\nuniform vec2 uClampOffset;\\n\\nvoid main(void)\\n{\\n    vec2 coord = mod(vTextureCoord - uClampOffset, vec2(1.0, 1.0)) + uClampOffset;\\n    coord = (uMapCoord * vec3(coord, 1.0)).xy;\\n    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);\\n\\n    vec4 sample = texture2D(uSampler, coord);\\n    vec4 color = vec4(uColor.rgb * uColor.a, uColor.a);\\n\\n    gl_FragColor = sample * color ;\\n}\\n\"),this.simpleShader=new u.Shader(t,\"attribute vec2 aVertexPosition;\\nattribute vec2 aTextureCoord;\\n\\nuniform mat3 projectionMatrix;\\nuniform mat3 translationMatrix;\\nuniform mat3 uTransform;\\n\\nvarying vec2 vTextureCoord;\\n\\nvoid main(void)\\n{\\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\\n\\n    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;\\n}\\n\",\"varying vec2 vTextureCoord;\\n\\nuniform sampler2D uSampler;\\nuniform vec4 uColor;\\n\\nvoid main(void)\\n{\\n    vec4 sample = texture2D(uSampler, vTextureCoord);\\n    vec4 color = vec4(uColor.rgb * uColor.a, uColor.a);\\n    gl_FragColor = sample * color;\\n}\\n\"),\nthis.renderer.bindVao(null),this.quad=new u.Quad(t,this.renderer.state.attribState),this.quad.initVao(this.shader)},e.prototype.render=function(t){var e=this.renderer,r=this.quad;e.bindVao(r.vao);var n=r.vertices;n[0]=n[6]=t._width*-t.anchor.x,n[1]=n[3]=t._height*-t.anchor.y,n[2]=n[4]=t._width*(1-t.anchor.x),n[5]=n[7]=t._height*(1-t.anchor.y),n=r.uvs,n[0]=n[6]=-t.anchor.x,n[1]=n[3]=-t.anchor.y,n[2]=n[4]=1-t.anchor.x,n[5]=n[7]=1-t.anchor.y,r.upload();var i=t._texture,o=i.baseTexture,s=t.tileTransform.localTransform,a=t.uvTransform,d=o.isPowerOfTwo&&i.frame.width===o.width&&i.frame.height===o.height;d&&(o._glTextures[e.CONTEXT_UID]?d=o.wrapMode!==h.WRAP_MODES.CLAMP:o.wrapMode===h.WRAP_MODES.CLAMP&&(o.wrapMode=h.WRAP_MODES.REPEAT));var f=d?this.simpleShader:this.shader;e.bindShader(f);var p=i.width,v=i.height,y=t._width,g=t._height;l.set(s.a*p/y,s.b*p/g,s.c*v/y,s.d*v/g,s.tx/y,s.ty/g),l.invert(),d?l.append(a.mapCoord):(f.uniforms.uMapCoord=a.mapCoord.toArray(!0),f.uniforms.uClampFrame=a.uClampFrame,f.uniforms.uClampOffset=a.uClampOffset),f.uniforms.uTransform=l.toArray(!0);var m=c;u.utils.hex2rgb(t.tint,m),m[3]=t.worldAlpha,f.uniforms.uColor=m,f.uniforms.translationMatrix=t.transform.worldTransform.toArray(!0),f.uniforms.uSampler=e.bindTexture(i),e.setBlendMode(t.blendMode),r.vao.draw(this.renderer.gl.TRIANGLES,6,0)},e}(u.ObjectRenderer);r.default=d,u.WebGLRenderer.registerPlugin(\"tilingSprite\",d)},{\"../../core\":61,\"../../core/const\":42,path:22}],133:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}function i(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function o(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}function s(t,e){if(!t)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!e||\"object\"!=typeof e&&\"function\"!=typeof e?t:e}function a(t,e){if(\"function\"!=typeof e&&null!==e)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var u=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,\"value\"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),h=t(\"../../core\"),l=i(h),c=t(\"./BlurXFilter\"),d=n(c),f=t(\"./BlurYFilter\"),p=n(f),v=function(t){function e(r,n,i){o(this,e);var a=s(this,t.call(this));return a.blurXFilter=new d.default,a.blurYFilter=new p.default,a.resolution=1,a.padding=0,a.resolution=i||1,a.quality=n||4,a.blur=r||8,a}return a(e,t),e.prototype.apply=function(t,e,r){var n=t.getRenderTarget(!0);this.blurXFilter.apply(t,e,n,!0),this.blurYFilter.apply(t,n,r,!1),t.returnRenderTarget(n)},u(e,[{key:\"blur\",get:function(){return this.blurXFilter.blur},set:function(t){this.blurXFilter.blur=this.blurYFilter.blur=t,this.padding=2*Math.max(Math.abs(this.blurXFilter.strength),Math.abs(this.blurYFilter.strength))}},{key:\"quality\",get:function(){return this.blurXFilter.quality},set:function(t){this.blurXFilter.quality=this.blurYFilter.quality=t}},{key:\"blurX\",get:function(){return this.blurXFilter.blur},set:function(t){this.blurXFilter.blur=t,this.padding=2*Math.max(Math.abs(this.blurXFilter.strength),Math.abs(this.blurYFilter.strength))}},{key:\"blurY\",get:function(){return this.blurYFilter.blur},set:function(t){this.blurYFilter.blur=t,this.padding=2*Math.max(Math.abs(this.blurXFilter.strength),Math.abs(this.blurYFilter.strength))}}]),e}(l.Filter);r.default=v},{\"../../core\":61,\"./BlurXFilter\":134,\"./BlurYFilter\":135}],134:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}function i(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function o(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}function s(t,e){if(!t)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!e||\"object\"!=typeof e&&\"function\"!=typeof e?t:e}function a(t,e){if(\"function\"!=typeof e&&null!==e)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var u=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,\"value\"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),h=t(\"../../core\"),l=i(h),c=t(\"./generateBlurVertSource\"),d=n(c),f=t(\"./generateBlurFragSource\"),p=n(f),v=t(\"./getMaxBlurKernelSize\"),y=n(v),g=function(t){function e(r,n,i){o(this,e);var a=(0,d.default)(5,!0),u=(0,p.default)(5),h=s(this,t.call(this,a,u));return h.resolution=i||1,h._quality=0,h.quality=n||4,h.strength=r||8,h.firstRun=!0,h}return a(e,t),e.prototype.apply=function(t,e,r,n){if(this.firstRun){var i=t.renderer.gl,o=(0,y.default)(i);this.vertexSrc=(0,d.default)(o,!0),this.fragmentSrc=(0,p.default)(o),this.firstRun=!1}if(this.uniforms.strength=1/r.size.width*(r.size.width/e.size.width),this.uniforms.strength*=this.strength,this.uniforms.strength/=this.passes,1===this.passes)t.applyFilter(this,e,r,n);else{for(var s=t.getRenderTarget(!0),a=e,u=s,h=0;h<this.passes-1;h++){t.applyFilter(this,a,u,!0);var l=u;u=a,a=l}t.applyFilter(this,a,r,n),t.returnRenderTarget(s)}},u(e,[{key:\"blur\",get:function(){return this.strength},set:function(t){this.padding=2*Math.abs(t),this.strength=t}},{key:\"quality\",get:function(){return this._quality},set:function(t){this._quality=t,this.passes=t}}]),e}(l.Filter);r.default=g},{\"../../core\":61,\"./generateBlurFragSource\":136,\"./generateBlurVertSource\":137,\"./getMaxBlurKernelSize\":138}],135:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}function i(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function o(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}function s(t,e){if(!t)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!e||\"object\"!=typeof e&&\"function\"!=typeof e?t:e}function a(t,e){if(\"function\"!=typeof e&&null!==e)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var u=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,\"value\"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),h=t(\"../../core\"),l=i(h),c=t(\"./generateBlurVertSource\"),d=n(c),f=t(\"./generateBlurFragSource\"),p=n(f),v=t(\"./getMaxBlurKernelSize\"),y=n(v),g=function(t){function e(r,n,i){o(this,e);var a=(0,d.default)(5,!1),u=(0,p.default)(5),h=s(this,t.call(this,a,u));return h.resolution=i||1,h._quality=0,h.quality=n||4,h.strength=r||8,h.firstRun=!0,h}return a(e,t),e.prototype.apply=function(t,e,r,n){if(this.firstRun){var i=t.renderer.gl,o=(0,y.default)(i);this.vertexSrc=(0,d.default)(o,!1),this.fragmentSrc=(0,p.default)(o),this.firstRun=!1}if(this.uniforms.strength=1/r.size.height*(r.size.height/e.size.height),this.uniforms.strength*=this.strength,this.uniforms.strength/=this.passes,1===this.passes)t.applyFilter(this,e,r,n);else{for(var s=t.getRenderTarget(!0),a=e,u=s,h=0;h<this.passes-1;h++){t.applyFilter(this,a,u,!0);var l=u;u=a,a=l}t.applyFilter(this,a,r,n),t.returnRenderTarget(s)}},u(e,[{key:\"blur\",get:function(){return this.strength},set:function(t){this.padding=2*Math.abs(t),this.strength=t}},{key:\"quality\",get:function(){return this._quality},set:function(t){this._quality=t,this.passes=t}}]),e}(l.Filter);r.default=g},{\"../../core\":61,\"./generateBlurFragSource\":136,\"./generateBlurVertSource\":137,\"./getMaxBlurKernelSize\":138}],136:[function(t,e,r){\"use strict\";function n(t){for(var e=i[t],r=e.length,n=o,s=\"\",a=\"gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;\",u=void 0,h=0;h<t;h++){var l=a.replace(\"%index%\",h);u=h,h>=r&&(u=t-h-1),l=l.replace(\"%value%\",e[u]),s+=l,s+=\"\\n\"}return n=n.replace(\"%blur%\",s),n=n.replace(\"%size%\",t)}r.__esModule=!0,r.default=n;var i={5:[.153388,.221461,.250301],7:[.071303,.131514,.189879,.214607],9:[.028532,.067234,.124009,.179044,.20236],11:[.0093,.028002,.065984,.121703,.175713,.198596],13:[.002406,.009255,.027867,.065666,.121117,.174868,.197641],15:[489e-6,.002403,.009246,.02784,.065602,.120999,.174697,.197448]},o=[\"varying vec2 vBlurTexCoords[%size%];\",\"uniform sampler2D uSampler;\",\"void main(void)\",\"{\",\"    gl_FragColor = vec4(0.0);\",\"    %blur%\",\"}\"].join(\"\\n\")},{}],137:[function(t,e,r){\"use strict\";function n(t,e){var r=Math.ceil(t/2),n=i,o=\"\",s=void 0;s=e?\"vBlurTexCoords[%index%] = aTextureCoord + vec2(%sampleIndex% * strength, 0.0);\":\"vBlurTexCoords[%index%] = aTextureCoord + vec2(0.0, %sampleIndex% * strength);\";for(var a=0;a<t;a++){var u=s.replace(\"%index%\",a);u=u.replace(\"%sampleIndex%\",a-(r-1)+\".0\"),o+=u,o+=\"\\n\"}return n=n.replace(\"%blur%\",o),n=n.replace(\"%size%\",t)}r.__esModule=!0,r.default=n;var i=[\"attribute vec2 aVertexPosition;\",\"attribute vec2 aTextureCoord;\",\"uniform float strength;\",\"uniform mat3 projectionMatrix;\",\"varying vec2 vBlurTexCoords[%size%];\",\"void main(void)\",\"{\",\"gl_Position = vec4((projectionMatrix * vec3((aVertexPosition), 1.0)).xy, 0.0, 1.0);\",\"%blur%\",\"}\"].join(\"\\n\")},{}],138:[function(t,e,r){\"use strict\";function n(t){for(var e=t.getParameter(t.MAX_VARYING_VECTORS),r=15;r>e;)r-=2;return r}r.__esModule=!0,r.default=n},{}],139:[function(t,e,r){\"use strict\";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function i(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}function o(t,e){if(!t)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!e||\"object\"!=typeof e&&\"function\"!=typeof e?t:e}function s(t,e){if(\"function\"!=typeof e&&null!==e)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,\"value\"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),u=t(\"../../core\"),h=n(u),l=(t(\"path\"),function(t){function e(){i(this,e);var r=o(this,t.call(this,\"attribute vec2 aVertexPosition;\\nattribute vec2 aTextureCoord;\\n\\nuniform mat3 projectionMatrix;\\n\\nvarying vec2 vTextureCoord;\\n\\nvoid main(void)\\n{\\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\\n    vTextureCoord = aTextureCoord;\\n}\",\"varying vec2 vTextureCoord;\\nuniform sampler2D uSampler;\\nuniform float m[20];\\n\\nvoid main(void)\\n{\\n\\n    vec4 c = texture2D(uSampler, vTextureCoord);\\n\\n    gl_FragColor.r = (m[0] * c.r);\\n        gl_FragColor.r += (m[1] * c.g);\\n        gl_FragColor.r += (m[2] * c.b);\\n        gl_FragColor.r += (m[3] * c.a);\\n        gl_FragColor.r += m[4] * c.a;\\n\\n    gl_FragColor.g = (m[5] * c.r);\\n        gl_FragColor.g += (m[6] * c.g);\\n        gl_FragColor.g += (m[7] * c.b);\\n        gl_FragColor.g += (m[8] * c.a);\\n        gl_FragColor.g += m[9] * c.a;\\n\\n     gl_FragColor.b = (m[10] * c.r);\\n        gl_FragColor.b += (m[11] * c.g);\\n        gl_FragColor.b += (m[12] * c.b);\\n        gl_FragColor.b += (m[13] * c.a);\\n        gl_FragColor.b += m[14] * c.a;\\n\\n     gl_FragColor.a = (m[15] * c.r);\\n        gl_FragColor.a += (m[16] * c.g);\\n        gl_FragColor.a += (m[17] * c.b);\\n        gl_FragColor.a += (m[18] * c.a);\\n        gl_FragColor.a += m[19] * c.a;\\n\\n//    gl_FragColor = vec4(m[0]);\\n}\\n\"));return r.uniforms.m=[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],r}return s(e,t),e.prototype._loadMatrix=function(t){var e=!(arguments.length<=1||void 0===arguments[1])&&arguments[1],r=t;e&&(this._multiply(r,this.uniforms.m,t),r=this._colorMatrix(r)),this.uniforms.m=r},e.prototype._multiply=function(t,e,r){return t[0]=e[0]*r[0]+e[1]*r[5]+e[2]*r[10]+e[3]*r[15],t[1]=e[0]*r[1]+e[1]*r[6]+e[2]*r[11]+e[3]*r[16],t[2]=e[0]*r[2]+e[1]*r[7]+e[2]*r[12]+e[3]*r[17],t[3]=e[0]*r[3]+e[1]*r[8]+e[2]*r[13]+e[3]*r[18],t[4]=e[0]*r[4]+e[1]*r[9]+e[2]*r[14]+e[3]*r[19],t[5]=e[5]*r[0]+e[6]*r[5]+e[7]*r[10]+e[8]*r[15],t[6]=e[5]*r[1]+e[6]*r[6]+e[7]*r[11]+e[8]*r[16],t[7]=e[5]*r[2]+e[6]*r[7]+e[7]*r[12]+e[8]*r[17],t[8]=e[5]*r[3]+e[6]*r[8]+e[7]*r[13]+e[8]*r[18],t[9]=e[5]*r[4]+e[6]*r[9]+e[7]*r[14]+e[8]*r[19],t[10]=e[10]*r[0]+e[11]*r[5]+e[12]*r[10]+e[13]*r[15],t[11]=e[10]*r[1]+e[11]*r[6]+e[12]*r[11]+e[13]*r[16],t[12]=e[10]*r[2]+e[11]*r[7]+e[12]*r[12]+e[13]*r[17],t[13]=e[10]*r[3]+e[11]*r[8]+e[12]*r[13]+e[13]*r[18],t[14]=e[10]*r[4]+e[11]*r[9]+e[12]*r[14]+e[13]*r[19],t[15]=e[15]*r[0]+e[16]*r[5]+e[17]*r[10]+e[18]*r[15],t[16]=e[15]*r[1]+e[16]*r[6]+e[17]*r[11]+e[18]*r[16],t[17]=e[15]*r[2]+e[16]*r[7]+e[17]*r[12]+e[18]*r[17],t[18]=e[15]*r[3]+e[16]*r[8]+e[17]*r[13]+e[18]*r[18],t[19]=e[15]*r[4]+e[16]*r[9]+e[17]*r[14]+e[18]*r[19],t},e.prototype._colorMatrix=function(t){var e=new Float32Array(t);return e[4]/=255,e[9]/=255,e[14]/=255,e[19]/=255,e},e.prototype.brightness=function(t,e){var r=[t,0,0,0,0,0,t,0,0,0,0,0,t,0,0,0,0,0,1,0];this._loadMatrix(r,e)},e.prototype.greyscale=function(t,e){var r=[t,t,t,0,0,t,t,t,0,0,t,t,t,0,0,0,0,0,1,0];this._loadMatrix(r,e)},e.prototype.blackAndWhite=function(t){var e=[.3,.6,.1,0,0,.3,.6,.1,0,0,.3,.6,.1,0,0,0,0,0,1,0];this._loadMatrix(e,t)},e.prototype.hue=function(t,e){t=(t||0)/180*Math.PI;var r=Math.cos(t),n=Math.sin(t),i=Math.sqrt,o=1/3,s=i(o),a=r+(1-r)*o,u=o*(1-r)-s*n,h=o*(1-r)+s*n,l=o*(1-r)+s*n,c=r+o*(1-r),d=o*(1-r)-s*n,f=o*(1-r)-s*n,p=o*(1-r)+s*n,v=r+o*(1-r),y=[a,u,h,0,0,l,c,d,0,0,f,p,v,0,0,0,0,0,1,0];this._loadMatrix(y,e)},e.prototype.contrast=function(t,e){var r=(t||0)+1,n=-128*(r-1),i=[r,0,0,0,n,0,r,0,0,n,0,0,r,0,n,0,0,0,1,0];this._loadMatrix(i,e)},e.prototype.saturate=function(){var t=arguments.length<=0||void 0===arguments[0]?0:arguments[0],e=arguments[1],r=2*t/3+1,n=(r-1)*-.5,i=[r,n,n,0,0,n,r,n,0,0,n,n,r,0,0,0,0,0,1,0];this._loadMatrix(i,e)},e.prototype.desaturate=function(){this.saturate(-1)},e.prototype.negative=function(t){var e=[0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0];this._loadMatrix(e,t)},e.prototype.sepia=function(t){var e=[.393,.7689999,.18899999,0,0,.349,.6859999,.16799999,0,0,.272,.5339999,.13099999,0,0,0,0,0,1,0];this._loadMatrix(e,t)},e.prototype.technicolor=function(t){var e=[1.9125277891456083,-.8545344976951645,-.09155508482755585,0,11.793603434377337,-.3087833385928097,1.7658908555458428,-.10601743074722245,0,-70.35205161461398,-.231103377548616,-.7501899197440212,1.847597816108189,0,30.950940869491138,0,0,0,1,0];this._loadMatrix(e,t)},e.prototype.polaroid=function(t){var e=[1.438,-.062,-.062,0,0,-.122,1.378,-.122,0,0,-.016,-.016,1.483,0,0,0,0,0,1,0];this._loadMatrix(e,t)},e.prototype.toBGR=function(t){var e=[0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0];this._loadMatrix(e,t)},e.prototype.kodachrome=function(t){var e=[1.1285582396593525,-.3967382283601348,-.03992559172921793,0,63.72958762196502,-.16404339962244616,1.0835251566291304,-.05498805115633132,0,24.732407896706203,-.16786010706155763,-.5603416277695248,1.6014850761964943,0,35.62982807460946,0,0,0,1,0];this._loadMatrix(e,t)},e.prototype.browni=function(t){var e=[.5997023498159715,.34553243048391263,-.2708298674538042,0,47.43192855600873,-.037703249837783157,.8609577587992641,.15059552388459913,0,-36.96841498319127,.24113635128153335,-.07441037908422492,.44972182064877153,0,-7.562075277591283,0,0,0,1,0];this._loadMatrix(e,t)},e.prototype.vintage=function(t){var e=[.6279345635605994,.3202183420819367,-.03965408211312453,0,9.651285835294123,.02578397704808868,.6441188644374771,.03259127616149294,0,7.462829176470591,.0466055556782719,-.0851232987247891,.5241648018700465,0,5.159190588235296,0,0,0,1,0];this._loadMatrix(e,t)},e.prototype.colorTone=function(t,e,r,n,i){t=t||.2,e=e||.15,r=r||16770432,n=n||3375104;var o=(r>>16&255)/255,s=(r>>8&255)/255,a=(255&r)/255,u=(n>>16&255)/255,h=(n>>8&255)/255,l=(255&n)/255,c=[.3,.59,.11,0,0,o,s,a,t,0,u,h,l,e,0,o-u,s-h,a-l,0,0];this._loadMatrix(c,i)},e.prototype.night=function(t,e){t=t||.1;var r=[t*-2,-t,0,0,0,-t,0,t,0,0,0,t,2*t,0,0,0,0,0,1,0];this._loadMatrix(r,e)},e.prototype.predator=function(t,e){var r=[11.224130630493164*t,-4.794486999511719*t,-2.8746118545532227*t,0*t,.40342438220977783*t,-3.6330697536468506*t,9.193157196044922*t,-2.951810836791992*t,0*t,-1.316135048866272*t,-3.2184197902679443*t,-4.2375030517578125*t,7.476448059082031*t,0*t,.8044459223747253*t,0,0,0,1,0];this._loadMatrix(r,e)},e.prototype.lsd=function(t){var e=[2,-.4,.5,0,0,-.5,2,-.4,0,0,-.4,-.5,3,0,0,0,0,0,1,0];this._loadMatrix(e,t)},e.prototype.reset=function(){var t=[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0];this._loadMatrix(t,!1)},a(e,[{key:\"matrix\",get:function(){return this.uniforms.m},set:function(t){this.uniforms.m=t}}]),e}(h.Filter));r.default=l,l.prototype.grayscale=l.prototype.greyscale},{\"../../core\":61,path:22}],140:[function(t,e,r){\"use strict\";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function i(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}function o(t,e){if(!t)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!e||\"object\"!=typeof e&&\"function\"!=typeof e?t:e}function s(t,e){if(\"function\"!=typeof e&&null!==e)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,\"value\"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),u=t(\"../../core\"),h=n(u),l=(t(\"path\"),function(t){function e(r,n){i(this,e);var s=new h.Matrix;r.renderable=!1;var a=o(this,t.call(this,\"attribute vec2 aVertexPosition;\\nattribute vec2 aTextureCoord;\\n\\nuniform mat3 projectionMatrix;\\nuniform mat3 filterMatrix;\\n\\nvarying vec2 vTextureCoord;\\nvarying vec2 vFilterCoord;\\n\\nvoid main(void)\\n{\\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\\n   vFilterCoord = ( filterMatrix * vec3( aTextureCoord, 1.0)  ).xy;\\n   vTextureCoord = aTextureCoord;\\n}\",\"varying vec2 vFilterCoord;\\nvarying vec2 vTextureCoord;\\n\\nuniform vec2 scale;\\n\\nuniform sampler2D uSampler;\\nuniform sampler2D mapSampler;\\n\\nuniform vec4 filterClamp;\\n\\nvoid main(void)\\n{\\n   vec4 map =  texture2D(mapSampler, vFilterCoord);\\n\\n   map -= 0.5;\\n   map.xy *= scale;\\n\\n   gl_FragColor = texture2D(uSampler, clamp(vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y), filterClamp.xy, filterClamp.zw));\\n}\\n\"));return a.maskSprite=r,a.maskMatrix=s,a.uniforms.mapSampler=r.texture,a.uniforms.filterMatrix=s.toArray(!0),a.uniforms.scale={x:1,y:1},null!==n&&void 0!==n||(n=20),a.scale=new h.Point(n,n),a}return s(e,t),e.prototype.apply=function(t,e,r){var n=1/r.destinationFrame.width*(r.size.width/e.size.width);this.uniforms.filterMatrix=t.calculateSpriteMatrix(this.maskMatrix,this.maskSprite),this.uniforms.scale.x=this.scale.x*n,this.uniforms.scale.y=this.scale.y*n,t.applyFilter(this,e,r)},a(e,[{key:\"map\",get:function(){return this.uniforms.mapSampler},set:function(t){this.uniforms.mapSampler=t}}]),e}(h.Filter));r.default=l},{\"../../core\":61,path:22}],141:[function(t,e,r){\"use strict\";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function i(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}function o(t,e){if(!t)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!e||\"object\"!=typeof e&&\"function\"!=typeof e?t:e}function s(t,e){if(\"function\"!=typeof e&&null!==e)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=t(\"../../core\"),u=n(a),h=(t(\"path\"),function(t){function e(){return i(this,e),o(this,t.call(this,\"\\nattribute vec2 aVertexPosition;\\nattribute vec2 aTextureCoord;\\n\\nuniform mat3 projectionMatrix;\\n\\nvarying vec2 v_rgbNW;\\nvarying vec2 v_rgbNE;\\nvarying vec2 v_rgbSW;\\nvarying vec2 v_rgbSE;\\nvarying vec2 v_rgbM;\\n\\nuniform vec4 filterArea;\\n\\nvarying vec2 vTextureCoord;\\n\\nvec2 mapCoord( vec2 coord )\\n{\\n    coord *= filterArea.xy;\\n    coord += filterArea.zw;\\n\\n    return coord;\\n}\\n\\nvec2 unmapCoord( vec2 coord )\\n{\\n    coord -= filterArea.zw;\\n    coord /= filterArea.xy;\\n\\n    return coord;\\n}\\n\\nvoid texcoords(vec2 fragCoord, vec2 resolution,\\n               out vec2 v_rgbNW, out vec2 v_rgbNE,\\n               out vec2 v_rgbSW, out vec2 v_rgbSE,\\n               out vec2 v_rgbM) {\\n    vec2 inverseVP = 1.0 / resolution.xy;\\n    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;\\n    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;\\n    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;\\n    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;\\n    v_rgbM = vec2(fragCoord * inverseVP);\\n}\\n\\nvoid main(void) {\\n\\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\\n\\n   vTextureCoord = aTextureCoord;\\n\\n   vec2 fragCoord = vTextureCoord * filterArea.xy;\\n\\n   texcoords(fragCoord, filterArea.xy, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\\n}\",'varying vec2 v_rgbNW;\\nvarying vec2 v_rgbNE;\\nvarying vec2 v_rgbSW;\\nvarying vec2 v_rgbSE;\\nvarying vec2 v_rgbM;\\n\\nvarying vec2 vTextureCoord;\\nuniform sampler2D uSampler;\\nuniform vec4 filterArea;\\n\\n/**\\n Basic FXAA implementation based on the code on geeks3d.com with the\\n modification that the texture2DLod stuff was removed since it\\'s\\n unsupported by WebGL.\\n \\n --\\n \\n From:\\n https://github.com/mitsuhiko/webgl-meincraft\\n \\n Copyright (c) 2011 by Armin Ronacher.\\n \\n Some rights reserved.\\n \\n Redistribution and use in source and binary forms, with or without\\n modification, are permitted provided that the following conditions are\\n met:\\n \\n * Redistributions of source code must retain the above copyright\\n notice, this list of conditions and the following disclaimer.\\n \\n * Redistributions in binary form must reproduce the above\\n copyright notice, this list of conditions and the following\\n disclaimer in the documentation and/or other materials provided\\n with the distribution.\\n \\n * The names of the contributors may not be used to endorse or\\n promote products derived from this software without specific\\n prior written permission.\\n \\n THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\\n \"AS IS\" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\\n LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\\n A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT\\n OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,\\n SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\\n LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,\\n DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\\n THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\\n (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\\n OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\\n */\\n\\n#ifndef FXAA_REDUCE_MIN\\n#define FXAA_REDUCE_MIN   (1.0/ 128.0)\\n#endif\\n#ifndef FXAA_REDUCE_MUL\\n#define FXAA_REDUCE_MUL   (1.0 / 8.0)\\n#endif\\n#ifndef FXAA_SPAN_MAX\\n#define FXAA_SPAN_MAX     8.0\\n#endif\\n\\n//optimized version for mobile, where dependent\\n//texture reads can be a bottleneck\\nvec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 resolution,\\n          vec2 v_rgbNW, vec2 v_rgbNE,\\n          vec2 v_rgbSW, vec2 v_rgbSE,\\n          vec2 v_rgbM) {\\n    vec4 color;\\n    mediump vec2 inverseVP = vec2(1.0 / resolution.x, 1.0 / resolution.y);\\n    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;\\n    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;\\n    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;\\n    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;\\n    vec4 texColor = texture2D(tex, v_rgbM);\\n    vec3 rgbM  = texColor.xyz;\\n    vec3 luma = vec3(0.299, 0.587, 0.114);\\n    float lumaNW = dot(rgbNW, luma);\\n    float lumaNE = dot(rgbNE, luma);\\n    float lumaSW = dot(rgbSW, luma);\\n    float lumaSE = dot(rgbSE, luma);\\n    float lumaM  = dot(rgbM,  luma);\\n    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\\n    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));\\n    \\n    mediump vec2 dir;\\n    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\\n    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));\\n    \\n    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *\\n                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\\n    \\n    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\\n    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),\\n              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\\n                  dir * rcpDirMin)) * inverseVP;\\n    \\n    vec3 rgbA = 0.5 * (\\n                       texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +\\n                       texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);\\n    vec3 rgbB = rgbA * 0.5 + 0.25 * (\\n                                     texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +\\n                                     texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);\\n    \\n    float lumaB = dot(rgbB, luma);\\n    if ((lumaB < lumaMin) || (lumaB > lumaMax))\\n        color = vec4(rgbA, texColor.a);\\n    else\\n        color = vec4(rgbB, texColor.a);\\n    return color;\\n}\\n\\nvoid main() {\\n\\n      vec2 fragCoord = vTextureCoord * filterArea.xy;\\n\\n      vec4 color;\\n\\n    color = fxaa(uSampler, fragCoord, filterArea.xy, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\\n\\n      gl_FragColor = color;\\n}\\n'))}return s(e,t),e}(u.Filter));r.default=h},{\"../../core\":61,path:22}],142:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}r.__esModule=!0;var i=t(\"./fxaa/FXAAFilter\");Object.defineProperty(r,\"FXAAFilter\",{enumerable:!0,get:function(){return n(i).default}});var o=t(\"./noise/NoiseFilter\");Object.defineProperty(r,\"NoiseFilter\",{enumerable:!0,get:function(){return n(o).default}});var s=t(\"./displacement/DisplacementFilter\");Object.defineProperty(r,\"DisplacementFilter\",{enumerable:!0,get:function(){return n(s).default}});var a=t(\"./blur/BlurFilter\");Object.defineProperty(r,\"BlurFilter\",{enumerable:!0,get:function(){return n(a).default}});var u=t(\"./blur/BlurXFilter\");Object.defineProperty(r,\"BlurXFilter\",{enumerable:!0,get:function(){return n(u).default}});var h=t(\"./blur/BlurYFilter\");Object.defineProperty(r,\"BlurYFilter\",{enumerable:!0,get:function(){return n(h).default}});var l=t(\"./colormatrix/ColorMatrixFilter\");Object.defineProperty(r,\"ColorMatrixFilter\",{enumerable:!0,get:function(){return n(l).default}});var c=t(\"./void/VoidFilter\");Object.defineProperty(r,\"VoidFilter\",{enumerable:!0,get:function(){return n(c).default}})},{\"./blur/BlurFilter\":133,\"./blur/BlurXFilter\":134,\"./blur/BlurYFilter\":135,\"./colormatrix/ColorMatrixFilter\":139,\"./displacement/DisplacementFilter\":140,\"./fxaa/FXAAFilter\":141,\"./noise/NoiseFilter\":143,\"./void/VoidFilter\":144}],143:[function(t,e,r){\"use strict\";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function i(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}function o(t,e){if(!t)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!e||\"object\"!=typeof e&&\"function\"!=typeof e?t:e}function s(t,e){if(\"function\"!=typeof e&&null!==e)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,\"value\"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),u=t(\"../../core\"),h=n(u),l=(t(\"path\"),function(t){function e(){i(this,e);var r=o(this,t.call(this,\"attribute vec2 aVertexPosition;\\nattribute vec2 aTextureCoord;\\n\\nuniform mat3 projectionMatrix;\\n\\nvarying vec2 vTextureCoord;\\n\\nvoid main(void)\\n{\\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\\n    vTextureCoord = aTextureCoord;\\n}\",\"precision highp float;\\n\\nvarying vec2 vTextureCoord;\\nvarying vec4 vColor;\\n\\nuniform float noise;\\nuniform sampler2D uSampler;\\n\\nfloat rand(vec2 co)\\n{\\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\\n}\\n\\nvoid main()\\n{\\n    vec4 color = texture2D(uSampler, vTextureCoord);\\n\\n    float diff = (rand(gl_FragCoord.xy) - 0.5) * noise;\\n\\n    color.r += diff;\\n    color.g += diff;\\n    color.b += diff;\\n\\n    gl_FragColor = color;\\n}\\n\"));return r.noise=.5,r}return s(e,t),a(e,[{key:\"noise\",get:function(){return this.uniforms.noise},set:function(t){this.uniforms.noise=t}}]),e}(h.Filter));r.default=l},{\"../../core\":61,path:22}],144:[function(t,e,r){\"use strict\";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function i(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}function o(t,e){if(!t)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!e||\"object\"!=typeof e&&\"function\"!=typeof e?t:e}function s(t,e){if(\"function\"!=typeof e&&null!==e)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=t(\"../../core\"),u=n(a),h=(t(\"path\"),function(t){function e(){i(this,e);var r=o(this,t.call(this,\"attribute vec2 aVertexPosition;\\nattribute vec2 aTextureCoord;\\n\\nuniform mat3 projectionMatrix;\\n\\nvarying vec2 vTextureCoord;\\n\\nvoid main(void)\\n{\\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\\n    vTextureCoord = aTextureCoord;\\n}\",\"varying vec2 vTextureCoord;\\n\\nuniform sampler2D uSampler;\\n\\nvoid main(void)\\n{\\n   gl_FragColor = texture2D(uSampler, vTextureCoord);\\n}\\n\"));\nreturn r.glShaderKey=\"void\",r}return s(e,t),e}(u.Filter));r.default=h},{\"../../core\":61,path:22}],145:[function(t,e,r){\"use strict\";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function i(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}r.__esModule=!0;var o=t(\"../core\"),s=n(o),a=function(){function t(){i(this,t),this.global=new s.Point,this.target=null,this.originalEvent=null}return t.prototype.getLocalPosition=function(t,e,r){return t.worldTransform.applyInverse(r||this.global,e)},t}();r.default=a},{\"../core\":61}],146:[function(t,e,r){\"use strict\";function n(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}r.__esModule=!0;var i=function(){function t(){n(this,t),this.stopped=!1,this.target=null,this.currentTarget=null,this.type=null,this.data=null}return t.prototype.stopPropagation=function(){this.stopped=!0},t.prototype._reset=function(){this.stopped=!1,this.currentTarget=null,this.target=null},t}();r.default=i},{}],147:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}function i(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function o(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}function s(t,e){if(!t)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!e||\"object\"!=typeof e&&\"function\"!=typeof e?t:e}function a(t,e){if(\"function\"!=typeof e&&null!==e)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var u=t(\"../core\"),h=i(u),l=t(\"./InteractionData\"),c=n(l),d=t(\"./InteractionEvent\"),f=n(d),p=t(\"eventemitter3\"),v=n(p),y=t(\"./interactiveTarget\"),g=n(y),m=t(\"ismobilejs\"),_=n(m);Object.assign(h.DisplayObject.prototype,g.default);var b=function(t){function e(r,n){o(this,e);var i=s(this,t.call(this));return n=n||{},i.renderer=r,i.autoPreventDefault=void 0===n.autoPreventDefault||n.autoPreventDefault,i.interactionFrequency=n.interactionFrequency||10,i.mouse=new c.default,i.mouse.global.set(-999999),i.pointer=new c.default,i.pointer.global.set(-999999),i.eventData=new f.default,i.interactiveDataPool=[],i.interactionDOMElement=null,i.moveWhenInside=!1,i.eventsAdded=!1,i.mouseOverRenderer=!1,i.supportsTouchEvents=\"ontouchstart\"in window,i.supportsPointerEvents=!!window.PointerEvent,i.normalizeTouchEvents=!i.supportsPointerEvents&&i.supportsTouchEvents,i.normalizeMouseEvents=!i.supportsPointerEvents&&!_.default.any,i.onMouseUp=i.onMouseUp.bind(i),i.processMouseUp=i.processMouseUp.bind(i),i.onMouseDown=i.onMouseDown.bind(i),i.processMouseDown=i.processMouseDown.bind(i),i.onMouseMove=i.onMouseMove.bind(i),i.processMouseMove=i.processMouseMove.bind(i),i.onMouseOut=i.onMouseOut.bind(i),i.processMouseOverOut=i.processMouseOverOut.bind(i),i.onMouseOver=i.onMouseOver.bind(i),i.onPointerUp=i.onPointerUp.bind(i),i.processPointerUp=i.processPointerUp.bind(i),i.onPointerDown=i.onPointerDown.bind(i),i.processPointerDown=i.processPointerDown.bind(i),i.onPointerMove=i.onPointerMove.bind(i),i.processPointerMove=i.processPointerMove.bind(i),i.onPointerOut=i.onPointerOut.bind(i),i.processPointerOverOut=i.processPointerOverOut.bind(i),i.onPointerOver=i.onPointerOver.bind(i),i.onTouchStart=i.onTouchStart.bind(i),i.processTouchStart=i.processTouchStart.bind(i),i.onTouchEnd=i.onTouchEnd.bind(i),i.processTouchEnd=i.processTouchEnd.bind(i),i.onTouchMove=i.onTouchMove.bind(i),i.processTouchMove=i.processTouchMove.bind(i),i.defaultCursorStyle=\"inherit\",i.currentCursorStyle=\"inherit\",i._tempPoint=new h.Point,i.resolution=1,i.setTargetElement(i.renderer.view,i.renderer.resolution),i}return a(e,t),e.prototype.setTargetElement=function(t){var e=arguments.length<=1||void 0===arguments[1]?1:arguments[1];this.removeEvents(),this.interactionDOMElement=t,this.resolution=e,this.addEvents()},e.prototype.addEvents=function(){this.interactionDOMElement&&(h.ticker.shared.add(this.update,this),window.navigator.msPointerEnabled?(this.interactionDOMElement.style[\"-ms-content-zooming\"]=\"none\",this.interactionDOMElement.style[\"-ms-touch-action\"]=\"none\"):this.supportsPointerEvents&&(this.interactionDOMElement.style[\"touch-action\"]=\"none\"),this.supportsPointerEvents?(window.document.addEventListener(\"pointermove\",this.onPointerMove,!0),this.interactionDOMElement.addEventListener(\"pointerdown\",this.onPointerDown,!0),this.interactionDOMElement.addEventListener(\"pointerout\",this.onPointerOut,!0),this.interactionDOMElement.addEventListener(\"pointerover\",this.onPointerOver,!0),window.addEventListener(\"pointerup\",this.onPointerUp,!0)):(this.normalizeTouchEvents&&(this.interactionDOMElement.addEventListener(\"touchstart\",this.onPointerDown,!0),this.interactionDOMElement.addEventListener(\"touchend\",this.onPointerUp,!0),this.interactionDOMElement.addEventListener(\"touchmove\",this.onPointerMove,!0)),this.normalizeMouseEvents&&(window.document.addEventListener(\"mousemove\",this.onPointerMove,!0),this.interactionDOMElement.addEventListener(\"mousedown\",this.onPointerDown,!0),this.interactionDOMElement.addEventListener(\"mouseout\",this.onPointerOut,!0),this.interactionDOMElement.addEventListener(\"mouseover\",this.onPointerOver,!0),window.addEventListener(\"mouseup\",this.onPointerUp,!0))),window.document.addEventListener(\"mousemove\",this.onMouseMove,!0),this.interactionDOMElement.addEventListener(\"mousedown\",this.onMouseDown,!0),this.interactionDOMElement.addEventListener(\"mouseout\",this.onMouseOut,!0),this.interactionDOMElement.addEventListener(\"mouseover\",this.onMouseOver,!0),window.addEventListener(\"mouseup\",this.onMouseUp,!0),this.supportsTouchEvents&&(this.interactionDOMElement.addEventListener(\"touchstart\",this.onTouchStart,!0),this.interactionDOMElement.addEventListener(\"touchend\",this.onTouchEnd,!0),this.interactionDOMElement.addEventListener(\"touchmove\",this.onTouchMove,!0)),this.eventsAdded=!0)},e.prototype.removeEvents=function(){this.interactionDOMElement&&(h.ticker.shared.remove(this.update,this),window.navigator.msPointerEnabled?(this.interactionDOMElement.style[\"-ms-content-zooming\"]=\"\",this.interactionDOMElement.style[\"-ms-touch-action\"]=\"\"):this.supportsPointerEvents&&(this.interactionDOMElement.style[\"touch-action\"]=\"\"),this.supportsPointerEvents?(window.document.removeEventListener(\"pointermove\",this.onPointerMove,!0),this.interactionDOMElement.removeEventListener(\"pointerdown\",this.onPointerDown,!0),this.interactionDOMElement.removeEventListener(\"pointerout\",this.onPointerOut,!0),this.interactionDOMElement.removeEventListener(\"pointerover\",this.onPointerOver,!0),window.removeEventListener(\"pointerup\",this.onPointerUp,!0)):(this.normalizeTouchEvents&&(this.interactionDOMElement.removeEventListener(\"touchstart\",this.onPointerDown,!0),this.interactionDOMElement.removeEventListener(\"touchend\",this.onPointerUp,!0),this.interactionDOMElement.removeEventListener(\"touchmove\",this.onPointerMove,!0)),this.normalizeMouseEvents&&(window.document.removeEventListener(\"mousemove\",this.onPointerMove,!0),this.interactionDOMElement.removeEventListener(\"mousedown\",this.onPointerDown,!0),this.interactionDOMElement.removeEventListener(\"mouseout\",this.onPointerOut,!0),this.interactionDOMElement.removeEventListener(\"mouseover\",this.onPointerOver,!0),window.removeEventListener(\"mouseup\",this.onPointerUp,!0))),window.document.removeEventListener(\"mousemove\",this.onMouseMove,!0),this.interactionDOMElement.removeEventListener(\"mousedown\",this.onMouseDown,!0),this.interactionDOMElement.removeEventListener(\"mouseout\",this.onMouseOut,!0),this.interactionDOMElement.removeEventListener(\"mouseover\",this.onMouseOver,!0),window.removeEventListener(\"mouseup\",this.onMouseUp,!0),this.supportsTouchEvents&&(this.interactionDOMElement.removeEventListener(\"touchstart\",this.onTouchStart,!0),this.interactionDOMElement.removeEventListener(\"touchend\",this.onTouchEnd,!0),this.interactionDOMElement.removeEventListener(\"touchmove\",this.onTouchMove,!0)),this.interactionDOMElement=null,this.eventsAdded=!1)},e.prototype.update=function(t){if(this._deltaTime+=t,!(this._deltaTime<this.interactionFrequency)&&(this._deltaTime=0,this.interactionDOMElement)){if(this.didMove)return void(this.didMove=!1);this.cursor=this.defaultCursorStyle,this.eventData._reset(),this.processInteractive(this.mouse.global,this.renderer._lastObjectRendered,this.processMouseOverOut,!0),this.currentCursorStyle!==this.cursor&&(this.currentCursorStyle=this.cursor,this.interactionDOMElement.style.cursor=this.cursor)}},e.prototype.dispatchEvent=function(t,e,r){r.stopped||(r.currentTarget=t,r.type=e,t.emit(e,r),t[e]&&t[e](r))},e.prototype.mapPositionToPoint=function(t,e,r){var n=void 0;n=this.interactionDOMElement.parentElement?this.interactionDOMElement.getBoundingClientRect():{x:0,y:0,width:0,height:0},t.x=(e-n.left)*(this.interactionDOMElement.width/n.width)/this.resolution,t.y=(r-n.top)*(this.interactionDOMElement.height/n.height)/this.resolution},e.prototype.processInteractive=function(t,e,r,n,i){if(!e||!e.visible)return!1;i=e.interactive||i;var o=!1,s=i;if(e.hitArea&&(s=!1),n&&e._mask&&(e._mask.containsPoint(t)||(n=!1)),n&&e.filterArea&&(e.filterArea.contains(t.x,t.y)||(n=!1)),e.interactiveChildren&&e.children)for(var a=e.children,u=a.length-1;u>=0;u--){var h=a[u];if(this.processInteractive(t,h,r,n,s)){if(!h.parent)continue;o=!0,s=!1,n=!1}}return i&&(n&&!o&&(e.hitArea?(e.worldTransform.applyInverse(t,this._tempPoint),o=e.hitArea.contains(this._tempPoint.x,this._tempPoint.y)):e.containsPoint&&(o=e.containsPoint(t))),e.interactive&&(o&&!this.eventData.target&&(this.eventData.target=e,this.mouse.target=e,this.pointer.target=e),r(e,o))),o},e.prototype.onMouseDown=function(t){this.mouse.originalEvent=t,this.eventData.data=this.mouse,this.eventData._reset(),this.mapPositionToPoint(this.mouse.global,t.clientX,t.clientY),this.autoPreventDefault&&this.mouse.originalEvent.preventDefault(),this.processInteractive(this.mouse.global,this.renderer._lastObjectRendered,this.processMouseDown,!0);var e=2===t.button||3===t.which;this.emit(e?\"rightdown\":\"mousedown\",this.eventData)},e.prototype.processMouseDown=function(t,e){var r=this.mouse.originalEvent,n=2===r.button||3===r.which;e&&(t[n?\"_isRightDown\":\"_isLeftDown\"]=!0,this.dispatchEvent(t,n?\"rightdown\":\"mousedown\",this.eventData))},e.prototype.onMouseUp=function(t){this.mouse.originalEvent=t,this.eventData.data=this.mouse,this.eventData._reset(),this.mapPositionToPoint(this.mouse.global,t.clientX,t.clientY),this.processInteractive(this.mouse.global,this.renderer._lastObjectRendered,this.processMouseUp,!0);var e=2===t.button||3===t.which;this.emit(e?\"rightup\":\"mouseup\",this.eventData)},e.prototype.processMouseUp=function(t,e){var r=this.mouse.originalEvent,n=2===r.button||3===r.which,i=n?\"_isRightDown\":\"_isLeftDown\";e?(this.dispatchEvent(t,n?\"rightup\":\"mouseup\",this.eventData),t[i]&&(t[i]=!1,this.dispatchEvent(t,n?\"rightclick\":\"click\",this.eventData))):t[i]&&(t[i]=!1,this.dispatchEvent(t,n?\"rightupoutside\":\"mouseupoutside\",this.eventData))},e.prototype.onMouseMove=function(t){this.mouse.originalEvent=t,this.eventData.data=this.mouse,this.eventData._reset(),this.mapPositionToPoint(this.mouse.global,t.clientX,t.clientY),this.didMove=!0,this.cursor=this.defaultCursorStyle,this.processInteractive(this.mouse.global,this.renderer._lastObjectRendered,this.processMouseMove,!0),this.emit(\"mousemove\",this.eventData),this.currentCursorStyle!==this.cursor&&(this.currentCursorStyle=this.cursor,this.interactionDOMElement.style.cursor=this.cursor)},e.prototype.processMouseMove=function(t,e){this.processMouseOverOut(t,e),this.moveWhenInside&&!e||this.dispatchEvent(t,\"mousemove\",this.eventData)},e.prototype.onMouseOut=function(t){this.mouseOverRenderer=!1,this.mouse.originalEvent=t,this.eventData.data=this.mouse,this.eventData._reset(),this.mapPositionToPoint(this.mouse.global,t.clientX,t.clientY),this.interactionDOMElement.style.cursor=this.defaultCursorStyle,this.mapPositionToPoint(this.mouse.global,t.clientX,t.clientY),this.processInteractive(this.mouse.global,this.renderer._lastObjectRendered,this.processMouseOverOut,!1),this.emit(\"mouseout\",this.eventData)},e.prototype.processMouseOverOut=function(t,e){e&&this.mouseOverRenderer?(t._mouseOver||(t._mouseOver=!0,this.dispatchEvent(t,\"mouseover\",this.eventData)),t.buttonMode&&(this.cursor=t.defaultCursor)):t._mouseOver&&(t._mouseOver=!1,this.dispatchEvent(t,\"mouseout\",this.eventData))},e.prototype.onMouseOver=function(t){this.mouseOverRenderer=!0,this.mouse.originalEvent=t,this.eventData.data=this.mouse,this.eventData._reset(),this.emit(\"mouseover\",this.eventData)},e.prototype.onPointerDown=function(t){this.normalizeToPointerData(t),this.pointer.originalEvent=t,this.eventData.data=this.pointer,this.eventData._reset(),this.mapPositionToPoint(this.pointer.global,t.clientX,t.clientY),this.autoPreventDefault&&(this.normalizeMouseEvents||this.normalizeTouchEvents)&&this.pointer.originalEvent.preventDefault(),this.processInteractive(this.pointer.global,this.renderer._lastObjectRendered,this.processPointerDown,!0),this.emit(\"pointerdown\",this.eventData)},e.prototype.processPointerDown=function(t,e){e&&(t._pointerDown=!0,this.dispatchEvent(t,\"pointerdown\",this.eventData))},e.prototype.onPointerUp=function(t){this.normalizeToPointerData(t),this.pointer.originalEvent=t,this.eventData.data=this.pointer,this.eventData._reset(),this.mapPositionToPoint(this.pointer.global,t.clientX,t.clientY),this.processInteractive(this.pointer.global,this.renderer._lastObjectRendered,this.processPointerUp,!0),this.emit(\"pointerup\",this.eventData)},e.prototype.processPointerUp=function(t,e){e?(this.dispatchEvent(t,\"pointerup\",this.eventData),t._pointerDown&&(t._pointerDown=!1,this.dispatchEvent(t,\"pointertap\",this.eventData))):t._pointerDown&&(t._pointerDown=!1,this.dispatchEvent(t,\"pointerupoutside\",this.eventData))},e.prototype.onPointerMove=function(t){this.normalizeToPointerData(t),this.pointer.originalEvent=t,this.eventData.data=this.pointer,this.eventData._reset(),this.mapPositionToPoint(this.pointer.global,t.clientX,t.clientY),this.processInteractive(this.pointer.global,this.renderer._lastObjectRendered,this.processPointerMove,!0),this.emit(\"pointermove\",this.eventData)},e.prototype.processPointerMove=function(t,e){this.pointer.originalEvent.changedTouches||this.processPointerOverOut(t,e),this.moveWhenInside&&!e||this.dispatchEvent(t,\"pointermove\",this.eventData)},e.prototype.onPointerOut=function(t){this.normalizeToPointerData(t),this.pointer.originalEvent=t,this.eventData.data=this.pointer,this.eventData._reset(),this.mapPositionToPoint(this.pointer.global,t.clientX,t.clientY),this.processInteractive(this.pointer.global,this.renderer._lastObjectRendered,this.processPointerOverOut,!1),this.emit(\"pointerout\",this.eventData)},e.prototype.processPointerOverOut=function(t,e){e&&this.mouseOverRenderer?t._pointerOver||(t._pointerOver=!0,this.dispatchEvent(t,\"pointerover\",this.eventData)):t._pointerOver&&(t._pointerOver=!1,this.dispatchEvent(t,\"pointerout\",this.eventData))},e.prototype.onPointerOver=function(t){this.pointer.originalEvent=t,this.eventData.data=this.pointer,this.eventData._reset(),this.emit(\"pointerover\",this.eventData)},e.prototype.onTouchStart=function(t){this.autoPreventDefault&&t.preventDefault();for(var e=t.changedTouches,r=e.length,n=0;n<r;n++){var i=e[n],o=this.getTouchData(i);o.originalEvent=t,this.eventData.data=o,this.eventData._reset(),this.processInteractive(o.global,this.renderer._lastObjectRendered,this.processTouchStart,!0),this.emit(\"touchstart\",this.eventData),this.returnTouchData(o)}},e.prototype.processTouchStart=function(t,e){e&&(t._touchDown=!0,this.dispatchEvent(t,\"touchstart\",this.eventData))},e.prototype.onTouchEnd=function(t){this.autoPreventDefault&&t.preventDefault();for(var e=t.changedTouches,r=e.length,n=0;n<r;n++){var i=e[n],o=this.getTouchData(i);o.originalEvent=t,this.eventData.data=o,this.eventData._reset(),this.processInteractive(o.global,this.renderer._lastObjectRendered,this.processTouchEnd,!0),this.emit(\"touchend\",this.eventData),this.returnTouchData(o)}},e.prototype.processTouchEnd=function(t,e){e?(this.dispatchEvent(t,\"touchend\",this.eventData),t._touchDown&&(t._touchDown=!1,this.dispatchEvent(t,\"tap\",this.eventData))):t._touchDown&&(t._touchDown=!1,this.dispatchEvent(t,\"touchendoutside\",this.eventData))},e.prototype.onTouchMove=function(t){this.autoPreventDefault&&t.preventDefault();for(var e=t.changedTouches,r=e.length,n=0;n<r;n++){var i=e[n],o=this.getTouchData(i);o.originalEvent=t,this.eventData.data=o,this.eventData._reset(),this.processInteractive(o.global,this.renderer._lastObjectRendered,this.processTouchMove,this.moveWhenInside),this.emit(\"touchmove\",this.eventData),this.returnTouchData(o)}},e.prototype.processTouchMove=function(t,e){this.moveWhenInside&&!e||this.dispatchEvent(t,\"touchmove\",this.eventData)},e.prototype.getTouchData=function(t){var e=this.interactiveDataPool.pop()||new c.default;return e.identifier=t.identifier,this.mapPositionToPoint(e.global,t.clientX,t.clientY),navigator.isCocoonJS&&(e.global.x=e.global.x/this.resolution,e.global.y=e.global.y/this.resolution),t.globalX=e.global.x,t.globalY=e.global.y,e},e.prototype.returnTouchData=function(t){this.interactiveDataPool.push(t)},e.prototype.normalizeToPointerData=function(t){this.normalizeTouchEvents&&t.changedTouches?(\"undefined\"==typeof t.button&&(t.button=t.touches.length?1:0),\"undefined\"==typeof t.buttons&&(t.buttons=t.touches.length?1:0),\"undefined\"==typeof t.isPrimary&&(t.isPrimary=1===t.touches.length),\"undefined\"==typeof t.width&&(t.width=t.changedTouches[0].radiusX||1),\"undefined\"==typeof t.height&&(t.height=t.changedTouches[0].radiusY||1),\"undefined\"==typeof t.tiltX&&(t.tiltX=0),\"undefined\"==typeof t.tiltY&&(t.tiltY=0),\"undefined\"==typeof t.pointerType&&(t.pointerType=\"touch\"),\"undefined\"==typeof t.pointerId&&(t.pointerId=t.changedTouches[0].identifier||0),\"undefined\"==typeof t.pressure&&(t.pressure=t.changedTouches[0].force||.5),\"undefined\"==typeof t.rotation&&(t.rotation=t.changedTouches[0].rotationAngle||0),\"undefined\"==typeof t.clientX&&(t.clientX=t.changedTouches[0].clientX),\"undefined\"==typeof t.clientY&&(t.clientY=t.changedTouches[0].clientY),\"undefined\"==typeof t.pageX&&(t.pageX=t.changedTouches[0].pageX),\"undefined\"==typeof t.pageY&&(t.pageY=t.changedTouches[0].pageY),\"undefined\"==typeof t.screenX&&(t.screenX=t.changedTouches[0].screenX),\"undefined\"==typeof t.screenY&&(t.screenY=t.changedTouches[0].screenY),\"undefined\"==typeof t.layerX&&(t.layerX=t.offsetX=t.clientX),\"undefined\"==typeof t.layerY&&(t.layerY=t.offsetY=t.clientY)):this.normalizeMouseEvents&&(\"undefined\"==typeof t.isPrimary&&(t.isPrimary=!0),\"undefined\"==typeof t.width&&(t.width=1),\"undefined\"==typeof t.height&&(t.height=1),\"undefined\"==typeof t.tiltX&&(t.tiltX=0),\"undefined\"==typeof t.tiltY&&(t.tiltY=0),\"undefined\"==typeof t.pointerType&&(t.pointerType=\"mouse\"),\"undefined\"==typeof t.pointerId&&(t.pointerId=1),\"undefined\"==typeof t.pressure&&(t.pressure=.5),\"undefined\"==typeof t.rotation&&(t.rotation=0))},e.prototype.destroy=function(){this.removeEvents(),this.removeAllListeners(),this.renderer=null,this.mouse=null,this.eventData=null,this.interactiveDataPool=null,this.interactionDOMElement=null,this.onMouseDown=null,this.processMouseDown=null,this.onMouseUp=null,this.processMouseUp=null,this.onMouseMove=null,this.processMouseMove=null,this.onMouseOut=null,this.processMouseOverOut=null,this.onMouseOver=null,this.onPointerDown=null,this.processPointerDown=null,this.onPointerUp=null,this.processPointerUp=null,this.onPointerMove=null,this.processPointerMove=null,this.onPointerOut=null,this.processPointerOverOut=null,this.onPointerOver=null,this.onTouchStart=null,this.processTouchStart=null,this.onTouchEnd=null,this.processTouchEnd=null,this.onTouchMove=null,this.processTouchMove=null,this._tempPoint=null},e}(v.default);r.default=b,h.WebGLRenderer.registerPlugin(\"interaction\",b),h.CanvasRenderer.registerPlugin(\"interaction\",b)},{\"../core\":61,\"./InteractionData\":145,\"./InteractionEvent\":146,\"./interactiveTarget\":149,eventemitter3:3,ismobilejs:4}],148:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}r.__esModule=!0;var i=t(\"./InteractionData\");Object.defineProperty(r,\"InteractionData\",{enumerable:!0,get:function(){return n(i).default}});var o=t(\"./InteractionManager\");Object.defineProperty(r,\"InteractionManager\",{enumerable:!0,get:function(){return n(o).default}});var s=t(\"./interactiveTarget\");Object.defineProperty(r,\"interactiveTarget\",{enumerable:!0,get:function(){return n(s).default}})},{\"./InteractionData\":145,\"./InteractionManager\":147,\"./interactiveTarget\":149}],149:[function(t,e,r){\"use strict\";r.__esModule=!0,r.default={interactive:!1,interactiveChildren:!0,hitArea:null,buttonMode:!1,defaultCursor:\"pointer\",_over:!1,_isLeftDown:!1,_isRightDown:!1,_pointerOver:!1,_pointerDown:!1,_touchDown:!1}},{}],150:[function(t,e,r){\"use strict\";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function i(t,e){var r={},n=t.data.getElementsByTagName(\"info\")[0],i=t.data.getElementsByTagName(\"common\")[0];r.font=n.getAttribute(\"face\"),r.size=parseInt(n.getAttribute(\"size\"),10),r.lineHeight=parseInt(i.getAttribute(\"lineHeight\"),10),r.chars={};for(var o=t.data.getElementsByTagName(\"char\"),s=0;s<o.length;s++){var u=parseInt(o[s].getAttribute(\"id\"),10),l=new a.Rectangle(parseInt(o[s].getAttribute(\"x\"),10)+e.frame.x,parseInt(o[s].getAttribute(\"y\"),10)+e.frame.y,parseInt(o[s].getAttribute(\"width\"),10),parseInt(o[s].getAttribute(\"height\"),10));r.chars[u]={xOffset:parseInt(o[s].getAttribute(\"xoffset\"),10),yOffset:parseInt(o[s].getAttribute(\"yoffset\"),10),xAdvance:parseInt(o[s].getAttribute(\"xadvance\"),10),kerning:{},texture:new a.Texture(e.baseTexture,l)}}for(var c=t.data.getElementsByTagName(\"kerning\"),d=0;d<c.length;d++){var f=parseInt(c[d].getAttribute(\"first\"),10),p=parseInt(c[d].getAttribute(\"second\"),10),v=parseInt(c[d].getAttribute(\"amount\"),10);r.chars[p]&&(r.chars[p].kerning[f]=v)}t.bitmapFont=r,h.BitmapText.fonts[r.font]=r}r.__esModule=!0,r.parse=i,r.default=function(){return function(t,e){if(!t.data||!t.isXml)return void e();if(0===t.data.getElementsByTagName(\"page\").length||0===t.data.getElementsByTagName(\"info\").length||null===t.data.getElementsByTagName(\"info\")[0].getAttribute(\"face\"))return void e();var r=t.isDataUrl?\"\":s.dirname(t.url);t.isDataUrl&&(\".\"===r&&(r=\"\"),this.baseUrl&&r&&(\"/\"===this.baseUrl.charAt(this.baseUrl.length-1)&&(r+=\"/\"),r=r.replace(this.baseUrl,\"\"))),r&&\"/\"!==r.charAt(r.length-1)&&(r+=\"/\");var n=r+t.data.getElementsByTagName(\"page\")[0].getAttribute(\"file\");if(a.utils.TextureCache[n])i(t,a.utils.TextureCache[n]),e();else{var o={crossOrigin:t.crossOrigin,loadType:u.Resource.LOAD_TYPE.IMAGE,metadata:t.metadata.imageMetadata};this.add(t.name+\"_image\",n,o,function(r){i(t,r.texture),e()})}}};var o=t(\"path\"),s=n(o),a=t(\"../core\"),u=t(\"resource-loader\"),h=t(\"../extras\")},{\"../core\":61,\"../extras\":131,path:22,\"resource-loader\":35}],151:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}r.__esModule=!0;var i=t(\"./loader\");Object.defineProperty(r,\"Loader\",{enumerable:!0,get:function(){return n(i).default}});var o=t(\"./bitmapFontParser\");Object.defineProperty(r,\"bitmapFontParser\",{enumerable:!0,get:function(){return n(o).default}}),Object.defineProperty(r,\"parseBitmapFontData\",{enumerable:!0,get:function(){return o.parse}});var s=t(\"./spritesheetParser\");Object.defineProperty(r,\"spritesheetParser\",{enumerable:!0,get:function(){return n(s).default}});var a=t(\"./textureParser\");Object.defineProperty(r,\"textureParser\",{enumerable:!0,get:function(){return n(a).default}});var u=t(\"resource-loader\");Object.defineProperty(r,\"Resource\",{enumerable:!0,get:function(){return u.Resource}})},{\"./bitmapFontParser\":150,\"./loader\":152,\"./spritesheetParser\":153,\"./textureParser\":154,\"resource-loader\":35}],152:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}function o(t,e){if(!t)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!e||\"object\"!=typeof e&&\"function\"!=typeof e?t:e}function s(t,e){if(\"function\"!=typeof e&&null!==e)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=t(\"resource-loader\"),u=n(a),h=t(\"./textureParser\"),l=n(h),c=t(\"./spritesheetParser\"),d=n(c),f=t(\"./bitmapFontParser\"),p=n(f),v=function(t){function e(r,n){i(this,e);for(var s=o(this,t.call(this,r,n)),a=0;a<e._pixiMiddleware.length;++a)s.use(e._pixiMiddleware[a]());return s}return s(e,t),e.addPixiMiddleware=function(t){e._pixiMiddleware.push(t)},e}(u.default);r.default=v,v._pixiMiddleware=[u.default.middleware.parsing.blob,l.default,d.default,p.default];var y=u.default.Resource;y.setExtensionXhrType(\"fnt\",y.XHR_RESPONSE_TYPE.DOCUMENT)},{\"./bitmapFontParser\":150,\"./spritesheetParser\":153,\"./textureParser\":154,\"resource-loader\":35}],153:[function(t,e,r){\"use strict\";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function i(t){return t&&t.__esModule?t:{default:t}}r.__esModule=!0,r.default=function(){return function(t,e){var r=void 0,n=t.name+\"_image\";if(!t.data||!t.isJson||!t.data.frames||this.resources[n])return void e();var i={crossOrigin:t.crossOrigin,loadType:o.Resource.LOAD_TYPE.IMAGE,metadata:t.metadata.imageMetadata};r=t.isDataUrl?t.data.meta.image:a.default.dirname(t.url.replace(this.baseUrl,\"\"))+\"/\"+t.data.meta.image,this.add(n,r,i,function(r){function n(e,r){for(var n=e;n-e<r&&n<u.length;){var i=u[n],o=a[i].frame;if(o){var s=null,l=null,f=new h.Rectangle(0,0,a[i].sourceSize.w/d,a[i].sourceSize.h/d);s=a[i].rotated?new h.Rectangle(o.x/d,o.y/d,o.h/d,o.w/d):new h.Rectangle(o.x/d,o.y/d,o.w/d,o.h/d),a[i].trimmed&&(l=new h.Rectangle(a[i].spriteSourceSize.x/d,a[i].spriteSourceSize.y/d,o.w/d,o.h/d)),t.textures[i]=new h.Texture(c,s,f,l,a[i].rotated?2:0),h.utils.TextureCache[i]=t.textures[i]}n++}}function i(){return p*l<u.length}function o(t){n(p*l,l),p++,setTimeout(t,0)}function s(){o(function(){i()?s():e()})}t.textures={};var a=t.data.frames,u=Object.keys(a),c=r.texture.baseTexture,d=h.utils.getResolutionOfUrl(t.url),f=t.data.meta.scale;1===d&&void 0!==f&&1!==f&&(c.resolution=d=f,c.update());var p=0;u.length<=l?(n(0,l),e()):s()})}};var o=t(\"resource-loader\"),s=t(\"path\"),a=i(s),u=t(\"../core\"),h=n(u),l=1e3},{\"../core\":61,path:22,\"resource-loader\":35}],154:[function(t,e,r){\"use strict\";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}r.__esModule=!0,r.default=function(){return function(t,e){if(t.data&&t.isImage){var r=new o.BaseTexture(t.data,null,o.utils.getResolutionOfUrl(t.url));r.imageUrl=t.url,t.texture=new o.Texture(r),o.utils.BaseTextureCache[t.name]=r,o.utils.TextureCache[t.name]=t.texture,t.name!==t.url&&(o.utils.BaseTextureCache[t.url]=r,o.utils.TextureCache[t.url]=t.texture)}e()}};var i=t(\"../core\"),o=n(i)},{\"../core\":61}],155:[function(t,e,r){\"use strict\";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function i(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}function o(t,e){if(!t)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!e||\"object\"!=typeof e&&\"function\"!=typeof e?t:e}function s(t,e){if(\"function\"!=typeof e&&null!==e)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,\"value\"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),u=t(\"../core\"),h=n(u),l=new h.Point,c=new h.Polygon,d=function(t){function e(r,n,s,a,u){i(this,e);var l=o(this,t.call(this));return l._texture=null,l.uvs=s||new Float32Array([0,0,1,0,1,1,0,1]),l.vertices=n||new Float32Array([0,0,100,0,100,100,0,100]),l.indices=a||new Uint16Array([0,1,3,2]),l.dirty=0,l.indexDirty=0,l.blendMode=h.BLEND_MODES.NORMAL,l.canvasPadding=0,l.drawMode=u||e.DRAW_MODES.TRIANGLE_MESH,l.texture=r,l.shader=null,l.tintRgb=new Float32Array([1,1,1]),l._glDatas={},l}return s(e,t),e.prototype._renderWebGL=function(t){t.setObjectRenderer(t.plugins.mesh),t.plugins.mesh.render(this)},e.prototype._renderCanvas=function(t){t.plugins.mesh.render(this)},e.prototype._onTextureUpdate=function(){},e.prototype._calculateBounds=function(){this._bounds.addVertices(this.transform,this.vertices,0,this.vertices.length)},e.prototype.containsPoint=function(t){if(!this.getBounds().contains(t.x,t.y))return!1;this.worldTransform.applyInverse(t,l);for(var r=this.vertices,n=c.points,i=this.indices,o=this.indices.length,s=this.drawMode===e.DRAW_MODES.TRIANGLES?3:1,a=0;a+2<o;a+=s){var u=2*i[a],h=2*i[a+1],d=2*i[a+2];if(n[0]=r[u],n[1]=r[u+1],n[2]=r[h],n[3]=r[h+1],n[4]=r[d],n[5]=r[d+1],c.contains(l.x,l.y))return!0}return!1},a(e,[{key:\"texture\",get:function(){return this._texture},set:function(t){this._texture!==t&&(this._texture=t,t&&(t.baseTexture.hasLoaded?this._onTextureUpdate():t.once(\"update\",this._onTextureUpdate,this)))}},{key:\"tint\",get:function(){return h.utils.rgb2hex(this.tintRgb)},set:function(t){this.tintRgb=h.utils.hex2rgb(t,this.tintRgb)}}]),e}(h.Container);r.default=d,d.DRAW_MODES={TRIANGLE_MESH:0,TRIANGLES:1}},{\"../core\":61}],156:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}function o(t,e){if(!t)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!e||\"object\"!=typeof e&&\"function\"!=typeof e?t:e}function s(t,e){if(\"function\"!=typeof e&&null!==e)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,\"value\"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),u=t(\"./Plane\"),h=n(u),l=10,c=function(t){function e(r,n,s,a,u){i(this,e);var h=o(this,t.call(this,r,4,4)),c=h.uvs;return c[6]=c[14]=c[22]=c[30]=1,c[25]=c[27]=c[29]=c[31]=1,h._origWidth=r.width,h._origHeight=r.height,h._uvw=1/h._origWidth,h._uvh=1/h._origHeight,h.width=r.width,h.height=r.height,c[2]=c[10]=c[18]=c[26]=h._uvw*n,c[4]=c[12]=c[20]=c[28]=1-h._uvw*a,c[9]=c[11]=c[13]=c[15]=h._uvh*s,c[17]=c[19]=c[21]=c[23]=1-h._uvh*u,h.leftWidth=\"undefined\"!=typeof n?n:l,h.rightWidth=\"undefined\"!=typeof a?a:l,h.topHeight=\"undefined\"!=typeof s?s:l,h.bottomHeight=\"undefined\"!=typeof u?u:l,h}return s(e,t),\ne.prototype.updateHorizontalVertices=function(){var t=this.vertices;t[9]=t[11]=t[13]=t[15]=this._topHeight,t[17]=t[19]=t[21]=t[23]=this._height-this._bottomHeight,t[25]=t[27]=t[29]=t[31]=this._height},e.prototype.updateVerticalVertices=function(){var t=this.vertices;t[2]=t[10]=t[18]=t[26]=this._leftWidth,t[4]=t[12]=t[20]=t[28]=this._width-this._rightWidth,t[6]=t[14]=t[22]=t[30]=this._width},e.prototype._renderCanvas=function(t){var e=t.context;e.globalAlpha=this.worldAlpha;var r=this.worldTransform,n=t.resolution;t.roundPixels?e.setTransform(r.a*n,r.b*n,r.c*n,r.d*n,r.tx*n|0,r.ty*n|0):e.setTransform(r.a*n,r.b*n,r.c*n,r.d*n,r.tx*n,r.ty*n);var i=this._texture.baseTexture,o=i.source,s=i.width,a=i.height;this.drawSegment(e,o,s,a,0,1,10,11),this.drawSegment(e,o,s,a,2,3,12,13),this.drawSegment(e,o,s,a,4,5,14,15),this.drawSegment(e,o,s,a,8,9,18,19),this.drawSegment(e,o,s,a,10,11,20,21),this.drawSegment(e,o,s,a,12,13,22,23),this.drawSegment(e,o,s,a,16,17,26,27),this.drawSegment(e,o,s,a,18,19,28,29),this.drawSegment(e,o,s,a,20,21,30,31)},e.prototype.drawSegment=function(t,e,r,n,i,o,s,a){var u=this.uvs,h=this.vertices,l=(u[s]-u[i])*r,c=(u[a]-u[o])*n,d=h[s]-h[i],f=h[a]-h[o];l<1&&(l=1),c<1&&(c=1),d<1&&(d=1),f<1&&(f=1),t.drawImage(e,u[i]*r,u[o]*n,l,c,h[i],h[o],d,f)},a(e,[{key:\"width\",get:function(){return this._width},set:function(t){this._width=t,this.updateVerticalVertices()}},{key:\"height\",get:function(){return this._height},set:function(t){this._height=t,this.updateHorizontalVertices()}},{key:\"leftWidth\",get:function(){return this._leftWidth},set:function(t){this._leftWidth=t;var e=this.uvs,r=this.vertices;e[2]=e[10]=e[18]=e[26]=this._uvw*t,r[2]=r[10]=r[18]=r[26]=t,this.dirty=!0}},{key:\"rightWidth\",get:function(){return this._rightWidth},set:function(t){this._rightWidth=t;var e=this.uvs,r=this.vertices;e[4]=e[12]=e[20]=e[28]=1-this._uvw*t,r[4]=r[12]=r[20]=r[28]=this._width-t,this.dirty=!0}},{key:\"topHeight\",get:function(){return this._topHeight},set:function(t){this._topHeight=t;var e=this.uvs,r=this.vertices;e[9]=e[11]=e[13]=e[15]=this._uvh*t,r[9]=r[11]=r[13]=r[15]=t,this.dirty=!0}},{key:\"bottomHeight\",get:function(){return this._bottomHeight},set:function(t){this._bottomHeight=t;var e=this.uvs,r=this.vertices;e[17]=e[19]=e[21]=e[23]=1-this._uvh*t,r[17]=r[19]=r[21]=r[23]=this._height-t,this.dirty=!0}}]),e}(h.default);r.default=c},{\"./Plane\":157}],157:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}function o(t,e){if(!t)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!e||\"object\"!=typeof e&&\"function\"!=typeof e?t:e}function s(t,e){if(\"function\"!=typeof e&&null!==e)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=t(\"./Mesh\"),u=n(a),h=function(t){function e(r,n,s){i(this,e);var a=o(this,t.call(this,r));return a._ready=!0,a.verticesX=n||10,a.verticesY=s||10,a.drawMode=u.default.DRAW_MODES.TRIANGLES,a.refresh(),a}return s(e,t),e.prototype.refresh=function(){for(var t=this.verticesX*this.verticesY,e=[],r=[],n=[],i=[],o=this.texture,s=this.verticesX-1,a=this.verticesY-1,u=o.width/s,h=o.height/a,l=0;l<t;l++)if(o._uvs){var c=l%this.verticesX,d=l/this.verticesX|0;e.push(c*u,d*h),n.push(o._uvs.x0+(o._uvs.x1-o._uvs.x0)*(c/(this.verticesX-1)),o._uvs.y0+(o._uvs.y3-o._uvs.y0)*(d/(this.verticesY-1)))}else n.push(0);for(var f=s*a,p=0;p<f;p++){var v=p%s,y=p/s|0,g=y*this.verticesX+v,m=y*this.verticesX+v+1,_=(y+1)*this.verticesX+v,b=(y+1)*this.verticesX+v+1;i.push(g,m,_),i.push(m,b,_)}this.vertices=new Float32Array(e),this.uvs=new Float32Array(n),this.colors=new Float32Array(r),this.indices=new Uint16Array(i),this.indexDirty=!0},e.prototype._onTextureUpdate=function(){u.default.prototype._onTextureUpdate.call(this),this._ready&&this.refresh()},e}(u.default);r.default=h},{\"./Mesh\":155}],158:[function(t,e,r){\"use strict\";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function i(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}function s(t,e){if(!t)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!e||\"object\"!=typeof e&&\"function\"!=typeof e?t:e}function a(t,e){if(\"function\"!=typeof e&&null!==e)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var u=t(\"./Mesh\"),h=i(u),l=t(\"../core\"),c=n(l),d=function(t){function e(r,n){o(this,e);var i=s(this,t.call(this,r));return i.points=n,i.vertices=new Float32Array(4*n.length),i.uvs=new Float32Array(4*n.length),i.colors=new Float32Array(2*n.length),i.indices=new Uint16Array(2*n.length),i._ready=!0,i.refresh(),i}return a(e,t),e.prototype.refresh=function(){var t=this.points;if(!(t.length<1)&&this._texture._uvs){this.vertices.length/4!==t.length&&(this.vertices=new Float32Array(4*t.length),this.uvs=new Float32Array(4*t.length),this.colors=new Float32Array(2*t.length),this.indices=new Uint16Array(2*t.length));var e=this.uvs,r=this.indices,n=this.colors,i=this._texture._uvs,o=new c.Point(i.x0,i.y0),s=new c.Point(i.x2-i.x0,i.y2-i.y0);e[0]=0+o.x,e[1]=0+o.y,e[2]=0+o.x,e[3]=Number(s.y)+o.y,n[0]=1,n[1]=1,r[0]=0,r[1]=1;for(var a=t.length,u=1;u<a;u++){var h=4*u,l=u/(a-1);e[h]=l*s.x+o.x,e[h+1]=0+o.y,e[h+2]=l*s.x+o.x,e[h+3]=Number(s.y)+o.y,h=2*u,n[h]=1,n[h+1]=1,h=2*u,r[h]=h,r[h+1]=h+1}this.dirty++,this.indexDirty++}},e.prototype._onTextureUpdate=function(){t.prototype._onTextureUpdate.call(this),this._ready&&this.refresh()},e.prototype.updateTransform=function(){var t=this.points;if(!(t.length<1)){for(var e=t[0],r=void 0,n=0,i=0,o=this.vertices,s=t.length,a=0;a<s;a++){var u=t[a],h=4*a;r=a<t.length-1?t[a+1]:u,i=-(r.x-e.x),n=r.y-e.y;var l=10*(1-a/(s-1));l>1&&(l=1);var c=Math.sqrt(n*n+i*i),d=this._texture.height/2;n/=c,i/=c,n*=d,i*=d,o[h]=u.x+n,o[h+1]=u.y+i,o[h+2]=u.x-n,o[h+3]=u.y-i,e=u}this.containerUpdateTransform()}},e}(h.default);r.default=d},{\"../core\":61,\"./Mesh\":155}],159:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}function i(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function o(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}r.__esModule=!0;var s=t(\"../../core\"),a=i(s),u=t(\"../Mesh\"),h=n(u),l=function(){function t(e){o(this,t),this.renderer=e}return t.prototype.render=function(t){var e=this.renderer,r=e.context,n=t.worldTransform,i=e.resolution;e.roundPixels?r.setTransform(n.a*i,n.b*i,n.c*i,n.d*i,n.tx*i|0,n.ty*i|0):r.setTransform(n.a*i,n.b*i,n.c*i,n.d*i,n.tx*i,n.ty*i),e.setBlendMode(t.blendMode),t.drawMode===h.default.DRAW_MODES.TRIANGLE_MESH?this._renderTriangleMesh(t):this._renderTriangles(t)},t.prototype._renderTriangleMesh=function(t){for(var e=t.vertices.length/2,r=0;r<e-2;r++){var n=2*r;this._renderDrawTriangle(t,n,n+2,n+4)}},t.prototype._renderTriangles=function(t){for(var e=t.indices,r=e.length,n=0;n<r;n+=3){var i=2*e[n],o=2*e[n+1],s=2*e[n+2];this._renderDrawTriangle(t,i,o,s)}},t.prototype._renderDrawTriangle=function(t,e,r,n){var i=this.renderer.context,o=t.uvs,s=t.vertices,a=t._texture;if(a.valid){var u=a.baseTexture,h=u.source,l=u.width,c=u.height,d=o[e]*u.width,f=o[r]*u.width,p=o[n]*u.width,v=o[e+1]*u.height,y=o[r+1]*u.height,g=o[n+1]*u.height,m=s[e],_=s[r],b=s[n],x=s[e+1],T=s[r+1],w=s[n+1];if(t.canvasPadding>0){var E=t.canvasPadding/t.worldTransform.a,O=t.canvasPadding/t.worldTransform.d,S=(m+_+b)/3,M=(x+T+w)/3,P=m-S,C=x-M,R=Math.sqrt(P*P+C*C);m=S+P/R*(R+E),x=M+C/R*(R+O),P=_-S,C=T-M,R=Math.sqrt(P*P+C*C),_=S+P/R*(R+E),T=M+C/R*(R+O),P=b-S,C=w-M,R=Math.sqrt(P*P+C*C),b=S+P/R*(R+E),w=M+C/R*(R+O)}i.save(),i.beginPath(),i.moveTo(m,x),i.lineTo(_,T),i.lineTo(b,w),i.closePath(),i.clip();var A=d*y+v*p+f*g-y*p-v*f-d*g,D=m*y+v*b+_*g-y*b-v*_-m*g,I=d*_+m*p+f*b-_*p-m*f-d*b,L=d*y*b+v*_*p+m*f*g-m*y*p-v*f*b-d*_*g,j=x*y+v*w+T*g-y*w-v*T-x*g,B=d*T+x*p+f*w-T*p-x*f-d*w,F=d*y*w+v*T*p+x*f*g-x*y*p-v*f*w-d*T*g;i.transform(D/A,j/A,I/A,B/A,L/A,F/A),i.drawImage(h,0,0,l*u.resolution,c*u.resolution,0,0,l,c),i.restore()}},t.prototype.renderMeshFlat=function(t){var e=this.renderer.context,r=t.vertices,n=r.length/2;e.beginPath();for(var i=1;i<n-2;++i){var o=2*i,s=r[o],a=r[o+1],u=r[o+2],h=r[o+3],l=r[o+4],c=r[o+5];e.moveTo(s,a),e.lineTo(u,h),e.lineTo(l,c)}e.fillStyle=\"#FF0000\",e.fill(),e.closePath()},t.prototype.destroy=function(){this.renderer=null},t}();r.default=l,a.CanvasRenderer.registerPlugin(\"mesh\",l)},{\"../../core\":61,\"../Mesh\":155}],160:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}r.__esModule=!0;var i=t(\"./Mesh\");Object.defineProperty(r,\"Mesh\",{enumerable:!0,get:function(){return n(i).default}});var o=t(\"./webgl/MeshRenderer\");Object.defineProperty(r,\"MeshRenderer\",{enumerable:!0,get:function(){return n(o).default}});var s=t(\"./canvas/CanvasMeshRenderer\");Object.defineProperty(r,\"CanvasMeshRenderer\",{enumerable:!0,get:function(){return n(s).default}});var a=t(\"./Plane\");Object.defineProperty(r,\"Plane\",{enumerable:!0,get:function(){return n(a).default}});var u=t(\"./NineSlicePlane\");Object.defineProperty(r,\"NineSlicePlane\",{enumerable:!0,get:function(){return n(u).default}});var h=t(\"./Rope\");Object.defineProperty(r,\"Rope\",{enumerable:!0,get:function(){return n(h).default}})},{\"./Mesh\":155,\"./NineSlicePlane\":156,\"./Plane\":157,\"./Rope\":158,\"./canvas/CanvasMeshRenderer\":159,\"./webgl/MeshRenderer\":161}],161:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}function i(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function o(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}function s(t,e){if(!t)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!e||\"object\"!=typeof e&&\"function\"!=typeof e?t:e}function a(t,e){if(\"function\"!=typeof e&&null!==e)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var u=t(\"../../core\"),h=i(u),l=t(\"pixi-gl-core\"),c=n(l),d=t(\"../Mesh\"),f=n(d),p=(t(\"path\"),function(t){function e(r){o(this,e);var n=s(this,t.call(this,r));return n.shader=null,n}return a(e,t),e.prototype.onContextChange=function(){var t=this.renderer.gl;this.shader=new h.Shader(t,\"attribute vec2 aVertexPosition;\\nattribute vec2 aTextureCoord;\\n\\nuniform mat3 translationMatrix;\\nuniform mat3 projectionMatrix;\\n\\nvarying vec2 vTextureCoord;\\n\\nvoid main(void)\\n{\\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\\n\\n    vTextureCoord = aTextureCoord;\\n}\\n\",\"varying vec2 vTextureCoord;\\nuniform float alpha;\\nuniform vec3 tint;\\n\\nuniform sampler2D uSampler;\\n\\nvoid main(void)\\n{\\n    gl_FragColor = texture2D(uSampler, vTextureCoord) * vec4(tint * alpha, alpha);\\n}\\n\")},e.prototype.render=function(t){var e=this.renderer,r=e.gl,n=t._texture;if(n.valid){var i=t._glDatas[e.CONTEXT_UID];i||(e.bindVao(null),i={shader:this.shader,vertexBuffer:c.default.GLBuffer.createVertexBuffer(r,t.vertices,r.STREAM_DRAW),uvBuffer:c.default.GLBuffer.createVertexBuffer(r,t.uvs,r.STREAM_DRAW),indexBuffer:c.default.GLBuffer.createIndexBuffer(r,t.indices,r.STATIC_DRAW),vao:null,dirty:t.dirty,indexDirty:t.indexDirty},i.vao=new c.default.VertexArrayObject(r).addIndex(i.indexBuffer).addAttribute(i.vertexBuffer,i.shader.attributes.aVertexPosition,r.FLOAT,!1,8,0).addAttribute(i.uvBuffer,i.shader.attributes.aTextureCoord,r.FLOAT,!1,8,0),t._glDatas[e.CONTEXT_UID]=i),t.dirty!==i.dirty&&(i.dirty=t.dirty,i.uvBuffer.upload(t.uvs)),t.indexDirty!==i.indexDirty&&(i.indexDirty=t.indexDirty,i.indexBuffer.upload(t.indices)),i.vertexBuffer.upload(t.vertices),e.bindShader(i.shader),i.shader.uniforms.uSampler=e.bindTexture(n),e.state.setBlendMode(t.blendMode),i.shader.uniforms.translationMatrix=t.worldTransform.toArray(!0),i.shader.uniforms.alpha=t.worldAlpha,i.shader.uniforms.tint=t.tintRgb;var o=t.drawMode===f.default.DRAW_MODES.TRIANGLE_MESH?r.TRIANGLE_STRIP:r.TRIANGLES;e.bindVao(i.vao),i.vao.draw(o,t.indices.length,0)}},e}(h.ObjectRenderer));r.default=p,h.WebGLRenderer.registerPlugin(\"mesh\",p)},{\"../../core\":61,\"../Mesh\":155,path:22,\"pixi-gl-core\":12}],162:[function(t,e,r){\"use strict\";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function i(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}function o(t,e){if(!t)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!e||\"object\"!=typeof e&&\"function\"!=typeof e?t:e}function s(t,e){if(\"function\"!=typeof e&&null!==e)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=t(\"../core\"),u=n(a),h=function(t){function e(){var r=arguments.length<=0||void 0===arguments[0]?1500:arguments[0],n=arguments[1],s=arguments.length<=2||void 0===arguments[2]?16384:arguments[2];i(this,e);var a=o(this,t.call(this)),h=16384;return s>h&&(s=h),s>r&&(s=r),a._properties=[!1,!0,!1,!1,!1],a._maxSize=r,a._batchSize=s,a._glBuffers={},a._bufferToUpdate=0,a.interactiveChildren=!1,a.blendMode=u.BLEND_MODES.NORMAL,a.roundPixels=!0,a.baseTexture=null,a.setProperties(n),a}return s(e,t),e.prototype.setProperties=function(t){t&&(this._properties[0]=\"scale\"in t?!!t.scale:this._properties[0],this._properties[1]=\"position\"in t?!!t.position:this._properties[1],this._properties[2]=\"rotation\"in t?!!t.rotation:this._properties[2],this._properties[3]=\"uvs\"in t?!!t.uvs:this._properties[3],this._properties[4]=\"alpha\"in t?!!t.alpha:this._properties[4])},e.prototype.updateTransform=function(){this.displayObjectUpdateTransform()},e.prototype.renderWebGL=function(t){var e=this;this.visible&&!(this.worldAlpha<=0)&&this.children.length&&this.renderable&&(this.baseTexture||(this.baseTexture=this.children[0]._texture.baseTexture,this.baseTexture.hasLoaded||this.baseTexture.once(\"update\",function(){return e.onChildrenChange(0)})),t.setObjectRenderer(t.plugins.particle),t.plugins.particle.render(this))},e.prototype.onChildrenChange=function(t){var e=Math.floor(t/this._batchSize);e<this._bufferToUpdate&&(this._bufferToUpdate=e)},e.prototype.renderCanvas=function(t){if(this.visible&&!(this.worldAlpha<=0)&&this.children.length&&this.renderable){var e=t.context,r=this.worldTransform,n=!0,i=0,o=0,s=0,a=0,u=t.blendModes[this.blendMode];u!==e.globalCompositeOperation&&(e.globalCompositeOperation=u),e.globalAlpha=this.worldAlpha,this.displayObjectUpdateTransform();for(var h=0;h<this.children.length;++h){var l=this.children[h];if(l.visible){var c=l.texture.frame;if(e.globalAlpha=this.worldAlpha*l.alpha,l.rotation%(2*Math.PI)===0)n&&(e.setTransform(r.a,r.b,r.c,r.d,r.tx*t.resolution,r.ty*t.resolution),n=!1),i=l.anchor.x*(-c.width*l.scale.x)+l.position.x+.5,o=l.anchor.y*(-c.height*l.scale.y)+l.position.y+.5,s=c.width*l.scale.x,a=c.height*l.scale.y;else{n||(n=!0),l.displayObjectUpdateTransform();var d=l.worldTransform;t.roundPixels?e.setTransform(d.a,d.b,d.c,d.d,d.tx*t.resolution|0,d.ty*t.resolution|0):e.setTransform(d.a,d.b,d.c,d.d,d.tx*t.resolution,d.ty*t.resolution),i=l.anchor.x*-c.width+.5,o=l.anchor.y*-c.height+.5,s=c.width,a=c.height}var f=l.texture.baseTexture.resolution;e.drawImage(l.texture.baseTexture.source,c.x*f,c.y*f,c.width*f,c.height*f,i*f,o*f,s*f,a*f)}}}},e.prototype.destroy=function(e){if(t.prototype.destroy.call(this,e),this._buffers)for(var r=0;r<this._buffers.length;++r)this._buffers[r].destroy();this._properties=null,this._buffers=null},e}(u.Container);r.default=h},{\"../core\":61}],163:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}r.__esModule=!0;var i=t(\"./ParticleContainer\");Object.defineProperty(r,\"ParticleContainer\",{enumerable:!0,get:function(){return n(i).default}});var o=t(\"./webgl/ParticleRenderer\");Object.defineProperty(r,\"ParticleRenderer\",{enumerable:!0,get:function(){return n(o).default}})},{\"./ParticleContainer\":162,\"./webgl/ParticleRenderer\":165}],164:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}r.__esModule=!0;var o=t(\"pixi-gl-core\"),s=n(o),a=t(\"../../core/utils/createIndicesForQuads\"),u=n(a),h=function(){function t(e,r,n,o){i(this,t),this.gl=e,this.vertSize=2,this.vertByteSize=4*this.vertSize,this.size=o,this.dynamicProperties=[],this.staticProperties=[];for(var s=0;s<r.length;++s){var a=r[s];a={attribute:a.attribute,size:a.size,uploadFunction:a.uploadFunction,offset:a.offset},n[s]?this.dynamicProperties.push(a):this.staticProperties.push(a)}this.staticStride=0,this.staticBuffer=null,this.staticData=null,this.dynamicStride=0,this.dynamicBuffer=null,this.dynamicData=null,this.initBuffers()}return t.prototype.initBuffers=function(){var t=this.gl,e=0;this.indices=(0,u.default)(this.size),this.indexBuffer=s.default.GLBuffer.createIndexBuffer(t,this.indices,t.STATIC_DRAW),this.dynamicStride=0;for(var r=0;r<this.dynamicProperties.length;++r){var n=this.dynamicProperties[r];n.offset=e,e+=n.size,this.dynamicStride+=n.size}this.dynamicData=new Float32Array(this.size*this.dynamicStride*4),this.dynamicBuffer=s.default.GLBuffer.createVertexBuffer(t,this.dynamicData,t.STREAM_DRAW);var i=0;this.staticStride=0;for(var o=0;o<this.staticProperties.length;++o){var a=this.staticProperties[o];a.offset=i,i+=a.size,this.staticStride+=a.size}this.staticData=new Float32Array(this.size*this.staticStride*4),this.staticBuffer=s.default.GLBuffer.createVertexBuffer(t,this.staticData,t.STATIC_DRAW),this.vao=new s.default.VertexArrayObject(t).addIndex(this.indexBuffer);for(var h=0;h<this.dynamicProperties.length;++h){var l=this.dynamicProperties[h];this.vao.addAttribute(this.dynamicBuffer,l.attribute,t.FLOAT,!1,4*this.dynamicStride,4*l.offset)}for(var c=0;c<this.staticProperties.length;++c){var d=this.staticProperties[c];this.vao.addAttribute(this.staticBuffer,d.attribute,t.FLOAT,!1,4*this.staticStride,4*d.offset)}},t.prototype.uploadDynamic=function(t,e,r){for(var n=0;n<this.dynamicProperties.length;n++){var i=this.dynamicProperties[n];i.uploadFunction(t,e,r,this.dynamicData,this.dynamicStride,i.offset)}this.dynamicBuffer.upload()},t.prototype.uploadStatic=function(t,e,r){for(var n=0;n<this.staticProperties.length;n++){var i=this.staticProperties[n];i.uploadFunction(t,e,r,this.staticData,this.staticStride,i.offset)}this.staticBuffer.upload()},t.prototype.destroy=function(){this.dynamicProperties=null,this.dynamicData=null,this.dynamicBuffer.destroy(),this.staticProperties=null,this.staticData=null,this.staticBuffer.destroy()},t}();r.default=h},{\"../../core/utils/createIndicesForQuads\":115,\"pixi-gl-core\":12}],165:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}function i(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function o(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}function s(t,e){if(!t)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!e||\"object\"!=typeof e&&\"function\"!=typeof e?t:e}function a(t,e){if(\"function\"!=typeof e&&null!==e)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var u=t(\"../../core\"),h=i(u),l=t(\"./ParticleShader\"),c=n(l),d=t(\"./ParticleBuffer\"),f=n(d),p=function(t){function e(r){o(this,e);var n=s(this,t.call(this,r));return n.shader=null,n.indexBuffer=null,n.properties=null,n.tempMatrix=new h.Matrix,n.CONTEXT_UID=0,n}return a(e,t),e.prototype.onContextChange=function(){var t=this.renderer.gl;this.CONTEXT_UID=this.renderer.CONTEXT_UID,this.shader=new c.default(t),this.properties=[{attribute:this.shader.attributes.aVertexPosition,size:2,uploadFunction:this.uploadVertices,offset:0},{attribute:this.shader.attributes.aPositionCoord,size:2,uploadFunction:this.uploadPosition,offset:0},{attribute:this.shader.attributes.aRotation,size:1,uploadFunction:this.uploadRotation,offset:0},{attribute:this.shader.attributes.aTextureCoord,size:2,uploadFunction:this.uploadUvs,offset:0},{attribute:this.shader.attributes.aColor,size:1,uploadFunction:this.uploadAlpha,offset:0}]},e.prototype.start=function(){this.renderer.bindShader(this.shader)},e.prototype.render=function(t){var e=t.children,r=t._maxSize,n=t._batchSize,i=this.renderer,o=e.length;if(0!==o){o>r&&(o=r);var s=t._glBuffers[i.CONTEXT_UID];s||(s=t._glBuffers[i.CONTEXT_UID]=this.generateBuffers(t)),this.renderer.setBlendMode(t.blendMode);var a=i.gl,u=t.worldTransform.copy(this.tempMatrix);u.prepend(i._activeRenderTarget.projectionMatrix),this.shader.uniforms.projectionMatrix=u.toArray(!0),this.shader.uniforms.uAlpha=t.worldAlpha;var h=e[0]._texture.baseTexture;this.shader.uniforms.uSampler=i.bindTexture(h);for(var l=0,c=0;l<o;l+=n,c+=1){var d=o-l;d>n&&(d=n);var f=s[c];f.uploadDynamic(e,l,d),t._bufferToUpdate===c&&(f.uploadStatic(e,l,d),t._bufferToUpdate=c+1),i.bindVao(f.vao),f.vao.draw(a.TRIANGLES,6*d)}}},e.prototype.generateBuffers=function(t){for(var e=this.renderer.gl,r=[],n=t._maxSize,i=t._batchSize,o=t._properties,s=0;s<n;s+=i)r.push(new f.default(e,this.properties,o,i));return r},e.prototype.uploadVertices=function(t,e,r,n,i,o){for(var s=0,a=0,u=0,h=0,l=0;l<r;++l){var c=t[e+l],d=c._texture,f=c.scale.x,p=c.scale.y,v=d.trim,y=d.orig;v?(a=v.x-c.anchor.x*y.width,s=a+v.width,h=v.y-c.anchor.y*y.height,u=h+v.height):(s=y.width*(1-c.anchor.x),a=y.width*-c.anchor.x,u=y.height*(1-c.anchor.y),h=y.height*-c.anchor.y),n[o]=a*f,n[o+1]=h*p,n[o+i]=s*f,n[o+i+1]=h*p,n[o+2*i]=s*f,n[o+2*i+1]=u*p,n[o+3*i]=a*f,n[o+3*i+1]=u*p,o+=4*i}},e.prototype.uploadPosition=function(t,e,r,n,i,o){for(var s=0;s<r;s++){var a=t[e+s].position;n[o]=a.x,n[o+1]=a.y,n[o+i]=a.x,n[o+i+1]=a.y,n[o+2*i]=a.x,n[o+2*i+1]=a.y,n[o+3*i]=a.x,n[o+3*i+1]=a.y,o+=4*i}},e.prototype.uploadRotation=function(t,e,r,n,i,o){for(var s=0;s<r;s++){var a=t[e+s].rotation;n[o]=a,n[o+i]=a,n[o+2*i]=a,n[o+3*i]=a,o+=4*i}},e.prototype.uploadUvs=function(t,e,r,n,i,o){for(var s=0;s<r;++s){var a=t[e+s]._texture._uvs;a?(n[o]=a.x0,n[o+1]=a.y0,n[o+i]=a.x1,n[o+i+1]=a.y1,n[o+2*i]=a.x2,n[o+2*i+1]=a.y2,n[o+3*i]=a.x3,n[o+3*i+1]=a.y3,o+=4*i):(n[o]=0,n[o+1]=0,n[o+i]=0,n[o+i+1]=0,n[o+2*i]=0,n[o+2*i+1]=0,n[o+3*i]=0,n[o+3*i+1]=0,o+=4*i)}},e.prototype.uploadAlpha=function(t,e,r,n,i,o){for(var s=0;s<r;s++){var a=t[e+s].alpha;n[o]=a,n[o+i]=a,n[o+2*i]=a,n[o+3*i]=a,o+=4*i}},e.prototype.destroy=function(){this.renderer.gl&&this.renderer.gl.deleteBuffer(this.indexBuffer),t.prototype.destroy.call(this),this.shader.destroy(),this.indices=null,this.tempMatrix=null},e}(h.ObjectRenderer);r.default=p,h.WebGLRenderer.registerPlugin(\"particle\",p)},{\"../../core\":61,\"./ParticleBuffer\":164,\"./ParticleShader\":166}],166:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}function o(t,e){if(!t)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!e||\"object\"!=typeof e&&\"function\"!=typeof e?t:e}function s(t,e){if(\"function\"!=typeof e&&null!==e)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=t(\"../../core/Shader\"),u=n(a),h=function(t){function e(r){return i(this,e),o(this,t.call(this,r,[\"attribute vec2 aVertexPosition;\",\"attribute vec2 aTextureCoord;\",\"attribute float aColor;\",\"attribute vec2 aPositionCoord;\",\"attribute vec2 aScale;\",\"attribute float aRotation;\",\"uniform mat3 projectionMatrix;\",\"varying vec2 vTextureCoord;\",\"varying float vColor;\",\"void main(void){\",\"   vec2 v = aVertexPosition;\",\"   v.x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);\",\"   v.y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);\",\"   v = v + aPositionCoord;\",\"   gl_Position = vec4((projectionMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);\",\"   vTextureCoord = aTextureCoord;\",\"   vColor = aColor;\",\"}\"].join(\"\\n\"),[\"varying vec2 vTextureCoord;\",\"varying float vColor;\",\"uniform sampler2D uSampler;\",\"uniform float uAlpha;\",\"void main(void){\",\"  vec4 color = texture2D(uSampler, vTextureCoord) * vColor * uAlpha;\",\"  if (color.a == 0.0) discard;\",\"  gl_FragColor = color;\",\"}\"].join(\"\\n\")))}return s(e,t),e}(u.default);r.default=h},{\"../../core/Shader\":41}],167:[function(t,e,r){\"use strict\";Math.sign||(Math.sign=function(t){return t=Number(t),0===t||isNaN(t)?t:t>0?1:-1})},{}],168:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}var i=t(\"object-assign\"),o=n(i);Object.assign||(Object.assign=o.default)},{\"object-assign\":5}],169:[function(t,e,r){\"use strict\";t(\"./Object.assign\"),t(\"./requestAnimationFrame\"),t(\"./Math.sign\"),window.ArrayBuffer||(window.ArrayBuffer=Array),window.Float32Array||(window.Float32Array=Array),window.Uint32Array||(window.Uint32Array=Array),window.Uint16Array||(window.Uint16Array=Array)},{\"./Math.sign\":167,\"./Object.assign\":168,\"./requestAnimationFrame\":170}],170:[function(t,e,r){(function(t){\"use strict\";var e=16;Date.now&&Date.prototype.getTime||(Date.now=function(){return(new Date).getTime()}),t.performance&&t.performance.now||!function(){var e=Date.now();t.performance||(t.performance={}),t.performance.now=function(){return Date.now()-e}}();for(var r=Date.now(),n=[\"ms\",\"moz\",\"webkit\",\"o\"],i=0;i<n.length&&!t.requestAnimationFrame;++i){var o=n[i];t.requestAnimationFrame=t[o+\"RequestAnimationFrame\"],t.cancelAnimationFrame=t[o+\"CancelAnimationFrame\"]||t[o+\"CancelRequestAnimationFrame\"]}t.requestAnimationFrame||(t.requestAnimationFrame=function(t){if(\"function\"!=typeof t)throw new TypeError(t+\"is not a function\");var n=Date.now(),i=e+r-n;return i<0&&(i=0),r=n,setTimeout(function(){r=Date.now(),t(performance.now())},i)}),t.cancelAnimationFrame||(t.cancelAnimationFrame=function(t){return clearTimeout(t)})}).call(this,\"undefined\"!=typeof global?global:\"undefined\"!=typeof self?self:\"undefined\"!=typeof window?window:{})},{}],171:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}function i(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function o(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}function s(t,e){return e instanceof c.Text&&(e.updateText(!0),!0)}function a(t,e){if(e instanceof c.TextStyle){var r=c.Text.getFontStyle(e);return c.Text.fontPropertiesCache[r]||c.Text.calculateFontProperties(r),!0}return!1}function u(t,e){if(t instanceof c.Text){e.indexOf(t.style)===-1&&e.push(t.style),e.indexOf(t)===-1&&e.push(t);var r=t._texture.baseTexture;return e.indexOf(r)===-1&&e.push(r),!0}return!1}function h(t,e){return t instanceof c.TextStyle&&(e.indexOf(t)===-1&&e.push(t),!0)}r.__esModule=!0;var l=t(\"../core\"),c=i(l),d=t(\"./limiters/CountLimiter\"),f=n(d),p=c.ticker.shared;c.settings.UPLOADS_PER_FRAME=4;var v=function(){function t(e){var r=this;o(this,t),this.limiter=new f.default(c.settings.UPLOADS_PER_FRAME),this.renderer=e,this.uploadHookHelper=null,this.queue=[],this.addHooks=[],this.uploadHooks=[],this.completes=[],this.ticking=!1,this.delayedTick=function(){r.queue&&r.prepareItems()},this.register(u,s),this.register(h,a)}return t.prototype.upload=function(t,e){\"function\"==typeof t&&(e=t,t=null),t&&this.add(t),this.queue.length?(e&&this.completes.push(e),this.ticking||(this.ticking=!0,p.addOnce(this.tick,this))):e&&e()},t.prototype.tick=function(){setTimeout(this.delayedTick,0)},t.prototype.prepareItems=function(){for(this.limiter.beginFrame();this.queue.length&&this.limiter.allowedToUpload();){for(var t=this.queue[0],e=!1,r=0,n=this.uploadHooks.length;r<n;r++)if(this.uploadHooks[r](this.uploadHookHelper,t)){this.queue.shift(),e=!0;break}e||this.queue.shift()}if(this.queue.length)p.addOnce(this.tick,this);else{this.ticking=!1;var i=this.completes.slice(0);this.completes.length=0;for(var o=0,s=i.length;o<s;o++)i[o]()}},t.prototype.register=function(t,e){return t&&this.addHooks.push(t),e&&this.uploadHooks.push(e),this},t.prototype.add=function(t){for(var e=0,r=this.addHooks.length;e<r&&!this.addHooks[e](t,this.queue);e++);if(t instanceof c.Container)for(var n=t.children.length-1;n>=0;n--)this.add(t.children[n]);return this},t.prototype.destroy=function(){this.ticking&&p.remove(this.tick,this),this.ticking=!1,this.addHooks=null,this.uploadHooks=null,this.renderer=null,this.completes=null,this.queue=null,this.limiter=null,this.uploadHookHelper=null},t}();r.default=v},{\"../core\":61,\"./limiters/CountLimiter\":174}],172:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}function i(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function o(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}function s(t,e){if(!t)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!e||\"object\"!=typeof e&&\"function\"!=typeof e?t:e}function a(t,e){if(\"function\"!=typeof e&&null!==e)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function u(t,e){if(e instanceof c.BaseTexture){var r=e.source,n=0===r.width?t.canvas.width:Math.min(t.canvas.width,r.width),i=0===r.height?t.canvas.height:Math.min(t.canvas.height,r.height);return t.ctx.drawImage(r,0,0,n,i,0,0,t.canvas.width,t.canvas.height),!0}return!1}function h(t,e){if(t instanceof c.BaseTexture)return e.indexOf(t)===-1&&e.push(t),!0;if(t._texture&&t._texture instanceof c.Texture){var r=t._texture.baseTexture;return e.indexOf(r)===-1&&e.push(r),!0}return!1}r.__esModule=!0;var l=t(\"../../core\"),c=i(l),d=t(\"../BasePrepare\"),f=n(d),p=16,v=function(t){function e(r){o(this,e);var n=s(this,t.call(this,r));return n.uploadHookHelper=n,n.canvas=document.createElement(\"canvas\"),n.canvas.width=p,n.canvas.height=p,n.ctx=n.canvas.getContext(\"2d\"),n.register(h,u),n}return a(e,t),e.prototype.destroy=function(){t.prototype.destroy.call(this),this.ctx=null,this.canvas=null},e}(f.default);r.default=v,c.CanvasRenderer.registerPlugin(\"prepare\",v)},{\"../../core\":61,\"../BasePrepare\":171}],173:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}r.__esModule=!0;\nvar i=t(\"./webgl/WebGLPrepare\");Object.defineProperty(r,\"webgl\",{enumerable:!0,get:function(){return n(i).default}});var o=t(\"./canvas/CanvasPrepare\");Object.defineProperty(r,\"canvas\",{enumerable:!0,get:function(){return n(o).default}});var s=t(\"./BasePrepare\");Object.defineProperty(r,\"BasePrepare\",{enumerable:!0,get:function(){return n(s).default}});var a=t(\"./limiters/CountLimiter\");Object.defineProperty(r,\"CountLimiter\",{enumerable:!0,get:function(){return n(a).default}});var u=t(\"./limiters/TimeLimiter\");Object.defineProperty(r,\"TimeLimiter\",{enumerable:!0,get:function(){return n(u).default}})},{\"./BasePrepare\":171,\"./canvas/CanvasPrepare\":172,\"./limiters/CountLimiter\":174,\"./limiters/TimeLimiter\":175,\"./webgl/WebGLPrepare\":176}],174:[function(t,e,r){\"use strict\";function n(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}r.__esModule=!0;var i=function(){function t(e){n(this,t),this.maxItemsPerFrame=e,this.itemsLeft=0}return t.prototype.beginFrame=function(){this.itemsLeft=this.maxItemsPerFrame},t.prototype.allowedToUpload=function(){return this.itemsLeft-- >0},t}();r.default=i},{}],175:[function(t,e,r){\"use strict\";function n(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}r.__esModule=!0;var i=function(){function t(e){n(this,t),this.maxMilliseconds=e,this.frameStart=0}return t.prototype.beginFrame=function(){this.frameStart=Date.now()},t.prototype.allowedToUpload=function(){return Date.now()-this.frameStart<this.maxMilliseconds},t}();r.default=i},{}],176:[function(t,e,r){\"use strict\";function n(t){return t&&t.__esModule?t:{default:t}}function i(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function o(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}function s(t,e){if(!t)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!e||\"object\"!=typeof e&&\"function\"!=typeof e?t:e}function a(t,e){if(\"function\"!=typeof e&&null!==e)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function u(t,e){return e instanceof f.BaseTexture&&(e._glTextures[t.CONTEXT_UID]||t.textureManager.updateTexture(e),!0)}function h(t,e){return e instanceof f.Graphics&&((e.dirty||e.clearDirty||!e._webGL[t.plugins.graphics.CONTEXT_UID])&&t.plugins.graphics.updateGraphics(e),!0)}function l(t,e){if(t instanceof f.BaseTexture)return e.indexOf(t)===-1&&e.push(t),!0;if(t._texture&&t._texture instanceof f.Texture){var r=t._texture.baseTexture;return e.indexOf(r)===-1&&e.push(r),!0}return!1}function c(t,e){return t instanceof f.Graphics&&(e.push(t),!0)}r.__esModule=!0;var d=t(\"../../core\"),f=i(d),p=t(\"../BasePrepare\"),v=n(p),y=function(t){function e(r){o(this,e);var n=s(this,t.call(this,r));return n.uploadHookHelper=n.renderer,n.register(l,u).register(c,h),n}return a(e,t),e}(v.default);r.default=y,f.WebGLRenderer.registerPlugin(\"prepare\",y)},{\"../../core\":61,\"../BasePrepare\":171}],177:[function(t,e,r){(function(e){\"use strict\";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}r.__esModule=!0,r.loader=r.prepare=r.particles=r.mesh=r.loaders=r.interaction=r.filters=r.extras=r.extract=r.accessibility=void 0;var i=t(\"./deprecation\");Object.keys(i).forEach(function(t){\"default\"!==t&&\"__esModule\"!==t&&Object.defineProperty(r,t,{enumerable:!0,get:function(){return i[t]}})});var o=t(\"./core\");Object.keys(o).forEach(function(t){\"default\"!==t&&\"__esModule\"!==t&&Object.defineProperty(r,t,{enumerable:!0,get:function(){return o[t]}})}),t(\"./polyfill\");var s=t(\"./accessibility\"),a=n(s),u=t(\"./extract\"),h=n(u),l=t(\"./extras\"),c=n(l),d=t(\"./filters\"),f=n(d),p=t(\"./interaction\"),v=n(p),y=t(\"./loaders\"),g=n(y),m=t(\"./mesh\"),_=n(m),b=t(\"./particles\"),x=n(b),T=t(\"./prepare\"),w=n(T);r.accessibility=a,r.extract=h,r.extras=c,r.filters=f,r.interaction=v,r.loaders=g,r.mesh=_,r.particles=x,r.prepare=w;var E=g&&g.Loader?new g.Loader:null;r.loader=E,e.PIXI=r}).call(this,\"undefined\"!=typeof global?global:\"undefined\"!=typeof self?self:\"undefined\"!=typeof window?window:{})},{\"./accessibility\":40,\"./core\":61,\"./deprecation\":120,\"./extract\":122,\"./extras\":131,\"./filters\":142,\"./interaction\":148,\"./loaders\":151,\"./mesh\":160,\"./particles\":163,\"./polyfill\":169,\"./prepare\":173}]},{},[177])(177)});\n//# sourceMappingURL=pixi.min.js.map\n"

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(6)(__webpack_require__(29))

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = "var TWEEN=TWEEN||function(){var n=[];return{getAll:function(){return n},removeAll:function(){n=[]},add:function(t){n.push(t)},remove:function(t){var r=n.indexOf(t);-1!==r&&n.splice(r,1)},update:function(t,r){if(0===n.length)return!1;var i=0;for(t=void 0!==t?t:TWEEN.now();i<n.length;)n[i].update(t)||r?i++:n.splice(i,1);return!0}}}();!function(){void 0===this.window&&void 0!==this.process?TWEEN.now=function(){var n=process.hrtime();return 1e3*n[0]+n[1]/1e3}:void 0!==this.window&&void 0!==window.performance&&void 0!==window.performance.now?TWEEN.now=window.performance.now.bind(window.performance):void 0!==Date.now?TWEEN.now=Date.now:TWEEN.now=function(){return(new Date).getTime()}}(),TWEEN.Tween=function(n){var t=n,r={},i={},o={},u=1e3,e=0,a=!1,f=!1,c=!1,s=0,h=null,l=TWEEN.Easing.Linear.None,E=TWEEN.Interpolation.Linear,p=[],d=null,v=!1,w=null,I=null,M=null;for(var T in n)r[T]=parseFloat(n[T],10);this.to=function(n,t){return void 0!==t&&(u=t),i=n,this},this.start=function(n){TWEEN.add(this),f=!0,v=!1,h=void 0!==n?n:TWEEN.now(),h+=s;for(var u in i){if(i[u]instanceof Array){if(0===i[u].length)continue;i[u]=[t[u]].concat(i[u])}void 0!==r[u]&&(r[u]=t[u],r[u]instanceof Array==!1&&(r[u]*=1),o[u]=r[u]||0)}return this},this.stop=function(){return f?(TWEEN.remove(this),f=!1,null!==M&&M.call(t),this.stopChainedTweens(),this):this},this.stopChainedTweens=function(){for(var n=0,t=p.length;t>n;n++)p[n].stop()},this.delay=function(n){return s=n,this},this.repeat=function(n){return e=n,this},this.yoyo=function(n){return a=n,this},this.easing=function(n){return l=n,this},this.interpolation=function(n){return E=n,this},this.chain=function(){return p=arguments,this},this.onStart=function(n){return d=n,this},this.onUpdate=function(n){return w=n,this},this.onComplete=function(n){return I=n,this},this.onStop=function(n){return M=n,this},this.update=function(n){var f,M,T;if(h>n)return!0;v===!1&&(null!==d&&d.call(t),v=!0),M=(n-h)/u,M=M>1?1:M,T=l(M);for(f in i)if(void 0!==r[f]){var N=r[f]||0,W=i[f];W instanceof Array?t[f]=E(W,T):(\"string\"==typeof W&&(W=\"+\"===W.charAt(0)||\"-\"===W.charAt(0)?N+parseFloat(W,10):parseFloat(W,10)),\"number\"==typeof W&&(t[f]=N+(W-N)*T))}if(null!==w&&w.call(t,T),1===M){if(e>0){isFinite(e)&&e--;for(f in o){if(\"string\"==typeof i[f]&&(o[f]=o[f]+parseFloat(i[f],10)),a){var O=o[f];o[f]=i[f],i[f]=O}r[f]=o[f]}return a&&(c=!c),h=n+s,!0}null!==I&&I.call(t);for(var m=0,g=p.length;g>m;m++)p[m].start(h+u);return!1}return!0}},TWEEN.Easing={Linear:{None:function(n){return n}},Quadratic:{In:function(n){return n*n},Out:function(n){return n*(2-n)},InOut:function(n){return(n*=2)<1?.5*n*n:-.5*(--n*(n-2)-1)}},Cubic:{In:function(n){return n*n*n},Out:function(n){return--n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n:.5*((n-=2)*n*n+2)}},Quartic:{In:function(n){return n*n*n*n},Out:function(n){return 1- --n*n*n*n},InOut:function(n){return(n*=2)<1?.5*n*n*n*n:-.5*((n-=2)*n*n*n-2)}},Quintic:{In:function(n){return n*n*n*n*n},Out:function(n){return--n*n*n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2)}},Sinusoidal:{In:function(n){return 1-Math.cos(n*Math.PI/2)},Out:function(n){return Math.sin(n*Math.PI/2)},InOut:function(n){return.5*(1-Math.cos(Math.PI*n))}},Exponential:{In:function(n){return 0===n?0:Math.pow(1024,n-1)},Out:function(n){return 1===n?1:1-Math.pow(2,-10*n)},InOut:function(n){return 0===n?0:1===n?1:(n*=2)<1?.5*Math.pow(1024,n-1):.5*(-Math.pow(2,-10*(n-1))+2)}},Circular:{In:function(n){return 1-Math.sqrt(1-n*n)},Out:function(n){return Math.sqrt(1- --n*n)},InOut:function(n){return(n*=2)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1)}},Elastic:{In:function(n){return 0===n?0:1===n?1:-Math.pow(2,10*(n-1))*Math.sin(5*(n-1.1)*Math.PI)},Out:function(n){return 0===n?0:1===n?1:Math.pow(2,-10*n)*Math.sin(5*(n-.1)*Math.PI)+1},InOut:function(n){return 0===n?0:1===n?1:(n*=2,1>n?-.5*Math.pow(2,10*(n-1))*Math.sin(5*(n-1.1)*Math.PI):.5*Math.pow(2,-10*(n-1))*Math.sin(5*(n-1.1)*Math.PI)+1)}},Back:{In:function(n){var t=1.70158;return n*n*((t+1)*n-t)},Out:function(n){var t=1.70158;return--n*n*((t+1)*n+t)+1},InOut:function(n){var t=2.5949095;return(n*=2)<1?.5*(n*n*((t+1)*n-t)):.5*((n-=2)*n*((t+1)*n+t)+2)}},Bounce:{In:function(n){return 1-TWEEN.Easing.Bounce.Out(1-n)},Out:function(n){return 1/2.75>n?7.5625*n*n:2/2.75>n?7.5625*(n-=1.5/2.75)*n+.75:2.5/2.75>n?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375},InOut:function(n){return.5>n?.5*TWEEN.Easing.Bounce.In(2*n):.5*TWEEN.Easing.Bounce.Out(2*n-1)+.5}}},TWEEN.Interpolation={Linear:function(n,t){var r=n.length-1,i=r*t,o=Math.floor(i),u=TWEEN.Interpolation.Utils.Linear;return 0>t?u(n[0],n[1],i):t>1?u(n[r],n[r-1],r-i):u(n[o],n[o+1>r?r:o+1],i-o)},Bezier:function(n,t){for(var r=0,i=n.length-1,o=Math.pow,u=TWEEN.Interpolation.Utils.Bernstein,e=0;i>=e;e++)r+=o(1-t,i-e)*o(t,e)*n[e]*u(i,e);return r},CatmullRom:function(n,t){var r=n.length-1,i=r*t,o=Math.floor(i),u=TWEEN.Interpolation.Utils.CatmullRom;return n[0]===n[r]?(0>t&&(o=Math.floor(i=r*(1+t))),u(n[(o-1+r)%r],n[o],n[(o+1)%r],n[(o+2)%r],i-o)):0>t?n[0]-(u(n[0],n[0],n[1],n[1],-i)-n[0]):t>1?n[r]-(u(n[r],n[r],n[r-1],n[r-1],i-r)-n[r]):u(n[o?o-1:0],n[o],n[o+1>r?r:o+1],n[o+2>r?r:o+2],i-o)},Utils:{Linear:function(n,t,r){return(t-n)*r+n},Bernstein:function(n,t){var r=TWEEN.Interpolation.Utils.Factorial;return r(n)/r(t)/r(n-t)},Factorial:function(){var n=[1];return function(t){var r=1;if(n[t])return n[t];for(var i=t;i>1;i--)r*=i;return n[t]=r,r}}(),CatmullRom:function(n,t,r,i,o){var u=.5*(r-n),e=.5*(i-t),a=o*o,f=o*a;return(2*t-2*r+u+e)*f+(-3*t+3*r-2*u-e)*a+u*o+t}}},function(n){\"function\"==typeof define&&define.amd?define([],function(){return TWEEN}):\"undefined\"!=typeof module&&\"object\"==typeof exports?module.exports=TWEEN:void 0!==n&&(n.TWEEN=TWEEN)}(this);\r\n//# sourceMappingURL=Tween.min.js.map"

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(6)(__webpack_require__(31))

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = "(function(f){if(typeof exports===\"object\"&&typeof module!==\"undefined\"){module.exports=f()}else if(typeof define===\"function\"&&define.amd){define([],f)}else{var g;if(typeof window!==\"undefined\"){g=window}else if(typeof global!==\"undefined\"){g=global}else if(typeof self!==\"undefined\"){g=self}else{g=this}g.io=f()}})(function(){var define,module,exports;return function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require==\"function\"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error(\"Cannot find module '\"+o+\"'\");throw f.code=\"MODULE_NOT_FOUND\",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require==\"function\"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}({1:[function(_dereq_,module,exports){module.exports=_dereq_(\"./lib/\")},{\"./lib/\":2}],2:[function(_dereq_,module,exports){module.exports=_dereq_(\"./socket\");module.exports.parser=_dereq_(\"engine.io-parser\")},{\"./socket\":3,\"engine.io-parser\":19}],3:[function(_dereq_,module,exports){(function(global){var transports=_dereq_(\"./transports\");var Emitter=_dereq_(\"component-emitter\");var debug=_dereq_(\"debug\")(\"engine.io-client:socket\");var index=_dereq_(\"indexof\");var parser=_dereq_(\"engine.io-parser\");var parseuri=_dereq_(\"parseuri\");var parsejson=_dereq_(\"parsejson\");var parseqs=_dereq_(\"parseqs\");module.exports=Socket;function noop(){}function Socket(uri,opts){if(!(this instanceof Socket))return new Socket(uri,opts);opts=opts||{};if(uri&&\"object\"==typeof uri){opts=uri;uri=null}if(uri){uri=parseuri(uri);opts.hostname=uri.host;opts.secure=uri.protocol==\"https\"||uri.protocol==\"wss\";opts.port=uri.port;if(uri.query)opts.query=uri.query}else if(opts.host){opts.hostname=parseuri(opts.host).host}this.secure=null!=opts.secure?opts.secure:global.location&&\"https:\"==location.protocol;if(opts.hostname&&!opts.port){opts.port=this.secure?\"443\":\"80\"}this.agent=opts.agent||false;this.hostname=opts.hostname||(global.location?location.hostname:\"localhost\");this.port=opts.port||(global.location&&location.port?location.port:this.secure?443:80);this.query=opts.query||{};if(\"string\"==typeof this.query)this.query=parseqs.decode(this.query);this.upgrade=false!==opts.upgrade;this.path=(opts.path||\"/engine.io\").replace(/\\/$/,\"\")+\"/\";this.forceJSONP=!!opts.forceJSONP;this.jsonp=false!==opts.jsonp;this.forceBase64=!!opts.forceBase64;this.enablesXDR=!!opts.enablesXDR;this.timestampParam=opts.timestampParam||\"t\";this.timestampRequests=opts.timestampRequests;this.transports=opts.transports||[\"polling\",\"websocket\"];this.readyState=\"\";this.writeBuffer=[];this.policyPort=opts.policyPort||843;this.rememberUpgrade=opts.rememberUpgrade||false;this.binaryType=null;this.onlyBinaryUpgrades=opts.onlyBinaryUpgrades;this.perMessageDeflate=false!==opts.perMessageDeflate?opts.perMessageDeflate||{}:false;if(true===this.perMessageDeflate)this.perMessageDeflate={};if(this.perMessageDeflate&&null==this.perMessageDeflate.threshold){this.perMessageDeflate.threshold=1024}this.pfx=opts.pfx||null;this.key=opts.key||null;this.passphrase=opts.passphrase||null;this.cert=opts.cert||null;this.ca=opts.ca||null;this.ciphers=opts.ciphers||null;this.rejectUnauthorized=opts.rejectUnauthorized===undefined?null:opts.rejectUnauthorized;var freeGlobal=typeof global==\"object\"&&global;if(freeGlobal.global===freeGlobal){if(opts.extraHeaders&&Object.keys(opts.extraHeaders).length>0){this.extraHeaders=opts.extraHeaders}}this.open()}Socket.priorWebsocketSuccess=false;Emitter(Socket.prototype);Socket.protocol=parser.protocol;Socket.Socket=Socket;Socket.Transport=_dereq_(\"./transport\");Socket.transports=_dereq_(\"./transports\");Socket.parser=_dereq_(\"engine.io-parser\");Socket.prototype.createTransport=function(name){debug('creating transport \"%s\"',name);var query=clone(this.query);query.EIO=parser.protocol;query.transport=name;if(this.id)query.sid=this.id;var transport=new transports[name]({agent:this.agent,hostname:this.hostname,port:this.port,secure:this.secure,path:this.path,query:query,forceJSONP:this.forceJSONP,jsonp:this.jsonp,forceBase64:this.forceBase64,enablesXDR:this.enablesXDR,timestampRequests:this.timestampRequests,timestampParam:this.timestampParam,policyPort:this.policyPort,socket:this,pfx:this.pfx,key:this.key,passphrase:this.passphrase,cert:this.cert,ca:this.ca,ciphers:this.ciphers,rejectUnauthorized:this.rejectUnauthorized,perMessageDeflate:this.perMessageDeflate,extraHeaders:this.extraHeaders});return transport};function clone(obj){var o={};for(var i in obj){if(obj.hasOwnProperty(i)){o[i]=obj[i]}}return o}Socket.prototype.open=function(){var transport;if(this.rememberUpgrade&&Socket.priorWebsocketSuccess&&this.transports.indexOf(\"websocket\")!=-1){transport=\"websocket\"}else if(0===this.transports.length){var self=this;setTimeout(function(){self.emit(\"error\",\"No transports available\")},0);return}else{transport=this.transports[0]}this.readyState=\"opening\";try{transport=this.createTransport(transport)}catch(e){this.transports.shift();this.open();return}transport.open();this.setTransport(transport)};Socket.prototype.setTransport=function(transport){debug(\"setting transport %s\",transport.name);var self=this;if(this.transport){debug(\"clearing existing transport %s\",this.transport.name);this.transport.removeAllListeners()}this.transport=transport;transport.on(\"drain\",function(){self.onDrain()}).on(\"packet\",function(packet){self.onPacket(packet)}).on(\"error\",function(e){self.onError(e)}).on(\"close\",function(){self.onClose(\"transport close\")})};Socket.prototype.probe=function(name){debug('probing transport \"%s\"',name);var transport=this.createTransport(name,{probe:1}),failed=false,self=this;Socket.priorWebsocketSuccess=false;function onTransportOpen(){if(self.onlyBinaryUpgrades){var upgradeLosesBinary=!this.supportsBinary&&self.transport.supportsBinary;failed=failed||upgradeLosesBinary}if(failed)return;debug('probe transport \"%s\" opened',name);transport.send([{type:\"ping\",data:\"probe\"}]);transport.once(\"packet\",function(msg){if(failed)return;if(\"pong\"==msg.type&&\"probe\"==msg.data){debug('probe transport \"%s\" pong',name);self.upgrading=true;self.emit(\"upgrading\",transport);if(!transport)return;Socket.priorWebsocketSuccess=\"websocket\"==transport.name;debug('pausing current transport \"%s\"',self.transport.name);self.transport.pause(function(){if(failed)return;if(\"closed\"==self.readyState)return;debug(\"changing transport and sending upgrade packet\");cleanup();self.setTransport(transport);transport.send([{type:\"upgrade\"}]);self.emit(\"upgrade\",transport);transport=null;self.upgrading=false;self.flush()})}else{debug('probe transport \"%s\" failed',name);var err=new Error(\"probe error\");err.transport=transport.name;self.emit(\"upgradeError\",err)}})}function freezeTransport(){if(failed)return;failed=true;cleanup();transport.close();transport=null}function onerror(err){var error=new Error(\"probe error: \"+err);error.transport=transport.name;freezeTransport();debug('probe transport \"%s\" failed because of error: %s',name,err);self.emit(\"upgradeError\",error)}function onTransportClose(){onerror(\"transport closed\")}function onclose(){onerror(\"socket closed\")}function onupgrade(to){if(transport&&to.name!=transport.name){debug('\"%s\" works - aborting \"%s\"',to.name,transport.name);freezeTransport()}}function cleanup(){transport.removeListener(\"open\",onTransportOpen);transport.removeListener(\"error\",onerror);transport.removeListener(\"close\",onTransportClose);self.removeListener(\"close\",onclose);self.removeListener(\"upgrading\",onupgrade)}transport.once(\"open\",onTransportOpen);transport.once(\"error\",onerror);transport.once(\"close\",onTransportClose);this.once(\"close\",onclose);this.once(\"upgrading\",onupgrade);transport.open()};Socket.prototype.onOpen=function(){debug(\"socket open\");this.readyState=\"open\";Socket.priorWebsocketSuccess=\"websocket\"==this.transport.name;this.emit(\"open\");this.flush();if(\"open\"==this.readyState&&this.upgrade&&this.transport.pause){debug(\"starting upgrade probes\");for(var i=0,l=this.upgrades.length;i<l;i++){this.probe(this.upgrades[i])}}};Socket.prototype.onPacket=function(packet){if(\"opening\"==this.readyState||\"open\"==this.readyState){debug('socket receive: type \"%s\", data \"%s\"',packet.type,packet.data);this.emit(\"packet\",packet);this.emit(\"heartbeat\");switch(packet.type){case\"open\":this.onHandshake(parsejson(packet.data));break;case\"pong\":this.setPing();this.emit(\"pong\");break;case\"error\":var err=new Error(\"server error\");err.code=packet.data;this.onError(err);break;case\"message\":this.emit(\"data\",packet.data);this.emit(\"message\",packet.data);break}}else{debug('packet received with socket readyState \"%s\"',this.readyState)}};Socket.prototype.onHandshake=function(data){this.emit(\"handshake\",data);this.id=data.sid;this.transport.query.sid=data.sid;this.upgrades=this.filterUpgrades(data.upgrades);this.pingInterval=data.pingInterval;this.pingTimeout=data.pingTimeout;this.onOpen();if(\"closed\"==this.readyState)return;this.setPing();this.removeListener(\"heartbeat\",this.onHeartbeat);this.on(\"heartbeat\",this.onHeartbeat)};Socket.prototype.onHeartbeat=function(timeout){clearTimeout(this.pingTimeoutTimer);var self=this;self.pingTimeoutTimer=setTimeout(function(){if(\"closed\"==self.readyState)return;self.onClose(\"ping timeout\")},timeout||self.pingInterval+self.pingTimeout)};Socket.prototype.setPing=function(){var self=this;clearTimeout(self.pingIntervalTimer);self.pingIntervalTimer=setTimeout(function(){debug(\"writing ping packet - expecting pong within %sms\",self.pingTimeout);self.ping();self.onHeartbeat(self.pingTimeout)},self.pingInterval)};Socket.prototype.ping=function(){var self=this;this.sendPacket(\"ping\",function(){self.emit(\"ping\")})};Socket.prototype.onDrain=function(){this.writeBuffer.splice(0,this.prevBufferLen);this.prevBufferLen=0;if(0===this.writeBuffer.length){this.emit(\"drain\")}else{this.flush()}};Socket.prototype.flush=function(){if(\"closed\"!=this.readyState&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){debug(\"flushing %d packets in socket\",this.writeBuffer.length);this.transport.send(this.writeBuffer);this.prevBufferLen=this.writeBuffer.length;this.emit(\"flush\")}};Socket.prototype.write=Socket.prototype.send=function(msg,options,fn){this.sendPacket(\"message\",msg,options,fn);return this};Socket.prototype.sendPacket=function(type,data,options,fn){if(\"function\"==typeof data){fn=data;data=undefined}if(\"function\"==typeof options){fn=options;options=null}if(\"closing\"==this.readyState||\"closed\"==this.readyState){return}options=options||{};options.compress=false!==options.compress;var packet={type:type,data:data,options:options};this.emit(\"packetCreate\",packet);this.writeBuffer.push(packet);if(fn)this.once(\"flush\",fn);this.flush()};Socket.prototype.close=function(){if(\"opening\"==this.readyState||\"open\"==this.readyState){this.readyState=\"closing\";var self=this;if(this.writeBuffer.length){this.once(\"drain\",function(){if(this.upgrading){waitForUpgrade()}else{close()}})}else if(this.upgrading){waitForUpgrade()}else{close()}}function close(){self.onClose(\"forced close\");debug(\"socket closing - telling transport to close\");self.transport.close()}function cleanupAndClose(){self.removeListener(\"upgrade\",cleanupAndClose);self.removeListener(\"upgradeError\",cleanupAndClose);close()}function waitForUpgrade(){self.once(\"upgrade\",cleanupAndClose);self.once(\"upgradeError\",cleanupAndClose)}return this};Socket.prototype.onError=function(err){debug(\"socket error %j\",err);Socket.priorWebsocketSuccess=false;this.emit(\"error\",err);this.onClose(\"transport error\",err)};Socket.prototype.onClose=function(reason,desc){if(\"opening\"==this.readyState||\"open\"==this.readyState||\"closing\"==this.readyState){debug('socket close with reason: \"%s\"',reason);var self=this;clearTimeout(this.pingIntervalTimer);clearTimeout(this.pingTimeoutTimer);this.transport.removeAllListeners(\"close\");this.transport.close();this.transport.removeAllListeners();this.readyState=\"closed\";this.id=null;this.emit(\"close\",reason,desc);self.writeBuffer=[];self.prevBufferLen=0}};Socket.prototype.filterUpgrades=function(upgrades){var filteredUpgrades=[];for(var i=0,j=upgrades.length;i<j;i++){if(~index(this.transports,upgrades[i]))filteredUpgrades.push(upgrades[i])}return filteredUpgrades}}).call(this,typeof self!==\"undefined\"?self:typeof window!==\"undefined\"?window:typeof global!==\"undefined\"?global:{})},{\"./transport\":4,\"./transports\":5,\"component-emitter\":15,debug:17,\"engine.io-parser\":19,indexof:23,parsejson:26,parseqs:27,parseuri:28}],4:[function(_dereq_,module,exports){var parser=_dereq_(\"engine.io-parser\");var Emitter=_dereq_(\"component-emitter\");module.exports=Transport;function Transport(opts){this.path=opts.path;this.hostname=opts.hostname;this.port=opts.port;this.secure=opts.secure;this.query=opts.query;this.timestampParam=opts.timestampParam;this.timestampRequests=opts.timestampRequests;this.readyState=\"\";this.agent=opts.agent||false;this.socket=opts.socket;this.enablesXDR=opts.enablesXDR;this.pfx=opts.pfx;this.key=opts.key;this.passphrase=opts.passphrase;this.cert=opts.cert;this.ca=opts.ca;this.ciphers=opts.ciphers;this.rejectUnauthorized=opts.rejectUnauthorized;this.extraHeaders=opts.extraHeaders}Emitter(Transport.prototype);Transport.prototype.onError=function(msg,desc){var err=new Error(msg);err.type=\"TransportError\";err.description=desc;this.emit(\"error\",err);return this};Transport.prototype.open=function(){if(\"closed\"==this.readyState||\"\"==this.readyState){this.readyState=\"opening\";this.doOpen()}return this};Transport.prototype.close=function(){if(\"opening\"==this.readyState||\"open\"==this.readyState){this.doClose();this.onClose()}return this};Transport.prototype.send=function(packets){if(\"open\"==this.readyState){this.write(packets)}else{throw new Error(\"Transport not open\")}};Transport.prototype.onOpen=function(){this.readyState=\"open\";this.writable=true;this.emit(\"open\")};Transport.prototype.onData=function(data){var packet=parser.decodePacket(data,this.socket.binaryType);this.onPacket(packet)};Transport.prototype.onPacket=function(packet){this.emit(\"packet\",packet)};Transport.prototype.onClose=function(){this.readyState=\"closed\";this.emit(\"close\")}},{\"component-emitter\":15,\"engine.io-parser\":19}],5:[function(_dereq_,module,exports){(function(global){var XMLHttpRequest=_dereq_(\"xmlhttprequest-ssl\");var XHR=_dereq_(\"./polling-xhr\");var JSONP=_dereq_(\"./polling-jsonp\");var websocket=_dereq_(\"./websocket\");exports.polling=polling;exports.websocket=websocket;function polling(opts){var xhr;var xd=false;var xs=false;var jsonp=false!==opts.jsonp;if(global.location){var isSSL=\"https:\"==location.protocol;var port=location.port;if(!port){port=isSSL?443:80}xd=opts.hostname!=location.hostname||port!=opts.port;xs=opts.secure!=isSSL}opts.xdomain=xd;opts.xscheme=xs;xhr=new XMLHttpRequest(opts);if(\"open\"in xhr&&!opts.forceJSONP){return new XHR(opts)}else{if(!jsonp)throw new Error(\"JSONP disabled\");return new JSONP(opts)}}}).call(this,typeof self!==\"undefined\"?self:typeof window!==\"undefined\"?window:typeof global!==\"undefined\"?global:{})},{\"./polling-jsonp\":6,\"./polling-xhr\":7,\"./websocket\":9,\"xmlhttprequest-ssl\":10}],6:[function(_dereq_,module,exports){(function(global){var Polling=_dereq_(\"./polling\");var inherit=_dereq_(\"component-inherit\");module.exports=JSONPPolling;var rNewline=/\\n/g;var rEscapedNewline=/\\\\n/g;var callbacks;var index=0;function empty(){}function JSONPPolling(opts){Polling.call(this,opts);this.query=this.query||{};if(!callbacks){if(!global.___eio)global.___eio=[];callbacks=global.___eio}this.index=callbacks.length;var self=this;callbacks.push(function(msg){self.onData(msg)});this.query.j=this.index;if(global.document&&global.addEventListener){global.addEventListener(\"beforeunload\",function(){if(self.script)self.script.onerror=empty},false)}}inherit(JSONPPolling,Polling);JSONPPolling.prototype.supportsBinary=false;JSONPPolling.prototype.doClose=function(){if(this.script){this.script.parentNode.removeChild(this.script);this.script=null}if(this.form){this.form.parentNode.removeChild(this.form);this.form=null;this.iframe=null}Polling.prototype.doClose.call(this)};JSONPPolling.prototype.doPoll=function(){var self=this;var script=document.createElement(\"script\");if(this.script){this.script.parentNode.removeChild(this.script);this.script=null}script.async=true;script.src=this.uri();script.onerror=function(e){self.onError(\"jsonp poll error\",e)};var insertAt=document.getElementsByTagName(\"script\")[0];if(insertAt){insertAt.parentNode.insertBefore(script,insertAt)}else{(document.head||document.body).appendChild(script)}this.script=script;var isUAgecko=\"undefined\"!=typeof navigator&&/gecko/i.test(navigator.userAgent);if(isUAgecko){setTimeout(function(){var iframe=document.createElement(\"iframe\");document.body.appendChild(iframe);document.body.removeChild(iframe)},100)}};JSONPPolling.prototype.doWrite=function(data,fn){var self=this;if(!this.form){var form=document.createElement(\"form\");var area=document.createElement(\"textarea\");var id=this.iframeId=\"eio_iframe_\"+this.index;var iframe;form.className=\"socketio\";form.style.position=\"absolute\";form.style.top=\"-1000px\";form.style.left=\"-1000px\";form.target=id;form.method=\"POST\";form.setAttribute(\"accept-charset\",\"utf-8\");area.name=\"d\";form.appendChild(area);document.body.appendChild(form);this.form=form;this.area=area}this.form.action=this.uri();function complete(){initIframe();fn()}function initIframe(){if(self.iframe){try{self.form.removeChild(self.iframe)}catch(e){self.onError(\"jsonp polling iframe removal error\",e)}}try{var html='<iframe src=\"javascript:0\" name=\"'+self.iframeId+'\">';iframe=document.createElement(html)}catch(e){iframe=document.createElement(\"iframe\");iframe.name=self.iframeId;iframe.src=\"javascript:0\"}iframe.id=self.iframeId;self.form.appendChild(iframe);self.iframe=iframe}initIframe();data=data.replace(rEscapedNewline,\"\\\\\\n\");this.area.value=data.replace(rNewline,\"\\\\n\");try{this.form.submit()}catch(e){}if(this.iframe.attachEvent){this.iframe.onreadystatechange=function(){if(self.iframe.readyState==\"complete\"){complete()}}}else{this.iframe.onload=complete}}}).call(this,typeof self!==\"undefined\"?self:typeof window!==\"undefined\"?window:typeof global!==\"undefined\"?global:{})},{\"./polling\":8,\"component-inherit\":16}],7:[function(_dereq_,module,exports){(function(global){var XMLHttpRequest=_dereq_(\"xmlhttprequest-ssl\");var Polling=_dereq_(\"./polling\");var Emitter=_dereq_(\"component-emitter\");var inherit=_dereq_(\"component-inherit\");var debug=_dereq_(\"debug\")(\"engine.io-client:polling-xhr\");module.exports=XHR;module.exports.Request=Request;function empty(){}function XHR(opts){Polling.call(this,opts);if(global.location){var isSSL=\"https:\"==location.protocol;var port=location.port;if(!port){port=isSSL?443:80}this.xd=opts.hostname!=global.location.hostname||port!=opts.port;this.xs=opts.secure!=isSSL}else{this.extraHeaders=opts.extraHeaders}}inherit(XHR,Polling);XHR.prototype.supportsBinary=true;XHR.prototype.request=function(opts){opts=opts||{};opts.uri=this.uri();opts.xd=this.xd;opts.xs=this.xs;opts.agent=this.agent||false;opts.supportsBinary=this.supportsBinary;opts.enablesXDR=this.enablesXDR;opts.pfx=this.pfx;opts.key=this.key;opts.passphrase=this.passphrase;opts.cert=this.cert;opts.ca=this.ca;opts.ciphers=this.ciphers;opts.rejectUnauthorized=this.rejectUnauthorized;opts.extraHeaders=this.extraHeaders;return new Request(opts)};XHR.prototype.doWrite=function(data,fn){var isBinary=typeof data!==\"string\"&&data!==undefined;var req=this.request({method:\"POST\",data:data,isBinary:isBinary});var self=this;req.on(\"success\",fn);req.on(\"error\",function(err){self.onError(\"xhr post error\",err)});this.sendXhr=req};XHR.prototype.doPoll=function(){debug(\"xhr poll\");var req=this.request();var self=this;req.on(\"data\",function(data){self.onData(data)});req.on(\"error\",function(err){self.onError(\"xhr poll error\",err)});this.pollXhr=req};function Request(opts){this.method=opts.method||\"GET\";this.uri=opts.uri;this.xd=!!opts.xd;this.xs=!!opts.xs;this.async=false!==opts.async;this.data=undefined!=opts.data?opts.data:null;this.agent=opts.agent;this.isBinary=opts.isBinary;this.supportsBinary=opts.supportsBinary;this.enablesXDR=opts.enablesXDR;this.pfx=opts.pfx;this.key=opts.key;this.passphrase=opts.passphrase;this.cert=opts.cert;this.ca=opts.ca;this.ciphers=opts.ciphers;this.rejectUnauthorized=opts.rejectUnauthorized;this.extraHeaders=opts.extraHeaders;this.create()}Emitter(Request.prototype);Request.prototype.create=function(){var opts={agent:this.agent,xdomain:this.xd,xscheme:this.xs,enablesXDR:this.enablesXDR};opts.pfx=this.pfx;opts.key=this.key;opts.passphrase=this.passphrase;opts.cert=this.cert;opts.ca=this.ca;opts.ciphers=this.ciphers;opts.rejectUnauthorized=this.rejectUnauthorized;var xhr=this.xhr=new XMLHttpRequest(opts);var self=this;try{debug(\"xhr open %s: %s\",this.method,this.uri);xhr.open(this.method,this.uri,this.async);try{if(this.extraHeaders){xhr.setDisableHeaderCheck(true);for(var i in this.extraHeaders){if(this.extraHeaders.hasOwnProperty(i)){xhr.setRequestHeader(i,this.extraHeaders[i])}}}}catch(e){}if(this.supportsBinary){xhr.responseType=\"arraybuffer\"}if(\"POST\"==this.method){try{if(this.isBinary){xhr.setRequestHeader(\"Content-type\",\"application/octet-stream\")}else{xhr.setRequestHeader(\"Content-type\",\"text/plain;charset=UTF-8\")}}catch(e){}}if(\"withCredentials\"in xhr){xhr.withCredentials=true}if(this.hasXDR()){xhr.onload=function(){self.onLoad()};xhr.onerror=function(){self.onError(xhr.responseText)}}else{xhr.onreadystatechange=function(){if(4!=xhr.readyState)return;if(200==xhr.status||1223==xhr.status){self.onLoad()}else{setTimeout(function(){self.onError(xhr.status)},0)}}}debug(\"xhr data %s\",this.data);xhr.send(this.data)}catch(e){setTimeout(function(){self.onError(e)},0);return}if(global.document){this.index=Request.requestsCount++;Request.requests[this.index]=this}};Request.prototype.onSuccess=function(){this.emit(\"success\");this.cleanup()};Request.prototype.onData=function(data){this.emit(\"data\",data);this.onSuccess()};Request.prototype.onError=function(err){this.emit(\"error\",err);this.cleanup(true)};Request.prototype.cleanup=function(fromError){if(\"undefined\"==typeof this.xhr||null===this.xhr){return}if(this.hasXDR()){this.xhr.onload=this.xhr.onerror=empty}else{this.xhr.onreadystatechange=empty}if(fromError){try{this.xhr.abort()}catch(e){}}if(global.document){delete Request.requests[this.index]}this.xhr=null};Request.prototype.onLoad=function(){var data;try{var contentType;try{contentType=this.xhr.getResponseHeader(\"Content-Type\").split(\";\")[0]}catch(e){}if(contentType===\"application/octet-stream\"){data=this.xhr.response}else{if(!this.supportsBinary){data=this.xhr.responseText}else{try{data=String.fromCharCode.apply(null,new Uint8Array(this.xhr.response))}catch(e){var ui8Arr=new Uint8Array(this.xhr.response);var dataArray=[];for(var idx=0,length=ui8Arr.length;idx<length;idx++){dataArray.push(ui8Arr[idx])}data=String.fromCharCode.apply(null,dataArray)}}}}catch(e){this.onError(e)}if(null!=data){this.onData(data)}};Request.prototype.hasXDR=function(){return\"undefined\"!==typeof global.XDomainRequest&&!this.xs&&this.enablesXDR};Request.prototype.abort=function(){this.cleanup()};if(global.document){Request.requestsCount=0;Request.requests={};if(global.attachEvent){global.attachEvent(\"onunload\",unloadHandler)}else if(global.addEventListener){global.addEventListener(\"beforeunload\",unloadHandler,false)}}function unloadHandler(){for(var i in Request.requests){if(Request.requests.hasOwnProperty(i)){Request.requests[i].abort()}}}}).call(this,typeof self!==\"undefined\"?self:typeof window!==\"undefined\"?window:typeof global!==\"undefined\"?global:{})},{\"./polling\":8,\"component-emitter\":15,\"component-inherit\":16,debug:17,\"xmlhttprequest-ssl\":10}],8:[function(_dereq_,module,exports){var Transport=_dereq_(\"../transport\");var parseqs=_dereq_(\"parseqs\");var parser=_dereq_(\"engine.io-parser\");var inherit=_dereq_(\"component-inherit\");var yeast=_dereq_(\"yeast\");var debug=_dereq_(\"debug\")(\"engine.io-client:polling\");module.exports=Polling;var hasXHR2=function(){var XMLHttpRequest=_dereq_(\"xmlhttprequest-ssl\");var xhr=new XMLHttpRequest({xdomain:false});return null!=xhr.responseType}();function Polling(opts){var forceBase64=opts&&opts.forceBase64;if(!hasXHR2||forceBase64){this.supportsBinary=false}Transport.call(this,opts)}inherit(Polling,Transport);Polling.prototype.name=\"polling\";Polling.prototype.doOpen=function(){this.poll()};Polling.prototype.pause=function(onPause){var pending=0;var self=this;this.readyState=\"pausing\";function pause(){debug(\"paused\");self.readyState=\"paused\";onPause()}if(this.polling||!this.writable){var total=0;if(this.polling){debug(\"we are currently polling - waiting to pause\");total++;this.once(\"pollComplete\",function(){debug(\"pre-pause polling complete\");--total||pause()})}if(!this.writable){debug(\"we are currently writing - waiting to pause\");total++;this.once(\"drain\",function(){debug(\"pre-pause writing complete\");--total||pause()})}}else{pause()}};Polling.prototype.poll=function(){debug(\"polling\");this.polling=true;this.doPoll();this.emit(\"poll\")};Polling.prototype.onData=function(data){var self=this;debug(\"polling got data %s\",data);var callback=function(packet,index,total){if(\"opening\"==self.readyState){self.onOpen()}if(\"close\"==packet.type){self.onClose();return false}self.onPacket(packet)};parser.decodePayload(data,this.socket.binaryType,callback);if(\"closed\"!=this.readyState){this.polling=false;this.emit(\"pollComplete\");if(\"open\"==this.readyState){this.poll()}else{debug('ignoring poll - transport state \"%s\"',this.readyState)}}};Polling.prototype.doClose=function(){var self=this;function close(){debug(\"writing close packet\");self.write([{type:\"close\"}])}if(\"open\"==this.readyState){debug(\"transport open - closing\");close()}else{debug(\"transport not open - deferring close\");this.once(\"open\",close)}};Polling.prototype.write=function(packets){var self=this;this.writable=false;var callbackfn=function(){self.writable=true;self.emit(\"drain\")};var self=this;parser.encodePayload(packets,this.supportsBinary,function(data){self.doWrite(data,callbackfn)})};Polling.prototype.uri=function(){var query=this.query||{};var schema=this.secure?\"https\":\"http\";var port=\"\";if(false!==this.timestampRequests){query[this.timestampParam]=yeast()}if(!this.supportsBinary&&!query.sid){query.b64=1}query=parseqs.encode(query);if(this.port&&(\"https\"==schema&&this.port!=443||\"http\"==schema&&this.port!=80)){port=\":\"+this.port}if(query.length){query=\"?\"+query}var ipv6=this.hostname.indexOf(\":\")!==-1;return schema+\"://\"+(ipv6?\"[\"+this.hostname+\"]\":this.hostname)+port+this.path+query}},{\"../transport\":4,\"component-inherit\":16,debug:17,\"engine.io-parser\":19,parseqs:27,\"xmlhttprequest-ssl\":10,yeast:30}],9:[function(_dereq_,module,exports){(function(global){var Transport=_dereq_(\"../transport\");var parser=_dereq_(\"engine.io-parser\");var parseqs=_dereq_(\"parseqs\");var inherit=_dereq_(\"component-inherit\");var yeast=_dereq_(\"yeast\");var debug=_dereq_(\"debug\")(\"engine.io-client:websocket\");var BrowserWebSocket=global.WebSocket||global.MozWebSocket;var WebSocket=BrowserWebSocket;if(!WebSocket&&typeof window===\"undefined\"){try{WebSocket=_dereq_(\"ws\")}catch(e){}}module.exports=WS;function WS(opts){var forceBase64=opts&&opts.forceBase64;if(forceBase64){this.supportsBinary=false}this.perMessageDeflate=opts.perMessageDeflate;Transport.call(this,opts)}inherit(WS,Transport);WS.prototype.name=\"websocket\";WS.prototype.supportsBinary=true;WS.prototype.doOpen=function(){if(!this.check()){return}var self=this;var uri=this.uri();var protocols=void 0;var opts={agent:this.agent,perMessageDeflate:this.perMessageDeflate};opts.pfx=this.pfx;opts.key=this.key;opts.passphrase=this.passphrase;opts.cert=this.cert;opts.ca=this.ca;opts.ciphers=this.ciphers;opts.rejectUnauthorized=this.rejectUnauthorized;if(this.extraHeaders){opts.headers=this.extraHeaders}this.ws=BrowserWebSocket?new WebSocket(uri):new WebSocket(uri,protocols,opts);if(this.ws.binaryType===undefined){this.supportsBinary=false}if(this.ws.supports&&this.ws.supports.binary){this.supportsBinary=true;this.ws.binaryType=\"buffer\"}else{this.ws.binaryType=\"arraybuffer\"}this.addEventListeners()};WS.prototype.addEventListeners=function(){var self=this;this.ws.onopen=function(){self.onOpen()};this.ws.onclose=function(){self.onClose()};this.ws.onmessage=function(ev){self.onData(ev.data)};this.ws.onerror=function(e){self.onError(\"websocket error\",e)}};if(\"undefined\"!=typeof navigator&&/iPad|iPhone|iPod/i.test(navigator.userAgent)){WS.prototype.onData=function(data){var self=this;setTimeout(function(){Transport.prototype.onData.call(self,data)},0)}}WS.prototype.write=function(packets){var self=this;this.writable=false;var total=packets.length;for(var i=0,l=total;i<l;i++){(function(packet){parser.encodePacket(packet,self.supportsBinary,function(data){if(!BrowserWebSocket){var opts={};if(packet.options){opts.compress=packet.options.compress}if(self.perMessageDeflate){var len=\"string\"==typeof data?global.Buffer.byteLength(data):data.length;if(len<self.perMessageDeflate.threshold){opts.compress=false}}}try{if(BrowserWebSocket){self.ws.send(data)}else{self.ws.send(data,opts)}}catch(e){debug(\"websocket closed before onclose event\")}--total||done()})})(packets[i])}function done(){self.emit(\"flush\");setTimeout(function(){self.writable=true;self.emit(\"drain\")},0)}};WS.prototype.onClose=function(){Transport.prototype.onClose.call(this)};WS.prototype.doClose=function(){if(typeof this.ws!==\"undefined\"){this.ws.close()}};WS.prototype.uri=function(){var query=this.query||{};var schema=this.secure?\"wss\":\"ws\";var port=\"\";if(this.port&&(\"wss\"==schema&&this.port!=443||\"ws\"==schema&&this.port!=80)){port=\":\"+this.port}if(this.timestampRequests){query[this.timestampParam]=yeast()}if(!this.supportsBinary){query.b64=1}query=parseqs.encode(query);if(query.length){query=\"?\"+query}var ipv6=this.hostname.indexOf(\":\")!==-1;return schema+\"://\"+(ipv6?\"[\"+this.hostname+\"]\":this.hostname)+port+this.path+query};WS.prototype.check=function(){return!!WebSocket&&!(\"__initialize\"in WebSocket&&this.name===WS.prototype.name)}}).call(this,typeof self!==\"undefined\"?self:typeof window!==\"undefined\"?window:typeof global!==\"undefined\"?global:{})},{\"../transport\":4,\"component-inherit\":16,debug:17,\"engine.io-parser\":19,parseqs:27,ws:undefined,yeast:30}],10:[function(_dereq_,module,exports){var hasCORS=_dereq_(\"has-cors\");module.exports=function(opts){var xdomain=opts.xdomain;var xscheme=opts.xscheme;var enablesXDR=opts.enablesXDR;try{if(\"undefined\"!=typeof XMLHttpRequest&&(!xdomain||hasCORS)){return new XMLHttpRequest}}catch(e){}try{if(\"undefined\"!=typeof XDomainRequest&&!xscheme&&enablesXDR){return new XDomainRequest}}catch(e){}if(!xdomain){try{return new ActiveXObject(\"Microsoft.XMLHTTP\")}catch(e){}}}},{\"has-cors\":22}],11:[function(_dereq_,module,exports){module.exports=after;function after(count,callback,err_cb){var bail=false;err_cb=err_cb||noop;proxy.count=count;return count===0?callback():proxy;function proxy(err,result){if(proxy.count<=0){throw new Error(\"after called too many times\")}--proxy.count;if(err){bail=true;callback(err);callback=err_cb}else if(proxy.count===0&&!bail){callback(null,result)}}}function noop(){}},{}],12:[function(_dereq_,module,exports){module.exports=function(arraybuffer,start,end){var bytes=arraybuffer.byteLength;start=start||0;end=end||bytes;if(arraybuffer.slice){return arraybuffer.slice(start,end)}if(start<0){start+=bytes}if(end<0){end+=bytes}if(end>bytes){end=bytes}if(start>=bytes||start>=end||bytes===0){return new ArrayBuffer(0)}var abv=new Uint8Array(arraybuffer);var result=new Uint8Array(end-start);for(var i=start,ii=0;i<end;i++,ii++){result[ii]=abv[i]}return result.buffer}},{}],13:[function(_dereq_,module,exports){(function(chars){\"use strict\";exports.encode=function(arraybuffer){var bytes=new Uint8Array(arraybuffer),i,len=bytes.length,base64=\"\";for(i=0;i<len;i+=3){base64+=chars[bytes[i]>>2];\nbase64+=chars[(bytes[i]&3)<<4|bytes[i+1]>>4];base64+=chars[(bytes[i+1]&15)<<2|bytes[i+2]>>6];base64+=chars[bytes[i+2]&63]}if(len%3===2){base64=base64.substring(0,base64.length-1)+\"=\"}else if(len%3===1){base64=base64.substring(0,base64.length-2)+\"==\"}return base64};exports.decode=function(base64){var bufferLength=base64.length*.75,len=base64.length,i,p=0,encoded1,encoded2,encoded3,encoded4;if(base64[base64.length-1]===\"=\"){bufferLength--;if(base64[base64.length-2]===\"=\"){bufferLength--}}var arraybuffer=new ArrayBuffer(bufferLength),bytes=new Uint8Array(arraybuffer);for(i=0;i<len;i+=4){encoded1=chars.indexOf(base64[i]);encoded2=chars.indexOf(base64[i+1]);encoded3=chars.indexOf(base64[i+2]);encoded4=chars.indexOf(base64[i+3]);bytes[p++]=encoded1<<2|encoded2>>4;bytes[p++]=(encoded2&15)<<4|encoded3>>2;bytes[p++]=(encoded3&3)<<6|encoded4&63}return arraybuffer}})(\"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\")},{}],14:[function(_dereq_,module,exports){(function(global){var BlobBuilder=global.BlobBuilder||global.WebKitBlobBuilder||global.MSBlobBuilder||global.MozBlobBuilder;var blobSupported=function(){try{var a=new Blob([\"hi\"]);return a.size===2}catch(e){return false}}();var blobSupportsArrayBufferView=blobSupported&&function(){try{var b=new Blob([new Uint8Array([1,2])]);return b.size===2}catch(e){return false}}();var blobBuilderSupported=BlobBuilder&&BlobBuilder.prototype.append&&BlobBuilder.prototype.getBlob;function mapArrayBufferViews(ary){for(var i=0;i<ary.length;i++){var chunk=ary[i];if(chunk.buffer instanceof ArrayBuffer){var buf=chunk.buffer;if(chunk.byteLength!==buf.byteLength){var copy=new Uint8Array(chunk.byteLength);copy.set(new Uint8Array(buf,chunk.byteOffset,chunk.byteLength));buf=copy.buffer}ary[i]=buf}}}function BlobBuilderConstructor(ary,options){options=options||{};var bb=new BlobBuilder;mapArrayBufferViews(ary);for(var i=0;i<ary.length;i++){bb.append(ary[i])}return options.type?bb.getBlob(options.type):bb.getBlob()}function BlobConstructor(ary,options){mapArrayBufferViews(ary);return new Blob(ary,options||{})}module.exports=function(){if(blobSupported){return blobSupportsArrayBufferView?global.Blob:BlobConstructor}else if(blobBuilderSupported){return BlobBuilderConstructor}else{return undefined}}()}).call(this,typeof self!==\"undefined\"?self:typeof window!==\"undefined\"?window:typeof global!==\"undefined\"?global:{})},{}],15:[function(_dereq_,module,exports){module.exports=Emitter;function Emitter(obj){if(obj)return mixin(obj)}function mixin(obj){for(var key in Emitter.prototype){obj[key]=Emitter.prototype[key]}return obj}Emitter.prototype.on=Emitter.prototype.addEventListener=function(event,fn){this._callbacks=this._callbacks||{};(this._callbacks[event]=this._callbacks[event]||[]).push(fn);return this};Emitter.prototype.once=function(event,fn){var self=this;this._callbacks=this._callbacks||{};function on(){self.off(event,on);fn.apply(this,arguments)}on.fn=fn;this.on(event,on);return this};Emitter.prototype.off=Emitter.prototype.removeListener=Emitter.prototype.removeAllListeners=Emitter.prototype.removeEventListener=function(event,fn){this._callbacks=this._callbacks||{};if(0==arguments.length){this._callbacks={};return this}var callbacks=this._callbacks[event];if(!callbacks)return this;if(1==arguments.length){delete this._callbacks[event];return this}var cb;for(var i=0;i<callbacks.length;i++){cb=callbacks[i];if(cb===fn||cb.fn===fn){callbacks.splice(i,1);break}}return this};Emitter.prototype.emit=function(event){this._callbacks=this._callbacks||{};var args=[].slice.call(arguments,1),callbacks=this._callbacks[event];if(callbacks){callbacks=callbacks.slice(0);for(var i=0,len=callbacks.length;i<len;++i){callbacks[i].apply(this,args)}}return this};Emitter.prototype.listeners=function(event){this._callbacks=this._callbacks||{};return this._callbacks[event]||[]};Emitter.prototype.hasListeners=function(event){return!!this.listeners(event).length}},{}],16:[function(_dereq_,module,exports){module.exports=function(a,b){var fn=function(){};fn.prototype=b.prototype;a.prototype=new fn;a.prototype.constructor=a}},{}],17:[function(_dereq_,module,exports){exports=module.exports=_dereq_(\"./debug\");exports.log=log;exports.formatArgs=formatArgs;exports.save=save;exports.load=load;exports.useColors=useColors;exports.storage=\"undefined\"!=typeof chrome&&\"undefined\"!=typeof chrome.storage?chrome.storage.local:localstorage();exports.colors=[\"lightseagreen\",\"forestgreen\",\"goldenrod\",\"dodgerblue\",\"darkorchid\",\"crimson\"];function useColors(){return\"WebkitAppearance\"in document.documentElement.style||window.console&&(console.firebug||console.exception&&console.table)||navigator.userAgent.toLowerCase().match(/firefox\\/(\\d+)/)&&parseInt(RegExp.$1,10)>=31}exports.formatters.j=function(v){return JSON.stringify(v)};function formatArgs(){var args=arguments;var useColors=this.useColors;args[0]=(useColors?\"%c\":\"\")+this.namespace+(useColors?\" %c\":\" \")+args[0]+(useColors?\"%c \":\" \")+\"+\"+exports.humanize(this.diff);if(!useColors)return args;var c=\"color: \"+this.color;args=[args[0],c,\"color: inherit\"].concat(Array.prototype.slice.call(args,1));var index=0;var lastC=0;args[0].replace(/%[a-z%]/g,function(match){if(\"%%\"===match)return;index++;if(\"%c\"===match){lastC=index}});args.splice(lastC,0,c);return args}function log(){return\"object\"===typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function save(namespaces){try{if(null==namespaces){exports.storage.removeItem(\"debug\")}else{exports.storage.debug=namespaces}}catch(e){}}function load(){var r;try{r=exports.storage.debug}catch(e){}return r}exports.enable(load());function localstorage(){try{return window.localStorage}catch(e){}}},{\"./debug\":18}],18:[function(_dereq_,module,exports){exports=module.exports=debug;exports.coerce=coerce;exports.disable=disable;exports.enable=enable;exports.enabled=enabled;exports.humanize=_dereq_(\"ms\");exports.names=[];exports.skips=[];exports.formatters={};var prevColor=0;var prevTime;function selectColor(){return exports.colors[prevColor++%exports.colors.length]}function debug(namespace){function disabled(){}disabled.enabled=false;function enabled(){var self=enabled;var curr=+new Date;var ms=curr-(prevTime||curr);self.diff=ms;self.prev=prevTime;self.curr=curr;prevTime=curr;if(null==self.useColors)self.useColors=exports.useColors();if(null==self.color&&self.useColors)self.color=selectColor();var args=Array.prototype.slice.call(arguments);args[0]=exports.coerce(args[0]);if(\"string\"!==typeof args[0]){args=[\"%o\"].concat(args)}var index=0;args[0]=args[0].replace(/%([a-z%])/g,function(match,format){if(match===\"%%\")return match;index++;var formatter=exports.formatters[format];if(\"function\"===typeof formatter){var val=args[index];match=formatter.call(self,val);args.splice(index,1);index--}return match});if(\"function\"===typeof exports.formatArgs){args=exports.formatArgs.apply(self,args)}var logFn=enabled.log||exports.log||console.log.bind(console);logFn.apply(self,args)}enabled.enabled=true;var fn=exports.enabled(namespace)?enabled:disabled;fn.namespace=namespace;return fn}function enable(namespaces){exports.save(namespaces);var split=(namespaces||\"\").split(/[\\s,]+/);var len=split.length;for(var i=0;i<len;i++){if(!split[i])continue;namespaces=split[i].replace(/\\*/g,\".*?\");if(namespaces[0]===\"-\"){exports.skips.push(new RegExp(\"^\"+namespaces.substr(1)+\"$\"))}else{exports.names.push(new RegExp(\"^\"+namespaces+\"$\"))}}}function disable(){exports.enable(\"\")}function enabled(name){var i,len;for(i=0,len=exports.skips.length;i<len;i++){if(exports.skips[i].test(name)){return false}}for(i=0,len=exports.names.length;i<len;i++){if(exports.names[i].test(name)){return true}}return false}function coerce(val){if(val instanceof Error)return val.stack||val.message;return val}},{ms:25}],19:[function(_dereq_,module,exports){(function(global){var keys=_dereq_(\"./keys\");var hasBinary=_dereq_(\"has-binary\");var sliceBuffer=_dereq_(\"arraybuffer.slice\");var base64encoder=_dereq_(\"base64-arraybuffer\");var after=_dereq_(\"after\");var utf8=_dereq_(\"utf8\");var isAndroid=navigator.userAgent.match(/Android/i);var isPhantomJS=/PhantomJS/i.test(navigator.userAgent);var dontSendBlobs=isAndroid||isPhantomJS;exports.protocol=3;var packets=exports.packets={open:0,close:1,ping:2,pong:3,message:4,upgrade:5,noop:6};var packetslist=keys(packets);var err={type:\"error\",data:\"parser error\"};var Blob=_dereq_(\"blob\");exports.encodePacket=function(packet,supportsBinary,utf8encode,callback){if(\"function\"==typeof supportsBinary){callback=supportsBinary;supportsBinary=false}if(\"function\"==typeof utf8encode){callback=utf8encode;utf8encode=null}var data=packet.data===undefined?undefined:packet.data.buffer||packet.data;if(global.ArrayBuffer&&data instanceof ArrayBuffer){return encodeArrayBuffer(packet,supportsBinary,callback)}else if(Blob&&data instanceof global.Blob){return encodeBlob(packet,supportsBinary,callback)}if(data&&data.base64){return encodeBase64Object(packet,callback)}var encoded=packets[packet.type];if(undefined!==packet.data){encoded+=utf8encode?utf8.encode(String(packet.data)):String(packet.data)}return callback(\"\"+encoded)};function encodeBase64Object(packet,callback){var message=\"b\"+exports.packets[packet.type]+packet.data.data;return callback(message)}function encodeArrayBuffer(packet,supportsBinary,callback){if(!supportsBinary){return exports.encodeBase64Packet(packet,callback)}var data=packet.data;var contentArray=new Uint8Array(data);var resultBuffer=new Uint8Array(1+data.byteLength);resultBuffer[0]=packets[packet.type];for(var i=0;i<contentArray.length;i++){resultBuffer[i+1]=contentArray[i]}return callback(resultBuffer.buffer)}function encodeBlobAsArrayBuffer(packet,supportsBinary,callback){if(!supportsBinary){return exports.encodeBase64Packet(packet,callback)}var fr=new FileReader;fr.onload=function(){packet.data=fr.result;exports.encodePacket(packet,supportsBinary,true,callback)};return fr.readAsArrayBuffer(packet.data)}function encodeBlob(packet,supportsBinary,callback){if(!supportsBinary){return exports.encodeBase64Packet(packet,callback)}if(dontSendBlobs){return encodeBlobAsArrayBuffer(packet,supportsBinary,callback)}var length=new Uint8Array(1);length[0]=packets[packet.type];var blob=new Blob([length.buffer,packet.data]);return callback(blob)}exports.encodeBase64Packet=function(packet,callback){var message=\"b\"+exports.packets[packet.type];if(Blob&&packet.data instanceof global.Blob){var fr=new FileReader;fr.onload=function(){var b64=fr.result.split(\",\")[1];callback(message+b64)};return fr.readAsDataURL(packet.data)}var b64data;try{b64data=String.fromCharCode.apply(null,new Uint8Array(packet.data))}catch(e){var typed=new Uint8Array(packet.data);var basic=new Array(typed.length);for(var i=0;i<typed.length;i++){basic[i]=typed[i]}b64data=String.fromCharCode.apply(null,basic)}message+=global.btoa(b64data);return callback(message)};exports.decodePacket=function(data,binaryType,utf8decode){if(typeof data==\"string\"||data===undefined){if(data.charAt(0)==\"b\"){return exports.decodeBase64Packet(data.substr(1),binaryType)}if(utf8decode){try{data=utf8.decode(data)}catch(e){return err}}var type=data.charAt(0);if(Number(type)!=type||!packetslist[type]){return err}if(data.length>1){return{type:packetslist[type],data:data.substring(1)}}else{return{type:packetslist[type]}}}var asArray=new Uint8Array(data);var type=asArray[0];var rest=sliceBuffer(data,1);if(Blob&&binaryType===\"blob\"){rest=new Blob([rest])}return{type:packetslist[type],data:rest}};exports.decodeBase64Packet=function(msg,binaryType){var type=packetslist[msg.charAt(0)];if(!global.ArrayBuffer){return{type:type,data:{base64:true,data:msg.substr(1)}}}var data=base64encoder.decode(msg.substr(1));if(binaryType===\"blob\"&&Blob){data=new Blob([data])}return{type:type,data:data}};exports.encodePayload=function(packets,supportsBinary,callback){if(typeof supportsBinary==\"function\"){callback=supportsBinary;supportsBinary=null}var isBinary=hasBinary(packets);if(supportsBinary&&isBinary){if(Blob&&!dontSendBlobs){return exports.encodePayloadAsBlob(packets,callback)}return exports.encodePayloadAsArrayBuffer(packets,callback)}if(!packets.length){return callback(\"0:\")}function setLengthHeader(message){return message.length+\":\"+message}function encodeOne(packet,doneCallback){exports.encodePacket(packet,!isBinary?false:supportsBinary,true,function(message){doneCallback(null,setLengthHeader(message))})}map(packets,encodeOne,function(err,results){return callback(results.join(\"\"))})};function map(ary,each,done){var result=new Array(ary.length);var next=after(ary.length,done);var eachWithIndex=function(i,el,cb){each(el,function(error,msg){result[i]=msg;cb(error,result)})};for(var i=0;i<ary.length;i++){eachWithIndex(i,ary[i],next)}}exports.decodePayload=function(data,binaryType,callback){if(typeof data!=\"string\"){return exports.decodePayloadAsBinary(data,binaryType,callback)}if(typeof binaryType===\"function\"){callback=binaryType;binaryType=null}var packet;if(data==\"\"){return callback(err,0,1)}var length=\"\",n,msg;for(var i=0,l=data.length;i<l;i++){var chr=data.charAt(i);if(\":\"!=chr){length+=chr}else{if(\"\"==length||length!=(n=Number(length))){return callback(err,0,1)}msg=data.substr(i+1,n);if(length!=msg.length){return callback(err,0,1)}if(msg.length){packet=exports.decodePacket(msg,binaryType,true);if(err.type==packet.type&&err.data==packet.data){return callback(err,0,1)}var ret=callback(packet,i+n,l);if(false===ret)return}i+=n;length=\"\"}}if(length!=\"\"){return callback(err,0,1)}};exports.encodePayloadAsArrayBuffer=function(packets,callback){if(!packets.length){return callback(new ArrayBuffer(0))}function encodeOne(packet,doneCallback){exports.encodePacket(packet,true,true,function(data){return doneCallback(null,data)})}map(packets,encodeOne,function(err,encodedPackets){var totalLength=encodedPackets.reduce(function(acc,p){var len;if(typeof p===\"string\"){len=p.length}else{len=p.byteLength}return acc+len.toString().length+len+2},0);var resultArray=new Uint8Array(totalLength);var bufferIndex=0;encodedPackets.forEach(function(p){var isString=typeof p===\"string\";var ab=p;if(isString){var view=new Uint8Array(p.length);for(var i=0;i<p.length;i++){view[i]=p.charCodeAt(i)}ab=view.buffer}if(isString){resultArray[bufferIndex++]=0}else{resultArray[bufferIndex++]=1}var lenStr=ab.byteLength.toString();for(var i=0;i<lenStr.length;i++){resultArray[bufferIndex++]=parseInt(lenStr[i])}resultArray[bufferIndex++]=255;var view=new Uint8Array(ab);for(var i=0;i<view.length;i++){resultArray[bufferIndex++]=view[i]}});return callback(resultArray.buffer)})};exports.encodePayloadAsBlob=function(packets,callback){function encodeOne(packet,doneCallback){exports.encodePacket(packet,true,true,function(encoded){var binaryIdentifier=new Uint8Array(1);binaryIdentifier[0]=1;if(typeof encoded===\"string\"){var view=new Uint8Array(encoded.length);for(var i=0;i<encoded.length;i++){view[i]=encoded.charCodeAt(i)}encoded=view.buffer;binaryIdentifier[0]=0}var len=encoded instanceof ArrayBuffer?encoded.byteLength:encoded.size;var lenStr=len.toString();var lengthAry=new Uint8Array(lenStr.length+1);for(var i=0;i<lenStr.length;i++){lengthAry[i]=parseInt(lenStr[i])}lengthAry[lenStr.length]=255;if(Blob){var blob=new Blob([binaryIdentifier.buffer,lengthAry.buffer,encoded]);doneCallback(null,blob)}})}map(packets,encodeOne,function(err,results){return callback(new Blob(results))})};exports.decodePayloadAsBinary=function(data,binaryType,callback){if(typeof binaryType===\"function\"){callback=binaryType;binaryType=null}var bufferTail=data;var buffers=[];var numberTooLong=false;while(bufferTail.byteLength>0){var tailArray=new Uint8Array(bufferTail);var isString=tailArray[0]===0;var msgLength=\"\";for(var i=1;;i++){if(tailArray[i]==255)break;if(msgLength.length>310){numberTooLong=true;break}msgLength+=tailArray[i]}if(numberTooLong)return callback(err,0,1);bufferTail=sliceBuffer(bufferTail,2+msgLength.length);msgLength=parseInt(msgLength);var msg=sliceBuffer(bufferTail,0,msgLength);if(isString){try{msg=String.fromCharCode.apply(null,new Uint8Array(msg))}catch(e){var typed=new Uint8Array(msg);msg=\"\";for(var i=0;i<typed.length;i++){msg+=String.fromCharCode(typed[i])}}}buffers.push(msg);bufferTail=sliceBuffer(bufferTail,msgLength)}var total=buffers.length;buffers.forEach(function(buffer,i){callback(exports.decodePacket(buffer,binaryType,true),i,total)})}}).call(this,typeof self!==\"undefined\"?self:typeof window!==\"undefined\"?window:typeof global!==\"undefined\"?global:{})},{\"./keys\":20,after:11,\"arraybuffer.slice\":12,\"base64-arraybuffer\":13,blob:14,\"has-binary\":21,utf8:29}],20:[function(_dereq_,module,exports){module.exports=Object.keys||function keys(obj){var arr=[];var has=Object.prototype.hasOwnProperty;for(var i in obj){if(has.call(obj,i)){arr.push(i)}}return arr}},{}],21:[function(_dereq_,module,exports){(function(global){var isArray=_dereq_(\"isarray\");module.exports=hasBinary;function hasBinary(data){function _hasBinary(obj){if(!obj)return false;if(global.Buffer&&global.Buffer.isBuffer(obj)||global.ArrayBuffer&&obj instanceof ArrayBuffer||global.Blob&&obj instanceof Blob||global.File&&obj instanceof File){return true}if(isArray(obj)){for(var i=0;i<obj.length;i++){if(_hasBinary(obj[i])){return true}}}else if(obj&&\"object\"==typeof obj){if(obj.toJSON){obj=obj.toJSON()}for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)&&_hasBinary(obj[key])){return true}}}return false}return _hasBinary(data)}}).call(this,typeof self!==\"undefined\"?self:typeof window!==\"undefined\"?window:typeof global!==\"undefined\"?global:{})},{isarray:24}],22:[function(_dereq_,module,exports){try{module.exports=typeof XMLHttpRequest!==\"undefined\"&&\"withCredentials\"in new XMLHttpRequest}catch(err){module.exports=false}},{}],23:[function(_dereq_,module,exports){var indexOf=[].indexOf;module.exports=function(arr,obj){if(indexOf)return arr.indexOf(obj);for(var i=0;i<arr.length;++i){if(arr[i]===obj)return i}return-1}},{}],24:[function(_dereq_,module,exports){module.exports=Array.isArray||function(arr){return Object.prototype.toString.call(arr)==\"[object Array]\"}},{}],25:[function(_dereq_,module,exports){var s=1e3;var m=s*60;var h=m*60;var d=h*24;var y=d*365.25;module.exports=function(val,options){options=options||{};if(\"string\"==typeof val)return parse(val);return options.long?long(val):short(val)};function parse(str){str=\"\"+str;if(str.length>1e4)return;var match=/^((?:\\d+)?\\.?\\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);if(!match)return;var n=parseFloat(match[1]);var type=(match[2]||\"ms\").toLowerCase();switch(type){case\"years\":case\"year\":case\"yrs\":case\"yr\":case\"y\":return n*y;case\"days\":case\"day\":case\"d\":return n*d;case\"hours\":case\"hour\":case\"hrs\":case\"hr\":case\"h\":return n*h;case\"minutes\":case\"minute\":case\"mins\":case\"min\":case\"m\":return n*m;case\"seconds\":case\"second\":case\"secs\":case\"sec\":case\"s\":return n*s;case\"milliseconds\":case\"millisecond\":case\"msecs\":case\"msec\":case\"ms\":return n}}function short(ms){if(ms>=d)return Math.round(ms/d)+\"d\";if(ms>=h)return Math.round(ms/h)+\"h\";if(ms>=m)return Math.round(ms/m)+\"m\";if(ms>=s)return Math.round(ms/s)+\"s\";return ms+\"ms\"}function long(ms){return plural(ms,d,\"day\")||plural(ms,h,\"hour\")||plural(ms,m,\"minute\")||plural(ms,s,\"second\")||ms+\" ms\"}function plural(ms,n,name){if(ms<n)return;if(ms<n*1.5)return Math.floor(ms/n)+\" \"+name;return Math.ceil(ms/n)+\" \"+name+\"s\"}},{}],26:[function(_dereq_,module,exports){(function(global){var rvalidchars=/^[\\],:{}\\s]*$/;var rvalidescape=/\\\\(?:[\"\\\\\\/bfnrt]|u[0-9a-fA-F]{4})/g;var rvalidtokens=/\"[^\"\\\\\\n\\r]*\"|true|false|null|-?\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?/g;var rvalidbraces=/(?:^|:|,)(?:\\s*\\[)+/g;var rtrimLeft=/^\\s+/;var rtrimRight=/\\s+$/;module.exports=function parsejson(data){if(\"string\"!=typeof data||!data){return null}data=data.replace(rtrimLeft,\"\").replace(rtrimRight,\"\");if(global.JSON&&JSON.parse){return JSON.parse(data)}if(rvalidchars.test(data.replace(rvalidescape,\"@\").replace(rvalidtokens,\"]\").replace(rvalidbraces,\"\"))){return new Function(\"return \"+data)()}}}).call(this,typeof self!==\"undefined\"?self:typeof window!==\"undefined\"?window:typeof global!==\"undefined\"?global:{})},{}],27:[function(_dereq_,module,exports){exports.encode=function(obj){var str=\"\";for(var i in obj){if(obj.hasOwnProperty(i)){if(str.length)str+=\"&\";str+=encodeURIComponent(i)+\"=\"+encodeURIComponent(obj[i])}}return str};exports.decode=function(qs){var qry={};var pairs=qs.split(\"&\");for(var i=0,l=pairs.length;i<l;i++){var pair=pairs[i].split(\"=\");qry[decodeURIComponent(pair[0])]=decodeURIComponent(pair[1])}return qry}},{}],28:[function(_dereq_,module,exports){var re=/^(?:(?![^:@]+:[^:@\\/]*@)(http|https|ws|wss):\\/\\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\\/?#]*)(?::(\\d*))?)(((\\/(?:[^?#](?![^?#\\/]*\\.[^?#\\/.]+(?:[?#]|$)))*\\/?)?([^?#\\/]*))(?:\\?([^#]*))?(?:#(.*))?)/;var parts=[\"source\",\"protocol\",\"authority\",\"userInfo\",\"user\",\"password\",\"host\",\"port\",\"relative\",\"path\",\"directory\",\"file\",\"query\",\"anchor\"];module.exports=function parseuri(str){var src=str,b=str.indexOf(\"[\"),e=str.indexOf(\"]\");if(b!=-1&&e!=-1){str=str.substring(0,b)+str.substring(b,e).replace(/:/g,\";\")+str.substring(e,str.length)}var m=re.exec(str||\"\"),uri={},i=14;while(i--){uri[parts[i]]=m[i]||\"\"}if(b!=-1&&e!=-1){uri.source=src;uri.host=uri.host.substring(1,uri.host.length-1).replace(/;/g,\":\");uri.authority=uri.authority.replace(\"[\",\"\").replace(\"]\",\"\").replace(/;/g,\":\");uri.ipv6uri=true}return uri}},{}],29:[function(_dereq_,module,exports){(function(global){(function(root){var freeExports=typeof exports==\"object\"&&exports;var freeModule=typeof module==\"object\"&&module&&module.exports==freeExports&&module;var freeGlobal=typeof global==\"object\"&&global;if(freeGlobal.global===freeGlobal||freeGlobal.window===freeGlobal){root=freeGlobal}var stringFromCharCode=String.fromCharCode;function ucs2decode(string){var output=[];var counter=0;var length=string.length;var value;var extra;while(counter<length){value=string.charCodeAt(counter++);if(value>=55296&&value<=56319&&counter<length){extra=string.charCodeAt(counter++);if((extra&64512)==56320){output.push(((value&1023)<<10)+(extra&1023)+65536)}else{output.push(value);counter--}}else{output.push(value)}}return output}function ucs2encode(array){var length=array.length;var index=-1;var value;var output=\"\";while(++index<length){value=array[index];if(value>65535){value-=65536;output+=stringFromCharCode(value>>>10&1023|55296);value=56320|value&1023}output+=stringFromCharCode(value)}return output}function checkScalarValue(codePoint){if(codePoint>=55296&&codePoint<=57343){throw Error(\"Lone surrogate U+\"+codePoint.toString(16).toUpperCase()+\" is not a scalar value\")}}function createByte(codePoint,shift){return stringFromCharCode(codePoint>>shift&63|128)}function encodeCodePoint(codePoint){if((codePoint&4294967168)==0){return stringFromCharCode(codePoint)}var symbol=\"\";if((codePoint&4294965248)==0){symbol=stringFromCharCode(codePoint>>6&31|192)}else if((codePoint&4294901760)==0){checkScalarValue(codePoint);symbol=stringFromCharCode(codePoint>>12&15|224);symbol+=createByte(codePoint,6)}else if((codePoint&4292870144)==0){symbol=stringFromCharCode(codePoint>>18&7|240);symbol+=createByte(codePoint,12);symbol+=createByte(codePoint,6)}symbol+=stringFromCharCode(codePoint&63|128);return symbol}function utf8encode(string){var codePoints=ucs2decode(string);var length=codePoints.length;var index=-1;var codePoint;var byteString=\"\";while(++index<length){codePoint=codePoints[index];byteString+=encodeCodePoint(codePoint)}return byteString}function readContinuationByte(){if(byteIndex>=byteCount){throw Error(\"Invalid byte index\")}var continuationByte=byteArray[byteIndex]&255;byteIndex++;if((continuationByte&192)==128){return continuationByte&63}throw Error(\"Invalid continuation byte\")}function decodeSymbol(){var byte1;var byte2;var byte3;var byte4;var codePoint;if(byteIndex>byteCount){throw Error(\"Invalid byte index\")}if(byteIndex==byteCount){return false}byte1=byteArray[byteIndex]&255;byteIndex++;if((byte1&128)==0){return byte1}if((byte1&224)==192){var byte2=readContinuationByte();codePoint=(byte1&31)<<6|byte2;if(codePoint>=128){return codePoint}else{throw Error(\"Invalid continuation byte\")}}if((byte1&240)==224){byte2=readContinuationByte();byte3=readContinuationByte();codePoint=(byte1&15)<<12|byte2<<6|byte3;if(codePoint>=2048){checkScalarValue(codePoint);return codePoint}else{throw Error(\"Invalid continuation byte\")}}if((byte1&248)==240){byte2=readContinuationByte();byte3=readContinuationByte();byte4=readContinuationByte();codePoint=(byte1&15)<<18|byte2<<12|byte3<<6|byte4;if(codePoint>=65536&&codePoint<=1114111){return codePoint}}throw Error(\"Invalid UTF-8 detected\")}var byteArray;var byteCount;var byteIndex;function utf8decode(byteString){byteArray=ucs2decode(byteString);byteCount=byteArray.length;byteIndex=0;var codePoints=[];var tmp;while((tmp=decodeSymbol())!==false){codePoints.push(tmp)}return ucs2encode(codePoints)}var utf8={version:\"2.0.0\",encode:utf8encode,decode:utf8decode};if(typeof define==\"function\"&&typeof define.amd==\"object\"&&define.amd){define(function(){return utf8})}else if(freeExports&&!freeExports.nodeType){if(freeModule){freeModule.exports=utf8}else{var object={};var hasOwnProperty=object.hasOwnProperty;for(var key in utf8){hasOwnProperty.call(utf8,key)&&(freeExports[key]=utf8[key])}}}else{root.utf8=utf8}})(this)}).call(this,typeof self!==\"undefined\"?self:typeof window!==\"undefined\"?window:typeof global!==\"undefined\"?global:{})},{}],30:[function(_dereq_,module,exports){\"use strict\";var alphabet=\"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_\".split(\"\"),length=64,map={},seed=0,i=0,prev;function encode(num){var encoded=\"\";do{encoded=alphabet[num%length]+encoded;num=Math.floor(num/length)}while(num>0);return encoded}function decode(str){var decoded=0;for(i=0;i<str.length;i++){decoded=decoded*length+map[str.charAt(i)]}return decoded}function yeast(){var now=encode(+new Date);if(now!==prev)return seed=0,prev=now;return now+\".\"+encode(seed++)}for(;i<length;i++)map[alphabet[i]]=i;yeast.encode=encode;yeast.decode=decode;module.exports=yeast},{}],31:[function(_dereq_,module,exports){var url=_dereq_(\"./url\");var parser=_dereq_(\"socket.io-parser\");var Manager=_dereq_(\"./manager\");var debug=_dereq_(\"debug\")(\"socket.io-client\");module.exports=exports=lookup;var cache=exports.managers={};function lookup(uri,opts){if(typeof uri==\"object\"){opts=uri;uri=undefined}opts=opts||{};var parsed=url(uri);var source=parsed.source;var id=parsed.id;var path=parsed.path;var sameNamespace=cache[id]&&path in cache[id].nsps;var newConnection=opts.forceNew||opts[\"force new connection\"]||false===opts.multiplex||sameNamespace;var io;if(newConnection){debug(\"ignoring socket cache for %s\",source);io=Manager(source,opts)}else{if(!cache[id]){debug(\"new io instance for %s\",source);cache[id]=Manager(source,opts)}io=cache[id]}return io.socket(parsed.path)}exports.protocol=parser.protocol;exports.connect=lookup;exports.Manager=_dereq_(\"./manager\");exports.Socket=_dereq_(\"./socket\")},{\"./manager\":32,\"./socket\":34,\"./url\":35,debug:39,\"socket.io-parser\":47}],32:[function(_dereq_,module,exports){var eio=_dereq_(\"engine.io-client\");var Socket=_dereq_(\"./socket\");var Emitter=_dereq_(\"component-emitter\");var parser=_dereq_(\"socket.io-parser\");var on=_dereq_(\"./on\");var bind=_dereq_(\"component-bind\");var debug=_dereq_(\"debug\")(\"socket.io-client:manager\");var indexOf=_dereq_(\"indexof\");var Backoff=_dereq_(\"backo2\");var has=Object.prototype.hasOwnProperty;module.exports=Manager;function Manager(uri,opts){if(!(this instanceof Manager))return new Manager(uri,opts);if(uri&&\"object\"==typeof uri){opts=uri;uri=undefined}opts=opts||{};opts.path=opts.path||\"/socket.io\";this.nsps={};this.subs=[];this.opts=opts;this.reconnection(opts.reconnection!==false);this.reconnectionAttempts(opts.reconnectionAttempts||Infinity);this.reconnectionDelay(opts.reconnectionDelay||1e3);this.reconnectionDelayMax(opts.reconnectionDelayMax||5e3);this.randomizationFactor(opts.randomizationFactor||.5);this.backoff=new Backoff({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()});this.timeout(null==opts.timeout?2e4:opts.timeout);this.readyState=\"closed\";this.uri=uri;this.connecting=[];this.lastPing=null;this.encoding=false;this.packetBuffer=[];this.encoder=new parser.Encoder;this.decoder=new parser.Decoder;this.autoConnect=opts.autoConnect!==false;if(this.autoConnect)this.open()}Manager.prototype.emitAll=function(){this.emit.apply(this,arguments);for(var nsp in this.nsps){if(has.call(this.nsps,nsp)){this.nsps[nsp].emit.apply(this.nsps[nsp],arguments)}}};Manager.prototype.updateSocketIds=function(){for(var nsp in this.nsps){if(has.call(this.nsps,nsp)){this.nsps[nsp].id=this.engine.id}}};Emitter(Manager.prototype);Manager.prototype.reconnection=function(v){if(!arguments.length)return this._reconnection;this._reconnection=!!v;return this};Manager.prototype.reconnectionAttempts=function(v){if(!arguments.length)return this._reconnectionAttempts;this._reconnectionAttempts=v;return this};Manager.prototype.reconnectionDelay=function(v){if(!arguments.length)return this._reconnectionDelay;this._reconnectionDelay=v;this.backoff&&this.backoff.setMin(v);return this};Manager.prototype.randomizationFactor=function(v){if(!arguments.length)return this._randomizationFactor;this._randomizationFactor=v;this.backoff&&this.backoff.setJitter(v);return this};Manager.prototype.reconnectionDelayMax=function(v){if(!arguments.length)return this._reconnectionDelayMax;this._reconnectionDelayMax=v;this.backoff&&this.backoff.setMax(v);return this};Manager.prototype.timeout=function(v){if(!arguments.length)return this._timeout;this._timeout=v;return this};Manager.prototype.maybeReconnectOnOpen=function(){if(!this.reconnecting&&this._reconnection&&this.backoff.attempts===0){this.reconnect()}};Manager.prototype.open=Manager.prototype.connect=function(fn){debug(\"readyState %s\",this.readyState);if(~this.readyState.indexOf(\"open\"))return this;debug(\"opening %s\",this.uri);this.engine=eio(this.uri,this.opts);var socket=this.engine;var self=this;this.readyState=\"opening\";this.skipReconnect=false;var openSub=on(socket,\"open\",function(){self.onopen();fn&&fn()});var errorSub=on(socket,\"error\",function(data){debug(\"connect_error\");self.cleanup();self.readyState=\"closed\";self.emitAll(\"connect_error\",data);if(fn){var err=new Error(\"Connection error\");err.data=data;fn(err)}else{self.maybeReconnectOnOpen()}});if(false!==this._timeout){var timeout=this._timeout;debug(\"connect attempt will timeout after %d\",timeout);var timer=setTimeout(function(){debug(\"connect attempt timed out after %d\",timeout);openSub.destroy();socket.close();socket.emit(\"error\",\"timeout\");self.emitAll(\"connect_timeout\",timeout)},timeout);this.subs.push({destroy:function(){clearTimeout(timer)}})}this.subs.push(openSub);this.subs.push(errorSub);return this};Manager.prototype.onopen=function(){debug(\"open\");this.cleanup();this.readyState=\"open\";this.emit(\"open\");var socket=this.engine;this.subs.push(on(socket,\"data\",bind(this,\"ondata\")));this.subs.push(on(socket,\"ping\",bind(this,\"onping\")));this.subs.push(on(socket,\"pong\",bind(this,\"onpong\")));this.subs.push(on(socket,\"error\",bind(this,\"onerror\")));this.subs.push(on(socket,\"close\",bind(this,\"onclose\")));this.subs.push(on(this.decoder,\"decoded\",bind(this,\"ondecoded\")))};Manager.prototype.onping=function(){this.lastPing=new Date;this.emitAll(\"ping\")};Manager.prototype.onpong=function(){this.emitAll(\"pong\",new Date-this.lastPing)};Manager.prototype.ondata=function(data){this.decoder.add(data)};Manager.prototype.ondecoded=function(packet){this.emit(\"packet\",packet)};Manager.prototype.onerror=function(err){debug(\"error\",err);this.emitAll(\"error\",err)};Manager.prototype.socket=function(nsp){var socket=this.nsps[nsp];if(!socket){socket=new Socket(this,nsp);this.nsps[nsp]=socket;var self=this;socket.on(\"connecting\",onConnecting);\nsocket.on(\"connect\",function(){socket.id=self.engine.id});if(this.autoConnect){onConnecting()}}function onConnecting(){if(!~indexOf(self.connecting,socket)){self.connecting.push(socket)}}return socket};Manager.prototype.destroy=function(socket){var index=indexOf(this.connecting,socket);if(~index)this.connecting.splice(index,1);if(this.connecting.length)return;this.close()};Manager.prototype.packet=function(packet){debug(\"writing packet %j\",packet);var self=this;if(!self.encoding){self.encoding=true;this.encoder.encode(packet,function(encodedPackets){for(var i=0;i<encodedPackets.length;i++){self.engine.write(encodedPackets[i],packet.options)}self.encoding=false;self.processPacketQueue()})}else{self.packetBuffer.push(packet)}};Manager.prototype.processPacketQueue=function(){if(this.packetBuffer.length>0&&!this.encoding){var pack=this.packetBuffer.shift();this.packet(pack)}};Manager.prototype.cleanup=function(){debug(\"cleanup\");var sub;while(sub=this.subs.shift())sub.destroy();this.packetBuffer=[];this.encoding=false;this.lastPing=null;this.decoder.destroy()};Manager.prototype.close=Manager.prototype.disconnect=function(){debug(\"disconnect\");this.skipReconnect=true;this.reconnecting=false;if(\"opening\"==this.readyState){this.cleanup()}this.backoff.reset();this.readyState=\"closed\";if(this.engine)this.engine.close()};Manager.prototype.onclose=function(reason){debug(\"onclose\");this.cleanup();this.backoff.reset();this.readyState=\"closed\";this.emit(\"close\",reason);if(this._reconnection&&!this.skipReconnect){this.reconnect()}};Manager.prototype.reconnect=function(){if(this.reconnecting||this.skipReconnect)return this;var self=this;if(this.backoff.attempts>=this._reconnectionAttempts){debug(\"reconnect failed\");this.backoff.reset();this.emitAll(\"reconnect_failed\");this.reconnecting=false}else{var delay=this.backoff.duration();debug(\"will wait %dms before reconnect attempt\",delay);this.reconnecting=true;var timer=setTimeout(function(){if(self.skipReconnect)return;debug(\"attempting reconnect\");self.emitAll(\"reconnect_attempt\",self.backoff.attempts);self.emitAll(\"reconnecting\",self.backoff.attempts);if(self.skipReconnect)return;self.open(function(err){if(err){debug(\"reconnect attempt error\");self.reconnecting=false;self.reconnect();self.emitAll(\"reconnect_error\",err.data)}else{debug(\"reconnect success\");self.onreconnect()}})},delay);this.subs.push({destroy:function(){clearTimeout(timer)}})}};Manager.prototype.onreconnect=function(){var attempt=this.backoff.attempts;this.reconnecting=false;this.backoff.reset();this.updateSocketIds();this.emitAll(\"reconnect\",attempt)}},{\"./on\":33,\"./socket\":34,backo2:36,\"component-bind\":37,\"component-emitter\":38,debug:39,\"engine.io-client\":1,indexof:42,\"socket.io-parser\":47}],33:[function(_dereq_,module,exports){module.exports=on;function on(obj,ev,fn){obj.on(ev,fn);return{destroy:function(){obj.removeListener(ev,fn)}}}},{}],34:[function(_dereq_,module,exports){var parser=_dereq_(\"socket.io-parser\");var Emitter=_dereq_(\"component-emitter\");var toArray=_dereq_(\"to-array\");var on=_dereq_(\"./on\");var bind=_dereq_(\"component-bind\");var debug=_dereq_(\"debug\")(\"socket.io-client:socket\");var hasBin=_dereq_(\"has-binary\");module.exports=exports=Socket;var events={connect:1,connect_error:1,connect_timeout:1,connecting:1,disconnect:1,error:1,reconnect:1,reconnect_attempt:1,reconnect_failed:1,reconnect_error:1,reconnecting:1,ping:1,pong:1};var emit=Emitter.prototype.emit;function Socket(io,nsp){this.io=io;this.nsp=nsp;this.json=this;this.ids=0;this.acks={};this.receiveBuffer=[];this.sendBuffer=[];this.connected=false;this.disconnected=true;if(this.io.autoConnect)this.open()}Emitter(Socket.prototype);Socket.prototype.subEvents=function(){if(this.subs)return;var io=this.io;this.subs=[on(io,\"open\",bind(this,\"onopen\")),on(io,\"packet\",bind(this,\"onpacket\")),on(io,\"close\",bind(this,\"onclose\"))]};Socket.prototype.open=Socket.prototype.connect=function(){if(this.connected)return this;this.subEvents();this.io.open();if(\"open\"==this.io.readyState)this.onopen();this.emit(\"connecting\");return this};Socket.prototype.send=function(){var args=toArray(arguments);args.unshift(\"message\");this.emit.apply(this,args);return this};Socket.prototype.emit=function(ev){if(events.hasOwnProperty(ev)){emit.apply(this,arguments);return this}var args=toArray(arguments);var parserType=parser.EVENT;if(hasBin(args)){parserType=parser.BINARY_EVENT}var packet={type:parserType,data:args};packet.options={};packet.options.compress=!this.flags||false!==this.flags.compress;if(\"function\"==typeof args[args.length-1]){debug(\"emitting packet with ack id %d\",this.ids);this.acks[this.ids]=args.pop();packet.id=this.ids++}if(this.connected){this.packet(packet)}else{this.sendBuffer.push(packet)}delete this.flags;return this};Socket.prototype.packet=function(packet){packet.nsp=this.nsp;this.io.packet(packet)};Socket.prototype.onopen=function(){debug(\"transport is open - connecting\");if(\"/\"!=this.nsp){this.packet({type:parser.CONNECT})}};Socket.prototype.onclose=function(reason){debug(\"close (%s)\",reason);this.connected=false;this.disconnected=true;delete this.id;this.emit(\"disconnect\",reason)};Socket.prototype.onpacket=function(packet){if(packet.nsp!=this.nsp)return;switch(packet.type){case parser.CONNECT:this.onconnect();break;case parser.EVENT:this.onevent(packet);break;case parser.BINARY_EVENT:this.onevent(packet);break;case parser.ACK:this.onack(packet);break;case parser.BINARY_ACK:this.onack(packet);break;case parser.DISCONNECT:this.ondisconnect();break;case parser.ERROR:this.emit(\"error\",packet.data);break}};Socket.prototype.onevent=function(packet){var args=packet.data||[];debug(\"emitting event %j\",args);if(null!=packet.id){debug(\"attaching ack callback to event\");args.push(this.ack(packet.id))}if(this.connected){emit.apply(this,args)}else{this.receiveBuffer.push(args)}};Socket.prototype.ack=function(id){var self=this;var sent=false;return function(){if(sent)return;sent=true;var args=toArray(arguments);debug(\"sending ack %j\",args);var type=hasBin(args)?parser.BINARY_ACK:parser.ACK;self.packet({type:type,id:id,data:args})}};Socket.prototype.onack=function(packet){var ack=this.acks[packet.id];if(\"function\"==typeof ack){debug(\"calling ack %s with %j\",packet.id,packet.data);ack.apply(this,packet.data);delete this.acks[packet.id]}else{debug(\"bad ack %s\",packet.id)}};Socket.prototype.onconnect=function(){this.connected=true;this.disconnected=false;this.emit(\"connect\");this.emitBuffered()};Socket.prototype.emitBuffered=function(){var i;for(i=0;i<this.receiveBuffer.length;i++){emit.apply(this,this.receiveBuffer[i])}this.receiveBuffer=[];for(i=0;i<this.sendBuffer.length;i++){this.packet(this.sendBuffer[i])}this.sendBuffer=[]};Socket.prototype.ondisconnect=function(){debug(\"server disconnect (%s)\",this.nsp);this.destroy();this.onclose(\"io server disconnect\")};Socket.prototype.destroy=function(){if(this.subs){for(var i=0;i<this.subs.length;i++){this.subs[i].destroy()}this.subs=null}this.io.destroy(this)};Socket.prototype.close=Socket.prototype.disconnect=function(){if(this.connected){debug(\"performing disconnect (%s)\",this.nsp);this.packet({type:parser.DISCONNECT})}this.destroy();if(this.connected){this.onclose(\"io client disconnect\")}return this};Socket.prototype.compress=function(compress){this.flags=this.flags||{};this.flags.compress=compress;return this}},{\"./on\":33,\"component-bind\":37,\"component-emitter\":38,debug:39,\"has-binary\":41,\"socket.io-parser\":47,\"to-array\":51}],35:[function(_dereq_,module,exports){(function(global){var parseuri=_dereq_(\"parseuri\");var debug=_dereq_(\"debug\")(\"socket.io-client:url\");module.exports=url;function url(uri,loc){var obj=uri;var loc=loc||global.location;if(null==uri)uri=loc.protocol+\"//\"+loc.host;if(\"string\"==typeof uri){if(\"/\"==uri.charAt(0)){if(\"/\"==uri.charAt(1)){uri=loc.protocol+uri}else{uri=loc.host+uri}}if(!/^(https?|wss?):\\/\\//.test(uri)){debug(\"protocol-less url %s\",uri);if(\"undefined\"!=typeof loc){uri=loc.protocol+\"//\"+uri}else{uri=\"https://\"+uri}}debug(\"parse %s\",uri);obj=parseuri(uri)}if(!obj.port){if(/^(http|ws)$/.test(obj.protocol)){obj.port=\"80\"}else if(/^(http|ws)s$/.test(obj.protocol)){obj.port=\"443\"}}obj.path=obj.path||\"/\";var ipv6=obj.host.indexOf(\":\")!==-1;var host=ipv6?\"[\"+obj.host+\"]\":obj.host;obj.id=obj.protocol+\"://\"+host+\":\"+obj.port;obj.href=obj.protocol+\"://\"+host+(loc&&loc.port==obj.port?\"\":\":\"+obj.port);return obj}}).call(this,typeof self!==\"undefined\"?self:typeof window!==\"undefined\"?window:typeof global!==\"undefined\"?global:{})},{debug:39,parseuri:45}],36:[function(_dereq_,module,exports){module.exports=Backoff;function Backoff(opts){opts=opts||{};this.ms=opts.min||100;this.max=opts.max||1e4;this.factor=opts.factor||2;this.jitter=opts.jitter>0&&opts.jitter<=1?opts.jitter:0;this.attempts=0}Backoff.prototype.duration=function(){var ms=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var rand=Math.random();var deviation=Math.floor(rand*this.jitter*ms);ms=(Math.floor(rand*10)&1)==0?ms-deviation:ms+deviation}return Math.min(ms,this.max)|0};Backoff.prototype.reset=function(){this.attempts=0};Backoff.prototype.setMin=function(min){this.ms=min};Backoff.prototype.setMax=function(max){this.max=max};Backoff.prototype.setJitter=function(jitter){this.jitter=jitter}},{}],37:[function(_dereq_,module,exports){var slice=[].slice;module.exports=function(obj,fn){if(\"string\"==typeof fn)fn=obj[fn];if(\"function\"!=typeof fn)throw new Error(\"bind() requires a function\");var args=slice.call(arguments,2);return function(){return fn.apply(obj,args.concat(slice.call(arguments)))}}},{}],38:[function(_dereq_,module,exports){module.exports=Emitter;function Emitter(obj){if(obj)return mixin(obj)}function mixin(obj){for(var key in Emitter.prototype){obj[key]=Emitter.prototype[key]}return obj}Emitter.prototype.on=Emitter.prototype.addEventListener=function(event,fn){this._callbacks=this._callbacks||{};(this._callbacks[\"$\"+event]=this._callbacks[\"$\"+event]||[]).push(fn);return this};Emitter.prototype.once=function(event,fn){function on(){this.off(event,on);fn.apply(this,arguments)}on.fn=fn;this.on(event,on);return this};Emitter.prototype.off=Emitter.prototype.removeListener=Emitter.prototype.removeAllListeners=Emitter.prototype.removeEventListener=function(event,fn){this._callbacks=this._callbacks||{};if(0==arguments.length){this._callbacks={};return this}var callbacks=this._callbacks[\"$\"+event];if(!callbacks)return this;if(1==arguments.length){delete this._callbacks[\"$\"+event];return this}var cb;for(var i=0;i<callbacks.length;i++){cb=callbacks[i];if(cb===fn||cb.fn===fn){callbacks.splice(i,1);break}}return this};Emitter.prototype.emit=function(event){this._callbacks=this._callbacks||{};var args=[].slice.call(arguments,1),callbacks=this._callbacks[\"$\"+event];if(callbacks){callbacks=callbacks.slice(0);for(var i=0,len=callbacks.length;i<len;++i){callbacks[i].apply(this,args)}}return this};Emitter.prototype.listeners=function(event){this._callbacks=this._callbacks||{};return this._callbacks[\"$\"+event]||[]};Emitter.prototype.hasListeners=function(event){return!!this.listeners(event).length}},{}],39:[function(_dereq_,module,exports){arguments[4][17][0].apply(exports,arguments)},{\"./debug\":40,dup:17}],40:[function(_dereq_,module,exports){arguments[4][18][0].apply(exports,arguments)},{dup:18,ms:44}],41:[function(_dereq_,module,exports){(function(global){var isArray=_dereq_(\"isarray\");module.exports=hasBinary;function hasBinary(data){function _hasBinary(obj){if(!obj)return false;if(global.Buffer&&global.Buffer.isBuffer&&global.Buffer.isBuffer(obj)||global.ArrayBuffer&&obj instanceof ArrayBuffer||global.Blob&&obj instanceof Blob||global.File&&obj instanceof File){return true}if(isArray(obj)){for(var i=0;i<obj.length;i++){if(_hasBinary(obj[i])){return true}}}else if(obj&&\"object\"==typeof obj){if(obj.toJSON&&\"function\"==typeof obj.toJSON){obj=obj.toJSON()}for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)&&_hasBinary(obj[key])){return true}}}return false}return _hasBinary(data)}}).call(this,typeof self!==\"undefined\"?self:typeof window!==\"undefined\"?window:typeof global!==\"undefined\"?global:{})},{isarray:43}],42:[function(_dereq_,module,exports){arguments[4][23][0].apply(exports,arguments)},{dup:23}],43:[function(_dereq_,module,exports){arguments[4][24][0].apply(exports,arguments)},{dup:24}],44:[function(_dereq_,module,exports){arguments[4][25][0].apply(exports,arguments)},{dup:25}],45:[function(_dereq_,module,exports){arguments[4][28][0].apply(exports,arguments)},{dup:28}],46:[function(_dereq_,module,exports){(function(global){var isArray=_dereq_(\"isarray\");var isBuf=_dereq_(\"./is-buffer\");exports.deconstructPacket=function(packet){var buffers=[];var packetData=packet.data;function _deconstructPacket(data){if(!data)return data;if(isBuf(data)){var placeholder={_placeholder:true,num:buffers.length};buffers.push(data);return placeholder}else if(isArray(data)){var newData=new Array(data.length);for(var i=0;i<data.length;i++){newData[i]=_deconstructPacket(data[i])}return newData}else if(\"object\"==typeof data&&!(data instanceof Date)){var newData={};for(var key in data){newData[key]=_deconstructPacket(data[key])}return newData}return data}var pack=packet;pack.data=_deconstructPacket(packetData);pack.attachments=buffers.length;return{packet:pack,buffers:buffers}};exports.reconstructPacket=function(packet,buffers){var curPlaceHolder=0;function _reconstructPacket(data){if(data&&data._placeholder){var buf=buffers[data.num];return buf}else if(isArray(data)){for(var i=0;i<data.length;i++){data[i]=_reconstructPacket(data[i])}return data}else if(data&&\"object\"==typeof data){for(var key in data){data[key]=_reconstructPacket(data[key])}return data}return data}packet.data=_reconstructPacket(packet.data);packet.attachments=undefined;return packet};exports.removeBlobs=function(data,callback){function _removeBlobs(obj,curKey,containingObject){if(!obj)return obj;if(global.Blob&&obj instanceof Blob||global.File&&obj instanceof File){pendingBlobs++;var fileReader=new FileReader;fileReader.onload=function(){if(containingObject){containingObject[curKey]=this.result}else{bloblessData=this.result}if(!--pendingBlobs){callback(bloblessData)}};fileReader.readAsArrayBuffer(obj)}else if(isArray(obj)){for(var i=0;i<obj.length;i++){_removeBlobs(obj[i],i,obj)}}else if(obj&&\"object\"==typeof obj&&!isBuf(obj)){for(var key in obj){_removeBlobs(obj[key],key,obj)}}}var pendingBlobs=0;var bloblessData=data;_removeBlobs(bloblessData);if(!pendingBlobs){callback(bloblessData)}}}).call(this,typeof self!==\"undefined\"?self:typeof window!==\"undefined\"?window:typeof global!==\"undefined\"?global:{})},{\"./is-buffer\":48,isarray:43}],47:[function(_dereq_,module,exports){var debug=_dereq_(\"debug\")(\"socket.io-parser\");var json=_dereq_(\"json3\");var isArray=_dereq_(\"isarray\");var Emitter=_dereq_(\"component-emitter\");var binary=_dereq_(\"./binary\");var isBuf=_dereq_(\"./is-buffer\");exports.protocol=4;exports.types=[\"CONNECT\",\"DISCONNECT\",\"EVENT\",\"BINARY_EVENT\",\"ACK\",\"BINARY_ACK\",\"ERROR\"];exports.CONNECT=0;exports.DISCONNECT=1;exports.EVENT=2;exports.ACK=3;exports.ERROR=4;exports.BINARY_EVENT=5;exports.BINARY_ACK=6;exports.Encoder=Encoder;exports.Decoder=Decoder;function Encoder(){}Encoder.prototype.encode=function(obj,callback){debug(\"encoding packet %j\",obj);if(exports.BINARY_EVENT==obj.type||exports.BINARY_ACK==obj.type){encodeAsBinary(obj,callback)}else{var encoding=encodeAsString(obj);callback([encoding])}};function encodeAsString(obj){var str=\"\";var nsp=false;str+=obj.type;if(exports.BINARY_EVENT==obj.type||exports.BINARY_ACK==obj.type){str+=obj.attachments;str+=\"-\"}if(obj.nsp&&\"/\"!=obj.nsp){nsp=true;str+=obj.nsp}if(null!=obj.id){if(nsp){str+=\",\";nsp=false}str+=obj.id}if(null!=obj.data){if(nsp)str+=\",\";str+=json.stringify(obj.data)}debug(\"encoded %j as %s\",obj,str);return str}function encodeAsBinary(obj,callback){function writeEncoding(bloblessData){var deconstruction=binary.deconstructPacket(bloblessData);var pack=encodeAsString(deconstruction.packet);var buffers=deconstruction.buffers;buffers.unshift(pack);callback(buffers)}binary.removeBlobs(obj,writeEncoding)}function Decoder(){this.reconstructor=null}Emitter(Decoder.prototype);Decoder.prototype.add=function(obj){var packet;if(\"string\"==typeof obj){packet=decodeString(obj);if(exports.BINARY_EVENT==packet.type||exports.BINARY_ACK==packet.type){this.reconstructor=new BinaryReconstructor(packet);if(this.reconstructor.reconPack.attachments===0){this.emit(\"decoded\",packet)}}else{this.emit(\"decoded\",packet)}}else if(isBuf(obj)||obj.base64){if(!this.reconstructor){throw new Error(\"got binary data when not reconstructing a packet\")}else{packet=this.reconstructor.takeBinaryData(obj);if(packet){this.reconstructor=null;this.emit(\"decoded\",packet)}}}else{throw new Error(\"Unknown type: \"+obj)}};function decodeString(str){var p={};var i=0;p.type=Number(str.charAt(0));if(null==exports.types[p.type])return error();if(exports.BINARY_EVENT==p.type||exports.BINARY_ACK==p.type){var buf=\"\";while(str.charAt(++i)!=\"-\"){buf+=str.charAt(i);if(i==str.length)break}if(buf!=Number(buf)||str.charAt(i)!=\"-\"){throw new Error(\"Illegal attachments\")}p.attachments=Number(buf)}if(\"/\"==str.charAt(i+1)){p.nsp=\"\";while(++i){var c=str.charAt(i);if(\",\"==c)break;p.nsp+=c;if(i==str.length)break}}else{p.nsp=\"/\"}var next=str.charAt(i+1);if(\"\"!==next&&Number(next)==next){p.id=\"\";while(++i){var c=str.charAt(i);if(null==c||Number(c)!=c){--i;break}p.id+=str.charAt(i);if(i==str.length)break}p.id=Number(p.id)}if(str.charAt(++i)){try{p.data=json.parse(str.substr(i))}catch(e){return error()}}debug(\"decoded %s as %j\",str,p);return p}Decoder.prototype.destroy=function(){if(this.reconstructor){this.reconstructor.finishedReconstruction()}};function BinaryReconstructor(packet){this.reconPack=packet;this.buffers=[]}BinaryReconstructor.prototype.takeBinaryData=function(binData){this.buffers.push(binData);if(this.buffers.length==this.reconPack.attachments){var packet=binary.reconstructPacket(this.reconPack,this.buffers);this.finishedReconstruction();return packet}return null};BinaryReconstructor.prototype.finishedReconstruction=function(){this.reconPack=null;this.buffers=[]};function error(data){return{type:exports.ERROR,data:\"parser error\"}}},{\"./binary\":46,\"./is-buffer\":48,\"component-emitter\":49,debug:39,isarray:43,json3:50}],48:[function(_dereq_,module,exports){(function(global){module.exports=isBuf;function isBuf(obj){return global.Buffer&&global.Buffer.isBuffer(obj)||global.ArrayBuffer&&obj instanceof ArrayBuffer}}).call(this,typeof self!==\"undefined\"?self:typeof window!==\"undefined\"?window:typeof global!==\"undefined\"?global:{})},{}],49:[function(_dereq_,module,exports){arguments[4][15][0].apply(exports,arguments)},{dup:15}],50:[function(_dereq_,module,exports){(function(global){(function(){var isLoader=typeof define===\"function\"&&define.amd;var objectTypes={\"function\":true,object:true};var freeExports=objectTypes[typeof exports]&&exports&&!exports.nodeType&&exports;var root=objectTypes[typeof window]&&window||this,freeGlobal=freeExports&&objectTypes[typeof module]&&module&&!module.nodeType&&typeof global==\"object\"&&global;if(freeGlobal&&(freeGlobal[\"global\"]===freeGlobal||freeGlobal[\"window\"]===freeGlobal||freeGlobal[\"self\"]===freeGlobal)){root=freeGlobal}function runInContext(context,exports){context||(context=root[\"Object\"]());exports||(exports=root[\"Object\"]());var Number=context[\"Number\"]||root[\"Number\"],String=context[\"String\"]||root[\"String\"],Object=context[\"Object\"]||root[\"Object\"],Date=context[\"Date\"]||root[\"Date\"],SyntaxError=context[\"SyntaxError\"]||root[\"SyntaxError\"],TypeError=context[\"TypeError\"]||root[\"TypeError\"],Math=context[\"Math\"]||root[\"Math\"],nativeJSON=context[\"JSON\"]||root[\"JSON\"];if(typeof nativeJSON==\"object\"&&nativeJSON){exports.stringify=nativeJSON.stringify;exports.parse=nativeJSON.parse}var objectProto=Object.prototype,getClass=objectProto.toString,isProperty,forEach,undef;var isExtended=new Date(-0xc782b5b800cec);try{isExtended=isExtended.getUTCFullYear()==-109252&&isExtended.getUTCMonth()===0&&isExtended.getUTCDate()===1&&isExtended.getUTCHours()==10&&isExtended.getUTCMinutes()==37&&isExtended.getUTCSeconds()==6&&isExtended.getUTCMilliseconds()==708}catch(exception){}function has(name){if(has[name]!==undef){return has[name]}var isSupported;if(name==\"bug-string-char-index\"){isSupported=\"a\"[0]!=\"a\"}else if(name==\"json\"){isSupported=has(\"json-stringify\")&&has(\"json-parse\")}else{var value,serialized='{\"a\":[1,true,false,null,\"\\\\u0000\\\\b\\\\n\\\\f\\\\r\\\\t\"]}';if(name==\"json-stringify\"){var stringify=exports.stringify,stringifySupported=typeof stringify==\"function\"&&isExtended;if(stringifySupported){(value=function(){return 1}).toJSON=value;try{stringifySupported=stringify(0)===\"0\"&&stringify(new Number)===\"0\"&&stringify(new String)=='\"\"'&&stringify(getClass)===undef&&stringify(undef)===undef&&stringify()===undef&&stringify(value)===\"1\"&&stringify([value])==\"[1]\"&&stringify([undef])==\"[null]\"&&stringify(null)==\"null\"&&stringify([undef,getClass,null])==\"[null,null,null]\"&&stringify({a:[value,true,false,null,\"\\x00\\b\\n\\f\\r\t\"]})==serialized&&stringify(null,value)===\"1\"&&stringify([1,2],null,1)==\"[\\n 1,\\n 2\\n]\"&&stringify(new Date(-864e13))=='\"-271821-04-20T00:00:00.000Z\"'&&stringify(new Date(864e13))=='\"+275760-09-13T00:00:00.000Z\"'&&stringify(new Date(-621987552e5))=='\"-000001-01-01T00:00:00.000Z\"'&&stringify(new Date(-1))=='\"1969-12-31T23:59:59.999Z\"'}catch(exception){stringifySupported=false}}isSupported=stringifySupported}if(name==\"json-parse\"){var parse=exports.parse;if(typeof parse==\"function\"){try{if(parse(\"0\")===0&&!parse(false)){value=parse(serialized);var parseSupported=value[\"a\"].length==5&&value[\"a\"][0]===1;if(parseSupported){try{parseSupported=!parse('\"\t\"')}catch(exception){}if(parseSupported){try{parseSupported=parse(\"01\")!==1}catch(exception){}}if(parseSupported){try{parseSupported=parse(\"1.\")!==1}catch(exception){}}}}}catch(exception){parseSupported=false}}isSupported=parseSupported}}return has[name]=!!isSupported}if(!has(\"json\")){var functionClass=\"[object Function]\",dateClass=\"[object Date]\",numberClass=\"[object Number]\",stringClass=\"[object String]\",arrayClass=\"[object Array]\",booleanClass=\"[object Boolean]\";var charIndexBuggy=has(\"bug-string-char-index\");if(!isExtended){var floor=Math.floor;var Months=[0,31,59,90,120,151,181,212,243,273,304,334];var getDay=function(year,month){return Months[month]+365*(year-1970)+floor((year-1969+(month=+(month>1)))/4)-floor((year-1901+month)/100)+floor((year-1601+month)/400)}}if(!(isProperty=objectProto.hasOwnProperty)){isProperty=function(property){var members={},constructor;if((members.__proto__=null,members.__proto__={toString:1},members).toString!=getClass){isProperty=function(property){var original=this.__proto__,result=property in(this.__proto__=null,this);this.__proto__=original;return result}}else{constructor=members.constructor;isProperty=function(property){var parent=(this.constructor||constructor).prototype;return property in this&&!(property in parent&&this[property]===parent[property])}}members=null;return isProperty.call(this,property)}}forEach=function(object,callback){var size=0,Properties,members,property;(Properties=function(){this.valueOf=0}).prototype.valueOf=0;members=new Properties;for(property in members){if(isProperty.call(members,property)){size++}}Properties=members=null;if(!size){members=[\"valueOf\",\"toString\",\"toLocaleString\",\"propertyIsEnumerable\",\"isPrototypeOf\",\"hasOwnProperty\",\"constructor\"];forEach=function(object,callback){var isFunction=getClass.call(object)==functionClass,property,length;var hasProperty=!isFunction&&typeof object.constructor!=\"function\"&&objectTypes[typeof object.hasOwnProperty]&&object.hasOwnProperty||isProperty;for(property in object){if(!(isFunction&&property==\"prototype\")&&hasProperty.call(object,property)){callback(property)}}for(length=members.length;property=members[--length];hasProperty.call(object,property)&&callback(property));}}else if(size==2){forEach=function(object,callback){var members={},isFunction=getClass.call(object)==functionClass,property;for(property in object){if(!(isFunction&&property==\"prototype\")&&!isProperty.call(members,property)&&(members[property]=1)&&isProperty.call(object,property)){callback(property)}}}}else{forEach=function(object,callback){var isFunction=getClass.call(object)==functionClass,property,isConstructor;for(property in object){if(!(isFunction&&property==\"prototype\")&&isProperty.call(object,property)&&!(isConstructor=property===\"constructor\")){callback(property)}}if(isConstructor||isProperty.call(object,property=\"constructor\")){callback(property)}}}return forEach(object,callback)};if(!has(\"json-stringify\")){var Escapes={92:\"\\\\\\\\\",34:'\\\\\"',8:\"\\\\b\",12:\"\\\\f\",10:\"\\\\n\",13:\"\\\\r\",9:\"\\\\t\"};var leadingZeroes=\"000000\";var toPaddedString=function(width,value){return(leadingZeroes+(value||0)).slice(-width)};var unicodePrefix=\"\\\\u00\";var quote=function(value){var result='\"',index=0,length=value.length,useCharIndex=!charIndexBuggy||length>10;var symbols=useCharIndex&&(charIndexBuggy?value.split(\"\"):value);for(;index<length;index++){var charCode=value.charCodeAt(index);switch(charCode){case 8:case 9:case 10:case 12:case 13:case 34:case 92:result+=Escapes[charCode];break;default:if(charCode<32){result+=unicodePrefix+toPaddedString(2,charCode.toString(16));break}result+=useCharIndex?symbols[index]:value.charAt(index)}}return result+'\"'};var serialize=function(property,object,callback,properties,whitespace,indentation,stack){var value,className,year,month,date,time,hours,minutes,seconds,milliseconds,results,element,index,length,prefix,result;try{value=object[property]}catch(exception){}if(typeof value==\"object\"&&value){className=getClass.call(value);if(className==dateClass&&!isProperty.call(value,\"toJSON\")){if(value>-1/0&&value<1/0){if(getDay){date=floor(value/864e5);for(year=floor(date/365.2425)+1970-1;getDay(year+1,0)<=date;year++);for(month=floor((date-getDay(year,0))/30.42);getDay(year,month+1)<=date;month++);date=1+date-getDay(year,month);time=(value%864e5+864e5)%864e5;hours=floor(time/36e5)%24;minutes=floor(time/6e4)%60;seconds=floor(time/1e3)%60;milliseconds=time%1e3}else{year=value.getUTCFullYear();month=value.getUTCMonth();date=value.getUTCDate();hours=value.getUTCHours();minutes=value.getUTCMinutes();seconds=value.getUTCSeconds();milliseconds=value.getUTCMilliseconds()}value=(year<=0||year>=1e4?(year<0?\"-\":\"+\")+toPaddedString(6,year<0?-year:year):toPaddedString(4,year))+\"-\"+toPaddedString(2,month+1)+\"-\"+toPaddedString(2,date)+\"T\"+toPaddedString(2,hours)+\":\"+toPaddedString(2,minutes)+\":\"+toPaddedString(2,seconds)+\".\"+toPaddedString(3,milliseconds)+\"Z\"}else{value=null}}else if(typeof value.toJSON==\"function\"&&(className!=numberClass&&className!=stringClass&&className!=arrayClass||isProperty.call(value,\"toJSON\"))){value=value.toJSON(property)}}if(callback){value=callback.call(object,property,value)}if(value===null){return\"null\"}className=getClass.call(value);if(className==booleanClass){return\"\"+value}else if(className==numberClass){return value>-1/0&&value<1/0?\"\"+value:\"null\"}else if(className==stringClass){return quote(\"\"+value)}if(typeof value==\"object\"){for(length=stack.length;length--;){if(stack[length]===value){throw TypeError()}}stack.push(value);results=[];prefix=indentation;indentation+=whitespace;if(className==arrayClass){for(index=0,length=value.length;index<length;index++){element=serialize(index,value,callback,properties,whitespace,indentation,stack);results.push(element===undef?\"null\":element)}result=results.length?whitespace?\"[\\n\"+indentation+results.join(\",\\n\"+indentation)+\"\\n\"+prefix+\"]\":\"[\"+results.join(\",\")+\"]\":\"[]\"}else{forEach(properties||value,function(property){var element=serialize(property,value,callback,properties,whitespace,indentation,stack);if(element!==undef){results.push(quote(property)+\":\"+(whitespace?\" \":\"\")+element)}});result=results.length?whitespace?\"{\\n\"+indentation+results.join(\",\\n\"+indentation)+\"\\n\"+prefix+\"}\":\"{\"+results.join(\",\")+\"}\":\"{}\"}stack.pop();return result}};exports.stringify=function(source,filter,width){var whitespace,callback,properties,className;if(objectTypes[typeof filter]&&filter){if((className=getClass.call(filter))==functionClass){callback=filter}else if(className==arrayClass){properties={};for(var index=0,length=filter.length,value;index<length;value=filter[index++],(className=getClass.call(value),className==stringClass||className==numberClass)&&(properties[value]=1));}}if(width){if((className=getClass.call(width))==numberClass){if((width-=width%1)>0){for(whitespace=\"\",width>10&&(width=10);whitespace.length<width;whitespace+=\" \");}}else if(className==stringClass){whitespace=width.length<=10?width:width.slice(0,10)}}return serialize(\"\",(value={},value[\"\"]=source,value),callback,properties,whitespace,\"\",[])}}if(!has(\"json-parse\")){var fromCharCode=String.fromCharCode;var Unescapes={92:\"\\\\\",34:'\"',47:\"/\",98:\"\\b\",116:\"\t\",110:\"\\n\",102:\"\\f\",114:\"\\r\"};var Index,Source;var abort=function(){Index=Source=null;throw SyntaxError()};var lex=function(){var source=Source,length=source.length,value,begin,position,isSigned,charCode;while(Index<length){charCode=source.charCodeAt(Index);switch(charCode){case 9:case 10:case 13:case 32:Index++;break;case 123:case 125:case 91:case 93:case 58:case 44:value=charIndexBuggy?source.charAt(Index):source[Index];Index++;return value;case 34:for(value=\"@\",Index++;Index<length;){charCode=source.charCodeAt(Index);if(charCode<32){abort()}else if(charCode==92){charCode=source.charCodeAt(++Index);switch(charCode){case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:value+=Unescapes[charCode];Index++;break;case 117:begin=++Index;for(position=Index+4;Index<position;Index++){charCode=source.charCodeAt(Index);if(!(charCode>=48&&charCode<=57||charCode>=97&&charCode<=102||charCode>=65&&charCode<=70)){abort()}}value+=fromCharCode(\"0x\"+source.slice(begin,Index));break;default:abort()}}else{if(charCode==34){break}charCode=source.charCodeAt(Index);begin=Index;while(charCode>=32&&charCode!=92&&charCode!=34){charCode=source.charCodeAt(++Index)}value+=source.slice(begin,Index)}}if(source.charCodeAt(Index)==34){Index++;return value}abort();default:begin=Index;if(charCode==45){isSigned=true;charCode=source.charCodeAt(++Index)}if(charCode>=48&&charCode<=57){if(charCode==48&&(charCode=source.charCodeAt(Index+1),charCode>=48&&charCode<=57)){abort()}isSigned=false;for(;Index<length&&(charCode=source.charCodeAt(Index),charCode>=48&&charCode<=57);Index++);if(source.charCodeAt(Index)==46){position=++Index;for(;position<length&&(charCode=source.charCodeAt(position),charCode>=48&&charCode<=57);position++);if(position==Index){abort()}Index=position}charCode=source.charCodeAt(Index);if(charCode==101||charCode==69){charCode=source.charCodeAt(++Index);if(charCode==43||charCode==45){Index++}for(position=Index;position<length&&(charCode=source.charCodeAt(position),charCode>=48&&charCode<=57);position++);if(position==Index){abort()}Index=position}return+source.slice(begin,Index)}if(isSigned){abort()}if(source.slice(Index,Index+4)==\"true\"){Index+=4;return true}else if(source.slice(Index,Index+5)==\"false\"){Index+=5;return false}else if(source.slice(Index,Index+4)==\"null\"){Index+=4;return null}abort()}}return\"$\"};var get=function(value){var results,hasMembers;if(value==\"$\"){abort()}if(typeof value==\"string\"){if((charIndexBuggy?value.charAt(0):value[0])==\"@\"){return value.slice(1)}if(value==\"[\"){results=[];for(;;hasMembers||(hasMembers=true)){value=lex();if(value==\"]\"){break}if(hasMembers){if(value==\",\"){value=lex();if(value==\"]\"){abort()}}else{abort()}}if(value==\",\"){abort()}results.push(get(value))}return results}else if(value==\"{\"){results={};for(;;hasMembers||(hasMembers=true)){value=lex();if(value==\"}\"){break}if(hasMembers){if(value==\",\"){value=lex();if(value==\"}\"){abort()}}else{abort()}}if(value==\",\"||typeof value!=\"string\"||(charIndexBuggy?value.charAt(0):value[0])!=\"@\"||lex()!=\":\"){abort()}results[value.slice(1)]=get(lex())\n}return results}abort()}return value};var update=function(source,property,callback){var element=walk(source,property,callback);if(element===undef){delete source[property]}else{source[property]=element}};var walk=function(source,property,callback){var value=source[property],length;if(typeof value==\"object\"&&value){if(getClass.call(value)==arrayClass){for(length=value.length;length--;){update(value,length,callback)}}else{forEach(value,function(property){update(value,property,callback)})}}return callback.call(source,property,value)};exports.parse=function(source,callback){var result,value;Index=0;Source=\"\"+source;result=get(lex());if(lex()!=\"$\"){abort()}Index=Source=null;return callback&&getClass.call(callback)==functionClass?walk((value={},value[\"\"]=result,value),\"\",callback):result}}}exports[\"runInContext\"]=runInContext;return exports}if(freeExports&&!isLoader){runInContext(root,freeExports)}else{var nativeJSON=root.JSON,previousJSON=root[\"JSON3\"],isRestored=false;var JSON3=runInContext(root,root[\"JSON3\"]={noConflict:function(){if(!isRestored){isRestored=true;root.JSON=nativeJSON;root[\"JSON3\"]=previousJSON;nativeJSON=previousJSON=null}return JSON3}});root.JSON={parse:JSON3.parse,stringify:JSON3.stringify}}if(isLoader){define(function(){return JSON3})}}).call(this)}).call(this,typeof self!==\"undefined\"?self:typeof window!==\"undefined\"?window:typeof global!==\"undefined\"?global:{})},{}],51:[function(_dereq_,module,exports){module.exports=toArray;function toArray(list,index){var array=[];index=index||0;for(var i=index||0;i<list.length;i++){array[i-index]=list[i]}return array}},{}]},{},[31])(31)});"

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var const_1 = __webpack_require__(33);
	var JsFunc_1 = __webpack_require__(17);
	var HupuAPI_1 = __webpack_require__(22);
	var BasePanelView_1 = __webpack_require__(34);
	var WebJsFunc_1 = __webpack_require__(23);
	var VueBase_1 = __webpack_require__(18);
	var PixiEx_1 = __webpack_require__(36);
	var Game3 = (function (_super) {
	    __extends(Game3, _super);
	    function Game3(parent, playerDocArr) {
	        var _this = this;
	        _super.call(this);
	        this.opReq = function (cmdId, param, callback) {
	            $.ajax({
	                url: "/panel/" + const_1.PanelId.onlinePanel + "/" + cmdId,
	                type: 'post',
	                data: JSON.stringify(param),
	                headers: { "Content-Type": "application/json" },
	                dataType: 'json',
	                success: callback
	            });
	        };
	        parent.addChild(this);
	        var bg = PixiEx_1.newBitmap({ x: 220, y: 0, url: "/img/panel/3/title.png" });
	        this.addChild(bg);
	        var gidx = {};
	        gidx['0'] = gidx['4'] = 68;
	        gidx['1'] = gidx['5'] = gidx['0'] + 275;
	        gidx['2'] = gidx['6'] = 883;
	        gidx['3'] = gidx['7'] = gidx['6'] + 275;
	        var flipIdx = {};
	        flipIdx['2'] = -1;
	        flipIdx['3'] = -1;
	        flipIdx['6'] = -1;
	        flipIdx['7'] = -1;
	        var y;
	        var avtArr = [];
	        for (var i = 0; i < 8; i++) {
	            for (var j = 0; j < 4; j++) {
	                i < 4 ? y = 2 : y = 65;
	                var avtBg = PixiEx_1.newBitmap({ x: gidx[i] + j * 65, y: y, url: '/img/panel/koa/pickup/avatar.png' });
	                avtBg.width = 60;
	                avtBg.height = 60;
	                var msk = this.makeMsk(avtBg.x, avtBg.y);
	                bg.addChild(msk);
	                var avt = PixiEx_1.newBitmap({ x: avtBg.x, y: avtBg.y, url: HupuAPI_1._avatar(playerDocArr[i * 4 + j].avatar) });
	                avt['id'] = playerDocArr[i * 4 + j].id;
	                avt['mx'] = avtBg.x;
	                avtArr.push(avt);
	                avt.width = 56;
	                avt.height = 56;
	                if (flipIdx[i]) {
	                    avt.x += 56;
	                    avt.scale.x = -1;
	                }
	                bg.addChild(avt);
	                avt.mask = msk;
	                bg.addChild(avtBg);
	            }
	        }
	        this.avtArr = avtArr;
	        document.onclick = function (e) {
	            console.log('click ', e);
	            var mx = e.clientX - bg.x;
	            var my = e.clientY - bg.y;
	            for (var _i = 0, avtArr_1 = avtArr; _i < avtArr_1.length; _i++) {
	                var a = avtArr_1[_i];
	                if (a.mx < mx && a.mx + a.width > mx && a.y < my && a.y + a.height > my) {
	                    _this.opReq('cs_3pointTogglePlayer', { _: null, id: a.id }, function () {
	                    });
	                }
	            }
	        };
	    }
	    Game3.prototype.makeMsk = function (ax, ay) {
	        var r = 13, ax, ay;
	        var msk = new PIXI.Graphics();
	        msk.beginFill(0xff0000, 0.5);
	        msk.moveTo(17, 4);
	        msk.lineTo(72, 4);
	        msk.lineTo(72 + r, 4 + r);
	        msk.lineTo(72 + r, 72);
	        msk.lineTo(72, 72 + r);
	        msk.lineTo(17, 72 + r);
	        msk.lineTo(17 - r, 72);
	        msk.lineTo(17 - r, 4 + r);
	        msk.x = ax;
	        msk.y = ay;
	        msk.width = 56;
	        msk.height = 56;
	        return msk;
	    };
	    Game3.prototype.togglePlayer = function (playerId) {
	        for (var _i = 0, _a = this.avtArr; _i < _a.length; _i++) {
	            var p = _a[_i];
	            if (p.id == playerId) {
	                p.visible = !p.visible;
	            }
	        }
	    };
	    return Game3;
	}(PIXI.Container));
	var Stage3point = (function (_super) {
	    __extends(Stage3point, _super);
	    function Stage3point() {
	        _super.call(this);
	        this.template = __webpack_require__(37);
	        this.isOp = VueBase_1.VueBase.PROP;
	        VueBase_1.VueBase.initProps(this);
	    }
	    Stage3point.prototype.created = function () {
	        var _this = this;
	        this.isOp = this.$route.params['op'] == 'op';
	        if (this.isOp) {
	            WebJsFunc_1.dynamicLoading.css('/css/bulma.min.css');
	        }
	        HupuAPI_1.getPlayerDoc(function (playerDocArr) {
	            var playerMap = {};
	            playerDocArr = playerDocArr.sort(JsFunc_1.ascendingProp('id'));
	            _this.game3 = new Game3(BasePanelView_1.BasePanelView.initPixi(), playerDocArr);
	        });
	        var localWs = io.connect("/" + const_1.PanelId.rkbPanel);
	        localWs.on('connect', function (msg) {
	            console.log('connect', window.location.host);
	        })
	            .on("sc_3pointTogglePlayer", function (data) {
	            console.log("sc_3pointTogglePlayer", data);
	            _this.game3.togglePlayer(data.id);
	        });
	    };
	    Stage3point.prototype.setPlayerState = function (playerId, state) {
	    };
	    return Stage3point;
	}(VueBase_1.VueBase));
	exports.stage3point = new Stage3point();


/***/ },
/* 33 */
/***/ function(module, exports) {

	"use strict";
	exports.PanelId = {
	    stagePanel: 'stage',
	    stage1v1Panel: 'stage1v1',
	    rkbPanel: 'rkb',
	    scorePanel: 'score',
	    bracketPanel: 'bracket',
	    rankPanel: 'rankPanel',
	    onlinePanel: 'online',
	    winPanel: 'win',
	    actPanel: 'act',
	    screenPanel: 'screen',
	    playerPanel: 'player'
	};
	exports.FontName = {
	    MicrosoftYahei: "Microsoft Yahei"
	};
	exports.ServerConst = {
	    SEND_ASYNC: true,
	    DEF_AVATAR: '/img/panel/stage1v1/blue.png'
	};
	exports.ViewConst = {
	    STAGE_WIDTH: 1920,
	    STAGE_HEIGHT: 1080
	};
	exports.TimerState = {
	    START_STR: 'start',
	    PAUSE_STR: 'pause',
	    PAUSE: 0,
	    RUNNING: 1
	};
	exports.ViewEvent = {
	    PLAYER_EDIT: 'edit player',
	    PLAYER_ADD: 'add player',
	    STRAIGHT3_LEFT: 'STRAIGHT3_LEFT',
	    STRAIGHT3_RIGHT: 'STRAIGHT3_RIGHT'
	};
	function ScParam(param) {
	    return param;
	}
	exports.ScParam = ScParam;


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var EventDispatcher_1 = __webpack_require__(35);
	var const_1 = __webpack_require__(33);
	var BasePanelView = (function (_super) {
	    __extends(BasePanelView, _super);
	    function BasePanelView(pid) {
	        _super.call(this);
	        this.opReq = function (cmdId, param, callback) {
	            $.post("/panel/" + pid + "/" + cmdId, param, callback);
	        };
	    }
	    BasePanelView.initPixi = function () {
	        var renderer = new PIXI.autoDetectRenderer(const_1.ViewConst.STAGE_WIDTH, const_1.ViewConst.STAGE_HEIGHT, { antialias: false, transparent: true, resolution: 1 }, false);
	        document.body.insertBefore(renderer.view, document.getElementById("panel"));
	        renderer.stage = new PIXI.Container();
	        renderer.backgroundColor = 0x00000000;
	        renderer.renderStage = function (time) {
	            requestAnimationFrame(renderer.renderStage);
	            TWEEN.update(time);
	            renderer.render(renderer.stage);
	        };
	        renderer.renderStage();
	        return renderer.stage;
	    };
	    BasePanelView.prototype.show = function () {
	    };
	    BasePanelView.prototype.hide = function () {
	    };
	    return BasePanelView;
	}(EventDispatcher_1.EventDispatcher));
	exports.BasePanelView = BasePanelView;


/***/ },
/* 35 */
/***/ function(module, exports) {

	"use strict";
	var EventDispatcher = (function () {
	    function EventDispatcher() {
	        this.isSort = false;
	        this._func = {};
	        this._funcId = 0;
	    }
	    EventDispatcher.prototype.on = function (type, func) {
	        if (!this._func[type])
	            this._func[type] = [];
	        this._funcId++;
	        this._func[type].push({ func: func, id: this._funcId });
	        return this._funcId;
	    };
	    EventDispatcher.prototype.emit = function (type, param) {
	        if (this._func[type])
	            for (var i = 0; i < this._func[type].length; ++i) {
	                var f = this._func[type][i];
	                if (f)
	                    if (f.func(param))
	                        break;
	            }
	    };
	    EventDispatcher.prototype.del = function (type, funcId) {
	        if (funcId === void 0) { funcId = -1; }
	        if (this._func[type])
	            if (funcId < 0) {
	                this._func[type] = [];
	            }
	            else {
	                for (var i = 0; i < this._func[type].length; ++i) {
	                    var f = this._func[type][i];
	                    if (f) {
	                        if (f.id == funcId) {
	                            delete this._func[type][i];
	                            break;
	                        }
	                    }
	                }
	            }
	    };
	    EventDispatcher.prototype.removeAll = function () {
	        this._func = {};
	    };
	    return EventDispatcher;
	}());
	exports.EventDispatcher = EventDispatcher;


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var JsFunc_1 = __webpack_require__(17);
	var WebJsFunc_1 = __webpack_require__(23);
	function imgToTex(img) {
	    return new PIXI.Texture(new PIXI.BaseTexture(img));
	}
	exports.imgToTex = imgToTex;
	function makeSprite(parameters) {
	    var url = parameters.url;
	    var isCrossOrigin = parameters.isCrossOrigin;
	    var callback = parameters.callback;
	    var s = new PIXI.Sprite();
	    loadRes(url, function (img) {
	        s.texture = imgToTex(img);
	        if (callback)
	            callback(s);
	    }, isCrossOrigin);
	    return s;
	}
	function loadRes(url, callback, isCrossOrigin) {
	    if (isCrossOrigin) {
	        var req_1 = new XMLHttpRequest();
	        req_1.open('GET', WebJsFunc_1.proxy(url), true);
	        req_1.onload = function (res) {
	            JsFunc_1.loadImg(req_1.responseText, callback);
	        };
	        req_1.send();
	    }
	    else {
	        JsFunc_1.loadImg(url, callback);
	    }
	}
	exports.loadRes = loadRes;
	var _nullTex = imgToTex(null);
	function makeTilingSprite(options) {
	    var width = options.width;
	    var height = options.height;
	    var url = options.url;
	    var callback = options.callback;
	    var isCrossOrigin = options.isCrossOrigin;
	    loadRes(url, function (img) {
	        t.texture = imgToTex(img);
	        if (callback)
	            callback(t);
	    }, isCrossOrigin);
	    var t = new PIXI.extras.TilingSprite(_nullTex, width, height);
	    return t;
	}
	function newBitmap(options) {
	    var isTiling = options.isTiling;
	    var s;
	    if (isTiling) {
	        s = makeTilingSprite(options);
	    }
	    else {
	        s = makeSprite(options);
	    }
	    s.x = options.x ? options.x : 0;
	    s.y = options.y ? options.y : 0;
	    return s;
	}
	exports.newBitmap = newBitmap;
	var BitmapText = (function (_super) {
	    __extends(BitmapText, _super);
	    function BitmapText(options) {
	        var _this = this;
	        _super.call(this);
	        this.mapSprite = {};
	        var text = options.text;
	        this.animations = options.animations;
	        this.frames = options.frames;
	        this.digis = {};
	        this._digiCtn = new PIXI.Container;
	        this.addChild(this._digiCtn);
	        this.text = text;
	        if (options.texture) {
	            this._tex = options.texture;
	            this.updateTex();
	        }
	        else if (options.img) {
	            loadRes(options.img, function (img) {
	                _this._tex = imgToTex(img);
	                _this.updateTex();
	            });
	        }
	    }
	    BitmapText.prototype.updateTex = function () {
	        for (var k in this.digis) {
	            var digi = this.digis[k];
	            digi['sp'].texture = this._tex;
	        }
	    };
	    Object.defineProperty(BitmapText.prototype, "text", {
	        set: function (v) {
	            var digiIdx = 0;
	            var num = v.charAt(digiIdx);
	            while (num != '') {
	                var idx = this.animations[num];
	                if (idx > -1) {
	                    var frame = this.frames[idx];
	                    var ofsX = frame[0];
	                    var ofsY = frame[1];
	                    if (!this._frameWidth)
	                        this._frameWidth = frame[2];
	                    if (!this._frameHeight)
	                        this._frameHeight = frame[3];
	                    if (!this.digis[digiIdx]) {
	                        this.digis[digiIdx] = this._makeFrame(this._frameWidth, this._frameHeight);
	                    }
	                    var digiFrame = this.digis[digiIdx];
	                    digiFrame.x = digiIdx * this._frameWidth;
	                    digiFrame['idx'] = digiIdx;
	                    digiFrame['sp'].x = -ofsX;
	                    digiFrame['sp'].y = -ofsY;
	                    digiIdx += 1;
	                    num = v.charAt(digiIdx);
	                }
	            }
	            this._digiWidth = (digiIdx - 1) * this._frameWidth;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BitmapText.prototype, "align", {
	        set: function (align) {
	            console.log('align right', this._digiWidth);
	            if (align == 'left') {
	                this._digiCtn.x = 0;
	            }
	            else if (align == 'center') {
	                this._digiCtn.x = -this._digiWidth * .5;
	            }
	            else if (align == 'right') {
	                this._digiCtn.x = -this._digiWidth;
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    BitmapText.prototype._makeFrame = function (width, height) {
	        var ctn = new PIXI.Container;
	        this._digiCtn.addChild(ctn);
	        var msk = new PIXI.Graphics;
	        msk.beginFill(0xff0000)
	            .drawRect(0, 0, width, height)
	            .endFill();
	        ctn.addChild(msk);
	        var s = new PIXI.Sprite(this._tex);
	        ctn.addChild(s);
	        s.mask = msk;
	        ctn['sp'] = s;
	        return ctn;
	    };
	    return BitmapText;
	}(PIXI.Container));
	exports.BitmapText = BitmapText;
	exports.newWhiteMask = function (url) {
	    var sp = newBitmap({
	        url: url, callback: function () {
	            var filter = new PIXI.filters.ColorMatrixFilter();
	            filter.brightness(100);
	            sp.filters = [filter];
	            sp.cacheAsBitmap = true;
	        }
	    });
	    return sp;
	};
	exports.makeColorRatio = function (colorArr, ratioArr) {
	    var a = [];
	    for (var i = 0; i < colorArr.length; i++) {
	        var col = colorArr[i];
	        for (var j = 0; j < ratioArr[i]; j++) {
	            a.push(col);
	        }
	    }
	    return a;
	};
	var TextEx = (function (_super) {
	    __extends(TextEx, _super);
	    function TextEx() {
	        _super.apply(this, arguments);
	    }
	    Object.defineProperty(TextEx.prototype, "text", {
	        set: function (t) {
	            this._text = t;
	            if (this.align == 'center') {
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return TextEx;
	}(PIXI.Text));
	exports.setPivot = function (obj, x, y) {
	    obj.pivot = new PIXI.Point(x, y);
	    obj.x += x;
	    obj.y += y;
	};
	exports.PIXI_MOUSE_EVENT = {
	    mousedown: 'mousedown',
	    click: 'click',
	};


/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = "<div v-if=\"isOp\">\r\n    stage 3 point\r\n</div>";

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Ready_1 = __webpack_require__(39);
	var JsFunc_1 = __webpack_require__(17);
	var HP_1 = __webpack_require__(41);
	var HupuAPI_1 = __webpack_require__(22);
	var PickupAnimation_1 = __webpack_require__(48);
	var Command_1 = __webpack_require__(51);
	var const_1 = __webpack_require__(33);
	var WebJsFunc_1 = __webpack_require__(23);
	var Pickup_1 = __webpack_require__(50);
	var BasePanelView_1 = __webpack_require__(34);
	var VueBase_1 = __webpack_require__(18);
	var pickupScene;
	var canvasStage;
	var KOA = (function (_super) {
	    __extends(KOA, _super);
	    function KOA() {
	        _super.call(this);
	        this.template = __webpack_require__(52);
	        this.isOp = VueBase_1.VueBase.PROP;
	        this.playerDocArr = VueBase_1.VueBase.PROP;
	        this.isPickup1p = VueBase_1.VueBase.PROP;
	        this.teamId1p = VueBase_1.VueBase.PROP;
	        this.teamId2p = VueBase_1.VueBase.PROP;
	        this.orderArr1p = VueBase_1.VueBase.PROP;
	        this.orderPlayerDocArr1p = VueBase_1.VueBase.PROP;
	        this.orderPlayerDocArr2p = VueBase_1.VueBase.PROP;
	        this.orderArr2p = VueBase_1.VueBase.PROP;
	        this.gamePlayer1p = VueBase_1.VueBase.PROP;
	        this.gamePlayer2p = VueBase_1.VueBase.PROP;
	        this.bracketInfo = VueBase_1.VueBase.PROP;
	        this.bracketIdx = VueBase_1.VueBase.PROP;
	        this.teamNameArr = VueBase_1.VueBase.PROP;
	        this.opReq = function (cmdId, param, callback) {
	            $.ajax({
	                url: "/panel/" + const_1.PanelId.onlinePanel + "/" + cmdId,
	                type: 'post',
	                data: JSON.stringify(param),
	                headers: { "Content-Type": "application/json" },
	                dataType: 'json',
	                success: callback
	            });
	        };
	        this.methods = {
	            onShowPickup: function () {
	                var getNumberArr = function (str) {
	                    var a = str.split(' ');
	                    for (var i = 0; i < a.length; i++) {
	                        a[i] = Number(a[i]);
	                    }
	                    return a;
	                };
	                this.opReq("" + Command_1.CommandId.cs_showPickup, {
	                    _: null,
	                    teamId1p: this.teamId1p,
	                    orderArr1p: this.orderArr1p,
	                    orderArr2p: this.orderArr2p,
	                    teamId2p: this.teamId2p
	                });
	            },
	            onTabTeam: function (e, teamIdx) {
	                console.log('onTabTeam:', e, teamIdx);
	                if (this.$actTab) {
	                    this.$actTab.removeClass('is-active');
	                }
	                this.$actTab = $(e.target.parentElement);
	                this.$actTab.addClass('is-active');
	                var a = [];
	                for (var i = 1; i < 5; i++) {
	                    a.push(this.playerIdMap[(teamIdx - 1) * 4 + i]);
	                }
	                console.log('playerDocArr', a);
	                this.playerDocArr = a;
	                if (this.isPickup1p)
	                    this.teamId1p = teamIdx;
	                else
	                    this.teamId2p = teamIdx;
	            },
	            onPickup: function (is1p) {
	                this.isPickup1p = is1p;
	                if (is1p) {
	                    this.orderPlayerDocArr1p = [];
	                    this.orderArr1p = [];
	                }
	                else {
	                    this.orderPlayerDocArr2p = [];
	                    this.orderArr2p = [];
	                }
	            },
	            onPickupPlayer: function (player) {
	                if (this.isPickup1p) {
	                    this.orderPlayerDocArr1p.push(player);
	                    this.orderArr1p.push(player.id);
	                }
	                else {
	                    this.orderPlayerDocArr2p.push(player);
	                    this.orderArr2p.push(player.id);
	                }
	            },
	            onStartPlayer: function (is1p, playerDoc) {
	                is1p > 0 ? this.gamePlayer2p = playerDoc : this.gamePlayer1p = playerDoc;
	                var a;
	                is1p > 0 ? a = this.orderPlayerDocArr2p : a = this.orderPlayerDocArr1p;
	                var isAfterPlayer = false;
	                for (var i = 0; i < a.length; i++) {
	                    var pdc = a[i];
	                    if (pdc.id != playerDoc.id) {
	                        pdc.isPlay = false;
	                        isAfterPlayer ? pdc.isDead = false
	                            : pdc.isDead = true;
	                    }
	                    else {
	                        pdc.isDead = false;
	                        pdc.isPlay = true;
	                        isAfterPlayer = true;
	                    }
	                }
	            },
	            onStartGame: function (noFx) {
	                if (noFx === void 0) { noFx = false; }
	                if (this.gamePlayer1p.id && this.gamePlayer2p.id)
	                    this.opReq("" + Command_1.CommandId.cs_startGame, {
	                        noFx: noFx,
	                        playerDocArr: [this.gamePlayer1p, this.gamePlayer2p],
	                        partnerArr: [this.orderPlayerDocArr1p, this.orderPlayerDocArr2p],
	                        stArr: [this.orderPlayerDocArr1p[3], this.orderPlayerDocArr2p[3]],
	                    });
	                else {
	                    alert('没选人！');
	                }
	            },
	            onToggleTimer: function () {
	                this.opReq("" + Command_1.CommandId.cs_toggleTimer, {
	                    _: null
	                });
	            },
	            onResetTimer: function () {
	                this.opReq("" + Command_1.CommandId.cs_resetTimer, {
	                    _: null
	                });
	            },
	            onSetBlood: function (is1p, dt) {
	                this.opReq("" + Command_1.CommandId.cs_setBlood, {
	                    is1p: is1p,
	                    dt: dt
	                });
	            },
	            onSetFoul: function (is1p, dt) {
	                this.opReq("" + Command_1.CommandId.cs_setFoul, {
	                    is1p: is1p,
	                    dt: dt
	                });
	            },
	            onHideSt: function () {
	                this.opReq("" + Command_1.CommandId.cs_hideSt, {
	                    _: null,
	                });
	            },
	            onSetSt: function (is1p, dt) {
	                this.opReq("" + Command_1.CommandId.cs_setSt, {
	                    is1p: is1p,
	                    dt: dt
	                });
	            },
	            onCommitGame: function () {
	                var bracketIdx = Number(this.bracketIdx);
	                if (bracketIdx) {
	                    this.bracketIdx = null;
	                    this.opReq("" + Command_1.CommandId.cs_commitGame, { duration: this.hp.timeText.timeInSec, bracketIdx: bracketIdx }, function () {
	                    });
	                }
	            },
	            onReloadDB: function () {
	                this.opReq('cs_reloadDB', {});
	            },
	            onCommitTeam: function () {
	                var a = [];
	                if (this.bracketInfo)
	                    a = this.bracketInfo.split('-').concat([this.bracketIdx]);
	                if (a.length) {
	                    if (a.length == 3) {
	                        this.opReq("" + Command_1.CommandId.cs_commitTeam, {
	                            bracketIdx: Number(a[0]),
	                            scoreArr: [Number(a[1]), Number(a[2])]
	                        });
	                    }
	                    else
	                        alert('数据录入错误！');
	                }
	                else {
	                    if (this.bracketIdx)
	                        this.opReq("" + Command_1.CommandId.cs_commitTeam, {
	                            bracketIdx: Number(this.bracketIdx)
	                        });
	                    else
	                        alert('数据录入错误！');
	                }
	            }
	        };
	        VueBase_1.VueBase.initProps(this);
	    }
	    KOA.prototype.created = function () {
	        var _this = this;
	        this.teamNameArr = ['FTG#1', 'Fe#1',
	            'TSH#1', "GBA#1",
	            'GBA#2', 'FTG#2',
	            'TSH#2', 'Fe#2',
	        ];
	        this.initCanvas();
	        this.gamePlayer1p = { name: '1p' };
	        this.gamePlayer2p = { name: '2p' };
	        this.isOp = this.$route.params['op'] == 'op';
	        if (this.isOp) {
	            WebJsFunc_1.dynamicLoading.css('/css/bulma.min.css');
	        }
	        console.log('route:', this.$route['op']);
	        HupuAPI_1.getPlayerDoc(function (playerDocArr) {
	            var playerMap = {};
	            for (var _i = 0, playerDocArr_1 = playerDocArr; _i < playerDocArr_1.length; _i++) {
	                var player = playerDocArr_1[_i];
	                playerMap[player.id] = player;
	            }
	            _this.playerIdMap = playerMap;
	        });
	        HupuAPI_1.getGameInfo(function (res) {
	            console.log('gameInfo', res);
	            _this.startGame(res);
	        });
	        this.initIO();
	    };
	    KOA.prototype.initCanvas = function () {
	        canvasStage = BasePanelView_1.BasePanelView.initPixi();
	        this.hp = new HP_1.HP(canvasStage);
	    };
	    KOA.prototype.mounted = function () {
	        this.isPickup1p = true;
	    };
	    KOA.prototype.showPickup = function (data) {
	        pickupScene = new Pickup_1.PickupScene(canvasStage, this.playerIdMap);
	        new PickupAnimation_1.PickupAnimation(pickupScene).startPick(data.teamId1p, data.teamId2p, data.orderArr1p, data.orderArr2p);
	    };
	    KOA.prototype.startGame = function (data) {
	        if (data.start) {
	            if (!data.noFx)
	                new Ready_1.Ready(canvasStage, data.playerDocArr);
	            this.hp.setPlayer(data.playerDocArr, data.partnerArr, data.stArr);
	            this.hp.setBlood(true, data.playerDocArr[0].blood);
	            this.hp.setBlood(false, data.playerDocArr[1].blood);
	            this.hp.setFoul(true, data.playerDocArr[0].foul);
	            this.hp.setFoul(false, data.playerDocArr[1].foul);
	            this.hp.setSt(true, data.playerDocArr[0].st);
	            this.hp.setSt(false, data.playerDocArr[1].st);
	            if (data.beatBy01 && data.beatBy01[0] > -1) {
	                this.hp.setBeatBy(data.beatBy01[0] == 0, data.beatBy01[1]);
	            }
	            this.hp.resetTimer();
	            this.hp.toggleTimer(const_1.TimerState.PAUSE);
	        }
	    };
	    KOA.prototype.initIO = function () {
	        var _this = this;
	        var localWs = io.connect("/" + const_1.PanelId.rkbPanel);
	        localWs.on('connect', function (msg) {
	            console.log('connect', window.location.host);
	        })
	            .on("" + Command_1.CommandId.sc_showPickup, function (data) {
	            console.log("CommandId.sc_showPickup", data);
	            _this.showPickup(data);
	        })
	            .on("" + Command_1.CommandId.sc_startGame, function (data) {
	            console.log('sc_startGame', data);
	            _this.startGame(data);
	        })
	            .on("" + Command_1.CommandId.sc_toggleTimer, function (data) {
	            _this.hp.toggleTimer();
	        })
	            .on("" + Command_1.CommandId.sc_resetTimer, function (data) {
	            _this.hp.resetTimer();
	        })
	            .on("" + Command_1.CommandId.sc_setBlood, function (data) {
	            _this.hp.setBlood(data.is1p, data.blood);
	        })
	            .on("" + Command_1.CommandId.sc_setFoul, function (data) {
	            _this.hp.setFoul(data.is1p, data.foul);
	        })
	            .on("" + Command_1.CommandId.sc_setSt, function (data) {
	            _this.hp.setSt(data.is1p, data.st);
	        })
	            .on("" + Command_1.CommandId.sc_hideSt, function (data) {
	            _this.hp.hideSt();
	        })
	            .on("" + Command_1.CommandId.sc_commitGame, function (data) {
	            _this.hp.toggleTimer(const_1.TimerState.PAUSE);
	            if (data.sus)
	                _this.hp.showWinner(data.winner == 0);
	            console.log('cs_commitGame', data);
	        })
	            .on("" + Command_1.CommandId.sc_commitTeam, function (data) {
	            console.log('sc_commitTeam', data);
	            var winTeam;
	            var g = data.group;
	            var is1pWin = g.left.score > g.right.score;
	            is1pWin ? winTeam = g.left
	                : winTeam = g.right;
	            var winGameDocArr = [];
	            if (data.gameDocArr) {
	                data.gameDocArr = data.gameDocArr.sort(JsFunc_1.ascendingProp('end'));
	                for (var i = 0; i < data.gameDocArr.length; i++) {
	                    var gameDoc = data.gameDocArr[i];
	                    var loser = gameDoc.playerDocArr[Number(is1pWin)];
	                    if (loser.blood == 0) {
	                        var playerArr = [];
	                        playerArr.push(_this.playerIdMap[gameDoc.playerDocArr[0].id]);
	                        playerArr.push(_this.playerIdMap[gameDoc.playerDocArr[1].id]);
	                        winGameDocArr.push(playerArr);
	                    }
	                }
	            }
	            console.log('winGameDocArr', winGameDocArr);
	            winTeam.winPlayerDocArr = winGameDocArr;
	            winTeam.is1pWin = is1pWin;
	            winTeam.scoreArr = data.scoreArr;
	            winTeam.duration = data.duration;
	            _this.hp.showWinTeam(winTeam);
	        });
	    };
	    return KOA;
	}(VueBase_1.VueBase));
	exports.koa = new KOA();


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var PixiEx_1 = __webpack_require__(36);
	var TweenEx_1 = __webpack_require__(40);
	var const_1 = __webpack_require__(33);
	var Ready = (function (_super) {
	    __extends(Ready, _super);
	    function Ready(parent, playerDocArr) {
	        var _this = this;
	        _super.call(this);
	        parent.addChild(this);
	        var player1p = playerDocArr[0];
	        var player2p = playerDocArr[1];
	        this.addChild(new PIXI.Graphics().drawRect(0, 0, const_1.ViewConst.STAGE_WIDTH, const_1.ViewConst.STAGE_HEIGHT));
	        var rc = new PIXI.Container;
	        this.rotCtn = rc;
	        this.addChild(rc);
	        rc.pivot = new PIXI.Point(const_1.ViewConst.STAGE_WIDTH * .5, const_1.ViewConst.STAGE_HEIGHT * .5);
	        rc.x = const_1.ViewConst.STAGE_WIDTH * .5;
	        rc.y = const_1.ViewConst.STAGE_HEIGHT * .5;
	        rc.rotation = PIXI.DEG_TO_RAD * 123;
	        var blue = new PIXI.Graphics()
	            .beginFill(0x2a6ad7)
	            .drawRect(0, 0, 1920, 600);
	        blue.y = 500;
	        blue.x = -1200;
	        rc.addChild(blue);
	        var red = new PIXI.Graphics()
	            .beginFill(0xD72A37)
	            .drawRect(0, 0, 1920, 600);
	        red.y = -60;
	        red.x = 1500;
	        rc.addChild(red);
	        var gray = new PIXI.Graphics()
	            .beginFill(0xb4b4b4)
	            .drawRect(0, 0, 1920, 800);
	        gray.pivot = new PIXI.Point(0, 400);
	        gray.scale.x = gray.scale.y = 0;
	        gray.y = const_1.ViewConst.STAGE_HEIGHT * .5;
	        rc.addChild(gray);
	        var blue2 = PixiEx_1.newBitmap({ x: -1920, url: '/img/panel/koa/ad/blue.png' });
	        this.addChild(blue2);
	        var red2 = PixiEx_1.newBitmap({ x: 1920, url: '/img/panel/koa/ad/red.png' });
	        red2.y = const_1.ViewConst.STAGE_HEIGHT - 335;
	        this.addChild(red2);
	        var playerAvt1p = PixiEx_1.newBitmap({ x: -100, y: 35, url: player1p.portrait });
	        var ns = {
	            fontFamily: const_1.FontName.MicrosoftYahei,
	            fontSize: '50px',
	            fontStyle: 'normal',
	            fontWeight: 'bold',
	            fill: '#fff',
	            stroke: '#222',
	            strokeThickness: 3,
	        };
	        var name1p = new PIXI.Text(player1p.name, ns);
	        name1p.x = 430;
	        name1p.y = 200;
	        playerAvt1p.addChild(name1p);
	        this.addChild(playerAvt1p);
	        var playerAvt2p = PixiEx_1.newBitmap({ x: const_1.ViewConst.STAGE_WIDTH - 300, y: const_1.ViewConst.STAGE_HEIGHT - 300, url: player2p.portrait });
	        var name2p = new PIXI.Text(player2p.name, ns);
	        name2p.x = -30 - name2p.width;
	        name2p.y = 200;
	        playerAvt2p.addChild(name2p);
	        this.addChild(playerAvt2p);
	        var white = new PIXI.Graphics();
	        white
	            .beginFill(0xffffff)
	            .drawRect(0, 0, 1920, 410);
	        white.y = const_1.ViewConst.STAGE_HEIGHT * .5;
	        white.pivot = new PIXI.Point(0, 205);
	        white.scale.y = 0;
	        this.addChild(white);
	        var logo = PixiEx_1.newBitmap({ url: '/img/panel/koa/ad/logo1.png' });
	        logo.pivot = new PIXI.Point(307 / 2, 307 / 2);
	        logo.x = const_1.ViewConst.STAGE_WIDTH * .5;
	        logo.y = const_1.ViewConst.STAGE_HEIGHT * .5;
	        logo.scale.x = 1 / .24;
	        logo.scale.y = 1 / .24;
	        logo['1'] = PixiEx_1.newBitmap({ x: 35, y: 144, url: '/img/panel/koa/ad/1.png' });
	        logo['2'] = PixiEx_1.newBitmap({ x: 85, y: 98, url: '/img/panel/koa/ad/2.png' });
	        logo['3'] = PixiEx_1.newBitmap({ x: 140, y: 50, url: '/img/panel/koa/ad/3.png' });
	        logo['yiqi'] = PixiEx_1.newBitmap({ x: const_1.ViewConst.STAGE_WIDTH * .5 - 200, y: 400, url: '/img/panel/koa/ad/yiqi.png' });
	        logo['shoeMsk'] = PixiEx_1.newBitmap({ url: '/img/panel/koa/ad/msk.png' });
	        logo.addChild(logo['shoeMsk']);
	        logo['shoe'] = PixiEx_1.newBitmap({ x: 400, y: 0, url: '/img/panel/koa/ad/shoe.png' });
	        logo['shoe'].mask = logo['shoeMsk'];
	        logo['shoe'].alpha = 0;
	        logo.addChild(logo['shoe']);
	        PixiEx_1.setPivot(logo['1'], 35, 21);
	        PixiEx_1.setPivot(logo['2'], 48, 44);
	        PixiEx_1.setPivot(logo['3'], 62, 78);
	        logo.addChild(logo['1']);
	        logo.addChild(logo['2']);
	        logo.addChild(logo['3']);
	        this.addChild(logo);
	        var whiteEnd = new PIXI.Graphics().beginFill(0xffffff).drawRect(0, 0, const_1.ViewConst.STAGE_WIDTH, const_1.ViewConst.STAGE_HEIGHT);
	        whiteEnd.alpha = 0;
	        var _f = function (frame) {
	            return frame * 1000 / 60 * 2;
	        };
	        TweenEx_1.TweenEx.delayedCall(200, function () {
	            new TweenEx_1.TweenEx(playerAvt1p)
	                .to({ x: 200 }, _f(5))
	                .to({ x: 250 }, _f(28))
	                .to({ x: 1000 }, _f(5))
	                .start();
	            new TweenEx_1.TweenEx(playerAvt2p)
	                .to({ x: const_1.ViewConst.STAGE_WIDTH - 400 - 200 }, _f(5))
	                .to({ x: const_1.ViewConst.STAGE_WIDTH - 400 - 250 }, _f(28))
	                .to({ x: const_1.ViewConst.STAGE_WIDTH - 400 - 1000 }, _f(5))
	                .start();
	            TweenEx_1.TweenEx.to(gray.scale, _f(5), { x: 1, y: 1 });
	            TweenEx_1.TweenEx.to(white.scale, _f(10), { y: 1 });
	            TweenEx_1.TweenEx.to(logo.scale, _f(8), { x: 1, y: 1 }, function () {
	                logo['shoe'].alpha = 0;
	                new TweenEx_1.TweenEx(logo['shoe'])
	                    .delay(_f(15))
	                    .to({ alpha: 1, x: 0 }, _f(3))
	                    .delay(_f(5))
	                    .call(function () {
	                    new TweenEx_1.TweenEx(logo['shoe'])
	                        .to({ x: 300 }, _f(8))
	                        .call(function () {
	                        logo['shoe'].mask = null;
	                        logo['shoe'].x = logo.x;
	                        logo['shoe'].y = 400;
	                        logo['shoeMsk'].visible = false;
	                        _this.addChild(logo['shoe']);
	                    })
	                        .to({ x: 1200 }, _f(3))
	                        .to({ x: 1300 }, _f(20))
	                        .start();
	                })
	                    .start();
	            });
	            TweenEx_1.TweenEx.to(gray, _f(60), { height: 410 });
	            TweenEx_1.TweenEx.to(blue, _f(12), { x: 0 });
	            TweenEx_1.TweenEx.to(red, _f(12), { x: 0 }, function () {
	                TweenEx_1.TweenEx.delayedCall(_f(4), function () {
	                    TweenEx_1.TweenEx.to(gray.scale, _f(34 - 16), { y: .5 });
	                });
	            });
	            TweenEx_1.TweenEx.delayedCall(_f(28), function () {
	                TweenEx_1.TweenEx.to(rc, _f(6), { rotation: 180 * PIXI.DEG_TO_RAD }, function () {
	                });
	                TweenEx_1.TweenEx.delayedCall(_f(4), function () {
	                    TweenEx_1.TweenEx.to(blue2, _f(28), { x: 0 });
	                    TweenEx_1.TweenEx.to(red2, _f(28), { x: 0 });
	                });
	                var s150 = function (obj) {
	                    new TweenEx_1.TweenEx(obj.scale)
	                        .to({ x: 1.8, y: 1.8 }, _f(6))
	                        .to({ x: 1, y: 1 }, _f(3))
	                        .start();
	                };
	                new TweenEx_1.TweenEx(logo)
	                    .call(function () {
	                    s150(logo['1']);
	                    TweenEx_1.TweenEx.delayedCall(_f(2), function () {
	                        s150(logo['2']);
	                        TweenEx_1.TweenEx.delayedCall(_f(2), function () {
	                            s150(logo['3']);
	                        });
	                    });
	                })
	                    .call(function () {
	                    logo['yiqi'].alpha = 0;
	                    _this.addChild(logo['yiqi']);
	                    new TweenEx_1.TweenEx(logo['yiqi'])
	                        .delay(_f(12))
	                        .to({ alpha: 1, x: const_1.ViewConst.STAGE_WIDTH * .5 - 250 }, _f(2))
	                        .to({ alpha: 1, x: const_1.ViewConst.STAGE_WIDTH * .5 - 150 }, _f(20))
	                        .start();
	                })
	                    .delay(_f(5))
	                    .to({ x: const_1.ViewConst.STAGE_WIDTH * .5 - 150 }, _f(5))
	                    .to({ x: const_1.ViewConst.STAGE_WIDTH * .5 - 600 }, _f(3))
	                    .to({ x: const_1.ViewConst.STAGE_WIDTH * .5 - 550 }, _f(8))
	                    .start();
	            });
	            new TweenEx_1.TweenEx(whiteEnd)
	                .delay(_f(120))
	                .call(function () { return [
	                _this.addChild(whiteEnd)
	            ]; })
	                .to({ alpha: 1 }, _f(8))
	                .call(function () {
	                while (_this.children.length > 1) {
	                    _this.removeChildAt(0);
	                }
	            })
	                .to({ alpha: 0 }, _f(8))
	                .call(function () {
	                whiteEnd.parent.removeChild(whiteEnd);
	            })
	                .start();
	        });
	    }
	    return Ready;
	}(PIXI.Container));
	exports.Ready = Ready;


/***/ },
/* 40 */
/***/ function(module, exports) {

	"use strict";
	var TweenEx = (function () {
	    function TweenEx(target) {
	        this.target = target;
	        this.eventArr = [];
	    }
	    TweenEx.prototype.to = function (vars, duration) {
	        this.eventArr.push({ event: 'to', data: { vars: vars, duration: duration } });
	        return this;
	    };
	    TweenEx.prototype.delay = function (duration) {
	        this.eventArr.push({ event: 'delay', data: { duration: duration } });
	        return this;
	    };
	    TweenEx.prototype.update = function (callback) {
	        this.updateFunc = callback;
	        return this;
	    };
	    TweenEx.prototype.start = function () {
	        var _this = this;
	        var run = function () {
	            var e = _this.eventArr.shift();
	            if (e) {
	                if (e.event == 'to') {
	                    var fromVars_1 = {};
	                    for (var k in e.data.vars) {
	                        fromVars_1[k] = _this.target[k];
	                    }
	                    new TWEEN.Tween(fromVars_1)
	                        .to(e.data.vars, e.data.duration)
	                        .onUpdate(function () {
	                        for (var k in e.data.vars) {
	                            _this.target[k] = fromVars_1[k];
	                        }
	                        if (_this.updateFunc)
	                            _this.updateFunc(_this.target);
	                    })
	                        .onComplete(function () {
	                        run();
	                    })
	                        .start();
	                }
	                else if (e.event == 'delay') {
	                    new TWEEN.Tween({ _: 0 })
	                        .to({ _: 0 }, e.data.duration)
	                        .onComplete(function () {
	                        run();
	                    })
	                        .start();
	                }
	                else if (e.event == 'call') {
	                    e.data.callback(_this);
	                    run();
	                }
	            }
	            else {
	                _this.target = null;
	                _this.eventArr = null;
	                _this.vars = null;
	            }
	        };
	        run();
	        return this;
	    };
	    TweenEx.prototype.call = function (callback) {
	        if (callback)
	            this.eventArr.push({ event: 'call', data: { callback: callback } });
	        return this;
	    };
	    TweenEx.to = function (target, duration, vars, callback) {
	        return new TweenEx(target)
	            .to(vars, duration)
	            .call(callback)
	            .start();
	    };
	    TweenEx.delayedCall = function (duration, callback) {
	        new TweenEx({ _: 0 })
	            .delay(duration)
	            .call(callback)
	            .start();
	    };
	    return TweenEx;
	}());
	exports.TweenEx = TweenEx;


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var HupuAPI_1 = __webpack_require__(22);
	var TextTimer_1 = __webpack_require__(42);
	var Winner_1 = __webpack_require__(43);
	var Win_1 = __webpack_require__(44);
	var St_1 = __webpack_require__(47);
	var SpriteGroup_1 = __webpack_require__(45);
	var JsFunc_1 = __webpack_require__(17);
	var const_1 = __webpack_require__(33);
	var TweenEx_1 = __webpack_require__(40);
	var Fx_1 = __webpack_require__(46);
	var PixiEx_1 = __webpack_require__(36);
	var HP = (function (_super) {
	    __extends(HP, _super);
	    function HP(stage) {
	        var _this = this;
	        _super.call(this);
	        this.pointArr1p = [];
	        this.pointArr2p = [];
	        this.nameArr1p = [];
	        this.nameArr2p = [];
	        stage.addChild(this);
	        var titleCtn = new PIXI.Container;
	        this.addChild(titleCtn);
	        titleCtn.addChild(PixiEx_1.newBitmap({ url: '/img/panel/koa/hp/bg.png' }));
	        titleCtn.y = const_1.ViewConst.STAGE_HEIGHT - 136;
	        var _b = function () {
	            var bFx = new PIXI.Container();
	            bFx['blood'] = PixiEx_1.newBitmap({ url: '/img/panel/koa/hp/bloodMask.png' });
	            bFx['msk'] = PixiEx_1.newBitmap({ url: '/img/panel/koa/hp/bloodMask.png' });
	            bFx['blink'] = PixiEx_1.newBitmap({ url: '/img/panel/koa/hp/blood.png' });
	            bFx['blink'].visible = false;
	            bFx['blink'].x = -5;
	            bFx['blink'].y = -5;
	            bFx.addChild(bFx['blink']);
	            bFx.addChild(bFx['blood']);
	            bFx.addChild(bFx['msk']);
	            bFx['blood'].mask = bFx['msk'];
	            titleCtn.addChild(bFx);
	            return bFx;
	        };
	        this.bloodFx1p = _b();
	        this.bloodFx1p.x = 519;
	        this.bloodFx1p.y = 42;
	        this.bloodFx2p = _b();
	        this.bloodFx2p.scale.x = -1;
	        this.bloodFx2p.x = 1400;
	        this.bloodFx2p.y = this.bloodFx1p.y;
	        var initPoint = function (is1p) {
	            for (var i = 0; i < 5; i++) {
	                var p = PixiEx_1.newBitmap({ url: '/img/panel/koa/hp/point.png' });
	                if (is1p) {
	                    p.x = 787 - 67 * i;
	                    _this.pointArr1p.push(p);
	                }
	                else {
	                    p.scale.x = -1;
	                    p.x = 1132 + 67 * i;
	                    _this.pointArr2p.push(p);
	                }
	                p.y = 42;
	                titleCtn.addChild(p);
	            }
	        };
	        initPoint(true);
	        initPoint(false);
	        var fpg = { dir: SpriteGroup_1.Direction.w, invert: 30, img: '/img/panel/koa/hp/foul.png', count: 5, flip: 1 };
	        this.foulPG1p = new SpriteGroup_1.SpriteGroup(fpg);
	        this.foulPG1p.x = 708;
	        this.foulPG1p.y = 89;
	        titleCtn.addChild(this.foulPG1p);
	        fpg.flip = -1;
	        fpg.dir = SpriteGroup_1.Direction.e;
	        this.foulPG2p = new SpriteGroup_1.SpriteGroup(fpg);
	        this.foulPG2p.x = 1091;
	        this.foulPG2p.y = this.foulPG1p.y;
	        titleCtn.addChild(this.foulPG2p);
	        var fg = PixiEx_1.newBitmap({ x: 692, y: 75, url: '/img/panel/koa/hp/foulGlow.png' });
	        this.foulGlow1p = fg;
	        fg.visible = false;
	        titleCtn.addChild(fg);
	        fg = PixiEx_1.newBitmap({ x: 1045, y: fg.y, url: '/img/panel/koa/hp/foulGlow.png' });
	        this.foulGlow2p = fg;
	        fg.visible = false;
	        titleCtn.addChild(fg);
	        var initAvatar = function (is1p) {
	            var url = HupuAPI_1._avatar('1p.png');
	            var avt = PixiEx_1.newBitmap({ url: url });
	            var msk1 = new PIXI.Graphics();
	            msk1.beginFill(0xff0000);
	            msk1.moveTo(0, 0);
	            msk1.lineTo(0, 117);
	            msk1.lineTo(100, 117);
	            msk1.lineTo(112, 92);
	            msk1.lineTo(120, 92);
	            msk1.lineTo(120, 0);
	            if (is1p) {
	                avt.x = 380;
	                msk1.x = avt.x;
	                _this.avatar1p = avt;
	            }
	            else {
	                avt.x = 1420 + 120;
	                msk1.scale.x = -1;
	                msk1.x = avt.x;
	                _this.avatar2p = avt;
	                avt.scale.x = -1;
	            }
	            titleCtn.addChild(avt);
	            titleCtn.addChild(msk1);
	            avt.mask = msk1;
	        };
	        initAvatar(true);
	        initAvatar(false);
	        titleCtn.addChild(PixiEx_1.newBitmap({ url: '/img/panel/koa/hp/deco.png' }));
	        var ns = {
	            fontFamily: const_1.FontName.MicrosoftYahei,
	            fontSize: '25px',
	            fontStyle: 'normal',
	            fontWeight: 'bold',
	            stroke: '#000',
	            strokeThickness: 3,
	            fill: ['#dc6b17', '#debc1d', '#debc1d', '#dc6b17'],
	            fillGradientType: PIXI['TEXT_GRADIENT'].LINEAR_VERTICAL,
	        };
	        ns.fill = ['#c0dbff', '#c0dbff', '#3b52b3'];
	        var n1 = new PIXI.Text("player1", ns);
	        this.name1p = n1;
	        n1.x = 495;
	        n1.y = 93;
	        titleCtn.addChild(n1);
	        ns.fill = ['#fff0f0', '#fff0f0', '#b33b3b'];
	        var n2 = new PIXI.Text("player1", ns);
	        this.name2p = n2;
	        n2['x0'] = 1420;
	        n2.x = n2['x0'] - n2.width;
	        n2.y = n1.y;
	        titleCtn.addChild(n2);
	        var beatStyle = {
	            fontFamily: const_1.FontName.MicrosoftYahei,
	            fontSize: '23px',
	            fontStyle: 'normal',
	            fontWeight: 'bold',
	            fill: ['#dc6b17', '#debc1d', '#debc1d', '#dc6b17'],
	            fillGradientType: PIXI['TEXT_GRADIENT'].LINEAR_VERTICAL,
	        };
	        var bb = new PIXI.Text('', beatStyle);
	        bb.x = 540;
	        bb.y = 2;
	        titleCtn.addChild(bb);
	        this.beatByNum1p = bb;
	        var bb2 = new PIXI.Text('', beatStyle);
	        bb2.x = 1240;
	        bb2.y = bb.y;
	        titleCtn.addChild(bb2);
	        this.beatByNum2p = bb2;
	        var ns2 = {
	            fontFamily: const_1.FontName.MicrosoftYahei,
	            fontSize: '18px',
	            fontStyle: 'normal',
	            stroke: '#000',
	            strokeThickness: 2,
	            fill: null,
	            fillGradientType: PIXI['TEXT_GRADIENT'].LINEAR_VERTICAL,
	        };
	        var _ns1 = function () {
	            return '#3b52b3';
	        };
	        var _ns2 = function () {
	            return '#b33b3b';
	        };
	        for (var i = 0; i < 2; i++) {
	            ns2.fill = _ns1();
	            var n1p = new PIXI.Text('player' + (i + 2), ns2);
	            n1p['fill'] = _ns1();
	            n1p['x0'] = 360;
	            n1p.x = n1p['x0'] - n1p.width;
	            n1p.y = 75 + i * 26;
	            titleCtn.addChild(n1p);
	            this.nameArr1p.push(n1p);
	            ns2.fill = _ns2();
	            var n2p = new PIXI.Text('player' + (i + 2), ns2);
	            n2p['fill'] = _ns2();
	            n2p.x = 1555;
	            n2p.y = n1p.y;
	            titleCtn.addChild(n2p);
	            this.nameArr2p.push(n2p);
	        }
	        var ts = {
	            fontFamily: const_1.FontName.MicrosoftYahei,
	            fontSize: '50px',
	            fontStyle: 'normal',
	            fontWeight: 'bold',
	            fill: '#fff',
	            stroke: '#222',
	            strokeThickness: 3,
	        };
	        var t = new TextTimer_1.TextTimer("00:00", ts);
	        this.timeText = t;
	        t.x = 889;
	        t.y = 35;
	        titleCtn.addChild(t);
	        this.st1p = new St_1.St(this, true);
	        this.st1p.y = 500;
	        this.st2p = new St_1.St(this, false);
	        this.st2p.x = const_1.ViewConst.STAGE_WIDTH - 282;
	        this.st2p.y = this.st1p.y;
	        this.setFoul(true, 0);
	        this.setFoul(false, 0);
	        this.winner = new Winner_1.Winner(this);
	        this.winner.y = 300;
	        this.winTeam = new Win_1.WinTeam(this);
	        this.test();
	    }
	    HP.prototype.test = function () {
	        TweenEx_1.TweenEx.delayedCall(200, function () {
	        });
	    };
	    HP.prototype.setPlayer = function (playerDocArr, partnerArr, stArr) {
	        var _this = this;
	        PixiEx_1.loadRes(HupuAPI_1._avatar(playerDocArr[0].avatar), function (img) {
	            _this.avatar1p.texture = PixiEx_1.imgToTex(img);
	        });
	        PixiEx_1.loadRes(HupuAPI_1._avatar(playerDocArr[1].avatar), function (img) {
	            _this.avatar2p.texture = PixiEx_1.imgToTex(img);
	        });
	        this.st1p.setName(stArr[0].name);
	        this.st1p.setAvatar(HupuAPI_1._avatar(stArr[0].avatar));
	        this.st2p.setName(stArr[1].name);
	        this.st2p.setAvatar(HupuAPI_1._avatar(stArr[1].avatar));
	        this.name1p.text = JsFunc_1.cnWrap(playerDocArr[0].name, 30, 12);
	        this.name2p.text = JsFunc_1.cnWrap(playerDocArr[1].name, 30, 12);
	        this.name2p.x = this.name2p['x0'] - this.name2p.width;
	        var setPartner = function (idx, nameArr) {
	            var isAfter = false;
	            var j = 0;
	            var head = [];
	            var tail = [];
	            for (var i = 0; i < partnerArr[idx].length - 1; i++) {
	                var pn = partnerArr[idx][i];
	                if (pn.id != playerDocArr[idx].id) {
	                    isAfter ? head.push(pn) : tail.push(pn);
	                }
	                else {
	                    isAfter = true;
	                }
	            }
	            var f = new PIXI.filters.ColorMatrixFilter();
	            f.greyscale(1);
	            var reOrder = head.concat(tail);
	            for (var j = 0; j < reOrder.length; j++) {
	                var pn = reOrder[j];
	                var nt = nameArr[j];
	                nt.text = pn.name;
	                idx == 0 ? nt.x = nt['x0'] - nt.width : nt;
	                if (pn.isDead) {
	                    nt.style.fill = '#ddd';
	                }
	                else {
	                    nt.style.fill = nt['fill'];
	                }
	            }
	        };
	        setPartner(0, this.nameArr1p);
	        setPartner(1, this.nameArr2p);
	    };
	    HP.prototype._pFx = function (bloodArr, num) {
	        for (var i = 0; i < bloodArr.length; i++) {
	            var b = bloodArr[i];
	            if (i < num) {
	                b.visible = true;
	                Fx_1.blink3(b);
	            }
	            else
	                b.visible = false;
	        }
	    };
	    HP.prototype.setBlood = function (is1p, num) {
	        is1p ? this._pFx(this.pointArr1p, num) : this._pFx(this.pointArr2p, num);
	        var bFx;
	        is1p ? bFx = this.bloodFx1p : bFx = this.bloodFx2p;
	        TweenEx_1.TweenEx.to(bFx['msk'], 140 * (5 - num), { x: (5 - num) * 67 });
	        if (num == 1) {
	            bFx['blink'].visible = true;
	            Fx_1.blink2({ target: bFx['blink'], time: 70 });
	        }
	        else if (num == 0) {
	            bFx['blink'].visible = false;
	            TweenEx_1.TweenEx.delayedCall(100, function () {
	                bFx['blink'].visible = true;
	            });
	        }
	        else
	            bFx['blink'].visible = false;
	    };
	    HP.prototype.setSt = function (is1p, st) {
	        var st12;
	        is1p ? st12 = this.st1p
	            : st12 = this.st2p;
	        st12.setNum(st);
	        new TweenEx_1.TweenEx(this.st1p)
	            .to({ alpha: 1 }, 100)
	            .start();
	        new TweenEx_1.TweenEx(this.st2p)
	            .to({ alpha: 1 }, 100)
	            .start();
	    };
	    HP.prototype.hideSt = function () {
	        this.st1p.alpha = 0;
	        this.st2p.alpha = 0;
	    };
	    HP.prototype.setFoul = function (is1p, foul) {
	        is1p ? this.foulPG1p.setNum(foul)
	            : this.foulPG2p.setNum(foul);
	        var fg;
	        is1p ? fg = this.foulGlow1p
	            : fg = this.foulGlow2p;
	        if (foul > 4) {
	            fg.visible = true;
	            Fx_1.blink2({ target: fg, loop: Infinity });
	        }
	        else
	            fg.visible = false;
	    };
	    HP.prototype.toggleTimer = function (state) {
	        this.timeText.toggleTimer(state);
	    };
	    HP.prototype.resetTimer = function () {
	        this.timeText.resetTimer();
	    };
	    HP.prototype.setBeatBy = function (is1p, num) {
	        var bt;
	        is1p ? bt = this.beatByNum1p
	            : bt = this.beatByNum2p;
	        bt.text = 'BEAT BY 0' + num;
	    };
	    HP.prototype.showWinner = function (is1p) {
	        this.winner.show(is1p);
	    };
	    HP.prototype.showWinTeam = function (team) {
	        this.winTeam.setTeam(team);
	    };
	    return HP;
	}(PIXI.Container));
	exports.HP = HP;


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var JsFunc_1 = __webpack_require__(17);
	var TimerState = {
	    PAUSE: 0,
	    RUNNING: 1
	};
	var TextTimer = (function (_super) {
	    __extends(TextTimer, _super);
	    function TextTimer() {
	        _super.apply(this, arguments);
	        this.timeInSec = 0;
	        this.timerId = null;
	        this.isMin = false;
	    }
	    Object.defineProperty(TextTimer.prototype, "textInSec", {
	        set: function (v) {
	            this.setTimeBySec(v);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    TextTimer.prototype.setTimeBySec = function (sec) {
	        this.timeInSec = sec;
	        this.text = JsFunc_1.formatSecond(this.timeInSec);
	    };
	    TextTimer.prototype.toggleTimer = function (state) {
	        var _this = this;
	        var pauseTimer = function () {
	            if (_this.timerId) {
	                clearInterval(_this.timerId);
	                _this.timerId = 0;
	                _this.timerState = TimerState.PAUSE;
	            }
	        };
	        var playTimer = function () {
	            if (_this.timerId)
	                clearInterval(_this.timerId);
	            _this.timerId = setInterval(function () {
	                if (_this.isMin) {
	                    _this.timeInSec--;
	                    if (_this.timeInSec < 0)
	                        _this.timeInSec = 0;
	                }
	                else
	                    _this.timeInSec++;
	                _this.text = JsFunc_1.formatSecond(_this.timeInSec);
	            }, 1000);
	            _this.timerState = TimerState.RUNNING;
	        };
	        if (state != null) {
	            if (state == TimerState.PAUSE)
	                pauseTimer();
	            else if (state == TimerState.RUNNING)
	                playTimer();
	        }
	        else {
	            this.timerId ? pauseTimer() : playTimer();
	        }
	    };
	    TextTimer.prototype.resetTimer = function () {
	        this.timeInSec = 0;
	        this.timerState = TimerState.PAUSE;
	        this.text = JsFunc_1.formatSecond(this.timeInSec);
	    };
	    return TextTimer;
	}(PIXI.Text));
	exports.TextTimer = TextTimer;


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var const_1 = __webpack_require__(33);
	var TweenEx_1 = __webpack_require__(40);
	var PixiEx_1 = __webpack_require__(36);
	var Winner = (function (_super) {
	    __extends(Winner, _super);
	    function Winner(parent) {
	        _super.call(this);
	        parent.addChild(this);
	        this.hide();
	        this.spArr = [];
	        var a = ['W', 'I', 'N', 'N', 'E', 'R'];
	        var px = [0, 20, -3, -3, -3, -6];
	        for (var i = 0; i < a.length; i++) {
	            var chr = a[i];
	            var sp = PixiEx_1.newBitmap({ url: '/img/panel/koa/hp/' + chr + '.png' });
	            sp.pivot = new PIXI.Point(0, 35);
	            sp.y = sp.pivot.y;
	            sp.x = i * 65 + px[i];
	            this.addChild(sp);
	            this.spArr.push(sp);
	            sp['white'] = PixiEx_1.newWhiteMask('/img/panel/koa/hp/' + chr + '.png');
	            sp['white'].alpha = 0;
	            sp.addChild(sp['white']);
	        }
	    }
	    Winner.prototype.show = function (is1p) {
	        var _this = this;
	        this.visible = false;
	        var spArrWidth = 72 * 6;
	        is1p ? this.x = 100
	            : this.x = const_1.ViewConst.STAGE_WIDTH - spArrWidth - 100;
	        this.visible = true;
	        var d1 = 70;
	        var d2 = 90;
	        var d3 = 70;
	        var isodd = true;
	        for (var i = 0; i < this.spArr.length; i++) {
	            var sp = this.spArr[i];
	            isodd ? sp.y = -60
	                : sp.y = sp.height + 60;
	            TweenEx_1.TweenEx.to(sp, i * d1 + 5, { y: 0 }, function (t) {
	                new TweenEx_1.TweenEx(t.target)
	                    .delay(i * d1)
	                    .call(function (t) {
	                    console.log('target', t);
	                    new TweenEx_1.TweenEx(t.target.scale)
	                        .to({ x: 1.5 }, d2)
	                        .to({ x: 1 }, d3)
	                        .start();
	                    new TweenEx_1.TweenEx(t.target.white)
	                        .to({ alpha: .2 }, d2 + 10)
	                        .to({ alpha: 0 }, d3 + 20)
	                        .to({ alpha: .1 }, 5)
	                        .start();
	                    new TweenEx_1.TweenEx(t.target.scale)
	                        .to({ y: 1.5 }, d2)
	                        .to({ y: 1 }, d3)
	                        .start();
	                })
	                    .start();
	            });
	            isodd = !isodd;
	        }
	        TweenEx_1.TweenEx.delayedCall(3000, function () {
	            is1p ? TweenEx_1.TweenEx.to(_this, 50, { x: -spArrWidth })
	                : TweenEx_1.TweenEx.to(_this, 50, { x: const_1.ViewConst.STAGE_WIDTH });
	        });
	    };
	    Winner.prototype.hide = function () {
	        this.visible = false;
	    };
	    return Winner;
	}(PIXI.Container));
	exports.Winner = Winner;


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var TextTimer_1 = __webpack_require__(42);
	var HupuAPI_1 = __webpack_require__(22);
	var JsFunc_1 = __webpack_require__(17);
	var SpriteGroup_1 = __webpack_require__(45);
	var PixiEx_1 = __webpack_require__(36);
	var TweenEx_1 = __webpack_require__(40);
	var const_1 = __webpack_require__(33);
	var WinTeam = (function (_super) {
	    __extends(WinTeam, _super);
	    function WinTeam(parent) {
	        _super.call(this);
	        parent.addChild(this);
	        this.modal = new PIXI.Graphics;
	        this.modal.drawRect(0, 0, const_1.ViewConst.STAGE_WIDTH, const_1.ViewConst.STAGE_HEIGHT);
	        this.modal.alpha = 0;
	        this.addChild(this.modal);
	        this.ctn = new PIXI.Container();
	        this.addChild(this.ctn);
	        this.ax = 453;
	        this.ay = 428;
	        var bg = new PIXI.Graphics().beginFill(0x222222)
	            .drawRect(0, 0, 326, 326);
	        this.ctn.addChildAt(bg, 0);
	        this.msk = PixiEx_1.newBitmap({ url: '/img/panel/koa/hp/winMask.png' });
	        this.ctn.addChild(this.msk);
	        bg.x = this.ax;
	        bg.y = this.ay;
	        bg.mask = this.msk;
	        this.fx = 731;
	        this.fy = 200;
	        this.bg = PixiEx_1.newBitmap({ url: '/img/panel/koa/hp/winBg.png' });
	        this.ctn.alpha = 0;
	        this.ctn.addChild(this.bg);
	        this.setAvatar(HupuAPI_1._avatar('st.png'));
	        var ftStyle = {
	            fontFamily: const_1.FontName.MicrosoftYahei,
	            fontWeight: 'bold',
	            fontSize: '60px', fill: "#fff"
	        };
	        this.ftName = new PIXI.Text('', ftStyle);
	        this.ftName.x = 830;
	        this.ftName.y = 203;
	        this.ctn.addChild(this.ftName);
	        ftStyle.fontSize = '40px';
	        ftStyle.fontWeight = '';
	        this.teamName = new PIXI.Text('', ftStyle);
	        this.teamName.x = 200;
	        this.teamName.y = 303;
	        this.ctn.addChild(this.teamName);
	        this.groupCtn = new PIXI.Container;
	        this.groupCtn.x = 820;
	        this.groupCtn.y = 563;
	        this.ctn.addChild(this.groupCtn);
	        var winGroupBg = new SpriteGroup_1.SpriteGroup({ invert: 208, img: '/img/panel/koa/hp/winGroup.png', count: 3 });
	        this.winGroupMask = new SpriteGroup_1.SpriteGroup({ invert: 208, img: '/img/panel/koa/hp/winGroupMask.png', count: 3 });
	        this.groupCtn.addChild(this.winGroupMask);
	        this.groupCtn.addChild(winGroupBg);
	        this.winIcon = new SpriteGroup_1.SpriteGroup({ invert: 208, img: '/img/panel/koa/hp/win.png', count: 3 });
	        this.winIcon.x = 820;
	        this.winIcon.y = 535;
	        this.ctn.addChild(this.winIcon);
	        var introStyle = {
	            fontFamily: const_1.FontName.MicrosoftYahei,
	            fontSize: '20px', fill: "#fff",
	            lineHeight: 33
	        };
	        this.introText = new PIXI.Text('', introStyle);
	        this.introText.x = 812;
	        this.introText.y = 445;
	        this.ctn.addChild(this.introText);
	        var tts = {
	            fontFamily: const_1.FontName.MicrosoftYahei,
	            fontSize: '50px', fill: "#fff",
	            fontWeight: 'bold'
	        };
	        var tt = new TextTimer_1.TextTimer('', tts);
	        tt.x = 1200;
	        tt.y = 695;
	        PixiEx_1.setPivot(tt, 70, 25);
	        tt.setTimeBySec(0);
	        this.ctn.addChild(tt);
	        this.durationText = tt;
	    }
	    WinTeam.prototype.setDuration = function (d) {
	        var _this = this;
	        this.durationText.setTimeBySec(0);
	        var delay = Math.min(d / 60 * 1000, 3000);
	        var dropFrame = 0;
	        new TweenEx_1.TweenEx({ sec: 0 })
	            .to({ sec: d }, delay)
	            .update(function (t) {
	            if (dropFrame < 0) {
	                dropFrame = 1;
	                var r = Math.random();
	                _this.durationText.scale.x = (r % .5) + 1;
	                _this.durationText.scale.y = (r % .5) + 1;
	            }
	            dropFrame--;
	            _this.durationText.setTimeBySec(parseInt(t.sec));
	        })
	            .call(function () {
	            _this.durationText.scale.x = 1;
	            _this.durationText.scale.y = 1;
	        })
	            .start();
	    };
	    WinTeam.prototype.test = function () {
	        this.setIntro('今日，一段三星Galaxy Note 7爆炸的视频在YouTube上疯传（相关搜索结果达到了约6,550条），据传视频中被炸伤的是美国好声音导师、著名嘻哈歌手Cee-Lo Green。视频画面中，当时一位长相似Cee-Lo Green的黑人男子在演播室后台接电话时，手机突然爆炸冒出火花，随后男子倒地（疑似重伤，甚至传出了被炸死的消息）。不少网友猜测，爆炸的手机');
	        this.setIntro('一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十');
	        this.setFtName('FTG');
	        this.setTeamName('爆炸的手机');
	        this.show();
	    };
	    WinTeam.prototype.setFtName = function (n) {
	        this.ftName.text = n;
	        this.ftName.x = Math.max((const_1.ViewConst.STAGE_WIDTH - this.ftName.width) * .5, 830);
	    };
	    WinTeam.prototype.setTeamName = function (n) {
	        this.teamName.text = n;
	        this.teamName.x = (const_1.ViewConst.STAGE_WIDTH - this.teamName.width) * .5;
	    };
	    WinTeam.prototype.setIntro = function (text) {
	        this.introText.text = JsFunc_1.cnWrap(text, 58, 115);
	    };
	    WinTeam.prototype.setAvatar = function (url) {
	        var _this = this;
	        if (this.avatar) {
	            if (this.avatar.parent)
	                this.avatar.parent.removeChild(this.avatar);
	            this.avatar = null;
	        }
	        this.avatar = PixiEx_1.newBitmap({
	            url: url, x: this.ax, y: this.ay, callback: function (img) {
	                _this.avatar.scale.x = _this.avatar.scale.y = 324 / img.height;
	                _this.avatar.x -= (_this.avatar.width - 326) * .5;
	            }
	        });
	        this.avatar.mask = this.msk;
	        this.ctn.addChildAt(this.avatar, 1);
	    };
	    WinTeam.prototype._makeGroup = function (urlArr) {
	    };
	    WinTeam.prototype.setFtLogo = function (url) {
	        var _this = this;
	        if (this.ftLogo) {
	            if (this.ftLogo.parent)
	                this.ftLogo.parent.removeChild(this.ftLogo);
	            this.ftLogo = null;
	        }
	        this.ftLogo = PixiEx_1.newBitmap({
	            url: url, x: this.fx, y: this.fy, callback: function (img) {
	                _this.ftLogo.scale.x = _this.ftLogo.scale.y = 82 / 120;
	                _this.ctn.addChildAt(_this.ftLogo, 0);
	            }
	        });
	    };
	    WinTeam.prototype.setTeam = function (team) {
	        console.log('set Team', team);
	        this.setDuration(team.duration);
	        var sa = team.scoreArr;
	        this.setTeamName(sa[0] + ' - ' + sa[1]);
	        this.setFtName(team.name);
	        var mvp = team.mvp;
	        this.setFtLogo('/img/ft/' + team.logo);
	        var introMap = {};
	        introMap['1.jpg'] = '源于虎扑黑话“干过羊”，经团员引申为Fuck the GOAT(greatest all time)。他强任他强，我干我的羊正是羊团的座右铭。';
	        introMap['2.jpg'] = '在虎扑社区文化中“二院”（The second hospital）是脑洞打开的代名词。二院战团，同样以球风或飘逸或诡异的球员著称。';
	        introMap['3.jpg'] = '四氧化三铁，黑粉用来调侃科比的黑话如今却成了一种情怀。铁团成员风格迥异，却也同样有一颗好胜的心。';
	        introMap['4.jpg'] = '甘比亚是是虎扑社区中最重要的板块之一，甘比亚战团也是由一群欢乐的JRs组成的战团。';
	        this.setIntro(introMap[team.logo]);
	        this.show();
	        while (this.groupCtn.children.length > 2) {
	            this.groupCtn.removeChildAt(0);
	        }
	        if (team.winPlayerDocArr.length > 3)
	            team.winPlayerDocArr.length = 3;
	        var mvpMap = {};
	        var winPlayer;
	        for (var i = 0; i < team.winPlayerDocArr.length; i++) {
	            var ctn = new PIXI.Graphics().beginFill(0x222222)
	                .drawRect(0, 0, 82 * 2, 82);
	            this.groupCtn.addChildAt(ctn, 0);
	            ctn.x = 2 + i * 208;
	            var playerDocArr = team.winPlayerDocArr[i];
	            if (team.is1pWin) {
	                winPlayer = playerDocArr[0];
	            }
	            else {
	                winPlayer = playerDocArr[1];
	            }
	            if (!mvpMap[winPlayer.id]) {
	                mvpMap[winPlayer.id] = { win: 0, player: winPlayer };
	            }
	            mvpMap[winPlayer.id].win++;
	            var p1 = PixiEx_1.newBitmap({ url: HupuAPI_1._avatar(playerDocArr[0].avatar) });
	            p1.scale.x = p1.scale.y = 82 / 120;
	            var p2 = PixiEx_1.newBitmap({ url: HupuAPI_1._avatar(playerDocArr[1].avatar) });
	            p2.x = 83 / p1.scale.x * 2;
	            p2.scale.x = -1;
	            p1.addChild(p2);
	            ctn.mask = this.winGroupMask.spArr[i];
	            ctn.addChild(p1);
	        }
	        if (team.is1pWin) {
	            this.winIcon.x = 820 + 8;
	        }
	        else {
	            this.winIcon.x = 820 + 90;
	        }
	        var mvpArr = JsFunc_1.mapToArr(mvpMap);
	        var mvp;
	        if (mvpArr.length == 3 || mvpArr.length == 1)
	            mvp = winPlayer;
	        else if (mvpArr.length == 2) {
	            mvpArr[0].win > mvpArr[1].win ? mvp = mvpArr[0].player
	                : mvp = mvpArr[1].player;
	        }
	        console.log('mvp', mvp);
	        this.setAvatar(mvp.portrait);
	    };
	    WinTeam.prototype.show = function () {
	        var _this = this;
	        console.log('show win');
	        new TweenEx_1.TweenEx(this.modal)
	            .to({ alpha: 0.7 }, 100)
	            .call(function () {
	            TweenEx_1.TweenEx.to(_this.ctn, 100, { alpha: 1 });
	        })
	            .delay(10000)
	            .call(function () {
	            _this.hide();
	        })
	            .start();
	    };
	    WinTeam.prototype.hide = function () {
	        var _this = this;
	        new TweenEx_1.TweenEx(this.ctn)
	            .to({ alpha: 0 }, 100)
	            .call(function () {
	            TweenEx_1.TweenEx.to(_this.modal, 100, { alpha: 0 });
	        })
	            .start();
	    };
	    return WinTeam;
	}(PIXI.Container));
	exports.WinTeam = WinTeam;


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Fx_1 = __webpack_require__(46);
	var PixiEx_1 = __webpack_require__(36);
	(function (Direction) {
	    Direction[Direction["e"] = 0] = "e";
	    Direction[Direction["w"] = 1] = "w";
	    Direction[Direction["s"] = 2] = "s";
	    Direction[Direction["n"] = 3] = "n";
	})(exports.Direction || (exports.Direction = {}));
	var Direction = exports.Direction;
	var SpriteGroup = (function (_super) {
	    __extends(SpriteGroup, _super);
	    function SpriteGroup(options) {
	        _super.call(this);
	        this.spArr = [];
	        var dir = options.dir || Direction.e;
	        var flip = options.flip || 1;
	        var flipY = options.flipY || 1;
	        var count = options.count;
	        var invert = options.invert;
	        this._w = count * invert;
	        for (var i = 0; i < count; i++) {
	            var sp = PixiEx_1.newBitmap({ url: options.img });
	            if (dir == Direction.e)
	                sp.x = i * options.invert;
	            else if (dir == Direction.w)
	                sp.x = (count - 1 - i) * invert;
	            else if (dir == Direction.s)
	                sp.y = i * invert;
	            else if (dir == Direction.n)
	                sp.y = (count - 1 - i) * invert;
	            sp.scale.x = flip;
	            sp.scale.y = flipY;
	            this.spArr.push(sp);
	            this.addChild(sp);
	        }
	    }
	    SpriteGroup.prototype.setNum = function (num) {
	        for (var i = 0; i < this.spArr.length; i++) {
	            var sp = this.spArr[i];
	            if (i < num)
	                this.onShowPoint(sp);
	            else
	                this.onHidePoint(sp);
	        }
	    };
	    Object.defineProperty(SpriteGroup.prototype, "width", {
	        get: function () {
	            return this._w;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SpriteGroup.prototype.onShowPoint = function (sp) {
	        sp.visible = true;
	        Fx_1.blink3(sp);
	    };
	    SpriteGroup.prototype.onHidePoint = function (sp) {
	        sp.visible = false;
	    };
	    return SpriteGroup;
	}(PIXI.Container));
	exports.SpriteGroup = SpriteGroup;


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var TweenEx_1 = __webpack_require__(40);
	function delayCall(delay, callback) {
	}
	exports.delayCall = delayCall;
	function blink2(options) {
	    var target = options.target;
	    var time = options.time || 80;
	    var callback = options.callback;
	    var loop = options.loop || Infinity;
	    function to1(a) {
	        if (target.visible && loop > 0)
	            new TweenEx_1.TweenEx(target)
	                .to({ alpha: a }, time)
	                .call(function () {
	                loop -= 1;
	                to1(a ? 0 : 1);
	            })
	                .start();
	        else {
	            if (callback)
	                callback();
	            loop = -1;
	        }
	    }
	    to1(1);
	}
	exports.blink2 = blink2;
	function blink3(target, time, loop) {
	    if (time === void 0) { time = 80; }
	    if (loop === void 0) { loop = false; }
	    var blink = time;
	    new TweenEx_1.TweenEx(target)
	        .to({ alpha: 1 }, blink)
	        .to({ alpha: 0 }, blink)
	        .to({ alpha: 1 }, blink)
	        .to({ alpha: 0 }, blink)
	        .to({ alpha: 1 }, blink)
	        .start();
	}
	exports.blink3 = blink3;
	function fadeOutCtn(ctn) {
	    console.log(this, "show fade Out WinPanel");
	}
	exports.fadeOutCtn = fadeOutCtn;


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var HupuAPI_1 = __webpack_require__(22);
	var const_1 = __webpack_require__(33);
	var SpriteGroup_1 = __webpack_require__(45);
	var PixiEx_1 = __webpack_require__(36);
	var St = (function (_super) {
	    __extends(St, _super);
	    function St(parent, is1p) {
	        _super.call(this);
	        parent.addChild(this);
	        this.is1p = is1p;
	        var bg;
	        var dir;
	        this.ay = 10;
	        var fill;
	        if (is1p) {
	            dir = SpriteGroup_1.Direction.e;
	            this.addChild(PixiEx_1.newBitmap({ url: '/img/panel/koa/hp/blueSt.png' }));
	            bg = new SpriteGroup_1.SpriteGroup({
	                dir: SpriteGroup_1.Direction.e,
	                invert: 60,
	                img: '/img/panel/koa/hp/bgSt.png',
	                count: 2
	            });
	            bg.x = 82;
	            bg.y = 50;
	            this.addChild(bg);
	            this.ax = 9;
	            fill = ['#c0dbff', '#c0dbff', '#3b52b3'];
	        }
	        else {
	            this.ax = 213;
	            dir = SpriteGroup_1.Direction.w;
	            this.addChild(PixiEx_1.newBitmap({ url: '/img/panel/koa/hp/redSt.png' }));
	            bg = new SpriteGroup_1.SpriteGroup({
	                dir: SpriteGroup_1.Direction.w,
	                invert: 60,
	                img: '/img/panel/koa/hp/bgSt.png',
	                count: 2
	            });
	            bg.x = 282 - bg.width - 78;
	            bg.y = 50;
	            this.addChild(bg);
	            fill = ['#fff0f0', '#fff0f0', '#b33b3b'];
	        }
	        this.spg = new SpriteGroup_1.SpriteGroup({
	            dir: dir,
	            invert: 60,
	            img: '/img/panel/koa/hp/st.png',
	            count: 2
	        });
	        this.spg.x = bg.x;
	        this.spg.y = bg.y;
	        this.addChild(this.spg);
	        this.setAvatar(HupuAPI_1._avatar('st.png'));
	        var ns = {
	            fontFamily: const_1.FontName.MicrosoftYahei,
	            fontSize: '20px',
	            fontStyle: 'normal',
	            fontWeight: 'bold',
	            fill: fill,
	            stroke: '#000',
	            strokeThickness: 3,
	            fillGradientType: PIXI['TEXT_GRADIENT'].LINEAR_VERTICAL,
	        };
	        var nt = new PIXI.Text('', ns);
	        nt.y = 15;
	        nt.x = 82;
	        this.nameText = nt;
	        this.addChild(nt);
	        var avtBg = new PIXI.Graphics()
	            .beginFill(0xb4b4b4)
	            .drawRect(this.ax, this.ay, 68, 68);
	        this.addChildAt(avtBg, 0);
	    }
	    St.prototype.setNum = function (n) {
	        this.spg.setNum(n);
	    };
	    St.prototype.setAvatar = function (url) {
	        var _this = this;
	        if (this.avatar) {
	            this.avatar.parent.removeChild(this.avatar);
	            this.avatar = null;
	        }
	        this.avatar = PixiEx_1.newBitmap({
	            url: url, x: this.ax, y: this.ay, callback: function (img) {
	                _this.avatar.scale.x = _this.avatar.scale.y = 60 / img.width;
	                if (!_this.is1p) {
	                    _this.avatar.scale.x *= -1;
	                    _this.avatar.x = _this.ax + 60;
	                }
	            }
	        });
	        this.addChildAt(this.avatar, 1);
	    };
	    St.prototype.setName = function (name) {
	        this.nameText.text = name;
	        if (!this.is1p) {
	            this.nameText.x = 282 - 82 - this.nameText.width;
	        }
	    };
	    return St;
	}(PIXI.Container));
	exports.St = St;


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var TweenEx_1 = __webpack_require__(40);
	var Order_1 = __webpack_require__(49);
	var const_1 = __webpack_require__(33);
	var Fx_1 = __webpack_require__(46);
	var PixiEx_1 = __webpack_require__(36);
	var PickupAnimation = (function () {
	    function PickupAnimation(pickupScene) {
	        this.curIdx1p = 0;
	        this.curIdx2p = 0;
	        this.pickupDone = 0;
	        this.texMap = {};
	        this.orderPortraitY = 230;
	        this.orderDone = 0;
	        this.scene = pickupScene;
	        this.pickPlayerInfoArr1p = [];
	        this.pickPlayerInfoArr2p = [];
	    }
	    PickupAnimation.prototype.startPick = function (teamIdx1p, teamIdx2p, orderArr1p, orderArr2p) {
	        var _this = this;
	        this.orderArr1p = orderArr1p;
	        this.orderArr2p = orderArr2p;
	        var previewMap = {
	            "1": [1],
	            "2": [8, 7, 6, 5],
	            "3": [1, 10, 9],
	            "4": [1, 2, 11, 12],
	            "5": [1, 2, 3, 12, 13, 14, 15, 16],
	            "6": [8, 7, 6, 21],
	            "7": [1, 2, 3, 4, 13, 25],
	            "8": [8, 7, 6, 5, 20, 19, 18]
	        };
	        var preview1p = previewMap[teamIdx1p];
	        var preview2p = previewMap[teamIdx2p];
	        var i = 0;
	        for (i = 0; i < preview1p.length; i++) {
	            var pickupIdx = preview1p[i];
	            this.previewPlayer(pickupIdx, 200 * i, true);
	        }
	        TweenEx_1.TweenEx.delayedCall(200 * i, function () {
	            _this.pickupTeam(Number(teamIdx1p), _this.scene.pickupFrame1p, function () {
	                _this.transToOrder();
	            });
	        });
	        TweenEx_1.TweenEx.delayedCall(100, function () {
	            var j = 0;
	            for (; j < preview2p.length; j++) {
	                var pickupIdx = preview2p[j];
	                _this.previewPlayer(pickupIdx, 0.12 * j, false);
	            }
	            TweenEx_1.TweenEx.delayedCall(120 * j, function () {
	                _this.pickupTeam(Number(teamIdx2p), _this.scene.pickupFrame2p, function () {
	                    _this.transToOrder();
	                });
	            });
	        });
	    };
	    PickupAnimation.prototype.previewPlayer = function (playerId, delay, is1p) {
	        var _this = this;
	        TweenEx_1.TweenEx.delayedCall(delay, function () {
	            var pickupFrame = is1p ? _this.scene.pickupFrame1p : _this.scene.pickupFrame2p;
	            var playerInfo = _this.movePickupFrame(playerId, pickupFrame);
	            _this.setPlayerName(playerInfo.name, is1p, true);
	            _this.setPortrait(playerInfo.portrait, is1p, false);
	        });
	    };
	    PickupAnimation.prototype.setPlayerName = function (name, is1p, isPreview) {
	        if (isPreview === void 0) { isPreview = false; }
	        if (is1p) {
	            this.scene.pickupName1pArr[this.curIdx1p].text = name;
	            if (!isPreview)
	                this.curIdx1p++;
	        }
	        else {
	            var rightAlign = 1600;
	            console.log('curIdx2p', this.curIdx2p);
	            var name2p = this.scene.pickupName2pArr[this.curIdx2p];
	            name2p.text = name;
	            name2p.x = rightAlign - name2p.width;
	            if (!isPreview)
	                this.curIdx2p++;
	        }
	    };
	    PickupAnimation.prototype.pickupTeam = function (teamIdx, pickupFrame, callback) {
	        var _this = this;
	        var i = 0;
	        var delaySel = function () {
	            TweenEx_1.TweenEx.delayedCall(200 + Math.random() * 300, function () {
	                if (i < 4) {
	                    _this.selectPlayer(teamIdx * 4 + i - 3, pickupFrame);
	                    i++;
	                    delaySel();
	                }
	                else {
	                    pickupFrame.visible = false;
	                    callback();
	                }
	            });
	        };
	        delaySel();
	    };
	    PickupAnimation.prototype.movePickupFrame = function (playerId, pickupFrame) {
	        var playerInfo = this.scene.playerIdMap[playerId];
	        if (playerInfo) {
	            pickupFrame.x = playerInfo.x - 9;
	            pickupFrame.y = playerInfo.y - 9;
	            pickupFrame.alpha = 1;
	        }
	        else {
	            console.log('no playerId:', playerId);
	        }
	        return playerInfo;
	    };
	    PickupAnimation.prototype.selectPlayer = function (playerId, pickupFrame) {
	        var playerInfo = this.movePickupFrame(playerId, pickupFrame);
	        var is1p = pickupFrame == this.scene.pickupFrame1p;
	        if (is1p)
	            this.pickPlayerInfoArr1p.push(playerInfo);
	        else
	            this.pickPlayerInfoArr2p.push(playerInfo);
	        this.setPortrait(playerInfo.portrait, is1p, true);
	        this.setPlayerName(playerInfo.name, is1p);
	    };
	    PickupAnimation.prototype.setPortrait = function (url, is1p, isBlink) {
	        var _this = this;
	        if (isBlink === void 0) { isBlink = false; }
	        var setTex = function (tex) {
	            var x, y = 687, p;
	            if (is1p) {
	                x = 310;
	                p = _this.scene.portrait1p;
	            }
	            else {
	                x = 1210;
	                p = _this.scene.portrait2p;
	            }
	            p.x = x + (400 - tex.width) * .5;
	            p.y = y - tex.height;
	            p.texture = tex;
	            if (isBlink)
	                Fx_1.blink2({ target: p, time: 60, loop: 5 });
	        };
	        if (!this.texMap[url])
	            PixiEx_1.loadRes(url, function (img) {
	                var tex = PixiEx_1.imgToTex(img);
	                _this.texMap[url] = tex;
	                setTex(tex);
	            });
	        else
	            setTex(this.texMap[url]);
	    };
	    PickupAnimation.prototype.transToOrder = function () {
	        var _this = this;
	        console.log('transToOrder');
	        if (this.pickupDone > 0) {
	            TweenEx_1.TweenEx.delayedCall(500, function () {
	                TweenEx_1.TweenEx.to(_this.scene.portrait1p, 50, { alpha: 0 });
	                TweenEx_1.TweenEx.to(_this.scene.portrait2p, 50, { alpha: 0 });
	                TweenEx_1.TweenEx.to(_this.scene.portraitBg1p, 80, { x: -_this.scene.portraitBg1p.width });
	                TweenEx_1.TweenEx.to(_this.scene.portraitBg2p, 80, { x: const_1.ViewConst.STAGE_WIDTH });
	                for (var i = 0; i < _this.scene.nameBg1pArr.length; i++) {
	                    var name1p = _this.scene.pickupName1pArr[i];
	                    var name2p = _this.scene.pickupName2pArr[i];
	                    TweenEx_1.TweenEx.to(name1p, 50, { alpha: 0 });
	                    TweenEx_1.TweenEx.to(name2p, 50, { alpha: 0 });
	                    var nameBg = _this.scene.nameBg1pArr[i];
	                    TweenEx_1.TweenEx.to(nameBg, 100 + 80 * i, { x: -nameBg.width });
	                    var nameBg2p = _this.scene.nameBg2pArr[i];
	                    TweenEx_1.TweenEx.to(nameBg2p, 100 + 80 * i, { x: const_1.ViewConst.STAGE_WIDTH });
	                }
	                TweenEx_1.TweenEx.to(_this.scene.title, 300, { y: -380 });
	                TweenEx_1.TweenEx.to(_this.scene.bg, 500, { y: -132 });
	                TweenEx_1.TweenEx.delayedCall(200, function () {
	                    _this.fadeInOrder();
	                });
	            });
	        }
	        this.pickupDone++;
	    };
	    PickupAnimation.prototype.fadeInOrder = function () {
	        var _this = this;
	        this.order = new Order_1.OrderScene(this.scene.parent, this.pickPlayerInfoArr1p.concat(this.pickPlayerInfoArr2p));
	        this.order.bg.alpha = 0;
	        TweenEx_1.TweenEx.to(this.order.bg, 800, { alpha: 1 });
	        TweenEx_1.TweenEx.delayedCall(200, function () {
	            for (var i = 0; i < _this.order.portraitArr1p.length; i++) {
	                var ctn1p = _this.order.portraitArr1p[i];
	                var ctn2p = _this.order.portraitArr2p[i];
	                console.log('tween to y');
	                TweenEx_1.TweenEx.to(ctn1p, 100 + i * 80, { y: 40 + (3 - i) * _this.orderPortraitY });
	                TweenEx_1.TweenEx.to(ctn2p, 100 + i * 80, { y: 40 + (3 - i) * _this.orderPortraitY });
	            }
	        });
	        this.order.select1p.pivot = new PIXI.Point(210, 39);
	        this.order.select2p.pivot = new PIXI.Point(210, 39);
	        TweenEx_1.TweenEx.to(this.order.select1p, 300, { x: 375 + 210 });
	        TweenEx_1.TweenEx.to(this.order.select2p, 300, { x: 1275 + 210 });
	        TweenEx_1.TweenEx.delayedCall(800, function () {
	            _this.pin(_this.orderArr1p, _this.order.portraitArr1p, _this.order.select1p);
	            _this.pin(_this.orderArr2p, _this.order.portraitArr2p, _this.order.select2p);
	        });
	    };
	    PickupAnimation.prototype.orderDown = function (portraitArr) {
	        var len = portraitArr.length;
	        var p0 = portraitArr.shift();
	        if (p0) {
	            console.log('curIdx:', p0['pickupIdx']);
	            p0.parent.addChildAt(p0, 3 - portraitArr.length);
	            TweenEx_1.TweenEx.to(p0, 200, { y: p0.y - (len - 1) * this.orderPortraitY });
	            for (var i = 0; i < portraitArr.length; i++) {
	                var p = portraitArr[i];
	                p.filters = [p['filter']];
	                var py = p.y + this.orderPortraitY;
	                TweenEx_1.TweenEx.to(p, 200, { y: py });
	            }
	            portraitArr.push(p0);
	            portraitArr[0].filters = null;
	        }
	    };
	    PickupAnimation.prototype.pin = function (pickupIdxArr, portraitArr, selectSP) {
	        var _this = this;
	        if (portraitArr[0] && pickupIdxArr[0] == portraitArr[0]['pickupIdx']) {
	            this.orderDown(portraitArr);
	            var p0_1 = portraitArr.pop();
	            pickupIdxArr.shift();
	            var numSp = selectSP['numArr'].shift();
	            p0_1.addChild(numSp);
	            new TweenEx_1.TweenEx(p0_1['white'])
	                .to({ alpha: 1 }, 100)
	                .to({ alpha: 0 }, 100)
	                .call(function () {
	                p0_1.filters = [p0_1['filter']];
	            })
	                .start();
	            var sp_1 = selectSP['spArr'].shift();
	            new TweenEx_1.TweenEx(selectSP.scale)
	                .to({ y: 0 }, 80)
	                .call(function () {
	                if (sp_1) {
	                    selectSP.addChild(sp_1);
	                }
	                else
	                    selectSP.visible = false;
	            })
	                .to({ y: 1 }, 80)
	                .start();
	            if (pickupIdxArr.length)
	                TweenEx_1.TweenEx.delayedCall(400 - Math.random() * 200, function () {
	                    _this.pin(pickupIdxArr, portraitArr, selectSP);
	                });
	            else {
	                this.orderDone++;
	                if (this.orderDone > 1)
	                    TweenEx_1.TweenEx.delayedCall(3500, function () {
	                        _this.fadeOut();
	                    });
	            }
	        }
	        else {
	            this.orderDown(portraitArr);
	            TweenEx_1.TweenEx.delayedCall(400 - Math.random() * 200, function () {
	                _this.pin(pickupIdxArr, portraitArr, selectSP);
	            });
	        }
	    };
	    PickupAnimation.prototype.fadeOut = function () {
	        var _this = this;
	        var removeScene = function () {
	            while (_this.order.children.length > 2) {
	                _this.order.removeChildAt(0);
	            }
	            _this.scene.removeChildren();
	        };
	        var t1 = 200;
	        new TweenEx_1.TweenEx(this.order.blackTop)
	            .to({ y: 0 }, t1)
	            .call(function () {
	            removeScene();
	        })
	            .to({ y: -const_1.ViewConst.STAGE_HEIGHT * .5 }, t1)
	            .start();
	        new TweenEx_1.TweenEx(this.order.blackBottom)
	            .to({ y: const_1.ViewConst.STAGE_HEIGHT * .5 }, t1)
	            .call(function () {
	            removeScene();
	        })
	            .to({ y: const_1.ViewConst.STAGE_HEIGHT }, t1)
	            .start();
	    };
	    return PickupAnimation;
	}());
	exports.PickupAnimation = PickupAnimation;


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Pickup_1 = __webpack_require__(50);
	var const_1 = __webpack_require__(33);
	var PixiEx_1 = __webpack_require__(36);
	var OrderScene = (function (_super) {
	    __extends(OrderScene, _super);
	    function OrderScene(stage, playerPortraitArr) {
	        _super.call(this);
	        stage.addChild(this);
	        this.bg = PixiEx_1.newBitmap({ url: '/img/panel/koa/order/bg.png' });
	        this.addChild(this.bg);
	        this.portraitArr1p = [];
	        this.portraitArr2p = [];
	        var style = JSON.parse(JSON.stringify(Pickup_1.pickNameStyle));
	        style['fontSize'] = '30px';
	        var f = new PIXI.filters.ColorMatrixFilter();
	        f.brightness(0.4);
	        var ctn = new PIXI.Container();
	        this.addChildAt(ctn, 1);
	        for (var i = 0; i < 4; i++) {
	            var ctn1p = new PIXI.Container();
	            if (i > 0)
	                ctn1p.filters = [f];
	            ctn1p.x = 300;
	            ctn1p.y = -300;
	            ctn.addChildAt(ctn1p, 0);
	            ctn1p.addChild(PixiEx_1.newBitmap({ x: -250, y: 200, url: '/img/panel/koa/pickup/blueName.png' }));
	            var pickInfo = playerPortraitArr.shift();
	            var name1p = new PIXI.Text(pickInfo.name, style);
	            name1p.x = -230;
	            name1p.y = 215;
	            ctn1p.addChild(name1p);
	            ctn1p['sp'] = PixiEx_1.newBitmap({ url: pickInfo.portrait });
	            ctn1p['white'] = PixiEx_1.newWhiteMask(pickInfo.portrait);
	            ctn1p['white'].alpha = 0;
	            ctn1p['sp'].addChild(ctn1p['white']);
	            ctn1p['filter'] = f;
	            ctn1p['pickupIdx'] = pickInfo.pickupIdx;
	            ctn1p.addChild(ctn1p['sp']);
	            var bw = PixiEx_1.newBitmap({ url: '/img/panel/koa/order/blueWave.png' });
	            bw.x = -39;
	            bw.y = 262;
	            ctn1p.addChild(bw);
	            this.portraitArr1p.push(ctn1p);
	        }
	        ctn = new PIXI.Container();
	        this.addChildAt(ctn, 1);
	        for (var i = 0; i < 4; i++) {
	            var ctn2p = new PIXI.Container();
	            if (i > 0)
	                ctn2p.filters = [f];
	            ctn2p.x = 1200;
	            ctn2p.y = -300;
	            ctn.addChildAt(ctn2p, 0);
	            ctn2p.addChild(PixiEx_1.newBitmap({ x: 250, y: 200, url: '/img/panel/koa/pickup/redName.png' }));
	            var pickInfo = playerPortraitArr.shift();
	            var name2p = new PIXI.Text(pickInfo.name, style);
	            name2p.x = 230 + 420 - name2p.width;
	            name2p.y = 215;
	            ctn2p.addChild(name2p);
	            ctn2p['sp'] = PixiEx_1.newBitmap({ url: pickInfo.portrait });
	            ctn2p['white'] = PixiEx_1.newWhiteMask(pickInfo.portrait);
	            ctn2p['white'].alpha = 0;
	            ctn2p['sp'].addChild(ctn2p['white']);
	            ctn2p['filter'] = f;
	            ctn2p['pickupIdx'] = pickInfo.pickupIdx;
	            ctn2p.addChild(ctn2p['sp']);
	            var rw = PixiEx_1.newBitmap({ url: '/img/panel/koa/order/redWave.png' });
	            rw.x = -39;
	            rw.y = 262;
	            ctn2p.addChild(rw);
	            this.portraitArr2p.push(ctn2p);
	        }
	        var pivot = new PIXI.Point(210, 39);
	        var blue1st = PixiEx_1.newBitmap({ url: '/img/panel/koa/order/blue1st.jpg' });
	        blue1st.pivot = pivot;
	        this.select1p = blue1st;
	        blue1st['spArr'] =
	            [PixiEx_1.newBitmap({ url: '/img/panel/koa/order/blue2nd.png' }),
	                PixiEx_1.newBitmap({ url: '/img/panel/koa/order/blue3rd.png' })];
	        blue1st['numArr'] = [
	            PixiEx_1.newBitmap({ x: 345, y: 110, url: '/img/panel/koa/order/1.png' }),
	            PixiEx_1.newBitmap({ x: 345, y: 110, url: '/img/panel/koa/order/2.png' }),
	            PixiEx_1.newBitmap({ x: 345, y: 110, url: '/img/panel/koa/order/3.png' }),
	            PixiEx_1.newBitmap({ x: 345, y: 110, url: '/img/panel/koa/order/st.png' }),
	        ];
	        blue1st.y = 970 + pivot.y;
	        this.addChild(blue1st);
	        var red1st = PixiEx_1.newBitmap({ url: '/img/panel/koa/order/red1st.jpg' });
	        red1st.pivot = pivot;
	        this.select2p = red1st;
	        red1st['spArr'] = [PixiEx_1.newBitmap({ url: '/img/panel/koa/order/red2nd.png' }),
	            PixiEx_1.newBitmap({ url: '/img/panel/koa/order/red3rd.png' })];
	        red1st['numArr'] = [
	            PixiEx_1.newBitmap({ x: -40, y: 110, url: '/img/panel/koa/order/1.png' }),
	            PixiEx_1.newBitmap({ x: -40, y: 110, url: '/img/panel/koa/order/2.png' }),
	            PixiEx_1.newBitmap({ x: -40, y: 110, url: '/img/panel/koa/order/3.png' }),
	            PixiEx_1.newBitmap({ x: -40, y: 110, url: '/img/panel/koa/order/st.png' }),
	        ];
	        red1st.x = const_1.ViewConst.STAGE_WIDTH;
	        red1st.y = blue1st.y;
	        this.addChild(red1st);
	        this.blackTop = new PIXI.Graphics();
	        this.blackTop.drawRect(0, 0, const_1.ViewConst.STAGE_WIDTH, const_1.ViewConst.STAGE_HEIGHT * .5);
	        this.blackTop.y = -const_1.ViewConst.STAGE_HEIGHT * .5;
	        this.addChild(this.blackTop);
	        this.blackBottom = new PIXI.Graphics();
	        this.blackBottom.drawRect(0, 0, const_1.ViewConst.STAGE_WIDTH, const_1.ViewConst.STAGE_HEIGHT * .5);
	        this.blackBottom.y = const_1.ViewConst.STAGE_HEIGHT;
	        this.addChild(this.blackBottom);
	    }
	    return OrderScene;
	}(PIXI.Container));
	exports.OrderScene = OrderScene;


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var TweenEx_1 = __webpack_require__(40);
	var HupuAPI_1 = __webpack_require__(22);
	var const_1 = __webpack_require__(33);
	var Fx_1 = __webpack_require__(46);
	var PixiEx_1 = __webpack_require__(36);
	var PickupPlayerInfo = (function () {
	    function PickupPlayerInfo(options) {
	        this.x = options.x;
	        this.y = options.y;
	    }
	    return PickupPlayerInfo;
	}());
	exports.PickupPlayerInfo = PickupPlayerInfo;
	exports.pickNameStyle = {
	    fontFamily: const_1.FontName.MicrosoftYahei,
	    fontSize: '40px',
	    fontStyle: 'normal',
	    fontWeight: 'bold',
	    fill: '#fff',
	    stroke: '#4a1850',
	    strokeThickness: 5,
	    dropShadow: false,
	    dropShadowColor: '#000000',
	    dropShadowAngle: Math.PI / 6,
	    dropShadowDistance: 6,
	    wordWrap: true,
	    wordWrapWidth: 500
	};
	var PickupScene = (function (_super) {
	    __extends(PickupScene, _super);
	    function PickupScene(stage, playerMap) {
	        _super.call(this);
	        this.playerIdMap = {};
	        stage.addChild(this);
	        this.bg = PixiEx_1.newBitmap({ url: '/img/panel/koa/pickup/bg.png' });
	        this.addChild(this.bg);
	        this.title = PixiEx_1.newBitmap({ url: '/img/panel/koa/pickup/title.png', x: 96 });
	        this.addChild(this.title);
	        this.titleText = new PIXI.Text('KING OF AMATEUR', exports.pickNameStyle);
	        this.titleText.x = 670;
	        this.titleText.y = 35;
	        this.title.addChild(this.titleText);
	        this.portraitBg1p = PixiEx_1.newBitmap({ x: 300, y: 444, url: '/img/panel/koa/pickup/blueBg.png' });
	        this.addChild(this.portraitBg1p);
	        this.portraitBg2p = PixiEx_1.newBitmap({ x: 1200, y: 444, url: '/img/panel/koa/pickup/redBg.png' });
	        this.addChild(this.portraitBg2p);
	        this.initName();
	        this.initPlayerData(playerMap);
	    }
	    PickupScene.prototype.initPlayerData = function (playerMap) {
	        var teamPos = [
	            { x: 245, y: 13, flip: 1 },
	            { x: 1300, y: 13, flip: -1 },
	            { x: 189, y: 110, flip: 1 },
	            { x: 580, y: 110, flip: 1 },
	            { x: 970, y: 110, flip: -1 },
	            { x: 1365, y: 110, flip: -1 },
	            { x: 528, y: 204, flip: 1 },
	            { x: 1027, y: 204, flip: -1 },
	        ];
	        var invert = 95;
	        var pickupIdx = 1;
	        var r = 13;
	        var reverseTeam = [1, 3, 4, 7];
	        for (var _i = 0, teamPos_1 = teamPos; _i < teamPos_1.length; _i++) {
	            var tp = teamPos_1[_i];
	            for (var i = 0; i < 4; i++) {
	                var px = tp.x + i * 95;
	                if (tp.flip == 1) {
	                    px = tp.x + (3 - i) * 95;
	                }
	                var p = new PickupPlayerInfo({ x: px, y: tp.y });
	                var pDoc = playerMap[pickupIdx];
	                p.name = pDoc.name;
	                p.portrait = pDoc.portrait;
	                p.avatar = pDoc.avatar;
	                this.playerIdMap[pickupIdx] = p;
	                p.pickupIdx = pickupIdx;
	                var ax = p.x - this.title.x;
	                var ay = p.y;
	                var msk = new PIXI.Graphics();
	                msk.beginFill(0xff0000, 0.5);
	                msk.moveTo(17, 4);
	                msk.lineTo(72, 4);
	                msk.lineTo(72 + r, 4 + r);
	                msk.lineTo(72 + r, 72);
	                msk.lineTo(72, 72 + r);
	                msk.lineTo(17, 72 + r);
	                msk.lineTo(17 - r, 72);
	                msk.lineTo(17 - r, 4 + r);
	                msk.x = ax;
	                msk.y = ay;
	                this.title.addChild(msk);
	                var avtBg = new PIXI.Graphics().beginFill(0x222222)
	                    .drawRect(0, 0, 88, 88);
	                avtBg.x = ax;
	                avtBg.y = ay;
	                avtBg.mask = msk;
	                this.title.addChild(avtBg);
	                var avt = PixiEx_1.newBitmap({ x: ax, y: ay, url: HupuAPI_1._avatar(pDoc.avatar) });
	                avt.scale.x = avt.scale.y = 88 / 120;
	                if (tp.flip < 0) {
	                    avt.scale.x *= tp.flip;
	                    avt.x += 88;
	                }
	                avt.mask = msk;
	                this.title.addChild(avt);
	                this.title.addChild(PixiEx_1.newBitmap({ x: ax, y: ay, url: '/img/panel/koa/pickup/avatar.png' }));
	                pickupIdx++;
	            }
	        }
	        console.log('playerIdMap', this.playerIdMap);
	        var _1p = PixiEx_1.newBitmap({ url: '/img/panel/koa/pickup/pickupFrame.png' });
	        _1p.alpha = 0;
	        _1p.x = 0;
	        _1p.y = 0;
	        this.addChild(_1p);
	        this.pickupFrame1p = _1p;
	        Fx_1.blink2({ target: _1p, time: 50 });
	        var _2p = PixiEx_1.newBitmap({ url: '/img/panel/koa/pickup/pickupFrame.png' });
	        _2p.alpha = 0;
	        _2p.x = 0;
	        _2p.y = 0;
	        this.addChild(_2p);
	        this.pickupFrame2p = _2p;
	        Fx_1.blink2({ target: _2p, time: 50 });
	        var ptt1p = new PIXI.Sprite();
	        this.portrait1p = ptt1p;
	        this.addChild(ptt1p);
	        var ptt2p = new PIXI.Sprite();
	        this.portrait2p = ptt2p;
	        this.addChild(ptt2p);
	    };
	    PickupScene.prototype.initName = function () {
	        this.pickupName1pArr = [];
	        this.pickupName2pArr = [];
	        this.nameBg1pArr = [];
	        this.nameBg2pArr = [];
	        var ivt = 90;
	        for (var i = 0; i < 4; i++) {
	            var blueNameBg = PixiEx_1.newBitmap({ x: -400, y: 710 + i * ivt, url: '/img/panel/koa/pickup/blueName.png' });
	            this.addChild(blueNameBg);
	            var name1p = new PIXI.Text('', exports.pickNameStyle);
	            name1p.x = 330;
	            name1p.y = 718 + i * ivt;
	            this.addChild(name1p);
	            this.pickupName1pArr.push(name1p);
	            var redNameBg = PixiEx_1.newBitmap({ x: const_1.ViewConst.STAGE_WIDTH, y: 710 + i * ivt, url: '/img/panel/koa/pickup/redName.png' });
	            this.addChild(redNameBg);
	            this.nameBg1pArr.push(blueNameBg);
	            this.nameBg2pArr.push(redNameBg);
	            this.fadeInNameBg(blueNameBg, 0.02 + i * .07, { x: 300 });
	            this.fadeInNameBg(redNameBg, 0.02 + i * .07, { x: 1200 });
	            var name2p = new PIXI.Text('', exports.pickNameStyle);
	            name2p.y = name1p.y;
	            this.addChild(name2p);
	            this.pickupName2pArr.push(name2p);
	        }
	    };
	    PickupScene.prototype.fadeInNameBg = function (target, delay, pos) {
	        TweenEx_1.TweenEx.delayedCall(delay, function () {
	            TweenEx_1.TweenEx.to(target, 80, pos);
	        });
	    };
	    return PickupScene;
	}(PIXI.Container));
	exports.PickupScene = PickupScene;


/***/ },
/* 51 */
/***/ function(module, exports) {

	"use strict";
	exports.CommandId = {
	    resetTimer: '',
	    disableTracker: '',
	    updateLeftScore: '',
	    cs_addLeftScore: '',
	    updateRightScore: '',
	    cs_addRightScore: '',
	    minLeftScore: '',
	    cs_minLeftScore: '',
	    minRightScore: '',
	    cs_minRightScore: '',
	    updateLeftFoul: '',
	    cs_addLeftFoul: '',
	    cs_minLeftFoul: '',
	    updateRightFoul: '',
	    cs_addRightFoul: '',
	    cs_minRightFoul: '',
	    cs_updateLeftSkill: '',
	    updateLeftSkill: '',
	    cs_updateRightSkill: '',
	    updateRightSkill: '',
	    cs_setGameIdx: '',
	    setGameIdx: '',
	    fadeInWinPanel: '',
	    cs_fadeInWinPanel: '',
	    fadeOutWinPanel: '',
	    cs_fadeOutWinPanel: '',
	    saveGameRec: '',
	    cs_saveGameRec: '',
	    cs_fadeInFinalPlayer: '',
	    fadeInFinalPlayer: '',
	    cs_fadeOutFinalPlayer: '',
	    fadeOutFinalPlayer: '',
	    cs_setActPlayer: '',
	    cs_setBracketPlayer: '',
	    cs_clearActPlayerGameRec: '',
	    cs_getBracketPlayerByIdx: '',
	    cs_refreshClient: '',
	    refreshClient: '',
	    cs_updateWinScore: '',
	    updateWinScore: '',
	    cs_updateKingPlayer: '',
	    updateKingPlayer: '',
	    cs_setCursorPlayer: '',
	    setCursorPlayer: '',
	    cs_saveToTotalScore: '',
	    cs_setScorePanelVisible: '',
	    setScorePanelVisible: '',
	    cs_autoSaveGameRec: '',
	    cs_setDelayTime: '',
	    sc_setDelayTime: '',
	    cs_showRank: '',
	    sc_showRank: '',
	    cs_showBracket: '',
	    sc_showBracket: '',
	    cs_hideOnlinePanel: '',
	    sc_hideOnlinePanel: '',
	    cs_resetTimer: '',
	    sc_resetTimer: '',
	    cs_setTimer: '',
	    sc_setTimer: '',
	    cs_startTimer: '',
	    sc_startTimer: '',
	    cs_pauseTimer: '',
	    sc_pauseTimer: '',
	    cs_showPickup: '',
	    sc_showPickup: '',
	    cs_startGame: '',
	    sc_startGame: '',
	    cs_commitGame: '',
	    sc_commitGame: '',
	    cs_commitTeam: '',
	    sc_commitTeam: '',
	    cs_toggleTimer: '',
	    sc_toggleTimer: '',
	    cs_setBlood: '',
	    sc_setBlood: '',
	    cs_setFoul: '',
	    sc_setFoul: '',
	    cs_setSt: '',
	    sc_setSt: '',
	    cs_hideSt: '',
	    sc_hideSt: '',
	    cs_ftBracketInfo: '',
	    sc_ftBracketInfo: '',
	    cs_showHeaderText: '',
	    sc_showHeaderText: '',
	    cs_5v5score: '',
	    sc_5v5score: '',
	    cs_5v5timeup: '',
	    sc_5v5timeup: '',
	    cs_5v5queter: '',
	    sc_5v5queter: '',
	    cs_5v5toggleTimer: '',
	    sc_5v5toggleTimer: '',
	    cs_5v5resetTimer: '',
	    sc_5v5resetTimer: '',
	    cs_5v5setPlayer: '',
	    sc_5v5setPlayer: '',
	    cs_5v5hidePlayer: '',
	    sc_5v5hidePlayer: '',
	    cs_5v5setTimeString: '',
	    sc_5v5setTimeString: '',
	    cs_toggleTheme: '',
	    sc_toggleTheme: '',
	    cs_showNotice: '',
	    sc_showNotice: '',
	    cs_showChampion: '',
	    sc_showChampion: '',
	    cs_toggleScorePanel: '',
	    sc_toggleScorePanel: '',
	    cs_toggleChampionPanel: '',
	    sc_toggleChampionPanel: '',
	    initPanel: '',
	    cs_inScreenScore: '',
	    inScreenScore: '',
	    cs_attack: '',
	    attack: '',
	    cs_addHealth: '',
	    addHealth: '',
	    fadeInOK: '',
	    cs_combo: '',
	    combo: ''
	};
	for (var k in exports.CommandId) {
	    exports.CommandId[k] = k;
	}


/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports = "<div class=\"box\" v-if='isOp' style=\"opacity:0.8;width:1000px;left:100px;top:50px\">\r\n    <div class=\"columns\">\r\n        <div class=\"column\">\r\n            <label class=\"label\">出场顺序</label>\r\n            <div class=\"columns\">\r\n                <div class=\"column\">\r\n                    <button class=\"button is-medium\" @click=\"onPickup(true)\">1P</button>\r\n                    <label class=\"label\" style=\"font-size:20px\">[{{gamePlayer1p.name}}]</label>\r\n                    <button class=\"button is-large\" @click=\"onSetBlood(true,-1)\"> -1</button>\r\n                    <button class=\"button is-large\" @click=\"onSetBlood(true,1)\">+1</button> {{orderArr1p|json}}\r\n                    <br>\r\n                    <button class=\"button is-medium\" @click=\"onSetFoul(true,-1)\">犯规 -1</button>\r\n                    <button class=\"button is-medium\" @click=\"onSetFoul(true,1)\">犯规 +1</button>\r\n                    <button class=\"button is-medium\" @click=\"onSetSt(true,-1)\">援助 -1</button>\r\n                    <button class=\"button is-medium\" @click=\"onSetSt(true,1)\">援助 +1</button>\r\n                    <br>\r\n                    <p v-for=\"player in orderPlayerDocArr1p\">\r\n                        <img :src=\"player.portrait\" style=\"width:40px\">\r\n                        <a style=\"font-size:20px\" @click=\"onStartPlayer(0,player)\"> {{player.id +' ' +player.name}} {{player.isDead?\"败\":\"\"}}</a>\r\n                    </p>\r\n                </div>\r\n                <div class=\"column\">\r\n                    <button class=\"button is-medium\" @click=\"onPickup(false)\">2P</button>\r\n                    <label class=\"label\" style=\"font-size:20px\">[{{gamePlayer2p.name}}]</label>\r\n                    <button class=\"button is-large\" @click=\"onSetBlood(false,-1)\"> -1</button>\r\n                    <button class=\"button is-large\" @click=\"onSetBlood(false,1)\"> +1</button>{{orderArr2p|json}}\r\n                    <br>\r\n                    <button class=\"button is-medium\" @click=\"onSetFoul(false,-1)\">犯规 -1</button>\r\n                    <button class=\"button is-medium\" @click=\"onSetFoul(false,1)\">犯规 +1</button>\r\n                    <button class=\"button is-medium\" @click=\"onSetSt(false,-1)\">援助 -1</button>\r\n                    <button class=\"button is-medium\" @click=\"onSetSt(false,1)\">援助 +1</button>\r\n                    <br>\r\n                    <p v-for=\"player in orderPlayerDocArr2p\">\r\n                        <img :src=\"player.portrait\" style=\"width:40px\">\r\n                        <a style=\"font-size:20px\" @click=\"onStartPlayer(1,player)\"> {{player.id +' ' +player.name}} {{player.isDead?\"败\":\"\"}} </a>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n\r\n            <p>\r\n                <div class=\"tabs is-boxed\">\r\n                    <ul>\r\n                        <li v-for=\"teamIdx in 8\"><a @click=\"onTabTeam($event,teamIdx)\">{{teamNameArr[teamIdx-1]}}</a></li>\r\n                    </ul>\r\n                </div>\r\n                <div v-for=\"player in playerDocArr\">\r\n                    <a class=\"box\" style=\"font-size:15px\" @click='onPickupPlayer(player)'> <img :src=\"player.portrait\" style=\"width:60px\"> {{player.id +' ' +player.name}}</a>\r\n                    <p>\r\n                </div>\r\n        </div>\r\n        <div class=\"column\">\r\n            <button class=\"button is-large\" @click=\"onShowPickup\">出阵</button>\r\n            <button class=\"button is-large\" @click=\"onStartGame(false)\">开始</button>\r\n            <button class=\"button is-large\" @click=\"onStartGame(true)\">开始 No fx</button>\r\n            <button class=\"button is-medium\" @click=\"onHideSt()\">援助 隐藏</button>\r\n            <p>\r\n                <button class=\"button is-large\" @click=\"onToggleTimer()\">Toggle</button>\r\n                <button class=\"button is-large\" @click=\"onResetTimer()\">Reset</button>\r\n                <p>\r\n                    <hr>\r\n                    <div class=\"control\">\r\n                        <label class=\"label\">Bracket场次</label>\r\n                        <input class=\"input\" id=\"bracketIdx\" type=\"text\" v-model='bracketIdx' style=\"width:50px\" />\r\n                        <button class=\"button \" @click=\"onCommitGame()\">单场结算</button>\r\n                    </div>\r\n                    <p class=\"control\">\r\n                        <label class=\"label\">蓝队比分-红队比分</label>\r\n                        <input class=\"input\" type=\"text\" v-model='bracketInfo' style=\"width:150px\" />\r\n                    </p>\r\n                    <button class=\"button is-large\" @click=\"onCommitTeam()\">战团结算</button>\r\n                    <hr>\r\n                    <button class=\"button is-large\" @click=\"onReloadDB()\">reload db</button>\r\n\r\n\r\n        </div>\r\n    </div>\r\n</div>";

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var HupuAPI_1 = __webpack_require__(22);
	var WebJsFunc_1 = __webpack_require__(23);
	var Command_1 = __webpack_require__(51);
	var Score5v5_1 = __webpack_require__(54);
	var BasePanelView_1 = __webpack_require__(34);
	var const_1 = __webpack_require__(33);
	var VueBase_1 = __webpack_require__(18);
	var Stage5v5 = (function (_super) {
	    __extends(Stage5v5, _super);
	    function Stage5v5() {
	        _super.call(this);
	        this.template = __webpack_require__(55);
	        this.isOp = VueBase_1.VueBase.PROP;
	        this.isMobile = VueBase_1.VueBase.PROP;
	        this.leftScore = VueBase_1.VueBase.PROP;
	        this.rightScore = VueBase_1.VueBase.PROP;
	        this.leftTimeup = VueBase_1.VueBase.PROP;
	        this.rightTimeup = VueBase_1.VueBase.PROP;
	        this.leftPlayerArr = VueBase_1.VueBase.PROP;
	        this.rightPlayerArr = VueBase_1.VueBase.PROP;
	        this.headerText = VueBase_1.VueBase.PROP;
	        this.timeString = VueBase_1.VueBase.PROP;
	        this.headerTextSec = VueBase_1.VueBase.PROP;
	        this.queter = VueBase_1.VueBase.PROP;
	        this.opReq = function (cmdId, param, callback) {
	            $.ajax({
	                url: "/panel/" + const_1.PanelId.onlinePanel + "/" + cmdId,
	                type: 'post',
	                data: JSON.stringify(param),
	                headers: { "Content-Type": "application/json" },
	                dataType: 'json',
	                success: callback
	            });
	        };
	        this.methods = {
	            onShowHeaderText: function (text, sec) {
	                this.opReq("" + Command_1.CommandId.cs_showHeaderText, {
	                    _: null,
	                    text: text, sec: Number(sec)
	                });
	            },
	            onTimeup: function (isLeft, t) {
	                console.log('timeup', t);
	                this.opReq("" + Command_1.CommandId.cs_5v5timeup, {
	                    _: null,
	                    isLeft: isLeft,
	                    timeup: t
	                });
	            },
	            onQueter: function (queter) {
	                this.opReq("" + Command_1.CommandId.cs_5v5queter, {
	                    _: null,
	                    queter: queter,
	                });
	            },
	            onToggleTimer: function (b) {
	                if (b < 0)
	                    this.opReq("" + Command_1.CommandId.cs_5v5toggleTimer, { _: null });
	                else
	                    this.opReq("" + Command_1.CommandId.cs_5v5toggleTimer, { _: null, isPause: Boolean(b) });
	            },
	            onResetTimer: function () {
	                this.opReq("" + Command_1.CommandId.cs_5v5resetTimer, { _: null });
	            },
	            onPlayer: function (isLeft, idOrArr, idx) {
	                var _this = this;
	                var u = function (playerId, isFx) {
	                    if (isFx === void 0) { isFx = false; }
	                    var playerDoc = _this.playerMap[playerId];
	                    if (playerDoc) {
	                        _this.opReq("" + Command_1.CommandId.cs_5v5setPlayer, {
	                            _: null,
	                            isLeft: isLeft,
	                            idx: idx,
	                            playerDoc: playerDoc, isFx: isFx
	                        });
	                    }
	                };
	                if (idx < 0) {
	                    for (var i = 0; i < idOrArr.length; i++) {
	                        var id = idOrArr[i];
	                        idx = i;
	                        u(id, i == (idOrArr.length - 1));
	                    }
	                }
	                else
	                    u(idOrArr);
	            },
	            onHidePlayer: function (isLeft) {
	                this.opReq("" + Command_1.CommandId.cs_5v5hidePlayer, {
	                    _: null,
	                    isLeft: isLeft,
	                });
	            },
	            onTimeString: function (time) {
	                this.opReq("" + Command_1.CommandId.cs_5v5setTimeString, {
	                    _: null,
	                    timeInSec: this.timeString,
	                });
	            },
	            onScore: function (isLeft, score) {
	                isLeft ? this.leftScore = Number(score)
	                    : this.rightScore = Number(score);
	                this.opReq("" + Command_1.CommandId.cs_5v5score, {
	                    _: null,
	                    isLeft: isLeft,
	                    score: score
	                });
	            }
	        };
	        VueBase_1.VueBase.initProps(this);
	    }
	    Stage5v5.prototype.initCanvas = function () {
	        this.panel = new Score5v5_1.Score5v5(BasePanelView_1.BasePanelView.initPixi());
	    };
	    Stage5v5.prototype.created = function () {
	        var _this = this;
	        this.leftScore = this.rightScore = 0;
	        this.leftPlayerArr = [0, 0, 0, 0, 0];
	        this.rightPlayerArr = [0, 0, 0, 0, 0];
	        this.initCanvas();
	        this.isOp = this.$route.params['op'] == 'op';
	        if (this.isOp) {
	            WebJsFunc_1.dynamicLoading.css('/css/bulma.min.css');
	        }
	        this.isMobile = this.$route.query['m'] == '1';
	        if (this.isMobile) {
	            this.panel.x = -600;
	        }
	        this.initIO();
	        var m = function (reqCmd, data) {
	            var on = function (resCmd, callback) {
	            };
	            return {
	                on: function (resCmd, callback) {
	                    return on;
	                }
	            };
	        };
	        HupuAPI_1.getPlayerDoc(function (playerDocArr) {
	            var pm = {};
	            for (var _i = 0, playerDocArr_1 = playerDocArr; _i < playerDocArr_1.length; _i++) {
	                var player = playerDocArr_1[_i];
	                pm[player.id] = player;
	            }
	            _this.playerMap = pm;
	        });
	    };
	    Stage5v5.prototype.initIO = function () {
	        var _this = this;
	        io.connect("/" + const_1.PanelId.rkbPanel)
	            .on("" + Command_1.CommandId.sc_showHeaderText, function (data) {
	            console.log("CommandId.sc_showHeaderText", data);
	            _this.panel.showText(data.text, data.sec);
	        })
	            .on("" + Command_1.CommandId.sc_5v5score, function (data) {
	            console.log("CommandId.sc_5v5score", data);
	            var isLeft = data.isLeft;
	            isLeft ? _this.panel.setLeftScore(data.score)
	                : _this.panel.setRightScore(data.score);
	        })
	            .on("" + Command_1.CommandId.sc_5v5timeup, function (data) {
	            console.log("CommandId.sc_5v5timeup", data);
	            var isLeft = data.isLeft;
	            var timeup = Number(data.timeup);
	            isLeft ? _this.panel.setLeftTimeup(timeup)
	                : _this.panel.setRightTimeup(timeup);
	        })
	            .on("" + Command_1.CommandId.sc_5v5queter, function (data) {
	            console.log("CommandId.sc_5v5queter", data);
	            _this.panel.setQueter(data.queter);
	        })
	            .on("" + Command_1.CommandId.sc_5v5toggleTimer, function (data) {
	            if (data.isPause == undefined)
	                _this.panel.timeText.toggleTimer();
	            else if (data.isPause)
	                _this.panel.timeText.toggleTimer(const_1.TimerState.PAUSE);
	            else
	                _this.panel.timeText.toggleTimer(const_1.TimerState.RUNNING);
	        })
	            .on("" + Command_1.CommandId.sc_5v5resetTimer, function (data) {
	            _this.panel.timeText.resetTimer();
	            _this.panel.timeText.setTimeBySec(12 * 60);
	        })
	            .on("" + Command_1.CommandId.sc_5v5setPlayer, function (data) {
	            console.log("CommandId.sc_5v5setPlayer", data);
	            _this.panel.setPlayer(data.isLeft, data.idx, data.playerDoc, data.isFx);
	        })
	            .on("" + Command_1.CommandId.sc_5v5hidePlayer, function (data) {
	            _this.panel.hidePlayer(data.isLeft);
	        })
	            .on("" + Command_1.CommandId.sc_5v5setTimeString, function (data) {
	            _this.panel.timeText.setTimeBySec(data.timeInSec);
	        });
	    };
	    return Stage5v5;
	}(VueBase_1.VueBase));
	exports.stage5v5 = new Stage5v5();


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var HupuAPI_1 = __webpack_require__(22);
	var JsFunc_1 = __webpack_require__(17);
	var TextTimer_1 = __webpack_require__(42);
	var SpriteGroup_1 = __webpack_require__(45);
	var const_1 = __webpack_require__(33);
	var TweenEx_1 = __webpack_require__(40);
	var PixiEx_1 = __webpack_require__(36);
	var Score5v5 = (function (_super) {
	    __extends(Score5v5, _super);
	    function Score5v5(parent) {
	        _super.call(this);
	        parent.addChild(this);
	        console.log('Score5v5');
	        var bx = 330, by = 900;
	        var scorePanel = new PIXI.Container();
	        scorePanel.x = bx;
	        scorePanel.y = by;
	        this.addChild(scorePanel);
	        this.header = PixiEx_1.newBitmap({ url: '/img/panel/5v5/bgHeader.png' });
	        this.header['y0'] = 0;
	        this.header['y1'] = -40;
	        scorePanel.addChild(this.header);
	        var msk = new PIXI.Graphics()
	            .beginFill(0xff0000)
	            .drawRect(0, 0, 1260, 45);
	        scorePanel.addChild(msk);
	        this.header.mask = msk;
	        var htStyle = {
	            fontFamily: const_1.FontName.MicrosoftYahei,
	            fontSize: '25px', fill: '#fff'
	        };
	        var ht = new PIXI.Text('', htStyle);
	        ht.x = 10;
	        ht.y = 48;
	        this.header.addChild(ht);
	        this.headerText = ht;
	        scorePanel.addChild(PixiEx_1.newBitmap({ url: '/img/panel/5v5/scoreBg.png' }));
	        var lt = new SpriteGroup_1.SpriteGroup({ invert: 77, count: 5, img: '/img/panel/5v5/foul.jpg' });
	        lt.x = 5;
	        lt.y = 103;
	        scorePanel.addChild(lt);
	        this.leftTimeup = lt;
	        var rt = new SpriteGroup_1.SpriteGroup({ invert: 77, count: 5, img: '/img/panel/5v5/foul.jpg' });
	        rt.x = 481;
	        rt.y = lt.y;
	        scorePanel.addChild(rt);
	        this.rightTimeup = rt;
	        var lp = new SpriteGroup_1.SpriteGroup({ dir: SpriteGroup_1.Direction.s, invert: 63, img: '/img/panel/5v5/playerBg.png', count: 5 });
	        lp.y = 320;
	        this.addChild(lp);
	        this.leftPlayer = lp;
	        var rp = new SpriteGroup_1.SpriteGroup({ dir: SpriteGroup_1.Direction.s, invert: 63, img: '/img/panel/5v5/playerBg.png', count: 5, flip: -1 });
	        rp.x = const_1.ViewConst.STAGE_WIDTH;
	        rp.y = lp.y;
	        this.rightPlayer = rp;
	        this.addChild(rp);
	        var whiteLogo = PixiEx_1.newBitmap({ url: '/img/ft/white.jpg' });
	        whiteLogo.y = 45;
	        whiteLogo.x = 5;
	        scorePanel.addChild(whiteLogo);
	        var blackLogo = PixiEx_1.newBitmap({ url: '/img/ft/black.jpg' });
	        blackLogo.y = whiteLogo.y;
	        blackLogo.x = 481;
	        scorePanel.addChild(blackLogo);
	        var ts = {
	            fontFamily: const_1.FontName.MicrosoftYahei,
	            fontSize: '35px', fill: '#fff'
	        };
	        var whiteText = new PIXI.Text('路人王全明星白', ts);
	        whiteText.x = 105;
	        whiteText.y = 49;
	        scorePanel.addChild(whiteText);
	        var blackText = new PIXI.Text('路人王全明星黑', ts);
	        blackText.x = 585;
	        blackText.y = whiteText.y;
	        scorePanel.addChild(blackText);
	        var ss = {
	            fontFamily: const_1.FontName.MicrosoftYahei,
	            fontSize: '43px', fill: '#fff',
	            fontWeight: 'bold'
	        };
	        var ls = new PIXI.Text('', ss);
	        ls.y = 46;
	        scorePanel.addChild(ls);
	        this.leftScore = ls;
	        this.setLeftScore(0);
	        var rs = new PIXI.Text('', ss);
	        rs.y = ls.y;
	        this.rightScore = rs;
	        scorePanel.addChild(rs);
	        this.setRightScore(0);
	        var qs = {
	            fontFamily: const_1.FontName.MicrosoftYahei,
	            fontSize: '25px', fill: '#bcbcbc'
	        };
	        var qt = new PIXI.Text('', qs);
	        qt.x = 985;
	        qt.y = 56;
	        this.queterText = qt;
	        scorePanel.addChild(qt);
	        this.setQueter(1);
	        var tts = {
	            fontFamily: const_1.FontName.MicrosoftYahei,
	            fontSize: '25px', fill: '#fff'
	        };
	        var tt = new TextTimer_1.TextTimer('', tts);
	        tt.isMin = true;
	        tt.y = 56;
	        tt.x = 1150;
	        tt.setTimeBySec(12 * 60);
	        this.timeText = tt;
	        scorePanel.addChild(tt);
	        this.hidePlayer(true);
	        this.hidePlayer(false);
	    }
	    Score5v5.prototype.setLeftScore = function (score) {
	        this.leftScore.text = String(score);
	        this.leftScore.x = 435 - this.leftScore.width * .5;
	    };
	    Score5v5.prototype.setRightScore = function (score) {
	        this.rightScore.text = String(score);
	        this.rightScore.x = 910 - this.rightScore.width * .5;
	    };
	    Score5v5.prototype.setLeftTimeup = function (score) {
	        this.leftTimeup.setNum(score);
	    };
	    Score5v5.prototype.setRightTimeup = function (score) {
	        this.rightTimeup.setNum(score);
	    };
	    Score5v5.prototype.test = function () {
	        var _this = this;
	        TweenEx_1.TweenEx.delayedCall(500, function () {
	            _this.showText('fsfsasasfasdadf', 5);
	        });
	    };
	    Score5v5.prototype.setQueter = function (queter) {
	        var qmap = { '1': '1ST', '2': '2ND', '3': '3RD', '4': '4TH' };
	        this.queterText.text = qmap[queter] + ' QTR';
	    };
	    Score5v5.prototype.showText = function (text, sec, isRoll) {
	        var _this = this;
	        this.headerText.text = text;
	        this.showHeader();
	        TweenEx_1.TweenEx.delayedCall(sec * 1000, function () {
	            _this.hideHeader();
	        });
	    };
	    Score5v5.prototype.showHeader = function (callback) {
	        TweenEx_1.TweenEx.to(this.header, 80, { y: this.header['y1'] }, callback);
	    };
	    Score5v5.prototype.hideHeader = function () {
	        TweenEx_1.TweenEx.to(this.header, 80, { y: this.header['y0'] });
	    };
	    Score5v5.prototype.setPlayer = function (isLeft, idx, playerDoc, isFx) {
	        var spArr;
	        var sp;
	        var flip = 1;
	        isLeft ? spArr = this.leftPlayer.spArr
	            : spArr = this.rightPlayer.spArr;
	        sp = spArr[idx];
	        var from;
	        var to;
	        if (isLeft) {
	            from = -301;
	        }
	        else {
	            from = 301;
	            flip = -1;
	        }
	        sp.removeChildren();
	        var avt = PixiEx_1.newBitmap({ url: HupuAPI_1._avatar(playerDoc.avatar) });
	        avt.x = 58;
	        avt.y = 2;
	        avt.scale.x = avt.scale.y = 56 / 120;
	        sp.addChild(avt);
	        var nt = new PIXI.Text(JsFunc_1.cnWrap(playerDoc.name, 30, 12));
	        nt.style.fill = '#fff';
	        nt.x = 205 - nt.width * .5 * flip;
	        nt.y = 12;
	        nt.scale.x = flip;
	        sp.addChild(nt);
	        var nbt = new PIXI.Text(playerDoc.number);
	        nbt.style.fill = '#fff';
	        nbt.style['fontSize'] = '36px';
	        nbt.style['fontWeight'] = 'bold';
	        nbt.x = 30 - nbt.width * .5 * flip;
	        nbt.y = 10;
	        nbt.scale.x = flip;
	        sp.addChild(nbt);
	        if (isFx)
	            for (var i = 0; i < spArr.length; i++) {
	                spArr[i].x = from;
	                new TweenEx_1.TweenEx(spArr[i])
	                    .delay(i * 30)
	                    .to({ x: 0 }, 100)
	                    .start();
	            }
	    };
	    Score5v5.prototype.hidePlayer = function (isLeft) {
	        var spArr;
	        var to;
	        isLeft ? spArr = this.leftPlayer.spArr
	            : spArr = this.rightPlayer.spArr;
	        isLeft ? to = -301
	            : to = 301;
	        for (var i = 0; i < spArr.length; i++) {
	            new TweenEx_1.TweenEx(spArr[i])
	                .delay(i * 30)
	                .to({ x: to }, 100)
	                .start();
	        }
	    };
	    return Score5v5;
	}(PIXI.Container));
	exports.Score5v5 = Score5v5;


/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = "<div class=\"box\" v-if='isOp' style=\"opacity:0.8;width:1000px;left:100px;top:50px\">\r\n    <div v-if='isMobile'>\r\n        <input class=\"input\" type=\"text\" v-model='timeString' @keyup.enter='onTimeString(timeString)' style=\"width: 450px;height:220px;\" />\r\n        <button class=\"button is-large\" @click=\"onTimeString(timeString)\" style=\"width: 450px;height:220px;font-size: 160px\">设置（秒）</button>\r\n        <br>\r\n        <button class=\"button is-large\" @click=\"onToggleTimer(1)\" style=\"width: 450px;height:220px;font-size: 160px\">暂停</button>\r\n        <button class=\"button is-large\" @click=\"onToggleTimer(0)\" style=\"width: 450px;height:220px;font-size: 160px\">开始</button>\r\n        <br>\r\n        <button class=\"button is-large\" @click=\"onResetTimer()\" style=\"width: 450px;height:220px;font-size: 160px\">Reset</button>\r\n    </div>\r\n    <div v-if='!isMobile'>\r\n        <label class=\"label\"> 滚动字幕： 秒      内容</label>\r\n        <label class=\"checkbox\">\r\n        <input type=\"checkbox\">\r\n        滚动\r\n     </label>\r\n        <input class=\"input\" type=\"text\" v-model='headerTextSec' style=\"width:50px\" />\r\n        <input class=\"input\" type=\"text\" v-model='headerText' @keyup.enter='onShowHeaderText(headerText,headerTextSec)' style=\"width:650px\" />\r\n        <label class=\"label\"> 小节：</label>\r\n        <input class=\"input\" type=\"text\" v-model='queter' @keyup.enter='onQueter(queter)' style=\"width:50px\" />\r\n        <label class=\"label\"> 比分：</label>\r\n        <div class=\"columns\">\r\n            <div class=\"column\">\r\n                <button class=\"button\" @click=\"onScore(true,leftScore-1)\"> -1</button>\r\n                <button class=\"button\" @click=\"onScore(true,leftScore-2)\"> -2</button>\r\n                <button class=\"button\" @click=\"onScore(true,leftScore-3)\"> -3</button>\r\n                <input class=\"input\" type=\"text\" v-model='leftScore' @keyup.enter='onScore(true,leftScore)' style=\"width:50px\" />\r\n                <button class=\"button\" @click=\"onScore(true,leftScore+1)\"> +1</button>\r\n                <button class=\"button\" @click=\"onScore(true,leftScore+2)\"> +2</button>\r\n                <button class=\"button\" @click=\"onScore(true,leftScore+3)\"> +3</button>\r\n            </div>\r\n            <div class=\"column\">\r\n                <button class=\"button\" @click=\"onScore(false,rightScore-1)\"> -1</button>\r\n                <button class=\"button\" @click=\"onScore(false,rightScore-2)\"> -2</button>\r\n                <button class=\"button\" @click=\"onScore(false,rightScore-3)\"> -3</button>\r\n                <input class=\"input\" type=\"text\" v-model='rightScore' @keyup.enter='onScore(false,rightScore)' style=\"width:50px\" />\r\n                <button class=\"button\" @click=\"onScore(false,rightScore+1)\"> +1</button>\r\n                <button class=\"button\" @click=\"onScore(false,rightScore+2)\"> +2</button>\r\n                <button class=\"button\" @click=\"onScore(false,rightScore+3)\"> +3</button>\r\n            </div>\r\n        </div>\r\n        <label class=\"label\">暂停：</label>\r\n        <div class=\"columns\">\r\n            <div class=\"column\">\r\n                <input class=\"input\" type=\"text\" v-model='leftTimeup' @keyup.enter='onTimeup(true,leftTimeup)' style=\"width:50px\" />\r\n            </div>\r\n            <div class=\"column\">\r\n                <input class=\"input\" type=\"text\" v-model='rightTimeup' @keyup.enter='onTimeup(false,rightTimeup)' style=\"width:50px\" />\r\n            </div>\r\n        </div>\r\n        <label class=\"label\">球员</label>\r\n        <div class=\"columns\">\r\n            <div class=\"column\">\r\n                <input v-for=\"_,index in leftPlayerArr\" class=\"input\" type=\"text\" v-model='leftPlayerArr[index]' @keyup.enter='onPlayer(true,leftPlayerArr[index],index)' style=\"width:40px\" />\r\n                <button class=\"button\" @click=\"onPlayer(true,leftPlayerArr,-1)\">set</button>\r\n                <button class=\"button\" @click=\"onHidePlayer(true)\">hide</button>\r\n            </div>\r\n            <div class=\"column\">\r\n                <input v-for=\"_,index in rightPlayerArr\" class=\"input\" type=\"text\" v-model='rightPlayerArr[index]' @keyup.enter='onPlayer(false,rightPlayerArr[index],index)' style=\"width:40px\" />\r\n                <button class=\"button\" @click=\"onPlayer(false,rightPlayerArr,-1)\">set</button>\r\n                <button class=\"button\" @click=\"onHidePlayer(false)\">hide</button>\r\n            </div>\r\n        </div>\r\n        <input class=\"input\" type=\"text\" v-model='timeString' @keyup.enter='onTimeString(timeString)' style=\"width:80px\" />\r\n        <button class=\"button is-large\" @click=\"onToggleTimer()\">Toggle</button>\r\n        <button class=\"button is-large\" @click=\"onResetTimer()\">Reset</button>\r\n    </div>\r\n</div>";

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Com2017_1 = __webpack_require__(66);
	var JsFunc_1 = __webpack_require__(17);
	var Command_1 = __webpack_require__(51);
	var const_1 = __webpack_require__(33);
	var VueBase_1 = __webpack_require__(18);
	var WebJsFunc_1 = __webpack_require__(23);
	var BasePanelView_1 = __webpack_require__(34);
	var BracketView_1 = __webpack_require__(57);
	var RankView_1 = __webpack_require__(60);
	var ScoreView_1 = __webpack_require__(64);
	var rankView;
	var bracketView;
	var scoreView;
	var canvasStage;
	var StageOnlineView = (function (_super) {
	    __extends(StageOnlineView, _super);
	    function StageOnlineView() {
	        _super.call(this);
	        this.template = __webpack_require__(73);
	        this.gameId = VueBase_1.VueBase.String;
	        this.isOp = VueBase_1.VueBase.PROP;
	        this.delayTime = VueBase_1.VueBase.PROP;
	        this.delayTimeShowOnly = VueBase_1.VueBase.PROP;
	        this.liveTime = VueBase_1.VueBase.PROP;
	        this.srvTime = 0;
	        this.isTimerRunning = false;
	        this.panelTime = VueBase_1.VueBase.PROP;
	        this.panelTime2Set = VueBase_1.VueBase.PROP;
	        this.lLiveScore = VueBase_1.VueBase.PROP;
	        this.lLiveFoul = VueBase_1.VueBase.PROP;
	        this.lLiveName = VueBase_1.VueBase.PROP;
	        this.rLiveScore = VueBase_1.VueBase.PROP;
	        this.rLiveFoul = VueBase_1.VueBase.PROP;
	        this.rLiveName = VueBase_1.VueBase.PROP;
	        this.championTitle = VueBase_1.VueBase.PROP;
	        this.noticeTitle = VueBase_1.VueBase.PROP;
	        this.noticeContent = VueBase_1.VueBase.PROP;
	        this.isBold = VueBase_1.VueBase.PROP;
	        this.opReq = function (cmdId, param, callback) {
	            $.ajax({
	                url: "/panel/" + const_1.PanelId.onlinePanel + "/" + cmdId,
	                type: 'post',
	                data: JSON.stringify(param),
	                headers: { "Content-Type": "application/json" },
	                dataType: 'json',
	                success: callback
	            });
	        };
	        this.methods = {
	            onClkHide: function () {
	                console.log('onClkHide');
	                this.opReq("" + Command_1.CommandId.cs_hideOnlinePanel, { _: null });
	            },
	            onClkRank: function () {
	                console.log('onClkRank');
	                this.opReq("" + Command_1.CommandId.cs_showRank, { _: null });
	            },
	            onClkStartTimer: function () {
	                console.log('onClkStartTimer');
	                this.opReq("" + Command_1.CommandId.cs_startTimer, { _: null });
	            },
	            onClkPauseTimer: function () {
	                this.opReq("" + Command_1.CommandId.cs_pauseTimer, { _: null });
	            },
	            onClkSetDelay: function () {
	                var _this = this;
	                console.log("onClkSetDelay", this, this.delayTime);
	                var dt = Number(this.delayTime);
	                if (dt >= 0) {
	                    this.delayTimeMS = dt * 1000;
	                    this.opReq("" + Command_1.CommandId.cs_setDelayTime, { delayTimeMS: this.delayTimeMS, _: null }, function () {
	                    });
	                    $.post("/online/delay/" + this.gameId + "/" + dt, function (res) {
	                        if (res) {
	                            _this.delayTimeShowOnly = dt;
	                        }
	                    });
	                }
	            },
	            onClkResetTimer: function () {
	                this.opReq("" + Command_1.CommandId.cs_resetTimer, { _: null });
	            },
	            onClkSetPanelTime: function (timeBySec) {
	                this.opReq("" + Command_1.CommandId.cs_setTimer, { _: null, time: Number(timeBySec) });
	            },
	            onClkLeftChampion: function () {
	                this.opReq("" + Command_1.CommandId.cs_showChampion, { _: null, isLeft: true, title: this.championTitle });
	            },
	            onClkRightChampion: function () {
	                this.opReq("" + Command_1.CommandId.cs_showChampion, { _: null, isLeft: false, title: this.championTitle });
	            },
	            onClkRegularPlayer: function () {
	            },
	            onClkShowScore: function (v) {
	                this.opReq("" + Command_1.CommandId.cs_toggleScorePanel, { _: null, visible: v });
	            },
	            onClkToggleChampionPanel: function (v) {
	                this.opReq("" + Command_1.CommandId.cs_toggleChampionPanel, { _: null, visible: v });
	            },
	            onClkRenderData: function () {
	                if (this.liveData)
	                    scoreView.setScoreFoul(this.liveData);
	            },
	            onClkNoticePresets: function (idx) {
	                var presets = { '1': Com2017_1.noticeJoin };
	                var preset = presets[idx];
	                if (preset) {
	                    this.noticeContent = preset.content;
	                    this.noticeTitle = preset.title;
	                }
	            },
	            onClkNotice: function (visible, isLeft) {
	                if (this.noticeContent)
	                    this.opReq("" + Command_1.CommandId.cs_showNotice, { _: null, title: this.noticeTitle, content: this.noticeContent, isLeft: isLeft, visible: visible, isBold: this.isBold });
	            },
	            onClkToggleTheme: function (isDark) {
	                this.opReq("" + Command_1.CommandId.cs_toggleTheme, { _: null, isDark: isDark });
	            },
	            onClkBracket: function () {
	                this.opReq("" + Command_1.CommandId.cs_showBracket, { _: null });
	            }
	        };
	        VueBase_1.VueBase.initProps(this);
	    }
	    StageOnlineView.prototype.created = function () {
	        this.basePanelArr = [];
	        this.isOp = this.$route.params.op == "op";
	        this.gameId = this.$route.params.game_id;
	        if (this.isOp) {
	            WebJsFunc_1.dynamicLoading.css('/css/bulma.min.css');
	        }
	        console.log('stageOnlineView created!');
	    };
	    StageOnlineView.prototype.mounted = function () {
	        canvasStage = BasePanelView_1.BasePanelView.initPixi();
	        var panel = this.$route.query['panel'];
	        if (panel == "bracket") {
	            this.showBracket();
	        }
	        else if (panel == "score") {
	            this.showScore();
	        }
	        else {
	            this.showRank();
	        }
	        console.log('StageOnlineView mounted!');
	    };
	    StageOnlineView.prototype.initIO = function () {
	        var _this = this;
	        var localWs = io.connect("/" + const_1.PanelId.rkbPanel);
	        localWs.on('connect', function (msg) {
	            console.log('connect', window.location.host);
	        })
	            .on("" + Command_1.CommandId.sc_showBracket, function (data) {
	            console.log("CommandId.sc_showBracket", data);
	            _this.showBracket();
	        })
	            .on("" + Command_1.CommandId.sc_hideOnlinePanel, function (data) {
	            _this.showOnly("");
	        });
	    };
	    StageOnlineView.prototype.showRank = function () {
	        if (!rankView) {
	            rankView = new RankView_1.RankView(this, canvasStage);
	            rankView.reqRank(this.gameId);
	            this.basePanelArr.push(rankView);
	        }
	        rankView.reqRank(this.gameId);
	        this.showOnly(rankView.name);
	    };
	    StageOnlineView.prototype.showBracket = function () {
	        console.log('onClkBracket');
	        if (!bracketView) {
	            bracketView = new BracketView_1.BracketView(canvasStage, this.gameId);
	            this.basePanelArr.push(bracketView);
	        }
	        this.showOnly(bracketView.name);
	    };
	    StageOnlineView.prototype._setLiveData = function (data) {
	        if (data == null)
	            data = {
	                leftFoul: 0,
	                rightFoul: 0,
	                leftScore: 0,
	                rightScore: 0
	            };
	        if (data.leftScore != null) {
	            this.lLiveScore = data.leftScore;
	        }
	        if (data.rightScore != null) {
	            this.rLiveScore = data.rightScore;
	        }
	        if (data.rightFoul != null) {
	            this.rLiveFoul = data.rightFoul;
	        }
	        if (data.leftFoul != null) {
	            this.lLiveFoul = data.leftFoul;
	        }
	        this.liveData = data;
	    };
	    StageOnlineView.prototype._setPlayer = function (lPlayer, rPlayer) {
	        this.lLiveName = lPlayer;
	        this.rLiveName = rPlayer;
	    };
	    StageOnlineView.prototype.showScore = function () {
	        var _this = this;
	        if (!scoreView) {
	            scoreView = new ScoreView_1.ScoreView(canvasStage, this.$route);
	            if (this.isOp) {
	                this.isBold = 'normal';
	                scoreView.on('init', function (data) {
	                    _this.setSrvTime(data.t);
	                    _this.liveTime = JsFunc_1.DateFormat(new Date(_this.srvTime), "hh:mm:ss");
	                    _this.delayTimeShowOnly = data.delayTimeMS / 1000;
	                    var d = {
	                        leftFoul: data.player.left.leftFoul,
	                        rightFoul: data.player.right.rightFoul,
	                        leftScore: data.player.left.leftScore,
	                        rightScore: data.player.right.rightScore
	                    };
	                    _this._setLiveData(d);
	                    _this._setPlayer(data.player.left.name, data.player.right.name);
	                });
	                scoreView.on('updateScore', function (data) {
	                    _this._setLiveData(data);
	                });
	                scoreView.on('commitGame', function (data) {
	                    _this._setLiveData();
	                });
	                scoreView.on('startGame', function (data) {
	                    _this._setPlayer(data.player.left.name, data.player.right.name);
	                });
	            }
	            this.basePanelArr.push(scoreView);
	        }
	        this.showOnly(scoreView.name);
	    };
	    StageOnlineView.prototype.getView = function (bpName) {
	        for (var i = 0; i < this.basePanelArr.length; i++) {
	            var bp = this.basePanelArr[i];
	            if (bpName == bp.name)
	                return bp;
	        }
	    };
	    StageOnlineView.prototype.showOnly = function (bpName) {
	        var showBp;
	        for (var i = 0; i < this.basePanelArr.length; i++) {
	            var bp = this.basePanelArr[i];
	            if (bpName != bp.name)
	                bp.hide();
	            else
	                showBp = bp;
	        }
	        if (showBp)
	            showBp.show();
	    };
	    StageOnlineView.prototype.onTick = function () {
	        console.log("onTick");
	        this.srvTime += 1000;
	        this.liveTime = JsFunc_1.DateFormat(new Date(this.srvTime), "hh:mm:ss");
	        this.panelTime = JsFunc_1.DateFormat(new Date(this.srvTime - this.getView('score').delayTimeMS), "hh:mm:ss");
	    };
	    StageOnlineView.prototype.setSrvTime = function (t) {
	        var _this = this;
	        console.log("isRunning:", this.isTimerRunning, this.onTick, t);
	        this.srvTime = t;
	        if (!this.isTimerRunning) {
	            this.isTimerRunning = true;
	            setInterval(function () {
	                _this.onTick();
	            }, 1000);
	        }
	    };
	    return StageOnlineView;
	}(VueBase_1.VueBase));
	exports.stageOnlineView = new StageOnlineView();


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Bracket2017_1 = __webpack_require__(58);
	var HupuAPI_1 = __webpack_require__(22);
	var BasePanelView_1 = __webpack_require__(34);
	var const_1 = __webpack_require__(33);
	var BracketGroup_1 = __webpack_require__(59);
	var BracketView = (function (_super) {
	    __extends(BracketView, _super);
	    function BracketView(stage, gameId) {
	        _super.call(this, const_1.PanelId.onlinePanel);
	        this.name = const_1.PanelId.bracketPanel;
	        console.log("new bracket");
	        this.bracket = new Bracket2017_1.Bracket2017(stage);
	        this.initAuto(Number(gameId));
	        this.initBg();
	    }
	    BracketView.prototype.initBg = function () {
	    };
	    BracketView.prototype.showComingIdx = function (idx) {
	        this.bracket.showComingIdx(idx);
	    };
	    BracketView.prototype.hide = function () {
	    };
	    BracketView.prototype.show = function () {
	    };
	    BracketView.prototype.getFtBracketInfo = function () {
	        $.ajax({
	            url: "/panel/" + const_1.PanelId.onlinePanel + "/cs_ftBracketInfo",
	            type: 'post',
	            data: JSON.stringify({}),
	            headers: { "Content-Type": "application/json" },
	            dataType: 'json',
	        });
	        console.log('connected local /rkb');
	    };
	    BracketView.prototype.initAuto = function (gameId) {
	        var _this = this;
	        var conWs = function (url) {
	            var remoteIO = io.connect(url);
	            remoteIO.on('connect', function () {
	                if (gameId) {
	                    console.log('hupuAuto socket connected GameId', gameId);
	                    remoteIO.emit('passerbyking', {
	                        game_id: gameId,
	                        page: 'top8Map'
	                    });
	                }
	                else {
	                    _this.getFtBracketInfo();
	                    console.log('connected local /rkb');
	                }
	            });
	            var eventMap = {};
	            eventMap['top8Match'] = function (data) {
	                console.log('top8Match', data);
	                data.data = data.list;
	                _this.onBracketData(data);
	            };
	            eventMap['startGame'] = function (data) {
	            };
	            eventMap['updateScore'] = function (data) {
	                _this.bracket.hideComing();
	            };
	            remoteIO.on('wall', function (data) {
	                var event = data.et;
	                console.log('event:', event, data);
	                if (eventMap[event])
	                    eventMap[event](data);
	            });
	            var onData = function (data) {
	                var event = data.et;
	                if (eventMap[event])
	                    eventMap[event](data);
	            };
	        };
	        if (gameId)
	            HupuAPI_1.getHupuWS(function (hupuWsUrl) {
	                conWs(hupuWsUrl);
	            });
	        else {
	            conWs('/rkb');
	        }
	    };
	    BracketView.prototype.onBracketData = function (res) {
	        var closeGame = {};
	        var s = { font: '25px', fill: '#e1e1e1', align: 'right', fontFamily: const_1.FontName.MicrosoftYahei };
	        console.log('onBracketData', res.data);
	        for (var gameIdx in res.data) {
	            var dataObj = res.data[gameIdx];
	            var group1 = BracketGroup_1.groupPosMap[gameIdx];
	            group1.idx = Number(gameIdx);
	            if (Number(dataObj.left.score) || Number(dataObj.right.score)) {
	                if (dataObj.left.score > dataObj.right.score)
	                    this.bracket.setWinHint(group1.hint1, true);
	                else
	                    this.bracket.setWinHint(group1.hint2);
	                closeGame[gameIdx] = true;
	            }
	            if (dataObj.left.name) {
	                group1.labels[0].style = s;
	            }
	            if (dataObj.right.name) {
	                group1.labels[1].style = s;
	            }
	            var hints = group1.hints;
	            group1.labels[0].text = dataObj.left.name || (hints ? hints[0] : '');
	            BracketGroup_1.fitWidth(group1.labels[0], 160, 25);
	            group1.scores[0].text = dataObj.left.score || "0";
	            group1.labels[1].text = dataObj.right.name || (hints ? hints[1] : '');
	            BracketGroup_1.fitWidth(group1.labels[1], 160, 25);
	            group1.scores[1].text = dataObj.right.score || "0";
	        }
	        var comingIdx = 1;
	        for (var i = 0; i < 14; i++) {
	            var isClose = closeGame[14 - i];
	            if (isClose) {
	                comingIdx = 14 - i + 1;
	                break;
	            }
	        }
	        this.showComingIdx(comingIdx);
	    };
	    return BracketView;
	}(BasePanelView_1.BasePanelView));
	exports.BracketView = BracketView;


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var JsFunc_1 = __webpack_require__(17);
	var BracketGroup_1 = __webpack_require__(59);
	var TweenEx_1 = __webpack_require__(40);
	var Fx_1 = __webpack_require__(46);
	var const_1 = __webpack_require__(33);
	var PixiEx_1 = __webpack_require__(36);
	var Bracket2017 = (function (_super) {
	    __extends(Bracket2017, _super);
	    function Bracket2017(parent) {
	        var _this = this;
	        _super.call(this);
	        parent.addChild(this);
	        var bg = PixiEx_1.newBitmap({
	            url: "/img/panel/bracket/tile2.png",
	            isTiling: true,
	            width: const_1.ViewConst.STAGE_WIDTH,
	            height: const_1.ViewConst.STAGE_HEIGHT
	        });
	        bg.alpha = 0.8;
	        this.addChild(bg);
	        var hintCtn = new PIXI.Container();
	        this.addChild(hintCtn);
	        var frame = PixiEx_1.newBitmap({
	            url: '/img/panel/bracket/bg1.png'
	        });
	        this.addChild(frame);
	        this.comingTitle = PixiEx_1.newBitmap({ url: '/img/panel/bracket/coming.png' });
	        this.comingTitle.visible = false;
	        this.addChild(this.comingTitle);
	        for (var idx in BracketGroup_1.groupPosMap) {
	            var ctn = new PIXI.Container();
	            this.addChild(ctn);
	            var g = BracketGroup_1.groupPosMap[idx];
	            console.log(g);
	            ctn.x = g.x;
	            ctn.y = g.y;
	            var h1 = new PIXI.Sprite();
	            h1.x = g.x + 170;
	            h1.y = g.y + 50;
	            h1.scale.y = -1;
	            hintCtn.addChild(h1);
	            g.hint1 = h1;
	            var h2 = new PIXI.Sprite();
	            h2.x = h1.x;
	            h2.y = g.y + 49;
	            hintCtn.addChild(h2);
	            g.hint2 = h2;
	            ctn.addChild(g.scores[0]);
	            ctn.addChild(g.scores[1]);
	            ctn.addChild(g.labels[0]);
	            ctn.addChild(g.labels[1]);
	        }
	        JsFunc_1.loadImgArr(['/img/panel/bracket/hint1.png', '/img/panel/bracket/hint2.png'], function (img) {
	            var tex = PixiEx_1.imgToTex(img[0]);
	            _this.hint1Tex = tex;
	            _this.hint2Tex = PixiEx_1.imgToTex(img[1]);
	            console.log('load tex', hintCtn.children);
	            for (var _i = 0, _a = hintCtn.children; _i < _a.length; _i++) {
	                var c = _a[_i];
	                c.texture = tex;
	            }
	        });
	    }
	    Bracket2017.prototype.setWinHint = function (sp, isFlip) {
	        if (isFlip === void 0) { isFlip = false; }
	        sp.texture = this.hint2Tex;
	    };
	    Bracket2017.prototype.hideComing = function () {
	        this.comingTitle.visible = false;
	    };
	    Bracket2017.prototype.showComingIdx = function (idx) {
	        var _this = this;
	        var g = BracketGroup_1.groupPosMap[idx];
	        this.comingTitle.visible = false;
	        TweenEx_1.TweenEx.delayedCall(610, function () {
	            if (g) {
	                _this.comingTitle.visible = true;
	                _this.comingTitle.x = g.x - 38;
	                _this.comingTitle.y = g.y - 43;
	                Fx_1.blink2({ target: _this.comingTitle, time: 600 });
	            }
	        });
	    };
	    return Bracket2017;
	}(PIXI.Container));
	exports.Bracket2017 = Bracket2017;


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var const_1 = __webpack_require__(33);
	function _mkGroup(parameters) {
	    var x = parameters.x;
	    var y = parameters.y;
	    var hints = parameters.hints ? parameters.hints : ['', ''];
	    var s = { font: '25px', fill: '#fff', align: 'right' };
	    var s1 = new PIXI.Text('', s);
	    s1.y = 8;
	    var s2 = new PIXI.Text('', s);
	    s2.y = 8 + 53;
	    s1.x = s2.x = 188;
	    var ps = { fontSize: '25px', fontFamily: const_1.FontName.MicrosoftYahei, fontWeight: 'bold' };
	    var p1 = new PIXI.Text("", ps);
	    p1.x = 3;
	    p1.y = 8;
	    var p2 = new PIXI.Text("", ps);
	    p2.x = p1.x;
	    p2.y = p1.y + 50;
	    return {
	        x: x, y: y, labels: [p1, p2], hints: hints,
	        winIdx: -1,
	        scores: [s1, s2]
	    };
	}
	function fitWidth(label, width, size) {
	    console.log(label.width, width);
	    if (label.width > width) {
	        label.style.font = size + 'px';
	        label.style['fontFamily'] = const_1.FontName.MicrosoftYahei;
	        fitWidth(label, width, size - 1);
	    }
	}
	exports.fitWidth = fitWidth;
	exports.groupPosMap = {
	    "1": _mkGroup({ x: 320, y: 91, hints: ['1号种子 ', "8号种子 "] }),
	    "2": _mkGroup({ x: 320, y: 95 + 137, hints: ['4号种子 ', "5号种子 "] }),
	    "3": _mkGroup({ x: 320, y: 95 + 145 * 2 + 18, hints: ['2号种子 ', "7号种子 "] }),
	    "4": _mkGroup({ x: 320, y: 95 + 145 * 3 + 14, hints: ['3号种子 ', "6号种子 "] }),
	    "5": _mkGroup({ x: 320, y: 806, hints: ['第1场败者 ', "第2场败者 "] }),
	    "6": _mkGroup({ x: 320, y: 805 + 142, hints: ['第3场败者 ', "第4场败者 "] }),
	    "7": _mkGroup({ x: 671, y: 162 }),
	    "8": _mkGroup({ x: 671, y: 476 }),
	    "9": _mkGroup({ x: 664, y: 893, hints: ['第7场败者 ', ""] }),
	    "10": _mkGroup({ x: 664, y: 751, hints: ['第8场败者 ', ""] }),
	    "11": _mkGroup({ x: 1067, y: 319 }),
	    "12": _mkGroup({ x: 1020, y: 825 }),
	    "13": _mkGroup({ x: 1366, y: 770, hints: ['第11场败者 ', ""] }),
	    "14": _mkGroup({ x: 1463, y: 396, hints: ['', "第13场胜者 "] }),
	};
	var BracketGroup = (function () {
	    function BracketGroup(idx) {
	        this.idx = idx;
	        this.playerArr = [new PlayerSvg, new PlayerSvg];
	    }
	    return BracketGroup;
	}());
	exports.BracketGroup = BracketGroup;
	var PlayerSvg = (function () {
	    function PlayerSvg() {
	        this.isHint = false;
	        this.isWin = false;
	        this.score = 0;
	    }
	    return PlayerSvg;
	}());
	exports.PlayerSvg = PlayerSvg;


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var PlayerInfo_1 = __webpack_require__(61);
	var BasePanelView_1 = __webpack_require__(34);
	var const_1 = __webpack_require__(33);
	var FTInfo_1 = __webpack_require__(63);
	var PixiEx_1 = __webpack_require__(36);
	var JsFunc_1 = __webpack_require__(17);
	var RankView = (function (_super) {
	    __extends(RankView, _super);
	    function RankView($opView, stage) {
	        _super.call(this, const_1.PanelId.onlinePanel);
	        this.name = const_1.PanelId.rankPanel;
	        this.$opView = $opView;
	        this.ctn = new PIXI.Container();
	        stage.addChild(this.ctn);
	        this.stage = stage;
	        console.log('new rankView');
	    }
	    RankView.prototype.reqRank = function (gameId) {
	        var _this = this;
	        var game_id = gameId;
	        console.log('get /api/passerbyking/game/players/', game_id);
	        var api1 = 'http://api.liangle.com/api/passerbyking/game/rank/' + game_id;
	        $.get('/proxy?url=' + api1, function (respone) {
	            var mixRankData = respone.data;
	            var rankPlayerDocArr = [];
	            for (var i = 0; i < mixRankData.player_rank.length; i++) {
	                var player_rank = mixRankData.player_rank[i];
	                var rankPlayerDoc = new PlayerInfo_1.PlayerDoc();
	                rankPlayerDoc.name = player_rank.name;
	                rankPlayerDoc.avatar = player_rank.avatar;
	                rankPlayerDoc['ftName'] = player_rank.group;
	                rankPlayerDoc.curFtScore = player_rank.score;
	                rankPlayerDoc.ftScore = player_rank.total_score;
	                rankPlayerDocArr.push(rankPlayerDoc);
	            }
	            var rankFtDocArr = [];
	            for (var j = 0; j < mixRankData.group_rank.length; j++) {
	                var group_rank = mixRankData.group_rank[j];
	                var ftDoc = new FTInfo_1.FTInfo();
	                ftDoc.name = group_rank.name;
	                ftDoc.fullName = group_rank.full_name;
	                ftDoc.logo = group_rank.logo;
	                ftDoc.curScore = group_rank.score;
	                ftDoc.score = group_rank.total_score;
	                rankFtDocArr.push(ftDoc);
	            }
	            _this.fadeInMixRank({
	                totalFtDocArr: rankFtDocArr,
	                totalPlayerDocArr: rankPlayerDocArr,
	                gameId: game_id,
	                auto: true
	            });
	        });
	    };
	    RankView.getPlayerItem = function (playerDoc, ftMap, rank12) {
	        var ctn = new PIXI.Container();
	        var avatar = PixiEx_1.newBitmap({
	            url: playerDoc.avatar, isCrossOrigin: true, callback: function () {
	                var bfWidth = avatar.width;
	                avatar.y = 18;
	                avatar.scale.x = avatar.scale.y = 119 / avatar.height;
	                avatar.x = 18 + (130 - bfWidth * avatar.scale.x) / 2;
	            }
	        });
	        var m = new PIXI.Graphics();
	        m.beginFill(0xff0000);
	        m.drawRect(0, 0, 130, 130);
	        m.x = m.y = 18;
	        ctn.addChild(m);
	        avatar.mask = m;
	        ctn.addChild(avatar);
	        if (rank12) {
	            var icon = PixiEx_1.newBitmap({ url: '/img/panel/stage1v1/ft/rank' + rank12 + '.png' });
	            icon.x = -20;
	            icon.y = -30;
	            ctn.addChild(icon);
	        }
	        var style = {
	            fontFamily: const_1.FontName.MicrosoftYahei,
	            fontSize: '40px',
	            fontStyle: 'normal',
	            fontWeight: 'bold',
	            fill: '#F7EDCA',
	            stroke: '#4a1850',
	            strokeThickness: 5,
	            dropShadow: false,
	            dropShadowColor: '#000000',
	            dropShadowAngle: Math.PI / 6,
	            dropShadowDistance: 6,
	            wordWrap: true,
	            wordWrapWidth: 500
	        };
	        var nameText = new PIXI.Text(playerDoc.name, style);
	        nameText.x = 160;
	        nameText.y = 30;
	        ctn.addChild(nameText);
	        var ftName;
	        if (playerDoc['ftName']) {
	            ftName = playerDoc['ftName'];
	        }
	        else {
	            var ftInfo = ftMap[playerDoc.ftId];
	            ftName = ftInfo ? ftInfo.name : '无';
	        }
	        style.fontSize = '22px';
	        style.dropShadow = true;
	        style.fontStyle = 'italic';
	        var ftText = new PIXI.Text(ftName + ' ', style);
	        ftText.x = 268;
	        ftText.y = 90;
	        ctn.addChild(ftText);
	        var curScoreText = new PIXI.Text(String(playerDoc.curFtScore ? playerDoc.curFtScore : 0), {
	            align: 'right',
	            fill: '#ffffff'
	        });
	        curScoreText.style.font.fontsize(22);
	        curScoreText.style.align = "right";
	        curScoreText.x = 620;
	        curScoreText.y = 90;
	        ctn.addChild(curScoreText);
	        curScoreText.updateText();
	        var totalScoreText = new PIXI.Text(String(playerDoc.ftScore ? playerDoc.ftScore : 0), {
	            align: 'right',
	            fill: '#ffffff'
	        });
	        totalScoreText.style.font.fontsize(22);
	        totalScoreText.style.align = "right";
	        totalScoreText.x = 770;
	        totalScoreText.y = 90;
	        ctn.addChild(totalScoreText);
	        return ctn;
	    };
	    ;
	    RankView.prototype.hide = function () {
	        this.ctn.visible = false;
	    };
	    RankView.prototype.show = function () {
	        this.ctn.visible = true;
	    };
	    RankView.getFtItem = function (ftDoc, rank12) {
	        var ctn = new PIXI.Container();
	        var itemBg = PixiEx_1.newBitmap({ url: '/img/panel/stage1v1/ft/ftRankTeam.jpg' });
	        ctn.addChild(itemBg);
	        var logo = PixiEx_1.newBitmap({ url: ftDoc.logo, isCrossOrigin: true });
	        logo.x = 18;
	        logo.y = 18;
	        ctn.addChild(logo);
	        if (rank12) {
	            var icon = PixiEx_1.newBitmap({ url: '/img/panel/stage1v1/ft/rank' + rank12 + '.png' });
	            icon.x = -20;
	            icon.y = -30;
	            ctn.addChild(icon);
	        }
	        var s = {
	            font: 'bold 40px Arial',
	            align: 'right',
	            fill: '#ffffff'
	        };
	        var nameText = new PIXI.Text(ftDoc.name, s);
	        nameText.x = 160;
	        nameText.y = 40;
	        ctn.addChild(nameText);
	        s.font = 'bold 22px Arial';
	        var ftIntroText = new PIXI.Text(ftDoc.fullName + '', s);
	        ftIntroText.x = 160;
	        ftIntroText.y = 90;
	        ctn.addChild(ftIntroText);
	        var curScoreText = new PIXI.Text((ftDoc.curScore ? ftDoc.curScore : 0) + '', s);
	        curScoreText.textAlign = 'right';
	        curScoreText.x = 620;
	        curScoreText.y = 95;
	        ctn.addChild(curScoreText);
	        var totalScoreText = new PIXI.Text((ftDoc.score ? ftDoc.score : 0) + '', s);
	        totalScoreText.textAlign = 'right';
	        totalScoreText.x = 780;
	        totalScoreText.y = 95;
	        ctn.addChild(totalScoreText);
	        return ctn;
	    };
	    RankView.prototype.fadeInMixRank = function (param) {
	        this.ctn.addChild(PixiEx_1.newBitmap({ url: '/img/panel/stage1v1/ft/ftRankBg2.jpg' }));
	        for (var i = 0; i < 5; i++) {
	            var curItem = RankView.getPlayerItem(param.totalPlayerDocArr[i], param.ftMap, (i == 0 || i == 1 ? i + 1 : null));
	            curItem.x = 45;
	            curItem.y = 140 + i * 185;
	            var itemBg = PixiEx_1.newBitmap({ url: '/img/panel/stage1v1/ft/ftRankPlayer.jpg' });
	            curItem.addChildAt(itemBg, 0);
	            this.ctn.addChild(curItem);
	            if (param.totalFtDocArr[i]) {
	                var totalItem = RankView.getFtItem(param.totalFtDocArr[i], (i == 0 || i == 1 ? i + 1 : null));
	                totalItem.x = 1005;
	                totalItem.y = curItem.y;
	                this.ctn.addChild(totalItem);
	            }
	        }
	        var imgArr = [];
	        imgArr.push({ name: 'itemBg', url: '/img/panel/stage1v1/ft/ftRankPlayer.jpg' });
	        JsFunc_1.loadImgArr(imgArr, function (imgCol) {
	            console.log('load img', imgCol);
	        });
	    };
	    return RankView;
	}(BasePanelView_1.BasePanelView));
	exports.RankView = RankView;


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var BaseInfo_1 = __webpack_require__(62);
	var PlayerDoc = (function () {
	    function PlayerDoc() {
	        this.id = 0;
	        this.name = '';
	        this.phone = 0;
	        this.eloScore = 0;
	        this.style = 0;
	        this.avatar = "";
	        this.height = 0;
	        this.weight = 0;
	        this.dtScore = 0;
	        this.activityId = 0;
	        this.gameRec = [];
	        this.loseGameCount = 0;
	        this.winGameCount = 0;
	        this.ftId = 0;
	        this.ftScore = 0;
	        this.playerNum = 0;
	        this.curFtScore = 0;
	        this.location = '上海';
	    }
	    return PlayerDoc;
	}());
	exports.PlayerDoc = PlayerDoc;
	exports.PlayerState1v1 = {
	    FIGHTING: ' ',
	    PIGEON: '鸽子',
	    WAITING: '  ',
	    Dead: '淘汰'
	};
	var PlayerInfo = (function (_super) {
	    __extends(PlayerInfo, _super);
	    function PlayerInfo(playerData) {
	        _super.call(this);
	        this.playerData = new PlayerDoc();
	        this.isRed = true;
	        this.isMvp = false;
	        this.backNumber = 0;
	        if (playerData) {
	            if (playerData['playerData'] != null) {
	                this.playerData = BaseInfo_1.obj2Class(playerData.playerData, PlayerDoc);
	                this.setPlayerInfoFromData(playerData);
	            }
	            else {
	                this.playerData = BaseInfo_1.obj2Class(playerData, PlayerDoc);
	                this.setPlayerInfoFromData(playerData);
	            }
	        }
	    }
	    PlayerInfo.prototype.setPlayerInfoFromData = function (data) {
	        if (data['isRed'] != null)
	            this.isRed = data.isRed;
	        if (data['isMvp'] != null)
	            this.isMvp = data.isMvp;
	        if (data['backNumber'] != null)
	            this.backNumber = data.backNumber;
	    };
	    PlayerInfo.prototype.getPlayerData = function () {
	        this.playerData['isRed'] = this.isRed;
	        this.playerData['isMvp'] = this.isMvp;
	        this.playerData['backNumber'] = this.backNumber;
	        return this.playerData;
	    };
	    PlayerInfo.prototype.id = function (val) {
	        return BaseInfo_1.prop(this.playerData, "id", val);
	    };
	    PlayerInfo.prototype.phone = function (val) {
	        return BaseInfo_1.prop(this.playerData, "phone", val);
	    };
	    PlayerInfo.prototype.name = function (val) {
	        return BaseInfo_1.prop(this.playerData, "name", val);
	    };
	    PlayerInfo.prototype.activityId = function (val) {
	        return BaseInfo_1.prop(this.playerData, "activityId", val);
	    };
	    PlayerInfo.prototype.eloScore = function (val) {
	        return BaseInfo_1.prop(this.playerData, "eloScore", val);
	    };
	    PlayerInfo.prototype.dtScore = function (val) {
	        return BaseInfo_1.prop(this.playerData, "dtScore", val);
	    };
	    PlayerInfo.prototype.style = function (val) {
	        return BaseInfo_1.prop(this.playerData, "style", val);
	    };
	    PlayerInfo.prototype.avatar = function (val) {
	        return BaseInfo_1.prop(this.playerData, "avatar", val);
	    };
	    PlayerInfo.prototype.gameRec = function (val) {
	        return BaseInfo_1.prop(this.playerData, "gameRec", val);
	    };
	    PlayerInfo.winPercent = function (playerDoc) {
	        var p = playerDoc.winGameCount / PlayerInfo.gameCount(playerDoc);
	        if (!p)
	            p = 0;
	        return p;
	    };
	    PlayerInfo.winPercentStr = function (playerDoc) {
	        return (PlayerInfo.winPercent(playerDoc) * 100).toFixed(1) + "%";
	    };
	    PlayerInfo.weight = function (playerDoc) {
	        return playerDoc.weight || playerDoc.playerData.weight;
	    };
	    PlayerInfo.height = function (playerDoc) {
	        return playerDoc.height || playerDoc.playerData.height;
	    };
	    PlayerInfo.intro = function (playerDoc) {
	        return playerDoc.intro || playerDoc.playerData.intro;
	    };
	    PlayerInfo.prototype.winpercent = function (val) {
	        return this.winGameCount() / this.gameCount();
	    };
	    PlayerInfo.gameCount = function (playerDoc) {
	        return (playerDoc.loseGameCount + playerDoc.winGameCount) || 0;
	    };
	    PlayerInfo.addWinGameAmount = function (playerDoc) {
	        playerDoc.winGameCount++;
	        return playerDoc.winGameCount;
	    };
	    PlayerInfo.addLoseGameAmount = function (playerDoc) {
	        playerDoc.loseGameCount++;
	        return playerDoc.loseGameCount;
	    };
	    PlayerInfo.prototype.gameCount = function () {
	        return this.loseGameCount() + this.winGameCount();
	    };
	    PlayerInfo.prototype.winGameCount = function (val) {
	        return BaseInfo_1.prop(this.playerData, "winGameCount", val);
	    };
	    PlayerInfo.prototype.loseGameCount = function (val) {
	        return BaseInfo_1.prop(this.playerData, "loseGameCount", val);
	    };
	    PlayerInfo.prototype.getWinPercent = function () {
	        return (this.winpercent() * 100).toFixed(1) + "%";
	    };
	    PlayerInfo.getStyleIcon = function (style) {
	        var path = '/img/panel/stage/';
	        if (style === 1) {
	            path += 'feng.png';
	        }
	        else if (style === 2) {
	            path += 'lin.png';
	        }
	        else if (style === 3) {
	            path += 'huo.png';
	        }
	        else if (style === 4) {
	            path += 'shan.png';
	        }
	        return path;
	    };
	    PlayerInfo.prototype.getWinStyleIcon = function () {
	        var path = '/img/panel/stage/win/';
	        if (this.style() == 1) {
	            path += 'fengWin.png';
	        }
	        else if (this.style() == 2) {
	            path += 'linWin.png';
	        }
	        else if (this.style() == 3) {
	            path += 'huoWin.png';
	        }
	        else if (this.style() == 4) {
	            path += 'shanWin.png';
	        }
	        return path;
	    };
	    PlayerInfo.prototype.getRec = function () {
	        return { id: this.id(), eloScore: this.eloScore(), dtScore: this.dtScore() };
	    };
	    PlayerInfo.prototype.saveScore = function (dtScore, isWin) {
	        this.dtScore(dtScore);
	        this.eloScore(this.eloScore() + dtScore);
	        if (isWin) {
	            this.winGameCount(this.winGameCount() + 1);
	        }
	        else
	            this.loseGameCount(this.loseGameCount() + 1);
	    };
	    PlayerInfo.prototype.getCurWinningPercent = function () {
	        return this.winGameCount() / (this.loseGameCount() + this.winGameCount());
	    };
	    return PlayerInfo;
	}(BaseInfo_1.BaseInfo));
	exports.PlayerInfo = PlayerInfo;


/***/ },
/* 62 */
/***/ function(module, exports) {

	"use strict";
	exports.isdef = function (val) {
	    return val != undefined;
	};
	exports.prop = function (obj, paramName, v, callback) {
	    if (exports.isdef(v)) {
	        obj[paramName] = v;
	        if (callback)
	            callback();
	    }
	    else
	        return obj[paramName];
	};
	exports.obj2Class = function (obj, cls) {
	    var c = new cls;
	    for (var paramName in obj) {
	        c[paramName] = obj[paramName];
	    }
	    return c;
	};
	function setPropTo(data, obj) {
	    for (var key in data) {
	        if (obj.hasOwnProperty(key))
	            obj[key] = data[key];
	    }
	}
	exports.setPropTo = setPropTo;
	var BaseDoc = (function () {
	    function BaseDoc() {
	    }
	    return BaseDoc;
	}());
	exports.BaseDoc = BaseDoc;
	var BaseInfo = (function () {
	    function BaseInfo() {
	    }
	    return BaseInfo;
	}());
	exports.BaseInfo = BaseInfo;


/***/ },
/* 63 */
/***/ function(module, exports) {

	"use strict";
	var FTInfo = (function () {
	    function FTInfo() {
	        this.memberArr = [];
	    }
	    FTInfo.saveScore = function (ftDoc, score) {
	        ftDoc.score ? ftDoc.score += score : ftDoc.score = score;
	        ftDoc.curScore ? ftDoc.curScore += score : ftDoc.curScore = score;
	    };
	    FTInfo.clone = function (ftDoc) {
	        var f = new FTInfo();
	        f._id = ftDoc._id;
	        f.id = ftDoc.id;
	        f.name = ftDoc.name;
	        f.fullName = ftDoc.fullName;
	        f.logo = ftDoc.logo;
	        f.score = ftDoc.score;
	        f.curScore = ftDoc.curScore;
	        return f;
	    };
	    return FTInfo;
	}());
	exports.FTInfo = FTInfo;


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var home_1 = __webpack_require__(16);
	var Event2017_1 = __webpack_require__(65);
	var TweenEx_1 = __webpack_require__(40);
	var Score2017_1 = __webpack_require__(70);
	var HupuAPI_1 = __webpack_require__(22);
	var Command_1 = __webpack_require__(51);
	var const_1 = __webpack_require__(33);
	var BasePanelView_1 = __webpack_require__(34);
	function logEvent() {
	    var a = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        a[_i - 0] = arguments[_i];
	    }
	    var d = new Date();
	    var t = '[' + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + ']';
	    console.info(t, a);
	}
	var ScoreView = (function (_super) {
	    __extends(ScoreView, _super);
	    function ScoreView(stage, $route) {
	        _super.call(this, const_1.PanelId.onlinePanel);
	        this.delayTimeMS = 0;
	        this.isTest = false;
	        this.$route = $route;
	        this.name = const_1.PanelId.scorePanel;
	        var darkTheme = $route.query.theme == "dark";
	        this.gameId = $route.params.game_id;
	        this.isTest = $route.query.test == "1";
	        this.scorePanel = new Score2017_1.Score2017(stage, darkTheme);
	        this.eventPanel = new Event2017_1.Event2017(stage, darkTheme);
	        console.log('new ScoreView');
	        if (this.isTest) {
	            this.eventPanel.showLogoFx();
	        }
	        this.initDelay();
	        this.initLocal();
	    }
	    ScoreView.prototype.initDelay = function () {
	        var _this = this;
	        $.get('/online/delay/' + this.gameId, function (delay) {
	            if (delay)
	                _this.delayTimeMS = Number(delay) * 1000;
	            console.log('/online/delay/' + _this.delayTimeMS);
	            _this.initRemote();
	        });
	    };
	    ScoreView.prototype.initRoom = function () {
	        var roomIO = io.connect("tcp.lb.liangle.com:3081")
	            .on('connect', function (msg) {
	            console.log('msg', msg);
	            roomIO.emit('join', {
	                room_id: 10287,
	                match_id: 1,
	                token: ''
	            });
	        })
	            .on('wall', function (msg) {
	            console.log('wall', msg);
	        });
	    };
	    ScoreView.prototype.initDefaultPlayer = function () {
	        var p = 'http://w1.hoopchina.com.cn/huputv/resource/img/amateur.jpg';
	        this.scorePanel.setLeftPlayerInfo('Player 1', p, 78, 178, '', 0);
	        this.scorePanel.setRightPlayerInfo('Player 1', p, 78, 178, '', 0);
	    };
	    ScoreView.prototype.initLocal = function () {
	        var _this = this;
	        var localWs = io.connect("/" + const_1.PanelId.rkbPanel);
	        localWs.on('connect', function (msg) {
	            console.log('connect', window.location.host);
	        })
	            .on("" + Command_1.CommandId.sc_startTimer, function (data) {
	            _this.scorePanel.toggleTimer(const_1.TimerState.RUNNING);
	        })
	            .on("" + Command_1.CommandId.sc_pauseTimer, function (data) {
	            _this.scorePanel.toggleTimer(const_1.TimerState.PAUSE);
	        })
	            .on("" + Command_1.CommandId.sc_resetTimer, function (data) {
	            _this.scorePanel.resetTimer();
	        })
	            .on("" + Command_1.CommandId.sc_setDelayTime, function (data) {
	            _this.delayTimeMS = data.delayTimeMS;
	        })
	            .on("" + Command_1.CommandId.sc_setTimer, function (data) {
	            _this.scorePanel.setTimer(data.time);
	        })
	            .on("" + Command_1.CommandId.sc_toggleTheme, function (data) {
	            var isDark = data.isDark;
	            var ob = _this.$route.params.op != "op";
	            window.location.href = home_1.getScorePanelUrl(_this.gameId, isDark, ob);
	            window.location.reload();
	        })
	            .on("" + Command_1.CommandId.sc_showChampion, function (data) {
	            var player = _this.scorePanel.getPlayerInfo(data.isLeft);
	            _this.eventPanel.showChampion(data.title, player);
	            _this.eventPanel.champion.show();
	            _this.scorePanel.hide();
	        })
	            .on("" + Command_1.CommandId.sc_toggleScorePanel, function (data) {
	            data.visible ?
	                _this.scorePanel.show()
	                : _this.scorePanel.hide();
	        })
	            .on("" + Command_1.CommandId.sc_toggleChampionPanel, function (data) {
	            data.visible ?
	                _this.eventPanel.champion.show()
	                : _this.eventPanel.champion.hide();
	        })
	            .on("" + Command_1.CommandId.sc_showNotice, function (data) {
	            _this.eventPanel.showNotice(data.title, data.content, data.isLeft, data.isBold);
	            data.visible ?
	                _this.eventPanel.noticeSprite.show()
	                : _this.eventPanel.noticeSprite.hide();
	        });
	    };
	    ScoreView.prototype.initRemote = function () {
	        var _this = this;
	        var isRunning = false;
	        HupuAPI_1.getHupuWS(function (hupuWsUrl) {
	            var remoteIO = io.connect(hupuWsUrl);
	            var setPlayer = function (leftPlayer, rightPlayer) {
	                console.log(leftPlayer);
	                _this.scorePanel.setLeftPlayerInfo(leftPlayer.name, leftPlayer.avatar, leftPlayer.weight, leftPlayer.height, leftPlayer.groupId, leftPlayer.totalChampion);
	                _this.scorePanel.setRightPlayerInfo(rightPlayer.name, rightPlayer.avatar, rightPlayer.weight, rightPlayer.height, rightPlayer.groupId, rightPlayer.totalChampion);
	            };
	            remoteIO.on('connect', function () {
	                console.log('hupuAuto socket connected', hupuWsUrl);
	                remoteIO.emit('passerbyking', {
	                    game_id: _this.gameId,
	                    page: 'score'
	                });
	                TweenEx_1.TweenEx.delayedCall(3000, function () {
	                    if (!isRunning)
	                        _this.initDefaultPlayer();
	                });
	            });
	            remoteIO.on('wall', function (data) {
	                var event = data.et;
	                var eventMap = {};
	                console.log('event:', event, data);
	                eventMap['init'] = function () {
	                    console.log('init', data);
	                    logEvent('init', data);
	                    _this.scorePanel.set35ScoreLight(data.winScore);
	                    _this.scorePanel.setGameIdx(Number(data.gameIdx), Number(data.matchType));
	                    setPlayer(data.player.left, data.player.right);
	                    _this.scorePanel.setLeftScore(data.player.left.leftScore);
	                    _this.scorePanel.setRightScore(data.player.right.rightScore);
	                    _this.scorePanel.setLeftFoul(data.player.left.leftFoul);
	                    _this.scorePanel.setRightFoul(data.player.right.rightFoul);
	                    data.delayTimeMS = _this.delayTimeMS;
	                    var gameStatus = Number(data.status);
	                    if (data.status == 0) {
	                        var gameTime = Math.floor(data.t / 1000 - Number(data.st));
	                        _this.scorePanel.setTimer(gameTime);
	                        _this.scorePanel.toggleTimer(const_1.TimerState.RUNNING);
	                    }
	                    else if (data.status == 2) {
	                        _this.scorePanel.toggleTimer(const_1.TimerState.PAUSE);
	                        _this.scorePanel.resetTimer();
	                    }
	                };
	                eventMap['updateScore'] = function () {
	                    console.log('updateScore', data);
	                    logEvent('updateScore', data);
	                    if (data.leftScore != null) {
	                        _this.scorePanel.setLeftScore(data.leftScore);
	                    }
	                    if (data.rightScore != null) {
	                        _this.scorePanel.setRightScore(data.rightScore);
	                    }
	                    if (data.rightFoul != null) {
	                        _this.scorePanel.setRightFoul(data.rightFoul);
	                    }
	                    if (data.leftFoul != null) {
	                        _this.scorePanel.setLeftFoul(data.leftFoul);
	                    }
	                };
	                eventMap['timeStart'] = function () {
	                    console.log('timeStart', data);
	                    _this.scorePanel.toggleTimer(const_1.TimerState.RUNNING);
	                };
	                eventMap['startGame'] = function () {
	                    console.log('startGame', data);
	                    logEvent('startGame', data);
	                    _this.scorePanel.set35ScoreLight(data.winScore);
	                    _this.scorePanel.setGameIdx(data.gameIdx, Number(data.matchType));
	                    setPlayer(data.player.left, data.player.right);
	                    _this.scorePanel.toggleTimer(const_1.TimerState.PAUSE);
	                    _this.scorePanel.resetScore();
	                    _this.scorePanel.resetTimer();
	                };
	                eventMap['commitGame'] = function () {
	                    console.log('commitGame', data);
	                    logEvent('commitGame', data);
	                    var player = data.player;
	                    _this.eventPanel.showWin(player);
	                    _this.scorePanel.toggleTimer(const_1.TimerState.PAUSE);
	                };
	                if (eventMap[event]) {
	                    isRunning = true;
	                    var d = _this.delayTimeMS;
	                    logEvent(event, 'delay', d, data);
	                    if (event == 'init')
	                        d = 0;
	                    _this.emit(event, data);
	                    TweenEx_1.TweenEx.delayedCall(d, function () {
	                        eventMap[event]();
	                    });
	                }
	            });
	        });
	    };
	    ScoreView.prototype.setScoreFoul = function (data) {
	        logEvent('setScoreFoul', data);
	        if (data.leftScore != null) {
	            this.scorePanel.setLeftScore(data.leftScore);
	        }
	        if (data.rightScore != null) {
	            this.scorePanel.setRightScore(data.rightScore);
	        }
	        if (data.rightFoul != null) {
	            this.scorePanel.setRightFoul(data.rightFoul);
	        }
	        if (data.leftFoul != null) {
	            this.scorePanel.setLeftFoul(data.leftFoul);
	        }
	    };
	    ScoreView.prototype.initIO = function () {
	        var _this = this;
	        var localWs = io.connect("/" + const_1.PanelId.rkbPanel);
	        localWs.on('connect', function (msg) {
	            console.log('connect', window.location.host);
	            localWs.emit("opUrl", { opUrl: window.location.host });
	        })
	            .on("" + Command_1.CommandId.sc_setDelayTime, function (data) {
	            console.log("CommandId.setDelayTime", data);
	            _this.delayTimeMS = data.delayTimeMS;
	        })
	            .on(Command_1.CommandId.sc_startTimer, function (data) {
	            _this.scorePanel.toggleTimer(const_1.TimerState.RUNNING);
	        })
	            .on(Command_1.CommandId.sc_pauseTimer, function (data) {
	            _this.scorePanel.toggleTimer(const_1.TimerState.PAUSE);
	        })
	            .on(Command_1.CommandId.sc_resetTimer, function (data) {
	            console.log("CommandId.sc_resetTimer", data);
	            _this.scorePanel.resetTimer();
	        });
	    };
	    return ScoreView;
	}(BasePanelView_1.BasePanelView));
	exports.ScoreView = ScoreView;


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var LogoFx_1 = __webpack_require__(76);
	var Com2017_1 = __webpack_require__(66);
	var Champion_1 = __webpack_require__(67);
	var NoticeSprite_1 = __webpack_require__(68);
	var BracketGroup_1 = __webpack_require__(59);
	var JsFunc_1 = __webpack_require__(17);
	var PixiEx_1 = __webpack_require__(36);
	var TweenEx_1 = __webpack_require__(40);
	var const_1 = __webpack_require__(33);
	var Event2017 = (function (_super) {
	    __extends(Event2017, _super);
	    function Event2017(stage, isDark) {
	        if (isDark === void 0) { isDark = false; }
	        _super.call(this);
	        this._texMap = {};
	        stage.addChild(this);
	        this.winPanel = new PIXI.Container();
	        this.addChild(this.winPanel);
	        this.winPanel.visible = false;
	        this.modal = new PIXI.Graphics()
	            .beginFill(0x000000, .7)
	            .drawRect(0, 0, const_1.ViewConst.STAGE_WIDTH, const_1.ViewConst.STAGE_HEIGHT);
	        this.winPanel.addChild(this.modal);
	        var bgUrl = '/img/panel/score2017/winBg.png';
	        if (isDark)
	            bgUrl = '/img/panel/score2017/winBgDark.png';
	        var bg = PixiEx_1.newBitmap({
	            url: bgUrl,
	        });
	        this.winPanel.addChild(bg);
	        var ts = {
	            fontFamily: const_1.FontName.MicrosoftYahei,
	            fontSize: '22px', fill: '#fff',
	            fontWeight: 'bold'
	        };
	        var t = new PIXI.Text("", ts);
	        this.winPanel.addChild(t);
	        t.x = 923;
	        t.y = 318;
	        t.style['fontSize'] = '40px';
	        this.pName = t;
	        t = new PIXI.Text("", ts);
	        this.winPanel.addChild(t);
	        t.style['fontSize'] = '34px';
	        t.x = 540;
	        t.y = 750;
	        this.pIntro = t;
	        t = new PIXI.Text("", ts);
	        this.winPanel.addChild(t);
	        t.style['fontSize'] = '32px';
	        t.x = 1240;
	        t.y = 427;
	        this.pWeight = t;
	        t = new PIXI.Text("", ts);
	        this.winPanel.addChild(t);
	        t.style['fontSize'] = '30px';
	        t.x = 897;
	        t.y = this.pWeight.y;
	        this.pHeight = t;
	        t = new PIXI.Text("", ts);
	        this.winPanel.addChild(t);
	        t.style['fontSize'] = '40px';
	        t.x = 570;
	        t.y = 647;
	        this.ftName = t;
	        t = new PIXI.Text("", ts);
	        this.winPanel.addChild(t);
	        t.style['fontSize'] = '40px';
	        t.x = 805;
	        t.y = 617;
	        this.winLose = t;
	        t = new PIXI.Text("", ts);
	        this.winPanel.addChild(t);
	        t.style['fontSize'] = '40px';
	        t.x = 330;
	        t.y = this.winLose.y;
	        this.pRankScore = t;
	        this.avatar = new PIXI.Sprite();
	        this.avatar.x = 511;
	        this.avatar.y = 314;
	        this.winPanel.addChild(this.avatar);
	        this.ftLogo = new PIXI.Sprite();
	        this.ftLogo.x = 498;
	        this.ftLogo.y = 644;
	        this.winPanel.addChild(this.ftLogo);
	        this.medal = new PIXI.Sprite();
	        this.medal.x = 566;
	        this.medal.y = 544;
	        this.winPanel.addChild(this.medal);
	    }
	    Event2017.prototype.showWin = function (player) {
	        var _this = this;
	        var champion = Number(player.totalChampion);
	        var medal = Math.ceil(champion / 5);
	        if (medal > 5)
	            medal = 5;
	        if (medal > 0) {
	            var medalUrl_1 = '/img/panel/score2017/medal' + medal + '.png';
	            if (!this._texMap[medalUrl_1])
	                JsFunc_1.loadImg(medalUrl_1, function (img) {
	                    _this.medal.texture = _this._texMap[medalUrl_1] = PixiEx_1.imgToTex(img);
	                });
	            else
	                this.medal.texture = this._texMap[medalUrl_1];
	            this.medal.visible = true;
	        }
	        else
	            this.medal.visible = false;
	        var avatar = player.avatar;
	        var ftName = Com2017_1.getFtName(player.groupId);
	        this.pName.text = player.name;
	        this.pIntro.text = JsFunc_1.cnWrap('参赛宣言：' + player.intro, 49, 98);
	        this.pWeight.text = player.weight + " KG";
	        this.pHeight.text = player.height + " CM";
	        this.ftName.text = ftName;
	        BracketGroup_1.fitWidth(this.ftName, 155, 50);
	        this.winLose.text = player.winAmount + ' 胜 / ' + player.loseAmount + ' 负';
	        this.winLose.x = 935 - this.winLose.width * .5;
	        this.pRankScore.text = player.roundScore;
	        this.pRankScore.x = 1265 - this.pRankScore.width * 0.5;
	        if (!this._texMap[avatar])
	            PixiEx_1.loadRes(avatar, function (img) {
	                _this.avatar.texture = _this._texMap[avatar] = PixiEx_1.imgToTex(img);
	                _this.avatar.texture['w'] = img.width;
	                _this.avatar.texture['h'] = img.height;
	            }, true);
	        else
	            this.avatar.texture = this._texMap[avatar];
	        console.log('tex width', this.avatar.texture['w']);
	        this.avatar.height = this.avatar.width = 213;
	        var ftUrl = Com2017_1.getFtLogoUrl2(player.groupId);
	        if (!this._texMap[ftUrl])
	            JsFunc_1.loadImg(ftUrl, function (img) {
	                _this.ftLogo.texture = _this._texMap[ftUrl] = PixiEx_1.imgToTex(img);
	                _this.ftLogo.visible = true;
	            }, function (e) {
	                console.log('fterror', e);
	                _this.ftLogo.visible = false;
	            });
	        else {
	            this.ftLogo.texture = this._texMap[ftUrl];
	            this.ftLogo.visible = true;
	        }
	        this.ftLogo.width = this.ftLogo.height = 56;
	        this.winPanel.visible = true;
	        TweenEx_1.TweenEx.delayedCall(6000, function () {
	            _this.winPanel.visible = false;
	        });
	    };
	    Event2017.prototype.showNotice = function (title, content, isLeft, isBold) {
	        if (!this.noticeSprite) {
	            this.noticeSprite = new NoticeSprite_1.NoticeSprite();
	            this.addChild(this.noticeSprite);
	        }
	        this.noticeSprite.setText(content, title, isLeft, isBold);
	        this.noticeSprite.show();
	    };
	    Event2017.prototype.showChampion = function (title, player) {
	        if (!this.champion) {
	            this.champion = new Champion_1.Champion();
	            this.addChild(this.champion);
	        }
	        this.champion.setChampion(title, player.name, player.info, player.ftId);
	    };
	    Event2017.prototype.showLogoFx = function () {
	        this.logoFx = new LogoFx_1.LogoFx();
	        this.addChild(this.logoFx);
	    };
	    return Event2017;
	}(PIXI.Container));
	exports.Event2017 = Event2017;


/***/ },
/* 66 */
/***/ function(module, exports) {

	"use strict";
	function getFtlogoUrl(ftName) {
	    return '/img/ft/' + ftName + '.jpg';
	}
	exports.getFtlogoUrl = getFtlogoUrl;
	function getFtLogoUrl2(ftId) {
	    return '/img/ft/' + ftId + '.jpg';
	}
	exports.getFtLogoUrl2 = getFtLogoUrl2;
	var ftName = {
	    '1': 'Gambia',
	    '2': 'TSH',
	    '3': 'Fe3O4',
	    '4': 'FTG',
	    '5': '3P-Shot',
	    '6': 'Bravo!',
	    '7': 'XJBD',
	    '8': 'GreenLight',
	};
	function getFtName(ftId) {
	    return ftName[ftId] || '';
	}
	exports.getFtName = getFtName;
	exports.noticeJoin = { title: '报名', content: '虎扑路人王全新报名系统已上线！\n编辑你的球员信息一键报名！\nhttp://liangle.com/my' };


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Com2017_1 = __webpack_require__(66);
	var JsFunc_1 = __webpack_require__(17);
	var const_1 = __webpack_require__(33);
	var PixiEx_1 = __webpack_require__(36);
	var Champion = (function (_super) {
	    __extends(Champion, _super);
	    function Champion() {
	        _super.call(this);
	        var bg = PixiEx_1.newBitmap({ url: '/img/panel/score2017/champion.png' });
	        this.addChild(bg);
	        this.lLight = PixiEx_1.newBitmap({ url: '/img/panel/score2017/champion.light.png' });
	        this.addChild(this.lLight);
	        this.rLight = PixiEx_1.newBitmap({ url: '/img/panel/score2017/champion.light.png' });
	        this.rLight.y = this.lLight.y = 894;
	        this.addChild(this.rLight);
	        var t = new PIXI.Text();
	        t.y = const_1.ViewConst.STAGE_HEIGHT - 216;
	        var s = t.style;
	        s.fill = '#fff';
	        s.fontSize = '30px';
	        s.fontFamily = const_1.FontName.MicrosoftYahei;
	        this.addChild(t);
	        this.title = t;
	        t = new PIXI.Text();
	        t.y = const_1.ViewConst.STAGE_HEIGHT - 162;
	        s = t.style;
	        s.fill = '#fff';
	        s.fontSize = '65px';
	        s.fontWeight = 'bold';
	        s.fontFamily = const_1.FontName.MicrosoftYahei;
	        this.addChild(t);
	        this.playerName = t;
	        t = new PIXI.Text();
	        t.y = const_1.ViewConst.STAGE_HEIGHT - 57;
	        s = t.style;
	        s.fill = '#fff';
	        s.fontSize = '25px';
	        s.fontFamily = const_1.FontName.MicrosoftYahei;
	        this.addChild(t);
	        this.playerInfo = t;
	        this.ftLogo = new PIXI.Sprite();
	        this.addChild(this.ftLogo);
	    }
	    Champion.prototype.setChampion = function (title, name, info, ftId) {
	        var _this = this;
	        var w = const_1.ViewConst.STAGE_WIDTH;
	        this.title.text = title;
	        this.title.x = .5 * (w - this.title.width);
	        this.lLight.x = this.title.x - 128 - 10;
	        this.rLight.x = this.title.x + this.title.width + 10;
	        this.playerName.text = name;
	        this.playerName.x = .5 * (w - this.playerName.width);
	        this.playerInfo.text = Com2017_1.getFtName(ftId) + " | " + info;
	        JsFunc_1.loadImg(Com2017_1.getFtLogoUrl2(ftId), function (img) {
	            _this.ftLogo.x = .5 * (w - (65 + _this.playerInfo.width));
	            _this.playerInfo.x = _this.ftLogo.x + 65;
	            _this.ftLogo.y = _this.playerInfo.y - 3;
	            _this.ftLogo.texture = PixiEx_1.imgToTex(img);
	            _this.ftLogo.width = _this.ftLogo.height = 42;
	        });
	    };
	    Champion.prototype.show = function () {
	        this.visible = true;
	    };
	    Champion.prototype.hide = function () {
	        this.visible = false;
	    };
	    return Champion;
	}(PIXI.Container));
	exports.Champion = Champion;


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var PixiEx_1 = __webpack_require__(36);
	var const_1 = __webpack_require__(33);
	var JsFunc_1 = __webpack_require__(17);
	var ScaleSprite_1 = __webpack_require__(69);
	var NoticeSprite = (function (_super) {
	    __extends(NoticeSprite, _super);
	    function NoticeSprite() {
	        var _this = this;
	        _super.call(this);
	        this.bg = new PIXI.Graphics();
	        this.bg.alpha = .8;
	        this.addChild(this.bg);
	        JsFunc_1.loadImg('/img/panel/score2017/noticeBg.png', function (img) {
	            _this.imgWidth = 250;
	            _this.imgHeight = 130;
	            _this.frame = new ScaleSprite_1.ScaleSprite(img, { x: 27, y: 29, width: 31, height: 27 });
	            _this.addChildAt(_this.frame, 1);
	            _this.setText(_this._content, _this._title, _this._isLeft, _this._isBold);
	        });
	        this.lLight = PixiEx_1.newBitmap({ url: '/img/panel/score2017/noticeLight.png' });
	        this.lLight.y = 34;
	        this.addChild(this.lLight);
	        this.rLight = PixiEx_1.newBitmap({ url: '/img/panel/score2017/noticeLight.png' });
	        this.rLight.y = this.lLight.y;
	        this.addChild(this.rLight);
	        var ts = {
	            fontFamily: const_1.FontName.MicrosoftYahei,
	            fontSize: '35px', fill: "#fff",
	            fontWeight: 'bold'
	        };
	        this.line = PixiEx_1.newBitmap({
	            url: '/img/panel/score2017/noticeLine.png'
	        });
	        this.line.y = 48;
	        this.line.x = 9;
	        this.addChild(this.line);
	        this.content = new PIXI.Text('', ts);
	        this.content.y = 60;
	        this.addChild(this.content);
	        this.title = new PIXI.Text('', ts);
	        this.title.style.fontSize = '25px';
	        this.title.y = 12;
	        this.addChild(this.title);
	        this.y = 85;
	    }
	    NoticeSprite.prototype.show = function () {
	        this.visible = true;
	    };
	    NoticeSprite.prototype.hide = function () {
	        this.visible = false;
	    };
	    NoticeSprite.prototype.setText = function (content, title, isLeft, isBold) {
	        if (!title)
	            title = '公告';
	        this._content = content;
	        this._title = title;
	        this._isLeft = isLeft;
	        this._isBold = isBold;
	        this.content.style.fontWeight = isBold;
	        var lineGap = 15;
	        if (isBold == 'bold') {
	            lineGap = 18;
	        }
	        this.content.style.lineHeight = Number(this.content.style.fontSize.replace('px', '')) + lineGap;
	        this.content.text = content;
	        this.title.text = title;
	        var textWidth = Math.max(this.content.width, this.title.width);
	        if (textWidth < this.imgWidth)
	            textWidth = this.imgWidth;
	        var h = this.content.height;
	        if (h < this.imgHeight)
	            h = this.imgHeight;
	        this.frame.resize(textWidth + 40, this.content.height + 15 + this.content.y);
	        this.line.width = textWidth + 40 - 18;
	        this.content.x = 0.5 * (this.frame.width - this.content.width);
	        this.title.x = 0.5 * (this.frame.width - this.title.width);
	        this.bg.clear();
	        var fw = this.frame.width;
	        var fh = this.frame.height;
	        this.bg.beginFill(0x000000)
	            .moveTo(25, 6)
	            .lineTo(fw - 8, 6)
	            .lineTo(fw - 8, fh - 28)
	            .lineTo(fw - 25, fh - 6)
	            .lineTo(6, fh - 6)
	            .lineTo(6, 25);
	        if (fw < 260) {
	            this.lLight.visible = false;
	            this.rLight.visible = false;
	        }
	        else {
	            this.lLight.visible = true;
	            this.rLight.visible = true;
	            this.lLight.x = this.title.x - 75 - 8;
	            this.rLight.x = this.title.x + this.title.width + 8;
	            if (this.rLight.x + this.rLight.width - this.lLight.x > fw - 25) {
	                this.lLight.visible = false;
	                this.rLight.visible = false;
	            }
	        }
	        if (isLeft) {
	            this.x = 5;
	        }
	        else {
	            this.x = const_1.ViewConst.STAGE_WIDTH - fw - 5;
	        }
	        this.y = (1 - .618) * (const_1.ViewConst.STAGE_HEIGHT - fh);
	    };
	    return NoticeSprite;
	}(PIXI.Container));
	exports.NoticeSprite = NoticeSprite;


/***/ },
/* 69 */
/***/ function(module, exports) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var ScaleSprite = (function (_super) {
	    __extends(ScaleSprite, _super);
	    function ScaleSprite(img, scaleRect) {
	        _super.call(this);
	        var bt = new PIXI.BaseTexture(img);
	        var _sp = function (x, y, w, h) {
	            return new PIXI.Sprite(new PIXI.Texture(bt, new PIXI.Rectangle(x, y, w, h)));
	        };
	        var lt = _sp(0, 0, scaleRect.x, scaleRect.y);
	        this.addChild(lt);
	        this.lt = lt;
	        this.t = _sp(scaleRect.x, 0, scaleRect.width, scaleRect.y);
	        this.t.x = scaleRect.x;
	        this.addChild(this.t);
	        var rt = _sp(scaleRect.x + scaleRect.width, 0, bt.width - scaleRect.x - scaleRect.width, scaleRect.y);
	        rt.x = scaleRect.x + scaleRect.width;
	        this.addChild(rt);
	        this.rt = rt;
	        this.r = _sp(scaleRect.x + scaleRect.width, scaleRect.y, bt.width - scaleRect.x - scaleRect.width, scaleRect.height);
	        this.r.x = scaleRect.x + scaleRect.width;
	        this.r.y = scaleRect.y;
	        this.addChild(this.r);
	        this.rb = _sp(scaleRect.x + scaleRect.width, scaleRect.y + scaleRect.height, bt.width - scaleRect.x - scaleRect.width, bt.height - scaleRect.y - scaleRect.height);
	        this.rb.x = scaleRect.x + scaleRect.width;
	        this.rb.y = scaleRect.y + scaleRect.height;
	        this.addChild(this.rb);
	        this.b = _sp(scaleRect.x, scaleRect.y + scaleRect.height, scaleRect.width, bt.height - scaleRect.y - scaleRect.height);
	        this.b.x = scaleRect.x;
	        this.b.y = scaleRect.y + scaleRect.height;
	        this.addChild(this.b);
	        this.lb = _sp(0, scaleRect.y + scaleRect.height, scaleRect.x, bt.height - scaleRect.y - scaleRect.height);
	        this.lb.y = scaleRect.y + scaleRect.height;
	        this.addChild(this.lb);
	        this.l = _sp(0, scaleRect.y, scaleRect.x, scaleRect.height);
	        this.l.y = scaleRect.y;
	        this.addChild(this.l);
	    }
	    Object.defineProperty(ScaleSprite.prototype, "width", {
	        get: function () {
	            return this._w;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ScaleSprite.prototype, "height", {
	        get: function () {
	            return this._h;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ScaleSprite.prototype.resize = function (width, height) {
	        this._w = width;
	        this._h = height;
	        var sw = width - this.lt.width - this.rt.width;
	        this.t.width = sw;
	        this.b.width = sw;
	        this.rt.x = this.lt.width + sw;
	        this.r.x = this.lt.width + sw;
	        this.rb.x = this.lt.width + sw;
	        var sh = height - this.lt.height - this.lb.height;
	        this.l.height = sh;
	        this.r.height = sh;
	        this.lb.y = this.lt.height + sh;
	        this.b.y = this.lt.height + sh;
	        this.rb.y = this.lt.height + sh;
	    };
	    return ScaleSprite;
	}(PIXI.Container));
	exports.ScaleSprite = ScaleSprite;


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Com2017_1 = __webpack_require__(66);
	var FoulText_1 = __webpack_require__(71);
	var Fx_1 = __webpack_require__(46);
	var FoulGroup_1 = __webpack_require__(72);
	var TextTimer_1 = __webpack_require__(42);
	var SpriteGroup_1 = __webpack_require__(45);
	var const_1 = __webpack_require__(33);
	var JsFunc_1 = __webpack_require__(17);
	var PixiEx_1 = __webpack_require__(36);
	var skin = {
	    light: {
	        bg: '/img/panel/score2017/bgLight.png',
	        fontColor: '#fff',
	        score: '/img/panel/score2017/scoreLight.png',
	        foul: '/img/panel/score2017/foul.png',
	        foulHint: '/img/panel/score2017/foulHintLight.png',
	        section1: '/img/panel/score2017/section1Light.png',
	        section2: '/img/panel/score2017/section2Light.png',
	        section3: '/img/panel/score2017/section3Light.png'
	    },
	    dark: {
	        bg: '/img/panel/score2017/bgDark.png',
	        fontColor: '#1b5e80',
	        score: '/img/panel/score2017/scoreDark.png',
	        foul: '/img/panel/score2017/foul.png',
	        foulHint: '/img/panel/score2017/foulHintDark.png',
	        section1: '/img/panel/score2017/section1Dark.png',
	        section2: '/img/panel/score2017/section2Dark.png',
	        section3: '/img/panel/score2017/section3Dark.png'
	    }
	};
	function polygon(g, radius, sides) {
	    if (sides < 3)
	        return;
	    var a = (Math.PI * 2) / sides;
	    g.moveTo(radius, 0);
	    for (var i = 1; i < sides; i++) {
	        g.lineTo(radius * Math.cos(a * i), radius * Math.sin(a * i));
	    }
	}
	var Score2017 = (function () {
	    function Score2017(stage, isDark) {
	        var _this = this;
	        if (isDark === void 0) { isDark = false; }
	        this._tex = {};
	        this.stage = stage;
	        if (isDark)
	            this.skin = skin.dark;
	        else
	            this.skin = skin.light;
	        var bg = PixiEx_1.newBitmap({ url: this.skin.bg });
	        stage.addChild(bg);
	        this.ctn = bg;
	        var ctn = new PIXI.Container;
	        bg.addChild(ctn);
	        ctn.y = const_1.ViewConst.STAGE_HEIGHT - 300;
	        this.gameSection = new PIXI.Sprite;
	        this.gameSection.x = 926;
	        this.gameSection.y = 174;
	        ctn.addChild(this.gameSection);
	        PixiEx_1.loadRes(this.skin.score, function (img) {
	            var tex = PixiEx_1.imgToTex(img);
	            var sheet = {
	                text: '0',
	                animations: {
	                    "0": 0, "1": 1, "2": 2, "3": 3, "4": 4,
	                    "5": 5, "6": 6, "7": 7, "8": 9, "9": 8
	                },
	                texture: tex,
	                frames: [[0, 0, 110, 128],
	                    [111, 0, 110, 128],
	                    [0, 129, 110, 128],
	                    [111, 129, 110, 128],
	                    [222, 0, 110, 128],
	                    [222, 129, 110, 128],
	                    [0, 258, 110, 128],
	                    [111, 258, 110, 128],
	                    [222, 258, 110, 128],
	                    [333, 0, 110, 128]]
	            };
	            var leftScoreNum = new PixiEx_1.BitmapText(sheet);
	            _this.leftScoreText = leftScoreNum;
	            leftScoreNum.x = 765;
	            leftScoreNum.y = 130;
	            leftScoreNum.align = 'center';
	            ctn.addChild(leftScoreNum);
	            var rightScoreNum = new PixiEx_1.BitmapText(sheet);
	            _this.rightScoreText = rightScoreNum;
	            rightScoreNum.x = leftScoreNum.x + 275;
	            rightScoreNum.y = leftScoreNum.y;
	            rightScoreNum.align = 'center';
	            ctn.addChild(rightScoreNum);
	        });
	        var lf = new FoulGroup_1.FoulGroup({ dir: SpriteGroup_1.Direction.e, invert: 29, img: this.skin.foul, count: 4 });
	        lf.x = 771;
	        lf.y = 262;
	        this.leftFoul = lf;
	        var rf = new FoulGroup_1.FoulGroup({ dir: SpriteGroup_1.Direction.w, invert: 29, img: this.skin.foul, count: 4 });
	        rf.x = 1037;
	        rf.y = lf.y;
	        this.rightFoul = rf;
	        var fts = {
	            fontFamily: const_1.FontName.MicrosoftYahei,
	            fontSize: '30px', fill: "#fff",
	            fontWeight: 'bold'
	        };
	        var lft = new FoulText_1.FoulText(this.skin.foulHint);
	        lft.x = 774;
	        lft.y = 255;
	        ctn.addChild(lft);
	        this.lFoulText = lft;
	        var rft = new FoulText_1.FoulText(this.skin.foulHint);
	        rft.x = 1036;
	        rft.y = lft.y;
	        ctn.addChild(rft);
	        this.rFoulText = rft;
	        var tts = {
	            fontFamily: const_1.FontName.MicrosoftYahei,
	            fontSize: '30px', fill: "#fff",
	            fontWeight: 'bold'
	        };
	        var t = new TextTimer_1.TextTimer('', tts);
	        ctn.addChild(t);
	        t.x = 917;
	        t.y = 90;
	        t.setTimeBySec(0);
	        this.timer = t;
	        var winScoreText = new PIXI.Text("", tts);
	        winScoreText.x = t.x;
	        winScoreText.y = t.y;
	        winScoreText.visible = false;
	        ctn.addChild(winScoreText);
	        this.winScoreText = winScoreText;
	        var gis = {
	            fontFamily: const_1.FontName.MicrosoftYahei,
	            fontSize: '26px', fill: "#fff",
	            fontWeight: 'bold'
	        };
	        var gi = new PIXI.Text("第00场", gis);
	        this.gameIdx = gi;
	        gi.x = 917;
	        gi.y = 258;
	        ctn.addChild(gi);
	        var pns = {
	            fontFamily: const_1.FontName.MicrosoftYahei,
	            fontSize: '31px', fill: this.skin.fontColor,
	            stroke: '#000',
	            strokeThickness: 2,
	            fontWeight: 'bold',
	        };
	        var pis = {
	            fontFamily: const_1.FontName.MicrosoftYahei,
	            fontSize: '22px', fill: this.skin.fontColor,
	            stroke: '#000',
	            strokeThickness: 2,
	            fontWeight: 'bold'
	        };
	        var lpn = new PIXI.Text("", pns);
	        lpn.y = 155;
	        this.lPlayerName = lpn;
	        ctn.addChild(lpn);
	        var lpi = new PIXI.Text("", pis);
	        lpi.y = 200;
	        this.lPlayerInfo = lpi;
	        ctn.addChild(lpi);
	        var rpn = new PIXI.Text("", pns);
	        rpn.y = lpn.y;
	        rpn.x = 1420;
	        this.rPlayerName = rpn;
	        ctn.addChild(rpn);
	        var rpi = new PIXI.Text("", pis);
	        rpi.x = rpn.x;
	        rpi.y = lpi.y;
	        this.rPlayerInfo = rpi;
	        ctn.addChild(rpi);
	        var lm = new PIXI.Graphics()
	            .beginFill(0xff0000);
	        polygon(lm, 63, 6);
	        lm.x = 628;
	        lm.y = 193;
	        ctn.addChild(lm);
	        var rm = new PIXI.Graphics()
	            .beginFill(0xff0000);
	        polygon(rm, 63, 6);
	        rm.x = 1294;
	        rm.y = lm.y;
	        ctn.addChild(rm);
	        var la = new PIXI.Sprite();
	        la.x = lm.x;
	        la.y = lm.y;
	        la.mask = lm;
	        this.lAvatar = la;
	        ctn.addChild(this.lAvatar);
	        var ra = new PIXI.Sprite();
	        ra.x = rm.x;
	        ra.y = rm.y;
	        ra.mask = rm;
	        this.rAvatar = ra;
	        ctn.addChild(this.rAvatar);
	        var ftns = {
	            fontFamily: const_1.FontName.MicrosoftYahei,
	            fontSize: '22px', fill: '#fff',
	            fontWeight: 'bold'
	        };
	        var lftn = new PIXI.Text('', ftns);
	        this.lFtName = lftn;
	        lftn.y = 267;
	        ctn.addChild(lftn);
	        var rftn = new PIXI.Text('', ftns);
	        ctn.addChild(rftn);
	        this.rFtName = rftn;
	        rftn.y = lftn.y;
	        ctn.addChild(rftn);
	        var lFrame = new PIXI.Sprite();
	        lFrame.scale.x = lFrame.scale.y = 0.97;
	        this.lFrame = lFrame;
	        lFrame.x = 562;
	        lFrame.y = 134;
	        ctn.addChild(lFrame);
	        var rFrame = new PIXI.Sprite();
	        rFrame.scale.x = rFrame.scale.y = 0.97;
	        this.rFrame = rFrame;
	        rFrame.x = 1228;
	        rFrame.y = lFrame.y;
	        ctn.addChild(rFrame);
	    }
	    Score2017.prototype.set35ScoreLight = function (winScore) {
	        this.winScoreText.text = winScore + '球胜';
	    };
	    Score2017.prototype.setGameIdx = function (gameIdx, matchType) {
	        var _this = this;
	        console.log('isMaster', matchType);
	        if (matchType == 2) {
	            if (!this.gameSection2)
	                JsFunc_1.loadImg(this.skin.section2, function (img) {
	                    _this.gameSection2 = PixiEx_1.imgToTex(img);
	                    _this.gameSection.texture = _this.gameSection2;
	                });
	            else
	                this.gameSection.texture = this.gameSection2;
	        }
	        else if (matchType == 1) {
	            if (!this.gameSection1)
	                JsFunc_1.loadImg(this.skin.section1, function (img) {
	                    _this.gameSection1 = PixiEx_1.imgToTex(img);
	                    _this.gameSection.texture = _this.gameSection1;
	                });
	            else
	                this.gameSection.texture = this.gameSection1;
	        }
	        else if (matchType == 3) {
	            if (!this.gameSection3)
	                JsFunc_1.loadImg(this.skin.section3, function (img) {
	                    _this.gameSection3 = PixiEx_1.imgToTex(img);
	                    _this.gameSection.texture = _this.gameSection3;
	                });
	            else
	                this.gameSection.texture = this.gameSection3;
	        }
	        this.gameIdx.text = '第' + JsFunc_1.paddy(gameIdx, 2) + '场';
	    };
	    Score2017.prototype._showWinScore = function () {
	        var _this = this;
	        this.winScoreText.visible = true;
	        this.timer.visible = false;
	        Fx_1.blink2({
	            target: this.winScoreText, time: 100, loop: 20, callback: function () {
	                _this.winScoreText.visible = false;
	                _this.timer.visible = true;
	            }
	        });
	    };
	    Score2017.prototype.setLeftScore = function (v) {
	        this.leftScoreText.text = v + '';
	        this._showWinScore();
	    };
	    Score2017.prototype.setRightScore = function (v) {
	        this.rightScoreText.text = v + '';
	        this._showWinScore();
	    };
	    Score2017.prototype._setFoulText = function (label, v) {
	        var s = v + ' Foul';
	        if (Number(v) > 3) {
	            s = '  犯满';
	        }
	        label.text = s;
	    };
	    Score2017.prototype.setLeftFoul = function (v) {
	        this.lFoulText.setFoul(v);
	    };
	    Score2017.prototype.setRightFoul = function (v) {
	        this.rFoulText.setFoul(v);
	    };
	    Score2017.prototype.resetTimer = function () {
	        this.timer.resetTimer();
	    };
	    Score2017.prototype.setTimer = function (v) {
	        this.timer.setTimeBySec(v);
	    };
	    Score2017.prototype.toggleTimer = function (v) {
	        this.timer.toggleTimer(v);
	    };
	    Score2017.prototype.resetScore = function () {
	        this.setLeftScore(0);
	        this.setRightScore(0);
	        this.setLeftFoul(0);
	        this.setRightFoul(0);
	    };
	    Score2017.prototype._fixFtName = function (label, name) {
	        if (name.toUpperCase() == "GREENLIGHT") {
	            name = "GREENLIGHT";
	            label.style.fontSize = '13px';
	        }
	        else {
	            label.style.fontSize = '22px';
	        }
	        label.text = name;
	        label.y = 280 - label.height * .5;
	    };
	    Score2017.prototype.setLeftPlayerInfo = function (name, avatar, weight, height, ftId, numChampion) {
	        var _this = this;
	        this._lFtId = ftId;
	        this._loadFrame(numChampion, this.lFrame);
	        this.lPlayerName.text = name;
	        this.lPlayerName.x = 500 - this.lPlayerName.width;
	        PixiEx_1.loadRes(avatar, function (img) {
	            var avt = _this.lAvatar;
	            avt.texture = PixiEx_1.imgToTex(img);
	            var s = avt.mask.width / img.width;
	            avt.x = avt.mask.x - avt.texture.width * .5 * s;
	            avt.y = avt.mask.y - avt.texture.height * .5 * s;
	            avt.scale.x = avt.scale.y = s;
	        }, true);
	        if (!height)
	            height = 0;
	        if (!weight)
	            weight = 0;
	        this.lPlayerInfo.text = height + 'CM ' + weight + "KG";
	        this.lPlayerInfo.x = 500 - this.lPlayerInfo.width;
	        this._fixFtName(this.lFtName, Com2017_1.getFtName(ftId));
	        this.lFtName.x = 630 - this.lFtName.width * .5;
	    };
	    Score2017.prototype._loadFrame = function (numChampion, frame) {
	        var _this = this;
	        numChampion = Math.ceil(Number(numChampion) / 5);
	        if (numChampion > 0) {
	            var frameUrl_1 = '/img/panel/score2017/frame' + numChampion + '.png';
	            frame.visible = true;
	            if (!this._tex[frameUrl_1]) {
	                JsFunc_1.loadImg(frameUrl_1, function (img) {
	                    _this._tex[frameUrl_1] = frame.texture = PixiEx_1.imgToTex(img);
	                });
	            }
	            else
	                frame.texture = this._tex[frameUrl_1];
	        }
	        else
	            frame.visible = false;
	    };
	    Score2017.prototype.setRightPlayerInfo = function (name, avatar, weight, height, ftId, numChampion) {
	        var _this = this;
	        this._rFtId = ftId;
	        this._loadFrame(numChampion, this.rFrame);
	        this.rPlayerName.text = name;
	        PixiEx_1.loadRes(avatar, function (img) {
	            var avt = _this.rAvatar;
	            avt.texture = PixiEx_1.imgToTex(img);
	            var s = avt.mask.width / img.width;
	            avt.x = avt.mask.x - avt.texture.width * .5 * s;
	            avt.y = avt.mask.y - avt.texture.height * .5 * s;
	            avt.scale.x = avt.scale.y = s;
	        }, true);
	        if (!height)
	            height = 0;
	        if (!weight)
	            weight = 0;
	        this.rPlayerInfo.text = height + 'CM ' + weight + "KG";
	        this._fixFtName(this.rFtName, Com2017_1.getFtName(ftId));
	        this.rFtName.x = 1293 - this.rFtName.width * .5;
	    };
	    Score2017.prototype.getPlayerInfo = function (isLeft) {
	        var player = {};
	        if (isLeft) {
	            player.name = this.lPlayerName.text;
	            player.info = this.lPlayerInfo.text;
	            player.ftId = this._lFtId;
	        }
	        else {
	            player.name = this.rPlayerName.text;
	            player.info = this.rPlayerInfo.text;
	            player.ftId = this._rFtId;
	        }
	        return player;
	    };
	    Score2017.prototype.show = function () {
	        this.ctn.visible = true;
	    };
	    Score2017.prototype.hide = function () {
	        this.ctn.visible = false;
	    };
	    return Score2017;
	}());
	exports.Score2017 = Score2017;


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Fx_1 = __webpack_require__(46);
	var PixiEx_1 = __webpack_require__(36);
	var const_1 = __webpack_require__(33);
	var FoulText = (function (_super) {
	    __extends(FoulText, _super);
	    function FoulText(hintUrl) {
	        _super.call(this);
	        var h = PixiEx_1.newBitmap({ url: hintUrl });
	        this.hint = h;
	        this.addChild(h);
	        var fts = {
	            fontFamily: const_1.FontName.MicrosoftYahei,
	            fontSize: '30px', fill: "#fff",
	            fontWeight: 'bold'
	        };
	        var l = new PIXI.Text('', fts);
	        this.addChild(l);
	        this.label = l;
	    }
	    FoulText.prototype.setFoul = function (v) {
	        var s = v + ' Foul';
	        this.hint.visible = false;
	        if (Number(v) > 3) {
	            s = '犯 满';
	            this.hint.visible = true;
	            Fx_1.blink2({
	                target: this.hint, time: 130, loop: 31
	            });
	        }
	        this.label.text = s;
	        this.label.x = (109 - this.label.width) * .5;
	    };
	    return FoulText;
	}(PIXI.Container));
	exports.FoulText = FoulText;


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Fx_1 = __webpack_require__(46);
	var PixiEx_1 = __webpack_require__(36);
	var SpriteGroup_1 = __webpack_require__(45);
	var FoulGroup = (function (_super) {
	    __extends(FoulGroup, _super);
	    function FoulGroup() {
	        _super.apply(this, arguments);
	    }
	    FoulGroup.prototype.setNum = function (v) {
	        _super.prototype.setNum.call(this, v);
	        if (v >= 4) {
	            if (!this._hint) {
	                this._hint = PixiEx_1.newBitmap({
	                    url: '/img/panel/score2017/foulHint.png',
	                    x: -20,
	                    y: -22
	                });
	                this.addChild(this._hint);
	            }
	            this._hint.visible = true;
	            Fx_1.blink2({ target: this._hint, time: 100, loop: 100 });
	        }
	        else if (this._hint)
	            this._hint.visible = false;
	    };
	    return FoulGroup;
	}(SpriteGroup_1.SpriteGroup));
	exports.FoulGroup = FoulGroup;


/***/ },
/* 73 */
/***/ function(module, exports) {

	module.exports = "<div>\r\n    <div v-if=\"isOp\" id=\"opPanel\" style=\"position: absolute;left: 100px;top:60px;width: 1000px\">\r\n        <!--game id:{{gameId}}-->\r\n        <!--<a class=\"button\" @click=\"onClkRank\">个人战团排行</a>-->\r\n        <!--<a class=\"button\" @click=\"onClkBracket\">八强对阵</a>\r\n        <a class=\"button\" @click=\"onClkHide\">隐藏</a>-->\r\n\r\n\r\n        <h2>game id:{{gameId}} 当前延时:{{delayTimeShowOnly||0}}秒</h2>\r\n        <label class=\"label\">设置延时时间(秒)</label>\r\n        <p class=\"control\">\r\n            <input class=\"input\" type=\"text\" onkeypress='var c = event.charCode;\r\n                   return c >= 48 && c <= 57 ||c==46' placeholder=\"\" style=\"width: 50px;\" v-model=\"delayTime\">\r\n            <button class=\"button\" @click=\"onClkSetDelay\">确定</button>\r\n        </p>\r\n\r\n        <label class=\"label\">现场时间:{{liveTime}}</label>\r\n        <label class=\"label\">面板时间:{{panelTime}}</label>\r\n        <button class=\"button\" @click=\"onClkRenderData\">刷新现场数据到面板</button><br>\r\n        <label class=\"label\" style=\"font-size: 50px;\">{{lLiveName}}  vs {{rLiveName}}<br>蓝:{{lLiveScore}} foul:{{lLiveFoul}} 红: {{rLiveScore}} foul:{{rLiveFoul}}</label>\r\n        <label class=\"label\">比分面板:</label><br>\r\n        <button class=\"button\" @click=\"onClkStartTimer\">开始</button>\r\n        <button class=\"button\" @click=\"onClkPauseTimer\">暂停</button>\r\n        <button class=\"button\" @click=\"onClkResetTimer\">重置</button>\r\n        <button class=\"button\" @click=\"onClkShowScore(true)\">显示</button>\r\n        <button class=\"button\" @click=\"onClkShowScore(false)\">隐藏</button>\r\n        <p class=\"control\">\r\n            <input class=\"input\" type=\"text\" onkeypress='var c = event.charCode;\r\n                   return c >= 48 && c <= 57 ||c==46' placeholder=\"\" style=\"width: 50px;\" v-model=\"panelTime2Set\">\r\n            <button class=\"button\" @click=\"onClkSetPanelTime(panelTime2Set)\">确定</button>\r\n        </p>\r\n        <label class=\"label\">  冠军面板:</label><br>\r\n\r\n        <input class=\"input\" type=\"text\" placeholder=\"2017上海站第二轮冠军\" style=\"width: 250px;\" v-model=\"championTitle\">\r\n        <button class=\"button\" @click=\"onClkLeftChampion\">{{lLiveName}} 冠军</button>\r\n        <button class=\"button\" @click=\"onClkRightChampion\">{{rLiveName}} 冠军</button>\r\n        <button class=\"button\" @click=\"onClkToggleChampionPanel(true)\">显示</button>\r\n        <button class=\"button\" @click=\"onClkToggleChampionPanel(false)\">隐藏</button>\r\n        <br>\r\n        <!--<button class=\"button\" @click=\"onClkRegularPlayer\">剩余球员</button>-->\r\n        <label class=\"label\">   面板颜色：</label> <br>\r\n        <button class=\"button\" @click=\"onClkToggleTheme(false)\">切换绿色面板</button>\r\n        <button class=\"button\" @click=\"onClkToggleTheme(true)\">切换蓝色面板</button>\r\n        <!--公告-->\r\n        <div style=\"left: 600px;top:0px;position: absolute;\">\r\n            <label class=\"radio\">\r\n                <input type=\"radio\" name=\"bold\" value='normal' v-model='isBold' checked >\r\n                正常\r\n            </label>\r\n            <label class=\"radio\">\r\n                <input type=\"radio\" name=\"bold\" value='bold' v-model='isBold'>\r\n                加粗\r\n            </label>\r\n            <br>\r\n            <input class=\"input\" type=\"text\" placeholder=\"公告\" style=\"width: 280px;\" v-model=\"noticeTitle\">\r\n            <textarea style=\"width:580px;height:250px\" v-model=\"noticeContent\"></textarea>\r\n            <button class=\"button\" @click=\"onClkNotice(true,true)\">左边显示</button>\r\n            <button class=\"button\" @click=\"onClkNotice(true,false)\">右边显示</button>\r\n            <button class=\"button\" @click=\"onClkNotice(false,false)\">隐藏</button>\r\n            <button class=\"button\" @click=\"onClkNoticePresets(1)\">报名预置</button>\r\n        </div>\r\n    </div>\r\n</div>";

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var WebJsFunc_1 = __webpack_require__(23);
	var VueBase_1 = __webpack_require__(18);
	var JsFunc_1 = __webpack_require__(17);
	var const_1 = __webpack_require__(33);
	var Command_1 = __webpack_require__(51);
	var opReq = function (cmdId, param, callback) {
	    $.post("/panel/" + const_1.PanelId.onlinePanel + "/" + cmdId, param, callback);
	};
	var RKBView = (function (_super) {
	    __extends(RKBView, _super);
	    function RKBView() {
	        _super.call(this);
	        this.template = __webpack_require__(75);
	        this.links = VueBase_1.VueBase.PROP;
	        this.isOp = VueBase_1.VueBase.PROP;
	        this.gameId = VueBase_1.VueBase.PROP;
	        this.panelTime = VueBase_1.VueBase.String;
	        this.liveTime = VueBase_1.VueBase.String;
	        this.delayTime = VueBase_1.VueBase.Number;
	        this.test = VueBase_1.VueBase.PROP;
	        this.srvTime = 0;
	        this.isTimerRunning = false;
	        this.delayTimeMS = 0;
	        this.methods = {
	            onClkSetDelay: function () {
	                console.log("onClkSetDelay", this, this.delayTime);
	                var dt = Number(this.delayTime);
	                if (dt >= 0) {
	                    this.delayTimeMS = dt * 1000;
	                    opReq("" + Command_1.CommandId.cs_setDelayTime, { delayTimeMS: this.delayTimeMS, _: null }, function () {
	                    });
	                }
	            },
	            onClkStartTimer: function () {
	                opReq("" + Command_1.CommandId.cs_startTimer, { _: null }, function () {
	                    console.log("onClkStartTimer");
	                });
	            },
	            onClkPauseTimer: function () {
	                opReq("" + Command_1.CommandId.cs_pauseTimer, { _: null }, function () {
	                    console.log("onClkPauseTimer");
	                });
	            },
	            onClkResetTimer: function () {
	                opReq("" + Command_1.CommandId.cs_resetTimer, { _: null }, function () {
	                    console.log("onClkResetTimer");
	                });
	            }
	        };
	        VueBase_1.VueBase.initProps(this);
	    }
	    RKBView.prototype.created = function () {
	        console.log('RKBView created!');
	        this.panelTime = "tesst";
	        this.isOp = this.$route.params.op == "op";
	        if (this.isOp) {
	            WebJsFunc_1.dynamicLoading.css('/css/bulma.min.css');
	        }
	        this.gameId = this.$route.params.game_id;
	    };
	    RKBView.prototype.mounted = function () {
	    };
	    RKBView.prototype.onTick = function () {
	        console.log("onTick");
	        this.srvTime += 1000;
	        this.liveTime = JsFunc_1.DateFormat(new Date(this.srvTime), "hh:mm:ss");
	        this.panelTime = JsFunc_1.DateFormat(new Date(this.srvTime - this.delayTimeMS), "hh:mm:ss");
	    };
	    RKBView.prototype.setSrvTime = function (t) {
	        var _this = this;
	        console.log("isRunning:", this.isTimerRunning, this.onTick, t);
	        this.srvTime = t;
	        if (!this.isTimerRunning) {
	            this.isTimerRunning = true;
	            setInterval(function () {
	                _this.onTick();
	            }, 1000);
	        }
	    };
	    return RKBView;
	}(VueBase_1.VueBase));
	exports.RKBView = RKBView;
	exports.rkbView = new RKBView();


/***/ },
/* 75 */
/***/ function(module, exports) {

	module.exports = "<div>\r\n    <div v-if=\"isOp\" id=\"opPanel\" style=\"position: absolute;left: 100px;top:60px;width: 1000px\">\r\n        <h1>game id:{{gameId}}</h1>\r\n        <label class=\"label\">设置延时时间(秒)</label>\r\n\r\n        <p class=\"control\">\r\n            <input class=\"input\" type=\"text\"\r\n                   onkeypress='var c = event.charCode;\r\n                   return c >= 48 && c <= 57 ||c==46'\r\n                   placeholder=\"\" style=\"width: 50px;\"\r\n                   v-model=\"delayTime\">\r\n            <button class=\"button\" @click=\"onClkSetDelay\">确定</button>\r\n        </p>\r\n\r\n        <label class=\"label\">现场时间:{{liveTime}}</label>\r\n        <label class=\"label\">面板时间:{{panelTime}}</label>\r\n\r\n        <button class=\"button\" @click=\"onClkStartTimer\">开始</button>\r\n        <button class=\"button\" @click=\"onClkPauseTimer\">暂停</button>\r\n        <button class=\"button\" @click=\"onClkResetTimer\">重置</button>\r\n    </div>\r\n</div>\r\n";

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var JsFunc_1 = __webpack_require__(17);
	var LogoFx = (function (_super) {
	    __extends(LogoFx, _super);
	    function LogoFx() {
	        _super.call(this);
	        var alienImages = [];
	        for (var i = 1; i < 19; i++) {
	            alienImages.push('/img/panel/logo/logo_' + JsFunc_1.paddy(i, 5) + '.png');
	        }
	        var textureArray = [];
	        for (var i_1 = 0; i_1 < alienImages.length; i_1++) {
	            var texture = PIXI.Texture.fromImage(alienImages[i_1]);
	            textureArray.push(texture);
	        }
	        ;
	        var mc = new PIXI.extras['AnimatedSprite'](textureArray);
	        mc.animationSpeed = .3;
	        mc.scale.x = mc.scale.y = 2;
	        mc.play();
	        this.addChild(mc);
	        console.log('mc', mc);
	    }
	    LogoFx.prototype.show = function () {
	        this.mc.play();
	    };
	    return LogoFx;
	}(PIXI.Container));
	exports.LogoFx = LogoFx;


/***/ }
/******/ ]);
//# sourceMappingURL=panel.js.map