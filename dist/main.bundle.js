"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\n.flex {\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  flex-direction: column;\\r\\n  width: 40%;\\r\\n  margin: auto;\\r\\n  border: 1px solid #e8e0e0;\\r\\n  margin-top: 10%;\\r\\n  border-radius: 10px;\\r\\n  box-shadow: 0 4px 30px 10px rgba(0, 0, 0, 0.2);\\r\\n}\\r\\n\\r\\nimg {\\r\\n  width: 18px;\\r\\n}\\r\\n\\r\\n.title-container {\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n  border: 1px solid #e8e0e0;\\r\\n  padding: 2%;\\r\\n}\\r\\n\\r\\n.title {\\r\\n  margin: 0;\\r\\n  font-size: 1.1rem;\\r\\n  font-weight: 600;\\r\\n}\\r\\n\\r\\n.reload {\\r\\n  width: 20px;\\r\\n}\\r\\n\\r\\n.input-container {\\r\\n  border: 1px solid #e8e0e0;\\r\\n  padding: 1%;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.add {\\r\\n  border: none;\\r\\n  font-size: 16px;\\r\\n  width: 90%;\\r\\n  background-color: inherit;\\r\\n}\\r\\n\\r\\n.add:focus-visible {\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.checkbox {\\r\\n  width: 20px;\\r\\n  margin: auto;\\r\\n}\\r\\n\\r\\n.edit {\\r\\n  background-color: #f7f782c4;\\r\\n}\\r\\n\\r\\n.input-container button {\\r\\n  padding: 12px;\\r\\n  border: none;\\r\\n  background-size: contain;\\r\\n  background-repeat: no-repeat;\\r\\n}\\r\\n\\r\\n.task-container {\\r\\n  border: 1px solid #e8e0e0;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\n.list {\\r\\n  list-style-type: none;\\r\\n  border: 1px solid #e8e0e0;\\r\\n  padding: 2%;\\r\\n  display: grid;\\r\\n  grid-template-columns: 6% 1fr 5%;\\r\\n  grid-template-rows: 1fr;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.list p {\\r\\n  margin: 0 0 0 2%;\\r\\n}\\r\\n\\r\\n.list .options {\\r\\n  justify-self: flex-end;\\r\\n}\\r\\n\\r\\n.remove {\\r\\n  background-color: #fff;\\r\\n  padding: 3%;\\r\\n  border: 1px solid #e8e0e0;\\r\\n  border-radius: 0 0 10px 10px;\\r\\n}\\r\\n\\r\\n.crossed {\\r\\n  text-decoration-line: line-through;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_displayList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/displayList.js */ \"./src/modules/displayList.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _images_enter_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/enter.jpg */ \"./src/images/enter.jpg\");\n/* harmony import */ var _images_reload_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/reload.png */ \"./src/images/reload.png\");\n\n\n\n\n\nconst reloadImage = document.querySelector('.reload');\nreloadImage.src = _images_reload_png__WEBPACK_IMPORTED_MODULE_3__;\n_modules_displayList_js__WEBPACK_IMPORTED_MODULE_0__.submitBtn.style.backgroundImage = `url('${_images_enter_jpg__WEBPACK_IMPORTED_MODULE_2__}')`;\n\n(0,_modules_displayList_js__WEBPACK_IMPORTED_MODULE_0__.displayList)();\n(0,_modules_displayList_js__WEBPACK_IMPORTED_MODULE_0__.addList)();\n(0,_modules_displayList_js__WEBPACK_IMPORTED_MODULE_0__.editTask)();\n(0,_modules_displayList_js__WEBPACK_IMPORTED_MODULE_0__.deleteAll)();\n(0,_modules_displayList_js__WEBPACK_IMPORTED_MODULE_0__.reload)();\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/checkbox.js":
/*!*********************************!*\
  !*** ./src/modules/checkbox.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Status {\n  constructor(state = false) {\n    this.state = state;\n  }\n\n  current() {\n    return this.state;\n  }\n\n  on() {\n    this.state = true;\n    return this.state;\n  }\n\n  off() {\n    this.state = false;\n    return this.state;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Status);\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/checkbox.js?");

/***/ }),

