webpackHotUpdate_N_E("pages/home",{

/***/ "./components/aboutMe.js":
/*!*******************************!*\
  !*** ./components/aboutMe.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AboutMeV2; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-jss */ \"./node_modules/react-jss/dist/react-jss.esm.js\");\n\n\nvar _jsxFileName = \"/home/greg/nextjs/nextjs-portfolio/components/aboutMe.js\",\n    _s = $RefreshSig$();\n\n\n\nvar useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_2__[\"createUseStyles\"])({\n  container: {\n    display: \"block\",\n    width: \"100%\",\n    marginTop: \"30px\"\n  },\n  h1: {\n    margin: \"auto auto\",\n    marginTop: \"30px\",\n    fontFamily: \"Moderat\",\n    fontWeight: \"200\",\n    letterSpacing: \"normal\",\n    textAlign: \"center\"\n  },\n  circle: {\n    margin: \"0 auto\",\n    display: \"flex\",\n    flexFlow: \"row nowrap\",\n    justifyContent: \"center\",\n    alignItems: \"center\",\n    height: \"100px\",\n    width: \"100px\",\n    borderRadius: \"50%\",\n    border: \"1px solid #fff\",\n    \"& span\": {\n      fontSize: \"60px\",\n      transform: \"rotate(45deg)\",\n      paddingBottom: \"15px\",\n      fontWeight: \"200\"\n    }\n  }\n});\nfunction AboutMeV2() {\n  _s();\n\n  var classes = useStyles();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: classes.container,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: classes.circle,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        children: \"+\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      className: classes.h1,\n      children: \"About Me\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 41,\n    columnNumber: 5\n  }, this);\n}\n\n_s(AboutMeV2, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = AboutMeV2;\n\nvar _c;\n\n$RefreshReg$(_c, \"AboutMeV2\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hYm91dE1lLmpzP2UyYzMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwiY3JlYXRlVXNlU3R5bGVzIiwiY29udGFpbmVyIiwiZGlzcGxheSIsIndpZHRoIiwibWFyZ2luVG9wIiwiaDEiLCJtYXJnaW4iLCJmb250RmFtaWx5IiwiZm9udFdlaWdodCIsImxldHRlclNwYWNpbmciLCJ0ZXh0QWxpZ24iLCJjaXJjbGUiLCJmbGV4RmxvdyIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsImJvcmRlciIsImZvbnRTaXplIiwidHJhbnNmb3JtIiwicGFkZGluZ0JvdHRvbSIsIkFib3V0TWVWMiIsImNsYXNzZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLGlFQUFlLENBQUM7QUFDaENDLFdBQVMsRUFBRTtBQUNUQyxXQUFPLEVBQUUsT0FEQTtBQUVUQyxTQUFLLEVBQUUsTUFGRTtBQUdUQyxhQUFTLEVBQUU7QUFIRixHQURxQjtBQU1oQ0MsSUFBRSxFQUFFO0FBQ0ZDLFVBQU0sRUFBRSxXQUROO0FBRUZGLGFBQVMsRUFBRSxNQUZUO0FBR0ZHLGNBQVUsRUFBRSxTQUhWO0FBSUZDLGNBQVUsRUFBRSxLQUpWO0FBS0ZDLGlCQUFhLEVBQUUsUUFMYjtBQU1GQyxhQUFTLEVBQUU7QUFOVCxHQU40QjtBQWNoQ0MsUUFBTSxFQUFFO0FBQ05MLFVBQU0sRUFBRSxRQURGO0FBRU5KLFdBQU8sRUFBRSxNQUZIO0FBR05VLFlBQVEsRUFBRSxZQUhKO0FBSU5DLGtCQUFjLEVBQUUsUUFKVjtBQUtOQyxjQUFVLEVBQUUsUUFMTjtBQU1OQyxVQUFNLEVBQUUsT0FORjtBQU9OWixTQUFLLEVBQUUsT0FQRDtBQVFOYSxnQkFBWSxFQUFDLEtBUlA7QUFTTkMsVUFBTSxFQUFFLGdCQVRGO0FBVU4sY0FBVTtBQUNSQyxjQUFRLEVBQUUsTUFERjtBQUVSQyxlQUFTLEVBQUMsZUFGRjtBQUdSQyxtQkFBYSxFQUFFLE1BSFA7QUFJUlosZ0JBQVUsRUFBRTtBQUpKO0FBVko7QUFkd0IsQ0FBRCxDQUFqQztBQWlDZSxTQUFTYSxTQUFULEdBQXFCO0FBQUE7O0FBQ2xDLE1BQU1DLE9BQU8sR0FBR3ZCLFNBQVMsRUFBekI7QUFFQSxzQkFDRTtBQUFLLGFBQVMsRUFBRXVCLE9BQU8sQ0FBQ3JCLFNBQXhCO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUVxQixPQUFPLENBQUNYLE1BQXhCO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFJRTtBQUFJLGVBQVMsRUFBRVcsT0FBTyxDQUFDakIsRUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVFEOztHQVh1QmdCLFM7VUFDTnRCLFM7OztLQURNc0IsUyIsImZpbGUiOiIuL2NvbXBvbmVudHMvYWJvdXRNZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVVzZVN0eWxlcyB9IGZyb20gJ3JlYWN0LWpzcydcblxuY29uc3QgdXNlU3R5bGVzID0gY3JlYXRlVXNlU3R5bGVzKHtcbiAgY29udGFpbmVyOiB7XG4gICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICBtYXJnaW5Ub3A6IFwiMzBweFwiXG4gIH0sXG4gIGgxOiB7XG4gICAgbWFyZ2luOiBcImF1dG8gYXV0b1wiLFxuICAgIG1hcmdpblRvcDogXCIzMHB4XCIsXG4gICAgZm9udEZhbWlseTogXCJNb2RlcmF0XCIsXG4gICAgZm9udFdlaWdodDogXCIyMDBcIixcbiAgICBsZXR0ZXJTcGFjaW5nOiBcIm5vcm1hbFwiLFxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgfSxcbiAgY2lyY2xlOiB7XG4gICAgbWFyZ2luOiBcIjAgYXV0b1wiLFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhGbG93OiBcInJvdyBub3dyYXBcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIGhlaWdodDogXCIxMDBweFwiLFxuICAgIHdpZHRoOiBcIjEwMHB4XCIsXG4gICAgYm9yZGVyUmFkaXVzOlwiNTAlXCIsXG4gICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjZmZmXCIsXG4gICAgXCImIHNwYW5cIjoge1xuICAgICAgZm9udFNpemU6IFwiNjBweFwiLFxuICAgICAgdHJhbnNmb3JtOlwicm90YXRlKDQ1ZGVnKVwiLFxuICAgICAgcGFkZGluZ0JvdHRvbTogXCIxNXB4XCIsXG4gICAgICBmb250V2VpZ2h0OiBcIjIwMFwiXG4gICAgfVxuICB9XG59KVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBYm91dE1lVjIoKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNpcmNsZX0+XG4gICAgICAgIDxzcGFuPis8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxoMSBjbGFzc05hbWU9e2NsYXNzZXMuaDF9PkFib3V0IE1lPC9oMT5cbiAgICA8L2Rpdj5cbiAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/aboutMe.js\n");

/***/ })

})