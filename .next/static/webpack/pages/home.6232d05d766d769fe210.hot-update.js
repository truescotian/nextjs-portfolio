webpackHotUpdate_N_E("pages/home",{

/***/ "./pages/home.js":
/*!***********************!*\
  !*** ./pages/home.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-jss */ \"./node_modules/react-jss/dist/react-jss.esm.js\");\n/* harmony import */ var _components_ui_list_listItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ui/list/listItem */ \"./components/ui/list/listItem.js\");\n/* harmony import */ var _data_home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/home */ \"./data/home.js\");\n/* harmony import */ var _components_aboutMe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/aboutMe */ \"./components/aboutMe.js\");\n/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-transition-group */ \"./node_modules/react-transition-group/esm/index.js\");\n/* harmony import */ var _components_sliderComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/sliderComponent */ \"./components/sliderComponent.js\");\n\n\n\nvar _jsxFileName = \"/home/greg/nextjs/nextjs-portfolio/pages/home.js\",\n    _container,\n    _list,\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\nvar tabletBreak = '@media (max-width: 1250px)';\nvar mobileBreak = '@media (max-width: 720px)';\nvar useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_3__[\"createUseStyles\"])({\n  container: (_container = {\n    display: 'grid',\n    gridTemplateColumns: \"1fr 4fr\",\n    height: '100%',\n    backgroundColor: \"#171717\",\n    padding: \"150px\",\n    paddingBottom: \"0px\",\n    paddingRight: \"0px\",\n    boxSizing: \"border-box\",\n    overflow: \"auto\"\n  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_container, tabletBreak, {\n    gridTemplateColumns: \"1fr\",\n    padding: \"20px\",\n    paddingRight: \"0px\"\n  }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_container, mobileBreak, {\n    padding: \"20px\",\n    paddingRight: \"0px\"\n  }), _container),\n  left: {\n    fontSize: \"14px\",\n    letterSpacing: \"normal\"\n  },\n  list: (_list = {\n    display: \"flex\",\n    flexFlow: \"column nowrap\"\n  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_list, mobileBreak, {\n    marginTop: \"30px\"\n  }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_list, \"& li:not(:first-child)\", {\n    marginTop: \"60px\"\n  }), _list),\n  span: {\n    color: \"grey\",\n    \"&:hover\": {\n      color: \"#fff\"\n    }\n  },\n  slideUp: {\n    display: \"hidden\",\n    position: \"absolute\",\n    top: \"0\",\n    left: \"0\",\n    width: \"100vw\",\n    height: \"100vh\",\n    maxHeight: \"0\",\n    backgroundColor: \"#000\"\n  },\n  enter: {\n    maxHeight: '0px'\n  },\n  enterActive: {\n    overflow: 'auto'\n  },\n  enterDone: {\n    maxHeight: '2100vh',\n    transition: 'max-height 1.5s cubic-bezier(0.77,0,0.175,1)'\n  },\n  exitActive: {\n    maxHeight: '0px',\n    transition: 'max-height 1.5s cubic-bezier(0.77,0,0.175,1)'\n  },\n  exitDone: {\n    overflow: 'hidden'\n  }\n});\nvar components = {\n  aboutMe: _components_aboutMe__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n};\n\nvar Home = function Home() {\n  _s();\n\n  var classes = useStyles();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      page = _useState[0],\n      setPage = _useState[1];\n\n  var show = function show(page) {\n    var SpecificPage = components[page];\n\n    if (!page) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        style: {\n          display: \"block\",\n          width: \"100%\",\n          marginTop: \"30px\"\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 14\n      }, _this);\n    }\n\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(SpecificPage, {\n      setPage: setPage\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 12\n    }, _this);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"main\", {\n    className: classes.container,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: classes.left,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"span\", {\n        className: classes.span,\n        children: \"Greg Miller\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 37\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"ol\", {\n      className: classes.list,\n      children: _data_home__WEBPACK_IMPORTED_MODULE_5__[\"homeData\"].map(function (o, index) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_ui_list_listItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _objectSpread(_objectSpread({}, o), {}, {\n          onClick: function onClick() {\n            return setPage(o.page);\n          }\n        }), index, false, {\n          fileName: _jsxFileName,\n          lineNumber: 103,\n          columnNumber: 37\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_transition_group__WEBPACK_IMPORTED_MODULE_7__[\"CSSTransition\"], {\n      \"in\": page !== null,\n      timeout: 0,\n      unmountOnExit: true,\n      classNames: {\n        enter: classes.enter,\n        enterActive: classes.enterActive,\n        enterDone: classes.enterDone,\n        exitActive: classes.exitActive,\n        exitDone: classes.exitDone\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: classes.slideUp,\n        children: show(page)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 112,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 100,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Home, \"ww7HtQiUQafHwqSGL/JTEckeHDo=\", false, function () {\n  return [useStyles];\n});\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9tZS5qcz8wODdkIl0sIm5hbWVzIjpbInRhYmxldEJyZWFrIiwibW9iaWxlQnJlYWsiLCJ1c2VTdHlsZXMiLCJjcmVhdGVVc2VTdHlsZXMiLCJjb250YWluZXIiLCJkaXNwbGF5IiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsInBhZGRpbmciLCJwYWRkaW5nQm90dG9tIiwicGFkZGluZ1JpZ2h0IiwiYm94U2l6aW5nIiwib3ZlcmZsb3ciLCJsZWZ0IiwiZm9udFNpemUiLCJsZXR0ZXJTcGFjaW5nIiwibGlzdCIsImZsZXhGbG93IiwibWFyZ2luVG9wIiwic3BhbiIsImNvbG9yIiwic2xpZGVVcCIsInBvc2l0aW9uIiwidG9wIiwid2lkdGgiLCJtYXhIZWlnaHQiLCJlbnRlciIsImVudGVyQWN0aXZlIiwiZW50ZXJEb25lIiwidHJhbnNpdGlvbiIsImV4aXRBY3RpdmUiLCJleGl0RG9uZSIsImNvbXBvbmVudHMiLCJhYm91dE1lIiwiQWJvdXRNZSIsIkhvbWUiLCJjbGFzc2VzIiwidXNlU3RhdGUiLCJwYWdlIiwic2V0UGFnZSIsInNob3ciLCJTcGVjaWZpY1BhZ2UiLCJob21lRGF0YSIsIm1hcCIsIm8iLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsV0FBVyxHQUFHLDRCQUFwQjtBQUNBLElBQU1DLFdBQVcsR0FBRywyQkFBcEI7QUFFQSxJQUFNQyxTQUFTLEdBQUdDLGlFQUFlLENBQUM7QUFDaENDLFdBQVM7QUFDUEMsV0FBTyxFQUFFLE1BREY7QUFFUEMsdUJBQW1CLEVBQUUsU0FGZDtBQUdQQyxVQUFNLEVBQUUsTUFIRDtBQUlQQyxtQkFBZSxFQUFFLFNBSlY7QUFLUEMsV0FBTyxFQUFFLE9BTEY7QUFNUEMsaUJBQWEsRUFBRSxLQU5SO0FBT1BD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LG1EQUFRLENBQUNDLEdBQVQsQ0FBYSxVQUFDQyxDQUFELEVBQUlDLEtBQUo7QUFBQSw0QkFBYyxxRUFBQyxvRUFBRCxrQ0FBMEJELENBQTFCO0FBQTZCLGlCQUFPLEVBQUU7QUFBQSxtQkFBTUwsT0FBTyxDQUFDSyxDQUFDLENBQUNOLElBQUgsQ0FBYjtBQUFBO0FBQXRDLFlBQWVPLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBZDtBQUFBLE9BQWI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFLRSxxRUFBQyxvRUFBRDtBQUFlLFlBQUlQLElBQUksS0FBSyxJQUE1QjtBQUFrQyxhQUFPLEVBQUUsQ0FBM0M7QUFBOEMsbUJBQWEsTUFBM0Q7QUFBNEQsZ0JBQVUsRUFBRTtBQUN0RVosYUFBSyxFQUFFVSxPQUFPLENBQUNWLEtBRHVEO0FBRXRFQyxtQkFBVyxFQUFFUyxPQUFPLENBQUNULFdBRmlEO0FBR3RFQyxpQkFBUyxFQUFFUSxPQUFPLENBQUNSLFNBSG1EO0FBSXRFRSxrQkFBVSxFQUFFTSxPQUFPLENBQUNOLFVBSmtEO0FBS3RFQyxnQkFBUSxFQUFFSyxPQUFPLENBQUNMO0FBTG9ELE9BQXhFO0FBQUEsNkJBT0U7QUFBSyxpQkFBUyxFQUFFSyxPQUFPLENBQUNmLE9BQXhCO0FBQUEsa0JBQ0dtQixJQUFJLENBQUNGLElBQUQ7QUFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBbUJELENBL0JEOztHQUFNSCxJO1VBQ1lsQyxTOzs7S0FEWmtDLEk7QUFpQ1NBLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaG9tZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjcmVhdGVVc2VTdHlsZXN9IGZyb20gJ3JlYWN0LWpzcydcbmltcG9ydCBMaXN0SXRlbSBmcm9tIFwiLi4vY29tcG9uZW50cy91aS9saXN0L2xpc3RJdGVtXCI7XG5pbXBvcnQgeyBob21lRGF0YSB9IGZyb20gXCIuLi9kYXRhL2hvbWVcIjtcbmltcG9ydCBBYm91dE1lIGZyb20gXCIuLi9jb21wb25lbnRzL2Fib3V0TWVcIjtcbmltcG9ydCB7IENTU1RyYW5zaXRpb24gfSBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwJztcbmltcG9ydCBTbGlkZXJDb21wb25lbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvc2xpZGVyQ29tcG9uZW50XCI7XG5cbmNvbnN0IHRhYmxldEJyZWFrID0gJ0BtZWRpYSAobWF4LXdpZHRoOiAxMjUwcHgpJztcbmNvbnN0IG1vYmlsZUJyZWFrID0gJ0BtZWRpYSAobWF4LXdpZHRoOiA3MjBweCknO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBjcmVhdGVVc2VTdHlsZXMoe1xuICBjb250YWluZXI6IHtcbiAgICBkaXNwbGF5OiAnZ3JpZCcsXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCIxZnIgNGZyXCIsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiMxNzE3MTdcIixcbiAgICBwYWRkaW5nOiBcIjE1MHB4XCIsXG4gICAgcGFkZGluZ0JvdHRvbTogXCIwcHhcIixcbiAgICBwYWRkaW5nUmlnaHQ6IFwiMHB4XCIsXG4gICAgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIixcbiAgICBvdmVyZmxvdzogXCJhdXRvXCIsXG4gICAgW3RhYmxldEJyZWFrXToge1xuICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCIxZnJcIixcbiAgICAgIHBhZGRpbmc6IFwiMjBweFwiLFxuICAgICAgcGFkZGluZ1JpZ2h0OiBcIjBweFwiLFxuICAgIH0sXG4gICAgW21vYmlsZUJyZWFrXToge1xuICAgICAgcGFkZGluZzogXCIyMHB4XCIsXG4gICAgICBwYWRkaW5nUmlnaHQ6IFwiMHB4XCIsXG4gICAgfVxuICB9LFxuICBsZWZ0OiB7XG4gICAgZm9udFNpemU6IFwiMTRweFwiLFxuICAgIGxldHRlclNwYWNpbmc6IFwibm9ybWFsXCIsXG4gIH0sXG4gIGxpc3Q6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4RmxvdzogXCJjb2x1bW4gbm93cmFwXCIsXG4gICAgW21vYmlsZUJyZWFrXToge1xuICAgICAgbWFyZ2luVG9wOiBcIjMwcHhcIixcbiAgICB9LFxuICAgIFwiJiBsaTpub3QoOmZpcnN0LWNoaWxkKVwiOiB7XG4gICAgICBtYXJnaW5Ub3A6IFwiNjBweFwiXG4gICAgfVxuICB9LFxuICBzcGFuOiB7XG4gICAgY29sb3I6IFwiZ3JleVwiLFxuICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICBjb2xvcjogXCIjZmZmXCJcbiAgICB9XG4gIH0sXG4gIHNsaWRlVXA6IHtcbiAgICBkaXNwbGF5OiBcImhpZGRlblwiLFxuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgdG9wOiBcIjBcIixcbiAgICBsZWZ0OiBcIjBcIixcbiAgICB3aWR0aDogXCIxMDB2d1wiLFxuICAgIGhlaWdodDogXCIxMDB2aFwiLFxuICAgIG1heEhlaWdodDogXCIwXCIsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiMwMDBcIixcbiAgfSxcbiAgZW50ZXI6IHtcbiAgICBtYXhIZWlnaHQ6ICcwcHgnLFxuICB9LFxuICBlbnRlckFjdGl2ZToge1xuICAgIG92ZXJmbG93OiAnYXV0bydcbiAgfSxcbiAgZW50ZXJEb25lOiB7XG4gICAgbWF4SGVpZ2h0OiAnMjEwMHZoJyxcbiAgICB0cmFuc2l0aW9uOiAnbWF4LWhlaWdodCAxLjVzIGN1YmljLWJlemllcigwLjc3LDAsMC4xNzUsMSknLFxuICB9LFxuICBleGl0QWN0aXZlOiB7XG4gICAgbWF4SGVpZ2h0OiAnMHB4JyxcbiAgICB0cmFuc2l0aW9uOiAnbWF4LWhlaWdodCAxLjVzIGN1YmljLWJlemllcigwLjc3LDAsMC4xNzUsMSknXG4gIH0sXG4gIGV4aXREb25lOiB7XG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuXG4gIH0sXG59KVxuXG5jb25zdCBjb21wb25lbnRzID0ge1xuICBhYm91dE1lOiBBYm91dE1lXG59O1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGxldCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBzaG93ID0gcGFnZSA9PiB7XG4gICAgY29uc3QgU3BlY2lmaWNQYWdlID0gY29tcG9uZW50c1twYWdlXTtcbiAgICBpZiAoIXBhZ2UpIHtcbiAgICAgIHJldHVybiA8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImJsb2NrXCIsIHdpZHRoOlwiMTAwJVwiLCBtYXJnaW5Ub3A6XCIzMHB4XCJ9fT48L2Rpdj5cbiAgICB9XG4gICAgcmV0dXJuIDxTcGVjaWZpY1BhZ2Ugc2V0UGFnZT17c2V0UGFnZX0gLz47XG4gIH0gXG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxlZnR9PjxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5zcGFufT5HcmVnIE1pbGxlcjwvc3Bhbj48L2Rpdj5cbiAgICAgIDxvbCBjbGFzc05hbWU9e2NsYXNzZXMubGlzdH0+XG4gICAgICAgIHtob21lRGF0YS5tYXAoKG8sIGluZGV4KSA9PiA8TGlzdEl0ZW0ga2V5PXtpbmRleH0gey4uLm99IG9uQ2xpY2s9eygpID0+IHNldFBhZ2Uoby5wYWdlKX0gLz4pfVxuICAgICAgPC9vbD5cbiAgICAgIDxDU1NUcmFuc2l0aW9uIGluPXtwYWdlICE9PSBudWxsfSB0aW1lb3V0PXswfSB1bm1vdW50T25FeGl0IGNsYXNzTmFtZXM9e3tcbiAgICAgICAgZW50ZXI6IGNsYXNzZXMuZW50ZXIsXG4gICAgICAgIGVudGVyQWN0aXZlOiBjbGFzc2VzLmVudGVyQWN0aXZlLFxuICAgICAgICBlbnRlckRvbmU6IGNsYXNzZXMuZW50ZXJEb25lLFxuICAgICAgICBleGl0QWN0aXZlOiBjbGFzc2VzLmV4aXRBY3RpdmUsXG4gICAgICAgIGV4aXREb25lOiBjbGFzc2VzLmV4aXREb25lLFxuICAgICAgfX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNsaWRlVXB9PlxuICAgICAgICAgIHtzaG93KHBhZ2UpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ1NTVHJhbnNpdGlvbj5cbiAgICA8L21haW4+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/home.js\n");

/***/ })

})