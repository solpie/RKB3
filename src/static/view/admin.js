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
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	__webpack_require__(1);
	__webpack_require__(5);
	__webpack_require__(7);
	__webpack_require__(10);
	__webpack_require__(12);
	__webpack_require__(14);
	__webpack_require__(16);
	__webpack_require__(18);
	var home_1 = __webpack_require__(20);
	var GameAdmin_1 = __webpack_require__(26);
	var CommonGameAdmin_1 = __webpack_require__(45);
	var PickTeamAdmin_1 = __webpack_require__(47);
	var routes = [
	    {
	        path: '/', name: 'home',
	        components: { content: home_1.homeView, GameAdmin: GameAdmin_1.GameAdmin }
	    },
	    {
	        path: '/com', name: 'com',
	        components: { content: CommonGameAdmin_1.CommonGameAdmin },
	    },
	    {
	        path: '/pick', name: 'pick',
	        components: { content: PickTeamAdmin_1.PickTeamAdmin },
	    },
	];
	var router = new VueRouter({
	    routes: routes
	});
	router.afterEach(function (to, from) {
	    var toPath = to.path;
	    router.app.active = toPath.split("/")[1];
	});
	var app = new Vue({
	    router: router
	}).$mount('#app');


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/_css-loader@0.25.0@css-loader/index.js?root=.!./bulma.min.css", function() {
				var newContent = require("!!../../../node_modules/_css-loader@0.25.0@css-loader/index.js?root=.!./bulma.min.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, "/*! bulma.io v0.7.1 | MIT License | github.com/jgthms/bulma */@-webkit-keyframes spinAround{from{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes spinAround{from{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.breadcrumb,.button,.delete,.file,.is-unselectable,.modal-close,.pagination-ellipsis,.pagination-link,.pagination-next,.pagination-previous,.tabs{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.navbar-link::after,.select:not(.is-multiple):not(.is-loading)::after{border:3px solid transparent;border-radius:2px;border-right:0;border-top:0;content:\" \";display:block;height:.625em;margin-top:-.4375em;pointer-events:none;position:absolute;top:50%;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:center;transform-origin:center;width:.625em}.block:not(:last-child),.box:not(:last-child),.breadcrumb:not(:last-child),.content:not(:last-child),.highlight:not(:last-child),.level:not(:last-child),.message:not(:last-child),.notification:not(:last-child),.progress:not(:last-child),.subtitle:not(:last-child),.table-container:not(:last-child),.table:not(:last-child),.tabs:not(:last-child),.title:not(:last-child){margin-bottom:1.5rem}.delete,.modal-close{-moz-appearance:none;-webkit-appearance:none;background-color:rgba(10,10,10,.2);border:none;border-radius:290486px;cursor:pointer;display:inline-block;flex-grow:0;flex-shrink:0;font-size:0;height:20px;max-height:20px;max-width:20px;min-height:20px;min-width:20px;outline:0;position:relative;vertical-align:top;width:20px}.delete::after,.delete::before,.modal-close::after,.modal-close::before{background-color:#fff;content:\"\";display:block;left:50%;position:absolute;top:50%;-webkit-transform:translateX(-50%) translateY(-50%) rotate(45deg);transform:translateX(-50%) translateY(-50%) rotate(45deg);-webkit-transform-origin:center center;transform-origin:center center}.delete::before,.modal-close::before{height:2px;width:50%}.delete::after,.modal-close::after{height:50%;width:2px}.delete:focus,.delete:hover,.modal-close:focus,.modal-close:hover{background-color:rgba(10,10,10,.3)}.delete:active,.modal-close:active{background-color:rgba(10,10,10,.4)}.is-small.delete,.is-small.modal-close{height:16px;max-height:16px;max-width:16px;min-height:16px;min-width:16px;width:16px}.is-medium.delete,.is-medium.modal-close{height:24px;max-height:24px;max-width:24px;min-height:24px;min-width:24px;width:24px}.is-large.delete,.is-large.modal-close{height:32px;max-height:32px;max-width:32px;min-height:32px;min-width:32px;width:32px}.button.is-loading::after,.control.is-loading::after,.loader,.select.is-loading::after{-webkit-animation:spinAround .5s infinite linear;animation:spinAround .5s infinite linear;border:2px solid #dbdbdb;border-radius:290486px;border-right-color:transparent;border-top-color:transparent;content:\"\";display:block;height:1em;position:relative;width:1em}.hero-video,.image.is-16by9 img,.image.is-1by1 img,.image.is-1by2 img,.image.is-1by3 img,.image.is-2by1 img,.image.is-2by3 img,.image.is-3by1 img,.image.is-3by2 img,.image.is-3by4 img,.image.is-3by5 img,.image.is-4by3 img,.image.is-4by5 img,.image.is-5by3 img,.image.is-5by4 img,.image.is-9by16 img,.image.is-square img,.is-overlay,.modal,.modal-background{bottom:0;left:0;position:absolute;right:0;top:0}.button,.file-cta,.file-name,.input,.pagination-ellipsis,.pagination-link,.pagination-next,.pagination-previous,.select select,.textarea{-moz-appearance:none;-webkit-appearance:none;align-items:center;border:1px solid transparent;border-radius:4px;box-shadow:none;display:inline-flex;font-size:1rem;height:2.25em;justify-content:flex-start;line-height:1.5;padding-bottom:calc(.375em - 1px);padding-left:calc(.625em - 1px);padding-right:calc(.625em - 1px);padding-top:calc(.375em - 1px);position:relative;vertical-align:top}.button:active,.button:focus,.file-cta:active,.file-cta:focus,.file-name:active,.file-name:focus,.input:active,.input:focus,.is-active.button,.is-active.file-cta,.is-active.file-name,.is-active.input,.is-active.pagination-ellipsis,.is-active.pagination-link,.is-active.pagination-next,.is-active.pagination-previous,.is-active.textarea,.is-focused.button,.is-focused.file-cta,.is-focused.file-name,.is-focused.input,.is-focused.pagination-ellipsis,.is-focused.pagination-link,.is-focused.pagination-next,.is-focused.pagination-previous,.is-focused.textarea,.pagination-ellipsis:active,.pagination-ellipsis:focus,.pagination-link:active,.pagination-link:focus,.pagination-next:active,.pagination-next:focus,.pagination-previous:active,.pagination-previous:focus,.select select.is-active,.select select.is-focused,.select select:active,.select select:focus,.textarea:active,.textarea:focus{outline:0}.button[disabled],.file-cta[disabled],.file-name[disabled],.input[disabled],.pagination-ellipsis[disabled],.pagination-link[disabled],.pagination-next[disabled],.pagination-previous[disabled],.select select[disabled],.textarea[disabled]{cursor:not-allowed}/*! minireset.css v0.0.3 | MIT License | github.com/jgthms/minireset.css */blockquote,body,dd,dl,dt,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,html,iframe,legend,li,ol,p,pre,textarea,ul{margin:0;padding:0}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:400}ul{list-style:none}button,input,select,textarea{margin:0}html{box-sizing:border-box}*,::after,::before{box-sizing:inherit}audio,img,video{height:auto;max-width:100%}iframe{border:0}table{border-collapse:collapse;border-spacing:0}td,th{padding:0;text-align:left}html{background-color:#fff;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;min-width:300px;overflow-x:hidden;overflow-y:scroll;text-rendering:optimizeLegibility;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;-ms-text-size-adjust:100%;text-size-adjust:100%}article,aside,figure,footer,header,hgroup,section{display:block}body,button,input,select,textarea{font-family:BlinkMacSystemFont,-apple-system,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Fira Sans\",\"Droid Sans\",\"Helvetica Neue\",Helvetica,Arial,sans-serif}code,pre{-moz-osx-font-smoothing:auto;-webkit-font-smoothing:auto;font-family:monospace}body{color:#4a4a4a;font-size:1rem;font-weight:400;line-height:1.5}a{color:#3273dc;cursor:pointer;text-decoration:none}a strong{color:currentColor}a:hover{color:#363636}code{background-color:#f5f5f5;color:#ff3860;font-size:.875em;font-weight:400;padding:.25em .5em .25em}hr{background-color:#f5f5f5;border:none;display:block;height:2px;margin:1.5rem 0}img{height:auto;max-width:100%}input[type=checkbox],input[type=radio]{vertical-align:baseline}small{font-size:.875em}span{font-style:inherit;font-weight:inherit}strong{color:#363636;font-weight:700}pre{-webkit-overflow-scrolling:touch;background-color:#f5f5f5;color:#4a4a4a;font-size:.875em;overflow-x:auto;padding:1.25rem 1.5rem;white-space:pre;word-wrap:normal}pre code{background-color:transparent;color:currentColor;font-size:1em;padding:0}table td,table th{text-align:left;vertical-align:top}table th{color:#363636}.is-clearfix::after{clear:both;content:\" \";display:table}.is-pulled-left{float:left!important}.is-pulled-right{float:right!important}.is-clipped{overflow:hidden!important}.is-size-1{font-size:3rem!important}.is-size-2{font-size:2.5rem!important}.is-size-3{font-size:2rem!important}.is-size-4{font-size:1.5rem!important}.is-size-5{font-size:1.25rem!important}.is-size-6{font-size:1rem!important}.is-size-7{font-size:.75rem!important}@media screen and (max-width:768px){.is-size-1-mobile{font-size:3rem!important}.is-size-2-mobile{font-size:2.5rem!important}.is-size-3-mobile{font-size:2rem!important}.is-size-4-mobile{font-size:1.5rem!important}.is-size-5-mobile{font-size:1.25rem!important}.is-size-6-mobile{font-size:1rem!important}.is-size-7-mobile{font-size:.75rem!important}}@media screen and (min-width:769px),print{.is-size-1-tablet{font-size:3rem!important}.is-size-2-tablet{font-size:2.5rem!important}.is-size-3-tablet{font-size:2rem!important}.is-size-4-tablet{font-size:1.5rem!important}.is-size-5-tablet{font-size:1.25rem!important}.is-size-6-tablet{font-size:1rem!important}.is-size-7-tablet{font-size:.75rem!important}}@media screen and (max-width:1087px){.is-size-1-touch{font-size:3rem!important}.is-size-2-touch{font-size:2.5rem!important}.is-size-3-touch{font-size:2rem!important}.is-size-4-touch{font-size:1.5rem!important}.is-size-5-touch{font-size:1.25rem!important}.is-size-6-touch{font-size:1rem!important}.is-size-7-touch{font-size:.75rem!important}}@media screen and (min-width:1088px){.is-size-1-desktop{font-size:3rem!important}.is-size-2-desktop{font-size:2.5rem!important}.is-size-3-desktop{font-size:2rem!important}.is-size-4-desktop{font-size:1.5rem!important}.is-size-5-desktop{font-size:1.25rem!important}.is-size-6-desktop{font-size:1rem!important}.is-size-7-desktop{font-size:.75rem!important}}@media screen and (min-width:1280px){.is-size-1-widescreen{font-size:3rem!important}.is-size-2-widescreen{font-size:2.5rem!important}.is-size-3-widescreen{font-size:2rem!important}.is-size-4-widescreen{font-size:1.5rem!important}.is-size-5-widescreen{font-size:1.25rem!important}.is-size-6-widescreen{font-size:1rem!important}.is-size-7-widescreen{font-size:.75rem!important}}@media screen and (min-width:1472px){.is-size-1-fullhd{font-size:3rem!important}.is-size-2-fullhd{font-size:2.5rem!important}.is-size-3-fullhd{font-size:2rem!important}.is-size-4-fullhd{font-size:1.5rem!important}.is-size-5-fullhd{font-size:1.25rem!important}.is-size-6-fullhd{font-size:1rem!important}.is-size-7-fullhd{font-size:.75rem!important}}.has-text-centered{text-align:center!important}.has-text-justified{text-align:justify!important}.has-text-left{text-align:left!important}.has-text-right{text-align:right!important}@media screen and (max-width:768px){.has-text-centered-mobile{text-align:center!important}}@media screen and (min-width:769px),print{.has-text-centered-tablet{text-align:center!important}}@media screen and (min-width:769px) and (max-width:1087px){.has-text-centered-tablet-only{text-align:center!important}}@media screen and (max-width:1087px){.has-text-centered-touch{text-align:center!important}}@media screen and (min-width:1088px){.has-text-centered-desktop{text-align:center!important}}@media screen and (min-width:1088px) and (max-width:1279px){.has-text-centered-desktop-only{text-align:center!important}}@media screen and (min-width:1280px){.has-text-centered-widescreen{text-align:center!important}}@media screen and (min-width:1280px) and (max-width:1471px){.has-text-centered-widescreen-only{text-align:center!important}}@media screen and (min-width:1472px){.has-text-centered-fullhd{text-align:center!important}}@media screen and (max-width:768px){.has-text-justified-mobile{text-align:justify!important}}@media screen and (min-width:769px),print{.has-text-justified-tablet{text-align:justify!important}}@media screen and (min-width:769px) and (max-width:1087px){.has-text-justified-tablet-only{text-align:justify!important}}@media screen and (max-width:1087px){.has-text-justified-touch{text-align:justify!important}}@media screen and (min-width:1088px){.has-text-justified-desktop{text-align:justify!important}}@media screen and (min-width:1088px) and (max-width:1279px){.has-text-justified-desktop-only{text-align:justify!important}}@media screen and (min-width:1280px){.has-text-justified-widescreen{text-align:justify!important}}@media screen and (min-width:1280px) and (max-width:1471px){.has-text-justified-widescreen-only{text-align:justify!important}}@media screen and (min-width:1472px){.has-text-justified-fullhd{text-align:justify!important}}@media screen and (max-width:768px){.has-text-left-mobile{text-align:left!important}}@media screen and (min-width:769px),print{.has-text-left-tablet{text-align:left!important}}@media screen and (min-width:769px) and (max-width:1087px){.has-text-left-tablet-only{text-align:left!important}}@media screen and (max-width:1087px){.has-text-left-touch{text-align:left!important}}@media screen and (min-width:1088px){.has-text-left-desktop{text-align:left!important}}@media screen and (min-width:1088px) and (max-width:1279px){.has-text-left-desktop-only{text-align:left!important}}@media screen and (min-width:1280px){.has-text-left-widescreen{text-align:left!important}}@media screen and (min-width:1280px) and (max-width:1471px){.has-text-left-widescreen-only{text-align:left!important}}@media screen and (min-width:1472px){.has-text-left-fullhd{text-align:left!important}}@media screen and (max-width:768px){.has-text-right-mobile{text-align:right!important}}@media screen and (min-width:769px),print{.has-text-right-tablet{text-align:right!important}}@media screen and (min-width:769px) and (max-width:1087px){.has-text-right-tablet-only{text-align:right!important}}@media screen and (max-width:1087px){.has-text-right-touch{text-align:right!important}}@media screen and (min-width:1088px){.has-text-right-desktop{text-align:right!important}}@media screen and (min-width:1088px) and (max-width:1279px){.has-text-right-desktop-only{text-align:right!important}}@media screen and (min-width:1280px){.has-text-right-widescreen{text-align:right!important}}@media screen and (min-width:1280px) and (max-width:1471px){.has-text-right-widescreen-only{text-align:right!important}}@media screen and (min-width:1472px){.has-text-right-fullhd{text-align:right!important}}.is-capitalized{text-transform:capitalize!important}.is-lowercase{text-transform:lowercase!important}.is-uppercase{text-transform:uppercase!important}.is-italic{font-style:italic!important}.has-text-white{color:#fff!important}a.has-text-white:focus,a.has-text-white:hover{color:#e6e6e6!important}.has-background-white{background-color:#fff!important}.has-text-black{color:#0a0a0a!important}a.has-text-black:focus,a.has-text-black:hover{color:#000!important}.has-background-black{background-color:#0a0a0a!important}.has-text-light{color:#f5f5f5!important}a.has-text-light:focus,a.has-text-light:hover{color:#dbdbdb!important}.has-background-light{background-color:#f5f5f5!important}.has-text-dark{color:#363636!important}a.has-text-dark:focus,a.has-text-dark:hover{color:#1c1c1c!important}.has-background-dark{background-color:#363636!important}.has-text-primary{color:#00d1b2!important}a.has-text-primary:focus,a.has-text-primary:hover{color:#009e86!important}.has-background-primary{background-color:#00d1b2!important}.has-text-link{color:#3273dc!important}a.has-text-link:focus,a.has-text-link:hover{color:#205bbc!important}.has-background-link{background-color:#3273dc!important}.has-text-info{color:#209cee!important}a.has-text-info:focus,a.has-text-info:hover{color:#0f81cc!important}.has-background-info{background-color:#209cee!important}.has-text-success{color:#23d160!important}a.has-text-success:focus,a.has-text-success:hover{color:#1ca64c!important}.has-background-success{background-color:#23d160!important}.has-text-warning{color:#ffdd57!important}a.has-text-warning:focus,a.has-text-warning:hover{color:#ffd324!important}.has-background-warning{background-color:#ffdd57!important}.has-text-danger{color:#ff3860!important}a.has-text-danger:focus,a.has-text-danger:hover{color:#ff0537!important}.has-background-danger{background-color:#ff3860!important}.has-text-black-bis{color:#121212!important}.has-background-black-bis{background-color:#121212!important}.has-text-black-ter{color:#242424!important}.has-background-black-ter{background-color:#242424!important}.has-text-grey-darker{color:#363636!important}.has-background-grey-darker{background-color:#363636!important}.has-text-grey-dark{color:#4a4a4a!important}.has-background-grey-dark{background-color:#4a4a4a!important}.has-text-grey{color:#7a7a7a!important}.has-background-grey{background-color:#7a7a7a!important}.has-text-grey-light{color:#b5b5b5!important}.has-background-grey-light{background-color:#b5b5b5!important}.has-text-grey-lighter{color:#dbdbdb!important}.has-background-grey-lighter{background-color:#dbdbdb!important}.has-text-white-ter{color:#f5f5f5!important}.has-background-white-ter{background-color:#f5f5f5!important}.has-text-white-bis{color:#fafafa!important}.has-background-white-bis{background-color:#fafafa!important}.has-text-weight-light{font-weight:300!important}.has-text-weight-normal{font-weight:400!important}.has-text-weight-semibold{font-weight:600!important}.has-text-weight-bold{font-weight:700!important}.is-block{display:block!important}@media screen and (max-width:768px){.is-block-mobile{display:block!important}}@media screen and (min-width:769px),print{.is-block-tablet{display:block!important}}@media screen and (min-width:769px) and (max-width:1087px){.is-block-tablet-only{display:block!important}}@media screen and (max-width:1087px){.is-block-touch{display:block!important}}@media screen and (min-width:1088px){.is-block-desktop{display:block!important}}@media screen and (min-width:1088px) and (max-width:1279px){.is-block-desktop-only{display:block!important}}@media screen and (min-width:1280px){.is-block-widescreen{display:block!important}}@media screen and (min-width:1280px) and (max-width:1471px){.is-block-widescreen-only{display:block!important}}@media screen and (min-width:1472px){.is-block-fullhd{display:block!important}}.is-flex{display:flex!important}@media screen and (max-width:768px){.is-flex-mobile{display:flex!important}}@media screen and (min-width:769px),print{.is-flex-tablet{display:flex!important}}@media screen and (min-width:769px) and (max-width:1087px){.is-flex-tablet-only{display:flex!important}}@media screen and (max-width:1087px){.is-flex-touch{display:flex!important}}@media screen and (min-width:1088px){.is-flex-desktop{display:flex!important}}@media screen and (min-width:1088px) and (max-width:1279px){.is-flex-desktop-only{display:flex!important}}@media screen and (min-width:1280px){.is-flex-widescreen{display:flex!important}}@media screen and (min-width:1280px) and (max-width:1471px){.is-flex-widescreen-only{display:flex!important}}@media screen and (min-width:1472px){.is-flex-fullhd{display:flex!important}}.is-inline{display:inline!important}@media screen and (max-width:768px){.is-inline-mobile{display:inline!important}}@media screen and (min-width:769px),print{.is-inline-tablet{display:inline!important}}@media screen and (min-width:769px) and (max-width:1087px){.is-inline-tablet-only{display:inline!important}}@media screen and (max-width:1087px){.is-inline-touch{display:inline!important}}@media screen and (min-width:1088px){.is-inline-desktop{display:inline!important}}@media screen and (min-width:1088px) and (max-width:1279px){.is-inline-desktop-only{display:inline!important}}@media screen and (min-width:1280px){.is-inline-widescreen{display:inline!important}}@media screen and (min-width:1280px) and (max-width:1471px){.is-inline-widescreen-only{display:inline!important}}@media screen and (min-width:1472px){.is-inline-fullhd{display:inline!important}}.is-inline-block{display:inline-block!important}@media screen and (max-width:768px){.is-inline-block-mobile{display:inline-block!important}}@media screen and (min-width:769px),print{.is-inline-block-tablet{display:inline-block!important}}@media screen and (min-width:769px) and (max-width:1087px){.is-inline-block-tablet-only{display:inline-block!important}}@media screen and (max-width:1087px){.is-inline-block-touch{display:inline-block!important}}@media screen and (min-width:1088px){.is-inline-block-desktop{display:inline-block!important}}@media screen and (min-width:1088px) and (max-width:1279px){.is-inline-block-desktop-only{display:inline-block!important}}@media screen and (min-width:1280px){.is-inline-block-widescreen{display:inline-block!important}}@media screen and (min-width:1280px) and (max-width:1471px){.is-inline-block-widescreen-only{display:inline-block!important}}@media screen and (min-width:1472px){.is-inline-block-fullhd{display:inline-block!important}}.is-inline-flex{display:inline-flex!important}@media screen and (max-width:768px){.is-inline-flex-mobile{display:inline-flex!important}}@media screen and (min-width:769px),print{.is-inline-flex-tablet{display:inline-flex!important}}@media screen and (min-width:769px) and (max-width:1087px){.is-inline-flex-tablet-only{display:inline-flex!important}}@media screen and (max-width:1087px){.is-inline-flex-touch{display:inline-flex!important}}@media screen and (min-width:1088px){.is-inline-flex-desktop{display:inline-flex!important}}@media screen and (min-width:1088px) and (max-width:1279px){.is-inline-flex-desktop-only{display:inline-flex!important}}@media screen and (min-width:1280px){.is-inline-flex-widescreen{display:inline-flex!important}}@media screen and (min-width:1280px) and (max-width:1471px){.is-inline-flex-widescreen-only{display:inline-flex!important}}@media screen and (min-width:1472px){.is-inline-flex-fullhd{display:inline-flex!important}}.is-hidden{display:none!important}@media screen and (max-width:768px){.is-hidden-mobile{display:none!important}}@media screen and (min-width:769px),print{.is-hidden-tablet{display:none!important}}@media screen and (min-width:769px) and (max-width:1087px){.is-hidden-tablet-only{display:none!important}}@media screen and (max-width:1087px){.is-hidden-touch{display:none!important}}@media screen and (min-width:1088px){.is-hidden-desktop{display:none!important}}@media screen and (min-width:1088px) and (max-width:1279px){.is-hidden-desktop-only{display:none!important}}@media screen and (min-width:1280px){.is-hidden-widescreen{display:none!important}}@media screen and (min-width:1280px) and (max-width:1471px){.is-hidden-widescreen-only{display:none!important}}@media screen and (min-width:1472px){.is-hidden-fullhd{display:none!important}}.is-invisible{visibility:hidden!important}@media screen and (max-width:768px){.is-invisible-mobile{visibility:hidden!important}}@media screen and (min-width:769px),print{.is-invisible-tablet{visibility:hidden!important}}@media screen and (min-width:769px) and (max-width:1087px){.is-invisible-tablet-only{visibility:hidden!important}}@media screen and (max-width:1087px){.is-invisible-touch{visibility:hidden!important}}@media screen and (min-width:1088px){.is-invisible-desktop{visibility:hidden!important}}@media screen and (min-width:1088px) and (max-width:1279px){.is-invisible-desktop-only{visibility:hidden!important}}@media screen and (min-width:1280px){.is-invisible-widescreen{visibility:hidden!important}}@media screen and (min-width:1280px) and (max-width:1471px){.is-invisible-widescreen-only{visibility:hidden!important}}@media screen and (min-width:1472px){.is-invisible-fullhd{visibility:hidden!important}}.is-marginless{margin:0!important}.is-paddingless{padding:0!important}.is-radiusless{border-radius:0!important}.is-shadowless{box-shadow:none!important}.box{background-color:#fff;border-radius:6px;box-shadow:0 2px 3px rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.1);color:#4a4a4a;display:block;padding:1.25rem}a.box:focus,a.box:hover{box-shadow:0 2px 3px rgba(10,10,10,.1),0 0 0 1px #3273dc}a.box:active{box-shadow:inset 0 1px 2px rgba(10,10,10,.2),0 0 0 1px #3273dc}.button{background-color:#fff;border-color:#dbdbdb;border-width:1px;color:#363636;cursor:pointer;justify-content:center;padding-bottom:calc(.375em - 1px);padding-left:.75em;padding-right:.75em;padding-top:calc(.375em - 1px);text-align:center;white-space:nowrap}.button strong{color:inherit}.button .icon,.button .icon.is-large,.button .icon.is-medium,.button .icon.is-small{height:1.5em;width:1.5em}.button .icon:first-child:not(:last-child){margin-left:calc(-.375em - 1px);margin-right:.1875em}.button .icon:last-child:not(:first-child){margin-left:.1875em;margin-right:calc(-.375em - 1px)}.button .icon:first-child:last-child{margin-left:calc(-.375em - 1px);margin-right:calc(-.375em - 1px)}.button.is-hovered,.button:hover{border-color:#b5b5b5;color:#363636}.button.is-focused,.button:focus{border-color:#3273dc;color:#363636}.button.is-focused:not(:active),.button:focus:not(:active){box-shadow:0 0 0 .125em rgba(50,115,220,.25)}.button.is-active,.button:active{border-color:#4a4a4a;color:#363636}.button.is-text{background-color:transparent;border-color:transparent;color:#4a4a4a;text-decoration:underline}.button.is-text.is-focused,.button.is-text.is-hovered,.button.is-text:focus,.button.is-text:hover{background-color:#f5f5f5;color:#363636}.button.is-text.is-active,.button.is-text:active{background-color:#e8e8e8;color:#363636}.button.is-text[disabled]{background-color:transparent;border-color:transparent;box-shadow:none}.button.is-white{background-color:#fff;border-color:transparent;color:#0a0a0a}.button.is-white.is-hovered,.button.is-white:hover{background-color:#f9f9f9;border-color:transparent;color:#0a0a0a}.button.is-white.is-focused,.button.is-white:focus{border-color:transparent;color:#0a0a0a}.button.is-white.is-focused:not(:active),.button.is-white:focus:not(:active){box-shadow:0 0 0 .125em rgba(255,255,255,.25)}.button.is-white.is-active,.button.is-white:active{background-color:#f2f2f2;border-color:transparent;color:#0a0a0a}.button.is-white[disabled]{background-color:#fff;border-color:transparent;box-shadow:none}.button.is-white.is-inverted{background-color:#0a0a0a;color:#fff}.button.is-white.is-inverted:hover{background-color:#000}.button.is-white.is-inverted[disabled]{background-color:#0a0a0a;border-color:transparent;box-shadow:none;color:#fff}.button.is-white.is-loading::after{border-color:transparent transparent #0a0a0a #0a0a0a!important}.button.is-white.is-outlined{background-color:transparent;border-color:#fff;color:#fff}.button.is-white.is-outlined:focus,.button.is-white.is-outlined:hover{background-color:#fff;border-color:#fff;color:#0a0a0a}.button.is-white.is-outlined.is-loading::after{border-color:transparent transparent #fff #fff!important}.button.is-white.is-outlined[disabled]{background-color:transparent;border-color:#fff;box-shadow:none;color:#fff}.button.is-white.is-inverted.is-outlined{background-color:transparent;border-color:#0a0a0a;color:#0a0a0a}.button.is-white.is-inverted.is-outlined:focus,.button.is-white.is-inverted.is-outlined:hover{background-color:#0a0a0a;color:#fff}.button.is-white.is-inverted.is-outlined[disabled]{background-color:transparent;border-color:#0a0a0a;box-shadow:none;color:#0a0a0a}.button.is-black{background-color:#0a0a0a;border-color:transparent;color:#fff}.button.is-black.is-hovered,.button.is-black:hover{background-color:#040404;border-color:transparent;color:#fff}.button.is-black.is-focused,.button.is-black:focus{border-color:transparent;color:#fff}.button.is-black.is-focused:not(:active),.button.is-black:focus:not(:active){box-shadow:0 0 0 .125em rgba(10,10,10,.25)}.button.is-black.is-active,.button.is-black:active{background-color:#000;border-color:transparent;color:#fff}.button.is-black[disabled]{background-color:#0a0a0a;border-color:transparent;box-shadow:none}.button.is-black.is-inverted{background-color:#fff;color:#0a0a0a}.button.is-black.is-inverted:hover{background-color:#f2f2f2}.button.is-black.is-inverted[disabled]{background-color:#fff;border-color:transparent;box-shadow:none;color:#0a0a0a}.button.is-black.is-loading::after{border-color:transparent transparent #fff #fff!important}.button.is-black.is-outlined{background-color:transparent;border-color:#0a0a0a;color:#0a0a0a}.button.is-black.is-outlined:focus,.button.is-black.is-outlined:hover{background-color:#0a0a0a;border-color:#0a0a0a;color:#fff}.button.is-black.is-outlined.is-loading::after{border-color:transparent transparent #0a0a0a #0a0a0a!important}.button.is-black.is-outlined[disabled]{background-color:transparent;border-color:#0a0a0a;box-shadow:none;color:#0a0a0a}.button.is-black.is-inverted.is-outlined{background-color:transparent;border-color:#fff;color:#fff}.button.is-black.is-inverted.is-outlined:focus,.button.is-black.is-inverted.is-outlined:hover{background-color:#fff;color:#0a0a0a}.button.is-black.is-inverted.is-outlined[disabled]{background-color:transparent;border-color:#fff;box-shadow:none;color:#fff}.button.is-light{background-color:#f5f5f5;border-color:transparent;color:#363636}.button.is-light.is-hovered,.button.is-light:hover{background-color:#eee;border-color:transparent;color:#363636}.button.is-light.is-focused,.button.is-light:focus{border-color:transparent;color:#363636}.button.is-light.is-focused:not(:active),.button.is-light:focus:not(:active){box-shadow:0 0 0 .125em rgba(245,245,245,.25)}.button.is-light.is-active,.button.is-light:active{background-color:#e8e8e8;border-color:transparent;color:#363636}.button.is-light[disabled]{background-color:#f5f5f5;border-color:transparent;box-shadow:none}.button.is-light.is-inverted{background-color:#363636;color:#f5f5f5}.button.is-light.is-inverted:hover{background-color:#292929}.button.is-light.is-inverted[disabled]{background-color:#363636;border-color:transparent;box-shadow:none;color:#f5f5f5}.button.is-light.is-loading::after{border-color:transparent transparent #363636 #363636!important}.button.is-light.is-outlined{background-color:transparent;border-color:#f5f5f5;color:#f5f5f5}.button.is-light.is-outlined:focus,.button.is-light.is-outlined:hover{background-color:#f5f5f5;border-color:#f5f5f5;color:#363636}.button.is-light.is-outlined.is-loading::after{border-color:transparent transparent #f5f5f5 #f5f5f5!important}.button.is-light.is-outlined[disabled]{background-color:transparent;border-color:#f5f5f5;box-shadow:none;color:#f5f5f5}.button.is-light.is-inverted.is-outlined{background-color:transparent;border-color:#363636;color:#363636}.button.is-light.is-inverted.is-outlined:focus,.button.is-light.is-inverted.is-outlined:hover{background-color:#363636;color:#f5f5f5}.button.is-light.is-inverted.is-outlined[disabled]{background-color:transparent;border-color:#363636;box-shadow:none;color:#363636}.button.is-dark{background-color:#363636;border-color:transparent;color:#f5f5f5}.button.is-dark.is-hovered,.button.is-dark:hover{background-color:#2f2f2f;border-color:transparent;color:#f5f5f5}.button.is-dark.is-focused,.button.is-dark:focus{border-color:transparent;color:#f5f5f5}.button.is-dark.is-focused:not(:active),.button.is-dark:focus:not(:active){box-shadow:0 0 0 .125em rgba(54,54,54,.25)}.button.is-dark.is-active,.button.is-dark:active{background-color:#292929;border-color:transparent;color:#f5f5f5}.button.is-dark[disabled]{background-color:#363636;border-color:transparent;box-shadow:none}.button.is-dark.is-inverted{background-color:#f5f5f5;color:#363636}.button.is-dark.is-inverted:hover{background-color:#e8e8e8}.button.is-dark.is-inverted[disabled]{background-color:#f5f5f5;border-color:transparent;box-shadow:none;color:#363636}.button.is-dark.is-loading::after{border-color:transparent transparent #f5f5f5 #f5f5f5!important}.button.is-dark.is-outlined{background-color:transparent;border-color:#363636;color:#363636}.button.is-dark.is-outlined:focus,.button.is-dark.is-outlined:hover{background-color:#363636;border-color:#363636;color:#f5f5f5}.button.is-dark.is-outlined.is-loading::after{border-color:transparent transparent #363636 #363636!important}.button.is-dark.is-outlined[disabled]{background-color:transparent;border-color:#363636;box-shadow:none;color:#363636}.button.is-dark.is-inverted.is-outlined{background-color:transparent;border-color:#f5f5f5;color:#f5f5f5}.button.is-dark.is-inverted.is-outlined:focus,.button.is-dark.is-inverted.is-outlined:hover{background-color:#f5f5f5;color:#363636}.button.is-dark.is-inverted.is-outlined[disabled]{background-color:transparent;border-color:#f5f5f5;box-shadow:none;color:#f5f5f5}.button.is-primary{background-color:#00d1b2;border-color:transparent;color:#fff}.button.is-primary.is-hovered,.button.is-primary:hover{background-color:#00c4a7;border-color:transparent;color:#fff}.button.is-primary.is-focused,.button.is-primary:focus{border-color:transparent;color:#fff}.button.is-primary.is-focused:not(:active),.button.is-primary:focus:not(:active){box-shadow:0 0 0 .125em rgba(0,209,178,.25)}.button.is-primary.is-active,.button.is-primary:active{background-color:#00b89c;border-color:transparent;color:#fff}.button.is-primary[disabled]{background-color:#00d1b2;border-color:transparent;box-shadow:none}.button.is-primary.is-inverted{background-color:#fff;color:#00d1b2}.button.is-primary.is-inverted:hover{background-color:#f2f2f2}.button.is-primary.is-inverted[disabled]{background-color:#fff;border-color:transparent;box-shadow:none;color:#00d1b2}.button.is-primary.is-loading::after{border-color:transparent transparent #fff #fff!important}.button.is-primary.is-outlined{background-color:transparent;border-color:#00d1b2;color:#00d1b2}.button.is-primary.is-outlined:focus,.button.is-primary.is-outlined:hover{background-color:#00d1b2;border-color:#00d1b2;color:#fff}.button.is-primary.is-outlined.is-loading::after{border-color:transparent transparent #00d1b2 #00d1b2!important}.button.is-primary.is-outlined[disabled]{background-color:transparent;border-color:#00d1b2;box-shadow:none;color:#00d1b2}.button.is-primary.is-inverted.is-outlined{background-color:transparent;border-color:#fff;color:#fff}.button.is-primary.is-inverted.is-outlined:focus,.button.is-primary.is-inverted.is-outlined:hover{background-color:#fff;color:#00d1b2}.button.is-primary.is-inverted.is-outlined[disabled]{background-color:transparent;border-color:#fff;box-shadow:none;color:#fff}.button.is-link{background-color:#3273dc;border-color:transparent;color:#fff}.button.is-link.is-hovered,.button.is-link:hover{background-color:#276cda;border-color:transparent;color:#fff}.button.is-link.is-focused,.button.is-link:focus{border-color:transparent;color:#fff}.button.is-link.is-focused:not(:active),.button.is-link:focus:not(:active){box-shadow:0 0 0 .125em rgba(50,115,220,.25)}.button.is-link.is-active,.button.is-link:active{background-color:#2366d1;border-color:transparent;color:#fff}.button.is-link[disabled]{background-color:#3273dc;border-color:transparent;box-shadow:none}.button.is-link.is-inverted{background-color:#fff;color:#3273dc}.button.is-link.is-inverted:hover{background-color:#f2f2f2}.button.is-link.is-inverted[disabled]{background-color:#fff;border-color:transparent;box-shadow:none;color:#3273dc}.button.is-link.is-loading::after{border-color:transparent transparent #fff #fff!important}.button.is-link.is-outlined{background-color:transparent;border-color:#3273dc;color:#3273dc}.button.is-link.is-outlined:focus,.button.is-link.is-outlined:hover{background-color:#3273dc;border-color:#3273dc;color:#fff}.button.is-link.is-outlined.is-loading::after{border-color:transparent transparent #3273dc #3273dc!important}.button.is-link.is-outlined[disabled]{background-color:transparent;border-color:#3273dc;box-shadow:none;color:#3273dc}.button.is-link.is-inverted.is-outlined{background-color:transparent;border-color:#fff;color:#fff}.button.is-link.is-inverted.is-outlined:focus,.button.is-link.is-inverted.is-outlined:hover{background-color:#fff;color:#3273dc}.button.is-link.is-inverted.is-outlined[disabled]{background-color:transparent;border-color:#fff;box-shadow:none;color:#fff}.button.is-info{background-color:#209cee;border-color:transparent;color:#fff}.button.is-info.is-hovered,.button.is-info:hover{background-color:#1496ed;border-color:transparent;color:#fff}.button.is-info.is-focused,.button.is-info:focus{border-color:transparent;color:#fff}.button.is-info.is-focused:not(:active),.button.is-info:focus:not(:active){box-shadow:0 0 0 .125em rgba(32,156,238,.25)}.button.is-info.is-active,.button.is-info:active{background-color:#118fe4;border-color:transparent;color:#fff}.button.is-info[disabled]{background-color:#209cee;border-color:transparent;box-shadow:none}.button.is-info.is-inverted{background-color:#fff;color:#209cee}.button.is-info.is-inverted:hover{background-color:#f2f2f2}.button.is-info.is-inverted[disabled]{background-color:#fff;border-color:transparent;box-shadow:none;color:#209cee}.button.is-info.is-loading::after{border-color:transparent transparent #fff #fff!important}.button.is-info.is-outlined{background-color:transparent;border-color:#209cee;color:#209cee}.button.is-info.is-outlined:focus,.button.is-info.is-outlined:hover{background-color:#209cee;border-color:#209cee;color:#fff}.button.is-info.is-outlined.is-loading::after{border-color:transparent transparent #209cee #209cee!important}.button.is-info.is-outlined[disabled]{background-color:transparent;border-color:#209cee;box-shadow:none;color:#209cee}.button.is-info.is-inverted.is-outlined{background-color:transparent;border-color:#fff;color:#fff}.button.is-info.is-inverted.is-outlined:focus,.button.is-info.is-inverted.is-outlined:hover{background-color:#fff;color:#209cee}.button.is-info.is-inverted.is-outlined[disabled]{background-color:transparent;border-color:#fff;box-shadow:none;color:#fff}.button.is-success{background-color:#23d160;border-color:transparent;color:#fff}.button.is-success.is-hovered,.button.is-success:hover{background-color:#22c65b;border-color:transparent;color:#fff}.button.is-success.is-focused,.button.is-success:focus{border-color:transparent;color:#fff}.button.is-success.is-focused:not(:active),.button.is-success:focus:not(:active){box-shadow:0 0 0 .125em rgba(35,209,96,.25)}.button.is-success.is-active,.button.is-success:active{background-color:#20bc56;border-color:transparent;color:#fff}.button.is-success[disabled]{background-color:#23d160;border-color:transparent;box-shadow:none}.button.is-success.is-inverted{background-color:#fff;color:#23d160}.button.is-success.is-inverted:hover{background-color:#f2f2f2}.button.is-success.is-inverted[disabled]{background-color:#fff;border-color:transparent;box-shadow:none;color:#23d160}.button.is-success.is-loading::after{border-color:transparent transparent #fff #fff!important}.button.is-success.is-outlined{background-color:transparent;border-color:#23d160;color:#23d160}.button.is-success.is-outlined:focus,.button.is-success.is-outlined:hover{background-color:#23d160;border-color:#23d160;color:#fff}.button.is-success.is-outlined.is-loading::after{border-color:transparent transparent #23d160 #23d160!important}.button.is-success.is-outlined[disabled]{background-color:transparent;border-color:#23d160;box-shadow:none;color:#23d160}.button.is-success.is-inverted.is-outlined{background-color:transparent;border-color:#fff;color:#fff}.button.is-success.is-inverted.is-outlined:focus,.button.is-success.is-inverted.is-outlined:hover{background-color:#fff;color:#23d160}.button.is-success.is-inverted.is-outlined[disabled]{background-color:transparent;border-color:#fff;box-shadow:none;color:#fff}.button.is-warning{background-color:#ffdd57;border-color:transparent;color:rgba(0,0,0,.7)}.button.is-warning.is-hovered,.button.is-warning:hover{background-color:#ffdb4a;border-color:transparent;color:rgba(0,0,0,.7)}.button.is-warning.is-focused,.button.is-warning:focus{border-color:transparent;color:rgba(0,0,0,.7)}.button.is-warning.is-focused:not(:active),.button.is-warning:focus:not(:active){box-shadow:0 0 0 .125em rgba(255,221,87,.25)}.button.is-warning.is-active,.button.is-warning:active{background-color:#ffd83d;border-color:transparent;color:rgba(0,0,0,.7)}.button.is-warning[disabled]{background-color:#ffdd57;border-color:transparent;box-shadow:none}.button.is-warning.is-inverted{background-color:rgba(0,0,0,.7);color:#ffdd57}.button.is-warning.is-inverted:hover{background-color:rgba(0,0,0,.7)}.button.is-warning.is-inverted[disabled]{background-color:rgba(0,0,0,.7);border-color:transparent;box-shadow:none;color:#ffdd57}.button.is-warning.is-loading::after{border-color:transparent transparent rgba(0,0,0,.7) rgba(0,0,0,.7)!important}.button.is-warning.is-outlined{background-color:transparent;border-color:#ffdd57;color:#ffdd57}.button.is-warning.is-outlined:focus,.button.is-warning.is-outlined:hover{background-color:#ffdd57;border-color:#ffdd57;color:rgba(0,0,0,.7)}.button.is-warning.is-outlined.is-loading::after{border-color:transparent transparent #ffdd57 #ffdd57!important}.button.is-warning.is-outlined[disabled]{background-color:transparent;border-color:#ffdd57;box-shadow:none;color:#ffdd57}.button.is-warning.is-inverted.is-outlined{background-color:transparent;border-color:rgba(0,0,0,.7);color:rgba(0,0,0,.7)}.button.is-warning.is-inverted.is-outlined:focus,.button.is-warning.is-inverted.is-outlined:hover{background-color:rgba(0,0,0,.7);color:#ffdd57}.button.is-warning.is-inverted.is-outlined[disabled]{background-color:transparent;border-color:rgba(0,0,0,.7);box-shadow:none;color:rgba(0,0,0,.7)}.button.is-danger{background-color:#ff3860;border-color:transparent;color:#fff}.button.is-danger.is-hovered,.button.is-danger:hover{background-color:#ff2b56;border-color:transparent;color:#fff}.button.is-danger.is-focused,.button.is-danger:focus{border-color:transparent;color:#fff}.button.is-danger.is-focused:not(:active),.button.is-danger:focus:not(:active){box-shadow:0 0 0 .125em rgba(255,56,96,.25)}.button.is-danger.is-active,.button.is-danger:active{background-color:#ff1f4b;border-color:transparent;color:#fff}.button.is-danger[disabled]{background-color:#ff3860;border-color:transparent;box-shadow:none}.button.is-danger.is-inverted{background-color:#fff;color:#ff3860}.button.is-danger.is-inverted:hover{background-color:#f2f2f2}.button.is-danger.is-inverted[disabled]{background-color:#fff;border-color:transparent;box-shadow:none;color:#ff3860}.button.is-danger.is-loading::after{border-color:transparent transparent #fff #fff!important}.button.is-danger.is-outlined{background-color:transparent;border-color:#ff3860;color:#ff3860}.button.is-danger.is-outlined:focus,.button.is-danger.is-outlined:hover{background-color:#ff3860;border-color:#ff3860;color:#fff}.button.is-danger.is-outlined.is-loading::after{border-color:transparent transparent #ff3860 #ff3860!important}.button.is-danger.is-outlined[disabled]{background-color:transparent;border-color:#ff3860;box-shadow:none;color:#ff3860}.button.is-danger.is-inverted.is-outlined{background-color:transparent;border-color:#fff;color:#fff}.button.is-danger.is-inverted.is-outlined:focus,.button.is-danger.is-inverted.is-outlined:hover{background-color:#fff;color:#ff3860}.button.is-danger.is-inverted.is-outlined[disabled]{background-color:transparent;border-color:#fff;box-shadow:none;color:#fff}.button.is-small{border-radius:2px;font-size:.75rem}.button.is-medium{font-size:1.25rem}.button.is-large{font-size:1.5rem}.button[disabled]{background-color:#fff;border-color:#dbdbdb;box-shadow:none;opacity:.5}.button.is-fullwidth{display:flex;width:100%}.button.is-loading{color:transparent!important;pointer-events:none}.button.is-loading::after{position:absolute;left:calc(50% - (1em / 2));top:calc(50% - (1em / 2));position:absolute!important}.button.is-static{background-color:#f5f5f5;border-color:#dbdbdb;color:#7a7a7a;box-shadow:none;pointer-events:none}.button.is-rounded{border-radius:290486px;padding-left:1em;padding-right:1em}.buttons{align-items:center;display:flex;flex-wrap:wrap;justify-content:flex-start}.buttons .button{margin-bottom:.5rem}.buttons .button:not(:last-child){margin-right:.5rem}.buttons:last-child{margin-bottom:-.5rem}.buttons:not(:last-child){margin-bottom:1rem}.buttons.has-addons .button:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0}.buttons.has-addons .button:not(:last-child){border-bottom-right-radius:0;border-top-right-radius:0;margin-right:-1px}.buttons.has-addons .button:last-child{margin-right:0}.buttons.has-addons .button.is-hovered,.buttons.has-addons .button:hover{z-index:2}.buttons.has-addons .button.is-active,.buttons.has-addons .button.is-focused,.buttons.has-addons .button.is-selected,.buttons.has-addons .button:active,.buttons.has-addons .button:focus{z-index:3}.buttons.has-addons .button.is-active:hover,.buttons.has-addons .button.is-focused:hover,.buttons.has-addons .button.is-selected:hover,.buttons.has-addons .button:active:hover,.buttons.has-addons .button:focus:hover{z-index:4}.buttons.has-addons .button.is-expanded{flex-grow:1}.buttons.is-centered{justify-content:center}.buttons.is-right{justify-content:flex-end}.container{margin:0 auto;position:relative}@media screen and (min-width:1088px){.container{max-width:960px;width:960px}.container.is-fluid{margin-left:64px;margin-right:64px;max-width:none;width:auto}}@media screen and (max-width:1279px){.container.is-widescreen{max-width:1152px;width:auto}}@media screen and (max-width:1471px){.container.is-fullhd{max-width:1344px;width:auto}}@media screen and (min-width:1280px){.container{max-width:1152px;width:1152px}}@media screen and (min-width:1472px){.container{max-width:1344px;width:1344px}}.content li+li{margin-top:.25em}.content blockquote:not(:last-child),.content dl:not(:last-child),.content ol:not(:last-child),.content p:not(:last-child),.content pre:not(:last-child),.content table:not(:last-child),.content ul:not(:last-child){margin-bottom:1em}.content h1,.content h2,.content h3,.content h4,.content h5,.content h6{color:#363636;font-weight:600;line-height:1.125}.content h1{font-size:2em;margin-bottom:.5em}.content h1:not(:first-child){margin-top:1em}.content h2{font-size:1.75em;margin-bottom:.5714em}.content h2:not(:first-child){margin-top:1.1428em}.content h3{font-size:1.5em;margin-bottom:.6666em}.content h3:not(:first-child){margin-top:1.3333em}.content h4{font-size:1.25em;margin-bottom:.8em}.content h5{font-size:1.125em;margin-bottom:.8888em}.content h6{font-size:1em;margin-bottom:1em}.content blockquote{background-color:#f5f5f5;border-left:5px solid #dbdbdb;padding:1.25em 1.5em}.content ol{list-style:decimal outside;margin-left:2em;margin-top:1em}.content ul{list-style:disc outside;margin-left:2em;margin-top:1em}.content ul ul{list-style-type:circle;margin-top:.5em}.content ul ul ul{list-style-type:square}.content dd{margin-left:2em}.content figure{margin-left:2em;margin-right:2em;text-align:center}.content figure:not(:first-child){margin-top:2em}.content figure:not(:last-child){margin-bottom:2em}.content figure img{display:inline-block}.content figure figcaption{font-style:italic}.content pre{-webkit-overflow-scrolling:touch;overflow-x:auto;padding:1.25em 1.5em;white-space:pre;word-wrap:normal}.content sub,.content sup{font-size:75%}.content table{width:100%}.content table td,.content table th{border:1px solid #dbdbdb;border-width:0 0 1px;padding:.5em .75em;vertical-align:top}.content table th{color:#363636;text-align:left}.content table thead td,.content table thead th{border-width:0 0 2px;color:#363636}.content table tfoot td,.content table tfoot th{border-width:2px 0 0;color:#363636}.content table tbody tr:last-child td,.content table tbody tr:last-child th{border-bottom-width:0}.content.is-small{font-size:.75rem}.content.is-medium{font-size:1.25rem}.content.is-large{font-size:1.5rem}.input,.textarea{background-color:#fff;border-color:#dbdbdb;color:#363636;box-shadow:inset 0 1px 2px rgba(10,10,10,.1);max-width:100%;width:100%}.input::-moz-placeholder,.textarea::-moz-placeholder{color:rgba(54,54,54,.3)}.input::-webkit-input-placeholder,.textarea::-webkit-input-placeholder{color:rgba(54,54,54,.3)}.input:-moz-placeholder,.textarea:-moz-placeholder{color:rgba(54,54,54,.3)}.input:-ms-input-placeholder,.textarea:-ms-input-placeholder{color:rgba(54,54,54,.3)}.input.is-hovered,.input:hover,.textarea.is-hovered,.textarea:hover{border-color:#b5b5b5}.input.is-active,.input.is-focused,.input:active,.input:focus,.textarea.is-active,.textarea.is-focused,.textarea:active,.textarea:focus{border-color:#3273dc;box-shadow:0 0 0 .125em rgba(50,115,220,.25)}.input[disabled],.textarea[disabled]{background-color:#f5f5f5;border-color:#f5f5f5;box-shadow:none;color:#7a7a7a}.input[disabled]::-moz-placeholder,.textarea[disabled]::-moz-placeholder{color:rgba(122,122,122,.3)}.input[disabled]::-webkit-input-placeholder,.textarea[disabled]::-webkit-input-placeholder{color:rgba(122,122,122,.3)}.input[disabled]:-moz-placeholder,.textarea[disabled]:-moz-placeholder{color:rgba(122,122,122,.3)}.input[disabled]:-ms-input-placeholder,.textarea[disabled]:-ms-input-placeholder{color:rgba(122,122,122,.3)}.input[readonly],.textarea[readonly]{box-shadow:none}.input.is-white,.textarea.is-white{border-color:#fff}.input.is-white.is-active,.input.is-white.is-focused,.input.is-white:active,.input.is-white:focus,.textarea.is-white.is-active,.textarea.is-white.is-focused,.textarea.is-white:active,.textarea.is-white:focus{box-shadow:0 0 0 .125em rgba(255,255,255,.25)}.input.is-black,.textarea.is-black{border-color:#0a0a0a}.input.is-black.is-active,.input.is-black.is-focused,.input.is-black:active,.input.is-black:focus,.textarea.is-black.is-active,.textarea.is-black.is-focused,.textarea.is-black:active,.textarea.is-black:focus{box-shadow:0 0 0 .125em rgba(10,10,10,.25)}.input.is-light,.textarea.is-light{border-color:#f5f5f5}.input.is-light.is-active,.input.is-light.is-focused,.input.is-light:active,.input.is-light:focus,.textarea.is-light.is-active,.textarea.is-light.is-focused,.textarea.is-light:active,.textarea.is-light:focus{box-shadow:0 0 0 .125em rgba(245,245,245,.25)}.input.is-dark,.textarea.is-dark{border-color:#363636}.input.is-dark.is-active,.input.is-dark.is-focused,.input.is-dark:active,.input.is-dark:focus,.textarea.is-dark.is-active,.textarea.is-dark.is-focused,.textarea.is-dark:active,.textarea.is-dark:focus{box-shadow:0 0 0 .125em rgba(54,54,54,.25)}.input.is-primary,.textarea.is-primary{border-color:#00d1b2}.input.is-primary.is-active,.input.is-primary.is-focused,.input.is-primary:active,.input.is-primary:focus,.textarea.is-primary.is-active,.textarea.is-primary.is-focused,.textarea.is-primary:active,.textarea.is-primary:focus{box-shadow:0 0 0 .125em rgba(0,209,178,.25)}.input.is-link,.textarea.is-link{border-color:#3273dc}.input.is-link.is-active,.input.is-link.is-focused,.input.is-link:active,.input.is-link:focus,.textarea.is-link.is-active,.textarea.is-link.is-focused,.textarea.is-link:active,.textarea.is-link:focus{box-shadow:0 0 0 .125em rgba(50,115,220,.25)}.input.is-info,.textarea.is-info{border-color:#209cee}.input.is-info.is-active,.input.is-info.is-focused,.input.is-info:active,.input.is-info:focus,.textarea.is-info.is-active,.textarea.is-info.is-focused,.textarea.is-info:active,.textarea.is-info:focus{box-shadow:0 0 0 .125em rgba(32,156,238,.25)}.input.is-success,.textarea.is-success{border-color:#23d160}.input.is-success.is-active,.input.is-success.is-focused,.input.is-success:active,.input.is-success:focus,.textarea.is-success.is-active,.textarea.is-success.is-focused,.textarea.is-success:active,.textarea.is-success:focus{box-shadow:0 0 0 .125em rgba(35,209,96,.25)}.input.is-warning,.textarea.is-warning{border-color:#ffdd57}.input.is-warning.is-active,.input.is-warning.is-focused,.input.is-warning:active,.input.is-warning:focus,.textarea.is-warning.is-active,.textarea.is-warning.is-focused,.textarea.is-warning:active,.textarea.is-warning:focus{box-shadow:0 0 0 .125em rgba(255,221,87,.25)}.input.is-danger,.textarea.is-danger{border-color:#ff3860}.input.is-danger.is-active,.input.is-danger.is-focused,.input.is-danger:active,.input.is-danger:focus,.textarea.is-danger.is-active,.textarea.is-danger.is-focused,.textarea.is-danger:active,.textarea.is-danger:focus{box-shadow:0 0 0 .125em rgba(255,56,96,.25)}.input.is-small,.textarea.is-small{border-radius:2px;font-size:.75rem}.input.is-medium,.textarea.is-medium{font-size:1.25rem}.input.is-large,.textarea.is-large{font-size:1.5rem}.input.is-fullwidth,.textarea.is-fullwidth{display:block;width:100%}.input.is-inline,.textarea.is-inline{display:inline;width:auto}.input.is-rounded{border-radius:290486px;padding-left:1em;padding-right:1em}.input.is-static{background-color:transparent;border-color:transparent;box-shadow:none;padding-left:0;padding-right:0}.textarea{display:block;max-width:100%;min-width:100%;padding:.625em;resize:vertical}.textarea:not([rows]){max-height:600px;min-height:120px}.textarea[rows]{height:initial}.textarea.has-fixed-size{resize:none}.checkbox,.radio{cursor:pointer;display:inline-block;line-height:1.25;position:relative}.checkbox input,.radio input{cursor:pointer}.checkbox:hover,.radio:hover{color:#363636}.checkbox[disabled],.radio[disabled]{color:#7a7a7a;cursor:not-allowed}.radio+.radio{margin-left:.5em}.select{display:inline-block;max-width:100%;position:relative;vertical-align:top}.select:not(.is-multiple){height:2.25em}.select:not(.is-multiple):not(.is-loading)::after{border-color:#3273dc;right:1.125em;z-index:4}.select.is-rounded select{border-radius:290486px;padding-left:1em}.select select{background-color:#fff;border-color:#dbdbdb;color:#363636;cursor:pointer;display:block;font-size:1em;max-width:100%;outline:0}.select select::-moz-placeholder{color:rgba(54,54,54,.3)}.select select::-webkit-input-placeholder{color:rgba(54,54,54,.3)}.select select:-moz-placeholder{color:rgba(54,54,54,.3)}.select select:-ms-input-placeholder{color:rgba(54,54,54,.3)}.select select.is-hovered,.select select:hover{border-color:#b5b5b5}.select select.is-active,.select select.is-focused,.select select:active,.select select:focus{border-color:#3273dc;box-shadow:0 0 0 .125em rgba(50,115,220,.25)}.select select[disabled]{background-color:#f5f5f5;border-color:#f5f5f5;box-shadow:none;color:#7a7a7a}.select select[disabled]::-moz-placeholder{color:rgba(122,122,122,.3)}.select select[disabled]::-webkit-input-placeholder{color:rgba(122,122,122,.3)}.select select[disabled]:-moz-placeholder{color:rgba(122,122,122,.3)}.select select[disabled]:-ms-input-placeholder{color:rgba(122,122,122,.3)}.select select::-ms-expand{display:none}.select select[disabled]:hover{border-color:#f5f5f5}.select select:not([multiple]){padding-right:2.5em}.select select[multiple]{height:initial;padding:0}.select select[multiple] option{padding:.5em 1em}.select:not(.is-multiple):not(.is-loading):hover::after{border-color:#363636}.select.is-white:not(:hover)::after{border-color:#fff}.select.is-white select{border-color:#fff}.select.is-white select.is-hovered,.select.is-white select:hover{border-color:#f2f2f2}.select.is-white select.is-active,.select.is-white select.is-focused,.select.is-white select:active,.select.is-white select:focus{box-shadow:0 0 0 .125em rgba(255,255,255,.25)}.select.is-black:not(:hover)::after{border-color:#0a0a0a}.select.is-black select{border-color:#0a0a0a}.select.is-black select.is-hovered,.select.is-black select:hover{border-color:#000}.select.is-black select.is-active,.select.is-black select.is-focused,.select.is-black select:active,.select.is-black select:focus{box-shadow:0 0 0 .125em rgba(10,10,10,.25)}.select.is-light:not(:hover)::after{border-color:#f5f5f5}.select.is-light select{border-color:#f5f5f5}.select.is-light select.is-hovered,.select.is-light select:hover{border-color:#e8e8e8}.select.is-light select.is-active,.select.is-light select.is-focused,.select.is-light select:active,.select.is-light select:focus{box-shadow:0 0 0 .125em rgba(245,245,245,.25)}.select.is-dark:not(:hover)::after{border-color:#363636}.select.is-dark select{border-color:#363636}.select.is-dark select.is-hovered,.select.is-dark select:hover{border-color:#292929}.select.is-dark select.is-active,.select.is-dark select.is-focused,.select.is-dark select:active,.select.is-dark select:focus{box-shadow:0 0 0 .125em rgba(54,54,54,.25)}.select.is-primary:not(:hover)::after{border-color:#00d1b2}.select.is-primary select{border-color:#00d1b2}.select.is-primary select.is-hovered,.select.is-primary select:hover{border-color:#00b89c}.select.is-primary select.is-active,.select.is-primary select.is-focused,.select.is-primary select:active,.select.is-primary select:focus{box-shadow:0 0 0 .125em rgba(0,209,178,.25)}.select.is-link:not(:hover)::after{border-color:#3273dc}.select.is-link select{border-color:#3273dc}.select.is-link select.is-hovered,.select.is-link select:hover{border-color:#2366d1}.select.is-link select.is-active,.select.is-link select.is-focused,.select.is-link select:active,.select.is-link select:focus{box-shadow:0 0 0 .125em rgba(50,115,220,.25)}.select.is-info:not(:hover)::after{border-color:#209cee}.select.is-info select{border-color:#209cee}.select.is-info select.is-hovered,.select.is-info select:hover{border-color:#118fe4}.select.is-info select.is-active,.select.is-info select.is-focused,.select.is-info select:active,.select.is-info select:focus{box-shadow:0 0 0 .125em rgba(32,156,238,.25)}.select.is-success:not(:hover)::after{border-color:#23d160}.select.is-success select{border-color:#23d160}.select.is-success select.is-hovered,.select.is-success select:hover{border-color:#20bc56}.select.is-success select.is-active,.select.is-success select.is-focused,.select.is-success select:active,.select.is-success select:focus{box-shadow:0 0 0 .125em rgba(35,209,96,.25)}.select.is-warning:not(:hover)::after{border-color:#ffdd57}.select.is-warning select{border-color:#ffdd57}.select.is-warning select.is-hovered,.select.is-warning select:hover{border-color:#ffd83d}.select.is-warning select.is-active,.select.is-warning select.is-focused,.select.is-warning select:active,.select.is-warning select:focus{box-shadow:0 0 0 .125em rgba(255,221,87,.25)}.select.is-danger:not(:hover)::after{border-color:#ff3860}.select.is-danger select{border-color:#ff3860}.select.is-danger select.is-hovered,.select.is-danger select:hover{border-color:#ff1f4b}.select.is-danger select.is-active,.select.is-danger select.is-focused,.select.is-danger select:active,.select.is-danger select:focus{box-shadow:0 0 0 .125em rgba(255,56,96,.25)}.select.is-small{border-radius:2px;font-size:.75rem}.select.is-medium{font-size:1.25rem}.select.is-large{font-size:1.5rem}.select.is-disabled::after{border-color:#7a7a7a}.select.is-fullwidth{width:100%}.select.is-fullwidth select{width:100%}.select.is-loading::after{margin-top:0;position:absolute;right:.625em;top:.625em;-webkit-transform:none;transform:none}.select.is-loading.is-small:after{font-size:.75rem}.select.is-loading.is-medium:after{font-size:1.25rem}.select.is-loading.is-large:after{font-size:1.5rem}.file{align-items:stretch;display:flex;justify-content:flex-start;position:relative}.file.is-white .file-cta{background-color:#fff;border-color:transparent;color:#0a0a0a}.file.is-white.is-hovered .file-cta,.file.is-white:hover .file-cta{background-color:#f9f9f9;border-color:transparent;color:#0a0a0a}.file.is-white.is-focused .file-cta,.file.is-white:focus .file-cta{border-color:transparent;box-shadow:0 0 .5em rgba(255,255,255,.25);color:#0a0a0a}.file.is-white.is-active .file-cta,.file.is-white:active .file-cta{background-color:#f2f2f2;border-color:transparent;color:#0a0a0a}.file.is-black .file-cta{background-color:#0a0a0a;border-color:transparent;color:#fff}.file.is-black.is-hovered .file-cta,.file.is-black:hover .file-cta{background-color:#040404;border-color:transparent;color:#fff}.file.is-black.is-focused .file-cta,.file.is-black:focus .file-cta{border-color:transparent;box-shadow:0 0 .5em rgba(10,10,10,.25);color:#fff}.file.is-black.is-active .file-cta,.file.is-black:active .file-cta{background-color:#000;border-color:transparent;color:#fff}.file.is-light .file-cta{background-color:#f5f5f5;border-color:transparent;color:#363636}.file.is-light.is-hovered .file-cta,.file.is-light:hover .file-cta{background-color:#eee;border-color:transparent;color:#363636}.file.is-light.is-focused .file-cta,.file.is-light:focus .file-cta{border-color:transparent;box-shadow:0 0 .5em rgba(245,245,245,.25);color:#363636}.file.is-light.is-active .file-cta,.file.is-light:active .file-cta{background-color:#e8e8e8;border-color:transparent;color:#363636}.file.is-dark .file-cta{background-color:#363636;border-color:transparent;color:#f5f5f5}.file.is-dark.is-hovered .file-cta,.file.is-dark:hover .file-cta{background-color:#2f2f2f;border-color:transparent;color:#f5f5f5}.file.is-dark.is-focused .file-cta,.file.is-dark:focus .file-cta{border-color:transparent;box-shadow:0 0 .5em rgba(54,54,54,.25);color:#f5f5f5}.file.is-dark.is-active .file-cta,.file.is-dark:active .file-cta{background-color:#292929;border-color:transparent;color:#f5f5f5}.file.is-primary .file-cta{background-color:#00d1b2;border-color:transparent;color:#fff}.file.is-primary.is-hovered .file-cta,.file.is-primary:hover .file-cta{background-color:#00c4a7;border-color:transparent;color:#fff}.file.is-primary.is-focused .file-cta,.file.is-primary:focus .file-cta{border-color:transparent;box-shadow:0 0 .5em rgba(0,209,178,.25);color:#fff}.file.is-primary.is-active .file-cta,.file.is-primary:active .file-cta{background-color:#00b89c;border-color:transparent;color:#fff}.file.is-link .file-cta{background-color:#3273dc;border-color:transparent;color:#fff}.file.is-link.is-hovered .file-cta,.file.is-link:hover .file-cta{background-color:#276cda;border-color:transparent;color:#fff}.file.is-link.is-focused .file-cta,.file.is-link:focus .file-cta{border-color:transparent;box-shadow:0 0 .5em rgba(50,115,220,.25);color:#fff}.file.is-link.is-active .file-cta,.file.is-link:active .file-cta{background-color:#2366d1;border-color:transparent;color:#fff}.file.is-info .file-cta{background-color:#209cee;border-color:transparent;color:#fff}.file.is-info.is-hovered .file-cta,.file.is-info:hover .file-cta{background-color:#1496ed;border-color:transparent;color:#fff}.file.is-info.is-focused .file-cta,.file.is-info:focus .file-cta{border-color:transparent;box-shadow:0 0 .5em rgba(32,156,238,.25);color:#fff}.file.is-info.is-active .file-cta,.file.is-info:active .file-cta{background-color:#118fe4;border-color:transparent;color:#fff}.file.is-success .file-cta{background-color:#23d160;border-color:transparent;color:#fff}.file.is-success.is-hovered .file-cta,.file.is-success:hover .file-cta{background-color:#22c65b;border-color:transparent;color:#fff}.file.is-success.is-focused .file-cta,.file.is-success:focus .file-cta{border-color:transparent;box-shadow:0 0 .5em rgba(35,209,96,.25);color:#fff}.file.is-success.is-active .file-cta,.file.is-success:active .file-cta{background-color:#20bc56;border-color:transparent;color:#fff}.file.is-warning .file-cta{background-color:#ffdd57;border-color:transparent;color:rgba(0,0,0,.7)}.file.is-warning.is-hovered .file-cta,.file.is-warning:hover .file-cta{background-color:#ffdb4a;border-color:transparent;color:rgba(0,0,0,.7)}.file.is-warning.is-focused .file-cta,.file.is-warning:focus .file-cta{border-color:transparent;box-shadow:0 0 .5em rgba(255,221,87,.25);color:rgba(0,0,0,.7)}.file.is-warning.is-active .file-cta,.file.is-warning:active .file-cta{background-color:#ffd83d;border-color:transparent;color:rgba(0,0,0,.7)}.file.is-danger .file-cta{background-color:#ff3860;border-color:transparent;color:#fff}.file.is-danger.is-hovered .file-cta,.file.is-danger:hover .file-cta{background-color:#ff2b56;border-color:transparent;color:#fff}.file.is-danger.is-focused .file-cta,.file.is-danger:focus .file-cta{border-color:transparent;box-shadow:0 0 .5em rgba(255,56,96,.25);color:#fff}.file.is-danger.is-active .file-cta,.file.is-danger:active .file-cta{background-color:#ff1f4b;border-color:transparent;color:#fff}.file.is-small{font-size:.75rem}.file.is-medium{font-size:1.25rem}.file.is-medium .file-icon .fa{font-size:21px}.file.is-large{font-size:1.5rem}.file.is-large .file-icon .fa{font-size:28px}.file.has-name .file-cta{border-bottom-right-radius:0;border-top-right-radius:0}.file.has-name .file-name{border-bottom-left-radius:0;border-top-left-radius:0}.file.has-name.is-empty .file-cta{border-radius:4px}.file.has-name.is-empty .file-name{display:none}.file.is-boxed .file-label{flex-direction:column}.file.is-boxed .file-cta{flex-direction:column;height:auto;padding:1em 3em}.file.is-boxed .file-name{border-width:0 1px 1px}.file.is-boxed .file-icon{height:1.5em;width:1.5em}.file.is-boxed .file-icon .fa{font-size:21px}.file.is-boxed.is-small .file-icon .fa{font-size:14px}.file.is-boxed.is-medium .file-icon .fa{font-size:28px}.file.is-boxed.is-large .file-icon .fa{font-size:35px}.file.is-boxed.has-name .file-cta{border-radius:4px 4px 0 0}.file.is-boxed.has-name .file-name{border-radius:0 0 4px 4px;border-width:0 1px 1px}.file.is-centered{justify-content:center}.file.is-fullwidth .file-label{width:100%}.file.is-fullwidth .file-name{flex-grow:1;max-width:none}.file.is-right{justify-content:flex-end}.file.is-right .file-cta{border-radius:0 4px 4px 0}.file.is-right .file-name{border-radius:4px 0 0 4px;border-width:1px 0 1px 1px;order:-1}.file-label{align-items:stretch;display:flex;cursor:pointer;justify-content:flex-start;overflow:hidden;position:relative}.file-label:hover .file-cta{background-color:#eee;color:#363636}.file-label:hover .file-name{border-color:#d5d5d5}.file-label:active .file-cta{background-color:#e8e8e8;color:#363636}.file-label:active .file-name{border-color:#cfcfcf}.file-input{height:.01em;left:0;outline:0;position:absolute;top:0;width:.01em}.file-cta,.file-name{border-color:#dbdbdb;border-radius:4px;font-size:1em;padding-left:1em;padding-right:1em;white-space:nowrap}.file-cta{background-color:#f5f5f5;color:#4a4a4a}.file-name{border-color:#dbdbdb;border-style:solid;border-width:1px 1px 1px 0;display:block;max-width:16em;overflow:hidden;text-align:left;text-overflow:ellipsis}.file-icon{align-items:center;display:flex;height:1em;justify-content:center;margin-right:.5em;width:1em}.file-icon .fa{font-size:14px}.label{color:#363636;display:block;font-size:1rem;font-weight:700}.label:not(:last-child){margin-bottom:.5em}.label.is-small{font-size:.75rem}.label.is-medium{font-size:1.25rem}.label.is-large{font-size:1.5rem}.help{display:block;font-size:.75rem;margin-top:.25rem}.help.is-white{color:#fff}.help.is-black{color:#0a0a0a}.help.is-light{color:#f5f5f5}.help.is-dark{color:#363636}.help.is-primary{color:#00d1b2}.help.is-link{color:#3273dc}.help.is-info{color:#209cee}.help.is-success{color:#23d160}.help.is-warning{color:#ffdd57}.help.is-danger{color:#ff3860}.field:not(:last-child){margin-bottom:.75rem}.field.has-addons{display:flex;justify-content:flex-start}.field.has-addons .control:not(:last-child){margin-right:-1px}.field.has-addons .control:not(:first-child):not(:last-child) .button,.field.has-addons .control:not(:first-child):not(:last-child) .input,.field.has-addons .control:not(:first-child):not(:last-child) .select select{border-radius:0}.field.has-addons .control:first-child .button,.field.has-addons .control:first-child .input,.field.has-addons .control:first-child .select select{border-bottom-right-radius:0;border-top-right-radius:0}.field.has-addons .control:last-child .button,.field.has-addons .control:last-child .input,.field.has-addons .control:last-child .select select{border-bottom-left-radius:0;border-top-left-radius:0}.field.has-addons .control .button.is-hovered,.field.has-addons .control .button:hover,.field.has-addons .control .input.is-hovered,.field.has-addons .control .input:hover,.field.has-addons .control .select select.is-hovered,.field.has-addons .control .select select:hover{z-index:2}.field.has-addons .control .button.is-active,.field.has-addons .control .button.is-focused,.field.has-addons .control .button:active,.field.has-addons .control .button:focus,.field.has-addons .control .input.is-active,.field.has-addons .control .input.is-focused,.field.has-addons .control .input:active,.field.has-addons .control .input:focus,.field.has-addons .control .select select.is-active,.field.has-addons .control .select select.is-focused,.field.has-addons .control .select select:active,.field.has-addons .control .select select:focus{z-index:3}.field.has-addons .control .button.is-active:hover,.field.has-addons .control .button.is-focused:hover,.field.has-addons .control .button:active:hover,.field.has-addons .control .button:focus:hover,.field.has-addons .control .input.is-active:hover,.field.has-addons .control .input.is-focused:hover,.field.has-addons .control .input:active:hover,.field.has-addons .control .input:focus:hover,.field.has-addons .control .select select.is-active:hover,.field.has-addons .control .select select.is-focused:hover,.field.has-addons .control .select select:active:hover,.field.has-addons .control .select select:focus:hover{z-index:4}.field.has-addons .control.is-expanded{flex-grow:1}.field.has-addons.has-addons-centered{justify-content:center}.field.has-addons.has-addons-right{justify-content:flex-end}.field.has-addons.has-addons-fullwidth .control{flex-grow:1;flex-shrink:0}.field.is-grouped{display:flex;justify-content:flex-start}.field.is-grouped>.control{flex-shrink:0}.field.is-grouped>.control:not(:last-child){margin-bottom:0;margin-right:.75rem}.field.is-grouped>.control.is-expanded{flex-grow:1;flex-shrink:1}.field.is-grouped.is-grouped-centered{justify-content:center}.field.is-grouped.is-grouped-right{justify-content:flex-end}.field.is-grouped.is-grouped-multiline{flex-wrap:wrap}.field.is-grouped.is-grouped-multiline>.control:last-child,.field.is-grouped.is-grouped-multiline>.control:not(:last-child){margin-bottom:.75rem}.field.is-grouped.is-grouped-multiline:last-child{margin-bottom:-.75rem}.field.is-grouped.is-grouped-multiline:not(:last-child){margin-bottom:0}@media screen and (min-width:769px),print{.field.is-horizontal{display:flex}}.field-label .label{font-size:inherit}@media screen and (max-width:768px){.field-label{margin-bottom:.5rem}}@media screen and (min-width:769px),print{.field-label{flex-basis:0;flex-grow:1;flex-shrink:0;margin-right:1.5rem;text-align:right}.field-label.is-small{font-size:.75rem;padding-top:.375em}.field-label.is-normal{padding-top:.375em}.field-label.is-medium{font-size:1.25rem;padding-top:.375em}.field-label.is-large{font-size:1.5rem;padding-top:.375em}}.field-body .field .field{margin-bottom:0}@media screen and (min-width:769px),print{.field-body{display:flex;flex-basis:0;flex-grow:5;flex-shrink:1}.field-body .field{margin-bottom:0}.field-body>.field{flex-shrink:1}.field-body>.field:not(.is-narrow){flex-grow:1}.field-body>.field:not(:last-child){margin-right:.75rem}}.control{font-size:1rem;position:relative;text-align:left}.control.has-icon .icon{color:#dbdbdb;height:2.25em;pointer-events:none;position:absolute;top:0;width:2.25em;z-index:4}.control.has-icon .input:focus+.icon{color:#7a7a7a}.control.has-icon .input.is-small+.icon{font-size:.75rem}.control.has-icon .input.is-medium+.icon{font-size:1.25rem}.control.has-icon .input.is-large+.icon{font-size:1.5rem}.control.has-icon:not(.has-icon-right) .icon{left:0}.control.has-icon:not(.has-icon-right) .input{padding-left:2.25em}.control.has-icon.has-icon-right .icon{right:0}.control.has-icon.has-icon-right .input{padding-right:2.25em}.control.has-icons-left .input:focus~.icon,.control.has-icons-left .select:focus~.icon,.control.has-icons-right .input:focus~.icon,.control.has-icons-right .select:focus~.icon{color:#7a7a7a}.control.has-icons-left .input.is-small~.icon,.control.has-icons-left .select.is-small~.icon,.control.has-icons-right .input.is-small~.icon,.control.has-icons-right .select.is-small~.icon{font-size:.75rem}.control.has-icons-left .input.is-medium~.icon,.control.has-icons-left .select.is-medium~.icon,.control.has-icons-right .input.is-medium~.icon,.control.has-icons-right .select.is-medium~.icon{font-size:1.25rem}.control.has-icons-left .input.is-large~.icon,.control.has-icons-left .select.is-large~.icon,.control.has-icons-right .input.is-large~.icon,.control.has-icons-right .select.is-large~.icon{font-size:1.5rem}.control.has-icons-left .icon,.control.has-icons-right .icon{color:#dbdbdb;height:2.25em;pointer-events:none;position:absolute;top:0;width:2.25em;z-index:4}.control.has-icons-left .input,.control.has-icons-left .select select{padding-left:2.25em}.control.has-icons-left .icon.is-left{left:0}.control.has-icons-right .input,.control.has-icons-right .select select{padding-right:2.25em}.control.has-icons-right .icon.is-right{right:0}.control.is-loading::after{position:absolute!important;right:.625em;top:.625em;z-index:4}.control.is-loading.is-small:after{font-size:.75rem}.control.is-loading.is-medium:after{font-size:1.25rem}.control.is-loading.is-large:after{font-size:1.5rem}.icon{align-items:center;display:inline-flex;justify-content:center;height:1.5rem;width:1.5rem}.icon.is-small{height:1rem;width:1rem}.icon.is-medium{height:2rem;width:2rem}.icon.is-large{height:3rem;width:3rem}.image{display:block;position:relative}.image img{display:block;height:auto;width:100%}.image img.is-rounded{border-radius:290486px}.image.is-16by9 img,.image.is-1by1 img,.image.is-1by2 img,.image.is-1by3 img,.image.is-2by1 img,.image.is-2by3 img,.image.is-3by1 img,.image.is-3by2 img,.image.is-3by4 img,.image.is-3by5 img,.image.is-4by3 img,.image.is-4by5 img,.image.is-5by3 img,.image.is-5by4 img,.image.is-9by16 img,.image.is-square img{height:100%;width:100%}.image.is-1by1,.image.is-square{padding-top:100%}.image.is-5by4{padding-top:80%}.image.is-4by3{padding-top:75%}.image.is-3by2{padding-top:66.6666%}.image.is-5by3{padding-top:60%}.image.is-16by9{padding-top:56.25%}.image.is-2by1{padding-top:50%}.image.is-3by1{padding-top:33.3333%}.image.is-4by5{padding-top:125%}.image.is-3by4{padding-top:133.3333%}.image.is-2by3{padding-top:150%}.image.is-3by5{padding-top:166.6666%}.image.is-9by16{padding-top:177.7777%}.image.is-1by2{padding-top:200%}.image.is-1by3{padding-top:300%}.image.is-16x16{height:16px;width:16px}.image.is-24x24{height:24px;width:24px}.image.is-32x32{height:32px;width:32px}.image.is-48x48{height:48px;width:48px}.image.is-64x64{height:64px;width:64px}.image.is-96x96{height:96px;width:96px}.image.is-128x128{height:128px;width:128px}.notification{background-color:#f5f5f5;border-radius:4px;padding:1.25rem 2.5rem 1.25rem 1.5rem;position:relative}.notification a:not(.button){color:currentColor;text-decoration:underline}.notification strong{color:currentColor}.notification code,.notification pre{background:#fff}.notification pre code{background:0 0}.notification>.delete{position:absolute;right:.5rem;top:.5rem}.notification .content,.notification .subtitle,.notification .title{color:currentColor}.notification.is-white{background-color:#fff;color:#0a0a0a}.notification.is-black{background-color:#0a0a0a;color:#fff}.notification.is-light{background-color:#f5f5f5;color:#363636}.notification.is-dark{background-color:#363636;color:#f5f5f5}.notification.is-primary{background-color:#00d1b2;color:#fff}.notification.is-link{background-color:#3273dc;color:#fff}.notification.is-info{background-color:#209cee;color:#fff}.notification.is-success{background-color:#23d160;color:#fff}.notification.is-warning{background-color:#ffdd57;color:rgba(0,0,0,.7)}.notification.is-danger{background-color:#ff3860;color:#fff}.progress{-moz-appearance:none;-webkit-appearance:none;border:none;border-radius:290486px;display:block;height:1rem;overflow:hidden;padding:0;width:100%}.progress::-webkit-progress-bar{background-color:#dbdbdb}.progress::-webkit-progress-value{background-color:#4a4a4a}.progress::-moz-progress-bar{background-color:#4a4a4a}.progress::-ms-fill{background-color:#4a4a4a;border:none}.progress.is-white::-webkit-progress-value{background-color:#fff}.progress.is-white::-moz-progress-bar{background-color:#fff}.progress.is-white::-ms-fill{background-color:#fff}.progress.is-black::-webkit-progress-value{background-color:#0a0a0a}.progress.is-black::-moz-progress-bar{background-color:#0a0a0a}.progress.is-black::-ms-fill{background-color:#0a0a0a}.progress.is-light::-webkit-progress-value{background-color:#f5f5f5}.progress.is-light::-moz-progress-bar{background-color:#f5f5f5}.progress.is-light::-ms-fill{background-color:#f5f5f5}.progress.is-dark::-webkit-progress-value{background-color:#363636}.progress.is-dark::-moz-progress-bar{background-color:#363636}.progress.is-dark::-ms-fill{background-color:#363636}.progress.is-primary::-webkit-progress-value{background-color:#00d1b2}.progress.is-primary::-moz-progress-bar{background-color:#00d1b2}.progress.is-primary::-ms-fill{background-color:#00d1b2}.progress.is-link::-webkit-progress-value{background-color:#3273dc}.progress.is-link::-moz-progress-bar{background-color:#3273dc}.progress.is-link::-ms-fill{background-color:#3273dc}.progress.is-info::-webkit-progress-value{background-color:#209cee}.progress.is-info::-moz-progress-bar{background-color:#209cee}.progress.is-info::-ms-fill{background-color:#209cee}.progress.is-success::-webkit-progress-value{background-color:#23d160}.progress.is-success::-moz-progress-bar{background-color:#23d160}.progress.is-success::-ms-fill{background-color:#23d160}.progress.is-warning::-webkit-progress-value{background-color:#ffdd57}.progress.is-warning::-moz-progress-bar{background-color:#ffdd57}.progress.is-warning::-ms-fill{background-color:#ffdd57}.progress.is-danger::-webkit-progress-value{background-color:#ff3860}.progress.is-danger::-moz-progress-bar{background-color:#ff3860}.progress.is-danger::-ms-fill{background-color:#ff3860}.progress.is-small{height:.75rem}.progress.is-medium{height:1.25rem}.progress.is-large{height:1.5rem}.table{background-color:#fff;color:#363636}.table td,.table th{border:1px solid #dbdbdb;border-width:0 0 1px;padding:.5em .75em;vertical-align:top}.table td.is-white,.table th.is-white{background-color:#fff;border-color:#fff;color:#0a0a0a}.table td.is-black,.table th.is-black{background-color:#0a0a0a;border-color:#0a0a0a;color:#fff}.table td.is-light,.table th.is-light{background-color:#f5f5f5;border-color:#f5f5f5;color:#363636}.table td.is-dark,.table th.is-dark{background-color:#363636;border-color:#363636;color:#f5f5f5}.table td.is-primary,.table th.is-primary{background-color:#00d1b2;border-color:#00d1b2;color:#fff}.table td.is-link,.table th.is-link{background-color:#3273dc;border-color:#3273dc;color:#fff}.table td.is-info,.table th.is-info{background-color:#209cee;border-color:#209cee;color:#fff}.table td.is-success,.table th.is-success{background-color:#23d160;border-color:#23d160;color:#fff}.table td.is-warning,.table th.is-warning{background-color:#ffdd57;border-color:#ffdd57;color:rgba(0,0,0,.7)}.table td.is-danger,.table th.is-danger{background-color:#ff3860;border-color:#ff3860;color:#fff}.table td.is-narrow,.table th.is-narrow{white-space:nowrap;width:1%}.table td.is-selected,.table th.is-selected{background-color:#00d1b2;color:#fff}.table td.is-selected a,.table td.is-selected strong,.table th.is-selected a,.table th.is-selected strong{color:currentColor}.table th{color:#363636;text-align:left}.table tr.is-selected{background-color:#00d1b2;color:#fff}.table tr.is-selected a,.table tr.is-selected strong{color:currentColor}.table tr.is-selected td,.table tr.is-selected th{border-color:#fff;color:currentColor}.table thead td,.table thead th{border-width:0 0 2px;color:#363636}.table tfoot td,.table tfoot th{border-width:2px 0 0;color:#363636}.table tbody tr:last-child td,.table tbody tr:last-child th{border-bottom-width:0}.table.is-bordered td,.table.is-bordered th{border-width:1px}.table.is-bordered tr:last-child td,.table.is-bordered tr:last-child th{border-bottom-width:1px}.table.is-fullwidth{width:100%}.table.is-hoverable tbody tr:not(.is-selected):hover{background-color:#fafafa}.table.is-hoverable.is-striped tbody tr:not(.is-selected):hover{background-color:#f5f5f5}.table.is-narrow td,.table.is-narrow th{padding:.25em .5em}.table.is-striped tbody tr:not(.is-selected):nth-child(even){background-color:#fafafa}.table-container{-webkit-overflow-scrolling:touch;overflow:auto;overflow-y:hidden;max-width:100%}.tags{align-items:center;display:flex;flex-wrap:wrap;justify-content:flex-start}.tags .tag{margin-bottom:.5rem}.tags .tag:not(:last-child){margin-right:.5rem}.tags:last-child{margin-bottom:-.5rem}.tags:not(:last-child){margin-bottom:1rem}.tags.has-addons .tag{margin-right:0}.tags.has-addons .tag:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0}.tags.has-addons .tag:not(:last-child){border-bottom-right-radius:0;border-top-right-radius:0}.tags.is-centered{justify-content:center}.tags.is-centered .tag{margin-right:.25rem;margin-left:.25rem}.tags.is-right{justify-content:flex-end}.tags.is-right .tag:not(:first-child){margin-left:.5rem}.tags.is-right .tag:not(:last-child){margin-right:0}.tag:not(body){align-items:center;background-color:#f5f5f5;border-radius:4px;color:#4a4a4a;display:inline-flex;font-size:.75rem;height:2em;justify-content:center;line-height:1.5;padding-left:.75em;padding-right:.75em;white-space:nowrap}.tag:not(body) .delete{margin-left:.25rem;margin-right:-.375rem}.tag:not(body).is-white{background-color:#fff;color:#0a0a0a}.tag:not(body).is-black{background-color:#0a0a0a;color:#fff}.tag:not(body).is-light{background-color:#f5f5f5;color:#363636}.tag:not(body).is-dark{background-color:#363636;color:#f5f5f5}.tag:not(body).is-primary{background-color:#00d1b2;color:#fff}.tag:not(body).is-link{background-color:#3273dc;color:#fff}.tag:not(body).is-info{background-color:#209cee;color:#fff}.tag:not(body).is-success{background-color:#23d160;color:#fff}.tag:not(body).is-warning{background-color:#ffdd57;color:rgba(0,0,0,.7)}.tag:not(body).is-danger{background-color:#ff3860;color:#fff}.tag:not(body).is-medium{font-size:1rem}.tag:not(body).is-large{font-size:1.25rem}.tag:not(body) .icon:first-child:not(:last-child){margin-left:-.375em;margin-right:.1875em}.tag:not(body) .icon:last-child:not(:first-child){margin-left:.1875em;margin-right:-.375em}.tag:not(body) .icon:first-child:last-child{margin-left:-.375em;margin-right:-.375em}.tag:not(body).is-delete{margin-left:1px;padding:0;position:relative;width:2em}.tag:not(body).is-delete::after,.tag:not(body).is-delete::before{background-color:currentColor;content:\"\";display:block;left:50%;position:absolute;top:50%;-webkit-transform:translateX(-50%) translateY(-50%) rotate(45deg);transform:translateX(-50%) translateY(-50%) rotate(45deg);-webkit-transform-origin:center center;transform-origin:center center}.tag:not(body).is-delete::before{height:1px;width:50%}.tag:not(body).is-delete::after{height:50%;width:1px}.tag:not(body).is-delete:focus,.tag:not(body).is-delete:hover{background-color:#e8e8e8}.tag:not(body).is-delete:active{background-color:#dbdbdb}.tag:not(body).is-rounded{border-radius:290486px}a.tag:hover{text-decoration:underline}.subtitle,.title{word-break:break-word}.subtitle em,.subtitle span,.title em,.title span{font-weight:inherit}.subtitle sub,.title sub{font-size:.75em}.subtitle sup,.title sup{font-size:.75em}.subtitle .tag,.title .tag{vertical-align:middle}.title{color:#363636;font-size:2rem;font-weight:600;line-height:1.125}.title strong{color:inherit;font-weight:inherit}.title+.highlight{margin-top:-.75rem}.title:not(.is-spaced)+.subtitle{margin-top:-1.25rem}.title.is-1{font-size:3rem}.title.is-2{font-size:2.5rem}.title.is-3{font-size:2rem}.title.is-4{font-size:1.5rem}.title.is-5{font-size:1.25rem}.title.is-6{font-size:1rem}.title.is-7{font-size:.75rem}.subtitle{color:#4a4a4a;font-size:1.25rem;font-weight:400;line-height:1.25}.subtitle strong{color:#363636;font-weight:600}.subtitle:not(.is-spaced)+.title{margin-top:-1.25rem}.subtitle.is-1{font-size:3rem}.subtitle.is-2{font-size:2.5rem}.subtitle.is-3{font-size:2rem}.subtitle.is-4{font-size:1.5rem}.subtitle.is-5{font-size:1.25rem}.subtitle.is-6{font-size:1rem}.subtitle.is-7{font-size:.75rem}.heading{display:block;font-size:11px;letter-spacing:1px;margin-bottom:5px;text-transform:uppercase}.highlight{font-weight:400;max-width:100%;overflow:hidden;padding:0}.highlight pre{overflow:auto;max-width:100%}.number{align-items:center;background-color:#f5f5f5;border-radius:290486px;display:inline-flex;font-size:1.25rem;height:2em;justify-content:center;margin-right:1.5rem;min-width:2.5em;padding:.25rem .5rem;text-align:center;vertical-align:top}.breadcrumb{font-size:1rem;white-space:nowrap}.breadcrumb a{align-items:center;color:#3273dc;display:flex;justify-content:center;padding:0 .75em}.breadcrumb a:hover{color:#363636}.breadcrumb li{align-items:center;display:flex}.breadcrumb li:first-child a{padding-left:0}.breadcrumb li.is-active a{color:#363636;cursor:default;pointer-events:none}.breadcrumb li+li::before{color:#b5b5b5;content:\"/\"}.breadcrumb ol,.breadcrumb ul{align-items:flex-start;display:flex;flex-wrap:wrap;justify-content:flex-start}.breadcrumb .icon:first-child{margin-right:.5em}.breadcrumb .icon:last-child{margin-left:.5em}.breadcrumb.is-centered ol,.breadcrumb.is-centered ul{justify-content:center}.breadcrumb.is-right ol,.breadcrumb.is-right ul{justify-content:flex-end}.breadcrumb.is-small{font-size:.75rem}.breadcrumb.is-medium{font-size:1.25rem}.breadcrumb.is-large{font-size:1.5rem}.breadcrumb.has-arrow-separator li+li::before{content:\"\\2192\"}.breadcrumb.has-bullet-separator li+li::before{content:\"\\2022\"}.breadcrumb.has-dot-separator li+li::before{content:\"\\B7\"}.breadcrumb.has-succeeds-separator li+li::before{content:\"\\227B\"}.card{background-color:#fff;box-shadow:0 2px 3px rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.1);color:#4a4a4a;max-width:100%;position:relative}.card-header{background-color:none;align-items:stretch;box-shadow:0 1px 2px rgba(10,10,10,.1);display:flex}.card-header-title{align-items:center;color:#363636;display:flex;flex-grow:1;font-weight:700;padding:.75rem}.card-header-title.is-centered{justify-content:center}.card-header-icon{align-items:center;cursor:pointer;display:flex;justify-content:center;padding:.75rem}.card-image{display:block;position:relative}.card-content{background-color:none;padding:1.5rem}.card-footer{background-color:none;border-top:1px solid #dbdbdb;align-items:stretch;display:flex}.card-footer-item{align-items:center;display:flex;flex-basis:0;flex-grow:1;flex-shrink:0;justify-content:center;padding:.75rem}.card-footer-item:not(:last-child){border-right:1px solid #dbdbdb}.card .media:not(:last-child){margin-bottom:.75rem}.dropdown{display:inline-flex;position:relative;vertical-align:top}.dropdown.is-active .dropdown-menu,.dropdown.is-hoverable:hover .dropdown-menu{display:block}.dropdown.is-right .dropdown-menu{left:auto;right:0}.dropdown.is-up .dropdown-menu{bottom:100%;padding-bottom:4px;padding-top:initial;top:auto}.dropdown-menu{display:none;left:0;min-width:12rem;padding-top:4px;position:absolute;top:100%;z-index:20}.dropdown-content{background-color:#fff;border-radius:4px;box-shadow:0 2px 3px rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.1);padding-bottom:.5rem;padding-top:.5rem}.dropdown-item{color:#4a4a4a;display:block;font-size:.875rem;line-height:1.5;padding:.375rem 1rem;position:relative}a.dropdown-item{padding-right:3rem;white-space:nowrap}a.dropdown-item:hover{background-color:#f5f5f5;color:#0a0a0a}a.dropdown-item.is-active{background-color:#3273dc;color:#fff}.dropdown-divider{background-color:#dbdbdb;border:none;display:block;height:1px;margin:.5rem 0}.level{align-items:center;justify-content:space-between}.level code{border-radius:4px}.level img{display:inline-block;vertical-align:top}.level.is-mobile{display:flex}.level.is-mobile .level-left,.level.is-mobile .level-right{display:flex}.level.is-mobile .level-left+.level-right{margin-top:0}.level.is-mobile .level-item{margin-right:.75rem}.level.is-mobile .level-item:not(:last-child){margin-bottom:0}.level.is-mobile .level-item:not(.is-narrow){flex-grow:1}@media screen and (min-width:769px),print{.level{display:flex}.level>.level-item:not(.is-narrow){flex-grow:1}}.level-item{align-items:center;display:flex;flex-basis:auto;flex-grow:0;flex-shrink:0;justify-content:center}.level-item .subtitle,.level-item .title{margin-bottom:0}@media screen and (max-width:768px){.level-item:not(:last-child){margin-bottom:.75rem}}.level-left,.level-right{flex-basis:auto;flex-grow:0;flex-shrink:0}.level-left .level-item.is-flexible,.level-right .level-item.is-flexible{flex-grow:1}@media screen and (min-width:769px),print{.level-left .level-item:not(:last-child),.level-right .level-item:not(:last-child){margin-right:.75rem}}.level-left{align-items:center;justify-content:flex-start}@media screen and (max-width:768px){.level-left+.level-right{margin-top:1.5rem}}@media screen and (min-width:769px),print{.level-left{display:flex}}.level-right{align-items:center;justify-content:flex-end}@media screen and (min-width:769px),print{.level-right{display:flex}}.media{align-items:flex-start;display:flex;text-align:left}.media .content:not(:last-child){margin-bottom:.75rem}.media .media{border-top:1px solid rgba(219,219,219,.5);display:flex;padding-top:.75rem}.media .media .content:not(:last-child),.media .media .control:not(:last-child){margin-bottom:.5rem}.media .media .media{padding-top:.5rem}.media .media .media+.media{margin-top:.5rem}.media+.media{border-top:1px solid rgba(219,219,219,.5);margin-top:1rem;padding-top:1rem}.media.is-large+.media{margin-top:1.5rem;padding-top:1.5rem}.media-left,.media-right{flex-basis:auto;flex-grow:0;flex-shrink:0}.media-left{margin-right:1rem}.media-right{margin-left:1rem}.media-content{flex-basis:auto;flex-grow:1;flex-shrink:1;text-align:left}.menu{font-size:1rem}.menu.is-small{font-size:.75rem}.menu.is-medium{font-size:1.25rem}.menu.is-large{font-size:1.5rem}.menu-list{line-height:1.25}.menu-list a{border-radius:2px;color:#4a4a4a;display:block;padding:.5em .75em}.menu-list a:hover{background-color:#f5f5f5;color:#363636}.menu-list a.is-active{background-color:#3273dc;color:#fff}.menu-list li ul{border-left:1px solid #dbdbdb;margin:.75em;padding-left:.75em}.menu-label{color:#7a7a7a;font-size:.75em;letter-spacing:.1em;text-transform:uppercase}.menu-label:not(:first-child){margin-top:1em}.menu-label:not(:last-child){margin-bottom:1em}.message{background-color:#f5f5f5;border-radius:4px;font-size:1rem}.message strong{color:currentColor}.message a:not(.button):not(.tag){color:currentColor;text-decoration:underline}.message.is-small{font-size:.75rem}.message.is-medium{font-size:1.25rem}.message.is-large{font-size:1.5rem}.message.is-white{background-color:#fff}.message.is-white .message-header{background-color:#fff;color:#0a0a0a}.message.is-white .message-body{border-color:#fff;color:#4d4d4d}.message.is-black{background-color:#fafafa}.message.is-black .message-header{background-color:#0a0a0a;color:#fff}.message.is-black .message-body{border-color:#0a0a0a;color:#090909}.message.is-light{background-color:#fafafa}.message.is-light .message-header{background-color:#f5f5f5;color:#363636}.message.is-light .message-body{border-color:#f5f5f5;color:#505050}.message.is-dark{background-color:#fafafa}.message.is-dark .message-header{background-color:#363636;color:#f5f5f5}.message.is-dark .message-body{border-color:#363636;color:#2a2a2a}.message.is-primary{background-color:#f5fffd}.message.is-primary .message-header{background-color:#00d1b2;color:#fff}.message.is-primary .message-body{border-color:#00d1b2;color:#021310}.message.is-link{background-color:#f6f9fe}.message.is-link .message-header{background-color:#3273dc;color:#fff}.message.is-link .message-body{border-color:#3273dc;color:#22509a}.message.is-info{background-color:#f6fbfe}.message.is-info .message-header{background-color:#209cee;color:#fff}.message.is-info .message-body{border-color:#209cee;color:#12537e}.message.is-success{background-color:#f6fef9}.message.is-success .message-header{background-color:#23d160;color:#fff}.message.is-success .message-body{border-color:#23d160;color:#0e301a}.message.is-warning{background-color:#fffdf5}.message.is-warning .message-header{background-color:#ffdd57;color:rgba(0,0,0,.7)}.message.is-warning .message-body{border-color:#ffdd57;color:#3b3108}.message.is-danger{background-color:#fff5f7}.message.is-danger .message-header{background-color:#ff3860;color:#fff}.message.is-danger .message-body{border-color:#ff3860;color:#cd0930}.message-header{align-items:center;background-color:#4a4a4a;border-radius:4px 4px 0 0;color:#fff;display:flex;font-weight:700;justify-content:space-between;line-height:1.25;padding:.75em 1em;position:relative}.message-header .delete{flex-grow:0;flex-shrink:0;margin-left:.75em}.message-header+.message-body{border-width:0;border-top-left-radius:0;border-top-right-radius:0}.message-body{border-color:#dbdbdb;border-radius:4px;border-style:solid;border-width:0 0 0 4px;color:#4a4a4a;padding:1.25em 1.5em}.message-body code,.message-body pre{background-color:#fff}.message-body pre code{background-color:transparent}.modal{align-items:center;display:none;justify-content:center;overflow:hidden;position:fixed;z-index:40}.modal.is-active{display:flex}.modal-background{background-color:rgba(10,10,10,.86)}.modal-card,.modal-content{margin:0 20px;max-height:calc(100vh - 160px);overflow:auto;position:relative;width:100%}@media screen and (min-width:769px),print{.modal-card,.modal-content{margin:0 auto;max-height:calc(100vh - 40px);width:640px}}.modal-close{background:0 0;height:40px;position:fixed;right:20px;top:20px;width:40px}.modal-card{display:flex;flex-direction:column;max-height:calc(100vh - 40px);overflow:hidden}.modal-card-foot,.modal-card-head{align-items:center;background-color:#f5f5f5;display:flex;flex-shrink:0;justify-content:flex-start;padding:20px;position:relative}.modal-card-head{border-bottom:1px solid #dbdbdb;border-top-left-radius:6px;border-top-right-radius:6px}.modal-card-title{color:#363636;flex-grow:1;flex-shrink:0;font-size:1.5rem;line-height:1}.modal-card-foot{border-bottom-left-radius:6px;border-bottom-right-radius:6px;border-top:1px solid #dbdbdb}.modal-card-foot .button:not(:last-child){margin-right:10px}.modal-card-body{-webkit-overflow-scrolling:touch;background-color:#fff;flex-grow:1;flex-shrink:1;overflow:auto;padding:20px}.navbar{background-color:#fff;min-height:3.25rem;position:relative;z-index:30}.navbar.is-white{background-color:#fff;color:#0a0a0a}.navbar.is-white .navbar-brand .navbar-link,.navbar.is-white .navbar-brand>.navbar-item{color:#0a0a0a}.navbar.is-white .navbar-brand .navbar-link.is-active,.navbar.is-white .navbar-brand .navbar-link:hover,.navbar.is-white .navbar-brand>a.navbar-item.is-active,.navbar.is-white .navbar-brand>a.navbar-item:hover{background-color:#f2f2f2;color:#0a0a0a}.navbar.is-white .navbar-brand .navbar-link::after{border-color:#0a0a0a}@media screen and (min-width:1088px){.navbar.is-white .navbar-end .navbar-link,.navbar.is-white .navbar-end>.navbar-item,.navbar.is-white .navbar-start .navbar-link,.navbar.is-white .navbar-start>.navbar-item{color:#0a0a0a}.navbar.is-white .navbar-end .navbar-link.is-active,.navbar.is-white .navbar-end .navbar-link:hover,.navbar.is-white .navbar-end>a.navbar-item.is-active,.navbar.is-white .navbar-end>a.navbar-item:hover,.navbar.is-white .navbar-start .navbar-link.is-active,.navbar.is-white .navbar-start .navbar-link:hover,.navbar.is-white .navbar-start>a.navbar-item.is-active,.navbar.is-white .navbar-start>a.navbar-item:hover{background-color:#f2f2f2;color:#0a0a0a}.navbar.is-white .navbar-end .navbar-link::after,.navbar.is-white .navbar-start .navbar-link::after{border-color:#0a0a0a}.navbar.is-white .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-white .navbar-item.has-dropdown:hover .navbar-link{background-color:#f2f2f2;color:#0a0a0a}.navbar.is-white .navbar-dropdown a.navbar-item.is-active{background-color:#fff;color:#0a0a0a}}.navbar.is-black{background-color:#0a0a0a;color:#fff}.navbar.is-black .navbar-brand .navbar-link,.navbar.is-black .navbar-brand>.navbar-item{color:#fff}.navbar.is-black .navbar-brand .navbar-link.is-active,.navbar.is-black .navbar-brand .navbar-link:hover,.navbar.is-black .navbar-brand>a.navbar-item.is-active,.navbar.is-black .navbar-brand>a.navbar-item:hover{background-color:#000;color:#fff}.navbar.is-black .navbar-brand .navbar-link::after{border-color:#fff}@media screen and (min-width:1088px){.navbar.is-black .navbar-end .navbar-link,.navbar.is-black .navbar-end>.navbar-item,.navbar.is-black .navbar-start .navbar-link,.navbar.is-black .navbar-start>.navbar-item{color:#fff}.navbar.is-black .navbar-end .navbar-link.is-active,.navbar.is-black .navbar-end .navbar-link:hover,.navbar.is-black .navbar-end>a.navbar-item.is-active,.navbar.is-black .navbar-end>a.navbar-item:hover,.navbar.is-black .navbar-start .navbar-link.is-active,.navbar.is-black .navbar-start .navbar-link:hover,.navbar.is-black .navbar-start>a.navbar-item.is-active,.navbar.is-black .navbar-start>a.navbar-item:hover{background-color:#000;color:#fff}.navbar.is-black .navbar-end .navbar-link::after,.navbar.is-black .navbar-start .navbar-link::after{border-color:#fff}.navbar.is-black .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-black .navbar-item.has-dropdown:hover .navbar-link{background-color:#000;color:#fff}.navbar.is-black .navbar-dropdown a.navbar-item.is-active{background-color:#0a0a0a;color:#fff}}.navbar.is-light{background-color:#f5f5f5;color:#363636}.navbar.is-light .navbar-brand .navbar-link,.navbar.is-light .navbar-brand>.navbar-item{color:#363636}.navbar.is-light .navbar-brand .navbar-link.is-active,.navbar.is-light .navbar-brand .navbar-link:hover,.navbar.is-light .navbar-brand>a.navbar-item.is-active,.navbar.is-light .navbar-brand>a.navbar-item:hover{background-color:#e8e8e8;color:#363636}.navbar.is-light .navbar-brand .navbar-link::after{border-color:#363636}@media screen and (min-width:1088px){.navbar.is-light .navbar-end .navbar-link,.navbar.is-light .navbar-end>.navbar-item,.navbar.is-light .navbar-start .navbar-link,.navbar.is-light .navbar-start>.navbar-item{color:#363636}.navbar.is-light .navbar-end .navbar-link.is-active,.navbar.is-light .navbar-end .navbar-link:hover,.navbar.is-light .navbar-end>a.navbar-item.is-active,.navbar.is-light .navbar-end>a.navbar-item:hover,.navbar.is-light .navbar-start .navbar-link.is-active,.navbar.is-light .navbar-start .navbar-link:hover,.navbar.is-light .navbar-start>a.navbar-item.is-active,.navbar.is-light .navbar-start>a.navbar-item:hover{background-color:#e8e8e8;color:#363636}.navbar.is-light .navbar-end .navbar-link::after,.navbar.is-light .navbar-start .navbar-link::after{border-color:#363636}.navbar.is-light .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-light .navbar-item.has-dropdown:hover .navbar-link{background-color:#e8e8e8;color:#363636}.navbar.is-light .navbar-dropdown a.navbar-item.is-active{background-color:#f5f5f5;color:#363636}}.navbar.is-dark{background-color:#363636;color:#f5f5f5}.navbar.is-dark .navbar-brand .navbar-link,.navbar.is-dark .navbar-brand>.navbar-item{color:#f5f5f5}.navbar.is-dark .navbar-brand .navbar-link.is-active,.navbar.is-dark .navbar-brand .navbar-link:hover,.navbar.is-dark .navbar-brand>a.navbar-item.is-active,.navbar.is-dark .navbar-brand>a.navbar-item:hover{background-color:#292929;color:#f5f5f5}.navbar.is-dark .navbar-brand .navbar-link::after{border-color:#f5f5f5}@media screen and (min-width:1088px){.navbar.is-dark .navbar-end .navbar-link,.navbar.is-dark .navbar-end>.navbar-item,.navbar.is-dark .navbar-start .navbar-link,.navbar.is-dark .navbar-start>.navbar-item{color:#f5f5f5}.navbar.is-dark .navbar-end .navbar-link.is-active,.navbar.is-dark .navbar-end .navbar-link:hover,.navbar.is-dark .navbar-end>a.navbar-item.is-active,.navbar.is-dark .navbar-end>a.navbar-item:hover,.navbar.is-dark .navbar-start .navbar-link.is-active,.navbar.is-dark .navbar-start .navbar-link:hover,.navbar.is-dark .navbar-start>a.navbar-item.is-active,.navbar.is-dark .navbar-start>a.navbar-item:hover{background-color:#292929;color:#f5f5f5}.navbar.is-dark .navbar-end .navbar-link::after,.navbar.is-dark .navbar-start .navbar-link::after{border-color:#f5f5f5}.navbar.is-dark .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-dark .navbar-item.has-dropdown:hover .navbar-link{background-color:#292929;color:#f5f5f5}.navbar.is-dark .navbar-dropdown a.navbar-item.is-active{background-color:#363636;color:#f5f5f5}}.navbar.is-primary{background-color:#00d1b2;color:#fff}.navbar.is-primary .navbar-brand .navbar-link,.navbar.is-primary .navbar-brand>.navbar-item{color:#fff}.navbar.is-primary .navbar-brand .navbar-link.is-active,.navbar.is-primary .navbar-brand .navbar-link:hover,.navbar.is-primary .navbar-brand>a.navbar-item.is-active,.navbar.is-primary .navbar-brand>a.navbar-item:hover{background-color:#00b89c;color:#fff}.navbar.is-primary .navbar-brand .navbar-link::after{border-color:#fff}@media screen and (min-width:1088px){.navbar.is-primary .navbar-end .navbar-link,.navbar.is-primary .navbar-end>.navbar-item,.navbar.is-primary .navbar-start .navbar-link,.navbar.is-primary .navbar-start>.navbar-item{color:#fff}.navbar.is-primary .navbar-end .navbar-link.is-active,.navbar.is-primary .navbar-end .navbar-link:hover,.navbar.is-primary .navbar-end>a.navbar-item.is-active,.navbar.is-primary .navbar-end>a.navbar-item:hover,.navbar.is-primary .navbar-start .navbar-link.is-active,.navbar.is-primary .navbar-start .navbar-link:hover,.navbar.is-primary .navbar-start>a.navbar-item.is-active,.navbar.is-primary .navbar-start>a.navbar-item:hover{background-color:#00b89c;color:#fff}.navbar.is-primary .navbar-end .navbar-link::after,.navbar.is-primary .navbar-start .navbar-link::after{border-color:#fff}.navbar.is-primary .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-primary .navbar-item.has-dropdown:hover .navbar-link{background-color:#00b89c;color:#fff}.navbar.is-primary .navbar-dropdown a.navbar-item.is-active{background-color:#00d1b2;color:#fff}}.navbar.is-link{background-color:#3273dc;color:#fff}.navbar.is-link .navbar-brand .navbar-link,.navbar.is-link .navbar-brand>.navbar-item{color:#fff}.navbar.is-link .navbar-brand .navbar-link.is-active,.navbar.is-link .navbar-brand .navbar-link:hover,.navbar.is-link .navbar-brand>a.navbar-item.is-active,.navbar.is-link .navbar-brand>a.navbar-item:hover{background-color:#2366d1;color:#fff}.navbar.is-link .navbar-brand .navbar-link::after{border-color:#fff}@media screen and (min-width:1088px){.navbar.is-link .navbar-end .navbar-link,.navbar.is-link .navbar-end>.navbar-item,.navbar.is-link .navbar-start .navbar-link,.navbar.is-link .navbar-start>.navbar-item{color:#fff}.navbar.is-link .navbar-end .navbar-link.is-active,.navbar.is-link .navbar-end .navbar-link:hover,.navbar.is-link .navbar-end>a.navbar-item.is-active,.navbar.is-link .navbar-end>a.navbar-item:hover,.navbar.is-link .navbar-start .navbar-link.is-active,.navbar.is-link .navbar-start .navbar-link:hover,.navbar.is-link .navbar-start>a.navbar-item.is-active,.navbar.is-link .navbar-start>a.navbar-item:hover{background-color:#2366d1;color:#fff}.navbar.is-link .navbar-end .navbar-link::after,.navbar.is-link .navbar-start .navbar-link::after{border-color:#fff}.navbar.is-link .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-link .navbar-item.has-dropdown:hover .navbar-link{background-color:#2366d1;color:#fff}.navbar.is-link .navbar-dropdown a.navbar-item.is-active{background-color:#3273dc;color:#fff}}.navbar.is-info{background-color:#209cee;color:#fff}.navbar.is-info .navbar-brand .navbar-link,.navbar.is-info .navbar-brand>.navbar-item{color:#fff}.navbar.is-info .navbar-brand .navbar-link.is-active,.navbar.is-info .navbar-brand .navbar-link:hover,.navbar.is-info .navbar-brand>a.navbar-item.is-active,.navbar.is-info .navbar-brand>a.navbar-item:hover{background-color:#118fe4;color:#fff}.navbar.is-info .navbar-brand .navbar-link::after{border-color:#fff}@media screen and (min-width:1088px){.navbar.is-info .navbar-end .navbar-link,.navbar.is-info .navbar-end>.navbar-item,.navbar.is-info .navbar-start .navbar-link,.navbar.is-info .navbar-start>.navbar-item{color:#fff}.navbar.is-info .navbar-end .navbar-link.is-active,.navbar.is-info .navbar-end .navbar-link:hover,.navbar.is-info .navbar-end>a.navbar-item.is-active,.navbar.is-info .navbar-end>a.navbar-item:hover,.navbar.is-info .navbar-start .navbar-link.is-active,.navbar.is-info .navbar-start .navbar-link:hover,.navbar.is-info .navbar-start>a.navbar-item.is-active,.navbar.is-info .navbar-start>a.navbar-item:hover{background-color:#118fe4;color:#fff}.navbar.is-info .navbar-end .navbar-link::after,.navbar.is-info .navbar-start .navbar-link::after{border-color:#fff}.navbar.is-info .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-info .navbar-item.has-dropdown:hover .navbar-link{background-color:#118fe4;color:#fff}.navbar.is-info .navbar-dropdown a.navbar-item.is-active{background-color:#209cee;color:#fff}}.navbar.is-success{background-color:#23d160;color:#fff}.navbar.is-success .navbar-brand .navbar-link,.navbar.is-success .navbar-brand>.navbar-item{color:#fff}.navbar.is-success .navbar-brand .navbar-link.is-active,.navbar.is-success .navbar-brand .navbar-link:hover,.navbar.is-success .navbar-brand>a.navbar-item.is-active,.navbar.is-success .navbar-brand>a.navbar-item:hover{background-color:#20bc56;color:#fff}.navbar.is-success .navbar-brand .navbar-link::after{border-color:#fff}@media screen and (min-width:1088px){.navbar.is-success .navbar-end .navbar-link,.navbar.is-success .navbar-end>.navbar-item,.navbar.is-success .navbar-start .navbar-link,.navbar.is-success .navbar-start>.navbar-item{color:#fff}.navbar.is-success .navbar-end .navbar-link.is-active,.navbar.is-success .navbar-end .navbar-link:hover,.navbar.is-success .navbar-end>a.navbar-item.is-active,.navbar.is-success .navbar-end>a.navbar-item:hover,.navbar.is-success .navbar-start .navbar-link.is-active,.navbar.is-success .navbar-start .navbar-link:hover,.navbar.is-success .navbar-start>a.navbar-item.is-active,.navbar.is-success .navbar-start>a.navbar-item:hover{background-color:#20bc56;color:#fff}.navbar.is-success .navbar-end .navbar-link::after,.navbar.is-success .navbar-start .navbar-link::after{border-color:#fff}.navbar.is-success .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-success .navbar-item.has-dropdown:hover .navbar-link{background-color:#20bc56;color:#fff}.navbar.is-success .navbar-dropdown a.navbar-item.is-active{background-color:#23d160;color:#fff}}.navbar.is-warning{background-color:#ffdd57;color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-brand .navbar-link,.navbar.is-warning .navbar-brand>.navbar-item{color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-brand .navbar-link.is-active,.navbar.is-warning .navbar-brand .navbar-link:hover,.navbar.is-warning .navbar-brand>a.navbar-item.is-active,.navbar.is-warning .navbar-brand>a.navbar-item:hover{background-color:#ffd83d;color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-brand .navbar-link::after{border-color:rgba(0,0,0,.7)}@media screen and (min-width:1088px){.navbar.is-warning .navbar-end .navbar-link,.navbar.is-warning .navbar-end>.navbar-item,.navbar.is-warning .navbar-start .navbar-link,.navbar.is-warning .navbar-start>.navbar-item{color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-end .navbar-link.is-active,.navbar.is-warning .navbar-end .navbar-link:hover,.navbar.is-warning .navbar-end>a.navbar-item.is-active,.navbar.is-warning .navbar-end>a.navbar-item:hover,.navbar.is-warning .navbar-start .navbar-link.is-active,.navbar.is-warning .navbar-start .navbar-link:hover,.navbar.is-warning .navbar-start>a.navbar-item.is-active,.navbar.is-warning .navbar-start>a.navbar-item:hover{background-color:#ffd83d;color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-end .navbar-link::after,.navbar.is-warning .navbar-start .navbar-link::after{border-color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-warning .navbar-item.has-dropdown:hover .navbar-link{background-color:#ffd83d;color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-dropdown a.navbar-item.is-active{background-color:#ffdd57;color:rgba(0,0,0,.7)}}.navbar.is-danger{background-color:#ff3860;color:#fff}.navbar.is-danger .navbar-brand .navbar-link,.navbar.is-danger .navbar-brand>.navbar-item{color:#fff}.navbar.is-danger .navbar-brand .navbar-link.is-active,.navbar.is-danger .navbar-brand .navbar-link:hover,.navbar.is-danger .navbar-brand>a.navbar-item.is-active,.navbar.is-danger .navbar-brand>a.navbar-item:hover{background-color:#ff1f4b;color:#fff}.navbar.is-danger .navbar-brand .navbar-link::after{border-color:#fff}@media screen and (min-width:1088px){.navbar.is-danger .navbar-end .navbar-link,.navbar.is-danger .navbar-end>.navbar-item,.navbar.is-danger .navbar-start .navbar-link,.navbar.is-danger .navbar-start>.navbar-item{color:#fff}.navbar.is-danger .navbar-end .navbar-link.is-active,.navbar.is-danger .navbar-end .navbar-link:hover,.navbar.is-danger .navbar-end>a.navbar-item.is-active,.navbar.is-danger .navbar-end>a.navbar-item:hover,.navbar.is-danger .navbar-start .navbar-link.is-active,.navbar.is-danger .navbar-start .navbar-link:hover,.navbar.is-danger .navbar-start>a.navbar-item.is-active,.navbar.is-danger .navbar-start>a.navbar-item:hover{background-color:#ff1f4b;color:#fff}.navbar.is-danger .navbar-end .navbar-link::after,.navbar.is-danger .navbar-start .navbar-link::after{border-color:#fff}.navbar.is-danger .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-danger .navbar-item.has-dropdown:hover .navbar-link{background-color:#ff1f4b;color:#fff}.navbar.is-danger .navbar-dropdown a.navbar-item.is-active{background-color:#ff3860;color:#fff}}.navbar>.container{align-items:stretch;display:flex;min-height:3.25rem;width:100%}.navbar.has-shadow{box-shadow:0 2px 0 0 #f5f5f5}.navbar.is-fixed-bottom,.navbar.is-fixed-top{left:0;position:fixed;right:0;z-index:30}.navbar.is-fixed-bottom{bottom:0}.navbar.is-fixed-bottom.has-shadow{box-shadow:0 -2px 0 0 #f5f5f5}.navbar.is-fixed-top{top:0}body.has-navbar-fixed-top,html.has-navbar-fixed-top{padding-top:3.25rem}body.has-navbar-fixed-bottom,html.has-navbar-fixed-bottom{padding-bottom:3.25rem}.navbar-brand,.navbar-tabs{align-items:stretch;display:flex;flex-shrink:0;min-height:3.25rem}.navbar-brand a.navbar-item:hover{background-color:transparent}.navbar-tabs{-webkit-overflow-scrolling:touch;max-width:100vw;overflow-x:auto;overflow-y:hidden}.navbar-burger{cursor:pointer;display:block;height:3.25rem;position:relative;width:3.25rem;margin-left:auto}.navbar-burger span{background-color:currentColor;display:block;height:1px;left:calc(50% - 8px);position:absolute;-webkit-transform-origin:center;transform-origin:center;transition-duration:86ms;transition-property:background-color,opacity,-webkit-transform;transition-property:background-color,opacity,transform;transition-property:background-color,opacity,transform,-webkit-transform;transition-timing-function:ease-out;width:16px}.navbar-burger span:nth-child(1){top:calc(50% - 6px)}.navbar-burger span:nth-child(2){top:calc(50% - 1px)}.navbar-burger span:nth-child(3){top:calc(50% + 4px)}.navbar-burger:hover{background-color:rgba(0,0,0,.05)}.navbar-burger.is-active span:nth-child(1){-webkit-transform:translateY(5px) rotate(45deg);transform:translateY(5px) rotate(45deg)}.navbar-burger.is-active span:nth-child(2){opacity:0}.navbar-burger.is-active span:nth-child(3){-webkit-transform:translateY(-5px) rotate(-45deg);transform:translateY(-5px) rotate(-45deg)}.navbar-menu{display:none}.navbar-item,.navbar-link{color:#4a4a4a;display:block;line-height:1.5;padding:.5rem .75rem;position:relative}.navbar-item .icon:only-child,.navbar-link .icon:only-child{margin-left:-.25rem;margin-right:-.25rem}.navbar-link,a.navbar-item{cursor:pointer}.navbar-link.is-active,.navbar-link:hover,a.navbar-item.is-active,a.navbar-item:hover{background-color:#fafafa;color:#3273dc}.navbar-item{display:block;flex-grow:0;flex-shrink:0}.navbar-item img{max-height:1.75rem}.navbar-item.has-dropdown{padding:0}.navbar-item.is-expanded{flex-grow:1;flex-shrink:1}.navbar-item.is-tab{border-bottom:1px solid transparent;min-height:3.25rem;padding-bottom:calc(.5rem - 1px)}.navbar-item.is-tab:hover{background-color:transparent;border-bottom-color:#3273dc}.navbar-item.is-tab.is-active{background-color:transparent;border-bottom-color:#3273dc;border-bottom-style:solid;border-bottom-width:3px;color:#3273dc;padding-bottom:calc(.5rem - 3px)}.navbar-content{flex-grow:1;flex-shrink:1}.navbar-link{padding-right:2.5em}.navbar-link::after{border-color:#3273dc;margin-top:-.375em;right:1.125em}.navbar-dropdown{font-size:.875rem;padding-bottom:.5rem;padding-top:.5rem}.navbar-dropdown .navbar-item{padding-left:1.5rem;padding-right:1.5rem}.navbar-divider{background-color:#f5f5f5;border:none;display:none;height:2px;margin:.5rem 0}@media screen and (max-width:1087px){.navbar>.container{display:block}.navbar-brand .navbar-item,.navbar-tabs .navbar-item{align-items:center;display:flex}.navbar-link::after{display:none}.navbar-menu{background-color:#fff;box-shadow:0 8px 16px rgba(10,10,10,.1);padding:.5rem 0}.navbar-menu.is-active{display:block}.navbar.is-fixed-bottom-touch,.navbar.is-fixed-top-touch{left:0;position:fixed;right:0;z-index:30}.navbar.is-fixed-bottom-touch{bottom:0}.navbar.is-fixed-bottom-touch.has-shadow{box-shadow:0 -2px 3px rgba(10,10,10,.1)}.navbar.is-fixed-top-touch{top:0}.navbar.is-fixed-top .navbar-menu,.navbar.is-fixed-top-touch .navbar-menu{-webkit-overflow-scrolling:touch;max-height:calc(100vh - 3.25rem);overflow:auto}body.has-navbar-fixed-top-touch,html.has-navbar-fixed-top-touch{padding-top:3.25rem}body.has-navbar-fixed-bottom-touch,html.has-navbar-fixed-bottom-touch{padding-bottom:3.25rem}}@media screen and (min-width:1088px){.navbar,.navbar-end,.navbar-menu,.navbar-start{align-items:stretch;display:flex}.navbar{min-height:3.25rem}.navbar.is-spaced{padding:1rem 2rem}.navbar.is-spaced .navbar-end,.navbar.is-spaced .navbar-start{align-items:center}.navbar.is-spaced .navbar-link,.navbar.is-spaced a.navbar-item{border-radius:4px}.navbar.is-transparent .navbar-link.is-active,.navbar.is-transparent .navbar-link:hover,.navbar.is-transparent a.navbar-item.is-active,.navbar.is-transparent a.navbar-item:hover{background-color:transparent!important}.navbar.is-transparent .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:hover .navbar-link{background-color:transparent!important}.navbar.is-transparent .navbar-dropdown a.navbar-item:hover{background-color:#f5f5f5;color:#0a0a0a}.navbar.is-transparent .navbar-dropdown a.navbar-item.is-active{background-color:#f5f5f5;color:#3273dc}.navbar-burger{display:none}.navbar-item,.navbar-link{align-items:center;display:flex}.navbar-item{display:flex}.navbar-item.has-dropdown{align-items:stretch}.navbar-item.has-dropdown-up .navbar-link::after{-webkit-transform:rotate(135deg) translate(.25em,-.25em);transform:rotate(135deg) translate(.25em,-.25em)}.navbar-item.has-dropdown-up .navbar-dropdown{border-bottom:2px solid #dbdbdb;border-radius:6px 6px 0 0;border-top:none;bottom:100%;box-shadow:0 -8px 8px rgba(10,10,10,.1);top:auto}.navbar-item.is-active .navbar-dropdown,.navbar-item.is-hoverable:hover .navbar-dropdown{display:block}.navbar-item.is-active .navbar-dropdown.is-boxed,.navbar-item.is-hoverable:hover .navbar-dropdown.is-boxed,.navbar.is-spaced .navbar-item.is-active .navbar-dropdown,.navbar.is-spaced .navbar-item.is-hoverable:hover .navbar-dropdown{opacity:1;pointer-events:auto;-webkit-transform:translateY(0);transform:translateY(0)}.navbar-menu{flex-grow:1;flex-shrink:0}.navbar-start{justify-content:flex-start;margin-right:auto}.navbar-end{justify-content:flex-end;margin-left:auto}.navbar-dropdown{background-color:#fff;border-bottom-left-radius:6px;border-bottom-right-radius:6px;border-top:2px solid #dbdbdb;box-shadow:0 8px 8px rgba(10,10,10,.1);display:none;font-size:.875rem;left:0;min-width:100%;position:absolute;top:100%;z-index:20}.navbar-dropdown .navbar-item{padding:.375rem 1rem;white-space:nowrap}.navbar-dropdown a.navbar-item{padding-right:3rem}.navbar-dropdown a.navbar-item:hover{background-color:#f5f5f5;color:#0a0a0a}.navbar-dropdown a.navbar-item.is-active{background-color:#f5f5f5;color:#3273dc}.navbar-dropdown.is-boxed,.navbar.is-spaced .navbar-dropdown{border-radius:6px;border-top:none;box-shadow:0 8px 8px rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.1);display:block;opacity:0;pointer-events:none;top:calc(100% + (-4px));-webkit-transform:translateY(-5px);transform:translateY(-5px);transition-duration:86ms;transition-property:opacity,-webkit-transform;transition-property:opacity,transform;transition-property:opacity,transform,-webkit-transform}.navbar-dropdown.is-right{left:auto;right:0}.navbar-divider{display:block}.container>.navbar .navbar-brand,.navbar>.container .navbar-brand{margin-left:-1rem}.container>.navbar .navbar-menu,.navbar>.container .navbar-menu{margin-right:-1rem}.navbar.is-fixed-bottom-desktop,.navbar.is-fixed-top-desktop{left:0;position:fixed;right:0;z-index:30}.navbar.is-fixed-bottom-desktop{bottom:0}.navbar.is-fixed-bottom-desktop.has-shadow{box-shadow:0 -2px 3px rgba(10,10,10,.1)}.navbar.is-fixed-top-desktop{top:0}body.has-navbar-fixed-top-desktop,html.has-navbar-fixed-top-desktop{padding-top:3.25rem}body.has-navbar-fixed-bottom-desktop,html.has-navbar-fixed-bottom-desktop{padding-bottom:3.25rem}body.has-spaced-navbar-fixed-top,html.has-spaced-navbar-fixed-top{padding-top:5.25rem}body.has-spaced-navbar-fixed-bottom,html.has-spaced-navbar-fixed-bottom{padding-bottom:5.25rem}.navbar-link.is-active,a.navbar-item.is-active{color:#0a0a0a}.navbar-link.is-active:not(:hover),a.navbar-item.is-active:not(:hover){background-color:transparent}.navbar-item.has-dropdown.is-active .navbar-link,.navbar-item.has-dropdown:hover .navbar-link{background-color:#fafafa}}.pagination{font-size:1rem;margin:-.25rem}.pagination.is-small{font-size:.75rem}.pagination.is-medium{font-size:1.25rem}.pagination.is-large{font-size:1.5rem}.pagination.is-rounded .pagination-next,.pagination.is-rounded .pagination-previous{padding-left:1em;padding-right:1em;border-radius:290486px}.pagination.is-rounded .pagination-link{border-radius:290486px}.pagination,.pagination-list{align-items:center;display:flex;justify-content:center;text-align:center}.pagination-ellipsis,.pagination-link,.pagination-next,.pagination-previous{font-size:1em;padding-left:.5em;padding-right:.5em;justify-content:center;margin:.25rem;text-align:center}.pagination-link,.pagination-next,.pagination-previous{border-color:#dbdbdb;color:#363636;min-width:2.25em}.pagination-link:hover,.pagination-next:hover,.pagination-previous:hover{border-color:#b5b5b5;color:#363636}.pagination-link:focus,.pagination-next:focus,.pagination-previous:focus{border-color:#3273dc}.pagination-link:active,.pagination-next:active,.pagination-previous:active{box-shadow:inset 0 1px 2px rgba(10,10,10,.2)}.pagination-link[disabled],.pagination-next[disabled],.pagination-previous[disabled]{background-color:#dbdbdb;border-color:#dbdbdb;box-shadow:none;color:#7a7a7a;opacity:.5}.pagination-next,.pagination-previous{padding-left:.75em;padding-right:.75em;white-space:nowrap}.pagination-link.is-current{background-color:#3273dc;border-color:#3273dc;color:#fff}.pagination-ellipsis{color:#b5b5b5;pointer-events:none}.pagination-list{flex-wrap:wrap}@media screen and (max-width:768px){.pagination{flex-wrap:wrap}.pagination-next,.pagination-previous{flex-grow:1;flex-shrink:1}.pagination-list li{flex-grow:1;flex-shrink:1}}@media screen and (min-width:769px),print{.pagination-list{flex-grow:1;flex-shrink:1;justify-content:flex-start;order:1}.pagination-previous{order:2}.pagination-next{order:3}.pagination{justify-content:space-between}.pagination.is-centered .pagination-previous{order:1}.pagination.is-centered .pagination-list{justify-content:center;order:2}.pagination.is-centered .pagination-next{order:3}.pagination.is-right .pagination-previous{order:1}.pagination.is-right .pagination-next{order:2}.pagination.is-right .pagination-list{justify-content:flex-end;order:3}}.panel{font-size:1rem}.panel:not(:last-child){margin-bottom:1.5rem}.panel-block,.panel-heading,.panel-tabs{border-bottom:1px solid #dbdbdb;border-left:1px solid #dbdbdb;border-right:1px solid #dbdbdb}.panel-block:first-child,.panel-heading:first-child,.panel-tabs:first-child{border-top:1px solid #dbdbdb}.panel-heading{background-color:#f5f5f5;border-radius:4px 4px 0 0;color:#363636;font-size:1.25em;font-weight:300;line-height:1.25;padding:.5em .75em}.panel-tabs{align-items:flex-end;display:flex;font-size:.875em;justify-content:center}.panel-tabs a{border-bottom:1px solid #dbdbdb;margin-bottom:-1px;padding:.5em}.panel-tabs a.is-active{border-bottom-color:#4a4a4a;color:#363636}.panel-list a{color:#4a4a4a}.panel-list a:hover{color:#3273dc}.panel-block{align-items:center;color:#363636;display:flex;justify-content:flex-start;padding:.5em .75em}.panel-block input[type=checkbox]{margin-right:.75em}.panel-block>.control{flex-grow:1;flex-shrink:1;width:100%}.panel-block.is-wrapped{flex-wrap:wrap}.panel-block.is-active{border-left-color:#3273dc;color:#363636}.panel-block.is-active .panel-icon{color:#3273dc}a.panel-block,label.panel-block{cursor:pointer}a.panel-block:hover,label.panel-block:hover{background-color:#f5f5f5}.panel-icon{display:inline-block;font-size:14px;height:1em;line-height:1em;text-align:center;vertical-align:top;width:1em;color:#7a7a7a;margin-right:.75em}.panel-icon .fa{font-size:inherit;line-height:inherit}.tabs{-webkit-overflow-scrolling:touch;align-items:stretch;display:flex;font-size:1rem;justify-content:space-between;overflow:hidden;overflow-x:auto;white-space:nowrap}.tabs a{align-items:center;border-bottom-color:#dbdbdb;border-bottom-style:solid;border-bottom-width:1px;color:#4a4a4a;display:flex;justify-content:center;margin-bottom:-1px;padding:.5em 1em;vertical-align:top}.tabs a:hover{border-bottom-color:#363636;color:#363636}.tabs li{display:block}.tabs li.is-active a{border-bottom-color:#3273dc;color:#3273dc}.tabs ul{align-items:center;border-bottom-color:#dbdbdb;border-bottom-style:solid;border-bottom-width:1px;display:flex;flex-grow:1;flex-shrink:0;justify-content:flex-start}.tabs ul.is-left{padding-right:.75em}.tabs ul.is-center{flex:none;justify-content:center;padding-left:.75em;padding-right:.75em}.tabs ul.is-right{justify-content:flex-end;padding-left:.75em}.tabs .icon:first-child{margin-right:.5em}.tabs .icon:last-child{margin-left:.5em}.tabs.is-centered ul{justify-content:center}.tabs.is-right ul{justify-content:flex-end}.tabs.is-boxed a{border:1px solid transparent;border-radius:4px 4px 0 0}.tabs.is-boxed a:hover{background-color:#f5f5f5;border-bottom-color:#dbdbdb}.tabs.is-boxed li.is-active a{background-color:#fff;border-color:#dbdbdb;border-bottom-color:transparent!important}.tabs.is-fullwidth li{flex-grow:1;flex-shrink:0}.tabs.is-toggle a{border-color:#dbdbdb;border-style:solid;border-width:1px;margin-bottom:0;position:relative}.tabs.is-toggle a:hover{background-color:#f5f5f5;border-color:#b5b5b5;z-index:2}.tabs.is-toggle li+li{margin-left:-1px}.tabs.is-toggle li:first-child a{border-radius:4px 0 0 4px}.tabs.is-toggle li:last-child a{border-radius:0 4px 4px 0}.tabs.is-toggle li.is-active a{background-color:#3273dc;border-color:#3273dc;color:#fff;z-index:1}.tabs.is-toggle ul{border-bottom:none}.tabs.is-toggle.is-toggle-rounded li:first-child a{border-bottom-left-radius:290486px;border-top-left-radius:290486px;padding-left:1.25em}.tabs.is-toggle.is-toggle-rounded li:last-child a{border-bottom-right-radius:290486px;border-top-right-radius:290486px;padding-right:1.25em}.tabs.is-small{font-size:.75rem}.tabs.is-medium{font-size:1.25rem}.tabs.is-large{font-size:1.5rem}.column{display:block;flex-basis:0;flex-grow:1;flex-shrink:1;padding:.75rem}.columns.is-mobile>.column.is-narrow{flex:none}.columns.is-mobile>.column.is-full{flex:none;width:100%}.columns.is-mobile>.column.is-three-quarters{flex:none;width:75%}.columns.is-mobile>.column.is-two-thirds{flex:none;width:66.6666%}.columns.is-mobile>.column.is-half{flex:none;width:50%}.columns.is-mobile>.column.is-one-third{flex:none;width:33.3333%}.columns.is-mobile>.column.is-one-quarter{flex:none;width:25%}.columns.is-mobile>.column.is-one-fifth{flex:none;width:20%}.columns.is-mobile>.column.is-two-fifths{flex:none;width:40%}.columns.is-mobile>.column.is-three-fifths{flex:none;width:60%}.columns.is-mobile>.column.is-four-fifths{flex:none;width:80%}.columns.is-mobile>.column.is-offset-three-quarters{margin-left:75%}.columns.is-mobile>.column.is-offset-two-thirds{margin-left:66.6666%}.columns.is-mobile>.column.is-offset-half{margin-left:50%}.columns.is-mobile>.column.is-offset-one-third{margin-left:33.3333%}.columns.is-mobile>.column.is-offset-one-quarter{margin-left:25%}.columns.is-mobile>.column.is-offset-one-fifth{margin-left:20%}.columns.is-mobile>.column.is-offset-two-fifths{margin-left:40%}.columns.is-mobile>.column.is-offset-three-fifths{margin-left:60%}.columns.is-mobile>.column.is-offset-four-fifths{margin-left:80%}.columns.is-mobile>.column.is-1{flex:none;width:8.33333%}.columns.is-mobile>.column.is-offset-1{margin-left:8.33333%}.columns.is-mobile>.column.is-2{flex:none;width:16.66667%}.columns.is-mobile>.column.is-offset-2{margin-left:16.66667%}.columns.is-mobile>.column.is-3{flex:none;width:25%}.columns.is-mobile>.column.is-offset-3{margin-left:25%}.columns.is-mobile>.column.is-4{flex:none;width:33.33333%}.columns.is-mobile>.column.is-offset-4{margin-left:33.33333%}.columns.is-mobile>.column.is-5{flex:none;width:41.66667%}.columns.is-mobile>.column.is-offset-5{margin-left:41.66667%}.columns.is-mobile>.column.is-6{flex:none;width:50%}.columns.is-mobile>.column.is-offset-6{margin-left:50%}.columns.is-mobile>.column.is-7{flex:none;width:58.33333%}.columns.is-mobile>.column.is-offset-7{margin-left:58.33333%}.columns.is-mobile>.column.is-8{flex:none;width:66.66667%}.columns.is-mobile>.column.is-offset-8{margin-left:66.66667%}.columns.is-mobile>.column.is-9{flex:none;width:75%}.columns.is-mobile>.column.is-offset-9{margin-left:75%}.columns.is-mobile>.column.is-10{flex:none;width:83.33333%}.columns.is-mobile>.column.is-offset-10{margin-left:83.33333%}.columns.is-mobile>.column.is-11{flex:none;width:91.66667%}.columns.is-mobile>.column.is-offset-11{margin-left:91.66667%}.columns.is-mobile>.column.is-12{flex:none;width:100%}.columns.is-mobile>.column.is-offset-12{margin-left:100%}@media screen and (max-width:768px){.column.is-narrow-mobile{flex:none}.column.is-full-mobile{flex:none;width:100%}.column.is-three-quarters-mobile{flex:none;width:75%}.column.is-two-thirds-mobile{flex:none;width:66.6666%}.column.is-half-mobile{flex:none;width:50%}.column.is-one-third-mobile{flex:none;width:33.3333%}.column.is-one-quarter-mobile{flex:none;width:25%}.column.is-one-fifth-mobile{flex:none;width:20%}.column.is-two-fifths-mobile{flex:none;width:40%}.column.is-three-fifths-mobile{flex:none;width:60%}.column.is-four-fifths-mobile{flex:none;width:80%}.column.is-offset-three-quarters-mobile{margin-left:75%}.column.is-offset-two-thirds-mobile{margin-left:66.6666%}.column.is-offset-half-mobile{margin-left:50%}.column.is-offset-one-third-mobile{margin-left:33.3333%}.column.is-offset-one-quarter-mobile{margin-left:25%}.column.is-offset-one-fifth-mobile{margin-left:20%}.column.is-offset-two-fifths-mobile{margin-left:40%}.column.is-offset-three-fifths-mobile{margin-left:60%}.column.is-offset-four-fifths-mobile{margin-left:80%}.column.is-1-mobile{flex:none;width:8.33333%}.column.is-offset-1-mobile{margin-left:8.33333%}.column.is-2-mobile{flex:none;width:16.66667%}.column.is-offset-2-mobile{margin-left:16.66667%}.column.is-3-mobile{flex:none;width:25%}.column.is-offset-3-mobile{margin-left:25%}.column.is-4-mobile{flex:none;width:33.33333%}.column.is-offset-4-mobile{margin-left:33.33333%}.column.is-5-mobile{flex:none;width:41.66667%}.column.is-offset-5-mobile{margin-left:41.66667%}.column.is-6-mobile{flex:none;width:50%}.column.is-offset-6-mobile{margin-left:50%}.column.is-7-mobile{flex:none;width:58.33333%}.column.is-offset-7-mobile{margin-left:58.33333%}.column.is-8-mobile{flex:none;width:66.66667%}.column.is-offset-8-mobile{margin-left:66.66667%}.column.is-9-mobile{flex:none;width:75%}.column.is-offset-9-mobile{margin-left:75%}.column.is-10-mobile{flex:none;width:83.33333%}.column.is-offset-10-mobile{margin-left:83.33333%}.column.is-11-mobile{flex:none;width:91.66667%}.column.is-offset-11-mobile{margin-left:91.66667%}.column.is-12-mobile{flex:none;width:100%}.column.is-offset-12-mobile{margin-left:100%}}@media screen and (min-width:769px),print{.column.is-narrow,.column.is-narrow-tablet{flex:none}.column.is-full,.column.is-full-tablet{flex:none;width:100%}.column.is-three-quarters,.column.is-three-quarters-tablet{flex:none;width:75%}.column.is-two-thirds,.column.is-two-thirds-tablet{flex:none;width:66.6666%}.column.is-half,.column.is-half-tablet{flex:none;width:50%}.column.is-one-third,.column.is-one-third-tablet{flex:none;width:33.3333%}.column.is-one-quarter,.column.is-one-quarter-tablet{flex:none;width:25%}.column.is-one-fifth,.column.is-one-fifth-tablet{flex:none;width:20%}.column.is-two-fifths,.column.is-two-fifths-tablet{flex:none;width:40%}.column.is-three-fifths,.column.is-three-fifths-tablet{flex:none;width:60%}.column.is-four-fifths,.column.is-four-fifths-tablet{flex:none;width:80%}.column.is-offset-three-quarters,.column.is-offset-three-quarters-tablet{margin-left:75%}.column.is-offset-two-thirds,.column.is-offset-two-thirds-tablet{margin-left:66.6666%}.column.is-offset-half,.column.is-offset-half-tablet{margin-left:50%}.column.is-offset-one-third,.column.is-offset-one-third-tablet{margin-left:33.3333%}.column.is-offset-one-quarter,.column.is-offset-one-quarter-tablet{margin-left:25%}.column.is-offset-one-fifth,.column.is-offset-one-fifth-tablet{margin-left:20%}.column.is-offset-two-fifths,.column.is-offset-two-fifths-tablet{margin-left:40%}.column.is-offset-three-fifths,.column.is-offset-three-fifths-tablet{margin-left:60%}.column.is-offset-four-fifths,.column.is-offset-four-fifths-tablet{margin-left:80%}.column.is-1,.column.is-1-tablet{flex:none;width:8.33333%}.column.is-offset-1,.column.is-offset-1-tablet{margin-left:8.33333%}.column.is-2,.column.is-2-tablet{flex:none;width:16.66667%}.column.is-offset-2,.column.is-offset-2-tablet{margin-left:16.66667%}.column.is-3,.column.is-3-tablet{flex:none;width:25%}.column.is-offset-3,.column.is-offset-3-tablet{margin-left:25%}.column.is-4,.column.is-4-tablet{flex:none;width:33.33333%}.column.is-offset-4,.column.is-offset-4-tablet{margin-left:33.33333%}.column.is-5,.column.is-5-tablet{flex:none;width:41.66667%}.column.is-offset-5,.column.is-offset-5-tablet{margin-left:41.66667%}.column.is-6,.column.is-6-tablet{flex:none;width:50%}.column.is-offset-6,.column.is-offset-6-tablet{margin-left:50%}.column.is-7,.column.is-7-tablet{flex:none;width:58.33333%}.column.is-offset-7,.column.is-offset-7-tablet{margin-left:58.33333%}.column.is-8,.column.is-8-tablet{flex:none;width:66.66667%}.column.is-offset-8,.column.is-offset-8-tablet{margin-left:66.66667%}.column.is-9,.column.is-9-tablet{flex:none;width:75%}.column.is-offset-9,.column.is-offset-9-tablet{margin-left:75%}.column.is-10,.column.is-10-tablet{flex:none;width:83.33333%}.column.is-offset-10,.column.is-offset-10-tablet{margin-left:83.33333%}.column.is-11,.column.is-11-tablet{flex:none;width:91.66667%}.column.is-offset-11,.column.is-offset-11-tablet{margin-left:91.66667%}.column.is-12,.column.is-12-tablet{flex:none;width:100%}.column.is-offset-12,.column.is-offset-12-tablet{margin-left:100%}}@media screen and (max-width:1087px){.column.is-narrow-touch{flex:none}.column.is-full-touch{flex:none;width:100%}.column.is-three-quarters-touch{flex:none;width:75%}.column.is-two-thirds-touch{flex:none;width:66.6666%}.column.is-half-touch{flex:none;width:50%}.column.is-one-third-touch{flex:none;width:33.3333%}.column.is-one-quarter-touch{flex:none;width:25%}.column.is-one-fifth-touch{flex:none;width:20%}.column.is-two-fifths-touch{flex:none;width:40%}.column.is-three-fifths-touch{flex:none;width:60%}.column.is-four-fifths-touch{flex:none;width:80%}.column.is-offset-three-quarters-touch{margin-left:75%}.column.is-offset-two-thirds-touch{margin-left:66.6666%}.column.is-offset-half-touch{margin-left:50%}.column.is-offset-one-third-touch{margin-left:33.3333%}.column.is-offset-one-quarter-touch{margin-left:25%}.column.is-offset-one-fifth-touch{margin-left:20%}.column.is-offset-two-fifths-touch{margin-left:40%}.column.is-offset-three-fifths-touch{margin-left:60%}.column.is-offset-four-fifths-touch{margin-left:80%}.column.is-1-touch{flex:none;width:8.33333%}.column.is-offset-1-touch{margin-left:8.33333%}.column.is-2-touch{flex:none;width:16.66667%}.column.is-offset-2-touch{margin-left:16.66667%}.column.is-3-touch{flex:none;width:25%}.column.is-offset-3-touch{margin-left:25%}.column.is-4-touch{flex:none;width:33.33333%}.column.is-offset-4-touch{margin-left:33.33333%}.column.is-5-touch{flex:none;width:41.66667%}.column.is-offset-5-touch{margin-left:41.66667%}.column.is-6-touch{flex:none;width:50%}.column.is-offset-6-touch{margin-left:50%}.column.is-7-touch{flex:none;width:58.33333%}.column.is-offset-7-touch{margin-left:58.33333%}.column.is-8-touch{flex:none;width:66.66667%}.column.is-offset-8-touch{margin-left:66.66667%}.column.is-9-touch{flex:none;width:75%}.column.is-offset-9-touch{margin-left:75%}.column.is-10-touch{flex:none;width:83.33333%}.column.is-offset-10-touch{margin-left:83.33333%}.column.is-11-touch{flex:none;width:91.66667%}.column.is-offset-11-touch{margin-left:91.66667%}.column.is-12-touch{flex:none;width:100%}.column.is-offset-12-touch{margin-left:100%}}@media screen and (min-width:1088px){.column.is-narrow-desktop{flex:none}.column.is-full-desktop{flex:none;width:100%}.column.is-three-quarters-desktop{flex:none;width:75%}.column.is-two-thirds-desktop{flex:none;width:66.6666%}.column.is-half-desktop{flex:none;width:50%}.column.is-one-third-desktop{flex:none;width:33.3333%}.column.is-one-quarter-desktop{flex:none;width:25%}.column.is-one-fifth-desktop{flex:none;width:20%}.column.is-two-fifths-desktop{flex:none;width:40%}.column.is-three-fifths-desktop{flex:none;width:60%}.column.is-four-fifths-desktop{flex:none;width:80%}.column.is-offset-three-quarters-desktop{margin-left:75%}.column.is-offset-two-thirds-desktop{margin-left:66.6666%}.column.is-offset-half-desktop{margin-left:50%}.column.is-offset-one-third-desktop{margin-left:33.3333%}.column.is-offset-one-quarter-desktop{margin-left:25%}.column.is-offset-one-fifth-desktop{margin-left:20%}.column.is-offset-two-fifths-desktop{margin-left:40%}.column.is-offset-three-fifths-desktop{margin-left:60%}.column.is-offset-four-fifths-desktop{margin-left:80%}.column.is-1-desktop{flex:none;width:8.33333%}.column.is-offset-1-desktop{margin-left:8.33333%}.column.is-2-desktop{flex:none;width:16.66667%}.column.is-offset-2-desktop{margin-left:16.66667%}.column.is-3-desktop{flex:none;width:25%}.column.is-offset-3-desktop{margin-left:25%}.column.is-4-desktop{flex:none;width:33.33333%}.column.is-offset-4-desktop{margin-left:33.33333%}.column.is-5-desktop{flex:none;width:41.66667%}.column.is-offset-5-desktop{margin-left:41.66667%}.column.is-6-desktop{flex:none;width:50%}.column.is-offset-6-desktop{margin-left:50%}.column.is-7-desktop{flex:none;width:58.33333%}.column.is-offset-7-desktop{margin-left:58.33333%}.column.is-8-desktop{flex:none;width:66.66667%}.column.is-offset-8-desktop{margin-left:66.66667%}.column.is-9-desktop{flex:none;width:75%}.column.is-offset-9-desktop{margin-left:75%}.column.is-10-desktop{flex:none;width:83.33333%}.column.is-offset-10-desktop{margin-left:83.33333%}.column.is-11-desktop{flex:none;width:91.66667%}.column.is-offset-11-desktop{margin-left:91.66667%}.column.is-12-desktop{flex:none;width:100%}.column.is-offset-12-desktop{margin-left:100%}}@media screen and (min-width:1280px){.column.is-narrow-widescreen{flex:none}.column.is-full-widescreen{flex:none;width:100%}.column.is-three-quarters-widescreen{flex:none;width:75%}.column.is-two-thirds-widescreen{flex:none;width:66.6666%}.column.is-half-widescreen{flex:none;width:50%}.column.is-one-third-widescreen{flex:none;width:33.3333%}.column.is-one-quarter-widescreen{flex:none;width:25%}.column.is-one-fifth-widescreen{flex:none;width:20%}.column.is-two-fifths-widescreen{flex:none;width:40%}.column.is-three-fifths-widescreen{flex:none;width:60%}.column.is-four-fifths-widescreen{flex:none;width:80%}.column.is-offset-three-quarters-widescreen{margin-left:75%}.column.is-offset-two-thirds-widescreen{margin-left:66.6666%}.column.is-offset-half-widescreen{margin-left:50%}.column.is-offset-one-third-widescreen{margin-left:33.3333%}.column.is-offset-one-quarter-widescreen{margin-left:25%}.column.is-offset-one-fifth-widescreen{margin-left:20%}.column.is-offset-two-fifths-widescreen{margin-left:40%}.column.is-offset-three-fifths-widescreen{margin-left:60%}.column.is-offset-four-fifths-widescreen{margin-left:80%}.column.is-1-widescreen{flex:none;width:8.33333%}.column.is-offset-1-widescreen{margin-left:8.33333%}.column.is-2-widescreen{flex:none;width:16.66667%}.column.is-offset-2-widescreen{margin-left:16.66667%}.column.is-3-widescreen{flex:none;width:25%}.column.is-offset-3-widescreen{margin-left:25%}.column.is-4-widescreen{flex:none;width:33.33333%}.column.is-offset-4-widescreen{margin-left:33.33333%}.column.is-5-widescreen{flex:none;width:41.66667%}.column.is-offset-5-widescreen{margin-left:41.66667%}.column.is-6-widescreen{flex:none;width:50%}.column.is-offset-6-widescreen{margin-left:50%}.column.is-7-widescreen{flex:none;width:58.33333%}.column.is-offset-7-widescreen{margin-left:58.33333%}.column.is-8-widescreen{flex:none;width:66.66667%}.column.is-offset-8-widescreen{margin-left:66.66667%}.column.is-9-widescreen{flex:none;width:75%}.column.is-offset-9-widescreen{margin-left:75%}.column.is-10-widescreen{flex:none;width:83.33333%}.column.is-offset-10-widescreen{margin-left:83.33333%}.column.is-11-widescreen{flex:none;width:91.66667%}.column.is-offset-11-widescreen{margin-left:91.66667%}.column.is-12-widescreen{flex:none;width:100%}.column.is-offset-12-widescreen{margin-left:100%}}@media screen and (min-width:1472px){.column.is-narrow-fullhd{flex:none}.column.is-full-fullhd{flex:none;width:100%}.column.is-three-quarters-fullhd{flex:none;width:75%}.column.is-two-thirds-fullhd{flex:none;width:66.6666%}.column.is-half-fullhd{flex:none;width:50%}.column.is-one-third-fullhd{flex:none;width:33.3333%}.column.is-one-quarter-fullhd{flex:none;width:25%}.column.is-one-fifth-fullhd{flex:none;width:20%}.column.is-two-fifths-fullhd{flex:none;width:40%}.column.is-three-fifths-fullhd{flex:none;width:60%}.column.is-four-fifths-fullhd{flex:none;width:80%}.column.is-offset-three-quarters-fullhd{margin-left:75%}.column.is-offset-two-thirds-fullhd{margin-left:66.6666%}.column.is-offset-half-fullhd{margin-left:50%}.column.is-offset-one-third-fullhd{margin-left:33.3333%}.column.is-offset-one-quarter-fullhd{margin-left:25%}.column.is-offset-one-fifth-fullhd{margin-left:20%}.column.is-offset-two-fifths-fullhd{margin-left:40%}.column.is-offset-three-fifths-fullhd{margin-left:60%}.column.is-offset-four-fifths-fullhd{margin-left:80%}.column.is-1-fullhd{flex:none;width:8.33333%}.column.is-offset-1-fullhd{margin-left:8.33333%}.column.is-2-fullhd{flex:none;width:16.66667%}.column.is-offset-2-fullhd{margin-left:16.66667%}.column.is-3-fullhd{flex:none;width:25%}.column.is-offset-3-fullhd{margin-left:25%}.column.is-4-fullhd{flex:none;width:33.33333%}.column.is-offset-4-fullhd{margin-left:33.33333%}.column.is-5-fullhd{flex:none;width:41.66667%}.column.is-offset-5-fullhd{margin-left:41.66667%}.column.is-6-fullhd{flex:none;width:50%}.column.is-offset-6-fullhd{margin-left:50%}.column.is-7-fullhd{flex:none;width:58.33333%}.column.is-offset-7-fullhd{margin-left:58.33333%}.column.is-8-fullhd{flex:none;width:66.66667%}.column.is-offset-8-fullhd{margin-left:66.66667%}.column.is-9-fullhd{flex:none;width:75%}.column.is-offset-9-fullhd{margin-left:75%}.column.is-10-fullhd{flex:none;width:83.33333%}.column.is-offset-10-fullhd{margin-left:83.33333%}.column.is-11-fullhd{flex:none;width:91.66667%}.column.is-offset-11-fullhd{margin-left:91.66667%}.column.is-12-fullhd{flex:none;width:100%}.column.is-offset-12-fullhd{margin-left:100%}}.columns{margin-left:-.75rem;margin-right:-.75rem;margin-top:-.75rem}.columns:last-child{margin-bottom:-.75rem}.columns:not(:last-child){margin-bottom:calc(1.5rem - .75rem)}.columns.is-centered{justify-content:center}.columns.is-gapless{margin-left:0;margin-right:0;margin-top:0}.columns.is-gapless>.column{margin:0;padding:0!important}.columns.is-gapless:not(:last-child){margin-bottom:1.5rem}.columns.is-gapless:last-child{margin-bottom:0}.columns.is-mobile{display:flex}.columns.is-multiline{flex-wrap:wrap}.columns.is-vcentered{align-items:center}@media screen and (min-width:769px),print{.columns:not(.is-desktop){display:flex}}@media screen and (min-width:1088px){.columns.is-desktop{display:flex}}.columns.is-variable{--columnGap:0.75rem;margin-left:calc(-1 * var(--columnGap));margin-right:calc(-1 * var(--columnGap))}.columns.is-variable .column{padding-left:var(--columnGap);padding-right:var(--columnGap)}.columns.is-variable.is-0{--columnGap:0rem}.columns.is-variable.is-1{--columnGap:0.25rem}.columns.is-variable.is-2{--columnGap:0.5rem}.columns.is-variable.is-3{--columnGap:0.75rem}.columns.is-variable.is-4{--columnGap:1rem}.columns.is-variable.is-5{--columnGap:1.25rem}.columns.is-variable.is-6{--columnGap:1.5rem}.columns.is-variable.is-7{--columnGap:1.75rem}.columns.is-variable.is-8{--columnGap:2rem}.tile{align-items:stretch;display:block;flex-basis:0;flex-grow:1;flex-shrink:1;min-height:-webkit-min-content;min-height:-moz-min-content;min-height:min-content}.tile.is-ancestor{margin-left:-.75rem;margin-right:-.75rem;margin-top:-.75rem}.tile.is-ancestor:last-child{margin-bottom:-.75rem}.tile.is-ancestor:not(:last-child){margin-bottom:.75rem}.tile.is-child{margin:0!important}.tile.is-parent{padding:.75rem}.tile.is-vertical{flex-direction:column}.tile.is-vertical>.tile.is-child:not(:last-child){margin-bottom:1.5rem!important}@media screen and (min-width:769px),print{.tile:not(.is-child){display:flex}.tile.is-1{flex:none;width:8.33333%}.tile.is-2{flex:none;width:16.66667%}.tile.is-3{flex:none;width:25%}.tile.is-4{flex:none;width:33.33333%}.tile.is-5{flex:none;width:41.66667%}.tile.is-6{flex:none;width:50%}.tile.is-7{flex:none;width:58.33333%}.tile.is-8{flex:none;width:66.66667%}.tile.is-9{flex:none;width:75%}.tile.is-10{flex:none;width:83.33333%}.tile.is-11{flex:none;width:91.66667%}.tile.is-12{flex:none;width:100%}}.hero{align-items:stretch;display:flex;flex-direction:column;justify-content:space-between}.hero .navbar{background:0 0}.hero .tabs ul{border-bottom:none}.hero.is-white{background-color:#fff;color:#0a0a0a}.hero.is-white a:not(.button):not(.dropdown-item):not(.tag),.hero.is-white strong{color:inherit}.hero.is-white .title{color:#0a0a0a}.hero.is-white .subtitle{color:rgba(10,10,10,.9)}.hero.is-white .subtitle a:not(.button),.hero.is-white .subtitle strong{color:#0a0a0a}@media screen and (max-width:1087px){.hero.is-white .navbar-menu{background-color:#fff}}.hero.is-white .navbar-item,.hero.is-white .navbar-link{color:rgba(10,10,10,.7)}.hero.is-white .navbar-link.is-active,.hero.is-white .navbar-link:hover,.hero.is-white a.navbar-item.is-active,.hero.is-white a.navbar-item:hover{background-color:#f2f2f2;color:#0a0a0a}.hero.is-white .tabs a{color:#0a0a0a;opacity:.9}.hero.is-white .tabs a:hover{opacity:1}.hero.is-white .tabs li.is-active a{opacity:1}.hero.is-white .tabs.is-boxed a,.hero.is-white .tabs.is-toggle a{color:#0a0a0a}.hero.is-white .tabs.is-boxed a:hover,.hero.is-white .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-white .tabs.is-boxed li.is-active a,.hero.is-white .tabs.is-boxed li.is-active a:hover,.hero.is-white .tabs.is-toggle li.is-active a,.hero.is-white .tabs.is-toggle li.is-active a:hover{background-color:#0a0a0a;border-color:#0a0a0a;color:#fff}.hero.is-white.is-bold{background-image:linear-gradient(141deg,#e6e6e6 0,#fff 71%,#fff 100%)}@media screen and (max-width:768px){.hero.is-white.is-bold .navbar-menu{background-image:linear-gradient(141deg,#e6e6e6 0,#fff 71%,#fff 100%)}}.hero.is-black{background-color:#0a0a0a;color:#fff}.hero.is-black a:not(.button):not(.dropdown-item):not(.tag),.hero.is-black strong{color:inherit}.hero.is-black .title{color:#fff}.hero.is-black .subtitle{color:rgba(255,255,255,.9)}.hero.is-black .subtitle a:not(.button),.hero.is-black .subtitle strong{color:#fff}@media screen and (max-width:1087px){.hero.is-black .navbar-menu{background-color:#0a0a0a}}.hero.is-black .navbar-item,.hero.is-black .navbar-link{color:rgba(255,255,255,.7)}.hero.is-black .navbar-link.is-active,.hero.is-black .navbar-link:hover,.hero.is-black a.navbar-item.is-active,.hero.is-black a.navbar-item:hover{background-color:#000;color:#fff}.hero.is-black .tabs a{color:#fff;opacity:.9}.hero.is-black .tabs a:hover{opacity:1}.hero.is-black .tabs li.is-active a{opacity:1}.hero.is-black .tabs.is-boxed a,.hero.is-black .tabs.is-toggle a{color:#fff}.hero.is-black .tabs.is-boxed a:hover,.hero.is-black .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-black .tabs.is-boxed li.is-active a,.hero.is-black .tabs.is-boxed li.is-active a:hover,.hero.is-black .tabs.is-toggle li.is-active a,.hero.is-black .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#0a0a0a}.hero.is-black.is-bold{background-image:linear-gradient(141deg,#000 0,#0a0a0a 71%,#181616 100%)}@media screen and (max-width:768px){.hero.is-black.is-bold .navbar-menu{background-image:linear-gradient(141deg,#000 0,#0a0a0a 71%,#181616 100%)}}.hero.is-light{background-color:#f5f5f5;color:#363636}.hero.is-light a:not(.button):not(.dropdown-item):not(.tag),.hero.is-light strong{color:inherit}.hero.is-light .title{color:#363636}.hero.is-light .subtitle{color:rgba(54,54,54,.9)}.hero.is-light .subtitle a:not(.button),.hero.is-light .subtitle strong{color:#363636}@media screen and (max-width:1087px){.hero.is-light .navbar-menu{background-color:#f5f5f5}}.hero.is-light .navbar-item,.hero.is-light .navbar-link{color:rgba(54,54,54,.7)}.hero.is-light .navbar-link.is-active,.hero.is-light .navbar-link:hover,.hero.is-light a.navbar-item.is-active,.hero.is-light a.navbar-item:hover{background-color:#e8e8e8;color:#363636}.hero.is-light .tabs a{color:#363636;opacity:.9}.hero.is-light .tabs a:hover{opacity:1}.hero.is-light .tabs li.is-active a{opacity:1}.hero.is-light .tabs.is-boxed a,.hero.is-light .tabs.is-toggle a{color:#363636}.hero.is-light .tabs.is-boxed a:hover,.hero.is-light .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-light .tabs.is-boxed li.is-active a,.hero.is-light .tabs.is-boxed li.is-active a:hover,.hero.is-light .tabs.is-toggle li.is-active a,.hero.is-light .tabs.is-toggle li.is-active a:hover{background-color:#363636;border-color:#363636;color:#f5f5f5}.hero.is-light.is-bold{background-image:linear-gradient(141deg,#dfd8d9 0,#f5f5f5 71%,#fff 100%)}@media screen and (max-width:768px){.hero.is-light.is-bold .navbar-menu{background-image:linear-gradient(141deg,#dfd8d9 0,#f5f5f5 71%,#fff 100%)}}.hero.is-dark{background-color:#363636;color:#f5f5f5}.hero.is-dark a:not(.button):not(.dropdown-item):not(.tag),.hero.is-dark strong{color:inherit}.hero.is-dark .title{color:#f5f5f5}.hero.is-dark .subtitle{color:rgba(245,245,245,.9)}.hero.is-dark .subtitle a:not(.button),.hero.is-dark .subtitle strong{color:#f5f5f5}@media screen and (max-width:1087px){.hero.is-dark .navbar-menu{background-color:#363636}}.hero.is-dark .navbar-item,.hero.is-dark .navbar-link{color:rgba(245,245,245,.7)}.hero.is-dark .navbar-link.is-active,.hero.is-dark .navbar-link:hover,.hero.is-dark a.navbar-item.is-active,.hero.is-dark a.navbar-item:hover{background-color:#292929;color:#f5f5f5}.hero.is-dark .tabs a{color:#f5f5f5;opacity:.9}.hero.is-dark .tabs a:hover{opacity:1}.hero.is-dark .tabs li.is-active a{opacity:1}.hero.is-dark .tabs.is-boxed a,.hero.is-dark .tabs.is-toggle a{color:#f5f5f5}.hero.is-dark .tabs.is-boxed a:hover,.hero.is-dark .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-dark .tabs.is-boxed li.is-active a,.hero.is-dark .tabs.is-boxed li.is-active a:hover,.hero.is-dark .tabs.is-toggle li.is-active a,.hero.is-dark .tabs.is-toggle li.is-active a:hover{background-color:#f5f5f5;border-color:#f5f5f5;color:#363636}.hero.is-dark.is-bold{background-image:linear-gradient(141deg,#1f191a 0,#363636 71%,#46403f 100%)}@media screen and (max-width:768px){.hero.is-dark.is-bold .navbar-menu{background-image:linear-gradient(141deg,#1f191a 0,#363636 71%,#46403f 100%)}}.hero.is-primary{background-color:#00d1b2;color:#fff}.hero.is-primary a:not(.button):not(.dropdown-item):not(.tag),.hero.is-primary strong{color:inherit}.hero.is-primary .title{color:#fff}.hero.is-primary .subtitle{color:rgba(255,255,255,.9)}.hero.is-primary .subtitle a:not(.button),.hero.is-primary .subtitle strong{color:#fff}@media screen and (max-width:1087px){.hero.is-primary .navbar-menu{background-color:#00d1b2}}.hero.is-primary .navbar-item,.hero.is-primary .navbar-link{color:rgba(255,255,255,.7)}.hero.is-primary .navbar-link.is-active,.hero.is-primary .navbar-link:hover,.hero.is-primary a.navbar-item.is-active,.hero.is-primary a.navbar-item:hover{background-color:#00b89c;color:#fff}.hero.is-primary .tabs a{color:#fff;opacity:.9}.hero.is-primary .tabs a:hover{opacity:1}.hero.is-primary .tabs li.is-active a{opacity:1}.hero.is-primary .tabs.is-boxed a,.hero.is-primary .tabs.is-toggle a{color:#fff}.hero.is-primary .tabs.is-boxed a:hover,.hero.is-primary .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-primary .tabs.is-boxed li.is-active a,.hero.is-primary .tabs.is-boxed li.is-active a:hover,.hero.is-primary .tabs.is-toggle li.is-active a,.hero.is-primary .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#00d1b2}.hero.is-primary.is-bold{background-image:linear-gradient(141deg,#009e6c 0,#00d1b2 71%,#00e7eb 100%)}@media screen and (max-width:768px){.hero.is-primary.is-bold .navbar-menu{background-image:linear-gradient(141deg,#009e6c 0,#00d1b2 71%,#00e7eb 100%)}}.hero.is-link{background-color:#3273dc;color:#fff}.hero.is-link a:not(.button):not(.dropdown-item):not(.tag),.hero.is-link strong{color:inherit}.hero.is-link .title{color:#fff}.hero.is-link .subtitle{color:rgba(255,255,255,.9)}.hero.is-link .subtitle a:not(.button),.hero.is-link .subtitle strong{color:#fff}@media screen and (max-width:1087px){.hero.is-link .navbar-menu{background-color:#3273dc}}.hero.is-link .navbar-item,.hero.is-link .navbar-link{color:rgba(255,255,255,.7)}.hero.is-link .navbar-link.is-active,.hero.is-link .navbar-link:hover,.hero.is-link a.navbar-item.is-active,.hero.is-link a.navbar-item:hover{background-color:#2366d1;color:#fff}.hero.is-link .tabs a{color:#fff;opacity:.9}.hero.is-link .tabs a:hover{opacity:1}.hero.is-link .tabs li.is-active a{opacity:1}.hero.is-link .tabs.is-boxed a,.hero.is-link .tabs.is-toggle a{color:#fff}.hero.is-link .tabs.is-boxed a:hover,.hero.is-link .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-link .tabs.is-boxed li.is-active a,.hero.is-link .tabs.is-boxed li.is-active a:hover,.hero.is-link .tabs.is-toggle li.is-active a,.hero.is-link .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#3273dc}.hero.is-link.is-bold{background-image:linear-gradient(141deg,#1577c6 0,#3273dc 71%,#4366e5 100%)}@media screen and (max-width:768px){.hero.is-link.is-bold .navbar-menu{background-image:linear-gradient(141deg,#1577c6 0,#3273dc 71%,#4366e5 100%)}}.hero.is-info{background-color:#209cee;color:#fff}.hero.is-info a:not(.button):not(.dropdown-item):not(.tag),.hero.is-info strong{color:inherit}.hero.is-info .title{color:#fff}.hero.is-info .subtitle{color:rgba(255,255,255,.9)}.hero.is-info .subtitle a:not(.button),.hero.is-info .subtitle strong{color:#fff}@media screen and (max-width:1087px){.hero.is-info .navbar-menu{background-color:#209cee}}.hero.is-info .navbar-item,.hero.is-info .navbar-link{color:rgba(255,255,255,.7)}.hero.is-info .navbar-link.is-active,.hero.is-info .navbar-link:hover,.hero.is-info a.navbar-item.is-active,.hero.is-info a.navbar-item:hover{background-color:#118fe4;color:#fff}.hero.is-info .tabs a{color:#fff;opacity:.9}.hero.is-info .tabs a:hover{opacity:1}.hero.is-info .tabs li.is-active a{opacity:1}.hero.is-info .tabs.is-boxed a,.hero.is-info .tabs.is-toggle a{color:#fff}.hero.is-info .tabs.is-boxed a:hover,.hero.is-info .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-info .tabs.is-boxed li.is-active a,.hero.is-info .tabs.is-boxed li.is-active a:hover,.hero.is-info .tabs.is-toggle li.is-active a,.hero.is-info .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#209cee}.hero.is-info.is-bold{background-image:linear-gradient(141deg,#04a6d7 0,#209cee 71%,#3287f5 100%)}@media screen and (max-width:768px){.hero.is-info.is-bold .navbar-menu{background-image:linear-gradient(141deg,#04a6d7 0,#209cee 71%,#3287f5 100%)}}.hero.is-success{background-color:#23d160;color:#fff}.hero.is-success a:not(.button):not(.dropdown-item):not(.tag),.hero.is-success strong{color:inherit}.hero.is-success .title{color:#fff}.hero.is-success .subtitle{color:rgba(255,255,255,.9)}.hero.is-success .subtitle a:not(.button),.hero.is-success .subtitle strong{color:#fff}@media screen and (max-width:1087px){.hero.is-success .navbar-menu{background-color:#23d160}}.hero.is-success .navbar-item,.hero.is-success .navbar-link{color:rgba(255,255,255,.7)}.hero.is-success .navbar-link.is-active,.hero.is-success .navbar-link:hover,.hero.is-success a.navbar-item.is-active,.hero.is-success a.navbar-item:hover{background-color:#20bc56;color:#fff}.hero.is-success .tabs a{color:#fff;opacity:.9}.hero.is-success .tabs a:hover{opacity:1}.hero.is-success .tabs li.is-active a{opacity:1}.hero.is-success .tabs.is-boxed a,.hero.is-success .tabs.is-toggle a{color:#fff}.hero.is-success .tabs.is-boxed a:hover,.hero.is-success .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-success .tabs.is-boxed li.is-active a,.hero.is-success .tabs.is-boxed li.is-active a:hover,.hero.is-success .tabs.is-toggle li.is-active a,.hero.is-success .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#23d160}.hero.is-success.is-bold{background-image:linear-gradient(141deg,#12af2f 0,#23d160 71%,#2ce28a 100%)}@media screen and (max-width:768px){.hero.is-success.is-bold .navbar-menu{background-image:linear-gradient(141deg,#12af2f 0,#23d160 71%,#2ce28a 100%)}}.hero.is-warning{background-color:#ffdd57;color:rgba(0,0,0,.7)}.hero.is-warning a:not(.button):not(.dropdown-item):not(.tag),.hero.is-warning strong{color:inherit}.hero.is-warning .title{color:rgba(0,0,0,.7)}.hero.is-warning .subtitle{color:rgba(0,0,0,.9)}.hero.is-warning .subtitle a:not(.button),.hero.is-warning .subtitle strong{color:rgba(0,0,0,.7)}@media screen and (max-width:1087px){.hero.is-warning .navbar-menu{background-color:#ffdd57}}.hero.is-warning .navbar-item,.hero.is-warning .navbar-link{color:rgba(0,0,0,.7)}.hero.is-warning .navbar-link.is-active,.hero.is-warning .navbar-link:hover,.hero.is-warning a.navbar-item.is-active,.hero.is-warning a.navbar-item:hover{background-color:#ffd83d;color:rgba(0,0,0,.7)}.hero.is-warning .tabs a{color:rgba(0,0,0,.7);opacity:.9}.hero.is-warning .tabs a:hover{opacity:1}.hero.is-warning .tabs li.is-active a{opacity:1}.hero.is-warning .tabs.is-boxed a,.hero.is-warning .tabs.is-toggle a{color:rgba(0,0,0,.7)}.hero.is-warning .tabs.is-boxed a:hover,.hero.is-warning .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-warning .tabs.is-boxed li.is-active a,.hero.is-warning .tabs.is-boxed li.is-active a:hover,.hero.is-warning .tabs.is-toggle li.is-active a,.hero.is-warning .tabs.is-toggle li.is-active a:hover{background-color:rgba(0,0,0,.7);border-color:rgba(0,0,0,.7);color:#ffdd57}.hero.is-warning.is-bold{background-image:linear-gradient(141deg,#ffaf24 0,#ffdd57 71%,#fffa70 100%)}@media screen and (max-width:768px){.hero.is-warning.is-bold .navbar-menu{background-image:linear-gradient(141deg,#ffaf24 0,#ffdd57 71%,#fffa70 100%)}}.hero.is-danger{background-color:#ff3860;color:#fff}.hero.is-danger a:not(.button):not(.dropdown-item):not(.tag),.hero.is-danger strong{color:inherit}.hero.is-danger .title{color:#fff}.hero.is-danger .subtitle{color:rgba(255,255,255,.9)}.hero.is-danger .subtitle a:not(.button),.hero.is-danger .subtitle strong{color:#fff}@media screen and (max-width:1087px){.hero.is-danger .navbar-menu{background-color:#ff3860}}.hero.is-danger .navbar-item,.hero.is-danger .navbar-link{color:rgba(255,255,255,.7)}.hero.is-danger .navbar-link.is-active,.hero.is-danger .navbar-link:hover,.hero.is-danger a.navbar-item.is-active,.hero.is-danger a.navbar-item:hover{background-color:#ff1f4b;color:#fff}.hero.is-danger .tabs a{color:#fff;opacity:.9}.hero.is-danger .tabs a:hover{opacity:1}.hero.is-danger .tabs li.is-active a{opacity:1}.hero.is-danger .tabs.is-boxed a,.hero.is-danger .tabs.is-toggle a{color:#fff}.hero.is-danger .tabs.is-boxed a:hover,.hero.is-danger .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-danger .tabs.is-boxed li.is-active a,.hero.is-danger .tabs.is-boxed li.is-active a:hover,.hero.is-danger .tabs.is-toggle li.is-active a,.hero.is-danger .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#ff3860}.hero.is-danger.is-bold{background-image:linear-gradient(141deg,#ff0561 0,#ff3860 71%,#ff5257 100%)}@media screen and (max-width:768px){.hero.is-danger.is-bold .navbar-menu{background-image:linear-gradient(141deg,#ff0561 0,#ff3860 71%,#ff5257 100%)}}.hero.is-small .hero-body{padding-bottom:1.5rem;padding-top:1.5rem}@media screen and (min-width:769px),print{.hero.is-medium .hero-body{padding-bottom:9rem;padding-top:9rem}}@media screen and (min-width:769px),print{.hero.is-large .hero-body{padding-bottom:18rem;padding-top:18rem}}.hero.is-fullheight .hero-body,.hero.is-halfheight .hero-body{align-items:center;display:flex}.hero.is-fullheight .hero-body>.container,.hero.is-halfheight .hero-body>.container{flex-grow:1;flex-shrink:1}.hero.is-halfheight{min-height:50vh}.hero.is-fullheight{min-height:100vh}.hero-video{overflow:hidden}.hero-video video{left:50%;min-height:100%;min-width:100%;position:absolute;top:50%;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0)}.hero-video.is-transparent{opacity:.3}@media screen and (max-width:768px){.hero-video{display:none}}.hero-buttons{margin-top:1.5rem}@media screen and (max-width:768px){.hero-buttons .button{display:flex}.hero-buttons .button:not(:last-child){margin-bottom:.75rem}}@media screen and (min-width:769px),print{.hero-buttons{display:flex;justify-content:center}.hero-buttons .button:not(:last-child){margin-right:1.5rem}}.hero-foot,.hero-head{flex-grow:0;flex-shrink:0}.hero-body{flex-grow:1;flex-shrink:0;padding:3rem 1.5rem}.section{padding:3rem 1.5rem}@media screen and (min-width:1088px){.section.is-medium{padding:9rem 1.5rem}.section.is-large{padding:18rem 1.5rem}}.footer{background-color:#fafafa;padding:3rem 1.5rem 6rem}", ""]);
	
	// exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(6);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/_css-loader@0.25.0@css-loader/index.js?root=.!./worldwar.css", function() {
				var newContent = require("!!../../../node_modules/_css-loader@0.25.0@css-loader/index.js?root=.!./worldwar.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, "#data-table,\r\n#data-table th,\r\n#data-table td {\r\n    border: 1px solid black\r\n}", ""]);
	
	// exports


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(8)(__webpack_require__(9))

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	module.exports = function(src) {
		function log(error) {
			(typeof console !== "undefined")
			&& (console.error || console.log)("[Script Loader]", error);
		}
	
		// Check for IE =< 8
		function isIE() {
			return typeof attachEvent !== "undefined" && typeof addEventListener === "undefined";
		}
	
		try {
			if (typeof execScript !== "undefined" && isIE()) {
				execScript(src);
			} else if (typeof eval !== "undefined") {
				eval.call(null, src);
			} else {
				log("EvalError: No eval function available");
			}
		} catch (error) {
			log(error);
		}
	}


/***/ }),
/* 9 */
/***/ (function(module, exports) {

	module.exports = "/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */\r\n!function(e,t){\"use strict\";\"object\"==typeof module&&\"object\"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error(\"jQuery requires a window with a document\");return t(e)}:t(e)}(\"undefined\"!=typeof window?window:this,function(e,t){\"use strict\";var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,s=n.push,u=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},g=function e(t){return\"function\"==typeof t&&\"number\"!=typeof t.nodeType},y=function e(t){return null!=t&&t===t.window},v={type:!0,src:!0,noModule:!0};function m(e,t,n){var i,o=(t=t||r).createElement(\"script\");if(o.text=e,n)for(i in v)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+\"\":\"object\"==typeof e||\"function\"==typeof e?l[c.call(e)]||\"object\":typeof e}var b=\"3.3.1\",w=function(e,t){return new w.fn.init(e,t)},T=/^[\\s\\uFEFF\\xA0]+|[\\s\\uFEFF\\xA0]+$/g;w.fn=w.prototype={jquery:\"3.3.1\",constructor:w,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for(\"boolean\"==typeof a&&(l=a,a=arguments[s]||{},s++),\"object\"==typeof a||g(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&w.isPlainObject(n)?n:{},a[t]=w.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},w.extend({expando:\"jQuery\"+(\"3.3.1\"+Math.random()).replace(/\\D/g,\"\"),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||\"[object Object]\"!==c.call(e))&&(!(t=i(e))||\"function\"==typeof(n=f.call(t,\"constructor\")&&t.constructor)&&p.call(n)===d)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){m(e)},each:function(e,t){var n,r=0;if(C(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?\"\":(e+\"\").replace(T,\"\")},makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?w.merge(n,\"string\"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)(r=!t(e[o],o))!==s&&i.push(e[o]);return i},map:function(e,t,n){var r,i,o=0,s=[];if(C(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);return a.apply([],s)},guid:1,support:h}),\"function\"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each(\"Boolean Number String Function Array Date RegExp Object Error Symbol\".split(\" \"),function(e,t){l[\"[object \"+t+\"]\"]=t.toLowerCase()});function C(e){var t=!!e&&\"length\"in e&&e.length,n=x(e);return!g(e)&&!y(e)&&(\"array\"===n||0===t||\"number\"==typeof t&&t>0&&t-1 in e)}var E=function(e){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,y,v,m,x,b=\"sizzle\"+1*new Date,w=e.document,T=0,C=0,E=ae(),k=ae(),S=ae(),D=function(e,t){return e===t&&(f=!0),0},N={}.hasOwnProperty,A=[],j=A.pop,q=A.push,L=A.push,H=A.slice,O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P=\"checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped\",M=\"[\\\\x20\\\\t\\\\r\\\\n\\\\f]\",R=\"(?:\\\\\\\\.|[\\\\w-]|[^\\0-\\\\xa0])+\",I=\"\\\\[\"+M+\"*(\"+R+\")(?:\"+M+\"*([*^$|!~]?=)\"+M+\"*(?:'((?:\\\\\\\\.|[^\\\\\\\\'])*)'|\\\"((?:\\\\\\\\.|[^\\\\\\\\\\\"])*)\\\"|(\"+R+\"))|)\"+M+\"*\\\\]\",W=\":(\"+R+\")(?:\\\\((('((?:\\\\\\\\.|[^\\\\\\\\'])*)'|\\\"((?:\\\\\\\\.|[^\\\\\\\\\\\"])*)\\\")|((?:\\\\\\\\.|[^\\\\\\\\()[\\\\]]|\"+I+\")*)|.*)\\\\)|)\",$=new RegExp(M+\"+\",\"g\"),B=new RegExp(\"^\"+M+\"+|((?:^|[^\\\\\\\\])(?:\\\\\\\\.)*)\"+M+\"+$\",\"g\"),F=new RegExp(\"^\"+M+\"*,\"+M+\"*\"),_=new RegExp(\"^\"+M+\"*([>+~]|\"+M+\")\"+M+\"*\"),z=new RegExp(\"=\"+M+\"*([^\\\\]'\\\"]*?)\"+M+\"*\\\\]\",\"g\"),X=new RegExp(W),U=new RegExp(\"^\"+R+\"$\"),V={ID:new RegExp(\"^#(\"+R+\")\"),CLASS:new RegExp(\"^\\\\.(\"+R+\")\"),TAG:new RegExp(\"^(\"+R+\"|[*])\"),ATTR:new RegExp(\"^\"+I),PSEUDO:new RegExp(\"^\"+W),CHILD:new RegExp(\"^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\\\(\"+M+\"*(even|odd|(([+-]|)(\\\\d*)n|)\"+M+\"*(?:([+-]|)\"+M+\"*(\\\\d+)|))\"+M+\"*\\\\)|)\",\"i\"),bool:new RegExp(\"^(?:\"+P+\")$\",\"i\"),needsContext:new RegExp(\"^\"+M+\"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\\\(\"+M+\"*((?:-\\\\d)?\\\\d*)\"+M+\"*\\\\)|)(?=[^-]|$)\",\"i\")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\\d$/i,Q=/^[^{]+\\{\\s*\\[native \\w/,J=/^(?:#([\\w-]+)|(\\w+)|\\.([\\w-]+))$/,K=/[+~]/,Z=new RegExp(\"\\\\\\\\([\\\\da-f]{1,6}\"+M+\"?|(\"+M+\")|.)\",\"ig\"),ee=function(e,t,n){var r=\"0x\"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\\0-\\x1f\\x7f]|^-?\\d)|^-$|[^\\0-\\x1f\\x7f-\\uFFFF\\w-]/g,ne=function(e,t){return t?\"\\0\"===e?\"\\ufffd\":e.slice(0,-1)+\"\\\\\"+e.charCodeAt(e.length-1).toString(16)+\" \":\"\\\\\"+e},re=function(){p()},ie=me(function(e){return!0===e.disabled&&(\"form\"in e||\"label\"in e)},{dir:\"parentNode\",next:\"legend\"});try{L.apply(A=H.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){L={apply:A.length?function(e,t){q.apply(e,H.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function oe(e,t,r,i){var o,s,l,c,f,h,v,m=t&&t.ownerDocument,T=t?t.nodeType:9;if(r=r||[],\"string\"!=typeof e||!e||1!==T&&9!==T&&11!==T)return r;if(!i&&((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,g)){if(11!==T&&(f=J.exec(e)))if(o=f[1]){if(9===T){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return L.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!S[e+\" \"]&&(!y||!y.test(e))){if(1!==T)m=t,v=e;else if(\"object\"!==t.nodeName.toLowerCase()){(c=t.getAttribute(\"id\"))?c=c.replace(te,ne):t.setAttribute(\"id\",c=b),s=(h=a(e)).length;while(s--)h[s]=\"#\"+c+\" \"+ve(h[s]);v=h.join(\",\"),m=K.test(e)&&ge(t.parentNode)||t}if(v)try{return L.apply(r,m.querySelectorAll(v)),r}catch(e){}finally{c===b&&t.removeAttribute(\"id\")}}}return u(e.replace(B,\"$1\"),t,r,i)}function ae(){var e=[];function t(n,i){return e.push(n+\" \")>r.cacheLength&&delete t[e.shift()],t[n+\" \"]=i}return t}function se(e){return e[b]=!0,e}function ue(e){var t=d.createElement(\"fieldset\");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){var n=e.split(\"|\"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return\"input\"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return(\"input\"===n||\"button\"===n)&&t.type===e}}function de(e){return function(t){return\"form\"in t?t.parentNode&&!1===t.disabled?\"label\"in t?\"label\"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:\"label\"in t&&t.disabled===e}}function he(e){return se(function(t){return t=+t,se(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&\"undefined\"!=typeof e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&\"HTML\"!==t.nodeName},p=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==d&&9===a.nodeType&&a.documentElement?(d=a,h=d.documentElement,g=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener(\"unload\",re,!1):i.attachEvent&&i.attachEvent(\"onunload\",re)),n.attributes=ue(function(e){return e.className=\"i\",!e.getAttribute(\"className\")}),n.getElementsByTagName=ue(function(e){return e.appendChild(d.createComment(\"\")),!e.getElementsByTagName(\"*\").length}),n.getElementsByClassName=Q.test(d.getElementsByClassName),n.getById=ue(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute(\"id\")===t}},r.find.ID=function(e,t){if(\"undefined\"!=typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n=\"undefined\"!=typeof e.getAttributeNode&&e.getAttributeNode(\"id\");return n&&n.value===t}},r.find.ID=function(e,t){if(\"undefined\"!=typeof t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode(\"id\"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode(\"id\"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return\"undefined\"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if(\"*\"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if(\"undefined\"!=typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],y=[],(n.qsa=Q.test(d.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML=\"<a id='\"+b+\"'></a><select id='\"+b+\"-\\r\\\\' msallowcapture=''><option selected=''></option></select>\",e.querySelectorAll(\"[msallowcapture^='']\").length&&y.push(\"[*^$]=\"+M+\"*(?:''|\\\"\\\")\"),e.querySelectorAll(\"[selected]\").length||y.push(\"\\\\[\"+M+\"*(?:value|\"+P+\")\"),e.querySelectorAll(\"[id~=\"+b+\"-]\").length||y.push(\"~=\"),e.querySelectorAll(\":checked\").length||y.push(\":checked\"),e.querySelectorAll(\"a#\"+b+\"+*\").length||y.push(\".#.+[+~]\")}),ue(function(e){e.innerHTML=\"<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>\";var t=d.createElement(\"input\");t.setAttribute(\"type\",\"hidden\"),e.appendChild(t).setAttribute(\"name\",\"D\"),e.querySelectorAll(\"[name=d]\").length&&y.push(\"name\"+M+\"*[*^$|!~]?=\"),2!==e.querySelectorAll(\":enabled\").length&&y.push(\":enabled\",\":disabled\"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(\":disabled\").length&&y.push(\":enabled\",\":disabled\"),e.querySelectorAll(\"*,:x\"),y.push(\",.*:\")})),(n.matchesSelector=Q.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=m.call(e,\"*\"),m.call(e,\"[s!='']:x\"),v.push(\"!=\",W)}),y=y.length&&new RegExp(y.join(\"|\")),v=v.length&&new RegExp(v.join(\"|\")),t=Q.test(h.compareDocumentPosition),x=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===d||e.ownerDocument===w&&x(w,e)?-1:t===d||t.ownerDocument===w&&x(w,t)?1:c?O(c,e)-O(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===d?-1:t===d?1:i?-1:o?1:c?O(c,e)-O(c,t):0;if(i===o)return ce(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?ce(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(z,\"='$1']\"),n.matchesSelector&&g&&!S[t+\" \"]&&(!v||!v.test(t))&&(!y||!y.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&N.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+\"\").replace(te,ne)},oe.error=function(e){throw new Error(\"Syntax error, unrecognized expression: \"+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(D),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n=\"\",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if(\"string\"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:se,match:V,attrHandle:{},find:{},relative:{\">\":{dir:\"parentNode\",first:!0},\" \":{dir:\"parentNode\"},\"+\":{dir:\"previousSibling\",first:!0},\"~\":{dir:\"previousSibling\"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||\"\").replace(Z,ee),\"~=\"===e[2]&&(e[3]=\" \"+e[3]+\" \"),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),\"nth\"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*(\"even\"===e[3]||\"odd\"===e[3])),e[5]=+(e[7]+e[8]||\"odd\"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||\"\":n&&X.test(n)&&(t=a(n,!0))&&(t=n.indexOf(\")\",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return\"*\"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+\" \"];return t||(t=new RegExp(\"(^|\"+M+\")\"+e+\"(\"+M+\"|$)\"))&&E(e,function(e){return t.test(\"string\"==typeof e.className&&e.className||\"undefined\"!=typeof e.getAttribute&&e.getAttribute(\"class\")||\"\")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?\"!=\"===t:!t||(i+=\"\",\"=\"===t?i===n:\"!=\"===t?i!==n:\"^=\"===t?n&&0===i.indexOf(n):\"*=\"===t?n&&i.indexOf(n)>-1:\"$=\"===t?n&&i.slice(-n.length)===n:\"~=\"===t?(\" \"+i.replace($,\" \")+\" \").indexOf(n)>-1:\"|=\"===t&&(i===n||i.slice(0,n.length+1)===n+\"-\"))}},CHILD:function(e,t,n,r,i){var o=\"nth\"!==e.slice(0,3),a=\"last\"!==e.slice(-4),s=\"of-type\"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?\"nextSibling\":\"previousSibling\",y=t.parentNode,v=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(y){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=g=\"only\"===e&&!h&&\"nextSibling\"}return!0}if(h=[a?y.firstChild:y.lastChild],a&&m){x=(d=(l=(c=(f=(p=y)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&y.childNodes[d];while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if(1===p.nodeType&&++x&&p===t){c[e]=[T,d,x];break}}else if(m&&(x=d=(l=(c=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===v:1===p.nodeType)&&++x&&(m&&((c=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,x]),p===t))break;return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error(\"unsupported pseudo: \"+e);return i[b]?i(t):i.length>1?(n=[e,e,\"\",t],r.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){var r,o=i(e,t),a=o.length;while(a--)e[r=O(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:se(function(e){var t=[],n=[],r=s(e.replace(B,\"$1\"));return r[b]?se(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return U.test(e||\"\")||oe.error(\"unsupported lang: \"+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute(\"xml:lang\")||t.getAttribute(\"lang\"))return(n=n.toLowerCase())===e||0===n.indexOf(e+\"-\")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return\"input\"===t&&!!e.checked||\"option\"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return\"input\"===t&&\"button\"===e.type||\"button\"===t},text:function(e){var t;return\"input\"===e.nodeName.toLowerCase()&&\"text\"===e.type&&(null==(t=e.getAttribute(\"type\"))||\"text\"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ye(){}ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,a=oe.tokenize=function(e,t){var n,i,o,a,s,u,l,c=k[e+\" \"];if(c)return t?0:c.slice(0);s=e,u=[],l=r.preFilter;while(s){n&&!(i=F.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=_.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B,\" \")}),s=s.slice(n.length));for(a in r.filter)!(i=V[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):k(e,u).slice(0)};function ve(e){for(var t=0,n=e.length,r=\"\";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&\"parentNode\"===o,s=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[T,s];if(u){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,u))return!0}else while(t=t[r])if(1===t.nodeType||a)if(f=t[b]||(t[b]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===T&&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function xe(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}function we(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Te(e,t,n,r,i,o){return r&&!r[b]&&(r=Te(r)),i&&!i[b]&&(i=Te(i,o)),se(function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||be(t||\"*\",s.nodeType?[s]:s,[]),y=!e||!o&&t?g:we(g,p,e,s,u),v=n?i||(o?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r){l=we(v,d),r(l,[],s,u),c=l.length;while(c--)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f))}if(o){if(i||e){if(i){l=[],c=v.length;while(c--)(f=v[c])&&l.push(y[c]=f);i(null,v=[],l,u)}c=v.length;while(c--)(f=v[c])&&(l=i?O(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else v=we(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):L.apply(a,v)})}function Ce(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[\" \"],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return O(t,e)>-1},s,!0),p=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[me(xe(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o;i++)if(r.relative[e[i].type])break;return Te(u>1&&xe(p),u>1&&ve(e.slice(0,u-1).concat({value:\" \"===e[u-2].type?\"*\":\"\"})).replace(B,\"$1\"),n,u<i&&Ce(e.slice(u,i)),i<o&&Ce(e=e.slice(i)),i<o&&ve(e))}p.push(n)}return xe(p)}function Ee(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,y,v=0,m=\"0\",x=o&&[],b=[],w=l,C=o||i&&r.find.TAG(\"*\",c),E=T+=null==w?1:Math.random()||.1,k=C.length;for(c&&(l=a===d||a||c);m!==k&&null!=(f=C[m]);m++){if(i&&f){h=0,a||f.ownerDocument===d||(p(f),s=!g);while(y=e[h++])if(y(f,a||d,s)){u.push(f);break}c&&(T=E)}n&&((f=!y&&f)&&v--,o&&x.push(f))}if(v+=m,n&&m!==v){h=0;while(y=t[h++])y(x,b,a,s);if(o){if(v>0)while(m--)x[m]||b[m]||(b[m]=j.call(u));b=we(b)}L.apply(u,b),c&&!o&&b.length>0&&v+t.length>1&&oe.uniqueSort(u)}return c&&(T=E,l=w),x};return n?se(o):o}return s=oe.compile=function(e,t){var n,r=[],i=[],o=S[e+\" \"];if(!o){t||(t=a(e)),n=t.length;while(n--)(o=Ce(t[n]))[b]?r.push(o):i.push(o);(o=S(e,Ee(i,r))).selector=e}return o},u=oe.select=function(e,t,n,i){var o,u,l,c,f,p=\"function\"==typeof e&&e,d=!i&&a(e=p.selector||e);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&\"ID\"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}o=V.needsContext.test(e)?0:u.length;while(o--){if(l=u[o],r.relative[c=l.type])break;if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee),K.test(u[0].type)&&ge(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&ve(u)))return L.apply(n,i),n;break}}}return(p||s(e,d))(i,t,!g,n,!t||K.test(e)&&ge(t.parentNode)||t),n},n.sortStable=b.split(\"\").sort(D).join(\"\")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(d.createElement(\"fieldset\"))}),ue(function(e){return e.innerHTML=\"<a href='#'></a>\",\"#\"===e.firstChild.getAttribute(\"href\")})||le(\"type|href|height|width\",function(e,t,n){if(!n)return e.getAttribute(t,\"type\"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML=\"<input/>\",e.firstChild.setAttribute(\"value\",\"\"),\"\"===e.firstChild.getAttribute(\"value\")})||le(\"value\",function(e,t,n){if(!n&&\"input\"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute(\"disabled\")})||le(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);w.find=E,w.expr=E.selectors,w.expr[\":\"]=w.expr.pseudos,w.uniqueSort=w.unique=E.uniqueSort,w.text=E.getText,w.isXMLDoc=E.isXML,w.contains=E.contains,w.escapeSelector=E.escape;var k=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=w.expr.match.needsContext;function N(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var A=/^<([a-z][^\\/\\0>:\\x20\\t\\r\\n\\f]*)[\\x20\\t\\r\\n\\f]*\\/?>(?:<\\/\\1>|)$/i;function j(e,t,n){return g(t)?w.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?w.grep(e,function(e){return e===t!==n}):\"string\"!=typeof t?w.grep(e,function(e){return u.call(t,e)>-1!==n}):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return n&&(e=\":not(\"+e+\")\"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if(\"string\"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return r>1?w.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,\"string\"==typeof e&&D.test(e)?w(e):e||[],!1).length}});var q,L=/^(?:\\s*(<[\\w\\W]+>)[^>]*|#([\\w-]+))$/;(w.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||q,\"string\"==typeof e){if(!(i=\"<\"===e[0]&&\">\"===e[e.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),A.test(i[1])&&w.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,q=w(r);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a=\"string\"!=typeof e&&w(e);if(!D.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?w.uniqueSort(o):o)},index:function(e){return e?\"string\"==typeof e?u.call(w(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return k(e,\"parentNode\")},parentsUntil:function(e,t,n){return k(e,\"parentNode\",n)},next:function(e){return P(e,\"nextSibling\")},prev:function(e){return P(e,\"previousSibling\")},nextAll:function(e){return k(e,\"nextSibling\")},prevAll:function(e){return k(e,\"previousSibling\")},nextUntil:function(e,t,n){return k(e,\"nextSibling\",n)},prevUntil:function(e,t,n){return k(e,\"previousSibling\",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return N(e,\"iframe\")?e.contentDocument:(N(e,\"template\")&&(e=e.content||e),w.merge([],e.childNodes))}},function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);return\"Until\"!==e.slice(-5)&&(r=n),r&&\"string\"==typeof r&&(i=w.filter(r,i)),this.length>1&&(O[e]||w.uniqueSort(i),H.test(e)&&i.reverse()),this.pushStack(i)}});var M=/[^\\x20\\t\\r\\n\\f]+/g;function R(e){var t={};return w.each(e.match(M)||[],function(e,n){t[n]=!0}),t}w.Callbacks=function(e){e=\"string\"==typeof e?R(e):w.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||e.once,r=t=!0;a.length;s=-1){n=a.shift();while(++s<o.length)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1)}e.memory||(n=!1),t=!1,i&&(o=n?[]:\"\")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){w.each(n,function(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&\"string\"!==x(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return w.each(arguments,function(e,t){var n;while((n=w.inArray(t,o,n))>-1)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?w.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n=\"\",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=\"\"),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l};function I(e){return e}function W(e){throw e}function $(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}w.extend({Deferred:function(t){var n=[[\"notify\",\"progress\",w.Callbacks(\"memory\"),w.Callbacks(\"memory\"),2],[\"resolve\",\"done\",w.Callbacks(\"once memory\"),w.Callbacks(\"once memory\"),0,\"resolved\"],[\"reject\",\"fail\",w.Callbacks(\"once memory\"),w.Callbacks(\"once memory\"),1,\"rejected\"]],r=\"pending\",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},\"catch\":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return w.Deferred(function(t){w.each(n,function(n,r){var i=g(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+\"With\"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw new TypeError(\"Thenable self-resolution\");l=e&&(\"object\"==typeof e||\"function\"==typeof e)&&e.then,g(l)?i?l.call(e,a(o,n,I,i),a(o,n,W,i)):(o++,l.call(e,a(o,n,I,i),a(o,n,W,i),a(o,n,I,n.notifyWith))):(r!==I&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==W&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(w.Deferred.getStackHook&&(c.stackTrace=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.Deferred(function(e){n[0][3].add(a(0,e,g(i)?i:I,e.notifyWith)),n[1][3].add(a(0,e,g(t)?t:I)),n[2][3].add(a(0,e,g(r)?r:W))}).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},o={};return w.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+\"With\"](this===o?void 0:this,arguments),this},o[t[0]+\"With\"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=w.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};if(t<=1&&($(e,a.done(s(n)).resolve,a.reject,!t),\"pending\"===a.state()||g(i[n]&&i[n].then)))return a.then();while(n--)$(i[n],s(n),a.reject);return a.promise()}});var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&B.test(t.name)&&e.console.warn(\"jQuery.Deferred exception: \"+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout(function(){throw t})};var F=w.Deferred();w.fn.ready=function(e){return F.then(e)[\"catch\"](function(e){w.readyException(e)}),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==e&&--w.readyWait>0||F.resolveWith(r,[w]))}}),w.ready.then=F.then;function _(){r.removeEventListener(\"DOMContentLoaded\",_),e.removeEventListener(\"load\",_),w.ready()}\"complete\"===r.readyState||\"loading\"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(w.ready):(r.addEventListener(\"DOMContentLoaded\",_),e.addEventListener(\"load\",_));var z=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if(\"object\"===x(n)){i=!0;for(s in n)z(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(w(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},X=/^-ms-/,U=/-([a-z])/g;function V(e,t){return t.toUpperCase()}function G(e){return e.replace(X,\"ms-\").replace(U,V)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Q(){this.expando=w.expando+Q.uid++}Q.uid=1,Q.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if(\"string\"==typeof t)i[G(t)]=n;else for(r in t)i[G(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][G(t)]},access:function(e,t,n){return void 0===t||t&&\"string\"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(G):(t=G(t))in r?[t]:t.match(M)||[]).length;while(n--)delete r[t[n]]}(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var J=new Q,K=new Q,Z=/^(?:\\{[\\w\\W]*\\}|\\[[\\w\\W]*\\])$/,ee=/[A-Z]/g;function te(e){return\"true\"===e||\"false\"!==e&&(\"null\"===e?null:e===+e+\"\"?+e:Z.test(e)?JSON.parse(e):e)}function ne(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r=\"data-\"+t.replace(ee,\"-$&\").toLowerCase(),\"string\"==typeof(n=e.getAttribute(r))){try{n=te(n)}catch(e){}K.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return K.hasData(e)||J.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=K.get(o),1===o.nodeType&&!J.get(o,\"hasDataAttrs\"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf(\"data-\")&&(r=G(r.slice(5)),ne(o,r,i[r]));J.set(o,\"hasDataAttrs\",!0)}return i}return\"object\"==typeof e?this.each(function(){K.set(this,e)}):z(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=K.get(o,e)))return n;if(void 0!==(n=ne(o,e)))return n}else this.each(function(){K.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){K.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||\"fx\")+\"queue\",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||\"fx\";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t),a=function(){w.dequeue(e,t)};\"inprogress\"===i&&(i=n.shift(),r--),i&&(\"fx\"===t&&n.unshift(\"inprogress\"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+\"queueHooks\";return J.get(e,n)||J.access(e,n,{empty:w.Callbacks(\"once memory\").add(function(){J.remove(e,[t+\"queue\",n])})})}}),w.fn.extend({queue:function(e,t){var n=2;return\"string\"!=typeof e&&(t=e,e=\"fx\",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each(function(){var n=w.queue(this,e,t);w._queueHooks(this,e),\"fx\"===e&&\"inprogress\"!==n[0]&&w.dequeue(this,e)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||\"fx\",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};\"string\"!=typeof e&&(t=e,e=void 0),e=e||\"fx\";while(a--)(n=J.get(o[a],e+\"queueHooks\"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var re=/[+-]?(?:\\d*\\.|)\\d+(?:[eE][+-]?\\d+|)/.source,ie=new RegExp(\"^(?:([+-])=|)(\"+re+\")([a-z%]*)$\",\"i\"),oe=[\"Top\",\"Right\",\"Bottom\",\"Left\"],ae=function(e,t){return\"none\"===(e=t||e).style.display||\"\"===e.style.display&&w.contains(e.ownerDocument,e)&&\"none\"===w.css(e,\"display\")},se=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};function ue(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return w.css(e,t,\"\")},u=s(),l=n&&n[3]||(w.cssNumber[t]?\"\":\"px\"),c=(w.cssNumber[t]||\"px\"!==l&&+u)&&ie.exec(w.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)w.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,w.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var le={};function ce(e){var t,n=e.ownerDocument,r=e.nodeName,i=le[r];return i||(t=n.body.appendChild(n.createElement(r)),i=w.css(t,\"display\"),t.parentNode.removeChild(t),\"none\"===i&&(i=\"block\"),le[r]=i,i)}function fe(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?(\"none\"===n&&(i[o]=J.get(r,\"display\")||null,i[o]||(r.style.display=\"\")),\"\"===r.style.display&&ae(r)&&(i[o]=ce(r))):\"none\"!==n&&(i[o]=\"none\",J.set(r,\"display\",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}w.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return\"boolean\"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?w(this).show():w(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\\/\\0>\\x20\\t\\r\\n\\f]+)/i,he=/^$|^module$|\\/(?:java|ecma)script/i,ge={option:[1,\"<select multiple='multiple'>\",\"</select>\"],thead:[1,\"<table>\",\"</table>\"],col:[2,\"<table><colgroup>\",\"</colgroup></table>\"],tr:[2,\"<table><tbody>\",\"</tbody></table>\"],td:[3,\"<table><tbody><tr>\",\"</tr></tbody></table>\"],_default:[0,\"\",\"\"]};ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;function ye(e,t){var n;return n=\"undefined\"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||\"*\"):\"undefined\"!=typeof e.querySelectorAll?e.querySelectorAll(t||\"*\"):[],void 0===t||t&&N(e,t)?w.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)J.set(e[n],\"globalEval\",!t||J.get(t[n],\"globalEval\"))}var me=/<|&#?\\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if(\"object\"===x(o))w.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement(\"div\")),s=(de.exec(o)||[\"\",\"\"])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+w.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;w.merge(p,a.childNodes),(a=f.firstChild).textContent=\"\"}else p.push(t.createTextNode(o));f.textContent=\"\",d=0;while(o=p[d++])if(r&&w.inArray(o,r)>-1)i&&i.push(o);else if(l=w.contains(o.ownerDocument,o),a=ye(f.appendChild(o),\"script\"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||\"\")&&n.push(o)}return f}!function(){var e=r.createDocumentFragment().appendChild(r.createElement(\"div\")),t=r.createElement(\"input\");t.setAttribute(\"type\",\"radio\"),t.setAttribute(\"checked\",\"checked\"),t.setAttribute(\"name\",\"t\"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML=\"<textarea>x</textarea>\",h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var be=r.documentElement,we=/^key/,Te=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ce=/^([^.]*)(?:\\.(.+)|)/;function Ee(){return!0}function ke(){return!1}function Se(){try{return r.activeElement}catch(e){}}function De(e,t,n,r,i,o){var a,s;if(\"object\"==typeof t){\"string\"!=typeof n&&(r=r||n,n=void 0);for(s in t)De(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&(\"string\"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ke;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return w().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=w.guid++)),e.each(function(){w.event.add(this,t,i,r,n)})}w.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.get(e);if(y){n.handler&&(n=(o=n).handler,i=o.selector),i&&w.find.matchesSelector(be,i),n.guid||(n.guid=w.guid++),(u=y.events)||(u=y.events={}),(a=y.handle)||(a=y.handle=function(t){return\"undefined\"!=typeof w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||\"\").match(M)||[\"\"]).length;while(l--)d=g=(s=Ce.exec(t[l])||[])[1],h=(s[2]||\"\").split(\".\").sort(),d&&(f=w.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=w.event.special[d]||{},c=w.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:h.join(\".\")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),w.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.hasData(e)&&J.get(e);if(y&&(u=y.events)){l=(t=(t||\"\").match(M)||[\"\"]).length;while(l--)if(s=Ce.exec(t[l])||[],d=g=s[1],h=(s[2]||\"\").split(\".\").sort(),d){f=w.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp(\"(^|\\\\.)\"+h.join(\"\\\\.(?:.*\\\\.|)\")+\"(\\\\.|$)\"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&(\"**\"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||w.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)w.event.remove(e,d+t[l],n,r,!0);w.isEmptyObject(u)&&J.remove(e,\"handle events\")}},dispatch:function(e){var t=w.event.fix(e),n,r,i,o,a,s,u=new Array(arguments.length),l=(J.get(this,\"events\")||{})[t.type]||[],c=w.event.special[t.type]||{};for(u[0]=t,n=1;n<arguments.length;n++)u[n]=arguments[n];if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){s=w.event.handlers.call(this,t,l),n=0;while((o=s[n++])&&!t.isPropagationStopped()){t.currentTarget=o.elem,r=0;while((a=o.handlers[r++])&&!t.isImmediatePropagationStopped())t.rnamespace&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,void 0!==(i=((w.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))&&!1===(t.result=i)&&(t.preventDefault(),t.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!(\"click\"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&(\"click\"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+\" \"]&&(a[i]=r.needsContext?w(i,this).index(l)>-1:w.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Se()&&this.focus)return this.focus(),!1},delegateType:\"focusin\"},blur:{trigger:function(){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:\"focusout\"},click:{trigger:function(){if(\"checkbox\"===this.type&&this.click&&N(this,\"input\"))return this.click(),!1},_default:function(e){return N(e.target,\"a\")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:ke,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,\"char\":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Te.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},w.event.addProp),w.each({mouseenter:\"mouseover\",mouseleave:\"mouseout\",pointerenter:\"pointerover\",pointerleave:\"pointerout\"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||w.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),w.fn.extend({on:function(e,t,n,r){return De(this,e,t,n,r)},one:function(e,t,n,r){return De(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+\".\"+r.namespace:r.origType,r.selector,r.handler),this;if(\"object\"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&\"function\"!=typeof t||(n=t,t=void 0),!1===n&&(n=ke),this.each(function(){w.event.remove(this,e,n,t)})}});var Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\\/\\0>\\x20\\t\\r\\n\\f]*)[^>]*)\\/>/gi,Ae=/<script|<style|<link/i,je=/checked\\s*(?:[^=]|=\\s*.checked.)/i,qe=/^\\s*<!(?:\\[CDATA\\[|--)|(?:\\]\\]|--)>\\s*$/g;function Le(e,t){return N(e,\"table\")&&N(11!==t.nodeType?t:t.firstChild,\"tr\")?w(e).children(\"tbody\")[0]||e:e}function He(e){return e.type=(null!==e.getAttribute(\"type\"))+\"/\"+e.type,e}function Oe(e){return\"true/\"===(e.type||\"\").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute(\"type\"),e}function Pe(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(J.hasData(e)&&(o=J.access(e),a=J.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)w.event.add(t,i,l[i][n])}K.hasData(e)&&(s=K.access(e),u=w.extend({},s),K.set(t,u))}}function Me(e,t){var n=t.nodeName.toLowerCase();\"input\"===n&&pe.test(e.type)?t.checked=e.checked:\"input\"!==n&&\"textarea\"!==n||(t.defaultValue=e.defaultValue)}function Re(e,t,n,r){t=a.apply([],t);var i,o,s,u,l,c,f=0,p=e.length,d=p-1,y=t[0],v=g(y);if(v||p>1&&\"string\"==typeof y&&!h.checkClone&&je.test(y))return e.each(function(i){var o=e.eq(i);v&&(t[0]=y.call(this,i,o.html())),Re(o,t,n,r)});if(p&&(i=xe(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(u=(s=w.map(ye(i,\"script\"),He)).length;f<p;f++)l=i,f!==d&&(l=w.clone(l,!0,!0),u&&w.merge(s,ye(l,\"script\"))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,w.map(s,Oe),f=0;f<u;f++)l=s[f],he.test(l.type||\"\")&&!J.access(l,\"globalEval\")&&w.contains(c,l)&&(l.src&&\"module\"!==(l.type||\"\").toLowerCase()?w._evalUrl&&w._evalUrl(l.src):m(l.textContent.replace(qe,\"\"),c,l))}return e}function Ie(e,t,n){for(var r,i=t?w.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||w.cleanData(ye(r)),r.parentNode&&(n&&w.contains(r.ownerDocument,r)&&ve(ye(r,\"script\")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e.replace(Ne,\"<$1></$2>\")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=w.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(a=ye(s),r=0,i=(o=ye(e)).length;r<i;r++)Me(o[r],a[r]);if(t)if(n)for(o=o||ye(e),a=a||ye(s),r=0,i=o.length;r<i;r++)Pe(o[r],a[r]);else Pe(e,s);return(a=ye(s,\"script\")).length>0&&ve(a,!u&&ye(e,\"script\")),s},cleanData:function(e){for(var t,n,r,i=w.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[J.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),w.fn.extend({detach:function(e){return Ie(this,e,!0)},remove:function(e){return Ie(this,e)},text:function(e){return z(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ye(e,!1)),e.textContent=\"\");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if(\"string\"==typeof e&&!Ae.test(e)&&!ge[(de.exec(e)||[\"\",\"\"])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Re(this,arguments,function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(ye(this)),n&&n.replaceChild(t,this))},e)}}),w.each({appendTo:\"append\",prependTo:\"prepend\",insertBefore:\"before\",insertAfter:\"after\",replaceAll:\"replaceWith\"},function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),w(i[a])[t](n),s.apply(r,n.get());return this.pushStack(r)}});var We=new RegExp(\"^(\"+re+\")(?!px)[a-z%]+$\",\"i\"),$e=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Be=new RegExp(oe.join(\"|\"),\"i\");!function(){function t(){if(c){l.style.cssText=\"position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0\",c.style.cssText=\"position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%\",be.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i=\"1%\"!==t.top,u=12===n(t.marginLeft),c.style.right=\"60%\",s=36===n(t.right),o=36===n(t.width),c.style.position=\"absolute\",a=36===c.offsetWidth||\"absolute\",be.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,s,u,l=r.createElement(\"div\"),c=r.createElement(\"div\");c.style&&(c.style.backgroundClip=\"content-box\",c.cloneNode(!0).style.backgroundClip=\"\",h.clearCloneStyle=\"content-box\"===c.style.backgroundClip,w.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),a}}))}();function Fe(e,t,n){var r,i,o,a,s=e.style;return(n=n||$e(e))&&(\"\"!==(a=n.getPropertyValue(t)||n[t])||w.contains(e.ownerDocument,e)||(a=w.style(e,t)),!h.pixelBoxStyles()&&We.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+\"\":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}var ze=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ue={position:\"absolute\",visibility:\"hidden\",display:\"block\"},Ve={letterSpacing:\"0\",fontWeight:\"400\"},Ge=[\"Webkit\",\"Moz\",\"ms\"],Ye=r.createElement(\"div\").style;function Qe(e){if(e in Ye)return e;var t=e[0].toUpperCase()+e.slice(1),n=Ge.length;while(n--)if((e=Ge[n]+t)in Ye)return e}function Je(e){var t=w.cssProps[e];return t||(t=w.cssProps[e]=Qe(e)||e),t}function Ke(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||\"px\"):t}function Ze(e,t,n,r,i,o){var a=\"width\"===t?1:0,s=0,u=0;if(n===(r?\"border\":\"content\"))return 0;for(;a<4;a+=2)\"margin\"===n&&(u+=w.css(e,n+oe[a],!0,i)),r?(\"content\"===n&&(u-=w.css(e,\"padding\"+oe[a],!0,i)),\"margin\"!==n&&(u-=w.css(e,\"border\"+oe[a]+\"Width\",!0,i))):(u+=w.css(e,\"padding\"+oe[a],!0,i),\"padding\"!==n?u+=w.css(e,\"border\"+oe[a]+\"Width\",!0,i):s+=w.css(e,\"border\"+oe[a]+\"Width\",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e[\"offset\"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function et(e,t,n){var r=$e(e),i=Fe(e,t,r),o=\"border-box\"===w.css(e,\"boxSizing\",!1,r),a=o;if(We.test(i)){if(!n)return i;i=\"auto\"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),(\"auto\"===i||!parseFloat(i)&&\"inline\"===w.css(e,\"display\",!1,r))&&(i=e[\"offset\"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ze(e,t,n||(o?\"border\":\"content\"),a,r,i)+\"px\"}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,\"opacity\");return\"\"===n?\"1\":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=G(t),u=Xe.test(t),l=e.style;if(u||(t=Je(s)),a=w.cssHooks[t]||w.cssHooks[s],void 0===n)return a&&\"get\"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];\"string\"==(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=ue(e,t,i),o=\"number\"),null!=n&&n===n&&(\"number\"===o&&(n+=i&&i[3]||(w.cssNumber[s]?\"\":\"px\")),h.clearCloneStyle||\"\"!==n||0!==t.indexOf(\"background\")||(l[t]=\"inherit\"),a&&\"set\"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=G(t);return Xe.test(t)||(t=Je(s)),(a=w.cssHooks[t]||w.cssHooks[s])&&\"get\"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),\"normal\"===i&&t in Ve&&(i=Ve[t]),\"\"===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),w.each([\"height\",\"width\"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!ze.test(w.css(e,\"display\"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,t,r):se(e,Ue,function(){return et(e,t,r)})},set:function(e,n,r){var i,o=$e(e),a=\"border-box\"===w.css(e,\"boxSizing\",!1,o),s=r&&Ze(e,t,r,a,o);return a&&h.scrollboxSize()===o.position&&(s-=Math.ceil(e[\"offset\"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ze(e,t,\"border\",!1,o)-.5)),s&&(i=ie.exec(n))&&\"px\"!==(i[3]||\"px\")&&(e.style[t]=n,n=w.css(e,t)),Ke(e,n,s)}}}),w.cssHooks.marginLeft=_e(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,\"marginLeft\"))||e.getBoundingClientRect().left-se(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+\"px\"}),w.each({margin:\"\",padding:\"\",border:\"Width\"},function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o=\"string\"==typeof n?n.split(\" \"):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0];return i}},\"margin\"!==e&&(w.cssHooks[e+t].set=Ke)}),w.fn.extend({css:function(e,t){return z(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=$e(e),i=t.length;a<i;a++)o[t[a]]=w.css(e,t[a],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}});function tt(e,t,n,r,i){return new tt.prototype.init(e,t,n,r,i)}w.Tween=tt,tt.prototype={constructor:tt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||w.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(w.cssNumber[n]?\"\":\"px\")},cur:function(){var e=tt.propHooks[this.prop];return e&&e.get?e.get(this):tt.propHooks._default.get(this)},run:function(e){var t,n=tt.propHooks[this.prop];return this.options.duration?this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):tt.propHooks._default.set(this),this}},tt.prototype.init.prototype=tt.prototype,tt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=w.css(e.elem,e.prop,\"\"))&&\"auto\"!==t?t:0},set:function(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[w.cssProps[e.prop]]&&!w.cssHooks[e.prop]?e.elem[e.prop]=e.now:w.style(e.elem,e.prop,e.now+e.unit)}}},tt.propHooks.scrollTop=tt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:\"swing\"},w.fx=tt.prototype.init,w.fx.step={};var nt,rt,it=/^(?:toggle|show|hide)$/,ot=/queueHooks$/;function at(){rt&&(!1===r.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(at):e.setTimeout(at,w.fx.interval),w.fx.tick())}function st(){return e.setTimeout(function(){nt=void 0}),nt=Date.now()}function ut(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i[\"margin\"+(n=oe[r])]=i[\"padding\"+n]=e;return t&&(i.opacity=i.width=e),i}function lt(e,t,n){for(var r,i=(pt.tweeners[t]||[]).concat(pt.tweeners[\"*\"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ct(e,t,n){var r,i,o,a,s,u,l,c,f=\"width\"in t||\"height\"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=J.get(e,\"fxshow\");n.queue||(null==(a=w._queueHooks(e,\"fx\")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,w.queue(e,\"fx\").length||a.empty.fire()})}));for(r in t)if(i=t[r],it.test(i)){if(delete t[r],o=o||\"toggle\"===i,i===(g?\"hide\":\"show\")){if(\"show\"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||w.style(e,r)}if((u=!w.isEmptyObject(t))||!w.isEmptyObject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=J.get(e,\"display\")),\"none\"===(c=w.css(e,\"display\"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=w.css(e,\"display\"),fe([e]))),(\"inline\"===c||\"inline-block\"===c&&null!=l)&&\"none\"===w.css(e,\"float\")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l=\"none\"===c?\"\":c)),h.display=\"inline-block\")),n.overflow&&(h.overflow=\"hidden\",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(y?\"hidden\"in y&&(g=y.hidden):y=J.access(e,\"fxshow\",{display:l}),o&&(y.hidden=!g),g&&fe([e],!0),p.done(function(){g||fe([e]),J.remove(e,\"fxshow\");for(r in d)w.style(e,r,d[r])})),u=lt(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}}function ft(e,t){var n,r,i,o,a;for(n in e)if(r=G(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=w.cssHooks[r])&&\"expand\"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function pt(e,t,n){var r,i,o=0,a=pt.prefilters.length,s=w.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=nt||st(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:w.extend({},t),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions:n,startTime:nt||st(),duration:n.duration,tweens:[],createTween:function(t,n){var r=w.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(ft(c,l.opts.specialEasing);o<a;o++)if(r=pt.prefilters[o].call(l,e,c,l.opts))return g(r.stop)&&(w._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return w.map(c,lt,l),g(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),w.fx.timer(w.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}w.Animation=w.extend(pt,{tweeners:{\"*\":[function(e,t){var n=this.createTween(e,t);return ue(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=[\"*\"]):e=e.match(M);for(var n,r=0,i=e.length;r<i;r++)n=e[r],pt.tweeners[n]=pt.tweeners[n]||[],pt.tweeners[n].unshift(t)},prefilters:[ct],prefilter:function(e,t){t?pt.prefilters.unshift(e):pt.prefilters.push(e)}}),w.speed=function(e,t,n){var r=e&&\"object\"==typeof e?w.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return w.fx.off?r.duration=0:\"number\"!=typeof r.duration&&(r.duration in w.fx.speeds?r.duration=w.fx.speeds[r.duration]:r.duration=w.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue=\"fx\"),r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css(\"opacity\",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=w.isEmptyObject(e),o=w.speed(t,n,r),a=function(){var t=pt(this,w.extend({},e),o);(i||J.get(this,\"finish\"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return\"string\"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||\"fx\",[]),this.each(function(){var t=!0,i=null!=e&&e+\"queueHooks\",o=w.timers,a=J.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ot.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||w.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||\"fx\"),this.each(function(){var t,n=J.get(this),r=n[e+\"queue\"],i=n[e+\"queueHooks\"],o=w.timers,a=r?r.length:0;for(n.finish=!0,w.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),w.each([\"toggle\",\"show\",\"hide\"],function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,i){return null==e||\"boolean\"==typeof e?n.apply(this,arguments):this.animate(ut(t,!0),e,r,i)}}),w.each({slideDown:ut(\"show\"),slideUp:ut(\"hide\"),slideToggle:ut(\"toggle\"),fadeIn:{opacity:\"show\"},fadeOut:{opacity:\"hide\"},fadeToggle:{opacity:\"toggle\"}},function(e,t){w.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(nt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),nt=void 0},w.fx.timer=function(e){w.timers.push(e),w.fx.start()},w.fx.interval=13,w.fx.start=function(){rt||(rt=!0,at())},w.fx.stop=function(){rt=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(t,n){return t=w.fx?w.fx.speeds[t]||t:t,n=n||\"fx\",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.createElement(\"input\"),t=r.createElement(\"select\").appendChild(r.createElement(\"option\"));e.type=\"checkbox\",h.checkOn=\"\"!==e.value,h.optSelected=t.selected,(e=r.createElement(\"input\")).value=\"t\",e.type=\"radio\",h.radioValue=\"t\"===e.value}();var dt,ht=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return z(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return\"undefined\"==typeof e.getAttribute?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?dt:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):i&&\"set\"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+\"\"),n):i&&\"get\"in i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&\"radio\"===t&&N(e,\"input\")){var n=e.value;return e.setAttribute(\"type\",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(M);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),dt={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\\w+/g),function(e,t){var n=ht[t]||w.find.attr;ht[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=ht[a],ht[a]=i,i=null!=n(e,t,r)?a:null,ht[a]=o),i}});var gt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;w.fn.extend({prop:function(e,t){return z(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&\"set\"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&\"get\"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,\"tabindex\");return t?parseInt(t,10):gt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{\"for\":\"htmlFor\",\"class\":\"className\"}}),h.optSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each([\"tabIndex\",\"readOnly\",\"maxLength\",\"cellSpacing\",\"cellPadding\",\"rowSpan\",\"colSpan\",\"useMap\",\"frameBorder\",\"contentEditable\"],function(){w.propFix[this.toLowerCase()]=this});function vt(e){return(e.match(M)||[]).join(\" \")}function mt(e){return e.getAttribute&&e.getAttribute(\"class\")||\"\"}function xt(e){return Array.isArray(e)?e:\"string\"==typeof e?e.match(M)||[]:[]}w.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).addClass(e.call(this,t,mt(this)))});if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&\" \"+vt(i)+\" \"){a=0;while(o=t[a++])r.indexOf(\" \"+o+\" \")<0&&(r+=o+\" \");i!==(s=vt(r))&&n.setAttribute(\"class\",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).removeClass(e.call(this,t,mt(this)))});if(!arguments.length)return this.attr(\"class\",\"\");if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&\" \"+vt(i)+\" \"){a=0;while(o=t[a++])while(r.indexOf(\" \"+o+\" \")>-1)r=r.replace(\" \"+o+\" \",\" \");i!==(s=vt(r))&&n.setAttribute(\"class\",s)}return this},toggleClass:function(e,t){var n=typeof e,r=\"string\"===n||Array.isArray(e);return\"boolean\"==typeof t&&r?t?this.addClass(e):this.removeClass(e):g(e)?this.each(function(n){w(this).toggleClass(e.call(this,n,mt(this),t),t)}):this.each(function(){var t,i,o,a;if(r){i=0,o=w(this),a=xt(e);while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else void 0!==e&&\"boolean\"!==n||((t=mt(this))&&J.set(this,\"__className__\",t),this.setAttribute&&this.setAttribute(\"class\",t||!1===e?\"\":J.get(this,\"__className__\")||\"\"))})},hasClass:function(e){var t,n,r=0;t=\" \"+e+\" \";while(n=this[r++])if(1===n.nodeType&&(\" \"+vt(mt(n))+\" \").indexOf(t)>-1)return!0;return!1}});var bt=/\\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=g(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i=\"\":\"number\"==typeof i?i+=\"\":Array.isArray(i)&&(i=w.map(i,function(e){return null==e?\"\":e+\"\"})),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&\"set\"in t&&void 0!==t.set(this,i,\"value\")||(this.value=i))});if(i)return(t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&\"get\"in t&&void 0!==(n=t.get(i,\"value\"))?n:\"string\"==typeof(n=i.value)?n.replace(bt,\"\"):null==n?\"\":n}}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,\"value\");return null!=t?t:vt(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a=\"select-one\"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!N(n.parentNode,\"optgroup\"))){if(t=w(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=w.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=w.inArray(w.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each([\"radio\",\"checkbox\"],function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.inArray(w(e).val(),t)>-1}},h.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute(\"value\")?\"on\":e.value})}),h.focusin=\"onfocusin\"in e;var wt=/^(?:focusinfocus|focusoutblur)$/,Tt=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,i,o){var a,s,u,l,c,p,d,h,v=[i||r],m=f.call(t,\"type\")?t.type:t,x=f.call(t,\"namespace\")?t.namespace.split(\".\"):[];if(s=h=u=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!wt.test(m+w.event.triggered)&&(m.indexOf(\".\")>-1&&(m=(x=m.split(\".\")).shift(),x.sort()),c=m.indexOf(\":\")<0&&\"on\"+m,t=t[w.expando]?t:new w.Event(m,\"object\"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=x.join(\".\"),t.rnamespace=t.namespace?new RegExp(\"(^|\\\\.)\"+x.join(\"\\\\.(?:.*\\\\.|)\")+\"(\\\\.|$)\"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:w.makeArray(n,[t]),d=w.event.special[m]||{},o||!d.trigger||!1!==d.trigger.apply(i,n))){if(!o&&!d.noBubble&&!y(i)){for(l=d.delegateType||m,wt.test(l+m)||(s=s.parentNode);s;s=s.parentNode)v.push(s),u=s;u===(i.ownerDocument||r)&&v.push(u.defaultView||u.parentWindow||e)}a=0;while((s=v[a++])&&!t.isPropagationStopped())h=s,t.type=a>1?l:d.bindType||m,(p=(J.get(s,\"events\")||{})[t.type]&&J.get(s,\"handle\"))&&p.apply(s,n),(p=c&&s[c])&&p.apply&&Y(s)&&(t.result=p.apply(s,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(v.pop(),n)||!Y(i)||c&&g(i[m])&&!y(i)&&((u=i[c])&&(i[c]=null),w.event.triggered=m,t.isPropagationStopped()&&h.addEventListener(m,Tt),i[m](),t.isPropagationStopped()&&h.removeEventListener(m,Tt),w.event.triggered=void 0,u&&(i[c]=u)),t.result}},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}}),h.focusin||w.each({focus:\"focusin\",blur:\"focusout\"},function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=J.access(r,t);i||r.addEventListener(e,n,!0),J.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=J.access(r,t)-1;i?J.access(r,t,i):(r.removeEventListener(e,n,!0),J.remove(r,t))}}});var Ct=e.location,Et=Date.now(),kt=/\\?/;w.parseXML=function(t){var n;if(!t||\"string\"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,\"text/xml\")}catch(e){n=void 0}return n&&!n.getElementsByTagName(\"parsererror\").length||w.error(\"Invalid XML: \"+t),n};var St=/\\[\\]$/,Dt=/\\r?\\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,At=/^(?:input|select|textarea|keygen)/i;function jt(e,t,n,r){var i;if(Array.isArray(t))w.each(t,function(t,i){n||St.test(e)?r(e,i):jt(e+\"[\"+(\"object\"==typeof i&&null!=i?t:\"\")+\"]\",i,n,r)});else if(n||\"object\"!==x(t))r(e,t);else for(i in t)jt(e+\"[\"+i+\"]\",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+\"=\"+encodeURIComponent(null==n?\"\":n)};if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join(\"&\")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,\"elements\");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(\":disabled\")&&At.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(Dt,\"\\r\\n\")}}):{name:t.name,value:n.replace(Dt,\"\\r\\n\")}}).get()}});var qt=/%20/g,Lt=/#.*$/,Ht=/([?&])_=[^&]*/,Ot=/^(.*?):[ \\t]*([^\\r\\n]*)$/gm,Pt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mt=/^(?:GET|HEAD)$/,Rt=/^\\/\\//,It={},Wt={},$t=\"*/\".concat(\"*\"),Bt=r.createElement(\"a\");Bt.href=Ct.href;function Ft(e){return function(t,n){\"string\"!=typeof t&&(n=t,t=\"*\");var r,i=0,o=t.toLowerCase().match(M)||[];if(g(n))while(r=o[i++])\"+\"===r[0]?(r=r.slice(1)||\"*\",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function _t(e,t,n,r){var i={},o=e===Wt;function a(s){var u;return i[s]=!0,w.each(e[s]||[],function(e,s){var l=s(t,n,r);return\"string\"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i[\"*\"]&&a(\"*\")}function zt(e,t){var n,r,i=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&w.extend(!0,e,r),e}function Xt(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while(\"*\"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader(\"Content-Type\"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+\" \"+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function Ut(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if(\"*\"===o)o=u;else if(\"*\"!==u&&u!==o){if(!(a=l[u+\" \"+o]||l[\"* \"+o]))for(i in l)if((s=i.split(\" \"))[1]===o&&(a=l[u+\" \"+s[0]]||l[\"* \"+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e[\"throws\"])t=a(t);else try{t=a(t)}catch(e){return{state:\"parsererror\",error:a?e:\"No conversion from \"+u+\" to \"+o}}}return{state:\"success\",data:t}}w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:\"GET\",isLocal:Pt.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:\"application/x-www-form-urlencoded; charset=UTF-8\",accepts:{\"*\":$t,text:\"text/plain\",html:\"text/html\",xml:\"application/xml, text/xml\",json:\"application/json, text/javascript\"},contents:{xml:/\\bxml\\b/,html:/\\bhtml/,json:/\\bjson\\b/},responseFields:{xml:\"responseXML\",text:\"responseText\",json:\"responseJSON\"},converters:{\"* text\":String,\"text html\":!0,\"text json\":JSON.parse,\"text xml\":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,w.ajaxSettings),t):zt(w.ajaxSettings,e)},ajaxPrefilter:Ft(It),ajaxTransport:Ft(Wt),ajax:function(t,n){\"object\"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,f,p,d,h=w.ajaxSetup({},n),g=h.context||h,y=h.context&&(g.nodeType||g.jquery)?w(g):w.event,v=w.Deferred(),m=w.Callbacks(\"once memory\"),x=h.statusCode||{},b={},T={},C=\"canceled\",E={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s){s={};while(t=Ot.exec(a))s[t[1].toLowerCase()]=t[2]}t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)E.always(e[E.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||C;return i&&i.abort(t),k(0,t),this}};if(v.promise(E),h.url=((t||h.url||Ct.href)+\"\").replace(Rt,Ct.protocol+\"//\"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||\"*\").toLowerCase().match(M)||[\"\"],null==h.crossDomain){l=r.createElement(\"a\");try{l.href=h.url,l.href=l.href,h.crossDomain=Bt.protocol+\"//\"+Bt.host!=l.protocol+\"//\"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&\"string\"!=typeof h.data&&(h.data=w.param(h.data,h.traditional)),_t(It,h,n,E),c)return E;(f=w.event&&h.global)&&0==w.active++&&w.event.trigger(\"ajaxStart\"),h.type=h.type.toUpperCase(),h.hasContent=!Mt.test(h.type),o=h.url.replace(Lt,\"\"),h.hasContent?h.data&&h.processData&&0===(h.contentType||\"\").indexOf(\"application/x-www-form-urlencoded\")&&(h.data=h.data.replace(qt,\"+\")):(d=h.url.slice(o.length),h.data&&(h.processData||\"string\"==typeof h.data)&&(o+=(kt.test(o)?\"&\":\"?\")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Ht,\"$1\"),d=(kt.test(o)?\"&\":\"?\")+\"_=\"+Et+++d),h.url=o+d),h.ifModified&&(w.lastModified[o]&&E.setRequestHeader(\"If-Modified-Since\",w.lastModified[o]),w.etag[o]&&E.setRequestHeader(\"If-None-Match\",w.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&E.setRequestHeader(\"Content-Type\",h.contentType),E.setRequestHeader(\"Accept\",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+(\"*\"!==h.dataTypes[0]?\", \"+$t+\"; q=0.01\":\"\"):h.accepts[\"*\"]);for(p in h.headers)E.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(g,E,h)||c))return E.abort();if(C=\"abort\",m.add(h.complete),E.done(h.success),E.fail(h.error),i=_t(Wt,h,n,E)){if(E.readyState=1,f&&y.trigger(\"ajaxSend\",[E,h]),c)return E;h.async&&h.timeout>0&&(u=e.setTimeout(function(){E.abort(\"timeout\")},h.timeout));try{c=!1,i.send(b,k)}catch(e){if(c)throw e;k(-1,e)}}else k(-1,\"No Transport\");function k(t,n,r,s){var l,p,d,b,T,C=n;c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||\"\",E.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(b=Xt(h,E,r)),b=Ut(h,b,E,l),l?(h.ifModified&&((T=E.getResponseHeader(\"Last-Modified\"))&&(w.lastModified[o]=T),(T=E.getResponseHeader(\"etag\"))&&(w.etag[o]=T)),204===t||\"HEAD\"===h.type?C=\"nocontent\":304===t?C=\"notmodified\":(C=b.state,p=b.data,l=!(d=b.error))):(d=C,!t&&C||(C=\"error\",t<0&&(t=0))),E.status=t,E.statusText=(n||C)+\"\",l?v.resolveWith(g,[p,C,E]):v.rejectWith(g,[E,C,d]),E.statusCode(x),x=void 0,f&&y.trigger(l?\"ajaxSuccess\":\"ajaxError\",[E,h,l?p:d]),m.fireWith(g,[E,C]),f&&(y.trigger(\"ajaxComplete\",[E,h]),--w.active||w.event.trigger(\"ajaxStop\")))}return E},getJSON:function(e,t,n){return w.get(e,t,n,\"json\")},getScript:function(e,t){return w.get(e,void 0,t,\"script\")}}),w.each([\"get\",\"post\"],function(e,t){w[t]=function(e,n,r,i){return g(n)&&(i=i||r,r=n,n=void 0),w.ajax(w.extend({url:e,type:t,dataType:i,data:n,success:r},w.isPlainObject(e)&&e))}}),w._evalUrl=function(e){return w.ajax({url:e,type:\"GET\",dataType:\"script\",cache:!0,async:!1,global:!1,\"throws\":!0})},w.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){w(this).wrapInner(e.call(this,t))}):this.each(function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not(\"body\").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Vt={0:200,1223:204},Gt=w.ajaxSettings.xhr();h.cors=!!Gt&&\"withCredentials\"in Gt,h.ajax=Gt=!!Gt,w.ajaxTransport(function(t){var n,r;if(h.cors||Gt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i[\"X-Requested-With\"]||(i[\"X-Requested-With\"]=\"XMLHttpRequest\");for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,\"abort\"===e?s.abort():\"error\"===e?\"number\"!=typeof s.status?o(0,\"error\"):o(s.status,s.statusText):o(Vt[s.status]||s.status,s.statusText,\"text\"!==(s.responseType||\"text\")||\"string\"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n(\"error\"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n(\"abort\");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),w.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),w.ajaxSetup({accepts:{script:\"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript\"},contents:{script:/\\b(?:java|ecma)script\\b/},converters:{\"text script\":function(e){return w.globalEval(e),e}}}),w.ajaxPrefilter(\"script\",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type=\"GET\")}),w.ajaxTransport(\"script\",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=w(\"<script>\").prop({charset:e.scriptCharset,src:e.url}).on(\"load error\",n=function(e){t.remove(),n=null,e&&o(\"error\"===e.type?404:200,e.type)}),r.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Yt=[],Qt=/(=)\\?(?=&|$)|\\?\\?/;w.ajaxSetup({jsonp:\"callback\",jsonpCallback:function(){var e=Yt.pop()||w.expando+\"_\"+Et++;return this[e]=!0,e}}),w.ajaxPrefilter(\"json jsonp\",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Qt.test(t.url)?\"url\":\"string\"==typeof t.data&&0===(t.contentType||\"\").indexOf(\"application/x-www-form-urlencoded\")&&Qt.test(t.data)&&\"data\");if(s||\"jsonp\"===t.dataTypes[0])return i=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Qt,\"$1\"+i):!1!==t.jsonp&&(t.url+=(kt.test(t.url)?\"&\":\"?\")+t.jsonp+\"=\"+i),t.converters[\"script json\"]=function(){return a||w.error(i+\" was not called\"),a[0]},t.dataTypes[0]=\"json\",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?w(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Yt.push(i)),a&&g(o)&&o(a[0]),a=o=void 0}),\"script\"}),h.createHTMLDocument=function(){var e=r.implementation.createHTMLDocument(\"\").body;return e.innerHTML=\"<form></form><form></form>\",2===e.childNodes.length}(),w.parseHTML=function(e,t,n){if(\"string\"!=typeof e)return[];\"boolean\"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument(\"\")).createElement(\"base\")).href=r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=xe([e],t,a),a&&a.length&&w(a).remove(),w.merge([],o.childNodes))},w.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(\" \");return s>-1&&(r=vt(e.slice(s)),e=e.slice(0,s)),g(t)?(n=t,t=void 0):t&&\"object\"==typeof t&&(i=\"POST\"),a.length>0&&w.ajax({url:e,type:i||\"GET\",dataType:\"html\",data:t}).done(function(e){o=arguments,a.html(r?w(\"<div>\").append(w.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},w.each([\"ajaxStart\",\"ajaxStop\",\"ajaxComplete\",\"ajaxError\",\"ajaxSuccess\",\"ajaxSend\"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}}),w.expr.pseudos.animated=function(e){return w.grep(w.timers,function(t){return e===t.elem}).length},w.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=w.css(e,\"position\"),f=w(e),p={};\"static\"===c&&(e.style.position=\"relative\"),s=f.offset(),o=w.css(e,\"top\"),u=w.css(e,\"left\"),(l=(\"absolute\"===c||\"fixed\"===c)&&(o+u).indexOf(\"auto\")>-1)?(a=(r=f.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),g(t)&&(t=t.call(e,n,w.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),\"using\"in t?t.using.call(e,p):f.css(p)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if(\"fixed\"===w.css(r,\"position\"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&\"static\"===w.css(e,\"position\"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,\"borderTopWidth\",!0),i.left+=w.css(e,\"borderLeftWidth\",!0))}return{top:t.top-i.top-w.css(r,\"marginTop\",!0),left:t.left-i.left-w.css(r,\"marginLeft\",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&\"static\"===w.css(e,\"position\"))e=e.offsetParent;return e||be})}}),w.each({scrollLeft:\"pageXOffset\",scrollTop:\"pageYOffset\"},function(e,t){var n=\"pageYOffset\"===t;w.fn[e]=function(r){return z(this,function(e,r,i){var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),w.each([\"top\",\"left\"],function(e,t){w.cssHooks[t]=_e(h.pixelPosition,function(e,n){if(n)return n=Fe(e,t),We.test(n)?w(e).position()[t]+\"px\":n})}),w.each({Height:\"height\",Width:\"width\"},function(e,t){w.each({padding:\"inner\"+e,content:t,\"\":\"outer\"+e},function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||\"boolean\"!=typeof i),s=n||(!0===i||!0===o?\"margin\":\"border\");return z(this,function(t,n,i){var o;return y(t)?0===r.indexOf(\"outer\")?t[\"inner\"+e]:t.document.documentElement[\"client\"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body[\"scroll\"+e],o[\"scroll\"+e],t.body[\"offset\"+e],o[\"offset\"+e],o[\"client\"+e])):void 0===i?w.css(t,n,s):w.style(t,n,i,s)},t,a?i:void 0,a)}})}),w.each(\"blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu\".split(\" \"),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,\"**\"):this.off(t,e||\"**\",n)}}),w.proxy=function(e,t){var n,r,i;if(\"string\"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=o.call(arguments,2),i=function(){return e.apply(t||this,r.concat(o.call(arguments)))},i.guid=e.guid=e.guid||w.guid++,i},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=N,w.isFunction=g,w.isWindow=y,w.camelCase=G,w.type=x,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return(\"number\"===t||\"string\"===t)&&!isNaN(e-parseFloat(e))},\"function\"==typeof define&&define.amd&&define(\"jquery\",[],function(){return w});var Jt=e.jQuery,Kt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=Kt),t&&e.jQuery===w&&(e.jQuery=Jt),w},t||(e.jQuery=e.$=w),w});\r\n"

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(8)(__webpack_require__(11))

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	module.exports = "(function(f){if(typeof exports===\"object\"&&typeof module!==\"undefined\"){module.exports=f()}else if(typeof define===\"function\"&&define.amd){define([],f)}else{var g;if(typeof window!==\"undefined\"){g=window}else if(typeof global!==\"undefined\"){g=global}else if(typeof self!==\"undefined\"){g=self}else{g=this}g.io=f()}})(function(){var define,module,exports;return function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require==\"function\"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error(\"Cannot find module '\"+o+\"'\");throw f.code=\"MODULE_NOT_FOUND\",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require==\"function\"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}({1:[function(_dereq_,module,exports){module.exports=_dereq_(\"./lib/\")},{\"./lib/\":2}],2:[function(_dereq_,module,exports){module.exports=_dereq_(\"./socket\");module.exports.parser=_dereq_(\"engine.io-parser\")},{\"./socket\":3,\"engine.io-parser\":19}],3:[function(_dereq_,module,exports){(function(global){var transports=_dereq_(\"./transports\");var Emitter=_dereq_(\"component-emitter\");var debug=_dereq_(\"debug\")(\"engine.io-client:socket\");var index=_dereq_(\"indexof\");var parser=_dereq_(\"engine.io-parser\");var parseuri=_dereq_(\"parseuri\");var parsejson=_dereq_(\"parsejson\");var parseqs=_dereq_(\"parseqs\");module.exports=Socket;function noop(){}function Socket(uri,opts){if(!(this instanceof Socket))return new Socket(uri,opts);opts=opts||{};if(uri&&\"object\"==typeof uri){opts=uri;uri=null}if(uri){uri=parseuri(uri);opts.hostname=uri.host;opts.secure=uri.protocol==\"https\"||uri.protocol==\"wss\";opts.port=uri.port;if(uri.query)opts.query=uri.query}else if(opts.host){opts.hostname=parseuri(opts.host).host}this.secure=null!=opts.secure?opts.secure:global.location&&\"https:\"==location.protocol;if(opts.hostname&&!opts.port){opts.port=this.secure?\"443\":\"80\"}this.agent=opts.agent||false;this.hostname=opts.hostname||(global.location?location.hostname:\"localhost\");this.port=opts.port||(global.location&&location.port?location.port:this.secure?443:80);this.query=opts.query||{};if(\"string\"==typeof this.query)this.query=parseqs.decode(this.query);this.upgrade=false!==opts.upgrade;this.path=(opts.path||\"/engine.io\").replace(/\\/$/,\"\")+\"/\";this.forceJSONP=!!opts.forceJSONP;this.jsonp=false!==opts.jsonp;this.forceBase64=!!opts.forceBase64;this.enablesXDR=!!opts.enablesXDR;this.timestampParam=opts.timestampParam||\"t\";this.timestampRequests=opts.timestampRequests;this.transports=opts.transports||[\"polling\",\"websocket\"];this.readyState=\"\";this.writeBuffer=[];this.policyPort=opts.policyPort||843;this.rememberUpgrade=opts.rememberUpgrade||false;this.binaryType=null;this.onlyBinaryUpgrades=opts.onlyBinaryUpgrades;this.perMessageDeflate=false!==opts.perMessageDeflate?opts.perMessageDeflate||{}:false;if(true===this.perMessageDeflate)this.perMessageDeflate={};if(this.perMessageDeflate&&null==this.perMessageDeflate.threshold){this.perMessageDeflate.threshold=1024}this.pfx=opts.pfx||null;this.key=opts.key||null;this.passphrase=opts.passphrase||null;this.cert=opts.cert||null;this.ca=opts.ca||null;this.ciphers=opts.ciphers||null;this.rejectUnauthorized=opts.rejectUnauthorized===undefined?null:opts.rejectUnauthorized;var freeGlobal=typeof global==\"object\"&&global;if(freeGlobal.global===freeGlobal){if(opts.extraHeaders&&Object.keys(opts.extraHeaders).length>0){this.extraHeaders=opts.extraHeaders}}this.open()}Socket.priorWebsocketSuccess=false;Emitter(Socket.prototype);Socket.protocol=parser.protocol;Socket.Socket=Socket;Socket.Transport=_dereq_(\"./transport\");Socket.transports=_dereq_(\"./transports\");Socket.parser=_dereq_(\"engine.io-parser\");Socket.prototype.createTransport=function(name){debug('creating transport \"%s\"',name);var query=clone(this.query);query.EIO=parser.protocol;query.transport=name;if(this.id)query.sid=this.id;var transport=new transports[name]({agent:this.agent,hostname:this.hostname,port:this.port,secure:this.secure,path:this.path,query:query,forceJSONP:this.forceJSONP,jsonp:this.jsonp,forceBase64:this.forceBase64,enablesXDR:this.enablesXDR,timestampRequests:this.timestampRequests,timestampParam:this.timestampParam,policyPort:this.policyPort,socket:this,pfx:this.pfx,key:this.key,passphrase:this.passphrase,cert:this.cert,ca:this.ca,ciphers:this.ciphers,rejectUnauthorized:this.rejectUnauthorized,perMessageDeflate:this.perMessageDeflate,extraHeaders:this.extraHeaders});return transport};function clone(obj){var o={};for(var i in obj){if(obj.hasOwnProperty(i)){o[i]=obj[i]}}return o}Socket.prototype.open=function(){var transport;if(this.rememberUpgrade&&Socket.priorWebsocketSuccess&&this.transports.indexOf(\"websocket\")!=-1){transport=\"websocket\"}else if(0===this.transports.length){var self=this;setTimeout(function(){self.emit(\"error\",\"No transports available\")},0);return}else{transport=this.transports[0]}this.readyState=\"opening\";try{transport=this.createTransport(transport)}catch(e){this.transports.shift();this.open();return}transport.open();this.setTransport(transport)};Socket.prototype.setTransport=function(transport){debug(\"setting transport %s\",transport.name);var self=this;if(this.transport){debug(\"clearing existing transport %s\",this.transport.name);this.transport.removeAllListeners()}this.transport=transport;transport.on(\"drain\",function(){self.onDrain()}).on(\"packet\",function(packet){self.onPacket(packet)}).on(\"error\",function(e){self.onError(e)}).on(\"close\",function(){self.onClose(\"transport close\")})};Socket.prototype.probe=function(name){debug('probing transport \"%s\"',name);var transport=this.createTransport(name,{probe:1}),failed=false,self=this;Socket.priorWebsocketSuccess=false;function onTransportOpen(){if(self.onlyBinaryUpgrades){var upgradeLosesBinary=!this.supportsBinary&&self.transport.supportsBinary;failed=failed||upgradeLosesBinary}if(failed)return;debug('probe transport \"%s\" opened',name);transport.send([{type:\"ping\",data:\"probe\"}]);transport.once(\"packet\",function(msg){if(failed)return;if(\"pong\"==msg.type&&\"probe\"==msg.data){debug('probe transport \"%s\" pong',name);self.upgrading=true;self.emit(\"upgrading\",transport);if(!transport)return;Socket.priorWebsocketSuccess=\"websocket\"==transport.name;debug('pausing current transport \"%s\"',self.transport.name);self.transport.pause(function(){if(failed)return;if(\"closed\"==self.readyState)return;debug(\"changing transport and sending upgrade packet\");cleanup();self.setTransport(transport);transport.send([{type:\"upgrade\"}]);self.emit(\"upgrade\",transport);transport=null;self.upgrading=false;self.flush()})}else{debug('probe transport \"%s\" failed',name);var err=new Error(\"probe error\");err.transport=transport.name;self.emit(\"upgradeError\",err)}})}function freezeTransport(){if(failed)return;failed=true;cleanup();transport.close();transport=null}function onerror(err){var error=new Error(\"probe error: \"+err);error.transport=transport.name;freezeTransport();debug('probe transport \"%s\" failed because of error: %s',name,err);self.emit(\"upgradeError\",error)}function onTransportClose(){onerror(\"transport closed\")}function onclose(){onerror(\"socket closed\")}function onupgrade(to){if(transport&&to.name!=transport.name){debug('\"%s\" works - aborting \"%s\"',to.name,transport.name);freezeTransport()}}function cleanup(){transport.removeListener(\"open\",onTransportOpen);transport.removeListener(\"error\",onerror);transport.removeListener(\"close\",onTransportClose);self.removeListener(\"close\",onclose);self.removeListener(\"upgrading\",onupgrade)}transport.once(\"open\",onTransportOpen);transport.once(\"error\",onerror);transport.once(\"close\",onTransportClose);this.once(\"close\",onclose);this.once(\"upgrading\",onupgrade);transport.open()};Socket.prototype.onOpen=function(){debug(\"socket open\");this.readyState=\"open\";Socket.priorWebsocketSuccess=\"websocket\"==this.transport.name;this.emit(\"open\");this.flush();if(\"open\"==this.readyState&&this.upgrade&&this.transport.pause){debug(\"starting upgrade probes\");for(var i=0,l=this.upgrades.length;i<l;i++){this.probe(this.upgrades[i])}}};Socket.prototype.onPacket=function(packet){if(\"opening\"==this.readyState||\"open\"==this.readyState){debug('socket receive: type \"%s\", data \"%s\"',packet.type,packet.data);this.emit(\"packet\",packet);this.emit(\"heartbeat\");switch(packet.type){case\"open\":this.onHandshake(parsejson(packet.data));break;case\"pong\":this.setPing();this.emit(\"pong\");break;case\"error\":var err=new Error(\"server error\");err.code=packet.data;this.onError(err);break;case\"message\":this.emit(\"data\",packet.data);this.emit(\"message\",packet.data);break}}else{debug('packet received with socket readyState \"%s\"',this.readyState)}};Socket.prototype.onHandshake=function(data){this.emit(\"handshake\",data);this.id=data.sid;this.transport.query.sid=data.sid;this.upgrades=this.filterUpgrades(data.upgrades);this.pingInterval=data.pingInterval;this.pingTimeout=data.pingTimeout;this.onOpen();if(\"closed\"==this.readyState)return;this.setPing();this.removeListener(\"heartbeat\",this.onHeartbeat);this.on(\"heartbeat\",this.onHeartbeat)};Socket.prototype.onHeartbeat=function(timeout){clearTimeout(this.pingTimeoutTimer);var self=this;self.pingTimeoutTimer=setTimeout(function(){if(\"closed\"==self.readyState)return;self.onClose(\"ping timeout\")},timeout||self.pingInterval+self.pingTimeout)};Socket.prototype.setPing=function(){var self=this;clearTimeout(self.pingIntervalTimer);self.pingIntervalTimer=setTimeout(function(){debug(\"writing ping packet - expecting pong within %sms\",self.pingTimeout);self.ping();self.onHeartbeat(self.pingTimeout)},self.pingInterval)};Socket.prototype.ping=function(){var self=this;this.sendPacket(\"ping\",function(){self.emit(\"ping\")})};Socket.prototype.onDrain=function(){this.writeBuffer.splice(0,this.prevBufferLen);this.prevBufferLen=0;if(0===this.writeBuffer.length){this.emit(\"drain\")}else{this.flush()}};Socket.prototype.flush=function(){if(\"closed\"!=this.readyState&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){debug(\"flushing %d packets in socket\",this.writeBuffer.length);this.transport.send(this.writeBuffer);this.prevBufferLen=this.writeBuffer.length;this.emit(\"flush\")}};Socket.prototype.write=Socket.prototype.send=function(msg,options,fn){this.sendPacket(\"message\",msg,options,fn);return this};Socket.prototype.sendPacket=function(type,data,options,fn){if(\"function\"==typeof data){fn=data;data=undefined}if(\"function\"==typeof options){fn=options;options=null}if(\"closing\"==this.readyState||\"closed\"==this.readyState){return}options=options||{};options.compress=false!==options.compress;var packet={type:type,data:data,options:options};this.emit(\"packetCreate\",packet);this.writeBuffer.push(packet);if(fn)this.once(\"flush\",fn);this.flush()};Socket.prototype.close=function(){if(\"opening\"==this.readyState||\"open\"==this.readyState){this.readyState=\"closing\";var self=this;if(this.writeBuffer.length){this.once(\"drain\",function(){if(this.upgrading){waitForUpgrade()}else{close()}})}else if(this.upgrading){waitForUpgrade()}else{close()}}function close(){self.onClose(\"forced close\");debug(\"socket closing - telling transport to close\");self.transport.close()}function cleanupAndClose(){self.removeListener(\"upgrade\",cleanupAndClose);self.removeListener(\"upgradeError\",cleanupAndClose);close()}function waitForUpgrade(){self.once(\"upgrade\",cleanupAndClose);self.once(\"upgradeError\",cleanupAndClose)}return this};Socket.prototype.onError=function(err){debug(\"socket error %j\",err);Socket.priorWebsocketSuccess=false;this.emit(\"error\",err);this.onClose(\"transport error\",err)};Socket.prototype.onClose=function(reason,desc){if(\"opening\"==this.readyState||\"open\"==this.readyState||\"closing\"==this.readyState){debug('socket close with reason: \"%s\"',reason);var self=this;clearTimeout(this.pingIntervalTimer);clearTimeout(this.pingTimeoutTimer);this.transport.removeAllListeners(\"close\");this.transport.close();this.transport.removeAllListeners();this.readyState=\"closed\";this.id=null;this.emit(\"close\",reason,desc);self.writeBuffer=[];self.prevBufferLen=0}};Socket.prototype.filterUpgrades=function(upgrades){var filteredUpgrades=[];for(var i=0,j=upgrades.length;i<j;i++){if(~index(this.transports,upgrades[i]))filteredUpgrades.push(upgrades[i])}return filteredUpgrades}}).call(this,typeof self!==\"undefined\"?self:typeof window!==\"undefined\"?window:typeof global!==\"undefined\"?global:{})},{\"./transport\":4,\"./transports\":5,\"component-emitter\":15,debug:17,\"engine.io-parser\":19,indexof:23,parsejson:26,parseqs:27,parseuri:28}],4:[function(_dereq_,module,exports){var parser=_dereq_(\"engine.io-parser\");var Emitter=_dereq_(\"component-emitter\");module.exports=Transport;function Transport(opts){this.path=opts.path;this.hostname=opts.hostname;this.port=opts.port;this.secure=opts.secure;this.query=opts.query;this.timestampParam=opts.timestampParam;this.timestampRequests=opts.timestampRequests;this.readyState=\"\";this.agent=opts.agent||false;this.socket=opts.socket;this.enablesXDR=opts.enablesXDR;this.pfx=opts.pfx;this.key=opts.key;this.passphrase=opts.passphrase;this.cert=opts.cert;this.ca=opts.ca;this.ciphers=opts.ciphers;this.rejectUnauthorized=opts.rejectUnauthorized;this.extraHeaders=opts.extraHeaders}Emitter(Transport.prototype);Transport.prototype.onError=function(msg,desc){var err=new Error(msg);err.type=\"TransportError\";err.description=desc;this.emit(\"error\",err);return this};Transport.prototype.open=function(){if(\"closed\"==this.readyState||\"\"==this.readyState){this.readyState=\"opening\";this.doOpen()}return this};Transport.prototype.close=function(){if(\"opening\"==this.readyState||\"open\"==this.readyState){this.doClose();this.onClose()}return this};Transport.prototype.send=function(packets){if(\"open\"==this.readyState){this.write(packets)}else{throw new Error(\"Transport not open\")}};Transport.prototype.onOpen=function(){this.readyState=\"open\";this.writable=true;this.emit(\"open\")};Transport.prototype.onData=function(data){var packet=parser.decodePacket(data,this.socket.binaryType);this.onPacket(packet)};Transport.prototype.onPacket=function(packet){this.emit(\"packet\",packet)};Transport.prototype.onClose=function(){this.readyState=\"closed\";this.emit(\"close\")}},{\"component-emitter\":15,\"engine.io-parser\":19}],5:[function(_dereq_,module,exports){(function(global){var XMLHttpRequest=_dereq_(\"xmlhttprequest-ssl\");var XHR=_dereq_(\"./polling-xhr\");var JSONP=_dereq_(\"./polling-jsonp\");var websocket=_dereq_(\"./websocket\");exports.polling=polling;exports.websocket=websocket;function polling(opts){var xhr;var xd=false;var xs=false;var jsonp=false!==opts.jsonp;if(global.location){var isSSL=\"https:\"==location.protocol;var port=location.port;if(!port){port=isSSL?443:80}xd=opts.hostname!=location.hostname||port!=opts.port;xs=opts.secure!=isSSL}opts.xdomain=xd;opts.xscheme=xs;xhr=new XMLHttpRequest(opts);if(\"open\"in xhr&&!opts.forceJSONP){return new XHR(opts)}else{if(!jsonp)throw new Error(\"JSONP disabled\");return new JSONP(opts)}}}).call(this,typeof self!==\"undefined\"?self:typeof window!==\"undefined\"?window:typeof global!==\"undefined\"?global:{})},{\"./polling-jsonp\":6,\"./polling-xhr\":7,\"./websocket\":9,\"xmlhttprequest-ssl\":10}],6:[function(_dereq_,module,exports){(function(global){var Polling=_dereq_(\"./polling\");var inherit=_dereq_(\"component-inherit\");module.exports=JSONPPolling;var rNewline=/\\n/g;var rEscapedNewline=/\\\\n/g;var callbacks;var index=0;function empty(){}function JSONPPolling(opts){Polling.call(this,opts);this.query=this.query||{};if(!callbacks){if(!global.___eio)global.___eio=[];callbacks=global.___eio}this.index=callbacks.length;var self=this;callbacks.push(function(msg){self.onData(msg)});this.query.j=this.index;if(global.document&&global.addEventListener){global.addEventListener(\"beforeunload\",function(){if(self.script)self.script.onerror=empty},false)}}inherit(JSONPPolling,Polling);JSONPPolling.prototype.supportsBinary=false;JSONPPolling.prototype.doClose=function(){if(this.script){this.script.parentNode.removeChild(this.script);this.script=null}if(this.form){this.form.parentNode.removeChild(this.form);this.form=null;this.iframe=null}Polling.prototype.doClose.call(this)};JSONPPolling.prototype.doPoll=function(){var self=this;var script=document.createElement(\"script\");if(this.script){this.script.parentNode.removeChild(this.script);this.script=null}script.async=true;script.src=this.uri();script.onerror=function(e){self.onError(\"jsonp poll error\",e)};var insertAt=document.getElementsByTagName(\"script\")[0];if(insertAt){insertAt.parentNode.insertBefore(script,insertAt)}else{(document.head||document.body).appendChild(script)}this.script=script;var isUAgecko=\"undefined\"!=typeof navigator&&/gecko/i.test(navigator.userAgent);if(isUAgecko){setTimeout(function(){var iframe=document.createElement(\"iframe\");document.body.appendChild(iframe);document.body.removeChild(iframe)},100)}};JSONPPolling.prototype.doWrite=function(data,fn){var self=this;if(!this.form){var form=document.createElement(\"form\");var area=document.createElement(\"textarea\");var id=this.iframeId=\"eio_iframe_\"+this.index;var iframe;form.className=\"socketio\";form.style.position=\"absolute\";form.style.top=\"-1000px\";form.style.left=\"-1000px\";form.target=id;form.method=\"POST\";form.setAttribute(\"accept-charset\",\"utf-8\");area.name=\"d\";form.appendChild(area);document.body.appendChild(form);this.form=form;this.area=area}this.form.action=this.uri();function complete(){initIframe();fn()}function initIframe(){if(self.iframe){try{self.form.removeChild(self.iframe)}catch(e){self.onError(\"jsonp polling iframe removal error\",e)}}try{var html='<iframe src=\"javascript:0\" name=\"'+self.iframeId+'\">';iframe=document.createElement(html)}catch(e){iframe=document.createElement(\"iframe\");iframe.name=self.iframeId;iframe.src=\"javascript:0\"}iframe.id=self.iframeId;self.form.appendChild(iframe);self.iframe=iframe}initIframe();data=data.replace(rEscapedNewline,\"\\\\\\n\");this.area.value=data.replace(rNewline,\"\\\\n\");try{this.form.submit()}catch(e){}if(this.iframe.attachEvent){this.iframe.onreadystatechange=function(){if(self.iframe.readyState==\"complete\"){complete()}}}else{this.iframe.onload=complete}}}).call(this,typeof self!==\"undefined\"?self:typeof window!==\"undefined\"?window:typeof global!==\"undefined\"?global:{})},{\"./polling\":8,\"component-inherit\":16}],7:[function(_dereq_,module,exports){(function(global){var XMLHttpRequest=_dereq_(\"xmlhttprequest-ssl\");var Polling=_dereq_(\"./polling\");var Emitter=_dereq_(\"component-emitter\");var inherit=_dereq_(\"component-inherit\");var debug=_dereq_(\"debug\")(\"engine.io-client:polling-xhr\");module.exports=XHR;module.exports.Request=Request;function empty(){}function XHR(opts){Polling.call(this,opts);if(global.location){var isSSL=\"https:\"==location.protocol;var port=location.port;if(!port){port=isSSL?443:80}this.xd=opts.hostname!=global.location.hostname||port!=opts.port;this.xs=opts.secure!=isSSL}else{this.extraHeaders=opts.extraHeaders}}inherit(XHR,Polling);XHR.prototype.supportsBinary=true;XHR.prototype.request=function(opts){opts=opts||{};opts.uri=this.uri();opts.xd=this.xd;opts.xs=this.xs;opts.agent=this.agent||false;opts.supportsBinary=this.supportsBinary;opts.enablesXDR=this.enablesXDR;opts.pfx=this.pfx;opts.key=this.key;opts.passphrase=this.passphrase;opts.cert=this.cert;opts.ca=this.ca;opts.ciphers=this.ciphers;opts.rejectUnauthorized=this.rejectUnauthorized;opts.extraHeaders=this.extraHeaders;return new Request(opts)};XHR.prototype.doWrite=function(data,fn){var isBinary=typeof data!==\"string\"&&data!==undefined;var req=this.request({method:\"POST\",data:data,isBinary:isBinary});var self=this;req.on(\"success\",fn);req.on(\"error\",function(err){self.onError(\"xhr post error\",err)});this.sendXhr=req};XHR.prototype.doPoll=function(){debug(\"xhr poll\");var req=this.request();var self=this;req.on(\"data\",function(data){self.onData(data)});req.on(\"error\",function(err){self.onError(\"xhr poll error\",err)});this.pollXhr=req};function Request(opts){this.method=opts.method||\"GET\";this.uri=opts.uri;this.xd=!!opts.xd;this.xs=!!opts.xs;this.async=false!==opts.async;this.data=undefined!=opts.data?opts.data:null;this.agent=opts.agent;this.isBinary=opts.isBinary;this.supportsBinary=opts.supportsBinary;this.enablesXDR=opts.enablesXDR;this.pfx=opts.pfx;this.key=opts.key;this.passphrase=opts.passphrase;this.cert=opts.cert;this.ca=opts.ca;this.ciphers=opts.ciphers;this.rejectUnauthorized=opts.rejectUnauthorized;this.extraHeaders=opts.extraHeaders;this.create()}Emitter(Request.prototype);Request.prototype.create=function(){var opts={agent:this.agent,xdomain:this.xd,xscheme:this.xs,enablesXDR:this.enablesXDR};opts.pfx=this.pfx;opts.key=this.key;opts.passphrase=this.passphrase;opts.cert=this.cert;opts.ca=this.ca;opts.ciphers=this.ciphers;opts.rejectUnauthorized=this.rejectUnauthorized;var xhr=this.xhr=new XMLHttpRequest(opts);var self=this;try{debug(\"xhr open %s: %s\",this.method,this.uri);xhr.open(this.method,this.uri,this.async);try{if(this.extraHeaders){xhr.setDisableHeaderCheck(true);for(var i in this.extraHeaders){if(this.extraHeaders.hasOwnProperty(i)){xhr.setRequestHeader(i,this.extraHeaders[i])}}}}catch(e){}if(this.supportsBinary){xhr.responseType=\"arraybuffer\"}if(\"POST\"==this.method){try{if(this.isBinary){xhr.setRequestHeader(\"Content-type\",\"application/octet-stream\")}else{xhr.setRequestHeader(\"Content-type\",\"text/plain;charset=UTF-8\")}}catch(e){}}if(\"withCredentials\"in xhr){xhr.withCredentials=true}if(this.hasXDR()){xhr.onload=function(){self.onLoad()};xhr.onerror=function(){self.onError(xhr.responseText)}}else{xhr.onreadystatechange=function(){if(4!=xhr.readyState)return;if(200==xhr.status||1223==xhr.status){self.onLoad()}else{setTimeout(function(){self.onError(xhr.status)},0)}}}debug(\"xhr data %s\",this.data);xhr.send(this.data)}catch(e){setTimeout(function(){self.onError(e)},0);return}if(global.document){this.index=Request.requestsCount++;Request.requests[this.index]=this}};Request.prototype.onSuccess=function(){this.emit(\"success\");this.cleanup()};Request.prototype.onData=function(data){this.emit(\"data\",data);this.onSuccess()};Request.prototype.onError=function(err){this.emit(\"error\",err);this.cleanup(true)};Request.prototype.cleanup=function(fromError){if(\"undefined\"==typeof this.xhr||null===this.xhr){return}if(this.hasXDR()){this.xhr.onload=this.xhr.onerror=empty}else{this.xhr.onreadystatechange=empty}if(fromError){try{this.xhr.abort()}catch(e){}}if(global.document){delete Request.requests[this.index]}this.xhr=null};Request.prototype.onLoad=function(){var data;try{var contentType;try{contentType=this.xhr.getResponseHeader(\"Content-Type\").split(\";\")[0]}catch(e){}if(contentType===\"application/octet-stream\"){data=this.xhr.response}else{if(!this.supportsBinary){data=this.xhr.responseText}else{try{data=String.fromCharCode.apply(null,new Uint8Array(this.xhr.response))}catch(e){var ui8Arr=new Uint8Array(this.xhr.response);var dataArray=[];for(var idx=0,length=ui8Arr.length;idx<length;idx++){dataArray.push(ui8Arr[idx])}data=String.fromCharCode.apply(null,dataArray)}}}}catch(e){this.onError(e)}if(null!=data){this.onData(data)}};Request.prototype.hasXDR=function(){return\"undefined\"!==typeof global.XDomainRequest&&!this.xs&&this.enablesXDR};Request.prototype.abort=function(){this.cleanup()};if(global.document){Request.requestsCount=0;Request.requests={};if(global.attachEvent){global.attachEvent(\"onunload\",unloadHandler)}else if(global.addEventListener){global.addEventListener(\"beforeunload\",unloadHandler,false)}}function unloadHandler(){for(var i in Request.requests){if(Request.requests.hasOwnProperty(i)){Request.requests[i].abort()}}}}).call(this,typeof self!==\"undefined\"?self:typeof window!==\"undefined\"?window:typeof global!==\"undefined\"?global:{})},{\"./polling\":8,\"component-emitter\":15,\"component-inherit\":16,debug:17,\"xmlhttprequest-ssl\":10}],8:[function(_dereq_,module,exports){var Transport=_dereq_(\"../transport\");var parseqs=_dereq_(\"parseqs\");var parser=_dereq_(\"engine.io-parser\");var inherit=_dereq_(\"component-inherit\");var yeast=_dereq_(\"yeast\");var debug=_dereq_(\"debug\")(\"engine.io-client:polling\");module.exports=Polling;var hasXHR2=function(){var XMLHttpRequest=_dereq_(\"xmlhttprequest-ssl\");var xhr=new XMLHttpRequest({xdomain:false});return null!=xhr.responseType}();function Polling(opts){var forceBase64=opts&&opts.forceBase64;if(!hasXHR2||forceBase64){this.supportsBinary=false}Transport.call(this,opts)}inherit(Polling,Transport);Polling.prototype.name=\"polling\";Polling.prototype.doOpen=function(){this.poll()};Polling.prototype.pause=function(onPause){var pending=0;var self=this;this.readyState=\"pausing\";function pause(){debug(\"paused\");self.readyState=\"paused\";onPause()}if(this.polling||!this.writable){var total=0;if(this.polling){debug(\"we are currently polling - waiting to pause\");total++;this.once(\"pollComplete\",function(){debug(\"pre-pause polling complete\");--total||pause()})}if(!this.writable){debug(\"we are currently writing - waiting to pause\");total++;this.once(\"drain\",function(){debug(\"pre-pause writing complete\");--total||pause()})}}else{pause()}};Polling.prototype.poll=function(){debug(\"polling\");this.polling=true;this.doPoll();this.emit(\"poll\")};Polling.prototype.onData=function(data){var self=this;debug(\"polling got data %s\",data);var callback=function(packet,index,total){if(\"opening\"==self.readyState){self.onOpen()}if(\"close\"==packet.type){self.onClose();return false}self.onPacket(packet)};parser.decodePayload(data,this.socket.binaryType,callback);if(\"closed\"!=this.readyState){this.polling=false;this.emit(\"pollComplete\");if(\"open\"==this.readyState){this.poll()}else{debug('ignoring poll - transport state \"%s\"',this.readyState)}}};Polling.prototype.doClose=function(){var self=this;function close(){debug(\"writing close packet\");self.write([{type:\"close\"}])}if(\"open\"==this.readyState){debug(\"transport open - closing\");close()}else{debug(\"transport not open - deferring close\");this.once(\"open\",close)}};Polling.prototype.write=function(packets){var self=this;this.writable=false;var callbackfn=function(){self.writable=true;self.emit(\"drain\")};var self=this;parser.encodePayload(packets,this.supportsBinary,function(data){self.doWrite(data,callbackfn)})};Polling.prototype.uri=function(){var query=this.query||{};var schema=this.secure?\"https\":\"http\";var port=\"\";if(false!==this.timestampRequests){query[this.timestampParam]=yeast()}if(!this.supportsBinary&&!query.sid){query.b64=1}query=parseqs.encode(query);if(this.port&&(\"https\"==schema&&this.port!=443||\"http\"==schema&&this.port!=80)){port=\":\"+this.port}if(query.length){query=\"?\"+query}var ipv6=this.hostname.indexOf(\":\")!==-1;return schema+\"://\"+(ipv6?\"[\"+this.hostname+\"]\":this.hostname)+port+this.path+query}},{\"../transport\":4,\"component-inherit\":16,debug:17,\"engine.io-parser\":19,parseqs:27,\"xmlhttprequest-ssl\":10,yeast:30}],9:[function(_dereq_,module,exports){(function(global){var Transport=_dereq_(\"../transport\");var parser=_dereq_(\"engine.io-parser\");var parseqs=_dereq_(\"parseqs\");var inherit=_dereq_(\"component-inherit\");var yeast=_dereq_(\"yeast\");var debug=_dereq_(\"debug\")(\"engine.io-client:websocket\");var BrowserWebSocket=global.WebSocket||global.MozWebSocket;var WebSocket=BrowserWebSocket;if(!WebSocket&&typeof window===\"undefined\"){try{WebSocket=_dereq_(\"ws\")}catch(e){}}module.exports=WS;function WS(opts){var forceBase64=opts&&opts.forceBase64;if(forceBase64){this.supportsBinary=false}this.perMessageDeflate=opts.perMessageDeflate;Transport.call(this,opts)}inherit(WS,Transport);WS.prototype.name=\"websocket\";WS.prototype.supportsBinary=true;WS.prototype.doOpen=function(){if(!this.check()){return}var self=this;var uri=this.uri();var protocols=void 0;var opts={agent:this.agent,perMessageDeflate:this.perMessageDeflate};opts.pfx=this.pfx;opts.key=this.key;opts.passphrase=this.passphrase;opts.cert=this.cert;opts.ca=this.ca;opts.ciphers=this.ciphers;opts.rejectUnauthorized=this.rejectUnauthorized;if(this.extraHeaders){opts.headers=this.extraHeaders}this.ws=BrowserWebSocket?new WebSocket(uri):new WebSocket(uri,protocols,opts);if(this.ws.binaryType===undefined){this.supportsBinary=false}if(this.ws.supports&&this.ws.supports.binary){this.supportsBinary=true;this.ws.binaryType=\"buffer\"}else{this.ws.binaryType=\"arraybuffer\"}this.addEventListeners()};WS.prototype.addEventListeners=function(){var self=this;this.ws.onopen=function(){self.onOpen()};this.ws.onclose=function(){self.onClose()};this.ws.onmessage=function(ev){self.onData(ev.data)};this.ws.onerror=function(e){self.onError(\"websocket error\",e)}};if(\"undefined\"!=typeof navigator&&/iPad|iPhone|iPod/i.test(navigator.userAgent)){WS.prototype.onData=function(data){var self=this;setTimeout(function(){Transport.prototype.onData.call(self,data)},0)}}WS.prototype.write=function(packets){var self=this;this.writable=false;var total=packets.length;for(var i=0,l=total;i<l;i++){(function(packet){parser.encodePacket(packet,self.supportsBinary,function(data){if(!BrowserWebSocket){var opts={};if(packet.options){opts.compress=packet.options.compress}if(self.perMessageDeflate){var len=\"string\"==typeof data?global.Buffer.byteLength(data):data.length;if(len<self.perMessageDeflate.threshold){opts.compress=false}}}try{if(BrowserWebSocket){self.ws.send(data)}else{self.ws.send(data,opts)}}catch(e){debug(\"websocket closed before onclose event\")}--total||done()})})(packets[i])}function done(){self.emit(\"flush\");setTimeout(function(){self.writable=true;self.emit(\"drain\")},0)}};WS.prototype.onClose=function(){Transport.prototype.onClose.call(this)};WS.prototype.doClose=function(){if(typeof this.ws!==\"undefined\"){this.ws.close()}};WS.prototype.uri=function(){var query=this.query||{};var schema=this.secure?\"wss\":\"ws\";var port=\"\";if(this.port&&(\"wss\"==schema&&this.port!=443||\"ws\"==schema&&this.port!=80)){port=\":\"+this.port}if(this.timestampRequests){query[this.timestampParam]=yeast()}if(!this.supportsBinary){query.b64=1}query=parseqs.encode(query);if(query.length){query=\"?\"+query}var ipv6=this.hostname.indexOf(\":\")!==-1;return schema+\"://\"+(ipv6?\"[\"+this.hostname+\"]\":this.hostname)+port+this.path+query};WS.prototype.check=function(){return!!WebSocket&&!(\"__initialize\"in WebSocket&&this.name===WS.prototype.name)}}).call(this,typeof self!==\"undefined\"?self:typeof window!==\"undefined\"?window:typeof global!==\"undefined\"?global:{})},{\"../transport\":4,\"component-inherit\":16,debug:17,\"engine.io-parser\":19,parseqs:27,ws:undefined,yeast:30}],10:[function(_dereq_,module,exports){var hasCORS=_dereq_(\"has-cors\");module.exports=function(opts){var xdomain=opts.xdomain;var xscheme=opts.xscheme;var enablesXDR=opts.enablesXDR;try{if(\"undefined\"!=typeof XMLHttpRequest&&(!xdomain||hasCORS)){return new XMLHttpRequest}}catch(e){}try{if(\"undefined\"!=typeof XDomainRequest&&!xscheme&&enablesXDR){return new XDomainRequest}}catch(e){}if(!xdomain){try{return new ActiveXObject(\"Microsoft.XMLHTTP\")}catch(e){}}}},{\"has-cors\":22}],11:[function(_dereq_,module,exports){module.exports=after;function after(count,callback,err_cb){var bail=false;err_cb=err_cb||noop;proxy.count=count;return count===0?callback():proxy;function proxy(err,result){if(proxy.count<=0){throw new Error(\"after called too many times\")}--proxy.count;if(err){bail=true;callback(err);callback=err_cb}else if(proxy.count===0&&!bail){callback(null,result)}}}function noop(){}},{}],12:[function(_dereq_,module,exports){module.exports=function(arraybuffer,start,end){var bytes=arraybuffer.byteLength;start=start||0;end=end||bytes;if(arraybuffer.slice){return arraybuffer.slice(start,end)}if(start<0){start+=bytes}if(end<0){end+=bytes}if(end>bytes){end=bytes}if(start>=bytes||start>=end||bytes===0){return new ArrayBuffer(0)}var abv=new Uint8Array(arraybuffer);var result=new Uint8Array(end-start);for(var i=start,ii=0;i<end;i++,ii++){result[ii]=abv[i]}return result.buffer}},{}],13:[function(_dereq_,module,exports){(function(chars){\"use strict\";exports.encode=function(arraybuffer){var bytes=new Uint8Array(arraybuffer),i,len=bytes.length,base64=\"\";for(i=0;i<len;i+=3){base64+=chars[bytes[i]>>2];\r\nbase64+=chars[(bytes[i]&3)<<4|bytes[i+1]>>4];base64+=chars[(bytes[i+1]&15)<<2|bytes[i+2]>>6];base64+=chars[bytes[i+2]&63]}if(len%3===2){base64=base64.substring(0,base64.length-1)+\"=\"}else if(len%3===1){base64=base64.substring(0,base64.length-2)+\"==\"}return base64};exports.decode=function(base64){var bufferLength=base64.length*.75,len=base64.length,i,p=0,encoded1,encoded2,encoded3,encoded4;if(base64[base64.length-1]===\"=\"){bufferLength--;if(base64[base64.length-2]===\"=\"){bufferLength--}}var arraybuffer=new ArrayBuffer(bufferLength),bytes=new Uint8Array(arraybuffer);for(i=0;i<len;i+=4){encoded1=chars.indexOf(base64[i]);encoded2=chars.indexOf(base64[i+1]);encoded3=chars.indexOf(base64[i+2]);encoded4=chars.indexOf(base64[i+3]);bytes[p++]=encoded1<<2|encoded2>>4;bytes[p++]=(encoded2&15)<<4|encoded3>>2;bytes[p++]=(encoded3&3)<<6|encoded4&63}return arraybuffer}})(\"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\")},{}],14:[function(_dereq_,module,exports){(function(global){var BlobBuilder=global.BlobBuilder||global.WebKitBlobBuilder||global.MSBlobBuilder||global.MozBlobBuilder;var blobSupported=function(){try{var a=new Blob([\"hi\"]);return a.size===2}catch(e){return false}}();var blobSupportsArrayBufferView=blobSupported&&function(){try{var b=new Blob([new Uint8Array([1,2])]);return b.size===2}catch(e){return false}}();var blobBuilderSupported=BlobBuilder&&BlobBuilder.prototype.append&&BlobBuilder.prototype.getBlob;function mapArrayBufferViews(ary){for(var i=0;i<ary.length;i++){var chunk=ary[i];if(chunk.buffer instanceof ArrayBuffer){var buf=chunk.buffer;if(chunk.byteLength!==buf.byteLength){var copy=new Uint8Array(chunk.byteLength);copy.set(new Uint8Array(buf,chunk.byteOffset,chunk.byteLength));buf=copy.buffer}ary[i]=buf}}}function BlobBuilderConstructor(ary,options){options=options||{};var bb=new BlobBuilder;mapArrayBufferViews(ary);for(var i=0;i<ary.length;i++){bb.append(ary[i])}return options.type?bb.getBlob(options.type):bb.getBlob()}function BlobConstructor(ary,options){mapArrayBufferViews(ary);return new Blob(ary,options||{})}module.exports=function(){if(blobSupported){return blobSupportsArrayBufferView?global.Blob:BlobConstructor}else if(blobBuilderSupported){return BlobBuilderConstructor}else{return undefined}}()}).call(this,typeof self!==\"undefined\"?self:typeof window!==\"undefined\"?window:typeof global!==\"undefined\"?global:{})},{}],15:[function(_dereq_,module,exports){module.exports=Emitter;function Emitter(obj){if(obj)return mixin(obj)}function mixin(obj){for(var key in Emitter.prototype){obj[key]=Emitter.prototype[key]}return obj}Emitter.prototype.on=Emitter.prototype.addEventListener=function(event,fn){this._callbacks=this._callbacks||{};(this._callbacks[event]=this._callbacks[event]||[]).push(fn);return this};Emitter.prototype.once=function(event,fn){var self=this;this._callbacks=this._callbacks||{};function on(){self.off(event,on);fn.apply(this,arguments)}on.fn=fn;this.on(event,on);return this};Emitter.prototype.off=Emitter.prototype.removeListener=Emitter.prototype.removeAllListeners=Emitter.prototype.removeEventListener=function(event,fn){this._callbacks=this._callbacks||{};if(0==arguments.length){this._callbacks={};return this}var callbacks=this._callbacks[event];if(!callbacks)return this;if(1==arguments.length){delete this._callbacks[event];return this}var cb;for(var i=0;i<callbacks.length;i++){cb=callbacks[i];if(cb===fn||cb.fn===fn){callbacks.splice(i,1);break}}return this};Emitter.prototype.emit=function(event){this._callbacks=this._callbacks||{};var args=[].slice.call(arguments,1),callbacks=this._callbacks[event];if(callbacks){callbacks=callbacks.slice(0);for(var i=0,len=callbacks.length;i<len;++i){callbacks[i].apply(this,args)}}return this};Emitter.prototype.listeners=function(event){this._callbacks=this._callbacks||{};return this._callbacks[event]||[]};Emitter.prototype.hasListeners=function(event){return!!this.listeners(event).length}},{}],16:[function(_dereq_,module,exports){module.exports=function(a,b){var fn=function(){};fn.prototype=b.prototype;a.prototype=new fn;a.prototype.constructor=a}},{}],17:[function(_dereq_,module,exports){exports=module.exports=_dereq_(\"./debug\");exports.log=log;exports.formatArgs=formatArgs;exports.save=save;exports.load=load;exports.useColors=useColors;exports.storage=\"undefined\"!=typeof chrome&&\"undefined\"!=typeof chrome.storage?chrome.storage.local:localstorage();exports.colors=[\"lightseagreen\",\"forestgreen\",\"goldenrod\",\"dodgerblue\",\"darkorchid\",\"crimson\"];function useColors(){return\"WebkitAppearance\"in document.documentElement.style||window.console&&(console.firebug||console.exception&&console.table)||navigator.userAgent.toLowerCase().match(/firefox\\/(\\d+)/)&&parseInt(RegExp.$1,10)>=31}exports.formatters.j=function(v){return JSON.stringify(v)};function formatArgs(){var args=arguments;var useColors=this.useColors;args[0]=(useColors?\"%c\":\"\")+this.namespace+(useColors?\" %c\":\" \")+args[0]+(useColors?\"%c \":\" \")+\"+\"+exports.humanize(this.diff);if(!useColors)return args;var c=\"color: \"+this.color;args=[args[0],c,\"color: inherit\"].concat(Array.prototype.slice.call(args,1));var index=0;var lastC=0;args[0].replace(/%[a-z%]/g,function(match){if(\"%%\"===match)return;index++;if(\"%c\"===match){lastC=index}});args.splice(lastC,0,c);return args}function log(){return\"object\"===typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function save(namespaces){try{if(null==namespaces){exports.storage.removeItem(\"debug\")}else{exports.storage.debug=namespaces}}catch(e){}}function load(){var r;try{r=exports.storage.debug}catch(e){}return r}exports.enable(load());function localstorage(){try{return window.localStorage}catch(e){}}},{\"./debug\":18}],18:[function(_dereq_,module,exports){exports=module.exports=debug;exports.coerce=coerce;exports.disable=disable;exports.enable=enable;exports.enabled=enabled;exports.humanize=_dereq_(\"ms\");exports.names=[];exports.skips=[];exports.formatters={};var prevColor=0;var prevTime;function selectColor(){return exports.colors[prevColor++%exports.colors.length]}function debug(namespace){function disabled(){}disabled.enabled=false;function enabled(){var self=enabled;var curr=+new Date;var ms=curr-(prevTime||curr);self.diff=ms;self.prev=prevTime;self.curr=curr;prevTime=curr;if(null==self.useColors)self.useColors=exports.useColors();if(null==self.color&&self.useColors)self.color=selectColor();var args=Array.prototype.slice.call(arguments);args[0]=exports.coerce(args[0]);if(\"string\"!==typeof args[0]){args=[\"%o\"].concat(args)}var index=0;args[0]=args[0].replace(/%([a-z%])/g,function(match,format){if(match===\"%%\")return match;index++;var formatter=exports.formatters[format];if(\"function\"===typeof formatter){var val=args[index];match=formatter.call(self,val);args.splice(index,1);index--}return match});if(\"function\"===typeof exports.formatArgs){args=exports.formatArgs.apply(self,args)}var logFn=enabled.log||exports.log||console.log.bind(console);logFn.apply(self,args)}enabled.enabled=true;var fn=exports.enabled(namespace)?enabled:disabled;fn.namespace=namespace;return fn}function enable(namespaces){exports.save(namespaces);var split=(namespaces||\"\").split(/[\\s,]+/);var len=split.length;for(var i=0;i<len;i++){if(!split[i])continue;namespaces=split[i].replace(/\\*/g,\".*?\");if(namespaces[0]===\"-\"){exports.skips.push(new RegExp(\"^\"+namespaces.substr(1)+\"$\"))}else{exports.names.push(new RegExp(\"^\"+namespaces+\"$\"))}}}function disable(){exports.enable(\"\")}function enabled(name){var i,len;for(i=0,len=exports.skips.length;i<len;i++){if(exports.skips[i].test(name)){return false}}for(i=0,len=exports.names.length;i<len;i++){if(exports.names[i].test(name)){return true}}return false}function coerce(val){if(val instanceof Error)return val.stack||val.message;return val}},{ms:25}],19:[function(_dereq_,module,exports){(function(global){var keys=_dereq_(\"./keys\");var hasBinary=_dereq_(\"has-binary\");var sliceBuffer=_dereq_(\"arraybuffer.slice\");var base64encoder=_dereq_(\"base64-arraybuffer\");var after=_dereq_(\"after\");var utf8=_dereq_(\"utf8\");var isAndroid=navigator.userAgent.match(/Android/i);var isPhantomJS=/PhantomJS/i.test(navigator.userAgent);var dontSendBlobs=isAndroid||isPhantomJS;exports.protocol=3;var packets=exports.packets={open:0,close:1,ping:2,pong:3,message:4,upgrade:5,noop:6};var packetslist=keys(packets);var err={type:\"error\",data:\"parser error\"};var Blob=_dereq_(\"blob\");exports.encodePacket=function(packet,supportsBinary,utf8encode,callback){if(\"function\"==typeof supportsBinary){callback=supportsBinary;supportsBinary=false}if(\"function\"==typeof utf8encode){callback=utf8encode;utf8encode=null}var data=packet.data===undefined?undefined:packet.data.buffer||packet.data;if(global.ArrayBuffer&&data instanceof ArrayBuffer){return encodeArrayBuffer(packet,supportsBinary,callback)}else if(Blob&&data instanceof global.Blob){return encodeBlob(packet,supportsBinary,callback)}if(data&&data.base64){return encodeBase64Object(packet,callback)}var encoded=packets[packet.type];if(undefined!==packet.data){encoded+=utf8encode?utf8.encode(String(packet.data)):String(packet.data)}return callback(\"\"+encoded)};function encodeBase64Object(packet,callback){var message=\"b\"+exports.packets[packet.type]+packet.data.data;return callback(message)}function encodeArrayBuffer(packet,supportsBinary,callback){if(!supportsBinary){return exports.encodeBase64Packet(packet,callback)}var data=packet.data;var contentArray=new Uint8Array(data);var resultBuffer=new Uint8Array(1+data.byteLength);resultBuffer[0]=packets[packet.type];for(var i=0;i<contentArray.length;i++){resultBuffer[i+1]=contentArray[i]}return callback(resultBuffer.buffer)}function encodeBlobAsArrayBuffer(packet,supportsBinary,callback){if(!supportsBinary){return exports.encodeBase64Packet(packet,callback)}var fr=new FileReader;fr.onload=function(){packet.data=fr.result;exports.encodePacket(packet,supportsBinary,true,callback)};return fr.readAsArrayBuffer(packet.data)}function encodeBlob(packet,supportsBinary,callback){if(!supportsBinary){return exports.encodeBase64Packet(packet,callback)}if(dontSendBlobs){return encodeBlobAsArrayBuffer(packet,supportsBinary,callback)}var length=new Uint8Array(1);length[0]=packets[packet.type];var blob=new Blob([length.buffer,packet.data]);return callback(blob)}exports.encodeBase64Packet=function(packet,callback){var message=\"b\"+exports.packets[packet.type];if(Blob&&packet.data instanceof global.Blob){var fr=new FileReader;fr.onload=function(){var b64=fr.result.split(\",\")[1];callback(message+b64)};return fr.readAsDataURL(packet.data)}var b64data;try{b64data=String.fromCharCode.apply(null,new Uint8Array(packet.data))}catch(e){var typed=new Uint8Array(packet.data);var basic=new Array(typed.length);for(var i=0;i<typed.length;i++){basic[i]=typed[i]}b64data=String.fromCharCode.apply(null,basic)}message+=global.btoa(b64data);return callback(message)};exports.decodePacket=function(data,binaryType,utf8decode){if(typeof data==\"string\"||data===undefined){if(data.charAt(0)==\"b\"){return exports.decodeBase64Packet(data.substr(1),binaryType)}if(utf8decode){try{data=utf8.decode(data)}catch(e){return err}}var type=data.charAt(0);if(Number(type)!=type||!packetslist[type]){return err}if(data.length>1){return{type:packetslist[type],data:data.substring(1)}}else{return{type:packetslist[type]}}}var asArray=new Uint8Array(data);var type=asArray[0];var rest=sliceBuffer(data,1);if(Blob&&binaryType===\"blob\"){rest=new Blob([rest])}return{type:packetslist[type],data:rest}};exports.decodeBase64Packet=function(msg,binaryType){var type=packetslist[msg.charAt(0)];if(!global.ArrayBuffer){return{type:type,data:{base64:true,data:msg.substr(1)}}}var data=base64encoder.decode(msg.substr(1));if(binaryType===\"blob\"&&Blob){data=new Blob([data])}return{type:type,data:data}};exports.encodePayload=function(packets,supportsBinary,callback){if(typeof supportsBinary==\"function\"){callback=supportsBinary;supportsBinary=null}var isBinary=hasBinary(packets);if(supportsBinary&&isBinary){if(Blob&&!dontSendBlobs){return exports.encodePayloadAsBlob(packets,callback)}return exports.encodePayloadAsArrayBuffer(packets,callback)}if(!packets.length){return callback(\"0:\")}function setLengthHeader(message){return message.length+\":\"+message}function encodeOne(packet,doneCallback){exports.encodePacket(packet,!isBinary?false:supportsBinary,true,function(message){doneCallback(null,setLengthHeader(message))})}map(packets,encodeOne,function(err,results){return callback(results.join(\"\"))})};function map(ary,each,done){var result=new Array(ary.length);var next=after(ary.length,done);var eachWithIndex=function(i,el,cb){each(el,function(error,msg){result[i]=msg;cb(error,result)})};for(var i=0;i<ary.length;i++){eachWithIndex(i,ary[i],next)}}exports.decodePayload=function(data,binaryType,callback){if(typeof data!=\"string\"){return exports.decodePayloadAsBinary(data,binaryType,callback)}if(typeof binaryType===\"function\"){callback=binaryType;binaryType=null}var packet;if(data==\"\"){return callback(err,0,1)}var length=\"\",n,msg;for(var i=0,l=data.length;i<l;i++){var chr=data.charAt(i);if(\":\"!=chr){length+=chr}else{if(\"\"==length||length!=(n=Number(length))){return callback(err,0,1)}msg=data.substr(i+1,n);if(length!=msg.length){return callback(err,0,1)}if(msg.length){packet=exports.decodePacket(msg,binaryType,true);if(err.type==packet.type&&err.data==packet.data){return callback(err,0,1)}var ret=callback(packet,i+n,l);if(false===ret)return}i+=n;length=\"\"}}if(length!=\"\"){return callback(err,0,1)}};exports.encodePayloadAsArrayBuffer=function(packets,callback){if(!packets.length){return callback(new ArrayBuffer(0))}function encodeOne(packet,doneCallback){exports.encodePacket(packet,true,true,function(data){return doneCallback(null,data)})}map(packets,encodeOne,function(err,encodedPackets){var totalLength=encodedPackets.reduce(function(acc,p){var len;if(typeof p===\"string\"){len=p.length}else{len=p.byteLength}return acc+len.toString().length+len+2},0);var resultArray=new Uint8Array(totalLength);var bufferIndex=0;encodedPackets.forEach(function(p){var isString=typeof p===\"string\";var ab=p;if(isString){var view=new Uint8Array(p.length);for(var i=0;i<p.length;i++){view[i]=p.charCodeAt(i)}ab=view.buffer}if(isString){resultArray[bufferIndex++]=0}else{resultArray[bufferIndex++]=1}var lenStr=ab.byteLength.toString();for(var i=0;i<lenStr.length;i++){resultArray[bufferIndex++]=parseInt(lenStr[i])}resultArray[bufferIndex++]=255;var view=new Uint8Array(ab);for(var i=0;i<view.length;i++){resultArray[bufferIndex++]=view[i]}});return callback(resultArray.buffer)})};exports.encodePayloadAsBlob=function(packets,callback){function encodeOne(packet,doneCallback){exports.encodePacket(packet,true,true,function(encoded){var binaryIdentifier=new Uint8Array(1);binaryIdentifier[0]=1;if(typeof encoded===\"string\"){var view=new Uint8Array(encoded.length);for(var i=0;i<encoded.length;i++){view[i]=encoded.charCodeAt(i)}encoded=view.buffer;binaryIdentifier[0]=0}var len=encoded instanceof ArrayBuffer?encoded.byteLength:encoded.size;var lenStr=len.toString();var lengthAry=new Uint8Array(lenStr.length+1);for(var i=0;i<lenStr.length;i++){lengthAry[i]=parseInt(lenStr[i])}lengthAry[lenStr.length]=255;if(Blob){var blob=new Blob([binaryIdentifier.buffer,lengthAry.buffer,encoded]);doneCallback(null,blob)}})}map(packets,encodeOne,function(err,results){return callback(new Blob(results))})};exports.decodePayloadAsBinary=function(data,binaryType,callback){if(typeof binaryType===\"function\"){callback=binaryType;binaryType=null}var bufferTail=data;var buffers=[];var numberTooLong=false;while(bufferTail.byteLength>0){var tailArray=new Uint8Array(bufferTail);var isString=tailArray[0]===0;var msgLength=\"\";for(var i=1;;i++){if(tailArray[i]==255)break;if(msgLength.length>310){numberTooLong=true;break}msgLength+=tailArray[i]}if(numberTooLong)return callback(err,0,1);bufferTail=sliceBuffer(bufferTail,2+msgLength.length);msgLength=parseInt(msgLength);var msg=sliceBuffer(bufferTail,0,msgLength);if(isString){try{msg=String.fromCharCode.apply(null,new Uint8Array(msg))}catch(e){var typed=new Uint8Array(msg);msg=\"\";for(var i=0;i<typed.length;i++){msg+=String.fromCharCode(typed[i])}}}buffers.push(msg);bufferTail=sliceBuffer(bufferTail,msgLength)}var total=buffers.length;buffers.forEach(function(buffer,i){callback(exports.decodePacket(buffer,binaryType,true),i,total)})}}).call(this,typeof self!==\"undefined\"?self:typeof window!==\"undefined\"?window:typeof global!==\"undefined\"?global:{})},{\"./keys\":20,after:11,\"arraybuffer.slice\":12,\"base64-arraybuffer\":13,blob:14,\"has-binary\":21,utf8:29}],20:[function(_dereq_,module,exports){module.exports=Object.keys||function keys(obj){var arr=[];var has=Object.prototype.hasOwnProperty;for(var i in obj){if(has.call(obj,i)){arr.push(i)}}return arr}},{}],21:[function(_dereq_,module,exports){(function(global){var isArray=_dereq_(\"isarray\");module.exports=hasBinary;function hasBinary(data){function _hasBinary(obj){if(!obj)return false;if(global.Buffer&&global.Buffer.isBuffer(obj)||global.ArrayBuffer&&obj instanceof ArrayBuffer||global.Blob&&obj instanceof Blob||global.File&&obj instanceof File){return true}if(isArray(obj)){for(var i=0;i<obj.length;i++){if(_hasBinary(obj[i])){return true}}}else if(obj&&\"object\"==typeof obj){if(obj.toJSON){obj=obj.toJSON()}for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)&&_hasBinary(obj[key])){return true}}}return false}return _hasBinary(data)}}).call(this,typeof self!==\"undefined\"?self:typeof window!==\"undefined\"?window:typeof global!==\"undefined\"?global:{})},{isarray:24}],22:[function(_dereq_,module,exports){try{module.exports=typeof XMLHttpRequest!==\"undefined\"&&\"withCredentials\"in new XMLHttpRequest}catch(err){module.exports=false}},{}],23:[function(_dereq_,module,exports){var indexOf=[].indexOf;module.exports=function(arr,obj){if(indexOf)return arr.indexOf(obj);for(var i=0;i<arr.length;++i){if(arr[i]===obj)return i}return-1}},{}],24:[function(_dereq_,module,exports){module.exports=Array.isArray||function(arr){return Object.prototype.toString.call(arr)==\"[object Array]\"}},{}],25:[function(_dereq_,module,exports){var s=1e3;var m=s*60;var h=m*60;var d=h*24;var y=d*365.25;module.exports=function(val,options){options=options||{};if(\"string\"==typeof val)return parse(val);return options.long?long(val):short(val)};function parse(str){str=\"\"+str;if(str.length>1e4)return;var match=/^((?:\\d+)?\\.?\\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);if(!match)return;var n=parseFloat(match[1]);var type=(match[2]||\"ms\").toLowerCase();switch(type){case\"years\":case\"year\":case\"yrs\":case\"yr\":case\"y\":return n*y;case\"days\":case\"day\":case\"d\":return n*d;case\"hours\":case\"hour\":case\"hrs\":case\"hr\":case\"h\":return n*h;case\"minutes\":case\"minute\":case\"mins\":case\"min\":case\"m\":return n*m;case\"seconds\":case\"second\":case\"secs\":case\"sec\":case\"s\":return n*s;case\"milliseconds\":case\"millisecond\":case\"msecs\":case\"msec\":case\"ms\":return n}}function short(ms){if(ms>=d)return Math.round(ms/d)+\"d\";if(ms>=h)return Math.round(ms/h)+\"h\";if(ms>=m)return Math.round(ms/m)+\"m\";if(ms>=s)return Math.round(ms/s)+\"s\";return ms+\"ms\"}function long(ms){return plural(ms,d,\"day\")||plural(ms,h,\"hour\")||plural(ms,m,\"minute\")||plural(ms,s,\"second\")||ms+\" ms\"}function plural(ms,n,name){if(ms<n)return;if(ms<n*1.5)return Math.floor(ms/n)+\" \"+name;return Math.ceil(ms/n)+\" \"+name+\"s\"}},{}],26:[function(_dereq_,module,exports){(function(global){var rvalidchars=/^[\\],:{}\\s]*$/;var rvalidescape=/\\\\(?:[\"\\\\\\/bfnrt]|u[0-9a-fA-F]{4})/g;var rvalidtokens=/\"[^\"\\\\\\n\\r]*\"|true|false|null|-?\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?/g;var rvalidbraces=/(?:^|:|,)(?:\\s*\\[)+/g;var rtrimLeft=/^\\s+/;var rtrimRight=/\\s+$/;module.exports=function parsejson(data){if(\"string\"!=typeof data||!data){return null}data=data.replace(rtrimLeft,\"\").replace(rtrimRight,\"\");if(global.JSON&&JSON.parse){return JSON.parse(data)}if(rvalidchars.test(data.replace(rvalidescape,\"@\").replace(rvalidtokens,\"]\").replace(rvalidbraces,\"\"))){return new Function(\"return \"+data)()}}}).call(this,typeof self!==\"undefined\"?self:typeof window!==\"undefined\"?window:typeof global!==\"undefined\"?global:{})},{}],27:[function(_dereq_,module,exports){exports.encode=function(obj){var str=\"\";for(var i in obj){if(obj.hasOwnProperty(i)){if(str.length)str+=\"&\";str+=encodeURIComponent(i)+\"=\"+encodeURIComponent(obj[i])}}return str};exports.decode=function(qs){var qry={};var pairs=qs.split(\"&\");for(var i=0,l=pairs.length;i<l;i++){var pair=pairs[i].split(\"=\");qry[decodeURIComponent(pair[0])]=decodeURIComponent(pair[1])}return qry}},{}],28:[function(_dereq_,module,exports){var re=/^(?:(?![^:@]+:[^:@\\/]*@)(http|https|ws|wss):\\/\\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\\/?#]*)(?::(\\d*))?)(((\\/(?:[^?#](?![^?#\\/]*\\.[^?#\\/.]+(?:[?#]|$)))*\\/?)?([^?#\\/]*))(?:\\?([^#]*))?(?:#(.*))?)/;var parts=[\"source\",\"protocol\",\"authority\",\"userInfo\",\"user\",\"password\",\"host\",\"port\",\"relative\",\"path\",\"directory\",\"file\",\"query\",\"anchor\"];module.exports=function parseuri(str){var src=str,b=str.indexOf(\"[\"),e=str.indexOf(\"]\");if(b!=-1&&e!=-1){str=str.substring(0,b)+str.substring(b,e).replace(/:/g,\";\")+str.substring(e,str.length)}var m=re.exec(str||\"\"),uri={},i=14;while(i--){uri[parts[i]]=m[i]||\"\"}if(b!=-1&&e!=-1){uri.source=src;uri.host=uri.host.substring(1,uri.host.length-1).replace(/;/g,\":\");uri.authority=uri.authority.replace(\"[\",\"\").replace(\"]\",\"\").replace(/;/g,\":\");uri.ipv6uri=true}return uri}},{}],29:[function(_dereq_,module,exports){(function(global){(function(root){var freeExports=typeof exports==\"object\"&&exports;var freeModule=typeof module==\"object\"&&module&&module.exports==freeExports&&module;var freeGlobal=typeof global==\"object\"&&global;if(freeGlobal.global===freeGlobal||freeGlobal.window===freeGlobal){root=freeGlobal}var stringFromCharCode=String.fromCharCode;function ucs2decode(string){var output=[];var counter=0;var length=string.length;var value;var extra;while(counter<length){value=string.charCodeAt(counter++);if(value>=55296&&value<=56319&&counter<length){extra=string.charCodeAt(counter++);if((extra&64512)==56320){output.push(((value&1023)<<10)+(extra&1023)+65536)}else{output.push(value);counter--}}else{output.push(value)}}return output}function ucs2encode(array){var length=array.length;var index=-1;var value;var output=\"\";while(++index<length){value=array[index];if(value>65535){value-=65536;output+=stringFromCharCode(value>>>10&1023|55296);value=56320|value&1023}output+=stringFromCharCode(value)}return output}function checkScalarValue(codePoint){if(codePoint>=55296&&codePoint<=57343){throw Error(\"Lone surrogate U+\"+codePoint.toString(16).toUpperCase()+\" is not a scalar value\")}}function createByte(codePoint,shift){return stringFromCharCode(codePoint>>shift&63|128)}function encodeCodePoint(codePoint){if((codePoint&4294967168)==0){return stringFromCharCode(codePoint)}var symbol=\"\";if((codePoint&4294965248)==0){symbol=stringFromCharCode(codePoint>>6&31|192)}else if((codePoint&4294901760)==0){checkScalarValue(codePoint);symbol=stringFromCharCode(codePoint>>12&15|224);symbol+=createByte(codePoint,6)}else if((codePoint&4292870144)==0){symbol=stringFromCharCode(codePoint>>18&7|240);symbol+=createByte(codePoint,12);symbol+=createByte(codePoint,6)}symbol+=stringFromCharCode(codePoint&63|128);return symbol}function utf8encode(string){var codePoints=ucs2decode(string);var length=codePoints.length;var index=-1;var codePoint;var byteString=\"\";while(++index<length){codePoint=codePoints[index];byteString+=encodeCodePoint(codePoint)}return byteString}function readContinuationByte(){if(byteIndex>=byteCount){throw Error(\"Invalid byte index\")}var continuationByte=byteArray[byteIndex]&255;byteIndex++;if((continuationByte&192)==128){return continuationByte&63}throw Error(\"Invalid continuation byte\")}function decodeSymbol(){var byte1;var byte2;var byte3;var byte4;var codePoint;if(byteIndex>byteCount){throw Error(\"Invalid byte index\")}if(byteIndex==byteCount){return false}byte1=byteArray[byteIndex]&255;byteIndex++;if((byte1&128)==0){return byte1}if((byte1&224)==192){var byte2=readContinuationByte();codePoint=(byte1&31)<<6|byte2;if(codePoint>=128){return codePoint}else{throw Error(\"Invalid continuation byte\")}}if((byte1&240)==224){byte2=readContinuationByte();byte3=readContinuationByte();codePoint=(byte1&15)<<12|byte2<<6|byte3;if(codePoint>=2048){checkScalarValue(codePoint);return codePoint}else{throw Error(\"Invalid continuation byte\")}}if((byte1&248)==240){byte2=readContinuationByte();byte3=readContinuationByte();byte4=readContinuationByte();codePoint=(byte1&15)<<18|byte2<<12|byte3<<6|byte4;if(codePoint>=65536&&codePoint<=1114111){return codePoint}}throw Error(\"Invalid UTF-8 detected\")}var byteArray;var byteCount;var byteIndex;function utf8decode(byteString){byteArray=ucs2decode(byteString);byteCount=byteArray.length;byteIndex=0;var codePoints=[];var tmp;while((tmp=decodeSymbol())!==false){codePoints.push(tmp)}return ucs2encode(codePoints)}var utf8={version:\"2.0.0\",encode:utf8encode,decode:utf8decode};if(typeof define==\"function\"&&typeof define.amd==\"object\"&&define.amd){define(function(){return utf8})}else if(freeExports&&!freeExports.nodeType){if(freeModule){freeModule.exports=utf8}else{var object={};var hasOwnProperty=object.hasOwnProperty;for(var key in utf8){hasOwnProperty.call(utf8,key)&&(freeExports[key]=utf8[key])}}}else{root.utf8=utf8}})(this)}).call(this,typeof self!==\"undefined\"?self:typeof window!==\"undefined\"?window:typeof global!==\"undefined\"?global:{})},{}],30:[function(_dereq_,module,exports){\"use strict\";var alphabet=\"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_\".split(\"\"),length=64,map={},seed=0,i=0,prev;function encode(num){var encoded=\"\";do{encoded=alphabet[num%length]+encoded;num=Math.floor(num/length)}while(num>0);return encoded}function decode(str){var decoded=0;for(i=0;i<str.length;i++){decoded=decoded*length+map[str.charAt(i)]}return decoded}function yeast(){var now=encode(+new Date);if(now!==prev)return seed=0,prev=now;return now+\".\"+encode(seed++)}for(;i<length;i++)map[alphabet[i]]=i;yeast.encode=encode;yeast.decode=decode;module.exports=yeast},{}],31:[function(_dereq_,module,exports){var url=_dereq_(\"./url\");var parser=_dereq_(\"socket.io-parser\");var Manager=_dereq_(\"./manager\");var debug=_dereq_(\"debug\")(\"socket.io-client\");module.exports=exports=lookup;var cache=exports.managers={};function lookup(uri,opts){if(typeof uri==\"object\"){opts=uri;uri=undefined}opts=opts||{};var parsed=url(uri);var source=parsed.source;var id=parsed.id;var path=parsed.path;var sameNamespace=cache[id]&&path in cache[id].nsps;var newConnection=opts.forceNew||opts[\"force new connection\"]||false===opts.multiplex||sameNamespace;var io;if(newConnection){debug(\"ignoring socket cache for %s\",source);io=Manager(source,opts)}else{if(!cache[id]){debug(\"new io instance for %s\",source);cache[id]=Manager(source,opts)}io=cache[id]}return io.socket(parsed.path)}exports.protocol=parser.protocol;exports.connect=lookup;exports.Manager=_dereq_(\"./manager\");exports.Socket=_dereq_(\"./socket\")},{\"./manager\":32,\"./socket\":34,\"./url\":35,debug:39,\"socket.io-parser\":47}],32:[function(_dereq_,module,exports){var eio=_dereq_(\"engine.io-client\");var Socket=_dereq_(\"./socket\");var Emitter=_dereq_(\"component-emitter\");var parser=_dereq_(\"socket.io-parser\");var on=_dereq_(\"./on\");var bind=_dereq_(\"component-bind\");var debug=_dereq_(\"debug\")(\"socket.io-client:manager\");var indexOf=_dereq_(\"indexof\");var Backoff=_dereq_(\"backo2\");var has=Object.prototype.hasOwnProperty;module.exports=Manager;function Manager(uri,opts){if(!(this instanceof Manager))return new Manager(uri,opts);if(uri&&\"object\"==typeof uri){opts=uri;uri=undefined}opts=opts||{};opts.path=opts.path||\"/socket.io\";this.nsps={};this.subs=[];this.opts=opts;this.reconnection(opts.reconnection!==false);this.reconnectionAttempts(opts.reconnectionAttempts||Infinity);this.reconnectionDelay(opts.reconnectionDelay||1e3);this.reconnectionDelayMax(opts.reconnectionDelayMax||5e3);this.randomizationFactor(opts.randomizationFactor||.5);this.backoff=new Backoff({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()});this.timeout(null==opts.timeout?2e4:opts.timeout);this.readyState=\"closed\";this.uri=uri;this.connecting=[];this.lastPing=null;this.encoding=false;this.packetBuffer=[];this.encoder=new parser.Encoder;this.decoder=new parser.Decoder;this.autoConnect=opts.autoConnect!==false;if(this.autoConnect)this.open()}Manager.prototype.emitAll=function(){this.emit.apply(this,arguments);for(var nsp in this.nsps){if(has.call(this.nsps,nsp)){this.nsps[nsp].emit.apply(this.nsps[nsp],arguments)}}};Manager.prototype.updateSocketIds=function(){for(var nsp in this.nsps){if(has.call(this.nsps,nsp)){this.nsps[nsp].id=this.engine.id}}};Emitter(Manager.prototype);Manager.prototype.reconnection=function(v){if(!arguments.length)return this._reconnection;this._reconnection=!!v;return this};Manager.prototype.reconnectionAttempts=function(v){if(!arguments.length)return this._reconnectionAttempts;this._reconnectionAttempts=v;return this};Manager.prototype.reconnectionDelay=function(v){if(!arguments.length)return this._reconnectionDelay;this._reconnectionDelay=v;this.backoff&&this.backoff.setMin(v);return this};Manager.prototype.randomizationFactor=function(v){if(!arguments.length)return this._randomizationFactor;this._randomizationFactor=v;this.backoff&&this.backoff.setJitter(v);return this};Manager.prototype.reconnectionDelayMax=function(v){if(!arguments.length)return this._reconnectionDelayMax;this._reconnectionDelayMax=v;this.backoff&&this.backoff.setMax(v);return this};Manager.prototype.timeout=function(v){if(!arguments.length)return this._timeout;this._timeout=v;return this};Manager.prototype.maybeReconnectOnOpen=function(){if(!this.reconnecting&&this._reconnection&&this.backoff.attempts===0){this.reconnect()}};Manager.prototype.open=Manager.prototype.connect=function(fn){debug(\"readyState %s\",this.readyState);if(~this.readyState.indexOf(\"open\"))return this;debug(\"opening %s\",this.uri);this.engine=eio(this.uri,this.opts);var socket=this.engine;var self=this;this.readyState=\"opening\";this.skipReconnect=false;var openSub=on(socket,\"open\",function(){self.onopen();fn&&fn()});var errorSub=on(socket,\"error\",function(data){debug(\"connect_error\");self.cleanup();self.readyState=\"closed\";self.emitAll(\"connect_error\",data);if(fn){var err=new Error(\"Connection error\");err.data=data;fn(err)}else{self.maybeReconnectOnOpen()}});if(false!==this._timeout){var timeout=this._timeout;debug(\"connect attempt will timeout after %d\",timeout);var timer=setTimeout(function(){debug(\"connect attempt timed out after %d\",timeout);openSub.destroy();socket.close();socket.emit(\"error\",\"timeout\");self.emitAll(\"connect_timeout\",timeout)},timeout);this.subs.push({destroy:function(){clearTimeout(timer)}})}this.subs.push(openSub);this.subs.push(errorSub);return this};Manager.prototype.onopen=function(){debug(\"open\");this.cleanup();this.readyState=\"open\";this.emit(\"open\");var socket=this.engine;this.subs.push(on(socket,\"data\",bind(this,\"ondata\")));this.subs.push(on(socket,\"ping\",bind(this,\"onping\")));this.subs.push(on(socket,\"pong\",bind(this,\"onpong\")));this.subs.push(on(socket,\"error\",bind(this,\"onerror\")));this.subs.push(on(socket,\"close\",bind(this,\"onclose\")));this.subs.push(on(this.decoder,\"decoded\",bind(this,\"ondecoded\")))};Manager.prototype.onping=function(){this.lastPing=new Date;this.emitAll(\"ping\")};Manager.prototype.onpong=function(){this.emitAll(\"pong\",new Date-this.lastPing)};Manager.prototype.ondata=function(data){this.decoder.add(data)};Manager.prototype.ondecoded=function(packet){this.emit(\"packet\",packet)};Manager.prototype.onerror=function(err){debug(\"error\",err);this.emitAll(\"error\",err)};Manager.prototype.socket=function(nsp){var socket=this.nsps[nsp];if(!socket){socket=new Socket(this,nsp);this.nsps[nsp]=socket;var self=this;socket.on(\"connecting\",onConnecting);\r\nsocket.on(\"connect\",function(){socket.id=self.engine.id});if(this.autoConnect){onConnecting()}}function onConnecting(){if(!~indexOf(self.connecting,socket)){self.connecting.push(socket)}}return socket};Manager.prototype.destroy=function(socket){var index=indexOf(this.connecting,socket);if(~index)this.connecting.splice(index,1);if(this.connecting.length)return;this.close()};Manager.prototype.packet=function(packet){debug(\"writing packet %j\",packet);var self=this;if(!self.encoding){self.encoding=true;this.encoder.encode(packet,function(encodedPackets){for(var i=0;i<encodedPackets.length;i++){self.engine.write(encodedPackets[i],packet.options)}self.encoding=false;self.processPacketQueue()})}else{self.packetBuffer.push(packet)}};Manager.prototype.processPacketQueue=function(){if(this.packetBuffer.length>0&&!this.encoding){var pack=this.packetBuffer.shift();this.packet(pack)}};Manager.prototype.cleanup=function(){debug(\"cleanup\");var sub;while(sub=this.subs.shift())sub.destroy();this.packetBuffer=[];this.encoding=false;this.lastPing=null;this.decoder.destroy()};Manager.prototype.close=Manager.prototype.disconnect=function(){debug(\"disconnect\");this.skipReconnect=true;this.reconnecting=false;if(\"opening\"==this.readyState){this.cleanup()}this.backoff.reset();this.readyState=\"closed\";if(this.engine)this.engine.close()};Manager.prototype.onclose=function(reason){debug(\"onclose\");this.cleanup();this.backoff.reset();this.readyState=\"closed\";this.emit(\"close\",reason);if(this._reconnection&&!this.skipReconnect){this.reconnect()}};Manager.prototype.reconnect=function(){if(this.reconnecting||this.skipReconnect)return this;var self=this;if(this.backoff.attempts>=this._reconnectionAttempts){debug(\"reconnect failed\");this.backoff.reset();this.emitAll(\"reconnect_failed\");this.reconnecting=false}else{var delay=this.backoff.duration();debug(\"will wait %dms before reconnect attempt\",delay);this.reconnecting=true;var timer=setTimeout(function(){if(self.skipReconnect)return;debug(\"attempting reconnect\");self.emitAll(\"reconnect_attempt\",self.backoff.attempts);self.emitAll(\"reconnecting\",self.backoff.attempts);if(self.skipReconnect)return;self.open(function(err){if(err){debug(\"reconnect attempt error\");self.reconnecting=false;self.reconnect();self.emitAll(\"reconnect_error\",err.data)}else{debug(\"reconnect success\");self.onreconnect()}})},delay);this.subs.push({destroy:function(){clearTimeout(timer)}})}};Manager.prototype.onreconnect=function(){var attempt=this.backoff.attempts;this.reconnecting=false;this.backoff.reset();this.updateSocketIds();this.emitAll(\"reconnect\",attempt)}},{\"./on\":33,\"./socket\":34,backo2:36,\"component-bind\":37,\"component-emitter\":38,debug:39,\"engine.io-client\":1,indexof:42,\"socket.io-parser\":47}],33:[function(_dereq_,module,exports){module.exports=on;function on(obj,ev,fn){obj.on(ev,fn);return{destroy:function(){obj.removeListener(ev,fn)}}}},{}],34:[function(_dereq_,module,exports){var parser=_dereq_(\"socket.io-parser\");var Emitter=_dereq_(\"component-emitter\");var toArray=_dereq_(\"to-array\");var on=_dereq_(\"./on\");var bind=_dereq_(\"component-bind\");var debug=_dereq_(\"debug\")(\"socket.io-client:socket\");var hasBin=_dereq_(\"has-binary\");module.exports=exports=Socket;var events={connect:1,connect_error:1,connect_timeout:1,connecting:1,disconnect:1,error:1,reconnect:1,reconnect_attempt:1,reconnect_failed:1,reconnect_error:1,reconnecting:1,ping:1,pong:1};var emit=Emitter.prototype.emit;function Socket(io,nsp){this.io=io;this.nsp=nsp;this.json=this;this.ids=0;this.acks={};this.receiveBuffer=[];this.sendBuffer=[];this.connected=false;this.disconnected=true;if(this.io.autoConnect)this.open()}Emitter(Socket.prototype);Socket.prototype.subEvents=function(){if(this.subs)return;var io=this.io;this.subs=[on(io,\"open\",bind(this,\"onopen\")),on(io,\"packet\",bind(this,\"onpacket\")),on(io,\"close\",bind(this,\"onclose\"))]};Socket.prototype.open=Socket.prototype.connect=function(){if(this.connected)return this;this.subEvents();this.io.open();if(\"open\"==this.io.readyState)this.onopen();this.emit(\"connecting\");return this};Socket.prototype.send=function(){var args=toArray(arguments);args.unshift(\"message\");this.emit.apply(this,args);return this};Socket.prototype.emit=function(ev){if(events.hasOwnProperty(ev)){emit.apply(this,arguments);return this}var args=toArray(arguments);var parserType=parser.EVENT;if(hasBin(args)){parserType=parser.BINARY_EVENT}var packet={type:parserType,data:args};packet.options={};packet.options.compress=!this.flags||false!==this.flags.compress;if(\"function\"==typeof args[args.length-1]){debug(\"emitting packet with ack id %d\",this.ids);this.acks[this.ids]=args.pop();packet.id=this.ids++}if(this.connected){this.packet(packet)}else{this.sendBuffer.push(packet)}delete this.flags;return this};Socket.prototype.packet=function(packet){packet.nsp=this.nsp;this.io.packet(packet)};Socket.prototype.onopen=function(){debug(\"transport is open - connecting\");if(\"/\"!=this.nsp){this.packet({type:parser.CONNECT})}};Socket.prototype.onclose=function(reason){debug(\"close (%s)\",reason);this.connected=false;this.disconnected=true;delete this.id;this.emit(\"disconnect\",reason)};Socket.prototype.onpacket=function(packet){if(packet.nsp!=this.nsp)return;switch(packet.type){case parser.CONNECT:this.onconnect();break;case parser.EVENT:this.onevent(packet);break;case parser.BINARY_EVENT:this.onevent(packet);break;case parser.ACK:this.onack(packet);break;case parser.BINARY_ACK:this.onack(packet);break;case parser.DISCONNECT:this.ondisconnect();break;case parser.ERROR:this.emit(\"error\",packet.data);break}};Socket.prototype.onevent=function(packet){var args=packet.data||[];debug(\"emitting event %j\",args);if(null!=packet.id){debug(\"attaching ack callback to event\");args.push(this.ack(packet.id))}if(this.connected){emit.apply(this,args)}else{this.receiveBuffer.push(args)}};Socket.prototype.ack=function(id){var self=this;var sent=false;return function(){if(sent)return;sent=true;var args=toArray(arguments);debug(\"sending ack %j\",args);var type=hasBin(args)?parser.BINARY_ACK:parser.ACK;self.packet({type:type,id:id,data:args})}};Socket.prototype.onack=function(packet){var ack=this.acks[packet.id];if(\"function\"==typeof ack){debug(\"calling ack %s with %j\",packet.id,packet.data);ack.apply(this,packet.data);delete this.acks[packet.id]}else{debug(\"bad ack %s\",packet.id)}};Socket.prototype.onconnect=function(){this.connected=true;this.disconnected=false;this.emit(\"connect\");this.emitBuffered()};Socket.prototype.emitBuffered=function(){var i;for(i=0;i<this.receiveBuffer.length;i++){emit.apply(this,this.receiveBuffer[i])}this.receiveBuffer=[];for(i=0;i<this.sendBuffer.length;i++){this.packet(this.sendBuffer[i])}this.sendBuffer=[]};Socket.prototype.ondisconnect=function(){debug(\"server disconnect (%s)\",this.nsp);this.destroy();this.onclose(\"io server disconnect\")};Socket.prototype.destroy=function(){if(this.subs){for(var i=0;i<this.subs.length;i++){this.subs[i].destroy()}this.subs=null}this.io.destroy(this)};Socket.prototype.close=Socket.prototype.disconnect=function(){if(this.connected){debug(\"performing disconnect (%s)\",this.nsp);this.packet({type:parser.DISCONNECT})}this.destroy();if(this.connected){this.onclose(\"io client disconnect\")}return this};Socket.prototype.compress=function(compress){this.flags=this.flags||{};this.flags.compress=compress;return this}},{\"./on\":33,\"component-bind\":37,\"component-emitter\":38,debug:39,\"has-binary\":41,\"socket.io-parser\":47,\"to-array\":51}],35:[function(_dereq_,module,exports){(function(global){var parseuri=_dereq_(\"parseuri\");var debug=_dereq_(\"debug\")(\"socket.io-client:url\");module.exports=url;function url(uri,loc){var obj=uri;var loc=loc||global.location;if(null==uri)uri=loc.protocol+\"//\"+loc.host;if(\"string\"==typeof uri){if(\"/\"==uri.charAt(0)){if(\"/\"==uri.charAt(1)){uri=loc.protocol+uri}else{uri=loc.host+uri}}if(!/^(https?|wss?):\\/\\//.test(uri)){debug(\"protocol-less url %s\",uri);if(\"undefined\"!=typeof loc){uri=loc.protocol+\"//\"+uri}else{uri=\"https://\"+uri}}debug(\"parse %s\",uri);obj=parseuri(uri)}if(!obj.port){if(/^(http|ws)$/.test(obj.protocol)){obj.port=\"80\"}else if(/^(http|ws)s$/.test(obj.protocol)){obj.port=\"443\"}}obj.path=obj.path||\"/\";var ipv6=obj.host.indexOf(\":\")!==-1;var host=ipv6?\"[\"+obj.host+\"]\":obj.host;obj.id=obj.protocol+\"://\"+host+\":\"+obj.port;obj.href=obj.protocol+\"://\"+host+(loc&&loc.port==obj.port?\"\":\":\"+obj.port);return obj}}).call(this,typeof self!==\"undefined\"?self:typeof window!==\"undefined\"?window:typeof global!==\"undefined\"?global:{})},{debug:39,parseuri:45}],36:[function(_dereq_,module,exports){module.exports=Backoff;function Backoff(opts){opts=opts||{};this.ms=opts.min||100;this.max=opts.max||1e4;this.factor=opts.factor||2;this.jitter=opts.jitter>0&&opts.jitter<=1?opts.jitter:0;this.attempts=0}Backoff.prototype.duration=function(){var ms=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var rand=Math.random();var deviation=Math.floor(rand*this.jitter*ms);ms=(Math.floor(rand*10)&1)==0?ms-deviation:ms+deviation}return Math.min(ms,this.max)|0};Backoff.prototype.reset=function(){this.attempts=0};Backoff.prototype.setMin=function(min){this.ms=min};Backoff.prototype.setMax=function(max){this.max=max};Backoff.prototype.setJitter=function(jitter){this.jitter=jitter}},{}],37:[function(_dereq_,module,exports){var slice=[].slice;module.exports=function(obj,fn){if(\"string\"==typeof fn)fn=obj[fn];if(\"function\"!=typeof fn)throw new Error(\"bind() requires a function\");var args=slice.call(arguments,2);return function(){return fn.apply(obj,args.concat(slice.call(arguments)))}}},{}],38:[function(_dereq_,module,exports){module.exports=Emitter;function Emitter(obj){if(obj)return mixin(obj)}function mixin(obj){for(var key in Emitter.prototype){obj[key]=Emitter.prototype[key]}return obj}Emitter.prototype.on=Emitter.prototype.addEventListener=function(event,fn){this._callbacks=this._callbacks||{};(this._callbacks[\"$\"+event]=this._callbacks[\"$\"+event]||[]).push(fn);return this};Emitter.prototype.once=function(event,fn){function on(){this.off(event,on);fn.apply(this,arguments)}on.fn=fn;this.on(event,on);return this};Emitter.prototype.off=Emitter.prototype.removeListener=Emitter.prototype.removeAllListeners=Emitter.prototype.removeEventListener=function(event,fn){this._callbacks=this._callbacks||{};if(0==arguments.length){this._callbacks={};return this}var callbacks=this._callbacks[\"$\"+event];if(!callbacks)return this;if(1==arguments.length){delete this._callbacks[\"$\"+event];return this}var cb;for(var i=0;i<callbacks.length;i++){cb=callbacks[i];if(cb===fn||cb.fn===fn){callbacks.splice(i,1);break}}return this};Emitter.prototype.emit=function(event){this._callbacks=this._callbacks||{};var args=[].slice.call(arguments,1),callbacks=this._callbacks[\"$\"+event];if(callbacks){callbacks=callbacks.slice(0);for(var i=0,len=callbacks.length;i<len;++i){callbacks[i].apply(this,args)}}return this};Emitter.prototype.listeners=function(event){this._callbacks=this._callbacks||{};return this._callbacks[\"$\"+event]||[]};Emitter.prototype.hasListeners=function(event){return!!this.listeners(event).length}},{}],39:[function(_dereq_,module,exports){arguments[4][17][0].apply(exports,arguments)},{\"./debug\":40,dup:17}],40:[function(_dereq_,module,exports){arguments[4][18][0].apply(exports,arguments)},{dup:18,ms:44}],41:[function(_dereq_,module,exports){(function(global){var isArray=_dereq_(\"isarray\");module.exports=hasBinary;function hasBinary(data){function _hasBinary(obj){if(!obj)return false;if(global.Buffer&&global.Buffer.isBuffer&&global.Buffer.isBuffer(obj)||global.ArrayBuffer&&obj instanceof ArrayBuffer||global.Blob&&obj instanceof Blob||global.File&&obj instanceof File){return true}if(isArray(obj)){for(var i=0;i<obj.length;i++){if(_hasBinary(obj[i])){return true}}}else if(obj&&\"object\"==typeof obj){if(obj.toJSON&&\"function\"==typeof obj.toJSON){obj=obj.toJSON()}for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)&&_hasBinary(obj[key])){return true}}}return false}return _hasBinary(data)}}).call(this,typeof self!==\"undefined\"?self:typeof window!==\"undefined\"?window:typeof global!==\"undefined\"?global:{})},{isarray:43}],42:[function(_dereq_,module,exports){arguments[4][23][0].apply(exports,arguments)},{dup:23}],43:[function(_dereq_,module,exports){arguments[4][24][0].apply(exports,arguments)},{dup:24}],44:[function(_dereq_,module,exports){arguments[4][25][0].apply(exports,arguments)},{dup:25}],45:[function(_dereq_,module,exports){arguments[4][28][0].apply(exports,arguments)},{dup:28}],46:[function(_dereq_,module,exports){(function(global){var isArray=_dereq_(\"isarray\");var isBuf=_dereq_(\"./is-buffer\");exports.deconstructPacket=function(packet){var buffers=[];var packetData=packet.data;function _deconstructPacket(data){if(!data)return data;if(isBuf(data)){var placeholder={_placeholder:true,num:buffers.length};buffers.push(data);return placeholder}else if(isArray(data)){var newData=new Array(data.length);for(var i=0;i<data.length;i++){newData[i]=_deconstructPacket(data[i])}return newData}else if(\"object\"==typeof data&&!(data instanceof Date)){var newData={};for(var key in data){newData[key]=_deconstructPacket(data[key])}return newData}return data}var pack=packet;pack.data=_deconstructPacket(packetData);pack.attachments=buffers.length;return{packet:pack,buffers:buffers}};exports.reconstructPacket=function(packet,buffers){var curPlaceHolder=0;function _reconstructPacket(data){if(data&&data._placeholder){var buf=buffers[data.num];return buf}else if(isArray(data)){for(var i=0;i<data.length;i++){data[i]=_reconstructPacket(data[i])}return data}else if(data&&\"object\"==typeof data){for(var key in data){data[key]=_reconstructPacket(data[key])}return data}return data}packet.data=_reconstructPacket(packet.data);packet.attachments=undefined;return packet};exports.removeBlobs=function(data,callback){function _removeBlobs(obj,curKey,containingObject){if(!obj)return obj;if(global.Blob&&obj instanceof Blob||global.File&&obj instanceof File){pendingBlobs++;var fileReader=new FileReader;fileReader.onload=function(){if(containingObject){containingObject[curKey]=this.result}else{bloblessData=this.result}if(!--pendingBlobs){callback(bloblessData)}};fileReader.readAsArrayBuffer(obj)}else if(isArray(obj)){for(var i=0;i<obj.length;i++){_removeBlobs(obj[i],i,obj)}}else if(obj&&\"object\"==typeof obj&&!isBuf(obj)){for(var key in obj){_removeBlobs(obj[key],key,obj)}}}var pendingBlobs=0;var bloblessData=data;_removeBlobs(bloblessData);if(!pendingBlobs){callback(bloblessData)}}}).call(this,typeof self!==\"undefined\"?self:typeof window!==\"undefined\"?window:typeof global!==\"undefined\"?global:{})},{\"./is-buffer\":48,isarray:43}],47:[function(_dereq_,module,exports){var debug=_dereq_(\"debug\")(\"socket.io-parser\");var json=_dereq_(\"json3\");var isArray=_dereq_(\"isarray\");var Emitter=_dereq_(\"component-emitter\");var binary=_dereq_(\"./binary\");var isBuf=_dereq_(\"./is-buffer\");exports.protocol=4;exports.types=[\"CONNECT\",\"DISCONNECT\",\"EVENT\",\"BINARY_EVENT\",\"ACK\",\"BINARY_ACK\",\"ERROR\"];exports.CONNECT=0;exports.DISCONNECT=1;exports.EVENT=2;exports.ACK=3;exports.ERROR=4;exports.BINARY_EVENT=5;exports.BINARY_ACK=6;exports.Encoder=Encoder;exports.Decoder=Decoder;function Encoder(){}Encoder.prototype.encode=function(obj,callback){debug(\"encoding packet %j\",obj);if(exports.BINARY_EVENT==obj.type||exports.BINARY_ACK==obj.type){encodeAsBinary(obj,callback)}else{var encoding=encodeAsString(obj);callback([encoding])}};function encodeAsString(obj){var str=\"\";var nsp=false;str+=obj.type;if(exports.BINARY_EVENT==obj.type||exports.BINARY_ACK==obj.type){str+=obj.attachments;str+=\"-\"}if(obj.nsp&&\"/\"!=obj.nsp){nsp=true;str+=obj.nsp}if(null!=obj.id){if(nsp){str+=\",\";nsp=false}str+=obj.id}if(null!=obj.data){if(nsp)str+=\",\";str+=json.stringify(obj.data)}debug(\"encoded %j as %s\",obj,str);return str}function encodeAsBinary(obj,callback){function writeEncoding(bloblessData){var deconstruction=binary.deconstructPacket(bloblessData);var pack=encodeAsString(deconstruction.packet);var buffers=deconstruction.buffers;buffers.unshift(pack);callback(buffers)}binary.removeBlobs(obj,writeEncoding)}function Decoder(){this.reconstructor=null}Emitter(Decoder.prototype);Decoder.prototype.add=function(obj){var packet;if(\"string\"==typeof obj){packet=decodeString(obj);if(exports.BINARY_EVENT==packet.type||exports.BINARY_ACK==packet.type){this.reconstructor=new BinaryReconstructor(packet);if(this.reconstructor.reconPack.attachments===0){this.emit(\"decoded\",packet)}}else{this.emit(\"decoded\",packet)}}else if(isBuf(obj)||obj.base64){if(!this.reconstructor){throw new Error(\"got binary data when not reconstructing a packet\")}else{packet=this.reconstructor.takeBinaryData(obj);if(packet){this.reconstructor=null;this.emit(\"decoded\",packet)}}}else{throw new Error(\"Unknown type: \"+obj)}};function decodeString(str){var p={};var i=0;p.type=Number(str.charAt(0));if(null==exports.types[p.type])return error();if(exports.BINARY_EVENT==p.type||exports.BINARY_ACK==p.type){var buf=\"\";while(str.charAt(++i)!=\"-\"){buf+=str.charAt(i);if(i==str.length)break}if(buf!=Number(buf)||str.charAt(i)!=\"-\"){throw new Error(\"Illegal attachments\")}p.attachments=Number(buf)}if(\"/\"==str.charAt(i+1)){p.nsp=\"\";while(++i){var c=str.charAt(i);if(\",\"==c)break;p.nsp+=c;if(i==str.length)break}}else{p.nsp=\"/\"}var next=str.charAt(i+1);if(\"\"!==next&&Number(next)==next){p.id=\"\";while(++i){var c=str.charAt(i);if(null==c||Number(c)!=c){--i;break}p.id+=str.charAt(i);if(i==str.length)break}p.id=Number(p.id)}if(str.charAt(++i)){try{p.data=json.parse(str.substr(i))}catch(e){return error()}}debug(\"decoded %s as %j\",str,p);return p}Decoder.prototype.destroy=function(){if(this.reconstructor){this.reconstructor.finishedReconstruction()}};function BinaryReconstructor(packet){this.reconPack=packet;this.buffers=[]}BinaryReconstructor.prototype.takeBinaryData=function(binData){this.buffers.push(binData);if(this.buffers.length==this.reconPack.attachments){var packet=binary.reconstructPacket(this.reconPack,this.buffers);this.finishedReconstruction();return packet}return null};BinaryReconstructor.prototype.finishedReconstruction=function(){this.reconPack=null;this.buffers=[]};function error(data){return{type:exports.ERROR,data:\"parser error\"}}},{\"./binary\":46,\"./is-buffer\":48,\"component-emitter\":49,debug:39,isarray:43,json3:50}],48:[function(_dereq_,module,exports){(function(global){module.exports=isBuf;function isBuf(obj){return global.Buffer&&global.Buffer.isBuffer(obj)||global.ArrayBuffer&&obj instanceof ArrayBuffer}}).call(this,typeof self!==\"undefined\"?self:typeof window!==\"undefined\"?window:typeof global!==\"undefined\"?global:{})},{}],49:[function(_dereq_,module,exports){arguments[4][15][0].apply(exports,arguments)},{dup:15}],50:[function(_dereq_,module,exports){(function(global){(function(){var isLoader=typeof define===\"function\"&&define.amd;var objectTypes={\"function\":true,object:true};var freeExports=objectTypes[typeof exports]&&exports&&!exports.nodeType&&exports;var root=objectTypes[typeof window]&&window||this,freeGlobal=freeExports&&objectTypes[typeof module]&&module&&!module.nodeType&&typeof global==\"object\"&&global;if(freeGlobal&&(freeGlobal[\"global\"]===freeGlobal||freeGlobal[\"window\"]===freeGlobal||freeGlobal[\"self\"]===freeGlobal)){root=freeGlobal}function runInContext(context,exports){context||(context=root[\"Object\"]());exports||(exports=root[\"Object\"]());var Number=context[\"Number\"]||root[\"Number\"],String=context[\"String\"]||root[\"String\"],Object=context[\"Object\"]||root[\"Object\"],Date=context[\"Date\"]||root[\"Date\"],SyntaxError=context[\"SyntaxError\"]||root[\"SyntaxError\"],TypeError=context[\"TypeError\"]||root[\"TypeError\"],Math=context[\"Math\"]||root[\"Math\"],nativeJSON=context[\"JSON\"]||root[\"JSON\"];if(typeof nativeJSON==\"object\"&&nativeJSON){exports.stringify=nativeJSON.stringify;exports.parse=nativeJSON.parse}var objectProto=Object.prototype,getClass=objectProto.toString,isProperty,forEach,undef;var isExtended=new Date(-0xc782b5b800cec);try{isExtended=isExtended.getUTCFullYear()==-109252&&isExtended.getUTCMonth()===0&&isExtended.getUTCDate()===1&&isExtended.getUTCHours()==10&&isExtended.getUTCMinutes()==37&&isExtended.getUTCSeconds()==6&&isExtended.getUTCMilliseconds()==708}catch(exception){}function has(name){if(has[name]!==undef){return has[name]}var isSupported;if(name==\"bug-string-char-index\"){isSupported=\"a\"[0]!=\"a\"}else if(name==\"json\"){isSupported=has(\"json-stringify\")&&has(\"json-parse\")}else{var value,serialized='{\"a\":[1,true,false,null,\"\\\\u0000\\\\b\\\\n\\\\f\\\\r\\\\t\"]}';if(name==\"json-stringify\"){var stringify=exports.stringify,stringifySupported=typeof stringify==\"function\"&&isExtended;if(stringifySupported){(value=function(){return 1}).toJSON=value;try{stringifySupported=stringify(0)===\"0\"&&stringify(new Number)===\"0\"&&stringify(new String)=='\"\"'&&stringify(getClass)===undef&&stringify(undef)===undef&&stringify()===undef&&stringify(value)===\"1\"&&stringify([value])==\"[1]\"&&stringify([undef])==\"[null]\"&&stringify(null)==\"null\"&&stringify([undef,getClass,null])==\"[null,null,null]\"&&stringify({a:[value,true,false,null,\"\\x00\\b\\n\\f\\r\t\"]})==serialized&&stringify(null,value)===\"1\"&&stringify([1,2],null,1)==\"[\\n 1,\\n 2\\n]\"&&stringify(new Date(-864e13))=='\"-271821-04-20T00:00:00.000Z\"'&&stringify(new Date(864e13))=='\"+275760-09-13T00:00:00.000Z\"'&&stringify(new Date(-621987552e5))=='\"-000001-01-01T00:00:00.000Z\"'&&stringify(new Date(-1))=='\"1969-12-31T23:59:59.999Z\"'}catch(exception){stringifySupported=false}}isSupported=stringifySupported}if(name==\"json-parse\"){var parse=exports.parse;if(typeof parse==\"function\"){try{if(parse(\"0\")===0&&!parse(false)){value=parse(serialized);var parseSupported=value[\"a\"].length==5&&value[\"a\"][0]===1;if(parseSupported){try{parseSupported=!parse('\"\t\"')}catch(exception){}if(parseSupported){try{parseSupported=parse(\"01\")!==1}catch(exception){}}if(parseSupported){try{parseSupported=parse(\"1.\")!==1}catch(exception){}}}}}catch(exception){parseSupported=false}}isSupported=parseSupported}}return has[name]=!!isSupported}if(!has(\"json\")){var functionClass=\"[object Function]\",dateClass=\"[object Date]\",numberClass=\"[object Number]\",stringClass=\"[object String]\",arrayClass=\"[object Array]\",booleanClass=\"[object Boolean]\";var charIndexBuggy=has(\"bug-string-char-index\");if(!isExtended){var floor=Math.floor;var Months=[0,31,59,90,120,151,181,212,243,273,304,334];var getDay=function(year,month){return Months[month]+365*(year-1970)+floor((year-1969+(month=+(month>1)))/4)-floor((year-1901+month)/100)+floor((year-1601+month)/400)}}if(!(isProperty=objectProto.hasOwnProperty)){isProperty=function(property){var members={},constructor;if((members.__proto__=null,members.__proto__={toString:1},members).toString!=getClass){isProperty=function(property){var original=this.__proto__,result=property in(this.__proto__=null,this);this.__proto__=original;return result}}else{constructor=members.constructor;isProperty=function(property){var parent=(this.constructor||constructor).prototype;return property in this&&!(property in parent&&this[property]===parent[property])}}members=null;return isProperty.call(this,property)}}forEach=function(object,callback){var size=0,Properties,members,property;(Properties=function(){this.valueOf=0}).prototype.valueOf=0;members=new Properties;for(property in members){if(isProperty.call(members,property)){size++}}Properties=members=null;if(!size){members=[\"valueOf\",\"toString\",\"toLocaleString\",\"propertyIsEnumerable\",\"isPrototypeOf\",\"hasOwnProperty\",\"constructor\"];forEach=function(object,callback){var isFunction=getClass.call(object)==functionClass,property,length;var hasProperty=!isFunction&&typeof object.constructor!=\"function\"&&objectTypes[typeof object.hasOwnProperty]&&object.hasOwnProperty||isProperty;for(property in object){if(!(isFunction&&property==\"prototype\")&&hasProperty.call(object,property)){callback(property)}}for(length=members.length;property=members[--length];hasProperty.call(object,property)&&callback(property));}}else if(size==2){forEach=function(object,callback){var members={},isFunction=getClass.call(object)==functionClass,property;for(property in object){if(!(isFunction&&property==\"prototype\")&&!isProperty.call(members,property)&&(members[property]=1)&&isProperty.call(object,property)){callback(property)}}}}else{forEach=function(object,callback){var isFunction=getClass.call(object)==functionClass,property,isConstructor;for(property in object){if(!(isFunction&&property==\"prototype\")&&isProperty.call(object,property)&&!(isConstructor=property===\"constructor\")){callback(property)}}if(isConstructor||isProperty.call(object,property=\"constructor\")){callback(property)}}}return forEach(object,callback)};if(!has(\"json-stringify\")){var Escapes={92:\"\\\\\\\\\",34:'\\\\\"',8:\"\\\\b\",12:\"\\\\f\",10:\"\\\\n\",13:\"\\\\r\",9:\"\\\\t\"};var leadingZeroes=\"000000\";var toPaddedString=function(width,value){return(leadingZeroes+(value||0)).slice(-width)};var unicodePrefix=\"\\\\u00\";var quote=function(value){var result='\"',index=0,length=value.length,useCharIndex=!charIndexBuggy||length>10;var symbols=useCharIndex&&(charIndexBuggy?value.split(\"\"):value);for(;index<length;index++){var charCode=value.charCodeAt(index);switch(charCode){case 8:case 9:case 10:case 12:case 13:case 34:case 92:result+=Escapes[charCode];break;default:if(charCode<32){result+=unicodePrefix+toPaddedString(2,charCode.toString(16));break}result+=useCharIndex?symbols[index]:value.charAt(index)}}return result+'\"'};var serialize=function(property,object,callback,properties,whitespace,indentation,stack){var value,className,year,month,date,time,hours,minutes,seconds,milliseconds,results,element,index,length,prefix,result;try{value=object[property]}catch(exception){}if(typeof value==\"object\"&&value){className=getClass.call(value);if(className==dateClass&&!isProperty.call(value,\"toJSON\")){if(value>-1/0&&value<1/0){if(getDay){date=floor(value/864e5);for(year=floor(date/365.2425)+1970-1;getDay(year+1,0)<=date;year++);for(month=floor((date-getDay(year,0))/30.42);getDay(year,month+1)<=date;month++);date=1+date-getDay(year,month);time=(value%864e5+864e5)%864e5;hours=floor(time/36e5)%24;minutes=floor(time/6e4)%60;seconds=floor(time/1e3)%60;milliseconds=time%1e3}else{year=value.getUTCFullYear();month=value.getUTCMonth();date=value.getUTCDate();hours=value.getUTCHours();minutes=value.getUTCMinutes();seconds=value.getUTCSeconds();milliseconds=value.getUTCMilliseconds()}value=(year<=0||year>=1e4?(year<0?\"-\":\"+\")+toPaddedString(6,year<0?-year:year):toPaddedString(4,year))+\"-\"+toPaddedString(2,month+1)+\"-\"+toPaddedString(2,date)+\"T\"+toPaddedString(2,hours)+\":\"+toPaddedString(2,minutes)+\":\"+toPaddedString(2,seconds)+\".\"+toPaddedString(3,milliseconds)+\"Z\"}else{value=null}}else if(typeof value.toJSON==\"function\"&&(className!=numberClass&&className!=stringClass&&className!=arrayClass||isProperty.call(value,\"toJSON\"))){value=value.toJSON(property)}}if(callback){value=callback.call(object,property,value)}if(value===null){return\"null\"}className=getClass.call(value);if(className==booleanClass){return\"\"+value}else if(className==numberClass){return value>-1/0&&value<1/0?\"\"+value:\"null\"}else if(className==stringClass){return quote(\"\"+value)}if(typeof value==\"object\"){for(length=stack.length;length--;){if(stack[length]===value){throw TypeError()}}stack.push(value);results=[];prefix=indentation;indentation+=whitespace;if(className==arrayClass){for(index=0,length=value.length;index<length;index++){element=serialize(index,value,callback,properties,whitespace,indentation,stack);results.push(element===undef?\"null\":element)}result=results.length?whitespace?\"[\\n\"+indentation+results.join(\",\\n\"+indentation)+\"\\n\"+prefix+\"]\":\"[\"+results.join(\",\")+\"]\":\"[]\"}else{forEach(properties||value,function(property){var element=serialize(property,value,callback,properties,whitespace,indentation,stack);if(element!==undef){results.push(quote(property)+\":\"+(whitespace?\" \":\"\")+element)}});result=results.length?whitespace?\"{\\n\"+indentation+results.join(\",\\n\"+indentation)+\"\\n\"+prefix+\"}\":\"{\"+results.join(\",\")+\"}\":\"{}\"}stack.pop();return result}};exports.stringify=function(source,filter,width){var whitespace,callback,properties,className;if(objectTypes[typeof filter]&&filter){if((className=getClass.call(filter))==functionClass){callback=filter}else if(className==arrayClass){properties={};for(var index=0,length=filter.length,value;index<length;value=filter[index++],(className=getClass.call(value),className==stringClass||className==numberClass)&&(properties[value]=1));}}if(width){if((className=getClass.call(width))==numberClass){if((width-=width%1)>0){for(whitespace=\"\",width>10&&(width=10);whitespace.length<width;whitespace+=\" \");}}else if(className==stringClass){whitespace=width.length<=10?width:width.slice(0,10)}}return serialize(\"\",(value={},value[\"\"]=source,value),callback,properties,whitespace,\"\",[])}}if(!has(\"json-parse\")){var fromCharCode=String.fromCharCode;var Unescapes={92:\"\\\\\",34:'\"',47:\"/\",98:\"\\b\",116:\"\t\",110:\"\\n\",102:\"\\f\",114:\"\\r\"};var Index,Source;var abort=function(){Index=Source=null;throw SyntaxError()};var lex=function(){var source=Source,length=source.length,value,begin,position,isSigned,charCode;while(Index<length){charCode=source.charCodeAt(Index);switch(charCode){case 9:case 10:case 13:case 32:Index++;break;case 123:case 125:case 91:case 93:case 58:case 44:value=charIndexBuggy?source.charAt(Index):source[Index];Index++;return value;case 34:for(value=\"@\",Index++;Index<length;){charCode=source.charCodeAt(Index);if(charCode<32){abort()}else if(charCode==92){charCode=source.charCodeAt(++Index);switch(charCode){case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:value+=Unescapes[charCode];Index++;break;case 117:begin=++Index;for(position=Index+4;Index<position;Index++){charCode=source.charCodeAt(Index);if(!(charCode>=48&&charCode<=57||charCode>=97&&charCode<=102||charCode>=65&&charCode<=70)){abort()}}value+=fromCharCode(\"0x\"+source.slice(begin,Index));break;default:abort()}}else{if(charCode==34){break}charCode=source.charCodeAt(Index);begin=Index;while(charCode>=32&&charCode!=92&&charCode!=34){charCode=source.charCodeAt(++Index)}value+=source.slice(begin,Index)}}if(source.charCodeAt(Index)==34){Index++;return value}abort();default:begin=Index;if(charCode==45){isSigned=true;charCode=source.charCodeAt(++Index)}if(charCode>=48&&charCode<=57){if(charCode==48&&(charCode=source.charCodeAt(Index+1),charCode>=48&&charCode<=57)){abort()}isSigned=false;for(;Index<length&&(charCode=source.charCodeAt(Index),charCode>=48&&charCode<=57);Index++);if(source.charCodeAt(Index)==46){position=++Index;for(;position<length&&(charCode=source.charCodeAt(position),charCode>=48&&charCode<=57);position++);if(position==Index){abort()}Index=position}charCode=source.charCodeAt(Index);if(charCode==101||charCode==69){charCode=source.charCodeAt(++Index);if(charCode==43||charCode==45){Index++}for(position=Index;position<length&&(charCode=source.charCodeAt(position),charCode>=48&&charCode<=57);position++);if(position==Index){abort()}Index=position}return+source.slice(begin,Index)}if(isSigned){abort()}if(source.slice(Index,Index+4)==\"true\"){Index+=4;return true}else if(source.slice(Index,Index+5)==\"false\"){Index+=5;return false}else if(source.slice(Index,Index+4)==\"null\"){Index+=4;return null}abort()}}return\"$\"};var get=function(value){var results,hasMembers;if(value==\"$\"){abort()}if(typeof value==\"string\"){if((charIndexBuggy?value.charAt(0):value[0])==\"@\"){return value.slice(1)}if(value==\"[\"){results=[];for(;;hasMembers||(hasMembers=true)){value=lex();if(value==\"]\"){break}if(hasMembers){if(value==\",\"){value=lex();if(value==\"]\"){abort()}}else{abort()}}if(value==\",\"){abort()}results.push(get(value))}return results}else if(value==\"{\"){results={};for(;;hasMembers||(hasMembers=true)){value=lex();if(value==\"}\"){break}if(hasMembers){if(value==\",\"){value=lex();if(value==\"}\"){abort()}}else{abort()}}if(value==\",\"||typeof value!=\"string\"||(charIndexBuggy?value.charAt(0):value[0])!=\"@\"||lex()!=\":\"){abort()}results[value.slice(1)]=get(lex())\r\n}return results}abort()}return value};var update=function(source,property,callback){var element=walk(source,property,callback);if(element===undef){delete source[property]}else{source[property]=element}};var walk=function(source,property,callback){var value=source[property],length;if(typeof value==\"object\"&&value){if(getClass.call(value)==arrayClass){for(length=value.length;length--;){update(value,length,callback)}}else{forEach(value,function(property){update(value,property,callback)})}}return callback.call(source,property,value)};exports.parse=function(source,callback){var result,value;Index=0;Source=\"\"+source;result=get(lex());if(lex()!=\"$\"){abort()}Index=Source=null;return callback&&getClass.call(callback)==functionClass?walk((value={},value[\"\"]=result,value),\"\",callback):result}}}exports[\"runInContext\"]=runInContext;return exports}if(freeExports&&!isLoader){runInContext(root,freeExports)}else{var nativeJSON=root.JSON,previousJSON=root[\"JSON3\"],isRestored=false;var JSON3=runInContext(root,root[\"JSON3\"]={noConflict:function(){if(!isRestored){isRestored=true;root.JSON=nativeJSON;root[\"JSON3\"]=previousJSON;nativeJSON=previousJSON=null}return JSON3}});root.JSON={parse:JSON3.parse,stringify:JSON3.stringify}}if(isLoader){define(function(){return JSON3})}}).call(this)}).call(this,typeof self!==\"undefined\"?self:typeof window!==\"undefined\"?window:typeof global!==\"undefined\"?global:{})},{}],51:[function(_dereq_,module,exports){module.exports=toArray;function toArray(list,index){var array=[];index=index||0;for(var i=index||0;i<list.length;i++){array[i-index]=list[i]}return array}},{}]},{},[31])(31)});"

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(8)(__webpack_require__(13))

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports = "var QRCode;!function(){function a(a){this.mode=c.MODE_8BIT_BYTE,this.data=a,this.parsedData=[];for(var b=[],d=0,e=this.data.length;e>d;d++){var f=this.data.charCodeAt(d);f>65536?(b[0]=240|(1835008&f)>>>18,b[1]=128|(258048&f)>>>12,b[2]=128|(4032&f)>>>6,b[3]=128|63&f):f>2048?(b[0]=224|(61440&f)>>>12,b[1]=128|(4032&f)>>>6,b[2]=128|63&f):f>128?(b[0]=192|(1984&f)>>>6,b[1]=128|63&f):b[0]=f,this.parsedData=this.parsedData.concat(b)}this.parsedData.length!=this.data.length&&(this.parsedData.unshift(191),this.parsedData.unshift(187),this.parsedData.unshift(239))}function b(a,b){this.typeNumber=a,this.errorCorrectLevel=b,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}function i(a,b){if(void 0==a.length)throw new Error(a.length+\"/\"+b);for(var c=0;c<a.length&&0==a[c];)c++;this.num=new Array(a.length-c+b);for(var d=0;d<a.length-c;d++)this.num[d]=a[d+c]}function j(a,b){this.totalCount=a,this.dataCount=b}function k(){this.buffer=[],this.length=0}function m(){return\"undefined\"!=typeof CanvasRenderingContext2D}function n(){var a=!1,b=navigator.userAgent;return/android/i.test(b)&&(a=!0,aMat=b.toString().match(/android ([0-9]\\.[0-9])/i),aMat&&aMat[1]&&(a=parseFloat(aMat[1]))),a}function r(a,b){for(var c=1,e=s(a),f=0,g=l.length;g>=f;f++){var h=0;switch(b){case d.L:h=l[f][0];break;case d.M:h=l[f][1];break;case d.Q:h=l[f][2];break;case d.H:h=l[f][3]}if(h>=e)break;c++}if(c>l.length)throw new Error(\"Too long data\");return c}function s(a){var b=encodeURI(a).toString().replace(/\\%[0-9a-fA-F]{2}/g,\"a\");return b.length+(b.length!=a?3:0)}a.prototype={getLength:function(){return this.parsedData.length},write:function(a){for(var b=0,c=this.parsedData.length;c>b;b++)a.put(this.parsedData[b],8)}},b.prototype={addData:function(b){var c=new a(b);this.dataList.push(c),this.dataCache=null},isDark:function(a,b){if(0>a||this.moduleCount<=a||0>b||this.moduleCount<=b)throw new Error(a+\",\"+b);return this.modules[a][b]},getModuleCount:function(){return this.moduleCount},make:function(){this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(a,c){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var d=0;d<this.moduleCount;d++){this.modules[d]=new Array(this.moduleCount);for(var e=0;e<this.moduleCount;e++)this.modules[d][e]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(a,c),this.typeNumber>=7&&this.setupTypeNumber(a),null==this.dataCache&&(this.dataCache=b.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,c)},setupPositionProbePattern:function(a,b){for(var c=-1;7>=c;c++)if(!(-1>=a+c||this.moduleCount<=a+c))for(var d=-1;7>=d;d++)-1>=b+d||this.moduleCount<=b+d||(this.modules[a+c][b+d]=c>=0&&6>=c&&(0==d||6==d)||d>=0&&6>=d&&(0==c||6==c)||c>=2&&4>=c&&d>=2&&4>=d?!0:!1)},getBestMaskPattern:function(){for(var a=0,b=0,c=0;8>c;c++){this.makeImpl(!0,c);var d=f.getLostPoint(this);(0==c||a>d)&&(a=d,b=c)}return b},createMovieClip:function(a,b,c){var d=a.createEmptyMovieClip(b,c),e=1;this.make();for(var f=0;f<this.modules.length;f++)for(var g=f*e,h=0;h<this.modules[f].length;h++){var i=h*e,j=this.modules[f][h];j&&(d.beginFill(0,100),d.moveTo(i,g),d.lineTo(i+e,g),d.lineTo(i+e,g+e),d.lineTo(i,g+e),d.endFill())}return d},setupTimingPattern:function(){for(var a=8;a<this.moduleCount-8;a++)null==this.modules[a][6]&&(this.modules[a][6]=0==a%2);for(var b=8;b<this.moduleCount-8;b++)null==this.modules[6][b]&&(this.modules[6][b]=0==b%2)},setupPositionAdjustPattern:function(){for(var a=f.getPatternPosition(this.typeNumber),b=0;b<a.length;b++)for(var c=0;c<a.length;c++){var d=a[b],e=a[c];if(null==this.modules[d][e])for(var g=-2;2>=g;g++)for(var h=-2;2>=h;h++)this.modules[d+g][e+h]=-2==g||2==g||-2==h||2==h||0==g&&0==h?!0:!1}},setupTypeNumber:function(a){for(var b=f.getBCHTypeNumber(this.typeNumber),c=0;18>c;c++){var d=!a&&1==(1&b>>c);this.modules[Math.floor(c/3)][c%3+this.moduleCount-8-3]=d}for(var c=0;18>c;c++){var d=!a&&1==(1&b>>c);this.modules[c%3+this.moduleCount-8-3][Math.floor(c/3)]=d}},setupTypeInfo:function(a,b){for(var c=this.errorCorrectLevel<<3|b,d=f.getBCHTypeInfo(c),e=0;15>e;e++){var g=!a&&1==(1&d>>e);6>e?this.modules[e][8]=g:8>e?this.modules[e+1][8]=g:this.modules[this.moduleCount-15+e][8]=g}for(var e=0;15>e;e++){var g=!a&&1==(1&d>>e);8>e?this.modules[8][this.moduleCount-e-1]=g:9>e?this.modules[8][15-e-1+1]=g:this.modules[8][15-e-1]=g}this.modules[this.moduleCount-8][8]=!a},mapData:function(a,b){for(var c=-1,d=this.moduleCount-1,e=7,g=0,h=this.moduleCount-1;h>0;h-=2)for(6==h&&h--;;){for(var i=0;2>i;i++)if(null==this.modules[d][h-i]){var j=!1;g<a.length&&(j=1==(1&a[g]>>>e));var k=f.getMask(b,d,h-i);k&&(j=!j),this.modules[d][h-i]=j,e--,-1==e&&(g++,e=7)}if(d+=c,0>d||this.moduleCount<=d){d-=c,c=-c;break}}}},b.PAD0=236,b.PAD1=17,b.createData=function(a,c,d){for(var e=j.getRSBlocks(a,c),g=new k,h=0;h<d.length;h++){var i=d[h];g.put(i.mode,4),g.put(i.getLength(),f.getLengthInBits(i.mode,a)),i.write(g)}for(var l=0,h=0;h<e.length;h++)l+=e[h].dataCount;if(g.getLengthInBits()>8*l)throw new Error(\"code length overflow. (\"+g.getLengthInBits()+\">\"+8*l+\")\");for(g.getLengthInBits()+4<=8*l&&g.put(0,4);0!=g.getLengthInBits()%8;)g.putBit(!1);for(;;){if(g.getLengthInBits()>=8*l)break;if(g.put(b.PAD0,8),g.getLengthInBits()>=8*l)break;g.put(b.PAD1,8)}return b.createBytes(g,e)},b.createBytes=function(a,b){for(var c=0,d=0,e=0,g=new Array(b.length),h=new Array(b.length),j=0;j<b.length;j++){var k=b[j].dataCount,l=b[j].totalCount-k;d=Math.max(d,k),e=Math.max(e,l),g[j]=new Array(k);for(var m=0;m<g[j].length;m++)g[j][m]=255&a.buffer[m+c];c+=k;var n=f.getErrorCorrectPolynomial(l),o=new i(g[j],n.getLength()-1),p=o.mod(n);h[j]=new Array(n.getLength()-1);for(var m=0;m<h[j].length;m++){var q=m+p.getLength()-h[j].length;h[j][m]=q>=0?p.get(q):0}}for(var r=0,m=0;m<b.length;m++)r+=b[m].totalCount;for(var s=new Array(r),t=0,m=0;d>m;m++)for(var j=0;j<b.length;j++)m<g[j].length&&(s[t++]=g[j][m]);for(var m=0;e>m;m++)for(var j=0;j<b.length;j++)m<h[j].length&&(s[t++]=h[j][m]);return s};for(var c={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},d={L:1,M:0,Q:3,H:2},e={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},f={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(a){for(var b=a<<10;f.getBCHDigit(b)-f.getBCHDigit(f.G15)>=0;)b^=f.G15<<f.getBCHDigit(b)-f.getBCHDigit(f.G15);return(a<<10|b)^f.G15_MASK},getBCHTypeNumber:function(a){for(var b=a<<12;f.getBCHDigit(b)-f.getBCHDigit(f.G18)>=0;)b^=f.G18<<f.getBCHDigit(b)-f.getBCHDigit(f.G18);return a<<12|b},getBCHDigit:function(a){for(var b=0;0!=a;)b++,a>>>=1;return b},getPatternPosition:function(a){return f.PATTERN_POSITION_TABLE[a-1]},getMask:function(a,b,c){switch(a){case e.PATTERN000:return 0==(b+c)%2;case e.PATTERN001:return 0==b%2;case e.PATTERN010:return 0==c%3;case e.PATTERN011:return 0==(b+c)%3;case e.PATTERN100:return 0==(Math.floor(b/2)+Math.floor(c/3))%2;case e.PATTERN101:return 0==b*c%2+b*c%3;case e.PATTERN110:return 0==(b*c%2+b*c%3)%2;case e.PATTERN111:return 0==(b*c%3+(b+c)%2)%2;default:throw new Error(\"bad maskPattern:\"+a)}},getErrorCorrectPolynomial:function(a){for(var b=new i([1],0),c=0;a>c;c++)b=b.multiply(new i([1,g.gexp(c)],0));return b},getLengthInBits:function(a,b){if(b>=1&&10>b)switch(a){case c.MODE_NUMBER:return 10;case c.MODE_ALPHA_NUM:return 9;case c.MODE_8BIT_BYTE:return 8;case c.MODE_KANJI:return 8;default:throw new Error(\"mode:\"+a)}else if(27>b)switch(a){case c.MODE_NUMBER:return 12;case c.MODE_ALPHA_NUM:return 11;case c.MODE_8BIT_BYTE:return 16;case c.MODE_KANJI:return 10;default:throw new Error(\"mode:\"+a)}else{if(!(41>b))throw new Error(\"type:\"+b);switch(a){case c.MODE_NUMBER:return 14;case c.MODE_ALPHA_NUM:return 13;case c.MODE_8BIT_BYTE:return 16;case c.MODE_KANJI:return 12;default:throw new Error(\"mode:\"+a)}}},getLostPoint:function(a){for(var b=a.getModuleCount(),c=0,d=0;b>d;d++)for(var e=0;b>e;e++){for(var f=0,g=a.isDark(d,e),h=-1;1>=h;h++)if(!(0>d+h||d+h>=b))for(var i=-1;1>=i;i++)0>e+i||e+i>=b||(0!=h||0!=i)&&g==a.isDark(d+h,e+i)&&f++;f>5&&(c+=3+f-5)}for(var d=0;b-1>d;d++)for(var e=0;b-1>e;e++){var j=0;a.isDark(d,e)&&j++,a.isDark(d+1,e)&&j++,a.isDark(d,e+1)&&j++,a.isDark(d+1,e+1)&&j++,(0==j||4==j)&&(c+=3)}for(var d=0;b>d;d++)for(var e=0;b-6>e;e++)a.isDark(d,e)&&!a.isDark(d,e+1)&&a.isDark(d,e+2)&&a.isDark(d,e+3)&&a.isDark(d,e+4)&&!a.isDark(d,e+5)&&a.isDark(d,e+6)&&(c+=40);for(var e=0;b>e;e++)for(var d=0;b-6>d;d++)a.isDark(d,e)&&!a.isDark(d+1,e)&&a.isDark(d+2,e)&&a.isDark(d+3,e)&&a.isDark(d+4,e)&&!a.isDark(d+5,e)&&a.isDark(d+6,e)&&(c+=40);for(var k=0,e=0;b>e;e++)for(var d=0;b>d;d++)a.isDark(d,e)&&k++;var l=Math.abs(100*k/b/b-50)/5;return c+=10*l}},g={glog:function(a){if(1>a)throw new Error(\"glog(\"+a+\")\");return g.LOG_TABLE[a]},gexp:function(a){for(;0>a;)a+=255;for(;a>=256;)a-=255;return g.EXP_TABLE[a]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},h=0;8>h;h++)g.EXP_TABLE[h]=1<<h;for(var h=8;256>h;h++)g.EXP_TABLE[h]=g.EXP_TABLE[h-4]^g.EXP_TABLE[h-5]^g.EXP_TABLE[h-6]^g.EXP_TABLE[h-8];for(var h=0;255>h;h++)g.LOG_TABLE[g.EXP_TABLE[h]]=h;i.prototype={get:function(a){return this.num[a]},getLength:function(){return this.num.length},multiply:function(a){for(var b=new Array(this.getLength()+a.getLength()-1),c=0;c<this.getLength();c++)for(var d=0;d<a.getLength();d++)b[c+d]^=g.gexp(g.glog(this.get(c))+g.glog(a.get(d)));return new i(b,0)},mod:function(a){if(this.getLength()-a.getLength()<0)return this;for(var b=g.glog(this.get(0))-g.glog(a.get(0)),c=new Array(this.getLength()),d=0;d<this.getLength();d++)c[d]=this.get(d);for(var d=0;d<a.getLength();d++)c[d]^=g.gexp(g.glog(a.get(d))+b);return new i(c,0).mod(a)}},j.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],j.getRSBlocks=function(a,b){var c=j.getRsBlockTable(a,b);if(void 0==c)throw new Error(\"bad rs block @ typeNumber:\"+a+\"/errorCorrectLevel:\"+b);for(var d=c.length/3,e=[],f=0;d>f;f++)for(var g=c[3*f+0],h=c[3*f+1],i=c[3*f+2],k=0;g>k;k++)e.push(new j(h,i));return e},j.getRsBlockTable=function(a,b){switch(b){case d.L:return j.RS_BLOCK_TABLE[4*(a-1)+0];case d.M:return j.RS_BLOCK_TABLE[4*(a-1)+1];case d.Q:return j.RS_BLOCK_TABLE[4*(a-1)+2];case d.H:return j.RS_BLOCK_TABLE[4*(a-1)+3];default:return void 0}},k.prototype={get:function(a){var b=Math.floor(a/8);return 1==(1&this.buffer[b]>>>7-a%8)},put:function(a,b){for(var c=0;b>c;c++)this.putBit(1==(1&a>>>b-c-1))},getLengthInBits:function(){return this.length},putBit:function(a){var b=Math.floor(this.length/8);this.buffer.length<=b&&this.buffer.push(0),a&&(this.buffer[b]|=128>>>this.length%8),this.length++}};var l=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]],o=function(){var a=function(a,b){this._el=a,this._htOption=b};return a.prototype.draw=function(a){function g(a,b){var c=document.createElementNS(\"http://www.w3.org/2000/svg\",a);for(var d in b)b.hasOwnProperty(d)&&c.setAttribute(d,b[d]);return c}var b=this._htOption,c=this._el,d=a.getModuleCount();Math.floor(b.width/d),Math.floor(b.height/d),this.clear();var h=g(\"svg\",{viewBox:\"0 0 \"+String(d)+\" \"+String(d),width:\"100%\",height:\"100%\",fill:b.colorLight});h.setAttributeNS(\"http://www.w3.org/2000/xmlns/\",\"xmlns:xlink\",\"http://www.w3.org/1999/xlink\"),c.appendChild(h),h.appendChild(g(\"rect\",{fill:b.colorDark,width:\"1\",height:\"1\",id:\"template\"}));for(var i=0;d>i;i++)for(var j=0;d>j;j++)if(a.isDark(i,j)){var k=g(\"use\",{x:String(i),y:String(j)});k.setAttributeNS(\"http://www.w3.org/1999/xlink\",\"href\",\"#template\"),h.appendChild(k)}},a.prototype.clear=function(){for(;this._el.hasChildNodes();)this._el.removeChild(this._el.lastChild)},a}(),p=\"svg\"===document.documentElement.tagName.toLowerCase(),q=p?o:m()?function(){function a(){this._elImage.src=this._elCanvas.toDataURL(\"image/png\"),this._elImage.style.display=\"block\",this._elCanvas.style.display=\"none\"}function d(a,b){var c=this;if(c._fFail=b,c._fSuccess=a,null===c._bSupportDataURI){var d=document.createElement(\"img\"),e=function(){c._bSupportDataURI=!1,c._fFail&&_fFail.call(c)},f=function(){c._bSupportDataURI=!0,c._fSuccess&&c._fSuccess.call(c)};return d.onabort=e,d.onerror=e,d.onload=f,d.src=\"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==\",void 0}c._bSupportDataURI===!0&&c._fSuccess?c._fSuccess.call(c):c._bSupportDataURI===!1&&c._fFail&&c._fFail.call(c)}if(this._android&&this._android<=2.1){var b=1/window.devicePixelRatio,c=CanvasRenderingContext2D.prototype.drawImage;CanvasRenderingContext2D.prototype.drawImage=function(a,d,e,f,g,h,i,j){if(\"nodeName\"in a&&/img/i.test(a.nodeName))for(var l=arguments.length-1;l>=1;l--)arguments[l]=arguments[l]*b;else\"undefined\"==typeof j&&(arguments[1]*=b,arguments[2]*=b,arguments[3]*=b,arguments[4]*=b);c.apply(this,arguments)}}var e=function(a,b){this._bIsPainted=!1,this._android=n(),this._htOption=b,this._elCanvas=document.createElement(\"canvas\"),this._elCanvas.width=b.width,this._elCanvas.height=b.height,a.appendChild(this._elCanvas),this._el=a,this._oContext=this._elCanvas.getContext(\"2d\"),this._bIsPainted=!1,this._elImage=document.createElement(\"img\"),this._elImage.style.display=\"none\",this._el.appendChild(this._elImage),this._bSupportDataURI=null};return e.prototype.draw=function(a){var b=this._elImage,c=this._oContext,d=this._htOption,e=a.getModuleCount(),f=d.width/e,g=d.height/e,h=Math.round(f),i=Math.round(g);b.style.display=\"none\",this.clear();for(var j=0;e>j;j++)for(var k=0;e>k;k++){var l=a.isDark(j,k),m=k*f,n=j*g;c.strokeStyle=l?d.colorDark:d.colorLight,c.lineWidth=1,c.fillStyle=l?d.colorDark:d.colorLight,c.fillRect(m,n,f,g),c.strokeRect(Math.floor(m)+.5,Math.floor(n)+.5,h,i),c.strokeRect(Math.ceil(m)-.5,Math.ceil(n)-.5,h,i)}this._bIsPainted=!0},e.prototype.makeImage=function(){this._bIsPainted&&d.call(this,a)},e.prototype.isPainted=function(){return this._bIsPainted},e.prototype.clear=function(){this._oContext.clearRect(0,0,this._elCanvas.width,this._elCanvas.height),this._bIsPainted=!1},e.prototype.round=function(a){return a?Math.floor(1e3*a)/1e3:a},e}():function(){var a=function(a,b){this._el=a,this._htOption=b};return a.prototype.draw=function(a){for(var b=this._htOption,c=this._el,d=a.getModuleCount(),e=Math.floor(b.width/d),f=Math.floor(b.height/d),g=['<table style=\"border:0;border-collapse:collapse;\">'],h=0;d>h;h++){g.push(\"<tr>\");for(var i=0;d>i;i++)g.push('<td style=\"border:0;border-collapse:collapse;padding:0;margin:0;width:'+e+\"px;height:\"+f+\"px;background-color:\"+(a.isDark(h,i)?b.colorDark:b.colorLight)+';\"></td>');g.push(\"</tr>\")}g.push(\"</table>\"),c.innerHTML=g.join(\"\");var j=c.childNodes[0],k=(b.width-j.offsetWidth)/2,l=(b.height-j.offsetHeight)/2;k>0&&l>0&&(j.style.margin=l+\"px \"+k+\"px\")},a.prototype.clear=function(){this._el.innerHTML=\"\"},a}();QRCode=function(a,b){if(this._htOption={width:256,height:256,typeNumber:4,colorDark:\"#000000\",colorLight:\"#ffffff\",correctLevel:d.H},\"string\"==typeof b&&(b={text:b}),b)for(var c in b)this._htOption[c]=b[c];\"string\"==typeof a&&(a=document.getElementById(a)),this._android=n(),this._el=a,this._oQRCode=null,this._oDrawing=new q(this._el,this._htOption),this._htOption.text&&this.makeCode(this._htOption.text)},QRCode.prototype.makeCode=function(a){this._oQRCode=new b(r(a,this._htOption.correctLevel),this._htOption.correctLevel),this._oQRCode.addData(a),this._oQRCode.make(),this._el.title=a,this._oDrawing.draw(this._oQRCode),this.makeImage()},QRCode.prototype.makeImage=function(){\"function\"==typeof this._oDrawing.makeImage&&(!this._android||this._android>=3)&&this._oDrawing.makeImage()},QRCode.prototype.clear=function(){this._oDrawing.clear()},QRCode.CorrectLevel=d}();"

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(15);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/_css-loader@0.25.0@css-loader/index.js?root=.!./cropper.min.css", function() {
				var newContent = require("!!../../../node_modules/_css-loader@0.25.0@css-loader/index.js?root=.!./cropper.min.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, "/*!\r\n * Cropper.js v1.4.0\r\n * https://fengyuanchen.github.io/cropperjs\r\n *\r\n * Copyright 2015-present Chen Fengyuan\r\n * Released under the MIT license\r\n *\r\n * Date: 2018-06-01T15:18:09.891Z\r\n */.cropper-container{direction:ltr;font-size:0;line-height:0;position:relative;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.cropper-container img{display:block;height:100%;image-orientation:0deg;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;width:100%}.cropper-canvas,.cropper-crop-box,.cropper-drag-box,.cropper-modal,.cropper-wrap-box{bottom:0;left:0;position:absolute;right:0;top:0}.cropper-canvas,.cropper-wrap-box{overflow:hidden}.cropper-drag-box{background-color:#fff;opacity:0}.cropper-modal{background-color:#000;opacity:.5}.cropper-view-box{display:block;height:100%;outline-color:rgba(51,153,255,.75);outline:1px solid #39f;overflow:hidden;width:100%}.cropper-dashed{border:0 dashed #eee;display:block;opacity:.5;position:absolute}.cropper-dashed.dashed-h{border-bottom-width:1px;border-top-width:1px;height:33.33333%;left:0;top:33.33333%;width:100%}.cropper-dashed.dashed-v{border-left-width:1px;border-right-width:1px;height:100%;left:33.33333%;top:0;width:33.33333%}.cropper-center{display:block;height:0;left:50%;opacity:.75;position:absolute;top:50%;width:0}.cropper-center:after,.cropper-center:before{background-color:#eee;content:\" \";display:block;position:absolute}.cropper-center:before{height:1px;left:-3px;top:0;width:7px}.cropper-center:after{height:7px;left:0;top:-3px;width:1px}.cropper-face,.cropper-line,.cropper-point{display:block;height:100%;opacity:.1;position:absolute;width:100%}.cropper-face{background-color:#fff;left:0;top:0}.cropper-line{background-color:#39f}.cropper-line.line-e{cursor:ew-resize;right:-3px;top:0;width:5px}.cropper-line.line-n{cursor:ns-resize;height:5px;left:0;top:-3px}.cropper-line.line-w{cursor:ew-resize;left:-3px;top:0;width:5px}.cropper-line.line-s{bottom:-3px;cursor:ns-resize;height:5px;left:0}.cropper-point{background-color:#39f;height:5px;opacity:.75;width:5px}.cropper-point.point-e{cursor:ew-resize;margin-top:-3px;right:-3px;top:50%}.cropper-point.point-n{cursor:ns-resize;left:50%;margin-left:-3px;top:-3px}.cropper-point.point-w{cursor:ew-resize;left:-3px;margin-top:-3px;top:50%}.cropper-point.point-s{bottom:-3px;cursor:s-resize;left:50%;margin-left:-3px}.cropper-point.point-ne{cursor:nesw-resize;right:-3px;top:-3px}.cropper-point.point-nw{cursor:nwse-resize;left:-3px;top:-3px}.cropper-point.point-sw{bottom:-3px;cursor:nesw-resize;left:-3px}.cropper-point.point-se{bottom:-3px;cursor:nwse-resize;height:20px;opacity:1;right:-3px;width:20px}@media (min-width:768px){.cropper-point.point-se{height:15px;width:15px}}@media (min-width:992px){.cropper-point.point-se{height:10px;width:10px}}@media (min-width:1200px){.cropper-point.point-se{height:5px;opacity:.75;width:5px}}.cropper-point.point-se:before{background-color:#39f;bottom:-50%;content:\" \";display:block;height:200%;opacity:0;position:absolute;right:-50%;width:200%}.cropper-invisible{opacity:0}.cropper-bg{background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC\")}.cropper-hide{display:block;height:0;position:absolute;width:0}.cropper-hidden{display:none!important}.cropper-move{cursor:move}.cropper-crop{cursor:crosshair}.cropper-disabled .cropper-drag-box,.cropper-disabled .cropper-face,.cropper-disabled .cropper-line,.cropper-disabled .cropper-point{cursor:not-allowed}", ""]);
	
	// exports


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(8)(__webpack_require__(17))

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	module.exports = "/*!\r\n * Vue.js v2.1.3\r\n * (c) 2014-2016 Evan You\r\n * Released under the MIT License.\r\n */\r\n!function(e,t){\"object\"==typeof exports&&\"undefined\"!=typeof module?module.exports=t():\"function\"==typeof define&&define.amd?define(t):e.Vue=t()}(this,function(){\"use strict\";function e(e){return null==e?\"\":\"object\"==typeof e?JSON.stringify(e,null,2):String(e)}function t(e){var t=parseFloat(e,10);return t||0===t?t:e}function n(e,t){for(var n=Object.create(null),r=e.split(\",\"),i=0;i<r.length;i++)n[r[i]]=!0;return t?function(e){return n[e.toLowerCase()]}:function(e){return n[e]}}function r(e,t){if(e.length){var n=e.indexOf(t);if(n>-1)return e.splice(n,1)}}function i(e,t){return Ur.call(e,t)}function o(e){return\"string\"==typeof e||\"number\"==typeof e}function a(e){var t=Object.create(null);return function(n){var r=t[n];return r||(t[n]=e(n))}}function s(e,t){function n(n){var r=arguments.length;return r?r>1?e.apply(t,arguments):e.call(t,n):e.call(t)}return n._length=e.length,n}function c(e,t){t=t||0;for(var n=e.length-t,r=new Array(n);n--;)r[n]=e[n+t];return r}function l(e,t){for(var n in t)e[n]=t[n];return e}function u(e){return null!==e&&\"object\"==typeof e}function f(e){return qr.call(e)===Wr}function d(e){for(var t={},n=0;n<e.length;n++)e[n]&&l(t,e[n]);return t}function p(){}function v(e){return e.reduce(function(e,t){return e.concat(t.staticKeys||[])},[]).join(\",\")}function h(e,t){return e==t||!(!u(e)||!u(t))&&JSON.stringify(e)===JSON.stringify(t)}function m(e,t){for(var n=0;n<e.length;n++)if(h(e[n],t))return n;return-1}function g(e){var t=(e+\"\").charCodeAt(0);return 36===t||95===t}function y(e,t,n,r){Object.defineProperty(e,t,{value:n,enumerable:!!r,writable:!0,configurable:!0})}function _(e){if(!Gr.test(e)){var t=e.split(\".\");return function(e){for(var n=0;n<t.length;n++){if(!e)return;e=e[t[n]]}return e}}}function b(e){return/native code/.test(e.toString())}function $(e){di.target&&pi.push(di.target),di.target=e}function w(){di.target=pi.pop()}function x(e,t){e.__proto__=t}function C(e,t,n){for(var r=0,i=n.length;r<i;r++){var o=n[r];y(e,o,t[o])}}function k(e){if(u(e)){var t;return i(e,\"__ob__\")&&e.__ob__ instanceof yi?t=e.__ob__:gi.shouldConvert&&!oi()&&(Array.isArray(e)||f(e))&&Object.isExtensible(e)&&!e._isVue&&(t=new yi(e)),t}}function A(e,t,n,r){var i=new di,o=Object.getOwnPropertyDescriptor(e,t);if(!o||o.configurable!==!1){var a=o&&o.get,s=o&&o.set,c=k(n);Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){var t=a?a.call(e):n;return di.target&&(i.depend(),c&&c.dep.depend(),Array.isArray(t)&&T(t)),t},set:function(t){var r=a?a.call(e):n;t===r||t!==t&&r!==r||(s?s.call(e,t):n=t,c=k(t),i.notify())}})}}function O(e,t,n){if(Array.isArray(e))return e.length=Math.max(e.length,t),e.splice(t,1,n),n;if(i(e,t))return void(e[t]=n);var r=e.__ob__;if(!(e._isVue||r&&r.vmCount))return r?(A(r.value,t,n),r.dep.notify(),n):void(e[t]=n)}function S(e,t){var n=e.__ob__;e._isVue||n&&n.vmCount||i(e,t)&&(delete e[t],n&&n.dep.notify())}function T(e){for(var t=void 0,n=0,r=e.length;n<r;n++)t=e[n],t&&t.__ob__&&t.__ob__.dep.depend(),Array.isArray(t)&&T(t)}function j(e,t){if(!t)return e;for(var n,r,o,a=Object.keys(t),s=0;s<a.length;s++)n=a[s],r=e[n],o=t[n],i(e,n)?f(r)&&f(o)&&j(r,o):O(e,n,o);return e}function E(e,t){return t?e?e.concat(t):Array.isArray(t)?t:[t]:e}function N(e,t){var n=Object.create(e||null);return t?l(n,t):n}function L(e){var t=e.props;if(t){var n,r,i,o={};if(Array.isArray(t))for(n=t.length;n--;)r=t[n],\"string\"==typeof r&&(i=Vr(r),o[i]={type:null});else if(f(t))for(var a in t)r=t[a],i=Vr(a),o[i]=f(r)?r:{type:r};e.props=o}}function D(e){var t=e.directives;if(t)for(var n in t){var r=t[n];\"function\"==typeof r&&(t[n]={bind:r,update:r})}}function M(e,t,n){function r(r){var i=_i[r]||bi;u[r]=i(e[r],t[r],n,r)}L(t),D(t);var o=t.extends;if(o&&(e=\"function\"==typeof o?M(e,o.options,n):M(e,o,n)),t.mixins)for(var a=0,s=t.mixins.length;a<s;a++){var c=t.mixins[a];c.prototype instanceof Re&&(c=c.options),e=M(e,c,n)}var l,u={};for(l in e)r(l);for(l in t)i(e,l)||r(l);return u}function P(e,t,n,r){if(\"string\"==typeof n){var i=e[t],o=i[n]||i[Vr(n)]||i[zr(Vr(n))];return o}}function R(e,t,n,r){var o=t[e],a=!i(n,e),s=n[e];if(B(o.type)&&(a&&!i(o,\"default\")?s=!1:\"\"!==s&&s!==Kr(e)||(s=!0)),void 0===s){s=I(r,o,e);var c=gi.shouldConvert;gi.shouldConvert=!0,k(s),gi.shouldConvert=c}return s}function I(e,t,n){if(i(t,\"default\")){var r=t.default;return u(r),e&&e.$options.propsData&&void 0===e.$options.propsData[n]&&void 0!==e[n]?e[n]:\"function\"==typeof r&&t.type!==Function?r.call(e):r}}function F(e){var t=e&&e.toString().match(/^\\s*function (\\w+)/);return t&&t[1]}function B(e){if(!Array.isArray(e))return\"Boolean\"===F(e);for(var t=0,n=e.length;t<n;t++)if(\"Boolean\"===F(e[t]))return!0;return!1}function U(){wi.length=0,xi={},Ci=ki=!1}function H(){for(ki=!0,wi.sort(function(e,t){return e.id-t.id}),Ai=0;Ai<wi.length;Ai++){var e=wi[Ai],t=e.id;xi[t]=null,e.run()}ai&&li.devtools&&ai.emit(\"flush\"),U()}function V(e){var t=e.id;if(null==xi[t]){if(xi[t]=!0,ki){for(var n=wi.length-1;n>=0&&wi[n].id>e.id;)n--;wi.splice(Math.max(n,Ai)+1,0,e)}else wi.push(e);Ci||(Ci=!0,si(H))}}function z(e){Ti.clear(),J(e,Ti)}function J(e,t){var n,r,i=Array.isArray(e);if((i||u(e))&&Object.isExtensible(e)){if(e.__ob__){var o=e.__ob__.dep.id;if(t.has(o))return;t.add(o)}if(i)for(n=e.length;n--;)J(e[n],t);else for(r=Object.keys(e),n=r.length;n--;)J(e[r[n]],t)}}function K(e){e._watchers=[],q(e),W(e),Z(e),Y(e),Q(e)}function q(e){var t=e.$options.props;if(t){var n=e.$options.propsData||{},r=e.$options._propKeys=Object.keys(t),i=!e.$parent;gi.shouldConvert=i;for(var o=function(i){var o=r[i];A(e,o,R(o,t,n,e))},a=0;a<r.length;a++)o(a);gi.shouldConvert=!0}}function W(e){var t=e.$options.data;t=e._data=\"function\"==typeof t?t.call(e):t||{},f(t)||(t={});for(var n=Object.keys(t),r=e.$options.props,o=n.length;o--;)r&&i(r,n[o])||te(e,n[o]);k(t),t.__ob__&&t.__ob__.vmCount++}function Z(e){var t=e.$options.computed;if(t)for(var n in t){var r=t[n];\"function\"==typeof r?(ji.get=G(r,e),ji.set=p):(ji.get=r.get?r.cache!==!1?G(r.get,e):s(r.get,e):p,ji.set=r.set?s(r.set,e):p),Object.defineProperty(e,n,ji)}}function G(e,t){var n=new Si(t,e,p,{lazy:!0});return function(){return n.dirty&&n.evaluate(),di.target&&n.depend(),n.value}}function Y(e){var t=e.$options.methods;if(t)for(var n in t)e[n]=null==t[n]?p:s(t[n],e)}function Q(e){var t=e.$options.watch;if(t)for(var n in t){var r=t[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)X(e,n,r[i]);else X(e,n,r)}}function X(e,t,n){var r;f(n)&&(r=n,n=n.handler),\"string\"==typeof n&&(n=e[n]),e.$watch(t,n,r)}function ee(e){var t={};t.get=function(){return this._data},Object.defineProperty(e.prototype,\"$data\",t),e.prototype.$set=O,e.prototype.$delete=S,e.prototype.$watch=function(e,t,n){var r=this;n=n||{},n.user=!0;var i=new Si(r,e,t,n);return n.immediate&&t.call(r,i.value),function(){i.teardown()}}}function te(e,t){g(t)||Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){return e._data[t]},set:function(n){e._data[t]=n}})}function ne(e){var t=new Ei(e.tag,e.data,e.children,e.text,e.elm,e.ns,e.context,e.componentOptions);return t.isStatic=e.isStatic,t.key=e.key,t.isCloned=!0,t}function re(e){for(var t=new Array(e.length),n=0;n<e.length;n++)t[n]=ne(e[n]);return t}function ie(e,t,n,r){r+=t;var i=e.__injected||(e.__injected={});if(!i[r]){i[r]=!0;var o=e[t];o?e[t]=function(){o.apply(this,arguments),n.apply(this,arguments)}:e[t]=n}}function oe(e,t,n,r,i){var o,a,s,c,l,u;for(o in e)if(a=e[o],s=t[o],a)if(s){if(a!==s)if(Array.isArray(s)){s.length=a.length;for(var f=0;f<s.length;f++)s[f]=a[f];e[o]=s}else s.fn=a,e[o]=s}else u=\"!\"===o.charAt(0),l=u?o.slice(1):o,Array.isArray(a)?n(l,a.invoker=ae(a),u):(a.invoker||(c=a,a=e[o]={},a.fn=c,a.invoker=se(a)),n(l,a.invoker,u));else;for(o in t)e[o]||(l=\"!\"===o.charAt(0)?o.slice(1):o,r(l,t[o].invoker))}function ae(e){return function(t){for(var n=arguments,r=1===arguments.length,i=0;i<e.length;i++)r?e[i](t):e[i].apply(null,n)}}function se(e){return function(t){var n=1===arguments.length;n?e.fn(t):e.fn.apply(null,arguments)}}function ce(e,t,n){if(o(e))return[le(e)];if(Array.isArray(e)){for(var r=[],i=0,a=e.length;i<a;i++){var s=e[i],c=r[r.length-1];Array.isArray(s)?r.push.apply(r,ce(s,t,(n||\"\")+\"_\"+i)):o(s)?c&&c.text?c.text+=String(s):\"\"!==s&&r.push(le(s)):s instanceof Ei&&(s.text&&c&&c.text?c.isCloned||(c.text+=s.text):(t&&ue(s,t),s.tag&&null==s.key&&null!=n&&(s.key=\"__vlist\"+n+\"_\"+i+\"__\"),r.push(s)))}return r}}function le(e){return new Ei(void 0,void 0,void 0,String(e))}function ue(e,t){if(e.tag&&!e.ns&&(e.ns=t,e.children))for(var n=0,r=e.children.length;n<r;n++)ue(e.children[n],t)}function fe(e){return e&&e.filter(function(e){return e&&e.componentOptions})[0]}function de(e){var t=e.$options,n=t.parent;if(n&&!t.abstract){for(;n.$options.abstract&&n.$parent;)n=n.$parent;n.$children.push(e)}e.$parent=n,e.$root=n?n.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}function pe(e){e.prototype._mount=function(e,t){var n=this;return n.$el=e,n.$options.render||(n.$options.render=Ni),ve(n,\"beforeMount\"),n._watcher=new Si(n,function(){n._update(n._render(),t)},p),t=!1,null==n.$vnode&&(n._isMounted=!0,ve(n,\"mounted\")),n},e.prototype._update=function(e,t){var n=this;n._isMounted&&ve(n,\"beforeUpdate\");var r=n.$el,i=Li;Li=n;var o=n._vnode;n._vnode=e,o?n.$el=n.__patch__(o,e):n.$el=n.__patch__(n.$el,e,t),Li=i,r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el),n._isMounted&&ve(n,\"updated\")},e.prototype._updateFromParent=function(e,t,n,r){var i=this,o=!(!i.$options._renderChildren&&!r);if(i.$options._parentVnode=n,i.$vnode=n,i._vnode&&(i._vnode.parent=n),i.$options._renderChildren=r,e&&i.$options.props){gi.shouldConvert=!1;for(var a=i.$options._propKeys||[],s=0;s<a.length;s++){var c=a[s];i[c]=R(c,i.$options.props,e,i)}gi.shouldConvert=!0,i.$options.propsData=e}if(t){var l=i.$options._parentListeners;i.$options._parentListeners=t,i._updateListeners(t,l)}o&&(i.$slots=Ee(r,i._renderContext),i.$forceUpdate())},e.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){ve(e,\"beforeDestroy\"),e._isBeingDestroyed=!0;var t=e.$parent;!t||t._isBeingDestroyed||e.$options.abstract||r(t.$children,e),e._watcher&&e._watcher.teardown();for(var n=e._watchers.length;n--;)e._watchers[n].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,ve(e,\"destroyed\"),e.$off(),e.$el&&(e.$el.__vue__=null),e.__patch__(e._vnode,null)}}}function ve(e,t){var n=e.$options[t];if(n)for(var r=0,i=n.length;r<i;r++)n[r].call(e);e.$emit(\"hook:\"+t)}function he(e,t,n,r,i){if(e){var o=n.$options._base;if(u(e)&&(e=o.extend(e)),\"function\"==typeof e){if(!e.cid)if(e.resolved)e=e.resolved;else if(e=we(e,o,function(){n.$forceUpdate()}),!e)return;Pe(e),t=t||{};var a=xe(t,e);if(e.options.functional)return me(e,a,t,n,r);var s=t.on;t.on=t.nativeOn,e.options.abstract&&(t={}),ke(t);var c=e.options.name||i,l=new Ei(\"vue-component-\"+e.cid+(c?\"-\"+c:\"\"),t,void 0,void 0,void 0,void 0,n,{Ctor:e,propsData:a,listeners:s,tag:i,children:r});return l}}}function me(e,t,n,r,i){var o={},a=e.options.props;if(a)for(var c in a)o[c]=R(c,a,t);var l=e.options.render.call(null,s(Oe,{_self:Object.create(r)}),{props:o,data:n,parent:r,children:ce(i),slots:function(){return Ee(i,r)}});return l instanceof Ei&&(l.functionalContext=r,n.slot&&((l.data||(l.data={})).slot=n.slot)),l}function ge(e,t){var n=e.componentOptions,r={_isComponent:!0,parent:t,propsData:n.propsData,_componentTag:n.tag,_parentVnode:e,_parentListeners:n.listeners,_renderChildren:n.children},i=e.data.inlineTemplate;return i&&(r.render=i.render,r.staticRenderFns=i.staticRenderFns),new n.Ctor(r)}function ye(e,t){if(!e.child||e.child._isDestroyed){var n=e.child=ge(e,Li);n.$mount(t?e.elm:void 0,t)}else if(e.data.keepAlive){var r=e;_e(r,r)}}function _e(e,t){var n=t.componentOptions,r=t.child=e.child;r._updateFromParent(n.propsData,n.listeners,t,n.children)}function be(e){e.child._isMounted||(e.child._isMounted=!0,ve(e.child,\"mounted\")),e.data.keepAlive&&(e.child._inactive=!1,ve(e.child,\"activated\"))}function $e(e){e.child._isDestroyed||(e.data.keepAlive?(e.child._inactive=!0,ve(e.child,\"deactivated\")):e.child.$destroy())}function we(e,t,n){if(!e.requested){e.requested=!0;var r=e.pendingCallbacks=[n],i=!0,o=function(n){if(u(n)&&(n=t.extend(n)),e.resolved=n,!i)for(var o=0,a=r.length;o<a;o++)r[o](n)},a=function(e){},s=e(o,a);return s&&\"function\"==typeof s.then&&!e.resolved&&s.then(o,a),i=!1,e.resolved}e.pendingCallbacks.push(n)}function xe(e,t){var n=t.options.props;if(n){var r={},i=e.attrs,o=e.props,a=e.domProps;if(i||o||a)for(var s in n){var c=Kr(s);Ce(r,o,s,c,!0)||Ce(r,i,s,c)||Ce(r,a,s,c)}return r}}function Ce(e,t,n,r,o){if(t){if(i(t,n))return e[n]=t[n],o||delete t[n],!0;if(i(t,r))return e[n]=t[r],o||delete t[r],!0}return!1}function ke(e){e.hook||(e.hook={});for(var t=0;t<Mi.length;t++){var n=Mi[t],r=e.hook[n],i=Di[n];e.hook[n]=r?Ae(i,r):i}}function Ae(e,t){return function(n,r){e(n,r),t(n,r)}}function Oe(e,t,n){return t&&(Array.isArray(t)||\"object\"!=typeof t)&&(n=t,t=void 0),Se(this._self,e,t,n)}function Se(e,t,n,r){if(!n||!n.__ob__){if(!t)return Ni();if(Array.isArray(r)&&\"function\"==typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),\"string\"==typeof t){var i,o=li.getTagNamespace(t);if(li.isReservedTag(t))return new Ei(t,n,ce(r,o),void 0,void 0,o,e);if(i=P(e.$options,\"components\",t))return he(i,n,e,r,t);var a=\"foreignObject\"===t?\"xhtml\":o;return new Ei(t,n,ce(r,a),void 0,void 0,o,e)}return he(t,n,e,r)}}function Te(e){e.$vnode=null,e._vnode=null,e._staticTrees=null,e._renderContext=e.$options._parentVnode&&e.$options._parentVnode.context,e.$slots=Ee(e.$options._renderChildren,e._renderContext),e.$scopedSlots={},e.$createElement=s(Oe,e),e.$options.el&&e.$mount(e.$options.el)}function je(n){function r(e,t,n){if(Array.isArray(e))for(var r=0;r<e.length;r++)e[r]&&\"string\"!=typeof e[r]&&i(e[r],t+\"_\"+r,n);else i(e,t,n)}function i(e,t,n){e.isStatic=!0,e.key=t,e.isOnce=n}n.prototype.$nextTick=function(e){return si(e,this)},n.prototype._render=function(){var e=this,t=e.$options,n=t.render,r=t.staticRenderFns,i=t._parentVnode;if(e._isMounted)for(var o in e.$slots)e.$slots[o]=re(e.$slots[o]);i&&i.data.scopedSlots&&(e.$scopedSlots=i.data.scopedSlots),r&&!e._staticTrees&&(e._staticTrees=[]),e.$vnode=i;var a;try{a=n.call(e._renderProxy,e.$createElement)}catch(t){if(li.errorHandler)li.errorHandler.call(null,t,e);else{if(oi())throw t;console.error(t)}a=e._vnode}return a instanceof Ei||(a=Ni()),a.parent=i,a},n.prototype._h=Oe,n.prototype._s=e,n.prototype._n=t,n.prototype._e=Ni,n.prototype._q=h,n.prototype._i=m,n.prototype._m=function(e,t){var n=this._staticTrees[e];return n&&!t?Array.isArray(n)?re(n):ne(n):(n=this._staticTrees[e]=this.$options.staticRenderFns[e].call(this._renderProxy),r(n,\"__static__\"+e,!1),n)},n.prototype._o=function(e,t,n){return r(e,\"__once__\"+t+(n?\"_\"+n:\"\"),!0),e};var o=function(e){return e};n.prototype._f=function(e){return P(this.$options,\"filters\",e,!0)||o},n.prototype._l=function(e,t){var n,r,i,o,a;if(Array.isArray(e))for(n=new Array(e.length),r=0,i=e.length;r<i;r++)n[r]=t(e[r],r);else if(\"number\"==typeof e)for(n=new Array(e),r=0;r<e;r++)n[r]=t(r+1,r);else if(u(e))for(o=Object.keys(e),n=new Array(o.length),r=0,i=o.length;r<i;r++)a=o[r],n[r]=t(e[a],a,r);return n},n.prototype._t=function(e,t,n){var r=this.$scopedSlots[e];if(r)return r(n||{})||t;var i=this.$slots[e];return i||t},n.prototype._b=function(e,t,n,r){if(n)if(u(n)){Array.isArray(n)&&(n=d(n));for(var i in n)if(\"class\"===i||\"style\"===i)e[i]=n[i];else{var o=r||li.mustUseProp(t,i)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={});o[i]=n[i]}}else;return e},n.prototype._k=function(e){return li.keyCodes[e]}}function Ee(e,t){var n={};if(!e)return n;for(var r,i,o=ce(e)||[],a=[],s=0,c=o.length;s<c;s++)if(i=o[s],(i.context===t||i.functionalContext===t)&&i.data&&(r=i.data.slot)){var l=n[r]||(n[r]=[]);\"template\"===i.tag?l.push.apply(l,i.children):l.push(i)}else a.push(i);return a.length&&(1!==a.length||\" \"!==a[0].text&&!a[0].isComment)&&(n.default=a),n}function Ne(e){e._events=Object.create(null);var t=e.$options._parentListeners,n=s(e.$on,e),r=s(e.$off,e);e._updateListeners=function(t,i){oe(t,i||{},n,r,e)},t&&e._updateListeners(t)}function Le(e){e.prototype.$on=function(e,t){var n=this;return(n._events[e]||(n._events[e]=[])).push(t),n},e.prototype.$once=function(e,t){function n(){r.$off(e,n),t.apply(r,arguments)}var r=this;return n.fn=t,r.$on(e,n),r},e.prototype.$off=function(e,t){var n=this;if(!arguments.length)return n._events=Object.create(null),n;var r=n._events[e];if(!r)return n;if(1===arguments.length)return n._events[e]=null,n;for(var i,o=r.length;o--;)if(i=r[o],i===t||i.fn===t){r.splice(o,1);break}return n},e.prototype.$emit=function(e){var t=this,n=t._events[e];if(n){n=n.length>1?c(n):n;for(var r=c(arguments,1),i=0,o=n.length;i<o;i++)n[i].apply(t,r)}return t}}function De(e){e.prototype._init=function(e){var t=this;t._uid=Pi++,t._isVue=!0,e&&e._isComponent?Me(t,e):t.$options=M(Pe(t.constructor),e||{},t),t._renderProxy=t,t._self=t,de(t),Ne(t),ve(t,\"beforeCreate\"),K(t),ve(t,\"created\"),Te(t)}}function Me(e,t){var n=e.$options=Object.create(e.constructor.options);n.parent=t.parent,n.propsData=t.propsData,n._parentVnode=t._parentVnode,n._parentListeners=t._parentListeners,n._renderChildren=t._renderChildren,n._componentTag=t._componentTag,t.render&&(n.render=t.render,n.staticRenderFns=t.staticRenderFns)}function Pe(e){var t=e.options;if(e.super){var n=e.super.options,r=e.superOptions,i=e.extendOptions;n!==r&&(e.superOptions=n,i.render=t.render,i.staticRenderFns=t.staticRenderFns,i._scopeId=t._scopeId,t=e.options=M(n,i),t.name&&(t.components[t.name]=e))}return t}function Re(e){this._init(e)}function Ie(e){e.use=function(e){if(!e.installed){var t=c(arguments,1);return t.unshift(this),\"function\"==typeof e.install?e.install.apply(e,t):e.apply(null,t),e.installed=!0,this}}}function Fe(e){e.mixin=function(e){this.options=M(this.options,e)}}function Be(e){e.cid=0;var t=1;e.extend=function(e){e=e||{};var n=this,r=n.cid,i=e._Ctor||(e._Ctor={});if(i[r])return i[r];var o=e.name||n.options.name,a=function(e){this._init(e)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=t++,a.options=M(n.options,e),a.super=n,a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,li._assetTypes.forEach(function(e){a[e]=n[e]}),o&&(a.options.components[o]=a),a.superOptions=n.options,a.extendOptions=e,i[r]=a,a}}function Ue(e){li._assetTypes.forEach(function(t){e[t]=function(e,n){return n?(\"component\"===t&&f(n)&&(n.name=n.name||e,n=this.options._base.extend(n)),\"directive\"===t&&\"function\"==typeof n&&(n={bind:n,update:n}),this.options[t+\"s\"][e]=n,n):this.options[t+\"s\"][e]}})}function He(e,t){return\"string\"==typeof e?e.split(\",\").indexOf(t)>-1:e.test(t)}function Ve(e){var t={};t.get=function(){return li},Object.defineProperty(e,\"config\",t),e.util=$i,e.set=O,e.delete=S,e.nextTick=si,e.options=Object.create(null),li._assetTypes.forEach(function(t){e.options[t+\"s\"]=Object.create(null)}),e.options._base=e,l(e.options.components,Fi),Ie(e),Fe(e),Be(e),Ue(e)}function ze(e){for(var t=e.data,n=e,r=e;r.child;)r=r.child._vnode,r.data&&(t=Je(r.data,t));for(;n=n.parent;)n.data&&(t=Je(t,n.data));return Ke(t)}function Je(e,t){return{staticClass:qe(e.staticClass,t.staticClass),class:e.class?[e.class,t.class]:t.class}}function Ke(e){var t=e.class,n=e.staticClass;return n||t?qe(n,We(t)):\"\"}function qe(e,t){return e?t?e+\" \"+t:e:t||\"\"}function We(e){var t=\"\";if(!e)return t;if(\"string\"==typeof e)return e;if(Array.isArray(e)){for(var n,r=0,i=e.length;r<i;r++)e[r]&&(n=We(e[r]))&&(t+=n+\" \");return t.slice(0,-1)}if(u(e)){for(var o in e)e[o]&&(t+=o+\" \");return t.slice(0,-1)}return t}function Ze(e){return Xi(e)?\"svg\":\"math\"===e?\"math\":void 0}function Ge(e){if(!Qr)return!0;if(to(e))return!1;if(e=e.toLowerCase(),null!=no[e])return no[e];var t=document.createElement(e);return e.indexOf(\"-\")>-1?no[e]=t.constructor===window.HTMLUnknownElement||t.constructor===window.HTMLElement:no[e]=/HTMLUnknownElement/.test(t.toString())}function Ye(e){if(\"string\"==typeof e){if(e=document.querySelector(e),!e)return document.createElement(\"div\")}return e}function Qe(e,t){var n=document.createElement(e);return\"select\"!==e?n:(t.data&&t.data.attrs&&\"multiple\"in t.data.attrs&&n.setAttribute(\"multiple\",\"multiple\"),n)}function Xe(e,t){return document.createElementNS(Wi[e],t)}function et(e){return document.createTextNode(e)}function tt(e){return document.createComment(e)}function nt(e,t,n){e.insertBefore(t,n)}function rt(e,t){e.removeChild(t)}function it(e,t){e.appendChild(t)}function ot(e){return e.parentNode}function at(e){return e.nextSibling}function st(e){return e.tagName}function ct(e,t){e.textContent=t}function lt(e){return e.childNodes}function ut(e,t,n){e.setAttribute(t,n)}function ft(e,t){var n=e.data.ref;if(n){var i=e.context,o=e.child||e.elm,a=i.$refs;t?Array.isArray(a[n])?r(a[n],o):a[n]===o&&(a[n]=void 0):e.data.refInFor?Array.isArray(a[n])&&a[n].indexOf(o)<0?a[n].push(o):a[n]=[o]:a[n]=o}}function dt(e){return null==e}function pt(e){return null!=e}function vt(e,t){return e.key===t.key&&e.tag===t.tag&&e.isComment===t.isComment&&!e.data==!t.data}function ht(e,t,n){var r,i,o={};for(r=t;r<=n;++r)i=e[r].key,pt(i)&&(o[i]=r);return o}function mt(e){function t(e){return new Ei(x.tagName(e).toLowerCase(),{},[],void 0,e)}function n(e,t){function n(){0===--n.listeners&&r(e)}return n.listeners=t,n}function r(e){var t=x.parentNode(e);t&&x.removeChild(t,e)}function i(e,t,n){var r,i=e.data;if(e.isRootInsert=!n,pt(i)&&(pt(r=i.hook)&&pt(r=r.init)&&r(e),pt(r=e.child)))return l(e,t),e.elm;var o=e.children,s=e.tag;return pt(s)?(e.elm=e.ns?x.createElementNS(e.ns,s):x.createElement(s,e),u(e),a(e,o,t),pt(i)&&c(e,t)):e.isComment?e.elm=x.createComment(e.text):e.elm=x.createTextNode(e.text),e.elm}function a(e,t,n){if(Array.isArray(t))for(var r=0;r<t.length;++r)x.appendChild(e.elm,i(t[r],n,!0));else o(e.text)&&x.appendChild(e.elm,x.createTextNode(e.text))}function s(e){for(;e.child;)e=e.child._vnode;return pt(e.tag)}function c(e,t){for(var n=0;n<$.create.length;++n)$.create[n](oo,e);_=e.data.hook,pt(_)&&(_.create&&_.create(oo,e),_.insert&&t.push(e))}function l(e,t){e.data.pendingInsert&&t.push.apply(t,e.data.pendingInsert),e.elm=e.child.$el,s(e)?(c(e,t),u(e)):(ft(e),t.push(e))}function u(e){var t;pt(t=e.context)&&pt(t=t.$options._scopeId)&&x.setAttribute(e.elm,t,\"\"),pt(t=Li)&&t!==e.context&&pt(t=t.$options._scopeId)&&x.setAttribute(e.elm,t,\"\")}function f(e,t,n,r,o,a){for(;r<=o;++r)x.insertBefore(e,i(n[r],a),t)}function d(e){var t,n,r=e.data;if(pt(r))for(pt(t=r.hook)&&pt(t=t.destroy)&&t(e),t=0;t<$.destroy.length;++t)$.destroy[t](e);if(pt(t=e.children))for(n=0;n<e.children.length;++n)d(e.children[n])}function p(e,t,n,r){for(;n<=r;++n){var i=t[n];pt(i)&&(pt(i.tag)?(v(i),d(i)):x.removeChild(e,i.elm))}}function v(e,t){if(t||pt(e.data)){var i=$.remove.length+1;for(t?t.listeners+=i:t=n(e.elm,i),pt(_=e.child)&&pt(_=_._vnode)&&pt(_.data)&&v(_,t),_=0;_<$.remove.length;++_)$.remove[_](e,t);pt(_=e.data.hook)&&pt(_=_.remove)?_(e,t):t()}else r(e.elm)}function h(e,t,n,r,o){for(var a,s,c,l,u=0,d=0,v=t.length-1,h=t[0],g=t[v],y=n.length-1,_=n[0],b=n[y],$=!o;u<=v&&d<=y;)dt(h)?h=t[++u]:dt(g)?g=t[--v]:vt(h,_)?(m(h,_,r),h=t[++u],_=n[++d]):vt(g,b)?(m(g,b,r),g=t[--v],b=n[--y]):vt(h,b)?(m(h,b,r),$&&x.insertBefore(e,h.elm,x.nextSibling(g.elm)),h=t[++u],b=n[--y]):vt(g,_)?(m(g,_,r),$&&x.insertBefore(e,g.elm,h.elm),g=t[--v],_=n[++d]):(dt(a)&&(a=ht(t,u,v)),s=pt(_.key)?a[_.key]:null,dt(s)?(x.insertBefore(e,i(_,r),h.elm),_=n[++d]):(c=t[s],c.tag!==_.tag?(x.insertBefore(e,i(_,r),h.elm),_=n[++d]):(m(c,_,r),t[s]=void 0,$&&x.insertBefore(e,_.elm,h.elm),_=n[++d])));u>v?(l=dt(n[y+1])?null:n[y+1].elm,f(e,l,n,d,y,r)):d>y&&p(e,t,u,v)}function m(e,t,n,r){if(e!==t){if(t.isStatic&&e.isStatic&&t.key===e.key&&(t.isCloned||t.isOnce))return t.elm=e.elm,void(t.child=e.child);var i,o=t.data,a=pt(o);a&&pt(i=o.hook)&&pt(i=i.prepatch)&&i(e,t);var c=t.elm=e.elm,l=e.children,u=t.children;if(a&&s(t)){for(i=0;i<$.update.length;++i)$.update[i](e,t);pt(i=o.hook)&&pt(i=i.update)&&i(e,t)}dt(t.text)?pt(l)&&pt(u)?l!==u&&h(c,l,u,n,r):pt(u)?(pt(e.text)&&x.setTextContent(c,\"\"),f(c,null,u,0,u.length-1,n)):pt(l)?p(c,l,0,l.length-1):pt(e.text)&&x.setTextContent(c,\"\"):e.text!==t.text&&x.setTextContent(c,t.text),a&&pt(i=o.hook)&&pt(i=i.postpatch)&&i(e,t)}}function g(e,t,n){if(n&&e.parent)e.parent.data.pendingInsert=t;else for(var r=0;r<t.length;++r)t[r].data.hook.insert(t[r])}function y(e,t,n){t.elm=e;var r=t.tag,i=t.data,o=t.children;if(pt(i)&&(pt(_=i.hook)&&pt(_=_.init)&&_(t,!0),pt(_=t.child)))return l(t,n),!0;if(pt(r)){if(pt(o)){var s=x.childNodes(e);if(s.length){var u=!0;if(s.length!==o.length)u=!1;else for(var f=0;f<o.length;f++)if(!y(s[f],o[f],n)){u=!1;break}if(!u)return!1}else a(t,o,n)}pt(i)&&c(t,n)}return!0}var _,b,$={},w=e.modules,x=e.nodeOps;for(_=0;_<ao.length;++_)for($[ao[_]]=[],b=0;b<w.length;++b)void 0!==w[b][ao[_]]&&$[ao[_]].push(w[b][ao[_]]);return function(e,n,r,o){if(!n)return void(e&&d(e));var a,c,l=!1,u=[];if(e){var f=pt(e.nodeType);if(!f&&vt(e,n))m(e,n,u,o);else{if(f){if(1===e.nodeType&&e.hasAttribute(\"server-rendered\")&&(e.removeAttribute(\"server-rendered\"),r=!0),r&&y(e,n,u))return g(n,u,!0),e;e=t(e)}if(a=e.elm,c=x.parentNode(a),i(n,u),n.parent){for(var v=n.parent;v;)v.elm=n.elm,v=v.parent;if(s(n))for(var h=0;h<$.create.length;++h)$.create[h](oo,n.parent)}null!==c?(x.insertBefore(c,n.elm,x.nextSibling(a)),p(c,[e],0,0)):pt(e.tag)&&d(e)}}else l=!0,i(n,u);return g(n,u,l),n.elm}}function gt(e,t){if(e.data.directives||t.data.directives){var n,r,i,o=e===oo,a=yt(e.data.directives,e.context),s=yt(t.data.directives,t.context),c=[],l=[];for(n in s)r=a[n],i=s[n],r?(i.oldValue=r.value,bt(i,\"update\",t,e),i.def&&i.def.componentUpdated&&l.push(i)):(bt(i,\"bind\",t,e),i.def&&i.def.inserted&&c.push(i));if(c.length){var u=function(){c.forEach(function(n){bt(n,\"inserted\",t,e)})};o?ie(t.data.hook||(t.data.hook={}),\"insert\",u,\"dir-insert\"):u()}if(l.length&&ie(t.data.hook||(t.data.hook={}),\"postpatch\",function(){l.forEach(function(n){bt(n,\"componentUpdated\",t,e)})},\"dir-postpatch\"),!o)for(n in a)s[n]||bt(a[n],\"unbind\",e)}}function yt(e,t){var n=Object.create(null);if(!e)return n;var r,i;for(r=0;r<e.length;r++)i=e[r],i.modifiers||(i.modifiers=co),n[_t(i)]=i,i.def=P(t.$options,\"directives\",i.name,!0);return n}function _t(e){return e.rawName||e.name+\".\"+Object.keys(e.modifiers||{}).join(\".\")}function bt(e,t,n,r){var i=e.def&&e.def[t];i&&i(n.elm,e,n,r)}function $t(e,t){if(e.data.attrs||t.data.attrs){var n,r,i,o=t.elm,a=e.data.attrs||{},s=t.data.attrs||{};s.__ob__&&(s=t.data.attrs=l({},s));for(n in s)r=s[n],i=a[n],i!==r&&wt(o,n,r);for(n in a)null==s[n]&&(Ji(n)?o.removeAttributeNS(zi,Ki(n)):Hi(n)||o.removeAttribute(n))}}function wt(e,t,n){Vi(t)?qi(n)?e.removeAttribute(t):e.setAttribute(t,t):Hi(t)?e.setAttribute(t,qi(n)||\"false\"===n?\"false\":\"true\"):Ji(t)?qi(n)?e.removeAttributeNS(zi,Ki(t)):e.setAttributeNS(zi,t,n):qi(n)?e.removeAttribute(t):e.setAttribute(t,n)}function xt(e,t){var n=t.elm,r=t.data,i=e.data;if(r.staticClass||r.class||i&&(i.staticClass||i.class)){var o=ze(t),a=n._transitionClasses;a&&(o=qe(o,We(a))),o!==n._prevClass&&(n.setAttribute(\"class\",o),n._prevClass=o)}}function Ct(e,t){if(e.data.on||t.data.on){var n=t.data.on||{},r=e.data.on||{},i=t.elm._v_add||(t.elm._v_add=function(e,n,r){t.elm.addEventListener(e,n,r)}),o=t.elm._v_remove||(t.elm._v_remove=function(e,n){t.elm.removeEventListener(e,n)});oe(n,r,i,o,t.context)}}function kt(e,t){if(e.data.domProps||t.data.domProps){var n,r,i=t.elm,o=e.data.domProps||{},a=t.data.domProps||{};a.__ob__&&(a=t.data.domProps=l({},a));for(n in o)null==a[n]&&(i[n]=\"\");for(n in a)if(r=a[n],\"textContent\"!==n&&\"innerHTML\"!==n||(t.children&&(t.children.length=0),r!==o[n]))if(\"value\"===n){i._value=r;var s=null==r?\"\":String(r);i.value===s||i.composing||(i.value=s)}else i[n]=r}}function At(e){var t=Ot(e.style);return e.staticStyle?l(e.staticStyle,t):t}function Ot(e){return Array.isArray(e)?d(e):\"string\"==typeof e?ho(e):e}function St(e,t){var n,r={};if(t)for(var i=e;i.child;)i=i.child._vnode,i.data&&(n=At(i.data))&&l(r,n);(n=At(e.data))&&l(r,n);for(var o=e;o=o.parent;)o.data&&(n=At(o.data))&&l(r,n);return r}function Tt(e,t){var n=t.data,r=e.data;if(n.staticStyle||n.style||r.staticStyle||r.style){var i,o,a=t.elm,s=e.data.staticStyle,c=e.data.style||{},u=s||c,f=Ot(t.data.style)||{};t.data.style=f.__ob__?l({},f):f;var d=St(t,!0);for(o in u)null==d[o]&&go(a,o,\"\");for(o in d)i=d[o],i!==u[o]&&go(a,o,null==i?\"\":i)}}function jt(e,t){if(t&&t.trim())if(e.classList)t.indexOf(\" \")>-1?t.split(/\\s+/).forEach(function(t){return e.classList.add(t)}):e.classList.add(t);else{var n=\" \"+e.getAttribute(\"class\")+\" \";n.indexOf(\" \"+t+\" \")<0&&e.setAttribute(\"class\",(n+t).trim())}}function Et(e,t){if(t&&t.trim())if(e.classList)t.indexOf(\" \")>-1?t.split(/\\s+/).forEach(function(t){return e.classList.remove(t)}):e.classList.remove(t);else{for(var n=\" \"+e.getAttribute(\"class\")+\" \",r=\" \"+t+\" \";n.indexOf(r)>=0;)n=n.replace(r,\" \");e.setAttribute(\"class\",n.trim())}}function Nt(e){So(function(){So(e)})}function Lt(e,t){(e._transitionClasses||(e._transitionClasses=[])).push(t),jt(e,t)}function Dt(e,t){e._transitionClasses&&r(e._transitionClasses,t),Et(e,t)}function Mt(e,t,n){var r=Pt(e,t),i=r.type,o=r.timeout,a=r.propCount;if(!i)return n();var s=i===wo?ko:Oo,c=0,l=function(){e.removeEventListener(s,u),n()},u=function(t){t.target===e&&++c>=a&&l()};setTimeout(function(){c<a&&l()},o+1),e.addEventListener(s,u)}function Pt(e,t){var n,r=window.getComputedStyle(e),i=r[Co+\"Delay\"].split(\", \"),o=r[Co+\"Duration\"].split(\", \"),a=Rt(i,o),s=r[Ao+\"Delay\"].split(\", \"),c=r[Ao+\"Duration\"].split(\", \"),l=Rt(s,c),u=0,f=0;t===wo?a>0&&(n=wo,u=a,f=o.length):t===xo?l>0&&(n=xo,u=l,f=c.length):(u=Math.max(a,l),n=u>0?a>l?wo:xo:null,f=n?n===wo?o.length:c.length:0);var d=n===wo&&To.test(r[Co+\"Property\"]);return{type:n,timeout:u,propCount:f,hasTransform:d}}function Rt(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max.apply(null,t.map(function(t,n){return It(t)+It(e[n])}))}function It(e){return 1e3*Number(e.slice(0,-1))}function Ft(e){var t=e.elm;t._leaveCb&&(t._leaveCb.cancelled=!0,t._leaveCb());var n=Ut(e.data.transition);if(n&&!t._enterCb&&1===t.nodeType){var r=n.css,i=n.type,o=n.enterClass,a=n.enterActiveClass,s=n.appearClass,c=n.appearActiveClass,l=n.beforeEnter,u=n.enter,f=n.afterEnter,d=n.enterCancelled,p=n.beforeAppear,v=n.appear,h=n.afterAppear,m=n.appearCancelled,g=Li.$vnode,y=g&&g.parent?g.parent.context:Li,_=!y._isMounted||!e.isRootInsert;if(!_||v||\"\"===v){var b=_?s:o,$=_?c:a,w=_?p||l:l,x=_&&\"function\"==typeof v?v:u,C=_?h||f:f,k=_?m||d:d,A=r!==!1&&!ti,O=x&&(x._length||x.length)>1,S=t._enterCb=Ht(function(){A&&Dt(t,$),S.cancelled?(A&&Dt(t,b),k&&k(t)):C&&C(t),t._enterCb=null});e.data.show||ie(e.data.hook||(e.data.hook={}),\"insert\",function(){var n=t.parentNode,r=n&&n._pending&&n._pending[e.key];r&&r.tag===e.tag&&r.elm._leaveCb&&r.elm._leaveCb(),x&&x(t,S)},\"transition-insert\"),w&&w(t),A&&(Lt(t,b),Lt(t,$),Nt(function(){Dt(t,b),S.cancelled||O||Mt(t,i,S)})),e.data.show&&x&&x(t,S),A||O||S()}}}function Bt(e,t){function n(){m.cancelled||(e.data.show||((r.parentNode._pending||(r.parentNode._pending={}))[e.key]=e),l&&l(r),v&&(Lt(r,s),Lt(r,c),Nt(function(){Dt(r,s),m.cancelled||h||Mt(r,a,m)})),u&&u(r,m),v||h||m())}var r=e.elm;r._enterCb&&(r._enterCb.cancelled=!0,r._enterCb());var i=Ut(e.data.transition);if(!i)return t();if(!r._leaveCb&&1===r.nodeType){var o=i.css,a=i.type,s=i.leaveClass,c=i.leaveActiveClass,l=i.beforeLeave,u=i.leave,f=i.afterLeave,d=i.leaveCancelled,p=i.delayLeave,v=o!==!1&&!ti,h=u&&(u._length||u.length)>1,m=r._leaveCb=Ht(function(){r.parentNode&&r.parentNode._pending&&(r.parentNode._pending[e.key]=null),v&&Dt(r,c),m.cancelled?(v&&Dt(r,s),d&&d(r)):(t(),f&&f(r)),r._leaveCb=null});p?p(n):n()}}function Ut(e){if(e){if(\"object\"==typeof e){var t={};return e.css!==!1&&l(t,jo(e.name||\"v\")),\r\nl(t,e),t}return\"string\"==typeof e?jo(e):void 0}}function Ht(e){var t=!1;return function(){t||(t=!0,e())}}function Vt(e,t,n){var r=t.value,i=e.multiple;if(!i||Array.isArray(r)){for(var o,a,s=0,c=e.options.length;s<c;s++)if(a=e.options[s],i)o=m(r,Jt(a))>-1,a.selected!==o&&(a.selected=o);else if(h(Jt(a),r))return void(e.selectedIndex!==s&&(e.selectedIndex=s));i||(e.selectedIndex=-1)}}function zt(e,t){for(var n=0,r=t.length;n<r;n++)if(h(Jt(t[n]),e))return!1;return!0}function Jt(e){return\"_value\"in e?e._value:e.value}function Kt(e){e.target.composing=!0}function qt(e){e.target.composing=!1,Wt(e.target,\"input\")}function Wt(e,t){var n=document.createEvent(\"HTMLEvents\");n.initEvent(t,!0,!0),e.dispatchEvent(n)}function Zt(e){return!e.child||e.data&&e.data.transition?e:Zt(e.child._vnode)}function Gt(e){var t=e&&e.componentOptions;return t&&t.Ctor.options.abstract?Gt(fe(t.children)):e}function Yt(e){var t={},n=e.$options;for(var r in n.propsData)t[r]=e[r];var i=n._parentListeners;for(var o in i)t[Vr(o)]=i[o].fn;return t}function Qt(e,t){return/\\d-keep-alive$/.test(t.tag)?e(\"keep-alive\"):null}function Xt(e){for(;e=e.parent;)if(e.data.transition)return!0}function en(e){e.elm._moveCb&&e.elm._moveCb(),e.elm._enterCb&&e.elm._enterCb()}function tn(e){e.data.newPos=e.elm.getBoundingClientRect()}function nn(e){var t=e.data.pos,n=e.data.newPos,r=t.left-n.left,i=t.top-n.top;if(r||i){e.data.moved=!0;var o=e.elm.style;o.transform=o.WebkitTransform=\"translate(\"+r+\"px,\"+i+\"px)\",o.transitionDuration=\"0s\"}}function rn(e,t){var n=document.createElement(\"div\");return n.innerHTML='<div a=\"'+e+'\">',n.innerHTML.indexOf(t)>0}function on(e){return Vo=Vo||document.createElement(\"div\"),Vo.innerHTML=e,Vo.textContent}function an(e,t){return t&&(e=e.replace(Da,\"\\n\")),e.replace(Na,\"<\").replace(La,\">\").replace(Ma,\"&\").replace(Pa,'\"')}function sn(e,t){function n(t){f+=t,e=e.substring(t)}function r(){var t=e.match(Yo);if(t){var r={tagName:t[1],attrs:[],start:f};n(t[0].length);for(var i,o;!(i=e.match(Qo))&&(o=e.match(Wo));)n(o[0].length),r.attrs.push(o);if(i)return r.unarySlash=i[1],n(i[0].length),r.end=f,r}}function i(e){var n=e.tagName,r=e.unarySlash;l&&(\"p\"===s&&Qi(n)&&o(\"\",s),Yi(n)&&s===n&&o(\"\",n));for(var i=u(n)||\"html\"===n&&\"head\"===s||!!r,a=e.attrs.length,f=new Array(a),d=0;d<a;d++){var p=e.attrs[d];ra&&p[0].indexOf('\"\"')===-1&&(\"\"===p[3]&&delete p[3],\"\"===p[4]&&delete p[4],\"\"===p[5]&&delete p[5]);var v=p[3]||p[4]||p[5]||\"\";f[d]={name:p[1],value:an(v,t.shouldDecodeNewlines)}}i||(c.push({tag:n,attrs:f}),s=n,r=\"\"),t.start&&t.start(n,f,i,e.start,e.end)}function o(e,n,r,i){var o;if(null==r&&(r=f),null==i&&(i=f),n){var a=n.toLowerCase();for(o=c.length-1;o>=0&&c[o].tag.toLowerCase()!==a;o--);}else o=0;if(o>=0){for(var l=c.length-1;l>=o;l--)t.end&&t.end(c[l].tag,r,i);c.length=o,s=o&&c[o-1].tag}else\"br\"===n.toLowerCase()?t.start&&t.start(n,[],!0,r,i):\"p\"===n.toLowerCase()&&(t.start&&t.start(n,[],!1,r,i),t.end&&t.end(n,r,i))}for(var a,s,c=[],l=t.expectHTML,u=t.isUnaryTag||Zr,f=0;e;){if(a=e,s&&ja(s,t.sfc,c)){var d=s.toLowerCase(),p=Ea[d]||(Ea[d]=new RegExp(\"([\\\\s\\\\S]*?)(</\"+d+\"[^>]*>)\",\"i\")),v=0,h=e.replace(p,function(e,n,r){return v=r.length,\"script\"!==d&&\"style\"!==d&&\"noscript\"!==d&&(n=n.replace(/<!--([\\s\\S]*?)-->/g,\"$1\").replace(/<!\\[CDATA\\[([\\s\\S]*?)]]>/g,\"$1\")),t.chars&&t.chars(n),\"\"});f+=e.length-h.length,e=h,o(\"</\"+d+\">\",d,f-v,f)}else{var m=e.indexOf(\"<\");if(0===m){if(ta.test(e)){var g=e.indexOf(\"-->\");if(g>=0){n(g+3);continue}}if(na.test(e)){var y=e.indexOf(\"]>\");if(y>=0){n(y+2);continue}}var _=e.match(ea);if(_){n(_[0].length);continue}var b=e.match(Xo);if(b){var $=f;n(b[0].length),o(b[0],b[1],$,f);continue}var w=r();if(w){i(w);continue}}var x=void 0,C=void 0,k=void 0;if(m>0){for(C=e.slice(m);!(Xo.test(C)||Yo.test(C)||ta.test(C)||na.test(C)||(k=C.indexOf(\"<\",1),k<0));)m+=k,C=e.slice(m);x=e.substring(0,m),n(m)}m<0&&(x=e,e=\"\"),t.chars&&x&&t.chars(x)}if(e===a&&t.chars){t.chars(e);break}}o()}function cn(e){function t(){(a||(a=[])).push(e.slice(v,i).trim()),v=i+1}var n,r,i,o,a,s=!1,c=!1,l=!1,u=!1,f=0,d=0,p=0,v=0;for(i=0;i<e.length;i++)if(r=n,n=e.charCodeAt(i),s)39===n&&92!==r&&(s=!1);else if(c)34===n&&92!==r&&(c=!1);else if(l)96===n&&92!==r&&(l=!1);else if(u)47===n&&92!==r&&(u=!1);else if(124!==n||124===e.charCodeAt(i+1)||124===e.charCodeAt(i-1)||f||d||p)switch(n){case 34:c=!0;break;case 39:s=!0;break;case 96:l=!0;break;case 47:u=!0;break;case 40:p++;break;case 41:p--;break;case 91:d++;break;case 93:d--;break;case 123:f++;break;case 125:f--}else void 0===o?(v=i+1,o=e.slice(0,i).trim()):t();if(void 0===o?o=e.slice(0,i).trim():0!==v&&t(),a)for(i=0;i<a.length;i++)o=ln(o,a[i]);return o}function ln(e,t){var n=t.indexOf(\"(\");if(n<0)return'_f(\"'+t+'\")('+e+\")\";var r=t.slice(0,n),i=t.slice(n+1);return'_f(\"'+r+'\")('+e+\",\"+i}function un(e,t){var n=t?Fa(t):Ra;if(n.test(e)){for(var r,i,o=[],a=n.lastIndex=0;r=n.exec(e);){i=r.index,i>a&&o.push(JSON.stringify(e.slice(a,i)));var s=cn(r[1].trim());o.push(\"_s(\"+s+\")\"),a=i+r[0].length}return a<e.length&&o.push(JSON.stringify(e.slice(a))),o.join(\"+\")}}function fn(e){console.error(\"[Vue parser]: \"+e)}function dn(e,t){return e?e.map(function(e){return e[t]}).filter(function(e){return e}):[]}function pn(e,t,n){(e.props||(e.props=[])).push({name:t,value:n})}function vn(e,t,n){(e.attrs||(e.attrs=[])).push({name:t,value:n})}function hn(e,t,n,r,i,o){(e.directives||(e.directives=[])).push({name:t,rawName:n,value:r,arg:i,modifiers:o})}function mn(e,t,n,r,i){r&&r.capture&&(delete r.capture,t=\"!\"+t);var o;r&&r.native?(delete r.native,o=e.nativeEvents||(e.nativeEvents={})):o=e.events||(e.events={});var a={value:n,modifiers:r},s=o[t];Array.isArray(s)?i?s.unshift(a):s.push(a):s?o[t]=i?[a,s]:[s,a]:o[t]=a}function gn(e,t,n){var r=yn(e,\":\"+t)||yn(e,\"v-bind:\"+t);if(null!=r)return cn(r);if(n!==!1){var i=yn(e,t);if(null!=i)return JSON.stringify(i)}}function yn(e,t){var n;if(null!=(n=e.attrsMap[t]))for(var r=e.attrsList,i=0,o=r.length;i<o;i++)if(r[i].name===t){r.splice(i,1);break}return n}function _n(e){if(oa=e,ia=oa.length,sa=ca=la=0,e.indexOf(\"[\")<0||e.lastIndexOf(\"]\")<ia-1)return{exp:e,idx:null};for(;!$n();)aa=bn(),wn(aa)?Cn(aa):91===aa&&xn(aa);return{exp:e.substring(0,ca),idx:e.substring(ca+1,la)}}function bn(){return oa.charCodeAt(++sa)}function $n(){return sa>=ia}function wn(e){return 34===e||39===e}function xn(e){var t=1;for(ca=sa;!$n();)if(e=bn(),wn(e))Cn(e);else if(91===e&&t++,93===e&&t--,0===t){la=sa;break}}function Cn(e){for(var t=e;!$n()&&(e=bn(),e!==t););}function kn(e,t){ua=t.warn||fn,fa=t.getTagNamespace||Zr,da=t.mustUseProp||Zr,pa=t.isPreTag||Zr,va=dn(t.modules,\"preTransformNode\"),ha=dn(t.modules,\"transformNode\"),ma=dn(t.modules,\"postTransformNode\"),ga=t.delimiters;var n,r,i=[],o=t.preserveWhitespace!==!1,a=!1,s=!1;return sn(e,{expectHTML:t.expectHTML,isUnaryTag:t.isUnaryTag,shouldDecodeNewlines:t.shouldDecodeNewlines,start:function(e,o,c){function l(e){}var u=r&&r.ns||fa(e);ei&&\"svg\"===u&&(o=Vn(o));var f={type:1,tag:e,attrsList:o,attrsMap:Bn(o),parent:r,children:[]};u&&(f.ns=u),Hn(f)&&!oi()&&(f.forbidden=!0);for(var d=0;d<va.length;d++)va[d](f,t);if(a||(An(f),f.pre&&(a=!0)),pa(f.tag)&&(s=!0),a)On(f);else{jn(f),En(f),Dn(f),Sn(f),f.plain=!f.key&&!o.length,Tn(f),Mn(f),Pn(f);for(var p=0;p<ha.length;p++)ha[p](f,t);Rn(f)}if(n?i.length||n.if&&(f.elseif||f.else)&&(l(f),Ln(n,{exp:f.elseif,block:f})):(n=f,l(n)),r&&!f.forbidden)if(f.elseif||f.else)Nn(f,r);else if(f.slotScope){r.plain=!1;var v=f.slotTarget||\"default\";(r.scopedSlots||(r.scopedSlots={}))[v]=f}else r.children.push(f),f.parent=r;c||(r=f,i.push(f));for(var h=0;h<ma.length;h++)ma[h](f,t)},end:function(){var e=i[i.length-1],t=e.children[e.children.length-1];t&&3===t.type&&\" \"===t.text&&e.children.pop(),i.length-=1,r=i[i.length-1],e.pre&&(a=!1),pa(e.tag)&&(s=!1)},chars:function(e){if(r&&(!ei||\"textarea\"!==r.tag||r.attrsMap.placeholder!==e)&&(e=s||e.trim()?qa(e):o&&r.children.length?\" \":\"\")){var t;!a&&\" \"!==e&&(t=un(e,ga))?r.children.push({type:2,expression:t,text:e}):r.children.push({type:3,text:e})}}}),n}function An(e){null!=yn(e,\"v-pre\")&&(e.pre=!0)}function On(e){var t=e.attrsList.length;if(t)for(var n=e.attrs=new Array(t),r=0;r<t;r++)n[r]={name:e.attrsList[r].name,value:JSON.stringify(e.attrsList[r].value)};else e.pre||(e.plain=!0)}function Sn(e){var t=gn(e,\"key\");t&&(e.key=t)}function Tn(e){var t=gn(e,\"ref\");t&&(e.ref=t,e.refInFor=In(e))}function jn(e){var t;if(t=yn(e,\"v-for\")){var n=t.match(Ua);if(!n)return;e.for=n[2].trim();var r=n[1].trim(),i=r.match(Ha);i?(e.alias=i[1].trim(),e.iterator1=i[2].trim(),i[3]&&(e.iterator2=i[3].trim())):e.alias=r}}function En(e){var t=yn(e,\"v-if\");if(t)e.if=t,Ln(e,{exp:t,block:e});else{null!=yn(e,\"v-else\")&&(e.else=!0);var n=yn(e,\"v-else-if\");n&&(e.elseif=n)}}function Nn(e,t){var n=Un(t.children);n&&n.if&&Ln(n,{exp:e.elseif,block:e})}function Ln(e,t){e.conditions||(e.conditions=[]),e.conditions.push(t)}function Dn(e){var t=yn(e,\"v-once\");null!=t&&(e.once=!0)}function Mn(e){if(\"slot\"===e.tag)e.slotName=gn(e,\"name\");else{var t=gn(e,\"slot\");t&&(e.slotTarget='\"\"'===t?'\"default\"':t),\"template\"===e.tag&&(e.slotScope=yn(e,\"scope\"))}}function Pn(e){var t;(t=gn(e,\"is\"))&&(e.component=t),null!=yn(e,\"inline-template\")&&(e.inlineTemplate=!0)}function Rn(e){var t,n,r,i,o,a,s,c,l=e.attrsList;for(t=0,n=l.length;t<n;t++)if(r=i=l[t].name,o=l[t].value,Ba.test(r))if(e.hasBindings=!0,s=Fn(r),s&&(r=r.replace(Ka,\"\")),Va.test(r))r=r.replace(Va,\"\"),o=cn(o),s&&(s.prop&&(c=!0,r=Vr(r),\"innerHtml\"===r&&(r=\"innerHTML\")),s.camel&&(r=Vr(r))),c||da(e.tag,r)?pn(e,r,o):vn(e,r,o);else if(za.test(r))r=r.replace(za,\"\"),mn(e,r,o,s);else{r=r.replace(Ba,\"\");var u=r.match(Ja);u&&(a=u[1])&&(r=r.slice(0,-(a.length+1))),hn(e,r,i,o,a,s)}else vn(e,r,JSON.stringify(o))}function In(e){for(var t=e;t;){if(void 0!==t.for)return!0;t=t.parent}return!1}function Fn(e){var t=e.match(Ka);if(t){var n={};return t.forEach(function(e){n[e.slice(1)]=!0}),n}}function Bn(e){for(var t={},n=0,r=e.length;n<r;n++)t[e[n].name]=e[n].value;return t}function Un(e){for(var t=e.length;t--;)if(e[t].tag)return e[t]}function Hn(e){return\"style\"===e.tag||\"script\"===e.tag&&(!e.attrsMap.type||\"text/javascript\"===e.attrsMap.type)}function Vn(e){for(var t=[],n=0;n<e.length;n++){var r=e[n];Wa.test(r.name)||(r.name=r.name.replace(Za,\"\"),t.push(r))}return t}function zn(e,t){e&&(ya=Ga(t.staticKeys||\"\"),_a=t.isReservedTag||function(){return!1},Kn(e),qn(e,!1))}function Jn(e){return n(\"type,tag,attrsList,attrsMap,plain,parent,children,attrs\"+(e?\",\"+e:\"\"))}function Kn(e){if(e.static=Zn(e),1===e.type){if(!_a(e.tag)&&\"slot\"!==e.tag&&null==e.attrsMap[\"inline-template\"])return;for(var t=0,n=e.children.length;t<n;t++){var r=e.children[t];Kn(r),r.static||(e.static=!1)}}}function qn(e,t){if(1===e.type){if((e.static||e.once)&&(e.staticInFor=t),e.static&&e.children.length&&(1!==e.children.length||3!==e.children[0].type))return void(e.staticRoot=!0);if(e.staticRoot=!1,e.children)for(var n=0,r=e.children.length;n<r;n++)qn(e.children[n],t||!!e.for);e.conditions&&Wn(e.conditions,t)}}function Wn(e,t){for(var n=1,r=e.length;n<r;n++)qn(e[n].block,t)}function Zn(e){return 2!==e.type&&(3===e.type||!(!e.pre&&(e.hasBindings||e.if||e.for||Br(e.tag)||!_a(e.tag)||Gn(e)||!Object.keys(e).every(ya))))}function Gn(e){for(;e.parent;){if(e=e.parent,\"template\"!==e.tag)return!1;if(e.for)return!0}return!1}function Yn(e,t){var n=t?\"nativeOn:{\":\"on:{\";for(var r in e)n+='\"'+r+'\":'+Qn(r,e[r])+\",\";return n.slice(0,-1)+\"}\"}function Qn(e,t){if(t){if(Array.isArray(t))return\"[\"+t.map(function(t){return Qn(e,t)}).join(\",\")+\"]\";if(t.modifiers){var n=\"\",r=[],i=ts.test(e);for(var o in t.modifiers)es[o]?n+=es[o]:i&&ns[o]?n+=ns[o]:r.push(o);r.length&&(n=Xn(r)+n);var a=Qa.test(t.value)?t.value+\"($event)\":t.value;return\"function($event){\"+n+a+\"}\"}return Ya.test(t.value)||Qa.test(t.value)?t.value:\"function($event){\"+t.value+\"}\"}return\"function(){}\"}function Xn(e){var t=1===e.length?er(e[0]):Array.prototype.concat.apply([],e.map(er));return Array.isArray(t)?\"if(\"+t.map(function(e){return\"$event.keyCode!==\"+e}).join(\"&&\")+\")return;\":\"if($event.keyCode!==\"+t+\")return;\"}function er(e){return parseInt(e,10)||Xa[e]||\"_k(\"+JSON.stringify(e)+\")\"}function tr(e,t){e.wrapData=function(n){return\"_b(\"+n+\",'\"+e.tag+\"',\"+t.value+(t.modifiers&&t.modifiers.prop?\",true\":\"\")+\")\"}}function nr(e,t){var n=Ca,r=Ca=[],i=ka;ka=0,Aa=t,ba=t.warn||fn,$a=dn(t.modules,\"transformCode\"),wa=dn(t.modules,\"genData\"),xa=t.directives||{};var o=e?rr(e):'_h(\"div\")';return Ca=n,ka=i,{render:\"with(this){return \"+o+\"}\",staticRenderFns:r}}function rr(e){if(e.staticRoot&&!e.staticProcessed)return ir(e);if(e.once&&!e.onceProcessed)return or(e);if(e.for&&!e.forProcessed)return cr(e);if(e.if&&!e.ifProcessed)return ar(e);if(\"template\"!==e.tag||e.slotTarget){if(\"slot\"===e.tag)return gr(e);var t;if(e.component)t=yr(e.component,e);else{var n=e.plain?void 0:lr(e),r=e.inlineTemplate?null:vr(e);t=\"_h('\"+e.tag+\"'\"+(n?\",\"+n:\"\")+(r?\",\"+r:\"\")+\")\"}for(var i=0;i<$a.length;i++)t=$a[i](e,t);return t}return vr(e)||\"void 0\"}function ir(e){return e.staticProcessed=!0,Ca.push(\"with(this){return \"+rr(e)+\"}\"),\"_m(\"+(Ca.length-1)+(e.staticInFor?\",true\":\"\")+\")\"}function or(e){if(e.onceProcessed=!0,e.if&&!e.ifProcessed)return ar(e);if(e.staticInFor){for(var t=\"\",n=e.parent;n;){if(n.for){t=n.key;break}n=n.parent}return t?\"_o(\"+rr(e)+\",\"+ka++ +(t?\",\"+t:\"\")+\")\":rr(e)}return ir(e)}function ar(e){return e.ifProcessed=!0,sr(e.conditions)}function sr(e){function t(e){return e.once?or(e):rr(e)}if(!e.length)return\"_e()\";var n=e.shift();return n.exp?\"(\"+n.exp+\")?\"+t(n.block)+\":\"+sr(e):\"\"+t(n.block)}function cr(e){var t=e.for,n=e.alias,r=e.iterator1?\",\"+e.iterator1:\"\",i=e.iterator2?\",\"+e.iterator2:\"\";return e.forProcessed=!0,\"_l((\"+t+\"),function(\"+n+r+i+\"){return \"+rr(e)+\"})\"}function lr(e){var t=\"{\",n=ur(e);n&&(t+=n+\",\"),e.key&&(t+=\"key:\"+e.key+\",\"),e.ref&&(t+=\"ref:\"+e.ref+\",\"),e.refInFor&&(t+=\"refInFor:true,\"),e.component&&(t+='tag:\"'+e.tag+'\",');for(var r=0;r<wa.length;r++)t+=wa[r](e);if(e.attrs&&(t+=\"attrs:{\"+_r(e.attrs)+\"},\"),e.props&&(t+=\"domProps:{\"+_r(e.props)+\"},\"),e.events&&(t+=Yn(e.events)+\",\"),e.nativeEvents&&(t+=Yn(e.nativeEvents,!0)+\",\"),e.slotTarget&&(t+=\"slot:\"+e.slotTarget+\",\"),e.scopedSlots&&(t+=dr(e.scopedSlots)+\",\"),e.inlineTemplate){var i=fr(e);i&&(t+=i+\",\")}return t=t.replace(/,$/,\"\")+\"}\",e.wrapData&&(t=e.wrapData(t)),t}function ur(e){var t=e.directives;if(t){var n,r,i,o,a=\"directives:[\",s=!1;for(n=0,r=t.length;n<r;n++){i=t[n],o=!0;var c=xa[i.name]||rs[i.name];c&&(o=!!c(e,i,ba)),o&&(s=!0,a+='{name:\"'+i.name+'\",rawName:\"'+i.rawName+'\"'+(i.value?\",value:(\"+i.value+\"),expression:\"+JSON.stringify(i.value):\"\")+(i.arg?',arg:\"'+i.arg+'\"':\"\")+(i.modifiers?\",modifiers:\"+JSON.stringify(i.modifiers):\"\")+\"},\")}return s?a.slice(0,-1)+\"]\":void 0}}function fr(e){var t=e.children[0];if(1===t.type){var n=nr(t,Aa);return\"inlineTemplate:{render:function(){\"+n.render+\"},staticRenderFns:[\"+n.staticRenderFns.map(function(e){return\"function(){\"+e+\"}\"}).join(\",\")+\"]}\"}}function dr(e){return\"scopedSlots:{\"+Object.keys(e).map(function(t){return pr(t,e[t])}).join(\",\")+\"}\"}function pr(e,t){return e+\":function(\"+String(t.attrsMap.scope)+\"){return \"+(\"template\"===t.tag?vr(t)||\"void 0\":rr(t))+\"}\"}function vr(e){if(e.children.length)return\"[\"+e.children.map(hr).join(\",\")+\"]\"}function hr(e){return 1===e.type?rr(e):mr(e)}function mr(e){return 2===e.type?e.expression:br(JSON.stringify(e.text))}function gr(e){var t=e.slotName||'\"default\"',n=vr(e);return\"_t(\"+t+(n?\",\"+n:\"\")+(e.attrs?(n?\"\":\",null\")+\",{\"+e.attrs.map(function(e){return Vr(e.name)+\":\"+e.value}).join(\",\")+\"}\":\"\")+\")\"}function yr(e,t){var n=t.inlineTemplate?null:vr(t);return\"_h(\"+e+\",\"+lr(t)+(n?\",\"+n:\"\")+\")\"}function _r(e){for(var t=\"\",n=0;n<e.length;n++){var r=e[n];t+='\"'+r.name+'\":'+br(r.value)+\",\"}return t.slice(0,-1)}function br(e){return e.replace(/\\u2028/g,\"\\\\u2028\").replace(/\\u2029/g,\"\\\\u2029\")}function $r(e,t){var n=kn(e.trim(),t);zn(n,t);var r=nr(n,t);return{ast:n,render:r.render,staticRenderFns:r.staticRenderFns}}function wr(e,t){var n=(t.warn||fn,yn(e,\"class\"));n&&(e.staticClass=JSON.stringify(n));var r=gn(e,\"class\",!1);r&&(e.classBinding=r)}function xr(e){var t=\"\";return e.staticClass&&(t+=\"staticClass:\"+e.staticClass+\",\"),e.classBinding&&(t+=\"class:\"+e.classBinding+\",\"),t}function Cr(e,t){var n=(t.warn||fn,yn(e,\"style\"));n&&(e.staticStyle=JSON.stringify(ho(n)));var r=gn(e,\"style\",!1);r&&(e.styleBinding=r)}function kr(e){var t=\"\";return e.staticStyle&&(t+=\"staticStyle:\"+e.staticStyle+\",\"),e.styleBinding&&(t+=\"style:(\"+e.styleBinding+\"),\"),t}function Ar(e,t,n){Oa=n;var r=t.value,i=t.modifiers,o=e.tag,a=e.attrsMap.type;return\"select\"===o?jr(e,r,i):\"input\"===o&&\"checkbox\"===a?Or(e,r,i):\"input\"===o&&\"radio\"===a?Sr(e,r,i):Tr(e,r,i),!0}function Or(e,t,n){var r=n&&n.number,i=gn(e,\"value\")||\"null\",o=gn(e,\"true-value\")||\"true\",a=gn(e,\"false-value\")||\"false\";pn(e,\"checked\",\"Array.isArray(\"+t+\")?_i(\"+t+\",\"+i+\")>-1:_q(\"+t+\",\"+o+\")\"),mn(e,\"change\",\"var $$a=\"+t+\",$$el=$event.target,$$c=$$el.checked?(\"+o+\"):(\"+a+\");if(Array.isArray($$a)){var $$v=\"+(r?\"_n(\"+i+\")\":i)+\",$$i=_i($$a,$$v);if($$c){$$i<0&&(\"+t+\"=$$a.concat($$v))}else{$$i>-1&&(\"+t+\"=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{\"+t+\"=$$c}\",null,!0)}function Sr(e,t,n){var r=n&&n.number,i=gn(e,\"value\")||\"null\";i=r?\"_n(\"+i+\")\":i,pn(e,\"checked\",\"_q(\"+t+\",\"+i+\")\"),mn(e,\"change\",Er(t,i),null,!0)}function Tr(e,t,n){var r=e.attrsMap.type,i=n||{},o=i.lazy,a=i.number,s=i.trim,c=o||ei&&\"range\"===r?\"change\":\"input\",l=!o&&\"range\"!==r,u=\"input\"===e.tag||\"textarea\"===e.tag,f=u?\"$event.target.value\"+(s?\".trim()\":\"\"):s?\"(typeof $event === 'string' ? $event.trim() : $event)\":\"$event\";f=a||\"number\"===r?\"_n(\"+f+\")\":f;var d=Er(t,f);u&&l&&(d=\"if($event.target.composing)return;\"+d),pn(e,\"value\",u?\"_s(\"+t+\")\":\"(\"+t+\")\"),mn(e,c,d,null,!0)}function jr(e,t,n){var r=n&&n.number,i='Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = \"_value\" in o ? o._value : o.value;return '+(r?\"_n(val)\":\"val\")+\"})\"+(null==e.attrsMap.multiple?\"[0]\":\"\"),o=Er(t,i);mn(e,\"change\",o,null,!0)}function Er(e,t){var n=_n(e);return null===n.idx?e+\"=\"+t:\"var $$exp = \"+n.exp+\", $$idx = \"+n.idx+\";if (!Array.isArray($$exp)){\"+e+\"=\"+t+\"}else{$$exp.splice($$idx, 1, \"+t+\")}\"}function Nr(e,t){t.value&&pn(e,\"textContent\",\"_s(\"+t.value+\")\")}function Lr(e,t){t.value&&pn(e,\"innerHTML\",\"_s(\"+t.value+\")\")}function Dr(e,t){return t=t?l(l({},ls),t):ls,$r(e,t)}function Mr(e,t,n){var r=(t&&t.warn||ui,t&&t.delimiters?String(t.delimiters)+e:e);if(cs[r])return cs[r];var i={},o=Dr(e,t);i.render=Pr(o.render);var a=o.staticRenderFns.length;i.staticRenderFns=new Array(a);for(var s=0;s<a;s++)i.staticRenderFns[s]=Pr(o.staticRenderFns[s]);return cs[r]=i}function Pr(e){try{return new Function(e)}catch(e){return p}}function Rr(e){if(e.outerHTML)return e.outerHTML;var t=document.createElement(\"div\");return t.appendChild(e.cloneNode(!0)),t.innerHTML}var Ir,Fr,Br=n(\"slot,component\",!0),Ur=Object.prototype.hasOwnProperty,Hr=/-(\\w)/g,Vr=a(function(e){return e.replace(Hr,function(e,t){return t?t.toUpperCase():\"\"})}),zr=a(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}),Jr=/([^-])([A-Z])/g,Kr=a(function(e){return e.replace(Jr,\"$1-$2\").replace(Jr,\"$1-$2\").toLowerCase()}),qr=Object.prototype.toString,Wr=\"[object Object]\",Zr=function(){return!1},Gr=/[^\\w.$]/,Yr=\"__proto__\"in{},Qr=\"undefined\"!=typeof window&&\"[object Object]\"!==Object.prototype.toString.call(window),Xr=Qr&&window.navigator.userAgent.toLowerCase(),ei=Xr&&/msie|trident/.test(Xr),ti=Xr&&Xr.indexOf(\"msie 9.0\")>0,ni=Xr&&Xr.indexOf(\"edge/\")>0,ri=Xr&&Xr.indexOf(\"android\")>0,ii=Xr&&/iphone|ipad|ipod|ios/.test(Xr),oi=function(){return void 0===Ir&&(Ir=!Qr&&\"undefined\"!=typeof global&&\"server\"===global.process.env.VUE_ENV),Ir},ai=Qr&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__,si=function(){function e(){r=!1;var e=n.slice(0);n.length=0;for(var t=0;t<e.length;t++)e[t]()}var t,n=[],r=!1;if(\"undefined\"!=typeof Promise&&b(Promise)){var i=Promise.resolve();t=function(){i.then(e),ii&&setTimeout(p)}}else if(\"undefined\"==typeof MutationObserver||!b(MutationObserver)&&\"[object MutationObserverConstructor]\"!==MutationObserver.toString())t=function(){setTimeout(e,0)};else{var o=1,a=new MutationObserver(e),s=document.createTextNode(String(o));a.observe(s,{characterData:!0}),t=function(){o=(o+1)%2,s.data=String(o)}}return function(e,i){var o;if(n.push(function(){e&&e.call(i),o&&o(i)}),r||(r=!0,t()),!e&&\"undefined\"!=typeof Promise)return new Promise(function(e){o=e})}}();Fr=\"undefined\"!=typeof Set&&b(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return void 0!==this.set[e]},e.prototype.add=function(e){this.set[e]=1},e.prototype.clear=function(){this.set=Object.create(null)},e}();var ci,li={optionMergeStrategies:Object.create(null),silent:!1,devtools:!1,errorHandler:null,ignoredElements:null,keyCodes:Object.create(null),isReservedTag:Zr,isUnknownElement:Zr,getTagNamespace:p,mustUseProp:Zr,_assetTypes:[\"component\",\"directive\",\"filter\"],_lifecycleHooks:[\"beforeCreate\",\"created\",\"beforeMount\",\"mounted\",\"beforeUpdate\",\"updated\",\"beforeDestroy\",\"destroyed\",\"activated\",\"deactivated\"],_maxUpdateCount:100},ui=p,fi=0,di=function(){this.id=fi++,this.subs=[]};di.prototype.addSub=function(e){this.subs.push(e)},di.prototype.removeSub=function(e){r(this.subs,e)},di.prototype.depend=function(){di.target&&di.target.addDep(this)},di.prototype.notify=function(){for(var e=this.subs.slice(),t=0,n=e.length;t<n;t++)e[t].update()},di.target=null;var pi=[],vi=Array.prototype,hi=Object.create(vi);[\"push\",\"pop\",\"shift\",\"unshift\",\"splice\",\"sort\",\"reverse\"].forEach(function(e){var t=vi[e];y(hi,e,function(){for(var n=arguments,r=arguments.length,i=new Array(r);r--;)i[r]=n[r];var o,a=t.apply(this,i),s=this.__ob__;switch(e){case\"push\":o=i;break;case\"unshift\":o=i;break;case\"splice\":o=i.slice(2)}return o&&s.observeArray(o),s.dep.notify(),a})});var mi=Object.getOwnPropertyNames(hi),gi={shouldConvert:!0,isSettingProps:!1},yi=function(e){if(this.value=e,this.dep=new di,this.vmCount=0,y(e,\"__ob__\",this),Array.isArray(e)){var t=Yr?x:C;t(e,hi,mi),this.observeArray(e)}else this.walk(e)};yi.prototype.walk=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)A(e,t[n],e[t[n]])},yi.prototype.observeArray=function(e){for(var t=0,n=e.length;t<n;t++)k(e[t])};var _i=li.optionMergeStrategies;_i.data=function(e,t,n){return n?e||t?function(){var r=\"function\"==typeof t?t.call(n):t,i=\"function\"==typeof e?e.call(n):void 0;return r?j(r,i):i}:void 0:t?\"function\"!=typeof t?e:e?function(){return j(t.call(this),e.call(this))}:t:e},li._lifecycleHooks.forEach(function(e){_i[e]=E}),li._assetTypes.forEach(function(e){_i[e+\"s\"]=N}),_i.watch=function(e,t){if(!t)return e;if(!e)return t;var n={};l(n,e);for(var r in t){var i=n[r],o=t[r];i&&!Array.isArray(i)&&(i=[i]),n[r]=i?i.concat(o):[o]}return n},_i.props=_i.methods=_i.computed=function(e,t){if(!t)return e;if(!e)return t;var n=Object.create(null);return l(n,e),l(n,t),n};var bi=function(e,t){return void 0===t?e:t},$i=Object.freeze({defineReactive:A,_toString:e,toNumber:t,makeMap:n,isBuiltInTag:Br,remove:r,hasOwn:i,isPrimitive:o,cached:a,camelize:Vr,capitalize:zr,hyphenate:Kr,bind:s,toArray:c,extend:l,isObject:u,isPlainObject:f,toObject:d,noop:p,no:Zr,genStaticKeys:v,looseEqual:h,looseIndexOf:m,isReserved:g,def:y,parsePath:_,hasProto:Yr,inBrowser:Qr,UA:Xr,isIE:ei,isIE9:ti,isEdge:ni,isAndroid:ri,isIOS:ii,isServerRendering:oi,devtools:ai,nextTick:si,get _Set(){return Fr},mergeOptions:M,resolveAsset:P,warn:ui,formatComponentName:ci,validateProp:R}),wi=[],xi={},Ci=!1,ki=!1,Ai=0,Oi=0,Si=function(e,t,n,r){void 0===r&&(r={}),this.vm=e,e._watchers.push(this),this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.expression=t.toString(),this.cb=n,this.id=++Oi,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new Fr,this.newDepIds=new Fr,\"function\"==typeof t?this.getter=t:(this.getter=_(t),this.getter||(this.getter=function(){})),this.value=this.lazy?void 0:this.get()};Si.prototype.get=function(){$(this);var e=this.getter.call(this.vm,this.vm);return this.deep&&z(e),w(),this.cleanupDeps(),e},Si.prototype.addDep=function(e){var t=e.id;this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this))},Si.prototype.cleanupDeps=function(){for(var e=this,t=this.deps.length;t--;){var n=e.deps[t];e.newDepIds.has(n.id)||n.removeSub(e)}var r=this.depIds;this.depIds=this.newDepIds,this.newDepIds=r,this.newDepIds.clear(),r=this.deps,this.deps=this.newDeps,this.newDeps=r,this.newDeps.length=0},Si.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():V(this)},Si.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||u(e)||this.deep){var t=this.value;if(this.value=e,this.user)try{this.cb.call(this.vm,e,t)}catch(e){if(!li.errorHandler)throw e;li.errorHandler.call(null,e,this.vm)}else this.cb.call(this.vm,e,t)}}},Si.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Si.prototype.depend=function(){for(var e=this,t=this.deps.length;t--;)e.deps[t].depend()},Si.prototype.teardown=function(){var e=this;if(this.active){this.vm._isBeingDestroyed||this.vm._vForRemoving||r(this.vm._watchers,this);for(var t=this.deps.length;t--;)e.deps[t].removeSub(e);this.active=!1}};var Ti=new Fr,ji={enumerable:!0,configurable:!0,get:p,set:p},Ei=function(e,t,n,r,i,o,a,s){this.tag=e,this.data=t,this.children=n,this.text=r,this.elm=i,this.ns=o,this.context=a,this.functionalContext=void 0,this.key=t&&t.key,this.componentOptions=s,this.child=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1},Ni=function(){var e=new Ei;return e.text=\"\",e.isComment=!0,e},Li=null,Di={init:ye,prepatch:_e,insert:be,destroy:$e},Mi=Object.keys(Di),Pi=0;De(Re),ee(Re),Le(Re),pe(Re),je(Re);var Ri=[String,RegExp],Ii={name:\"keep-alive\",abstract:!0,props:{include:Ri,exclude:Ri},created:function(){this.cache=Object.create(null)},render:function(){var e=fe(this.$slots.default);if(e&&e.componentOptions){var t=e.componentOptions,n=t.Ctor.options.name||t.tag;if(n&&(this.include&&!He(this.include,n)||this.exclude&&He(this.exclude,n)))return e;var r=null==e.key?t.Ctor.cid+(t.tag?\"::\"+t.tag:\"\"):e.key;this.cache[r]?e.child=this.cache[r].child:this.cache[r]=e,e.data.keepAlive=!0}return e},destroyed:function(){var e=this;for(var t in this.cache){var n=e.cache[t];ve(n.child,\"deactivated\"),n.child.$destroy()}}},Fi={KeepAlive:Ii};Ve(Re),Object.defineProperty(Re.prototype,\"$isServer\",{get:oi}),Re.version=\"2.1.3\";var Bi,Ui=function(e,t){return\"value\"===t&&(\"input\"===e||\"textarea\"===e||\"option\"===e)||\"selected\"===t&&\"option\"===e||\"checked\"===t&&\"input\"===e||\"muted\"===t&&\"video\"===e},Hi=n(\"contenteditable,draggable,spellcheck\"),Vi=n(\"allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible\"),zi=\"http://www.w3.org/1999/xlink\",Ji=function(e){return\":\"===e.charAt(5)&&\"xlink\"===e.slice(0,5)},Ki=function(e){return Ji(e)?e.slice(6,e.length):\"\"},qi=function(e){return null==e||e===!1},Wi={svg:\"http://www.w3.org/2000/svg\",math:\"http://www.w3.org/1998/Math/MathML\",xhtml:\"http://www.w3.org/1999/xhtml\"},Zi=n(\"html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template\"),Gi=n(\"area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr\",!0),Yi=n(\"colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source\",!0),Qi=n(\"address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track\",!0),Xi=n(\"svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font,font-face,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view\",!0),eo=function(e){return\"pre\"===e},to=function(e){return Zi(e)||Xi(e)},no=Object.create(null),ro=Object.freeze({createElement:Qe,createElementNS:Xe,createTextNode:et,createComment:tt,insertBefore:nt,removeChild:rt,appendChild:it,parentNode:ot,nextSibling:at,tagName:st,setTextContent:ct,childNodes:lt,setAttribute:ut}),io={create:function(e,t){ft(t)},update:function(e,t){e.data.ref!==t.data.ref&&(ft(e,!0),ft(t))},destroy:function(e){ft(e,!0)}},oo=new Ei(\"\",{},[]),ao=[\"create\",\"update\",\"remove\",\"destroy\"],so={create:gt,update:gt,destroy:function(e){gt(e,oo)}},co=Object.create(null),lo=[io,so],uo={create:$t,update:$t},fo={create:xt,update:xt},po={create:Ct,update:Ct},vo={create:kt,update:kt},ho=a(function(e){var t={},n=e.indexOf(\"background\")>=0,r=n?/;(?![^(]*\\))/g:\";\",i=n?/:(.+)/:\":\";return e.split(r).forEach(function(e){if(e){var n=e.split(i);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}),mo=/^--/,go=function(e,t,n){mo.test(t)?e.style.setProperty(t,n):e.style[_o(t)]=n},yo=[\"Webkit\",\"Moz\",\"ms\"],_o=a(function(e){if(Bi=Bi||document.createElement(\"div\"),e=Vr(e),\"filter\"!==e&&e in Bi.style)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<yo.length;n++){var r=yo[n]+t;if(r in Bi.style)return r}}),bo={create:Tt,update:Tt},$o=Qr&&!ti,wo=\"transition\",xo=\"animation\",Co=\"transition\",ko=\"transitionend\",Ao=\"animation\",Oo=\"animationend\";$o&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(Co=\"WebkitTransition\",ko=\"webkitTransitionEnd\"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(Ao=\"WebkitAnimation\",Oo=\"webkitAnimationEnd\"));var So=Qr&&window.requestAnimationFrame||setTimeout,To=/\\b(transform|all)(,|$)/,jo=a(function(e){return{enterClass:e+\"-enter\",leaveClass:e+\"-leave\",appearClass:e+\"-enter\",enterActiveClass:e+\"-enter-active\",leaveActiveClass:e+\"-leave-active\",appearActiveClass:e+\"-enter-active\"}}),Eo=Qr?{create:function(e,t){t.data.show||Ft(t)},remove:function(e,t){e.data.show?t():Bt(e,t)}}:{},No=[uo,fo,po,vo,bo,Eo],Lo=No.concat(lo),Do=mt({nodeOps:ro,modules:Lo});ti&&document.addEventListener(\"selectionchange\",function(){var e=document.activeElement;e&&e.vmodel&&Wt(e,\"input\")});var Mo={inserted:function(e,t,n){if(\"select\"===n.tag){var r=function(){Vt(e,t,n.context)};r(),(ei||ni)&&setTimeout(r,0)}else\"textarea\"!==n.tag&&\"text\"!==e.type||t.modifiers.lazy||(ri||(e.addEventListener(\"compositionstart\",Kt),e.addEventListener(\"compositionend\",qt)),ti&&(e.vmodel=!0))},componentUpdated:function(e,t,n){if(\"select\"===n.tag){Vt(e,t,n.context);var r=e.multiple?t.value.some(function(t){return zt(t,e.options)}):t.value!==t.oldValue&&zt(t.value,e.options);r&&Wt(e,\"change\")}}},Po={bind:function(e,t,n){var r=t.value;n=Zt(n);var i=n.data&&n.data.transition;r&&i&&!ti&&Ft(n);var o=\"none\"===e.style.display?\"\":e.style.display;e.style.display=r?o:\"none\",e.__vOriginalDisplay=o},update:function(e,t,n){var r=t.value,i=t.oldValue;if(r!==i){n=Zt(n);var o=n.data&&n.data.transition;o&&!ti?r?(Ft(n),e.style.display=e.__vOriginalDisplay):Bt(n,function(){e.style.display=\"none\"}):e.style.display=r?e.__vOriginalDisplay:\"none\"}}},Ro={model:Mo,show:Po},Io={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterActiveClass:String,leaveActiveClass:String,\r\nappearClass:String,appearActiveClass:String},Fo={name:\"transition\",props:Io,abstract:!0,render:function(e){var t=this,n=this.$slots.default;if(n&&(n=n.filter(function(e){return e.tag}),n.length)){var r=this.mode,i=n[0];if(Xt(this.$vnode))return i;var o=Gt(i);if(!o)return i;if(this._leaving)return Qt(e,i);var a=o.key=null==o.key||o.isStatic?\"__v\"+(o.tag+this._uid)+\"__\":o.key,s=(o.data||(o.data={})).transition=Yt(this),c=this._vnode,u=Gt(c);if(o.data.directives&&o.data.directives.some(function(e){return\"show\"===e.name})&&(o.data.show=!0),u&&u.data&&u.key!==a){var f=u.data.transition=l({},s);if(\"out-in\"===r)return this._leaving=!0,ie(f,\"afterLeave\",function(){t._leaving=!1,t.$forceUpdate()},a),Qt(e,i);if(\"in-out\"===r){var d,p=function(){d()};ie(s,\"afterEnter\",p,a),ie(s,\"enterCancelled\",p,a),ie(f,\"delayLeave\",function(e){d=e},a)}}return i}}},Bo=l({tag:String,moveClass:String},Io);delete Bo.mode;var Uo={props:Bo,render:function(e){for(var t=this.tag||this.$vnode.data.tag||\"span\",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],o=this.children=[],a=Yt(this),s=0;s<i.length;s++){var c=i[s];c.tag&&null!=c.key&&0!==String(c.key).indexOf(\"__vlist\")&&(o.push(c),n[c.key]=c,(c.data||(c.data={})).transition=a)}if(r){for(var l=[],u=[],f=0;f<r.length;f++){var d=r[f];d.data.transition=a,d.data.pos=d.elm.getBoundingClientRect(),n[d.key]?l.push(d):u.push(d)}this.kept=e(t,null,l),this.removed=u}return e(t,null,o)},beforeUpdate:function(){this.__patch__(this._vnode,this.kept,!1,!0),this._vnode=this.kept},updated:function(){var e=this.prevChildren,t=this.moveClass||(this.name||\"v\")+\"-move\";if(e.length&&this.hasMove(e[0].elm,t)){e.forEach(en),e.forEach(tn),e.forEach(nn);document.body.offsetHeight;e.forEach(function(e){if(e.data.moved){var n=e.elm,r=n.style;Lt(n,t),r.transform=r.WebkitTransform=r.transitionDuration=\"\",n.addEventListener(ko,n._moveCb=function e(r){r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(ko,e),n._moveCb=null,Dt(n,t))})}})}},methods:{hasMove:function(e,t){if(!$o)return!1;if(null!=this._hasMove)return this._hasMove;Lt(e,t);var n=Pt(e);return Dt(e,t),this._hasMove=n.hasTransform}}},Ho={Transition:Fo,TransitionGroup:Uo};Re.config.isUnknownElement=Ge,Re.config.isReservedTag=to,Re.config.getTagNamespace=Ze,Re.config.mustUseProp=Ui,l(Re.options.directives,Ro),l(Re.options.components,Ho),Re.prototype.__patch__=Qr?Do:p,Re.prototype.$mount=function(e,t){return e=e&&Qr?Ye(e):void 0,this._mount(e,t)},setTimeout(function(){li.devtools&&ai&&ai.emit(\"init\",Re)},0);var Vo,zo=!!Qr&&rn(\"\\n\",\"&#10;\"),Jo=/([^\\s\"'<>\\/=]+)/,Ko=/(?:=)/,qo=[/\"([^\"]*)\"+/.source,/'([^']*)'+/.source,/([^\\s\"'=<>`]+)/.source],Wo=new RegExp(\"^\\\\s*\"+Jo.source+\"(?:\\\\s*(\"+Ko.source+\")\\\\s*(?:\"+qo.join(\"|\")+\"))?\"),Zo=\"[a-zA-Z_][\\\\w\\\\-\\\\.]*\",Go=\"((?:\"+Zo+\"\\\\:)?\"+Zo+\")\",Yo=new RegExp(\"^<\"+Go),Qo=/^\\s*(\\/?)>/,Xo=new RegExp(\"^<\\\\/\"+Go+\"[^>]*>\"),ea=/^<!DOCTYPE [^>]+>/i,ta=/^<!--/,na=/^<!\\[/,ra=!1;\"x\".replace(/x(.)?/g,function(e,t){ra=\"\"===t});var ia,oa,aa,sa,ca,la,ua,fa,da,pa,va,ha,ma,ga,ya,_a,ba,$a,wa,xa,Ca,ka,Aa,Oa,Sa=n(\"script,style\",!0),Ta=function(e){return\"lang\"===e.name&&\"html\"!==e.value},ja=function(e,t,n){return!!Sa(e)||!(!t||1!==n.length)&&!(\"template\"===e&&!n[0].attrs.some(Ta))},Ea={},Na=/&lt;/g,La=/&gt;/g,Da=/&#10;/g,Ma=/&amp;/g,Pa=/&quot;/g,Ra=/\\{\\{((?:.|\\n)+?)\\}\\}/g,Ia=/[-.*+?^${}()|[\\]\\/\\\\]/g,Fa=a(function(e){var t=e[0].replace(Ia,\"\\\\$&\"),n=e[1].replace(Ia,\"\\\\$&\");return new RegExp(t+\"((?:.|\\\\n)+?)\"+n,\"g\")}),Ba=/^v-|^@|^:/,Ua=/(.*?)\\s+(?:in|of)\\s+(.*)/,Ha=/\\((\\{[^}]*\\}|[^,]*),([^,]*)(?:,([^,]*))?\\)/,Va=/^:|^v-bind:/,za=/^@|^v-on:/,Ja=/:(.*)$/,Ka=/\\.[^.]+/g,qa=a(on),Wa=/^xmlns:NS\\d+/,Za=/^NS\\d+:/,Ga=a(Jn),Ya=/^\\s*([\\w$_]+|\\([^)]*?\\))\\s*=>|^function\\s*\\(/,Qa=/^\\s*[A-Za-z_$][\\w$]*(?:\\.[A-Za-z_$][\\w$]*|\\['.*?']|\\[\".*?\"]|\\[\\d+]|\\[[A-Za-z_$][\\w$]*])*\\s*$/,Xa={esc:27,tab:9,enter:13,space:32,up:38,left:37,right:39,down:40,delete:[8,46]},es={stop:\"$event.stopPropagation();\",prevent:\"$event.preventDefault();\",self:\"if($event.target !== $event.currentTarget)return;\"},ts=/^mouse|^pointer|^(click|dblclick|contextmenu|wheel)$/,ns={ctrl:\"if(!$event.ctrlKey)return;\",shift:\"if(!$event.shiftKey)return;\",alt:\"if(!$event.altKey)return;\",meta:\"if(!$event.metaKey)return;\"},rs={bind:tr,cloak:p},is={staticKeys:[\"staticClass\"],transformNode:wr,genData:xr},os={staticKeys:[\"staticStyle\"],transformNode:Cr,genData:kr},as=[is,os],ss={model:Ar,text:Nr,html:Lr},cs=Object.create(null),ls={expectHTML:!0,modules:as,staticKeys:v(as),directives:ss,isReservedTag:to,isUnaryTag:Gi,mustUseProp:Ui,getTagNamespace:Ze,isPreTag:eo},us=a(function(e){var t=Ye(e);return t&&t.innerHTML}),fs=Re.prototype.$mount;return Re.prototype.$mount=function(e,t){if(e=e&&Ye(e),e===document.body||e===document.documentElement)return this;var n=this.$options;if(!n.render){var r=n.template;if(r)if(\"string\"==typeof r)\"#\"===r.charAt(0)&&(r=us(r));else{if(!r.nodeType)return this;r=r.innerHTML}else e&&(r=Rr(e));if(r){var i=Mr(r,{warn:ui,shouldDecodeNewlines:zo,delimiters:n.delimiters},this),o=i.render,a=i.staticRenderFns;n.render=o,n.staticRenderFns=a}}return fs.call(this,e,t)},Re.compile=Mr,Re});"

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(8)(__webpack_require__(19))

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	module.exports = "/**\r\n  * vue-router v2.1.0\r\n  * (c) 2016 Evan You\r\n  * @license MIT\r\n  */\r\n!function(t,e){\"object\"==typeof exports&&\"undefined\"!=typeof module?module.exports=e():\"function\"==typeof define&&define.amd?define(e):t.VueRouter=e()}(this,function(){\"use strict\";function t(t,e){t||\"undefined\"!=typeof console&&console.warn(\"[vue-router] \"+e)}function e(t,e){if(void 0===e&&(e={}),t){var r;try{r=n(t)}catch(t){r={}}for(var o in e)r[o]=e[o];return r}return e}function n(t){var e={};return(t=t.trim().replace(/^(\\?|#|&)/,\"\"))?(t.split(\"&\").forEach(function(t){var n=t.replace(/\\+/g,\" \").split(\"=\"),r=vt(n.shift()),o=n.length>0?vt(n.join(\"=\")):null;void 0===e[r]?e[r]=o:Array.isArray(e[r])?e[r].push(o):e[r]=[e[r],o]}),e):e}function r(t){var e=t?Object.keys(t).map(function(e){var n=t[e];if(void 0===n)return\"\";if(null===n)return yt(e);if(Array.isArray(n)){var r=[];return n.slice().forEach(function(t){void 0!==t&&(null===t?r.push(yt(e)):r.push(yt(e)+\"=\"+yt(t)))}),r.join(\"&\")}return yt(e)+\"=\"+yt(n)}).filter(function(t){return t.length>0}).join(\"&\"):null;return e?\"?\"+e:\"\"}function o(t,e,n){var r={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||\"/\",hash:e.hash||\"\",query:e.query||{},params:e.params||{},fullPath:a(e),matched:t?i(t):[]};return n&&(r.redirectedFrom=a(n)),Object.freeze(r)}function i(t){for(var e=[];t;)e.unshift(t),t=t.parent;return e}function a(t){var e=t.path,n=t.query;void 0===n&&(n={});var o=t.hash;return void 0===o&&(o=\"\"),(e||\"/\")+r(n)+o}function u(t,e){return e===mt?t===e:!!e&&(t.path&&e.path?t.path.replace(gt,\"\")===e.path.replace(gt,\"\")&&t.hash===e.hash&&c(t.query,e.query):!(!t.name||!e.name)&&(t.name===e.name&&t.hash===e.hash&&c(t.query,e.query)&&c(t.params,e.params)))}function c(t,e){void 0===t&&(t={}),void 0===e&&(e={});var n=Object.keys(t),r=Object.keys(e);return n.length===r.length&&n.every(function(n){return String(t[n])===String(e[n])})}function s(t,e){return 0===t.path.indexOf(e.path.replace(/\\/$/,\"\"))&&(!e.hash||t.hash===e.hash)&&p(t.query,e.query)}function p(t,e){for(var n in e)if(!(n in t))return!1;return!0}function f(t){if(!(t.metaKey||t.ctrlKey||t.shiftKey||t.defaultPrevented||0!==t.button)){var e=t.target.getAttribute(\"target\");if(!/\\b_blank\\b/i.test(e))return t.preventDefault(),!0}}function h(t){if(t)for(var e,n=0;n<t.length;n++){if(e=t[n],\"a\"===e.tag)return e;if(e.children&&(e=h(e.children)))return e}}function l(t){if(!l.installed){l.installed=!0,lt=t,Object.defineProperty(t.prototype,\"$router\",{get:function(){return this.$root._router}}),Object.defineProperty(t.prototype,\"$route\",{get:function(){return this.$root._route}}),t.mixin({beforeCreate:function(){this.$options.router&&(this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,\"_route\",this._router.history.current))}}),t.component(\"router-view\",dt),t.component(\"router-link\",bt);var e=t.config.optionMergeStrategies;e.beforeRouteEnter=e.beforeRouteLeave=e.created}}function d(t,e,n){if(\"/\"===t.charAt(0))return t;if(\"?\"===t.charAt(0)||\"#\"===t.charAt(0))return e+t;var r=e.split(\"/\");n&&r[r.length-1]||r.pop();for(var o=t.replace(/^\\//,\"\").split(\"/\"),i=0;i<o.length;i++){var a=o[i];\".\"!==a&&(\"..\"===a?r.pop():r.push(a))}return\"\"!==r[0]&&r.unshift(\"\"),r.join(\"/\")}function y(t){var e=\"\",n=\"\",r=t.indexOf(\"#\");r>=0&&(e=t.slice(r),t=t.slice(0,r));var o=t.indexOf(\"?\");return o>=0&&(n=t.slice(o+1),t=t.slice(0,o)),{path:t,query:n,hash:e}}function v(t){return t.replace(/\\/\\//g,\"/\")}function m(t){var e=Object.create(null),n=Object.create(null);return t.forEach(function(t){g(e,n,t)}),{pathMap:e,nameMap:n}}function g(t,e,n,r,o){var i=n.path,a=n.name,u={path:w(i,r),components:n.components||{default:n.component},instances:{},name:a,parent:r,matchAs:o,redirect:n.redirect,beforeEnter:n.beforeEnter,meta:n.meta||{}};n.children&&n.children.forEach(function(n){g(t,e,n,u)}),void 0!==n.alias&&(Array.isArray(n.alias)?n.alias.forEach(function(n){g(t,e,{path:n},r,u.path)}):g(t,e,{path:n.alias},r,u.path)),t[u.path]||(t[u.path]=u),a&&(e[a]||(e[a]=u))}function w(t,e){return t=t.replace(/\\/$/,\"\"),\"/\"===t[0]?t:null==e?t:v(e.path+\"/\"+t)}function b(t,e){for(var n,r=[],o=0,i=0,a=\"\",u=e&&e.delimiter||\"/\";null!=(n=_t.exec(t));){var c=n[0],s=n[1],p=n.index;if(a+=t.slice(i,p),i=p+c.length,s)a+=s[1];else{var f=t[i],h=n[2],l=n[3],d=n[4],y=n[5],v=n[6],m=n[7];a&&(r.push(a),a=\"\");var g=null!=h&&null!=f&&f!==h,w=\"+\"===v||\"*\"===v,b=\"?\"===v||\"*\"===v,x=n[2]||u,k=d||y;r.push({name:l||o++,prefix:h||\"\",delimiter:x,optional:b,repeat:w,partial:g,asterisk:!!m,pattern:k?j(k):m?\".*\":\"[^\"+E(x)+\"]+?\"})}}return i<t.length&&(a+=t.substr(i)),a&&r.push(a),r}function x(t,e){return A(b(t,e))}function k(t){return encodeURI(t).replace(/[\\/?#]/g,function(t){return\"%\"+t.charCodeAt(0).toString(16).toUpperCase()})}function O(t){return encodeURI(t).replace(/[?#]/g,function(t){return\"%\"+t.charCodeAt(0).toString(16).toUpperCase()})}function A(t){for(var e=new Array(t.length),n=0;n<t.length;n++)\"object\"==typeof t[n]&&(e[n]=new RegExp(\"^(?:\"+t[n].pattern+\")$\"));return function(n,r){for(var o=\"\",i=n||{},a=r||{},u=a.pretty?k:encodeURIComponent,c=0;c<t.length;c++){var s=t[c];if(\"string\"!=typeof s){var p,f=i[s.name];if(null==f){if(s.optional){s.partial&&(o+=s.prefix);continue}throw new TypeError('Expected \"'+s.name+'\" to be defined')}if(kt(f)){if(!s.repeat)throw new TypeError('Expected \"'+s.name+'\" to not repeat, but received `'+JSON.stringify(f)+\"`\");if(0===f.length){if(s.optional)continue;throw new TypeError('Expected \"'+s.name+'\" to not be empty')}for(var h=0;h<f.length;h++){if(p=u(f[h]),!e[c].test(p))throw new TypeError('Expected all \"'+s.name+'\" to match \"'+s.pattern+'\", but received `'+JSON.stringify(p)+\"`\");o+=(0===h?s.prefix:s.delimiter)+p}}else{if(p=s.asterisk?O(f):u(f),!e[c].test(p))throw new TypeError('Expected \"'+s.name+'\" to match \"'+s.pattern+'\", but received \"'+p+'\"');o+=s.prefix+p}}else o+=s}return o}}function E(t){return t.replace(/([.+*?=^!:${}()[\\]|\\/\\\\])/g,\"\\\\$1\")}function j(t){return t.replace(/([=!:$\\/()])/g,\"\\\\$1\")}function R(t,e){return t.keys=e,t}function _(t){return t.sensitive?\"\":\"i\"}function $(t,e){var n=t.source.match(/\\((?!\\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return R(t,e)}function T(t,e,n){for(var r=[],o=0;o<t.length;o++)r.push(C(t[o],e,n).source);var i=new RegExp(\"(?:\"+r.join(\"|\")+\")\",_(n));return R(i,e)}function S(t,e,n){return q(b(t,n),e,n)}function q(t,e,n){kt(e)||(n=e||n,e=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i=\"\",a=0;a<t.length;a++){var u=t[a];if(\"string\"==typeof u)i+=E(u);else{var c=E(u.prefix),s=\"(?:\"+u.pattern+\")\";e.push(u),u.repeat&&(s+=\"(?:\"+c+s+\")*\"),s=u.optional?u.partial?c+\"(\"+s+\")?\":\"(?:\"+c+\"(\"+s+\"))?\":c+\"(\"+s+\")\",i+=s}}var p=E(n.delimiter||\"/\"),f=i.slice(-p.length)===p;return r||(i=(f?i.slice(0,-p.length):i)+\"(?:\"+p+\"(?=$))?\"),i+=o?\"$\":r&&f?\"\":\"(?=\"+p+\"|$)\",R(new RegExp(\"^\"+i,_(n)),e)}function C(t,e,n){return kt(e)||(n=e||n,e=[]),n=n||{},t instanceof RegExp?$(t,e):kt(t)?T(t,e,n):S(t,e,n)}function P(t){var e,n,r=$t[t];return r?(e=r.keys,n=r.regexp):(e=[],n=Ot(t,e),$t[t]={keys:e,regexp:n}),{keys:e,regexp:n}}function U(t,e,n){try{var r=Tt[t]||(Tt[t]=Ot.compile(t));return r(e||{},{pretty:!0})}catch(t){return\"\"}}function L(t,n,r){var o=\"string\"==typeof t?{path:t}:t;if(o.name||o._normalized)return o;if(!o.path&&o.params&&n){o=z({},o),o._normalized=!0;var i=z(z({},n.params),o.params);if(n.name)o.name=n.name,o.params=i;else if(n.matched){var a=n.matched[n.matched.length-1].path;o.path=U(a,i,\"path \"+n.path)}return o}var u=y(o.path||\"\"),c=n&&n.path||\"/\",s=u.path?d(u.path,c,r||o.append):n&&n.path||\"/\",p=e(u.query,o.query),f=o.hash||u.hash;return f&&\"#\"!==f.charAt(0)&&(f=\"#\"+f),{_normalized:!0,path:s,query:p,hash:f}}function z(t,e){for(var n in e)t[n]=e[n];return t}function H(e){function n(t,e,n){var r=L(t,e),o=r.name;if(o){var i=s[o],u=P(i.path).keys.filter(function(t){return!t.optional}).map(function(t){return t.name});if(\"object\"!=typeof r.params&&(r.params={}),e&&\"object\"==typeof e.params)for(var p in e.params)!(p in r.params)&&u.indexOf(p)>-1&&(r.params[p]=e.params[p]);if(i)return r.path=U(i.path,r.params,'named route \"'+o+'\"'),a(i,r,n)}else if(r.path){r.params={};for(var f in c)if(M(f,r.params,r.path))return a(c[f],r,n)}return a(null,r)}function r(e,r){var i=e.redirect,u=\"function\"==typeof i?i(o(e,r)):i;if(\"string\"==typeof u&&(u={path:u}),!u||\"object\"!=typeof u)return a(null,r);var c=u,p=c.name,f=c.path,h=r.query,l=r.hash,d=r.params;if(h=c.hasOwnProperty(\"query\")?c.query:h,l=c.hasOwnProperty(\"hash\")?c.hash:l,d=c.hasOwnProperty(\"params\")?c.params:d,p){s[p];return n({_normalized:!0,name:p,query:h,hash:l,params:d},void 0,r)}if(f){var y=V(f,e),v=U(y,d,'redirect route with path \"'+y+'\"');return n({_normalized:!0,path:v,query:h,hash:l},void 0,r)}return t(!1,\"invalid redirect option: \"+JSON.stringify(u)),a(null,r)}function i(t,e,r){var o=U(r,e.params,'aliased route with path \"'+r+'\"'),i=n({_normalized:!0,path:o});if(i){var u=i.matched,c=u[u.length-1];return e.params=i.params,a(c,e)}return a(null,e)}function a(t,e,n){return t&&t.redirect?r(t,n||e):t&&t.matchAs?i(t,e,t.matchAs):o(t,e,n)}var u=m(e),c=u.pathMap,s=u.nameMap;return n}function M(t,e,n){var r=P(t),o=r.regexp,i=r.keys,a=n.match(o);if(!a)return!1;if(!e)return!0;for(var u=1,c=a.length;u<c;++u){var s=i[u-1],p=\"string\"==typeof a[u]?decodeURIComponent(a[u]):a[u];s&&(e[s.name]=p)}return!0}function V(t,e){return d(t,e.parent?e.parent.path:\"/\",!0)}function B(t,e,n){var r=function(o){o>=t.length?n():t[o]?e(t[o],function(){r(o+1)}):r(o+1)};r(0)}function F(t){if(!t)if(St){var e=document.querySelector(\"base\");t=e?e.getAttribute(\"href\"):\"/\"}else t=\"/\";return\"/\"!==t.charAt(0)&&(t=\"/\"+t),t.replace(/\\/$/,\"\")}function I(t,e){var n,r=Math.max(t.length,e.length);for(n=0;n<r&&t[n]===e[n];n++);return{activated:e.slice(n),deactivated:t.slice(n)}}function D(t,e){return\"function\"!=typeof t&&(t=lt.extend(t)),t.options[e]}function J(t){return Q(G(t,function(t,e){var n=D(t,\"beforeRouteLeave\");if(n)return Array.isArray(n)?n.map(function(t){return K(t,e)}):K(n,e)}).reverse())}function K(t,e){return function(){return t.apply(e,arguments)}}function N(t,e,n){return Q(G(t,function(t,r,o,i){var a=D(t,\"beforeRouteEnter\");if(a)return Array.isArray(a)?a.map(function(t){return X(t,e,o,i,n)}):X(a,e,o,i,n)}))}function X(t,e,n,r,o){return function(i,a,u){return t(i,a,function(t){u(t),\"function\"==typeof t&&e.push(function(){Y(t,n.instances,r,o)})})}}function Y(t,e,n,r){e[n]?t(e[n]):r()&&setTimeout(function(){Y(t,e,n,r)},16)}function W(e){return G(e,function(e,n,r,o){if(\"function\"==typeof e&&!e.options)return function(n,i,a){var u=function(t){r.components[o]=t,a()},c=function(e){t(!1,\"Failed to resolve async component \"+o+\": \"+e),a(!1)},s=e(u,c);s&&\"function\"==typeof s.then&&s.then(u,c)}})}function G(t,e){return Q(t.map(function(t){return Object.keys(t.components).map(function(n){return e(t.components[n],t.instances[n],t,n)})}))}function Q(t){return Array.prototype.concat.apply([],t)}function Z(t){t&&(Pt[t]={x:window.pageXOffset,y:window.pageYOffset})}function tt(t){if(t)return Pt[t]}function et(t){var e=document.documentElement.getBoundingClientRect(),n=t.getBoundingClientRect();return{x:n.left-e.left,y:n.top-e.top}}function nt(t){return ot(t.x)||ot(t.y)}function rt(t){return{x:ot(t.x)?t.x:window.pageXOffset,y:ot(t.y)?t.y:window.pageYOffset}}function ot(t){return\"number\"==typeof t}function it(t){var e=window.location.pathname;return t&&0===e.indexOf(t)&&(e=e.slice(t.length)),(e||\"/\")+window.location.search+window.location.hash}function at(t,e){var n=window.history;try{e?n.replaceState({key:Lt},\"\",t):(Lt=Ut(),n.pushState({key:Lt},\"\",t)),Z(Lt)}catch(n){window.location[e?\"assign\":\"replace\"](t)}}function ut(t){at(t,!0)}function ct(){var t=st();return\"/\"===t.charAt(0)||(ft(\"/\"+t),!1)}function st(){var t=window.location.href,e=t.indexOf(\"#\");return e===-1?\"\":t.slice(e+1)}function pt(t){window.location.hash=t}function ft(t){var e=window.location.href.indexOf(\"#\");window.location.replace(window.location.href.slice(0,e>=0?e:0)+\"#\"+t)}function ht(t,e,n){var r=\"hash\"===n?\"/#\"+e:e;return t?v(t+r):r}var lt,dt={name:\"router-view\",functional:!0,props:{name:{type:String,default:\"default\"}},render:function(t,e){var n=e.props,r=e.children,o=e.parent,i=e.data;i.routerView=!0;for(var a=o.$route,u=o._routerViewCache||(o._routerViewCache={}),c=0,s=!1;o;)o.$vnode&&o.$vnode.data.routerView&&c++,o._inactive&&(s=!0),o=o.$parent;i.routerViewDepth=c;var p=a.matched[c];if(!p)return t();var f=n.name,h=s?u[f]:u[f]=p.components[f];if(!s){var l=i.hook||(i.hook={});l.init=function(t){p.instances[f]=t.child},l.prepatch=function(t,e){p.instances[f]=e.child},l.destroy=function(t){p.instances[f]===t.child&&(p.instances[f]=void 0)}}return t(h,i,r)}},yt=encodeURIComponent,vt=decodeURIComponent,mt=o(null,{path:\"/\"}),gt=/\\/$/,wt=[String,Object],bt={name:\"router-link\",props:{to:{type:wt,required:!0},tag:{type:String,default:\"a\"},exact:Boolean,append:Boolean,replace:Boolean,activeClass:String,event:{type:[String,Array],default:\"click\"}},render:function(t){var e=this,n=this.$router,r=this.$route,i=n.resolve(this.to,r,this.append),a=i.normalizedTo,c=i.resolved,p=i.href,l={},d=this.activeClass||n.options.linkActiveClass||\"router-link-active\",y=a.path?o(null,a):c;l[d]=this.exact?u(r,y):s(r,y);var v=function(t){f(t)&&(e.replace?n.replace(a):n.push(a))},m={click:f};Array.isArray(this.event)?this.event.forEach(function(t){m[t]=v}):m[this.event]=v;var g={class:l};if(\"a\"===this.tag)g.on=m,g.attrs={href:p};else{var w=h(this.$slots.default);if(w){w.isStatic=!1;var b=lt.util.extend,x=w.data=b({},w.data);x.on=m;var k=w.data.attrs=b({},w.data.attrs);k.href=p}else g.on=m}return t(this.tag,g,this.$slots.default)}},xt=Array.isArray||function(t){return\"[object Array]\"==Object.prototype.toString.call(t)},kt=xt,Ot=C,At=b,Et=x,jt=A,Rt=q,_t=new RegExp([\"(\\\\\\\\.)\",\"([\\\\/.])?(?:(?:\\\\:(\\\\w+)(?:\\\\(((?:\\\\\\\\.|[^\\\\\\\\()])+)\\\\))?|\\\\(((?:\\\\\\\\.|[^\\\\\\\\()])+)\\\\))([+*?])?|(\\\\*))\"].join(\"|\"),\"g\");Ot.parse=At,Ot.compile=Et,Ot.tokensToFunction=jt,Ot.tokensToRegExp=Rt;var $t=Object.create(null),Tt=Object.create(null),St=\"undefined\"!=typeof window,qt=St&&function(){var t=window.navigator.userAgent;return(t.indexOf(\"Android 2.\")===-1&&t.indexOf(\"Android 4.0\")===-1||t.indexOf(\"Mobile Safari\")===-1||t.indexOf(\"Chrome\")!==-1||t.indexOf(\"Windows Phone\")!==-1)&&(window.history&&\"pushState\"in window.history)}(),Ct=function(t,e){this.router=t,this.base=F(e),this.current=mt,this.pending=null};Ct.prototype.listen=function(t){this.cb=t},Ct.prototype.transitionTo=function(t,e){var n=this,r=this.router.match(t,this.current);this.confirmTransition(r,function(){n.updateRoute(r),e&&e(r),n.ensureURL()})},Ct.prototype.confirmTransition=function(t,e){var n=this,r=this.current;if(u(t,r))return void this.ensureURL();var o=I(this.current.matched,t.matched),i=o.deactivated,a=o.activated,c=[].concat(J(i),this.router.beforeHooks,a.map(function(t){return t.beforeEnter}),W(a));this.pending=t;var s=function(e,o){n.pending===t&&e(t,r,function(t){t===!1?n.ensureURL(!0):\"string\"==typeof t||\"object\"==typeof t?\"object\"==typeof t&&t.replace?n.replace(t):n.push(t):o(t)})};B(c,s,function(){var r=[],o=N(a,r,function(){return n.current===t});B(o,s,function(){n.pending===t&&(n.pending=null,e(t),n.router.app&&n.router.app.$nextTick(function(){r.forEach(function(t){return t()})}))})})},Ct.prototype.updateRoute=function(t){var e=this.current;this.current=t,this.cb&&this.cb(t),this.router.afterHooks.forEach(function(n){n&&n(t,e)})};var Pt=Object.create(null),Ut=function(){return String(Date.now())},Lt=Ut(),zt=function(t){function e(e,n){var r=this;t.call(this,e,n);var o=e.options.scrollBehavior;window.addEventListener(\"popstate\",function(t){Lt=t.state&&t.state.key;var e=r.current;r.transitionTo(it(r.base),function(t){o&&r.handleScroll(t,e,!0)})}),o&&window.addEventListener(\"scroll\",function(){Z(Lt)})}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t){var e=this,n=this.current;this.transitionTo(t,function(t){at(v(e.base+t.fullPath)),e.handleScroll(t,n,!1)})},e.prototype.replace=function(t){var e=this,n=this.current;this.transitionTo(t,function(t){ut(v(e.base+t.fullPath)),e.handleScroll(t,n,!1)})},e.prototype.ensureURL=function(t){if(it(this.base)!==this.current.fullPath){var e=v(this.base+this.current.fullPath);t?at(e):ut(e)}},e.prototype.handleScroll=function(t,e,n){var r=this.router;if(r.app){var o=r.options.scrollBehavior;o&&r.app.$nextTick(function(){var r=tt(Lt),i=o(t,e,n?r:null);if(i){var a=\"object\"==typeof i;if(a&&\"string\"==typeof i.selector){var u=document.querySelector(i.selector);u?r=et(u):nt(i)&&(r=rt(i))}else a&&nt(i)&&(r=rt(i));r&&window.scrollTo(r.x,r.y)}})}},e}(Ct),Ht=function(t){function e(e,n,r){var o=this;t.call(this,e,n),window.addEventListener(\"hashchange\",function(){o.onHashChange()}),r&&this.checkFallback()||ct()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.checkFallback=function(){var t=it(this.base);if(!/^\\/#/.test(t))return window.location.replace(v(this.base+\"/#\"+t)),!0},e.prototype.onHashChange=function(){ct()&&this.transitionTo(st(),function(t){ft(t.fullPath)})},e.prototype.push=function(t){this.transitionTo(t,function(t){pt(t.fullPath)})},e.prototype.replace=function(t){this.transitionTo(t,function(t){ft(t.fullPath)})},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;st()!==e&&(t?pt(e):ft(e))},e}(Ct),Mt=function(t){function e(e){t.call(this,e),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t){var e=this;this.transitionTo(t,function(t){e.stack=e.stack.slice(0,e.index+1).concat(t),e.index++})},e.prototype.replace=function(t){var e=this;this.transitionTo(t,function(t){e.stack=e.stack.slice(0,e.index).concat(t)})},e.prototype.go=function(t){var e=this,n=this.index+t;if(!(n<0||n>=this.stack.length)){var r=this.stack[n];this.confirmTransition(r,function(){e.index=n,e.updateRoute(r)})}},e.prototype.ensureURL=function(){},e}(Ct),Vt=function(t){void 0===t&&(t={}),this.app=null,this.options=t,this.beforeHooks=[],this.afterHooks=[],this.match=H(t.routes||[]);var e=t.mode||\"hash\";switch(this.fallback=\"history\"===e&&!qt,this.fallback&&(e=\"hash\"),St||(e=\"abstract\"),this.mode=e,e){case\"history\":this.history=new zt(this,t.base);break;case\"hash\":this.history=new Ht(this,t.base,this.fallback);break;case\"abstract\":this.history=new Mt(this)}},Bt={currentRoute:{}};return Bt.currentRoute.get=function(){return this.history&&this.history.current},Vt.prototype.init=function(t){var e=this;this.app=t;var n=this.history;n instanceof zt?n.transitionTo(it(n.base)):n instanceof Ht&&n.transitionTo(st()),n.listen(function(t){e.app._route=t})},Vt.prototype.beforeEach=function(t){this.beforeHooks.push(t)},Vt.prototype.afterEach=function(t){this.afterHooks.push(t)},Vt.prototype.push=function(t){this.history.push(t)},Vt.prototype.replace=function(t){this.history.replace(t)},Vt.prototype.go=function(t){this.history.go(t)},Vt.prototype.back=function(){this.go(-1)},Vt.prototype.forward=function(){this.go(1)},Vt.prototype.getMatchedComponents=function(t){var e=t?this.resolve(t).resolved:this.currentRoute;return e?[].concat.apply([],e.matched.map(function(t){return Object.keys(t.components).map(function(e){return t.components[e]})})):[]},Vt.prototype.resolve=function(t,e,n){var r=L(t,e||this.history.current,n),o=this.match(r,e),i=o.redirectedFrom||o.fullPath,a=this.history.base,u=ht(a,i,this.mode);return{normalizedTo:r,resolved:o,href:u}},Object.defineProperties(Vt.prototype,Bt),Vt.install=l,St&&window.Vue&&window.Vue.use(Vt),Vt});"

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	var JsFunc_1 = __webpack_require__(21);
	var VueBase_1 = __webpack_require__(22);
	var PlayerS4_1 = __webpack_require__(23);
	var HupuAPI_1 = __webpack_require__(24);
	var GameAdmin_1 = __webpack_require__(26);
	var Pick_1 = __webpack_require__(30);
	var WorldWar_1 = __webpack_require__(32);
	var ScoreRankAdmin_1 = __webpack_require__(40);
	var cropper;
	function getScorePanelUrl(gameId, isDark, isOb) {
	    if (isOb === void 0) { isOb = true; }
	    var op = 'op';
	    if (isOb)
	        op = 'ob';
	    if (isDark)
	        return "/panel/#/ol/" + op + "/" + gameId + "?panel=score&s4=1&theme=dark";
	    return "/panel/#/ol/" + op + "/" + gameId + "?panel=score&s4=1";
	}
	exports.getScorePanelUrl = getScorePanelUrl;
	var HomeView = (function (_super) {
	    __extends(HomeView, _super);
	    function HomeView() {
	        var _this = _super.call(this) || this;
	        _this.template = __webpack_require__(44);
	        _this.links = VueBase_1.VueBase.PROP;
	        _this.components = {
	            "GameAdmin": GameAdmin_1.GameAdmin,
	            "Pick": Pick_1.Pick,
	            "WorldWar": WorldWar_1.WorldWar,
	            "ScoreRankAdmin": ScoreRankAdmin_1.ScoreRankAdmin
	        };
	        _this.opUrlArr = VueBase_1.VueBase.PROP;
	        _this.selected = VueBase_1.VueBase.PROP;
	        _this.options = VueBase_1.VueBase.PROP;
	        _this.gameDataArr = VueBase_1.VueBase.PROP;
	        _this.iosParam = VueBase_1.VueBase.Dict;
	        _this.rmtpUrl = VueBase_1.VueBase.String;
	        _this.playUrl = VueBase_1.VueBase.String;
	        _this.rmtpUrl2 = VueBase_1.VueBase.String;
	        _this.playUrl2 = VueBase_1.VueBase.String;
	        _this.lotteryId = VueBase_1.VueBase.PROP;
	        _this.lotteryIdx = VueBase_1.VueBase.PROP;
	        _this.player_id = VueBase_1.VueBase.PROP;
	        _this.actTab = VueBase_1.VueBase.PROP;
	        _this.fileCrop = VueBase_1.VueBase.PROP;
	        _this.cropper = VueBase_1.VueBase.PROP;
	        _this.playerInEdit = VueBase_1.VueBase.PROP;
	        _this.playerArrStr = VueBase_1.VueBase.PROP;
	        _this.imgBase64 = VueBase_1.VueBase.PROP;
	        _this.isInitCropper = false;
	        _this.watch = {
	            selected: "onSelGameID"
	        };
	        _this.methods = {
	            tab: function (s) {
	                this.actTab = s;
	            },
	            onUpload: function (e) {
	                document.getElementById('input').click();
	                this.imgBase64 = '';
	            },
	            onImgLoaded: function (e) {
	                var result = document.querySelector('.result');
	                if (e.target.files.length) {
	                    $('#input').hide();
	                    var reader = new FileReader();
	                    reader.onload = function (e) {
	                        if (e.target['result']) {
	                            var img = document.createElement('img');
	                            img.id = 'image';
	                            img.src = e.target['result'];
	                            result.innerHTML = '';
	                            result.appendChild(img);
	                            cropper = new Cropper(img, {
	                                aspectRatio: 420 / 595,
	                                width: 420,
	                                height: 595
	                            });
	                        }
	                    };
	                    reader.readAsDataURL(e.target.files[0]);
	                }
	            },
	            onSelGameID: function (gameId) {
	                var _this = this;
	                this.updateLinks(gameId);
	                var url = 'http://api.liangle.com/api/passerbyking/game/info/' + gameId;
	                $.get("/proxy?url=" + url, function (res1) {
	                    console.log(res1);
	                    var p = res1.data.stream.publish;
	                    _this.rmtpUrl = p.url + "/" + p.stream;
	                    _this.playUrl = res1.data.stream.play;
	                    p = res1.data.stream2.publish;
	                    _this.rmtpUrl2 = p.url + "/" + p.stream;
	                    _this.playUrl2 = res1.data.stream2.play;
	                });
	            },
	            onViewPlayer: function (player_id) {
	                HupuAPI_1.getPlayerInfoFromLiangle(player_id, function (res1) {
	                    if (res1.data && res1.data.name) {
	                        var player = res1.data;
	                        alert(player.name + " \u8EAB\u9AD8" + player.height + " \u4F53\u91CD" + player.weight + " level:" + player.level);
	                    }
	                });
	            },
	            onSyncPlayerToStrapi: function (player_id) {
	                if (player_id != '') {
	                    HupuAPI_1.getPlayerInfoFromLiangle(player_id, function (res1) {
	                        if (res1.data && res1.data.name) {
	                            var player = res1.data;
	                            console.log(player);
	                            HupuAPI_1.createPlayer({
	                                'player_id': Number(player.player_id),
	                                'name': player.name,
	                                'live_name': player.name,
	                                'height': player.height,
	                                'weight': player.weight,
	                                'age': player.age,
	                                level: player.level,
	                                'raw': JSON.stringify(player)
	                            }, function (res) {
	                                console.log('on create player', res);
	                                alert(JSON.stringify(res));
	                            }, function (e) {
	                                alert('导入失败');
	                            });
	                        }
	                    });
	                }
	                this.initCropper();
	            },
	            onPullPlayerData: function (player_id) {
	                var _this = this;
	                HupuAPI_1.getPlayer(player_id, function (res) {
	                    console.log('8090', res);
	                    _this.playerInEdit = JSON.parse(JSON.stringify(res[0]));
	                    var img = document.createElement('img');
	                    img.id = 'imagePreview';
	                    img.src = _this.playerInEdit.avatar;
	                    var result = document.querySelector('.preview');
	                    result.innerHTML = '';
	                    result.appendChild(img);
	                });
	            },
	            onSetStarPlayer: function (playerArrStr) {
	                var a = playerArrStr.split('-');
	                if (a.length > 0) {
	                }
	            },
	            onEditPlayer: function (player_id) {
	                var _this = this;
	                HupuAPI_1.getPlayer(this.player_id, function (res1) {
	                    var edit = _this.playerInEdit;
	                    var player1 = res1[0];
	                    var update = {
	                        _id: player1._id,
	                        brief: edit.brief.replace(/\n/g, "\r\n"),
	                        tag1: edit.tag1,
	                        tag2: edit.tag2,
	                        level: edit.level
	                    };
	                    console.log('update player1', update);
	                    HupuAPI_1.updatePlayer(update, function (res) {
	                        alert('上传完成!');
	                    });
	                });
	            },
	            onCrop: function () {
	                var image = this.fileCrop;
	                var base64 = cropper.getCroppedCanvas({
	                    width: 420, height: 595
	                }).toDataURL();
	                this.imgBase64 = base64;
	                document.getElementById('imgToDownload')['src'] = base64;
	                HupuAPI_1.getPlayer(this.player_id, function (res1) {
	                    var player = res1[0];
	                    console.log('update player1', player);
	                    HupuAPI_1.updatePlayer({ '_id': player._id, 'avatar': base64 }, function (res) {
	                        alert('头像上传成功!');
	                    });
	                });
	            },
	            onClkQRCode: function () {
	                PlayerS4_1.downloadGameData();
	            },
	        };
	        VueBase_1.VueBase.initProps(_this);
	        return _this;
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
	                if (Number(gameData.id) > 800) {
	                    gameData.text = "[" + gameData.id + "]:" + gameData.title;
	                    gameData.value = gameData.id;
	                    _this.gameDataArr.push(gameData);
	                }
	            }
	            _this.gameDataArr.sort(JsFunc_1.ascendingProp('id'));
	            _this.options = _this.gameDataArr;
	            _this.initCropper();
	        });
	    };
	    HomeView.prototype.initCropper = function () {
	        if (this.isInitCropper)
	            return;
	        this.isInitCropper = true;
	        var avatar = document.getElementById('avatar');
	        var input = document.getElementById('input');
	        var done = function (url) {
	            input['value'] = '';
	            avatar['src'] = url;
	            $('#input').hide();
	            var image = document.getElementById('avatar');
	            cropper = new Cropper(image, {
	                aspectRatio: 442 / 634,
	                width: 442,
	                height: 634,
	                crop: function (event) {
	                    console.log(event.detail.x, cropper.toBlob);
	                }
	            });
	        };
	    };
	    HomeView.prototype.mounted = function () {
	        this.updateLinks(492);
	        this.actTab = 'tab6';
	    };
	    HomeView.prototype.updateLinks = function (gameId) {
	        this.links = [
	            { title: "比分面板（S4）", url: getScorePanelUrl(gameId, false) },
	            { title: "直播间面板", url: "/panel/#/studio/ob/" },
	            { title: "线上控制台", url: getScorePanelUrl(gameId, false, false) },
	            { title: "八强面板", url: "/panel/#/ol/ob/" + gameId + "?panel=bracket" },
	            { title: "对阵球员信息面板", url: "/panel/#/vsInfo?game_id=" + gameId },
	            { title: "-----线下操作面板-----", url: "" },
	            { title: "邀请赛比分面板（新）", url: "/cc/web-mobile/index.html?panel=ww3" },
	            { title: "邀请赛比分面板", url: "/panel/#/ol/ob/0?panel=score&s4=1&world=1" },
	            { title: "邀请赛血量图", url: "/panel/#/ol/ob/0?panel=score&s4=1&world=1&bblood=1" },
	            { title: "冠军排位赛晋级图", url: "/panel/#/brackets5" },
	            { title: "冠军排位赛抢五面板", url: "/panel/#/rank5" },
	            { title: "移动端计时器控制", url: "/m/index.html" },
	            { title: "通用计分控制台", url: "/admin/#/com" },
	            { title: "3v3计分", url: "/html/controls/game3v3.html" },
	            { title: "LA比赛数据录入", url: "/html/controls/group_list.html" },
	            { title: "LA小组赛淘汰赛投屏", url: "/cc/web-mobile/index.html?panel=group8" },
	            { title: "4v4面板（新）", url: "/cc/web-mobile/index.html?panel=3v3" },
	            { title: "小组赛积分投屏（新）", url: "/cc/web-mobile/index.html?panel=group" },
	            { title: "团战血量投屏（新）", url: "/cc/web-mobile/index.html?panel=bblood" },
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


/***/ }),
/* 21 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
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
	function randomPop(arr) {
	    var idx = Math.floor(Math.random() * arr.length);
	    var item = arr[idx];
	    arr.splice(idx, 1);
	    return item;
	}
	exports.randomPop = randomPop;
	function mapToSortArray(map, prop, sortFunc) {
	    var arr = [];
	    for (var k in map) {
	        arr.push(map[k]);
	    }
	    arr.sort(sortFunc(prop));
	    return arr;
	}
	exports.mapToSortArray = mapToSortArray;
	function clone(obj) {
	    return JSON.parse(JSON.stringify(obj));
	}
	exports.clone = clone;
	function cloneMap(map) {
	    var a = {};
	    for (var k in map) {
	        a[k] = map[k];
	    }
	    return a;
	}
	exports.cloneMap = cloneMap;
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
	function arrToMap(arr, key) {
	    var m = {};
	    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
	        var item = arr_1[_i];
	        m[item[key]] = item;
	    }
	    return m;
	}
	exports.arrToMap = arrToMap;
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
	function formatSecond(sec, isSecOnly, minStr, secStr) {
	    if (isSecOnly === void 0) { isSecOnly = false; }
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
	    if (isSecOnly)
	        return strSec;
	    return strMin + minStr + strSec + secStr;
	}
	exports.formatSecond = formatSecond;
	function format10ms(ms10, isSecOnly, minStr, secStr) {
	    if (isSecOnly === void 0) { isSecOnly = false; }
	    if (minStr === void 0) { minStr = ":"; }
	    if (secStr === void 0) { secStr = ""; }
	    var sec = Math.floor(ms10 / 100);
	    var min = Math.floor(sec / 60);
	    var s = sec % 60;
	    var ms = ms10 % 100;
	    var strMin = min + "";
	    var strSec = s + "";
	    var str10ms = ms + "";
	    if (min < 10)
	        strMin = "0" + strMin;
	    if (s < 10)
	        strSec = "0" + strSec;
	    if (ms < 10)
	        str10ms = '0' + str10ms;
	    if (isSecOnly)
	        return strSec + secStr + '.' + str10ms;
	    return strMin + minStr + strSec + secStr + '.' + str10ms;
	}
	exports.format10ms = format10ms;
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


/***/ }),
/* 22 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
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


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var HupuAPI_1 = __webpack_require__(24);
	var JsFunc_1 = __webpack_require__(21);
	var Rec = (function () {
	    function Rec() {
	        this.score = 0;
	        this.netScore = 0;
	        this.isPerfect = false;
	        this.matchType = -1;
	    }
	    return Rec;
	}());
	var PlayerS4 = (function () {
	    function PlayerS4(pid) {
	        this.perfectCount = 0;
	        this.gameCount = 0;
	        this.player_id = '';
	        this.name = '';
	        this.recArr = [];
	        this.player_id = pid;
	    }
	    Object.defineProperty(PlayerS4.prototype, "subNetScore", {
	        get: function () {
	            var v = 0;
	            for (var _i = 0, _a = this.recArr; _i < _a.length; _i++) {
	                var r = _a[_i];
	                v += r.netScore;
	            }
	            return v;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(PlayerS4.prototype, "subPerfect", {
	        get: function () {
	            var v = 0;
	            for (var _i = 0, _a = this.recArr; _i < _a.length; _i++) {
	                var r = _a[_i];
	                if (r.isPerfect)
	                    v += 1;
	            }
	            return v;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return PlayerS4;
	}());
	exports.PlayerS4 = PlayerS4;
	exports.downloadGameData = function (fromGameId) {
	    if (fromGameId === void 0) { fromGameId = 614; }
	    var gameIdArr = [];
	    var gameDataArr = [];
	    var gameId;
	    var getGameData = function (i) {
	        if (i < gameIdArr.length) {
	            gameId = gameIdArr[i].gameId;
	            var gameTitle_1 = gameIdArr[i].title;
	            HupuAPI_1.getRoundRawData(gameId, function (res1) {
	                console.log(res1);
	                var data = res1;
	                gameDataArr.push({ gameId: gameId, title: gameTitle_1, gameMap: res1.data });
	                var p = Math.floor((i + 1) / gameIdArr.length * 100);
	                console.log('progress', p);
	                getGameData(i + 1);
	            });
	        }
	        else {
	            console.log('done', gameId, gameDataArr);
	            calcGameData(gameDataArr);
	        }
	    };
	    HupuAPI_1.getRoundList(function (res2) {
	        var data = res2.data;
	        for (var i = 0; i < data.length; i++) {
	            var obj = data[i];
	            if (obj.id > fromGameId - 1)
	                gameIdArr.push({ gameId: obj.id, title: obj.title });
	        }
	        gameIdArr.sort(JsFunc_1.ascendingProp('gameId'));
	        console.log(gameIdArr);
	        getGameData(0);
	    });
	};
	var calcGameData = function (gameDataArr) {
	    var playerMap = {};
	    var subPlayerMap = {};
	    var _p = function (data) {
	        var pid = data.player_id;
	        var p;
	        if (!playerMap[pid]) {
	            p = playerMap[pid] = new PlayerS4(pid);
	            p.name = data.name;
	        }
	        p = playerMap[pid];
	        return p;
	    };
	    for (var _i = 0, gameDataArr_1 = gameDataArr; _i < gameDataArr_1.length; _i++) {
	        var item = gameDataArr_1[_i];
	        for (var i = 0; i < 38; i++) {
	            var game = item.gameMap[i + 1];
	            if (!game)
	                break;
	            var lPlayerId = game.left.player_id;
	            var rPlayerId = game.right.player_id;
	            var lPlayer = _p(game.left);
	            var rPlayer = _p(game.right);
	            var lRec = new Rec();
	            var rRec = new Rec();
	            lRec.matchType = rRec.matchType = Number(game.match_type);
	            lRec.netScore = game.left.score - game.right.score;
	            lRec.score = game.left.score;
	            rRec.score = game.right.score;
	            rRec.netScore = -lRec.netScore;
	            if (rRec.score == 0)
	                lRec.isPerfect = true;
	            if (lRec.score == 0)
	                rRec.isPerfect = true;
	            lPlayer.recArr.push(lRec);
	            rPlayer.recArr.push(rRec);
	        }
	    }
	    console.log('player', playerMap);
	    window['player'] = playerMap;
	};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var WebJsFunc_1 = __webpack_require__(25);
	exports.hupuWsEvent = { 'START_GAME': 'startGame', 'INIT': 'init' };
	exports.getHupuWS = function (callback) {
	    var ws = 'tcp.lb.liangle.com:3081';
	    console.log('ws:', ws);
	    if (callback)
	        callback(ws);
	    return ws;
	};
	function setClientDelay(gameId, sec, callback) {
	    var url = "http://pre.liangle.com/api/pbk/event/delay/" + gameId;
	    var data = { ':game_id': gameId + "", ctd: sec + '' };
	    console.log(setClientDelay, data);
	    WebJsFunc_1.$post(WebJsFunc_1.proxy(url), data, callback);
	}
	exports.setClientDelay = setClientDelay;
	function postRank16(rankData, callback) {
	    var url = "http://pre.liangle.com/api/create/game/jifen";
	    console.log('postRank16', rankData);
	    WebJsFunc_1.$postFormData2(WebJsFunc_1.proxy(url) + '&form=1', rankData, callback);
	}
	exports.postRank16 = postRank16;
	function getClientDelay(gameId, callback) {
	    var url = "http://pre.liangle.com/api/pbk/event/delay/" + gameId;
	    _get(WebJsFunc_1.proxy(url), callback);
	}
	exports.getClientDelay = getClientDelay;
	function getPreRoundPlayer(gameId, callback) {
	    var url = 'http://api.liangle.com/api/passerbyking/game/wheel/ready/' + gameId;
	    _get(WebJsFunc_1.proxy(url), callback);
	}
	exports.getPreRoundPlayer = getPreRoundPlayer;
	function getAllPlayer(gameId, callback) {
	    var url = 'http://api.liangle.com/api/passerbyking/game/players/' + gameId;
	    _get(WebJsFunc_1.proxy(url), callback);
	}
	exports.getAllPlayer = getAllPlayer;
	function getRoundList(callback) {
	    var url = 'http://api.liangle.com/api/passerbyking/game/list';
	    _get(WebJsFunc_1.proxy(url), callback);
	}
	exports.getRoundList = getRoundList;
	function getRoundRawData(gameId, callback) {
	    var url = 'http://api.liangle.com/api/passerbyking/game/match/' + gameId;
	    _get(WebJsFunc_1.proxy(url), callback);
	}
	exports.getRoundRawData = getRoundRawData;
	function getRanking(callback) {
	    var url = 'http://lrw.smartcourt.cn/getRanking';
	    var data = { page: 1, pageSize: 100 };
	    WebJsFunc_1.$post(WebJsFunc_1.proxy(url), data, callback);
	}
	exports.getRanking = getRanking;
	function getCurRanking(hupuIdArr, callback) {
	    var url = 'http://lrw.smartcourt.cn/queryUsersRanking';
	    var data = hupuIdArr;
	    WebJsFunc_1.$post(WebJsFunc_1.proxy(url), data, callback);
	}
	exports.getCurRanking = getCurRanking;
	function getGroupData(gameId, callback) {
	    var url = 'http://api.liangle.com/api/passerbyking/game/group/' + gameId;
	    _get(WebJsFunc_1.proxy(url), callback);
	}
	exports.getGroupData = getGroupData;
	function getRankSection(section, callback) {
	    var url = 'http://api.liangle.com/api/division/power/rank/' + section;
	    _get(WebJsFunc_1.proxy(url), callback);
	}
	exports.getRankSection = getRankSection;
	function getPlayerInfoFromLiangle(player_id, callback) {
	    var url = 'http://api.liangle.com/api/passerbyking/player/info/' + player_id;
	    _get(WebJsFunc_1.proxy(url), callback);
	}
	exports.getPlayerInfoFromLiangle = getPlayerInfoFromLiangle;
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
	exports.getTop5Data = function (callback) {
	    _get('/db/top5.json?t=' + new Date(), callback);
	};
	exports.getVsTitleData = function (callback) {
	    _get('/db/vs.json?t=' + new Date(), callback);
	};
	exports.getBO3Data = function (callback) {
	    _get('/db/BO3.json?t=' + new Date(), callback);
	};
	function getCommentators(callback) {
	    var url = 'http://rtmp.icassi.us:8090/commentator';
	    _get(WebJsFunc_1.proxy(url), callback);
	}
	exports.getCommentators = getCommentators;
	function getLive(callback) {
	    var url = 'http://rtmp.icassi.us:8090/live';
	    _get(WebJsFunc_1.proxy(url), function (res) {
	        for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
	            var conf = res_1[_i];
	            if (conf.port == location.port)
	                return callback(conf);
	        }
	        callback(res[2]);
	    });
	}
	exports.getLive = getLive;
	function createPlayer(data, callback, errorCallback) {
	    var url = 'http://rtmp.icassi.us:8090/player';
	    WebJsFunc_1.$post(url, data, callback, errorCallback);
	}
	exports.createPlayer = createPlayer;
	function uploadImage(file, callback) {
	    var url = 'http://rtmp.icassi.us:8090/upload';
	    WebJsFunc_1.$post(url, file, callback);
	}
	exports.uploadImage = uploadImage;
	var _put = function (url, data, callback) {
	    var strJson = JSON.stringify(data);
	    console.log('strJson', strJson);
	    $.ajax(url, {
	        method: 'PUT',
	        processData: false,
	        contentType: 'application/json',
	        data: strJson,
	        success: callback,
	    });
	};
	function updateLiveConf(data, callback) {
	    var url = 'http://rtmp.icassi.us:8090/live/' + data._id;
	    _put(url, data, callback);
	}
	exports.updateLiveConf = updateLiveConf;
	function updatePlayer(playerData, callback) {
	    var strJson = JSON.stringify(playerData);
	    console.log('strJson', strJson);
	    $.ajax('http://rtmp.icassi.us:8090/player/' + playerData._id, {
	        method: 'PUT',
	        processData: false,
	        contentType: 'application/json',
	        data: strJson,
	        success: callback,
	    });
	}
	exports.updatePlayer = updatePlayer;
	exports.getTop5Data2 = function (callback) {
	    _get('http://rtmp.icassi.us:8090/player/', callback);
	};
	function getPlayer(player_id, callback) {
	    var url = 'http://rtmp.icassi.us:8090/player?player_id=' + player_id;
	    _get(WebJsFunc_1.proxy(url), callback);
	}
	exports.getPlayer = getPlayer;
	function getPlayerArr(player_idArr, callback) {
	    var a = player_idArr.split('-');
	    a.reverse();
	    var resArr = [];
	    console.log('get player arr', a);
	    var recurGet = function (arr) {
	        if (a.length > 0) {
	            var player_id = a.pop();
	            getPlayer(player_id, function (res) {
	                resArr.push(res[0]);
	                recurGet(a);
	            });
	        }
	        else
	            callback(resArr);
	    };
	    recurGet(a);
	}
	exports.getPlayerArr = getPlayerArr;
	function getEventConf(event_idx, callback) {
	    var url = 'http://rtmp.icassi.us:8090/event?idx=' + event_idx;
	    _get(WebJsFunc_1.proxy(url), callback);
	}
	exports.getEventConf = getEventConf;
	function getPanelConf2(event_idx, callback) {
	    var url = 'http://rtmp.icassi.us:8090/panel/5cb5467f3d09071728811ee5';
	    var playerMap_url = 'http://rtmp.icassi.us:8090/playerMap';
	    _get(WebJsFunc_1.proxy(playerMap_url), function (res) {
	        var playerArr = res[0].player_all;
	        _get(WebJsFunc_1.proxy(url), function (res2) {
	            var playerMap = {};
	            for (var _i = 0, playerArr_1 = playerArr; _i < playerArr_1.length; _i++) {
	                var p = playerArr_1[_i];
	                playerMap[p.player_id] = p;
	                p.playerId = p.player_id;
	                p.avatar = res2.avatarUrl + p.player_id + '.png';
	                p.hwa = [p.height, p.weight, p.age];
	            }
	            console.log('conf player_all', playerMap);
	            res2.playerMap = playerMap;
	            res2.dbUrl = 'http://rtmp.icassi.us:8090/event?idx=0602';
	            callback(res2);
	        });
	    });
	}
	exports.getPanelConf2 = getPanelConf2;
	function update_event_data(docData, callback) {
	    var strJson = JSON.stringify(docData);
	    console.log('strJson', strJson);
	    $.ajax('http://rtmp.icassi.us:8090/event/' + docData._id, {
	        method: 'PUT',
	        processData: false,
	        contentType: 'application/json',
	        data: strJson,
	        success: callback,
	    });
	}
	exports.update_event_data = update_event_data;
	function _putDoc(url, data, callback) {
	    var strJson = JSON.stringify(data);
	    console.log('strJson', strJson);
	    $.ajax(url, {
	        method: 'PUT',
	        processData: false,
	        contentType: 'application/json',
	        data: strJson,
	        success: callback,
	    });
	}
	function getLowerthird(pid, callback) {
	    var docUrl = 'http://rtmp.icassi.us:8090/lowerthird?pid=' + pid;
	    $.get(docUrl, function (res) {
	        if (res.length)
	            callback(res[0]);
	        else
	            callback(null);
	    });
	}
	exports.getLowerthird = getLowerthird;
	function getPlayerMap(callback) {
	    var docUrl = 'http://rtmp.icassi.us:8090/playerMap';
	    $.get(docUrl, function (res) {
	        if (res.length)
	            callback(res[0]);
	        else
	            callback(null);
	    });
	}
	exports.getPlayerMap = getPlayerMap;
	function getPlayer2(callback) {
	    var docUrl = 'http://rtmp.icassi.us:8090/player2';
	    $.get(docUrl, function (res) {
	        if (res.length)
	            callback(res);
	        else
	            callback(null);
	    });
	}
	exports.getPlayer2 = getPlayer2;
	function syncWorldWarPanel3(cb, isSave) {
	    if (isSave === void 0) { isSave = false; }
	    var docUrl = "http://rtmp.icassi.us:8090/panel/?pid=ww3";
	    var getDoc = function (callback) {
	        $.get(docUrl, function (res) {
	            if (res.length)
	                callback(res[0]);
	            else
	                callback(null);
	        });
	    };
	    getDoc(function (doc) {
	        cb(doc);
	        if (isSave) {
	            var putUrl = 'http://rtmp.icassi.us:8090/panel/' + doc._id;
	            _putDoc(putUrl, doc, function (res) {
	                console.log(res);
	            });
	        }
	    });
	}
	exports.syncWorldWarPanel3 = syncWorldWarPanel3;
	function updatePanelWorldWar3Doc(docData, callback) {
	    var strJson = JSON.stringify(docData);
	    console.log('strJson', strJson);
	    $.ajax('http://rtmp.icassi.us:8090/panel/' + docData._id, {
	        method: 'PUT',
	        processData: false,
	        contentType: 'application/json',
	        data: strJson,
	        success: callback,
	    });
	}
	function get_champion_player(gameId, callback) {
	    var playerMap_url = "http://test.liangle.com/api/passerbyking/champion/playerlist?game_id=" + gameId;
	    _get(WebJsFunc_1.proxy(playerMap_url), function (res) {
	        var playerArr = res.data;
	        callback(playerArr);
	    });
	}
	exports.get_champion_player = get_champion_player;
	function post_champion_rec(data, callback) {
	    var url_post = "http://test.liangle.com/api/passerbyking/champion/game/match";
	    console.log(setClientDelay, data);
	    WebJsFunc_1.$post(WebJsFunc_1.proxy(url_post), data, callback);
	}
	exports.post_champion_rec = post_champion_rec;
	function post_champion_rank5(data, callback) {
	    var url_post = 'http://test.liangle.com/api/passerbyking/champion/game/match';
	    WebJsFunc_1.$post(WebJsFunc_1.proxy(url_post), data, callback);
	}
	exports.post_champion_rank5 = post_champion_rank5;
	function update_base_score(data, callback) {
	    var url = 'http://rtmp.icassi.us:8090/basescore/5d12db245f2be80378b38782';
	    _put(url, data, callback);
	}
	exports.update_base_score = update_base_score;


/***/ }),
/* 25 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
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
	exports.$post = function (url, data, callback, error) {
	    $.ajax({
	        url: url,
	        type: 'post',
	        data: JSON.stringify(data),
	        headers: { "Content-Type": "application/json" },
	        dataType: 'json',
	        success: callback,
	        error: error
	    });
	};
	exports.$postFormData = function (url, data, callback, error) {
	    $.ajax({
	        url: url,
	        type: 'post',
	        data: JSON.stringify(data),
	        headers: { "Content-Type": "application/json" },
	        dataType: 'json',
	        success: callback,
	        error: error
	    });
	};
	exports.$postFormData2 = function (url, data, callback, error) {
	    $.ajax({
	        url: url,
	        type: 'post',
	        data: JSON.stringify(data),
	        headers: { "Content-Type": "text/plain" },
	        success: callback,
	        error: error
	    });
	};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	var VueBase_1 = __webpack_require__(22);
	var const_1 = __webpack_require__(27);
	var Command_1 = __webpack_require__(28);
	var JsFunc_1 = __webpack_require__(21);
	var confFile = null;
	var reader;
	var filesInput;
	var opReq = function (cmdId, param) {
	    param._ = null;
	    $.ajax({
	        url: "/panel/" + const_1.PanelId.onlinePanel + "/" + cmdId,
	        type: 'post',
	        data: JSON.stringify(param),
	        headers: { "Content-Type": "application/json" },
	        dataType: 'json'
	    });
	};
	var _exData;
	var playerCount = 5;
	var _GameAdmin = (function (_super) {
	    __extends(_GameAdmin, _super);
	    function _GameAdmin() {
	        var _this = _super.call(this) || this;
	        _this.template = __webpack_require__(29);
	        _this.selected = VueBase_1.VueBase.PROP;
	        _this.options = VueBase_1.VueBase.PROP;
	        _this.gameConf = VueBase_1.VueBase.PROP;
	        _this.vsPlayer = VueBase_1.VueBase.PROP;
	        _this.vsPlayerArr = VueBase_1.VueBase.PROP;
	        _this.gameTitle = VueBase_1.VueBase.PROP;
	        _this.redArr = VueBase_1.VueBase.PROP;
	        _this.blueArr = VueBase_1.VueBase.PROP;
	        _this.lPlayer = VueBase_1.VueBase.PROP;
	        _this.rPlayer = VueBase_1.VueBase.PROP;
	        _this.lastScoreArr = VueBase_1.VueBase.PROP;
	        _this.methods = {
	            onReloadShow: function () {
	                var _this = this;
	                this.reloadFile(null, {
	                    callback: function (_) {
	                        _this.onShowScoreRank(true);
	                    }
	                });
	            },
	            onSelectGame: function () {
	                console.log('on init game', this.selected);
	                var playerMap = this.gameConf.playerMap;
	                var recArr = this.gameConf.rec;
	                for (var i = 0; i < recArr.length; i++) {
	                    var rec = recArr[i];
	                    if (rec.idx == this.selected) {
	                        var p1 = rec.player[0];
	                        var p2 = rec.player[1];
	                        this.vsPlayer = p1 + ' ' + p2;
	                        return;
	                    }
	                }
	            },
	            onChangePlayer: function (isBlue, playerId) {
	                isBlue ? this.vsPlayerArr[0] = playerId : this.vsPlayerArr[1] = playerId;
	                this.vsPlayer = this.vsPlayerArr.join(" ");
	            },
	            onAddScore: function (isLeft, dtScore) {
	                this.onShowScoreRank(true, dtScore, isLeft);
	                opReq("" + Command_1.CommandId.cs_updateScore, { dtScore: dtScore, isLeft: isLeft });
	            },
	            onInitGame: function () {
	                console.log('init game');
	                var playerMap = this.gameConf.playerMap;
	                var recArr = this.gameConf.rec;
	                var a = this.vsPlayer.split(' ');
	                var p1 = a[0];
	                var p2 = a[1];
	                p1 = playerMap[p1];
	                p2 = playerMap[p2];
	                p1.avatar = this.gameConf.avatarUrlBase + p1.playerId + '.png';
	                p2.avatar = this.gameConf.avatarUrlBase + p2.playerId + '.png';
	                this.lPlayer = p1;
	                this.rPlayer = p2;
	                var gameTitle = '';
	                if (this.gameTitle)
	                    gameTitle = this.gameConf.gameTitle[this.gameTitle];
	                opReq('cs_setPlayer', { leftPlayer: p1, rightPlayer: p2, gameTitle: gameTitle });
	            },
	            onShowScoreRank: function (visible) {
	                var p1 = this.lPlayer;
	                var p2 = this.rPlayer;
	                var scoreArr = [];
	                var isInitScoreArr = false;
	                var scoreFx = 0;
	                if (!this.lastScoreArr) {
	                    this.lastScoreArr = [0, 0, 0, 0, 0];
	                    isInitScoreArr = true;
	                }
	                for (var i = 0; i < playerCount; i++) {
	                    var a = this.gameConf.scoreRank[i][0].split('_');
	                    var pn = a[0];
	                    var player = this.gameConf.playerMap[pn];
	                    var scoreFxItem = {
	                        score: this.gameConf.scoreRank[i][1],
	                        name: player.name,
	                        isSmall: true,
	                        scoreFx: 0,
	                        avatar: this.gameConf.avatarUrlBase + player.playerId + '.png'
	                    };
	                    if (isInitScoreArr)
	                        this.lastScoreArr[i] = scoreFxItem.score;
	                    scoreFx = scoreFxItem.score - this.lastScoreArr[i];
	                    this.lastScoreArr[i] = scoreFxItem.score;
	                    if (pn == this.vsPlayerArr[0]) {
	                        scoreFxItem.scoreFx = scoreFx;
	                        scoreFxItem.isSmall = false;
	                        opReq("" + Command_1.CommandId.cs_updateScore, { score: scoreFxItem.score, isLeft: true });
	                    }
	                    else if (pn == this.vsPlayerArr[1]) {
	                        scoreFxItem.scoreFx = scoreFx;
	                        scoreFxItem.isSmall = false;
	                        opReq("" + Command_1.CommandId.cs_updateScore, { score: scoreFxItem.score, isLeft: false });
	                    }
	                    scoreArr.push(scoreFxItem);
	                }
	                scoreArr = scoreArr.sort(JsFunc_1.descendingProp('score'));
	                opReq(Command_1.CommandId.cs_showScoreRank, {
	                    visible: visible,
	                    scoreArr: scoreArr
	                });
	            },
	            onFile: function () {
	                if (!confFile) {
	                    if (!filesInput)
	                        filesInput = document.getElementById("files");
	                    filesInput.addEventListener("change", function (evt) {
	                        confFile = evt.target.files[0];
	                        document.getElementById("reloadFile").click();
	                    }, false);
	                }
	                document.getElementById("files").click();
	            },
	            reloadFile: function (e, exData) {
	                var _this = this;
	                var _ = function (d) {
	                    return d.getMinutes() + 'm' + d.getSeconds() + 's';
	                };
	                console.log("exData", exData);
	                _exData = exData;
	                if (!reader) {
	                    reader = new FileReader();
	                    reader.addEventListener("load", function (event) {
	                        var data = JSON.parse(event.target['result']);
	                        data._ = null;
	                        if (_exData) {
	                            for (var k in _exData) {
	                                console.log('exData', k);
	                                data[k] = _exData[k];
	                            }
	                            if (_exData.callback)
	                                _exData.callback();
	                        }
	                        _this.createOption(data);
	                        console.log("EVENT_ON_FILE", data, _exData);
	                        opReq('cs_data', data);
	                    });
	                }
	                reader.readAsText(confFile, "utf-8");
	            },
	        };
	        VueBase_1.VueBase.initProps(_this);
	        return _this;
	    }
	    _GameAdmin.prototype.created = function () {
	        console.log('Game admin');
	        this.blueArr = [];
	        this.redArr = [];
	        this.vsPlayerArr = [];
	    };
	    _GameAdmin.prototype.createOption = function (data) {
	        var a = [];
	        var playerMap = data.playerMap;
	        for (var i = 0; i < data.rec.length; i++) {
	            var rec = data.rec[i];
	            console.log('player', rec.player);
	            var p1 = playerMap[rec.player[0]];
	            var p2 = playerMap[rec.player[1]];
	            if (p1 || p2) {
	                var p1name = p1 ? p1.name : '';
	                var p2name = p2 ? p2.name : '';
	                var option = { text: rec.idx + p1name + ' vs ' + p2name, value: rec.idx };
	                a.push(option);
	            }
	        }
	        this.options = a;
	        this.gameConf = data;
	        this.blueArr = [];
	        this.redArr = [];
	        for (var i = 0; i < this.gameConf.scoreRank.length; i++) {
	            var a_1 = this.gameConf.scoreRank[i][0].split('_');
	            var pn = a_1[0];
	            var player = data.playerMap[pn];
	            this.blueArr.push(player);
	            this.redArr.push(player);
	        }
	        console.log('create gameConf ', this.gameConf);
	    };
	    _GameAdmin.prototype.route = function (recArr, playerMap) {
	        var getWinner = function (rec) {
	            if (rec.score[0] != 0 || rec.score[1] != 0) {
	                if (rec.score[0] > rec.score[1])
	                    return rec.player[0];
	                else
	                    return rec.player[1];
	            }
	            return '';
	        };
	        var fillWinner = function (fromGameId, playerId) {
	            for (var i = 0; i < recArr.length; i++) {
	                var rec = recArr[i];
	                var a = rec.idx.split('#');
	                var gameId = a[1];
	                if (gameId != '_' && gameId.length > fromGameId.length) {
	                    var pos = gameId.search(fromGameId);
	                    if (pos > -1) {
	                        var arrIdx = Math.floor(pos / Number(a[0]));
	                        console.log('fillWinner from', fromGameId, 'to', gameId, arrIdx, playerMap[playerId].name);
	                        rec.player[arrIdx] = playerId;
	                    }
	                }
	            }
	        };
	        for (var i = 0; i < recArr.length; i++) {
	            var rec = recArr[i];
	            var a = rec.idx.split('#');
	            var gameId = a[1];
	            var winner = getWinner(rec);
	            if (winner) {
	                console.log(gameId, 'winner', playerMap[winner].name);
	                fillWinner(gameId, winner);
	            }
	        }
	    };
	    return _GameAdmin;
	}(VueBase_1.VueBase));
	exports.GameAdmin = new _GameAdmin();


/***/ }),
/* 27 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
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
	    worldwarPanel: 'worldwarPanel',
	    worldwarTitle: 'worldwarTitle',
	    worldwarTeamMateBlood: 'worldwarTeamMateBlood',
	    worldwarKDA: 'worldwarKDAPanel',
	    bottomNoticeAccount: 'bottomNoticeAccount',
	    notice_left_bottom: 'notice_left_bottom',
	    playerPanel: 'player'
	};
	exports.FontName = {
	    MicrosoftYahei: "Microsoft Yahei",
	    NotoSansHans: "Noto Sans S Chinese",
	    Impact: "impact",
	    Gamer: "gamer",
	    Geodet: "geodet",
	    dinCondensedC: "dinCondensedC",
	    DigiLED: "digital",
	    Industry: "Industry",
	    DigiLED2: "digital2"
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
	exports.TimerEvent = {
	    START: 'start',
	    PAUSE: 'pause',
	    TOGGLE: 'toggle',
	    SHIFT: 'shift',
	    RESET: 'reset',
	    SETTING: 'setting'
	};
	exports.ViewEvent = {
	    PLAYER_EDIT: 'edit player',
	    PLAYER_ADD: 'add player',
	    STRAIGHT3_LEFT: 'STRAIGHT3_LEFT',
	    STRAIGHT3_RIGHT: 'STRAIGHT3_RIGHT'
	};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.CommandId = {
	    cs_showPanel: '',
	    sc_showPanel: '',
	    resetTimer: '',
	    disableTracker: '',
	    cs_updateFoul: '',
	    sc_updateFoul: '',
	    cs_updateScore: '',
	    sc_updateScore: '',
	    cs_updateRightScore: '',
	    sc_updateRightScore: '',
	    cs_addLeftScore: '',
	    cs_addRightScore: '',
	    cs_togglePlayerState: '',
	    sc_togglePlayerState: '',
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
	    cs_showTagFx: '',
	    sc_showTagFx: '',
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
	    cs_showScoreRank: '',
	    sc_showScoreRank: '',
	    cs_showKDARank: '',
	    sc_showKDARank: '',
	    cs_showBracket: '',
	    sc_showBracket: '',
	    cs_showGroup: '',
	    sc_showGroup: '',
	    cs_showStage: '',
	    sc_showStage: '',
	    cs_showVsTitle: '',
	    sc_showVsTitle: '',
	    cs_hideOnlinePanel: '',
	    sc_hideOnlinePanel: '',
	    cs_setPreRoundPosition: '',
	    sc_setPreRoundPosition: '',
	    cs_togglePreRoundTheme: '',
	    sc_togglePreRoundTheme: '',
	    cs_setBdVisible: '',
	    sc_setBdVisible: '',
	    cs_setFxPoint: '',
	    sc_setFxPoint: '',
	    cs_playScoreFx: '',
	    sc_playScoreFx: '',
	    cs_resetTimer: '',
	    sc_resetTimer: '',
	    cs_setTimer: '',
	    sc_setTimer: '',
	    cs_startTimer: '',
	    sc_startTimer: '',
	    cs_pauseTimer: '',
	    sc_pauseTimer: '',
	    cs_timerEvent: '',
	    sc_timerEvent: '',
	    cs_timerEvent_common: '',
	    sc_timerEvent_common: '',
	    cs_timerEvent_buzzer: '',
	    sc_timerEvent_buzzer: '',
	    cs_sync_buzzer: '',
	    sc_sync_buzzer: '',
	    cs_scoreFoul_common: '',
	    sc_scoreFoul_common: '',
	    cs_showWW3PlayerInfo: '',
	    sc_showWW3PlayerInfo: '',
	    cs_showLowerThird: '',
	    sc_showLowerThird: '',
	    cs_showLowerThird_left_image: '',
	    sc_showLowerThird_left_image: '',
	    cs_showPickup: '',
	    sc_showPickup: '',
	    cs_setTeamColor: '',
	    sc_setTeamColor: '',
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
	    cs_showBracketPage: '',
	    sc_showBracketPage: '',
	    cs_showBottle: '',
	    sc_showBottle: '',
	    cs_setPlayer: '',
	    sc_setPlayer: '',
	    cs_setTeam: '',
	    sc_setTeam: '',
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
	    cs_showRollText: "",
	    sc_showRollText: "",
	    cs_showChampion: '',
	    sc_showChampion: '',
	    cs_showRanking: '',
	    sc_showRanking: '',
	    cs_toggleScorePanel: '',
	    sc_toggleScorePanel: '',
	    cs_toggleChampionPanel: '',
	    sc_toggleChampionPanel: '',
	    initPanel: '',
	    cs_pickState: '',
	    sc_pickState: '',
	    cs_callState: '',
	    sc_callState: '',
	    cs_joinState: '',
	    sc_joinState: '',
	    cs_showTop5: '',
	    sc_showTop5: '',
	    cs_setPlayerDot: '',
	    sc_setPlayerDot: '',
	    cs_teamScore: '',
	    sc_teamScore: '',
	    cs_timeOut: '',
	    sc_timeOut: '',
	    sc_bracket: '',
	    cs_bracket: '',
	    sc_bracketS5: '',
	    cs_bracketS5: '',
	    cs_manual_blood: '',
	    cs_vsInfo: '',
	    sc_vsInfo: '',
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


/***/ }),
/* 29 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"container\">\r\n\r\n        <span class=\"select\">\r\n                <select v-model=\"selected\" @change=\"onSelectGame\">\r\n                    <option v-for=\"option in options\" v-bind:value=\"option.value\">\r\n                        {{ option.text }}\r\n                    </option>\r\n                </select>\r\n            </span>\r\n            \r\n    <input type=\"file\" id=\"files\" accept=\"*.json\" hidden>\r\n    <input type=\"text\" v-model=\"vsPlayer\" style=\"width: 100px;\"> gameTitle idx\r\n    <input type=\"text\" v-model=\"gameTitle\" style=\"width: 100px;\">\r\n    <button class=\"button is-primary\" @click=\"onInitGame\">初始比赛</button>\r\n    <br>\r\n    <br>\r\n    <button class=\"button is-primary\" @click=\"onFile\">打开配置</button>\r\n    <button class=\"button is-primary\" id=\"reloadFile\" @click=\"reloadFile\">reload</button>\r\n    <br>\r\n\r\n    <div>\r\n        <br> score rank:\r\n        <br> \r\n        <button class=\"button is-primary\" @click=\"onShowScoreRank(true)\">show</button>\r\n        <button class=\"button is-primary\" @click=\"onReloadShow()\">reload show</button>\r\n        <button class=\"button is-primary\" @click=\"onShowScoreRank(false)\">hide</button>\r\n        <br>\r\n        <button class=\"button is-primary\" @click=\"onAddScore(true,-1)\">L-1</button>\r\n        <button class=\"button is-primary\" @click=\"onAddScore(true,1)\">L+1</button>\r\n        ----------\r\n        <button class=\"button is-primary\" @click=\"onAddScore(false,1)\">R+1</button>\r\n        <button class=\"button is-primary\" @click=\"onAddScore(false,-1)\">R-1</button>\r\n        <br>\r\n\r\n        <ul style=\"width:400px;overflow:hidden;zoom:1;border:1px solid #ccc\">\r\n            <li style=\"float:left;width:190px;padding:5px\" v-for=\"player in blueArr\">\r\n                <button class=\"button is-primary\" @click=\"onChangePlayer(true,player.playerId)\">{{player.name}}</button>\r\n            </li>\r\n        </ul>\r\n        <hr>\r\n        <ul style=\"width:400px;overflow:hidden;zoom:1;border:1px solid #ccc\">\r\n            <li style=\"float:left;width:190px;padding:5px\" v-for=\"player in redArr\">\r\n                <button class=\"button is-primary\" @click=\"onChangePlayer(false,player.playerId)\">{{player.name}}</button>\r\n            </li>\r\n        </ul>\r\n\r\n    </div>\r\n</div>";

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	var const_1 = __webpack_require__(27);
	var VueBase_1 = __webpack_require__(22);
	var Command_1 = __webpack_require__(28);
	var HupuAPI_1 = __webpack_require__(24);
	var JsFunc_1 = __webpack_require__(21);
	var WebJsFunc_1 = __webpack_require__(25);
	var confFile = null;
	var reader;
	var filesInput;
	var srvData = null;
	function loadRes(url, callback, isCrossOrigin) {
	    var req = new XMLHttpRequest();
	    req.open('GET', WebJsFunc_1.proxy(url), true);
	    req.onload = function (res) {
	        JsFunc_1.loadImg(req.responseText, callback);
	    };
	    req.send();
	}
	var opReq = function (cmdId, param) {
	    param._ = null;
	    $.ajax({
	        url: "/panel/" + const_1.PanelId.onlinePanel + "/" + cmdId,
	        type: 'post',
	        data: JSON.stringify(param),
	        headers: { "Content-Type": "application/json" },
	        dataType: 'json'
	    });
	};
	var _Pick = (function (_super) {
	    __extends(_Pick, _super);
	    function _Pick() {
	        var _this = _super !== null && _super.apply(this, arguments) || this;
	        _this.template = __webpack_require__(31);
	        _this.pickState = VueBase_1.VueBase.PROP;
	        _this.playerId = VueBase_1.VueBase.PROP;
	        _this.playerTitle = VueBase_1.VueBase.PROP;
	        _this.methods = {
	            onLoadConf: function () {
	                var _this = this;
	                $.get('/db/pick.json?' + new Date, function (data) {
	                    console.log('load conf..', data);
	                    srvData = JSON.parse(data);
	                    if (Number(_this.playerId)) {
	                        _this.onInit(srvData);
	                    }
	                });
	            },
	            onCall: function (zhubo) {
	                opReq(Command_1.CommandId.cs_callState, { callState: zhubo });
	            },
	            onJoin: function (zhubo) {
	                var j = { '1': false, '2': false, '3': false, '4': false };
	                if (zhubo > 0) {
	                    j[zhubo] = true;
	                }
	                else {
	                    j = { '1': true, '2': true, '3': true, '4': true };
	                }
	                opReq(Command_1.CommandId.cs_joinState, { joinState: j, isReset: zhubo == 0 });
	            },
	            onPick: function (zhubo) {
	                if (zhubo > 0) {
	                    this.pickState[zhubo] = !this.pickState[zhubo];
	                }
	                else {
	                    this.pickState = { '1': false, '2': false, '3': false, '4': false };
	                }
	                opReq(Command_1.CommandId.cs_pickState, { pickState: this.pickState });
	            },
	            onInit: function (data) {
	                var _this = this;
	                var pid = data.player_id;
	                if (Number(this.playerId) > 0)
	                    pid = this.playerId;
	                HupuAPI_1.getPlayerInfoFromLiangle(pid, function (res1) {
	                    if (res1.data && res1.data.name) {
	                        var player_1 = res1.data;
	                        console.log(player_1);
	                        loadRes(player_1.avatar, function (imgData) {
	                            console.log('load img', imgData);
	                            data.avatar = imgData.src;
	                            data.player = player_1.name;
	                            data.title = _this.playerTitle;
	                            opReq('cs_data', data);
	                        });
	                    }
	                });
	            },
	            onFile: function () {
	                if (!confFile) {
	                    if (!filesInput)
	                        filesInput = document.getElementById("files");
	                    filesInput.addEventListener("change", function (evt) {
	                        confFile = evt.target.files[0];
	                        document.getElementById("reloadFile").click();
	                    }, false);
	                }
	                document.getElementById("files").click();
	            },
	            reloadFile: function (e) {
	                var _this = this;
	                if (!srvData) {
	                    if (!reader) {
	                        reader = new FileReader();
	                        reader.addEventListener("load", function (event) {
	                            var data = JSON.parse(event.target['result']);
	                            data._ = null;
	                            console.log("EVENT_ON_FILE", data);
	                            _this.onInit(data);
	                        });
	                    }
	                    reader.readAsText(confFile, "utf-8");
	                }
	                else {
	                    this.onInit(srvData);
	                }
	            }
	        };
	        return _this;
	    }
	    _Pick.prototype.created = function () {
	        console.log('pick admin');
	        this.pickState = { '1': false, '2': false, '3': false, '4': false };
	        this.playerId = "";
	        this.playerTitle = "";
	    };
	    return _Pick;
	}(VueBase_1.VueBase));
	exports.Pick = new _Pick();


/***/ }),
/* 31 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"container\">\r\n    <input type=\"file\" id=\"files\" accept=\"*.json\" hidden>\r\n    <br>\r\n    <br>\r\n    <button class=\"button is-primary\" @click=\"onFile\">打开本地配置</button>\r\n    <button class=\"button is-primary\" id=\"reloadFile\" @click=\"reloadFile\">reload</button>\r\n    <button class=\"button is-primary\" @click=\"onLoadConf\">加载配置</button>\r\n    <br>\r\n   \r\n    <br>\r\n\r\n    <br> 球员player id:\r\n    <input type=\"text\" v-model=\"playerId\" style=\"width: 100px;\"> 冠军title\r\n    <input type=\"text\" v-model=\"playerTitle\" style=\"width: 200px;\">\r\n    <br>\r\n    <br> pick:\r\n    <button class=\"button is-primary\" @click=\"onPick(1)\">盼盼</button>\r\n    <button class=\"button is-primary\" @click=\"onPick(2)\">Gary</button>\r\n    <button class=\"button is-primary\" @click=\"onPick(3)\">安妮</button>\r\n    <button class=\"button is-primary\" @click=\"onPick(4)\">堂主</button>\r\n    <button class=\"button is-primary\" @click=\"onPick(0)\">重置</button>\r\n    <br>\r\n    <br>call:\r\n    <button class=\"button is-primary\" @click=\"onCall(1)\">盼盼</button>\r\n    <button class=\"button is-primary\" @click=\"onCall(2)\">Gary</button>\r\n    <button class=\"button is-primary\" @click=\"onCall(3)\">安妮</button>\r\n    <button class=\"button is-primary\" @click=\"onCall(4)\">堂主</button>\r\n    <button class=\"button is-primary\" @click=\"onCall(0)\">隐藏</button>\r\n    <br>\r\n    <br>加入:\r\n    <button class=\"button is-primary\" @click=\"onJoin(1)\">盼盼</button>\r\n    <button class=\"button is-primary\" @click=\"onJoin(2)\">Gary</button>\r\n    <button class=\"button is-primary\" @click=\"onJoin(3)\">安妮</button>\r\n    <button class=\"button is-primary\" @click=\"onJoin(4)\">堂主</button>\r\n    <button class=\"button is-primary\" @click=\"onJoin(0)\">重置</button>\r\n</div>";

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	var BackendConf_1 = __webpack_require__(33);
	var Command_1 = __webpack_require__(28);
	var const_1 = __webpack_require__(27);
	var JsFunc_1 = __webpack_require__(21);
	var VueBase_1 = __webpack_require__(22);
	var BaseGame_1 = __webpack_require__(34);
	var WWGame_1 = __webpack_require__(37);
	var HupuAPI_1 = __webpack_require__(24);
	var opReq = function (cmdId, param) {
	    param._ = null;
	    $.ajax({
	        url: "/panel/" + const_1.PanelId.onlinePanel + "/" + cmdId,
	        type: "post",
	        data: JSON.stringify(param),
	        headers: { "Content-Type": "application/json" },
	        dataType: "json"
	    });
	};
	var gameView = new WWGame_1.WWGame();
	var baseGameView;
	var _worldWar = (function (_super) {
	    __extends(_worldWar, _super);
	    function _worldWar() {
	        var _this = _super.call(this) || this;
	        _this.template = __webpack_require__(39);
	        _this.components = { BaseGame: BaseGame_1.BaseGameView };
	        _this.vsPlayer = VueBase_1.VueBase.PROP;
	        _this.vsPlayerArr = VueBase_1.VueBase.PROP;
	        _this.redArr = VueBase_1.VueBase.PROP;
	        _this.redArr_2 = VueBase_1.VueBase.PROP;
	        _this.blueArr = VueBase_1.VueBase.PROP;
	        _this.recArr = VueBase_1.VueBase.PROP;
	        _this.blueArr_2 = VueBase_1.VueBase.PROP;
	        _this.teamVsIdx = VueBase_1.VueBase.PROP;
	        _this.teamScore = VueBase_1.VueBase.PROP;
	        _this.playerDots = VueBase_1.VueBase.PROP;
	        _this.isShowCurTeamVsOnly = VueBase_1.VueBase.PROP;
	        _this.updateTime = VueBase_1.VueBase.PROP;
	        _this.delay = VueBase_1.VueBase.PROP;
	        _this.watch = {
	            teamVsIdx: function (val) {
	                this.updateBlood(val);
	            }
	        };
	        _this.methods = {
	            onSetDelay: function (sec) {
	                this.delay = sec;
	            },
	            onShowTitle: function (v) {
	                var playerMap = gameView.playerMap;
	                var a = this.vsPlayer.split(" ");
	                var p1 = a[0];
	                var p2 = a[1];
	                p1 = playerMap[p1];
	                p2 = playerMap[p2];
	                opReq(Command_1.CommandId.cs_showPanel, { lTitle: p1.title, rTitle: p2.title, panel: const_1.PanelId.worldwarTitle, visible: v });
	            },
	            onShowPanel: function (v) {
	                opReq(Command_1.CommandId.cs_showPanel, { panel: const_1.PanelId.worldwarPanel, visible: v });
	            },
	            isShowRec: function (isTeamVsIdxRec) {
	                if (this.isShowCurTeamVsOnly)
	                    return isTeamVsIdxRec;
	                return true;
	            },
	            onSetTeamScore: function (v) {
	                var a = v.split(' ');
	                if (a.length == 2) {
	                    this.emitTeamScore({
	                        lScore: a[0], rScore: a[1]
	                    });
	                }
	            },
	            onSetPlayerDots: function (v, isOn) {
	                var a = v.split(' ');
	                if (a.length == 2) {
	                    opReq(Command_1.CommandId.cs_setPlayerDot, { playerDot_L: a[0], playerDot_R: a[1], isOn: isOn });
	                }
	            },
	            onSetTimeOut: function (v) {
	                var a = v.split(' ');
	                if (a.length == 2) {
	                    this.setTimeOut({
	                        lTimeOut: a[0], rTimeOut: a[1]
	                    });
	                }
	            },
	            onSetBlood: function (teamVsIdx) {
	                var bloodArr = $(".blood");
	                var playerMapBlood = {};
	                for (var _i = 0, bloodArr_1 = bloodArr; _i < bloodArr_1.length; _i++) {
	                    var $elm = bloodArr_1[_i];
	                    var playerId = $elm.id.split("blood")[1];
	                    var blood = $elm.value;
	                    playerMapBlood[playerId] = Number(blood);
	                    console.log("player", playerId, "blood", blood);
	                }
	                gameView.setTeamBlood(teamVsIdx, playerMapBlood);
	            },
	            onDeleteGameRec: function (gameIdx) {
	                gameView.deleteGameRec(gameIdx);
	            },
	            onGet8090EventJson: function (idx) {
	                var _this = this;
	                HupuAPI_1.getPanelConf2(idx, function (res) {
	                    console.log(res);
	                    _this.onInit(res);
	                });
	            },
	            onShowKDA: function (v) {
	            },
	            onSetScore: function (gameIdx) {
	                var scoreStr = $("#scoreInput" + gameIdx).val();
	                console.log(scoreStr);
	                var a = scoreStr.split(" ");
	                if (a.length == 2) {
	                    gameView.setScore(gameIdx, [Number(a[0]), Number(a[1])]);
	                }
	                else if (scoreStr == "") {
	                    var lScore = Number($("#lScore").html());
	                    var rScore = Number($("#rScore").html());
	                    var lFoul = Number($("#lFoul").html());
	                    var rFoul = Number($("#rFoul").html());
	                    console.log("commit game", lScore, rScore, "foul", lFoul, rFoul);
	                    gameView.setScore(gameIdx, [lScore, rScore]);
	                }
	            },
	            onSetTeamVsIdx: function (gameIdx) {
	                var scoreStr = $("#scoreInput" + gameIdx).val();
	                console.log(scoreStr);
	                if (Number(scoreStr) > 0) {
	                    gameView.setTeamVsIdx(gameIdx, Number(scoreStr));
	                }
	            },
	            onSetVS: function (gameIdx, vsStr) {
	                var a = vsStr.split(" ");
	                if (a.length == 2) {
	                    gameView.setVs(gameIdx, [a[0], a[1]]);
	                }
	            },
	            onManualBlood: function (dtBlood, player) {
	                if (dtBlood != 0) {
	                    player.blood = Number(player.blood) + dtBlood;
	                    console.log('onManualBlood', player);
	                }
	                opReq(Command_1.CommandId.cs_manual_blood, {
	                    lTeam: this.blueArr_2,
	                    rTeam: this.redArr_2,
	                    vsPlayerArr: this.vsPlayerArr
	                });
	            },
	            pickPlayer: function (isLeft, playerId) {
	                isLeft
	                    ? (this.vsPlayerArr[0] = playerId)
	                    : (this.vsPlayerArr[1] = playerId);
	                this.vsPlayer = this.vsPlayerArr[0] + " " + this.vsPlayerArr[1];
	            },
	            onFile: function (e) {
	                console.log("load file");
	                this.conf.onFile(e);
	            },
	            onUploadPlayerMap: function () {
	                var _this = this;
	                HupuAPI_1.syncWorldWarPanel3(function (doc) {
	                    doc.playerMap = JSON.stringify(_this.gameView.playerMap_data);
	                }, true);
	                console.log('upload playerMap', this.gameView.playerMap_data);
	            },
	            onEmitGameInfo: function () {
	                this.emitGameInfo();
	            },
	            onAddGame: function (e) {
	                gameView.addGame(this.vsPlayerArr, this.teamVsIdx);
	            },
	            onCommitGame: function (gameIdx) {
	                $('.btn-setScore')[0].click();
	            },
	            onReload: function (e) {
	                this.conf.onReloadFile(e);
	            },
	            onDeleteDoc: function () {
	                gameView.clearGameRec(null, gameView.playerMap);
	            },
	            setGameIdx: function (gameIdx) {
	                gameView.gameIdx = gameIdx;
	                this.vueUpdate();
	            },
	            onReloadXlsx: function (e) {
	                console.log("load xlsx");
	                this.conf.onReloadXlsx(e);
	            }
	        };
	        VueBase_1.VueBase.initProps(_this);
	        return _this;
	    }
	    _worldWar.prototype.created = function () {
	        var _this = this;
	        console.log("_worldWar");
	        this.vsPlayerArr = ["", ""];
	        this.conf = new BackendConf_1.BackendConf("file", "reload", function (data) {
	            _this.onInit(data);
	        });
	        gameView.on(WWGame_1.WWGame.InitDocView, function (doc) {
	            console.log("init doc view", doc);
	            _this.initDocView(doc);
	        });
	        this.gameView = gameView;
	        baseGameView = window["BaseGameView"];
	    };
	    _worldWar.prototype.initDocView = function (doc) {
	        console.log("init doc view ", doc);
	        this.recArr = [];
	        for (var k in doc.rec) {
	            var rec = JsFunc_1.clone(doc.rec[k]);
	            rec["name"] = [];
	            for (var i = 0; i < rec.player.length; i++) {
	                var p = rec.player[i];
	                rec.name.push(this.getPlayerDoc(p).name);
	            }
	            this.recArr.push(rec);
	        }
	        gameView.gameIdx = doc.gameIdx;
	        this.teamVsIdx = doc.teamVsIdx;
	        this.updateBlood(this.teamVsIdx);
	    };
	    _worldWar.prototype.getPlayerDoc = function (playerId) {
	        if (this.gameView.playerMap) {
	            var p = this.gameView.playerMap[playerId];
	            if (!p)
	                console.log("error playerId", playerId);
	            return this.gameView.playerMap[playerId];
	        }
	        return null;
	    };
	    _worldWar.prototype.onInit = function (data) {
	        var _this = this;
	        console.log("on load conf", data);
	        gameView.loadConf(data);
	        var t1Idx = 1, t2Idx = 2;
	        if (data.vs) {
	            t1Idx = data.vs[0];
	            t2Idx = data.vs[1];
	        }
	        this.blueArr = gameView.getTeamByIdx(t1Idx);
	        this.redArr = gameView.getTeamByIdx(t2Idx);
	        this.blueArr_2 = gameView.getTeamByIdx(t1Idx, true);
	        this.redArr_2 = gameView.getTeamByIdx(t2Idx, true);
	        opReq(Command_1.CommandId.cs_bracketS5, data);
	        WWGame_1.syncDoc(function (data2) {
	            _this.initDocView(data2.doc);
	        });
	    };
	    _worldWar.prototype.vueUpdate = function () {
	        this.updateTime = new Date().getTime();
	    };
	    _worldWar.prototype.setTimeOut = function (data) {
	        gameView.setTimeOut(data);
	        opReq(Command_1.CommandId.cs_timeOut, data);
	    };
	    _worldWar.prototype.emitGameInfo = function () {
	        console.log("init game");
	        var playerMap = gameView.playerMap;
	        var a = this.vsPlayer.split(" ");
	        var p1 = a[0];
	        var p2 = a[1];
	        p1 = playerMap[p1];
	        p2 = playerMap[p2];
	        var gameTitle = "";
	        var data = {
	            leftPlayer: p1,
	            rightPlayer: p2,
	            leftTeam: this.blueArr,
	            rightTeam: this.redArr,
	            gameTitle: gameTitle
	        };
	        opReq("cs_setPlayer", data);
	        baseGameView.initView(data);
	    };
	    _worldWar.prototype.emitTeamScore = function (data) {
	        opReq(Command_1.CommandId.cs_teamScore, data);
	    };
	    _worldWar.prototype.emitKDA = function (v) {
	        var lScoreArr = [], rScoreArr = [];
	        var _ = function (arr, scoreArr) {
	            for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
	                var player = arr_1[_i];
	                var p = JsFunc_1.clone(player);
	                p.isSmall = true;
	                p.score = p.blood;
	                scoreArr.push(p);
	            }
	        };
	        _(this.blueArr, lScoreArr);
	        _(this.redArr, rScoreArr);
	        opReq(Command_1.CommandId.cs_showPanel, {
	            lScoreArr: lScoreArr,
	            rScoreArr: rScoreArr,
	            panel: const_1.PanelId.worldwarKDA, visible: v
	        });
	    };
	    _worldWar.prototype.updateBlood = function (teamVsIdx) {
	        var _this = this;
	        console.log("on updateBlood teamVsIdx", teamVsIdx);
	        gameView.getBloodMap(teamVsIdx, function (bloodMap) {
	            var bloodArr = $(".blood");
	            for (var _i = 0, bloodArr_2 = bloodArr; _i < bloodArr_2.length; _i++) {
	                var $elm = bloodArr_2[_i];
	                var playerId = $elm.id.split("blood")[1];
	                if (bloodMap[playerId]) {
	                    var blood = bloodMap[playerId].blood;
	                    $elm.value = blood;
	                }
	            }
	            _this.vueUpdate();
	        });
	    };
	    return _worldWar;
	}(VueBase_1.VueBase));
	exports.WorldWar = new _worldWar();


/***/ }),
/* 33 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var BackendConf = (function () {
	    function BackendConf($fileElmId, $reloadElmId, onInit) {
	        this.$fileElmId = $fileElmId;
	        this.$reloadElmId = $reloadElmId;
	        this._onInit = onInit;
	    }
	    BackendConf.prototype.onFile = function () {
	        var _this = this;
	        if (!this.confFile) {
	            if (!this.filesInput)
	                this.filesInput = document.getElementById(this.$fileElmId);
	            this.filesInput.addEventListener("change", function (evt) {
	                _this.confFile = evt.target.files[0];
	                document.getElementById(_this.$reloadElmId).click();
	            }, false);
	        }
	        document.getElementById(this.$fileElmId).click();
	    };
	    BackendConf.prototype.onReloadFile = function (e) {
	        var _this = this;
	        if (!this._reader) {
	            this._reader = new FileReader();
	            this._reader.addEventListener("load", function (event) {
	                var data = JSON.parse(event.target["result"]);
	                data._ = null;
	                console.log("EVENT_ON_FILE", data);
	                _this._onInit(data);
	            });
	        }
	        this._reader.readAsText(this.confFile, "utf-8");
	    };
	    BackendConf.prototype.process_wb = function (wb) {
	        var ws = wb.Sheets[wb.SheetNames[0]];
	        var html_string = XLSX.utils.sheet_to_html(ws, {
	            id: "data-table",
	            editable: true
	        });
	        document.getElementById("table").innerHTML = html_string;
	    };
	    BackendConf.prototype.onReloadXlsx = function (e) {
	        var _this = this;
	        var f = this.confFile;
	        var reader = new FileReader();
	        var rABS = !!reader.readAsBinaryString;
	        reader.onload = function (e) {
	            var data = e.target["result"];
	            if (!rABS)
	                data = new Uint8Array(data);
	            var wb = XLSX.read(data, {
	                type: rABS ? "binary" : "array"
	            });
	            _this.process_wb(wb);
	        };
	        if (rABS)
	            reader.readAsBinaryString(f);
	        else
	            reader.readAsArrayBuffer(f);
	    };
	    return BackendConf;
	}());
	exports.BackendConf = BackendConf;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	var VueBase_1 = __webpack_require__(22);
	var const_1 = __webpack_require__(27);
	var Command_1 = __webpack_require__(28);
	var HupuAPI_1 = __webpack_require__(24);
	var bracketRec_1 = __webpack_require__(35);
	var opReq = function (cmdId, param) {
	    param._ = null;
	    $.ajax({
	        url: "/panel/" + const_1.PanelId.onlinePanel + "/" + cmdId,
	        type: "post",
	        data: JSON.stringify(param),
	        headers: { "Content-Type": "application/json" },
	        dataType: "json"
	    });
	};
	var BaseGame = (function () {
	    function BaseGame() {
	        this.lScore = 0;
	        this.rScore = 0;
	        this.lFoul = 0;
	        this.rFoul = 0;
	        this.lName = "";
	        this.rName = "";
	        this.lPlayerId = "";
	        this.rPlayerId = "";
	        this.foul_to_hint = 4;
	    }
	    return BaseGame;
	}());
	exports.BaseGame = BaseGame;
	var baseGame = new BaseGame();
	var _baseGameView = (function (_super) {
	    __extends(_baseGameView, _super);
	    function _baseGameView() {
	        var _this = _super.call(this) || this;
	        _this.template = __webpack_require__(36);
	        _this.timeInSec = VueBase_1.VueBase.PROP;
	        _this.updateTime = VueBase_1.VueBase.PROP;
	        _this.lTeamScore = VueBase_1.VueBase.PROP;
	        _this.rTeamScore = VueBase_1.VueBase.PROP;
	        _this.watch = {
	            "baseGame.lName": function (val) {
	                console.log("lname", val);
	            }
	        };
	        _this.methods = {
	            onSetTimerEvent: function (event, param) {
	                if (event == 'setting') {
	                    var a = param.split('-');
	                    if (a.length == 2) {
	                        param = Number(a[0]) * 60 + Number(a[1]);
	                    }
	                }
	                opReq(Command_1.CommandId.cs_timerEvent, { event: event, param: param });
	                var event1 = event;
	                if (event1.search('setting') > -1) {
	                    event1 += (new Date).getTime();
	                }
	                if (event1.search('start') > -1) {
	                    event1 += (new Date).getTime();
	                }
	                if (event1.search('pause') > -1) {
	                    event1 += (new Date).getTime();
	                }
	                if (event.search('reset') > -1) {
	                    event1 = 'setting' + (new Date).getTime();
	                    param = 0;
	                }
	                HupuAPI_1.update_base_score({ timer_state: event1, timer_param: param }, function (_) {
	                    console.log(_);
	                });
	            },
	            onRestTeamScore: function () {
	                this.lTeamScore = this.rTeamScore = 0;
	                opReq(Command_1.CommandId.cs_teamScore, { lScore: this.lTeamScore, rScore: this.rTeamScore });
	            },
	            onResetGame: function () {
	                baseGame.lScore = 0;
	                baseGame.rScore = 0;
	                baseGame.lFoul = 0;
	                baseGame.rFoul = 0;
	                this.vueUpdate();
	                opReq(Command_1.CommandId.cs_setBlood, {
	                    lFoul: baseGame.lFoul, rFoul: baseGame.rFoul,
	                    lScore: baseGame.lScore, rScore: baseGame.rScore,
	                });
	                opReq(Command_1.CommandId.cs_setFoul, {
	                    lFoul: baseGame.lFoul, rFoul: baseGame.rFoul
	                });
	                HupuAPI_1.update_base_score({
	                    score_L: baseGame.lScore,
	                    score_R: baseGame.rScore,
	                    foul_L: baseGame.lFoul,
	                    foul_R: baseGame.rFoul,
	                    timer_state: bracketRec_1.get_now_sec_1970(), timer_param: 0
	                }, function (_) {
	                    console.log(_);
	                });
	            },
	            onSetTeamScore: function (isLeft, dtScore) {
	                opReq(Command_1.CommandId.cs_teamScore, { dtScore: dtScore, isLeft: isLeft });
	            },
	            onSetScore: function (isLeft, dtScore) {
	                var score;
	                if (isLeft) {
	                    baseGame.lScore += dtScore;
	                    score = baseGame.lScore;
	                }
	                else {
	                    baseGame.rScore += dtScore;
	                    score = baseGame.rScore;
	                }
	                opReq(Command_1.CommandId.cs_setBlood, {
	                    isLeft: isLeft, score: score,
	                    lScore: baseGame.lScore, rScore: baseGame.rScore,
	                    lPlayer: baseGame.lPlayerId, rPlayer: baseGame.rPlayerId
	                });
	                HupuAPI_1.update_base_score({ score_L: baseGame.lScore, score_R: baseGame.rScore }, function (_) {
	                    console.log(_);
	                });
	                this.vueUpdate();
	            },
	            onSetFoul: function (isLeft, dtFoul) {
	                isLeft ? (baseGame.lFoul += dtFoul) : (baseGame.rFoul += dtFoul);
	                opReq(Command_1.CommandId.cs_setFoul, {
	                    lFoul: baseGame.lFoul,
	                    rFoul: baseGame.rFoul
	                });
	                var hint_L = baseGame.lFoul >= baseGame.foul_to_hint ? 1 : 0;
	                var hint_R = baseGame.rFoul >= baseGame.foul_to_hint ? 1 : 0;
	                HupuAPI_1.update_base_score({
	                    hint_L: hint_L,
	                    hint_R: hint_R,
	                    foul_L: baseGame.lFoul,
	                    foul_R: baseGame.rFoul
	                }, function (_) {
	                    console.log(_);
	                });
	                this.vueUpdate();
	            },
	            onResetFoul: function () {
	                this.onSetFoul(true, -baseGame.lFoul);
	                this.onSetFoul(false, -baseGame.rFoul);
	            },
	            onVueUpdate: function () {
	                this.vueUpdate();
	            }
	        };
	        VueBase_1.VueBase.initProps(_this);
	        return _this;
	    }
	    _baseGameView.prototype.created = function () {
	        this.baseGame = baseGame;
	        this.timeInSec = 0;
	        this.lTeamScore = this.rTeamScore = 0;
	    };
	    _baseGameView.prototype.initView = function (data) {
	        baseGame.lName = data.leftPlayer.name;
	        baseGame.rName = data.rightPlayer.name;
	        baseGame.lPlayerId = data.leftPlayer.playerId;
	        baseGame.rPlayerId = data.rightPlayer.playerId;
	        baseGame.lScore = baseGame.rScore = baseGame.lFoul = baseGame.rFoul = 0;
	        console.log("init base game view", data, baseGame.lName);
	        this.vueUpdate();
	        document.getElementById("vudp").click();
	    };
	    _baseGameView.prototype.vueUpdate = function () {
	        this.updateTime = new Date().getTime();
	    };
	    return _baseGameView;
	}(VueBase_1.VueBase));
	exports._baseGameView = _baseGameView;
	exports.BaseGameView = new _baseGameView();
	window["BaseGameView"] = exports.BaseGameView;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var JsFunc_1 = __webpack_require__(21);
	var _p = function (x, y) {
	    return 'left:' + x + 'px;' + 'top:' + y + 'px;';
	};
	function newBracketRec1() {
	    return [
	        { playerId: ['', ''], score: [-1, -1], player: ["", ""], s: _p(0, 373), gameIdx: 13 },
	        { playerId: ['', ''], score: [-1, -1], player: ["", ""], s: _p(0, 473), gameIdx: 15 },
	        { playerId: ['', ''], score: [-1, -1], player: ["", ""], s: _p(450, 373), gameIdx: 14 },
	        { playerId: ['', ''], score: [-1, -1], player: ["", ""], s: _p(450, 473), gameIdx: 16 },
	        { playerId: ['', ''], score: [-1, -1], player: ["", ""], s: _p(160, 398), gameIdx: 21, isH: true },
	        { playerId: ['', ''], score: [-1, -1], player: ["", ""], s: _p(160, 498), gameIdx: 22, isH: true },
	    ];
	}
	exports.newBracketRec1 = newBracketRec1;
	function newBracketRec2() {
	    return [
	        { playerId: ['', ''], score: [-1, -1], player: ["", ""], s: _p(0, 373), gameIdx: 17 },
	        { playerId: ['', ''], score: [-1, -1], player: ["", ""], s: _p(0, 473), gameIdx: 19 },
	        { playerId: ['', ''], score: [-1, -1], player: ["", ""], s: _p(450, 373), gameIdx: 18 },
	        { playerId: ['', ''], score: [-1, -1], player: ["", ""], s: _p(450, 473), gameIdx: 20 },
	        { playerId: ['', ''], score: [-1, -1], player: ["", ""], s: _p(160, 398), gameIdx: 23, isH: true },
	        { playerId: ['', ''], score: [-1, -1], player: ["", ""], s: _p(160, 498), gameIdx: 24, isH: true },
	    ];
	}
	exports.newBracketRec2 = newBracketRec2;
	function newBracketRec3() {
	    return [
	        { playerId: ['', ''], score: [-1, -1], player: ["", ""], s: _p(0, 373), gameIdx: 21 },
	        { playerId: ['', ''], score: [-1, -1], player: ["", ""], s: _p(0, 473), gameIdx: 23 },
	        { playerId: ['', ''], score: [-1, -1], player: ["", ""], s: _p(450, 373), gameIdx: 22 },
	        { playerId: ['', ''], score: [-1, -1], player: ["", ""], s: _p(450, 473), gameIdx: 24 },
	        { playerId: ['', ''], score: [-1, -1], player: ["", ""], s: _p(160, 398), gameIdx: 25, isH: true },
	        { playerId: ['', ''], score: [-1, -1], player: ["", ""], s: _p(160, 498), gameIdx: 26, isH: true },
	    ];
	}
	exports.newBracketRec3 = newBracketRec3;
	function newBracketRecFinal() {
	    return [
	        { playerId: ['', ''], score: [-1, -1], player: ["", ""], s: _p(0, 373), gameIdx: 25 },
	        { playerId: ['', ''], score: [-1, -1], player: ["", ""], s: _p(0, 473), gameIdx: -1 },
	        { playerId: ['', ''], score: [-1, -1], player: ["", ""], s: _p(450, 373), gameIdx: 26 },
	        { playerId: ['', ''], score: [-1, -1], player: ["", ""], s: _p(450, 473), gameIdx: -1 },
	        { playerId: ['', ''], score: [-1, -1], player: ["", ""], s: _p(160, 398), gameIdx: 27, isH: true },
	        { playerId: ['', ''], score: [-1, -1], player: ["", ""], s: _p(160, 498), gameIdx: -1, isH: true },
	    ];
	}
	exports.newBracketRecFinal = newBracketRecFinal;
	function newBracketRec16() {
	    var a = [];
	    for (var i = 0; i < 16; i++) {
	        var gameIdx = i + 1;
	        a.push({ playerId: ['', ''], score: [-1, -1], player: ["", ""], gameIdx: gameIdx });
	    }
	    return a;
	}
	exports.newBracketRec16 = newBracketRec16;
	function buildRec(doc, playerMap) {
	    var a = [];
	    var winMap = {};
	    var totalScoreMap = {};
	    var bracketRec_1 = newBracketRec1();
	    var bracketRec_2 = newBracketRec2();
	    var bracketRec_3 = newBracketRec3();
	    var bracketRec_final = newBracketRecFinal();
	    var bracketRec_16 = newBracketRec16();
	    var _loop_1 = function (idx) {
	        var rec = doc.rec[idx];
	        var p1 = rec.player[0];
	        var p2 = rec.player[1];
	        if (!winMap[p1]) {
	            winMap[p1] = [];
	            totalScoreMap[p1] = { score: 0, w: 0, l: 0 };
	        }
	        if (!winMap[p2]) {
	            totalScoreMap[p2] = { score: 0, w: 0, l: 0 };
	            winMap[p2] = [];
	        }
	        if (rec.isGroup) {
	            totalScoreMap[p1].score += rec.score[0] - rec.score[1];
	            totalScoreMap[p2].score -= rec.score[0] - rec.score[1];
	        }
	        if (rec.score[0] > rec.score[1]) {
	            if (rec.isGroup) {
	                totalScoreMap[p1].w += 1;
	                totalScoreMap[p2].l += 1;
	            }
	            winMap[p1].push(p2);
	        }
	        else {
	            if (rec.isGroup) {
	                totalScoreMap[p2].w += 1;
	                totalScoreMap[p1].l += 1;
	            }
	            winMap[p2].push(p1);
	        }
	        rec.name = [playerMap[p1].name, playerMap[p2].name];
	        for (var _i = 0, bracketRec_1_1 = bracketRec_1; _i < bracketRec_1_1.length; _i++) {
	            var b = bracketRec_1_1[_i];
	            if (b.gameIdx == Number(idx)) {
	                b.player = rec.name;
	                b.playerId = [p1, p2];
	                b.score = rec.score;
	            }
	        }
	        for (var _a = 0, bracketRec_2_1 = bracketRec_2; _a < bracketRec_2_1.length; _a++) {
	            var b = bracketRec_2_1[_a];
	            if (b.gameIdx == Number(idx)) {
	                b.player = rec.name;
	                b.playerId = [p1, p2];
	                b.score = rec.score;
	            }
	        }
	        for (var _b = 0, bracketRec_3_1 = bracketRec_3; _b < bracketRec_3_1.length; _b++) {
	            var b = bracketRec_3_1[_b];
	            if (b.gameIdx == Number(idx)) {
	                b.player = rec.name;
	                b.playerId = [p1, p2];
	                b.score = rec.score;
	            }
	        }
	        for (var _c = 0, bracketRec_final_1 = bracketRec_final; _c < bracketRec_final_1.length; _c++) {
	            var b = bracketRec_final_1[_c];
	            if (b.gameIdx == Number(idx)) {
	                b.player = rec.name;
	                b.playerId = [p1, p2];
	                b.score = rec.score;
	            }
	        }
	        var fillBracketSection = function (section) {
	            for (var _i = 0, section_1 = section; _i < section_1.length; _i++) {
	                var b = section_1[_i];
	                if (b.gameIdx == Number(idx)) {
	                    b.player = rec.name;
	                    b.playerId = [p1, p2];
	                    b.score = rec.score;
	                }
	            }
	        };
	        fillBracketSection(bracketRec_16);
	        rec.gameIdx = idx;
	        a.push(rec);
	    };
	    for (var idx in doc.rec) {
	        _loop_1(idx);
	    }
	    return {
	        winMap: winMap,
	        totalScoreMap: totalScoreMap,
	        recArr: a,
	        bracketRec1: bracketRec_1,
	        bracketRec2: bracketRec_2,
	        bracketRec3: bracketRec_3,
	        bracketRec16: bracketRec_16,
	        bracketRecFinal: bracketRec_final
	    };
	}
	exports.buildRec = buildRec;
	function rank16(doc, playerMap, rank5Player) {
	    var rank16Map = {};
	    var arr_6_8 = [];
	    var arr_9_16 = [];
	    for (var idx in doc.rec) {
	        var rec = doc.rec[idx];
	        var winner = void 0;
	        var loser = void 0;
	        if (rec.score[0] > rec.score[1]) {
	            winner = rec.player[0];
	            loser = rec.player[1];
	        }
	        else if (rec.score[0] < rec.score[1]) {
	            winner = rec.player[1];
	            loser = rec.player[0];
	        }
	        if (Number(idx) == 27) {
	            rank16Map['1'] = winner;
	            rank16Map['2'] = loser;
	        }
	        if (Number(idx) == 25) {
	            rank16Map['3'] = loser;
	        }
	        if (Number(idx) == 26) {
	            rank16Map['4'] = loser;
	        }
	        if ([21, 22, 23, 24].indexOf(Number(idx)) > -1) {
	            if (loser != rank5Player)
	                arr_6_8.push(loser);
	        }
	        if ([13, 14, 15, 16, 17, 18, 19, 20].indexOf(Number(idx)) > -1) {
	            arr_9_16.push(loser);
	        }
	    }
	    console.log('rank 16', rank16Map, arr_6_8, arr_9_16);
	    var rank16Arr = JsFunc_1.mapToArr(rank16Map);
	    rank16Arr.push(rank5Player);
	    rank16Arr = rank16Arr.concat(arr_6_8).concat(arr_9_16);
	    var rank = 0;
	    var a = [];
	    var rankScoreMap = {
	        '1': 40, '2': 30, '3': 25, '4': 25, '5': 20,
	        '6': 15, '7': 15, '8': 15, '16': 10
	    };
	    var playerScore = window['gameConf'].playerScore;
	    for (var k in playerScore) {
	        var a_1 = k.split('_');
	        playerScore[a_1[0]] = playerScore[k];
	    }
	    for (var _i = 0, rank16Arr_1 = rank16Arr; _i < rank16Arr_1.length; _i++) {
	        var playerId = rank16Arr_1[_i];
	        var rankScore = 0;
	        rank++;
	        if (rank > 8)
	            rankScore = rankScoreMap['16'];
	        else if (rankScoreMap[rank])
	            rankScore = rankScoreMap[rank];
	        if (playerScore[playerId])
	            rankScore += playerScore[playerId];
	        console.log(rank, playerMap[playerId].name);
	        a.push({ rank: rank, name: playerMap[playerId].name, rankScore: rankScore });
	    }
	    return a;
	}
	exports.rank16 = rank16;
	function get_now_sec_1970() {
	    return Math.floor((new Date()).getTime() / 1000);
	}
	exports.get_now_sec_1970 = get_now_sec_1970;
	function create_game_rec(data, p1, p2) {
	    if (!data.doc)
	        data.doc = { gameIdx: 0, rec: {} };
	    var doc = data.doc;
	    if (!doc.rec)
	        doc.rec = {};
	    doc.gameIdx++;
	    var now_sec = get_now_sec_1970();
	    doc.rec[doc.gameIdx] = {
	        start: now_sec,
	        end: now_sec,
	        player: [p1, p2],
	        playerId: [p1, p2],
	        score: [0, 0]
	    };
	    return data;
	}
	exports.create_game_rec = create_game_rec;
	function get_rank5_player(data, playerMap) {
	    var gameIdxArr = [9, 10, 11, 12];
	    var loserArr = [];
	    for (var gameIdx in data.doc.rec) {
	        var rec = data.doc.rec[gameIdx];
	        if (gameIdxArr.indexOf(Number(gameIdx)) > -1) {
	            var loser = void 0;
	            if (rec.score[0] > rec.score[1]) {
	                loser = JsFunc_1.clone(playerMap[rec.player[1]]);
	            }
	            else {
	                loser = JsFunc_1.clone(playerMap[rec.player[0]]);
	            }
	            loser.score = 0;
	            if (this.gameConf)
	                loser.avatar = this.gameConf.avatarUrlBase + loser.playerId + '.png';
	            loserArr.push(loser);
	        }
	    }
	    return loserArr;
	}
	exports.get_rank5_player = get_rank5_player;


/***/ }),
/* 36 */
/***/ (function(module, exports) {

	module.exports = "<table class=\"table is-striped is-bordered\" style=\"font-size:30px;\">\r\n    <thead>\r\n    </thead>\r\n    <tbody>\r\n        <tr>\r\n            <th>\r\n                <div hidden>{{updateTime}}</div>\r\n                秒:<input class=\"input\" v-model=\"timeInSec\" type=\"text\" style=\"width: 100px;\">\r\n                <a @click=\"onSetTimerEvent('setting',timeInSec)\">设置</a>\r\n                <a @click=\"onSetTimerEvent('reset')\">reset</a>\r\n            </th>\r\n            <th>\r\n                <a id=\"vudp\" @click=\"onVueUpdate\"></a>\r\n                <button class=\"button\" @click=\"onSetTeamScore(true,1)\">+1</button>\r\n                <button class=\"button\" @click=\"onSetTeamScore(true,-1)\">-1</button>\r\n            </th>\r\n            <th>L player</th>\r\n            <th>score</th>\r\n            <th>R player</th>\r\n            <th>\r\n                <button class=\"button\" @click=\"onSetTeamScore(false,1)\">+1</button>\r\n                <button class=\"button\" @click=\"onSetTeamScore(false,-1)\">-1</button>\r\n                <button class=\"button\" @click=\"onResetGame()\">resetGame</button>\r\n\r\n            </th>\r\n        </tr>\r\n        <tr>\r\n            <th style=\"font-size:25px;\">\r\n                <a @click=\"onSetTimerEvent('start')\">开始  </a><a @click=\"onSetTimerEvent('pause')\">暂停  </a>\r\n            </th>\r\n            <th>\r\n                <button class=\"button\" @click=\"onSetScore(true,1)\">+1</button>\r\n                <button class=\"button\" @click=\"onSetScore(true,-1)\">-1</button>\r\n            </th>\r\n            <th>\r\n                {{baseGame.lName}}\r\n            </th>\r\n            <th style=\"font-size:40px;\">\r\n                <span id=\"lScore\">{{baseGame.lScore}}</span> - <span id=\"rScore\">{{baseGame.rScore}}</span>\r\n            </th>\r\n            <th>\r\n                {{baseGame.rName}}\r\n            </th>\r\n            <th>\r\n                <button class=\"button\" @click=\"onSetScore(false,1)\">+1</button>\r\n                <button class=\"button\" @click=\"onSetScore(false,-1)\">-1</button>\r\n            </th>\r\n        </tr>\r\n        <tr>\r\n            <th style=\"font-size:25px;\">foul\r\n                <a @click=\"onResetFoul\"> 重置</a>\r\n            </th>\r\n            <th>\r\n                <button class=\"button\" @click=\"onSetFoul(true,1)\">+1</button>\r\n                <button class=\"button\" @click=\"onSetFoul(true,-1)\">-1</button>\r\n            </th>\r\n            <th>\r\n                -\r\n            </th>\r\n            <th>\r\n                <span id=\"lFoul\">{{baseGame.lFoul}}</span> - <span id=\"rFoul\">{{baseGame.rFoul}}</span>\r\n            </th>\r\n            <th>\r\n                -\r\n            </th>\r\n            <th>\r\n                <button class=\"button\" @click=\"onSetFoul(false,1)\">+1</button>\r\n                <button class=\"button\" @click=\"onSetFoul(false,-1)\">-1</button>\r\n            </th>\r\n        </tr>\r\n    </tbody>\r\n</table>";

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	var EventDispatcher_1 = __webpack_require__(38);
	var HupuAPI_1 = __webpack_require__(24);
	var JsFunc_1 = __webpack_require__(21);
	var dbUrl;
	var getDoc = function (callback) {
	    if (!dbUrl)
	        alert('no dbUrl');
	    $.get(dbUrl, function (res) {
	        if (res.length)
	            callback(res[0]);
	        else
	            callback(null);
	    });
	};
	exports.syncDoc = function (cb, isSave) {
	    if (isSave === void 0) { isSave = false; }
	    getDoc(function (data) {
	        cb(data);
	        if (isSave)
	            HupuAPI_1.update_event_data(data, function (res) {
	                console.log(res);
	            });
	    });
	};
	var WWGame = (function (_super) {
	    __extends(WWGame, _super);
	    function WWGame() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    WWGame.prototype.loadConf = function (data) {
	        dbUrl = data.dbUrl;
	        console.log('loadConf', data);
	        this.playerMap = data.playerMap;
	        this.playerMap_data = JsFunc_1.clone(this.playerMap);
	        this.teamArr = [
	            { 'idx': 1, playerArr: data.team_player_L },
	            { 'idx': 2, playerArr: data.team_player_R },
	        ];
	        this.data = data;
	    };
	    WWGame.prototype.bloodBuilder = function (doc, teamVsIdx) {
	        var bloodMap = doc.bloodMap[teamVsIdx];
	        var curBloodMap = {};
	        var bloodMapForShow = {};
	        for (var player in bloodMap) {
	            curBloodMap[player] = {
	                blood: bloodMap[player],
	                score: 0,
	                k: 0,
	                d: 0,
	                a: 0,
	                hurtMap: {}
	            };
	            bloodMapForShow[player] = { blood: bloodMap[player] };
	        }
	        if (bloodMap) {
	            var gameRecArr = [];
	            var _ = function (lPlayer, rPlayer) {
	                if (curBloodMap[lPlayer].blood == 0) {
	                    curBloodMap[lPlayer].d++;
	                    curBloodMap[rPlayer].k++;
	                    for (var assistPlayer in curBloodMap[lPlayer].hurtMap) {
	                        if (rPlayer != assistPlayer)
	                            curBloodMap[assistPlayer].a++;
	                    }
	                }
	            };
	            for (var gameIdx in doc.rec) {
	                if (doc.rec.hasOwnProperty(gameIdx)) {
	                    var gameRec = doc.rec[gameIdx];
	                    if (gameRec.teamVsIdx == teamVsIdx) {
	                        gameRecArr.push(gameRec);
	                        var lPlayer = gameRec.player[0];
	                        var rPlayer = gameRec.player[1];
	                        var lScore = gameRec.score[0];
	                        var rScore = gameRec.score[1];
	                        var lBkda = curBloodMap[lPlayer];
	                        var rBkda = curBloodMap[rPlayer];
	                        curBloodMap[lPlayer].blood -= rScore;
	                        curBloodMap[rPlayer].blood -= lScore;
	                        curBloodMap[lPlayer].score += lScore;
	                        curBloodMap[rPlayer].score += rScore;
	                        lBkda.hurtMap[rPlayer] = rScore;
	                        rBkda.hurtMap[lPlayer] = lScore;
	                        _(lPlayer, rPlayer);
	                        _(rPlayer, lPlayer);
	                    }
	                }
	            }
	            for (var player in curBloodMap) {
	                this.playerMap[player].initBlood = bloodMapForShow[player].blood;
	                this.playerMap[player].blood = curBloodMap[player].blood;
	                this.playerMap[player].score = curBloodMap[player].score;
	                this.playerMap[player].k = curBloodMap[player].k;
	                this.playerMap[player].d = curBloodMap[player].d;
	                this.playerMap[player].a = curBloodMap[player].a;
	            }
	            console.log("teamVsIdx ", teamVsIdx, "bloodMap", curBloodMap);
	        }
	        return bloodMapForShow;
	    };
	    WWGame.prototype.getTeamByIdx = function (idx, isManual) {
	        if (isManual === void 0) { isManual = false; }
	        var a = [];
	        for (var _i = 0, _a = this.teamArr; _i < _a.length; _i++) {
	            var t = _a[_i];
	            if (t.idx == idx) {
	                for (var _b = 0, _c = t.playerArr; _b < _c.length; _b++) {
	                    var pid = _c[_b];
	                    var p = this.playerMap[pid.player_id];
	                    p.blood = 0;
	                    p.initBlood = 0;
	                    a.push(this.playerMap[pid.player_id]);
	                }
	            }
	        }
	        return a;
	    };
	    WWGame.prototype.deleteGameRec = function (gameIdx) {
	        var _this = this;
	        exports.syncDoc(function (data) {
	            var doc = data.doc;
	            delete doc.rec[gameIdx];
	            _this.emit(WWGame.InitDocView, doc);
	        }, true);
	    };
	    WWGame.prototype.setTimeOut = function (data1) {
	        exports.syncDoc(function (data) {
	            var doc = data.doc;
	            doc['timeOut'] = data1;
	        }, true);
	    };
	    WWGame.prototype.clearGameRec = function (doc, playerMap) {
	        var _this = this;
	        var _ = function (_doc) {
	            _doc.rec = {};
	            _doc.teamVsRec = {};
	            _doc.gameIdx = 0;
	            _doc.teamVsIdx = 0;
	            _this.emit(WWGame.InitDocView, _doc);
	        };
	        if (doc) {
	            _(doc);
	        }
	        else {
	            exports.syncDoc(function (data) {
	                if (!data.doc)
	                    data.doc = {};
	                data.playerMap = playerMap;
	                _(data.doc);
	                console.log(doc);
	            }, true);
	        }
	    };
	    WWGame.prototype.setScore = function (gameIdx, scoreArr) {
	        var _this = this;
	        exports.syncDoc(function (data) {
	            var doc = data.doc;
	            var game = doc.rec[gameIdx];
	            if (game)
	                game.score = scoreArr;
	            _this.emit(WWGame.InitDocView, doc);
	        }, true);
	    };
	    WWGame.prototype.setVs = function (gameIdx, playerArr) {
	        var _this = this;
	        exports.syncDoc(function (data) {
	            var doc = data.doc;
	            var game = doc.rec[gameIdx];
	            if (game)
	                game.player = playerArr;
	            _this.emit(WWGame.InitDocView, doc);
	        }, true);
	    };
	    WWGame.prototype.setTeamVsIdx = function (gameIdx, teamVsIdx) {
	        var _this = this;
	        exports.syncDoc(function (data) {
	            var doc = data.doc;
	            var game = doc.rec[gameIdx];
	            if (game)
	                game.teamVsIdx = teamVsIdx;
	            _this.emit(WWGame.InitDocView, doc);
	        }, true);
	    };
	    WWGame.prototype.setTeamBlood = function (teamVsIdx, playerMapBlood) {
	        var _this = this;
	        exports.syncDoc(function (data) {
	            var doc = data.doc;
	            if (!doc.bloodMap)
	                doc.bloodMap = {};
	            doc.bloodMap[teamVsIdx] = playerMapBlood;
	            doc.teamVsIdx = teamVsIdx;
	            _this.emit(WWGame.InitDocView, doc);
	        }, true);
	    };
	    WWGame.prototype.setTeamScore = function (lScore, rScore) {
	        var _this = this;
	        exports.syncDoc(function (data) {
	            var doc = data.doc;
	            doc.teamScoreArr = [lScore, rScore];
	            _this.emit(WWGame.InitDocView, doc);
	        }, true);
	    };
	    WWGame.prototype.getBloodMap = function (teamVsIdx, cb) {
	        var _this = this;
	        exports.syncDoc(function (data) {
	            var doc = data.doc;
	            var bloodMap = _this.bloodBuilder(doc, teamVsIdx);
	            cb(bloodMap);
	        });
	    };
	    WWGame.prototype.addGame = function (playerArr, teamVsIdx) {
	        var _this = this;
	        exports.syncDoc(function (data) {
	            var doc = data.doc;
	            if (!doc.rec) {
	                _this.clearGameRec(doc);
	            }
	            doc.gameIdx++;
	            doc.teamVsIdx = teamVsIdx;
	            doc.rec[doc.gameIdx] = {
	                gameIdx: doc.gameIdx,
	                teamVsIdx: teamVsIdx,
	                player: playerArr,
	                score: [0, 0],
	                foul: [0, 0]
	            };
	            _this.emit(WWGame.InitDocView, doc);
	        }, true);
	    };
	    return WWGame;
	}(EventDispatcher_1.EventDispatcher));
	exports.WWGame = WWGame;


/***/ }),
/* 38 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
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


/***/ }),
/* 39 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"container\">\r\n\r\n    <input type=\"file\" id=\"file\" accept=\"*.xlsx\" hidden>\r\n    <br>\r\n\r\n    <a href=\"/panel/#/ol/ob/0?panel=score&s4=1&world=1\">world panel</a>\r\n    <a href=\"/panel/#/ol/ob/0?panel=score&s4=1&world=1&bblood=1\">team blood</a>\r\n\r\n    <button class=\"button is-primary\" @click=\"onGet8090EventJson('0602')\">获取配置</button>\r\n    <button class=\"button is-primary\" id=\"reload\" @click=\"onReload\">reload</button> 比分面板延时(秒)\r\n    <input class=\"input\" v-model=\"delay\" type=\"text\" style=\"width: 100px;\">\r\n    <button class=\"button is-primary\" @click=\"onSetDelay(delay)\">设置</button>\r\n    <br>\r\n    <br>\r\n\r\n    <div class=\"control\">\r\n        vs player <input class=\"input\" v-model=\"vsPlayer\" type=\"text\" style=\"width: 100px;\">\r\n        <button class=\"button is-primary\" @click=\"onEmitGameInfo\">初始比赛</button>\r\n        <button class=\"button is-primary\" @click=\"onAddGame\">创建REC</button>\r\n        <button class=\"button is-primary\" @click=\"onCommitGame(gameIdx)\">提交比赛</button> teamVsIdx:\r\n        <input class=\"input\" v-model=\"teamVsIdx\" type=\"text\" style=\"width: 60px;\">\r\n        <a class=\"button is-warnning\" @click=\"onSetBlood(teamVsIdx)\">设置初始血量</a>\r\n        <input class=\"input\" v-model=\"teamScore\" type=\"text\" style=\"width: 60px;\">\r\n        <a class=\"button is-warnning\" @click=\"onSetTeamScore(teamScore)\">设置团队比分</a>\r\n        <a class=\"button is-warnning\" @click=\"onSetTimeOut(teamScore)\">设置团队暂停</a>\r\n        <!-- <a class=\"button\" @click=\"onShowKDA(true)\">显示kda</a>\r\n        <a class=\"button\" @click=\"onShowKDA(false)\">隐藏kda</a> -->\r\n        <hr> 比分面板\r\n        <a class=\"button\" @click=\"onShowPanel(true)\">显示</a>\r\n        <a class=\"button\" @click=\"onShowPanel(false)\">隐藏</a> title\r\n        <a class=\"button\" @click=\"onShowTitle(true)\">显示</a>\r\n        <a class=\"button\" @click=\"onShowTitle(false)\">隐藏</a>\r\n        <input class=\"input\" v-model=\"playerDots\" type=\"text\" style=\"width: 60px;\">\r\n        <a class=\"button is-warnning\" @click=\"onSetPlayerDots(playerDots,false)\">设置团队剩余5 3</a>\r\n        <a class=\"button is-warnning\" @click=\"onSetPlayerDots(playerDots,true)\">on 打开状态</a>\r\n    </div>\r\n\r\n    <!-- Main container -->\r\n    <div class=\"level\">\r\n        <!-- Left side -->\r\n        <div class=\"level-left\">\r\n            <div class=\"columns\">\r\n                <div class=\"column\" v-for=\"(item,index) in blueArr\" :key=\"item\">\r\n                    <a class=\"button is-info\" @click=\"pickPlayer(true,item.playerId)\">{{item.name}} [{{item.blood}}]</a>\r\n                    <br>\r\n                    <input class=\"input blood\" :id=\"'blood'+item.playerId\" type=\"text\" style=\"width: 50px;\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <!-- Right side -->\r\n        <div class=\"level-right\">\r\n            <div class=\"columns\">\r\n                <div class=\"column\" v-for=\"(item,index) in redArr\" :key=\"item\">\r\n                    <a class=\"button is-danger\" @click=\"pickPlayer(false,item.playerId)\">{{item.name}} [{{item.blood}}]</a>\r\n                    <br>\r\n                    <input class=\"input blood\" :id=\"'blood'+item.playerId\" type=\"text\" style=\"width: 50px;\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div id='table' class=\"table\"></div>\r\n    <BaseGame/>\r\n\r\n    <!-- 手动血量 -->\r\n    <div class=\"level\">\r\n        <div class=\"level-left\">\r\n            <table class=\"table is-striped is-bordered\" style=\"font-size:25px;\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>name</th>\r\n                        <th>初始血量</th>\r\n                        <th>血量\r\n                            <a class=\"button is-info\" @click=\"onManualBlood(0)\">更新</a>\r\n                        </th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr v-for=\"(item,index) in blueArr_2\" :key=\"item\">\r\n                        <th>{{item.name}}</th>\r\n                        <th>\r\n                            <input type=\"text\" v-model=\"item.initBlood\" style=\"width: 100px;\">\r\n                        </th>\r\n                        <th>\r\n                            <input type=\"text\" v-model=\"item.blood\" style=\"width: 50px;\">\r\n                            <a class=\"button is-info\" v-if='vsPlayerArr[0]==item.playerId' @click=\"onManualBlood(1,item)\">+1</a>\r\n                            <a class=\"button is-info\" v-if='vsPlayerArr[0]==item.playerId' @click=\"onManualBlood(-1,item)\">-1</a>\r\n                        </th>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <div class=\"level-right\">\r\n            <table class=\"table is-striped is-bordered\" style=\"font-size:25px;\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>name</th>\r\n                        <th>初始血量</th>\r\n                        <th>血量\r\n                            <a class=\"button is-danger\" @click=\"onManualBlood(0)\">更新</a>\r\n                        </th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr v-for=\"(item,index) in redArr_2\" :key=\"item\">\r\n                        <th>{{item.name}}</th>\r\n                        <th>\r\n                            <input type=\"text\" v-model=\"item.initBlood\" style=\"width: 100px;\">\r\n                        </th>\r\n                        <th>\r\n                            <input type=\"text\" v-model=\"item.blood\" style=\"width: 100px;\">\r\n                            <a class=\"button is-danger\" v-if='vsPlayerArr[1]==item.playerId' @click=\"onManualBlood(1,item)\">+1</a>\r\n                            <a class=\"button is-danger\" v-if='vsPlayerArr[1]==item.playerId' @click=\"onManualBlood(-1,item)\">-1</a>\r\n                        </th>\r\n\r\n                    </tr>\r\n                </tbody>\r\n\r\n            </table>\r\n        </div>\r\n    </div>\r\n    <div style=\"overflow-y: scroll;height: 400px;\">\r\n        <table class=\"table is-striped is-bordered\">\r\n            <thead>\r\n                <tr>\r\n                    <th><abbr title=\"Position\">#gameIdx</abbr></th>\r\n                    <th><abbr>#teamVsIdx</abbr></th>\r\n                    <th>L player</th>\r\n                    <th>score</th>\r\n                    <th>R player</th>\r\n                    <th>action</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr v-for=\"(rec,index) in recArr\" :key=\"index\" v-bind:class=\"[rec.gameIdx==gameView.gameIdx?'is-selected':'']\">\r\n                    <th><a @click=\"setGameIdx(rec.gameIdx)\">#####{{rec.gameIdx}}</a></th>\r\n                    <td> {{rec.teamVsIdx}} </td>\r\n                    <td> {{rec.name[0]}} </td>\r\n                    <td> {{rec.score[0]}} - {{rec.score[1]}} </td>\r\n                    <td> {{rec.name[1]}} </td>\r\n                    <td>\r\n                        <div class=\"control\" v-if=\"rec.gameIdx==gameView.gameIdx\">\r\n                            <input class=\"input\" :id=\"'scoreInput'+rec.gameIdx\" type=\"text\" style=\"width: 80px;\">\r\n                            <button class=\"button btn-setScore\" @click=\"onSetScore(rec.gameIdx)\">修改(提交)比分</button>\r\n                            <button class=\"button\" @click=\"onSetVS(rec.gameIdx,vsPlayer)\">修改对阵↑</button>\r\n                            <button class=\"button\" @click=\"onSetTeamVsIdx(rec.gameIdx)\">修改TeamVsIdx</button>\r\n                            <button class=\"button is-danger\" @click=\"onDeleteGameRec(rec.gameIdx)\">删除</button>\r\n                        </div>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    <!-- <div class=\"level\">\r\n        <div class=\"level-left\">\r\n            <table class=\"table is-striped is-bordered\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>name</th>\r\n                        <th>score</th>\r\n                        <th>kill</th>\r\n                        <th>death</th>\r\n                        <th>assist</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr v-for=\"(item,index) in blueArr\" :key=\"item\">\r\n                        <th>{{item.name}}</th>\r\n                        <th>{{item.score}}</th>\r\n                        <th>{{item.k}}</th>\r\n                        <th>{{item.d}}</th>\r\n                        <th>{{item.a}}</th>\r\n                    </tr>\r\n                </tbody>\r\n\r\n            </table>\r\n        </div>\r\n        <div class=\"level-right\">\r\n            <table class=\"table is-striped is-bordered\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>name</th>\r\n                        <th>score</th>\r\n                        <th>kill</th>\r\n                        <th>death</th>\r\n                        <th>assist</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr v-for=\"(item,index) in redArr\" :key=\"item\">\r\n                        <th>{{item.name}}</th>\r\n                        <th>{{item.score}}</th>\r\n                        <th>{{item.k}}</th>\r\n                        <th>{{item.d}}</th>\r\n                        <th>{{item.a}}</th>\r\n                    </tr>\r\n                </tbody>\r\n\r\n            </table>\r\n        </div>\r\n    </div> -->\r\n\r\n    <hr>\r\n    <button class=\"button is-primary\" @click=\"onDeleteDoc\">delete doc</button> {{updateTime}}\r\n</div>";

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	var Command_1 = __webpack_require__(28);
	var const_1 = __webpack_require__(27);
	var HupuAPI_1 = __webpack_require__(24);
	var JsFunc_1 = __webpack_require__(21);
	var VueBase_1 = __webpack_require__(22);
	var bracketRec_1 = __webpack_require__(35);
	var ChampionPoster_1 = __webpack_require__(41);
	var Champion8090_1 = __webpack_require__(42);
	var confFile = null;
	var reader;
	var filesInput;
	var dbUrl;
	var getDoc = function (callback) {
	    if (!dbUrl) {
	        alert('no dbUrl');
	    }
	    $.get(dbUrl, function (res) {
	        if (res.length)
	            callback(res[0]);
	        else
	            callback(null);
	    });
	};
	var syncDoc = function (cb, isSave) {
	    if (isSave === void 0) { isSave = false; }
	    getDoc(function (data) {
	        cb(data);
	        if (isSave)
	            HupuAPI_1.update_event_data(data, function (res) {
	                console.log(res);
	            });
	    });
	};
	var opReq = function (cmdId, param) {
	    param._ = null;
	    $.ajax({
	        url: "/panel/" + const_1.PanelId.onlinePanel + "/" + cmdId,
	        type: 'post',
	        data: JSON.stringify(param),
	        headers: { "Content-Type": "application/json" },
	        dataType: 'json'
	    });
	};
	var _exData;
	var playerCount = 4;
	var _ScoreRankAdmin = (function (_super) {
	    __extends(_ScoreRankAdmin, _super);
	    function _ScoreRankAdmin() {
	        var _this = _super.call(this) || this;
	        _this.template = __webpack_require__(43);
	        _this.actTab = VueBase_1.VueBase.PROP;
	        _this.selected = VueBase_1.VueBase.PROP;
	        _this.options = VueBase_1.VueBase.PROP;
	        _this.gameConf = VueBase_1.VueBase.PROP;
	        _this.vsPlayer = VueBase_1.VueBase.PROP;
	        _this.vsPlayerArr = VueBase_1.VueBase.PROP;
	        _this.redArr = VueBase_1.VueBase.PROP;
	        _this.blueArr = VueBase_1.VueBase.PROP;
	        _this.lPlayer = VueBase_1.VueBase.PROP;
	        _this.rPlayer = VueBase_1.VueBase.PROP;
	        _this.lastScoreArr = VueBase_1.VueBase.PROP;
	        _this.selGameIdx = VueBase_1.VueBase.PROP;
	        _this.recArr = VueBase_1.VueBase.PROP;
	        _this.playerMap = VueBase_1.VueBase.PROP;
	        _this.winMap = VueBase_1.VueBase.PROP;
	        _this.totalScoreMap = VueBase_1.VueBase.PROP;
	        _this.p1WinMap = VueBase_1.VueBase.PROP;
	        _this.bracketRec = VueBase_1.VueBase.PROP;
	        _this.bracketRec1 = VueBase_1.VueBase.PROP;
	        _this.bracketRec2 = VueBase_1.VueBase.PROP;
	        _this.bracketRec3 = VueBase_1.VueBase.PROP;
	        _this.bracketRecFinal = VueBase_1.VueBase.PROP;
	        _this.bracketRec16 = VueBase_1.VueBase.PROP;
	        _this.rank5Player = VueBase_1.VueBase.PROP;
	        _this.rank5PlayerArr = VueBase_1.VueBase.PROP;
	        _this.rank16Arr = VueBase_1.VueBase.PROP;
	        _this.game_id_input = VueBase_1.VueBase.PROP;
	        _this.methods = {
	            tab: function (s, bracketRecIdx) {
	                this.actTab = s;
	                if (bracketRecIdx == 1)
	                    this.bracketRec = this.bracketRec1;
	                if (bracketRecIdx == 2)
	                    this.bracketRec = this.bracketRec2;
	                if (bracketRecIdx == 3)
	                    this.bracketRec = this.bracketRec3;
	                if (bracketRecIdx == 4)
	                    this.bracketRec = this.bracketRecFinal;
	            },
	            onPostGame: function (gameIdx) {
	                for (var _i = 0, _a = this.recArr; _i < _a.length; _i++) {
	                    var rec = _a[_i];
	                    if (Number(rec.gameIdx) == Number(gameIdx)) {
	                        var cp = this.cp;
	                        cp.postRec(rec);
	                        break;
	                    }
	                }
	            },
	            onSendRank5Winner: function (player_id) {
	                var cp = this.cp;
	                cp.post_rank5(player_id, function (res) {
	                    console.log(res);
	                });
	            },
	            onGetPlayerList: function (gameId) {
	                var _this = this;
	                if (gameId == 8090) {
	                    dbUrl = 'http://rtmp.icassi.us:8090/event?idx=1';
	                    var cp8090 = this.cp_8090;
	                    cp8090.get_player_list(function (playerMap) {
	                        _this.createOption({ dbUrl: dbUrl, playerMap: playerMap }, function (_) { });
	                    });
	                }
	                else {
	                    dbUrl = 'http://rtmp.icassi.us:8090/event?idx=0';
	                    var cp = this.cp;
	                    cp.updatePlayerList(gameId, function (playerMap) {
	                        _this.createOption({ dbUrl: dbUrl, playerMap: playerMap }, function (_) { });
	                    });
	                }
	            },
	            onEmitBracket: function (tab) {
	                var bracketPage = 1;
	                if (tab == 'tab11')
	                    bracketPage = 1;
	                if (tab == 'tab12')
	                    bracketPage = 2;
	                if (tab == 'tab13')
	                    bracketPage = 3;
	                if (tab == 'tab14')
	                    bracketPage = 4;
	                opReq("" + Command_1.CommandId.cs_bracket, {
	                    bracketPage: bracketPage,
	                    playerMap: this.playerMap,
	                    bracketRec1: this.bracketRec1,
	                    bracketRec2: this.bracketRec2,
	                    bracketRec3: this.bracketRec3,
	                    bracketRecFinal: this.bracketRecFinal,
	                    bracketRec16: this.bracketRec16
	                });
	            },
	            onReloadShow: function () {
	                var _this = this;
	                this.reloadFile(null, {
	                    callback: function (_) {
	                        _this.onShowScoreRank(true);
	                    }
	                });
	            },
	            onSelectGame: function () {
	                console.log('on init game', this.selected);
	                var playerMap = this.gameConf.playerMap;
	                var recArr = this.gameConf.rec;
	                for (var i = 0; i < recArr.length; i++) {
	                    var rec = recArr[i];
	                    if (rec.idx == this.selected) {
	                        var p1 = rec.player[0];
	                        var p2 = rec.player[1];
	                        this.vsPlayer = p1 + ' ' + p2;
	                        return;
	                    }
	                }
	            },
	            onChangePlayer: function (isBlue, playerId) {
	                isBlue ? this.vsPlayerArr[0] = playerId : this.vsPlayerArr[1] = playerId;
	                this.vsPlayer = this.vsPlayerArr.join(" ");
	            },
	            onAddScore: function (isLeft, dtScore) {
	                this.onShowScoreRank(true, dtScore, isLeft);
	                opReq("" + Command_1.CommandId.cs_updateScore, { dtScore: dtScore, isLeft: isLeft });
	            },
	            onSetGameEnd: function (gameIdx) {
	                var _this = this;
	                syncDoc(function (data) {
	                    var doc = data.doc;
	                    var game = doc.rec[gameIdx];
	                    if (game)
	                        game.end = bracketRec_1.get_now_sec_1970();
	                    _this.initGameRecTable(_this.playerMap, data);
	                }, true);
	            },
	            onSetGroup: function (gameIdx) {
	                var _this = this;
	                syncDoc(function (data) {
	                    var doc = data.doc;
	                    if (!doc.rec[gameIdx]['isGroup'])
	                        doc.rec[gameIdx]['isGroup'] = true;
	                    else
	                        doc.rec[gameIdx]['isGroup'] = false;
	                    _this.initGameRecTable(_this.playerMap, data);
	                }, true);
	            },
	            onSetScore: function (gameIdx, inputId) {
	                var _this = this;
	                syncDoc(function (data) {
	                    var doc = data.doc;
	                    var scoreStr;
	                    if (!inputId)
	                        scoreStr = $("#scoreInput" + gameIdx).val();
	                    else
	                        scoreStr = $(inputId).val();
	                    console.log(inputId, scoreStr);
	                    var a = scoreStr.split(" ");
	                    if (a.length == 2) {
	                        var rec = doc.rec[gameIdx];
	                        rec.score = [Number(a[0]), Number(a[1])];
	                        _this.initGameRecTable(_this.playerMap, data);
	                    }
	                }, true);
	            },
	            onDeleteGameRec: function (gameIdx) {
	                var _this = this;
	                syncDoc(function (data) {
	                    var doc = data.doc;
	                    delete doc.rec[gameIdx];
	                    _this.initGameRecTable(_this.playerMap, data);
	                }, true);
	            },
	            setGameIdx: function (gameIdx, playerIdArr) {
	                this.selGameIdx = gameIdx;
	            },
	            selPlayerOnRec: function (playerIdArr) {
	                this.vsPlayerArr[1] = playerIdArr[1];
	                this.vsPlayerArr[0] = playerIdArr[0];
	                this.vsPlayer = this.vsPlayerArr.join(" ");
	            },
	            onShowWinMap: function () {
	                var p1 = this.vsPlayerArr[0];
	                this.p1WinMap = this.winMap[p1];
	            },
	            onCreateGame: function () {
	                var _this = this;
	                console.log('onCreateGame', this.lPlayer, this.rPlayer);
	                var a = this.vsPlayer.split(' ');
	                var p1 = a[0];
	                var p2 = a[1];
	                if (p1 && p2) {
	                    syncDoc(function (data) {
	                        bracketRec_1.create_game_rec(data, p1, p2);
	                        console.log('create game', data);
	                        _this.initGameRecTable(_this.playerMap, data);
	                    }, true);
	                }
	            },
	            onSetVsPlayer: function (gameIdx, vsplayer) {
	                var _this = this;
	                syncDoc(function (data) {
	                    var doc = data.doc;
	                    var game = doc.rec[gameIdx];
	                    console.log('onSetVsPlayer', vsplayer, game);
	                    var a = vsplayer.split(' ');
	                    if (game) {
	                        game.player = a;
	                        game.playerId = a;
	                        game.name = [
	                            _this.playerMap[a[0]].name,
	                            _this.playerMap[a[1]].name
	                        ];
	                    }
	                    _this.initGameRecTable(_this.playerMap, { _id: data._id, doc: doc });
	                }, true);
	            },
	            onInitDoc: function () {
	                syncDoc(function (data) {
	                    data.doc = { gameIdx: 0, rec: {} };
	                }, true);
	            },
	            onInitGame: function () {
	                console.log('init game');
	                var playerMap = this.gameConf.playerMap;
	                var a = this.vsPlayer.split(' ');
	                var p1 = a[0];
	                var p2 = a[1];
	                p1 = playerMap[p1];
	                p2 = playerMap[p2];
	                if (!p1.avatar)
	                    p1.avatar = this.gameConf.avatarUrlBase + p1.playerId + '.png';
	                if (!p2.avatar)
	                    p2.avatar = this.gameConf.avatarUrlBase + p2.playerId + '.png';
	                this.lPlayer = p1;
	                this.rPlayer = p2;
	                opReq(Command_1.CommandId.cs_setPlayer, {
	                    leftPlayer: p1, rightPlayer: p2,
	                    isRestFoul: true,
	                    foulToHint: this.gameConf.foulToHint,
	                    isRestTeamScore: true
	                });
	                HupuAPI_1.update_base_score({
	                    player_L: p1.name,
	                    avatar_L: p1.avatar,
	                    title_L: p1.title,
	                    height_L: p1.height + ' CM',
	                    weight_L: p1.weight + ' KG',
	                    player_R: p2.name,
	                    avatar_R: p2.avatar,
	                    title_R: p2.title,
	                    height_R: p2.height + ' CM',
	                    weight_R: p2.weight + ' KG',
	                }, function (_) {
	                    console.log(_);
	                });
	            },
	            onSetPlayerDeactive: function () {
	                this.vsPlayer = '';
	                this.onShowScoreRank(true);
	            },
	            onGetRank5Player: function () {
	                var _this = this;
	                syncDoc(function (data) {
	                    _this.rank5PlayerArr = bracketRec_1.get_rank5_player(data, _this.playerMap);
	                    opReq(Command_1.CommandId.cs_showScoreRank, {
	                        visible: true,
	                        scoreArr: _this.rank5PlayerArr
	                    });
	                    console.log('loser arr', _this.rank5PlayerArr);
	                });
	            },
	            onUpdateRank5Score: function (playerId, score) {
	                opReq(Command_1.CommandId.cs_showScoreRank, {
	                    visible: true,
	                    updatePlayerId: playerId,
	                    updatePlayerScore: score,
	                    scoreArr: this.rank5PlayerArr
	                });
	            },
	            onShowScoreRank: function (visible) {
	                var scoreArr = [];
	                var isInitScoreArr = false;
	                var scoreFx = 0;
	                if (!this.lastScoreArr) {
	                    this.lastScoreArr = [0, 0, 0, 0, 0];
	                    isInitScoreArr = true;
	                }
	                var a = this.vsPlayer.split(' ');
	                var p1 = a[0];
	                var p2 = a[1];
	                for (var i = 0; i < this.gameConf.scoreRank.length; i++) {
	                    var a_1 = this.gameConf.scoreRank[i][0].split('_');
	                    if (this.gameConf.scoreRank[i][1] > -1) {
	                        var pn = a_1[0];
	                        var player = this.gameConf.playerMap[pn];
	                        var scoreFxItem = {
	                            score: this.gameConf.scoreRank[i][1],
	                            playerId: pn,
	                            name: player.name,
	                            isSmall: true,
	                            scoreFx: 0,
	                            avatar: this.gameConf.avatarUrlBase + player.playerId + '.png'
	                        };
	                        if (isInitScoreArr)
	                            this.lastScoreArr[i] = scoreFxItem.score;
	                        scoreFx = scoreFxItem.score - this.lastScoreArr[i];
	                        this.lastScoreArr[i] = scoreFxItem.score;
	                        if (pn == p1) {
	                            scoreFxItem.scoreFx = scoreFx;
	                            scoreFxItem.isSmall = false;
	                            opReq("" + Command_1.CommandId.cs_updateScore, { score: scoreFxItem.score, isLeft: true });
	                        }
	                        else if (pn == p2) {
	                            scoreFxItem.scoreFx = scoreFx;
	                            scoreFxItem.isSmall = false;
	                            opReq("" + Command_1.CommandId.cs_updateScore, { score: scoreFxItem.score, isLeft: false });
	                        }
	                        scoreArr.push(scoreFxItem);
	                    }
	                }
	                scoreArr = scoreArr.sort(JsFunc_1.descendingProp('score'));
	                this.rank5PlayerArr = scoreArr;
	                opReq(Command_1.CommandId.cs_showScoreRank, {
	                    visible: visible,
	                    scoreArr: scoreArr
	                });
	            },
	            onFile: function () {
	                if (!confFile) {
	                    if (!filesInput)
	                        filesInput = document.getElementById("files");
	                    filesInput.addEventListener("change", function (evt) {
	                        confFile = evt.target.files[0];
	                        document.getElementById("reloadFile").click();
	                    }, false);
	                }
	                document.getElementById("files").click();
	            },
	            reloadFile: function (e, exData) {
	                var _this = this;
	                var _ = function (d) {
	                    return d.getMinutes() + 'm' + d.getSeconds() + 's';
	                };
	                console.log("exData", exData);
	                _exData = exData;
	                if (!reader) {
	                    reader = new FileReader();
	                    reader.addEventListener("load", function (event) {
	                        var data = JSON.parse(event.target['result']);
	                        data._ = null;
	                        if (_exData) {
	                            for (var k in _exData) {
	                                console.log('exData', k);
	                                data[k] = _exData[k];
	                            }
	                            if (_exData.callback)
	                                _exData.callback();
	                        }
	                        _this.createOption(data, function (_) {
	                            console.log("EVENT_ON_FILE", data, _exData);
	                            opReq('cs_data', data);
	                        });
	                    });
	                }
	                reader.readAsText(confFile, "utf-8");
	            },
	        };
	        VueBase_1.VueBase.initProps(_this);
	        return _this;
	    }
	    _ScoreRankAdmin.prototype.created = function () {
	        console.log('Game admin');
	        this.blueArr = [];
	        this.redArr = [];
	        this.vsPlayerArr = [];
	        this.rank16Arr = [];
	        this.rank5PlayerArr = '';
	        this.actTab = 'tab1';
	        this.bracketRec = this.bracketRec1 = bracketRec_1.newBracketRec1();
	        this.bracketRec2 = bracketRec_1.newBracketRec2();
	        this.bracketRec3 = bracketRec_1.newBracketRec3();
	        this.bracketRecFinal = bracketRec_1.newBracketRecFinal();
	        this.cp = new ChampionPoster_1.ChampionPoster();
	        this.cp_8090 = new Champion8090_1.Champion8090();
	        this.game_id_input = 765;
	    };
	    _ScoreRankAdmin.prototype.initGameRecTable = function (playerMap, data1, callback) {
	        var _this = this;
	        var _ = function (data) {
	            if (data.doc) {
	                _this.selGameIdx = data.doc.gameIdx;
	                var ret = bracketRec_1.buildRec(data.doc, playerMap);
	                _this.bracketRec1 = ret.bracketRec1;
	                _this.bracketRec2 = ret.bracketRec2;
	                _this.bracketRec3 = ret.bracketRec3;
	                _this.bracketRecFinal = ret.bracketRecFinal;
	                _this.bracketRec16 = ret.bracketRec16;
	                _this.winMap = ret.winMap;
	                _this.totalScoreMap = ret.totalScoreMap;
	                _this.recArr = ret.recArr;
	            }
	            if (callback) {
	                callback();
	            }
	        };
	        if (data1)
	            _(data1);
	        else
	            syncDoc(function (data1) {
	                console.log('init game rec table', data1);
	                _(data1);
	            });
	    };
	    _ScoreRankAdmin.prototype.createOption = function (data, callback) {
	        var _this = this;
	        var a = [];
	        var playerMap = data.playerMap;
	        this.playerMap = playerMap;
	        if (data.rec)
	            for (var i = 0; i < data.rec.length; i++) {
	                var rec = data.rec[i];
	                console.log('player', rec.player);
	                var p1 = playerMap[rec.player[0]];
	                var p2 = playerMap[rec.player[1]];
	                if (p1 || p2) {
	                    var p1name = p1 ? p1.name : '';
	                    var p2name = p2 ? p2.name : '';
	                    var option = { text: rec.idx + p1name + ' vs ' + p2name, value: rec.idx };
	                    a.push(option);
	                }
	            }
	        this.options = a;
	        this.gameConf = data;
	        dbUrl = data.dbUrl;
	        this.blueArr = JsFunc_1.mapToArr(this.gameConf.playerMap);
	        this.redArr = JsFunc_1.mapToArr(this.gameConf.playerMap);
	        window['gameConf'] = this.gameConf;
	        console.log('create gameConf ', this.gameConf);
	        this.initGameRecTable(playerMap, null, function (_) {
	            data.totalScoreMap = _this.totalScoreMap;
	            callback();
	        });
	    };
	    _ScoreRankAdmin.prototype.route = function (recArr, playerMap) {
	        var getWinner = function (rec) {
	            if (rec.score[0] != 0 || rec.score[1] != 0) {
	                if (rec.score[0] > rec.score[1])
	                    return rec.player[0];
	                else
	                    return rec.player[1];
	            }
	            return '';
	        };
	        var fillWinner = function (fromGameId, playerId) {
	            for (var i = 0; i < recArr.length; i++) {
	                var rec = recArr[i];
	                var a = rec.idx.split('#');
	                var gameId = a[1];
	                if (gameId != '_' && gameId.length > fromGameId.length) {
	                    var pos = gameId.search(fromGameId);
	                    if (pos > -1) {
	                        var arrIdx = Math.floor(pos / Number(a[0]));
	                        console.log('fillWinner from', fromGameId, 'to', gameId, arrIdx, playerMap[playerId].name);
	                        rec.player[arrIdx] = playerId;
	                    }
	                }
	            }
	        };
	        for (var i = 0; i < recArr.length; i++) {
	            var rec = recArr[i];
	            var a = rec.idx.split('#');
	            var gameId = a[1];
	            var winner = getWinner(rec);
	            if (winner) {
	                console.log(gameId, 'winner', playerMap[winner].name);
	                fillWinner(gameId, winner);
	            }
	        }
	    };
	    return _ScoreRankAdmin;
	}(VueBase_1.VueBase));
	exports.ScoreRankAdmin = new _ScoreRankAdmin();


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var HupuAPI_1 = __webpack_require__(24);
	var JsFunc_1 = __webpack_require__(21);
	var ChampionPoster = (function () {
	    function ChampionPoster() {
	        this.game_id = 765;
	    }
	    ChampionPoster.prototype.updatePlayerList = function (gameId, callback) {
	        var _this = this;
	        this.game_id = gameId;
	        HupuAPI_1.get_champion_player(this.game_id, function (player_arr) {
	            _this.player_map = JsFunc_1.arrToMap(player_arr, 'player_id');
	            for (var k in _this.player_map) {
	                var p = _this.player_map[k];
	                p.playerId = p.player_id;
	            }
	            console.log('get player list', _this.player_map);
	            callback(_this.player_map);
	        });
	    };
	    ChampionPoster.prototype.postRec = function (rec) {
	        var player_id_arr = rec.player;
	        var score_arr = rec.score;
	        var foul_arr = [0, 0];
	        console.log('rec', rec);
	        console.log('player_id_arr', player_id_arr);
	        console.log('post rec', this.player_map);
	        var left_player = this.player_map[player_id_arr[0]];
	        var right_player = this.player_map[player_id_arr[1]];
	        var result_flag = 1;
	        if (Number(score_arr[0]) > Number(score_arr[1])) {
	            result_flag = 2;
	        }
	        else {
	            result_flag = 1;
	        }
	        var data = {
	            "action": "match",
	            "game_id": this.game_id,
	            "left_player_id": left_player.player_id,
	            "left_puid": left_player.puid,
	            "left_score": score_arr[0],
	            "right_player_id": right_player.player_id,
	            "right_puid": right_player.puid,
	            "right_score": score_arr[1],
	            "left_foul": foul_arr[0],
	            "right_foul": foul_arr[1],
	            "num": rec.gameIdx,
	            "game_start": rec.start,
	            "game_end": rec.end,
	            "status": result_flag
	        };
	        HupuAPI_1.post_champion_rec(data, function (res) {
	            console.log('postChampionRec', res);
	        });
	    };
	    ChampionPoster.prototype.post_rank5 = function (player_id, callback) {
	        HupuAPI_1.post_champion_rank5({
	            action: '4choose1',
	            game_id: this.game_id,
	            player_id: player_id
	        }, function (_) {
	            console.log(_);
	            callback();
	        });
	    };
	    return ChampionPoster;
	}());
	exports.ChampionPoster = ChampionPoster;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var HupuAPI_1 = __webpack_require__(24);
	var JsFunc_1 = __webpack_require__(21);
	var Champion8090 = (function () {
	    function Champion8090() {
	    }
	    Champion8090.prototype.get_player_list = function (callback) {
	        var _this = this;
	        HupuAPI_1.getPlayer2(function (data) {
	            _this.player_map = JsFunc_1.arrToMap(data, 'player_id');
	            for (var k in _this.player_map) {
	                var p = _this.player_map[k];
	                if (p.name)
	                    p.playerId = p.player_id;
	                else
	                    delete _this.player_map[k];
	            }
	            console.log('get player list', _this.player_map);
	            callback(_this.player_map);
	        });
	    };
	    return Champion8090;
	}());
	exports.Champion8090 = Champion8090;


/***/ }),
/* 43 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"container\">\r\n    game id: <input type=\"text\" v-model=\"game_id_input\" style=\"width: 100px;\">\r\n    <button class=\"button is-primary\" @click=\"onGetPlayerList(game_id_input)\">获取球员列表</button>\r\n    <button class=\"button is-primary\" @click=\"onGetPlayerList(8090)\">获取球员列表8090</button>\r\n    <hr>\r\n    <span class=\"select\">\r\n            <select v-model=\"selected\" @change=\"onSelectGame\">\r\n                <option v-for=\"option in options\" v-bind:value=\"option.value\">\r\n                    {{ option.text }}\r\n                </option>\r\n            </select>\r\n        </span>\r\n    <input type=\"file\" id=\"files\" accept=\"*.json\" hidden>\r\n    <input type=\"text\" v-model=\"vsPlayer\" style=\"width: 100px;\">\r\n    <button class=\"button is-primary\" @click=\"onInitGame\">初始比赛</button>\r\n    <button class=\"button is-primary\" @click=\"onCreateGame\">创建比赛</button>\r\n    <br>\r\n    <br>\r\n    <button class=\"button is-primary\" @click=\"onFile\">打开配置</button>\r\n    <button class=\"button is-primary\" id=\"reloadFile\" @click=\"reloadFile\">reload</button>\r\n\r\n    <br>\r\n\r\n    <div style=\"width: 900px;\">\r\n        <br> score rank:\r\n        <br>\r\n        <button class=\"button is-primary\" @click=\"onShowScoreRank(true)\">show</button>\r\n        <button class=\"button is-primary\" @click=\"onReloadShow()\">reload show</button>\r\n        <button class=\"button is-primary\" @click=\"onSetPlayerDeactive()\">set player deactive</button>\r\n        <button class=\"button is-primary\" @click=\"onShowScoreRank(false)\">hide</button>\r\n        <br>\r\n        <br>抢五比分 rank5 playerId\r\n        <button class=\"button is-primary\" @click=\"onGetRank5Player()\">获取球员</button> -----------发送抢五胜出球员到APP\r\n        <div v-for=\"(p, index) in rank5PlayerArr\" :key=\"p.name\">\r\n            <button class=\"button is-primary\" @click=\"onUpdateRank5Score(p.playerId,p.score)\">{{p.name}}</button>\r\n            <input type=\"text\" v-model=\"p.score\" style=\"width: 100px;\"> =============>\r\n            <!-- <button class=\"button is-primary\" @click=\"onSendRank5Winner(p.playerId)\">{{p.name+p.playerId}}</button> -->\r\n            <br>\r\n        </div>\r\n        <br>\r\n        <button class=\"button\" @click=\"onEmitBracket(actTab)\">emit bracket rec</button>\r\n        <br>\r\n        <div class=\"tabs  is-boxed\">\r\n            <ul>\r\n                <li v-bind:class=\"{ 'is-active': actTab== 'tab1'}\" @click='tab(\"tab1\")'>\r\n                    <a>\r\n                        <span>picker</span>\r\n                    </a>\r\n                </li>\r\n                <li v-bind:class=\"{ 'is-active': actTab== 'tab3'}\" @click='tab(\"tab3\")'>\r\n                    <a>\r\n                        <span>rec</span>\r\n                    </a>\r\n                </li>\r\n\r\n                <li v-bind:class=\"{ 'is-active': actTab== 'tab6'}\" @click='tab(\"tab6\")'>\r\n                    <a>\r\n                        <span>rank 16</span>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n        <div v-if='actTab==\"tab1\"' class=\"level\">\r\n            <div class=\"level-left\">\r\n                <ul style=\"width:400px;overflow:hidden;zoom:1;border:1px solid #ccc\">\r\n                    <li style=\"float:left;width:130px;padding:5px\" v-for=\"player in blueArr\">\r\n                        <button class=\"button is-primary\" @click=\"onChangePlayer(true,player.playerId)\">{{player.name}}</button>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"level-right\">\r\n                <ul style=\"width:400px;overflow:hidden;zoom:1;border:1px solid #ccc\">\r\n                    <li style=\"float:left;width:130px;padding:5px\" v-for=\"player in redArr\">\r\n                        <button class=\"button is-primary\" @click=\"onChangePlayer(false,player.playerId)\">{{player.name}}</button>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n        <div v-if='actTab==\"tab3\"' style=\"overflow-y: scroll;height: 800px;\">\r\n            <button class=\"button\" @click=\"onEmitBracket(actTab)\">emit bracket rec</button>\r\n            <button class=\"button is-primary\" @click=\"onPostGame(selGameIdx)\">发送赛果到APP</button>\r\n            <table class=\"table is-striped is-bordered\">\r\n                <thead>\r\n                    <tr>\r\n                        <th><abbr title=\"Position\">#gameIdx</abbr></th>\r\n                        <th>L player</th>\r\n                        <th>score</th>\r\n                        <th>R player</th>\r\n                        <th>operation</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr v-for=\"(rec,index) in recArr\" :key=\"index\" v-bind:class=\"[rec.gameIdx==selGameIdx?'is-selected':'']\">\r\n                        <th><a @click=\"setGameIdx(rec.gameIdx,rec.player)\">#####{{rec.gameIdx}} {{rec.isGroup}}</a></th>\r\n                        <td> {{rec.name[0]}} </td>\r\n                        <td> {{rec.score[0]}} - {{rec.score[1]}} </td>\r\n                        <td> {{rec.name[1]}} </td>\r\n                        <td>\r\n                            <div class=\"control\" v-if=\"rec.gameIdx==selGameIdx\">\r\n                                <input class=\"input\" :id=\"'scoreInput'+rec.gameIdx\" type=\"text\" style=\"width: 80px;\">\r\n                                <button class=\"button btn-setScore\" @click=\"onSetScore(rec.gameIdx)\">修改比分</button>\r\n                                <button class=\"button btn-setScore\" @click=\"onSetVsPlayer(rec.gameIdx,vsPlayer)\">修改对阵</button>\r\n                                <button class=\"button btn-setScore\" @click=\"onSetGameEnd(rec.gameIdx)\">设置比赛结束</button>\r\n                                <button class=\"button btn-setScore\" @click=\"selPlayerOnRec(rec.player)\">选择球员</button>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n            <button class=\"button is-danger\" @click=\"onInitDoc\">init doc</button>\r\n        </div>\r\n        {{p1WinMap}}\r\n    </div>\r\n</div>";

/***/ }),
/* 44 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"container\">\r\n    <div class=\"tabs  is-boxed\">\r\n        <ul>\r\n            <li v-bind:class=\"{ 'is-active': actTab== 'tab1'}\" @click='tab(\"tab1\")'>\r\n                <a>\r\n                    <span>home</span>\r\n                </a>\r\n            </li>\r\n            <li v-bind:class=\"{ 'is-active': actTab== 'tab2'}\" @click='tab(\"tab2\")'>\r\n                <a>\r\n                    <span>热门球员编辑</span>\r\n                </a>\r\n            </li>\r\n            <li v-bind:class=\"{ 'is-active': actTab== 'tab3'}\" @click='tab(\"tab3\")'>\r\n                <a>\r\n                    <span>自定义比赛</span>\r\n                </a>\r\n            </li>\r\n            <li v-bind:class=\"{ 'is-active': actTab== 'tab5'}\" @click='tab(\"tab5\")'>\r\n                <a>\r\n                    <span>国际邀请赛</span>\r\n                </a>\r\n            </li>\r\n            <li v-bind:class=\"{ 'is-active': actTab== 'tab6'}\" @click='tab(\"tab6\")'>\r\n                <a>\r\n                    <span>冠军排位赛</span>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <div v-if='actTab==\"tab1\"'>\r\n        <nav class=\"panel\">\r\n            <p class=\"panel-heading\">\r\n                直播面板op入口 Game ID: {{ selected }}\r\n                <span class=\"select\">\r\n                            <select v-model=\"selected\">\r\n                                <option v-for=\"option in options\" v-bind:value=\"option.value\">\r\n                                    {{ option.text }}\r\n                                </option>\r\n                            </select>\r\n                        </span>\r\n            </p>\r\n            <div v-for=\"link in links\">\r\n                <a class=\"panel-block\" :href=\"link.url\" target=\"_blank\">\r\n                    <span class=\"panel-icon\">\r\n                        <i class=\"fa fa-book\"></i>\r\n                        </span> {{link.url}}\r\n                    <br> {{link.title}}\r\n                </a>\r\n                <!--<button class=\"button\">复制地址</button>-->\r\n            </div>\r\n            <!-- <div>\r\n                抽奖id（编号）:<input type=\"text\" v-model=\"lotteryId\" style=\"width: 60px\"> 次序k:\r\n                <input type=\"text\" v-model=\"lotteryIdx\" style=\"width: 60px\">\r\n                <a v-if='lotteryId&&lotteryIdx' class=\"panel-block\" :href=\"'/panel/#/ol/ob/0?panel=cj&id='+lotteryId+'&k='+lotteryIdx\" target=\"_blank\">\r\n                           {{'/panel/#/ol/ob/0?panel=cj&id='+lotteryId+'&k='+lotteryIdx}}\r\n                        </a>\r\n            </div> -->\r\n\r\n            <p>\r\n                command:\r\n                <br> /game/bracket/clear\r\n                <br>/game/clear/bracketIdx\r\n                <br>/git/pull\r\n        </nav>\r\n        播放地址:<input type=\"text\" v-model=\"playUrl\" style=\"width: 1000px\">\r\n        <p>\r\n            推流地址:<input type=\"text\" v-model=\"rmtpUrl\" style=\"width: 1000px\">\r\n            <p>\r\n                播放地址2:<input type=\"text\" v-model=\"playUrl2\" style=\"width: 1000px\">\r\n                <p>\r\n                    推流地址2:<input type=\"text\" v-model=\"rmtpUrl2\" style=\"width: 1000px\">\r\n                    <!-- <p>\r\n                        <button class=\"button is-primary\" @click=\"onClkQRCode\">生成IOS二维码</button> {{iosParam | json}}\r\n                        <div id=\"qrcode\"></div> -->\r\n    </div>\r\n\r\n    <div v-if='actTab==\"tab2\"' class=\"ctn2\" style=\"display: inline-flex;\">\r\n        <div class=\"panel\" style=\"width: 500px;\">\r\n            <p class=\"panel-heading\">\r\n                亮了网后台数据导入8090\r\n            </p>\r\n            球员编号player_id\r\n            <input type=\"text\" v-model=\"player_id\" style=\"width: 100px;\">\r\n            <button class=\"button is-primary\" @click=\"onViewPlayer(player_id)\">查看亮了网球员</button>\r\n            <button class=\"button is-primary\" @click=\"onSyncPlayerToStrapi(player_id)\">导入亮了网球员</button>\r\n            <button class=\"button is-primary\" @click=\"onPullPlayerData(player_id)\">编辑8090球员</button>\r\n            <!-- <input type=\"text\" v-model=\"playerArrStr\" style=\"width: 150px;\">\r\n            <button class=\"button is-primary\" @click=\"onSetStarPlayer(playerArrStr)\">设定热门球员</button> -->\r\n            <div v-if='playerInEdit'>\r\n                <div class=\"container\" style=\"height: 700px\">\r\n                    <h1>上传热门球员图片</h1>\r\n                    <button class=\"button is-primary\" @click=\"onUpload\">打开本地图片</button>\r\n                    <button class=\"button is-primary\" @click=\"onCrop(player_id)\">裁切上传</button>\r\n                    <input type=\"file\" class=\"sr-only\" id=\"input\" name=\"image\" @change='onImgLoaded' accept=\"image/*\" hidden>\r\n                    <div class='result'></div>\r\n                    <img id=\"imgToDownload\" style=\"max-width: 100%;\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"panel\" style=\"width:250px;\">\r\n            <p class=\"panel-heading\">\r\n                预览\r\n            </p>\r\n            <div v-if='playerInEdit'>\r\n                <label style=\"font-size: 30px;\">{{ playerInEdit.player_id+playerInEdit.live_name}}</label>\r\n                <div class=\"preview\" style=\"width: 100px;\"></div>\r\n                <textarea v-model=\"playerInEdit.brief\" name=\"\" id=\"\" width=\"350\" height=\"150\"></textarea>\r\n                <input type=\"text\" v-model=\"playerInEdit.tag1\" style=\"width: 100px;\">\r\n                <input type=\"text\" v-model=\"playerInEdit.tag2\" style=\"width: 100px;\">\r\n                <br> level:\r\n                <input type=\"text\" v-model=\"playerInEdit.level\" style=\"width: 50px;\">1-6 S+ S A+ A B C\r\n                <br> <button class=\"button is-primary\" @click=\"onEditPlayer(player_id)\">更新</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div v-if='actTab==\"tab3\"' class=\"ctn2\" style=\"display: inline-flex;\">\r\n        <GameAdmin/>\r\n    </div>\r\n    <div v-if='actTab==\"tab4\"' class=\"ctn2\" style=\"display: inline-flex;\">\r\n        <Pick/>\r\n    </div>\r\n    <div v-if='actTab==\"tab5\"' class=\"ctn2\" style=\"display: inline-flex;\">\r\n        <WorldWar/>\r\n    </div>\r\n    <div v-if='actTab==\"tab6\"' class=\"ctn2\" style=\"display: inline-flex;\">\r\n        <ScoreRankAdmin/>\r\n    </div>\r\n</div>";

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	var VueBase_1 = __webpack_require__(22);
	var const_1 = __webpack_require__(27);
	var Command_1 = __webpack_require__(28);
	var opReq = function (cmdId, param) {
	    param._ = null;
	    $.ajax({
	        url: "/panel/" + const_1.PanelId.onlinePanel + "/" + cmdId,
	        type: "post",
	        data: JSON.stringify(param),
	        headers: { "Content-Type": "application/json" },
	        dataType: "json"
	    });
	};
	var BaseGame = (function () {
	    function BaseGame() {
	        this.lScore = 0;
	        this.rScore = 0;
	        this.lFoul = 0;
	        this.rFoul = 0;
	        this.lName = "";
	        this.rName = "";
	        this.lPlayerId = "";
	        this.rPlayerId = "";
	        this.gameTime = 0;
	        this.buzzerTime = 24;
	    }
	    return BaseGame;
	}());
	exports.BaseGame = BaseGame;
	var baseGame = new BaseGame();
	var _CommonGameAdmin = (function (_super) {
	    __extends(_CommonGameAdmin, _super);
	    function _CommonGameAdmin() {
	        var _this = _super.call(this) || this;
	        _this.template = __webpack_require__(46);
	        _this.timeInSec = VueBase_1.VueBase.PROP;
	        _this.buzzerTimeInSec = VueBase_1.VueBase.PROP;
	        _this.updateTime = VueBase_1.VueBase.PROP;
	        _this.lTeamScore = VueBase_1.VueBase.PROP;
	        _this.rTeamScore = VueBase_1.VueBase.PROP;
	        _this.isFocusBuzzer = VueBase_1.VueBase.PROP;
	        _this.watch = {
	            "baseGame.lName": function (val) {
	                console.log("lname", val);
	            },
	        };
	        _this.methods = {
	            onSetTimerEvent: function (event, v) {
	                var isNum = /(-?\d*)\-?\d+/.test(v) || /(-?\d*)\.?\d+/.test(v);
	                var isSec = true;
	                if (isNum) {
	                    var sec = void 0;
	                    if (/\./.test(v)) {
	                        isSec = false;
	                        var a = v.split('.');
	                        sec = Number(a[1]) + Number(a[0]) * 100;
	                    }
	                    else {
	                        if (/\-/.test(v)) {
	                            var a = v.split('-');
	                            sec = Number(a[0]) * 60 + Number(a[1]);
	                        }
	                        else {
	                            sec = v;
	                        }
	                        if (sec < 60) {
	                            sec *= 100;
	                            isSec = false;
	                        }
	                    }
	                    opReq(Command_1.CommandId.cs_timerEvent_common, { event: event, param: sec, isSec: isSec });
	                }
	                console.log('onSetTimerEvent', isNum, v);
	            },
	            onSetBuzzer: function (v) {
	                var ms10;
	                var isNum = /(-?\d*)\.?\d+/.test(v);
	                if (isNum) {
	                    if (!/\./.test(v)) {
	                        v += '.0';
	                    }
	                    var a = v.split('.');
	                    ms10 = Number(a[1]) + Number(a[0]) * 100;
	                    opReq(Command_1.CommandId.cs_timerEvent_buzzer, { event: const_1.TimerEvent.SETTING, param: ms10 });
	                }
	                console.log('set buzzer', isNum, v, Number(v) * 100, ms10);
	            },
	            onSyncBuzzer: function () {
	                opReq(Command_1.CommandId.cs_sync_buzzer, { visible: true });
	            },
	            onRestTeamScore: function () {
	                this.lTeamScore = this.rTeamScore = 0;
	                opReq(Command_1.CommandId.cs_teamScore, { lScore: this.lTeamScore, rScore: this.rTeamScore });
	            },
	            onSetScore: function (isLeft, dtScore) {
	                if (isLeft) {
	                    baseGame.lScore += dtScore;
	                }
	                else {
	                    baseGame.rScore += dtScore;
	                }
	                opReq(Command_1.CommandId.cs_scoreFoul_common, baseGame);
	                this.vueUpdate();
	            },
	            onSetFoul: function (isLeft, dtFoul) {
	                isLeft ? (baseGame.lFoul += dtFoul) : (baseGame.rFoul += dtFoul);
	                opReq(Command_1.CommandId.cs_scoreFoul_common, baseGame);
	                this.vueUpdate();
	            },
	            onResetScore: function () {
	                baseGame.lScore = 0;
	                baseGame.rScore = 0;
	                opReq(Command_1.CommandId.cs_scoreFoul_common, baseGame);
	                this.vueUpdate();
	            },
	            onResetFoul: function () {
	                this.onSetFoul(true, -baseGame.lFoul);
	                this.onSetFoul(false, -baseGame.rFoul);
	                opReq(Command_1.CommandId.cs_scoreFoul_common, baseGame);
	            },
	            onVueUpdate: function () {
	                this.vueUpdate();
	            }
	        };
	        VueBase_1.VueBase.initProps(_this);
	        return _this;
	    }
	    _CommonGameAdmin.prototype.created = function () {
	        var _this = this;
	        this.baseGame = baseGame;
	        this.timeInSec = 0;
	        this.buzzerTimeInSec = 0;
	        this.lTeamScore = this.rTeamScore = 0;
	        window.onkeydown = function (e) {
	            var isFocus = $("#buzzer").is(":focus");
	            if (isFocus) {
	                console.log(e.keyCode, 'key code');
	                if (e.keyCode == 32) {
	                    console.log('buzzer toggle');
	                    opReq(Command_1.CommandId.cs_timerEvent_buzzer, { event: "toggle" });
	                }
	                else if (e.keyCode == 82) {
	                    _this.resetBuzzer();
	                }
	                else if (e.keyCode == 81) {
	                    _this.resetBuzzer(true);
	                }
	            }
	        };
	    };
	    _CommonGameAdmin.prototype.initView = function (data) {
	        baseGame.lName = data.leftPlayer.name;
	        baseGame.rName = data.rightPlayer.name;
	        baseGame.lPlayerId = data.leftPlayer.playerId;
	        baseGame.rPlayerId = data.rightPlayer.playerId;
	        baseGame.lScore = baseGame.rScore = baseGame.lFoul = baseGame.rFoul = 0;
	        console.log("init base game view", data, baseGame.lName);
	        this.vueUpdate();
	        document.getElementById("vudp").click();
	    };
	    _CommonGameAdmin.prototype.vueUpdate = function () {
	        this.updateTime = new Date().getTime();
	    };
	    _CommonGameAdmin.prototype.resetBuzzer = function (isToggle) {
	        if (isToggle === void 0) { isToggle = false; }
	        opReq(Command_1.CommandId.cs_timerEvent_buzzer, { event: const_1.TimerEvent.RESET, isToggle: isToggle });
	    };
	    return _CommonGameAdmin;
	}(VueBase_1.VueBase));
	exports.CommonGameAdmin = new _CommonGameAdmin();


/***/ }),
/* 46 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"container\">\r\n    <a href=\"/panel/#/com\">计分板面板地址</a>\r\n    <table class=\"table is-striped is-bordered\" style=\"font-size:30px;\">\r\n        <thead>\r\n        </thead>\r\n        <tbody>\r\n            <tr>\r\n                <th>\r\n                    <div hidden>{{updateTime}}</div>\r\n                </th>\r\n                <th>\r\n                    <a id=\"vudp\" @click=\"onVueUpdate\"></a>\r\n                </th>\r\n                <th>蓝方球员</th>\r\n                <th> </th>\r\n                <th>红方球员</th>\r\n                <th>\r\n                </th>\r\n            </tr>\r\n            <tr>\r\n                <th style=\"font-size:25px;\">\r\n                    比分\r\n                    <a @click=\"onResetScore\"> 重置</a>\r\n                </th>\r\n                <th>\r\n                    <button class=\"button\" @click=\"onSetScore(true,1)\">+1</button>\r\n                    <button class=\"button\" @click=\"onSetScore(true,-1)\">-1</button>\r\n                </th>\r\n                <th>\r\n                    {{baseGame.lName}}\r\n                </th>\r\n                <th style=\"font-size:40px;\">\r\n                    <span id=\"lScore\">{{baseGame.lScore}}</span> - <span id=\"rScore\">{{baseGame.rScore}}</span>\r\n                </th>\r\n                <th>\r\n                    {{baseGame.rName}}\r\n                </th>\r\n                <th>\r\n                    <button class=\"button\" @click=\"onSetScore(false,1)\">+1</button>\r\n                    <button class=\"button\" @click=\"onSetScore(false,-1)\">-1</button>\r\n                </th>\r\n            </tr>\r\n            <tr>\r\n                <th style=\"font-size:25px;\">犯规\r\n                    <a @click=\"onResetFoul\"> 重置</a>\r\n                </th>\r\n                <th>\r\n                    <button class=\"button\" @click=\"onSetFoul(true,1)\">+1</button>\r\n                    <button class=\"button\" @click=\"onSetFoul(true,-1)\">-1</button>\r\n                </th>\r\n                <th>\r\n                    -\r\n                </th>\r\n                <th>\r\n                    <span id=\"lFoul\">{{baseGame.lFoul}}</span> - <span id=\"rFoul\">{{baseGame.rFoul}}</span>\r\n                </th>\r\n                <th>\r\n                    -\r\n                </th>\r\n                <th>\r\n                    <button class=\"button\" @click=\"onSetFoul(false,1)\">+1</button>\r\n                    <button class=\"button\" @click=\"onSetFoul(false,-1)\">-1</button>\r\n                </th>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n    <div style=\"font-size:30px;\">\r\n        比赛时间设置:<input class=\"input\" @keyup.enter=\"onSetTimerEvent('setting',timeInSec)\" v-model=\"timeInSec\" type=\"text\" style=\"width: 100px;\">\r\n        <!-- <a @click=\"onSetTimerEvent('start')\">开始  </a>\r\n        <a @click=\"onSetTimerEvent('pause')\">暂停  </a> -->\r\n        <a @click=\"onSetTimerEvent('setting',timeInSec)\">设置</a>\r\n        <a @click=\"onSetTimerEvent('setting','20-0')\">reset</a> 分钟-秒数 时间格式\"7-0\"，大于60秒不要加\".\"\"\r\n        <hr> 进攻时间设置:\r\n        <input class=\"input\" v-model=\"buzzerTimeInSec\" @keyup.enter=\"onSetBuzzer(buzzerTimeInSec)\" type=\"text\" style=\"width: 100px;\">\r\n        <a @click=\"onSetBuzzer(buzzerTimeInSec)\">设置</a>\r\n        <a @click=\"onSyncBuzzer()\">同步进攻时间</a>\r\n        <a @click=\"resetBuzzer\">reset</a>\r\n        <input id=\"buzzer\" maxlength=\"1\" class=\"input\" type=\"text\" style=\"width: 60px;\"> q 复位并暂停/开始 进攻时间 r复位进攻时间 空格暂停/开始比赛时间和进攻时间\r\n    </div>\r\n</div>";

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	var VueBase_1 = __webpack_require__(22);
	var const_1 = __webpack_require__(27);
	var Command_1 = __webpack_require__(28);
	var HupuAPI_1 = __webpack_require__(24);
	var JsFunc_1 = __webpack_require__(21);
	var opReq = function (cmdId, param) {
	    param._ = null;
	    $.ajax({
	        url: "/panel/" + const_1.PanelId.onlinePanel + "/" + cmdId,
	        type: "post",
	        data: JSON.stringify(param),
	        headers: { "Content-Type": "application/json" },
	        dataType: "json"
	    });
	};
	var _PickTeamAdmin = (function (_super) {
	    __extends(_PickTeamAdmin, _super);
	    function _PickTeamAdmin() {
	        var _this = _super.call(this) || this;
	        _this.template = __webpack_require__(48);
	        _this.teamArr1 = VueBase_1.VueBase.PROP;
	        _this.teamArr2 = VueBase_1.VueBase.PROP;
	        _this.teamArr3 = VueBase_1.VueBase.PROP;
	        _this.conf = VueBase_1.VueBase.PROP;
	        _this.color1 = VueBase_1.VueBase.PROP;
	        _this.color2 = VueBase_1.VueBase.PROP;
	        _this.color3 = VueBase_1.VueBase.PROP;
	        _this.team1_1 = VueBase_1.VueBase.PROP;
	        _this.team1_2 = VueBase_1.VueBase.PROP;
	        _this.team1_3 = VueBase_1.VueBase.PROP;
	        _this.team1_4 = VueBase_1.VueBase.PROP;
	        _this.team2_1 = VueBase_1.VueBase.PROP;
	        _this.team2_2 = VueBase_1.VueBase.PROP;
	        _this.team2_3 = VueBase_1.VueBase.PROP;
	        _this.team2_4 = VueBase_1.VueBase.PROP;
	        _this.team3_1 = VueBase_1.VueBase.PROP;
	        _this.team3_2 = VueBase_1.VueBase.PROP;
	        _this.team3_3 = VueBase_1.VueBase.PROP;
	        _this.team3_4 = VueBase_1.VueBase.PROP;
	        _this.lowerthirdText = VueBase_1.VueBase.PROP;
	        _this.selected_player = VueBase_1.VueBase.PROP;
	        _this.confType2_playerMap = VueBase_1.VueBase.PROP;
	        _this.confType4 = VueBase_1.VueBase.PROP;
	        _this.methods = {
	            onShowLeftImage: function (visible) {
	                opReq(Command_1.CommandId.cs_showLowerThird_left_image, { data: { type: 11 }, visible: visible });
	            },
	            onSetPlayer: function (player) {
	                this.selected_player = player;
	            },
	            onShowSelectedPlayerType: function (type) {
	                var clonePlayer = JsFunc_1.clone(this.selected_player);
	                clonePlayer.type = type;
	                if (type == 4) {
	                    clonePlayer.cont = [clonePlayer.player.name, clonePlayer.player.info];
	                    clonePlayer.icon = clonePlayer.player.avatar;
	                }
	                opReq(Command_1.CommandId.cs_showLowerThird, { data: clonePlayer, visible: true });
	            },
	            onShowWW3PlayerInfo: function (data, v) {
	                opReq(Command_1.CommandId.cs_showWW3PlayerInfo, { playerArr: data, visible: v });
	            },
	            onShowLowerThird: function (lt, visible) {
	                console.log('show', lt);
	                opReq(Command_1.CommandId.cs_showLowerThird, { data: lt, visible: visible });
	            },
	            onShowLowerThirdCustom: function (lt, type) {
	                if (type === void 0) { type = 1; }
	                this.onShowLowerThird({
	                    "button": lt,
	                    "type": type,
	                    "cont": lt
	                });
	            },
	            onUpdatePlayerMap: function () {
	                this.updataPlayerMap();
	            },
	            onSetColor: function () {
	            },
	            onShowPick: function (v) {
	                if (v === void 0) { v = true; }
	                opReq(Command_1.CommandId.cs_showPickup, {
	                    teamArr1: [
	                        this.team1_1,
	                        this.team1_2,
	                        this.team1_3,
	                        this.team1_4,
	                    ],
	                    teamArr2: [
	                        this.team2_1,
	                        this.team2_2,
	                        this.team2_3,
	                        this.team2_4,
	                    ],
	                    teamArr3: [
	                        this.team3_1,
	                        this.team3_2,
	                        this.team3_3,
	                        this.team3_4,
	                    ],
	                    visible: v
	                });
	            }
	        };
	        VueBase_1.VueBase.initProps(_this);
	        return _this;
	    }
	    _PickTeamAdmin.prototype.created = function () {
	        this.color1 = '绿';
	        this.color2 = '红';
	        this.color3 = '白';
	        this.teamArr1 = [{ name: '1', playerId: 1 }];
	        this.teamArr2 = [{ name: '2', playerId: 1 }];
	        this.teamArr3 = [{ name: '3', playerId: 1 }];
	        this.selected_player = {
	            player: {}
	        };
	        this.confType1_arr = [
	            {
	                "button": "盼盼 姜冕",
	                "type": 1,
	                "cont": ["盼盼_路人王官方主播", "姜冕_路人王官方主播"]
	            },
	            {
	                "button": "姜冕 盼盼",
	                "type": 1,
	                "cont": ["姜冕_路人王官方主播", "盼盼_路人王官方主播"]
	            },
	            {
	                "button": "Gary 堂主",
	                "type": 1,
	                "cont": ["鹅皇Gary_路人王官方主播", "堂主_路人王官方主播"]
	            },
	            {
	                "button": "堂主 Gary",
	                "type": 1,
	                "cont": ["堂主_路人王官方主播", "鹅皇Gary_路人王官方主播"]
	            },
	            {
	                "button": "(抖音/微信)堂主 Gary",
	                "type": 1,
	                "cont": ["堂主_微博/抖音号：信堂堂主", "鹅皇Gary_微博/抖音号：鹅皇Gary"]
	            },
	            {
	                "button": "(抖音/微信)Gary 堂主",
	                "type": 1,
	                "cont": ["鹅皇Gary_微博/抖音号：鹅皇Gary", "堂主_微博/抖音号：信堂堂主"]
	            },
	        ];
	        this.confType4 = [
	            {
	                'button': '路人王介绍',
	                'type': 4,
	                'cont': [
	                    '路人王介绍：',
	                    '“路人王”篮球赛是目前全国最火的民间篮球单挑赛，1V1的赛制结合娱乐元素，令比赛更刺激、更具观赏性。这项全民可参与的赛事，致力于成为年轻人最爱的篮球IP。'
	                ],
	                'icon': '/img/panel/lowerThird/icon_ku.png'
	            },
	            {
	                'button': 'Round1： UP主单挑赛规则',
	                'type': 4,
	                'cont': [
	                    'Round1： UP主单挑赛规则',
	                    '单次进攻时间为20秒，全局限时3分钟，全程不停表。先拿5分的球员获胜。累计4次犯规后，对方罚球。'
	                ],
	                'icon': '/img/panel/lowerThird/icon_ku.png'
	            },
	            {
	                'button': 'Round2： 4V4比赛规则',
	                'type': 4,
	                'cont': [
	                    'Round2： 4V4比赛规则',
	                    '先得21分的球队获胜，每局限时15分钟，全程不停表。单次进攻时间24秒。全队第5次犯规，对手罚篮。'
	                ],
	                'icon': '/img/panel/lowerThird/icon_ku.png'
	            },
	            {
	                'button': 'Round3： 灌篮UP主队vs路人王联队规则',
	                'type': 4,
	                'cont': [
	                    'Round3： 灌篮UP主队vs路人王联队规则',
	                    '每队4人，队长6滴血，队员5滴血，全队21滴血。一分即对应为一滴血，当一方血量被打空时，则该队判负。某球员第3次犯规时，对方罚球，犯规达到8次则该员血量清零。'
	                ],
	                'icon': '/img/panel/lowerThird/icon_ku.png'
	            },
	        ];
	        this.conf = [];
	        this.confType2_playerMap = [];
	    };
	    _PickTeamAdmin.prototype.mounted = function () {
	        this.updataPlayerMap();
	    };
	    _PickTeamAdmin.prototype.updataPlayerMap = function () {
	        var _this = this;
	        HupuAPI_1.getPlayerMap(function (doc) {
	            _this.confType2_playerMap;
	            console.log('playerMap', doc.playerMap);
	            _this.confType2_playerMap = [];
	            for (var _i = 0, _a = doc.player_all; _i < _a.length; _i++) {
	                var p = _a[_i];
	                var pid = p.player_id;
	                p.avatar = doc.avatar_url + pid + '.png';
	                if (pid == 'p0')
	                    continue;
	                _this.confType2_playerMap.push({
	                    "button": p.name + '-' + pid,
	                    "type": 2,
	                    "player": p,
	                    "cont": p.name
	                });
	            }
	        });
	        HupuAPI_1.getLowerthird('lowerthird', function (data) {
	            console.log('get lowerthird', data);
	            console.log('referee', data.referee);
	            console.log('commentator', data.commentator);
	            _this.confType1_arr_8090 = [];
	            var doubleCommentator = function (field) {
	                if (data[field].length == 2) {
	                    var c1 = data[field][0];
	                    var c2 = data[field][1];
	                    _this.confType1_arr_8090.push({
	                        "button": c1.name + ' ' + c2.name,
	                        "type": 1,
	                        "cont": [c1.name + '_' + c1.info, c2.name + '_' + c2.info]
	                    });
	                    var tmp = c1;
	                    c1 = c2;
	                    c2 = tmp;
	                    _this.confType1_arr_8090.push({
	                        "button": c1.name + ' ' + c2.name,
	                        "type": 1,
	                        "cont": [c1.name + '_' + c1.info, c2.name + '_' + c2.info]
	                    });
	                }
	            };
	            doubleCommentator('double_1');
	            doubleCommentator('double_2');
	            _this.confType2_arr_8090 = [];
	            for (var i = 0; i < data.mc.length; i++) {
	                var mc = data.mc[i];
	                _this.confType2_arr_8090.push({
	                    "button": mc.name,
	                    "type": 2,
	                    "cont": mc.info
	                });
	            }
	            for (var i = 0; i < data.referee.length; i++) {
	                var ref = data.referee[i];
	                _this.confType2_arr_8090.push({
	                    "button": ref.name,
	                    "type": 2,
	                    "cont": ref.info
	                });
	            }
	            _this.conf = _this.conf.concat(_this.confType1_arr_8090)
	                .concat(_this.confType2_arr_8090);
	        });
	    };
	    return _PickTeamAdmin;
	}(VueBase_1.VueBase));
	exports._PickTeamAdmin = _PickTeamAdmin;
	exports.PickTeamAdmin = new _PickTeamAdmin();


/***/ }),
/* 48 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"container\">\r\n    <a href=\"/panel/#/lowerthird\">面板地址</a>\r\n    <hr>\r\n    <button class=\"button is-primary\" @click=\"onShowLowerThird({},false)\">隐藏人名条</button>\r\n    <!-- <button class=\"button is-primary\" @click=\"onUpdatePlayerMap()\">更新球员名单</button> -->\r\n    <div style=\"\">\r\n        MC双人人名条：\r\n        <button style=\"margin:5px;\" v-if=\"btn.type==1\" v-for=\"(btn,index) in conf\" :key=\"index\" class=\"button is-primary\" @click=\"onShowLowerThird(btn,true)\">{{btn.button}} </button>\r\n        <br> 单人人名条：\r\n        <button style=\"margin:5px;\" v-if=\"btn.type==2\" v-for=\"(btn,index) in conf\" :key=\"index\" class=\"button is-primary\" @click=\"onShowLowerThird(btn,true)\">{{btn.button}} </button>\r\n        <br> 球员：\r\n        <table class=\"table is-striped is-bordered\" style=\"font-size:20px;\">\r\n            <thead>\r\n                <tr>\r\n                    <th>#1</th>\r\n                    <th>#2</th>\r\n                    <th>#3</th>\r\n                    <th>#4</th>\r\n                    <th>#5</th>\r\n                    <th>#6</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr>\r\n                    <th v-if='index<6' v-for=\"(btn,index) in confType2_playerMap\" :key=\"btn\">\r\n                        <a @click=\"onSetPlayer(btn,true)\">{{btn.player.name}}- {{btn.player.player_id}}</a>\r\n                    </th>\r\n                </tr>\r\n                <tr>\r\n                    <th v-if='index<12&&6<=index' v-for=\"(btn,index) in confType2_playerMap\" :key=\"btn\">\r\n                        <a @click=\"onSetPlayer(btn,true)\">{{btn.player.name}}- {{btn.player.player_id}}</a>\r\n                    </th>\r\n                </tr>\r\n                <tr>\r\n                    <th v-if='index<18&&12<=index' v-for=\"(btn,index) in confType2_playerMap\" :key=\"btn\">\r\n                        <a @click=\"onSetPlayer(btn,true)\">{{btn.player.name}}- {{btn.player.player_id}}</a>\r\n                    </th>\r\n                </tr>\r\n                <tr>\r\n                    <th v-if='index<24&&18<=index' v-for=\"(btn,index) in confType2_playerMap\" :key=\"btn\">\r\n                        <a @click=\"onSetPlayer(btn,true)\">{{btn.player.name}}- {{btn.player.player_id}}</a>\r\n                    </th>\r\n                </tr>\r\n                <tr>\r\n                    <th v-if='index<30&&24<=index' v-for=\"(btn,index) in confType2_playerMap\" :key=\"btn\">\r\n                        <a @click=\"onSetPlayer(btn,true)\">{{btn.player.name}}- {{btn.player.player_id}}</a>\r\n                    </th>\r\n                </tr>\r\n            </tbody>\r\n\r\n        </table>\r\n        <br>选中球员： {{selected_player.player.name|'-'}}\r\n        <br>\r\n        <button class=\"button is-primary\" @click=\"onShowSelectedPlayerType(2)\">只显示球员名字</button>\r\n        <button class=\"button is-primary\" @click=\"onShowSelectedPlayerType(4)\">只显示球员简介</button>\r\n        <br>\r\n        <br><input type=\"text\" v-model=\"lowerthirdText\" style=\"width: 200px;\">\r\n        <button class=\"button is-primary\" @click=\"onShowLowerThirdCustom(lowerthirdText,2)\">自定义人名条内容（12个汉字最多）</button>\r\n    </div>\r\n    <br>\r\n    <br>\r\n\r\n    <div style=\"width:680px\">\r\n        球员简介，环节简介：(图标 标题 内容)\r\n        <button style=\"margin:5px;\" v-for=\"(btn,index) in confType4\" :key=\"index\" class=\"button is-primary\" @click=\"onShowLowerThird(btn,true)\">{{btn.button}} </button>\r\n    </div>\r\n    <hr>\r\n    <!-- <button class=\"button is-primary\" @click=\"onShowWW3PlayerInfo({},true)\">显示比分面板球员信息</button>\r\n    <button class=\"button is-primary\" @click=\"onShowWW3PlayerInfo({},false)\">隐藏</button> -->\r\n    <br>\r\n    <br>\r\n    <button class=\"button is-primary\" @click=\"onShowLeftImage(true)\">显示二维码</button>\r\n    <button class=\"button is-primary\" @click=\"onShowLeftImage(false)\">隐藏</button>\r\n\r\n    <!-- <button class=\"button is-primary\" @click=\"onShowPick(false)\">hide选人</button>\r\n    <button class=\"button is-primary\" @click=\"onShowPick(true)\">emit选人</button> -->\r\n    <!-- <div style=\"display: inline-flex\">\r\n        队长：\r\n        <ul style=\"width:200px;overflow:hidden;zoom:1;border:1px solid #ccc\">\r\n            <input class=\"input\" type=\"text\" v-model=\"team1_1\" style=\"width: 180px;\">\r\n            <input class=\"input\" type=\"text\" v-model=\"team1_2\" style=\"width: 180px;\">\r\n            <input class=\"input\" type=\"text\" v-model=\"team1_3\" style=\"width: 180px;\">\r\n            <input class=\"input\" type=\"text\" v-model=\"team1_4\" style=\"width: 180px;\">\r\n        </ul>\r\n        <ul style=\"width:200px;overflow:hidden;zoom:1;border:1px solid #ccc\">\r\n            <input class=\"input\" type=\"text\" v-model=\"team2_1\" style=\"width: 180px;\">\r\n            <input class=\"input\" type=\"text\" v-model=\"team2_2\" style=\"width: 180px;\">\r\n            <input class=\"input\" type=\"text\" v-model=\"team2_3\" style=\"width: 180px;\">\r\n            <input class=\"input\" type=\"text\" v-model=\"team2_4\" style=\"width: 180px;\">\r\n        </ul>\r\n        <ul style=\"width:200px;overflow:hidden;zoom:1;border:1px solid #ccc\">\r\n            <input class=\"input\" type=\"text\" v-model=\"team3_1\" style=\"width: 180px;\">\r\n            <input class=\"input\" type=\"text\" v-model=\"team3_2\" style=\"width: 180px;\">\r\n            <input class=\"input\" type=\"text\" v-model=\"team3_3\" style=\"width: 180px;\">\r\n            <input class=\"input\" type=\"text\" v-model=\"team3_4\" style=\"width: 180px;\">\r\n        </ul>\r\n    </div> -->\r\n    <!-- <br>\r\n    <br> -->\r\n    <!-- <button class=\"button is-primary\" @click=\"onSetColor()\">emit 颜色</button> -->\r\n    <!-- <div class=\"select\">\r\n        <select v-model=\"colorArr[0]\">\r\n          <option>红</option>\r\n          <option>白</option>\r\n          <option>绿</option>\r\n        </select>\r\n    </div>\r\n    <div class=\"select\">\r\n        <select v-model=\"colorArr[1]\">\r\n          <option>红</option>\r\n          <option>白</option>\r\n          <option>绿</option>\r\n        </select>\r\n    </div>\r\n    <div class=\"select\">\r\n        <select v-model=\"colorArr[2]\">\r\n          <option>红</option>\r\n          <option>白</option>\r\n          <option>绿</option>\r\n        </select>\r\n    </div> -->\r\n</div>";

/***/ })
/******/ ]);
//# sourceMappingURL=admin.js.map