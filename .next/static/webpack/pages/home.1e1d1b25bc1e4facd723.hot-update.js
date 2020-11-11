webpackHotUpdate_N_E("pages/home",{

/***/ "./components/sliderComponent.js":
/*!***************************************!*\
  !*** ./components/sliderComponent.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SliderComponent; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-jss */ \"./node_modules/react-jss/dist/react-jss.esm.js\");\n/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-transition-group */ \"./node_modules/react-transition-group/esm/index.js\");\n\n\nvar _jsxFileName = \"/home/greg/nextjs/nextjs-portfolio/components/sliderComponent.js\",\n    _s = $RefreshSig$();\n\n\n\n\nvar useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_2__[\"createUseStyles\"])({\n  container: {\n    display: \"block\",\n    width: \"100%\",\n    marginTop: \"30px\"\n  },\n  exit: {\n    margin: \"auto auto\",\n    height: \"min-content\",\n    width: \"min-content\",\n    textAlign: \"center\",\n    fontSize: \"50px\",\n    transform: \"rotate(45deg)\",\n    fontWeight: \"200\"\n  },\n  slideUp: {\n    position: \"absolute\",\n    top: \"0\",\n    left: \"0\",\n    backgroundColor: \"#000\",\n    overflow: 'auto',\n    height: \"100vh\",\n    width: \"100vw\",\n    transformOrigin: \"top\",\n    transition: \"transform .5s ease\",\n    transform: \"scaleY(0)\"\n  },\n  enterActive: {\n    transform: \"scaleY(1)\"\n  },\n  enterDone: {\n    transform: \"scaleY(1)\"\n  },\n  exitActive: {\n    transform: \"scaleY(0)\"\n  }\n});\nfunction SliderComponent(_ref) {\n  _s();\n\n  var _this = this;\n\n  var pages = _ref.pages;\n  var classes = useStyles();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      page = _useState[0],\n      setPage = _useState[1];\n\n  var show = function show(page) {\n    var SpecificPage = pages[page];\n\n    if (!page) {\n      return null;\n    }\n\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(SpecificPage, {\n      setPage: setPage\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 12\n    }, _this);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_transition_group__WEBPACK_IMPORTED_MODULE_3__[\"CSSTransition\"], {\n    \"in\": page !== null,\n    timeout: 300,\n    classNames: {\n      enterActive: classes.enterActive,\n      enterDone: classes.enterDone,\n      exitActive: classes.exitActive\n    },\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: classes.slideUp,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: classes.exit,\n        onClick: function onClick() {\n          return setPage(null);\n        },\n        children: \"+\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 11\n      }, this), show(page)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 9\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 56,\n    columnNumber: 5\n  }, this);\n}\n\n_s(SliderComponent, \"ww7HtQiUQafHwqSGL/JTEckeHDo=\", false, function () {\n  return [useStyles];\n});\n\n_c = SliderComponent;\n\nvar _c;\n\n$RefreshReg$(_c, \"SliderComponent\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zbGlkZXJDb21wb25lbnQuanM/NGQ0MSJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJjcmVhdGVVc2VTdHlsZXMiLCJjb250YWluZXIiLCJkaXNwbGF5Iiwid2lkdGgiLCJtYXJnaW5Ub3AiLCJleGl0IiwibWFyZ2luIiwiaGVpZ2h0IiwidGV4dEFsaWduIiwiZm9udFNpemUiLCJ0cmFuc2Zvcm0iLCJmb250V2VpZ2h0Iiwic2xpZGVVcCIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImJhY2tncm91bmRDb2xvciIsIm92ZXJmbG93IiwidHJhbnNmb3JtT3JpZ2luIiwidHJhbnNpdGlvbiIsImVudGVyQWN0aXZlIiwiZW50ZXJEb25lIiwiZXhpdEFjdGl2ZSIsIlNsaWRlckNvbXBvbmVudCIsInBhZ2VzIiwiY2xhc3NlcyIsInVzZVN0YXRlIiwicGFnZSIsInNldFBhZ2UiLCJzaG93IiwiU3BlY2lmaWNQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxpRUFBZSxDQUFDO0FBQ2hDQyxXQUFTLEVBQUU7QUFDVEMsV0FBTyxFQUFFLE9BREE7QUFFVEMsU0FBSyxFQUFFLE1BRkU7QUFHVEMsYUFBUyxFQUFFO0FBSEYsR0FEcUI7QUFNaENDLE1BQUksRUFBRTtBQUNKQyxVQUFNLEVBQUUsV0FESjtBQUVKQyxVQUFNLEVBQUUsYUFGSjtBQUdKSixTQUFLLEVBQUUsYUFISDtBQUlKSyxhQUFTLEVBQUMsUUFKTjtBQUtKQyxZQUFRLEVBQUUsTUFMTjtBQU1KQyxhQUFTLEVBQUUsZUFOUDtBQU9KQyxjQUFVLEVBQUU7QUFQUixHQU4wQjtBQWVoQ0MsU0FBTyxFQUFFO0FBQ1BDLFlBQVEsRUFBRSxVQURIO0FBRVBDLE9BQUcsRUFBRSxHQUZFO0FBR1BDLFFBQUksRUFBRSxHQUhDO0FBSVBDLG1CQUFlLEVBQUUsTUFKVjtBQUtQQyxZQUFRLEVBQUUsTUFMSDtBQU1QVixVQUFNLEVBQUUsT0FORDtBQU9QSixTQUFLLEVBQUUsT0FQQTtBQVFQZSxtQkFBZSxFQUFFLEtBUlY7QUFTUEMsY0FBVSxFQUFFLG9CQVRMO0FBVVBULGFBQVMsRUFBRTtBQVZKLEdBZnVCO0FBMkJoQ1UsYUFBVyxFQUFFO0FBQ1hWLGFBQVMsRUFBRTtBQURBLEdBM0JtQjtBQThCaENXLFdBQVMsRUFBRTtBQUNUWCxhQUFTLEVBQUU7QUFERixHQTlCcUI7QUFpQ2hDWSxZQUFVLEVBQUU7QUFDVlosYUFBUyxFQUFFO0FBREQ7QUFqQ29CLENBQUQsQ0FBakM7QUFzQ2UsU0FBU2EsZUFBVCxPQUFvQztBQUFBOztBQUFBOztBQUFBLE1BQVRDLEtBQVMsUUFBVEEsS0FBUztBQUNqRCxNQUFNQyxPQUFPLEdBQUcxQixTQUFTLEVBQXpCOztBQURpRCxrQkFFM0IyQixzREFBUSxDQUFDLElBQUQsQ0FGbUI7QUFBQSxNQUU1Q0MsSUFGNEM7QUFBQSxNQUV0Q0MsT0FGc0M7O0FBSWpELE1BQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUFGLElBQUksRUFBSTtBQUNuQixRQUFNRyxZQUFZLEdBQUdOLEtBQUssQ0FBQ0csSUFBRCxDQUExQjs7QUFDQSxRQUFJLENBQUNBLElBQUwsRUFBVztBQUNULGFBQU8sSUFBUDtBQUNEOztBQUNELHdCQUFPLHFFQUFDLFlBQUQ7QUFBYyxhQUFPLEVBQUVDO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNELEdBTkQ7O0FBUUEsc0JBQ0UscUVBQUMsb0VBQUQ7QUFBZSxVQUFJRCxJQUFJLEtBQUssSUFBNUI7QUFBa0MsV0FBTyxFQUFFLEdBQTNDO0FBQWdELGNBQVUsRUFBRTtBQUN4RFAsaUJBQVcsRUFBRUssT0FBTyxDQUFDTCxXQURtQztBQUV4REMsZUFBUyxFQUFFSSxPQUFPLENBQUNKLFNBRnFDO0FBR3hEQyxnQkFBVSxFQUFFRyxPQUFPLENBQUNIO0FBSG9DLEtBQTVEO0FBQUEsMkJBS0k7QUFBSyxlQUFTLEVBQUVHLE9BQU8sQ0FBQ2IsT0FBeEI7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUVhLE9BQU8sQ0FBQ3BCLElBQXhCO0FBQThCLGVBQU8sRUFBRTtBQUFBLGlCQUFNdUIsT0FBTyxDQUFDLElBQUQsQ0FBYjtBQUFBLFNBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFFR0MsSUFBSSxDQUFDRixJQUFELENBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBWUQ7O0dBeEJ1QkosZTtVQUNOeEIsUzs7O0tBRE13QixlIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9zbGlkZXJDb21wb25lbnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVVzZVN0eWxlcyB9IGZyb20gJ3JlYWN0LWpzcydcbmltcG9ydCB7IENTU1RyYW5zaXRpb24gfSBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwJztcblxuY29uc3QgdXNlU3R5bGVzID0gY3JlYXRlVXNlU3R5bGVzKHtcbiAgY29udGFpbmVyOiB7XG4gICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICBtYXJnaW5Ub3A6IFwiMzBweFwiXG4gIH0sXG4gIGV4aXQ6IHtcbiAgICBtYXJnaW46IFwiYXV0byBhdXRvXCIsXG4gICAgaGVpZ2h0OiBcIm1pbi1jb250ZW50XCIsXG4gICAgd2lkdGg6IFwibWluLWNvbnRlbnRcIixcbiAgICB0ZXh0QWxpZ246XCJjZW50ZXJcIixcbiAgICBmb250U2l6ZTogXCI1MHB4XCIsXG4gICAgdHJhbnNmb3JtOiBcInJvdGF0ZSg0NWRlZylcIixcbiAgICBmb250V2VpZ2h0OiBcIjIwMFwiXG4gIH0sXG4gIHNsaWRlVXA6IHtcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgIHRvcDogXCIwXCIsXG4gICAgbGVmdDogXCIwXCIsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiMwMDBcIixcbiAgICBvdmVyZmxvdzogJ2F1dG8nLFxuICAgIGhlaWdodDogXCIxMDB2aFwiLFxuICAgIHdpZHRoOiBcIjEwMHZ3XCIsXG4gICAgdHJhbnNmb3JtT3JpZ2luOiBcInRvcFwiLFxuICAgIHRyYW5zaXRpb246IFwidHJhbnNmb3JtIC41cyBlYXNlXCIsXG4gICAgdHJhbnNmb3JtOiBcInNjYWxlWSgwKVwiLFxuICB9LFxuICBlbnRlckFjdGl2ZToge1xuICAgIHRyYW5zZm9ybTogXCJzY2FsZVkoMSlcIixcbiAgfSxcbiAgZW50ZXJEb25lOiB7XG4gICAgdHJhbnNmb3JtOiBcInNjYWxlWSgxKVwiLFxuICB9LFxuICBleGl0QWN0aXZlOiB7XG4gICAgdHJhbnNmb3JtOiBcInNjYWxlWSgwKVwiLFxuICB9LFxufSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2xpZGVyQ29tcG9uZW50KHsgcGFnZXMgfSkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcbiAgbGV0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IHNob3cgPSBwYWdlID0+IHtcbiAgICBjb25zdCBTcGVjaWZpY1BhZ2UgPSBwYWdlc1twYWdlXTtcbiAgICBpZiAoIXBhZ2UpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIHJldHVybiA8U3BlY2lmaWNQYWdlIHNldFBhZ2U9e3NldFBhZ2V9IC8+O1xuICB9IFxuXG4gIHJldHVybiAoXG4gICAgPENTU1RyYW5zaXRpb24gaW49e3BhZ2UgIT09IG51bGx9IHRpbWVvdXQ9ezMwMH0gY2xhc3NOYW1lcz17e1xuICAgICAgICBlbnRlckFjdGl2ZTogY2xhc3Nlcy5lbnRlckFjdGl2ZSxcbiAgICAgICAgZW50ZXJEb25lOiBjbGFzc2VzLmVudGVyRG9uZSxcbiAgICAgICAgZXhpdEFjdGl2ZTogY2xhc3Nlcy5leGl0QWN0aXZlLFxuICAgICAgfX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNsaWRlVXB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmV4aXR9IG9uQ2xpY2s9eygpID0+IHNldFBhZ2UobnVsbCl9Pis8L2Rpdj5cbiAgICAgICAgICB7c2hvdyhwYWdlKX1cbiAgICAgICAgPC9kaXY+XG4gICAgPC9DU1NUcmFuc2l0aW9uPlxuICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/sliderComponent.js\n");

/***/ })

})