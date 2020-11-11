webpackHotUpdate_N_E("pages/home",{

/***/ "./pages/home.js":
/*!***********************!*\
  !*** ./pages/home.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-jss */ \"./node_modules/react-jss/dist/react-jss.esm.js\");\n/* harmony import */ var _components_ui_list_listItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ui/list/listItem */ \"./components/ui/list/listItem.js\");\n/* harmony import */ var _data_home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/home */ \"./data/home.js\");\n/* harmony import */ var _components_aboutMe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/aboutMe */ \"./components/aboutMe.js\");\n/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-transition-group */ \"./node_modules/react-transition-group/esm/index.js\");\n/* harmony import */ var _components_sliderComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/sliderComponent */ \"./components/sliderComponent.js\");\n\n\n\nvar _jsxFileName = \"/home/greg/nextjs/nextjs-portfolio/pages/home.js\",\n    _container,\n    _list,\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\nvar tabletBreak = '@media (max-width: 1250px)';\nvar mobileBreak = '@media (max-width: 720px)';\nvar useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_3__[\"createUseStyles\"])({\n  container: (_container = {\n    display: 'grid',\n    gridTemplateColumns: \"1fr 4fr\",\n    height: '100%',\n    backgroundColor: \"#171717\",\n    padding: \"150px\",\n    paddingBottom: \"0px\",\n    paddingRight: \"0px\",\n    boxSizing: \"border-box\",\n    overflow: \"auto\"\n  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_container, tabletBreak, {\n    gridTemplateColumns: \"1fr\",\n    padding: \"20px\",\n    paddingRight: \"0px\"\n  }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_container, mobileBreak, {\n    padding: \"20px\",\n    paddingRight: \"0px\"\n  }), _container),\n  left: {\n    fontSize: \"14px\",\n    letterSpacing: \"normal\"\n  },\n  list: (_list = {\n    display: \"flex\",\n    flexFlow: \"column nowrap\"\n  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_list, mobileBreak, {\n    marginTop: \"30px\"\n  }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_list, \"& li:not(:first-child)\", {\n    marginTop: \"60px\"\n  }), _list),\n  span: {\n    color: \"grey\",\n    \"&:hover\": {\n      color: \"#fff\"\n    }\n  },\n  slideUp: {\n    position: \"absolute\",\n    top: \"0\",\n    left: \"0\",\n    maxHeight: \"0\",\n    backgroundColor: \"#000\"\n  },\n  enterActive: {\n    height: \"100vh\",\n    width: \"100vw\",\n    maxHeight: '2100vh',\n    transition: 'max-height 500ms cubic-bezier(0.77,0,0.175,1)',\n    overflow: 'auto'\n  },\n  enterDone: {\n    height: \"100vh\",\n    width: \"100vw\",\n    maxHeight: '2100vh',\n    overflow: 'auto'\n  },\n  exitDone: {\n    height: \"100vh\",\n    width: \"100vw\",\n    overflow: 'hidden',\n    maxHeight: '0',\n    transition: 'max-height 200ms cubic-bezier(0.77,0,0.175,1)'\n  }\n});\nvar components = {\n  aboutMe: _components_aboutMe__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n};\n\nvar Home = function Home() {\n  _s();\n\n  var classes = useStyles();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      page = _useState[0],\n      setPage = _useState[1];\n\n  var show = function show(page) {\n    var SpecificPage = components[page];\n\n    if (!page) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        style: {\n          display: \"block\",\n          width: \"100%\",\n          marginTop: \"30px\"\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 14\n      }, _this);\n    }\n\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(SpecificPage, {\n      setPage: setPage\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 12\n    }, _this);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"main\", {\n    className: classes.container,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: classes.left,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"span\", {\n        className: classes.span,\n        children: \"Greg Miller\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 37\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"ol\", {\n      className: classes.list,\n      children: _data_home__WEBPACK_IMPORTED_MODULE_5__[\"homeData\"].map(function (o, index) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_ui_list_listItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _objectSpread(_objectSpread({}, o), {}, {\n          onClick: function onClick() {\n            return setPage(o.page);\n          }\n        }), index, false, {\n          fileName: _jsxFileName,\n          lineNumber: 103,\n          columnNumber: 37\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_transition_group__WEBPACK_IMPORTED_MODULE_7__[\"CSSTransition\"], {\n      \"in\": page !== null,\n      timeout: 1500,\n      classNames: {\n        enterActive: classes.enterActive,\n        enterDone: classes.enterDone,\n        exitDone: classes.exitDone\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: classes.slideUp,\n        children: show(page)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 110,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 100,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Home, \"ww7HtQiUQafHwqSGL/JTEckeHDo=\", false, function () {\n  return [useStyles];\n});\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9tZS5qcz8wODdkIl0sIm5hbWVzIjpbInRhYmxldEJyZWFrIiwibW9iaWxlQnJlYWsiLCJ1c2VTdHlsZXMiLCJjcmVhdGVVc2VTdHlsZXMiLCJjb250YWluZXIiLCJkaXNwbGF5IiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsInBhZGRpbmciLCJwYWRkaW5nQm90dG9tIiwicGFkZGluZ1JpZ2h0IiwiYm94U2l6aW5nIiwib3ZlcmZsb3ciLCJsZWZ0IiwiZm9udFNpemUiLCJsZXR0ZXJTcGFjaW5nIiwibGlzdCIsImZsZXhGbG93IiwibWFyZ2luVG9wIiwic3BhbiIsImNvbG9yIiwic2xpZGVVcCIsInBvc2l0aW9uIiwidG9wIiwibWF4SGVpZ2h0IiwiZW50ZXJBY3RpdmUiLCJ3aWR0aCIsInRyYW5zaXRpb24iLCJlbnRlckRvbmUiLCJleGl0RG9uZSIsImNvbXBvbmVudHMiLCJhYm91dE1lIiwiQWJvdXRNZSIsIkhvbWUiLCJjbGFzc2VzIiwidXNlU3RhdGUiLCJwYWdlIiwic2V0UGFnZSIsInNob3ciLCJTcGVjaWZpY1BhZ2UiLCJob21lRGF0YSIsIm1hcCIsIm8iLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsV0FBVyxHQUFHLDRCQUFwQjtBQUNBLElBQU1DLFdBQVcsR0FBRywyQkFBcEI7QUFFQSxJQUFNQyxTQUFTLEdBQUdDLGlFQUFlLENBQUM7QUFDaENDLFdBQVM7QUFDUEMsV0FBTyxFQUFFLE1BREY7QUFFUEMsdUJBQW1CLEVBQUUsU0FGZDtBQUdQQyxVQUFNLEVBQUUsTUFIRDtBQUlQQyxtQkFBZSxFQUFFLFNBSlY7QUFLUEMsV0FBTyxFQUFFLE9BTEY7QUFNUEMsaUJBQWEsRUFBRSxLQU5SO0FBT1BDLGdCQUFZLEVBQUUsS0FQUDtBQVFQ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O0FBQUEsZ0JBQ0d3QixtREFBUSxDQUFDQyxHQUFULENBQWEsVUFBQ0MsQ0FBRCxFQUFJQyxLQUFKO0FBQUEsNEJBQWMscUVBQUMsb0VBQUQsa0NBQTBCRCxDQUExQjtBQUE2QixpQkFBTyxFQUFFO0FBQUEsbUJBQU1MLE9BQU8sQ0FBQ0ssQ0FBQyxDQUFDTixJQUFILENBQWI7QUFBQTtBQUF0QyxZQUFlTyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQWQ7QUFBQSxPQUFiO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBS0UscUVBQUMsb0VBQUQ7QUFBZSxZQUFJUCxJQUFJLEtBQUssSUFBNUI7QUFBa0MsYUFBTyxFQUFFLElBQTNDO0FBQWlELGdCQUFVLEVBQUU7QUFDM0RYLG1CQUFXLEVBQUVTLE9BQU8sQ0FBQ1QsV0FEc0M7QUFFM0RHLGlCQUFTLEVBQUVNLE9BQU8sQ0FBQ04sU0FGd0M7QUFHM0RDLGdCQUFRLEVBQUVLLE9BQU8sQ0FBQ0w7QUFIeUMsT0FBN0Q7QUFBQSw2QkFLRTtBQUFLLGlCQUFTLEVBQUVLLE9BQU8sQ0FBQ2IsT0FBeEI7QUFBQSxrQkFDR2lCLElBQUksQ0FBQ0YsSUFBRDtBQURQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFpQkQsQ0E3QkQ7O0dBQU1ILEk7VUFDWWhDLFM7OztLQURaZ0MsSTtBQStCU0EsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9ob21lLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2NyZWF0ZVVzZVN0eWxlc30gZnJvbSAncmVhY3QtanNzJ1xuaW1wb3J0IExpc3RJdGVtIGZyb20gXCIuLi9jb21wb25lbnRzL3VpL2xpc3QvbGlzdEl0ZW1cIjtcbmltcG9ydCB7IGhvbWVEYXRhIH0gZnJvbSBcIi4uL2RhdGEvaG9tZVwiO1xuaW1wb3J0IEFib3V0TWUgZnJvbSBcIi4uL2NvbXBvbmVudHMvYWJvdXRNZVwiO1xuaW1wb3J0IHsgQ1NTVHJhbnNpdGlvbiB9IGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAnO1xuaW1wb3J0IFNsaWRlckNvbXBvbmVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9zbGlkZXJDb21wb25lbnRcIjtcblxuY29uc3QgdGFibGV0QnJlYWsgPSAnQG1lZGlhIChtYXgtd2lkdGg6IDEyNTBweCknO1xuY29uc3QgbW9iaWxlQnJlYWsgPSAnQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IGNyZWF0ZVVzZVN0eWxlcyh7XG4gIGNvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6ICdncmlkJyxcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBcIjFmciA0ZnJcIixcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzE3MTcxN1wiLFxuICAgIHBhZGRpbmc6IFwiMTUwcHhcIixcbiAgICBwYWRkaW5nQm90dG9tOiBcIjBweFwiLFxuICAgIHBhZGRpbmdSaWdodDogXCIwcHhcIixcbiAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxuICAgIG92ZXJmbG93OiBcImF1dG9cIixcbiAgICBbdGFibGV0QnJlYWtdOiB7XG4gICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBcIjFmclwiLFxuICAgICAgcGFkZGluZzogXCIyMHB4XCIsXG4gICAgICBwYWRkaW5nUmlnaHQ6IFwiMHB4XCIsXG4gICAgfSxcbiAgICBbbW9iaWxlQnJlYWtdOiB7XG4gICAgICBwYWRkaW5nOiBcIjIwcHhcIixcbiAgICAgIHBhZGRpbmdSaWdodDogXCIwcHhcIixcbiAgICB9XG4gIH0sXG4gIGxlZnQ6IHtcbiAgICBmb250U2l6ZTogXCIxNHB4XCIsXG4gICAgbGV0dGVyU3BhY2luZzogXCJub3JtYWxcIixcbiAgfSxcbiAgbGlzdDoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhGbG93OiBcImNvbHVtbiBub3dyYXBcIixcbiAgICBbbW9iaWxlQnJlYWtdOiB7XG4gICAgICBtYXJnaW5Ub3A6IFwiMzBweFwiLFxuICAgIH0sXG4gICAgXCImIGxpOm5vdCg6Zmlyc3QtY2hpbGQpXCI6IHtcbiAgICAgIG1hcmdpblRvcDogXCI2MHB4XCJcbiAgICB9XG4gIH0sXG4gIHNwYW46IHtcbiAgICBjb2xvcjogXCJncmV5XCIsXG4gICAgXCImOmhvdmVyXCI6IHtcbiAgICAgIGNvbG9yOiBcIiNmZmZcIlxuICAgIH1cbiAgfSxcbiAgc2xpZGVVcDoge1xuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgdG9wOiBcIjBcIixcbiAgICBsZWZ0OiBcIjBcIixcbiAgICBtYXhIZWlnaHQ6IFwiMFwiLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjMDAwXCIsXG4gIH0sXG4gIGVudGVyQWN0aXZlOiB7XG4gICAgaGVpZ2h0OiBcIjEwMHZoXCIsXG4gICAgd2lkdGg6IFwiMTAwdndcIixcbiAgICBtYXhIZWlnaHQ6ICcyMTAwdmgnLFxuICAgIHRyYW5zaXRpb246ICdtYXgtaGVpZ2h0IDUwMG1zIGN1YmljLWJlemllcigwLjc3LDAsMC4xNzUsMSknLFxuICAgIG92ZXJmbG93OiAnYXV0bydcbiAgfSxcbiAgZW50ZXJEb25lOiB7XG4gICAgaGVpZ2h0OiBcIjEwMHZoXCIsXG4gICAgd2lkdGg6IFwiMTAwdndcIixcbiAgICBtYXhIZWlnaHQ6ICcyMTAwdmgnLFxuICAgIG92ZXJmbG93OiAnYXV0bydcbiAgfSxcblxuICBleGl0RG9uZToge1xuICAgIGhlaWdodDogXCIxMDB2aFwiLFxuICAgIHdpZHRoOiBcIjEwMHZ3XCIsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIG1heEhlaWdodDogJzAnLFxuICAgIHRyYW5zaXRpb246ICdtYXgtaGVpZ2h0IDIwMG1zIGN1YmljLWJlemllcigwLjc3LDAsMC4xNzUsMSknLFxuICB9XG59KVxuXG5jb25zdCBjb21wb25lbnRzID0ge1xuICBhYm91dE1lOiBBYm91dE1lXG59O1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGxldCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBzaG93ID0gcGFnZSA9PiB7XG4gICAgY29uc3QgU3BlY2lmaWNQYWdlID0gY29tcG9uZW50c1twYWdlXTtcbiAgICBpZiAoIXBhZ2UpIHtcbiAgICAgIHJldHVybiA8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImJsb2NrXCIsIHdpZHRoOlwiMTAwJVwiLCBtYXJnaW5Ub3A6XCIzMHB4XCJ9fT48L2Rpdj5cbiAgICB9XG4gICAgcmV0dXJuIDxTcGVjaWZpY1BhZ2Ugc2V0UGFnZT17c2V0UGFnZX0gLz47XG4gIH0gXG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxlZnR9PjxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5zcGFufT5HcmVnIE1pbGxlcjwvc3Bhbj48L2Rpdj5cbiAgICAgIDxvbCBjbGFzc05hbWU9e2NsYXNzZXMubGlzdH0+XG4gICAgICAgIHtob21lRGF0YS5tYXAoKG8sIGluZGV4KSA9PiA8TGlzdEl0ZW0ga2V5PXtpbmRleH0gey4uLm99IG9uQ2xpY2s9eygpID0+IHNldFBhZ2Uoby5wYWdlKX0gLz4pfVxuICAgICAgPC9vbD5cbiAgICAgIDxDU1NUcmFuc2l0aW9uIGluPXtwYWdlICE9PSBudWxsfSB0aW1lb3V0PXsxNTAwfSBjbGFzc05hbWVzPXt7XG4gICAgICAgIGVudGVyQWN0aXZlOiBjbGFzc2VzLmVudGVyQWN0aXZlLFxuICAgICAgICBlbnRlckRvbmU6IGNsYXNzZXMuZW50ZXJEb25lLFxuICAgICAgICBleGl0RG9uZTogY2xhc3Nlcy5leGl0RG9uZSxcbiAgICAgIH19PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zbGlkZVVwfT5cbiAgICAgICAgICB7c2hvdyhwYWdlKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NTU1RyYW5zaXRpb24+XG4gICAgPC9tYWluPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/home.js\n");

/***/ })

})