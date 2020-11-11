webpackHotUpdate_N_E("pages/home",{

/***/ "./pages/home.js":
/*!***********************!*\
  !*** ./pages/home.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-jss */ \"./node_modules/react-jss/dist/react-jss.esm.js\");\n/* harmony import */ var _components_ui_list_listItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ui/list/listItem */ \"./components/ui/list/listItem.js\");\n/* harmony import */ var _data_home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/home */ \"./data/home.js\");\n/* harmony import */ var _components_aboutMe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/aboutMe */ \"./components/aboutMe.js\");\n/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-transition-group */ \"./node_modules/react-transition-group/esm/index.js\");\n\n\n\nvar _jsxFileName = \"/home/greg/nextjs/nextjs-portfolio/pages/home.js\",\n    _container,\n    _list,\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\nvar tabletBreak = '@media (max-width: 1250px)';\nvar mobileBreak = '@media (max-width: 720px)';\nvar useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_3__[\"createUseStyles\"])({\n  container: (_container = {\n    display: 'grid',\n    gridTemplateColumns: \"1fr 4fr\",\n    height: '100%',\n    backgroundColor: \"#171717\",\n    padding: \"150px\",\n    paddingBottom: \"0px\",\n    paddingRight: \"0px\",\n    boxSizing: \"border-box\",\n    overflow: \"auto\"\n  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_container, tabletBreak, {\n    gridTemplateColumns: \"1fr\",\n    padding: \"20px\",\n    paddingRight: \"0px\"\n  }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_container, mobileBreak, {\n    padding: \"20px\",\n    paddingRight: \"0px\"\n  }), _container),\n  left: {\n    fontSize: \"14px\",\n    letterSpacing: \"normal\"\n  },\n  list: (_list = {\n    display: \"flex\",\n    flexFlow: \"column nowrap\"\n  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_list, mobileBreak, {\n    marginTop: \"30px\"\n  }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_list, \"& li:not(:first-child)\", {\n    marginTop: \"60px\"\n  }), _list),\n  span: {\n    color: \"grey\",\n    \"&:hover\": {\n      color: \"#fff\"\n    }\n  },\n  slideUp: {\n    display: \"flex\",\n    position: \"absolute\",\n    width: \"100vw\",\n    height: \"100vh\",\n    top: \"0\",\n    left: \"0\"\n  },\n  entering: {\n    maxHeight: '0px',\n    overflow: 'hidden'\n  },\n  entered: {\n    overflow: 'hidden',\n    maxHeight: '2100vh',\n    backgroundColor: \"black\",\n    transition: 'max-height 1.5s cubic-bezier(0.77,0,0.175,1)'\n  },\n  exiting: {\n    maxHeight: '2100vh'\n  },\n  exited: {\n    overflow: 'hidden',\n    maxHeight: '0px',\n    transition: 'max-height 1.5s cubic-bezier(0.77,0,0.175,1)'\n  }\n});\nvar components = {\n  aboutMe: _components_aboutMe__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n};\n\nvar Home = function Home() {\n  _s();\n\n  var classes = useStyles();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      page = _useState[0],\n      setPage = _useState[1];\n\n  var show = function show(page) {\n    var SpecificPage = components[page];\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(SpecificPage, {\n      setPage: setPage\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 12\n    }, _this);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"main\", {\n    className: classes.container,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: classes.left,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"span\", {\n        className: classes.span,\n        children: \"Greg Miller\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 37\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"ol\", {\n      className: classes.list,\n      children: _data_home__WEBPACK_IMPORTED_MODULE_5__[\"homeData\"].map(function (o, index) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_ui_list_listItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _objectSpread(_objectSpread({}, o), {}, {\n          onClick: function onClick() {\n            return setPage(o.page);\n          }\n        }), index, false, {\n          fileName: _jsxFileName,\n          lineNumber: 97,\n          columnNumber: 37\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_transition_group__WEBPACK_IMPORTED_MODULE_7__[\"CSSTransition\"], {\n      \"in\": page !== null,\n      timeout: 0,\n      children: function children(state) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          className: \"\".concat(classes.slideUp, \" \").concat(classes[state]),\n          children: show(page)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 101,\n          columnNumber: 11\n        }, _this);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 94,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Home, \"ww7HtQiUQafHwqSGL/JTEckeHDo=\", false, function () {\n  return [useStyles];\n});\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9tZS5qcz8wODdkIl0sIm5hbWVzIjpbInRhYmxldEJyZWFrIiwibW9iaWxlQnJlYWsiLCJ1c2VTdHlsZXMiLCJjcmVhdGVVc2VTdHlsZXMiLCJjb250YWluZXIiLCJkaXNwbGF5IiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsInBhZGRpbmciLCJwYWRkaW5nQm90dG9tIiwicGFkZGluZ1JpZ2h0IiwiYm94U2l6aW5nIiwib3ZlcmZsb3ciLCJsZWZ0IiwiZm9udFNpemUiLCJsZXR0ZXJTcGFjaW5nIiwibGlzdCIsImZsZXhGbG93IiwibWFyZ2luVG9wIiwic3BhbiIsImNvbG9yIiwic2xpZGVVcCIsInBvc2l0aW9uIiwid2lkdGgiLCJ0b3AiLCJlbnRlcmluZyIsIm1heEhlaWdodCIsImVudGVyZWQiLCJ0cmFuc2l0aW9uIiwiZXhpdGluZyIsImV4aXRlZCIsImNvbXBvbmVudHMiLCJhYm91dE1lIiwiQWJvdXRNZSIsIkhvbWUiLCJjbGFzc2VzIiwidXNlU3RhdGUiLCJwYWdlIiwic2V0UGFnZSIsInNob3ciLCJTcGVjaWZpY1BhZ2UiLCJob21lRGF0YSIsIm1hcCIsIm8iLCJpbmRleCIsInN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxXQUFXLEdBQUcsNEJBQXBCO0FBQ0EsSUFBTUMsV0FBVyxHQUFHLDJCQUFwQjtBQUVBLElBQU1DLFNBQVMsR0FBR0MsaUVBQWUsQ0FBQztBQUNoQ0MsV0FBUztBQUNQQyxXQUFPLEVBQUUsTUFERjtBQUVQQyx1QkFBbUIsRUFBRSxTQUZkO0FBR1BDLFVBQU0sRUFBRSxNQUhEO0FBSVBDLG1CQUFlLEVBQUUsU0FKVjtBQUtQQyxXQUFPLEVBQUUsT0FMRjtBQU1QQyxpQkFBYSxFQUFFLEtBTlI7QUFPUEMsZ0JBQVksRUFBRSxLQVBQ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QSxpQkFBZDtBQUFBLE9BQWI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFLRSxxRUFBQyxvRUFBRDtBQUFlLFlBQUlQLElBQUksS0FBSyxJQUE1QjtBQUFrQyxhQUFPLEVBQUUsQ0FBM0M7QUFBQSxnQkFDRyxrQkFBQVEsS0FBSztBQUFBLDRCQUNKO0FBQUssbUJBQVMsWUFBS1YsT0FBTyxDQUFDZCxPQUFiLGNBQXdCYyxPQUFPLENBQUNVLEtBQUQsQ0FBL0IsQ0FBZDtBQUFBLG9CQUNHTixJQUFJLENBQUNGLElBQUQ7QUFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURJO0FBQUE7QUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFlRCxDQXhCRDs7R0FBTUgsSTtVQUNZakMsUzs7O0tBRFppQyxJO0FBMEJTQSxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2hvbWUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y3JlYXRlVXNlU3R5bGVzfSBmcm9tICdyZWFjdC1qc3MnXG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSBcIi4uL2NvbXBvbmVudHMvdWkvbGlzdC9saXN0SXRlbVwiO1xuaW1wb3J0IHsgaG9tZURhdGEgfSBmcm9tIFwiLi4vZGF0YS9ob21lXCI7XG5pbXBvcnQgQWJvdXRNZSBmcm9tIFwiLi4vY29tcG9uZW50cy9hYm91dE1lXCI7XG5pbXBvcnQgeyBDU1NUcmFuc2l0aW9uIH0gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cCc7XG5cbmNvbnN0IHRhYmxldEJyZWFrID0gJ0BtZWRpYSAobWF4LXdpZHRoOiAxMjUwcHgpJztcbmNvbnN0IG1vYmlsZUJyZWFrID0gJ0BtZWRpYSAobWF4LXdpZHRoOiA3MjBweCknO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBjcmVhdGVVc2VTdHlsZXMoe1xuICBjb250YWluZXI6IHtcbiAgICBkaXNwbGF5OiAnZ3JpZCcsXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCIxZnIgNGZyXCIsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiMxNzE3MTdcIixcbiAgICBwYWRkaW5nOiBcIjE1MHB4XCIsXG4gICAgcGFkZGluZ0JvdHRvbTogXCIwcHhcIixcbiAgICBwYWRkaW5nUmlnaHQ6IFwiMHB4XCIsXG4gICAgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIixcbiAgICBvdmVyZmxvdzogXCJhdXRvXCIsXG4gICAgW3RhYmxldEJyZWFrXToge1xuICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCIxZnJcIixcbiAgICAgIHBhZGRpbmc6IFwiMjBweFwiLFxuICAgICAgcGFkZGluZ1JpZ2h0OiBcIjBweFwiLFxuICAgIH0sXG4gICAgW21vYmlsZUJyZWFrXToge1xuICAgICAgcGFkZGluZzogXCIyMHB4XCIsXG4gICAgICBwYWRkaW5nUmlnaHQ6IFwiMHB4XCIsXG4gICAgfVxuICB9LFxuICBsZWZ0OiB7XG4gICAgZm9udFNpemU6IFwiMTRweFwiLFxuICAgIGxldHRlclNwYWNpbmc6IFwibm9ybWFsXCIsXG4gIH0sXG4gIGxpc3Q6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4RmxvdzogXCJjb2x1bW4gbm93cmFwXCIsXG4gICAgW21vYmlsZUJyZWFrXToge1xuICAgICAgbWFyZ2luVG9wOiBcIjMwcHhcIixcbiAgICB9LFxuICAgIFwiJiBsaTpub3QoOmZpcnN0LWNoaWxkKVwiOiB7XG4gICAgICBtYXJnaW5Ub3A6IFwiNjBweFwiXG4gICAgfVxuICB9LFxuICBzcGFuOiB7XG4gICAgY29sb3I6IFwiZ3JleVwiLFxuICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICBjb2xvcjogXCIjZmZmXCJcbiAgICB9XG4gIH0sXG4gIHNsaWRlVXA6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgIHdpZHRoOiBcIjEwMHZ3XCIsXG4gICAgaGVpZ2h0OiBcIjEwMHZoXCIsXG4gICAgdG9wOiBcIjBcIixcbiAgICBsZWZ0OiBcIjBcIlxuICB9LFxuICBlbnRlcmluZzoge1xuICAgIG1heEhlaWdodDogJzBweCcsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gIH0sXG4gIGVudGVyZWQ6IHtcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgbWF4SGVpZ2h0OiAnMjEwMHZoJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiYmxhY2tcIixcbiAgICB0cmFuc2l0aW9uOiAnbWF4LWhlaWdodCAxLjVzIGN1YmljLWJlemllcigwLjc3LDAsMC4xNzUsMSknLFxuICB9LFxuICBleGl0aW5nOiB7XG4gICAgbWF4SGVpZ2h0OiAnMjEwMHZoJyxcbiAgfSxcbiAgZXhpdGVkOiB7XG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIG1heEhlaWdodDogJzBweCcsXG4gICAgdHJhbnNpdGlvbjogJ21heC1oZWlnaHQgMS41cyBjdWJpYy1iZXppZXIoMC43NywwLDAuMTc1LDEpJ1xuICB9LFxufSlcblxuY29uc3QgY29tcG9uZW50cyA9IHtcbiAgYWJvdXRNZTogQWJvdXRNZVxufTtcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBsZXQgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3Qgc2hvdyA9IHBhZ2UgPT4ge1xuICAgIGNvbnN0IFNwZWNpZmljUGFnZSA9IGNvbXBvbmVudHNbcGFnZV07XG4gICAgcmV0dXJuIDxTcGVjaWZpY1BhZ2Ugc2V0UGFnZT17c2V0UGFnZX0gLz47XG4gIH0gXG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxlZnR9PjxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5zcGFufT5HcmVnIE1pbGxlcjwvc3Bhbj48L2Rpdj5cbiAgICAgIDxvbCBjbGFzc05hbWU9e2NsYXNzZXMubGlzdH0+XG4gICAgICAgIHtob21lRGF0YS5tYXAoKG8sIGluZGV4KSA9PiA8TGlzdEl0ZW0ga2V5PXtpbmRleH0gey4uLm99IG9uQ2xpY2s9eygpID0+IHNldFBhZ2Uoby5wYWdlKX0gLz4pfVxuICAgICAgPC9vbD5cbiAgICAgIDxDU1NUcmFuc2l0aW9uIGluPXtwYWdlICE9PSBudWxsfSB0aW1lb3V0PXswfT5cbiAgICAgICAge3N0YXRlID0+IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5zbGlkZVVwfSAke2NsYXNzZXNbc3RhdGVdfWB9PlxuICAgICAgICAgICAge3Nob3cocGFnZSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L0NTU1RyYW5zaXRpb24+XG4gICAgPC9tYWluPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/home.js\n");

/***/ })

})