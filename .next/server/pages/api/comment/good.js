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
exports.id = "pages/api/comment/good";
exports.ids = ["pages/api/comment/good"];
exports.modules = {

/***/ "deta":
/*!***********************!*\
  !*** external "deta" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("deta");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "./lib/deta.ts?1d02":
/*!*********************!*\
  !*** ./lib/deta.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initButtons\": () => (/* binding */ initButtons),\n/* harmony export */   \"pushButton\": () => (/* binding */ pushButton),\n/* harmony export */   \"getButtons\": () => (/* binding */ getButtons),\n/* harmony export */   \"postComment\": () => (/* binding */ postComment),\n/* harmony export */   \"goodComment\": () => (/* binding */ goodComment),\n/* harmony export */   \"getComments\": () => (/* binding */ getComments)\n/* harmony export */ });\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var deta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! deta */ \"deta\");\n/* harmony import */ var deta__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(deta__WEBPACK_IMPORTED_MODULE_1__);\n\n\n(0,dotenv__WEBPACK_IMPORTED_MODULE_0__.config)();\nconsole.log(\"PROJECT KEY :\", process.env.DEV_PROJECT_KEY);\nconst deta = (0,deta__WEBPACK_IMPORTED_MODULE_1__.Deta)(process.env.DEV_PROJECT_KEY);\nconst buttons = deta.Base(\"buttons\");\nconst comments = deta.Base(\"comments\");\n//buttons\nasync function initButtons(key, count = 0) {\n    const result = await buttons.put({\n        key,\n        count\n    });\n    return result;\n}\nasync function pushButton(key, count = 1) {\n    await buttons.update({\n        count: buttons.util.increment(count)\n    }, key);\n}\nasync function getButtons() {\n    const result = await buttons.fetch();\n    return result.items.reduce((p, v)=>{\n        p[v.key] = v;\n        return p;\n    }, {\n    });\n}\nasync function postComment(name, text) {\n    console.log(\"POST COMMENT !!!\", name, text);\n    const result = await comments.put({\n        name,\n        text,\n        good: 0,\n        createdAt: new Date().getTime()\n    });\n    return result;\n}\nasync function goodComment(key) {\n    const result = await comments.update({\n        good: comments.util.increment(1)\n    }, key);\n    return result;\n}\nconsole.log(\"get comments define \");\nasync function getComments() {\n    const result = await comments.fetch();\n    return result.items.map((item)=>{\n        return {\n            name: \"\",\n            text: \"\",\n            good: 0,\n            ...item\n        };\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvZGV0YS50cz8xNDEyIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQge2NvbmZpZ30gZnJvbSBcImRvdGVudlwiIDtcclxuaW1wb3J0IHsgRGV0YSB9IGZyb20gXCJkZXRhXCIgO1xyXG5cclxuY29uZmlnKCk7XHJcblxyXG5jb25zb2xlLmxvZyhcIlBST0pFQ1QgS0VZIDpcIixwcm9jZXNzLmVudi5ERVZfUFJPSkVDVF9LRVkpO1xyXG5cclxuY29uc3QgZGV0YSA9IERldGEocHJvY2Vzcy5lbnYuREVWX1BST0pFQ1RfS0VZKSA7XHJcblxyXG5jb25zdCBidXR0b25zID0gZGV0YS5CYXNlKFwiYnV0dG9uc1wiKSA7XHJcbmNvbnN0IGNvbW1lbnRzID0gZGV0YS5CYXNlKFwiY29tbWVudHNcIikgO1xyXG5cclxuLy9idXR0b25zXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbml0QnV0dG9ucyhrZXk6c3RyaW5nLGNvdW50Om51bWJlcj0wKXtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGJ1dHRvbnMucHV0KHtcclxuICAgICAgICBrZXksXHJcbiAgICAgICAgY291bnQsXHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXN1bHQgO1xyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwdXNoQnV0dG9uKGtleTpzdHJpbmcsY291bnQ6bnVtYmVyPTEpe1xyXG4gICAgYXdhaXQgYnV0dG9ucy51cGRhdGUoe1xyXG4gICAgICAgIGNvdW50OmJ1dHRvbnMudXRpbC5pbmNyZW1lbnQoY291bnQpLFxyXG4gICAgfSxrZXkpO1xyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRCdXR0b25zKCl7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBidXR0b25zLmZldGNoKCkgO1xyXG4gICAgcmV0dXJuIHJlc3VsdC5pdGVtcy5yZWR1Y2UoKHAsdik9PntcclxuICAgICAgICBwW3Yua2V5IGFzIHN0cmluZ10gPSB2IDtcclxuICAgICAgICByZXR1cm4gcCA7XHJcbiAgICB9LHt9ICk7XHJcbn1cclxuXHJcbi8vY29tbWVudHNcclxuZXhwb3J0IGludGVyZmFjZSBDb21tZW50c3tcclxuICAgIGtleTpzdHJpbmc7XHJcbiAgICBuYW1lOnN0cmluZztcclxuICAgIHRleHQ6c3RyaW5nO1xyXG4gICAgZ29vZDpudW1iZXI7XHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBvc3RDb21tZW50KFxyXG4gICAgbmFtZTpzdHJpbmcsXHJcbiAgICB0ZXh0OnN0cmluZyxcclxuKXtcclxuICAgIGNvbnNvbGUubG9nKFwiUE9TVCBDT01NRU5UICEhIVwiLG5hbWUsdGV4dClcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNvbW1lbnRzLnB1dCh7XHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICB0ZXh0LFxyXG4gICAgICAgIGdvb2Q6MCxcclxuICAgICAgICBjcmVhdGVkQXQ6bmV3IERhdGUoKS5nZXRUaW1lKCksXHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXN1bHQgO1xyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnb29kQ29tbWVudChrZXk6c3RyaW5nKXtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNvbW1lbnRzLnVwZGF0ZSh7XHJcbiAgICAgICAgZ29vZDpjb21tZW50cy51dGlsLmluY3JlbWVudCgxKSxcclxuICAgIH0sa2V5KTtcclxuICAgIHJldHVybiByZXN1bHQgO1xyXG59XHJcbmNvbnNvbGUubG9nKFwiZ2V0IGNvbW1lbnRzIGRlZmluZSBcIilcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENvbW1lbnRzKCkgOlByb21pc2U8Q29tbWVudHNbXT57XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjb21tZW50cy5mZXRjaCgpIDtcclxuICAgIHJldHVybiByZXN1bHQuaXRlbXMubWFwKGl0ZW09PntyZXR1cm4ge1xyXG4gICAgICAgIG5hbWU6XCJcIixcclxuICAgICAgICB0ZXh0OlwiXCIsXHJcbiAgICAgICAgZ29vZDowLFxyXG4gICAgICAgIC4uLml0ZW0sXHJcbiAgICB9fSkgYXMgQ29tbWVudHNbXSA7XHJcbn1cclxuXHJcblxyXG4iXSwibmFtZXMiOlsiY29uZmlnIiwiRGV0YSIsImNvbnNvbGUiLCJsb2ciLCJwcm9jZXNzIiwiZW52IiwiREVWX1BST0pFQ1RfS0VZIiwiZGV0YSIsImJ1dHRvbnMiLCJCYXNlIiwiY29tbWVudHMiLCJpbml0QnV0dG9ucyIsImtleSIsImNvdW50IiwicmVzdWx0IiwicHV0IiwicHVzaEJ1dHRvbiIsInVwZGF0ZSIsInV0aWwiLCJpbmNyZW1lbnQiLCJnZXRCdXR0b25zIiwiZmV0Y2giLCJpdGVtcyIsInJlZHVjZSIsInAiLCJ2IiwicG9zdENvbW1lbnQiLCJuYW1lIiwidGV4dCIsImdvb2QiLCJjcmVhdGVkQXQiLCJEYXRlIiwiZ2V0VGltZSIsImdvb2RDb21tZW50IiwiZ2V0Q29tbWVudHMiLCJtYXAiLCJpdGVtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/deta.ts?1d02\n");

