"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/graphExample";
exports.ids = ["pages/graphExample"];
exports.modules = {

/***/ "./pages/graphExample.js":
/*!*******************************!*\
  !*** ./pages/graphExample.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GraphExample)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst GET_ACTIVE_ITEMS = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`\n    {\n        activeItems(first: 5, where: { buyer: \"0x0000000000000000000000000000000000000000\" }) {\n            id\n            buyer\n            seller\n            nftAddress\n            tokenId\n            price\n        }\n    }\n`;\nfunction GraphExample() {\n    const { loading , error , data  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(GET_ACTIVE_ITEMS);\n    console.log(data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"hi\"\n    }, void 0, false, {\n        fileName: \"/Users/ashutoshjha/Documents/Blockchain/Solidity/lesson16/pages/graphExample.js\",\n        lineNumber: 19,\n        columnNumber: 12\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ncmFwaEV4YW1wbGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUE4QztBQUU5QyxNQUFNRSxnQkFBZ0IsR0FBR0QsK0NBQUcsQ0FBQzs7Ozs7Ozs7Ozs7QUFXN0IsQ0FBQztBQUVjLFNBQVNFLFlBQVksR0FBRztJQUNuQyxNQUFNLEVBQUVDLE9BQU8sR0FBRUMsS0FBSyxHQUFFQyxJQUFJLEdBQUUsR0FBR04sd0RBQVEsQ0FBQ0UsZ0JBQWdCLENBQUM7SUFDM0RLLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixJQUFJLENBQUM7SUFDakIscUJBQU8sOERBQUNHLEtBQUc7a0JBQUMsSUFBRTs7Ozs7WUFBTTtDQUN2QiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1uZnQtbWFya2V0cGxhY2UtZmNjLy4vcGFnZXMvZ3JhcGhFeGFtcGxlLmpzPzk0ZjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUXVlcnksIGdxbCB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiXG5cbmNvbnN0IEdFVF9BQ1RJVkVfSVRFTVMgPSBncWxgXG4gICAge1xuICAgICAgICBhY3RpdmVJdGVtcyhmaXJzdDogNSwgd2hlcmU6IHsgYnV5ZXI6IFwiMHgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwXCIgfSkge1xuICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIGJ1eWVyXG4gICAgICAgICAgICBzZWxsZXJcbiAgICAgICAgICAgIG5mdEFkZHJlc3NcbiAgICAgICAgICAgIHRva2VuSWRcbiAgICAgICAgICAgIHByaWNlXG4gICAgICAgIH1cbiAgICB9XG5gXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdyYXBoRXhhbXBsZSgpIHtcbiAgICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0gPSB1c2VRdWVyeShHRVRfQUNUSVZFX0lURU1TKVxuICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgcmV0dXJuIDxkaXY+aGk8L2Rpdj5cbn1cbiJdLCJuYW1lcyI6WyJ1c2VRdWVyeSIsImdxbCIsIkdFVF9BQ1RJVkVfSVRFTVMiLCJHcmFwaEV4YW1wbGUiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/graphExample.js\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/graphExample.js"));
module.exports = __webpack_exports__;

})();