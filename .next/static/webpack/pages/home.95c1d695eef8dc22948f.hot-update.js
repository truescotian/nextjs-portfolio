webpackHotUpdate_N_E("pages/home",{

/***/ "./components/aboutMe.js":
/*!*******************************!*\
  !*** ./components/aboutMe.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AboutMeV2; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-jss */ \"./node_modules/react-jss/dist/react-jss.esm.js\");\n\n\n\nvar _jsxFileName = \"/home/greg/nextjs/nextjs-portfolio/components/aboutMe.js\",\n    _circle,\n    _s = $RefreshSig$();\n\n\n\nvar useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_3__[\"createUseStyles\"])({\n  container: {\n    display: \"block\",\n    width: \"100%\",\n    marginTop: \"30px\"\n  },\n  h1: {\n    margin: \"auto auto\",\n    marginTop: \"30px\",\n    fontFamily: \"Moderat\",\n    fontWeight: \"200\",\n    letterSpacing: \"normal\",\n    textAlign: \"center\"\n  },\n  circle: (_circle = {\n    margin: \"auto auto\",\n    display: \"flex\",\n    justifyContent: \"center\",\n    alignItems: \"center\",\n    border: \"1px solid #fff\",\n    borderRadius: \"100%\",\n    textAlign: \"center\",\n    width: \"30px\",\n    height: \"30px\"\n  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_circle, \"display\", \"flex\"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_circle, \"fontSize\", \"40px\"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_circle, \"padding\", \"15px\"), _circle)\n});\nfunction AboutMeV2() {\n  _s();\n\n  var classes = useStyles();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: classes.container,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: classes.circle,\n      children: \"+\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h1\", {\n      className: classes.h1,\n      children: \"About Me\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 38,\n    columnNumber: 5\n  }, this);\n}\n\n_s(AboutMeV2, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = AboutMeV2;\n\nvar _c;\n\n$RefreshReg$(_c, \"AboutMeV2\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hYm91dE1lLmpzP2UyYzMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwiY3JlYXRlVXNlU3R5bGVzIiwiY29udGFpbmVyIiwiZGlzcGxheSIsIndpZHRoIiwibWFyZ2luVG9wIiwiaDEiLCJtYXJnaW4iLCJmb250RmFtaWx5IiwiZm9udFdlaWdodCIsImxldHRlclNwYWNpbmciLCJ0ZXh0QWxpZ24iLCJjaXJjbGUiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJoZWlnaHQiLCJBYm91dE1lVjIiLCJjbGFzc2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxpRUFBZSxDQUFDO0FBQ2hDQyxXQUFTLEVBQUU7QUFDVEMsV0FBTyxFQUFFLE9BREE7QUFFVEMsU0FBSyxFQUFFLE1BRkU7QUFHVEMsYUFBUyxFQUFFO0FBSEYsR0FEcUI7QUFNaENDLElBQUUsRUFBRTtBQUNGQyxVQUFNLEVBQUUsV0FETjtBQUVGRixhQUFTLEVBQUUsTUFGVDtBQUdGRyxjQUFVLEVBQUUsU0FIVjtBQUlGQyxjQUFVLEVBQUUsS0FKVjtBQUtGQyxpQkFBYSxFQUFFLFFBTGI7QUFNRkMsYUFBUyxFQUFFO0FBTlQsR0FONEI7QUFjaENDLFFBQU07QUFDSkwsVUFBTSxFQUFFLFdBREo7QUFFSkosV0FBTyxFQUFFLE1BRkw7QUFHSlUsa0JBQWMsRUFBRSxRQUhaO0FBSUpDLGNBQVUsRUFBRSxRQUpSO0FBS0pDLFVBQU0sRUFBRSxnQkFMSjtBQU1KQyxnQkFBWSxFQUFFLE1BTlY7QUFPSkwsYUFBUyxFQUFFLFFBUFA7QUFRSlAsU0FBSyxFQUFDLE1BUkY7QUFTSmEsVUFBTSxFQUFDO0FBVEgsbUhBVUssTUFWTCxrSEFXSyxNQVhMLGlIQVlLLE1BWkw7QUFkMEIsQ0FBRCxDQUFqQztBQThCZSxTQUFTQyxTQUFULEdBQXFCO0FBQUE7O0FBQ2xDLE1BQU1DLE9BQU8sR0FBR25CLFNBQVMsRUFBekI7QUFFQSxzQkFDRTtBQUFLLGFBQVMsRUFBRW1CLE9BQU8sQ0FBQ2pCLFNBQXhCO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUVpQixPQUFPLENBQUNQLE1BQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFJRTtBQUFJLGVBQVMsRUFBRU8sT0FBTyxDQUFDYixFQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBUUQ7O0dBWHVCWSxTO1VBQ05sQixTOzs7S0FETWtCLFMiLCJmaWxlIjoiLi9jb21wb25lbnRzL2Fib3V0TWUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVVc2VTdHlsZXMgfSBmcm9tICdyZWFjdC1qc3MnXG5cbmNvbnN0IHVzZVN0eWxlcyA9IGNyZWF0ZVVzZVN0eWxlcyh7XG4gIGNvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgbWFyZ2luVG9wOiBcIjMwcHhcIlxuICB9LFxuICBoMToge1xuICAgIG1hcmdpbjogXCJhdXRvIGF1dG9cIixcbiAgICBtYXJnaW5Ub3A6IFwiMzBweFwiLFxuICAgIGZvbnRGYW1pbHk6IFwiTW9kZXJhdFwiLFxuICAgIGZvbnRXZWlnaHQ6IFwiMjAwXCIsXG4gICAgbGV0dGVyU3BhY2luZzogXCJub3JtYWxcIixcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gIH0sXG4gIGNpcmNsZToge1xuICAgIG1hcmdpbjogXCJhdXRvIGF1dG9cIixcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIGJvcmRlcjogXCIxcHggc29saWQgI2ZmZlwiLFxuICAgIGJvcmRlclJhZGl1czogXCIxMDAlXCIsXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgIHdpZHRoOlwiMzBweFwiLFxuICAgIGhlaWdodDpcIjMwcHhcIixcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmb250U2l6ZTpcIjQwcHhcIixcbiAgICBwYWRkaW5nOiBcIjE1cHhcIlxuICB9XG59KVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBYm91dE1lVjIoKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNpcmNsZX0+XG4gICAgICAgICtcbiAgICAgIDwvZGl2PlxuICAgICAgPGgxIGNsYXNzTmFtZT17Y2xhc3Nlcy5oMX0+QWJvdXQgTWU8L2gxPlxuICAgIDwvZGl2PlxuICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/aboutMe.js\n");

/***/ })

})