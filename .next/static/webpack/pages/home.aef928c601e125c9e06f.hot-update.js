webpackHotUpdate_N_E("pages/home",{

/***/ "./pages/home.js":
/*!***********************!*\
  !*** ./pages/home.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-jss */ \"./node_modules/react-jss/dist/react-jss.esm.js\");\n/* harmony import */ var _components_ui_list_listItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ui/list/listItem */ \"./components/ui/list/listItem.js\");\n/* harmony import */ var _data_home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/home */ \"./data/home.js\");\n/* harmony import */ var _components_aboutMe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/aboutMe */ \"./components/aboutMe.js\");\n/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-transition-group */ \"./node_modules/react-transition-group/esm/index.js\");\n/* harmony import */ var _components_sliderComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/sliderComponent */ \"./components/sliderComponent.js\");\n\n\n\nvar _jsxFileName = \"/home/greg/nextjs/nextjs-portfolio/pages/home.js\",\n    _container,\n    _list,\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\nvar tabletBreak = '@media (max-width: 1250px)';\nvar mobileBreak = '@media (max-width: 720px)';\nvar useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_3__[\"createUseStyles\"])({\n  container: (_container = {\n    display: 'grid',\n    gridTemplateColumns: \"1fr 4fr\",\n    height: '100%',\n    backgroundColor: \"#171717\",\n    padding: \"150px\",\n    paddingBottom: \"0px\",\n    paddingRight: \"0px\",\n    boxSizing: \"border-box\",\n    overflow: \"auto\"\n  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_container, tabletBreak, {\n    gridTemplateColumns: \"1fr\",\n    padding: \"20px\",\n    paddingRight: \"0px\"\n  }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_container, mobileBreak, {\n    padding: \"20px\",\n    paddingRight: \"0px\"\n  }), _container),\n  left: {\n    fontSize: \"14px\",\n    letterSpacing: \"normal\"\n  },\n  list: (_list = {\n    display: \"flex\",\n    flexFlow: \"column nowrap\"\n  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_list, mobileBreak, {\n    marginTop: \"30px\"\n  }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_list, \"& li:not(:first-child)\", {\n    marginTop: \"60px\"\n  }), _list),\n  span: {\n    color: \"grey\",\n    \"&:hover\": {\n      color: \"#fff\"\n    }\n  },\n  slideUp: {\n    position: \"absolute\",\n    top: \"0\",\n    left: \"0\",\n    backgroundColor: \"#000\",\n    transformOrigin: \"top\",\n    transition: \"transform 0.26s ease\",\n    transform: \"scaleY(0)\"\n  },\n  enterActive: {\n    height: \"100vh\",\n    width: \"100vw\",\n    transform: \"scaleY(1)\"\n  },\n  enterDone: {\n    height: \"100vh\",\n    width: \"100vw\",\n    transform: \"scaleY(1)\"\n  },\n  exitActive: {\n    height: \"100vh\",\n    width: \"100vw\",\n    transform: \"scaleY(0)\"\n  },\n  exitDone: {\n    height: \"0vh\"\n  }\n});\nvar components = {\n  aboutMe: _components_aboutMe__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n};\n\nvar Home = function Home() {\n  _s();\n\n  var classes = useStyles();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      page = _useState[0],\n      setPage = _useState[1];\n\n  var show = function show(page) {\n    var SpecificPage = components[page];\n\n    if (!page) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        style: {\n          display: \"block\",\n          width: \"100%\",\n          marginTop: \"30px\"\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 14\n      }, _this);\n    }\n\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(SpecificPage, {\n      setPage: setPage\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 12\n    }, _this);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"main\", {\n    className: classes.container,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: classes.left,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"span\", {\n        className: classes.span,\n        children: \"Greg Miller\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 100,\n        columnNumber: 37\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"ol\", {\n      className: classes.list,\n      children: _data_home__WEBPACK_IMPORTED_MODULE_5__[\"homeData\"].map(function (o, index) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_ui_list_listItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _objectSpread(_objectSpread({}, o), {}, {\n          onClick: function onClick() {\n            return setPage(o.page);\n          }\n        }), index, false, {\n          fileName: _jsxFileName,\n          lineNumber: 102,\n          columnNumber: 37\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_transition_group__WEBPACK_IMPORTED_MODULE_7__[\"CSSTransition\"], {\n      \"in\": page !== null,\n      timeout: 200,\n      classNames: {\n        enterActive: classes.enterActive,\n        enterDone: classes.enterDone,\n        exitActive: classes.exitActive,\n        exitDone: classes.exitDone\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: classes.slideUp,\n        children: show(page)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 110,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 99,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Home, \"ww7HtQiUQafHwqSGL/JTEckeHDo=\", false, function () {\n  return [useStyles];\n});\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9tZS5qcz8wODdkIl0sIm5hbWVzIjpbInRhYmxldEJyZWFrIiwibW9iaWxlQnJlYWsiLCJ1c2VTdHlsZXMiLCJjcmVhdGVVc2VTdHlsZXMiLCJjb250YWluZXIiLCJkaXNwbGF5IiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsInBhZGRpbmciLCJwYWRkaW5nQm90dG9tIiwicGFkZGluZ1JpZ2h0IiwiYm94U2l6aW5nIiwib3ZlcmZsb3ciLCJsZWZ0IiwiZm9udFNpemUiLCJsZXR0ZXJTcGFjaW5nIiwibGlzdCIsImZsZXhGbG93IiwibWFyZ2luVG9wIiwic3BhbiIsImNvbG9yIiwic2xpZGVVcCIsInBvc2l0aW9uIiwidG9wIiwidHJhbnNmb3JtT3JpZ2luIiwidHJhbnNpdGlvbiIsInRyYW5zZm9ybSIsImVudGVyQWN0aXZlIiwid2lkdGgiLCJlbnRlckRvbmUiLCJleGl0QWN0aXZlIiwiZXhpdERvbmUiLCJjb21wb25lbnRzIiwiYWJvdXRNZSIsIkFib3V0TWUiLCJIb21lIiwiY2xhc3NlcyIsInVzZVN0YXRlIiwicGFnZSIsInNldFBhZ2UiLCJzaG93IiwiU3BlY2lmaWNQYWdlIiwiaG9tZURhdGEiLCJtYXAiLCJvIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFdBQVcsR0FBRyw0QkFBcEI7QUFDQSxJQUFNQyxXQUFXLEdBQUcsMkJBQXBCO0FBRUEsSUFBTUMsU0FBUyxHQUFHQyxpRUFBZSxDQUFDO0FBQ2hDQyxXQUFTO0FBQ1BDLFdBQU8sRUFBRSxNQURGO0FBRVBDLHVCQUFtQixFQUFFLFNBRmQ7QUFHUEMsVUFBTSxFQUFFLE1BSEQ7QUFJUEMsbUJBQWUsRUFBRSxTQUpWO0FBS1BDLFdBQU8sRUFBRSxPQUxGO0FBTVBDLGlCQUFhLEVBQUUs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QUFPLENBQUNwQixJQUF2QjtBQUFBLGdCQUNHMEIsbURBQVEsQ0FBQ0MsR0FBVCxDQUFhLFVBQUNDLENBQUQsRUFBSUMsS0FBSjtBQUFBLDRCQUFjLHFFQUFDLG9FQUFELGtDQUEwQkQsQ0FBMUI7QUFBNkIsaUJBQU8sRUFBRTtBQUFBLG1CQUFNTCxPQUFPLENBQUNLLENBQUMsQ0FBQ04sSUFBSCxDQUFiO0FBQUE7QUFBdEMsWUFBZU8sS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFkO0FBQUEsT0FBYjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQUtFLHFFQUFDLG9FQUFEO0FBQWUsWUFBSVAsSUFBSSxLQUFLLElBQTVCO0FBQWtDLGFBQU8sRUFBRSxHQUEzQztBQUFnRCxnQkFBVSxFQUFFO0FBQzFEWCxtQkFBVyxFQUFFUyxPQUFPLENBQUNULFdBRHFDO0FBRTFERSxpQkFBUyxFQUFFTyxPQUFPLENBQUNQLFNBRnVDO0FBRzFEQyxrQkFBVSxFQUFFTSxPQUFPLENBQUNOLFVBSHNDO0FBSTFEQyxnQkFBUSxFQUFFSyxPQUFPLENBQUNMO0FBSndDLE9BQTVEO0FBQUEsNkJBTUU7QUFBSyxpQkFBUyxFQUFFSyxPQUFPLENBQUNmLE9BQXhCO0FBQUEsa0JBQ0dtQixJQUFJLENBQUNGLElBQUQ7QUFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBa0JELENBOUJEOztHQUFNSCxJO1VBQ1lsQyxTOzs7S0FEWmtDLEk7QUFnQ1NBLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaG9tZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjcmVhdGVVc2VTdHlsZXN9IGZyb20gJ3JlYWN0LWpzcydcbmltcG9ydCBMaXN0SXRlbSBmcm9tIFwiLi4vY29tcG9uZW50cy91aS9saXN0L2xpc3RJdGVtXCI7XG5pbXBvcnQgeyBob21lRGF0YSB9IGZyb20gXCIuLi9kYXRhL2hvbWVcIjtcbmltcG9ydCBBYm91dE1lIGZyb20gXCIuLi9jb21wb25lbnRzL2Fib3V0TWVcIjtcbmltcG9ydCB7IENTU1RyYW5zaXRpb24gfSBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwJztcbmltcG9ydCBTbGlkZXJDb21wb25lbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvc2xpZGVyQ29tcG9uZW50XCI7XG5cbmNvbnN0IHRhYmxldEJyZWFrID0gJ0BtZWRpYSAobWF4LXdpZHRoOiAxMjUwcHgpJztcbmNvbnN0IG1vYmlsZUJyZWFrID0gJ0BtZWRpYSAobWF4LXdpZHRoOiA3MjBweCknO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBjcmVhdGVVc2VTdHlsZXMoe1xuICBjb250YWluZXI6IHtcbiAgICBkaXNwbGF5OiAnZ3JpZCcsXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCIxZnIgNGZyXCIsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiMxNzE3MTdcIixcbiAgICBwYWRkaW5nOiBcIjE1MHB4XCIsXG4gICAgcGFkZGluZ0JvdHRvbTogXCIwcHhcIixcbiAgICBwYWRkaW5nUmlnaHQ6IFwiMHB4XCIsXG4gICAgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIixcbiAgICBvdmVyZmxvdzogXCJhdXRvXCIsXG4gICAgW3RhYmxldEJyZWFrXToge1xuICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCIxZnJcIixcbiAgICAgIHBhZGRpbmc6IFwiMjBweFwiLFxuICAgICAgcGFkZGluZ1JpZ2h0OiBcIjBweFwiLFxuICAgIH0sXG4gICAgW21vYmlsZUJyZWFrXToge1xuICAgICAgcGFkZGluZzogXCIyMHB4XCIsXG4gICAgICBwYWRkaW5nUmlnaHQ6IFwiMHB4XCIsXG4gICAgfVxuICB9LFxuICBsZWZ0OiB7XG4gICAgZm9udFNpemU6IFwiMTRweFwiLFxuICAgIGxldHRlclNwYWNpbmc6IFwibm9ybWFsXCIsXG4gIH0sXG4gIGxpc3Q6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4RmxvdzogXCJjb2x1bW4gbm93cmFwXCIsXG4gICAgW21vYmlsZUJyZWFrXToge1xuICAgICAgbWFyZ2luVG9wOiBcIjMwcHhcIixcbiAgICB9LFxuICAgIFwiJiBsaTpub3QoOmZpcnN0LWNoaWxkKVwiOiB7XG4gICAgICBtYXJnaW5Ub3A6IFwiNjBweFwiXG4gICAgfVxuICB9LFxuICBzcGFuOiB7XG4gICAgY29sb3I6IFwiZ3JleVwiLFxuICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICBjb2xvcjogXCIjZmZmXCJcbiAgICB9XG4gIH0sXG4gIHNsaWRlVXA6IHtcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgIHRvcDogXCIwXCIsXG4gICAgbGVmdDogXCIwXCIsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiMwMDBcIixcbiAgICB0cmFuc2Zvcm1PcmlnaW46IFwidG9wXCIsXG4gICAgdHJhbnNpdGlvbjogXCJ0cmFuc2Zvcm0gMC4yNnMgZWFzZVwiLFxuICAgIHRyYW5zZm9ybTogXCJzY2FsZVkoMClcIixcbiAgfSxcbiAgZW50ZXJBY3RpdmU6IHtcbiAgICBoZWlnaHQ6IFwiMTAwdmhcIixcbiAgICB3aWR0aDogXCIxMDB2d1wiLFxuICAgIHRyYW5zZm9ybTogXCJzY2FsZVkoMSlcIixcbiAgfSxcbiAgZW50ZXJEb25lOiB7XG4gICAgaGVpZ2h0OiBcIjEwMHZoXCIsXG4gICAgd2lkdGg6IFwiMTAwdndcIixcbiAgICB0cmFuc2Zvcm06IFwic2NhbGVZKDEpXCIsXG4gIH0sXG4gIGV4aXRBY3RpdmU6IHtcbiAgICBoZWlnaHQ6IFwiMTAwdmhcIixcbiAgICB3aWR0aDogXCIxMDB2d1wiLFxuICAgIHRyYW5zZm9ybTogXCJzY2FsZVkoMClcIixcbiAgfSxcbiAgZXhpdERvbmU6IHtcbiAgICBoZWlnaHQ6IFwiMHZoXCIsXG4gIH1cbn0pXG5cbmNvbnN0IGNvbXBvbmVudHMgPSB7XG4gIGFib3V0TWU6IEFib3V0TWVcbn07XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgbGV0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IHNob3cgPSBwYWdlID0+IHtcbiAgICBjb25zdCBTcGVjaWZpY1BhZ2UgPSBjb21wb25lbnRzW3BhZ2VdO1xuICAgIGlmICghcGFnZSkge1xuICAgICAgcmV0dXJuIDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiYmxvY2tcIiwgd2lkdGg6XCIxMDAlXCIsIG1hcmdpblRvcDpcIjMwcHhcIn19PjwvZGl2PlxuICAgIH1cbiAgICByZXR1cm4gPFNwZWNpZmljUGFnZSBzZXRQYWdlPXtzZXRQYWdlfSAvPjtcbiAgfSBcblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubGVmdH0+PHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnNwYW59PkdyZWcgTWlsbGVyPC9zcGFuPjwvZGl2PlxuICAgICAgPG9sIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0fT5cbiAgICAgICAge2hvbWVEYXRhLm1hcCgobywgaW5kZXgpID0+IDxMaXN0SXRlbSBrZXk9e2luZGV4fSB7Li4ub30gb25DbGljaz17KCkgPT4gc2V0UGFnZShvLnBhZ2UpfSAvPil9XG4gICAgICA8L29sPlxuICAgICAgPENTU1RyYW5zaXRpb24gaW49e3BhZ2UgIT09IG51bGx9IHRpbWVvdXQ9ezIwMH0gY2xhc3NOYW1lcz17e1xuICAgICAgICBlbnRlckFjdGl2ZTogY2xhc3Nlcy5lbnRlckFjdGl2ZSxcbiAgICAgICAgZW50ZXJEb25lOiBjbGFzc2VzLmVudGVyRG9uZSxcbiAgICAgICAgZXhpdEFjdGl2ZTogY2xhc3Nlcy5leGl0QWN0aXZlLFxuICAgICAgICBleGl0RG9uZTogY2xhc3Nlcy5leGl0RG9uZVxuICAgICAgfX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNsaWRlVXB9PlxuICAgICAgICAgIHtzaG93KHBhZ2UpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ1NTVHJhbnNpdGlvbj5cbiAgICA8L21haW4+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/home.js\n");

/***/ })

})