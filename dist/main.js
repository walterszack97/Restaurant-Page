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

/***/ "./src/contactpage.js":
/*!****************************!*\
  !*** ./src/contactpage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderContactPage\": () => (/* binding */ renderContactPage)\n/* harmony export */ });\nconst renderContactPage = () => {\n  const mainContainer = document.querySelector(\"#mainpage-container\");\n  const contactContent = document.createElement(\"div\");\n  contactContent.setAttribute(\"id\", \"contactContent\");\n  mainContainer.appendChild(contactContent);\n\n  const contactContainers = document.createElement(\"div\");\n  contactContainers.setAttribute(\"class\", \"homeContainers frame\");\n  contactContent.appendChild(contactContainers);\n\n  const about = document.createElement(\"div\");\n  about.setAttribute(\"id\", \"about\");\n  contactContainers.appendChild(about);\n\n  var mainInfo = document.createElement(\"p\");\n  mainInfo.setAttribute(\"class\", \"large-font\");\n  mainInfo.innerText = \"OCEAN AVE, NJ\";\n  contactContainers.appendChild(mainInfo);\n\n  var mainInfo = document.createElement(\"p\");\n  mainInfo.setAttribute(\"class\", \"large-font\");\n  mainInfo.innerText = \"(###)-###-####\";\n  contactContainers.appendChild(mainInfo);\n};\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/contactpage.js?");

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderHomepage\": () => (/* binding */ renderHomepage)\n/* harmony export */ });\n/* harmony import */ var _imgs_familyImg_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imgs/familyImg.png */ \"./src/imgs/familyImg.png\");\n/* harmony import */ var _imgs_familyImg_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_imgs_familyImg_png__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst renderHomepage = () => {\n  const mainContainer = document.querySelector(\"#mainpage-container\");\n  const homeContent = document.createElement(\"div\");\n  homeContent.setAttribute(\"id\", \"homeContent\");\n  mainContainer.appendChild(homeContent);\n\n  const homeContainers = document.createElement(\"div\");\n  homeContainers.setAttribute(\"class\", \"homeContainers\");\n  homeContent.appendChild(homeContainers);\n\n  const about = document.createElement(\"div\");\n  about.setAttribute(\"id\", \"about\");\n  homeContainers.appendChild(about);\n\n  const familyImg = new Image();\n  familyImg.setAttribute(\"id\", \"family_pic\");\n  familyImg.src = (_imgs_familyImg_png__WEBPACK_IMPORTED_MODULE_0___default());\n  about.appendChild(familyImg);\n\n  const mainInfo = document.createElement(\"p\");\n  mainInfo.setAttribute(\"id\", \"mainInfo\");\n  mainInfo.setAttribute(\"class\", \"info\");\n  mainInfo.innerText =\n    \"Though their menu is reflective of the restaurant's simple nature, the food is without frills and gimmicks, nor cheap shortcuts in quality. Rather than use pre-ground meat as the basis for his burgers, Bob instead uses choice cuts of beef in his mainstay's consistency.\";\n  homeContainers.appendChild(mainInfo);\n\n  const aboutInfo = document.createElement(\"div\");\n  aboutInfo.setAttribute(\"class\", \"homeContainers frame\");\n  aboutInfo.setAttribute(\"id\", \"aboutInfo\");\n  homeContent.appendChild(aboutInfo);\n\n  const hoursHeader = document.createElement(\"div\");\n  hoursHeader.setAttribute(\"class\", \"header\");\n  hoursHeader.setAttribute(\"id\", \"frame\");\n  hoursHeader.innerHTML = \"HOURS\";\n  aboutInfo.appendChild(hoursHeader);\n\n  const info = document.createElement(\"div\");\n  info.setAttribute(\"class\", \"info\");\n  aboutInfo.appendChild(info);\n\n  const hours1 = document.createElement(\"p\");\n  const hours2 = document.createElement(\"p\");\n  hours1.innerHTML = \"Sun - Thurs: 11:30am - 8pm\";\n  hours2.innerHTML = \"Fri and Sat: 11:30am - 9pm\";\n  info.appendChild(hours1);\n  info.appendChild(hours2);\n\n  const locationInfo = document.createElement(\"div\");\n  locationInfo.setAttribute(\"class\", \"homeContainers frame\");\n  locationInfo.setAttribute(\"id\", \"locationInfo\");\n  homeContent.appendChild(locationInfo);\n\n  const locationHeader = document.createElement(\"div\");\n  locationHeader.setAttribute(\"class\", \"header\");\n  locationHeader.setAttribute(\"id\", \"location\");\n  locationHeader.innerHTML = \"LOCATION\";\n  locationInfo.appendChild(locationHeader);\n\n  const locationAdress = document.createElement(\"div\");\n  locationAdress.setAttribute(\"class\", \"info\");\n  locationAdress.innerHTML = \"Ocean Avenue in Seymour's Bay, New Jersey\";\n  locationInfo.appendChild(locationAdress);\n};\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/homepage.js?");

