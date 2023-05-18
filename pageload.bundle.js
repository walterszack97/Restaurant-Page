"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["pageload"],{

/***/ "./src/pageload.js":
/*!*************************!*\
  !*** ./src/pageload.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pageLoad\": () => (/* binding */ pageLoad)\n/* harmony export */ });\nconst pageLoad = () => {\n  console.log(\"pageload working\");\n\n  const body = document.querySelector(\"body\");\n  const contentContainer = document.createElement(\"div\");\n  contentContainer.setAttribute(\"id\", \"content\");\n\n  body.appendChild(contentContainer);\n\n  const mainpageContainer = document.createElement(\"div\");\n  mainpageContainer.setAttribute(\"id\", \"mainpage-container\");\n  contentContainer.appendChild(mainpageContainer);\n\n  const headerContainer = document.createElement(\"div\");\n  headerContainer.setAttribute(\"class\", \"header-container large-font\");\n  mainpageContainer.appendChild(headerContainer);\n\n  const headerFrame = document.createElement(\"div\");\n  headerFrame.setAttribute(\"class\", \"frame\");\n  headerFrame.setAttribute(\"id\", \"header\");\n  headerFrame.innerText = \"BOBS BURGERS\";\n  headerContainer.appendChild(headerFrame);\n\n  const navContainer = document.createElement(\"div\");\n  navContainer.setAttribute(\"id\", \"navContainer\");\n  mainpageContainer.append(navContainer);\n\n  const navBar = document.createElement(\"div\");\n  navBar.setAttribute(\"id\", \"navBar\");\n  navContainer.appendChild(navBar);\n\n  const mediumP1 = document.createElement(\"p\");\n  mediumP1.setAttribute(\"class\", \"medium-font\");\n  const mediumP2 = document.createElement(\"p\");\n  mediumP2.setAttribute(\"class\", \"medium-font\");\n  const mediumP3 = document.createElement(\"p\");\n  mediumP3.setAttribute(\"class\", \"medium-font\");\n\n  mediumP1.innerHTML = \"HOME\";\n  mediumP2.innerHTML = \"MENU\";\n  mediumP3.innerHTML = \"CONTACT\";\n\n  navBar.appendChild(mediumP1);\n  navBar.appendChild(mediumP2);\n  navBar.appendChild(mediumP3);\n};\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/pageload.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/pageload.js"));
/******/ }
]);