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
exports.id = "pages/api/comment/post";
exports.ids = ["pages/api/comment/post"];
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

/***/ "./lib/deta.ts":
/*!*********************!*\
  !*** ./lib/deta.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initButtons\": () => (/* binding */ initButtons),\n/* harmony export */   \"pushButton\": () => (/* binding */ pushButton),\n/* harmony export */   \"getButtons\": () => (/* binding */ getButtons),\n/* harmony export */   \"postComment\": () => (/* binding */ postComment),\n/* harmony export */   \"goodComment\": () => (/* binding */ goodComment),\n/* harmony export */   \"getComments\": () => (/* binding */ getComments)\n/* harmony export */ });\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var deta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! deta */ \"deta\");\n/* harmony import */ var deta__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(deta__WEBPACK_IMPORTED_MODULE_1__);\n\n\n(0,dotenv__WEBPACK_IMPORTED_MODULE_0__.config)();\nconsole.log(\"PROJECT KEY :\", process.env.DEV_PROJECT_KEY);\nconst deta = (0,deta__WEBPACK_IMPORTED_MODULE_1__.Deta)(process.env.DEV_PROJECT_KEY);\nconst buttons = deta.Base(\"buttons\");\nconst comments = deta.Base(\"comments\");\n//buttons\nasync function initButtons(key, count = 0) {\n    const result = await buttons.put({\n        key,\n        count\n    });\n    return result;\n}\nasync function pushButton(key, count = 1) {\n    await buttons.update({\n        count: buttons.util.increment(count)\n    }, key);\n}\nasync function getButtons() {\n    const result = await buttons.fetch();\n    return result.items.reduce((p, v)=>{\n        p[v.key] = v;\n        return p;\n    }, {\n    });\n}\nasync function postComment(name, text) {\n    console.log(\"POST COMMENT !!!\", name, text);\n    const result = await comments.put({\n        name,\n        text,\n        good: 0,\n        createdAt: new Date().getTime()\n    });\n    return result;\n}\nasync function goodComment(key) {\n    const result = await comments.update({\n        good: comments.util.increment(1)\n    }, key);\n    return result;\n}\nconsole.log(\"get comments define \");\nasync function getComments() {\n    const result = await comments.fetch();\n    return result.items;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZGV0YS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQzZCO0FBQ0Y7QUFFM0JBLDhDQUFNO0FBRU5FLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQWUsZ0JBQUNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxlQUFlO0FBRXZELEtBQUssQ0FBQ0MsSUFBSSxHQUFHTiwwQ0FBSSxDQUFDRyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsZUFBZTtBQUU3QyxLQUFLLENBQUNFLE9BQU8sR0FBR0QsSUFBSSxDQUFDRSxJQUFJLENBQUMsQ0FBUztBQUNuQyxLQUFLLENBQUNDLFFBQVEsR0FBR0gsSUFBSSxDQUFDRSxJQUFJLENBQUMsQ0FBVTtBQUVyQyxFQUFTO0FBQ0YsZUFBZUUsV0FBVyxDQUFDQyxHQUFVLEVBQUNDLEtBQVksR0FBQyxDQUFDLEVBQUMsQ0FBQztJQUN6RCxLQUFLLENBQUNDLE1BQU0sR0FBRyxLQUFLLENBQUNOLE9BQU8sQ0FBQ08sR0FBRyxDQUFDLENBQUM7UUFDOUJILEdBQUc7UUFDSEMsS0FBSztJQUNULENBQUM7SUFDRCxNQUFNLENBQUNDLE1BQU07QUFDakIsQ0FBQztBQUNNLGVBQWVFLFVBQVUsQ0FBQ0osR0FBVSxFQUFDQyxLQUFZLEdBQUMsQ0FBQyxFQUFDLENBQUM7SUFDeEQsS0FBSyxDQUFDTCxPQUFPLENBQUNTLE1BQU0sQ0FBQyxDQUFDO1FBQ2xCSixLQUFLLEVBQUNMLE9BQU8sQ0FBQ1UsSUFBSSxDQUFDQyxTQUFTLENBQUNOLEtBQUs7SUFDdEMsQ0FBQyxFQUFDRCxHQUFHO0FBQ1QsQ0FBQztBQUNNLGVBQWVRLFVBQVUsR0FBRSxDQUFDO0lBQy9CLEtBQUssQ0FBQ04sTUFBTSxHQUFHLEtBQUssQ0FBQ04sT0FBTyxDQUFDYSxLQUFLO0lBQ2xDLE1BQU0sQ0FBQ1AsTUFBTSxDQUFDUSxLQUFLLENBQUNDLE1BQU0sRUFBRUMsQ0FBQyxFQUFDQyxDQUFDLEdBQUcsQ0FBQztRQUMvQkQsQ0FBQyxDQUFDQyxDQUFDLENBQUNiLEdBQUcsSUFBY2EsQ0FBQztRQUN0QixNQUFNLENBQUNELENBQUM7SUFDWixDQUFDLEVBQUMsQ0FBQztJQUFBLENBQUM7QUFDUixDQUFDO0FBUU0sZUFBZUUsV0FBVyxDQUM3QkMsSUFBVyxFQUNYQyxJQUFXLEVBQ2QsQ0FBQztJQUNFMUIsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBa0IsbUJBQUN3QixJQUFJLEVBQUNDLElBQUk7SUFDeEMsS0FBSyxDQUFDZCxNQUFNLEdBQUcsS0FBSyxDQUFDSixRQUFRLENBQUNLLEdBQUcsQ0FBQyxDQUFDO1FBQy9CWSxJQUFJO1FBQ0pDLElBQUk7UUFDSkMsSUFBSSxFQUFDLENBQUM7UUFDTkMsU0FBUyxFQUFDLEdBQUcsQ0FBQ0MsSUFBSSxHQUFHQyxPQUFPO0lBQ2hDLENBQUM7SUFDRCxNQUFNLENBQUNsQixNQUFNO0FBQ2pCLENBQUM7QUFDTSxlQUFlbUIsV0FBVyxDQUFDckIsR0FBVSxFQUFDLENBQUM7SUFDMUMsS0FBSyxDQUFDRSxNQUFNLEdBQUcsS0FBSyxDQUFDSixRQUFRLENBQUNPLE1BQU0sQ0FBQyxDQUFDO1FBQ2xDWSxJQUFJLEVBQUNuQixRQUFRLENBQUNRLElBQUksQ0FBQ0MsU0FBUyxDQUFDLENBQUM7SUFDbEMsQ0FBQyxFQUFDUCxHQUFHO0lBQ0wsTUFBTSxDQUFDRSxNQUFNO0FBQ2pCLENBQUM7QUFDRFosT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBc0I7QUFDM0IsZUFBZStCLFdBQVcsR0FBdUIsQ0FBQztJQUNyRCxLQUFLLENBQUNwQixNQUFNLEdBQUcsS0FBSyxDQUFDSixRQUFRLENBQUNXLEtBQUs7SUFDbkMsTUFBTSxDQUFDUCxNQUFNLENBQUNRLEtBQUs7QUFDdkIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYi9kZXRhLnRzPzE0MTIiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7Y29uZmlnfSBmcm9tIFwiZG90ZW52XCIgO1xyXG5pbXBvcnQgeyBEZXRhIH0gZnJvbSBcImRldGFcIiA7XHJcblxyXG5jb25maWcoKTtcclxuXHJcbmNvbnNvbGUubG9nKFwiUFJPSkVDVCBLRVkgOlwiLHByb2Nlc3MuZW52LkRFVl9QUk9KRUNUX0tFWSk7XHJcblxyXG5jb25zdCBkZXRhID0gRGV0YShwcm9jZXNzLmVudi5ERVZfUFJPSkVDVF9LRVkpIDtcclxuXHJcbmNvbnN0IGJ1dHRvbnMgPSBkZXRhLkJhc2UoXCJidXR0b25zXCIpIDtcclxuY29uc3QgY29tbWVudHMgPSBkZXRhLkJhc2UoXCJjb21tZW50c1wiKSA7XHJcblxyXG4vL2J1dHRvbnNcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluaXRCdXR0b25zKGtleTpzdHJpbmcsY291bnQ6bnVtYmVyPTApe1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYnV0dG9ucy5wdXQoe1xyXG4gICAgICAgIGtleSxcclxuICAgICAgICBjb3VudCxcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlc3VsdCA7XHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHB1c2hCdXR0b24oa2V5OnN0cmluZyxjb3VudDpudW1iZXI9MSl7XHJcbiAgICBhd2FpdCBidXR0b25zLnVwZGF0ZSh7XHJcbiAgICAgICAgY291bnQ6YnV0dG9ucy51dGlsLmluY3JlbWVudChjb3VudCksXHJcbiAgICB9LGtleSk7XHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEJ1dHRvbnMoKXtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGJ1dHRvbnMuZmV0Y2goKSA7XHJcbiAgICByZXR1cm4gcmVzdWx0Lml0ZW1zLnJlZHVjZSgocCx2KT0+e1xyXG4gICAgICAgIHBbdi5rZXkgYXMgc3RyaW5nXSA9IHYgO1xyXG4gICAgICAgIHJldHVybiBwIDtcclxuICAgIH0se30gKTtcclxufVxyXG5cclxuLy9jb21tZW50c1xyXG5leHBvcnQgaW50ZXJmYWNlIENvbW1lbnRze1xyXG4gICAga2V5OnN0cmluZztcclxuICAgIG5hbWU6c3RyaW5nO1xyXG4gICAgdGV4dDpzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBvc3RDb21tZW50KFxyXG4gICAgbmFtZTpzdHJpbmcsXHJcbiAgICB0ZXh0OnN0cmluZyxcclxuKXtcclxuICAgIGNvbnNvbGUubG9nKFwiUE9TVCBDT01NRU5UICEhIVwiLG5hbWUsdGV4dClcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNvbW1lbnRzLnB1dCh7XHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICB0ZXh0LFxyXG4gICAgICAgIGdvb2Q6MCxcclxuICAgICAgICBjcmVhdGVkQXQ6bmV3IERhdGUoKS5nZXRUaW1lKCksXHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXN1bHQgO1xyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnb29kQ29tbWVudChrZXk6c3RyaW5nKXtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNvbW1lbnRzLnVwZGF0ZSh7XHJcbiAgICAgICAgZ29vZDpjb21tZW50cy51dGlsLmluY3JlbWVudCgxKSxcclxuICAgIH0sa2V5KTtcclxuICAgIHJldHVybiByZXN1bHQgO1xyXG59XHJcbmNvbnNvbGUubG9nKFwiZ2V0IGNvbW1lbnRzIGRlZmluZSBcIilcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENvbW1lbnRzKCkgOlByb21pc2U8Q29tbWVudHNbXT57XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjb21tZW50cy5mZXRjaCgpIDtcclxuICAgIHJldHVybiByZXN1bHQuaXRlbXMgYXMgdW5rbm93biBhcyBDb21tZW50c1tdIDtcclxufVxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJjb25maWciLCJEZXRhIiwiY29uc29sZSIsImxvZyIsInByb2Nlc3MiLCJlbnYiLCJERVZfUFJPSkVDVF9LRVkiLCJkZXRhIiwiYnV0dG9ucyIsIkJhc2UiLCJjb21tZW50cyIsImluaXRCdXR0b25zIiwia2V5IiwiY291bnQiLCJyZXN1bHQiLCJwdXQiLCJwdXNoQnV0dG9uIiwidXBkYXRlIiwidXRpbCIsImluY3JlbWVudCIsImdldEJ1dHRvbnMiLCJmZXRjaCIsIml0ZW1zIiwicmVkdWNlIiwicCIsInYiLCJwb3N0Q29tbWVudCIsIm5hbWUiLCJ0ZXh0IiwiZ29vZCIsImNyZWF0ZWRBdCIsIkRhdGUiLCJnZXRUaW1lIiwiZ29vZENvbW1lbnQiLCJnZXRDb21tZW50cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/deta.ts\n");