/***/ }),

/***/ "./src/imgs/familyImg.png":
/*!********************************!*\
  !*** ./src/imgs/familyImg.png ***!
  \********************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack://restaurant-page/./src/imgs/familyImg.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pageload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageload */ \"./src/pageload.js\");\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n\n\n\nconsole.log(\"working\");\n(0,_pageload__WEBPACK_IMPORTED_MODULE_1__.pageLoad)();\n(0,_homepage__WEBPACK_IMPORTED_MODULE_2__.renderHomepage)();\n\nconst navBar = document.querySelector(\"#navBar\");\nnavBar.addEventListener(\"click\", (0,_pageload__WEBPACK_IMPORTED_MODULE_1__.pageSelect)());\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menupage.js":
/*!*************************!*\
  !*** ./src/menupage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderMenuPage\": () => (/* binding */ renderMenuPage)\n/* harmony export */ });\nconst renderMenuPage = () => {\n  const mainContainer = document.querySelector(\"#mainpage-container\");\n  const menuContent = document.createElement(\"div\");\n  menuContent.setAttribute(\"id\", \"menuContent\");\n  mainContainer.appendChild(menuContent);\n\n  const burgerContainer = document.createElement(\"div\");\n  burgerContainer.setAttribute(\"id\", \"burgerArea\");\n  burgerContainer.setAttribute(\"class\", \"foodArea homeContainers frame\");\n  menuContent.appendChild(burgerContainer);\n\n  var foodTitle = document.createElement(\"p\");\n  foodTitle.setAttribute(\"id\", \"foodTitle\");\n  foodTitle.textContent = \"BURGERS\";\n\n  burgerContainer.appendChild(foodTitle);\n  var burgerOption = document.createElement(\"div\");\n  burgerOption.setAttribute(\"class\", \"burgerSelection\");\n  burgerContainer.appendChild(burgerOption);\n\n  var burgerHeader = document.createElement(\"p\");\n  var burgerFooter = document.createElement(\"p\");\n  burgerHeader.setAttribute(\"class\", \"foodHeader\");\n  burgerFooter.setAttribute(\"class\", \"foodFooter\");\n  burgerHeader.textContent = \"5.95 ORIGINAL\";\n  burgerFooter.textContent = \"THE CLASSIC\";\n\n  burgerOption.appendChild(burgerHeader);\n  burgerOption.appendChild(burgerFooter);\n\n  var burgerOption = document.createElement(\"div\");\n  burgerOption.setAttribute(\"class\", \"burgerSelection\");\n  burgerHeader = document.createElement(\"p\");\n  burgerFooter = document.createElement(\"p\");\n  burgerHeader.setAttribute(\"class\", \"foodHeader\");\n  burgerFooter.setAttribute(\"class\", \"foodFooter\");\n  burgerHeader.textContent = \"5.95  DONT YOU FOUR CHEDDAR 'BOUT ME\";\n  burgerFooter.textContent = \"COMES WITH FOUR KINDS OF CHEDDAR\";\n  burgerOption.appendChild(burgerHeader);\n  burgerOption.appendChild(burgerFooter);\n  burgerContainer.appendChild(burgerOption);\n\n  var burgerOption = document.createElement(\"div\");\n  burgerOption.setAttribute(\"class\", \"burgerSelection\");\n  burgerHeader = document.createElement(\"p\");\n  burgerFooter = document.createElement(\"p\");\n  burgerHeader.setAttribute(\"class\", \"foodHeader\");\n  burgerFooter.setAttribute(\"class\", \"foodFooter\");\n  burgerHeader.textContent = \"5.95 SWEET HOME AVACADO\";\n  burgerFooter.textContent = \"COMES WITH AVACADO\";\n  burgerOption.appendChild(burgerHeader);\n  burgerOption.appendChild(burgerFooter);\n  burgerContainer.appendChild(burgerOption);\n\n  var burgerOption = document.createElement(\"div\");\n  burgerOption.setAttribute(\"class\", \"burgerSelection\");\n  burgerHeader = document.createElement(\"p\");\n  burgerFooter = document.createElement(\"p\");\n  burgerHeader.setAttribute(\"class\", \"foodHeader\");\n  burgerFooter.setAttribute(\"class\", \"foodFooter\");\n  burgerHeader.textContent = \"5.95 EGGERS CAN'T BE CHEESERS\";\n  burgerFooter.textContent = \"COMES WITH AN EGG\";\n  burgerOption.appendChild(burgerHeader);\n  burgerOption.appendChild(burgerFooter);\n  burgerContainer.appendChild(burgerOption);\n\n  var burgerOption = document.createElement(\"div\");\n  burgerOption.setAttribute(\"class\", \"burgerSelection\");\n  burgerHeader = document.createElement(\"p\");\n  burgerFooter = document.createElement(\"p\");\n  burgerHeader.setAttribute(\"class\", \"foodHeader\");\n  burgerFooter.setAttribute(\"class\", \"foodFooter\");\n  burgerHeader.textContent = \"5.95 GOURDON HAMSEY\";\n  burgerFooter.textContent = \"COMES WITH HAM\";\n  burgerOption.appendChild(burgerHeader);\n  burgerOption.appendChild(burgerFooter);\n  burgerContainer.appendChild(burgerOption);\n\n  var burgerOption = document.createElement(\"div\");\n  burgerOption.setAttribute(\"class\", \"burgerSelection\");\n  burgerHeader = document.createElement(\"p\");\n  burgerFooter = document.createElement(\"p\");\n  burgerHeader.setAttribute(\"class\", \"foodHeader\");\n  burgerFooter.setAttribute(\"class\", \"foodFooter\");\n  burgerHeader.textContent = \"5.95 BURGER OF THE DAY\";\n  burgerFooter.textContent = \"CHECK THE BOARD OR ASK AN EMPLOYEE\";\n  burgerOption.appendChild(burgerHeader);\n  burgerOption.appendChild(burgerFooter);\n  burgerContainer.appendChild(burgerOption);\n\n  const sidesContainer = document.createElement(\"div\");\n  sidesContainer.setAttribute(\"id\", \"sidesArea\");\n  sidesContainer.setAttribute(\"class\", \"foodArea homeContainers frame\");\n  menuContent.appendChild(sidesContainer);\n\n  var foodTitle = document.createElement(\"p\");\n  foodTitle.setAttribute(\"id\", \"foodTitle\");\n  foodTitle.textContent = \"SIDES\";\n  sidesContainer.appendChild(foodTitle);\n\n  var sidesOption = document.createElement(\"div\");\n  sidesOption.setAttribute(\"class\", \"sidesSelection\");\n  sidesContainer.appendChild(sidesOption);\n\n  var sidesHeader = document.createElement(\"p\");\n  sidesHeader.setAttribute(\"class\", \"foodHeader\");\n  sidesHeader.textContent = \"1.50 FRIES\";\n  sidesOption.appendChild(sidesHeader);\n\n  var sidesOption = document.createElement(\"div\");\n  sidesOption.setAttribute(\"class\", \"sidesSelection\");\n  sidesHeader = document.createElement(\"p\");\n  sidesHeader.setAttribute(\"class\", \"foodHeader\");\n  sidesHeader.textContent = \"2.00 ONION RINGS\";\n  sidesOption.appendChild(sidesHeader);\n  sidesContainer.appendChild(sidesOption);\n\n  var sidesOption = document.createElement(\"div\");\n  sidesOption.setAttribute(\"class\", \"sidesSelection\");\n  sidesHeader = document.createElement(\"p\");\n  sidesHeader.setAttribute(\"class\", \"foodHeader\");\n  sidesHeader.textContent = \"1.50 CHIPS\";\n  sidesOption.appendChild(sidesHeader);\n  sidesContainer.appendChild(sidesOption);\n\n  var sidesOption = document.createElement(\"div\");\n  sidesOption.setAttribute(\"class\", \"sidesSelection\");\n  sidesHeader = document.createElement(\"p\");\n  sidesHeader.setAttribute(\"class\", \"foodHeader\");\n  sidesHeader.textContent = \"2.00 JALPENO POPPERS\";\n  sidesOption.appendChild(sidesHeader);\n  sidesContainer.appendChild(sidesOption);\n\n  var sidesOption = document.createElement(\"div\");\n  sidesOption.setAttribute(\"class\", \"sidesSelection\");\n  sidesHeader = document.createElement(\"p\");\n  sidesHeader.setAttribute(\"class\", \"foodHeader\");\n  sidesHeader.textContent = \"2.00 PRETZEL BITES\";\n  sidesOption.appendChild(sidesHeader);\n  sidesContainer.appendChild(sidesOption);\n\n  const drinksContainer = document.createElement(\"div\");\n  drinksContainer.setAttribute(\"id\", \"drinksArea\");\n  drinksContainer.setAttribute(\"class\", \"foodArea homeContainers frame\");\n  menuContent.appendChild(drinksContainer);\n\n  var foodTitle = document.createElement(\"p\");\n  foodTitle.setAttribute(\"id\", \"foodTitle\");\n  foodTitle.textContent = \"DRINKS\";\n  drinksContainer.appendChild(foodTitle);\n\n  var drinksHeader = document.createElement(\"p\");\n  drinksHeader.setAttribute(\"class\", \"foodHeader\");\n  drinksHeader.textContent = \"1.50 SOFT DRINKS\";\n  drinksContainer.appendChild(drinksHeader);\n\n  var drinksHeader = document.createElement(\"p\");\n  drinksHeader.setAttribute(\"class\", \"foodHeader\");\n  drinksHeader.textContent = \"1.50 COFFEE\";\n  drinksContainer.appendChild(drinksHeader);\n};\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menupage.js?");

/***/ }),

