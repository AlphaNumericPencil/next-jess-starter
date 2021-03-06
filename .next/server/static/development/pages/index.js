module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\s0937895\\Desktop\\next-jess-portfolio\\components\\Header.js";




var Header = function Header(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    id: "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Cats Can't Draw"), " by Jess"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    onClick: props.onToggleMenu,
    href: "javascript:;",
    className: "menu-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "About")))));
};

Header.propTypes = {
  onToggleMenu: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/main.scss */ "./styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Menu */ "./components/Menu.js");


var _jsxFileName = "C:\\Users\\s0937895\\Desktop\\next-jess-portfolio\\components\\Layout.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var Layout =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Layout, _React$Component);

  function Layout(props) {
    var _this;

    _classCallCheck(this, Layout);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Layout).call(this, props));
    _this.state = {
      isMenuVisible: false,
      loading: 'is-loading'
    };
    _this.handleToggleMenu = _this.handleToggleMenu.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Layout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.timeoutId = setTimeout(function () {
        _this2.setState({
          loading: ''
        });
      }, 100);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
      }
    }
  }, {
    key: "handleToggleMenu",
    value: function handleToggleMenu() {
      this.setState({
        isMenuVisible: !this.state.isMenuVisible
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "body ".concat(this.state.loading, " ").concat(this.state.isMenuVisible ? 'is-menu-visible' : ''),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "Jess"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
        name: "description",
        content: "A professional portfolio of illustrations for the illustrious and handsome Jess Stanton.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
        href: "/static/css/skel.css",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,600,600i",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
        onToggleMenu: this.handleToggleMenu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }), this.props.children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Menu__WEBPACK_IMPORTED_MODULE_4__["default"], {
        onToggleMenu: this.handleToggleMenu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Menu.js":
/*!****************************!*\
  !*** ./components/Menu.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\s0937895\\Desktop\\next-jess-portfolio\\components\\Menu.js";



var Menu = function Menu(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    id: "menu",
    className: "panel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "inner split",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "My name is Jess!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "I'm a freelance artist with a Bachelors in Fine Arts from the School of Visual Arts. ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Follow me on ..."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://twitter.com/catscantdraw",
    className: "icon brands fa-twitter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Twitter"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.facebook.com/catscantdraw",
    className: "icon brands fa-facebook-f",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Facebook"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.youtube.com/channel/UCoFtzPbV2UupKhtIxpbEOdQ",
    className: "icon brands fa-youtube",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "GitHub"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.linkedin.com/in/catscantdraw/",
    className: "icon brands fa-linkedin-in",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "LinkedIn"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://sva.ccnsite.com/catscantdraw",
    className: "icon brands fa-behance",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Dribbble"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "copyright",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "\xA9 2019")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Get in touch"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    method: "post",
    action: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "fields",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "field half",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    name: "name",
    id: "name",
    placeholder: "Name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "field half",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    name: "email",
    id: "email",
    placeholder: "Email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "field",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
    name: "message",
    id: "message",
    rows: "4",
    placeholder: "Message",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "actions",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "submit",
    value: "Send",
    className: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "reset",
    value: "Reset",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }))))))));
};

Menu.propTypes = {
  onToggleMenu: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./components/Tile.js":
/*!****************************!*\
  !*** ./components/Tile.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\s0937895\\Desktop\\next-jess-portfolio\\components\\Tile.js";





var Tile = function Tile(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("article", {
    className: "jsx-2485016484" + " " + "thumb",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: props.image,
    className: "jsx-2485016484" + " " + "image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: props.image,
    alt: props.description,
    className: "jsx-2485016484",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-2485016484",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, props.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2485016484",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, props.description), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2485016484",
    css: "img.jsx-2485016484{max-width:100%;min-height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcczA5Mzc4OTVcXERlc2t0b3BcXG5leHQtamVzcy1wb3J0Zm9saW9cXGNvbXBvbmVudHNcXFRpbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU29CLEFBSTJCLGVBQ0MsZ0JBQ25CIiwiZmlsZSI6IkM6XFxVc2Vyc1xcczA5Mzc4OTVcXERlc2t0b3BcXG5leHQtamVzcy1wb3J0Zm9saW9cXGNvbXBvbmVudHNcXFRpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuXHJcbmNvbnN0IFRpbGUgPSBwcm9wcyA9PiAoXHJcbiAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJ0aHVtYlwiPlxyXG4gICAgICAgIDxMaW5rID48YSBocmVmPXtwcm9wcy5pbWFnZX0gY2xhc3NOYW1lPVwiaW1hZ2VcIj48aW1nIHNyYz17cHJvcHMuaW1hZ2V9IGFsdD17cHJvcHMuZGVzY3JpcHRpb259Lz48L2E+PC9MaW5rPlxyXG4gICAgICAgIDxoMj57cHJvcHMudGl0bGV9PC9oMj5cclxuICAgICAgICA8cD57cHJvcHMuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICBcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgbWluLWhlaWdodDoxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9hcnRpY2xlPlxyXG4gICAgXHJcbik7XHJcblxyXG5UaWxlLnByb3BUeXBlcyA9IHtcclxuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBpbWFnZTogUHJvcFR5cGVzLnN0cmluZ1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGlsZTsiXX0= */\n/*@ sourceURL=C:\\Users\\s0937895\\Desktop\\next-jess-portfolio\\components\\Tile.js */",
    __self: this
  }));
};

