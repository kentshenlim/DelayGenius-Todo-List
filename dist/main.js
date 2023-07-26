/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/icon.js":
/*!*********************!*\
  !*** ./src/icon.js ***!
  \*********************/
/***/ (() => {

eval("/* eslint-disable no-undef */\nvar placeholder2 = document.getElementById('identiconPlaceholder2');\nplaceholder2.innerHTML = jdenticon.toSvg('name of the task', 200);\nvar jdenticons = document.querySelectorAll('.jdenticon');\njdenticons.forEach(function (j) {\n  j.innerHTML = jdenticon.toSvg('name of the task', 200);\n});\n\n//# sourceURL=webpack://my-webpack-project/./src/icon.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon */ \"./src/icon.js\");\n/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_icon__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_addForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/addForm */ \"./src/js/addForm.js\");\n/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style/style.css */ \"./src/style/style.css\");\n/* harmony import */ var _style_scrollbar_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style/scrollbar.css */ \"./src/style/scrollbar.css\");\n/* harmony import */ var _js_components_TaskCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/components/TaskCard */ \"./src/js/components/TaskCard.js\");\n\n\n\n\n\nvar contentCenter = document.getElementById('content-center');\nvar cardShelf = document.getElementById('card-shelf');\nvar p1 = (0,_js_components_TaskCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('What the fuck', [{\n  disp: 'An example task again',\n  color: 'green'\n}]);\ncardShelf.append(p1);\ndocument.addEventListener('DOMContentLoaded', function () {\n  return (0,_js_addForm__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n});\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/js/addForm.js":
/*!***************************!*\
  !*** ./src/js/addForm.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_pubSub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/pubSub */ \"./src/utils/pubSub.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {\n  // Cache DOM\n  var dateForm = document.querySelector('div.date-form');\n  var textInput = document.getElementById('add-task');\n  var dateInput = document.getElementById('add-date');\n  var addBtn = document.getElementById('submit-task-card');\n\n  // Event handlers\n  function handleInputChange() {\n    if (textInput.value.length) addBtn.classList.add('active');else addBtn.classList.remove('active');\n  }\n  function handleClickAdd() {\n    if (!textInput.value.length) return;\n    _utils_pubSub__WEBPACK_IMPORTED_MODULE_0__[\"default\"].publish('add_task');\n    textInput.value = '';\n    dateInput.value = '';\n    handleInputChange();\n  }\n  function handleFocus() {\n    dateForm.classList.add('active');\n  }\n  textInput.onkeydown = handleInputChange;\n  textInput.onkeyup = handleInputChange;\n  addBtn.onclick = handleClickAdd;\n  textInput.onfocus = handleFocus;\n});\n\n//# sourceURL=webpack://my-webpack-project/./src/js/addForm.js?");

/***/ }),

/***/ "./src/js/components/TaskCard.js":
/*!***************************************!*\
  !*** ./src/js/components/TaskCard.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TaskCard)\n/* harmony export */ });\n/* harmony import */ var _TaskCardNote__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskCardNote */ \"./src/js/components/TaskCardNote.js\");\n\nfunction TaskCard(taskName, taskNoteArr) {\n  /*\r\n  taskName: string, task name displayed\r\n  arr: Array of objects, [{displayString, colorString}]\r\n  */\n  var resNode = document.createElement('button');\n  resNode.classList.add('task-card', 'flex-horizontal');\n  var circle = document.createElement('ion-icon');\n  circle.setAttribute('name', 'ellipse-outline');\n  var jdenticon = document.createElement('div');\n  jdenticon.classList.add('jdenticon');\n  var details = document.createElement('div');\n  details.classList.add('task-card--details', 'flex-vertical');\n  var taskNameNode = document.createElement('h3');\n  taskNameNode.classList.add('flex-horizontal');\n  taskNameNode.textContent = taskName;\n  details.appendChild(taskNameNode);\n  var list = (0,_TaskCardNote__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(taskNoteArr);\n  details.appendChild(list);\n  resNode.append.apply(resNode, [circle, jdenticon, details]);\n  return resNode;\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/js/components/TaskCard.js?");

/***/ }),

/***/ "./src/js/components/TaskCardNote.js":
/*!*******************************************!*\
  !*** ./src/js/components/TaskCardNote.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TaskCardNote)\n/* harmony export */ });\nfunction TaskCardNote(arr) {\n  /*\r\n  arr: Array of objects, [{disp, color}]\r\n  */\n  var resNode = document.createElement('ul');\n  arr.forEach(function (element) {\n    var disp = element.disp,\n      color = element.color;\n    var li = document.createElement('li');\n    li.textContent = disp;\n    li.style.color = color ? 'auto' : color;\n    resNode.appendChild(li);\n  });\n  return resNode;\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/js/components/TaskCardNote.js?");

/***/ }),

/***/ "./src/utils/pubSub.js":
/*!*****************************!*\
  !*** ./src/utils/pubSub.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar pubSub = function () {\n  var map = {}; // Event name => listener\n\n  function subscribe(eventName, callback) {\n    if (map[eventName] === undefined) map[eventName] = [];\n    map[eventName].push(callback);\n  }\n  function publish(eventName, data) {\n    if (map[eventName] === undefined) return;\n    var callbacks = map[eventName];\n    callbacks.forEach(function (callback) {\n      callback(data);\n    });\n  }\n  function unsubscribe(eventName, callback) {\n    if (map[eventName] === undefined) return;\n    var callbacks = map[eventName];\n    for (var i = 0; i < callbacks.length; i += 1) {\n      if (callbacks[i] === callback) {\n        // By reference\n        callbacks.splice(i, 0);\n        return;\n      }\n    }\n  }\n  return {\n    subscribe: subscribe,\n    publish: publish,\n    unsubscribe: unsubscribe\n  };\n}();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pubSub);\n\n//# sourceURL=webpack://my-webpack-project/./src/utils/pubSub.js?");

/***/ }),

/***/ "./src/style/scrollbar.css":
/*!*********************************!*\
  !*** ./src/style/scrollbar.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-webpack-project/./src/style/scrollbar.css?");

/***/ }),

/***/ "./src/style/style.css":
/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-webpack-project/./src/style/style.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;