webpackHotUpdate_N_E("pages/home",{

/***/ "./pages/home.js":
/*!***********************!*\
  !*** ./pages/home.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-jss */ \"./node_modules/react-jss/dist/react-jss.esm.js\");\n/* harmony import */ var _components_ui_list_listItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ui/list/listItem */ \"./components/ui/list/listItem.js\");\n/* harmony import */ var _data_home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/home */ \"./data/home.js\");\n/* harmony import */ var _components_aboutMe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/aboutMe */ \"./components/aboutMe.js\");\n/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-transition-group */ \"./node_modules/react-transition-group/esm/index.js\");\n/* harmony import */ var _components_sliderComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/sliderComponent */ \"./components/sliderComponent.js\");\n\n\n\nvar _jsxFileName = \"/home/greg/nextjs/nextjs-portfolio/pages/home.js\",\n    _container,\n    _list,\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\nvar tabletBreak = '@media (max-width: 1250px)';\nvar mobileBreak = '@media (max-width: 720px)';\nvar useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_3__[\"createUseStyles\"])({\n  container: (_container = {\n    display: 'grid',\n    gridTemplateColumns: \"1fr 4fr\",\n    height: '100%',\n    backgroundColor: \"#171717\",\n    padding: \"150px\",\n    paddingBottom: \"0px\",\n    paddingRight: \"0px\",\n    boxSizing: \"border-box\",\n    overflow: \"auto\"\n  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_container, tabletBreak, {\n    gridTemplateColumns: \"1fr\",\n    padding: \"20px\",\n    paddingRight: \"0px\"\n  }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_container, mobileBreak, {\n    padding: \"20px\",\n    paddingRight: \"0px\"\n  }), _container),\n  left: {\n    fontSize: \"14px\",\n    letterSpacing: \"normal\"\n  },\n  list: (_list = {\n    display: \"flex\",\n    flexFlow: \"column nowrap\"\n  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_list, mobileBreak, {\n    marginTop: \"30px\"\n  }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_list, \"& li:not(:first-child)\", {\n    marginTop: \"60px\"\n  }), _list),\n  span: {\n    color: \"grey\",\n    \"&:hover\": {\n      color: \"#fff\"\n    }\n  },\n  slider: {\n    display: \"flex\",\n    position: \"absolute\",\n    width: \"100vw\",\n    height: \"100vh\",\n    top: \"0\",\n    left: \"0\"\n  },\n  entering: {\n    maxHeight: '0px',\n    overflow: 'hidden'\n  },\n  entered: {\n    overflow: 'hidden',\n    maxHeight: '2100vh',\n    backgroundColor: \"black\",\n    transition: 'max-height 1.5s cubic-bezier(0.77,0,0.175,1)'\n  },\n  exiting: {\n    maxHeight: '2100vh'\n  },\n  exited: {\n    overflow: 'hidden',\n    maxHeight: '0px',\n    transition: 'max-height 1.5s cubic-bezier(0.77,0,0.175,1)'\n  }\n});\nvar components = {\n  aboutMe: _components_aboutMe__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n};\n\nvar Home = function Home() {\n  _s();\n\n  var classes = useStyles();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      page = _useState[0],\n      setPage = _useState[1];\n\n  var show = function show(page) {\n    var SpecificPage = components[page];\n\n    if (!page) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        style: {\n          display: \"block\",\n          width: \"100%\",\n          marginTop: \"30px\"\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 14\n      }, _this);\n    }\n\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(SpecificPage, {\n      setPage: setPage\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 12\n    }, _this);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"main\", {\n    className: classes.container,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: classes.left,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"span\", {\n        className: classes.span,\n        children: \"Greg Miller\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 99,\n        columnNumber: 37\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"ol\", {\n      className: classes.list,\n      children: _data_home__WEBPACK_IMPORTED_MODULE_5__[\"homeData\"].map(function (o, index) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_ui_list_listItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _objectSpread(_objectSpread({}, o), {}, {\n          onClick: function onClick() {\n            return setPage(o.page);\n          }\n        }), index, false, {\n          fileName: _jsxFileName,\n          lineNumber: 101,\n          columnNumber: 37\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_transition_group__WEBPACK_IMPORTED_MODULE_7__[\"CSSTransition\"], {\n      \"in\": page !== null,\n      timeout: 200,\n      classNames: {\n        enterActive: classes.entering,\n        enterDone: classes.entered,\n        exitActive: classes.exiting,\n        exitDone: classes.exited\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"\".concat(classes.slider),\n        children: show(page)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 109,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 98,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Home, \"ww7HtQiUQafHwqSGL/JTEckeHDo=\", false, function () {\n  return [useStyles];\n});\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9tZS5qcz8wODdkIl0sIm5hbWVzIjpbInRhYmxldEJyZWFrIiwibW9iaWxlQnJlYWsiLCJ1c2VTdHlsZXMiLCJjcmVhdGVVc2VTdHlsZXMiLCJjb250YWluZXIiLCJkaXNwbGF5IiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsInBhZGRpbmciLCJwYWRkaW5nQm90dG9tIiwicGFkZGluZ1JpZ2h0IiwiYm94U2l6aW5nIiwib3ZlcmZsb3ciLCJsZWZ0IiwiZm9udFNpemUiLCJsZXR0ZXJTcGFjaW5nIiwibGlzdCIsImZsZXhGbG93IiwibWFyZ2luVG9wIiwic3BhbiIsImNvbG9yIiwic2xpZGVyIiwicG9zaXRpb24iLCJ3aWR0aCIsInRvcCIsImVudGVyaW5nIiwibWF4SGVpZ2h0IiwiZW50ZXJlZCIsInRyYW5zaXRpb24iLCJleGl0aW5nIiwiZXhpdGVkIiwiY29tcG9uZW50cyIsImFib3V0TWUiLCJBYm91dE1lIiwiSG9tZSIsImNsYXNzZXMiLCJ1c2VTdGF0ZSIsInBhZ2UiLCJzZXRQYWdlIiwic2hvdyIsIlNwZWNpZmljUGFnZSIsImhvbWVEYXRhIiwibWFwIiwibyIsImluZGV4IiwiZW50ZXJBY3RpdmUiLCJlbnRlckRvbmUiLCJleGl0QWN0aXZlIiwiZXhpdERvbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFdBQVcsR0FBRyw0QkFBcEI7QUFDQSxJQUFNQyxXQUFXLEdBQUcsMkJBQXBCO0FBRUEsSUFBTUMsU0FBUyxHQUFHQyxpRUFBZSxDQUFDO0FBQ2hDQyxXQUFTO0FBQ1BDLFdBQU8sRUFBRSxNQURGO0FBRVBDLHVCQUFtQixFQUFFLFNBRmQ7QUFHUEMsVUFBTSxFQUFFLE1BSEQ7QUFJUEMsbUJBQWUsRUFBRSxTQUpWO0FBS1BDLFdBQU8sRUFBRSxP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Q0FBQ25CLElBQXZCO0FBQUEsZ0JBQ0d5QixtREFBUSxDQUFDQyxHQUFULENBQWEsVUFBQ0MsQ0FBRCxFQUFJQyxLQUFKO0FBQUEsNEJBQWMscUVBQUMsb0VBQUQsa0NBQTBCRCxDQUExQjtBQUE2QixpQkFBTyxFQUFFO0FBQUEsbUJBQU1MLE9BQU8sQ0FBQ0ssQ0FBQyxDQUFDTixJQUFILENBQWI7QUFBQTtBQUF0QyxZQUFlTyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQWQ7QUFBQSxPQUFiO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBS0UscUVBQUMsb0VBQUQ7QUFBZSxZQUFJUCxJQUFJLEtBQUssSUFBNUI7QUFBa0MsYUFBTyxFQUFFLEdBQTNDO0FBQWlELGdCQUFVLEVBQUU7QUFDM0RRLG1CQUFXLEVBQUVWLE9BQU8sQ0FBQ1YsUUFEc0M7QUFFM0RxQixpQkFBUyxFQUFFWCxPQUFPLENBQUNSLE9BRndDO0FBRzNEb0Isa0JBQVUsRUFBRVosT0FBTyxDQUFDTixPQUh1QztBQUkzRG1CLGdCQUFRLEVBQUViLE9BQU8sQ0FBQ0w7QUFKeUMsT0FBN0Q7QUFBQSw2QkFNRTtBQUFLLGlCQUFTLFlBQUtLLE9BQU8sQ0FBQ2QsTUFBYixDQUFkO0FBQUEsa0JBQ0drQixJQUFJLENBQUNGLElBQUQ7QUFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBa0JELENBOUJEOztHQUFNSCxJO1VBQ1lqQyxTOzs7S0FEWmlDLEk7QUFnQ1NBLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaG9tZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjcmVhdGVVc2VTdHlsZXN9IGZyb20gJ3JlYWN0LWpzcydcbmltcG9ydCBMaXN0SXRlbSBmcm9tIFwiLi4vY29tcG9uZW50cy91aS9saXN0L2xpc3RJdGVtXCI7XG5pbXBvcnQgeyBob21lRGF0YSB9IGZyb20gXCIuLi9kYXRhL2hvbWVcIjtcbmltcG9ydCBBYm91dE1lIGZyb20gXCIuLi9jb21wb25lbnRzL2Fib3V0TWVcIjtcbmltcG9ydCB7IENTU1RyYW5zaXRpb24gfSBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwJztcbmltcG9ydCBTbGlkZXJDb21wb25lbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvc2xpZGVyQ29tcG9uZW50XCI7XG5cbmNvbnN0IHRhYmxldEJyZWFrID0gJ0BtZWRpYSAobWF4LXdpZHRoOiAxMjUwcHgpJztcbmNvbnN0IG1vYmlsZUJyZWFrID0gJ0BtZWRpYSAobWF4LXdpZHRoOiA3MjBweCknO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBjcmVhdGVVc2VTdHlsZXMoe1xuICBjb250YWluZXI6IHtcbiAgICBkaXNwbGF5OiAnZ3JpZCcsXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCIxZnIgNGZyXCIsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiMxNzE3MTdcIixcbiAgICBwYWRkaW5nOiBcIjE1MHB4XCIsXG4gICAgcGFkZGluZ0JvdHRvbTogXCIwcHhcIixcbiAgICBwYWRkaW5nUmlnaHQ6IFwiMHB4XCIsXG4gICAgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIixcbiAgICBvdmVyZmxvdzogXCJhdXRvXCIsXG4gICAgW3RhYmxldEJyZWFrXToge1xuICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCIxZnJcIixcbiAgICAgIHBhZGRpbmc6IFwiMjBweFwiLFxuICAgICAgcGFkZGluZ1JpZ2h0OiBcIjBweFwiLFxuICAgIH0sXG4gICAgW21vYmlsZUJyZWFrXToge1xuICAgICAgcGFkZGluZzogXCIyMHB4XCIsXG4gICAgICBwYWRkaW5nUmlnaHQ6IFwiMHB4XCIsXG4gICAgfVxuICB9LFxuICBsZWZ0OiB7XG4gICAgZm9udFNpemU6IFwiMTRweFwiLFxuICAgIGxldHRlclNwYWNpbmc6IFwibm9ybWFsXCIsXG4gIH0sXG4gIGxpc3Q6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4RmxvdzogXCJjb2x1bW4gbm93cmFwXCIsXG4gICAgW21vYmlsZUJyZWFrXToge1xuICAgICAgbWFyZ2luVG9wOiBcIjMwcHhcIixcbiAgICB9LFxuICAgIFwiJiBsaTpub3QoOmZpcnN0LWNoaWxkKVwiOiB7XG4gICAgICBtYXJnaW5Ub3A6IFwiNjBweFwiXG4gICAgfVxuICB9LFxuICBzcGFuOiB7XG4gICAgY29sb3I6IFwiZ3JleVwiLFxuICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICBjb2xvcjogXCIjZmZmXCJcbiAgICB9XG4gIH0sXG4gIHNsaWRlcjoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgd2lkdGg6IFwiMTAwdndcIixcbiAgICBoZWlnaHQ6IFwiMTAwdmhcIixcbiAgICB0b3A6IFwiMFwiLFxuICAgIGxlZnQ6IFwiMFwiXG4gIH0sXG4gIGVudGVyaW5nOiB7XG4gICAgbWF4SGVpZ2h0OiAnMHB4JyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgfSxcbiAgZW50ZXJlZDoge1xuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICBtYXhIZWlnaHQ6ICcyMTAwdmgnLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCJibGFja1wiLFxuICAgIHRyYW5zaXRpb246ICdtYXgtaGVpZ2h0IDEuNXMgY3ViaWMtYmV6aWVyKDAuNzcsMCwwLjE3NSwxKScsXG4gIH0sXG4gIGV4aXRpbmc6IHtcbiAgICBtYXhIZWlnaHQ6ICcyMTAwdmgnLFxuICB9LFxuICBleGl0ZWQ6IHtcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgbWF4SGVpZ2h0OiAnMHB4JyxcbiAgICB0cmFuc2l0aW9uOiAnbWF4LWhlaWdodCAxLjVzIGN1YmljLWJlemllcigwLjc3LDAsMC4xNzUsMSknXG4gIH0sXG59KVxuXG5jb25zdCBjb21wb25lbnRzID0ge1xuICBhYm91dE1lOiBBYm91dE1lXG59O1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGxldCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBzaG93ID0gcGFnZSA9PiB7XG4gICAgY29uc3QgU3BlY2lmaWNQYWdlID0gY29tcG9uZW50c1twYWdlXTtcbiAgICBpZiAoIXBhZ2UpIHtcbiAgICAgIHJldHVybiA8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImJsb2NrXCIsIHdpZHRoOlwiMTAwJVwiLCBtYXJnaW5Ub3A6XCIzMHB4XCJ9fT48L2Rpdj5cbiAgICB9XG4gICAgcmV0dXJuIDxTcGVjaWZpY1BhZ2Ugc2V0UGFnZT17c2V0UGFnZX0gLz47XG4gIH0gXG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxlZnR9PjxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5zcGFufT5HcmVnIE1pbGxlcjwvc3Bhbj48L2Rpdj5cbiAgICAgIDxvbCBjbGFzc05hbWU9e2NsYXNzZXMubGlzdH0+XG4gICAgICAgIHtob21lRGF0YS5tYXAoKG8sIGluZGV4KSA9PiA8TGlzdEl0ZW0ga2V5PXtpbmRleH0gey4uLm99IG9uQ2xpY2s9eygpID0+IHNldFBhZ2Uoby5wYWdlKX0gLz4pfVxuICAgICAgPC9vbD5cbiAgICAgIDxDU1NUcmFuc2l0aW9uIGluPXtwYWdlICE9PSBudWxsfSB0aW1lb3V0PXsyMDB9ICBjbGFzc05hbWVzPXt7XG4gICAgICAgIGVudGVyQWN0aXZlOiBjbGFzc2VzLmVudGVyaW5nLFxuICAgICAgICBlbnRlckRvbmU6IGNsYXNzZXMuZW50ZXJlZCxcbiAgICAgICAgZXhpdEFjdGl2ZTogY2xhc3Nlcy5leGl0aW5nLFxuICAgICAgICBleGl0RG9uZTogY2xhc3Nlcy5leGl0ZWRcbiAgICAgIH19PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5zbGlkZXJ9YH0+XG4gICAgICAgICAge3Nob3cocGFnZSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9DU1NUcmFuc2l0aW9uPlxuICAgIDwvbWFpbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/home.js\n");

/***/ })

})