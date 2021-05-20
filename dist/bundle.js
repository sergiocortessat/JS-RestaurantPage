/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// ABOUT\nvar aboutMe = function aboutMe() {\n  var about = document.createElement('div');\n  about.classList.add('about');\n  about.innerHTML = \"\\n  <div>\\n  <div class='mx-auto d-flex flex-column text-center'>\\n    <div class='mx-auto'>\\n      <p class='my-4'>Phone: +964 770 8272458</p>\\n      <a href=\\\"mailto:sergiocortessat@gmail.com\\\" class='my-2 text-decoration-none link-dark'>Email: sergiocortessat@gmail.com</a>\\n    </div>\\n    <div class=\\\"mx-auto form\\\">\\n        <form name = \\\"contactme\\\" onsubmit=\\\"return false\\\">\\n          <h3><i class=\\\"\\\"></i>Contact us</h3>\\n          <div class=\\\"\\\">\\n            <span>Name</span><br>\\n            <input class='form-control'  type=\\\"text\\\" required />\\n          </div>\\n          <div class=\\\"my-3\\\">\\n            <span>Email</span><br>\\n            <input class='form-control' type=\\\"text\\\" required />\\n          </div>\\n          <div class=\\\"my-3\\\">\\n            <span>Type your message...</span><br>\\n            <textarea class='form-control'  required></textarea>\\n          </div>\\n          <input class='btn btn-dark my-3 mx-auto' type=\\\"submit\\\" value=\\\"Send\\\" id = \\\"btn\\\" />\\n        </form>\\n      </div>\\n  </div>\\n  </div>\";\n  return about;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (aboutMe);\n\n//# sourceURL=webpack://JS-RestaurantPage/./src/about.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar footerFun = function footerFun() {\n  var footer = document.createElement('footer');\n  footer.classList.add('footer');\n  footer.innerHTML = \"\\n<div class=\\\"text-center\\\">\\n  <span class=\\\"\\\">&copy; Sergio Cortes 2021</span>\\n</div>\";\n  return footer;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footerFun);\n\n//# sourceURL=webpack://JS-RestaurantPage/./src/footer.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// NAVBAR\nvar navBar = function navBar() {\n  var nav = document.createElement('nav');\n  nav.classList.add('navbar-light', 'navbar-style', 'd-flex', 'justify-content-center');\n  nav.innerHTML = \"\\n<ul class=\\\"navbar-nav flex-row\\\">\\n<li class=\\\"nav-item mx-2\\\"> <a class='nav-link' href=\\\"#\\\">HOME</a> </li>\\n<li class=\\\"nav-item mx-2\\\"> <a class='nav-link' href=\\\"#\\\">MENU</a> </li>\\n<li class=\\\"nav-item mx-2\\\"> <a class='nav-link' href=\\\"#\\\">CONTACT</a> </li>\\n</ul>\\n\";\n  return nav;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navBar);\n\n//# sourceURL=webpack://JS-RestaurantPage/./src/header.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// HOME\nvar indexHome = function indexHome() {\n  var home = document.createElement('div');\n  home.classList.add('home');\n  var infoDiv = document.createElement('div');\n  infoDiv.classList.add('d-flex', 'flex-column', 'justify-content-center', 'menu');\n  var nameDiv = document.createElement('div');\n  var nameInfo = document.createElement('h3');\n  nameDiv.classList.add('nameDivPositioning');\n  nameInfo.textContent = 'SQUANCHY SUPER RESTAURANT WITH MULAN SZECHUAN SAUCE';\n  nameDiv.appendChild(nameInfo);\n  infoDiv.appendChild(nameDiv);\n  var detailsDiv = document.createElement('div');\n  detailsDiv.classList.add('d-flex', 'justify-content-evenly', 'mt-5');\n  var hoursDiv = document.createElement('div');\n  var mainHoursHeader = document.createElement('h3');\n  mainHoursHeader.innerHTML = 'Hours';\n  hoursDiv.appendChild(mainHoursHeader);\n  var mainHoursContent = document.createElement('p');\n  mainHoursContent.innerHTML = \"\\n  Sunday: 8am - 8pm</br>\\n  Monday: 6am - 6pm</br>\\n  Tuesday: 6am - 6pm</br>\\n  Wednesday: 6am - 6pm</br>\\n  Thursday: 6am - 10pm</br>\\n  Friday: 6am - 10pm</br>\\n  Saturday: 8am - 10pm</br>\";\n  hoursDiv.appendChild(mainHoursContent);\n  var locationDiv = document.createElement('div');\n  var mainLocationHeader = document.createElement('h3');\n  mainLocationHeader.innerHTML = 'Location';\n  locationDiv.appendChild(mainLocationHeader);\n  var mainLocation = document.createElement('p');\n  mainLocation.innerHTML = 'Just Somewhere Nice.';\n  locationDiv.appendChild(mainLocation);\n  detailsDiv.appendChild(hoursDiv);\n  detailsDiv.appendChild(locationDiv);\n  infoDiv.append(detailsDiv);\n  home.appendChild(infoDiv);\n  return home;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (indexHome);\n\n//# sourceURL=webpack://JS-RestaurantPage/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _images_background_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/background.jpg */ \"./src/images/background.jpg\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\n\n\n\n\n\n // APPEND CHILDS\n\nvar footer = (0,_footer__WEBPACK_IMPORTED_MODULE_3__.default)();\nvar content = document.querySelector('.content');\nvar cardWrapper = (0,_menu__WEBPACK_IMPORTED_MODULE_4__.default)();\nvar about = (0,_about__WEBPACK_IMPORTED_MODULE_5__.default)();\nvar home = (0,_home__WEBPACK_IMPORTED_MODULE_6__.default)();\ncontent.classList.add('background-image');\ncontent.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_2__.default)());\ncontent.appendChild(home);\ncontent.appendChild(footer);\n\nvar btn = function btn() {\n  document.contactme.reset();\n}; // NAVBAR TOOGLE PAGES\n\n\nvar toogle = document.querySelectorAll('.nav-link');\ntoogle.forEach(function (button) {\n  button.addEventListener('click', function (e) {\n    if (e.target.textContent === 'MENU') {\n      cardWrapper.classList.remove('d-none');\n      about.classList.add('d-none');\n      home.classList.add('d-none');\n      content.appendChild(cardWrapper);\n      content.appendChild(footer);\n    } else if (e.target.textContent === 'HOME') {\n      home.classList.remove('d-none');\n      about.classList.add('d-none');\n      cardWrapper.classList.add('d-none');\n      content.appendChild(home);\n      content.appendChild(footer);\n    } else if (e.target.textContent === 'CONTACT') {\n      cardWrapper.classList.add('d-none');\n      home.classList.add('d-none');\n      about.classList.remove('d-none');\n      content.appendChild(about);\n      document.querySelector('#btn').addEventListener('click', btn);\n      content.appendChild(footer);\n    }\n  });\n});\n\n//# sourceURL=webpack://JS-RestaurantPage/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// MENU\nvar wrapper = function wrapper() {\n  var cardWrapper = document.createElement('div');\n  var card1 = document.createElement('div');\n  var card2 = document.createElement('div');\n  cardWrapper.classList.add('card-wrapper');\n  card1.classList.add('card', 'card1');\n  card2.classList.add('card', 'card2');\n  card1.innerHTML = \"\\n<div class=\\\"card-group\\\">\\n<div class=\\\"card\\\">\\n  <img class=\\\"card-img-top img-fluid\\\" src='https://i.redd.it/nvxvg5a1jec51.jpg' alt=\\\"Card image cap\\\">\\n  <div class=\\\"card-body\\\">\\n    <h5 class=\\\"card-title\\\">Rick Schezuan Nuggets</h5>\\n    <p class=\\\"card-text\\\">The Rick Szechuan nuggets are a delightful creation inspired by the rick and Morty show Szechuan McNuggets. This delightful flavor with immerse your senses.</p>\\n    <p class=\\\"card-text\\\"><small class=\\\"text-muted\\\">May containt traces of meat</small></p>\\n  </div>\\n</div>\\n<div class=\\\"card\\\">\\n  <img class=\\\"card-img-top\\\" src='https://amazingribs.com/wp-content/uploads/2020/10/chateaubriand-570.jpg' alt=\\\"Card image cap\\\">\\n  <div class=\\\"card-body\\\">\\n    <h5 class=\\\"card-title\\\">Morty Mignon with some meat</h5>\\n    <p class=\\\"card-text\\\">The Morty Filet Mignon is a special, delightful, and tender cut, seasoned with the finest herbs and cook slowly with a demiglace sauce to enrich your flavors.</p>\\n    <p class=\\\"card-text\\\"><small class=\\\"text-muted\\\">May contains traces of meat</small></p>\\n  </div>\\n</div>\\n</div>\";\n  card2.innerHTML = \"\\n<div class=\\\"card-group\\\">\\n            <div class=\\\"card\\\">\\n              <img class=\\\"card-img-top\\\" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcHQemRTiJs637POrGOxfkRD4JgbzEEp69WQ&usqp=CAU' alt=\\\"Card image cap\\\">\\n              <div class=\\\"card-body\\\">\\n                <h5 class=\\\"card-title\\\">Jerry Picanha Gostosa</h5>\\n                <p class=\\\"card-text\\\">The Jerry Picanha Gostosa is a special, delightful, and tender Brazilian meat cut, seasoned with the finest herbs and Mango sauce.</p>\\n                <p class=\\\"card-text\\\"><small class=\\\"text-muted\\\">May contains traces of meat</small></p>\\n              </div>\\n            </div>\\n            <div class=\\\"card\\\">\\n              <img class=\\\"card-img-top\\\" src='https://www.tipsyvariedades.xyz/wp-content/uploads/2019/09/Cocina-unos-ricos-tacos-mexicanos.jpg' alt=\\\"Card image cap\\\">\\n              <div class=\\\"card-body\\\">\\n                <h5 class=\\\"card-title\\\">Summer Tacos Calientes</h5>\\n                <p class=\\\"card-text\\\">The Summer Tacos Calientes is our special and renoun Mexican dish. Even Mexican love them. Tender tortillas stuff with taco stuff.</p>\\n                <p class=\\\"card-text\\\"><small class=\\\"text-muted\\\">It may contain traces of meat and Mexican prayers</small></p>\\n              </div>\\n            </div>\\n          </div>\";\n  cardWrapper.appendChild(card1);\n  cardWrapper.appendChild(card2);\n  return cardWrapper;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wrapper);\n\n//# sourceURL=webpack://JS-RestaurantPage/./src/menu.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _images_background_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/background.jpg */ \"./src/images/background.jpg\");\n// Imports\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_images_background_jpg__WEBPACK_IMPORTED_MODULE_2__);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".background-image {\\n  height: 100vh;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-repeat: no-repeat;\\n  background-attachment: fixed;\\n  display: flex;\\n  flex-direction: column;\\n  object-fit: cover;\\n}\\n\\n.navbar-style {\\n  width: 20%;\\n  margin: 0 auto auto auto;\\n  background: #d6c99c;\\n  opacity: 0.8;\\n  border-radius: 20% 25%;\\n}\\n\\n.card {\\n  max-width: 45%;\\n  margin: 0 auto;\\n  background-color: transparent !important;\\n  font-size: 0.75vw;\\n}\\n\\n.card-body {\\n  background-color: #d6c99c;\\n  opacity: 0.9;\\n}\\n\\n.card-wrapper {\\n  width: 70%;\\n  margin: 0 auto;\\n  padding-bottom: 25px;\\n  padding-top: 20px;\\n}\\n\\n.card-img-top {\\n  height: 200px;\\n}\\n\\n.home {\\n  background-color: #d6c99c;\\n  height: 100%;\\n  margin: 50px auto;\\n  opacity: 0.8;\\n  border: solid 3px black;\\n  border-radius: 2% 25%;\\n  max-width: 750px;\\n  min-width: 10%;\\n  width: 90%;\\n}\\n\\n.footer {\\n  margin: 0 auto;\\n  width: 100%;\\n  background: #d6c99c;\\n  opacity: 0.9;\\n  bottom: 0;\\n}\\n\\n.footer > div {\\n  height: 100%;\\n  display: flex;\\n  justify-content: center;\\n}\\n\\n.about {\\n  background-color: #d6c99c;\\n  margin: 50px auto;\\n  opacity: 0.9;\\n  border: solid 3px black;\\n  border-radius: 25% 2%;\\n  max-width: 750px;\\n  width: 90%;\\n  height: 100vh;\\n}\\n\\n.form {\\n  margin-top: 10%;\\n}\\n\\n.menu {\\n  position: relative;\\n  right: 10px;\\n  top: 15%;\\n}\\n\\n.nameDivPositioning {\\n  text-align: center;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://JS-RestaurantPage/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://JS-RestaurantPage/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== \"string\") {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://JS-RestaurantPage/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://JS-RestaurantPage/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://JS-RestaurantPage/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/images/background.jpg":
/*!***********************************!*\
  !*** ./src/images/background.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a39f68d10b7d324dc079.jpg\";\n\n//# sourceURL=webpack://JS-RestaurantPage/./src/images/background.jpg?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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