/***/ "./src/pageload.js":
/*!*************************!*\
  !*** ./src/pageload.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pageLoad\": () => (/* binding */ pageLoad),\n/* harmony export */   \"pageSelect\": () => (/* binding */ pageSelect)\n/* harmony export */ });\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n/* harmony import */ var _menupage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menupage */ \"./src/menupage.js\");\n/* harmony import */ var _contactpage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactpage */ \"./src/contactpage.js\");\n\n\n\n\nconst pageLoad = () => {\n  console.log(\"pageload working\");\n\n  const body = document.querySelector(\"body\");\n  const contentContainer = document.createElement(\"div\");\n  contentContainer.setAttribute(\"id\", \"content\");\n\n  body.appendChild(contentContainer);\n\n  const mainpageContainer = document.createElement(\"div\");\n  mainpageContainer.setAttribute(\"id\", \"mainpage-container\");\n  contentContainer.appendChild(mainpageContainer);\n\n  const headerContainer = document.createElement(\"div\");\n  headerContainer.setAttribute(\"class\", \"header-container large-font\");\n  mainpageContainer.appendChild(headerContainer);\n\n  const headerFrame = document.createElement(\"div\");\n  headerFrame.setAttribute(\"class\", \"frame\");\n  headerFrame.setAttribute(\"id\", \"header\");\n  headerFrame.innerText = \"BOBS BURGERS\";\n  headerContainer.appendChild(headerFrame);\n\n  const navContainer = document.createElement(\"div\");\n  navContainer.setAttribute(\"id\", \"navContainer\");\n  mainpageContainer.append(navContainer);\n\n  const navBar = document.createElement(\"div\");\n  navBar.setAttribute(\"id\", \"navBar\");\n  navContainer.appendChild(navBar);\n\n  const mediumP1 = document.createElement(\"p\");\n  mediumP1.setAttribute(\"class\", \"medium-font\");\n  mediumP1.setAttribute(\"id\", \"homeNav\");\n  const mediumP2 = document.createElement(\"p\");\n  mediumP2.setAttribute(\"class\", \"medium-font\");\n  mediumP2.setAttribute(\"id\", \"menuNav\");\n  const mediumP3 = document.createElement(\"p\");\n  mediumP3.setAttribute(\"class\", \"medium-font\");\n  mediumP3.setAttribute(\"id\", \"contactNav\");\n\n  mediumP1.innerHTML = \"HOME\";\n  mediumP2.innerHTML = \"MENU\";\n  mediumP3.innerHTML = \"CONTACT\";\n\n  navBar.appendChild(mediumP1);\n  navBar.appendChild(mediumP2);\n  navBar.appendChild(mediumP3);\n};\n\n//add event listeners to each navItem\nconst pageSelect = () => {\n  const navItems = document.querySelectorAll(\"#navBar\");\n  for (let i = 0; i < navItems.length; i++) {\n    navItems[i].addEventListener(\"click\", (event) => {\n      if (event.target.id == \"homeNav\") {\n        console.log(\"home\");\n        pageClear();\n        (0,_homepage__WEBPACK_IMPORTED_MODULE_0__.renderHomepage)();\n      } else if (event.target.id == \"menuNav\") {\n        console.log(\"menu\");\n        pageClear();\n        (0,_menupage__WEBPACK_IMPORTED_MODULE_1__.renderMenuPage)();\n      } else if (event.target.id == \"contactNav\") {\n        pageClear();\n        (0,_contactpage__WEBPACK_IMPORTED_MODULE_2__.renderContactPage)();\n        console.log(\"contact\");\n      }\n    });\n  }\n};\n\n//function to clear screen when changing\nconst pageClear = () => {\n  const homeContainer = document.querySelector(\"#homeContent\");\n  const menuContainer = document.querySelector(\"#menuContent\");\n  const contactContainer = document.querySelector(\"#contactContent\");\n  if (homeContainer) {\n    homeContainer.remove();\n  }\n  if (menuContainer) {\n    menuContainer.remove();\n  }\n  if (contactContainer) {\n    contactContainer.remove();\n  }\n};\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/pageload.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected character '@' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> @font-face {\\n|   font-family: bobsBold;\\n|   src: url(./fonts/BobsBurgers.ttf);\");\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?");

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