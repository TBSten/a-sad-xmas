"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/comments",{

/***/ "./pages/comments.tsx":
/*!****************************!*\
  !*** ./pages/comments.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/layout/Layout */ \"./components/layout/Layout.tsx\");\n/* harmony import */ var components_util_Section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/util/Section */ \"./components/util/Section.tsx\");\n/* harmony import */ var components_util_TitleSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/util/TitleSection */ \"./components/util/TitleSection.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar Coments = function(param) {\n    var comments = param.comments;\n    console.log(\"comments\", comments);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        __source: {\n            fileName: \"D:\\\\Dev\\\\xmax-sad\\\\pages\\\\comments.tsx\",\n            lineNumber: 18,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_util_TitleSection__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                title: \"非リアの嘆き\",\n                __source: {\n                    fileName: \"D:\\\\Dev\\\\xmax-sad\\\\pages\\\\comments.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_util_Section__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                title: \"あぁ、神よ。非リアの悶え苦しむ声が聞こえるぞよ...\",\n                full: true,\n                __source: {\n                    fileName: \"D:\\\\Dev\\\\xmax-sad\\\\pages\\\\comments.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                },\n                __self: _this,\n                children: \"全国の非リアはここにコメントを残して、 クリスマスの苦しさを紛らわしてください。 安心してください、仲間はたくさんいます。\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_util_Section__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                __source: {\n                    fileName: \"D:\\\\Dev\\\\xmax-sad\\\\pages\\\\comments.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                },\n                __self: _this\n            })\n        ]\n    }));\n};\n_c = Coments;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Coments);\nvar _c;\n$RefreshReg$(_c, \"Coments\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21tZW50cy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBNkM7QUFDQTtBQUNVOztBQVl2RCxHQUFLLENBQUNHLE9BQU8sR0FBcUIsUUFBUSxRQUFNLENBQUM7UUFBYkMsUUFBUSxTQUFSQSxRQUFRO0lBQ3hDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFVLFdBQUNGLFFBQVE7SUFDakMsTUFBTSx1RUFDSEosZ0VBQU07Ozs7Ozs7O2lGQUNGRSxvRUFBWTtnQkFDVEssS0FBSyxFQUFDLENBQVE7Ozs7Ozs7O2lGQUNMTiwrREFBTDtnQkFBQ00sS0FBSyxFQUFDLENBQTRCO2dCQUErQ0MsSUFBSTs7Ozs7OzswQkFBQyxDQUtqRDs7aUZBQ0NQLCtEQUFPOzs7Ozs7Ozs7O0FBS2hCLENBQUM7S0FqQnpDRSxPQUFPOztBQWtCaUMsK0RBQWVBLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tbWVudHMudHN4Pzk4MmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0XCI7XHJcbmltcG9ydCBTZWN0aW9uIGZyb20gXCJjb21wb25lbnRzL3V0aWwvU2VjdGlvblwiO1xyXG5pbXBvcnQgVGl0bGVTZWN0aW9uIGZyb20gXCJjb21wb25lbnRzL3V0aWwvVGl0bGVTZWN0aW9uXCI7XHJcbmltcG9ydCB7IENvbW1lbnRzLCBnZXRDb21tZW50cyB9IGZyb20gXCJsaWIvZGV0YVwiO1xyXG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQge0ZDfSBmcm9tIFwicmVhY3RcIiA7IFxyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9jb21lbnRzLm1vZHVsZS5zY3NzXCIgOyBcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbWVudHNQcm9wc3tcclxuICAgIGNvbW1lbnRzOkNvbW1lbnRzW10sXHJcbn1cclxuXHJcbmNvbnN0IENvbWVudHMgOkZDPENvbWVudHNQcm9wcz4gPSAoe2NvbW1lbnRzfSk9PntcclxuICAgIGNvbnNvbGUubG9nKFwiY29tbWVudHNcIixjb21tZW50cylcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgICA8VGl0bGVTZWN0aW9uIFxyXG4gICAgICAgICAgICB0aXRsZT1cIumdnuODquOCouOBruWYhuOBjVwiLz5cclxuICAgICAgICA8U2VjdGlvbiB0aXRsZT1cIuOBguOBgeOAgeelnuOCiOOAgumdnuODquOCouOBruaCtuOBiOiLpuOBl+OCgOWjsOOBjOiBnuOBk+OBiOOCi+OBnuOCiC4uLlwiIGZ1bGw+XHJcbiAgICAgICAgICAgIOWFqOWbveOBrumdnuODquOCouOBr+OBk+OBk+OBq+OCs+ODoeODs+ODiOOCkuaui+OBl+OBpuOAgVxyXG4gICAgICAgICAgICDjgq/jg6rjgrnjg57jgrnjga7oi6bjgZfjgZXjgpLntJvjgonjgo/jgZfjgabjgY/jgaDjgZXjgYTjgIJcclxuXHJcbiAgICAgICAgICAgIOWuieW/g+OBl+OBpuOBj+OBoOOBleOBhOOAgeS7sumWk+OBr+OBn+OBj+OBleOCk+OBhOOBvuOBmeOAglxyXG4gICAgICAgIDwvU2VjdGlvbj5cclxuICAgICAgICA8U2VjdGlvbj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9TZWN0aW9uPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKVxyXG59IFxyXG5leHBvcnQgZGVmYXVsdCBDb21lbnRzIDtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHdpbmRvdylcclxuICAgIGNvbnN0IGNvbW1lbnRzID0gYXdhaXQgZ2V0Q29tbWVudHMoKSA7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIGNvbW1lbnRzLFxyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG59O1xyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOlsiTGF5b3V0IiwiU2VjdGlvbiIsIlRpdGxlU2VjdGlvbiIsIkNvbWVudHMiLCJjb21tZW50cyIsImNvbnNvbGUiLCJsb2ciLCJ0aXRsZSIsImZ1bGwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/comments.tsx\n");

/***/ })

});