/***/ "./src/modules/displayList.js":
/*!************************************!*\
  !*** ./src/modules/displayList.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addList\": () => (/* binding */ addList),\n/* harmony export */   \"deleteAll\": () => (/* binding */ deleteAll),\n/* harmony export */   \"displayList\": () => (/* binding */ displayList),\n/* harmony export */   \"editTask\": () => (/* binding */ editTask),\n/* harmony export */   \"reload\": () => (/* binding */ reload),\n/* harmony export */   \"submitBtn\": () => (/* binding */ submitBtn)\n/* harmony export */ });\n/* harmony import */ var _images_completed_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/completed.png */ \"./src/images/completed.png\");\n/* harmony import */ var _images_checkBox_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/checkBox.png */ \"./src/images/checkBox.png\");\n/* harmony import */ var _images_threeDots_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/threeDots.png */ \"./src/images/threeDots.png\");\n/* harmony import */ var _images_trash_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/trash.png */ \"./src/images/trash.png\");\n/* harmony import */ var _checkbox_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./checkbox.js */ \"./src/modules/checkbox.js\");\n\n// eslint-disable-next-line import/no-unresolved, import/no-extraneous-dependencies\n\n\n\n\n\nlet tasks = JSON.parse(localStorage.getItem('tasks')) || [];\n\nconst setLocalStorage = () => localStorage.setItem('tasks', JSON.stringify(tasks));\n\nconst listContainer = document.querySelector('.task-container');\n\nconst displayList = () => {\n  listContainer.innerHTML = '';\n  tasks.forEach((task, index) => {\n    let checkTask;\n    let crossed;\n    if (task.completed) {\n      checkTask = _images_completed_png__WEBPACK_IMPORTED_MODULE_0__;\n      crossed = 'crossed';\n    } else checkTask = _images_checkBox_png__WEBPACK_IMPORTED_MODULE_1__;\n\n    task.id = index + 1;\n    const list = document.createElement('li');\n    list.classList.add('list');\n    list.innerHTML = ` <img class='checkbox' src='${checkTask}'> <p class='task-description ${crossed}'>${task.description}</p> <img class='options' src='${_images_threeDots_png__WEBPACK_IMPORTED_MODULE_2__}'> `;\n    listContainer.appendChild(list);\n  });\n};\ndisplayList();\n\nconst optionBtn = document.getElementsByClassName('options');\nconst taskDescription = document.getElementsByClassName('task-description');\nconst listElem = document.getElementsByClassName('list');\nconst checked = document.getElementsByClassName('checkbox');\n\nconst onTaskDescriptionClick = (i) => {\n  taskDescription[i].innerHTML = `<input class=\"add\" id=\"edit-input\" type=\"text\" value=\"${tasks[i].description}\"></input>`;\n  optionBtn[i].src = _images_trash_png__WEBPACK_IMPORTED_MODULE_3__;\n  listElem[i].classList.add('edit');\n  const editInput = document.querySelector('#edit-input');\n  editInput.focus();\n  editInput.addEventListener('change', () => {\n    tasks[i].description = editInput.value;\n    setLocalStorage();\n  });\n  editInput.addEventListener('blur', () => {\n    setTimeout(displayList, 232);\n    setTimeout(editTask, 232);\n  });\n};\n\nconst onCheckedClick = (i) => {\n  const checkStatus = new _checkbox_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](tasks[i].completed);\n  if (!tasks[i].completed) {\n    tasks[i].completed = checkStatus.on();\n  } else {\n    tasks[i].completed = checkStatus.off();\n  }\n  displayList();\n  setLocalStorage();\n  editTask();\n};\n\nconst onOptionBtnClick = (i) => {\n  if (optionBtn[i].src !== _images_threeDots_png__WEBPACK_IMPORTED_MODULE_2__) {\n    tasks.splice(i, 1);\n    displayList();\n    setLocalStorage();\n    editTask();\n  }\n};\n\nconst editTask = () => {\n  Array.from(optionBtn).forEach((btn, i) => {\n    taskDescription[i].addEventListener('click', () => onTaskDescriptionClick(i));\n    checked[i].addEventListener('click', () => onCheckedClick(i));\n    btn.addEventListener('click', () => onOptionBtnClick(i));\n  });\n};\n\neditTask();\n\nconst submitBtn = document.querySelector('#submitBtn');\nconst addInput = document.querySelector('.add');\n\nconst addList = () => {\n  submitBtn.addEventListener('click', (e) => {\n    e.preventDefault();\n    const newTask = {\n      description: addInput.value,\n      completed: false,\n      id: tasks.length + 1,\n    };\n    tasks.push(newTask);\n    setLocalStorage();\n    displayList();\n    editTask();\n    addInput.value = '';\n  });\n};\nconst removeBtn = document.querySelector('.remove');\n\nconst deleteAll = () => {\n  removeBtn.addEventListener('click', () => {\n    tasks = tasks.filter((t) => !t.completed);\n    displayList();\n    setLocalStorage();\n    editTask();\n  });\n};\ndeleteAll();\n\nconst reload = () => {\n  document.querySelector('.reload').addEventListener('click', () => {\n    listContainer.innerHTML = '';\n    setTimeout(displayList, 100);\n    setTimeout(editTask, 100);\n  });\n};\nreload();\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/displayList.js?");

/***/ }),

/***/ "./src/images/checkBox.png":
/*!*********************************!*\
  !*** ./src/images/checkBox.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/checkBox.png\";\n\n//# sourceURL=webpack://to-do-list/./src/images/checkBox.png?");

/***/ }),

/***/ "./src/images/completed.png":
/*!**********************************!*\
  !*** ./src/images/completed.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/completed.png\";\n\n//# sourceURL=webpack://to-do-list/./src/images/completed.png?");

/***/ }),

/***/ "./src/images/enter.jpg":
/*!******************************!*\
  !*** ./src/images/enter.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/enter.jpg\";\n\n//# sourceURL=webpack://to-do-list/./src/images/enter.jpg?");

/***/ }),

/***/ "./src/images/reload.png":
/*!*******************************!*\
  !*** ./src/images/reload.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/reload.png\";\n\n//# sourceURL=webpack://to-do-list/./src/images/reload.png?");

/***/ }),

/***/ "./src/images/threeDots.png":
/*!**********************************!*\
  !*** ./src/images/threeDots.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/threeDots.png\";\n\n//# sourceURL=webpack://to-do-list/./src/images/threeDots.png?");

/***/ }),

/***/ "./src/images/trash.png":
/*!******************************!*\
  !*** ./src/images/trash.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/trash.png\";\n\n//# sourceURL=webpack://to-do-list/./src/images/trash.png?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);