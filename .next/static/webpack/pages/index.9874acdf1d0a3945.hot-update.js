"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/nav.js":
/*!***************************!*\
  !*** ./components/nav.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./container */ \"./components/container.js\");\n/* harmony import */ var _public_images_dg_logo_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/images/dg-logo.png */ \"./public/images/dg-logo.png\");\nvar _this = undefined;\n\n\n\n\n\n\nvar Navbar = [\n    {\n        \"name\": \"Home\",\n        \"url\": \"/\"\n    },\n    {\n        \"name\": \"\",\n        \"url\": \"\"\n    }\n];\nvar Nav = function(param) {\n    var categories = param.categories;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white py-4\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_container__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-80 h-28 relative\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: \"/\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    // loader={loader}\n                                    layout: \"fill\",\n                                    width: \"100%\",\n                                    height: \"100%\",\n                                    objectFit: \"contain\",\n                                    src: _public_images_dg_logo_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                                    alt: \"\",\n                                    priority: \"false\",\n                                    className: \"w-1/4 block\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/charliemoon/Documents/SkaiLab/my-project/frontend/components/nav.js\",\n                                    lineNumber: 27,\n                                    columnNumber: 17\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/charliemoon/Documents/SkaiLab/my-project/frontend/components/nav.js\",\n                                lineNumber: 26,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/charliemoon/Documents/SkaiLab/my-project/frontend/components/nav.js\",\n                            lineNumber: 25,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/charliemoon/Documents/SkaiLab/my-project/frontend/components/nav.js\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"navbar-right\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"navbar-nav flex\",\n                            children: [\n                                categories.map(function(category) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            href: \"/category/\".concat(category.attributes.slug),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                className: \"text-xl mr-14\",\n                                                children: category.attributes.name\n                                            }, void 0, false, {\n                                                fileName: \"/Users/charliemoon/Documents/SkaiLab/my-project/frontend/components/nav.js\",\n                                                lineNumber: 47,\n                                                columnNumber: 23\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/charliemoon/Documents/SkaiLab/my-project/frontend/components/nav.js\",\n                                            lineNumber: 46,\n                                            columnNumber: 21\n                                        }, _this)\n                                    }, category.id, false, {\n                                        fileName: \"/Users/charliemoon/Documents/SkaiLab/my-project/frontend/components/nav.js\",\n                                        lineNumber: 45,\n                                        columnNumber: 19\n                                    }, _this);\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        href: \"#\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            className: \"border-black border-r-2 pr-3\",\n                                            children: \"ខ្មែរ\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/charliemoon/Documents/SkaiLab/my-project/frontend/components/nav.js\",\n                                            lineNumber: 56,\n                                            columnNumber: 19\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/charliemoon/Documents/SkaiLab/my-project/frontend/components/nav.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/charliemoon/Documents/SkaiLab/my-project/frontend/components/nav.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        href: \"#\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            className: \"pl-3\",\n                                            children: \"EN\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/charliemoon/Documents/SkaiLab/my-project/frontend/components/nav.js\",\n                                            lineNumber: 61,\n                                            columnNumber: 19\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/charliemoon/Documents/SkaiLab/my-project/frontend/components/nav.js\",\n                                        lineNumber: 60,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/charliemoon/Documents/SkaiLab/my-project/frontend/components/nav.js\",\n                                    lineNumber: 59,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/charliemoon/Documents/SkaiLab/my-project/frontend/components/nav.js\",\n                            lineNumber: 42,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/charliemoon/Documents/SkaiLab/my-project/frontend/components/nav.js\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/charliemoon/Documents/SkaiLab/my-project/frontend/components/nav.js\",\n                lineNumber: 23,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/charliemoon/Documents/SkaiLab/my-project/frontend/components/nav.js\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/charliemoon/Documents/SkaiLab/my-project/frontend/components/nav.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, _this);\n};\n_c = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\nvar _c;\n$RefreshReg$(_c, \"Nav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUF5QjtBQUNTO0FBQ047QUFDTztBQUVZO0FBRS9DLElBQU1LLE1BQU0sR0FBRztJQUNiO1FBQ0UsTUFBTSxFQUFFLE1BQU07UUFDZCxLQUFLLEVBQUUsR0FBRztLQUNYO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsRUFBRTtRQUNWLEtBQUssRUFBRSxFQUFFO0tBQ1Y7Q0FDRjtBQUVELElBQU1DLEdBQUcsR0FBRyxnQkFBb0I7UUFBakJDLFVBQVUsU0FBVkEsVUFBVTtJQUN2QixxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMsZUFBZTtrQkFDNUIsNEVBQUNOLGtEQUFTO3NCQUNSLDRFQUFDSyxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsbUNBQW1DOztrQ0FDaEQsOERBQUNELEtBQUc7d0JBQUNDLFNBQVMsRUFBQyxvQkFBb0I7a0NBQ2pDLDRFQUFDUCxrREFBSTs0QkFBQ1EsSUFBSSxFQUFDLEdBQUc7c0NBQ1osNEVBQUNDLEdBQUM7MENBQ0EsNEVBQUNWLG1EQUFTO29DQUNSLGtCQUFrQjtvQ0FDbEJXLE1BQU0sRUFBQyxNQUFNO29DQUNiQyxLQUFLLEVBQUUsTUFBTTtvQ0FDYkMsTUFBTSxFQUFFLE1BQU07b0NBQ2RDLFNBQVMsRUFBQyxTQUFTO29DQUNuQkMsR0FBRyxFQUFFWixrRUFBSTtvQ0FDVGEsR0FBRyxFQUFFLEVBQUU7b0NBQ1BDLFFBQVEsRUFBQyxPQUFPO29DQUNoQlQsU0FBUyxFQUFDLGFBQWE7Ozs7O3lDQUN2Qjs7Ozs7cUNBQ0E7Ozs7O2lDQUNDOzs7Ozs2QkFDSDtrQ0FDTiw4REFBQ0QsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLGNBQWM7a0NBQzNCLDRFQUFDVSxJQUFFOzRCQUFDVixTQUFTLEVBQUMsaUJBQWlCOztnQ0FDNUJGLFVBQVUsQ0FBQ2EsR0FBRyxDQUFDLFNBQUNDLFFBQVEsRUFBSztvQ0FDNUIscUJBQ0UsOERBQUNDLElBQUU7a0RBQ0QsNEVBQUNwQixrREFBSTs0Q0FBQ1EsSUFBSSxFQUFFLFlBQVcsQ0FBMkIsT0FBekJXLFFBQVEsQ0FBQ0UsVUFBVSxDQUFDQyxJQUFJLENBQUU7c0RBQ2pELDRFQUFDYixHQUFDO2dEQUFDRixTQUFTLEVBQUMsZUFBZTswREFDekJZLFFBQVEsQ0FBQ0UsVUFBVSxDQUFDRSxJQUFJOzs7OztxREFDdkI7Ozs7O2lEQUNDO3VDQUxBSixRQUFRLENBQUNLLEVBQUU7Ozs7NkNBTWYsQ0FDTjtnQ0FDSCxDQUFDLENBQUM7OENBQ0YsOERBQUNKLElBQUU7OENBQ0QsNEVBQUNwQixrREFBSTt3Q0FBQ1EsSUFBSSxFQUFDLEdBQUc7a0RBQ1osNEVBQUNDLEdBQUM7NENBQUNGLFNBQVMsRUFBQyw4QkFBOEI7c0RBQUMsT0FBSzs7Ozs7aURBQUk7Ozs7OzZDQUNoRDs7Ozs7eUNBQ0o7OENBQ0wsOERBQUNhLElBQUU7OENBQ0QsNEVBQUNwQixrREFBSTt3Q0FBQ1EsSUFBSSxFQUFDLEdBQUc7a0RBQ1osNEVBQUNDLEdBQUM7NENBQUNGLFNBQVMsRUFBQyxNQUFNO3NEQUFDLElBQUU7Ozs7O2lEQUFJOzs7Ozs2Q0FDckI7Ozs7O3lDQUNKOzs7Ozs7aUNBQ0Y7Ozs7OzZCQUNEOzs7Ozs7cUJBQ0Y7Ozs7O2lCQUNJOzs7OzthQUNSLENBQ1A7QUFDSCxDQUFDO0FBbkRLSCxLQUFBQSxHQUFHO0FBcURULCtEQUFlQSxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbmF2LmpzPzUzNzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgTmV4dEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi9jb250YWluZXJcIlxuXG5pbXBvcnQgTG9nbyBmcm9tIFwiLi4vcHVibGljL2ltYWdlcy9kZy1sb2dvLnBuZ1wiXG5cbmNvbnN0IE5hdmJhciA9IFtcbiAge1xuICAgICduYW1lJzogJ0hvbWUnLFxuICAgICd1cmwnOiAnLydcbiAgfSxcbiAge1xuICAgICduYW1lJzogJycsXG4gICAgJ3VybCc6ICcnXG4gIH1cbl1cblxuY29uc3QgTmF2ID0gKHsgY2F0ZWdvcmllcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBweS00XCI+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy04MCBoLTI4IHJlbGF0aXZlXCI+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICA8TmV4dEltYWdlXG4gICAgICAgICAgICAgICAgICAvLyBsb2FkZXI9e2xvYWRlcn1cbiAgICAgICAgICAgICAgICAgIGxheW91dD1cImZpbGxcIlxuICAgICAgICAgICAgICAgICAgd2lkdGg9e1wiMTAwJVwifVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtcIjEwMCVcIn1cbiAgICAgICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvbnRhaW5cIlxuICAgICAgICAgICAgICAgICAgc3JjPXtMb2dvfVxuICAgICAgICAgICAgICAgICAgYWx0PXtcIlwifVxuICAgICAgICAgICAgICAgICAgcHJpb3JpdHk9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEvNCBibG9ja1wiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLXJpZ2h0XCI+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBmbGV4XCI+XG4gICAgICAgICAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17Y2F0ZWdvcnkuaWR9PlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2NhdGVnb3J5LyR7Y2F0ZWdvcnkuYXR0cmlidXRlcy5zbHVnfWB9PlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQteGwgbXItMTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeS5hdHRyaWJ1dGVzLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYm9yZGVyLWJsYWNrIGJvcmRlci1yLTIgcHItM1wiPuGegeGfkuGemOGfguGemjwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicGwtM1wiPkVOPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJOZXh0SW1hZ2UiLCJMaW5rIiwiQ29udGFpbmVyIiwiTG9nbyIsIk5hdmJhciIsIk5hdiIsImNhdGVnb3JpZXMiLCJkaXYiLCJjbGFzc05hbWUiLCJocmVmIiwiYSIsImxheW91dCIsIndpZHRoIiwiaGVpZ2h0Iiwib2JqZWN0Rml0Iiwic3JjIiwiYWx0IiwicHJpb3JpdHkiLCJ1bCIsIm1hcCIsImNhdGVnb3J5IiwibGkiLCJhdHRyaWJ1dGVzIiwic2x1ZyIsIm5hbWUiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/nav.js\n"));

/***/ })

});