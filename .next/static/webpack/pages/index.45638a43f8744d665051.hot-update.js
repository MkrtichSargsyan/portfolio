webpackHotUpdate_N_E("pages/index",{

/***/ "./layouts/MainLayout.js":
/*!*******************************!*\
  !*** ./layouts/MainLayout.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MainLayout; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _components_main_content_Main__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/main_content/Main */ \"./components/main_content/Main.js\");\n/* harmony import */ var _components_SideSrawer_SideDrawer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/SideSrawer/SideDrawer */ \"./components/SideSrawer/SideDrawer.js\");\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/home/mkrtich/Desktop/microverse/portfolio/layouts/MainLayout.js\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\nvar MainLayout = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(MainLayout, _Component);\n\n  var _super = _createSuper(MainLayout);\n\n  function MainLayout() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, MainLayout);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"state\", {\n      active: true\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"toggleSidebar\", function (e) {\n      e.preventDefault();\n\n      _this.setState({\n        active: !_this.state.active\n      });\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"getWindowWidth\", function () {\n      var _window = window,\n          width = _window.innerWidth;\n      console.log(innerWidth);\n      return width;\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(MainLayout, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      ret;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_SideSrawer_SideDrawer__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n          active: this.state.active,\n          toggleSidebar: this.toggleSidebar\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 9\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_main_content_Main__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n          active: this.state.active\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 9\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 7\n      }, this);\n    }\n  }]);\n\n  return MainLayout;\n}(react__WEBPACK_IMPORTED_MODULE_8__[\"Component\"]);\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGF5b3V0cy9NYWluTGF5b3V0LmpzP2RjY2QiXSwibmFtZXMiOlsiTWFpbkxheW91dCIsImFjdGl2ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwic3RhdGUiLCJ3aW5kb3ciLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJjb25zb2xlIiwibG9nIiwicmV0IiwidG9nZ2xlU2lkZWJhciIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0lBRXFCQSxVOzs7Ozs7Ozs7Ozs7Ozs7O2dOQUNYO0FBQ05DLFlBQU0sRUFBRTtBQURGLEs7O3dOQUlRLFVBQUNDLENBQUQsRUFBTztBQUNyQkEsT0FBQyxDQUFDQyxjQUFGOztBQUNBLFlBQUtDLFFBQUwsQ0FBYztBQUNaSCxjQUFNLEVBQUUsQ0FBQyxNQUFLSSxLQUFMLENBQVdKO0FBRFIsT0FBZDtBQUdELEs7O3lOQUVnQixZQUFLO0FBQUEsb0JBQ1VLLE1BRFY7QUFBQSxVQUNBQyxLQURBLFdBQ1pDLFVBRFk7QUFFcEJDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixVQUFaO0FBQ0EsYUFBT0QsS0FBUDtBQUNELEs7Ozs7Ozs7d0NBRWtCO0FBQ2pCSSxTQUFHO0FBQ0o7Ozs2QkFFUTtBQUVQLDBCQUNFO0FBQUEsZ0NBQ0UscUVBQUMsMEVBQUQ7QUFDRSxnQkFBTSxFQUFFLEtBQUtOLEtBQUwsQ0FBV0osTUFEckI7QUFFRSx1QkFBYSxFQUFFLEtBQUtXO0FBRnRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFLRSxxRUFBQyxxRUFBRDtBQUFNLGdCQUFNLEVBQUUsS0FBS1AsS0FBTCxDQUFXSjtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGO0FBU0Q7Ozs7RUFqQ3FDWSwrQyIsImZpbGUiOiIuL2xheW91dHMvTWFpbkxheW91dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNYWluIGZyb20gXCIuLi9jb21wb25lbnRzL21haW5fY29udGVudC9NYWluXCI7XG5pbXBvcnQgU2lkZURyYXdlciBmcm9tIFwiLi4vY29tcG9uZW50cy9TaWRlU3Jhd2VyL1NpZGVEcmF3ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbkxheW91dCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgfTtcblxuICB0b2dnbGVTaWRlYmFyID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhY3RpdmU6ICF0aGlzLnN0YXRlLmFjdGl2ZSxcbiAgICB9KTtcbiAgfTtcblxuICBnZXRXaW5kb3dXaWR0aCA9ICgpPT4ge1xuICAgIGNvbnN0IHsgaW5uZXJXaWR0aDogd2lkdGggfSA9IHdpbmRvdztcbiAgICBjb25zb2xlLmxvZyhpbm5lcldpZHRoKTtcbiAgICByZXR1cm4gd2lkdGg7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIHJldFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIFxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8U2lkZURyYXdlclxuICAgICAgICAgIGFjdGl2ZT17dGhpcy5zdGF0ZS5hY3RpdmV9XG4gICAgICAgICAgdG9nZ2xlU2lkZWJhcj17dGhpcy50b2dnbGVTaWRlYmFyfVxuICAgICAgICAvPlxuICAgICAgICA8TWFpbiBhY3RpdmU9e3RoaXMuc3RhdGUuYWN0aXZlfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./layouts/MainLayout.js\n");

/***/ })

})