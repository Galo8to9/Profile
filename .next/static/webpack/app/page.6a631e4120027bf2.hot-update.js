"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/Hero.jsx":
/*!*****************************!*\
  !*** ./components/Hero.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_use_downloader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-use-downloader */ \"(app-pages-browser)/./node_modules/react-use-downloader/dist/index.es.js\");\n/* harmony import */ var react_simple_typewriter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-simple-typewriter */ \"(app-pages-browser)/./node_modules/react-simple-typewriter/dist/index.js\");\n/* harmony import */ var _barrel_optimize_names_BsGithub_BsInstagram_BsLinkedin_react_icons_bs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=BsGithub,BsInstagram,BsLinkedin!=!react-icons/bs */ \"(app-pages-browser)/./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var _barrel_optimize_names_MdOutlineClose_react_icons_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=MdOutlineClose!=!react-icons/md */ \"(app-pages-browser)/./node_modules/react-icons/md/index.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Hero = ()=>{\n    _s();\n    const [text] = (0,react_simple_typewriter__WEBPACK_IMPORTED_MODULE_3__.useTypewriter)({\n        words: [\n            \"Web.dev\",\n            \"Entrepeneur\",\n            \"Worker\"\n        ],\n        loop: {},\n        typeSpeed: 100,\n        deleteSpeed: 100\n    });\n    const { size, elapsed, percentage, download, cancel, error, isInProgress } = (0,react_use_downloader__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    const fileUrl = \"http://localhost:3000/Curriculum.pdf\";\n    const filename = \"Curriculum.pdf\";\n    let [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col bg-white h-screen items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col text-center h-72 justify-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-5xl font-semibold text-black\",\n                        children: \"Profile\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rafaelgalo/Desktop/Profile/profile_rafael/components/Hero.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        onClick: ()=>download(fileUrl, filename),\n                        className: \"text-xl font-light text-black cursor-pointer hover:underline\",\n                        download: true,\n                        children: \"more +\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rafaelgalo/Desktop/Profile/profile_rafael/components/Hero.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rafaelgalo/Desktop/Profile/profile_rafael/components/Hero.jsx\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"flex flex-col h-screen w-screen fixed bg-black z-10 left-0 md:w-auto transition-all duration-[200ms] ease-in \".concat(open ? \"top-0 \" : \"top-[-900px]\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-screen flex justify-end pr-4 pt-5\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_MdOutlineClose_react_icons_md__WEBPACK_IMPORTED_MODULE_4__.MdOutlineClose, {\n                        onClick: ()=>setOpen(!open),\n                        size: 40,\n                        className: \"text-white cursor-pointer\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rafaelgalo/Desktop/Profile/profile_rafael/components/Hero.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 17\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/rafaelgalo/Desktop/Profile/profile_rafael/components/Hero.jsx\",\n                    lineNumber: 37,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/rafaelgalo/Desktop/Profile/profile_rafael/components/Hero.jsx\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-xl font-medium text-black\",\n                        children: \"Hello! I\\xb4m\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rafaelgalo/Desktop/Profile/profile_rafael/components/Hero.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-6xl font-semibold text-black\",\n                        children: \"Rafael Galo\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rafaelgalo/Desktop/Profile/profile_rafael/components/Hero.jsx\",\n                        lineNumber: 48,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-2xl font-medium text-black\",\n                        children: [\n                            text,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_simple_typewriter__WEBPACK_IMPORTED_MODULE_3__.Cursor, {}, void 0, false, {\n                                fileName: \"/Users/rafaelgalo/Desktop/Profile/profile_rafael/components/Hero.jsx\",\n                                lineNumber: 49,\n                                columnNumber: 69\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/rafaelgalo/Desktop/Profile/profile_rafael/components/Hero.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-md font-light text-black max-w-sm\",\n                        children: \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rafaelgalo/Desktop/Profile/profile_rafael/components/Hero.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rafaelgalo/Desktop/Profile/profile_rafael/components/Hero.jsx\",\n                lineNumber: 46,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-black mt-16 flex space-x-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BsGithub_BsInstagram_BsLinkedin_react_icons_bs__WEBPACK_IMPORTED_MODULE_5__.BsInstagram, {\n                        size: 25\n                    }, void 0, false, {\n                        fileName: \"/Users/rafaelgalo/Desktop/Profile/profile_rafael/components/Hero.jsx\",\n                        lineNumber: 54,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BsGithub_BsInstagram_BsLinkedin_react_icons_bs__WEBPACK_IMPORTED_MODULE_5__.BsLinkedin, {\n                        size: 25\n                    }, void 0, false, {\n                        fileName: \"/Users/rafaelgalo/Desktop/Profile/profile_rafael/components/Hero.jsx\",\n                        lineNumber: 55,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BsGithub_BsInstagram_BsLinkedin_react_icons_bs__WEBPACK_IMPORTED_MODULE_5__.BsGithub, {\n                        size: 25\n                    }, void 0, false, {\n                        fileName: \"/Users/rafaelgalo/Desktop/Profile/profile_rafael/components/Hero.jsx\",\n                        lineNumber: 56,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rafaelgalo/Desktop/Profile/profile_rafael/components/Hero.jsx\",\n                lineNumber: 53,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rafaelgalo/Desktop/Profile/profile_rafael/components/Hero.jsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Hero, \"hRy7DcyMqbUdURVpQBrb+p9FkqA=\", false, function() {\n    return [\n        react_simple_typewriter__WEBPACK_IMPORTED_MODULE_3__.useTypewriter,\n        react_use_downloader__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = Hero;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hero);\nvar _c;\n$RefreshReg$(_c, \"Hero\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvSGVyby5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUV1QztBQUNVO0FBQ2M7QUFFRTtBQUN3QztBQUMxRDtBQUUvQyxNQUFNYyxPQUFPOztJQUVYLE1BQU0sQ0FBQ0MsS0FBSyxHQUFHWixzRUFBYUEsQ0FBQztRQUMzQmEsT0FBTztZQUFDO1lBQVU7WUFBYztTQUFTO1FBQ3pDQyxNQUFNLENBQUM7UUFDUEMsV0FBVztRQUNYQyxhQUFhO0lBQ2Y7SUFFQSxNQUFNLEVBQUVDLElBQUksRUFBRUMsT0FBTyxFQUFFQyxVQUFVLEVBQUVDLFFBQVEsRUFDekNDLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxZQUFZLEVBQUUsR0FDakN4QixnRUFBYUE7SUFFWCxNQUFNeUIsVUFBVTtJQUNoQixNQUFNQyxXQUFXO0lBRWpCLElBQUksQ0FBQ0MsTUFBS0MsUUFBUSxHQUFDN0IsK0NBQVFBLENBQUM7SUFFNUIscUJBQ0UsOERBQUM4QjtRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDQzt3QkFBR0QsV0FBVTtrQ0FBb0M7Ozs7OztrQ0FDbEQsOERBQUNFO3dCQUFFQyxTQUFTLElBQU1aLFNBQVNJLFNBQVNDO3dCQUFXSSxXQUFVO3dCQUErRFQsUUFBUTtrQ0FBQzs7Ozs7Ozs7Ozs7OzBCQUdySSw4REFBQ2E7Z0JBQUdKLFdBQVcsZ0hBQStJLE9BQS9CSCxPQUFPLFdBQVM7MEJBQzNJLDRFQUFDRTtvQkFBSUMsV0FBVTs4QkFDWCw0RUFBQ25CLGdHQUFjQTt3QkFBQ3NCLFNBQVMsSUFBSUwsUUFBUSxDQUFDRDt3QkFBT1QsTUFBTTt3QkFBSVksV0FBVTs7Ozs7Ozs7Ozs7Ozs7OzswQkFRekUsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0s7d0JBQUVMLFdBQVU7a0NBQWlDOzs7Ozs7a0NBQzlDLDhEQUFDQzt3QkFBR0QsV0FBVTtrQ0FBb0M7Ozs7OztrQ0FDbEQsOERBQUNNO3dCQUFLTixXQUFVOzs0QkFBbUNqQjswQ0FBSyw4REFBQ1gsMkRBQU1BOzs7Ozs7Ozs7OztrQ0FDL0QsOERBQUNpQzt3QkFBRUwsV0FBVTtrQ0FBeUM7Ozs7Ozs7Ozs7OzswQkFHMUQsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQzNCLDhHQUFXQTt3QkFBQ2UsTUFBTTs7Ozs7O2tDQUNuQiw4REFBQ2QsNkdBQVVBO3dCQUFDYyxNQUFNOzs7Ozs7a0NBQ2xCLDhEQUFDYiwyR0FBUUE7d0JBQUNhLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUs1QjtHQWxETU47O1FBRVdYLGtFQUFhQTtRQVM5QkQsNERBQWFBOzs7S0FYUFk7QUFvRE4sK0RBQWVBLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZXJvLmpzeD8yOGFlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHVzZURvd25sb2FkZXIgZnJvbSBcInJlYWN0LXVzZS1kb3dubG9hZGVyXCI7XG5pbXBvcnQgeyB1c2VUeXBld3JpdGVyLCBDdXJzb3IgfSBmcm9tIFwicmVhY3Qtc2ltcGxlLXR5cGV3cml0ZXJcIlxuXG5pbXBvcnQgeyBCc0luc3RhZ3JhbSwgQnNMaW5rZWRpbiwgQnNHaXRodWJ9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiXG5pbXBvcnQgeyBCaUxvZ29KYXZhc2NyaXB0LCBCaUxvZ29UeXBlc2NyaXB0LCBCaUxvZ29IdG1sNSwgQmlMb2dvQ3NzMywgQmlMb2dvUHl0aG9ufSBmcm9tIFwicmVhY3QtaWNvbnMvYmlcIlxuaW1wb3J0IHsgTWRPdXRsaW5lQ2xvc2UgfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIlxuXG5jb25zdCBIZXJvID0gKCkgPT4ge1xuICBcbiAgY29uc3QgW3RleHRdID0gdXNlVHlwZXdyaXRlcih7XG4gICAgd29yZHM6IFtcIldlYi5kZXZcIixcIkVudHJlcGVuZXVyXCIsXCJXb3JrZXJcIl0sXG4gICAgbG9vcDoge30sXG4gICAgdHlwZVNwZWVkOiAxMDAsXG4gICAgZGVsZXRlU3BlZWQ6IDEwMCxcbiAgfSk7XG5cbiAgY29uc3QgeyBzaXplLCBlbGFwc2VkLCBwZXJjZW50YWdlLCBkb3dubG9hZCwgXG4gICAgY2FuY2VsLCBlcnJvciwgaXNJblByb2dyZXNzIH0gPSBcbnVzZURvd25sb2FkZXIoKTsgXG5cbiAgY29uc3QgZmlsZVVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL0N1cnJpY3VsdW0ucGRmXCI7IFxuICBjb25zdCBmaWxlbmFtZSA9IFwiQ3VycmljdWx1bS5wZGZcIjsgXG5cbiAgbGV0IFtvcGVuLHNldE9wZW5dPXVzZVN0YXRlKGZhbHNlKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBiZy13aGl0ZSBoLXNjcmVlbiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHRleHQtY2VudGVyIGgtNzIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTV4bCBmb250LXNlbWlib2xkIHRleHQtYmxhY2tcIj5Qcm9maWxlPC9oMT5cbiAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IGRvd25sb2FkKGZpbGVVcmwsIGZpbGVuYW1lKX0gY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWxpZ2h0IHRleHQtYmxhY2sgY3Vyc29yLXBvaW50ZXIgaG92ZXI6dW5kZXJsaW5lXCIgZG93bmxvYWQ+bW9yZSArPC9hPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8dWwgY2xhc3NOYW1lPXtgZmxleCBmbGV4LWNvbCBoLXNjcmVlbiB3LXNjcmVlbiBmaXhlZCBiZy1ibGFjayB6LTEwIGxlZnQtMCBtZDp3LWF1dG8gdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tWzIwMG1zXSBlYXNlLWluICR7b3BlbiA/ICd0b3AtMCAnOid0b3AtWy05MDBweF0nfWB9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctc2NyZWVuIGZsZXgganVzdGlmeS1lbmQgcHItNCBwdC01Jz5cbiAgICAgICAgICAgICAgICA8TWRPdXRsaW5lQ2xvc2Ugb25DbGljaz17KCk9PnNldE9wZW4oIW9wZW4pfSBzaXplPXs0MH0gY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBjdXJzb3ItcG9pbnRlclwiLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgXG5cbiAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtbWVkaXVtIHRleHQtYmxhY2tcIj5IZWxsbyEgScK0bTwvcD5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTZ4bCBmb250LXNlbWlib2xkIHRleHQtYmxhY2tcIj5SYWZhZWwgR2FsbzwvaDE+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LW1lZGl1bSB0ZXh0LWJsYWNrXCI+e3RleHR9PEN1cnNvci8+PC9zcGFuPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tZCBmb250LWxpZ2h0IHRleHQtYmxhY2sgbWF4LXctc21cIj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgaW4gdm9sdXB0YXRlPC9wPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtYmxhY2sgbXQtMTYgZmxleCBzcGFjZS14LTVcIj5cbiAgICAgICAgICAgIDxCc0luc3RhZ3JhbSBzaXplPXsyNX0vPlxuICAgICAgICAgICAgPEJzTGlua2VkaW4gc2l6ZT17MjV9Lz5cbiAgICAgICAgICAgIDxCc0dpdGh1YiBzaXplPXsyNX0vPlxuICAgICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlcm8iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZURvd25sb2FkZXIiLCJ1c2VUeXBld3JpdGVyIiwiQ3Vyc29yIiwiQnNJbnN0YWdyYW0iLCJCc0xpbmtlZGluIiwiQnNHaXRodWIiLCJCaUxvZ29KYXZhc2NyaXB0IiwiQmlMb2dvVHlwZXNjcmlwdCIsIkJpTG9nb0h0bWw1IiwiQmlMb2dvQ3NzMyIsIkJpTG9nb1B5dGhvbiIsIk1kT3V0bGluZUNsb3NlIiwiSGVybyIsInRleHQiLCJ3b3JkcyIsImxvb3AiLCJ0eXBlU3BlZWQiLCJkZWxldGVTcGVlZCIsInNpemUiLCJlbGFwc2VkIiwicGVyY2VudGFnZSIsImRvd25sb2FkIiwiY2FuY2VsIiwiZXJyb3IiLCJpc0luUHJvZ3Jlc3MiLCJmaWxlVXJsIiwiZmlsZW5hbWUiLCJvcGVuIiwic2V0T3BlbiIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiYSIsIm9uQ2xpY2siLCJ1bCIsInAiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Hero.jsx\n"));

/***/ })

});