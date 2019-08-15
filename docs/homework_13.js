/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/homework_13/homework_13.css":
/*!*****************************************!*\
  !*** ./src/homework_13/homework_13.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/homework_13/homework_13.js":
/*!****************************************!*\
  !*** ./src/homework_13/homework_13.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _homework_13_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homework_13.css */ "./src/homework_13/homework_13.css");
/* harmony import */ var _homework_13_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_homework_13_css__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Hello =
/*#__PURE__*/
function () {
  function Hello(id, idTwo, mainBlock, line, slide) {
    _classCallCheck(this, Hello);

    this.id = document.querySelector(id);
    this.idTwo = document.querySelector(idTwo);
    this.mainBlock = document.querySelector(mainBlock).offsetWidth;
    this.line = document.querySelector(line);
    this.slide = document.querySelectorAll(slide);
    this.block = document.querySelector(mainBlock);
    this.radio = document.querySelectorAll('.radio');
    this.radioBtnBlock = document.querySelector('.radio-buttons');
    this.step = 0;
    this.indexSlide = 0;
    this.arrWidth = [0];
    this.allWidth = 0;
    this.radio[0].classList.add('active');
    this.startSlider();
    this.onClick();
    this.width();
    this.mouseEvent();
    this.radioButton();
  }

  _createClass(Hello, [{
    key: "radioButton",
    value: function radioButton() {
      var _this = this;

      var _loop = function _loop(i) {
        _this.radio[i].onclick = function () {
          _this.toogleOff();

          _this.line.style.transform = 'translateX(-' + i * _this.arrWidth[i] + 'px';

          _this.radio[i].classList.add('active');

          _this.indexSlide = i;
          _this.step = _this.arrWidth[i] * i;
        };
      };

      for (var i = 0; i < this.slide.length; i++) {
        _loop(i);
      }
    }
  }, {
    key: "mouseEvent",
    value: function mouseEvent() {
      var _this2 = this;

      this.block.onmouseleave = function () {
        _this2.startSlider();
      };

      this.radioBtnBlock.onmouseenter = function () {
        _this2.stopSlider();
      };

      this.id.onmouseenter = function () {
        _this2.stopSlider();
      };

      this.idTwo.onmouseenter = function () {
        _this2.stopSlider();
      };

      this.radioBtnBlock.onmouseleave = function () {
        _this2.startSlider();
      };

      this.block.onmouseenter = function () {
        _this2.stopSlider();
      };
    }
  }, {
    key: "stopSlider",
    value: function stopSlider() {
      clearInterval(this.startSlide);
    }
  }, {
    key: "startSlider",
    value: function startSlider() {
      var _this3 = this;

      this.startSlide = setInterval(function () {
        _this3.right();
      }, 3000);
    }
  }, {
    key: "width",
    value: function width() {
      for (var i = 0; i < this.slide.length; i++) {
        this.arrWidth.push(this.slide[i].offsetWidth);
        this.allWidth += this.slide[i].offsetWidth;
      }
    }
  }, {
    key: "toogleOff",
    value: function toogleOff() {
      for (var i = 0; i < this.radio.length; i++) {
        this.radio[i].classList.remove('active');
      }
    }
  }, {
    key: "radioAuto",
    value: function radioAuto() {
      this.indexSlide = this.indexSlide + 1;

      if (this.indexSlide === this.slide.length) {
        this.indexSlide = 0;
      }

      this.toogleOff();
      this.radio[this.indexSlide].classList.add('active');
    }
  }, {
    key: "backSlide",
    value: function backSlide() {
      this.indexSlide = this.indexSlide - 1;

      if (this.indexSlide < 0) {
        this.indexSlide = 4;
      }

      this.toogleOff();
      this.radio[this.indexSlide].classList.add('active');
    }
  }, {
    key: "right",
    value: function right() {
      this.step += this.arrWidth[1];

      if (this.step > this.allWidth - this.arrWidth[1]) {
        this.step = 0;
      }

      ;
      this.line.style.transform = 'translateX(-' + this.step + 'px)';
      this.radioAuto();
    }
  }, {
    key: "left",
    value: function left() {
      this.step -= this.arrWidth[1];

      if (this.step < 0) {
        this.step = this.allWidth - this.arrWidth[1];
      }

      this.line.style.transform = 'translateX(-' + this.step + 'px)';
      this.backSlide();
    }
  }, {
    key: "onClick",
    value: function onClick() {
      var _this4 = this;

      this.id.onclick = function () {
        _this4.right();
      };

      this.idTwo.onclick = function () {
        _this4.left();
      };
    }
  }]);

  return Hello;
}();

new Hello('#right', '#left', '.container', '.sliders', '.slider');

/***/ }),

/***/ 8:
/*!**********************************************!*\
  !*** multi ./src/homework_13/homework_13.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/homework_13/homework_13.js */"./src/homework_13/homework_13.js");


/***/ })

/******/ });
//# sourceMappingURL=homework_13.js.map