/***/ }),

/***/ "./pages/api/comment/good.ts":
/*!***********************************!*\
  !*** ./pages/api/comment/good.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"config\": () => (/* binding */ config)\n/* harmony export */ });\n/* harmony import */ var lib_deta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lib/deta */ \"./lib/deta.ts?1d02\");\n\nconst handler = async (req, res)=>{\n    const body = JSON.parse(req.body);\n    await (0,lib_deta__WEBPACK_IMPORTED_MODULE_0__.goodComment)(body.key);\n    res.json((0,lib_deta__WEBPACK_IMPORTED_MODULE_0__.getComments)());\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\nconst config = {\n    api: {\n        bodyParser: {\n            sizeLimit: \"100mb\"\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvY29tbWVudC9nb29kLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnRTtBQUdoRSxLQUFLLENBQUNFLE9BQU8sVUFBMEJDLEdBQUcsRUFBQ0MsR0FBRyxHQUFHLENBQUM7SUFDOUMsS0FBSyxDQUFDQyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDSixHQUFHLENBQUNFLElBQUk7SUFDaEMsS0FBSyxDQUFDSixxREFBVyxDQUNiSSxJQUFJLENBQUNHLEdBQUc7SUFFWkosR0FBRyxDQUFDSyxJQUFJLENBQUNULHFEQUFXO0FBQ3hCLENBQUM7QUFFRCxpRUFBZUUsT0FBTztBQUVmLEtBQUssQ0FBQ1EsTUFBTSxHQUFHLENBQUM7SUFDbkJDLEdBQUcsRUFBQyxDQUFDO1FBQ0RDLFVBQVUsRUFBQyxDQUFDO1lBQ1JDLFNBQVMsRUFBQyxDQUFPO1FBQ3JCLENBQUM7SUFDTCxDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS9jb21tZW50L2dvb2QudHM/ODY1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRDb21tZW50cywgZ29vZENvbW1lbnQsIHBvc3RDb21tZW50IH0gZnJvbSBcImxpYi9kZXRhXCI7XHJcbmltcG9ydCB7TmV4dEFwaUhhbmRsZXJ9IGZyb20gXCJuZXh0XCIgO1xyXG5cclxuY29uc3QgaGFuZGxlciA6TmV4dEFwaUhhbmRsZXIgPSBhc3luYyAocmVxLHJlcyk9PntcclxuICAgIGNvbnN0IGJvZHkgPSBKU09OLnBhcnNlKHJlcS5ib2R5KSA7XHJcbiAgICBhd2FpdCBnb29kQ29tbWVudChcclxuICAgICAgICBib2R5LmtleSxcclxuICAgICkgO1xyXG4gICAgcmVzLmpzb24oZ2V0Q29tbWVudHMoKSk7XHJcbn0gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlciA7XHJcblxyXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xyXG4gICAgYXBpOntcclxuICAgICAgICBib2R5UGFyc2VyOntcclxuICAgICAgICAgICAgc2l6ZUxpbWl0OlwiMTAwbWJcIixcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufSA7XHJcbiJdLCJuYW1lcyI6WyJnZXRDb21tZW50cyIsImdvb2RDb21tZW50IiwiaGFuZGxlciIsInJlcSIsInJlcyIsImJvZHkiLCJKU09OIiwicGFyc2UiLCJrZXkiLCJqc29uIiwiY29uZmlnIiwiYXBpIiwiYm9keVBhcnNlciIsInNpemVMaW1pdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/comment/good.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/comment/good.ts"));
module.exports = __webpack_exports__;

})();