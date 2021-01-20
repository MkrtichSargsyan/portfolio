webpackHotUpdate_N_E("pages/index",{

/***/ "./components/SideSrawer/SideDrawer.js":
/*!*********************************************!*\
  !*** ./components/SideSrawer/SideDrawer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SideDrawer; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _styles_SideDrawer_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../styles/SideDrawer.module.css */ \"./styles/SideDrawer.module.css\");\n/* harmony import */ var _styles_SideDrawer_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_SideDrawer_module_css__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/home/mkrtich/Desktop/microverse/portfolio/components/SideSrawer/SideDrawer.js\";\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\nvar SideDrawer = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(SideDrawer, _Component);\n\n  var _super = _createSuper(SideDrawer);\n\n  function SideDrawer() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, SideDrawer);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"state\", {\n      navigation_items: [{\n        icon: \"icons/home.png\",\n        title: \"Home\"\n      }, {\n        icon: \"icons/folder.png\",\n        title: \"My projects\"\n      }, {\n        icon: \"icons/user.png\",\n        title: \"About me\"\n      }, {\n        icon: \"icons/message.png\",\n        title: \"Contact\"\n      }],\n      social_itmes: [{\n        icon: \"fab fa-github fa-2x\",\n        link: \"Contact\"\n      }, {\n        icon: \"fab fa-twitter fa-2x\",\n        link: \"Contact\"\n      }, {\n        icon: \"fab fa-linkedin fa-2x\",\n        link: \"Contact\"\n      }, {\n        icon: \"fas fa-envelope fa-2x\",\n        link: \"Contact\"\n      }, {\n        icon: \"fas fa-file fa-2x\",\n        link: \"Contact\"\n      }]\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(SideDrawer, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var _this$state = this.state,\n          navigation_items = _this$state.navigation_items,\n          social_itmes = _this$state.social_itmes;\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-3631243150\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"jsx-3631243150\" + \" \" + (_styles_SideDrawer_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.toggler || \"\"),\n          children: \"'X'\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 9\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"jsx-3631243150\" + \" \" + (_styles_SideDrawer_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.side_drawer || \"\"),\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"jsx-3631243150\" + \" \" + (_styles_SideDrawer_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.logo || \"\"),\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n              src: \"me.JPG\",\n              alt: \"me\",\n              className: \"jsx-3631243150\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 55,\n              columnNumber: 13\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"jsx-3631243150\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n                className: \"jsx-3631243150\" + \" \" + (_styles_SideDrawer_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.my_name || \"\"),\n                children: \"Mkrtich Sargsyan\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 57,\n                columnNumber: 15\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                className: \"jsx-3631243150\" + \" \" + (_styles_SideDrawer_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.position || \"\"),\n                children: \"Full Stack Developer\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 58,\n                columnNumber: 15\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 56,\n              columnNumber: 13\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 11\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"jsx-3631243150\" + \" \" + (_styles_SideDrawer_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.navigation || \"\"),\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n              className: \"jsx-3631243150\",\n              children: navigation_items.map(function (item) {\n                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                  className: \"jsx-3631243150\",\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                    href: \"#\",\n                    className: \"jsx-3631243150\",\n                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n                      src: item.icon,\n                      alt: \"\",\n                      className: \"jsx-3631243150\"\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 66,\n                      columnNumber: 21\n                    }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                      className: \"jsx-3631243150\" + \" \" + (_styles_SideDrawer_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.title || \"\"),\n                      children: item.title\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 67,\n                      columnNumber: 21\n                    }, _this2)]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 65,\n                    columnNumber: 19\n                  }, _this2)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 64,\n                  columnNumber: 17\n                }, _this2);\n              })\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 62,\n              columnNumber: 13\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 11\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n            className: \"jsx-3631243150\" + \" \" + (_styles_SideDrawer_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.social || \"\"),\n            children: social_itmes.map(function (item) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                className: \"jsx-3631243150\",\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                  href: \"#\",\n                  target: \"_blank\",\n                  \"data-original-title\": \"Linkedin\",\n                  className: \"jsx-3631243150\",\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"i\", {\n                    className: \"jsx-3631243150\" + \" \" + (item.icon || \"\")\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 77,\n                    columnNumber: 19\n                  }, _this2)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 76,\n                  columnNumber: 17\n                }, _this2)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 75,\n                columnNumber: 15\n              }, _this2);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 73,\n            columnNumber: 11\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 9\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {\n          id: \"3631243150\",\n          children: \".jsx-3631243150{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21rcnRpY2gvRGVza3RvcC9taWNyb3ZlcnNlL3BvcnRmb2xpby9jb21wb25lbnRzL1NpZGVTcmF3ZXIvU2lkZURyYXdlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRm9CLEFBR1EsMEVBQUMiLCJmaWxlIjoiL2hvbWUvbWtydGljaC9EZXNrdG9wL21pY3JvdmVyc2UvcG9ydGZvbGlvL2NvbXBvbmVudHMvU2lkZVNyYXdlci9TaWRlRHJhd2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL1NpZGVEcmF3ZXIubW9kdWxlLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWRlRHJhd2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgbmF2aWdhdGlvbl9pdGVtczogW1xuICAgICAge1xuICAgICAgICBpY29uOiBcImljb25zL2hvbWUucG5nXCIsXG4gICAgICAgIHRpdGxlOiBcIkhvbWVcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGljb246IFwiaWNvbnMvZm9sZGVyLnBuZ1wiLFxuICAgICAgICB0aXRsZTogXCJNeSBwcm9qZWN0c1wiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWNvbjogXCJpY29ucy91c2VyLnBuZ1wiLFxuICAgICAgICB0aXRsZTogXCJBYm91dCBtZVwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWNvbjogXCJpY29ucy9tZXNzYWdlLnBuZ1wiLFxuICAgICAgICB0aXRsZTogXCJDb250YWN0XCIsXG4gICAgICB9LFxuICAgIF0sXG4gICAgc29jaWFsX2l0bWVzOiBbXG4gICAgICB7XG4gICAgICAgIGljb246IFwiZmFiIGZhLWdpdGh1YiBmYS0yeFwiLFxuICAgICAgICBsaW5rOiBcIkNvbnRhY3RcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGljb246IFwiZmFiIGZhLXR3aXR0ZXIgZmEtMnhcIixcbiAgICAgICAgbGluazogXCJDb250YWN0XCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpY29uOiBcImZhYiBmYS1saW5rZWRpbiBmYS0yeFwiLFxuICAgICAgICBsaW5rOiBcIkNvbnRhY3RcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGljb246IFwiZmFzIGZhLWVudmVsb3BlIGZhLTJ4XCIsXG4gICAgICAgIGxpbms6IFwiQ29udGFjdFwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWNvbjogXCJmYXMgZmEtZmlsZSBmYS0yeFwiLFxuICAgICAgICBsaW5rOiBcIkNvbnRhY3RcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBuYXZpZ2F0aW9uX2l0ZW1zLCBzb2NpYWxfaXRtZXMgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9nZ2xlcn0+J1gnPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2lkZV9kcmF3ZXJ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIm1lLkpQR1wiIGFsdD1cIm1lXCIgLz5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5teV9uYW1lfT5Na3J0aWNoIFNhcmdzeWFuPC9oMT5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMucG9zaXRpb259PkZ1bGwgU3RhY2sgRGV2ZWxvcGVyPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZpZ2F0aW9ufT5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAge25hdmlnYXRpb25faXRlbXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0uaWNvbn0gYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PntpdGVtLnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLnNvY2lhbH0+XG4gICAgICAgICAgICB7c29jaWFsX2l0bWVzLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiB0YXJnZXQ9XCJfYmxhbmtcIiBkYXRhLW9yaWdpbmFsLXRpdGxlPVwiTGlua2VkaW5cIj5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17aXRlbS5pY29ufT48L2k+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBkaXNwbGF5OmZsZXhcbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19 */\\n/*@ sourceURL=/home/mkrtich/Desktop/microverse/portfolio/components/SideSrawer/SideDrawer.js */\"\n        }, void 0, false, void 0, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 7\n      }, this);\n    }\n  }]);\n\n  return SideDrawer;\n}(react__WEBPACK_IMPORTED_MODULE_9__[\"Component\"]);\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWRlU3Jhd2VyL1NpZGVEcmF3ZXIuanM/OWQzMiJdLCJuYW1lcyI6WyJTaWRlRHJhd2VyIiwibmF2aWdhdGlvbl9pdGVtcyIsImljb24iLCJ0aXRsZSIsInNvY2lhbF9pdG1lcyIsImxpbmsiLCJzdGF0ZSIsInN0eWxlcyIsInRvZ2dsZXIiLCJzaWRlX2RyYXdlciIsImxvZ28iLCJteV9uYW1lIiwicG9zaXRpb24iLCJuYXZpZ2F0aW9uIiwibWFwIiwiaXRlbSIsInNvY2lhbCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztJQUVxQkEsVTs7Ozs7Ozs7Ozs7Ozs7OztnTkFDWDtBQUNOQyxzQkFBZ0IsRUFBRSxDQUNoQjtBQUNFQyxZQUFJLEVBQUUsZ0JBRFI7QUFFRUMsYUFBSyxFQUFFO0FBRlQsT0FEZ0IsRUFLaEI7QUFDRUQsWUFBSSxFQUFFLGtCQURSO0FBRUVDLGFBQUssRUFBRTtBQUZULE9BTGdCLEVBU2hCO0FBQ0VELFlBQUksRUFBRSxnQkFEUjtBQUVFQyxhQUFLLEVBQUU7QUFGVCxPQVRnQixFQWFoQjtBQUNFRCxZQUFJLEVBQUUsbUJBRFI7QUFFRUMsYUFBSyxFQUFFO0FBRlQsT0FiZ0IsQ0FEWjtBQW1CTkMsa0JBQVksRUFBRSxDQUNaO0FBQ0VGLFlBQUksRUFBRSxxQkFEUjtBQUVFRyxZQUFJLEVBQUU7QUFGUixPQURZLEVBS1o7QUFDRUgsWUFBSSxFQUFFLHNCQURSO0FBRUVHLFlBQUksRUFBRTtBQUZSLE9BTFksRUFTWjtBQUNFSCxZQUFJLEVBQUUsdUJBRFI7QUFFRUcsWUFBSSxFQUFFO0FBRlIsT0FUWSxFQWFaO0FBQ0VILFlBQUksRUFBRSx1QkFEUjtBQUVFRyxZQUFJLEVBQUU7QUFGUixPQWJZLEVBaUJaO0FBQ0VILFlBQUksRUFBRSxtQkFEUjtBQUVFRyxZQUFJLEVBQUU7QUFGUixPQWpCWTtBQW5CUixLOzs7Ozs7OzZCQTJDQztBQUFBOztBQUFBLHdCQUNvQyxLQUFLQyxLQUR6QztBQUFBLFVBQ0NMLGdCQURELGVBQ0NBLGdCQUREO0FBQUEsVUFDbUJHLFlBRG5CLGVBQ21CQSxZQURuQjtBQUVQLDBCQUNFO0FBQUE7QUFBQSxnQ0FDRTtBQUFBLCtDQUFnQkcscUVBQU0sQ0FBQ0MsT0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFBLCtDQUFnQkQscUVBQU0sQ0FBQ0UsV0FBdkI7QUFBQSxrQ0FDRTtBQUFBLGlEQUFnQkYscUVBQU0sQ0FBQ0csSUFBdkI7QUFBQSxvQ0FDRTtBQUFLLGlCQUFHLEVBQUMsUUFBVDtBQUFrQixpQkFBRyxFQUFDLElBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBRUU7QUFBQTtBQUFBLHNDQUNFO0FBQUEscURBQWVILHFFQUFNLENBQUNJLE9BQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLGVBRUU7QUFBQSxxREFBaUJKLHFFQUFNLENBQUNLLFFBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFRRTtBQUFBLGlEQUFnQkwscUVBQU0sQ0FBQ00sVUFBdkI7QUFBQSxtQ0FDRTtBQUFBO0FBQUEsd0JBQ0daLGdCQUFnQixDQUFDYSxHQUFqQixDQUFxQixVQUFDQyxJQUFEO0FBQUEsb0NBQ3BCO0FBQUE7QUFBQSx5Q0FDRTtBQUFHLHdCQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUEsNENBQ0U7QUFBSyx5QkFBRyxFQUFFQSxJQUFJLENBQUNiLElBQWY7QUFBcUIseUJBQUcsRUFBQyxFQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFERixlQUVFO0FBQUEsMkRBQWlCSyxxRUFBTSxDQUFDSixLQUF4QjtBQUFBLGdDQUFnQ1ksSUFBSSxDQUFDWjtBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBRG9CO0FBQUEsZUFBckI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFSRixlQW9CRTtBQUFBLGlEQUFlSSxxRUFBTSxDQUFDUyxNQUF0QjtBQUFBLHNCQUNHWixZQUFZLENBQUNVLEdBQWIsQ0FBaUIsVUFBQ0MsSUFBRDtBQUFBLGtDQUNoQjtBQUFBO0FBQUEsdUNBQ0U7QUFBRyxzQkFBSSxFQUFDLEdBQVI7QUFBWSx3QkFBTSxFQUFDLFFBQW5CO0FBQTRCLHlDQUFvQixVQUFoRDtBQUFBO0FBQUEseUNBQ0U7QUFBQSx5REFBY0EsSUFBSSxDQUFDYixJQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFEZ0I7QUFBQSxhQUFqQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBcEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERjtBQXNDRDs7OztFQXBGcUNlLCtDIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TaWRlU3Jhd2VyL1NpZGVEcmF3ZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvU2lkZURyYXdlci5tb2R1bGUuY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZGVEcmF3ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBuYXZpZ2F0aW9uX2l0ZW1zOiBbXG4gICAgICB7XG4gICAgICAgIGljb246IFwiaWNvbnMvaG9tZS5wbmdcIixcbiAgICAgICAgdGl0bGU6IFwiSG9tZVwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWNvbjogXCJpY29ucy9mb2xkZXIucG5nXCIsXG4gICAgICAgIHRpdGxlOiBcIk15IHByb2plY3RzXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpY29uOiBcImljb25zL3VzZXIucG5nXCIsXG4gICAgICAgIHRpdGxlOiBcIkFib3V0IG1lXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpY29uOiBcImljb25zL21lc3NhZ2UucG5nXCIsXG4gICAgICAgIHRpdGxlOiBcIkNvbnRhY3RcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgICBzb2NpYWxfaXRtZXM6IFtcbiAgICAgIHtcbiAgICAgICAgaWNvbjogXCJmYWIgZmEtZ2l0aHViIGZhLTJ4XCIsXG4gICAgICAgIGxpbms6IFwiQ29udGFjdFwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWNvbjogXCJmYWIgZmEtdHdpdHRlciBmYS0yeFwiLFxuICAgICAgICBsaW5rOiBcIkNvbnRhY3RcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGljb246IFwiZmFiIGZhLWxpbmtlZGluIGZhLTJ4XCIsXG4gICAgICAgIGxpbms6IFwiQ29udGFjdFwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWNvbjogXCJmYXMgZmEtZW52ZWxvcGUgZmEtMnhcIixcbiAgICAgICAgbGluazogXCJDb250YWN0XCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpY29uOiBcImZhcyBmYS1maWxlIGZhLTJ4XCIsXG4gICAgICAgIGxpbms6IFwiQ29udGFjdFwiLFxuICAgICAgfSxcbiAgICBdLFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG5hdmlnYXRpb25faXRlbXMsIHNvY2lhbF9pdG1lcyB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50b2dnbGVyfT4nWCc8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaWRlX2RyYXdlcn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfT5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwibWUuSlBHXCIgYWx0PVwibWVcIiAvPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLm15X25hbWV9Pk1rcnRpY2ggU2FyZ3N5YW48L2gxPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5wb3NpdGlvbn0+RnVsbCBTdGFjayBEZXZlbG9wZXI8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdmlnYXRpb259PlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICB7bmF2aWdhdGlvbl9pdGVtcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5pY29ufSBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+e2l0ZW0udGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMuc29jaWFsfT5cbiAgICAgICAgICAgIHtzb2NpYWxfaXRtZXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIHRhcmdldD1cIl9ibGFua1wiIGRhdGEtb3JpZ2luYWwtdGl0bGU9XCJMaW5rZWRpblwiPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtpdGVtLmljb259PjwvaT5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIGRpc3BsYXk6ZmxleFxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/SideSrawer/SideDrawer.js\n");

/***/ })

})