Tile.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  description: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  image: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Tile);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Blog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout.js */ "./components/Layout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Tile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Tile */ "./components/Tile.js");


var _jsxFileName = "C:\\Users\\s0937895\\Desktop\\next-jess-portfolio\\pages\\index.js";





var PostLink = function PostLink(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    as: "/p/".concat(props.id),
    href: "/post?title=".concat(props.title),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, props.title)));
};

function Blog() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Tile__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Magna feugiat lorem",
    description: "Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.",
    image: "static/images/fulls/01.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Tile__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Nisl adipiscing",
    description: "Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.",
    image: "static/images/fulls/02.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Tile__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Tempus aliquam veroeros",
    description: "Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.",
    image: "static/images/fulls/03.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Tile__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Aliquam ipsum sed dolore",
    description: "Aliquam ipsum sed dolore",
    image: "static/images/fulls/04.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Tile__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Cursis aliquam nisl",
    description: "Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.",
    image: "static/images/fulls/05.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Tile__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Sed consequat phasellu",
    description: "Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.",
    image: "static/images/fulls/06.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Tile__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Mauris id tellus arcu",
    description: "Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.",
    image: "static/images/fulls/07.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Tile__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Nunc vehicula id nulla",
    description: "Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.",
    image: "static/images/fulls/08.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Tile__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Neque et faucibus viverra",
    description: "Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.",
    image: "static/images/fulls/09.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Tile__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Mattis ante fermentum",
    description: "Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.",
    image: "static/images/fulls/10.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Tile__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Sed ac elementum arcu",
    description: "Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.",
    image: "static/images/fulls/11.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Tile__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Vehicula id nulla dignissim",
    description: "Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.",
    image: "static/images/fulls/12.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  })));
}

/***/ }),