/***/ }),

/***/ "./pages/api/comment/post.ts":
/*!***********************************!*\
  !*** ./pages/api/comment/post.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"config\": () => (/* binding */ config)\n/* harmony export */ });\n/* harmony import */ var lib_deta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lib/deta */ \"./lib/deta.ts\");\n\nconst handler = async (req, res)=>{\n    const body = JSON.parse(req.body);\n    console.log(body[\"name\"]);\n    console.log(body[\"text\"]);\n    const result = await (0,lib_deta__WEBPACK_IMPORTED_MODULE_0__.postComment)(body.name, body.text);\n    res.json(result);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\nconst config = {\n    api: {\n        bodyParser: {\n            sizeLimit: \"100mb\"\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvY29tbWVudC9wb3N0LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFzQztBQUd0QyxLQUFLLENBQUNDLE9BQU8sVUFBMEJDLEdBQUcsRUFBQ0MsR0FBRyxHQUFHLENBQUM7SUFDOUMsS0FBSyxDQUFDQyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDSixHQUFHLENBQUNFLElBQUk7SUFDaENHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixJQUFJLENBQUMsQ0FBTTtJQUN2QkcsT0FBTyxDQUFDQyxHQUFHLENBQUNKLElBQUksQ0FBQyxDQUFNO0lBQ3ZCLEtBQUssQ0FBQ0ssTUFBTSxHQUFHLEtBQUssQ0FBQ1QscURBQVcsQ0FDNUJJLElBQUksQ0FBQ00sSUFBSSxFQUNUTixJQUFJLENBQUNPLElBQUk7SUFFYlIsR0FBRyxDQUFDUyxJQUFJLENBQUNILE1BQU07QUFDbkIsQ0FBQztBQUVELGlFQUFlUixPQUFPO0FBRWYsS0FBSyxDQUFDWSxNQUFNLEdBQUcsQ0FBQztJQUNuQkMsR0FBRyxFQUFDLENBQUM7UUFDREMsVUFBVSxFQUFDLENBQUM7WUFDUkMsU0FBUyxFQUFDLENBQU87UUFDckIsQ0FBQztJQUNMLENBQUM7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2NvbW1lbnQvcG9zdC50cz8xOGNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHBvc3RDb21tZW50IH0gZnJvbSBcImxpYi9kZXRhXCI7XHJcbmltcG9ydCB7TmV4dEFwaUhhbmRsZXJ9IGZyb20gXCJuZXh0XCIgO1xyXG5cclxuY29uc3QgaGFuZGxlciA6TmV4dEFwaUhhbmRsZXIgPSBhc3luYyAocmVxLHJlcyk9PntcclxuICAgIGNvbnN0IGJvZHkgPSBKU09OLnBhcnNlKHJlcS5ib2R5KSA7XHJcbiAgICBjb25zb2xlLmxvZyhib2R5W1wibmFtZVwiXSk7XHJcbiAgICBjb25zb2xlLmxvZyhib2R5W1widGV4dFwiXSk7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBwb3N0Q29tbWVudChcclxuICAgICAgICBib2R5Lm5hbWUsXHJcbiAgICAgICAgYm9keS50ZXh0LFxyXG4gICAgKSA7XHJcbiAgICByZXMuanNvbihyZXN1bHQgKTtcclxufSA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyIDtcclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XHJcbiAgICBhcGk6e1xyXG4gICAgICAgIGJvZHlQYXJzZXI6e1xyXG4gICAgICAgICAgICBzaXplTGltaXQ6XCIxMDBtYlwiLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59IDtcclxuIl0sIm5hbWVzIjpbInBvc3RDb21tZW50IiwiaGFuZGxlciIsInJlcSIsInJlcyIsImJvZHkiLCJKU09OIiwicGFyc2UiLCJjb25zb2xlIiwibG9nIiwicmVzdWx0IiwibmFtZSIsInRleHQiLCJqc29uIiwiY29uZmlnIiwiYXBpIiwiYm9keVBhcnNlciIsInNpemVMaW1pdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/comment/post.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/comment/post.ts"));
module.exports = __webpack_exports__;

})();