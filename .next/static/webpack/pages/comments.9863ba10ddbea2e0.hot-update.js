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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/layout/Layout */ \"./components/layout/Layout.tsx\");\n/* harmony import */ var components_util_Section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/util/Section */ \"./components/util/Section.tsx\");\n/* harmony import */ var components_util_TitleSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/util/TitleSection */ \"./components/util/TitleSection.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _comments_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comments.module.scss */ \"./pages/comments.module.scss\");\n/* harmony import */ var _comments_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_comments_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) {\n        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){\n            arr2[i] = arr[i];\n        }\n        return arr2;\n    }\n}\nfunction _iterableToArray(iter) {\n    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Coments = function(param) {\n    var comments = param.comments;\n    var _this1 = _this;\n    var handleSubmit = function handleSubmit(e1) {\n        e1.preventDefault();\n        setState(\"fetching\");\n        console.log(\"嘆く\", name, text);\n        var body = {\n            name: name,\n            text: text\n        };\n        fetch(\"/api/comment/post\", {\n            method: \"POST\",\n            body: JSON.stringify(body)\n        }).then(function(res) {\n            return res.json();\n        }).then(function(json) {\n            setTimeout(function() {\n                console.log(\"have a good xmas ...\");\n                console.log(json);\n                setComments(function(prev) {\n                    return _toConsumableArray(prev).concat([\n                        {\n                            key: json.key,\n                            name: body.name,\n                            text: body.text\n                        }\n                    ]);\n                });\n                setState(\"success\");\n            }, 3 * 1000);\n        }).catch(function(e) {\n            console.error(e);\n            alert(\"エラーが発生しました\");\n            setState(\"error\");\n        });\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(comments), _comments = ref[0], setComments = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"孤独な非リア\"), name = ref1[0], setName = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"クリスマスって、いいよな...\"), text = ref2[0], setText = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"waiting\"), state = ref3[0], setState = ref3[1];\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        __source: {\n            fileName: \"D:\\\\Dev\\\\xmax-sad\\\\pages\\\\comments.tsx\",\n            lineNumber: 53,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_util_TitleSection__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                title: \"非リアの嘆き\",\n                __source: {\n                    fileName: \"D:\\\\Dev\\\\xmax-sad\\\\pages\\\\comments.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 13\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_util_Section__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                title: \"あぁ、神よ。非リアの悶え苦しむ声が聞こえるぞよ...\",\n                full: true,\n                __source: {\n                    fileName: \"D:\\\\Dev\\\\xmax-sad\\\\pages\\\\comments.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: \"全国の非リアはここにコメントを残して、 クリスマスの苦しさを紛らわしてください。 安心してください、仲間はたくさんいます。\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_util_Section__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                title: \"嘆く\",\n                __source: {\n                    fileName: \"D:\\\\Dev\\\\xmax-sad\\\\pages\\\\comments.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"form\", {\n                    action: \"\",\n                    onSubmit: handleSubmit,\n                    className: (_comments_module_scss__WEBPACK_IMPORTED_MODULE_5___default().form),\n                    __source: {\n                        fileName: \"D:\\\\Dev\\\\xmax-sad\\\\pages\\\\comments.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 17\n                    },\n                    __self: _this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            __source: {\n                                fileName: \"D:\\\\Dev\\\\xmax-sad\\\\pages\\\\comments.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 21\n                            },\n                            __self: _this,\n                            children: \"非リアの名前\"\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                            type: \"text\",\n                            value: name,\n                            onChange: function(e) {\n                                return setName(e.target.value);\n                            },\n                            __source: {\n                                fileName: \"D:\\\\Dev\\\\xmax-sad\\\\pages\\\\comments.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 21\n                            },\n                            __self: _this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            __source: {\n                                fileName: \"D:\\\\Dev\\\\xmax-sad\\\\pages\\\\comments.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 21\n                            },\n                            __self: _this,\n                            children: \"嘆き\"\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"textarea\", {\n                            value: text,\n                            onChange: function(e) {\n                                return setText(e.target.value);\n                            },\n                            __source: {\n                                fileName: \"D:\\\\Dev\\\\xmax-sad\\\\pages\\\\comments.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 21\n                            },\n                            __self: _this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                            type: \"submit\",\n                            value: \"嘆く\",\n                            disabled: state === \"fetching\",\n                            __source: {\n                                fileName: \"D:\\\\Dev\\\\xmax-sad\\\\pages\\\\comments.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 21\n                            },\n                            __self: _this\n                        })\n                    ]\n                })\n            }),\n            _comments.map(function(comment) {\n                /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_util_Section__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    title: comment.name,\n                    __source: {\n                        fileName: \"D:\\\\Dev\\\\xmax-sad\\\\pages\\\\comments.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 17\n                    },\n                    __self: _this1,\n                    children: [\n                        comment.text,\n                        function() {\n                            console.log(\"comment::\", comment);\n                        }()\n                    ]\n                }, comment.key);\n            }),\n            _comments.length <= 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_util_Section__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                __source: {\n                    fileName: \"D:\\\\Dev\\\\xmax-sad\\\\pages\\\\comments.tsx\",\n                    lineNumber: 86,\n                    columnNumber: 17\n                },\n                __self: _this,\n                children: \"なに？非リアが一人もいないだと？！\"\n            }) : \"\"\n        ]\n    }));\n};\n_s(Coments, \"lUb+oT0SVZcB2kxzExNWGXrEEjc=\");\n_c = Coments;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Coments);\nvar _c;\n$RefreshReg$(_c, \"Coments\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCJjb21wb25lbnRzL2xheW91dC9MYXlvdXRcIjtcclxuaW1wb3J0IFNlY3Rpb24gZnJvbSBcImNvbXBvbmVudHMvdXRpbC9TZWN0aW9uXCI7XHJcbmltcG9ydCBUaXRsZVNlY3Rpb24gZnJvbSBcImNvbXBvbmVudHMvdXRpbC9UaXRsZVNlY3Rpb25cIjtcclxuaW1wb3J0IHsgQ29tbWVudHMsIGdldENvbW1lbnRzIH0gZnJvbSBcImxpYi9kZXRhXCI7XHJcbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCBSZWFjdCwgeyBGQywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vY29tbWVudHMubW9kdWxlLnNjc3NcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29tZW50c1Byb3BzIHtcclxuICAgIGNvbW1lbnRzOiBDb21tZW50c1tdO1xyXG59XHJcblxyXG5jb25zdCBDb21lbnRzOiBGQzxDb21lbnRzUHJvcHM+ID0gKHsgY29tbWVudHMgfSkgPT4ge1xyXG4gICAgY29uc3QgW19jb21tZW50cyAsIHNldENvbW1lbnRzXSA9IHVzZVN0YXRlKGNvbW1lbnRzKSA7XHJcbiAgICBjb25zdCBbbmFtZSxzZXROYW1lXSA9IHVzZVN0YXRlKFwi5a2k54us44Gq6Z2e44Oq44KiXCIpIDtcclxuICAgIGNvbnN0IFt0ZXh0LHNldFRleHRdID0gdXNlU3RhdGUoXCLjgq/jg6rjgrnjg57jgrnjgaPjgabjgIHjgYTjgYTjgojjgaouLi5cIikgO1xyXG4gICAgY29uc3QgW3N0YXRlLHNldFN0YXRlXSA9IHVzZVN0YXRlPFwid2FpdGluZ1wifFwiZmV0Y2hpbmdcInxcInN1Y2Nlc3NcInxcImVycm9yXCI+KFwid2FpdGluZ1wiKTtcclxuICAgIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlOlJlYWN0LkZvcm1FdmVudCl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHNldFN0YXRlKFwiZmV0Y2hpbmdcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLlmIbjgY9cIixuYW1lLHRleHQpXHJcbiAgICAgICAgY29uc3QgYm9keSA9IHtcclxuICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgdGV4dCxcclxuICAgICAgICB9IDtcclxuICAgICAgICBmZXRjaChcIi9hcGkvY29tbWVudC9wb3N0XCIse1xyXG4gICAgICAgICAgICBtZXRob2Q6XCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGJvZHk6SlNPTi5zdHJpbmdpZnkoYm9keSksXHJcbiAgICAgICAgfSkudGhlbihyZXM9PnJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKGpzb249PntcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImhhdmUgYSBnb29kIHhtYXMgLi4uXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coanNvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q29tbWVudHMocHJldj0+W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5wcmV2LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6anNvbi5rZXksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOmJvZHkubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6Ym9keS50ZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3RhdGUoXCJzdWNjZXNzXCIpO1xyXG4gICAgICAgICAgICAgICAgfSwzKjEwMDApXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlPT57XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCLjgqjjg6njg7zjgYznmbrnlJ/jgZfjgb7jgZfjgZ9cIik7XHJcbiAgICAgICAgICAgICAgICBzZXRTdGF0ZShcImVycm9yXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPFRpdGxlU2VjdGlvbiB0aXRsZT1cIumdnuODquOCouOBruWYhuOBjVwiIC8+XHJcbiAgICAgICAgICAgIDxTZWN0aW9uXHJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIuOBguOBgeOAgeelnuOCiOOAgumdnuODquOCouOBruaCtuOBiOiLpuOBl+OCgOWjsOOBjOiBnuOBk+OBiOOCi+OBnuOCiC4uLlwiXHJcbiAgICAgICAgICAgICAgICBmdWxsXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIOWFqOWbveOBrumdnuODquOCouOBr+OBk+OBk+OBq+OCs+ODoeODs+ODiOOCkuaui+OBl+OBpuOAgVxyXG4gICAgICAgICAgICAgICAg44Kv44Oq44K544Oe44K544Gu6Ium44GX44GV44KS57Sb44KJ44KP44GX44Gm44GP44Gg44GV44GE44CCXHJcbiAgICAgICAgICAgICAgICDlronlv4PjgZfjgabjgY/jgaDjgZXjgYTjgIHku7LplpPjga/jgZ/jgY/jgZXjgpPjgYTjgb7jgZnjgIJcclxuICAgICAgICAgICAgPC9TZWN0aW9uPlxyXG5cclxuICAgICAgICAgICAgPFNlY3Rpb24gdGl0bGU9XCLlmIbjgY9cIj5cclxuICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIlwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT17c3R5bGVzLmZvcm19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOmdnuODquOCouOBruWQjeWJjVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtuYW1lfSBvbkNoYW5nZT17KGUpPT5zZXROYW1lKGUudGFyZ2V0LnZhbHVlKX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOWYhuOBjSAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgdmFsdWU9e3RleHR9IG9uQ2hhbmdlPXsoZSk9PnNldFRleHQoZS50YXJnZXQudmFsdWUpfT48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCLlmIbjgY9cIiBkaXNhYmxlZD17c3RhdGUgPT09IFwiZmV0Y2hpbmdcIiB9Lz5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9TZWN0aW9uPlxyXG5cclxuICAgICAgICAgICAge19jb21tZW50cy5tYXAoKGNvbW1lbnQpID0+IChcclxuICAgICAgICAgICAgICAgIDxTZWN0aW9uIGtleT17Y29tbWVudC5rZXl9IHRpdGxlPXtjb21tZW50Lm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtjb21tZW50LnRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgeygoKT0+e2NvbnNvbGUubG9nKFwiY29tbWVudDo6XCIsY29tbWVudCl9KSgpfVxyXG4gICAgICAgICAgICAgICAgPC9TZWN0aW9uPlxyXG4gICAgICAgICAgICApKX1cclxuXHJcbiAgICAgICAgICAgIHtfY29tbWVudHMubGVuZ3RoIDw9IDAgPyAoXHJcbiAgICAgICAgICAgICAgICA8U2VjdGlvbj7jgarjgavvvJ/pnZ7jg6rjgqLjgYzkuIDkurrjgoLjgYTjgarjgYTjgaDjgajvvJ/vvIE8L1NlY3Rpb24+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBDb21lbnRzO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gICAgY29uc3QgY29tbWVudHMgPSBhd2FpdCBnZXRDb21tZW50cygpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBjb21tZW50cyxcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxufTtcclxuIl0sIm5hbWVzIjpbIkxheW91dCIsIlNlY3Rpb24iLCJUaXRsZVNlY3Rpb24iLCJSZWFjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiQ29tZW50cyIsImNvbW1lbnRzIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJjb25zb2xlIiwibG9nIiwibmFtZSIsInRleHQiLCJib2R5IiwiZmV0Y2giLCJtZXRob2QiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlcyIsImpzb24iLCJzZXRUaW1lb3V0Iiwic2V0Q29tbWVudHMiLCJwcmV2Iiwia2V5IiwiY2F0Y2giLCJlcnJvciIsImFsZXJ0IiwiX2NvbW1lbnRzIiwic2V0TmFtZSIsInNldFRleHQiLCJzdGF0ZSIsInRpdGxlIiwiZnVsbCIsImZvcm0iLCJhY3Rpb24iLCJvblN1Ym1pdCIsImNsYXNzTmFtZSIsImRpdiIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJ0ZXh0YXJlYSIsImRpc2FibGVkIiwibWFwIiwiY29tbWVudCIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/comments.tsx\n");

/***/ })

});