/***/ "./styles/main.scss":
/*!**************************!*\
  !*** ./styles/main.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

;

(function () {
  "use strict";

  module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300italic,400,400italic\");\n@-webkit-keyframes spinner{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}\n@keyframes spinner{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}\nhtml,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}\narticle,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}\nbody{line-height:1}\nol,ul{list-style:none}\nblockquote,q{quotes:none}\nblockquote:before,blockquote:after,q:before,q:after{content:'';content:none}\ntable{border-collapse:collapse;border-spacing:0}\nbody{-webkit-text-size-adjust:none}\nmark{background-color:transparent;color:inherit}\ninput::-moz-focus-inner{border:0;padding:0}\ninput,select,textarea{-moz-appearance:none;-webkit-appearance:none;-ms-appearance:none;appearance:none}\n@-ms-viewport{width:device-width}\nbody{-ms-overflow-style:scrollbar}\n@media screen and (max-width: 480px){html,body{min-width:320px}}\nhtml{box-sizing:border-box}\n*,*:before,*:after{box-sizing:inherit}\nbody{background:#242629}\nbody.is-preload *,body.is-preload *:before,body.is-preload *:after{-webkit-animation:none !important;animation:none !important;-webkit-transition:none !important;transition:none !important}\nbody.is-resizing *,body.is-resizing *:before,body.is-resizing *:after{-webkit-animation:none !important;animation:none !important;-webkit-transition:none !important;transition:none !important}\nbody,input,select,textarea{color:#a0a0a1;font-family:\"Source Sans Pro\",Helvetica,sans-serif;font-size:15pt;font-weight:300;letter-spacing:.025em;line-height:1.65}\n@media screen and (max-width: 1680px){body,input,select,textarea{font-size:11pt}}\na{-webkit-transition:color .2s ease-in-out,border-bottom-color .2s ease-in-out;transition:color .2s ease-in-out,border-bottom-color .2s ease-in-out;border-bottom:dotted 1px;color:#34a58e;text-decoration:none}\na:hover{border-bottom-color:transparent;color:#34a58e !important}\nstrong,b{color:#fff;font-weight:300}\nem,i{font-style:italic}\np{margin:0 0 2em 0}\nh1,h2,h3,h4,h5,h6{color:#fff;font-weight:300;letter-spacing:.1em;line-height:1.5;margin:0 0 1em 0;text-transform:uppercase}\nh1 a,h2 a,h3 a,h4 a,h5 a,h6 a{color:inherit;text-decoration:none}\nh1{font-size:2em}\nh2{font-size:1.25em}\nh3{font-size:1.1em}\nh4{font-size:1em}\nh5{font-size:0.9em}\nh6{font-size:0.7em}\n@media screen and (max-width: 736px){h2{font-size:1em}h3{font-size:0.9em}h4{font-size:0.8em}h5{font-size:0.7em}h6{font-size:0.7em}}\nsub{font-size:0.8em;position:relative;top:0.5em}\nsup{font-size:0.8em;position:relative;top:-0.5em}\nblockquote{border-left:4px #36383c;font-style:italic;margin:0 0 2em 0;padding:.5em 0 .5em 2em}\ncode{background:#34363b;border:solid 1px #36383c;font-family:\"Courier New\",monospace;font-size:0.9em;margin:0 0.25em;padding:0.25em 0.65em}\npre{-webkit-overflow-scrolling:touch;font-family:\"Courier New\",monospace;font-size:0.9em;margin:0 0 2em 0}\npre code{display:block;line-height:1.75;padding:1em 1.5em;overflow-x:auto}\nhr{border:0;border-bottom:solid 1px #36383c;margin:2em 0}\nhr.major{margin:3em 0}\n.align-left{text-align:left}\n.align-center{text-align:center}\n.align-right{text-align:right}\ninput[type=\"submit\"],input[type=\"reset\"],input[type=\"button\"],button,.button{-moz-appearance:none;-webkit-appearance:none;-ms-appearance:none;appearance:none;-webkit-transition:background-color .2s ease-in-out,box-shadow .2s ease-in-out,color .2s ease-in-out;transition:background-color .2s ease-in-out,box-shadow .2s ease-in-out,color .2s ease-in-out;background-color:transparent;border:0;border-radius:0;box-shadow:inset 0 0 0 2px #36383c;color:#fff !important;cursor:pointer;display:inline-block;font-size:0.9em;font-weight:300;height:3.05556em;letter-spacing:.1em;line-height:3.05556em;padding:0 2.5em;text-align:center;text-decoration:none;text-transform:uppercase;white-space:nowrap}\ninput[type=\"submit\"]:hover,input[type=\"reset\"]:hover,input[type=\"button\"]:hover,button:hover,.button:hover{box-shadow:inset 0 0 0 2px #34a58e;color:#34a58e !important}\ninput[type=\"submit\"]:hover:active,input[type=\"reset\"]:hover:active,input[type=\"button\"]:hover:active,button:hover:active,.button:hover:active{background-color:rgba(52,165,142,0.15);color:#34a58e !important}\ninput[type=\"submit\"].icon,input[type=\"reset\"].icon,input[type=\"button\"].icon,button.icon,.button.icon{padding-left:1.35em}\ninput[type=\"submit\"].icon:before,input[type=\"reset\"].icon:before,input[type=\"button\"].icon:before,button.icon:before,.button.icon:before{margin-right:0.5em}\ninput[type=\"submit\"].fit,input[type=\"reset\"].fit,input[type=\"button\"].fit,button.fit,.button.fit{width:100%}\ninput[type=\"submit\"].small,input[type=\"reset\"].small,input[type=\"button\"].small,button.small,.button.small{font-size:0.8em}\ninput[type=\"submit\"].large,input[type=\"reset\"].large,input[type=\"button\"].large,button.large,.button.large{font-size:1.35em}\ninput[type=\"submit\"].primary,input[type=\"reset\"].primary,input[type=\"button\"].primary,button.primary,.button.primary{background-color:#34a58e;box-shadow:none}\ninput[type=\"submit\"].primary:hover,input[type=\"reset\"].primary:hover,input[type=\"button\"].primary:hover,button.primary:hover,.button.primary:hover{background-color:#47c5ab;color:#fff !important}\ninput[type=\"submit\"].primary:hover:active,input[type=\"reset\"].primary:hover:active,input[type=\"button\"].primary:hover:active,button.primary:hover:active,.button.primary:hover:active{background-color:#287e6d}\ninput[type=\"submit\"].disabled,input[type=\"submit\"]:disabled,input[type=\"reset\"].disabled,input[type=\"reset\"]:disabled,input[type=\"button\"].disabled,input[type=\"button\"]:disabled,button.disabled,button:disabled,.button.disabled,.button:disabled{pointer-events:none;opacity:0.35}\nform{margin:0 0 2em 0}\nform>:last-child{margin-bottom:0}\nform>.fields{display:-moz-flex;display:-ms-flex;display:-webkit-box;display:flex;flex-wrap:wrap;width:calc(100% + 3em);margin:-1.5em 0 2em -1.5em}\nform>.fields>.field{-moz-flex-grow:0;-ms-flex-grow:0;-webkit-box-flex:0;flex-grow:0;-ms-flex-shrink:0;flex-shrink:0;padding:1.5em 0 0 1.5em;width:calc(100% - 1.5em)}\nform>.fields>.field.half{width:calc(50% - .75em)}\nform>.fields>.field.third{width:calc(100%/3 - .5em)}\nform>.fields>.field.quarter{width:calc(25% - .375em)}\n@media screen and (max-width: 736px){form>.fields{width:calc(100% + 3em);margin:-1.5em 0 2em -1.5em}form>.fields>.field{padding:1.5em 0 0 1.5em;width:calc(100% - 1.5em)}form>.fields>.field.half{width:calc(100% - 1.5em)}form>.fields>.field.third{width:calc(100% - 1.5em)}form>.fields>.field.quarter{width:calc(100% - 1.5em)}}\nlabel{color:#fff;display:block;font-size:0.9em;font-weight:300;margin:0 0 1em 0}\ninput[type=\"text\"],input[type=\"password\"],input[type=\"email\"],input[type=\"tel\"],input[type=\"search\"],input[type=\"url\"],select,textarea{-moz-appearance:none;-webkit-appearance:none;-ms-appearance:none;appearance:none;background:#34363b;border:0;border-radius:0;color:#a0a0a1;display:block;outline:0;padding:0 1em;text-decoration:none;width:100%}\ninput[type=\"text\"]:invalid,input[type=\"password\"]:invalid,input[type=\"email\"]:invalid,input[type=\"tel\"]:invalid,input[type=\"search\"]:invalid,input[type=\"url\"]:invalid,select:invalid,textarea:invalid{box-shadow:none}\ninput[type=\"text\"]:focus,input[type=\"password\"]:focus,input[type=\"email\"]:focus,input[type=\"tel\"]:focus,input[type=\"search\"]:focus,input[type=\"url\"]:focus,select:focus,textarea:focus{box-shadow:inset 0 0 0 2px #34a58e}\nselect{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' preserveAspectRatio='none' viewBox='0 0 40 40'%3E%3Cpath d='M9.4,12.3l10.4,10.4l10.4-10.4c0.2-0.2,0.5-0.4,0.9-0.4c0.3,0,0.6,0.1,0.9,0.4l3.3,3.3c0.2,0.2,0.4,0.5,0.4,0.9 c0,0.4-0.1,0.6-0.4,0.9L20.7,31.9c-0.2,0.2-0.5,0.4-0.9,0.4c-0.3,0-0.6-0.1-0.9-0.4L4.3,17.3c-0.2-0.2-0.4-0.5-0.4-0.9 c0-0.4,0.1-0.6,0.4-0.9l3.3-3.3c0.2-0.2,0.5-0.4,0.9-0.4S9.1,12.1,9.4,12.3z' fill='%2336383c' /%3E%3C/svg%3E\");background-size:1.25rem;background-repeat:no-repeat;background-position:calc(100% - 1rem) center;height:2.75em;padding-right:2.75em;text-overflow:ellipsis}\nselect option{color:#fff;background:#242629}\nselect:focus::-ms-value{background-color:transparent}\nselect::-ms-expand{display:none}\ninput[type=\"text\"],input[type=\"password\"],input[type=\"email\"],input[type=\"tel\"],input[type=\"search\"],input[type=\"url\"],select{height:2.75em}\ntextarea{padding:0.75em 1em}\ninput[type=\"checkbox\"],input[type=\"radio\"]{-moz-appearance:none;-webkit-appearance:none;-ms-appearance:none;appearance:none;display:block;float:left;margin-right:-2em;opacity:0;width:1em;z-index:-1}\ninput[type=\"checkbox\"]+label,input[type=\"radio\"]+label{text-decoration:none;color:#a0a0a1;cursor:pointer;display:inline-block;font-size:1em;font-weight:300;padding-left:2.4em;padding-right:0.75em;position:relative}\ninput[type=\"checkbox\"]+label:before,input[type=\"radio\"]+label:before{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:inline-block;font-style:normal;font-variant:normal;text-rendering:auto;line-height:1;text-transform:none !important;font-family:'Font Awesome 5 Free';font-weight:900}\ninput[type=\"checkbox\"]+label:before,input[type=\"radio\"]+label:before{background:#34363b;content:'';display:inline-block;font-size:0.8em;height:2.0625em;left:0;line-height:2.0625em;position:absolute;text-align:center;top:0;width:2.0625em}\ninput[type=\"checkbox\"]:checked+label:before,input[type=\"radio\"]:checked+label:before{background:#34a58e;border-color:#34a58e;color:#fff;content:'\\f00c'}\ninput[type=\"checkbox\"]:focus+label:before,input[type=\"radio\"]:focus+label:before{box-shadow:0 0 0 2px #34a58e}\ninput[type=\"radio\"]+label:before{border-radius:100%}\n::-webkit-input-placeholder{color:#707071 !important;opacity:1.0}\n:-moz-placeholder{color:#707071 !important;opacity:1.0}\n::-moz-placeholder{color:#707071 !important;opacity:1.0}\n:-ms-input-placeholder{color:#707071 !important;opacity:1.0}\n.icon{text-decoration:none;border-bottom:none;position:relative}\n.icon:before{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:inline-block;font-style:normal;font-variant:normal;text-rendering:auto;line-height:1;text-transform:none !important;font-family:'Font Awesome 5 Free';font-weight:400}\n.icon>.label{display:none}\n.icon:before{line-height:inherit}\n.icon.solid:before{font-weight:900}\n.icon.brands:before{font-family:'Font Awesome 5 Brands'}\nol{list-style:decimal;margin:0 0 2em 0;padding-left:1.25em}\nol li{padding-left:0.25em}\nul{list-style:disc;margin:0 0 2em 0;padding-left:1em}\nul li{padding-left:0.5em}\nul.alt{list-style:none;padding-left:0}\nul.alt li{border-top:solid 1px #36383c;padding:0.5em 0}\nul.alt li:first-child{border-top:0;padding-top:0}\ndl{margin:0 0 2em 0}\ndl dt{display:block;font-weight:300;margin:0 0 1em 0}\ndl dd{margin-left:2em}\nul.actions{display:-moz-flex;display:-ms-flex;display:-webkit-box;display:flex;cursor:default;list-style:none;margin-left:-1em;padding-left:0}\nul.actions li{padding:0 0 0 1em;vertical-align:middle}\nul.actions.special{-moz-justify-content:center;-ms-justify-content:center;-webkit-box-pack:center;justify-content:center;width:100%;margin-left:0}\nul.actions.special li:first-child{padding-left:0}\nul.actions.stacked{-moz-flex-direction:column;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;margin-left:0}\nul.actions.stacked li{padding:1.3em 0 0 0}\nul.actions.stacked li:first-child{padding-top:0}\nul.actions.fit{width:calc(100% + 1em)}\nul.actions.fit li{-moz-flex-grow:1;-ms-flex-grow:1;-webkit-box-flex:1;flex-grow:1;-ms-flex-shrink:1;flex-shrink:1;width:100%}\nul.actions.fit li>*{width:100%}\nul.actions.fit.stacked{width:100%}\n@media screen and (max-width: 480px){ul.actions:not(.fixed){-moz-flex-direction:column;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;margin-left:0;width:100% !important}ul.actions:not(.fixed) li{-moz-flex-grow:1;-ms-flex-grow:1;-webkit-box-flex:1;flex-grow:1;-ms-flex-shrink:1;flex-shrink:1;padding:1em 0 0 0;text-align:center;width:100%}ul.actions:not(.fixed) li>*{width:100%}ul.actions:not(.fixed) li:first-child{padding-top:0}ul.actions:not(.fixed) li input[type=\"submit\"],ul.actions:not(.fixed) li input[type=\"reset\"],ul.actions:not(.fixed) li input[type=\"button\"],ul.actions:not(.fixed) li button,ul.actions:not(.fixed) li .button{width:100%}ul.actions:not(.fixed) li input[type=\"submit\"].icon:before,ul.actions:not(.fixed) li input[type=\"reset\"].icon:before,ul.actions:not(.fixed) li input[type=\"button\"].icon:before,ul.actions:not(.fixed) li button.icon:before,ul.actions:not(.fixed) li .button.icon:before{margin-left:-0.5rem}}\nul.icons{cursor:default;list-style:none;padding-left:0}\nul.icons li{display:inline-block;padding:0 1em 0 0}\nul.icons li:last-child{padding-right:0}\nul.icons li .icon{color:#505051}\nul.icons li .icon:before{font-size:1.5em}\n.table-wrapper{-webkit-overflow-scrolling:touch;overflow-x:auto}\ntable{margin:0 0 2em 0;width:100%}\ntable tbody tr{border:solid 1px #36383c;border-left:0;border-right:0}\ntable tbody tr:nth-child(2n+1){background-color:#34363b}\ntable td{padding:0.75em 0.75em}\ntable th{color:#fff;font-size:0.9em;font-weight:300;padding:0 0.75em 0.75em 0.75em;text-align:left}\ntable thead{border-bottom:solid 2px #36383c}\ntable tfoot{border-top:solid 2px #36383c}\ntable.alt{border-collapse:separate}\ntable.alt tbody tr td{border:solid 1px #36383c;border-left-width:0;border-top-width:0}\ntable.alt tbody tr td:first-child{border-left-width:1px}\ntable.alt tbody tr:first-child td{border-top-width:1px}\ntable.alt thead{border-bottom:0}\ntable.alt tfoot{border-top:0}\n.panel{padding:4em 4em 2em 4em ;-webkit-transform:translateY(100vh);transform:translateY(100vh);-webkit-transition:-webkit-transform .5s ease;transition:-webkit-transform .5s ease;transition:transform .5s ease;transition:transform .5s ease, -webkit-transform .5s ease;-webkit-overflow-scrolling:touch;background:rgba(36,38,41,0.975);bottom:4em;left:0;max-height:calc(80vh - 4em);overflow-y:auto;position:fixed;width:100%;z-index:10001}\n.panel.active{-webkit-transform:translateY(1px);transform:translateY(1px)}\n.panel>.inner{margin:0 auto;max-width:100%;width:75em}\n.panel>.inner.split{display:-moz-flex;display:-ms-flex;display:-webkit-box;display:flex}\n.panel>.inner.split>div{margin-left:4em;width:50%}\n.panel>.inner.split>:first-child{margin-left:0}\n.panel>.closer{-webkit-transition:opacity .2s ease-in-out;transition:opacity .2s ease-in-out;background-image:url(\"images/close.svg\");background-position:center;background-repeat:no-repeat;background-size:3em;cursor:pointer;height:5em;opacity:0.25;position:absolute;right:0;top:0;width:5em;z-index:2}\n.panel>.closer:hover{opacity:1.0}\n@media screen and (max-width: 1280px){.panel{padding:3em 3em 1em 3em }.panel>.inner.split>div{margin-left:3em}.panel>.closer{background-size:2.5em;background-position:75% 25%}}\n@media screen and (max-width: 980px){.panel>.inner.split{-moz-flex-direction:column;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.panel>.inner.split>div{margin-left:0;width:100%}}\n@media screen and (max-width: 736px){.panel{-webkit-transform:translateY(-100vh);transform:translateY(-100vh);padding:4em 2em 2em 2em ;bottom:auto;top:calc(4em - 1px)}.panel.active{-webkit-transform:translateY(0);transform:translateY(0)}}\n.poptrox-overlay{-webkit-tap-highlight-color:rgba(255,255,255,0)}\n.poptrox-popup{background:rgba(31,34,36,0.925);box-shadow:0 1em 3em 0.5em rgba(0,0,0,0.25);cursor:default}\n.poptrox-popup:before{-webkit-transition:opacity .2s ease-in-out;transition:opacity .2s ease-in-out;background-image:-webkit-gradient(linear, right top, left top, from(rgba(31,34,36,0.35)), color-stop(10em, rgba(31,34,36,0)), to(rgba(31,34,36,0))),-webkit-gradient(linear, left top, right top, from(rgba(31,34,36,0.35)), color-stop(10em, rgba(31,34,36,0)), to(rgba(31,34,36,0)));background-image:linear-gradient(to left, rgba(31,34,36,0.35), rgba(31,34,36,0) 10em, rgba(31,34,36,0)),linear-gradient(to right, rgba(31,34,36,0.35), rgba(31,34,36,0) 10em, rgba(31,34,36,0));content:'';display:block;height:100%;left:0;position:absolute;top:0;width:100%;z-index:1;opacity:1}\n.poptrox-popup .closer{-webkit-transition:opacity .2s ease-in-out;transition:opacity .2s ease-in-out;background-image:url(\"images/close.svg\");background-position:center;background-repeat:no-repeat;background-size:3em;height:5em;opacity:0;position:absolute;right:0;top:0;width:5em;z-index:2}\n.poptrox-popup .nav-previous,.poptrox-popup .nav-next{-webkit-transition:opacity .2s ease-in-out;transition:opacity .2s ease-in-out;background-image:url(\"images/arrow.svg\");background-position:center;background-repeat:no-repeat;background-size:5em;cursor:pointer;height:8em;margin-top:-4em;opacity:0;position:absolute;top:50%;width:6em;z-index:2}\n.poptrox-popup .nav-previous{-webkit-transform:scaleX(-1);transform:scaleX(-1);left:0}\n.poptrox-popup .nav-next{right:0}\n.poptrox-popup .caption{padding:2em 2em .1em 2em ;background-image:-webkit-gradient(linear, left bottom, left top, color-stop(25%, rgba(16,16,16,0.45)), to(rgba(16,16,16,0)));background-image:linear-gradient(to top, rgba(16,16,16,0.45) 25%, rgba(16,16,16,0) 100%);bottom:0;cursor:default;left:0;position:absolute;text-align:left;width:100%;z-index:2}\n.poptrox-popup .caption h2,.poptrox-popup .caption h3,.poptrox-popup .caption h4,.poptrox-popup .caption h5,.poptrox-popup .caption h6{margin:0 0 .5em 0}\n.poptrox-popup .caption p{color:#fff}\n.poptrox-popup .loader{-webkit-animation:spinner 1s infinite linear !important;animation:spinner 1s infinite linear !important;background-image:url(\"images/spinner.svg\");background-position:center;background-repeat:no-repeat;background-size:contain;display:block;font-size:2em;height:2em;left:50%;line-height:2em;margin:-1em 0 0 -1em;opacity:0.25;position:absolute;text-align:center;top:50%;width:2em}\n.poptrox-popup:hover .closer,.poptrox-popup:hover .nav-previous,.poptrox-popup:hover .nav-next{opacity:0.5}\n.poptrox-popup:hover .closer:hover,.poptrox-popup:hover .nav-previous:hover,.poptrox-popup:hover .nav-next:hover{opacity:1.0}\n.poptrox-popup.loading:before{opacity:0}\nbody.touch .poptrox-popup .closer,body.touch .poptrox-popup .nav-previous,body.touch .poptrox-popup .nav-next{opacity:1.0 !important}\n@media screen and (max-width: 980px){.poptrox-popup .closer{background-size:3em}.poptrox-popup .nav-previous,.poptrox-popup .nav-next{background-size:4em}}\n@media screen and (max-width: 736px){.poptrox-popup:before{display:none}.poptrox-popup .caption{display:none !important}.poptrox-popup .closer,.poptrox-popup .nav-previous,.poptrox-popup .nav-next{display:none !important}}\n#wrapper{-webkit-transition:-moz-filter .5s ease,-webkit-filter .5s ease,-ms-filter .5s ease,-webkit-filter .5s ease;transition:-moz-filter .5s ease,-webkit-filter .5s ease,-ms-filter .5s ease,filter .5s ease;position:relative}\n#wrapper:after{pointer-events:none;-webkit-transition:opacity .5s ease,visibility .5s;transition:opacity .5s ease,visibility .5s;background:rgba(36,38,41,0.5);content:'';display:block;height:100%;left:0;opacity:0;position:absolute;top:0;visibility:hidden;width:100%;z-index:1}\nbody.ie #wrapper:after{background:rgba(36,38,41,0.8)}\nbody.modal-active #wrapper{-moz-filter:blur(8px);-webkit-filter:blur(8px);-ms-filter:blur(8px);filter:blur(8px)}\nbody.modal-active #wrapper:after{pointer-events:auto;opacity:1;visibility:visible;z-index:10003}\n#wrapper:before{-webkit-animation:spinner 1s infinite linear !important;animation:spinner 1s infinite linear !important;pointer-events:none;-webkit-transition:top 0.75s ease-in-out,opacity 0.35s ease-out,visibility 0.35s;transition:top 0.75s ease-in-out,opacity 0.35s ease-out,visibility 0.35s;background-image:url(\"images/spinner.svg\");background-position:center;background-repeat:no-repeat;background-size:contain;content:'';display:block;font-size:2em;height:2em;left:50%;line-height:2em;margin:-1em 0 0 -1em;opacity:0;position:fixed;text-align:center;top:75%;visibility:hidden;width:2em}\nbody.is-preload #wrapper:before{-webkit-transition:opacity 1s ease-out !important;transition:opacity 1s ease-out !important;-webkit-transition-delay:0.5s !important;transition-delay:0.5s !important;opacity:0.25;top:50%;visibility:visible}\nbody{padding:0 0 4em 0}\n#header{-webkit-transform:translateY(0);transform:translateY(0);-webkit-transition:-webkit-transform 1s ease;transition:-webkit-transform 1s ease;transition:transform 1s ease;transition:transform 1s ease, -webkit-transform 1s ease;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;background:#1f2224;bottom:-1em;height:5em;left:0;line-height:4em;padding:0 1.5em;position:fixed;user-select:none;width:100%;z-index:10002}\nbody.is-preload #header{-webkit-transform:translateY(4em);transform:translateY(4em)}\n#header h1{color:#a0a0a1;display:inline-block;font-size:1em;line-height:1;margin:0;vertical-align:middle}\n#header h1 a{border:0;color:inherit}\n#header h1 a:hover{color:inherit !important}\n#header nav{position:absolute;right:0;top:0}\n#header nav>ul{list-style:none;margin:0;padding:0}\n#header nav>ul>li{display:inline-block;padding:0}\n#header nav>ul>li a{-webkit-transition:background-color .5s ease;transition:background-color .5s ease;border:0;color:#fff;display:inline-block;letter-spacing:.1em;padding:0 1.65em;text-transform:uppercase}\n#header nav>ul>li a.icon:before{color:#505051;float:right;margin-left:0.75em}\n#header nav>ul>li a:hover{color:#fff !important}\n#header nav>ul>li a.active{background-color:#242629}\n@media screen and (max-width: 736px){body{padding:4em 0 0 0}#header{-webkit-transform:translateY(0);transform:translateY(0);bottom:auto;height:4em;padding:0 1em;top:0}body.is-preload #header{-webkit-transform:translateY(-3.4em);transform:translateY(-3.4em)}#header h1{font-size:0.9em}#header nav>ul>li a{font-size:0.9em;padding:0 1.15em}}\n#main{-webkit-transition:-moz-filter .5s ease,-webkit-filter .5s ease,-ms-filter .5s ease,-webkit-filter .5s ease;transition:-moz-filter .5s ease,-webkit-filter .5s ease,-ms-filter .5s ease,filter .5s ease;display:-moz-flex;display:-ms-flex;display:-webkit-box;display:flex;flex-wrap:wrap;-webkit-tap-highlight-color:rgba(255,255,255,0)}\n#main .thumb{-webkit-transition:opacity 1.25s ease-in-out;transition:opacity 1.25s ease-in-out;pointer-events:auto;-webkit-tap-highlight-color:rgba(255,255,255,0);opacity:1;overflow:hidden;position:relative}\n#main .thumb:after{background-image:-webkit-gradient(linear, left bottom, left top, color-stop(5%, rgba(10,17,25,0.35)), color-stop(35%, rgba(10,17,25,0)));background-image:linear-gradient(to top, rgba(10,17,25,0.35) 5%, rgba(10,17,25,0) 35%);pointer-events:none;background-size:cover;content:'';display:block;height:100%;left:0;position:absolute;top:0;width:100%}\n#main .thumb>.image{-webkit-tap-highlight-color:rgba(255,255,255,0);background-position:center;background-repeat:no-repeat;background-size:cover;border:0;height:100%;left:0;position:absolute;top:0;width:100%}\n#main .thumb>h2{pointer-events:none;bottom:1.875em;font-size:0.8em;left:2.1875em;margin:0;position:absolute;z-index:1}\n#main .thumb>p{display:none}\n#main:after{pointer-events:none;-webkit-transition:opacity .5s ease,visibility .5s;transition:opacity .5s ease,visibility .5s;background:rgba(36,38,41,0.25);content:'';display:block;height:100%;left:0;opacity:0;position:absolute;top:0;visibility:hidden;width:100%;z-index:1}\nbody.ie #main:after{background:rgba(36,38,41,0.55)}\nbody.content-active #main{-moz-filter:blur(6px);-webkit-filter:blur(6px);-ms-filter:blur(6px);filter:blur(6px)}\nbody.content-active #main:after{pointer-events:auto;opacity:1;visibility:visible}\nbody.is-preload #main .thumb{pointer-events:none;opacity:0}\n#main .thumb{-webkit-transition-delay:2.525s;transition-delay:2.525s;height:calc(40vh - 2em);min-height:20em;width:25%}\n#main .thumb:nth-child(1){-webkit-transition-delay:.65s;transition-delay:.65s}\n#main .thumb:nth-child(2){-webkit-transition-delay:.8s;transition-delay:.8s}\n#main .thumb:nth-child(3){-webkit-transition-delay:.95s;transition-delay:.95s}\n#main .thumb:nth-child(4){-webkit-transition-delay:1.1s;transition-delay:1.1s}\n#main .thumb:nth-child(5){-webkit-transition-delay:1.25s;transition-delay:1.25s}\n#main .thumb:nth-child(6){-webkit-transition-delay:1.4s;transition-delay:1.4s}\n#main .thumb:nth-child(7){-webkit-transition-delay:1.55s;transition-delay:1.55s}\n#main .thumb:nth-child(8){-webkit-transition-delay:1.7s;transition-delay:1.7s}\n#main .thumb:nth-child(9){-webkit-transition-delay:1.85s;transition-delay:1.85s}\n#main .thumb:nth-child(10){-webkit-transition-delay:2s;transition-delay:2s}\n#main .thumb:nth-child(11){-webkit-transition-delay:2.15s;transition-delay:2.15s}\n#main .thumb:nth-child(12){-webkit-transition-delay:2.3s;transition-delay:2.3s}\n@media screen and (max-width: 1680px){#main .thumb{-webkit-transition-delay:2.075s;transition-delay:2.075s;height:calc(40vh - 2em);min-height:20em;width:33.33333%}#main .thumb:nth-child(1){-webkit-transition-delay:.65s;transition-delay:.65s}#main .thumb:nth-child(2){-webkit-transition-delay:.8s;transition-delay:.8s}#main .thumb:nth-child(3){-webkit-transition-delay:.95s;transition-delay:.95s}#main .thumb:nth-child(4){-webkit-transition-delay:1.1s;transition-delay:1.1s}#main .thumb:nth-child(5){-webkit-transition-delay:1.25s;transition-delay:1.25s}#main .thumb:nth-child(6){-webkit-transition-delay:1.4s;transition-delay:1.4s}#main .thumb:nth-child(7){-webkit-transition-delay:1.55s;transition-delay:1.55s}#main .thumb:nth-child(8){-webkit-transition-delay:1.7s;transition-delay:1.7s}#main .thumb:nth-child(9){-webkit-transition-delay:1.85s;transition-delay:1.85s}}\n@media screen and (max-width: 1280px){#main .thumb{-webkit-transition-delay:1.625s;transition-delay:1.625s;height:calc(40vh - 2em);min-height:20em;width:50%}#main .thumb:nth-child(1){-webkit-transition-delay:.65s;transition-delay:.65s}#main .thumb:nth-child(2){-webkit-transition-delay:.8s;transition-delay:.8s}#main .thumb:nth-child(3){-webkit-transition-delay:.95s;transition-delay:.95s}#main .thumb:nth-child(4){-webkit-transition-delay:1.1s;transition-delay:1.1s}#main .thumb:nth-child(5){-webkit-transition-delay:1.25s;transition-delay:1.25s}#main .thumb:nth-child(6){-webkit-transition-delay:1.4s;transition-delay:1.4s}}\n@media screen and (max-width: 980px){#main .thumb{-webkit-transition-delay:2.075s;transition-delay:2.075s;height:calc(28.57143vh - 1.33333em);min-height:18em;width:50%}#main .thumb:nth-child(1){-webkit-transition-delay:.65s;transition-delay:.65s}#main .thumb:nth-child(2){-webkit-transition-delay:.8s;transition-delay:.8s}#main .thumb:nth-child(3){-webkit-transition-delay:.95s;transition-delay:.95s}#main .thumb:nth-child(4){-webkit-transition-delay:1.1s;transition-delay:1.1s}#main .thumb:nth-child(5){-webkit-transition-delay:1.25s;transition-delay:1.25s}#main .thumb:nth-child(6){-webkit-transition-delay:1.4s;transition-delay:1.4s}#main .thumb:nth-child(7){-webkit-transition-delay:1.55s;transition-delay:1.55s}#main .thumb:nth-child(8){-webkit-transition-delay:1.7s;transition-delay:1.7s}#main .thumb:nth-child(9){-webkit-transition-delay:1.85s;transition-delay:1.85s}}\n@media screen and (max-width: 480px){#main .thumb{-webkit-transition-delay:1.175s;transition-delay:1.175s;height:calc(40vh - 2em);min-height:18em;width:100%}#main .thumb:nth-child(1){-webkit-transition-delay:.65s;transition-delay:.65s}#main .thumb:nth-child(2){-webkit-transition-delay:.8s;transition-delay:.8s}#main .thumb:nth-child(3){-webkit-transition-delay:.95s;transition-delay:.95s}}\n#footer .copyright{color:#505051;font-size:0.9em}\n#footer .copyright a{color:inherit}\n";
})();

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map