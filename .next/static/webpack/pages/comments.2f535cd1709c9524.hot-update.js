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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/layout/Layout */ \"./components/layout/Layout.tsx\");\n/* harmony import */ var components_util_Section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/util/Section */ \"./components/util/Section.tsx\");\n/* harmony import */ var components_util_TitleSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/util/TitleSection */ \"./components/util/TitleSection.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Coments = function(param) {\n    var comments = param.comments;\n    var _this1 = _this;\n    var handleSubmit = function handleSubmit(e1) {\n        e1.preventDefault();\n        console.log(\"嘆く\", name, text);\n        var body = {\n            name: name,\n            text: text\n        };\n        fetch(\"/api/comment/post\", {\n            method: \"POST\",\n            body: JSON.stringify(body)\n        }).then(function(res) {\n            return res.json();\n        }).then(function(json) {\n        }).catch(function(e) {\n            console.error(e);\n            alert(\"エラーが発生しました\");\n        });\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"孤独な非リア\"), name = ref[0], setName = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"クリスマスって、いいよな...\"), text = ref1[0], setText = ref1[1];\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        __source: {\n            fileName: \"D:\\\\Dev\\\\xmax-sad\\\\pages\\\\comments.tsx\",\n            lineNumber: 37,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_util_TitleSection__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                title: \"非リアの嘆き\",\n                __source: {\n                    fileName: \"D:\\\\Dev\\\\xmax-sad\\\\pages\\\\comments.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 13\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_util_Section__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                title: \"あぁ、神よ。非リアの悶え苦しむ声が聞こえるぞよ...\",\n                full: true,\n                __source: {\n                    fileName: \"D:\\\\Dev\\\\xmax-sad\\\\pages\\\\comments.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: \"全国の非リアはここにコメントを残して、 クリスマスの苦しさを紛らわしてください。 安心してください、仲間はたくさんいます。\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_util_Section__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                title: \"嘆く\",\n                __source: {\n                    fileName: \"D:\\\\Dev\\\\xmax-sad\\\\pages\\\\comments.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"form\", {\n                    action: \"\",\n                    onSubmit: handleSubmit,\n                    __source: {\n                        fileName: \"D:\\\\Dev\\\\xmax-sad\\\\pages\\\\comments.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 17\n                    },\n                    __self: _this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            __source: {\n                                fileName: \"D:\\\\Dev\\\\xmax-sad\\\\pages\\\\comments.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 21\n                            },\n                            __self: _this,\n                            children: \"非リアの名前\"\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                            type: \"text\",\n                            value: name,\n                            onChange: function(e) {\n                                return setName(e.target.value);\n                            },\n                            __source: {\n                                fileName: \"D:\\\\Dev\\\\xmax-sad\\\\pages\\\\comments.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 21\n                            },\n                            __self: _this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            __source: {\n                                fileName: \"D:\\\\Dev\\\\xmax-sad\\\\pages\\\\comments.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 21\n                            },\n                            __self: _this,\n                            children: \"嘆き\"\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"textarea\", {\n                            value: text,\n                            onChange: function(e) {\n                                return setText(e.target.value);\n                            },\n                            __source: {\n                                fileName: \"D:\\\\Dev\\\\xmax-sad\\\\pages\\\\comments.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 21\n                            },\n                            __self: _this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                            type: \"submit\",\n                            value: \"嘆く\",\n                            __source: {\n                                fileName: \"D:\\\\Dev\\\\xmax-sad\\\\pages\\\\comments.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 21\n                            },\n                            __self: _this\n                        })\n                    ]\n                })\n            }),\n            comments.map(function(comment) {\n                /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_util_Section__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    title: comment.name,\n                    __source: {\n                        fileName: \"D:\\\\Dev\\\\xmax-sad\\\\pages\\\\comments.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 17\n                    },\n                    __self: _this1,\n                    children: comment.text\n                }, comment.key);\n            }),\n            comments.length <= 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_util_Section__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                __source: {\n                    fileName: \"D:\\\\Dev\\\\xmax-sad\\\\pages\\\\comments.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 17\n                },\n                __self: _this,\n                children: \"なに？非リアが一人もいないだと？！\"\n            }) : \"\"\n        ]\n    }));\n};\n_s(Coments, \"BTA5JP1S6p1Cqq55Vcdpzd+UB/w=\");\n_c = Coments;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Coments);\nvar _c;\n$RefreshReg$(_c, \"Coments\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUU7OztBQUlsQixDQUFDO0dBN0RLSSxPQUFPO0tBQVBBLE9BQU87O0FBOERiLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tbWVudHMudHN4Pzk4MmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0XCI7XHJcbmltcG9ydCBTZWN0aW9uIGZyb20gXCJjb21wb25lbnRzL3V0aWwvU2VjdGlvblwiO1xyXG5pbXBvcnQgVGl0bGVTZWN0aW9uIGZyb20gXCJjb21wb25lbnRzL3V0aWwvVGl0bGVTZWN0aW9uXCI7XHJcbmltcG9ydCB7IENvbW1lbnRzLCBnZXRDb21tZW50cyB9IGZyb20gXCJsaWIvZGV0YVwiO1xyXG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgRkMsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2NvbWVudHMubW9kdWxlLnNjc3NcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29tZW50c1Byb3BzIHtcclxuICAgIGNvbW1lbnRzOiBDb21tZW50c1tdO1xyXG59XHJcblxyXG5jb25zdCBDb21lbnRzOiBGQzxDb21lbnRzUHJvcHM+ID0gKHsgY29tbWVudHMgfSkgPT4ge1xyXG4gICAgY29uc3QgW25hbWUsc2V0TmFtZV0gPSB1c2VTdGF0ZShcIuWtpOeLrOOBqumdnuODquOColwiKSA7XHJcbiAgICBjb25zdCBbdGV4dCxzZXRUZXh0XSA9IHVzZVN0YXRlKFwi44Kv44Oq44K544Oe44K544Gj44Gm44CB44GE44GE44KI44GqLi4uXCIpIDtcclxuICAgIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlOlJlYWN0LkZvcm1FdmVudCl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi5ZiG44GPXCIsbmFtZSx0ZXh0KVxyXG4gICAgICAgIGNvbnN0IGJvZHkgPSB7XHJcbiAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgIHRleHQsXHJcbiAgICAgICAgfSA7XHJcbiAgICAgICAgZmV0Y2goXCIvYXBpL2NvbW1lbnQvcG9zdFwiLHtcclxuICAgICAgICAgICAgbWV0aG9kOlwiUE9TVFwiLFxyXG4gICAgICAgICAgICBib2R5OkpTT04uc3RyaW5naWZ5KGJvZHkpLFxyXG4gICAgICAgIH0pLnRoZW4ocmVzPT5yZXMuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbihqc29uPT57XHJcblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZT0+e1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwi44Ko44Op44O844GM55m655Sf44GX44G+44GX44GfXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPFRpdGxlU2VjdGlvbiB0aXRsZT1cIumdnuODquOCouOBruWYhuOBjVwiIC8+XHJcbiAgICAgICAgICAgIDxTZWN0aW9uXHJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIuOBguOBgeOAgeelnuOCiOOAgumdnuODquOCouOBruaCtuOBiOiLpuOBl+OCgOWjsOOBjOiBnuOBk+OBiOOCi+OBnuOCiC4uLlwiXHJcbiAgICAgICAgICAgICAgICBmdWxsXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIOWFqOWbveOBrumdnuODquOCouOBr+OBk+OBk+OBq+OCs+ODoeODs+ODiOOCkuaui+OBl+OBpuOAgVxyXG4gICAgICAgICAgICAgICAg44Kv44Oq44K544Oe44K544Gu6Ium44GX44GV44KS57Sb44KJ44KP44GX44Gm44GP44Gg44GV44GE44CCXHJcbiAgICAgICAgICAgICAgICDlronlv4PjgZfjgabjgY/jgaDjgZXjgYTjgIHku7LplpPjga/jgZ/jgY/jgZXjgpPjgYTjgb7jgZnjgIJcclxuICAgICAgICAgICAgPC9TZWN0aW9uPlxyXG5cclxuICAgICAgICAgICAgPFNlY3Rpb24gdGl0bGU9XCLlmIbjgY9cIj5cclxuICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIlwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOmdnuODquOCouOBruWQjeWJjVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtuYW1lfSBvbkNoYW5nZT17KGUpPT5zZXROYW1lKGUudGFyZ2V0LnZhbHVlKX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOWYhuOBjSAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgdmFsdWU9e3RleHR9IG9uQ2hhbmdlPXsoZSk9PnNldFRleHQoZS50YXJnZXQudmFsdWUpfT48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCLlmIbjgY9cIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L1NlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICB7Y29tbWVudHMubWFwKChjb21tZW50KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8U2VjdGlvbiBrZXk9e2NvbW1lbnQua2V5fSB0aXRsZT17Y29tbWVudC5uYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICB7Y29tbWVudC50ZXh0fVxyXG4gICAgICAgICAgICAgICAgPC9TZWN0aW9uPlxyXG4gICAgICAgICAgICApKX1cclxuXHJcbiAgICAgICAgICAgIHtjb21tZW50cy5sZW5ndGggPD0gMCA/IChcclxuICAgICAgICAgICAgICAgIDxTZWN0aW9uPuOBquOBq++8n+mdnuODquOCouOBjOS4gOS6uuOCguOBhOOBquOBhOOBoOOBqO+8n++8gTwvU2VjdGlvbj5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IENvbWVudHM7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcbiAgICBjb25zdCBjb21tZW50cyA9IGF3YWl0IGdldENvbW1lbnRzKCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIGNvbW1lbnRzLFxyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG59O1xyXG4iXSwibmFtZXMiOlsiTGF5b3V0IiwiU2VjdGlvbiIsIlRpdGxlU2VjdGlvbiIsIlJlYWN0IiwidXNlU3RhdGUiLCJDb21lbnRzIiwiY29tbWVudHMiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwibmFtZSIsInRleHQiLCJib2R5IiwiZmV0Y2giLCJtZXRob2QiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlcyIsImpzb24iLCJjYXRjaCIsImVycm9yIiwiYWxlcnQiLCJzZXROYW1lIiwic2V0VGV4dCIsInRpdGxlIiwiZnVsbCIsImZvcm0iLCJhY3Rpb24iLCJvblN1Ym1pdCIsImRpdiIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJ0ZXh0YXJlYSIsIm1hcCIsImNvbW1lbnQiLCJrZXkiLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/comments.tsx\n");

/***/ })

});