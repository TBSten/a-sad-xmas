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

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/layout/Layout */ \"./components/layout/Layout.tsx\");\n/* harmony import */ var components_util_Section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/util/Section */ \"./components/util/Section.tsx\");\n/* harmony import */ var components_util_TitleSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/util/TitleSection */ \"./components/util/TitleSection.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _comments_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comments.module.scss */ \"./pages/comments.module.scss\");\n/* harmony import */ var _comments_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_comments_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) {\n        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){\n            arr2[i] = arr[i];\n        }\n        return arr2;\n    }\n}\nfunction _iterableToArray(iter) {\n    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Coments = function(param) {\n    var comments = param.comments;\n    var _this1 = _this;\n    var handleSubmit = function handleSubmit(e1) {\n        e1.preventDefault();\n        console.log(\"嘆く\", name, text);\n        var body = {\n            name: name,\n            text: text\n        };\n        fetch(\"/api/comment/post\", {\n            method: \"POST\",\n            body: JSON.stringify(body)\n        }).then(function(res) {\n            return res.json();\n        }).then(function(json) {\n            console.log(\"have a good xmas ...\");\n            console.log(json);\n            setComments(function(prev) {\n                return _toConsumableArray(prev).concat([\n                    {\n                        key: json.key,\n                        name: body.name,\n                        text: body.text\n                    }\n                ]);\n            });\n        }).catch(function(e) {\n            console.error(e);\n            alert(\"エラーが発生しました\");\n        });\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(comments), _comments = ref[0], setComments = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"孤独な非リア\"), name = ref1[0], setName = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"クリスマスって、いいよな...\"), text = ref2[0], setText = ref2[1];\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        __source: {\n            fileName: \"D:\\\\Dev\\\\xmax-sad\\\\pages\\\\comments.tsx\",\n            lineNumber: 47,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_util_TitleSection__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                title: \"非リアの嘆き\",\n                __source: {\n                    fileName: \"D:\\\\Dev\\\\xmax-sad\\\\pages\\\\comments.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 13\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_util_Section__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                title: \"あぁ、神よ。非リアの悶え苦しむ声が聞こえるぞよ...\",\n                full: true,\n                __source: {\n                    fileName: \"D:\\\\Dev\\\\xmax-sad\\\\pages\\\\comments.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: \"全国の非リアはここにコメントを残して、 クリスマスの苦しさを紛らわしてください。 安心してください、仲間はたくさんいます。\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_util_Section__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                title: \"嘆く\",\n                __source: {\n                    fileName: \"D:\\\\Dev\\\\xmax-sad\\\\pages\\\\comments.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"form\", {\n                    action: \"\",\n                    onSubmit: handleSubmit,\n                    className: (_comments_module_scss__WEBPACK_IMPORTED_MODULE_5___default().form),\n                    __source: {\n                        fileName: \"D:\\\\Dev\\\\xmax-sad\\\\pages\\\\comments.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 17\n                    },\n                    __self: _this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            __source: {\n                                fileName: \"D:\\\\Dev\\\\xmax-sad\\\\pages\\\\comments.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 21\n                            },\n                            __self: _this,\n                            children: \"非リアの名前\"\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                            type: \"text\",\n                            value: name,\n                            onChange: function(e) {\n                                return setName(e.target.value);\n                            },\n                            __source: {\n                                fileName: \"D:\\\\Dev\\\\xmax-sad\\\\pages\\\\comments.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 21\n                            },\n                            __self: _this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            __source: {\n                                fileName: \"D:\\\\Dev\\\\xmax-sad\\\\pages\\\\comments.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 21\n                            },\n                            __self: _this,\n                            children: \"嘆き\"\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"textarea\", {\n                            value: text,\n                            onChange: function(e) {\n                                return setText(e.target.value);\n                            },\n                            __source: {\n                                fileName: \"D:\\\\Dev\\\\xmax-sad\\\\pages\\\\comments.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 21\n                            },\n                            __self: _this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                            type: \"submit\",\n                            value: \"嘆く\",\n                            __source: {\n                                fileName: \"D:\\\\Dev\\\\xmax-sad\\\\pages\\\\comments.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 21\n                            },\n                            __self: _this\n                        })\n                    ]\n                })\n            }),\n            _comments.map(function(comment) {\n                /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_util_Section__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    title: comment.name,\n                    __source: {\n                        fileName: \"D:\\\\Dev\\\\xmax-sad\\\\pages\\\\comments.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 17\n                    },\n                    __self: _this1,\n                    children: [\n                        comment.text,\n                        function() {\n                            console.log(\"comment::\", comment);\n                        }()\n                    ]\n                }, comment.key);\n            }),\n            _comments.length <= 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_util_Section__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                __source: {\n                    fileName: \"D:\\\\Dev\\\\xmax-sad\\\\pages\\\\comments.tsx\",\n                    lineNumber: 80,\n                    columnNumber: 17\n                },\n                __self: _this,\n                children: \"なに？非リアが一人もいないだと？！\"\n            }) : \"\"\n        ]\n    }));\n};\n_s(Coments, \"MlpL9KtOVfKcvupxbUxna0TWlKI=\");\n_c = Coments;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Coments);\nvar _c;\n$RefreshReg$(_c, \"Coments\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUssRUFBRTNCLElBQUk7NEJBQUU0QixRQUFRLEVBQUUsUUFBUSxDQUFQakMsQ0FBQztnQ0FBR3NCLE1BQU0sQ0FBTkEsT0FBTyxDQUFDdEIsQ0FBQyxDQUFDa0MsTUFBTSxDQUFDRixLQUFLOzs7Ozs7Ozs7NkZBQzNERixDQUFLOzRCQUFDQyxJQUFJLEVBQUMsQ0FBUTs0QkFBQ0MsS0FBSyxFQUFDLENBQUk7Ozs7Ozs7Ozs7O1lBSWxDWixTQUFLLENBQUNnQixHQUFHLENBQUMsUUFBUSxDQUFQQyxPQUFPOzhCQUNuQixNQUFNLHlEQUFMN0MsK0RBQU87b0JBQW1CK0IsS0FBSyxFQUFFYyxPQUFPLENBQUNqQyxJQUFJOzs7Ozs7Ozt3QkFDekNpQyxPQUFPLENBQUNoQyxJQUFJO3dCQUNYLFFBQVEsR0FBSixDQUFDSDs0QkFBQUEsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBVyxZQUFDa0MsT0FBTzt3QkFBQyxDQUFDOzttQkFGOUJBLE9BQU8sQ0FBQ3JCLEdBQUc7O1lBTTVCSSxTQUFTLENBQUNrQixNQUFNLElBQUksQ0FBQyx3RUFDakI5QywrREFBTzs7Ozs7OzswQkFBQyxDQUFpQjtpQkFFMUIsQ0FBRTs7O0FBSWxCLENBQUM7R0F4RUtLLE9BQU87S0FBUEEsT0FBTzs7QUF5RWIsK0RBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21tZW50cy50c3g/OTgyZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCJjb21wb25lbnRzL2xheW91dC9MYXlvdXRcIjtcclxuaW1wb3J0IFNlY3Rpb24gZnJvbSBcImNvbXBvbmVudHMvdXRpbC9TZWN0aW9uXCI7XHJcbmltcG9ydCBUaXRsZVNlY3Rpb24gZnJvbSBcImNvbXBvbmVudHMvdXRpbC9UaXRsZVNlY3Rpb25cIjtcclxuaW1wb3J0IHsgQ29tbWVudHMsIGdldENvbW1lbnRzIH0gZnJvbSBcImxpYi9kZXRhXCI7XHJcbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCBSZWFjdCwgeyBGQywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vY29tbWVudHMubW9kdWxlLnNjc3NcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29tZW50c1Byb3BzIHtcclxuICAgIGNvbW1lbnRzOiBDb21tZW50c1tdO1xyXG59XHJcblxyXG5jb25zdCBDb21lbnRzOiBGQzxDb21lbnRzUHJvcHM+ID0gKHsgY29tbWVudHMgfSkgPT4ge1xyXG4gICAgY29uc3QgW19jb21tZW50cyAsIHNldENvbW1lbnRzXSA9IHVzZVN0YXRlKGNvbW1lbnRzKSA7XHJcbiAgICBjb25zdCBbbmFtZSxzZXROYW1lXSA9IHVzZVN0YXRlKFwi5a2k54us44Gq6Z2e44Oq44KiXCIpIDtcclxuICAgIGNvbnN0IFt0ZXh0LHNldFRleHRdID0gdXNlU3RhdGUoXCLjgq/jg6rjgrnjg57jgrnjgaPjgabjgIHjgYTjgYTjgojjgaouLi5cIikgO1xyXG4gICAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGU6UmVhY3QuRm9ybUV2ZW50KXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLlmIbjgY9cIixuYW1lLHRleHQpXHJcbiAgICAgICAgY29uc3QgYm9keSA9IHtcclxuICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgdGV4dCxcclxuICAgICAgICB9IDtcclxuICAgICAgICBmZXRjaChcIi9hcGkvY29tbWVudC9wb3N0XCIse1xyXG4gICAgICAgICAgICBtZXRob2Q6XCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGJvZHk6SlNPTi5zdHJpbmdpZnkoYm9keSksXHJcbiAgICAgICAgfSkudGhlbihyZXM9PnJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKGpzb249PntcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGF2ZSBhIGdvb2QgeG1hcyAuLi5cIilcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGpzb24pO1xyXG4gICAgICAgICAgICAgICAgc2V0Q29tbWVudHMocHJldj0+W1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnByZXYsXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6anNvbi5rZXksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6Ym9keS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OmJvZHkudGV4dCxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGU9PntcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIuOCqOODqeODvOOBjOeZuueUn+OBl+OBvuOBl+OBn1wiKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxUaXRsZVNlY3Rpb24gdGl0bGU9XCLpnZ7jg6rjgqLjga7lmIbjgY1cIiAvPlxyXG4gICAgICAgICAgICA8U2VjdGlvblxyXG4gICAgICAgICAgICAgICAgdGl0bGU9XCLjgYLjgYHjgIHnpZ7jgojjgILpnZ7jg6rjgqLjga7mgrbjgYjoi6bjgZfjgoDlo7DjgYzogZ7jgZPjgYjjgovjgZ7jgoguLi5cIlxyXG4gICAgICAgICAgICAgICAgZnVsbFxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICDlhajlm73jga7pnZ7jg6rjgqLjga/jgZPjgZPjgavjgrPjg6Hjg7Pjg4jjgpLmrovjgZfjgabjgIFcclxuICAgICAgICAgICAgICAgIOOCr+ODquOCueODnuOCueOBruiLpuOBl+OBleOCkue0m+OCieOCj+OBl+OBpuOBj+OBoOOBleOBhOOAglxyXG4gICAgICAgICAgICAgICAg5a6J5b+D44GX44Gm44GP44Gg44GV44GE44CB5Luy6ZaT44Gv44Gf44GP44GV44KT44GE44G+44GZ44CCXHJcbiAgICAgICAgICAgIDwvU2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgIDxTZWN0aW9uIHRpdGxlPVwi5ZiG44GPXCI+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCJcIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9e3N0eWxlcy5mb3JtfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDpnZ7jg6rjgqLjga7lkI3liY1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17bmFtZX0gb25DaGFuZ2U9eyhlKT0+c2V0TmFtZShlLnRhcmdldC52YWx1ZSl9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDlmIbjgY0gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIHZhbHVlPXt0ZXh0fSBvbkNoYW5nZT17KGUpPT5zZXRUZXh0KGUudGFyZ2V0LnZhbHVlKX0+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwi5ZiG44GPXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9TZWN0aW9uPlxyXG5cclxuICAgICAgICAgICAge19jb21tZW50cy5tYXAoKGNvbW1lbnQpID0+IChcclxuICAgICAgICAgICAgICAgIDxTZWN0aW9uIGtleT17Y29tbWVudC5rZXl9IHRpdGxlPXtjb21tZW50Lm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtjb21tZW50LnRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgeygoKT0+e2NvbnNvbGUubG9nKFwiY29tbWVudDo6XCIsY29tbWVudCl9KSgpfVxyXG4gICAgICAgICAgICAgICAgPC9TZWN0aW9uPlxyXG4gICAgICAgICAgICApKX1cclxuXHJcbiAgICAgICAgICAgIHtfY29tbWVudHMubGVuZ3RoIDw9IDAgPyAoXHJcbiAgICAgICAgICAgICAgICA8U2VjdGlvbj7jgarjgavvvJ/pnZ7jg6rjgqLjgYzkuIDkurrjgoLjgYTjgarjgYTjgaDjgajvvJ/vvIE8L1NlY3Rpb24+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBDb21lbnRzO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gICAgY29uc3QgY29tbWVudHMgPSBhd2FpdCBnZXRDb21tZW50cygpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBjb21tZW50cyxcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxufTtcclxuIl0sIm5hbWVzIjpbIkxheW91dCIsIlNlY3Rpb24iLCJUaXRsZVNlY3Rpb24iLCJSZWFjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiQ29tZW50cyIsImNvbW1lbnRzIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsIm5hbWUiLCJ0ZXh0IiwiYm9keSIsImZldGNoIiwibWV0aG9kIiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXMiLCJqc29uIiwic2V0Q29tbWVudHMiLCJwcmV2Iiwia2V5IiwiY2F0Y2giLCJlcnJvciIsImFsZXJ0IiwiX2NvbW1lbnRzIiwic2V0TmFtZSIsInNldFRleHQiLCJ0aXRsZSIsImZ1bGwiLCJmb3JtIiwiYWN0aW9uIiwib25TdWJtaXQiLCJjbGFzc05hbWUiLCJkaXYiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidGV4dGFyZWEiLCJtYXAiLCJjb21tZW50IiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/comments.tsx\n");

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[5].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[4]!./pages/comments.module.scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[5].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[4]!./pages/comments.module.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\", \"\",{\"version\":3,\"sources\":[],\"names\":[],\"mappings\":\"\",\"sourceRoot\":\"\"}]);\n// Exports\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzJdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzNdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzRdIS4vcGFnZXMvY29tbWVudHMubW9kdWxlLnNjc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxtS0FBK0U7QUFDekg7QUFDQTtBQUNBLGlEQUFpRCxrRUFBa0U7QUFDbkg7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21tZW50cy5tb2R1bGUuc2Nzcz8zNGJkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[5].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[4]!./pages/comments.module.scss\n");

