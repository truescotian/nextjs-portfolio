webpackHotUpdate_N_E("pages/home",{

/***/ "./pages/home.js":
/*!***********************!*\
  !*** ./pages/home.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-jss */ \"./node_modules/react-jss/dist/react-jss.esm.js\");\n/* harmony import */ var _components_ui_list_listItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ui/list/listItem */ \"./components/ui/list/listItem.js\");\n/* harmony import */ var _data_home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/home */ \"./data/home.js\");\n/* harmony import */ var _components_aboutMe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/aboutMe */ \"./components/aboutMe.js\");\n/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-transition-group */ \"./node_modules/react-transition-group/esm/index.js\");\n/* harmony import */ var _components_sliderComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/sliderComponent */ \"./components/sliderComponent.js\");\n\n\n\nvar _jsxFileName = \"/home/greg/nextjs/nextjs-portfolio/pages/home.js\",\n    _container,\n    _list,\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\nvar tabletBreak = '@media (max-width: 1250px)';\nvar mobileBreak = '@media (max-width: 720px)';\nvar useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_3__[\"createUseStyles\"])({\n  container: (_container = {\n    display: 'grid',\n    gridTemplateColumns: \"1fr 4fr\",\n    height: '100%',\n    backgroundColor: \"#171717\",\n    padding: \"150px\",\n    paddingBottom: \"0px\",\n    paddingRight: \"0px\",\n    boxSizing: \"border-box\",\n    overflow: \"auto\"\n  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_container, tabletBreak, {\n    gridTemplateColumns: \"1fr\",\n    padding: \"20px\",\n    paddingRight: \"0px\"\n  }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_container, mobileBreak, {\n    padding: \"20px\",\n    paddingRight: \"0px\"\n  }), _container),\n  left: {\n    fontSize: \"14px\",\n    letterSpacing: \"normal\"\n  },\n  list: (_list = {\n    display: \"flex\",\n    flexFlow: \"column nowrap\"\n  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_list, mobileBreak, {\n    marginTop: \"30px\"\n  }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_list, \"& li:not(:first-child)\", {\n    marginTop: \"60px\"\n  }), _list),\n  span: {\n    color: \"grey\",\n    \"&:hover\": {\n      color: \"#fff\"\n    }\n  },\n  slideUp: {\n    position: \"absolute\",\n    top: \"0\",\n    left: \"0\",\n    maxHeight: \"0\",\n    backgroundColor: \"#000\"\n  },\n  enter: {\n    maxHeight: '0'\n  },\n  enterActive: {\n    overflow: 'auto'\n  },\n  enterDone: {\n    height: \"100vh\",\n    width: \"100vw\",\n    maxHeight: '2100vh',\n    transition: 'max-height 500ms cubic-bezier(0.77,0,0.175,1)'\n  },\n  exit: {\n    width: \"100vw\",\n    height: \"100vh\",\n    maxHeight: '2100vh'\n  },\n  exitActive: {},\n  exitDone: {\n    height: \"0vh\",\n    maxHeight: '0vh',\n    transition: 'max-height 500ms cubic-bezier(0.77,0,0.175,1)'\n  }\n});\nvar components = {\n  aboutMe: _components_aboutMe__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n};\n\nvar Home = function Home() {\n  _s();\n\n  var classes = useStyles();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      page = _useState[0],\n      setPage = _useState[1];\n\n  var show = function show(page) {\n    var SpecificPage = components[page];\n\n    if (!page) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        style: {\n          display: \"block\",\n          width: \"100%\",\n          marginTop: \"30px\"\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 14\n      }, _this);\n    }\n\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(SpecificPage, {\n      setPage: setPage\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 12\n    }, _this);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"main\", {\n    className: classes.container,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: classes.left,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"span\", {\n        className: classes.span,\n        children: \"Greg Miller\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 105,\n        columnNumber: 37\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"ol\", {\n      className: classes.list,\n      children: _data_home__WEBPACK_IMPORTED_MODULE_5__[\"homeData\"].map(function (o, index) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_ui_list_listItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _objectSpread(_objectSpread({}, o), {}, {\n          onClick: function onClick() {\n            return setPage(o.page);\n          }\n        }), index, false, {\n          fileName: _jsxFileName,\n          lineNumber: 107,\n          columnNumber: 37\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_transition_group__WEBPACK_IMPORTED_MODULE_7__[\"CSSTransition\"], {\n      \"in\": page !== null,\n      timeout: 0,\n      classNames: {\n        enter: classes.enter,\n        enterActive: classes.enterActive,\n        enterDone: classes.enterDone,\n        exit: classes.exit,\n        exitActive: classes.exitActive,\n        exitDone: classes.exitDone\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: classes.slideUp,\n        children: show(page)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 117,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 104,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Home, \"ww7HtQiUQafHwqSGL/JTEckeHDo=\", false, function () {\n  return [useStyles];\n});\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9tZS5qcz8wODdkIl0sIm5hbWVzIjpbInRhYmxldEJyZWFrIiwibW9iaWxlQnJlYWsiLCJ1c2VTdHlsZXMiLCJjcmVhdGVVc2VTdHlsZXMiLCJjb250YWluZXIiLCJkaXNwbGF5IiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsInBhZGRpbmciLCJwYWRkaW5nQm90dG9tIiwicGFkZGluZ1JpZ2h0IiwiYm94U2l6aW5nIiwib3ZlcmZsb3ciLCJsZWZ0IiwiZm9udFNpemUiLCJsZXR0ZXJTcGFjaW5nIiwibGlzdCIsImZsZXhGbG93IiwibWFyZ2luVG9wIiwic3BhbiIsImNvbG9yIiwic2xpZGVVcCIsInBvc2l0aW9uIiwidG9wIiwibWF4SGVpZ2h0IiwiZW50ZXIiLCJlbnRlckFjdGl2ZSIsImVudGVyRG9uZSIsIndpZHRoIiwidHJhbnNpdGlvbiIsImV4aXQiLCJleGl0QWN0aXZlIiwiZXhpdERvbmUiLCJjb21wb25lbnRzIiwiYWJvdXRNZSIsIkFib3V0TWUiLCJIb21lIiwiY2xhc3NlcyIsInVzZVN0YXRlIiwicGFnZSIsInNldFBhZ2UiLCJzaG93IiwiU3BlY2lmaWNQYWdlIiwiaG9tZURhdGEiLCJtYXAiLCJvIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFdBQVcsR0FBRyw0QkFBcEI7QUFDQSxJQUFNQyxXQUFXLEdBQUcsMkJBQXBCO0FBRUEsSUFBTUMsU0FBUyxHQUFHQyxpRUFBZSxDQUFDO0FBQ2hDQyxXQUFTO0FBQ1BDLFdBQU8sRUFBRSxNQURGO0FBRVBDLHVCQUFtQixFQUFFLFNBRmQ7QUFHUEMsVUFBTSxFQUFFLE1BSEQ7QUFJUEMsbUJBQWUsRUFBRSxTQUpWO0FBS1BDLFdBQU8sRUFBRSxPQUxGO0FBTVBDLGlCQUFhLEVBQUUsS0FO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O0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFJLGVBQVMsRUFBRWtCLE9BQU8sQ0FBQ3JCLElBQXZCO0FBQUEsZ0JBQ0cyQixtREFBUSxDQUFDQyxHQUFULENBQWEsVUFBQ0MsQ0FBRCxFQUFJQyxLQUFKO0FBQUEsNEJBQWMscUVBQUMsb0VBQUQsa0NBQTBCRCxDQUExQjtBQUE2QixpQkFBTyxFQUFFO0FBQUEsbUJBQU1MLE9BQU8sQ0FBQ0ssQ0FBQyxDQUFDTixJQUFILENBQWI7QUFBQTtBQUF0QyxZQUFlTyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQWQ7QUFBQSxPQUFiO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBS0UscUVBQUMsb0VBQUQ7QUFBZSxZQUFJUCxJQUFJLEtBQUssSUFBNUI7QUFBa0MsYUFBTyxFQUFFLENBQTNDO0FBQThDLGdCQUFVLEVBQUU7QUFDeERkLGFBQUssRUFBRVksT0FBTyxDQUFDWixLQUR5QztBQUV4REMsbUJBQVcsRUFBRVcsT0FBTyxDQUFDWCxXQUZtQztBQUd4REMsaUJBQVMsRUFBRVUsT0FBTyxDQUFDVixTQUhxQztBQUl4REcsWUFBSSxFQUFFTyxPQUFPLENBQUNQLElBSjBDO0FBS3hEQyxrQkFBVSxFQUFFTSxPQUFPLENBQUNOLFVBTG9DO0FBTXhEQyxnQkFBUSxFQUFFSyxPQUFPLENBQUNMO0FBTnNDLE9BQTFEO0FBQUEsNkJBUUU7QUFBSyxpQkFBUyxFQUFFSyxPQUFPLENBQUNoQixPQUF4QjtBQUFBLGtCQUNHb0IsSUFBSSxDQUFDRixJQUFEO0FBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW9CRCxDQWhDRDs7R0FBTUgsSTtVQUNZbkMsUzs7O0tBRFptQyxJO0FBa0NTQSxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2hvbWUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y3JlYXRlVXNlU3R5bGVzfSBmcm9tICdyZWFjdC1qc3MnXG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSBcIi4uL2NvbXBvbmVudHMvdWkvbGlzdC9saXN0SXRlbVwiO1xuaW1wb3J0IHsgaG9tZURhdGEgfSBmcm9tIFwiLi4vZGF0YS9ob21lXCI7XG5pbXBvcnQgQWJvdXRNZSBmcm9tIFwiLi4vY29tcG9uZW50cy9hYm91dE1lXCI7XG5pbXBvcnQgeyBDU1NUcmFuc2l0aW9uIH0gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cCc7XG5pbXBvcnQgU2xpZGVyQ29tcG9uZW50IGZyb20gXCIuLi9jb21wb25lbnRzL3NsaWRlckNvbXBvbmVudFwiO1xuXG5jb25zdCB0YWJsZXRCcmVhayA9ICdAbWVkaWEgKG1heC13aWR0aDogMTI1MHB4KSc7XG5jb25zdCBtb2JpbGVCcmVhayA9ICdAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpJztcblxuY29uc3QgdXNlU3R5bGVzID0gY3JlYXRlVXNlU3R5bGVzKHtcbiAgY29udGFpbmVyOiB7XG4gICAgZGlzcGxheTogJ2dyaWQnLFxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiMWZyIDRmclwiLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjMTcxNzE3XCIsXG4gICAgcGFkZGluZzogXCIxNTBweFwiLFxuICAgIHBhZGRpbmdCb3R0b206IFwiMHB4XCIsXG4gICAgcGFkZGluZ1JpZ2h0OiBcIjBweFwiLFxuICAgIGJveFNpemluZzogXCJib3JkZXItYm94XCIsXG4gICAgb3ZlcmZsb3c6IFwiYXV0b1wiLFxuICAgIFt0YWJsZXRCcmVha106IHtcbiAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiMWZyXCIsXG4gICAgICBwYWRkaW5nOiBcIjIwcHhcIixcbiAgICAgIHBhZGRpbmdSaWdodDogXCIwcHhcIixcbiAgICB9LFxuICAgIFttb2JpbGVCcmVha106IHtcbiAgICAgIHBhZGRpbmc6IFwiMjBweFwiLFxuICAgICAgcGFkZGluZ1JpZ2h0OiBcIjBweFwiLFxuICAgIH1cbiAgfSxcbiAgbGVmdDoge1xuICAgIGZvbnRTaXplOiBcIjE0cHhcIixcbiAgICBsZXR0ZXJTcGFjaW5nOiBcIm5vcm1hbFwiLFxuICB9LFxuICBsaXN0OiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleEZsb3c6IFwiY29sdW1uIG5vd3JhcFwiLFxuICAgIFttb2JpbGVCcmVha106IHtcbiAgICAgIG1hcmdpblRvcDogXCIzMHB4XCIsXG4gICAgfSxcbiAgICBcIiYgbGk6bm90KDpmaXJzdC1jaGlsZClcIjoge1xuICAgICAgbWFyZ2luVG9wOiBcIjYwcHhcIlxuICAgIH1cbiAgfSxcbiAgc3Bhbjoge1xuICAgIGNvbG9yOiBcImdyZXlcIixcbiAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgY29sb3I6IFwiI2ZmZlwiXG4gICAgfVxuICB9LFxuICBzbGlkZVVwOiB7XG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICB0b3A6IFwiMFwiLFxuICAgIGxlZnQ6IFwiMFwiLFxuICAgIG1heEhlaWdodDogXCIwXCIsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiMwMDBcIixcbiAgfSxcbiAgZW50ZXI6IHtcbiAgICBtYXhIZWlnaHQ6ICcwJyxcbiAgfSxcbiAgZW50ZXJBY3RpdmU6IHtcbiAgICBvdmVyZmxvdzogJ2F1dG8nXG4gIH0sXG4gIGVudGVyRG9uZToge1xuICAgIGhlaWdodDogXCIxMDB2aFwiLFxuICAgIHdpZHRoOiBcIjEwMHZ3XCIsXG4gICAgbWF4SGVpZ2h0OiAnMjEwMHZoJyxcbiAgICB0cmFuc2l0aW9uOiAnbWF4LWhlaWdodCA1MDBtcyBjdWJpYy1iZXppZXIoMC43NywwLDAuMTc1LDEpJyxcbiAgfSxcbiAgZXhpdDoge1xuICAgIHdpZHRoOiBcIjEwMHZ3XCIsXG4gICAgaGVpZ2h0OiBcIjEwMHZoXCIsXG4gICAgbWF4SGVpZ2h0OiAnMjEwMHZoJyxcbiAgfSxcbiAgZXhpdEFjdGl2ZToge1xuICBcbiAgfSxcbiAgZXhpdERvbmU6IHtcbiAgICBoZWlnaHQ6IFwiMHZoXCIsXG4gICAgbWF4SGVpZ2h0OiAnMHZoJyxcbiAgICB0cmFuc2l0aW9uOiAnbWF4LWhlaWdodCA1MDBtcyBjdWJpYy1iZXppZXIoMC43NywwLDAuMTc1LDEpJyxcbiAgfVxufSlcblxuY29uc3QgY29tcG9uZW50cyA9IHtcbiAgYWJvdXRNZTogQWJvdXRNZVxufTtcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBsZXQgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3Qgc2hvdyA9IHBhZ2UgPT4ge1xuICAgIGNvbnN0IFNwZWNpZmljUGFnZSA9IGNvbXBvbmVudHNbcGFnZV07XG4gICAgaWYgKCFwYWdlKSB7XG4gICAgICByZXR1cm4gPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJibG9ja1wiLCB3aWR0aDpcIjEwMCVcIiwgbWFyZ2luVG9wOlwiMzBweFwifX0+PC9kaXY+XG4gICAgfVxuICAgIHJldHVybiA8U3BlY2lmaWNQYWdlIHNldFBhZ2U9e3NldFBhZ2V9IC8+O1xuICB9IFxuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5sZWZ0fT48c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuc3Bhbn0+R3JlZyBNaWxsZXI8L3NwYW4+PC9kaXY+XG4gICAgICA8b2wgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3R9PlxuICAgICAgICB7aG9tZURhdGEubWFwKChvLCBpbmRleCkgPT4gPExpc3RJdGVtIGtleT17aW5kZXh9IHsuLi5vfSBvbkNsaWNrPXsoKSA9PiBzZXRQYWdlKG8ucGFnZSl9IC8+KX1cbiAgICAgIDwvb2w+XG4gICAgICA8Q1NTVHJhbnNpdGlvbiBpbj17cGFnZSAhPT0gbnVsbH0gdGltZW91dD17MH0gY2xhc3NOYW1lcz17e1xuICAgICAgICBlbnRlcjogY2xhc3Nlcy5lbnRlcixcbiAgICAgICAgZW50ZXJBY3RpdmU6IGNsYXNzZXMuZW50ZXJBY3RpdmUsXG4gICAgICAgIGVudGVyRG9uZTogY2xhc3Nlcy5lbnRlckRvbmUsXG4gICAgICAgIGV4aXQ6IGNsYXNzZXMuZXhpdCxcbiAgICAgICAgZXhpdEFjdGl2ZTogY2xhc3Nlcy5leGl0QWN0aXZlLFxuICAgICAgICBleGl0RG9uZTogY2xhc3Nlcy5leGl0RG9uZSxcbiAgICAgIH19PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zbGlkZVVwfT5cbiAgICAgICAgICB7c2hvdyhwYWdlKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NTU1RyYW5zaXRpb24+XG4gICAgPC9tYWluPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/home.js\n");

/***/ })

})