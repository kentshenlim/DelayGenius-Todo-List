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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon */ \"./src/icon.js\");\n/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_icon__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style/style.css */ \"./src/style/style.css\");\n/* harmony import */ var _style_scrollbar_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style/scrollbar.css */ \"./src/style/scrollbar.css\");\n/* harmony import */ var _js_components_TaskCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/components/TaskCard */ \"./src/js/components/TaskCard.js\");\n/* harmony import */ var _js_taskStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/taskStore */ \"./src/js/taskStore.js\");\n/* harmony import */ var _js_addForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/addForm */ \"./src/js/addForm.js\");\n/* harmony import */ var _utils_pubSub__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/pubSub */ \"./src/utils/pubSub.js\");\n\n\n\n\n\n\n\nvar cardShelf = document.getElementById('card-shelf');\nvar p1 = (0,_js_components_TaskCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('What the fuck', [{\n  disp: 'An example task again',\n  color: 'green'\n}]);\ncardShelf.append(p1);\ndocument.addEventListener('DOMContentLoaded', function () {\n  (0,_js_addForm__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n  var storage = (0,_js_taskStore__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n  _utils_pubSub__WEBPACK_IMPORTED_MODULE_6__[\"default\"].subscribe('add_task', storage.addTask);\n  _utils_pubSub__WEBPACK_IMPORTED_MODULE_6__[\"default\"].subscribe('add_task', storage.printStorage);\n});\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/js/addForm.js":
/*!***************************!*\
  !*** ./src/js/addForm.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_pubSub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/pubSub */ \"./src/utils/pubSub.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {\n  // Cache DOM\n  var dateForm = document.querySelector('div.date-form');\n  var textInput = document.getElementById('add-task');\n  var dateInput = document.getElementById('add-date');\n  var addBtn = document.getElementById('submit-task-card');\n\n  // Event handlers\n  function handleInputChange() {\n    if (textInput.value.length) addBtn.classList.add('active');else addBtn.classList.remove('active');\n  }\n  function handleClickAdd() {\n    if (!textInput.value.length) return;\n    _utils_pubSub__WEBPACK_IMPORTED_MODULE_0__[\"default\"].publish('add_task', {\n      taskName: textInput.value,\n      dueDate: dateInput.value\n    });\n    textInput.value = '';\n    dateInput.value = '';\n    handleInputChange();\n  }\n  function handleFocus() {\n    dateForm.classList.add('active');\n  }\n  textInput.onkeydown = handleInputChange;\n  textInput.onkeyup = handleInputChange;\n  addBtn.onclick = handleClickAdd;\n  textInput.onfocus = handleFocus;\n});\n\n//# sourceURL=webpack://my-webpack-project/./src/js/addForm.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TaskCardNote)\n/* harmony export */ });\nfunction TaskCardNote(arr) {\n  /*\r\n  arr: Array of objects, [{disp, color}]\r\n  */\n  var resNode = document.createElement('ul');\n  arr.forEach(function (element) {\n    var disp = element.disp,\n      color = element.color;\n    var li = document.createElement('li');\n    li.textContent = disp;\n    li.style.color = color || 'auto';\n    resNode.appendChild(li);\n  });\n  return resNode;\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/js/components/TaskCardNote.js?");

/***/ }),

/***/ "./src/js/taskStore.js":
/*!*****************************!*\
  !*** ./src/js/taskStore.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ taskStorage)\n/* harmony export */ });\n/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nanoid */ \"./node_modules/nanoid/index.browser.js\");\n\nfunction taskStorage() {\n  var storage = {\n    a: 1\n  }; // nanoid => task object\n\n  function addTask(taskObj) {\n    // taskObj built using Task constructor\n    storage[(0,nanoid__WEBPACK_IMPORTED_MODULE_0__.nanoid)()] = taskObj;\n  }\n  function removeTask(id) {\n    delete storage[id];\n  }\n  function getTask(id) {\n    if (storage[id]) return false;\n    return storage[id];\n  }\n  function toggleTaskImportant(id) {\n    storage[id].isImportant = !storage[id].isImportant;\n  }\n  function printStorage() {\n    console.log(storage);\n  }\n  return {\n    addTask: addTask,\n    removeTask: removeTask,\n    getTask: getTask,\n    toggleTaskImportant: toggleTaskImportant,\n    printStorage: printStorage\n  };\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/js/taskStore.js?");

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

/***/ }),

/***/ "./node_modules/nanoid/index.browser.js":
/*!**********************************************!*\
  !*** ./node_modules/nanoid/index.browser.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   customAlphabet: () => (/* binding */ customAlphabet),\n/* harmony export */   customRandom: () => (/* binding */ customRandom),\n/* harmony export */   nanoid: () => (/* binding */ nanoid),\n/* harmony export */   random: () => (/* binding */ random),\n/* harmony export */   urlAlphabet: () => (/* reexport safe */ _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__.urlAlphabet)\n/* harmony export */ });\n/* harmony import */ var _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url-alphabet/index.js */ \"./node_modules/nanoid/url-alphabet/index.js\");\n\nlet random = bytes => crypto.getRandomValues(new Uint8Array(bytes));\nlet customRandom = (alphabet, defaultSize, getRandom) => {\n  let mask = (2 << Math.log(alphabet.length - 1) / Math.LN2) - 1;\n  let step = -~(1.6 * mask * defaultSize / alphabet.length);\n  return (size = defaultSize) => {\n    let id = '';\n    while (true) {\n      let bytes = getRandom(step);\n      let j = step;\n      while (j--) {\n        id += alphabet[bytes[j] & mask] || '';\n        if (id.length === size) return id;\n      }\n    }\n  };\n};\nlet customAlphabet = (alphabet, size = 21) => customRandom(alphabet, size, random);\nlet nanoid = (size = 21) => crypto.getRandomValues(new Uint8Array(size)).reduce((id, byte) => {\n  byte &= 63;\n  if (byte < 36) {\n    id += byte.toString(36);\n  } else if (byte < 62) {\n    id += (byte - 26).toString(36).toUpperCase();\n  } else if (byte > 62) {\n    id += '-';\n  } else {\n    id += '_';\n  }\n  return id;\n}, '');\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/nanoid/index.browser.js?");

/***/ }),

/***/ "./node_modules/nanoid/url-alphabet/index.js":
/*!***************************************************!*\
  !*** ./node_modules/nanoid/url-alphabet/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   urlAlphabet: () => (/* binding */ urlAlphabet)\n/* harmony export */ });\nconst urlAlphabet = 'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict';\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/nanoid/url-alphabet/index.js?");

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