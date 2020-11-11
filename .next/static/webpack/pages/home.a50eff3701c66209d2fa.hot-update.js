webpackHotUpdate_N_E("pages/home",{

/***/ "./pages/home.js":
/*!***********************!*\
  !*** ./pages/home.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-jss */ \"./node_modules/react-jss/dist/react-jss.esm.js\");\n/* harmony import */ var _components_ui_list_listItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ui/list/listItem */ \"./components/ui/list/listItem.js\");\n/* harmony import */ var _data_home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/home */ \"./data/home.js\");\n/* harmony import */ var _components_aboutMe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/aboutMe */ \"./components/aboutMe.js\");\n/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-transition-group */ \"./node_modules/react-transition-group/esm/index.js\");\n/* harmony import */ var _components_sliderComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/sliderComponent */ \"./components/sliderComponent.js\");\n\n\n\nvar _jsxFileName = \"/home/greg/nextjs/nextjs-portfolio/pages/home.js\",\n    _container,\n    _list,\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\nvar tabletBreak = '@media (max-width: 1250px)';\nvar mobileBreak = '@media (max-width: 720px)';\nvar useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_3__[\"createUseStyles\"])({\n  container: (_container = {\n    display: 'grid',\n    gridTemplateColumns: \"1fr 4fr\",\n    height: '100%',\n    backgroundColor: \"#171717\",\n    padding: \"150px\",\n    paddingBottom: \"0px\",\n    paddingRight: \"0px\",\n    boxSizing: \"border-box\",\n    overflow: \"auto\"\n  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_container, tabletBreak, {\n    gridTemplateColumns: \"1fr\",\n    padding: \"20px\",\n    paddingRight: \"0px\"\n  }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_container, mobileBreak, {\n    padding: \"20px\",\n    paddingRight: \"0px\"\n  }), _container),\n  left: {\n    fontSize: \"14px\",\n    letterSpacing: \"normal\"\n  },\n  list: (_list = {\n    display: \"flex\",\n    flexFlow: \"column nowrap\"\n  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_list, mobileBreak, {\n    marginTop: \"30px\"\n  }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_list, \"& li:not(:first-child)\", {\n    marginTop: \"60px\"\n  }), _list),\n  span: {\n    color: \"grey\",\n    \"&:hover\": {\n      color: \"#fff\"\n    }\n  },\n  slideUp: {\n    position: \"absolute\",\n    top: \"0\",\n    left: \"0\",\n    maxHeight: \"0\",\n    backgroundColor: \"#000\"\n  },\n  enter: {\n    maxHeight: '0'\n  },\n  enterActive: {\n    overflow: 'auto'\n  },\n  enterDone: {\n    width: \"100vw\",\n    height: \"100vh\",\n    maxHeight: '2100vh',\n    transition: 'max-height 1.5s cubic-bezier(0.77,0,0.175,1)'\n  },\n  exit: {\n    width: \"100vw\",\n    height: \"100vh\",\n    maxHeight: '2100vh',\n    transition: 'height 1.5s, max-height 1.5s'\n  },\n  editDone: {\n    maxHeight: '0px',\n    transition: 'max-height 1.5s ease',\n    overflow: 'auto'\n  }\n});\nvar components = {\n  aboutMe: _components_aboutMe__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n};\n\nvar Home = function Home() {\n  _s();\n\n  var classes = useStyles();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      page = _useState[0],\n      setPage = _useState[1];\n\n  var show = function show(page) {\n    var SpecificPage = components[page];\n\n    if (!page) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        style: {\n          display: \"block\",\n          width: \"100%\",\n          marginTop: \"30px\"\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 14\n      }, _this);\n    }\n\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(SpecificPage, {\n      setPage: setPage\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 12\n    }, _this);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"main\", {\n    className: classes.container,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: classes.left,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"span\", {\n        className: classes.span,\n        children: \"Greg Miller\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 37\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"ol\", {\n      className: classes.list,\n      children: _data_home__WEBPACK_IMPORTED_MODULE_5__[\"homeData\"].map(function (o, index) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_ui_list_listItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _objectSpread(_objectSpread({}, o), {}, {\n          onClick: function onClick() {\n            return setPage(o.page);\n          }\n        }), index, false, {\n          fileName: _jsxFileName,\n          lineNumber: 105,\n          columnNumber: 37\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_transition_group__WEBPACK_IMPORTED_MODULE_7__[\"CSSTransition\"], {\n      \"in\": page !== null,\n      timeout: 0,\n      classNames: {\n        enter: classes.enter,\n        enterActive: classes.enterActive,\n        enterDone: classes.enterDone,\n        exit: classes.exit,\n        exitDone: classes.exitDone\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: classes.slideUp,\n        children: show(page)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 114,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 102,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Home, \"ww7HtQiUQafHwqSGL/JTEckeHDo=\", false, function () {\n  return [useStyles];\n});\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9tZS5qcz8wODdkIl0sIm5hbWVzIjpbInRhYmxldEJyZWFrIiwibW9iaWxlQnJlYWsiLCJ1c2VTdHlsZXMiLCJjcmVhdGVVc2VTdHlsZXMiLCJjb250YWluZXIiLCJkaXNwbGF5IiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsInBhZGRpbmciLCJwYWRkaW5nQm90dG9tIiwicGFkZGluZ1JpZ2h0IiwiYm94U2l6aW5nIiwib3ZlcmZsb3ciLCJsZWZ0IiwiZm9udFNpemUiLCJsZXR0ZXJTcGFjaW5nIiwibGlzdCIsImZsZXhGbG93IiwibWFyZ2luVG9wIiwic3BhbiIsImNvbG9yIiwic2xpZGVVcCIsInBvc2l0aW9uIiwidG9wIiwibWF4SGVpZ2h0IiwiZW50ZXIiLCJlbnRlckFjdGl2ZSIsImVudGVyRG9uZSIsIndpZHRoIiwidHJhbnNpdGlvbiIsImV4aXQiLCJlZGl0RG9uZSIsImNvbXBvbmVudHMiLCJhYm91dE1lIiwiQWJvdXRNZSIsIkhvbWUiLCJjbGFzc2VzIiwidXNlU3RhdGUiLCJwYWdlIiwic2V0UGFnZSIsInNob3ciLCJTcGVjaWZpY1BhZ2UiLCJob21lRGF0YSIsIm1hcCIsIm8iLCJpbmRleCIsImV4aXREb25lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxXQUFXLEdBQUcsNEJBQXBCO0FBQ0EsSUFBTUMsV0FBVyxHQUFHLDJCQUFwQjtBQUVBLElBQU1DLFNBQVMsR0FBR0MsaUVBQWUsQ0FBQztBQUNoQ0MsV0FBUztBQUNQQyxXQUFPLEVBQUUsTUFERjtBQUVQQyx1QkFBbUIsRUFBRSxTQUZkO0FBR1BDLFVBQU0sRUFBRSxNQUhEO0FBSVBDLG1CQUFlLEVBQUUsU0FKVjtBQUtQQyxXQUFPLEVBQUUsT0FMRjtBQU1QQyxpQkFBYSxFQUFFLEtBTlI7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O0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBSSxlQUFTLEVBQUVpQixPQUFPLENBQUNwQixJQUF2QjtBQUFBLGdCQUNHMEIsbURBQVEsQ0FBQ0MsR0FBVCxDQUFhLFVBQUNDLENBQUQsRUFBSUMsS0FBSjtBQUFBLDRCQUFjLHFFQUFDLG9FQUFELGtDQUEwQkQsQ0FBMUI7QUFBNkIsaUJBQU8sRUFBRTtBQUFBLG1CQUFNTCxPQUFPLENBQUNLLENBQUMsQ0FBQ04sSUFBSCxDQUFiO0FBQUE7QUFBdEMsWUFBZU8sS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFkO0FBQUEsT0FBYjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQUtFLHFFQUFDLG9FQUFEO0FBQWUsWUFBSVAsSUFBSSxLQUFLLElBQTVCO0FBQWtDLGFBQU8sRUFBRSxDQUEzQztBQUE4QyxnQkFBVSxFQUFFO0FBQ3hEYixhQUFLLEVBQUVXLE9BQU8sQ0FBQ1gsS0FEeUM7QUFFeERDLG1CQUFXLEVBQUVVLE9BQU8sQ0FBQ1YsV0FGbUM7QUFHeERDLGlCQUFTLEVBQUVTLE9BQU8sQ0FBQ1QsU0FIcUM7QUFJeERHLFlBQUksRUFBRU0sT0FBTyxDQUFDTixJQUowQztBQUt4RGdCLGdCQUFRLEVBQUVWLE9BQU8sQ0FBQ1U7QUFMc0MsT0FBMUQ7QUFBQSw2QkFPRTtBQUFLLGlCQUFTLEVBQUVWLE9BQU8sQ0FBQ2YsT0FBeEI7QUFBQSxrQkFDR21CLElBQUksQ0FBQ0YsSUFBRDtBQURQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFtQkQsQ0EvQkQ7O0dBQU1ILEk7VUFDWWxDLFM7OztLQURaa0MsSTtBQWlDU0EsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9ob21lLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2NyZWF0ZVVzZVN0eWxlc30gZnJvbSAncmVhY3QtanNzJ1xuaW1wb3J0IExpc3RJdGVtIGZyb20gXCIuLi9jb21wb25lbnRzL3VpL2xpc3QvbGlzdEl0ZW1cIjtcbmltcG9ydCB7IGhvbWVEYXRhIH0gZnJvbSBcIi4uL2RhdGEvaG9tZVwiO1xuaW1wb3J0IEFib3V0TWUgZnJvbSBcIi4uL2NvbXBvbmVudHMvYWJvdXRNZVwiO1xuaW1wb3J0IHsgQ1NTVHJhbnNpdGlvbiB9IGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAnO1xuaW1wb3J0IFNsaWRlckNvbXBvbmVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9zbGlkZXJDb21wb25lbnRcIjtcblxuY29uc3QgdGFibGV0QnJlYWsgPSAnQG1lZGlhIChtYXgtd2lkdGg6IDEyNTBweCknO1xuY29uc3QgbW9iaWxlQnJlYWsgPSAnQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IGNyZWF0ZVVzZVN0eWxlcyh7XG4gIGNvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6ICdncmlkJyxcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBcIjFmciA0ZnJcIixcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzE3MTcxN1wiLFxuICAgIHBhZGRpbmc6IFwiMTUwcHhcIixcbiAgICBwYWRkaW5nQm90dG9tOiBcIjBweFwiLFxuICAgIHBhZGRpbmdSaWdodDogXCIwcHhcIixcbiAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxuICAgIG92ZXJmbG93OiBcImF1dG9cIixcbiAgICBbdGFibGV0QnJlYWtdOiB7XG4gICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBcIjFmclwiLFxuICAgICAgcGFkZGluZzogXCIyMHB4XCIsXG4gICAgICBwYWRkaW5nUmlnaHQ6IFwiMHB4XCIsXG4gICAgfSxcbiAgICBbbW9iaWxlQnJlYWtdOiB7XG4gICAgICBwYWRkaW5nOiBcIjIwcHhcIixcbiAgICAgIHBhZGRpbmdSaWdodDogXCIwcHhcIixcbiAgICB9XG4gIH0sXG4gIGxlZnQ6IHtcbiAgICBmb250U2l6ZTogXCIxNHB4XCIsXG4gICAgbGV0dGVyU3BhY2luZzogXCJub3JtYWxcIixcbiAgfSxcbiAgbGlzdDoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhGbG93OiBcImNvbHVtbiBub3dyYXBcIixcbiAgICBbbW9iaWxlQnJlYWtdOiB7XG4gICAgICBtYXJnaW5Ub3A6IFwiMzBweFwiLFxuICAgIH0sXG4gICAgXCImIGxpOm5vdCg6Zmlyc3QtY2hpbGQpXCI6IHtcbiAgICAgIG1hcmdpblRvcDogXCI2MHB4XCJcbiAgICB9XG4gIH0sXG4gIHNwYW46IHtcbiAgICBjb2xvcjogXCJncmV5XCIsXG4gICAgXCImOmhvdmVyXCI6IHtcbiAgICAgIGNvbG9yOiBcIiNmZmZcIlxuICAgIH1cbiAgfSxcbiAgc2xpZGVVcDoge1xuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgdG9wOiBcIjBcIixcbiAgICBsZWZ0OiBcIjBcIixcbiAgICBtYXhIZWlnaHQ6IFwiMFwiLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjMDAwXCIsXG4gIH0sXG4gIGVudGVyOiB7XG4gICAgbWF4SGVpZ2h0OiAnMCcsXG4gIH0sXG4gIGVudGVyQWN0aXZlOiB7XG4gICAgb3ZlcmZsb3c6ICdhdXRvJ1xuICB9LFxuICBlbnRlckRvbmU6IHtcbiAgICB3aWR0aDogXCIxMDB2d1wiLFxuICAgIGhlaWdodDogXCIxMDB2aFwiLFxuICAgIG1heEhlaWdodDogJzIxMDB2aCcsXG4gICAgdHJhbnNpdGlvbjogJ21heC1oZWlnaHQgMS41cyBjdWJpYy1iZXppZXIoMC43NywwLDAuMTc1LDEpJyxcbiAgfSxcbiAgZXhpdDoge1xuICAgIHdpZHRoOiBcIjEwMHZ3XCIsXG4gICAgaGVpZ2h0OiBcIjEwMHZoXCIsXG4gICAgbWF4SGVpZ2h0OiAnMjEwMHZoJyxcbiAgICB0cmFuc2l0aW9uOiAnaGVpZ2h0IDEuNXMsIG1heC1oZWlnaHQgMS41cycsXG4gIH0sXG4gIGVkaXREb25lOiB7XG4gICAgbWF4SGVpZ2h0OiAnMHB4JyxcbiAgICB0cmFuc2l0aW9uOiAnbWF4LWhlaWdodCAxLjVzIGVhc2UnLFxuICAgIG92ZXJmbG93OiAnYXV0bycsXG4gIH1cbn0pXG5cbmNvbnN0IGNvbXBvbmVudHMgPSB7XG4gIGFib3V0TWU6IEFib3V0TWVcbn07XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgbGV0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IHNob3cgPSBwYWdlID0+IHtcbiAgICBjb25zdCBTcGVjaWZpY1BhZ2UgPSBjb21wb25lbnRzW3BhZ2VdO1xuICAgIGlmICghcGFnZSkge1xuICAgICAgcmV0dXJuIDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiYmxvY2tcIiwgd2lkdGg6XCIxMDAlXCIsIG1hcmdpblRvcDpcIjMwcHhcIn19PjwvZGl2PlxuICAgIH1cbiAgICByZXR1cm4gPFNwZWNpZmljUGFnZSBzZXRQYWdlPXtzZXRQYWdlfSAvPjtcbiAgfSBcblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubGVmdH0+PHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnNwYW59PkdyZWcgTWlsbGVyPC9zcGFuPjwvZGl2PlxuICAgICAgPG9sIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0fT5cbiAgICAgICAge2hvbWVEYXRhLm1hcCgobywgaW5kZXgpID0+IDxMaXN0SXRlbSBrZXk9e2luZGV4fSB7Li4ub30gb25DbGljaz17KCkgPT4gc2V0UGFnZShvLnBhZ2UpfSAvPil9XG4gICAgICA8L29sPlxuICAgICAgPENTU1RyYW5zaXRpb24gaW49e3BhZ2UgIT09IG51bGx9IHRpbWVvdXQ9ezB9IGNsYXNzTmFtZXM9e3tcbiAgICAgICAgZW50ZXI6IGNsYXNzZXMuZW50ZXIsXG4gICAgICAgIGVudGVyQWN0aXZlOiBjbGFzc2VzLmVudGVyQWN0aXZlLFxuICAgICAgICBlbnRlckRvbmU6IGNsYXNzZXMuZW50ZXJEb25lLFxuICAgICAgICBleGl0OiBjbGFzc2VzLmV4aXQsXG4gICAgICAgIGV4aXREb25lOiBjbGFzc2VzLmV4aXREb25lLFxuICAgICAgfX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNsaWRlVXB9PlxuICAgICAgICAgIHtzaG93KHBhZ2UpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ1NTVHJhbnNpdGlvbj5cbiAgICA8L21haW4+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/home.js\n");

/***/ })

})