/***/ }),

/***/ "./pages/comments.module.scss":
/*!************************************!*\
  !*** ./pages/comments.module.scss ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! !../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !!../node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[1]!../node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[2]!../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[5].use[3]!../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[4]!./comments.module.scss */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[5].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[4]!./pages/comments.module.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.id, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = function(element) {\n                // These elements should always exist. If they do not,\n                // this code should fail.\n                var anchorElement = document.querySelector('#__next_css__DO_NOT_USE__');\n                var parentNode = anchorElement.parentNode// Normally <head>\n                ;\n                // Each style tag should be placed right before our\n                // anchor. By inserting before and not after, we do not\n                // need to track the last inserted element.\n                parentNode.insertBefore(element, anchorElement);\n            };\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\nif (true) {\n  if (!content.locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {\n    if (!a && b || a && !b) {\n        return false;\n    }\n    let p;\n    for(p in a){\n        if (isNamedExport && p === 'default') {\n            continue;\n        }\n        if (a[p] !== b[p]) {\n            return false;\n        }\n    }\n    for(p in b){\n        if (isNamedExport && p === 'default') {\n            continue;\n        }\n        if (!a[p]) {\n            return false;\n        }\n    }\n    return true;\n};\n    var oldLocals = content.locals;\n\n    module.hot.accept(\n      /*! !!../node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[1]!../node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[2]!../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[5].use[3]!../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[4]!./comments.module.scss */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[5].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[4]!./pages/comments.module.scss\",\n      function () {\n        content = __webpack_require__(/*! !!../node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[1]!../node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[2]!../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[5].use[3]!../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[4]!./comments.module.scss */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[5].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[4]!./pages/comments.module.scss\");\n\n              content = content.__esModule ? content.default : content;\n\n              if (typeof content === 'string') {\n                content = [[module.id, content, '']];\n              }\n\n              if (!isEqualLocals(oldLocals, content.locals)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = content.locals;\n\n              update(content);\n      }\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\nmodule.exports = content.locals || {};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21tZW50cy5tb2R1bGUuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQSxVQUFVLG1CQUFPLENBQUMsb05BQXdHO0FBQzFILDBCQUEwQixtQkFBTyxDQUFDLG8zQkFBdWI7O0FBRXpkOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBLElBQUksSUFBVTtBQUNkLHlCQUF5QixVQUFVO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLGlCQUFpQjtBQUNyQixNQUFNLG8zQkFBdWI7QUFDN2I7QUFDQSxrQkFBa0IsbUJBQU8sQ0FBQyxvM0JBQXViOztBQUVqZDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsVUFBVTs7QUFFMUI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLFVBQVU7QUFDWjtBQUNBLEdBQUc7QUFDSDs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21tZW50cy5tb2R1bGUuc2Nzcz9mZDllIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMV0hLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVsyXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbM10hLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzRdIS4vY29tbWVudHMubW9kdWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4gICAgICAgICAgICAgICAgLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxuICAgICAgICAgICAgICAgIHZhciBhbmNob3JFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO1xuICAgICAgICAgICAgICAgIHZhciBwYXJlbnROb2RlID0gYW5jaG9yRWxlbWVudC5wYXJlbnROb2RlLy8gTm9ybWFsbHkgPGhlYWQ+XG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgIC8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuICAgICAgICAgICAgICAgIC8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3RcbiAgICAgICAgICAgICAgICAvLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCwgYW5jaG9yRWxlbWVudCk7XG4gICAgICAgICAgICB9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gICAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGxldCBwO1xuICAgIGZvcihwIGluIGEpe1xuICAgICAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSAnZGVmYXVsdCcpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yKHAgaW4gYil7XG4gICAgICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09ICdkZWZhdWx0Jykge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFhW3BdKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVsxXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzJdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVszXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbNF0hLi9jb21tZW50cy5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzFdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMl0hLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzNdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVs0XSEuL2NvbW1lbnRzLm1vZHVsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/comments.module.scss\n");

/***/ })

});